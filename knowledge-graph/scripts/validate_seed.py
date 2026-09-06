"""Validate identifiers, provenance and ontology-level constraints."""

from __future__ import annotations

import re
import sys
from collections import Counter

from common import load_seed, load_sources


ALLOWED_ENTITY_TYPES = {
    "University",
    "School",
    "Program",
    "Person",
    "ResearchArea",
    "AcademicField",
}
RELATION_SIGNATURES = {
    "HAS_SCHOOL": ({"University"}, {"School"}),
    "OFFERS_PROGRAM": ({"School"}, {"Program"}),
    "WORKS_AT": ({"Person"}, {"School"}),
    "LEADS": ({"Person"}, {"School"}),
    "RESEARCHES": ({"Person"}, {"ResearchArea"}),
    "HAS_ACADEMIC_FIELD": ({"Person", "School"}, {"AcademicField"}),
    "RESEARCH_FOCUS": ({"School"}, {"ResearchArea"}),
}
EMAIL_PATTERN = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")


def validate() -> list[str]:
    seed = load_seed()
    source_document = load_sources()
    entities = seed.get("entities", [])
    relationships = seed.get("relationships", [])
    source_ids = {source["id"] for source in source_document.get("sources", [])}
    entity_by_id = {entity.get("id"): entity for entity in entities}
    errors: list[str] = []

    entity_id_counts = Counter(entity.get("id") for entity in entities)
    relationship_id_counts = Counter(rel.get("id") for rel in relationships)
    for entity_id, count in entity_id_counts.items():
        if not entity_id or count != 1:
            errors.append(f"实体 ID 无效或重复: {entity_id!r} ({count})")
    for rel_id, count in relationship_id_counts.items():
        if not rel_id or count != 1:
            errors.append(f"关系 ID 无效或重复: {rel_id!r} ({count})")

    for entity in entities:
        entity_id = entity.get("id", "<missing>")
        if entity.get("type") not in ALLOWED_ENTITY_TYPES:
            errors.append(f"{entity_id}: 未知实体类型 {entity.get('type')!r}")
        if not entity.get("name"):
            errors.append(f"{entity_id}: 缺少 name")
        if not entity.get("source_ids"):
            errors.append(f"{entity_id}: 缺少 source_ids")
        for source_id in entity.get("source_ids", []):
            if source_id not in source_ids:
                errors.append(f"{entity_id}: 来源不存在 {source_id}")
        confidence = entity.get("confidence")
        if not isinstance(confidence, (int, float)) or not 0 <= confidence <= 1:
            errors.append(f"{entity_id}: confidence 必须在 0 到 1 之间")
        email = entity.get("email")
        if email and not EMAIL_PATTERN.match(email):
            errors.append(f"{entity_id}: email 格式无效 {email!r}")

    for rel in relationships:
        rel_id = rel.get("id", "<missing>")
        source_entity = entity_by_id.get(rel.get("source"))
        target_entity = entity_by_id.get(rel.get("target"))
        if source_entity is None:
            errors.append(f"{rel_id}: 起点不存在 {rel.get('source')!r}")
        if target_entity is None:
            errors.append(f"{rel_id}: 终点不存在 {rel.get('target')!r}")
        signature = RELATION_SIGNATURES.get(rel.get("type"))
        if signature is None:
            errors.append(f"{rel_id}: 未知关系类型 {rel.get('type')!r}")
        elif source_entity and target_entity:
            domains, ranges = signature
            if source_entity["type"] not in domains or target_entity["type"] not in ranges:
                errors.append(
                    f"{rel_id}: 类型签名错误 "
                    f"{source_entity['type']} -{rel.get('type')}-> {target_entity['type']}"
                )
        if not rel.get("source_ids"):
            errors.append(f"{rel_id}: 缺少 source_ids")
        for source_id in rel.get("source_ids", []):
            if source_id not in source_ids:
                errors.append(f"{rel_id}: 来源不存在 {source_id}")

    return errors


def main() -> int:
    errors = validate()
    if errors:
        print(f"验证失败，共 {len(errors)} 个问题：")
        for error in errors:
            print(f"- {error}")
        return 1
    seed = load_seed()
    print(
        "验证通过："
        f"{len(seed['entities'])} 个实体，{len(seed['relationships'])} 条关系，"
        "所有节点、边和来源引用均有效。"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
