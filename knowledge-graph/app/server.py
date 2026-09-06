"""Zero-dependency local web server for the SDS graph agent."""

from __future__ import annotations

import argparse
import json
import mimetypes
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

from graph_agent import GraphAgent


STATIC_DIR = Path(__file__).resolve().parent / "static"
AGENT = GraphAgent()


class Handler(BaseHTTPRequestHandler):
    server_version = "SDSGraphAgent/0.1"

    def _json(self, payload: dict, status: int = 200) -> None:
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self) -> None:  # noqa: N802
        path = urlparse(self.path).path
        if path == "/api/stats":
            self._json(AGENT.stats())
            return
        if path == "/api/health":
            self._json({"status": "ok"})
            return
        relative = "index.html" if path == "/" else path.lstrip("/")
        file_path = (STATIC_DIR / relative).resolve()
        if STATIC_DIR.resolve() not in file_path.parents or not file_path.is_file():
            self.send_error(404)
            return
        body = file_path.read_bytes()
        content_type, _ = mimetypes.guess_type(file_path.name)
        self.send_response(200)
        self.send_header("Content-Type", f"{content_type or 'application/octet-stream'}; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_POST(self) -> None:  # noqa: N802
        if urlparse(self.path).path != "/api/ask":
            self.send_error(404)
            return
        try:
            length = int(self.headers.get("Content-Length", "0"))
            if length > 16_384:
                self._json({"error": "问题内容过长"}, 413)
                return
            payload = json.loads(self.rfile.read(length) or b"{}")
            question = payload.get("question", "")
            if not isinstance(question, str):
                raise ValueError("question must be a string")
            self._json(AGENT.ask(question))
        except (json.JSONDecodeError, ValueError) as error:
            self._json({"error": f"请求格式错误：{error}"}, 400)

    def log_message(self, format: str, *args: object) -> None:
        print(f"[{self.log_date_time_string()}] {format % args}")


def main() -> None:
    parser = argparse.ArgumentParser(description="运行港中深数据科学学院知识图谱问答网站")
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=8765)
    args = parser.parse_args()
    server = ThreadingHTTPServer((args.host, args.port), Handler)
    print(f"知识图谱智能体已启动：http://{args.host}:{args.port}", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()

