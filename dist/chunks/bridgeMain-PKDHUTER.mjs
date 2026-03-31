#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  createCapacityWake
} from "./chunk-ZTYOR7T4.mjs";
import {
  getPollIntervalConfig
} from "./chunk-QEH65IKZ.mjs";
import {
  buildCCRv2SdkUrl,
  buildSdkUrl,
  decodeWorkSecret,
  registerWorker,
  sameSessionId
} from "./chunk-LD7DS2YH.mjs";
import {
  createTokenRefreshScheduler
} from "./chunk-AWPTVMZY.mjs";
import {
  init_qrcode,
  toString
} from "./chunk-SST3HAV6.mjs";
import {
  BridgeFatalError,
  FAILED_FOOTER_TEXT,
  TOOL_DISPLAY_EXPIRY_MS,
  buildActiveFooterText,
  buildBridgeConnectUrl,
  buildBridgeSessionUrl,
  buildIdleFooterText,
  createAgentWorktree,
  createBridgeApiClient,
  getRemoteSessionUrl,
  init_bridgeApi,
  init_bridgeStatusUtil,
  init_product,
  init_worktree,
  isExpiredErrorType,
  isSuppressible403,
  removeAgentWorktree,
  timestamp,
  validateBridgeId,
  wrapWithOsc8Link
} from "./chunk-OPLSBIOC.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-SR5JKAMQ.mjs";
import "./chunk-RUHH7ZNU.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-P2O4HXJJ.mjs";
import "./chunk-ADZQUMT7.mjs";
import "./chunk-GYT5IJSH.mjs";
import {
  BRIDGE_LOGIN_ERROR,
  DEFAULT_SESSION_TIMEOUT_MS,
  init_types
} from "./chunk-3MNWUNDS.mjs";
import {
  debugTruncate,
  describeAxiosError,
  init_debugUtils,
  init_sessionIdCompat,
  toCompatSessionId,
  toInfraSessionId
} from "./chunk-M22WMPMZ.mjs";
import "./chunk-66JTK2MJ.mjs";
import "./chunk-2LTMY2QU.mjs";
import "./chunk-WJKMR27I.mjs";
import {
  init_datadog,
  shutdownDatadog
} from "./chunk-EATKTAOV.mjs";
import "./chunk-AB7U5P7O.mjs";
import "./chunk-SEJU7JU7.mjs";
import "./chunk-ABRSTIS2.mjs";
import "./chunk-L22EUB4Z.mjs";
import "./chunk-NE3WJ556.mjs";
import "./chunk-4BEDQUYS.mjs";
import "./chunk-I4JSDM2A.mjs";
import "./chunk-GQIWFVMV.mjs";
import "./chunk-R2NMUWG6.mjs";
import "./chunk-XTFZIHQR.mjs";
import "./chunk-X6KULBXG.mjs";
import "./chunk-ORS2TTME.mjs";
import "./chunk-IAEMXMG4.mjs";
import "./chunk-WZXBZQWR.mjs";
import "./chunk-J7TDGLE4.mjs";
import "./chunk-HUHT3U2I.mjs";
import "./chunk-MPXK3SNP.mjs";
import "./chunk-C5B5VR2F.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-L4LQXE4X.mjs";
import "./chunk-H6COQF52.mjs";
import "./chunk-5DUAEYU5.mjs";
import {
  getTrustedDeviceToken,
  init_trustedDevice
} from "./chunk-4HSGHMYS.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import "./chunk-IVRGECFY.mjs";
import "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  BRIDGE_FAILED_INDICATOR,
  BRIDGE_READY_INDICATOR,
  BRIDGE_SPINNER_FRAMES,
  checkGate_CACHED_OR_BLOCKING,
  init_figures,
  init_firstPartyEventLogger,
  init_growthbook,
  init_source,
  shutdown1PEventLogging,
  source_default
} from "./chunk-Z6CSO4BY.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-Q64VCQQA.mjs";
import "./chunk-DNXEQXI7.mjs";
import "./chunk-ZPEBVZEB.mjs";
import {
  init_sleep,
  sleep
} from "./chunk-DQ5JTCOA.mjs";
import "./chunk-HGPSKCV5.mjs";
import "./chunk-GC6TKYZ3.mjs";
import "./chunk-GHLJY6GK.mjs";
import "./chunk-PPND3F3V.mjs";
import "./chunk-BKRSSLV2.mjs";
import "./chunk-AHENZQLB.mjs";
import "./chunk-HQK4A2IB.mjs";
import "./chunk-SVUOOEVR.mjs";
import "./chunk-XFYUWZYI.mjs";
import {
  init_bundledMode,
  isInBundledMode
} from "./chunk-JOMSGAK7.mjs";
import "./chunk-3PS62SCS.mjs";
import "./chunk-SFCRD75C.mjs";
import "./chunk-QFFW7MQ2.mjs";
import "./chunk-3AEW3KDQ.mjs";
import {
  formatDuration,
  init_format,
  init_stringWidth,
  stringWidth,
  truncateToWidth
} from "./chunk-OGGCTXYU.mjs";
import {
  init_analytics,
  logEvent,
  logEventAsync
} from "./chunk-MDXHK5AD.mjs";
import "./chunk-SETG7O3F.mjs";
import "./chunk-J6MJ6UVK.mjs";
import "./chunk-PKIVPZJM.mjs";
import "./chunk-JXCG2JDO.mjs";
import "./chunk-N62V5C2K.mjs";
import {
  init_diagLogs,
  logForDiagnosticsNoPII
} from "./chunk-7SC6PTLR.mjs";
import "./chunk-NT7W7YWD.mjs";
import "./chunk-4S33EKPF.mjs";
import "./chunk-VNIROYYL.mjs";
import "./chunk-TZFTPSMG.mjs";
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-IPMELYAB.mjs";
import "./chunk-F5ODCUJD.mjs";
import "./chunk-ZAYB3WZV.mjs";
import {
  errorMessage,
  init_debug,
  init_errors,
  init_slowOperations,
  jsonParse,
  jsonStringify,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import {
  feature,
  init_bun_bundle
} from "./chunk-OU3SZVVB.mjs";
import "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import {
  init_envUtils,
  isEnvTruthy,
  isInProtectedNamespace
} from "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import "./chunk-O5PZ3G6I.mjs";

// src/bridge/bridgeMain.ts
init_bun_bundle();
init_product();
init_datadog();
init_firstPartyEventLogger();
init_growthbook();
init_analytics();
init_bundledMode();
init_debug();
init_diagLogs();
init_envUtils();
init_errors();
init_format();
init_log();
init_sleep();
init_worktree();
init_bridgeApi();
init_bridgeStatusUtil();
import { randomUUID } from "crypto";
import { hostname, tmpdir as tmpdir2 } from "os";
import { basename, join as join2, resolve } from "path";

// src/bridge/bridgeUI.ts
init_source();
init_qrcode();
init_figures();
init_stringWidth();
init_debug();
init_bridgeStatusUtil();
var QR_OPTIONS = {
  type: "utf8",
  errorCorrectionLevel: "L",
  small: true
};
async function generateQr(url) {
  const qr = await toString(url, QR_OPTIONS);
  return qr.split("\n").filter((line) => line.length > 0);
}
function createBridgeLogger(options) {
  const write = options.write ?? ((s) => process.stdout.write(s));
  const verbose = options.verbose;
  let statusLineCount = 0;
  let currentState = "idle";
  let currentStateText = "Ready";
  let repoName = "";
  let branch = "";
  let debugLogPath = "";
  let connectUrl = "";
  let cachedIngressUrl = "";
  let cachedEnvironmentId = "";
  let activeSessionUrl = null;
  let qrLines = [];
  let qrVisible = false;
  let lastToolSummary = null;
  let lastToolTime = 0;
  let sessionActive = 0;
  let sessionMax = 1;
  let spawnModeDisplay = null;
  let spawnMode = "single-session";
  const sessionDisplayInfo = /* @__PURE__ */ new Map();
  let connectingTimer = null;
  let connectingTick = 0;
  function countVisualLines(text) {
    const cols = process.stdout.columns || 80;
    let count = 0;
    for (const logical of text.split("\n")) {
      if (logical.length === 0) {
        count++;
        continue;
      }
      const width = stringWidth(logical);
      count += Math.max(1, Math.ceil(width / cols));
    }
    if (text.endsWith("\n")) {
      count--;
    }
    return count;
  }
  function writeStatus(text) {
    write(text);
    statusLineCount += countVisualLines(text);
  }
  function clearStatusLines() {
    if (statusLineCount <= 0) return;
    logForDebugging(`[bridge:ui] clearStatusLines count=${statusLineCount}`);
    write(`\x1B[${statusLineCount}A`);
    write("\x1B[J");
    statusLineCount = 0;
  }
  function printLog(line) {
    clearStatusLines();
    write(line);
  }
  function regenerateQr(url) {
    generateQr(url).then((lines) => {
      qrLines = lines;
      renderStatusLine();
    }).catch((e) => {
      logForDebugging(`QR code generation failed: ${e}`, { level: "error" });
    });
  }
  function renderConnectingLine() {
    clearStatusLines();
    const frame = BRIDGE_SPINNER_FRAMES[connectingTick % BRIDGE_SPINNER_FRAMES.length];
    let suffix = "";
    if (repoName) {
      suffix += source_default.dim(" \xB7 ") + source_default.dim(repoName);
    }
    if (branch) {
      suffix += source_default.dim(" \xB7 ") + source_default.dim(branch);
    }
    writeStatus(
      `${source_default.yellow(frame)} ${source_default.yellow("Connecting")}${suffix}
`
    );
  }
  function startConnecting() {
    stopConnecting();
    renderConnectingLine();
    connectingTimer = setInterval(() => {
      connectingTick++;
      renderConnectingLine();
    }, 150);
  }
  function stopConnecting() {
    if (connectingTimer) {
      clearInterval(connectingTimer);
      connectingTimer = null;
    }
  }
  function renderStatusLine() {
    if (currentState === "reconnecting" || currentState === "failed") {
      return;
    }
    clearStatusLines();
    const isIdle = currentState === "idle";
    if (qrVisible) {
      for (const line of qrLines) {
        writeStatus(`${source_default.dim(line)}
`);
      }
    }
    const indicator = BRIDGE_READY_INDICATOR;
    const indicatorColor = isIdle ? source_default.green : source_default.cyan;
    const baseColor = isIdle ? source_default.green : source_default.cyan;
    const stateText = baseColor(currentStateText);
    let suffix = "";
    if (repoName) {
      suffix += source_default.dim(" \xB7 ") + source_default.dim(repoName);
    }
    if (branch && spawnMode !== "worktree") {
      suffix += source_default.dim(" \xB7 ") + source_default.dim(branch);
    }
    if (process.env.USER_TYPE === "ant" && debugLogPath) {
      writeStatus(
        `${source_default.yellow("[ANT-ONLY] Logs:")} ${source_default.dim(debugLogPath)}
`
      );
    }
    writeStatus(`${indicatorColor(indicator)} ${stateText}${suffix}
`);
    if (sessionMax > 1) {
      const modeHint = spawnMode === "worktree" ? "New sessions will be created in an isolated worktree" : "New sessions will be created in the current directory";
      writeStatus(
        `    ${source_default.dim(`Capacity: ${sessionActive}/${sessionMax} \xB7 ${modeHint}`)}
`
      );
      for (const [, info] of sessionDisplayInfo) {
        const titleText = info.title ? truncateToWidth(info.title, 35) : source_default.dim("Attached");
        const titleLinked = wrapWithOsc8Link(titleText, info.url);
        const act = info.activity;
        const showAct = act && act.type !== "result" && act.type !== "error";
        const actText = showAct ? source_default.dim(` ${truncateToWidth(act.summary, 40)}`) : "";
        writeStatus(`    ${titleLinked}${actText}
`);
      }
    }
    if (sessionMax === 1) {
      const modeText = spawnMode === "single-session" ? "Single session \xB7 exits when complete" : spawnMode === "worktree" ? `Capacity: ${sessionActive}/1 \xB7 New sessions will be created in an isolated worktree` : `Capacity: ${sessionActive}/1 \xB7 New sessions will be created in the current directory`;
      writeStatus(`    ${source_default.dim(modeText)}
`);
    }
    if (sessionMax === 1 && !isIdle && lastToolSummary && Date.now() - lastToolTime < TOOL_DISPLAY_EXPIRY_MS) {
      writeStatus(`  ${source_default.dim(truncateToWidth(lastToolSummary, 60))}
`);
    }
    const url = activeSessionUrl ?? connectUrl;
    if (url) {
      writeStatus("\n");
      const footerText = isIdle ? buildIdleFooterText(url) : buildActiveFooterText(url);
      const qrHint = qrVisible ? source_default.dim.italic("space to hide QR code") : source_default.dim.italic("space to show QR code");
      const toggleHint = spawnModeDisplay ? source_default.dim.italic(" \xB7 w to toggle spawn mode") : "";
      writeStatus(`${source_default.dim(footerText)}
`);
      writeStatus(`${qrHint}${toggleHint}
`);
    }
  }
  return {
    printBanner(config, environmentId) {
      cachedIngressUrl = config.sessionIngressUrl;
      cachedEnvironmentId = environmentId;
      connectUrl = buildBridgeConnectUrl(environmentId, cachedIngressUrl);
      regenerateQr(connectUrl);
      if (verbose) {
        write(source_default.dim(`Remote Control`) + ` v${MACRO.VERSION}
`);
      }
      if (verbose) {
        if (config.spawnMode !== "single-session") {
          write(source_default.dim(`Spawn mode: `) + `${config.spawnMode}
`);
          write(
            source_default.dim(`Max concurrent sessions: `) + `${config.maxSessions}
`
          );
        }
        write(source_default.dim(`Environment ID: `) + `${environmentId}
`);
      }
      if (config.sandbox) {
        write(source_default.dim(`Sandbox: `) + `${source_default.green("Enabled")}
`);
      }
      write("\n");
      startConnecting();
    },
    logSessionStart(sessionId, prompt) {
      if (verbose) {
        const short = truncateToWidth(prompt, 80);
        printLog(
          source_default.dim(`[${timestamp()}]`) + ` Session started: ${source_default.white(`"${short}"`)} (${source_default.dim(sessionId)})
`
        );
      }
    },
    logSessionComplete(sessionId, durationMs) {
      printLog(
        source_default.dim(`[${timestamp()}]`) + ` Session ${source_default.green("completed")} (${formatDuration(durationMs)}) ${source_default.dim(sessionId)}
`
      );
    },
    logSessionFailed(sessionId, error) {
      printLog(
        source_default.dim(`[${timestamp()}]`) + ` Session ${source_default.red("failed")}: ${error} ${source_default.dim(sessionId)}
`
      );
    },
    logStatus(message) {
      printLog(source_default.dim(`[${timestamp()}]`) + ` ${message}
`);
    },
    logVerbose(message) {
      if (verbose) {
        printLog(source_default.dim(`[${timestamp()}] ${message}`) + "\n");
      }
    },
    logError(message) {
      printLog(source_default.red(`[${timestamp()}] Error: ${message}`) + "\n");
    },
    logReconnected(disconnectedMs) {
      printLog(
        source_default.dim(`[${timestamp()}]`) + ` ${source_default.green("Reconnected")} after ${formatDuration(disconnectedMs)}
`
      );
    },
    setRepoInfo(repo, branchName) {
      repoName = repo;
      branch = branchName;
    },
    setDebugLogPath(path) {
      debugLogPath = path;
    },
    updateIdleStatus() {
      stopConnecting();
      currentState = "idle";
      currentStateText = "Ready";
      lastToolSummary = null;
      lastToolTime = 0;
      activeSessionUrl = null;
      regenerateQr(connectUrl);
      renderStatusLine();
    },
    setAttached(sessionId) {
      stopConnecting();
      currentState = "attached";
      currentStateText = "Connected";
      lastToolSummary = null;
      lastToolTime = 0;
      if (sessionMax <= 1) {
        activeSessionUrl = buildBridgeSessionUrl(
          sessionId,
          cachedEnvironmentId,
          cachedIngressUrl
        );
        regenerateQr(activeSessionUrl);
      }
      renderStatusLine();
    },
    updateReconnectingStatus(delayStr, elapsedStr) {
      stopConnecting();
      clearStatusLines();
      currentState = "reconnecting";
      if (qrVisible) {
        for (const line of qrLines) {
          writeStatus(`${source_default.dim(line)}
`);
        }
      }
      const frame = BRIDGE_SPINNER_FRAMES[connectingTick % BRIDGE_SPINNER_FRAMES.length];
      connectingTick++;
      writeStatus(
        `${source_default.yellow(frame)} ${source_default.yellow("Reconnecting")} ${source_default.dim("\xB7")} ${source_default.dim(`retrying in ${delayStr}`)} ${source_default.dim("\xB7")} ${source_default.dim(`disconnected ${elapsedStr}`)}
`
      );
    },
    updateFailedStatus(error) {
      stopConnecting();
      clearStatusLines();
      currentState = "failed";
      let suffix = "";
      if (repoName) {
        suffix += source_default.dim(" \xB7 ") + source_default.dim(repoName);
      }
      if (branch) {
        suffix += source_default.dim(" \xB7 ") + source_default.dim(branch);
      }
      writeStatus(
        `${source_default.red(BRIDGE_FAILED_INDICATOR)} ${source_default.red("Remote Control Failed")}${suffix}
`
      );
      writeStatus(`${source_default.dim(FAILED_FOOTER_TEXT)}
`);
      if (error) {
        writeStatus(`${source_default.red(error)}
`);
      }
    },
    updateSessionStatus(_sessionId, _elapsed, activity, _trail) {
      if (activity.type === "tool_start") {
        lastToolSummary = activity.summary;
        lastToolTime = Date.now();
      }
      renderStatusLine();
    },
    clearStatus() {
      stopConnecting();
      clearStatusLines();
    },
    toggleQr() {
      qrVisible = !qrVisible;
      renderStatusLine();
    },
    updateSessionCount(active, max, mode) {
      if (sessionActive === active && sessionMax === max && spawnMode === mode)
        return;
      sessionActive = active;
      sessionMax = max;
      spawnMode = mode;
    },
    setSpawnModeDisplay(mode) {
      if (spawnModeDisplay === mode) return;
      spawnModeDisplay = mode;
      if (mode) spawnMode = mode;
    },
    addSession(sessionId, url) {
      sessionDisplayInfo.set(sessionId, { url });
    },
    updateSessionActivity(sessionId, activity) {
      const info = sessionDisplayInfo.get(sessionId);
      if (!info) return;
      info.activity = activity;
    },
    setSessionTitle(sessionId, title) {
      const info = sessionDisplayInfo.get(sessionId);
      if (!info) return;
      info.title = title;
      if (currentState === "reconnecting" || currentState === "failed") return;
      if (sessionMax === 1) {
        currentState = "titled";
        currentStateText = truncateToWidth(title, 40);
      }
      renderStatusLine();
    },
    removeSession(sessionId) {
      sessionDisplayInfo.delete(sessionId);
    },
    refreshDisplay() {
      if (currentState === "reconnecting" || currentState === "failed") return;
      renderStatusLine();
    }
  };
}

// src/bridge/bridgeMain.ts
init_debugUtils();
init_sessionIdCompat();

// src/bridge/sessionRunner.ts
init_slowOperations();
init_debugUtils();
import { spawn } from "child_process";
import { createWriteStream } from "fs";
import { tmpdir } from "os";
import { dirname, join } from "path";
import { createInterface } from "readline";
var MAX_ACTIVITIES = 10;
var MAX_STDERR_LINES = 10;
function safeFilenameId(id) {
  return id.replace(/[^a-zA-Z0-9_-]/g, "_");
}
var TOOL_VERBS = {
  Read: "Reading",
  Write: "Writing",
  Edit: "Editing",
  MultiEdit: "Editing",
  Bash: "Running",
  Glob: "Searching",
  Grep: "Searching",
  WebFetch: "Fetching",
  WebSearch: "Searching",
  Task: "Running task",
  FileReadTool: "Reading",
  FileWriteTool: "Writing",
  FileEditTool: "Editing",
  GlobTool: "Searching",
  GrepTool: "Searching",
  BashTool: "Running",
  NotebookEditTool: "Editing notebook",
  LSP: "LSP"
};
function toolSummary(name, input) {
  const verb = TOOL_VERBS[name] ?? name;
  const target = input.file_path ?? input.filePath ?? input.pattern ?? input.command?.slice(0, 60) ?? input.url ?? input.query ?? "";
  if (target) {
    return `${verb} ${target}`;
  }
  return verb;
}
function extractActivities(line, sessionId, onDebug) {
  let parsed;
  try {
    parsed = jsonParse(line);
  } catch {
    return [];
  }
  if (!parsed || typeof parsed !== "object") {
    return [];
  }
  const msg = parsed;
  const activities = [];
  const now = Date.now();
  switch (msg.type) {
    case "assistant": {
      const message = msg.message;
      if (!message) break;
      const content = message.content;
      if (!Array.isArray(content)) break;
      for (const block of content) {
        if (!block || typeof block !== "object") continue;
        const b = block;
        if (b.type === "tool_use") {
          const name = b.name ?? "Tool";
          const input = b.input ?? {};
          const summary = toolSummary(name, input);
          activities.push({
            type: "tool_start",
            summary,
            timestamp: now
          });
          onDebug(
            `[bridge:activity] sessionId=${sessionId} tool_use name=${name} ${inputPreview(input)}`
          );
        } else if (b.type === "text") {
          const text = b.text ?? "";
          if (text.length > 0) {
            activities.push({
              type: "text",
              summary: text.slice(0, 80),
              timestamp: now
            });
            onDebug(
              `[bridge:activity] sessionId=${sessionId} text "${text.slice(0, 100)}"`
            );
          }
        }
      }
      break;
    }
    case "result": {
      const subtype = msg.subtype;
      if (subtype === "success") {
        activities.push({
          type: "result",
          summary: "Session completed",
          timestamp: now
        });
        onDebug(
          `[bridge:activity] sessionId=${sessionId} result subtype=success`
        );
      } else if (subtype) {
        const errors = msg.errors;
        const errorSummary = errors?.[0] ?? `Error: ${subtype}`;
        activities.push({
          type: "error",
          summary: errorSummary,
          timestamp: now
        });
        onDebug(
          `[bridge:activity] sessionId=${sessionId} result subtype=${subtype} error="${errorSummary}"`
        );
      } else {
        onDebug(
          `[bridge:activity] sessionId=${sessionId} result subtype=undefined`
        );
      }
      break;
    }
    default:
      break;
  }
  return activities;
}
function extractUserMessageText(msg) {
  if (msg.parent_tool_use_id != null || msg.isSynthetic || msg.isReplay)
    return void 0;
  const message = msg.message;
  const content = message?.content;
  let text;
  if (typeof content === "string") {
    text = content;
  } else if (Array.isArray(content)) {
    for (const block of content) {
      if (block && typeof block === "object" && block.type === "text") {
        text = block.text;
        break;
      }
    }
  }
  text = text?.trim();
  return text ? text : void 0;
}
function inputPreview(input) {
  const parts = [];
  for (const [key, val] of Object.entries(input)) {
    if (typeof val === "string") {
      parts.push(`${key}="${val.slice(0, 100)}"`);
    }
    if (parts.length >= 3) break;
  }
  return parts.join(" ");
}
function createSessionSpawner(deps) {
  return {
    spawn(opts, dir) {
      const safeId = safeFilenameId(opts.sessionId);
      let debugFile;
      if (deps.debugFile) {
        const ext = deps.debugFile.lastIndexOf(".");
        if (ext > 0) {
          debugFile = `${deps.debugFile.slice(0, ext)}-${safeId}${deps.debugFile.slice(ext)}`;
        } else {
          debugFile = `${deps.debugFile}-${safeId}`;
        }
      } else if (deps.verbose || process.env.USER_TYPE === "ant") {
        debugFile = join(tmpdir(), "claude", `bridge-session-${safeId}.log`);
      }
      let transcriptStream = null;
      let transcriptPath;
      if (deps.debugFile) {
        transcriptPath = join(
          dirname(deps.debugFile),
          `bridge-transcript-${safeId}.jsonl`
        );
        transcriptStream = createWriteStream(transcriptPath, { flags: "a" });
        transcriptStream.on("error", (err) => {
          deps.onDebug(
            `[bridge:session] Transcript write error: ${err.message}`
          );
          transcriptStream = null;
        });
        deps.onDebug(`[bridge:session] Transcript log: ${transcriptPath}`);
      }
      const args = [
        ...deps.scriptArgs,
        "--print",
        "--sdk-url",
        opts.sdkUrl,
        "--session-id",
        opts.sessionId,
        "--input-format",
        "stream-json",
        "--output-format",
        "stream-json",
        "--replay-user-messages",
        ...deps.verbose ? ["--verbose"] : [],
        ...debugFile ? ["--debug-file", debugFile] : [],
        ...deps.permissionMode ? ["--permission-mode", deps.permissionMode] : []
      ];
      const env = {
        ...deps.env,
        // Strip the bridge's OAuth token so the child CC process uses
        // the session access token for inference instead.
        CLAUDE_CODE_OAUTH_TOKEN: void 0,
        CLAUDE_CODE_ENVIRONMENT_KIND: "bridge",
        ...deps.sandbox && { CLAUDE_CODE_FORCE_SANDBOX: "1" },
        CLAUDE_CODE_SESSION_ACCESS_TOKEN: opts.accessToken,
        // v1: HybridTransport (WS reads + POST writes) to Session-Ingress.
        // Harmless in v2 mode — transportUtils checks CLAUDE_CODE_USE_CCR_V2 first.
        CLAUDE_CODE_POST_FOR_SESSION_INGRESS_V2: "1",
        // v2: SSETransport + CCRClient to CCR's /v1/code/sessions/* endpoints.
        // Same env vars environment-manager sets in the container path.
        ...opts.useCcrV2 && {
          CLAUDE_CODE_USE_CCR_V2: "1",
          CLAUDE_CODE_WORKER_EPOCH: String(opts.workerEpoch)
        }
      };
      deps.onDebug(
        `[bridge:session] Spawning sessionId=${opts.sessionId} sdkUrl=${opts.sdkUrl} accessToken=${opts.accessToken ? "present" : "MISSING"}`
      );
      deps.onDebug(`[bridge:session] Child args: ${args.join(" ")}`);
      if (debugFile) {
        deps.onDebug(`[bridge:session] Debug log: ${debugFile}`);
      }
      const child = spawn(deps.execPath, args, {
        cwd: dir,
        stdio: ["pipe", "pipe", "pipe"],
        env,
        windowsHide: true
      });
      deps.onDebug(
        `[bridge:session] sessionId=${opts.sessionId} pid=${child.pid}`
      );
      const activities = [];
      let currentActivity = null;
      const lastStderr = [];
      let sigkillSent = false;
      let firstUserMessageSeen = false;
      if (child.stderr) {
        const stderrRl = createInterface({ input: child.stderr });
        stderrRl.on("line", (line) => {
          if (deps.verbose) {
            process.stderr.write(line + "\n");
          }
          if (lastStderr.length >= MAX_STDERR_LINES) {
            lastStderr.shift();
          }
          lastStderr.push(line);
        });
      }
      if (child.stdout) {
        const rl = createInterface({ input: child.stdout });
        rl.on("line", (line) => {
          if (transcriptStream) {
            transcriptStream.write(line + "\n");
          }
          deps.onDebug(
            `[bridge:ws] sessionId=${opts.sessionId} <<< ${debugTruncate(line)}`
          );
          if (deps.verbose) {
            process.stderr.write(line + "\n");
          }
          const extracted = extractActivities(
            line,
            opts.sessionId,
            deps.onDebug
          );
          for (const activity of extracted) {
            if (activities.length >= MAX_ACTIVITIES) {
              activities.shift();
            }
            activities.push(activity);
            currentActivity = activity;
            deps.onActivity?.(opts.sessionId, activity);
          }
          {
            let parsed;
            try {
              parsed = jsonParse(line);
            } catch {
            }
            if (parsed && typeof parsed === "object") {
              const msg = parsed;
              if (msg.type === "control_request") {
                const request = msg.request;
                if (request?.subtype === "can_use_tool" && deps.onPermissionRequest) {
                  deps.onPermissionRequest(
                    opts.sessionId,
                    parsed,
                    opts.accessToken
                  );
                }
              } else if (msg.type === "user" && !firstUserMessageSeen && opts.onFirstUserMessage) {
                const text = extractUserMessageText(msg);
                if (text) {
                  firstUserMessageSeen = true;
                  opts.onFirstUserMessage(text);
                }
              }
            }
          }
        });
      }
      const done = new Promise((resolve2) => {
        child.on("close", (code, signal) => {
          if (transcriptStream) {
            transcriptStream.end();
            transcriptStream = null;
          }
          if (signal === "SIGTERM" || signal === "SIGINT") {
            deps.onDebug(
              `[bridge:session] sessionId=${opts.sessionId} interrupted signal=${signal} pid=${child.pid}`
            );
            resolve2("interrupted");
          } else if (code === 0) {
            deps.onDebug(
              `[bridge:session] sessionId=${opts.sessionId} completed exit_code=0 pid=${child.pid}`
            );
            resolve2("completed");
          } else {
            deps.onDebug(
              `[bridge:session] sessionId=${opts.sessionId} failed exit_code=${code} pid=${child.pid}`
            );
            resolve2("failed");
          }
        });
        child.on("error", (err) => {
          deps.onDebug(
            `[bridge:session] sessionId=${opts.sessionId} spawn error: ${err.message}`
          );
          resolve2("failed");
        });
      });
      const handle = {
        sessionId: opts.sessionId,
        done,
        activities,
        accessToken: opts.accessToken,
        lastStderr,
        get currentActivity() {
          return currentActivity;
        },
        kill() {
          if (!child.killed) {
            deps.onDebug(
              `[bridge:session] Sending SIGTERM to sessionId=${opts.sessionId} pid=${child.pid}`
            );
            if (process.platform === "win32") {
              child.kill();
            } else {
              child.kill("SIGTERM");
            }
          }
        },
        forceKill() {
          if (!sigkillSent && child.pid) {
            sigkillSent = true;
            deps.onDebug(
              `[bridge:session] Sending SIGKILL to sessionId=${opts.sessionId} pid=${child.pid}`
            );
            if (process.platform === "win32") {
              child.kill();
            } else {
              child.kill("SIGKILL");
            }
          }
        },
        writeStdin(data) {
          if (child.stdin && !child.stdin.destroyed) {
            deps.onDebug(
              `[bridge:ws] sessionId=${opts.sessionId} >>> ${debugTruncate(data)}`
            );
            child.stdin.write(data);
          }
        },
        updateAccessToken(token) {
          handle.accessToken = token;
          handle.writeStdin(
            jsonStringify({
              type: "update_environment_variables",
              variables: { CLAUDE_CODE_SESSION_ACCESS_TOKEN: token }
            }) + "\n"
          );
          deps.onDebug(
            `[bridge:session] Sent token refresh via stdin for sessionId=${opts.sessionId}`
          );
        }
      };
      return handle;
    }
  };
}

// src/bridge/bridgeMain.ts
init_trustedDevice();
init_types();
var DEFAULT_BACKOFF = {
  connInitialMs: 2e3,
  connCapMs: 12e4,
  // 2 minutes
  connGiveUpMs: 6e5,
  // 10 minutes
  generalInitialMs: 500,
  generalCapMs: 3e4,
  generalGiveUpMs: 6e5
  // 10 minutes
};
var STATUS_UPDATE_INTERVAL_MS = 1e3;
var SPAWN_SESSIONS_DEFAULT = 32;
async function isMultiSessionSpawnEnabled() {
  return checkGate_CACHED_OR_BLOCKING("tengu_ccr_bridge_multi_session");
}
function pollSleepDetectionThresholdMs(backoff) {
  return backoff.connCapMs * 2;
}
function spawnScriptArgs() {
  if (isInBundledMode() || !process.argv[1]) {
    return [];
  }
  return [process.argv[1]];
}
function safeSpawn(spawner, opts, dir) {
  try {
    return spawner.spawn(opts, dir);
  } catch (err) {
    const errMsg = errorMessage(err);
    logError(new Error(`Session spawn failed: ${errMsg}`));
    return errMsg;
  }
}
async function runBridgeLoop(config, environmentId, environmentSecret, api, spawner, logger, signal, backoffConfig = DEFAULT_BACKOFF, initialSessionId, getAccessToken) {
  const controller = new AbortController();
  if (signal.aborted) {
    controller.abort();
  } else {
    signal.addEventListener("abort", () => controller.abort(), { once: true });
  }
  const loopSignal = controller.signal;
  const activeSessions = /* @__PURE__ */ new Map();
  const sessionStartTimes = /* @__PURE__ */ new Map();
  const sessionWorkIds = /* @__PURE__ */ new Map();
  const sessionCompatIds = /* @__PURE__ */ new Map();
  const sessionIngressTokens = /* @__PURE__ */ new Map();
  const sessionTimers = /* @__PURE__ */ new Map();
  const completedWorkIds = /* @__PURE__ */ new Set();
  const sessionWorktrees = /* @__PURE__ */ new Map();
  const timedOutSessions = /* @__PURE__ */ new Set();
  const titledSessions = /* @__PURE__ */ new Set();
  const capacityWake = createCapacityWake(loopSignal);
  async function heartbeatActiveWorkItems() {
    let anySuccess = false;
    let anyFatal = false;
    const authFailedSessions = [];
    for (const [sessionId] of activeSessions) {
      const workId = sessionWorkIds.get(sessionId);
      const ingressToken = sessionIngressTokens.get(sessionId);
      if (!workId || !ingressToken) {
        continue;
      }
      try {
        await api.heartbeatWork(environmentId, workId, ingressToken);
        anySuccess = true;
      } catch (err) {
        logForDebugging(
          `[bridge:heartbeat] Failed for sessionId=${sessionId} workId=${workId}: ${errorMessage(err)}`
        );
        if (err instanceof BridgeFatalError) {
          logEvent("tengu_bridge_heartbeat_error", {
            status: err.status,
            error_type: err.status === 401 || err.status === 403 ? "auth_failed" : "fatal"
          });
          if (err.status === 401 || err.status === 403) {
            authFailedSessions.push(sessionId);
          } else {
            anyFatal = true;
          }
        }
      }
    }
    for (const sessionId of authFailedSessions) {
      logger.logVerbose(
        `Session ${sessionId} token expired \u2014 re-queuing via bridge/reconnect`
      );
      try {
        await api.reconnectSession(environmentId, sessionId);
        logForDebugging(
          `[bridge:heartbeat] Re-queued sessionId=${sessionId} via bridge/reconnect`
        );
      } catch (err) {
        logger.logError(
          `Failed to refresh session ${sessionId} token: ${errorMessage(err)}`
        );
        logForDebugging(
          `[bridge:heartbeat] reconnectSession(${sessionId}) failed: ${errorMessage(err)}`,
          { level: "error" }
        );
      }
    }
    if (anyFatal) {
      return "fatal";
    }
    if (authFailedSessions.length > 0) {
      return "auth_failed";
    }
    return anySuccess ? "ok" : "failed";
  }
  const v2Sessions = /* @__PURE__ */ new Set();
  const tokenRefresh = getAccessToken ? createTokenRefreshScheduler({
    getAccessToken,
    onRefresh: (sessionId, oauthToken) => {
      const handle = activeSessions.get(sessionId);
      if (!handle) {
        return;
      }
      if (v2Sessions.has(sessionId)) {
        logger.logVerbose(
          `Refreshing session ${sessionId} token via bridge/reconnect`
        );
        void api.reconnectSession(environmentId, sessionId).catch((err) => {
          logger.logError(
            `Failed to refresh session ${sessionId} token: ${errorMessage(err)}`
          );
          logForDebugging(
            `[bridge:token] reconnectSession(${sessionId}) failed: ${errorMessage(err)}`,
            { level: "error" }
          );
        });
      } else {
        handle.updateAccessToken(oauthToken);
      }
    },
    label: "bridge"
  }) : null;
  const loopStartTime = Date.now();
  const pendingCleanups = /* @__PURE__ */ new Set();
  function trackCleanup(p) {
    pendingCleanups.add(p);
    void p.finally(() => pendingCleanups.delete(p));
  }
  let connBackoff = 0;
  let generalBackoff = 0;
  let connErrorStart = null;
  let generalErrorStart = null;
  let lastPollErrorTime = null;
  let statusUpdateTimer = null;
  let fatalExit = false;
  logForDebugging(
    `[bridge:work] Starting poll loop spawnMode=${config.spawnMode} maxSessions=${config.maxSessions} environmentId=${environmentId}`
  );
  logForDiagnosticsNoPII("info", "bridge_loop_started", {
    max_sessions: config.maxSessions,
    spawn_mode: config.spawnMode
  });
  if (process.env.USER_TYPE === "ant") {
    let debugGlob;
    if (config.debugFile) {
      const ext = config.debugFile.lastIndexOf(".");
      debugGlob = ext > 0 ? `${config.debugFile.slice(0, ext)}-*${config.debugFile.slice(ext)}` : `${config.debugFile}-*`;
    } else {
      debugGlob = join2(tmpdir2(), "claude", "bridge-session-*.log");
    }
    logger.setDebugLogPath(debugGlob);
  }
  logger.printBanner(config, environmentId);
  logger.updateSessionCount(0, config.maxSessions, config.spawnMode);
  if (initialSessionId) {
    logger.setAttached(initialSessionId);
  }
  function updateStatusDisplay() {
    logger.updateSessionCount(
      activeSessions.size,
      config.maxSessions,
      config.spawnMode
    );
    for (const [sid, handle2] of activeSessions) {
      const act = handle2.currentActivity;
      if (act) {
        logger.updateSessionActivity(sessionCompatIds.get(sid) ?? sid, act);
      }
    }
    if (activeSessions.size === 0) {
      logger.updateIdleStatus();
      return;
    }
    const [sessionId, handle] = [...activeSessions.entries()].pop();
    const startTime = sessionStartTimes.get(sessionId);
    if (!startTime) return;
    const activity = handle.currentActivity;
    if (!activity || activity.type === "result" || activity.type === "error") {
      if (config.maxSessions > 1) logger.refreshDisplay();
      return;
    }
    const elapsed = formatDuration(Date.now() - startTime);
    const trail = handle.activities.filter((a) => a.type === "tool_start").slice(-5).map((a) => a.summary);
    logger.updateSessionStatus(sessionId, elapsed, activity, trail);
  }
  function startStatusUpdates() {
    stopStatusUpdates();
    updateStatusDisplay();
    statusUpdateTimer = setInterval(
      updateStatusDisplay,
      STATUS_UPDATE_INTERVAL_MS
    );
  }
  function stopStatusUpdates() {
    if (statusUpdateTimer) {
      clearInterval(statusUpdateTimer);
      statusUpdateTimer = null;
    }
  }
  function onSessionDone(sessionId, startTime, handle) {
    return (rawStatus) => {
      const workId = sessionWorkIds.get(sessionId);
      activeSessions.delete(sessionId);
      sessionStartTimes.delete(sessionId);
      sessionWorkIds.delete(sessionId);
      sessionIngressTokens.delete(sessionId);
      const compatId = sessionCompatIds.get(sessionId) ?? sessionId;
      sessionCompatIds.delete(sessionId);
      logger.removeSession(compatId);
      titledSessions.delete(compatId);
      v2Sessions.delete(sessionId);
      const timer = sessionTimers.get(sessionId);
      if (timer) {
        clearTimeout(timer);
        sessionTimers.delete(sessionId);
      }
      tokenRefresh?.cancel(sessionId);
      capacityWake.wake();
      const wasTimedOut = timedOutSessions.delete(sessionId);
      const status = wasTimedOut && rawStatus === "interrupted" ? "failed" : rawStatus;
      const durationMs = Date.now() - startTime;
      logForDebugging(
        `[bridge:session] sessionId=${sessionId} workId=${workId ?? "unknown"} exited status=${status} duration=${formatDuration(durationMs)}`
      );
      logEvent("tengu_bridge_session_done", {
        status,
        duration_ms: durationMs
      });
      logForDiagnosticsNoPII("info", "bridge_session_done", {
        status,
        duration_ms: durationMs
      });
      logger.clearStatus();
      stopStatusUpdates();
      const stderrSummary = handle.lastStderr.length > 0 ? handle.lastStderr.join("\n") : void 0;
      let failureMessage;
      switch (status) {
        case "completed":
          logger.logSessionComplete(sessionId, durationMs);
          break;
        case "failed":
          if (!wasTimedOut && !loopSignal.aborted) {
            failureMessage = stderrSummary ?? "Process exited with error";
            logger.logSessionFailed(sessionId, failureMessage);
            logError(new Error(`Bridge session failed: ${failureMessage}`));
          }
          break;
        case "interrupted":
          logger.logVerbose(`Session ${sessionId} interrupted`);
          break;
      }
      if (status !== "interrupted" && workId) {
        trackCleanup(
          stopWorkWithRetry(
            api,
            environmentId,
            workId,
            logger,
            backoffConfig.stopWorkBaseDelayMs
          )
        );
        completedWorkIds.add(workId);
      }
      const wt = sessionWorktrees.get(sessionId);
      if (wt) {
        sessionWorktrees.delete(sessionId);
        trackCleanup(
          removeAgentWorktree(
            wt.worktreePath,
            wt.worktreeBranch,
            wt.gitRoot,
            wt.hookBased
          ).catch(
            (err) => logger.logVerbose(
              `Failed to remove worktree ${wt.worktreePath}: ${errorMessage(err)}`
            )
          )
        );
      }
      if (status !== "interrupted" && !loopSignal.aborted) {
        if (config.spawnMode !== "single-session") {
          trackCleanup(
            api.archiveSession(compatId).catch(
              (err) => logger.logVerbose(
                `Failed to archive session ${sessionId}: ${errorMessage(err)}`
              )
            )
          );
          logForDebugging(
            `[bridge:session] Session ${status}, returning to idle (multi-session mode)`
          );
        } else {
          logForDebugging(
            `[bridge:session] Session ${status}, aborting poll loop to tear down environment`
          );
          controller.abort();
          return;
        }
      }
      if (!loopSignal.aborted) {
        startStatusUpdates();
      }
    };
  }
  if (!initialSessionId) {
    startStatusUpdates();
  }
  while (!loopSignal.aborted) {
    const pollConfig = getPollIntervalConfig();
    try {
      const work = await api.pollForWork(
        environmentId,
        environmentSecret,
        loopSignal,
        pollConfig.reclaim_older_than_ms
      );
      const wasDisconnected = connErrorStart !== null || generalErrorStart !== null;
      if (wasDisconnected) {
        const disconnectedMs = Date.now() - (connErrorStart ?? generalErrorStart ?? Date.now());
        logger.logReconnected(disconnectedMs);
        logForDebugging(
          `[bridge:poll] Reconnected after ${formatDuration(disconnectedMs)}`
        );
        logEvent("tengu_bridge_reconnected", {
          disconnected_ms: disconnectedMs
        });
      }
      connBackoff = 0;
      generalBackoff = 0;
      connErrorStart = null;
      generalErrorStart = null;
      lastPollErrorTime = null;
      if (!work) {
        const atCap = activeSessions.size >= config.maxSessions;
        if (atCap) {
          const atCapMs = pollConfig.multisession_poll_interval_ms_at_capacity;
          if (pollConfig.non_exclusive_heartbeat_interval_ms > 0) {
            logEvent("tengu_bridge_heartbeat_mode_entered", {
              active_sessions: activeSessions.size,
              heartbeat_interval_ms: pollConfig.non_exclusive_heartbeat_interval_ms
            });
            const pollDeadline = atCapMs > 0 ? Date.now() + atCapMs : null;
            let hbResult = "ok";
            let hbCycles = 0;
            while (!loopSignal.aborted && activeSessions.size >= config.maxSessions && (pollDeadline === null || Date.now() < pollDeadline)) {
              const hbConfig = getPollIntervalConfig();
              if (hbConfig.non_exclusive_heartbeat_interval_ms <= 0) break;
              const cap = capacityWake.signal();
              hbResult = await heartbeatActiveWorkItems();
              if (hbResult === "auth_failed" || hbResult === "fatal") {
                cap.cleanup();
                break;
              }
              hbCycles++;
              await sleep(
                hbConfig.non_exclusive_heartbeat_interval_ms,
                cap.signal
              );
              cap.cleanup();
            }
            const exitReason = hbResult === "auth_failed" || hbResult === "fatal" ? hbResult : loopSignal.aborted ? "shutdown" : activeSessions.size < config.maxSessions ? "capacity_changed" : pollDeadline !== null && Date.now() >= pollDeadline ? "poll_due" : "config_disabled";
            logEvent("tengu_bridge_heartbeat_mode_exited", {
              reason: exitReason,
              heartbeat_cycles: hbCycles,
              active_sessions: activeSessions.size
            });
            if (exitReason === "poll_due") {
              logForDebugging(
                `[bridge:poll] Heartbeat poll_due after ${hbCycles} cycles \u2014 falling through to pollForWork`
              );
            }
            if (hbResult === "auth_failed" || hbResult === "fatal") {
              const cap = capacityWake.signal();
              await sleep(
                atCapMs > 0 ? atCapMs : pollConfig.non_exclusive_heartbeat_interval_ms,
                cap.signal
              );
              cap.cleanup();
            }
          } else if (atCapMs > 0) {
            const cap = capacityWake.signal();
            await sleep(atCapMs, cap.signal);
            cap.cleanup();
          }
        } else {
          const interval = activeSessions.size > 0 ? pollConfig.multisession_poll_interval_ms_partial_capacity : pollConfig.multisession_poll_interval_ms_not_at_capacity;
          await sleep(interval, loopSignal);
        }
        continue;
      }
      const atCapacityBeforeSwitch = activeSessions.size >= config.maxSessions;
      if (completedWorkIds.has(work.id)) {
        logForDebugging(
          `[bridge:work] Skipping already-completed workId=${work.id}`
        );
        if (atCapacityBeforeSwitch) {
          const cap = capacityWake.signal();
          if (pollConfig.non_exclusive_heartbeat_interval_ms > 0) {
            await heartbeatActiveWorkItems();
            await sleep(
              pollConfig.non_exclusive_heartbeat_interval_ms,
              cap.signal
            );
          } else if (pollConfig.multisession_poll_interval_ms_at_capacity > 0) {
            await sleep(
              pollConfig.multisession_poll_interval_ms_at_capacity,
              cap.signal
            );
          }
          cap.cleanup();
        } else {
          await sleep(1e3, loopSignal);
        }
        continue;
      }
      let secret;
      try {
        secret = decodeWorkSecret(work.secret);
      } catch (err) {
        const errMsg = errorMessage(err);
        logger.logError(
          `Failed to decode work secret for workId=${work.id}: ${errMsg}`
        );
        logEvent("tengu_bridge_work_secret_failed", {});
        completedWorkIds.add(work.id);
        trackCleanup(
          stopWorkWithRetry(
            api,
            environmentId,
            work.id,
            logger,
            backoffConfig.stopWorkBaseDelayMs
          )
        );
        if (atCapacityBeforeSwitch) {
          const cap = capacityWake.signal();
          if (pollConfig.non_exclusive_heartbeat_interval_ms > 0) {
            await heartbeatActiveWorkItems();
            await sleep(
              pollConfig.non_exclusive_heartbeat_interval_ms,
              cap.signal
            );
          } else if (pollConfig.multisession_poll_interval_ms_at_capacity > 0) {
            await sleep(
              pollConfig.multisession_poll_interval_ms_at_capacity,
              cap.signal
            );
          }
          cap.cleanup();
        }
        continue;
      }
      const ackWork = async () => {
        logForDebugging(`[bridge:work] Acknowledging workId=${work.id}`);
        try {
          await api.acknowledgeWork(
            environmentId,
            work.id,
            secret.session_ingress_token
          );
        } catch (err) {
          logForDebugging(
            `[bridge:work] Acknowledge failed workId=${work.id}: ${errorMessage(err)}`
          );
        }
      };
      const workType = work.data.type;
      switch (work.data.type) {
        case "healthcheck":
          await ackWork();
          logForDebugging("[bridge:work] Healthcheck received");
          logger.logVerbose("Healthcheck received");
          break;
        case "session": {
          const sessionId = work.data.id;
          try {
            validateBridgeId(sessionId, "session_id");
          } catch {
            await ackWork();
            logger.logError(`Invalid session_id received: ${sessionId}`);
            break;
          }
          const existingHandle = activeSessions.get(sessionId);
          if (existingHandle) {
            existingHandle.updateAccessToken(secret.session_ingress_token);
            sessionIngressTokens.set(sessionId, secret.session_ingress_token);
            sessionWorkIds.set(sessionId, work.id);
            tokenRefresh?.schedule(sessionId, secret.session_ingress_token);
            logForDebugging(
              `[bridge:work] Updated access token for existing sessionId=${sessionId} workId=${work.id}`
            );
            await ackWork();
            break;
          }
          if (activeSessions.size >= config.maxSessions) {
            logForDebugging(
              `[bridge:work] At capacity (${activeSessions.size}/${config.maxSessions}), cannot spawn new session for workId=${work.id}`
            );
            break;
          }
          await ackWork();
          const spawnStartTime = Date.now();
          let sdkUrl;
          let useCcrV2 = false;
          let workerEpoch;
          if (secret.use_code_sessions === true || isEnvTruthy(process.env.CLAUDE_BRIDGE_USE_CCR_V2)) {
            sdkUrl = buildCCRv2SdkUrl(config.apiBaseUrl, sessionId);
            for (let attempt = 1; attempt <= 2; attempt++) {
              try {
                workerEpoch = await registerWorker(
                  sdkUrl,
                  secret.session_ingress_token
                );
                useCcrV2 = true;
                logForDebugging(
                  `[bridge:session] CCR v2: registered worker sessionId=${sessionId} epoch=${workerEpoch} attempt=${attempt}`
                );
                break;
              } catch (err) {
                const errMsg = errorMessage(err);
                if (attempt < 2) {
                  logForDebugging(
                    `[bridge:session] CCR v2: registerWorker attempt ${attempt} failed, retrying: ${errMsg}`
                  );
                  await sleep(2e3, loopSignal);
                  if (loopSignal.aborted) break;
                  continue;
                }
                logger.logError(
                  `CCR v2 worker registration failed for session ${sessionId}: ${errMsg}`
                );
                logError(new Error(`registerWorker failed: ${errMsg}`));
                completedWorkIds.add(work.id);
                trackCleanup(
                  stopWorkWithRetry(
                    api,
                    environmentId,
                    work.id,
                    logger,
                    backoffConfig.stopWorkBaseDelayMs
                  )
                );
              }
            }
            if (!useCcrV2) break;
          } else {
            sdkUrl = buildSdkUrl(config.sessionIngressUrl, sessionId);
          }
          const spawnModeAtDecision = config.spawnMode;
          let sessionDir = config.dir;
          let worktreeCreateMs = 0;
          if (spawnModeAtDecision === "worktree" && (initialSessionId === void 0 || !sameSessionId(sessionId, initialSessionId))) {
            const wtStart = Date.now();
            try {
              const wt = await createAgentWorktree(
                `bridge-${safeFilenameId(sessionId)}`
              );
              worktreeCreateMs = Date.now() - wtStart;
              sessionWorktrees.set(sessionId, {
                worktreePath: wt.worktreePath,
                worktreeBranch: wt.worktreeBranch,
                gitRoot: wt.gitRoot,
                hookBased: wt.hookBased
              });
              sessionDir = wt.worktreePath;
              logForDebugging(
                `[bridge:session] Created worktree for sessionId=${sessionId} at ${wt.worktreePath}`
              );
            } catch (err) {
              const errMsg = errorMessage(err);
              logger.logError(
                `Failed to create worktree for session ${sessionId}: ${errMsg}`
              );
              logError(new Error(`Worktree creation failed: ${errMsg}`));
              completedWorkIds.add(work.id);
              trackCleanup(
                stopWorkWithRetry(
                  api,
                  environmentId,
                  work.id,
                  logger,
                  backoffConfig.stopWorkBaseDelayMs
                )
              );
              break;
            }
          }
          logForDebugging(
            `[bridge:session] Spawning sessionId=${sessionId} sdkUrl=${sdkUrl}`
          );
          const compatSessionId = toCompatSessionId(sessionId);
          const spawnResult = safeSpawn(
            spawner,
            {
              sessionId,
              sdkUrl,
              accessToken: secret.session_ingress_token,
              useCcrV2,
              workerEpoch,
              onFirstUserMessage: (text) => {
                if (titledSessions.has(compatSessionId)) return;
                titledSessions.add(compatSessionId);
                const title = deriveSessionTitle(text);
                logger.setSessionTitle(compatSessionId, title);
                logForDebugging(
                  `[bridge:title] derived title for ${compatSessionId}: ${title}`
                );
                void import("./createSession-SXZA73BZ.mjs").then(
                  ({ updateBridgeSessionTitle }) => updateBridgeSessionTitle(compatSessionId, title, {
                    baseUrl: config.apiBaseUrl
                  })
                ).catch(
                  (err) => logForDebugging(
                    `[bridge:title] failed to update title for ${compatSessionId}: ${err}`,
                    { level: "error" }
                  )
                );
              }
            },
            sessionDir
          );
          if (typeof spawnResult === "string") {
            logger.logError(
              `Failed to spawn session ${sessionId}: ${spawnResult}`
            );
            const wt = sessionWorktrees.get(sessionId);
            if (wt) {
              sessionWorktrees.delete(sessionId);
              trackCleanup(
                removeAgentWorktree(
                  wt.worktreePath,
                  wt.worktreeBranch,
                  wt.gitRoot,
                  wt.hookBased
                ).catch(
                  (err) => logger.logVerbose(
                    `Failed to remove worktree ${wt.worktreePath}: ${errorMessage(err)}`
                  )
                )
              );
            }
            completedWorkIds.add(work.id);
            trackCleanup(
              stopWorkWithRetry(
                api,
                environmentId,
                work.id,
                logger,
                backoffConfig.stopWorkBaseDelayMs
              )
            );
            break;
          }
          const handle = spawnResult;
          const spawnDurationMs = Date.now() - spawnStartTime;
          logEvent("tengu_bridge_session_started", {
            active_sessions: activeSessions.size,
            spawn_mode: spawnModeAtDecision,
            in_worktree: sessionWorktrees.has(sessionId),
            spawn_duration_ms: spawnDurationMs,
            worktree_create_ms: worktreeCreateMs,
            inProtectedNamespace: isInProtectedNamespace()
          });
          logForDiagnosticsNoPII("info", "bridge_session_started", {
            spawn_mode: spawnModeAtDecision,
            in_worktree: sessionWorktrees.has(sessionId),
            spawn_duration_ms: spawnDurationMs,
            worktree_create_ms: worktreeCreateMs
          });
          activeSessions.set(sessionId, handle);
          sessionWorkIds.set(sessionId, work.id);
          sessionIngressTokens.set(sessionId, secret.session_ingress_token);
          sessionCompatIds.set(sessionId, compatSessionId);
          const startTime = Date.now();
          sessionStartTimes.set(sessionId, startTime);
          logger.logSessionStart(sessionId, `Session ${sessionId}`);
          const safeId = safeFilenameId(sessionId);
          let sessionDebugFile;
          if (config.debugFile) {
            const ext = config.debugFile.lastIndexOf(".");
            if (ext > 0) {
              sessionDebugFile = `${config.debugFile.slice(0, ext)}-${safeId}${config.debugFile.slice(ext)}`;
            } else {
              sessionDebugFile = `${config.debugFile}-${safeId}`;
            }
          } else if (config.verbose || process.env.USER_TYPE === "ant") {
            sessionDebugFile = join2(
              tmpdir2(),
              "claude",
              `bridge-session-${safeId}.log`
            );
          }
          if (sessionDebugFile) {
            logger.logVerbose(`Debug log: ${sessionDebugFile}`);
          }
          logger.addSession(
            compatSessionId,
            getRemoteSessionUrl(compatSessionId, config.sessionIngressUrl)
          );
          startStatusUpdates();
          logger.setAttached(compatSessionId);
          void fetchSessionTitle(compatSessionId, config.apiBaseUrl).then((title) => {
            if (title && activeSessions.has(sessionId)) {
              titledSessions.add(compatSessionId);
              logger.setSessionTitle(compatSessionId, title);
              logForDebugging(
                `[bridge:title] server title for ${compatSessionId}: ${title}`
              );
            }
          }).catch(
            (err) => logForDebugging(
              `[bridge:title] failed to fetch title for ${compatSessionId}: ${err}`,
              { level: "error" }
            )
          );
          const timeoutMs = config.sessionTimeoutMs ?? DEFAULT_SESSION_TIMEOUT_MS;
          if (timeoutMs > 0) {
            const timer = setTimeout(
              onSessionTimeout,
              timeoutMs,
              sessionId,
              timeoutMs,
              logger,
              timedOutSessions,
              handle
            );
            sessionTimers.set(sessionId, timer);
          }
          if (useCcrV2) {
            v2Sessions.add(sessionId);
          }
          tokenRefresh?.schedule(sessionId, secret.session_ingress_token);
          void handle.done.then(onSessionDone(sessionId, startTime, handle));
          break;
        }
        default:
          await ackWork();
          logForDebugging(
            `[bridge:work] Unknown work type: ${workType}, skipping`
          );
          break;
      }
      if (atCapacityBeforeSwitch) {
        const cap = capacityWake.signal();
        if (pollConfig.non_exclusive_heartbeat_interval_ms > 0) {
          await heartbeatActiveWorkItems();
          await sleep(
            pollConfig.non_exclusive_heartbeat_interval_ms,
            cap.signal
          );
        } else if (pollConfig.multisession_poll_interval_ms_at_capacity > 0) {
          await sleep(
            pollConfig.multisession_poll_interval_ms_at_capacity,
            cap.signal
          );
        }
        cap.cleanup();
      }
    } catch (err) {
      if (loopSignal.aborted) {
        break;
      }
      if (err instanceof BridgeFatalError) {
        fatalExit = true;
        if (isExpiredErrorType(err.errorType)) {
          logger.logStatus(err.message);
        } else if (isSuppressible403(err)) {
          logForDebugging(`[bridge:work] Suppressed 403 error: ${err.message}`);
        } else {
          logger.logError(err.message);
          logError(err);
        }
        logEvent("tengu_bridge_fatal_error", {
          status: err.status,
          error_type: err.errorType
        });
        logForDiagnosticsNoPII(
          isExpiredErrorType(err.errorType) ? "info" : "error",
          "bridge_fatal_error",
          { status: err.status, error_type: err.errorType }
        );
        break;
      }
      const errMsg = describeAxiosError(err);
      if (isConnectionError(err) || isServerError(err)) {
        const now = Date.now();
        if (lastPollErrorTime !== null && now - lastPollErrorTime > pollSleepDetectionThresholdMs(backoffConfig)) {
          logForDebugging(
            `[bridge:work] Detected system sleep (${Math.round((now - lastPollErrorTime) / 1e3)}s gap), resetting error budget`
          );
          logForDiagnosticsNoPII("info", "bridge_poll_sleep_detected", {
            gapMs: now - lastPollErrorTime
          });
          connErrorStart = null;
          connBackoff = 0;
          generalErrorStart = null;
          generalBackoff = 0;
        }
        lastPollErrorTime = now;
        if (!connErrorStart) {
          connErrorStart = now;
        }
        const elapsed = now - connErrorStart;
        if (elapsed >= backoffConfig.connGiveUpMs) {
          logger.logError(
            `Server unreachable for ${Math.round(elapsed / 6e4)} minutes, giving up.`
          );
          logEvent("tengu_bridge_poll_give_up", {
            error_type: "connection",
            elapsed_ms: elapsed
          });
          logForDiagnosticsNoPII("error", "bridge_poll_give_up", {
            error_type: "connection",
            elapsed_ms: elapsed
          });
          fatalExit = true;
          break;
        }
        generalErrorStart = null;
        generalBackoff = 0;
        connBackoff = connBackoff ? Math.min(connBackoff * 2, backoffConfig.connCapMs) : backoffConfig.connInitialMs;
        const delay = addJitter(connBackoff);
        logger.logVerbose(
          `Connection error, retrying in ${formatDelay(delay)} (${Math.round(elapsed / 1e3)}s elapsed): ${errMsg}`
        );
        logger.updateReconnectingStatus(
          formatDelay(delay),
          formatDuration(elapsed)
        );
        if (getPollIntervalConfig().non_exclusive_heartbeat_interval_ms > 0) {
          await heartbeatActiveWorkItems();
        }
        await sleep(delay, loopSignal);
      } else {
        const now = Date.now();
        if (lastPollErrorTime !== null && now - lastPollErrorTime > pollSleepDetectionThresholdMs(backoffConfig)) {
          logForDebugging(
            `[bridge:work] Detected system sleep (${Math.round((now - lastPollErrorTime) / 1e3)}s gap), resetting error budget`
          );
          logForDiagnosticsNoPII("info", "bridge_poll_sleep_detected", {
            gapMs: now - lastPollErrorTime
          });
          connErrorStart = null;
          connBackoff = 0;
          generalErrorStart = null;
          generalBackoff = 0;
        }
        lastPollErrorTime = now;
        if (!generalErrorStart) {
          generalErrorStart = now;
        }
        const elapsed = now - generalErrorStart;
        if (elapsed >= backoffConfig.generalGiveUpMs) {
          logger.logError(
            `Persistent errors for ${Math.round(elapsed / 6e4)} minutes, giving up.`
          );
          logEvent("tengu_bridge_poll_give_up", {
            error_type: "general",
            elapsed_ms: elapsed
          });
          logForDiagnosticsNoPII("error", "bridge_poll_give_up", {
            error_type: "general",
            elapsed_ms: elapsed
          });
          fatalExit = true;
          break;
        }
        connErrorStart = null;
        connBackoff = 0;
        generalBackoff = generalBackoff ? Math.min(generalBackoff * 2, backoffConfig.generalCapMs) : backoffConfig.generalInitialMs;
        const delay = addJitter(generalBackoff);
        logger.logVerbose(
          `Poll failed, retrying in ${formatDelay(delay)} (${Math.round(elapsed / 1e3)}s elapsed): ${errMsg}`
        );
        logger.updateReconnectingStatus(
          formatDelay(delay),
          formatDuration(elapsed)
        );
        if (getPollIntervalConfig().non_exclusive_heartbeat_interval_ms > 0) {
          await heartbeatActiveWorkItems();
        }
        await sleep(delay, loopSignal);
      }
    }
  }
  stopStatusUpdates();
  logger.clearStatus();
  const loopDurationMs = Date.now() - loopStartTime;
  logEvent("tengu_bridge_shutdown", {
    active_sessions: activeSessions.size,
    loop_duration_ms: loopDurationMs
  });
  logForDiagnosticsNoPII("info", "bridge_shutdown", {
    active_sessions: activeSessions.size,
    loop_duration_ms: loopDurationMs
  });
  const sessionsToArchive = new Set(activeSessions.keys());
  if (initialSessionId) {
    sessionsToArchive.add(initialSessionId);
  }
  const compatIdSnapshot = new Map(sessionCompatIds);
  if (activeSessions.size > 0) {
    logForDebugging(
      `[bridge:shutdown] Shutting down ${activeSessions.size} active session(s)`
    );
    logger.logStatus(
      `Shutting down ${activeSessions.size} active session(s)\u2026`
    );
    const shutdownWorkIds = new Map(sessionWorkIds);
    for (const [sessionId, handle] of activeSessions.entries()) {
      logForDebugging(
        `[bridge:shutdown] Sending SIGTERM to sessionId=${sessionId}`
      );
      handle.kill();
    }
    const timeout = new AbortController();
    await Promise.race([
      Promise.allSettled([...activeSessions.values()].map((h) => h.done)),
      sleep(backoffConfig.shutdownGraceMs ?? 3e4, timeout.signal)
    ]);
    timeout.abort();
    for (const [sid, handle] of activeSessions.entries()) {
      logForDebugging(`[bridge:shutdown] Force-killing stuck sessionId=${sid}`);
      handle.forceKill();
    }
    for (const timer of sessionTimers.values()) {
      clearTimeout(timer);
    }
    sessionTimers.clear();
    tokenRefresh?.cancelAll();
    if (sessionWorktrees.size > 0) {
      const remainingWorktrees = [...sessionWorktrees.values()];
      sessionWorktrees.clear();
      logForDebugging(
        `[bridge:shutdown] Cleaning up ${remainingWorktrees.length} worktree(s)`
      );
      await Promise.allSettled(
        remainingWorktrees.map(
          (wt) => removeAgentWorktree(
            wt.worktreePath,
            wt.worktreeBranch,
            wt.gitRoot,
            wt.hookBased
          )
        )
      );
    }
    await Promise.allSettled(
      [...shutdownWorkIds.entries()].map(([sessionId, workId]) => {
        return api.stopWork(environmentId, workId, true).catch(
          (err) => logger.logVerbose(
            `Failed to stop work ${workId} for session ${sessionId}: ${errorMessage(err)}`
          )
        );
      })
    );
  }
  if (pendingCleanups.size > 0) {
    await Promise.allSettled([...pendingCleanups]);
  }
  if (feature("KAIROS") && config.spawnMode === "single-session" && initialSessionId && !fatalExit) {
    logger.logStatus(
      `Resume this session by running \`claude remote-control --continue\``
    );
    logForDebugging(
      `[bridge:shutdown] Skipping archive+deregister to allow resume of session ${initialSessionId}`
    );
    return;
  }
  if (sessionsToArchive.size > 0) {
    logForDebugging(
      `[bridge:shutdown] Archiving ${sessionsToArchive.size} session(s)`
    );
    await Promise.allSettled(
      [...sessionsToArchive].map(
        (sessionId) => api.archiveSession(
          compatIdSnapshot.get(sessionId) ?? toCompatSessionId(sessionId)
        ).catch(
          (err) => logger.logVerbose(
            `Failed to archive session ${sessionId}: ${errorMessage(err)}`
          )
        )
      )
    );
  }
  try {
    await api.deregisterEnvironment(environmentId);
    logForDebugging(
      `[bridge:shutdown] Environment deregistered, bridge offline`
    );
    logger.logVerbose("Environment deregistered.");
  } catch (err) {
    logger.logVerbose(`Failed to deregister environment: ${errorMessage(err)}`);
  }
  const { clearBridgePointer } = await import("./bridgePointer-V3PVQJPH.mjs");
  await clearBridgePointer(config.dir);
  logger.logVerbose("Environment offline.");
}
var CONNECTION_ERROR_CODES = /* @__PURE__ */ new Set([
  "ECONNREFUSED",
  "ECONNRESET",
  "ETIMEDOUT",
  "ENETUNREACH",
  "EHOSTUNREACH"
]);
function isConnectionError(err) {
  if (err && typeof err === "object" && "code" in err && typeof err.code === "string" && CONNECTION_ERROR_CODES.has(err.code)) {
    return true;
  }
  return false;
}
function isServerError(err) {
  return !!err && typeof err === "object" && "code" in err && typeof err.code === "string" && err.code === "ERR_BAD_RESPONSE";
}
function addJitter(ms) {
  return Math.max(0, ms + ms * 0.25 * (2 * Math.random() - 1));
}
function formatDelay(ms) {
  return ms >= 1e3 ? `${(ms / 1e3).toFixed(1)}s` : `${Math.round(ms)}ms`;
}
async function stopWorkWithRetry(api, environmentId, workId, logger, baseDelayMs = 1e3) {
  const MAX_ATTEMPTS = 3;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      await api.stopWork(environmentId, workId, false);
      logForDebugging(
        `[bridge:work] stopWork succeeded for workId=${workId} on attempt ${attempt}/${MAX_ATTEMPTS}`
      );
      return;
    } catch (err) {
      if (err instanceof BridgeFatalError) {
        if (isSuppressible403(err)) {
          logForDebugging(
            `[bridge:work] Suppressed stopWork 403 for ${workId}: ${err.message}`
          );
        } else {
          logger.logError(`Failed to stop work ${workId}: ${err.message}`);
        }
        logForDiagnosticsNoPII("error", "bridge_stop_work_failed", {
          attempts: attempt,
          fatal: true
        });
        return;
      }
      const errMsg = errorMessage(err);
      if (attempt < MAX_ATTEMPTS) {
        const delay = addJitter(baseDelayMs * Math.pow(2, attempt - 1));
        logger.logVerbose(
          `Failed to stop work ${workId} (attempt ${attempt}/${MAX_ATTEMPTS}), retrying in ${formatDelay(delay)}: ${errMsg}`
        );
        await sleep(delay);
      } else {
        logger.logError(
          `Failed to stop work ${workId} after ${MAX_ATTEMPTS} attempts: ${errMsg}`
        );
        logForDiagnosticsNoPII("error", "bridge_stop_work_failed", {
          attempts: MAX_ATTEMPTS
        });
      }
    }
  }
}
function onSessionTimeout(sessionId, timeoutMs, logger, timedOutSessions, handle) {
  logForDebugging(
    `[bridge:session] sessionId=${sessionId} timed out after ${formatDuration(timeoutMs)}`
  );
  logEvent("tengu_bridge_session_timeout", {
    timeout_ms: timeoutMs
  });
  logger.logSessionFailed(
    sessionId,
    `Session timed out after ${formatDuration(timeoutMs)}`
  );
  timedOutSessions.add(sessionId);
  handle.kill();
}
var SPAWN_FLAG_VALUES = ["session", "same-dir", "worktree"];
function parseSpawnValue(raw) {
  if (raw === "session") return "single-session";
  if (raw === "same-dir") return "same-dir";
  if (raw === "worktree") return "worktree";
  return `--spawn requires one of: ${SPAWN_FLAG_VALUES.join(", ")} (got: ${raw ?? "<missing>"})`;
}
function parseCapacityValue(raw) {
  const n = raw === void 0 ? NaN : parseInt(raw, 10);
  if (isNaN(n) || n < 1) {
    return `--capacity requires a positive integer (got: ${raw ?? "<missing>"})`;
  }
  return n;
}
function parseArgs(args) {
  let verbose = false;
  let sandbox = false;
  let debugFile;
  let sessionTimeoutMs;
  let permissionMode;
  let name;
  let help = false;
  let spawnMode;
  let capacity;
  let createSessionInDir;
  let sessionId;
  let continueSession = false;
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--help" || arg === "-h") {
      help = true;
    } else if (arg === "--verbose" || arg === "-v") {
      verbose = true;
    } else if (arg === "--sandbox") {
      sandbox = true;
    } else if (arg === "--no-sandbox") {
      sandbox = false;
    } else if (arg === "--debug-file" && i + 1 < args.length) {
      debugFile = resolve(args[++i]);
    } else if (arg.startsWith("--debug-file=")) {
      debugFile = resolve(arg.slice("--debug-file=".length));
    } else if (arg === "--session-timeout" && i + 1 < args.length) {
      sessionTimeoutMs = parseInt(args[++i], 10) * 1e3;
    } else if (arg.startsWith("--session-timeout=")) {
      sessionTimeoutMs = parseInt(arg.slice("--session-timeout=".length), 10) * 1e3;
    } else if (arg === "--permission-mode" && i + 1 < args.length) {
      permissionMode = args[++i];
    } else if (arg.startsWith("--permission-mode=")) {
      permissionMode = arg.slice("--permission-mode=".length);
    } else if (arg === "--name" && i + 1 < args.length) {
      name = args[++i];
    } else if (arg.startsWith("--name=")) {
      name = arg.slice("--name=".length);
    } else if (feature("KAIROS") && arg === "--session-id" && i + 1 < args.length) {
      sessionId = args[++i];
      if (!sessionId) {
        return makeError("--session-id requires a value");
      }
    } else if (feature("KAIROS") && arg.startsWith("--session-id=")) {
      sessionId = arg.slice("--session-id=".length);
      if (!sessionId) {
        return makeError("--session-id requires a value");
      }
    } else if (feature("KAIROS") && (arg === "--continue" || arg === "-c")) {
      continueSession = true;
    } else if (arg === "--spawn" || arg.startsWith("--spawn=")) {
      if (spawnMode !== void 0) {
        return makeError("--spawn may only be specified once");
      }
      const raw = arg.startsWith("--spawn=") ? arg.slice("--spawn=".length) : args[++i];
      const v = parseSpawnValue(raw);
      if (v === "single-session" || v === "same-dir" || v === "worktree") {
        spawnMode = v;
      } else {
        return makeError(v);
      }
    } else if (arg === "--capacity" || arg.startsWith("--capacity=")) {
      if (capacity !== void 0) {
        return makeError("--capacity may only be specified once");
      }
      const raw = arg.startsWith("--capacity=") ? arg.slice("--capacity=".length) : args[++i];
      const v = parseCapacityValue(raw);
      if (typeof v === "number") capacity = v;
      else return makeError(v);
    } else if (arg === "--create-session-in-dir") {
      createSessionInDir = true;
    } else if (arg === "--no-create-session-in-dir") {
      createSessionInDir = false;
    } else {
      return makeError(
        `Unknown argument: ${arg}
Run 'claude remote-control --help' for usage.`
      );
    }
  }
  if (spawnMode === "single-session" && capacity !== void 0) {
    return makeError(
      `--capacity cannot be used with --spawn=session (single-session mode has fixed capacity 1).`
    );
  }
  if ((sessionId || continueSession) && (spawnMode !== void 0 || capacity !== void 0 || createSessionInDir !== void 0)) {
    return makeError(
      `--session-id and --continue cannot be used with --spawn, --capacity, or --create-session-in-dir.`
    );
  }
  if (sessionId && continueSession) {
    return makeError(`--session-id and --continue cannot be used together.`);
  }
  return {
    verbose,
    sandbox,
    debugFile,
    sessionTimeoutMs,
    permissionMode,
    name,
    spawnMode,
    capacity,
    createSessionInDir,
    sessionId,
    continueSession,
    help
  };
  function makeError(error) {
    return {
      verbose,
      sandbox,
      debugFile,
      sessionTimeoutMs,
      permissionMode,
      name,
      spawnMode,
      capacity,
      createSessionInDir,
      sessionId,
      continueSession,
      help,
      error
    };
  }
}
async function printHelp() {
  const { EXTERNAL_PERMISSION_MODES } = await import("./permissions-THHVYBHI.mjs");
  const modes = EXTERNAL_PERMISSION_MODES.join(", ");
  const showServer = await isMultiSessionSpawnEnabled();
  const serverOptions = showServer ? `  --spawn <mode>                   Spawn mode: same-dir, worktree, session
                                   (default: same-dir)
  --capacity <N>                   Max concurrent sessions in worktree or
                                   same-dir mode (default: ${SPAWN_SESSIONS_DEFAULT})
  --[no-]create-session-in-dir     Pre-create a session in the current
                                   directory; in worktree mode this session
                                   stays in cwd while on-demand sessions get
                                   isolated worktrees (default: on)
` : "";
  const serverDescription = showServer ? `
  Remote Control runs as a persistent server that accepts multiple concurrent
  sessions in the current directory. One session is pre-created on start so
  you have somewhere to type immediately. Use --spawn=worktree to isolate
  each on-demand session in its own git worktree, or --spawn=session for
  the classic single-session mode (exits when that session ends). Press 'w'
  during runtime to toggle between same-dir and worktree.
` : "";
  const serverNote = showServer ? `  - Worktree mode requires a git repository or WorktreeCreate/WorktreeRemove hooks
` : "";
  const help = `
Remote Control - Connect your local environment to claude.ai/code

USAGE
  claude remote-control [options]
OPTIONS
  --name <name>                    Name for the session (shown in claude.ai/code)
${feature("KAIROS") ? `  -c, --continue                   Resume the last session in this directory
  --session-id <id>                Resume a specific session by ID (cannot be
                                   used with spawn flags or --continue)
` : ""}  --permission-mode <mode>         Permission mode for spawned sessions
                                   (${modes})
  --debug-file <path>              Write debug logs to file
  -v, --verbose                    Enable verbose output
  -h, --help                       Show this help
${serverOptions}
DESCRIPTION
  Remote Control allows you to control sessions on your local device from
  claude.ai/code (https://claude.ai/code). Run this command in the
  directory you want to work in, then connect from the Claude app or web.
${serverDescription}
NOTES
  - You must be logged in with a Claude account that has a subscription
  - Run \`claude\` first in the directory to accept the workspace trust dialog
${serverNote}`;
  console.log(help);
}
var TITLE_MAX_LEN = 80;
function deriveSessionTitle(text) {
  const flat = text.replace(/\s+/g, " ").trim();
  return truncateToWidth(flat, TITLE_MAX_LEN);
}
async function fetchSessionTitle(compatSessionId, baseUrl) {
  const { getBridgeSession } = await import("./createSession-SXZA73BZ.mjs");
  const session = await getBridgeSession(compatSessionId, { baseUrl });
  return session?.title || void 0;
}
async function bridgeMain(args) {
  const parsed = parseArgs(args);
  if (parsed.help) {
    await printHelp();
    return;
  }
  if (parsed.error) {
    console.error(`Error: ${parsed.error}`);
    process.exit(1);
  }
  const {
    verbose,
    sandbox,
    debugFile,
    sessionTimeoutMs,
    permissionMode,
    name,
    spawnMode: parsedSpawnMode,
    capacity: parsedCapacity,
    createSessionInDir: parsedCreateSessionInDir,
    sessionId: parsedSessionId,
    continueSession
  } = parsed;
  let resumeSessionId = parsedSessionId;
  let resumePointerDir;
  const usedMultiSessionFeature = parsedSpawnMode !== void 0 || parsedCapacity !== void 0 || parsedCreateSessionInDir !== void 0;
  if (permissionMode !== void 0) {
    const { PERMISSION_MODES } = await import("./permissions-THHVYBHI.mjs");
    const valid = PERMISSION_MODES;
    if (!valid.includes(permissionMode)) {
      console.error(
        `Error: Invalid permission mode '${permissionMode}'. Valid modes: ${valid.join(", ")}`
      );
      process.exit(1);
    }
  }
  const dir = resolve(".");
  const { enableConfigs, checkHasTrustDialogAccepted } = await import("./config-S5MOC745.mjs");
  enableConfigs();
  const { initSinks } = await import("./sinks-SRPXY3LH.mjs");
  initSinks();
  const multiSessionEnabled = await isMultiSessionSpawnEnabled();
  if (usedMultiSessionFeature && !multiSessionEnabled) {
    await logEventAsync("tengu_bridge_multi_session_denied", {
      used_spawn: parsedSpawnMode !== void 0,
      used_capacity: parsedCapacity !== void 0,
      used_create_session_in_dir: parsedCreateSessionInDir !== void 0
    });
    await Promise.race([
      Promise.all([shutdown1PEventLogging(), shutdownDatadog()]),
      sleep(500, void 0, { unref: true })
    ]).catch(() => {
    });
    console.error(
      "Error: Multi-session Remote Control is not enabled for your account yet."
    );
    process.exit(1);
  }
  const { setOriginalCwd, setCwdState } = await import("./state-BZLGZ27J.mjs");
  setOriginalCwd(dir);
  setCwdState(dir);
  if (!checkHasTrustDialogAccepted()) {
    console.error(
      `Error: Workspace not trusted. Please run \`claude\` in ${dir} first to review and accept the workspace trust dialog.`
    );
    process.exit(1);
  }
  const { clearOAuthTokenCache, checkAndRefreshOAuthTokenIfNeeded } = await import("./auth-XO5IY6CP.mjs");
  const { getBridgeAccessToken, getBridgeBaseUrl } = await import("./bridgeConfig-6NNY5U6F.mjs");
  const bridgeToken = getBridgeAccessToken();
  if (!bridgeToken) {
    console.error(BRIDGE_LOGIN_ERROR);
    process.exit(1);
  }
  const {
    getGlobalConfig,
    saveGlobalConfig,
    getCurrentProjectConfig,
    saveCurrentProjectConfig
  } = await import("./config-S5MOC745.mjs");
  if (!getGlobalConfig().remoteDialogSeen) {
    const readline = await import("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    console.log(
      "\nRemote Control lets you access this CLI session from the web (claude.ai/code)\nor the Claude app, so you can pick up where you left off on any device.\n\nYou can disconnect remote access anytime by running /remote-control again.\n"
    );
    const answer = await new Promise((resolve2) => {
      rl.question("Enable Remote Control? (y/n) ", resolve2);
    });
    rl.close();
    saveGlobalConfig((current) => {
      if (current.remoteDialogSeen) return current;
      return { ...current, remoteDialogSeen: true };
    });
    if (answer.toLowerCase() !== "y" && answer.toLowerCase() !== "yes") {
      process.exit(0);
    }
  }
  if (feature("KAIROS") && continueSession) {
    const { readBridgePointerAcrossWorktrees } = await import("./bridgePointer-V3PVQJPH.mjs");
    const found = await readBridgePointerAcrossWorktrees(dir);
    if (!found) {
      console.error(
        `Error: No recent session found in this directory or its worktrees. Run \`claude remote-control\` to start a new one.`
      );
      process.exit(1);
    }
    const { pointer, dir: pointerDir } = found;
    const ageMin = Math.round(pointer.ageMs / 6e4);
    const ageStr = ageMin < 60 ? `${ageMin}m` : `${Math.round(ageMin / 60)}h`;
    const fromWt = pointerDir !== dir ? ` from worktree ${pointerDir}` : "";
    console.error(
      `Resuming session ${pointer.sessionId} (${ageStr} ago)${fromWt}\u2026`
    );
    resumeSessionId = pointer.sessionId;
    resumePointerDir = pointerDir;
  }
  const baseUrl = getBridgeBaseUrl();
  if (baseUrl.startsWith("http://") && !baseUrl.includes("localhost") && !baseUrl.includes("127.0.0.1")) {
    console.error(
      "Error: Remote Control base URL uses HTTP. Only HTTPS or localhost HTTP is allowed."
    );
    process.exit(1);
  }
  const sessionIngressUrl = process.env.USER_TYPE === "ant" && process.env.CLAUDE_BRIDGE_SESSION_INGRESS_URL ? process.env.CLAUDE_BRIDGE_SESSION_INGRESS_URL : baseUrl;
  const { getBranch, getRemoteUrl, findGitRoot } = await import("./git-MPST6L6M.mjs");
  const { hasWorktreeCreateHook } = await import("./hooks-SQICILDJ.mjs");
  const worktreeAvailable = hasWorktreeCreateHook() || findGitRoot(dir) !== null;
  let savedSpawnMode = multiSessionEnabled ? getCurrentProjectConfig().remoteControlSpawnMode : void 0;
  if (savedSpawnMode === "worktree" && !worktreeAvailable) {
    console.error(
      "Warning: Saved spawn mode is worktree but this directory is not a git repository. Falling back to same-dir."
    );
    savedSpawnMode = void 0;
    saveCurrentProjectConfig((current) => {
      if (current.remoteControlSpawnMode === void 0) return current;
      return { ...current, remoteControlSpawnMode: void 0 };
    });
  }
  if (multiSessionEnabled && !savedSpawnMode && worktreeAvailable && parsedSpawnMode === void 0 && !resumeSessionId && process.stdin.isTTY) {
    const readline = await import("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    console.log(
      `
Claude Remote Control is launching in spawn mode which lets you create new sessions in this project from Claude Code on Web or your Mobile app. Learn more here: https://code.claude.com/docs/en/remote-control

Spawn mode for this project:
  [1] same-dir \u2014 sessions share the current directory (default)
  [2] worktree \u2014 each session gets an isolated git worktree

This can be changed later or explicitly set with --spawn=same-dir or --spawn=worktree.
`
    );
    const answer = await new Promise((resolve2) => {
      rl.question("Choose [1/2] (default: 1): ", resolve2);
    });
    rl.close();
    const chosen = answer.trim() === "2" ? "worktree" : "same-dir";
    savedSpawnMode = chosen;
    logEvent("tengu_bridge_spawn_mode_chosen", {
      spawn_mode: chosen
    });
    saveCurrentProjectConfig((current) => {
      if (current.remoteControlSpawnMode === chosen) return current;
      return { ...current, remoteControlSpawnMode: chosen };
    });
  }
  let spawnModeSource;
  let spawnMode;
  if (resumeSessionId) {
    spawnMode = "single-session";
    spawnModeSource = "resume";
  } else if (parsedSpawnMode !== void 0) {
    spawnMode = parsedSpawnMode;
    spawnModeSource = "flag";
  } else if (savedSpawnMode !== void 0) {
    spawnMode = savedSpawnMode;
    spawnModeSource = "saved";
  } else {
    spawnMode = multiSessionEnabled ? "same-dir" : "single-session";
    spawnModeSource = "gate_default";
  }
  const maxSessions = spawnMode === "single-session" ? 1 : parsedCapacity ?? SPAWN_SESSIONS_DEFAULT;
  const preCreateSession = parsedCreateSessionInDir ?? true;
  if (!resumeSessionId) {
    const { clearBridgePointer } = await import("./bridgePointer-V3PVQJPH.mjs");
    await clearBridgePointer(dir);
  }
  if (spawnMode === "worktree" && !worktreeAvailable) {
    console.error(
      `Error: Worktree mode requires a git repository or WorktreeCreate hooks configured. Use --spawn=session for single-session mode.`
    );
    process.exit(1);
  }
  const branch = await getBranch();
  const gitRepoUrl = await getRemoteUrl();
  const machineName = hostname();
  const bridgeId = randomUUID();
  const { handleOAuth401Error } = await import("./auth-XO5IY6CP.mjs");
  const api = createBridgeApiClient({
    baseUrl,
    getAccessToken: getBridgeAccessToken,
    runnerVersion: MACRO.VERSION,
    onDebug: logForDebugging,
    onAuth401: handleOAuth401Error,
    getTrustedDeviceToken
  });
  let reuseEnvironmentId;
  if (feature("KAIROS") && resumeSessionId) {
    try {
      validateBridgeId(resumeSessionId, "sessionId");
    } catch {
      console.error(
        `Error: Invalid session ID "${resumeSessionId}". Session IDs must not contain unsafe characters.`
      );
      process.exit(1);
    }
    await checkAndRefreshOAuthTokenIfNeeded();
    clearOAuthTokenCache();
    const { getBridgeSession } = await import("./createSession-SXZA73BZ.mjs");
    const session = await getBridgeSession(resumeSessionId, {
      baseUrl,
      getAccessToken: getBridgeAccessToken
    });
    if (!session) {
      if (resumePointerDir) {
        const { clearBridgePointer } = await import("./bridgePointer-V3PVQJPH.mjs");
        await clearBridgePointer(resumePointerDir);
      }
      console.error(
        `Error: Session ${resumeSessionId} not found. It may have been archived or expired, or your login may have lapsed (run \`claude /login\`).`
      );
      process.exit(1);
    }
    if (!session.environment_id) {
      if (resumePointerDir) {
        const { clearBridgePointer } = await import("./bridgePointer-V3PVQJPH.mjs");
        await clearBridgePointer(resumePointerDir);
      }
      console.error(
        `Error: Session ${resumeSessionId} has no environment_id. It may never have been attached to a bridge.`
      );
      process.exit(1);
    }
    reuseEnvironmentId = session.environment_id;
    logForDebugging(
      `[bridge:init] Resuming session ${resumeSessionId} on environment ${reuseEnvironmentId}`
    );
  }
  const config = {
    dir,
    machineName,
    branch,
    gitRepoUrl,
    maxSessions,
    spawnMode,
    verbose,
    sandbox,
    bridgeId,
    workerType: "claude_code",
    environmentId: randomUUID(),
    reuseEnvironmentId,
    apiBaseUrl: baseUrl,
    sessionIngressUrl,
    debugFile,
    sessionTimeoutMs
  };
  logForDebugging(
    `[bridge:init] bridgeId=${bridgeId}${reuseEnvironmentId ? ` reuseEnvironmentId=${reuseEnvironmentId}` : ""} dir=${dir} branch=${branch} gitRepoUrl=${gitRepoUrl} machine=${machineName}`
  );
  logForDebugging(
    `[bridge:init] apiBaseUrl=${baseUrl} sessionIngressUrl=${sessionIngressUrl}`
  );
  logForDebugging(
    `[bridge:init] sandbox=${sandbox}${debugFile ? ` debugFile=${debugFile}` : ""}`
  );
  let environmentId;
  let environmentSecret;
  try {
    const reg = await api.registerBridgeEnvironment(config);
    environmentId = reg.environment_id;
    environmentSecret = reg.environment_secret;
  } catch (err) {
    logEvent("tengu_bridge_registration_failed", {
      status: err instanceof BridgeFatalError ? err.status : void 0
    });
    console.error(
      err instanceof BridgeFatalError && err.status === 404 ? "Remote Control environments are not available for your account." : `Error: ${errorMessage(err)}`
    );
    process.exit(1);
  }
  let effectiveResumeSessionId;
  if (feature("KAIROS") && resumeSessionId) {
    if (reuseEnvironmentId && environmentId !== reuseEnvironmentId) {
      logError(
        new Error(
          `Bridge resume env mismatch: requested ${reuseEnvironmentId}, backend returned ${environmentId}. Falling back to fresh session.`
        )
      );
      console.warn(
        `Warning: Could not resume session ${resumeSessionId} \u2014 its environment has expired. Creating a fresh session instead.`
      );
    } else {
      const infraResumeId = toInfraSessionId(resumeSessionId);
      const reconnectCandidates = infraResumeId === resumeSessionId ? [resumeSessionId] : [resumeSessionId, infraResumeId];
      let reconnected = false;
      let lastReconnectErr;
      for (const candidateId of reconnectCandidates) {
        try {
          await api.reconnectSession(environmentId, candidateId);
          logForDebugging(
            `[bridge:init] Session ${candidateId} re-queued via bridge/reconnect`
          );
          effectiveResumeSessionId = resumeSessionId;
          reconnected = true;
          break;
        } catch (err) {
          lastReconnectErr = err;
          logForDebugging(
            `[bridge:init] reconnectSession(${candidateId}) failed: ${errorMessage(err)}`
          );
        }
      }
      if (!reconnected) {
        const err = lastReconnectErr;
        const isFatal = err instanceof BridgeFatalError;
        if (resumePointerDir && isFatal) {
          const { clearBridgePointer } = await import("./bridgePointer-V3PVQJPH.mjs");
          await clearBridgePointer(resumePointerDir);
        }
        console.error(
          isFatal ? `Error: ${errorMessage(err)}` : `Error: Failed to reconnect session ${resumeSessionId}: ${errorMessage(err)}
The session may still be resumable \u2014 try running the same command again.`
        );
        process.exit(1);
      }
    }
  }
  logForDebugging(
    `[bridge:init] Registered, server environmentId=${environmentId}`
  );
  const startupPollConfig = getPollIntervalConfig();
  logEvent("tengu_bridge_started", {
    max_sessions: config.maxSessions,
    has_debug_file: !!config.debugFile,
    sandbox: config.sandbox,
    verbose: config.verbose,
    heartbeat_interval_ms: startupPollConfig.non_exclusive_heartbeat_interval_ms,
    spawn_mode: config.spawnMode,
    spawn_mode_source: spawnModeSource,
    multi_session_gate: multiSessionEnabled,
    pre_create_session: preCreateSession,
    worktree_available: worktreeAvailable
  });
  logForDiagnosticsNoPII("info", "bridge_started", {
    max_sessions: config.maxSessions,
    sandbox: config.sandbox,
    spawn_mode: config.spawnMode
  });
  const spawner = createSessionSpawner({
    execPath: process.execPath,
    scriptArgs: spawnScriptArgs(),
    env: process.env,
    verbose,
    sandbox,
    debugFile,
    permissionMode,
    onDebug: logForDebugging,
    onActivity: (sessionId, activity) => {
      logForDebugging(
        `[bridge:activity] sessionId=${sessionId} ${activity.type} ${activity.summary}`
      );
    },
    onPermissionRequest: (sessionId, request, _accessToken) => {
      logForDebugging(
        `[bridge:perm] sessionId=${sessionId} tool=${request.request.tool_name} request_id=${request.request_id} (not auto-approving)`
      );
    }
  });
  const logger = createBridgeLogger({ verbose });
  const { parseGitHubRepository } = await import("./detectRepository-6HDSAE4F.mjs");
  const ownerRepo = gitRepoUrl ? parseGitHubRepository(gitRepoUrl) : null;
  const repoName = ownerRepo ? ownerRepo.split("/").pop() : basename(dir);
  logger.setRepoInfo(repoName, branch);
  const toggleAvailable = spawnMode !== "single-session" && worktreeAvailable;
  if (toggleAvailable) {
    logger.setSpawnModeDisplay(spawnMode);
  }
  const onStdinData = (data) => {
    if (data[0] === 3 || data[0] === 4) {
      process.emit("SIGINT");
      return;
    }
    if (data[0] === 32) {
      logger.toggleQr();
      return;
    }
    if (data[0] === 119) {
      if (!toggleAvailable) return;
      const newMode = config.spawnMode === "same-dir" ? "worktree" : "same-dir";
      config.spawnMode = newMode;
      logEvent("tengu_bridge_spawn_mode_toggled", {
        spawn_mode: newMode
      });
      logger.logStatus(
        newMode === "worktree" ? "Spawn mode: worktree (new sessions get isolated git worktrees)" : "Spawn mode: same-dir (new sessions share the current directory)"
      );
      logger.setSpawnModeDisplay(newMode);
      logger.refreshDisplay();
      saveCurrentProjectConfig((current) => {
        if (current.remoteControlSpawnMode === newMode) return current;
        return { ...current, remoteControlSpawnMode: newMode };
      });
      return;
    }
  };
  if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on("data", onStdinData);
  }
  const controller = new AbortController();
  const onSigint = () => {
    logForDebugging("[bridge:shutdown] SIGINT received, shutting down");
    controller.abort();
  };
  const onSigterm = () => {
    logForDebugging("[bridge:shutdown] SIGTERM received, shutting down");
    controller.abort();
  };
  process.on("SIGINT", onSigint);
  process.on("SIGTERM", onSigterm);
  let initialSessionId = feature("KAIROS") && effectiveResumeSessionId ? effectiveResumeSessionId : null;
  if (preCreateSession && !(feature("KAIROS") && effectiveResumeSessionId)) {
    const { createBridgeSession } = await import("./createSession-SXZA73BZ.mjs");
    try {
      initialSessionId = await createBridgeSession({
        environmentId,
        title: name,
        events: [],
        gitRepoUrl,
        branch,
        signal: controller.signal,
        baseUrl,
        getAccessToken: getBridgeAccessToken,
        permissionMode
      });
      if (initialSessionId) {
        logForDebugging(
          `[bridge:init] Created initial session ${initialSessionId}`
        );
      }
    } catch (err) {
      logForDebugging(
        `[bridge:init] Session creation failed (non-fatal): ${errorMessage(err)}`
      );
    }
  }
  let pointerRefreshTimer = null;
  if (initialSessionId && spawnMode === "single-session") {
    const { writeBridgePointer } = await import("./bridgePointer-V3PVQJPH.mjs");
    const pointerPayload = {
      sessionId: initialSessionId,
      environmentId,
      source: "standalone"
    };
    await writeBridgePointer(config.dir, pointerPayload);
    pointerRefreshTimer = setInterval(
      writeBridgePointer,
      60 * 60 * 1e3,
      config.dir,
      pointerPayload
    );
    pointerRefreshTimer.unref?.();
  }
  try {
    await runBridgeLoop(
      config,
      environmentId,
      environmentSecret,
      api,
      spawner,
      logger,
      controller.signal,
      void 0,
      initialSessionId ?? void 0,
      async () => {
        clearOAuthTokenCache();
        await checkAndRefreshOAuthTokenIfNeeded();
        return getBridgeAccessToken();
      }
    );
  } finally {
    if (pointerRefreshTimer !== null) {
      clearInterval(pointerRefreshTimer);
    }
    process.off("SIGINT", onSigint);
    process.off("SIGTERM", onSigterm);
    process.stdin.off("data", onStdinData);
    if (process.stdin.isTTY) {
      process.stdin.setRawMode(false);
    }
    process.stdin.pause();
  }
  process.exit(0);
}
var BridgeHeadlessPermanentError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "BridgeHeadlessPermanentError";
  }
};
async function runBridgeHeadless(opts, signal) {
  const { dir, log } = opts;
  process.chdir(dir);
  const { setOriginalCwd, setCwdState } = await import("./state-BZLGZ27J.mjs");
  setOriginalCwd(dir);
  setCwdState(dir);
  const { enableConfigs, checkHasTrustDialogAccepted } = await import("./config-S5MOC745.mjs");
  enableConfigs();
  const { initSinks } = await import("./sinks-SRPXY3LH.mjs");
  initSinks();
  if (!checkHasTrustDialogAccepted()) {
    throw new BridgeHeadlessPermanentError(
      `Workspace not trusted: ${dir}. Run \`claude\` in that directory first to accept the trust dialog.`
    );
  }
  if (!opts.getAccessToken()) {
    throw new Error(BRIDGE_LOGIN_ERROR);
  }
  const { getBridgeBaseUrl } = await import("./bridgeConfig-6NNY5U6F.mjs");
  const baseUrl = getBridgeBaseUrl();
  if (baseUrl.startsWith("http://") && !baseUrl.includes("localhost") && !baseUrl.includes("127.0.0.1")) {
    throw new BridgeHeadlessPermanentError(
      "Remote Control base URL uses HTTP. Only HTTPS or localhost HTTP is allowed."
    );
  }
  const sessionIngressUrl = process.env.USER_TYPE === "ant" && process.env.CLAUDE_BRIDGE_SESSION_INGRESS_URL ? process.env.CLAUDE_BRIDGE_SESSION_INGRESS_URL : baseUrl;
  const { getBranch, getRemoteUrl, findGitRoot } = await import("./git-MPST6L6M.mjs");
  const { hasWorktreeCreateHook } = await import("./hooks-SQICILDJ.mjs");
  if (opts.spawnMode === "worktree") {
    const worktreeAvailable = hasWorktreeCreateHook() || findGitRoot(dir) !== null;
    if (!worktreeAvailable) {
      throw new BridgeHeadlessPermanentError(
        `Worktree mode requires a git repository or WorktreeCreate hooks. Directory ${dir} has neither.`
      );
    }
  }
  const branch = await getBranch();
  const gitRepoUrl = await getRemoteUrl();
  const machineName = hostname();
  const bridgeId = randomUUID();
  const config = {
    dir,
    machineName,
    branch,
    gitRepoUrl,
    maxSessions: opts.capacity,
    spawnMode: opts.spawnMode,
    verbose: false,
    sandbox: opts.sandbox,
    bridgeId,
    workerType: "claude_code",
    environmentId: randomUUID(),
    apiBaseUrl: baseUrl,
    sessionIngressUrl,
    sessionTimeoutMs: opts.sessionTimeoutMs
  };
  const api = createBridgeApiClient({
    baseUrl,
    getAccessToken: opts.getAccessToken,
    runnerVersion: MACRO.VERSION,
    onDebug: log,
    onAuth401: opts.onAuth401,
    getTrustedDeviceToken
  });
  let environmentId;
  let environmentSecret;
  try {
    const reg = await api.registerBridgeEnvironment(config);
    environmentId = reg.environment_id;
    environmentSecret = reg.environment_secret;
  } catch (err) {
    throw new Error(`Bridge registration failed: ${errorMessage(err)}`);
  }
  const spawner = createSessionSpawner({
    execPath: process.execPath,
    scriptArgs: spawnScriptArgs(),
    env: process.env,
    verbose: false,
    sandbox: opts.sandbox,
    permissionMode: opts.permissionMode,
    onDebug: log
  });
  const logger = createHeadlessBridgeLogger(log);
  logger.printBanner(config, environmentId);
  let initialSessionId;
  if (opts.createSessionOnStart) {
    const { createBridgeSession } = await import("./createSession-SXZA73BZ.mjs");
    try {
      const sid = await createBridgeSession({
        environmentId,
        title: opts.name,
        events: [],
        gitRepoUrl,
        branch,
        signal,
        baseUrl,
        getAccessToken: opts.getAccessToken,
        permissionMode: opts.permissionMode
      });
      if (sid) {
        initialSessionId = sid;
        log(`created initial session ${sid}`);
      }
    } catch (err) {
      log(`session pre-creation failed (non-fatal): ${errorMessage(err)}`);
    }
  }
  await runBridgeLoop(
    config,
    environmentId,
    environmentSecret,
    api,
    spawner,
    logger,
    signal,
    void 0,
    initialSessionId,
    async () => opts.getAccessToken()
  );
}
function createHeadlessBridgeLogger(log) {
  const noop = () => {
  };
  return {
    printBanner: (cfg, envId) => log(
      `registered environmentId=${envId} dir=${cfg.dir} spawnMode=${cfg.spawnMode} capacity=${cfg.maxSessions}`
    ),
    logSessionStart: (id, _prompt) => log(`session start ${id}`),
    logSessionComplete: (id, ms) => log(`session complete ${id} (${ms}ms)`),
    logSessionFailed: (id, err) => log(`session failed ${id}: ${err}`),
    logStatus: log,
    logVerbose: log,
    logError: (s) => log(`error: ${s}`),
    logReconnected: (ms) => log(`reconnected after ${ms}ms`),
    addSession: (id, _url) => log(`session attached ${id}`),
    removeSession: (id) => log(`session detached ${id}`),
    updateIdleStatus: noop,
    updateReconnectingStatus: noop,
    updateSessionStatus: noop,
    updateSessionActivity: noop,
    updateSessionCount: noop,
    updateFailedStatus: noop,
    setSpawnModeDisplay: noop,
    setRepoInfo: noop,
    setDebugLogPath: noop,
    setAttached: noop,
    setSessionTitle: noop,
    clearStatus: noop,
    toggleQr: noop,
    refreshDisplay: noop
  };
}
export {
  BridgeHeadlessPermanentError,
  bridgeMain,
  isConnectionError,
  isServerError,
  parseArgs,
  runBridgeHeadless,
  runBridgeLoop
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2JyaWRnZS9icmlkZ2VNYWluLnRzIiwgIi4uLy4uL3NyYy9icmlkZ2UvYnJpZGdlVUkudHMiLCAiLi4vLi4vc3JjL2JyaWRnZS9zZXNzaW9uUnVubmVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBmZWF0dXJlIH0gZnJvbSAnYnVuOmJ1bmRsZSdcbmltcG9ydCB7IHJhbmRvbVVVSUQgfSBmcm9tICdjcnlwdG8nXG5pbXBvcnQgeyBob3N0bmFtZSwgdG1wZGlyIH0gZnJvbSAnb3MnXG5pbXBvcnQgeyBiYXNlbmFtZSwgam9pbiwgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBnZXRSZW1vdGVTZXNzaW9uVXJsIH0gZnJvbSAnLi4vY29uc3RhbnRzL3Byb2R1Y3QuanMnXG5pbXBvcnQgeyBzaHV0ZG93bkRhdGFkb2cgfSBmcm9tICcuLi9zZXJ2aWNlcy9hbmFseXRpY3MvZGF0YWRvZy5qcydcbmltcG9ydCB7IHNodXRkb3duMVBFdmVudExvZ2dpbmcgfSBmcm9tICcuLi9zZXJ2aWNlcy9hbmFseXRpY3MvZmlyc3RQYXJ0eUV2ZW50TG9nZ2VyLmpzJ1xuaW1wb3J0IHsgY2hlY2tHYXRlX0NBQ0hFRF9PUl9CTE9DS0lORyB9IGZyb20gJy4uL3NlcnZpY2VzL2FuYWx5dGljcy9ncm93dGhib29rLmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICBsb2dFdmVudCxcbiAgbG9nRXZlbnRBc3luYyxcbn0gZnJvbSAnLi4vc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHsgaXNJbkJ1bmRsZWRNb2RlIH0gZnJvbSAnLi4vdXRpbHMvYnVuZGxlZE1vZGUuanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuLi91dGlscy9kZWJ1Zy5qcydcbmltcG9ydCB7IGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkgfSBmcm9tICcuLi91dGlscy9kaWFnTG9ncy5qcydcbmltcG9ydCB7IGlzRW52VHJ1dGh5LCBpc0luUHJvdGVjdGVkTmFtZXNwYWNlIH0gZnJvbSAnLi4vdXRpbHMvZW52VXRpbHMuanMnXG5pbXBvcnQgeyBlcnJvck1lc3NhZ2UgfSBmcm9tICcuLi91dGlscy9lcnJvcnMuanMnXG5pbXBvcnQgeyB0cnVuY2F0ZVRvV2lkdGggfSBmcm9tICcuLi91dGlscy9mb3JtYXQuanMnXG5pbXBvcnQgeyBsb2dFcnJvciB9IGZyb20gJy4uL3V0aWxzL2xvZy5qcydcbmltcG9ydCB7IHNsZWVwIH0gZnJvbSAnLi4vdXRpbHMvc2xlZXAuanMnXG5pbXBvcnQgeyBjcmVhdGVBZ2VudFdvcmt0cmVlLCByZW1vdmVBZ2VudFdvcmt0cmVlIH0gZnJvbSAnLi4vdXRpbHMvd29ya3RyZWUuanMnXG5pbXBvcnQge1xuICBCcmlkZ2VGYXRhbEVycm9yLFxuICBjcmVhdGVCcmlkZ2VBcGlDbGllbnQsXG4gIGlzRXhwaXJlZEVycm9yVHlwZSxcbiAgaXNTdXBwcmVzc2libGU0MDMsXG4gIHZhbGlkYXRlQnJpZGdlSWQsXG59IGZyb20gJy4vYnJpZGdlQXBpLmpzJ1xuaW1wb3J0IHsgZm9ybWF0RHVyYXRpb24gfSBmcm9tICcuL2JyaWRnZVN0YXR1c1V0aWwuanMnXG5pbXBvcnQgeyBjcmVhdGVCcmlkZ2VMb2dnZXIgfSBmcm9tICcuL2JyaWRnZVVJLmpzJ1xuaW1wb3J0IHsgY3JlYXRlQ2FwYWNpdHlXYWtlIH0gZnJvbSAnLi9jYXBhY2l0eVdha2UuanMnXG5pbXBvcnQgeyBkZXNjcmliZUF4aW9zRXJyb3IgfSBmcm9tICcuL2RlYnVnVXRpbHMuanMnXG5pbXBvcnQgeyBjcmVhdGVUb2tlblJlZnJlc2hTY2hlZHVsZXIgfSBmcm9tICcuL2p3dFV0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0UG9sbEludGVydmFsQ29uZmlnIH0gZnJvbSAnLi9wb2xsQ29uZmlnLmpzJ1xuaW1wb3J0IHsgdG9Db21wYXRTZXNzaW9uSWQsIHRvSW5mcmFTZXNzaW9uSWQgfSBmcm9tICcuL3Nlc3Npb25JZENvbXBhdC5qcydcbmltcG9ydCB7IGNyZWF0ZVNlc3Npb25TcGF3bmVyLCBzYWZlRmlsZW5hbWVJZCB9IGZyb20gJy4vc2Vzc2lvblJ1bm5lci5qcydcbmltcG9ydCB7IGdldFRydXN0ZWREZXZpY2VUb2tlbiB9IGZyb20gJy4vdHJ1c3RlZERldmljZS5qcydcbmltcG9ydCB7XG4gIEJSSURHRV9MT0dJTl9FUlJPUixcbiAgdHlwZSBCcmlkZ2VBcGlDbGllbnQsXG4gIHR5cGUgQnJpZGdlQ29uZmlnLFxuICB0eXBlIEJyaWRnZUxvZ2dlcixcbiAgREVGQVVMVF9TRVNTSU9OX1RJTUVPVVRfTVMsXG4gIHR5cGUgU2Vzc2lvbkRvbmVTdGF0dXMsXG4gIHR5cGUgU2Vzc2lvbkhhbmRsZSxcbiAgdHlwZSBTZXNzaW9uU3Bhd25lcixcbiAgdHlwZSBTZXNzaW9uU3Bhd25PcHRzLFxuICB0eXBlIFNwYXduTW9kZSxcbn0gZnJvbSAnLi90eXBlcy5qcydcbmltcG9ydCB7XG4gIGJ1aWxkQ0NSdjJTZGtVcmwsXG4gIGJ1aWxkU2RrVXJsLFxuICBkZWNvZGVXb3JrU2VjcmV0LFxuICByZWdpc3RlcldvcmtlcixcbiAgc2FtZVNlc3Npb25JZCxcbn0gZnJvbSAnLi93b3JrU2VjcmV0LmpzJ1xuXG5leHBvcnQgdHlwZSBCYWNrb2ZmQ29uZmlnID0ge1xuICBjb25uSW5pdGlhbE1zOiBudW1iZXJcbiAgY29ubkNhcE1zOiBudW1iZXJcbiAgY29ubkdpdmVVcE1zOiBudW1iZXJcbiAgZ2VuZXJhbEluaXRpYWxNczogbnVtYmVyXG4gIGdlbmVyYWxDYXBNczogbnVtYmVyXG4gIGdlbmVyYWxHaXZlVXBNczogbnVtYmVyXG4gIC8qKiBTSUdURVJNXHUyMTkyU0lHS0lMTCBncmFjZSBwZXJpb2Qgb24gc2h1dGRvd24uIERlZmF1bHQgMzBzLiAqL1xuICBzaHV0ZG93bkdyYWNlTXM/OiBudW1iZXJcbiAgLyoqIHN0b3BXb3JrV2l0aFJldHJ5IGJhc2UgZGVsYXkgKDFzLzJzLzRzIGJhY2tvZmYpLiBEZWZhdWx0IDEwMDBtcy4gKi9cbiAgc3RvcFdvcmtCYXNlRGVsYXlNcz86IG51bWJlclxufVxuXG5jb25zdCBERUZBVUxUX0JBQ0tPRkY6IEJhY2tvZmZDb25maWcgPSB7XG4gIGNvbm5Jbml0aWFsTXM6IDJfMDAwLFxuICBjb25uQ2FwTXM6IDEyMF8wMDAsIC8vIDIgbWludXRlc1xuICBjb25uR2l2ZVVwTXM6IDYwMF8wMDAsIC8vIDEwIG1pbnV0ZXNcbiAgZ2VuZXJhbEluaXRpYWxNczogNTAwLFxuICBnZW5lcmFsQ2FwTXM6IDMwXzAwMCxcbiAgZ2VuZXJhbEdpdmVVcE1zOiA2MDBfMDAwLCAvLyAxMCBtaW51dGVzXG59XG5cbi8qKiBTdGF0dXMgdXBkYXRlIGludGVydmFsIGZvciB0aGUgbGl2ZSBkaXNwbGF5IChtcykuICovXG5jb25zdCBTVEFUVVNfVVBEQVRFX0lOVEVSVkFMX01TID0gMV8wMDBcbmNvbnN0IFNQQVdOX1NFU1NJT05TX0RFRkFVTFQgPSAzMlxuXG4vKipcbiAqIEdyb3d0aEJvb2sgZ2F0ZSBmb3IgbXVsdGktc2Vzc2lvbiBzcGF3biBtb2RlcyAoLS1zcGF3biAvIC0tY2FwYWNpdHkgLyAtLWNyZWF0ZS1zZXNzaW9uLWluLWRpcikuXG4gKiBTaWJsaW5nIG9mIHRlbmd1X2Njcl9icmlkZ2VfbXVsdGlfZW52aXJvbm1lbnQgKG11bHRpcGxlIGVudnMgcGVyIGhvc3Q6ZGlyKSBcdTIwMTRcbiAqIHRoaXMgb25lIGVuYWJsZXMgbXVsdGlwbGUgc2Vzc2lvbnMgcGVyIGVudmlyb25tZW50LlxuICogUm9sbG91dCBzdGFnZWQgdmlhIHRhcmdldGluZyBydWxlczogYW50cyBmaXJzdCwgdGhlbiBncmFkdWFsIGV4dGVybmFsLlxuICpcbiAqIFVzZXMgdGhlIGJsb2NraW5nIGdhdGUgY2hlY2sgc28gYSBzdGFsZSBkaXNrLWNhY2hlIG1pc3MgZG9lc24ndCB1bmZhaXJseVxuICogZGVueSBhY2Nlc3MuIFRoZSBmYXN0IHBhdGggKGNhY2hlIGhhcyB0cnVlKSBpcyBzdGlsbCBpbnN0YW50OyBvbmx5IHRoZVxuICogY29sZC1zdGFydCBwYXRoIGF3YWl0cyB0aGUgc2VydmVyIGZldGNoLCBhbmQgdGhhdCBmZXRjaCBhbHNvIHNlZWRzIHRoZVxuICogZGlzayBjYWNoZSBmb3IgbmV4dCB0aW1lLlxuICovXG5hc3luYyBmdW5jdGlvbiBpc011bHRpU2Vzc2lvblNwYXduRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgcmV0dXJuIGNoZWNrR2F0ZV9DQUNIRURfT1JfQkxPQ0tJTkcoJ3Rlbmd1X2Njcl9icmlkZ2VfbXVsdGlfc2Vzc2lvbicpXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdGhyZXNob2xkIGZvciBkZXRlY3Rpbmcgc3lzdGVtIHNsZWVwL3dha2UgaW4gdGhlIHBvbGwgbG9vcC5cbiAqIE11c3QgZXhjZWVkIHRoZSBtYXggYmFja29mZiBjYXAgXHUyMDE0IG90aGVyd2lzZSBub3JtYWwgYmFja29mZiBkZWxheXMgdHJpZ2dlclxuICogZmFsc2Ugc2xlZXAgZGV0ZWN0aW9uIChyZXNldHRpbmcgdGhlIGVycm9yIGJ1ZGdldCBpbmRlZmluaXRlbHkpLiBVc2luZ1xuICogMlx1MDBENyB0aGUgY29ubmVjdGlvbiBiYWNrb2ZmIGNhcCwgbWF0Y2hpbmcgdGhlIHBhdHRlcm4gaW4gV2ViU29ja2V0VHJhbnNwb3J0XG4gKiBhbmQgcmVwbEJyaWRnZS5cbiAqL1xuZnVuY3Rpb24gcG9sbFNsZWVwRGV0ZWN0aW9uVGhyZXNob2xkTXMoYmFja29mZjogQmFja29mZkNvbmZpZyk6IG51bWJlciB7XG4gIHJldHVybiBiYWNrb2ZmLmNvbm5DYXBNcyAqIDJcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBhcmdzIHRoYXQgbXVzdCBwcmVjZWRlIENMSSBmbGFncyB3aGVuIHNwYXduaW5nIGEgY2hpbGQgY2xhdWRlXG4gKiBwcm9jZXNzLiBJbiBjb21waWxlZCBiaW5hcmllcywgcHJvY2Vzcy5leGVjUGF0aCBpcyB0aGUgY2xhdWRlIGJpbmFyeSBpdHNlbGZcbiAqIGFuZCBhcmdzIGdvIGRpcmVjdGx5IHRvIGl0LiBJbiBucG0gaW5zdGFsbHMgKG5vZGUgcnVubmluZyBjbGkuanMpLFxuICogcHJvY2Vzcy5leGVjUGF0aCBpcyB0aGUgbm9kZSBydW50aW1lIFx1MjAxNCB0aGUgY2hpbGQgc3Bhd24gbXVzdCBwYXNzIHRoZSBzY3JpcHRcbiAqIHBhdGggYXMgdGhlIGZpcnN0IGFyZywgb3RoZXJ3aXNlIG5vZGUgaW50ZXJwcmV0cyAtLXNkay11cmwgYXMgYSBub2RlIG9wdGlvblxuICogYW5kIGV4aXRzIHdpdGggXCJiYWQgb3B0aW9uOiAtLXNkay11cmxcIi4gU2VlIGFudGhyb3BpY3MvY2xhdWRlLWNvZGUjMjgzMzQuXG4gKi9cbmZ1bmN0aW9uIHNwYXduU2NyaXB0QXJncygpOiBzdHJpbmdbXSB7XG4gIGlmIChpc0luQnVuZGxlZE1vZGUoKSB8fCAhcHJvY2Vzcy5hcmd2WzFdKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgcmV0dXJuIFtwcm9jZXNzLmFyZ3ZbMV1dXG59XG5cbi8qKiBBdHRlbXB0IHRvIHNwYXduIGEgc2Vzc2lvbjsgcmV0dXJucyBlcnJvciBzdHJpbmcgaWYgc3Bhd24gdGhyb3dzLiAqL1xuZnVuY3Rpb24gc2FmZVNwYXduKFxuICBzcGF3bmVyOiBTZXNzaW9uU3Bhd25lcixcbiAgb3B0czogU2Vzc2lvblNwYXduT3B0cyxcbiAgZGlyOiBzdHJpbmcsXG4pOiBTZXNzaW9uSGFuZGxlIHwgc3RyaW5nIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gc3Bhd25lci5zcGF3bihvcHRzLCBkaXIpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnN0IGVyck1zZyA9IGVycm9yTWVzc2FnZShlcnIpXG4gICAgbG9nRXJyb3IobmV3IEVycm9yKGBTZXNzaW9uIHNwYXduIGZhaWxlZDogJHtlcnJNc2d9YCkpXG4gICAgcmV0dXJuIGVyck1zZ1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBydW5CcmlkZ2VMb29wKFxuICBjb25maWc6IEJyaWRnZUNvbmZpZyxcbiAgZW52aXJvbm1lbnRJZDogc3RyaW5nLFxuICBlbnZpcm9ubWVudFNlY3JldDogc3RyaW5nLFxuICBhcGk6IEJyaWRnZUFwaUNsaWVudCxcbiAgc3Bhd25lcjogU2Vzc2lvblNwYXduZXIsXG4gIGxvZ2dlcjogQnJpZGdlTG9nZ2VyLFxuICBzaWduYWw6IEFib3J0U2lnbmFsLFxuICBiYWNrb2ZmQ29uZmlnOiBCYWNrb2ZmQ29uZmlnID0gREVGQVVMVF9CQUNLT0ZGLFxuICBpbml0aWFsU2Vzc2lvbklkPzogc3RyaW5nLFxuICBnZXRBY2Nlc3NUb2tlbj86ICgpID0+IHN0cmluZyB8IHVuZGVmaW5lZCB8IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPixcbik6IFByb21pc2U8dm9pZD4ge1xuICAvLyBMb2NhbCBhYm9ydCBjb250cm9sbGVyIHNvIHRoYXQgb25TZXNzaW9uRG9uZSBjYW4gc3RvcCB0aGUgcG9sbCBsb29wLlxuICAvLyBMaW5rZWQgdG8gdGhlIGluY29taW5nIHNpZ25hbCBzbyBleHRlcm5hbCBhYm9ydHMgYWxzbyB3b3JrLlxuICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG4gIGlmIChzaWduYWwuYWJvcnRlZCkge1xuICAgIGNvbnRyb2xsZXIuYWJvcnQoKVxuICB9IGVsc2Uge1xuICAgIHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsICgpID0+IGNvbnRyb2xsZXIuYWJvcnQoKSwgeyBvbmNlOiB0cnVlIH0pXG4gIH1cbiAgY29uc3QgbG9vcFNpZ25hbCA9IGNvbnRyb2xsZXIuc2lnbmFsXG5cbiAgY29uc3QgYWN0aXZlU2Vzc2lvbnMgPSBuZXcgTWFwPHN0cmluZywgU2Vzc2lvbkhhbmRsZT4oKVxuICBjb25zdCBzZXNzaW9uU3RhcnRUaW1lcyA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KClcbiAgY29uc3Qgc2Vzc2lvbldvcmtJZHMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpXG4gIC8vIENvbXBhdC1zdXJmYWNlIElEIChzZXNzaW9uXyopIGNvbXB1dGVkIG9uY2UgYXQgc3Bhd24gYW5kIGNhY2hlZCBzb1xuICAvLyBjbGVhbnVwIGFuZCBzdGF0dXMtdXBkYXRlIHRpY2tzIHVzZSB0aGUgc2FtZSBrZXkgcmVnYXJkbGVzcyBvZiB3aGV0aGVyXG4gIC8vIHRoZSB0ZW5ndV9icmlkZ2VfcmVwbF92Ml9jc2Vfc2hpbV9lbmFibGVkIGdhdGUgZmxpcHMgbWlkLXNlc3Npb24uXG4gIGNvbnN0IHNlc3Npb25Db21wYXRJZHMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpXG4gIC8vIFNlc3Npb24gaW5ncmVzcyBKV1RzIGZvciBoZWFydGJlYXQgYXV0aCwga2V5ZWQgYnkgc2Vzc2lvbklkLlxuICAvLyBTdG9yZWQgc2VwYXJhdGVseSBmcm9tIGhhbmRsZS5hY2Nlc3NUb2tlbiBiZWNhdXNlIHRoZSB0b2tlbiByZWZyZXNoXG4gIC8vIHNjaGVkdWxlciBvdmVyd3JpdGVzIHRoYXQgZmllbGQgd2l0aCB0aGUgT0F1dGggdG9rZW4gKH4zaDU1bSBpbikuXG4gIGNvbnN0IHNlc3Npb25JbmdyZXNzVG9rZW5zID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKVxuICBjb25zdCBzZXNzaW9uVGltZXJzID0gbmV3IE1hcDxzdHJpbmcsIFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+PigpXG4gIGNvbnN0IGNvbXBsZXRlZFdvcmtJZHMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICBjb25zdCBzZXNzaW9uV29ya3RyZWVzID0gbmV3IE1hcDxcbiAgICBzdHJpbmcsXG4gICAge1xuICAgICAgd29ya3RyZWVQYXRoOiBzdHJpbmdcbiAgICAgIHdvcmt0cmVlQnJhbmNoPzogc3RyaW5nXG4gICAgICBnaXRSb290Pzogc3RyaW5nXG4gICAgICBob29rQmFzZWQ/OiBib29sZWFuXG4gICAgfVxuICA+KClcbiAgLy8gVHJhY2sgc2Vzc2lvbnMga2lsbGVkIGJ5IHRoZSB0aW1lb3V0IHdhdGNoZG9nIHNvIG9uU2Vzc2lvbkRvbmUgY2FuXG4gIC8vIGRpc3Rpbmd1aXNoIHRoZW0gZnJvbSBzZXJ2ZXItaW5pdGlhdGVkIG9yIHNodXRkb3duIGludGVycnVwdHMuXG4gIGNvbnN0IHRpbWVkT3V0U2Vzc2lvbnMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICAvLyBTZXNzaW9ucyB0aGF0IGFscmVhZHkgaGF2ZSBhIHRpdGxlIChzZXJ2ZXItc2V0IG9yIGJyaWRnZS1kZXJpdmVkKSBzb1xuICAvLyBvbkZpcnN0VXNlck1lc3NhZ2UgZG9lc24ndCBjbG9iYmVyIGEgdXNlci1hc3NpZ25lZCAtLW5hbWUgLyB3ZWIgcmVuYW1lLlxuICAvLyBLZXllZCBieSBjb21wYXRTZXNzaW9uSWQgdG8gbWF0Y2ggbG9nZ2VyLnNldFNlc3Npb25UaXRsZSdzIGtleS5cbiAgY29uc3QgdGl0bGVkU2Vzc2lvbnMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICAvLyBTaWduYWwgdG8gd2FrZSB0aGUgYXQtY2FwYWNpdHkgc2xlZXAgZWFybHkgd2hlbiBhIHNlc3Npb24gY29tcGxldGVzLFxuICAvLyBzbyB0aGUgYnJpZGdlIGNhbiBpbW1lZGlhdGVseSBhY2NlcHQgbmV3IHdvcmsuXG4gIGNvbnN0IGNhcGFjaXR5V2FrZSA9IGNyZWF0ZUNhcGFjaXR5V2FrZShsb29wU2lnbmFsKVxuXG4gIC8qKlxuICAgKiBIZWFydGJlYXQgYWxsIGFjdGl2ZSB3b3JrIGl0ZW1zLlxuICAgKiBSZXR1cm5zICdvaycgaWYgYXQgbGVhc3Qgb25lIGhlYXJ0YmVhdCBzdWNjZWVkZWQsICdhdXRoX2ZhaWxlZCcgaWYgYW55XG4gICAqIGdvdCBhIDQwMS80MDMgKEpXVCBleHBpcmVkIFx1MjAxNCByZS1xdWV1ZWQgdmlhIHJlY29ubmVjdFNlc3Npb24gc28gdGhlIG5leHRcbiAgICogcG9sbCBkZWxpdmVycyBmcmVzaCB3b3JrKSwgb3IgJ2ZhaWxlZCcgaWYgYWxsIGZhaWxlZCBmb3Igb3RoZXIgcmVhc29ucy5cbiAgICovXG4gIGFzeW5jIGZ1bmN0aW9uIGhlYXJ0YmVhdEFjdGl2ZVdvcmtJdGVtcygpOiBQcm9taXNlPFxuICAgICdvaycgfCAnYXV0aF9mYWlsZWQnIHwgJ2ZhdGFsJyB8ICdmYWlsZWQnXG4gID4ge1xuICAgIGxldCBhbnlTdWNjZXNzID0gZmFsc2VcbiAgICBsZXQgYW55RmF0YWwgPSBmYWxzZVxuICAgIGNvbnN0IGF1dGhGYWlsZWRTZXNzaW9uczogc3RyaW5nW10gPSBbXVxuICAgIGZvciAoY29uc3QgW3Nlc3Npb25JZF0gb2YgYWN0aXZlU2Vzc2lvbnMpIHtcbiAgICAgIGNvbnN0IHdvcmtJZCA9IHNlc3Npb25Xb3JrSWRzLmdldChzZXNzaW9uSWQpXG4gICAgICBjb25zdCBpbmdyZXNzVG9rZW4gPSBzZXNzaW9uSW5ncmVzc1Rva2Vucy5nZXQoc2Vzc2lvbklkKVxuICAgICAgaWYgKCF3b3JrSWQgfHwgIWluZ3Jlc3NUb2tlbikge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgYXBpLmhlYXJ0YmVhdFdvcmsoZW52aXJvbm1lbnRJZCwgd29ya0lkLCBpbmdyZXNzVG9rZW4pXG4gICAgICAgIGFueVN1Y2Nlc3MgPSB0cnVlXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgIGBbYnJpZGdlOmhlYXJ0YmVhdF0gRmFpbGVkIGZvciBzZXNzaW9uSWQ9JHtzZXNzaW9uSWR9IHdvcmtJZD0ke3dvcmtJZH06ICR7ZXJyb3JNZXNzYWdlKGVycil9YCxcbiAgICAgICAgKVxuICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgQnJpZGdlRmF0YWxFcnJvcikge1xuICAgICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9icmlkZ2VfaGVhcnRiZWF0X2Vycm9yJywge1xuICAgICAgICAgICAgc3RhdHVzOlxuICAgICAgICAgICAgICBlcnIuc3RhdHVzIGFzIHVua25vd24gYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgICAgIGVycm9yX3R5cGU6IChlcnIuc3RhdHVzID09PSA0MDEgfHwgZXJyLnN0YXR1cyA9PT0gNDAzXG4gICAgICAgICAgICAgID8gJ2F1dGhfZmFpbGVkJ1xuICAgICAgICAgICAgICA6ICdmYXRhbCcpIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgICAgfSlcbiAgICAgICAgICBpZiAoZXJyLnN0YXR1cyA9PT0gNDAxIHx8IGVyci5zdGF0dXMgPT09IDQwMykge1xuICAgICAgICAgICAgYXV0aEZhaWxlZFNlc3Npb25zLnB1c2goc2Vzc2lvbklkKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyA0MDQvNDEwID0gZW52aXJvbm1lbnQgZXhwaXJlZCBvciBkZWxldGVkIFx1MjAxNCBubyBwb2ludCByZXRyeWluZ1xuICAgICAgICAgICAgYW55RmF0YWwgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEpXVCBleHBpcmVkIFx1MjE5MiB0cmlnZ2VyIHNlcnZlci1zaWRlIHJlLWRpc3BhdGNoLiBXaXRob3V0IHRoaXMsIHdvcmsgc3RheXNcbiAgICAvLyBBQ0snZCBvdXQgb2YgdGhlIFJlZGlzIFBFTCBhbmQgcG9sbCByZXR1cm5zIGVtcHR5IGZvcmV2ZXIgKENDLTEyNjMpLlxuICAgIC8vIFRoZSBleGlzdGluZ0hhbmRsZSBwYXRoIGJlbG93IGRlbGl2ZXJzIHRoZSBmcmVzaCB0b2tlbiB0byB0aGUgY2hpbGQuXG4gICAgLy8gc2Vzc2lvbklkIGlzIGFscmVhZHkgaW4gdGhlIGZvcm1hdCAvYnJpZGdlL3JlY29ubmVjdCBleHBlY3RzOiBpdCBjb21lc1xuICAgIC8vIGZyb20gd29yay5kYXRhLmlkLCB3aGljaCBtYXRjaGVzIHRoZSBzZXJ2ZXIncyBFbnZpcm9ubWVudEluc3RhbmNlIHN0b3JlXG4gICAgLy8gKGNzZV8qIHVuZGVyIHRoZSBjb21wYXQgZ2F0ZSwgc2Vzc2lvbl8qIG90aGVyd2lzZSkuXG4gICAgZm9yIChjb25zdCBzZXNzaW9uSWQgb2YgYXV0aEZhaWxlZFNlc3Npb25zKSB7XG4gICAgICBsb2dnZXIubG9nVmVyYm9zZShcbiAgICAgICAgYFNlc3Npb24gJHtzZXNzaW9uSWR9IHRva2VuIGV4cGlyZWQgXHUyMDE0IHJlLXF1ZXVpbmcgdmlhIGJyaWRnZS9yZWNvbm5lY3RgLFxuICAgICAgKVxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgYXBpLnJlY29ubmVjdFNlc3Npb24oZW52aXJvbm1lbnRJZCwgc2Vzc2lvbklkKVxuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgYFticmlkZ2U6aGVhcnRiZWF0XSBSZS1xdWV1ZWQgc2Vzc2lvbklkPSR7c2Vzc2lvbklkfSB2aWEgYnJpZGdlL3JlY29ubmVjdGAsXG4gICAgICAgIClcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBsb2dnZXIubG9nRXJyb3IoXG4gICAgICAgICAgYEZhaWxlZCB0byByZWZyZXNoIHNlc3Npb24gJHtzZXNzaW9uSWR9IHRva2VuOiAke2Vycm9yTWVzc2FnZShlcnIpfWAsXG4gICAgICAgIClcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgIGBbYnJpZGdlOmhlYXJ0YmVhdF0gcmVjb25uZWN0U2Vzc2lvbigke3Nlc3Npb25JZH0pIGZhaWxlZDogJHtlcnJvck1lc3NhZ2UoZXJyKX1gLFxuICAgICAgICAgIHsgbGV2ZWw6ICdlcnJvcicgfSxcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYW55RmF0YWwpIHtcbiAgICAgIHJldHVybiAnZmF0YWwnXG4gICAgfVxuICAgIGlmIChhdXRoRmFpbGVkU2Vzc2lvbnMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuICdhdXRoX2ZhaWxlZCdcbiAgICB9XG4gICAgcmV0dXJuIGFueVN1Y2Nlc3MgPyAnb2snIDogJ2ZhaWxlZCdcbiAgfVxuXG4gIC8vIFNlc3Npb25zIHNwYXduZWQgd2l0aCBDQ1IgdjIgZW52IHZhcnMuIHYyIGNoaWxkcmVuIGNhbm5vdCB1c2UgT0F1dGhcbiAgLy8gdG9rZW5zIChDQ1Igd29ya2VyIGVuZHBvaW50cyB2YWxpZGF0ZSB0aGUgSldUJ3Mgc2Vzc2lvbl9pZCBjbGFpbSxcbiAgLy8gcmVnaXN0ZXJfd29ya2VyLmdvOjMyKSwgc28gb25SZWZyZXNoIHRyaWdnZXJzIHNlcnZlciByZS1kaXNwYXRjaFxuICAvLyBpbnN0ZWFkIFx1MjAxNCB0aGUgbmV4dCBwb2xsIGRlbGl2ZXJzIGZyZXNoIHdvcmsgd2l0aCBhIG5ldyBKV1QgdmlhIHRoZVxuICAvLyBleGlzdGluZ0hhbmRsZSBwYXRoIGJlbG93LlxuICBjb25zdCB2MlNlc3Npb25zID0gbmV3IFNldDxzdHJpbmc+KClcblxuICAvLyBQcm9hY3RpdmUgdG9rZW4gcmVmcmVzaDogc2NoZWR1bGVzIGEgdGltZXIgNW1pbiBiZWZvcmUgdGhlIHNlc3Npb25cbiAgLy8gaW5ncmVzcyBKV1QgZXhwaXJlcy4gdjEgZGVsaXZlcnMgT0F1dGggZGlyZWN0bHk7IHYyIGNhbGxzXG4gIC8vIHJlY29ubmVjdFNlc3Npb24gdG8gdHJpZ2dlciBzZXJ2ZXIgcmUtZGlzcGF0Y2ggKENDLTEyNjM6IHdpdGhvdXRcbiAgLy8gdGhpcywgdjIgZGFlbW9uIHNlc3Npb25zIHNpbGVudGx5IGRpZSBhdCB+NWggc2luY2UgdGhlIHNlcnZlciBkb2VzXG4gIC8vIG5vdCBhdXRvLXJlLWRpc3BhdGNoIEFDSydkIHdvcmsgb24gbGVhc2UgZXhwaXJ5KS5cbiAgY29uc3QgdG9rZW5SZWZyZXNoID0gZ2V0QWNjZXNzVG9rZW5cbiAgICA/IGNyZWF0ZVRva2VuUmVmcmVzaFNjaGVkdWxlcih7XG4gICAgICAgIGdldEFjY2Vzc1Rva2VuLFxuICAgICAgICBvblJlZnJlc2g6IChzZXNzaW9uSWQsIG9hdXRoVG9rZW4pID0+IHtcbiAgICAgICAgICBjb25zdCBoYW5kbGUgPSBhY3RpdmVTZXNzaW9ucy5nZXQoc2Vzc2lvbklkKVxuICAgICAgICAgIGlmICghaGFuZGxlKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHYyU2Vzc2lvbnMuaGFzKHNlc3Npb25JZCkpIHtcbiAgICAgICAgICAgIGxvZ2dlci5sb2dWZXJib3NlKFxuICAgICAgICAgICAgICBgUmVmcmVzaGluZyBzZXNzaW9uICR7c2Vzc2lvbklkfSB0b2tlbiB2aWEgYnJpZGdlL3JlY29ubmVjdGAsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICB2b2lkIGFwaVxuICAgICAgICAgICAgICAucmVjb25uZWN0U2Vzc2lvbihlbnZpcm9ubWVudElkLCBzZXNzaW9uSWQpXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyOiB1bmtub3duKSA9PiB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKFxuICAgICAgICAgICAgICAgICAgYEZhaWxlZCB0byByZWZyZXNoIHNlc3Npb24gJHtzZXNzaW9uSWR9IHRva2VuOiAke2Vycm9yTWVzc2FnZShlcnIpfWAsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgICAgIGBbYnJpZGdlOnRva2VuXSByZWNvbm5lY3RTZXNzaW9uKCR7c2Vzc2lvbklkfSkgZmFpbGVkOiAke2Vycm9yTWVzc2FnZShlcnIpfWAsXG4gICAgICAgICAgICAgICAgICB7IGxldmVsOiAnZXJyb3InIH0sXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoYW5kbGUudXBkYXRlQWNjZXNzVG9rZW4ob2F1dGhUb2tlbilcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsOiAnYnJpZGdlJyxcbiAgICAgIH0pXG4gICAgOiBudWxsXG4gIGNvbnN0IGxvb3BTdGFydFRpbWUgPSBEYXRlLm5vdygpXG4gIC8vIFRyYWNrIGFsbCBpbi1mbGlnaHQgY2xlYW51cCBwcm9taXNlcyAoc3RvcFdvcmssIHdvcmt0cmVlIHJlbW92YWwpIHNvXG4gIC8vIHRoZSBzaHV0ZG93biBzZXF1ZW5jZSBjYW4gYXdhaXQgdGhlbSBiZWZvcmUgcHJvY2Vzcy5leGl0KCkuXG4gIGNvbnN0IHBlbmRpbmdDbGVhbnVwcyA9IG5ldyBTZXQ8UHJvbWlzZTx1bmtub3duPj4oKVxuICBmdW5jdGlvbiB0cmFja0NsZWFudXAocDogUHJvbWlzZTx1bmtub3duPik6IHZvaWQge1xuICAgIHBlbmRpbmdDbGVhbnVwcy5hZGQocClcbiAgICB2b2lkIHAuZmluYWxseSgoKSA9PiBwZW5kaW5nQ2xlYW51cHMuZGVsZXRlKHApKVxuICB9XG4gIGxldCBjb25uQmFja29mZiA9IDBcbiAgbGV0IGdlbmVyYWxCYWNrb2ZmID0gMFxuICBsZXQgY29ubkVycm9yU3RhcnQ6IG51bWJlciB8IG51bGwgPSBudWxsXG4gIGxldCBnZW5lcmFsRXJyb3JTdGFydDogbnVtYmVyIHwgbnVsbCA9IG51bGxcbiAgbGV0IGxhc3RQb2xsRXJyb3JUaW1lOiBudW1iZXIgfCBudWxsID0gbnVsbFxuICBsZXQgc3RhdHVzVXBkYXRlVGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldEludGVydmFsPiB8IG51bGwgPSBudWxsXG4gIC8vIFNldCBieSBCcmlkZ2VGYXRhbEVycm9yIGFuZCBnaXZlLXVwIHBhdGhzIHNvIHRoZSBzaHV0ZG93biBibG9jayBjYW5cbiAgLy8gc2tpcCB0aGUgcmVzdW1lIG1lc3NhZ2UgKHJlc3VtZSBpcyBpbXBvc3NpYmxlIGFmdGVyIGVudiBleHBpcnkvYXV0aFxuICAvLyBmYWlsdXJlL3N1c3RhaW5lZCBjb25uZWN0aW9uIGVycm9ycykuXG4gIGxldCBmYXRhbEV4aXQgPSBmYWxzZVxuXG4gIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICBgW2JyaWRnZTp3b3JrXSBTdGFydGluZyBwb2xsIGxvb3Agc3Bhd25Nb2RlPSR7Y29uZmlnLnNwYXduTW9kZX0gbWF4U2Vzc2lvbnM9JHtjb25maWcubWF4U2Vzc2lvbnN9IGVudmlyb25tZW50SWQ9JHtlbnZpcm9ubWVudElkfWAsXG4gIClcbiAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnaW5mbycsICdicmlkZ2VfbG9vcF9zdGFydGVkJywge1xuICAgIG1heF9zZXNzaW9uczogY29uZmlnLm1heFNlc3Npb25zLFxuICAgIHNwYXduX21vZGU6IGNvbmZpZy5zcGF3bk1vZGUsXG4gIH0pXG5cbiAgLy8gRm9yIGFudCB1c2Vycywgc2hvdyB3aGVyZSBzZXNzaW9uIGRlYnVnIGxvZ3Mgd2lsbCBsYW5kIHNvIHRoZXkgY2FuIHRhaWwgdGhlbS5cbiAgLy8gc2Vzc2lvblJ1bm5lci50cyB1c2VzIHRoZSBzYW1lIGJhc2UgcGF0aC4gRmlsZSBhcHBlYXJzIG9uY2UgYSBzZXNzaW9uIHNwYXducy5cbiAgaWYgKHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCcpIHtcbiAgICBsZXQgZGVidWdHbG9iOiBzdHJpbmdcbiAgICBpZiAoY29uZmlnLmRlYnVnRmlsZSkge1xuICAgICAgY29uc3QgZXh0ID0gY29uZmlnLmRlYnVnRmlsZS5sYXN0SW5kZXhPZignLicpXG4gICAgICBkZWJ1Z0dsb2IgPVxuICAgICAgICBleHQgPiAwXG4gICAgICAgICAgPyBgJHtjb25maWcuZGVidWdGaWxlLnNsaWNlKDAsIGV4dCl9LSoke2NvbmZpZy5kZWJ1Z0ZpbGUuc2xpY2UoZXh0KX1gXG4gICAgICAgICAgOiBgJHtjb25maWcuZGVidWdGaWxlfS0qYFxuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Z0dsb2IgPSBqb2luKHRtcGRpcigpLCAnY2xhdWRlJywgJ2JyaWRnZS1zZXNzaW9uLSoubG9nJylcbiAgICB9XG4gICAgbG9nZ2VyLnNldERlYnVnTG9nUGF0aChkZWJ1Z0dsb2IpXG4gIH1cblxuICBsb2dnZXIucHJpbnRCYW5uZXIoY29uZmlnLCBlbnZpcm9ubWVudElkKVxuXG4gIC8vIFNlZWQgdGhlIGxvZ2dlcidzIHNlc3Npb24gY291bnQgKyBzcGF3biBtb2RlIGJlZm9yZSBhbnkgcmVuZGVyLiBXaXRob3V0XG4gIC8vIHRoaXMsIHNldEF0dGFjaGVkKCkgYmVsb3cgcmVuZGVycyB3aXRoIHRoZSBsb2dnZXIncyBkZWZhdWx0IHNlc3Npb25NYXg9MSxcbiAgLy8gc2hvd2luZyBcIkNhcGFjaXR5OiAwLzFcIiB1bnRpbCB0aGUgc3RhdHVzIHRpY2tlciBraWNrcyBpbiAod2hpY2ggaXMgZ2F0ZWRcbiAgLy8gYnkgIWluaXRpYWxTZXNzaW9uSWQgYW5kIG9ubHkgc3RhcnRzIGFmdGVyIHRoZSBwb2xsIGxvb3AgcGlja3MgdXAgd29yaykuXG4gIGxvZ2dlci51cGRhdGVTZXNzaW9uQ291bnQoMCwgY29uZmlnLm1heFNlc3Npb25zLCBjb25maWcuc3Bhd25Nb2RlKVxuXG4gIC8vIElmIGFuIGluaXRpYWwgc2Vzc2lvbiB3YXMgcHJlLWNyZWF0ZWQsIHNob3cgaXRzIFVSTCBmcm9tIHRoZSBzdGFydCBzb1xuICAvLyB0aGUgdXNlciBjYW4gY2xpY2sgdGhyb3VnaCBpbW1lZGlhdGVseSAobWF0Y2hpbmcgL3JlbW90ZS1jb250cm9sIGJlaGF2aW9yKS5cbiAgaWYgKGluaXRpYWxTZXNzaW9uSWQpIHtcbiAgICBsb2dnZXIuc2V0QXR0YWNoZWQoaW5pdGlhbFNlc3Npb25JZClcbiAgfVxuXG4gIC8qKiBSZWZyZXNoIHRoZSBpbmxpbmUgc3RhdHVzIGRpc3BsYXkuIFNob3dzIGlkbGUgb3IgYWN0aXZlIGRlcGVuZGluZyBvbiBzdGF0ZS4gKi9cbiAgZnVuY3Rpb24gdXBkYXRlU3RhdHVzRGlzcGxheSgpOiB2b2lkIHtcbiAgICAvLyBQdXNoIHRoZSBzZXNzaW9uIGNvdW50IChuby1vcCB3aGVuIG1heFNlc3Npb25zID09PSAxKSBzbyB0aGVcbiAgICAvLyBuZXh0IHJlbmRlclN0YXR1c0xpbmUgdGljayBzaG93cyB0aGUgY3VycmVudCBjb3VudC5cbiAgICBsb2dnZXIudXBkYXRlU2Vzc2lvbkNvdW50KFxuICAgICAgYWN0aXZlU2Vzc2lvbnMuc2l6ZSxcbiAgICAgIGNvbmZpZy5tYXhTZXNzaW9ucyxcbiAgICAgIGNvbmZpZy5zcGF3bk1vZGUsXG4gICAgKVxuXG4gICAgLy8gUHVzaCBwZXItc2Vzc2lvbiBhY3Rpdml0eSBpbnRvIHRoZSBtdWx0aS1zZXNzaW9uIGRpc3BsYXkuXG4gICAgZm9yIChjb25zdCBbc2lkLCBoYW5kbGVdIG9mIGFjdGl2ZVNlc3Npb25zKSB7XG4gICAgICBjb25zdCBhY3QgPSBoYW5kbGUuY3VycmVudEFjdGl2aXR5XG4gICAgICBpZiAoYWN0KSB7XG4gICAgICAgIGxvZ2dlci51cGRhdGVTZXNzaW9uQWN0aXZpdHkoc2Vzc2lvbkNvbXBhdElkcy5nZXQoc2lkKSA/PyBzaWQsIGFjdClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlU2Vzc2lvbnMuc2l6ZSA9PT0gMCkge1xuICAgICAgbG9nZ2VyLnVwZGF0ZUlkbGVTdGF0dXMoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gU2hvdyB0aGUgbW9zdCByZWNlbnRseSBzdGFydGVkIHNlc3Npb24gdGhhdCBpcyBzdGlsbCBhY3RpdmVseSB3b3JraW5nLlxuICAgIC8vIFNlc3Npb25zIHdob3NlIGN1cnJlbnQgYWN0aXZpdHkgaXMgJ3Jlc3VsdCcgb3IgJ2Vycm9yJyBhcmUgYmV0d2VlblxuICAgIC8vIHR1cm5zIFx1MjAxNCB0aGUgQ0xJIGVtaXR0ZWQgaXRzIHJlc3VsdCBidXQgdGhlIHByb2Nlc3Mgc3RheXMgYWxpdmUgd2FpdGluZ1xuICAgIC8vIGZvciB0aGUgbmV4dCB1c2VyIG1lc3NhZ2UuICBTa2lwIHVwZGF0aW5nIHNvIHRoZSBzdGF0dXMgbGluZSBrZWVwc1xuICAgIC8vIHdoYXRldmVyIHN0YXRlIGl0IGhhZCAoQXR0YWNoZWQgLyBzZXNzaW9uIHRpdGxlKS5cbiAgICBjb25zdCBbc2Vzc2lvbklkLCBoYW5kbGVdID0gWy4uLmFjdGl2ZVNlc3Npb25zLmVudHJpZXMoKV0ucG9wKCkhXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gc2Vzc2lvblN0YXJ0VGltZXMuZ2V0KHNlc3Npb25JZClcbiAgICBpZiAoIXN0YXJ0VGltZSkgcmV0dXJuXG5cbiAgICBjb25zdCBhY3Rpdml0eSA9IGhhbmRsZS5jdXJyZW50QWN0aXZpdHlcbiAgICBpZiAoIWFjdGl2aXR5IHx8IGFjdGl2aXR5LnR5cGUgPT09ICdyZXN1bHQnIHx8IGFjdGl2aXR5LnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgIC8vIFNlc3Npb24gaXMgYmV0d2VlbiB0dXJucyBcdTIwMTQga2VlcCBjdXJyZW50IHN0YXR1cyAoQXR0YWNoZWQvdGl0bGVkKS5cbiAgICAgIC8vIEluIG11bHRpLXNlc3Npb24gbW9kZSwgc3RpbGwgcmVmcmVzaCBzbyBidWxsZXQtbGlzdCBhY3Rpdml0aWVzIHN0YXkgY3VycmVudC5cbiAgICAgIGlmIChjb25maWcubWF4U2Vzc2lvbnMgPiAxKSBsb2dnZXIucmVmcmVzaERpc3BsYXkoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZWxhcHNlZCA9IGZvcm1hdER1cmF0aW9uKERhdGUubm93KCkgLSBzdGFydFRpbWUpXG5cbiAgICAvLyBCdWlsZCB0cmFpbCBmcm9tIHJlY2VudCB0b29sIGFjdGl2aXRpZXMgKGxhc3QgNSlcbiAgICBjb25zdCB0cmFpbCA9IGhhbmRsZS5hY3Rpdml0aWVzXG4gICAgICAuZmlsdGVyKGEgPT4gYS50eXBlID09PSAndG9vbF9zdGFydCcpXG4gICAgICAuc2xpY2UoLTUpXG4gICAgICAubWFwKGEgPT4gYS5zdW1tYXJ5KVxuXG4gICAgbG9nZ2VyLnVwZGF0ZVNlc3Npb25TdGF0dXMoc2Vzc2lvbklkLCBlbGFwc2VkLCBhY3Rpdml0eSwgdHJhaWwpXG4gIH1cblxuICAvKiogU3RhcnQgdGhlIHN0YXR1cyBkaXNwbGF5IHVwZGF0ZSB0aWNrZXIuICovXG4gIGZ1bmN0aW9uIHN0YXJ0U3RhdHVzVXBkYXRlcygpOiB2b2lkIHtcbiAgICBzdG9wU3RhdHVzVXBkYXRlcygpXG4gICAgLy8gQ2FsbCBpbW1lZGlhdGVseSBzbyB0aGUgZmlyc3QgdHJhbnNpdGlvbiAoZS5nLiBDb25uZWN0aW5nIFx1MjE5MiBSZWFkeSlcbiAgICAvLyBoYXBwZW5zIHdpdGhvdXQgZGVsYXksIGF2b2lkaW5nIGNvbmN1cnJlbnQgdGltZXIgcmFjZXMuXG4gICAgdXBkYXRlU3RhdHVzRGlzcGxheSgpXG4gICAgc3RhdHVzVXBkYXRlVGltZXIgPSBzZXRJbnRlcnZhbChcbiAgICAgIHVwZGF0ZVN0YXR1c0Rpc3BsYXksXG4gICAgICBTVEFUVVNfVVBEQVRFX0lOVEVSVkFMX01TLFxuICAgIClcbiAgfVxuXG4gIC8qKiBTdG9wIHRoZSBzdGF0dXMgZGlzcGxheSB1cGRhdGUgdGlja2VyLiAqL1xuICBmdW5jdGlvbiBzdG9wU3RhdHVzVXBkYXRlcygpOiB2b2lkIHtcbiAgICBpZiAoc3RhdHVzVXBkYXRlVGltZXIpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoc3RhdHVzVXBkYXRlVGltZXIpXG4gICAgICBzdGF0dXNVcGRhdGVUaW1lciA9IG51bGxcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblNlc3Npb25Eb25lKFxuICAgIHNlc3Npb25JZDogc3RyaW5nLFxuICAgIHN0YXJ0VGltZTogbnVtYmVyLFxuICAgIGhhbmRsZTogU2Vzc2lvbkhhbmRsZSxcbiAgKTogKHN0YXR1czogU2Vzc2lvbkRvbmVTdGF0dXMpID0+IHZvaWQge1xuICAgIHJldHVybiAocmF3U3RhdHVzOiBTZXNzaW9uRG9uZVN0YXR1cyk6IHZvaWQgPT4ge1xuICAgICAgY29uc3Qgd29ya0lkID0gc2Vzc2lvbldvcmtJZHMuZ2V0KHNlc3Npb25JZClcbiAgICAgIGFjdGl2ZVNlc3Npb25zLmRlbGV0ZShzZXNzaW9uSWQpXG4gICAgICBzZXNzaW9uU3RhcnRUaW1lcy5kZWxldGUoc2Vzc2lvbklkKVxuICAgICAgc2Vzc2lvbldvcmtJZHMuZGVsZXRlKHNlc3Npb25JZClcbiAgICAgIHNlc3Npb25JbmdyZXNzVG9rZW5zLmRlbGV0ZShzZXNzaW9uSWQpXG4gICAgICBjb25zdCBjb21wYXRJZCA9IHNlc3Npb25Db21wYXRJZHMuZ2V0KHNlc3Npb25JZCkgPz8gc2Vzc2lvbklkXG4gICAgICBzZXNzaW9uQ29tcGF0SWRzLmRlbGV0ZShzZXNzaW9uSWQpXG4gICAgICBsb2dnZXIucmVtb3ZlU2Vzc2lvbihjb21wYXRJZClcbiAgICAgIHRpdGxlZFNlc3Npb25zLmRlbGV0ZShjb21wYXRJZClcbiAgICAgIHYyU2Vzc2lvbnMuZGVsZXRlKHNlc3Npb25JZClcbiAgICAgIC8vIENsZWFyIHBlci1zZXNzaW9uIHRpbWVvdXQgdGltZXJcbiAgICAgIGNvbnN0IHRpbWVyID0gc2Vzc2lvblRpbWVycy5nZXQoc2Vzc2lvbklkKVxuICAgICAgaWYgKHRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgICAgc2Vzc2lvblRpbWVycy5kZWxldGUoc2Vzc2lvbklkKVxuICAgICAgfVxuICAgICAgLy8gQ2xlYXIgdG9rZW4gcmVmcmVzaCB0aW1lclxuICAgICAgdG9rZW5SZWZyZXNoPy5jYW5jZWwoc2Vzc2lvbklkKVxuICAgICAgLy8gV2FrZSB0aGUgYXQtY2FwYWNpdHkgc2xlZXAgc28gdGhlIGJyaWRnZSBjYW4gYWNjZXB0IG5ldyB3b3JrIGltbWVkaWF0ZWx5XG4gICAgICBjYXBhY2l0eVdha2Uud2FrZSgpXG5cbiAgICAgIC8vIElmIHRoZSBzZXNzaW9uIHdhcyBraWxsZWQgYnkgdGhlIHRpbWVvdXQgd2F0Y2hkb2csIHRyZWF0IGl0IGFzIGFcbiAgICAgIC8vIGZhaWxlZCBzZXNzaW9uIChub3QgYSBzZXJ2ZXIvc2h1dGRvd24gaW50ZXJydXB0KSBzbyB3ZSBzdGlsbCBjYWxsXG4gICAgICAvLyBzdG9wV29yayBhbmQgYXJjaGl2ZVNlc3Npb24gYmVsb3cuXG4gICAgICBjb25zdCB3YXNUaW1lZE91dCA9IHRpbWVkT3V0U2Vzc2lvbnMuZGVsZXRlKHNlc3Npb25JZClcbiAgICAgIGNvbnN0IHN0YXR1czogU2Vzc2lvbkRvbmVTdGF0dXMgPVxuICAgICAgICB3YXNUaW1lZE91dCAmJiByYXdTdGF0dXMgPT09ICdpbnRlcnJ1cHRlZCcgPyAnZmFpbGVkJyA6IHJhd1N0YXR1c1xuICAgICAgY29uc3QgZHVyYXRpb25NcyA9IERhdGUubm93KCkgLSBzdGFydFRpbWVcblxuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgW2JyaWRnZTpzZXNzaW9uXSBzZXNzaW9uSWQ9JHtzZXNzaW9uSWR9IHdvcmtJZD0ke3dvcmtJZCA/PyAndW5rbm93bid9IGV4aXRlZCBzdGF0dXM9JHtzdGF0dXN9IGR1cmF0aW9uPSR7Zm9ybWF0RHVyYXRpb24oZHVyYXRpb25Ncyl9YCxcbiAgICAgIClcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9icmlkZ2Vfc2Vzc2lvbl9kb25lJywge1xuICAgICAgICBzdGF0dXM6XG4gICAgICAgICAgc3RhdHVzIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgIGR1cmF0aW9uX21zOiBkdXJhdGlvbk1zLFxuICAgICAgfSlcbiAgICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2luZm8nLCAnYnJpZGdlX3Nlc3Npb25fZG9uZScsIHtcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBkdXJhdGlvbl9tczogZHVyYXRpb25NcyxcbiAgICAgIH0pXG5cbiAgICAgIC8vIENsZWFyIHRoZSBzdGF0dXMgZGlzcGxheSBiZWZvcmUgcHJpbnRpbmcgZmluYWwgbG9nXG4gICAgICBsb2dnZXIuY2xlYXJTdGF0dXMoKVxuICAgICAgc3RvcFN0YXR1c1VwZGF0ZXMoKVxuXG4gICAgICAvLyBCdWlsZCBlcnJvciBtZXNzYWdlIGZyb20gc3RkZXJyIGlmIGF2YWlsYWJsZVxuICAgICAgY29uc3Qgc3RkZXJyU3VtbWFyeSA9XG4gICAgICAgIGhhbmRsZS5sYXN0U3RkZXJyLmxlbmd0aCA+IDAgPyBoYW5kbGUubGFzdFN0ZGVyci5qb2luKCdcXG4nKSA6IHVuZGVmaW5lZFxuICAgICAgbGV0IGZhaWx1cmVNZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgICAgY2FzZSAnY29tcGxldGVkJzpcbiAgICAgICAgICBsb2dnZXIubG9nU2Vzc2lvbkNvbXBsZXRlKHNlc3Npb25JZCwgZHVyYXRpb25NcylcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdmYWlsZWQnOlxuICAgICAgICAgIC8vIFNraXAgZmFpbHVyZSBsb2cgZHVyaW5nIHNodXRkb3duIFx1MjAxNCB0aGUgY2hpbGQgZXhpdHMgbm9uLXplcm8gd2hlblxuICAgICAgICAgIC8vIGtpbGxlZCwgd2hpY2ggaXMgZXhwZWN0ZWQgYW5kIG5vdCBhIHJlYWwgZmFpbHVyZS5cbiAgICAgICAgICAvLyBBbHNvIHNraXAgZm9yIHRpbWVvdXQta2lsbGVkIHNlc3Npb25zIFx1MjAxNCB0aGUgdGltZW91dCB3YXRjaGRvZ1xuICAgICAgICAgIC8vIGFscmVhZHkgbG9nZ2VkIGEgY2xlYXIgdGltZW91dCBtZXNzYWdlLlxuICAgICAgICAgIGlmICghd2FzVGltZWRPdXQgJiYgIWxvb3BTaWduYWwuYWJvcnRlZCkge1xuICAgICAgICAgICAgZmFpbHVyZU1lc3NhZ2UgPSBzdGRlcnJTdW1tYXJ5ID8/ICdQcm9jZXNzIGV4aXRlZCB3aXRoIGVycm9yJ1xuICAgICAgICAgICAgbG9nZ2VyLmxvZ1Nlc3Npb25GYWlsZWQoc2Vzc2lvbklkLCBmYWlsdXJlTWVzc2FnZSlcbiAgICAgICAgICAgIGxvZ0Vycm9yKG5ldyBFcnJvcihgQnJpZGdlIHNlc3Npb24gZmFpbGVkOiAke2ZhaWx1cmVNZXNzYWdlfWApKVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdpbnRlcnJ1cHRlZCc6XG4gICAgICAgICAgbG9nZ2VyLmxvZ1ZlcmJvc2UoYFNlc3Npb24gJHtzZXNzaW9uSWR9IGludGVycnVwdGVkYClcbiAgICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICAvLyBOb3RpZnkgdGhlIHNlcnZlciB0aGF0IHRoaXMgd29yayBpdGVtIGlzIGRvbmUuIFNraXAgZm9yIGludGVycnVwdGVkXG4gICAgICAvLyBzZXNzaW9ucyBcdTIwMTQgaW50ZXJydXB0cyBhcmUgZWl0aGVyIHNlcnZlci1pbml0aWF0ZWQgKHRoZSBzZXJ2ZXIgYWxyZWFkeVxuICAgICAgLy8ga25vd3MpIG9yIGNhdXNlZCBieSBicmlkZ2Ugc2h1dGRvd24gKHdoaWNoIGNhbGxzIHN0b3BXb3JrKCkgc2VwYXJhdGVseSkuXG4gICAgICBpZiAoc3RhdHVzICE9PSAnaW50ZXJydXB0ZWQnICYmIHdvcmtJZCkge1xuICAgICAgICB0cmFja0NsZWFudXAoXG4gICAgICAgICAgc3RvcFdvcmtXaXRoUmV0cnkoXG4gICAgICAgICAgICBhcGksXG4gICAgICAgICAgICBlbnZpcm9ubWVudElkLFxuICAgICAgICAgICAgd29ya0lkLFxuICAgICAgICAgICAgbG9nZ2VyLFxuICAgICAgICAgICAgYmFja29mZkNvbmZpZy5zdG9wV29ya0Jhc2VEZWxheU1zLFxuICAgICAgICAgICksXG4gICAgICAgIClcbiAgICAgICAgY29tcGxldGVkV29ya0lkcy5hZGQod29ya0lkKVxuICAgICAgfVxuXG4gICAgICAvLyBDbGVhbiB1cCB3b3JrdHJlZSBpZiBvbmUgd2FzIGNyZWF0ZWQgZm9yIHRoaXMgc2Vzc2lvblxuICAgICAgY29uc3Qgd3QgPSBzZXNzaW9uV29ya3RyZWVzLmdldChzZXNzaW9uSWQpXG4gICAgICBpZiAod3QpIHtcbiAgICAgICAgc2Vzc2lvbldvcmt0cmVlcy5kZWxldGUoc2Vzc2lvbklkKVxuICAgICAgICB0cmFja0NsZWFudXAoXG4gICAgICAgICAgcmVtb3ZlQWdlbnRXb3JrdHJlZShcbiAgICAgICAgICAgIHd0Lndvcmt0cmVlUGF0aCxcbiAgICAgICAgICAgIHd0Lndvcmt0cmVlQnJhbmNoLFxuICAgICAgICAgICAgd3QuZ2l0Um9vdCxcbiAgICAgICAgICAgIHd0Lmhvb2tCYXNlZCxcbiAgICAgICAgICApLmNhdGNoKChlcnI6IHVua25vd24pID0+XG4gICAgICAgICAgICBsb2dnZXIubG9nVmVyYm9zZShcbiAgICAgICAgICAgICAgYEZhaWxlZCB0byByZW1vdmUgd29ya3RyZWUgJHt3dC53b3JrdHJlZVBhdGh9OiAke2Vycm9yTWVzc2FnZShlcnIpfWAsXG4gICAgICAgICAgICApLFxuICAgICAgICAgICksXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgLy8gTGlmZWN5Y2xlIGRlY2lzaW9uOiBpbiBtdWx0aS1zZXNzaW9uIG1vZGUsIGtlZXAgdGhlIGJyaWRnZSBydW5uaW5nXG4gICAgICAvLyBhZnRlciBhIHNlc3Npb24gY29tcGxldGVzLiBJbiBzaW5nbGUtc2Vzc2lvbiBtb2RlLCBhYm9ydCB0aGUgcG9sbFxuICAgICAgLy8gbG9vcCBzbyB0aGUgYnJpZGdlIGV4aXRzIGNsZWFubHkuXG4gICAgICBpZiAoc3RhdHVzICE9PSAnaW50ZXJydXB0ZWQnICYmICFsb29wU2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgaWYgKGNvbmZpZy5zcGF3bk1vZGUgIT09ICdzaW5nbGUtc2Vzc2lvbicpIHtcbiAgICAgICAgICAvLyBNdWx0aS1zZXNzaW9uOiBhcmNoaXZlIHRoZSBjb21wbGV0ZWQgc2Vzc2lvbiBzbyBpdCBkb2Vzbid0IGxpbmdlclxuICAgICAgICAgIC8vIGFzIHN0YWxlIGluIHRoZSB3ZWIgVUkuIGFyY2hpdmVTZXNzaW9uIGlzIGlkZW1wb3RlbnQgKDQwOSBpZiBhbHJlYWR5XG4gICAgICAgICAgLy8gYXJjaGl2ZWQpLCBzbyBkb3VibGUtYXJjaGl2aW5nIGF0IHNodXRkb3duIGlzIHNhZmUuXG4gICAgICAgICAgLy8gc2Vzc2lvbklkIGFycml2ZWQgYXMgY3NlXyogZnJvbSB0aGUgd29yayBwb2xsIChpbmZyYXN0cnVjdHVyZS1sYXllclxuICAgICAgICAgIC8vIHRhZykuIGFyY2hpdmVTZXNzaW9uIGhpdHMgL3YxL3Nlc3Npb25zL3tpZH0vYXJjaGl2ZSB3aGljaCBpcyB0aGVcbiAgICAgICAgICAvLyBjb21wYXQgc3VyZmFjZSBhbmQgdmFsaWRhdGVzIFRhZ1Nlc3Npb24gKHNlc3Npb25fKikuIFJlLXRhZyBcdTIwMTQgc2FtZVxuICAgICAgICAgIC8vIFVVSUQgdW5kZXJuZWF0aC5cbiAgICAgICAgICB0cmFja0NsZWFudXAoXG4gICAgICAgICAgICBhcGlcbiAgICAgICAgICAgICAgLmFyY2hpdmVTZXNzaW9uKGNvbXBhdElkKVxuICAgICAgICAgICAgICAuY2F0Y2goKGVycjogdW5rbm93bikgPT5cbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nVmVyYm9zZShcbiAgICAgICAgICAgICAgICAgIGBGYWlsZWQgdG8gYXJjaGl2ZSBzZXNzaW9uICR7c2Vzc2lvbklkfTogJHtlcnJvck1lc3NhZ2UoZXJyKX1gLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgKVxuICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgIGBbYnJpZGdlOnNlc3Npb25dIFNlc3Npb24gJHtzdGF0dXN9LCByZXR1cm5pbmcgdG8gaWRsZSAobXVsdGktc2Vzc2lvbiBtb2RlKWAsXG4gICAgICAgICAgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFNpbmdsZS1zZXNzaW9uOiBjb3VwbGVkIGxpZmVjeWNsZSBcdTIwMTQgdGVhciBkb3duIGVudmlyb25tZW50XG4gICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgYFticmlkZ2U6c2Vzc2lvbl0gU2Vzc2lvbiAke3N0YXR1c30sIGFib3J0aW5nIHBvbGwgbG9vcCB0byB0ZWFyIGRvd24gZW52aXJvbm1lbnRgLFxuICAgICAgICAgIClcbiAgICAgICAgICBjb250cm9sbGVyLmFib3J0KClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWxvb3BTaWduYWwuYWJvcnRlZCkge1xuICAgICAgICBzdGFydFN0YXR1c1VwZGF0ZXMoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXJ0IHRoZSBpZGxlIHN0YXR1cyBkaXNwbGF5IGltbWVkaWF0ZWx5IFx1MjAxNCB1bmxlc3Mgd2UgaGF2ZSBhIHByZS1jcmVhdGVkXG4gIC8vIHNlc3Npb24sIGluIHdoaWNoIGNhc2Ugc2V0QXR0YWNoZWQoKSBhbHJlYWR5IHNldCB1cCB0aGUgZGlzcGxheSBhbmQgdGhlXG4gIC8vIHBvbGwgbG9vcCB3aWxsIHN0YXJ0IHN0YXR1cyB1cGRhdGVzIHdoZW4gaXQgcGlja3MgdXAgdGhlIHNlc3Npb24uXG4gIGlmICghaW5pdGlhbFNlc3Npb25JZCkge1xuICAgIHN0YXJ0U3RhdHVzVXBkYXRlcygpXG4gIH1cblxuICB3aGlsZSAoIWxvb3BTaWduYWwuYWJvcnRlZCkge1xuICAgIC8vIEZldGNoZWQgb25jZSBwZXIgaXRlcmF0aW9uIFx1MjAxNCB0aGUgR3Jvd3RoQm9vayBjYWNoZSByZWZyZXNoZXMgZXZlcnlcbiAgICAvLyA1IG1pbiwgc28gYSBsb29wIHJ1bm5pbmcgYXQgdGhlIGF0LWNhcGFjaXR5IHJhdGUgcGlja3MgdXAgY29uZmlnXG4gICAgLy8gY2hhbmdlcyB3aXRoaW4gb25lIHNsZWVwIGN5Y2xlLlxuICAgIGNvbnN0IHBvbGxDb25maWcgPSBnZXRQb2xsSW50ZXJ2YWxDb25maWcoKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHdvcmsgPSBhd2FpdCBhcGkucG9sbEZvcldvcmsoXG4gICAgICAgIGVudmlyb25tZW50SWQsXG4gICAgICAgIGVudmlyb25tZW50U2VjcmV0LFxuICAgICAgICBsb29wU2lnbmFsLFxuICAgICAgICBwb2xsQ29uZmlnLnJlY2xhaW1fb2xkZXJfdGhhbl9tcyxcbiAgICAgIClcblxuICAgICAgLy8gTG9nIHJlY29ubmVjdGlvbiBpZiB3ZSB3ZXJlIHByZXZpb3VzbHkgZGlzY29ubmVjdGVkXG4gICAgICBjb25zdCB3YXNEaXNjb25uZWN0ZWQgPVxuICAgICAgICBjb25uRXJyb3JTdGFydCAhPT0gbnVsbCB8fCBnZW5lcmFsRXJyb3JTdGFydCAhPT0gbnVsbFxuICAgICAgaWYgKHdhc0Rpc2Nvbm5lY3RlZCkge1xuICAgICAgICBjb25zdCBkaXNjb25uZWN0ZWRNcyA9XG4gICAgICAgICAgRGF0ZS5ub3coKSAtIChjb25uRXJyb3JTdGFydCA/PyBnZW5lcmFsRXJyb3JTdGFydCA/PyBEYXRlLm5vdygpKVxuICAgICAgICBsb2dnZXIubG9nUmVjb25uZWN0ZWQoZGlzY29ubmVjdGVkTXMpXG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICBgW2JyaWRnZTpwb2xsXSBSZWNvbm5lY3RlZCBhZnRlciAke2Zvcm1hdER1cmF0aW9uKGRpc2Nvbm5lY3RlZE1zKX1gLFxuICAgICAgICApXG4gICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9icmlkZ2VfcmVjb25uZWN0ZWQnLCB7XG4gICAgICAgICAgZGlzY29ubmVjdGVkX21zOiBkaXNjb25uZWN0ZWRNcyxcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgY29ubkJhY2tvZmYgPSAwXG4gICAgICBnZW5lcmFsQmFja29mZiA9IDBcbiAgICAgIGNvbm5FcnJvclN0YXJ0ID0gbnVsbFxuICAgICAgZ2VuZXJhbEVycm9yU3RhcnQgPSBudWxsXG4gICAgICBsYXN0UG9sbEVycm9yVGltZSA9IG51bGxcblxuICAgICAgLy8gTnVsbCByZXNwb25zZSA9IG5vIHdvcmsgYXZhaWxhYmxlIGluIHRoZSBxdWV1ZS5cbiAgICAgIC8vIEFkZCBhIG1pbmltdW0gZGVsYXkgdG8gYXZvaWQgaGFtbWVyaW5nIHRoZSBzZXJ2ZXIuXG4gICAgICBpZiAoIXdvcmspIHtcbiAgICAgICAgLy8gVXNlIGxpdmUgY2hlY2sgKG5vdCBhIHNuYXBzaG90KSBzaW5jZSBzZXNzaW9ucyBjYW4gZW5kIGR1cmluZyBwb2xsLlxuICAgICAgICBjb25zdCBhdENhcCA9IGFjdGl2ZVNlc3Npb25zLnNpemUgPj0gY29uZmlnLm1heFNlc3Npb25zXG4gICAgICAgIGlmIChhdENhcCkge1xuICAgICAgICAgIGNvbnN0IGF0Q2FwTXMgPSBwb2xsQ29uZmlnLm11bHRpc2Vzc2lvbl9wb2xsX2ludGVydmFsX21zX2F0X2NhcGFjaXR5XG4gICAgICAgICAgLy8gSGVhcnRiZWF0IGxvb3BzIFdJVEhPVVQgcG9sbGluZy4gV2hlbiBhdC1jYXBhY2l0eSBwb2xsaW5nIGlzIGFsc29cbiAgICAgICAgICAvLyBlbmFibGVkIChhdENhcE1zID4gMCksIHRoZSBsb29wIHRyYWNrcyBhIGRlYWRsaW5lIGFuZCBicmVha3Mgb3V0XG4gICAgICAgICAgLy8gdG8gcG9sbCBhdCB0aGF0IGludGVydmFsIFx1MjAxNCBoZWFydGJlYXQgYW5kIHBvbGwgY29tcG9zZSBpbnN0ZWFkIG9mXG4gICAgICAgICAgLy8gb25lIHN1cHByZXNzaW5nIHRoZSBvdGhlci4gV2UgYnJlYWsgb3V0IHRvIHBvbGwgd2hlbjpcbiAgICAgICAgICAvLyAgIC0gUG9sbCBkZWFkbGluZSByZWFjaGVkIChhdENhcE1zID4gMCBvbmx5KVxuICAgICAgICAgIC8vICAgLSBBdXRoIGZhaWxzIChKV1QgZXhwaXJlZCBcdTIxOTIgcG9sbCByZWZyZXNoZXMgdG9rZW5zKVxuICAgICAgICAgIC8vICAgLSBDYXBhY2l0eSB3YWtlIGZpcmVzIChzZXNzaW9uIGVuZGVkIFx1MjE5MiBwb2xsIGZvciBuZXcgd29yaylcbiAgICAgICAgICAvLyAgIC0gTG9vcCBhYm9ydGVkIChzaHV0ZG93bilcbiAgICAgICAgICBpZiAocG9sbENvbmZpZy5ub25fZXhjbHVzaXZlX2hlYXJ0YmVhdF9pbnRlcnZhbF9tcyA+IDApIHtcbiAgICAgICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9icmlkZ2VfaGVhcnRiZWF0X21vZGVfZW50ZXJlZCcsIHtcbiAgICAgICAgICAgICAgYWN0aXZlX3Nlc3Npb25zOiBhY3RpdmVTZXNzaW9ucy5zaXplLFxuICAgICAgICAgICAgICBoZWFydGJlYXRfaW50ZXJ2YWxfbXM6XG4gICAgICAgICAgICAgICAgcG9sbENvbmZpZy5ub25fZXhjbHVzaXZlX2hlYXJ0YmVhdF9pbnRlcnZhbF9tcyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBEZWFkbGluZSBjb21wdXRlZCBvbmNlIGF0IGVudHJ5IFx1MjAxNCBHQiB1cGRhdGVzIHRvIGF0Q2FwTXMgZG9uJ3RcbiAgICAgICAgICAgIC8vIHNoaWZ0IGFuIGluLWZsaWdodCBkZWFkbGluZSAobmV4dCBlbnRyeSBwaWNrcyB1cCB0aGUgbmV3IHZhbHVlKS5cbiAgICAgICAgICAgIGNvbnN0IHBvbGxEZWFkbGluZSA9IGF0Q2FwTXMgPiAwID8gRGF0ZS5ub3coKSArIGF0Q2FwTXMgOiBudWxsXG4gICAgICAgICAgICBsZXQgaGJSZXN1bHQ6ICdvaycgfCAnYXV0aF9mYWlsZWQnIHwgJ2ZhdGFsJyB8ICdmYWlsZWQnID0gJ29rJ1xuICAgICAgICAgICAgbGV0IGhiQ3ljbGVzID0gMFxuICAgICAgICAgICAgd2hpbGUgKFxuICAgICAgICAgICAgICAhbG9vcFNpZ25hbC5hYm9ydGVkICYmXG4gICAgICAgICAgICAgIGFjdGl2ZVNlc3Npb25zLnNpemUgPj0gY29uZmlnLm1heFNlc3Npb25zICYmXG4gICAgICAgICAgICAgIChwb2xsRGVhZGxpbmUgPT09IG51bGwgfHwgRGF0ZS5ub3coKSA8IHBvbGxEZWFkbGluZSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAvLyBSZS1yZWFkIGNvbmZpZyBlYWNoIGN5Y2xlIHNvIEdyb3d0aEJvb2sgdXBkYXRlcyB0YWtlIGVmZmVjdFxuICAgICAgICAgICAgICBjb25zdCBoYkNvbmZpZyA9IGdldFBvbGxJbnRlcnZhbENvbmZpZygpXG4gICAgICAgICAgICAgIGlmIChoYkNvbmZpZy5ub25fZXhjbHVzaXZlX2hlYXJ0YmVhdF9pbnRlcnZhbF9tcyA8PSAwKSBicmVha1xuXG4gICAgICAgICAgICAgIC8vIENhcHR1cmUgY2FwYWNpdHkgc2lnbmFsIEJFRk9SRSB0aGUgYXN5bmMgaGVhcnRiZWF0IGNhbGwgc29cbiAgICAgICAgICAgICAgLy8gYSBzZXNzaW9uIGVuZGluZyBkdXJpbmcgdGhlIEhUVFAgcmVxdWVzdCBpcyBjYXVnaHQgYnkgdGhlXG4gICAgICAgICAgICAgIC8vIHN1YnNlcXVlbnQgc2xlZXAgKGluc3RlYWQgb2YgYmVpbmcgbG9zdCB0byBhIHJlcGxhY2VkIGNvbnRyb2xsZXIpLlxuICAgICAgICAgICAgICBjb25zdCBjYXAgPSBjYXBhY2l0eVdha2Uuc2lnbmFsKClcblxuICAgICAgICAgICAgICBoYlJlc3VsdCA9IGF3YWl0IGhlYXJ0YmVhdEFjdGl2ZVdvcmtJdGVtcygpXG4gICAgICAgICAgICAgIGlmIChoYlJlc3VsdCA9PT0gJ2F1dGhfZmFpbGVkJyB8fCBoYlJlc3VsdCA9PT0gJ2ZhdGFsJykge1xuICAgICAgICAgICAgICAgIGNhcC5jbGVhbnVwKClcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaGJDeWNsZXMrK1xuICAgICAgICAgICAgICBhd2FpdCBzbGVlcChcbiAgICAgICAgICAgICAgICBoYkNvbmZpZy5ub25fZXhjbHVzaXZlX2hlYXJ0YmVhdF9pbnRlcnZhbF9tcyxcbiAgICAgICAgICAgICAgICBjYXAuc2lnbmFsLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNhcC5jbGVhbnVwKClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIGV4aXQgcmVhc29uIGZvciB0ZWxlbWV0cnlcbiAgICAgICAgICAgIGNvbnN0IGV4aXRSZWFzb24gPVxuICAgICAgICAgICAgICBoYlJlc3VsdCA9PT0gJ2F1dGhfZmFpbGVkJyB8fCBoYlJlc3VsdCA9PT0gJ2ZhdGFsJ1xuICAgICAgICAgICAgICAgID8gaGJSZXN1bHRcbiAgICAgICAgICAgICAgICA6IGxvb3BTaWduYWwuYWJvcnRlZFxuICAgICAgICAgICAgICAgICAgPyAnc2h1dGRvd24nXG4gICAgICAgICAgICAgICAgICA6IGFjdGl2ZVNlc3Npb25zLnNpemUgPCBjb25maWcubWF4U2Vzc2lvbnNcbiAgICAgICAgICAgICAgICAgICAgPyAnY2FwYWNpdHlfY2hhbmdlZCdcbiAgICAgICAgICAgICAgICAgICAgOiBwb2xsRGVhZGxpbmUgIT09IG51bGwgJiYgRGF0ZS5ub3coKSA+PSBwb2xsRGVhZGxpbmVcbiAgICAgICAgICAgICAgICAgICAgICA/ICdwb2xsX2R1ZSdcbiAgICAgICAgICAgICAgICAgICAgICA6ICdjb25maWdfZGlzYWJsZWQnXG4gICAgICAgICAgICBsb2dFdmVudCgndGVuZ3VfYnJpZGdlX2hlYXJ0YmVhdF9tb2RlX2V4aXRlZCcsIHtcbiAgICAgICAgICAgICAgcmVhc29uOlxuICAgICAgICAgICAgICAgIGV4aXRSZWFzb24gYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgICAgICAgaGVhcnRiZWF0X2N5Y2xlczogaGJDeWNsZXMsXG4gICAgICAgICAgICAgIGFjdGl2ZV9zZXNzaW9uczogYWN0aXZlU2Vzc2lvbnMuc2l6ZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpZiAoZXhpdFJlYXNvbiA9PT0gJ3BvbGxfZHVlJykge1xuICAgICAgICAgICAgICAvLyBicmlkZ2VBcGkgdGhyb3R0bGVzIGVtcHR5LXBvbGwgbG9ncyAoRU1QVFlfUE9MTF9MT0dfSU5URVJWQUw9MTAwKVxuICAgICAgICAgICAgICAvLyBzbyB0aGUgb25jZS1wZXItMTBtaW4gcG9sbF9kdWUgcG9sbCBpcyBpbnZpc2libGUgYXQgY291bnRlcj0yLlxuICAgICAgICAgICAgICAvLyBMb2cgaXQgaGVyZSBzbyB2ZXJpZmljYXRpb24gcnVucyBzZWUgYm90aCBlbmRwb2ludHMgaW4gdGhlIGRlYnVnIGxvZy5cbiAgICAgICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgICAgIGBbYnJpZGdlOnBvbGxdIEhlYXJ0YmVhdCBwb2xsX2R1ZSBhZnRlciAke2hiQ3ljbGVzfSBjeWNsZXMgXHUyMDE0IGZhbGxpbmcgdGhyb3VnaCB0byBwb2xsRm9yV29ya2AsXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT24gYXV0aF9mYWlsZWQgb3IgZmF0YWwsIHNsZWVwIGJlZm9yZSBwb2xsaW5nIHRvIGF2b2lkIGEgdGlnaHRcbiAgICAgICAgICAgIC8vIHBvbGwraGVhcnRiZWF0IGxvb3AuIEF1dGhfZmFpbGVkOiBoZWFydGJlYXRBY3RpdmVXb3JrSXRlbXNcbiAgICAgICAgICAgIC8vIGFscmVhZHkgY2FsbGVkIHJlY29ubmVjdFNlc3Npb24gXHUyMDE0IHRoZSBzbGVlcCBnaXZlcyB0aGUgc2VydmVyXG4gICAgICAgICAgICAvLyB0aW1lIHRvIHByb3BhZ2F0ZSB0aGUgcmUtcXVldWUuIEZhdGFsICg0MDQvNDEwKTogbWF5IGJlIGFcbiAgICAgICAgICAgIC8vIHNpbmdsZSB3b3JrIGl0ZW0gR0NkIHdoaWxlIHRoZSBlbnZpcm9ubWVudCBpcyBzdGlsbCB2YWxpZC5cbiAgICAgICAgICAgIC8vIFVzZSBhdENhcE1zIGlmIGVuYWJsZWQsIGVsc2UgdGhlIGhlYXJ0YmVhdCBpbnRlcnZhbCBhcyBhIGZsb29yXG4gICAgICAgICAgICAvLyAoZ3VhcmFudGVlZCA+IDAgaGVyZSkgc28gaGVhcnRiZWF0LW9ubHkgY29uZmlncyBkb24ndCB0aWdodC1sb29wLlxuICAgICAgICAgICAgaWYgKGhiUmVzdWx0ID09PSAnYXV0aF9mYWlsZWQnIHx8IGhiUmVzdWx0ID09PSAnZmF0YWwnKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNhcCA9IGNhcGFjaXR5V2FrZS5zaWduYWwoKVxuICAgICAgICAgICAgICBhd2FpdCBzbGVlcChcbiAgICAgICAgICAgICAgICBhdENhcE1zID4gMFxuICAgICAgICAgICAgICAgICAgPyBhdENhcE1zXG4gICAgICAgICAgICAgICAgICA6IHBvbGxDb25maWcubm9uX2V4Y2x1c2l2ZV9oZWFydGJlYXRfaW50ZXJ2YWxfbXMsXG4gICAgICAgICAgICAgICAgY2FwLnNpZ25hbCxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjYXAuY2xlYW51cCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChhdENhcE1zID4gMCkge1xuICAgICAgICAgICAgLy8gSGVhcnRiZWF0IGRpc2FibGVkOiBzbG93IHBvbGwgYXMgbGl2ZW5lc3Mgc2lnbmFsLlxuICAgICAgICAgICAgY29uc3QgY2FwID0gY2FwYWNpdHlXYWtlLnNpZ25hbCgpXG4gICAgICAgICAgICBhd2FpdCBzbGVlcChhdENhcE1zLCBjYXAuc2lnbmFsKVxuICAgICAgICAgICAgY2FwLmNsZWFudXAoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9XG4gICAgICAgICAgICBhY3RpdmVTZXNzaW9ucy5zaXplID4gMFxuICAgICAgICAgICAgICA/IHBvbGxDb25maWcubXVsdGlzZXNzaW9uX3BvbGxfaW50ZXJ2YWxfbXNfcGFydGlhbF9jYXBhY2l0eVxuICAgICAgICAgICAgICA6IHBvbGxDb25maWcubXVsdGlzZXNzaW9uX3BvbGxfaW50ZXJ2YWxfbXNfbm90X2F0X2NhcGFjaXR5XG4gICAgICAgICAgYXdhaXQgc2xlZXAoaW50ZXJ2YWwsIGxvb3BTaWduYWwpXG4gICAgICAgIH1cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gQXQgY2FwYWNpdHkgXHUyMDE0IHdlIHBvbGxlZCB0byBrZWVwIHRoZSBoZWFydGJlYXQgYWxpdmUsIGJ1dCBjYW5ub3RcbiAgICAgIC8vIGFjY2VwdCBuZXcgd29yayByaWdodCBub3cuIFdlIHN0aWxsIGVudGVyIHRoZSBzd2l0Y2ggYmVsb3cgc28gdGhhdFxuICAgICAgLy8gdG9rZW4gcmVmcmVzaGVzIGZvciBleGlzdGluZyBzZXNzaW9ucyBhcmUgcHJvY2Vzc2VkICh0aGUgY2FzZVxuICAgICAgLy8gJ3Nlc3Npb24nIGhhbmRsZXIgY2hlY2tzIGZvciBleGlzdGluZyBzZXNzaW9ucyBiZWZvcmUgdGhlIGlubmVyXG4gICAgICAvLyBjYXBhY2l0eSBndWFyZCkuXG4gICAgICBjb25zdCBhdENhcGFjaXR5QmVmb3JlU3dpdGNoID0gYWN0aXZlU2Vzc2lvbnMuc2l6ZSA+PSBjb25maWcubWF4U2Vzc2lvbnNcblxuICAgICAgLy8gU2tpcCB3b3JrIGl0ZW1zIHRoYXQgaGF2ZSBhbHJlYWR5IGJlZW4gY29tcGxldGVkIGFuZCBzdG9wcGVkLlxuICAgICAgLy8gVGhlIHNlcnZlciBtYXkgcmUtZGVsaXZlciBzdGFsZSB3b3JrIGJlZm9yZSBwcm9jZXNzaW5nIG91ciBzdG9wXG4gICAgICAvLyByZXF1ZXN0LCB3aGljaCB3b3VsZCBvdGhlcndpc2UgY2F1c2UgYSBkdXBsaWNhdGUgc2Vzc2lvbiBzcGF3bi5cbiAgICAgIGlmIChjb21wbGV0ZWRXb3JrSWRzLmhhcyh3b3JrLmlkKSkge1xuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgYFticmlkZ2U6d29ya10gU2tpcHBpbmcgYWxyZWFkeS1jb21wbGV0ZWQgd29ya0lkPSR7d29yay5pZH1gLFxuICAgICAgICApXG4gICAgICAgIC8vIFJlc3BlY3QgY2FwYWNpdHkgdGhyb3R0bGUgXHUyMDE0IHdpdGhvdXQgYSBzbGVlcCBoZXJlLCBwZXJzaXN0ZW50IHN0YWxlXG4gICAgICAgIC8vIHJlZGVsaXZlcmllcyB3b3VsZCB0aWdodC1sb29wIGF0IHBvbGwtcmVxdWVzdCBzcGVlZCAodGhlICF3b3JrXG4gICAgICAgIC8vIGJyYW5jaCBhYm92ZSBpcyB0aGUgb25seSBzbGVlcCwgYW5kIHdvcmsgIT0gbnVsbCBza2lwcyBpdCkuXG4gICAgICAgIGlmIChhdENhcGFjaXR5QmVmb3JlU3dpdGNoKSB7XG4gICAgICAgICAgY29uc3QgY2FwID0gY2FwYWNpdHlXYWtlLnNpZ25hbCgpXG4gICAgICAgICAgaWYgKHBvbGxDb25maWcubm9uX2V4Y2x1c2l2ZV9oZWFydGJlYXRfaW50ZXJ2YWxfbXMgPiAwKSB7XG4gICAgICAgICAgICBhd2FpdCBoZWFydGJlYXRBY3RpdmVXb3JrSXRlbXMoKVxuICAgICAgICAgICAgYXdhaXQgc2xlZXAoXG4gICAgICAgICAgICAgIHBvbGxDb25maWcubm9uX2V4Y2x1c2l2ZV9oZWFydGJlYXRfaW50ZXJ2YWxfbXMsXG4gICAgICAgICAgICAgIGNhcC5zaWduYWwsXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBlbHNlIGlmIChwb2xsQ29uZmlnLm11bHRpc2Vzc2lvbl9wb2xsX2ludGVydmFsX21zX2F0X2NhcGFjaXR5ID4gMCkge1xuICAgICAgICAgICAgYXdhaXQgc2xlZXAoXG4gICAgICAgICAgICAgIHBvbGxDb25maWcubXVsdGlzZXNzaW9uX3BvbGxfaW50ZXJ2YWxfbXNfYXRfY2FwYWNpdHksXG4gICAgICAgICAgICAgIGNhcC5zaWduYWwsXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAgIGNhcC5jbGVhbnVwKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhd2FpdCBzbGVlcCgxMDAwLCBsb29wU2lnbmFsKVxuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIERlY29kZSB0aGUgd29yayBzZWNyZXQgZm9yIHNlc3Npb24gc3Bhd25pbmcgYW5kIHRvIGV4dHJhY3QgdGhlIEpXVFxuICAgICAgLy8gdXNlZCBmb3IgdGhlIGFjayBjYWxsIGJlbG93LlxuICAgICAgbGV0IHNlY3JldFxuICAgICAgdHJ5IHtcbiAgICAgICAgc2VjcmV0ID0gZGVjb2RlV29ya1NlY3JldCh3b3JrLnNlY3JldClcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zdCBlcnJNc2cgPSBlcnJvck1lc3NhZ2UoZXJyKVxuICAgICAgICBsb2dnZXIubG9nRXJyb3IoXG4gICAgICAgICAgYEZhaWxlZCB0byBkZWNvZGUgd29yayBzZWNyZXQgZm9yIHdvcmtJZD0ke3dvcmsuaWR9OiAke2Vyck1zZ31gLFxuICAgICAgICApXG4gICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9icmlkZ2Vfd29ya19zZWNyZXRfZmFpbGVkJywge30pXG4gICAgICAgIC8vIENhbid0IGFjayAobmVlZHMgdGhlIEpXVCB3ZSBmYWlsZWQgdG8gZGVjb2RlKS4gc3RvcFdvcmsgdXNlcyBPQXV0aCxcbiAgICAgICAgLy8gc28gaXQncyBjYWxsYWJsZSBoZXJlIFx1MjAxNCBwcmV2ZW50cyBYQVVUT0NMQUlNIGZyb20gcmUtZGVsaXZlcmluZyB0aGlzXG4gICAgICAgIC8vIHBvaXNvbmVkIGl0ZW0gZXZlcnkgcmVjbGFpbV9vbGRlcl90aGFuX21zIGN5Y2xlLlxuICAgICAgICBjb21wbGV0ZWRXb3JrSWRzLmFkZCh3b3JrLmlkKVxuICAgICAgICB0cmFja0NsZWFudXAoXG4gICAgICAgICAgc3RvcFdvcmtXaXRoUmV0cnkoXG4gICAgICAgICAgICBhcGksXG4gICAgICAgICAgICBlbnZpcm9ubWVudElkLFxuICAgICAgICAgICAgd29yay5pZCxcbiAgICAgICAgICAgIGxvZ2dlcixcbiAgICAgICAgICAgIGJhY2tvZmZDb25maWcuc3RvcFdvcmtCYXNlRGVsYXlNcyxcbiAgICAgICAgICApLFxuICAgICAgICApXG4gICAgICAgIC8vIFJlc3BlY3QgY2FwYWNpdHkgdGhyb3R0bGUgYmVmb3JlIHJldHJ5aW5nIFx1MjAxNCB3aXRob3V0IGEgc2xlZXAgaGVyZSxcbiAgICAgICAgLy8gcmVwZWF0ZWQgZGVjb2RlIGZhaWx1cmVzIGF0IGNhcGFjaXR5IHdvdWxkIHRpZ2h0LWxvb3AgYXRcbiAgICAgICAgLy8gcG9sbC1yZXF1ZXN0IHNwZWVkICh3b3JrICE9IG51bGwgc2tpcHMgdGhlICF3b3JrIHNsZWVwIGFib3ZlKS5cbiAgICAgICAgaWYgKGF0Q2FwYWNpdHlCZWZvcmVTd2l0Y2gpIHtcbiAgICAgICAgICBjb25zdCBjYXAgPSBjYXBhY2l0eVdha2Uuc2lnbmFsKClcbiAgICAgICAgICBpZiAocG9sbENvbmZpZy5ub25fZXhjbHVzaXZlX2hlYXJ0YmVhdF9pbnRlcnZhbF9tcyA+IDApIHtcbiAgICAgICAgICAgIGF3YWl0IGhlYXJ0YmVhdEFjdGl2ZVdvcmtJdGVtcygpXG4gICAgICAgICAgICBhd2FpdCBzbGVlcChcbiAgICAgICAgICAgICAgcG9sbENvbmZpZy5ub25fZXhjbHVzaXZlX2hlYXJ0YmVhdF9pbnRlcnZhbF9tcyxcbiAgICAgICAgICAgICAgY2FwLnNpZ25hbCxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGVsc2UgaWYgKHBvbGxDb25maWcubXVsdGlzZXNzaW9uX3BvbGxfaW50ZXJ2YWxfbXNfYXRfY2FwYWNpdHkgPiAwKSB7XG4gICAgICAgICAgICBhd2FpdCBzbGVlcChcbiAgICAgICAgICAgICAgcG9sbENvbmZpZy5tdWx0aXNlc3Npb25fcG9sbF9pbnRlcnZhbF9tc19hdF9jYXBhY2l0eSxcbiAgICAgICAgICAgICAgY2FwLnNpZ25hbCxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FwLmNsZWFudXAoKVxuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIEV4cGxpY2l0bHkgYWNrbm93bGVkZ2UgYWZ0ZXIgY29tbWl0dGluZyB0byBoYW5kbGUgdGhlIHdvcmsgXHUyMDE0IE5PVFxuICAgICAgLy8gYmVmb3JlLiBUaGUgYXQtY2FwYWNpdHkgZ3VhcmQgaW5zaWRlIGNhc2UgJ3Nlc3Npb24nIGNhbiBicmVha1xuICAgICAgLy8gd2l0aG91dCBzcGF3bmluZzsgYWNraW5nIHRoZXJlIHdvdWxkIHBlcm1hbmVudGx5IGxvc2UgdGhlIHdvcmsuXG4gICAgICAvLyBBY2sgZmFpbHVyZXMgYXJlIG5vbi1mYXRhbDogc2VydmVyIHJlLWRlbGl2ZXJzLCBhbmQgZXhpc3RpbmdIYW5kbGVcbiAgICAgIC8vIC8gY29tcGxldGVkV29ya0lkcyBwYXRocyBoYW5kbGUgdGhlIGRlZHVwLlxuICAgICAgY29uc3QgYWNrV29yayA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKGBbYnJpZGdlOndvcmtdIEFja25vd2xlZGdpbmcgd29ya0lkPSR7d29yay5pZH1gKVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IGFwaS5hY2tub3dsZWRnZVdvcmsoXG4gICAgICAgICAgICBlbnZpcm9ubWVudElkLFxuICAgICAgICAgICAgd29yay5pZCxcbiAgICAgICAgICAgIHNlY3JldC5zZXNzaW9uX2luZ3Jlc3NfdG9rZW4sXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICBgW2JyaWRnZTp3b3JrXSBBY2tub3dsZWRnZSBmYWlsZWQgd29ya0lkPSR7d29yay5pZH06ICR7ZXJyb3JNZXNzYWdlKGVycil9YCxcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3Qgd29ya1R5cGU6IHN0cmluZyA9IHdvcmsuZGF0YS50eXBlXG4gICAgICBzd2l0Y2ggKHdvcmsuZGF0YS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2hlYWx0aGNoZWNrJzpcbiAgICAgICAgICBhd2FpdCBhY2tXb3JrKClcbiAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoJ1ticmlkZ2U6d29ya10gSGVhbHRoY2hlY2sgcmVjZWl2ZWQnKVxuICAgICAgICAgIGxvZ2dlci5sb2dWZXJib3NlKCdIZWFsdGhjaGVjayByZWNlaXZlZCcpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnc2Vzc2lvbic6IHtcbiAgICAgICAgICBjb25zdCBzZXNzaW9uSWQgPSB3b3JrLmRhdGEuaWRcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFsaWRhdGVCcmlkZ2VJZChzZXNzaW9uSWQsICdzZXNzaW9uX2lkJylcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGF3YWl0IGFja1dvcmsoKVxuICAgICAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKGBJbnZhbGlkIHNlc3Npb25faWQgcmVjZWl2ZWQ6ICR7c2Vzc2lvbklkfWApXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIElmIHRoZSBzZXNzaW9uIGlzIGFscmVhZHkgcnVubmluZywgZGVsaXZlciB0aGUgZnJlc2ggdG9rZW4gc29cbiAgICAgICAgICAvLyB0aGUgY2hpbGQgcHJvY2VzcyBjYW4gcmVjb25uZWN0IGl0cyBXZWJTb2NrZXQgd2l0aCB0aGUgbmV3XG4gICAgICAgICAgLy8gc2Vzc2lvbiBpbmdyZXNzIHRva2VuLiBUaGlzIGhhbmRsZXMgdGhlIGNhc2Ugd2hlcmUgdGhlIHNlcnZlclxuICAgICAgICAgIC8vIHJlLWRpc3BhdGNoZXMgd29yayBmb3IgYW4gZXhpc3Rpbmcgc2Vzc2lvbiBhZnRlciB0aGUgV1MgZHJvcHMuXG4gICAgICAgICAgY29uc3QgZXhpc3RpbmdIYW5kbGUgPSBhY3RpdmVTZXNzaW9ucy5nZXQoc2Vzc2lvbklkKVxuICAgICAgICAgIGlmIChleGlzdGluZ0hhbmRsZSkge1xuICAgICAgICAgICAgZXhpc3RpbmdIYW5kbGUudXBkYXRlQWNjZXNzVG9rZW4oc2VjcmV0LnNlc3Npb25faW5ncmVzc190b2tlbilcbiAgICAgICAgICAgIHNlc3Npb25JbmdyZXNzVG9rZW5zLnNldChzZXNzaW9uSWQsIHNlY3JldC5zZXNzaW9uX2luZ3Jlc3NfdG9rZW4pXG4gICAgICAgICAgICBzZXNzaW9uV29ya0lkcy5zZXQoc2Vzc2lvbklkLCB3b3JrLmlkKVxuICAgICAgICAgICAgLy8gUmUtc2NoZWR1bGUgbmV4dCByZWZyZXNoIGZyb20gdGhlIGZyZXNoIEpXVCdzIGV4cGlyeS4gb25SZWZyZXNoXG4gICAgICAgICAgICAvLyBicmFuY2hlcyBvbiB2MlNlc3Npb25zIHNvIGJvdGggdjEgYW5kIHYyIGFyZSBzYWZlIGhlcmUuXG4gICAgICAgICAgICB0b2tlblJlZnJlc2g/LnNjaGVkdWxlKHNlc3Npb25JZCwgc2VjcmV0LnNlc3Npb25faW5ncmVzc190b2tlbilcbiAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgYFticmlkZ2U6d29ya10gVXBkYXRlZCBhY2Nlc3MgdG9rZW4gZm9yIGV4aXN0aW5nIHNlc3Npb25JZD0ke3Nlc3Npb25JZH0gd29ya0lkPSR7d29yay5pZH1gLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgYXdhaXQgYWNrV29yaygpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEF0IGNhcGFjaXR5IFx1MjAxNCB0b2tlbiByZWZyZXNoIGZvciBleGlzdGluZyBzZXNzaW9ucyBpcyBoYW5kbGVkXG4gICAgICAgICAgLy8gYWJvdmUsIGJ1dCB3ZSBjYW5ub3Qgc3Bhd24gbmV3IG9uZXMuIFRoZSBwb3N0LXN3aXRjaCBjYXBhY2l0eVxuICAgICAgICAgIC8vIHNsZWVwIHdpbGwgdGhyb3R0bGUgdGhlIGxvb3A7IGp1c3QgYnJlYWsgaGVyZS5cbiAgICAgICAgICBpZiAoYWN0aXZlU2Vzc2lvbnMuc2l6ZSA+PSBjb25maWcubWF4U2Vzc2lvbnMpIHtcbiAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgYFticmlkZ2U6d29ya10gQXQgY2FwYWNpdHkgKCR7YWN0aXZlU2Vzc2lvbnMuc2l6ZX0vJHtjb25maWcubWF4U2Vzc2lvbnN9KSwgY2Fubm90IHNwYXduIG5ldyBzZXNzaW9uIGZvciB3b3JrSWQ9JHt3b3JrLmlkfWAsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGF3YWl0IGFja1dvcmsoKVxuICAgICAgICAgIGNvbnN0IHNwYXduU3RhcnRUaW1lID0gRGF0ZS5ub3coKVxuXG4gICAgICAgICAgLy8gQ0NSIHYyIHBhdGg6IHJlZ2lzdGVyIHRoaXMgYnJpZGdlIGFzIHRoZSBzZXNzaW9uIHdvcmtlciwgZ2V0IHRoZVxuICAgICAgICAgIC8vIGVwb2NoLCBhbmQgcG9pbnQgdGhlIGNoaWxkIGF0IC92MS9jb2RlL3Nlc3Npb25zL3tpZH0uIFRoZSBjaGlsZFxuICAgICAgICAgIC8vIGFscmVhZHkgaGFzIHRoZSBmdWxsIHYyIGNsaWVudCAoU1NFVHJhbnNwb3J0ICsgQ0NSQ2xpZW50KSBcdTIwMTQgc2FtZVxuICAgICAgICAgIC8vIGNvZGUgcGF0aCBlbnZpcm9ubWVudC1tYW5hZ2VyIGxhdW5jaGVzIGluIGNvbnRhaW5lcnMuXG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyB2MSBwYXRoOiBTZXNzaW9uLUluZ3Jlc3MgV2ViU29ja2V0LiBVc2VzIGNvbmZpZy5zZXNzaW9uSW5ncmVzc1VybFxuICAgICAgICAgIC8vIChub3Qgc2VjcmV0LmFwaV9iYXNlX3VybCwgd2hpY2ggbWF5IHBvaW50IHRvIGEgcmVtb3RlIHByb3h5IHR1bm5lbFxuICAgICAgICAgIC8vIHRoYXQgZG9lc24ndCBrbm93IGFib3V0IGxvY2FsbHktY3JlYXRlZCBzZXNzaW9ucykuXG4gICAgICAgICAgbGV0IHNka1VybDogc3RyaW5nXG4gICAgICAgICAgbGV0IHVzZUNjclYyID0gZmFsc2VcbiAgICAgICAgICBsZXQgd29ya2VyRXBvY2g6IG51bWJlciB8IHVuZGVmaW5lZFxuICAgICAgICAgIC8vIFNlcnZlciBkZWNpZGVzIHBlci1zZXNzaW9uIHZpYSB0aGUgd29yayBzZWNyZXQ7IGVudiB2YXIgaXMgdGhlXG4gICAgICAgICAgLy8gYW50LWRldiBvdmVycmlkZSAoZS5nLiBmb3JjaW5nIHYyIGJlZm9yZSB0aGUgc2VydmVyIGZsYWcgaXMgb24pLlxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHNlY3JldC51c2VfY29kZV9zZXNzaW9ucyA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAgaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuQ0xBVURFX0JSSURHRV9VU0VfQ0NSX1YyKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgc2RrVXJsID0gYnVpbGRDQ1J2MlNka1VybChjb25maWcuYXBpQmFzZVVybCwgc2Vzc2lvbklkKVxuICAgICAgICAgICAgLy8gUmV0cnkgb25jZSBvbiB0cmFuc2llbnQgZmFpbHVyZSAobmV0d29yayBibGlwLCA1MDApIGJlZm9yZVxuICAgICAgICAgICAgLy8gcGVybWFuZW50bHkgZ2l2aW5nIHVwIGFuZCBraWxsaW5nIHRoZSBzZXNzaW9uLlxuICAgICAgICAgICAgZm9yIChsZXQgYXR0ZW1wdCA9IDE7IGF0dGVtcHQgPD0gMjsgYXR0ZW1wdCsrKSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgd29ya2VyRXBvY2ggPSBhd2FpdCByZWdpc3RlcldvcmtlcihcbiAgICAgICAgICAgICAgICAgIHNka1VybCxcbiAgICAgICAgICAgICAgICAgIHNlY3JldC5zZXNzaW9uX2luZ3Jlc3NfdG9rZW4sXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIHVzZUNjclYyID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgICAgIGBbYnJpZGdlOnNlc3Npb25dIENDUiB2MjogcmVnaXN0ZXJlZCB3b3JrZXIgc2Vzc2lvbklkPSR7c2Vzc2lvbklkfSBlcG9jaD0ke3dvcmtlckVwb2NofSBhdHRlbXB0PSR7YXR0ZW1wdH1gLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJNc2cgPSBlcnJvck1lc3NhZ2UoZXJyKVxuICAgICAgICAgICAgICAgIGlmIChhdHRlbXB0IDwgMikge1xuICAgICAgICAgICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgICAgICAgICBgW2JyaWRnZTpzZXNzaW9uXSBDQ1IgdjI6IHJlZ2lzdGVyV29ya2VyIGF0dGVtcHQgJHthdHRlbXB0fSBmYWlsZWQsIHJldHJ5aW5nOiAke2Vyck1zZ31gLFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoMl8wMDAsIGxvb3BTaWduYWwpXG4gICAgICAgICAgICAgICAgICBpZiAobG9vcFNpZ25hbC5hYm9ydGVkKSBicmVha1xuICAgICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKFxuICAgICAgICAgICAgICAgICAgYENDUiB2MiB3b3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZCBmb3Igc2Vzc2lvbiAke3Nlc3Npb25JZH06ICR7ZXJyTXNnfWAsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGxvZ0Vycm9yKG5ldyBFcnJvcihgcmVnaXN0ZXJXb3JrZXIgZmFpbGVkOiAke2Vyck1zZ31gKSlcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWRXb3JrSWRzLmFkZCh3b3JrLmlkKVxuICAgICAgICAgICAgICAgIHRyYWNrQ2xlYW51cChcbiAgICAgICAgICAgICAgICAgIHN0b3BXb3JrV2l0aFJldHJ5KFxuICAgICAgICAgICAgICAgICAgICBhcGksXG4gICAgICAgICAgICAgICAgICAgIGVudmlyb25tZW50SWQsXG4gICAgICAgICAgICAgICAgICAgIHdvcmsuaWQsXG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlcixcbiAgICAgICAgICAgICAgICAgICAgYmFja29mZkNvbmZpZy5zdG9wV29ya0Jhc2VEZWxheU1zLFxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdXNlQ2NyVjIpIGJyZWFrXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNka1VybCA9IGJ1aWxkU2RrVXJsKGNvbmZpZy5zZXNzaW9uSW5ncmVzc1VybCwgc2Vzc2lvbklkKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEluIHdvcmt0cmVlIG1vZGUsIG9uLWRlbWFuZCBzZXNzaW9ucyBnZXQgYW4gaXNvbGF0ZWQgZ2l0IHdvcmt0cmVlXG4gICAgICAgICAgLy8gc28gY29uY3VycmVudCBzZXNzaW9ucyBkb24ndCBpbnRlcmZlcmUgd2l0aCBlYWNoIG90aGVyJ3MgZmlsZVxuICAgICAgICAgIC8vIGNoYW5nZXMuIFRoZSBwcmUtY3JlYXRlZCBpbml0aWFsIHNlc3Npb24gKGlmIGFueSkgcnVucyBpblxuICAgICAgICAgIC8vIGNvbmZpZy5kaXIgc28gdGhlIHVzZXIncyBmaXJzdCBzZXNzaW9uIGxhbmRzIGluIHRoZSBkaXJlY3RvcnkgdGhleVxuICAgICAgICAgIC8vIGludm9rZWQgYHJjYCBmcm9tIFx1MjAxNCBtYXRjaGluZyB0aGUgb2xkIHNpbmdsZS1zZXNzaW9uIFVYLlxuICAgICAgICAgIC8vIEluIHNhbWUtZGlyIGFuZCBzaW5nbGUtc2Vzc2lvbiBtb2RlcywgYWxsIHNlc3Npb25zIHNoYXJlIGNvbmZpZy5kaXIuXG4gICAgICAgICAgLy8gQ2FwdHVyZSBzcGF3bk1vZGUgYmVmb3JlIHRoZSBhd2FpdCBiZWxvdyBcdTIwMTQgdGhlIGB3YCBrZXkgaGFuZGxlclxuICAgICAgICAgIC8vIG11dGF0ZXMgY29uZmlnLnNwYXduTW9kZSBkaXJlY3RseSwgYW5kIGNyZWF0ZUFnZW50V29ya3RyZWUgY2FuXG4gICAgICAgICAgLy8gdGFrZSAxLTJzLCBzbyByZWFkaW5nIGNvbmZpZy5zcGF3bk1vZGUgYWZ0ZXIgdGhlIGF3YWl0IGNhblxuICAgICAgICAgIC8vIHByb2R1Y2UgY29udHJhZGljdG9yeSBhbmFseXRpY3MgKHNwYXduX21vZGU6J3NhbWUtZGlyJywgaW5fd29ya3RyZWU6dHJ1ZSkuXG4gICAgICAgICAgY29uc3Qgc3Bhd25Nb2RlQXREZWNpc2lvbiA9IGNvbmZpZy5zcGF3bk1vZGVcbiAgICAgICAgICBsZXQgc2Vzc2lvbkRpciA9IGNvbmZpZy5kaXJcbiAgICAgICAgICBsZXQgd29ya3RyZWVDcmVhdGVNcyA9IDBcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBzcGF3bk1vZGVBdERlY2lzaW9uID09PSAnd29ya3RyZWUnICYmXG4gICAgICAgICAgICAoaW5pdGlhbFNlc3Npb25JZCA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgICFzYW1lU2Vzc2lvbklkKHNlc3Npb25JZCwgaW5pdGlhbFNlc3Npb25JZCkpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCB3dFN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgY29uc3Qgd3QgPSBhd2FpdCBjcmVhdGVBZ2VudFdvcmt0cmVlKFxuICAgICAgICAgICAgICAgIGBicmlkZ2UtJHtzYWZlRmlsZW5hbWVJZChzZXNzaW9uSWQpfWAsXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgd29ya3RyZWVDcmVhdGVNcyA9IERhdGUubm93KCkgLSB3dFN0YXJ0XG4gICAgICAgICAgICAgIHNlc3Npb25Xb3JrdHJlZXMuc2V0KHNlc3Npb25JZCwge1xuICAgICAgICAgICAgICAgIHdvcmt0cmVlUGF0aDogd3Qud29ya3RyZWVQYXRoLFxuICAgICAgICAgICAgICAgIHdvcmt0cmVlQnJhbmNoOiB3dC53b3JrdHJlZUJyYW5jaCxcbiAgICAgICAgICAgICAgICBnaXRSb290OiB3dC5naXRSb290LFxuICAgICAgICAgICAgICAgIGhvb2tCYXNlZDogd3QuaG9va0Jhc2VkLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBzZXNzaW9uRGlyID0gd3Qud29ya3RyZWVQYXRoXG4gICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgICBgW2JyaWRnZTpzZXNzaW9uXSBDcmVhdGVkIHdvcmt0cmVlIGZvciBzZXNzaW9uSWQ9JHtzZXNzaW9uSWR9IGF0ICR7d3Qud29ya3RyZWVQYXRofWAsXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICBjb25zdCBlcnJNc2cgPSBlcnJvck1lc3NhZ2UoZXJyKVxuICAgICAgICAgICAgICBsb2dnZXIubG9nRXJyb3IoXG4gICAgICAgICAgICAgICAgYEZhaWxlZCB0byBjcmVhdGUgd29ya3RyZWUgZm9yIHNlc3Npb24gJHtzZXNzaW9uSWR9OiAke2Vyck1zZ31gLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGxvZ0Vycm9yKG5ldyBFcnJvcihgV29ya3RyZWUgY3JlYXRpb24gZmFpbGVkOiAke2Vyck1zZ31gKSlcbiAgICAgICAgICAgICAgY29tcGxldGVkV29ya0lkcy5hZGQod29yay5pZClcbiAgICAgICAgICAgICAgdHJhY2tDbGVhbnVwKFxuICAgICAgICAgICAgICAgIHN0b3BXb3JrV2l0aFJldHJ5KFxuICAgICAgICAgICAgICAgICAgYXBpLFxuICAgICAgICAgICAgICAgICAgZW52aXJvbm1lbnRJZCxcbiAgICAgICAgICAgICAgICAgIHdvcmsuaWQsXG4gICAgICAgICAgICAgICAgICBsb2dnZXIsXG4gICAgICAgICAgICAgICAgICBiYWNrb2ZmQ29uZmlnLnN0b3BXb3JrQmFzZURlbGF5TXMsXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgIGBbYnJpZGdlOnNlc3Npb25dIFNwYXduaW5nIHNlc3Npb25JZD0ke3Nlc3Npb25JZH0gc2RrVXJsPSR7c2RrVXJsfWAsXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgLy8gY29tcGF0LXN1cmZhY2Ugc2Vzc2lvbl8qIGZvcm0gZm9yIGxvZ2dlci9TZXNzaW9ucy1BUEkgY2FsbHMuXG4gICAgICAgICAgLy8gV29yayBwb2xsIHJldHVybnMgY3NlXyogdW5kZXIgdjIgY29tcGF0OyBjb252ZXJ0IGJlZm9yZSBzcGF3biBzb1xuICAgICAgICAgIC8vIHRoZSBvbkZpcnN0VXNlck1lc3NhZ2UgY2FsbGJhY2sgY2FuIGNsb3NlIG92ZXIgaXQuXG4gICAgICAgICAgY29uc3QgY29tcGF0U2Vzc2lvbklkID0gdG9Db21wYXRTZXNzaW9uSWQoc2Vzc2lvbklkKVxuXG4gICAgICAgICAgY29uc3Qgc3Bhd25SZXN1bHQgPSBzYWZlU3Bhd24oXG4gICAgICAgICAgICBzcGF3bmVyLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzZXNzaW9uSWQsXG4gICAgICAgICAgICAgIHNka1VybCxcbiAgICAgICAgICAgICAgYWNjZXNzVG9rZW46IHNlY3JldC5zZXNzaW9uX2luZ3Jlc3NfdG9rZW4sXG4gICAgICAgICAgICAgIHVzZUNjclYyLFxuICAgICAgICAgICAgICB3b3JrZXJFcG9jaCxcbiAgICAgICAgICAgICAgb25GaXJzdFVzZXJNZXNzYWdlOiB0ZXh0ID0+IHtcbiAgICAgICAgICAgICAgICAvLyBTZXJ2ZXItc2V0IHRpdGxlcyAoLS1uYW1lLCB3ZWIgcmVuYW1lKSB3aW4uIGZldGNoU2Vzc2lvblRpdGxlXG4gICAgICAgICAgICAgICAgLy8gcnVucyBjb25jdXJyZW50bHk7IGlmIGl0IGFscmVhZHkgcG9wdWxhdGVkIHRpdGxlZFNlc3Npb25zLFxuICAgICAgICAgICAgICAgIC8vIHNraXAuIElmIGl0IGhhc24ndCByZXNvbHZlZCB5ZXQsIHRoZSBkZXJpdmVkIHRpdGxlIHN0aWNrcyBcdTIwMTRcbiAgICAgICAgICAgICAgICAvLyBhY2NlcHRhYmxlIHNpbmNlIHRoZSBzZXJ2ZXIgaGFkIG5vIHRpdGxlIGF0IHNwYXduIHRpbWUuXG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlZFNlc3Npb25zLmhhcyhjb21wYXRTZXNzaW9uSWQpKSByZXR1cm5cbiAgICAgICAgICAgICAgICB0aXRsZWRTZXNzaW9ucy5hZGQoY29tcGF0U2Vzc2lvbklkKVxuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZGVyaXZlU2Vzc2lvblRpdGxlKHRleHQpXG4gICAgICAgICAgICAgICAgbG9nZ2VyLnNldFNlc3Npb25UaXRsZShjb21wYXRTZXNzaW9uSWQsIHRpdGxlKVxuICAgICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgICAgIGBbYnJpZGdlOnRpdGxlXSBkZXJpdmVkIHRpdGxlIGZvciAke2NvbXBhdFNlc3Npb25JZH06ICR7dGl0bGV9YCxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgdm9pZCBpbXBvcnQoJy4vY3JlYXRlU2Vzc2lvbi5qcycpXG4gICAgICAgICAgICAgICAgICAudGhlbigoeyB1cGRhdGVCcmlkZ2VTZXNzaW9uVGl0bGUgfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQnJpZGdlU2Vzc2lvblRpdGxlKGNvbXBhdFNlc3Npb25JZCwgdGl0bGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICBiYXNlVXJsOiBjb25maWcuYXBpQmFzZVVybCxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+XG4gICAgICAgICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgICAgICAgICBgW2JyaWRnZTp0aXRsZV0gZmFpbGVkIHRvIHVwZGF0ZSB0aXRsZSBmb3IgJHtjb21wYXRTZXNzaW9uSWR9OiAke2Vycn1gLFxuICAgICAgICAgICAgICAgICAgICAgIHsgbGV2ZWw6ICdlcnJvcicgfSxcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXNzaW9uRGlyLFxuICAgICAgICAgIClcbiAgICAgICAgICBpZiAodHlwZW9mIHNwYXduUmVzdWx0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKFxuICAgICAgICAgICAgICBgRmFpbGVkIHRvIHNwYXduIHNlc3Npb24gJHtzZXNzaW9uSWR9OiAke3NwYXduUmVzdWx0fWAsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAvLyBDbGVhbiB1cCB3b3JrdHJlZSBpZiBvbmUgd2FzIGNyZWF0ZWQgZm9yIHRoaXMgc2Vzc2lvblxuICAgICAgICAgICAgY29uc3Qgd3QgPSBzZXNzaW9uV29ya3RyZWVzLmdldChzZXNzaW9uSWQpXG4gICAgICAgICAgICBpZiAod3QpIHtcbiAgICAgICAgICAgICAgc2Vzc2lvbldvcmt0cmVlcy5kZWxldGUoc2Vzc2lvbklkKVxuICAgICAgICAgICAgICB0cmFja0NsZWFudXAoXG4gICAgICAgICAgICAgICAgcmVtb3ZlQWdlbnRXb3JrdHJlZShcbiAgICAgICAgICAgICAgICAgIHd0Lndvcmt0cmVlUGF0aCxcbiAgICAgICAgICAgICAgICAgIHd0Lndvcmt0cmVlQnJhbmNoLFxuICAgICAgICAgICAgICAgICAgd3QuZ2l0Um9vdCxcbiAgICAgICAgICAgICAgICAgIHd0Lmhvb2tCYXNlZCxcbiAgICAgICAgICAgICAgICApLmNhdGNoKChlcnI6IHVua25vd24pID0+XG4gICAgICAgICAgICAgICAgICBsb2dnZXIubG9nVmVyYm9zZShcbiAgICAgICAgICAgICAgICAgICAgYEZhaWxlZCB0byByZW1vdmUgd29ya3RyZWUgJHt3dC53b3JrdHJlZVBhdGh9OiAke2Vycm9yTWVzc2FnZShlcnIpfWAsXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbXBsZXRlZFdvcmtJZHMuYWRkKHdvcmsuaWQpXG4gICAgICAgICAgICB0cmFja0NsZWFudXAoXG4gICAgICAgICAgICAgIHN0b3BXb3JrV2l0aFJldHJ5KFxuICAgICAgICAgICAgICAgIGFwaSxcbiAgICAgICAgICAgICAgICBlbnZpcm9ubWVudElkLFxuICAgICAgICAgICAgICAgIHdvcmsuaWQsXG4gICAgICAgICAgICAgICAgbG9nZ2VyLFxuICAgICAgICAgICAgICAgIGJhY2tvZmZDb25maWcuc3RvcFdvcmtCYXNlRGVsYXlNcyxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGhhbmRsZSA9IHNwYXduUmVzdWx0XG5cbiAgICAgICAgICBjb25zdCBzcGF3bkR1cmF0aW9uTXMgPSBEYXRlLm5vdygpIC0gc3Bhd25TdGFydFRpbWVcbiAgICAgICAgICBsb2dFdmVudCgndGVuZ3VfYnJpZGdlX3Nlc3Npb25fc3RhcnRlZCcsIHtcbiAgICAgICAgICAgIGFjdGl2ZV9zZXNzaW9uczogYWN0aXZlU2Vzc2lvbnMuc2l6ZSxcbiAgICAgICAgICAgIHNwYXduX21vZGU6XG4gICAgICAgICAgICAgIHNwYXduTW9kZUF0RGVjaXNpb24gYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgICAgIGluX3dvcmt0cmVlOiBzZXNzaW9uV29ya3RyZWVzLmhhcyhzZXNzaW9uSWQpLFxuICAgICAgICAgICAgc3Bhd25fZHVyYXRpb25fbXM6IHNwYXduRHVyYXRpb25NcyxcbiAgICAgICAgICAgIHdvcmt0cmVlX2NyZWF0ZV9tczogd29ya3RyZWVDcmVhdGVNcyxcbiAgICAgICAgICAgIGluUHJvdGVjdGVkTmFtZXNwYWNlOiBpc0luUHJvdGVjdGVkTmFtZXNwYWNlKCksXG4gICAgICAgICAgfSlcbiAgICAgICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdpbmZvJywgJ2JyaWRnZV9zZXNzaW9uX3N0YXJ0ZWQnLCB7XG4gICAgICAgICAgICBzcGF3bl9tb2RlOiBzcGF3bk1vZGVBdERlY2lzaW9uLFxuICAgICAgICAgICAgaW5fd29ya3RyZWU6IHNlc3Npb25Xb3JrdHJlZXMuaGFzKHNlc3Npb25JZCksXG4gICAgICAgICAgICBzcGF3bl9kdXJhdGlvbl9tczogc3Bhd25EdXJhdGlvbk1zLFxuICAgICAgICAgICAgd29ya3RyZWVfY3JlYXRlX21zOiB3b3JrdHJlZUNyZWF0ZU1zLFxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBhY3RpdmVTZXNzaW9ucy5zZXQoc2Vzc2lvbklkLCBoYW5kbGUpXG4gICAgICAgICAgc2Vzc2lvbldvcmtJZHMuc2V0KHNlc3Npb25JZCwgd29yay5pZClcbiAgICAgICAgICBzZXNzaW9uSW5ncmVzc1Rva2Vucy5zZXQoc2Vzc2lvbklkLCBzZWNyZXQuc2Vzc2lvbl9pbmdyZXNzX3Rva2VuKVxuICAgICAgICAgIHNlc3Npb25Db21wYXRJZHMuc2V0KHNlc3Npb25JZCwgY29tcGF0U2Vzc2lvbklkKVxuXG4gICAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gRGF0ZS5ub3coKVxuICAgICAgICAgIHNlc3Npb25TdGFydFRpbWVzLnNldChzZXNzaW9uSWQsIHN0YXJ0VGltZSlcblxuICAgICAgICAgIC8vIFVzZSBhIGdlbmVyaWMgcHJvbXB0IGRlc2NyaXB0aW9uIHNpbmNlIHdlIG5vIGxvbmdlciBnZXQgc3RhcnR1cF9jb250ZXh0XG4gICAgICAgICAgbG9nZ2VyLmxvZ1Nlc3Npb25TdGFydChzZXNzaW9uSWQsIGBTZXNzaW9uICR7c2Vzc2lvbklkfWApXG5cbiAgICAgICAgICAvLyBDb21wdXRlIHRoZSBhY3R1YWwgZGVidWcgZmlsZSBwYXRoIChtaXJyb3JzIHNlc3Npb25SdW5uZXIudHMgbG9naWMpXG4gICAgICAgICAgY29uc3Qgc2FmZUlkID0gc2FmZUZpbGVuYW1lSWQoc2Vzc2lvbklkKVxuICAgICAgICAgIGxldCBzZXNzaW9uRGVidWdGaWxlOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICAgICAgICBpZiAoY29uZmlnLmRlYnVnRmlsZSkge1xuICAgICAgICAgICAgY29uc3QgZXh0ID0gY29uZmlnLmRlYnVnRmlsZS5sYXN0SW5kZXhPZignLicpXG4gICAgICAgICAgICBpZiAoZXh0ID4gMCkge1xuICAgICAgICAgICAgICBzZXNzaW9uRGVidWdGaWxlID0gYCR7Y29uZmlnLmRlYnVnRmlsZS5zbGljZSgwLCBleHQpfS0ke3NhZmVJZH0ke2NvbmZpZy5kZWJ1Z0ZpbGUuc2xpY2UoZXh0KX1gXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZXNzaW9uRGVidWdGaWxlID0gYCR7Y29uZmlnLmRlYnVnRmlsZX0tJHtzYWZlSWR9YFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoY29uZmlnLnZlcmJvc2UgfHwgcHJvY2Vzcy5lbnYuVVNFUl9UWVBFID09PSAnYW50Jykge1xuICAgICAgICAgICAgc2Vzc2lvbkRlYnVnRmlsZSA9IGpvaW4oXG4gICAgICAgICAgICAgIHRtcGRpcigpLFxuICAgICAgICAgICAgICAnY2xhdWRlJyxcbiAgICAgICAgICAgICAgYGJyaWRnZS1zZXNzaW9uLSR7c2FmZUlkfS5sb2dgLFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZXNzaW9uRGVidWdGaWxlKSB7XG4gICAgICAgICAgICBsb2dnZXIubG9nVmVyYm9zZShgRGVidWcgbG9nOiAke3Nlc3Npb25EZWJ1Z0ZpbGV9YClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBSZWdpc3RlciBpbiB0aGUgc2Vzc2lvbnMgTWFwIGJlZm9yZSBzdGFydGluZyBzdGF0dXMgdXBkYXRlcyBzbyB0aGVcbiAgICAgICAgICAvLyBmaXJzdCByZW5kZXIgdGljayBzaG93cyB0aGUgY29ycmVjdCBjb3VudCBhbmQgYnVsbGV0IGxpc3QgaW4gc3luYy5cbiAgICAgICAgICBsb2dnZXIuYWRkU2Vzc2lvbihcbiAgICAgICAgICAgIGNvbXBhdFNlc3Npb25JZCxcbiAgICAgICAgICAgIGdldFJlbW90ZVNlc3Npb25VcmwoY29tcGF0U2Vzc2lvbklkLCBjb25maWcuc2Vzc2lvbkluZ3Jlc3NVcmwpLFxuICAgICAgICAgIClcblxuICAgICAgICAgIC8vIFN0YXJ0IGxpdmUgc3RhdHVzIHVwZGF0ZXMgYW5kIHRyYW5zaXRpb24gdG8gXCJBdHRhY2hlZFwiIHN0YXRlLlxuICAgICAgICAgIHN0YXJ0U3RhdHVzVXBkYXRlcygpXG4gICAgICAgICAgbG9nZ2VyLnNldEF0dGFjaGVkKGNvbXBhdFNlc3Npb25JZClcblxuICAgICAgICAgIC8vIE9uZS1zaG90IHRpdGxlIGZldGNoLiBJZiB0aGUgc2Vzc2lvbiBhbHJlYWR5IGhhcyBhIHRpdGxlIChzZXQgdmlhXG4gICAgICAgICAgLy8gLS1uYW1lLCB3ZWIgcmVuYW1lLCBvciAvcmVtb3RlLWNvbnRyb2wpLCBkaXNwbGF5IGl0IGFuZCBtYXJrIGFzXG4gICAgICAgICAgLy8gdGl0bGVkIHNvIHRoZSBmaXJzdC11c2VyLW1lc3NhZ2UgZmFsbGJhY2sgZG9lc24ndCBvdmVyd3JpdGUgaXQuXG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIG9uRmlyc3RVc2VyTWVzc2FnZSBkZXJpdmVzIG9uZSBmcm9tIHRoZSBmaXJzdCBwcm9tcHQuXG4gICAgICAgICAgdm9pZCBmZXRjaFNlc3Npb25UaXRsZShjb21wYXRTZXNzaW9uSWQsIGNvbmZpZy5hcGlCYXNlVXJsKVxuICAgICAgICAgICAgLnRoZW4odGl0bGUgPT4ge1xuICAgICAgICAgICAgICBpZiAodGl0bGUgJiYgYWN0aXZlU2Vzc2lvbnMuaGFzKHNlc3Npb25JZCkpIHtcbiAgICAgICAgICAgICAgICB0aXRsZWRTZXNzaW9ucy5hZGQoY29tcGF0U2Vzc2lvbklkKVxuICAgICAgICAgICAgICAgIGxvZ2dlci5zZXRTZXNzaW9uVGl0bGUoY29tcGF0U2Vzc2lvbklkLCB0aXRsZSlcbiAgICAgICAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICAgICAgICBgW2JyaWRnZTp0aXRsZV0gc2VydmVyIHRpdGxlIGZvciAke2NvbXBhdFNlc3Npb25JZH06ICR7dGl0bGV9YCxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+XG4gICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgICBgW2JyaWRnZTp0aXRsZV0gZmFpbGVkIHRvIGZldGNoIHRpdGxlIGZvciAke2NvbXBhdFNlc3Npb25JZH06ICR7ZXJyfWAsXG4gICAgICAgICAgICAgICAgeyBsZXZlbDogJ2Vycm9yJyB9LFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgLy8gU3RhcnQgcGVyLXNlc3Npb24gdGltZW91dCB3YXRjaGRvZ1xuICAgICAgICAgIGNvbnN0IHRpbWVvdXRNcyA9XG4gICAgICAgICAgICBjb25maWcuc2Vzc2lvblRpbWVvdXRNcyA/PyBERUZBVUxUX1NFU1NJT05fVElNRU9VVF9NU1xuICAgICAgICAgIGlmICh0aW1lb3V0TXMgPiAwKSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgIG9uU2Vzc2lvblRpbWVvdXQsXG4gICAgICAgICAgICAgIHRpbWVvdXRNcyxcbiAgICAgICAgICAgICAgc2Vzc2lvbklkLFxuICAgICAgICAgICAgICB0aW1lb3V0TXMsXG4gICAgICAgICAgICAgIGxvZ2dlcixcbiAgICAgICAgICAgICAgdGltZWRPdXRTZXNzaW9ucyxcbiAgICAgICAgICAgICAgaGFuZGxlLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgc2Vzc2lvblRpbWVycy5zZXQoc2Vzc2lvbklkLCB0aW1lcilcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTY2hlZHVsZSBwcm9hY3RpdmUgdG9rZW4gcmVmcmVzaCBiZWZvcmUgdGhlIEpXVCBleHBpcmVzLlxuICAgICAgICAgIC8vIG9uUmVmcmVzaCBicmFuY2hlcyBvbiB2MlNlc3Npb25zOiB2MSBkZWxpdmVycyBPQXV0aCB0byB0aGVcbiAgICAgICAgICAvLyBjaGlsZCwgdjIgdHJpZ2dlcnMgc2VydmVyIHJlLWRpc3BhdGNoIHZpYSByZWNvbm5lY3RTZXNzaW9uLlxuICAgICAgICAgIGlmICh1c2VDY3JWMikge1xuICAgICAgICAgICAgdjJTZXNzaW9ucy5hZGQoc2Vzc2lvbklkKVxuICAgICAgICAgIH1cbiAgICAgICAgICB0b2tlblJlZnJlc2g/LnNjaGVkdWxlKHNlc3Npb25JZCwgc2VjcmV0LnNlc3Npb25faW5ncmVzc190b2tlbilcblxuICAgICAgICAgIHZvaWQgaGFuZGxlLmRvbmUudGhlbihvblNlc3Npb25Eb25lKHNlc3Npb25JZCwgc3RhcnRUaW1lLCBoYW5kbGUpKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBhd2FpdCBhY2tXb3JrKClcbiAgICAgICAgICAvLyBHcmFjZWZ1bGx5IGlnbm9yZSB1bmtub3duIHdvcmsgdHlwZXMuIFRoZSBiYWNrZW5kIG1heSBzZW5kIG5ld1xuICAgICAgICAgIC8vIHR5cGVzIGJlZm9yZSB0aGUgYnJpZGdlIGNsaWVudCBpcyB1cGRhdGVkLlxuICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgIGBbYnJpZGdlOndvcmtdIFVua25vd24gd29yayB0eXBlOiAke3dvcmtUeXBlfSwgc2tpcHBpbmdgLFxuICAgICAgICAgIClcbiAgICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICAvLyBXaGVuIGF0IGNhcGFjaXR5LCB0aHJvdHRsZSB0aGUgbG9vcC4gVGhlIHN3aXRjaCBhYm92ZSBzdGlsbCBydW5zIHNvXG4gICAgICAvLyBleGlzdGluZy1zZXNzaW9uIHRva2VuIHJlZnJlc2hlcyBhcmUgcHJvY2Vzc2VkLCBidXQgd2Ugc2xlZXAgaGVyZVxuICAgICAgLy8gdG8gYXZvaWQgYnVzeS1sb29waW5nLiBJbmNsdWRlIHRoZSBjYXBhY2l0eSB3YWtlIHNpZ25hbCBzbyB0aGVcbiAgICAgIC8vIHNsZWVwIGlzIGludGVycnVwdGVkIGltbWVkaWF0ZWx5IHdoZW4gYSBzZXNzaW9uIGNvbXBsZXRlcy5cbiAgICAgIGlmIChhdENhcGFjaXR5QmVmb3JlU3dpdGNoKSB7XG4gICAgICAgIGNvbnN0IGNhcCA9IGNhcGFjaXR5V2FrZS5zaWduYWwoKVxuICAgICAgICBpZiAocG9sbENvbmZpZy5ub25fZXhjbHVzaXZlX2hlYXJ0YmVhdF9pbnRlcnZhbF9tcyA+IDApIHtcbiAgICAgICAgICBhd2FpdCBoZWFydGJlYXRBY3RpdmVXb3JrSXRlbXMoKVxuICAgICAgICAgIGF3YWl0IHNsZWVwKFxuICAgICAgICAgICAgcG9sbENvbmZpZy5ub25fZXhjbHVzaXZlX2hlYXJ0YmVhdF9pbnRlcnZhbF9tcyxcbiAgICAgICAgICAgIGNhcC5zaWduYWwsXG4gICAgICAgICAgKVxuICAgICAgICB9IGVsc2UgaWYgKHBvbGxDb25maWcubXVsdGlzZXNzaW9uX3BvbGxfaW50ZXJ2YWxfbXNfYXRfY2FwYWNpdHkgPiAwKSB7XG4gICAgICAgICAgYXdhaXQgc2xlZXAoXG4gICAgICAgICAgICBwb2xsQ29uZmlnLm11bHRpc2Vzc2lvbl9wb2xsX2ludGVydmFsX21zX2F0X2NhcGFjaXR5LFxuICAgICAgICAgICAgY2FwLnNpZ25hbCxcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgY2FwLmNsZWFudXAoKVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGxvb3BTaWduYWwuYWJvcnRlZCkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICAvLyBGYXRhbCBlcnJvcnMgKDQwMS80MDMpIFx1MjAxNCBubyBwb2ludCByZXRyeWluZywgYXV0aCB3b24ndCBmaXggaXRzZWxmXG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgQnJpZGdlRmF0YWxFcnJvcikge1xuICAgICAgICBmYXRhbEV4aXQgPSB0cnVlXG4gICAgICAgIC8vIFNlcnZlci1lbmZvcmNlZCBleHBpcnkgZ2V0cyBhIGNsZWFuIHN0YXR1cyBtZXNzYWdlLCBub3QgYW4gZXJyb3JcbiAgICAgICAgaWYgKGlzRXhwaXJlZEVycm9yVHlwZShlcnIuZXJyb3JUeXBlKSkge1xuICAgICAgICAgIGxvZ2dlci5sb2dTdGF0dXMoZXJyLm1lc3NhZ2UpXG4gICAgICAgIH0gZWxzZSBpZiAoaXNTdXBwcmVzc2libGU0MDMoZXJyKSkge1xuICAgICAgICAgIC8vIENvc21ldGljIDQwMyBlcnJvcnMgKGUuZy4sIGV4dGVybmFsX3BvbGxfc2Vzc2lvbnMgc2NvcGUsXG4gICAgICAgICAgLy8gZW52aXJvbm1lbnRzOm1hbmFnZSBwZXJtaXNzaW9uKSBcdTIwMTQgZG9uJ3Qgc2hvdyB0byB1c2VyXG4gICAgICAgICAgbG9nRm9yRGVidWdnaW5nKGBbYnJpZGdlOndvcmtdIFN1cHByZXNzZWQgNDAzIGVycm9yOiAke2Vyci5tZXNzYWdlfWApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKGVyci5tZXNzYWdlKVxuICAgICAgICAgIGxvZ0Vycm9yKGVycilcbiAgICAgICAgfVxuICAgICAgICBsb2dFdmVudCgndGVuZ3VfYnJpZGdlX2ZhdGFsX2Vycm9yJywge1xuICAgICAgICAgIHN0YXR1czogZXJyLnN0YXR1cyxcbiAgICAgICAgICBlcnJvcl90eXBlOlxuICAgICAgICAgICAgZXJyLmVycm9yVHlwZSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgICB9KVxuICAgICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKFxuICAgICAgICAgIGlzRXhwaXJlZEVycm9yVHlwZShlcnIuZXJyb3JUeXBlKSA/ICdpbmZvJyA6ICdlcnJvcicsXG4gICAgICAgICAgJ2JyaWRnZV9mYXRhbF9lcnJvcicsXG4gICAgICAgICAgeyBzdGF0dXM6IGVyci5zdGF0dXMsIGVycm9yX3R5cGU6IGVyci5lcnJvclR5cGUgfSxcbiAgICAgICAgKVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjb25zdCBlcnJNc2cgPSBkZXNjcmliZUF4aW9zRXJyb3IoZXJyKVxuXG4gICAgICBpZiAoaXNDb25uZWN0aW9uRXJyb3IoZXJyKSB8fCBpc1NlcnZlckVycm9yKGVycikpIHtcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuXG4gICAgICAgIC8vIERldGVjdCBzeXN0ZW0gc2xlZXAvd2FrZTogaWYgdGhlIGdhcCBzaW5jZSB0aGUgbGFzdCBwb2xsIGVycm9yXG4gICAgICAgIC8vIGdyZWF0bHkgZXhjZWVkcyB0aGUgZXhwZWN0ZWQgYmFja29mZiwgdGhlIG1hY2hpbmUgbGlrZWx5IHNsZXB0LlxuICAgICAgICAvLyBSZXNldCBlcnJvciB0cmFja2luZyBzbyB0aGUgYnJpZGdlIHJldHJpZXMgd2l0aCBhIGZyZXNoIGJ1ZGdldC5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGxhc3RQb2xsRXJyb3JUaW1lICE9PSBudWxsICYmXG4gICAgICAgICAgbm93IC0gbGFzdFBvbGxFcnJvclRpbWUgPiBwb2xsU2xlZXBEZXRlY3Rpb25UaHJlc2hvbGRNcyhiYWNrb2ZmQ29uZmlnKVxuICAgICAgICApIHtcbiAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICBgW2JyaWRnZTp3b3JrXSBEZXRlY3RlZCBzeXN0ZW0gc2xlZXAgKCR7TWF0aC5yb3VuZCgobm93IC0gbGFzdFBvbGxFcnJvclRpbWUpIC8gMTAwMCl9cyBnYXApLCByZXNldHRpbmcgZXJyb3IgYnVkZ2V0YCxcbiAgICAgICAgICApXG4gICAgICAgICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnaW5mbycsICdicmlkZ2VfcG9sbF9zbGVlcF9kZXRlY3RlZCcsIHtcbiAgICAgICAgICAgIGdhcE1zOiBub3cgLSBsYXN0UG9sbEVycm9yVGltZSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIGNvbm5FcnJvclN0YXJ0ID0gbnVsbFxuICAgICAgICAgIGNvbm5CYWNrb2ZmID0gMFxuICAgICAgICAgIGdlbmVyYWxFcnJvclN0YXJ0ID0gbnVsbFxuICAgICAgICAgIGdlbmVyYWxCYWNrb2ZmID0gMFxuICAgICAgICB9XG4gICAgICAgIGxhc3RQb2xsRXJyb3JUaW1lID0gbm93XG5cbiAgICAgICAgaWYgKCFjb25uRXJyb3JTdGFydCkge1xuICAgICAgICAgIGNvbm5FcnJvclN0YXJ0ID0gbm93XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWxhcHNlZCA9IG5vdyAtIGNvbm5FcnJvclN0YXJ0XG4gICAgICAgIGlmIChlbGFwc2VkID49IGJhY2tvZmZDb25maWcuY29ubkdpdmVVcE1zKSB7XG4gICAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKFxuICAgICAgICAgICAgYFNlcnZlciB1bnJlYWNoYWJsZSBmb3IgJHtNYXRoLnJvdW5kKGVsYXBzZWQgLyA2MF8wMDApfSBtaW51dGVzLCBnaXZpbmcgdXAuYCxcbiAgICAgICAgICApXG4gICAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2JyaWRnZV9wb2xsX2dpdmVfdXAnLCB7XG4gICAgICAgICAgICBlcnJvcl90eXBlOlxuICAgICAgICAgICAgICAnY29ubmVjdGlvbicgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgICAgIGVsYXBzZWRfbXM6IGVsYXBzZWQsXG4gICAgICAgICAgfSlcbiAgICAgICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdlcnJvcicsICdicmlkZ2VfcG9sbF9naXZlX3VwJywge1xuICAgICAgICAgICAgZXJyb3JfdHlwZTogJ2Nvbm5lY3Rpb24nLFxuICAgICAgICAgICAgZWxhcHNlZF9tczogZWxhcHNlZCxcbiAgICAgICAgICB9KVxuICAgICAgICAgIGZhdGFsRXhpdCA9IHRydWVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVzZXQgdGhlIG90aGVyIHRyYWNrIHdoZW4gc3dpdGNoaW5nIGVycm9yIHR5cGVzXG4gICAgICAgIGdlbmVyYWxFcnJvclN0YXJ0ID0gbnVsbFxuICAgICAgICBnZW5lcmFsQmFja29mZiA9IDBcblxuICAgICAgICBjb25uQmFja29mZiA9IGNvbm5CYWNrb2ZmXG4gICAgICAgICAgPyBNYXRoLm1pbihjb25uQmFja29mZiAqIDIsIGJhY2tvZmZDb25maWcuY29ubkNhcE1zKVxuICAgICAgICAgIDogYmFja29mZkNvbmZpZy5jb25uSW5pdGlhbE1zXG4gICAgICAgIGNvbnN0IGRlbGF5ID0gYWRkSml0dGVyKGNvbm5CYWNrb2ZmKVxuICAgICAgICBsb2dnZXIubG9nVmVyYm9zZShcbiAgICAgICAgICBgQ29ubmVjdGlvbiBlcnJvciwgcmV0cnlpbmcgaW4gJHtmb3JtYXREZWxheShkZWxheSl9ICgke01hdGgucm91bmQoZWxhcHNlZCAvIDEwMDApfXMgZWxhcHNlZCk6ICR7ZXJyTXNnfWAsXG4gICAgICAgIClcbiAgICAgICAgbG9nZ2VyLnVwZGF0ZVJlY29ubmVjdGluZ1N0YXR1cyhcbiAgICAgICAgICBmb3JtYXREZWxheShkZWxheSksXG4gICAgICAgICAgZm9ybWF0RHVyYXRpb24oZWxhcHNlZCksXG4gICAgICAgIClcbiAgICAgICAgLy8gVGhlIHBvbGxfZHVlIGhlYXJ0YmVhdC1sb29wIGV4aXQgbGVhdmVzIGEgaGVhbHRoeSBsZWFzZSBleHBvc2VkIHRvXG4gICAgICAgIC8vIHRoaXMgYmFja29mZiBwYXRoLiBIZWFydGJlYXQgYmVmb3JlIGVhY2ggc2xlZXAgc28gL3BvbGwgb3V0YWdlc1xuICAgICAgICAvLyAodGhlIFZlcmlmeUVudmlyb25tZW50U2VjcmV0QXV0aCBEQiBwYXRoIGhlYXJ0YmVhdCB3YXMgaW50cm9kdWNlZFxuICAgICAgICAvLyB0byBhdm9pZCkgZG9uJ3Qga2lsbCB0aGUgMzAwcyBsZWFzZSBUVEwuIE5vLW9wIHdoZW4gYWN0aXZlU2Vzc2lvbnNcbiAgICAgICAgLy8gaXMgZW1wdHkgb3IgaGVhcnRiZWF0IGlzIGRpc2FibGVkLlxuICAgICAgICBpZiAoZ2V0UG9sbEludGVydmFsQ29uZmlnKCkubm9uX2V4Y2x1c2l2ZV9oZWFydGJlYXRfaW50ZXJ2YWxfbXMgPiAwKSB7XG4gICAgICAgICAgYXdhaXQgaGVhcnRiZWF0QWN0aXZlV29ya0l0ZW1zKClcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBzbGVlcChkZWxheSwgbG9vcFNpZ25hbClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcblxuICAgICAgICAvLyBTbGVlcCBkZXRlY3Rpb24gZm9yIGdlbmVyYWwgZXJyb3JzIChzYW1lIGxvZ2ljIGFzIGNvbm5lY3Rpb24gZXJyb3JzKVxuICAgICAgICBpZiAoXG4gICAgICAgICAgbGFzdFBvbGxFcnJvclRpbWUgIT09IG51bGwgJiZcbiAgICAgICAgICBub3cgLSBsYXN0UG9sbEVycm9yVGltZSA+IHBvbGxTbGVlcERldGVjdGlvblRocmVzaG9sZE1zKGJhY2tvZmZDb25maWcpXG4gICAgICAgICkge1xuICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgIGBbYnJpZGdlOndvcmtdIERldGVjdGVkIHN5c3RlbSBzbGVlcCAoJHtNYXRoLnJvdW5kKChub3cgLSBsYXN0UG9sbEVycm9yVGltZSkgLyAxMDAwKX1zIGdhcCksIHJlc2V0dGluZyBlcnJvciBidWRnZXRgLFxuICAgICAgICAgIClcbiAgICAgICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdpbmZvJywgJ2JyaWRnZV9wb2xsX3NsZWVwX2RldGVjdGVkJywge1xuICAgICAgICAgICAgZ2FwTXM6IG5vdyAtIGxhc3RQb2xsRXJyb3JUaW1lLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgY29ubkVycm9yU3RhcnQgPSBudWxsXG4gICAgICAgICAgY29ubkJhY2tvZmYgPSAwXG4gICAgICAgICAgZ2VuZXJhbEVycm9yU3RhcnQgPSBudWxsXG4gICAgICAgICAgZ2VuZXJhbEJhY2tvZmYgPSAwXG4gICAgICAgIH1cbiAgICAgICAgbGFzdFBvbGxFcnJvclRpbWUgPSBub3dcblxuICAgICAgICBpZiAoIWdlbmVyYWxFcnJvclN0YXJ0KSB7XG4gICAgICAgICAgZ2VuZXJhbEVycm9yU3RhcnQgPSBub3dcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbGFwc2VkID0gbm93IC0gZ2VuZXJhbEVycm9yU3RhcnRcbiAgICAgICAgaWYgKGVsYXBzZWQgPj0gYmFja29mZkNvbmZpZy5nZW5lcmFsR2l2ZVVwTXMpIHtcbiAgICAgICAgICBsb2dnZXIubG9nRXJyb3IoXG4gICAgICAgICAgICBgUGVyc2lzdGVudCBlcnJvcnMgZm9yICR7TWF0aC5yb3VuZChlbGFwc2VkIC8gNjBfMDAwKX0gbWludXRlcywgZ2l2aW5nIHVwLmAsXG4gICAgICAgICAgKVxuICAgICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9icmlkZ2VfcG9sbF9naXZlX3VwJywge1xuICAgICAgICAgICAgZXJyb3JfdHlwZTpcbiAgICAgICAgICAgICAgJ2dlbmVyYWwnIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgICAgICBlbGFwc2VkX21zOiBlbGFwc2VkLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnZXJyb3InLCAnYnJpZGdlX3BvbGxfZ2l2ZV91cCcsIHtcbiAgICAgICAgICAgIGVycm9yX3R5cGU6ICdnZW5lcmFsJyxcbiAgICAgICAgICAgIGVsYXBzZWRfbXM6IGVsYXBzZWQsXG4gICAgICAgICAgfSlcbiAgICAgICAgICBmYXRhbEV4aXQgPSB0cnVlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlc2V0IHRoZSBvdGhlciB0cmFjayB3aGVuIHN3aXRjaGluZyBlcnJvciB0eXBlc1xuICAgICAgICBjb25uRXJyb3JTdGFydCA9IG51bGxcbiAgICAgICAgY29ubkJhY2tvZmYgPSAwXG5cbiAgICAgICAgZ2VuZXJhbEJhY2tvZmYgPSBnZW5lcmFsQmFja29mZlxuICAgICAgICAgID8gTWF0aC5taW4oZ2VuZXJhbEJhY2tvZmYgKiAyLCBiYWNrb2ZmQ29uZmlnLmdlbmVyYWxDYXBNcylcbiAgICAgICAgICA6IGJhY2tvZmZDb25maWcuZ2VuZXJhbEluaXRpYWxNc1xuICAgICAgICBjb25zdCBkZWxheSA9IGFkZEppdHRlcihnZW5lcmFsQmFja29mZilcbiAgICAgICAgbG9nZ2VyLmxvZ1ZlcmJvc2UoXG4gICAgICAgICAgYFBvbGwgZmFpbGVkLCByZXRyeWluZyBpbiAke2Zvcm1hdERlbGF5KGRlbGF5KX0gKCR7TWF0aC5yb3VuZChlbGFwc2VkIC8gMTAwMCl9cyBlbGFwc2VkKTogJHtlcnJNc2d9YCxcbiAgICAgICAgKVxuICAgICAgICBsb2dnZXIudXBkYXRlUmVjb25uZWN0aW5nU3RhdHVzKFxuICAgICAgICAgIGZvcm1hdERlbGF5KGRlbGF5KSxcbiAgICAgICAgICBmb3JtYXREdXJhdGlvbihlbGFwc2VkKSxcbiAgICAgICAgKVxuICAgICAgICBpZiAoZ2V0UG9sbEludGVydmFsQ29uZmlnKCkubm9uX2V4Y2x1c2l2ZV9oZWFydGJlYXRfaW50ZXJ2YWxfbXMgPiAwKSB7XG4gICAgICAgICAgYXdhaXQgaGVhcnRiZWF0QWN0aXZlV29ya0l0ZW1zKClcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBzbGVlcChkZWxheSwgbG9vcFNpZ25hbClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDbGVhbiB1cFxuICBzdG9wU3RhdHVzVXBkYXRlcygpXG4gIGxvZ2dlci5jbGVhclN0YXR1cygpXG5cbiAgY29uc3QgbG9vcER1cmF0aW9uTXMgPSBEYXRlLm5vdygpIC0gbG9vcFN0YXJ0VGltZVxuICBsb2dFdmVudCgndGVuZ3VfYnJpZGdlX3NodXRkb3duJywge1xuICAgIGFjdGl2ZV9zZXNzaW9uczogYWN0aXZlU2Vzc2lvbnMuc2l6ZSxcbiAgICBsb29wX2R1cmF0aW9uX21zOiBsb29wRHVyYXRpb25NcyxcbiAgfSlcbiAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnaW5mbycsICdicmlkZ2Vfc2h1dGRvd24nLCB7XG4gICAgYWN0aXZlX3Nlc3Npb25zOiBhY3RpdmVTZXNzaW9ucy5zaXplLFxuICAgIGxvb3BfZHVyYXRpb25fbXM6IGxvb3BEdXJhdGlvbk1zLFxuICB9KVxuXG4gIC8vIEdyYWNlZnVsIHNodXRkb3duOiBraWxsIGFjdGl2ZSBzZXNzaW9ucywgcmVwb3J0IHRoZW0gYXMgaW50ZXJydXB0ZWQsXG4gIC8vIGFyY2hpdmUgc2Vzc2lvbnMsIHRoZW4gZGVyZWdpc3RlciB0aGUgZW52aXJvbm1lbnQgc28gdGhlIHdlYiBVSSBzaG93c1xuICAvLyB0aGUgYnJpZGdlIGFzIG9mZmxpbmUuXG5cbiAgLy8gQ29sbGVjdCBhbGwgc2Vzc2lvbiBJRHMgdG8gYXJjaGl2ZSBvbiBleGl0LiBUaGlzIGluY2x1ZGVzOlxuICAvLyAxLiBBY3RpdmUgc2Vzc2lvbnMgKHNuYXBzaG90IGJlZm9yZSBraWxsaW5nIFx1MjAxNCBvblNlc3Npb25Eb25lIGNsZWFycyBtYXBzKVxuICAvLyAyLiBUaGUgaW5pdGlhbCBhdXRvLWNyZWF0ZWQgc2Vzc2lvbiAobWF5IG5ldmVyIGhhdmUgaGFkIHdvcmsgZGlzcGF0Y2hlZClcbiAgLy8gYXBpLmFyY2hpdmVTZXNzaW9uIGlzIGlkZW1wb3RlbnQgKDQwOSBpZiBhbHJlYWR5IGFyY2hpdmVkKSwgc29cbiAgLy8gZG91YmxlLWFyY2hpdmluZyBpcyBzYWZlLlxuICBjb25zdCBzZXNzaW9uc1RvQXJjaGl2ZSA9IG5ldyBTZXQoYWN0aXZlU2Vzc2lvbnMua2V5cygpKVxuICBpZiAoaW5pdGlhbFNlc3Npb25JZCkge1xuICAgIHNlc3Npb25zVG9BcmNoaXZlLmFkZChpbml0aWFsU2Vzc2lvbklkKVxuICB9XG4gIC8vIFNuYXBzaG90IGJlZm9yZSBraWxsaW5nIFx1MjAxNCBvblNlc3Npb25Eb25lIGNsZWFycyBzZXNzaW9uQ29tcGF0SWRzLlxuICBjb25zdCBjb21wYXRJZFNuYXBzaG90ID0gbmV3IE1hcChzZXNzaW9uQ29tcGF0SWRzKVxuXG4gIGlmIChhY3RpdmVTZXNzaW9ucy5zaXplID4gMCkge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbYnJpZGdlOnNodXRkb3duXSBTaHV0dGluZyBkb3duICR7YWN0aXZlU2Vzc2lvbnMuc2l6ZX0gYWN0aXZlIHNlc3Npb24ocylgLFxuICAgIClcbiAgICBsb2dnZXIubG9nU3RhdHVzKFxuICAgICAgYFNodXR0aW5nIGRvd24gJHthY3RpdmVTZXNzaW9ucy5zaXplfSBhY3RpdmUgc2Vzc2lvbihzKVxcdTIwMjZgLFxuICAgIClcblxuICAgIC8vIFNuYXBzaG90IHdvcmsgSURzIGJlZm9yZSBraWxsaW5nIFx1MjAxNCBvblNlc3Npb25Eb25lIGNsZWFycyB0aGUgbWFwcyB3aGVuXG4gICAgLy8gZWFjaCBjaGlsZCBleGl0cywgc28gd2UgbmVlZCBhIGNvcHkgZm9yIHRoZSBzdG9wV29yayBjYWxscyBiZWxvdy5cbiAgICBjb25zdCBzaHV0ZG93bldvcmtJZHMgPSBuZXcgTWFwKHNlc3Npb25Xb3JrSWRzKVxuXG4gICAgZm9yIChjb25zdCBbc2Vzc2lvbklkLCBoYW5kbGVdIG9mIGFjdGl2ZVNlc3Npb25zLmVudHJpZXMoKSkge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgW2JyaWRnZTpzaHV0ZG93bl0gU2VuZGluZyBTSUdURVJNIHRvIHNlc3Npb25JZD0ke3Nlc3Npb25JZH1gLFxuICAgICAgKVxuICAgICAgaGFuZGxlLmtpbGwoKVxuICAgIH1cblxuICAgIGNvbnN0IHRpbWVvdXQgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgICBhd2FpdCBQcm9taXNlLnJhY2UoW1xuICAgICAgUHJvbWlzZS5hbGxTZXR0bGVkKFsuLi5hY3RpdmVTZXNzaW9ucy52YWx1ZXMoKV0ubWFwKGggPT4gaC5kb25lKSksXG4gICAgICBzbGVlcChiYWNrb2ZmQ29uZmlnLnNodXRkb3duR3JhY2VNcyA/PyAzMF8wMDAsIHRpbWVvdXQuc2lnbmFsKSxcbiAgICBdKVxuICAgIHRpbWVvdXQuYWJvcnQoKVxuXG4gICAgLy8gU0lHS0lMTCBhbnkgcHJvY2Vzc2VzIHRoYXQgZGlkbid0IHJlc3BvbmQgdG8gU0lHVEVSTSB3aXRoaW4gdGhlIGdyYWNlIHdpbmRvd1xuICAgIGZvciAoY29uc3QgW3NpZCwgaGFuZGxlXSBvZiBhY3RpdmVTZXNzaW9ucy5lbnRyaWVzKCkpIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhgW2JyaWRnZTpzaHV0ZG93bl0gRm9yY2Uta2lsbGluZyBzdHVjayBzZXNzaW9uSWQ9JHtzaWR9YClcbiAgICAgIGhhbmRsZS5mb3JjZUtpbGwoKVxuICAgIH1cblxuICAgIC8vIENsZWFyIGFueSByZW1haW5pbmcgc2Vzc2lvbiB0aW1lb3V0IGFuZCByZWZyZXNoIHRpbWVyc1xuICAgIGZvciAoY29uc3QgdGltZXIgb2Ygc2Vzc2lvblRpbWVycy52YWx1ZXMoKSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgIH1cbiAgICBzZXNzaW9uVGltZXJzLmNsZWFyKClcbiAgICB0b2tlblJlZnJlc2g/LmNhbmNlbEFsbCgpXG5cbiAgICAvLyBDbGVhbiB1cCBhbnkgcmVtYWluaW5nIHdvcmt0cmVlcyBmcm9tIGFjdGl2ZSBzZXNzaW9ucy5cbiAgICAvLyBTbmFwc2hvdCBhbmQgY2xlYXIgdGhlIG1hcCBmaXJzdCBzbyBvblNlc3Npb25Eb25lICh3aGljaCBtYXkgZmlyZVxuICAgIC8vIGR1cmluZyB0aGUgYXdhaXQgYmVsb3cgd2hlbiBoYW5kbGUuZG9uZSByZXNvbHZlcykgd29uJ3QgdHJ5IHRvXG4gICAgLy8gcmVtb3ZlIHRoZSBzYW1lIHdvcmt0cmVlcyBhZ2Fpbi5cbiAgICBpZiAoc2Vzc2lvbldvcmt0cmVlcy5zaXplID4gMCkge1xuICAgICAgY29uc3QgcmVtYWluaW5nV29ya3RyZWVzID0gWy4uLnNlc3Npb25Xb3JrdHJlZXMudmFsdWVzKCldXG4gICAgICBzZXNzaW9uV29ya3RyZWVzLmNsZWFyKClcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFticmlkZ2U6c2h1dGRvd25dIENsZWFuaW5nIHVwICR7cmVtYWluaW5nV29ya3RyZWVzLmxlbmd0aH0gd29ya3RyZWUocylgLFxuICAgICAgKVxuICAgICAgYXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKFxuICAgICAgICByZW1haW5pbmdXb3JrdHJlZXMubWFwKHd0ID0+XG4gICAgICAgICAgcmVtb3ZlQWdlbnRXb3JrdHJlZShcbiAgICAgICAgICAgIHd0Lndvcmt0cmVlUGF0aCxcbiAgICAgICAgICAgIHd0Lndvcmt0cmVlQnJhbmNoLFxuICAgICAgICAgICAgd3QuZ2l0Um9vdCxcbiAgICAgICAgICAgIHd0Lmhvb2tCYXNlZCxcbiAgICAgICAgICApLFxuICAgICAgICApLFxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFN0b3AgYWxsIGFjdGl2ZSB3b3JrIGl0ZW1zIHNvIHRoZSBzZXJ2ZXIga25vd3MgdGhleSdyZSBkb25lXG4gICAgYXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKFxuICAgICAgWy4uLnNodXRkb3duV29ya0lkcy5lbnRyaWVzKCldLm1hcCgoW3Nlc3Npb25JZCwgd29ya0lkXSkgPT4ge1xuICAgICAgICByZXR1cm4gYXBpXG4gICAgICAgICAgLnN0b3BXb3JrKGVudmlyb25tZW50SWQsIHdvcmtJZCwgdHJ1ZSlcbiAgICAgICAgICAuY2F0Y2goZXJyID0+XG4gICAgICAgICAgICBsb2dnZXIubG9nVmVyYm9zZShcbiAgICAgICAgICAgICAgYEZhaWxlZCB0byBzdG9wIHdvcmsgJHt3b3JrSWR9IGZvciBzZXNzaW9uICR7c2Vzc2lvbklkfTogJHtlcnJvck1lc3NhZ2UoZXJyKX1gLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICApXG4gICAgICB9KSxcbiAgICApXG4gIH1cblxuICAvLyBFbnN1cmUgYWxsIGluLWZsaWdodCBjbGVhbnVwIChzdG9wV29yaywgd29ya3RyZWUgcmVtb3ZhbCkgZnJvbVxuICAvLyBvblNlc3Npb25Eb25lIGNvbXBsZXRlcyBiZWZvcmUgZGVyZWdpc3RlcmluZyBcdTIwMTQgb3RoZXJ3aXNlXG4gIC8vIHByb2Nlc3MuZXhpdCgpIGNhbiBraWxsIHRoZW0gbWlkLWZsaWdodC5cbiAgaWYgKHBlbmRpbmdDbGVhbnVwcy5zaXplID4gMCkge1xuICAgIGF3YWl0IFByb21pc2UuYWxsU2V0dGxlZChbLi4ucGVuZGluZ0NsZWFudXBzXSlcbiAgfVxuXG4gIC8vIEluIHNpbmdsZS1zZXNzaW9uIG1vZGUgd2l0aCBhIGtub3duIHNlc3Npb24sIGxlYXZlIHRoZSBzZXNzaW9uIGFuZFxuICAvLyBlbnZpcm9ubWVudCBhbGl2ZSBzbyBgY2xhdWRlIHJlbW90ZS1jb250cm9sIC0tc2Vzc2lvbi1pZD08aWQ+YCBjYW4gcmVzdW1lLlxuICAvLyBUaGUgYmFja2VuZCBHQ3Mgc3RhbGUgZW52aXJvbm1lbnRzIHZpYSBhIDRoIFRUTCAoQlJJREdFX0xBU1RfUE9MTF9UVEwpLlxuICAvLyBBcmNoaXZpbmcgdGhlIHNlc3Npb24gb3IgZGVyZWdpc3RlcmluZyB0aGUgZW52aXJvbm1lbnQgd291bGQgbWFrZSB0aGVcbiAgLy8gcHJpbnRlZCByZXN1bWUgY29tbWFuZCBhIGxpZSBcdTIwMTQgZGVyZWdpc3RlciBkZWxldGVzIEZpcmVzdG9yZSArIFJlZGlzIHN0cmVhbS5cbiAgLy8gU2tpcCB3aGVuIHRoZSBsb29wIGV4aXRlZCBmYXRhbGx5IChlbnYgZXhwaXJlZCwgYXV0aCBmYWlsZWQsIGdpdmUtdXApIFx1MjAxNFxuICAvLyByZXN1bWUgaXMgaW1wb3NzaWJsZSBpbiB0aG9zZSBjYXNlcyBhbmQgdGhlIG1lc3NhZ2Ugd291bGQgY29udHJhZGljdCB0aGVcbiAgLy8gZXJyb3IgYWxyZWFkeSBwcmludGVkLlxuICAvLyBmZWF0dXJlKCdLQUlST1MnKSBnYXRlOiAtLXNlc3Npb24taWQgaXMgYW50LW9ubHk7IHdpdGhvdXQgdGhlIGdhdGUsXG4gIC8vIHJldmVydCB0byB0aGUgcHJlLVBSIGJlaGF2aW9yIChhcmNoaXZlICsgZGVyZWdpc3RlciBvbiBldmVyeSBzaHV0ZG93bikuXG4gIGlmIChcbiAgICBmZWF0dXJlKCdLQUlST1MnKSAmJlxuICAgIGNvbmZpZy5zcGF3bk1vZGUgPT09ICdzaW5nbGUtc2Vzc2lvbicgJiZcbiAgICBpbml0aWFsU2Vzc2lvbklkICYmXG4gICAgIWZhdGFsRXhpdFxuICApIHtcbiAgICBsb2dnZXIubG9nU3RhdHVzKFxuICAgICAgYFJlc3VtZSB0aGlzIHNlc3Npb24gYnkgcnVubmluZyBcXGBjbGF1ZGUgcmVtb3RlLWNvbnRyb2wgLS1jb250aW51ZVxcYGAsXG4gICAgKVxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbYnJpZGdlOnNodXRkb3duXSBTa2lwcGluZyBhcmNoaXZlK2RlcmVnaXN0ZXIgdG8gYWxsb3cgcmVzdW1lIG9mIHNlc3Npb24gJHtpbml0aWFsU2Vzc2lvbklkfWAsXG4gICAgKVxuICAgIHJldHVyblxuICB9XG5cbiAgLy8gQXJjaGl2ZSBhbGwga25vd24gc2Vzc2lvbnMgc28gdGhleSBkb24ndCBsaW5nZXIgYXMgaWRsZS9ydW5uaW5nIG9uIHRoZVxuICAvLyBzZXJ2ZXIgYWZ0ZXIgdGhlIGJyaWRnZSBnb2VzIG9mZmxpbmUuXG4gIGlmIChzZXNzaW9uc1RvQXJjaGl2ZS5zaXplID4gMCkge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbYnJpZGdlOnNodXRkb3duXSBBcmNoaXZpbmcgJHtzZXNzaW9uc1RvQXJjaGl2ZS5zaXplfSBzZXNzaW9uKHMpYCxcbiAgICApXG4gICAgYXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKFxuICAgICAgWy4uLnNlc3Npb25zVG9BcmNoaXZlXS5tYXAoc2Vzc2lvbklkID0+XG4gICAgICAgIGFwaVxuICAgICAgICAgIC5hcmNoaXZlU2Vzc2lvbihcbiAgICAgICAgICAgIGNvbXBhdElkU25hcHNob3QuZ2V0KHNlc3Npb25JZCkgPz8gdG9Db21wYXRTZXNzaW9uSWQoc2Vzc2lvbklkKSxcbiAgICAgICAgICApXG4gICAgICAgICAgLmNhdGNoKGVyciA9PlxuICAgICAgICAgICAgbG9nZ2VyLmxvZ1ZlcmJvc2UoXG4gICAgICAgICAgICAgIGBGYWlsZWQgdG8gYXJjaGl2ZSBzZXNzaW9uICR7c2Vzc2lvbklkfTogJHtlcnJvck1lc3NhZ2UoZXJyKX1gLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICApLFxuICAgICAgKSxcbiAgICApXG4gIH1cblxuICAvLyBEZXJlZ2lzdGVyIHRoZSBlbnZpcm9ubWVudCBzbyB0aGUgd2ViIFVJIHNob3dzIHRoZSBicmlkZ2UgYXMgb2ZmbGluZVxuICAvLyBhbmQgdGhlIFJlZGlzIHN0cmVhbSBpcyBjbGVhbmVkIHVwLlxuICB0cnkge1xuICAgIGF3YWl0IGFwaS5kZXJlZ2lzdGVyRW52aXJvbm1lbnQoZW52aXJvbm1lbnRJZClcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgW2JyaWRnZTpzaHV0ZG93bl0gRW52aXJvbm1lbnQgZGVyZWdpc3RlcmVkLCBicmlkZ2Ugb2ZmbGluZWAsXG4gICAgKVxuICAgIGxvZ2dlci5sb2dWZXJib3NlKCdFbnZpcm9ubWVudCBkZXJlZ2lzdGVyZWQuJylcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbG9nZ2VyLmxvZ1ZlcmJvc2UoYEZhaWxlZCB0byBkZXJlZ2lzdGVyIGVudmlyb25tZW50OiAke2Vycm9yTWVzc2FnZShlcnIpfWApXG4gIH1cblxuICAvLyBDbGVhciB0aGUgY3Jhc2gtcmVjb3ZlcnkgcG9pbnRlciBcdTIwMTQgdGhlIGVudiBpcyBnb25lLCBwb2ludGVyIHdvdWxkIGJlXG4gIC8vIHN0YWxlLiBUaGUgZWFybHkgcmV0dXJuIGFib3ZlIChyZXN1bWFibGUgU0lHSU5UIHNodXRkb3duKSBza2lwcyB0aGlzLFxuICAvLyBsZWF2aW5nIHRoZSBwb2ludGVyIGFzIGEgYmFja3VwIGZvciB0aGUgcHJpbnRlZCAtLXNlc3Npb24taWQgaGludC5cbiAgY29uc3QgeyBjbGVhckJyaWRnZVBvaW50ZXIgfSA9IGF3YWl0IGltcG9ydCgnLi9icmlkZ2VQb2ludGVyLmpzJylcbiAgYXdhaXQgY2xlYXJCcmlkZ2VQb2ludGVyKGNvbmZpZy5kaXIpXG5cbiAgbG9nZ2VyLmxvZ1ZlcmJvc2UoJ0Vudmlyb25tZW50IG9mZmxpbmUuJylcbn1cblxuY29uc3QgQ09OTkVDVElPTl9FUlJPUl9DT0RFUyA9IG5ldyBTZXQoW1xuICAnRUNPTk5SRUZVU0VEJyxcbiAgJ0VDT05OUkVTRVQnLFxuICAnRVRJTUVET1VUJyxcbiAgJ0VORVRVTlJFQUNIJyxcbiAgJ0VIT1NUVU5SRUFDSCcsXG5dKVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDb25uZWN0aW9uRXJyb3IoZXJyOiB1bmtub3duKTogYm9vbGVhbiB7XG4gIGlmIChcbiAgICBlcnIgJiZcbiAgICB0eXBlb2YgZXJyID09PSAnb2JqZWN0JyAmJlxuICAgICdjb2RlJyBpbiBlcnIgJiZcbiAgICB0eXBlb2YgZXJyLmNvZGUgPT09ICdzdHJpbmcnICYmXG4gICAgQ09OTkVDVElPTl9FUlJPUl9DT0RFUy5oYXMoZXJyLmNvZGUpXG4gICkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qKiBEZXRlY3QgSFRUUCA1eHggZXJyb3JzIGZyb20gYXhpb3MgKGNvZGU6ICdFUlJfQkFEX1JFU1BPTlNFJykuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTZXJ2ZXJFcnJvcihlcnI6IHVua25vd24pOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICAhIWVyciAmJlxuICAgIHR5cGVvZiBlcnIgPT09ICdvYmplY3QnICYmXG4gICAgJ2NvZGUnIGluIGVyciAmJlxuICAgIHR5cGVvZiBlcnIuY29kZSA9PT0gJ3N0cmluZycgJiZcbiAgICBlcnIuY29kZSA9PT0gJ0VSUl9CQURfUkVTUE9OU0UnXG4gIClcbn1cblxuLyoqIEFkZCBcdTAwQjEyNSUgaml0dGVyIHRvIGEgZGVsYXkgdmFsdWUuICovXG5mdW5jdGlvbiBhZGRKaXR0ZXIobXM6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLm1heCgwLCBtcyArIG1zICogMC4yNSAqICgyICogTWF0aC5yYW5kb20oKSAtIDEpKVxufVxuXG5mdW5jdGlvbiBmb3JtYXREZWxheShtczogbnVtYmVyKTogc3RyaW5nIHtcbiAgcmV0dXJuIG1zID49IDEwMDAgPyBgJHsobXMgLyAxMDAwKS50b0ZpeGVkKDEpfXNgIDogYCR7TWF0aC5yb3VuZChtcyl9bXNgXG59XG5cbi8qKlxuICogUmV0cnkgc3RvcFdvcmsgd2l0aCBleHBvbmVudGlhbCBiYWNrb2ZmICgzIGF0dGVtcHRzLCAxcy8ycy80cykuXG4gKiBFbnN1cmVzIHRoZSBzZXJ2ZXIgbGVhcm5zIHRoZSB3b3JrIGl0ZW0gZW5kZWQsIHByZXZlbnRpbmcgc2VydmVyLXNpZGUgem9tYmllcy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gc3RvcFdvcmtXaXRoUmV0cnkoXG4gIGFwaTogQnJpZGdlQXBpQ2xpZW50LFxuICBlbnZpcm9ubWVudElkOiBzdHJpbmcsXG4gIHdvcmtJZDogc3RyaW5nLFxuICBsb2dnZXI6IEJyaWRnZUxvZ2dlcixcbiAgYmFzZURlbGF5TXMgPSAxMDAwLFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IE1BWF9BVFRFTVBUUyA9IDNcblxuICBmb3IgKGxldCBhdHRlbXB0ID0gMTsgYXR0ZW1wdCA8PSBNQVhfQVRURU1QVFM7IGF0dGVtcHQrKykge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBhcGkuc3RvcFdvcmsoZW52aXJvbm1lbnRJZCwgd29ya0lkLCBmYWxzZSlcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFticmlkZ2U6d29ya10gc3RvcFdvcmsgc3VjY2VlZGVkIGZvciB3b3JrSWQ9JHt3b3JrSWR9IG9uIGF0dGVtcHQgJHthdHRlbXB0fS8ke01BWF9BVFRFTVBUU31gLFxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBBdXRoL3Blcm1pc3Npb24gZXJyb3JzIHdvbid0IGJlIGZpeGVkIGJ5IHJldHJ5aW5nXG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgQnJpZGdlRmF0YWxFcnJvcikge1xuICAgICAgICBpZiAoaXNTdXBwcmVzc2libGU0MDMoZXJyKSkge1xuICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgIGBbYnJpZGdlOndvcmtdIFN1cHByZXNzZWQgc3RvcFdvcmsgNDAzIGZvciAke3dvcmtJZH06ICR7ZXJyLm1lc3NhZ2V9YCxcbiAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKGBGYWlsZWQgdG8gc3RvcCB3b3JrICR7d29ya0lkfTogJHtlcnIubWVzc2FnZX1gKVxuICAgICAgICB9XG4gICAgICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2Vycm9yJywgJ2JyaWRnZV9zdG9wX3dvcmtfZmFpbGVkJywge1xuICAgICAgICAgIGF0dGVtcHRzOiBhdHRlbXB0LFxuICAgICAgICAgIGZhdGFsOiB0cnVlLFxuICAgICAgICB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IGVyck1zZyA9IGVycm9yTWVzc2FnZShlcnIpXG4gICAgICBpZiAoYXR0ZW1wdCA8IE1BWF9BVFRFTVBUUykge1xuICAgICAgICBjb25zdCBkZWxheSA9IGFkZEppdHRlcihiYXNlRGVsYXlNcyAqIE1hdGgucG93KDIsIGF0dGVtcHQgLSAxKSlcbiAgICAgICAgbG9nZ2VyLmxvZ1ZlcmJvc2UoXG4gICAgICAgICAgYEZhaWxlZCB0byBzdG9wIHdvcmsgJHt3b3JrSWR9IChhdHRlbXB0ICR7YXR0ZW1wdH0vJHtNQVhfQVRURU1QVFN9KSwgcmV0cnlpbmcgaW4gJHtmb3JtYXREZWxheShkZWxheSl9OiAke2Vyck1zZ31gLFxuICAgICAgICApXG4gICAgICAgIGF3YWl0IHNsZWVwKGRlbGF5KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKFxuICAgICAgICAgIGBGYWlsZWQgdG8gc3RvcCB3b3JrICR7d29ya0lkfSBhZnRlciAke01BWF9BVFRFTVBUU30gYXR0ZW1wdHM6ICR7ZXJyTXNnfWAsXG4gICAgICAgIClcbiAgICAgICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnZXJyb3InLCAnYnJpZGdlX3N0b3Bfd29ya19mYWlsZWQnLCB7XG4gICAgICAgICAgYXR0ZW1wdHM6IE1BWF9BVFRFTVBUUyxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gb25TZXNzaW9uVGltZW91dChcbiAgc2Vzc2lvbklkOiBzdHJpbmcsXG4gIHRpbWVvdXRNczogbnVtYmVyLFxuICBsb2dnZXI6IEJyaWRnZUxvZ2dlcixcbiAgdGltZWRPdXRTZXNzaW9uczogU2V0PHN0cmluZz4sXG4gIGhhbmRsZTogU2Vzc2lvbkhhbmRsZSxcbik6IHZvaWQge1xuICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgYFticmlkZ2U6c2Vzc2lvbl0gc2Vzc2lvbklkPSR7c2Vzc2lvbklkfSB0aW1lZCBvdXQgYWZ0ZXIgJHtmb3JtYXREdXJhdGlvbih0aW1lb3V0TXMpfWAsXG4gIClcbiAgbG9nRXZlbnQoJ3Rlbmd1X2JyaWRnZV9zZXNzaW9uX3RpbWVvdXQnLCB7XG4gICAgdGltZW91dF9tczogdGltZW91dE1zLFxuICB9KVxuICBsb2dnZXIubG9nU2Vzc2lvbkZhaWxlZChcbiAgICBzZXNzaW9uSWQsXG4gICAgYFNlc3Npb24gdGltZWQgb3V0IGFmdGVyICR7Zm9ybWF0RHVyYXRpb24odGltZW91dE1zKX1gLFxuICApXG4gIHRpbWVkT3V0U2Vzc2lvbnMuYWRkKHNlc3Npb25JZClcbiAgaGFuZGxlLmtpbGwoKVxufVxuXG5leHBvcnQgdHlwZSBQYXJzZWRBcmdzID0ge1xuICB2ZXJib3NlOiBib29sZWFuXG4gIHNhbmRib3g6IGJvb2xlYW5cbiAgZGVidWdGaWxlPzogc3RyaW5nXG4gIHNlc3Npb25UaW1lb3V0TXM/OiBudW1iZXJcbiAgcGVybWlzc2lvbk1vZGU/OiBzdHJpbmdcbiAgbmFtZT86IHN0cmluZ1xuICAvKiogVmFsdWUgcGFzc2VkIHRvIC0tc3Bhd24gKGlmIGFueSk7IHVuZGVmaW5lZCBpZiBubyAtLXNwYXduIGZsYWcgd2FzIGdpdmVuLiAqL1xuICBzcGF3bk1vZGU6IFNwYXduTW9kZSB8IHVuZGVmaW5lZFxuICAvKiogVmFsdWUgcGFzc2VkIHRvIC0tY2FwYWNpdHkgKGlmIGFueSk7IHVuZGVmaW5lZCBpZiBubyAtLWNhcGFjaXR5IGZsYWcgd2FzIGdpdmVuLiAqL1xuICBjYXBhY2l0eTogbnVtYmVyIHwgdW5kZWZpbmVkXG4gIC8qKiAtLVtuby1dY3JlYXRlLXNlc3Npb24taW4tZGlyIG92ZXJyaWRlOyB1bmRlZmluZWQgPSB1c2UgZGVmYXVsdCAob24pLiAqL1xuICBjcmVhdGVTZXNzaW9uSW5EaXI6IGJvb2xlYW4gfCB1bmRlZmluZWRcbiAgLyoqIFJlc3VtZSBhbiBleGlzdGluZyBzZXNzaW9uIGluc3RlYWQgb2YgY3JlYXRpbmcgYSBuZXcgb25lLiAqL1xuICBzZXNzaW9uSWQ/OiBzdHJpbmdcbiAgLyoqIFJlc3VtZSB0aGUgbGFzdCBzZXNzaW9uIGluIHRoaXMgZGlyZWN0b3J5IChyZWFkcyBicmlkZ2UtcG9pbnRlci5qc29uKS4gKi9cbiAgY29udGludWVTZXNzaW9uOiBib29sZWFuXG4gIGhlbHA6IGJvb2xlYW5cbiAgZXJyb3I/OiBzdHJpbmdcbn1cblxuY29uc3QgU1BBV05fRkxBR19WQUxVRVMgPSBbJ3Nlc3Npb24nLCAnc2FtZS1kaXInLCAnd29ya3RyZWUnXSBhcyBjb25zdFxuXG5mdW5jdGlvbiBwYXJzZVNwYXduVmFsdWUocmF3OiBzdHJpbmcgfCB1bmRlZmluZWQpOiBTcGF3bk1vZGUgfCBzdHJpbmcge1xuICBpZiAocmF3ID09PSAnc2Vzc2lvbicpIHJldHVybiAnc2luZ2xlLXNlc3Npb24nXG4gIGlmIChyYXcgPT09ICdzYW1lLWRpcicpIHJldHVybiAnc2FtZS1kaXInXG4gIGlmIChyYXcgPT09ICd3b3JrdHJlZScpIHJldHVybiAnd29ya3RyZWUnXG4gIHJldHVybiBgLS1zcGF3biByZXF1aXJlcyBvbmUgb2Y6ICR7U1BBV05fRkxBR19WQUxVRVMuam9pbignLCAnKX0gKGdvdDogJHtyYXcgPz8gJzxtaXNzaW5nPid9KWBcbn1cblxuZnVuY3Rpb24gcGFyc2VDYXBhY2l0eVZhbHVlKHJhdzogc3RyaW5nIHwgdW5kZWZpbmVkKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgY29uc3QgbiA9IHJhdyA9PT0gdW5kZWZpbmVkID8gTmFOIDogcGFyc2VJbnQocmF3LCAxMClcbiAgaWYgKGlzTmFOKG4pIHx8IG4gPCAxKSB7XG4gICAgcmV0dXJuIGAtLWNhcGFjaXR5IHJlcXVpcmVzIGEgcG9zaXRpdmUgaW50ZWdlciAoZ290OiAke3JhdyA/PyAnPG1pc3Npbmc+J30pYFxuICB9XG4gIHJldHVybiBuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUFyZ3MoYXJnczogc3RyaW5nW10pOiBQYXJzZWRBcmdzIHtcbiAgbGV0IHZlcmJvc2UgPSBmYWxzZVxuICBsZXQgc2FuZGJveCA9IGZhbHNlXG4gIGxldCBkZWJ1Z0ZpbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBsZXQgc2Vzc2lvblRpbWVvdXRNczogbnVtYmVyIHwgdW5kZWZpbmVkXG4gIGxldCBwZXJtaXNzaW9uTW9kZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIGxldCBuYW1lOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgbGV0IGhlbHAgPSBmYWxzZVxuICBsZXQgc3Bhd25Nb2RlOiBTcGF3bk1vZGUgfCB1bmRlZmluZWRcbiAgbGV0IGNhcGFjaXR5OiBudW1iZXIgfCB1bmRlZmluZWRcbiAgbGV0IGNyZWF0ZVNlc3Npb25JbkRpcjogYm9vbGVhbiB8IHVuZGVmaW5lZFxuICBsZXQgc2Vzc2lvbklkOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgbGV0IGNvbnRpbnVlU2Vzc2lvbiA9IGZhbHNlXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYXJnID0gYXJnc1tpXSFcbiAgICBpZiAoYXJnID09PSAnLS1oZWxwJyB8fCBhcmcgPT09ICctaCcpIHtcbiAgICAgIGhlbHAgPSB0cnVlXG4gICAgfSBlbHNlIGlmIChhcmcgPT09ICctLXZlcmJvc2UnIHx8IGFyZyA9PT0gJy12Jykge1xuICAgICAgdmVyYm9zZSA9IHRydWVcbiAgICB9IGVsc2UgaWYgKGFyZyA9PT0gJy0tc2FuZGJveCcpIHtcbiAgICAgIHNhbmRib3ggPSB0cnVlXG4gICAgfSBlbHNlIGlmIChhcmcgPT09ICctLW5vLXNhbmRib3gnKSB7XG4gICAgICBzYW5kYm94ID0gZmFsc2VcbiAgICB9IGVsc2UgaWYgKGFyZyA9PT0gJy0tZGVidWctZmlsZScgJiYgaSArIDEgPCBhcmdzLmxlbmd0aCkge1xuICAgICAgZGVidWdGaWxlID0gcmVzb2x2ZShhcmdzWysraV0hKVxuICAgIH0gZWxzZSBpZiAoYXJnLnN0YXJ0c1dpdGgoJy0tZGVidWctZmlsZT0nKSkge1xuICAgICAgZGVidWdGaWxlID0gcmVzb2x2ZShhcmcuc2xpY2UoJy0tZGVidWctZmlsZT0nLmxlbmd0aCkpXG4gICAgfSBlbHNlIGlmIChhcmcgPT09ICctLXNlc3Npb24tdGltZW91dCcgJiYgaSArIDEgPCBhcmdzLmxlbmd0aCkge1xuICAgICAgc2Vzc2lvblRpbWVvdXRNcyA9IHBhcnNlSW50KGFyZ3NbKytpXSEsIDEwKSAqIDEwMDBcbiAgICB9IGVsc2UgaWYgKGFyZy5zdGFydHNXaXRoKCctLXNlc3Npb24tdGltZW91dD0nKSkge1xuICAgICAgc2Vzc2lvblRpbWVvdXRNcyA9XG4gICAgICAgIHBhcnNlSW50KGFyZy5zbGljZSgnLS1zZXNzaW9uLXRpbWVvdXQ9Jy5sZW5ndGgpLCAxMCkgKiAxMDAwXG4gICAgfSBlbHNlIGlmIChhcmcgPT09ICctLXBlcm1pc3Npb24tbW9kZScgJiYgaSArIDEgPCBhcmdzLmxlbmd0aCkge1xuICAgICAgcGVybWlzc2lvbk1vZGUgPSBhcmdzWysraV0hXG4gICAgfSBlbHNlIGlmIChhcmcuc3RhcnRzV2l0aCgnLS1wZXJtaXNzaW9uLW1vZGU9JykpIHtcbiAgICAgIHBlcm1pc3Npb25Nb2RlID0gYXJnLnNsaWNlKCctLXBlcm1pc3Npb24tbW9kZT0nLmxlbmd0aClcbiAgICB9IGVsc2UgaWYgKGFyZyA9PT0gJy0tbmFtZScgJiYgaSArIDEgPCBhcmdzLmxlbmd0aCkge1xuICAgICAgbmFtZSA9IGFyZ3NbKytpXSFcbiAgICB9IGVsc2UgaWYgKGFyZy5zdGFydHNXaXRoKCctLW5hbWU9JykpIHtcbiAgICAgIG5hbWUgPSBhcmcuc2xpY2UoJy0tbmFtZT0nLmxlbmd0aClcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgZmVhdHVyZSgnS0FJUk9TJykgJiZcbiAgICAgIGFyZyA9PT0gJy0tc2Vzc2lvbi1pZCcgJiZcbiAgICAgIGkgKyAxIDwgYXJncy5sZW5ndGhcbiAgICApIHtcbiAgICAgIHNlc3Npb25JZCA9IGFyZ3NbKytpXSFcbiAgICAgIGlmICghc2Vzc2lvbklkKSB7XG4gICAgICAgIHJldHVybiBtYWtlRXJyb3IoJy0tc2Vzc2lvbi1pZCByZXF1aXJlcyBhIHZhbHVlJylcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZlYXR1cmUoJ0tBSVJPUycpICYmIGFyZy5zdGFydHNXaXRoKCctLXNlc3Npb24taWQ9JykpIHtcbiAgICAgIHNlc3Npb25JZCA9IGFyZy5zbGljZSgnLS1zZXNzaW9uLWlkPScubGVuZ3RoKVxuICAgICAgaWYgKCFzZXNzaW9uSWQpIHtcbiAgICAgICAgcmV0dXJuIG1ha2VFcnJvcignLS1zZXNzaW9uLWlkIHJlcXVpcmVzIGEgdmFsdWUnKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZmVhdHVyZSgnS0FJUk9TJykgJiYgKGFyZyA9PT0gJy0tY29udGludWUnIHx8IGFyZyA9PT0gJy1jJykpIHtcbiAgICAgIGNvbnRpbnVlU2Vzc2lvbiA9IHRydWVcbiAgICB9IGVsc2UgaWYgKGFyZyA9PT0gJy0tc3Bhd24nIHx8IGFyZy5zdGFydHNXaXRoKCctLXNwYXduPScpKSB7XG4gICAgICBpZiAoc3Bhd25Nb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIG1ha2VFcnJvcignLS1zcGF3biBtYXkgb25seSBiZSBzcGVjaWZpZWQgb25jZScpXG4gICAgICB9XG4gICAgICBjb25zdCByYXcgPSBhcmcuc3RhcnRzV2l0aCgnLS1zcGF3bj0nKVxuICAgICAgICA/IGFyZy5zbGljZSgnLS1zcGF3bj0nLmxlbmd0aClcbiAgICAgICAgOiBhcmdzWysraV1cbiAgICAgIGNvbnN0IHYgPSBwYXJzZVNwYXduVmFsdWUocmF3KVxuICAgICAgaWYgKHYgPT09ICdzaW5nbGUtc2Vzc2lvbicgfHwgdiA9PT0gJ3NhbWUtZGlyJyB8fCB2ID09PSAnd29ya3RyZWUnKSB7XG4gICAgICAgIHNwYXduTW9kZSA9IHZcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtYWtlRXJyb3IodilcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFyZyA9PT0gJy0tY2FwYWNpdHknIHx8IGFyZy5zdGFydHNXaXRoKCctLWNhcGFjaXR5PScpKSB7XG4gICAgICBpZiAoY2FwYWNpdHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbWFrZUVycm9yKCctLWNhcGFjaXR5IG1heSBvbmx5IGJlIHNwZWNpZmllZCBvbmNlJylcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJhdyA9IGFyZy5zdGFydHNXaXRoKCctLWNhcGFjaXR5PScpXG4gICAgICAgID8gYXJnLnNsaWNlKCctLWNhcGFjaXR5PScubGVuZ3RoKVxuICAgICAgICA6IGFyZ3NbKytpXVxuICAgICAgY29uc3QgdiA9IHBhcnNlQ2FwYWNpdHlWYWx1ZShyYXcpXG4gICAgICBpZiAodHlwZW9mIHYgPT09ICdudW1iZXInKSBjYXBhY2l0eSA9IHZcbiAgICAgIGVsc2UgcmV0dXJuIG1ha2VFcnJvcih2KVxuICAgIH0gZWxzZSBpZiAoYXJnID09PSAnLS1jcmVhdGUtc2Vzc2lvbi1pbi1kaXInKSB7XG4gICAgICBjcmVhdGVTZXNzaW9uSW5EaXIgPSB0cnVlXG4gICAgfSBlbHNlIGlmIChhcmcgPT09ICctLW5vLWNyZWF0ZS1zZXNzaW9uLWluLWRpcicpIHtcbiAgICAgIGNyZWF0ZVNlc3Npb25JbkRpciA9IGZhbHNlXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtYWtlRXJyb3IoXG4gICAgICAgIGBVbmtub3duIGFyZ3VtZW50OiAke2FyZ31cXG5SdW4gJ2NsYXVkZSByZW1vdGUtY29udHJvbCAtLWhlbHAnIGZvciB1c2FnZS5gLFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIC8vIE5vdGU6IGdhdGUgY2hlY2sgZm9yIC0tc3Bhd24vLS1jYXBhY2l0eS8tLWNyZWF0ZS1zZXNzaW9uLWluLWRpciBpcyBpbiBicmlkZ2VNYWluXG4gIC8vIChnYXRlLWF3YXJlIGVycm9yKS4gRmxhZyBjcm9zcy12YWxpZGF0aW9uIGhhcHBlbnMgaGVyZS5cblxuICAvLyAtLWNhcGFjaXR5IG9ubHkgbWFrZXMgc2Vuc2UgZm9yIG11bHRpLXNlc3Npb24gbW9kZXMuXG4gIGlmIChzcGF3bk1vZGUgPT09ICdzaW5nbGUtc2Vzc2lvbicgJiYgY2FwYWNpdHkgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBtYWtlRXJyb3IoXG4gICAgICBgLS1jYXBhY2l0eSBjYW5ub3QgYmUgdXNlZCB3aXRoIC0tc3Bhd249c2Vzc2lvbiAoc2luZ2xlLXNlc3Npb24gbW9kZSBoYXMgZml4ZWQgY2FwYWNpdHkgMSkuYCxcbiAgICApXG4gIH1cblxuICAvLyAtLXNlc3Npb24taWQgLyAtLWNvbnRpbnVlIHJlc3VtZSBhIHNwZWNpZmljIHNlc3Npb24gb24gaXRzIG9yaWdpbmFsXG4gIC8vIGVudmlyb25tZW50OyBpbmNvbXBhdGlibGUgd2l0aCBzcGF3bi1yZWxhdGVkIGZsYWdzICh3aGljaCBjb25maWd1cmVcbiAgLy8gZnJlc2ggc2Vzc2lvbiBjcmVhdGlvbiksIGFuZCBtdXR1YWxseSBleGNsdXNpdmUgd2l0aCBlYWNoIG90aGVyLlxuICBpZiAoXG4gICAgKHNlc3Npb25JZCB8fCBjb250aW51ZVNlc3Npb24pICYmXG4gICAgKHNwYXduTW9kZSAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICBjYXBhY2l0eSAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICBjcmVhdGVTZXNzaW9uSW5EaXIgIT09IHVuZGVmaW5lZClcbiAgKSB7XG4gICAgcmV0dXJuIG1ha2VFcnJvcihcbiAgICAgIGAtLXNlc3Npb24taWQgYW5kIC0tY29udGludWUgY2Fubm90IGJlIHVzZWQgd2l0aCAtLXNwYXduLCAtLWNhcGFjaXR5LCBvciAtLWNyZWF0ZS1zZXNzaW9uLWluLWRpci5gLFxuICAgIClcbiAgfVxuICBpZiAoc2Vzc2lvbklkICYmIGNvbnRpbnVlU2Vzc2lvbikge1xuICAgIHJldHVybiBtYWtlRXJyb3IoYC0tc2Vzc2lvbi1pZCBhbmQgLS1jb250aW51ZSBjYW5ub3QgYmUgdXNlZCB0b2dldGhlci5gKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB2ZXJib3NlLFxuICAgIHNhbmRib3gsXG4gICAgZGVidWdGaWxlLFxuICAgIHNlc3Npb25UaW1lb3V0TXMsXG4gICAgcGVybWlzc2lvbk1vZGUsXG4gICAgbmFtZSxcbiAgICBzcGF3bk1vZGUsXG4gICAgY2FwYWNpdHksXG4gICAgY3JlYXRlU2Vzc2lvbkluRGlyLFxuICAgIHNlc3Npb25JZCxcbiAgICBjb250aW51ZVNlc3Npb24sXG4gICAgaGVscCxcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VFcnJvcihlcnJvcjogc3RyaW5nKTogUGFyc2VkQXJncyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZlcmJvc2UsXG4gICAgICBzYW5kYm94LFxuICAgICAgZGVidWdGaWxlLFxuICAgICAgc2Vzc2lvblRpbWVvdXRNcyxcbiAgICAgIHBlcm1pc3Npb25Nb2RlLFxuICAgICAgbmFtZSxcbiAgICAgIHNwYXduTW9kZSxcbiAgICAgIGNhcGFjaXR5LFxuICAgICAgY3JlYXRlU2Vzc2lvbkluRGlyLFxuICAgICAgc2Vzc2lvbklkLFxuICAgICAgY29udGludWVTZXNzaW9uLFxuICAgICAgaGVscCxcbiAgICAgIGVycm9yLFxuICAgIH1cbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBwcmludEhlbHAoKTogUHJvbWlzZTx2b2lkPiB7XG4gIC8vIFVzZSBFWFRFUk5BTF9QRVJNSVNTSU9OX01PREVTIGZvciBoZWxwIHRleHQgXHUyMDE0IGludGVybmFsIG1vZGVzIChidWJibGUpXG4gIC8vIGFyZSBhbnQtb25seSBhbmQgYXV0byBpcyBmZWF0dXJlLWdhdGVkOyB0aGV5J3JlIHN0aWxsIGFjY2VwdGVkIGJ5IHZhbGlkYXRpb24uXG4gIGNvbnN0IHsgRVhURVJOQUxfUEVSTUlTU0lPTl9NT0RFUyB9ID0gYXdhaXQgaW1wb3J0KCcuLi90eXBlcy9wZXJtaXNzaW9ucy5qcycpXG4gIGNvbnN0IG1vZGVzID0gRVhURVJOQUxfUEVSTUlTU0lPTl9NT0RFUy5qb2luKCcsICcpXG4gIGNvbnN0IHNob3dTZXJ2ZXIgPSBhd2FpdCBpc011bHRpU2Vzc2lvblNwYXduRW5hYmxlZCgpXG4gIGNvbnN0IHNlcnZlck9wdGlvbnMgPSBzaG93U2VydmVyXG4gICAgPyBgICAtLXNwYXduIDxtb2RlPiAgICAgICAgICAgICAgICAgICBTcGF3biBtb2RlOiBzYW1lLWRpciwgd29ya3RyZWUsIHNlc3Npb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRlZmF1bHQ6IHNhbWUtZGlyKVxuICAtLWNhcGFjaXR5IDxOPiAgICAgICAgICAgICAgICAgICBNYXggY29uY3VycmVudCBzZXNzaW9ucyBpbiB3b3JrdHJlZSBvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW1lLWRpciBtb2RlIChkZWZhdWx0OiAke1NQQVdOX1NFU1NJT05TX0RFRkFVTFR9KVxuICAtLVtuby1dY3JlYXRlLXNlc3Npb24taW4tZGlyICAgICBQcmUtY3JlYXRlIGEgc2Vzc2lvbiBpbiB0aGUgY3VycmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rvcnk7IGluIHdvcmt0cmVlIG1vZGUgdGhpcyBzZXNzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXlzIGluIGN3ZCB3aGlsZSBvbi1kZW1hbmQgc2Vzc2lvbnMgZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzb2xhdGVkIHdvcmt0cmVlcyAoZGVmYXVsdDogb24pXG5gXG4gICAgOiAnJ1xuICBjb25zdCBzZXJ2ZXJEZXNjcmlwdGlvbiA9IHNob3dTZXJ2ZXJcbiAgICA/IGBcbiAgUmVtb3RlIENvbnRyb2wgcnVucyBhcyBhIHBlcnNpc3RlbnQgc2VydmVyIHRoYXQgYWNjZXB0cyBtdWx0aXBsZSBjb25jdXJyZW50XG4gIHNlc3Npb25zIGluIHRoZSBjdXJyZW50IGRpcmVjdG9yeS4gT25lIHNlc3Npb24gaXMgcHJlLWNyZWF0ZWQgb24gc3RhcnQgc29cbiAgeW91IGhhdmUgc29tZXdoZXJlIHRvIHR5cGUgaW1tZWRpYXRlbHkuIFVzZSAtLXNwYXduPXdvcmt0cmVlIHRvIGlzb2xhdGVcbiAgZWFjaCBvbi1kZW1hbmQgc2Vzc2lvbiBpbiBpdHMgb3duIGdpdCB3b3JrdHJlZSwgb3IgLS1zcGF3bj1zZXNzaW9uIGZvclxuICB0aGUgY2xhc3NpYyBzaW5nbGUtc2Vzc2lvbiBtb2RlIChleGl0cyB3aGVuIHRoYXQgc2Vzc2lvbiBlbmRzKS4gUHJlc3MgJ3cnXG4gIGR1cmluZyBydW50aW1lIHRvIHRvZ2dsZSBiZXR3ZWVuIHNhbWUtZGlyIGFuZCB3b3JrdHJlZS5cbmBcbiAgICA6ICcnXG4gIGNvbnN0IHNlcnZlck5vdGUgPSBzaG93U2VydmVyXG4gICAgPyBgICAtIFdvcmt0cmVlIG1vZGUgcmVxdWlyZXMgYSBnaXQgcmVwb3NpdG9yeSBvciBXb3JrdHJlZUNyZWF0ZS9Xb3JrdHJlZVJlbW92ZSBob29rc1xuYFxuICAgIDogJydcbiAgY29uc3QgaGVscCA9IGBcblJlbW90ZSBDb250cm9sIC0gQ29ubmVjdCB5b3VyIGxvY2FsIGVudmlyb25tZW50IHRvIGNsYXVkZS5haS9jb2RlXG5cblVTQUdFXG4gIGNsYXVkZSByZW1vdGUtY29udHJvbCBbb3B0aW9uc11cbk9QVElPTlNcbiAgLS1uYW1lIDxuYW1lPiAgICAgICAgICAgICAgICAgICAgTmFtZSBmb3IgdGhlIHNlc3Npb24gKHNob3duIGluIGNsYXVkZS5haS9jb2RlKVxuJHtcbiAgZmVhdHVyZSgnS0FJUk9TJylcbiAgICA/IGAgIC1jLCAtLWNvbnRpbnVlICAgICAgICAgICAgICAgICAgIFJlc3VtZSB0aGUgbGFzdCBzZXNzaW9uIGluIHRoaXMgZGlyZWN0b3J5XG4gIC0tc2Vzc2lvbi1pZCA8aWQ+ICAgICAgICAgICAgICAgIFJlc3VtZSBhIHNwZWNpZmljIHNlc3Npb24gYnkgSUQgKGNhbm5vdCBiZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VkIHdpdGggc3Bhd24gZmxhZ3Mgb3IgLS1jb250aW51ZSlcbmBcbiAgICA6ICcnXG59ICAtLXBlcm1pc3Npb24tbW9kZSA8bW9kZT4gICAgICAgICBQZXJtaXNzaW9uIG1vZGUgZm9yIHNwYXduZWQgc2Vzc2lvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCR7bW9kZXN9KVxuICAtLWRlYnVnLWZpbGUgPHBhdGg+ICAgICAgICAgICAgICBXcml0ZSBkZWJ1ZyBsb2dzIHRvIGZpbGVcbiAgLXYsIC0tdmVyYm9zZSAgICAgICAgICAgICAgICAgICAgRW5hYmxlIHZlcmJvc2Ugb3V0cHV0XG4gIC1oLCAtLWhlbHAgICAgICAgICAgICAgICAgICAgICAgIFNob3cgdGhpcyBoZWxwXG4ke3NlcnZlck9wdGlvbnN9XG5ERVNDUklQVElPTlxuICBSZW1vdGUgQ29udHJvbCBhbGxvd3MgeW91IHRvIGNvbnRyb2wgc2Vzc2lvbnMgb24geW91ciBsb2NhbCBkZXZpY2UgZnJvbVxuICBjbGF1ZGUuYWkvY29kZSAoaHR0cHM6Ly9jbGF1ZGUuYWkvY29kZSkuIFJ1biB0aGlzIGNvbW1hbmQgaW4gdGhlXG4gIGRpcmVjdG9yeSB5b3Ugd2FudCB0byB3b3JrIGluLCB0aGVuIGNvbm5lY3QgZnJvbSB0aGUgQ2xhdWRlIGFwcCBvciB3ZWIuXG4ke3NlcnZlckRlc2NyaXB0aW9ufVxuTk9URVNcbiAgLSBZb3UgbXVzdCBiZSBsb2dnZWQgaW4gd2l0aCBhIENsYXVkZSBhY2NvdW50IHRoYXQgaGFzIGEgc3Vic2NyaXB0aW9uXG4gIC0gUnVuIFxcYGNsYXVkZVxcYCBmaXJzdCBpbiB0aGUgZGlyZWN0b3J5IHRvIGFjY2VwdCB0aGUgd29ya3NwYWNlIHRydXN0IGRpYWxvZ1xuJHtzZXJ2ZXJOb3RlfWBcbiAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6IGludGVudGlvbmFsIGhlbHAgb3V0cHV0XG4gIGNvbnNvbGUubG9nKGhlbHApXG59XG5cbmNvbnN0IFRJVExFX01BWF9MRU4gPSA4MFxuXG4vKiogRGVyaXZlIGEgc2Vzc2lvbiB0aXRsZSBmcm9tIGEgdXNlciBtZXNzYWdlOiBmaXJzdCBsaW5lLCB0cnVuY2F0ZWQuICovXG5mdW5jdGlvbiBkZXJpdmVTZXNzaW9uVGl0bGUodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gQ29sbGFwc2Ugd2hpdGVzcGFjZSBcdTIwMTQgbmV3bGluZXMvdGFicyB3b3VsZCBicmVhayB0aGUgc2luZ2xlLWxpbmUgc3RhdHVzIGRpc3BsYXkuXG4gIGNvbnN0IGZsYXQgPSB0ZXh0LnJlcGxhY2UoL1xccysvZywgJyAnKS50cmltKClcbiAgcmV0dXJuIHRydW5jYXRlVG9XaWR0aChmbGF0LCBUSVRMRV9NQVhfTEVOKVxufVxuXG4vKipcbiAqIE9uZS1zaG90IGZldGNoIG9mIGEgc2Vzc2lvbidzIHRpdGxlIHZpYSBHRVQgL3YxL3Nlc3Npb25zL3tpZH0uXG4gKlxuICogVXNlcyBgZ2V0QnJpZGdlU2Vzc2lvbmAgZnJvbSBjcmVhdGVTZXNzaW9uLnRzIChjY3ItYnlvYyBoZWFkZXJzICsgb3JnIFVVSUQpXG4gKiByYXRoZXIgdGhhbiB0aGUgZW52aXJvbm1lbnRzLWxldmVsIGJyaWRnZUFwaSBjbGllbnQsIHdob3NlIGhlYWRlcnMgbWFrZSB0aGVcbiAqIFNlc3Npb25zIEFQSSByZXR1cm4gNDA0LiBSZXR1cm5zIHVuZGVmaW5lZCBpZiB0aGUgc2Vzc2lvbiBoYXMgbm8gdGl0bGUgeWV0XG4gKiBvciB0aGUgZmV0Y2ggZmFpbHMgXHUyMDE0IHRoZSBjYWxsZXIgZmFsbHMgYmFjayB0byBkZXJpdmluZyBhIHRpdGxlIGZyb20gdGhlXG4gKiBmaXJzdCB1c2VyIG1lc3NhZ2UuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGZldGNoU2Vzc2lvblRpdGxlKFxuICBjb21wYXRTZXNzaW9uSWQ6IHN0cmluZyxcbiAgYmFzZVVybDogc3RyaW5nLFxuKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHtcbiAgY29uc3QgeyBnZXRCcmlkZ2VTZXNzaW9uIH0gPSBhd2FpdCBpbXBvcnQoJy4vY3JlYXRlU2Vzc2lvbi5qcycpXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRCcmlkZ2VTZXNzaW9uKGNvbXBhdFNlc3Npb25JZCwgeyBiYXNlVXJsIH0pXG4gIHJldHVybiBzZXNzaW9uPy50aXRsZSB8fCB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJyaWRnZU1haW4oYXJnczogc3RyaW5nW10pOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgcGFyc2VkID0gcGFyc2VBcmdzKGFyZ3MpXG5cbiAgaWYgKHBhcnNlZC5oZWxwKSB7XG4gICAgYXdhaXQgcHJpbnRIZWxwKClcbiAgICByZXR1cm5cbiAgfVxuICBpZiAocGFyc2VkLmVycm9yKSB7XG4gICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6IGludGVudGlvbmFsIGVycm9yIG91dHB1dFxuICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yOiAke3BhcnNlZC5lcnJvcn1gKVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjdXN0b20tcnVsZXMvbm8tcHJvY2Vzcy1leGl0XG4gICAgcHJvY2Vzcy5leGl0KDEpXG4gIH1cblxuICBjb25zdCB7XG4gICAgdmVyYm9zZSxcbiAgICBzYW5kYm94LFxuICAgIGRlYnVnRmlsZSxcbiAgICBzZXNzaW9uVGltZW91dE1zLFxuICAgIHBlcm1pc3Npb25Nb2RlLFxuICAgIG5hbWUsXG4gICAgc3Bhd25Nb2RlOiBwYXJzZWRTcGF3bk1vZGUsXG4gICAgY2FwYWNpdHk6IHBhcnNlZENhcGFjaXR5LFxuICAgIGNyZWF0ZVNlc3Npb25JbkRpcjogcGFyc2VkQ3JlYXRlU2Vzc2lvbkluRGlyLFxuICAgIHNlc3Npb25JZDogcGFyc2VkU2Vzc2lvbklkLFxuICAgIGNvbnRpbnVlU2Vzc2lvbixcbiAgfSA9IHBhcnNlZFxuICAvLyBNdXRhYmxlIHNvIC0tY29udGludWUgY2FuIHNldCBpdCBmcm9tIHRoZSBwb2ludGVyIGZpbGUuIFRoZSAjMjA0NjBcbiAgLy8gcmVzdW1lIGZsb3cgYmVsb3cgdGhlbiB0cmVhdHMgaXQgdGhlIHNhbWUgYXMgYW4gZXhwbGljaXQgLS1zZXNzaW9uLWlkLlxuICBsZXQgcmVzdW1lU2Vzc2lvbklkID0gcGFyc2VkU2Vzc2lvbklkXG4gIC8vIFdoZW4gLS1jb250aW51ZSBmb3VuZCBhIHBvaW50ZXIsIHRoaXMgaXMgdGhlIGRpcmVjdG9yeSBpdCBjYW1lIGZyb21cbiAgLy8gKG1heSBiZSBhIHdvcmt0cmVlIHNpYmxpbmcsIG5vdCBgZGlyYCkuIE9uIHJlc3VtZS1mbG93IGRldGVybWluaXN0aWNcbiAgLy8gZmFpbHVyZSwgY2xlYXIgVEhJUyBmaWxlIHNvIC0tY29udGludWUgZG9lc24ndCBrZWVwIGhpdHRpbmcgdGhlIHNhbWVcbiAgLy8gZGVhZCBzZXNzaW9uLiBVbmRlZmluZWQgZm9yIGV4cGxpY2l0IC0tc2Vzc2lvbi1pZCAobGVhdmVzIHBvaW50ZXIgYWxvbmUpLlxuICBsZXQgcmVzdW1lUG9pbnRlckRpcjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgY29uc3QgdXNlZE11bHRpU2Vzc2lvbkZlYXR1cmUgPVxuICAgIHBhcnNlZFNwYXduTW9kZSAhPT0gdW5kZWZpbmVkIHx8XG4gICAgcGFyc2VkQ2FwYWNpdHkgIT09IHVuZGVmaW5lZCB8fFxuICAgIHBhcnNlZENyZWF0ZVNlc3Npb25JbkRpciAhPT0gdW5kZWZpbmVkXG5cbiAgLy8gVmFsaWRhdGUgcGVybWlzc2lvbiBtb2RlIGVhcmx5IHNvIHRoZSB1c2VyIGdldHMgYW4gZXJyb3IgYmVmb3JlXG4gIC8vIHRoZSBicmlkZ2Ugc3RhcnRzIHBvbGxpbmcgZm9yIHdvcmsuXG4gIGlmIChwZXJtaXNzaW9uTW9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgeyBQRVJNSVNTSU9OX01PREVTIH0gPSBhd2FpdCBpbXBvcnQoJy4uL3R5cGVzL3Blcm1pc3Npb25zLmpzJylcbiAgICBjb25zdCB2YWxpZDogcmVhZG9ubHkgc3RyaW5nW10gPSBQRVJNSVNTSU9OX01PREVTXG4gICAgaWYgKCF2YWxpZC5pbmNsdWRlcyhwZXJtaXNzaW9uTW9kZSkpIHtcbiAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOiBpbnRlbnRpb25hbCBlcnJvciBvdXRwdXRcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBFcnJvcjogSW52YWxpZCBwZXJtaXNzaW9uIG1vZGUgJyR7cGVybWlzc2lvbk1vZGV9Jy4gVmFsaWQgbW9kZXM6ICR7dmFsaWQuam9pbignLCAnKX1gLFxuICAgICAgKVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGN1c3RvbS1ydWxlcy9uby1wcm9jZXNzLWV4aXRcbiAgICAgIHByb2Nlc3MuZXhpdCgxKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRpciA9IHJlc29sdmUoJy4nKVxuXG4gIC8vIFRoZSBicmlkZ2UgZmFzdC1wYXRoIGJ5cGFzc2VzIGluaXQudHMsIHNvIHdlIG11c3QgZW5hYmxlIGNvbmZpZyByZWFkaW5nXG4gIC8vIGJlZm9yZSBhbnkgY29kZSB0aGF0IHRyYW5zaXRpdmVseSBjYWxscyBnZXRHbG9iYWxDb25maWcoKVxuICBjb25zdCB7IGVuYWJsZUNvbmZpZ3MsIGNoZWNrSGFzVHJ1c3REaWFsb2dBY2NlcHRlZCB9ID0gYXdhaXQgaW1wb3J0KFxuICAgICcuLi91dGlscy9jb25maWcuanMnXG4gIClcbiAgZW5hYmxlQ29uZmlncygpXG5cbiAgLy8gSW5pdGlhbGl6ZSBhbmFseXRpY3MgYW5kIGVycm9yIHJlcG9ydGluZyBzaW5rcy4gVGhlIGJyaWRnZSBieXBhc3NlcyB0aGVcbiAgLy8gc2V0dXAoKSBpbml0IGZsb3csIHNvIHdlIGNhbGwgaW5pdFNpbmtzKCkgZGlyZWN0bHkgdG8gYXR0YWNoIHNpbmtzIGhlcmUuXG4gIGNvbnN0IHsgaW5pdFNpbmtzIH0gPSBhd2FpdCBpbXBvcnQoJy4uL3V0aWxzL3NpbmtzLmpzJylcbiAgaW5pdFNpbmtzKClcblxuICAvLyBHYXRlLWF3YXJlIHZhbGlkYXRpb246IC0tc3Bhd24gLyAtLWNhcGFjaXR5IC8gLS1jcmVhdGUtc2Vzc2lvbi1pbi1kaXIgcmVxdWlyZVxuICAvLyB0aGUgbXVsdGktc2Vzc2lvbiBnYXRlLiBwYXJzZUFyZ3MgaGFzIGFscmVhZHkgdmFsaWRhdGVkIGZsYWcgY29tYmluYXRpb25zO1xuICAvLyBoZXJlIHdlIG9ubHkgY2hlY2sgdGhlIGdhdGUgc2luY2UgdGhhdCByZXF1aXJlcyBhbiBhc3luYyBHcm93dGhCb29rIGNhbGwuXG4gIC8vIFJ1bnMgYWZ0ZXIgZW5hYmxlQ29uZmlncygpIChHcm93dGhCb29rIGNhY2hlIHJlYWRzIGdsb2JhbCBjb25maWcpIGFuZCBhZnRlclxuICAvLyBpbml0U2lua3MoKSBzbyB0aGUgZGVuaWFsIGV2ZW50IGNhbiBiZSBlbnF1ZXVlZC5cbiAgY29uc3QgbXVsdGlTZXNzaW9uRW5hYmxlZCA9IGF3YWl0IGlzTXVsdGlTZXNzaW9uU3Bhd25FbmFibGVkKClcbiAgaWYgKHVzZWRNdWx0aVNlc3Npb25GZWF0dXJlICYmICFtdWx0aVNlc3Npb25FbmFibGVkKSB7XG4gICAgYXdhaXQgbG9nRXZlbnRBc3luYygndGVuZ3VfYnJpZGdlX211bHRpX3Nlc3Npb25fZGVuaWVkJywge1xuICAgICAgdXNlZF9zcGF3bjogcGFyc2VkU3Bhd25Nb2RlICE9PSB1bmRlZmluZWQsXG4gICAgICB1c2VkX2NhcGFjaXR5OiBwYXJzZWRDYXBhY2l0eSAhPT0gdW5kZWZpbmVkLFxuICAgICAgdXNlZF9jcmVhdGVfc2Vzc2lvbl9pbl9kaXI6IHBhcnNlZENyZWF0ZVNlc3Npb25JbkRpciAhPT0gdW5kZWZpbmVkLFxuICAgIH0pXG4gICAgLy8gbG9nRXZlbnRBc3luYyBvbmx5IGVucXVldWVzIFx1MjAxNCBwcm9jZXNzLmV4aXQoKSBkaXNjYXJkcyBidWZmZXJlZCBldmVudHMuXG4gICAgLy8gRmx1c2ggZXhwbGljaXRseSwgY2FwcGVkIGF0IDUwMG1zIHRvIG1hdGNoIGdyYWNlZnVsU2h1dGRvd24udHMuXG4gICAgLy8gKHNsZWVwKCkgZG9lc24ndCB1bnJlZiBpdHMgdGltZXIsIGJ1dCBwcm9jZXNzLmV4aXQoKSBmb2xsb3dzIGltbWVkaWF0ZWx5XG4gICAgLy8gc28gdGhlIHJlZidkIHRpbWVyIGNhbid0IGRlbGF5IHNodXRkb3duLilcbiAgICBhd2FpdCBQcm9taXNlLnJhY2UoW1xuICAgICAgUHJvbWlzZS5hbGwoW3NodXRkb3duMVBFdmVudExvZ2dpbmcoKSwgc2h1dGRvd25EYXRhZG9nKCldKSxcbiAgICAgIHNsZWVwKDUwMCwgdW5kZWZpbmVkLCB7IHVucmVmOiB0cnVlIH0pLFxuICAgIF0pLmNhdGNoKCgpID0+IHt9KVxuICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOiBpbnRlbnRpb25hbCBlcnJvciBvdXRwdXRcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgJ0Vycm9yOiBNdWx0aS1zZXNzaW9uIFJlbW90ZSBDb250cm9sIGlzIG5vdCBlbmFibGVkIGZvciB5b3VyIGFjY291bnQgeWV0LicsXG4gICAgKVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjdXN0b20tcnVsZXMvbm8tcHJvY2Vzcy1leGl0XG4gICAgcHJvY2Vzcy5leGl0KDEpXG4gIH1cblxuICAvLyBTZXQgdGhlIGJvb3RzdHJhcCBDV0Qgc28gdGhhdCB0cnVzdCBjaGVja3MsIHByb2plY3QgY29uZmlnIGxvb2t1cHMsIGFuZFxuICAvLyBnaXQgdXRpbGl0aWVzIChnZXRCcmFuY2gsIGdldFJlbW90ZVVybCkgcmVzb2x2ZSBhZ2FpbnN0IHRoZSBjb3JyZWN0IHBhdGguXG4gIGNvbnN0IHsgc2V0T3JpZ2luYWxDd2QsIHNldEN3ZFN0YXRlIH0gPSBhd2FpdCBpbXBvcnQoJy4uL2Jvb3RzdHJhcC9zdGF0ZS5qcycpXG4gIHNldE9yaWdpbmFsQ3dkKGRpcilcbiAgc2V0Q3dkU3RhdGUoZGlyKVxuXG4gIC8vIFRoZSBicmlkZ2UgYnlwYXNzZXMgbWFpbi50c3ggKHdoaWNoIHJlbmRlcnMgdGhlIGludGVyYWN0aXZlIFRydXN0RGlhbG9nIHZpYSBzaG93U2V0dXBTY3JlZW5zKSxcbiAgLy8gc28gd2UgbXVzdCB2ZXJpZnkgdHJ1c3Qgd2FzIHByZXZpb3VzbHkgZXN0YWJsaXNoZWQgYnkgYSBub3JtYWwgYGNsYXVkZWAgc2Vzc2lvbi5cbiAgaWYgKCFjaGVja0hhc1RydXN0RGlhbG9nQWNjZXB0ZWQoKSkge1xuICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYEVycm9yOiBXb3Jrc3BhY2Ugbm90IHRydXN0ZWQuIFBsZWFzZSBydW4gXFxgY2xhdWRlXFxgIGluICR7ZGlyfSBmaXJzdCB0byByZXZpZXcgYW5kIGFjY2VwdCB0aGUgd29ya3NwYWNlIHRydXN0IGRpYWxvZy5gLFxuICAgIClcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3VzdG9tLXJ1bGVzL25vLXByb2Nlc3MtZXhpdFxuICAgIHByb2Nlc3MuZXhpdCgxKVxuICB9XG5cbiAgLy8gUmVzb2x2ZSBhdXRoXG4gIGNvbnN0IHsgY2xlYXJPQXV0aFRva2VuQ2FjaGUsIGNoZWNrQW5kUmVmcmVzaE9BdXRoVG9rZW5JZk5lZWRlZCB9ID1cbiAgICBhd2FpdCBpbXBvcnQoJy4uL3V0aWxzL2F1dGguanMnKVxuICBjb25zdCB7IGdldEJyaWRnZUFjY2Vzc1Rva2VuLCBnZXRCcmlkZ2VCYXNlVXJsIH0gPSBhd2FpdCBpbXBvcnQoXG4gICAgJy4vYnJpZGdlQ29uZmlnLmpzJ1xuICApXG5cbiAgY29uc3QgYnJpZGdlVG9rZW4gPSBnZXRCcmlkZ2VBY2Nlc3NUb2tlbigpXG4gIGlmICghYnJpZGdlVG9rZW4pIHtcbiAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTo6IGludGVudGlvbmFsIGNvbnNvbGUgb3V0cHV0XG4gICAgY29uc29sZS5lcnJvcihCUklER0VfTE9HSU5fRVJST1IpXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGN1c3RvbS1ydWxlcy9uby1wcm9jZXNzLWV4aXRcbiAgICBwcm9jZXNzLmV4aXQoMSlcbiAgfVxuXG4gIC8vIEZpcnN0LXRpbWUgcmVtb3RlIGRpYWxvZyBcdTIwMTQgZXhwbGFpbiB3aGF0IGJyaWRnZSBkb2VzIGFuZCBnZXQgY29uc2VudFxuICBjb25zdCB7XG4gICAgZ2V0R2xvYmFsQ29uZmlnLFxuICAgIHNhdmVHbG9iYWxDb25maWcsXG4gICAgZ2V0Q3VycmVudFByb2plY3RDb25maWcsXG4gICAgc2F2ZUN1cnJlbnRQcm9qZWN0Q29uZmlnLFxuICB9ID0gYXdhaXQgaW1wb3J0KCcuLi91dGlscy9jb25maWcuanMnKVxuICBpZiAoIWdldEdsb2JhbENvbmZpZygpLnJlbW90ZURpYWxvZ1NlZW4pIHtcbiAgICBjb25zdCByZWFkbGluZSA9IGF3YWl0IGltcG9ydCgncmVhZGxpbmUnKVxuICAgIGNvbnN0IHJsID0gcmVhZGxpbmUuY3JlYXRlSW50ZXJmYWNlKHtcbiAgICAgIGlucHV0OiBwcm9jZXNzLnN0ZGluLFxuICAgICAgb3V0cHV0OiBwcm9jZXNzLnN0ZG91dCxcbiAgICB9KVxuICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgICdcXG5SZW1vdGUgQ29udHJvbCBsZXRzIHlvdSBhY2Nlc3MgdGhpcyBDTEkgc2Vzc2lvbiBmcm9tIHRoZSB3ZWIgKGNsYXVkZS5haS9jb2RlKVxcbm9yIHRoZSBDbGF1ZGUgYXBwLCBzbyB5b3UgY2FuIHBpY2sgdXAgd2hlcmUgeW91IGxlZnQgb2ZmIG9uIGFueSBkZXZpY2UuXFxuXFxuWW91IGNhbiBkaXNjb25uZWN0IHJlbW90ZSBhY2Nlc3MgYW55dGltZSBieSBydW5uaW5nIC9yZW1vdGUtY29udHJvbCBhZ2Fpbi5cXG4nLFxuICAgIClcbiAgICBjb25zdCBhbnN3ZXIgPSBhd2FpdCBuZXcgUHJvbWlzZTxzdHJpbmc+KHJlc29sdmUgPT4ge1xuICAgICAgcmwucXVlc3Rpb24oJ0VuYWJsZSBSZW1vdGUgQ29udHJvbD8gKHkvbikgJywgcmVzb2x2ZSlcbiAgICB9KVxuICAgIHJsLmNsb3NlKClcbiAgICBzYXZlR2xvYmFsQ29uZmlnKGN1cnJlbnQgPT4ge1xuICAgICAgaWYgKGN1cnJlbnQucmVtb3RlRGlhbG9nU2VlbikgcmV0dXJuIGN1cnJlbnRcbiAgICAgIHJldHVybiB7IC4uLmN1cnJlbnQsIHJlbW90ZURpYWxvZ1NlZW46IHRydWUgfVxuICAgIH0pXG4gICAgaWYgKGFuc3dlci50b0xvd2VyQ2FzZSgpICE9PSAneScgJiYgYW5zd2VyLnRvTG93ZXJDYXNlKCkgIT09ICd5ZXMnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3VzdG9tLXJ1bGVzL25vLXByb2Nlc3MtZXhpdFxuICAgICAgcHJvY2Vzcy5leGl0KDApXG4gICAgfVxuICB9XG5cbiAgLy8gLS1jb250aW51ZTogcmVzb2x2ZSB0aGUgbW9zdCByZWNlbnQgc2Vzc2lvbiBmcm9tIHRoZSBjcmFzaC1yZWNvdmVyeVxuICAvLyBwb2ludGVyIGFuZCBjaGFpbiBpbnRvIHRoZSAjMjA0NjAgLS1zZXNzaW9uLWlkIGZsb3cuIFdvcmt0cmVlLWF3YXJlOlxuICAvLyBjaGVja3MgY3VycmVudCBkaXIgZmlyc3QgKGZhc3QgcGF0aCwgemVybyBleGVjKSwgdGhlbiBmYW5zIG91dCB0byBnaXRcbiAgLy8gd29ya3RyZWUgc2libGluZ3MgaWYgdGhhdCBtaXNzZXMgXHUyMDE0IHRoZSBSRVBMIGJyaWRnZSB3cml0ZXMgdG9cbiAgLy8gZ2V0T3JpZ2luYWxDd2QoKSB3aGljaCBFbnRlcldvcmt0cmVlVG9vbC9hY3RpdmVXb3JrdHJlZVNlc3Npb24gY2FuXG4gIC8vIHBvaW50IGF0IGEgd29ya3RyZWUgd2hpbGUgdGhlIHVzZXIncyBzaGVsbCBpcyBhdCB0aGUgcmVwbyByb290LlxuICAvLyBLQUlST1MtZ2F0ZWQgYXQgcGFyc2VBcmdzIFx1MjAxNCBjb250aW51ZVNlc3Npb24gaXMgYWx3YXlzIGZhbHNlIGluIGV4dGVybmFsXG4gIC8vIGJ1aWxkcywgc28gdGhpcyBibG9jayB0cmVlLXNoYWtlcy5cbiAgaWYgKGZlYXR1cmUoJ0tBSVJPUycpICYmIGNvbnRpbnVlU2Vzc2lvbikge1xuICAgIGNvbnN0IHsgcmVhZEJyaWRnZVBvaW50ZXJBY3Jvc3NXb3JrdHJlZXMgfSA9IGF3YWl0IGltcG9ydChcbiAgICAgICcuL2JyaWRnZVBvaW50ZXIuanMnXG4gICAgKVxuICAgIGNvbnN0IGZvdW5kID0gYXdhaXQgcmVhZEJyaWRnZVBvaW50ZXJBY3Jvc3NXb3JrdHJlZXMoZGlyKVxuICAgIGlmICghZm91bmQpIHtcbiAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOiBpbnRlbnRpb25hbCBlcnJvciBvdXRwdXRcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBFcnJvcjogTm8gcmVjZW50IHNlc3Npb24gZm91bmQgaW4gdGhpcyBkaXJlY3Rvcnkgb3IgaXRzIHdvcmt0cmVlcy4gUnVuIFxcYGNsYXVkZSByZW1vdGUtY29udHJvbFxcYCB0byBzdGFydCBhIG5ldyBvbmUuYCxcbiAgICAgIClcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjdXN0b20tcnVsZXMvbm8tcHJvY2Vzcy1leGl0XG4gICAgICBwcm9jZXNzLmV4aXQoMSlcbiAgICB9XG4gICAgY29uc3QgeyBwb2ludGVyLCBkaXI6IHBvaW50ZXJEaXIgfSA9IGZvdW5kXG4gICAgY29uc3QgYWdlTWluID0gTWF0aC5yb3VuZChwb2ludGVyLmFnZU1zIC8gNjBfMDAwKVxuICAgIGNvbnN0IGFnZVN0ciA9IGFnZU1pbiA8IDYwID8gYCR7YWdlTWlufW1gIDogYCR7TWF0aC5yb3VuZChhZ2VNaW4gLyA2MCl9aGBcbiAgICBjb25zdCBmcm9tV3QgPSBwb2ludGVyRGlyICE9PSBkaXIgPyBgIGZyb20gd29ya3RyZWUgJHtwb2ludGVyRGlyfWAgOiAnJ1xuICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOiBpbnRlbnRpb25hbCBpbmZvIG91dHB1dFxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgUmVzdW1pbmcgc2Vzc2lvbiAke3BvaW50ZXIuc2Vzc2lvbklkfSAoJHthZ2VTdHJ9IGFnbykke2Zyb21XdH1cXHUyMDI2YCxcbiAgICApXG4gICAgcmVzdW1lU2Vzc2lvbklkID0gcG9pbnRlci5zZXNzaW9uSWRcbiAgICAvLyBUcmFjayB3aGVyZSB0aGUgcG9pbnRlciBjYW1lIGZyb20gc28gdGhlICMyMDQ2MCBleGl0KDEpIHBhdGhzIGJlbG93XG4gICAgLy8gY2xlYXIgdGhlIFJJR0hUIGZpbGUgb24gZGV0ZXJtaW5pc3RpYyBmYWlsdXJlIFx1MjAxNCBvdGhlcndpc2UgLS1jb250aW51ZVxuICAgIC8vIHdvdWxkIGtlZXAgaGl0dGluZyB0aGUgc2FtZSBkZWFkIHNlc3Npb24uIE1heSBiZSBhIHdvcmt0cmVlIHNpYmxpbmcuXG4gICAgcmVzdW1lUG9pbnRlckRpciA9IHBvaW50ZXJEaXJcbiAgfVxuXG4gIC8vIEluIHByb2R1Y3Rpb24sIGJhc2VVcmwgaXMgdGhlIEFudGhyb3BpYyBBUEkgKGZyb20gT0F1dGggY29uZmlnKS5cbiAgLy8gQ0xBVURFX0JSSURHRV9CQVNFX1VSTCBvdmVycmlkZXMgdGhpcyBmb3IgYW50IGxvY2FsIGRldiBvbmx5LlxuICBjb25zdCBiYXNlVXJsID0gZ2V0QnJpZGdlQmFzZVVybCgpXG5cbiAgLy8gRm9yIG5vbi1sb2NhbGhvc3QgdGFyZ2V0cywgcmVxdWlyZSBIVFRQUyB0byBwcm90ZWN0IGNyZWRlbnRpYWxzLlxuICBpZiAoXG4gICAgYmFzZVVybC5zdGFydHNXaXRoKCdodHRwOi8vJykgJiZcbiAgICAhYmFzZVVybC5pbmNsdWRlcygnbG9jYWxob3N0JykgJiZcbiAgICAhYmFzZVVybC5pbmNsdWRlcygnMTI3LjAuMC4xJylcbiAgKSB7XG4gICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAnRXJyb3I6IFJlbW90ZSBDb250cm9sIGJhc2UgVVJMIHVzZXMgSFRUUC4gT25seSBIVFRQUyBvciBsb2NhbGhvc3QgSFRUUCBpcyBhbGxvd2VkLicsXG4gICAgKVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjdXN0b20tcnVsZXMvbm8tcHJvY2Vzcy1leGl0XG4gICAgcHJvY2Vzcy5leGl0KDEpXG4gIH1cblxuICAvLyBTZXNzaW9uIGluZ3Jlc3MgVVJMIGZvciBXZWJTb2NrZXQgY29ubmVjdGlvbnMuIEluIHByb2R1Y3Rpb24gdGhpcyBpcyB0aGVcbiAgLy8gc2FtZSBhcyBiYXNlVXJsIChFbnZveSByb3V0ZXMgL3YxL3Nlc3Npb25faW5ncmVzcy8qIHRvIHNlc3Npb24taW5ncmVzcykuXG4gIC8vIExvY2FsbHksIHNlc3Npb24taW5ncmVzcyBydW5zIG9uIGEgZGlmZmVyZW50IHBvcnQgKDk0MTMpIHRoYW4gdGhlXG4gIC8vIGNvbnRhaW4tcHJvdmlkZS1hcGkgKDgyMTEpLCBzbyBDTEFVREVfQlJJREdFX1NFU1NJT05fSU5HUkVTU19VUkwgbXVzdCBiZVxuICAvLyBzZXQgZXhwbGljaXRseS4gQW50LW9ubHksIG1hdGNoaW5nIENMQVVERV9CUklER0VfQkFTRV9VUkwuXG4gIGNvbnN0IHNlc3Npb25JbmdyZXNzVXJsID1cbiAgICBwcm9jZXNzLmVudi5VU0VSX1RZUEUgPT09ICdhbnQnICYmXG4gICAgcHJvY2Vzcy5lbnYuQ0xBVURFX0JSSURHRV9TRVNTSU9OX0lOR1JFU1NfVVJMXG4gICAgICA/IHByb2Nlc3MuZW52LkNMQVVERV9CUklER0VfU0VTU0lPTl9JTkdSRVNTX1VSTFxuICAgICAgOiBiYXNlVXJsXG5cbiAgY29uc3QgeyBnZXRCcmFuY2gsIGdldFJlbW90ZVVybCwgZmluZEdpdFJvb3QgfSA9IGF3YWl0IGltcG9ydChcbiAgICAnLi4vdXRpbHMvZ2l0LmpzJ1xuICApXG5cbiAgLy8gUHJlY2hlY2sgd29ya3RyZWUgYXZhaWxhYmlsaXR5IGZvciB0aGUgZmlyc3QtcnVuIGRpYWxvZyBhbmQgdGhlIGB3YFxuICAvLyB0b2dnbGUuIFVuY29uZGl0aW9uYWwgc28gd2Uga25vdyB1cGZyb250IHdoZXRoZXIgd29ya3RyZWUgaXMgYW4gb3B0aW9uLlxuICBjb25zdCB7IGhhc1dvcmt0cmVlQ3JlYXRlSG9vayB9ID0gYXdhaXQgaW1wb3J0KCcuLi91dGlscy9ob29rcy5qcycpXG4gIGNvbnN0IHdvcmt0cmVlQXZhaWxhYmxlID0gaGFzV29ya3RyZWVDcmVhdGVIb29rKCkgfHwgZmluZEdpdFJvb3QoZGlyKSAhPT0gbnVsbFxuXG4gIC8vIExvYWQgc2F2ZWQgcGVyLXByb2plY3Qgc3Bhd24tbW9kZSBwcmVmZXJlbmNlLiBHYXRlZCBieSBtdWx0aVNlc3Npb25FbmFibGVkXG4gIC8vIHNvIGEgR3Jvd3RoQm9vayByb2xsYmFjayBjbGVhbmx5IHJldmVydHMgdXNlcnMgdG8gc2luZ2xlLXNlc3Npb24gXHUyMDE0XG4gIC8vIG90aGVyd2lzZSBhIHNhdmVkIHByZWYgd291bGQgc2lsZW50bHkgcmUtZW5hYmxlIG11bHRpLXNlc3Npb24gYmVoYXZpb3JcbiAgLy8gKHdvcmt0cmVlIGlzb2xhdGlvbiwgMzIgbWF4IHNlc3Npb25zLCB3IHRvZ2dsZSkgZGVzcGl0ZSB0aGUgZ2F0ZSBiZWluZyBvZmYuXG4gIC8vIEFsc28gZ3VhcmQgYWdhaW5zdCBhIHN0YWxlIHdvcmt0cmVlIHByZWYgbGVmdCBvdmVyIGZyb20gd2hlbiB0aGlzIGRpciBXQVNcbiAgLy8gYSBnaXQgcmVwbyAob3IgdGhlIHVzZXIgY29waWVkIGNvbmZpZykgXHUyMDE0IGNsZWFyIGl0IG9uIGRpc2sgc28gdGhlIHdhcm5pbmdcbiAgLy8gZG9lc24ndCByZXBlYXQgb24gZXZlcnkgbGF1bmNoLlxuICBsZXQgc2F2ZWRTcGF3bk1vZGUgPSBtdWx0aVNlc3Npb25FbmFibGVkXG4gICAgPyBnZXRDdXJyZW50UHJvamVjdENvbmZpZygpLnJlbW90ZUNvbnRyb2xTcGF3bk1vZGVcbiAgICA6IHVuZGVmaW5lZFxuICBpZiAoc2F2ZWRTcGF3bk1vZGUgPT09ICd3b3JrdHJlZScgJiYgIXdvcmt0cmVlQXZhaWxhYmxlKSB7XG4gICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6IGludGVudGlvbmFsIHdhcm5pbmcgb3V0cHV0XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgICdXYXJuaW5nOiBTYXZlZCBzcGF3biBtb2RlIGlzIHdvcmt0cmVlIGJ1dCB0aGlzIGRpcmVjdG9yeSBpcyBub3QgYSBnaXQgcmVwb3NpdG9yeS4gRmFsbGluZyBiYWNrIHRvIHNhbWUtZGlyLicsXG4gICAgKVxuICAgIHNhdmVkU3Bhd25Nb2RlID0gdW5kZWZpbmVkXG4gICAgc2F2ZUN1cnJlbnRQcm9qZWN0Q29uZmlnKGN1cnJlbnQgPT4ge1xuICAgICAgaWYgKGN1cnJlbnQucmVtb3RlQ29udHJvbFNwYXduTW9kZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gY3VycmVudFxuICAgICAgcmV0dXJuIHsgLi4uY3VycmVudCwgcmVtb3RlQ29udHJvbFNwYXduTW9kZTogdW5kZWZpbmVkIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gRmlyc3QtcnVuIHNwYXduLW1vZGUgY2hvaWNlOiBhc2sgb25jZSBwZXIgcHJvamVjdCB3aGVuIHRoZSBjaG9pY2UgaXNcbiAgLy8gbWVhbmluZ2Z1bCAoZ2F0ZSBvbiwgYm90aCBtb2RlcyBhdmFpbGFibGUsIG5vIGV4cGxpY2l0IG92ZXJyaWRlLCBub3RcbiAgLy8gcmVzdW1pbmcpLiBTYXZlcyB0byBQcm9qZWN0Q29uZmlnIHNvIHN1YnNlcXVlbnQgcnVucyBza2lwIHRoaXMuXG4gIGlmIChcbiAgICBtdWx0aVNlc3Npb25FbmFibGVkICYmXG4gICAgIXNhdmVkU3Bhd25Nb2RlICYmXG4gICAgd29ya3RyZWVBdmFpbGFibGUgJiZcbiAgICBwYXJzZWRTcGF3bk1vZGUgPT09IHVuZGVmaW5lZCAmJlxuICAgICFyZXN1bWVTZXNzaW9uSWQgJiZcbiAgICBwcm9jZXNzLnN0ZGluLmlzVFRZXG4gICkge1xuICAgIGNvbnN0IHJlYWRsaW5lID0gYXdhaXQgaW1wb3J0KCdyZWFkbGluZScpXG4gICAgY29uc3QgcmwgPSByZWFkbGluZS5jcmVhdGVJbnRlcmZhY2Uoe1xuICAgICAgaW5wdXQ6IHByb2Nlc3Muc3RkaW4sXG4gICAgICBvdXRwdXQ6IHByb2Nlc3Muc3Rkb3V0LFxuICAgIH0pXG4gICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6IGludGVudGlvbmFsIGRpYWxvZyBvdXRwdXRcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGBcXG5DbGF1ZGUgUmVtb3RlIENvbnRyb2wgaXMgbGF1bmNoaW5nIGluIHNwYXduIG1vZGUgd2hpY2ggbGV0cyB5b3UgY3JlYXRlIG5ldyBzZXNzaW9ucyBpbiB0aGlzIHByb2plY3QgZnJvbSBDbGF1ZGUgQ29kZSBvbiBXZWIgb3IgeW91ciBNb2JpbGUgYXBwLiBMZWFybiBtb3JlIGhlcmU6IGh0dHBzOi8vY29kZS5jbGF1ZGUuY29tL2RvY3MvZW4vcmVtb3RlLWNvbnRyb2xcXG5cXG5gICtcbiAgICAgICAgYFNwYXduIG1vZGUgZm9yIHRoaXMgcHJvamVjdDpcXG5gICtcbiAgICAgICAgYCAgWzFdIHNhbWUtZGlyIFxcdTIwMTQgc2Vzc2lvbnMgc2hhcmUgdGhlIGN1cnJlbnQgZGlyZWN0b3J5IChkZWZhdWx0KVxcbmAgK1xuICAgICAgICBgICBbMl0gd29ya3RyZWUgXFx1MjAxNCBlYWNoIHNlc3Npb24gZ2V0cyBhbiBpc29sYXRlZCBnaXQgd29ya3RyZWVcXG5cXG5gICtcbiAgICAgICAgYFRoaXMgY2FuIGJlIGNoYW5nZWQgbGF0ZXIgb3IgZXhwbGljaXRseSBzZXQgd2l0aCAtLXNwYXduPXNhbWUtZGlyIG9yIC0tc3Bhd249d29ya3RyZWUuXFxuYCxcbiAgICApXG4gICAgY29uc3QgYW5zd2VyID0gYXdhaXQgbmV3IFByb21pc2U8c3RyaW5nPihyZXNvbHZlID0+IHtcbiAgICAgIHJsLnF1ZXN0aW9uKCdDaG9vc2UgWzEvMl0gKGRlZmF1bHQ6IDEpOiAnLCByZXNvbHZlKVxuICAgIH0pXG4gICAgcmwuY2xvc2UoKVxuICAgIGNvbnN0IGNob3NlbjogJ3NhbWUtZGlyJyB8ICd3b3JrdHJlZScgPVxuICAgICAgYW5zd2VyLnRyaW0oKSA9PT0gJzInID8gJ3dvcmt0cmVlJyA6ICdzYW1lLWRpcidcbiAgICBzYXZlZFNwYXduTW9kZSA9IGNob3NlblxuICAgIGxvZ0V2ZW50KCd0ZW5ndV9icmlkZ2Vfc3Bhd25fbW9kZV9jaG9zZW4nLCB7XG4gICAgICBzcGF3bl9tb2RlOlxuICAgICAgICBjaG9zZW4gYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICB9KVxuICAgIHNhdmVDdXJyZW50UHJvamVjdENvbmZpZyhjdXJyZW50ID0+IHtcbiAgICAgIGlmIChjdXJyZW50LnJlbW90ZUNvbnRyb2xTcGF3bk1vZGUgPT09IGNob3NlbikgcmV0dXJuIGN1cnJlbnRcbiAgICAgIHJldHVybiB7IC4uLmN1cnJlbnQsIHJlbW90ZUNvbnRyb2xTcGF3bk1vZGU6IGNob3NlbiB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIERldGVybWluZSBlZmZlY3RpdmUgc3Bhd24gbW9kZS5cbiAgLy8gUHJlY2VkZW5jZTogcmVzdW1lID4gZXhwbGljaXQgLS1zcGF3biA+IHNhdmVkIHByb2plY3QgcHJlZiA+IGdhdGUgZGVmYXVsdFxuICAvLyAtIHJlc3VtaW5nIHZpYSAtLWNvbnRpbnVlIC8gLS1zZXNzaW9uLWlkOiBhbHdheXMgc2luZ2xlLXNlc3Npb24gKHJlc3VtZVxuICAvLyAgIHRhcmdldHMgb25lIHNwZWNpZmljIHNlc3Npb24gaW4gaXRzIG9yaWdpbmFsIGRpcmVjdG9yeSlcbiAgLy8gLSBleHBsaWNpdCAtLXNwYXduIGZsYWc6IHVzZSB0aGF0IHZhbHVlIGRpcmVjdGx5IChkb2VzIG5vdCBwZXJzaXN0KVxuICAvLyAtIHNhdmVkIFByb2plY3RDb25maWcucmVtb3RlQ29udHJvbFNwYXduTW9kZTogc2V0IGJ5IGZpcnN0LXJ1biBkaWFsb2cgb3IgYHdgXG4gIC8vIC0gZGVmYXVsdCB3aXRoIGdhdGUgb246IHNhbWUtZGlyIChwZXJzaXN0ZW50IG11bHRpLXNlc3Npb24sIHNoYXJlZCBjd2QpXG4gIC8vIC0gZGVmYXVsdCB3aXRoIGdhdGUgb2ZmOiBzaW5nbGUtc2Vzc2lvbiAodW5jaGFuZ2VkIGxlZ2FjeSBiZWhhdmlvcilcbiAgLy8gVHJhY2sgaG93IHNwYXduIG1vZGUgd2FzIGRldGVybWluZWQsIGZvciByb2xsb3V0IGFuYWx5dGljcy5cbiAgdHlwZSBTcGF3bk1vZGVTb3VyY2UgPSAncmVzdW1lJyB8ICdmbGFnJyB8ICdzYXZlZCcgfCAnZ2F0ZV9kZWZhdWx0J1xuICBsZXQgc3Bhd25Nb2RlU291cmNlOiBTcGF3bk1vZGVTb3VyY2VcbiAgbGV0IHNwYXduTW9kZTogU3Bhd25Nb2RlXG4gIGlmIChyZXN1bWVTZXNzaW9uSWQpIHtcbiAgICBzcGF3bk1vZGUgPSAnc2luZ2xlLXNlc3Npb24nXG4gICAgc3Bhd25Nb2RlU291cmNlID0gJ3Jlc3VtZSdcbiAgfSBlbHNlIGlmIChwYXJzZWRTcGF3bk1vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHNwYXduTW9kZSA9IHBhcnNlZFNwYXduTW9kZVxuICAgIHNwYXduTW9kZVNvdXJjZSA9ICdmbGFnJ1xuICB9IGVsc2UgaWYgKHNhdmVkU3Bhd25Nb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICBzcGF3bk1vZGUgPSBzYXZlZFNwYXduTW9kZVxuICAgIHNwYXduTW9kZVNvdXJjZSA9ICdzYXZlZCdcbiAgfSBlbHNlIHtcbiAgICBzcGF3bk1vZGUgPSBtdWx0aVNlc3Npb25FbmFibGVkID8gJ3NhbWUtZGlyJyA6ICdzaW5nbGUtc2Vzc2lvbidcbiAgICBzcGF3bk1vZGVTb3VyY2UgPSAnZ2F0ZV9kZWZhdWx0J1xuICB9XG4gIGNvbnN0IG1heFNlc3Npb25zID1cbiAgICBzcGF3bk1vZGUgPT09ICdzaW5nbGUtc2Vzc2lvbidcbiAgICAgID8gMVxuICAgICAgOiAocGFyc2VkQ2FwYWNpdHkgPz8gU1BBV05fU0VTU0lPTlNfREVGQVVMVClcbiAgLy8gUHJlLWNyZWF0ZSBhbiBlbXB0eSBzZXNzaW9uIG9uIHN0YXJ0IHNvIHRoZSB1c2VyIGhhcyBzb21ld2hlcmUgdG8gdHlwZVxuICAvLyBpbW1lZGlhdGVseSwgcnVubmluZyBpbiB0aGUgY3VycmVudCBkaXJlY3RvcnkgKGV4ZW1wdGVkIGZyb20gd29ya3RyZWVcbiAgLy8gY3JlYXRpb24gaW4gdGhlIHNwYXduIGxvb3ApLiBPbiBieSBkZWZhdWx0OyAtLW5vLWNyZWF0ZS1zZXNzaW9uLWluLWRpclxuICAvLyBvcHRzIG91dCBmb3IgYSBwdXJlIG9uLWRlbWFuZCBzZXJ2ZXIgd2hlcmUgZXZlcnkgc2Vzc2lvbiBpcyBpc29sYXRlZC5cbiAgLy8gVGhlIGVmZmVjdGl2ZVJlc3VtZVNlc3Npb25JZCBndWFyZCBhdCB0aGUgY3JlYXRpb24gc2l0ZSBoYW5kbGVzIHRoZVxuICAvLyByZXN1bWUgY2FzZSAoc2tpcCBjcmVhdGlvbiB3aGVuIHJlc3VtZSBzdWNjZWVkZWQ7IGZhbGwgdGhyb3VnaCB0b1xuICAvLyBmcmVzaCBjcmVhdGlvbiBvbiBlbnYtbWlzbWF0Y2ggZmFsbGJhY2spLlxuICBjb25zdCBwcmVDcmVhdGVTZXNzaW9uID0gcGFyc2VkQ3JlYXRlU2Vzc2lvbkluRGlyID8/IHRydWVcblxuICAvLyBXaXRob3V0IC0tY29udGludWU6IGEgbGVmdG92ZXIgcG9pbnRlciBtZWFucyB0aGUgcHJldmlvdXMgcnVuIGRpZG4ndFxuICAvLyBzaHV0IGRvd24gY2xlYW5seSAoY3Jhc2gsIGtpbGwgLTksIHRlcm1pbmFsIGNsb3NlZCkuIENsZWFyIGl0IHNvIHRoZVxuICAvLyBzdGFsZSBlbnYgZG9lc24ndCBsaW5nZXIgcGFzdCBpdHMgcmVsZXZhbmNlLiBSdW5zIGluIGFsbCBtb2Rlc1xuICAvLyAoY2xlYXJCcmlkZ2VQb2ludGVyIGlzIGEgbm8tb3Agd2hlbiBubyBmaWxlIGV4aXN0cykgXHUyMDE0IGNvdmVycyB0aGVcbiAgLy8gZ2F0ZS10cmFuc2l0aW9uIGNhc2Ugd2hlcmUgYSB1c2VyIGNyYXNoZWQgaW4gc2luZ2xlLXNlc3Npb24gbW9kZSB0aGVuXG4gIC8vIHN0YXJ0cyBmcmVzaCBpbiB3b3JrdHJlZSBtb2RlLiBPbmx5IHNpbmdsZS1zZXNzaW9uIG1vZGUgd3JpdGVzIG5ld1xuICAvLyBwb2ludGVycy5cbiAgaWYgKCFyZXN1bWVTZXNzaW9uSWQpIHtcbiAgICBjb25zdCB7IGNsZWFyQnJpZGdlUG9pbnRlciB9ID0gYXdhaXQgaW1wb3J0KCcuL2JyaWRnZVBvaW50ZXIuanMnKVxuICAgIGF3YWl0IGNsZWFyQnJpZGdlUG9pbnRlcihkaXIpXG4gIH1cblxuICAvLyBXb3JrdHJlZSBtb2RlIHJlcXVpcmVzIGVpdGhlciBnaXQgb3IgV29ya3RyZWVDcmVhdGUvV29ya3RyZWVSZW1vdmUgaG9va3MuXG4gIC8vIE9ubHkgcmVhY2hhYmxlIHZpYSBleHBsaWNpdCAtLXNwYXduPXdvcmt0cmVlIChkZWZhdWx0IGlzIHNhbWUtZGlyKTtcbiAgLy8gc2F2ZWQgd29ya3RyZWUgcHJlZiB3YXMgYWxyZWFkeSBndWFyZGVkIGFib3ZlLlxuICBpZiAoc3Bhd25Nb2RlID09PSAnd29ya3RyZWUnICYmICF3b3JrdHJlZUF2YWlsYWJsZSkge1xuICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOiBpbnRlbnRpb25hbCBlcnJvciBvdXRwdXRcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYEVycm9yOiBXb3JrdHJlZSBtb2RlIHJlcXVpcmVzIGEgZ2l0IHJlcG9zaXRvcnkgb3IgV29ya3RyZWVDcmVhdGUgaG9va3MgY29uZmlndXJlZC4gVXNlIC0tc3Bhd249c2Vzc2lvbiBmb3Igc2luZ2xlLXNlc3Npb24gbW9kZS5gLFxuICAgIClcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3VzdG9tLXJ1bGVzL25vLXByb2Nlc3MtZXhpdFxuICAgIHByb2Nlc3MuZXhpdCgxKVxuICB9XG5cbiAgY29uc3QgYnJhbmNoID0gYXdhaXQgZ2V0QnJhbmNoKClcbiAgY29uc3QgZ2l0UmVwb1VybCA9IGF3YWl0IGdldFJlbW90ZVVybCgpXG4gIGNvbnN0IG1hY2hpbmVOYW1lID0gaG9zdG5hbWUoKVxuICBjb25zdCBicmlkZ2VJZCA9IHJhbmRvbVVVSUQoKVxuXG4gIGNvbnN0IHsgaGFuZGxlT0F1dGg0MDFFcnJvciB9ID0gYXdhaXQgaW1wb3J0KCcuLi91dGlscy9hdXRoLmpzJylcbiAgY29uc3QgYXBpID0gY3JlYXRlQnJpZGdlQXBpQ2xpZW50KHtcbiAgICBiYXNlVXJsLFxuICAgIGdldEFjY2Vzc1Rva2VuOiBnZXRCcmlkZ2VBY2Nlc3NUb2tlbixcbiAgICBydW5uZXJWZXJzaW9uOiBNQUNSTy5WRVJTSU9OLFxuICAgIG9uRGVidWc6IGxvZ0ZvckRlYnVnZ2luZyxcbiAgICBvbkF1dGg0MDE6IGhhbmRsZU9BdXRoNDAxRXJyb3IsXG4gICAgZ2V0VHJ1c3RlZERldmljZVRva2VuLFxuICB9KVxuXG4gIC8vIFdoZW4gcmVzdW1pbmcgYSBzZXNzaW9uIHZpYSAtLXNlc3Npb24taWQsIGZldGNoIGl0IHRvIGxlYXJuIGl0c1xuICAvLyBlbnZpcm9ubWVudF9pZCBhbmQgcmV1c2UgdGhhdCBmb3IgcmVnaXN0cmF0aW9uIChpZGVtcG90ZW50IG9uIHRoZVxuICAvLyBiYWNrZW5kKS4gTGVmdCB1bmRlZmluZWQgb3RoZXJ3aXNlIFx1MjAxNCB0aGUgYmFja2VuZCByZWplY3RzXG4gIC8vIGNsaWVudC1nZW5lcmF0ZWQgVVVJRHMgYW5kIHdpbGwgYWxsb2NhdGUgYSBmcmVzaCBlbnZpcm9ubWVudC5cbiAgLy8gZmVhdHVyZSgnS0FJUk9TJykgZ2F0ZTogLS1zZXNzaW9uLWlkIGlzIGFudC1vbmx5OyBwYXJzZUFyZ3MgYWxyZWFkeVxuICAvLyByZWplY3RzIHRoZSBmbGFnIHdoZW4gdGhlIGdhdGUgaXMgb2ZmLCBzbyByZXN1bWVTZXNzaW9uSWQgaXMgYWx3YXlzXG4gIC8vIHVuZGVmaW5lZCBoZXJlIGluIGV4dGVybmFsIGJ1aWxkcyBcdTIwMTQgdGhpcyBndWFyZCBpcyBmb3IgdHJlZS1zaGFraW5nLlxuICBsZXQgcmV1c2VFbnZpcm9ubWVudElkOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgaWYgKGZlYXR1cmUoJ0tBSVJPUycpICYmIHJlc3VtZVNlc3Npb25JZCkge1xuICAgIHRyeSB7XG4gICAgICB2YWxpZGF0ZUJyaWRnZUlkKHJlc3VtZVNlc3Npb25JZCwgJ3Nlc3Npb25JZCcpXG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTogaW50ZW50aW9uYWwgZXJyb3Igb3V0cHV0XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgRXJyb3I6IEludmFsaWQgc2Vzc2lvbiBJRCBcIiR7cmVzdW1lU2Vzc2lvbklkfVwiLiBTZXNzaW9uIElEcyBtdXN0IG5vdCBjb250YWluIHVuc2FmZSBjaGFyYWN0ZXJzLmAsXG4gICAgICApXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3VzdG9tLXJ1bGVzL25vLXByb2Nlc3MtZXhpdFxuICAgICAgcHJvY2Vzcy5leGl0KDEpXG4gICAgfVxuICAgIC8vIFByb2FjdGl2ZWx5IHJlZnJlc2ggdGhlIE9BdXRoIHRva2VuIFx1MjAxNCBnZXRCcmlkZ2VTZXNzaW9uIHVzZXMgcmF3IGF4aW9zXG4gICAgLy8gd2l0aG91dCB0aGUgd2l0aE9BdXRoUmV0cnkgNDAxLXJlZnJlc2ggbG9naWMuIEFuIGV4cGlyZWQtYnV0LXByZXNlbnRcbiAgICAvLyB0b2tlbiB3b3VsZCBvdGhlcndpc2UgcHJvZHVjZSBhIG1pc2xlYWRpbmcgXCJub3QgZm91bmRcIiBlcnJvci5cbiAgICBhd2FpdCBjaGVja0FuZFJlZnJlc2hPQXV0aFRva2VuSWZOZWVkZWQoKVxuICAgIGNsZWFyT0F1dGhUb2tlbkNhY2hlKClcbiAgICBjb25zdCB7IGdldEJyaWRnZVNlc3Npb24gfSA9IGF3YWl0IGltcG9ydCgnLi9jcmVhdGVTZXNzaW9uLmpzJylcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0QnJpZGdlU2Vzc2lvbihyZXN1bWVTZXNzaW9uSWQsIHtcbiAgICAgIGJhc2VVcmwsXG4gICAgICBnZXRBY2Nlc3NUb2tlbjogZ2V0QnJpZGdlQWNjZXNzVG9rZW4sXG4gICAgfSlcbiAgICBpZiAoIXNlc3Npb24pIHtcbiAgICAgIC8vIFNlc3Npb24gZ29uZSBvbiBzZXJ2ZXIgXHUyMTkyIHBvaW50ZXIgaXMgc3RhbGUuIENsZWFyIGl0IHNvIHRoZSB1c2VyXG4gICAgICAvLyBpc24ndCByZS1wcm9tcHRlZCBuZXh0IGxhdW5jaC4gKEV4cGxpY2l0IC0tc2Vzc2lvbi1pZCBsZWF2ZXMgdGhlXG4gICAgICAvLyBwb2ludGVyIGFsb25lIFx1MjAxNCBpdCdzIGFuIGluZGVwZW5kZW50IGZpbGUgdGhleSBtYXkgbm90IGV2ZW4gaGF2ZS4pXG4gICAgICAvLyByZXN1bWVQb2ludGVyRGlyIG1heSBiZSBhIHdvcmt0cmVlIHNpYmxpbmcgXHUyMDE0IGNsZWFyIFRIQVQgZmlsZS5cbiAgICAgIGlmIChyZXN1bWVQb2ludGVyRGlyKSB7XG4gICAgICAgIGNvbnN0IHsgY2xlYXJCcmlkZ2VQb2ludGVyIH0gPSBhd2FpdCBpbXBvcnQoJy4vYnJpZGdlUG9pbnRlci5qcycpXG4gICAgICAgIGF3YWl0IGNsZWFyQnJpZGdlUG9pbnRlcihyZXN1bWVQb2ludGVyRGlyKVxuICAgICAgfVxuICAgICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6IGludGVudGlvbmFsIGVycm9yIG91dHB1dFxuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYEVycm9yOiBTZXNzaW9uICR7cmVzdW1lU2Vzc2lvbklkfSBub3QgZm91bmQuIEl0IG1heSBoYXZlIGJlZW4gYXJjaGl2ZWQgb3IgZXhwaXJlZCwgb3IgeW91ciBsb2dpbiBtYXkgaGF2ZSBsYXBzZWQgKHJ1biBcXGBjbGF1ZGUgL2xvZ2luXFxgKS5gLFxuICAgICAgKVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGN1c3RvbS1ydWxlcy9uby1wcm9jZXNzLWV4aXRcbiAgICAgIHByb2Nlc3MuZXhpdCgxKVxuICAgIH1cbiAgICBpZiAoIXNlc3Npb24uZW52aXJvbm1lbnRfaWQpIHtcbiAgICAgIGlmIChyZXN1bWVQb2ludGVyRGlyKSB7XG4gICAgICAgIGNvbnN0IHsgY2xlYXJCcmlkZ2VQb2ludGVyIH0gPSBhd2FpdCBpbXBvcnQoJy4vYnJpZGdlUG9pbnRlci5qcycpXG4gICAgICAgIGF3YWl0IGNsZWFyQnJpZGdlUG9pbnRlcihyZXN1bWVQb2ludGVyRGlyKVxuICAgICAgfVxuICAgICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6IGludGVudGlvbmFsIGVycm9yIG91dHB1dFxuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYEVycm9yOiBTZXNzaW9uICR7cmVzdW1lU2Vzc2lvbklkfSBoYXMgbm8gZW52aXJvbm1lbnRfaWQuIEl0IG1heSBuZXZlciBoYXZlIGJlZW4gYXR0YWNoZWQgdG8gYSBicmlkZ2UuYCxcbiAgICAgIClcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjdXN0b20tcnVsZXMvbm8tcHJvY2Vzcy1leGl0XG4gICAgICBwcm9jZXNzLmV4aXQoMSlcbiAgICB9XG4gICAgcmV1c2VFbnZpcm9ubWVudElkID0gc2Vzc2lvbi5lbnZpcm9ubWVudF9pZFxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbYnJpZGdlOmluaXRdIFJlc3VtaW5nIHNlc3Npb24gJHtyZXN1bWVTZXNzaW9uSWR9IG9uIGVudmlyb25tZW50ICR7cmV1c2VFbnZpcm9ubWVudElkfWAsXG4gICAgKVxuICB9XG5cbiAgY29uc3QgY29uZmlnOiBCcmlkZ2VDb25maWcgPSB7XG4gICAgZGlyLFxuICAgIG1hY2hpbmVOYW1lLFxuICAgIGJyYW5jaCxcbiAgICBnaXRSZXBvVXJsLFxuICAgIG1heFNlc3Npb25zLFxuICAgIHNwYXduTW9kZSxcbiAgICB2ZXJib3NlLFxuICAgIHNhbmRib3gsXG4gICAgYnJpZGdlSWQsXG4gICAgd29ya2VyVHlwZTogJ2NsYXVkZV9jb2RlJyxcbiAgICBlbnZpcm9ubWVudElkOiByYW5kb21VVUlEKCksXG4gICAgcmV1c2VFbnZpcm9ubWVudElkLFxuICAgIGFwaUJhc2VVcmw6IGJhc2VVcmwsXG4gICAgc2Vzc2lvbkluZ3Jlc3NVcmwsXG4gICAgZGVidWdGaWxlLFxuICAgIHNlc3Npb25UaW1lb3V0TXMsXG4gIH1cblxuICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgYFticmlkZ2U6aW5pdF0gYnJpZGdlSWQ9JHticmlkZ2VJZH0ke3JldXNlRW52aXJvbm1lbnRJZCA/IGAgcmV1c2VFbnZpcm9ubWVudElkPSR7cmV1c2VFbnZpcm9ubWVudElkfWAgOiAnJ30gZGlyPSR7ZGlyfSBicmFuY2g9JHticmFuY2h9IGdpdFJlcG9Vcmw9JHtnaXRSZXBvVXJsfSBtYWNoaW5lPSR7bWFjaGluZU5hbWV9YCxcbiAgKVxuICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgYFticmlkZ2U6aW5pdF0gYXBpQmFzZVVybD0ke2Jhc2VVcmx9IHNlc3Npb25JbmdyZXNzVXJsPSR7c2Vzc2lvbkluZ3Jlc3NVcmx9YCxcbiAgKVxuICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgYFticmlkZ2U6aW5pdF0gc2FuZGJveD0ke3NhbmRib3h9JHtkZWJ1Z0ZpbGUgPyBgIGRlYnVnRmlsZT0ke2RlYnVnRmlsZX1gIDogJyd9YCxcbiAgKVxuXG4gIC8vIFJlZ2lzdGVyIHRoZSBicmlkZ2UgZW52aXJvbm1lbnQgYmVmb3JlIGVudGVyaW5nIHRoZSBwb2xsIGxvb3AuXG4gIGxldCBlbnZpcm9ubWVudElkOiBzdHJpbmdcbiAgbGV0IGVudmlyb25tZW50U2VjcmV0OiBzdHJpbmdcbiAgdHJ5IHtcbiAgICBjb25zdCByZWcgPSBhd2FpdCBhcGkucmVnaXN0ZXJCcmlkZ2VFbnZpcm9ubWVudChjb25maWcpXG4gICAgZW52aXJvbm1lbnRJZCA9IHJlZy5lbnZpcm9ubWVudF9pZFxuICAgIGVudmlyb25tZW50U2VjcmV0ID0gcmVnLmVudmlyb25tZW50X3NlY3JldFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBsb2dFdmVudCgndGVuZ3VfYnJpZGdlX3JlZ2lzdHJhdGlvbl9mYWlsZWQnLCB7XG4gICAgICBzdGF0dXM6IGVyciBpbnN0YW5jZW9mIEJyaWRnZUZhdGFsRXJyb3IgPyBlcnIuc3RhdHVzIDogdW5kZWZpbmVkLFxuICAgIH0pXG4gICAgLy8gUmVnaXN0cmF0aW9uIGZhaWx1cmVzIGFyZSBmYXRhbCBcdTIwMTQgcHJpbnQgYSBjbGVhbiBtZXNzYWdlIGluc3RlYWQgb2YgYSBzdGFjayB0cmFjZS5cbiAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTo6IGludGVudGlvbmFsIGNvbnNvbGUgb3V0cHV0XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGVyciBpbnN0YW5jZW9mIEJyaWRnZUZhdGFsRXJyb3IgJiYgZXJyLnN0YXR1cyA9PT0gNDA0XG4gICAgICAgID8gJ1JlbW90ZSBDb250cm9sIGVudmlyb25tZW50cyBhcmUgbm90IGF2YWlsYWJsZSBmb3IgeW91ciBhY2NvdW50LidcbiAgICAgICAgOiBgRXJyb3I6ICR7ZXJyb3JNZXNzYWdlKGVycil9YCxcbiAgICApXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGN1c3RvbS1ydWxlcy9uby1wcm9jZXNzLWV4aXRcbiAgICBwcm9jZXNzLmV4aXQoMSlcbiAgfVxuXG4gIC8vIFRyYWNrcyB3aGV0aGVyIHRoZSAtLXNlc3Npb24taWQgcmVzdW1lIGZsb3cgY29tcGxldGVkIHN1Y2Nlc3NmdWxseS5cbiAgLy8gVXNlZCBiZWxvdyB0byBza2lwIGZyZXNoIHNlc3Npb24gY3JlYXRpb24gYW5kIHNlZWQgaW5pdGlhbFNlc3Npb25JZC5cbiAgLy8gQ2xlYXJlZCBvbiBlbnYgbWlzbWF0Y2ggc28gd2UgZ3JhY2VmdWxseSBmYWxsIGJhY2sgdG8gYSBuZXcgc2Vzc2lvbi5cbiAgbGV0IGVmZmVjdGl2ZVJlc3VtZVNlc3Npb25JZDogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIGlmIChmZWF0dXJlKCdLQUlST1MnKSAmJiByZXN1bWVTZXNzaW9uSWQpIHtcbiAgICBpZiAocmV1c2VFbnZpcm9ubWVudElkICYmIGVudmlyb25tZW50SWQgIT09IHJldXNlRW52aXJvbm1lbnRJZCkge1xuICAgICAgLy8gQmFja2VuZCByZXR1cm5lZCBhIGRpZmZlcmVudCBlbnZpcm9ubWVudF9pZCBcdTIwMTQgdGhlIG9yaWdpbmFsIGVudlxuICAgICAgLy8gZXhwaXJlZCBvciB3YXMgcmVhcGVkLiBSZWNvbm5lY3Qgd29uJ3Qgd29yayBhZ2FpbnN0IHRoZSBuZXcgZW52XG4gICAgICAvLyAoc2Vzc2lvbiBpcyBib3VuZCB0byB0aGUgb2xkIG9uZSkuIExvZyB0byBzZW50cnkgZm9yIHZpc2liaWxpdHlcbiAgICAgIC8vIGFuZCBmYWxsIHRocm91Z2ggdG8gZnJlc2ggc2Vzc2lvbiBjcmVhdGlvbiBvbiB0aGUgbmV3IGVudi5cbiAgICAgIGxvZ0Vycm9yKFxuICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgYEJyaWRnZSByZXN1bWUgZW52IG1pc21hdGNoOiByZXF1ZXN0ZWQgJHtyZXVzZUVudmlyb25tZW50SWR9LCBiYWNrZW5kIHJldHVybmVkICR7ZW52aXJvbm1lbnRJZH0uIEZhbGxpbmcgYmFjayB0byBmcmVzaCBzZXNzaW9uLmAsXG4gICAgICAgICksXG4gICAgICApXG4gICAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTogaW50ZW50aW9uYWwgd2FybmluZyBvdXRwdXRcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYFdhcm5pbmc6IENvdWxkIG5vdCByZXN1bWUgc2Vzc2lvbiAke3Jlc3VtZVNlc3Npb25JZH0gXHUyMDE0IGl0cyBlbnZpcm9ubWVudCBoYXMgZXhwaXJlZC4gQ3JlYXRpbmcgYSBmcmVzaCBzZXNzaW9uIGluc3RlYWQuYCxcbiAgICAgIClcbiAgICAgIC8vIERvbid0IGRlcmVnaXN0ZXIgXHUyMDE0IHdlJ3JlIGdvaW5nIHRvIHVzZSB0aGlzIG5ldyBlbnZpcm9ubWVudC5cbiAgICAgIC8vIGVmZmVjdGl2ZVJlc3VtZVNlc3Npb25JZCBzdGF5cyB1bmRlZmluZWQgXHUyMTkyIGZyZXNoIHNlc3Npb24gcGF0aCBiZWxvdy5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRm9yY2Utc3RvcCBhbnkgc3RhbGUgd29ya2VyIGluc3RhbmNlcyBmb3IgdGhpcyBzZXNzaW9uIGFuZCByZS1xdWV1ZVxuICAgICAgLy8gaXQgc28gb3VyIHBvbGwgbG9vcCBwaWNrcyBpdCB1cC4gTXVzdCBoYXBwZW4gYWZ0ZXIgcmVnaXN0cmF0aW9uIHNvXG4gICAgICAvLyB0aGUgYmFja2VuZCBrbm93cyBhIGxpdmUgd29ya2VyIGV4aXN0cyBmb3IgdGhlIGVudmlyb25tZW50LlxuICAgICAgLy9cbiAgICAgIC8vIFRoZSBwb2ludGVyIHN0b3JlcyBhIHNlc3Npb25fKiBJRCBidXQgL2JyaWRnZS9yZWNvbm5lY3QgbG9va3NcbiAgICAgIC8vIHNlc3Npb25zIHVwIGJ5IHRoZWlyIGluZnJhIHRhZyAoY3NlXyopIHdoZW4gY2NyX3YyX2NvbXBhdF9lbmFibGVkXG4gICAgICAvLyBpcyBvbi4gVHJ5IGJvdGg7IHRoZSBjb252ZXJzaW9uIGlzIGEgbm8tb3AgaWYgYWxyZWFkeSBjc2VfKi5cbiAgICAgIGNvbnN0IGluZnJhUmVzdW1lSWQgPSB0b0luZnJhU2Vzc2lvbklkKHJlc3VtZVNlc3Npb25JZClcbiAgICAgIGNvbnN0IHJlY29ubmVjdENhbmRpZGF0ZXMgPVxuICAgICAgICBpbmZyYVJlc3VtZUlkID09PSByZXN1bWVTZXNzaW9uSWRcbiAgICAgICAgICA/IFtyZXN1bWVTZXNzaW9uSWRdXG4gICAgICAgICAgOiBbcmVzdW1lU2Vzc2lvbklkLCBpbmZyYVJlc3VtZUlkXVxuICAgICAgbGV0IHJlY29ubmVjdGVkID0gZmFsc2VcbiAgICAgIGxldCBsYXN0UmVjb25uZWN0RXJyOiB1bmtub3duXG4gICAgICBmb3IgKGNvbnN0IGNhbmRpZGF0ZUlkIG9mIHJlY29ubmVjdENhbmRpZGF0ZXMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCBhcGkucmVjb25uZWN0U2Vzc2lvbihlbnZpcm9ubWVudElkLCBjYW5kaWRhdGVJZClcbiAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICBgW2JyaWRnZTppbml0XSBTZXNzaW9uICR7Y2FuZGlkYXRlSWR9IHJlLXF1ZXVlZCB2aWEgYnJpZGdlL3JlY29ubmVjdGAsXG4gICAgICAgICAgKVxuICAgICAgICAgIGVmZmVjdGl2ZVJlc3VtZVNlc3Npb25JZCA9IHJlc3VtZVNlc3Npb25JZFxuICAgICAgICAgIHJlY29ubmVjdGVkID0gdHJ1ZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGxhc3RSZWNvbm5lY3RFcnIgPSBlcnJcbiAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICBgW2JyaWRnZTppbml0XSByZWNvbm5lY3RTZXNzaW9uKCR7Y2FuZGlkYXRlSWR9KSBmYWlsZWQ6ICR7ZXJyb3JNZXNzYWdlKGVycil9YCxcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghcmVjb25uZWN0ZWQpIHtcbiAgICAgICAgY29uc3QgZXJyID0gbGFzdFJlY29ubmVjdEVyclxuXG4gICAgICAgIC8vIERvIE5PVCBkZXJlZ2lzdGVyIG9uIHRyYW5zaWVudCByZWNvbm5lY3QgZmFpbHVyZSBcdTIwMTQgYXQgdGhpcyBwb2ludFxuICAgICAgICAvLyBlbnZpcm9ubWVudElkIElTIHRoZSBzZXNzaW9uJ3Mgb3duIGVudmlyb25tZW50LiBEZXJlZ2lzdGVyaW5nXG4gICAgICAgIC8vIHdvdWxkIG1ha2UgcmV0cnkgaW1wb3NzaWJsZS4gVGhlIGJhY2tlbmQncyA0aCBUVEwgY2xlYW5zIHVwLlxuICAgICAgICBjb25zdCBpc0ZhdGFsID0gZXJyIGluc3RhbmNlb2YgQnJpZGdlRmF0YWxFcnJvclxuICAgICAgICAvLyBDbGVhciBwb2ludGVyIG9ubHkgb24gZmF0YWwgcmVjb25uZWN0IGZhaWx1cmUuIFRyYW5zaWVudCBmYWlsdXJlc1xuICAgICAgICAvLyAoXCJ0cnkgcnVubmluZyB0aGUgc2FtZSBjb21tYW5kIGFnYWluXCIpIHNob3VsZCBrZWVwIHRoZSBwb2ludGVyIHNvXG4gICAgICAgIC8vIG5leHQgbGF1bmNoIHJlLXByb21wdHMgXHUyMDE0IHRoYXQgSVMgdGhlIHJldHJ5IG1lY2hhbmlzbS5cbiAgICAgICAgaWYgKHJlc3VtZVBvaW50ZXJEaXIgJiYgaXNGYXRhbCkge1xuICAgICAgICAgIGNvbnN0IHsgY2xlYXJCcmlkZ2VQb2ludGVyIH0gPSBhd2FpdCBpbXBvcnQoJy4vYnJpZGdlUG9pbnRlci5qcycpXG4gICAgICAgICAgYXdhaXQgY2xlYXJCcmlkZ2VQb2ludGVyKHJlc3VtZVBvaW50ZXJEaXIpXG4gICAgICAgIH1cbiAgICAgICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6IGludGVudGlvbmFsIGVycm9yIG91dHB1dFxuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIGlzRmF0YWxcbiAgICAgICAgICAgID8gYEVycm9yOiAke2Vycm9yTWVzc2FnZShlcnIpfWBcbiAgICAgICAgICAgIDogYEVycm9yOiBGYWlsZWQgdG8gcmVjb25uZWN0IHNlc3Npb24gJHtyZXN1bWVTZXNzaW9uSWR9OiAke2Vycm9yTWVzc2FnZShlcnIpfVxcblRoZSBzZXNzaW9uIG1heSBzdGlsbCBiZSByZXN1bWFibGUgXHUyMDE0IHRyeSBydW5uaW5nIHRoZSBzYW1lIGNvbW1hbmQgYWdhaW4uYCxcbiAgICAgICAgKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3VzdG9tLXJ1bGVzL25vLXByb2Nlc3MtZXhpdFxuICAgICAgICBwcm9jZXNzLmV4aXQoMSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgYFticmlkZ2U6aW5pdF0gUmVnaXN0ZXJlZCwgc2VydmVyIGVudmlyb25tZW50SWQ9JHtlbnZpcm9ubWVudElkfWAsXG4gIClcbiAgY29uc3Qgc3RhcnR1cFBvbGxDb25maWcgPSBnZXRQb2xsSW50ZXJ2YWxDb25maWcoKVxuICBsb2dFdmVudCgndGVuZ3VfYnJpZGdlX3N0YXJ0ZWQnLCB7XG4gICAgbWF4X3Nlc3Npb25zOiBjb25maWcubWF4U2Vzc2lvbnMsXG4gICAgaGFzX2RlYnVnX2ZpbGU6ICEhY29uZmlnLmRlYnVnRmlsZSxcbiAgICBzYW5kYm94OiBjb25maWcuc2FuZGJveCxcbiAgICB2ZXJib3NlOiBjb25maWcudmVyYm9zZSxcbiAgICBoZWFydGJlYXRfaW50ZXJ2YWxfbXM6XG4gICAgICBzdGFydHVwUG9sbENvbmZpZy5ub25fZXhjbHVzaXZlX2hlYXJ0YmVhdF9pbnRlcnZhbF9tcyxcbiAgICBzcGF3bl9tb2RlOlxuICAgICAgY29uZmlnLnNwYXduTW9kZSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgIHNwYXduX21vZGVfc291cmNlOlxuICAgICAgc3Bhd25Nb2RlU291cmNlIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgbXVsdGlfc2Vzc2lvbl9nYXRlOiBtdWx0aVNlc3Npb25FbmFibGVkLFxuICAgIHByZV9jcmVhdGVfc2Vzc2lvbjogcHJlQ3JlYXRlU2Vzc2lvbixcbiAgICB3b3JrdHJlZV9hdmFpbGFibGU6IHdvcmt0cmVlQXZhaWxhYmxlLFxuICB9KVxuICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdpbmZvJywgJ2JyaWRnZV9zdGFydGVkJywge1xuICAgIG1heF9zZXNzaW9uczogY29uZmlnLm1heFNlc3Npb25zLFxuICAgIHNhbmRib3g6IGNvbmZpZy5zYW5kYm94LFxuICAgIHNwYXduX21vZGU6IGNvbmZpZy5zcGF3bk1vZGUsXG4gIH0pXG5cbiAgY29uc3Qgc3Bhd25lciA9IGNyZWF0ZVNlc3Npb25TcGF3bmVyKHtcbiAgICBleGVjUGF0aDogcHJvY2Vzcy5leGVjUGF0aCxcbiAgICBzY3JpcHRBcmdzOiBzcGF3blNjcmlwdEFyZ3MoKSxcbiAgICBlbnY6IHByb2Nlc3MuZW52LFxuICAgIHZlcmJvc2UsXG4gICAgc2FuZGJveCxcbiAgICBkZWJ1Z0ZpbGUsXG4gICAgcGVybWlzc2lvbk1vZGUsXG4gICAgb25EZWJ1ZzogbG9nRm9yRGVidWdnaW5nLFxuICAgIG9uQWN0aXZpdHk6IChzZXNzaW9uSWQsIGFjdGl2aXR5KSA9PiB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBbYnJpZGdlOmFjdGl2aXR5XSBzZXNzaW9uSWQ9JHtzZXNzaW9uSWR9ICR7YWN0aXZpdHkudHlwZX0gJHthY3Rpdml0eS5zdW1tYXJ5fWAsXG4gICAgICApXG4gICAgfSxcbiAgICBvblBlcm1pc3Npb25SZXF1ZXN0OiAoc2Vzc2lvbklkLCByZXF1ZXN0LCBfYWNjZXNzVG9rZW4pID0+IHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFticmlkZ2U6cGVybV0gc2Vzc2lvbklkPSR7c2Vzc2lvbklkfSB0b29sPSR7cmVxdWVzdC5yZXF1ZXN0LnRvb2xfbmFtZX0gcmVxdWVzdF9pZD0ke3JlcXVlc3QucmVxdWVzdF9pZH0gKG5vdCBhdXRvLWFwcHJvdmluZylgLFxuICAgICAgKVxuICAgIH0sXG4gIH0pXG5cbiAgY29uc3QgbG9nZ2VyID0gY3JlYXRlQnJpZGdlTG9nZ2VyKHsgdmVyYm9zZSB9KVxuICBjb25zdCB7IHBhcnNlR2l0SHViUmVwb3NpdG9yeSB9ID0gYXdhaXQgaW1wb3J0KCcuLi91dGlscy9kZXRlY3RSZXBvc2l0b3J5LmpzJylcbiAgY29uc3Qgb3duZXJSZXBvID0gZ2l0UmVwb1VybCA/IHBhcnNlR2l0SHViUmVwb3NpdG9yeShnaXRSZXBvVXJsKSA6IG51bGxcbiAgLy8gVXNlIHRoZSByZXBvIG5hbWUgZnJvbSB0aGUgcGFyc2VkIG93bmVyL3JlcG8sIG9yIGZhbGwgYmFjayB0byB0aGUgZGlyIGJhc2VuYW1lXG4gIGNvbnN0IHJlcG9OYW1lID0gb3duZXJSZXBvID8gb3duZXJSZXBvLnNwbGl0KCcvJykucG9wKCkhIDogYmFzZW5hbWUoZGlyKVxuICBsb2dnZXIuc2V0UmVwb0luZm8ocmVwb05hbWUsIGJyYW5jaClcblxuICAvLyBgd2AgdG9nZ2xlIGlzIGF2YWlsYWJsZSBpZmYgd2UncmUgaW4gYSBtdWx0aS1zZXNzaW9uIG1vZGUgQU5EIHdvcmt0cmVlXG4gIC8vIGlzIGEgdmFsaWQgb3B0aW9uLiBXaGVuIHVuYXZhaWxhYmxlLCB0aGUgbW9kZSBzdWZmaXggYW5kIGhpbnQgYXJlIGhpZGRlbi5cbiAgY29uc3QgdG9nZ2xlQXZhaWxhYmxlID0gc3Bhd25Nb2RlICE9PSAnc2luZ2xlLXNlc3Npb24nICYmIHdvcmt0cmVlQXZhaWxhYmxlXG4gIGlmICh0b2dnbGVBdmFpbGFibGUpIHtcbiAgICAvLyBTYWZlIGNhc3Q6IHNwYXduTW9kZSBpcyBub3Qgc2luZ2xlLXNlc3Npb24gKGNoZWNrZWQgYWJvdmUpLCBhbmQgdGhlXG4gICAgLy8gc2F2ZWQtd29ya3RyZWUtaW4tbm9uLWdpdCBndWFyZCArIGV4aXQgY2hlY2sgYWJvdmUgZW5zdXJlIHdvcmt0cmVlXG4gICAgLy8gaXMgb25seSByZWFjaGVkIHdoZW4gYXZhaWxhYmxlLlxuICAgIGxvZ2dlci5zZXRTcGF3bk1vZGVEaXNwbGF5KHNwYXduTW9kZSBhcyAnc2FtZS1kaXInIHwgJ3dvcmt0cmVlJylcbiAgfVxuXG4gIC8vIExpc3RlbiBmb3Iga2V5czogc3BhY2UgdG9nZ2xlcyBRUiBjb2RlLCB3IHRvZ2dsZXMgc3Bhd24gbW9kZVxuICBjb25zdCBvblN0ZGluRGF0YSA9IChkYXRhOiBCdWZmZXIpOiB2b2lkID0+IHtcbiAgICBpZiAoZGF0YVswXSA9PT0gMHgwMyB8fCBkYXRhWzBdID09PSAweDA0KSB7XG4gICAgICAvLyBDdHJsK0MgLyBDdHJsK0QgXHUyMDE0IHRyaWdnZXIgZ3JhY2VmdWwgc2h1dGRvd25cbiAgICAgIHByb2Nlc3MuZW1pdCgnU0lHSU5UJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoZGF0YVswXSA9PT0gMHgyMCAvKiBzcGFjZSAqLykge1xuICAgICAgbG9nZ2VyLnRvZ2dsZVFyKClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoZGF0YVswXSA9PT0gMHg3NyAvKiAndycgKi8pIHtcbiAgICAgIGlmICghdG9nZ2xlQXZhaWxhYmxlKSByZXR1cm5cbiAgICAgIGNvbnN0IG5ld01vZGU6ICdzYW1lLWRpcicgfCAnd29ya3RyZWUnID1cbiAgICAgICAgY29uZmlnLnNwYXduTW9kZSA9PT0gJ3NhbWUtZGlyJyA/ICd3b3JrdHJlZScgOiAnc2FtZS1kaXInXG4gICAgICBjb25maWcuc3Bhd25Nb2RlID0gbmV3TW9kZVxuICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2JyaWRnZV9zcGF3bl9tb2RlX3RvZ2dsZWQnLCB7XG4gICAgICAgIHNwYXduX21vZGU6XG4gICAgICAgICAgbmV3TW9kZSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgfSlcbiAgICAgIGxvZ2dlci5sb2dTdGF0dXMoXG4gICAgICAgIG5ld01vZGUgPT09ICd3b3JrdHJlZSdcbiAgICAgICAgICA/ICdTcGF3biBtb2RlOiB3b3JrdHJlZSAobmV3IHNlc3Npb25zIGdldCBpc29sYXRlZCBnaXQgd29ya3RyZWVzKSdcbiAgICAgICAgICA6ICdTcGF3biBtb2RlOiBzYW1lLWRpciAobmV3IHNlc3Npb25zIHNoYXJlIHRoZSBjdXJyZW50IGRpcmVjdG9yeSknLFxuICAgICAgKVxuICAgICAgbG9nZ2VyLnNldFNwYXduTW9kZURpc3BsYXkobmV3TW9kZSlcbiAgICAgIGxvZ2dlci5yZWZyZXNoRGlzcGxheSgpXG4gICAgICBzYXZlQ3VycmVudFByb2plY3RDb25maWcoY3VycmVudCA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50LnJlbW90ZUNvbnRyb2xTcGF3bk1vZGUgPT09IG5ld01vZGUpIHJldHVybiBjdXJyZW50XG4gICAgICAgIHJldHVybiB7IC4uLmN1cnJlbnQsIHJlbW90ZUNvbnRyb2xTcGF3bk1vZGU6IG5ld01vZGUgfVxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuICBpZiAocHJvY2Vzcy5zdGRpbi5pc1RUWSkge1xuICAgIHByb2Nlc3Muc3RkaW4uc2V0UmF3TW9kZSh0cnVlKVxuICAgIHByb2Nlc3Muc3RkaW4ucmVzdW1lKClcbiAgICBwcm9jZXNzLnN0ZGluLm9uKCdkYXRhJywgb25TdGRpbkRhdGEpXG4gIH1cblxuICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG4gIGNvbnN0IG9uU2lnaW50ID0gKCk6IHZvaWQgPT4ge1xuICAgIGxvZ0ZvckRlYnVnZ2luZygnW2JyaWRnZTpzaHV0ZG93bl0gU0lHSU5UIHJlY2VpdmVkLCBzaHV0dGluZyBkb3duJylcbiAgICBjb250cm9sbGVyLmFib3J0KClcbiAgfVxuICBjb25zdCBvblNpZ3Rlcm0gPSAoKTogdm9pZCA9PiB7XG4gICAgbG9nRm9yRGVidWdnaW5nKCdbYnJpZGdlOnNodXRkb3duXSBTSUdURVJNIHJlY2VpdmVkLCBzaHV0dGluZyBkb3duJylcbiAgICBjb250cm9sbGVyLmFib3J0KClcbiAgfVxuICBwcm9jZXNzLm9uKCdTSUdJTlQnLCBvblNpZ2ludClcbiAgcHJvY2Vzcy5vbignU0lHVEVSTScsIG9uU2lndGVybSlcblxuICAvLyBBdXRvLWNyZWF0ZSBhbiBlbXB0eSBzZXNzaW9uIHNvIHRoZSB1c2VyIGhhcyBzb21ld2hlcmUgdG8gdHlwZVxuICAvLyBpbW1lZGlhdGVseSAobWF0Y2hpbmcgL3JlbW90ZS1jb250cm9sIGJlaGF2aW9yKS4gQ29udHJvbGxlZCBieVxuICAvLyBwcmVDcmVhdGVTZXNzaW9uOiBvbiBieSBkZWZhdWx0OyAtLW5vLWNyZWF0ZS1zZXNzaW9uLWluLWRpciBvcHRzIG91dC5cbiAgLy8gV2hlbiBhIC0tc2Vzc2lvbi1pZCByZXN1bWUgc3VjY2VlZGVkLCBza2lwIGNyZWF0aW9uIGVudGlyZWx5IFx1MjAxNCB0aGVcbiAgLy8gc2Vzc2lvbiBhbHJlYWR5IGV4aXN0cyBhbmQgYnJpZGdlL3JlY29ubmVjdCBoYXMgcmUtcXVldWVkIGl0LlxuICAvLyBXaGVuIHJlc3VtZSB3YXMgcmVxdWVzdGVkIGJ1dCBmYWlsZWQgb24gZW52IG1pc21hdGNoLCBlZmZlY3RpdmVSZXN1bWVTZXNzaW9uSWRcbiAgLy8gaXMgdW5kZWZpbmVkLCBzbyB3ZSBmYWxsIHRocm91Z2ggdG8gZnJlc2ggc2Vzc2lvbiBjcmVhdGlvbiAoaG9ub3JpbmcgdGhlXG4gIC8vIFwiQ3JlYXRpbmcgYSBmcmVzaCBzZXNzaW9uIGluc3RlYWRcIiB3YXJuaW5nIHByaW50ZWQgYWJvdmUpLlxuICBsZXQgaW5pdGlhbFNlc3Npb25JZDogc3RyaW5nIHwgbnVsbCA9XG4gICAgZmVhdHVyZSgnS0FJUk9TJykgJiYgZWZmZWN0aXZlUmVzdW1lU2Vzc2lvbklkXG4gICAgICA/IGVmZmVjdGl2ZVJlc3VtZVNlc3Npb25JZFxuICAgICAgOiBudWxsXG4gIGlmIChwcmVDcmVhdGVTZXNzaW9uICYmICEoZmVhdHVyZSgnS0FJUk9TJykgJiYgZWZmZWN0aXZlUmVzdW1lU2Vzc2lvbklkKSkge1xuICAgIGNvbnN0IHsgY3JlYXRlQnJpZGdlU2Vzc2lvbiB9ID0gYXdhaXQgaW1wb3J0KCcuL2NyZWF0ZVNlc3Npb24uanMnKVxuICAgIHRyeSB7XG4gICAgICBpbml0aWFsU2Vzc2lvbklkID0gYXdhaXQgY3JlYXRlQnJpZGdlU2Vzc2lvbih7XG4gICAgICAgIGVudmlyb25tZW50SWQsXG4gICAgICAgIHRpdGxlOiBuYW1lLFxuICAgICAgICBldmVudHM6IFtdLFxuICAgICAgICBnaXRSZXBvVXJsLFxuICAgICAgICBicmFuY2gsXG4gICAgICAgIHNpZ25hbDogY29udHJvbGxlci5zaWduYWwsXG4gICAgICAgIGJhc2VVcmwsXG4gICAgICAgIGdldEFjY2Vzc1Rva2VuOiBnZXRCcmlkZ2VBY2Nlc3NUb2tlbixcbiAgICAgICAgcGVybWlzc2lvbk1vZGUsXG4gICAgICB9KVxuICAgICAgaWYgKGluaXRpYWxTZXNzaW9uSWQpIHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgIGBbYnJpZGdlOmluaXRdIENyZWF0ZWQgaW5pdGlhbCBzZXNzaW9uICR7aW5pdGlhbFNlc3Npb25JZH1gLFxuICAgICAgICApXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBbYnJpZGdlOmluaXRdIFNlc3Npb24gY3JlYXRpb24gZmFpbGVkIChub24tZmF0YWwpOiAke2Vycm9yTWVzc2FnZShlcnIpfWAsXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgLy8gQ3Jhc2gtcmVjb3ZlcnkgcG9pbnRlcjogd3JpdGUgaW1tZWRpYXRlbHkgc28ga2lsbCAtOSBhdCBhbnkgcG9pbnRcbiAgLy8gYWZ0ZXIgdGhpcyBsZWF2ZXMgYSByZWNvdmVyYWJsZSB0cmFpbC4gQ292ZXJzIGJvdGggZnJlc2ggc2Vzc2lvbnMgYW5kXG4gIC8vIHJlc3VtZWQgb25lcyAoc28gYSBzZWNvbmQgY3Jhc2ggYWZ0ZXIgcmVzdW1lIGlzIHN0aWxsIHJlY292ZXJhYmxlKS5cbiAgLy8gQ2xlYXJlZCB3aGVuIHJ1bkJyaWRnZUxvb3AgZmFsbHMgdGhyb3VnaCB0byBhcmNoaXZlK2RlcmVnaXN0ZXI7IGxlZnQgaW5cbiAgLy8gcGxhY2Ugb24gdGhlIFNJR0lOVCByZXN1bWFibGUtc2h1dGRvd24gcmV0dXJuIChiYWNrdXAgZm9yIHdoZW4gdGhlIHVzZXJcbiAgLy8gY2xvc2VzIHRoZSB0ZXJtaW5hbCBiZWZvcmUgY29weWluZyB0aGUgcHJpbnRlZCAtLXNlc3Npb24taWQgaGludCkuXG4gIC8vIFJlZnJlc2hlZCBob3VybHkgc28gYSA1aCsgc2Vzc2lvbiB0aGF0IGNyYXNoZXMgc3RpbGwgaGFzIGEgZnJlc2hcbiAgLy8gcG9pbnRlciAoc3RhbGVuZXNzIGNoZWNrcyBmaWxlIG10aW1lLCBiYWNrZW5kIFRUTCBpcyByb2xsaW5nLWZyb20tcG9sbCkuXG4gIGxldCBwb2ludGVyUmVmcmVzaFRpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRJbnRlcnZhbD4gfCBudWxsID0gbnVsbFxuICAvLyBTaW5nbGUtc2Vzc2lvbiBvbmx5OiAtLWNvbnRpbnVlIGZvcmNlcyBzaW5nbGUtc2Vzc2lvbiBtb2RlIG9uIHJlc3VtZSxcbiAgLy8gc28gYSBwb2ludGVyIHdyaXR0ZW4gaW4gbXVsdGktc2Vzc2lvbiBtb2RlIHdvdWxkIGNvbnRyYWRpY3QgdGhlIHVzZXInc1xuICAvLyBjb25maWcgd2hlbiB0aGV5IHRyeSB0byByZXN1bWUuIFRoZSByZXN1bWFibGUtc2h1dGRvd24gcGF0aCBpcyBhbHNvXG4gIC8vIGdhdGVkIHRvIHNpbmdsZS1zZXNzaW9uIChsaW5lIH4xMjU0KSBzbyB0aGUgcG9pbnRlciB3b3VsZCBiZSBvcnBoYW5lZC5cbiAgaWYgKGluaXRpYWxTZXNzaW9uSWQgJiYgc3Bhd25Nb2RlID09PSAnc2luZ2xlLXNlc3Npb24nKSB7XG4gICAgY29uc3QgeyB3cml0ZUJyaWRnZVBvaW50ZXIgfSA9IGF3YWl0IGltcG9ydCgnLi9icmlkZ2VQb2ludGVyLmpzJylcbiAgICBjb25zdCBwb2ludGVyUGF5bG9hZCA9IHtcbiAgICAgIHNlc3Npb25JZDogaW5pdGlhbFNlc3Npb25JZCxcbiAgICAgIGVudmlyb25tZW50SWQsXG4gICAgICBzb3VyY2U6ICdzdGFuZGFsb25lJyBhcyBjb25zdCxcbiAgICB9XG4gICAgYXdhaXQgd3JpdGVCcmlkZ2VQb2ludGVyKGNvbmZpZy5kaXIsIHBvaW50ZXJQYXlsb2FkKVxuICAgIHBvaW50ZXJSZWZyZXNoVGltZXIgPSBzZXRJbnRlcnZhbChcbiAgICAgIHdyaXRlQnJpZGdlUG9pbnRlcixcbiAgICAgIDYwICogNjAgKiAxMDAwLFxuICAgICAgY29uZmlnLmRpcixcbiAgICAgIHBvaW50ZXJQYXlsb2FkLFxuICAgIClcbiAgICAvLyBEb24ndCBsZXQgdGhlIGludGVydmFsIGtlZXAgdGhlIHByb2Nlc3MgYWxpdmUgb24gaXRzIG93bi5cbiAgICBwb2ludGVyUmVmcmVzaFRpbWVyLnVucmVmPy4oKVxuICB9XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBydW5CcmlkZ2VMb29wKFxuICAgICAgY29uZmlnLFxuICAgICAgZW52aXJvbm1lbnRJZCxcbiAgICAgIGVudmlyb25tZW50U2VjcmV0LFxuICAgICAgYXBpLFxuICAgICAgc3Bhd25lcixcbiAgICAgIGxvZ2dlcixcbiAgICAgIGNvbnRyb2xsZXIuc2lnbmFsLFxuICAgICAgdW5kZWZpbmVkLFxuICAgICAgaW5pdGlhbFNlc3Npb25JZCA/PyB1bmRlZmluZWQsXG4gICAgICBhc3luYyAoKSA9PiB7XG4gICAgICAgIC8vIENsZWFyIHRoZSBtZW1vaXplZCBPQXV0aCB0b2tlbiBjYWNoZSBzbyB3ZSByZS1yZWFkIGZyb20gc2VjdXJlXG4gICAgICAgIC8vIHN0b3JhZ2UsIHBpY2tpbmcgdXAgdG9rZW5zIHJlZnJlc2hlZCBieSBjaGlsZCBwcm9jZXNzZXMuXG4gICAgICAgIGNsZWFyT0F1dGhUb2tlbkNhY2hlKClcbiAgICAgICAgLy8gUHJvYWN0aXZlbHkgcmVmcmVzaCB0aGUgdG9rZW4gaWYgaXQncyBleHBpcmVkIG9uIGRpc2sgdG9vLlxuICAgICAgICBhd2FpdCBjaGVja0FuZFJlZnJlc2hPQXV0aFRva2VuSWZOZWVkZWQoKVxuICAgICAgICByZXR1cm4gZ2V0QnJpZGdlQWNjZXNzVG9rZW4oKVxuICAgICAgfSxcbiAgICApXG4gIH0gZmluYWxseSB7XG4gICAgaWYgKHBvaW50ZXJSZWZyZXNoVGltZXIgIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwocG9pbnRlclJlZnJlc2hUaW1lcilcbiAgICB9XG4gICAgcHJvY2Vzcy5vZmYoJ1NJR0lOVCcsIG9uU2lnaW50KVxuICAgIHByb2Nlc3Mub2ZmKCdTSUdURVJNJywgb25TaWd0ZXJtKVxuICAgIHByb2Nlc3Muc3RkaW4ub2ZmKCdkYXRhJywgb25TdGRpbkRhdGEpXG4gICAgaWYgKHByb2Nlc3Muc3RkaW4uaXNUVFkpIHtcbiAgICAgIHByb2Nlc3Muc3RkaW4uc2V0UmF3TW9kZShmYWxzZSlcbiAgICB9XG4gICAgcHJvY2Vzcy5zdGRpbi5wYXVzZSgpXG4gIH1cblxuICAvLyBUaGUgYnJpZGdlIGJ5cGFzc2VzIGluaXQudHMgKGFuZCBpdHMgZ3JhY2VmdWwgc2h1dGRvd24gaGFuZGxlciksIHNvIHdlXG4gIC8vIG11c3QgZXhpdCBleHBsaWNpdGx5LlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3VzdG9tLXJ1bGVzL25vLXByb2Nlc3MtZXhpdFxuICBwcm9jZXNzLmV4aXQoMClcbn1cblxuLy8gXHUyNTAwXHUyNTAwXHUyNTAwIEhlYWRsZXNzIGJyaWRnZSAoZGFlbW9uIHdvcmtlcikgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cbi8qKlxuICogVGhyb3duIGJ5IHJ1bkJyaWRnZUhlYWRsZXNzIGZvciBjb25maWd1cmF0aW9uIGlzc3VlcyB0aGUgc3VwZXJ2aXNvciBzaG91bGRcbiAqIE5PVCByZXRyeSAodHJ1c3Qgbm90IGFjY2VwdGVkLCB3b3JrdHJlZSB1bmF2YWlsYWJsZSwgaHR0cC1ub3QtaHR0cHMpLiBUaGVcbiAqIGRhZW1vbiB3b3JrZXIgY2F0Y2hlcyB0aGlzIGFuZCBleGl0cyB3aXRoIEVYSVRfQ09ERV9QRVJNQU5FTlQgc28gdGhlXG4gKiBzdXBlcnZpc29yIHBhcmtzIHRoZSB3b3JrZXIgaW5zdGVhZCBvZiByZXNwYXduaW5nIGl0IG9uIGJhY2tvZmYuXG4gKi9cbmV4cG9ydCBjbGFzcyBCcmlkZ2VIZWFkbGVzc1Blcm1hbmVudEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihtZXNzYWdlKVxuICAgIHRoaXMubmFtZSA9ICdCcmlkZ2VIZWFkbGVzc1Blcm1hbmVudEVycm9yJ1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRsZXNzQnJpZGdlT3B0cyA9IHtcbiAgZGlyOiBzdHJpbmdcbiAgbmFtZT86IHN0cmluZ1xuICBzcGF3bk1vZGU6ICdzYW1lLWRpcicgfCAnd29ya3RyZWUnXG4gIGNhcGFjaXR5OiBudW1iZXJcbiAgcGVybWlzc2lvbk1vZGU/OiBzdHJpbmdcbiAgc2FuZGJveDogYm9vbGVhblxuICBzZXNzaW9uVGltZW91dE1zPzogbnVtYmVyXG4gIGNyZWF0ZVNlc3Npb25PblN0YXJ0OiBib29sZWFuXG4gIGdldEFjY2Vzc1Rva2VuOiAoKSA9PiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgb25BdXRoNDAxOiAoZmFpbGVkVG9rZW46IHN0cmluZykgPT4gUHJvbWlzZTxib29sZWFuPlxuICBsb2c6IChzOiBzdHJpbmcpID0+IHZvaWRcbn1cblxuLyoqXG4gKiBOb24taW50ZXJhY3RpdmUgYnJpZGdlIGVudHJ5cG9pbnQgZm9yIHRoZSBgcmVtb3RlQ29udHJvbGAgZGFlbW9uIHdvcmtlci5cbiAqXG4gKiBMaW5lYXIgc3Vic2V0IG9mIGJyaWRnZU1haW4oKTogbm8gcmVhZGxpbmUgZGlhbG9ncywgbm8gc3RkaW4ga2V5IGhhbmRsZXJzLFxuICogbm8gVFVJLCBubyBwcm9jZXNzLmV4aXQoKS4gQ29uZmlnIGNvbWVzIGZyb20gdGhlIGNhbGxlciAoZGFlbW9uLmpzb24pLCBhdXRoXG4gKiBjb21lcyB2aWEgSVBDIChzdXBlcnZpc29yJ3MgQXV0aE1hbmFnZXIpLCBsb2dzIGdvIHRvIHRoZSB3b3JrZXIncyBzdGRvdXRcbiAqIHBpcGUuIFRocm93cyBvbiBmYXRhbCBlcnJvcnMgXHUyMDE0IHRoZSB3b3JrZXIgY2F0Y2hlcyBhbmQgbWFwcyBwZXJtYW5lbnQgdnNcbiAqIHRyYW5zaWVudCB0byB0aGUgcmlnaHQgZXhpdCBjb2RlLlxuICpcbiAqIFJlc29sdmVzIGNsZWFubHkgd2hlbiBgc2lnbmFsYCBhYm9ydHMgYW5kIHRoZSBwb2xsIGxvb3AgdGVhcnMgZG93bi5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJ1bkJyaWRnZUhlYWRsZXNzKFxuICBvcHRzOiBIZWFkbGVzc0JyaWRnZU9wdHMsXG4gIHNpZ25hbDogQWJvcnRTaWduYWwsXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgeyBkaXIsIGxvZyB9ID0gb3B0c1xuXG4gIC8vIFdvcmtlciBpbmhlcml0cyB0aGUgc3VwZXJ2aXNvcidzIENXRC4gY2hkaXIgZmlyc3Qgc28gZ2l0IHV0aWxpdGllc1xuICAvLyAoZ2V0QnJhbmNoL2dldFJlbW90ZVVybCkgXHUyMDE0IHdoaWNoIHJlYWQgZnJvbSBib290c3RyYXAgQ1dEIHN0YXRlIHNldFxuICAvLyBiZWxvdyBcdTIwMTQgcmVzb2x2ZSBhZ2FpbnN0IHRoZSByaWdodCByZXBvLlxuICBwcm9jZXNzLmNoZGlyKGRpcilcbiAgY29uc3QgeyBzZXRPcmlnaW5hbEN3ZCwgc2V0Q3dkU3RhdGUgfSA9IGF3YWl0IGltcG9ydCgnLi4vYm9vdHN0cmFwL3N0YXRlLmpzJylcbiAgc2V0T3JpZ2luYWxDd2QoZGlyKVxuICBzZXRDd2RTdGF0ZShkaXIpXG5cbiAgY29uc3QgeyBlbmFibGVDb25maWdzLCBjaGVja0hhc1RydXN0RGlhbG9nQWNjZXB0ZWQgfSA9IGF3YWl0IGltcG9ydChcbiAgICAnLi4vdXRpbHMvY29uZmlnLmpzJ1xuICApXG4gIGVuYWJsZUNvbmZpZ3MoKVxuICBjb25zdCB7IGluaXRTaW5rcyB9ID0gYXdhaXQgaW1wb3J0KCcuLi91dGlscy9zaW5rcy5qcycpXG4gIGluaXRTaW5rcygpXG5cbiAgaWYgKCFjaGVja0hhc1RydXN0RGlhbG9nQWNjZXB0ZWQoKSkge1xuICAgIHRocm93IG5ldyBCcmlkZ2VIZWFkbGVzc1Blcm1hbmVudEVycm9yKFxuICAgICAgYFdvcmtzcGFjZSBub3QgdHJ1c3RlZDogJHtkaXJ9LiBSdW4gXFxgY2xhdWRlXFxgIGluIHRoYXQgZGlyZWN0b3J5IGZpcnN0IHRvIGFjY2VwdCB0aGUgdHJ1c3QgZGlhbG9nLmAsXG4gICAgKVxuICB9XG5cbiAgaWYgKCFvcHRzLmdldEFjY2Vzc1Rva2VuKCkpIHtcbiAgICAvLyBUcmFuc2llbnQgXHUyMDE0IHN1cGVydmlzb3IncyBBdXRoTWFuYWdlciBtYXkgcGljayB1cCBhIHRva2VuIG9uIG5leHQgY3ljbGUuXG4gICAgdGhyb3cgbmV3IEVycm9yKEJSSURHRV9MT0dJTl9FUlJPUilcbiAgfVxuXG4gIGNvbnN0IHsgZ2V0QnJpZGdlQmFzZVVybCB9ID0gYXdhaXQgaW1wb3J0KCcuL2JyaWRnZUNvbmZpZy5qcycpXG4gIGNvbnN0IGJhc2VVcmwgPSBnZXRCcmlkZ2VCYXNlVXJsKClcbiAgaWYgKFxuICAgIGJhc2VVcmwuc3RhcnRzV2l0aCgnaHR0cDovLycpICYmXG4gICAgIWJhc2VVcmwuaW5jbHVkZXMoJ2xvY2FsaG9zdCcpICYmXG4gICAgIWJhc2VVcmwuaW5jbHVkZXMoJzEyNy4wLjAuMScpXG4gICkge1xuICAgIHRocm93IG5ldyBCcmlkZ2VIZWFkbGVzc1Blcm1hbmVudEVycm9yKFxuICAgICAgJ1JlbW90ZSBDb250cm9sIGJhc2UgVVJMIHVzZXMgSFRUUC4gT25seSBIVFRQUyBvciBsb2NhbGhvc3QgSFRUUCBpcyBhbGxvd2VkLicsXG4gICAgKVxuICB9XG4gIGNvbnN0IHNlc3Npb25JbmdyZXNzVXJsID1cbiAgICBwcm9jZXNzLmVudi5VU0VSX1RZUEUgPT09ICdhbnQnICYmXG4gICAgcHJvY2Vzcy5lbnYuQ0xBVURFX0JSSURHRV9TRVNTSU9OX0lOR1JFU1NfVVJMXG4gICAgICA/IHByb2Nlc3MuZW52LkNMQVVERV9CUklER0VfU0VTU0lPTl9JTkdSRVNTX1VSTFxuICAgICAgOiBiYXNlVXJsXG5cbiAgY29uc3QgeyBnZXRCcmFuY2gsIGdldFJlbW90ZVVybCwgZmluZEdpdFJvb3QgfSA9IGF3YWl0IGltcG9ydChcbiAgICAnLi4vdXRpbHMvZ2l0LmpzJ1xuICApXG4gIGNvbnN0IHsgaGFzV29ya3RyZWVDcmVhdGVIb29rIH0gPSBhd2FpdCBpbXBvcnQoJy4uL3V0aWxzL2hvb2tzLmpzJylcblxuICBpZiAob3B0cy5zcGF3bk1vZGUgPT09ICd3b3JrdHJlZScpIHtcbiAgICBjb25zdCB3b3JrdHJlZUF2YWlsYWJsZSA9XG4gICAgICBoYXNXb3JrdHJlZUNyZWF0ZUhvb2soKSB8fCBmaW5kR2l0Um9vdChkaXIpICE9PSBudWxsXG4gICAgaWYgKCF3b3JrdHJlZUF2YWlsYWJsZSkge1xuICAgICAgdGhyb3cgbmV3IEJyaWRnZUhlYWRsZXNzUGVybWFuZW50RXJyb3IoXG4gICAgICAgIGBXb3JrdHJlZSBtb2RlIHJlcXVpcmVzIGEgZ2l0IHJlcG9zaXRvcnkgb3IgV29ya3RyZWVDcmVhdGUgaG9va3MuIERpcmVjdG9yeSAke2Rpcn0gaGFzIG5laXRoZXIuYCxcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBjb25zdCBicmFuY2ggPSBhd2FpdCBnZXRCcmFuY2goKVxuICBjb25zdCBnaXRSZXBvVXJsID0gYXdhaXQgZ2V0UmVtb3RlVXJsKClcbiAgY29uc3QgbWFjaGluZU5hbWUgPSBob3N0bmFtZSgpXG4gIGNvbnN0IGJyaWRnZUlkID0gcmFuZG9tVVVJRCgpXG5cbiAgY29uc3QgY29uZmlnOiBCcmlkZ2VDb25maWcgPSB7XG4gICAgZGlyLFxuICAgIG1hY2hpbmVOYW1lLFxuICAgIGJyYW5jaCxcbiAgICBnaXRSZXBvVXJsLFxuICAgIG1heFNlc3Npb25zOiBvcHRzLmNhcGFjaXR5LFxuICAgIHNwYXduTW9kZTogb3B0cy5zcGF3bk1vZGUsXG4gICAgdmVyYm9zZTogZmFsc2UsXG4gICAgc2FuZGJveDogb3B0cy5zYW5kYm94LFxuICAgIGJyaWRnZUlkLFxuICAgIHdvcmtlclR5cGU6ICdjbGF1ZGVfY29kZScsXG4gICAgZW52aXJvbm1lbnRJZDogcmFuZG9tVVVJRCgpLFxuICAgIGFwaUJhc2VVcmw6IGJhc2VVcmwsXG4gICAgc2Vzc2lvbkluZ3Jlc3NVcmwsXG4gICAgc2Vzc2lvblRpbWVvdXRNczogb3B0cy5zZXNzaW9uVGltZW91dE1zLFxuICB9XG5cbiAgY29uc3QgYXBpID0gY3JlYXRlQnJpZGdlQXBpQ2xpZW50KHtcbiAgICBiYXNlVXJsLFxuICAgIGdldEFjY2Vzc1Rva2VuOiBvcHRzLmdldEFjY2Vzc1Rva2VuLFxuICAgIHJ1bm5lclZlcnNpb246IE1BQ1JPLlZFUlNJT04sXG4gICAgb25EZWJ1ZzogbG9nLFxuICAgIG9uQXV0aDQwMTogb3B0cy5vbkF1dGg0MDEsXG4gICAgZ2V0VHJ1c3RlZERldmljZVRva2VuLFxuICB9KVxuXG4gIGxldCBlbnZpcm9ubWVudElkOiBzdHJpbmdcbiAgbGV0IGVudmlyb25tZW50U2VjcmV0OiBzdHJpbmdcbiAgdHJ5IHtcbiAgICBjb25zdCByZWcgPSBhd2FpdCBhcGkucmVnaXN0ZXJCcmlkZ2VFbnZpcm9ubWVudChjb25maWcpXG4gICAgZW52aXJvbm1lbnRJZCA9IHJlZy5lbnZpcm9ubWVudF9pZFxuICAgIGVudmlyb25tZW50U2VjcmV0ID0gcmVnLmVudmlyb25tZW50X3NlY3JldFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBUcmFuc2llbnQgXHUyMDE0IGxldCBzdXBlcnZpc29yIGJhY2tvZmYtcmV0cnkuXG4gICAgdGhyb3cgbmV3IEVycm9yKGBCcmlkZ2UgcmVnaXN0cmF0aW9uIGZhaWxlZDogJHtlcnJvck1lc3NhZ2UoZXJyKX1gKVxuICB9XG5cbiAgY29uc3Qgc3Bhd25lciA9IGNyZWF0ZVNlc3Npb25TcGF3bmVyKHtcbiAgICBleGVjUGF0aDogcHJvY2Vzcy5leGVjUGF0aCxcbiAgICBzY3JpcHRBcmdzOiBzcGF3blNjcmlwdEFyZ3MoKSxcbiAgICBlbnY6IHByb2Nlc3MuZW52LFxuICAgIHZlcmJvc2U6IGZhbHNlLFxuICAgIHNhbmRib3g6IG9wdHMuc2FuZGJveCxcbiAgICBwZXJtaXNzaW9uTW9kZTogb3B0cy5wZXJtaXNzaW9uTW9kZSxcbiAgICBvbkRlYnVnOiBsb2csXG4gIH0pXG5cbiAgY29uc3QgbG9nZ2VyID0gY3JlYXRlSGVhZGxlc3NCcmlkZ2VMb2dnZXIobG9nKVxuICBsb2dnZXIucHJpbnRCYW5uZXIoY29uZmlnLCBlbnZpcm9ubWVudElkKVxuXG4gIGxldCBpbml0aWFsU2Vzc2lvbklkOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgaWYgKG9wdHMuY3JlYXRlU2Vzc2lvbk9uU3RhcnQpIHtcbiAgICBjb25zdCB7IGNyZWF0ZUJyaWRnZVNlc3Npb24gfSA9IGF3YWl0IGltcG9ydCgnLi9jcmVhdGVTZXNzaW9uLmpzJylcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2lkID0gYXdhaXQgY3JlYXRlQnJpZGdlU2Vzc2lvbih7XG4gICAgICAgIGVudmlyb25tZW50SWQsXG4gICAgICAgIHRpdGxlOiBvcHRzLm5hbWUsXG4gICAgICAgIGV2ZW50czogW10sXG4gICAgICAgIGdpdFJlcG9VcmwsXG4gICAgICAgIGJyYW5jaCxcbiAgICAgICAgc2lnbmFsLFxuICAgICAgICBiYXNlVXJsLFxuICAgICAgICBnZXRBY2Nlc3NUb2tlbjogb3B0cy5nZXRBY2Nlc3NUb2tlbixcbiAgICAgICAgcGVybWlzc2lvbk1vZGU6IG9wdHMucGVybWlzc2lvbk1vZGUsXG4gICAgICB9KVxuICAgICAgaWYgKHNpZCkge1xuICAgICAgICBpbml0aWFsU2Vzc2lvbklkID0gc2lkXG4gICAgICAgIGxvZyhgY3JlYXRlZCBpbml0aWFsIHNlc3Npb24gJHtzaWR9YClcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGxvZyhgc2Vzc2lvbiBwcmUtY3JlYXRpb24gZmFpbGVkIChub24tZmF0YWwpOiAke2Vycm9yTWVzc2FnZShlcnIpfWApXG4gICAgfVxuICB9XG5cbiAgYXdhaXQgcnVuQnJpZGdlTG9vcChcbiAgICBjb25maWcsXG4gICAgZW52aXJvbm1lbnRJZCxcbiAgICBlbnZpcm9ubWVudFNlY3JldCxcbiAgICBhcGksXG4gICAgc3Bhd25lcixcbiAgICBsb2dnZXIsXG4gICAgc2lnbmFsLFxuICAgIHVuZGVmaW5lZCxcbiAgICBpbml0aWFsU2Vzc2lvbklkLFxuICAgIGFzeW5jICgpID0+IG9wdHMuZ2V0QWNjZXNzVG9rZW4oKSxcbiAgKVxufVxuXG4vKiogQnJpZGdlTG9nZ2VyIGFkYXB0ZXIgdGhhdCByb3V0ZXMgZXZlcnl0aGluZyB0byBhIHNpbmdsZSBsaW5lLWxvZyBmbi4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRsZXNzQnJpZGdlTG9nZ2VyKGxvZzogKHM6IHN0cmluZykgPT4gdm9pZCk6IEJyaWRnZUxvZ2dlciB7XG4gIGNvbnN0IG5vb3AgPSAoKTogdm9pZCA9PiB7fVxuICByZXR1cm4ge1xuICAgIHByaW50QmFubmVyOiAoY2ZnLCBlbnZJZCkgPT5cbiAgICAgIGxvZyhcbiAgICAgICAgYHJlZ2lzdGVyZWQgZW52aXJvbm1lbnRJZD0ke2VudklkfSBkaXI9JHtjZmcuZGlyfSBzcGF3bk1vZGU9JHtjZmcuc3Bhd25Nb2RlfSBjYXBhY2l0eT0ke2NmZy5tYXhTZXNzaW9uc31gLFxuICAgICAgKSxcbiAgICBsb2dTZXNzaW9uU3RhcnQ6IChpZCwgX3Byb21wdCkgPT4gbG9nKGBzZXNzaW9uIHN0YXJ0ICR7aWR9YCksXG4gICAgbG9nU2Vzc2lvbkNvbXBsZXRlOiAoaWQsIG1zKSA9PiBsb2coYHNlc3Npb24gY29tcGxldGUgJHtpZH0gKCR7bXN9bXMpYCksXG4gICAgbG9nU2Vzc2lvbkZhaWxlZDogKGlkLCBlcnIpID0+IGxvZyhgc2Vzc2lvbiBmYWlsZWQgJHtpZH06ICR7ZXJyfWApLFxuICAgIGxvZ1N0YXR1czogbG9nLFxuICAgIGxvZ1ZlcmJvc2U6IGxvZyxcbiAgICBsb2dFcnJvcjogcyA9PiBsb2coYGVycm9yOiAke3N9YCksXG4gICAgbG9nUmVjb25uZWN0ZWQ6IG1zID0+IGxvZyhgcmVjb25uZWN0ZWQgYWZ0ZXIgJHttc31tc2ApLFxuICAgIGFkZFNlc3Npb246IChpZCwgX3VybCkgPT4gbG9nKGBzZXNzaW9uIGF0dGFjaGVkICR7aWR9YCksXG4gICAgcmVtb3ZlU2Vzc2lvbjogaWQgPT4gbG9nKGBzZXNzaW9uIGRldGFjaGVkICR7aWR9YCksXG4gICAgdXBkYXRlSWRsZVN0YXR1czogbm9vcCxcbiAgICB1cGRhdGVSZWNvbm5lY3RpbmdTdGF0dXM6IG5vb3AsXG4gICAgdXBkYXRlU2Vzc2lvblN0YXR1czogbm9vcCxcbiAgICB1cGRhdGVTZXNzaW9uQWN0aXZpdHk6IG5vb3AsXG4gICAgdXBkYXRlU2Vzc2lvbkNvdW50OiBub29wLFxuICAgIHVwZGF0ZUZhaWxlZFN0YXR1czogbm9vcCxcbiAgICBzZXRTcGF3bk1vZGVEaXNwbGF5OiBub29wLFxuICAgIHNldFJlcG9JbmZvOiBub29wLFxuICAgIHNldERlYnVnTG9nUGF0aDogbm9vcCxcbiAgICBzZXRBdHRhY2hlZDogbm9vcCxcbiAgICBzZXRTZXNzaW9uVGl0bGU6IG5vb3AsXG4gICAgY2xlYXJTdGF0dXM6IG5vb3AsXG4gICAgdG9nZ2xlUXI6IG5vb3AsXG4gICAgcmVmcmVzaERpc3BsYXk6IG5vb3AsXG4gIH1cbn1cbiIsICJpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnXG5pbXBvcnQgeyB0b1N0cmluZyBhcyBxclRvU3RyaW5nIH0gZnJvbSAncXJjb2RlJ1xuaW1wb3J0IHtcbiAgQlJJREdFX0ZBSUxFRF9JTkRJQ0FUT1IsXG4gIEJSSURHRV9SRUFEWV9JTkRJQ0FUT1IsXG4gIEJSSURHRV9TUElOTkVSX0ZSQU1FUyxcbn0gZnJvbSAnLi4vY29uc3RhbnRzL2ZpZ3VyZXMuanMnXG5pbXBvcnQgeyBzdHJpbmdXaWR0aCB9IGZyb20gJy4uL2luay9zdHJpbmdXaWR0aC5qcydcbmltcG9ydCB7IGxvZ0ZvckRlYnVnZ2luZyB9IGZyb20gJy4uL3V0aWxzL2RlYnVnLmpzJ1xuaW1wb3J0IHtcbiAgYnVpbGRBY3RpdmVGb290ZXJUZXh0LFxuICBidWlsZEJyaWRnZUNvbm5lY3RVcmwsXG4gIGJ1aWxkQnJpZGdlU2Vzc2lvblVybCxcbiAgYnVpbGRJZGxlRm9vdGVyVGV4dCxcbiAgRkFJTEVEX0ZPT1RFUl9URVhULFxuICBmb3JtYXREdXJhdGlvbixcbiAgdHlwZSBTdGF0dXNTdGF0ZSxcbiAgVE9PTF9ESVNQTEFZX0VYUElSWV9NUyxcbiAgdGltZXN0YW1wLFxuICB0cnVuY2F0ZVByb21wdCxcbiAgd3JhcFdpdGhPc2M4TGluayxcbn0gZnJvbSAnLi9icmlkZ2VTdGF0dXNVdGlsLmpzJ1xuaW1wb3J0IHR5cGUge1xuICBCcmlkZ2VDb25maWcsXG4gIEJyaWRnZUxvZ2dlcixcbiAgU2Vzc2lvbkFjdGl2aXR5LFxuICBTcGF3bk1vZGUsXG59IGZyb20gJy4vdHlwZXMuanMnXG5cbmNvbnN0IFFSX09QVElPTlMgPSB7XG4gIHR5cGU6ICd1dGY4JyBhcyBjb25zdCxcbiAgZXJyb3JDb3JyZWN0aW9uTGV2ZWw6ICdMJyBhcyBjb25zdCxcbiAgc21hbGw6IHRydWUsXG59XG5cbi8qKiBHZW5lcmF0ZSBhIFFSIGNvZGUgYW5kIHJldHVybiBpdHMgbGluZXMuICovXG5hc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVFyKHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICBjb25zdCBxciA9IGF3YWl0IHFyVG9TdHJpbmcodXJsLCBRUl9PUFRJT05TKVxuICByZXR1cm4gcXIuc3BsaXQoJ1xcbicpLmZpbHRlcigobGluZTogc3RyaW5nKSA9PiBsaW5lLmxlbmd0aCA+IDApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCcmlkZ2VMb2dnZXIob3B0aW9uczoge1xuICB2ZXJib3NlOiBib29sZWFuXG4gIHdyaXRlPzogKHM6IHN0cmluZykgPT4gdm9pZFxufSk6IEJyaWRnZUxvZ2dlciB7XG4gIGNvbnN0IHdyaXRlID0gb3B0aW9ucy53cml0ZSA/PyAoKHM6IHN0cmluZykgPT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUocykpXG4gIGNvbnN0IHZlcmJvc2UgPSBvcHRpb25zLnZlcmJvc2VcblxuICAvLyBUcmFjayBob3cgbWFueSBzdGF0dXMgbGluZXMgYXJlIGN1cnJlbnRseSBkaXNwbGF5ZWQgYXQgdGhlIGJvdHRvbVxuICBsZXQgc3RhdHVzTGluZUNvdW50ID0gMFxuXG4gIC8vIFN0YXR1cyBzdGF0ZSBtYWNoaW5lXG4gIGxldCBjdXJyZW50U3RhdGU6IFN0YXR1c1N0YXRlID0gJ2lkbGUnXG4gIGxldCBjdXJyZW50U3RhdGVUZXh0ID0gJ1JlYWR5J1xuICBsZXQgcmVwb05hbWUgPSAnJ1xuICBsZXQgYnJhbmNoID0gJydcbiAgbGV0IGRlYnVnTG9nUGF0aCA9ICcnXG5cbiAgLy8gQ29ubmVjdCBVUkwgKGJ1aWx0IGluIHByaW50QmFubmVyIHdpdGggY29ycmVjdCBiYXNlIGZvciBzdGFnaW5nL3Byb2QpXG4gIGxldCBjb25uZWN0VXJsID0gJydcbiAgbGV0IGNhY2hlZEluZ3Jlc3NVcmwgPSAnJ1xuICBsZXQgY2FjaGVkRW52aXJvbm1lbnRJZCA9ICcnXG4gIGxldCBhY3RpdmVTZXNzaW9uVXJsOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuXG4gIC8vIFFSIGNvZGUgbGluZXMgZm9yIHRoZSBjdXJyZW50IFVSTFxuICBsZXQgcXJMaW5lczogc3RyaW5nW10gPSBbXVxuICBsZXQgcXJWaXNpYmxlID0gZmFsc2VcblxuICAvLyBUb29sIGFjdGl2aXR5IGZvciB0aGUgc2Vjb25kIHN0YXR1cyBsaW5lXG4gIGxldCBsYXN0VG9vbFN1bW1hcnk6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gIGxldCBsYXN0VG9vbFRpbWUgPSAwXG5cbiAgLy8gU2Vzc2lvbiBjb3VudCBpbmRpY2F0b3IgKHNob3duIHdoZW4gbXVsdGktc2Vzc2lvbiBtb2RlIGlzIGVuYWJsZWQpXG4gIGxldCBzZXNzaW9uQWN0aXZlID0gMFxuICBsZXQgc2Vzc2lvbk1heCA9IDFcbiAgLy8gU3Bhd24gbW9kZSBzaG93biBpbiB0aGUgc2Vzc2lvbi1jb3VudCBsaW5lICsgZ2F0ZXMgdGhlIGB3YCBoaW50XG4gIGxldCBzcGF3bk1vZGVEaXNwbGF5OiAnc2FtZS1kaXInIHwgJ3dvcmt0cmVlJyB8IG51bGwgPSBudWxsXG4gIGxldCBzcGF3bk1vZGU6IFNwYXduTW9kZSA9ICdzaW5nbGUtc2Vzc2lvbidcblxuICAvLyBQZXItc2Vzc2lvbiBkaXNwbGF5IGluZm8gZm9yIHRoZSBtdWx0aS1zZXNzaW9uIGJ1bGxldCBsaXN0IChrZXllZCBieSBjb21wYXQgc2Vzc2lvbklkKVxuICBjb25zdCBzZXNzaW9uRGlzcGxheUluZm8gPSBuZXcgTWFwPFxuICAgIHN0cmluZyxcbiAgICB7IHRpdGxlPzogc3RyaW5nOyB1cmw6IHN0cmluZzsgYWN0aXZpdHk/OiBTZXNzaW9uQWN0aXZpdHkgfVxuICA+KClcblxuICAvLyBDb25uZWN0aW5nIHNwaW5uZXIgc3RhdGVcbiAgbGV0IGNvbm5lY3RpbmdUaW1lcjogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0SW50ZXJ2YWw+IHwgbnVsbCA9IG51bGxcbiAgbGV0IGNvbm5lY3RpbmdUaWNrID0gMFxuXG4gIC8qKlxuICAgKiBDb3VudCBob3cgbWFueSB2aXN1YWwgdGVybWluYWwgcm93cyBhIHN0cmluZyBvY2N1cGllcywgYWNjb3VudGluZyBmb3JcbiAgICogbGluZSB3cmFwcGluZy4gRWFjaCBgXFxuYCBpcyBvbmUgcm93LCBhbmQgY29udGVudCB3aWRlciB0aGFuIHRoZSB0ZXJtaW5hbFxuICAgKiB3cmFwcyB0byBhZGRpdGlvbmFsIHJvd3MuXG4gICAqL1xuICBmdW5jdGlvbiBjb3VudFZpc3VhbExpbmVzKHRleHQ6IHN0cmluZyk6IG51bWJlciB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGN1c3RvbS1ydWxlcy9wcmVmZXItdXNlLXRlcm1pbmFsLXNpemVcbiAgICBjb25zdCBjb2xzID0gcHJvY2Vzcy5zdGRvdXQuY29sdW1ucyB8fCA4MCAvLyBub24tUmVhY3QgQ0xJIGNvbnRleHRcbiAgICBsZXQgY291bnQgPSAwXG4gICAgLy8gU3BsaXQgb24gbmV3bGluZXMgdG8gZ2V0IGxvZ2ljYWwgbGluZXNcbiAgICBmb3IgKGNvbnN0IGxvZ2ljYWwgb2YgdGV4dC5zcGxpdCgnXFxuJykpIHtcbiAgICAgIGlmIChsb2dpY2FsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBFbXB0eSBzZWdtZW50IGJldHdlZW4gY29uc2VjdXRpdmUgXFxuIFx1MjAxNCBjb3VudHMgYXMgMSByb3dcbiAgICAgICAgY291bnQrK1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgY29uc3Qgd2lkdGggPSBzdHJpbmdXaWR0aChsb2dpY2FsKVxuICAgICAgY291bnQgKz0gTWF0aC5tYXgoMSwgTWF0aC5jZWlsKHdpZHRoIC8gY29scykpXG4gICAgfVxuICAgIC8vIFRoZSB0cmFpbGluZyBcXG4gaW4gXCJsaW5lXFxuXCIgcHJvZHVjZXMgYW4gZW1wdHkgbGFzdCBlbGVtZW50IFx1MjAxNCBkb24ndCBjb3VudCBpdFxuICAgIC8vIGJlY2F1c2UgdGhlIGN1cnNvciBzaXRzIGF0IHRoZSBzdGFydCBvZiB0aGUgbmV4dCBsaW5lLCBub3QgYSBuZXcgdmlzdWFsIHJvdy5cbiAgICBpZiAodGV4dC5lbmRzV2l0aCgnXFxuJykpIHtcbiAgICAgIGNvdW50LS1cbiAgICB9XG4gICAgcmV0dXJuIGNvdW50XG4gIH1cblxuICAvKiogV3JpdGUgYSBzdGF0dXMgbGluZSBhbmQgdHJhY2sgaXRzIHZpc3VhbCBsaW5lIGNvdW50LiAqL1xuICBmdW5jdGlvbiB3cml0ZVN0YXR1cyh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB3cml0ZSh0ZXh0KVxuICAgIHN0YXR1c0xpbmVDb3VudCArPSBjb3VudFZpc3VhbExpbmVzKHRleHQpXG4gIH1cblxuICAvKiogQ2xlYXIgYW55IGN1cnJlbnRseSBkaXNwbGF5ZWQgc3RhdHVzIGxpbmVzLiAqL1xuICBmdW5jdGlvbiBjbGVhclN0YXR1c0xpbmVzKCk6IHZvaWQge1xuICAgIGlmIChzdGF0dXNMaW5lQ291bnQgPD0gMCkgcmV0dXJuXG4gICAgbG9nRm9yRGVidWdnaW5nKGBbYnJpZGdlOnVpXSBjbGVhclN0YXR1c0xpbmVzIGNvdW50PSR7c3RhdHVzTGluZUNvdW50fWApXG4gICAgLy8gTW92ZSBjdXJzb3IgdXAgdG8gdGhlIHN0YXJ0IG9mIHRoZSBzdGF0dXMgYmxvY2ssIHRoZW4gZXJhc2UgZXZlcnl0aGluZyBiZWxvd1xuICAgIHdyaXRlKGBcXHgxYlske3N0YXR1c0xpbmVDb3VudH1BYCkgLy8gY3Vyc29yIHVwIE4gbGluZXNcbiAgICB3cml0ZSgnXFx4MWJbSicpIC8vIGVyYXNlIGZyb20gY3Vyc29yIHRvIGVuZCBvZiBzY3JlZW5cbiAgICBzdGF0dXNMaW5lQ291bnQgPSAwXG4gIH1cblxuICAvKiogUHJpbnQgYSBwZXJtYW5lbnQgbG9nIGxpbmUsIGNsZWFyaW5nIHN0YXR1cyBmaXJzdCBhbmQgcmVzdG9yaW5nIGFmdGVyLiAqL1xuICBmdW5jdGlvbiBwcmludExvZyhsaW5lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjbGVhclN0YXR1c0xpbmVzKClcbiAgICB3cml0ZShsaW5lKVxuICB9XG5cbiAgLyoqIFJlZ2VuZXJhdGUgdGhlIFFSIGNvZGUgd2l0aCB0aGUgZ2l2ZW4gVVJMLiAqL1xuICBmdW5jdGlvbiByZWdlbmVyYXRlUXIodXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBnZW5lcmF0ZVFyKHVybClcbiAgICAgIC50aGVuKGxpbmVzID0+IHtcbiAgICAgICAgcXJMaW5lcyA9IGxpbmVzXG4gICAgICAgIHJlbmRlclN0YXR1c0xpbmUoKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKGBRUiBjb2RlIGdlbmVyYXRpb24gZmFpbGVkOiAke2V9YCwgeyBsZXZlbDogJ2Vycm9yJyB9KVxuICAgICAgfSlcbiAgfVxuXG4gIC8qKiBSZW5kZXIgdGhlIGNvbm5lY3Rpbmcgc3Bpbm5lciBsaW5lIChzaG93biBiZWZvcmUgZmlyc3QgdXBkYXRlSWRsZVN0YXR1cykuICovXG4gIGZ1bmN0aW9uIHJlbmRlckNvbm5lY3RpbmdMaW5lKCk6IHZvaWQge1xuICAgIGNsZWFyU3RhdHVzTGluZXMoKVxuXG4gICAgY29uc3QgZnJhbWUgPVxuICAgICAgQlJJREdFX1NQSU5ORVJfRlJBTUVTW2Nvbm5lY3RpbmdUaWNrICUgQlJJREdFX1NQSU5ORVJfRlJBTUVTLmxlbmd0aF0hXG4gICAgbGV0IHN1ZmZpeCA9ICcnXG4gICAgaWYgKHJlcG9OYW1lKSB7XG4gICAgICBzdWZmaXggKz0gY2hhbGsuZGltKCcgXFx1MDBiNyAnKSArIGNoYWxrLmRpbShyZXBvTmFtZSlcbiAgICB9XG4gICAgaWYgKGJyYW5jaCkge1xuICAgICAgc3VmZml4ICs9IGNoYWxrLmRpbSgnIFxcdTAwYjcgJykgKyBjaGFsay5kaW0oYnJhbmNoKVxuICAgIH1cbiAgICB3cml0ZVN0YXR1cyhcbiAgICAgIGAke2NoYWxrLnllbGxvdyhmcmFtZSl9ICR7Y2hhbGsueWVsbG93KCdDb25uZWN0aW5nJyl9JHtzdWZmaXh9XFxuYCxcbiAgICApXG4gIH1cblxuICAvKiogU3RhcnQgdGhlIGNvbm5lY3Rpbmcgc3Bpbm5lci4gU3RvcHBlZCBieSBmaXJzdCB1cGRhdGVJZGxlU3RhdHVzKCkuICovXG4gIGZ1bmN0aW9uIHN0YXJ0Q29ubmVjdGluZygpOiB2b2lkIHtcbiAgICBzdG9wQ29ubmVjdGluZygpXG4gICAgcmVuZGVyQ29ubmVjdGluZ0xpbmUoKVxuICAgIGNvbm5lY3RpbmdUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbm5lY3RpbmdUaWNrKytcbiAgICAgIHJlbmRlckNvbm5lY3RpbmdMaW5lKClcbiAgICB9LCAxNTApXG4gIH1cblxuICAvKiogU3RvcCB0aGUgY29ubmVjdGluZyBzcGlubmVyLiAqL1xuICBmdW5jdGlvbiBzdG9wQ29ubmVjdGluZygpOiB2b2lkIHtcbiAgICBpZiAoY29ubmVjdGluZ1RpbWVyKSB7XG4gICAgICBjbGVhckludGVydmFsKGNvbm5lY3RpbmdUaW1lcilcbiAgICAgIGNvbm5lY3RpbmdUaW1lciA9IG51bGxcbiAgICB9XG4gIH1cblxuICAvKiogUmVuZGVyIGFuZCB3cml0ZSB0aGUgY3VycmVudCBzdGF0dXMgbGluZXMgYmFzZWQgb24gc3RhdGUuICovXG4gIGZ1bmN0aW9uIHJlbmRlclN0YXR1c0xpbmUoKTogdm9pZCB7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gJ3JlY29ubmVjdGluZycgfHwgY3VycmVudFN0YXRlID09PSAnZmFpbGVkJykge1xuICAgICAgLy8gVGhlc2Ugc3RhdGVzIGFyZSBoYW5kbGVkIHNlcGFyYXRlbHkgKHVwZGF0ZVJlY29ubmVjdGluZ1N0YXR1cyAvXG4gICAgICAvLyB1cGRhdGVGYWlsZWRTdGF0dXMpLiBSZXR1cm4gYmVmb3JlIGNsZWFyaW5nIHNvIGNhbGxlcnMgbGlrZSB0b2dnbGVRclxuICAgICAgLy8gYW5kIHNldFNwYXduTW9kZURpc3BsYXkgZG9uJ3QgYmxhbmsgdGhlIGRpc3BsYXkgZHVyaW5nIHRoZXNlIHN0YXRlcy5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNsZWFyU3RhdHVzTGluZXMoKVxuXG4gICAgY29uc3QgaXNJZGxlID0gY3VycmVudFN0YXRlID09PSAnaWRsZSdcblxuICAgIC8vIFFSIGNvZGUgYWJvdmUgdGhlIHN0YXR1cyBsaW5lXG4gICAgaWYgKHFyVmlzaWJsZSkge1xuICAgICAgZm9yIChjb25zdCBsaW5lIG9mIHFyTGluZXMpIHtcbiAgICAgICAgd3JpdGVTdGF0dXMoYCR7Y2hhbGsuZGltKGxpbmUpfVxcbmApXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGV0ZXJtaW5lIGluZGljYXRvciBhbmQgY29sb3JzIGJhc2VkIG9uIHN0YXRlXG4gICAgY29uc3QgaW5kaWNhdG9yID0gQlJJREdFX1JFQURZX0lORElDQVRPUlxuICAgIGNvbnN0IGluZGljYXRvckNvbG9yID0gaXNJZGxlID8gY2hhbGsuZ3JlZW4gOiBjaGFsay5jeWFuXG4gICAgY29uc3QgYmFzZUNvbG9yID0gaXNJZGxlID8gY2hhbGsuZ3JlZW4gOiBjaGFsay5jeWFuXG4gICAgY29uc3Qgc3RhdGVUZXh0ID0gYmFzZUNvbG9yKGN1cnJlbnRTdGF0ZVRleHQpXG5cbiAgICAvLyBCdWlsZCB0aGUgc3VmZml4IHdpdGggcmVwbyBhbmQgYnJhbmNoXG4gICAgbGV0IHN1ZmZpeCA9ICcnXG4gICAgaWYgKHJlcG9OYW1lKSB7XG4gICAgICBzdWZmaXggKz0gY2hhbGsuZGltKCcgXFx1MDBiNyAnKSArIGNoYWxrLmRpbShyZXBvTmFtZSlcbiAgICB9XG4gICAgLy8gSW4gd29ya3RyZWUgbW9kZSBlYWNoIHNlc3Npb24gZ2V0cyBpdHMgb3duIGJyYW5jaCwgc28gc2hvd2luZyB0aGVcbiAgICAvLyBicmlkZ2UncyBicmFuY2ggd291bGQgYmUgbWlzbGVhZGluZy5cbiAgICBpZiAoYnJhbmNoICYmIHNwYXduTW9kZSAhPT0gJ3dvcmt0cmVlJykge1xuICAgICAgc3VmZml4ICs9IGNoYWxrLmRpbSgnIFxcdTAwYjcgJykgKyBjaGFsay5kaW0oYnJhbmNoKVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5VU0VSX1RZUEUgPT09ICdhbnQnICYmIGRlYnVnTG9nUGF0aCkge1xuICAgICAgd3JpdGVTdGF0dXMoXG4gICAgICAgIGAke2NoYWxrLnllbGxvdygnW0FOVC1PTkxZXSBMb2dzOicpfSAke2NoYWxrLmRpbShkZWJ1Z0xvZ1BhdGgpfVxcbmAsXG4gICAgICApXG4gICAgfVxuICAgIHdyaXRlU3RhdHVzKGAke2luZGljYXRvckNvbG9yKGluZGljYXRvcil9ICR7c3RhdGVUZXh0fSR7c3VmZml4fVxcbmApXG5cbiAgICAvLyBTZXNzaW9uIGNvdW50IGFuZCBwZXItc2Vzc2lvbiBsaXN0IChtdWx0aS1zZXNzaW9uIG1vZGUgb25seSlcbiAgICBpZiAoc2Vzc2lvbk1heCA+IDEpIHtcbiAgICAgIGNvbnN0IG1vZGVIaW50ID1cbiAgICAgICAgc3Bhd25Nb2RlID09PSAnd29ya3RyZWUnXG4gICAgICAgICAgPyAnTmV3IHNlc3Npb25zIHdpbGwgYmUgY3JlYXRlZCBpbiBhbiBpc29sYXRlZCB3b3JrdHJlZSdcbiAgICAgICAgICA6ICdOZXcgc2Vzc2lvbnMgd2lsbCBiZSBjcmVhdGVkIGluIHRoZSBjdXJyZW50IGRpcmVjdG9yeSdcbiAgICAgIHdyaXRlU3RhdHVzKFxuICAgICAgICBgICAgICR7Y2hhbGsuZGltKGBDYXBhY2l0eTogJHtzZXNzaW9uQWN0aXZlfS8ke3Nlc3Npb25NYXh9IFxcdTAwYjcgJHttb2RlSGludH1gKX1cXG5gLFxuICAgICAgKVxuICAgICAgZm9yIChjb25zdCBbLCBpbmZvXSBvZiBzZXNzaW9uRGlzcGxheUluZm8pIHtcbiAgICAgICAgY29uc3QgdGl0bGVUZXh0ID0gaW5mby50aXRsZVxuICAgICAgICAgID8gdHJ1bmNhdGVQcm9tcHQoaW5mby50aXRsZSwgMzUpXG4gICAgICAgICAgOiBjaGFsay5kaW0oJ0F0dGFjaGVkJylcbiAgICAgICAgY29uc3QgdGl0bGVMaW5rZWQgPSB3cmFwV2l0aE9zYzhMaW5rKHRpdGxlVGV4dCwgaW5mby51cmwpXG4gICAgICAgIGNvbnN0IGFjdCA9IGluZm8uYWN0aXZpdHlcbiAgICAgICAgY29uc3Qgc2hvd0FjdCA9IGFjdCAmJiBhY3QudHlwZSAhPT0gJ3Jlc3VsdCcgJiYgYWN0LnR5cGUgIT09ICdlcnJvcidcbiAgICAgICAgY29uc3QgYWN0VGV4dCA9IHNob3dBY3RcbiAgICAgICAgICA/IGNoYWxrLmRpbShgICR7dHJ1bmNhdGVQcm9tcHQoYWN0LnN1bW1hcnksIDQwKX1gKVxuICAgICAgICAgIDogJydcbiAgICAgICAgd3JpdGVTdGF0dXMoYCAgICAke3RpdGxlTGlua2VkfSR7YWN0VGV4dH1cbmApXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTW9kZSBsaW5lIGZvciBzcGF3biBtb2RlcyB3aXRoIGEgc2luZ2xlIHNsb3QgKG9yIHRydWUgc2luZ2xlLXNlc3Npb24gbW9kZSlcbiAgICBpZiAoc2Vzc2lvbk1heCA9PT0gMSkge1xuICAgICAgY29uc3QgbW9kZVRleHQgPVxuICAgICAgICBzcGF3bk1vZGUgPT09ICdzaW5nbGUtc2Vzc2lvbidcbiAgICAgICAgICA/ICdTaW5nbGUgc2Vzc2lvbiBcXHUwMGI3IGV4aXRzIHdoZW4gY29tcGxldGUnXG4gICAgICAgICAgOiBzcGF3bk1vZGUgPT09ICd3b3JrdHJlZSdcbiAgICAgICAgICAgID8gYENhcGFjaXR5OiAke3Nlc3Npb25BY3RpdmV9LzEgXFx1MDBiNyBOZXcgc2Vzc2lvbnMgd2lsbCBiZSBjcmVhdGVkIGluIGFuIGlzb2xhdGVkIHdvcmt0cmVlYFxuICAgICAgICAgICAgOiBgQ2FwYWNpdHk6ICR7c2Vzc2lvbkFjdGl2ZX0vMSBcXHUwMGI3IE5ldyBzZXNzaW9ucyB3aWxsIGJlIGNyZWF0ZWQgaW4gdGhlIGN1cnJlbnQgZGlyZWN0b3J5YFxuICAgICAgd3JpdGVTdGF0dXMoYCAgICAke2NoYWxrLmRpbShtb2RlVGV4dCl9XFxuYClcbiAgICB9XG5cbiAgICAvLyBUb29sIGFjdGl2aXR5IGxpbmUgZm9yIHNpbmdsZS1zZXNzaW9uIG1vZGVcbiAgICBpZiAoXG4gICAgICBzZXNzaW9uTWF4ID09PSAxICYmXG4gICAgICAhaXNJZGxlICYmXG4gICAgICBsYXN0VG9vbFN1bW1hcnkgJiZcbiAgICAgIERhdGUubm93KCkgLSBsYXN0VG9vbFRpbWUgPCBUT09MX0RJU1BMQVlfRVhQSVJZX01TXG4gICAgKSB7XG4gICAgICB3cml0ZVN0YXR1cyhgICAke2NoYWxrLmRpbSh0cnVuY2F0ZVByb21wdChsYXN0VG9vbFN1bW1hcnksIDYwKSl9XFxuYClcbiAgICB9XG5cbiAgICAvLyBCbGFuayBsaW5lIHNlcGFyYXRvciBiZWZvcmUgZm9vdGVyXG4gICAgY29uc3QgdXJsID0gYWN0aXZlU2Vzc2lvblVybCA/PyBjb25uZWN0VXJsXG4gICAgaWYgKHVybCkge1xuICAgICAgd3JpdGVTdGF0dXMoJ1xcbicpXG4gICAgICBjb25zdCBmb290ZXJUZXh0ID0gaXNJZGxlXG4gICAgICAgID8gYnVpbGRJZGxlRm9vdGVyVGV4dCh1cmwpXG4gICAgICAgIDogYnVpbGRBY3RpdmVGb290ZXJUZXh0KHVybClcbiAgICAgIGNvbnN0IHFySGludCA9IHFyVmlzaWJsZVxuICAgICAgICA/IGNoYWxrLmRpbS5pdGFsaWMoJ3NwYWNlIHRvIGhpZGUgUVIgY29kZScpXG4gICAgICAgIDogY2hhbGsuZGltLml0YWxpYygnc3BhY2UgdG8gc2hvdyBRUiBjb2RlJylcbiAgICAgIGNvbnN0IHRvZ2dsZUhpbnQgPSBzcGF3bk1vZGVEaXNwbGF5XG4gICAgICAgID8gY2hhbGsuZGltLml0YWxpYygnIFxcdTAwYjcgdyB0byB0b2dnbGUgc3Bhd24gbW9kZScpXG4gICAgICAgIDogJydcbiAgICAgIHdyaXRlU3RhdHVzKGAke2NoYWxrLmRpbShmb290ZXJUZXh0KX1cXG5gKVxuICAgICAgd3JpdGVTdGF0dXMoYCR7cXJIaW50fSR7dG9nZ2xlSGludH1cXG5gKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJpbnRCYW5uZXIoY29uZmlnOiBCcmlkZ2VDb25maWcsIGVudmlyb25tZW50SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgY2FjaGVkSW5ncmVzc1VybCA9IGNvbmZpZy5zZXNzaW9uSW5ncmVzc1VybFxuICAgICAgY2FjaGVkRW52aXJvbm1lbnRJZCA9IGVudmlyb25tZW50SWRcbiAgICAgIGNvbm5lY3RVcmwgPSBidWlsZEJyaWRnZUNvbm5lY3RVcmwoZW52aXJvbm1lbnRJZCwgY2FjaGVkSW5ncmVzc1VybClcbiAgICAgIHJlZ2VuZXJhdGVRcihjb25uZWN0VXJsKVxuXG4gICAgICBpZiAodmVyYm9zZSkge1xuICAgICAgICB3cml0ZShjaGFsay5kaW0oYFJlbW90ZSBDb250cm9sYCkgKyBgIHYke01BQ1JPLlZFUlNJT059XFxuYClcbiAgICAgIH1cbiAgICAgIGlmICh2ZXJib3NlKSB7XG4gICAgICAgIGlmIChjb25maWcuc3Bhd25Nb2RlICE9PSAnc2luZ2xlLXNlc3Npb24nKSB7XG4gICAgICAgICAgd3JpdGUoY2hhbGsuZGltKGBTcGF3biBtb2RlOiBgKSArIGAke2NvbmZpZy5zcGF3bk1vZGV9XFxuYClcbiAgICAgICAgICB3cml0ZShcbiAgICAgICAgICAgIGNoYWxrLmRpbShgTWF4IGNvbmN1cnJlbnQgc2Vzc2lvbnM6IGApICsgYCR7Y29uZmlnLm1heFNlc3Npb25zfVxcbmAsXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHdyaXRlKGNoYWxrLmRpbShgRW52aXJvbm1lbnQgSUQ6IGApICsgYCR7ZW52aXJvbm1lbnRJZH1cXG5gKVxuICAgICAgfVxuICAgICAgaWYgKGNvbmZpZy5zYW5kYm94KSB7XG4gICAgICAgIHdyaXRlKGNoYWxrLmRpbShgU2FuZGJveDogYCkgKyBgJHtjaGFsay5ncmVlbignRW5hYmxlZCcpfVxcbmApXG4gICAgICB9XG4gICAgICB3cml0ZSgnXFxuJylcblxuICAgICAgLy8gU3RhcnQgY29ubmVjdGluZyBzcGlubmVyIFx1MjAxNCBmaXJzdCB1cGRhdGVJZGxlU3RhdHVzKCkgd2lsbCBzdG9wIGl0XG4gICAgICBzdGFydENvbm5lY3RpbmcoKVxuICAgIH0sXG5cbiAgICBsb2dTZXNzaW9uU3RhcnQoc2Vzc2lvbklkOiBzdHJpbmcsIHByb21wdDogc3RyaW5nKTogdm9pZCB7XG4gICAgICBpZiAodmVyYm9zZSkge1xuICAgICAgICBjb25zdCBzaG9ydCA9IHRydW5jYXRlUHJvbXB0KHByb21wdCwgODApXG4gICAgICAgIHByaW50TG9nKFxuICAgICAgICAgIGNoYWxrLmRpbShgWyR7dGltZXN0YW1wKCl9XWApICtcbiAgICAgICAgICAgIGAgU2Vzc2lvbiBzdGFydGVkOiAke2NoYWxrLndoaXRlKGBcIiR7c2hvcnR9XCJgKX0gKCR7Y2hhbGsuZGltKHNlc3Npb25JZCl9KVxcbmAsXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbG9nU2Vzc2lvbkNvbXBsZXRlKHNlc3Npb25JZDogc3RyaW5nLCBkdXJhdGlvbk1zOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHByaW50TG9nKFxuICAgICAgICBjaGFsay5kaW0oYFske3RpbWVzdGFtcCgpfV1gKSArXG4gICAgICAgICAgYCBTZXNzaW9uICR7Y2hhbGsuZ3JlZW4oJ2NvbXBsZXRlZCcpfSAoJHtmb3JtYXREdXJhdGlvbihkdXJhdGlvbk1zKX0pICR7Y2hhbGsuZGltKHNlc3Npb25JZCl9XFxuYCxcbiAgICAgIClcbiAgICB9LFxuXG4gICAgbG9nU2Vzc2lvbkZhaWxlZChzZXNzaW9uSWQ6IHN0cmluZywgZXJyb3I6IHN0cmluZyk6IHZvaWQge1xuICAgICAgcHJpbnRMb2coXG4gICAgICAgIGNoYWxrLmRpbShgWyR7dGltZXN0YW1wKCl9XWApICtcbiAgICAgICAgICBgIFNlc3Npb24gJHtjaGFsay5yZWQoJ2ZhaWxlZCcpfTogJHtlcnJvcn0gJHtjaGFsay5kaW0oc2Vzc2lvbklkKX1cXG5gLFxuICAgICAgKVxuICAgIH0sXG5cbiAgICBsb2dTdGF0dXMobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICBwcmludExvZyhjaGFsay5kaW0oYFske3RpbWVzdGFtcCgpfV1gKSArIGAgJHttZXNzYWdlfVxcbmApXG4gICAgfSxcblxuICAgIGxvZ1ZlcmJvc2UobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICBpZiAodmVyYm9zZSkge1xuICAgICAgICBwcmludExvZyhjaGFsay5kaW0oYFske3RpbWVzdGFtcCgpfV0gJHttZXNzYWdlfWApICsgJ1xcbicpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGxvZ0Vycm9yKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgICAgcHJpbnRMb2coY2hhbGsucmVkKGBbJHt0aW1lc3RhbXAoKX1dIEVycm9yOiAke21lc3NhZ2V9YCkgKyAnXFxuJylcbiAgICB9LFxuXG4gICAgbG9nUmVjb25uZWN0ZWQoZGlzY29ubmVjdGVkTXM6IG51bWJlcik6IHZvaWQge1xuICAgICAgcHJpbnRMb2coXG4gICAgICAgIGNoYWxrLmRpbShgWyR7dGltZXN0YW1wKCl9XWApICtcbiAgICAgICAgICBgICR7Y2hhbGsuZ3JlZW4oJ1JlY29ubmVjdGVkJyl9IGFmdGVyICR7Zm9ybWF0RHVyYXRpb24oZGlzY29ubmVjdGVkTXMpfVxcbmAsXG4gICAgICApXG4gICAgfSxcblxuICAgIHNldFJlcG9JbmZvKHJlcG86IHN0cmluZywgYnJhbmNoTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICByZXBvTmFtZSA9IHJlcG9cbiAgICAgIGJyYW5jaCA9IGJyYW5jaE5hbWVcbiAgICB9LFxuXG4gICAgc2V0RGVidWdMb2dQYXRoKHBhdGg6IHN0cmluZyk6IHZvaWQge1xuICAgICAgZGVidWdMb2dQYXRoID0gcGF0aFxuICAgIH0sXG5cbiAgICB1cGRhdGVJZGxlU3RhdHVzKCk6IHZvaWQge1xuICAgICAgc3RvcENvbm5lY3RpbmcoKVxuXG4gICAgICBjdXJyZW50U3RhdGUgPSAnaWRsZSdcbiAgICAgIGN1cnJlbnRTdGF0ZVRleHQgPSAnUmVhZHknXG4gICAgICBsYXN0VG9vbFN1bW1hcnkgPSBudWxsXG4gICAgICBsYXN0VG9vbFRpbWUgPSAwXG4gICAgICBhY3RpdmVTZXNzaW9uVXJsID0gbnVsbFxuICAgICAgcmVnZW5lcmF0ZVFyKGNvbm5lY3RVcmwpXG4gICAgICByZW5kZXJTdGF0dXNMaW5lKClcbiAgICB9LFxuXG4gICAgc2V0QXR0YWNoZWQoc2Vzc2lvbklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHN0b3BDb25uZWN0aW5nKClcbiAgICAgIGN1cnJlbnRTdGF0ZSA9ICdhdHRhY2hlZCdcbiAgICAgIGN1cnJlbnRTdGF0ZVRleHQgPSAnQ29ubmVjdGVkJ1xuICAgICAgbGFzdFRvb2xTdW1tYXJ5ID0gbnVsbFxuICAgICAgbGFzdFRvb2xUaW1lID0gMFxuICAgICAgLy8gTXVsdGktc2Vzc2lvbjoga2VlcCBmb290ZXIvUVIgb24gdGhlIGVudmlyb25tZW50IGNvbm5lY3QgVVJMIHNvIHVzZXJzXG4gICAgICAvLyBjYW4gc3Bhd24gbW9yZSBzZXNzaW9ucy4gUGVyLXNlc3Npb24gbGlua3MgYXJlIGluIHRoZSBidWxsZXQgbGlzdC5cbiAgICAgIGlmIChzZXNzaW9uTWF4IDw9IDEpIHtcbiAgICAgICAgYWN0aXZlU2Vzc2lvblVybCA9IGJ1aWxkQnJpZGdlU2Vzc2lvblVybChcbiAgICAgICAgICBzZXNzaW9uSWQsXG4gICAgICAgICAgY2FjaGVkRW52aXJvbm1lbnRJZCxcbiAgICAgICAgICBjYWNoZWRJbmdyZXNzVXJsLFxuICAgICAgICApXG4gICAgICAgIHJlZ2VuZXJhdGVRcihhY3RpdmVTZXNzaW9uVXJsKVxuICAgICAgfVxuICAgICAgcmVuZGVyU3RhdHVzTGluZSgpXG4gICAgfSxcblxuICAgIHVwZGF0ZVJlY29ubmVjdGluZ1N0YXR1cyhkZWxheVN0cjogc3RyaW5nLCBlbGFwc2VkU3RyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHN0b3BDb25uZWN0aW5nKClcbiAgICAgIGNsZWFyU3RhdHVzTGluZXMoKVxuICAgICAgY3VycmVudFN0YXRlID0gJ3JlY29ubmVjdGluZydcblxuICAgICAgLy8gUVIgY29kZSBhYm92ZSB0aGUgc3RhdHVzIGxpbmVcbiAgICAgIGlmIChxclZpc2libGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBsaW5lIG9mIHFyTGluZXMpIHtcbiAgICAgICAgICB3cml0ZVN0YXR1cyhgJHtjaGFsay5kaW0obGluZSl9XFxuYClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBmcmFtZSA9XG4gICAgICAgIEJSSURHRV9TUElOTkVSX0ZSQU1FU1tjb25uZWN0aW5nVGljayAlIEJSSURHRV9TUElOTkVSX0ZSQU1FUy5sZW5ndGhdIVxuICAgICAgY29ubmVjdGluZ1RpY2srK1xuICAgICAgd3JpdGVTdGF0dXMoXG4gICAgICAgIGAke2NoYWxrLnllbGxvdyhmcmFtZSl9ICR7Y2hhbGsueWVsbG93KCdSZWNvbm5lY3RpbmcnKX0gJHtjaGFsay5kaW0oJ1xcdTAwYjcnKX0gJHtjaGFsay5kaW0oYHJldHJ5aW5nIGluICR7ZGVsYXlTdHJ9YCl9ICR7Y2hhbGsuZGltKCdcXHUwMGI3Jyl9ICR7Y2hhbGsuZGltKGBkaXNjb25uZWN0ZWQgJHtlbGFwc2VkU3RyfWApfVxcbmAsXG4gICAgICApXG4gICAgfSxcblxuICAgIHVwZGF0ZUZhaWxlZFN0YXR1cyhlcnJvcjogc3RyaW5nKTogdm9pZCB7XG4gICAgICBzdG9wQ29ubmVjdGluZygpXG4gICAgICBjbGVhclN0YXR1c0xpbmVzKClcbiAgICAgIGN1cnJlbnRTdGF0ZSA9ICdmYWlsZWQnXG5cbiAgICAgIGxldCBzdWZmaXggPSAnJ1xuICAgICAgaWYgKHJlcG9OYW1lKSB7XG4gICAgICAgIHN1ZmZpeCArPSBjaGFsay5kaW0oJyBcXHUwMGI3ICcpICsgY2hhbGsuZGltKHJlcG9OYW1lKVxuICAgICAgfVxuICAgICAgaWYgKGJyYW5jaCkge1xuICAgICAgICBzdWZmaXggKz0gY2hhbGsuZGltKCcgXFx1MDBiNyAnKSArIGNoYWxrLmRpbShicmFuY2gpXG4gICAgICB9XG5cbiAgICAgIHdyaXRlU3RhdHVzKFxuICAgICAgICBgJHtjaGFsay5yZWQoQlJJREdFX0ZBSUxFRF9JTkRJQ0FUT1IpfSAke2NoYWxrLnJlZCgnUmVtb3RlIENvbnRyb2wgRmFpbGVkJyl9JHtzdWZmaXh9XFxuYCxcbiAgICAgIClcbiAgICAgIHdyaXRlU3RhdHVzKGAke2NoYWxrLmRpbShGQUlMRURfRk9PVEVSX1RFWFQpfVxcbmApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICB3cml0ZVN0YXR1cyhgJHtjaGFsay5yZWQoZXJyb3IpfVxcbmApXG4gICAgICB9XG4gICAgfSxcblxuICAgIHVwZGF0ZVNlc3Npb25TdGF0dXMoXG4gICAgICBfc2Vzc2lvbklkOiBzdHJpbmcsXG4gICAgICBfZWxhcHNlZDogc3RyaW5nLFxuICAgICAgYWN0aXZpdHk6IFNlc3Npb25BY3Rpdml0eSxcbiAgICAgIF90cmFpbDogc3RyaW5nW10sXG4gICAgKTogdm9pZCB7XG4gICAgICAvLyBDYWNoZSB0b29sIGFjdGl2aXR5IGZvciB0aGUgc2Vjb25kIHN0YXR1cyBsaW5lXG4gICAgICBpZiAoYWN0aXZpdHkudHlwZSA9PT0gJ3Rvb2xfc3RhcnQnKSB7XG4gICAgICAgIGxhc3RUb29sU3VtbWFyeSA9IGFjdGl2aXR5LnN1bW1hcnlcbiAgICAgICAgbGFzdFRvb2xUaW1lID0gRGF0ZS5ub3coKVxuICAgICAgfVxuICAgICAgcmVuZGVyU3RhdHVzTGluZSgpXG4gICAgfSxcblxuICAgIGNsZWFyU3RhdHVzKCk6IHZvaWQge1xuICAgICAgc3RvcENvbm5lY3RpbmcoKVxuICAgICAgY2xlYXJTdGF0dXNMaW5lcygpXG4gICAgfSxcblxuICAgIHRvZ2dsZVFyKCk6IHZvaWQge1xuICAgICAgcXJWaXNpYmxlID0gIXFyVmlzaWJsZVxuICAgICAgcmVuZGVyU3RhdHVzTGluZSgpXG4gICAgfSxcblxuICAgIHVwZGF0ZVNlc3Npb25Db3VudChhY3RpdmU6IG51bWJlciwgbWF4OiBudW1iZXIsIG1vZGU6IFNwYXduTW9kZSk6IHZvaWQge1xuICAgICAgaWYgKHNlc3Npb25BY3RpdmUgPT09IGFjdGl2ZSAmJiBzZXNzaW9uTWF4ID09PSBtYXggJiYgc3Bhd25Nb2RlID09PSBtb2RlKVxuICAgICAgICByZXR1cm5cbiAgICAgIHNlc3Npb25BY3RpdmUgPSBhY3RpdmVcbiAgICAgIHNlc3Npb25NYXggPSBtYXhcbiAgICAgIHNwYXduTW9kZSA9IG1vZGVcbiAgICAgIC8vIERvbid0IHJlLXJlbmRlciBoZXJlIFx1MjAxNCB0aGUgc3RhdHVzIHRpY2tlciBjYWxscyByZW5kZXJTdGF0dXNMaW5lXG4gICAgICAvLyBvbiBpdHMgb3duIGNhZGVuY2UsIGFuZCB0aGUgbmV4dCB0aWNrIHdpbGwgcGljayB1cCB0aGUgbmV3IHZhbHVlcy5cbiAgICB9LFxuXG4gICAgc2V0U3Bhd25Nb2RlRGlzcGxheShtb2RlOiAnc2FtZS1kaXInIHwgJ3dvcmt0cmVlJyB8IG51bGwpOiB2b2lkIHtcbiAgICAgIGlmIChzcGF3bk1vZGVEaXNwbGF5ID09PSBtb2RlKSByZXR1cm5cbiAgICAgIHNwYXduTW9kZURpc3BsYXkgPSBtb2RlXG4gICAgICAvLyBBbHNvIHN5bmMgdGhlICMyMTExOC1hZGRlZCBzcGF3bk1vZGUgc28gdGhlIG5leHQgcmVuZGVyIHNob3dzIGNvcnJlY3RcbiAgICAgIC8vIG1vZGUgaGludCArIGJyYW5jaCB2aXNpYmlsaXR5LiBEb24ndCByZW5kZXIgaGVyZSBcdTIwMTQgbWF0Y2hlc1xuICAgICAgLy8gdXBkYXRlU2Vzc2lvbkNvdW50OiBjYWxsZWQgYmVmb3JlIHByaW50QmFubmVyIChpbml0aWFsIHNldHVwKSBhbmRcbiAgICAgIC8vIGFnYWluIGZyb20gdGhlIGB3YCBoYW5kbGVyICh3aGljaCBmb2xsb3dzIHdpdGggcmVmcmVzaERpc3BsYXkpLlxuICAgICAgaWYgKG1vZGUpIHNwYXduTW9kZSA9IG1vZGVcbiAgICB9LFxuXG4gICAgYWRkU2Vzc2lvbihzZXNzaW9uSWQ6IHN0cmluZywgdXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHNlc3Npb25EaXNwbGF5SW5mby5zZXQoc2Vzc2lvbklkLCB7IHVybCB9KVxuICAgIH0sXG5cbiAgICB1cGRhdGVTZXNzaW9uQWN0aXZpdHkoc2Vzc2lvbklkOiBzdHJpbmcsIGFjdGl2aXR5OiBTZXNzaW9uQWN0aXZpdHkpOiB2b2lkIHtcbiAgICAgIGNvbnN0IGluZm8gPSBzZXNzaW9uRGlzcGxheUluZm8uZ2V0KHNlc3Npb25JZClcbiAgICAgIGlmICghaW5mbykgcmV0dXJuXG4gICAgICBpbmZvLmFjdGl2aXR5ID0gYWN0aXZpdHlcbiAgICB9LFxuXG4gICAgc2V0U2Vzc2lvblRpdGxlKHNlc3Npb25JZDogc3RyaW5nLCB0aXRsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICBjb25zdCBpbmZvID0gc2Vzc2lvbkRpc3BsYXlJbmZvLmdldChzZXNzaW9uSWQpXG4gICAgICBpZiAoIWluZm8pIHJldHVyblxuICAgICAgaW5mby50aXRsZSA9IHRpdGxlXG4gICAgICAvLyBHdWFyZCBhZ2FpbnN0IHJlY29ubmVjdGluZy9mYWlsZWQgXHUyMDE0IHJlbmRlclN0YXR1c0xpbmUgY2xlYXJzIHRoZW4gcmV0dXJuc1xuICAgICAgLy8gZWFybHkgZm9yIHRob3NlIHN0YXRlcywgd2hpY2ggd291bGQgZXJhc2UgdGhlIHNwaW5uZXIvZXJyb3IuXG4gICAgICBpZiAoY3VycmVudFN0YXRlID09PSAncmVjb25uZWN0aW5nJyB8fCBjdXJyZW50U3RhdGUgPT09ICdmYWlsZWQnKSByZXR1cm5cbiAgICAgIGlmIChzZXNzaW9uTWF4ID09PSAxKSB7XG4gICAgICAgIC8vIFNpbmdsZS1zZXNzaW9uOiBzaG93IHRpdGxlIGluIHRoZSBtYWluIHN0YXR1cyBsaW5lIHRvby5cbiAgICAgICAgY3VycmVudFN0YXRlID0gJ3RpdGxlZCdcbiAgICAgICAgY3VycmVudFN0YXRlVGV4dCA9IHRydW5jYXRlUHJvbXB0KHRpdGxlLCA0MClcbiAgICAgIH1cbiAgICAgIHJlbmRlclN0YXR1c0xpbmUoKVxuICAgIH0sXG5cbiAgICByZW1vdmVTZXNzaW9uKHNlc3Npb25JZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICBzZXNzaW9uRGlzcGxheUluZm8uZGVsZXRlKHNlc3Npb25JZClcbiAgICB9LFxuXG4gICAgcmVmcmVzaERpc3BsYXkoKTogdm9pZCB7XG4gICAgICAvLyBTa2lwIGR1cmluZyByZWNvbm5lY3RpbmcvZmFpbGVkIFx1MjAxNCByZW5kZXJTdGF0dXNMaW5lIGNsZWFycyB0aGVuIHJldHVybnNcbiAgICAgIC8vIGVhcmx5IGZvciB0aG9zZSBzdGF0ZXMsIHdoaWNoIHdvdWxkIGVyYXNlIHRoZSBzcGlubmVyL2Vycm9yLlxuICAgICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gJ3JlY29ubmVjdGluZycgfHwgY3VycmVudFN0YXRlID09PSAnZmFpbGVkJykgcmV0dXJuXG4gICAgICByZW5kZXJTdGF0dXNMaW5lKClcbiAgICB9LFxuICB9XG59XG4iLCAiaW1wb3J0IHsgdHlwZSBDaGlsZFByb2Nlc3MsIHNwYXduIH0gZnJvbSAnY2hpbGRfcHJvY2VzcydcbmltcG9ydCB7IGNyZWF0ZVdyaXRlU3RyZWFtLCB0eXBlIFdyaXRlU3RyZWFtIH0gZnJvbSAnZnMnXG5pbXBvcnQgeyB0bXBkaXIgfSBmcm9tICdvcydcbmltcG9ydCB7IGRpcm5hbWUsIGpvaW4gfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgY3JlYXRlSW50ZXJmYWNlIH0gZnJvbSAncmVhZGxpbmUnXG5pbXBvcnQgeyBqc29uUGFyc2UsIGpzb25TdHJpbmdpZnkgfSBmcm9tICcuLi91dGlscy9zbG93T3BlcmF0aW9ucy5qcydcbmltcG9ydCB7IGRlYnVnVHJ1bmNhdGUgfSBmcm9tICcuL2RlYnVnVXRpbHMuanMnXG5pbXBvcnQgdHlwZSB7XG4gIFNlc3Npb25BY3Rpdml0eSxcbiAgU2Vzc2lvbkRvbmVTdGF0dXMsXG4gIFNlc3Npb25IYW5kbGUsXG4gIFNlc3Npb25TcGF3bmVyLFxuICBTZXNzaW9uU3Bhd25PcHRzLFxufSBmcm9tICcuL3R5cGVzLmpzJ1xuXG5jb25zdCBNQVhfQUNUSVZJVElFUyA9IDEwXG5jb25zdCBNQVhfU1RERVJSX0xJTkVTID0gMTBcblxuLyoqXG4gKiBTYW5pdGl6ZSBhIHNlc3Npb24gSUQgZm9yIHVzZSBpbiBmaWxlIG5hbWVzLlxuICogU3RyaXBzIGFueSBjaGFyYWN0ZXJzIHRoYXQgY291bGQgY2F1c2UgcGF0aCB0cmF2ZXJzYWwgKGUuZy4gYC4uL2AsIGAvYClcbiAqIG9yIG90aGVyIGZpbGVzeXN0ZW0gaXNzdWVzLCByZXBsYWNpbmcgdGhlbSB3aXRoIHVuZGVyc2NvcmVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2FmZUZpbGVuYW1lSWQoaWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBpZC5yZXBsYWNlKC9bXmEtekEtWjAtOV8tXS9nLCAnXycpXG59XG5cbi8qKlxuICogQSBjb250cm9sX3JlcXVlc3QgZW1pdHRlZCBieSB0aGUgY2hpbGQgQ0xJIHdoZW4gaXQgbmVlZHMgcGVybWlzc2lvbiB0b1xuICogZXhlY3V0ZSBhICoqc3BlY2lmaWMqKiB0b29sIGludm9jYXRpb24gKG5vdCBhIGdlbmVyYWwgY2FwYWJpbGl0eSBjaGVjaykuXG4gKiBUaGUgYnJpZGdlIGZvcndhcmRzIHRoaXMgdG8gdGhlIHNlcnZlciBzbyB0aGUgdXNlciBjYW4gYXBwcm92ZS9kZW55LlxuICovXG5leHBvcnQgdHlwZSBQZXJtaXNzaW9uUmVxdWVzdCA9IHtcbiAgdHlwZTogJ2NvbnRyb2xfcmVxdWVzdCdcbiAgcmVxdWVzdF9pZDogc3RyaW5nXG4gIHJlcXVlc3Q6IHtcbiAgICAvKiogUGVyLWludm9jYXRpb24gcGVybWlzc2lvbiBjaGVjayBcdTIwMTQgXCJtYXkgSSBydW4gdGhpcyB0b29sIHdpdGggdGhlc2UgaW5wdXRzP1wiICovXG4gICAgc3VidHlwZTogJ2Nhbl91c2VfdG9vbCdcbiAgICB0b29sX25hbWU6IHN0cmluZ1xuICAgIGlucHV0OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgIHRvb2xfdXNlX2lkOiBzdHJpbmdcbiAgfVxufVxuXG50eXBlIFNlc3Npb25TcGF3bmVyRGVwcyA9IHtcbiAgZXhlY1BhdGg6IHN0cmluZ1xuICAvKipcbiAgICogQXJndW1lbnRzIHRoYXQgbXVzdCBwcmVjZWRlIHRoZSBDTEkgZmxhZ3Mgd2hlbiBzcGF3bmluZy4gRW1wdHkgZm9yXG4gICAqIGNvbXBpbGVkIGJpbmFyaWVzICh3aGVyZSBleGVjUGF0aCBpcyB0aGUgY2xhdWRlIGJpbmFyeSBpdHNlbGYpOyBjb250YWluc1xuICAgKiB0aGUgc2NyaXB0IHBhdGggKHByb2Nlc3MuYXJndlsxXSkgZm9yIG5wbSBpbnN0YWxscyB3aGVyZSBleGVjUGF0aCBpcyB0aGVcbiAgICogbm9kZSBydW50aW1lLiBXaXRob3V0IHRoaXMsIG5vZGUgc2VlcyAtLXNkay11cmwgYXMgYSBub2RlIG9wdGlvbiBhbmRcbiAgICogZXhpdHMgd2l0aCBcImJhZCBvcHRpb246IC0tc2RrLXVybFwiIChzZWUgYW50aHJvcGljcy9jbGF1ZGUtY29kZSMyODMzNCkuXG4gICAqL1xuICBzY3JpcHRBcmdzOiBzdHJpbmdbXVxuICBlbnY6IE5vZGVKUy5Qcm9jZXNzRW52XG4gIHZlcmJvc2U6IGJvb2xlYW5cbiAgc2FuZGJveDogYm9vbGVhblxuICBkZWJ1Z0ZpbGU/OiBzdHJpbmdcbiAgcGVybWlzc2lvbk1vZGU/OiBzdHJpbmdcbiAgb25EZWJ1ZzogKG1zZzogc3RyaW5nKSA9PiB2b2lkXG4gIG9uQWN0aXZpdHk/OiAoc2Vzc2lvbklkOiBzdHJpbmcsIGFjdGl2aXR5OiBTZXNzaW9uQWN0aXZpdHkpID0+IHZvaWRcbiAgb25QZXJtaXNzaW9uUmVxdWVzdD86IChcbiAgICBzZXNzaW9uSWQ6IHN0cmluZyxcbiAgICByZXF1ZXN0OiBQZXJtaXNzaW9uUmVxdWVzdCxcbiAgICBhY2Nlc3NUb2tlbjogc3RyaW5nLFxuICApID0+IHZvaWRcbn1cblxuLyoqIE1hcCB0b29sIG5hbWVzIHRvIGh1bWFuLXJlYWRhYmxlIHZlcmJzIGZvciB0aGUgc3RhdHVzIGRpc3BsYXkuICovXG5jb25zdCBUT09MX1ZFUkJTOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBSZWFkOiAnUmVhZGluZycsXG4gIFdyaXRlOiAnV3JpdGluZycsXG4gIEVkaXQ6ICdFZGl0aW5nJyxcbiAgTXVsdGlFZGl0OiAnRWRpdGluZycsXG4gIEJhc2g6ICdSdW5uaW5nJyxcbiAgR2xvYjogJ1NlYXJjaGluZycsXG4gIEdyZXA6ICdTZWFyY2hpbmcnLFxuICBXZWJGZXRjaDogJ0ZldGNoaW5nJyxcbiAgV2ViU2VhcmNoOiAnU2VhcmNoaW5nJyxcbiAgVGFzazogJ1J1bm5pbmcgdGFzaycsXG4gIEZpbGVSZWFkVG9vbDogJ1JlYWRpbmcnLFxuICBGaWxlV3JpdGVUb29sOiAnV3JpdGluZycsXG4gIEZpbGVFZGl0VG9vbDogJ0VkaXRpbmcnLFxuICBHbG9iVG9vbDogJ1NlYXJjaGluZycsXG4gIEdyZXBUb29sOiAnU2VhcmNoaW5nJyxcbiAgQmFzaFRvb2w6ICdSdW5uaW5nJyxcbiAgTm90ZWJvb2tFZGl0VG9vbDogJ0VkaXRpbmcgbm90ZWJvb2snLFxuICBMU1A6ICdMU1AnLFxufVxuXG5mdW5jdGlvbiB0b29sU3VtbWFyeShuYW1lOiBzdHJpbmcsIGlucHV0OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IHN0cmluZyB7XG4gIGNvbnN0IHZlcmIgPSBUT09MX1ZFUkJTW25hbWVdID8/IG5hbWVcbiAgY29uc3QgdGFyZ2V0ID1cbiAgICAoaW5wdXQuZmlsZV9wYXRoIGFzIHN0cmluZykgPz9cbiAgICAoaW5wdXQuZmlsZVBhdGggYXMgc3RyaW5nKSA/P1xuICAgIChpbnB1dC5wYXR0ZXJuIGFzIHN0cmluZykgPz9cbiAgICAoaW5wdXQuY29tbWFuZCBhcyBzdHJpbmcgfCB1bmRlZmluZWQpPy5zbGljZSgwLCA2MCkgPz9cbiAgICAoaW5wdXQudXJsIGFzIHN0cmluZykgPz9cbiAgICAoaW5wdXQucXVlcnkgYXMgc3RyaW5nKSA/P1xuICAgICcnXG4gIGlmICh0YXJnZXQpIHtcbiAgICByZXR1cm4gYCR7dmVyYn0gJHt0YXJnZXR9YFxuICB9XG4gIHJldHVybiB2ZXJiXG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RBY3Rpdml0aWVzKFxuICBsaW5lOiBzdHJpbmcsXG4gIHNlc3Npb25JZDogc3RyaW5nLFxuICBvbkRlYnVnOiAobXNnOiBzdHJpbmcpID0+IHZvaWQsXG4pOiBTZXNzaW9uQWN0aXZpdHlbXSB7XG4gIGxldCBwYXJzZWQ6IHVua25vd25cbiAgdHJ5IHtcbiAgICBwYXJzZWQgPSBqc29uUGFyc2UobGluZSlcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICBpZiAoIXBhcnNlZCB8fCB0eXBlb2YgcGFyc2VkICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBbXVxuICB9XG5cbiAgY29uc3QgbXNnID0gcGFyc2VkIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIGNvbnN0IGFjdGl2aXRpZXM6IFNlc3Npb25BY3Rpdml0eVtdID0gW11cbiAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuXG4gIHN3aXRjaCAobXNnLnR5cGUpIHtcbiAgICBjYXNlICdhc3Npc3RhbnQnOiB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gbXNnLm1lc3NhZ2UgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCB1bmRlZmluZWRcbiAgICAgIGlmICghbWVzc2FnZSkgYnJlYWtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBtZXNzYWdlLmNvbnRlbnRcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShjb250ZW50KSkgYnJlYWtcblxuICAgICAgZm9yIChjb25zdCBibG9jayBvZiBjb250ZW50KSB7XG4gICAgICAgIGlmICghYmxvY2sgfHwgdHlwZW9mIGJsb2NrICE9PSAnb2JqZWN0JykgY29udGludWVcbiAgICAgICAgY29uc3QgYiA9IGJsb2NrIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+XG5cbiAgICAgICAgaWYgKGIudHlwZSA9PT0gJ3Rvb2xfdXNlJykge1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSAoYi5uYW1lIGFzIHN0cmluZykgPz8gJ1Rvb2wnXG4gICAgICAgICAgY29uc3QgaW5wdXQgPSAoYi5pbnB1dCBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikgPz8ge31cbiAgICAgICAgICBjb25zdCBzdW1tYXJ5ID0gdG9vbFN1bW1hcnkobmFtZSwgaW5wdXQpXG4gICAgICAgICAgYWN0aXZpdGllcy5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICd0b29sX3N0YXJ0JyxcbiAgICAgICAgICAgIHN1bW1hcnksXG4gICAgICAgICAgICB0aW1lc3RhbXA6IG5vdyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIG9uRGVidWcoXG4gICAgICAgICAgICBgW2JyaWRnZTphY3Rpdml0eV0gc2Vzc2lvbklkPSR7c2Vzc2lvbklkfSB0b29sX3VzZSBuYW1lPSR7bmFtZX0gJHtpbnB1dFByZXZpZXcoaW5wdXQpfWAsXG4gICAgICAgICAgKVxuICAgICAgICB9IGVsc2UgaWYgKGIudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgY29uc3QgdGV4dCA9IChiLnRleHQgYXMgc3RyaW5nKSA/PyAnJ1xuICAgICAgICAgIGlmICh0ZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGFjdGl2aXRpZXMucHVzaCh7XG4gICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgc3VtbWFyeTogdGV4dC5zbGljZSgwLCA4MCksXG4gICAgICAgICAgICAgIHRpbWVzdGFtcDogbm93LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIG9uRGVidWcoXG4gICAgICAgICAgICAgIGBbYnJpZGdlOmFjdGl2aXR5XSBzZXNzaW9uSWQ9JHtzZXNzaW9uSWR9IHRleHQgXCIke3RleHQuc2xpY2UoMCwgMTAwKX1cImAsXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBicmVha1xuICAgIH1cbiAgICBjYXNlICdyZXN1bHQnOiB7XG4gICAgICBjb25zdCBzdWJ0eXBlID0gbXNnLnN1YnR5cGUgYXMgc3RyaW5nIHwgdW5kZWZpbmVkXG4gICAgICBpZiAoc3VidHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgIGFjdGl2aXRpZXMucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ3Jlc3VsdCcsXG4gICAgICAgICAgc3VtbWFyeTogJ1Nlc3Npb24gY29tcGxldGVkJyxcbiAgICAgICAgICB0aW1lc3RhbXA6IG5vdyxcbiAgICAgICAgfSlcbiAgICAgICAgb25EZWJ1ZyhcbiAgICAgICAgICBgW2JyaWRnZTphY3Rpdml0eV0gc2Vzc2lvbklkPSR7c2Vzc2lvbklkfSByZXN1bHQgc3VidHlwZT1zdWNjZXNzYCxcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIGlmIChzdWJ0eXBlKSB7XG4gICAgICAgIGNvbnN0IGVycm9ycyA9IG1zZy5lcnJvcnMgYXMgc3RyaW5nW10gfCB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgZXJyb3JTdW1tYXJ5ID0gZXJyb3JzPy5bMF0gPz8gYEVycm9yOiAke3N1YnR5cGV9YFxuICAgICAgICBhY3Rpdml0aWVzLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgc3VtbWFyeTogZXJyb3JTdW1tYXJ5LFxuICAgICAgICAgIHRpbWVzdGFtcDogbm93LFxuICAgICAgICB9KVxuICAgICAgICBvbkRlYnVnKFxuICAgICAgICAgIGBbYnJpZGdlOmFjdGl2aXR5XSBzZXNzaW9uSWQ9JHtzZXNzaW9uSWR9IHJlc3VsdCBzdWJ0eXBlPSR7c3VidHlwZX0gZXJyb3I9XCIke2Vycm9yU3VtbWFyeX1cImAsXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uRGVidWcoXG4gICAgICAgICAgYFticmlkZ2U6YWN0aXZpdHldIHNlc3Npb25JZD0ke3Nlc3Npb25JZH0gcmVzdWx0IHN1YnR5cGU9dW5kZWZpbmVkYCxcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrXG4gIH1cblxuICByZXR1cm4gYWN0aXZpdGllc1xufVxuXG4vKipcbiAqIEV4dHJhY3QgcGxhaW4gdGV4dCBmcm9tIGEgcmVwbGF5ZWQgU0RLVXNlck1lc3NhZ2UgTkRKU09OIGxpbmUuIFJldHVybnMgdGhlXG4gKiB0cmltbWVkIHRleHQgaWYgdGhpcyBsb29rcyBsaWtlIGEgcmVhbCBodW1hbi1hdXRob3JlZCBtZXNzYWdlLCBvdGhlcndpc2VcbiAqIHVuZGVmaW5lZCBzbyB0aGUgY2FsbGVyIGtlZXBzIHdhaXRpbmcgZm9yIHRoZSBmaXJzdCByZWFsIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIGV4dHJhY3RVc2VyTWVzc2FnZVRleHQoXG4gIG1zZzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAvLyBTa2lwIHRvb2wtcmVzdWx0IHVzZXIgbWVzc2FnZXMgKHdyYXBwZWQgc3ViYWdlbnQgcmVzdWx0cykgYW5kIHN5bnRoZXRpY1xuICAvLyBjYXZlYXQgbWVzc2FnZXMgXHUyMDE0IG5laXRoZXIgaXMgaHVtYW4tYXV0aG9yZWQuXG4gIGlmIChtc2cucGFyZW50X3Rvb2xfdXNlX2lkICE9IG51bGwgfHwgbXNnLmlzU3ludGhldGljIHx8IG1zZy5pc1JlcGxheSlcbiAgICByZXR1cm4gdW5kZWZpbmVkXG5cbiAgY29uc3QgbWVzc2FnZSA9IG1zZy5tZXNzYWdlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5kZWZpbmVkXG4gIGNvbnN0IGNvbnRlbnQgPSBtZXNzYWdlPy5jb250ZW50XG4gIGxldCB0ZXh0OiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgIHRleHQgPSBjb250ZW50XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjb250ZW50KSkge1xuICAgIGZvciAoY29uc3QgYmxvY2sgb2YgY29udGVudCkge1xuICAgICAgaWYgKFxuICAgICAgICBibG9jayAmJlxuICAgICAgICB0eXBlb2YgYmxvY2sgPT09ICdvYmplY3QnICYmXG4gICAgICAgIChibG9jayBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikudHlwZSA9PT0gJ3RleHQnXG4gICAgICApIHtcbiAgICAgICAgdGV4dCA9IChibG9jayBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikudGV4dCBhcyBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdGV4dCA9IHRleHQ/LnRyaW0oKVxuICByZXR1cm4gdGV4dCA/IHRleHQgOiB1bmRlZmluZWRcbn1cblxuLyoqIEJ1aWxkIGEgc2hvcnQgcHJldmlldyBvZiB0b29sIGlucHV0IGZvciBkZWJ1ZyBsb2dnaW5nLiAqL1xuZnVuY3Rpb24gaW5wdXRQcmV2aWV3KGlucHV0OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IHN0cmluZyB7XG4gIGNvbnN0IHBhcnRzOiBzdHJpbmdbXSA9IFtdXG4gIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyhpbnB1dCkpIHtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhcnRzLnB1c2goYCR7a2V5fT1cIiR7dmFsLnNsaWNlKDAsIDEwMCl9XCJgKVxuICAgIH1cbiAgICBpZiAocGFydHMubGVuZ3RoID49IDMpIGJyZWFrXG4gIH1cbiAgcmV0dXJuIHBhcnRzLmpvaW4oJyAnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2Vzc2lvblNwYXduZXIoZGVwczogU2Vzc2lvblNwYXduZXJEZXBzKTogU2Vzc2lvblNwYXduZXIge1xuICByZXR1cm4ge1xuICAgIHNwYXduKG9wdHM6IFNlc3Npb25TcGF3bk9wdHMsIGRpcjogc3RyaW5nKTogU2Vzc2lvbkhhbmRsZSB7XG4gICAgICAvLyBEZWJ1ZyBmaWxlIHJlc29sdXRpb246XG4gICAgICAvLyAxLiBJZiBkZXBzLmRlYnVnRmlsZSBpcyBwcm92aWRlZCwgdXNlIGl0IHdpdGggc2Vzc2lvbiBJRCBzdWZmaXggZm9yIHVuaXF1ZW5lc3NcbiAgICAgIC8vIDIuIElmIHZlcmJvc2Ugb3IgYW50IGJ1aWxkLCBhdXRvLWdlbmVyYXRlIGEgdGVtcCBmaWxlIHBhdGhcbiAgICAgIC8vIDMuIE90aGVyd2lzZSwgbm8gZGVidWcgZmlsZVxuICAgICAgY29uc3Qgc2FmZUlkID0gc2FmZUZpbGVuYW1lSWQob3B0cy5zZXNzaW9uSWQpXG4gICAgICBsZXQgZGVidWdGaWxlOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICAgIGlmIChkZXBzLmRlYnVnRmlsZSkge1xuICAgICAgICBjb25zdCBleHQgPSBkZXBzLmRlYnVnRmlsZS5sYXN0SW5kZXhPZignLicpXG4gICAgICAgIGlmIChleHQgPiAwKSB7XG4gICAgICAgICAgZGVidWdGaWxlID0gYCR7ZGVwcy5kZWJ1Z0ZpbGUuc2xpY2UoMCwgZXh0KX0tJHtzYWZlSWR9JHtkZXBzLmRlYnVnRmlsZS5zbGljZShleHQpfWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWJ1Z0ZpbGUgPSBgJHtkZXBzLmRlYnVnRmlsZX0tJHtzYWZlSWR9YFxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGRlcHMudmVyYm9zZSB8fCBwcm9jZXNzLmVudi5VU0VSX1RZUEUgPT09ICdhbnQnKSB7XG4gICAgICAgIGRlYnVnRmlsZSA9IGpvaW4odG1wZGlyKCksICdjbGF1ZGUnLCBgYnJpZGdlLXNlc3Npb24tJHtzYWZlSWR9LmxvZ2ApXG4gICAgICB9XG5cbiAgICAgIC8vIFRyYW5zY3JpcHQgZmlsZTogd3JpdGUgcmF3IE5ESlNPTiBsaW5lcyBmb3IgcG9zdC1ob2MgYW5hbHlzaXMuXG4gICAgICAvLyBQbGFjZWQgYWxvbmdzaWRlIHRoZSBkZWJ1ZyBmaWxlIHdoZW4gb25lIGlzIGNvbmZpZ3VyZWQuXG4gICAgICBsZXQgdHJhbnNjcmlwdFN0cmVhbTogV3JpdGVTdHJlYW0gfCBudWxsID0gbnVsbFxuICAgICAgbGV0IHRyYW5zY3JpcHRQYXRoOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICAgIGlmIChkZXBzLmRlYnVnRmlsZSkge1xuICAgICAgICB0cmFuc2NyaXB0UGF0aCA9IGpvaW4oXG4gICAgICAgICAgZGlybmFtZShkZXBzLmRlYnVnRmlsZSksXG4gICAgICAgICAgYGJyaWRnZS10cmFuc2NyaXB0LSR7c2FmZUlkfS5qc29ubGAsXG4gICAgICAgIClcbiAgICAgICAgdHJhbnNjcmlwdFN0cmVhbSA9IGNyZWF0ZVdyaXRlU3RyZWFtKHRyYW5zY3JpcHRQYXRoLCB7IGZsYWdzOiAnYScgfSlcbiAgICAgICAgdHJhbnNjcmlwdFN0cmVhbS5vbignZXJyb3InLCBlcnIgPT4ge1xuICAgICAgICAgIGRlcHMub25EZWJ1ZyhcbiAgICAgICAgICAgIGBbYnJpZGdlOnNlc3Npb25dIFRyYW5zY3JpcHQgd3JpdGUgZXJyb3I6ICR7ZXJyLm1lc3NhZ2V9YCxcbiAgICAgICAgICApXG4gICAgICAgICAgdHJhbnNjcmlwdFN0cmVhbSA9IG51bGxcbiAgICAgICAgfSlcbiAgICAgICAgZGVwcy5vbkRlYnVnKGBbYnJpZGdlOnNlc3Npb25dIFRyYW5zY3JpcHQgbG9nOiAke3RyYW5zY3JpcHRQYXRofWApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFyZ3MgPSBbXG4gICAgICAgIC4uLmRlcHMuc2NyaXB0QXJncyxcbiAgICAgICAgJy0tcHJpbnQnLFxuICAgICAgICAnLS1zZGstdXJsJyxcbiAgICAgICAgb3B0cy5zZGtVcmwsXG4gICAgICAgICctLXNlc3Npb24taWQnLFxuICAgICAgICBvcHRzLnNlc3Npb25JZCxcbiAgICAgICAgJy0taW5wdXQtZm9ybWF0JyxcbiAgICAgICAgJ3N0cmVhbS1qc29uJyxcbiAgICAgICAgJy0tb3V0cHV0LWZvcm1hdCcsXG4gICAgICAgICdzdHJlYW0tanNvbicsXG4gICAgICAgICctLXJlcGxheS11c2VyLW1lc3NhZ2VzJyxcbiAgICAgICAgLi4uKGRlcHMudmVyYm9zZSA/IFsnLS12ZXJib3NlJ10gOiBbXSksXG4gICAgICAgIC4uLihkZWJ1Z0ZpbGUgPyBbJy0tZGVidWctZmlsZScsIGRlYnVnRmlsZV0gOiBbXSksXG4gICAgICAgIC4uLihkZXBzLnBlcm1pc3Npb25Nb2RlXG4gICAgICAgICAgPyBbJy0tcGVybWlzc2lvbi1tb2RlJywgZGVwcy5wZXJtaXNzaW9uTW9kZV1cbiAgICAgICAgICA6IFtdKSxcbiAgICAgIF1cblxuICAgICAgY29uc3QgZW52OiBOb2RlSlMuUHJvY2Vzc0VudiA9IHtcbiAgICAgICAgLi4uZGVwcy5lbnYsXG4gICAgICAgIC8vIFN0cmlwIHRoZSBicmlkZ2UncyBPQXV0aCB0b2tlbiBzbyB0aGUgY2hpbGQgQ0MgcHJvY2VzcyB1c2VzXG4gICAgICAgIC8vIHRoZSBzZXNzaW9uIGFjY2VzcyB0b2tlbiBmb3IgaW5mZXJlbmNlIGluc3RlYWQuXG4gICAgICAgIENMQVVERV9DT0RFX09BVVRIX1RPS0VOOiB1bmRlZmluZWQsXG4gICAgICAgIENMQVVERV9DT0RFX0VOVklST05NRU5UX0tJTkQ6ICdicmlkZ2UnLFxuICAgICAgICAuLi4oZGVwcy5zYW5kYm94ICYmIHsgQ0xBVURFX0NPREVfRk9SQ0VfU0FOREJPWDogJzEnIH0pLFxuICAgICAgICBDTEFVREVfQ09ERV9TRVNTSU9OX0FDQ0VTU19UT0tFTjogb3B0cy5hY2Nlc3NUb2tlbixcbiAgICAgICAgLy8gdjE6IEh5YnJpZFRyYW5zcG9ydCAoV1MgcmVhZHMgKyBQT1NUIHdyaXRlcykgdG8gU2Vzc2lvbi1JbmdyZXNzLlxuICAgICAgICAvLyBIYXJtbGVzcyBpbiB2MiBtb2RlIFx1MjAxNCB0cmFuc3BvcnRVdGlscyBjaGVja3MgQ0xBVURFX0NPREVfVVNFX0NDUl9WMiBmaXJzdC5cbiAgICAgICAgQ0xBVURFX0NPREVfUE9TVF9GT1JfU0VTU0lPTl9JTkdSRVNTX1YyOiAnMScsXG4gICAgICAgIC8vIHYyOiBTU0VUcmFuc3BvcnQgKyBDQ1JDbGllbnQgdG8gQ0NSJ3MgL3YxL2NvZGUvc2Vzc2lvbnMvKiBlbmRwb2ludHMuXG4gICAgICAgIC8vIFNhbWUgZW52IHZhcnMgZW52aXJvbm1lbnQtbWFuYWdlciBzZXRzIGluIHRoZSBjb250YWluZXIgcGF0aC5cbiAgICAgICAgLi4uKG9wdHMudXNlQ2NyVjIgJiYge1xuICAgICAgICAgIENMQVVERV9DT0RFX1VTRV9DQ1JfVjI6ICcxJyxcbiAgICAgICAgICBDTEFVREVfQ09ERV9XT1JLRVJfRVBPQ0g6IFN0cmluZyhvcHRzLndvcmtlckVwb2NoKSxcbiAgICAgICAgfSksXG4gICAgICB9XG5cbiAgICAgIGRlcHMub25EZWJ1ZyhcbiAgICAgICAgYFticmlkZ2U6c2Vzc2lvbl0gU3Bhd25pbmcgc2Vzc2lvbklkPSR7b3B0cy5zZXNzaW9uSWR9IHNka1VybD0ke29wdHMuc2RrVXJsfSBhY2Nlc3NUb2tlbj0ke29wdHMuYWNjZXNzVG9rZW4gPyAncHJlc2VudCcgOiAnTUlTU0lORyd9YCxcbiAgICAgIClcbiAgICAgIGRlcHMub25EZWJ1ZyhgW2JyaWRnZTpzZXNzaW9uXSBDaGlsZCBhcmdzOiAke2FyZ3Muam9pbignICcpfWApXG4gICAgICBpZiAoZGVidWdGaWxlKSB7XG4gICAgICAgIGRlcHMub25EZWJ1ZyhgW2JyaWRnZTpzZXNzaW9uXSBEZWJ1ZyBsb2c6ICR7ZGVidWdGaWxlfWApXG4gICAgICB9XG5cbiAgICAgIC8vIFBpcGUgYWxsIHRocmVlIHN0cmVhbXM6IHN0ZGluIGZvciBjb250cm9sLCBzdGRvdXQgZm9yIE5ESlNPTiBwYXJzaW5nLFxuICAgICAgLy8gc3RkZXJyIGZvciBlcnJvciBjYXB0dXJlIGFuZCBkaWFnbm9zdGljcy5cbiAgICAgIGNvbnN0IGNoaWxkOiBDaGlsZFByb2Nlc3MgPSBzcGF3bihkZXBzLmV4ZWNQYXRoLCBhcmdzLCB7XG4gICAgICAgIGN3ZDogZGlyLFxuICAgICAgICBzdGRpbzogWydwaXBlJywgJ3BpcGUnLCAncGlwZSddLFxuICAgICAgICBlbnYsXG4gICAgICAgIHdpbmRvd3NIaWRlOiB0cnVlLFxuICAgICAgfSlcblxuICAgICAgZGVwcy5vbkRlYnVnKFxuICAgICAgICBgW2JyaWRnZTpzZXNzaW9uXSBzZXNzaW9uSWQ9JHtvcHRzLnNlc3Npb25JZH0gcGlkPSR7Y2hpbGQucGlkfWAsXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGFjdGl2aXRpZXM6IFNlc3Npb25BY3Rpdml0eVtdID0gW11cbiAgICAgIGxldCBjdXJyZW50QWN0aXZpdHk6IFNlc3Npb25BY3Rpdml0eSB8IG51bGwgPSBudWxsXG4gICAgICBjb25zdCBsYXN0U3RkZXJyOiBzdHJpbmdbXSA9IFtdXG4gICAgICBsZXQgc2lna2lsbFNlbnQgPSBmYWxzZVxuICAgICAgbGV0IGZpcnN0VXNlck1lc3NhZ2VTZWVuID0gZmFsc2VcblxuICAgICAgLy8gQnVmZmVyIHN0ZGVyciBmb3IgZXJyb3IgZGlhZ25vc3RpY3NcbiAgICAgIGlmIChjaGlsZC5zdGRlcnIpIHtcbiAgICAgICAgY29uc3Qgc3RkZXJyUmwgPSBjcmVhdGVJbnRlcmZhY2UoeyBpbnB1dDogY2hpbGQuc3RkZXJyIH0pXG4gICAgICAgIHN0ZGVyclJsLm9uKCdsaW5lJywgbGluZSA9PiB7XG4gICAgICAgICAgLy8gRm9yd2FyZCBzdGRlcnIgdG8gYnJpZGdlJ3Mgc3RkZXJyIGluIHZlcmJvc2UgbW9kZVxuICAgICAgICAgIGlmIChkZXBzLnZlcmJvc2UpIHtcbiAgICAgICAgICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKGxpbmUgKyAnXFxuJylcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gUmluZyBidWZmZXIgb2YgbGFzdCBOIGxpbmVzXG4gICAgICAgICAgaWYgKGxhc3RTdGRlcnIubGVuZ3RoID49IE1BWF9TVERFUlJfTElORVMpIHtcbiAgICAgICAgICAgIGxhc3RTdGRlcnIuc2hpZnQoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBsYXN0U3RkZXJyLnB1c2gobGluZSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgLy8gUGFyc2UgTkRKU09OIGZyb20gY2hpbGQgc3Rkb3V0XG4gICAgICBpZiAoY2hpbGQuc3Rkb3V0KSB7XG4gICAgICAgIGNvbnN0IHJsID0gY3JlYXRlSW50ZXJmYWNlKHsgaW5wdXQ6IGNoaWxkLnN0ZG91dCB9KVxuICAgICAgICBybC5vbignbGluZScsIGxpbmUgPT4ge1xuICAgICAgICAgIC8vIFdyaXRlIHJhdyBOREpTT04gdG8gdHJhbnNjcmlwdCBmaWxlXG4gICAgICAgICAgaWYgKHRyYW5zY3JpcHRTdHJlYW0pIHtcbiAgICAgICAgICAgIHRyYW5zY3JpcHRTdHJlYW0ud3JpdGUobGluZSArICdcXG4nKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIExvZyBhbGwgbWVzc2FnZXMgZmxvd2luZyBmcm9tIHRoZSBjaGlsZCBDTEkgdG8gdGhlIGJyaWRnZVxuICAgICAgICAgIGRlcHMub25EZWJ1ZyhcbiAgICAgICAgICAgIGBbYnJpZGdlOndzXSBzZXNzaW9uSWQ9JHtvcHRzLnNlc3Npb25JZH0gPDw8ICR7ZGVidWdUcnVuY2F0ZShsaW5lKX1gLFxuICAgICAgICAgIClcblxuICAgICAgICAgIC8vIEluIHZlcmJvc2UgbW9kZSwgZm9yd2FyZCByYXcgb3V0cHV0IHRvIHN0ZGVyclxuICAgICAgICAgIGlmIChkZXBzLnZlcmJvc2UpIHtcbiAgICAgICAgICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKGxpbmUgKyAnXFxuJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBleHRyYWN0ZWQgPSBleHRyYWN0QWN0aXZpdGllcyhcbiAgICAgICAgICAgIGxpbmUsXG4gICAgICAgICAgICBvcHRzLnNlc3Npb25JZCxcbiAgICAgICAgICAgIGRlcHMub25EZWJ1ZyxcbiAgICAgICAgICApXG4gICAgICAgICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiBleHRyYWN0ZWQpIHtcbiAgICAgICAgICAgIC8vIE1haW50YWluIHJpbmcgYnVmZmVyXG4gICAgICAgICAgICBpZiAoYWN0aXZpdGllcy5sZW5ndGggPj0gTUFYX0FDVElWSVRJRVMpIHtcbiAgICAgICAgICAgICAgYWN0aXZpdGllcy5zaGlmdCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhY3Rpdml0aWVzLnB1c2goYWN0aXZpdHkpXG4gICAgICAgICAgICBjdXJyZW50QWN0aXZpdHkgPSBhY3Rpdml0eVxuXG4gICAgICAgICAgICBkZXBzLm9uQWN0aXZpdHk/LihvcHRzLnNlc3Npb25JZCwgYWN0aXZpdHkpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRGV0ZWN0IGNvbnRyb2xfcmVxdWVzdCBhbmQgcmVwbGF5ZWQgdXNlciBtZXNzYWdlcy5cbiAgICAgICAgICAvLyBleHRyYWN0QWN0aXZpdGllcyBwYXJzZXMgdGhlIHNhbWUgbGluZSBidXQgc3dhbGxvd3MgcGFyc2UgZXJyb3JzXG4gICAgICAgICAgLy8gYW5kIHNraXBzICd1c2VyJyB0eXBlIFx1MjAxNCByZS1wYXJzZSBoZXJlIGlzIGNoZWFwIChOREpTT04gbGluZXMgYXJlXG4gICAgICAgICAgLy8gc21hbGwpIGFuZCBrZWVwcyBlYWNoIHBhdGggc2VsZi1jb250YWluZWQuXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGV0IHBhcnNlZDogdW5rbm93blxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgcGFyc2VkID0ganNvblBhcnNlKGxpbmUpXG4gICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgLy8gTm9uLUpTT04gbGluZSwgc2tpcCBkZXRlY3Rpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJzZWQgJiYgdHlwZW9mIHBhcnNlZCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgY29uc3QgbXNnID0gcGFyc2VkIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+XG5cbiAgICAgICAgICAgICAgaWYgKG1zZy50eXBlID09PSAnY29udHJvbF9yZXF1ZXN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBtc2cucmVxdWVzdCBhc1xuICAgICAgICAgICAgICAgICAgfCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgICAgICAgICAgICAgICAgfCB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICByZXF1ZXN0Py5zdWJ0eXBlID09PSAnY2FuX3VzZV90b29sJyAmJlxuICAgICAgICAgICAgICAgICAgZGVwcy5vblBlcm1pc3Npb25SZXF1ZXN0XG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICBkZXBzLm9uUGVybWlzc2lvblJlcXVlc3QoXG4gICAgICAgICAgICAgICAgICAgIG9wdHMuc2Vzc2lvbklkLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZWQgYXMgUGVybWlzc2lvblJlcXVlc3QsXG4gICAgICAgICAgICAgICAgICAgIG9wdHMuYWNjZXNzVG9rZW4sXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGludGVycnVwdCBpcyB0dXJuLWxldmVsOyB0aGUgY2hpbGQgaGFuZGxlcyBpdCBpbnRlcm5hbGx5IChwcmludC50cylcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICBtc2cudHlwZSA9PT0gJ3VzZXInICYmXG4gICAgICAgICAgICAgICAgIWZpcnN0VXNlck1lc3NhZ2VTZWVuICYmXG4gICAgICAgICAgICAgICAgb3B0cy5vbkZpcnN0VXNlck1lc3NhZ2VcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IGV4dHJhY3RVc2VyTWVzc2FnZVRleHQobXNnKVxuICAgICAgICAgICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICBmaXJzdFVzZXJNZXNzYWdlU2VlbiA9IHRydWVcbiAgICAgICAgICAgICAgICAgIG9wdHMub25GaXJzdFVzZXJNZXNzYWdlKHRleHQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkb25lID0gbmV3IFByb21pc2U8U2Vzc2lvbkRvbmVTdGF0dXM+KHJlc29sdmUgPT4ge1xuICAgICAgICBjaGlsZC5vbignY2xvc2UnLCAoY29kZSwgc2lnbmFsKSA9PiB7XG4gICAgICAgICAgLy8gQ2xvc2UgdHJhbnNjcmlwdCBzdHJlYW0gb24gZXhpdFxuICAgICAgICAgIGlmICh0cmFuc2NyaXB0U3RyZWFtKSB7XG4gICAgICAgICAgICB0cmFuc2NyaXB0U3RyZWFtLmVuZCgpXG4gICAgICAgICAgICB0cmFuc2NyaXB0U3RyZWFtID0gbnVsbFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzaWduYWwgPT09ICdTSUdURVJNJyB8fCBzaWduYWwgPT09ICdTSUdJTlQnKSB7XG4gICAgICAgICAgICBkZXBzLm9uRGVidWcoXG4gICAgICAgICAgICAgIGBbYnJpZGdlOnNlc3Npb25dIHNlc3Npb25JZD0ke29wdHMuc2Vzc2lvbklkfSBpbnRlcnJ1cHRlZCBzaWduYWw9JHtzaWduYWx9IHBpZD0ke2NoaWxkLnBpZH1gLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgcmVzb2x2ZSgnaW50ZXJydXB0ZWQnKVxuICAgICAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gMCkge1xuICAgICAgICAgICAgZGVwcy5vbkRlYnVnKFxuICAgICAgICAgICAgICBgW2JyaWRnZTpzZXNzaW9uXSBzZXNzaW9uSWQ9JHtvcHRzLnNlc3Npb25JZH0gY29tcGxldGVkIGV4aXRfY29kZT0wIHBpZD0ke2NoaWxkLnBpZH1gLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgcmVzb2x2ZSgnY29tcGxldGVkJylcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVwcy5vbkRlYnVnKFxuICAgICAgICAgICAgICBgW2JyaWRnZTpzZXNzaW9uXSBzZXNzaW9uSWQ9JHtvcHRzLnNlc3Npb25JZH0gZmFpbGVkIGV4aXRfY29kZT0ke2NvZGV9IHBpZD0ke2NoaWxkLnBpZH1gLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgcmVzb2x2ZSgnZmFpbGVkJylcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY2hpbGQub24oJ2Vycm9yJywgZXJyID0+IHtcbiAgICAgICAgICBkZXBzLm9uRGVidWcoXG4gICAgICAgICAgICBgW2JyaWRnZTpzZXNzaW9uXSBzZXNzaW9uSWQ9JHtvcHRzLnNlc3Npb25JZH0gc3Bhd24gZXJyb3I6ICR7ZXJyLm1lc3NhZ2V9YCxcbiAgICAgICAgICApXG4gICAgICAgICAgcmVzb2x2ZSgnZmFpbGVkJylcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGhhbmRsZTogU2Vzc2lvbkhhbmRsZSA9IHtcbiAgICAgICAgc2Vzc2lvbklkOiBvcHRzLnNlc3Npb25JZCxcbiAgICAgICAgZG9uZSxcbiAgICAgICAgYWN0aXZpdGllcyxcbiAgICAgICAgYWNjZXNzVG9rZW46IG9wdHMuYWNjZXNzVG9rZW4sXG4gICAgICAgIGxhc3RTdGRlcnIsXG4gICAgICAgIGdldCBjdXJyZW50QWN0aXZpdHkoKTogU2Vzc2lvbkFjdGl2aXR5IHwgbnVsbCB7XG4gICAgICAgICAgcmV0dXJuIGN1cnJlbnRBY3Rpdml0eVxuICAgICAgICB9LFxuICAgICAgICBraWxsKCk6IHZvaWQge1xuICAgICAgICAgIGlmICghY2hpbGQua2lsbGVkKSB7XG4gICAgICAgICAgICBkZXBzLm9uRGVidWcoXG4gICAgICAgICAgICAgIGBbYnJpZGdlOnNlc3Npb25dIFNlbmRpbmcgU0lHVEVSTSB0byBzZXNzaW9uSWQ9JHtvcHRzLnNlc3Npb25JZH0gcGlkPSR7Y2hpbGQucGlkfWAsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAvLyBPbiBXaW5kb3dzLCBjaGlsZC5raWxsKCdTSUdURVJNJykgdGhyb3dzOyB1c2UgZGVmYXVsdCBzaWduYWwuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJykge1xuICAgICAgICAgICAgICBjaGlsZC5raWxsKClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNoaWxkLmtpbGwoJ1NJR1RFUk0nKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZm9yY2VLaWxsKCk6IHZvaWQge1xuICAgICAgICAgIC8vIFVzZSBzZXBhcmF0ZSBmbGFnIGJlY2F1c2UgY2hpbGQua2lsbGVkIGlzIHNldCB3aGVuIGtpbGwoKSBpcyBjYWxsZWQsXG4gICAgICAgICAgLy8gbm90IHdoZW4gdGhlIHByb2Nlc3MgZXhpdHMuIFdlIG5lZWQgdG8gc2VuZCBTSUdLSUxMIGV2ZW4gYWZ0ZXIgU0lHVEVSTS5cbiAgICAgICAgICBpZiAoIXNpZ2tpbGxTZW50ICYmIGNoaWxkLnBpZCkge1xuICAgICAgICAgICAgc2lna2lsbFNlbnQgPSB0cnVlXG4gICAgICAgICAgICBkZXBzLm9uRGVidWcoXG4gICAgICAgICAgICAgIGBbYnJpZGdlOnNlc3Npb25dIFNlbmRpbmcgU0lHS0lMTCB0byBzZXNzaW9uSWQ9JHtvcHRzLnNlc3Npb25JZH0gcGlkPSR7Y2hpbGQucGlkfWAsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJykge1xuICAgICAgICAgICAgICBjaGlsZC5raWxsKClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNoaWxkLmtpbGwoJ1NJR0tJTEwnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGVTdGRpbihkYXRhOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgICBpZiAoY2hpbGQuc3RkaW4gJiYgIWNoaWxkLnN0ZGluLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgZGVwcy5vbkRlYnVnKFxuICAgICAgICAgICAgICBgW2JyaWRnZTp3c10gc2Vzc2lvbklkPSR7b3B0cy5zZXNzaW9uSWR9ID4+PiAke2RlYnVnVHJ1bmNhdGUoZGF0YSl9YCxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNoaWxkLnN0ZGluLndyaXRlKGRhdGEpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVBY2Nlc3NUb2tlbih0b2tlbjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgICAgaGFuZGxlLmFjY2Vzc1Rva2VuID0gdG9rZW5cbiAgICAgICAgICAvLyBTZW5kIHRoZSBmcmVzaCB0b2tlbiB0byB0aGUgY2hpbGQgcHJvY2VzcyB2aWEgc3RkaW4uIFRoZSBjaGlsZCdzXG4gICAgICAgICAgLy8gU3RydWN0dXJlZElPIGhhbmRsZXMgdXBkYXRlX2Vudmlyb25tZW50X3ZhcmlhYmxlcyBtZXNzYWdlcyBieVxuICAgICAgICAgIC8vIHNldHRpbmcgcHJvY2Vzcy5lbnYgZGlyZWN0bHksIHNvIGdldFNlc3Npb25JbmdyZXNzQXV0aFRva2VuKClcbiAgICAgICAgICAvLyBwaWNrcyB1cCB0aGUgbmV3IHRva2VuIG9uIHRoZSBuZXh0IHJlZnJlc2hIZWFkZXJzIGNhbGwuXG4gICAgICAgICAgaGFuZGxlLndyaXRlU3RkaW4oXG4gICAgICAgICAgICBqc29uU3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgdHlwZTogJ3VwZGF0ZV9lbnZpcm9ubWVudF92YXJpYWJsZXMnLFxuICAgICAgICAgICAgICB2YXJpYWJsZXM6IHsgQ0xBVURFX0NPREVfU0VTU0lPTl9BQ0NFU1NfVE9LRU46IHRva2VuIH0sXG4gICAgICAgICAgICB9KSArICdcXG4nLFxuICAgICAgICAgIClcbiAgICAgICAgICBkZXBzLm9uRGVidWcoXG4gICAgICAgICAgICBgW2JyaWRnZTpzZXNzaW9uXSBTZW50IHRva2VuIHJlZnJlc2ggdmlhIHN0ZGluIGZvciBzZXNzaW9uSWQ9JHtvcHRzLnNlc3Npb25JZH1gLFxuICAgICAgICAgIClcbiAgICAgICAgfSxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGhhbmRsZVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IHsgZXh0cmFjdEFjdGl2aXRpZXMgYXMgX2V4dHJhY3RBY3Rpdml0aWVzRm9yVGVzdGluZyB9XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQTVCQSxTQUFTLGtCQUFrQjtBQUMzQixTQUFTLFVBQVUsVUFBQUEsZUFBYztBQUNqQyxTQUFTLFVBQVUsUUFBQUMsT0FBTSxlQUFlOzs7QUNIeEM7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBb0JBLElBQU0sYUFBYTtBQUFBLEVBQ2pCLE1BQU07QUFBQSxFQUNOLHNCQUFzQjtBQUFBLEVBQ3RCLE9BQU87QUFDVDtBQUdBLGVBQWUsV0FBVyxLQUFnQztBQUN4RCxRQUFNLEtBQUssTUFBTSxTQUFXLEtBQUssVUFBVTtBQUMzQyxTQUFPLEdBQUcsTUFBTSxJQUFJLEVB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QUcsQ0FBQyxFQUFFO0FBQUEsSUFDckU7QUFBQSxFQUNGO0FBRUEsUUFBTTtBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0EsWUFBWSxLQUFLLGVBQWU7QUFBQSxFQUNsQztBQUNGO0FBR0EsU0FBUywyQkFBMkIsS0FBd0M7QUFDMUUsUUFBTSxPQUFPLE1BQVk7QUFBQSxFQUFDO0FBQzFCLFNBQU87QUFBQSxJQUNMLGFBQWEsQ0FBQyxLQUFLLFVBQ2pCO0FBQUEsTUFDRSw0QkFBNEIsS0FBSyxRQUFRLElBQUksR0FBRyxjQUFjLElBQUksU0FBUyxhQUFhLElBQUksV0FBVztBQUFBLElBQ3pHO0FBQUEsSUFDRixpQkFBaUIsQ0FBQyxJQUFJLFlBQVksSUFBSSxpQkFBaUIsRUFBRSxFQUFFO0FBQUEsSUFDM0Qsb0JBQW9CLENBQUMsSUFBSSxPQUFPLElBQUksb0JBQW9CLEVBQUUsS0FBSyxFQUFFLEtBQUs7QUFBQSxJQUN0RSxrQkFBa0IsQ0FBQyxJQUFJLFFBQVEsSUFBSSxrQkFBa0IsRUFBRSxLQUFLLEdBQUcsRUFBRTtBQUFBLElBQ2pFLFdBQVc7QUFBQSxJQUNYLFlBQVk7QUFBQSxJQUNaLFVBQVUsT0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFO0FBQUEsSUFDaEMsZ0JBQWdCLFFBQU0sSUFBSSxxQkFBcUIsRUFBRSxJQUFJO0FBQUEsSUFDckQsWUFBWSxDQUFDLElBQUksU0FBUyxJQUFJLG9CQUFvQixFQUFFLEVBQUU7QUFBQSxJQUN0RCxlQUFlLFFBQU0sSUFBSSxvQkFBb0IsRUFBRSxFQUFFO0FBQUEsSUFDakQsa0JBQWtCO0FBQUEsSUFDbEIsMEJBQTBCO0FBQUEsSUFDMUIscUJBQXFCO0FBQUEsSUFDckIsdUJBQXVCO0FBQUEsSUFDdkIsb0JBQW9CO0FBQUEsSUFDcEIsb0JBQW9CO0FBQUEsSUFDcEIscUJBQXFCO0FBQUEsSUFDckIsYUFBYTtBQUFBLElBQ2IsaUJBQWlCO0FBQUEsSUFDakIsYUFBYTtBQUFBLElBQ2IsaUJBQWlCO0FBQUEsSUFDakIsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLElBQ1YsZ0JBQWdCO0FBQUEsRUFDbEI7QUFDRjsiLAogICJuYW1lcyI6IFsidG1wZGlyIiwgImpvaW4iLCAicmVzb2x2ZSIsICJqb2luIiwgInRtcGRpciIsICJoYW5kbGUiLCAicmVzb2x2ZSJdCn0K
