import fs from "fs";
import path from "path";

const repoRoot = process.cwd();
const sourceDir = path.resolve(repoRoot, "black-src");
const distDir = path.resolve(repoRoot, "dist");
const distSourceDir = path.resolve(distDir, "black-src");
const launcherPath = path.resolve(distDir, "blaude.mjs");

fs.rmSync(distDir, { recursive: true, force: true });
fs.mkdirSync(distDir, { recursive: true });
fs.cpSync(sourceDir, distSourceDir, { recursive: true });
fs.writeFileSync(
  launcherPath,
  [
    "#!/usr/bin/env node",
    'import "./black-src/cli.mjs";',
    "",
  ].join("\n"),
  "utf8",
);
fs.chmodSync(path.resolve(distSourceDir, "cli.mjs"), 0o755);
fs.chmodSync(launcherPath, 0o755);

process.stdout.write(`Copied ${sourceDir} -> ${distSourceDir}\nCreated ${launcherPath}\n`);
