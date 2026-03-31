import fs from "fs";
import path from "path";
import { createRequire } from "module";

const root = process.cwd();
const targets = [
  "package.json",
  "pnpm-lock.yaml",
  "black-src",
  "dist",
  "scripts/build-black-cli.mjs",
];
const forbiddenPatterns = [
  "@anthropic-ai/claude-code",
  "compat-src",
  "claude-recovered",
  "run-official",
];
const require = createRequire(import.meta.url);

function walkFiles(targetPath, { allowDist = false } = {}) {
  const absolutePath = path.resolve(root, targetPath);
  const stat = fs.statSync(absolutePath);
  if (stat.isFile()) {
    return [absolutePath];
  }
  const entries = fs.readdirSync(absolutePath, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name === "node_modules" || (!allowDist && entry.name === "dist")) {
      continue;
    }
    files.push(...walkFiles(path.join(targetPath, entry.name), { allowDist }));
  }
  return files;
}

const findings = [];
for (const target of targets) {
  if (!fs.existsSync(path.resolve(root, target))) {
    continue;
  }
  for (const filePath of walkFiles(target, { allowDist: target === "dist" })) {
    const text = fs.readFileSync(filePath, "utf8");
    for (const pattern of forbiddenPatterns) {
      if (text.includes(pattern)) {
        findings.push({
          file: path.relative(root, filePath),
          pattern,
        });
      }
    }
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
