# Blaude

`Blaude` is the independent CLI/TUI runtime in this repository. It is modified from the `2026-03-31` leaked Claude Code source tree, and the runnable core now builds from the leaked `src/` tree plus local compatibility shims instead of the official `@anthropic-ai/claude-code` npm package.

This repository contains:

- the leaked `src/` tree from the `2026-03-31` Claude Code leak
- local compatibility shims and build helpers that make the leaked `src/` runtime executable under Node

The executable command exposed by this project is now:

```bash
blaude
```

Note: building the repo does not automatically place `blaude` on your shell `PATH`. Run the install step below once to register the command.

## Current Status

| Capability | Status | Notes |
| --- | --- | --- |
| Leaked `src/` as runtime core | Implemented | `build` and `start` now bundle and run the leaked `src/` tree instead of `black-src`. |
| Official `@anthropic-ai/claude-code` runtime dependency | Removed | `pnpm run audit:runtime` verifies the runnable path no longer depends on the official package. |
| Built runtime startup | Verified | `pnpm run build`, `pnpm start -- -v`, and `node dist/blaude.mjs --help` pass. |
| Source-mode startup | Verified | `pnpm run start:src -- -v` passes against the leaked source tree. |
| Third-party provider settings | Wired | `settings.json`-based provider wiring is present, but ongoing end-to-end regression is still needed after the `src` migration. |
| Interactive TUI | Available, still being hardened | The active CLI/TUI now comes from leaked `src` code plus compatibility layers; not every interaction path has been exhaustively regression-tested yet. |
| Slash commands and CLI surface | Present | The leaked command surface is exposed again; individual commands are not all fully validated yet. |
| Tool loop and agent runtime | Present, still being filled out | Core loop is running from leaked `src` with supplemental modules and shims. |
| MCP / plugins / hooks / IDE bridge / LSP | Partial | Interfaces and command surface exist in `src`, but full parity is not complete. |
| Performance parity with latest Claude Code | In progress | Functional startup is back on leaked `src`, but latency, streaming, and large-session behavior still need work. |

What it is not:

- not a byte-for-byte rebuild of the leaked Claude Code source snapshot
- not yet full parity with the latest official Claude Code
- not dependent on the official Claude Code npm package as the active runtime

For parity gaps and roadmap, see [BLACK_CODE_PARITY_GAP.md](./BLACK_CODE_PARITY_GAP.md).

## Requirements

- macOS or Linux
- Node.js `>= 20`
- `pnpm` `>= 10`
- optional but strongly recommended: `git`, `rg`

Check your local toolchain:

```bash
node -v
pnpm -v
git --version
rg --version
```

## Project Origin

This rewrite was modified from the Claude Code `20260331` leaked source snapshot.

Concretely:

- the leaked source tree remains in `src/`
- the runnable runtime is now bundled from `src/entrypoints/cli.tsx`
- packaging, startup, missing-module shims, and provider wiring have been reworked locally

## Build From Source

1. Clone or enter the repository:

```bash
cd /path/to/claude-code
```

2. Install dependencies:

```bash
pnpm install
```

3. Build the runnable distribution:

```bash
pnpm run build
```

This creates:

- `dist/blaude.mjs`
- `dist/chunks/`

4. Verify the active runtime is independent from the official Claude Code package:

```bash
pnpm run audit:runtime
```

Expected output:

```text
Blaude runtime independence audit passed.
```

5. Run Blaude directly from the built output:

```bash
pnpm start
```

Or:

```bash
node dist/blaude.mjs
```

## Run Without Building an Install Package

For direct source-mode execution while developing:

```bash
pnpm run start:src
```

## Install As `blaude`

There are two recommended install modes.

### Option 1: Install a Global `blaude` Command From This Working Tree

This is the recommended path. It writes a small launcher into `~/.local/bin/blaude` by default, which already matches the common PATH setup on this machine.

Build first:

```bash
pnpm install
pnpm run build
```

Install the global command:

```bash
pnpm run install:global
```

This creates:

```text
~/.local/bin/blaude
```

If you want another target directory:

```bash
BLAUDE_BIN_DIR=/custom/bin pnpm run install:global
```

Verify:

```bash
blaude -v
blaude --help
```

When you change source files later, rebuild once:

```bash
pnpm run build
```

### Option 2: Pack and Install a Tarball

Use this when you want a more release-like local install artifact.

Build and create the tarball:

```bash
pnpm install
pnpm run pack:local
```

This writes a package tarball into:

```text
.artifacts/
```

Install the tarball globally:

```bash
pnpm add -g ./.artifacts/blaude-99.99.99-black.1.tgz
```

Verify:

```bash
blaude -v
blaude --help
```

## Uninstall

If you installed with the local launcher:

```bash
pnpm run uninstall:global
```

If you installed from a tarball:

```bash
pnpm remove -g blaude
```

## Settings and Provider Configuration

Blaude auto-detects provider settings from:

```text
./.claude/settings.json
./.cursor/settings.json
~/.claude/settings.json
~/.cursor/settings.json
~/Library/Application Support/Cursor/User/settings.json
```

You can also point to a specific file:

```bash
blaude --settings /path/to/settings.json
```

Common usage:

```bash
blaude
blaude -p "Analyze this repository"
blaude --agent reviewer -p "Review the current diff"
blaude --dry-run
```

## TUI Basics

Inside the TUI:

- `/` opens the command palette
- `Tab` completes slash commands and `@file` mentions
- `!<command>` runs a shell command directly
- `!!` reruns the previous shell command
- `@path/to/file` attaches a text file to the next prompt
- `?` shows help

Useful commands:

- `/status`
- `/logs`
- `/doctor`
- `/review`
- `/diff`
- `/tasks`
- `/memory`

## Runtime State

Blaude stores workspace-local runtime state in:

```text
.claude/blaude/
```

Files include:

- `session.json`
- `tasks.json`
- `memory.md`
- `history.json`
- `runtime.log`

If an older `.claude/black-code/` directory exists, Blaude will copy legacy state files into the new location when needed.

## Independence Guarantees

The active runtime is the leaked `src/` runtime bundled with local Node-compatibility shims, not the official package.

The audit checks:

- `package.json`
- `pnpm-lock.yaml`
- built `dist/`
- installed `node_modules/`

Run it anytime:

```bash
pnpm run audit:runtime
```

## Repository Layout

```text
dist/        built runtime output
scripts/     build, audit, and compatibility helpers
src/         leaked Claude Code source snapshot and active runtime core
```

## Notes

- The current version string is still `99.99.99-black.1` by design.
- The current runnable core is the leaked `src/` tree, with compatibility layers living under `scripts/` and selected supplemental `src/` modules.
- The latest user guide lives in [USER_GUIDE.md](./USER_GUIDE.md).
