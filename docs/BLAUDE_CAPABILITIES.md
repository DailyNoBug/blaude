# Blaude 能力边界文档

> 版本: v26.4.3-black.1
> 日期: 2026-04-03
> 状态: 持续更新中

## 概述

Blaude 是一个基于 Claude AI 的独立运行时环境，从泄露的 Claude Code 源代码树构建而成。它不再依赖官方的 `@anthropic-ai/claude-code` npm 包，提供了一个功能丰富的本地 AI 编程助手。

## 核心架构

### 运行时环境

- **Node.js**: >= 20
- **包管理器**: pnpm 10.33.0
- **构建系统**: esbuild
- **UI 框架**: Ink (React for CLI)

### 主要目录结构

```
src/
├── commands/          # 斜杠命令实现
├── tools/            # 工具系统
├── services/         # 服务层（MCP、LSP、分析等）
├── hooks/            # React hooks 和 UI 钩子
├── tasks/            # 任务和代理系统
├── skills/           # 技能系统
├── components/       # UI 组件
├── utils/            # 工具函数
└── main.tsx          # 主入口点
```

## 工具系统

### 核心工具

#### 文件操作
- **Read**: 读取本地文件内容，支持图片、PDF、Jupyter Notebook
- **Write**: 写入新文件（会覆盖已存在文件）
- **Edit**: 精确字符串替换编辑
- **Glob**: 文件模式匹配搜索（支持通配符）
- **Grep**: 基于 ripgrep 的内容搜索
- **NotebookEdit**: 编辑 Jupyter Notebook 单元格

#### Shell 和执行
- **Bash**: 执行 shell 命令
- **PowerShell**: PowerShell 支持（可选启用）
- **Monitor**: 后台进程监控（长运行任务）

#### 搜索和网络
- **WebSearch**: 网络搜索
- **WebFetch**: 获取 URL 内容
- **WebBrowser**: 网页浏览工具（功能标志）

#### 代理和团队
- **Agent**: 启动子代理处理复杂任务
- **SendMessage**: 团队成员间消息传递
- **TeamCreate/TeamDelete**: 创建和管理代理团队
- **TaskCreate/TaskGet/TaskUpdate/TaskList**: 任务管理系统

#### 交互和规划
- **AskUserQuestion**: 向用户提问获取输入
- **EnterPlanMode**: 进入规划模式
- **ExitPlanMode**: 退出规划模式
- **Skill**: 执行用户可调用技能

#### Git 和工作区
- **EnterWorktree/ExitWorktree**: Git worktree 隔离工作
- **Config**: 配置管理

#### 任务控制
- **TaskOutput**: 获取后台任务输出
- **TaskStop**: 停止运行中的任务

#### MCP (Model Context Protocol)
- **ListMcpResources**: 列出 MCP 资源
- **ReadMcpResource**: 读取 MCP 资源

#### 其他工具
- **Brief**: 生成简报
- **TodoWrite**: 待办事项管理（旧版）
- **ToolSearch**: 工具搜索
- **Tungsten**: 内部工具
- **CtxInspect**: 上下文检查（功能标志）
- **Snip**: 上下文压缩（功能标志）
- **LSP**: 语言服务器协议集成（可选）
- **REPL**: REPL 模式
- **Workflow**: 工作流脚本（功能标志）
- **TerminalCapture**: 终端捕获（功能标志）

### 工具权限系统

工具调用受权限模式控制：

- **default**: 默认模式，大部分工具需要用户确认
- **bypassPermissions**: 绕过权限，自动执行
- **plan**: 规划模式，需要计划批准
- **dontAsk**: 拒绝模式

### 权限拒绝规则

通过 `settings.json` 配置工具级权限控制：

```json
{
  "permissions": {
    "toolDenyList": ["dangerous_tool"],
    "toolAllowList": ["safe_tool"]
  }
}
```

## 斜杠命令系统

### 核心命令

#### 项目管理
- `/init`: 初始化项目
- `/review`: 代码审查
- `/diff`: 查看更改
- `/doctor`: 诊断问题

#### 上下文管理
- `/compact`: 压缩对话上下文
- `/clear`: 清空对话
- `/memory`: 管理项目记忆
- `/tasks`: 任务列表

#### 状态和配置
- `/status`: 显示状态
- `/config`: 配置管理
- `/cost`: 成本跟踪
- `/usage`: 使用统计
- `/logs`: 日志管理
- `/help`: 帮助信息

#### 代理和模型
- `/agents`: 列出可用代理
- `/agent`: 切换代理
- `/model`: 切换模型

#### 文件和搜索
- `/files`: 文件管理
- `/context`: 上下文管理

#### 扩展系统
- `/skills`: 技能管理
- `/plugin`: 插件管理
- `/mcp`: MCP 连接管理
- `/hooks`: 钩子管理

