import { useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  Boxes,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Code2,
  DatabaseZap,
  Download,
  ExternalLink,
  FileCog,
  FileSearch,
  GitBranch,
  HardDrive,
  Network,
  Play,
  RefreshCw,
  Route,
  Scale,
  ShieldCheck,
  Sparkles,
  UploadCloud,
  Workflow,
} from "lucide-react";

type WorkspaceTarget = "explore" | "analyze" | "enrich" | "manage" | "ontology-hub";

type LayerId = "ingest" | "prepare" | "extract" | "graph" | "govern" | "storage" | "deliver";

type ModuleStatus = {
  module: string;
  module_present: boolean;
  missing_dependencies?: string[];
  status: "ready" | "needs_setup";
};

type Layer = {
  id: LayerId;
  number: number;
  label: string;
  description: string;
  modules: string[];
  status?: "ready" | "needs_setup";
  module_statuses?: ModuleStatus[];
};

type Source = {
  id: string;
  label: string;
  description: string;
  module: string;
  connection: string;
  status: "ready" | "needs_setup";
  missing_dependencies?: string[];
};

type Job = {
  job_id: string;
  created_at: string;
  status: string;
  filename: string;
  stages?: {
    parse?: { status?: string; text_length?: number; preview?: string; metadata?: Record<string, unknown> };
    normalize?: { status?: string; text_length?: number };
    chunk?: { status?: string; count?: number; method?: string };
  };
};

type ExtractResult = {
  entities?: unknown[];
  relations?: unknown[];
};

type AnalyticsResult = {
  centrality?: Record<string, unknown>;
  community?: Record<string, unknown>;
  connectivity?: Record<string, unknown>;
};

type GraphStats = {
  node_count?: number;
  edge_count?: number;
};

type AgentResponse = {
  answer: string;
  intent?: string;
  reasoning?: string;
  sources?: { title: string; url: string }[];
  entities?: { id: string; name: string; type: string }[];
};

const FALLBACK_LAYERS: Layer[] = [
  { id: "ingest", number: 1, label: "导入资料", description: "把文件、网页、数据库和实时消息放进工作区。", modules: ["semantica.ingest"] },
  { id: "prepare", number: 2, label: "整理资料", description: "读取文档、统一名称和日期，再按主题切成小段。", modules: ["semantica.parse", "semantica.normalize", "semantica.split"] },
  { id: "extract", number: 3, label: "识别人和关系", description: "找出人物、项目和关系，标记矛盾并合并重复项。", modules: ["semantica.semantic_extract", "semantica.conflicts", "semantica.deduplication"] },
  { id: "graph", number: 4, label: "生成关系网络", description: "把人物、项目和研究方向连接成可以查询的网络。", modules: ["semantica.kg", "semantica.context"] },
  { id: "govern", number: 5, label: "统一概念和规则", description: "统一分类和叫法，检查数据规则，并记录每条信息来自哪里。", modules: ["semantica.ontology", "semantica.reasoning", "semantica.provenance"] },
  { id: "storage", number: 6, label: "选择保存方式", description: "按数据量和使用方式选择图数据库、语义库或向量库。", modules: ["semantica.triplet_store", "semantica.graph_store", "semantica.vector_store"] },
  { id: "deliver", number: 7, label: "查看、下载和接入", description: "在网页查看图谱，下载标准文件，或接入其他应用。", modules: ["semantica.export", "semantica.visualization", "semantica.mcp_server"] },
];

const FALLBACK_SOURCES: Source[] = [
  { id: "file", label: "文件", description: "PDF、DOCX、PPTX、HTML、CSV、XML、XLSX", module: "semantica.ingest.file_ingestor", connection: "网页上传", status: "ready" },
  { id: "web", label: "网页", description: "网页抓取、站点地图与链接发现", module: "semantica.ingest.web_ingestor", connection: "URL", status: "ready" },
  { id: "feed", label: "RSS / Atom", description: "订阅源读取与更新监测", module: "semantica.ingest.feed_ingestor", connection: "RSS地址", status: "ready" },
  { id: "database", label: "数据库", description: "PostgreSQL、MySQL、SQLite、Oracle、SQL Server", module: "semantica.ingest.db_ingestor", connection: "连接配置", status: "needs_setup" },
  { id: "databricks", label: "Databricks", description: "Unity Catalog、Delta Lake、表与血缘", module: "semantica.ingest.databricks_ingestor", connection: "环境变量 / 连接配置", status: "needs_setup" },
  { id: "snowflake", label: "Snowflake", description: "仓库、数据库、Schema、表与查询", module: "semantica.ingest.snowflake_ingestor", connection: "环境变量 / 连接配置", status: "needs_setup" },
  { id: "gdrive", label: "Google Drive", description: "云端文件与文件夹读取", module: "semantica.ingest.gdrive_ingestor", connection: "服务账号 / OAuth", status: "needs_setup" },
  { id: "elasticsearch", label: "Elasticsearch", description: "索引、文档与检索结果接入", module: "semantica.ingest.elastic_ingestor", connection: "服务地址 / 环境变量", status: "needs_setup" },
  { id: "stream", label: "消息流", description: "Kafka、Kinesis、RabbitMQ、Pulsar", module: "semantica.ingest.stream_ingestor", connection: "集群 / 流配置", status: "needs_setup" },
  { id: "git", label: "Git", description: "仓库、分支、提交与代码结构", module: "semantica.ingest.repo_ingestor", connection: "仓库地址", status: "needs_setup" },
  { id: "email", label: "邮件", description: "IMAP / POP3、正文与附件", module: "semantica.ingest.email_ingestor", connection: "邮箱连接配置", status: "ready" },
  { id: "mcp", label: "MCP", description: "MCP资源与工具上下文", module: "semantica.ingest.mcp_ingestor", connection: "MCP服务配置", status: "needs_setup" },
];

