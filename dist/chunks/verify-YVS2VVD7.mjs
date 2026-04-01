#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  QueryEngine
} from "./chunk-34AELLHV.mjs";
import "./chunk-UR6AFXRW.mjs";
import "./chunk-QLZJRPHV.mjs";
import "./chunk-4I4NFEXK.mjs";
import "./chunk-KVW7KIZE.mjs";
import {
  BashTool,
  FileReadTool,
  GlobTool,
  GrepTool,
  createUserMessage,
  getAllBaseTools,
  getAllowRules,
  getDefaultAppState,
  getDenyRules,
  init_AppStateStore,
  init_BashTool,
  init_FileReadTool,
  init_GlobTool,
  init_GrepTool,
  init_api,
  init_messages2 as init_messages,
  init_permissions,
  init_query,
  init_tools2 as init_tools,
  normalizeMessages,
  query,
  toolToAPISchema
} from "./chunk-OTDPNGFK.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-PEMK4FQH.mjs";
import "./chunk-SQ6KOOZS.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-Y2PD6CVC.mjs";
import "./chunk-S5Z6SZDA.mjs";
import {
  READ_FILE_STATE_CACHE_SIZE,
  createFileStateCacheWithSizeLimit,
  init_fileStateCache
} from "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-HO5F7BV3.mjs";
import "./chunk-M22WMPMZ.mjs";
import "./chunk-4WEGPCYF.mjs";
import "./chunk-Z4JLAMMU.mjs";
import "./chunk-FUHJGEFK.mjs";
import "./chunk-H474P6P2.mjs";
import "./chunk-SEJU7JU7.mjs";
import "./chunk-ABRSTIS2.mjs";
import "./chunk-L22EUB4Z.mjs";
import "./chunk-NE3WJ556.mjs";
import "./chunk-U3YG33GN.mjs";
import "./chunk-I4JSDM2A.mjs";
import "./chunk-KNCFJEES.mjs";
import "./chunk-R2NMUWG6.mjs";
import "./chunk-XTFZIHQR.mjs";
import {
  getEmptyToolPermissionContext,
  init_Tool
} from "./chunk-X6KULBXG.mjs";
import "./chunk-ORS2TTME.mjs";
import "./chunk-IAEMXMG4.mjs";
import "./chunk-L57KLZUF.mjs";
import "./chunk-J7TDGLE4.mjs";
import "./chunk-HUHT3U2I.mjs";
import "./chunk-X7OJ6FBK.mjs";
import "./chunk-4GJVIJWN.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-HUEORIXP.mjs";
import "./chunk-H6COQF52.mjs";
import "./chunk-IQJUSPBJ.mjs";
import "./chunk-R326WRGL.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import "./chunk-HWTXKBLR.mjs";
import "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import "./chunk-NKGQGSP5.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-UIIDPH35.mjs";
import "./chunk-DNXEQXI7.mjs";
import "./chunk-ZPEBVZEB.mjs";
import "./chunk-DQ5JTCOA.mjs";
import "./chunk-HGPSKCV5.mjs";
import "./chunk-GC6TKYZ3.mjs";
import "./chunk-GHLJY6GK.mjs";
import "./chunk-PPND3F3V.mjs";
import "./chunk-BKRSSLV2.mjs";
import "./chunk-AHENZQLB.mjs";
import "./chunk-HQK4A2IB.mjs";
import "./chunk-SVUOOEVR.mjs";
import "./chunk-XFYUWZYI.mjs";
import "./chunk-JOMSGAK7.mjs";
import "./chunk-3PS62SCS.mjs";
import "./chunk-SFCRD75C.mjs";
import "./chunk-QFFW7MQ2.mjs";
import "./chunk-3AEW3KDQ.mjs";
import "./chunk-OGGCTXYU.mjs";
import "./chunk-MDXHK5AD.mjs";
import "./chunk-SETG7O3F.mjs";
import "./chunk-J6MJ6UVK.mjs";
import "./chunk-PKIVPZJM.mjs";
import "./chunk-JXCG2JDO.mjs";
import "./chunk-N62V5C2K.mjs";
import "./chunk-7SC6PTLR.mjs";
import "./chunk-NT7W7YWD.mjs";
import "./chunk-4S33EKPF.mjs";
import "./chunk-VNIROYYL.mjs";
import "./chunk-TZFTPSMG.mjs";
import "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-IPMELYAB.mjs";
import "./chunk-F5ODCUJD.mjs";
import "./chunk-ZAYB3WZV.mjs";
import "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import "./chunk-OU3SZVVB.mjs";
import "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import "./chunk-O5PZ3G6I.mjs";

