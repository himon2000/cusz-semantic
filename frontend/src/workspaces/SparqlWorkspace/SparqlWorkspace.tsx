import { useState } from "react";
import Editor from "@monaco-editor/react";
import { AlertCircle, ArrowRight, BookOpen, Code2, Copy, Download, GraduationCap, Network, Play, Search, Table2, Users } from "lucide-react";

type GraphNode = { id: string; type: string; content: string };
type GraphEdge = { id: string; source: string; target: string; type: string };
type FriendlyRow = { id: string; source: string; relation: string; target: string; detail?: string };
type SimpleTask = "faculty" | "programmes" | "people" | "relations";

const TEMPLATES: { label: string; query: string }[] = [
  { label: "All triples", query: "SELECT ?s ?p ?o\nWHERE {\n  ?s ?p ?o\n}\nLIMIT 20" },
  { label: "Node types", query: "SELECT ?type (COUNT(?s) AS ?count)\nWHERE {\n  ?s a ?type\n}\nGROUP BY ?type\nORDER BY DESC(?count)" },
  { label: "Outgoing edges", query: "SELECT ?predicate ?object\nWHERE {\n  <urn:node:example> ?predicate ?object\n}\nLIMIT 50" },
  { label: "Path between", query: "SELECT ?mid ?p1 ?p2\nWHERE {\n  <urn:node:a> ?p1 ?mid .\n  ?mid ?p2 <urn:node:b>\n}\nLIMIT 20" },
];

const SIMPLE_TASKS: { id: SimpleTask; title: string; description: string; icon: typeof Search; placeholder: string }[] = [
  { id: "faculty", title: "按研究方向找教师", description: "例如输入“机器学习”，查看研究这一方向的教师。", icon: Users, placeholder: "输入研究方向，例如：机器学习" },
  { id: "programmes", title: "查看培养项目", description: "了解学院开设的本科、硕士和博士项目。", icon: GraduationCap, placeholder: "可选：输入项目关键词，例如：统计学" },
  { id: "people", title: "查找教师", description: "按姓名查教师，并查看教师与学院的关系。", icon: Search, placeholder: "输入教师姓名，例如：查宏远" },
  { id: "relations", title: "浏览关系网络", description: "用关键词查看人物、项目、研究方向之间的联系。", icon: Network, placeholder: "可选：输入任意关键词" },
];

const RELATION_LABELS: Record<string, string> = {
  RESEARCHES: "研究", WORKS_AT: "任职于", OFFERS_PROGRAM: "开设培养项目",
  HAS_ACADEMIC_FIELD: "涵盖学科", RESEARCH_FOCUS: "重点研究", HAS_SCHOOL: "设有学院", LEADS: "负责",
};
const TYPE_LABELS: Record<string, string> = { Person: "教师", ResearchArea: "研究方向", Program: "培养项目", School: "学院", University: "大学", AcademicField: "学科" };

function labelRelation(type: string) {
  return RELATION_LABELS[type] ?? type.replaceAll("_", " ").toLowerCase();
}

