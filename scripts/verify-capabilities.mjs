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
    assert.match(version, /^99\.99\.99-black\.1 \(Blaude\)$/);
  }, results);

  verify("help output comes from the built leaked-src runtime", () => {
    const help = runNode([distEntry, "--help"]);
    assert.match(help, /Usage: blaude \[options\] \[command\] \[prompt\]/);
    assert.match(help, /Blaude - starts an interactive session by default/);
    assert.match(help, /--print/);
  }, results);

  verify("runtime defaults enable full leaked-src tool pool", () => {
    const runtime = fs.readFileSync(
      path.join(root, "scripts", "run-src-runtime.mjs"),
      "utf8",
    );
    assert.doesNotMatch(
      runtime,
      /CLAUDE_CODE_SIMPLE \?\?= "1"/,
      "simple mode is still forced on by default",
    );
    const envHelper = fs.readFileSync(
      path.join(root, "scripts", "src-runtime-env.mjs"),
      "utf8",
    );
    assert.match(envHelper, /CLAUDE_CODE_ENABLE_TASKS \?\?= "1"/);
    assert.match(envHelper, /CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS \?\?= "1"/);
    assert.match(envHelper, /BLAUDE_ENABLE_CONTEXT_COLLAPSE \?\?= "1"/);
    assert.match(envHelper, /CONTEXT_COLLAPSE/);
    assert.match(envHelper, /HISTORY_SNIP/);
    assert.match(envHelper, /MONITOR_TOOL/);
    assert.match(envHelper, /TERMINAL_PANEL/);
  }, results);

  verify("core capability tools are implemented in leaked src", () => {
    const toolsIndex = fs.readFileSync(path.join(root, "src", "tools.ts"), "utf8");
    for (const token of [
      "AgentTool",
      "BashTool",
      "GlobTool",
      "GrepTool",
      "FileReadTool",
      "FileEditTool",
      "FileWriteTool",
      "WebFetchTool",
      "WebSearchTool",
      "SkillTool",
      "EnterPlanModeTool",
      "ExitPlanModeV2Tool",
      "ListMcpResourcesTool",
      "ReadMcpResourceTool",
      "TaskCreateTool",
      "TaskGetTool",
      "TaskListTool",
      "TaskUpdateTool",
      "TaskStopTool",
      "EnterWorktreeTool",
      "ExitWorktreeTool",
      "MonitorTool",
      "SnipTool",
      "getTeamCreateTool",
      "getTeamDeleteTool",
      "getSendMessageTool",
    ]) {
      assert.match(toolsIndex, new RegExp(token));
    }

    const implementedFiles = [
      path.join(root, "src", "tools", "CtxInspectTool", "CtxInspectTool.ts"),
      path.join(root, "src", "tools", "SnipTool", "SnipTool.ts"),
      path.join(root, "src", "tools", "MonitorTool", "MonitorTool.ts"),
      path.join(root, "src", "tools", "SleepTool", "SleepTool.ts"),
      path.join(root, "src", "tools", "TerminalCaptureTool", "TerminalCaptureTool.ts"),
      path.join(root, "src", "tools", "SendUserFileTool", "SendUserFileTool.ts"),
    ];
    for (const file of implementedFiles) {
      const source = fs.readFileSync(file, "utf8");
      assert.doesNotMatch(
        source,
        /buildUnavailableTool/,
        `${path.basename(file)} still uses buildUnavailableTool`,
      );
    }
  }, results);

  verify("context management services are no longer no-op stubs", () => {
    const snipCompact = fs.readFileSync(
      path.join(root, "src", "services", "compact", "snipCompact.ts"),
      "utf8",
    );
    const snipProjection = fs.readFileSync(
      path.join(root, "src", "services", "compact", "snipProjection.ts"),
      "utf8",
    );
    const contextCollapse = fs.readFileSync(
      path.join(root, "src", "services", "contextCollapse", "index.ts"),
      "utf8",
    );
    assert.match(snipCompact, /trimMessagesToTargetTokens/);
    assert.match(snipCompact, /SNIP_BOUNDARY_SUBTYPE/);
    assert.match(snipProjection, /isSnipBoundaryMessageImpl/);
    assert.match(contextCollapse, /applyCollapsesIfNeeded/);
    assert.match(contextCollapse, /recoverFromOverflow/);
    assert.match(contextCollapse, /trimMessagesToTargetTokens/);
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
