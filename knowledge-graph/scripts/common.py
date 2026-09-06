"""Shared helpers for the CUHK-Shenzhen SDS seed graph."""

from __future__ import annotations

import json
from pathlib import Path
from typing import Any


PROJECT_DIR = Path(__file__).resolve().parents[1]
SEED_PATH = PROJECT_DIR / "data" / "seed_graph.json"
SOURCES_PATH = PROJECT_DIR / "config" / "sources.json"
OUTPUT_DIR = PROJECT_DIR / "output"


def read_json(path: Path) -> dict[str, Any]:
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def write_json(path: Path, value: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as handle:
        json.dump(value, handle, ensure_ascii=False, indent=2, sort_keys=True)
        handle.write("\n")


def load_seed() -> dict[str, Any]:
    return read_json(SEED_PATH)


def load_sources() -> dict[str, Any]:
    return read_json(SOURCES_PATH)

