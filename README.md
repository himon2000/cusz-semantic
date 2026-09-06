# 港中大（深圳）数据科学学院官网知识图谱

本目录以香港中文大学（深圳）及数据科学学院官网公开信息为唯一事实来源，
构建一个可重复同步、可验证、带来源追踪的本地知识图谱。

## 当前范围

- 学校与数据科学学院
- 本科、授课型硕士、研究型硕博项目
- 官网教师目录的全部公开档案、职务、研究主题和个人页链接
- 学科方向、专业应用领域和学院重点研究方向
- 所有实体和关系的来源、抓取日期与证据说明

2026-09-05 快照包含 105 个教师目录公开档案。这个数量包含官网目录中的
不同教师分类及未来入职档案，不等同于“现任全职教师人数”；学院学科方向页的
“87 人师资团队”采用另一统计口径，图谱中已单独保留说明。官网信息会变化，
重新采集后应人工复核增删与冲突。

## 运行

在仓库根目录执行：

```bash
python projects/cuhksz_sds_kg/scripts/sync_official_site.py
python projects/cuhksz_sds_kg/scripts/validate_seed.py
python projects/cuhksz_sds_kg/scripts/build_graph.py
python projects/cuhksz_sds_kg/scripts/query_graph.py "机器学习"
```

同步脚本会读取学院项目介绍、学科方向、专业特色、院长致辞和教师目录全部分页，
并把每一页的官网地址写入来源记录。也可以使用已经下载的网页快照：

```bash
python projects/cuhksz_sds_kg/scripts/sync_official_site.py --html-dir /path/to/html
```

## 本地知识图谱智能体网站

不需要 API Key，也不会把问题发送给外部服务。智能体通过实体别名匹配、关系
方向判断和图遍历生成答案，并附上官网来源。

```bash
python projects/cuhksz_sds_kg/app/server.py
```

浏览器打开 <http://127.0.0.1:8765>。目前支持的问题包括：

- 数据科学学院院长是谁？
- 有哪些本科、硕士或博士项目？
- 谁研究机器学习？
- 查宏远研究什么？

HTTP 接口：

```bash
curl -X POST http://127.0.0.1:8765/api/ask \
  -H 'Content-Type: application/json' \
  -d '{"question":"谁研究机器学习？"}'
```

这是确定性知识图谱问答，不会编造图谱中不存在的关系。若未来安装 Ollama，
可以在图检索之后增加本地大模型，仅负责语言组织，不改变事实来源。

完整 Semantica Explorer 后端可直接加载同一份图谱，并在“学院知识图谱”入口问答：

```bash
python -m semantica.explorer \
  --graph projects/cuhksz_sds_kg/output/sds_knowledge_graph.json \
  --host 127.0.0.1 --port 8000
```

生成文件位于 `projects/cuhksz_sds_kg/output/`：

- `sds_knowledge_graph.json`：Semantica Explorer 兼容图数据
- `sds_knowledge_graph.ttl`：RDF/Turtle 图数据
- `build_report.json`：实体、关系、类型和来源统计

## 数据治理规则

1. `assertion_type=stated` 表示官网直接陈述；`normalized` 表示从官网原文归一化得到。
2. 每个实体和关系必须包含 `source_ids`，并能解析到 `config/sources.json`。
3. 人员稳定标识优先采用官网教师页编号；没有独立页面时使用规范化姓名。
4. 项目名称按官网当前表述保存，不用旧宣传册覆盖新页面。
5. 变更官网事实时，同时更新 `retrieved_at` 和证据说明。