#### 高级功能
- `/permissions`: 权限管理
- `/sandbox`: 沙盒模式
- `/plan`: 规划模式
- `/vim`: Vim 模式
- `/voice`: 语音模式
- `/bridge`: IDE 桥接
- `/terminal-setup`: 终端设置
- `/statusline`: 状态栏配置
- `/keybindings`: 快捷键管理

### 命令快捷方式

- `/`: 命令面板
- `Tab`: 命令和文件自动完成
- `!`: 直接执行 shell 命令
- `!!`: 重新执行上一个命令
- `@file`: 附加文件到提示

## 代理系统

### 内置代理类型

#### general-purpose
通用代理，拥有完整工具访问权限。

#### explorer
只读代理，工具受限：
- 可用: Glob, Grep, Read
- 禁用: Edit, Write, Bash

#### planner
规划代理，专注于分析和规划。

#### reviewer
审查代理，专注于代码审查。

#### editor
编辑代理，专注于代码修改。

### 代理配置

通过 `settings.json` 自定义代理：

```json
{
  "agents": {
    "frontend": {
      "description": "UI-focused editor",
      "prompt": "Focus on front-end implementation quality.",
      "tools": ["read", "edit", "bash"],
      "disabledTools": ["write"]
    }
  }
}
```

### 代理参数

- **description**: 任务简短描述
- **prompt**: 详细任务说明
- **subagent_type**: 代理类型
- **model**: 模型覆盖 (sonnet/opus/haiku)
- **run_in_background**: 后台运行
- **name**: 代理名称（团队模式）
- **team_name**: 团队名称
- **mode**: 权限模式
- **isolation**: 隔离模式 (worktree)
- **cwd**: 工作目录覆盖

### 团队模式

创建多代理协作团队：

1. 使用 `TeamCreate` 创建团队
2. 使用 `Agent` 工具的 `team_name` 参数生成成员
3. 使用 `SendMessage` 进行代理间通信
4. 使用 `TaskUpdate` 分配和跟踪任务
5. 使用 `TeamDelete` 清理团队

## 技能系统

### 内置技能

位于 `src/skills/bundled/`:

- **update-config**: 配置管理
- **simplify**: 代码简化和优化
- **batch**: 批处理操作
- **claudeApi**: Claude API 示例
- **keybindings**: 快捷键管理
- **loop**: 循环操作
- **remember**: 记忆管理
- **scheduleRemoteAgents**: 远程代理调度
- **skillify**: 技能创建
- **stuck**: 问题诊断
- **updateConfig**: 配置更新

### 技能发现

- 项目级技能: `.claude/skills/`
- 用户级技能: `~/.claude/skills/`
- 插件技能: 来自启用插件
- MCP 技能: 来自 MCP 服务器

## MCP (Model Context Protocol)

### MCP 服务

完整的 MCP 客户端实现：

- **连接管理**: 动态连接/断开
- **认证**: OAuth 支持
- **资源**: 资源列表和读取
- **工具**: 工具导入和调用
- **提示**: 提示模板
- **权限**: 细粒度权限控制

### MCP 配置

