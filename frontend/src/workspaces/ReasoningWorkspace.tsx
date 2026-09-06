import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { AlertCircle, BrainCircuit, CheckCircle2, Code2, GitBranch, Info, Play, RotateCcw, Sparkles, Zap } from "lucide-react";

type Scenario = {
  id: string;
  title: string;
  question: string;
  facts: string;
  rule: string;
  known: string[];
  logic: string;
};

const SCENARIOS: Scenario[] = [
  {
    id: "faculty-field",
    title: "判断教师的研究方向",
    question: "查宏远老师是不是学院在机器学习方向的研究人员？",
    facts: "works_at(查宏远, 数据科学学院)\nresearches(查宏远, 机器学习及应用)",
    rule: "IF works_at(?X, 数据科学学院) AND researches(?X, ?Y) THEN school_researcher(?X, ?Y)",
    known: ["查宏远老师任职于数据科学学院", "查宏远老师研究机器学习及应用"],
    logic: "如果一位教师在学院任职，并且研究某个方向，就可以判断这位教师是学院在该方向的研究人员。",
  },
  {
    id: "programme-field",
    title: "判断学院覆盖的学科",
    question: "数据科学学院是否通过培养项目覆盖数据科学？",
    facts: "offers_program(数据科学学院, 数据科学理学硕士)\ncovers_field(数据科学理学硕士, 数据科学)",
    rule: "IF offers_program(?X, ?Y) AND covers_field(?Y, ?Z) THEN school_covers_field(?X, ?Z)",
    known: ["数据科学学院开设数据科学理学硕士", "该培养项目覆盖数据科学"],
    logic: "如果学院开设一个培养项目，而这个项目覆盖某个学科，就可以判断学院通过该项目覆盖了这个学科。",
  },
  {
    id: "specialism",
    title: "判断教师擅长的学科",
    question: "查宏远老师的研究可以归入哪个学科？",
    facts: "researches(查宏远, 机器学习及应用)\nbelongs_to(机器学习及应用, 数据科学)",
    rule: "IF researches(?X, ?Y) AND belongs_to(?Y, ?Z) THEN specializes_in(?X, ?Z)",
    known: ["查宏远老师研究机器学习及应用", "机器学习及应用属于数据科学"],
    logic: "如果一位教师研究某个主题，而该主题属于某个学科，就可以判断这位教师擅长该学科的相关研究。",
  },
];

function humanizeFact(fact: string) {
  const match = fact.match(/^([^()]+)\((.*)\)$/);
  if (!match) return fact;
  const [first = "", second = ""] = match[2].split(",").map((part) => part.trim());
  const messages: Record<string, string> = {
    school_researcher: `${first}是数据科学学院在“${second}”方向的研究人员。`,
    school_covers_field: `${first}通过相关培养项目覆盖“${second}”学科。`,
    specializes_in: `${first}擅长“${second}”相关研究。`,
  };
  return messages[match[1]] ?? `${first}与${second}之间存在“${match[1].replaceAll("_", " ")}”关系。`;
}

