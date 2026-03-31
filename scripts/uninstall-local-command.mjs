import fs from "fs/promises";
import os from "os";
import path from "path";

const binDir = process.env.BLAUDE_BIN_DIR || path.join(os.homedir(), ".local", "bin");
const targetPath = path.join(binDir, "blaude");

async function main() {
  await fs.rm(targetPath, { force: true });
  process.stdout.write(`Removed ${targetPath}\n`);
}

main().catch((error) => {
  process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
  process.exitCode = 1;
});
