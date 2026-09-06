"""Build JSON and RDF artifacts using Semantica's GraphBuilder."""

from __future__ import annotations

import sys
from collections import Counter
from pathlib import Path
from urllib.parse import quote

# Running a file by path puts only its scripts directory on sys.path. Add the
# repository root so the checked-out Semantica package is used without install.
REPOSITORY_ROOT = Path(__file__).resolve().parents[3]
if str(REPOSITORY_ROOT) not in sys.path:
    sys.path.insert(0, str(REPOSITORY_ROOT))

from semantica.kg import GraphBuilder

from common import OUTPUT_DIR, load_seed, load_sources, write_json
from validate_seed import validate


INSTANCE = "https://kg.cuhk.edu.cn/sds/resource/"
ONTOLOGY = "https://kg.cuhk.edu.cn/sds/ontology/"


def resource_iri(identifier: str) -> str:
    return INSTANCE + quote(identifier, safe="")


def turtle_literal(value: object, language: str | None = None) -> str:
    escaped = str(value).replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")
    suffix = f"@{language}" if language else ""
    return f'"{escaped}"{suffix}'


def iri(value: str) -> str:
    return f"<{value}>"


def add_explorer_properties(graph_data: dict, source_document: dict) -> None:
    """Keep rich provenance when the graph is loaded by Semantica Explorer.

    ContextGraph uses ``content`` as the visible label and ``properties`` for
    all other fields. GraphBuilder deliberately preserves the original flat
    records, so these transport fields are added without removing the flat
    representation used by the local deterministic question-answering agent.
    """
    source_by_id = {source["id"]: source for source in source_document["sources"]}
    for entity in graph_data["entities"]:
        properties = dict(entity.get("properties") or {})
        properties.update({
            key: value
            for key, value in entity.items()
            if key not in {"id", "type", "name", "content", "properties"}
        })
        properties["name"] = entity["name"]
        properties["sources"] = [
            source_by_id[source_id]
            for source_id in entity.get("source_ids", [])
            if source_id in source_by_id
        ]
        entity["content"] = entity["name"]
        entity["properties"] = properties

    for relationship in graph_data["relationships"]:
        properties = dict(relationship.get("properties") or {})
        properties.update({
            key: value
            for key, value in relationship.items()
            if key not in {"id", "source", "target", "type", "weight", "properties"}
        })
        properties["sources"] = [
            source_by_id[source_id]
            for source_id in relationship.get("source_ids", [])
            if source_id in source_by_id
        ]
        relationship["properties"] = properties


def build_rdf(graph_data: dict, source_document: dict) -> tuple[str, int]:
    lines = [
        f"@prefix sds: <{ONTOLOGY}> .",
        f"@prefix res: <{INSTANCE}> .",
        "@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .",
        "@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .",
        "@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .",
        "",
    ]
    triples: list[str] = []
    source_by_id = {source["id"]: source for source in source_document["sources"]}

    for entity in graph_data["entities"]:
        subject = resource_iri(entity["id"])
        triples.append(f"{iri(subject)} rdf:type sds:{entity['type']} .")
        triples.append(f"{iri(subject)} rdfs:label {turtle_literal(entity['name'], 'zh')} .")
        for key, predicate in {
            "name_en": "nameEn",
            "title": "title",
            "email": "email",
            "office": "office",
            "address": "address",
            "level": "programmeLevel",
            "assertion_type": "assertionType",
        }.items():
            if entity.get(key):
                triples.append(
                    f"{iri(subject)} sds:{predicate} {turtle_literal(entity[key])} ."
                )
        triples.append(
            f"{iri(subject)} sds:confidence \"{entity['confidence']}\"^^xsd:decimal ."
        )
        for source_id in entity["source_ids"]:
            triples.append(
                f"{iri(subject)} sds:sourceUrl {iri(source_by_id[source_id]['url'])} ."
            )

    # Direct RDF properties keep the graph convenient to query. Relationship
    # metadata is also represented as a statement resource for provenance.
    for relationship in graph_data["relationships"]:
        source = resource_iri(relationship["source"])
        target = resource_iri(relationship["target"])
        predicate = relationship["type"]
        triples.append(f"{iri(source)} sds:{predicate} {iri(target)} .")

        statement = resource_iri(relationship["id"])
        triples.append(f"{iri(statement)} rdf:type rdf:Statement .")
        triples.append(f"{iri(statement)} rdf:subject {iri(source)} .")
        triples.append(f"{iri(statement)} rdf:predicate sds:{predicate} .")
        triples.append(f"{iri(statement)} rdf:object {iri(target)} .")
        triples.append(
            f"{iri(statement)} sds:confidence "
            f"\"{relationship['confidence']}\"^^xsd:decimal ."
        )
        for source_id in relationship["source_ids"]:
            triples.append(
                f"{iri(statement)} sds:sourceUrl {iri(source_by_id[source_id]['url'])} ."
            )

    triples.append(
        f"{iri(resource_iri('dataset:sds_official_site'))} sds:retrievedAt "
        f"\"{source_document['retrieved_at']}\"^^xsd:date ."
    )
    lines.extend(triples)
    lines.append("")
    return "\n".join(lines), len(triples)


def main() -> int:
    errors = validate()
    if errors:
        print("种子数据验证失败，请先运行 validate_seed.py。")
        for error in errors:
            print(f"- {error}")
        return 1

    seed = load_seed()
    sources = load_sources()
    builder = GraphBuilder(
        merge_entities=False,
        resolve_conflicts=False,
        enable_temporal=True,
        track_history=True,
    )
    graph_data = builder.build(
        {"entities": seed["entities"], "relationships": seed["relationships"]},
        extract=False,
    )
    graph_data["dataset_metadata"] = seed["metadata"]
    graph_data["sources"] = sources["sources"]
    add_explorer_properties(graph_data, sources)

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    json_path = OUTPUT_DIR / "sds_knowledge_graph.json"
    ttl_path = OUTPUT_DIR / "sds_knowledge_graph.ttl"
    report_path = OUTPUT_DIR / "build_report.json"
    write_json(json_path, graph_data)

    rdf_text, rdf_triple_count = build_rdf(graph_data, sources)
    with ttl_path.open("w", encoding="utf-8") as handle:
        handle.write(rdf_text)

    report = {
        "dataset": seed["metadata"]["name"],
        "version": seed["metadata"]["version"],
        "retrieved_at": sources["retrieved_at"],
        "entity_count": len(graph_data["entities"]),
        "relationship_count": len(graph_data["relationships"]),
        "entity_types": dict(sorted(Counter(e["type"] for e in graph_data["entities"]).items())),
        "relationship_types": dict(
            sorted(Counter(r["type"] for r in graph_data["relationships"]).items())
        ),
        "source_count": len(sources["sources"]),
        "rdf_triple_count": rdf_triple_count,
    }
    write_json(report_path, report)
    print(
        f"构建完成：{report['entity_count']} 个实体，"
        f"{report['relationship_count']} 条关系，{report['rdf_triple_count']} 个 RDF 三元组。"
    )
    print(f"JSON: {json_path}")
    print(f"RDF:  {ttl_path}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