const SOURCE_GROUPS: Record<string, string> = {
  file: "文件与网页",
  web: "文件与网页",
  feed: "文件与网页",
  database: "系统与数仓",
  databricks: "系统与数仓",
  snowflake: "系统与数仓",
  gdrive: "云与搜索",
  elasticsearch: "云与搜索",
  stream: "实时与代码",
  git: "实时与代码",
  email: "实时与代码",
  mcp: "实时与代码",
};

const STORAGE_OPTIONS = [
  { label: "语义事实库（RDF）", description: "适合保存“谁—做什么—与谁有关”这类标准化事实。", items: "Oxigraph、Blazegraph、Jena、RDF4J", icon: Boxes },
  { label: "关系图数据库", description: "适合快速查找人物、项目和研究方向之间的多步联系。", items: "Neo4j、FalkorDB、Apache AGE、Neptune", icon: Network },
  { label: "相似内容搜索库", description: "把文字转成数字表示，用来寻找意思相近的资料。", items: "FAISS、Pinecone、Weaviate、Qdrant、Milvus、PgVector", icon: DatabaseZap },
];

const EXPORT_OPTIONS = [
  { id: "json", label: "JSON" },
  { id: "csv", label: "CSV" },
  { id: "rdf", label: "RDF / Turtle" },
  { id: "owl", label: "OWL" },
  { id: "jsonld", label: "JSON-LD" },
  { id: "parquet", label: "Parquet" },
  { id: "cypher", label: "Cypher" },
];

function statusLabel(status?: string) {
  if (status === "ready" || status === "completed") return "已就绪";
  if (status === "registered") return "已登记";
  if (status === "not_started") return "待执行";
  if (status === "needs_setup") return "需配置";
  if (status === "skipped") return "已跳过";
  return "检查中";
}

function numberLabel(value: number | undefined) {
  return typeof value === "number" ? value.toLocaleString() : "—";
}

function stageTone(status?: string) {
  if (status === "ready" || status === "completed") return "var(--ws-green)";
  if (status === "needs_setup") return "var(--ws-amber)";
  if (status === "failed") return "var(--ws-red)";
  return "var(--ws-text-muted)";
}

