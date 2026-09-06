"""Build the SDS seed graph from public pages on the official school website.

The teacher directory is paginated.  This script downloads every page, keeps
the page URL as provenance, and turns each visible profile plus its research
interests into graph entities and relationships.  Core programme and school
facts remain curated because the official introduction expresses them as
prose rather than a stable machine-readable feed.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import subprocess
import tempfile
from pathlib import Path
from urllib.parse import urljoin

from bs4 import BeautifulSoup

from common import PROJECT_DIR, SEED_PATH, SOURCES_PATH, read_json, write_json


BASE_URL = "https://sds.cuhk.edu.cn"
RETRIEVED_AT = "2026-09-05"

CORE_PAGES = {
    "programs": ("https://sds.cuhk.edu.cn/node/196", "数据科学学院项目简介"),
    "directions": ("https://sds.cuhk.edu.cn/page/525", "数据科学学院学科方向"),
    "features": ("https://sds.cuhk.edu.cn/data/features", "数据科学与大数据技术专业优势与特色"),
    "dean": ("https://sds.cuhk.edu.cn/node/173", "数据科学学院院长致辞"),
}

ACADEMIC_FIELDS = [
    ("field:computer_science", "计算机科学与技术", "学科方向", "研究计算机、软件、网络和人工智能如何工作。", "src_sds_directions"),
    ("field:statistics", "统计学", "学科方向", "学习怎样从数据中发现规律，并用证据支持判断。", "src_sds_directions"),
    ("field:data_science", "数据科学与大数据技术", "学科方向", "把计算机、统计和运筹方法结合起来，解决真实的数据问题。", "src_sds_directions"),
    ("field:advanced_data_science", "高级数据科学", "专业学习领域", "深入学习数据科学的核心理论与方法。", "src_sds_features"),
    ("field:operations_management", "运筹管理", "专业应用领域", "用数据和数学方法改进排程、物流与资源分配。", "src_sds_features"),
    ("field:life_science", "生命科学", "专业应用领域", "把数据科学用于生物、医疗和健康问题。", "src_sds_features"),
    ("field:computing", "计算", "专业应用领域", "把数据科学用于软件、系统与智能计算。", "src_sds_features"),
    ("field:finance_economics", "金融经济", "专业应用领域", "把数据分析用于金融、风险与经济决策。", "src_sds_features"),
]

SCHOOL_RESEARCH_FOCI = [
    "机器学习",
    "深度学习",
    "算法设计",
    "优化方法",
    "统计推断",
    "智能医疗",
    "金融科技",
    "机器人",
    "供应链智能化",
    "生物信息学",
    "通信系统",
    "金融",
    "人工智能医学诊断",
    "精准医疗",
    "云计算",
    "供应链管理",
]


def _download(url: str, destination: Path) -> None:
    destination.parent.mkdir(parents=True, exist_ok=True)
    command = [
        "curl",
        "--fail",
        "--silent",
        "--show-error",
        "--location",
        "--http1.1",
        "--tlsv1.2",
        "--user-agent",
        "Mozilla/5.0 (compatible; CUHKSZ-SDS-KG/1.0)",
        "--max-time",
        "60",
        "--output",
        str(destination),
        url,
    ]
    subprocess.run(command, check=True)


def _clean_text(element, separator: str = " ") -> str:
    if element is None:
        return ""
    return re.sub(r"\s+", " ", element.get_text(separator, strip=True)).strip()


def _without_label(element) -> str:
    if element is None:
        return ""
    clone = BeautifulSoup(str(element), "html.parser")
    for label in clone.select("span"):
        label.decompose()
    return _clean_text(clone)


def _split_outside_parentheses(text: str) -> list[str]:
    values: list[str] = []
    current: list[str] = []
    depth = 0
    for character in text:
        if character in "（(【[":
            depth += 1
        elif character in "）)】]" and depth:
            depth -= 1
        if character in "、；;" and depth == 0:
            value = "".join(current).strip(" ，,。")
            if value:
                values.append(value)
            current = []
        else:
            current.append(character)
    value = "".join(current).strip(" ，,。")
    if value:
        values.append(value)
    return list(dict.fromkeys(values))


def _safe_area_id(name: str) -> str:
    normalized = re.sub(r"\s+", "", name).casefold()
    digest = hashlib.sha1(normalized.encode("utf-8")).hexdigest()[:12]
    return f"area:{digest}"


def _page_files(html_dir: Path | None) -> tuple[dict[str, Path], list[Path]]:
    if html_dir is None:
        html_dir = Path(tempfile.mkdtemp(prefix="cuhksz-sds-"))
        for key, (url, _) in CORE_PAGES.items():
            _download(url, html_dir / f"cuhksz_sds_{key}.html")
        first = html_dir / "cuhksz_sds_teacher_page_0.html"
        _download(f"{BASE_URL}/teacher-search?page=0", first)
        soup = BeautifulSoup(first.read_text(encoding="utf-8"), "html.parser")
        page_numbers = [
            int(match.group(1))
            for anchor in soup.select('a[href*="teacher-search?page="], .pager a[href*="page="]')
            if (match := re.search(r"[?&]page=(\d+)", anchor.get("href", "")))
        ]
        last_page = max(page_numbers, default=0)
        for page_number in range(1, last_page + 1):
            _download(
                f"{BASE_URL}/teacher-search?page={page_number}",
                html_dir / f"cuhksz_sds_teacher_page_{page_number}.html",
            )

    core_files = {
        key: html_dir / f"cuhksz_sds_{key}.html"
        for key in CORE_PAGES
    }
    teacher_files = sorted(
        html_dir.glob("cuhksz_sds_teacher_page_*.html"),
        key=lambda path: int(re.search(r"_(\d+)\.html$", path.name).group(1)),
    )
    missing = [str(path) for path in core_files.values() if not path.is_file()]
    if missing:
        raise FileNotFoundError("缺少官网页面快照：" + "、".join(missing))
    if not teacher_files:
        raise FileNotFoundError("没有找到教师目录分页快照")
    return core_files, teacher_files


def _parse_teacher_pages(teacher_files: list[Path]) -> tuple[list[dict], list[dict]]:
    people: list[dict] = []
    sources: list[dict] = []
    seen_ids: set[str] = set()

    for path in teacher_files:
        page_number = int(re.search(r"_(\d+)\.html$", path.name).group(1))
        source_id = f"src_sds_teachers_page_{page_number}"
        sources.append({
            "id": source_id,
            "title": f"数据科学学院教师目录（第 {page_number + 1} 页）",
            "url": f"{BASE_URL}/teacher-search?page={page_number}",
            "publisher": "香港中文大学（深圳）数据科学学院",
        })
        soup = BeautifulSoup(path.read_text(encoding="utf-8"), "html.parser")
        for card in soup.select("div.list-content"):
            anchor = card.select_one('.list-title a[href*="/teacher/"]')
            if anchor is None:
                continue
            match = re.search(r"/teacher/(\d+)", anchor.get("href", ""))
            if not match:
                continue
            teacher_id = match.group(1)
            if teacher_id in seen_ids:
                continue
            seen_ids.add(teacher_id)

            listed_name = _clean_text(anchor)
            future_match = re.search(r"（将在(.+?)加入）", listed_name)
            name = re.sub(r"（将在.+?加入）", "", listed_name).strip()
            descriptions = card.select(".list-text > .list-des")
            title_parts = [part.strip() for part in _clean_text(descriptions[0], "|").split("|") if part.strip()] if descriptions else []
            title = title_parts[0] if title_parts else "教师"
            roles = title_parts[1:]
            education = _clean_text(descriptions[1], "；") if len(descriptions) > 1 else ""
            interests = _without_label(card.select_one(".list-area"))
            email = _without_label(card.select_one(".list-email"))
            website_anchor = card.select_one(".list-website a[href]")
            office = ""
            for block in card.select("div.list-text"):
                label = block.select_one(":scope > span")
                if label and "办公室" in _clean_text(label):
                    office = _without_label(block)
                    break
            image = card.select_one(".list-img[data-image-url]")

            aliases = [listed_name] if listed_name != name else []
            if name.casefold() == "gallego, guillermo":
                aliases.append("Guillermo Gallego")
            person = {
                "id": f"person:{teacher_id}",
                "name": name,
                "name_en": "Guillermo Gallego" if name.casefold() == "gallego, guillermo" else "",
                "type": "Person",
                "title": title,
                "roles": roles,
                "education": education,
                "research_interests": interests,
                "email": email,
                "office": office,
                "website": website_anchor.get("href", "") if website_anchor else "",
                "profile_url": urljoin(BASE_URL, anchor.get("href", "")),
                "photo_url": urljoin(BASE_URL, image.get("data-image-url", "")) if image else "",
                "aliases": aliases,
                "directory_status": "将在未来加入" if future_match else "官网教师档案",
                "expected_join": future_match.group(1) if future_match else "",
                "student_summary": f"{name}是学院{title}，主要研究{interests or '方向以官网个人页为准'}。",
                "source_ids": [source_id],
                "assertion_type": "stated",
                "confidence": 1.0,
            }
            people.append({key: value for key, value in person.items() if value not in ("", [], None)})

    if len(people) < 80:
        raise RuntimeError(f"只解析到 {len(people)} 个教师档案，为避免覆盖完整数据已停止写入")
    return people, sources


def _source_document(teacher_sources: list[dict]) -> dict:
    sources = [
        {
            "id": "src_university_home",
            "title": "香港中文大学（深圳）官网",
            "url": "https://www.cuhk.edu.cn/zh-hans",
            "publisher": "香港中文大学（深圳）",
        },
        {
            "id": "src_sds_home",
            "title": "香港中文大学（深圳）数据科学学院首页",
            "url": "https://sds.cuhk.edu.cn/",
            "publisher": "香港中文大学（深圳）数据科学学院",
        },
    ]
    for key, (url, title) in CORE_PAGES.items():
        sources.append({
            "id": f"src_sds_{key}",
            "title": title,
            "url": url,
            "publisher": "香港中文大学（深圳）数据科学学院",
        })
    sources.extend(teacher_sources)
    return {"retrieved_at": RETRIEVED_AT, "sources": sources}


def _merge_source_ids(record: dict, source_id: str) -> None:
    record["source_ids"] = list(dict.fromkeys([*record.get("source_ids", []), source_id]))


def _build_seed(people: list[dict]) -> dict:
    previous = read_json(SEED_PATH)
    entities = [
        entity
        for entity in previous["entities"]
        if entity["type"] in {"University", "School", "Program"}
    ]
    relationships = [
        relationship
        for relationship in previous["relationships"]
        if relationship["type"] in {"HAS_SCHOOL", "OFFERS_PROGRAM"}
    ]

    for entity in entities:
        if entity["type"] == "Program":
            entity["source_ids"] = ["src_sds_programs"]
    for relationship in relationships:
        if relationship["type"] == "OFFERS_PROGRAM":
            relationship["source_ids"] = ["src_sds_programs"]

    school = next(entity for entity in entities if entity["id"] == "school:sds")
    school.update({
        "founded": "2020-07",
        "faculty_team_count": 87,
        "faculty_team_count_note": "学院学科方向页的团队口径；教师目录还包含不同分类及未来入职档案。",
        "teacher_directory_profile_count": len(people),
        "description": "学院融合计算机科学、统计学与运筹学，提供本科、硕士和博士培养项目。",
        "student_summary": "这里学习如何用计算机、统计和数学优化方法，从数据中发现规律并解决实际问题。",
    })
    _merge_source_ids(school, "src_sds_dean")
    _merge_source_ids(school, "src_sds_programs")

    for field_id, name, field_kind, summary, source_id in ACADEMIC_FIELDS:
        entities.append({
            "id": field_id,
            "name": name,
            "type": "AcademicField",
            "field_kind": field_kind,
            "student_summary": summary,
            "source_ids": [source_id],
            "assertion_type": "stated",
            "confidence": 1.0,
        })
        relationships.append({
            "id": f"rel:sds_field_{field_id.split(':', 1)[1]}",
            "source": "school:sds",
            "target": field_id,
            "type": "HAS_ACADEMIC_FIELD",
            "source_ids": [source_id],
            "assertion_type": "stated",
            "confidence": 1.0,
        })

    area_by_name: dict[str, dict] = {}

    def ensure_area(name: str, source_id: str, assertion_type: str = "stated") -> dict:
        key = re.sub(r"\s+", "", name).casefold()
        area = area_by_name.get(key)
        if area is None:
            area = {
                "id": _safe_area_id(name),
                "name": name,
                "type": "ResearchArea",
                "student_summary": f"研究主题：{name}",
                "source_ids": [source_id],
                "assertion_type": assertion_type,
                "confidence": 1.0 if assertion_type == "stated" else 0.95,
            }
            area_by_name[key] = area
            entities.append(area)
        else:
            _merge_source_ids(area, source_id)
        return area

    for focus in SCHOOL_RESEARCH_FOCI:
        area = ensure_area(focus, "src_sds_dean")
        relationships.append({
            "id": f"rel:sds_focus_{area['id'].split(':', 1)[1]}",
            "source": "school:sds",
            "target": area["id"],
            "type": "RESEARCH_FOCUS",
            "source_ids": ["src_sds_dean"],
            "assertion_type": "stated",
            "confidence": 1.0,
        })

    entities.extend(people)
    for person in people:
        source_id = person["source_ids"][0]
        teacher_id = person["id"].split(":", 1)[1]
        relationships.append({
            "id": f"rel:{teacher_id}_works_sds",
            "source": person["id"],
            "target": "school:sds",
            "type": "WORKS_AT",
            "source_ids": [source_id],
            "assertion_type": "stated",
            "confidence": 1.0,
        })
        if person["name"].casefold() == "gallego, guillermo":
            person.setdefault("roles", []).append("院长")
            _merge_source_ids(person, "src_sds_dean")
            relationships.append({
                "id": "rel:gallego_leads_sds",
                "source": person["id"],
                "target": "school:sds",
                "type": "LEADS",
                "source_ids": ["src_sds_dean"],
                "assertion_type": "stated",
                "confidence": 1.0,
            })
        for interest in _split_outside_parentheses(person.get("research_interests", "")):
            area = ensure_area(interest, source_id)
            relationships.append({
                "id": f"rel:{teacher_id}_researches_{area['id'].split(':', 1)[1]}",
                "source": person["id"],
                "target": area["id"],
                "type": "RESEARCHES",
                "source_ids": [source_id],
                "assertion_type": "stated",
                "confidence": 1.0,
            })

    return {
        "metadata": {
            "name": "CUHK-Shenzhen School of Data Science Official Website Graph",
            "version": "0.2.0",
            "retrieved_at": RETRIEVED_AT,
            "scope_note": "官网公开信息快照；教师目录档案不等同于现任全职教师人数",
        },
        "entities": entities,
        "relationships": relationships,
    }


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--html-dir",
        type=Path,
        help="使用已下载的官网 HTML 快照；省略时由脚本下载最新页面",
    )
    args = parser.parse_args()

    _, teacher_files = _page_files(args.html_dir)
    people, teacher_sources = _parse_teacher_pages(teacher_files)
    sources = _source_document(teacher_sources)
    seed = _build_seed(people)
    write_json(SOURCES_PATH, sources)
    write_json(SEED_PATH, seed)
    print(
        f"官网同步完成：{len(people)} 个教师档案，"
        f"{len(seed['entities'])} 个实体，{len(seed['relationships'])} 条关系。"
    )
    print(f"数据日期：{RETRIEVED_AT}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
