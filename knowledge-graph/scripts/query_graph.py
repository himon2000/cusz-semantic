"""Small local query utility for inspecting people, programmes and areas."""

from __future__ import annotations

import argparse

from common import OUTPUT_DIR, read_json


def searchable_text(entity: dict) -> str:
    values = [entity.get("name", ""), entity.get("name_en", ""), entity.get("title", "")]
    values.extend(entity.get("aliases", []))
    values.extend(entity.get("roles", []))
    return " ".join(values).casefold()


def main() -> int:
    parser = argparse.ArgumentParser(description="查询港中深数据科学学院 MVP 图谱")
    parser.add_argument("keyword", help="实体名、别名、职称或研究方向关键词")
    args = parser.parse_args()

    graph_path = OUTPUT_DIR / "sds_knowledge_graph.json"
    if not graph_path.exists():
        parser.error("尚未生成图谱，请先运行 build_graph.py")
    graph = read_json(graph_path)
    entities = graph["entities"]
    entity_by_id = {entity["id"]: entity for entity in entities}
    keyword = args.keyword.casefold()

    direct_ids = {entity["id"] for entity in entities if keyword in searchable_text(entity)}
    related_ids = set(direct_ids)
    matched_relationships = []
    for relationship in graph["relationships"]:
        if relationship["source"] in direct_ids or relationship["target"] in direct_ids:
            matched_relationships.append(relationship)
            related_ids.add(relationship["source"])
            related_ids.add(relationship["target"])

    if not direct_ids:
        print(f"没有找到包含“{args.keyword}”的实体。")
        return 1

    print("匹配实体：")
    for entity_id in sorted(direct_ids):
        entity = entity_by_id[entity_id]
        print(f"- [{entity['type']}] {entity['name']} ({entity_id})")
    if matched_relationships:
        print("\n相关关系：")
        for relationship in matched_relationships:
            source = entity_by_id[relationship["source"]]["name"]
            target = entity_by_id[relationship["target"]]["name"]
            print(f"- {source} -{relationship['type']}-> {target}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

