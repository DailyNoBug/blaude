import assert from "assert/strict";
import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";

const root = process.cwd();
const distEntry = path.join(root, "dist", "blaude.mjs");
const packageJson = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));

function runNode(args) {
  return execFileSync(process.execPath, args, {
    cwd: root,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
}

function verify(name, fn, results) {
  try {
    fn();
    results.push({ name, ok: true });
  } catch (error) {
    results.push({
      name,
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

function main() {
  const results = [];

  verify("dist entry exists", () => {
    assert.ok(fs.existsSync(distEntry), "missing dist/blaude.mjs; run pnpm run build first");
  }, results);

  verify("build script points to leaked src runtime", () => {
    assert.equal(packageJson.scripts.build, "node scripts/build-src-runtime.mjs");
    assert.equal(
      packageJson.scripts.start,
      "node dist/blaude.mjs",
    );
    assert.equal(
      packageJson.scripts["start:src"],
      "node --loader ./scripts/src-loader.mjs ./scripts/run-src-runtime.mjs",
    );
  }, results);

  verify("legacy black-src runtime has been removed", () => {
    assert.ok(!fs.existsSync(path.join(root, "black-src")), "black-src directory still exists");
    assert.ok(
      !fs.existsSync(path.join(root, "scripts", "build-black-cli.mjs")),
      "scripts/build-black-cli.mjs still exists",
    );
  }, results);

  verify("version output comes from the built leaked-src runtime", () => {
    const version = runNode([distEntry, "-v"]).trim();
    assert.match(version, /^99\.99\.99-black\.1 \(Claude Code\)$/);
  }, results);

  verify("help output comes from the built leaked-src runtime", () => {
    const help = runNode([distEntry, "--help"]);
    assert.match(help, /Usage: claude \[options\] \[command\] \[prompt\]/);
    assert.match(help, /Claude Code - starts an interactive session by default/);
    assert.match(help, /--print/);
  }, results);

  const failures = results.filter((item) => !item.ok);
  for (const result of results) {
    if (result.ok) {
      process.stdout.write(`PASS ${result.name}\n`);
    } else {
      process.stderr.write(`FAIL ${result.name}: ${result.error}\n`);
    }
  }

  if (failures.length > 0) {
    process.exitCode = 1;
    return;
  }

  process.stdout.write("Leaked-src runtime verification passed.\n");
}

main();
