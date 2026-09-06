# 港中深数据科学学院知识图谱

这是一个在本机运行的港中深数据科学学院知识图谱平台。数据来自学院官网公开页面，
当前图谱包含教师、培养项目、学习方向、研究主题及它们之间的关系，并保留官网来源。

## 目录结构

```text
frontend/         网页界面（React + Vite）
backend/          图谱接口、搜索、推理、导入导出等后端能力（Python）
knowledge-graph/  学院本体、官网数据、构图脚本、问答智能体和生成结果
scripts/          本机启动脚本
docs/             项目与底层框架说明
```

## 本机安装

需要 Python 3.10+、Node.js 20+ 和 npm。

```bash
python3 -m venv .venv
.venv/bin/pip install -e "./backend[explorer]"
cd frontend
npm install
cd ..
```

## 启动

```bash
./scripts/start-local.sh
```

然后打开 <http://127.0.0.1:4173/>。后端接口和接口文档分别位于：

- <http://127.0.0.1:8000/api/health>
- <http://127.0.0.1:8000/docs>

## 搜索示例

- 输入“机器学习”：返回研究主题节点，以及“某教师 —研究→ 机器学习”等关系。
- 输入“查宏远”：返回教师节点，以及这位教师的研究、任职关系。
- 输入“任职于”：返回教师与数据科学学院之间的任职关系。
- 输入“开设培养项目”：返回学院与各培养项目之间的关系。

点击节点会定位到图谱条目；点击关系会定位到关系两端，并显示关系详情。

## 数据说明

当前官网快照日期为 2026-09-05，生成图谱包含 469 个节点、539 条关系。
官网内容会更新，可使用 `knowledge-graph/scripts/sync_official_site.py` 重新采集，
再运行校验和构图脚本。详细数据治理规则见 `knowledge-graph/README.md`。

