"""Web entry points for the end-to-end knowledge engineering workflow.

The Semantica library already contains the individual ingestion, parsing,
normalisation, extraction, graph, governance, storage, and export modules.  This
router gives the Explorer a small, business-facing control plane over those
modules.  It intentionally does not accept passwords or API tokens in the
browser; external connections are registered by profile name and credentials
remain in the server environment or a local secret store.
"""

from __future__ import annotations

import csv
import asyncio
import json
import os
import re
import tempfile
import uuid
from datetime import UTC, datetime
from pathlib import Path
from typing import Any, Dict, List, Optional

from fastapi import APIRouter, Depends, File, HTTPException, UploadFile
from fastapi.responses import FileResponse
from pydantic import BaseModel, Field
from starlette.background import BackgroundTask

from ..dependencies import get_session
from ..session import GraphSession


router = APIRouter(
    prefix="/api/knowledge-engineering",
    tags=["Knowledge Engineering"],
)

_MAX_UPLOAD_BYTES = 50 * 1024 * 1024
_MAX_PREVIEW_CHARS = 2_000
_MAX_JOBS = 100
_MAX_REGISTERED_SOURCES = 100
_ALLOWED_FILE_EXTENSIONS = frozenset(
    {".pdf", ".docx", ".pptx", ".html", ".htm", ".csv", ".xml", ".txt", ".xlsx", ".xlsm"}
)


def _now() -> str:
    return datetime.now(UTC).isoformat()


def _safe_filename(filename: str) -> str:
    name = Path(filename or "uploaded-file").name
    name = re.sub(r"[^0-9A-Za-z_.\-\u3400-\u9fff]+", "_", name).strip("._")
    return name[:180] or "uploaded-file"


def _working_directory() -> Path:
    configured = os.environ.get("SEMANTICA_INGEST_DIR")
    if configured:
        root = Path(configured)
    else:
        root = Path(tempfile.gettempdir()) / "semantica-ingest"
    root.mkdir(parents=True, exist_ok=True)
    return root


def _export_directory() -> Path:
    configured = os.environ.get("SEMANTICA_EXPORT_DIR")
    if configured:
        root = Path(configured)
    else:
        root = Path(tempfile.gettempdir()) / "semantica-exports"
    root.mkdir(parents=True, exist_ok=True)
    return root


def _module_present(module_name: str) -> bool:
    package_root = Path(__file__).resolve().parents[2]
    parts = module_name.split(".")
    if parts and parts[0] == "semantica":
        parts = parts[1:]
    module_path = package_root.joinpath(*parts)
    return module_path.with_suffix(".py").is_file() or (module_path / "__init__.py").is_file()


def _module_status(module_name: str, optional_packages: Optional[List[str]] = None) -> Dict[str, Any]:
    missing = []
    for package in optional_packages or []:
        try:
            __import__(package)
        except ImportError:
            missing.append(package)
    return {
        "module": module_name,
        "module_present": _module_present(module_name),
        "missing_dependencies": missing,
        "status": "ready" if _module_present(module_name) and not missing else "needs_setup",
    }


