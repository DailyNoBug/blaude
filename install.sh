#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

BLAUDE_BIN_DIR_DEFAULT="${BLAUDE_BIN_DIR:-$HOME/.local/bin}"
INSTALL_MODE="launcher"
SKIP_DEPS=0
SKIP_AUDIT=0

usage() {
  cat <<'EOF'
Usage: ./install.sh [options]

Builds, packages, and installs Blaude from this repository.

Options:
  --bin-dir <path>       Install launcher into a specific bin directory
  --tarball-install      Install the packaged .tgz globally with pnpm
  --launcher-install     Install a local launcher script (default)
  --skip-deps            Skip pnpm install
  --skip-audit           Skip runtime independence audit
  -h, --help             Show this help text

Environment:
  BLAUDE_BIN_DIR         Default launcher install directory
EOF
}

BIN_DIR="$BLAUDE_BIN_DIR_DEFAULT"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --bin-dir)
      if [[ $# -lt 2 ]]; then
        echo "error: --bin-dir requires a path" >&2
        exit 1
      fi
      BIN_DIR="$2"
      shift 2
      ;;
    --tarball-install)
      INSTALL_MODE="tarball"
      shift
      ;;
    --launcher-install)
      INSTALL_MODE="launcher"
      shift
      ;;
    --skip-deps)
      SKIP_DEPS=1
      shift
      ;;
    --skip-audit)
      SKIP_AUDIT=1
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "error: unknown option: $1" >&2
      usage >&2
      exit 1
      ;;
  esac
done

require_command() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "error: missing required command: $1" >&2
    exit 1
  fi
}

find_latest_tarball() {
  local latest
  latest="$(find "$ROOT_DIR/.artifacts" -maxdepth 1 -type f -name 'blaude-*.tgz' -print | sort | tail -n 1)"
  if [[ -z "$latest" ]]; then
    echo "error: no Blaude tarball found in $ROOT_DIR/.artifacts" >&2
    exit 1
  fi
  printf '%s\n' "$latest"
}

require_command node
require_command pnpm

echo "==> Repository: $ROOT_DIR"
echo "==> Install mode: $INSTALL_MODE"

if [[ "$SKIP_DEPS" -eq 0 ]]; then
  echo "==> Installing dependencies"
  if ! pnpm install --frozen-lockfile; then
    echo "==> Frozen install failed, retrying with a normal pnpm install"
    pnpm install
  fi
else
  echo "==> Skipping dependency installation"
fi

echo "==> Building Blaude"
pnpm run build

if [[ "$SKIP_AUDIT" -eq 0 ]]; then
  echo "==> Verifying runtime independence"
  pnpm run audit:runtime
else
  echo "==> Skipping runtime independence audit"
fi

echo "==> Packaging tarball"
mkdir -p "$ROOT_DIR/.artifacts"
pnpm pack --pack-destination "$ROOT_DIR/.artifacts" >/dev/null
TARBALL_PATH="$(find_latest_tarball)"
echo "==> Tarball created: $TARBALL_PATH"

if [[ "$INSTALL_MODE" == "tarball" ]]; then
  echo "==> Installing packaged tarball globally"
  pnpm add -g "$TARBALL_PATH"
  echo "==> Global tarball installation complete"
else
  echo "==> Installing local launcher into $BIN_DIR"
  BLAUDE_BIN_DIR="$BIN_DIR" node "$ROOT_DIR/scripts/install-local-command.mjs"
fi

if [[ "$INSTALL_MODE" == "launcher" ]]; then
  INSTALLED_COMMAND="$BIN_DIR/blaude"
else
  INSTALLED_COMMAND="blaude"
fi

echo "==> Verifying installation"
if [[ "$INSTALL_MODE" == "launcher" ]]; then
  "$INSTALLED_COMMAND" -v
else
  blaude -v
fi

echo
echo "Blaude installation complete."
if [[ "$INSTALL_MODE" == "launcher" ]]; then
  echo "Launcher: $INSTALLED_COMMAND"
fi
echo "Tarball:  $TARBALL_PATH"
