# Blaude vs Current Claude Code

Date: `2026-04-01`

This document compares the current in-repo `Blaude` runtime with the current public Claude Code feature surface documented by Anthropic.

## Source Baseline

Primary references used for this comparison:

- [Built-in commands](https://docs.claude.com/en/docs/claude-code/commands)
- [Interactive mode](https://docs.claude.com/en/docs/claude-code/interactive-mode)
- [Create custom subagents](https://docs.claude.com/en/docs/claude-code/sub-agents)
- [Plugins reference](https://docs.claude.com/en/docs/claude-code/plugins-reference)
- [Hooks guide](https://docs.claude.com/en/docs/claude-code/hooks-guide)
- [npm package page for `@anthropic-ai/claude-code`](https://www.npmjs.com/package/%40anthropic-ai/claude-code?activeTab=versions)

Notes:

- Official docs are treated as the primary source of truth because the npm versions page and cached search results can lag or disagree.
- This comparison reflects what was publicly documented on `2026-04-01`.

## Current Blaude

Implemented now:

- independent runtime in `black-src/`
- no runtime dependency on `@anthropic-ai/claude-code`
- clean build that removes stale `dist/` artifacts before copying the active runtime
- runtime independence audit across `package.json`, `pnpm-lock.yaml`, `dist/`, and installed `node_modules/`
- third-party provider startup from `settings.json`
- interactive TUI with welcome dashboard and recent activity
- inline runtime logs plus persisted `.claude/blaude/runtime.log`
- `/` command palette
- Tab completion for slash commands and `@file` mentions
- `!<command>` direct shell mode and `!!` re-run
- `@file` prompt attachment for text files
- per-workspace input history in `.claude/blaude/history.json`
- built-in commands:
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
  - `/agent`
  - `/model`
  - `/tools`
  - `/config`
  - `/cost`
  - `/usage`
  - `/reset`
  - `/clear`
  - `/exit`
- shell, file, search, and edit tools
- simple subagent delegation
- custom agent profiles from `settings.json`
- workspace-local state in `.claude/blaude/`

## Important Reality Check

What is true today:

- Blaude no longer depends on the official `@anthropic-ai/claude-code` npm package to build or run.
- The active runtime is the in-repo rewrite under `black-src/`.
- The leaked `src/` tree is still incomplete and is not yet the executable runtime.

What is not true today:

- Blaude is not a byte-for-byte rebuild of the leaked Claude Code source.
- Blaude is not yet feature-parity with the current official Claude Code.

Remaining external runtime dependencies:

- public provider SDKs from `package.json` are still used for Anthropic, Bedrock, Vertex, and Foundry access
- this is different from depending on the official Claude Code product package, but it does mean the runtime is not "only leaked source plus Node built-ins"

## What the Current Official Docs Describe

According to Anthropic's public docs, current Claude Code includes:

- a much larger built-in command surface such as `/add-dir`, `/btw`, `/context`, `/hooks`, `/ide`, `/login`, `/logout`, `/mcp`, `/permissions`, `/plugin`, `/resume`, `/rewind`, `/sandbox`, `/statusline`, `/tasks`, `/terminal-setup`, `/usage`, `/vim`, and `/voice`
- interactive-mode shortcuts like `Ctrl+O` verbose output, `Ctrl+T` task list, `Ctrl+B` backgrounding, `Ctrl+R` reverse search, `Esc Esc` rewind/summarize, model switching shortcuts, fast-mode toggles, and multiline-editor bindings
- quick-entry affordances where `/` opens the command menu, `!` enters bash mode, and `@` triggers file autocomplete
- built-in subagents such as `Explore`, `Plan`, and `General-purpose`, plus a richer `/agents` management interface
- plugin-delivered skills, agents, hooks, MCP servers, and LSP servers
- hooks across many lifecycle events, including `SessionStart`, `UserPromptSubmit`, `PreToolUse`, `PermissionRequest`, `PostToolUse`, `SubagentStart`, `TaskCreated`, `PreCompact`, `FileChanged`, and `WorktreeCreate`
- checkpointing and rewind flows, interactive diff viewers, status/config tabs, prompt suggestions, and background task management

## Gap Summary

### 1. TUI and Input Experience

Blaude has closed part of the gap:

- `/` palette exists
- Tab completion exists
- `!` shell shortcut exists
- `@file` mentions exist
- workspace input history exists
- inline runtime logs exist

Still behind official Claude Code in:

- `Ctrl+O` transcript / verbose-output workflow
- `Ctrl+T` task pane
- `Ctrl+B` backgrounding
- `Ctrl+R` reverse search UI
- `Esc Esc` rewind / summarize flow
- prompt suggestions
- full-screen transcript viewer
- vim editing mode
- richer status/config/settings screens
- interactive diff viewer

### 2. Command Surface

Blaude covers the common local workflow commands but is still missing a large part of the documented official surface, including:

- `/add-dir`
- `/btw`
- `/context`
- `/hooks`
- `/ide`
- `/login`
- `/logout`
- `/mcp`
- `/permissions`
- `/plugin`
- `/pr-comments`
- `/resume`
- `/rewind`
- `/sandbox`
- `/schedule`
- `/security-review`
- `/statusline`
- `/terminal-setup`
- `/vim`
- `/voice`

### 3. Agent Runtime

Blaude currently provides a simpler agent loop:

- one foreground interaction loop
- bounded subagent delegation
- per-workspace memory/tasks/history

Official Claude Code goes further with:

- built-in `Explore` and `Plan` personalities with strong tool restrictions
- background agents and task lifecycle management
- session resume and checkpointing
- worktree isolation
- richer permission inheritance
- context visualization and compaction UX

### 4. Extension and Ecosystem

This remains the biggest parity gap.

Official docs describe:

- hooks
- plugin loading
- plugin marketplaces
- MCP integration
- LSP integration
- skill ecosystems
- IDE bridge flows

Blaude does not yet have:

- a plugin loader
- hook execution
- MCP client/server integration
- LSP adapter layer
- marketplace install/update flows
- IDE bridge or remote-control features

### 5. Performance and Runtime Behavior

Blaude is still behind in:

- streaming assistant output into the TUI
- real-time shell progress inside the prompt area
- background task execution and polling
- checkpoint-aware rewind
- automatic compaction heuristics
- prompt-suggestion generation
- optimized large-session rendering
- extension-aware caching and lazy loading

Today Blaude uses:

- a simpler request loop
- non-streaming assistant responses
- inline log printing
- lightweight JSON persistence
- straightforward per-turn context attachment

## Performance Delta

### Strengths of Blaude today

- smaller codepath and lower conceptual overhead
- easy to inspect locally
- easier to patch quickly for custom providers
- no dependency on the official Claude Code npm package

### Advantages still held by official Claude Code

- deeper interaction model
- background execution
- richer command surface
- full extension substrate
- more optimized terminal UX
- more mature context and checkpoint management

## What It Takes to Catch Up

### Phase 1: TUI Parity

Target:

- add reverse-search UI
- add transcript viewer
- add task pane
- add prompt suggestions
- add keyboard toggles for logs, tasks, and model switching
- add `!` shell history completion beyond basic readline history

Why first:

- this is the highest-visibility gap during daily usage
- it improves perceived quality immediately even before deeper runtime work lands

### Phase 2: Execution Substrate

Target:

- background bash jobs
- background subagents
- task IDs, task status, and task output retrieval
- checkpointing and rewind
- richer permission and sandbox state
- session resume beyond lightweight JSON state

Why second:

- this closes the gap between "single foreground coding loop" and "persistent agent runtime"

### Phase 3: Extension System

Target:

- hooks
- skill loader
- MCP client
- plugin manifest loader
- LSP integration

Why third:

- this is the biggest architectural difference between Blaude and the official platform

### Phase 4: Performance

Target:

- streaming assistant output
- log rendering that does not fight the prompt
- context-budget tracking
- auto-compaction heuristics
- large-session stress handling

Why fourth:

- once the surface area is closer, performance work becomes measurable instead of speculative

### Phase 5: Compatibility Hardening

Target:

- command parity checklist
- golden transcript tests
- TUI interaction tests
- provider regression suite
- large-repo benchmarks

Why last:

- it prevents the rewrite from drifting while feature scope grows

## Practical Catch-Up Order

Recommended next implementation order:

1. transcript viewer + reverse search + prompt suggestions
2. background shell tasks + `/tasks` pane + `/resume`
3. `/permissions`, `/sandbox`, `/rewind`, `/usage`
4. hooks
5. MCP
6. plugins and LSP
7. IDE bridge and remote-control features
8. streaming and performance tuning

## Suggested Success Metrics

Measure parity with concrete signals:

- startup latency to first prompt
- prompt submit to first visible token or log event
- `/review` end-to-end latency on a medium diff
- shell shortcut latency for `!git status`
- background task visibility and recovery
- command surface coverage vs public docs
- extension surface coverage: hooks, MCP, plugins, LSP
- large-session stability after repeated compaction

## Bottom Line

Blaude is now a genuinely independent local runtime with a usable TUI, common commands, inline and persisted logs, `!` shell mode, `@file` prompt attachments, and subagents.

It is still meaningfully behind the currently documented Claude Code experience. The biggest gaps are:

- interactive TUI depth
- background execution and checkpointing
- hooks, plugins, MCP, and LSP
- streaming and large-session performance

The path to catch up is clear, but it is a multi-phase rewrite project rather than a small patch set.
