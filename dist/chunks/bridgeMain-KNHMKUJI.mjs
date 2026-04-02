#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  createCapacityWake
} from "./chunk-ZTYOR7T4.mjs";
import {
  getPollIntervalConfig
} from "./chunk-JU37ZDBK.mjs";
import {
  buildCCRv2SdkUrl,
  buildSdkUrl,
  decodeWorkSecret,
  registerWorker,
  sameSessionId
} from "./chunk-LD7DS2YH.mjs";
import {
  createTokenRefreshScheduler
} from "./chunk-SN2BUZJI.mjs";
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
  init_datadog,
  init_product,
  init_worktree,
  isExpiredErrorType,
  isSuppressible403,
  removeAgentWorktree,
  shutdownDatadog,
  timestamp,
  validateBridgeId,
  wrapWithOsc8Link
} from "./chunk-BQ2W5UUK.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-UPQJMBLU.mjs";
import "./chunk-JWBPLKI2.mjs";
import "./chunk-B5LIYBEU.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-IVRFWWJD.mjs";
import "./chunk-WFZ47W7F.mjs";
import {
  BRIDGE_LOGIN_ERROR,
  DEFAULT_SESSION_TIMEOUT_MS,
  init_types
} from "./chunk-3MNWUNDS.mjs";
import "./chunk-36ZVP56J.mjs";
import {
  debugTruncate,
  describeAxiosError,
  init_debugUtils,
  init_sessionIdCompat,
  toCompatSessionId,
  toInfraSessionId
} from "./chunk-WKBYDC63.mjs";
import "./chunk-JPGTA2FH.mjs";
import "./chunk-2G5PON4H.mjs";
import "./chunk-SRAO5KUL.mjs";
import "./chunk-75K7OLET.mjs";
import "./chunk-ABRSTIS2.mjs";
import "./chunk-L22EUB4Z.mjs";
import "./chunk-NE3WJ556.mjs";
import "./chunk-3W743YKD.mjs";
import "./chunk-I4JSDM2A.mjs";
import "./chunk-ORS2TTME.mjs";
import "./chunk-H5UJY55C.mjs";
import "./chunk-R2NMUWG6.mjs";
import "./chunk-J7TDGLE4.mjs";
import "./chunk-XTFZIHQR.mjs";
import "./chunk-X6KULBXG.mjs";
import "./chunk-AKNFPKUI.mjs";
import "./chunk-EL6ZMCGB.mjs";
import "./chunk-ALBMKMIQ.mjs";
import "./chunk-A6JDOKBH.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-3IFS4CK6.mjs";
import "./chunk-2UP4OFWW.mjs";
import "./chunk-XXNQOOJ5.mjs";
import "./chunk-TQHEE24N.mjs";
import "./chunk-GRYB5GTK.mjs";
import {
  getTrustedDeviceToken,
  init_trustedDevice
} from "./chunk-V35HZRR2.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import "./chunk-ZFJCSCYD.mjs";
import "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-H3V45RZC.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  BRIDGE_FAILED_INDICATOR,
  BRIDGE_READY_INDICATOR,
  BRIDGE_SPINNER_FRAMES,
  checkGate_CACHED_OR_BLOCKING,
  init_figures,
  init_growthbook,
  init_source,
  source_default
} from "./chunk-JQ55XPLZ.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-5EA44JDA.mjs";
import "./chunk-O2ZQRVJU.mjs";
import "./chunk-ZPEBVZEB.mjs";
import {
  init_sleep,
  sleep
} from "./chunk-DQ5JTCOA.mjs";
import "./chunk-HGPSKCV5.mjs";
import "./chunk-B7JYVDBT.mjs";
import "./chunk-GHLJY6GK.mjs";
import "./chunk-PPND3F3V.mjs";
import "./chunk-BKRSSLV2.mjs";
import "./chunk-XFYUWZYI.mjs";
import {
  init_bundledMode,
  isInBundledMode
} from "./chunk-TR6BOGPZ.mjs";
import {
  init_firstPartyEventLogger,
  shutdown1PEventLogging
} from "./chunk-KTLUBGNP.mjs";
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
} from "./chunk-NLMC5AZV.mjs";
import {
  init_analytics,
  logEvent,
  logEventAsync
} from "./chunk-M5NTYAY2.mjs";
import "./chunk-SETG7O3F.mjs";
import "./chunk-J6MJ6UVK.mjs";
import "./chunk-PKIVPZJM.mjs";
import "./chunk-JXCG2JDO.mjs";
import "./chunk-FBLMX54P.mjs";
import "./chunk-FOFMX5GB.mjs";
import {
  init_diagLogs,
  logForDiagnosticsNoPII
} from "./chunk-SF3TOBTZ.mjs";
import "./chunk-IVTTVOOG.mjs";
import "./chunk-LNQOFDTT.mjs";
import "./chunk-ZAYB3WZV.mjs";
import "./chunk-NT7W7YWD.mjs";
import "./chunk-4S33EKPF.mjs";
import "./chunk-TZFTPSMG.mjs";
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-F5ODCUJD.mjs";
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
                void import("./createSession-HCYIXXWN.mjs").then(
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
      `Resume this session by running \`blaude remote-control --continue\``
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
Run 'blaude remote-control --help' for usage.`
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
  blaude remote-control [options]
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
  directory you want to work in, then connect from the Blaude app or web.
${serverDescription}
NOTES
  - You must be logged in with a claude.ai account that has a subscription
  - Run \`blaude\` first in the directory to accept the workspace trust dialog
${serverNote}`;
  console.log(help);
}
var TITLE_MAX_LEN = 80;
function deriveSessionTitle(text) {
  const flat = text.replace(/\s+/g, " ").trim();
  return truncateToWidth(flat, TITLE_MAX_LEN);
}
async function fetchSessionTitle(compatSessionId, baseUrl) {
  const { getBridgeSession } = await import("./createSession-HCYIXXWN.mjs");
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
  const { enableConfigs, checkHasTrustDialogAccepted } = await import("./config-FCDEKRSF.mjs");
  enableConfigs();
  const { initSinks } = await import("./sinks-LUT2VTSZ.mjs");
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
  const { clearOAuthTokenCache, checkAndRefreshOAuthTokenIfNeeded } = await import("./auth-YBLUFOGD.mjs");
  const { getBridgeAccessToken, getBridgeBaseUrl } = await import("./bridgeConfig-XUNI7DQO.mjs");
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
  } = await import("./config-FCDEKRSF.mjs");
  if (!getGlobalConfig().remoteDialogSeen) {
    const readline = await import("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    console.log(
      "\nRemote Control lets you access this CLI session from the web (claude.ai/code)\nor the Blaude app, so you can pick up where you left off on any device.\n\nYou can disconnect remote access anytime by running /remote-control again.\n"
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
        `Error: No recent session found in this directory or its worktrees. Run \`blaude remote-control\` to start a new one.`
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
  const { getBranch, getRemoteUrl, findGitRoot } = await import("./git-VHZYAFZ7.mjs");
  const { hasWorktreeCreateHook } = await import("./hooks-QD7CLDWX.mjs");
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
Blaude Remote Control is launching in spawn mode which lets you create new sessions in this project from Blaude on the web or your mobile app. Learn more here: https://code.claude.com/docs/en/remote-control

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
  const { handleOAuth401Error } = await import("./auth-YBLUFOGD.mjs");
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
    const { getBridgeSession } = await import("./createSession-HCYIXXWN.mjs");
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
        `Error: Session ${resumeSessionId} not found. It may have been archived or expired, or your login may have lapsed (run \`blaude /login\`).`
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
  const { parseGitHubRepository } = await import("./detectRepository-GH7EB5ZC.mjs");
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
    const { createBridgeSession } = await import("./createSession-HCYIXXWN.mjs");
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
  const { enableConfigs, checkHasTrustDialogAccepted } = await import("./config-FCDEKRSF.mjs");
  enableConfigs();
  const { initSinks } = await import("./sinks-LUT2VTSZ.mjs");
  initSinks();
  if (!checkHasTrustDialogAccepted()) {
    throw new BridgeHeadlessPermanentError(
      `Workspace not trusted: ${dir}. Run \`claude\` in that directory first to accept the trust dialog.`
    );
  }
  if (!opts.getAccessToken()) {
    throw new Error(BRIDGE_LOGIN_ERROR);
  }
  const { getBridgeBaseUrl } = await import("./bridgeConfig-XUNI7DQO.mjs");
  const baseUrl = getBridgeBaseUrl();
  if (baseUrl.startsWith("http://") && !baseUrl.includes("localhost") && !baseUrl.includes("127.0.0.1")) {
    throw new BridgeHeadlessPermanentError(
      "Remote Control base URL uses HTTP. Only HTTPS or localhost HTTP is allowed."
    );
  }
  const sessionIngressUrl = process.env.USER_TYPE === "ant" && process.env.CLAUDE_BRIDGE_SESSION_INGRESS_URL ? process.env.CLAUDE_BRIDGE_SESSION_INGRESS_URL : baseUrl;
  const { getBranch, getRemoteUrl, findGitRoot } = await import("./git-VHZYAFZ7.mjs");
  const { hasWorktreeCreateHook } = await import("./hooks-QD7CLDWX.mjs");
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
    const { createBridgeSession } = await import("./createSession-HCYIXXWN.mjs");
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2JyaWRnZS9icmlkZ2VNYWluLnRzIiwgIi4uLy4uL3NyYy9icmlkZ2UvYnJpZGdlVUkudHMiLCAiLi4vLi4vc3JjL2JyaWRnZS9zZXNzaW9uUnVubmVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBmZWF0dXJlIH0gZnJvbSAnYnVuOmJ1bmRsZSdcbmltcG9ydCB7IHJhbmRvbVVVSUQgfSBmcm9tICdjcnlwdG8nXG5pbXBvcnQgeyBob3N0bmFtZSwgdG1wZGlyIH0gZnJvbSAnb3MnXG5pbXBvcnQgeyBiYXNlbmFtZSwgam9pbiwgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBnZXRSZW1vdGVTZXNzaW9uVXJsIH0gZnJvbSAnLi4vY29uc3RhbnRzL3Byb2R1Y3QuanMnXG5pbXBvcnQgeyBzaHV0ZG93bkRhdGFkb2cgfSBmcm9tICcuLi9zZXJ2aWNlcy9hbmFseXRpY3MvZGF0YWRvZy5qcydcbmltcG9ydCB7IHNodXRkb3duMVBFdmVudExvZ2dpbmcgfSBmcm9tICcuLi9zZXJ2aWNlcy9hbmFseXRpY3MvZmlyc3RQYXJ0eUV2ZW50TG9nZ2VyLmpzJ1xuaW1wb3J0IHsgY2hlY2tHYXRlX0NBQ0hFRF9PUl9CTE9DS0lORyB9IGZyb20gJy4uL3NlcnZpY2VzL2FuYWx5dGljcy9ncm93dGhib29rLmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICBsb2dFdmVudCxcbiAgbG9nRXZlbnRBc3luYyxcbn0gZnJvbSAnLi4vc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHsgaXNJbkJ1bmRsZWRNb2RlIH0gZnJvbSAnLi4vdXRpbHMvYnVuZGxlZE1vZGUuanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuLi91dGlscy9kZWJ1Zy5qcydcbmltcG9ydCB7IGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkgfSBmcm9tICcuLi91dGlscy9kaWFnTG9ncy5qcydcbmltcG9ydCB7IGlzRW52VHJ1dGh5LCBpc0luUHJvdGVjdGVkTmFtZXNwYWNlIH0gZnJvbSAnLi4vdXRpbHMvZW52VXRpbHMuanMnXG5pbXBvcnQgeyBlcnJvck1lc3NhZ2UgfSBmcm9tICcuLi91dGlscy9lcnJvcnMuanMnXG5pbXBvcnQgeyB0cnVuY2F0ZVRvV2lkdGggfSBmcm9tICcuLi91dGlscy9mb3JtYXQuanMnXG5pbXBvcnQgeyBsb2dFcnJvciB9IGZyb20gJy4uL3V0aWxzL2xvZy5qcydcbmltcG9ydCB7IHNsZWVwIH0gZnJvbSAnLi4vdXRpbHMvc2xlZXAuanMnXG5pbXBvcnQgeyBjcmVhdGVBZ2VudFdvcmt0cmVlLCByZW1vdmVBZ2VudFdvcmt0cmVlIH0gZnJvbSAnLi4vdXRpbHMvd29ya3RyZWUuanMnXG5pbXBvcnQge1xuICBCcmlkZ2VGYXRhbEVycm9yLFxuICBjcmVhdGVCcmlkZ2VBcGlDbGllbnQsXG4gIGlzRXhwaXJlZEVycm9yVHlwZSxcbiAgaXNTdXBwcmVzc2libGU0MDMsXG4gIHZhbGlkYXRlQnJpZGdlSWQsXG59IGZyb20gJy4vYnJpZGdlQXBpLmpzJ1xuaW1wb3J0IHsgZm9ybWF0RHVyYXRpb24gfSBmcm9tICcuL2JyaWRnZVN0YXR1c1V0aWwuanMnXG5pbXBvcnQgeyBjcmVhdGVCcmlkZ2VMb2dnZXIgfSBmcm9tICcuL2JyaWRnZVVJLmpzJ1xuaW1wb3J0IHsgY3JlYXRlQ2FwYWNpdHlXYWtlIH0gZnJvbSAnLi9jYXBhY2l0eVdha2UuanMnXG5pbXBvcnQgeyBkZXNjcmliZUF4aW9zRXJyb3IgfSBmcm9tICcuL2RlYnVnVXRpbHMuanMnXG5pbXBvcnQgeyBjcmVhdGVUb2tlblJlZnJlc2hTY2hlZHVsZXIgfSBmcm9tICcuL2p3dFV0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0UG9sbEludGVydmFsQ29uZmlnIH0gZnJvbSAnLi9wb2xsQ29uZmlnLmpzJ1xuaW1wb3J0IHsgdG9Db21wYXRTZXNzaW9uSWQsIHRvSW5mcmFTZXNzaW9uSWQgfSBmcm9tICcuL3Nlc3Npb25JZENvbXBhdC5qcydcbmltcG9ydCB7IGNyZWF0ZVNlc3Npb25TcGF3bmVyLCBzYWZlRmlsZW5hbWVJZCB9IGZyb20gJy4vc2Vzc2lvblJ1bm5lci5qcydcbmltcG9ydCB7IGdldFRydXN0ZWREZXZpY2VUb2tlbiB9IGZyb20gJy4vdHJ1c3RlZERldmljZS5qcydcbmltcG9ydCB7XG4gIEJSSURHRV9MT0dJTl9FUlJPUixcbiAgdHlwZSBCcmlkZ2VBcGlDbGllbnQsXG4gIHR5cGUgQnJpZGdlQ29uZmlnLFxuICB0eXBlIEJyaWRnZUxvZ2dlcixcbiAgREVGQVVMVF9TRVNTSU9OX1RJTUVPVVRfTVMsXG4gIHR5cGUgU2Vzc2lvbkRvbmVTdGF0dXMsXG4gIHR5cGUgU2Vzc2lvbkhhbmRsZSxcbiAgdHlwZSBTZXNzaW9uU3Bhd25lcixcbiAgdHlwZSBTZXNzaW9uU3Bhd25PcHRzLFxuICB0eXBlIFNwYXduTW9kZSxcbn0gZnJvbSAnLi90eXBlcy5qcydcbmltcG9ydCB7XG4gIGJ1aWxkQ0NSdjJTZGtVcmwsXG4gIGJ1aWxkU2RrVXJsLFxuICBkZWNvZGVXb3JrU2VjcmV0LFxuICByZWdpc3RlcldvcmtlcixcbiAgc2FtZVNlc3Npb25JZCxcbn0gZnJvbSAnLi93b3JrU2VjcmV0LmpzJ1xuXG5leHBvcnQgdHlwZSBCYWNrb2ZmQ29uZmlnID0ge1xuICBjb25uSW5pdGlhbE1zOiBudW1iZXJcbiAgY29ubkNhcE1zOiBudW1iZXJcbiAgY29ubkdpdmVVcE1zOiBudW1iZXJcbiAgZ2VuZXJhbEluaXRpYWxNczogbnVtYmVyXG4gIGdlbmVyYWxDYXBNczogbnVtYmVyXG4gIGdlbmVyYWxHaXZlVXBNczogbnVtYmVyXG4gIC8qKiBTSUdURVJNXHUyMTkyU0lHS0lMTCBncmFjZSBwZXJpb2Qgb24gc2h1dGRvd24uIERlZmF1bHQgMzBzLiAqL1xuICBzaHV0ZG93bkdyYWNlTXM/OiBudW1iZXJcbiAgLyoqIHN0b3BXb3JrV2l0aFJldHJ5IGJhc2UgZGVsYXkgKDFzLzJzLzRzIGJhY2tvZmYpLiBEZWZhdWx0IDEwMDBtcy4gKi9cbiAgc3RvcFdvcmtCYXNlRGVsYXlNcz86IG51bWJlclxufVxuXG5jb25zdCBERUZBVUxUX0JBQ0tPRkY6IEJhY2tvZmZDb25maWcgPSB7XG4gIGNvbm5Jbml0aWFsTXM6IDJfMDAwLFxuICBjb25uQ2FwTXM6IDEyMF8wMDAsIC8vIDIgbWludXRlc1xuICBjb25uR2l2ZVVwTXM6IDYwMF8wMDAsIC8vIDEwIG1pbnV0ZXNcbiAgZ2VuZXJhbEluaXRpYWxNczogNTAwLFxuICBnZW5lcmFsQ2FwTXM6IDMwXzAwMCxcbiAgZ2VuZXJhbEdpdmVVcE1zOiA2MDBfMDAwLCAvLyAxMCBtaW51dGVzXG59XG5cbi8qKiBTdGF0dXMgdXBkYXRlIGludGVydmFsIGZvciB0aGUgbGl2ZSBkaXNwbGF5IChtcykuICovXG5jb25zdCBTVEFUVVNfVVBEQVRFX0lOVEVSVkFMX01TID0gMV8wMDBcbmNvbnN0IFNQQVdOX1NFU1NJT05TX0RFRkFVTFQgPSAzMlxuXG4vKipcbiAqIEdyb3d0aEJvb2sgZ2F0ZSBmb3IgbXVsdGktc2Vzc2lvbiBzcGF3biBtb2RlcyAoLS1zcGF3biAvIC0tY2FwYWNpdHkgLyAtLWNyZWF0ZS1zZXNzaW9uLWluLWRpcikuXG4gKiBTaWJsaW5nIG9mIHRlbmd1X2Njcl9icmlkZ2VfbXVsdGlfZW52aXJvbm1lbnQgKG11bHRpcGxlIGVudnMgcGVyIGhvc3Q6ZGlyKSBcdTIwMTRcbiAqIHRoaXMgb25lIGVuYWJsZXMgbXVsdGlwbGUgc2Vzc2lvbnMgcGVyIGVudmlyb25tZW50LlxuICogUm9sbG91dCBzdGFnZWQgdmlhIHRhcmdldGluZyBydWxlczogYW50cyBmaXJzdCwgdGhlbiBncmFkdWFsIGV4dGVybmFsLlxuICpcbiAqIFVzZXMgdGhlIGJsb2NraW5nIGdhdGUgY2hlY2sgc28gYSBzdGFsZSBkaXNrLWNhY2hlIG1pc3MgZG9lc24ndCB1bmZhaXJseVxuICogZGVueSBhY2Nlc3MuIFRoZSBmYXN0IHBhdGggKGNhY2hlIGhhcyB0cnVlKSBpcyBzdGlsbCBpbnN0YW50OyBvbmx5IHRoZVxuICogY29sZC1zdGFydCBwYXRoIGF3YWl0cyB0aGUgc2VydmVyIGZldGNoLCBhbmQgdGhhdCBmZXRjaCBhbHNvIHNlZWRzIHRoZVxuICogZGlzayBjYWNoZSBmb3IgbmV4dCB0aW1lLlxuICovXG5hc3luYyBmdW5jdGlvbiBpc011bHRpU2Vzc2lvblNwYXduRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgcmV0dXJuIGNoZWNrR2F0ZV9DQUNIRURfT1JfQkxPQ0tJTkcoJ3Rlbmd1X2Njcl9icmlkZ2VfbXVsdGlfc2Vzc2lvbicpXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdGhyZXNob2xkIGZvciBkZXRlY3Rpbmcgc3lzdGVtIHNsZWVwL3dha2UgaW4gdGhlIHBvbGwgbG9vcC5cbiAqIE11c3QgZXhjZWVkIHRoZSBtYXggYmFja29mZiBjYXAgXHUyMDE0IG90aGVyd2lzZSBub3JtYWwgYmFja29mZiBkZWxheXMgdHJpZ2dlclxuICogZmFsc2Ugc2xlZXAgZGV0ZWN0aW9uIChyZXNldHRpbmcgdGhlIGVycm9yIGJ1ZGdldCBpbmRlZmluaXRlbHkpLiBVc2luZ1xuICogMlx1MDBENyB0aGUgY29ubmVjdGlvbiBiYWNrb2ZmIGNhcCwgbWF0Y2hpbmcgdGhlIHBhdHRlcm4gaW4gV2ViU29ja2V0VHJhbnNwb3J0XG4gKiBhbmQgcmVwbEJyaWRnZS5cbiAqL1xuZnVuY3Rpb24gcG9sbFNsZWVwRGV0ZWN0aW9uVGhyZXNob2xkTXMoYmFja29mZjogQmFja29mZkNvbmZpZyk6IG51bWJlciB7XG4gIHJldHVybiBiYWNrb2ZmLmNvbm5DYXBNcyAqIDJcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBhcmdzIHRoYXQgbXVzdCBwcmVjZWRlIENMSSBmbGFncyB3aGVuIHNwYXduaW5nIGEgY2hpbGQgY2xhdWRlXG4gKiBwcm9jZXNzLiBJbiBjb21waWxlZCBiaW5hcmllcywgcHJvY2Vzcy5leGVjUGF0aCBpcyB0aGUgY2xhdWRlIGJpbmFyeSBpdHNlbGZcbiAqIGFuZCBhcmdzIGdvIGRpcmVjdGx5IHRvIGl0LiBJbiBucG0gaW5zdGFsbHMgKG5vZGUgcnVubmluZyBjbGkuanMpLFxuICogcHJvY2Vzcy5leGVjUGF0aCBpcyB0aGUgbm9kZSBydW50aW1lIFx1MjAxNCB0aGUgY2hpbGQgc3Bhd24gbXVzdCBwYXNzIHRoZSBzY3JpcHRcbiAqIHBhdGggYXMgdGhlIGZpcnN0IGFyZywgb3RoZXJ3aXNlIG5vZGUgaW50ZXJwcmV0cyAtLXNkay11cmwgYXMgYSBub2RlIG9wdGlvblxuICogYW5kIGV4aXRzIHdpdGggXCJiYWQgb3B0aW9uOiAtLXNkay11cmxcIi4gU2VlIGFudGhyb3BpY3MvY2xhdWRlLWNvZGUjMjgzMzQuXG4gKi9cbmZ1bmN0aW9uIHNwYXduU2NyaXB0QXJncygpOiBzdHJpbmdbXSB7XG4gIGlmIChpc0luQnVuZGxlZE1vZGUoKSB8fCAhcHJvY2Vzcy5hcmd2WzFdKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgcmV0dXJuIFtwcm9jZXNzLmFyZ3ZbMV1dXG59XG5cbi8qKiBBdHRlbXB0IHRvIHNwYXduIGEgc2Vzc2lvbjsgcmV0dXJucyBlcnJvciBzdHJpbmcgaWYgc3Bhd24gdGhyb3dzLiAqL1xuZnVuY3Rpb24gc2FmZVNwYXduKFxuICBzcGF3bmVyOiBTZXNzaW9uU3Bhd25lcixcbiAgb3B0czogU2Vzc2lvblNwYXduT3B0cyxcbiAgZGlyOiBzdHJpbmcsXG4pOiBTZXNzaW9uSGFuZGxlIHwgc3RyaW5nIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gc3Bhd25lci5zcGF3bihvcHRzLCBkaXIpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnN0IGVyck1zZyA9IGVycm9yTWVzc2FnZShlcnIpXG4gICAgbG9nRXJyb3IobmV3IEVycm9yKGBTZXNzaW9uIHNwYXduIGZhaWxlZDogJHtlcnJNc2d9YCkpXG4gICAgcmV0dXJuIGVyck1zZ1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBydW5CcmlkZ2VMb29wKFxuICBjb25maWc6IEJyaWRnZUNvbmZpZyxcbiAgZW52aXJvbm1lbnRJZDogc3RyaW5nLFxuICBlbnZpcm9ubWVudFNlY3JldDogc3RyaW5nLFxuICBhcGk6IEJyaWRnZUFwaUNsaWVudCxcbiAgc3Bhd25lcjogU2Vzc2lvblNwYXduZXIsXG4gIGxvZ2dlcjogQnJpZGdlTG9nZ2VyLFxuICBzaWduYWw6IEFib3J0U2lnbmFsLFxuICBiYWNrb2ZmQ29uZmlnOiBCYWNrb2ZmQ29uZmlnID0gREVGQVVMVF9CQUNLT0ZGLFxuICBpbml0aWFsU2Vzc2lvbklkPzogc3RyaW5nLFxuICBnZXRBY2Nlc3NUb2tlbj86ICgpID0+IHN0cmluZyB8IHVuZGVmaW5lZCB8IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPixcbik6IFByb21pc2U8dm9pZD4ge1xuICAvLyBMb2NhbCBhYm9ydCBjb250cm9sbGVyIHNvIHRoYXQgb25TZXNzaW9uRG9uZSBjYW4gc3RvcCB0aGUgcG9sbCBsb29wLlxuICAvLyBMaW5rZWQgdG8gdGhlIGluY29taW5nIHNpZ25hbCBzbyBleHRlcm5hbCBhYm9ydHMgYWxzbyB3b3JrLlxuICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG4gIGlmIChzaWduYWwuYWJvcnRlZCkge1xuICAgIGNvbnRyb2xsZXIuYWJvcnQoKVxuICB9IGVsc2Uge1xuICAgIHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsICgpID0+IGNvbnRyb2xsZXIuYWJvcnQoKSwgeyBvbmNlOiB0cnVlIH0pXG4gIH1cbiAgY29uc3QgbG9vcFNpZ25hbCA9IGNvbnRyb2xsZXIuc2lnbmFsXG5cbiAgY29uc3QgYWN0aXZlU2Vzc2lvbnMgPSBuZXcgTWFwPHN0cmluZywgU2Vzc2lvbkhhbmRsZT4oKVxuICBjb25zdCBzZXNzaW9uU3RhcnRUaW1lcyA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KClcbiAgY29uc3Qgc2Vzc2lvbldvcmtJZHMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpXG4gIC8vIENvbXBhdC1zdXJmYWNlIElEIChzZXNzaW9uXyopIGNvbXB1dGVkIG9uY2UgYXQgc3Bhd24gYW5kIGNhY2hlZCBzb1xuICAvLyBjbGVhbnVwIGFuZCBzdGF0dXMtdXBkYXRlIHRpY2tzIHVzZSB0aGUgc2FtZSBrZXkgcmVnYXJkbGVzcyBvZiB3aGV0aGVyXG4gIC8vIHRoZSB0ZW5ndV9icmlkZ2VfcmVwbF92Ml9jc2Vfc2hpbV9lbmFibGVkIGdhdGUgZmxpcHMgbWlkLXNlc3Npb24uXG4gIGNvbnN0IHNlc3Npb25Db21wYXRJZHMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpXG4gIC8vIFNlc3Npb24gaW5ncmVzcyBKV1RzIGZvciBoZWFydGJlYXQgYXV0aCwga2V5ZWQgYnkgc2Vzc2lvbklkLlxuICAvLyBTdG9yZWQgc2VwYXJhdGVseSBmcm9tIGhhbmRsZS5hY2Nlc3NUb2tlbiBiZWNhdXNlIHRoZSB0b2tlbiByZWZyZXNoXG4gIC8vIHNjaGVkdWxlciBvdmVyd3JpdGVzIHRoYXQgZmllbGQgd2l0aCB0aGUgT0F1dGggdG9rZW4gKH4zaDU1bSBpbikuXG4gIGNvbnN0IHNlc3Npb25JbmdyZXNzVG9rZW5zID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKVxuICBjb25zdCBzZXNzaW9uVGltZXJzID0gbmV3IE1hcDxzdHJpbmcsIFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+PigpXG4gIGNvbnN0IGNvbXBsZXRlZFdvcmtJZHMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICBjb25zdCBzZXNzaW9uV29ya3RyZWVzID0gbmV3IE1hcDxcbiAgICBzdHJpbmcsXG4gICAge1xuICAgICAgd29ya3RyZWVQYXRoOiBzdHJpbmdcbiAgICAgIHdvcmt0cmVlQnJhbmNoPzogc3RyaW5nXG4gICAgICBnaXRSb290Pzogc3RyaW5nXG4gICAgICBob29rQmFzZWQ/OiBib29sZWFuXG4gICAgfVxuICA+KClcbiAgLy8gVHJhY2sgc2Vzc2lvbnMga2lsbGVkIGJ5IHRoZSB0aW1lb3V0IHdhdGNoZG9nIHNvIG9uU2Vzc2lvbkRvbmUgY2FuXG4gIC8vIGRpc3Rpbmd1aXNoIHRoZW0gZnJvbSBzZXJ2ZXItaW5pdGlhdGVkIG9yIHNodXRkb3duIGludGVycnVwdHMuXG4gIGNvbnN0IHRpbWVkT3V0U2Vzc2lvbnMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICAvLyBTZXNzaW9ucyB0aGF0IGFscmVhZHkgaGF2ZSBhIHRpdGxlIChzZXJ2ZXItc2V0IG9yIGJyaWRnZS1kZXJpdmVkKSBzb1xuICAvLyBvbkZpcnN0VXNlck1lc3NhZ2UgZG9lc24ndCBjbG9iYmVyIGEgdXNlci1hc3NpZ25lZCAtLW5hbWUgLyB3ZWIgcmVuYW1lLlxuICAvLyBLZXllZCBieSBjb21wYXRTZXNzaW9uSWQgdG8gbWF0Y2ggbG9nZ2VyLnNldFNlc3Npb25UaXRsZSdzIGtleS5cbiAgY29uc3QgdGl0bGVkU2Vzc2lvbnMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICAvLyBTaWduYWwgdG8gd2FrZSB0aGUgYXQtY2FwYWNpdHkgc2xlZXAgZWFybHkgd2hlbiBhIHNlc3Npb24gY29tcGxldGVzLFxuICAvLyBzbyB0aGUgYnJpZGdlIGNhbiBpbW1lZGlhdGVseSBhY2NlcHQgbmV3IHdvcmsuXG4gIGNvbnN0IGNhcGFjaXR5V2FrZSA9IGNyZWF0ZUNhcGFjaXR5V2FrZShsb29wU2lnbmFsKVxuXG4gIC8qKlxuICAgKiBIZWFydGJlYXQgYWxsIGFjdGl2ZSB3b3JrIGl0ZW1zLlxuICAgKiBSZXR1cm5zICdvaycgaWYgYXQgbGVhc3Qgb25lIGhlYXJ0YmVhdCBzdWNjZWVkZWQsICdhdXRoX2ZhaWxlZCcgaWYgYW55XG4gICAqIGdvdCBhIDQwMS80MDMgKEpXVCBleHBpcmVkIFx1MjAxNCByZS1xdWV1ZWQgdmlhIHJlY29ubmVjdFNlc3Npb24gc28gdGhlIG5leHRcbiAgICogcG9sbCBkZWxpdmVycyBmcmVzaCB3b3JrKSwgb3IgJ2ZhaWxlZCcgaWYgYWxsIGZhaWxlZCBmb3Igb3RoZXIgcmVhc29ucy5cbiAgICovXG4gIGFzeW5jIGZ1bmN0aW9uIGhlYXJ0YmVhdEFjdGl2ZVdvcmtJdGVtcygpOiBQcm9taXNlPFxuICAgICdvaycgfCAnYXV0aF9mYWlsZWQnIHwgJ2ZhdGFsJyB8ICdmYWlsZWQnXG4gID4ge1xuICAgIGxldCBhbnlTdWNjZXNzID0gZmFsc2VcbiAgICBsZXQgYW55RmF0YWwgPSBmYWxzZVxuICAgIGNvbnN0IGF1dGhGYWlsZWRTZXNzaW9uczogc3RyaW5nW10gPSBbXVxuICAgIGZvciAoY29uc3QgW3Nlc3Npb25JZF0gb2YgYWN0aXZlU2Vzc2lvbnMpIHtcbiAgICAgIGNvbnN0IHdvcmtJZCA9IHNlc3Npb25Xb3JrSWRzLmdldChzZXNzaW9uSWQpXG4gICAgICBjb25zdCBpbmdyZXNzVG9rZW4gPSBzZXNzaW9uSW5ncmVzc1Rva2Vucy5nZXQoc2Vzc2lvbklkKVxuICAgICAgaWYgKCF3b3JrSWQgfHwgIWluZ3Jlc3NUb2tlbikge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgYXBpLmhlYXJ0YmVhdFdvcmsoZW52aXJvbm1lbnRJZCwgd29ya0lkLCBpbmdyZXNzVG9rZW4pXG4gICAgICAgIGFueVN1Y2Nlc3MgPSB0cnVlXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgIGBbYnJpZGdlOmhlYXJ0YmVhdF0gRmFpbGVkIGZvciBzZXNzaW9uSWQ9JHtzZXNzaW9uSWR9IHdvcmtJZD0ke3dvcmtJZH06ICR7ZXJyb3JNZXNzYWdlKGVycil9YCxcbiAgICAgICAgKVxuICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgQnJpZGdlRmF0YWxFcnJvcikge1xuICAgICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9icmlkZ2VfaGVhcnRiZWF0X2Vycm9yJywge1xuICAgICAgICAgICAgc3RhdHVzOlxuICAgICAgICAgICAgICBlcnIuc3RhdHVzIGFzIHVua25vd24gYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgICAgIGVycm9yX3R5cGU6IChlcnIuc3RhdHVzID09PSA0MDEgfHwgZXJyLnN0YXR1cyA9PT0gNDAzXG4gICAgICAgICAgICAgID8gJ2F1dGhfZmFpbGVkJ1xuICAgICAgICAgICAgICA6ICdmYXRhbCcpIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgICAgfSlcbiAgICAgICAgICBpZiAoZXJyLnN0YXR1cyA9PT0gNDAxIHx8IGVyci5zdGF0dXMgPT09IDQwMykge1xuICAgICAgICAgICAgYXV0aEZhaWxlZFNlc3Npb25zLnB1c2goc2Vzc2lvbklkKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyA0MDQvNDEwID0gZW52aXJvbm1lbnQgZXhwaXJlZCBvciBkZWxldGVkIFx1MjAxNCBubyBwb2ludCByZXRyeWluZ1xuICAgICAgICAgICAgYW55RmF0YWwgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEpXVCBleHBpcmVkIFx1MjE5MiB0cmlnZ2VyIHNlcnZlci1zaWRlIHJlLWRpc3BhdGNoLiBXaXRob3V0IHRoaXMsIHdvcmsgc3RheXNcbiAgICAvLyBBQ0snZCBvdXQgb2YgdGhlIFJlZGlzIFBFTCBhbmQgcG9sbCByZXR1cm5zIGVtcHR5IGZvcmV2ZXIgKENDLTEyNjMpLlxuICAgIC8vIFRoZSBleGlzdGluZ0hhbmRsZSBwYXRoIGJlbG93IGRlbGl2ZXJzIHRoZSBmcmVzaCB0b2tlbiB0byB0aGUgY2hpbGQuXG4gICAgLy8gc2Vzc2lvbklkIGlzIGFscmVhZHkgaW4gdGhlIGZvcm1hdCAvYnJpZGdlL3JlY29ubmVjdCBleHBlY3RzOiBpdCBjb21lc1xuICAgIC8vIGZyb20gd29yay5kYXRhLmlkLCB3aGljaCBtYXRjaGVzIHRoZSBzZXJ2ZXIncyBFbnZpcm9ubWVudEluc3RhbmNlIHN0b3JlXG4gICAgLy8gKGNzZV8qIHVuZGVyIHRoZSBjb21wYXQgZ2F0ZSwgc2Vzc2lvbl8qIG90aGVyd2lzZSkuXG4gICAgZm9yIChjb25zdCBzZXNzaW9uSWQgb2YgYXV0aEZhaWxlZFNlc3Npb25zKSB7XG4gICAgICBsb2dnZXIubG9nVmVyYm9zZShcbiAgICAgICAgYFNlc3Npb24gJHtzZXNzaW9uSWR9IHRva2VuIGV4cGlyZWQgXHUyMDE0IHJlLXF1ZXVpbmcgdmlhIGJyaWRnZS9yZWNvbm5lY3RgLFxuICAgICAgKVxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgYXBpLnJlY29ubmVjdFNlc3Npb24oZW52aXJvbm1lbnRJZCwgc2Vzc2lvbklkKVxuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgYFticmlkZ2U6aGVhcnRiZWF0XSBSZS1xdWV1ZWQgc2Vzc2lvbklkPSR7c2Vzc2lvbklkfSB2aWEgYnJpZGdlL3JlY29ubmVjdGAsXG4gICAgICAgIClcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBsb2dnZXIubG9nRXJyb3IoXG4gICAgICAgICAgYEZhaWxlZCB0byByZWZyZXNoIHNlc3Npb24gJHtzZXNzaW9uSWR9IHRva2VuOiAke2Vycm9yTWVzc2FnZShlcnIpfWAsXG4gICAgICAgIClcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgIGBbYnJpZGdlOmhlYXJ0YmVhdF0gcmVjb25uZWN0U2Vzc2lvbigke3Nlc3Npb25JZH0pIGZhaWxlZDogJHtlcnJvck1lc3NhZ2UoZXJyKX1gLFxuICAgICAgICAgIHsgbGV2ZWw6ICdlcnJvcicgfSxcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYW55RmF0YWwpIHtcbiAgICAgIHJldHVybiAnZmF0YWwnXG4gICAgfVxuICAgIGlmIChhdXRoRmFpbGVkU2Vzc2lvbnMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuICdhdXRoX2ZhaWxlZCdcbiAgICB9XG4gICAgcmV0dXJuIGFueVN1Y2Nlc3MgPyAnb2snIDogJ2ZhaWxlZCdcbiAgfVxuXG4gIC8vIFNlc3Npb25zIHNwYXduZWQgd2l0aCBDQ1IgdjIgZW52IHZhcnMuIHYyIGNoaWxkcmVuIGNhbm5vdCB1c2UgT0F1dGhcbiAgLy8gdG9rZW5zIChDQ1Igd29ya2VyIGVuZHBvaW50cyB2YWxpZGF0ZSB0aGUgSldUJ3Mgc2Vzc2lvbl9pZCBjbGFpbSxcbiAgLy8gcmVnaXN0ZXJfd29ya2VyLmdvOjMyKSwgc28gb25SZWZyZXNoIHRyaWdnZXJzIHNlcnZlciByZS1kaXNwYXRjaFxuICAvLyBpbnN0ZWFkIFx1MjAxNCB0aGUgbmV4dCBwb2xsIGRlbGl2ZXJzIGZyZXNoIHdvcmsgd2l0aCBhIG5ldyBKV1QgdmlhIHRoZVxuICAvLyBleGlzdGluZ0hhbmRsZSBwYXRoIGJlbG93LlxuICBjb25zdCB2MlNlc3Npb25zID0gbmV3IFNldDxzdHJpbmc+KClcblxuICAvLyBQcm9hY3RpdmUgdG9rZW4gcmVmcmVzaDogc2NoZWR1bGVzIGEgdGltZXIgNW1pbiBiZWZvcmUgdGhlIHNlc3Npb25cbiAgLy8gaW5ncmVzcyBKV1QgZXhwaXJlcy4gdjEgZGVsaXZlcnMgT0F1dGggZGlyZWN0bHk7IHYyIGNhbGxzXG4gIC8vIHJlY29ubmVjdFNlc3Npb24gdG8gdHJpZ2dlciBzZXJ2ZXIgcmUtZGlzcGF0Y2ggKENDLTEyNjM6IHdpdGhvdXRcbiAgLy8gdGhpcywgdjIgZGFlbW9uIHNlc3Npb25zIHNpbGVudGx5IGRpZSBhdCB+NWggc2luY2UgdGhlIHNlcnZlciBkb2VzXG4gIC8vIG5vdCBhdXRvLXJlLWRpc3BhdGNoIEFDSydkIHdvcmsgb24gbGVhc2UgZXhwaXJ5KS5cbiAgY29uc3QgdG9rZW5SZWZyZXNoID0gZ2V0QWNjZXNzVG9rZW5cbiAgICA/IGNyZWF0ZVRva2VuUmVmcmVzaFNjaGVkdWxlcih7XG4gICAgICAgIGdldEFjY2Vzc1Rva2VuLFxuICAgICAgICBvblJlZnJlc2g6IChzZXNzaW9uSWQsIG9hdXRoVG9rZW4pID0+IHtcbiAgICAgICAgICBjb25zdCBoYW5kbGUgPSBhY3RpdmVTZXNzaW9ucy5nZXQoc2Vzc2lvbklkKVxuICAgICAgICAgIGlmICghaGFuZGxlKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHYyU2Vzc2lvbnMuaGFzKHNlc3Npb25JZCkpIHtcbiAgICAgICAgICAgIGxvZ2dlci5sb2dWZXJib3NlKFxuICAgICAgICAgICAgICBgUmVmcmVzaGluZyBzZXNzaW9uICR7c2Vzc2lvbklkfSB0b2tlbiB2aWEgYnJpZGdlL3JlY29ubmVjdGAsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICB2b2lkIGFwaVxuICAgICAgICAgICAgICAucmVjb25uZWN0U2Vzc2lvbihlbnZpcm9ubWVudElkLCBzZXNzaW9uSWQpXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyOiB1bmtub3duKSA9PiB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKFxuICAgICAgICAgICAgICAgICAgYEZhaWxlZCB0byByZWZyZXNoIHNlc3Npb24gJHtzZXNzaW9uSWR9IHRva2VuOiAke2Vycm9yTWVzc2FnZShlcnIpfWAsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgICAgIGBbYnJpZGdlOnRva2VuXSByZWNvbm5lY3RTZXNzaW9uKCR7c2Vzc2lvbklkfSkgZmFpbGVkOiAke2Vycm9yTWVzc2FnZShlcnIpfWAsXG4gICAgICAgICAgICAgICAgICB7IGxldmVsOiAnZXJyb3InIH0sXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoYW5kbGUudXBkYXRlQWNjZXNzVG9rZW4ob2F1dGhUb2tlbilcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsOiAnYnJpZGdlJyxcbiAgICAgIH0pXG4gICAgOiBudWxsXG4gIGNvbnN0IGxvb3BTdGFydFRpbWUgPSBEYXRlLm5vdygpXG4gIC8vIFRyYWNrIGFsbCBpbi1mbGlnaHQgY2xlYW51cCBwcm9taXNlcyAoc3RvcFdvcmssIHdvcmt0cmVlIHJlbW92YWwpIHNvXG4gIC8vIHRoZSBzaHV0ZG93biBzZXF1ZW5jZSBjYW4gYXdhaXQgdGhlbSBiZWZvcmUgcHJvY2Vzcy5leGl0KCkuXG4gIGNvbnN0IHBlbmRpbmdDbGVhbnVwcyA9IG5ldyBTZXQ8UHJvbWlzZTx1bmtub3duPj4oKVxuICBmdW5jdGlvbiB0cmFja0NsZWFudXAocDogUHJvbWlzZTx1bmtub3duPik6IHZvaWQge1xuICAgIHBlbmRpbmdDbGVhbnVwcy5hZGQocClcbiAgICB2b2lkIHAuZmluYWxseSgoKSA9PiBwZW5kaW5nQ2xlYW51cHMuZGVsZXRlKHApKVxuICB9XG4gIGxldCBjb25uQmFja29mZiA9IDBcbiAgbGV0IGdlbmVyYWxCYWNrb2ZmID0gMFxuICBsZXQgY29ubkVycm9yU3RhcnQ6IG51bWJlciB8IG51bGwgPSBudWxsXG4gIGxldCBnZW5lcmFsRXJyb3JTdGFydDogbnVtYmVyIHwgbnVsbCA9IG51bGxcbiAgbGV0IGxhc3RQb2xsRXJyb3JUaW1lOiBudW1iZXIgfCBudWxsID0gbnVsbFxuICBsZXQgc3RhdHVzVXBkYXRlVGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldEludGVydmFsPiB8IG51bGwgPSBudWxsXG4gIC8vIFNldCBieSBCcmlkZ2VGYXRhbEVycm9yIGFuZCBnaXZlLXVwIHBhdGhzIHNvIHRoZSBzaHV0ZG93biBibG9jayBjYW5cbiAgLy8gc2tpcCB0aGUgcmVzdW1lIG1lc3NhZ2UgKHJlc3VtZSBpcyBpbXBvc3NpYmxlIGFmdGVyIGVudiBleHBpcnkvYXV0aFxuICAvLyBmYWlsdXJlL3N1c3RhaW5lZCBjb25uZWN0aW9uIGVycm9ycykuXG4gIGxldCBmYXRhbEV4aXQgPSBmYWxzZVxuXG4gIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICBgW2JyaWRnZTp3b3JrXSBTdGFydGluZyBwb2xsIGxvb3Agc3Bhd25Nb2RlPSR7Y29uZmlnLnNwYXduTW9kZX0gbWF4U2Vzc2lvbnM9JHtjb25maWcubWF4U2Vzc2lvbnN9IGVudmlyb25tZW50SWQ9JHtlbnZpcm9ubWVudElkfWAsXG4gIClcbiAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnaW5mbycsICdicmlkZ2VfbG9vcF9zdGFydGVkJywge1xuICAgIG1heF9zZXNzaW9uczogY29uZmlnLm1heFNlc3Npb25zLFxuICAgIHNwYXduX21vZGU6IGNvbmZpZy5zcGF3bk1vZGUsXG4gIH0pXG5cbiAgLy8gRm9yIGFudCB1c2Vycywgc2hvdyB3aGVyZSBzZXNzaW9uIGRlYnVnIGxvZ3Mgd2lsbCBsYW5kIHNvIHRoZXkgY2FuIHRhaWwgdGhlbS5cbiAgLy8gc2Vzc2lvblJ1bm5lci50cyB1c2VzIHRoZSBzYW1lIGJhc2UgcGF0aC4gRmlsZSBhcHBlYXJzIG9uY2UgYSBzZXNzaW9uIHNwYXducy5cbiAgaWYgKHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCcpIHtcbiAgICBsZXQgZGVidWdHbG9iOiBzdHJpbmdcbiAgICBpZiAoY29uZmlnLmRlYnVnRmlsZSkge1xuICAgICAgY29uc3QgZXh0ID0gY29uZmlnLmRlYnVnRmlsZS5sYXN0SW5kZXhPZignLicpXG4gICAgICBkZWJ1Z0dsb2IgPVxuICAgICAgICBleHQgPiAwXG4gICAgICAgICAgPyBgJHtjb25maWcuZGVidWdGaWxlLnNsaWNlKDAsIGV4dCl9LSoke2NvbmZpZy5kZWJ1Z0ZpbGUuc2xpY2UoZXh0KX1gXG4gICAgICAgICAgOiBgJHtjb25maWcuZGVidWdGaWxlfS0qYFxuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Z0dsb2IgPSBqb2luKHRtcGRpcigpLCAnY2xhdWRlJywgJ2JyaWRnZS1zZXNzaW9uLSoubG9nJylcbiAgICB9XG4gICAgbG9nZ2VyLnNldERlYnVnTG9nUGF0aChkZWJ1Z0dsb2IpXG4gIH1cblxuICBsb2dnZXIucHJpbnRCYW5uZXIoY29uZmlnLCBlbnZpcm9ubWVudElkKVxuXG4gIC8vIFNlZWQgdGhlIGxvZ2dlcidzIHNlc3Npb24gY291bnQgKyBzcGF3biBtb2RlIGJlZm9yZSBhbnkgcmVuZGVyLiBXaXRob3V0XG4gIC8vIHRoaXMsIHNldEF0dGFjaGVkKCkgYmVsb3cgcmVuZGVycyB3aXRoIHRoZSBsb2dnZXIncyBkZWZhdWx0IHNlc3Npb25NYXg9MSxcbiAgLy8gc2hvd2luZyBcIkNhcGFjaXR5OiAwLzFcIiB1bnRpbCB0aGUgc3RhdHVzIHRpY2tlciBraWNrcyBpbiAod2hpY2ggaXMgZ2F0ZWRcbiAgLy8gYnkgIWluaXRpYWxTZXNzaW9uSWQgYW5kIG9ubHkgc3RhcnRzIGFmdGVyIHRoZSBwb2xsIGxvb3AgcGlja3MgdXAgd29yaykuXG4gIGxvZ2dlci51cGRhdGVTZXNzaW9uQ291bnQoMCwgY29uZmlnLm1heFNlc3Npb25zLCBjb25maWcuc3Bhd25Nb2RlKVxuXG4gIC8vIElmIGFuIGluaXRpYWwgc2Vzc2lvbiB3YXMgcHJlLWNyZWF0ZWQsIHNob3cgaXRzIFVSTCBmcm9tIHRoZSBzdGFydCBzb1xuICAvLyB0aGUgdXNlciBjYW4gY2xpY2sgdGhyb3VnaCBpbW1lZGlhdGVseSAobWF0Y2hpbmcgL3JlbW90ZS1jb250cm9sIGJlaGF2aW9yKS5cbiAgaWYgKGluaXRpYWxTZXNzaW9uSWQpIHtcbiAgICBsb2dnZXIuc2V0QXR0YWNoZWQoaW5pdGlhbFNlc3Npb25JZClcbiAgfVxuXG4gIC8qKiBSZWZyZXNoIHRoZSBpbmxpbmUgc3RhdHVzIGRpc3BsYXkuIFNob3dzIGlkbGUgb3IgYWN0aXZlIGRlcGVuZGluZyBvbiBzdGF0ZS4gKi9cbiAgZnVuY3Rpb24gdXBkYXRlU3RhdHVzRGlzcGxheSgpOiB2b2lkIHtcbiAgICAvLyBQdXNoIHRoZSBzZXNzaW9uIGNvdW50IChuby1vcCB3aGVuIG1heFNlc3Npb25zID09PSAxKSBzbyB0aGVcbiAgICAvLyBuZXh0IHJlbmRlclN0YXR1c0xpbmUgdGljayBzaG93cyB0aGUgY3VycmVudCBjb3VudC5cbiAgICBsb2dnZXIudXBkYXRlU2Vzc2lvbkNvdW50KFxuICAgICAgYWN0aXZlU2Vzc2lvbnMuc2l6ZSxcbiAgICAgIGNvbmZpZy5tYXhTZXNzaW9ucyxcbiAgICAgIGNvbmZpZy5zcGF3bk1vZGUsXG4gICAgKVxuXG4gICAgLy8gUHVzaCBwZXItc2Vzc2lvbiBhY3Rpdml0eSBpbnRvIHRoZSBtdWx0aS1zZXNzaW9uIGRpc3BsYXkuXG4gICAgZm9yIChjb25zdCBbc2lkLCBoYW5kbGVdIG9mIGFjdGl2ZVNlc3Npb25zKSB7XG4gICAgICBjb25zdCBhY3QgPSBoYW5kbGUuY3VycmVudEFjdGl2aXR5XG4gICAgICBpZiAoYWN0KSB7XG4gICAgICAgIGxvZ2dlci51cGRhdGVTZXNzaW9uQWN0aXZpdHkoc2Vzc2lvbkNvbXBhdElkcy5nZXQoc2lkKSA/PyBzaWQsIGFjdClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlU2Vzc2lvbnMuc2l6ZSA9PT0gMCkge1xuICAgICAgbG9nZ2VyLnVwZGF0ZUlkbGVTdGF0dXMoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gU2hvdyB0aGUgbW9zdCByZWNlbnRseSBzdGFydGVkIHNlc3Npb24gdGhhdCBpcyBzdGlsbCBhY3RpdmVseSB3b3JraW5nLlxuICAgIC8vIFNlc3Npb25zIHdob3NlIGN1cnJlbnQgYWN0aXZpdHkgaXMgJ3Jlc3VsdCcgb3IgJ2Vycm9yJyBhcmUgYmV0d2VlblxuICAgIC8vIHR1cm5zIFx1MjAxNCB0aGUgQ0xJIGVtaXR0ZWQgaXRzIHJlc3VsdCBidXQgdGhlIHByb2Nlc3Mgc3RheXMgYWxpdmUgd2FpdGluZ1xuICAgIC8vIGZvciB0aGUgbmV4dCB1c2VyIG1lc3NhZ2UuICBTa2lwIHVwZGF0aW5nIHNvIHRoZSBzdGF0dXMgbGluZSBrZWVwc1xuICAgIC8vIHdoYXRldmVyIHN0YXRlIGl0IGhhZCAoQXR0YWNoZWQgLyBzZXNzaW9uIHRpdGxlKS5cbiAgICBjb25zdCBbc2Vzc2lvbklkLCBoYW5kbGVdID0gWy4uLmFjdGl2ZVNlc3Npb25zLmVudHJpZXMoKV0ucG9wKCkhXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gc2Vzc2lvblN0YXJ0VGltZXMuZ2V0KHNlc3Npb25JZClcbiAgICBpZiAoIXN0YXJ0VGltZSkgcmV0dXJuXG5cbiAgICBjb25zdCBhY3Rpdml0eSA9IGhhbmRsZS5jdXJyZW50QWN0aXZpdHlcbiAgICBpZiAoIWFjdGl2aXR5IHx8IGFjdGl2aXR5LnR5cGUgPT09ICdyZXN1bHQnIHx8IGFjdGl2aXR5LnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgIC8vIFNlc3Npb24gaXMgYmV0d2VlbiB0dXJucyBcdTIwMTQga2VlcCBjdXJyZW50IHN0YXR1cyAoQXR0YWNoZWQvdGl0bGVkKS5cbiAgICAgIC8vIEluIG11bHRpLXNlc3Npb24gbW9kZSwgc3RpbGwgcmVmcmVzaCBzbyBidWxsZXQtbGlzdCBhY3Rpdml0aWVzIHN0YXkgY3VycmVudC5cbiAgICAgIGlmIChjb25maWcubWF4U2Vzc2lvbnMgPiAxKSBsb2dnZXIucmVmcmVzaERpc3BsYXkoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZWxhcHNlZCA9IGZvcm1hdER1cmF0aW9uKERhdGUubm93KCkgLSBzdGFydFRpbWUpXG5cbiAgICAvLyBCdWlsZCB0cmFpbCBmcm9tIHJlY2VudCB0b29sIGFjdGl2aXRpZXMgKGxhc3QgNSlcbiAgICBjb25zdCB0cmFpbCA9IGhhbmRsZS5hY3Rpdml0aWVzXG4gICAgICAuZmlsdGVyKGEgPT4gYS50eXBlID09PSAndG9vbF9zdGFydCcpXG4gICAgICAuc2xpY2UoLTUpXG4gICAgICAubWFwKGEgPT4gYS5zdW1tYXJ5KVxuXG4gICAgbG9nZ2VyLnVwZGF0ZVNlc3Npb25TdGF0dXMoc2Vzc2lvbklkLCBlbGFwc2VkLCBhY3Rpdml0eSwgdHJhaWwpXG4gIH1cblxuICAvKiogU3RhcnQgdGhlIHN0YXR1cyBkaXNwbGF5IHVwZGF0ZSB0aWNrZXIuICovXG4gIGZ1bmN0aW9uIHN0YXJ0U3RhdHVzVXBkYXRlcygpOiB2b2lkIHtcbiAgICBzdG9wU3RhdHVzVXBkYXRlcygpXG4gICAgLy8gQ2FsbCBpbW1lZGlhdGVseSBzbyB0aGUgZmlyc3QgdHJhbnNpdGlvbiAoZS5nLiBDb25uZWN0aW5nIFx1MjE5MiBSZWFkeSlcbiAgICAvLyBoYXBwZW5zIHdpdGhvdXQgZGVsYXksIGF2b2lkaW5nIGNvbmN1cnJlbnQgdGltZXIgcmFjZXMuXG4gICAgdXBkYXRlU3RhdHVzRGlzcGxheSgpXG4gICAgc3RhdHVzVXBkYXRlVGltZXIgPSBzZXRJbnRlcnZhbChcbiAgICAgIHVwZGF0ZVN0YXR1c0Rpc3BsYXksXG4gICAgICBTVEFUVVNfVVBEQVRFX0lOVEVSVkFMX01TLFxuICAgIClcbiAgfVxuXG4gIC8qKiBTdG9wIHRoZSBzdGF0dXMgZGlzcGxheSB1cGRhdGUgdGlja2VyLiAqL1xuICBmdW5jdGlvbiBzdG9wU3RhdHVzVXBkYXRlcygpOiB2b2lkIHtcbiAgICBpZiAoc3RhdHVzVXBkYXRlVGltZXIpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoc3RhdHVzVXBkYXRlVGltZXIpXG4gICAgICBzdGF0dXNVcGRhdGVUaW1lciA9IG51bGxcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblNlc3Npb25Eb25lKFxuICAgIHNlc3Npb25JZDogc3RyaW5nLFxuICAgIHN0YXJ0VGltZTogbnVtYmVyLFxuICAgIGhhbmRsZTogU2Vzc2lvbkhhbmRsZSxcbiAgKTogKHN0YXR1czogU2Vzc2lvbkRvbmVTdGF0dXMpID0+IHZvaWQge1xuICAgIHJldHVybiAocmF3U3RhdHVzOiBTZXNzaW9uRG9uZVN0YXR1cyk6IHZvaWQgPT4ge1xuICAgICAgY29uc3Qgd29ya0lkID0gc2Vzc2lvbldvcmtJZHMuZ2V0KHNlc3Npb25JZClcbiAgICAgIGFjdGl2ZVNlc3Npb25zLmRlbGV0ZShzZXNzaW9uSWQpXG4gICAgICBzZXNzaW9uU3RhcnRUaW1lcy5kZWxldGUoc2Vzc2lvbklkKVxuICAgICAgc2Vzc2lvbldvcmtJZHMuZGVsZXRlKHNlc3Npb25JZClcbiAgICAgIHNlc3Npb25JbmdyZXNzVG9rZW5zLmRlbGV0ZShzZXNzaW9uSWQpXG4gICAgICBjb25zdCBjb21wYXRJZCA9IHNlc3Npb25Db21wYXRJZHMuZ2V0KHNlc3Npb25JZCkgPz8gc2Vzc2lvbklkXG4gICAgICBzZXNzaW9uQ29tcGF0SWRzLmRlbGV0ZShzZXNzaW9uSWQpXG4gICAgICBsb2dnZXIucmVtb3ZlU2Vzc2lvbihjb21wYXRJZClcbiAgICAgIHRpdGxlZFNlc3Npb25zLmRlbGV0ZShjb21wYXRJZClcbiAgICAgIHYyU2Vzc2lvbnMuZGVsZXRlKHNlc3Npb25JZClcbiAgICAgIC8vIENsZWFyIHBlci1zZXNzaW9uIHRpbWVvdXQgdGltZXJcbiAgICAgIGNvbnN0IHRpbWVyID0gc2Vzc2lvblRpbWVycy5nZXQoc2Vzc2lvbklkKVxuICAgICAgaWYgKHRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgICAgc2Vzc2lvblRpbWVycy5kZWxldGUoc2Vzc2lvbklkKVxuICAgICAgfVxuICAgICAgLy8gQ2xlYXIgdG9rZW4gcmVmcmVzaCB0aW1lclxuICAgICAgdG9rZW5SZWZyZXNoPy5jYW5jZWwoc2Vzc2lvbklkKVxuICAgICAgLy8gV2FrZSB0aGUgYXQtY2FwYWNpdHkgc2xlZXAgc28gdGhlIGJyaWRnZSBjYW4gYWNjZXB0IG5ldyB3b3JrIGltbWVkaWF0ZWx5XG4gICAgICBjYXBhY2l0eVdha2Uud2FrZSgpXG5cbiAgICAgIC8vIElmIHRoZSBzZXNzaW9uIHdhcyBraWxsZWQgYnkgdGhlIHRpbWVvdXQgd2F0Y2hkb2csIHRyZWF0IGl0IGFzIGFcbiAgICAgIC8vIGZhaWxlZCBzZXNzaW9uIChub3QgYSBzZXJ2ZXIvc2h1dGRvd24gaW50ZXJydXB0KSBzbyB3ZSBzdGlsbCBjYWxsXG4gICAgICAvLyBzdG9wV29yayBhbmQgYXJjaGl2ZVNlc3Npb24gYmVsb3cuXG4gICAgICBjb25zdCB3YXNUaW1lZE91dCA9IHRpbWVkT3V0U2Vzc2lvbnMuZGVsZXRlKHNlc3Npb25JZClcbiAgICAgIGNvbnN0IHN0YXR1czogU2Vzc2lvbkRvbmVTdGF0dXMgPVxuICAgICAgICB3YXNUaW1lZE91dCAmJiByYXdTdGF0dXMgPT09ICdpbnRlcnJ1cHRlZCcgPyAnZmFpbGVkJyA6IHJhd1N0YXR1c1xuICAgICAgY29uc3QgZHVyYXRpb25NcyA9IERhdGUubm93KCkgLSBzdGFydFRpbWVcblxuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgW2JyaWRnZTpzZXNzaW9uXSBzZXNzaW9uSWQ9JHtzZXNzaW9uSWR9IHdvcmtJZD0ke3dvcmtJZCA/PyAndW5rbm93bid9IGV4aXRlZCBzdGF0dXM9JHtzdGF0dXN9IGR1cmF0aW9uPSR7Zm9ybWF0RHVyYXRpb24oZHVyYXRpb25Ncyl9YCxcbiAgICAgIClcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9icmlkZ2Vfc2Vzc2lvbl9kb25lJywge1xuICAgICAgICBzdGF0dXM6XG4gICAgICAgICAgc3RhdHVzIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgIGR1cmF0aW9uX21zOiBkdXJhdGlvbk1zLFxuICAgICAgfSlcbiAgICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2luZm8nLCAnYnJpZGdlX3Nlc3Npb25fZG9uZScsIHtcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBkdXJhdGlvbl9tczogZHVyYXRpb25NcyxcbiAgICAgIH0pXG5cbiAgICAgIC8vIENsZWFyIHRoZSBzdGF0dXMgZGlzcGxheSBiZWZvcmUgcHJpbnRpbmcgZmluYWwgbG9nXG4gICAgICBsb2dnZXIuY2xlYXJTdGF0dXMoKVxuICAgICAgc3RvcFN0YXR1c1VwZGF0ZXMoKVxuXG4gICAgICAvLyBCdWlsZCBlcnJvciBtZXNzYWdlIGZyb20gc3RkZXJyIGlmIGF2YWlsYWJsZVxuICAgICAgY29uc3Qgc3RkZXJyU3VtbWFyeSA9XG4gICAgICAgIGhhbmRsZS5sYXN0U3RkZXJyLmxlbmd0aCA+IDAgPyBoYW5kbGUubGFzdFN0ZGVyci5qb2luKCdcXG4nKSA6IHVuZGVmaW5lZFxuICAgICAgbGV0IGZhaWx1cmVNZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgICAgY2FzZSAnY29tcGxldGVkJzpcbiAgICAgICAgICBsb2dnZXIubG9nU2Vzc2lvbkNvbXBsZXRlKHNlc3Npb25JZCwgZHVyYXRpb25NcylcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdmYWlsZWQnOlxuICAgICAgICAgIC8vIFNraXAgZmFpbHVyZSBsb2cgZHVyaW5nIHNodXRkb3duIFx1MjAxNCB0aGUgY2hpbGQgZXhpdHMgbm9uLXplcm8gd2hlblxuICAgICAgICAgIC8vIGtpbGxlZCwgd2hpY2ggaXMgZXhwZWN0ZWQgYW5kIG5vdCBhIHJlYWwgZmFpbHVyZS5cbiAgICAgICAgICAvLyBBbHNvIHNraXAgZm9yIHRpbWVvdXQta2lsbGVkIHNlc3Npb25zIFx1MjAxNCB0aGUgdGltZW91dCB3YXRjaGRvZ1xuICAgICAgICAgIC8vIGFscmVhZHkgbG9nZ2VkIGEgY2xlYXIgdGltZW91dCBtZXNzYWdlLlxuICAgICAgICAgIGlmICghd2FzVGltZWRPdXQgJiYgIWxvb3BTaWduYWwuYWJvcnRlZCkge1xuICAgICAgICAgICAgZmFpbHVyZU1lc3NhZ2UgPSBzdGRlcnJTdW1tYXJ5ID8/ICdQcm9jZXNzIGV4aXRlZCB3aXRoIGVycm9yJ1xuICAgICAgICAgICAgbG9nZ2VyLmxvZ1Nlc3Npb25GYWlsZWQoc2Vzc2lvbklkLCBmYWlsdXJlTWVzc2FnZSlcbiAgICAgICAgICAgIGxvZ0Vycm9yKG5ldyBFcnJvcihgQnJpZGdlIHNlc3Npb24gZmFpbGVkOiAke2ZhaWx1cmVNZXNzYWdlfWApKVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdpbnRlcnJ1cHRlZCc6XG4gICAgICAgICAgbG9nZ2VyLmxvZ1ZlcmJvc2UoYFNlc3Npb24gJHtzZXNzaW9uSWR9IGludGVycnVwdGVkYClcbiAgICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICAvLyBOb3RpZnkgdGhlIHNlcnZlciB0aGF0IHRoaXMgd29yayBpdGVtIGlzIGRvbmUuIFNraXAgZm9yIGludGVycnVwdGVkXG4gICAgICAvLyBzZXNzaW9ucyBcdTIwMTQgaW50ZXJydXB0cyBhcmUgZWl0aGVyIHNlcnZlci1pbml0aWF0ZWQgKHRoZSBzZXJ2ZXIgYWxyZWFkeVxuICAgICAgLy8ga25vd3MpIG9yIGNhdXNlZCBieSBicmlkZ2Ugc2h1dGRvd24gKHdoaWNoIGNhbGxzIHN0b3BXb3JrKCkgc2VwYXJhdGVseSkuXG4gICAgICBpZiAoc3RhdHVzICE9PSAnaW50ZXJydXB0ZWQnICYmIHdvcmtJZCkge1xuICAgICAgICB0cmFja0NsZWFudXAoXG4gICAgICAgICAgc3RvcFdvcmtXaXRoUmV0cnkoXG4gICAgICAgICAgICBhcGksXG4gICAgICAgICAgICBlbnZpcm9ubWVudElkLFxuICAgICAgICAgICAgd29ya0lkLFxuICAgICAgICAgICAgbG9nZ2VyLFxuICAgICAgICAgICAgYmFja29mZkNvbmZpZy5zdG9wV29ya0Jhc2VEZWxheU1zLFxuICAgICAgICAgICksXG4gICAgICAgIClcbiAgICAgICAgY29tcGxldGVkV29ya0lkcy5hZGQod29ya0lkKVxuICAgICAgfVxuXG4gICAgICAvLyBDbGVhbiB1cCB3b3JrdHJlZSBpZiBvbmUgd2FzIGNyZWF0ZWQgZm9yIHRoaXMgc2Vzc2lvblxuICAgICAgY29uc3Qgd3QgPSBzZXNzaW9uV29ya3RyZWVzLmdldChzZXNzaW9uSWQpXG4gICAgICBpZiAod3QpIHtcbiAgICAgICAgc2Vzc2lvbldvcmt0cmVlcy5kZWxldGUoc2Vzc2lvbklkKVxuICAgICAgICB0cmFja0NsZWFudXAoXG4gICAgICAgICAgcmVtb3ZlQWdlbnRXb3JrdHJlZShcbiAgICAgICAgICAgIHd0Lndvcmt0cmVlUGF0aCxcbiAgICAgICAgICAgIHd0Lndvcmt0cmVlQnJhbmNoLFxuICAgICAgICAgICAgd3QuZ2l0Um9vdCxcbiAgICAgICAgICAgIHd0Lmhvb2tCYXNlZCxcbiAgICAgICAgICApLmNhdGNoKChlcnI6IHVua25vd24pID0+XG4gICAgICAgICAgICBsb2dnZXIubG9nVmVyYm9zZShcbiAgICAgICAgICAgICAgYEZhaWxlZCB0byByZW1vdmUgd29ya3RyZWUgJHt3dC53b3JrdHJlZVBhdGh9OiAke2Vycm9yTWVzc2FnZShlcnIpfWAsXG4gICAgICAgICAgICApLFxuICAgICAgICAgICksXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgLy8gTGlmZWN5Y2xlIGRlY2lzaW9uOiBpbiBtdWx0aS1zZXNzaW9uIG1vZGUsIGtlZXAgdGhlIGJyaWRnZSBydW5uaW5nXG4gICAgICAvLyBhZnRlciBhIHNlc3Npb24gY29tcGxldGVzLiBJbiBzaW5nbGUtc2Vzc2lvbiBtb2RlLCBhYm9ydCB0aGUgcG9sbFxuICAgICAgLy8gbG9vcCBzbyB0aGUgYnJpZGdlIGV4aXRzIGNsZWFubHkuXG4gICAgICBpZiAoc3RhdHVzICE9PSAnaW50ZXJydXB0ZWQnICYmICFsb29wU2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgaWYgKGNvbmZpZy5zcGF3bk1vZGUgIT09ICdzaW5nbGUtc2Vzc2lvbicpIHtcbiAgICAgICAgICAvLyBNdWx0aS1zZXNzaW9uOiBhcmNoaXZlIHRoZSBjb21wbGV0ZWQgc2Vzc2lvbiBzbyBpdCBkb2Vzbid0IGxpbmdlclxuICAgICAgICAgIC8vIGFzIHN0YWxlIGluIHRoZSB3ZWIgVUkuIGFyY2hpdmVTZXNzaW9uIGlzIGlkZW1wb3RlbnQgKDQwOSBpZiBhbHJlYWR5XG4gICAgICAgICAgLy8gYXJjaGl2ZWQpLCBzbyBkb3VibGUtYXJjaGl2aW5nIGF0IHNodXRkb3duIGlzIHNhZmUuXG4gICAgICAgICAgLy8gc2Vzc2lvbklkIGFycml2ZWQgYXMgY3NlXyogZnJvbSB0aGUgd29yayBwb2xsIChpbmZyYXN0cnVjdHVyZS1sYXllclxuICAgICAgICAgIC8vIHRhZykuIGFyY2hpdmVTZXNzaW9uIGhpdHMgL3YxL3Nlc3Npb25zL3tpZH0vYXJjaGl2ZSB3aGljaCBpcyB0aGVcbiAgICAgICAgICAvLyBjb21wYXQgc3VyZmFjZSBhbmQgdmFsaWRhdGVzIFRhZ1Nlc3Npb24gKHNlc3Npb25fKikuIFJlLXRhZyBcdTIwMTQgc2FtZVxuICAgICAgICAgIC8vIFVVSUQgdW5kZXJuZWF0aC5cbiAgICAgICAgICB0cmFja0NsZWFudXAoXG4gICAgICAgICAgICBhcGlcbiAgICAgICAgICAgICAgLmFyY2hpdmVTZXNzaW9uKGNvbXBhdElkKVxuICAgICAgICAgICAgICAuY2F0Y2goKGVycjogdW5rbm93bikgPT5cbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nVmVyYm9zZShcbiAgICAgICAgICAgICAgICAgIGBGYWlsZWQgdG8gYXJjaGl2ZSBzZXNzaW9uICR7c2Vzc2lvbklkfTogJHtlcnJvck1lc3NhZ2UoZXJyKX1gLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgKVxuICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgIGBbYnJpZGdlOnNlc3Npb25dIFNlc3Npb24gJHtzdGF0dXN9LCByZXR1cm5pbmcgdG8gaWRsZSAobXVsdGktc2Vzc2lvbiBtb2RlKWAsXG4gICAgICAgICAgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFNpbmdsZS1zZXNzaW9uOiBjb3VwbGVkIGxpZmVjeWNsZSBcdTIwMTQgdGVhciBkb3duIGVudmlyb25tZW50XG4gICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgYFticmlkZ2U6c2Vzc2lvbl0gU2Vzc2lvbiAke3N0YXR1c30sIGFib3J0aW5nIHBvbGwgbG9vcCB0byB0ZWFyIGRvd24gZW52aXJvbm1lbnRgLFxuICAgICAgICAgIClcbiAgICAgICAgICBjb250cm9sbGVyLmFib3J0KClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWxvb3BTaWduYWwuYWJvcnRlZCkge1xuICAgICAgICBzdGFydFN0YXR1c1VwZGF0ZXMoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXJ0IHRoZSBpZGxlIHN0YXR1cyBkaXNwbGF5IGltbWVkaWF0ZWx5IFx1MjAxNCB1bmxlc3Mgd2UgaGF2ZSBhIHByZS1jcmVhdGVkXG4gIC8vIHNlc3Npb24sIGluIHdoaWNoIGNhc2Ugc2V0QXR0YWNoZWQoKSBhbHJlYWR5IHNldCB1cCB0aGUgZGlzcGxheSBhbmQgdGhlXG4gIC8vIHBvbGwgbG9vcCB3aWxsIHN0YXJ0IHN0YXR1cyB1cGRhdGVzIHdoZW4gaXQgcGlja3MgdXAgdGhlIHNlc3Npb24uXG4gIGlmICghaW5pdGlhbFNlc3Npb25JZCkge1xuICAgIHN0YXJ0U3RhdHVzVXBkYXRlcygpXG4gIH1cblxuICB3aGlsZSAoIWxvb3BTaWduYWwuYWJvcnRlZCkge1xuICAgIC8vIEZldGNoZWQgb25jZSBwZXIgaXRlcmF0aW9uIFx1MjAxNCB0aGUgR3Jvd3RoQm9vayBjYWNoZSByZWZyZXNoZXMgZXZlcnlcbiAgICAvLyA1IG1pbiwgc28gYSBsb29wIHJ1bm5pbmcgYXQgdGhlIGF0LWNhcGFjaXR5IHJhdGUgcGlja3MgdXAgY29uZmlnXG4gICAgLy8gY2hhbmdlcyB3aXRoaW4gb25lIHNsZWVwIGN5Y2xlLlxuICAgIGNvbnN0IHBvbGxDb25maWcgPSBnZXRQb2xsSW50ZXJ2YWxDb25maWcoKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHdvcmsgPSBhd2FpdCBhcGkucG9sbEZvcldvcmsoXG4gICAgICAgIGVudmlyb25tZW50SWQsXG4gICAgICAgIGVudmlyb25tZW50U2VjcmV0LFxuICAgICAgICBsb29wU2lnbmFsLFxuICAgICAgICBwb2xsQ29uZmlnLnJlY2xhaW1fb2xkZXJfdGhhbl9tcyxcbiAgICAgIClcblxuICAgICAgLy8gTG9nIHJlY29ubmVjdGlvbiBpZiB3ZSB3ZXJlIHByZXZpb3VzbHkgZGlzY29ubmVjdGVkXG4gICAgICBjb25zdCB3YXNEaXNjb25uZWN0ZWQgPVxuICAgICAgICBjb25uRXJyb3JTdGFydCAhPT0gbnVsbCB8fCBnZW5lcmFsRXJyb3JTdGFydCAhPT0gbnVsbFxuICAgICAgaWYgKHdhc0Rpc2Nvbm5lY3RlZCkge1xuICAgICAgICBjb25zdCBkaXNjb25uZWN0ZWRNcyA9XG4gICAgICAgICAgRGF0ZS5ub3coKSAtIChjb25uRXJyb3JTdGFydCA/PyBnZW5lcmFsRXJyb3JTdGFydCA/PyBEYXRlLm5vdygpKVxuICAgICAgICBsb2dnZXIubG9nUmVjb25uZWN0ZWQoZGlzY29ubmVjdGVkTXMpXG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICBgW2JyaWRnZTpwb2xsXSBSZWNvbm5lY3RlZCBhZnRlciAke2Zvcm1hdER1cmF0aW9uKGRpc2Nvbm5lY3RlZE1zKX1gLFxuICAgICAgICApXG4gICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9icmlkZ2VfcmVjb25uZWN0ZWQnLCB7XG4gICAgICAgICAgZGlzY29ubmVjdGVkX21zOiBkaXNjb25uZWN0ZWRNcyxcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgY29ubkJhY2tvZmYgPSAwXG4gICAgICBnZW5lcmFsQmFja29mZiA9IDBcbiAgICAgIGNvbm5FcnJvclN0YXJ0ID0gbnVsbFxuICAgICAgZ2VuZXJhbEVycm9yU3RhcnQgPSBudWxsXG4gICAgICBsYXN0UG9sbEVycm9yVGltZSA9IG51bGxcblxuICAgICAgLy8gTnVsbCByZXNwb25zZSA9IG5vIHdvcmsgYXZhaWxhYmxlIGluIHRoZSBxdWV1ZS5cbiAgICAgIC8vIEFkZCBhIG1pbmltdW0gZGVsYXkgdG8gYXZvaWQgaGFtbWVyaW5nIHRoZSBzZXJ2ZXIuXG4gICAgICBpZiAoIXdvcmspIHtcbiAgICAgICAgLy8gVXNlIGxpdmUgY2hlY2sgKG5vdCBhIHNuYXBzaG90KSBzaW5jZSBzZXNzaW9ucyBjYW4gZW5kIGR1cmluZyBwb2xsLlxuICAgICAgICBjb25zdCBhdENhcCA9IGFjdGl2ZVNlc3Npb25zLnNpemUgPj0gY29uZmlnLm1heFNlc3Npb25zXG4gICAgICAgIGlmIChhdENhcCkge1xuICAgICAgICAgIGNvbnN0IGF0Q2FwTXMgPSBwb2xsQ29uZmlnLm11bHRpc2Vzc2lvbl9wb2xsX2ludGVydmFsX21zX2F0X2NhcGFjaXR5XG4gICAgICAgICAgLy8gSGVhcnRiZWF0IGxvb3BzIFdJVEhPVVQgcG9sbGluZy4gV2hlbiBhdC1jYXBhY2l0eSBwb2xsaW5nIGlzIGFsc29cbiAgICAgICAgICAvLyBlbmFibGVkIChhdENhcE1zID4gMCksIHRoZSBsb29wIHRyYWNrcyBhIGRlYWRsaW5lIGFuZCBicmVha3Mgb3V0XG4gICAgICAgICAgLy8gdG8gcG9sbCBhdCB0aGF0IGludGVydmFsIFx1MjAxNCBoZWFydGJlYXQgYW5kIHBvbGwgY29tcG9zZSBpbnN0ZWFkIG9mXG4gICAgICAgICAgLy8gb25lIHN1cHByZXNzaW5nIHRoZSBvdGhlci4gV2UgYnJlYWsgb3V0IHRvIHBvbGwgd2hlbjpcbiAgICAgICAgICAvLyAgIC0gUG9sbCBkZWFkbGluZSByZWFjaGVkIChhdENhcE1zID4gMCBvbmx5KVxuICAgICAgICAgIC8vICAgLSBBdXRoIGZhaWxzIChKV1QgZXhwaXJlZCBcdTIxOTIgcG9sbCByZWZyZXNoZXMgdG9rZW5zKVxuICAgICAgICAgIC8vICAgLSBDYXBhY2l0eSB3YWtlIGZpcmVzIChzZXNzaW9uIGVuZGVkIFx1MjE5MiBwb2xsIGZvciBuZXcgd29yaylcbiAgICAgICAgICAvLyAgIC0gTG9vcCBhYm9ydGVkIChzaHV0ZG93bilcbiAgICAgICAgICBpZiAocG9sbENvbmZpZy5ub25fZXhjbHVzaXZlX2hlYXJ0YmVhdF9pbnRlcnZhbF9tcyA+IDApIHtcbiAgICAgICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9icmlkZ2VfaGVhcnRiZWF0X21vZGVfZW50ZXJlZCcsIHtcbiAgICAgICAgICAgICAgYWN0aXZlX3Nlc3Npb25zOiBhY3RpdmVTZXNzaW9ucy5zaXplLFxuICAgICAgICAgICAgICBoZWFydGJlYXRfaW50ZXJ2YWxfbXM6XG4gICAgICAgICAgICAgICAgcG9sbENvbmZpZy5ub25fZXhjbHVzaXZlX2hlYXJ0YmVhdF9pbnRlcnZhbF9tcyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBEZWFkbGluZSBjb21wdXRlZCBvbmNlIGF0IGVudHJ5IFx1MjAxNCBHQiB1cGRhdGVzIHRvIGF0Q2FwTXMgZG9uJ3RcbiAgICAgICAgICAgIC8vIHNoaWZ0IGFuIGluLWZsaWdodCBkZWFkbGluZSAobmV4dCBlbnRyeSBwaWNrcyB1cCB0aGUgbmV3IHZhbHVlKS5cbiAgICAgICAgICAgIGNvbnN0IHBvbGxEZWFkbGluZSA9IGF0Q2FwTXMgPiAwID8gRGF0ZS5ub3coKSArIGF0Q2FwTXMgOiBudWxsXG4gICAgICAgICAgICBsZXQgaGJSZXN1bHQ6ICdvaycgfCAnYXV0aF9mYWlsZWQnIHwgJ2ZhdGFsJyB8ICdmYWlsZWQnID0gJ29rJ1xuICAgICAgICAgICAgbGV0IGhiQ3ljbGVzID0gMFxuICAgICAgICAgICAgd2hpbGUgKFxuICAgICAgICAgICAgICAhbG9vcFNpZ25hbC5hYm9ydGVkICYmXG4gICAgICAgICAgICAgIGFjdGl2ZVNlc3Npb25zLnNpemUgPj0gY29uZmlnLm1heFNlc3Npb25zICYmXG4gICAgICAgICAgICAgIChwb2xsRGVhZGxpbmUgPT09IG51bGwgfHwgRGF0ZS5ub3coKSA8IHBvbGxEZWFkbGluZSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAvLyBSZS1yZWFkIGNvbmZpZyBlYWNoIGN5Y2xlIHNvIEdyb3d0aEJvb2sgdXBkYXRlcyB0YWtlIGVmZmVjdFxuICAgICAgICAgICAgICBjb25zdCBoYkNvbmZpZyA9IGdldFBvbGxJbnRlcnZhbENvbmZpZygpXG4gICAgICAgICAgICAgIGlmIChoYkNvbmZpZy5ub25fZXhjbHVzaXZlX2hlYXJ0YmVhdF9pbnRlcnZhbF9tcyA8PSAwKSBicmVha1xuXG4gICAgICAgICAgICAgIC8vIENhcHR1cmUgY2FwYWNpdHkgc2lnbmFsIEJFRk9SRSB0aGUgYXN5bmMgaGVhcnRiZWF0IGNhbGwgc29cbiAgICAgICAgICAgICAgLy8gYSBzZXNzaW9uIGVuZGluZyBkdXJpbmcgdGhlIEhUVFAgcmVxdWVzdCBpcyBjYXVnaHQgYnkgdGhlXG4gICAgICAgICAgICAgIC8vIHN1YnNlcXVlbnQgc2xlZXAgKGluc3RlYWQgb2YgYmVpbmcgbG9zdCB0byBhIHJlcGxhY2VkIGNvbnRyb2xsZXIpLlxuICAgICAgICAgICAgICBjb25zdCBjYXAgPSBjYXBhY2l0eVdha2Uuc2lnbmFsKClcblxuICAgICAgICAgICAgICBoYlJlc3VsdCA9IGF3YWl0IGhlYXJ0YmVhdEFjdGl2ZVdvcmtJdGVtcygpXG4gICAgICAgICAgICAgIGlmIChoYlJlc3VsdCA9PT0gJ2F1dGhfZmFpbGVkJyB8fCBoYlJlc3VsdCA9PT0gJ2ZhdGFsJykge1xuICAgICAgICAgICAgICAgIGNhcC5jbGVhbnVwKClcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaGJDeWNsZXMrK1xuICAgICAgICAgICAgICBhd2FpdCBzbGVlcChcbiAgICAgICAgICAgICAgICBoYkNvbmZpZy5ub25fZXhjbHVzaXZlX2hlYXJ0YmVhdF9pbnRlcnZhbF9tcyxcbiAgICAgICAgICAgICAgICBjYXAuc2lnbmFsLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNhcC5jbGVhbnVwKClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIGV4aXQgcmVhc29uIGZvciB0ZWxlbWV0cnlcbiAgICAgICAgICAgIGNvbnN0IGV4aXRSZWFzb24gPVxuICAgICAgICAgICAgICBoYlJlc3VsdCA9PT0gJ2F1dGhfZmFpbGVkJyB8fCBoYlJlc3VsdCA9PT0gJ2ZhdGFsJ1xuICAgICAgICAgICAgICAgID8gaGJSZXN1bHRcbiAgICAgICAgICAgICAgICA6IGxvb3BTaWduYWwuYWJvcnRlZFxuICAgICAgICAgICAgICAgICAgPyAnc2h1dGRvd24nXG4gICAgICAgICAgICAgICAgICA6IGFjdGl2ZVNlc3Npb25zLnNpemUgPCBjb25maWcubWF4U2Vzc2lvbnNcbiAgICAgICAgICAgICAgICAgICAgPyAnY2FwYWNpdHlfY2hhbmdlZCdcbiAgICAgICAgICAgICAgICAgICAgOiBwb2xsRGVhZGxpbmUgIT09IG51bGwgJiYgRGF0ZS5ub3coKSA+PSBwb2xsRGVhZGxpbmVcbiAgICAgICAgICAgICAgICAgICAgICA/ICdwb2xsX2R1ZSdcbiAgICAgICAgICAgICAgICAgICAgICA6ICdjb25maWdfZGlzYWJsZWQnXG4gICAgICAgICAgICBsb2dFdmVudCgndGVuZ3VfYnJpZGdlX2hlYXJ0YmVhdF9tb2RlX2V4aXRlZCcsIHtcbiAgICAgICAgICAgICAgcmVhc29uOlxuICAgICAgICAgICAgICAgIGV4aXRSZWFzb24gYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgICAgICAgaGVhcnRiZWF0X2N5Y2xlczogaGJDeWNsZXMsXG4gICAgICAgICAgICAgIGFjdGl2ZV9zZXNzaW9uczogYWN0aXZlU2Vzc2lvbnMuc2l6ZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpZiAoZXhpdFJlYXNvbiA9PT0gJ3BvbGxfZHVlJykge1xuICAgICAgICAgICAgICAvLyBicmlkZ2VBcGkgdGhyb3R0bGVzIGVtcHR5LXBvbGwgbG9ncyAoRU1QVFlfUE9MTF9MT0dfSU5URVJWQUw9MTAwKVxuICAgICAgICAgICAgICAvLyBzbyB0aGUgb25jZS1wZXItMTBtaW4gcG9sbF9kdWUgcG9sbCBpcyBpbnZpc2libGUgYXQgY291bnRlcj0yLlxuICAgICAgICAgICAgICAvLyBMb2cgaXQgaGVyZSBzbyB2ZXJpZmljYXRpb24gcnVucyBzZWUgYm90aCBlbmRwb2ludHMgaW4gdGhlIGRlYnVnIGxvZy5cbiAgICAgICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgICAgIGBbYnJpZGdlOnBvbGxdIEhlYXJ0YmVhdCBwb2xsX2R1ZSBhZnRlciAke2hiQ3ljbGVzfSBjeWNsZXMgXHUyMDE0IGZhbGxpbmcgdGhyb3VnaCB0byBwb2xsRm9yV29ya2AsXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT24gYXV0aF9mYWlsZWQgb3IgZmF0YWwsIHNsZWVwIGJlZm9yZSBwb2xsaW5nIHRvIGF2b2lkIGEgdGlnaHRcbiAgICAgICAgICAgIC8vIHBvbGwraGVhcnRiZWF0IGxvb3AuIEF1dGhfZmFpbGVkOiBoZWFydGJlYXRBY3RpdmVXb3JrSXRlbXNcbiAgICAgICAgICAgIC8vIGFscmVhZHkgY2FsbGVkIHJlY29ubmVjdFNlc3Npb24gXHUyMDE0IHRoZSBzbGVlcCBnaXZlcyB0aGUgc2VydmVyXG4gICAgICAgICAgICAvLyB0aW1lIHRvIHByb3BhZ2F0ZSB0aGUgcmUtcXVldWUuIEZhdGFsICg0MDQvNDEwKTogbWF5IGJlIGFcbiAgICAgICAgICAgIC8vIHNpbmdsZSB3b3JrIGl0ZW0gR0NkIHdoaWxlIHRoZSBlbnZpcm9ubWVudCBpcyBzdGlsbCB2YWxpZC5cbiAgICAgICAgICAgIC8vIFVzZSBhdENhcE1zIGlmIGVuYWJsZWQsIGVsc2UgdGhlIGhlYXJ0YmVhdCBpbnRlcnZhbCBhcyBhIGZsb29yXG4gICAgICAgICAgICAvLyAoZ3VhcmFudGVlZCA+IDAgaGVyZSkgc28gaGVhcnRiZWF0LW9ubHkgY29uZmlncyBkb24ndCB0aWdodC1sb29wLlxuICAgICAgICAgICAgaWYgKGhiUmVzdWx0ID09PSAnYXV0aF9mYWlsZWQnIHx8IGhiUmVzdWx0ID09PSAnZmF0YWwnKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNhcCA9IGNhcGFjaXR5V2FrZS5zaWduYWwoKVxuICAgICAgICAgICAgICBhd2FpdCBzbGVlcChcbiAgICAgICAgICAgICAgICBhdENhcE1zID4gMFxuICAgICAgICAgICAgICAgICAgPyBhdENhcE1zXG4gICAgICAgICAgICAgICAgICA6IHBvbGxDb25maWcubm9uX2V4Y2x1c2l2ZV9oZWFydGJlYXRfaW50ZXJ2YWxfbXMsXG4gICAgICAgICAgICAgICAgY2FwLnNpZ25hbCxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjYXAuY2xlYW51cCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChhdENhcE1zID4gMCkge1xuICAgICAgICAgICAgLy8gSGVhcnRiZWF0IGRpc2FibGVkOiBzbG93IHBvbGwgYXMgbGl2ZW5lc3Mgc2lnbmFsLlxuICAgICAgICAgICAgY29uc3QgY2FwID0gY2FwYWNpdHlXYWtlLnNpZ25hbCgpXG4gICAgICAgICAgICBhd2FpdCBzbGVlcChhdENhcE1zLCBjYXAuc2lnbmFsKVxuICAgICAgICAgICAgY2FwLmNsZWFudXAoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9XG4gICAgICAgICAgICBhY3RpdmVTZXNzaW9ucy5zaXplID4gMFxuICAgICAgICAgICAgICA/IHBvbGxDb25maWcubXVsdGlzZXNzaW9uX3BvbGxfaW50ZXJ2YWxfbXNfcGFydGlhbF9jYXBhY2l0eVxuICAgICAgICAgICAgICA6IHBvbGxDb25maWcubXVsdGlzZXNzaW9uX3BvbGxfaW50ZXJ2YWxfbXNfbm90X2F0X2NhcGFjaXR5XG4gICAgICAgICAgYXdhaXQgc2xlZXAoaW50ZXJ2YWwsIGxvb3BTaWduYWwpXG4gICAgICAgIH1cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gQXQgY2FwYWNpdHkgXHUyMDE0IHdlIHBvbGxlZCB0byBrZWVwIHRoZSBoZWFydGJlYXQgYWxpdmUsIGJ1dCBjYW5ub3RcbiAgICAgIC8vIGFjY2VwdCBuZXcgd29yayByaWdodCBub3cuIFdlIHN0aWxsIGVudGVyIHRoZSBzd2l0Y2ggYmVsb3cgc28gdGhhdFxuICAgICAgLy8gdG9rZW4gcmVmcmVzaGVzIGZvciBleGlzdGluZyBzZXNzaW9ucyBhcmUgcHJvY2Vzc2VkICh0aGUgY2FzZVxuICAgICAgLy8gJ3Nlc3Npb24nIGhhbmRsZXIgY2hlY2tzIGZvciBleGlzdGluZyBzZXNzaW9ucyBiZWZvcmUgdGhlIGlubmVyXG4gICAgICAvLyBjYXBhY2l0eSBndWFyZCkuXG4gICAgICBjb25zdCBhdENhcGFjaXR5QmVmb3JlU3dpdGNoID0gYWN0aXZlU2Vzc2lvbnMuc2l6ZSA+PSBjb25maWcubWF4U2Vzc2lvbnNcblxuICAgICAgLy8gU2tpcCB3b3JrIGl0ZW1zIHRoYXQgaGF2ZSBhbHJlYWR5IGJlZW4gY29tcGxldGVkIGFuZCBzdG9wcGVkLlxuICAgICAgLy8gVGhlIHNlcnZlciBtYXkgcmUtZGVsaXZlciBzdGFsZSB3b3JrIGJlZm9yZSBwcm9jZXNzaW5nIG91ciBzdG9wXG4gICAgICAvLyByZXF1ZXN0LCB3aGljaCB3b3VsZCBvdGhlcndpc2UgY2F1c2UgYSBkdXBsaWNhdGUgc2Vzc2lvbiBzcGF3bi5cbiAgICAgIGlmIChjb21wbGV0ZWRXb3JrSWRzLmhhcyh3b3JrLmlkKSkge1xuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgYFticmlkZ2U6d29ya10gU2tpcHBpbmcgYWxyZWFkeS1jb21wbGV0ZWQgd29ya0lkPSR7d29yay5pZH1gLFxuICAgICAgICApXG4gICAgICAgIC8vIFJlc3BlY3QgY2FwYWNpdHkgdGhyb3R0bGUgXHUyMDE0IHdpdGhvdXQgYSBzbGVlcCBoZXJlLCBwZXJzaXN0ZW50IHN0YWxlXG4gICAgICAgIC8vIHJlZGVsaXZlcmllcyB3b3VsZCB0aWdodC1sb29wIGF0IHBvbGwtcmVxdWVzdCBzcGVlZCAodGhlICF3b3JrXG4gICAgICAgIC8vIGJyYW5jaCBhYm92ZSBpcyB0aGUgb25seSBzbGVlcCwgYW5kIHdvcmsgIT0gbnVsbCBza2lwcyBpdCkuXG4gICAgICAgIGlmIChhdENhcGFjaXR5QmVmb3JlU3dpdGNoKSB7XG4gICAgICAgICAgY29uc3QgY2FwID0gY2FwYWNpdHlXYWtlLnNpZ25hbCgpXG4gICAgICAgICAgaWYgKHBvbGxDb25maWcubm9uX2V4Y2x1c2l2ZV9oZWFydGJlYXRfaW50ZXJ2YWxfbXMgPiAwKSB7XG4gICAgICAgICAgICBhd2FpdCBoZWFydGJlYXRBY3RpdmVXb3JrSXRlbXMoKVxuICAgICAgICAgICAgYXdhaXQgc2xlZXAoXG4gICAgICAgICAgICAgIHBvbGxDb25maWcubm9uX2V4Y2x1c2l2ZV9oZWFydGJlYXRfaW50ZXJ2YWxfbXMsXG4gICAgICAgICAgICAgIGNhcC5zaWduYWwsXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBlbHNlIGlmIChwb2xsQ29uZmlnLm11bHRpc2Vzc2lvbl9wb2xsX2ludGVydmFsX21zX2F0X2NhcGFjaXR5ID4gMCkge1xuICAgICAgICAgICAgYXdhaXQgc2xlZXAoXG4gICAgICAgICAgICAgIHBvbGxDb25maWcubXVsdGlzZXNzaW9uX3BvbGxfaW50ZXJ2YWxfbXNfYXRfY2FwYWNpdHksXG4gICAgICAgICAgICAgIGNhcC5zaWduYWwsXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAgIGNhcC5jbGVhbnVwKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhd2FpdCBzbGVlcCgxMDAwLCBsb29wU2lnbmFsKVxuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIERlY29kZSB0aGUgd29yayBzZWNyZXQgZm9yIHNlc3Npb24gc3Bhd25pbmcgYW5kIHRvIGV4dHJhY3QgdGhlIEpXVFxuICAgICAgLy8gdXNlZCBmb3IgdGhlIGFjayBjYWxsIGJlbG93LlxuICAgICAgbGV0IHNlY3JldFxuICAgICAgdHJ5IHtcbiAgICAgICAgc2VjcmV0ID0gZGVjb2RlV29ya1NlY3JldCh3b3JrLnNlY3JldClcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zdCBlcnJNc2cgPSBlcnJvck1lc3NhZ2UoZXJyKVxuICAgICAgICBsb2dnZXIubG9nRXJyb3IoXG4gICAgICAgICAgYEZhaWxlZCB0byBkZWNvZGUgd29yayBzZWNyZXQgZm9yIHdvcmtJZD0ke3dvcmsuaWR9OiAke2Vyck1zZ31gLFxuICAgICAgICApXG4gICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9icmlkZ2Vfd29ya19zZWNyZXRfZmFpbGVkJywge30pXG4gICAgICAgIC8vIENhbid0IGFjayAobmVlZHMgdGhlIEpXVCB3ZSBmYWlsZWQgdG8gZGVjb2RlKS4gc3RvcFdvcmsgdXNlcyBPQXV0aCxcbiAgICAgICAgLy8gc28gaXQncyBjYWxsYWJsZSBoZXJlIFx1MjAxNCBwcmV2ZW50cyBYQVVUT0NMQUlNIGZyb20gcmUtZGVsaXZlcmluZyB0aGlzXG4gICAgICAgIC8vIHBvaXNvbmVkIGl0ZW0gZXZlcnkgcmVjbGFpbV9vbGRlcl90aGFuX21zIGN5Y2xlLlxuICAgICAgICBjb21wbGV0ZWRXb3JrSWRzLmFkZCh3b3JrLmlkKVxuICAgICAgICB0cmFja0NsZWFudXAoXG4gICAgICAgICAgc3RvcFdvcmtXaXRoUmV0cnkoXG4gICAgICAgICAgICBhcGksXG4gICAgICAgICAgICBlbnZpcm9ubWVudElkLFxuICAgICAgICAgICAgd29yay5pZCxcbiAgICAgICAgICAgIGxvZ2dlcixcbiAgICAgICAgICAgIGJhY2tvZmZDb25maWcuc3RvcFdvcmtCYXNlRGVsYXlNcyxcbiAgICAgICAgICApLFxuICAgICAgICApXG4gICAgICAgIC8vIFJlc3BlY3QgY2FwYWNpdHkgdGhyb3R0bGUgYmVmb3JlIHJldHJ5aW5nIFx1MjAxNCB3aXRob3V0IGEgc2xlZXAgaGVyZSxcbiAgICAgICAgLy8gcmVwZWF0ZWQgZGVjb2RlIGZhaWx1cmVzIGF0IGNhcGFjaXR5IHdvdWxkIHRpZ2h0LWxvb3AgYXRcbiAgICAgICAgLy8gcG9sbC1yZXF1ZXN0IHNwZWVkICh3b3JrICE9IG51bGwgc2tpcHMgdGhlICF3b3JrIHNsZWVwIGFib3ZlKS5cbiAgICAgICAgaWYgKGF0Q2FwYWNpdHlCZWZvcmVTd2l0Y2gpIHtcbiAgICAgICAgICBjb25zdCBjYXAgPSBjYXBhY2l0eVdha2Uuc2lnbmFsKClcbiAgICAgICAgICBpZiAocG9sbENvbmZpZy5ub25fZXhjbHVzaXZlX2hlYXJ0YmVhdF9pbnRlcnZhbF9tcyA+IDApIHtcbiAgICAgICAgICAgIGF3YWl0IGhlYXJ0YmVhdEFjdGl2ZVdvcmtJdGVtcygpXG4gICAgICAgICAgICBhd2FpdCBzbGVlcChcbiAgICAgICAgICAgICAgcG9sbENvbmZpZy5ub25fZXhjbHVzaXZlX2hlYXJ0YmVhdF9pbnRlcnZhbF9tcyxcbiAgICAgICAgICAgICAgY2FwLnNpZ25hbCxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGVsc2UgaWYgKHBvbGxDb25maWcubXVsdGlzZXNzaW9uX3BvbGxfaW50ZXJ2YWxfbXNfYXRfY2FwYWNpdHkgPiAwKSB7XG4gICAgICAgICAgICBhd2FpdCBzbGVlcChcbiAgICAgICAgICAgICAgcG9sbENvbmZpZy5tdWx0aXNlc3Npb25fcG9sbF9pbnRlcnZhbF9tc19hdF9jYXBhY2l0eSxcbiAgICAgICAgICAgICAgY2FwLnNpZ25hbCxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FwLmNsZWFudXAoKVxuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIEV4cGxpY2l0bHkgYWNrbm93bGVkZ2UgYWZ0ZXIgY29tbWl0dGluZyB0byBoYW5kbGUgdGhlIHdvcmsgXHUyMDE0IE5PVFxuICAgICAgLy8gYmVmb3JlLiBUaGUgYXQtY2FwYWNpdHkgZ3VhcmQgaW5zaWRlIGNhc2UgJ3Nlc3Npb24nIGNhbiBicmVha1xuICAgICAgLy8gd2l0aG91dCBzcGF3bmluZzsgYWNraW5nIHRoZXJlIHdvdWxkIHBlcm1hbmVudGx5IGxvc2UgdGhlIHdvcmsuXG4gICAgICAvLyBBY2sgZmFpbHVyZXMgYXJlIG5vbi1mYXRhbDogc2VydmVyIHJlLWRlbGl2ZXJzLCBhbmQgZXhpc3RpbmdIYW5kbGVcbiAgICAgIC8vIC8gY29tcGxldGVkV29ya0lkcyBwYXRocyBoYW5kbGUgdGhlIGRlZHVwLlxuICAgICAgY29uc3QgYWNrV29yayA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKGBbYnJpZGdlOndvcmtdIEFja25vd2xlZGdpbmcgd29ya0lkPSR7d29yay5pZH1gKVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IGFwaS5hY2tub3dsZWRnZVdvcmsoXG4gICAgICAgICAgICBlbnZpcm9ubWVudElkLFxuICAgICAgICAgICAgd29yay5pZCxcbiAgICAgICAgICAgIHNlY3JldC5zZXNzaW9uX2luZ3Jlc3NfdG9rZW4sXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICBgW2JyaWRnZTp3b3JrXSBBY2tub3dsZWRnZSBmYWlsZWQgd29ya0lkPSR7d29yay5pZH06ICR7ZXJyb3JNZXNzYWdlKGVycil9YCxcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3Qgd29ya1R5cGU6IHN0cmluZyA9IHdvcmsuZGF0YS50eXBlXG4gICAgICBzd2l0Y2ggKHdvcmsuZGF0YS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2hlYWx0aGNoZWNrJzpcbiAgICAgICAgICBhd2FpdCBhY2tXb3JrKClcbiAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoJ1ticmlkZ2U6d29ya10gSGVhbHRoY2hlY2sgcmVjZWl2ZWQnKVxuICAgICAgICAgIGxvZ2dlci5sb2dWZXJib3NlKCdIZWFsdGhjaGVjayByZWNlaXZlZCcpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnc2Vzc2lvbic6IHtcbiAgICAgICAgICBjb25zdCBzZXNzaW9uSWQgPSB3b3JrLmRhdGEuaWRcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFsaWRhdGVCcmlkZ2VJZChzZXNzaW9uSWQsICdzZXNzaW9uX2lkJylcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGF3YWl0IGFja1dvcmsoKVxuICAgICAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKGBJbnZhbGlkIHNlc3Npb25faWQgcmVjZWl2ZWQ6ICR7c2Vzc2lvbklkfWApXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIElmIHRoZSBzZXNzaW9uIGlzIGFscmVhZHkgcnVubmluZywgZGVsaXZlciB0aGUgZnJlc2ggdG9rZW4gc29cbiAgICAgICAgICAvLyB0aGUgY2hpbGQgcHJvY2VzcyBjYW4gcmVjb25uZWN0IGl0cyBXZWJTb2NrZXQgd2l0aCB0aGUgbmV3XG4gICAgICAgICAgLy8gc2Vzc2lvbiBpbmdyZXNzIHRva2VuLiBUaGlzIGhhbmRsZXMgdGhlIGNhc2Ugd2hlcmUgdGhlIHNlcnZlclxuICAgICAgICAgIC8vIHJlLWRpc3BhdGNoZXMgd29yayBmb3IgYW4gZXhpc3Rpbmcgc2Vzc2lvbiBhZnRlciB0aGUgV1MgZHJvcHMuXG4gICAgICAgICAgY29uc3QgZXhpc3RpbmdIYW5kbGUgPSBhY3RpdmVTZXNzaW9ucy5nZXQoc2Vzc2lvbklkKVxuICAgICAgICAgIGlmIChleGlzdGluZ0hhbmRsZSkge1xuICAgICAgICAgICAgZXhpc3RpbmdIYW5kbGUudXBkYXRlQWNjZXNzVG9rZW4oc2VjcmV0LnNlc3Npb25faW5ncmVzc190b2tlbilcbiAgICAgICAgICAgIHNlc3Npb25JbmdyZXNzVG9rZW5zLnNldChzZXNzaW9uSWQsIHNlY3JldC5zZXNzaW9uX2luZ3Jlc3NfdG9rZW4pXG4gICAgICAgICAgICBzZXNzaW9uV29ya0lkcy5zZXQoc2Vzc2lvbklkLCB3b3JrLmlkKVxuICAgICAgICAgICAgLy8gUmUtc2NoZWR1bGUgbmV4dCByZWZyZXNoIGZyb20gdGhlIGZyZXNoIEpXVCdzIGV4cGlyeS4gb25SZWZyZXNoXG4gICAgICAgICAgICAvLyBicmFuY2hlcyBvbiB2MlNlc3Npb25zIHNvIGJvdGggdjEgYW5kIHYyIGFyZSBzYWZlIGhlcmUuXG4gICAgICAgICAgICB0b2tlblJlZnJlc2g/LnNjaGVkdWxlKHNlc3Npb25JZCwgc2VjcmV0LnNlc3Npb25faW5ncmVzc190b2tlbilcbiAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgYFticmlkZ2U6d29ya10gVXBkYXRlZCBhY2Nlc3MgdG9rZW4gZm9yIGV4aXN0aW5nIHNlc3Npb25JZD0ke3Nlc3Npb25JZH0gd29ya0lkPSR7d29yay5pZH1gLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgYXdhaXQgYWNrV29yaygpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEF0IGNhcGFjaXR5IFx1MjAxNCB0b2tlbiByZWZyZXNoIGZvciBleGlzdGluZyBzZXNzaW9ucyBpcyBoYW5kbGVkXG4gICAgICAgICAgLy8gYWJvdmUsIGJ1dCB3ZSBjYW5ub3Qgc3Bhd24gbmV3IG9uZXMuIFRoZSBwb3N0LXN3aXRjaCBjYXBhY2l0eVxuICAgICAgICAgIC8vIHNsZWVwIHdpbGwgdGhyb3R0bGUgdGhlIGxvb3A7IGp1c3QgYnJlYWsgaGVyZS5cbiAgICAgICAgICBpZiAoYWN0aXZlU2Vzc2lvbnMuc2l6ZSA+PSBjb25maWcubWF4U2Vzc2lvbnMpIHtcbiAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgYFticmlkZ2U6d29ya10gQXQgY2FwYWNpdHkgKCR7YWN0aXZlU2Vzc2lvbnMuc2l6ZX0vJHtjb25maWcubWF4U2Vzc2lvbnN9KSwgY2Fubm90IHNwYXduIG5ldyBzZXNzaW9uIGZvciB3b3JrSWQ9JHt3b3JrLmlkfWAsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGF3YWl0IGFja1dvcmsoKVxuICAgICAgICAgIGNvbnN0IHNwYXduU3RhcnRUaW1lID0gRGF0ZS5ub3coKVxuXG4gICAgICAgICAgLy8gQ0NSIHYyIHBhdGg6IHJlZ2lzdGVyIHRoaXMgYnJpZGdlIGFzIHRoZSBzZXNzaW9uIHdvcmtlciwgZ2V0IHRoZVxuICAgICAgICAgIC8vIGVwb2NoLCBhbmQgcG9pbnQgdGhlIGNoaWxkIGF0IC92MS9jb2RlL3Nlc3Npb25zL3tpZH0uIFRoZSBjaGlsZFxuICAgICAgICAgIC8vIGFscmVhZHkgaGFzIHRoZSBmdWxsIHYyIGNsaWVudCAoU1NFVHJhbnNwb3J0ICsgQ0NSQ2xpZW50KSBcdTIwMTQgc2FtZVxuICAgICAgICAgIC8vIGNvZGUgcGF0aCBlbnZpcm9ubWVudC1tYW5hZ2VyIGxhdW5jaGVzIGluIGNvbnRhaW5lcnMuXG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyB2MSBwYXRoOiBTZXNzaW9uLUluZ3Jlc3MgV2ViU29ja2V0LiBVc2VzIGNvbmZpZy5zZXNzaW9uSW5ncmVzc1VybFxuICAgICAgICAgIC8vIChub3Qgc2VjcmV0LmFwaV9iYXNlX3VybCwgd2hpY2ggbWF5IHBvaW50IHRvIGEgcmVtb3RlIHByb3h5IHR1bm5lbFxuICAgICAgICAgIC8vIHRoYXQgZG9lc24ndCBrbm93IGFib3V0IGxvY2FsbHktY3JlYXRlZCBzZXNzaW9ucykuXG4gICAgICAgICAgbGV0IHNka1VybDogc3RyaW5nXG4gICAgICAgICAgbGV0IHVzZUNjclYyID0gZmFsc2VcbiAgICAgICAgICBsZXQgd29ya2VyRXBvY2g6IG51bWJlciB8IHVuZGVmaW5lZFxuICAgICAgICAgIC8vIFNlcnZlciBkZWNpZGVzIHBlci1zZXNzaW9uIHZpYSB0aGUgd29yayBzZWNyZXQ7IGVudiB2YXIgaXMgdGhlXG4gICAgICAgICAgLy8gYW50LWRldiBvdmVycmlkZSAoZS5nLiBmb3JjaW5nIHYyIGJlZm9yZSB0aGUgc2VydmVyIGZsYWcgaXMgb24pLlxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHNlY3JldC51c2VfY29kZV9zZXNzaW9ucyA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAgaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuQ0xBVURFX0JSSURHRV9VU0VfQ0NSX1YyKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgc2RrVXJsID0gYnVpbGRDQ1J2MlNka1VybChjb25maWcuYXBpQmFzZVVybCwgc2Vzc2lvbklkKVxuICAgICAgICAgICAgLy8gUmV0cnkgb25jZSBvbiB0cmFuc2llbnQgZmFpbHVyZSAobmV0d29yayBibGlwLCA1MDApIGJlZm9yZVxuICAgICAgICAgICAgLy8gcGVybWFuZW50bHkgZ2l2aW5nIHVwIGFuZCBraWxsaW5nIHRoZSBzZXNzaW9uLlxuICAgICAgICAgICAgZm9yIChsZXQgYXR0ZW1wdCA9IDE7IGF0dGVtcHQgPD0gMjsgYXR0ZW1wdCsrKSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgd29ya2VyRXBvY2ggPSBhd2FpdCByZWdpc3RlcldvcmtlcihcbiAgICAgICAgICAgICAgICAgIHNka1VybCxcbiAgICAgICAgICAgICAgICAgIHNlY3JldC5zZXNzaW9uX2luZ3Jlc3NfdG9rZW4sXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIHVzZUNjclYyID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgICAgIGBbYnJpZGdlOnNlc3Npb25dIENDUiB2MjogcmVnaXN0ZXJlZCB3b3JrZXIgc2Vzc2lvbklkPSR7c2Vzc2lvbklkfSBlcG9jaD0ke3dvcmtlckVwb2NofSBhdHRlbXB0PSR7YXR0ZW1wdH1gLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJNc2cgPSBlcnJvck1lc3NhZ2UoZXJyKVxuICAgICAgICAgICAgICAgIGlmIChhdHRlbXB0IDwgMikge1xuICAgICAgICAgICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgICAgICAgICBgW2JyaWRnZTpzZXNzaW9uXSBDQ1IgdjI6IHJlZ2lzdGVyV29ya2VyIGF0dGVtcHQgJHthdHRlbXB0fSBmYWlsZWQsIHJldHJ5aW5nOiAke2Vyck1zZ31gLFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoMl8wMDAsIGxvb3BTaWduYWwpXG4gICAgICAgICAgICAgICAgICBpZiAobG9vcFNpZ25hbC5hYm9ydGVkKSBicmVha1xuICAgICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKFxuICAgICAgICAgICAgICAgICAgYENDUiB2MiB3b3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZCBmb3Igc2Vzc2lvbiAke3Nlc3Npb25JZH06ICR7ZXJyTXNnfWAsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGxvZ0Vycm9yKG5ldyBFcnJvcihgcmVnaXN0ZXJXb3JrZXIgZmFpbGVkOiAke2Vyck1zZ31gKSlcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWRXb3JrSWRzLmFkZCh3b3JrLmlkKVxuICAgICAgICAgICAgICAgIHRyYWNrQ2xlYW51cChcbiAgICAgICAgICAgICAgICAgIHN0b3BXb3JrV2l0aFJldHJ5KFxuICAgICAgICAgICAgICAgICAgICBhcGksXG4gICAgICAgICAgICAgICAgICAgIGVudmlyb25tZW50SWQsXG4gICAgICAgICAgICAgICAgICAgIHdvcmsuaWQsXG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlcixcbiAgICAgICAgICAgICAgICAgICAgYmFja29mZkNvbmZpZy5zdG9wV29ya0Jhc2VEZWxheU1zLFxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdXNlQ2NyVjIpIGJyZWFrXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNka1VybCA9IGJ1aWxkU2RrVXJsKGNvbmZpZy5zZXNzaW9uSW5ncmVzc1VybCwgc2Vzc2lvbklkKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEluIHdvcmt0cmVlIG1vZGUsIG9uLWRlbWFuZCBzZXNzaW9ucyBnZXQgYW4gaXNvbGF0ZWQgZ2l0IHdvcmt0cmVlXG4gICAgICAgICAgLy8gc28gY29uY3VycmVudCBzZXNzaW9ucyBkb24ndCBpbnRlcmZlcmUgd2l0aCBlYWNoIG90aGVyJ3MgZmlsZVxuICAgICAgICAgIC8vIGNoYW5nZXMuIFRoZSBwcmUtY3JlYXRlZCBpbml0aWFsIHNlc3Npb24gKGlmIGFueSkgcnVucyBpblxuICAgICAgICAgIC8vIGNvbmZpZy5kaXIgc28gdGhlIHVzZXIncyBmaXJzdCBzZXNzaW9uIGxhbmRzIGluIHRoZSBkaXJlY3RvcnkgdGhleVxuICAgICAgICAgIC8vIGludm9rZWQgYHJjYCBmcm9tIFx1MjAxNCBtYXRjaGluZyB0aGUgb2xkIHNpbmdsZS1zZXNzaW9uIFVYLlxuICAgICAgICAgIC8vIEluIHNhbWUtZGlyIGFuZCBzaW5nbGUtc2Vzc2lvbiBtb2RlcywgYWxsIHNlc3Npb25zIHNoYXJlIGNvbmZpZy5kaXIuXG4gICAgICAgICAgLy8gQ2FwdHVyZSBzcGF3bk1vZGUgYmVmb3JlIHRoZSBhd2FpdCBiZWxvdyBcdTIwMTQgdGhlIGB3YCBrZXkgaGFuZGxlclxuICAgICAgICAgIC8vIG11dGF0ZXMgY29uZmlnLnNwYXduTW9kZSBkaXJlY3RseSwgYW5kIGNyZWF0ZUFnZW50V29ya3RyZWUgY2FuXG4gICAgICAgICAgLy8gdGFrZSAxLTJzLCBzbyByZWFkaW5nIGNvbmZpZy5zcGF3bk1vZGUgYWZ0ZXIgdGhlIGF3YWl0IGNhblxuICAgICAgICAgIC8vIHByb2R1Y2UgY29udHJhZGljdG9yeSBhbmFseXRpY3MgKHNwYXduX21vZGU6J3NhbWUtZGlyJywgaW5fd29ya3RyZWU6dHJ1ZSkuXG4gICAgICAgICAgY29uc3Qgc3Bhd25Nb2RlQXREZWNpc2lvbiA9IGNvbmZpZy5zcGF3bk1vZGVcbiAgICAgICAgICBsZXQgc2Vzc2lvbkRpciA9IGNvbmZpZy5kaXJcbiAgICAgICAgICBsZXQgd29ya3RyZWVDcmVhdGVNcyA9IDBcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBzcGF3bk1vZGVBdERlY2lzaW9uID09PSAnd29ya3RyZWUnICYmXG4gICAgICAgICAgICAoaW5pdGlhbFNlc3Npb25JZCA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgICFzYW1lU2Vzc2lvbklkKHNlc3Npb25JZCwgaW5pdGlhbFNlc3Npb25JZCkpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCB3dFN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgY29uc3Qgd3QgPSBhd2FpdCBjcmVhdGVBZ2VudFdvcmt0cmVlKFxuICAgICAgICAgICAgICAgIGBicmlkZ2UtJHtzYWZlRmlsZW5hbWVJZChzZXNzaW9uSWQpfWAsXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgd29ya3RyZWVDcmVhdGVNcyA9IERhdGUubm93KCkgLSB3dFN0YXJ0XG4gICAgICAgICAgICAgIHNlc3Npb25Xb3JrdHJlZXMuc2V0KHNlc3Npb25JZCwge1xuICAgICAgICAgICAgICAgIHdvcmt0cmVlUGF0aDogd3Qud29ya3RyZWVQYXRoLFxuICAgICAgICAgICAgICAgIHdvcmt0cmVlQnJhbmNoOiB3dC53b3JrdHJlZUJyYW5jaCxcbiAgICAgICAgICAgICAgICBnaXRSb290OiB3dC5naXRSb290LFxuICAgICAgICAgICAgICAgIGhvb2tCYXNlZDogd3QuaG9va0Jhc2VkLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBzZXNzaW9uRGlyID0gd3Qud29ya3RyZWVQYXRoXG4gICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgICBgW2JyaWRnZTpzZXNzaW9uXSBDcmVhdGVkIHdvcmt0cmVlIGZvciBzZXNzaW9uSWQ9JHtzZXNzaW9uSWR9IGF0ICR7d3Qud29ya3RyZWVQYXRofWAsXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICBjb25zdCBlcnJNc2cgPSBlcnJvck1lc3NhZ2UoZXJyKVxuICAgICAgICAgICAgICBsb2dnZXIubG9nRXJyb3IoXG4gICAgICAgICAgICAgICAgYEZhaWxlZCB0byBjcmVhdGUgd29ya3RyZWUgZm9yIHNlc3Npb24gJHtzZXNzaW9uSWR9OiAke2Vyck1zZ31gLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGxvZ0Vycm9yKG5ldyBFcnJvcihgV29ya3RyZWUgY3JlYXRpb24gZmFpbGVkOiAke2Vyck1zZ31gKSlcbiAgICAgICAgICAgICAgY29tcGxldGVkV29ya0lkcy5hZGQod29yay5pZClcbiAgICAgICAgICAgICAgdHJhY2tDbGVhbnVwKFxuICAgICAgICAgICAgICAgIHN0b3BXb3JrV2l0aFJldHJ5KFxuICAgICAgICAgICAgICAgICAgYXBpLFxuICAgICAgICAgICAgICAgICAgZW52aXJvbm1lbnRJZCxcbiAgICAgICAgICAgICAgICAgIHdvcmsuaWQsXG4gICAgICAgICAgICAgICAgICBsb2dnZXIsXG4gICAgICAgICAgICAgICAgICBiYWNrb2ZmQ29uZmlnLnN0b3BXb3JrQmFzZURlbGF5TXMsXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgIGBbYnJpZGdlOnNlc3Npb25dIFNwYXduaW5nIHNlc3Npb25JZD0ke3Nlc3Npb25JZH0gc2RrVXJsPSR7c2RrVXJsfWAsXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgLy8gY29tcGF0LXN1cmZhY2Ugc2Vzc2lvbl8qIGZvcm0gZm9yIGxvZ2dlci9TZXNzaW9ucy1BUEkgY2FsbHMuXG4gICAgICAgICAgLy8gV29yayBwb2xsIHJldHVybnMgY3NlXyogdW5kZXIgdjIgY29tcGF0OyBjb252ZXJ0IGJlZm9yZSBzcGF3biBzb1xuICAgICAgICAgIC8vIHRoZSBvbkZpcnN0VXNlck1lc3NhZ2UgY2FsbGJhY2sgY2FuIGNsb3NlIG92ZXIgaXQuXG4gICAgICAgICAgY29uc3QgY29tcGF0U2Vzc2lvbklkID0gdG9Db21wYXRTZXNzaW9uSWQoc2Vzc2lvbklkKVxuXG4gICAgICAgICAgY29uc3Qgc3Bhd25SZXN1bHQgPSBzYWZlU3Bhd24oXG4gICAgICAgICAgICBzcGF3bmVyLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzZXNzaW9uSWQsXG4gICAgICAgICAgICAgIHNka1VybCxcbiAgICAgICAgICAgICAgYWNjZXNzVG9rZW46IHNlY3JldC5zZXNzaW9uX2luZ3Jlc3NfdG9rZW4sXG4gICAgICAgICAgICAgIHVzZUNjclYyLFxuICAgICAgICAgICAgICB3b3JrZXJFcG9jaCxcbiAgICAgICAgICAgICAgb25GaXJzdFVzZXJNZXNzYWdlOiB0ZXh0ID0+IHtcbiAgICAgICAgICAgICAgICAvLyBTZXJ2ZXItc2V0IHRpdGxlcyAoLS1uYW1lLCB3ZWIgcmVuYW1lKSB3aW4uIGZldGNoU2Vzc2lvblRpdGxlXG4gICAgICAgICAgICAgICAgLy8gcnVucyBjb25jdXJyZW50bHk7IGlmIGl0IGFscmVhZHkgcG9wdWxhdGVkIHRpdGxlZFNlc3Npb25zLFxuICAgICAgICAgICAgICAgIC8vIHNraXAuIElmIGl0IGhhc24ndCByZXNvbHZlZCB5ZXQsIHRoZSBkZXJpdmVkIHRpdGxlIHN0aWNrcyBcdTIwMTRcbiAgICAgICAgICAgICAgICAvLyBhY2NlcHRhYmxlIHNpbmNlIHRoZSBzZXJ2ZXIgaGFkIG5vIHRpdGxlIGF0IHNwYXduIHRpbWUuXG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlZFNlc3Npb25zLmhhcyhjb21wYXRTZXNzaW9uSWQpKSByZXR1cm5cbiAgICAgICAgICAgICAgICB0aXRsZWRTZXNzaW9ucy5hZGQoY29tcGF0U2Vzc2lvbklkKVxuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZGVyaXZlU2Vzc2lvblRpdGxlKHRleHQpXG4gICAgICAgICAgICAgICAgbG9nZ2VyLnNldFNlc3Npb25UaXRsZShjb21wYXRTZXNzaW9uSWQsIHRpdGxlKVxuICAgICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgICAgIGBbYnJpZGdlOnRpdGxlXSBkZXJpdmVkIHRpdGxlIGZvciAke2NvbXBhdFNlc3Npb25JZH06ICR7dGl0bGV9YCxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgdm9pZCBpbXBvcnQoJy4vY3JlYXRlU2Vzc2lvbi5qcycpXG4gICAgICAgICAgICAgICAgICAudGhlbigoeyB1cGRhdGVCcmlkZ2VTZXNzaW9uVGl0bGUgfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQnJpZGdlU2Vzc2lvblRpdGxlKGNvbXBhdFNlc3Npb25JZCwgdGl0bGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICBiYXNlVXJsOiBjb25maWcuYXBpQmFzZVVybCxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+XG4gICAgICAgICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgICAgICAgICBgW2JyaWRnZTp0aXRsZV0gZmFpbGVkIHRvIHVwZGF0ZSB0aXRsZSBmb3IgJHtjb21wYXRTZXNzaW9uSWR9OiAke2Vycn1gLFxuICAgICAgICAgICAgICAgICAgICAgIHsgbGV2ZWw6ICdlcnJvcicgfSxcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXNzaW9uRGlyLFxuICAgICAgICAgIClcbiAgICAgICAgICBpZiAodHlwZW9mIHNwYXduUmVzdWx0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKFxuICAgICAgICAgICAgICBgRmFpbGVkIHRvIHNwYXduIHNlc3Npb24gJHtzZXNzaW9uSWR9OiAke3NwYXduUmVzdWx0fWAsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAvLyBDbGVhbiB1cCB3b3JrdHJlZSBpZiBvbmUgd2FzIGNyZWF0ZWQgZm9yIHRoaXMgc2Vzc2lvblxuICAgICAgICAgICAgY29uc3Qgd3QgPSBzZXNzaW9uV29ya3RyZWVzLmdldChzZXNzaW9uSWQpXG4gICAgICAgICAgICBpZiAod3QpIHtcbiAgICAgICAgICAgICAgc2Vzc2lvbldvcmt0cmVlcy5kZWxldGUoc2Vzc2lvbklkKVxuICAgICAgICAgICAgICB0cmFja0NsZWFudXAoXG4gICAgICAgICAgICAgICAgcmVtb3ZlQWdlbnRXb3JrdHJlZShcbiAgICAgICAgICAgICAgICAgIHd0Lndvcmt0cmVlUGF0aCxcbiAgICAgICAgICAgICAgICAgIHd0Lndvcmt0cmVlQnJhbmNoLFxuICAgICAgICAgICAgICAgICAgd3QuZ2l0Um9vdCxcbiAgICAgICAgICAgICAgICAgIHd0Lmhvb2tCYXNlZCxcbiAgICAgICAgICAgICAgICApLmNhdGNoKChlcnI6IHVua25vd24pID0+XG4gICAgICAgICAgICAgICAgICBsb2dnZXIubG9nVmVyYm9zZShcbiAgICAgICAgICAgICAgICAgICAgYEZhaWxlZCB0byByZW1vdmUgd29ya3RyZWUgJHt3dC53b3JrdHJlZVBhdGh9OiAke2Vycm9yTWVzc2FnZShlcnIpfWAsXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbXBsZXRlZFdvcmtJZHMuYWRkKHdvcmsuaWQpXG4gICAgICAgICAgICB0cmFja0NsZWFudXAoXG4gICAgICAgICAgICAgIHN0b3BXb3JrV2l0aFJldHJ5KFxuICAgICAgICAgICAgICAgIGFwaSxcbiAgICAgICAgICAgICAgICBlbnZpcm9ubWVudElkLFxuICAgICAgICAgICAgICAgIHdvcmsuaWQsXG4gICAgICAgICAgICAgICAgbG9nZ2VyLFxuICAgICAgICAgICAgICAgIGJhY2tvZmZDb25maWcuc3RvcFdvcmtCYXNlRGVsYXlNcyxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGhhbmRsZSA9IHNwYXduUmVzdWx0XG5cbiAgICAgICAgICBjb25zdCBzcGF3bkR1cmF0aW9uTXMgPSBEYXRlLm5vdygpIC0gc3Bhd25TdGFydFRpbWVcbiAgICAgICAgICBsb2dFdmVudCgndGVuZ3VfYnJpZGdlX3Nlc3Npb25fc3RhcnRlZCcsIHtcbiAgICAgICAgICAgIGFjdGl2ZV9zZXNzaW9uczogYWN0aXZlU2Vzc2lvbnMuc2l6ZSxcbiAgICAgICAgICAgIHNwYXduX21vZGU6XG4gICAgICAgICAgICAgIHNwYXduTW9kZUF0RGVjaXNpb24gYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgICAgIGluX3dvcmt0cmVlOiBzZXNzaW9uV29ya3RyZWVzLmhhcyhzZXNzaW9uSWQpLFxuICAgICAgICAgICAgc3Bhd25fZHVyYXRpb25fbXM6IHNwYXduRHVyYXRpb25NcyxcbiAgICAgICAgICAgIHdvcmt0cmVlX2NyZWF0ZV9tczogd29ya3RyZWVDcmVhdGVNcyxcbiAgICAgICAgICAgIGluUHJvdGVjdGVkTmFtZXNwYWNlOiBpc0luUHJvdGVjdGVkTmFtZXNwYWNlKCksXG4gICAgICAgICAgfSlcbiAgICAgICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdpbmZvJywgJ2JyaWRnZV9zZXNzaW9uX3N0YXJ0ZWQnLCB7XG4gICAgICAgICAgICBzcGF3bl9tb2RlOiBzcGF3bk1vZGVBdERlY2lzaW9uLFxuICAgICAgICAgICAgaW5fd29ya3RyZWU6IHNlc3Npb25Xb3JrdHJlZXMuaGFzKHNlc3Npb25JZCksXG4gICAgICAgICAgICBzcGF3bl9kdXJhdGlvbl9tczogc3Bhd25EdXJhdGlvbk1zLFxuICAgICAgICAgICAgd29ya3RyZWVfY3JlYXRlX21zOiB3b3JrdHJlZUNyZWF0ZU1zLFxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBhY3RpdmVTZXNzaW9ucy5zZXQoc2Vzc2lvbklkLCBoYW5kbGUpXG4gICAgICAgICAgc2Vzc2lvbldvcmtJZHMuc2V0KHNlc3Npb25JZCwgd29yay5pZClcbiAgICAgICAgICBzZXNzaW9uSW5ncmVzc1Rva2Vucy5zZXQoc2Vzc2lvbklkLCBzZWNyZXQuc2Vzc2lvbl9pbmdyZXNzX3Rva2VuKVxuICAgICAgICAgIHNlc3Npb25Db21wYXRJZHMuc2V0KHNlc3Npb25JZCwgY29tcGF0U2Vzc2lvbklkKVxuXG4gICAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gRGF0ZS5ub3coKVxuICAgICAgICAgIHNlc3Npb25TdGFydFRpbWVzLnNldChzZXNzaW9uSWQsIHN0YXJ0VGltZSlcblxuICAgICAgICAgIC8vIFVzZSBhIGdlbmVyaWMgcHJvbXB0IGRlc2NyaXB0aW9uIHNpbmNlIHdlIG5vIGxvbmdlciBnZXQgc3RhcnR1cF9jb250ZXh0XG4gICAgICAgICAgbG9nZ2VyLmxvZ1Nlc3Npb25TdGFydChzZXNzaW9uSWQsIGBTZXNzaW9uICR7c2Vzc2lvbklkfWApXG5cbiAgICAgICAgICAvLyBDb21wdXRlIHRoZSBhY3R1YWwgZGVidWcgZmlsZSBwYXRoIChtaXJyb3JzIHNlc3Npb25SdW5uZXIudHMgbG9naWMpXG4gICAgICAgICAgY29uc3Qgc2FmZUlkID0gc2FmZUZpbGVuYW1lSWQoc2Vzc2lvbklkKVxuICAgICAgICAgIGxldCBzZXNzaW9uRGVidWdGaWxlOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICAgICAgICBpZiAoY29uZmlnLmRlYnVnRmlsZSkge1xuICAgICAgICAgICAgY29uc3QgZXh0ID0gY29uZmlnLmRlYnVnRmlsZS5sYXN0SW5kZXhPZignLicpXG4gICAgICAgICAgICBpZiAoZXh0ID4gMCkge1xuICAgICAgICAgICAgICBzZXNzaW9uRGVidWdGaWxlID0gYCR7Y29uZmlnLmRlYnVnRmlsZS5zbGljZSgwLCBleHQpfS0ke3NhZmVJZH0ke2NvbmZpZy5kZWJ1Z0ZpbGUuc2xpY2UoZXh0KX1gXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZXNzaW9uRGVidWdGaWxlID0gYCR7Y29uZmlnLmRlYnVnRmlsZX0tJHtzYWZlSWR9YFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoY29uZmlnLnZlcmJvc2UgfHwgcHJvY2Vzcy5lbnYuVVNFUl9UWVBFID09PSAnYW50Jykge1xuICAgICAgICAgICAgc2Vzc2lvbkRlYnVnRmlsZSA9IGpvaW4oXG4gICAgICAgICAgICAgIHRtcGRpcigpLFxuICAgICAgICAgICAgICAnY2xhdWRlJyxcbiAgICAgICAgICAgICAgYGJyaWRnZS1zZXNzaW9uLSR7c2FmZUlkfS5sb2dgLFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZXNzaW9uRGVidWdGaWxlKSB7XG4gICAgICAgICAgICBsb2dnZXIubG9nVmVyYm9zZShgRGVidWcgbG9nOiAke3Nlc3Npb25EZWJ1Z0ZpbGV9YClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBSZWdpc3RlciBpbiB0aGUgc2Vzc2lvbnMgTWFwIGJlZm9yZSBzdGFydGluZyBzdGF0dXMgdXBkYXRlcyBzbyB0aGVcbiAgICAgICAgICAvLyBmaXJzdCByZW5kZXIgdGljayBzaG93cyB0aGUgY29ycmVjdCBjb3VudCBhbmQgYnVsbGV0IGxpc3QgaW4gc3luYy5cbiAgICAgICAgICBsb2dnZXIuYWRkU2Vzc2lvbihcbiAgICAgICAgICAgIGNvbXBhdFNlc3Npb25JZCxcbiAgICAgICAgICAgIGdldFJlbW90ZVNlc3Npb25VcmwoY29tcGF0U2Vzc2lvbklkLCBjb25maWcuc2Vzc2lvbkluZ3Jlc3NVcmwpLFxuICAgICAgICAgIClcblxuICAgICAgICAgIC8vIFN0YXJ0IGxpdmUgc3RhdHVzIHVwZGF0ZXMgYW5kIHRyYW5zaXRpb24gdG8gXCJBdHRhY2hlZFwiIHN0YXRlLlxuICAgICAgICAgIHN0YXJ0U3RhdHVzVXBkYXRlcygpXG4gICAgICAgICAgbG9nZ2VyLnNldEF0dGFjaGVkKGNvbXBhdFNlc3Npb25JZClcblxuICAgICAgICAgIC8vIE9uZS1zaG90IHRpdGxlIGZldGNoLiBJZiB0aGUgc2Vzc2lvbiBhbHJlYWR5IGhhcyBhIHRpdGxlIChzZXQgdmlhXG4gICAgICAgICAgLy8gLS1uYW1lLCB3ZWIgcmVuYW1lLCBvciAvcmVtb3RlLWNvbnRyb2wpLCBkaXNwbGF5IGl0IGFuZCBtYXJrIGFzXG4gICAgICAgICAgLy8gdGl0bGVkIHNvIHRoZSBmaXJzdC11c2VyLW1lc3NhZ2UgZmFsbGJhY2sgZG9lc24ndCBvdmVyd3JpdGUgaXQuXG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIG9uRmlyc3RVc2VyTWVzc2FnZSBkZXJpdmVzIG9uZSBmcm9tIHRoZSBmaXJzdCBwcm9tcHQuXG4gICAgICAgICAgdm9pZCBmZXRjaFNlc3Npb25UaXRsZShjb21wYXRTZXNzaW9uSWQsIGNvbmZpZy5hcGlCYXNlVXJsKVxuICAgICAgICAgICAgLnRoZW4odGl0bGUgPT4ge1xuICAgICAgICAgICAgICBpZiAodGl0bGUgJiYgYWN0aXZlU2Vzc2lvbnMuaGFzKHNlc3Npb25JZCkpIHtcbiAgICAgICAgICAgICAgICB0aXRsZWRTZXNzaW9ucy5hZGQoY29tcGF0U2Vzc2lvbklkKVxuICAgICAgICAgICAgICAgIGxvZ2dlci5zZXRTZXNzaW9uVGl0bGUoY29tcGF0U2Vzc2lvbklkLCB0aXRsZSlcbiAgICAgICAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICAgICAgICBgW2JyaWRnZTp0aXRsZV0gc2VydmVyIHRpdGxlIGZvciAke2NvbXBhdFNlc3Npb25JZH06ICR7dGl0bGV9YCxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+XG4gICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgICBgW2JyaWRnZTp0aXRsZV0gZmFpbGVkIHRvIGZldGNoIHRpdGxlIGZvciAke2NvbXBhdFNlc3Npb25JZH06ICR7ZXJyfWAsXG4gICAgICAgICAgICAgICAgeyBsZXZlbDogJ2Vycm9yJyB9LFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgLy8gU3RhcnQgcGVyLXNlc3Npb24gdGltZW91dCB3YXRjaGRvZ1xuICAgICAgICAgIGNvbnN0IHRpbWVvdXRNcyA9XG4gICAgICAgICAgICBjb25maWcuc2Vzc2lvblRpbWVvdXRNcyA/PyBERUZBVUxUX1NFU1NJT05fVElNRU9VVF9NU1xuICAgICAgICAgIGlmICh0aW1lb3V0TXMgPiAwKSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgIG9uU2Vzc2lvblRpbWVvdXQsXG4gICAgICAgICAgICAgIHRpbWVvdXRNcyxcbiAgICAgICAgICAgICAgc2Vzc2lvbklkLFxuICAgICAgICAgICAgICB0aW1lb3V0TXMsXG4gICAgICAgICAgICAgIGxvZ2dlcixcbiAgICAgICAgICAgICAgdGltZWRPdXRTZXNzaW9ucyxcbiAgICAgICAgICAgICAgaGFuZGxlLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgc2Vzc2lvblRpbWVycy5zZXQoc2Vzc2lvbklkLCB0aW1lcilcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTY2hlZHVsZSBwcm9hY3RpdmUgdG9rZW4gcmVmcmVzaCBiZWZvcmUgdGhlIEpXVCBleHBpcmVzLlxuICAgICAgICAgIC8vIG9uUmVmcmVzaCBicmFuY2hlcyBvbiB2MlNlc3Npb25zOiB2MSBkZWxpdmVycyBPQXV0aCB0byB0aGVcbiAgICAgICAgICAvLyBjaGlsZCwgdjIgdHJpZ2dlcnMgc2VydmVyIHJlLWRpc3BhdGNoIHZpYSByZWNvbm5lY3RTZXNzaW9uLlxuICAgICAgICAgIGlmICh1c2VDY3JWMikge1xuICAgICAgICAgICAgdjJTZXNzaW9ucy5hZGQoc2Vzc2lvbklkKVxuICAgICAgICAgIH1cbiAgICAgICAgICB0b2tlblJlZnJlc2g/LnNjaGVkdWxlKHNlc3Npb25JZCwgc2VjcmV0LnNlc3Npb25faW5ncmVzc190b2tlbilcblxuICAgICAgICAgIHZvaWQgaGFuZGxlLmRvbmUudGhlbihvblNlc3Npb25Eb25lKHNlc3Npb25JZCwgc3RhcnRUaW1lLCBoYW5kbGUpKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBhd2FpdCBhY2tXb3JrKClcbiAgICAgICAgICAvLyBHcmFjZWZ1bGx5IGlnbm9yZSB1bmtub3duIHdvcmsgdHlwZXMuIFRoZSBiYWNrZW5kIG1heSBzZW5kIG5ld1xuICAgICAgICAgIC8vIHR5cGVzIGJlZm9yZSB0aGUgYnJpZGdlIGNsaWVudCBpcyB1cGRhdGVkLlxuICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgIGBbYnJpZGdlOndvcmtdIFVua25vd24gd29yayB0eXBlOiAke3dvcmtUeXBlfSwgc2tpcHBpbmdgLFxuICAgICAgICAgIClcbiAgICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICAvLyBXaGVuIGF0IGNhcGFjaXR5LCB0aHJvdHRsZSB0aGUgbG9vcC4gVGhlIHN3aXRjaCBhYm92ZSBzdGlsbCBydW5zIHNvXG4gICAgICAvLyBleGlzdGluZy1zZXNzaW9uIHRva2VuIHJlZnJlc2hlcyBhcmUgcHJvY2Vzc2VkLCBidXQgd2Ugc2xlZXAgaGVyZVxuICAgICAgLy8gdG8gYXZvaWQgYnVzeS1sb29waW5nLiBJbmNsdWRlIHRoZSBjYXBhY2l0eSB3YWtlIHNpZ25hbCBzbyB0aGVcbiAgICAgIC8vIHNsZWVwIGlzIGludGVycnVwdGVkIGltbWVkaWF0ZWx5IHdoZW4gYSBzZXNzaW9uIGNvbXBsZXRlcy5cbiAgICAgIGlmIChhdENhcGFjaXR5QmVmb3JlU3dpdGNoKSB7XG4gICAgICAgIGNvbnN0IGNhcCA9IGNhcGFjaXR5V2FrZS5zaWduYWwoKVxuICAgICAgICBpZiAocG9sbENvbmZpZy5ub25fZXhjbHVzaXZlX2hlYXJ0YmVhdF9pbnRlcnZhbF9tcyA+IDApIHtcbiAgICAgICAgICBhd2FpdCBoZWFydGJlYXRBY3RpdmVXb3JrSXRlbXMoKVxuICAgICAgICAgIGF3YWl0IHNsZWVwKFxuICAgICAgICAgICAgcG9sbENvbmZpZy5ub25fZXhjbHVzaXZlX2hlYXJ0YmVhdF9pbnRlcnZhbF9tcyxcbiAgICAgICAgICAgIGNhcC5zaWduYWwsXG4gICAgICAgICAgKVxuICAgICAgICB9IGVsc2UgaWYgKHBvbGxDb25maWcubXVsdGlzZXNzaW9uX3BvbGxfaW50ZXJ2YWxfbXNfYXRfY2FwYWNpdHkgPiAwKSB7XG4gICAgICAgICAgYXdhaXQgc2xlZXAoXG4gICAgICAgICAgICBwb2xsQ29uZmlnLm11bHRpc2Vzc2lvbl9wb2xsX2ludGVydmFsX21zX2F0X2NhcGFjaXR5LFxuICAgICAgICAgICAgY2FwLnNpZ25hbCxcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgY2FwLmNsZWFudXAoKVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGxvb3BTaWduYWwuYWJvcnRlZCkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICAvLyBGYXRhbCBlcnJvcnMgKDQwMS80MDMpIFx1MjAxNCBubyBwb2ludCByZXRyeWluZywgYXV0aCB3b24ndCBmaXggaXRzZWxmXG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgQnJpZGdlRmF0YWxFcnJvcikge1xuICAgICAgICBmYXRhbEV4aXQgPSB0cnVlXG4gICAgICAgIC8vIFNlcnZlci1lbmZvcmNlZCBleHBpcnkgZ2V0cyBhIGNsZWFuIHN0YXR1cyBtZXNzYWdlLCBub3QgYW4gZXJyb3JcbiAgICAgICAgaWYgKGlzRXhwaXJlZEVycm9yVHlwZShlcnIuZXJyb3JUeXBlKSkge1xuICAgICAgICAgIGxvZ2dlci5sb2dTdGF0dXMoZXJyLm1lc3NhZ2UpXG4gICAgICAgIH0gZWxzZSBpZiAoaXNTdXBwcmVzc2libGU0MDMoZXJyKSkge1xuICAgICAgICAgIC8vIENvc21ldGljIDQwMyBlcnJvcnMgKGUuZy4sIGV4dGVybmFsX3BvbGxfc2Vzc2lvbnMgc2NvcGUsXG4gICAgICAgICAgLy8gZW52aXJvbm1lbnRzOm1hbmFnZSBwZXJtaXNzaW9uKSBcdTIwMTQgZG9uJ3Qgc2hvdyB0byB1c2VyXG4gICAgICAgICAgbG9nRm9yRGVidWdnaW5nKGBbYnJpZGdlOndvcmtdIFN1cHByZXNzZWQgNDAzIGVycm9yOiAke2Vyci5tZXNzYWdlfWApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKGVyci5tZXNzYWdlKVxuICAgICAgICAgIGxvZ0Vycm9yKGVycilcbiAgICAgICAgfVxuICAgICAgICBsb2dFdmVudCgndGVuZ3VfYnJpZGdlX2ZhdGFsX2Vycm9yJywge1xuICAgICAgICAgIHN0YXR1czogZXJyLnN0YXR1cyxcbiAgICAgICAgICBlcnJvcl90eXBlOlxuICAgICAgICAgICAgZXJyLmVycm9yVHlwZSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgICB9KVxuICAgICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKFxuICAgICAgICAgIGlzRXhwaXJlZEVycm9yVHlwZShlcnIuZXJyb3JUeXBlKSA/ICdpbmZvJyA6ICdlcnJvcicsXG4gICAgICAgICAgJ2JyaWRnZV9mYXRhbF9lcnJvcicsXG4gICAgICAgICAgeyBzdGF0dXM6IGVyci5zdGF0dXMsIGVycm9yX3R5cGU6IGVyci5lcnJvclR5cGUgfSxcbiAgICAgICAgKVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjb25zdCBlcnJNc2cgPSBkZXNjcmliZUF4aW9zRXJyb3IoZXJyKVxuXG4gICAgICBpZiAoaXNDb25uZWN0aW9uRXJyb3IoZXJyKSB8fCBpc1NlcnZlckVycm9yKGVycikpIHtcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuXG4gICAgICAgIC8vIERldGVjdCBzeXN0ZW0gc2xlZXAvd2FrZTogaWYgdGhlIGdhcCBzaW5jZSB0aGUgbGFzdCBwb2xsIGVycm9yXG4gICAgICAgIC8vIGdyZWF0bHkgZXhjZWVkcyB0aGUgZXhwZWN0ZWQgYmFja29mZiwgdGhlIG1hY2hpbmUgbGlrZWx5IHNsZXB0LlxuICAgICAgICAvLyBSZXNldCBlcnJvciB0cmFja2luZyBzbyB0aGUgYnJpZGdlIHJldHJpZXMgd2l0aCBhIGZyZXNoIGJ1ZGdldC5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGxhc3RQb2xsRXJyb3JUaW1lICE9PSBudWxsICYmXG4gICAgICAgICAgbm93IC0gbGFzdFBvbGxFcnJvclRpbWUgPiBwb2xsU2xlZXBEZXRlY3Rpb25UaHJlc2hvbGRNcyhiYWNrb2ZmQ29uZmlnKVxuICAgICAgICApIHtcbiAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICBgW2JyaWRnZTp3b3JrXSBEZXRlY3RlZCBzeXN0ZW0gc2xlZXAgKCR7TWF0aC5yb3VuZCgobm93IC0gbGFzdFBvbGxFcnJvclRpbWUpIC8gMTAwMCl9cyBnYXApLCByZXNldHRpbmcgZXJyb3IgYnVkZ2V0YCxcbiAgICAgICAgICApXG4gICAgICAgICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnaW5mbycsICdicmlkZ2VfcG9sbF9zbGVlcF9kZXRlY3RlZCcsIHtcbiAgICAgICAgICAgIGdhcE1zOiBub3cgLSBsYXN0UG9sbEVycm9yVGltZSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIGNvbm5FcnJvclN0YXJ0ID0gbnVsbFxuICAgICAgICAgIGNvbm5CYWNrb2ZmID0gMFxuICAgICAgICAgIGdlbmVyYWxFcnJvclN0YXJ0ID0gbnVsbFxuICAgICAgICAgIGdlbmVyYWxCYWNrb2ZmID0gMFxuICAgICAgICB9XG4gICAgICAgIGxhc3RQb2xsRXJyb3JUaW1lID0gbm93XG5cbiAgICAgICAgaWYgKCFjb25uRXJyb3JTdGFydCkge1xuICAgICAgICAgIGNvbm5FcnJvclN0YXJ0ID0gbm93XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWxhcHNlZCA9IG5vdyAtIGNvbm5FcnJvclN0YXJ0XG4gICAgICAgIGlmIChlbGFwc2VkID49IGJhY2tvZmZDb25maWcuY29ubkdpdmVVcE1zKSB7XG4gICAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKFxuICAgICAgICAgICAgYFNlcnZlciB1bnJlYWNoYWJsZSBmb3IgJHtNYXRoLnJvdW5kKGVsYXBzZWQgLyA2MF8wMDApfSBtaW51dGVzLCBnaXZpbmcgdXAuYCxcbiAgICAgICAgICApXG4gICAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2JyaWRnZV9wb2xsX2dpdmVfdXAnLCB7XG4gICAgICAgICAgICBlcnJvcl90eXBlOlxuICAgICAgICAgICAgICAnY29ubmVjdGlvbicgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgICAgIGVsYXBzZWRfbXM6IGVsYXBzZWQsXG4gICAgICAgICAgfSlcbiAgICAgICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdlcnJvcicsICdicmlkZ2VfcG9sbF9naXZlX3VwJywge1xuICAgICAgICAgICAgZXJyb3JfdHlwZTogJ2Nvbm5lY3Rpb24nLFxuICAgICAgICAgICAgZWxhcHNlZF9tczogZWxhcHNlZCxcbiAgICAgICAgICB9KVxuICAgICAgICAgIGZhdGFsRXhpdCA9IHRydWVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVzZXQgdGhlIG90aGVyIHRyYWNrIHdoZW4gc3dpdGNoaW5nIGVycm9yIHR5cGVzXG4gICAgICAgIGdlbmVyYWxFcnJvclN0YXJ0ID0gbnVsbFxuICAgICAgICBnZW5lcmFsQmFja29mZiA9IDBcblxuICAgICAgICBjb25uQmFja29mZiA9IGNvbm5CYWNrb2ZmXG4gICAgICAgICAgPyBNYXRoLm1pbihjb25uQmFja29mZiAqIDIsIGJhY2tvZmZDb25maWcuY29ubkNhcE1zKVxuICAgICAgICAgIDogYmFja29mZkNvbmZpZy5jb25uSW5pdGlhbE1zXG4gICAgICAgIGNvbnN0IGRlbGF5ID0gYWRkSml0dGVyKGNvbm5CYWNrb2ZmKVxuICAgICAgICBsb2dnZXIubG9nVmVyYm9zZShcbiAgICAgICAgICBgQ29ubmVjdGlvbiBlcnJvciwgcmV0cnlpbmcgaW4gJHtmb3JtYXREZWxheShkZWxheSl9ICgke01hdGgucm91bmQoZWxhcHNlZCAvIDEwMDApfXMgZWxhcHNlZCk6ICR7ZXJyTXNnfWAsXG4gICAgICAgIClcbiAgICAgICAgbG9nZ2VyLnVwZGF0ZVJlY29ubmVjdGluZ1N0YXR1cyhcbiAgICAgICAgICBmb3JtYXREZWxheShkZWxheSksXG4gICAgICAgICAgZm9ybWF0RHVyYXRpb24oZWxhcHNlZCksXG4gICAgICAgIClcbiAgICAgICAgLy8gVGhlIHBvbGxfZHVlIGhlYXJ0YmVhdC1sb29wIGV4aXQgbGVhdmVzIGEgaGVhbHRoeSBsZWFzZSBleHBvc2VkIHRvXG4gICAgICAgIC8vIHRoaXMgYmFja29mZiBwYXRoLiBIZWFydGJlYXQgYmVmb3JlIGVhY2ggc2xlZXAgc28gL3BvbGwgb3V0YWdlc1xuICAgICAgICAvLyAodGhlIFZlcmlmeUVudmlyb25tZW50U2VjcmV0QXV0aCBEQiBwYXRoIGhlYXJ0YmVhdCB3YXMgaW50cm9kdWNlZFxuICAgICAgICAvLyB0byBhdm9pZCkgZG9uJ3Qga2lsbCB0aGUgMzAwcyBsZWFzZSBUVEwuIE5vLW9wIHdoZW4gYWN0aXZlU2Vzc2lvbnNcbiAgICAgICAgLy8gaXMgZW1wdHkgb3IgaGVhcnRiZWF0IGlzIGRpc2FibGVkLlxuICAgICAgICBpZiAoZ2V0UG9sbEludGVydmFsQ29uZmlnKCkubm9uX2V4Y2x1c2l2ZV9oZWFydGJlYXRfaW50ZXJ2YWxfbXMgPiAwKSB7XG4gICAgICAgICAgYXdhaXQgaGVhcnRiZWF0QWN0aXZlV29ya0l0ZW1zKClcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBzbGVlcChkZWxheSwgbG9vcFNpZ25hbClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcblxuICAgICAgICAvLyBTbGVlcCBkZXRlY3Rpb24gZm9yIGdlbmVyYWwgZXJyb3JzIChzYW1lIGxvZ2ljIGFzIGNvbm5lY3Rpb24gZXJyb3JzKVxuICAgICAgICBpZiAoXG4gICAgICAgICAgbGFzdFBvbGxFcnJvclRpbWUgIT09IG51bGwgJiZcbiAgICAgICAgICBub3cgLSBsYXN0UG9sbEVycm9yVGltZSA+IHBvbGxTbGVlcERldGVjdGlvblRocmVzaG9sZE1zKGJhY2tvZmZDb25maWcpXG4gICAgICAgICkge1xuICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgIGBbYnJpZGdlOndvcmtdIERldGVjdGVkIHN5c3RlbSBzbGVlcCAoJHtNYXRoLnJvdW5kKChub3cgLSBsYXN0UG9sbEVycm9yVGltZSkgLyAxMDAwKX1zIGdhcCksIHJlc2V0dGluZyBlcnJvciBidWRnZXRgLFxuICAgICAgICAgIClcbiAgICAgICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdpbmZvJywgJ2JyaWRnZV9wb2xsX3NsZWVwX2RldGVjdGVkJywge1xuICAgICAgICAgICAgZ2FwTXM6IG5vdyAtIGxhc3RQb2xsRXJyb3JUaW1lLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgY29ubkVycm9yU3RhcnQgPSBudWxsXG4gICAgICAgICAgY29ubkJhY2tvZmYgPSAwXG4gICAgICAgICAgZ2VuZXJhbEVycm9yU3RhcnQgPSBudWxsXG4gICAgICAgICAgZ2VuZXJhbEJhY2tvZmYgPSAwXG4gICAgICAgIH1cbiAgICAgICAgbGFzdFBvbGxFcnJvclRpbWUgPSBub3dcblxuICAgICAgICBpZiAoIWdlbmVyYWxFcnJvclN0YXJ0KSB7XG4gICAgICAgICAgZ2VuZXJhbEVycm9yU3RhcnQgPSBub3dcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbGFwc2VkID0gbm93IC0gZ2VuZXJhbEVycm9yU3RhcnRcbiAgICAgICAgaWYgKGVsYXBzZWQgPj0gYmFja29mZkNvbmZpZy5nZW5lcmFsR2l2ZVVwTXMpIHtcbiAgICAgICAgICBsb2dnZXIubG9nRXJyb3IoXG4gICAgICAgICAgICBgUGVyc2lzdGVudCBlcnJvcnMgZm9yICR7TWF0aC5yb3VuZChlbGFwc2VkIC8gNjBfMDAwKX0gbWludXRlcywgZ2l2aW5nIHVwLmAsXG4gICAgICAgICAgKVxuICAgICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9icmlkZ2VfcG9sbF9naXZlX3VwJywge1xuICAgICAgICAgICAgZXJyb3JfdHlwZTpcbiAgICAgICAgICAgICAgJ2dlbmVyYWwnIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgICAgICBlbGFwc2VkX21zOiBlbGFwc2VkLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnZXJyb3InLCAnYnJpZGdlX3BvbGxfZ2l2ZV91cCcsIHtcbiAgICAgICAgICAgIGVycm9yX3R5cGU6ICdnZW5lcmFsJyxcbiAgICAgICAgICAgIGVsYXBzZWRfbXM6IGVsYXBzZWQsXG4gICAgICAgICAgfSlcbiAgICAgICAgICBmYXRhbEV4aXQgPSB0cnVlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlc2V0IHRoZSBvdGhlciB0cmFjayB3aGVuIHN3aXRjaGluZyBlcnJvciB0eXBlc1xuICAgICAgICBjb25uRXJyb3JTdGFydCA9IG51bGxcbiAgICAgICAgY29ubkJhY2tvZmYgPSAwXG5cbiAgICAgICAgZ2VuZXJhbEJhY2tvZmYgPSBnZW5lcmFsQmFja29mZlxuICAgICAgICAgID8gTWF0aC5taW4oZ2VuZXJhbEJhY2tvZmYgKiAyLCBiYWNrb2ZmQ29uZmlnLmdlbmVyYWxDYXBNcylcbiAgICAgICAgICA6IGJhY2tvZmZDb25maWcuZ2VuZXJhbEluaXRpYWxNc1xuICAgICAgICBjb25zdCBkZWxheSA9IGFkZEppdHRlcihnZW5lcmFsQmFja29mZilcbiAgICAgICAgbG9nZ2VyLmxvZ1ZlcmJvc2UoXG4gICAgICAgICAgYFBvbGwgZmFpbGVkLCByZXRyeWluZyBpbiAke2Zvcm1hdERlbGF5KGRlbGF5KX0gKCR7TWF0aC5yb3VuZChlbGFwc2VkIC8gMTAwMCl9cyBlbGFwc2VkKTogJHtlcnJNc2d9YCxcbiAgICAgICAgKVxuICAgICAgICBsb2dnZXIudXBkYXRlUmVjb25uZWN0aW5nU3RhdHVzKFxuICAgICAgICAgIGZvcm1hdERlbGF5KGRlbGF5KSxcbiAgICAgICAgICBmb3JtYXREdXJhdGlvbihlbGFwc2VkKSxcbiAgICAgICAgKVxuICAgICAgICBpZiAoZ2V0UG9sbEludGVydmFsQ29uZmlnKCkubm9uX2V4Y2x1c2l2ZV9oZWFydGJlYXRfaW50ZXJ2YWxfbXMgPiAwKSB7XG4gICAgICAgICAgYXdhaXQgaGVhcnRiZWF0QWN0aXZlV29ya0l0ZW1zKClcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBzbGVlcChkZWxheSwgbG9vcFNpZ25hbClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDbGVhbiB1cFxuICBzdG9wU3RhdHVzVXBkYXRlcygpXG4gIGxvZ2dlci5jbGVhclN0YXR1cygpXG5cbiAgY29uc3QgbG9vcER1cmF0aW9uTXMgPSBEYXRlLm5vdygpIC0gbG9vcFN0YXJ0VGltZVxuICBsb2dFdmVudCgndGVuZ3VfYnJpZGdlX3NodXRkb3duJywge1xuICAgIGFjdGl2ZV9zZXNzaW9uczogYWN0aXZlU2Vzc2lvbnMuc2l6ZSxcbiAgICBsb29wX2R1cmF0aW9uX21zOiBsb29wRHVyYXRpb25NcyxcbiAgfSlcbiAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnaW5mbycsICdicmlkZ2Vfc2h1dGRvd24nLCB7XG4gICAgYWN0aXZlX3Nlc3Npb25zOiBhY3RpdmVTZXNzaW9ucy5zaXplLFxuICAgIGxvb3BfZHVyYXRpb25fbXM6IGxvb3BEdXJhdGlvbk1zLFxuICB9KVxuXG4gIC8vIEdyYWNlZnVsIHNodXRkb3duOiBraWxsIGFjdGl2ZSBzZXNzaW9ucywgcmVwb3J0IHRoZW0gYXMgaW50ZXJydXB0ZWQsXG4gIC8vIGFyY2hpdmUgc2Vzc2lvbnMsIHRoZW4gZGVyZWdpc3RlciB0aGUgZW52aXJvbm1lbnQgc28gdGhlIHdlYiBVSSBzaG93c1xuICAvLyB0aGUgYnJpZGdlIGFzIG9mZmxpbmUuXG5cbiAgLy8gQ29sbGVjdCBhbGwgc2Vzc2lvbiBJRHMgdG8gYXJjaGl2ZSBvbiBleGl0LiBUaGlzIGluY2x1ZGVzOlxuICAvLyAxLiBBY3RpdmUgc2Vzc2lvbnMgKHNuYXBzaG90IGJlZm9yZSBraWxsaW5nIFx1MjAxNCBvblNlc3Npb25Eb25lIGNsZWFycyBtYXBzKVxuICAvLyAyLiBUaGUgaW5pdGlhbCBhdXRvLWNyZWF0ZWQgc2Vzc2lvbiAobWF5IG5ldmVyIGhhdmUgaGFkIHdvcmsgZGlzcGF0Y2hlZClcbiAgLy8gYXBpLmFyY2hpdmVTZXNzaW9uIGlzIGlkZW1wb3RlbnQgKDQwOSBpZiBhbHJlYWR5IGFyY2hpdmVkKSwgc29cbiAgLy8gZG91YmxlLWFyY2hpdmluZyBpcyBzYWZlLlxuICBjb25zdCBzZXNzaW9uc1RvQXJjaGl2ZSA9IG5ldyBTZXQoYWN0aXZlU2Vzc2lvbnMua2V5cygpKVxuICBpZiAoaW5pdGlhbFNlc3Npb25JZCkge1xuICAgIHNlc3Npb25zVG9BcmNoaXZlLmFkZChpbml0aWFsU2Vzc2lvbklkKVxuICB9XG4gIC8vIFNuYXBzaG90IGJlZm9yZSBraWxsaW5nIFx1MjAxNCBvblNlc3Npb25Eb25lIGNsZWFycyBzZXNzaW9uQ29tcGF0SWRzLlxuICBjb25zdCBjb21wYXRJZFNuYXBzaG90ID0gbmV3IE1hcChzZXNzaW9uQ29tcGF0SWRzKVxuXG4gIGlmIChhY3RpdmVTZXNzaW9ucy5zaXplID4gMCkge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbYnJpZGdlOnNodXRkb3duXSBTaHV0dGluZyBkb3duICR7YWN0aXZlU2Vzc2lvbnMuc2l6ZX0gYWN0aXZlIHNlc3Npb24ocylgLFxuICAgIClcbiAgICBsb2dnZXIubG9nU3RhdHVzKFxuICAgICAgYFNodXR0aW5nIGRvd24gJHthY3RpdmVTZXNzaW9ucy5zaXplfSBhY3RpdmUgc2Vzc2lvbihzKVxcdTIwMjZgLFxuICAgIClcblxuICAgIC8vIFNuYXBzaG90IHdvcmsgSURzIGJlZm9yZSBraWxsaW5nIFx1MjAxNCBvblNlc3Npb25Eb25lIGNsZWFycyB0aGUgbWFwcyB3aGVuXG4gICAgLy8gZWFjaCBjaGlsZCBleGl0cywgc28gd2UgbmVlZCBhIGNvcHkgZm9yIHRoZSBzdG9wV29yayBjYWxscyBiZWxvdy5cbiAgICBjb25zdCBzaHV0ZG93bldvcmtJZHMgPSBuZXcgTWFwKHNlc3Npb25Xb3JrSWRzKVxuXG4gICAgZm9yIChjb25zdCBbc2Vzc2lvbklkLCBoYW5kbGVdIG9mIGFjdGl2ZVNlc3Npb25zLmVudHJpZXMoKSkge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgW2JyaWRnZTpzaHV0ZG93bl0gU2VuZGluZyBTSUdURVJNIHRvIHNlc3Npb25JZD0ke3Nlc3Npb25JZH1gLFxuICAgICAgKVxuICAgICAgaGFuZGxlLmtpbGwoKVxuICAgIH1cblxuICAgIGNvbnN0IHRpbWVvdXQgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgICBhd2FpdCBQcm9taXNlLnJhY2UoW1xuICAgICAgUHJvbWlzZS5hbGxTZXR0bGVkKFsuLi5hY3RpdmVTZXNzaW9ucy52YWx1ZXMoKV0ubWFwKGggPT4gaC5kb25lKSksXG4gICAgICBzbGVlcChiYWNrb2ZmQ29uZmlnLnNodXRkb3duR3JhY2VNcyA/PyAzMF8wMDAsIHRpbWVvdXQuc2lnbmFsKSxcbiAgICBdKVxuICAgIHRpbWVvdXQuYWJvcnQoKVxuXG4gICAgLy8gU0lHS0lMTCBhbnkgcHJvY2Vzc2VzIHRoYXQgZGlkbid0IHJlc3BvbmQgdG8gU0lHVEVSTSB3aXRoaW4gdGhlIGdyYWNlIHdpbmRvd1xuICAgIGZvciAoY29uc3QgW3NpZCwgaGFuZGxlXSBvZiBhY3RpdmVTZXNzaW9ucy5lbnRyaWVzKCkpIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhgW2JyaWRnZTpzaHV0ZG93bl0gRm9yY2Uta2lsbGluZyBzdHVjayBzZXNzaW9uSWQ9JHtzaWR9YClcbiAgICAgIGhhbmRsZS5mb3JjZUtpbGwoKVxuICAgIH1cblxuICAgIC8vIENsZWFyIGFueSByZW1haW5pbmcgc2Vzc2lvbiB0aW1lb3V0IGFuZCByZWZyZXNoIHRpbWVyc1xuICAgIGZvciAoY29uc3QgdGltZXIgb2Ygc2Vzc2lvblRpbWVycy52YWx1ZXMoKSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgIH1cbiAgICBzZXNzaW9uVGltZXJzLmNsZWFyKClcbiAgICB0b2tlblJlZnJlc2g/LmNhbmNlbEFsbCgpXG5cbiAgICAvLyBDbGVhbiB1cCBhbnkgcmVtYWluaW5nIHdvcmt0cmVlcyBmcm9tIGFjdGl2ZSBzZXNzaW9ucy5cbiAgICAvLyBTbmFwc2hvdCBhbmQgY2xlYXIgdGhlIG1hcCBmaXJzdCBzbyBvblNlc3Npb25Eb25lICh3aGljaCBtYXkgZmlyZVxuICAgIC8vIGR1cmluZyB0aGUgYXdhaXQgYmVsb3cgd2hlbiBoYW5kbGUuZG9uZSByZXNvbHZlcykgd29uJ3QgdHJ5IHRvXG4gICAgLy8gcmVtb3ZlIHRoZSBzYW1lIHdvcmt0cmVlcyBhZ2Fpbi5cbiAgICBpZiAoc2Vzc2lvbldvcmt0cmVlcy5zaXplID4gMCkge1xuICAgICAgY29uc3QgcmVtYWluaW5nV29ya3RyZWVzID0gWy4uLnNlc3Npb25Xb3JrdHJlZXMudmFsdWVzKCldXG4gICAgICBzZXNzaW9uV29ya3RyZWVzLmNsZWFyKClcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFticmlkZ2U6c2h1dGRvd25dIENsZWFuaW5nIHVwICR7cmVtYWluaW5nV29ya3RyZWVzLmxlbmd0aH0gd29ya3RyZWUocylgLFxuICAgICAgKVxuICAgICAgYXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKFxuICAgICAgICByZW1haW5pbmdXb3JrdHJlZXMubWFwKHd0ID0+XG4gICAgICAgICAgcmVtb3ZlQWdlbnRXb3JrdHJlZShcbiAgICAgICAgICAgIHd0Lndvcmt0cmVlUGF0aCxcbiAgICAgICAgICAgIHd0Lndvcmt0cmVlQnJhbmNoLFxuICAgICAgICAgICAgd3QuZ2l0Um9vdCxcbiAgICAgICAgICAgIHd0Lmhvb2tCYXNlZCxcbiAgICAgICAgICApLFxuICAgICAgICApLFxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFN0b3AgYWxsIGFjdGl2ZSB3b3JrIGl0ZW1zIHNvIHRoZSBzZXJ2ZXIga25vd3MgdGhleSdyZSBkb25lXG4gICAgYXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKFxuICAgICAgWy4uLnNodXRkb3duV29ya0lkcy5lbnRyaWVzKCldLm1hcCgoW3Nlc3Npb25JZCwgd29ya0lkXSkgPT4ge1xuICAgICAgICByZXR1cm4gYXBpXG4gICAgICAgICAgLnN0b3BXb3JrKGVudmlyb25tZW50SWQsIHdvcmtJZCwgdHJ1ZSlcbiAgICAgICAgICAuY2F0Y2goZXJyID0+XG4gICAgICAgICAgICBsb2dnZXIubG9nVmVyYm9zZShcbiAgICAgICAgICAgICAgYEZhaWxlZCB0byBzdG9wIHdvcmsgJHt3b3JrSWR9IGZvciBzZXNzaW9uICR7c2Vzc2lvbklkfTogJHtlcnJvck1lc3NhZ2UoZXJyKX1gLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICApXG4gICAgICB9KSxcbiAgICApXG4gIH1cblxuICAvLyBFbnN1cmUgYWxsIGluLWZsaWdodCBjbGVhbnVwIChzdG9wV29yaywgd29ya3RyZWUgcmVtb3ZhbCkgZnJvbVxuICAvLyBvblNlc3Npb25Eb25lIGNvbXBsZXRlcyBiZWZvcmUgZGVyZWdpc3RlcmluZyBcdTIwMTQgb3RoZXJ3aXNlXG4gIC8vIHByb2Nlc3MuZXhpdCgpIGNhbiBraWxsIHRoZW0gbWlkLWZsaWdodC5cbiAgaWYgKHBlbmRpbmdDbGVhbnVwcy5zaXplID4gMCkge1xuICAgIGF3YWl0IFByb21pc2UuYWxsU2V0dGxlZChbLi4ucGVuZGluZ0NsZWFudXBzXSlcbiAgfVxuXG4gIC8vIEluIHNpbmdsZS1zZXNzaW9uIG1vZGUgd2l0aCBhIGtub3duIHNlc3Npb24sIGxlYXZlIHRoZSBzZXNzaW9uIGFuZFxuICAvLyBlbnZpcm9ubWVudCBhbGl2ZSBzbyBgY2xhdWRlIHJlbW90ZS1jb250cm9sIC0tc2Vzc2lvbi1pZD08aWQ+YCBjYW4gcmVzdW1lLlxuICAvLyBUaGUgYmFja2VuZCBHQ3Mgc3RhbGUgZW52aXJvbm1lbnRzIHZpYSBhIDRoIFRUTCAoQlJJREdFX0xBU1RfUE9MTF9UVEwpLlxuICAvLyBBcmNoaXZpbmcgdGhlIHNlc3Npb24gb3IgZGVyZWdpc3RlcmluZyB0aGUgZW52aXJvbm1lbnQgd291bGQgbWFrZSB0aGVcbiAgLy8gcHJpbnRlZCByZXN1bWUgY29tbWFuZCBhIGxpZSBcdTIwMTQgZGVyZWdpc3RlciBkZWxldGVzIEZpcmVzdG9yZSArIFJlZGlzIHN0cmVhbS5cbiAgLy8gU2tpcCB3aGVuIHRoZSBsb29wIGV4aXRlZCBmYXRhbGx5IChlbnYgZXhwaXJlZCwgYXV0aCBmYWlsZWQsIGdpdmUtdXApIFx1MjAxNFxuICAvLyByZXN1bWUgaXMgaW1wb3NzaWJsZSBpbiB0aG9zZSBjYXNlcyBhbmQgdGhlIG1lc3NhZ2Ugd291bGQgY29udHJhZGljdCB0aGVcbiAgLy8gZXJyb3IgYWxyZWFkeSBwcmludGVkLlxuICAvLyBmZWF0dXJlKCdLQUlST1MnKSBnYXRlOiAtLXNlc3Npb24taWQgaXMgYW50LW9ubHk7IHdpdGhvdXQgdGhlIGdhdGUsXG4gIC8vIHJldmVydCB0byB0aGUgcHJlLVBSIGJlaGF2aW9yIChhcmNoaXZlICsgZGVyZWdpc3RlciBvbiBldmVyeSBzaHV0ZG93bikuXG4gIGlmIChcbiAgICBmZWF0dXJlKCdLQUlST1MnKSAmJlxuICAgIGNvbmZpZy5zcGF3bk1vZGUgPT09ICdzaW5nbGUtc2Vzc2lvbicgJiZcbiAgICBpbml0aWFsU2Vzc2lvbklkICYmXG4gICAgIWZhdGFsRXhpdFxuICApIHtcbiAgICBsb2dnZXIubG9nU3RhdHVzKFxuICAgICAgYFJlc3VtZSB0aGlzIHNlc3Npb24gYnkgcnVubmluZyBcXGBibGF1ZGUgcmVtb3RlLWNvbnRyb2wgLS1jb250aW51ZVxcYGAsXG4gICAgKVxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbYnJpZGdlOnNodXRkb3duXSBTa2lwcGluZyBhcmNoaXZlK2RlcmVnaXN0ZXIgdG8gYWxsb3cgcmVzdW1lIG9mIHNlc3Npb24gJHtpbml0aWFsU2Vzc2lvbklkfWAsXG4gICAgKVxuICAgIHJldHVyblxuICB9XG5cbiAgLy8gQXJjaGl2ZSBhbGwga25vd24gc2Vzc2lvbnMgc28gdGhleSBkb24ndCBsaW5nZXIgYXMgaWRsZS9ydW5uaW5nIG9uIHRoZVxuICAvLyBzZXJ2ZXIgYWZ0ZXIgdGhlIGJyaWRnZSBnb2VzIG9mZmxpbmUuXG4gIGlmIChzZXNzaW9uc1RvQXJjaGl2ZS5zaXplID4gMCkge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbYnJpZGdlOnNodXRkb3duXSBBcmNoaXZpbmcgJHtzZXNzaW9uc1RvQXJjaGl2ZS5zaXplfSBzZXNzaW9uKHMpYCxcbiAgICApXG4gICAgYXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKFxuICAgICAgWy4uLnNlc3Npb25zVG9BcmNoaXZlXS5tYXAoc2Vzc2lvbklkID0+XG4gICAgICAgIGFwaVxuICAgICAgICAgIC5hcmNoaXZlU2Vzc2lvbihcbiAgICAgICAgICAgIGNvbXBhdElkU25hcHNob3QuZ2V0KHNlc3Npb25JZCkgPz8gdG9Db21wYXRTZXNzaW9uSWQoc2Vzc2lvbklkKSxcbiAgICAgICAgICApXG4gICAgICAgICAgLmNhdGNoKGVyciA9PlxuICAgICAgICAgICAgbG9nZ2VyLmxvZ1ZlcmJvc2UoXG4gICAgICAgICAgICAgIGBGYWlsZWQgdG8gYXJjaGl2ZSBzZXNzaW9uICR7c2Vzc2lvbklkfTogJHtlcnJvck1lc3NhZ2UoZXJyKX1gLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICApLFxuICAgICAgKSxcbiAgICApXG4gIH1cblxuICAvLyBEZXJlZ2lzdGVyIHRoZSBlbnZpcm9ubWVudCBzbyB0aGUgd2ViIFVJIHNob3dzIHRoZSBicmlkZ2UgYXMgb2ZmbGluZVxuICAvLyBhbmQgdGhlIFJlZGlzIHN0cmVhbSBpcyBjbGVhbmVkIHVwLlxuICB0cnkge1xuICAgIGF3YWl0IGFwaS5kZXJlZ2lzdGVyRW52aXJvbm1lbnQoZW52aXJvbm1lbnRJZClcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgW2JyaWRnZTpzaHV0ZG93bl0gRW52aXJvbm1lbnQgZGVyZWdpc3RlcmVkLCBicmlkZ2Ugb2ZmbGluZWAsXG4gICAgKVxuICAgIGxvZ2dlci5sb2dWZXJib3NlKCdFbnZpcm9ubWVudCBkZXJlZ2lzdGVyZWQuJylcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbG9nZ2VyLmxvZ1ZlcmJvc2UoYEZhaWxlZCB0byBkZXJlZ2lzdGVyIGVudmlyb25tZW50OiAke2Vycm9yTWVzc2FnZShlcnIpfWApXG4gIH1cblxuICAvLyBDbGVhciB0aGUgY3Jhc2gtcmVjb3ZlcnkgcG9pbnRlciBcdTIwMTQgdGhlIGVudiBpcyBnb25lLCBwb2ludGVyIHdvdWxkIGJlXG4gIC8vIHN0YWxlLiBUaGUgZWFybHkgcmV0dXJuIGFib3ZlIChyZXN1bWFibGUgU0lHSU5UIHNodXRkb3duKSBza2lwcyB0aGlzLFxuICAvLyBsZWF2aW5nIHRoZSBwb2ludGVyIGFzIGEgYmFja3VwIGZvciB0aGUgcHJpbnRlZCAtLXNlc3Npb24taWQgaGludC5cbiAgY29uc3QgeyBjbGVhckJyaWRnZVBvaW50ZXIgfSA9IGF3YWl0IGltcG9ydCgnLi9icmlkZ2VQb2ludGVyLmpzJylcbiAgYXdhaXQgY2xlYXJCcmlkZ2VQb2ludGVyKGNvbmZpZy5kaXIpXG5cbiAgbG9nZ2VyLmxvZ1ZlcmJvc2UoJ0Vudmlyb25tZW50IG9mZmxpbmUuJylcbn1cblxuY29uc3QgQ09OTkVDVElPTl9FUlJPUl9DT0RFUyA9IG5ldyBTZXQoW1xuICAnRUNPTk5SRUZVU0VEJyxcbiAgJ0VDT05OUkVTRVQnLFxuICAnRVRJTUVET1VUJyxcbiAgJ0VORVRVTlJFQUNIJyxcbiAgJ0VIT1NUVU5SRUFDSCcsXG5dKVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDb25uZWN0aW9uRXJyb3IoZXJyOiB1bmtub3duKTogYm9vbGVhbiB7XG4gIGlmIChcbiAgICBlcnIgJiZcbiAgICB0eXBlb2YgZXJyID09PSAnb2JqZWN0JyAmJlxuICAgICdjb2RlJyBpbiBlcnIgJiZcbiAgICB0eXBlb2YgZXJyLmNvZGUgPT09ICdzdHJpbmcnICYmXG4gICAgQ09OTkVDVElPTl9FUlJPUl9DT0RFUy5oYXMoZXJyLmNvZGUpXG4gICkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qKiBEZXRlY3QgSFRUUCA1eHggZXJyb3JzIGZyb20gYXhpb3MgKGNvZGU6ICdFUlJfQkFEX1JFU1BPTlNFJykuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTZXJ2ZXJFcnJvcihlcnI6IHVua25vd24pOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICAhIWVyciAmJlxuICAgIHR5cGVvZiBlcnIgPT09ICdvYmplY3QnICYmXG4gICAgJ2NvZGUnIGluIGVyciAmJlxuICAgIHR5cGVvZiBlcnIuY29kZSA9PT0gJ3N0cmluZycgJiZcbiAgICBlcnIuY29kZSA9PT0gJ0VSUl9CQURfUkVTUE9OU0UnXG4gIClcbn1cblxuLyoqIEFkZCBcdTAwQjEyNSUgaml0dGVyIHRvIGEgZGVsYXkgdmFsdWUuICovXG5mdW5jdGlvbiBhZGRKaXR0ZXIobXM6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLm1heCgwLCBtcyArIG1zICogMC4yNSAqICgyICogTWF0aC5yYW5kb20oKSAtIDEpKVxufVxuXG5mdW5jdGlvbiBmb3JtYXREZWxheShtczogbnVtYmVyKTogc3RyaW5nIHtcbiAgcmV0dXJuIG1zID49IDEwMDAgPyBgJHsobXMgLyAxMDAwKS50b0ZpeGVkKDEpfXNgIDogYCR7TWF0aC5yb3VuZChtcyl9bXNgXG59XG5cbi8qKlxuICogUmV0cnkgc3RvcFdvcmsgd2l0aCBleHBvbmVudGlhbCBiYWNrb2ZmICgzIGF0dGVtcHRzLCAxcy8ycy80cykuXG4gKiBFbnN1cmVzIHRoZSBzZXJ2ZXIgbGVhcm5zIHRoZSB3b3JrIGl0ZW0gZW5kZWQsIHByZXZlbnRpbmcgc2VydmVyLXNpZGUgem9tYmllcy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gc3RvcFdvcmtXaXRoUmV0cnkoXG4gIGFwaTogQnJpZGdlQXBpQ2xpZW50LFxuICBlbnZpcm9ubWVudElkOiBzdHJpbmcsXG4gIHdvcmtJZDogc3RyaW5nLFxuICBsb2dnZXI6IEJyaWRnZUxvZ2dlcixcbiAgYmFzZURlbGF5TXMgPSAxMDAwLFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IE1BWF9BVFRFTVBUUyA9IDNcblxuICBmb3IgKGxldCBhdHRlbXB0ID0gMTsgYXR0ZW1wdCA8PSBNQVhfQVRURU1QVFM7IGF0dGVtcHQrKykge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBhcGkuc3RvcFdvcmsoZW52aXJvbm1lbnRJZCwgd29ya0lkLCBmYWxzZSlcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFticmlkZ2U6d29ya10gc3RvcFdvcmsgc3VjY2VlZGVkIGZvciB3b3JrSWQ9JHt3b3JrSWR9IG9uIGF0dGVtcHQgJHthdHRlbXB0fS8ke01BWF9BVFRFTVBUU31gLFxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBBdXRoL3Blcm1pc3Npb24gZXJyb3JzIHdvbid0IGJlIGZpeGVkIGJ5IHJldHJ5aW5nXG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgQnJpZGdlRmF0YWxFcnJvcikge1xuICAgICAgICBpZiAoaXNTdXBwcmVzc2libGU0MDMoZXJyKSkge1xuICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgIGBbYnJpZGdlOndvcmtdIFN1cHByZXNzZWQgc3RvcFdvcmsgNDAzIGZvciAke3dvcmtJZH06ICR7ZXJyLm1lc3NhZ2V9YCxcbiAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKGBGYWlsZWQgdG8gc3RvcCB3b3JrICR7d29ya0lkfTogJHtlcnIubWVzc2FnZX1gKVxuICAgICAgICB9XG4gICAgICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2Vycm9yJywgJ2JyaWRnZV9zdG9wX3dvcmtfZmFpbGVkJywge1xuICAgICAgICAgIGF0dGVtcHRzOiBhdHRlbXB0LFxuICAgICAgICAgIGZhdGFsOiB0cnVlLFxuICAgICAgICB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IGVyck1zZyA9IGVycm9yTWVzc2FnZShlcnIpXG4gICAgICBpZiAoYXR0ZW1wdCA8IE1BWF9BVFRFTVBUUykge1xuICAgICAgICBjb25zdCBkZWxheSA9IGFkZEppdHRlcihiYXNlRGVsYXlNcyAqIE1hdGgucG93KDIsIGF0dGVtcHQgLSAxKSlcbiAgICAgICAgbG9nZ2VyLmxvZ1ZlcmJvc2UoXG4gICAgICAgICAgYEZhaWxlZCB0byBzdG9wIHdvcmsgJHt3b3JrSWR9IChhdHRlbXB0ICR7YXR0ZW1wdH0vJHtNQVhfQVRURU1QVFN9KSwgcmV0cnlpbmcgaW4gJHtmb3JtYXREZWxheShkZWxheSl9OiAke2Vyck1zZ31gLFxuICAgICAgICApXG4gICAgICAgIGF3YWl0IHNsZWVwKGRlbGF5KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKFxuICAgICAgICAgIGBGYWlsZWQgdG8gc3RvcCB3b3JrICR7d29ya0lkfSBhZnRlciAke01BWF9BVFRFTVBUU30gYXR0ZW1wdHM6ICR7ZXJyTXNnfWAsXG4gICAgICAgIClcbiAgICAgICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnZXJyb3InLCAnYnJpZGdlX3N0b3Bfd29ya19mYWlsZWQnLCB7XG4gICAgICAgICAgYXR0ZW1wdHM6IE1BWF9BVFRFTVBUUyxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gb25TZXNzaW9uVGltZW91dChcbiAgc2Vzc2lvbklkOiBzdHJpbmcsXG4gIHRpbWVvdXRNczogbnVtYmVyLFxuICBsb2dnZXI6IEJyaWRnZUxvZ2dlcixcbiAgdGltZWRPdXRTZXNzaW9uczogU2V0PHN0cmluZz4sXG4gIGhhbmRsZTogU2Vzc2lvbkhhbmRsZSxcbik6IHZvaWQge1xuICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgYFticmlkZ2U6c2Vzc2lvbl0gc2Vzc2lvbklkPSR7c2Vzc2lvbklkfSB0aW1lZCBvdXQgYWZ0ZXIgJHtmb3JtYXREdXJhdGlvbih0aW1lb3V0TXMpfWAsXG4gIClcbiAgbG9nRXZlbnQoJ3Rlbmd1X2JyaWRnZV9zZXNzaW9uX3RpbWVvdXQnLCB7XG4gICAgdGltZW91dF9tczogdGltZW91dE1zLFxuICB9KVxuICBsb2dnZXIubG9nU2Vzc2lvbkZhaWxlZChcbiAgICBzZXNzaW9uSWQsXG4gICAgYFNlc3Npb24gdGltZWQgb3V0IGFmdGVyICR7Zm9ybWF0RHVyYXRpb24odGltZW91dE1zKX1gLFxuICApXG4gIHRpbWVkT3V0U2Vzc2lvbnMuYWRkKHNlc3Npb25JZClcbiAgaGFuZGxlLmtpbGwoKVxufVxuXG5leHBvcnQgdHlwZSBQYXJzZWRBcmdzID0ge1xuICB2ZXJib3NlOiBib29sZWFuXG4gIHNhbmRib3g6IGJvb2xlYW5cbiAgZGVidWdGaWxlPzogc3RyaW5nXG4gIHNlc3Npb25UaW1lb3V0TXM/OiBudW1iZXJcbiAgcGVybWlzc2lvbk1vZGU/OiBzdHJpbmdcbiAgbmFtZT86IHN0cmluZ1xuICAvKiogVmFsdWUgcGFzc2VkIHRvIC0tc3Bhd24gKGlmIGFueSk7IHVuZGVmaW5lZCBpZiBubyAtLXNwYXduIGZsYWcgd2FzIGdpdmVuLiAqL1xuICBzcGF3bk1vZGU6IFNwYXduTW9kZSB8IHVuZGVmaW5lZFxuICAvKiogVmFsdWUgcGFzc2VkIHRvIC0tY2FwYWNpdHkgKGlmIGFueSk7IHVuZGVmaW5lZCBpZiBubyAtLWNhcGFjaXR5IGZsYWcgd2FzIGdpdmVuLiAqL1xuICBjYXBhY2l0eTogbnVtYmVyIHwgdW5kZWZpbmVkXG4gIC8qKiAtLVtuby1dY3JlYXRlLXNlc3Npb24taW4tZGlyIG92ZXJyaWRlOyB1bmRlZmluZWQgPSB1c2UgZGVmYXVsdCAob24pLiAqL1xuICBjcmVhdGVTZXNzaW9uSW5EaXI6IGJvb2xlYW4gfCB1bmRlZmluZWRcbiAgLyoqIFJlc3VtZSBhbiBleGlzdGluZyBzZXNzaW9uIGluc3RlYWQgb2YgY3JlYXRpbmcgYSBuZXcgb25lLiAqL1xuICBzZXNzaW9uSWQ/OiBzdHJpbmdcbiAgLyoqIFJlc3VtZSB0aGUgbGFzdCBzZXNzaW9uIGluIHRoaXMgZGlyZWN0b3J5IChyZWFkcyBicmlkZ2UtcG9pbnRlci5qc29uKS4gKi9cbiAgY29udGludWVTZXNzaW9uOiBib29sZWFuXG4gIGhlbHA6IGJvb2xlYW5cbiAgZXJyb3I/OiBzdHJpbmdcbn1cblxuY29uc3QgU1BBV05fRkxBR19WQUxVRVMgPSBbJ3Nlc3Npb24nLCAnc2FtZS1kaXInLCAnd29ya3RyZWUnXSBhcyBjb25zdFxuXG5mdW5jdGlvbiBwYXJzZVNwYXduVmFsdWUocmF3OiBzdHJpbmcgfCB1bmRlZmluZWQpOiBTcGF3bk1vZGUgfCBzdHJpbmcge1xuICBpZiAocmF3ID09PSAnc2Vzc2lvbicpIHJldHVybiAnc2luZ2xlLXNlc3Npb24nXG4gIGlmIChyYXcgPT09ICdzYW1lLWRpcicpIHJldHVybiAnc2FtZS1kaXInXG4gIGlmIChyYXcgPT09ICd3b3JrdHJlZScpIHJldHVybiAnd29ya3RyZWUnXG4gIHJldHVybiBgLS1zcGF3biByZXF1aXJlcyBvbmUgb2Y6ICR7U1BBV05fRkxBR19WQUxVRVMuam9pbignLCAnKX0gKGdvdDogJHtyYXcgPz8gJzxtaXNzaW5nPid9KWBcbn1cblxuZnVuY3Rpb24gcGFyc2VDYXBhY2l0eVZhbHVlKHJhdzogc3RyaW5nIHwgdW5kZWZpbmVkKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgY29uc3QgbiA9IHJhdyA9PT0gdW5kZWZpbmVkID8gTmFOIDogcGFyc2VJbnQocmF3LCAxMClcbiAgaWYgKGlzTmFOKG4pIHx8IG4gPCAxKSB7XG4gICAgcmV0dXJuIGAtLWNhcGFjaXR5IHJlcXVpcmVzIGEgcG9zaXRpdmUgaW50ZWdlciAoZ290OiAke3JhdyA/PyAnPG1pc3Npbmc+J30pYFxuICB9XG4gIHJldHVybiBuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUFyZ3MoYXJnczogc3RyaW5nW10pOiBQYXJzZWRBcmdzIHtcbiAgbGV0IHZlcmJvc2UgPSBmYWxzZVxuICBsZXQgc2FuZGJveCA9IGZhbHNlXG4gIGxldCBkZWJ1Z0ZpbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBsZXQgc2Vzc2lvblRpbWVvdXRNczogbnVtYmVyIHwgdW5kZWZpbmVkXG4gIGxldCBwZXJtaXNzaW9uTW9kZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIGxldCBuYW1lOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgbGV0IGhlbHAgPSBmYWxzZVxuICBsZXQgc3Bhd25Nb2RlOiBTcGF3bk1vZGUgfCB1bmRlZmluZWRcbiAgbGV0IGNhcGFjaXR5OiBudW1iZXIgfCB1bmRlZmluZWRcbiAgbGV0IGNyZWF0ZVNlc3Npb25JbkRpcjogYm9vbGVhbiB8IHVuZGVmaW5lZFxuICBsZXQgc2Vzc2lvbklkOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgbGV0IGNvbnRpbnVlU2Vzc2lvbiA9IGZhbHNlXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYXJnID0gYXJnc1tpXSFcbiAgICBpZiAoYXJnID09PSAnLS1oZWxwJyB8fCBhcmcgPT09ICctaCcpIHtcbiAgICAgIGhlbHAgPSB0cnVlXG4gICAgfSBlbHNlIGlmIChhcmcgPT09ICctLXZlcmJvc2UnIHx8IGFyZyA9PT0gJy12Jykge1xuICAgICAgdmVyYm9zZSA9IHRydWVcbiAgICB9IGVsc2UgaWYgKGFyZyA9PT0gJy0tc2FuZGJveCcpIHtcbiAgICAgIHNhbmRib3ggPSB0cnVlXG4gICAgfSBlbHNlIGlmIChhcmcgPT09ICctLW5vLXNhbmRib3gnKSB7XG4gICAgICBzYW5kYm94ID0gZmFsc2VcbiAgICB9IGVsc2UgaWYgKGFyZyA9PT0gJy0tZGVidWctZmlsZScgJiYgaSArIDEgPCBhcmdzLmxlbmd0aCkge1xuICAgICAgZGVidWdGaWxlID0gcmVzb2x2ZShhcmdzWysraV0hKVxuICAgIH0gZWxzZSBpZiAoYXJnLnN0YXJ0c1dpdGgoJy0tZGVidWctZmlsZT0nKSkge1xuICAgICAgZGVidWdGaWxlID0gcmVzb2x2ZShhcmcuc2xpY2UoJy0tZGVidWctZmlsZT0nLmxlbmd0aCkpXG4gICAgfSBlbHNlIGlmIChhcmcgPT09ICctLXNlc3Npb24tdGltZW91dCcgJiYgaSArIDEgPCBhcmdzLmxlbmd0aCkge1xuICAgICAgc2Vzc2lvblRpbWVvdXRNcyA9IHBhcnNlSW50KGFyZ3NbKytpXSEsIDEwKSAqIDEwMDBcbiAgICB9IGVsc2UgaWYgKGFyZy5zdGFydHNXaXRoKCctLXNlc3Npb24tdGltZW91dD0nKSkge1xuICAgICAgc2Vzc2lvblRpbWVvdXRNcyA9XG4gICAgICAgIHBhcnNlSW50KGFyZy5zbGljZSgnLS1zZXNzaW9uLXRpbWVvdXQ9Jy5sZW5ndGgpLCAxMCkgKiAxMDAwXG4gICAgfSBlbHNlIGlmIChhcmcgPT09ICctLXBlcm1pc3Npb24tbW9kZScgJiYgaSArIDEgPCBhcmdzLmxlbmd0aCkge1xuICAgICAgcGVybWlzc2lvbk1vZGUgPSBhcmdzWysraV0hXG4gICAgfSBlbHNlIGlmIChhcmcuc3RhcnRzV2l0aCgnLS1wZXJtaXNzaW9uLW1vZGU9JykpIHtcbiAgICAgIHBlcm1pc3Npb25Nb2RlID0gYXJnLnNsaWNlKCctLXBlcm1pc3Npb24tbW9kZT0nLmxlbmd0aClcbiAgICB9IGVsc2UgaWYgKGFyZyA9PT0gJy0tbmFtZScgJiYgaSArIDEgPCBhcmdzLmxlbmd0aCkge1xuICAgICAgbmFtZSA9IGFyZ3NbKytpXSFcbiAgICB9IGVsc2UgaWYgKGFyZy5zdGFydHNXaXRoKCctLW5hbWU9JykpIHtcbiAgICAgIG5hbWUgPSBhcmcuc2xpY2UoJy0tbmFtZT0nLmxlbmd0aClcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgZmVhdHVyZSgnS0FJUk9TJykgJiZcbiAgICAgIGFyZyA9PT0gJy0tc2Vzc2lvbi1pZCcgJiZcbiAgICAgIGkgKyAxIDwgYXJncy5sZW5ndGhcbiAgICApIHtcbiAgICAgIHNlc3Npb25JZCA9IGFyZ3NbKytpXSFcbiAgICAgIGlmICghc2Vzc2lvbklkKSB7XG4gICAgICAgIHJldHVybiBtYWtlRXJyb3IoJy0tc2Vzc2lvbi1pZCByZXF1aXJlcyBhIHZhbHVlJylcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZlYXR1cmUoJ0tBSVJPUycpICYmIGFyZy5zdGFydHNXaXRoKCctLXNlc3Npb24taWQ9JykpIHtcbiAgICAgIHNlc3Npb25JZCA9IGFyZy5zbGljZSgnLS1zZXNzaW9uLWlkPScubGVuZ3RoKVxuICAgICAgaWYgKCFzZXNzaW9uSWQpIHtcbiAgICAgICAgcmV0dXJuIG1ha2VFcnJvcignLS1zZXNzaW9uLWlkIHJlcXVpcmVzIGEgdmFsdWUnKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZmVhdHVyZSgnS0FJUk9TJykgJiYgKGFyZyA9PT0gJy0tY29udGludWUnIHx8IGFyZyA9PT0gJy1jJykpIHtcbiAgICAgIGNvbnRpbnVlU2Vzc2lvbiA9IHRydWVcbiAgICB9IGVsc2UgaWYgKGFyZyA9PT0gJy0tc3Bhd24nIHx8IGFyZy5zdGFydHNXaXRoKCctLXNwYXduPScpKSB7XG4gICAgICBpZiAoc3Bhd25Nb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIG1ha2VFcnJvcignLS1zcGF3biBtYXkgb25seSBiZSBzcGVjaWZpZWQgb25jZScpXG4gICAgICB9XG4gICAgICBjb25zdCByYXcgPSBhcmcuc3RhcnRzV2l0aCgnLS1zcGF3bj0nKVxuICAgICAgICA/IGFyZy5zbGljZSgnLS1zcGF3bj0nLmxlbmd0aClcbiAgICAgICAgOiBhcmdzWysraV1cbiAgICAgIGNvbnN0IHYgPSBwYXJzZVNwYXduVmFsdWUocmF3KVxuICAgICAgaWYgKHYgPT09ICdzaW5nbGUtc2Vzc2lvbicgfHwgdiA9PT0gJ3NhbWUtZGlyJyB8fCB2ID09PSAnd29ya3RyZWUnKSB7XG4gICAgICAgIHNwYXduTW9kZSA9IHZcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtYWtlRXJyb3IodilcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFyZyA9PT0gJy0tY2FwYWNpdHknIHx8IGFyZy5zdGFydHNXaXRoKCctLWNhcGFjaXR5PScpKSB7XG4gICAgICBpZiAoY2FwYWNpdHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbWFrZUVycm9yKCctLWNhcGFjaXR5IG1heSBvbmx5IGJlIHNwZWNpZmllZCBvbmNlJylcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJhdyA9IGFyZy5zdGFydHNXaXRoKCctLWNhcGFjaXR5PScpXG4gICAgICAgID8gYXJnLnNsaWNlKCctLWNhcGFjaXR5PScubGVuZ3RoKVxuICAgICAgICA6IGFyZ3NbKytpXVxuICAgICAgY29uc3QgdiA9IHBhcnNlQ2FwYWNpdHlWYWx1ZShyYXcpXG4gICAgICBpZiAodHlwZW9mIHYgPT09ICdudW1iZXInKSBjYXBhY2l0eSA9IHZcbiAgICAgIGVsc2UgcmV0dXJuIG1ha2VFcnJvcih2KVxuICAgIH0gZWxzZSBpZiAoYXJnID09PSAnLS1jcmVhdGUtc2Vzc2lvbi1pbi1kaXInKSB7XG4gICAgICBjcmVhdGVTZXNzaW9uSW5EaXIgPSB0cnVlXG4gICAgfSBlbHNlIGlmIChhcmcgPT09ICctLW5vLWNyZWF0ZS1zZXNzaW9uLWluLWRpcicpIHtcbiAgICAgIGNyZWF0ZVNlc3Npb25JbkRpciA9IGZhbHNlXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtYWtlRXJyb3IoXG4gICAgICAgIGBVbmtub3duIGFyZ3VtZW50OiAke2FyZ31cXG5SdW4gJ2JsYXVkZSByZW1vdGUtY29udHJvbCAtLWhlbHAnIGZvciB1c2FnZS5gLFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIC8vIE5vdGU6IGdhdGUgY2hlY2sgZm9yIC0tc3Bhd24vLS1jYXBhY2l0eS8tLWNyZWF0ZS1zZXNzaW9uLWluLWRpciBpcyBpbiBicmlkZ2VNYWluXG4gIC8vIChnYXRlLWF3YXJlIGVycm9yKS4gRmxhZyBjcm9zcy12YWxpZGF0aW9uIGhhcHBlbnMgaGVyZS5cblxuICAvLyAtLWNhcGFjaXR5IG9ubHkgbWFrZXMgc2Vuc2UgZm9yIG11bHRpLXNlc3Npb24gbW9kZXMuXG4gIGlmIChzcGF3bk1vZGUgPT09ICdzaW5nbGUtc2Vzc2lvbicgJiYgY2FwYWNpdHkgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBtYWtlRXJyb3IoXG4gICAgICBgLS1jYXBhY2l0eSBjYW5ub3QgYmUgdXNlZCB3aXRoIC0tc3Bhd249c2Vzc2lvbiAoc2luZ2xlLXNlc3Npb24gbW9kZSBoYXMgZml4ZWQgY2FwYWNpdHkgMSkuYCxcbiAgICApXG4gIH1cblxuICAvLyAtLXNlc3Npb24taWQgLyAtLWNvbnRpbnVlIHJlc3VtZSBhIHNwZWNpZmljIHNlc3Npb24gb24gaXRzIG9yaWdpbmFsXG4gIC8vIGVudmlyb25tZW50OyBpbmNvbXBhdGlibGUgd2l0aCBzcGF3bi1yZWxhdGVkIGZsYWdzICh3aGljaCBjb25maWd1cmVcbiAgLy8gZnJlc2ggc2Vzc2lvbiBjcmVhdGlvbiksIGFuZCBtdXR1YWxseSBleGNsdXNpdmUgd2l0aCBlYWNoIG90aGVyLlxuICBpZiAoXG4gICAgKHNlc3Npb25JZCB8fCBjb250aW51ZVNlc3Npb24pICYmXG4gICAgKHNwYXduTW9kZSAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICBjYXBhY2l0eSAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICBjcmVhdGVTZXNzaW9uSW5EaXIgIT09IHVuZGVmaW5lZClcbiAgKSB7XG4gICAgcmV0dXJuIG1ha2VFcnJvcihcbiAgICAgIGAtLXNlc3Npb24taWQgYW5kIC0tY29udGludWUgY2Fubm90IGJlIHVzZWQgd2l0aCAtLXNwYXduLCAtLWNhcGFjaXR5LCBvciAtLWNyZWF0ZS1zZXNzaW9uLWluLWRpci5gLFxuICAgIClcbiAgfVxuICBpZiAoc2Vzc2lvbklkICYmIGNvbnRpbnVlU2Vzc2lvbikge1xuICAgIHJldHVybiBtYWtlRXJyb3IoYC0tc2Vzc2lvbi1pZCBhbmQgLS1jb250aW51ZSBjYW5ub3QgYmUgdXNlZCB0b2dldGhlci5gKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB2ZXJib3NlLFxuICAgIHNhbmRib3gsXG4gICAgZGVidWdGaWxlLFxuICAgIHNlc3Npb25UaW1lb3V0TXMsXG4gICAgcGVybWlzc2lvbk1vZGUsXG4gICAgbmFtZSxcbiAgICBzcGF3bk1vZGUsXG4gICAgY2FwYWNpdHksXG4gICAgY3JlYXRlU2Vzc2lvbkluRGlyLFxuICAgIHNlc3Npb25JZCxcbiAgICBjb250aW51ZVNlc3Npb24sXG4gICAgaGVscCxcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VFcnJvcihlcnJvcjogc3RyaW5nKTogUGFyc2VkQXJncyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZlcmJvc2UsXG4gICAgICBzYW5kYm94LFxuICAgICAgZGVidWdGaWxlLFxuICAgICAgc2Vzc2lvblRpbWVvdXRNcyxcbiAgICAgIHBlcm1pc3Npb25Nb2RlLFxuICAgICAgbmFtZSxcbiAgICAgIHNwYXduTW9kZSxcbiAgICAgIGNhcGFjaXR5LFxuICAgICAgY3JlYXRlU2Vzc2lvbkluRGlyLFxuICAgICAgc2Vzc2lvbklkLFxuICAgICAgY29udGludWVTZXNzaW9uLFxuICAgICAgaGVscCxcbiAgICAgIGVycm9yLFxuICAgIH1cbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBwcmludEhlbHAoKTogUHJvbWlzZTx2b2lkPiB7XG4gIC8vIFVzZSBFWFRFUk5BTF9QRVJNSVNTSU9OX01PREVTIGZvciBoZWxwIHRleHQgXHUyMDE0IGludGVybmFsIG1vZGVzIChidWJibGUpXG4gIC8vIGFyZSBhbnQtb25seSBhbmQgYXV0byBpcyBmZWF0dXJlLWdhdGVkOyB0aGV5J3JlIHN0aWxsIGFjY2VwdGVkIGJ5IHZhbGlkYXRpb24uXG4gIGNvbnN0IHsgRVhURVJOQUxfUEVSTUlTU0lPTl9NT0RFUyB9ID0gYXdhaXQgaW1wb3J0KCcuLi90eXBlcy9wZXJtaXNzaW9ucy5qcycpXG4gIGNvbnN0IG1vZGVzID0gRVhURVJOQUxfUEVSTUlTU0lPTl9NT0RFUy5qb2luKCcsICcpXG4gIGNvbnN0IHNob3dTZXJ2ZXIgPSBhd2FpdCBpc011bHRpU2Vzc2lvblNwYXduRW5hYmxlZCgpXG4gIGNvbnN0IHNlcnZlck9wdGlvbnMgPSBzaG93U2VydmVyXG4gICAgPyBgICAtLXNwYXduIDxtb2RlPiAgICAgICAgICAgICAgICAgICBTcGF3biBtb2RlOiBzYW1lLWRpciwgd29ya3RyZWUsIHNlc3Npb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRlZmF1bHQ6IHNhbWUtZGlyKVxuICAtLWNhcGFjaXR5IDxOPiAgICAgICAgICAgICAgICAgICBNYXggY29uY3VycmVudCBzZXNzaW9ucyBpbiB3b3JrdHJlZSBvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW1lLWRpciBtb2RlIChkZWZhdWx0OiAke1NQQVdOX1NFU1NJT05TX0RFRkFVTFR9KVxuICAtLVtuby1dY3JlYXRlLXNlc3Npb24taW4tZGlyICAgICBQcmUtY3JlYXRlIGEgc2Vzc2lvbiBpbiB0aGUgY3VycmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rvcnk7IGluIHdvcmt0cmVlIG1vZGUgdGhpcyBzZXNzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXlzIGluIGN3ZCB3aGlsZSBvbi1kZW1hbmQgc2Vzc2lvbnMgZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzb2xhdGVkIHdvcmt0cmVlcyAoZGVmYXVsdDogb24pXG5gXG4gICAgOiAnJ1xuICBjb25zdCBzZXJ2ZXJEZXNjcmlwdGlvbiA9IHNob3dTZXJ2ZXJcbiAgICA/IGBcbiAgUmVtb3RlIENvbnRyb2wgcnVucyBhcyBhIHBlcnNpc3RlbnQgc2VydmVyIHRoYXQgYWNjZXB0cyBtdWx0aXBsZSBjb25jdXJyZW50XG4gIHNlc3Npb25zIGluIHRoZSBjdXJyZW50IGRpcmVjdG9yeS4gT25lIHNlc3Npb24gaXMgcHJlLWNyZWF0ZWQgb24gc3RhcnQgc29cbiAgeW91IGhhdmUgc29tZXdoZXJlIHRvIHR5cGUgaW1tZWRpYXRlbHkuIFVzZSAtLXNwYXduPXdvcmt0cmVlIHRvIGlzb2xhdGVcbiAgZWFjaCBvbi1kZW1hbmQgc2Vzc2lvbiBpbiBpdHMgb3duIGdpdCB3b3JrdHJlZSwgb3IgLS1zcGF3bj1zZXNzaW9uIGZvclxuICB0aGUgY2xhc3NpYyBzaW5nbGUtc2Vzc2lvbiBtb2RlIChleGl0cyB3aGVuIHRoYXQgc2Vzc2lvbiBlbmRzKS4gUHJlc3MgJ3cnXG4gIGR1cmluZyBydW50aW1lIHRvIHRvZ2dsZSBiZXR3ZWVuIHNhbWUtZGlyIGFuZCB3b3JrdHJlZS5cbmBcbiAgICA6ICcnXG4gIGNvbnN0IHNlcnZlck5vdGUgPSBzaG93U2VydmVyXG4gICAgPyBgICAtIFdvcmt0cmVlIG1vZGUgcmVxdWlyZXMgYSBnaXQgcmVwb3NpdG9yeSBvciBXb3JrdHJlZUNyZWF0ZS9Xb3JrdHJlZVJlbW92ZSBob29rc1xuYFxuICAgIDogJydcbiAgY29uc3QgaGVscCA9IGBcblJlbW90ZSBDb250cm9sIC0gQ29ubmVjdCB5b3VyIGxvY2FsIGVudmlyb25tZW50IHRvIGNsYXVkZS5haS9jb2RlXG5cblVTQUdFXG4gIGJsYXVkZSByZW1vdGUtY29udHJvbCBbb3B0aW9uc11cbk9QVElPTlNcbiAgLS1uYW1lIDxuYW1lPiAgICAgICAgICAgICAgICAgICAgTmFtZSBmb3IgdGhlIHNlc3Npb24gKHNob3duIGluIGNsYXVkZS5haS9jb2RlKVxuJHtcbiAgZmVhdHVyZSgnS0FJUk9TJylcbiAgICA/IGAgIC1jLCAtLWNvbnRpbnVlICAgICAgICAgICAgICAgICAgIFJlc3VtZSB0aGUgbGFzdCBzZXNzaW9uIGluIHRoaXMgZGlyZWN0b3J5XG4gIC0tc2Vzc2lvbi1pZCA8aWQ+ICAgICAgICAgICAgICAgIFJlc3VtZSBhIHNwZWNpZmljIHNlc3Npb24gYnkgSUQgKGNhbm5vdCBiZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VkIHdpdGggc3Bhd24gZmxhZ3Mgb3IgLS1jb250aW51ZSlcbmBcbiAgICA6ICcnXG59ICAtLXBlcm1pc3Npb24tbW9kZSA8bW9kZT4gICAgICAgICBQZXJtaXNzaW9uIG1vZGUgZm9yIHNwYXduZWQgc2Vzc2lvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCR7bW9kZXN9KVxuICAtLWRlYnVnLWZpbGUgPHBhdGg+ICAgICAgICAgICAgICBXcml0ZSBkZWJ1ZyBsb2dzIHRvIGZpbGVcbiAgLXYsIC0tdmVyYm9zZSAgICAgICAgICAgICAgICAgICAgRW5hYmxlIHZlcmJvc2Ugb3V0cHV0XG4gIC1oLCAtLWhlbHAgICAgICAgICAgICAgICAgICAgICAgIFNob3cgdGhpcyBoZWxwXG4ke3NlcnZlck9wdGlvbnN9XG5ERVNDUklQVElPTlxuICBSZW1vdGUgQ29udHJvbCBhbGxvd3MgeW91IHRvIGNvbnRyb2wgc2Vzc2lvbnMgb24geW91ciBsb2NhbCBkZXZpY2UgZnJvbVxuICBjbGF1ZGUuYWkvY29kZSAoaHR0cHM6Ly9jbGF1ZGUuYWkvY29kZSkuIFJ1biB0aGlzIGNvbW1hbmQgaW4gdGhlXG4gIGRpcmVjdG9yeSB5b3Ugd2FudCB0byB3b3JrIGluLCB0aGVuIGNvbm5lY3QgZnJvbSB0aGUgQmxhdWRlIGFwcCBvciB3ZWIuXG4ke3NlcnZlckRlc2NyaXB0aW9ufVxuTk9URVNcbiAgLSBZb3UgbXVzdCBiZSBsb2dnZWQgaW4gd2l0aCBhIGNsYXVkZS5haSBhY2NvdW50IHRoYXQgaGFzIGEgc3Vic2NyaXB0aW9uXG4gIC0gUnVuIFxcYGJsYXVkZVxcYCBmaXJzdCBpbiB0aGUgZGlyZWN0b3J5IHRvIGFjY2VwdCB0aGUgd29ya3NwYWNlIHRydXN0IGRpYWxvZ1xuJHtzZXJ2ZXJOb3RlfWBcbiAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6IGludGVudGlvbmFsIGhlbHAgb3V0cHV0XG4gIGNvbnNvbGUubG9nKGhlbHApXG59XG5cbmNvbnN0IFRJVExFX01BWF9MRU4gPSA4MFxuXG4vKiogRGVyaXZlIGEgc2Vzc2lvbiB0aXRsZSBmcm9tIGEgdXNlciBtZXNzYWdlOiBmaXJzdCBsaW5lLCB0cnVuY2F0ZWQuICovXG5mdW5jdGlvbiBkZXJpdmVTZXNzaW9uVGl0bGUodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gQ29sbGFwc2Ugd2hpdGVzcGFjZSBcdTIwMTQgbmV3bGluZXMvdGFicyB3b3VsZCBicmVhayB0aGUgc2luZ2xlLWxpbmUgc3RhdHVzIGRpc3BsYXkuXG4gIGNvbnN0IGZsYXQgPSB0ZXh0LnJlcGxhY2UoL1xccysvZywgJyAnKS50cmltKClcbiAgcmV0dXJuIHRydW5jYXRlVG9XaWR0aChmbGF0LCBUSVRMRV9NQVhfTEVOKVxufVxuXG4vKipcbiAqIE9uZS1zaG90IGZldGNoIG9mIGEgc2Vzc2lvbidzIHRpdGxlIHZpYSBHRVQgL3YxL3Nlc3Npb25zL3tpZH0uXG4gKlxuICogVXNlcyBgZ2V0QnJpZGdlU2Vzc2lvbmAgZnJvbSBjcmVhdGVTZXNzaW9uLnRzIChjY3ItYnlvYyBoZWFkZXJzICsgb3JnIFVVSUQpXG4gKiByYXRoZXIgdGhhbiB0aGUgZW52aXJvbm1lbnRzLWxldmVsIGJyaWRnZUFwaSBjbGllbnQsIHdob3NlIGhlYWRlcnMgbWFrZSB0aGVcbiAqIFNlc3Npb25zIEFQSSByZXR1cm4gNDA0LiBSZXR1cm5zIHVuZGVmaW5lZCBpZiB0aGUgc2Vzc2lvbiBoYXMgbm8gdGl0bGUgeWV0XG4gKiBvciB0aGUgZmV0Y2ggZmFpbHMgXHUyMDE0IHRoZSBjYWxsZXIgZmFsbHMgYmFjayB0byBkZXJpdmluZyBhIHRpdGxlIGZyb20gdGhlXG4gKiBmaXJzdCB1c2VyIG1lc3NhZ2UuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGZldGNoU2Vzc2lvblRpdGxlKFxuICBjb21wYXRTZXNzaW9uSWQ6IHN0cmluZyxcbiAgYmFzZVVybDogc3RyaW5nLFxuKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHtcbiAgY29uc3QgeyBnZXRCcmlkZ2VTZXNzaW9uIH0gPSBhd2FpdCBpbXBvcnQoJy4vY3JlYXRlU2Vzc2lvbi5qcycpXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRCcmlkZ2VTZXNzaW9uKGNvbXBhdFNlc3Npb25JZCwgeyBiYXNlVXJsIH0pXG4gIHJldHVybiBzZXNzaW9uPy50aXRsZSB8fCB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJyaWRnZU1haW4oYXJnczogc3RyaW5nW10pOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgcGFyc2VkID0gcGFyc2VBcmdzKGFyZ3MpXG5cbiAgaWYgKHBhcnNlZC5oZWxwKSB7XG4gICAgYXdhaXQgcHJpbnRIZWxwKClcbiAgICByZXR1cm5cbiAgfVxuICBpZiAocGFyc2VkLmVycm9yKSB7XG4gICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6IGludGVudGlvbmFsIGVycm9yIG91dHB1dFxuICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yOiAke3BhcnNlZC5lcnJvcn1gKVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjdXN0b20tcnVsZXMvbm8tcHJvY2Vzcy1leGl0XG4gICAgcHJvY2Vzcy5leGl0KDEpXG4gIH1cblxuICBjb25zdCB7XG4gICAgdmVyYm9zZSxcbiAgICBzYW5kYm94LFxuICAgIGRlYnVnRmlsZSxcbiAgICBzZXNzaW9uVGltZW91dE1zLFxuICAgIHBlcm1pc3Npb25Nb2RlLFxuICAgIG5hbWUsXG4gICAgc3Bhd25Nb2RlOiBwYXJzZWRTcGF3bk1vZGUsXG4gICAgY2FwYWNpdHk6IHBhcnNlZENhcGFjaXR5LFxuICAgIGNyZWF0ZVNlc3Npb25JbkRpcjogcGFyc2VkQ3JlYXRlU2Vzc2lvbkluRGlyLFxuICAgIHNlc3Npb25JZDogcGFyc2VkU2Vzc2lvbklkLFxuICAgIGNvbnRpbnVlU2Vzc2lvbixcbiAgfSA9IHBhcnNlZFxuICAvLyBNdXRhYmxlIHNvIC0tY29udGludWUgY2FuIHNldCBpdCBmcm9tIHRoZSBwb2ludGVyIGZpbGUuIFRoZSAjMjA0NjBcbiAgLy8gcmVzdW1lIGZsb3cgYmVsb3cgdGhlbiB0cmVhdHMgaXQgdGhlIHNhbWUgYXMgYW4gZXhwbGljaXQgLS1zZXNzaW9uLWlkLlxuICBsZXQgcmVzdW1lU2Vzc2lvbklkID0gcGFyc2VkU2Vzc2lvbklkXG4gIC8vIFdoZW4gLS1jb250aW51ZSBmb3VuZCBhIHBvaW50ZXIsIHRoaXMgaXMgdGhlIGRpcmVjdG9yeSBpdCBjYW1lIGZyb21cbiAgLy8gKG1heSBiZSBhIHdvcmt0cmVlIHNpYmxpbmcsIG5vdCBgZGlyYCkuIE9uIHJlc3VtZS1mbG93IGRldGVybWluaXN0aWNcbiAgLy8gZmFpbHVyZSwgY2xlYXIgVEhJUyBmaWxlIHNvIC0tY29udGludWUgZG9lc24ndCBrZWVwIGhpdHRpbmcgdGhlIHNhbWVcbiAgLy8gZGVhZCBzZXNzaW9uLiBVbmRlZmluZWQgZm9yIGV4cGxpY2l0IC0tc2Vzc2lvbi1pZCAobGVhdmVzIHBvaW50ZXIgYWxvbmUpLlxuICBsZXQgcmVzdW1lUG9pbnRlckRpcjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgY29uc3QgdXNlZE11bHRpU2Vzc2lvbkZlYXR1cmUgPVxuICAgIHBhcnNlZFNwYXduTW9kZSAhPT0gdW5kZWZpbmVkIHx8XG4gICAgcGFyc2VkQ2FwYWNpdHkgIT09IHVuZGVmaW5lZCB8fFxuICAgIHBhcnNlZENyZWF0ZVNlc3Npb25JbkRpciAhPT0gdW5kZWZpbmVkXG5cbiAgLy8gVmFsaWRhdGUgcGVybWlzc2lvbiBtb2RlIGVhcmx5IHNvIHRoZSB1c2VyIGdldHMgYW4gZXJyb3IgYmVmb3JlXG4gIC8vIHRoZSBicmlkZ2Ugc3RhcnRzIHBvbGxpbmcgZm9yIHdvcmsuXG4gIGlmIChwZXJtaXNzaW9uTW9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgeyBQRVJNSVNTSU9OX01PREVTIH0gPSBhd2FpdCBpbXBvcnQoJy4uL3R5cGVzL3Blcm1pc3Npb25zLmpzJylcbiAgICBjb25zdCB2YWxpZDogcmVhZG9ubHkgc3RyaW5nW10gPSBQRVJNSVNTSU9OX01PREVTXG4gICAgaWYgKCF2YWxpZC5pbmNsdWRlcyhwZXJtaXNzaW9uTW9kZSkpIHtcbiAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOiBpbnRlbnRpb25hbCBlcnJvciBvdXRwdXRcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBFcnJvcjogSW52YWxpZCBwZXJtaXNzaW9uIG1vZGUgJyR7cGVybWlzc2lvbk1vZGV9Jy4gVmFsaWQgbW9kZXM6ICR7dmFsaWQuam9pbignLCAnKX1gLFxuICAgICAgKVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGN1c3RvbS1ydWxlcy9uby1wcm9jZXNzLWV4aXRcbiAgICAgIHByb2Nlc3MuZXhpdCgxKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRpciA9IHJlc29sdmUoJy4nKVxuXG4gIC8vIFRoZSBicmlkZ2UgZmFzdC1wYXRoIGJ5cGFzc2VzIGluaXQudHMsIHNvIHdlIG11c3QgZW5hYmxlIGNvbmZpZyByZWFkaW5nXG4gIC8vIGJlZm9yZSBhbnkgY29kZSB0aGF0IHRyYW5zaXRpdmVseSBjYWxscyBnZXRHbG9iYWxDb25maWcoKVxuICBjb25zdCB7IGVuYWJsZUNvbmZpZ3MsIGNoZWNrSGFzVHJ1c3REaWFsb2dBY2NlcHRlZCB9ID0gYXdhaXQgaW1wb3J0KFxuICAgICcuLi91dGlscy9jb25maWcuanMnXG4gIClcbiAgZW5hYmxlQ29uZmlncygpXG5cbiAgLy8gSW5pdGlhbGl6ZSBhbmFseXRpY3MgYW5kIGVycm9yIHJlcG9ydGluZyBzaW5rcy4gVGhlIGJyaWRnZSBieXBhc3NlcyB0aGVcbiAgLy8gc2V0dXAoKSBpbml0IGZsb3csIHNvIHdlIGNhbGwgaW5pdFNpbmtzKCkgZGlyZWN0bHkgdG8gYXR0YWNoIHNpbmtzIGhlcmUuXG4gIGNvbnN0IHsgaW5pdFNpbmtzIH0gPSBhd2FpdCBpbXBvcnQoJy4uL3V0aWxzL3NpbmtzLmpzJylcbiAgaW5pdFNpbmtzKClcblxuICAvLyBHYXRlLWF3YXJlIHZhbGlkYXRpb246IC0tc3Bhd24gLyAtLWNhcGFjaXR5IC8gLS1jcmVhdGUtc2Vzc2lvbi1pbi1kaXIgcmVxdWlyZVxuICAvLyB0aGUgbXVsdGktc2Vzc2lvbiBnYXRlLiBwYXJzZUFyZ3MgaGFzIGFscmVhZHkgdmFsaWRhdGVkIGZsYWcgY29tYmluYXRpb25zO1xuICAvLyBoZXJlIHdlIG9ubHkgY2hlY2sgdGhlIGdhdGUgc2luY2UgdGhhdCByZXF1aXJlcyBhbiBhc3luYyBHcm93dGhCb29rIGNhbGwuXG4gIC8vIFJ1bnMgYWZ0ZXIgZW5hYmxlQ29uZmlncygpIChHcm93dGhCb29rIGNhY2hlIHJlYWRzIGdsb2JhbCBjb25maWcpIGFuZCBhZnRlclxuICAvLyBpbml0U2lua3MoKSBzbyB0aGUgZGVuaWFsIGV2ZW50IGNhbiBiZSBlbnF1ZXVlZC5cbiAgY29uc3QgbXVsdGlTZXNzaW9uRW5hYmxlZCA9IGF3YWl0IGlzTXVsdGlTZXNzaW9uU3Bhd25FbmFibGVkKClcbiAgaWYgKHVzZWRNdWx0aVNlc3Npb25GZWF0dXJlICYmICFtdWx0aVNlc3Npb25FbmFibGVkKSB7XG4gICAgYXdhaXQgbG9nRXZlbnRBc3luYygndGVuZ3VfYnJpZGdlX211bHRpX3Nlc3Npb25fZGVuaWVkJywge1xuICAgICAgdXNlZF9zcGF3bjogcGFyc2VkU3Bhd25Nb2RlICE9PSB1bmRlZmluZWQsXG4gICAgICB1c2VkX2NhcGFjaXR5OiBwYXJzZWRDYXBhY2l0eSAhPT0gdW5kZWZpbmVkLFxuICAgICAgdXNlZF9jcmVhdGVfc2Vzc2lvbl9pbl9kaXI6IHBhcnNlZENyZWF0ZVNlc3Npb25JbkRpciAhPT0gdW5kZWZpbmVkLFxuICAgIH0pXG4gICAgLy8gbG9nRXZlbnRBc3luYyBvbmx5IGVucXVldWVzIFx1MjAxNCBwcm9jZXNzLmV4aXQoKSBkaXNjYXJkcyBidWZmZXJlZCBldmVudHMuXG4gICAgLy8gRmx1c2ggZXhwbGljaXRseSwgY2FwcGVkIGF0IDUwMG1zIHRvIG1hdGNoIGdyYWNlZnVsU2h1dGRvd24udHMuXG4gICAgLy8gKHNsZWVwKCkgZG9lc24ndCB1bnJlZiBpdHMgdGltZXIsIGJ1dCBwcm9jZXNzLmV4aXQoKSBmb2xsb3dzIGltbWVkaWF0ZWx5XG4gICAgLy8gc28gdGhlIHJlZidkIHRpbWVyIGNhbid0IGRlbGF5IHNodXRkb3duLilcbiAgICBhd2FpdCBQcm9taXNlLnJhY2UoW1xuICAgICAgUHJvbWlzZS5hbGwoW3NodXRkb3duMVBFdmVudExvZ2dpbmcoKSwgc2h1dGRvd25EYXRhZG9nKCldKSxcbiAgICAgIHNsZWVwKDUwMCwgdW5kZWZpbmVkLCB7IHVucmVmOiB0cnVlIH0pLFxuICAgIF0pLmNhdGNoKCgpID0+IHt9KVxuICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOiBpbnRlbnRpb25hbCBlcnJvciBvdXRwdXRcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgJ0Vycm9yOiBNdWx0aS1zZXNzaW9uIFJlbW90ZSBDb250cm9sIGlzIG5vdCBlbmFibGVkIGZvciB5b3VyIGFjY291bnQgeWV0LicsXG4gICAgKVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjdXN0b20tcnVsZXMvbm8tcHJvY2Vzcy1leGl0XG4gICAgcHJvY2Vzcy5leGl0KDEpXG4gIH1cblxuICAvLyBTZXQgdGhlIGJvb3RzdHJhcCBDV0Qgc28gdGhhdCB0cnVzdCBjaGVja3MsIHByb2plY3QgY29uZmlnIGxvb2t1cHMsIGFuZFxuICAvLyBnaXQgdXRpbGl0aWVzIChnZXRCcmFuY2gsIGdldFJlbW90ZVVybCkgcmVzb2x2ZSBhZ2FpbnN0IHRoZSBjb3JyZWN0IHBhdGguXG4gIGNvbnN0IHsgc2V0T3JpZ2luYWxDd2QsIHNldEN3ZFN0YXRlIH0gPSBhd2FpdCBpbXBvcnQoJy4uL2Jvb3RzdHJhcC9zdGF0ZS5qcycpXG4gIHNldE9yaWdpbmFsQ3dkKGRpcilcbiAgc2V0Q3dkU3RhdGUoZGlyKVxuXG4gIC8vIFRoZSBicmlkZ2UgYnlwYXNzZXMgbWFpbi50c3ggKHdoaWNoIHJlbmRlcnMgdGhlIGludGVyYWN0aXZlIFRydXN0RGlhbG9nIHZpYSBzaG93U2V0dXBTY3JlZW5zKSxcbiAgLy8gc28gd2UgbXVzdCB2ZXJpZnkgdHJ1c3Qgd2FzIHByZXZpb3VzbHkgZXN0YWJsaXNoZWQgYnkgYSBub3JtYWwgYGNsYXVkZWAgc2Vzc2lvbi5cbiAgaWYgKCFjaGVja0hhc1RydXN0RGlhbG9nQWNjZXB0ZWQoKSkge1xuICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYEVycm9yOiBXb3Jrc3BhY2Ugbm90IHRydXN0ZWQuIFBsZWFzZSBydW4gXFxgY2xhdWRlXFxgIGluICR7ZGlyfSBmaXJzdCB0byByZXZpZXcgYW5kIGFjY2VwdCB0aGUgd29ya3NwYWNlIHRydXN0IGRpYWxvZy5gLFxuICAgIClcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3VzdG9tLXJ1bGVzL25vLXByb2Nlc3MtZXhpdFxuICAgIHByb2Nlc3MuZXhpdCgxKVxuICB9XG5cbiAgLy8gUmVzb2x2ZSBhdXRoXG4gIGNvbnN0IHsgY2xlYXJPQXV0aFRva2VuQ2FjaGUsIGNoZWNrQW5kUmVmcmVzaE9BdXRoVG9rZW5JZk5lZWRlZCB9ID1cbiAgICBhd2FpdCBpbXBvcnQoJy4uL3V0aWxzL2F1dGguanMnKVxuICBjb25zdCB7IGdldEJyaWRnZUFjY2Vzc1Rva2VuLCBnZXRCcmlkZ2VCYXNlVXJsIH0gPSBhd2FpdCBpbXBvcnQoXG4gICAgJy4vYnJpZGdlQ29uZmlnLmpzJ1xuICApXG5cbiAgY29uc3QgYnJpZGdlVG9rZW4gPSBnZXRCcmlkZ2VBY2Nlc3NUb2tlbigpXG4gIGlmICghYnJpZGdlVG9rZW4pIHtcbiAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTo6IGludGVudGlvbmFsIGNvbnNvbGUgb3V0cHV0XG4gICAgY29uc29sZS5lcnJvcihCUklER0VfTE9HSU5fRVJST1IpXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGN1c3RvbS1ydWxlcy9uby1wcm9jZXNzLWV4aXRcbiAgICBwcm9jZXNzLmV4aXQoMSlcbiAgfVxuXG4gIC8vIEZpcnN0LXRpbWUgcmVtb3RlIGRpYWxvZyBcdTIwMTQgZXhwbGFpbiB3aGF0IGJyaWRnZSBkb2VzIGFuZCBnZXQgY29uc2VudFxuICBjb25zdCB7XG4gICAgZ2V0R2xvYmFsQ29uZmlnLFxuICAgIHNhdmVHbG9iYWxDb25maWcsXG4gICAgZ2V0Q3VycmVudFByb2plY3RDb25maWcsXG4gICAgc2F2ZUN1cnJlbnRQcm9qZWN0Q29uZmlnLFxuICB9ID0gYXdhaXQgaW1wb3J0KCcuLi91dGlscy9jb25maWcuanMnKVxuICBpZiAoIWdldEdsb2JhbENvbmZpZygpLnJlbW90ZURpYWxvZ1NlZW4pIHtcbiAgICBjb25zdCByZWFkbGluZSA9IGF3YWl0IGltcG9ydCgncmVhZGxpbmUnKVxuICAgIGNvbnN0IHJsID0gcmVhZGxpbmUuY3JlYXRlSW50ZXJmYWNlKHtcbiAgICAgIGlucHV0OiBwcm9jZXNzLnN0ZGluLFxuICAgICAgb3V0cHV0OiBwcm9jZXNzLnN0ZG91dCxcbiAgICB9KVxuICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgICdcXG5SZW1vdGUgQ29udHJvbCBsZXRzIHlvdSBhY2Nlc3MgdGhpcyBDTEkgc2Vzc2lvbiBmcm9tIHRoZSB3ZWIgKGNsYXVkZS5haS9jb2RlKVxcbm9yIHRoZSBCbGF1ZGUgYXBwLCBzbyB5b3UgY2FuIHBpY2sgdXAgd2hlcmUgeW91IGxlZnQgb2ZmIG9uIGFueSBkZXZpY2UuXFxuXFxuWW91IGNhbiBkaXNjb25uZWN0IHJlbW90ZSBhY2Nlc3MgYW55dGltZSBieSBydW5uaW5nIC9yZW1vdGUtY29udHJvbCBhZ2Fpbi5cXG4nLFxuICAgIClcbiAgICBjb25zdCBhbnN3ZXIgPSBhd2FpdCBuZXcgUHJvbWlzZTxzdHJpbmc+KHJlc29sdmUgPT4ge1xuICAgICAgcmwucXVlc3Rpb24oJ0VuYWJsZSBSZW1vdGUgQ29udHJvbD8gKHkvbikgJywgcmVzb2x2ZSlcbiAgICB9KVxuICAgIHJsLmNsb3NlKClcbiAgICBzYXZlR2xvYmFsQ29uZmlnKGN1cnJlbnQgPT4ge1xuICAgICAgaWYgKGN1cnJlbnQucmVtb3RlRGlhbG9nU2VlbikgcmV0dXJuIGN1cnJlbnRcbiAgICAgIHJldHVybiB7IC4uLmN1cnJlbnQsIHJlbW90ZURpYWxvZ1NlZW46IHRydWUgfVxuICAgIH0pXG4gICAgaWYgKGFuc3dlci50b0xvd2VyQ2FzZSgpICE9PSAneScgJiYgYW5zd2VyLnRvTG93ZXJDYXNlKCkgIT09ICd5ZXMnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3VzdG9tLXJ1bGVzL25vLXByb2Nlc3MtZXhpdFxuICAgICAgcHJvY2Vzcy5leGl0KDApXG4gICAgfVxuICB9XG5cbiAgLy8gLS1jb250aW51ZTogcmVzb2x2ZSB0aGUgbW9zdCByZWNlbnQgc2Vzc2lvbiBmcm9tIHRoZSBjcmFzaC1yZWNvdmVyeVxuICAvLyBwb2ludGVyIGFuZCBjaGFpbiBpbnRvIHRoZSAjMjA0NjAgLS1zZXNzaW9uLWlkIGZsb3cuIFdvcmt0cmVlLWF3YXJlOlxuICAvLyBjaGVja3MgY3VycmVudCBkaXIgZmlyc3QgKGZhc3QgcGF0aCwgemVybyBleGVjKSwgdGhlbiBmYW5zIG91dCB0byBnaXRcbiAgLy8gd29ya3RyZWUgc2libGluZ3MgaWYgdGhhdCBtaXNzZXMgXHUyMDE0IHRoZSBSRVBMIGJyaWRnZSB3cml0ZXMgdG9cbiAgLy8gZ2V0T3JpZ2luYWxDd2QoKSB3aGljaCBFbnRlcldvcmt0cmVlVG9vbC9hY3RpdmVXb3JrdHJlZVNlc3Npb24gY2FuXG4gIC8vIHBvaW50IGF0IGEgd29ya3RyZWUgd2hpbGUgdGhlIHVzZXIncyBzaGVsbCBpcyBhdCB0aGUgcmVwbyByb290LlxuICAvLyBLQUlST1MtZ2F0ZWQgYXQgcGFyc2VBcmdzIFx1MjAxNCBjb250aW51ZVNlc3Npb24gaXMgYWx3YXlzIGZhbHNlIGluIGV4dGVybmFsXG4gIC8vIGJ1aWxkcywgc28gdGhpcyBibG9jayB0cmVlLXNoYWtlcy5cbiAgaWYgKGZlYXR1cmUoJ0tBSVJPUycpICYmIGNvbnRpbnVlU2Vzc2lvbikge1xuICAgIGNvbnN0IHsgcmVhZEJyaWRnZVBvaW50ZXJBY3Jvc3NXb3JrdHJlZXMgfSA9IGF3YWl0IGltcG9ydChcbiAgICAgICcuL2JyaWRnZVBvaW50ZXIuanMnXG4gICAgKVxuICAgIGNvbnN0IGZvdW5kID0gYXdhaXQgcmVhZEJyaWRnZVBvaW50ZXJBY3Jvc3NXb3JrdHJlZXMoZGlyKVxuICAgIGlmICghZm91bmQpIHtcbiAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOiBpbnRlbnRpb25hbCBlcnJvciBvdXRwdXRcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBFcnJvcjogTm8gcmVjZW50IHNlc3Npb24gZm91bmQgaW4gdGhpcyBkaXJlY3Rvcnkgb3IgaXRzIHdvcmt0cmVlcy4gUnVuIFxcYGJsYXVkZSByZW1vdGUtY29udHJvbFxcYCB0byBzdGFydCBhIG5ldyBvbmUuYCxcbiAgICAgIClcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjdXN0b20tcnVsZXMvbm8tcHJvY2Vzcy1leGl0XG4gICAgICBwcm9jZXNzLmV4aXQoMSlcbiAgICB9XG4gICAgY29uc3QgeyBwb2ludGVyLCBkaXI6IHBvaW50ZXJEaXIgfSA9IGZvdW5kXG4gICAgY29uc3QgYWdlTWluID0gTWF0aC5yb3VuZChwb2ludGVyLmFnZU1zIC8gNjBfMDAwKVxuICAgIGNvbnN0IGFnZVN0ciA9IGFnZU1pbiA8IDYwID8gYCR7YWdlTWlufW1gIDogYCR7TWF0aC5yb3VuZChhZ2VNaW4gLyA2MCl9aGBcbiAgICBjb25zdCBmcm9tV3QgPSBwb2ludGVyRGlyICE9PSBkaXIgPyBgIGZyb20gd29ya3RyZWUgJHtwb2ludGVyRGlyfWAgOiAnJ1xuICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOiBpbnRlbnRpb25hbCBpbmZvIG91dHB1dFxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgUmVzdW1pbmcgc2Vzc2lvbiAke3BvaW50ZXIuc2Vzc2lvbklkfSAoJHthZ2VTdHJ9IGFnbykke2Zyb21XdH1cXHUyMDI2YCxcbiAgICApXG4gICAgcmVzdW1lU2Vzc2lvbklkID0gcG9pbnRlci5zZXNzaW9uSWRcbiAgICAvLyBUcmFjayB3aGVyZSB0aGUgcG9pbnRlciBjYW1lIGZyb20gc28gdGhlICMyMDQ2MCBleGl0KDEpIHBhdGhzIGJlbG93XG4gICAgLy8gY2xlYXIgdGhlIFJJR0hUIGZpbGUgb24gZGV0ZXJtaW5pc3RpYyBmYWlsdXJlIFx1MjAxNCBvdGhlcndpc2UgLS1jb250aW51ZVxuICAgIC8vIHdvdWxkIGtlZXAgaGl0dGluZyB0aGUgc2FtZSBkZWFkIHNlc3Npb24uIE1heSBiZSBhIHdvcmt0cmVlIHNpYmxpbmcuXG4gICAgcmVzdW1lUG9pbnRlckRpciA9IHBvaW50ZXJEaXJcbiAgfVxuXG4gIC8vIEluIHByb2R1Y3Rpb24sIGJhc2VVcmwgaXMgdGhlIEFudGhyb3BpYyBBUEkgKGZyb20gT0F1dGggY29uZmlnKS5cbiAgLy8gQ0xBVURFX0JSSURHRV9CQVNFX1VSTCBvdmVycmlkZXMgdGhpcyBmb3IgYW50IGxvY2FsIGRldiBvbmx5LlxuICBjb25zdCBiYXNlVXJsID0gZ2V0QnJpZGdlQmFzZVVybCgpXG5cbiAgLy8gRm9yIG5vbi1sb2NhbGhvc3QgdGFyZ2V0cywgcmVxdWlyZSBIVFRQUyB0byBwcm90ZWN0IGNyZWRlbnRpYWxzLlxuICBpZiAoXG4gICAgYmFzZVVybC5zdGFydHNXaXRoKCdodHRwOi8vJykgJiZcbiAgICAhYmFzZVVybC5pbmNsdWRlcygnbG9jYWxob3N0JykgJiZcbiAgICAhYmFzZVVybC5pbmNsdWRlcygnMTI3LjAuMC4xJylcbiAgKSB7XG4gICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAnRXJyb3I6IFJlbW90ZSBDb250cm9sIGJhc2UgVVJMIHVzZXMgSFRUUC4gT25seSBIVFRQUyBvciBsb2NhbGhvc3QgSFRUUCBpcyBhbGxvd2VkLicsXG4gICAgKVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjdXN0b20tcnVsZXMvbm8tcHJvY2Vzcy1leGl0XG4gICAgcHJvY2Vzcy5leGl0KDEpXG4gIH1cblxuICAvLyBTZXNzaW9uIGluZ3Jlc3MgVVJMIGZvciBXZWJTb2NrZXQgY29ubmVjdGlvbnMuIEluIHByb2R1Y3Rpb24gdGhpcyBpcyB0aGVcbiAgLy8gc2FtZSBhcyBiYXNlVXJsIChFbnZveSByb3V0ZXMgL3YxL3Nlc3Npb25faW5ncmVzcy8qIHRvIHNlc3Npb24taW5ncmVzcykuXG4gIC8vIExvY2FsbHksIHNlc3Npb24taW5ncmVzcyBydW5zIG9uIGEgZGlmZmVyZW50IHBvcnQgKDk0MTMpIHRoYW4gdGhlXG4gIC8vIGNvbnRhaW4tcHJvdmlkZS1hcGkgKDgyMTEpLCBzbyBDTEFVREVfQlJJREdFX1NFU1NJT05fSU5HUkVTU19VUkwgbXVzdCBiZVxuICAvLyBzZXQgZXhwbGljaXRseS4gQW50LW9ubHksIG1hdGNoaW5nIENMQVVERV9CUklER0VfQkFTRV9VUkwuXG4gIGNvbnN0IHNlc3Npb25JbmdyZXNzVXJsID1cbiAgICBwcm9jZXNzLmVudi5VU0VSX1RZUEUgPT09ICdhbnQnICYmXG4gICAgcHJvY2Vzcy5lbnYuQ0xBVURFX0JSSURHRV9TRVNTSU9OX0lOR1JFU1NfVVJMXG4gICAgICA/IHByb2Nlc3MuZW52LkNMQVVERV9CUklER0VfU0VTU0lPTl9JTkdSRVNTX1VSTFxuICAgICAgOiBiYXNlVXJsXG5cbiAgY29uc3QgeyBnZXRCcmFuY2gsIGdldFJlbW90ZVVybCwgZmluZEdpdFJvb3QgfSA9IGF3YWl0IGltcG9ydChcbiAgICAnLi4vdXRpbHMvZ2l0LmpzJ1xuICApXG5cbiAgLy8gUHJlY2hlY2sgd29ya3RyZWUgYXZhaWxhYmlsaXR5IGZvciB0aGUgZmlyc3QtcnVuIGRpYWxvZyBhbmQgdGhlIGB3YFxuICAvLyB0b2dnbGUuIFVuY29uZGl0aW9uYWwgc28gd2Uga25vdyB1cGZyb250IHdoZXRoZXIgd29ya3RyZWUgaXMgYW4gb3B0aW9uLlxuICBjb25zdCB7IGhhc1dvcmt0cmVlQ3JlYXRlSG9vayB9ID0gYXdhaXQgaW1wb3J0KCcuLi91dGlscy9ob29rcy5qcycpXG4gIGNvbnN0IHdvcmt0cmVlQXZhaWxhYmxlID0gaGFzV29ya3RyZWVDcmVhdGVIb29rKCkgfHwgZmluZEdpdFJvb3QoZGlyKSAhPT0gbnVsbFxuXG4gIC8vIExvYWQgc2F2ZWQgcGVyLXByb2plY3Qgc3Bhd24tbW9kZSBwcmVmZXJlbmNlLiBHYXRlZCBieSBtdWx0aVNlc3Npb25FbmFibGVkXG4gIC8vIHNvIGEgR3Jvd3RoQm9vayByb2xsYmFjayBjbGVhbmx5IHJldmVydHMgdXNlcnMgdG8gc2luZ2xlLXNlc3Npb24gXHUyMDE0XG4gIC8vIG90aGVyd2lzZSBhIHNhdmVkIHByZWYgd291bGQgc2lsZW50bHkgcmUtZW5hYmxlIG11bHRpLXNlc3Npb24gYmVoYXZpb3JcbiAgLy8gKHdvcmt0cmVlIGlzb2xhdGlvbiwgMzIgbWF4IHNlc3Npb25zLCB3IHRvZ2dsZSkgZGVzcGl0ZSB0aGUgZ2F0ZSBiZWluZyBvZmYuXG4gIC8vIEFsc28gZ3VhcmQgYWdhaW5zdCBhIHN0YWxlIHdvcmt0cmVlIHByZWYgbGVmdCBvdmVyIGZyb20gd2hlbiB0aGlzIGRpciBXQVNcbiAgLy8gYSBnaXQgcmVwbyAob3IgdGhlIHVzZXIgY29waWVkIGNvbmZpZykgXHUyMDE0IGNsZWFyIGl0IG9uIGRpc2sgc28gdGhlIHdhcm5pbmdcbiAgLy8gZG9lc24ndCByZXBlYXQgb24gZXZlcnkgbGF1bmNoLlxuICBsZXQgc2F2ZWRTcGF3bk1vZGUgPSBtdWx0aVNlc3Npb25FbmFibGVkXG4gICAgPyBnZXRDdXJyZW50UHJvamVjdENvbmZpZygpLnJlbW90ZUNvbnRyb2xTcGF3bk1vZGVcbiAgICA6IHVuZGVmaW5lZFxuICBpZiAoc2F2ZWRTcGF3bk1vZGUgPT09ICd3b3JrdHJlZScgJiYgIXdvcmt0cmVlQXZhaWxhYmxlKSB7XG4gICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6IGludGVudGlvbmFsIHdhcm5pbmcgb3V0cHV0XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgICdXYXJuaW5nOiBTYXZlZCBzcGF3biBtb2RlIGlzIHdvcmt0cmVlIGJ1dCB0aGlzIGRpcmVjdG9yeSBpcyBub3QgYSBnaXQgcmVwb3NpdG9yeS4gRmFsbGluZyBiYWNrIHRvIHNhbWUtZGlyLicsXG4gICAgKVxuICAgIHNhdmVkU3Bhd25Nb2RlID0gdW5kZWZpbmVkXG4gICAgc2F2ZUN1cnJlbnRQcm9qZWN0Q29uZmlnKGN1cnJlbnQgPT4ge1xuICAgICAgaWYgKGN1cnJlbnQucmVtb3RlQ29udHJvbFNwYXduTW9kZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gY3VycmVudFxuICAgICAgcmV0dXJuIHsgLi4uY3VycmVudCwgcmVtb3RlQ29udHJvbFNwYXduTW9kZTogdW5kZWZpbmVkIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gRmlyc3QtcnVuIHNwYXduLW1vZGUgY2hvaWNlOiBhc2sgb25jZSBwZXIgcHJvamVjdCB3aGVuIHRoZSBjaG9pY2UgaXNcbiAgLy8gbWVhbmluZ2Z1bCAoZ2F0ZSBvbiwgYm90aCBtb2RlcyBhdmFpbGFibGUsIG5vIGV4cGxpY2l0IG92ZXJyaWRlLCBub3RcbiAgLy8gcmVzdW1pbmcpLiBTYXZlcyB0byBQcm9qZWN0Q29uZmlnIHNvIHN1YnNlcXVlbnQgcnVucyBza2lwIHRoaXMuXG4gIGlmIChcbiAgICBtdWx0aVNlc3Npb25FbmFibGVkICYmXG4gICAgIXNhdmVkU3Bhd25Nb2RlICYmXG4gICAgd29ya3RyZWVBdmFpbGFibGUgJiZcbiAgICBwYXJzZWRTcGF3bk1vZGUgPT09IHVuZGVmaW5lZCAmJlxuICAgICFyZXN1bWVTZXNzaW9uSWQgJiZcbiAgICBwcm9jZXNzLnN0ZGluLmlzVFRZXG4gICkge1xuICAgIGNvbnN0IHJlYWRsaW5lID0gYXdhaXQgaW1wb3J0KCdyZWFkbGluZScpXG4gICAgY29uc3QgcmwgPSByZWFkbGluZS5jcmVhdGVJbnRlcmZhY2Uoe1xuICAgICAgaW5wdXQ6IHByb2Nlc3Muc3RkaW4sXG4gICAgICBvdXRwdXQ6IHByb2Nlc3Muc3Rkb3V0LFxuICAgIH0pXG4gICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6IGludGVudGlvbmFsIGRpYWxvZyBvdXRwdXRcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGBcXG5CbGF1ZGUgUmVtb3RlIENvbnRyb2wgaXMgbGF1bmNoaW5nIGluIHNwYXduIG1vZGUgd2hpY2ggbGV0cyB5b3UgY3JlYXRlIG5ldyBzZXNzaW9ucyBpbiB0aGlzIHByb2plY3QgZnJvbSBCbGF1ZGUgb24gdGhlIHdlYiBvciB5b3VyIG1vYmlsZSBhcHAuIExlYXJuIG1vcmUgaGVyZTogaHR0cHM6Ly9jb2RlLmNsYXVkZS5jb20vZG9jcy9lbi9yZW1vdGUtY29udHJvbFxcblxcbmAgK1xuICAgICAgICBgU3Bhd24gbW9kZSBmb3IgdGhpcyBwcm9qZWN0OlxcbmAgK1xuICAgICAgICBgICBbMV0gc2FtZS1kaXIgXFx1MjAxNCBzZXNzaW9ucyBzaGFyZSB0aGUgY3VycmVudCBkaXJlY3RvcnkgKGRlZmF1bHQpXFxuYCArXG4gICAgICAgIGAgIFsyXSB3b3JrdHJlZSBcXHUyMDE0IGVhY2ggc2Vzc2lvbiBnZXRzIGFuIGlzb2xhdGVkIGdpdCB3b3JrdHJlZVxcblxcbmAgK1xuICAgICAgICBgVGhpcyBjYW4gYmUgY2hhbmdlZCBsYXRlciBvciBleHBsaWNpdGx5IHNldCB3aXRoIC0tc3Bhd249c2FtZS1kaXIgb3IgLS1zcGF3bj13b3JrdHJlZS5cXG5gLFxuICAgIClcbiAgICBjb25zdCBhbnN3ZXIgPSBhd2FpdCBuZXcgUHJvbWlzZTxzdHJpbmc+KHJlc29sdmUgPT4ge1xuICAgICAgcmwucXVlc3Rpb24oJ0Nob29zZSBbMS8yXSAoZGVmYXVsdDogMSk6ICcsIHJlc29sdmUpXG4gICAgfSlcbiAgICBybC5jbG9zZSgpXG4gICAgY29uc3QgY2hvc2VuOiAnc2FtZS1kaXInIHwgJ3dvcmt0cmVlJyA9XG4gICAgICBhbnN3ZXIudHJpbSgpID09PSAnMicgPyAnd29ya3RyZWUnIDogJ3NhbWUtZGlyJ1xuICAgIHNhdmVkU3Bhd25Nb2RlID0gY2hvc2VuXG4gICAgbG9nRXZlbnQoJ3Rlbmd1X2JyaWRnZV9zcGF3bl9tb2RlX2Nob3NlbicsIHtcbiAgICAgIHNwYXduX21vZGU6XG4gICAgICAgIGNob3NlbiBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgIH0pXG4gICAgc2F2ZUN1cnJlbnRQcm9qZWN0Q29uZmlnKGN1cnJlbnQgPT4ge1xuICAgICAgaWYgKGN1cnJlbnQucmVtb3RlQ29udHJvbFNwYXduTW9kZSA9PT0gY2hvc2VuKSByZXR1cm4gY3VycmVudFxuICAgICAgcmV0dXJuIHsgLi4uY3VycmVudCwgcmVtb3RlQ29udHJvbFNwYXduTW9kZTogY2hvc2VuIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gRGV0ZXJtaW5lIGVmZmVjdGl2ZSBzcGF3biBtb2RlLlxuICAvLyBQcmVjZWRlbmNlOiByZXN1bWUgPiBleHBsaWNpdCAtLXNwYXduID4gc2F2ZWQgcHJvamVjdCBwcmVmID4gZ2F0ZSBkZWZhdWx0XG4gIC8vIC0gcmVzdW1pbmcgdmlhIC0tY29udGludWUgLyAtLXNlc3Npb24taWQ6IGFsd2F5cyBzaW5nbGUtc2Vzc2lvbiAocmVzdW1lXG4gIC8vICAgdGFyZ2V0cyBvbmUgc3BlY2lmaWMgc2Vzc2lvbiBpbiBpdHMgb3JpZ2luYWwgZGlyZWN0b3J5KVxuICAvLyAtIGV4cGxpY2l0IC0tc3Bhd24gZmxhZzogdXNlIHRoYXQgdmFsdWUgZGlyZWN0bHkgKGRvZXMgbm90IHBlcnNpc3QpXG4gIC8vIC0gc2F2ZWQgUHJvamVjdENvbmZpZy5yZW1vdGVDb250cm9sU3Bhd25Nb2RlOiBzZXQgYnkgZmlyc3QtcnVuIGRpYWxvZyBvciBgd2BcbiAgLy8gLSBkZWZhdWx0IHdpdGggZ2F0ZSBvbjogc2FtZS1kaXIgKHBlcnNpc3RlbnQgbXVsdGktc2Vzc2lvbiwgc2hhcmVkIGN3ZClcbiAgLy8gLSBkZWZhdWx0IHdpdGggZ2F0ZSBvZmY6IHNpbmdsZS1zZXNzaW9uICh1bmNoYW5nZWQgbGVnYWN5IGJlaGF2aW9yKVxuICAvLyBUcmFjayBob3cgc3Bhd24gbW9kZSB3YXMgZGV0ZXJtaW5lZCwgZm9yIHJvbGxvdXQgYW5hbHl0aWNzLlxuICB0eXBlIFNwYXduTW9kZVNvdXJjZSA9ICdyZXN1bWUnIHwgJ2ZsYWcnIHwgJ3NhdmVkJyB8ICdnYXRlX2RlZmF1bHQnXG4gIGxldCBzcGF3bk1vZGVTb3VyY2U6IFNwYXduTW9kZVNvdXJjZVxuICBsZXQgc3Bhd25Nb2RlOiBTcGF3bk1vZGVcbiAgaWYgKHJlc3VtZVNlc3Npb25JZCkge1xuICAgIHNwYXduTW9kZSA9ICdzaW5nbGUtc2Vzc2lvbidcbiAgICBzcGF3bk1vZGVTb3VyY2UgPSAncmVzdW1lJ1xuICB9IGVsc2UgaWYgKHBhcnNlZFNwYXduTW9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgc3Bhd25Nb2RlID0gcGFyc2VkU3Bhd25Nb2RlXG4gICAgc3Bhd25Nb2RlU291cmNlID0gJ2ZsYWcnXG4gIH0gZWxzZSBpZiAoc2F2ZWRTcGF3bk1vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHNwYXduTW9kZSA9IHNhdmVkU3Bhd25Nb2RlXG4gICAgc3Bhd25Nb2RlU291cmNlID0gJ3NhdmVkJ1xuICB9IGVsc2Uge1xuICAgIHNwYXduTW9kZSA9IG11bHRpU2Vzc2lvbkVuYWJsZWQgPyAnc2FtZS1kaXInIDogJ3NpbmdsZS1zZXNzaW9uJ1xuICAgIHNwYXduTW9kZVNvdXJjZSA9ICdnYXRlX2RlZmF1bHQnXG4gIH1cbiAgY29uc3QgbWF4U2Vzc2lvbnMgPVxuICAgIHNwYXduTW9kZSA9PT0gJ3NpbmdsZS1zZXNzaW9uJ1xuICAgICAgPyAxXG4gICAgICA6IChwYXJzZWRDYXBhY2l0eSA/PyBTUEFXTl9TRVNTSU9OU19ERUZBVUxUKVxuICAvLyBQcmUtY3JlYXRlIGFuIGVtcHR5IHNlc3Npb24gb24gc3RhcnQgc28gdGhlIHVzZXIgaGFzIHNvbWV3aGVyZSB0byB0eXBlXG4gIC8vIGltbWVkaWF0ZWx5LCBydW5uaW5nIGluIHRoZSBjdXJyZW50IGRpcmVjdG9yeSAoZXhlbXB0ZWQgZnJvbSB3b3JrdHJlZVxuICAvLyBjcmVhdGlvbiBpbiB0aGUgc3Bhd24gbG9vcCkuIE9uIGJ5IGRlZmF1bHQ7IC0tbm8tY3JlYXRlLXNlc3Npb24taW4tZGlyXG4gIC8vIG9wdHMgb3V0IGZvciBhIHB1cmUgb24tZGVtYW5kIHNlcnZlciB3aGVyZSBldmVyeSBzZXNzaW9uIGlzIGlzb2xhdGVkLlxuICAvLyBUaGUgZWZmZWN0aXZlUmVzdW1lU2Vzc2lvbklkIGd1YXJkIGF0IHRoZSBjcmVhdGlvbiBzaXRlIGhhbmRsZXMgdGhlXG4gIC8vIHJlc3VtZSBjYXNlIChza2lwIGNyZWF0aW9uIHdoZW4gcmVzdW1lIHN1Y2NlZWRlZDsgZmFsbCB0aHJvdWdoIHRvXG4gIC8vIGZyZXNoIGNyZWF0aW9uIG9uIGVudi1taXNtYXRjaCBmYWxsYmFjaykuXG4gIGNvbnN0IHByZUNyZWF0ZVNlc3Npb24gPSBwYXJzZWRDcmVhdGVTZXNzaW9uSW5EaXIgPz8gdHJ1ZVxuXG4gIC8vIFdpdGhvdXQgLS1jb250aW51ZTogYSBsZWZ0b3ZlciBwb2ludGVyIG1lYW5zIHRoZSBwcmV2aW91cyBydW4gZGlkbid0XG4gIC8vIHNodXQgZG93biBjbGVhbmx5IChjcmFzaCwga2lsbCAtOSwgdGVybWluYWwgY2xvc2VkKS4gQ2xlYXIgaXQgc28gdGhlXG4gIC8vIHN0YWxlIGVudiBkb2Vzbid0IGxpbmdlciBwYXN0IGl0cyByZWxldmFuY2UuIFJ1bnMgaW4gYWxsIG1vZGVzXG4gIC8vIChjbGVhckJyaWRnZVBvaW50ZXIgaXMgYSBuby1vcCB3aGVuIG5vIGZpbGUgZXhpc3RzKSBcdTIwMTQgY292ZXJzIHRoZVxuICAvLyBnYXRlLXRyYW5zaXRpb24gY2FzZSB3aGVyZSBhIHVzZXIgY3Jhc2hlZCBpbiBzaW5nbGUtc2Vzc2lvbiBtb2RlIHRoZW5cbiAgLy8gc3RhcnRzIGZyZXNoIGluIHdvcmt0cmVlIG1vZGUuIE9ubHkgc2luZ2xlLXNlc3Npb24gbW9kZSB3cml0ZXMgbmV3XG4gIC8vIHBvaW50ZXJzLlxuICBpZiAoIXJlc3VtZVNlc3Npb25JZCkge1xuICAgIGNvbnN0IHsgY2xlYXJCcmlkZ2VQb2ludGVyIH0gPSBhd2FpdCBpbXBvcnQoJy4vYnJpZGdlUG9pbnRlci5qcycpXG4gICAgYXdhaXQgY2xlYXJCcmlkZ2VQb2ludGVyKGRpcilcbiAgfVxuXG4gIC8vIFdvcmt0cmVlIG1vZGUgcmVxdWlyZXMgZWl0aGVyIGdpdCBvciBXb3JrdHJlZUNyZWF0ZS9Xb3JrdHJlZVJlbW92ZSBob29rcy5cbiAgLy8gT25seSByZWFjaGFibGUgdmlhIGV4cGxpY2l0IC0tc3Bhd249d29ya3RyZWUgKGRlZmF1bHQgaXMgc2FtZS1kaXIpO1xuICAvLyBzYXZlZCB3b3JrdHJlZSBwcmVmIHdhcyBhbHJlYWR5IGd1YXJkZWQgYWJvdmUuXG4gIGlmIChzcGF3bk1vZGUgPT09ICd3b3JrdHJlZScgJiYgIXdvcmt0cmVlQXZhaWxhYmxlKSB7XG4gICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6IGludGVudGlvbmFsIGVycm9yIG91dHB1dFxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgRXJyb3I6IFdvcmt0cmVlIG1vZGUgcmVxdWlyZXMgYSBnaXQgcmVwb3NpdG9yeSBvciBXb3JrdHJlZUNyZWF0ZSBob29rcyBjb25maWd1cmVkLiBVc2UgLS1zcGF3bj1zZXNzaW9uIGZvciBzaW5nbGUtc2Vzc2lvbiBtb2RlLmAsXG4gICAgKVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjdXN0b20tcnVsZXMvbm8tcHJvY2Vzcy1leGl0XG4gICAgcHJvY2Vzcy5leGl0KDEpXG4gIH1cblxuICBjb25zdCBicmFuY2ggPSBhd2FpdCBnZXRCcmFuY2goKVxuICBjb25zdCBnaXRSZXBvVXJsID0gYXdhaXQgZ2V0UmVtb3RlVXJsKClcbiAgY29uc3QgbWFjaGluZU5hbWUgPSBob3N0bmFtZSgpXG4gIGNvbnN0IGJyaWRnZUlkID0gcmFuZG9tVVVJRCgpXG5cbiAgY29uc3QgeyBoYW5kbGVPQXV0aDQwMUVycm9yIH0gPSBhd2FpdCBpbXBvcnQoJy4uL3V0aWxzL2F1dGguanMnKVxuICBjb25zdCBhcGkgPSBjcmVhdGVCcmlkZ2VBcGlDbGllbnQoe1xuICAgIGJhc2VVcmwsXG4gICAgZ2V0QWNjZXNzVG9rZW46IGdldEJyaWRnZUFjY2Vzc1Rva2VuLFxuICAgIHJ1bm5lclZlcnNpb246IE1BQ1JPLlZFUlNJT04sXG4gICAgb25EZWJ1ZzogbG9nRm9yRGVidWdnaW5nLFxuICAgIG9uQXV0aDQwMTogaGFuZGxlT0F1dGg0MDFFcnJvcixcbiAgICBnZXRUcnVzdGVkRGV2aWNlVG9rZW4sXG4gIH0pXG5cbiAgLy8gV2hlbiByZXN1bWluZyBhIHNlc3Npb24gdmlhIC0tc2Vzc2lvbi1pZCwgZmV0Y2ggaXQgdG8gbGVhcm4gaXRzXG4gIC8vIGVudmlyb25tZW50X2lkIGFuZCByZXVzZSB0aGF0IGZvciByZWdpc3RyYXRpb24gKGlkZW1wb3RlbnQgb24gdGhlXG4gIC8vIGJhY2tlbmQpLiBMZWZ0IHVuZGVmaW5lZCBvdGhlcndpc2UgXHUyMDE0IHRoZSBiYWNrZW5kIHJlamVjdHNcbiAgLy8gY2xpZW50LWdlbmVyYXRlZCBVVUlEcyBhbmQgd2lsbCBhbGxvY2F0ZSBhIGZyZXNoIGVudmlyb25tZW50LlxuICAvLyBmZWF0dXJlKCdLQUlST1MnKSBnYXRlOiAtLXNlc3Npb24taWQgaXMgYW50LW9ubHk7IHBhcnNlQXJncyBhbHJlYWR5XG4gIC8vIHJlamVjdHMgdGhlIGZsYWcgd2hlbiB0aGUgZ2F0ZSBpcyBvZmYsIHNvIHJlc3VtZVNlc3Npb25JZCBpcyBhbHdheXNcbiAgLy8gdW5kZWZpbmVkIGhlcmUgaW4gZXh0ZXJuYWwgYnVpbGRzIFx1MjAxNCB0aGlzIGd1YXJkIGlzIGZvciB0cmVlLXNoYWtpbmcuXG4gIGxldCByZXVzZUVudmlyb25tZW50SWQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBpZiAoZmVhdHVyZSgnS0FJUk9TJykgJiYgcmVzdW1lU2Vzc2lvbklkKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhbGlkYXRlQnJpZGdlSWQocmVzdW1lU2Vzc2lvbklkLCAnc2Vzc2lvbklkJylcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOiBpbnRlbnRpb25hbCBlcnJvciBvdXRwdXRcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBFcnJvcjogSW52YWxpZCBzZXNzaW9uIElEIFwiJHtyZXN1bWVTZXNzaW9uSWR9XCIuIFNlc3Npb24gSURzIG11c3Qgbm90IGNvbnRhaW4gdW5zYWZlIGNoYXJhY3RlcnMuYCxcbiAgICAgIClcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjdXN0b20tcnVsZXMvbm8tcHJvY2Vzcy1leGl0XG4gICAgICBwcm9jZXNzLmV4aXQoMSlcbiAgICB9XG4gICAgLy8gUHJvYWN0aXZlbHkgcmVmcmVzaCB0aGUgT0F1dGggdG9rZW4gXHUyMDE0IGdldEJyaWRnZVNlc3Npb24gdXNlcyByYXcgYXhpb3NcbiAgICAvLyB3aXRob3V0IHRoZSB3aXRoT0F1dGhSZXRyeSA0MDEtcmVmcmVzaCBsb2dpYy4gQW4gZXhwaXJlZC1idXQtcHJlc2VudFxuICAgIC8vIHRva2VuIHdvdWxkIG90aGVyd2lzZSBwcm9kdWNlIGEgbWlzbGVhZGluZyBcIm5vdCBmb3VuZFwiIGVycm9yLlxuICAgIGF3YWl0IGNoZWNrQW5kUmVmcmVzaE9BdXRoVG9rZW5JZk5lZWRlZCgpXG4gICAgY2xlYXJPQXV0aFRva2VuQ2FjaGUoKVxuICAgIGNvbnN0IHsgZ2V0QnJpZGdlU2Vzc2lvbiB9ID0gYXdhaXQgaW1wb3J0KCcuL2NyZWF0ZVNlc3Npb24uanMnKVxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRCcmlkZ2VTZXNzaW9uKHJlc3VtZVNlc3Npb25JZCwge1xuICAgICAgYmFzZVVybCxcbiAgICAgIGdldEFjY2Vzc1Rva2VuOiBnZXRCcmlkZ2VBY2Nlc3NUb2tlbixcbiAgICB9KVxuICAgIGlmICghc2Vzc2lvbikge1xuICAgICAgLy8gU2Vzc2lvbiBnb25lIG9uIHNlcnZlciBcdTIxOTIgcG9pbnRlciBpcyBzdGFsZS4gQ2xlYXIgaXQgc28gdGhlIHVzZXJcbiAgICAgIC8vIGlzbid0IHJlLXByb21wdGVkIG5leHQgbGF1bmNoLiAoRXhwbGljaXQgLS1zZXNzaW9uLWlkIGxlYXZlcyB0aGVcbiAgICAgIC8vIHBvaW50ZXIgYWxvbmUgXHUyMDE0IGl0J3MgYW4gaW5kZXBlbmRlbnQgZmlsZSB0aGV5IG1heSBub3QgZXZlbiBoYXZlLilcbiAgICAgIC8vIHJlc3VtZVBvaW50ZXJEaXIgbWF5IGJlIGEgd29ya3RyZWUgc2libGluZyBcdTIwMTQgY2xlYXIgVEhBVCBmaWxlLlxuICAgICAgaWYgKHJlc3VtZVBvaW50ZXJEaXIpIHtcbiAgICAgICAgY29uc3QgeyBjbGVhckJyaWRnZVBvaW50ZXIgfSA9IGF3YWl0IGltcG9ydCgnLi9icmlkZ2VQb2ludGVyLmpzJylcbiAgICAgICAgYXdhaXQgY2xlYXJCcmlkZ2VQb2ludGVyKHJlc3VtZVBvaW50ZXJEaXIpXG4gICAgICB9XG4gICAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTogaW50ZW50aW9uYWwgZXJyb3Igb3V0cHV0XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgRXJyb3I6IFNlc3Npb24gJHtyZXN1bWVTZXNzaW9uSWR9IG5vdCBmb3VuZC4gSXQgbWF5IGhhdmUgYmVlbiBhcmNoaXZlZCBvciBleHBpcmVkLCBvciB5b3VyIGxvZ2luIG1heSBoYXZlIGxhcHNlZCAocnVuIFxcYGJsYXVkZSAvbG9naW5cXGApLmAsXG4gICAgICApXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3VzdG9tLXJ1bGVzL25vLXByb2Nlc3MtZXhpdFxuICAgICAgcHJvY2Vzcy5leGl0KDEpXG4gICAgfVxuICAgIGlmICghc2Vzc2lvbi5lbnZpcm9ubWVudF9pZCkge1xuICAgICAgaWYgKHJlc3VtZVBvaW50ZXJEaXIpIHtcbiAgICAgICAgY29uc3QgeyBjbGVhckJyaWRnZVBvaW50ZXIgfSA9IGF3YWl0IGltcG9ydCgnLi9icmlkZ2VQb2ludGVyLmpzJylcbiAgICAgICAgYXdhaXQgY2xlYXJCcmlkZ2VQb2ludGVyKHJlc3VtZVBvaW50ZXJEaXIpXG4gICAgICB9XG4gICAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTogaW50ZW50aW9uYWwgZXJyb3Igb3V0cHV0XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgRXJyb3I6IFNlc3Npb24gJHtyZXN1bWVTZXNzaW9uSWR9IGhhcyBubyBlbnZpcm9ubWVudF9pZC4gSXQgbWF5IG5ldmVyIGhhdmUgYmVlbiBhdHRhY2hlZCB0byBhIGJyaWRnZS5gLFxuICAgICAgKVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGN1c3RvbS1ydWxlcy9uby1wcm9jZXNzLWV4aXRcbiAgICAgIHByb2Nlc3MuZXhpdCgxKVxuICAgIH1cbiAgICByZXVzZUVudmlyb25tZW50SWQgPSBzZXNzaW9uLmVudmlyb25tZW50X2lkXG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFticmlkZ2U6aW5pdF0gUmVzdW1pbmcgc2Vzc2lvbiAke3Jlc3VtZVNlc3Npb25JZH0gb24gZW52aXJvbm1lbnQgJHtyZXVzZUVudmlyb25tZW50SWR9YCxcbiAgICApXG4gIH1cblxuICBjb25zdCBjb25maWc6IEJyaWRnZUNvbmZpZyA9IHtcbiAgICBkaXIsXG4gICAgbWFjaGluZU5hbWUsXG4gICAgYnJhbmNoLFxuICAgIGdpdFJlcG9VcmwsXG4gICAgbWF4U2Vzc2lvbnMsXG4gICAgc3Bhd25Nb2RlLFxuICAgIHZlcmJvc2UsXG4gICAgc2FuZGJveCxcbiAgICBicmlkZ2VJZCxcbiAgICB3b3JrZXJUeXBlOiAnY2xhdWRlX2NvZGUnLFxuICAgIGVudmlyb25tZW50SWQ6IHJhbmRvbVVVSUQoKSxcbiAgICByZXVzZUVudmlyb25tZW50SWQsXG4gICAgYXBpQmFzZVVybDogYmFzZVVybCxcbiAgICBzZXNzaW9uSW5ncmVzc1VybCxcbiAgICBkZWJ1Z0ZpbGUsXG4gICAgc2Vzc2lvblRpbWVvdXRNcyxcbiAgfVxuXG4gIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICBgW2JyaWRnZTppbml0XSBicmlkZ2VJZD0ke2JyaWRnZUlkfSR7cmV1c2VFbnZpcm9ubWVudElkID8gYCByZXVzZUVudmlyb25tZW50SWQ9JHtyZXVzZUVudmlyb25tZW50SWR9YCA6ICcnfSBkaXI9JHtkaXJ9IGJyYW5jaD0ke2JyYW5jaH0gZ2l0UmVwb1VybD0ke2dpdFJlcG9Vcmx9IG1hY2hpbmU9JHttYWNoaW5lTmFtZX1gLFxuICApXG4gIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICBgW2JyaWRnZTppbml0XSBhcGlCYXNlVXJsPSR7YmFzZVVybH0gc2Vzc2lvbkluZ3Jlc3NVcmw9JHtzZXNzaW9uSW5ncmVzc1VybH1gLFxuICApXG4gIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICBgW2JyaWRnZTppbml0XSBzYW5kYm94PSR7c2FuZGJveH0ke2RlYnVnRmlsZSA/IGAgZGVidWdGaWxlPSR7ZGVidWdGaWxlfWAgOiAnJ31gLFxuICApXG5cbiAgLy8gUmVnaXN0ZXIgdGhlIGJyaWRnZSBlbnZpcm9ubWVudCBiZWZvcmUgZW50ZXJpbmcgdGhlIHBvbGwgbG9vcC5cbiAgbGV0IGVudmlyb25tZW50SWQ6IHN0cmluZ1xuICBsZXQgZW52aXJvbm1lbnRTZWNyZXQ6IHN0cmluZ1xuICB0cnkge1xuICAgIGNvbnN0IHJlZyA9IGF3YWl0IGFwaS5yZWdpc3RlckJyaWRnZUVudmlyb25tZW50KGNvbmZpZylcbiAgICBlbnZpcm9ubWVudElkID0gcmVnLmVudmlyb25tZW50X2lkXG4gICAgZW52aXJvbm1lbnRTZWNyZXQgPSByZWcuZW52aXJvbm1lbnRfc2VjcmV0XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGxvZ0V2ZW50KCd0ZW5ndV9icmlkZ2VfcmVnaXN0cmF0aW9uX2ZhaWxlZCcsIHtcbiAgICAgIHN0YXR1czogZXJyIGluc3RhbmNlb2YgQnJpZGdlRmF0YWxFcnJvciA/IGVyci5zdGF0dXMgOiB1bmRlZmluZWQsXG4gICAgfSlcbiAgICAvLyBSZWdpc3RyYXRpb24gZmFpbHVyZXMgYXJlIGZhdGFsIFx1MjAxNCBwcmludCBhIGNsZWFuIG1lc3NhZ2UgaW5zdGVhZCBvZiBhIHN0YWNrIHRyYWNlLlxuICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgZXJyIGluc3RhbmNlb2YgQnJpZGdlRmF0YWxFcnJvciAmJiBlcnIuc3RhdHVzID09PSA0MDRcbiAgICAgICAgPyAnUmVtb3RlIENvbnRyb2wgZW52aXJvbm1lbnRzIGFyZSBub3QgYXZhaWxhYmxlIGZvciB5b3VyIGFjY291bnQuJ1xuICAgICAgICA6IGBFcnJvcjogJHtlcnJvck1lc3NhZ2UoZXJyKX1gLFxuICAgIClcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3VzdG9tLXJ1bGVzL25vLXByb2Nlc3MtZXhpdFxuICAgIHByb2Nlc3MuZXhpdCgxKVxuICB9XG5cbiAgLy8gVHJhY2tzIHdoZXRoZXIgdGhlIC0tc2Vzc2lvbi1pZCByZXN1bWUgZmxvdyBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5LlxuICAvLyBVc2VkIGJlbG93IHRvIHNraXAgZnJlc2ggc2Vzc2lvbiBjcmVhdGlvbiBhbmQgc2VlZCBpbml0aWFsU2Vzc2lvbklkLlxuICAvLyBDbGVhcmVkIG9uIGVudiBtaXNtYXRjaCBzbyB3ZSBncmFjZWZ1bGx5IGZhbGwgYmFjayB0byBhIG5ldyBzZXNzaW9uLlxuICBsZXQgZWZmZWN0aXZlUmVzdW1lU2Vzc2lvbklkOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgaWYgKGZlYXR1cmUoJ0tBSVJPUycpICYmIHJlc3VtZVNlc3Npb25JZCkge1xuICAgIGlmIChyZXVzZUVudmlyb25tZW50SWQgJiYgZW52aXJvbm1lbnRJZCAhPT0gcmV1c2VFbnZpcm9ubWVudElkKSB7XG4gICAgICAvLyBCYWNrZW5kIHJldHVybmVkIGEgZGlmZmVyZW50IGVudmlyb25tZW50X2lkIFx1MjAxNCB0aGUgb3JpZ2luYWwgZW52XG4gICAgICAvLyBleHBpcmVkIG9yIHdhcyByZWFwZWQuIFJlY29ubmVjdCB3b24ndCB3b3JrIGFnYWluc3QgdGhlIG5ldyBlbnZcbiAgICAgIC8vIChzZXNzaW9uIGlzIGJvdW5kIHRvIHRoZSBvbGQgb25lKS4gTG9nIHRvIHNlbnRyeSBmb3IgdmlzaWJpbGl0eVxuICAgICAgLy8gYW5kIGZhbGwgdGhyb3VnaCB0byBmcmVzaCBzZXNzaW9uIGNyZWF0aW9uIG9uIHRoZSBuZXcgZW52LlxuICAgICAgbG9nRXJyb3IoXG4gICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICBgQnJpZGdlIHJlc3VtZSBlbnYgbWlzbWF0Y2g6IHJlcXVlc3RlZCAke3JldXNlRW52aXJvbm1lbnRJZH0sIGJhY2tlbmQgcmV0dXJuZWQgJHtlbnZpcm9ubWVudElkfS4gRmFsbGluZyBiYWNrIHRvIGZyZXNoIHNlc3Npb24uYCxcbiAgICAgICAgKSxcbiAgICAgIClcbiAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOiBpbnRlbnRpb25hbCB3YXJuaW5nIG91dHB1dFxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgV2FybmluZzogQ291bGQgbm90IHJlc3VtZSBzZXNzaW9uICR7cmVzdW1lU2Vzc2lvbklkfSBcdTIwMTQgaXRzIGVudmlyb25tZW50IGhhcyBleHBpcmVkLiBDcmVhdGluZyBhIGZyZXNoIHNlc3Npb24gaW5zdGVhZC5gLFxuICAgICAgKVxuICAgICAgLy8gRG9uJ3QgZGVyZWdpc3RlciBcdTIwMTQgd2UncmUgZ29pbmcgdG8gdXNlIHRoaXMgbmV3IGVudmlyb25tZW50LlxuICAgICAgLy8gZWZmZWN0aXZlUmVzdW1lU2Vzc2lvbklkIHN0YXlzIHVuZGVmaW5lZCBcdTIxOTIgZnJlc2ggc2Vzc2lvbiBwYXRoIGJlbG93LlxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGb3JjZS1zdG9wIGFueSBzdGFsZSB3b3JrZXIgaW5zdGFuY2VzIGZvciB0aGlzIHNlc3Npb24gYW5kIHJlLXF1ZXVlXG4gICAgICAvLyBpdCBzbyBvdXIgcG9sbCBsb29wIHBpY2tzIGl0IHVwLiBNdXN0IGhhcHBlbiBhZnRlciByZWdpc3RyYXRpb24gc29cbiAgICAgIC8vIHRoZSBiYWNrZW5kIGtub3dzIGEgbGl2ZSB3b3JrZXIgZXhpc3RzIGZvciB0aGUgZW52aXJvbm1lbnQuXG4gICAgICAvL1xuICAgICAgLy8gVGhlIHBvaW50ZXIgc3RvcmVzIGEgc2Vzc2lvbl8qIElEIGJ1dCAvYnJpZGdlL3JlY29ubmVjdCBsb29rc1xuICAgICAgLy8gc2Vzc2lvbnMgdXAgYnkgdGhlaXIgaW5mcmEgdGFnIChjc2VfKikgd2hlbiBjY3JfdjJfY29tcGF0X2VuYWJsZWRcbiAgICAgIC8vIGlzIG9uLiBUcnkgYm90aDsgdGhlIGNvbnZlcnNpb24gaXMgYSBuby1vcCBpZiBhbHJlYWR5IGNzZV8qLlxuICAgICAgY29uc3QgaW5mcmFSZXN1bWVJZCA9IHRvSW5mcmFTZXNzaW9uSWQocmVzdW1lU2Vzc2lvbklkKVxuICAgICAgY29uc3QgcmVjb25uZWN0Q2FuZGlkYXRlcyA9XG4gICAgICAgIGluZnJhUmVzdW1lSWQgPT09IHJlc3VtZVNlc3Npb25JZFxuICAgICAgICAgID8gW3Jlc3VtZVNlc3Npb25JZF1cbiAgICAgICAgICA6IFtyZXN1bWVTZXNzaW9uSWQsIGluZnJhUmVzdW1lSWRdXG4gICAgICBsZXQgcmVjb25uZWN0ZWQgPSBmYWxzZVxuICAgICAgbGV0IGxhc3RSZWNvbm5lY3RFcnI6IHVua25vd25cbiAgICAgIGZvciAoY29uc3QgY2FuZGlkYXRlSWQgb2YgcmVjb25uZWN0Q2FuZGlkYXRlcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IGFwaS5yZWNvbm5lY3RTZXNzaW9uKGVudmlyb25tZW50SWQsIGNhbmRpZGF0ZUlkKVxuICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgIGBbYnJpZGdlOmluaXRdIFNlc3Npb24gJHtjYW5kaWRhdGVJZH0gcmUtcXVldWVkIHZpYSBicmlkZ2UvcmVjb25uZWN0YCxcbiAgICAgICAgICApXG4gICAgICAgICAgZWZmZWN0aXZlUmVzdW1lU2Vzc2lvbklkID0gcmVzdW1lU2Vzc2lvbklkXG4gICAgICAgICAgcmVjb25uZWN0ZWQgPSB0cnVlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgbGFzdFJlY29ubmVjdEVyciA9IGVyclxuICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgIGBbYnJpZGdlOmluaXRdIHJlY29ubmVjdFNlc3Npb24oJHtjYW5kaWRhdGVJZH0pIGZhaWxlZDogJHtlcnJvck1lc3NhZ2UoZXJyKX1gLFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFyZWNvbm5lY3RlZCkge1xuICAgICAgICBjb25zdCBlcnIgPSBsYXN0UmVjb25uZWN0RXJyXG5cbiAgICAgICAgLy8gRG8gTk9UIGRlcmVnaXN0ZXIgb24gdHJhbnNpZW50IHJlY29ubmVjdCBmYWlsdXJlIFx1MjAxNCBhdCB0aGlzIHBvaW50XG4gICAgICAgIC8vIGVudmlyb25tZW50SWQgSVMgdGhlIHNlc3Npb24ncyBvd24gZW52aXJvbm1lbnQuIERlcmVnaXN0ZXJpbmdcbiAgICAgICAgLy8gd291bGQgbWFrZSByZXRyeSBpbXBvc3NpYmxlLiBUaGUgYmFja2VuZCdzIDRoIFRUTCBjbGVhbnMgdXAuXG4gICAgICAgIGNvbnN0IGlzRmF0YWwgPSBlcnIgaW5zdGFuY2VvZiBCcmlkZ2VGYXRhbEVycm9yXG4gICAgICAgIC8vIENsZWFyIHBvaW50ZXIgb25seSBvbiBmYXRhbCByZWNvbm5lY3QgZmFpbHVyZS4gVHJhbnNpZW50IGZhaWx1cmVzXG4gICAgICAgIC8vIChcInRyeSBydW5uaW5nIHRoZSBzYW1lIGNvbW1hbmQgYWdhaW5cIikgc2hvdWxkIGtlZXAgdGhlIHBvaW50ZXIgc29cbiAgICAgICAgLy8gbmV4dCBsYXVuY2ggcmUtcHJvbXB0cyBcdTIwMTQgdGhhdCBJUyB0aGUgcmV0cnkgbWVjaGFuaXNtLlxuICAgICAgICBpZiAocmVzdW1lUG9pbnRlckRpciAmJiBpc0ZhdGFsKSB7XG4gICAgICAgICAgY29uc3QgeyBjbGVhckJyaWRnZVBvaW50ZXIgfSA9IGF3YWl0IGltcG9ydCgnLi9icmlkZ2VQb2ludGVyLmpzJylcbiAgICAgICAgICBhd2FpdCBjbGVhckJyaWRnZVBvaW50ZXIocmVzdW1lUG9pbnRlckRpcilcbiAgICAgICAgfVxuICAgICAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTogaW50ZW50aW9uYWwgZXJyb3Igb3V0cHV0XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgaXNGYXRhbFxuICAgICAgICAgICAgPyBgRXJyb3I6ICR7ZXJyb3JNZXNzYWdlKGVycil9YFxuICAgICAgICAgICAgOiBgRXJyb3I6IEZhaWxlZCB0byByZWNvbm5lY3Qgc2Vzc2lvbiAke3Jlc3VtZVNlc3Npb25JZH06ICR7ZXJyb3JNZXNzYWdlKGVycil9XFxuVGhlIHNlc3Npb24gbWF5IHN0aWxsIGJlIHJlc3VtYWJsZSBcdTIwMTQgdHJ5IHJ1bm5pbmcgdGhlIHNhbWUgY29tbWFuZCBhZ2Fpbi5gLFxuICAgICAgICApXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjdXN0b20tcnVsZXMvbm8tcHJvY2Vzcy1leGl0XG4gICAgICAgIHByb2Nlc3MuZXhpdCgxKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICBgW2JyaWRnZTppbml0XSBSZWdpc3RlcmVkLCBzZXJ2ZXIgZW52aXJvbm1lbnRJZD0ke2Vudmlyb25tZW50SWR9YCxcbiAgKVxuICBjb25zdCBzdGFydHVwUG9sbENvbmZpZyA9IGdldFBvbGxJbnRlcnZhbENvbmZpZygpXG4gIGxvZ0V2ZW50KCd0ZW5ndV9icmlkZ2Vfc3RhcnRlZCcsIHtcbiAgICBtYXhfc2Vzc2lvbnM6IGNvbmZpZy5tYXhTZXNzaW9ucyxcbiAgICBoYXNfZGVidWdfZmlsZTogISFjb25maWcuZGVidWdGaWxlLFxuICAgIHNhbmRib3g6IGNvbmZpZy5zYW5kYm94LFxuICAgIHZlcmJvc2U6IGNvbmZpZy52ZXJib3NlLFxuICAgIGhlYXJ0YmVhdF9pbnRlcnZhbF9tczpcbiAgICAgIHN0YXJ0dXBQb2xsQ29uZmlnLm5vbl9leGNsdXNpdmVfaGVhcnRiZWF0X2ludGVydmFsX21zLFxuICAgIHNwYXduX21vZGU6XG4gICAgICBjb25maWcuc3Bhd25Nb2RlIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgc3Bhd25fbW9kZV9zb3VyY2U6XG4gICAgICBzcGF3bk1vZGVTb3VyY2UgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICBtdWx0aV9zZXNzaW9uX2dhdGU6IG11bHRpU2Vzc2lvbkVuYWJsZWQsXG4gICAgcHJlX2NyZWF0ZV9zZXNzaW9uOiBwcmVDcmVhdGVTZXNzaW9uLFxuICAgIHdvcmt0cmVlX2F2YWlsYWJsZTogd29ya3RyZWVBdmFpbGFibGUsXG4gIH0pXG4gIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2luZm8nLCAnYnJpZGdlX3N0YXJ0ZWQnLCB7XG4gICAgbWF4X3Nlc3Npb25zOiBjb25maWcubWF4U2Vzc2lvbnMsXG4gICAgc2FuZGJveDogY29uZmlnLnNhbmRib3gsXG4gICAgc3Bhd25fbW9kZTogY29uZmlnLnNwYXduTW9kZSxcbiAgfSlcblxuICBjb25zdCBzcGF3bmVyID0gY3JlYXRlU2Vzc2lvblNwYXduZXIoe1xuICAgIGV4ZWNQYXRoOiBwcm9jZXNzLmV4ZWNQYXRoLFxuICAgIHNjcmlwdEFyZ3M6IHNwYXduU2NyaXB0QXJncygpLFxuICAgIGVudjogcHJvY2Vzcy5lbnYsXG4gICAgdmVyYm9zZSxcbiAgICBzYW5kYm94LFxuICAgIGRlYnVnRmlsZSxcbiAgICBwZXJtaXNzaW9uTW9kZSxcbiAgICBvbkRlYnVnOiBsb2dGb3JEZWJ1Z2dpbmcsXG4gICAgb25BY3Rpdml0eTogKHNlc3Npb25JZCwgYWN0aXZpdHkpID0+IHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFticmlkZ2U6YWN0aXZpdHldIHNlc3Npb25JZD0ke3Nlc3Npb25JZH0gJHthY3Rpdml0eS50eXBlfSAke2FjdGl2aXR5LnN1bW1hcnl9YCxcbiAgICAgIClcbiAgICB9LFxuICAgIG9uUGVybWlzc2lvblJlcXVlc3Q6IChzZXNzaW9uSWQsIHJlcXVlc3QsIF9hY2Nlc3NUb2tlbikgPT4ge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgW2JyaWRnZTpwZXJtXSBzZXNzaW9uSWQ9JHtzZXNzaW9uSWR9IHRvb2w9JHtyZXF1ZXN0LnJlcXVlc3QudG9vbF9uYW1lfSByZXF1ZXN0X2lkPSR7cmVxdWVzdC5yZXF1ZXN0X2lkfSAobm90IGF1dG8tYXBwcm92aW5nKWAsXG4gICAgICApXG4gICAgfSxcbiAgfSlcblxuICBjb25zdCBsb2dnZXIgPSBjcmVhdGVCcmlkZ2VMb2dnZXIoeyB2ZXJib3NlIH0pXG4gIGNvbnN0IHsgcGFyc2VHaXRIdWJSZXBvc2l0b3J5IH0gPSBhd2FpdCBpbXBvcnQoJy4uL3V0aWxzL2RldGVjdFJlcG9zaXRvcnkuanMnKVxuICBjb25zdCBvd25lclJlcG8gPSBnaXRSZXBvVXJsID8gcGFyc2VHaXRIdWJSZXBvc2l0b3J5KGdpdFJlcG9VcmwpIDogbnVsbFxuICAvLyBVc2UgdGhlIHJlcG8gbmFtZSBmcm9tIHRoZSBwYXJzZWQgb3duZXIvcmVwbywgb3IgZmFsbCBiYWNrIHRvIHRoZSBkaXIgYmFzZW5hbWVcbiAgY29uc3QgcmVwb05hbWUgPSBvd25lclJlcG8gPyBvd25lclJlcG8uc3BsaXQoJy8nKS5wb3AoKSEgOiBiYXNlbmFtZShkaXIpXG4gIGxvZ2dlci5zZXRSZXBvSW5mbyhyZXBvTmFtZSwgYnJhbmNoKVxuXG4gIC8vIGB3YCB0b2dnbGUgaXMgYXZhaWxhYmxlIGlmZiB3ZSdyZSBpbiBhIG11bHRpLXNlc3Npb24gbW9kZSBBTkQgd29ya3RyZWVcbiAgLy8gaXMgYSB2YWxpZCBvcHRpb24uIFdoZW4gdW5hdmFpbGFibGUsIHRoZSBtb2RlIHN1ZmZpeCBhbmQgaGludCBhcmUgaGlkZGVuLlxuICBjb25zdCB0b2dnbGVBdmFpbGFibGUgPSBzcGF3bk1vZGUgIT09ICdzaW5nbGUtc2Vzc2lvbicgJiYgd29ya3RyZWVBdmFpbGFibGVcbiAgaWYgKHRvZ2dsZUF2YWlsYWJsZSkge1xuICAgIC8vIFNhZmUgY2FzdDogc3Bhd25Nb2RlIGlzIG5vdCBzaW5nbGUtc2Vzc2lvbiAoY2hlY2tlZCBhYm92ZSksIGFuZCB0aGVcbiAgICAvLyBzYXZlZC13b3JrdHJlZS1pbi1ub24tZ2l0IGd1YXJkICsgZXhpdCBjaGVjayBhYm92ZSBlbnN1cmUgd29ya3RyZWVcbiAgICAvLyBpcyBvbmx5IHJlYWNoZWQgd2hlbiBhdmFpbGFibGUuXG4gICAgbG9nZ2VyLnNldFNwYXduTW9kZURpc3BsYXkoc3Bhd25Nb2RlIGFzICdzYW1lLWRpcicgfCAnd29ya3RyZWUnKVxuICB9XG5cbiAgLy8gTGlzdGVuIGZvciBrZXlzOiBzcGFjZSB0b2dnbGVzIFFSIGNvZGUsIHcgdG9nZ2xlcyBzcGF3biBtb2RlXG4gIGNvbnN0IG9uU3RkaW5EYXRhID0gKGRhdGE6IEJ1ZmZlcik6IHZvaWQgPT4ge1xuICAgIGlmIChkYXRhWzBdID09PSAweDAzIHx8IGRhdGFbMF0gPT09IDB4MDQpIHtcbiAgICAgIC8vIEN0cmwrQyAvIEN0cmwrRCBcdTIwMTQgdHJpZ2dlciBncmFjZWZ1bCBzaHV0ZG93blxuICAgICAgcHJvY2Vzcy5lbWl0KCdTSUdJTlQnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChkYXRhWzBdID09PSAweDIwIC8qIHNwYWNlICovKSB7XG4gICAgICBsb2dnZXIudG9nZ2xlUXIoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChkYXRhWzBdID09PSAweDc3IC8qICd3JyAqLykge1xuICAgICAgaWYgKCF0b2dnbGVBdmFpbGFibGUpIHJldHVyblxuICAgICAgY29uc3QgbmV3TW9kZTogJ3NhbWUtZGlyJyB8ICd3b3JrdHJlZScgPVxuICAgICAgICBjb25maWcuc3Bhd25Nb2RlID09PSAnc2FtZS1kaXInID8gJ3dvcmt0cmVlJyA6ICdzYW1lLWRpcidcbiAgICAgIGNvbmZpZy5zcGF3bk1vZGUgPSBuZXdNb2RlXG4gICAgICBsb2dFdmVudCgndGVuZ3VfYnJpZGdlX3NwYXduX21vZGVfdG9nZ2xlZCcsIHtcbiAgICAgICAgc3Bhd25fbW9kZTpcbiAgICAgICAgICBuZXdNb2RlIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICB9KVxuICAgICAgbG9nZ2VyLmxvZ1N0YXR1cyhcbiAgICAgICAgbmV3TW9kZSA9PT0gJ3dvcmt0cmVlJ1xuICAgICAgICAgID8gJ1NwYXduIG1vZGU6IHdvcmt0cmVlIChuZXcgc2Vzc2lvbnMgZ2V0IGlzb2xhdGVkIGdpdCB3b3JrdHJlZXMpJ1xuICAgICAgICAgIDogJ1NwYXduIG1vZGU6IHNhbWUtZGlyIChuZXcgc2Vzc2lvbnMgc2hhcmUgdGhlIGN1cnJlbnQgZGlyZWN0b3J5KScsXG4gICAgICApXG4gICAgICBsb2dnZXIuc2V0U3Bhd25Nb2RlRGlzcGxheShuZXdNb2RlKVxuICAgICAgbG9nZ2VyLnJlZnJlc2hEaXNwbGF5KClcbiAgICAgIHNhdmVDdXJyZW50UHJvamVjdENvbmZpZyhjdXJyZW50ID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnQucmVtb3RlQ29udHJvbFNwYXduTW9kZSA9PT0gbmV3TW9kZSkgcmV0dXJuIGN1cnJlbnRcbiAgICAgICAgcmV0dXJuIHsgLi4uY3VycmVudCwgcmVtb3RlQ29udHJvbFNwYXduTW9kZTogbmV3TW9kZSB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG4gIGlmIChwcm9jZXNzLnN0ZGluLmlzVFRZKSB7XG4gICAgcHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlKHRydWUpXG4gICAgcHJvY2Vzcy5zdGRpbi5yZXN1bWUoKVxuICAgIHByb2Nlc3Muc3RkaW4ub24oJ2RhdGEnLCBvblN0ZGluRGF0YSlcbiAgfVxuXG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgY29uc3Qgb25TaWdpbnQgPSAoKTogdm9pZCA9PiB7XG4gICAgbG9nRm9yRGVidWdnaW5nKCdbYnJpZGdlOnNodXRkb3duXSBTSUdJTlQgcmVjZWl2ZWQsIHNodXR0aW5nIGRvd24nKVxuICAgIGNvbnRyb2xsZXIuYWJvcnQoKVxuICB9XG4gIGNvbnN0IG9uU2lndGVybSA9ICgpOiB2b2lkID0+IHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoJ1ticmlkZ2U6c2h1dGRvd25dIFNJR1RFUk0gcmVjZWl2ZWQsIHNodXR0aW5nIGRvd24nKVxuICAgIGNvbnRyb2xsZXIuYWJvcnQoKVxuICB9XG4gIHByb2Nlc3Mub24oJ1NJR0lOVCcsIG9uU2lnaW50KVxuICBwcm9jZXNzLm9uKCdTSUdURVJNJywgb25TaWd0ZXJtKVxuXG4gIC8vIEF1dG8tY3JlYXRlIGFuIGVtcHR5IHNlc3Npb24gc28gdGhlIHVzZXIgaGFzIHNvbWV3aGVyZSB0byB0eXBlXG4gIC8vIGltbWVkaWF0ZWx5IChtYXRjaGluZyAvcmVtb3RlLWNvbnRyb2wgYmVoYXZpb3IpLiBDb250cm9sbGVkIGJ5XG4gIC8vIHByZUNyZWF0ZVNlc3Npb246IG9uIGJ5IGRlZmF1bHQ7IC0tbm8tY3JlYXRlLXNlc3Npb24taW4tZGlyIG9wdHMgb3V0LlxuICAvLyBXaGVuIGEgLS1zZXNzaW9uLWlkIHJlc3VtZSBzdWNjZWVkZWQsIHNraXAgY3JlYXRpb24gZW50aXJlbHkgXHUyMDE0IHRoZVxuICAvLyBzZXNzaW9uIGFscmVhZHkgZXhpc3RzIGFuZCBicmlkZ2UvcmVjb25uZWN0IGhhcyByZS1xdWV1ZWQgaXQuXG4gIC8vIFdoZW4gcmVzdW1lIHdhcyByZXF1ZXN0ZWQgYnV0IGZhaWxlZCBvbiBlbnYgbWlzbWF0Y2gsIGVmZmVjdGl2ZVJlc3VtZVNlc3Npb25JZFxuICAvLyBpcyB1bmRlZmluZWQsIHNvIHdlIGZhbGwgdGhyb3VnaCB0byBmcmVzaCBzZXNzaW9uIGNyZWF0aW9uIChob25vcmluZyB0aGVcbiAgLy8gXCJDcmVhdGluZyBhIGZyZXNoIHNlc3Npb24gaW5zdGVhZFwiIHdhcm5pbmcgcHJpbnRlZCBhYm92ZSkuXG4gIGxldCBpbml0aWFsU2Vzc2lvbklkOiBzdHJpbmcgfCBudWxsID1cbiAgICBmZWF0dXJlKCdLQUlST1MnKSAmJiBlZmZlY3RpdmVSZXN1bWVTZXNzaW9uSWRcbiAgICAgID8gZWZmZWN0aXZlUmVzdW1lU2Vzc2lvbklkXG4gICAgICA6IG51bGxcbiAgaWYgKHByZUNyZWF0ZVNlc3Npb24gJiYgIShmZWF0dXJlKCdLQUlST1MnKSAmJiBlZmZlY3RpdmVSZXN1bWVTZXNzaW9uSWQpKSB7XG4gICAgY29uc3QgeyBjcmVhdGVCcmlkZ2VTZXNzaW9uIH0gPSBhd2FpdCBpbXBvcnQoJy4vY3JlYXRlU2Vzc2lvbi5qcycpXG4gICAgdHJ5IHtcbiAgICAgIGluaXRpYWxTZXNzaW9uSWQgPSBhd2FpdCBjcmVhdGVCcmlkZ2VTZXNzaW9uKHtcbiAgICAgICAgZW52aXJvbm1lbnRJZCxcbiAgICAgICAgdGl0bGU6IG5hbWUsXG4gICAgICAgIGV2ZW50czogW10sXG4gICAgICAgIGdpdFJlcG9VcmwsXG4gICAgICAgIGJyYW5jaCxcbiAgICAgICAgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCxcbiAgICAgICAgYmFzZVVybCxcbiAgICAgICAgZ2V0QWNjZXNzVG9rZW46IGdldEJyaWRnZUFjY2Vzc1Rva2VuLFxuICAgICAgICBwZXJtaXNzaW9uTW9kZSxcbiAgICAgIH0pXG4gICAgICBpZiAoaW5pdGlhbFNlc3Npb25JZCkge1xuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgYFticmlkZ2U6aW5pdF0gQ3JlYXRlZCBpbml0aWFsIHNlc3Npb24gJHtpbml0aWFsU2Vzc2lvbklkfWAsXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFticmlkZ2U6aW5pdF0gU2Vzc2lvbiBjcmVhdGlvbiBmYWlsZWQgKG5vbi1mYXRhbCk6ICR7ZXJyb3JNZXNzYWdlKGVycil9YCxcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICAvLyBDcmFzaC1yZWNvdmVyeSBwb2ludGVyOiB3cml0ZSBpbW1lZGlhdGVseSBzbyBraWxsIC05IGF0IGFueSBwb2ludFxuICAvLyBhZnRlciB0aGlzIGxlYXZlcyBhIHJlY292ZXJhYmxlIHRyYWlsLiBDb3ZlcnMgYm90aCBmcmVzaCBzZXNzaW9ucyBhbmRcbiAgLy8gcmVzdW1lZCBvbmVzIChzbyBhIHNlY29uZCBjcmFzaCBhZnRlciByZXN1bWUgaXMgc3RpbGwgcmVjb3ZlcmFibGUpLlxuICAvLyBDbGVhcmVkIHdoZW4gcnVuQnJpZGdlTG9vcCBmYWxscyB0aHJvdWdoIHRvIGFyY2hpdmUrZGVyZWdpc3RlcjsgbGVmdCBpblxuICAvLyBwbGFjZSBvbiB0aGUgU0lHSU5UIHJlc3VtYWJsZS1zaHV0ZG93biByZXR1cm4gKGJhY2t1cCBmb3Igd2hlbiB0aGUgdXNlclxuICAvLyBjbG9zZXMgdGhlIHRlcm1pbmFsIGJlZm9yZSBjb3B5aW5nIHRoZSBwcmludGVkIC0tc2Vzc2lvbi1pZCBoaW50KS5cbiAgLy8gUmVmcmVzaGVkIGhvdXJseSBzbyBhIDVoKyBzZXNzaW9uIHRoYXQgY3Jhc2hlcyBzdGlsbCBoYXMgYSBmcmVzaFxuICAvLyBwb2ludGVyIChzdGFsZW5lc3MgY2hlY2tzIGZpbGUgbXRpbWUsIGJhY2tlbmQgVFRMIGlzIHJvbGxpbmctZnJvbS1wb2xsKS5cbiAgbGV0IHBvaW50ZXJSZWZyZXNoVGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldEludGVydmFsPiB8IG51bGwgPSBudWxsXG4gIC8vIFNpbmdsZS1zZXNzaW9uIG9ubHk6IC0tY29udGludWUgZm9yY2VzIHNpbmdsZS1zZXNzaW9uIG1vZGUgb24gcmVzdW1lLFxuICAvLyBzbyBhIHBvaW50ZXIgd3JpdHRlbiBpbiBtdWx0aS1zZXNzaW9uIG1vZGUgd291bGQgY29udHJhZGljdCB0aGUgdXNlcidzXG4gIC8vIGNvbmZpZyB3aGVuIHRoZXkgdHJ5IHRvIHJlc3VtZS4gVGhlIHJlc3VtYWJsZS1zaHV0ZG93biBwYXRoIGlzIGFsc29cbiAgLy8gZ2F0ZWQgdG8gc2luZ2xlLXNlc3Npb24gKGxpbmUgfjEyNTQpIHNvIHRoZSBwb2ludGVyIHdvdWxkIGJlIG9ycGhhbmVkLlxuICBpZiAoaW5pdGlhbFNlc3Npb25JZCAmJiBzcGF3bk1vZGUgPT09ICdzaW5nbGUtc2Vzc2lvbicpIHtcbiAgICBjb25zdCB7IHdyaXRlQnJpZGdlUG9pbnRlciB9ID0gYXdhaXQgaW1wb3J0KCcuL2JyaWRnZVBvaW50ZXIuanMnKVxuICAgIGNvbnN0IHBvaW50ZXJQYXlsb2FkID0ge1xuICAgICAgc2Vzc2lvbklkOiBpbml0aWFsU2Vzc2lvbklkLFxuICAgICAgZW52aXJvbm1lbnRJZCxcbiAgICAgIHNvdXJjZTogJ3N0YW5kYWxvbmUnIGFzIGNvbnN0LFxuICAgIH1cbiAgICBhd2FpdCB3cml0ZUJyaWRnZVBvaW50ZXIoY29uZmlnLmRpciwgcG9pbnRlclBheWxvYWQpXG4gICAgcG9pbnRlclJlZnJlc2hUaW1lciA9IHNldEludGVydmFsKFxuICAgICAgd3JpdGVCcmlkZ2VQb2ludGVyLFxuICAgICAgNjAgKiA2MCAqIDEwMDAsXG4gICAgICBjb25maWcuZGlyLFxuICAgICAgcG9pbnRlclBheWxvYWQsXG4gICAgKVxuICAgIC8vIERvbid0IGxldCB0aGUgaW50ZXJ2YWwga2VlcCB0aGUgcHJvY2VzcyBhbGl2ZSBvbiBpdHMgb3duLlxuICAgIHBvaW50ZXJSZWZyZXNoVGltZXIudW5yZWY/LigpXG4gIH1cblxuICB0cnkge1xuICAgIGF3YWl0IHJ1bkJyaWRnZUxvb3AoXG4gICAgICBjb25maWcsXG4gICAgICBlbnZpcm9ubWVudElkLFxuICAgICAgZW52aXJvbm1lbnRTZWNyZXQsXG4gICAgICBhcGksXG4gICAgICBzcGF3bmVyLFxuICAgICAgbG9nZ2VyLFxuICAgICAgY29udHJvbGxlci5zaWduYWwsXG4gICAgICB1bmRlZmluZWQsXG4gICAgICBpbml0aWFsU2Vzc2lvbklkID8/IHVuZGVmaW5lZCxcbiAgICAgIGFzeW5jICgpID0+IHtcbiAgICAgICAgLy8gQ2xlYXIgdGhlIG1lbW9pemVkIE9BdXRoIHRva2VuIGNhY2hlIHNvIHdlIHJlLXJlYWQgZnJvbSBzZWN1cmVcbiAgICAgICAgLy8gc3RvcmFnZSwgcGlja2luZyB1cCB0b2tlbnMgcmVmcmVzaGVkIGJ5IGNoaWxkIHByb2Nlc3Nlcy5cbiAgICAgICAgY2xlYXJPQXV0aFRva2VuQ2FjaGUoKVxuICAgICAgICAvLyBQcm9hY3RpdmVseSByZWZyZXNoIHRoZSB0b2tlbiBpZiBpdCdzIGV4cGlyZWQgb24gZGlzayB0b28uXG4gICAgICAgIGF3YWl0IGNoZWNrQW5kUmVmcmVzaE9BdXRoVG9rZW5JZk5lZWRlZCgpXG4gICAgICAgIHJldHVybiBnZXRCcmlkZ2VBY2Nlc3NUb2tlbigpXG4gICAgICB9LFxuICAgIClcbiAgfSBmaW5hbGx5IHtcbiAgICBpZiAocG9pbnRlclJlZnJlc2hUaW1lciAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChwb2ludGVyUmVmcmVzaFRpbWVyKVxuICAgIH1cbiAgICBwcm9jZXNzLm9mZignU0lHSU5UJywgb25TaWdpbnQpXG4gICAgcHJvY2Vzcy5vZmYoJ1NJR1RFUk0nLCBvblNpZ3Rlcm0pXG4gICAgcHJvY2Vzcy5zdGRpbi5vZmYoJ2RhdGEnLCBvblN0ZGluRGF0YSlcbiAgICBpZiAocHJvY2Vzcy5zdGRpbi5pc1RUWSkge1xuICAgICAgcHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlKGZhbHNlKVxuICAgIH1cbiAgICBwcm9jZXNzLnN0ZGluLnBhdXNlKClcbiAgfVxuXG4gIC8vIFRoZSBicmlkZ2UgYnlwYXNzZXMgaW5pdC50cyAoYW5kIGl0cyBncmFjZWZ1bCBzaHV0ZG93biBoYW5kbGVyKSwgc28gd2VcbiAgLy8gbXVzdCBleGl0IGV4cGxpY2l0bHkuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjdXN0b20tcnVsZXMvbm8tcHJvY2Vzcy1leGl0XG4gIHByb2Nlc3MuZXhpdCgwKVxufVxuXG4vLyBcdTI1MDBcdTI1MDBcdTI1MDAgSGVhZGxlc3MgYnJpZGdlIChkYWVtb24gd29ya2VyKSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuLyoqXG4gKiBUaHJvd24gYnkgcnVuQnJpZGdlSGVhZGxlc3MgZm9yIGNvbmZpZ3VyYXRpb24gaXNzdWVzIHRoZSBzdXBlcnZpc29yIHNob3VsZFxuICogTk9UIHJldHJ5ICh0cnVzdCBub3QgYWNjZXB0ZWQsIHdvcmt0cmVlIHVuYXZhaWxhYmxlLCBodHRwLW5vdC1odHRwcykuIFRoZVxuICogZGFlbW9uIHdvcmtlciBjYXRjaGVzIHRoaXMgYW5kIGV4aXRzIHdpdGggRVhJVF9DT0RFX1BFUk1BTkVOVCBzbyB0aGVcbiAqIHN1cGVydmlzb3IgcGFya3MgdGhlIHdvcmtlciBpbnN0ZWFkIG9mIHJlc3Bhd25pbmcgaXQgb24gYmFja29mZi5cbiAqL1xuZXhwb3J0IGNsYXNzIEJyaWRnZUhlYWRsZXNzUGVybWFuZW50RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHN1cGVyKG1lc3NhZ2UpXG4gICAgdGhpcy5uYW1lID0gJ0JyaWRnZUhlYWRsZXNzUGVybWFuZW50RXJyb3InXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgSGVhZGxlc3NCcmlkZ2VPcHRzID0ge1xuICBkaXI6IHN0cmluZ1xuICBuYW1lPzogc3RyaW5nXG4gIHNwYXduTW9kZTogJ3NhbWUtZGlyJyB8ICd3b3JrdHJlZSdcbiAgY2FwYWNpdHk6IG51bWJlclxuICBwZXJtaXNzaW9uTW9kZT86IHN0cmluZ1xuICBzYW5kYm94OiBib29sZWFuXG4gIHNlc3Npb25UaW1lb3V0TXM/OiBudW1iZXJcbiAgY3JlYXRlU2Vzc2lvbk9uU3RhcnQ6IGJvb2xlYW5cbiAgZ2V0QWNjZXNzVG9rZW46ICgpID0+IHN0cmluZyB8IHVuZGVmaW5lZFxuICBvbkF1dGg0MDE6IChmYWlsZWRUb2tlbjogc3RyaW5nKSA9PiBQcm9taXNlPGJvb2xlYW4+XG4gIGxvZzogKHM6IHN0cmluZykgPT4gdm9pZFxufVxuXG4vKipcbiAqIE5vbi1pbnRlcmFjdGl2ZSBicmlkZ2UgZW50cnlwb2ludCBmb3IgdGhlIGByZW1vdGVDb250cm9sYCBkYWVtb24gd29ya2VyLlxuICpcbiAqIExpbmVhciBzdWJzZXQgb2YgYnJpZGdlTWFpbigpOiBubyByZWFkbGluZSBkaWFsb2dzLCBubyBzdGRpbiBrZXkgaGFuZGxlcnMsXG4gKiBubyBUVUksIG5vIHByb2Nlc3MuZXhpdCgpLiBDb25maWcgY29tZXMgZnJvbSB0aGUgY2FsbGVyIChkYWVtb24uanNvbiksIGF1dGhcbiAqIGNvbWVzIHZpYSBJUEMgKHN1cGVydmlzb3IncyBBdXRoTWFuYWdlciksIGxvZ3MgZ28gdG8gdGhlIHdvcmtlcidzIHN0ZG91dFxuICogcGlwZS4gVGhyb3dzIG9uIGZhdGFsIGVycm9ycyBcdTIwMTQgdGhlIHdvcmtlciBjYXRjaGVzIGFuZCBtYXBzIHBlcm1hbmVudCB2c1xuICogdHJhbnNpZW50IHRvIHRoZSByaWdodCBleGl0IGNvZGUuXG4gKlxuICogUmVzb2x2ZXMgY2xlYW5seSB3aGVuIGBzaWduYWxgIGFib3J0cyBhbmQgdGhlIHBvbGwgbG9vcCB0ZWFycyBkb3duLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuQnJpZGdlSGVhZGxlc3MoXG4gIG9wdHM6IEhlYWRsZXNzQnJpZGdlT3B0cyxcbiAgc2lnbmFsOiBBYm9ydFNpZ25hbCxcbik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCB7IGRpciwgbG9nIH0gPSBvcHRzXG5cbiAgLy8gV29ya2VyIGluaGVyaXRzIHRoZSBzdXBlcnZpc29yJ3MgQ1dELiBjaGRpciBmaXJzdCBzbyBnaXQgdXRpbGl0aWVzXG4gIC8vIChnZXRCcmFuY2gvZ2V0UmVtb3RlVXJsKSBcdTIwMTQgd2hpY2ggcmVhZCBmcm9tIGJvb3RzdHJhcCBDV0Qgc3RhdGUgc2V0XG4gIC8vIGJlbG93IFx1MjAxNCByZXNvbHZlIGFnYWluc3QgdGhlIHJpZ2h0IHJlcG8uXG4gIHByb2Nlc3MuY2hkaXIoZGlyKVxuICBjb25zdCB7IHNldE9yaWdpbmFsQ3dkLCBzZXRDd2RTdGF0ZSB9ID0gYXdhaXQgaW1wb3J0KCcuLi9ib290c3RyYXAvc3RhdGUuanMnKVxuICBzZXRPcmlnaW5hbEN3ZChkaXIpXG4gIHNldEN3ZFN0YXRlKGRpcilcblxuICBjb25zdCB7IGVuYWJsZUNvbmZpZ3MsIGNoZWNrSGFzVHJ1c3REaWFsb2dBY2NlcHRlZCB9ID0gYXdhaXQgaW1wb3J0KFxuICAgICcuLi91dGlscy9jb25maWcuanMnXG4gIClcbiAgZW5hYmxlQ29uZmlncygpXG4gIGNvbnN0IHsgaW5pdFNpbmtzIH0gPSBhd2FpdCBpbXBvcnQoJy4uL3V0aWxzL3NpbmtzLmpzJylcbiAgaW5pdFNpbmtzKClcblxuICBpZiAoIWNoZWNrSGFzVHJ1c3REaWFsb2dBY2NlcHRlZCgpKSB7XG4gICAgdGhyb3cgbmV3IEJyaWRnZUhlYWRsZXNzUGVybWFuZW50RXJyb3IoXG4gICAgICBgV29ya3NwYWNlIG5vdCB0cnVzdGVkOiAke2Rpcn0uIFJ1biBcXGBjbGF1ZGVcXGAgaW4gdGhhdCBkaXJlY3RvcnkgZmlyc3QgdG8gYWNjZXB0IHRoZSB0cnVzdCBkaWFsb2cuYCxcbiAgICApXG4gIH1cblxuICBpZiAoIW9wdHMuZ2V0QWNjZXNzVG9rZW4oKSkge1xuICAgIC8vIFRyYW5zaWVudCBcdTIwMTQgc3VwZXJ2aXNvcidzIEF1dGhNYW5hZ2VyIG1heSBwaWNrIHVwIGEgdG9rZW4gb24gbmV4dCBjeWNsZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IoQlJJREdFX0xPR0lOX0VSUk9SKVxuICB9XG5cbiAgY29uc3QgeyBnZXRCcmlkZ2VCYXNlVXJsIH0gPSBhd2FpdCBpbXBvcnQoJy4vYnJpZGdlQ29uZmlnLmpzJylcbiAgY29uc3QgYmFzZVVybCA9IGdldEJyaWRnZUJhc2VVcmwoKVxuICBpZiAoXG4gICAgYmFzZVVybC5zdGFydHNXaXRoKCdodHRwOi8vJykgJiZcbiAgICAhYmFzZVVybC5pbmNsdWRlcygnbG9jYWxob3N0JykgJiZcbiAgICAhYmFzZVVybC5pbmNsdWRlcygnMTI3LjAuMC4xJylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEJyaWRnZUhlYWRsZXNzUGVybWFuZW50RXJyb3IoXG4gICAgICAnUmVtb3RlIENvbnRyb2wgYmFzZSBVUkwgdXNlcyBIVFRQLiBPbmx5IEhUVFBTIG9yIGxvY2FsaG9zdCBIVFRQIGlzIGFsbG93ZWQuJyxcbiAgICApXG4gIH1cbiAgY29uc3Qgc2Vzc2lvbkluZ3Jlc3NVcmwgPVxuICAgIHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCcgJiZcbiAgICBwcm9jZXNzLmVudi5DTEFVREVfQlJJREdFX1NFU1NJT05fSU5HUkVTU19VUkxcbiAgICAgID8gcHJvY2Vzcy5lbnYuQ0xBVURFX0JSSURHRV9TRVNTSU9OX0lOR1JFU1NfVVJMXG4gICAgICA6IGJhc2VVcmxcblxuICBjb25zdCB7IGdldEJyYW5jaCwgZ2V0UmVtb3RlVXJsLCBmaW5kR2l0Um9vdCB9ID0gYXdhaXQgaW1wb3J0KFxuICAgICcuLi91dGlscy9naXQuanMnXG4gIClcbiAgY29uc3QgeyBoYXNXb3JrdHJlZUNyZWF0ZUhvb2sgfSA9IGF3YWl0IGltcG9ydCgnLi4vdXRpbHMvaG9va3MuanMnKVxuXG4gIGlmIChvcHRzLnNwYXduTW9kZSA9PT0gJ3dvcmt0cmVlJykge1xuICAgIGNvbnN0IHdvcmt0cmVlQXZhaWxhYmxlID1cbiAgICAgIGhhc1dvcmt0cmVlQ3JlYXRlSG9vaygpIHx8IGZpbmRHaXRSb290KGRpcikgIT09IG51bGxcbiAgICBpZiAoIXdvcmt0cmVlQXZhaWxhYmxlKSB7XG4gICAgICB0aHJvdyBuZXcgQnJpZGdlSGVhZGxlc3NQZXJtYW5lbnRFcnJvcihcbiAgICAgICAgYFdvcmt0cmVlIG1vZGUgcmVxdWlyZXMgYSBnaXQgcmVwb3NpdG9yeSBvciBXb3JrdHJlZUNyZWF0ZSBob29rcy4gRGlyZWN0b3J5ICR7ZGlyfSBoYXMgbmVpdGhlci5gLFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGJyYW5jaCA9IGF3YWl0IGdldEJyYW5jaCgpXG4gIGNvbnN0IGdpdFJlcG9VcmwgPSBhd2FpdCBnZXRSZW1vdGVVcmwoKVxuICBjb25zdCBtYWNoaW5lTmFtZSA9IGhvc3RuYW1lKClcbiAgY29uc3QgYnJpZGdlSWQgPSByYW5kb21VVUlEKClcblxuICBjb25zdCBjb25maWc6IEJyaWRnZUNvbmZpZyA9IHtcbiAgICBkaXIsXG4gICAgbWFjaGluZU5hbWUsXG4gICAgYnJhbmNoLFxuICAgIGdpdFJlcG9VcmwsXG4gICAgbWF4U2Vzc2lvbnM6IG9wdHMuY2FwYWNpdHksXG4gICAgc3Bhd25Nb2RlOiBvcHRzLnNwYXduTW9kZSxcbiAgICB2ZXJib3NlOiBmYWxzZSxcbiAgICBzYW5kYm94OiBvcHRzLnNhbmRib3gsXG4gICAgYnJpZGdlSWQsXG4gICAgd29ya2VyVHlwZTogJ2NsYXVkZV9jb2RlJyxcbiAgICBlbnZpcm9ubWVudElkOiByYW5kb21VVUlEKCksXG4gICAgYXBpQmFzZVVybDogYmFzZVVybCxcbiAgICBzZXNzaW9uSW5ncmVzc1VybCxcbiAgICBzZXNzaW9uVGltZW91dE1zOiBvcHRzLnNlc3Npb25UaW1lb3V0TXMsXG4gIH1cblxuICBjb25zdCBhcGkgPSBjcmVhdGVCcmlkZ2VBcGlDbGllbnQoe1xuICAgIGJhc2VVcmwsXG4gICAgZ2V0QWNjZXNzVG9rZW46IG9wdHMuZ2V0QWNjZXNzVG9rZW4sXG4gICAgcnVubmVyVmVyc2lvbjogTUFDUk8uVkVSU0lPTixcbiAgICBvbkRlYnVnOiBsb2csXG4gICAgb25BdXRoNDAxOiBvcHRzLm9uQXV0aDQwMSxcbiAgICBnZXRUcnVzdGVkRGV2aWNlVG9rZW4sXG4gIH0pXG5cbiAgbGV0IGVudmlyb25tZW50SWQ6IHN0cmluZ1xuICBsZXQgZW52aXJvbm1lbnRTZWNyZXQ6IHN0cmluZ1xuICB0cnkge1xuICAgIGNvbnN0IHJlZyA9IGF3YWl0IGFwaS5yZWdpc3RlckJyaWRnZUVudmlyb25tZW50KGNvbmZpZylcbiAgICBlbnZpcm9ubWVudElkID0gcmVnLmVudmlyb25tZW50X2lkXG4gICAgZW52aXJvbm1lbnRTZWNyZXQgPSByZWcuZW52aXJvbm1lbnRfc2VjcmV0XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIFRyYW5zaWVudCBcdTIwMTQgbGV0IHN1cGVydmlzb3IgYmFja29mZi1yZXRyeS5cbiAgICB0aHJvdyBuZXcgRXJyb3IoYEJyaWRnZSByZWdpc3RyYXRpb24gZmFpbGVkOiAke2Vycm9yTWVzc2FnZShlcnIpfWApXG4gIH1cblxuICBjb25zdCBzcGF3bmVyID0gY3JlYXRlU2Vzc2lvblNwYXduZXIoe1xuICAgIGV4ZWNQYXRoOiBwcm9jZXNzLmV4ZWNQYXRoLFxuICAgIHNjcmlwdEFyZ3M6IHNwYXduU2NyaXB0QXJncygpLFxuICAgIGVudjogcHJvY2Vzcy5lbnYsXG4gICAgdmVyYm9zZTogZmFsc2UsXG4gICAgc2FuZGJveDogb3B0cy5zYW5kYm94LFxuICAgIHBlcm1pc3Npb25Nb2RlOiBvcHRzLnBlcm1pc3Npb25Nb2RlLFxuICAgIG9uRGVidWc6IGxvZyxcbiAgfSlcblxuICBjb25zdCBsb2dnZXIgPSBjcmVhdGVIZWFkbGVzc0JyaWRnZUxvZ2dlcihsb2cpXG4gIGxvZ2dlci5wcmludEJhbm5lcihjb25maWcsIGVudmlyb25tZW50SWQpXG5cbiAgbGV0IGluaXRpYWxTZXNzaW9uSWQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBpZiAob3B0cy5jcmVhdGVTZXNzaW9uT25TdGFydCkge1xuICAgIGNvbnN0IHsgY3JlYXRlQnJpZGdlU2Vzc2lvbiB9ID0gYXdhaXQgaW1wb3J0KCcuL2NyZWF0ZVNlc3Npb24uanMnKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBzaWQgPSBhd2FpdCBjcmVhdGVCcmlkZ2VTZXNzaW9uKHtcbiAgICAgICAgZW52aXJvbm1lbnRJZCxcbiAgICAgICAgdGl0bGU6IG9wdHMubmFtZSxcbiAgICAgICAgZXZlbnRzOiBbXSxcbiAgICAgICAgZ2l0UmVwb1VybCxcbiAgICAgICAgYnJhbmNoLFxuICAgICAgICBzaWduYWwsXG4gICAgICAgIGJhc2VVcmwsXG4gICAgICAgIGdldEFjY2Vzc1Rva2VuOiBvcHRzLmdldEFjY2Vzc1Rva2VuLFxuICAgICAgICBwZXJtaXNzaW9uTW9kZTogb3B0cy5wZXJtaXNzaW9uTW9kZSxcbiAgICAgIH0pXG4gICAgICBpZiAoc2lkKSB7XG4gICAgICAgIGluaXRpYWxTZXNzaW9uSWQgPSBzaWRcbiAgICAgICAgbG9nKGBjcmVhdGVkIGluaXRpYWwgc2Vzc2lvbiAke3NpZH1gKVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgbG9nKGBzZXNzaW9uIHByZS1jcmVhdGlvbiBmYWlsZWQgKG5vbi1mYXRhbCk6ICR7ZXJyb3JNZXNzYWdlKGVycil9YClcbiAgICB9XG4gIH1cblxuICBhd2FpdCBydW5CcmlkZ2VMb29wKFxuICAgIGNvbmZpZyxcbiAgICBlbnZpcm9ubWVudElkLFxuICAgIGVudmlyb25tZW50U2VjcmV0LFxuICAgIGFwaSxcbiAgICBzcGF3bmVyLFxuICAgIGxvZ2dlcixcbiAgICBzaWduYWwsXG4gICAgdW5kZWZpbmVkLFxuICAgIGluaXRpYWxTZXNzaW9uSWQsXG4gICAgYXN5bmMgKCkgPT4gb3B0cy5nZXRBY2Nlc3NUb2tlbigpLFxuICApXG59XG5cbi8qKiBCcmlkZ2VMb2dnZXIgYWRhcHRlciB0aGF0IHJvdXRlcyBldmVyeXRoaW5nIHRvIGEgc2luZ2xlIGxpbmUtbG9nIGZuLiAqL1xuZnVuY3Rpb24gY3JlYXRlSGVhZGxlc3NCcmlkZ2VMb2dnZXIobG9nOiAoczogc3RyaW5nKSA9PiB2b2lkKTogQnJpZGdlTG9nZ2VyIHtcbiAgY29uc3Qgbm9vcCA9ICgpOiB2b2lkID0+IHt9XG4gIHJldHVybiB7XG4gICAgcHJpbnRCYW5uZXI6IChjZmcsIGVudklkKSA9PlxuICAgICAgbG9nKFxuICAgICAgICBgcmVnaXN0ZXJlZCBlbnZpcm9ubWVudElkPSR7ZW52SWR9IGRpcj0ke2NmZy5kaXJ9IHNwYXduTW9kZT0ke2NmZy5zcGF3bk1vZGV9IGNhcGFjaXR5PSR7Y2ZnLm1heFNlc3Npb25zfWAsXG4gICAgICApLFxuICAgIGxvZ1Nlc3Npb25TdGFydDogKGlkLCBfcHJvbXB0KSA9PiBsb2coYHNlc3Npb24gc3RhcnQgJHtpZH1gKSxcbiAgICBsb2dTZXNzaW9uQ29tcGxldGU6IChpZCwgbXMpID0+IGxvZyhgc2Vzc2lvbiBjb21wbGV0ZSAke2lkfSAoJHttc31tcylgKSxcbiAgICBsb2dTZXNzaW9uRmFpbGVkOiAoaWQsIGVycikgPT4gbG9nKGBzZXNzaW9uIGZhaWxlZCAke2lkfTogJHtlcnJ9YCksXG4gICAgbG9nU3RhdHVzOiBsb2csXG4gICAgbG9nVmVyYm9zZTogbG9nLFxuICAgIGxvZ0Vycm9yOiBzID0+IGxvZyhgZXJyb3I6ICR7c31gKSxcbiAgICBsb2dSZWNvbm5lY3RlZDogbXMgPT4gbG9nKGByZWNvbm5lY3RlZCBhZnRlciAke21zfW1zYCksXG4gICAgYWRkU2Vzc2lvbjogKGlkLCBfdXJsKSA9PiBsb2coYHNlc3Npb24gYXR0YWNoZWQgJHtpZH1gKSxcbiAgICByZW1vdmVTZXNzaW9uOiBpZCA9PiBsb2coYHNlc3Npb24gZGV0YWNoZWQgJHtpZH1gKSxcbiAgICB1cGRhdGVJZGxlU3RhdHVzOiBub29wLFxuICAgIHVwZGF0ZVJlY29ubmVjdGluZ1N0YXR1czogbm9vcCxcbiAgICB1cGRhdGVTZXNzaW9uU3RhdHVzOiBub29wLFxuICAgIHVwZGF0ZVNlc3Npb25BY3Rpdml0eTogbm9vcCxcbiAgICB1cGRhdGVTZXNzaW9uQ291bnQ6IG5vb3AsXG4gICAgdXBkYXRlRmFpbGVkU3RhdHVzOiBub29wLFxuICAgIHNldFNwYXduTW9kZURpc3BsYXk6IG5vb3AsXG4gICAgc2V0UmVwb0luZm86IG5vb3AsXG4gICAgc2V0RGVidWdMb2dQYXRoOiBub29wLFxuICAgIHNldEF0dGFjaGVkOiBub29wLFxuICAgIHNldFNlc3Npb25UaXRsZTogbm9vcCxcbiAgICBjbGVhclN0YXR1czogbm9vcCxcbiAgICB0b2dnbGVRcjogbm9vcCxcbiAgICByZWZyZXNoRGlzcGxheTogbm9vcCxcbiAgfVxufVxuIiwgImltcG9ydCBjaGFsayBmcm9tICdjaGFsaydcbmltcG9ydCB7IHRvU3RyaW5nIGFzIHFyVG9TdHJpbmcgfSBmcm9tICdxcmNvZGUnXG5pbXBvcnQge1xuICBCUklER0VfRkFJTEVEX0lORElDQVRPUixcbiAgQlJJREdFX1JFQURZX0lORElDQVRPUixcbiAgQlJJREdFX1NQSU5ORVJfRlJBTUVTLFxufSBmcm9tICcuLi9jb25zdGFudHMvZmlndXJlcy5qcydcbmltcG9ydCB7IHN0cmluZ1dpZHRoIH0gZnJvbSAnLi4vaW5rL3N0cmluZ1dpZHRoLmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi4vdXRpbHMvZGVidWcuanMnXG5pbXBvcnQge1xuICBidWlsZEFjdGl2ZUZvb3RlclRleHQsXG4gIGJ1aWxkQnJpZGdlQ29ubmVjdFVybCxcbiAgYnVpbGRCcmlkZ2VTZXNzaW9uVXJsLFxuICBidWlsZElkbGVGb290ZXJUZXh0LFxuICBGQUlMRURfRk9PVEVSX1RFWFQsXG4gIGZvcm1hdER1cmF0aW9uLFxuICB0eXBlIFN0YXR1c1N0YXRlLFxuICBUT09MX0RJU1BMQVlfRVhQSVJZX01TLFxuICB0aW1lc3RhbXAsXG4gIHRydW5jYXRlUHJvbXB0LFxuICB3cmFwV2l0aE9zYzhMaW5rLFxufSBmcm9tICcuL2JyaWRnZVN0YXR1c1V0aWwuanMnXG5pbXBvcnQgdHlwZSB7XG4gIEJyaWRnZUNvbmZpZyxcbiAgQnJpZGdlTG9nZ2VyLFxuICBTZXNzaW9uQWN0aXZpdHksXG4gIFNwYXduTW9kZSxcbn0gZnJvbSAnLi90eXBlcy5qcydcblxuY29uc3QgUVJfT1BUSU9OUyA9IHtcbiAgdHlwZTogJ3V0ZjgnIGFzIGNvbnN0LFxuICBlcnJvckNvcnJlY3Rpb25MZXZlbDogJ0wnIGFzIGNvbnN0LFxuICBzbWFsbDogdHJ1ZSxcbn1cblxuLyoqIEdlbmVyYXRlIGEgUVIgY29kZSBhbmQgcmV0dXJuIGl0cyBsaW5lcy4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlUXIodXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gIGNvbnN0IHFyID0gYXdhaXQgcXJUb1N0cmluZyh1cmwsIFFSX09QVElPTlMpXG4gIHJldHVybiBxci5zcGxpdCgnXFxuJykuZmlsdGVyKChsaW5lOiBzdHJpbmcpID0+IGxpbmUubGVuZ3RoID4gMClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJyaWRnZUxvZ2dlcihvcHRpb25zOiB7XG4gIHZlcmJvc2U6IGJvb2xlYW5cbiAgd3JpdGU/OiAoczogc3RyaW5nKSA9PiB2b2lkXG59KTogQnJpZGdlTG9nZ2VyIHtcbiAgY29uc3Qgd3JpdGUgPSBvcHRpb25zLndyaXRlID8/ICgoczogc3RyaW5nKSA9PiBwcm9jZXNzLnN0ZG91dC53cml0ZShzKSlcbiAgY29uc3QgdmVyYm9zZSA9IG9wdGlvbnMudmVyYm9zZVxuXG4gIC8vIFRyYWNrIGhvdyBtYW55IHN0YXR1cyBsaW5lcyBhcmUgY3VycmVudGx5IGRpc3BsYXllZCBhdCB0aGUgYm90dG9tXG4gIGxldCBzdGF0dXNMaW5lQ291bnQgPSAwXG5cbiAgLy8gU3RhdHVzIHN0YXRlIG1hY2hpbmVcbiAgbGV0IGN1cnJlbnRTdGF0ZTogU3RhdHVzU3RhdGUgPSAnaWRsZSdcbiAgbGV0IGN1cnJlbnRTdGF0ZVRleHQgPSAnUmVhZHknXG4gIGxldCByZXBvTmFtZSA9ICcnXG4gIGxldCBicmFuY2ggPSAnJ1xuICBsZXQgZGVidWdMb2dQYXRoID0gJydcblxuICAvLyBDb25uZWN0IFVSTCAoYnVpbHQgaW4gcHJpbnRCYW5uZXIgd2l0aCBjb3JyZWN0IGJhc2UgZm9yIHN0YWdpbmcvcHJvZClcbiAgbGV0IGNvbm5lY3RVcmwgPSAnJ1xuICBsZXQgY2FjaGVkSW5ncmVzc1VybCA9ICcnXG4gIGxldCBjYWNoZWRFbnZpcm9ubWVudElkID0gJydcbiAgbGV0IGFjdGl2ZVNlc3Npb25Vcmw6IHN0cmluZyB8IG51bGwgPSBudWxsXG5cbiAgLy8gUVIgY29kZSBsaW5lcyBmb3IgdGhlIGN1cnJlbnQgVVJMXG4gIGxldCBxckxpbmVzOiBzdHJpbmdbXSA9IFtdXG4gIGxldCBxclZpc2libGUgPSBmYWxzZVxuXG4gIC8vIFRvb2wgYWN0aXZpdHkgZm9yIHRoZSBzZWNvbmQgc3RhdHVzIGxpbmVcbiAgbGV0IGxhc3RUb29sU3VtbWFyeTogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgbGV0IGxhc3RUb29sVGltZSA9IDBcblxuICAvLyBTZXNzaW9uIGNvdW50IGluZGljYXRvciAoc2hvd24gd2hlbiBtdWx0aS1zZXNzaW9uIG1vZGUgaXMgZW5hYmxlZClcbiAgbGV0IHNlc3Npb25BY3RpdmUgPSAwXG4gIGxldCBzZXNzaW9uTWF4ID0gMVxuICAvLyBTcGF3biBtb2RlIHNob3duIGluIHRoZSBzZXNzaW9uLWNvdW50IGxpbmUgKyBnYXRlcyB0aGUgYHdgIGhpbnRcbiAgbGV0IHNwYXduTW9kZURpc3BsYXk6ICdzYW1lLWRpcicgfCAnd29ya3RyZWUnIHwgbnVsbCA9IG51bGxcbiAgbGV0IHNwYXduTW9kZTogU3Bhd25Nb2RlID0gJ3NpbmdsZS1zZXNzaW9uJ1xuXG4gIC8vIFBlci1zZXNzaW9uIGRpc3BsYXkgaW5mbyBmb3IgdGhlIG11bHRpLXNlc3Npb24gYnVsbGV0IGxpc3QgKGtleWVkIGJ5IGNvbXBhdCBzZXNzaW9uSWQpXG4gIGNvbnN0IHNlc3Npb25EaXNwbGF5SW5mbyA9IG5ldyBNYXA8XG4gICAgc3RyaW5nLFxuICAgIHsgdGl0bGU/OiBzdHJpbmc7IHVybDogc3RyaW5nOyBhY3Rpdml0eT86IFNlc3Npb25BY3Rpdml0eSB9XG4gID4oKVxuXG4gIC8vIENvbm5lY3Rpbmcgc3Bpbm5lciBzdGF0ZVxuICBsZXQgY29ubmVjdGluZ1RpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRJbnRlcnZhbD4gfCBudWxsID0gbnVsbFxuICBsZXQgY29ubmVjdGluZ1RpY2sgPSAwXG5cbiAgLyoqXG4gICAqIENvdW50IGhvdyBtYW55IHZpc3VhbCB0ZXJtaW5hbCByb3dzIGEgc3RyaW5nIG9jY3VwaWVzLCBhY2NvdW50aW5nIGZvclxuICAgKiBsaW5lIHdyYXBwaW5nLiBFYWNoIGBcXG5gIGlzIG9uZSByb3csIGFuZCBjb250ZW50IHdpZGVyIHRoYW4gdGhlIHRlcm1pbmFsXG4gICAqIHdyYXBzIHRvIGFkZGl0aW9uYWwgcm93cy5cbiAgICovXG4gIGZ1bmN0aW9uIGNvdW50VmlzdWFsTGluZXModGV4dDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3VzdG9tLXJ1bGVzL3ByZWZlci11c2UtdGVybWluYWwtc2l6ZVxuICAgIGNvbnN0IGNvbHMgPSBwcm9jZXNzLnN0ZG91dC5jb2x1bW5zIHx8IDgwIC8vIG5vbi1SZWFjdCBDTEkgY29udGV4dFxuICAgIGxldCBjb3VudCA9IDBcbiAgICAvLyBTcGxpdCBvbiBuZXdsaW5lcyB0byBnZXQgbG9naWNhbCBsaW5lc1xuICAgIGZvciAoY29uc3QgbG9naWNhbCBvZiB0ZXh0LnNwbGl0KCdcXG4nKSkge1xuICAgICAgaWYgKGxvZ2ljYWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIEVtcHR5IHNlZ21lbnQgYmV0d2VlbiBjb25zZWN1dGl2ZSBcXG4gXHUyMDE0IGNvdW50cyBhcyAxIHJvd1xuICAgICAgICBjb3VudCsrXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBjb25zdCB3aWR0aCA9IHN0cmluZ1dpZHRoKGxvZ2ljYWwpXG4gICAgICBjb3VudCArPSBNYXRoLm1heCgxLCBNYXRoLmNlaWwod2lkdGggLyBjb2xzKSlcbiAgICB9XG4gICAgLy8gVGhlIHRyYWlsaW5nIFxcbiBpbiBcImxpbmVcXG5cIiBwcm9kdWNlcyBhbiBlbXB0eSBsYXN0IGVsZW1lbnQgXHUyMDE0IGRvbid0IGNvdW50IGl0XG4gICAgLy8gYmVjYXVzZSB0aGUgY3Vyc29yIHNpdHMgYXQgdGhlIHN0YXJ0IG9mIHRoZSBuZXh0IGxpbmUsIG5vdCBhIG5ldyB2aXN1YWwgcm93LlxuICAgIGlmICh0ZXh0LmVuZHNXaXRoKCdcXG4nKSkge1xuICAgICAgY291bnQtLVxuICAgIH1cbiAgICByZXR1cm4gY291bnRcbiAgfVxuXG4gIC8qKiBXcml0ZSBhIHN0YXR1cyBsaW5lIGFuZCB0cmFjayBpdHMgdmlzdWFsIGxpbmUgY291bnQuICovXG4gIGZ1bmN0aW9uIHdyaXRlU3RhdHVzKHRleHQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHdyaXRlKHRleHQpXG4gICAgc3RhdHVzTGluZUNvdW50ICs9IGNvdW50VmlzdWFsTGluZXModGV4dClcbiAgfVxuXG4gIC8qKiBDbGVhciBhbnkgY3VycmVudGx5IGRpc3BsYXllZCBzdGF0dXMgbGluZXMuICovXG4gIGZ1bmN0aW9uIGNsZWFyU3RhdHVzTGluZXMoKTogdm9pZCB7XG4gICAgaWYgKHN0YXR1c0xpbmVDb3VudCA8PSAwKSByZXR1cm5cbiAgICBsb2dGb3JEZWJ1Z2dpbmcoYFticmlkZ2U6dWldIGNsZWFyU3RhdHVzTGluZXMgY291bnQ9JHtzdGF0dXNMaW5lQ291bnR9YClcbiAgICAvLyBNb3ZlIGN1cnNvciB1cCB0byB0aGUgc3RhcnQgb2YgdGhlIHN0YXR1cyBibG9jaywgdGhlbiBlcmFzZSBldmVyeXRoaW5nIGJlbG93XG4gICAgd3JpdGUoYFxceDFiWyR7c3RhdHVzTGluZUNvdW50fUFgKSAvLyBjdXJzb3IgdXAgTiBsaW5lc1xuICAgIHdyaXRlKCdcXHgxYltKJykgLy8gZXJhc2UgZnJvbSBjdXJzb3IgdG8gZW5kIG9mIHNjcmVlblxuICAgIHN0YXR1c0xpbmVDb3VudCA9IDBcbiAgfVxuXG4gIC8qKiBQcmludCBhIHBlcm1hbmVudCBsb2cgbGluZSwgY2xlYXJpbmcgc3RhdHVzIGZpcnN0IGFuZCByZXN0b3JpbmcgYWZ0ZXIuICovXG4gIGZ1bmN0aW9uIHByaW50TG9nKGxpbmU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNsZWFyU3RhdHVzTGluZXMoKVxuICAgIHdyaXRlKGxpbmUpXG4gIH1cblxuICAvKiogUmVnZW5lcmF0ZSB0aGUgUVIgY29kZSB3aXRoIHRoZSBnaXZlbiBVUkwuICovXG4gIGZ1bmN0aW9uIHJlZ2VuZXJhdGVRcih1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgIGdlbmVyYXRlUXIodXJsKVxuICAgICAgLnRoZW4obGluZXMgPT4ge1xuICAgICAgICBxckxpbmVzID0gbGluZXNcbiAgICAgICAgcmVuZGVyU3RhdHVzTGluZSgpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoYFFSIGNvZGUgZ2VuZXJhdGlvbiBmYWlsZWQ6ICR7ZX1gLCB7IGxldmVsOiAnZXJyb3InIH0pXG4gICAgICB9KVxuICB9XG5cbiAgLyoqIFJlbmRlciB0aGUgY29ubmVjdGluZyBzcGlubmVyIGxpbmUgKHNob3duIGJlZm9yZSBmaXJzdCB1cGRhdGVJZGxlU3RhdHVzKS4gKi9cbiAgZnVuY3Rpb24gcmVuZGVyQ29ubmVjdGluZ0xpbmUoKTogdm9pZCB7XG4gICAgY2xlYXJTdGF0dXNMaW5lcygpXG5cbiAgICBjb25zdCBmcmFtZSA9XG4gICAgICBCUklER0VfU1BJTk5FUl9GUkFNRVNbY29ubmVjdGluZ1RpY2sgJSBCUklER0VfU1BJTk5FUl9GUkFNRVMubGVuZ3RoXSFcbiAgICBsZXQgc3VmZml4ID0gJydcbiAgICBpZiAocmVwb05hbWUpIHtcbiAgICAgIHN1ZmZpeCArPSBjaGFsay5kaW0oJyBcXHUwMGI3ICcpICsgY2hhbGsuZGltKHJlcG9OYW1lKVxuICAgIH1cbiAgICBpZiAoYnJhbmNoKSB7XG4gICAgICBzdWZmaXggKz0gY2hhbGsuZGltKCcgXFx1MDBiNyAnKSArIGNoYWxrLmRpbShicmFuY2gpXG4gICAgfVxuICAgIHdyaXRlU3RhdHVzKFxuICAgICAgYCR7Y2hhbGsueWVsbG93KGZyYW1lKX0gJHtjaGFsay55ZWxsb3coJ0Nvbm5lY3RpbmcnKX0ke3N1ZmZpeH1cXG5gLFxuICAgIClcbiAgfVxuXG4gIC8qKiBTdGFydCB0aGUgY29ubmVjdGluZyBzcGlubmVyLiBTdG9wcGVkIGJ5IGZpcnN0IHVwZGF0ZUlkbGVTdGF0dXMoKS4gKi9cbiAgZnVuY3Rpb24gc3RhcnRDb25uZWN0aW5nKCk6IHZvaWQge1xuICAgIHN0b3BDb25uZWN0aW5nKClcbiAgICByZW5kZXJDb25uZWN0aW5nTGluZSgpXG4gICAgY29ubmVjdGluZ1RpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29ubmVjdGluZ1RpY2srK1xuICAgICAgcmVuZGVyQ29ubmVjdGluZ0xpbmUoKVxuICAgIH0sIDE1MClcbiAgfVxuXG4gIC8qKiBTdG9wIHRoZSBjb25uZWN0aW5nIHNwaW5uZXIuICovXG4gIGZ1bmN0aW9uIHN0b3BDb25uZWN0aW5nKCk6IHZvaWQge1xuICAgIGlmIChjb25uZWN0aW5nVGltZXIpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoY29ubmVjdGluZ1RpbWVyKVxuICAgICAgY29ubmVjdGluZ1RpbWVyID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIC8qKiBSZW5kZXIgYW5kIHdyaXRlIHRoZSBjdXJyZW50IHN0YXR1cyBsaW5lcyBiYXNlZCBvbiBzdGF0ZS4gKi9cbiAgZnVuY3Rpb24gcmVuZGVyU3RhdHVzTGluZSgpOiB2b2lkIHtcbiAgICBpZiAoY3VycmVudFN0YXRlID09PSAncmVjb25uZWN0aW5nJyB8fCBjdXJyZW50U3RhdGUgPT09ICdmYWlsZWQnKSB7XG4gICAgICAvLyBUaGVzZSBzdGF0ZXMgYXJlIGhhbmRsZWQgc2VwYXJhdGVseSAodXBkYXRlUmVjb25uZWN0aW5nU3RhdHVzIC9cbiAgICAgIC8vIHVwZGF0ZUZhaWxlZFN0YXR1cykuIFJldHVybiBiZWZvcmUgY2xlYXJpbmcgc28gY2FsbGVycyBsaWtlIHRvZ2dsZVFyXG4gICAgICAvLyBhbmQgc2V0U3Bhd25Nb2RlRGlzcGxheSBkb24ndCBibGFuayB0aGUgZGlzcGxheSBkdXJpbmcgdGhlc2Ugc3RhdGVzLlxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2xlYXJTdGF0dXNMaW5lcygpXG5cbiAgICBjb25zdCBpc0lkbGUgPSBjdXJyZW50U3RhdGUgPT09ICdpZGxlJ1xuXG4gICAgLy8gUVIgY29kZSBhYm92ZSB0aGUgc3RhdHVzIGxpbmVcbiAgICBpZiAocXJWaXNpYmxlKSB7XG4gICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgcXJMaW5lcykge1xuICAgICAgICB3cml0ZVN0YXR1cyhgJHtjaGFsay5kaW0obGluZSl9XFxuYClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEZXRlcm1pbmUgaW5kaWNhdG9yIGFuZCBjb2xvcnMgYmFzZWQgb24gc3RhdGVcbiAgICBjb25zdCBpbmRpY2F0b3IgPSBCUklER0VfUkVBRFlfSU5ESUNBVE9SXG4gICAgY29uc3QgaW5kaWNhdG9yQ29sb3IgPSBpc0lkbGUgPyBjaGFsay5ncmVlbiA6IGNoYWxrLmN5YW5cbiAgICBjb25zdCBiYXNlQ29sb3IgPSBpc0lkbGUgPyBjaGFsay5ncmVlbiA6IGNoYWxrLmN5YW5cbiAgICBjb25zdCBzdGF0ZVRleHQgPSBiYXNlQ29sb3IoY3VycmVudFN0YXRlVGV4dClcblxuICAgIC8vIEJ1aWxkIHRoZSBzdWZmaXggd2l0aCByZXBvIGFuZCBicmFuY2hcbiAgICBsZXQgc3VmZml4ID0gJydcbiAgICBpZiAocmVwb05hbWUpIHtcbiAgICAgIHN1ZmZpeCArPSBjaGFsay5kaW0oJyBcXHUwMGI3ICcpICsgY2hhbGsuZGltKHJlcG9OYW1lKVxuICAgIH1cbiAgICAvLyBJbiB3b3JrdHJlZSBtb2RlIGVhY2ggc2Vzc2lvbiBnZXRzIGl0cyBvd24gYnJhbmNoLCBzbyBzaG93aW5nIHRoZVxuICAgIC8vIGJyaWRnZSdzIGJyYW5jaCB3b3VsZCBiZSBtaXNsZWFkaW5nLlxuICAgIGlmIChicmFuY2ggJiYgc3Bhd25Nb2RlICE9PSAnd29ya3RyZWUnKSB7XG4gICAgICBzdWZmaXggKz0gY2hhbGsuZGltKCcgXFx1MDBiNyAnKSArIGNoYWxrLmRpbShicmFuY2gpXG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCcgJiYgZGVidWdMb2dQYXRoKSB7XG4gICAgICB3cml0ZVN0YXR1cyhcbiAgICAgICAgYCR7Y2hhbGsueWVsbG93KCdbQU5ULU9OTFldIExvZ3M6Jyl9ICR7Y2hhbGsuZGltKGRlYnVnTG9nUGF0aCl9XFxuYCxcbiAgICAgIClcbiAgICB9XG4gICAgd3JpdGVTdGF0dXMoYCR7aW5kaWNhdG9yQ29sb3IoaW5kaWNhdG9yKX0gJHtzdGF0ZVRleHR9JHtzdWZmaXh9XFxuYClcblxuICAgIC8vIFNlc3Npb24gY291bnQgYW5kIHBlci1zZXNzaW9uIGxpc3QgKG11bHRpLXNlc3Npb24gbW9kZSBvbmx5KVxuICAgIGlmIChzZXNzaW9uTWF4ID4gMSkge1xuICAgICAgY29uc3QgbW9kZUhpbnQgPVxuICAgICAgICBzcGF3bk1vZGUgPT09ICd3b3JrdHJlZSdcbiAgICAgICAgICA/ICdOZXcgc2Vzc2lvbnMgd2lsbCBiZSBjcmVhdGVkIGluIGFuIGlzb2xhdGVkIHdvcmt0cmVlJ1xuICAgICAgICAgIDogJ05ldyBzZXNzaW9ucyB3aWxsIGJlIGNyZWF0ZWQgaW4gdGhlIGN1cnJlbnQgZGlyZWN0b3J5J1xuICAgICAgd3JpdGVTdGF0dXMoXG4gICAgICAgIGAgICAgJHtjaGFsay5kaW0oYENhcGFjaXR5OiAke3Nlc3Npb25BY3RpdmV9LyR7c2Vzc2lvbk1heH0gXFx1MDBiNyAke21vZGVIaW50fWApfVxcbmAsXG4gICAgICApXG4gICAgICBmb3IgKGNvbnN0IFssIGluZm9dIG9mIHNlc3Npb25EaXNwbGF5SW5mbykge1xuICAgICAgICBjb25zdCB0aXRsZVRleHQgPSBpbmZvLnRpdGxlXG4gICAgICAgICAgPyB0cnVuY2F0ZVByb21wdChpbmZvLnRpdGxlLCAzNSlcbiAgICAgICAgICA6IGNoYWxrLmRpbSgnQXR0YWNoZWQnKVxuICAgICAgICBjb25zdCB0aXRsZUxpbmtlZCA9IHdyYXBXaXRoT3NjOExpbmsodGl0bGVUZXh0LCBpbmZvLnVybClcbiAgICAgICAgY29uc3QgYWN0ID0gaW5mby5hY3Rpdml0eVxuICAgICAgICBjb25zdCBzaG93QWN0ID0gYWN0ICYmIGFjdC50eXBlICE9PSAncmVzdWx0JyAmJiBhY3QudHlwZSAhPT0gJ2Vycm9yJ1xuICAgICAgICBjb25zdCBhY3RUZXh0ID0gc2hvd0FjdFxuICAgICAgICAgID8gY2hhbGsuZGltKGAgJHt0cnVuY2F0ZVByb21wdChhY3Quc3VtbWFyeSwgNDApfWApXG4gICAgICAgICAgOiAnJ1xuICAgICAgICB3cml0ZVN0YXR1cyhgICAgICR7dGl0bGVMaW5rZWR9JHthY3RUZXh0fVxuYClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNb2RlIGxpbmUgZm9yIHNwYXduIG1vZGVzIHdpdGggYSBzaW5nbGUgc2xvdCAob3IgdHJ1ZSBzaW5nbGUtc2Vzc2lvbiBtb2RlKVxuICAgIGlmIChzZXNzaW9uTWF4ID09PSAxKSB7XG4gICAgICBjb25zdCBtb2RlVGV4dCA9XG4gICAgICAgIHNwYXduTW9kZSA9PT0gJ3NpbmdsZS1zZXNzaW9uJ1xuICAgICAgICAgID8gJ1NpbmdsZSBzZXNzaW9uIFxcdTAwYjcgZXhpdHMgd2hlbiBjb21wbGV0ZSdcbiAgICAgICAgICA6IHNwYXduTW9kZSA9PT0gJ3dvcmt0cmVlJ1xuICAgICAgICAgICAgPyBgQ2FwYWNpdHk6ICR7c2Vzc2lvbkFjdGl2ZX0vMSBcXHUwMGI3IE5ldyBzZXNzaW9ucyB3aWxsIGJlIGNyZWF0ZWQgaW4gYW4gaXNvbGF0ZWQgd29ya3RyZWVgXG4gICAgICAgICAgICA6IGBDYXBhY2l0eTogJHtzZXNzaW9uQWN0aXZlfS8xIFxcdTAwYjcgTmV3IHNlc3Npb25zIHdpbGwgYmUgY3JlYXRlZCBpbiB0aGUgY3VycmVudCBkaXJlY3RvcnlgXG4gICAgICB3cml0ZVN0YXR1cyhgICAgICR7Y2hhbGsuZGltKG1vZGVUZXh0KX1cXG5gKVxuICAgIH1cblxuICAgIC8vIFRvb2wgYWN0aXZpdHkgbGluZSBmb3Igc2luZ2xlLXNlc3Npb24gbW9kZVxuICAgIGlmIChcbiAgICAgIHNlc3Npb25NYXggPT09IDEgJiZcbiAgICAgICFpc0lkbGUgJiZcbiAgICAgIGxhc3RUb29sU3VtbWFyeSAmJlxuICAgICAgRGF0ZS5ub3coKSAtIGxhc3RUb29sVGltZSA8IFRPT0xfRElTUExBWV9FWFBJUllfTVNcbiAgICApIHtcbiAgICAgIHdyaXRlU3RhdHVzKGAgICR7Y2hhbGsuZGltKHRydW5jYXRlUHJvbXB0KGxhc3RUb29sU3VtbWFyeSwgNjApKX1cXG5gKVxuICAgIH1cblxuICAgIC8vIEJsYW5rIGxpbmUgc2VwYXJhdG9yIGJlZm9yZSBmb290ZXJcbiAgICBjb25zdCB1cmwgPSBhY3RpdmVTZXNzaW9uVXJsID8/IGNvbm5lY3RVcmxcbiAgICBpZiAodXJsKSB7XG4gICAgICB3cml0ZVN0YXR1cygnXFxuJylcbiAgICAgIGNvbnN0IGZvb3RlclRleHQgPSBpc0lkbGVcbiAgICAgICAgPyBidWlsZElkbGVGb290ZXJUZXh0KHVybClcbiAgICAgICAgOiBidWlsZEFjdGl2ZUZvb3RlclRleHQodXJsKVxuICAgICAgY29uc3QgcXJIaW50ID0gcXJWaXNpYmxlXG4gICAgICAgID8gY2hhbGsuZGltLml0YWxpYygnc3BhY2UgdG8gaGlkZSBRUiBjb2RlJylcbiAgICAgICAgOiBjaGFsay5kaW0uaXRhbGljKCdzcGFjZSB0byBzaG93IFFSIGNvZGUnKVxuICAgICAgY29uc3QgdG9nZ2xlSGludCA9IHNwYXduTW9kZURpc3BsYXlcbiAgICAgICAgPyBjaGFsay5kaW0uaXRhbGljKCcgXFx1MDBiNyB3IHRvIHRvZ2dsZSBzcGF3biBtb2RlJylcbiAgICAgICAgOiAnJ1xuICAgICAgd3JpdGVTdGF0dXMoYCR7Y2hhbGsuZGltKGZvb3RlclRleHQpfVxcbmApXG4gICAgICB3cml0ZVN0YXR1cyhgJHtxckhpbnR9JHt0b2dnbGVIaW50fVxcbmApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcmludEJhbm5lcihjb25maWc6IEJyaWRnZUNvbmZpZywgZW52aXJvbm1lbnRJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICBjYWNoZWRJbmdyZXNzVXJsID0gY29uZmlnLnNlc3Npb25JbmdyZXNzVXJsXG4gICAgICBjYWNoZWRFbnZpcm9ubWVudElkID0gZW52aXJvbm1lbnRJZFxuICAgICAgY29ubmVjdFVybCA9IGJ1aWxkQnJpZGdlQ29ubmVjdFVybChlbnZpcm9ubWVudElkLCBjYWNoZWRJbmdyZXNzVXJsKVxuICAgICAgcmVnZW5lcmF0ZVFyKGNvbm5lY3RVcmwpXG5cbiAgICAgIGlmICh2ZXJib3NlKSB7XG4gICAgICAgIHdyaXRlKGNoYWxrLmRpbShgUmVtb3RlIENvbnRyb2xgKSArIGAgdiR7TUFDUk8uVkVSU0lPTn1cXG5gKVxuICAgICAgfVxuICAgICAgaWYgKHZlcmJvc2UpIHtcbiAgICAgICAgaWYgKGNvbmZpZy5zcGF3bk1vZGUgIT09ICdzaW5nbGUtc2Vzc2lvbicpIHtcbiAgICAgICAgICB3cml0ZShjaGFsay5kaW0oYFNwYXduIG1vZGU6IGApICsgYCR7Y29uZmlnLnNwYXduTW9kZX1cXG5gKVxuICAgICAgICAgIHdyaXRlKFxuICAgICAgICAgICAgY2hhbGsuZGltKGBNYXggY29uY3VycmVudCBzZXNzaW9uczogYCkgKyBgJHtjb25maWcubWF4U2Vzc2lvbnN9XFxuYCxcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgd3JpdGUoY2hhbGsuZGltKGBFbnZpcm9ubWVudCBJRDogYCkgKyBgJHtlbnZpcm9ubWVudElkfVxcbmApXG4gICAgICB9XG4gICAgICBpZiAoY29uZmlnLnNhbmRib3gpIHtcbiAgICAgICAgd3JpdGUoY2hhbGsuZGltKGBTYW5kYm94OiBgKSArIGAke2NoYWxrLmdyZWVuKCdFbmFibGVkJyl9XFxuYClcbiAgICAgIH1cbiAgICAgIHdyaXRlKCdcXG4nKVxuXG4gICAgICAvLyBTdGFydCBjb25uZWN0aW5nIHNwaW5uZXIgXHUyMDE0IGZpcnN0IHVwZGF0ZUlkbGVTdGF0dXMoKSB3aWxsIHN0b3AgaXRcbiAgICAgIHN0YXJ0Q29ubmVjdGluZygpXG4gICAgfSxcblxuICAgIGxvZ1Nlc3Npb25TdGFydChzZXNzaW9uSWQ6IHN0cmluZywgcHJvbXB0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIGlmICh2ZXJib3NlKSB7XG4gICAgICAgIGNvbnN0IHNob3J0ID0gdHJ1bmNhdGVQcm9tcHQocHJvbXB0LCA4MClcbiAgICAgICAgcHJpbnRMb2coXG4gICAgICAgICAgY2hhbGsuZGltKGBbJHt0aW1lc3RhbXAoKX1dYCkgK1xuICAgICAgICAgICAgYCBTZXNzaW9uIHN0YXJ0ZWQ6ICR7Y2hhbGsud2hpdGUoYFwiJHtzaG9ydH1cImApfSAoJHtjaGFsay5kaW0oc2Vzc2lvbklkKX0pXFxuYCxcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBsb2dTZXNzaW9uQ29tcGxldGUoc2Vzc2lvbklkOiBzdHJpbmcsIGR1cmF0aW9uTXM6IG51bWJlcik6IHZvaWQge1xuICAgICAgcHJpbnRMb2coXG4gICAgICAgIGNoYWxrLmRpbShgWyR7dGltZXN0YW1wKCl9XWApICtcbiAgICAgICAgICBgIFNlc3Npb24gJHtjaGFsay5ncmVlbignY29tcGxldGVkJyl9ICgke2Zvcm1hdER1cmF0aW9uKGR1cmF0aW9uTXMpfSkgJHtjaGFsay5kaW0oc2Vzc2lvbklkKX1cXG5gLFxuICAgICAgKVxuICAgIH0sXG5cbiAgICBsb2dTZXNzaW9uRmFpbGVkKHNlc3Npb25JZDogc3RyaW5nLCBlcnJvcjogc3RyaW5nKTogdm9pZCB7XG4gICAgICBwcmludExvZyhcbiAgICAgICAgY2hhbGsuZGltKGBbJHt0aW1lc3RhbXAoKX1dYCkgK1xuICAgICAgICAgIGAgU2Vzc2lvbiAke2NoYWxrLnJlZCgnZmFpbGVkJyl9OiAke2Vycm9yfSAke2NoYWxrLmRpbShzZXNzaW9uSWQpfVxcbmAsXG4gICAgICApXG4gICAgfSxcblxuICAgIGxvZ1N0YXR1cyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHByaW50TG9nKGNoYWxrLmRpbShgWyR7dGltZXN0YW1wKCl9XWApICsgYCAke21lc3NhZ2V9XFxuYClcbiAgICB9LFxuXG4gICAgbG9nVmVyYm9zZShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIGlmICh2ZXJib3NlKSB7XG4gICAgICAgIHByaW50TG9nKGNoYWxrLmRpbShgWyR7dGltZXN0YW1wKCl9XSAke21lc3NhZ2V9YCkgKyAnXFxuJylcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbG9nRXJyb3IobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICBwcmludExvZyhjaGFsay5yZWQoYFske3RpbWVzdGFtcCgpfV0gRXJyb3I6ICR7bWVzc2FnZX1gKSArICdcXG4nKVxuICAgIH0sXG5cbiAgICBsb2dSZWNvbm5lY3RlZChkaXNjb25uZWN0ZWRNczogbnVtYmVyKTogdm9pZCB7XG4gICAgICBwcmludExvZyhcbiAgICAgICAgY2hhbGsuZGltKGBbJHt0aW1lc3RhbXAoKX1dYCkgK1xuICAgICAgICAgIGAgJHtjaGFsay5ncmVlbignUmVjb25uZWN0ZWQnKX0gYWZ0ZXIgJHtmb3JtYXREdXJhdGlvbihkaXNjb25uZWN0ZWRNcyl9XFxuYCxcbiAgICAgIClcbiAgICB9LFxuXG4gICAgc2V0UmVwb0luZm8ocmVwbzogc3RyaW5nLCBicmFuY2hOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHJlcG9OYW1lID0gcmVwb1xuICAgICAgYnJhbmNoID0gYnJhbmNoTmFtZVxuICAgIH0sXG5cbiAgICBzZXREZWJ1Z0xvZ1BhdGgocGF0aDogc3RyaW5nKTogdm9pZCB7XG4gICAgICBkZWJ1Z0xvZ1BhdGggPSBwYXRoXG4gICAgfSxcblxuICAgIHVwZGF0ZUlkbGVTdGF0dXMoKTogdm9pZCB7XG4gICAgICBzdG9wQ29ubmVjdGluZygpXG5cbiAgICAgIGN1cnJlbnRTdGF0ZSA9ICdpZGxlJ1xuICAgICAgY3VycmVudFN0YXRlVGV4dCA9ICdSZWFkeSdcbiAgICAgIGxhc3RUb29sU3VtbWFyeSA9IG51bGxcbiAgICAgIGxhc3RUb29sVGltZSA9IDBcbiAgICAgIGFjdGl2ZVNlc3Npb25VcmwgPSBudWxsXG4gICAgICByZWdlbmVyYXRlUXIoY29ubmVjdFVybClcbiAgICAgIHJlbmRlclN0YXR1c0xpbmUoKVxuICAgIH0sXG5cbiAgICBzZXRBdHRhY2hlZChzZXNzaW9uSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgc3RvcENvbm5lY3RpbmcoKVxuICAgICAgY3VycmVudFN0YXRlID0gJ2F0dGFjaGVkJ1xuICAgICAgY3VycmVudFN0YXRlVGV4dCA9ICdDb25uZWN0ZWQnXG4gICAgICBsYXN0VG9vbFN1bW1hcnkgPSBudWxsXG4gICAgICBsYXN0VG9vbFRpbWUgPSAwXG4gICAgICAvLyBNdWx0aS1zZXNzaW9uOiBrZWVwIGZvb3Rlci9RUiBvbiB0aGUgZW52aXJvbm1lbnQgY29ubmVjdCBVUkwgc28gdXNlcnNcbiAgICAgIC8vIGNhbiBzcGF3biBtb3JlIHNlc3Npb25zLiBQZXItc2Vzc2lvbiBsaW5rcyBhcmUgaW4gdGhlIGJ1bGxldCBsaXN0LlxuICAgICAgaWYgKHNlc3Npb25NYXggPD0gMSkge1xuICAgICAgICBhY3RpdmVTZXNzaW9uVXJsID0gYnVpbGRCcmlkZ2VTZXNzaW9uVXJsKFxuICAgICAgICAgIHNlc3Npb25JZCxcbiAgICAgICAgICBjYWNoZWRFbnZpcm9ubWVudElkLFxuICAgICAgICAgIGNhY2hlZEluZ3Jlc3NVcmwsXG4gICAgICAgIClcbiAgICAgICAgcmVnZW5lcmF0ZVFyKGFjdGl2ZVNlc3Npb25VcmwpXG4gICAgICB9XG4gICAgICByZW5kZXJTdGF0dXNMaW5lKClcbiAgICB9LFxuXG4gICAgdXBkYXRlUmVjb25uZWN0aW5nU3RhdHVzKGRlbGF5U3RyOiBzdHJpbmcsIGVsYXBzZWRTdHI6IHN0cmluZyk6IHZvaWQge1xuICAgICAgc3RvcENvbm5lY3RpbmcoKVxuICAgICAgY2xlYXJTdGF0dXNMaW5lcygpXG4gICAgICBjdXJyZW50U3RhdGUgPSAncmVjb25uZWN0aW5nJ1xuXG4gICAgICAvLyBRUiBjb2RlIGFib3ZlIHRoZSBzdGF0dXMgbGluZVxuICAgICAgaWYgKHFyVmlzaWJsZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgcXJMaW5lcykge1xuICAgICAgICAgIHdyaXRlU3RhdHVzKGAke2NoYWxrLmRpbShsaW5lKX1cXG5gKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZyYW1lID1cbiAgICAgICAgQlJJREdFX1NQSU5ORVJfRlJBTUVTW2Nvbm5lY3RpbmdUaWNrICUgQlJJREdFX1NQSU5ORVJfRlJBTUVTLmxlbmd0aF0hXG4gICAgICBjb25uZWN0aW5nVGljaysrXG4gICAgICB3cml0ZVN0YXR1cyhcbiAgICAgICAgYCR7Y2hhbGsueWVsbG93KGZyYW1lKX0gJHtjaGFsay55ZWxsb3coJ1JlY29ubmVjdGluZycpfSAke2NoYWxrLmRpbSgnXFx1MDBiNycpfSAke2NoYWxrLmRpbShgcmV0cnlpbmcgaW4gJHtkZWxheVN0cn1gKX0gJHtjaGFsay5kaW0oJ1xcdTAwYjcnKX0gJHtjaGFsay5kaW0oYGRpc2Nvbm5lY3RlZCAke2VsYXBzZWRTdHJ9YCl9XFxuYCxcbiAgICAgIClcbiAgICB9LFxuXG4gICAgdXBkYXRlRmFpbGVkU3RhdHVzKGVycm9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHN0b3BDb25uZWN0aW5nKClcbiAgICAgIGNsZWFyU3RhdHVzTGluZXMoKVxuICAgICAgY3VycmVudFN0YXRlID0gJ2ZhaWxlZCdcblxuICAgICAgbGV0IHN1ZmZpeCA9ICcnXG4gICAgICBpZiAocmVwb05hbWUpIHtcbiAgICAgICAgc3VmZml4ICs9IGNoYWxrLmRpbSgnIFxcdTAwYjcgJykgKyBjaGFsay5kaW0ocmVwb05hbWUpXG4gICAgICB9XG4gICAgICBpZiAoYnJhbmNoKSB7XG4gICAgICAgIHN1ZmZpeCArPSBjaGFsay5kaW0oJyBcXHUwMGI3ICcpICsgY2hhbGsuZGltKGJyYW5jaClcbiAgICAgIH1cblxuICAgICAgd3JpdGVTdGF0dXMoXG4gICAgICAgIGAke2NoYWxrLnJlZChCUklER0VfRkFJTEVEX0lORElDQVRPUil9ICR7Y2hhbGsucmVkKCdSZW1vdGUgQ29udHJvbCBGYWlsZWQnKX0ke3N1ZmZpeH1cXG5gLFxuICAgICAgKVxuICAgICAgd3JpdGVTdGF0dXMoYCR7Y2hhbGsuZGltKEZBSUxFRF9GT09URVJfVEVYVCl9XFxuYClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHdyaXRlU3RhdHVzKGAke2NoYWxrLnJlZChlcnJvcil9XFxuYClcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlU2Vzc2lvblN0YXR1cyhcbiAgICAgIF9zZXNzaW9uSWQ6IHN0cmluZyxcbiAgICAgIF9lbGFwc2VkOiBzdHJpbmcsXG4gICAgICBhY3Rpdml0eTogU2Vzc2lvbkFjdGl2aXR5LFxuICAgICAgX3RyYWlsOiBzdHJpbmdbXSxcbiAgICApOiB2b2lkIHtcbiAgICAgIC8vIENhY2hlIHRvb2wgYWN0aXZpdHkgZm9yIHRoZSBzZWNvbmQgc3RhdHVzIGxpbmVcbiAgICAgIGlmIChhY3Rpdml0eS50eXBlID09PSAndG9vbF9zdGFydCcpIHtcbiAgICAgICAgbGFzdFRvb2xTdW1tYXJ5ID0gYWN0aXZpdHkuc3VtbWFyeVxuICAgICAgICBsYXN0VG9vbFRpbWUgPSBEYXRlLm5vdygpXG4gICAgICB9XG4gICAgICByZW5kZXJTdGF0dXNMaW5lKClcbiAgICB9LFxuXG4gICAgY2xlYXJTdGF0dXMoKTogdm9pZCB7XG4gICAgICBzdG9wQ29ubmVjdGluZygpXG4gICAgICBjbGVhclN0YXR1c0xpbmVzKClcbiAgICB9LFxuXG4gICAgdG9nZ2xlUXIoKTogdm9pZCB7XG4gICAgICBxclZpc2libGUgPSAhcXJWaXNpYmxlXG4gICAgICByZW5kZXJTdGF0dXNMaW5lKClcbiAgICB9LFxuXG4gICAgdXBkYXRlU2Vzc2lvbkNvdW50KGFjdGl2ZTogbnVtYmVyLCBtYXg6IG51bWJlciwgbW9kZTogU3Bhd25Nb2RlKTogdm9pZCB7XG4gICAgICBpZiAoc2Vzc2lvbkFjdGl2ZSA9PT0gYWN0aXZlICYmIHNlc3Npb25NYXggPT09IG1heCAmJiBzcGF3bk1vZGUgPT09IG1vZGUpXG4gICAgICAgIHJldHVyblxuICAgICAgc2Vzc2lvbkFjdGl2ZSA9IGFjdGl2ZVxuICAgICAgc2Vzc2lvbk1heCA9IG1heFxuICAgICAgc3Bhd25Nb2RlID0gbW9kZVxuICAgICAgLy8gRG9uJ3QgcmUtcmVuZGVyIGhlcmUgXHUyMDE0IHRoZSBzdGF0dXMgdGlja2VyIGNhbGxzIHJlbmRlclN0YXR1c0xpbmVcbiAgICAgIC8vIG9uIGl0cyBvd24gY2FkZW5jZSwgYW5kIHRoZSBuZXh0IHRpY2sgd2lsbCBwaWNrIHVwIHRoZSBuZXcgdmFsdWVzLlxuICAgIH0sXG5cbiAgICBzZXRTcGF3bk1vZGVEaXNwbGF5KG1vZGU6ICdzYW1lLWRpcicgfCAnd29ya3RyZWUnIHwgbnVsbCk6IHZvaWQge1xuICAgICAgaWYgKHNwYXduTW9kZURpc3BsYXkgPT09IG1vZGUpIHJldHVyblxuICAgICAgc3Bhd25Nb2RlRGlzcGxheSA9IG1vZGVcbiAgICAgIC8vIEFsc28gc3luYyB0aGUgIzIxMTE4LWFkZGVkIHNwYXduTW9kZSBzbyB0aGUgbmV4dCByZW5kZXIgc2hvd3MgY29ycmVjdFxuICAgICAgLy8gbW9kZSBoaW50ICsgYnJhbmNoIHZpc2liaWxpdHkuIERvbid0IHJlbmRlciBoZXJlIFx1MjAxNCBtYXRjaGVzXG4gICAgICAvLyB1cGRhdGVTZXNzaW9uQ291bnQ6IGNhbGxlZCBiZWZvcmUgcHJpbnRCYW5uZXIgKGluaXRpYWwgc2V0dXApIGFuZFxuICAgICAgLy8gYWdhaW4gZnJvbSB0aGUgYHdgIGhhbmRsZXIgKHdoaWNoIGZvbGxvd3Mgd2l0aCByZWZyZXNoRGlzcGxheSkuXG4gICAgICBpZiAobW9kZSkgc3Bhd25Nb2RlID0gbW9kZVxuICAgIH0sXG5cbiAgICBhZGRTZXNzaW9uKHNlc3Npb25JZDogc3RyaW5nLCB1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgICAgc2Vzc2lvbkRpc3BsYXlJbmZvLnNldChzZXNzaW9uSWQsIHsgdXJsIH0pXG4gICAgfSxcblxuICAgIHVwZGF0ZVNlc3Npb25BY3Rpdml0eShzZXNzaW9uSWQ6IHN0cmluZywgYWN0aXZpdHk6IFNlc3Npb25BY3Rpdml0eSk6IHZvaWQge1xuICAgICAgY29uc3QgaW5mbyA9IHNlc3Npb25EaXNwbGF5SW5mby5nZXQoc2Vzc2lvbklkKVxuICAgICAgaWYgKCFpbmZvKSByZXR1cm5cbiAgICAgIGluZm8uYWN0aXZpdHkgPSBhY3Rpdml0eVxuICAgIH0sXG5cbiAgICBzZXRTZXNzaW9uVGl0bGUoc2Vzc2lvbklkOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIGNvbnN0IGluZm8gPSBzZXNzaW9uRGlzcGxheUluZm8uZ2V0KHNlc3Npb25JZClcbiAgICAgIGlmICghaW5mbykgcmV0dXJuXG4gICAgICBpbmZvLnRpdGxlID0gdGl0bGVcbiAgICAgIC8vIEd1YXJkIGFnYWluc3QgcmVjb25uZWN0aW5nL2ZhaWxlZCBcdTIwMTQgcmVuZGVyU3RhdHVzTGluZSBjbGVhcnMgdGhlbiByZXR1cm5zXG4gICAgICAvLyBlYXJseSBmb3IgdGhvc2Ugc3RhdGVzLCB3aGljaCB3b3VsZCBlcmFzZSB0aGUgc3Bpbm5lci9lcnJvci5cbiAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09ICdyZWNvbm5lY3RpbmcnIHx8IGN1cnJlbnRTdGF0ZSA9PT0gJ2ZhaWxlZCcpIHJldHVyblxuICAgICAgaWYgKHNlc3Npb25NYXggPT09IDEpIHtcbiAgICAgICAgLy8gU2luZ2xlLXNlc3Npb246IHNob3cgdGl0bGUgaW4gdGhlIG1haW4gc3RhdHVzIGxpbmUgdG9vLlxuICAgICAgICBjdXJyZW50U3RhdGUgPSAndGl0bGVkJ1xuICAgICAgICBjdXJyZW50U3RhdGVUZXh0ID0gdHJ1bmNhdGVQcm9tcHQodGl0bGUsIDQwKVxuICAgICAgfVxuICAgICAgcmVuZGVyU3RhdHVzTGluZSgpXG4gICAgfSxcblxuICAgIHJlbW92ZVNlc3Npb24oc2Vzc2lvbklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHNlc3Npb25EaXNwbGF5SW5mby5kZWxldGUoc2Vzc2lvbklkKVxuICAgIH0sXG5cbiAgICByZWZyZXNoRGlzcGxheSgpOiB2b2lkIHtcbiAgICAgIC8vIFNraXAgZHVyaW5nIHJlY29ubmVjdGluZy9mYWlsZWQgXHUyMDE0IHJlbmRlclN0YXR1c0xpbmUgY2xlYXJzIHRoZW4gcmV0dXJuc1xuICAgICAgLy8gZWFybHkgZm9yIHRob3NlIHN0YXRlcywgd2hpY2ggd291bGQgZXJhc2UgdGhlIHNwaW5uZXIvZXJyb3IuXG4gICAgICBpZiAoY3VycmVudFN0YXRlID09PSAncmVjb25uZWN0aW5nJyB8fCBjdXJyZW50U3RhdGUgPT09ICdmYWlsZWQnKSByZXR1cm5cbiAgICAgIHJlbmRlclN0YXR1c0xpbmUoKVxuICAgIH0sXG4gIH1cbn1cbiIsICJpbXBvcnQgeyB0eXBlIENoaWxkUHJvY2Vzcywgc3Bhd24gfSBmcm9tICdjaGlsZF9wcm9jZXNzJ1xuaW1wb3J0IHsgY3JlYXRlV3JpdGVTdHJlYW0sIHR5cGUgV3JpdGVTdHJlYW0gfSBmcm9tICdmcydcbmltcG9ydCB7IHRtcGRpciB9IGZyb20gJ29zJ1xuaW1wb3J0IHsgZGlybmFtZSwgam9pbiB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBjcmVhdGVJbnRlcmZhY2UgfSBmcm9tICdyZWFkbGluZSdcbmltcG9ydCB7IGpzb25QYXJzZSwganNvblN0cmluZ2lmeSB9IGZyb20gJy4uL3V0aWxzL3Nsb3dPcGVyYXRpb25zLmpzJ1xuaW1wb3J0IHsgZGVidWdUcnVuY2F0ZSB9IGZyb20gJy4vZGVidWdVdGlscy5qcydcbmltcG9ydCB0eXBlIHtcbiAgU2Vzc2lvbkFjdGl2aXR5LFxuICBTZXNzaW9uRG9uZVN0YXR1cyxcbiAgU2Vzc2lvbkhhbmRsZSxcbiAgU2Vzc2lvblNwYXduZXIsXG4gIFNlc3Npb25TcGF3bk9wdHMsXG59IGZyb20gJy4vdHlwZXMuanMnXG5cbmNvbnN0IE1BWF9BQ1RJVklUSUVTID0gMTBcbmNvbnN0IE1BWF9TVERFUlJfTElORVMgPSAxMFxuXG4vKipcbiAqIFNhbml0aXplIGEgc2Vzc2lvbiBJRCBmb3IgdXNlIGluIGZpbGUgbmFtZXMuXG4gKiBTdHJpcHMgYW55IGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBjYXVzZSBwYXRoIHRyYXZlcnNhbCAoZS5nLiBgLi4vYCwgYC9gKVxuICogb3Igb3RoZXIgZmlsZXN5c3RlbSBpc3N1ZXMsIHJlcGxhY2luZyB0aGVtIHdpdGggdW5kZXJzY29yZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYWZlRmlsZW5hbWVJZChpZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGlkLnJlcGxhY2UoL1teYS16QS1aMC05Xy1dL2csICdfJylcbn1cblxuLyoqXG4gKiBBIGNvbnRyb2xfcmVxdWVzdCBlbWl0dGVkIGJ5IHRoZSBjaGlsZCBDTEkgd2hlbiBpdCBuZWVkcyBwZXJtaXNzaW9uIHRvXG4gKiBleGVjdXRlIGEgKipzcGVjaWZpYyoqIHRvb2wgaW52b2NhdGlvbiAobm90IGEgZ2VuZXJhbCBjYXBhYmlsaXR5IGNoZWNrKS5cbiAqIFRoZSBicmlkZ2UgZm9yd2FyZHMgdGhpcyB0byB0aGUgc2VydmVyIHNvIHRoZSB1c2VyIGNhbiBhcHByb3ZlL2RlbnkuXG4gKi9cbmV4cG9ydCB0eXBlIFBlcm1pc3Npb25SZXF1ZXN0ID0ge1xuICB0eXBlOiAnY29udHJvbF9yZXF1ZXN0J1xuICByZXF1ZXN0X2lkOiBzdHJpbmdcbiAgcmVxdWVzdDoge1xuICAgIC8qKiBQZXItaW52b2NhdGlvbiBwZXJtaXNzaW9uIGNoZWNrIFx1MjAxNCBcIm1heSBJIHJ1biB0aGlzIHRvb2wgd2l0aCB0aGVzZSBpbnB1dHM/XCIgKi9cbiAgICBzdWJ0eXBlOiAnY2FuX3VzZV90b29sJ1xuICAgIHRvb2xfbmFtZTogc3RyaW5nXG4gICAgaW5wdXQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICAgdG9vbF91c2VfaWQ6IHN0cmluZ1xuICB9XG59XG5cbnR5cGUgU2Vzc2lvblNwYXduZXJEZXBzID0ge1xuICBleGVjUGF0aDogc3RyaW5nXG4gIC8qKlxuICAgKiBBcmd1bWVudHMgdGhhdCBtdXN0IHByZWNlZGUgdGhlIENMSSBmbGFncyB3aGVuIHNwYXduaW5nLiBFbXB0eSBmb3JcbiAgICogY29tcGlsZWQgYmluYXJpZXMgKHdoZXJlIGV4ZWNQYXRoIGlzIHRoZSBjbGF1ZGUgYmluYXJ5IGl0c2VsZik7IGNvbnRhaW5zXG4gICAqIHRoZSBzY3JpcHQgcGF0aCAocHJvY2Vzcy5hcmd2WzFdKSBmb3IgbnBtIGluc3RhbGxzIHdoZXJlIGV4ZWNQYXRoIGlzIHRoZVxuICAgKiBub2RlIHJ1bnRpbWUuIFdpdGhvdXQgdGhpcywgbm9kZSBzZWVzIC0tc2RrLXVybCBhcyBhIG5vZGUgb3B0aW9uIGFuZFxuICAgKiBleGl0cyB3aXRoIFwiYmFkIG9wdGlvbjogLS1zZGstdXJsXCIgKHNlZSBhbnRocm9waWNzL2NsYXVkZS1jb2RlIzI4MzM0KS5cbiAgICovXG4gIHNjcmlwdEFyZ3M6IHN0cmluZ1tdXG4gIGVudjogTm9kZUpTLlByb2Nlc3NFbnZcbiAgdmVyYm9zZTogYm9vbGVhblxuICBzYW5kYm94OiBib29sZWFuXG4gIGRlYnVnRmlsZT86IHN0cmluZ1xuICBwZXJtaXNzaW9uTW9kZT86IHN0cmluZ1xuICBvbkRlYnVnOiAobXNnOiBzdHJpbmcpID0+IHZvaWRcbiAgb25BY3Rpdml0eT86IChzZXNzaW9uSWQ6IHN0cmluZywgYWN0aXZpdHk6IFNlc3Npb25BY3Rpdml0eSkgPT4gdm9pZFxuICBvblBlcm1pc3Npb25SZXF1ZXN0PzogKFxuICAgIHNlc3Npb25JZDogc3RyaW5nLFxuICAgIHJlcXVlc3Q6IFBlcm1pc3Npb25SZXF1ZXN0LFxuICAgIGFjY2Vzc1Rva2VuOiBzdHJpbmcsXG4gICkgPT4gdm9pZFxufVxuXG4vKiogTWFwIHRvb2wgbmFtZXMgdG8gaHVtYW4tcmVhZGFibGUgdmVyYnMgZm9yIHRoZSBzdGF0dXMgZGlzcGxheS4gKi9cbmNvbnN0IFRPT0xfVkVSQlM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIFJlYWQ6ICdSZWFkaW5nJyxcbiAgV3JpdGU6ICdXcml0aW5nJyxcbiAgRWRpdDogJ0VkaXRpbmcnLFxuICBNdWx0aUVkaXQ6ICdFZGl0aW5nJyxcbiAgQmFzaDogJ1J1bm5pbmcnLFxuICBHbG9iOiAnU2VhcmNoaW5nJyxcbiAgR3JlcDogJ1NlYXJjaGluZycsXG4gIFdlYkZldGNoOiAnRmV0Y2hpbmcnLFxuICBXZWJTZWFyY2g6ICdTZWFyY2hpbmcnLFxuICBUYXNrOiAnUnVubmluZyB0YXNrJyxcbiAgRmlsZVJlYWRUb29sOiAnUmVhZGluZycsXG4gIEZpbGVXcml0ZVRvb2w6ICdXcml0aW5nJyxcbiAgRmlsZUVkaXRUb29sOiAnRWRpdGluZycsXG4gIEdsb2JUb29sOiAnU2VhcmNoaW5nJyxcbiAgR3JlcFRvb2w6ICdTZWFyY2hpbmcnLFxuICBCYXNoVG9vbDogJ1J1bm5pbmcnLFxuICBOb3RlYm9va0VkaXRUb29sOiAnRWRpdGluZyBub3RlYm9vaycsXG4gIExTUDogJ0xTUCcsXG59XG5cbmZ1bmN0aW9uIHRvb2xTdW1tYXJ5KG5hbWU6IHN0cmluZywgaW5wdXQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogc3RyaW5nIHtcbiAgY29uc3QgdmVyYiA9IFRPT0xfVkVSQlNbbmFtZV0gPz8gbmFtZVxuICBjb25zdCB0YXJnZXQgPVxuICAgIChpbnB1dC5maWxlX3BhdGggYXMgc3RyaW5nKSA/P1xuICAgIChpbnB1dC5maWxlUGF0aCBhcyBzdHJpbmcpID8/XG4gICAgKGlucHV0LnBhdHRlcm4gYXMgc3RyaW5nKSA/P1xuICAgIChpbnB1dC5jb21tYW5kIGFzIHN0cmluZyB8IHVuZGVmaW5lZCk/LnNsaWNlKDAsIDYwKSA/P1xuICAgIChpbnB1dC51cmwgYXMgc3RyaW5nKSA/P1xuICAgIChpbnB1dC5xdWVyeSBhcyBzdHJpbmcpID8/XG4gICAgJydcbiAgaWYgKHRhcmdldCkge1xuICAgIHJldHVybiBgJHt2ZXJifSAke3RhcmdldH1gXG4gIH1cbiAgcmV0dXJuIHZlcmJcbn1cblxuZnVuY3Rpb24gZXh0cmFjdEFjdGl2aXRpZXMoXG4gIGxpbmU6IHN0cmluZyxcbiAgc2Vzc2lvbklkOiBzdHJpbmcsXG4gIG9uRGVidWc6IChtc2c6IHN0cmluZykgPT4gdm9pZCxcbik6IFNlc3Npb25BY3Rpdml0eVtdIHtcbiAgbGV0IHBhcnNlZDogdW5rbm93blxuICB0cnkge1xuICAgIHBhcnNlZCA9IGpzb25QYXJzZShsaW5lKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gW11cbiAgfVxuXG4gIGlmICghcGFyc2VkIHx8IHR5cGVvZiBwYXJzZWQgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICBjb25zdCBtc2cgPSBwYXJzZWQgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgY29uc3QgYWN0aXZpdGllczogU2Vzc2lvbkFjdGl2aXR5W10gPSBbXVxuICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG5cbiAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgIGNhc2UgJ2Fzc2lzdGFudCc6IHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBtc2cubWVzc2FnZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IHVuZGVmaW5lZFxuICAgICAgaWYgKCFtZXNzYWdlKSBicmVha1xuICAgICAgY29uc3QgY29udGVudCA9IG1lc3NhZ2UuY29udGVudFxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGNvbnRlbnQpKSBicmVha1xuXG4gICAgICBmb3IgKGNvbnN0IGJsb2NrIG9mIGNvbnRlbnQpIHtcbiAgICAgICAgaWYgKCFibG9jayB8fCB0eXBlb2YgYmxvY2sgIT09ICdvYmplY3QnKSBjb250aW51ZVxuICAgICAgICBjb25zdCBiID0gYmxvY2sgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cblxuICAgICAgICBpZiAoYi50eXBlID09PSAndG9vbF91c2UnKSB7XG4gICAgICAgICAgY29uc3QgbmFtZSA9IChiLm5hbWUgYXMgc3RyaW5nKSA/PyAnVG9vbCdcbiAgICAgICAgICBjb25zdCBpbnB1dCA9IChiLmlucHV0IGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA/PyB7fVxuICAgICAgICAgIGNvbnN0IHN1bW1hcnkgPSB0b29sU3VtbWFyeShuYW1lLCBpbnB1dClcbiAgICAgICAgICBhY3Rpdml0aWVzLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ3Rvb2xfc3RhcnQnLFxuICAgICAgICAgICAgc3VtbWFyeSxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogbm93LFxuICAgICAgICAgIH0pXG4gICAgICAgICAgb25EZWJ1ZyhcbiAgICAgICAgICAgIGBbYnJpZGdlOmFjdGl2aXR5XSBzZXNzaW9uSWQ9JHtzZXNzaW9uSWR9IHRvb2xfdXNlIG5hbWU9JHtuYW1lfSAke2lucHV0UHJldmlldyhpbnB1dCl9YCxcbiAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSBpZiAoYi50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgICBjb25zdCB0ZXh0ID0gKGIudGV4dCBhcyBzdHJpbmcpID8/ICcnXG4gICAgICAgICAgaWYgKHRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYWN0aXZpdGllcy5wdXNoKHtcbiAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICBzdW1tYXJ5OiB0ZXh0LnNsaWNlKDAsIDgwKSxcbiAgICAgICAgICAgICAgdGltZXN0YW1wOiBub3csXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgb25EZWJ1ZyhcbiAgICAgICAgICAgICAgYFticmlkZ2U6YWN0aXZpdHldIHNlc3Npb25JZD0ke3Nlc3Npb25JZH0gdGV4dCBcIiR7dGV4dC5zbGljZSgwLCAxMDApfVwiYCxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIGNhc2UgJ3Jlc3VsdCc6IHtcbiAgICAgIGNvbnN0IHN1YnR5cGUgPSBtc2cuc3VidHlwZSBhcyBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICAgIGlmIChzdWJ0eXBlID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgYWN0aXZpdGllcy5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAncmVzdWx0JyxcbiAgICAgICAgICBzdW1tYXJ5OiAnU2Vzc2lvbiBjb21wbGV0ZWQnLFxuICAgICAgICAgIHRpbWVzdGFtcDogbm93LFxuICAgICAgICB9KVxuICAgICAgICBvbkRlYnVnKFxuICAgICAgICAgIGBbYnJpZGdlOmFjdGl2aXR5XSBzZXNzaW9uSWQ9JHtzZXNzaW9uSWR9IHJlc3VsdCBzdWJ0eXBlPXN1Y2Nlc3NgLFxuICAgICAgICApXG4gICAgICB9IGVsc2UgaWYgKHN1YnR5cGUpIHtcbiAgICAgICAgY29uc3QgZXJyb3JzID0gbXNnLmVycm9ycyBhcyBzdHJpbmdbXSB8IHVuZGVmaW5lZFxuICAgICAgICBjb25zdCBlcnJvclN1bW1hcnkgPSBlcnJvcnM/LlswXSA/PyBgRXJyb3I6ICR7c3VidHlwZX1gXG4gICAgICAgIGFjdGl2aXRpZXMucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICBzdW1tYXJ5OiBlcnJvclN1bW1hcnksXG4gICAgICAgICAgdGltZXN0YW1wOiBub3csXG4gICAgICAgIH0pXG4gICAgICAgIG9uRGVidWcoXG4gICAgICAgICAgYFticmlkZ2U6YWN0aXZpdHldIHNlc3Npb25JZD0ke3Nlc3Npb25JZH0gcmVzdWx0IHN1YnR5cGU9JHtzdWJ0eXBlfSBlcnJvcj1cIiR7ZXJyb3JTdW1tYXJ5fVwiYCxcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25EZWJ1ZyhcbiAgICAgICAgICBgW2JyaWRnZTphY3Rpdml0eV0gc2Vzc2lvbklkPSR7c2Vzc2lvbklkfSByZXN1bHQgc3VidHlwZT11bmRlZmluZWRgLFxuICAgICAgICApXG4gICAgICB9XG4gICAgICBicmVha1xuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWtcbiAgfVxuXG4gIHJldHVybiBhY3Rpdml0aWVzXG59XG5cbi8qKlxuICogRXh0cmFjdCBwbGFpbiB0ZXh0IGZyb20gYSByZXBsYXllZCBTREtVc2VyTWVzc2FnZSBOREpTT04gbGluZS4gUmV0dXJucyB0aGVcbiAqIHRyaW1tZWQgdGV4dCBpZiB0aGlzIGxvb2tzIGxpa2UgYSByZWFsIGh1bWFuLWF1dGhvcmVkIG1lc3NhZ2UsIG90aGVyd2lzZVxuICogdW5kZWZpbmVkIHNvIHRoZSBjYWxsZXIga2VlcHMgd2FpdGluZyBmb3IgdGhlIGZpcnN0IHJlYWwgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gZXh0cmFjdFVzZXJNZXNzYWdlVGV4dChcbiAgbXNnOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbik6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIC8vIFNraXAgdG9vbC1yZXN1bHQgdXNlciBtZXNzYWdlcyAod3JhcHBlZCBzdWJhZ2VudCByZXN1bHRzKSBhbmQgc3ludGhldGljXG4gIC8vIGNhdmVhdCBtZXNzYWdlcyBcdTIwMTQgbmVpdGhlciBpcyBodW1hbi1hdXRob3JlZC5cbiAgaWYgKG1zZy5wYXJlbnRfdG9vbF91c2VfaWQgIT0gbnVsbCB8fCBtc2cuaXNTeW50aGV0aWMgfHwgbXNnLmlzUmVwbGF5KVxuICAgIHJldHVybiB1bmRlZmluZWRcblxuICBjb25zdCBtZXNzYWdlID0gbXNnLm1lc3NhZ2UgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCB1bmRlZmluZWRcbiAgY29uc3QgY29udGVudCA9IG1lc3NhZ2U/LmNvbnRlbnRcbiAgbGV0IHRleHQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgdGV4dCA9IGNvbnRlbnRcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNvbnRlbnQpKSB7XG4gICAgZm9yIChjb25zdCBibG9jayBvZiBjb250ZW50KSB7XG4gICAgICBpZiAoXG4gICAgICAgIGJsb2NrICYmXG4gICAgICAgIHR5cGVvZiBibG9jayA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgKGJsb2NrIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KS50eXBlID09PSAndGV4dCdcbiAgICAgICkge1xuICAgICAgICB0ZXh0ID0gKGJsb2NrIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KS50ZXh0IGFzIHN0cmluZyB8IHVuZGVmaW5lZFxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB0ZXh0ID0gdGV4dD8udHJpbSgpXG4gIHJldHVybiB0ZXh0ID8gdGV4dCA6IHVuZGVmaW5lZFxufVxuXG4vKiogQnVpbGQgYSBzaG9ydCBwcmV2aWV3IG9mIHRvb2wgaW5wdXQgZm9yIGRlYnVnIGxvZ2dpbmcuICovXG5mdW5jdGlvbiBpbnB1dFByZXZpZXcoaW5wdXQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogc3RyaW5nIHtcbiAgY29uc3QgcGFydHM6IHN0cmluZ1tdID0gW11cbiAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKGlucHV0KSkge1xuICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgICAgcGFydHMucHVzaChgJHtrZXl9PVwiJHt2YWwuc2xpY2UoMCwgMTAwKX1cImApXG4gICAgfVxuICAgIGlmIChwYXJ0cy5sZW5ndGggPj0gMykgYnJlYWtcbiAgfVxuICByZXR1cm4gcGFydHMuam9pbignICcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZXNzaW9uU3Bhd25lcihkZXBzOiBTZXNzaW9uU3Bhd25lckRlcHMpOiBTZXNzaW9uU3Bhd25lciB7XG4gIHJldHVybiB7XG4gICAgc3Bhd24ob3B0czogU2Vzc2lvblNwYXduT3B0cywgZGlyOiBzdHJpbmcpOiBTZXNzaW9uSGFuZGxlIHtcbiAgICAgIC8vIERlYnVnIGZpbGUgcmVzb2x1dGlvbjpcbiAgICAgIC8vIDEuIElmIGRlcHMuZGVidWdGaWxlIGlzIHByb3ZpZGVkLCB1c2UgaXQgd2l0aCBzZXNzaW9uIElEIHN1ZmZpeCBmb3IgdW5pcXVlbmVzc1xuICAgICAgLy8gMi4gSWYgdmVyYm9zZSBvciBhbnQgYnVpbGQsIGF1dG8tZ2VuZXJhdGUgYSB0ZW1wIGZpbGUgcGF0aFxuICAgICAgLy8gMy4gT3RoZXJ3aXNlLCBubyBkZWJ1ZyBmaWxlXG4gICAgICBjb25zdCBzYWZlSWQgPSBzYWZlRmlsZW5hbWVJZChvcHRzLnNlc3Npb25JZClcbiAgICAgIGxldCBkZWJ1Z0ZpbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAgICAgaWYgKGRlcHMuZGVidWdGaWxlKSB7XG4gICAgICAgIGNvbnN0IGV4dCA9IGRlcHMuZGVidWdGaWxlLmxhc3RJbmRleE9mKCcuJylcbiAgICAgICAgaWYgKGV4dCA+IDApIHtcbiAgICAgICAgICBkZWJ1Z0ZpbGUgPSBgJHtkZXBzLmRlYnVnRmlsZS5zbGljZSgwLCBleHQpfS0ke3NhZmVJZH0ke2RlcHMuZGVidWdGaWxlLnNsaWNlKGV4dCl9YFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlYnVnRmlsZSA9IGAke2RlcHMuZGVidWdGaWxlfS0ke3NhZmVJZH1gXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZGVwcy52ZXJib3NlIHx8IHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCcpIHtcbiAgICAgICAgZGVidWdGaWxlID0gam9pbih0bXBkaXIoKSwgJ2NsYXVkZScsIGBicmlkZ2Utc2Vzc2lvbi0ke3NhZmVJZH0ubG9nYClcbiAgICAgIH1cblxuICAgICAgLy8gVHJhbnNjcmlwdCBmaWxlOiB3cml0ZSByYXcgTkRKU09OIGxpbmVzIGZvciBwb3N0LWhvYyBhbmFseXNpcy5cbiAgICAgIC8vIFBsYWNlZCBhbG9uZ3NpZGUgdGhlIGRlYnVnIGZpbGUgd2hlbiBvbmUgaXMgY29uZmlndXJlZC5cbiAgICAgIGxldCB0cmFuc2NyaXB0U3RyZWFtOiBXcml0ZVN0cmVhbSB8IG51bGwgPSBudWxsXG4gICAgICBsZXQgdHJhbnNjcmlwdFBhdGg6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAgICAgaWYgKGRlcHMuZGVidWdGaWxlKSB7XG4gICAgICAgIHRyYW5zY3JpcHRQYXRoID0gam9pbihcbiAgICAgICAgICBkaXJuYW1lKGRlcHMuZGVidWdGaWxlKSxcbiAgICAgICAgICBgYnJpZGdlLXRyYW5zY3JpcHQtJHtzYWZlSWR9Lmpzb25sYCxcbiAgICAgICAgKVxuICAgICAgICB0cmFuc2NyaXB0U3RyZWFtID0gY3JlYXRlV3JpdGVTdHJlYW0odHJhbnNjcmlwdFBhdGgsIHsgZmxhZ3M6ICdhJyB9KVxuICAgICAgICB0cmFuc2NyaXB0U3RyZWFtLm9uKCdlcnJvcicsIGVyciA9PiB7XG4gICAgICAgICAgZGVwcy5vbkRlYnVnKFxuICAgICAgICAgICAgYFticmlkZ2U6c2Vzc2lvbl0gVHJhbnNjcmlwdCB3cml0ZSBlcnJvcjogJHtlcnIubWVzc2FnZX1gLFxuICAgICAgICAgIClcbiAgICAgICAgICB0cmFuc2NyaXB0U3RyZWFtID0gbnVsbFxuICAgICAgICB9KVxuICAgICAgICBkZXBzLm9uRGVidWcoYFticmlkZ2U6c2Vzc2lvbl0gVHJhbnNjcmlwdCBsb2c6ICR7dHJhbnNjcmlwdFBhdGh9YClcbiAgICAgIH1cblxuICAgICAgY29uc3QgYXJncyA9IFtcbiAgICAgICAgLi4uZGVwcy5zY3JpcHRBcmdzLFxuICAgICAgICAnLS1wcmludCcsXG4gICAgICAgICctLXNkay11cmwnLFxuICAgICAgICBvcHRzLnNka1VybCxcbiAgICAgICAgJy0tc2Vzc2lvbi1pZCcsXG4gICAgICAgIG9wdHMuc2Vzc2lvbklkLFxuICAgICAgICAnLS1pbnB1dC1mb3JtYXQnLFxuICAgICAgICAnc3RyZWFtLWpzb24nLFxuICAgICAgICAnLS1vdXRwdXQtZm9ybWF0JyxcbiAgICAgICAgJ3N0cmVhbS1qc29uJyxcbiAgICAgICAgJy0tcmVwbGF5LXVzZXItbWVzc2FnZXMnLFxuICAgICAgICAuLi4oZGVwcy52ZXJib3NlID8gWyctLXZlcmJvc2UnXSA6IFtdKSxcbiAgICAgICAgLi4uKGRlYnVnRmlsZSA/IFsnLS1kZWJ1Zy1maWxlJywgZGVidWdGaWxlXSA6IFtdKSxcbiAgICAgICAgLi4uKGRlcHMucGVybWlzc2lvbk1vZGVcbiAgICAgICAgICA/IFsnLS1wZXJtaXNzaW9uLW1vZGUnLCBkZXBzLnBlcm1pc3Npb25Nb2RlXVxuICAgICAgICAgIDogW10pLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBlbnY6IE5vZGVKUy5Qcm9jZXNzRW52ID0ge1xuICAgICAgICAuLi5kZXBzLmVudixcbiAgICAgICAgLy8gU3RyaXAgdGhlIGJyaWRnZSdzIE9BdXRoIHRva2VuIHNvIHRoZSBjaGlsZCBDQyBwcm9jZXNzIHVzZXNcbiAgICAgICAgLy8gdGhlIHNlc3Npb24gYWNjZXNzIHRva2VuIGZvciBpbmZlcmVuY2UgaW5zdGVhZC5cbiAgICAgICAgQ0xBVURFX0NPREVfT0FVVEhfVE9LRU46IHVuZGVmaW5lZCxcbiAgICAgICAgQ0xBVURFX0NPREVfRU5WSVJPTk1FTlRfS0lORDogJ2JyaWRnZScsXG4gICAgICAgIC4uLihkZXBzLnNhbmRib3ggJiYgeyBDTEFVREVfQ09ERV9GT1JDRV9TQU5EQk9YOiAnMScgfSksXG4gICAgICAgIENMQVVERV9DT0RFX1NFU1NJT05fQUNDRVNTX1RPS0VOOiBvcHRzLmFjY2Vzc1Rva2VuLFxuICAgICAgICAvLyB2MTogSHlicmlkVHJhbnNwb3J0IChXUyByZWFkcyArIFBPU1Qgd3JpdGVzKSB0byBTZXNzaW9uLUluZ3Jlc3MuXG4gICAgICAgIC8vIEhhcm1sZXNzIGluIHYyIG1vZGUgXHUyMDE0IHRyYW5zcG9ydFV0aWxzIGNoZWNrcyBDTEFVREVfQ09ERV9VU0VfQ0NSX1YyIGZpcnN0LlxuICAgICAgICBDTEFVREVfQ09ERV9QT1NUX0ZPUl9TRVNTSU9OX0lOR1JFU1NfVjI6ICcxJyxcbiAgICAgICAgLy8gdjI6IFNTRVRyYW5zcG9ydCArIENDUkNsaWVudCB0byBDQ1IncyAvdjEvY29kZS9zZXNzaW9ucy8qIGVuZHBvaW50cy5cbiAgICAgICAgLy8gU2FtZSBlbnYgdmFycyBlbnZpcm9ubWVudC1tYW5hZ2VyIHNldHMgaW4gdGhlIGNvbnRhaW5lciBwYXRoLlxuICAgICAgICAuLi4ob3B0cy51c2VDY3JWMiAmJiB7XG4gICAgICAgICAgQ0xBVURFX0NPREVfVVNFX0NDUl9WMjogJzEnLFxuICAgICAgICAgIENMQVVERV9DT0RFX1dPUktFUl9FUE9DSDogU3RyaW5nKG9wdHMud29ya2VyRXBvY2gpLFxuICAgICAgICB9KSxcbiAgICAgIH1cblxuICAgICAgZGVwcy5vbkRlYnVnKFxuICAgICAgICBgW2JyaWRnZTpzZXNzaW9uXSBTcGF3bmluZyBzZXNzaW9uSWQ9JHtvcHRzLnNlc3Npb25JZH0gc2RrVXJsPSR7b3B0cy5zZGtVcmx9IGFjY2Vzc1Rva2VuPSR7b3B0cy5hY2Nlc3NUb2tlbiA/ICdwcmVzZW50JyA6ICdNSVNTSU5HJ31gLFxuICAgICAgKVxuICAgICAgZGVwcy5vbkRlYnVnKGBbYnJpZGdlOnNlc3Npb25dIENoaWxkIGFyZ3M6ICR7YXJncy5qb2luKCcgJyl9YClcbiAgICAgIGlmIChkZWJ1Z0ZpbGUpIHtcbiAgICAgICAgZGVwcy5vbkRlYnVnKGBbYnJpZGdlOnNlc3Npb25dIERlYnVnIGxvZzogJHtkZWJ1Z0ZpbGV9YClcbiAgICAgIH1cblxuICAgICAgLy8gUGlwZSBhbGwgdGhyZWUgc3RyZWFtczogc3RkaW4gZm9yIGNvbnRyb2wsIHN0ZG91dCBmb3IgTkRKU09OIHBhcnNpbmcsXG4gICAgICAvLyBzdGRlcnIgZm9yIGVycm9yIGNhcHR1cmUgYW5kIGRpYWdub3N0aWNzLlxuICAgICAgY29uc3QgY2hpbGQ6IENoaWxkUHJvY2VzcyA9IHNwYXduKGRlcHMuZXhlY1BhdGgsIGFyZ3MsIHtcbiAgICAgICAgY3dkOiBkaXIsXG4gICAgICAgIHN0ZGlvOiBbJ3BpcGUnLCAncGlwZScsICdwaXBlJ10sXG4gICAgICAgIGVudixcbiAgICAgICAgd2luZG93c0hpZGU6IHRydWUsXG4gICAgICB9KVxuXG4gICAgICBkZXBzLm9uRGVidWcoXG4gICAgICAgIGBbYnJpZGdlOnNlc3Npb25dIHNlc3Npb25JZD0ke29wdHMuc2Vzc2lvbklkfSBwaWQ9JHtjaGlsZC5waWR9YCxcbiAgICAgIClcblxuICAgICAgY29uc3QgYWN0aXZpdGllczogU2Vzc2lvbkFjdGl2aXR5W10gPSBbXVxuICAgICAgbGV0IGN1cnJlbnRBY3Rpdml0eTogU2Vzc2lvbkFjdGl2aXR5IHwgbnVsbCA9IG51bGxcbiAgICAgIGNvbnN0IGxhc3RTdGRlcnI6IHN0cmluZ1tdID0gW11cbiAgICAgIGxldCBzaWdraWxsU2VudCA9IGZhbHNlXG4gICAgICBsZXQgZmlyc3RVc2VyTWVzc2FnZVNlZW4gPSBmYWxzZVxuXG4gICAgICAvLyBCdWZmZXIgc3RkZXJyIGZvciBlcnJvciBkaWFnbm9zdGljc1xuICAgICAgaWYgKGNoaWxkLnN0ZGVycikge1xuICAgICAgICBjb25zdCBzdGRlcnJSbCA9IGNyZWF0ZUludGVyZmFjZSh7IGlucHV0OiBjaGlsZC5zdGRlcnIgfSlcbiAgICAgICAgc3RkZXJyUmwub24oJ2xpbmUnLCBsaW5lID0+IHtcbiAgICAgICAgICAvLyBGb3J3YXJkIHN0ZGVyciB0byBicmlkZ2UncyBzdGRlcnIgaW4gdmVyYm9zZSBtb2RlXG4gICAgICAgICAgaWYgKGRlcHMudmVyYm9zZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUobGluZSArICdcXG4nKVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBSaW5nIGJ1ZmZlciBvZiBsYXN0IE4gbGluZXNcbiAgICAgICAgICBpZiAobGFzdFN0ZGVyci5sZW5ndGggPj0gTUFYX1NUREVSUl9MSU5FUykge1xuICAgICAgICAgICAgbGFzdFN0ZGVyci5zaGlmdCgpXG4gICAgICAgICAgfVxuICAgICAgICAgIGxhc3RTdGRlcnIucHVzaChsaW5lKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyBQYXJzZSBOREpTT04gZnJvbSBjaGlsZCBzdGRvdXRcbiAgICAgIGlmIChjaGlsZC5zdGRvdXQpIHtcbiAgICAgICAgY29uc3QgcmwgPSBjcmVhdGVJbnRlcmZhY2UoeyBpbnB1dDogY2hpbGQuc3Rkb3V0IH0pXG4gICAgICAgIHJsLm9uKCdsaW5lJywgbGluZSA9PiB7XG4gICAgICAgICAgLy8gV3JpdGUgcmF3IE5ESlNPTiB0byB0cmFuc2NyaXB0IGZpbGVcbiAgICAgICAgICBpZiAodHJhbnNjcmlwdFN0cmVhbSkge1xuICAgICAgICAgICAgdHJhbnNjcmlwdFN0cmVhbS53cml0ZShsaW5lICsgJ1xcbicpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gTG9nIGFsbCBtZXNzYWdlcyBmbG93aW5nIGZyb20gdGhlIGNoaWxkIENMSSB0byB0aGUgYnJpZGdlXG4gICAgICAgICAgZGVwcy5vbkRlYnVnKFxuICAgICAgICAgICAgYFticmlkZ2U6d3NdIHNlc3Npb25JZD0ke29wdHMuc2Vzc2lvbklkfSA8PDwgJHtkZWJ1Z1RydW5jYXRlKGxpbmUpfWAsXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgLy8gSW4gdmVyYm9zZSBtb2RlLCBmb3J3YXJkIHJhdyBvdXRwdXQgdG8gc3RkZXJyXG4gICAgICAgICAgaWYgKGRlcHMudmVyYm9zZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUobGluZSArICdcXG4nKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGV4dHJhY3RlZCA9IGV4dHJhY3RBY3Rpdml0aWVzKFxuICAgICAgICAgICAgbGluZSxcbiAgICAgICAgICAgIG9wdHMuc2Vzc2lvbklkLFxuICAgICAgICAgICAgZGVwcy5vbkRlYnVnLFxuICAgICAgICAgIClcbiAgICAgICAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIGV4dHJhY3RlZCkge1xuICAgICAgICAgICAgLy8gTWFpbnRhaW4gcmluZyBidWZmZXJcbiAgICAgICAgICAgIGlmIChhY3Rpdml0aWVzLmxlbmd0aCA+PSBNQVhfQUNUSVZJVElFUykge1xuICAgICAgICAgICAgICBhY3Rpdml0aWVzLnNoaWZ0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjdGl2aXRpZXMucHVzaChhY3Rpdml0eSlcbiAgICAgICAgICAgIGN1cnJlbnRBY3Rpdml0eSA9IGFjdGl2aXR5XG5cbiAgICAgICAgICAgIGRlcHMub25BY3Rpdml0eT8uKG9wdHMuc2Vzc2lvbklkLCBhY3Rpdml0eSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBEZXRlY3QgY29udHJvbF9yZXF1ZXN0IGFuZCByZXBsYXllZCB1c2VyIG1lc3NhZ2VzLlxuICAgICAgICAgIC8vIGV4dHJhY3RBY3Rpdml0aWVzIHBhcnNlcyB0aGUgc2FtZSBsaW5lIGJ1dCBzd2FsbG93cyBwYXJzZSBlcnJvcnNcbiAgICAgICAgICAvLyBhbmQgc2tpcHMgJ3VzZXInIHR5cGUgXHUyMDE0IHJlLXBhcnNlIGhlcmUgaXMgY2hlYXAgKE5ESlNPTiBsaW5lcyBhcmVcbiAgICAgICAgICAvLyBzbWFsbCkgYW5kIGtlZXBzIGVhY2ggcGF0aCBzZWxmLWNvbnRhaW5lZC5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBsZXQgcGFyc2VkOiB1bmtub3duXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBwYXJzZWQgPSBqc29uUGFyc2UobGluZSlcbiAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAvLyBOb24tSlNPTiBsaW5lLCBza2lwIGRldGVjdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcnNlZCAmJiB0eXBlb2YgcGFyc2VkID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICBjb25zdCBtc2cgPSBwYXJzZWQgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cblxuICAgICAgICAgICAgICBpZiAobXNnLnR5cGUgPT09ICdjb250cm9sX3JlcXVlc3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IG1zZy5yZXF1ZXN0IGFzXG4gICAgICAgICAgICAgICAgICB8IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICAgICAgICAgICAgICAgICB8IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIHJlcXVlc3Q/LnN1YnR5cGUgPT09ICdjYW5fdXNlX3Rvb2wnICYmXG4gICAgICAgICAgICAgICAgICBkZXBzLm9uUGVybWlzc2lvblJlcXVlc3RcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIGRlcHMub25QZXJtaXNzaW9uUmVxdWVzdChcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5zZXNzaW9uSWQsXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZCBhcyBQZXJtaXNzaW9uUmVxdWVzdCxcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5hY2Nlc3NUb2tlbixcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaW50ZXJydXB0IGlzIHR1cm4tbGV2ZWw7IHRoZSBjaGlsZCBoYW5kbGVzIGl0IGludGVybmFsbHkgKHByaW50LnRzKVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIG1zZy50eXBlID09PSAndXNlcicgJiZcbiAgICAgICAgICAgICAgICAhZmlyc3RVc2VyTWVzc2FnZVNlZW4gJiZcbiAgICAgICAgICAgICAgICBvcHRzLm9uRmlyc3RVc2VyTWVzc2FnZVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gZXh0cmFjdFVzZXJNZXNzYWdlVGV4dChtc2cpXG4gICAgICAgICAgICAgICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgICAgICAgIGZpcnN0VXNlck1lc3NhZ2VTZWVuID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgb3B0cy5vbkZpcnN0VXNlck1lc3NhZ2UodGV4dClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRvbmUgPSBuZXcgUHJvbWlzZTxTZXNzaW9uRG9uZVN0YXR1cz4ocmVzb2x2ZSA9PiB7XG4gICAgICAgIGNoaWxkLm9uKCdjbG9zZScsIChjb2RlLCBzaWduYWwpID0+IHtcbiAgICAgICAgICAvLyBDbG9zZSB0cmFuc2NyaXB0IHN0cmVhbSBvbiBleGl0XG4gICAgICAgICAgaWYgKHRyYW5zY3JpcHRTdHJlYW0pIHtcbiAgICAgICAgICAgIHRyYW5zY3JpcHRTdHJlYW0uZW5kKClcbiAgICAgICAgICAgIHRyYW5zY3JpcHRTdHJlYW0gPSBudWxsXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNpZ25hbCA9PT0gJ1NJR1RFUk0nIHx8IHNpZ25hbCA9PT0gJ1NJR0lOVCcpIHtcbiAgICAgICAgICAgIGRlcHMub25EZWJ1ZyhcbiAgICAgICAgICAgICAgYFticmlkZ2U6c2Vzc2lvbl0gc2Vzc2lvbklkPSR7b3B0cy5zZXNzaW9uSWR9IGludGVycnVwdGVkIHNpZ25hbD0ke3NpZ25hbH0gcGlkPSR7Y2hpbGQucGlkfWAsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICByZXNvbHZlKCdpbnRlcnJ1cHRlZCcpXG4gICAgICAgICAgfSBlbHNlIGlmIChjb2RlID09PSAwKSB7XG4gICAgICAgICAgICBkZXBzLm9uRGVidWcoXG4gICAgICAgICAgICAgIGBbYnJpZGdlOnNlc3Npb25dIHNlc3Npb25JZD0ke29wdHMuc2Vzc2lvbklkfSBjb21wbGV0ZWQgZXhpdF9jb2RlPTAgcGlkPSR7Y2hpbGQucGlkfWAsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICByZXNvbHZlKCdjb21wbGV0ZWQnKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXBzLm9uRGVidWcoXG4gICAgICAgICAgICAgIGBbYnJpZGdlOnNlc3Npb25dIHNlc3Npb25JZD0ke29wdHMuc2Vzc2lvbklkfSBmYWlsZWQgZXhpdF9jb2RlPSR7Y29kZX0gcGlkPSR7Y2hpbGQucGlkfWAsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICByZXNvbHZlKCdmYWlsZWQnKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjaGlsZC5vbignZXJyb3InLCBlcnIgPT4ge1xuICAgICAgICAgIGRlcHMub25EZWJ1ZyhcbiAgICAgICAgICAgIGBbYnJpZGdlOnNlc3Npb25dIHNlc3Npb25JZD0ke29wdHMuc2Vzc2lvbklkfSBzcGF3biBlcnJvcjogJHtlcnIubWVzc2FnZX1gLFxuICAgICAgICAgIClcbiAgICAgICAgICByZXNvbHZlKCdmYWlsZWQnKVxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgY29uc3QgaGFuZGxlOiBTZXNzaW9uSGFuZGxlID0ge1xuICAgICAgICBzZXNzaW9uSWQ6IG9wdHMuc2Vzc2lvbklkLFxuICAgICAgICBkb25lLFxuICAgICAgICBhY3Rpdml0aWVzLFxuICAgICAgICBhY2Nlc3NUb2tlbjogb3B0cy5hY2Nlc3NUb2tlbixcbiAgICAgICAgbGFzdFN0ZGVycixcbiAgICAgICAgZ2V0IGN1cnJlbnRBY3Rpdml0eSgpOiBTZXNzaW9uQWN0aXZpdHkgfCBudWxsIHtcbiAgICAgICAgICByZXR1cm4gY3VycmVudEFjdGl2aXR5XG4gICAgICAgIH0sXG4gICAgICAgIGtpbGwoKTogdm9pZCB7XG4gICAgICAgICAgaWYgKCFjaGlsZC5raWxsZWQpIHtcbiAgICAgICAgICAgIGRlcHMub25EZWJ1ZyhcbiAgICAgICAgICAgICAgYFticmlkZ2U6c2Vzc2lvbl0gU2VuZGluZyBTSUdURVJNIHRvIHNlc3Npb25JZD0ke29wdHMuc2Vzc2lvbklkfSBwaWQ9JHtjaGlsZC5waWR9YCxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC8vIE9uIFdpbmRvd3MsIGNoaWxkLmtpbGwoJ1NJR1RFUk0nKSB0aHJvd3M7IHVzZSBkZWZhdWx0IHNpZ25hbC5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInKSB7XG4gICAgICAgICAgICAgIGNoaWxkLmtpbGwoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2hpbGQua2lsbCgnU0lHVEVSTScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmb3JjZUtpbGwoKTogdm9pZCB7XG4gICAgICAgICAgLy8gVXNlIHNlcGFyYXRlIGZsYWcgYmVjYXVzZSBjaGlsZC5raWxsZWQgaXMgc2V0IHdoZW4ga2lsbCgpIGlzIGNhbGxlZCxcbiAgICAgICAgICAvLyBub3Qgd2hlbiB0aGUgcHJvY2VzcyBleGl0cy4gV2UgbmVlZCB0byBzZW5kIFNJR0tJTEwgZXZlbiBhZnRlciBTSUdURVJNLlxuICAgICAgICAgIGlmICghc2lna2lsbFNlbnQgJiYgY2hpbGQucGlkKSB7XG4gICAgICAgICAgICBzaWdraWxsU2VudCA9IHRydWVcbiAgICAgICAgICAgIGRlcHMub25EZWJ1ZyhcbiAgICAgICAgICAgICAgYFticmlkZ2U6c2Vzc2lvbl0gU2VuZGluZyBTSUdLSUxMIHRvIHNlc3Npb25JZD0ke29wdHMuc2Vzc2lvbklkfSBwaWQ9JHtjaGlsZC5waWR9YCxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInKSB7XG4gICAgICAgICAgICAgIGNoaWxkLmtpbGwoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2hpbGQua2lsbCgnU0lHS0lMTCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3cml0ZVN0ZGluKGRhdGE6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICAgIGlmIChjaGlsZC5zdGRpbiAmJiAhY2hpbGQuc3RkaW4uZGVzdHJveWVkKSB7XG4gICAgICAgICAgICBkZXBzLm9uRGVidWcoXG4gICAgICAgICAgICAgIGBbYnJpZGdlOndzXSBzZXNzaW9uSWQ9JHtvcHRzLnNlc3Npb25JZH0gPj4+ICR7ZGVidWdUcnVuY2F0ZShkYXRhKX1gLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY2hpbGQuc3RkaW4ud3JpdGUoZGF0YSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZUFjY2Vzc1Rva2VuKHRva2VuOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgICBoYW5kbGUuYWNjZXNzVG9rZW4gPSB0b2tlblxuICAgICAgICAgIC8vIFNlbmQgdGhlIGZyZXNoIHRva2VuIHRvIHRoZSBjaGlsZCBwcm9jZXNzIHZpYSBzdGRpbi4gVGhlIGNoaWxkJ3NcbiAgICAgICAgICAvLyBTdHJ1Y3R1cmVkSU8gaGFuZGxlcyB1cGRhdGVfZW52aXJvbm1lbnRfdmFyaWFibGVzIG1lc3NhZ2VzIGJ5XG4gICAgICAgICAgLy8gc2V0dGluZyBwcm9jZXNzLmVudiBkaXJlY3RseSwgc28gZ2V0U2Vzc2lvbkluZ3Jlc3NBdXRoVG9rZW4oKVxuICAgICAgICAgIC8vIHBpY2tzIHVwIHRoZSBuZXcgdG9rZW4gb24gdGhlIG5leHQgcmVmcmVzaEhlYWRlcnMgY2FsbC5cbiAgICAgICAgICBoYW5kbGUud3JpdGVTdGRpbihcbiAgICAgICAgICAgIGpzb25TdHJpbmdpZnkoe1xuICAgICAgICAgICAgICB0eXBlOiAndXBkYXRlX2Vudmlyb25tZW50X3ZhcmlhYmxlcycsXG4gICAgICAgICAgICAgIHZhcmlhYmxlczogeyBDTEFVREVfQ09ERV9TRVNTSU9OX0FDQ0VTU19UT0tFTjogdG9rZW4gfSxcbiAgICAgICAgICAgIH0pICsgJ1xcbicsXG4gICAgICAgICAgKVxuICAgICAgICAgIGRlcHMub25EZWJ1ZyhcbiAgICAgICAgICAgIGBbYnJpZGdlOnNlc3Npb25dIFNlbnQgdG9rZW4gcmVmcmVzaCB2aWEgc3RkaW4gZm9yIHNlc3Npb25JZD0ke29wdHMuc2Vzc2lvbklkfWAsXG4gICAgICAgICAgKVxuICAgICAgICB9LFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaGFuZGxlXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgeyBleHRyYWN0QWN0aXZpdGllcyBhcyBfZXh0cmFjdEFjdGl2aXRpZXNGb3JUZXN0aW5nIH1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBNUJBLFNBQVMsa0JBQWtCO0FBQzNCLFNBQVMsVUFBVSxVQUFBQSxlQUFjO0FBQ2pDLFNBQVMsVUFBVSxRQUFBQyxPQUFNLGVBQWU7OztBQ0h4QztBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFvQkEsSUFBTSxhQUFhO0FBQUEsRUFDakIsTUFBTTtBQUFBLEVBQ04sc0JBQXNCO0FBQUEsRUFDdEIsT0FBTztBQUNUO0FBR0EsZUFBZSxXQUFXLEtBQWdDO0FBQ3hELFFBQU0sS0FBSyxNQUFNLFNBQVcsS0FBSyxVQUFVO0FBQzNDLFNBQU8sR0FBRyxNQUFNLElBQUksRUFBRSxPQUFPLENBQUMsU0FBaUIsS0FBSyxTQUFTLENBQUM7QUFDaEU7QUFFTyxTQUFTLG1CQUFtQixTQUdsQjtBQUNmLFFBQU0sUUFBUSxRQUFRLFVBQVUsQ0FBQyxNQUFjLFFBQVEsT0FBTyxNQUFNLENBQUM7QUFDckUsUUFBTSxVQUFVLFFBQVE7QUFHeEIsTUFBSSxrQkFBa0I7QUFHdEIsTUFBSSxlQUE0QjtBQUNoQyxNQUFJLG1CQUFtQjtBQUN2QixNQUFJLFdBQVc7QUFDZixNQUFJLFNBQVM7QUFDYixNQUFJLGVBQWU7QUFHbkIsTUFBSSxhQUFhO0FBQ2pCLE1BQUksbUJBQW1CO0FBQ3ZCLE1BQUksc0JBQXNCO0FBQzFCLE1BQUksbUJBQWtDO0FBR3RDLE1BQUksVUFBb0IsQ0FBQztBQUN6QixNQUFJLFlBQVk7QUFHaEIsTUFBSSxrQkFBaUM7QUFDckMsTUFBSSxlQUFlO0FBR25CLE1BQUksZ0JBQWdCO0FBQ3BCLE1BQUksYUFBYTtBQUVqQixNQUFJLG1CQUFtRDtBQUN2RCxNQUFJLFlBQXVCO0FBRzNCLFFBQU0scUJBQXFCLG9CQUFJLElBRzdCO0FBR0YsTUFBSSxrQkFBeUQ7QUFDN0QsTUFBSSxpQkFBaUI7QUFPckIsV0FBUyxpQkFBaUIsTUFBc0I7QUFFOUMsVUFBTSxPQUFPLFFBQVEsT0FBTyxXQUFXO0FBQ3ZDLFFBQUksUUFBUTtBQUVaLGVBQVcsV0FBVyxLQUFLLE1BQU0sSUFBSSxHQUFHO0FBQ3RDLFVBQUksUUFBUSxXQUFXLEdBQUc7QUFFeEI7QUFDQTtBQUFBLE1BQ0Y7QUFDQSxZQUFNLFFBQVEsWUFBWSxPQUFPO0FBQ2pDLGVBQVMsS0FBSyxJQUFJLEdBQUcsS0FBSyxLQUFLLFFBQVEsSUFBSSxDQUFDO0FBQUEsSUFDOUM7QUFHQSxRQUFJLEtBQUssU0FBUyxJQUFJLEdBQUc7QUFDdkI7QUFBQSxJQUNGO0FBQ0EsV0FBTztBQUFBLEVBQ1Q7QUFHQSxXQUFTLFlBQVksTUFBb0I7QUFDdkMsVUFBTSxJQUFJO0FBQ1YsdUJBQW1CLGlCQUFpQixJQUFJO0FBQUEsRUFDMUM7QUFHQSxXQUFTLG1CQUF5QjtBQUNoQyxRQUFJLG1CQUFtQixFQUFHO0FBQzFCLG9CQUFnQixzQ0FBc0MsZUFBZSxFQUFFO0FBRXZFLFVBQU0sUUFBUSxlQUFlLEdBQUc7QUFDaEMsVUFBTSxRQUFRO0FBQ2Qsc0JBQWtCO0FBQUEsRUFDcEI7QUFHQSxXQUFTLFNBQVMsTUFBb0I7QUFDcEMscUJBQWlCO0FBQ2pCLFVBQU0sSUFBSTtBQUFBLEVBQ1o7QUFHQSxXQUFTLGFBQWEsS0FBbUI7QUFDdkMsZUFBVyxHQUFHLEVBQ1gsS0FBSyxXQUFTO0FBQ2IsZ0JBQVU7QUFDVix1QkFBaUI7QUFBQSxJQUNuQixDQUFDLEVBQ0EsTUFBTSxPQUFLO0FBQ1Ysc0JBQWdCLDhCQUE4QixDQUFDLElBQUksRUFBRSxPQUFPLFFBQVEsQ0FBQztBQUFBLElBQ3ZFLENBQUM7QUFBQSxFQUNMO0FBR0EsV0FBUyx1QkFBNkI7QUFDcEMscUJBQWlCO0FBRWpCLFVBQU0sUUFDSixzQkFBc0IsaUJBQWlCLHNCQUFzQixNQUFNO0FBQ3JFLFFBQUksU0FBUztBQUNiLFFBQUksVUFBVTtBQUNaLGdCQUFVLGVBQU0sSUFBSSxRQUFVLElBQUksZUFBTSxJQUFJLFFBQVE7QUFBQSxJQUN0RDtBQUNBLFFBQUksUUFBUTtBQUNWLGdCQUFVLGVBQU0sSUFBSSxRQUFVLElBQUksZUFBTSxJQUFJLE1BQU07QUFBQSxJQUNwRDtBQUNBO0FBQUEsTUFDRSxHQUFHLGVBQU0sT0FBTyxLQUFLLENBQUMsSUFBSSxlQUFNLE9BQU8sWUFBWSxDQUFDLEdBQUcsTUFBTTtBQUFBO0FBQUEsSUFDL0Q7QUFBQSxFQUNGO0FBR0EsV0FBUyxrQkFBd0I7QUFDL0IsbUJBQWU7QUFDZix5QkFBcUI7QUFDckIsc0JBQWtCLFlBQVksTUFBTTtBQUNsQztBQUNBLDJCQUFxQjtBQUFBLElBQ3ZCLEdBQUcsR0FBRztBQUFBLEVBQ1I7QUFHQSxXQUFTLGlCQUF1QjtBQUM5QixRQUFJLGlCQUFpQjtBQUNuQixvQkFBYyxlQUFlO0FBQzdCLHdCQUFrQjtBQUFBLElBQ3BCO0FBQUEsRUFDRjtBQUdBLFdBQVMsbUJBQXlCO0FBQ2hDLFFBQUksaUJBQWlCLGtCQUFrQixpQkFBaUIsVUFBVTtBQUloRTtBQUFBLElBQ0Y7QUFFQSxxQkFBaUI7QUFFakIsVUFBTSxTQUFTLGlCQUFpQjtBQUdoQyxRQUFJLFdBQVc7QUFDYixpQkFBVyxRQUFRLFNBQVM7QUFDMUIsb0JBQVksR0FBRyxlQUFNLElBQUksSUFBSSxDQUFDO0FBQUEsQ0FBSTtBQUFBLE1BQ3BDO0FBQUEsSUFDRjtBQUdBLFVBQU0sWUFBWTtBQUNsQixVQUFNLGlCQUFpQixTQUFTLGVBQU0sUUFBUSxlQUFNO0FBQ3BELFVBQU0sWUFBWSxTQUFTLGVBQU0sUUFBUSxlQUFNO0FBQy9DLFVBQU0sWUFBWSxVQUFVLGdCQUFnQjtBQUc1QyxRQUFJLFNBQVM7QUFDYixRQUFJLFVBQVU7QUFDWixnQkFBVSxlQUFNLElBQUksUUFBVSxJQUFJLGVBQU0sSUFBSSxRQUFRO0FBQUEsSUFDdEQ7QUFHQSxRQUFJLFVBQVUsY0FBYyxZQUFZO0FBQ3RDLGdCQUFVLGVBQU0sSUFBSSxRQUFVLElBQUksZUFBTSxJQUFJLE1BQU07QUFBQSxJQUNwRDtBQUVBLFFBQUksUUFBUSxJQUFJLGNBQWMsU0FBUyxjQUFjO0FBQ25EO0FBQUEsUUFDRSxHQUFHLGVBQU0sT0FBTyxrQkFBa0IsQ0FBQyxJQUFJLGVBQU0sSUFBSSxZQUFZLENBQUM7QUFBQTtBQUFBLE1BQ2hFO0FBQUEsSUFDRjtBQUNBLGdCQUFZLEdBQUcsZUFBZSxTQUFTLENBQUMsSUFBSSxTQUFTLEdBQUcsTUFBTTtBQUFBLENBQUk7QUFHbEUsUUFBSSxhQUFhLEdBQUc7QUFDbEIsWUFBTSxXQUNKLGNBQWMsYUFDVix5REFDQTtBQUNOO0FBQUEsUUFDRSxPQUFPLGVBQU0sSUFBSSxhQUFhLGFBQWEsSUFBSSxVQUFVLFNBQVcsUUFBUSxFQUFFLENBQUM7QUFBQTtBQUFBLE1BQ2pGO0FBQ0EsaUJBQVcsQ0FBQyxFQUFFLElBQUksS0FBSyxvQkFBb0I7QUFDekMsY0FBTSxZQUFZLEtBQUssUUFDbkIsZ0JBQWUsS0FBSyxPQUFPLEVBQUUsSUFDN0IsZUFBTSxJQUFJLFVBQVU7QUFDeEIsY0FBTSxjQUFjLGlCQUFpQixXQUFXLEtBQUssR0FBRztBQUN4RCxjQUFNLE1BQU0sS0FBSztBQUNqQixjQUFNLFVBQVUsT0FBTyxJQUFJLFNBQVMsWUFBWSxJQUFJLFNBQVM7QUFDN0QsY0FBTSxVQUFVLFVBQ1osZUFBTSxJQUFJLElBQUksZ0JBQWUsSUFBSSxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQy9DO0FBQ0osb0JBQVksT0FBTyxXQUFXLEdBQUcsT0FBTztBQUFBLENBQy9DO0FBQUEsTUFDSztBQUFBLElBQ0Y7QUFHQSxRQUFJLGVBQWUsR0FBRztBQUNwQixZQUFNLFdBQ0osY0FBYyxtQkFDViw0Q0FDQSxjQUFjLGFBQ1osYUFBYSxhQUFhLGlFQUMxQixhQUFhLGFBQWE7QUFDbEMsa0JBQVksT0FBTyxlQUFNLElBQUksUUFBUSxDQUFDO0FBQUEsQ0FBSTtBQUFBLElBQzVDO0FBR0EsUUFDRSxlQUFlLEtBQ2YsQ0FBQyxVQUNELG1CQUNBLEtBQUssSUFBSSxJQUFJLGVBQWUsd0JBQzVCO0FBQ0Esa0JBQVksS0FBSyxlQUFNLElBQUksZ0JBQWUsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO0FBQUEsQ0FBSTtBQUFBLElBQ3JFO0FBR0EsVUFBTSxNQUFNLG9CQUFvQjtBQUNoQyxRQUFJLEtBQUs7QUFDUCxrQkFBWSxJQUFJO0FBQ2hCLFlBQU0sYUFBYSxTQUNmLG9CQUFvQixHQUFHLElBQ3ZCLHNCQUFzQixHQUFHO0FBQzdCLFlBQU0sU0FBUyxZQUNYLGVBQU0sSUFBSSxPQUFPLHVCQUF1QixJQUN4QyxlQUFNLElBQUksT0FBTyx1QkFBdUI7QUFDNUMsWUFBTSxhQUFhLG1CQUNmLGVBQU0sSUFBSSxPQUFPLDhCQUFnQyxJQUNqRDtBQUNKLGtCQUFZLEdBQUcsZUFBTSxJQUFJLFVBQVUsQ0FBQztBQUFBLENBQUk7QUFDeEMsa0JBQVksR0FBRyxNQUFNLEdBQUcsVUFBVTtBQUFBLENBQUk7QUFBQSxJQUN4QztBQUFBLEVBQ0Y7QUFFQSxTQUFPO0FBQUEsSUFDTCxZQUFZLFFBQXNCLGVBQTZCO0FBQzdELHlCQUFtQixPQUFPO0FBQzFCLDRCQUFzQjtBQUN0QixtQkFBYSxzQkFBc0IsZUFBZSxnQkFBZ0I7QUFDbEUsbUJBQWEsVUFBVTtBQUV2QixVQUFJLFNBQVM7QUFDWCxjQUFNLGVBQU0sSUFBSSxnQkFBZ0IsSUFBSSxLQUFLLE1BQU0sT0FBTztBQUFBLENBQUk7QUFBQSxNQUM1RDtBQUNBLFVBQUksU0FBUztBQUNYLFlBQUksT0FBTyxjQUFjLGtCQUFrQjtBQUN6QyxnQkFBTSxlQUFNLElBQUksY0FBYyxJQUFJLEdBQUcsT0FBTyxTQUFTO0FBQUEsQ0FBSTtBQUN6RDtBQUFBLFlBQ0UsZUFBTSxJQUFJLDJCQUEyQixJQUFJLEdBQUcsT0FBTyxXQUFXO0FBQUE7QUFBQSxVQUNoRTtBQUFBLFFBQ0Y7QUFDQSxjQUFNLGVBQU0sSUFBSSxrQkFBa0IsSUFBSSxHQUFHLGFBQWE7QUFBQSxDQUFJO0FBQUEsTUFDNUQ7QUFDQSxVQUFJLE9BQU8sU0FBUztBQUNsQixjQUFNLGVBQU0sSUFBSSxXQUFXLElBQUksR0FBRyxlQUFNLE1BQU0sU0FBUyxDQUFDO0FBQUEsQ0FBSTtBQUFBLE1BQzlEO0FBQ0EsWUFBTSxJQUFJO0FBR1Ysc0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUVBLGdCQUFnQixXQUFtQixRQUFzQjtBQUN2RCxVQUFJLFNBQVM7QUFDWCxjQUFNLFFBQVEsZ0JBQWUsUUFBUSxFQUFFO0FBQ3ZDO0FBQUEsVUFDRSxlQUFNLElBQUksSUFBSSxVQUFVLENBQUMsR0FBRyxJQUMxQixxQkFBcUIsZUFBTSxNQUFNLElBQUksS0FBSyxHQUFHLENBQUMsS0FBSyxlQUFNLElBQUksU0FBUyxDQUFDO0FBQUE7QUFBQSxRQUMzRTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFFQSxtQkFBbUIsV0FBbUIsWUFBMEI7QUFDOUQ7QUFBQSxRQUNFLGVBQU0sSUFBSSxJQUFJLFVBQVUsQ0FBQyxHQUFHLElBQzFCLFlBQVksZUFBTSxNQUFNLFdBQVcsQ0FBQyxLQUFLLGVBQWUsVUFBVSxDQUFDLEtBQUssZUFBTSxJQUFJLFNBQVMsQ0FBQztBQUFBO0FBQUEsTUFDaEc7QUFBQSxJQUNGO0FBQUEsSUFFQSxpQkFBaUIsV0FBbUIsT0FBcUI7QUFDdkQ7QUFBQSxRQUNFLGVBQU0sSUFBSSxJQUFJLFVBQVUsQ0FBQyxHQUFHLElBQzFCLFlBQVksZUFBTSxJQUFJLFFBQVEsQ0FBQyxLQUFLLEtBQUssSUFBSSxlQUFNLElBQUksU0FBUyxDQUFDO0FBQUE7QUFBQSxNQUNyRTtBQUFBLElBQ0Y7QUFBQSxJQUVBLFVBQVUsU0FBdUI7QUFDL0IsZUFBUyxlQUFNLElBQUksSUFBSSxVQUFVLENBQUMsR0FBRyxJQUFJLElBQUksT0FBTztBQUFBLENBQUk7QUFBQSxJQUMxRDtBQUFBLElBRUEsV0FBVyxTQUF1QjtBQUNoQyxVQUFJLFNBQVM7QUFDWCxpQkFBUyxlQUFNLElBQUksSUFBSSxVQUFVLENBQUMsS0FBSyxPQUFPLEVBQUUsSUFBSSxJQUFJO0FBQUEsTUFDMUQ7QUFBQSxJQUNGO0FBQUEsSUFFQSxTQUFTLFNBQXVCO0FBQzlCLGVBQVMsZUFBTSxJQUFJLElBQUksVUFBVSxDQUFDLFlBQVksT0FBTyxFQUFFLElBQUksSUFBSTtBQUFBLElBQ2pFO0FBQUEsSUFFQSxlQUFlLGdCQUE4QjtBQUMzQztBQUFBLFFBQ0UsZUFBTSxJQUFJLElBQUksVUFBVSxDQUFDLEdBQUcsSUFDMUIsSUFBSSxlQUFNLE1BQU0sYUFBYSxDQUFDLFVBQVUsZUFBZSxjQUFjLENBQUM7QUFBQTtBQUFBLE1BQzFFO0FBQUEsSUFDRjtBQUFBLElBRUEsWUFBWSxNQUFjLFlBQTBCO0FBQ2xELGlCQUFXO0FBQ1gsZUFBUztBQUFBLElBQ1g7QUFBQSxJQUVBLGdCQUFnQixNQUFvQjtBQUNsQyxxQkFBZTtBQUFBLElBQ2pCO0FBQUEsSUFFQSxtQkFBeUI7QUFDdkIscUJBQWU7QUFFZixxQkFBZTtBQUNmLHlCQUFtQjtBQUNuQix3QkFBa0I7QUFDbEIscUJBQWU7QUFDZix5QkFBbUI7QUFDbkIsbUJBQWEsVUFBVTtBQUN2Qix1QkFBaUI7QUFBQSxJQUNuQjtBQUFBLElBRUEsWUFBWSxXQUF5QjtBQUNuQyxxQkFBZTtBQUNmLHFCQUFlO0FBQ2YseUJBQW1CO0FBQ25CLHdCQUFrQjtBQUNsQixxQkFBZTtBQUdmLFVBQUksY0FBYyxHQUFHO0FBQ25CLDJCQUFtQjtBQUFBLFVBQ2pCO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQ0EscUJBQWEsZ0JBQWdCO0FBQUEsTUFDL0I7QUFDQSx1QkFBaUI7QUFBQSxJQUNuQjtBQUFBLElBRUEseUJBQXlCLFVBQWtCLFlBQTBCO0FBQ25FLHFCQUFlO0FBQ2YsdUJBQWlCO0FBQ2pCLHFCQUFlO0FBR2YsVUFBSSxXQUFXO0FBQ2IsbUJBQVcsUUFBUSxTQUFTO0FBQzFCLHNCQUFZLEdBQUcsZUFBTSxJQUFJLElBQUksQ0FBQztBQUFBLENBQUk7QUFBQSxRQUNwQztBQUFBLE1BQ0Y7QUFFQSxZQUFNLFFBQ0osc0JBQXNCLGlCQUFpQixzQkFBc0IsTUFBTTtBQUNyRTtBQUNBO0FBQUEsUUFDRSxHQUFHLGVBQU0sT0FBTyxLQUFLLENBQUMsSUFBSSxlQUFNLE9BQU8sY0FBYyxDQUFDLElBQUksZUFBTSxJQUFJLE1BQVEsQ0FBQyxJQUFJLGVBQU0sSUFBSSxlQUFlLFFBQVEsRUFBRSxDQUFDLElBQUksZUFBTSxJQUFJLE1BQVEsQ0FBQyxJQUFJLGVBQU0sSUFBSSxnQkFBZ0IsVUFBVSxFQUFFLENBQUM7QUFBQTtBQUFBLE1BQ3pMO0FBQUEsSUFDRjtBQUFBLElBRUEsbUJBQW1CLE9BQXFCO0FBQ3RDLHFCQUFlO0FBQ2YsdUJBQWlCO0FBQ2pCLHFCQUFlO0FBRWYsVUFBSSxTQUFTO0FBQ2IsVUFBSSxVQUFVO0FBQ1osa0JBQVUsZUFBTSxJQUFJLFFBQVUsSUFBSSxlQUFNLElBQUksUUFBUTtBQUFBLE1BQ3REO0FBQ0EsVUFBSSxRQUFRO0FBQ1Ysa0JBQVUsZUFBTSxJQUFJLFFBQVUsSUFBSSxlQUFNLElBQUksTUFBTTtBQUFBLE1BQ3BEO0FBRUE7QUFBQSxRQUNFLEdBQUcsZUFBTSxJQUFJLHVCQUF1QixDQUFDLElBQUksZUFBTSxJQUFJLHVCQUF1QixDQUFDLEdBQUcsTUFBTTtBQUFBO0FBQUEsTUFDdEY7QUFDQSxrQkFBWSxHQUFHLGVBQU0sSUFBSSxrQkFBa0IsQ0FBQztBQUFBLENBQUk7QUFFaEQsVUFBSSxPQUFPO0FBQ1Qsb0JBQVksR0FBRyxlQUFNLElBQUksS0FBSyxDQUFDO0FBQUEsQ0FBSTtBQUFBLE1BQ3JDO0FBQUEsSUFDRjtBQUFBLElBRUEsb0JBQ0UsWUFDQSxVQUNBLFVBQ0EsUUFDTTtBQUVOLFVBQUksU0FBUyxTQUFTLGNBQWM7QUFDbEMsMEJBQWtCLFNBQVM7QUFDM0IsdUJBQWUsS0FBSyxJQUFJO0FBQUEsTUFDMUI7QUFDQSx1QkFBaUI7QUFBQSxJQUNuQjtBQUFBLElBRUEsY0FBb0I7QUFDbEIscUJBQWU7QUFDZix1QkFBaUI7QUFBQSxJQUNuQjtBQUFBLElBRUEsV0FBaUI7QUFDZixrQkFBWSxDQUFDO0FBQ2IsdUJBQWlCO0FBQUEsSUFDbkI7QUFBQSxJQUVBLG1CQUFtQixRQUFnQixLQUFhLE1BQXVCO0FBQ3JFLFVBQUksa0JBQWtCLFVBQVUsZUFBZSxPQUFPLGNBQWM7QUFDbEU7QUFDRixzQkFBZ0I7QUFDaEIsbUJBQWE7QUFDYixrQkFBWTtBQUFBLElBR2Q7QUFBQSxJQUVBLG9CQUFvQixNQUE0QztBQUM5RCxVQUFJLHFCQUFxQixLQUFNO0FBQy9CLHlCQUFtQjtBQUtuQixVQUFJLEtBQU0sYUFBWTtBQUFBLElBQ3hCO0FBQUEsSUFFQSxXQUFXLFdBQW1CLEtBQW1CO0FBQy9DLHlCQUFtQixJQUFJLFdBQVcsRUFBRSxJQUFJLENBQUM7QUFBQSxJQUMzQztBQUFBLElBRUEsc0JBQXNCLFdBQW1CLFVBQWlDO0FBQ3hFLFlBQU0sT0FBTyxtQkFBbUIsSUFBSSxTQUFTO0FBQzdDLFVBQUksQ0FBQyxLQUFNO0FBQ1gsV0FBSyxXQUFXO0FBQUEsSUFDbEI7QUFBQSxJQUVBLGdCQUFnQixXQUFtQixPQUFxQjtBQUN0RCxZQUFNLE9BQU8sbUJBQW1CLElBQUksU0FBUztBQUM3QyxVQUFJLENBQUMsS0FBTTtBQUNYLFdBQUssUUFBUTtBQUdiLFVBQUksaUJBQWlCLGtCQUFrQixpQkFBaUIsU0FBVTtBQUNsRSxVQUFJLGVBQWUsR0FBRztBQUVwQix1QkFBZTtBQUNmLDJCQUFtQixnQkFBZSxPQUFPLEVBQUU7QUFBQSxNQUM3QztBQUNBLHVCQUFpQjtBQUFBLElBQ25CO0FBQUEsSUFFQSxjQUFjLFdBQXlCO0FBQ3JDLHlCQUFtQixPQUFPLFNBQVM7QUFBQSxJQUNyQztBQUFBLElBRUEsaUJBQXVCO0FBR3JCLFVBQUksaUJBQWlCLGtCQUFrQixpQkFBaUIsU0FBVTtBQUNsRSx1QkFBaUI7QUFBQSxJQUNuQjtBQUFBLEVBQ0Y7QUFDRjs7O0FEamZBO0FBR0E7OztBRTlCQTtBQUNBO0FBTkEsU0FBNEIsYUFBYTtBQUN6QyxTQUFTLHlCQUEyQztBQUNwRCxTQUFTLGNBQWM7QUFDdkIsU0FBUyxTQUFTLFlBQVk7QUFDOUIsU0FBUyx1QkFBdUI7QUFXaEMsSUFBTSxpQkFBaUI7QUFDdkIsSUFBTSxtQkFBbUI7QUFPbEIsU0FBUyxlQUFlLElBQW9CO0FBQ2pELFNBQU8sR0FBRyxRQUFRLG1CQUFtQixHQUFHO0FBQzFDO0FBNENBLElBQU0sYUFBcUM7QUFBQSxFQUN6QyxNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQUEsRUFDTixXQUFXO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixVQUFVO0FBQUEsRUFDVixXQUFXO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixjQUFjO0FBQUEsRUFDZCxlQUFlO0FBQUEsRUFDZixjQUFjO0FBQUEsRUFDZCxVQUFVO0FBQUEsRUFDVixVQUFVO0FBQUEsRUFDVixVQUFVO0FBQUEsRUFDVixrQkFBa0I7QUFBQSxFQUNsQixLQUFLO0FBQ1A7QUFFQSxTQUFTLFlBQVksTUFBYyxPQUF3QztBQUN6RSxRQUFNLE9BQU8sV0FBVyxJQUFJLEtBQUs7QUFDakMsUUFBTSxTQUNILE1BQU0sYUFDTixNQUFNLFlBQ04sTUFBTSxXQUNOLE1BQU0sU0FBZ0MsTUFBTSxHQUFHLEVBQUUsS0FDakQsTUFBTSxPQUNOLE1BQU0sU0FDUDtBQUNGLE1BQUksUUFBUTtBQUNWLFdBQU8sR0FBRyxJQUFJLElBQUksTUFBTTtBQUFBLEVBQzFCO0FBQ0EsU0FBTztBQUNUO0FBRUEsU0FBUyxrQkFDUCxNQUNBLFdBQ0EsU0FDbUI7QUFDbkIsTUFBSTtBQUNKLE1BQUk7QUFDRixhQUFTLFVBQVUsSUFBSTtBQUFBLEVBQ3pCLFFBQVE7QUFDTixXQUFPLENBQUM7QUFBQSxFQUNWO0FBRUEsTUFBSSxDQUFDLFVBQVUsT0FBTyxXQUFXLFVBQVU7QUFDekMsV0FBTyxDQUFDO0FBQUEsRUFDVjtBQUVBLFFBQU0sTUFBTTtBQUNaLFFBQU0sYUFBZ0MsQ0FBQztBQUN2QyxRQUFNLE1BQU0sS0FBSyxJQUFJO0FBRXJCLFVBQVEsSUFBSSxNQUFNO0FBQUEsSUFDaEIsS0FBSyxhQUFhO0FBQ2hCLFlBQU0sVUFBVSxJQUFJO0FBQ3BCLFVBQUksQ0FBQyxRQUFTO0FBQ2QsWUFBTSxVQUFVLFFBQVE7QUFDeEIsVUFBSSxDQUFDLE1BQU0sUUFBUSxPQUFPLEVBQUc7QUFFN0IsaUJBQVcsU0FBUyxTQUFTO0FBQzNCLFlBQUksQ0FBQyxTQUFTLE9BQU8sVUFBVSxTQUFVO0FBQ3pDLGNBQU0sSUFBSTtBQUVWLFlBQUksRUFBRSxTQUFTLFlBQVk7QUFDekIsZ0JBQU0sT0FBUSxFQUFFLFFBQW1CO0FBQ25DLGdCQUFNLFFBQVMsRUFBRSxTQUFxQyxDQUFDO0FBQ3ZELGdCQUFNLFVBQVUsWUFBWSxNQUFNLEtBQUs7QUFDdkMscUJBQVcsS0FBSztBQUFBLFlBQ2QsTUFBTTtBQUFBLFlBQ047QUFBQSxZQUNBLFdBQVc7QUFBQSxVQUNiLENBQUM7QUFDRDtBQUFBLFlBQ0UsK0JBQStCLFNBQVMsa0JBQWtCLElBQUksSUFBSSxhQUFhLEtBQUssQ0FBQztBQUFBLFVBQ3ZGO0FBQUEsUUFDRixXQUFXLEVBQUUsU0FBUyxRQUFRO0FBQzVCLGdCQUFNLE9BQVEsRUFBRSxRQUFtQjtBQUNuQyxjQUFJLEtBQUssU0FBUyxHQUFHO0FBQ25CLHVCQUFXLEtBQUs7QUFBQSxjQUNkLE1BQU07QUFBQSxjQUNOLFNBQVMsS0FBSyxNQUFNLEdBQUcsRUFBRTtBQUFBLGNBQ3pCLFdBQVc7QUFBQSxZQUNiLENBQUM7QUFDRDtBQUFBLGNBQ0UsK0JBQStCLFNBQVMsVUFBVSxLQUFLLE1BQU0sR0FBRyxHQUFHLENBQUM7QUFBQSxZQUN0RTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUNBO0FBQUEsSUFDRjtBQUFBLElBQ0EsS0FBSyxVQUFVO0FBQ2IsWUFBTSxVQUFVLElBQUk7QUFDcEIsVUFBSSxZQUFZLFdBQVc7QUFDekIsbUJBQVcsS0FBSztBQUFBLFVBQ2QsTUFBTTtBQUFBLFVBQ04sU0FBUztBQUFBLFVBQ1QsV0FBVztBQUFBLFFBQ2IsQ0FBQztBQUNEO0FBQUEsVUFDRSwrQkFBK0IsU0FBUztBQUFBLFFBQzFDO0FBQUEsTUFDRixXQUFXLFNBQVM7QUFDbEIsY0FBTSxTQUFTLElBQUk7QUFDbkIsY0FBTSxlQUFlLFNBQVMsQ0FBQyxLQUFLLFVBQVUsT0FBTztBQUNyRCxtQkFBVyxLQUFLO0FBQUEsVUFDZCxNQUFNO0FBQUEsVUFDTixTQUFTO0FBQUEsVUFDVCxXQUFXO0FBQUEsUUFDYixDQUFDO0FBQ0Q7QUFBQSxVQUNFLCtCQUErQixTQUFTLG1CQUFtQixPQUFPLFdBQVcsWUFBWTtBQUFBLFFBQzNGO0FBQUEsTUFDRixPQUFPO0FBQ0w7QUFBQSxVQUNFLCtCQUErQixTQUFTO0FBQUEsUUFDMUM7QUFBQSxNQUNGO0FBQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUNFO0FBQUEsRUFDSjtBQUVBLFNBQU87QUFDVDtBQU9BLFNBQVMsdUJBQ1AsS0FDb0I7QUFHcEIsTUFBSSxJQUFJLHNCQUFzQixRQUFRLElBQUksZUFBZSxJQUFJO0FBQzNELFdBQU87QUFFVCxRQUFNLFVBQVUsSUFBSTtBQUNwQixRQUFNLFVBQVUsU0FBUztBQUN6QixNQUFJO0FBQ0osTUFBSSxPQUFPLFlBQVksVUFBVTtBQUMvQixXQUFPO0FBQUEsRUFDVCxXQUFXLE1BQU0sUUFBUSxPQUFPLEdBQUc7QUFDakMsZUFBVyxTQUFTLFNBQVM7QUFDM0IsVUFDRSxTQUNBLE9BQU8sVUFBVSxZQUNoQixNQUFrQyxTQUFTLFFBQzVDO0FBQ0EsZUFBUSxNQUFrQztBQUMxQztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNBLFNBQU8sTUFBTSxLQUFLO0FBQ2xCLFNBQU8sT0FBTyxPQUFPO0FBQ3ZCO0FBR0EsU0FBUyxhQUFhLE9BQXdDO0FBQzVELFFBQU0sUUFBa0IsQ0FBQztBQUN6QixhQUFXLENBQUMsS0FBSyxHQUFHLEtBQUssT0FBTyxRQUFRLEtBQUssR0FBRztBQUM5QyxRQUFJLE9BQU8sUUFBUSxVQUFVO0FBQzNCLFlBQU0sS0FBSyxHQUFHLEdBQUcsS0FBSyxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRztBQUFBLElBQzVDO0FBQ0EsUUFBSSxNQUFNLFVBQVUsRUFBRztBQUFBLEVBQ3pCO0FBQ0EsU0FBTyxNQUFNLEtBQUssR0FBRztBQUN2QjtBQUVPLFNBQVMscUJBQXFCLE1BQTBDO0FBQzdFLFNBQU87QUFBQSxJQUNMLE1BQU0sTUFBd0IsS0FBNEI7QUFLeEQsWUFBTSxTQUFTLGVBQWUsS0FBSyxTQUFTO0FBQzVDLFVBQUk7QUFDSixVQUFJLEtBQUssV0FBVztBQUNsQixjQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksR0FBRztBQUMxQyxZQUFJLE1BQU0sR0FBRztBQUNYLHNCQUFZLEdBQUcsS0FBSyxVQUFVLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxNQUFNLEdBQUcsS0FBSyxVQUFVLE1BQU0sR0FBRyxDQUFDO0FBQUEsUUFDbkYsT0FBTztBQUNMLHNCQUFZLEdBQUcsS0FBSyxTQUFTLElBQUksTUFBTTtBQUFBLFFBQ3pDO0FBQUEsTUFDRixXQUFXLEtBQUssV0FBVyxRQUFRLElBQUksY0FBYyxPQUFPO0FBQzFELG9CQUFZLEtBQUssT0FBTyxHQUFHLFVBQVUsa0JBQWtCLE1BQU0sTUFBTTtBQUFBLE1BQ3JFO0FBSUEsVUFBSSxtQkFBdUM7QUFDM0MsVUFBSTtBQUNKLFVBQUksS0FBSyxXQUFXO0FBQ2xCLHlCQUFpQjtBQUFBLFVBQ2YsUUFBUSxLQUFLLFNBQVM7QUFBQSxVQUN0QixxQkFBcUIsTUFBTTtBQUFBLFFBQzdCO0FBQ0EsMkJBQW1CLGtCQUFrQixnQkFBZ0IsRUFBRSxPQUFPLElBQUksQ0FBQztBQUNuRSx5QkFBaUIsR0FBRyxTQUFTLFNBQU87QUFDbEMsZUFBSztBQUFBLFlBQ0gsNENBQTRDLElBQUksT0FBTztBQUFBLFVBQ3pEO0FBQ0EsNkJBQW1CO0FBQUEsUUFDckIsQ0FBQztBQUNELGFBQUssUUFBUSxvQ0FBb0MsY0FBYyxFQUFFO0FBQUEsTUFDbkU7QUFFQSxZQUFNLE9BQU87QUFBQSxRQUNYLEdBQUcsS0FBSztBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsUUFDQSxLQUFLO0FBQUEsUUFDTDtBQUFBLFFBQ0EsS0FBSztBQUFBLFFBQ0w7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQSxHQUFJLEtBQUssVUFBVSxDQUFDLFdBQVcsSUFBSSxDQUFDO0FBQUEsUUFDcEMsR0FBSSxZQUFZLENBQUMsZ0JBQWdCLFNBQVMsSUFBSSxDQUFDO0FBQUEsUUFDL0MsR0FBSSxLQUFLLGlCQUNMLENBQUMscUJBQXFCLEtBQUssY0FBYyxJQUN6QyxDQUFDO0FBQUEsTUFDUDtBQUVBLFlBQU0sTUFBeUI7QUFBQSxRQUM3QixHQUFHLEtBQUs7QUFBQTtBQUFBO0FBQUEsUUFHUix5QkFBeUI7QUFBQSxRQUN6Qiw4QkFBOEI7QUFBQSxRQUM5QixHQUFJLEtBQUssV0FBVyxFQUFFLDJCQUEyQixJQUFJO0FBQUEsUUFDckQsa0NBQWtDLEtBQUs7QUFBQTtBQUFBO0FBQUEsUUFHdkMseUNBQXlDO0FBQUE7QUFBQTtBQUFBLFFBR3pDLEdBQUksS0FBSyxZQUFZO0FBQUEsVUFDbkIsd0JBQXdCO0FBQUEsVUFDeEIsMEJBQTBCLE9BQU8sS0FBSyxXQUFXO0FBQUEsUUFDbkQ7QUFBQSxNQUNGO0FBRUEsV0FBSztBQUFBLFFBQ0gsdUNBQXVDLEtBQUssU0FBUyxXQUFXLEtBQUssTUFBTSxnQkFBZ0IsS0FBSyxjQUFjLFlBQVksU0FBUztBQUFBLE1BQ3JJO0FBQ0EsV0FBSyxRQUFRLGdDQUFnQyxLQUFLLEtBQUssR0FBRyxDQUFDLEVBQUU7QUFDN0QsVUFBSSxXQUFXO0FBQ2IsYUFBSyxRQUFRLCtCQUErQixTQUFTLEVBQUU7QUFBQSxNQUN6RDtBQUlBLFlBQU0sUUFBc0IsTUFBTSxLQUFLLFVBQVUsTUFBTTtBQUFBLFFBQ3JELEtBQUs7QUFBQSxRQUNMLE9BQU8sQ0FBQyxRQUFRLFFBQVEsTUFBTTtBQUFBLFFBQzlCO0FBQUEsUUFDQSxhQUFhO0FBQUEsTUFDZixDQUFDO0FBRUQsV0FBSztBQUFBLFFBQ0gsOEJBQThCLEtBQUssU0FBUyxRQUFRLE1BQU0sR0FBRztBQUFBLE1BQy9EO0FBRUEsWUFBTSxhQUFnQyxDQUFDO0FBQ3ZDLFVBQUksa0JBQTBDO0FBQzlDLFlBQU0sYUFBdUIsQ0FBQztBQUM5QixVQUFJLGNBQWM7QUFDbEIsVUFBSSx1QkFBdUI7QUFHM0IsVUFBSSxNQUFNLFFBQVE7QUFDaEIsY0FBTSxXQUFXLGdCQUFnQixFQUFFLE9BQU8sTUFBTSxPQUFPLENBQUM7QUFDeEQsaUJBQVMsR0FBRyxRQUFRLFVBQVE7QUFFMUIsY0FBSSxLQUFLLFNBQVM7QUFDaEIsb0JBQVEsT0FBTyxNQUFNLE9BQU8sSUFBSTtBQUFBLFVBQ2xDO0FBRUEsY0FBSSxXQUFXLFVBQVUsa0JBQWtCO0FBQ3pDLHVCQUFXLE1BQU07QUFBQSxVQUNuQjtBQUNBLHFCQUFXLEtBQUssSUFBSTtBQUFBLFFBQ3RCLENBQUM7QUFBQSxNQUNIO0FBR0EsVUFBSSxNQUFNLFFBQVE7QUFDaEIsY0FBTSxLQUFLLGdCQUFnQixFQUFFLE9BQU8sTUFBTSxPQUFPLENBQUM7QUFDbEQsV0FBRyxHQUFHLFFBQVEsVUFBUTtBQUVwQixjQUFJLGtCQUFrQjtBQUNwQiw2QkFBaUIsTUFBTSxPQUFPLElBQUk7QUFBQSxVQUNwQztBQUdBLGVBQUs7QUFBQSxZQUNILHlCQUF5QixLQUFLLFNBQVMsUUFBUSxjQUFjLElBQUksQ0FBQztBQUFBLFVBQ3BFO0FBR0EsY0FBSSxLQUFLLFNBQVM7QUFDaEIsb0JBQVEsT0FBTyxNQUFNLE9BQU8sSUFBSTtBQUFBLFVBQ2xDO0FBRUEsZ0JBQU0sWUFBWTtBQUFBLFlBQ2hCO0FBQUEsWUFDQSxLQUFLO0FBQUEsWUFDTCxLQUFLO0FBQUEsVUFDUDtBQUNBLHFCQUFXLFlBQVksV0FBVztBQUVoQyxnQkFBSSxXQUFXLFVBQVUsZ0JBQWdCO0FBQ3ZDLHlCQUFXLE1BQU07QUFBQSxZQUNuQjtBQUNBLHVCQUFXLEtBQUssUUFBUTtBQUN4Qiw4QkFBa0I7QUFFbEIsaUJBQUssYUFBYSxLQUFLLFdBQVcsUUFBUTtBQUFBLFVBQzVDO0FBTUE7QUFDRSxnQkFBSTtBQUNKLGdCQUFJO0FBQ0YsdUJBQVMsVUFBVSxJQUFJO0FBQUEsWUFDekIsUUFBUTtBQUFBLFlBRVI7QUFDQSxnQkFBSSxVQUFVLE9BQU8sV0FBVyxVQUFVO0FBQ3hDLG9CQUFNLE1BQU07QUFFWixrQkFBSSxJQUFJLFNBQVMsbUJBQW1CO0FBQ2xDLHNCQUFNLFVBQVUsSUFBSTtBQUdwQixvQkFDRSxTQUFTLFlBQVksa0JBQ3JCLEtBQUsscUJBQ0w7QUFDQSx1QkFBSztBQUFBLG9CQUNILEtBQUs7QUFBQSxvQkFDTDtBQUFBLG9CQUNBLEtBQUs7QUFBQSxrQkFDUDtBQUFBLGdCQUNGO0FBQUEsY0FFRixXQUNFLElBQUksU0FBUyxVQUNiLENBQUMsd0JBQ0QsS0FBSyxvQkFDTDtBQUNBLHNCQUFNLE9BQU8sdUJBQXVCLEdBQUc7QUFDdkMsb0JBQUksTUFBTTtBQUNSLHlDQUF1QjtBQUN2Qix1QkFBSyxtQkFBbUIsSUFBSTtBQUFBLGdCQUM5QjtBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0YsQ0FBQztBQUFBLE1BQ0g7QUFFQSxZQUFNLE9BQU8sSUFBSSxRQUEyQixDQUFBQyxhQUFXO0FBQ3JELGNBQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxXQUFXO0FBRWxDLGNBQUksa0JBQWtCO0FBQ3BCLDZCQUFpQixJQUFJO0FBQ3JCLCtCQUFtQjtBQUFBLFVBQ3JCO0FBRUEsY0FBSSxXQUFXLGFBQWEsV0FBVyxVQUFVO0FBQy9DLGlCQUFLO0FBQUEsY0FDSCw4QkFBOEIsS0FBSyxTQUFTLHVCQUF1QixNQUFNLFFBQVEsTUFBTSxHQUFHO0FBQUEsWUFDNUY7QUFDQSxZQUFBQSxTQUFRLGFBQWE7QUFBQSxVQUN2QixXQUFXLFNBQVMsR0FBRztBQUNyQixpQkFBSztBQUFBLGNBQ0gsOEJBQThCLEtBQUssU0FBUyw4QkFBOEIsTUFBTSxHQUFHO0FBQUEsWUFDckY7QUFDQSxZQUFBQSxTQUFRLFdBQVc7QUFBQSxVQUNyQixPQUFPO0FBQ0wsaUJBQUs7QUFBQSxjQUNILDhCQUE4QixLQUFLLFNBQVMscUJBQXFCLElBQUksUUFBUSxNQUFNLEdBQUc7QUFBQSxZQUN4RjtBQUNBLFlBQUFBLFNBQVEsUUFBUTtBQUFBLFVBQ2xCO0FBQUEsUUFDRixDQUFDO0FBRUQsY0FBTSxHQUFHLFNBQVMsU0FBTztBQUN2QixlQUFLO0FBQUEsWUFDSCw4QkFBOEIsS0FBSyxTQUFTLGlCQUFpQixJQUFJLE9BQU87QUFBQSxVQUMxRTtBQUNBLFVBQUFBLFNBQVEsUUFBUTtBQUFBLFFBQ2xCLENBQUM7QUFBQSxNQUNILENBQUM7QUFFRCxZQUFNLFNBQXdCO0FBQUEsUUFDNUIsV0FBVyxLQUFLO0FBQUEsUUFDaEI7QUFBQSxRQUNBO0FBQUEsUUFDQSxhQUFhLEtBQUs7QUFBQSxRQUNsQjtBQUFBLFFBQ0EsSUFBSSxrQkFBMEM7QUFDNUMsaUJBQU87QUFBQSxRQUNUO0FBQUEsUUFDQSxPQUFhO0FBQ1gsY0FBSSxDQUFDLE1BQU0sUUFBUTtBQUNqQixpQkFBSztBQUFBLGNBQ0gsaURBQWlELEtBQUssU0FBUyxRQUFRLE1BQU0sR0FBRztBQUFBLFlBQ2xGO0FBRUEsZ0JBQUksUUFBUSxhQUFhLFNBQVM7QUFDaEMsb0JBQU0sS0FBSztBQUFBLFlBQ2IsT0FBTztBQUNMLG9CQUFNLEtBQUssU0FBUztBQUFBLFlBQ3RCO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFlBQWtCO0FBR2hCLGNBQUksQ0FBQyxlQUFlLE1BQU0sS0FBSztBQUM3QiwwQkFBYztBQUNkLGlCQUFLO0FBQUEsY0FDSCxpREFBaUQsS0FBSyxTQUFTLFFBQVEsTUFBTSxHQUFHO0FBQUEsWUFDbEY7QUFDQSxnQkFBSSxRQUFRLGFBQWEsU0FBUztBQUNoQyxvQkFBTSxLQUFLO0FBQUEsWUFDYixPQUFPO0FBQ0wsb0JBQU0sS0FBSyxTQUFTO0FBQUEsWUFDdEI7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0EsV0FBVyxNQUFvQjtBQUM3QixjQUFJLE1BQU0sU0FBUyxDQUFDLE1BQU0sTUFBTSxXQUFXO0FBQ3pDLGlCQUFLO0FBQUEsY0FDSCx5QkFBeUIsS0FBSyxTQUFTLFFBQVEsY0FBYyxJQUFJLENBQUM7QUFBQSxZQUNwRTtBQUNBLGtCQUFNLE1BQU0sTUFBTSxJQUFJO0FBQUEsVUFDeEI7QUFBQSxRQUNGO0FBQUEsUUFDQSxrQkFBa0IsT0FBcUI7QUFDckMsaUJBQU8sY0FBYztBQUtyQixpQkFBTztBQUFBLFlBQ0wsY0FBYztBQUFBLGNBQ1osTUFBTTtBQUFBLGNBQ04sV0FBVyxFQUFFLGtDQUFrQyxNQUFNO0FBQUEsWUFDdkQsQ0FBQyxJQUFJO0FBQUEsVUFDUDtBQUNBLGVBQUs7QUFBQSxZQUNILCtEQUErRCxLQUFLLFNBQVM7QUFBQSxVQUMvRTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBRUEsYUFBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQ0Y7OztBRjlmQTtBQUNBO0FBaUNBLElBQU0sa0JBQWlDO0FBQUEsRUFDckMsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBO0FBQUEsRUFDWCxjQUFjO0FBQUE7QUFBQSxFQUNkLGtCQUFrQjtBQUFBLEVBQ2xCLGNBQWM7QUFBQSxFQUNkLGlCQUFpQjtBQUFBO0FBQ25CO0FBR0EsSUFBTSw0QkFBNEI7QUFDbEMsSUFBTSx5QkFBeUI7QUFhL0IsZUFBZSw2QkFBK0M7QUFDNUQsU0FBTyw2QkFBNkIsZ0NBQWdDO0FBQ3RFO0FBU0EsU0FBUyw4QkFBOEIsU0FBZ0M7QUFDckUsU0FBTyxRQUFRLFlBQVk7QUFDN0I7QUFVQSxTQUFTLGtCQUE0QjtBQUNuQyxNQUFJLGdCQUFnQixLQUFLLENBQUMsUUFBUSxLQUFLLENBQUMsR0FBRztBQUN6QyxXQUFPLENBQUM7QUFBQSxFQUNWO0FBQ0EsU0FBTyxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUM7QUFDekI7QUFHQSxTQUFTLFVBQ1AsU0FDQSxNQUNBLEtBQ3dCO0FBQ3hCLE1BQUk7QUFDRixXQUFPLFFBQVEsTUFBTSxNQUFNLEdBQUc7QUFBQSxFQUNoQyxTQUFTLEtBQUs7QUFDWixVQUFNLFNBQVMsYUFBYSxHQUFHO0FBQy9CLGFBQVMsSUFBSSxNQUFNLHlCQUF5QixNQUFNLEVBQUUsQ0FBQztBQUNyRCxXQUFPO0FBQUEsRUFDVDtBQUNGO0FBRUEsZUFBc0IsY0FDcEIsUUFDQSxlQUNBLG1CQUNBLEtBQ0EsU0FDQSxRQUNBLFFBQ0EsZ0JBQStCLGlCQUMvQixrQkFDQSxnQkFDZTtBQUdmLFFBQU0sYUFBYSxJQUFJLGdCQUFnQjtBQUN2QyxNQUFJLE9BQU8sU0FBUztBQUNsQixlQUFXLE1BQU07QUFBQSxFQUNuQixPQUFPO0FBQ0wsV0FBTyxpQkFBaUIsU0FBUyxNQUFNLFdBQVcsTUFBTSxHQUFHLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFBQSxFQUMzRTtBQUNBLFFBQU0sYUFBYSxXQUFXO0FBRTlCLFFBQU0saUJBQWlCLG9CQUFJLElBQTJCO0FBQ3RELFFBQU0sb0JBQW9CLG9CQUFJLElBQW9CO0FBQ2xELFFBQU0saUJBQWlCLG9CQUFJLElBQW9CO0FBSS9DLFFBQU0sbUJBQW1CLG9CQUFJLElBQW9CO0FBSWpELFFBQU0sdUJBQXVCLG9CQUFJLElBQW9CO0FBQ3JELFFBQU0sZ0JBQWdCLG9CQUFJLElBQTJDO0FBQ3JFLFFBQU0sbUJBQW1CLG9CQUFJLElBQVk7QUFDekMsUUFBTSxtQkFBbUIsb0JBQUksSUFRM0I7QUFHRixRQUFNLG1CQUFtQixvQkFBSSxJQUFZO0FBSXpDLFFBQU0saUJBQWlCLG9CQUFJLElBQVk7QUFHdkMsUUFBTSxlQUFlLG1CQUFtQixVQUFVO0FBUWxELGlCQUFlLDJCQUViO0FBQ0EsUUFBSSxhQUFhO0FBQ2pCLFFBQUksV0FBVztBQUNmLFVBQU0scUJBQStCLENBQUM7QUFDdEMsZUFBVyxDQUFDLFNBQVMsS0FBSyxnQkFBZ0I7QUFDeEMsWUFBTSxTQUFTLGVBQWUsSUFBSSxTQUFTO0FBQzNDLFlBQU0sZUFBZSxxQkFBcUIsSUFBSSxTQUFTO0FBQ3ZELFVBQUksQ0FBQyxVQUFVLENBQUMsY0FBYztBQUM1QjtBQUFBLE1BQ0Y7QUFDQSxVQUFJO0FBQ0YsY0FBTSxJQUFJLGNBQWMsZUFBZSxRQUFRLFlBQVk7QUFDM0QscUJBQWE7QUFBQSxNQUNmLFNBQVMsS0FBSztBQUNaO0FBQUEsVUFDRSwyQ0FBMkMsU0FBUyxXQUFXLE1BQU0sS0FBSyxhQUFhLEdBQUcsQ0FBQztBQUFBLFFBQzdGO0FBQ0EsWUFBSSxlQUFlLGtCQUFrQjtBQUNuQyxtQkFBUyxnQ0FBZ0M7QUFBQSxZQUN2QyxRQUNFLElBQUk7QUFBQSxZQUNOLFlBQWEsSUFBSSxXQUFXLE9BQU8sSUFBSSxXQUFXLE1BQzlDLGdCQUNBO0FBQUEsVUFDTixDQUFDO0FBQ0QsY0FBSSxJQUFJLFdBQVcsT0FBTyxJQUFJLFdBQVcsS0FBSztBQUM1QywrQkFBbUIsS0FBSyxTQUFTO0FBQUEsVUFDbkMsT0FBTztBQUVMLHVCQUFXO0FBQUEsVUFDYjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQU9BLGVBQVcsYUFBYSxvQkFBb0I7QUFDMUMsYUFBTztBQUFBLFFBQ0wsV0FBVyxTQUFTO0FBQUEsTUFDdEI7QUFDQSxVQUFJO0FBQ0YsY0FBTSxJQUFJLGlCQUFpQixlQUFlLFNBQVM7QUFDbkQ7QUFBQSxVQUNFLDBDQUEwQyxTQUFTO0FBQUEsUUFDckQ7QUFBQSxNQUNGLFNBQVMsS0FBSztBQUNaLGVBQU87QUFBQSxVQUNMLDZCQUE2QixTQUFTLFdBQVcsYUFBYSxHQUFHLENBQUM7QUFBQSxRQUNwRTtBQUNBO0FBQUEsVUFDRSx1Q0FBdUMsU0FBUyxhQUFhLGFBQWEsR0FBRyxDQUFDO0FBQUEsVUFDOUUsRUFBRSxPQUFPLFFBQVE7QUFBQSxRQUNuQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQ0EsUUFBSSxVQUFVO0FBQ1osYUFBTztBQUFBLElBQ1Q7QUFDQSxRQUFJLG1CQUFtQixTQUFTLEdBQUc7QUFDakMsYUFBTztBQUFBLElBQ1Q7QUFDQSxXQUFPLGFBQWEsT0FBTztBQUFBLEVBQzdCO0FBT0EsUUFBTSxhQUFhLG9CQUFJLElBQVk7QUFPbkMsUUFBTSxlQUFlLGlCQUNqQiw0QkFBNEI7QUFBQSxJQUMxQjtBQUFBLElBQ0EsV0FBVyxDQUFDLFdBQVcsZUFBZTtBQUNwQyxZQUFNLFNBQVMsZUFBZSxJQUFJLFNBQVM7QUFDM0MsVUFBSSxDQUFDLFFBQVE7QUFDWDtBQUFBLE1BQ0Y7QUFDQSxVQUFJLFdBQVcsSUFBSSxTQUFTLEdBQUc7QUFDN0IsZUFBTztBQUFBLFVBQ0wsc0JBQXNCLFNBQVM7QUFBQSxRQUNqQztBQUNBLGFBQUssSUFDRixpQkFBaUIsZUFBZSxTQUFTLEVBQ3pDLE1BQU0sQ0FBQyxRQUFpQjtBQUN2QixpQkFBTztBQUFBLFlBQ0wsNkJBQTZCLFNBQVMsV0FBVyxhQUFhLEdBQUcsQ0FBQztBQUFBLFVBQ3BFO0FBQ0E7QUFBQSxZQUNFLG1DQUFtQyxTQUFTLGFBQWEsYUFBYSxHQUFHLENBQUM7QUFBQSxZQUMxRSxFQUFFLE9BQU8sUUFBUTtBQUFBLFVBQ25CO0FBQUEsUUFDRixDQUFDO0FBQUEsTUFDTCxPQUFPO0FBQ0wsZUFBTyxrQkFBa0IsVUFBVTtBQUFBLE1BQ3JDO0FBQUEsSUFDRjtBQUFBLElBQ0EsT0FBTztBQUFBLEVBQ1QsQ0FBQyxJQUNEO0FBQ0osUUFBTSxnQkFBZ0IsS0FBSyxJQUFJO0FBRy9CLFFBQU0sa0JBQWtCLG9CQUFJLElBQXNCO0FBQ2xELFdBQVMsYUFBYSxHQUEyQjtBQUMvQyxvQkFBZ0IsSUFBSSxDQUFDO0FBQ3JCLFNBQUssRUFBRSxRQUFRLE1BQU0sZ0JBQWdCLE9BQU8sQ0FBQyxDQUFDO0FBQUEsRUFDaEQ7QUFDQSxNQUFJLGNBQWM7QUFDbEIsTUFBSSxpQkFBaUI7QUFDckIsTUFBSSxpQkFBZ0M7QUFDcEMsTUFBSSxvQkFBbUM7QUFDdkMsTUFBSSxvQkFBbUM7QUFDdkMsTUFBSSxvQkFBMkQ7QUFJL0QsTUFBSSxZQUFZO0FBRWhCO0FBQUEsSUFDRSw4Q0FBOEMsT0FBTyxTQUFTLGdCQUFnQixPQUFPLFdBQVcsa0JBQWtCLGFBQWE7QUFBQSxFQUNqSTtBQUNBLHlCQUF1QixRQUFRLHVCQUF1QjtBQUFBLElBQ3BELGNBQWMsT0FBTztBQUFBLElBQ3JCLFlBQVksT0FBTztBQUFBLEVBQ3JCLENBQUM7QUFJRCxNQUFJLFFBQVEsSUFBSSxjQUFjLE9BQU87QUFDbkMsUUFBSTtBQUNKLFFBQUksT0FBTyxXQUFXO0FBQ3BCLFlBQU0sTUFBTSxPQUFPLFVBQVUsWUFBWSxHQUFHO0FBQzVDLGtCQUNFLE1BQU0sSUFDRixHQUFHLE9BQU8sVUFBVSxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssT0FBTyxVQUFVLE1BQU0sR0FBRyxDQUFDLEtBQ2pFLEdBQUcsT0FBTyxTQUFTO0FBQUEsSUFDM0IsT0FBTztBQUNMLGtCQUFZQyxNQUFLQyxRQUFPLEdBQUcsVUFBVSxzQkFBc0I7QUFBQSxJQUM3RDtBQUNBLFdBQU8sZ0JBQWdCLFNBQVM7QUFBQSxFQUNsQztBQUVBLFNBQU8sWUFBWSxRQUFRLGFBQWE7QUFNeEMsU0FBTyxtQkFBbUIsR0FBRyxPQUFPLGFBQWEsT0FBTyxTQUFTO0FBSWpFLE1BQUksa0JBQWtCO0FBQ3BCLFdBQU8sWUFBWSxnQkFBZ0I7QUFBQSxFQUNyQztBQUdBLFdBQVMsc0JBQTRCO0FBR25DLFdBQU87QUFBQSxNQUNMLGVBQWU7QUFBQSxNQUNmLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxJQUNUO0FBR0EsZUFBVyxDQUFDLEtBQUtDLE9BQU0sS0FBSyxnQkFBZ0I7QUFDMUMsWUFBTSxNQUFNQSxRQUFPO0FBQ25CLFVBQUksS0FBSztBQUNQLGVBQU8sc0JBQXNCLGlCQUFpQixJQUFJLEdBQUcsS0FBSyxLQUFLLEdBQUc7QUFBQSxNQUNwRTtBQUFBLElBQ0Y7QUFFQSxRQUFJLGVBQWUsU0FBUyxHQUFHO0FBQzdCLGFBQU8saUJBQWlCO0FBQ3hCO0FBQUEsSUFDRjtBQU9BLFVBQU0sQ0FBQyxXQUFXLE1BQU0sSUFBSSxDQUFDLEdBQUcsZUFBZSxRQUFRLENBQUMsRUFBRSxJQUFJO0FBQzlELFVBQU0sWUFBWSxrQkFBa0IsSUFBSSxTQUFTO0FBQ2pELFFBQUksQ0FBQyxVQUFXO0FBRWhCLFVBQU0sV0FBVyxPQUFPO0FBQ3hCLFFBQUksQ0FBQyxZQUFZLFNBQVMsU0FBUyxZQUFZLFNBQVMsU0FBUyxTQUFTO0FBR3hFLFVBQUksT0FBTyxjQUFjLEVBQUcsUUFBTyxlQUFlO0FBQ2xEO0FBQUEsSUFDRjtBQUVBLFVBQU0sVUFBVSxlQUFlLEtBQUssSUFBSSxJQUFJLFNBQVM7QUFHckQsVUFBTSxRQUFRLE9BQU8sV0FDbEIsT0FBTyxPQUFLLEVBQUUsU0FBUyxZQUFZLEVBQ25DLE1BQU0sRUFBRSxFQUNSLElBQUksT0FBSyxFQUFFLE9BQU87QUFFckIsV0FBTyxvQkFBb0IsV0FBVyxTQUFTLFVBQVUsS0FBSztBQUFBLEVBQ2hFO0FBR0EsV0FBUyxxQkFBMkI7QUFDbEMsc0JBQWtCO0FBR2xCLHdCQUFvQjtBQUNwQix3QkFBb0I7QUFBQSxNQUNsQjtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUdBLFdBQVMsb0JBQTBCO0FBQ2pDLFFBQUksbUJBQW1CO0FBQ3JCLG9CQUFjLGlCQUFpQjtBQUMvQiwwQkFBb0I7QUFBQSxJQUN0QjtBQUFBLEVBQ0Y7QUFFQSxXQUFTLGNBQ1AsV0FDQSxXQUNBLFFBQ3FDO0FBQ3JDLFdBQU8sQ0FBQyxjQUF1QztBQUM3QyxZQUFNLFNBQVMsZUFBZSxJQUFJLFNBQVM7QUFDM0MscUJBQWUsT0FBTyxTQUFTO0FBQy9CLHdCQUFrQixPQUFPLFNBQVM7QUFDbEMscUJBQWUsT0FBTyxTQUFTO0FBQy9CLDJCQUFxQixPQUFPLFNBQVM7QUFDckMsWUFBTSxXQUFXLGlCQUFpQixJQUFJLFNBQVMsS0FBSztBQUNwRCx1QkFBaUIsT0FBTyxTQUFTO0FBQ2pDLGFBQU8sY0FBYyxRQUFRO0FBQzdCLHFCQUFlLE9BQU8sUUFBUTtBQUM5QixpQkFBVyxPQUFPLFNBQVM7QUFFM0IsWUFBTSxRQUFRLGNBQWMsSUFBSSxTQUFTO0FBQ3pDLFVBQUksT0FBTztBQUNULHFCQUFhLEtBQUs7QUFDbEIsc0JBQWMsT0FBTyxTQUFTO0FBQUEsTUFDaEM7QUFFQSxvQkFBYyxPQUFPLFNBQVM7QUFFOUIsbUJBQWEsS0FBSztBQUtsQixZQUFNLGNBQWMsaUJBQWlCLE9BQU8sU0FBUztBQUNyRCxZQUFNLFNBQ0osZUFBZSxjQUFjLGdCQUFnQixXQUFXO0FBQzFELFlBQU0sYUFBYSxLQUFLLElBQUksSUFBSTtBQUVoQztBQUFBLFFBQ0UsOEJBQThCLFNBQVMsV0FBVyxVQUFVLFNBQVMsa0JBQWtCLE1BQU0sYUFBYSxlQUFlLFVBQVUsQ0FBQztBQUFBLE1BQ3RJO0FBQ0EsZUFBUyw2QkFBNkI7QUFBQSxRQUNwQztBQUFBLFFBRUEsYUFBYTtBQUFBLE1BQ2YsQ0FBQztBQUNELDZCQUF1QixRQUFRLHVCQUF1QjtBQUFBLFFBQ3BEO0FBQUEsUUFDQSxhQUFhO0FBQUEsTUFDZixDQUFDO0FBR0QsYUFBTyxZQUFZO0FBQ25CLHdCQUFrQjtBQUdsQixZQUFNLGdCQUNKLE9BQU8sV0FBVyxTQUFTLElBQUksT0FBTyxXQUFXLEtBQUssSUFBSSxJQUFJO0FBQ2hFLFVBQUk7QUFFSixjQUFRLFFBQVE7QUFBQSxRQUNkLEtBQUs7QUFDSCxpQkFBTyxtQkFBbUIsV0FBVyxVQUFVO0FBQy9DO0FBQUEsUUFDRixLQUFLO0FBS0gsY0FBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLFNBQVM7QUFDdkMsNkJBQWlCLGlCQUFpQjtBQUNsQyxtQkFBTyxpQkFBaUIsV0FBVyxjQUFjO0FBQ2pELHFCQUFTLElBQUksTUFBTSwwQkFBMEIsY0FBYyxFQUFFLENBQUM7QUFBQSxVQUNoRTtBQUNBO0FBQUEsUUFDRixLQUFLO0FBQ0gsaUJBQU8sV0FBVyxXQUFXLFNBQVMsY0FBYztBQUNwRDtBQUFBLE1BQ0o7QUFLQSxVQUFJLFdBQVcsaUJBQWlCLFFBQVE7QUFDdEM7QUFBQSxVQUNFO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0EsY0FBYztBQUFBLFVBQ2hCO0FBQUEsUUFDRjtBQUNBLHlCQUFpQixJQUFJLE1BQU07QUFBQSxNQUM3QjtBQUdBLFlBQU0sS0FBSyxpQkFBaUIsSUFBSSxTQUFTO0FBQ3pDLFVBQUksSUFBSTtBQUNOLHlCQUFpQixPQUFPLFNBQVM7QUFDakM7QUFBQSxVQUNFO0FBQUEsWUFDRSxHQUFHO0FBQUEsWUFDSCxHQUFHO0FBQUEsWUFDSCxHQUFHO0FBQUEsWUFDSCxHQUFHO0FBQUEsVUFDTCxFQUFFO0FBQUEsWUFBTSxDQUFDLFFBQ1AsT0FBTztBQUFBLGNBQ0wsNkJBQTZCLEdBQUcsWUFBWSxLQUFLLGFBQWEsR0FBRyxDQUFDO0FBQUEsWUFDcEU7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFLQSxVQUFJLFdBQVcsaUJBQWlCLENBQUMsV0FBVyxTQUFTO0FBQ25ELFlBQUksT0FBTyxjQUFjLGtCQUFrQjtBQVF6QztBQUFBLFlBQ0UsSUFDRyxlQUFlLFFBQVEsRUFDdkI7QUFBQSxjQUFNLENBQUMsUUFDTixPQUFPO0FBQUEsZ0JBQ0wsNkJBQTZCLFNBQVMsS0FBSyxhQUFhLEdBQUcsQ0FBQztBQUFBLGNBQzlEO0FBQUEsWUFDRjtBQUFBLFVBQ0o7QUFDQTtBQUFBLFlBQ0UsNEJBQTRCLE1BQU07QUFBQSxVQUNwQztBQUFBLFFBQ0YsT0FBTztBQUVMO0FBQUEsWUFDRSw0QkFBNEIsTUFBTTtBQUFBLFVBQ3BDO0FBQ0EscUJBQVcsTUFBTTtBQUNqQjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBRUEsVUFBSSxDQUFDLFdBQVcsU0FBUztBQUN2QiwyQkFBbUI7QUFBQSxNQUNyQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBS0EsTUFBSSxDQUFDLGtCQUFrQjtBQUNyQix1QkFBbUI7QUFBQSxFQUNyQjtBQUVBLFNBQU8sQ0FBQyxXQUFXLFNBQVM7QUFJMUIsVUFBTSxhQUFhLHNCQUFzQjtBQUV6QyxRQUFJO0FBQ0YsWUFBTSxPQUFPLE1BQU0sSUFBSTtBQUFBLFFBQ3JCO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBLFdBQVc7QUFBQSxNQUNiO0FBR0EsWUFBTSxrQkFDSixtQkFBbUIsUUFBUSxzQkFBc0I7QUFDbkQsVUFBSSxpQkFBaUI7QUFDbkIsY0FBTSxpQkFDSixLQUFLLElBQUksS0FBSyxrQkFBa0IscUJBQXFCLEtBQUssSUFBSTtBQUNoRSxlQUFPLGVBQWUsY0FBYztBQUNwQztBQUFBLFVBQ0UsbUNBQW1DLGVBQWUsY0FBYyxDQUFDO0FBQUEsUUFDbkU7QUFDQSxpQkFBUyw0QkFBNEI7QUFBQSxVQUNuQyxpQkFBaUI7QUFBQSxRQUNuQixDQUFDO0FBQUEsTUFDSDtBQUVBLG9CQUFjO0FBQ2QsdUJBQWlCO0FBQ2pCLHVCQUFpQjtBQUNqQiwwQkFBb0I7QUFDcEIsMEJBQW9CO0FBSXBCLFVBQUksQ0FBQyxNQUFNO0FBRVQsY0FBTSxRQUFRLGVBQWUsUUFBUSxPQUFPO0FBQzVDLFlBQUksT0FBTztBQUNULGdCQUFNLFVBQVUsV0FBVztBQVMzQixjQUFJLFdBQVcsc0NBQXNDLEdBQUc7QUFDdEQscUJBQVMsdUNBQXVDO0FBQUEsY0FDOUMsaUJBQWlCLGVBQWU7QUFBQSxjQUNoQyx1QkFDRSxXQUFXO0FBQUEsWUFDZixDQUFDO0FBR0Qsa0JBQU0sZUFBZSxVQUFVLElBQUksS0FBSyxJQUFJLElBQUksVUFBVTtBQUMxRCxnQkFBSSxXQUFzRDtBQUMxRCxnQkFBSSxXQUFXO0FBQ2YsbUJBQ0UsQ0FBQyxXQUFXLFdBQ1osZUFBZSxRQUFRLE9BQU8sZ0JBQzdCLGlCQUFpQixRQUFRLEtBQUssSUFBSSxJQUFJLGVBQ3ZDO0FBRUEsb0JBQU0sV0FBVyxzQkFBc0I7QUFDdkMsa0JBQUksU0FBUyx1Q0FBdUMsRUFBRztBQUt2RCxvQkFBTSxNQUFNLGFBQWEsT0FBTztBQUVoQyx5QkFBVyxNQUFNLHlCQUF5QjtBQUMxQyxrQkFBSSxhQUFhLGlCQUFpQixhQUFhLFNBQVM7QUFDdEQsb0JBQUksUUFBUTtBQUNaO0FBQUEsY0FDRjtBQUVBO0FBQ0Esb0JBQU07QUFBQSxnQkFDSixTQUFTO0FBQUEsZ0JBQ1QsSUFBSTtBQUFBLGNBQ047QUFDQSxrQkFBSSxRQUFRO0FBQUEsWUFDZDtBQUdBLGtCQUFNLGFBQ0osYUFBYSxpQkFBaUIsYUFBYSxVQUN2QyxXQUNBLFdBQVcsVUFDVCxhQUNBLGVBQWUsT0FBTyxPQUFPLGNBQzNCLHFCQUNBLGlCQUFpQixRQUFRLEtBQUssSUFBSSxLQUFLLGVBQ3JDLGFBQ0E7QUFDWixxQkFBUyxzQ0FBc0M7QUFBQSxjQUM3QyxRQUNFO0FBQUEsY0FDRixrQkFBa0I7QUFBQSxjQUNsQixpQkFBaUIsZUFBZTtBQUFBLFlBQ2xDLENBQUM7QUFDRCxnQkFBSSxlQUFlLFlBQVk7QUFJN0I7QUFBQSxnQkFDRSwwQ0FBMEMsUUFBUTtBQUFBLGNBQ3BEO0FBQUEsWUFDRjtBQVNBLGdCQUFJLGFBQWEsaUJBQWlCLGFBQWEsU0FBUztBQUN0RCxvQkFBTSxNQUFNLGFBQWEsT0FBTztBQUNoQyxvQkFBTTtBQUFBLGdCQUNKLFVBQVUsSUFDTixVQUNBLFdBQVc7QUFBQSxnQkFDZixJQUFJO0FBQUEsY0FDTjtBQUNBLGtCQUFJLFFBQVE7QUFBQSxZQUNkO0FBQUEsVUFDRixXQUFXLFVBQVUsR0FBRztBQUV0QixrQkFBTSxNQUFNLGFBQWEsT0FBTztBQUNoQyxrQkFBTSxNQUFNLFNBQVMsSUFBSSxNQUFNO0FBQy9CLGdCQUFJLFFBQVE7QUFBQSxVQUNkO0FBQUEsUUFDRixPQUFPO0FBQ0wsZ0JBQU0sV0FDSixlQUFlLE9BQU8sSUFDbEIsV0FBVyxpREFDWCxXQUFXO0FBQ2pCLGdCQUFNLE1BQU0sVUFBVSxVQUFVO0FBQUEsUUFDbEM7QUFDQTtBQUFBLE1BQ0Y7QUFPQSxZQUFNLHlCQUF5QixlQUFlLFFBQVEsT0FBTztBQUs3RCxVQUFJLGlCQUFpQixJQUFJLEtBQUssRUFBRSxHQUFHO0FBQ2pDO0FBQUEsVUFDRSxtREFBbUQsS0FBSyxFQUFFO0FBQUEsUUFDNUQ7QUFJQSxZQUFJLHdCQUF3QjtBQUMxQixnQkFBTSxNQUFNLGFBQWEsT0FBTztBQUNoQyxjQUFJLFdBQVcsc0NBQXNDLEdBQUc7QUFDdEQsa0JBQU0seUJBQXlCO0FBQy9CLGtCQUFNO0FBQUEsY0FDSixXQUFXO0FBQUEsY0FDWCxJQUFJO0FBQUEsWUFDTjtBQUFBLFVBQ0YsV0FBVyxXQUFXLDRDQUE0QyxHQUFHO0FBQ25FLGtCQUFNO0FBQUEsY0FDSixXQUFXO0FBQUEsY0FDWCxJQUFJO0FBQUEsWUFDTjtBQUFBLFVBQ0Y7QUFDQSxjQUFJLFFBQVE7QUFBQSxRQUNkLE9BQU87QUFDTCxnQkFBTSxNQUFNLEtBQU0sVUFBVTtBQUFBLFFBQzlCO0FBQ0E7QUFBQSxNQUNGO0FBSUEsVUFBSTtBQUNKLFVBQUk7QUFDRixpQkFBUyxpQkFBaUIsS0FBSyxNQUFNO0FBQUEsTUFDdkMsU0FBUyxLQUFLO0FBQ1osY0FBTSxTQUFTLGFBQWEsR0FBRztBQUMvQixlQUFPO0FBQUEsVUFDTCwyQ0FBMkMsS0FBSyxFQUFFLEtBQUssTUFBTTtBQUFBLFFBQy9EO0FBQ0EsaUJBQVMsbUNBQW1DLENBQUMsQ0FBQztBQUk5Qyx5QkFBaUIsSUFBSSxLQUFLLEVBQUU7QUFDNUI7QUFBQSxVQUNFO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBLEtBQUs7QUFBQSxZQUNMO0FBQUEsWUFDQSxjQUFjO0FBQUEsVUFDaEI7QUFBQSxRQUNGO0FBSUEsWUFBSSx3QkFBd0I7QUFDMUIsZ0JBQU0sTUFBTSxhQUFhLE9BQU87QUFDaEMsY0FBSSxXQUFXLHNDQUFzQyxHQUFHO0FBQ3RELGtCQUFNLHlCQUF5QjtBQUMvQixrQkFBTTtBQUFBLGNBQ0osV0FBVztBQUFBLGNBQ1gsSUFBSTtBQUFBLFlBQ047QUFBQSxVQUNGLFdBQVcsV0FBVyw0Q0FBNEMsR0FBRztBQUNuRSxrQkFBTTtBQUFBLGNBQ0osV0FBVztBQUFBLGNBQ1gsSUFBSTtBQUFBLFlBQ047QUFBQSxVQUNGO0FBQ0EsY0FBSSxRQUFRO0FBQUEsUUFDZDtBQUNBO0FBQUEsTUFDRjtBQU9BLFlBQU0sVUFBVSxZQUEyQjtBQUN6Qyx3QkFBZ0Isc0NBQXNDLEtBQUssRUFBRSxFQUFFO0FBQy9ELFlBQUk7QUFDRixnQkFBTSxJQUFJO0FBQUEsWUFDUjtBQUFBLFlBQ0EsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFVBQ1Q7QUFBQSxRQUNGLFNBQVMsS0FBSztBQUNaO0FBQUEsWUFDRSwyQ0FBMkMsS0FBSyxFQUFFLEtBQUssYUFBYSxHQUFHLENBQUM7QUFBQSxVQUMxRTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBRUEsWUFBTSxXQUFtQixLQUFLLEtBQUs7QUFDbkMsY0FBUSxLQUFLLEtBQUssTUFBTTtBQUFBLFFBQ3RCLEtBQUs7QUFDSCxnQkFBTSxRQUFRO0FBQ2QsMEJBQWdCLG9DQUFvQztBQUNwRCxpQkFBTyxXQUFXLHNCQUFzQjtBQUN4QztBQUFBLFFBQ0YsS0FBSyxXQUFXO0FBQ2QsZ0JBQU0sWUFBWSxLQUFLLEtBQUs7QUFDNUIsY0FBSTtBQUNGLDZCQUFpQixXQUFXLFlBQVk7QUFBQSxVQUMxQyxRQUFRO0FBQ04sa0JBQU0sUUFBUTtBQUNkLG1CQUFPLFNBQVMsZ0NBQWdDLFNBQVMsRUFBRTtBQUMzRDtBQUFBLFVBQ0Y7QUFNQSxnQkFBTSxpQkFBaUIsZUFBZSxJQUFJLFNBQVM7QUFDbkQsY0FBSSxnQkFBZ0I7QUFDbEIsMkJBQWUsa0JBQWtCLE9BQU8scUJBQXFCO0FBQzdELGlDQUFxQixJQUFJLFdBQVcsT0FBTyxxQkFBcUI7QUFDaEUsMkJBQWUsSUFBSSxXQUFXLEtBQUssRUFBRTtBQUdyQywwQkFBYyxTQUFTLFdBQVcsT0FBTyxxQkFBcUI7QUFDOUQ7QUFBQSxjQUNFLDZEQUE2RCxTQUFTLFdBQVcsS0FBSyxFQUFFO0FBQUEsWUFDMUY7QUFDQSxrQkFBTSxRQUFRO0FBQ2Q7QUFBQSxVQUNGO0FBS0EsY0FBSSxlQUFlLFFBQVEsT0FBTyxhQUFhO0FBQzdDO0FBQUEsY0FDRSw4QkFBOEIsZUFBZSxJQUFJLElBQUksT0FBTyxXQUFXLDBDQUEwQyxLQUFLLEVBQUU7QUFBQSxZQUMxSDtBQUNBO0FBQUEsVUFDRjtBQUVBLGdCQUFNLFFBQVE7QUFDZCxnQkFBTSxpQkFBaUIsS0FBSyxJQUFJO0FBVWhDLGNBQUk7QUFDSixjQUFJLFdBQVc7QUFDZixjQUFJO0FBR0osY0FDRSxPQUFPLHNCQUFzQixRQUM3QixZQUFZLFFBQVEsSUFBSSx3QkFBd0IsR0FDaEQ7QUFDQSxxQkFBUyxpQkFBaUIsT0FBTyxZQUFZLFNBQVM7QUFHdEQscUJBQVMsVUFBVSxHQUFHLFdBQVcsR0FBRyxXQUFXO0FBQzdDLGtCQUFJO0FBQ0YsOEJBQWMsTUFBTTtBQUFBLGtCQUNsQjtBQUFBLGtCQUNBLE9BQU87QUFBQSxnQkFDVDtBQUNBLDJCQUFXO0FBQ1g7QUFBQSxrQkFDRSx3REFBd0QsU0FBUyxVQUFVLFdBQVcsWUFBWSxPQUFPO0FBQUEsZ0JBQzNHO0FBQ0E7QUFBQSxjQUNGLFNBQVMsS0FBSztBQUNaLHNCQUFNLFNBQVMsYUFBYSxHQUFHO0FBQy9CLG9CQUFJLFVBQVUsR0FBRztBQUNmO0FBQUEsb0JBQ0UsbURBQW1ELE9BQU8sc0JBQXNCLE1BQU07QUFBQSxrQkFDeEY7QUFDQSx3QkFBTSxNQUFNLEtBQU8sVUFBVTtBQUM3QixzQkFBSSxXQUFXLFFBQVM7QUFDeEI7QUFBQSxnQkFDRjtBQUNBLHVCQUFPO0FBQUEsa0JBQ0wsaURBQWlELFNBQVMsS0FBSyxNQUFNO0FBQUEsZ0JBQ3ZFO0FBQ0EseUJBQVMsSUFBSSxNQUFNLDBCQUEwQixNQUFNLEVBQUUsQ0FBQztBQUN0RCxpQ0FBaUIsSUFBSSxLQUFLLEVBQUU7QUFDNUI7QUFBQSxrQkFDRTtBQUFBLG9CQUNFO0FBQUEsb0JBQ0E7QUFBQSxvQkFDQSxLQUFLO0FBQUEsb0JBQ0w7QUFBQSxvQkFDQSxjQUFjO0FBQUEsa0JBQ2hCO0FBQUEsZ0JBQ0Y7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUNBLGdCQUFJLENBQUMsU0FBVTtBQUFBLFVBQ2pCLE9BQU87QUFDTCxxQkFBUyxZQUFZLE9BQU8sbUJBQW1CLFNBQVM7QUFBQSxVQUMxRDtBQVlBLGdCQUFNLHNCQUFzQixPQUFPO0FBQ25DLGNBQUksYUFBYSxPQUFPO0FBQ3hCLGNBQUksbUJBQW1CO0FBQ3ZCLGNBQ0Usd0JBQXdCLGVBQ3ZCLHFCQUFxQixVQUNwQixDQUFDLGNBQWMsV0FBVyxnQkFBZ0IsSUFDNUM7QUFDQSxrQkFBTSxVQUFVLEtBQUssSUFBSTtBQUN6QixnQkFBSTtBQUNGLG9CQUFNLEtBQUssTUFBTTtBQUFBLGdCQUNmLFVBQVUsZUFBZSxTQUFTLENBQUM7QUFBQSxjQUNyQztBQUNBLGlDQUFtQixLQUFLLElBQUksSUFBSTtBQUNoQywrQkFBaUIsSUFBSSxXQUFXO0FBQUEsZ0JBQzlCLGNBQWMsR0FBRztBQUFBLGdCQUNqQixnQkFBZ0IsR0FBRztBQUFBLGdCQUNuQixTQUFTLEdBQUc7QUFBQSxnQkFDWixXQUFXLEdBQUc7QUFBQSxjQUNoQixDQUFDO0FBQ0QsMkJBQWEsR0FBRztBQUNoQjtBQUFBLGdCQUNFLG1EQUFtRCxTQUFTLE9BQU8sR0FBRyxZQUFZO0FBQUEsY0FDcEY7QUFBQSxZQUNGLFNBQVMsS0FBSztBQUNaLG9CQUFNLFNBQVMsYUFBYSxHQUFHO0FBQy9CLHFCQUFPO0FBQUEsZ0JBQ0wseUNBQXlDLFNBQVMsS0FBSyxNQUFNO0FBQUEsY0FDL0Q7QUFDQSx1QkFBUyxJQUFJLE1BQU0sNkJBQTZCLE1BQU0sRUFBRSxDQUFDO0FBQ3pELCtCQUFpQixJQUFJLEtBQUssRUFBRTtBQUM1QjtBQUFBLGdCQUNFO0FBQUEsa0JBQ0U7QUFBQSxrQkFDQTtBQUFBLGtCQUNBLEtBQUs7QUFBQSxrQkFDTDtBQUFBLGtCQUNBLGNBQWM7QUFBQSxnQkFDaEI7QUFBQSxjQUNGO0FBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUVBO0FBQUEsWUFDRSx1Q0FBdUMsU0FBUyxXQUFXLE1BQU07QUFBQSxVQUNuRTtBQUtBLGdCQUFNLGtCQUFrQixrQkFBa0IsU0FBUztBQUVuRCxnQkFBTSxjQUFjO0FBQUEsWUFDbEI7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBLGFBQWEsT0FBTztBQUFBLGNBQ3BCO0FBQUEsY0FDQTtBQUFBLGNBQ0Esb0JBQW9CLFVBQVE7QUFLMUIsb0JBQUksZUFBZSxJQUFJLGVBQWUsRUFBRztBQUN6QywrQkFBZSxJQUFJLGVBQWU7QUFDbEMsc0JBQU0sUUFBUSxtQkFBbUIsSUFBSTtBQUNyQyx1QkFBTyxnQkFBZ0IsaUJBQWlCLEtBQUs7QUFDN0M7QUFBQSxrQkFDRSxvQ0FBb0MsZUFBZSxLQUFLLEtBQUs7QUFBQSxnQkFDL0Q7QUFDQSxxQkFBSyxPQUFPLDhCQUFvQixFQUM3QjtBQUFBLGtCQUFLLENBQUMsRUFBRSx5QkFBeUIsTUFDaEMseUJBQXlCLGlCQUFpQixPQUFPO0FBQUEsb0JBQy9DLFNBQVMsT0FBTztBQUFBLGtCQUNsQixDQUFDO0FBQUEsZ0JBQ0gsRUFDQztBQUFBLGtCQUFNLFNBQ0w7QUFBQSxvQkFDRSw2Q0FBNkMsZUFBZSxLQUFLLEdBQUc7QUFBQSxvQkFDcEUsRUFBRSxPQUFPLFFBQVE7QUFBQSxrQkFDbkI7QUFBQSxnQkFDRjtBQUFBLGNBQ0o7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFDQSxjQUFJLE9BQU8sZ0JBQWdCLFVBQVU7QUFDbkMsbUJBQU87QUFBQSxjQUNMLDJCQUEyQixTQUFTLEtBQUssV0FBVztBQUFBLFlBQ3REO0FBRUEsa0JBQU0sS0FBSyxpQkFBaUIsSUFBSSxTQUFTO0FBQ3pDLGdCQUFJLElBQUk7QUFDTiwrQkFBaUIsT0FBTyxTQUFTO0FBQ2pDO0FBQUEsZ0JBQ0U7QUFBQSxrQkFDRSxHQUFHO0FBQUEsa0JBQ0gsR0FBRztBQUFBLGtCQUNILEdBQUc7QUFBQSxrQkFDSCxHQUFHO0FBQUEsZ0JBQ0wsRUFBRTtBQUFBLGtCQUFNLENBQUMsUUFDUCxPQUFPO0FBQUEsb0JBQ0wsNkJBQTZCLEdBQUcsWUFBWSxLQUFLLGFBQWEsR0FBRyxDQUFDO0FBQUEsa0JBQ3BFO0FBQUEsZ0JBQ0Y7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUNBLDZCQUFpQixJQUFJLEtBQUssRUFBRTtBQUM1QjtBQUFBLGNBQ0U7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0EsS0FBSztBQUFBLGdCQUNMO0FBQUEsZ0JBQ0EsY0FBYztBQUFBLGNBQ2hCO0FBQUEsWUFDRjtBQUNBO0FBQUEsVUFDRjtBQUNBLGdCQUFNLFNBQVM7QUFFZixnQkFBTSxrQkFBa0IsS0FBSyxJQUFJLElBQUk7QUFDckMsbUJBQVMsZ0NBQWdDO0FBQUEsWUFDdkMsaUJBQWlCLGVBQWU7QUFBQSxZQUNoQyxZQUNFO0FBQUEsWUFDRixhQUFhLGlCQUFpQixJQUFJLFNBQVM7QUFBQSxZQUMzQyxtQkFBbUI7QUFBQSxZQUNuQixvQkFBb0I7QUFBQSxZQUNwQixzQkFBc0IsdUJBQXVCO0FBQUEsVUFDL0MsQ0FBQztBQUNELGlDQUF1QixRQUFRLDBCQUEwQjtBQUFBLFlBQ3ZELFlBQVk7QUFBQSxZQUNaLGFBQWEsaUJBQWlCLElBQUksU0FBUztBQUFBLFlBQzNDLG1CQUFtQjtBQUFBLFlBQ25CLG9CQUFvQjtBQUFBLFVBQ3RCLENBQUM7QUFFRCx5QkFBZSxJQUFJLFdBQVcsTUFBTTtBQUNwQyx5QkFBZSxJQUFJLFdBQVcsS0FBSyxFQUFFO0FBQ3JDLCtCQUFxQixJQUFJLFdBQVcsT0FBTyxxQkFBcUI7QUFDaEUsMkJBQWlCLElBQUksV0FBVyxlQUFlO0FBRS9DLGdCQUFNLFlBQVksS0FBSyxJQUFJO0FBQzNCLDRCQUFrQixJQUFJLFdBQVcsU0FBUztBQUcxQyxpQkFBTyxnQkFBZ0IsV0FBVyxXQUFXLFNBQVMsRUFBRTtBQUd4RCxnQkFBTSxTQUFTLGVBQWUsU0FBUztBQUN2QyxjQUFJO0FBQ0osY0FBSSxPQUFPLFdBQVc7QUFDcEIsa0JBQU0sTUFBTSxPQUFPLFVBQVUsWUFBWSxHQUFHO0FBQzVDLGdCQUFJLE1BQU0sR0FBRztBQUNYLGlDQUFtQixHQUFHLE9BQU8sVUFBVSxNQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksTUFBTSxHQUFHLE9BQU8sVUFBVSxNQUFNLEdBQUcsQ0FBQztBQUFBLFlBQzlGLE9BQU87QUFDTCxpQ0FBbUIsR0FBRyxPQUFPLFNBQVMsSUFBSSxNQUFNO0FBQUEsWUFDbEQ7QUFBQSxVQUNGLFdBQVcsT0FBTyxXQUFXLFFBQVEsSUFBSSxjQUFjLE9BQU87QUFDNUQsK0JBQW1CRjtBQUFBLGNBQ2pCQyxRQUFPO0FBQUEsY0FDUDtBQUFBLGNBQ0Esa0JBQWtCLE1BQU07QUFBQSxZQUMxQjtBQUFBLFVBQ0Y7QUFFQSxjQUFJLGtCQUFrQjtBQUNwQixtQkFBTyxXQUFXLGNBQWMsZ0JBQWdCLEVBQUU7QUFBQSxVQUNwRDtBQUlBLGlCQUFPO0FBQUEsWUFDTDtBQUFBLFlBQ0Esb0JBQW9CLGlCQUFpQixPQUFPLGlCQUFpQjtBQUFBLFVBQy9EO0FBR0EsNkJBQW1CO0FBQ25CLGlCQUFPLFlBQVksZUFBZTtBQU1sQyxlQUFLLGtCQUFrQixpQkFBaUIsT0FBTyxVQUFVLEVBQ3RELEtBQUssV0FBUztBQUNiLGdCQUFJLFNBQVMsZUFBZSxJQUFJLFNBQVMsR0FBRztBQUMxQyw2QkFBZSxJQUFJLGVBQWU7QUFDbEMscUJBQU8sZ0JBQWdCLGlCQUFpQixLQUFLO0FBQzdDO0FBQUEsZ0JBQ0UsbUNBQW1DLGVBQWUsS0FBSyxLQUFLO0FBQUEsY0FDOUQ7QUFBQSxZQUNGO0FBQUEsVUFDRixDQUFDLEVBQ0E7QUFBQSxZQUFNLFNBQ0w7QUFBQSxjQUNFLDRDQUE0QyxlQUFlLEtBQUssR0FBRztBQUFBLGNBQ25FLEVBQUUsT0FBTyxRQUFRO0FBQUEsWUFDbkI7QUFBQSxVQUNGO0FBR0YsZ0JBQU0sWUFDSixPQUFPLG9CQUFvQjtBQUM3QixjQUFJLFlBQVksR0FBRztBQUNqQixrQkFBTSxRQUFRO0FBQUEsY0FDWjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFDQSwwQkFBYyxJQUFJLFdBQVcsS0FBSztBQUFBLFVBQ3BDO0FBS0EsY0FBSSxVQUFVO0FBQ1osdUJBQVcsSUFBSSxTQUFTO0FBQUEsVUFDMUI7QUFDQSx3QkFBYyxTQUFTLFdBQVcsT0FBTyxxQkFBcUI7QUFFOUQsZUFBSyxPQUFPLEtBQUssS0FBSyxjQUFjLFdBQVcsV0FBVyxNQUFNLENBQUM7QUFDakU7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUNFLGdCQUFNLFFBQVE7QUFHZDtBQUFBLFlBQ0Usb0NBQW9DLFFBQVE7QUFBQSxVQUM5QztBQUNBO0FBQUEsTUFDSjtBQU1BLFVBQUksd0JBQXdCO0FBQzFCLGNBQU0sTUFBTSxhQUFhLE9BQU87QUFDaEMsWUFBSSxXQUFXLHNDQUFzQyxHQUFHO0FBQ3RELGdCQUFNLHlCQUF5QjtBQUMvQixnQkFBTTtBQUFBLFlBQ0osV0FBVztBQUFBLFlBQ1gsSUFBSTtBQUFBLFVBQ047QUFBQSxRQUNGLFdBQVcsV0FBVyw0Q0FBNEMsR0FBRztBQUNuRSxnQkFBTTtBQUFBLFlBQ0osV0FBVztBQUFBLFlBQ1gsSUFBSTtBQUFBLFVBQ047QUFBQSxRQUNGO0FBQ0EsWUFBSSxRQUFRO0FBQUEsTUFDZDtBQUFBLElBQ0YsU0FBUyxLQUFLO0FBQ1osVUFBSSxXQUFXLFNBQVM7QUFDdEI7QUFBQSxNQUNGO0FBR0EsVUFBSSxlQUFlLGtCQUFrQjtBQUNuQyxvQkFBWTtBQUVaLFlBQUksbUJBQW1CLElBQUksU0FBUyxHQUFHO0FBQ3JDLGlCQUFPLFVBQVUsSUFBSSxPQUFPO0FBQUEsUUFDOUIsV0FBVyxrQkFBa0IsR0FBRyxHQUFHO0FBR2pDLDBCQUFnQix1Q0FBdUMsSUFBSSxPQUFPLEVBQUU7QUFBQSxRQUN0RSxPQUFPO0FBQ0wsaUJBQU8sU0FBUyxJQUFJLE9BQU87QUFDM0IsbUJBQVMsR0FBRztBQUFBLFFBQ2Q7QUFDQSxpQkFBUyw0QkFBNEI7QUFBQSxVQUNuQyxRQUFRLElBQUk7QUFBQSxVQUNaLFlBQ0UsSUFBSTtBQUFBLFFBQ1IsQ0FBQztBQUNEO0FBQUEsVUFDRSxtQkFBbUIsSUFBSSxTQUFTLElBQUksU0FBUztBQUFBLFVBQzdDO0FBQUEsVUFDQSxFQUFFLFFBQVEsSUFBSSxRQUFRLFlBQVksSUFBSSxVQUFVO0FBQUEsUUFDbEQ7QUFDQTtBQUFBLE1BQ0Y7QUFFQSxZQUFNLFNBQVMsbUJBQW1CLEdBQUc7QUFFckMsVUFBSSxrQkFBa0IsR0FBRyxLQUFLLGNBQWMsR0FBRyxHQUFHO0FBQ2hELGNBQU0sTUFBTSxLQUFLLElBQUk7QUFLckIsWUFDRSxzQkFBc0IsUUFDdEIsTUFBTSxvQkFBb0IsOEJBQThCLGFBQWEsR0FDckU7QUFDQTtBQUFBLFlBQ0Usd0NBQXdDLEtBQUssT0FBTyxNQUFNLHFCQUFxQixHQUFJLENBQUM7QUFBQSxVQUN0RjtBQUNBLGlDQUF1QixRQUFRLDhCQUE4QjtBQUFBLFlBQzNELE9BQU8sTUFBTTtBQUFBLFVBQ2YsQ0FBQztBQUNELDJCQUFpQjtBQUNqQix3QkFBYztBQUNkLDhCQUFvQjtBQUNwQiwyQkFBaUI7QUFBQSxRQUNuQjtBQUNBLDRCQUFvQjtBQUVwQixZQUFJLENBQUMsZ0JBQWdCO0FBQ25CLDJCQUFpQjtBQUFBLFFBQ25CO0FBQ0EsY0FBTSxVQUFVLE1BQU07QUFDdEIsWUFBSSxXQUFXLGNBQWMsY0FBYztBQUN6QyxpQkFBTztBQUFBLFlBQ0wsMEJBQTBCLEtBQUssTUFBTSxVQUFVLEdBQU0sQ0FBQztBQUFBLFVBQ3hEO0FBQ0EsbUJBQVMsNkJBQTZCO0FBQUEsWUFDcEMsWUFDRTtBQUFBLFlBQ0YsWUFBWTtBQUFBLFVBQ2QsQ0FBQztBQUNELGlDQUF1QixTQUFTLHVCQUF1QjtBQUFBLFlBQ3JELFlBQVk7QUFBQSxZQUNaLFlBQVk7QUFBQSxVQUNkLENBQUM7QUFDRCxzQkFBWTtBQUNaO0FBQUEsUUFDRjtBQUdBLDRCQUFvQjtBQUNwQix5QkFBaUI7QUFFakIsc0JBQWMsY0FDVixLQUFLLElBQUksY0FBYyxHQUFHLGNBQWMsU0FBUyxJQUNqRCxjQUFjO0FBQ2xCLGNBQU0sUUFBUSxVQUFVLFdBQVc7QUFDbkMsZUFBTztBQUFBLFVBQ0wsaUNBQWlDLFlBQVksS0FBSyxDQUFDLEtBQUssS0FBSyxNQUFNLFVBQVUsR0FBSSxDQUFDLGVBQWUsTUFBTTtBQUFBLFFBQ3pHO0FBQ0EsZUFBTztBQUFBLFVBQ0wsWUFBWSxLQUFLO0FBQUEsVUFDakIsZUFBZSxPQUFPO0FBQUEsUUFDeEI7QUFNQSxZQUFJLHNCQUFzQixFQUFFLHNDQUFzQyxHQUFHO0FBQ25FLGdCQUFNLHlCQUF5QjtBQUFBLFFBQ2pDO0FBQ0EsY0FBTSxNQUFNLE9BQU8sVUFBVTtBQUFBLE1BQy9CLE9BQU87QUFDTCxjQUFNLE1BQU0sS0FBSyxJQUFJO0FBR3JCLFlBQ0Usc0JBQXNCLFFBQ3RCLE1BQU0sb0JBQW9CLDhCQUE4QixhQUFhLEdBQ3JFO0FBQ0E7QUFBQSxZQUNFLHdDQUF3QyxLQUFLLE9BQU8sTUFBTSxxQkFBcUIsR0FBSSxDQUFDO0FBQUEsVUFDdEY7QUFDQSxpQ0FBdUIsUUFBUSw4QkFBOEI7QUFBQSxZQUMzRCxPQUFPLE1BQU07QUFBQSxVQUNmLENBQUM7QUFDRCwyQkFBaUI7QUFDakIsd0JBQWM7QUFDZCw4QkFBb0I7QUFDcEIsMkJBQWlCO0FBQUEsUUFDbkI7QUFDQSw0QkFBb0I7QUFFcEIsWUFBSSxDQUFDLG1CQUFtQjtBQUN0Qiw4QkFBb0I7QUFBQSxRQUN0QjtBQUNBLGNBQU0sVUFBVSxNQUFNO0FBQ3RCLFlBQUksV0FBVyxjQUFjLGlCQUFpQjtBQUM1QyxpQkFBTztBQUFBLFlBQ0wseUJBQXlCLEtBQUssTUFBTSxVQUFVLEdBQU0sQ0FBQztBQUFBLFVBQ3ZEO0FBQ0EsbUJBQVMsNkJBQTZCO0FBQUEsWUFDcEMsWUFDRTtBQUFBLFlBQ0YsWUFBWTtBQUFBLFVBQ2QsQ0FBQztBQUNELGlDQUF1QixTQUFTLHVCQUF1QjtBQUFBLFlBQ3JELFlBQVk7QUFBQSxZQUNaLFlBQVk7QUFBQSxVQUNkLENBQUM7QUFDRCxzQkFBWTtBQUNaO0FBQUEsUUFDRjtBQUdBLHlCQUFpQjtBQUNqQixzQkFBYztBQUVkLHlCQUFpQixpQkFDYixLQUFLLElBQUksaUJBQWlCLEdBQUcsY0FBYyxZQUFZLElBQ3ZELGNBQWM7QUFDbEIsY0FBTSxRQUFRLFVBQVUsY0FBYztBQUN0QyxlQUFPO0FBQUEsVUFDTCw0QkFBNEIsWUFBWSxLQUFLLENBQUMsS0FBSyxLQUFLLE1BQU0sVUFBVSxHQUFJLENBQUMsZUFBZSxNQUFNO0FBQUEsUUFDcEc7QUFDQSxlQUFPO0FBQUEsVUFDTCxZQUFZLEtBQUs7QUFBQSxVQUNqQixlQUFlLE9BQU87QUFBQSxRQUN4QjtBQUNBLFlBQUksc0JBQXNCLEVBQUUsc0NBQXNDLEdBQUc7QUFDbkUsZ0JBQU0seUJBQXlCO0FBQUEsUUFDakM7QUFDQSxjQUFNLE1BQU0sT0FBTyxVQUFVO0FBQUEsTUFDL0I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUdBLG9CQUFrQjtBQUNsQixTQUFPLFlBQVk7QUFFbkIsUUFBTSxpQkFBaUIsS0FBSyxJQUFJLElBQUk7QUFDcEMsV0FBUyx5QkFBeUI7QUFBQSxJQUNoQyxpQkFBaUIsZUFBZTtBQUFBLElBQ2hDLGtCQUFrQjtBQUFBLEVBQ3BCLENBQUM7QUFDRCx5QkFBdUIsUUFBUSxtQkFBbUI7QUFBQSxJQUNoRCxpQkFBaUIsZUFBZTtBQUFBLElBQ2hDLGtCQUFrQjtBQUFBLEVBQ3BCLENBQUM7QUFXRCxRQUFNLG9CQUFvQixJQUFJLElBQUksZUFBZSxLQUFLLENBQUM7QUFDdkQsTUFBSSxrQkFBa0I7QUFDcEIsc0JBQWtCLElBQUksZ0JBQWdCO0FBQUEsRUFDeEM7QUFFQSxRQUFNLG1CQUFtQixJQUFJLElBQUksZ0JBQWdCO0FBRWpELE1BQUksZUFBZSxPQUFPLEdBQUc7QUFDM0I7QUFBQSxNQUNFLG1DQUFtQyxlQUFlLElBQUk7QUFBQSxJQUN4RDtBQUNBLFdBQU87QUFBQSxNQUNMLGlCQUFpQixlQUFlLElBQUk7QUFBQSxJQUN0QztBQUlBLFVBQU0sa0JBQWtCLElBQUksSUFBSSxjQUFjO0FBRTlDLGVBQVcsQ0FBQyxXQUFXLE1BQU0sS0FBSyxlQUFlLFFBQVEsR0FBRztBQUMxRDtBQUFBLFFBQ0Usa0RBQWtELFNBQVM7QUFBQSxNQUM3RDtBQUNBLGFBQU8sS0FBSztBQUFBLElBQ2Q7QUFFQSxVQUFNLFVBQVUsSUFBSSxnQkFBZ0I7QUFDcEMsVUFBTSxRQUFRLEtBQUs7QUFBQSxNQUNqQixRQUFRLFdBQVcsQ0FBQyxHQUFHLGVBQWUsT0FBTyxDQUFDLEVBQUUsSUFBSSxPQUFLLEVBQUUsSUFBSSxDQUFDO0FBQUEsTUFDaEUsTUFBTSxjQUFjLG1CQUFtQixLQUFRLFFBQVEsTUFBTTtBQUFBLElBQy9ELENBQUM7QUFDRCxZQUFRLE1BQU07QUFHZCxlQUFXLENBQUMsS0FBSyxNQUFNLEtBQUssZUFBZSxRQUFRLEdBQUc7QUFDcEQsc0JBQWdCLG1EQUFtRCxHQUFHLEVBQUU7QUFDeEUsYUFBTyxVQUFVO0FBQUEsSUFDbkI7QUFHQSxlQUFXLFNBQVMsY0FBYyxPQUFPLEdBQUc7QUFDMUMsbUJBQWEsS0FBSztBQUFBLElBQ3BCO0FBQ0Esa0JBQWMsTUFBTTtBQUNwQixrQkFBYyxVQUFVO0FBTXhCLFFBQUksaUJBQWlCLE9BQU8sR0FBRztBQUM3QixZQUFNLHFCQUFxQixDQUFDLEdBQUcsaUJBQWlCLE9BQU8sQ0FBQztBQUN4RCx1QkFBaUIsTUFBTTtBQUN2QjtBQUFBLFFBQ0UsaUNBQWlDLG1CQUFtQixNQUFNO0FBQUEsTUFDNUQ7QUFDQSxZQUFNLFFBQVE7QUFBQSxRQUNaLG1CQUFtQjtBQUFBLFVBQUksUUFDckI7QUFBQSxZQUNFLEdBQUc7QUFBQSxZQUNILEdBQUc7QUFBQSxZQUNILEdBQUc7QUFBQSxZQUNILEdBQUc7QUFBQSxVQUNMO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBR0EsVUFBTSxRQUFRO0FBQUEsTUFDWixDQUFDLEdBQUcsZ0JBQWdCLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLFdBQVcsTUFBTSxNQUFNO0FBQzFELGVBQU8sSUFDSixTQUFTLGVBQWUsUUFBUSxJQUFJLEVBQ3BDO0FBQUEsVUFBTSxTQUNMLE9BQU87QUFBQSxZQUNMLHVCQUF1QixNQUFNLGdCQUFnQixTQUFTLEtBQUssYUFBYSxHQUFHLENBQUM7QUFBQSxVQUM5RTtBQUFBLFFBQ0Y7QUFBQSxNQUNKLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUtBLE1BQUksZ0JBQWdCLE9BQU8sR0FBRztBQUM1QixVQUFNLFFBQVEsV0FBVyxDQUFDLEdBQUcsZUFBZSxDQUFDO0FBQUEsRUFDL0M7QUFZQSxNQUNFLFFBQVEsUUFBUSxLQUNoQixPQUFPLGNBQWMsb0JBQ3JCLG9CQUNBLENBQUMsV0FDRDtBQUNBLFdBQU87QUFBQSxNQUNMO0FBQUEsSUFDRjtBQUNBO0FBQUEsTUFDRSw0RUFBNEUsZ0JBQWdCO0FBQUEsSUFDOUY7QUFDQTtBQUFBLEVBQ0Y7QUFJQSxNQUFJLGtCQUFrQixPQUFPLEdBQUc7QUFDOUI7QUFBQSxNQUNFLCtCQUErQixrQkFBa0IsSUFBSTtBQUFBLElBQ3ZEO0FBQ0EsVUFBTSxRQUFRO0FBQUEsTUFDWixDQUFDLEdBQUcsaUJBQWlCLEVBQUU7QUFBQSxRQUFJLGVBQ3pCLElBQ0c7QUFBQSxVQUNDLGlCQUFpQixJQUFJLFNBQVMsS0FBSyxrQkFBa0IsU0FBUztBQUFBLFFBQ2hFLEVBQ0M7QUFBQSxVQUFNLFNBQ0wsT0FBTztBQUFBLFlBQ0wsNkJBQTZCLFNBQVMsS0FBSyxhQUFhLEdBQUcsQ0FBQztBQUFBLFVBQzlEO0FBQUEsUUFDRjtBQUFBLE1BQ0o7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUlBLE1BQUk7QUFDRixVQUFNLElBQUksc0JBQXNCLGFBQWE7QUFDN0M7QUFBQSxNQUNFO0FBQUEsSUFDRjtBQUNBLFdBQU8sV0FBVywyQkFBMkI7QUFBQSxFQUMvQyxTQUFTLEtBQUs7QUFDWixXQUFPLFdBQVcscUNBQXFDLGFBQWEsR0FBRyxDQUFDLEVBQUU7QUFBQSxFQUM1RTtBQUtBLFFBQU0sRUFBRSxtQkFBbUIsSUFBSSxNQUFNLE9BQU8sOEJBQW9CO0FBQ2hFLFFBQU0sbUJBQW1CLE9BQU8sR0FBRztBQUVuQyxTQUFPLFdBQVcsc0JBQXNCO0FBQzFDO0FBRUEsSUFBTSx5QkFBeUIsb0JBQUksSUFBSTtBQUFBLEVBQ3JDO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNGLENBQUM7QUFFTSxTQUFTLGtCQUFrQixLQUF1QjtBQUN2RCxNQUNFLE9BQ0EsT0FBTyxRQUFRLFlBQ2YsVUFBVSxPQUNWLE9BQU8sSUFBSSxTQUFTLFlBQ3BCLHVCQUF1QixJQUFJLElBQUksSUFBSSxHQUNuQztBQUNBLFdBQU87QUFBQSxFQUNUO0FBQ0EsU0FBTztBQUNUO0FBR08sU0FBUyxjQUFjLEtBQXVCO0FBQ25ELFNBQ0UsQ0FBQyxDQUFDLE9BQ0YsT0FBTyxRQUFRLFlBQ2YsVUFBVSxPQUNWLE9BQU8sSUFBSSxTQUFTLFlBQ3BCLElBQUksU0FBUztBQUVqQjtBQUdBLFNBQVMsVUFBVSxJQUFvQjtBQUNyQyxTQUFPLEtBQUssSUFBSSxHQUFHLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxPQUFPLElBQUksRUFBRTtBQUM3RDtBQUVBLFNBQVMsWUFBWSxJQUFvQjtBQUN2QyxTQUFPLE1BQU0sTUFBTyxJQUFJLEtBQUssS0FBTSxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxNQUFNLEVBQUUsQ0FBQztBQUN0RTtBQU1BLGVBQWUsa0JBQ2IsS0FDQSxlQUNBLFFBQ0EsUUFDQSxjQUFjLEtBQ0M7QUFDZixRQUFNLGVBQWU7QUFFckIsV0FBUyxVQUFVLEdBQUcsV0FBVyxjQUFjLFdBQVc7QUFDeEQsUUFBSTtBQUNGLFlBQU0sSUFBSSxTQUFTLGVBQWUsUUFBUSxLQUFLO0FBQy9DO0FBQUEsUUFDRSwrQ0FBK0MsTUFBTSxlQUFlLE9BQU8sSUFBSSxZQUFZO0FBQUEsTUFDN0Y7QUFDQTtBQUFBLElBQ0YsU0FBUyxLQUFLO0FBRVosVUFBSSxlQUFlLGtCQUFrQjtBQUNuQyxZQUFJLGtCQUFrQixHQUFHLEdBQUc7QUFDMUI7QUFBQSxZQUNFLDZDQUE2QyxNQUFNLEtBQUssSUFBSSxPQUFPO0FBQUEsVUFDckU7QUFBQSxRQUNGLE9BQU87QUFDTCxpQkFBTyxTQUFTLHVCQUF1QixNQUFNLEtBQUssSUFBSSxPQUFPLEVBQUU7QUFBQSxRQUNqRTtBQUNBLCtCQUF1QixTQUFTLDJCQUEyQjtBQUFBLFVBQ3pELFVBQVU7QUFBQSxVQUNWLE9BQU87QUFBQSxRQUNULENBQUM7QUFDRDtBQUFBLE1BQ0Y7QUFDQSxZQUFNLFNBQVMsYUFBYSxHQUFHO0FBQy9CLFVBQUksVUFBVSxjQUFjO0FBQzFCLGNBQU0sUUFBUSxVQUFVLGNBQWMsS0FBSyxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUM7QUFDOUQsZUFBTztBQUFBLFVBQ0wsdUJBQXVCLE1BQU0sYUFBYSxPQUFPLElBQUksWUFBWSxrQkFBa0IsWUFBWSxLQUFLLENBQUMsS0FBSyxNQUFNO0FBQUEsUUFDbEg7QUFDQSxjQUFNLE1BQU0sS0FBSztBQUFBLE1BQ25CLE9BQU87QUFDTCxlQUFPO0FBQUEsVUFDTCx1QkFBdUIsTUFBTSxVQUFVLFlBQVksY0FBYyxNQUFNO0FBQUEsUUFDekU7QUFDQSwrQkFBdUIsU0FBUywyQkFBMkI7QUFBQSxVQUN6RCxVQUFVO0FBQUEsUUFDWixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFFQSxTQUFTLGlCQUNQLFdBQ0EsV0FDQSxRQUNBLGtCQUNBLFFBQ007QUFDTjtBQUFBLElBQ0UsOEJBQThCLFNBQVMsb0JBQW9CLGVBQWUsU0FBUyxDQUFDO0FBQUEsRUFDdEY7QUFDQSxXQUFTLGdDQUFnQztBQUFBLElBQ3ZDLFlBQVk7QUFBQSxFQUNkLENBQUM7QUFDRCxTQUFPO0FBQUEsSUFDTDtBQUFBLElBQ0EsMkJBQTJCLGVBQWUsU0FBUyxDQUFDO0FBQUEsRUFDdEQ7QUFDQSxtQkFBaUIsSUFBSSxTQUFTO0FBQzlCLFNBQU8sS0FBSztBQUNkO0FBdUJBLElBQU0sb0JBQW9CLENBQUMsV0FBVyxZQUFZLFVBQVU7QUFFNUQsU0FBUyxnQkFBZ0IsS0FBNkM7QUFDcEUsTUFBSSxRQUFRLFVBQVcsUUFBTztBQUM5QixNQUFJLFFBQVEsV0FBWSxRQUFPO0FBQy9CLE1BQUksUUFBUSxXQUFZLFFBQU87QUFDL0IsU0FBTyw0QkFBNEIsa0JBQWtCLEtBQUssSUFBSSxDQUFDLFVBQVUsT0FBTyxXQUFXO0FBQzdGO0FBRUEsU0FBUyxtQkFBbUIsS0FBMEM7QUFDcEUsUUFBTSxJQUFJLFFBQVEsU0FBWSxNQUFNLFNBQVMsS0FBSyxFQUFFO0FBQ3BELE1BQUksTUFBTSxDQUFDLEtBQUssSUFBSSxHQUFHO0FBQ3JCLFdBQU8sZ0RBQWdELE9BQU8sV0FBVztBQUFBLEVBQzNFO0FBQ0EsU0FBTztBQUNUO0FBRU8sU0FBUyxVQUFVLE1BQTRCO0FBQ3BELE1BQUksVUFBVTtBQUNkLE1BQUksVUFBVTtBQUNkLE1BQUk7QUFDSixNQUFJO0FBQ0osTUFBSTtBQUNKLE1BQUk7QUFDSixNQUFJLE9BQU87QUFDWCxNQUFJO0FBQ0osTUFBSTtBQUNKLE1BQUk7QUFDSixNQUFJO0FBQ0osTUFBSSxrQkFBa0I7QUFFdEIsV0FBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFFBQVEsS0FBSztBQUNwQyxVQUFNLE1BQU0sS0FBSyxDQUFDO0FBQ2xCLFFBQUksUUFBUSxZQUFZLFFBQVEsTUFBTTtBQUNwQyxhQUFPO0FBQUEsSUFDVCxXQUFXLFFBQVEsZUFBZSxRQUFRLE1BQU07QUFDOUMsZ0JBQVU7QUFBQSxJQUNaLFdBQVcsUUFBUSxhQUFhO0FBQzlCLGdCQUFVO0FBQUEsSUFDWixXQUFXLFFBQVEsZ0JBQWdCO0FBQ2pDLGdCQUFVO0FBQUEsSUFDWixXQUFXLFFBQVEsa0JBQWtCLElBQUksSUFBSSxLQUFLLFFBQVE7QUFDeEQsa0JBQVksUUFBUSxLQUFLLEVBQUUsQ0FBQyxDQUFFO0FBQUEsSUFDaEMsV0FBVyxJQUFJLFdBQVcsZUFBZSxHQUFHO0FBQzFDLGtCQUFZLFFBQVEsSUFBSSxNQUFNLGdCQUFnQixNQUFNLENBQUM7QUFBQSxJQUN2RCxXQUFXLFFBQVEsdUJBQXVCLElBQUksSUFBSSxLQUFLLFFBQVE7QUFDN0QseUJBQW1CLFNBQVMsS0FBSyxFQUFFLENBQUMsR0FBSSxFQUFFLElBQUk7QUFBQSxJQUNoRCxXQUFXLElBQUksV0FBVyxvQkFBb0IsR0FBRztBQUMvQyx5QkFDRSxTQUFTLElBQUksTUFBTSxxQkFBcUIsTUFBTSxHQUFHLEVBQUUsSUFBSTtBQUFBLElBQzNELFdBQVcsUUFBUSx1QkFBdUIsSUFBSSxJQUFJLEtBQUssUUFBUTtBQUM3RCx1QkFBaUIsS0FBSyxFQUFFLENBQUM7QUFBQSxJQUMzQixXQUFXLElBQUksV0FBVyxvQkFBb0IsR0FBRztBQUMvQyx1QkFBaUIsSUFBSSxNQUFNLHFCQUFxQixNQUFNO0FBQUEsSUFDeEQsV0FBVyxRQUFRLFlBQVksSUFBSSxJQUFJLEtBQUssUUFBUTtBQUNsRCxhQUFPLEtBQUssRUFBRSxDQUFDO0FBQUEsSUFDakIsV0FBVyxJQUFJLFdBQVcsU0FBUyxHQUFHO0FBQ3BDLGFBQU8sSUFBSSxNQUFNLFVBQVUsTUFBTTtBQUFBLElBQ25DLFdBQ0UsUUFBUSxRQUFRLEtBQ2hCLFFBQVEsa0JBQ1IsSUFBSSxJQUFJLEtBQUssUUFDYjtBQUNBLGtCQUFZLEtBQUssRUFBRSxDQUFDO0FBQ3BCLFVBQUksQ0FBQyxXQUFXO0FBQ2QsZUFBTyxVQUFVLCtCQUErQjtBQUFBLE1BQ2xEO0FBQUEsSUFDRixXQUFXLFFBQVEsUUFBUSxLQUFLLElBQUksV0FBVyxlQUFlLEdBQUc7QUFDL0Qsa0JBQVksSUFBSSxNQUFNLGdCQUFnQixNQUFNO0FBQzVDLFVBQUksQ0FBQyxXQUFXO0FBQ2QsZUFBTyxVQUFVLCtCQUErQjtBQUFBLE1BQ2xEO0FBQUEsSUFDRixXQUFXLFFBQVEsUUFBUSxNQUFNLFFBQVEsZ0JBQWdCLFFBQVEsT0FBTztBQUN0RSx3QkFBa0I7QUFBQSxJQUNwQixXQUFXLFFBQVEsYUFBYSxJQUFJLFdBQVcsVUFBVSxHQUFHO0FBQzFELFVBQUksY0FBYyxRQUFXO0FBQzNCLGVBQU8sVUFBVSxvQ0FBb0M7QUFBQSxNQUN2RDtBQUNBLFlBQU0sTUFBTSxJQUFJLFdBQVcsVUFBVSxJQUNqQyxJQUFJLE1BQU0sV0FBVyxNQUFNLElBQzNCLEtBQUssRUFBRSxDQUFDO0FBQ1osWUFBTSxJQUFJLGdCQUFnQixHQUFHO0FBQzdCLFVBQUksTUFBTSxvQkFBb0IsTUFBTSxjQUFjLE1BQU0sWUFBWTtBQUNsRSxvQkFBWTtBQUFBLE1BQ2QsT0FBTztBQUNMLGVBQU8sVUFBVSxDQUFDO0FBQUEsTUFDcEI7QUFBQSxJQUNGLFdBQVcsUUFBUSxnQkFBZ0IsSUFBSSxXQUFXLGFBQWEsR0FBRztBQUNoRSxVQUFJLGFBQWEsUUFBVztBQUMxQixlQUFPLFVBQVUsdUNBQXVDO0FBQUEsTUFDMUQ7QUFDQSxZQUFNLE1BQU0sSUFBSSxXQUFXLGFBQWEsSUFDcEMsSUFBSSxNQUFNLGNBQWMsTUFBTSxJQUM5QixLQUFLLEVBQUUsQ0FBQztBQUNaLFlBQU0sSUFBSSxtQkFBbUIsR0FBRztBQUNoQyxVQUFJLE9BQU8sTUFBTSxTQUFVLFlBQVc7QUFBQSxVQUNqQyxRQUFPLFVBQVUsQ0FBQztBQUFBLElBQ3pCLFdBQVcsUUFBUSwyQkFBMkI7QUFDNUMsMkJBQXFCO0FBQUEsSUFDdkIsV0FBVyxRQUFRLDhCQUE4QjtBQUMvQywyQkFBcUI7QUFBQSxJQUN2QixPQUFPO0FBQ0wsYUFBTztBQUFBLFFBQ0wscUJBQXFCLEdBQUc7QUFBQTtBQUFBLE1BQzFCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFNQSxNQUFJLGNBQWMsb0JBQW9CLGFBQWEsUUFBVztBQUM1RCxXQUFPO0FBQUEsTUFDTDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBS0EsT0FDRyxhQUFhLHFCQUNiLGNBQWMsVUFDYixhQUFhLFVBQ2IsdUJBQXVCLFNBQ3pCO0FBQ0EsV0FBTztBQUFBLE1BQ0w7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNBLE1BQUksYUFBYSxpQkFBaUI7QUFDaEMsV0FBTyxVQUFVLHNEQUFzRDtBQUFBLEVBQ3pFO0FBRUEsU0FBTztBQUFBLElBQ0w7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFFQSxXQUFTLFVBQVUsT0FBMkI7QUFDNUMsV0FBTztBQUFBLE1BQ0w7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBRUEsZUFBZSxZQUEyQjtBQUd4QyxRQUFNLEVBQUUsMEJBQTBCLElBQUksTUFBTSxPQUFPLDRCQUF5QjtBQUM1RSxRQUFNLFFBQVEsMEJBQTBCLEtBQUssSUFBSTtBQUNqRCxRQUFNLGFBQWEsTUFBTSwyQkFBMkI7QUFDcEQsUUFBTSxnQkFBZ0IsYUFDbEI7QUFBQTtBQUFBO0FBQUEsNkRBR3VELHNCQUFzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFNN0U7QUFDSixRQUFNLG9CQUFvQixhQUN0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUUE7QUFDSixRQUFNLGFBQWEsYUFDZjtBQUFBLElBRUE7QUFDSixRQUFNLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVFiLFFBQVEsUUFBUSxJQUNaO0FBQUE7QUFBQTtBQUFBLElBSUEsRUFDTjtBQUFBLHNDQUNzQyxLQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFJekMsYUFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLYixpQkFBaUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlqQixVQUFVO0FBRVYsVUFBUSxJQUFJLElBQUk7QUFDbEI7QUFFQSxJQUFNLGdCQUFnQjtBQUd0QixTQUFTLG1CQUFtQixNQUFzQjtBQUVoRCxRQUFNLE9BQU8sS0FBSyxRQUFRLFFBQVEsR0FBRyxFQUFFLEtBQUs7QUFDNUMsU0FBTyxnQkFBZ0IsTUFBTSxhQUFhO0FBQzVDO0FBV0EsZUFBZSxrQkFDYixpQkFDQSxTQUM2QjtBQUM3QixRQUFNLEVBQUUsaUJBQWlCLElBQUksTUFBTSxPQUFPLDhCQUFvQjtBQUM5RCxRQUFNLFVBQVUsTUFBTSxpQkFBaUIsaUJBQWlCLEVBQUUsUUFBUSxDQUFDO0FBQ25FLFNBQU8sU0FBUyxTQUFTO0FBQzNCO0FBRUEsZUFBc0IsV0FBVyxNQUErQjtBQUM5RCxRQUFNLFNBQVMsVUFBVSxJQUFJO0FBRTdCLE1BQUksT0FBTyxNQUFNO0FBQ2YsVUFBTSxVQUFVO0FBQ2hCO0FBQUEsRUFDRjtBQUNBLE1BQUksT0FBTyxPQUFPO0FBRWhCLFlBQVEsTUFBTSxVQUFVLE9BQU8sS0FBSyxFQUFFO0FBRXRDLFlBQVEsS0FBSyxDQUFDO0FBQUEsRUFDaEI7QUFFQSxRQUFNO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQSxXQUFXO0FBQUEsSUFDWCxVQUFVO0FBQUEsSUFDVixvQkFBb0I7QUFBQSxJQUNwQixXQUFXO0FBQUEsSUFDWDtBQUFBLEVBQ0YsSUFBSTtBQUdKLE1BQUksa0JBQWtCO0FBS3RCLE1BQUk7QUFFSixRQUFNLDBCQUNKLG9CQUFvQixVQUNwQixtQkFBbUIsVUFDbkIsNkJBQTZCO0FBSS9CLE1BQUksbUJBQW1CLFFBQVc7QUFDaEMsVUFBTSxFQUFFLGlCQUFpQixJQUFJLE1BQU0sT0FBTyw0QkFBeUI7QUFDbkUsVUFBTSxRQUEyQjtBQUNqQyxRQUFJLENBQUMsTUFBTSxTQUFTLGNBQWMsR0FBRztBQUVuQyxjQUFRO0FBQUEsUUFDTixtQ0FBbUMsY0FBYyxtQkFBbUIsTUFBTSxLQUFLLElBQUksQ0FBQztBQUFBLE1BQ3RGO0FBRUEsY0FBUSxLQUFLLENBQUM7QUFBQSxJQUNoQjtBQUFBLEVBQ0Y7QUFFQSxRQUFNLE1BQU0sUUFBUSxHQUFHO0FBSXZCLFFBQU0sRUFBRSxlQUFlLDRCQUE0QixJQUFJLE1BQU0sT0FDM0QsdUJBQ0Y7QUFDQSxnQkFBYztBQUlkLFFBQU0sRUFBRSxVQUFVLElBQUksTUFBTSxPQUFPLHNCQUFtQjtBQUN0RCxZQUFVO0FBT1YsUUFBTSxzQkFBc0IsTUFBTSwyQkFBMkI7QUFDN0QsTUFBSSwyQkFBMkIsQ0FBQyxxQkFBcUI7QUFDbkQsVUFBTSxjQUFjLHFDQUFxQztBQUFBLE1BQ3ZELFlBQVksb0JBQW9CO0FBQUEsTUFDaEMsZUFBZSxtQkFBbUI7QUFBQSxNQUNsQyw0QkFBNEIsNkJBQTZCO0FBQUEsSUFDM0QsQ0FBQztBQUtELFVBQU0sUUFBUSxLQUFLO0FBQUEsTUFDakIsUUFBUSxJQUFJLENBQUMsdUJBQXVCLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQztBQUFBLE1BQ3pELE1BQU0sS0FBSyxRQUFXLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFBQSxJQUN2QyxDQUFDLEVBQUUsTUFBTSxNQUFNO0FBQUEsSUFBQyxDQUFDO0FBRWpCLFlBQVE7QUFBQSxNQUNOO0FBQUEsSUFDRjtBQUVBLFlBQVEsS0FBSyxDQUFDO0FBQUEsRUFDaEI7QUFJQSxRQUFNLEVBQUUsZ0JBQWdCLFlBQVksSUFBSSxNQUFNLE9BQU8sc0JBQXVCO0FBQzVFLGlCQUFlLEdBQUc7QUFDbEIsY0FBWSxHQUFHO0FBSWYsTUFBSSxDQUFDLDRCQUE0QixHQUFHO0FBRWxDLFlBQVE7QUFBQSxNQUNOLDBEQUEwRCxHQUFHO0FBQUEsSUFDL0Q7QUFFQSxZQUFRLEtBQUssQ0FBQztBQUFBLEVBQ2hCO0FBR0EsUUFBTSxFQUFFLHNCQUFzQixrQ0FBa0MsSUFDOUQsTUFBTSxPQUFPLHFCQUFrQjtBQUNqQyxRQUFNLEVBQUUsc0JBQXNCLGlCQUFpQixJQUFJLE1BQU0sT0FDdkQsNkJBQ0Y7QUFFQSxRQUFNLGNBQWMscUJBQXFCO0FBQ3pDLE1BQUksQ0FBQyxhQUFhO0FBRWhCLFlBQVEsTUFBTSxrQkFBa0I7QUFFaEMsWUFBUSxLQUFLLENBQUM7QUFBQSxFQUNoQjtBQUdBLFFBQU07QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRixJQUFJLE1BQU0sT0FBTyx1QkFBb0I7QUFDckMsTUFBSSxDQUFDLGdCQUFnQixFQUFFLGtCQUFrQjtBQUN2QyxVQUFNLFdBQVcsTUFBTSxPQUFPLFVBQVU7QUFDeEMsVUFBTSxLQUFLLFNBQVMsZ0JBQWdCO0FBQUEsTUFDbEMsT0FBTyxRQUFRO0FBQUEsTUFDZixRQUFRLFFBQVE7QUFBQSxJQUNsQixDQUFDO0FBRUQsWUFBUTtBQUFBLE1BQ047QUFBQSxJQUNGO0FBQ0EsVUFBTSxTQUFTLE1BQU0sSUFBSSxRQUFnQixDQUFBRSxhQUFXO0FBQ2xELFNBQUcsU0FBUyxpQ0FBaUNBLFFBQU87QUFBQSxJQUN0RCxDQUFDO0FBQ0QsT0FBRyxNQUFNO0FBQ1QscUJBQWlCLGFBQVc7QUFDMUIsVUFBSSxRQUFRLGlCQUFrQixRQUFPO0FBQ3JDLGFBQU8sRUFBRSxHQUFHLFNBQVMsa0JBQWtCLEtBQUs7QUFBQSxJQUM5QyxDQUFDO0FBQ0QsUUFBSSxPQUFPLFlBQVksTUFBTSxPQUFPLE9BQU8sWUFBWSxNQUFNLE9BQU87QUFFbEUsY0FBUSxLQUFLLENBQUM7QUFBQSxJQUNoQjtBQUFBLEVBQ0Y7QUFVQSxNQUFJLFFBQVEsUUFBUSxLQUFLLGlCQUFpQjtBQUN4QyxVQUFNLEVBQUUsaUNBQWlDLElBQUksTUFBTSxPQUNqRCw4QkFDRjtBQUNBLFVBQU0sUUFBUSxNQUFNLGlDQUFpQyxHQUFHO0FBQ3hELFFBQUksQ0FBQyxPQUFPO0FBRVYsY0FBUTtBQUFBLFFBQ047QUFBQSxNQUNGO0FBRUEsY0FBUSxLQUFLLENBQUM7QUFBQSxJQUNoQjtBQUNBLFVBQU0sRUFBRSxTQUFTLEtBQUssV0FBVyxJQUFJO0FBQ3JDLFVBQU0sU0FBUyxLQUFLLE1BQU0sUUFBUSxRQUFRLEdBQU07QUFDaEQsVUFBTSxTQUFTLFNBQVMsS0FBSyxHQUFHLE1BQU0sTUFBTSxHQUFHLEtBQUssTUFBTSxTQUFTLEVBQUUsQ0FBQztBQUN0RSxVQUFNLFNBQVMsZUFBZSxNQUFNLGtCQUFrQixVQUFVLEtBQUs7QUFFckUsWUFBUTtBQUFBLE1BQ04sb0JBQW9CLFFBQVEsU0FBUyxLQUFLLE1BQU0sUUFBUSxNQUFNO0FBQUEsSUFDaEU7QUFDQSxzQkFBa0IsUUFBUTtBQUkxQix1QkFBbUI7QUFBQSxFQUNyQjtBQUlBLFFBQU0sVUFBVSxpQkFBaUI7QUFHakMsTUFDRSxRQUFRLFdBQVcsU0FBUyxLQUM1QixDQUFDLFFBQVEsU0FBUyxXQUFXLEtBQzdCLENBQUMsUUFBUSxTQUFTLFdBQVcsR0FDN0I7QUFFQSxZQUFRO0FBQUEsTUFDTjtBQUFBLElBQ0Y7QUFFQSxZQUFRLEtBQUssQ0FBQztBQUFBLEVBQ2hCO0FBT0EsUUFBTSxvQkFDSixRQUFRLElBQUksY0FBYyxTQUMxQixRQUFRLElBQUksb0NBQ1IsUUFBUSxJQUFJLG9DQUNaO0FBRU4sUUFBTSxFQUFFLFdBQVcsY0FBYyxZQUFZLElBQUksTUFBTSxPQUNyRCxvQkFDRjtBQUlBLFFBQU0sRUFBRSxzQkFBc0IsSUFBSSxNQUFNLE9BQU8sc0JBQW1CO0FBQ2xFLFFBQU0sb0JBQW9CLHNCQUFzQixLQUFLLFlBQVksR0FBRyxNQUFNO0FBUzFFLE1BQUksaUJBQWlCLHNCQUNqQix3QkFBd0IsRUFBRSx5QkFDMUI7QUFDSixNQUFJLG1CQUFtQixjQUFjLENBQUMsbUJBQW1CO0FBRXZELFlBQVE7QUFBQSxNQUNOO0FBQUEsSUFDRjtBQUNBLHFCQUFpQjtBQUNqQiw2QkFBeUIsYUFBVztBQUNsQyxVQUFJLFFBQVEsMkJBQTJCLE9BQVcsUUFBTztBQUN6RCxhQUFPLEVBQUUsR0FBRyxTQUFTLHdCQUF3QixPQUFVO0FBQUEsSUFDekQsQ0FBQztBQUFBLEVBQ0g7QUFLQSxNQUNFLHVCQUNBLENBQUMsa0JBQ0QscUJBQ0Esb0JBQW9CLFVBQ3BCLENBQUMsbUJBQ0QsUUFBUSxNQUFNLE9BQ2Q7QUFDQSxVQUFNLFdBQVcsTUFBTSxPQUFPLFVBQVU7QUFDeEMsVUFBTSxLQUFLLFNBQVMsZ0JBQWdCO0FBQUEsTUFDbEMsT0FBTyxRQUFRO0FBQUEsTUFDZixRQUFRLFFBQVE7QUFBQSxJQUNsQixDQUFDO0FBRUQsWUFBUTtBQUFBLE1BQ047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFLRjtBQUNBLFVBQU0sU0FBUyxNQUFNLElBQUksUUFBZ0IsQ0FBQUEsYUFBVztBQUNsRCxTQUFHLFNBQVMsK0JBQStCQSxRQUFPO0FBQUEsSUFDcEQsQ0FBQztBQUNELE9BQUcsTUFBTTtBQUNULFVBQU0sU0FDSixPQUFPLEtBQUssTUFBTSxNQUFNLGFBQWE7QUFDdkMscUJBQWlCO0FBQ2pCLGFBQVMsa0NBQWtDO0FBQUEsTUFDekMsWUFDRTtBQUFBLElBQ0osQ0FBQztBQUNELDZCQUF5QixhQUFXO0FBQ2xDLFVBQUksUUFBUSwyQkFBMkIsT0FBUSxRQUFPO0FBQ3RELGFBQU8sRUFBRSxHQUFHLFNBQVMsd0JBQXdCLE9BQU87QUFBQSxJQUN0RCxDQUFDO0FBQUEsRUFDSDtBQVlBLE1BQUk7QUFDSixNQUFJO0FBQ0osTUFBSSxpQkFBaUI7QUFDbkIsZ0JBQVk7QUFDWixzQkFBa0I7QUFBQSxFQUNwQixXQUFXLG9CQUFvQixRQUFXO0FBQ3hDLGdCQUFZO0FBQ1osc0JBQWtCO0FBQUEsRUFDcEIsV0FBVyxtQkFBbUIsUUFBVztBQUN2QyxnQkFBWTtBQUNaLHNCQUFrQjtBQUFBLEVBQ3BCLE9BQU87QUFDTCxnQkFBWSxzQkFBc0IsYUFBYTtBQUMvQyxzQkFBa0I7QUFBQSxFQUNwQjtBQUNBLFFBQU0sY0FDSixjQUFjLG1CQUNWLElBQ0Msa0JBQWtCO0FBUXpCLFFBQU0sbUJBQW1CLDRCQUE0QjtBQVNyRCxNQUFJLENBQUMsaUJBQWlCO0FBQ3BCLFVBQU0sRUFBRSxtQkFBbUIsSUFBSSxNQUFNLE9BQU8sOEJBQW9CO0FBQ2hFLFVBQU0sbUJBQW1CLEdBQUc7QUFBQSxFQUM5QjtBQUtBLE1BQUksY0FBYyxjQUFjLENBQUMsbUJBQW1CO0FBRWxELFlBQVE7QUFBQSxNQUNOO0FBQUEsSUFDRjtBQUVBLFlBQVEsS0FBSyxDQUFDO0FBQUEsRUFDaEI7QUFFQSxRQUFNLFNBQVMsTUFBTSxVQUFVO0FBQy9CLFFBQU0sYUFBYSxNQUFNLGFBQWE7QUFDdEMsUUFBTSxjQUFjLFNBQVM7QUFDN0IsUUFBTSxXQUFXLFdBQVc7QUFFNUIsUUFBTSxFQUFFLG9CQUFvQixJQUFJLE1BQU0sT0FBTyxxQkFBa0I7QUFDL0QsUUFBTSxNQUFNLHNCQUFzQjtBQUFBLElBQ2hDO0FBQUEsSUFDQSxnQkFBZ0I7QUFBQSxJQUNoQixlQUFlLE1BQU07QUFBQSxJQUNyQixTQUFTO0FBQUEsSUFDVCxXQUFXO0FBQUEsSUFDWDtBQUFBLEVBQ0YsQ0FBQztBQVNELE1BQUk7QUFDSixNQUFJLFFBQVEsUUFBUSxLQUFLLGlCQUFpQjtBQUN4QyxRQUFJO0FBQ0YsdUJBQWlCLGlCQUFpQixXQUFXO0FBQUEsSUFDL0MsUUFBUTtBQUVOLGNBQVE7QUFBQSxRQUNOLDhCQUE4QixlQUFlO0FBQUEsTUFDL0M7QUFFQSxjQUFRLEtBQUssQ0FBQztBQUFBLElBQ2hCO0FBSUEsVUFBTSxrQ0FBa0M7QUFDeEMseUJBQXFCO0FBQ3JCLFVBQU0sRUFBRSxpQkFBaUIsSUFBSSxNQUFNLE9BQU8sOEJBQW9CO0FBQzlELFVBQU0sVUFBVSxNQUFNLGlCQUFpQixpQkFBaUI7QUFBQSxNQUN0RDtBQUFBLE1BQ0EsZ0JBQWdCO0FBQUEsSUFDbEIsQ0FBQztBQUNELFFBQUksQ0FBQyxTQUFTO0FBS1osVUFBSSxrQkFBa0I7QUFDcEIsY0FBTSxFQUFFLG1CQUFtQixJQUFJLE1BQU0sT0FBTyw4QkFBb0I7QUFDaEUsY0FBTSxtQkFBbUIsZ0JBQWdCO0FBQUEsTUFDM0M7QUFFQSxjQUFRO0FBQUEsUUFDTixrQkFBa0IsZUFBZTtBQUFBLE1BQ25DO0FBRUEsY0FBUSxLQUFLLENBQUM7QUFBQSxJQUNoQjtBQUNBLFFBQUksQ0FBQyxRQUFRLGdCQUFnQjtBQUMzQixVQUFJLGtCQUFrQjtBQUNwQixjQUFNLEVBQUUsbUJBQW1CLElBQUksTUFBTSxPQUFPLDhCQUFvQjtBQUNoRSxjQUFNLG1CQUFtQixnQkFBZ0I7QUFBQSxNQUMzQztBQUVBLGNBQVE7QUFBQSxRQUNOLGtCQUFrQixlQUFlO0FBQUEsTUFDbkM7QUFFQSxjQUFRLEtBQUssQ0FBQztBQUFBLElBQ2hCO0FBQ0EseUJBQXFCLFFBQVE7QUFDN0I7QUFBQSxNQUNFLGtDQUFrQyxlQUFlLG1CQUFtQixrQkFBa0I7QUFBQSxJQUN4RjtBQUFBLEVBQ0Y7QUFFQSxRQUFNLFNBQXVCO0FBQUEsSUFDM0I7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0EsWUFBWTtBQUFBLElBQ1osZUFBZSxXQUFXO0FBQUEsSUFDMUI7QUFBQSxJQUNBLFlBQVk7QUFBQSxJQUNaO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBRUE7QUFBQSxJQUNFLDBCQUEwQixRQUFRLEdBQUcscUJBQXFCLHVCQUF1QixrQkFBa0IsS0FBSyxFQUFFLFFBQVEsR0FBRyxXQUFXLE1BQU0sZUFBZSxVQUFVLFlBQVksV0FBVztBQUFBLEVBQ3hMO0FBQ0E7QUFBQSxJQUNFLDRCQUE0QixPQUFPLHNCQUFzQixpQkFBaUI7QUFBQSxFQUM1RTtBQUNBO0FBQUEsSUFDRSx5QkFBeUIsT0FBTyxHQUFHLFlBQVksY0FBYyxTQUFTLEtBQUssRUFBRTtBQUFBLEVBQy9FO0FBR0EsTUFBSTtBQUNKLE1BQUk7QUFDSixNQUFJO0FBQ0YsVUFBTSxNQUFNLE1BQU0sSUFBSSwwQkFBMEIsTUFBTTtBQUN0RCxvQkFBZ0IsSUFBSTtBQUNwQix3QkFBb0IsSUFBSTtBQUFBLEVBQzFCLFNBQVMsS0FBSztBQUNaLGFBQVMsb0NBQW9DO0FBQUEsTUFDM0MsUUFBUSxlQUFlLG1CQUFtQixJQUFJLFNBQVM7QUFBQSxJQUN6RCxDQUFDO0FBR0QsWUFBUTtBQUFBLE1BQ04sZUFBZSxvQkFBb0IsSUFBSSxXQUFXLE1BQzlDLG9FQUNBLFVBQVUsYUFBYSxHQUFHLENBQUM7QUFBQSxJQUNqQztBQUVBLFlBQVEsS0FBSyxDQUFDO0FBQUEsRUFDaEI7QUFLQSxNQUFJO0FBQ0osTUFBSSxRQUFRLFFBQVEsS0FBSyxpQkFBaUI7QUFDeEMsUUFBSSxzQkFBc0Isa0JBQWtCLG9CQUFvQjtBQUs5RDtBQUFBLFFBQ0UsSUFBSTtBQUFBLFVBQ0YseUNBQXlDLGtCQUFrQixzQkFBc0IsYUFBYTtBQUFBLFFBQ2hHO0FBQUEsTUFDRjtBQUVBLGNBQVE7QUFBQSxRQUNOLHFDQUFxQyxlQUFlO0FBQUEsTUFDdEQ7QUFBQSxJQUdGLE9BQU87QUFRTCxZQUFNLGdCQUFnQixpQkFBaUIsZUFBZTtBQUN0RCxZQUFNLHNCQUNKLGtCQUFrQixrQkFDZCxDQUFDLGVBQWUsSUFDaEIsQ0FBQyxpQkFBaUIsYUFBYTtBQUNyQyxVQUFJLGNBQWM7QUFDbEIsVUFBSTtBQUNKLGlCQUFXLGVBQWUscUJBQXFCO0FBQzdDLFlBQUk7QUFDRixnQkFBTSxJQUFJLGlCQUFpQixlQUFlLFdBQVc7QUFDckQ7QUFBQSxZQUNFLHlCQUF5QixXQUFXO0FBQUEsVUFDdEM7QUFDQSxxQ0FBMkI7QUFDM0Isd0JBQWM7QUFDZDtBQUFBLFFBQ0YsU0FBUyxLQUFLO0FBQ1osNkJBQW1CO0FBQ25CO0FBQUEsWUFDRSxrQ0FBa0MsV0FBVyxhQUFhLGFBQWEsR0FBRyxDQUFDO0FBQUEsVUFDN0U7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUNBLFVBQUksQ0FBQyxhQUFhO0FBQ2hCLGNBQU0sTUFBTTtBQUtaLGNBQU0sVUFBVSxlQUFlO0FBSS9CLFlBQUksb0JBQW9CLFNBQVM7QUFDL0IsZ0JBQU0sRUFBRSxtQkFBbUIsSUFBSSxNQUFNLE9BQU8sOEJBQW9CO0FBQ2hFLGdCQUFNLG1CQUFtQixnQkFBZ0I7QUFBQSxRQUMzQztBQUVBLGdCQUFRO0FBQUEsVUFDTixVQUNJLFVBQVUsYUFBYSxHQUFHLENBQUMsS0FDM0Isc0NBQXNDLGVBQWUsS0FBSyxhQUFhLEdBQUcsQ0FBQztBQUFBO0FBQUEsUUFDakY7QUFFQSxnQkFBUSxLQUFLLENBQUM7QUFBQSxNQUNoQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBRUE7QUFBQSxJQUNFLGtEQUFrRCxhQUFhO0FBQUEsRUFDakU7QUFDQSxRQUFNLG9CQUFvQixzQkFBc0I7QUFDaEQsV0FBUyx3QkFBd0I7QUFBQSxJQUMvQixjQUFjLE9BQU87QUFBQSxJQUNyQixnQkFBZ0IsQ0FBQyxDQUFDLE9BQU87QUFBQSxJQUN6QixTQUFTLE9BQU87QUFBQSxJQUNoQixTQUFTLE9BQU87QUFBQSxJQUNoQix1QkFDRSxrQkFBa0I7QUFBQSxJQUNwQixZQUNFLE9BQU87QUFBQSxJQUNULG1CQUNFO0FBQUEsSUFDRixvQkFBb0I7QUFBQSxJQUNwQixvQkFBb0I7QUFBQSxJQUNwQixvQkFBb0I7QUFBQSxFQUN0QixDQUFDO0FBQ0QseUJBQXVCLFFBQVEsa0JBQWtCO0FBQUEsSUFDL0MsY0FBYyxPQUFPO0FBQUEsSUFDckIsU0FBUyxPQUFPO0FBQUEsSUFDaEIsWUFBWSxPQUFPO0FBQUEsRUFDckIsQ0FBQztBQUVELFFBQU0sVUFBVSxxQkFBcUI7QUFBQSxJQUNuQyxVQUFVLFFBQVE7QUFBQSxJQUNsQixZQUFZLGdCQUFnQjtBQUFBLElBQzVCLEtBQUssUUFBUTtBQUFBLElBQ2I7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBLFNBQVM7QUFBQSxJQUNULFlBQVksQ0FBQyxXQUFXLGFBQWE7QUFDbkM7QUFBQSxRQUNFLCtCQUErQixTQUFTLElBQUksU0FBUyxJQUFJLElBQUksU0FBUyxPQUFPO0FBQUEsTUFDL0U7QUFBQSxJQUNGO0FBQUEsSUFDQSxxQkFBcUIsQ0FBQyxXQUFXLFNBQVMsaUJBQWlCO0FBQ3pEO0FBQUEsUUFDRSwyQkFBMkIsU0FBUyxTQUFTLFFBQVEsUUFBUSxTQUFTLGVBQWUsUUFBUSxVQUFVO0FBQUEsTUFDekc7QUFBQSxJQUNGO0FBQUEsRUFDRixDQUFDO0FBRUQsUUFBTSxTQUFTLG1CQUFtQixFQUFFLFFBQVEsQ0FBQztBQUM3QyxRQUFNLEVBQUUsc0JBQXNCLElBQUksTUFBTSxPQUFPLGlDQUE4QjtBQUM3RSxRQUFNLFlBQVksYUFBYSxzQkFBc0IsVUFBVSxJQUFJO0FBRW5FLFFBQU0sV0FBVyxZQUFZLFVBQVUsTUFBTSxHQUFHLEVBQUUsSUFBSSxJQUFLLFNBQVMsR0FBRztBQUN2RSxTQUFPLFlBQVksVUFBVSxNQUFNO0FBSW5DLFFBQU0sa0JBQWtCLGNBQWMsb0JBQW9CO0FBQzFELE1BQUksaUJBQWlCO0FBSW5CLFdBQU8sb0JBQW9CLFNBQW9DO0FBQUEsRUFDakU7QUFHQSxRQUFNLGNBQWMsQ0FBQyxTQUF1QjtBQUMxQyxRQUFJLEtBQUssQ0FBQyxNQUFNLEtBQVEsS0FBSyxDQUFDLE1BQU0sR0FBTTtBQUV4QyxjQUFRLEtBQUssUUFBUTtBQUNyQjtBQUFBLElBQ0Y7QUFDQSxRQUFJLEtBQUssQ0FBQyxNQUFNLElBQWtCO0FBQ2hDLGFBQU8sU0FBUztBQUNoQjtBQUFBLElBQ0Y7QUFDQSxRQUFJLEtBQUssQ0FBQyxNQUFNLEtBQWdCO0FBQzlCLFVBQUksQ0FBQyxnQkFBaUI7QUFDdEIsWUFBTSxVQUNKLE9BQU8sY0FBYyxhQUFhLGFBQWE7QUFDakQsYUFBTyxZQUFZO0FBQ25CLGVBQVMsbUNBQW1DO0FBQUEsUUFDMUMsWUFDRTtBQUFBLE1BQ0osQ0FBQztBQUNELGFBQU87QUFBQSxRQUNMLFlBQVksYUFDUixtRUFDQTtBQUFBLE1BQ047QUFDQSxhQUFPLG9CQUFvQixPQUFPO0FBQ2xDLGFBQU8sZUFBZTtBQUN0QiwrQkFBeUIsYUFBVztBQUNsQyxZQUFJLFFBQVEsMkJBQTJCLFFBQVMsUUFBTztBQUN2RCxlQUFPLEVBQUUsR0FBRyxTQUFTLHdCQUF3QixRQUFRO0FBQUEsTUFDdkQsQ0FBQztBQUNEO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDQSxNQUFJLFFBQVEsTUFBTSxPQUFPO0FBQ3ZCLFlBQVEsTUFBTSxXQUFXLElBQUk7QUFDN0IsWUFBUSxNQUFNLE9BQU87QUFDckIsWUFBUSxNQUFNLEdBQUcsUUFBUSxXQUFXO0FBQUEsRUFDdEM7QUFFQSxRQUFNLGFBQWEsSUFBSSxnQkFBZ0I7QUFDdkMsUUFBTSxXQUFXLE1BQVk7QUFDM0Isb0JBQWdCLGtEQUFrRDtBQUNsRSxlQUFXLE1BQU07QUFBQSxFQUNuQjtBQUNBLFFBQU0sWUFBWSxNQUFZO0FBQzVCLG9CQUFnQixtREFBbUQ7QUFDbkUsZUFBVyxNQUFNO0FBQUEsRUFDbkI7QUFDQSxVQUFRLEdBQUcsVUFBVSxRQUFRO0FBQzdCLFVBQVEsR0FBRyxXQUFXLFNBQVM7QUFVL0IsTUFBSSxtQkFDRixRQUFRLFFBQVEsS0FBSywyQkFDakIsMkJBQ0E7QUFDTixNQUFJLG9CQUFvQixFQUFFLFFBQVEsUUFBUSxLQUFLLDJCQUEyQjtBQUN4RSxVQUFNLEVBQUUsb0JBQW9CLElBQUksTUFBTSxPQUFPLDhCQUFvQjtBQUNqRSxRQUFJO0FBQ0YseUJBQW1CLE1BQU0sb0JBQW9CO0FBQUEsUUFDM0M7QUFBQSxRQUNBLE9BQU87QUFBQSxRQUNQLFFBQVEsQ0FBQztBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsUUFDQSxRQUFRLFdBQVc7QUFBQSxRQUNuQjtBQUFBLFFBQ0EsZ0JBQWdCO0FBQUEsUUFDaEI7QUFBQSxNQUNGLENBQUM7QUFDRCxVQUFJLGtCQUFrQjtBQUNwQjtBQUFBLFVBQ0UseUNBQXlDLGdCQUFnQjtBQUFBLFFBQzNEO0FBQUEsTUFDRjtBQUFBLElBQ0YsU0FBUyxLQUFLO0FBQ1o7QUFBQSxRQUNFLHNEQUFzRCxhQUFhLEdBQUcsQ0FBQztBQUFBLE1BQ3pFO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFVQSxNQUFJLHNCQUE2RDtBQUtqRSxNQUFJLG9CQUFvQixjQUFjLGtCQUFrQjtBQUN0RCxVQUFNLEVBQUUsbUJBQW1CLElBQUksTUFBTSxPQUFPLDhCQUFvQjtBQUNoRSxVQUFNLGlCQUFpQjtBQUFBLE1BQ3JCLFdBQVc7QUFBQSxNQUNYO0FBQUEsTUFDQSxRQUFRO0FBQUEsSUFDVjtBQUNBLFVBQU0sbUJBQW1CLE9BQU8sS0FBSyxjQUFjO0FBQ25ELDBCQUFzQjtBQUFBLE1BQ3BCO0FBQUEsTUFDQSxLQUFLLEtBQUs7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQO0FBQUEsSUFDRjtBQUVBLHdCQUFvQixRQUFRO0FBQUEsRUFDOUI7QUFFQSxNQUFJO0FBQ0YsVUFBTTtBQUFBLE1BQ0o7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0EsV0FBVztBQUFBLE1BQ1g7QUFBQSxNQUNBLG9CQUFvQjtBQUFBLE1BQ3BCLFlBQVk7QUFHViw2QkFBcUI7QUFFckIsY0FBTSxrQ0FBa0M7QUFDeEMsZUFBTyxxQkFBcUI7QUFBQSxNQUM5QjtBQUFBLElBQ0Y7QUFBQSxFQUNGLFVBQUU7QUFDQSxRQUFJLHdCQUF3QixNQUFNO0FBQ2hDLG9CQUFjLG1CQUFtQjtBQUFBLElBQ25DO0FBQ0EsWUFBUSxJQUFJLFVBQVUsUUFBUTtBQUM5QixZQUFRLElBQUksV0FBVyxTQUFTO0FBQ2hDLFlBQVEsTUFBTSxJQUFJLFFBQVEsV0FBVztBQUNyQyxRQUFJLFFBQVEsTUFBTSxPQUFPO0FBQ3ZCLGNBQVEsTUFBTSxXQUFXLEtBQUs7QUFBQSxJQUNoQztBQUNBLFlBQVEsTUFBTSxNQUFNO0FBQUEsRUFDdEI7QUFLQSxVQUFRLEtBQUssQ0FBQztBQUNoQjtBQVVPLElBQU0sK0JBQU4sY0FBMkMsTUFBTTtBQUFBLEVBQ3RELFlBQVksU0FBaUI7QUFDM0IsVUFBTSxPQUFPO0FBQ2IsU0FBSyxPQUFPO0FBQUEsRUFDZDtBQUNGO0FBMkJBLGVBQXNCLGtCQUNwQixNQUNBLFFBQ2U7QUFDZixRQUFNLEVBQUUsS0FBSyxJQUFJLElBQUk7QUFLckIsVUFBUSxNQUFNLEdBQUc7QUFDakIsUUFBTSxFQUFFLGdCQUFnQixZQUFZLElBQUksTUFBTSxPQUFPLHNCQUF1QjtBQUM1RSxpQkFBZSxHQUFHO0FBQ2xCLGNBQVksR0FBRztBQUVmLFFBQU0sRUFBRSxlQUFlLDRCQUE0QixJQUFJLE1BQU0sT0FDM0QsdUJBQ0Y7QUFDQSxnQkFBYztBQUNkLFFBQU0sRUFBRSxVQUFVLElBQUksTUFBTSxPQUFPLHNCQUFtQjtBQUN0RCxZQUFVO0FBRVYsTUFBSSxDQUFDLDRCQUE0QixHQUFHO0FBQ2xDLFVBQU0sSUFBSTtBQUFBLE1BQ1IsMEJBQTBCLEdBQUc7QUFBQSxJQUMvQjtBQUFBLEVBQ0Y7QUFFQSxNQUFJLENBQUMsS0FBSyxlQUFlLEdBQUc7QUFFMUIsVUFBTSxJQUFJLE1BQU0sa0JBQWtCO0FBQUEsRUFDcEM7QUFFQSxRQUFNLEVBQUUsaUJBQWlCLElBQUksTUFBTSxPQUFPLDZCQUFtQjtBQUM3RCxRQUFNLFVBQVUsaUJBQWlCO0FBQ2pDLE1BQ0UsUUFBUSxXQUFXLFNBQVMsS0FDNUIsQ0FBQyxRQUFRLFNBQVMsV0FBVyxLQUM3QixDQUFDLFFBQVEsU0FBUyxXQUFXLEdBQzdCO0FBQ0EsVUFBTSxJQUFJO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0EsUUFBTSxvQkFDSixRQUFRLElBQUksY0FBYyxTQUMxQixRQUFRLElBQUksb0NBQ1IsUUFBUSxJQUFJLG9DQUNaO0FBRU4sUUFBTSxFQUFFLFdBQVcsY0FBYyxZQUFZLElBQUksTUFBTSxPQUNyRCxvQkFDRjtBQUNBLFFBQU0sRUFBRSxzQkFBc0IsSUFBSSxNQUFNLE9BQU8sc0JBQW1CO0FBRWxFLE1BQUksS0FBSyxjQUFjLFlBQVk7QUFDakMsVUFBTSxvQkFDSixzQkFBc0IsS0FBSyxZQUFZLEdBQUcsTUFBTTtBQUNsRCxRQUFJLENBQUMsbUJBQW1CO0FBQ3RCLFlBQU0sSUFBSTtBQUFBLFFBQ1IsOEVBQThFLEdBQUc7QUFBQSxNQUNuRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBRUEsUUFBTSxTQUFTLE1BQU0sVUFBVTtBQUMvQixRQUFNLGFBQWEsTUFBTSxhQUFhO0FBQ3RDLFFBQU0sY0FBYyxTQUFTO0FBQzdCLFFBQU0sV0FBVyxXQUFXO0FBRTVCLFFBQU0sU0FBdUI7QUFBQSxJQUMzQjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0EsYUFBYSxLQUFLO0FBQUEsSUFDbEIsV0FBVyxLQUFLO0FBQUEsSUFDaEIsU0FBUztBQUFBLElBQ1QsU0FBUyxLQUFLO0FBQUEsSUFDZDtBQUFBLElBQ0EsWUFBWTtBQUFBLElBQ1osZUFBZSxXQUFXO0FBQUEsSUFDMUIsWUFBWTtBQUFBLElBQ1o7QUFBQSxJQUNBLGtCQUFrQixLQUFLO0FBQUEsRUFDekI7QUFFQSxRQUFNLE1BQU0sc0JBQXNCO0FBQUEsSUFDaEM7QUFBQSxJQUNBLGdCQUFnQixLQUFLO0FBQUEsSUFDckIsZUFBZSxNQUFNO0FBQUEsSUFDckIsU0FBUztBQUFBLElBQ1QsV0FBVyxLQUFLO0FBQUEsSUFDaEI7QUFBQSxFQUNGLENBQUM7QUFFRCxNQUFJO0FBQ0osTUFBSTtBQUNKLE1BQUk7QUFDRixVQUFNLE1BQU0sTUFBTSxJQUFJLDBCQUEwQixNQUFNO0FBQ3RELG9CQUFnQixJQUFJO0FBQ3BCLHdCQUFvQixJQUFJO0FBQUEsRUFDMUIsU0FBUyxLQUFLO0FBRVosVUFBTSxJQUFJLE1BQU0sK0JBQStCLGFBQWEsR0FBRyxDQUFDLEVBQUU7QUFBQSxFQUNwRTtBQUVBLFFBQU0sVUFBVSxxQkFBcUI7QUFBQSxJQUNuQyxVQUFVLFFBQVE7QUFBQSxJQUNsQixZQUFZLGdCQUFnQjtBQUFBLElBQzVCLEtBQUssUUFBUTtBQUFBLElBQ2IsU0FBUztBQUFBLElBQ1QsU0FBUyxLQUFLO0FBQUEsSUFDZCxnQkFBZ0IsS0FBSztBQUFBLElBQ3JCLFNBQVM7QUFBQSxFQUNYLENBQUM7QUFFRCxRQUFNLFNBQVMsMkJBQTJCLEdBQUc7QUFDN0MsU0FBTyxZQUFZLFFBQVEsYUFBYTtBQUV4QyxNQUFJO0FBQ0osTUFBSSxLQUFLLHNCQUFzQjtBQUM3QixVQUFNLEVBQUUsb0JBQW9CLElBQUksTUFBTSxPQUFPLDhCQUFvQjtBQUNqRSxRQUFJO0FBQ0YsWUFBTSxNQUFNLE1BQU0sb0JBQW9CO0FBQUEsUUFDcEM7QUFBQSxRQUNBLE9BQU8sS0FBSztBQUFBLFFBQ1osUUFBUSxDQUFDO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0EsZ0JBQWdCLEtBQUs7QUFBQSxRQUNyQixnQkFBZ0IsS0FBSztBQUFBLE1BQ3ZCLENBQUM7QUFDRCxVQUFJLEtBQUs7QUFDUCwyQkFBbUI7QUFDbkIsWUFBSSwyQkFBMkIsR0FBRyxFQUFFO0FBQUEsTUFDdEM7QUFBQSxJQUNGLFNBQVMsS0FBSztBQUNaLFVBQUksNENBQTRDLGFBQWEsR0FBRyxDQUFDLEVBQUU7QUFBQSxJQUNyRTtBQUFBLEVBQ0Y7QUFFQSxRQUFNO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQSxZQUFZLEtBQUssZUFBZTtBQUFBLEVBQ2xDO0FBQ0Y7QUFHQSxTQUFTLDJCQUEyQixLQUF3QztBQUMxRSxRQUFNLE9BQU8sTUFBWTtBQUFBLEVBQUM7QUFDMUIsU0FBTztBQUFBLElBQ0wsYUFBYSxDQUFDLEtBQUssVUFDakI7QUFBQSxNQUNFLDRCQUE0QixLQUFLLFFBQVEsSUFBSSxHQUFHLGNBQWMsSUFBSSxTQUFTLGFBQWEsSUFBSSxXQUFXO0FBQUEsSUFDekc7QUFBQSxJQUNGLGlCQUFpQixDQUFDLElBQUksWUFBWSxJQUFJLGlCQUFpQixFQUFFLEVBQUU7QUFBQSxJQUMzRCxvQkFBb0IsQ0FBQyxJQUFJLE9BQU8sSUFBSSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsS0FBSztBQUFBLElBQ3RFLGtCQUFrQixDQUFDLElBQUksUUFBUSxJQUFJLGtCQUFrQixFQUFFLEtBQUssR0FBRyxFQUFFO0FBQUEsSUFDakUsV0FBVztBQUFBLElBQ1gsWUFBWTtBQUFBLElBQ1osVUFBVSxPQUFLLElBQUksVUFBVSxDQUFDLEVBQUU7QUFBQSxJQUNoQyxnQkFBZ0IsUUFBTSxJQUFJLHFCQUFxQixFQUFFLElBQUk7QUFBQSxJQUNyRCxZQUFZLENBQUMsSUFBSSxTQUFTLElBQUksb0JBQW9CLEVBQUUsRUFBRTtBQUFBLElBQ3RELGVBQWUsUUFBTSxJQUFJLG9CQUFvQixFQUFFLEVBQUU7QUFBQSxJQUNqRCxrQkFBa0I7QUFBQSxJQUNsQiwwQkFBMEI7QUFBQSxJQUMxQixxQkFBcUI7QUFBQSxJQUNyQix1QkFBdUI7QUFBQSxJQUN2QixvQkFBb0I7QUFBQSxJQUNwQixvQkFBb0I7QUFBQSxJQUNwQixxQkFBcUI7QUFBQSxJQUNyQixhQUFhO0FBQUEsSUFDYixpQkFBaUI7QUFBQSxJQUNqQixhQUFhO0FBQUEsSUFDYixpQkFBaUI7QUFBQSxJQUNqQixhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsSUFDVixnQkFBZ0I7QUFBQSxFQUNsQjtBQUNGOyIsCiAgIm5hbWVzIjogWyJ0bXBkaXIiLCAiam9pbiIsICJyZXNvbHZlIiwgImpvaW4iLCAidG1wZGlyIiwgImhhbmRsZSIsICJyZXNvbHZlIl0KfQo=