SOURCE_DEFINITIONS: List[Dict[str, Any]] = [
    {
        "id": "file",
        "label": "文件",
        "description": "PDF、DOCX、PPTX、HTML、CSV、XML、XLSX",
        "module": "semantica.ingest.file_ingestor",
        "parser_module": "semantica.parse.document_parser",
        "connection": "网页上传",
        "optional_dependencies": [],
    },
    {
        "id": "web",
        "label": "网页",
        "description": "网页抓取、站点地图与链接发现",
        "module": "semantica.ingest.web_ingestor",
        "connection": "URL",
        "optional_dependencies": ["requests", "bs4"],
    },
    {
        "id": "feed",
        "label": "RSS / Atom",
        "description": "订阅源读取与更新监测",
        "module": "semantica.ingest.feed_ingestor",
        "connection": "RSS地址",
        "optional_dependencies": ["requests", "bs4"],
    },
    {
        "id": "database",
        "label": "数据库",
        "description": "PostgreSQL、MySQL、SQLite、Oracle、SQL Server",
        "module": "semantica.ingest.db_ingestor",
        "connection": "连接配置",
        "optional_dependencies": ["sqlalchemy"],
    },
    {
        "id": "databricks",
        "label": "Databricks",
        "description": "Unity Catalog、Delta Lake、数据表与来源记录",
        "module": "semantica.ingest.databricks_ingestor",
        "connection": "环境变量 / 连接配置",
        "optional_dependencies": ["databricks", "databricks.sql"],
    },
    {
        "id": "snowflake",
        "label": "Snowflake",
        "description": "数据仓库、数据库、表结构与查询",
        "module": "semantica.ingest.snowflake_ingestor",
        "connection": "环境变量 / 连接配置",
        "optional_dependencies": ["snowflake.connector"],
    },
    {
        "id": "gdrive",
        "label": "Google Drive",
        "description": "云端文件与文件夹读取",
        "module": "semantica.ingest.gdrive_ingestor",
        "connection": "服务账号或授权登录",
        "optional_dependencies": [],
    },
    {
        "id": "elasticsearch",
        "label": "Elasticsearch",
        "description": "索引、文档与检索结果接入",
        "module": "semantica.ingest.elastic_ingestor",
        "connection": "服务地址 / 环境变量",
        "optional_dependencies": [],
    },
    {
        "id": "stream",
        "label": "消息流",
        "description": "Kafka、Kinesis、RabbitMQ、Pulsar",
        "module": "semantica.ingest.stream_ingestor",
        "connection": "集群 / 流配置",
        "optional_dependencies": [],
    },
    {
        "id": "git",
        "label": "Git",
        "description": "仓库、分支、提交与代码结构",
        "module": "semantica.ingest.repo_ingestor",
        "connection": "仓库地址",
        "optional_dependencies": ["git"],
    },
    {
        "id": "email",
        "label": "邮件",
        "description": "IMAP / POP3、正文与附件",
        "module": "semantica.ingest.email_ingestor",
        "connection": "邮箱连接配置",
        "optional_dependencies": ["bs4"],
    },
    {
        "id": "mcp",
        "label": "MCP",
        "description": "MCP资源与工具上下文",
        "module": "semantica.ingest.mcp_ingestor",
        "connection": "MCP服务配置",
        "optional_dependencies": [],
    },
]

LAYER_DEFINITIONS: List[Dict[str, Any]] = [
    {
        "id": "ingest",
        "number": 1,
        "label": "导入资料",
        "description": "把文件、网页、数据库和实时消息放进工作区。",
        "modules": ["semantica.ingest", "semantica.ingest.methods"],
    },
    {
        "id": "prepare",
        "number": 2,
        "label": "整理资料",
        "description": "读取文档、统一名称和日期，再按主题切成小段。",
        "modules": ["semantica.parse", "semantica.normalize", "semantica.split"],
    },
    {
        "id": "extract",
        "number": 3,
        "label": "识别人和关系",
        "description": "找出人物、项目和关系，标记矛盾并合并重复项。",
        "modules": ["semantica.semantic_extract", "semantica.conflicts", "semantica.deduplication"],
    },
    {
        "id": "graph",
        "number": 4,
        "label": "生成关系网络",
        "description": "把人物、项目和研究方向连接成可以查询的网络。",
        "modules": ["semantica.kg", "semantica.context"],
    },
    {
        "id": "govern",
        "number": 5,
        "label": "统一概念和规则",
        "description": "统一分类和叫法，检查数据规则，并记录每条信息来自哪里。",
        "modules": ["semantica.ontology", "semantica.reasoning", "semantica.provenance"],
    },
    {
        "id": "storage",
        "number": 6,
        "label": "选择保存方式",
        "description": "按数据量和使用方式选择图数据库、语义库或向量库。",
        "modules": ["semantica.triplet_store", "semantica.graph_store", "semantica.vector_store"],
    },
    {
        "id": "deliver",
        "number": 7,
        "label": "查看、下载和接入",
        "description": "在网页查看图谱，下载标准文件，或接入其他应用。",
        "modules": ["semantica.export", "semantica.visualization", "semantica.mcp_server"],
    },
]

_registered_sources: List[Dict[str, Any]] = []
_jobs: List[Dict[str, Any]] = []


class SourceRegistrationRequest(BaseModel):
    source_type: str = Field(..., min_length=1, max_length=50)
    name: str = Field(..., min_length=1, max_length=120)
    location: str = Field(..., min_length=1, max_length=1_000)
    profile: Optional[str] = Field(default=None, max_length=120)
    note: Optional[str] = Field(default=None, max_length=500)


