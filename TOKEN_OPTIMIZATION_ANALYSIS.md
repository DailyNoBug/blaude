# Blaude Token 消耗分析与优化建议

> 分析日期：2026-04-03
> 目标：识别导致 token 疯狂消耗的代码区域，提出节省 token 且不降低性能的优化方案

---

## 1. 工具描述过于冗长（每次请求 ~15,000-20,000 tokens）

每次 API 调用都会发送所有工具的 schema 描述，最耗 token 的前 5 个工具：

| 工具 | 文件 | 预估 tokens/次 |
|------|------|---------------|
| BashTool | `src/tools/BashTool/prompt.ts` (369行) | **~5,280** |
| AgentTool | `src/tools/AgentTool/prompt.ts` (287行) | **~4,170** |
| TodoWriteTool | `src/tools/TodoWriteTool/prompt.ts` (184行) | **~2,380** |
| SkillTool | `src/tools/SkillTool/prompt.ts` (241行) | **~2,050** |
| EnterPlanModeTool | `src/tools/EnterPlanModeTool/prompt.ts` (170行) | **~1,940** |

**核心问题**：BashTool 仅 git commit/PR 指南就占 ~2,500 tokens，无论用户是否使用 git 都会发送。

**优化建议**：
- 按需注入：仅在检测到 git repo 时才发送 git 相关指令
- 将详细示例从工具描述中抽出，改为 deferred tools 模式，按需加载
- BashTool 的 commit/PR 指南可以拆成独立 skill，只在 `/commit` 时加载

---

## 2. CLAUDE.md 内容注入（最高 ~10,000 tokens）

**文件**：`src/utils/claudemd.ts:92`

`MAX_MEMORY_CHARACTER_COUNT = 40,000` 字符（~10,000 tokens），每次对话都会注入所有 CLAUDE.md 文件内容。多个层级（managed/user/project/local）的规则会被拼接。

**优化建议**：
- 降低上限到 10,000-15,000 字符
- 实现按相关性裁剪，只保留与当前任务相关的规则
- 对未变化的 CLAUDE.md 内容利用 prompt cache，避免重复计费

---

## 3. 每轮附件开销（500-5,000 tokens/轮）

**文件**：`src/utils/attachments.ts`（3,998 行）

`getAttachments()` 每轮都运行，生成大量附件：

- **changed_files**（500-5,000 tokens）：每轮都会 stat + diff 所有已读文件
- **relevant_memories**（~5,000 tokens）：异步预取最多 5 个 memory 文件，每会话上限 60KB
- **mcp_instructions_delta**（200-2,000 tokens）
- **agent_listing_delta**（200-1,000 tokens）

**优化建议**：
- `changed_files`：改为基于文件 watcher 事件驱动，而非每轮全量检查
- `relevant_memories`：降低单次上限（从 5 个减到 3 个）和会话上限（从 60KB 减到 30KB）
- 增加附件的"去重"机制，未变化的附件不重复发送

---

## 4. Memory 提示词样板（~2,500 tokens）

**文件**：`src/memdir/memdir.ts`、`src/memdir/memoryTypes.ts`

当 auto-memory 启用时，每次请求都包含完整的 memory 类型定义、保存规则、示例等，约 2,000-2,500 tokens 的样板文字。

**优化建议**：
- 将 memory 指令移到 deferred attachment 中，首次写入 memory 时才注入
- 压缩 memoryTypes.ts 中的 XML 格式示例（当前 ~1,200 tokens 的类型定义可压缩到 ~500 tokens）

---

## 5. 重试机制（每次重试 200-500K tokens）

**文件**：`src/services/api/withRetry.ts`

- **默认最大重试 10 次**（line 52）：每次重试重新发送完整请求
- **模型降级**（lines 333-365）：Opus → Sonnet 降级时零缓存命中
- **Compact PTL 重试**：compact 本身失败会重试 3 次，每次都是完整 API 调用

**优化建议**：
- 降低默认最大重试次数（10 → 3-5）
- 重试前检查错误类型，对不可恢复错误直接失败
- 模型降级时保留 prompt cache 前缀

---

## 6. Compact 后重新注入（30-80K tokens）

**文件**：`src/services/compact/compact.ts:532-585`

compact 之后系统会重新注入：
- 最多 5 个文件附件（50K token 预算）
- 每个 skill 最多 5K tokens（总计 25K）
- 全量重新声明 deferred tools、agent listing、MCP instructions

**优化建议**：
- 降低文件恢复预算（50K → 20K）
- 只恢复最近被引用的 2-3 个文件
- delta 重新声明改为增量式，而非全量

---

## 7. 静态系统提示（~2,500-3,500 tokens）

**文件**：`src/constants/prompts.ts`（915 行）

每次请求的静态段落中，`getSimpleDoingTasksSection()` 最大（~800 tokens，含 15+ 条行为规则）。对外部用户还额外添加 ~500 tokens 的输出效率指南。

**优化建议**：
- 合并重复的行为规则（"tone and style" 和 "doing tasks" 有重叠）
- 压缩示例列表（如 "risky actions" 的 6 个示例可缩减为 3 个）

---

## 总体优化策略优先级

| 优先级 | 优化项 | 预估节省 | 难度 |
|--------|--------|---------|------|
| P0 | 工具描述按需注入 | 每次 API 调用节省 ~8,000-10,000 tokens | 中 |
| P0 | 降低 CLAUDE.md 上限 + 智能裁剪 | 每次对话节省 ~5,000 tokens | 低 |
| P1 | 减少 changed_files 全量检查 | 每轮节省 ~2,000-4,000 tokens | 中 |
| P1 | Memory 样板延迟加载 | 每次请求节省 ~2,000 tokens | 低 |
| P1 | 降低重试次数 | 避免异常情况下 200-500K tokens 的浪费 | 低 |
| P2 | Compact 后精简重新注入 | 每次 compact 节省 ~20-50K tokens | 高 |
| P2 | 系统提示合并精简 | 每次请求节省 ~1,000 tokens | 低 |

**最有价值的单一改动**：将 BashTool 和 AgentTool 的详细描述改为 deferred 模式，仅在首次使用时加载详细指南，预计每次 API 调用节省 ~10,000 tokens，且不影响性能（模型在需要时会通过 ToolSearchTool 查找详情）。
