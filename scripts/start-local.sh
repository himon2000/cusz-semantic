#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PYTHON_BIN="$PROJECT_ROOT/.venv/bin/python"
GRAPH_FILE="$PROJECT_ROOT/knowledge-graph/output/sds_knowledge_graph.json"

if [[ ! -x "$PYTHON_BIN" ]]; then
  echo "尚未安装 Python 环境。请先按 README 的‘本机安装’步骤操作。"
  exit 1
fi

if [[ ! -d "$PROJECT_ROOT/frontend/node_modules" ]]; then
  echo "尚未安装前端依赖。请先在 frontend 目录运行 npm install。"
  exit 1
fi

cleanup() {
  if [[ -n "${BACKEND_PID:-}" ]]; then
    kill "$BACKEND_PID" 2>/dev/null || true
  fi
}
trap cleanup EXIT INT TERM

SEMANTICA_ALLOW_ANONYMOUS=true "$PYTHON_BIN" -m semantica.explorer \
  --graph "$GRAPH_FILE" \
  --host 127.0.0.1 \
  --port 8000 \
  --no-browser &
BACKEND_PID=$!

echo "知识图谱后端：http://127.0.0.1:8000"
echo "网页界面：http://127.0.0.1:4173"

cd "$PROJECT_ROOT/frontend"
npm run dev -- --host 127.0.0.1 --port 4173