通过 `settings.json` 配置 MCP 服务器：

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path"]
    }
  }
}
```

## 插件系统

### 插件能力

- **技能**: 插件可提供技能
- **代理**: 插件可定义代理
- **钩子**: 插件可注册钩子
- **MCP 服务器**: 插件可启动 MCP 服务器
- **LSP 服务器**: 插件可启动 LSP 服务器

### 插件市场

支持从市场安装插件（未完全实现）。

## 钩子系统

### 生命周期钩子

- **SessionStart**: 会话开始时
- **UserPromptSubmit**: 用户提交提示时
- **PreToolUse**: 工具使用前
- **PermissionRequest**: 权限请求时
- **PostToolUse**: 工具使用后
- **SubagentStart**: 子代理启动时
- **TaskCreated**: 任务创建时
- **PreCompact**: 压缩前
- **FileChanged**: 文件更改时
- **WorktreeCreate**: Worktree 创建时

### 钩子配置

```json
{
  "hooks": {
    "PreToolUse": "echo 'Tool: $TOOL_NAME'"
  }
}
```

## 持久化状态

### 工作区状态

位于 `.claude/blaude/`:

- **session.json**: 会话状态和活动
- **tasks.json**: 任务列表
- **memory.md**: 持久化项目记忆
- **history.json**: 输入历史
- **runtime.log**: 运行时日志

### 记忆系统

四种记忆类型：

- **user**: 用户信息和偏好
- **feedback**: 反馈和指导
- **project**: 项目上下文
- **reference**: 外部系统引用

## 模型支持

### 提供商

- **Anthropic**: 官方 Claude API
- **Bedrock**: AWS Bedrock
- **Vertex**: Google Vertex AI
- **Foundry**: Anthropic Foundry

### 模型

- **Claude 4.6**: Opus, Sonnet, Haiku
- **Claude 4.5**: Opus, Sonnet, Haiku

### 模型选择

通过配置或命令选择：

```json
{
  "model": "claude-opus-4-6"
}
```

或 `/model claude-sonnet-4-6`

## UI 能力

### TUI 特性

- 欢迎仪表板
- 内联日志显示
- 命令面板
- 自动完成
- 文件提及
- Shell 快捷方式
- 快捷键绑定

### 终外模式

- **远程控制**: 移动/客户端支持
- **Chrome 扩展**: 浏览器集成
- **IDE 桥接**: VS Code/JetBrains 集成

## 能力边界

### 已实现

- 本地 CLI 和 TUI
- 核心 shell/文件/搜索工具
- 子代理委托
- 自定义代理定义
- 常用斜杠命令
- 工作区本地持久化
- MCP 客户端
- 技能系统
- 任务管理
- 记忆系统
- 第三方提供商支持

### 未完全实现

- 插件市场
- 完整钩子执行
- LSP 集成层
- IDE 桥接功能
- 语音模式
- 后台任务 UI
- 传输查看器
- 反向搜索 UI
- 提示建议
- 完整 Vim 模式
- 流式输出优化
- 检查点和回滚
- 自动压缩启发式

### 功能标志控制的功能

- **PROACTIVE**: 主动代理
- **KAIROS**: Kairos 功能集
- **MONITOR_TOOL**: 监控工具
- **WEB_BROWSER_TOOL**: 网页浏览器
- **WORKFLOW_SCRIPTS**: 工作流脚本
- **AGENT_TRIGGERS**: 代理触发器
- **CONTEXT_COLLAPSE**: 上下文压缩
- **TERMINAL_PANEL**: 终端面板
- **HISTORY_SNIP**: 历史片段
- **UDS_INBOX**: UDS 收件箱
- **VOICE_MODE**: 语音模式
- **BRIDGE_MODE**: 桥接模式
- **DAEMON**: 守护进程
- **MCP_SKILLS**: MCP 技能
- **ULTRAPLAN**: 超级规划
- **TORCH**: Torch 功能
- **FORK_SUBAGENT**: Fork 子代理
- **BUDDY**: Buddy 功能
- **EXPERIMENTAL_SKILL_SEARCH**: 实验性技能搜索
- **CCR_REMOTE_SETUP**: 远程设置
- **KAIROS_GITHUB_WEBHOOKS**: GitHub Webhooks
- **COORDINATOR_MODE**: 协调器模式

## 配置文件

### 搜索顺序

1. `./.claude/settings.json`
2. `./.cursor/settings.json`
3. `~/.claude/settings.json`
4. `~/.cursor/settings.json`
5. `~/Library/Application Support/Cursor/User/settings.json`

### 配置选项

```json
{
  "env": {},
  "model": "claude-opus-4-6",
  "agent": "general-purpose",
  "maxTurns": 10,
  "maxTokens": 8192,
  "temperature": 0.7,
  "instructions": "Additional instructions",
  "agents": {},
  "permissions": {},
  "hooks": {},
  "mcpServers": {}
}
```

## 性能特性

### 优化

- Prompt 缓存
- 工具延迟加载
- 死代码消除
- 懒加载模块
- 增量构建

### 限制

- 非流式输出
- 简单请求循环
- 内联日志打印
- 轻量级 JSON 持久化

## 扩展性

### 扩展点

1. **自定义工具**: 通过 MCP 或插件
2. **自定义代理**: settings.json 或代码
3. **自定义技能**: .claude/skills/ 或插件
4. **自定义命令**: 插件或技能
5. **自定义钩子**: settings.json
6. **MCP 服务器**: 连接外部 MCP 服务

## 开发模式

### 源码运行

```bash
pnpm run start:src
```

### 构建运行

```bash
pnpm run build
pnpm start
```

### 审计

```bash
pnpm run audit:runtime
```

## 安全考虑

### 权限系统

- 工具级权限控制
- 代理级权限继承
- 沙盒模式
- 环境变量隔离

### 敏感操作

以下操作需要用户确认：
- Git push
- 文件删除
- 包安装
- 系统级更改
- 破坏性操作

## 总结

Blaude 是一个功能丰富的 AI 编程助手，提供了：

- 完整的工具生态系统
- 灵活的代理系统
- 可扩展的技能和插件架构
- MCP 集成
- 多种提供商支持
- 丰富的斜杠命令
- 持久化状态管理

虽然与官方 Claude Code 仍有差距，但它已经是一个可独立使用的强大工具，并且正在不断改进中。

---

**文档维护**: 此文档应随 Blaude 发展持续更新。
**反馈**: 如有问题或建议，请提交 issue。