export function ReasoningWorkspace() {
  const queryClient = useQueryClient();
  const [advanced, setAdvanced] = useState(false);
  const [scenarioId, setScenarioId] = useState(SCENARIOS[0].id);
  const [facts, setFacts] = useState(SCENARIOS[0].facts);
  const [rules, setRules] = useState(SCENARIOS[0].rule);
  const [applyToGraph, setApplyToGraph] = useState(false);
  const [result, setResult] = useState<{ inferred_facts?: string[]; rules_fired?: number; added_edges?: number; mutated?: boolean } | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState("");
  const scenario = SCENARIOS.find((item) => item.id === scenarioId) ?? SCENARIOS[0];

  function chooseScenario(next: Scenario) {
    setScenarioId(next.id); setFacts(next.facts); setRules(next.rule); setResult(null); setError("");
  }

  async function handleRun() {
    setIsRunning(true); setError(""); setResult(null);
    try {
      const response = await fetch("/api/reason", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ facts: facts.split(/\r?\n/).map((line) => line.trim()).filter(Boolean), rules: rules.split(/\r?\n/).map((line) => line.trim()).filter(Boolean), mode: "forward", apply_to_graph: applyToGraph }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || `Status ${response.status}`);
      setResult(data);
      if (data.mutated) queryClient.invalidateQueries({ queryKey: ["graph", "full-load"] });
    } catch (reasoningError) { setError(reasoningError instanceof Error ? reasoningError.message : "推理失败，请稍后重试。"); }
    finally { setIsRunning(false); }
  }

  function reset() { chooseScenario(SCENARIOS[0]); setApplyToGraph(false); }

  return (
    <div className="ws-page" style={{ flexDirection: "column" }}>
      <div style={{ padding: "16px 22px", borderBottom: "1px solid var(--ws-border)", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: "var(--ws-accent-soft)", border: "1px solid var(--ws-border-strong)", display: "grid", placeItems: "center", color: "var(--ws-accent)" }}><BrainCircuit size={18} /></div>
        <div><div style={{ color: "var(--ws-text)", fontWeight: 750, fontSize: 16 }}>智能推理</div><div className="ws-body" style={{ fontSize: 12 }}>让系统根据已知信息和判断规则，自动得出新的结论。</div></div>
        <button className="ws-btn ws-btn--ghost" style={{ marginLeft: "auto" }} onClick={() => setAdvanced(!advanced)}>{advanced ? <><Sparkles size={14} />返回简单模式</> : <><Code2 size={14} />高级模式（规则代码）</>}</button>
      </div>

      <div className="ws-scroll" style={{ flex: 1 }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: 22, display: "grid", gridTemplateColumns: "minmax(330px, 0.9fr) minmax(400px, 1.1fr)", gap: 18 }}>
          <section style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {!advanced ? (
              <>
                <div><div className="ws-eyebrow" style={{ marginBottom: 8 }}>第一步：选择一个判断任务</div><div style={{ display: "flex", flexDirection: "column", gap: 8 }}>{SCENARIOS.map((item) => {
                  const active = item.id === scenarioId;
                  return <button key={item.id} onClick={() => chooseScenario(item)} style={{ textAlign: "left", padding: "13px 14px", borderRadius: 10, cursor: "pointer", color: "var(--ws-text)", background: active ? "var(--ws-accent-soft)" : "var(--ws-surface)", border: `1px solid ${active ? "var(--ws-border-strong)" : "var(--ws-border)"}` }}><div style={{ fontWeight: 750, fontSize: 13 }}>{item.title}</div><div className="ws-body" style={{ marginTop: 4, fontSize: 12 }}>{item.question}</div></button>;
                })}</div></div>
                <div style={{ padding: 16, borderRadius: 12, background: "var(--ws-surface)", border: "1px solid var(--ws-border)" }}>
                  <div className="ws-eyebrow" style={{ marginBottom: 10 }}>第二步：确认已知信息</div>
                  {scenario.known.map((item) => <div key={item} style={{ display: "flex", gap: 8, marginTop: 8, color: "var(--ws-text)", fontSize: 13 }}><CheckCircle2 size={15} color="var(--ws-green)" />{item}</div>)}
                  <div style={{ marginTop: 14, padding: 12, borderRadius: 9, background: "rgba(74,163,255,0.07)", border: "1px solid var(--ws-border)" }}><div style={{ fontWeight: 700, fontSize: 12, color: "var(--ws-accent)", marginBottom: 5 }}>系统怎样判断</div><div className="ws-body" style={{ fontSize: 12, lineHeight: 1.65 }}>{scenario.logic}</div></div>
                </div>
              </>
            ) : (
              <div style={{ padding: 16, borderRadius: 12, background: "var(--ws-surface)", border: "1px solid var(--ws-border)" }}>
                <div className="ws-eyebrow" style={{ marginBottom: 10 }}>高级规则编辑</div>
                <label className="ws-label">事实（每行一条）</label><textarea className="ws-textarea" rows={7} value={facts} onChange={(event) => setFacts(event.target.value)} spellCheck={false} />
                <label className="ws-label" style={{ marginTop: 14 }}>规则（IF…THEN…）</label><textarea className="ws-textarea" rows={6} value={rules} onChange={(event) => setRules(event.target.value)} spellCheck={false} />
                <div className="ws-body" style={{ marginTop: 8, fontSize: 11 }}>变量以 ? 开头，例如 ?X。此模式适合需要自定义逻辑的用户。</div>
              </div>
            )}

            <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", padding: "12px 14px", borderRadius: 10, border: "1px solid var(--ws-border)", background: applyToGraph ? "var(--ws-green-soft)" : "var(--ws-surface)" }}>
              <input type="checkbox" checked={applyToGraph} onChange={(event) => setApplyToGraph(event.target.checked)} />
              <div><div style={{ fontSize: 13, fontWeight: 700, color: "var(--ws-text)" }}>把新结论保存到知识图谱</div><div className="ws-body" style={{ fontSize: 11 }}>默认只预览；勾选后，系统会把新关系加入图谱。</div></div>
            </label>
            <div style={{ display: "flex", gap: 8 }}><button className="ws-btn ws-btn--primary" style={{ flex: 1, justifyContent: "center" }} onClick={handleRun} disabled={isRunning}>{isRunning ? <><Zap size={14} />正在判断…</> : <><Play size={14} />开始推理</>}</button><button className="ws-btn ws-btn--ghost" onClick={reset} title="恢复默认"><RotateCcw size={14} /></button></div>
          </section>

          <section style={{ minHeight: 420, borderRadius: 12, border: "1px solid var(--ws-border)", background: "rgba(0,0,0,0.11)", overflow: "hidden" }}>
            <div style={{ padding: "13px 16px", borderBottom: "1px solid var(--ws-border)", display: "flex", alignItems: "center", gap: 8 }}><Sparkles size={15} color="var(--ws-accent)" /><strong>推理结论</strong>{result && <span className="ws-pill ws-pill--accent">得到 {result.inferred_facts?.length ?? 0} 条新结论</span>}{result?.mutated ? <span className="ws-pill ws-pill--green"><GitBranch size={9} />已保存到图谱</span> : null}</div>
            <div style={{ padding: 18 }}>
              {error && <div style={{ color: "#fca5a5", display: "flex", gap: 9 }}><AlertCircle size={16} />{error}</div>}
              {isRunning && <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>{[1, 2, 3].map((item) => <div key={item} className="ws-skeleton" style={{ height: 58 }} />)}</div>}
              {!result && !isRunning && !error && <div className="ws-empty"><div className="ws-empty-icon"><Info size={30} /></div><div className="ws-empty-title">等待推理</div><div className="ws-empty-body">选择左侧的判断任务，然后点击“开始推理”。系统会用中文解释新结论。</div></div>}
              {result && !isRunning && (result.inferred_facts ?? []).length === 0 && <div className="ws-empty"><div className="ws-empty-icon"><CheckCircle2 size={30} /></div><div className="ws-empty-title">推理完成</div><div className="ws-empty-body">现有信息不足以得到新结论，可以补充事实或更换判断任务。</div></div>}
              {result && !isRunning && (result.inferred_facts ?? []).map((fact, index) => <div key={`${fact}-${index}`} style={{ padding: 16, marginBottom: 10, borderRadius: 11, background: "var(--ws-green-soft)", border: "1px solid rgba(76,195,138,0.28)" }}><div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}><CheckCircle2 size={18} color="var(--ws-green)" /><div><div style={{ fontSize: 14, lineHeight: 1.65, color: "var(--ws-text)", fontWeight: 650 }}>{humanizeFact(fact)}</div>{advanced && <code style={{ display: "block", marginTop: 8, color: "var(--ws-text-dim)", fontSize: 11 }}>{fact}</code>}</div></div></div>)}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
