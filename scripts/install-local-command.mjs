import fs from "fs/promises";
import os from "os";
import path from "path";

const repoRoot = process.cwd();
const launcherPath = path.join(repoRoot, "dist", "blaude.mjs");
const binDir = process.env.BLAUDE_BIN_DIR || path.join(os.homedir(), ".local", "bin");
const targetPath = path.join(binDir, "blaude");

async function main() {
  try {
    await fs.access(launcherPath);
  } catch {
    throw new Error(`Missing ${launcherPath}. Run "pnpm run build" first.`);
  }

  await fs.mkdir(binDir, { recursive: true });

  const script = [
    "#!/bin/sh",
    `exec node "${launcherPath}" "$@"`,
    "",
  ].join("\n");

  await fs.writeFile(targetPath, script, "utf8");
  await fs.chmod(targetPath, 0o755);

  const pathEntries = String(process.env.PATH || "").split(":");
  process.stdout.write(`Installed blaude command at ${targetPath}\n`);
  if (!pathEntries.includes(binDir)) {
    process.stdout.write(`warning: ${binDir} is not currently in PATH\n`);
  }
}

main().catch((error) => {
  process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
  process.exitCode = 1;
});
