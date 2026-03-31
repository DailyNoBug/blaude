import crypto from "crypto";
import fs from "fs/promises";
import os from "os";
import path from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const yaml = require("yaml");
const semver = require("semver");

const packageJson = JSON.parse(
  await fs.readFile(path.join(process.cwd(), "package.json"), "utf8"),
);

if (process.argv[2] === "--") {
  process.argv.splice(2, 1);
}

function fnv1a(input) {
  const data = Buffer.isBuffer(input)
    ? input
    : typeof input === "string"
      ? Buffer.from(input)
      : Buffer.from(JSON.stringify(input ?? ""));
  let hash = 0x811c9dc5;
  for (const byte of data) {
    hash ^= byte;
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return hash >>> 0;
}

function createBunFileShim(filePath) {
  return {
    async text() {
      return fs.readFile(filePath, "utf8");
    },
    async json() {
      return JSON.parse(await fs.readFile(filePath, "utf8"));
    },
    async arrayBuffer() {
      const buffer = await fs.readFile(filePath);
      return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
    },
  };
}

function createBunShim() {
  const jsonl = {
    parseChunk(data, offset = 0) {
      const source = Buffer.isBuffer(data) ? data.toString("utf8") : String(data);
      const slice = source.slice(offset);
      const values = [];
      let read = offset;

      for (const line of slice.split("\n")) {
        read += line.length + 1;
        const trimmed = line.trim();
        if (!trimmed) {
          continue;
        }
        try {
          values.push(JSON.parse(trimmed));
        } catch (error) {
          return {
            values,
            error,
            read,
            done: read >= source.length,
          };
        }
      }

      return {
        values,
        error: null,
        read: source.length,
        done: true,
      };
    },
  };

  const bunSemver = {
    order(a, b) {
      const result = semver.compare(a, b, { loose: true });
      if (result > 0) return 1;
      if (result < 0) return -1;
      return 0;
    },
    satisfies(version, range) {
      return semver.satisfies(version, range, { loose: true });
    },
  };

  const base = {
    argv: process.argv,
    env: process.env,
    embeddedFiles: [],
    gc() {},
    hash: fnv1a,
    file: createBunFileShim,
    JSONL: jsonl,
    YAML: yaml,
    semver: bunSemver,
    async write(filePath, data) {
      await fs.writeFile(filePath, data);
    },
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    which() {
      return null;
    },
    cwd() {
      return process.cwd();
    },
    version: process.versions.node,
    platform: process.platform,
    arch: process.arch,
    inspect() {
      return "[Bun shim]";
    },
    serve() {
      throw new Error("Bun.serve is not implemented in the Node-based src compatibility runtime.");
    },
  };

  return new Proxy(base, {
    get(target, prop) {
      if (prop in target) {
        return target[prop];
      }
      if (prop === Symbol.toStringTag) {
        return "Bun";
      }
      return undefined;
    },
  });
}

globalThis.MACRO = {
  VERSION: packageJson.version,
  BUILD_TIME: new Date().toISOString(),
  BUILD_SHA: "src-compat-dev",
  CHANNEL: "black",
  FEEDBACK_CHANNEL: "https://github.com/DailyNoBug/blaude/issues",
  PACKAGE_URL: "blaude",
  NATIVE_PACKAGE_URL: "blaude-native",
  ISSUES_EXPLAINER: "open an issue at https://github.com/DailyNoBug/blaude/issues",
  VERSION_CHANGELOG: "",
};
globalThis.Bun = createBunShim();
process.env.BLAUDE_SRC_RUNTIME = "1";
process.env.CLAUDE_CODE_SIMPLE ??= "1";
process.env.CLAUDE_CODE_DISABLE_AUTOUPDATER ??= "1";
process.env.TMPDIR ??= os.tmpdir();

await import("../src/entrypoints/cli.tsx");
