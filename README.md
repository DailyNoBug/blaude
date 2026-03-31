# Blaude

`Blaude` is the independent CLI/TUI runtime in this repository. It is a local rewrite and modification derived from the `2026-03-31` leaked Claude Code source tree, but it no longer depends on the official `@anthropic-ai/claude-code` npm package to build or run.

This repository contains:

- the leaked `src/` tree from the `2026-03-31` Claude Code leak
- the active in-repo rewrite runtime under `black-src/`

The executable command exposed by this project is now:

```bash
blaude
```

Note: building the repo does not automatically place `blaude` on your shell `PATH`. Run the install step below once to register the command.

## Current Status

What Blaude already provides:

- independent CLI and interactive TUI
- `blaude` command entrypoint
- provider-backed model execution from `settings.json`
- runtime logs in the UI and on disk
- slash-command palette with Tab completion
- `!<command>` shell shortcut mode and `!!` rerun
- `@file` prompt attachments with path completion
- shell, file, search, and edit tools
- simple sub-agent delegation

What it is not:

- not a byte-for-byte rebuild of the leaked Claude Code source
- not yet full parity with the latest official Claude Code
- not dependent on the official Claude Code npm package

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
- the runnable runtime is the rewrite in `black-src/`
- packaging, startup, TUI behavior, and provider wiring have been reworked locally

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

- `dist/black-src/`
- `dist/blaude.mjs`

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

The active runtime is the rewrite in `black-src/`, not the official package.

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
black-src/   active Blaude runtime
dist/        built runtime output
scripts/     build and audit helpers
src/         leaked Claude Code source snapshot
```

## Notes

- The current version string is still `99.99.99-black.1` by design.
- Internal source folder names still use `black-src/` for continuity, but the runnable product name is `Blaude`.
- The latest user guide lives in [USER_GUIDE.md](./USER_GUIDE.md).