class ExportSnapshotRequest(BaseModel):
    format: str = Field(default="json", min_length=1, max_length=30)


class GraphQuestionRequest(BaseModel):
    question: str = Field(..., min_length=1, max_length=500)


def _qa_normalize(value: Any) -> str:
    return re.sub(r"[\s，。！？、,.!?：:；;（）()《》\[\]]+", "", str(value or "")).casefold()


def _qa_properties(record: Dict[str, Any]) -> Dict[str, Any]:
    value = record.get("metadata", record.get("properties", {}))
    return value if isinstance(value, dict) else {}


def _qa_terms(entity: Dict[str, Any]) -> List[str]:
    properties = _qa_properties(entity)
    values: List[Any] = [
        entity.get("text", entity.get("content", "")),
        properties.get("name"),
        properties.get("name_en"),
    ]
    aliases = properties.get("aliases", [])
    if isinstance(aliases, list):
        values.extend(aliases)
    return [_qa_normalize(value) for value in values if value]


def _qa_sources(records: List[Dict[str, Any]]) -> List[Dict[str, str]]:
    sources: List[Dict[str, str]] = []
    seen: set[str] = set()
    for record in records:
        raw_sources = _qa_properties(record).get("sources", [])
        if not isinstance(raw_sources, list):
            continue
        for source in raw_sources:
            if not isinstance(source, dict) or not source.get("url"):
                continue
            url = str(source["url"])
            if url in seen:
                continue
            seen.add(url)
            sources.append({"title": str(source.get("title") or url), "url": url})
    return sources


