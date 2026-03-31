import fs from "fs";
import fsp from "fs/promises";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

import { transform } from "esbuild";

const ROOT = process.cwd();
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
    path.join(ROOT, "scripts", "shims", "ant-computer-use-mcp-sentinelApps.mjs"),
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
    path.join(ROOT, "scripts", "shims", "opentelemetry-semantic-conventions.mjs"),
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
  [
    "shell-quote",
    path.join(ROOT, "scripts", "shims", "shell-quote.mjs"),
  ],
  [
    "ajv",
    path.join(ROOT, "scripts", "shims", "ajv.mjs"),
  ],
  [
    "asciichart",
    path.join(ROOT, "scripts", "shims", "asciichart.mjs"),
  ],
  [
    "diff",
    path.join(ROOT, "scripts", "shims", "diff.mjs"),
  ],
  [
    "cross-spawn",
    path.join(ROOT, "scripts", "shims", "cross-spawn.mjs"),
  ],
  [
    "dom-mutator",
    path.join(ROOT, "scripts", "shims", "dom-mutator.mjs"),
  ],
  [
    "https-proxy-agent",
    path.join(ROOT, "scripts", "shims", "https-proxy-agent.mjs"),
  ],
  [
    "lru-cache",
    path.join(ROOT, "scripts", "shims", "lru-cache.mjs"),
  ],
  [
    "marked",
    path.join(ROOT, "scripts", "shims", "marked.mjs"),
  ],
  [
    "picomatch",
    path.join(ROOT, "scripts", "shims", "picomatch.mjs"),
  ],
  [
    "qrcode",
    path.join(ROOT, "scripts", "shims", "qrcode.mjs"),
  ],
  [
    "react",
    path.join(ROOT, "scripts", "shims", "react.mjs"),
  ],
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
  [
    "semver",
    path.join(ROOT, "scripts", "shims", "semver.mjs"),
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

function resolveLocalSpecifier(specifier, parentURL) {
  const parentPath = parentURL?.startsWith("file:") ? fileURLToPath(parentURL) : path.join(ROOT, "index.mjs");
  const basePath = specifier.startsWith("/")
    ? specifier
    : path.resolve(path.dirname(parentPath), specifier);
  return resolveCandidate(basePath);
}

export async function resolve(specifier, context, defaultResolve) {
  if (SHIMS.has(specifier)) {
    return {
      url: pathToFileURL(SHIMS.get(specifier)).href,
      shortCircuit: true,
    };
  }

  if (specifier.startsWith("src/")) {
    const resolved = resolveCandidate(path.join(ROOT, specifier));
    if (resolved) {
      return {
        url: pathToFileURL(resolved).href,
        shortCircuit: true,
      };
    }
    if (TEXT_EXTENSIONS.some((ext) => specifier.endsWith(ext))) {
      return {
        url: `data:text/javascript,${encodeURIComponent('export default "";')}`,
        shortCircuit: true,
      };
    }
  }

  if (specifier.startsWith(".") || specifier.startsWith("/")) {
    const resolved = resolveLocalSpecifier(specifier, context.parentURL);
    if (resolved) {
      return {
        url: pathToFileURL(resolved).href,
        shortCircuit: true,
      };
    }
    if (TEXT_EXTENSIONS.some((ext) => specifier.endsWith(ext))) {
      return {
        url: `data:text/javascript,${encodeURIComponent('export default "";')}`,
        shortCircuit: true,
      };
    }
  }

  return defaultResolve(specifier, context, defaultResolve);
}

function getLoader(filePath) {
  if (filePath.endsWith(".tsx")) return "tsx";
  if (filePath.endsWith(".ts")) return "ts";
  if (filePath.endsWith(".jsx")) return "jsx";
  return "js";
}

function shouldTransform(filePath) {
  if (!filePath.startsWith(ROOT)) {
    return false;
  }
  return /\.(?:[cm]?[jt]sx?)$/.test(filePath);
}

export async function load(url, context, defaultLoad) {
  if (!url.startsWith("file:")) {
    return defaultLoad(url, context, defaultLoad);
  }

  const filePath = fileURLToPath(url);
  if (TEXT_EXTENSIONS.some((ext) => filePath.endsWith(ext))) {
    const source = await fsp.readFile(filePath, "utf8");
    return {
      format: "module",
      source: `export default ${JSON.stringify(source)};`,
      shortCircuit: true,
    };
  }
  if (filePath.endsWith(".json")) {
    const source = await fsp.readFile(filePath, "utf8");
    return {
      format: "module",
      source: `export default ${source};`,
      shortCircuit: true,
    };
  }

  if (!shouldTransform(filePath)) {
    return defaultLoad(url, context, defaultLoad);
  }

  const source = await fsp.readFile(filePath, "utf8");
  const result = await transform(source, {
    loader: getLoader(filePath),
    format: "esm",
    target: "es2022",
    jsx: "transform",
    sourcemap: "inline",
    sourcefile: filePath,
    tsconfigRaw: {
      compilerOptions: {
        jsx: "react",
        module: "esnext",
        allowJs: true,
      },
    },
  });

  return {
    format: "module",
    source: result.code,
    shortCircuit: true,
  };
}
