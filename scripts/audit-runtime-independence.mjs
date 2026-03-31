import fs from "fs";
import path from "path";
import { createRequire } from "module";

const root = process.cwd();
const require = createRequire(import.meta.url);

const findings = [];
const packageJson = JSON.parse(
  fs.readFileSync(path.join(root, "package.json"), "utf8"),
);
const packageJsonText = fs.readFileSync(path.join(root, "package.json"), "utf8");
const lockfilePath = path.join(root, "pnpm-lock.yaml");
const lockfileText = fs.existsSync(lockfilePath)
  ? fs.readFileSync(lockfilePath, "utf8")
  : "";

if (fs.existsSync(path.join(root, "black-src"))) {
  findings.push({
    file: "black-src",
    pattern: "legacy rewrite runtime directory still present",
  });
}
if (fs.existsSync(path.join(root, "scripts", "build-black-cli.mjs"))) {
  findings.push({
    file: "scripts/build-black-cli.mjs",
    pattern: "legacy black-src build script still present",
  });
}

for (const [scriptName, command] of Object.entries(packageJson.scripts ?? {})) {
  for (const marker of [
    "black-src",
    "build-black-cli",
    "compat-src",
    "run-official",
    "@anthropic-ai/claude-code",
  ]) {
    if (String(command).includes(marker)) {
      findings.push({
        file: "package.json",
        pattern: `script ${scriptName} references ${marker}`,
      });
    }
  }
}

for (const marker of ["@anthropic-ai/claude-code", "compat-src", "run-official"]) {
  if (packageJsonText.includes(marker)) {
    findings.push({
      file: "package.json",
      pattern: `package manifest references ${marker}`,
    });
  }
  if (lockfileText.includes(marker)) {
    findings.push({
      file: "pnpm-lock.yaml",
      pattern: `lockfile references ${marker}`,
    });
  }
}

const installedOfficialPackage = path.join(root, "node_modules", "@anthropic-ai", "claude-code");
if (fs.existsSync(installedOfficialPackage)) {
  findings.push({
    file: "node_modules/@anthropic-ai/claude-code",
    pattern: "installed official Claude Code package",
  });
}

try {
  const resolved = require.resolve("@anthropic-ai/claude-code/package.json", {
    paths: [root],
  });
  findings.push({
    file: path.relative(root, resolved),
    pattern: "resolvable official Claude Code package",
  });
} catch {
  // Expected for the independent Blaude runtime.
}

if (findings.length > 0) {
  for (const finding of findings) {
    process.stderr.write(`${finding.file}: forbidden reference "${finding.pattern}"\n`);
  }
  process.exitCode = 1;
} else {
  process.stdout.write("Blaude runtime independence audit passed.\n");
}