def _answer_graph_question(graph: Dict[str, Any], question: str) -> Dict[str, Any]:
    entities = graph.get("entities", [])
    relationships = graph.get("relationships", [])
    entity_by_id = {entity.get("id"): entity for entity in entities if entity.get("id")}
    normalized = _qa_normalize(question)

    def response(answer: str, records: List[Dict[str, Any]], related: List[Dict[str, Any]], intent: str) -> Dict[str, Any]:
        return {
            "answer": answer,
            "intent": intent,
            "sources": _qa_sources(records),
            "entities": [
                {
                    "id": entity.get("id", ""),
                    "name": entity.get("text", entity.get("content", entity.get("id", ""))),
                    "type": entity.get("type", "entity"),
                }
                for entity in related[:30]
            ],
            "reasoning": "回答只使用当前已载入的知识图谱，并附上官网来源；图谱没有记录的内容不会补写。",
        }

    if any(token in normalized for token in ("多少节点", "多少实体", "图谱规模", "多少关系")):
        return response(
            f"当前图谱包含 {len(entities)} 个知识条目和 {len(relationships)} 条关系。",
            entities[:1],
            [],
            "graph_stats",
        )

    schools = [entity for entity in entities if entity.get("type") == "School"]
    if "院长" in normalized:
        lead_relations = [relationship for relationship in relationships if relationship.get("type") == "LEADS"]
        people = [entity_by_id.get(relationship.get("source")) for relationship in lead_relations]
        people = [person for person in people if person]
        if people:
            labels = []
            for person in people:
                properties = _qa_properties(person)
                name = person.get("text", person.get("id", ""))
                if properties.get("name_en") and properties["name_en"] != name:
                    name = f"{name}（{properties['name_en']}）"
                labels.append(f"{name}，{properties.get('title', '教师')}")
            return response(
                "数据科学学院院长是" + "；".join(labels) + "。",
                [*people, *lead_relations, *schools],
                people,
                "find_dean",
            )

    if any(token in normalized for token in ("项目", "专业", "本科", "硕士", "博士")):
        if "本科" in normalized:
            level = "本科"
        elif "博士" in normalized or "硕博" in normalized:
            level = "研究型硕博"
        elif "硕士" in normalized or "研究生" in normalized:
            level = "授课型硕士"
        else:
            level = ""
        programs = [
            entity for entity in entities
            if entity.get("type") == "Program"
            and (not level or _qa_properties(entity).get("level") == level)
        ]
        programs.sort(key=lambda item: str(item.get("text", "")))
        heading = f"{level}项目" if level else "培养项目"
        return response(
            f"数据科学学院图谱中的{heading}包括：" + "、".join(str(item.get("text", "")) for item in programs) + "。",
            programs,
            programs,
            "list_programmes",
        )

    people = [entity for entity in entities if entity.get("type") == "Person"]
    mentioned_people = [
        person for person in people
        if any(term and term in normalized for term in _qa_terms(person))
    ]
    if mentioned_people:
        person = max(mentioned_people, key=lambda item: max(map(len, _qa_terms(item))))
        person_id = person.get("id")
        research_relations = [
            relationship for relationship in relationships
            if relationship.get("source") == person_id and relationship.get("type") == "RESEARCHES"
        ]
        areas = [entity_by_id.get(relationship.get("target")) for relationship in research_relations]
        areas = [area for area in areas if area]
        properties = _qa_properties(person)
        details = [str(properties.get("title") or "教师")]
        if properties.get("email"):
            details.append(f"邮箱 {properties['email']}")
        if properties.get("office"):
            details.append(f"办公室 {properties['office']}")
        answer = f"{person.get('text', person_id)}：" + "；".join(details) + "。"
        if areas:
            answer += "官网记录的研究主题包括：" + "、".join(str(area.get("text", "")) for area in areas) + "。"
        return response(answer, [person, *research_relations, *areas], [person, *areas], "person_profile")

    if any(token in normalized for token in ("学科方向", "学习方向", "应用领域", "专业特色")):
        fields = [entity for entity in entities if entity.get("type") == "AcademicField"]
        descriptions = [
            f"{field.get('text', '')}：{_qa_properties(field).get('student_summary', '')}"
            for field in fields
        ]
        return response(
            "学院官网图谱中的方向包括：" + "；".join(descriptions) + "。",
            fields,
            fields,
            "list_academic_fields",
        )

    topic_query = re.sub(r"^(谁|哪些老师|哪些教师|老师|教师)?(在)?(研究|做|关注)", "", normalized)
    topic_query = re.sub(r"(方向|领域|相关内容|的是谁|的老师|的教师|吗)+$", "", topic_query)
    areas = [entity for entity in entities if entity.get("type") == "ResearchArea"]
    matched_areas = [
        area for area in areas
        if any(
            term and (term in normalized or (len(topic_query) >= 2 and topic_query in term))
            for term in _qa_terms(area)
        )
    ]
    if matched_areas:
        area_ids = {area.get("id") for area in matched_areas}
        research_relations = [
            relationship for relationship in relationships
            if relationship.get("type") == "RESEARCHES" and relationship.get("target") in area_ids
        ]
        researchers = {
            relationship.get("source"): entity_by_id.get(relationship.get("source"))
            for relationship in research_relations
        }
        researcher_list = sorted(
            [person for person in researchers.values() if person],
            key=lambda item: str(item.get("text", "")),
        )
        shown = researcher_list[:20]
        suffix = f"等 {len(researcher_list)} 位教师" if len(researcher_list) > 20 else ""
        answer = "官网图谱中与这个主题相关的教师包括：" + "、".join(str(item.get("text", "")) for item in shown)
        answer += (f"，{suffix}。" if suffix else "。")
        return response(
            answer,
            [*matched_areas, *research_relations, *researcher_list],
            [*matched_areas, *shown],
            "find_researchers",
        )

    if schools and any(token in normalized for token in ("学院", "介绍", "概况", "数据科学")):
        school = schools[0]
        properties = _qa_properties(school)
        answer = str(properties.get("student_summary") or properties.get("description") or school.get("text", ""))
        answer += f" 官网教师目录快照收录 {properties.get('teacher_directory_profile_count', len(people))} 个公开档案。"
        return response(answer, [school], [school], "school_overview")

    tokens = [token for token in re.split(r"的|和|与|是|有|哪些|什么|介绍|信息", normalized) if len(token) >= 2]
    matches = [
        entity for entity in entities
        if any(token in "".join(_qa_terms(entity)) for token in tokens)
    ][:10]
    if matches:
        return response(
            "我找到了这些相关条目：" + "、".join(str(entity.get("text", "")) for entity in matches) + "。你可以继续询问某位教师的研究方向或培养项目。",
            matches,
            matches,
            "graph_search",
        )
    return response(
        "当前图谱没有找到直接答案。可以试试：‘院长是谁？’、‘有哪些硕士项目？’、‘谁研究机器学习？’或‘查宏远研究什么？’。",
        [],
        [],
        "no_match",
    )


