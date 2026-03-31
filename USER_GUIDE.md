# Blaude User Guide

This repository now ships an independent runtime named `Blaude`. It no longer needs `@anthropic-ai/claude-code` to start the CLI, the TUI, or the agent/tool loop.

Run it from the repository with `pnpm start`, or install the global `blaude` command as described in [README.md](./README.md).

Project version:

- `99.99.99-black.1`

## Quick Start

```bash
cd /path/to/claude-code
pnpm install
pnpm run build
pnpm start
```

Source entry without a build step:

```bash
pnpm run start:src
```

Check the version:

```bash
pnpm start -- -v
```

Verify the active runtime does not depend on the official Claude Code npm package:

```bash
pnpm run audit:runtime
```

This audit checks:

- `package.json`
- `pnpm-lock.yaml`
- the built `dist/` runtime
- `node_modules/@anthropic-ai/claude-code`

## Third-Party Provider Settings

Default settings search order:

```bash
./.claude/settings.json
./.cursor/settings.json
~/.claude/settings.json
~/.cursor/settings.json
~/Library/Application Support/Cursor/User/settings.json
```

You can also point to any JSON file:

```bash
pnpm start -- --settings /path/to/settings.json
```

`settings.json` supports:

- `env`: environment variables injected into the model runtime and shell tools
- `model`: default model id
- `agent`: default agent profile
- `maxTurns`: max model turns per user request
- `maxTokens`: max output tokens per request
- `temperature`: model temperature
- `thinking`: optional Anthropic thinking config
- `instructions` or `systemPrompt`: additional system instructions
- `agents`: custom agent definitions

Example:

```json
{
  "env": {
    "CLAUDE_CODE_USE_VERTEX": "true",
    "ANTHROPIC_VERTEX_PROJECT_ID": "my-project",
    "CLOUD_ML_REGION": "us-central1"
  },
  "model": "claude-3-5-sonnet-v2@20241022",
  "agent": "general-purpose",
  "instructions": "Prefer small verified edits.",
  "agents": {
    "frontend": {
      "description": "UI-focused editor",
      "prompt": "Focus on front-end implementation quality and polish.",
      "tools": ["list_dir", "glob", "grep", "read_file", "write_file", "edit_file", "bash"]
    }
  }
}
```

Supported provider switches inside `settings.env`:

- `CLAUDE_CODE_USE_BEDROCK=true`
- `CLAUDE_CODE_USE_VERTEX=true`
- `CLAUDE_CODE_USE_FOUNDRY=true`
- `ANTHROPIC_BASE_URL=https://...`

## CLI Usage

Interactive TUI:

```bash
pnpm start
pnpm start -- --settings /path/to/settings.json
```

Single prompt mode:

```bash
pnpm start -- -p "Analyze this repository and suggest a refactor plan"
```

Reviewer agent mode:

```bash
pnpm start -- --agent reviewer -p "Review the current changes"
```

Print resolved config without calling the model:

```bash
pnpm start -- --dry-run
```

List agents and tools:

```bash
pnpm start -- --list-agents
pnpm start -- --list-tools
```

## Interactive Commands

Input shortcuts:

- `/` opens the command palette
- `Tab` completes slash commands and trailing `@file` mentions
- `!<command>` runs a shell command directly
- `!!` reruns the last shell command
- `@path/to/file` attaches a text file to the next prompt
- `?` shows help

Examples:

```text
/rev<Tab>
!git status
!! 
请参考 @package.json 和 @USER_GUIDE.md
```

Inside the TUI:

- `/help`
- `/status`
- `/init`
- `/review`
- `/diff`
- `/doctor`
- `/compact`
- `/memory`
- `/tasks`
- `/history`
- `/logs`
- `/agents`
- `/agent NAME`
- `/model NAME`
- `/tools`
- `/config`
- `/cost`
- `/usage`
- `/reset`
- `/clear`
- `/exit`

Useful `/logs` variants:

- `/logs`
- `/logs recent 50`
- `/logs status`
- `/logs path`
- `/logs on`
- `/logs off`

## Built-In Tools

The current independent runtime exposes these core tools to the model:

- `bash`
- `list_dir`
- `glob`
- `grep`
- `read_file`
- `write_file`
- `edit_file`
- `agent`

## Built-In Agents

- `general-purpose`
- `planner`
- `explorer`
- `reviewer`
- `editor`

## Workspace Instructions

If a `CLAUDE.md` file exists in the working directory, Blaude loads it automatically and appends it to the system prompt.

## Local Runtime State

Blaude keeps per-workspace state in `.claude/blaude/`:

- `session.json`: recent activity and compacted notes
- `tasks.json`: simple local tasks
- `memory.md`: persistent project memory
- `history.json`: input history for the current workspace
- `runtime.log`: persisted runtime log stream

## Current Scope

Implemented in the independent runtime:

- local CLI and TUI
- welcome dashboard with recent activity
- runtime log stream, persisted runtime log file, and `/logs`
- `/` command palette
- Tab completion for slash commands, command arguments, and `@file` mentions
- direct shell shortcut mode with `!` and `!!`
- `@file` context injection for prompts
- per-workspace input history
- third-party provider startup
- shell/file/search tools
- sub-agent delegation
- custom agent definitions from `settings.json`
- common slash commands (`/init`, `/review`, `/doctor`, `/compact`, `/memory`, `/tasks`, `/diff`)
- workspace-local persistent state in `.claude/blaude/`
- direct source startup without the official Claude Code package

Not yet rebuilt from the leaked source tree:

- MCP integration
- plugin marketplace
- hooks
- background task control
- transcript viewer
- reverse-search UI
- prompt suggestions
- vim mode
- IDE bridge
- voice mode
- full official command surface
- official Ink UI parity