export function SparqlWorkspace() {
  const [advanced, setAdvanced] = useState(false);
  const [simpleTask, setSimpleTask] = useState<SimpleTask>("faculty");
  const [keyword, setKeyword] = useState("机器学习");
  const [simpleRows, setSimpleRows] = useState<FriendlyRow[] | null>(null);
  const [simpleError, setSimpleError] = useState("");
  const [query, setQuery] = useState(TEMPLATES[0].query);
  const [result, setResult] = useState<{ columns?: string[]; rows?: Record<string, string>[]; error?: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copyState, setCopyState] = useState(false);

  function selectTask(task: SimpleTask) {
    setSimpleTask(task);
    setSimpleRows(null);
    setSimpleError("");
    setKeyword(task === "faculty" ? "机器学习" : "");
  }

  async function runSimpleQuery() {
    setIsLoading(true);
    setSimpleRows(null);
    setSimpleError("");
    try {
      const [nodesResponse, edgesResponse] = await Promise.all([
        fetch("/api/graph/nodes?limit=5000"), fetch("/api/graph/edges?limit=5000"),
      ]);
      if (!nodesResponse.ok || !edgesResponse.ok) throw new Error("图谱服务暂时不可用，请确认后端已经启动。");
      const nodes = ((await nodesResponse.json()) as { nodes?: GraphNode[] }).nodes ?? [];
      const edges = ((await edgesResponse.json()) as { edges?: GraphEdge[] }).edges ?? [];
      const byId = new Map(nodes.map((node) => [node.id, node]));
      const term = keyword.trim().toLocaleLowerCase();
      const allowedTypes = simpleTask === "faculty" ? new Set(["RESEARCHES"])
        : simpleTask === "programmes" ? new Set(["OFFERS_PROGRAM"])
          : simpleTask === "people" ? new Set(["WORKS_AT", "RESEARCHES", "LEADS"]) : null;
      const rows = edges.filter((edge) => !allowedTypes || allowedTypes.has(edge.type)).map((edge) => {
        const sourceNode = byId.get(edge.source);
        const targetNode = byId.get(edge.target);
        return {
          id: edge.id, source: sourceNode?.content || edge.source, relation: labelRelation(edge.type), target: targetNode?.content || edge.target,
          detail: `${TYPE_LABELS[sourceNode?.type ?? ""] ?? sourceNode?.type ?? "条目"} → ${TYPE_LABELS[targetNode?.type ?? ""] ?? targetNode?.type ?? "条目"}`,
        };
      }).filter((row) => !term || [row.source, row.relation, row.target].some((value) => value.toLocaleLowerCase().includes(term))).slice(0, 60);
      setSimpleRows(rows);
    } catch (error) {
      setSimpleError(error instanceof Error ? error.message : "查询失败，请稍后重试。");
    } finally { setIsLoading(false); }
  }

  function handleEditorWillMount(monacoIns: { languages: { getLanguages(): { id: string }[]; register(opts: { id: string }): void; setMonarchTokensProvider(id: string, p: unknown): void }; editor: { defineTheme(id: string, t: unknown): void } }) {
    if (!monacoIns.languages.getLanguages().some((language) => language.id === "sparql")) {
      monacoIns.languages.register({ id: "sparql" });
      monacoIns.languages.setMonarchTokensProvider("sparql", {
        keywords: ["SELECT", "WHERE", "LIMIT", "FILTER", "OPTIONAL", "PREFIX", "ORDER", "BY", "DESC", "ASC", "GROUP", "DISTINCT", "CONSTRUCT", "ASK", "DESCRIBE"],
        tokenizer: { root: [[/[a-zA-Z_]\w*/, { cases: { "@keywords": "keyword", "@default": "identifier" } }], [/[?$][a-zA-Z_]\w*/, "variable.name"], [/<[^>]+>/, "string.uri"], [/"[^"]*"/, "string"], [/#.*/, "comment"], [/[0-9]+(\.[0-9]+)?/, "number"]] },
      });
      monacoIns.editor.defineTheme("sparql-dark", { base: "vs-dark", inherit: true, rules: [{ token: "keyword", foreground: "58a6ff", fontStyle: "bold" }, { token: "variable.name", foreground: "a5d6ff" }, { token: "string.uri", foreground: "7ee787" }], colors: { "editor.background": "#050c18", "editor.lineHighlightBackground": "#0a1628", "editorLineNumber.foreground": "#2a4060", "editorCursor.foreground": "#4aa3ff" } });
    }
  }

  async function handleRun() {
    setIsLoading(true); setResult(null);
    try {
      const response = await fetch("/api/sparql", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ query }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || `Status ${response.status}`);
      setResult(data);
    } catch (error) { setResult({ error: error instanceof Error ? error.message : "无法连接查询服务。" }); }
    finally { setIsLoading(false); }
  }

  function handleCopyQuery() {
    navigator.clipboard.writeText(query).then(() => { setCopyState(true); setTimeout(() => setCopyState(false), 1500); }).catch(() => undefined);
  }

  function handleExportCSV() {
    if (!result?.rows || !result.columns) return;
    const rows = result.rows.map((row) => result.columns!.map((column) => JSON.stringify(row[column] ?? "")).join(",")).join("\n");
    const url = URL.createObjectURL(new Blob([`${result.columns.join(",")}\n${rows}`], { type: "text/csv" }));
    const anchor = document.createElement("a"); anchor.href = url; anchor.download = "graph_query_results.csv"; anchor.click(); URL.revokeObjectURL(url);
  }

  if (!advanced) {
    const selectedTask = SIMPLE_TASKS.find((task) => task.id === simpleTask)!;
    return (
      <div className="ws-page"><div className="ws-scroll" style={{ height: "100%", padding: 24 }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }}>
            <div><div className="ws-eyebrow" style={{ marginBottom: 6 }}>零代码图谱查询</div><h2 style={{ color: "var(--ws-text)", fontSize: 22, margin: 0 }}>选择你想了解的问题</h2><p className="ws-body" style={{ margin: "8px 0 0" }}>不需要编程。选择一种问题、输入关键词，系统会自动查找节点和关系。</p></div>
            <button className="ws-btn ws-btn--ghost" onClick={() => setAdvanced(true)}><Code2 size={14} />高级模式（SPARQL）</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 10 }}>
            {SIMPLE_TASKS.map((task) => { const Icon = task.icon; const active = task.id === simpleTask; return (
              <button key={task.id} onClick={() => selectTask(task.id)} style={{ textAlign: "left", padding: 16, borderRadius: 12, cursor: "pointer", color: "var(--ws-text)", background: active ? "var(--ws-accent-soft)" : "var(--ws-surface)", border: `1px solid ${active ? "var(--ws-border-strong)" : "var(--ws-border)"}` }}>
                <Icon size={18} color={active ? "var(--ws-accent)" : "var(--ws-text-muted)"} /><div style={{ fontWeight: 750, fontSize: 14, marginTop: 10 }}>{task.title}</div><div className="ws-body" style={{ marginTop: 5, fontSize: 12 }}>{task.description}</div>
              </button>); })}
          </div>
          <div style={{ display: "flex", gap: 10, padding: 16, borderRadius: 12, background: "var(--ws-surface)", border: "1px solid var(--ws-border)" }}>
            <div style={{ flex: 1, position: "relative" }}><Search size={16} style={{ position: "absolute", left: 13, top: 12, color: "var(--ws-text-dim)" }} /><input className="ws-input" style={{ width: "100%", paddingLeft: 38 }} value={keyword} onChange={(event) => setKeyword(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") void runSimpleQuery(); }} placeholder={selectedTask.placeholder} /></div>
            <button className="ws-btn ws-btn--primary" style={{ minWidth: 130, justifyContent: "center" }} onClick={runSimpleQuery} disabled={isLoading}>{isLoading ? "正在查找…" : <><Play size={14} />开始查询</>}</button>
          </div>
          <div style={{ borderRadius: 12, border: "1px solid var(--ws-border)", overflow: "hidden", minHeight: 260 }}>
            <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--ws-border)", display: "flex", alignItems: "center", gap: 8 }}><BookOpen size={15} color="var(--ws-accent)" /><strong style={{ fontSize: 14 }}>查询结果</strong>{simpleRows && <span className="ws-pill ws-pill--accent">找到 {simpleRows.length} 条</span>}</div>
            {simpleError && <div style={{ margin: 16, color: "#fca5a5", display: "flex", gap: 8 }}><AlertCircle size={16} />{simpleError}</div>}
            {!simpleRows && !simpleError && !isLoading && <div className="ws-empty"><div className="ws-empty-icon"><Search size={28} /></div><div className="ws-empty-title">等待查询</div><div className="ws-empty-body">选择上方问题并点击“开始查询”，结果会以易读的关系句子显示。</div></div>}
            {simpleRows && simpleRows.length === 0 && <div className="ws-empty"><div className="ws-empty-title">没有找到匹配结果</div><div className="ws-empty-body">可以换一个关键词，或留空查看这一类的全部关系。</div></div>}
            {simpleRows && simpleRows.length > 0 && <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 10, padding: 14 }}>{simpleRows.map((row) => <div key={row.id} style={{ padding: "12px 14px", borderRadius: 10, background: "rgba(74,163,255,0.055)", border: "1px solid var(--ws-border)" }}><div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--ws-text)", fontSize: 13, lineHeight: 1.55 }}><strong>{row.source}</strong><ArrowRight size={13} color="var(--ws-accent)" /><span style={{ color: "var(--ws-accent)" }}>{row.relation}</span><ArrowRight size={13} color="var(--ws-accent)" /><strong>{row.target}</strong></div><div style={{ marginTop: 6, color: "var(--ws-text-dim)", fontSize: 11 }}>{row.detail}</div></div>)}</div>}
          </div>
        </div>
      </div></div>
    );
  }

  return (
    <div className="ws-page"><div style={{ display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }}>
      <div style={{ padding: "10px 16px", borderBottom: "1px solid var(--ws-border)", display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
        <button className="ws-btn ws-btn--ghost" onClick={() => setAdvanced(false)}><Search size={13} />返回零代码查询</button><span className="ws-eyebrow" style={{ marginLeft: 8 }}>代码模板：</span>{TEMPLATES.map((template) => <button key={template.label} className="ws-btn ws-btn--ghost" style={{ padding: "4px 10px", fontSize: 11 }} onClick={() => { setQuery(template.query); setResult(null); }}>{template.label}</button>)}<div style={{ flex: 1 }} /><button className="ws-btn ws-btn--ghost" onClick={handleCopyQuery}><Copy size={13} />{copyState ? "已复制" : "复制代码"}</button><button className="ws-btn ws-btn--primary" onClick={handleRun} disabled={isLoading}><Play size={13} />{isLoading ? "运行中…" : "运行查询"}</button>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ flex: "0 0 55%", minHeight: 0, borderBottom: "1px solid var(--ws-border)" }}><Editor height="100%" defaultLanguage="sparql" theme="sparql-dark" value={query} onChange={(value) => setQuery(value || "")} beforeMount={handleEditorWillMount} options={{ minimap: { enabled: false }, fontSize: 13, lineHeight: 22, padding: { top: 16 }, scrollBeyondLastLine: false, wordWrap: "on" }} /></div>
        <div style={{ flex: 1, minHeight: 0, overflow: "auto" }}><div style={{ padding: "10px 16px", borderBottom: "1px solid var(--ws-border)", display: "flex", alignItems: "center", gap: 8 }}><Table2 size={14} />查询结果{result?.rows && <span className="ws-pill ws-pill--accent">{result.rows.length} 行</span>}{result?.rows?.length ? <button className="ws-btn ws-btn--ghost" style={{ marginLeft: "auto" }} onClick={handleExportCSV}><Download size={12} />导出 CSV</button> : null}</div>{result?.error && <div style={{ margin: 16, color: "#fca5a5" }}><AlertCircle size={16} /> {result.error}</div>}{result?.rows && result.columns && <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}><thead><tr>{result.columns.map((column) => <th key={column} style={{ padding: 9, textAlign: "left", borderBottom: "1px solid var(--ws-border)" }}>?{column}</th>)}</tr></thead><tbody>{result.rows.map((row, index) => <tr key={index}>{result.columns!.map((column) => <td key={column} style={{ padding: 9, borderBottom: "1px solid var(--ws-border)" }}>{String(row[column] ?? "")}</td>)}</tr>)}</tbody></table>}{!result && !isLoading && <div className="ws-empty"><div className="ws-empty-title">高级查询模式</div><div className="ws-empty-body">这里供熟悉 SPARQL 的用户编写和运行自定义查询。</div></div>}</div>
      </div>
    </div></div>
  );
}