def _parse_local_file(path: Path) -> Dict[str, Any]:
    suffix = path.suffix.lower()
    try:
        if suffix == ".pdf":
            from ...parse.pdf_parser import PDFParser

            parsed = PDFParser().extract_text(path)
            return {"text": parsed, "metadata": {"parser": "PDFParser"}}
        if suffix == ".docx":
            from ...parse.docx_parser import DOCXParser

            parsed = DOCXParser().extract_text(path)
            return {"text": parsed, "metadata": {"parser": "DOCXParser"}}
        if suffix == ".pptx":
            from ...parse.pptx_parser import PPTXParser

            parsed = PPTXParser().extract_text(path)
            return {"text": parsed, "metadata": {"parser": "PPTXParser"}}
        if suffix in {".html", ".htm"}:
            from ...parse.html_parser import HTMLParser

            parsed = HTMLParser().extract_text(path)
            return {"text": parsed, "metadata": {"parser": "HTMLParser"}}
        if suffix == ".csv":
            from ...parse.csv_parser import CSVParser

            parsed = CSVParser().parse(path, max_rows=5_000)
            lines = [", ".join(parsed.headers)]
            lines.extend(", ".join(str(row.get(header, "")) for header in parsed.headers) for row in parsed.rows)
            return {
                "text": "\n".join(lines),
                "metadata": {"parser": "CSVParser", "rows": parsed.row_count, "columns": parsed.headers},
            }
        if suffix == ".xml":
            from ...parse.xml_parser import XMLParser

            parsed = XMLParser().parse(path)

            def flatten(element: Any) -> List[str]:
                parts = []
                if getattr(element, "text", ""):
                    parts.append(str(element.text))
                for child in getattr(element, "children", []) or []:
                    parts.extend(flatten(child))
                return parts

            return {
                "text": "\n".join(flatten(parsed.root)),
                "metadata": {"parser": "XMLParser", "namespaces": parsed.namespaces},
            }
        if suffix in {".xlsx", ".xlsm"}:
            from ...parse.excel_parser import ExcelParser

            parsed = ExcelParser().parse(path, max_rows=5_000)
            sheets = parsed.sheets if hasattr(parsed, "sheets") else {parsed.name: parsed}
            parts: List[str] = []
            total_rows = 0
            for sheet_name, sheet in sheets.items():
                parts.append(f"## 工作表：{sheet_name}")
                headers = [str(header) for header in (sheet.headers or [])]
                if headers:
                    parts.append(", ".join(headers))
                for row in sheet.data:
                    parts.append(", ".join(str(row.get(header, "")) for header in sheet.headers))
                total_rows += int(getattr(sheet, "row_count", len(sheet.data)))
            return {
                "text": "\n".join(parts),
                "metadata": {
                    "parser": "ExcelParser",
                    "sheets": list(sheets.keys()),
                    "rows": total_rows,
                },
            }
        return {"text": path.read_text(encoding="utf-8", errors="ignore"), "metadata": {"parser": "plain-text"}}
    except Exception as exc:
        message = str(exc)
        setup_required = any(token in message.lower() for token in ("required", "install", "module named"))
        return {
            "text": "",
            "metadata": {"parser": suffix.lstrip(".") or "unknown"},
            "status": "needs_setup" if setup_required else "failed",
            "message": message,
        }


def _prepare_preview(text: str) -> Dict[str, Any]:
    if not text:
        return {
            "normalize": {"status": "skipped", "text_length": 0},
            "chunk": {"status": "skipped", "count": 0},
        }

    try:
        from ...normalize.text_normalizer import TextNormalizer

        normalized = TextNormalizer().normalize(text)
        normalize_result: Dict[str, Any] = {
            "status": "completed",
            "text_length": len(normalized),
        }
    except Exception as exc:
        normalized = text
        normalize_result = {"status": "failed", "text_length": len(text), "message": str(exc)}

    try:
        from ...split.kg_chunkers import EntityAwareChunker

        chunks = EntityAwareChunker(
            chunk_size=800,
            chunk_overlap=120,
            ner_method="pattern",
        ).chunk(normalized)
        chunk_result: Dict[str, Any] = {
            "status": "completed",
            "count": len(chunks),
            "method": "entity_aware",
            "chunk_size": 800,
        }
    except Exception as exc:
        chunk_result = {
            "status": "needs_setup",
            "count": 0,
            "method": "entity_aware",
            "message": str(exc),
        }

    return {"normalize": normalize_result, "chunk": chunk_result}


