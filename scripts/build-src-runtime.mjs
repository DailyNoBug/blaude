import fs from "fs";
import fsp from "fs/promises";
import path from "path";
import { build } from "esbuild";

const ROOT = process.cwd();
const DIST_DIR = path.join(ROOT, "dist");
const ENTRY = path.join(ROOT, "scripts", "run-src-runtime.mjs");
const EXTENSIONS = [".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs", ".json"];
const TEXT_EXTENSIONS = [".md", ".txt", ".prompt"];

const SHIMS = new Map([
  ["bun:bundle", path.join(ROOT, "scripts", "shims", "bun-bundle.mjs")],
  [
    "@anthropic-ai/sandbox-runtime",
    path.join(ROOT, "scripts", "shims", "anthropic-sandbox-runtime.mjs"),
  ],
  [
    "@commander-js/extra-typings",
    path.join(ROOT, "scripts", "shims", "commander-extra-typings.mjs"),
  ],
  [
    "@ant/claude-for-chrome-mcp",
    path.join(ROOT, "scripts", "shims", "ant-claude-for-chrome-mcp.mjs"),
  ],
  [
    "@ant/computer-use-mcp",
    path.join(ROOT, "scripts", "shims", "ant-computer-use-mcp.mjs"),
  ],
  [
    "@ant/computer-use-mcp/types",
    path.join(ROOT, "scripts", "shims", "ant-computer-use-mcp-types.mjs"),
  ],
  [
    "@ant/computer-use-mcp/sentinelApps",
    path.join(
      ROOT,
      "scripts",
      "shims",
      "ant-computer-use-mcp-sentinelApps.mjs",
    ),
  ],
  [
    "@ant/computer-use-input",
    path.join(ROOT, "scripts", "shims", "ant-computer-use-input.mjs"),
  ],
  [
    "@ant/computer-use-swift",
    path.join(ROOT, "scripts", "shims", "ant-computer-use-swift.mjs"),
  ],
  [
    "color-diff-napi",
    path.join(ROOT, "scripts", "shims", "color-diff-napi.mjs"),
  ],
  [
    "@opentelemetry/core",
    path.join(ROOT, "scripts", "shims", "opentelemetry-core.mjs"),
  ],
  [
    "@opentelemetry/semantic-conventions",
    path.join(
      ROOT,
      "scripts",
      "shims",
      "opentelemetry-semantic-conventions.mjs",
    ),
  ],
  [
    "@opentelemetry/sdk-logs",
    path.join(ROOT, "scripts", "shims", "opentelemetry-sdk-logs.mjs"),
  ],
  [
    "@opentelemetry/sdk-metrics",
    path.join(ROOT, "scripts", "shims", "opentelemetry-sdk-metrics.mjs"),
  ],
  [
    "@opentelemetry/sdk-trace-base",
    path.join(ROOT, "scripts", "shims", "opentelemetry-sdk-trace-base.mjs"),
  ],
  [
    "@opentelemetry/resources",
    path.join(ROOT, "scripts", "shims", "opentelemetry-resources.mjs"),
  ],
  [
    "@opentelemetry/api",
    path.join(ROOT, "scripts", "shims", "opentelemetry-api.mjs"),
  ],
  [
    "@opentelemetry/api-logs",
    path.join(ROOT, "scripts", "shims", "opentelemetry-api-logs.mjs"),
  ],
  ["shell-quote", path.join(ROOT, "scripts", "shims", "shell-quote.mjs")],
  ["ajv", path.join(ROOT, "scripts", "shims", "ajv.mjs")],
  ["asciichart", path.join(ROOT, "scripts", "shims", "asciichart.mjs")],
  ["diff", path.join(ROOT, "scripts", "shims", "diff.mjs")],
  ["cross-spawn", path.join(ROOT, "scripts", "shims", "cross-spawn.mjs")],
  ["dom-mutator", path.join(ROOT, "scripts", "shims", "dom-mutator.mjs")],
  [
    "https-proxy-agent",
    path.join(ROOT, "scripts", "shims", "https-proxy-agent.mjs"),
  ],
  ["lru-cache", path.join(ROOT, "scripts", "shims", "lru-cache.mjs")],
  ["marked", path.join(ROOT, "scripts", "shims", "marked.mjs")],
  ["picomatch", path.join(ROOT, "scripts", "shims", "picomatch.mjs")],
  ["qrcode", path.join(ROOT, "scripts", "shims", "qrcode.mjs")],
  ["react", path.join(ROOT, "scripts", "shims", "react.mjs")],
  [
    "react/compiler-runtime",
    path.join(ROOT, "scripts", "shims", "react-compiler-runtime.mjs"),
  ],
  [
    "react-reconciler",
    path.join(ROOT, "scripts", "shims", "react-reconciler.mjs"),
  ],
  [
    "react-reconciler/constants.js",
    path.join(ROOT, "scripts", "shims", "react-reconciler-constants.mjs"),
  ],
  ["semver", path.join(ROOT, "scripts", "shims", "semver.mjs")],
  ["sharp", path.join(ROOT, "scripts", "shims", "sharp.mjs")],
  [
    "@anthropic-ai/mcpb",
    path.join(ROOT, "scripts", "shims", "anthropic-mcpb.mjs"),
  ],
  [
    "audio-capture-napi",
    path.join(ROOT, "scripts", "shims", "audio-capture-napi.mjs"),
  ],
]);

