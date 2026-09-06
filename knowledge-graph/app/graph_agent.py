"""Deterministic, source-grounded question answering over the SDS graph."""

from __future__ import annotations

import json
import re
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable


PROJECT_DIR = Path(__file__).resolve().parents[1]
GRAPH_PATH = PROJECT_DIR / "output" / "sds_knowledge_graph.json"


@dataclass(frozen=True)
class Source:
    id: str
    title: str
    url: str


class GraphAgent:
    """Answer a focused set of natural-language questions by graph traversal."""

    def __init__(self, graph_path: Path = GRAPH_PATH):
        with graph_path.open("r", encoding="utf-8") as handle:
            self.graph = json.load(handle)
        self.entities = self.graph["entities"]
        self.relationships = self.graph["relationships"]
        self.entity_by_id = {entity["id"]: entity for entity in self.entities}
        self.source_by_id = {
            source["id"]: Source(source["id"], source["title"], source["url"])
            for source in self.graph.get("sources", [])
        }

    @staticmethod
    def _normalize(text: str) -> str:
        return re.sub(r"[\s，。！？、,.!?：:；;（）()《》\[\]]+", "", text).casefold()

    def _terms(self, entity: dict) -> list[str]:
        values = [entity.get("name", ""), entity.get("name_en", "")]
        values.extend(entity.get("aliases", []))
        return [self._normalize(value) for value in values if value]

    def _mentioned(self, question: str, entity_type: str | None = None) -> list[dict]:
        normalized = self._normalize(question)
        query_topic = re.sub(
            r"^(谁|哪些老师|哪些教师|老师|教师)?(在)?(研究|做|关注)",
            "",
            normalized,
        )
        query_topic = re.sub(r"(方向|领域|相关内容|的是谁|的老师|的教师|吗)+$", "", query_topic)
        matches = []
        for entity in self.entities:
            if entity_type and entity["type"] != entity_type:
                continue
            terms = self._terms(entity)
            if any(
                term
                and (
                    term in normalized
                    or (
                        entity_type == "ResearchArea"
                        and len(query_topic) >= 2
                        and query_topic in term
                    )
                )
                for term in terms
            ):
                matches.append(entity)
        return sorted(matches, key=lambda item: max(map(len, self._terms(item))), reverse=True)

    def _outgoing(self, entity_id: str, relation_type: str | None = None) -> list[dict]:
        return [
            rel
            for rel in self.relationships
            if rel["source"] == entity_id
            and (relation_type is None or rel["type"] == relation_type)
        ]

    def _incoming(self, entity_id: str, relation_type: str | None = None) -> list[dict]:
        return [
            rel
            for rel in self.relationships
            if rel["target"] == entity_id
            and (relation_type is None or rel["type"] == relation_type)
        ]

    def _sources_for(self, records: Iterable[dict]) -> list[dict]:
        source_ids: list[str] = []
        for record in records:
            for source_id in record.get("source_ids", []):
                if source_id not in source_ids:
                    source_ids.append(source_id)
        return [
            {"title": self.source_by_id[source_id].title, "url": self.source_by_id[source_id].url}
            for source_id in source_ids
            if source_id in self.source_by_id
        ]

    def _response(
        self,
        answer: str,
        records: Iterable[dict],
        related_entities: Iterable[dict] = (),
        intent: str = "graph_search",
    ) -> dict:
        record_list = list(records)
        related_list = list(related_entities)
        return {
            "answer": answer,
            "intent": intent,
            "sources": self._sources_for([*record_list, *related_list]),
            "entities": [
                {"id": entity["id"], "name": entity["name"], "type": entity["type"]}
                for entity in related_list
            ],
            "reasoning": "回答由实体匹配和知识图谱关系遍历生成，未调用外部大模型。",
        }

    def _programme_answer(self, question: str) -> dict:
        normalized = self._normalize(question)
        if "本科" in normalized:
            level = "本科"
        elif "硕博" in normalized or "博士" in normalized:
            level = "研究型硕博"
        elif "硕士" in normalized or "研究生" in normalized:
            level = "授课型硕士"
        else:
            level = None
        programmes = [
            entity
            for entity in self.entities
            if entity["type"] == "Program" and (level is None or entity.get("level") == level)
        ]
        programmes.sort(key=lambda item: (item.get("level", ""), item["name"]))
        heading = f"数据科学学院当前图谱中的{level}项目" if level else "数据科学学院当前图谱中的培养项目"
        answer = heading + "包括：" + "、".join(item["name"] for item in programmes) + "。"
        return self._response(answer, programmes, programmes, "list_programmes")

    def _dean_answer(self) -> dict:
        school = self.entity_by_id["school:sds"]
        relations = self._incoming(school["id"], "LEADS")
        people = [self.entity_by_id[rel["source"]] for rel in relations]
        if not people:
            return self._response("当前图谱中没有院长信息。", [school], [school], "find_dean")
        descriptions = [
            (
                f"{person['name']}（{person['name_en']}，{person.get('title', '教师')}）"
                if person.get("name_en")
                else f"{person['name']}（{person.get('title', '教师')}）"
            )
            for person in people
        ]
        return self._response(
            "数据科学学院院长是" + "、".join(descriptions) + "。",
            [school, *relations, *people],
            [school, *people],
            "find_dean",
        )

    def _research_area_answer(self, question: str) -> dict | None:
        areas = self._mentioned(question, "ResearchArea")
        if not areas:
            return None
        relations = [
            relation
            for area in areas
            for relation in self._incoming(area["id"], "RESEARCHES")
        ]
        people_by_id = {
            relation["source"]: self.entity_by_id[relation["source"]]
            for relation in relations
        }
        people = sorted(people_by_id.values(), key=lambda item: item["name"])
        area_names = "、".join(area["name"] for area in areas[:5])
        if not people:
            return self._response(
                f"当前图谱中尚未记录研究“{area_names}”的教师。",
                areas,
                areas,
                "find_researchers",
            )
        answer = f"当前图谱中与“{area_names}”相关的教师包括：" + "、".join(
            person["name"] for person in people
        ) + "。"
        return self._response(
            answer,
            [*areas, *relations, *people],
            [*areas, *people],
            "find_researchers",
        )

    def _person_answer(self, question: str) -> dict | None:
        people = self._mentioned(question, "Person")
        if not people:
            return None
        person = people[0]
        research_relations = self._outgoing(person["id"], "RESEARCHES")
        areas = [self.entity_by_id[rel["target"]] for rel in research_relations]
        roles = "、".join(person.get("roles", []))
        details = [person.get("title", "教师")]
        if roles:
            details.append(roles)
        if person.get("email"):
            details.append(f"邮箱 {person['email']}")
        if person.get("office"):
            details.append(f"办公室 {person['office']}")
        answer = f"{person['name']}：" + "；".join(details) + "。"
        if areas:
            answer += " 当前图谱记录的研究方向包括：" + "、".join(area["name"] for area in areas) + "。"
        else:
            answer += " 当前 MVP 尚未录入其具体研究方向。"
        return self._response(
            answer,
            [person, *research_relations, *areas],
            [person, *areas],
            "person_profile",
        )

    def _fallback(self, question: str) -> dict:
        normalized = self._normalize(question)
        tokens = [token for token in re.split(r"的|和|与|是|有|哪些|什么|介绍|信息", normalized) if len(token) >= 2]
        matches = [
            entity
            for entity in self.entities
            if any(token in "".join(self._terms(entity)) for token in tokens)
        ][:8]
        if matches:
            answer = "我找到了这些相关实体：" + "、".join(
                f"{entity['name']}（{self._type_label(entity['type'])}）" for entity in matches
            ) + "。你可以继续询问某位教师的研究方向或某一级别的培养项目。"
            return self._response(answer, matches, matches)
        return self._response(
            "当前图谱暂时无法回答这个问题。可以试试：“院长是谁？”、“有哪些硕士项目？”、"
            "“谁研究机器学习？”或“查宏远研究什么？”。",
            [],
            intent="no_match",
        )

    @staticmethod
    def _type_label(entity_type: str) -> str:
        return {
            "University": "大学",
            "School": "学院",
            "Program": "培养项目",
            "Person": "教师",
            "ResearchArea": "研究主题",
            "AcademicField": "学习方向",
        }.get(entity_type, "知识条目")

    def ask(self, question: str) -> dict:
        question = question.strip()
        if not question:
            return self._response("请输入一个问题。", [], intent="empty_question")
        normalized = self._normalize(question)
        if "院长" in normalized and any(word in normalized for word in ("谁", "是", "介绍")):
            return self._dean_answer()
        if any(word in normalized for word in ("项目", "专业", "本科", "硕士", "博士")):
            return self._programme_answer(question)
        research_answer = self._research_area_answer(question)
        if research_answer:
            return research_answer
        person_answer = self._person_answer(question)
        if person_answer:
            return person_answer
        return self._fallback(question)

    def stats(self) -> dict:
        return {
            "entities": len(self.entities),
            "relationships": len(self.relationships),
            "sources": len(self.source_by_id),
            "updated_at": self.graph.get("dataset_metadata", {}).get("retrieved_at", "未知"),
        }