@router.get("/catalog")
async def catalog() -> Dict[str, Any]:
    source_statuses = []
    for source in SOURCE_DEFINITIONS:
        status = _module_status(source["module"], source.get("optional_dependencies"))
        source_statuses.append({**source, **status})

    layer_statuses = []
    for layer in LAYER_DEFINITIONS:
        modules = [_module_status(module) for module in layer["modules"]]
        layer_statuses.append({
            **layer,
            "status": "ready" if all(item["module_present"] for item in modules) else "needs_setup",
            "module_statuses": modules,
        })

    return {
        "layers": layer_statuses,
        "sources": source_statuses,
        "registered_sources": list(reversed(_registered_sources)),
        "jobs": list(reversed(_jobs)),
        "security_note": "凭据不在网页保存，请使用本机环境变量或密钥存储配置。",
    }


@router.post("/ask")
async def ask_graph(
    body: GraphQuestionRequest,
    session: GraphSession = Depends(get_session),
) -> Dict[str, Any]:
    """Answer a focused question using only the graph currently in memory."""
    graph = await asyncio.to_thread(session.build_graph_dict)
    return await asyncio.to_thread(_answer_graph_question, graph, body.question.strip())


@router.post("/sources")
async def register_source(body: SourceRegistrationRequest) -> Dict[str, Any]:
    source = next((item for item in SOURCE_DEFINITIONS if item["id"] == body.source_type), None)
    if source is None:
        raise HTTPException(status_code=422, detail=f"Unsupported source type: {body.source_type}")

    item = {
        "id": f"src_{uuid.uuid4().hex[:12]}",
        "source_type": body.source_type,
        "name": body.name,
        "location": body.location,
        "profile": body.profile,
        "note": body.note,
        "status": "registered",
        "created_at": _now(),
        "module": source["module"],
    }
    _registered_sources.append(item)
    del _registered_sources[:-_MAX_REGISTERED_SOURCES]
    return {
        "status": "registered",
        "message": "接入源已登记。连接凭据请在服务器环境中配置，随后即可执行实际摄取。",
        "source": item,
    }


@router.post("/ingest/file")
async def ingest_file(file: UploadFile = File(...)) -> Dict[str, Any]:
    filename = _safe_filename(file.filename or "uploaded-file")
    suffix = Path(filename).suffix.lower()
    if suffix not in _ALLOWED_FILE_EXTENSIONS:
        raise HTTPException(
            status_code=422,
            detail=f"支持的文件类型：{', '.join(sorted(_ALLOWED_FILE_EXTENSIONS))}",
        )

    content = await file.read()
    if len(content) > _MAX_UPLOAD_BYTES:
        raise HTTPException(status_code=413, detail="文件超过 50 MB 限制")
    if not content:
        raise HTTPException(status_code=422, detail="不能摄取空文件")

    job_id = f"ing_{uuid.uuid4().hex[:12]}"
    path = _working_directory() / f"{job_id}_{filename}"
    path.write_bytes(content)

    ingest_result: Dict[str, Any] = {
        "status": "completed",
        "filename": filename,
        "stored_as": path.name,
        "bytes": len(content),
        "source_type": "file",
    }
    parsed = _parse_local_file(path)
    parse_status = parsed.get("status", "completed")
    text = str(parsed.get("text") or "")
    preview = {
        "status": parse_status,
        "text_length": len(text),
        "preview": text[:_MAX_PREVIEW_CHARS],
        "metadata": parsed.get("metadata", {}),
    }
    if parsed.get("message"):
        preview["message"] = parsed["message"]
    preview.update(_prepare_preview(text))

    job = {
        "job_id": job_id,
        "created_at": _now(),
        "status": "completed" if parse_status == "completed" else parse_status,
        "filename": filename,
        "stages": {
            "ingest": ingest_result,
            "parse": {k: v for k, v in preview.items() if k not in {"normalize", "chunk"}},
            "normalize": preview["normalize"],
            "chunk": preview["chunk"],
            "extract": {"status": "not_started", "next": "识别文字中的人物、项目、关系和事件"},
            "graph": {"status": "not_started", "next": "确认识别结果后生成关系网络"},
        },
    }
    _jobs.append(job)
    del _jobs[:-_MAX_JOBS]
    return job