export function KnowledgeEngineeringWorkspace({ onNavigate }: { onNavigate: (target: WorkspaceTarget) => void }) {
  const [layers, setLayers] = useState<Layer[]>(FALLBACK_LAYERS);
  const [sources, setSources] = useState<Source[]>(FALLBACK_SOURCES);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [activeLayer, setActiveLayer] = useState<LayerId>("ingest");
  const [sourceType, setSourceType] = useState("file");
  const [file, setFile] = useState<File | null>(null);
  const [location, setLocation] = useState("");
  const [profile, setProfile] = useState("");
  const [sourceNote, setSourceNote] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [lastJob, setLastJob] = useState<Job | null>(null);
  const [extractText, setExtractText] = useState("数据科学学院开设数据科学与大数据技术本科项目，查宏远教授研究机器学习及应用。");
  const [extractResult, setExtractResult] = useState<ExtractResult | null>(null);
  const [analytics, setAnalytics] = useState<AnalyticsResult | null>(null);
  const [graphStats, setGraphStats] = useState<GraphStats | null>(null);
  const [exportFormat, setExportFormat] = useState("json");
  const [question, setQuestion] = useState("谁研究机器学习？");
  const [agentResponse, setAgentResponse] = useState<AgentResponse | null>(null);

  const activeSource = useMemo(() => sources.find((source) => source.id === sourceType) ?? FALLBACK_SOURCES[0], [sourceType, sources]);
  const groupedSources = useMemo(() => {
    return sources.reduce<Record<string, Source[]>>((groups, source) => {
      const group = SOURCE_GROUPS[source.id] ?? "其他";
      groups[group] = [...(groups[group] ?? []), source];
      return groups;
    }, {});
  }, [sources]);

  async function refreshCatalog() {
    try {
      const response = await fetch("/api/knowledge-engineering/catalog");
      if (!response.ok) return;
      const payload = await response.json() as { layers?: Layer[]; sources?: Source[]; jobs?: Job[] };
      if (payload.layers?.length) setLayers(payload.layers);
      if (payload.sources?.length) setSources(payload.sources);
      if (payload.jobs) setJobs(payload.jobs);
    } catch {
      setMessage("服务暂时不可用，已显示本地功能目录。");
    }
  }

  useEffect(() => {
    void refreshCatalog();
    void fetch("/api/graph/stats")
      .then((response) => response.ok ? response.json() : null)
      .then((payload: GraphStats | null) => { if (payload) setGraphStats(payload); })
      .catch(() => undefined);
  }, []);

  async function uploadFile() {
    if (!file) {
      setMessage("请先选择一个文件。");
      return;
    }
    setBusy(true);
    setMessage("");
    try {
      const form = new FormData();
      form.append("file", file);
      const response = await fetch("/api/knowledge-engineering/ingest/file", { method: "POST", body: form });
      const payload = await response.json() as Job & { detail?: string };
      if (!response.ok) throw new Error(payload.detail || "文件导入失败");
      setLastJob(payload);
      setJobs((current) => [payload, ...current].slice(0, 10));
      setMessage(`已导入 ${payload.filename}，读取和按主题切分的预览已完成。`);
      setFile(null);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "文件导入失败");
    } finally {
      setBusy(false);
    }
  }

  async function registerSource() {
    if (!location.trim()) {
      setMessage("请填写地址、目录、连接名或主题名。");
      return;
    }
    setBusy(true);
    setMessage("");
    try {
      const response = await fetch("/api/knowledge-engineering/sources", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source_type: sourceType, name: activeSource.label, location: location.trim(), profile: profile.trim() || null, note: sourceNote.trim() || null }),
      });
      const payload = await response.json() as { detail?: string; message?: string };
      if (!response.ok) throw new Error(payload.detail || "接入源登记失败");
      setMessage(payload.message || "接入源已登记。");
      await refreshCatalog();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "接入源登记失败");
    } finally {
      setBusy(false);
    }
  }

  async function runExtract() {
    if (!extractText.trim()) return;
    setBusy(true);
    setMessage("");
    try {
      const response = await fetch("/api/enrich/extract", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text: extractText }) });
      const payload = await response.json() as ExtractResult & { detail?: string };
      if (!response.ok) throw new Error(payload.detail || "抽取失败");
      setExtractResult(payload);
      setMessage("人物和关系识别已完成，可继续检查矛盾信息并合并重复项。");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "抽取失败");
    } finally {
      setBusy(false);
    }
  }

  async function loadAnalytics() {
    setBusy(true);
    setMessage("");
    try {
      const [analyticsResponse, statsResponse] = await Promise.all([fetch("/api/analytics?metrics=centrality,community,connectivity"), fetch("/api/graph/stats")]);
      if (!analyticsResponse.ok) throw new Error("图算法暂时不可用");
      setAnalytics(await analyticsResponse.json() as AnalyticsResult);
      if (statsResponse.ok) setGraphStats(await statsResponse.json() as GraphStats);
      setMessage("图算法分析已完成。");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "图算法分析失败");
    } finally {
      setBusy(false);
    }
  }

  async function askGraph() {
    if (!question.trim()) {
      setMessage("请先输入一个问题。");
      return;
    }
    setBusy(true);
    setMessage("");
    try {
      const response = await fetch("/api/knowledge-engineering/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: question.trim() }),
      });
      const payload = await response.json() as AgentResponse & { detail?: string };
      if (!response.ok) throw new Error(payload.detail || "图谱问答暂时不可用");
      setAgentResponse(payload);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "图谱问答暂时不可用");
    } finally {
      setBusy(false);
    }
  }

  async function exportGraph() {
    setBusy(true);
    setMessage("");
    try {
      const response = await fetch("/api/knowledge-engineering/export", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ format: exportFormat }) });
      if (!response.ok) {
        const payload = await response.json() as { detail?: string };
        throw new Error(payload.detail || "导出失败");
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `cuhksz_sds_graph.${exportFormat === "rdf" ? "ttl" : exportFormat}`;
      anchor.click();
      URL.revokeObjectURL(url);
      setMessage(`已导出 ${exportFormat.toUpperCase()} 文件。`);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "导出失败");
    } finally {
      setBusy(false);
    }
  }

  function renderIngest() {
    return (
      <div style={{ display: "grid", gap: 18 }}>
        <div className="ws-card" style={{ padding: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div>
              <div className="ws-eyebrow">资料来源</div>
              <h3 className="ws-title" style={{ margin: "6px 0 4px", fontSize: 18 }}>选择数据来源</h3>
              <div className="ws-body">文件可直接上传；数据库、数仓、云、流和外部服务先登记连接配置。</div>
            </div>
            <button className="ws-btn ws-btn--ghost" type="button" onClick={() => void refreshCatalog()}><RefreshCw size={14} />刷新目录</button>
          </div>
          <div style={{ display: "grid", gap: 14, marginTop: 18 }}>
            {Object.entries(groupedSources).map(([group, groupSources]) => (
              <div key={group}>
                <div className="ws-label" style={{ marginBottom: 8 }}>{group}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {groupSources.map((source) => (
                    <button key={source.id} type="button" className={`ws-btn ${source.id === sourceType ? "ws-btn--primary" : "ws-btn--ghost"}`} onClick={() => setSourceType(source.id)} style={{ fontSize: 12 }}>
                      {source.label}
                      <span style={{ color: stageTone(source.status), fontSize: 10 }}>●</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ws-card" style={{ padding: 18 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {sourceType === "file" ? <UploadCloud size={18} color="var(--ws-accent)" /> : <DatabaseZap size={18} color="var(--ws-accent)" />}
            <div>
              <h3 className="ws-title" style={{ margin: 0, fontSize: 17 }}>{activeSource.label}导入入口</h3>
              <div className="ws-body" style={{ marginTop: 3 }}>{activeSource.description}</div>
            </div>
          </div>

          {sourceType === "file" ? (
            <div style={{ display: "grid", gap: 12, marginTop: 18 }}>
              <label style={{ border: "1px dashed var(--ws-border-strong)", borderRadius: 12, padding: 24, textAlign: "center", cursor: "pointer", background: "rgba(74,163,255,0.04)" }}>
                <input type="file" accept=".pdf,.docx,.pptx,.html,.htm,.csv,.xml,.txt,.xlsx,.xlsm" onChange={(event) => setFile(event.target.files?.[0] ?? null)} style={{ display: "none" }} />
                <FileCog size={30} color="var(--ws-accent)" style={{ marginBottom: 8 }} />
                <div style={{ color: "var(--ws-text)", fontWeight: 700 }}>{file ? file.name : "点击选择文件"}</div>
                <div className="ws-body" style={{ marginTop: 6 }}>支持 PDF / DOCX / PPTX / HTML / CSV / XML / XLSX，单文件不超过 50 MB</div>
              </label>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="ws-btn ws-btn--primary" type="button" onClick={() => void uploadFile()} disabled={busy || !file}><UploadCloud size={14} />{busy ? "处理中…" : "导入并预览"}</button>
              </div>
              <div className="ws-body" style={{ fontSize: 12 }}>导入后会显示：读取了多少文字、名称和日期是否统一、按人物与主题切成了多少段，以及内容来自哪里。</div>
            </div>
          ) : (
            <div style={{ display: "grid", gap: 12, marginTop: 18 }}>
              <label className="ws-label">{activeSource.connection}<input className="ws-input" value={location} onChange={(event) => setLocation(event.target.value)} placeholder="例如：网页地址、文件夹、数据库连接名、消息主题或代码仓库地址" /></label>
              <label className="ws-label">服务器连接配置名（可选）<input className="ws-input" value={profile} onChange={(event) => setProfile(event.target.value)} placeholder="例如：SDS_LOCAL_DB，不填写密码" /></label>
              <label className="ws-label">备注（可选）<textarea className="ws-input" value={sourceNote} onChange={(event) => setSourceNote(event.target.value)} placeholder="填写业务范围、表或索引等" rows={2} /></label>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                <div className="ws-body" style={{ fontSize: 12 }}>连接状态：<span style={{ color: stageTone(activeSource.status) }}>{statusLabel(activeSource.status)}</span></div>
                <button className="ws-btn ws-btn--primary" type="button" onClick={() => void registerSource()} disabled={busy}><DatabaseZap size={14} />保存连接信息</button>
              </div>
              <div style={{ color: "var(--ws-amber)", fontSize: 12, display: "flex", gap: 6, alignItems: "flex-start" }}><AlertTriangle size={14} style={{ flexShrink: 0 }} />凭据不会保存在网页；请在服务器环境变量或本机密钥存储中配置。</div>
            </div>
          )}
        </div>

        {(lastJob || jobs.length > 0) && (
          <div className="ws-card" style={{ padding: 18 }}>
            <div className="ws-eyebrow">最近导入记录</div>
            <div style={{ display: "grid", gap: 10, marginTop: 10 }}>
              {(lastJob ? [lastJob, ...jobs.filter((job) => job.job_id !== lastJob.job_id)] : jobs).slice(0, 5).map((job) => (
                <div key={job.job_id} style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) auto", gap: 12, alignItems: "center", padding: "10px 12px", borderRadius: 10, background: "rgba(0,0,0,0.16)", border: "1px solid var(--ws-border)" }}>
                  <div style={{ minWidth: 0 }}><div style={{ color: "var(--ws-text)", fontWeight: 700, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{job.filename}</div><div className="ws-body" style={{ fontSize: 11 }}>{job.job_id} · {new Date(job.created_at).toLocaleString()}</div></div>
                  <span style={{ color: stageTone(job.status), fontSize: 12 }}>{statusLabel(job.status)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  function renderPrepare() {
    const stage = lastJob?.stages;
    const cards = [
      { icon: FileSearch, title: "读取文档", text: "把 PDF、Word、PPT、网页和表格中的文字与表格读出来。", status: stage?.parse?.status ?? "ready", detail: stage ? `${numberLabel(stage.parse?.text_length)} 个字符` : "自动识别文件类型" },
      { icon: Sparkles, title: "统一名称和日期", text: "把同一个人的不同写法、不同日期格式整理成统一形式。", status: stage?.normalize?.status ?? "ready", detail: stage ? `${numberLabel(stage.normalize?.text_length)} 个字符` : "可加入学校常用名称表" },
      { icon: Route, title: "按人物和主题切分", text: "尽量把相关的人物、关系和上下文放在同一小段中，方便后续问答。", status: stage?.chunk?.status ?? "ready", detail: stage ? `${numberLabel(stage.chunk?.count)} 个分块` : "用于图谱问答的智能切分" },
    ];
    return <div style={{ display: "grid", gap: 18 }}><div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 14 }}>{cards.map(({ icon: Icon, title, text, status, detail }) => <div className="ws-card" key={title} style={{ padding: 18 }}><Icon size={20} color={stageTone(status)} /><h3 className="ws-title" style={{ margin: "12px 0 6px", fontSize: 16 }}>{title}</h3><div className="ws-body">{text}</div><div style={{ color: stageTone(status), fontSize: 12, marginTop: 14 }}>{statusLabel(status)} · {detail}</div></div>)}</div><div className="ws-card" style={{ padding: 18 }}><div className="ws-eyebrow">最新预览</div><h3 className="ws-title" style={{ margin: "6px 0" }}>读取结果预览</h3>{stage?.parse?.preview ? <pre style={{ whiteSpace: "pre-wrap", maxHeight: 220, overflow: "auto", color: "var(--ws-text-muted)", fontSize: 12, lineHeight: 1.6, margin: 0 }}>{stage.parse.preview}</pre> : <div className="ws-body">请先在“导入资料”页上传文件，系统会在这里显示读取出的文字片段。</div>}</div></div>;
  }

  function renderExtract() {
    const entityCount = extractResult?.entities?.length ?? 0;
    const relationCount = extractResult?.relations?.length ?? 0;
    return <div style={{ display: "grid", gap: 18 }}><div className="ws-card" style={{ padding: 18 }}><div className="ws-eyebrow">内容识别试验区</div><h3 className="ws-title" style={{ margin: "6px 0" }}>从文字中找出人物、项目和关系</h3><div className="ws-body" style={{ marginBottom: 12 }}>系统会把句子整理成“谁—做什么—与谁有关”的事实；确认后再加入图谱。</div><textarea className="ws-input" rows={5} value={extractText} onChange={(event) => setExtractText(event.target.value)} /><div style={{ display: "flex", justifyContent: "flex-end", marginTop: 12 }}><button className="ws-btn ws-btn--primary" type="button" onClick={() => void runExtract()} disabled={busy}><Play size={14} />开始识别</button></div>{extractResult && <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}><span className="ws-pill">找到的人或事物 {entityCount}</span><span className="ws-pill">找到的关系 {relationCount}</span><span className="ws-pill">可以继续检查后再加入图谱</span></div>}</div><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}><div className="ws-card" style={{ padding: 18 }}><Scale size={20} color="var(--ws-amber)" /><h3 className="ws-title" style={{ margin: "12px 0 6px", fontSize: 16 }}>发现矛盾信息</h3><div className="ws-body">如果两个页面对同一件事说法不同，先同时保留并标出来源，等待确认，不会直接覆盖。</div><button className="ws-btn ws-btn--ghost" type="button" onClick={() => onNavigate("enrich")} style={{ marginTop: 14 }}>查看矛盾与合并 <ChevronRight size={14} /></button></div><div className="ws-card" style={{ padding: 18 }}><GitBranch size={20} color="var(--ws-purple)" /><h3 className="ws-title" style={{ margin: "12px 0 6px", fontSize: 16 }}>合并同名或重复内容</h3><div className="ws-body">找出可能是同一个人的不同写法，经过确认后合并，同时保留原来的来源记录。</div><button className="ws-btn ws-btn--ghost" type="button" onClick={() => onNavigate("enrich")} style={{ marginTop: 14 }}>查看重复项 <ChevronRight size={14} /></button></div></div></div>;
  }

  function renderGraph() {
    return (
      <div style={{ display: "grid", gap: 18 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 12 }}>
          <div className="ws-card" style={{ padding: 16 }}><div className="ws-eyebrow">知识条目</div><div className="ws-stat-value">{numberLabel(graphStats?.node_count)}</div></div>
          <div className="ws-card" style={{ padding: 16 }}><div className="ws-eyebrow">条目间关系</div><div className="ws-stat-value">{numberLabel(graphStats?.edge_count)}</div></div>
          <div className="ws-card" style={{ padding: 16 }}><div className="ws-eyebrow">时间记录</div><div className="ws-stat-value" style={{ fontSize: 16 }}>发生时间 + 记录时间</div></div>
          <div className="ws-card" style={{ padding: 16 }}><div className="ws-eyebrow">数据日期</div><div className="ws-stat-value" style={{ fontSize: 16 }}>2026-09-05</div></div>
        </div>

        <div className="ws-card" style={{ padding: 18 }}>
          <div className="ws-eyebrow">本地图谱问答</div>
          <h3 className="ws-title" style={{ margin: "6px 0" }}>询问港中深数据科学学院</h3>
          <div className="ws-body">回答只使用当前图谱中的官网信息；不知道的内容会明确说明，并显示来源链接。</div>
          <div style={{ display: "flex", gap: 10, alignItems: "stretch", marginTop: 14, flexWrap: "wrap" }}>
            <input className="ws-input" value={question} onChange={(event) => setQuestion(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") void askGraph(); }} placeholder="例如：谁研究机器学习？" style={{ flex: "1 1 360px" }} />
            <button className="ws-btn ws-btn--primary" type="button" onClick={() => void askGraph()} disabled={busy}><Sparkles size={14} />{busy ? "查询中…" : "向图谱提问"}</button>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
            {["院长是谁？", "有哪些硕士项目？", "谁研究机器学习？", "查宏远研究什么？"].map((example) => <button key={example} type="button" className="ws-btn ws-btn--ghost" onClick={() => setQuestion(example)} style={{ fontSize: 11 }}>{example}</button>)}
          </div>
          {agentResponse && (
            <div style={{ marginTop: 16, padding: 16, border: "1px solid var(--ws-border-strong)", borderRadius: 12, background: "rgba(74,163,255,0.06)" }}>
              <div style={{ color: "var(--ws-text)", lineHeight: 1.75 }}>{agentResponse.answer}</div>
              {agentResponse.sources && agentResponse.sources.length > 0 && <div style={{ marginTop: 12 }}><div className="ws-label">官网来源</div><div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 7 }}>{agentResponse.sources.map((source) => <a key={source.url} className="ws-btn ws-btn--ghost" href={source.url} target="_blank" rel="noreferrer" style={{ textDecoration: "none", fontSize: 11 }}>{source.title}<ExternalLink size={12} /></a>)}</div></div>}
              {agentResponse.reasoning && <div className="ws-body" style={{ marginTop: 12, fontSize: 11 }}>{agentResponse.reasoning}</div>}
            </div>
          )}
        </div>

        <div className="ws-card" style={{ padding: 18 }}>
          <div className="ws-eyebrow">关系网络分析</div>
          <h3 className="ws-title" style={{ margin: "6px 0" }}>发现图谱中的重要联系</h3>
          <div className="ws-body">可以找出最关键的人或主题、自动发现关系紧密的小组、提示可能遗漏的联系，以及查看两个条目之间最短的连接路线。</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 14 }}>{["找出关键人物或主题", "发现关系紧密的小组", "提示可能遗漏的联系", "查找最短联系路线"].map((label) => <span className="ws-pill" key={label}>{label}</span>)}</div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}><button className="ws-btn ws-btn--primary" type="button" onClick={() => void loadAnalytics()} disabled={busy}><Play size={14} />{busy ? "分析中…" : "开始分析关系"}</button><button className="ws-btn ws-btn--ghost" type="button" onClick={() => onNavigate("explore")}><Network size={14} />打开图谱浏览</button></div>
          {analytics && <div style={{ marginTop: 16, color: "var(--ws-green)", fontSize: 12 }}>分析已完成：关键程度 {analytics.centrality ? "✓" : "—"} · 关系小组 {analytics.community ? "✓" : "—"} · 是否连通 {analytics.connectivity ? "✓" : "—"}</div>}
        </div>
      </div>
    );
  }

  function renderGovernance() {
    return <div style={{ display: "grid", gap: 18 }}><div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 12 }}>{[{ icon: ShieldCheck, title: "数据规则检查", text: "用 SHACL 检查必填项和关系是否正确" }, { icon: Boxes, title: "概念与分类词典", text: "用 OWL / SKOS 统一名称、类别和上下级关系" }, { icon: GitBranch, title: "根据关系推出新结论", text: "例如由“教师属于学院”推出相关查询结果" }, { icon: HardDrive, title: "查看信息来自哪里", text: "用 W3C PROV-O 记录网页来源和处理过程" }].map(({ icon: Icon, title, text }) => <div className="ws-card" style={{ padding: 16 }} key={title}><Icon size={19} color="var(--ws-accent)" /><h3 className="ws-title" style={{ margin: "10px 0 4px", fontSize: 15 }}>{title}</h3><div className="ws-body">{text}</div></div>)}</div><div className="ws-card" style={{ padding: 18 }}><div className="ws-eyebrow">规则与来源工具</div><h3 className="ws-title" style={{ margin: "6px 0" }}>让图谱内容可信、可解释</h3><div className="ws-body">每条事实都要能回到原网页；名称和分类遵守同一套规则，自动推出的结论也要说明依据。</div><div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}><button className="ws-btn ws-btn--primary" type="button" onClick={() => onNavigate("ontology-hub")}><ShieldCheck size={14} />打开概念与分类规则</button><button className="ws-btn ws-btn--ghost" type="button" onClick={() => onNavigate("analyze")}><GitBranch size={14} />查看自动推导</button><button className="ws-btn ws-btn--ghost" type="button" onClick={() => onNavigate("manage")}><Route size={14} />查看信息来源</button></div></div></div>;
  }

  function renderStorage() {
    return <div style={{ display: "grid", gap: 18 }}><div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 14 }}>{STORAGE_OPTIONS.map(({ label, description, items, icon: Icon }) => <div className="ws-card" style={{ padding: 18 }} key={label}><Icon size={21} color="var(--ws-accent)" /><h3 className="ws-title" style={{ margin: "12px 0 6px", fontSize: 16 }}>{label}</h3><div className="ws-body">{description}</div><div className="ws-body" style={{ marginTop: 10, fontSize: 11 }}>可选工具：{items}</div><div style={{ color: "var(--ws-amber)", fontSize: 12, marginTop: 14 }}>使用前需要安装并填写连接信息</div></div>)}</div><div className="ws-card" style={{ padding: 18 }}><div style={{ display: "flex", gap: 8, alignItems: "center", color: "var(--ws-green)", fontSize: 13 }}><CheckCircle2 size={15} />保存方式可以更换，网页和问答功能不需要跟着重写。</div><div className="ws-body" style={{ marginTop: 10 }}>当前港中深学院图谱保存在本机文件中；数据量变大后可切换到 Neo4j 等图数据库。</div></div></div>;
  }

  function renderDeliver() {
    return <div style={{ display: "grid", gap: 18 }}><div className="ws-card" style={{ padding: 18 }}><div className="ws-eyebrow">下载图谱文件</div><h3 className="ws-title" style={{ margin: "6px 0" }}>选择需要的文件格式</h3><div className="ws-body">JSON 和 CSV 方便一般程序与表格查看；RDF、OWL、JSON-LD 适合语义图谱工具；Cypher 适合导入图数据库。</div><div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 16 }}>{EXPORT_OPTIONS.map((option) => <button key={option.id} type="button" className={`ws-btn ${exportFormat === option.id ? "ws-btn--primary" : "ws-btn--ghost"}`} onClick={() => setExportFormat(option.id)}>{option.label}</button>)}</div><button className="ws-btn ws-btn--primary" type="button" onClick={() => void exportGraph()} disabled={busy} style={{ marginTop: 16 }}><Download size={14} />{busy ? "准备文件…" : "下载图谱"}</button></div><div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 14 }}>{[{ icon: Network, title: "在网页查看关系图", text: "缩放、搜索并查看人物和研究方向之间的联系。", action: "打开图谱浏览", target: "explore" as WorkspaceTarget }, { icon: Code2, title: "给其他程序使用", text: "通过网页接口（REST API）查询当前图谱。", action: "打开接口说明", target: null }, { icon: Workflow, title: "连接 AI 助手或命令行", text: "通过 MCP 或 CLI 让其他工具使用图谱。", action: "查看接入说明", target: null }].map(({ icon: Icon, title, text, action, target }) => <div className="ws-card" style={{ padding: 18 }} key={title}><Icon size={20} color="var(--ws-accent)" /><h3 className="ws-title" style={{ margin: "12px 0 6px", fontSize: 16 }}>{title}</h3><div className="ws-body">{text}</div><button className="ws-btn ws-btn--ghost" type="button" onClick={() => target ? onNavigate(target) : window.open("/docs", "_blank", "noopener,noreferrer")} style={{ marginTop: 14 }}>{action}<ExternalLink size={13} /></button></div>)}</div></div>;
  }

  function renderLayer() {
    if (activeLayer === "ingest") return renderIngest();
    if (activeLayer === "prepare") return renderPrepare();
    if (activeLayer === "extract") return renderExtract();
    if (activeLayer === "graph") return renderGraph();
    if (activeLayer === "govern") return renderGovernance();
    if (activeLayer === "storage") return renderStorage();
    return renderDeliver();
  }

  return (
    <div className="ws-page ws-scroll">
      <div className="ws-padded" style={{ display: "grid", gap: 18, maxWidth: 1320, margin: "0 auto", width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
          <div><div className="ws-eyebrow">SDS 官网知识图谱</div><h2 className="ws-title" style={{ margin: "6px 0 4px", fontSize: 24 }}>港中深数据科学学院知识图谱</h2><div className="ws-body">把学院官网中的教师、培养项目、研究主题和来源链接整理成可以浏览和问答的关系网络。</div></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center", color: "var(--ws-text-muted)", fontSize: 12 }}><Clock3 size={14} />官网数据日期：2026-09-05</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 12 }}>
          {[{ label: "使用步骤", value: "7" }, { label: "可导入来源", value: String(sources.length) }, { label: "官网教师档案", value: "105" }, { label: "信息来源", value: "可追溯" }].map((item) => <div className="ws-card" style={{ padding: 14 }} key={item.label}><div className="ws-eyebrow">{item.label}</div><div className="ws-stat-value" style={{ fontSize: item.value.length > 4 ? 17 : undefined }}>{item.value}</div></div>)}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "minmax(240px, 300px) minmax(0, 1fr)", gap: 18, alignItems: "start" }}>
          <nav className="ws-card" aria-label="知识图谱使用步骤" style={{ padding: 10, display: "grid", gap: 6 }}>
            {layers.map((layer) => <button key={layer.id} type="button" onClick={() => setActiveLayer(layer.id)} style={{ border: "1px solid", borderColor: activeLayer === layer.id ? "var(--ws-border-strong)" : "transparent", background: activeLayer === layer.id ? "var(--ws-accent-soft)" : "transparent", borderRadius: 10, padding: "12px 11px", textAlign: "left", color: "var(--ws-text)", cursor: "pointer", display: "grid", gridTemplateColumns: "28px 1fr auto", gap: 9, alignItems: "center" }}><span style={{ color: activeLayer === layer.id ? "var(--ws-accent-strong)" : "var(--ws-text-muted)", fontFamily: "monospace", fontSize: 12 }}>{String(layer.number).padStart(2, "0")}</span><span><strong style={{ display: "block", fontSize: 13 }}>{layer.label}</strong><span style={{ color: "var(--ws-text-muted)", fontSize: 11 }}>{layer.description}</span></span><span style={{ color: stageTone(layer.status ?? "ready"), fontSize: 10 }}>●</span></button>)}
          </nav>
          <div style={{ minWidth: 0 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center", marginBottom: 14, flexWrap: "wrap" }}><div><div className="ws-eyebrow">步骤 {String(layers.find((layer) => layer.id === activeLayer)?.number ?? 1).padStart(2, "0")}</div><h3 className="ws-title" style={{ margin: "5px 0 0", fontSize: 19 }}>{layers.find((layer) => layer.id === activeLayer)?.label}</h3></div><div style={{ color: stageTone(layers.find((layer) => layer.id === activeLayer)?.status ?? "ready"), fontSize: 12 }}>{statusLabel(layers.find((layer) => layer.id === activeLayer)?.status ?? "ready")}</div></div>
            {renderLayer()}
            {message && <div style={{ marginTop: 14, padding: "11px 13px", borderRadius: 10, border: "1px solid var(--ws-border)", background: "rgba(74,163,255,0.06)", color: "var(--ws-text-muted)", fontSize: 12 }}>{message}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