// src/cli/handlers/verify.ts
init_AppStateStore();
init_Tool();
import { spawnSync } from "child_process";
import fs from "fs";
import os from "os";
import path from "path";
import process from "process";
init_query();
init_tools();
init_BashTool();
init_FileReadTool();
init_GlobTool();
init_GrepTool();
init_api();
init_fileStateCache();
init_messages();
init_permissions();
var TABLE_TOOL_TOKENS = [
  "AgentTool",
  "BashTool",
  "FileReadTool",
  "FileWriteTool",
  "FileEditTool",
  "GlobTool",
  "GrepTool",
  "WebFetchTool",
  "WebSearchTool",
  "SkillTool",
  "EnterPlanModeTool",
  "ExitPlanModeV2Tool",
  "EnterWorktreeTool",
  "ExitWorktreeTool",
  "TaskCreateTool",
  "TaskGetTool",
  "TaskUpdateTool",
  "TaskListTool",
  "TaskStopTool",
  "ListMcpResourcesTool",
  "ReadMcpResourceTool",
  "MonitorTool",
  "SnipTool",
  "getTeamCreateTool",
  "getTeamDeleteTool",
  "getSendMessageTool"
];
function findRepoRoot(startDir) {
  let current = path.resolve(startDir);
  while (true) {
    const packageJsonPath = path.join(current, "package.json");
    const srcDir = path.join(current, "src");
    if (fs.existsSync(packageJsonPath) && fs.existsSync(srcDir)) {
      return current;
    }
    const parent = path.dirname(current);
    if (parent === current) {
      return path.resolve(startDir);
    }
    current = parent;
  }
}
function readSource(repoRoot, ...segments) {
  return fs.readFileSync(path.join(repoRoot, ...segments), "utf8");
}
function formatStatus(status) {
  return status.padEnd(7, " ");
}
function detectSettingsPath(repoRoot, providedPath) {
  const candidates = [
    providedPath,
    process.env.BLAUDE_SETTINGS_PATH,
    process.env.CLAUDE_CODE_SETTINGS_PATH,
    path.join(repoRoot, ".claude", "settings.json"),
    path.join(os.homedir(), ".claude", "settings.json"),
    path.join(os.homedir(), ".cursor", "settings.json")
  ].filter(Boolean);
  for (const candidate of candidates) {
    const absolutePath = path.resolve(candidate);
    if (fs.existsSync(absolutePath) && fs.statSync(absolutePath).isFile()) {
      return absolutePath;
    }
  }
  return null;
}
function getDistEntry(repoRoot) {
  return path.join(repoRoot, "dist", "blaude.mjs");
}
function createVerifyToolContext(repoRoot) {
  const previousCwd = process.cwd();
  process.chdir(repoRoot);
  let appState = getDefaultAppState();
  const readFileState = createFileStateCacheWithSizeLimit(
    READ_FILE_STATE_CACHE_SIZE
  );
  const context = {
    abortController: new AbortController(),
    toolUseId: "verify-tool",
    readFileState,
    fileReadingLimits: void 0,
    globLimits: { maxResults: 100 },
    dynamicSkillDirTriggers: /* @__PURE__ */ new Set(),
    nestedMemoryAttachmentTriggers: /* @__PURE__ */ new Set(),
    loadedNestedMemoryPaths: /* @__PURE__ */ new Set(),
    discoveredSkillNames: /* @__PURE__ */ new Set(),
    messages: [],
    getAppState: () => appState,
    setAppState: (updater) => {
      appState = updater(appState);
    },
    setInProgressToolUseIDs: () => {
    },
    setResponseLength: () => {
    },
    updateFileHistoryState: () => {
    },
    updateAttributionState: () => {
    }
  };
  return {
    context,
    restore() {
      process.chdir(previousCwd);
    }
  };
}
function runBuiltCli(repoRoot, args, settingsPath) {
  const distEntry = getDistEntry(repoRoot);
  if (!fs.existsSync(distEntry)) {
    return {
      ok: false,
      stdout: "",
      stderr: "",
      status: null,
      detail: "missing dist/blaude.mjs; run pnpm run build first"
    };
  }
  const commandArgs = [distEntry];
  if (settingsPath) {
    commandArgs.push("--settings", settingsPath);
  }
  commandArgs.push(...args);
  const result = spawnSync(process.execPath, commandArgs, {
    cwd: repoRoot,
    encoding: "utf8",
    timeout: 12e4,
    maxBuffer: 8 * 1024 * 1024,
    env: {
      ...process.env,
      BLAUDE_VERIFY_CHILD: "1"
    }
  });
  return {
    ok: result.status === 0,
    stdout: result.stdout || "",
    stderr: result.stderr || "",
    status: result.status,
    detail: result.error?.message || `exit=${String(result.status)}${result.stderr ? ` stderr=${result.stderr.trim()}` : ""}`
  };
}
function countFilesAndBytes(dir) {
  if (!fs.existsSync(dir)) {
    return { files: 0, bytes: 0 };
  }
  let files = 0;
  let bytes = 0;
  const stack = [dir];
  while (stack.length > 0) {
    const current = stack.pop();
    if (!current) continue;
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const entryPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(entryPath);
        continue;
      }
      if (entry.isFile()) {
        files += 1;
        bytes += fs.statSync(entryPath).size;
      }
    }
  }
  return { files, bytes };
}
function formatMegabytes(bytes) {
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}
async function verifyToolsRow(repoRoot) {
  const toolsSource = readSource(repoRoot, "src", "tools.ts");
  const missingTokens = TABLE_TOOL_TOKENS.filter(
    (token) => !toolsSource.includes(token)
  );
  const enabledTools = getAllBaseTools().filter((tool) => {
    try {
      return tool.isEnabled();
    } catch {
      return false;
    }
  });
  const toolNames = enabledTools.map((tool) => tool.name);
  if (missingTokens.length > 0) {
    return {
      module: "26 \u4E2A\u5185\u7F6E\u5DE5\u5177",
      status: "FAIL",
      detail: `missing source registrations: ${missingTokens.join(", ")}`
    };
  }
  const status = enabledTools.length >= 26 ? "PASS" : "PARTIAL";
  return {
    module: "26 \u4E2A\u5185\u7F6E\u5DE5\u5177",
    status,
    detail: `${enabledTools.length} enabled tools; sample = ${toolNames.slice(0, 12).join(", ")}`
  };
}
async function verifyQueryEngineRow() {
  const hasCoreMethods = typeof QueryEngine === "function" && typeof QueryEngine.prototype.submitMessage === "function";
  return {
    module: "QueryEngine",
    status: hasCoreMethods ? "PASS" : "FAIL",
    detail: hasCoreMethods ? "QueryEngine class is loadable and exposes submitMessage()" : "QueryEngine class or submitMessage() is missing"
  };
}
async function verifyQueryFunctionRow() {
  const constructorName = query.constructor?.name || "";
  const isAsyncGenerator = constructorName === "AsyncGeneratorFunction";
  return {
    module: "query()",
    status: isAsyncGenerator ? "PASS" : "FAIL",
    detail: isAsyncGenerator ? "query() is an AsyncGeneratorFunction from src/query.ts" : `unexpected function type: ${constructorName || "unknown"}`
  };
}
async function verifyApiClientRow(repoRoot, options) {
  if (options.offline) {
    return {
      module: "API Client",
      status: "PARTIAL",
      detail: "offline mode skipped live provider smoke test"
    };
  }
  const settingsPath = detectSettingsPath(repoRoot, options.settings);
  if (!settingsPath) {
    return {
      module: "API Client",
      status: "PARTIAL",
      detail: "no settings.json or provider env found for live API smoke test"
    };
  }
  const result = runBuiltCli(
    repoRoot,
    ["--print", "\u53EA\u56DE\u590D pong"],
    settingsPath
  );
  if (!result.ok) {
    return {
      module: "API Client",
      status: "FAIL",
      detail: `live request failed via ${settingsPath}: ${result.detail}`
    };
  }
  const normalized = result.stdout.trim().toLowerCase();
  return {
    module: "API Client",
    status: normalized.includes("pong") ? "PASS" : "PARTIAL",
    detail: normalized.includes("pong") ? `live print-mode request succeeded via ${settingsPath}` : `live request returned unexpected payload via ${settingsPath}: ${result.stdout.trim()}`
  };
}
async function verifyToolSchemaRow() {
  try {
    const schema = await toolToAPISchema(BashTool, {
      getToolPermissionContext: async () => getEmptyToolPermissionContext(),
      tools: [BashTool],
      agents: []
    });
    const properties = "input_schema" in schema && schema.input_schema && typeof schema.input_schema === "object" && "properties" in schema.input_schema ? schema.input_schema.properties : void 0;
    const hasCommandProperty = properties !== void 0 && properties !== null && typeof properties === "object" && "command" in properties;
    return {
      module: "toolToAPISchema",
      status: hasCommandProperty ? "PASS" : "FAIL",
      detail: hasCommandProperty ? "toolToAPISchema() produced JSON Schema properties for Bash" : "toolToAPISchema() did not expose the expected command property"
    };
  } catch (error) {
    return {
      module: "toolToAPISchema",
      status: "FAIL",
      detail: error instanceof Error ? error.message : String(error)
    };
  }
}
async function verifyBashToolRow(repoRoot) {
  const { context, restore } = createVerifyToolContext(repoRoot);
  try {
    const result = await BashTool.call(
      { command: "printf blaude-verify" },
      context
    );
    const block = BashTool.mapToolResultToToolResultBlockParam(
      result.data,
      "verify-bash"
    );
    const content = typeof block.content === "string" ? block.content : "";
    return {
      module: "Bash \u5DE5\u5177",
      status: content.includes("blaude-verify") ? "PASS" : "FAIL",
      detail: content.includes("blaude-verify") ? "BashTool executed a shell command and returned stdout" : `unexpected BashTool output: ${content || "<empty>"}`
    };
  } catch (error) {
    return {
      module: "Bash \u5DE5\u5177",
      status: "FAIL",
      detail: error instanceof Error ? error.message : String(error)
    };
  } finally {
    restore();
  }
}
async function verifyReadToolRow(repoRoot) {
  const { context, restore } = createVerifyToolContext(repoRoot);
  try {
    const result = await FileReadTool.call(
      {
        file_path: path.join(repoRoot, "package.json"),
        offset: 1,
        limit: 5
      },
      context
    );
    const block = FileReadTool.mapToolResultToToolResultBlockParam(
      result.data,
      "verify-read"
    );
    const content = typeof block.content === "string" ? block.content : JSON.stringify(block.content);
    return {
      module: "Read \u5DE5\u5177",
      status: /"name":\s*"blaude"/.test(content) ? "PASS" : "FAIL",
      detail: /"name":\s*"blaude"/.test(content) ? "FileReadTool read package.json with offset/limit support" : `unexpected FileReadTool output: ${content.slice(0, 200)}`
    };
  } catch (error) {
    return {
      module: "Read \u5DE5\u5177",
      status: "FAIL",
      detail: error instanceof Error ? error.message : String(error)
    };
  } finally {
    restore();
  }
}
async function verifyGlobToolRow(repoRoot) {
  const { context, restore } = createVerifyToolContext(repoRoot);
  try {
    const result = await GlobTool.call(
      {
        pattern: "*.json",
        path: repoRoot
      },
      context
    );
    const filenames = result.data.filenames || [];
    return {
      module: "Glob \u5DE5\u5177",
      status: filenames.some((name) => name.endsWith("package.json")) ? "PASS" : "FAIL",
      detail: filenames.some((name) => name.endsWith("package.json")) ? `GlobTool returned ${filenames.length} matching files` : `GlobTool did not find package.json in ${repoRoot}`
    };
  } catch (error) {
    return {
      module: "Glob \u5DE5\u5177",
      status: "FAIL",
      detail: error instanceof Error ? error.message : String(error)
    };
  } finally {
    restore();
  }
}
async function verifyGrepToolRow(repoRoot) {
  const { context, restore } = createVerifyToolContext(repoRoot);
  try {
    const result = await GrepTool.call(
      {
        pattern: '"name":\\s*"blaude"',
        path: path.join(repoRoot, "package.json"),
        output_mode: "content",
        head_limit: 5
      },
      context
    );
    const content = result.data.content || "";
    return {
      module: "Grep \u5DE5\u5177",
      status: /"name":\s*"blaude"/.test(content) ? "PASS" : "FAIL",
      detail: /"name":\s*"blaude"/.test(content) ? "GrepTool matched package.json content with ripgrep" : `unexpected GrepTool output: ${content.slice(0, 200)}`
    };
  } catch (error) {
    return {
      module: "Grep \u5DE5\u5177",
      status: "FAIL",
      detail: error instanceof Error ? error.message : String(error)
    };
  } finally {
    restore();
  }
}
async function verifyAgentLoopRow(repoRoot, options) {
  if (options.offline) {
    return {
      module: "\u5B8C\u6574 Agent Loop",
      status: "PARTIAL",
      detail: "offline mode skipped live multi-turn tool loop smoke test"
    };
  }
  const settingsPath = detectSettingsPath(repoRoot, options.settings);
  if (!settingsPath) {
    return {
      module: "\u5B8C\u6574 Agent Loop",
      status: "PARTIAL",
      detail: "no settings.json available for live agent-loop smoke test"
    };
  }
  const result = runBuiltCli(
    repoRoot,
    [
      "--print",
      "--verbose",
      "--output-format",
      "stream-json",
      "--max-turns",
      "6",
      "\u8BFB\u53D6\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u7684 package.json\uFF0C\u5E76\u53EA\u56DE\u590D version \u5B57\u6BB5\u503C\u3002\u5FC5\u987B\u4F7F\u7528 Read \u5DE5\u5177\uFF0C\u4E0D\u8981\u51ED\u8BB0\u5FC6\u56DE\u7B54\u3002"
    ],
    settingsPath
  );
  if (!result.ok) {
    return {
      module: "\u5B8C\u6574 Agent Loop",
      status: "FAIL",
      detail: `live stream-json run failed via ${settingsPath}: ${result.detail}`
    };
  }
  const combined = `${result.stdout}
${result.stderr}`;
  const sawToolUse = /"tool_name":"Read"/.test(combined) || /"name":"Read"/.test(combined) || /tool_use/i.test(combined);
  const sawVersion = /99\.99\.99-black\.1/.test(combined);
  if (sawToolUse && sawVersion) {
    return {
      module: "\u5B8C\u6574 Agent Loop",
      status: "PASS",
      detail: `live stream-json run completed with tool activity via ${settingsPath}`
    };
  }
  if (sawVersion) {
    return {
      module: "\u5B8C\u6574 Agent Loop",
      status: "PARTIAL",
      detail: `live run completed via ${settingsPath}, but tool-use evidence was inconclusive`
    };
  }
  return {
    module: "\u5B8C\u6574 Agent Loop",
    status: "FAIL",
    detail: `live run did not return the expected version value via ${settingsPath}`
  };
}
async function verifyContextRow(repoRoot) {
  const collapseSource = readSource(
    repoRoot,
    "src",
    "services",
    "contextCollapse",
    "index.ts"
  );
  const snipCompactSource = readSource(
    repoRoot,
    "src",
    "services",
    "compact",
    "snipCompact.ts"
  );
  const snipProjectionSource = readSource(
    repoRoot,
    "src",
    "services",
    "compact",
    "snipProjection.ts"
  );
  const ok = collapseSource.includes("applyCollapsesIfNeeded") && collapseSource.includes("recoverFromOverflow") && snipCompactSource.includes("trimMessagesToTargetTokens") && snipCompactSource.includes("SNIP_BOUNDARY_SUBTYPE") && snipProjectionSource.includes("isSnipBoundaryMessageImpl");
  return {
    module: "\u4E0A\u4E0B\u6587\u7BA1\u7406",
    status: ok ? "PASS" : "FAIL",
    detail: ok ? "autocompact / microcompact / snip sources are present in leaked src" : "context collapse or snip implementation is incomplete"
  };
}
async function verifyMessageSystemRow() {
  const message = createUserMessage({ content: "verify-message" });
  const normalized = normalizeMessages([message]);
  const ok = message.type === "user" && Array.isArray(normalized) && normalized.length > 0 && normalized[0]?.type === "user";
  return {
    module: "\u6D88\u606F\u7CFB\u7EDF",
    status: ok ? "PASS" : "FAIL",
    detail: ok ? "createUserMessage() and normalizeMessages() are functioning" : "message creation or normalization failed"
  };
}
async function verifyMcpRow(repoRoot) {
  const mcpModule = await import("./client-AXDTTE4V.mjs");
  const toolsSource = readSource(repoRoot, "src", "tools.ts");
  const ok = typeof mcpModule.getMcpToolsCommandsAndResources === "function" && toolsSource.includes("ListMcpResourcesTool") && toolsSource.includes("ReadMcpResourceTool");
  return {
    module: "MCP \u652F\u6301",
    status: ok ? "PASS" : "FAIL",
    detail: ok ? "MCP client helpers and MCP resource tools are loadable" : "MCP client helpers or MCP tools are missing"
  };
}
async function verifySessionHistoryRow(repoRoot) {
  const sessionModule = await import("./sessionStorage-CLDQ6ISC.mjs");
  const source = readSource(repoRoot, "src", "utils", "sessionStorage.ts");
  const ok = typeof sessionModule.loadTranscriptFromFile === "function" && typeof sessionModule.saveMode === "function" && source.includes("jsonl");
  return {
    module: "Session/History",
    status: ok ? "PASS" : "FAIL",
    detail: ok ? "sessionStorage exports transcript/history helpers with JSONL persistence code" : "session/history helpers are incomplete"
  };
}
async function verifyPermissionsRow(repoRoot) {
  const context = getEmptyToolPermissionContext();
  const permissionsSource = readSource(
    repoRoot,
    "src",
    "utils",
    "permissions",
    "permissions.ts"
  );
  const ok = Array.isArray(getAllowRules(context)) && Array.isArray(getDenyRules(context)) && permissionsSource.includes("CanUseToolFn");
  return {
    module: "\u6743\u9650\u7CFB\u7EDF",
    status: ok ? "PASS" : "FAIL",
    detail: ok ? "permission helpers load and canUseTool callback wiring is present" : "permission helpers or canUseTool wiring is incomplete"
  };
}
async function verifyCodeScaleRow(repoRoot) {
  const srcMetrics = countFilesAndBytes(path.join(repoRoot, "src"));
  const distMetrics = countFilesAndBytes(path.join(repoRoot, "dist"));
  const ok = srcMetrics.files >= 1800 && srcMetrics.bytes >= 30 * 1024 * 1024 && distMetrics.files > 0;
  return {
    module: "\u4EE3\u7801\u89C4\u6A21",
    status: ok ? "PASS" : "PARTIAL",
    detail: `src=${srcMetrics.files} files / ${formatMegabytes(srcMetrics.bytes)}, dist=${distMetrics.files} files / ${formatMegabytes(distMetrics.bytes)}`
  };
}
function printTable(rows) {
  const moduleWidth = Math.max(
    "\u6A21\u5757".length,
    ...rows.map((row) => row.module.length)
  );
  process.stdout.write(
    `${"\u6A21\u5757".padEnd(moduleWidth)}  \u72B6\u6001      \u8BF4\u660E
`
  );
  process.stdout.write(
    `${"-".repeat(moduleWidth)}  --------  ----
`
  );
  for (const row of rows) {
    process.stdout.write(
      `${row.module.padEnd(moduleWidth)}  ${formatStatus(row.status)}  ${row.detail}
`
    );
  }
}
async function verifyHandler(options = {}) {
  const repoRoot = findRepoRoot(process.cwd());
  const rows = [];
  rows.push(await verifyToolsRow(repoRoot));
  rows.push(await verifyQueryEngineRow());
  rows.push(await verifyQueryFunctionRow());
  rows.push(await verifyApiClientRow(repoRoot, options));
  rows.push(await verifyToolSchemaRow());
  rows.push(await verifyBashToolRow(repoRoot));
  rows.push(await verifyReadToolRow(repoRoot));
  rows.push(await verifyGlobToolRow(repoRoot));
  rows.push(await verifyGrepToolRow(repoRoot));
  rows.push(await verifyAgentLoopRow(repoRoot, options));
  rows.push(await verifyContextRow(repoRoot));
  rows.push(await verifyMessageSystemRow());
  rows.push(await verifyMcpRow(repoRoot));
  rows.push(await verifySessionHistoryRow(repoRoot));
  rows.push(await verifyPermissionsRow(repoRoot));
  rows.push(await verifyCodeScaleRow(repoRoot));
  const summary = rows.reduce(
    (acc, row) => {
      acc[row.status] += 1;
      return acc;
    },
    { PASS: 0, PARTIAL: 0, FAIL: 0 }
  );
  if (options.json) {
    process.stdout.write(
      JSON.stringify(
        {
          repoRoot,
          generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
          rows,
          summary
        },
        null,
        2
      ) + "\n"
    );
  } else {
    printTable(rows);
    process.stdout.write(
      `
Summary: PASS=${summary.PASS} PARTIAL=${summary.PARTIAL} FAIL=${summary.FAIL}
`
    );
    if (summary.PARTIAL > 0 || summary.FAIL > 0) {
      process.stdout.write(
        "Result: current repository state does not yet fully satisfy every row in the target table.\n"
      );
    } else {
      process.stdout.write(
        "Result: current repository state satisfies every row in the target table.\n"
      );
    }
  }
  process.exit(summary.PARTIAL > 0 || summary.FAIL > 0 ? 1 : 0);
}
export {
  verifyHandler
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NsaS9oYW5kbGVycy92ZXJpZnkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IHNwYXduU3luYyB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgb3MgZnJvbSAnb3MnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHByb2Nlc3MgZnJvbSAncHJvY2VzcydcbmltcG9ydCB0eXBlIHsgQXBwU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9BcHBTdGF0ZVN0b3JlLmpzJ1xuaW1wb3J0IHsgZ2V0RGVmYXVsdEFwcFN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUvQXBwU3RhdGVTdG9yZS5qcydcbmltcG9ydCB7IGdldEVtcHR5VG9vbFBlcm1pc3Npb25Db250ZXh0IH0gZnJvbSAnLi4vLi4vVG9vbC5qcydcbmltcG9ydCB7IFF1ZXJ5RW5naW5lIH0gZnJvbSAnLi4vLi4vUXVlcnlFbmdpbmUuanMnXG5pbXBvcnQgeyBxdWVyeSB9IGZyb20gJy4uLy4uL3F1ZXJ5LmpzJ1xuaW1wb3J0IHsgZ2V0QWxsQmFzZVRvb2xzIH0gZnJvbSAnLi4vLi4vdG9vbHMuanMnXG5pbXBvcnQgeyBCYXNoVG9vbCB9IGZyb20gJy4uLy4uL3Rvb2xzL0Jhc2hUb29sL0Jhc2hUb29sLmpzJ1xuaW1wb3J0IHsgRmlsZVJlYWRUb29sIH0gZnJvbSAnLi4vLi4vdG9vbHMvRmlsZVJlYWRUb29sL0ZpbGVSZWFkVG9vbC5qcydcbmltcG9ydCB7IEdsb2JUb29sIH0gZnJvbSAnLi4vLi4vdG9vbHMvR2xvYlRvb2wvR2xvYlRvb2wuanMnXG5pbXBvcnQgeyBHcmVwVG9vbCB9IGZyb20gJy4uLy4uL3Rvb2xzL0dyZXBUb29sL0dyZXBUb29sLmpzJ1xuaW1wb3J0IHsgdG9vbFRvQVBJU2NoZW1hIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpLmpzJ1xuaW1wb3J0IHtcbiAgY3JlYXRlRmlsZVN0YXRlQ2FjaGVXaXRoU2l6ZUxpbWl0LFxuICBSRUFEX0ZJTEVfU1RBVEVfQ0FDSEVfU0laRSxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvZmlsZVN0YXRlQ2FjaGUuanMnXG5pbXBvcnQgeyBjcmVhdGVVc2VyTWVzc2FnZSwgbm9ybWFsaXplTWVzc2FnZXMgfSBmcm9tICcuLi8uLi91dGlscy9tZXNzYWdlcy5qcydcbmltcG9ydCB7XG4gIGdldEFsbG93UnVsZXMsXG4gIGdldERlbnlSdWxlcyxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvcGVybWlzc2lvbnMvcGVybWlzc2lvbnMuanMnXG5cbnR5cGUgVmVyaWZ5U3RhdHVzID0gJ1BBU1MnIHwgJ1BBUlRJQUwnIHwgJ0ZBSUwnXG5cbnR5cGUgVmVyaWZ5Um93ID0ge1xuICBtb2R1bGU6IHN0cmluZ1xuICBzdGF0dXM6IFZlcmlmeVN0YXR1c1xuICBkZXRhaWw6IHN0cmluZ1xufVxuXG50eXBlIFZlcmlmeU9wdGlvbnMgPSB7XG4gIGpzb24/OiBib29sZWFuXG4gIG9mZmxpbmU/OiBib29sZWFuXG4gIHNldHRpbmdzPzogc3RyaW5nXG59XG5cbmNvbnN0IFRBQkxFX1RPT0xfVE9LRU5TID0gW1xuICAnQWdlbnRUb29sJyxcbiAgJ0Jhc2hUb29sJyxcbiAgJ0ZpbGVSZWFkVG9vbCcsXG4gICdGaWxlV3JpdGVUb29sJyxcbiAgJ0ZpbGVFZGl0VG9vbCcsXG4gICdHbG9iVG9vbCcsXG4gICdHcmVwVG9vbCcsXG4gICdXZWJGZXRjaFRvb2wnLFxuICAnV2ViU2VhcmNoVG9vbCcsXG4gICdTa2lsbFRvb2wnLFxuICAnRW50ZXJQbGFuTW9kZVRvb2wnLFxuICAnRXhpdFBsYW5Nb2RlVjJUb29sJyxcbiAgJ0VudGVyV29ya3RyZWVUb29sJyxcbiAgJ0V4aXRXb3JrdHJlZVRvb2wnLFxuICAnVGFza0NyZWF0ZVRvb2wnLFxuICAnVGFza0dldFRvb2wnLFxuICAnVGFza1VwZGF0ZVRvb2wnLFxuICAnVGFza0xpc3RUb29sJyxcbiAgJ1Rhc2tTdG9wVG9vbCcsXG4gICdMaXN0TWNwUmVzb3VyY2VzVG9vbCcsXG4gICdSZWFkTWNwUmVzb3VyY2VUb29sJyxcbiAgJ01vbml0b3JUb29sJyxcbiAgJ1NuaXBUb29sJyxcbiAgJ2dldFRlYW1DcmVhdGVUb29sJyxcbiAgJ2dldFRlYW1EZWxldGVUb29sJyxcbiAgJ2dldFNlbmRNZXNzYWdlVG9vbCcsXG5dIGFzIGNvbnN0XG5cbmZ1bmN0aW9uIGZpbmRSZXBvUm9vdChzdGFydERpcjogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IGN1cnJlbnQgPSBwYXRoLnJlc29sdmUoc3RhcnREaXIpXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgcGFja2FnZUpzb25QYXRoID0gcGF0aC5qb2luKGN1cnJlbnQsICdwYWNrYWdlLmpzb24nKVxuICAgIGNvbnN0IHNyY0RpciA9IHBhdGguam9pbihjdXJyZW50LCAnc3JjJylcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhwYWNrYWdlSnNvblBhdGgpICYmIGZzLmV4aXN0c1N5bmMoc3JjRGlyKSkge1xuICAgICAgcmV0dXJuIGN1cnJlbnRcbiAgICB9XG4gICAgY29uc3QgcGFyZW50ID0gcGF0aC5kaXJuYW1lKGN1cnJlbnQpXG4gICAgaWYgKHBhcmVudCA9PT0gY3VycmVudCkge1xuICAgICAgcmV0dXJuIHBhdGgucmVzb2x2ZShzdGFydERpcilcbiAgICB9XG4gICAgY3VycmVudCA9IHBhcmVudFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlYWRTb3VyY2UocmVwb1Jvb3Q6IHN0cmluZywgLi4uc2VnbWVudHM6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgcmV0dXJuIGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4ocmVwb1Jvb3QsIC4uLnNlZ21lbnRzKSwgJ3V0ZjgnKVxufVxuXG5mdW5jdGlvbiBmb3JtYXRTdGF0dXMoc3RhdHVzOiBWZXJpZnlTdGF0dXMpOiBzdHJpbmcge1xuICByZXR1cm4gc3RhdHVzLnBhZEVuZCg3LCAnICcpXG59XG5cbmZ1bmN0aW9uIGRldGVjdFNldHRpbmdzUGF0aChcbiAgcmVwb1Jvb3Q6IHN0cmluZyxcbiAgcHJvdmlkZWRQYXRoPzogc3RyaW5nLFxuKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IGNhbmRpZGF0ZXMgPSBbXG4gICAgcHJvdmlkZWRQYXRoLFxuICAgIHByb2Nlc3MuZW52LkJMQVVERV9TRVRUSU5HU19QQVRILFxuICAgIHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX1NFVFRJTkdTX1BBVEgsXG4gICAgcGF0aC5qb2luKHJlcG9Sb290LCAnLmNsYXVkZScsICdzZXR0aW5ncy5qc29uJyksXG4gICAgcGF0aC5qb2luKG9zLmhvbWVkaXIoKSwgJy5jbGF1ZGUnLCAnc2V0dGluZ3MuanNvbicpLFxuICAgIHBhdGguam9pbihvcy5ob21lZGlyKCksICcuY3Vyc29yJywgJ3NldHRpbmdzLmpzb24nKSxcbiAgXS5maWx0ZXIoQm9vbGVhbikgYXMgc3RyaW5nW11cblxuICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBjYW5kaWRhdGVzKSB7XG4gICAgY29uc3QgYWJzb2x1dGVQYXRoID0gcGF0aC5yZXNvbHZlKGNhbmRpZGF0ZSlcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhhYnNvbHV0ZVBhdGgpICYmIGZzLnN0YXRTeW5jKGFic29sdXRlUGF0aCkuaXNGaWxlKCkpIHtcbiAgICAgIHJldHVybiBhYnNvbHV0ZVBhdGhcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gZ2V0RGlzdEVudHJ5KHJlcG9Sb290OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5qb2luKHJlcG9Sb290LCAnZGlzdCcsICdibGF1ZGUubWpzJylcbn1cblxuZnVuY3Rpb24gY3JlYXRlVmVyaWZ5VG9vbENvbnRleHQocmVwb1Jvb3Q6IHN0cmluZykge1xuICBjb25zdCBwcmV2aW91c0N3ZCA9IHByb2Nlc3MuY3dkKClcbiAgcHJvY2Vzcy5jaGRpcihyZXBvUm9vdClcblxuICBsZXQgYXBwU3RhdGU6IEFwcFN0YXRlID0gZ2V0RGVmYXVsdEFwcFN0YXRlKClcbiAgY29uc3QgcmVhZEZpbGVTdGF0ZSA9IGNyZWF0ZUZpbGVTdGF0ZUNhY2hlV2l0aFNpemVMaW1pdChcbiAgICBSRUFEX0ZJTEVfU1RBVEVfQ0FDSEVfU0laRSxcbiAgKVxuXG4gIGNvbnN0IGNvbnRleHQgPSB7XG4gICAgYWJvcnRDb250cm9sbGVyOiBuZXcgQWJvcnRDb250cm9sbGVyKCksXG4gICAgdG9vbFVzZUlkOiAndmVyaWZ5LXRvb2wnLFxuICAgIHJlYWRGaWxlU3RhdGUsXG4gICAgZmlsZVJlYWRpbmdMaW1pdHM6IHVuZGVmaW5lZCxcbiAgICBnbG9iTGltaXRzOiB7IG1heFJlc3VsdHM6IDEwMCB9LFxuICAgIGR5bmFtaWNTa2lsbERpclRyaWdnZXJzOiBuZXcgU2V0PHN0cmluZz4oKSxcbiAgICBuZXN0ZWRNZW1vcnlBdHRhY2htZW50VHJpZ2dlcnM6IG5ldyBTZXQ8c3RyaW5nPigpLFxuICAgIGxvYWRlZE5lc3RlZE1lbW9yeVBhdGhzOiBuZXcgU2V0PHN0cmluZz4oKSxcbiAgICBkaXNjb3ZlcmVkU2tpbGxOYW1lczogbmV3IFNldDxzdHJpbmc+KCksXG4gICAgbWVzc2FnZXM6IFtdLFxuICAgIGdldEFwcFN0YXRlOiAoKSA9PiBhcHBTdGF0ZSxcbiAgICBzZXRBcHBTdGF0ZTogKHVwZGF0ZXI6IChwcmV2OiBBcHBTdGF0ZSkgPT4gQXBwU3RhdGUpID0+IHtcbiAgICAgIGFwcFN0YXRlID0gdXBkYXRlcihhcHBTdGF0ZSlcbiAgICB9LFxuICAgIHNldEluUHJvZ3Jlc3NUb29sVXNlSURzOiAoKSA9PiB7fSxcbiAgICBzZXRSZXNwb25zZUxlbmd0aDogKCkgPT4ge30sXG4gICAgdXBkYXRlRmlsZUhpc3RvcnlTdGF0ZTogKCkgPT4ge30sXG4gICAgdXBkYXRlQXR0cmlidXRpb25TdGF0ZTogKCkgPT4ge30sXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNvbnRleHQsXG4gICAgcmVzdG9yZSgpIHtcbiAgICAgIHByb2Nlc3MuY2hkaXIocHJldmlvdXNDd2QpXG4gICAgfSxcbiAgfVxufVxuXG5mdW5jdGlvbiBydW5CdWlsdENsaShcbiAgcmVwb1Jvb3Q6IHN0cmluZyxcbiAgYXJnczogc3RyaW5nW10sXG4gIHNldHRpbmdzUGF0aDogc3RyaW5nIHwgbnVsbCxcbik6IHtcbiAgb2s6IGJvb2xlYW5cbiAgc3Rkb3V0OiBzdHJpbmdcbiAgc3RkZXJyOiBzdHJpbmdcbiAgc3RhdHVzOiBudW1iZXIgfCBudWxsXG4gIGRldGFpbDogc3RyaW5nXG59IHtcbiAgY29uc3QgZGlzdEVudHJ5ID0gZ2V0RGlzdEVudHJ5KHJlcG9Sb290KVxuICBpZiAoIWZzLmV4aXN0c1N5bmMoZGlzdEVudHJ5KSkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBzdGRvdXQ6ICcnLFxuICAgICAgc3RkZXJyOiAnJyxcbiAgICAgIHN0YXR1czogbnVsbCxcbiAgICAgIGRldGFpbDogJ21pc3NpbmcgZGlzdC9ibGF1ZGUubWpzOyBydW4gcG5wbSBydW4gYnVpbGQgZmlyc3QnLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNvbW1hbmRBcmdzID0gW2Rpc3RFbnRyeV1cbiAgaWYgKHNldHRpbmdzUGF0aCkge1xuICAgIGNvbW1hbmRBcmdzLnB1c2goJy0tc2V0dGluZ3MnLCBzZXR0aW5nc1BhdGgpXG4gIH1cbiAgY29tbWFuZEFyZ3MucHVzaCguLi5hcmdzKVxuXG4gIGNvbnN0IHJlc3VsdCA9IHNwYXduU3luYyhwcm9jZXNzLmV4ZWNQYXRoLCBjb21tYW5kQXJncywge1xuICAgIGN3ZDogcmVwb1Jvb3QsXG4gICAgZW5jb2Rpbmc6ICd1dGY4JyxcbiAgICB0aW1lb3V0OiAxMjAwMDAsXG4gICAgbWF4QnVmZmVyOiA4ICogMTAyNCAqIDEwMjQsXG4gICAgZW52OiB7XG4gICAgICAuLi5wcm9jZXNzLmVudixcbiAgICAgIEJMQVVERV9WRVJJRllfQ0hJTEQ6ICcxJyxcbiAgICB9LFxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgb2s6IHJlc3VsdC5zdGF0dXMgPT09IDAsXG4gICAgc3Rkb3V0OiByZXN1bHQuc3Rkb3V0IHx8ICcnLFxuICAgIHN0ZGVycjogcmVzdWx0LnN0ZGVyciB8fCAnJyxcbiAgICBzdGF0dXM6IHJlc3VsdC5zdGF0dXMsXG4gICAgZGV0YWlsOlxuICAgICAgcmVzdWx0LmVycm9yPy5tZXNzYWdlIHx8XG4gICAgICBgZXhpdD0ke1N0cmluZyhyZXN1bHQuc3RhdHVzKX0ke3Jlc3VsdC5zdGRlcnIgPyBgIHN0ZGVycj0ke3Jlc3VsdC5zdGRlcnIudHJpbSgpfWAgOiAnJ31gLFxuICB9XG59XG5cbmZ1bmN0aW9uIGNvdW50RmlsZXNBbmRCeXRlcyhkaXI6IHN0cmluZyk6IHsgZmlsZXM6IG51bWJlcjsgYnl0ZXM6IG51bWJlciB9IHtcbiAgaWYgKCFmcy5leGlzdHNTeW5jKGRpcikpIHtcbiAgICByZXR1cm4geyBmaWxlczogMCwgYnl0ZXM6IDAgfVxuICB9XG5cbiAgbGV0IGZpbGVzID0gMFxuICBsZXQgYnl0ZXMgPSAwXG4gIGNvbnN0IHN0YWNrID0gW2Rpcl1cblxuICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBzdGFjay5wb3AoKVxuICAgIGlmICghY3VycmVudCkgY29udGludWVcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGZzLnJlYWRkaXJTeW5jKGN1cnJlbnQsIHsgd2l0aEZpbGVUeXBlczogdHJ1ZSB9KSkge1xuICAgICAgY29uc3QgZW50cnlQYXRoID0gcGF0aC5qb2luKGN1cnJlbnQsIGVudHJ5Lm5hbWUpXG4gICAgICBpZiAoZW50cnkuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICBzdGFjay5wdXNoKGVudHJ5UGF0aClcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIGlmIChlbnRyeS5pc0ZpbGUoKSkge1xuICAgICAgICBmaWxlcyArPSAxXG4gICAgICAgIGJ5dGVzICs9IGZzLnN0YXRTeW5jKGVudHJ5UGF0aCkuc2l6ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGZpbGVzLCBieXRlcyB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdE1lZ2FieXRlcyhieXRlczogbnVtYmVyKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAkeyhieXRlcyAvICgxMDI0ICogMTAyNCkpLnRvRml4ZWQoMSl9TUJgXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHZlcmlmeVRvb2xzUm93KHJlcG9Sb290OiBzdHJpbmcpOiBQcm9taXNlPFZlcmlmeVJvdz4ge1xuICBjb25zdCB0b29sc1NvdXJjZSA9IHJlYWRTb3VyY2UocmVwb1Jvb3QsICdzcmMnLCAndG9vbHMudHMnKVxuICBjb25zdCBtaXNzaW5nVG9rZW5zID0gVEFCTEVfVE9PTF9UT0tFTlMuZmlsdGVyKFxuICAgIHRva2VuID0+ICF0b29sc1NvdXJjZS5pbmNsdWRlcyh0b2tlbiksXG4gIClcbiAgY29uc3QgZW5hYmxlZFRvb2xzID0gZ2V0QWxsQmFzZVRvb2xzKCkuZmlsdGVyKHRvb2wgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdG9vbC5pc0VuYWJsZWQoKVxuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9KVxuICBjb25zdCB0b29sTmFtZXMgPSBlbmFibGVkVG9vbHMubWFwKHRvb2wgPT4gdG9vbC5uYW1lKVxuXG4gIGlmIChtaXNzaW5nVG9rZW5zLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4ge1xuICAgICAgbW9kdWxlOiAnMjYgXHU0RTJBXHU1MTg1XHU3RjZFXHU1REU1XHU1MTc3JyxcbiAgICAgIHN0YXR1czogJ0ZBSUwnLFxuICAgICAgZGV0YWlsOiBgbWlzc2luZyBzb3VyY2UgcmVnaXN0cmF0aW9uczogJHttaXNzaW5nVG9rZW5zLmpvaW4oJywgJyl9YCxcbiAgICB9XG4gIH1cblxuICBjb25zdCBzdGF0dXM6IFZlcmlmeVN0YXR1cyA9IGVuYWJsZWRUb29scy5sZW5ndGggPj0gMjYgPyAnUEFTUycgOiAnUEFSVElBTCdcbiAgcmV0dXJuIHtcbiAgICBtb2R1bGU6ICcyNiBcdTRFMkFcdTUxODVcdTdGNkVcdTVERTVcdTUxNzcnLFxuICAgIHN0YXR1cyxcbiAgICBkZXRhaWw6IGAke2VuYWJsZWRUb29scy5sZW5ndGh9IGVuYWJsZWQgdG9vbHM7IHNhbXBsZSA9ICR7dG9vbE5hbWVzLnNsaWNlKDAsIDEyKS5qb2luKCcsICcpfWAsXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gdmVyaWZ5UXVlcnlFbmdpbmVSb3coKTogUHJvbWlzZTxWZXJpZnlSb3c+IHtcbiAgY29uc3QgaGFzQ29yZU1ldGhvZHMgPVxuICAgIHR5cGVvZiBRdWVyeUVuZ2luZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBRdWVyeUVuZ2luZS5wcm90b3R5cGUuc3VibWl0TWVzc2FnZSA9PT0gJ2Z1bmN0aW9uJ1xuXG4gIHJldHVybiB7XG4gICAgbW9kdWxlOiAnUXVlcnlFbmdpbmUnLFxuICAgIHN0YXR1czogaGFzQ29yZU1ldGhvZHMgPyAnUEFTUycgOiAnRkFJTCcsXG4gICAgZGV0YWlsOiBoYXNDb3JlTWV0aG9kc1xuICAgICAgPyAnUXVlcnlFbmdpbmUgY2xhc3MgaXMgbG9hZGFibGUgYW5kIGV4cG9zZXMgc3VibWl0TWVzc2FnZSgpJ1xuICAgICAgOiAnUXVlcnlFbmdpbmUgY2xhc3Mgb3Igc3VibWl0TWVzc2FnZSgpIGlzIG1pc3NpbmcnLFxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHZlcmlmeVF1ZXJ5RnVuY3Rpb25Sb3coKTogUHJvbWlzZTxWZXJpZnlSb3c+IHtcbiAgY29uc3QgY29uc3RydWN0b3JOYW1lID0gcXVlcnkuY29uc3RydWN0b3I/Lm5hbWUgfHwgJydcbiAgY29uc3QgaXNBc3luY0dlbmVyYXRvciA9IGNvbnN0cnVjdG9yTmFtZSA9PT0gJ0FzeW5jR2VuZXJhdG9yRnVuY3Rpb24nXG4gIHJldHVybiB7XG4gICAgbW9kdWxlOiAncXVlcnkoKScsXG4gICAgc3RhdHVzOiBpc0FzeW5jR2VuZXJhdG9yID8gJ1BBU1MnIDogJ0ZBSUwnLFxuICAgIGRldGFpbDogaXNBc3luY0dlbmVyYXRvclxuICAgICAgPyAncXVlcnkoKSBpcyBhbiBBc3luY0dlbmVyYXRvckZ1bmN0aW9uIGZyb20gc3JjL3F1ZXJ5LnRzJ1xuICAgICAgOiBgdW5leHBlY3RlZCBmdW5jdGlvbiB0eXBlOiAke2NvbnN0cnVjdG9yTmFtZSB8fCAndW5rbm93bid9YCxcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiB2ZXJpZnlBcGlDbGllbnRSb3coXG4gIHJlcG9Sb290OiBzdHJpbmcsXG4gIG9wdGlvbnM6IFZlcmlmeU9wdGlvbnMsXG4pOiBQcm9taXNlPFZlcmlmeVJvdz4ge1xuICBpZiAob3B0aW9ucy5vZmZsaW5lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vZHVsZTogJ0FQSSBDbGllbnQnLFxuICAgICAgc3RhdHVzOiAnUEFSVElBTCcsXG4gICAgICBkZXRhaWw6ICdvZmZsaW5lIG1vZGUgc2tpcHBlZCBsaXZlIHByb3ZpZGVyIHNtb2tlIHRlc3QnLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNldHRpbmdzUGF0aCA9IGRldGVjdFNldHRpbmdzUGF0aChyZXBvUm9vdCwgb3B0aW9ucy5zZXR0aW5ncylcbiAgaWYgKCFzZXR0aW5nc1BhdGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbW9kdWxlOiAnQVBJIENsaWVudCcsXG4gICAgICBzdGF0dXM6ICdQQVJUSUFMJyxcbiAgICAgIGRldGFpbDogJ25vIHNldHRpbmdzLmpzb24gb3IgcHJvdmlkZXIgZW52IGZvdW5kIGZvciBsaXZlIEFQSSBzbW9rZSB0ZXN0JyxcbiAgICB9XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBydW5CdWlsdENsaShcbiAgICByZXBvUm9vdCxcbiAgICBbJy0tcHJpbnQnLCAnXHU1M0VBXHU1NkRFXHU1OTBEIHBvbmcnXSxcbiAgICBzZXR0aW5nc1BhdGgsXG4gIClcblxuICBpZiAoIXJlc3VsdC5vaykge1xuICAgIHJldHVybiB7XG4gICAgICBtb2R1bGU6ICdBUEkgQ2xpZW50JyxcbiAgICAgIHN0YXR1czogJ0ZBSUwnLFxuICAgICAgZGV0YWlsOiBgbGl2ZSByZXF1ZXN0IGZhaWxlZCB2aWEgJHtzZXR0aW5nc1BhdGh9OiAke3Jlc3VsdC5kZXRhaWx9YCxcbiAgICB9XG4gIH1cblxuICBjb25zdCBub3JtYWxpemVkID0gcmVzdWx0LnN0ZG91dC50cmltKCkudG9Mb3dlckNhc2UoKVxuICByZXR1cm4ge1xuICAgIG1vZHVsZTogJ0FQSSBDbGllbnQnLFxuICAgIHN0YXR1czogbm9ybWFsaXplZC5pbmNsdWRlcygncG9uZycpID8gJ1BBU1MnIDogJ1BBUlRJQUwnLFxuICAgIGRldGFpbDogbm9ybWFsaXplZC5pbmNsdWRlcygncG9uZycpXG4gICAgICA/IGBsaXZlIHByaW50LW1vZGUgcmVxdWVzdCBzdWNjZWVkZWQgdmlhICR7c2V0dGluZ3NQYXRofWBcbiAgICAgIDogYGxpdmUgcmVxdWVzdCByZXR1cm5lZCB1bmV4cGVjdGVkIHBheWxvYWQgdmlhICR7c2V0dGluZ3NQYXRofTogJHtyZXN1bHQuc3Rkb3V0LnRyaW0oKX1gLFxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHZlcmlmeVRvb2xTY2hlbWFSb3coKTogUHJvbWlzZTxWZXJpZnlSb3c+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzY2hlbWEgPSBhd2FpdCB0b29sVG9BUElTY2hlbWEoQmFzaFRvb2wsIHtcbiAgICAgIGdldFRvb2xQZXJtaXNzaW9uQ29udGV4dDogYXN5bmMgKCkgPT4gZ2V0RW1wdHlUb29sUGVybWlzc2lvbkNvbnRleHQoKSxcbiAgICAgIHRvb2xzOiBbQmFzaFRvb2xdLFxuICAgICAgYWdlbnRzOiBbXSxcbiAgICB9KVxuICAgIGNvbnN0IHByb3BlcnRpZXMgPVxuICAgICAgJ2lucHV0X3NjaGVtYScgaW4gc2NoZW1hICYmXG4gICAgICBzY2hlbWEuaW5wdXRfc2NoZW1hICYmXG4gICAgICB0eXBlb2Ygc2NoZW1hLmlucHV0X3NjaGVtYSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICdwcm9wZXJ0aWVzJyBpbiBzY2hlbWEuaW5wdXRfc2NoZW1hXG4gICAgICAgID8gc2NoZW1hLmlucHV0X3NjaGVtYS5wcm9wZXJ0aWVzXG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgY29uc3QgaGFzQ29tbWFuZFByb3BlcnR5ID1cbiAgICAgIHByb3BlcnRpZXMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgcHJvcGVydGllcyAhPT0gbnVsbCAmJlxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMgPT09ICdvYmplY3QnICYmXG4gICAgICAnY29tbWFuZCcgaW4gcHJvcGVydGllc1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1vZHVsZTogJ3Rvb2xUb0FQSVNjaGVtYScsXG4gICAgICBzdGF0dXM6IGhhc0NvbW1hbmRQcm9wZXJ0eSA/ICdQQVNTJyA6ICdGQUlMJyxcbiAgICAgIGRldGFpbDogaGFzQ29tbWFuZFByb3BlcnR5XG4gICAgICAgID8gJ3Rvb2xUb0FQSVNjaGVtYSgpIHByb2R1Y2VkIEpTT04gU2NoZW1hIHByb3BlcnRpZXMgZm9yIEJhc2gnXG4gICAgICAgIDogJ3Rvb2xUb0FQSVNjaGVtYSgpIGRpZCBub3QgZXhwb3NlIHRoZSBleHBlY3RlZCBjb21tYW5kIHByb3BlcnR5JyxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vZHVsZTogJ3Rvb2xUb0FQSVNjaGVtYScsXG4gICAgICBzdGF0dXM6ICdGQUlMJyxcbiAgICAgIGRldGFpbDogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBTdHJpbmcoZXJyb3IpLFxuICAgIH1cbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiB2ZXJpZnlCYXNoVG9vbFJvdyhyZXBvUm9vdDogc3RyaW5nKTogUHJvbWlzZTxWZXJpZnlSb3c+IHtcbiAgY29uc3QgeyBjb250ZXh0LCByZXN0b3JlIH0gPSBjcmVhdGVWZXJpZnlUb29sQ29udGV4dChyZXBvUm9vdClcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBCYXNoVG9vbC5jYWxsKFxuICAgICAgeyBjb21tYW5kOiAncHJpbnRmIGJsYXVkZS12ZXJpZnknIH0gYXMgbmV2ZXIsXG4gICAgICBjb250ZXh0IGFzIG5ldmVyLFxuICAgIClcbiAgICBjb25zdCBibG9jayA9IEJhc2hUb29sLm1hcFRvb2xSZXN1bHRUb1Rvb2xSZXN1bHRCbG9ja1BhcmFtKFxuICAgICAgcmVzdWx0LmRhdGEsXG4gICAgICAndmVyaWZ5LWJhc2gnLFxuICAgIClcbiAgICBjb25zdCBjb250ZW50ID0gdHlwZW9mIGJsb2NrLmNvbnRlbnQgPT09ICdzdHJpbmcnID8gYmxvY2suY29udGVudCA6ICcnXG4gICAgcmV0dXJuIHtcbiAgICAgIG1vZHVsZTogJ0Jhc2ggXHU1REU1XHU1MTc3JyxcbiAgICAgIHN0YXR1czogY29udGVudC5pbmNsdWRlcygnYmxhdWRlLXZlcmlmeScpID8gJ1BBU1MnIDogJ0ZBSUwnLFxuICAgICAgZGV0YWlsOiBjb250ZW50LmluY2x1ZGVzKCdibGF1ZGUtdmVyaWZ5JylcbiAgICAgICAgPyAnQmFzaFRvb2wgZXhlY3V0ZWQgYSBzaGVsbCBjb21tYW5kIGFuZCByZXR1cm5lZCBzdGRvdXQnXG4gICAgICAgIDogYHVuZXhwZWN0ZWQgQmFzaFRvb2wgb3V0cHV0OiAke2NvbnRlbnQgfHwgJzxlbXB0eT4nfWAsXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBtb2R1bGU6ICdCYXNoIFx1NURFNVx1NTE3NycsXG4gICAgICBzdGF0dXM6ICdGQUlMJyxcbiAgICAgIGRldGFpbDogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBTdHJpbmcoZXJyb3IpLFxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZXN0b3JlKClcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiB2ZXJpZnlSZWFkVG9vbFJvdyhyZXBvUm9vdDogc3RyaW5nKTogUHJvbWlzZTxWZXJpZnlSb3c+IHtcbiAgY29uc3QgeyBjb250ZXh0LCByZXN0b3JlIH0gPSBjcmVhdGVWZXJpZnlUb29sQ29udGV4dChyZXBvUm9vdClcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBGaWxlUmVhZFRvb2wuY2FsbChcbiAgICAgIHtcbiAgICAgICAgZmlsZV9wYXRoOiBwYXRoLmpvaW4ocmVwb1Jvb3QsICdwYWNrYWdlLmpzb24nKSxcbiAgICAgICAgb2Zmc2V0OiAxLFxuICAgICAgICBsaW1pdDogNSxcbiAgICAgIH0gYXMgbmV2ZXIsXG4gICAgICBjb250ZXh0IGFzIG5ldmVyLFxuICAgIClcbiAgICBjb25zdCBibG9jayA9IEZpbGVSZWFkVG9vbC5tYXBUb29sUmVzdWx0VG9Ub29sUmVzdWx0QmxvY2tQYXJhbShcbiAgICAgIHJlc3VsdC5kYXRhLFxuICAgICAgJ3ZlcmlmeS1yZWFkJyxcbiAgICApXG4gICAgY29uc3QgY29udGVudCA9XG4gICAgICB0eXBlb2YgYmxvY2suY29udGVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBibG9jay5jb250ZW50XG4gICAgICAgIDogSlNPTi5zdHJpbmdpZnkoYmxvY2suY29udGVudClcbiAgICByZXR1cm4ge1xuICAgICAgbW9kdWxlOiAnUmVhZCBcdTVERTVcdTUxNzcnLFxuICAgICAgc3RhdHVzOiAvXCJuYW1lXCI6XFxzKlwiYmxhdWRlXCIvLnRlc3QoY29udGVudCkgPyAnUEFTUycgOiAnRkFJTCcsXG4gICAgICBkZXRhaWw6IC9cIm5hbWVcIjpcXHMqXCJibGF1ZGVcIi8udGVzdChjb250ZW50KVxuICAgICAgICA/ICdGaWxlUmVhZFRvb2wgcmVhZCBwYWNrYWdlLmpzb24gd2l0aCBvZmZzZXQvbGltaXQgc3VwcG9ydCdcbiAgICAgICAgOiBgdW5leHBlY3RlZCBGaWxlUmVhZFRvb2wgb3V0cHV0OiAke2NvbnRlbnQuc2xpY2UoMCwgMjAwKX1gLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbW9kdWxlOiAnUmVhZCBcdTVERTVcdTUxNzcnLFxuICAgICAgc3RhdHVzOiAnRkFJTCcsXG4gICAgICBkZXRhaWw6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogU3RyaW5nKGVycm9yKSxcbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVzdG9yZSgpXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gdmVyaWZ5R2xvYlRvb2xSb3cocmVwb1Jvb3Q6IHN0cmluZyk6IFByb21pc2U8VmVyaWZ5Um93PiB7XG4gIGNvbnN0IHsgY29udGV4dCwgcmVzdG9yZSB9ID0gY3JlYXRlVmVyaWZ5VG9vbENvbnRleHQocmVwb1Jvb3QpXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgR2xvYlRvb2wuY2FsbChcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogJyouanNvbicsXG4gICAgICAgIHBhdGg6IHJlcG9Sb290LFxuICAgICAgfSBhcyBuZXZlcixcbiAgICAgIGNvbnRleHQgYXMgbmV2ZXIsXG4gICAgKVxuICAgIGNvbnN0IGZpbGVuYW1lcyA9IHJlc3VsdC5kYXRhLmZpbGVuYW1lcyB8fCBbXVxuICAgIHJldHVybiB7XG4gICAgICBtb2R1bGU6ICdHbG9iIFx1NURFNVx1NTE3NycsXG4gICAgICBzdGF0dXM6IGZpbGVuYW1lcy5zb21lKG5hbWUgPT4gbmFtZS5lbmRzV2l0aCgncGFja2FnZS5qc29uJykpXG4gICAgICAgID8gJ1BBU1MnXG4gICAgICAgIDogJ0ZBSUwnLFxuICAgICAgZGV0YWlsOiBmaWxlbmFtZXMuc29tZShuYW1lID0+IG5hbWUuZW5kc1dpdGgoJ3BhY2thZ2UuanNvbicpKVxuICAgICAgICA/IGBHbG9iVG9vbCByZXR1cm5lZCAke2ZpbGVuYW1lcy5sZW5ndGh9IG1hdGNoaW5nIGZpbGVzYFxuICAgICAgICA6IGBHbG9iVG9vbCBkaWQgbm90IGZpbmQgcGFja2FnZS5qc29uIGluICR7cmVwb1Jvb3R9YCxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vZHVsZTogJ0dsb2IgXHU1REU1XHU1MTc3JyxcbiAgICAgIHN0YXR1czogJ0ZBSUwnLFxuICAgICAgZGV0YWlsOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFN0cmluZyhlcnJvciksXG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlc3RvcmUoKVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHZlcmlmeUdyZXBUb29sUm93KHJlcG9Sb290OiBzdHJpbmcpOiBQcm9taXNlPFZlcmlmeVJvdz4ge1xuICBjb25zdCB7IGNvbnRleHQsIHJlc3RvcmUgfSA9IGNyZWF0ZVZlcmlmeVRvb2xDb250ZXh0KHJlcG9Sb290KVxuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEdyZXBUb29sLmNhbGwoXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46ICdcIm5hbWVcIjpcXFxccypcImJsYXVkZVwiJyxcbiAgICAgICAgcGF0aDogcGF0aC5qb2luKHJlcG9Sb290LCAncGFja2FnZS5qc29uJyksXG4gICAgICAgIG91dHB1dF9tb2RlOiAnY29udGVudCcsXG4gICAgICAgIGhlYWRfbGltaXQ6IDUsXG4gICAgICB9IGFzIG5ldmVyLFxuICAgICAgY29udGV4dCBhcyBuZXZlcixcbiAgICApXG4gICAgY29uc3QgY29udGVudCA9IHJlc3VsdC5kYXRhLmNvbnRlbnQgfHwgJydcbiAgICByZXR1cm4ge1xuICAgICAgbW9kdWxlOiAnR3JlcCBcdTVERTVcdTUxNzcnLFxuICAgICAgc3RhdHVzOiAvXCJuYW1lXCI6XFxzKlwiYmxhdWRlXCIvLnRlc3QoY29udGVudCkgPyAnUEFTUycgOiAnRkFJTCcsXG4gICAgICBkZXRhaWw6IC9cIm5hbWVcIjpcXHMqXCJibGF1ZGVcIi8udGVzdChjb250ZW50KVxuICAgICAgICA/ICdHcmVwVG9vbCBtYXRjaGVkIHBhY2thZ2UuanNvbiBjb250ZW50IHdpdGggcmlwZ3JlcCdcbiAgICAgICAgOiBgdW5leHBlY3RlZCBHcmVwVG9vbCBvdXRwdXQ6ICR7Y29udGVudC5zbGljZSgwLCAyMDApfWAsXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBtb2R1bGU6ICdHcmVwIFx1NURFNVx1NTE3NycsXG4gICAgICBzdGF0dXM6ICdGQUlMJyxcbiAgICAgIGRldGFpbDogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBTdHJpbmcoZXJyb3IpLFxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZXN0b3JlKClcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiB2ZXJpZnlBZ2VudExvb3BSb3coXG4gIHJlcG9Sb290OiBzdHJpbmcsXG4gIG9wdGlvbnM6IFZlcmlmeU9wdGlvbnMsXG4pOiBQcm9taXNlPFZlcmlmeVJvdz4ge1xuICBpZiAob3B0aW9ucy5vZmZsaW5lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vZHVsZTogJ1x1NUI4Q1x1NjU3NCBBZ2VudCBMb29wJyxcbiAgICAgIHN0YXR1czogJ1BBUlRJQUwnLFxuICAgICAgZGV0YWlsOiAnb2ZmbGluZSBtb2RlIHNraXBwZWQgbGl2ZSBtdWx0aS10dXJuIHRvb2wgbG9vcCBzbW9rZSB0ZXN0JyxcbiAgICB9XG4gIH1cblxuICBjb25zdCBzZXR0aW5nc1BhdGggPSBkZXRlY3RTZXR0aW5nc1BhdGgocmVwb1Jvb3QsIG9wdGlvbnMuc2V0dGluZ3MpXG4gIGlmICghc2V0dGluZ3NQYXRoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vZHVsZTogJ1x1NUI4Q1x1NjU3NCBBZ2VudCBMb29wJyxcbiAgICAgIHN0YXR1czogJ1BBUlRJQUwnLFxuICAgICAgZGV0YWlsOiAnbm8gc2V0dGluZ3MuanNvbiBhdmFpbGFibGUgZm9yIGxpdmUgYWdlbnQtbG9vcCBzbW9rZSB0ZXN0JyxcbiAgICB9XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBydW5CdWlsdENsaShcbiAgICByZXBvUm9vdCxcbiAgICBbXG4gICAgICAnLS1wcmludCcsXG4gICAgICAnLS12ZXJib3NlJyxcbiAgICAgICctLW91dHB1dC1mb3JtYXQnLFxuICAgICAgJ3N0cmVhbS1qc29uJyxcbiAgICAgICctLW1heC10dXJucycsXG4gICAgICAnNicsXG4gICAgICAnXHU4QkZCXHU1M0Q2XHU1RjUzXHU1MjREXHU1REU1XHU0RjVDXHU3NkVFXHU1RjU1XHU3Njg0IHBhY2thZ2UuanNvblx1RkYwQ1x1NUU3Nlx1NTNFQVx1NTZERVx1NTkwRCB2ZXJzaW9uIFx1NUI1N1x1NkJCNVx1NTAzQ1x1MzAwMlx1NUZDNVx1OTg3Qlx1NEY3Rlx1NzUyOCBSZWFkIFx1NURFNVx1NTE3N1x1RkYwQ1x1NEUwRFx1ODk4MVx1NTFFRFx1OEJCMFx1NUZDNlx1NTZERVx1N0I1NFx1MzAwMicsXG4gICAgXSxcbiAgICBzZXR0aW5nc1BhdGgsXG4gIClcblxuICBpZiAoIXJlc3VsdC5vaykge1xuICAgIHJldHVybiB7XG4gICAgICBtb2R1bGU6ICdcdTVCOENcdTY1NzQgQWdlbnQgTG9vcCcsXG4gICAgICBzdGF0dXM6ICdGQUlMJyxcbiAgICAgIGRldGFpbDogYGxpdmUgc3RyZWFtLWpzb24gcnVuIGZhaWxlZCB2aWEgJHtzZXR0aW5nc1BhdGh9OiAke3Jlc3VsdC5kZXRhaWx9YCxcbiAgICB9XG4gIH1cblxuICBjb25zdCBjb21iaW5lZCA9IGAke3Jlc3VsdC5zdGRvdXR9XFxuJHtyZXN1bHQuc3RkZXJyfWBcbiAgY29uc3Qgc2F3VG9vbFVzZSA9XG4gICAgL1widG9vbF9uYW1lXCI6XCJSZWFkXCIvLnRlc3QoY29tYmluZWQpIHx8XG4gICAgL1wibmFtZVwiOlwiUmVhZFwiLy50ZXN0KGNvbWJpbmVkKSB8fFxuICAgIC90b29sX3VzZS9pLnRlc3QoY29tYmluZWQpXG4gIGNvbnN0IHNhd1ZlcnNpb24gPSAvOTlcXC45OVxcLjk5LWJsYWNrXFwuMS8udGVzdChjb21iaW5lZClcblxuICBpZiAoc2F3VG9vbFVzZSAmJiBzYXdWZXJzaW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vZHVsZTogJ1x1NUI4Q1x1NjU3NCBBZ2VudCBMb29wJyxcbiAgICAgIHN0YXR1czogJ1BBU1MnLFxuICAgICAgZGV0YWlsOiBgbGl2ZSBzdHJlYW0tanNvbiBydW4gY29tcGxldGVkIHdpdGggdG9vbCBhY3Rpdml0eSB2aWEgJHtzZXR0aW5nc1BhdGh9YCxcbiAgICB9XG4gIH1cblxuICBpZiAoc2F3VmVyc2lvbikge1xuICAgIHJldHVybiB7XG4gICAgICBtb2R1bGU6ICdcdTVCOENcdTY1NzQgQWdlbnQgTG9vcCcsXG4gICAgICBzdGF0dXM6ICdQQVJUSUFMJyxcbiAgICAgIGRldGFpbDogYGxpdmUgcnVuIGNvbXBsZXRlZCB2aWEgJHtzZXR0aW5nc1BhdGh9LCBidXQgdG9vbC11c2UgZXZpZGVuY2Ugd2FzIGluY29uY2x1c2l2ZWAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb2R1bGU6ICdcdTVCOENcdTY1NzQgQWdlbnQgTG9vcCcsXG4gICAgc3RhdHVzOiAnRkFJTCcsXG4gICAgZGV0YWlsOiBgbGl2ZSBydW4gZGlkIG5vdCByZXR1cm4gdGhlIGV4cGVjdGVkIHZlcnNpb24gdmFsdWUgdmlhICR7c2V0dGluZ3NQYXRofWAsXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gdmVyaWZ5Q29udGV4dFJvdyhyZXBvUm9vdDogc3RyaW5nKTogUHJvbWlzZTxWZXJpZnlSb3c+IHtcbiAgY29uc3QgY29sbGFwc2VTb3VyY2UgPSByZWFkU291cmNlKFxuICAgIHJlcG9Sb290LFxuICAgICdzcmMnLFxuICAgICdzZXJ2aWNlcycsXG4gICAgJ2NvbnRleHRDb2xsYXBzZScsXG4gICAgJ2luZGV4LnRzJyxcbiAgKVxuICBjb25zdCBzbmlwQ29tcGFjdFNvdXJjZSA9IHJlYWRTb3VyY2UoXG4gICAgcmVwb1Jvb3QsXG4gICAgJ3NyYycsXG4gICAgJ3NlcnZpY2VzJyxcbiAgICAnY29tcGFjdCcsXG4gICAgJ3NuaXBDb21wYWN0LnRzJyxcbiAgKVxuICBjb25zdCBzbmlwUHJvamVjdGlvblNvdXJjZSA9IHJlYWRTb3VyY2UoXG4gICAgcmVwb1Jvb3QsXG4gICAgJ3NyYycsXG4gICAgJ3NlcnZpY2VzJyxcbiAgICAnY29tcGFjdCcsXG4gICAgJ3NuaXBQcm9qZWN0aW9uLnRzJyxcbiAgKVxuXG4gIGNvbnN0IG9rID1cbiAgICBjb2xsYXBzZVNvdXJjZS5pbmNsdWRlcygnYXBwbHlDb2xsYXBzZXNJZk5lZWRlZCcpICYmXG4gICAgY29sbGFwc2VTb3VyY2UuaW5jbHVkZXMoJ3JlY292ZXJGcm9tT3ZlcmZsb3cnKSAmJlxuICAgIHNuaXBDb21wYWN0U291cmNlLmluY2x1ZGVzKCd0cmltTWVzc2FnZXNUb1RhcmdldFRva2VucycpICYmXG4gICAgc25pcENvbXBhY3RTb3VyY2UuaW5jbHVkZXMoJ1NOSVBfQk9VTkRBUllfU1VCVFlQRScpICYmXG4gICAgc25pcFByb2plY3Rpb25Tb3VyY2UuaW5jbHVkZXMoJ2lzU25pcEJvdW5kYXJ5TWVzc2FnZUltcGwnKVxuXG4gIHJldHVybiB7XG4gICAgbW9kdWxlOiAnXHU0RTBBXHU0RTBCXHU2NTg3XHU3QkExXHU3NDA2JyxcbiAgICBzdGF0dXM6IG9rID8gJ1BBU1MnIDogJ0ZBSUwnLFxuICAgIGRldGFpbDogb2tcbiAgICAgID8gJ2F1dG9jb21wYWN0IC8gbWljcm9jb21wYWN0IC8gc25pcCBzb3VyY2VzIGFyZSBwcmVzZW50IGluIGxlYWtlZCBzcmMnXG4gICAgICA6ICdjb250ZXh0IGNvbGxhcHNlIG9yIHNuaXAgaW1wbGVtZW50YXRpb24gaXMgaW5jb21wbGV0ZScsXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gdmVyaWZ5TWVzc2FnZVN5c3RlbVJvdygpOiBQcm9taXNlPFZlcmlmeVJvdz4ge1xuICBjb25zdCBtZXNzYWdlID0gY3JlYXRlVXNlck1lc3NhZ2UoeyBjb250ZW50OiAndmVyaWZ5LW1lc3NhZ2UnIH0pXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVNZXNzYWdlcyhbbWVzc2FnZV0pXG4gIGNvbnN0IG9rID1cbiAgICBtZXNzYWdlLnR5cGUgPT09ICd1c2VyJyAmJlxuICAgIEFycmF5LmlzQXJyYXkobm9ybWFsaXplZCkgJiZcbiAgICBub3JtYWxpemVkLmxlbmd0aCA+IDAgJiZcbiAgICBub3JtYWxpemVkWzBdPy50eXBlID09PSAndXNlcidcblxuICByZXR1cm4ge1xuICAgIG1vZHVsZTogJ1x1NkQ4OFx1NjA2Rlx1N0NGQlx1N0VERicsXG4gICAgc3RhdHVzOiBvayA/ICdQQVNTJyA6ICdGQUlMJyxcbiAgICBkZXRhaWw6IG9rXG4gICAgICA/ICdjcmVhdGVVc2VyTWVzc2FnZSgpIGFuZCBub3JtYWxpemVNZXNzYWdlcygpIGFyZSBmdW5jdGlvbmluZydcbiAgICAgIDogJ21lc3NhZ2UgY3JlYXRpb24gb3Igbm9ybWFsaXphdGlvbiBmYWlsZWQnLFxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHZlcmlmeU1jcFJvdyhyZXBvUm9vdDogc3RyaW5nKTogUHJvbWlzZTxWZXJpZnlSb3c+IHtcbiAgY29uc3QgbWNwTW9kdWxlID0gYXdhaXQgaW1wb3J0KCcuLi8uLi9zZXJ2aWNlcy9tY3AvY2xpZW50LmpzJylcbiAgY29uc3QgdG9vbHNTb3VyY2UgPSByZWFkU291cmNlKHJlcG9Sb290LCAnc3JjJywgJ3Rvb2xzLnRzJylcbiAgY29uc3Qgb2sgPVxuICAgIHR5cGVvZiBtY3BNb2R1bGUuZ2V0TWNwVG9vbHNDb21tYW5kc0FuZFJlc291cmNlcyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHRvb2xzU291cmNlLmluY2x1ZGVzKCdMaXN0TWNwUmVzb3VyY2VzVG9vbCcpICYmXG4gICAgdG9vbHNTb3VyY2UuaW5jbHVkZXMoJ1JlYWRNY3BSZXNvdXJjZVRvb2wnKVxuXG4gIHJldHVybiB7XG4gICAgbW9kdWxlOiAnTUNQIFx1NjUyRlx1NjMwMScsXG4gICAgc3RhdHVzOiBvayA/ICdQQVNTJyA6ICdGQUlMJyxcbiAgICBkZXRhaWw6IG9rXG4gICAgICA/ICdNQ1AgY2xpZW50IGhlbHBlcnMgYW5kIE1DUCByZXNvdXJjZSB0b29scyBhcmUgbG9hZGFibGUnXG4gICAgICA6ICdNQ1AgY2xpZW50IGhlbHBlcnMgb3IgTUNQIHRvb2xzIGFyZSBtaXNzaW5nJyxcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiB2ZXJpZnlTZXNzaW9uSGlzdG9yeVJvdyhyZXBvUm9vdDogc3RyaW5nKTogUHJvbWlzZTxWZXJpZnlSb3c+IHtcbiAgY29uc3Qgc2Vzc2lvbk1vZHVsZSA9IGF3YWl0IGltcG9ydCgnLi4vLi4vdXRpbHMvc2Vzc2lvblN0b3JhZ2UuanMnKVxuICBjb25zdCBzb3VyY2UgPSByZWFkU291cmNlKHJlcG9Sb290LCAnc3JjJywgJ3V0aWxzJywgJ3Nlc3Npb25TdG9yYWdlLnRzJylcbiAgY29uc3Qgb2sgPVxuICAgIHR5cGVvZiBzZXNzaW9uTW9kdWxlLmxvYWRUcmFuc2NyaXB0RnJvbUZpbGUgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2Ygc2Vzc2lvbk1vZHVsZS5zYXZlTW9kZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHNvdXJjZS5pbmNsdWRlcygnanNvbmwnKVxuXG4gIHJldHVybiB7XG4gICAgbW9kdWxlOiAnU2Vzc2lvbi9IaXN0b3J5JyxcbiAgICBzdGF0dXM6IG9rID8gJ1BBU1MnIDogJ0ZBSUwnLFxuICAgIGRldGFpbDogb2tcbiAgICAgID8gJ3Nlc3Npb25TdG9yYWdlIGV4cG9ydHMgdHJhbnNjcmlwdC9oaXN0b3J5IGhlbHBlcnMgd2l0aCBKU09OTCBwZXJzaXN0ZW5jZSBjb2RlJ1xuICAgICAgOiAnc2Vzc2lvbi9oaXN0b3J5IGhlbHBlcnMgYXJlIGluY29tcGxldGUnLFxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHZlcmlmeVBlcm1pc3Npb25zUm93KHJlcG9Sb290OiBzdHJpbmcpOiBQcm9taXNlPFZlcmlmeVJvdz4ge1xuICBjb25zdCBjb250ZXh0ID0gZ2V0RW1wdHlUb29sUGVybWlzc2lvbkNvbnRleHQoKVxuICBjb25zdCBwZXJtaXNzaW9uc1NvdXJjZSA9IHJlYWRTb3VyY2UoXG4gICAgcmVwb1Jvb3QsXG4gICAgJ3NyYycsXG4gICAgJ3V0aWxzJyxcbiAgICAncGVybWlzc2lvbnMnLFxuICAgICdwZXJtaXNzaW9ucy50cycsXG4gIClcbiAgY29uc3Qgb2sgPVxuICAgIEFycmF5LmlzQXJyYXkoZ2V0QWxsb3dSdWxlcyhjb250ZXh0KSkgJiZcbiAgICBBcnJheS5pc0FycmF5KGdldERlbnlSdWxlcyhjb250ZXh0KSkgJiZcbiAgICBwZXJtaXNzaW9uc1NvdXJjZS5pbmNsdWRlcygnQ2FuVXNlVG9vbEZuJylcblxuICByZXR1cm4ge1xuICAgIG1vZHVsZTogJ1x1Njc0M1x1OTY1MFx1N0NGQlx1N0VERicsXG4gICAgc3RhdHVzOiBvayA/ICdQQVNTJyA6ICdGQUlMJyxcbiAgICBkZXRhaWw6IG9rXG4gICAgICA/ICdwZXJtaXNzaW9uIGhlbHBlcnMgbG9hZCBhbmQgY2FuVXNlVG9vbCBjYWxsYmFjayB3aXJpbmcgaXMgcHJlc2VudCdcbiAgICAgIDogJ3Blcm1pc3Npb24gaGVscGVycyBvciBjYW5Vc2VUb29sIHdpcmluZyBpcyBpbmNvbXBsZXRlJyxcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiB2ZXJpZnlDb2RlU2NhbGVSb3cocmVwb1Jvb3Q6IHN0cmluZyk6IFByb21pc2U8VmVyaWZ5Um93PiB7XG4gIGNvbnN0IHNyY01ldHJpY3MgPSBjb3VudEZpbGVzQW5kQnl0ZXMocGF0aC5qb2luKHJlcG9Sb290LCAnc3JjJykpXG4gIGNvbnN0IGRpc3RNZXRyaWNzID0gY291bnRGaWxlc0FuZEJ5dGVzKHBhdGguam9pbihyZXBvUm9vdCwgJ2Rpc3QnKSlcbiAgY29uc3Qgb2sgPVxuICAgIHNyY01ldHJpY3MuZmlsZXMgPj0gMTgwMCAmJlxuICAgIHNyY01ldHJpY3MuYnl0ZXMgPj0gMzAgKiAxMDI0ICogMTAyNCAmJlxuICAgIGRpc3RNZXRyaWNzLmZpbGVzID4gMFxuXG4gIHJldHVybiB7XG4gICAgbW9kdWxlOiAnXHU0RUUzXHU3ODAxXHU4OUM0XHU2QTIxJyxcbiAgICBzdGF0dXM6IG9rID8gJ1BBU1MnIDogJ1BBUlRJQUwnLFxuICAgIGRldGFpbDogYHNyYz0ke3NyY01ldHJpY3MuZmlsZXN9IGZpbGVzIC8gJHtmb3JtYXRNZWdhYnl0ZXMoc3JjTWV0cmljcy5ieXRlcyl9LCBkaXN0PSR7ZGlzdE1ldHJpY3MuZmlsZXN9IGZpbGVzIC8gJHtmb3JtYXRNZWdhYnl0ZXMoZGlzdE1ldHJpY3MuYnl0ZXMpfWAsXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRUYWJsZShyb3dzOiBWZXJpZnlSb3dbXSk6IHZvaWQge1xuICBjb25zdCBtb2R1bGVXaWR0aCA9IE1hdGgubWF4KFxuICAgICdcdTZBMjFcdTU3NTcnLmxlbmd0aCxcbiAgICAuLi5yb3dzLm1hcChyb3cgPT4gcm93Lm1vZHVsZS5sZW5ndGgpLFxuICApXG4gIHByb2Nlc3Muc3Rkb3V0LndyaXRlKFxuICAgIGAkeydcdTZBMjFcdTU3NTcnLnBhZEVuZChtb2R1bGVXaWR0aCl9ICBcdTcyQjZcdTYwMDEgICAgICBcdThCRjRcdTY2MEVcXG5gLFxuICApXG4gIHByb2Nlc3Muc3Rkb3V0LndyaXRlKFxuICAgIGAkeyctJy5yZXBlYXQobW9kdWxlV2lkdGgpfSAgLS0tLS0tLS0gIC0tLS1cXG5gLFxuICApXG4gIGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcbiAgICBwcm9jZXNzLnN0ZG91dC53cml0ZShcbiAgICAgIGAke3Jvdy5tb2R1bGUucGFkRW5kKG1vZHVsZVdpZHRoKX0gICR7Zm9ybWF0U3RhdHVzKHJvdy5zdGF0dXMpfSAgJHtyb3cuZGV0YWlsfVxcbmAsXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlIYW5kbGVyKG9wdGlvbnM6IFZlcmlmeU9wdGlvbnMgPSB7fSk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCByZXBvUm9vdCA9IGZpbmRSZXBvUm9vdChwcm9jZXNzLmN3ZCgpKVxuICBjb25zdCByb3dzOiBWZXJpZnlSb3dbXSA9IFtdXG5cbiAgcm93cy5wdXNoKGF3YWl0IHZlcmlmeVRvb2xzUm93KHJlcG9Sb290KSlcbiAgcm93cy5wdXNoKGF3YWl0IHZlcmlmeVF1ZXJ5RW5naW5lUm93KCkpXG4gIHJvd3MucHVzaChhd2FpdCB2ZXJpZnlRdWVyeUZ1bmN0aW9uUm93KCkpXG4gIHJvd3MucHVzaChhd2FpdCB2ZXJpZnlBcGlDbGllbnRSb3cocmVwb1Jvb3QsIG9wdGlvbnMpKVxuICByb3dzLnB1c2goYXdhaXQgdmVyaWZ5VG9vbFNjaGVtYVJvdygpKVxuICByb3dzLnB1c2goYXdhaXQgdmVyaWZ5QmFzaFRvb2xSb3cocmVwb1Jvb3QpKVxuICByb3dzLnB1c2goYXdhaXQgdmVyaWZ5UmVhZFRvb2xSb3cocmVwb1Jvb3QpKVxuICByb3dzLnB1c2goYXdhaXQgdmVyaWZ5R2xvYlRvb2xSb3cocmVwb1Jvb3QpKVxuICByb3dzLnB1c2goYXdhaXQgdmVyaWZ5R3JlcFRvb2xSb3cocmVwb1Jvb3QpKVxuICByb3dzLnB1c2goYXdhaXQgdmVyaWZ5QWdlbnRMb29wUm93KHJlcG9Sb290LCBvcHRpb25zKSlcbiAgcm93cy5wdXNoKGF3YWl0IHZlcmlmeUNvbnRleHRSb3cocmVwb1Jvb3QpKVxuICByb3dzLnB1c2goYXdhaXQgdmVyaWZ5TWVzc2FnZVN5c3RlbVJvdygpKVxuICByb3dzLnB1c2goYXdhaXQgdmVyaWZ5TWNwUm93KHJlcG9Sb290KSlcbiAgcm93cy5wdXNoKGF3YWl0IHZlcmlmeVNlc3Npb25IaXN0b3J5Um93KHJlcG9Sb290KSlcbiAgcm93cy5wdXNoKGF3YWl0IHZlcmlmeVBlcm1pc3Npb25zUm93KHJlcG9Sb290KSlcbiAgcm93cy5wdXNoKGF3YWl0IHZlcmlmeUNvZGVTY2FsZVJvdyhyZXBvUm9vdCkpXG5cbiAgY29uc3Qgc3VtbWFyeSA9IHJvd3MucmVkdWNlKFxuICAgIChhY2MsIHJvdykgPT4ge1xuICAgICAgYWNjW3Jvdy5zdGF0dXNdICs9IDFcbiAgICAgIHJldHVybiBhY2NcbiAgICB9LFxuICAgIHsgUEFTUzogMCwgUEFSVElBTDogMCwgRkFJTDogMCB9IGFzIFJlY29yZDxWZXJpZnlTdGF0dXMsIG51bWJlcj4sXG4gIClcblxuICBpZiAob3B0aW9ucy5qc29uKSB7XG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoXG4gICAgICBKU09OLnN0cmluZ2lmeShcbiAgICAgICAge1xuICAgICAgICAgIHJlcG9Sb290LFxuICAgICAgICAgIGdlbmVyYXRlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgcm93cyxcbiAgICAgICAgICBzdW1tYXJ5LFxuICAgICAgICB9LFxuICAgICAgICBudWxsLFxuICAgICAgICAyLFxuICAgICAgKSArICdcXG4nLFxuICAgIClcbiAgfSBlbHNlIHtcbiAgICBwcmludFRhYmxlKHJvd3MpXG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoXG4gICAgICBgXFxuU3VtbWFyeTogUEFTUz0ke3N1bW1hcnkuUEFTU30gUEFSVElBTD0ke3N1bW1hcnkuUEFSVElBTH0gRkFJTD0ke3N1bW1hcnkuRkFJTH1cXG5gLFxuICAgIClcbiAgICBpZiAoc3VtbWFyeS5QQVJUSUFMID4gMCB8fCBzdW1tYXJ5LkZBSUwgPiAwKSB7XG4gICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZShcbiAgICAgICAgJ1Jlc3VsdDogY3VycmVudCByZXBvc2l0b3J5IHN0YXRlIGRvZXMgbm90IHlldCBmdWxseSBzYXRpc2Z5IGV2ZXJ5IHJvdyBpbiB0aGUgdGFyZ2V0IHRhYmxlLlxcbicsXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKFxuICAgICAgICAnUmVzdWx0OiBjdXJyZW50IHJlcG9zaXRvcnkgc3RhdGUgc2F0aXNmaWVzIGV2ZXJ5IHJvdyBpbiB0aGUgdGFyZ2V0IHRhYmxlLlxcbicsXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcHJvY2Vzcy5leGl0KHN1bW1hcnkuUEFSVElBTCA+IDAgfHwgc3VtbWFyeS5GQUlMID4gMCA/IDEgOiAwKVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