def _write_csv(graph: Dict[str, Any], path: Path) -> None:
    with path.open("w", encoding="utf-8-sig", newline="") as handle:
        writer = csv.writer(handle)
        writer.writerow(["kind", "id", "type", "content", "source", "target", "weight"])
        for node in graph.get("entities", graph.get("nodes", [])):
            writer.writerow(["node", node.get("id"), node.get("type"), node.get("text", node.get("content", "")), "", "", ""])
        for edge in graph.get("relationships", graph.get("edges", [])):
            writer.writerow(["edge", edge.get("id"), edge.get("type"), "", edge.get("source", edge.get("source_id")), edge.get("target", edge.get("target_id")), edge.get("weight", 1)])


def _export_graph(graph: Dict[str, Any], requested_format: str, path: Path) -> str:
    fmt = requested_format.lower().strip().replace("-", "_")
    if fmt == "json":
        path.write_text(json.dumps(graph, ensure_ascii=False, indent=2, default=str), encoding="utf-8")
        return "application/json"
    if fmt == "csv":
        _write_csv(graph, path)
        return "text/csv"

    from ...export.methods import export_lpg, export_owl, export_rdf

    if fmt in {"rdf", "turtle", "ttl", "rdfxml", "ntriples", "n3", "jsonld"}:
        rdf_format = {"rdf": "turtle", "ttl": "turtle", "jsonld": "jsonld", "rdfxml": "rdfxml"}.get(fmt, fmt)
        export_rdf(graph, path, format=rdf_format)
        if rdf_format == "jsonld":
            return "application/ld+json"
        return "text/turtle" if rdf_format in {"turtle", "n3"} else "application/rdf+xml"
    if fmt in {"owl", "owl_xml"}:
        export_owl(graph, path, format="owl-xml")
        return "application/rdf+xml"
    if fmt == "cypher":
        export_lpg(graph, path, method="cypher")
        return "text/plain"
    if fmt == "parquet":
        import pyarrow as pa
        import pyarrow.parquet as pq

        records = []
        for node in graph.get("entities", graph.get("nodes", [])):
            records.append({
                "kind": "node",
                "id": str(node.get("id", "")),
                "type": str(node.get("type", "")),
                "content": str(node.get("text", node.get("content", ""))),
                "source": "",
                "target": "",
                "weight": float(node.get("weight", 1) or 1),
            })
        for edge in graph.get("relationships", graph.get("edges", [])):
            records.append({
                "kind": "edge",
                "id": str(edge.get("id", "")),
                "type": str(edge.get("type", "")),
                "content": "",
                "source": str(edge.get("source", edge.get("source_id", ""))),
                "target": str(edge.get("target", edge.get("target_id", ""))),
                "weight": float(edge.get("weight", 1) or 1),
            })
        table = pa.Table.from_pylist(records)
        pq.write_table(table, path, compression="snappy")
        return "application/vnd.apache.parquet"
    raise HTTPException(status_code=422, detail=f"不支持的导出格式：{requested_format}")


@router.post("/export")
async def export_snapshot(
    body: ExportSnapshotRequest,
    session: GraphSession = Depends(get_session),
) -> FileResponse:
    allowed = {"json", "csv", "rdf", "turtle", "ttl", "rdfxml", "jsonld", "owl", "owl_xml", "cypher", "parquet"}
    fmt = body.format.lower().strip().replace("-", "_")
    if fmt not in allowed:
        raise HTTPException(status_code=422, detail=f"可选格式：{', '.join(sorted(allowed))}")

    graph = await asyncio.to_thread(session.build_graph_dict)
    suffix = {"rdf": ".ttl", "turtle": ".ttl", "ttl": ".ttl", "rdfxml": ".rdf", "jsonld": ".jsonld", "owl": ".owl", "owl_xml": ".owl", "cypher": ".cypher", "parquet": ".parquet"}.get(fmt, f".{fmt}")
    path = _export_directory() / f"cuhksz_sds_graph_{uuid.uuid4().hex[:10]}{suffix}"
    media_type = _export_graph(graph, fmt, path)
    return FileResponse(
        path,
        media_type=media_type,
        filename=f"cuhksz_sds_graph{suffix}",
        background=BackgroundTask(lambda: path.unlink(missing_ok=True)),
    )