function getCandidates(basePath) {
  const fileCandidates = new Set([basePath]);
  const indexCandidates = new Set();

  for (const ext of EXTENSIONS) {
    fileCandidates.add(basePath + ext);
    indexCandidates.add(path.join(basePath, "index" + ext));
  }

  const parsed = path.parse(basePath);
  if (EXTENSIONS.includes(parsed.ext)) {
    const withoutExt = path.join(parsed.dir, parsed.name);
    fileCandidates.add(withoutExt);
    for (const ext of EXTENSIONS) {
      fileCandidates.add(withoutExt + ext);
      indexCandidates.add(path.join(withoutExt, "index" + ext));
    }
  }

  return [...fileCandidates, ...indexCandidates];
}

function resolveCandidate(basePath) {
  for (const candidate of getCandidates(basePath)) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return candidate;
    }
  }
  return null;
}

const compatPlugin = {
  name: "blaude-src-compat",
  setup(pluginBuild) {
    pluginBuild.onResolve({ filter: /.*/ }, (args) => {
      if (SHIMS.has(args.path)) {
        return { path: SHIMS.get(args.path) };
      }

      if (TEXT_EXTENSIONS.some((ext) => args.path.endsWith(ext))) {
        if (args.path.startsWith("src/")) {
          return { path: path.join(ROOT, args.path), namespace: "text-asset" };
        }
        if (args.path.startsWith(".") || args.path.startsWith("/")) {
          const importerDir = args.importer
            ? path.dirname(args.importer)
            : ROOT;
          return {
            path: path.resolve(importerDir, args.path),
            namespace: "text-asset",
          };
        }
      }

      if (args.path.startsWith("src/")) {
        const resolved = resolveCandidate(path.join(ROOT, args.path));
        if (resolved) {
          return { path: resolved };
        }
      }

      if (args.path.startsWith(".") || args.path.startsWith("/")) {
        const importerDir = args.importer ? path.dirname(args.importer) : ROOT;
        const target = args.path.startsWith("/")
          ? args.path
          : path.resolve(importerDir, args.path);
        const resolved = resolveCandidate(target);
        if (resolved) {
          return { path: resolved };
        }
      }

      return null;
    });

    pluginBuild.onLoad({ filter: /.*/, namespace: "text-asset" }, async (args) => {
      if (!fs.existsSync(args.path)) {
        return {
          loader: "js",
          contents: 'export default "";',
        };
      }
      const source = await fsp.readFile(args.path, "utf8");
      return {
        loader: "js",
        contents: `export default ${JSON.stringify(source)};`,
      };
    });

    pluginBuild.onLoad({ filter: /\.d\.ts$/ }, () => ({
      loader: "js",
      contents: "export {};",
    }));
  },
};

async function main() {
  await fsp.rm(DIST_DIR, { recursive: true, force: true });
  await fsp.mkdir(DIST_DIR, { recursive: true });

  await build({
    absWorkingDir: ROOT,
    entryPoints: [ENTRY],
    outdir: DIST_DIR,
    entryNames: "blaude",
    chunkNames: "chunks/[name]-[hash]",
    assetNames: "assets/[name]-[hash]",
    outExtension: { ".js": ".mjs" },
    bundle: true,
    splitting: true,
    format: "esm",
    platform: "node",
    target: "node20",
    sourcemap: "inline",
    legalComments: "none",
    plugins: [compatPlugin],
    loader: {
      ".ts": "ts",
      ".tsx": "tsx",
      ".js": "js",
      ".jsx": "jsx",
      ".json": "json",
      ".md": "text",
      ".txt": "text",
      ".prompt": "text",
    },
    banner: {
      js: [
        "#!/usr/bin/env node",
        'import { createRequire as __blaudeCreateRequire } from "module";',
        "const require = __blaudeCreateRequire(import.meta.url);",
      ].join("\n"),
    },
  });

  await fsp.chmod(path.join(DIST_DIR, "blaude.mjs"), 0o755);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
