#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  getAgentId,
  getAgentName,
  getParentSessionId,
  init_teammate
} from "./chunk-XXNQOOJ5.mjs";
import {
  context,
  init_opentelemetry_api,
  trace
} from "./chunk-GG7RJVEZ.mjs";
import {
  common_exports,
  init_common
} from "./chunk-H3V45RZC.mjs";
import {
  getFeatureValue_CACHED_MAY_BE_STALE,
  getOauthAccountInfo,
  getOrCreateUserID,
  init_auth,
  init_betas,
  init_config,
  init_growthbook,
  init_model,
  isClaudeAISubscriber
} from "./chunk-JQ55XPLZ.mjs";
import {
  detectVcs,
  getLinuxDistroInfo,
  getWslVersion,
  init_platform
} from "./chunk-HGPSKCV5.mjs";
import {
  JETBRAINS_IDES,
  env,
  getHostPlatformForAnalytics,
  init_env
} from "./chunk-TR6BOGPZ.mjs";
import {
  axios_default,
  init_axios
} from "./chunk-J6MJ6UVK.mjs";
import {
  init_git
} from "./chunk-SF3TOBTZ.mjs";
import {
  execFileNoThrow,
  execFileNoThrowWithCwd,
  execSyncWithDefaults_DEPRECATED,
  init_execFileNoThrow
} from "./chunk-IVTTVOOG.mjs";
import {
  djb2Hash,
  init_hash
} from "./chunk-5GKIDOKP.mjs";
import {
  errorMessage,
  init_cleanupRegistry,
  init_debug,
  init_errors,
  init_slowOperations,
  jsonParse,
  jsonStringify,
  logForDebugging,
  registerCleanup
} from "./chunk-L2VTD674.mjs";
import {
  feature,
  init_bun_bundle
} from "./chunk-OU3SZVVB.mjs";
import {
  getEventLogger,
  getIsNonInteractiveSession,
  getPromptId,
  getSessionId,
  init_state
} from "./chunk-NGSB34MB.mjs";
import {
  getClaudeConfigHomeDir,
  init_envUtils,
  isEnvDefinedFalsy,
  isEnvTruthy
} from "./chunk-6NQGQQQI.mjs";
import {
  init_memoize,
  memoize_default
} from "./chunk-AZFPZFFC.mjs";
import {
  __esm,
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/genericProcessUtils.ts
function isProcessRunning(pid) {
  if (pid <= 1) return false;
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}
async function getAncestorPidsAsync(pid, maxDepth = 10) {
  if (process.platform === "win32") {
    const script2 = `
      $pid = ${String(pid)}
      $ancestors = @()
      for ($i = 0; $i -lt ${maxDepth}; $i++) {
        $proc = Get-CimInstance Win32_Process -Filter "ProcessId=$pid" -ErrorAction SilentlyContinue
        if (-not $proc -or -not $proc.ParentProcessId -or $proc.ParentProcessId -eq 0) { break }
        $pid = $proc.ParentProcessId
        $ancestors += $pid
      }
      $ancestors -join ','
    `.trim();
    const result2 = await execFileNoThrowWithCwd(
      "powershell.exe",
      ["-NoProfile", "-Command", script2],
      { timeout: 3e3 }
    );
    if (result2.code !== 0 || !result2.stdout?.trim()) {
      return [];
    }
    return result2.stdout.trim().split(",").filter(Boolean).map((p) => parseInt(p, 10)).filter((p) => !isNaN(p));
  }
  const script = `pid=${String(pid)}; for i in $(seq 1 ${maxDepth}); do ppid=$(ps -o ppid= -p $pid 2>/dev/null | tr -d ' '); if [ -z "$ppid" ] || [ "$ppid" = "0" ] || [ "$ppid" = "1" ]; then break; fi; echo $ppid; pid=$ppid; done`;
  const result = await execFileNoThrowWithCwd("sh", ["-c", script], {
    timeout: 3e3
  });
  if (result.code !== 0 || !result.stdout?.trim()) {
    return [];
  }
  return result.stdout.trim().split("\n").filter(Boolean).map((p) => parseInt(p, 10)).filter((p) => !isNaN(p));
}
function getProcessCommand(pid) {
  try {
    const pidStr = String(pid);
    const command = process.platform === "win32" ? `powershell.exe -NoProfile -Command "(Get-CimInstance Win32_Process -Filter \\"ProcessId=${pidStr}\\").CommandLine"` : `ps -o command= -p ${pidStr}`;
    const result = execSyncWithDefaults_DEPRECATED(command, { timeout: 1e3 });
    return result ? result.trim() : null;
  } catch {
    return null;
  }
}
async function getAncestorCommandsAsync(pid, maxDepth = 10) {
  if (process.platform === "win32") {
    const script2 = `
      $currentPid = ${String(pid)}
      $commands = @()
      for ($i = 0; $i -lt ${maxDepth}; $i++) {
        $proc = Get-CimInstance Win32_Process -Filter "ProcessId=$currentPid" -ErrorAction SilentlyContinue
        if (-not $proc) { break }
        if ($proc.CommandLine) { $commands += $proc.CommandLine }
        if (-not $proc.ParentProcessId -or $proc.ParentProcessId -eq 0) { break }
        $currentPid = $proc.ParentProcessId
      }
      $commands -join [char]0
    `.trim();
    const result2 = await execFileNoThrowWithCwd(
      "powershell.exe",
      ["-NoProfile", "-Command", script2],
      { timeout: 3e3 }
    );
    if (result2.code !== 0 || !result2.stdout?.trim()) {
      return [];
    }
    return result2.stdout.split("\0").filter(Boolean);
  }
  const script = `currentpid=${String(pid)}; for i in $(seq 1 ${maxDepth}); do cmd=$(ps -o command= -p $currentpid 2>/dev/null); if [ -n "$cmd" ]; then printf '%s\\0' "$cmd"; fi; ppid=$(ps -o ppid= -p $currentpid 2>/dev/null | tr -d ' '); if [ -z "$ppid" ] || [ "$ppid" = "0" ] || [ "$ppid" = "1" ]; then break; fi; currentpid=$ppid; done`;
  const result = await execFileNoThrowWithCwd("sh", ["-c", script], {
    timeout: 3e3
  });
  if (result.code !== 0 || !result.stdout?.trim()) {
    return [];
  }
  return result.stdout.split("\0").filter(Boolean);
}
var init_genericProcessUtils = __esm({
  "src/utils/genericProcessUtils.ts"() {
    init_execFileNoThrow();
  }
});

// src/utils/envDynamic.ts
import { stat } from "fs/promises";
function getIsBubblewrapSandbox() {
  return process.platform === "linux" && isEnvTruthy(process.env.CLAUDE_CODE_BUBBLEWRAP);
}
function isMuslEnvironment() {
  if (feature("IS_LIBC_MUSL")) return true;
  if (feature("IS_LIBC_GLIBC")) return false;
  if (process.platform !== "linux") return false;
  return muslRuntimeCache ?? false;
}
async function detectJetBrainsIDEFromParentProcessAsync() {
  if (jetBrainsIDECache !== void 0) {
    return jetBrainsIDECache;
  }
  if (process.platform === "darwin") {
    jetBrainsIDECache = null;
    return null;
  }
  try {
    const commands = await getAncestorCommandsAsync(process.pid, 10);
    for (const command of commands) {
      const lowerCommand = command.toLowerCase();
      for (const ide of JETBRAINS_IDES) {
        if (lowerCommand.includes(ide)) {
          jetBrainsIDECache = ide;
          return ide;
        }
      }
    }
  } catch {
  }
  jetBrainsIDECache = null;
  return null;
}
async function getTerminalWithJetBrainsDetectionAsync() {
  if (process.env.TERMINAL_EMULATOR === "JetBrains-JediTerm") {
    if (env.platform !== "darwin") {
      const specificIDE = await detectJetBrainsIDEFromParentProcessAsync();
      return specificIDE || "pycharm";
    }
  }
  return env.terminal;
}
function getTerminalWithJetBrainsDetection() {
  if (process.env.TERMINAL_EMULATOR === "JetBrains-JediTerm") {
    if (env.platform !== "darwin") {
      if (jetBrainsIDECache !== void 0) {
        return jetBrainsIDECache || "pycharm";
      }
      return "pycharm";
    }
  }
  return env.terminal;
}
async function initJetBrainsDetection() {
  if (process.env.TERMINAL_EMULATOR === "JetBrains-JediTerm") {
    await detectJetBrainsIDEFromParentProcessAsync();
  }
}
var getIsDocker, muslRuntimeCache, jetBrainsIDECache, envDynamic;
var init_envDynamic = __esm({
  "src/utils/envDynamic.ts"() {
    init_bun_bundle();
    init_memoize();
    init_env();
    init_envUtils();
    init_execFileNoThrow();
    init_genericProcessUtils();
    getIsDocker = memoize_default(async () => {
      if (process.platform !== "linux") return false;
      const { code } = await execFileNoThrow("test", ["-f", "/.dockerenv"]);
      return code === 0;
    });
    muslRuntimeCache = null;
    if (process.platform === "linux") {
      const muslArch = process.arch === "x64" ? "x86_64" : "aarch64";
      void stat(`/lib/libc.musl-${muslArch}.so.1`).then(
        () => {
          muslRuntimeCache = true;
        },
        () => {
          muslRuntimeCache = false;
        }
      );
    }
    envDynamic = {
      ...env,
      // Include all properties from env
      terminal: getTerminalWithJetBrainsDetection(),
      getIsDocker,
      getIsBubblewrapSandbox,
      isMuslEnvironment,
      getTerminalWithJetBrainsDetectionAsync,
      initJetBrainsDetection
    };
  }
});

// src/services/mcp/officialRegistry.ts
function normalizeUrl(url) {
  try {
    const u = new URL(url);
    u.search = "";
    return u.toString().replace(/\/$/, "");
  } catch {
    return void 0;
  }
}
async function prefetchOfficialMcpUrls() {
  if (process.env.CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC) {
    return;
  }
  try {
    const response = await axios_default.get(
      "https://api.anthropic.com/mcp-registry/v0/servers?version=latest&visibility=commercial",
      { timeout: 5e3 }
    );
    const urls = /* @__PURE__ */ new Set();
    for (const entry of response.data.servers) {
      for (const remote of entry.server.remotes ?? []) {
        const normalized = normalizeUrl(remote.url);
        if (normalized) {
          urls.add(normalized);
        }
      }
    }
    officialUrls = urls;
    logForDebugging(`[mcp-registry] Loaded ${urls.size} official MCP URLs`);
  } catch (error) {
    logForDebugging(`Failed to fetch MCP registry: ${errorMessage(error)}`, {
      level: "error"
    });
  }
}
function isOfficialMcpUrl(normalizedUrl) {
  return officialUrls?.has(normalizedUrl) ?? false;
}
var officialUrls;
var init_officialRegistry = __esm({
  "src/services/mcp/officialRegistry.ts"() {
    init_axios();
    init_debug();
    init_errors();
    officialUrls = void 0;
  }
});

// src/utils/agentSwarmsEnabled.ts
function isAgentTeamsFlagSet() {
  return process.argv.includes("--agent-teams");
}
function isAgentSwarmsEnabled() {
  if (process.env.USER_TYPE === "ant") {
    return true;
  }
  if (!isEnvTruthy(process.env.CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS) && !isAgentTeamsFlagSet()) {
    return false;
  }
  if (!getFeatureValue_CACHED_MAY_BE_STALE("tengu_amber_flint", true)) {
    return false;
  }
  return true;
}
var init_agentSwarmsEnabled = __esm({
  "src/utils/agentSwarmsEnabled.ts"() {
    init_growthbook();
    init_envUtils();
  }
});

// src/utils/agentContext.ts
import { AsyncLocalStorage } from "async_hooks";
function getAgentContext() {
  return agentContextStorage.getStore();
}
function runWithAgentContext(context2, fn) {
  return agentContextStorage.run(context2, fn);
}
function isSubagentContext(context2) {
  return context2?.agentType === "subagent";
}
function getSubagentLogName() {
  const context2 = getAgentContext();
  if (!isSubagentContext(context2) || !context2.subagentName) {
    return void 0;
  }
  return context2.isBuiltIn ? context2.subagentName : "user-defined";
}
function consumeInvokingRequestId() {
  const context2 = getAgentContext();
  if (!context2?.invokingRequestId || context2.invocationEmitted) {
    return void 0;
  }
  context2.invocationEmitted = true;
  return {
    invokingRequestId: context2.invokingRequestId,
    invocationKind: context2.invocationKind
  };
}
var agentContextStorage;
var init_agentContext = __esm({
  "src/utils/agentContext.ts"() {
    init_agentSwarmsEnabled();
    agentContextStorage = new AsyncLocalStorage();
  }
});

// src/utils/taggedId.ts
function base58Encode(n) {
  const base = BigInt(BASE_58_CHARS.length);
  const result = new Array(ENCODED_LENGTH).fill(BASE_58_CHARS[0]);
  let i = ENCODED_LENGTH - 1;
  let value = n;
  while (value > 0n) {
    const rem = Number(value % base);
    result[i] = BASE_58_CHARS[rem];
    value = value / base;
    i--;
  }
  return result.join("");
}
function uuidToBigInt(uuid) {
  const hex = uuid.replace(/-/g, "");
  if (hex.length !== 32) {
    throw new Error(`Invalid UUID hex length: ${hex.length}`);
  }
  return BigInt("0x" + hex);
}
function toTaggedId(tag, uuid) {
  const n = uuidToBigInt(uuid);
  return `${tag}_${VERSION}${base58Encode(n)}`;
}
var BASE_58_CHARS, VERSION, ENCODED_LENGTH;
var init_taggedId = __esm({
  "src/utils/taggedId.ts"() {
    BASE_58_CHARS = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    VERSION = "01";
    ENCODED_LENGTH = 22;
  }
});

// src/utils/telemetryAttributes.ts
function shouldIncludeAttribute(envVar) {
  const defaultValue = METRICS_CARDINALITY_DEFAULTS[envVar];
  const envValue = process.env[envVar];
  if (envValue === void 0) {
    return defaultValue;
  }
  return isEnvTruthy(envValue);
}
function getTelemetryAttributes() {
  const userId = getOrCreateUserID();
  const sessionId = getSessionId();
  const attributes = {
    "user.id": userId
  };
  if (shouldIncludeAttribute("OTEL_METRICS_INCLUDE_SESSION_ID")) {
    attributes["session.id"] = sessionId;
  }
  if (shouldIncludeAttribute("OTEL_METRICS_INCLUDE_VERSION")) {
    attributes["app.version"] = MACRO.VERSION;
  }
  const oauthAccount = getOauthAccountInfo();
  if (oauthAccount) {
    const orgId = oauthAccount.organizationUuid;
    const email = oauthAccount.emailAddress;
    const accountUuid = oauthAccount.accountUuid;
    if (orgId) attributes["organization.id"] = orgId;
    if (email) attributes["user.email"] = email;
    if (accountUuid && shouldIncludeAttribute("OTEL_METRICS_INCLUDE_ACCOUNT_UUID")) {
      attributes["user.account_uuid"] = accountUuid;
      attributes["user.account_id"] = process.env.CLAUDE_CODE_ACCOUNT_TAGGED_ID || toTaggedId("user", accountUuid);
    }
  }
  if (envDynamic.terminal) {
    attributes["terminal.type"] = envDynamic.terminal;
  }
  return attributes;
}
var METRICS_CARDINALITY_DEFAULTS;
var init_telemetryAttributes = __esm({
  "src/utils/telemetryAttributes.ts"() {
    init_state();
    init_auth();
    init_config();
    init_envDynamic();
    init_envUtils();
    init_taggedId();
    METRICS_CARDINALITY_DEFAULTS = {
      OTEL_METRICS_INCLUDE_SESSION_ID: true,
      OTEL_METRICS_INCLUDE_VERSION: false,
      OTEL_METRICS_INCLUDE_ACCOUNT_UUID: true
    };
  }
});

// src/utils/telemetry/events.ts
function isUserPromptLoggingEnabled() {
  return isEnvTruthy(process.env.OTEL_LOG_USER_PROMPTS);
}
function redactIfDisabled(content) {
  return isUserPromptLoggingEnabled() ? content : "<REDACTED>";
}
async function logOTelEvent(eventName, metadata = {}) {
  const eventLogger = getEventLogger();
  if (!eventLogger) {
    if (!hasWarnedNoEventLogger) {
      hasWarnedNoEventLogger = true;
      logForDebugging(
        `[3P telemetry] Event dropped (no event logger initialized): ${eventName}`,
        { level: "warn" }
      );
    }
    return;
  }
  if (process.env.NODE_ENV === "test") {
    return;
  }
  const attributes = {
    ...getTelemetryAttributes(),
    "event.name": eventName,
    "event.timestamp": (/* @__PURE__ */ new Date()).toISOString(),
    "event.sequence": eventSequence++
  };
  const promptId = getPromptId();
  if (promptId) {
    attributes["prompt.id"] = promptId;
  }
  const workspaceDir = process.env.CLAUDE_CODE_WORKSPACE_HOST_PATHS;
  if (workspaceDir) {
    attributes["workspace.host_paths"] = workspaceDir.split("|");
  }
  for (const [key, value] of Object.entries(metadata)) {
    if (value !== void 0) {
      attributes[key] = value;
    }
  }
  eventLogger.emit({
    body: `claude_code.${eventName}`,
    attributes
  });
}
var eventSequence, hasWarnedNoEventLogger;
var init_events = __esm({
  "src/utils/telemetry/events.ts"() {
    init_state();
    init_debug();
    init_envUtils();
    init_telemetryAttributes();
    eventSequence = 0;
    hasWarnedNoEventLogger = false;
  }
});

// src/utils/telemetry/perfettoTracing.ts
import { mkdirSync, writeFileSync } from "fs";
import { mkdir, writeFile } from "fs/promises";
import { dirname, join } from "path";
function stringToNumericHash(str) {
  return Math.abs(djb2Hash(str)) || 1;
}
function getProcessIdForAgent(agentId) {
  const existing = agentIdToProcessId.get(agentId);
  if (existing !== void 0) return existing;
  processIdCounter++;
  agentIdToProcessId.set(agentId, processIdCounter);
  return processIdCounter;
}
function getCurrentAgentInfo() {
  const agentId = getAgentId() ?? getSessionId();
  const agentName = getAgentName() ?? "main";
  const parentSessionId = getParentSessionId();
  const existing = agentRegistry.get(agentId);
  if (existing) return existing;
  const info = {
    agentId,
    agentName,
    parentAgentId: parentSessionId,
    processId: agentId === getSessionId() ? 1 : getProcessIdForAgent(agentId),
    threadId: stringToNumericHash(agentName)
  };
  agentRegistry.set(agentId, info);
  totalAgentCount++;
  return info;
}
function getTimestamp() {
  return (Date.now() - startTimeMs) * 1e3;
}
function generateSpanId() {
  return `span_${++spanIdCounter}`;
}
function evictStaleSpans() {
  const now = getTimestamp();
  const ttlUs = STALE_SPAN_TTL_MS * 1e3;
  for (const [spanId, span] of pendingSpans) {
    if (now - span.startTime > ttlUs) {
      events.push({
        name: span.name,
        cat: span.category,
        ph: "E",
        ts: now,
        pid: span.agentInfo.processId,
        tid: span.agentInfo.threadId,
        args: {
          ...span.args,
          evicted: true,
          duration_ms: (now - span.startTime) / 1e3
        }
      });
      pendingSpans.delete(spanId);
    }
  }
}
function buildTraceDocument() {
  return jsonStringify({
    traceEvents: [...metadataEvents, ...events],
    metadata: {
      session_id: getSessionId(),
      trace_start_time: new Date(startTimeMs).toISOString(),
      agent_count: totalAgentCount,
      total_event_count: metadataEvents.length + events.length
    }
  });
}
function evictOldestEvents() {
  if (events.length < MAX_EVENTS) return;
  const dropped = events.splice(0, MAX_EVENTS / 2);
  events.unshift({
    name: "trace_truncated",
    cat: "__metadata",
    ph: "i",
    ts: dropped[dropped.length - 1]?.ts ?? 0,
    pid: 1,
    tid: 0,
    args: { dropped_events: dropped.length }
  });
  logForDebugging(
    `[Perfetto] Evicted ${dropped.length} oldest events (cap ${MAX_EVENTS})`
  );
}
function initializePerfettoTracing() {
  const envValue = process.env.CLAUDE_CODE_PERFETTO_TRACE;
  logForDebugging(
    `[Perfetto] initializePerfettoTracing called, env value: ${envValue}`
  );
  if (feature("PERFETTO_TRACING")) {
    if (!envValue || isEnvDefinedFalsy(envValue)) {
      logForDebugging(
        "[Perfetto] Tracing disabled (env var not set or disabled)"
      );
      return;
    }
    isEnabled = true;
    startTimeMs = Date.now();
    if (isEnvTruthy(envValue)) {
      const tracesDir = join(getClaudeConfigHomeDir(), "traces");
      tracePath = join(tracesDir, `trace-${getSessionId()}.json`);
    } else {
      tracePath = envValue;
    }
    logForDebugging(
      `[Perfetto] Tracing enabled, will write to: ${tracePath}, isEnabled=${isEnabled}`
    );
    const intervalSec = parseInt(
      process.env.CLAUDE_CODE_PERFETTO_WRITE_INTERVAL_S ?? "",
      10
    );
    if (intervalSec > 0) {
      writeIntervalId = setInterval(() => {
        void periodicWrite();
      }, intervalSec * 1e3);
      if (writeIntervalId.unref) writeIntervalId.unref();
      logForDebugging(
        `[Perfetto] Periodic write enabled, interval: ${intervalSec}s`
      );
    }
    staleSpanCleanupId = setInterval(() => {
      evictStaleSpans();
      evictOldestEvents();
    }, STALE_SPAN_CLEANUP_INTERVAL_MS);
    if (staleSpanCleanupId.unref) staleSpanCleanupId.unref();
    registerCleanup(async () => {
      logForDebugging("[Perfetto] Cleanup callback invoked");
      await writePerfettoTrace();
    });
    process.on("beforeExit", () => {
      logForDebugging("[Perfetto] beforeExit handler invoked");
      void writePerfettoTrace();
    });
    process.on("exit", () => {
      if (!traceWritten) {
        logForDebugging(
          "[Perfetto] exit handler invoked, writing trace synchronously"
        );
        writePerfettoTraceSync();
      }
    });
    const mainAgent = getCurrentAgentInfo();
    emitProcessMetadata(mainAgent);
  }
}
function emitProcessMetadata(agentInfo) {
  if (!isEnabled) return;
  metadataEvents.push({
    name: "process_name",
    cat: "__metadata",
    ph: "M",
    ts: 0,
    pid: agentInfo.processId,
    tid: 0,
    args: { name: agentInfo.agentName }
  });
  metadataEvents.push({
    name: "thread_name",
    cat: "__metadata",
    ph: "M",
    ts: 0,
    pid: agentInfo.processId,
    tid: agentInfo.threadId,
    args: { name: agentInfo.agentName }
  });
  if (agentInfo.parentAgentId) {
    metadataEvents.push({
      name: "parent_agent",
      cat: "__metadata",
      ph: "M",
      ts: 0,
      pid: agentInfo.processId,
      tid: 0,
      args: {
        parent_agent_id: agentInfo.parentAgentId
      }
    });
  }
}
function isPerfettoTracingEnabled() {
  return isEnabled;
}
function registerAgent(agentId, agentName, parentAgentId) {
  if (!isEnabled) return;
  const info = {
    agentId,
    agentName,
    parentAgentId,
    processId: getProcessIdForAgent(agentId),
    threadId: stringToNumericHash(agentName)
  };
  agentRegistry.set(agentId, info);
  totalAgentCount++;
  emitProcessMetadata(info);
}
function unregisterAgent(agentId) {
  if (!isEnabled) return;
  agentRegistry.delete(agentId);
  agentIdToProcessId.delete(agentId);
}
function startLLMRequestPerfettoSpan(args) {
  if (!isEnabled) return "";
  const spanId = generateSpanId();
  const agentInfo = getCurrentAgentInfo();
  pendingSpans.set(spanId, {
    name: "API Call",
    category: "api",
    startTime: getTimestamp(),
    agentInfo,
    args: {
      model: args.model,
      prompt_tokens: args.promptTokens,
      message_id: args.messageId,
      is_speculative: args.isSpeculative ?? false,
      query_source: args.querySource
    }
  });
  events.push({
    name: "API Call",
    cat: "api",
    ph: "B",
    ts: pendingSpans.get(spanId).startTime,
    pid: agentInfo.processId,
    tid: agentInfo.threadId,
    args: pendingSpans.get(spanId).args
  });
  return spanId;
}
function endLLMRequestPerfettoSpan(spanId, metadata) {
  if (!isEnabled || !spanId) return;
  const pending = pendingSpans.get(spanId);
  if (!pending) return;
  const endTime = getTimestamp();
  const duration = endTime - pending.startTime;
  const promptTokens = metadata.promptTokens ?? pending.args.prompt_tokens;
  const ttftMs = metadata.ttftMs;
  const ttltMs = metadata.ttltMs;
  const outputTokens = metadata.outputTokens;
  const cacheReadTokens = metadata.cacheReadTokens;
  const itps = ttftMs !== void 0 && promptTokens !== void 0 && ttftMs > 0 ? Math.round(promptTokens / (ttftMs / 1e3) * 100) / 100 : void 0;
  const samplingMs = ttltMs !== void 0 && ttftMs !== void 0 ? ttltMs - ttftMs : void 0;
  const otps = samplingMs !== void 0 && outputTokens !== void 0 && samplingMs > 0 ? Math.round(outputTokens / (samplingMs / 1e3) * 100) / 100 : void 0;
  const cacheHitRate = cacheReadTokens !== void 0 && promptTokens !== void 0 && promptTokens > 0 ? Math.round(cacheReadTokens / promptTokens * 1e4) / 100 : void 0;
  const requestSetupMs = metadata.requestSetupMs;
  const attemptStartTimes = metadata.attemptStartTimes;
  const args = {
    ...pending.args,
    ttft_ms: ttftMs,
    ttlt_ms: ttltMs,
    prompt_tokens: promptTokens,
    output_tokens: outputTokens,
    cache_read_tokens: cacheReadTokens,
    cache_creation_tokens: metadata.cacheCreationTokens,
    message_id: metadata.messageId ?? pending.args.message_id,
    success: metadata.success ?? true,
    error: metadata.error,
    duration_ms: duration / 1e3,
    request_setup_ms: requestSetupMs,
    // Derived metrics
    itps,
    otps,
    cache_hit_rate_pct: cacheHitRate
  };
  const setupUs = requestSetupMs !== void 0 && requestSetupMs > 0 ? requestSetupMs * 1e3 : 0;
  if (setupUs > 0) {
    const setupEndTs = pending.startTime + setupUs;
    events.push({
      name: "Request Setup",
      cat: "api,setup",
      ph: "B",
      ts: pending.startTime,
      pid: pending.agentInfo.processId,
      tid: pending.agentInfo.threadId,
      args: {
        request_setup_ms: requestSetupMs,
        attempt_count: attemptStartTimes?.length ?? 1
      }
    });
    if (attemptStartTimes && attemptStartTimes.length > 1) {
      const baseWallMs = attemptStartTimes[0];
      for (let i = 0; i < attemptStartTimes.length - 1; i++) {
        const attemptStartUs = pending.startTime + (attemptStartTimes[i] - baseWallMs) * 1e3;
        const attemptEndUs = pending.startTime + (attemptStartTimes[i + 1] - baseWallMs) * 1e3;
        events.push({
          name: `Attempt ${i + 1} (retry)`,
          cat: "api,retry",
          ph: "B",
          ts: attemptStartUs,
          pid: pending.agentInfo.processId,
          tid: pending.agentInfo.threadId,
          args: { attempt: i + 1 }
        });
        events.push({
          name: `Attempt ${i + 1} (retry)`,
          cat: "api,retry",
          ph: "E",
          ts: attemptEndUs,
          pid: pending.agentInfo.processId,
          tid: pending.agentInfo.threadId
        });
      }
    }
    events.push({
      name: "Request Setup",
      cat: "api,setup",
      ph: "E",
      ts: setupEndTs,
      pid: pending.agentInfo.processId,
      tid: pending.agentInfo.threadId
    });
  }
  if (ttftMs !== void 0) {
    const firstTokenStartTs = pending.startTime + setupUs;
    const firstTokenEndTs = firstTokenStartTs + ttftMs * 1e3;
    events.push({
      name: "First Token",
      cat: "api,ttft",
      ph: "B",
      ts: firstTokenStartTs,
      pid: pending.agentInfo.processId,
      tid: pending.agentInfo.threadId,
      args: {
        ttft_ms: ttftMs,
        prompt_tokens: promptTokens,
        itps,
        cache_hit_rate_pct: cacheHitRate
      }
    });
    events.push({
      name: "First Token",
      cat: "api,ttft",
      ph: "E",
      ts: firstTokenEndTs,
      pid: pending.agentInfo.processId,
      tid: pending.agentInfo.threadId
    });
    const actualSamplingMs = ttltMs !== void 0 ? ttltMs - ttftMs - setupUs / 1e3 : void 0;
    if (actualSamplingMs !== void 0 && actualSamplingMs > 0) {
      events.push({
        name: "Sampling",
        cat: "api,sampling",
        ph: "B",
        ts: firstTokenEndTs,
        pid: pending.agentInfo.processId,
        tid: pending.agentInfo.threadId,
        args: {
          sampling_ms: actualSamplingMs,
          output_tokens: outputTokens,
          otps
        }
      });
      events.push({
        name: "Sampling",
        cat: "api,sampling",
        ph: "E",
        ts: firstTokenEndTs + actualSamplingMs * 1e3,
        pid: pending.agentInfo.processId,
        tid: pending.agentInfo.threadId
      });
    }
  }
  events.push({
    name: pending.name,
    cat: pending.category,
    ph: "E",
    ts: endTime,
    pid: pending.agentInfo.processId,
    tid: pending.agentInfo.threadId,
    args
  });
  pendingSpans.delete(spanId);
}
function startToolPerfettoSpan(toolName, args) {
  if (!isEnabled) return "";
  const spanId = generateSpanId();
  const agentInfo = getCurrentAgentInfo();
  pendingSpans.set(spanId, {
    name: `Tool: ${toolName}`,
    category: "tool",
    startTime: getTimestamp(),
    agentInfo,
    args: {
      tool_name: toolName,
      ...args
    }
  });
  events.push({
    name: `Tool: ${toolName}`,
    cat: "tool",
    ph: "B",
    ts: pendingSpans.get(spanId).startTime,
    pid: agentInfo.processId,
    tid: agentInfo.threadId,
    args: pendingSpans.get(spanId).args
  });
  return spanId;
}
function endToolPerfettoSpan(spanId, metadata) {
  if (!isEnabled || !spanId) return;
  const pending = pendingSpans.get(spanId);
  if (!pending) return;
  const endTime = getTimestamp();
  const duration = endTime - pending.startTime;
  const args = {
    ...pending.args,
    success: metadata?.success ?? true,
    error: metadata?.error,
    result_tokens: metadata?.resultTokens,
    duration_ms: duration / 1e3
  };
  events.push({
    name: pending.name,
    cat: pending.category,
    ph: "E",
    ts: endTime,
    pid: pending.agentInfo.processId,
    tid: pending.agentInfo.threadId,
    args
  });
  pendingSpans.delete(spanId);
}
function startUserInputPerfettoSpan(context2) {
  if (!isEnabled) return "";
  const spanId = generateSpanId();
  const agentInfo = getCurrentAgentInfo();
  pendingSpans.set(spanId, {
    name: "Waiting for User Input",
    category: "user_input",
    startTime: getTimestamp(),
    agentInfo,
    args: {
      context: context2
    }
  });
  events.push({
    name: "Waiting for User Input",
    cat: "user_input",
    ph: "B",
    ts: pendingSpans.get(spanId).startTime,
    pid: agentInfo.processId,
    tid: agentInfo.threadId,
    args: pendingSpans.get(spanId).args
  });
  return spanId;
}
function endUserInputPerfettoSpan(spanId, metadata) {
  if (!isEnabled || !spanId) return;
  const pending = pendingSpans.get(spanId);
  if (!pending) return;
  const endTime = getTimestamp();
  const duration = endTime - pending.startTime;
  const args = {
    ...pending.args,
    decision: metadata?.decision,
    source: metadata?.source,
    duration_ms: duration / 1e3
  };
  events.push({
    name: pending.name,
    cat: pending.category,
    ph: "E",
    ts: endTime,
    pid: pending.agentInfo.processId,
    tid: pending.agentInfo.threadId,
    args
  });
  pendingSpans.delete(spanId);
}
function startInteractionPerfettoSpan(userPrompt) {
  if (!isEnabled) return "";
  const spanId = generateSpanId();
  const agentInfo = getCurrentAgentInfo();
  pendingSpans.set(spanId, {
    name: "Interaction",
    category: "interaction",
    startTime: getTimestamp(),
    agentInfo,
    args: {
      user_prompt_length: userPrompt?.length
    }
  });
  events.push({
    name: "Interaction",
    cat: "interaction",
    ph: "B",
    ts: pendingSpans.get(spanId).startTime,
    pid: agentInfo.processId,
    tid: agentInfo.threadId,
    args: pendingSpans.get(spanId).args
  });
  return spanId;
}
function endInteractionPerfettoSpan(spanId) {
  if (!isEnabled || !spanId) return;
  const pending = pendingSpans.get(spanId);
  if (!pending) return;
  const endTime = getTimestamp();
  const duration = endTime - pending.startTime;
  events.push({
    name: pending.name,
    cat: pending.category,
    ph: "E",
    ts: endTime,
    pid: pending.agentInfo.processId,
    tid: pending.agentInfo.threadId,
    args: {
      ...pending.args,
      duration_ms: duration / 1e3
    }
  });
  pendingSpans.delete(spanId);
}
function stopWriteInterval() {
  if (staleSpanCleanupId) {
    clearInterval(staleSpanCleanupId);
    staleSpanCleanupId = null;
  }
  if (writeIntervalId) {
    clearInterval(writeIntervalId);
    writeIntervalId = null;
  }
}
function closeOpenSpans() {
  for (const [spanId, pending] of pendingSpans) {
    const endTime = getTimestamp();
    events.push({
      name: pending.name,
      cat: pending.category,
      ph: "E",
      ts: endTime,
      pid: pending.agentInfo.processId,
      tid: pending.agentInfo.threadId,
      args: {
        ...pending.args,
        incomplete: true,
        duration_ms: (endTime - pending.startTime) / 1e3
      }
    });
    pendingSpans.delete(spanId);
  }
}
async function periodicWrite() {
  if (!isEnabled || !tracePath || traceWritten) return;
  try {
    await mkdir(dirname(tracePath), { recursive: true });
    await writeFile(tracePath, buildTraceDocument());
    logForDebugging(
      `[Perfetto] Periodic write: ${events.length} events to ${tracePath}`
    );
  } catch (error) {
    logForDebugging(
      `[Perfetto] Periodic write failed: ${errorMessage(error)}`,
      { level: "error" }
    );
  }
}
async function writePerfettoTrace() {
  if (!isEnabled || !tracePath || traceWritten) {
    logForDebugging(
      `[Perfetto] Skipping final write: isEnabled=${isEnabled}, tracePath=${tracePath}, traceWritten=${traceWritten}`
    );
    return;
  }
  stopWriteInterval();
  closeOpenSpans();
  logForDebugging(
    `[Perfetto] writePerfettoTrace called: events=${events.length}`
  );
  try {
    await mkdir(dirname(tracePath), { recursive: true });
    await writeFile(tracePath, buildTraceDocument());
    traceWritten = true;
    logForDebugging(`[Perfetto] Trace finalized at: ${tracePath}`);
  } catch (error) {
    logForDebugging(
      `[Perfetto] Failed to write final trace: ${errorMessage(error)}`,
      { level: "error" }
    );
  }
}
function writePerfettoTraceSync() {
  if (!isEnabled || !tracePath || traceWritten) {
    logForDebugging(
      `[Perfetto] Skipping final sync write: isEnabled=${isEnabled}, tracePath=${tracePath}, traceWritten=${traceWritten}`
    );
    return;
  }
  stopWriteInterval();
  closeOpenSpans();
  logForDebugging(
    `[Perfetto] writePerfettoTraceSync called: events=${events.length}`
  );
  try {
    const dir = dirname(tracePath);
    mkdirSync(dir, { recursive: true });
    writeFileSync(tracePath, buildTraceDocument());
    traceWritten = true;
    logForDebugging(`[Perfetto] Trace finalized synchronously at: ${tracePath}`);
  } catch (error) {
    logForDebugging(
      `[Perfetto] Failed to write final trace synchronously: ${errorMessage(error)}`,
      { level: "error" }
    );
  }
}
var isEnabled, tracePath, metadataEvents, events, MAX_EVENTS, pendingSpans, agentRegistry, totalAgentCount, startTimeMs, spanIdCounter, traceWritten, processIdCounter, agentIdToProcessId, writeIntervalId, STALE_SPAN_TTL_MS, STALE_SPAN_CLEANUP_INTERVAL_MS, staleSpanCleanupId;
var init_perfettoTracing = __esm({
  "src/utils/telemetry/perfettoTracing.ts"() {
    init_bun_bundle();
    init_state();
    init_cleanupRegistry();
    init_debug();
    init_envUtils();
    init_errors();
    init_hash();
    init_slowOperations();
    init_teammate();
    isEnabled = false;
    tracePath = null;
    metadataEvents = [];
    events = [];
    MAX_EVENTS = 1e5;
    pendingSpans = /* @__PURE__ */ new Map();
    agentRegistry = /* @__PURE__ */ new Map();
    totalAgentCount = 0;
    startTimeMs = 0;
    spanIdCounter = 0;
    traceWritten = false;
    processIdCounter = 1;
    agentIdToProcessId = /* @__PURE__ */ new Map();
    writeIntervalId = null;
    STALE_SPAN_TTL_MS = 30 * 60 * 1e3;
    STALE_SPAN_CLEANUP_INTERVAL_MS = 60 * 1e3;
    staleSpanCleanupId = null;
  }
});

// src/services/analytics/metadata.ts
import { extname } from "path";
function sanitizeToolNameForAnalytics(toolName) {
  if (toolName.startsWith("mcp__")) {
    return "mcp_tool";
  }
  return toolName;
}
function isToolDetailsLoggingEnabled() {
  return isEnvTruthy(process.env.OTEL_LOG_TOOL_DETAILS);
}
function isAnalyticsToolDetailsLoggingEnabled(mcpServerType, mcpServerBaseUrl) {
  if (process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent") {
    return true;
  }
  if (mcpServerType === "claudeai-proxy") {
    return true;
  }
  if (mcpServerBaseUrl && isOfficialMcpUrl(mcpServerBaseUrl)) {
    return true;
  }
  return false;
}
function mcpToolDetailsForAnalytics(toolName, mcpServerType, mcpServerBaseUrl) {
  const details = extractMcpToolDetails(toolName);
  if (!details) {
    return {};
  }
  if (!BUILTIN_MCP_SERVER_NAMES.has(details.serverName) && !isAnalyticsToolDetailsLoggingEnabled(mcpServerType, mcpServerBaseUrl)) {
    return {};
  }
  return {
    mcpServerName: details.serverName,
    mcpToolName: details.mcpToolName
  };
}
function extractMcpToolDetails(toolName) {
  if (!toolName.startsWith("mcp__")) {
    return void 0;
  }
  const parts = toolName.split("__");
  if (parts.length < 3) {
    return void 0;
  }
  const serverName = parts[1];
  const mcpToolName = parts.slice(2).join("__");
  if (!serverName || !mcpToolName) {
    return void 0;
  }
  return {
    serverName,
    mcpToolName
  };
}
function extractSkillName(toolName, input) {
  if (toolName !== "Skill") {
    return void 0;
  }
  if (typeof input === "object" && input !== null && "skill" in input && typeof input.skill === "string") {
    return input.skill;
  }
  return void 0;
}
function truncateToolInputValue(value, depth = 0) {
  if (typeof value === "string") {
    if (value.length > TOOL_INPUT_STRING_TRUNCATE_AT) {
      return `${value.slice(0, TOOL_INPUT_STRING_TRUNCATE_TO)}\u2026[${value.length} chars]`;
    }
    return value;
  }
  if (typeof value === "number" || typeof value === "boolean" || value === null || value === void 0) {
    return value;
  }
  if (depth >= TOOL_INPUT_MAX_DEPTH) {
    return "<nested>";
  }
  if (Array.isArray(value)) {
    const mapped = value.slice(0, TOOL_INPUT_MAX_COLLECTION_ITEMS).map((v) => truncateToolInputValue(v, depth + 1));
    if (value.length > TOOL_INPUT_MAX_COLLECTION_ITEMS) {
      mapped.push(`\u2026[${value.length} items]`);
    }
    return mapped;
  }
  if (typeof value === "object") {
    const entries = Object.entries(value).filter(([k]) => !k.startsWith("_"));
    const mapped = entries.slice(0, TOOL_INPUT_MAX_COLLECTION_ITEMS).map(([k, v]) => [k, truncateToolInputValue(v, depth + 1)]);
    if (entries.length > TOOL_INPUT_MAX_COLLECTION_ITEMS) {
      mapped.push(["\u2026", `${entries.length} keys`]);
    }
    return Object.fromEntries(mapped);
  }
  return String(value);
}
function extractToolInputForTelemetry(input) {
  if (!isToolDetailsLoggingEnabled()) {
    return void 0;
  }
  const truncated = truncateToolInputValue(input);
  let json = jsonStringify(truncated);
  if (json.length > TOOL_INPUT_MAX_JSON_CHARS) {
    json = json.slice(0, TOOL_INPUT_MAX_JSON_CHARS) + "\u2026[truncated]";
  }
  return json;
}
function getFileExtensionForAnalytics(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (!ext || ext === ".") {
    return void 0;
  }
  const extension = ext.slice(1);
  if (extension.length > MAX_FILE_EXTENSION_LENGTH) {
    return "other";
  }
  return extension;
}
function getFileExtensionsFromBashCommand(command, simulatedSedEditFilePath) {
  if (!command.includes(".") && !simulatedSedEditFilePath) return void 0;
  let result;
  const seen = /* @__PURE__ */ new Set();
  if (simulatedSedEditFilePath) {
    const ext = getFileExtensionForAnalytics(simulatedSedEditFilePath);
    if (ext) {
      seen.add(ext);
      result = ext;
    }
  }
  for (const subcmd of command.split(COMPOUND_OPERATOR_REGEX)) {
    if (!subcmd) continue;
    const tokens = subcmd.split(WHITESPACE_REGEX);
    if (tokens.length < 2) continue;
    const firstToken = tokens[0];
    const slashIdx = firstToken.lastIndexOf("/");
    const baseCmd = slashIdx >= 0 ? firstToken.slice(slashIdx + 1) : firstToken;
    if (!FILE_COMMANDS.has(baseCmd)) continue;
    for (let i = 1; i < tokens.length; i++) {
      const arg = tokens[i];
      if (arg.charCodeAt(0) === 45) continue;
      const ext = getFileExtensionForAnalytics(arg);
      if (ext && !seen.has(ext)) {
        seen.add(ext);
        result = result ? result + "," + ext : ext;
      }
    }
  }
  if (!result) return void 0;
  return result;
}
var BUILTIN_MCP_SERVER_NAMES, TOOL_INPUT_STRING_TRUNCATE_AT, TOOL_INPUT_STRING_TRUNCATE_TO, TOOL_INPUT_MAX_JSON_CHARS, TOOL_INPUT_MAX_COLLECTION_ITEMS, TOOL_INPUT_MAX_DEPTH, MAX_FILE_EXTENSION_LENGTH, FILE_COMMANDS, COMPOUND_OPERATOR_REGEX, WHITESPACE_REGEX, getVersionBase, buildEnvContext;
var init_metadata = __esm({
  "src/services/analytics/metadata.ts"() {
    init_memoize();
    init_env();
    init_envDynamic();
    init_betas();
    init_model();
    init_state();
    init_envUtils();
    init_officialRegistry();
    init_auth();
    init_git();
    init_platform();
    init_agentContext();
    init_slowOperations();
    init_teammate();
    init_bun_bundle();
    BUILTIN_MCP_SERVER_NAMES = new Set(
      feature("CHICAGO_MCP") ? [
        (init_common(), __toCommonJS(common_exports)).COMPUTER_USE_MCP_SERVER_NAME
      ] : []
    );
    TOOL_INPUT_STRING_TRUNCATE_AT = 512;
    TOOL_INPUT_STRING_TRUNCATE_TO = 128;
    TOOL_INPUT_MAX_JSON_CHARS = 4 * 1024;
    TOOL_INPUT_MAX_COLLECTION_ITEMS = 20;
    TOOL_INPUT_MAX_DEPTH = 2;
    MAX_FILE_EXTENSION_LENGTH = 10;
    FILE_COMMANDS = /* @__PURE__ */ new Set([
      "rm",
      "mv",
      "cp",
      "touch",
      "mkdir",
      "chmod",
      "chown",
      "cat",
      "head",
      "tail",
      "sort",
      "stat",
      "diff",
      "wc",
      "grep",
      "rg",
      "sed"
    ]);
    COMPOUND_OPERATOR_REGEX = /\s*(?:&&|\|\||[;|])\s*/;
    WHITESPACE_REGEX = /\s+/;
    getVersionBase = memoize_default(() => {
      const match = MACRO.VERSION.match(/^\d+\.\d+\.\d+(?:-[a-z]+)?/);
      return match ? match[0] : void 0;
    });
    buildEnvContext = memoize_default(async () => {
      const [packageManagers, runtimes, linuxDistroInfo, vcs] = await Promise.all([
        env.getPackageManagers(),
        env.getRuntimes(),
        getLinuxDistroInfo(),
        detectVcs()
      ]);
      return {
        platform: getHostPlatformForAnalytics(),
        // Raw process.platform so freebsd/openbsd/aix/sunos are visible in BQ.
        // getHostPlatformForAnalytics() buckets those into 'linux'; here we want
        // the truth. CLAUDE_CODE_HOST_PLATFORM still overrides for container/remote.
        platformRaw: process.env.CLAUDE_CODE_HOST_PLATFORM || process.platform,
        arch: env.arch,
        nodeVersion: env.nodeVersion,
        terminal: envDynamic.terminal,
        packageManagers: packageManagers.join(","),
        runtimes: runtimes.join(","),
        isRunningWithBun: env.isRunningWithBun(),
        isCi: isEnvTruthy(process.env.CI),
        isClaubbit: isEnvTruthy(process.env.CLAUBBIT),
        isClaudeCodeRemote: isEnvTruthy(process.env.CLAUDE_CODE_REMOTE),
        isLocalAgentMode: process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent",
        isConductor: env.isConductor(),
        ...process.env.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE && {
          remoteEnvironmentType: process.env.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE
        },
        // Gated by feature flag to prevent leaking "coworkerType" string in external builds
        ...feature("COWORKER_TYPE_TELEMETRY") ? process.env.CLAUDE_CODE_COWORKER_TYPE ? { coworkerType: process.env.CLAUDE_CODE_COWORKER_TYPE } : {} : {},
        ...process.env.CLAUDE_CODE_CONTAINER_ID && {
          claudeCodeContainerId: process.env.CLAUDE_CODE_CONTAINER_ID
        },
        ...process.env.CLAUDE_CODE_REMOTE_SESSION_ID && {
          claudeCodeRemoteSessionId: process.env.CLAUDE_CODE_REMOTE_SESSION_ID
        },
        ...process.env.CLAUDE_CODE_TAGS && {
          tags: process.env.CLAUDE_CODE_TAGS
        },
        isGithubAction: isEnvTruthy(process.env.GITHUB_ACTIONS),
        isClaudeCodeAction: isEnvTruthy(process.env.CLAUDE_CODE_ACTION),
        isClaudeAiAuth: isClaudeAISubscriber(),
        version: MACRO.VERSION,
        versionBase: getVersionBase(),
        buildTime: MACRO.BUILD_TIME,
        deploymentEnvironment: env.detectDeploymentEnvironment(),
        ...isEnvTruthy(process.env.GITHUB_ACTIONS) && {
          githubEventName: process.env.GITHUB_EVENT_NAME,
          githubActionsRunnerEnvironment: process.env.RUNNER_ENVIRONMENT,
          githubActionsRunnerOs: process.env.RUNNER_OS,
          githubActionRef: process.env.GITHUB_ACTION_PATH?.includes(
            "claude-code-action/"
          ) ? process.env.GITHUB_ACTION_PATH.split("claude-code-action/")[1] : void 0
        },
        ...getWslVersion() && { wslVersion: getWslVersion() },
        ...linuxDistroInfo ?? {},
        ...vcs.length > 0 ? { vcs: vcs.join(",") } : {}
      };
    });
  }
});

// src/utils/telemetry/betaSessionTracing.ts
import { createHash } from "crypto";
function clearBetaTracingState() {
  seenHashes.clear();
  lastReportedMessageHash.clear();
}
function isBetaTracingEnabled() {
  const baseEnabled = isEnvTruthy(process.env.ENABLE_BETA_TRACING_DETAILED) && Boolean(process.env.BETA_TRACING_ENDPOINT);
  if (!baseEnabled) {
    return false;
  }
  if (process.env.USER_TYPE !== "ant") {
    return getIsNonInteractiveSession() || getFeatureValue_CACHED_MAY_BE_STALE("tengu_trace_lantern", false);
  }
  return true;
}
function truncateContent(content, maxSize = MAX_CONTENT_SIZE) {
  if (content.length <= maxSize) {
    return { content, truncated: false };
  }
  return {
    content: content.slice(0, maxSize) + "\n\n[TRUNCATED - Content exceeds 60KB limit]",
    truncated: true
  };
}
function shortHash(content) {
  return createHash("sha256").update(content).digest("hex").slice(0, 12);
}
function hashSystemPrompt(systemPrompt) {
  return `sp_${shortHash(systemPrompt)}`;
}
function hashMessage(message) {
  const content = jsonStringify(message.message.content);
  return `msg_${shortHash(content)}`;
}
function extractSystemReminderContent(text) {
  const match = text.trim().match(SYSTEM_REMINDER_REGEX);
  return match && match[1] ? match[1].trim() : null;
}
function formatMessagesForContext(messages) {
  const contextParts = [];
  const systemReminders = [];
  for (const message of messages) {
    const content = message.message.content;
    if (typeof content === "string") {
      const reminderContent = extractSystemReminderContent(content);
      if (reminderContent) {
        systemReminders.push(reminderContent);
      } else {
        contextParts.push(`[USER]
${content}`);
      }
    } else if (Array.isArray(content)) {
      for (const block of content) {
        if (block.type === "text") {
          const reminderContent = extractSystemReminderContent(block.text);
          if (reminderContent) {
            systemReminders.push(reminderContent);
          } else {
            contextParts.push(`[USER]
${block.text}`);
          }
        } else if (block.type === "tool_result") {
          const resultContent = typeof block.content === "string" ? block.content : jsonStringify(block.content);
          const reminderContent = extractSystemReminderContent(resultContent);
          if (reminderContent) {
            systemReminders.push(reminderContent);
          } else {
            contextParts.push(
              `[TOOL RESULT: ${block.tool_use_id}]
${resultContent}`
            );
          }
        }
      }
    }
  }
  return { contextParts, systemReminders };
}
function addBetaInteractionAttributes(span, userPrompt) {
  if (!isBetaTracingEnabled()) {
    return;
  }
  const { content: truncatedPrompt, truncated } = truncateContent(
    `[USER PROMPT]
${userPrompt}`
  );
  span.setAttributes({
    new_context: truncatedPrompt,
    ...truncated && {
      new_context_truncated: true,
      new_context_original_length: userPrompt.length
    }
  });
}
function addBetaLLMRequestAttributes(span, newContext, messagesForAPI) {
  if (!isBetaTracingEnabled()) {
    return;
  }
  if (newContext?.systemPrompt) {
    const promptHash = hashSystemPrompt(newContext.systemPrompt);
    const preview = newContext.systemPrompt.slice(0, 500);
    span.setAttribute("system_prompt_hash", promptHash);
    span.setAttribute("system_prompt_preview", preview);
    span.setAttribute("system_prompt_length", newContext.systemPrompt.length);
    if (!seenHashes.has(promptHash)) {
      seenHashes.add(promptHash);
      const { content: truncatedPrompt, truncated } = truncateContent(
        newContext.systemPrompt
      );
      void logOTelEvent("system_prompt", {
        system_prompt_hash: promptHash,
        system_prompt: truncatedPrompt,
        system_prompt_length: String(newContext.systemPrompt.length),
        ...truncated && { system_prompt_truncated: "true" }
      });
    }
  }
  if (newContext?.tools) {
    try {
      const toolsArray = jsonParse(newContext.tools);
      const toolsWithHashes = toolsArray.map((tool) => {
        const toolJson = jsonStringify(tool);
        const toolHash = shortHash(toolJson);
        return {
          name: typeof tool.name === "string" ? tool.name : "unknown",
          hash: toolHash,
          json: toolJson
        };
      });
      span.setAttribute(
        "tools",
        jsonStringify(
          toolsWithHashes.map(({ name, hash }) => ({ name, hash }))
        )
      );
      span.setAttribute("tools_count", toolsWithHashes.length);
      for (const { name, hash, json } of toolsWithHashes) {
        if (!seenHashes.has(`tool_${hash}`)) {
          seenHashes.add(`tool_${hash}`);
          const { content: truncatedTool, truncated } = truncateContent(json);
          void logOTelEvent("tool", {
            tool_name: sanitizeToolNameForAnalytics(name),
            tool_hash: hash,
            tool: truncatedTool,
            ...truncated && { tool_truncated: "true" }
          });
        }
      }
    } catch {
      span.setAttribute("tools_parse_error", true);
    }
  }
  if (messagesForAPI && messagesForAPI.length > 0 && newContext?.querySource) {
    const querySource = newContext.querySource;
    const lastHash = lastReportedMessageHash.get(querySource);
    let startIndex = 0;
    if (lastHash) {
      for (let i = 0; i < messagesForAPI.length; i++) {
        const msg = messagesForAPI[i];
        if (msg && hashMessage(msg) === lastHash) {
          startIndex = i + 1;
          break;
        }
      }
    }
    const newMessages = messagesForAPI.slice(startIndex).filter((m) => m.type === "user");
    if (newMessages.length > 0) {
      const { contextParts, systemReminders } = formatMessagesForContext(newMessages);
      if (contextParts.length > 0) {
        const fullContext = contextParts.join("\n\n---\n\n");
        const { content: truncatedContext, truncated } = truncateContent(fullContext);
        span.setAttributes({
          new_context: truncatedContext,
          new_context_message_count: newMessages.length,
          ...truncated && {
            new_context_truncated: true,
            new_context_original_length: fullContext.length
          }
        });
      }
      if (systemReminders.length > 0) {
        const fullReminders = systemReminders.join("\n\n---\n\n");
        const { content: truncatedReminders, truncated: remindersTruncated } = truncateContent(fullReminders);
        span.setAttributes({
          system_reminders: truncatedReminders,
          system_reminders_count: systemReminders.length,
          ...remindersTruncated && {
            system_reminders_truncated: true,
            system_reminders_original_length: fullReminders.length
          }
        });
      }
      const lastMessage = messagesForAPI[messagesForAPI.length - 1];
      if (lastMessage) {
        lastReportedMessageHash.set(querySource, hashMessage(lastMessage));
      }
    }
  }
}
function addBetaLLMResponseAttributes(endAttributes, metadata) {
  if (!isBetaTracingEnabled() || !metadata) {
    return;
  }
  if (metadata.modelOutput !== void 0) {
    const { content: modelOutput, truncated: outputTruncated } = truncateContent(metadata.modelOutput);
    endAttributes["response.model_output"] = modelOutput;
    if (outputTruncated) {
      endAttributes["response.model_output_truncated"] = true;
      endAttributes["response.model_output_original_length"] = metadata.modelOutput.length;
    }
  }
  if (process.env.USER_TYPE === "ant" && metadata.thinkingOutput !== void 0) {
    const { content: thinkingOutput, truncated: thinkingTruncated } = truncateContent(metadata.thinkingOutput);
    endAttributes["response.thinking_output"] = thinkingOutput;
    if (thinkingTruncated) {
      endAttributes["response.thinking_output_truncated"] = true;
      endAttributes["response.thinking_output_original_length"] = metadata.thinkingOutput.length;
    }
  }
}
function addBetaToolInputAttributes(span, toolName, toolInput) {
  if (!isBetaTracingEnabled()) {
    return;
  }
  const { content: truncatedInput, truncated } = truncateContent(
    `[TOOL INPUT: ${toolName}]
${toolInput}`
  );
  span.setAttributes({
    tool_input: truncatedInput,
    ...truncated && {
      tool_input_truncated: true,
      tool_input_original_length: toolInput.length
    }
  });
}
function addBetaToolResultAttributes(endAttributes, toolName, toolResult) {
  if (!isBetaTracingEnabled()) {
    return;
  }
  const { content: truncatedResult, truncated } = truncateContent(
    `[TOOL RESULT: ${toolName}]
${toolResult}`
  );
  endAttributes["new_context"] = truncatedResult;
  if (truncated) {
    endAttributes["new_context_truncated"] = true;
    endAttributes["new_context_original_length"] = toolResult.length;
  }
}
var seenHashes, lastReportedMessageHash, MAX_CONTENT_SIZE, SYSTEM_REMINDER_REGEX;
var init_betaSessionTracing = __esm({
  "src/utils/telemetry/betaSessionTracing.ts"() {
    init_state();
    init_growthbook();
    init_metadata();
    init_envUtils();
    init_slowOperations();
    init_events();
    seenHashes = /* @__PURE__ */ new Set();
    lastReportedMessageHash = /* @__PURE__ */ new Map();
    MAX_CONTENT_SIZE = 60 * 1024;
    SYSTEM_REMINDER_REGEX = /^<system-reminder>\n?([\s\S]*?)\n?<\/system-reminder>$/;
  }
});

// src/utils/telemetry/sessionTracing.ts
import { AsyncLocalStorage as AsyncLocalStorage2 } from "async_hooks";
function getSpanId(span) {
  return span.spanContext().spanId || "";
}
function ensureCleanupInterval() {
  if (_cleanupIntervalStarted) return;
  _cleanupIntervalStarted = true;
  const interval = setInterval(() => {
    const cutoff = Date.now() - SPAN_TTL_MS;
    for (const [spanId, weakRef] of activeSpans) {
      const ctx = weakRef.deref();
      if (ctx === void 0) {
        activeSpans.delete(spanId);
        strongSpans.delete(spanId);
      } else if (ctx.startTime < cutoff) {
        if (!ctx.ended) ctx.span.end();
        activeSpans.delete(spanId);
        strongSpans.delete(spanId);
      }
    }
  }, 6e4);
  if (typeof interval.unref === "function") {
    interval.unref();
  }
}
function isEnhancedTelemetryEnabled() {
  if (feature("ENHANCED_TELEMETRY_BETA")) {
    const env2 = process.env.CLAUDE_CODE_ENHANCED_TELEMETRY_BETA ?? process.env.ENABLE_ENHANCED_TELEMETRY_BETA;
    if (isEnvTruthy(env2)) {
      return true;
    }
    if (isEnvDefinedFalsy(env2)) {
      return false;
    }
    return process.env.USER_TYPE === "ant" || getFeatureValue_CACHED_MAY_BE_STALE("enhanced_telemetry_beta", false);
  }
  return false;
}
function isAnyTracingEnabled() {
  return isEnhancedTelemetryEnabled() || isBetaTracingEnabled();
}
function getTracer() {
  return trace.getTracer("com.anthropic.claude_code.tracing", "1.0.0");
}
function createSpanAttributes(spanType, customAttributes = {}) {
  const baseAttributes = getTelemetryAttributes();
  const attributes = {
    ...baseAttributes,
    "span.type": spanType,
    ...customAttributes
  };
  return attributes;
}
function startInteractionSpan(userPrompt) {
  ensureCleanupInterval();
  const perfettoSpanId = isPerfettoTracingEnabled() ? startInteractionPerfettoSpan(userPrompt) : void 0;
  if (!isAnyTracingEnabled()) {
    if (perfettoSpanId) {
      const dummySpan = trace.getActiveSpan() || getTracer().startSpan("dummy");
      const spanId2 = getSpanId(dummySpan);
      const spanContextObj2 = {
        span: dummySpan,
        startTime: Date.now(),
        attributes: {},
        perfettoSpanId
      };
      activeSpans.set(spanId2, new WeakRef(spanContextObj2));
      interactionContext.enterWith(spanContextObj2);
      return dummySpan;
    }
    return trace.getActiveSpan() || getTracer().startSpan("dummy");
  }
  const tracer = getTracer();
  const isUserPromptLoggingEnabled2 = isEnvTruthy(
    process.env.OTEL_LOG_USER_PROMPTS
  );
  const promptToLog = isUserPromptLoggingEnabled2 ? userPrompt : "<REDACTED>";
  interactionSequence++;
  const attributes = createSpanAttributes("interaction", {
    user_prompt: promptToLog,
    user_prompt_length: userPrompt.length,
    "interaction.sequence": interactionSequence
  });
  const span = tracer.startSpan("claude_code.interaction", {
    attributes
  });
  addBetaInteractionAttributes(span, userPrompt);
  const spanId = getSpanId(span);
  const spanContextObj = {
    span,
    startTime: Date.now(),
    attributes,
    perfettoSpanId
  };
  activeSpans.set(spanId, new WeakRef(spanContextObj));
  interactionContext.enterWith(spanContextObj);
  return span;
}
function endInteractionSpan() {
  const spanContext = interactionContext.getStore();
  if (!spanContext) {
    return;
  }
  if (spanContext.ended) {
    return;
  }
  if (spanContext.perfettoSpanId) {
    endInteractionPerfettoSpan(spanContext.perfettoSpanId);
  }
  if (!isAnyTracingEnabled()) {
    spanContext.ended = true;
    activeSpans.delete(getSpanId(spanContext.span));
    interactionContext.enterWith(void 0);
    return;
  }
  const duration = Date.now() - spanContext.startTime;
  spanContext.span.setAttributes({
    "interaction.duration_ms": duration
  });
  spanContext.span.end();
  spanContext.ended = true;
  activeSpans.delete(getSpanId(spanContext.span));
  interactionContext.enterWith(void 0);
}
function startLLMRequestSpan(model, newContext, messagesForAPI, fastMode) {
  const perfettoSpanId = isPerfettoTracingEnabled() ? startLLMRequestPerfettoSpan({
    model,
    querySource: newContext?.querySource,
    messageId: void 0
    // Will be set in endLLMRequestSpan
  }) : void 0;
  if (!isAnyTracingEnabled()) {
    if (perfettoSpanId) {
      const dummySpan = trace.getActiveSpan() || getTracer().startSpan("dummy");
      const spanId2 = getSpanId(dummySpan);
      const spanContextObj2 = {
        span: dummySpan,
        startTime: Date.now(),
        attributes: { model },
        perfettoSpanId
      };
      activeSpans.set(spanId2, new WeakRef(spanContextObj2));
      strongSpans.set(spanId2, spanContextObj2);
      return dummySpan;
    }
    return trace.getActiveSpan() || getTracer().startSpan("dummy");
  }
  const tracer = getTracer();
  const parentSpanCtx = interactionContext.getStore();
  const attributes = createSpanAttributes("llm_request", {
    model,
    "llm_request.context": parentSpanCtx ? "interaction" : "standalone",
    speed: fastMode ? "fast" : "normal"
  });
  const ctx = parentSpanCtx ? trace.setSpan(context.active(), parentSpanCtx.span) : context.active();
  const span = tracer.startSpan("claude_code.llm_request", { attributes }, ctx);
  if (newContext?.querySource) {
    span.setAttribute("query_source", newContext.querySource);
  }
  addBetaLLMRequestAttributes(span, newContext, messagesForAPI);
  const spanId = getSpanId(span);
  const spanContextObj = {
    span,
    startTime: Date.now(),
    attributes,
    perfettoSpanId
  };
  activeSpans.set(spanId, new WeakRef(spanContextObj));
  strongSpans.set(spanId, spanContextObj);
  return span;
}
function endLLMRequestSpan(span, metadata) {
  let llmSpanContext;
  if (span) {
    const spanId2 = getSpanId(span);
    llmSpanContext = activeSpans.get(spanId2)?.deref();
  } else {
    llmSpanContext = Array.from(activeSpans.values()).findLast((r) => {
      const ctx = r.deref();
      return ctx?.attributes["span.type"] === "llm_request" || ctx?.attributes["model"];
    })?.deref();
  }
  if (!llmSpanContext) {
    return;
  }
  const duration = Date.now() - llmSpanContext.startTime;
  if (llmSpanContext.perfettoSpanId) {
    endLLMRequestPerfettoSpan(llmSpanContext.perfettoSpanId, {
      ttftMs: metadata?.ttftMs,
      ttltMs: duration,
      // Time to last token is the total duration
      promptTokens: metadata?.inputTokens,
      outputTokens: metadata?.outputTokens,
      cacheReadTokens: metadata?.cacheReadTokens,
      cacheCreationTokens: metadata?.cacheCreationTokens,
      success: metadata?.success,
      error: metadata?.error,
      requestSetupMs: metadata?.requestSetupMs,
      attemptStartTimes: metadata?.attemptStartTimes
    });
  }
  if (!isAnyTracingEnabled()) {
    const spanId2 = getSpanId(llmSpanContext.span);
    activeSpans.delete(spanId2);
    strongSpans.delete(spanId2);
    return;
  }
  const endAttributes = {
    duration_ms: duration
  };
  if (metadata) {
    if (metadata.inputTokens !== void 0)
      endAttributes["input_tokens"] = metadata.inputTokens;
    if (metadata.outputTokens !== void 0)
      endAttributes["output_tokens"] = metadata.outputTokens;
    if (metadata.cacheReadTokens !== void 0)
      endAttributes["cache_read_tokens"] = metadata.cacheReadTokens;
    if (metadata.cacheCreationTokens !== void 0)
      endAttributes["cache_creation_tokens"] = metadata.cacheCreationTokens;
    if (metadata.success !== void 0)
      endAttributes["success"] = metadata.success;
    if (metadata.statusCode !== void 0)
      endAttributes["status_code"] = metadata.statusCode;
    if (metadata.error !== void 0) endAttributes["error"] = metadata.error;
    if (metadata.attempt !== void 0)
      endAttributes["attempt"] = metadata.attempt;
    if (metadata.hasToolCall !== void 0)
      endAttributes["response.has_tool_call"] = metadata.hasToolCall;
    if (metadata.ttftMs !== void 0)
      endAttributes["ttft_ms"] = metadata.ttftMs;
    addBetaLLMResponseAttributes(endAttributes, metadata);
  }
  llmSpanContext.span.setAttributes(endAttributes);
  llmSpanContext.span.end();
  const spanId = getSpanId(llmSpanContext.span);
  activeSpans.delete(spanId);
  strongSpans.delete(spanId);
}
function startToolSpan(toolName, toolAttributes, toolInput) {
  const perfettoSpanId = isPerfettoTracingEnabled() ? startToolPerfettoSpan(toolName, toolAttributes) : void 0;
  if (!isAnyTracingEnabled()) {
    if (perfettoSpanId) {
      const dummySpan = trace.getActiveSpan() || getTracer().startSpan("dummy");
      const spanId2 = getSpanId(dummySpan);
      const spanContextObj2 = {
        span: dummySpan,
        startTime: Date.now(),
        attributes: { "span.type": "tool", tool_name: toolName },
        perfettoSpanId
      };
      activeSpans.set(spanId2, new WeakRef(spanContextObj2));
      toolContext.enterWith(spanContextObj2);
      return dummySpan;
    }
    return trace.getActiveSpan() || getTracer().startSpan("dummy");
  }
  const tracer = getTracer();
  const parentSpanCtx = interactionContext.getStore();
  const attributes = createSpanAttributes("tool", {
    tool_name: toolName,
    ...toolAttributes
  });
  const ctx = parentSpanCtx ? trace.setSpan(context.active(), parentSpanCtx.span) : context.active();
  const span = tracer.startSpan("claude_code.tool", { attributes }, ctx);
  if (toolInput) {
    addBetaToolInputAttributes(span, toolName, toolInput);
  }
  const spanId = getSpanId(span);
  const spanContextObj = {
    span,
    startTime: Date.now(),
    attributes,
    perfettoSpanId
  };
  activeSpans.set(spanId, new WeakRef(spanContextObj));
  toolContext.enterWith(spanContextObj);
  return span;
}
function startToolBlockedOnUserSpan() {
  const perfettoSpanId = isPerfettoTracingEnabled() ? startUserInputPerfettoSpan("tool_permission") : void 0;
  if (!isAnyTracingEnabled()) {
    if (perfettoSpanId) {
      const dummySpan = trace.getActiveSpan() || getTracer().startSpan("dummy");
      const spanId2 = getSpanId(dummySpan);
      const spanContextObj2 = {
        span: dummySpan,
        startTime: Date.now(),
        attributes: { "span.type": "tool.blocked_on_user" },
        perfettoSpanId
      };
      activeSpans.set(spanId2, new WeakRef(spanContextObj2));
      strongSpans.set(spanId2, spanContextObj2);
      return dummySpan;
    }
    return trace.getActiveSpan() || getTracer().startSpan("dummy");
  }
  const tracer = getTracer();
  const parentSpanCtx = toolContext.getStore();
  const attributes = createSpanAttributes("tool.blocked_on_user");
  const ctx = parentSpanCtx ? trace.setSpan(context.active(), parentSpanCtx.span) : context.active();
  const span = tracer.startSpan(
    "claude_code.tool.blocked_on_user",
    { attributes },
    ctx
  );
  const spanId = getSpanId(span);
  const spanContextObj = {
    span,
    startTime: Date.now(),
    attributes,
    perfettoSpanId
  };
  activeSpans.set(spanId, new WeakRef(spanContextObj));
  strongSpans.set(spanId, spanContextObj);
  return span;
}
function endToolBlockedOnUserSpan(decision, source) {
  const blockedSpanContext = Array.from(activeSpans.values()).findLast(
    (r) => r.deref()?.attributes["span.type"] === "tool.blocked_on_user"
  )?.deref();
  if (!blockedSpanContext) {
    return;
  }
  if (blockedSpanContext.perfettoSpanId) {
    endUserInputPerfettoSpan(blockedSpanContext.perfettoSpanId, {
      decision,
      source
    });
  }
  if (!isAnyTracingEnabled()) {
    const spanId2 = getSpanId(blockedSpanContext.span);
    activeSpans.delete(spanId2);
    strongSpans.delete(spanId2);
    return;
  }
  const duration = Date.now() - blockedSpanContext.startTime;
  const attributes = {
    duration_ms: duration
  };
  if (decision) {
    attributes["decision"] = decision;
  }
  if (source) {
    attributes["source"] = source;
  }
  blockedSpanContext.span.setAttributes(attributes);
  blockedSpanContext.span.end();
  const spanId = getSpanId(blockedSpanContext.span);
  activeSpans.delete(spanId);
  strongSpans.delete(spanId);
}
function startToolExecutionSpan() {
  if (!isAnyTracingEnabled()) {
    return trace.getActiveSpan() || getTracer().startSpan("dummy");
  }
  const tracer = getTracer();
  const parentSpanCtx = toolContext.getStore();
  const attributes = createSpanAttributes("tool.execution");
  const ctx = parentSpanCtx ? trace.setSpan(context.active(), parentSpanCtx.span) : context.active();
  const span = tracer.startSpan(
    "claude_code.tool.execution",
    { attributes },
    ctx
  );
  const spanId = getSpanId(span);
  const spanContextObj = {
    span,
    startTime: Date.now(),
    attributes
  };
  activeSpans.set(spanId, new WeakRef(spanContextObj));
  strongSpans.set(spanId, spanContextObj);
  return span;
}
function endToolExecutionSpan(metadata) {
  if (!isAnyTracingEnabled()) {
    return;
  }
  const executionSpanContext = Array.from(activeSpans.values()).findLast((r) => r.deref()?.attributes["span.type"] === "tool.execution")?.deref();
  if (!executionSpanContext) {
    return;
  }
  const duration = Date.now() - executionSpanContext.startTime;
  const attributes = {
    duration_ms: duration
  };
  if (metadata) {
    if (metadata.success !== void 0) attributes["success"] = metadata.success;
    if (metadata.error !== void 0) attributes["error"] = metadata.error;
  }
  executionSpanContext.span.setAttributes(attributes);
  executionSpanContext.span.end();
  const spanId = getSpanId(executionSpanContext.span);
  activeSpans.delete(spanId);
  strongSpans.delete(spanId);
}
function endToolSpan(toolResult, resultTokens) {
  const toolSpanContext = toolContext.getStore();
  if (!toolSpanContext) {
    return;
  }
  if (toolSpanContext.perfettoSpanId) {
    endToolPerfettoSpan(toolSpanContext.perfettoSpanId, {
      success: true,
      resultTokens
    });
  }
  if (!isAnyTracingEnabled()) {
    const spanId2 = getSpanId(toolSpanContext.span);
    activeSpans.delete(spanId2);
    toolContext.enterWith(void 0);
    return;
  }
  const duration = Date.now() - toolSpanContext.startTime;
  const endAttributes = {
    duration_ms: duration
  };
  if (toolResult) {
    const toolName = toolSpanContext.attributes["tool_name"] || "unknown";
    addBetaToolResultAttributes(endAttributes, toolName, toolResult);
  }
  if (resultTokens !== void 0) {
    endAttributes["result_tokens"] = resultTokens;
  }
  toolSpanContext.span.setAttributes(endAttributes);
  toolSpanContext.span.end();
  const spanId = getSpanId(toolSpanContext.span);
  activeSpans.delete(spanId);
  toolContext.enterWith(void 0);
}
function isToolContentLoggingEnabled() {
  return isEnvTruthy(process.env.OTEL_LOG_TOOL_CONTENT);
}
function addToolContentEvent(eventName, attributes) {
  if (!isAnyTracingEnabled() || !isToolContentLoggingEnabled()) {
    return;
  }
  const currentSpanCtx = toolContext.getStore();
  if (!currentSpanCtx) {
    return;
  }
  const processedAttributes = {};
  for (const [key, value] of Object.entries(attributes)) {
    if (typeof value === "string") {
      const { content, truncated } = truncateContent(value);
      processedAttributes[key] = content;
      if (truncated) {
        processedAttributes[`${key}_truncated`] = true;
        processedAttributes[`${key}_original_length`] = value.length;
      }
    } else {
      processedAttributes[key] = value;
    }
  }
  currentSpanCtx.span.addEvent(eventName, processedAttributes);
}
function startHookSpan(hookEvent, hookName, numHooks, hookDefinitions) {
  if (!isBetaTracingEnabled()) {
    return trace.getActiveSpan() || getTracer().startSpan("dummy");
  }
  const tracer = getTracer();
  const parentSpanCtx = toolContext.getStore() ?? interactionContext.getStore();
  const attributes = createSpanAttributes("hook", {
    hook_event: hookEvent,
    hook_name: hookName,
    num_hooks: numHooks,
    hook_definitions: hookDefinitions
  });
  const ctx = parentSpanCtx ? trace.setSpan(context.active(), parentSpanCtx.span) : context.active();
  const span = tracer.startSpan("claude_code.hook", { attributes }, ctx);
  const spanId = getSpanId(span);
  const spanContextObj = {
    span,
    startTime: Date.now(),
    attributes
  };
  activeSpans.set(spanId, new WeakRef(spanContextObj));
  strongSpans.set(spanId, spanContextObj);
  return span;
}
function endHookSpan(span, metadata) {
  if (!isBetaTracingEnabled()) {
    return;
  }
  const spanId = getSpanId(span);
  const spanContext = activeSpans.get(spanId)?.deref();
  if (!spanContext) {
    return;
  }
  const duration = Date.now() - spanContext.startTime;
  const endAttributes = {
    duration_ms: duration
  };
  if (metadata) {
    if (metadata.numSuccess !== void 0)
      endAttributes["num_success"] = metadata.numSuccess;
    if (metadata.numBlocking !== void 0)
      endAttributes["num_blocking"] = metadata.numBlocking;
    if (metadata.numNonBlockingError !== void 0)
      endAttributes["num_non_blocking_error"] = metadata.numNonBlockingError;
    if (metadata.numCancelled !== void 0)
      endAttributes["num_cancelled"] = metadata.numCancelled;
  }
  spanContext.span.setAttributes(endAttributes);
  spanContext.span.end();
  activeSpans.delete(spanId);
  strongSpans.delete(spanId);
}
var interactionContext, toolContext, activeSpans, strongSpans, interactionSequence, _cleanupIntervalStarted, SPAN_TTL_MS;
var init_sessionTracing = __esm({
  "src/utils/telemetry/sessionTracing.ts"() {
    init_bun_bundle();
    init_opentelemetry_api();
    init_growthbook();
    init_envUtils();
    init_telemetryAttributes();
    init_betaSessionTracing();
    init_perfettoTracing();
    interactionContext = new AsyncLocalStorage2();
    toolContext = new AsyncLocalStorage2();
    activeSpans = /* @__PURE__ */ new Map();
    strongSpans = /* @__PURE__ */ new Map();
    interactionSequence = 0;
    _cleanupIntervalStarted = false;
    SPAN_TTL_MS = 30 * 60 * 1e3;
  }
});

export {
  isProcessRunning,
  getAncestorPidsAsync,
  getProcessCommand,
  init_genericProcessUtils,
  initJetBrainsDetection,
  envDynamic,
  init_envDynamic,
  prefetchOfficialMcpUrls,
  init_officialRegistry,
  isAgentSwarmsEnabled,
  init_agentSwarmsEnabled,
  getAgentContext,
  runWithAgentContext,
  getSubagentLogName,
  consumeInvokingRequestId,
  init_agentContext,
  sanitizeToolNameForAnalytics,
  isToolDetailsLoggingEnabled,
  mcpToolDetailsForAnalytics,
  extractMcpToolDetails,
  extractSkillName,
  extractToolInputForTelemetry,
  getFileExtensionForAnalytics,
  getFileExtensionsFromBashCommand,
  init_metadata,
  redactIfDisabled,
  logOTelEvent,
  init_events,
  initializePerfettoTracing,
  isPerfettoTracingEnabled,
  registerAgent,
  unregisterAgent,
  init_perfettoTracing,
  clearBetaTracingState,
  isBetaTracingEnabled,
  init_betaSessionTracing,
  isEnhancedTelemetryEnabled,
  startInteractionSpan,
  endInteractionSpan,
  startLLMRequestSpan,
  endLLMRequestSpan,
  startToolSpan,
  startToolBlockedOnUserSpan,
  endToolBlockedOnUserSpan,
  startToolExecutionSpan,
  endToolExecutionSpan,
  endToolSpan,
  addToolContentEvent,
  startHookSpan,
  endHookSpan,
  init_sessionTracing
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL2dlbmVyaWNQcm9jZXNzVXRpbHMudHMiLCAiLi4vLi4vc3JjL3V0aWxzL2VudkR5bmFtaWMudHMiLCAiLi4vLi4vc3JjL3NlcnZpY2VzL21jcC9vZmZpY2lhbFJlZ2lzdHJ5LnRzIiwgIi4uLy4uL3NyYy91dGlscy9hZ2VudFN3YXJtc0VuYWJsZWQudHMiLCAiLi4vLi4vc3JjL3V0aWxzL2FnZW50Q29udGV4dC50cyIsICIuLi8uLi9zcmMvdXRpbHMvdGFnZ2VkSWQudHMiLCAiLi4vLi4vc3JjL3V0aWxzL3RlbGVtZXRyeUF0dHJpYnV0ZXMudHMiLCAiLi4vLi4vc3JjL3V0aWxzL3RlbGVtZXRyeS9ldmVudHMudHMiLCAiLi4vLi4vc3JjL3V0aWxzL3RlbGVtZXRyeS9wZXJmZXR0b1RyYWNpbmcudHMiLCAiLi4vLi4vc3JjL3NlcnZpY2VzL2FuYWx5dGljcy9tZXRhZGF0YS50cyIsICIuLi8uLi9zcmMvdXRpbHMvdGVsZW1ldHJ5L2JldGFTZXNzaW9uVHJhY2luZy50cyIsICIuLi8uLi9zcmMvdXRpbHMvdGVsZW1ldHJ5L3Nlc3Npb25UcmFjaW5nLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge1xuICBleGVjRmlsZU5vVGhyb3dXaXRoQ3dkLFxuICBleGVjU3luY1dpdGhEZWZhdWx0c19ERVBSRUNBVEVELFxufSBmcm9tICcuL2V4ZWNGaWxlTm9UaHJvdy5qcydcblxuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIHBsYXRmb3JtLWFnbm9zdGljIGltcGxlbWVudGF0aW9ucyBvZiBjb21tb24gYHBzYCB0eXBlIGNvbW1hbmRzLlxuLy8gV2hlbiBhZGRpbmcgbmV3IGNvZGUgdG8gdGhpcyBmaWxlLCBtYWtlIHN1cmUgdG8gaGFuZGxlOlxuLy8gLSBXaW4zMiwgYXMgYHBzYCB3aXRoaW4gY3lnd2luIGFuZCBXU0wgbWF5IG5vdCBiZWhhdmUgYXMgZXhwZWN0ZWQsIHBhcnRpY3VsYXJseSB3aGVuIGF0dGVtcHRpbmcgdG8gYWNjZXNzIHByb2Nlc3NlcyBvbiB0aGUgaG9zdC5cbi8vIC0gVW5peCB2cyBCU0Qtc3R5bGUgYHBzYCBoYXZlIGRpZmZlcmVudCBvcHRpb25zLlxuXG4vKipcbiAqIENoZWNrIGlmIGEgcHJvY2VzcyB3aXRoIHRoZSBnaXZlbiBQSUQgaXMgcnVubmluZyAoc2lnbmFsIDAgcHJvYmUpLlxuICpcbiAqIFBJRCBcdTIyNjQgMSByZXR1cm5zIGZhbHNlICgwIGlzIGN1cnJlbnQgcHJvY2VzcyBncm91cCwgMSBpcyBpbml0KS5cbiAqXG4gKiBOb3RlOiBgcHJvY2Vzcy5raWxsKHBpZCwgMClgIHRocm93cyBFUEVSTSB3aGVuIHRoZSBwcm9jZXNzIGV4aXN0cyBidXQgaXNcbiAqIG93bmVkIGJ5IGFub3RoZXIgdXNlci4gVGhpcyByZXBvcnRzIHN1Y2ggcHJvY2Vzc2VzIGFzIE5PVCBydW5uaW5nLCB3aGljaFxuICogaXMgY29uc2VydmF0aXZlIGZvciBsb2NrIHJlY292ZXJ5ICh3ZSB3b24ndCBzdGVhbCBhIGxpdmUgbG9jaykuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb2Nlc3NSdW5uaW5nKHBpZDogbnVtYmVyKTogYm9vbGVhbiB7XG4gIGlmIChwaWQgPD0gMSkgcmV0dXJuIGZhbHNlXG4gIHRyeSB7XG4gICAgcHJvY2Vzcy5raWxsKHBpZCwgMClcbiAgICByZXR1cm4gdHJ1ZVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vKipcbiAqIEdldHMgdGhlIGFuY2VzdG9yIHByb2Nlc3MgY2hhaW4gZm9yIGEgZ2l2ZW4gcHJvY2VzcyAodXAgdG8gbWF4RGVwdGggbGV2ZWxzKVxuICogQHBhcmFtIHBpZCAtIFRoZSBzdGFydGluZyBwcm9jZXNzIElEXG4gKiBAcGFyYW0gbWF4RGVwdGggLSBNYXhpbXVtIG51bWJlciBvZiBhbmNlc3RvcnMgdG8gZmV0Y2ggKGRlZmF1bHQ6IDEwKVxuICogQHJldHVybnMgQXJyYXkgb2YgYW5jZXN0b3IgUElEcyBmcm9tIGltbWVkaWF0ZSBwYXJlbnQgdG8gZnVydGhlc3QgYW5jZXN0b3JcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFuY2VzdG9yUGlkc0FzeW5jKFxuICBwaWQ6IHN0cmluZyB8IG51bWJlcixcbiAgbWF4RGVwdGggPSAxMCxcbik6IFByb21pc2U8bnVtYmVyW10+IHtcbiAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpIHtcbiAgICAvLyBGb3IgV2luZG93cywgdXNlIGEgUG93ZXJTaGVsbCBzY3JpcHQgdGhhdCB3YWxrcyB0aGUgcHJvY2VzcyB0cmVlXG4gICAgY29uc3Qgc2NyaXB0ID0gYFxuICAgICAgJHBpZCA9ICR7U3RyaW5nKHBpZCl9XG4gICAgICAkYW5jZXN0b3JzID0gQCgpXG4gICAgICBmb3IgKCRpID0gMDsgJGkgLWx0ICR7bWF4RGVwdGh9OyAkaSsrKSB7XG4gICAgICAgICRwcm9jID0gR2V0LUNpbUluc3RhbmNlIFdpbjMyX1Byb2Nlc3MgLUZpbHRlciBcIlByb2Nlc3NJZD0kcGlkXCIgLUVycm9yQWN0aW9uIFNpbGVudGx5Q29udGludWVcbiAgICAgICAgaWYgKC1ub3QgJHByb2MgLW9yIC1ub3QgJHByb2MuUGFyZW50UHJvY2Vzc0lkIC1vciAkcHJvYy5QYXJlbnRQcm9jZXNzSWQgLWVxIDApIHsgYnJlYWsgfVxuICAgICAgICAkcGlkID0gJHByb2MuUGFyZW50UHJvY2Vzc0lkXG4gICAgICAgICRhbmNlc3RvcnMgKz0gJHBpZFxuICAgICAgfVxuICAgICAgJGFuY2VzdG9ycyAtam9pbiAnLCdcbiAgICBgLnRyaW0oKVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZXhlY0ZpbGVOb1Rocm93V2l0aEN3ZChcbiAgICAgICdwb3dlcnNoZWxsLmV4ZScsXG4gICAgICBbJy1Ob1Byb2ZpbGUnLCAnLUNvbW1hbmQnLCBzY3JpcHRdLFxuICAgICAgeyB0aW1lb3V0OiAzMDAwIH0sXG4gICAgKVxuICAgIGlmIChyZXN1bHQuY29kZSAhPT0gMCB8fCAhcmVzdWx0LnN0ZG91dD8udHJpbSgpKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdC5zdGRvdXRcbiAgICAgIC50cmltKClcbiAgICAgIC5zcGxpdCgnLCcpXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAubWFwKHAgPT4gcGFyc2VJbnQocCwgMTApKVxuICAgICAgLmZpbHRlcihwID0+ICFpc05hTihwKSlcbiAgfVxuXG4gIC8vIEZvciBVbml4LCB1c2UgYSBzaGVsbCBjb21tYW5kIHRoYXQgd2Fsa3MgdXAgdGhlIHByb2Nlc3MgdHJlZVxuICAvLyBUaGlzIHVzZXMgYSBzaW5nbGUgcHJvY2VzcyBpbnZvY2F0aW9uIGluc3RlYWQgb2YgbXVsdGlwbGUgc2VxdWVudGlhbCBjYWxsc1xuICBjb25zdCBzY3JpcHQgPSBgcGlkPSR7U3RyaW5nKHBpZCl9OyBmb3IgaSBpbiAkKHNlcSAxICR7bWF4RGVwdGh9KTsgZG8gcHBpZD0kKHBzIC1vIHBwaWQ9IC1wICRwaWQgMj4vZGV2L251bGwgfCB0ciAtZCAnICcpOyBpZiBbIC16IFwiJHBwaWRcIiBdIHx8IFsgXCIkcHBpZFwiID0gXCIwXCIgXSB8fCBbIFwiJHBwaWRcIiA9IFwiMVwiIF07IHRoZW4gYnJlYWs7IGZpOyBlY2hvICRwcGlkOyBwaWQ9JHBwaWQ7IGRvbmVgXG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZXhlY0ZpbGVOb1Rocm93V2l0aEN3ZCgnc2gnLCBbJy1jJywgc2NyaXB0XSwge1xuICAgIHRpbWVvdXQ6IDMwMDAsXG4gIH0pXG4gIGlmIChyZXN1bHQuY29kZSAhPT0gMCB8fCAhcmVzdWx0LnN0ZG91dD8udHJpbSgpKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgcmV0dXJuIHJlc3VsdC5zdGRvdXRcbiAgICAudHJpbSgpXG4gICAgLnNwbGl0KCdcXG4nKVxuICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAubWFwKHAgPT4gcGFyc2VJbnQocCwgMTApKVxuICAgIC5maWx0ZXIocCA9PiAhaXNOYU4ocCkpXG59XG5cbi8qKlxuICogR2V0cyB0aGUgY29tbWFuZCBsaW5lIGZvciBhIGdpdmVuIHByb2Nlc3NcbiAqIEBwYXJhbSBwaWQgLSBUaGUgcHJvY2VzcyBJRCB0byBnZXQgdGhlIGNvbW1hbmQgZm9yXG4gKiBAcmV0dXJucyBUaGUgY29tbWFuZCBsaW5lIHN0cmluZywgb3IgbnVsbCBpZiBub3QgZm91bmRcbiAqIEBkZXByZWNhdGVkIFVzZSBnZXRBbmNlc3RvckNvbW1hbmRzQXN5bmMgaW5zdGVhZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvY2Vzc0NvbW1hbmQocGlkOiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudWxsIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwaWRTdHIgPSBTdHJpbmcocGlkKVxuICAgIGNvbnN0IGNvbW1hbmQgPVxuICAgICAgcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJ1xuICAgICAgICA/IGBwb3dlcnNoZWxsLmV4ZSAtTm9Qcm9maWxlIC1Db21tYW5kIFwiKEdldC1DaW1JbnN0YW5jZSBXaW4zMl9Qcm9jZXNzIC1GaWx0ZXIgXFxcXFwiUHJvY2Vzc0lkPSR7cGlkU3RyfVxcXFxcIikuQ29tbWFuZExpbmVcImBcbiAgICAgICAgOiBgcHMgLW8gY29tbWFuZD0gLXAgJHtwaWRTdHJ9YFxuXG4gICAgY29uc3QgcmVzdWx0ID0gZXhlY1N5bmNXaXRoRGVmYXVsdHNfREVQUkVDQVRFRChjb21tYW5kLCB7IHRpbWVvdXQ6IDEwMDAgfSlcbiAgICByZXR1cm4gcmVzdWx0ID8gcmVzdWx0LnRyaW0oKSA6IG51bGxcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG4vKipcbiAqIEdldHMgdGhlIGNvbW1hbmQgbGluZXMgZm9yIGEgcHJvY2VzcyBhbmQgaXRzIGFuY2VzdG9ycyBpbiBhIHNpbmdsZSBjYWxsXG4gKiBAcGFyYW0gcGlkIC0gVGhlIHN0YXJ0aW5nIHByb2Nlc3MgSURcbiAqIEBwYXJhbSBtYXhEZXB0aCAtIE1heGltdW0gZGVwdGggdG8gdHJhdmVyc2UgKGRlZmF1bHQ6IDEwKVxuICogQHJldHVybnMgQXJyYXkgb2YgY29tbWFuZCBzdHJpbmdzIGZvciB0aGUgcHJvY2VzcyBjaGFpblxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QW5jZXN0b3JDb21tYW5kc0FzeW5jKFxuICBwaWQ6IHN0cmluZyB8IG51bWJlcixcbiAgbWF4RGVwdGggPSAxMCxcbik6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpIHtcbiAgICAvLyBGb3IgV2luZG93cywgdXNlIGEgUG93ZXJTaGVsbCBzY3JpcHQgdGhhdCB3YWxrcyB0aGUgcHJvY2VzcyB0cmVlIGFuZCBjb2xsZWN0cyBjb21tYW5kc1xuICAgIGNvbnN0IHNjcmlwdCA9IGBcbiAgICAgICRjdXJyZW50UGlkID0gJHtTdHJpbmcocGlkKX1cbiAgICAgICRjb21tYW5kcyA9IEAoKVxuICAgICAgZm9yICgkaSA9IDA7ICRpIC1sdCAke21heERlcHRofTsgJGkrKykge1xuICAgICAgICAkcHJvYyA9IEdldC1DaW1JbnN0YW5jZSBXaW4zMl9Qcm9jZXNzIC1GaWx0ZXIgXCJQcm9jZXNzSWQ9JGN1cnJlbnRQaWRcIiAtRXJyb3JBY3Rpb24gU2lsZW50bHlDb250aW51ZVxuICAgICAgICBpZiAoLW5vdCAkcHJvYykgeyBicmVhayB9XG4gICAgICAgIGlmICgkcHJvYy5Db21tYW5kTGluZSkgeyAkY29tbWFuZHMgKz0gJHByb2MuQ29tbWFuZExpbmUgfVxuICAgICAgICBpZiAoLW5vdCAkcHJvYy5QYXJlbnRQcm9jZXNzSWQgLW9yICRwcm9jLlBhcmVudFByb2Nlc3NJZCAtZXEgMCkgeyBicmVhayB9XG4gICAgICAgICRjdXJyZW50UGlkID0gJHByb2MuUGFyZW50UHJvY2Vzc0lkXG4gICAgICB9XG4gICAgICAkY29tbWFuZHMgLWpvaW4gW2NoYXJdMFxuICAgIGAudHJpbSgpXG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBleGVjRmlsZU5vVGhyb3dXaXRoQ3dkKFxuICAgICAgJ3Bvd2Vyc2hlbGwuZXhlJyxcbiAgICAgIFsnLU5vUHJvZmlsZScsICctQ29tbWFuZCcsIHNjcmlwdF0sXG4gICAgICB7IHRpbWVvdXQ6IDMwMDAgfSxcbiAgICApXG4gICAgaWYgKHJlc3VsdC5jb2RlICE9PSAwIHx8ICFyZXN1bHQuc3Rkb3V0Py50cmltKCkpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0LnN0ZG91dC5zcGxpdCgnXFwwJykuZmlsdGVyKEJvb2xlYW4pXG4gIH1cblxuICAvLyBGb3IgVW5peCwgdXNlIGEgc2hlbGwgY29tbWFuZCB0aGF0IHdhbGtzIHVwIHRoZSBwcm9jZXNzIHRyZWUgYW5kIGNvbGxlY3RzIGNvbW1hbmRzXG4gIC8vIFVzaW5nIG51bGwgYnl0ZSBhcyBzZXBhcmF0b3IgdG8gaGFuZGxlIGNvbW1hbmRzIHdpdGggbmV3bGluZXNcbiAgY29uc3Qgc2NyaXB0ID0gYGN1cnJlbnRwaWQ9JHtTdHJpbmcocGlkKX07IGZvciBpIGluICQoc2VxIDEgJHttYXhEZXB0aH0pOyBkbyBjbWQ9JChwcyAtbyBjb21tYW5kPSAtcCAkY3VycmVudHBpZCAyPi9kZXYvbnVsbCk7IGlmIFsgLW4gXCIkY21kXCIgXTsgdGhlbiBwcmludGYgJyVzXFxcXDAnIFwiJGNtZFwiOyBmaTsgcHBpZD0kKHBzIC1vIHBwaWQ9IC1wICRjdXJyZW50cGlkIDI+L2Rldi9udWxsIHwgdHIgLWQgJyAnKTsgaWYgWyAteiBcIiRwcGlkXCIgXSB8fCBbIFwiJHBwaWRcIiA9IFwiMFwiIF0gfHwgWyBcIiRwcGlkXCIgPSBcIjFcIiBdOyB0aGVuIGJyZWFrOyBmaTsgY3VycmVudHBpZD0kcHBpZDsgZG9uZWBcblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBleGVjRmlsZU5vVGhyb3dXaXRoQ3dkKCdzaCcsIFsnLWMnLCBzY3JpcHRdLCB7XG4gICAgdGltZW91dDogMzAwMCxcbiAgfSlcbiAgaWYgKHJlc3VsdC5jb2RlICE9PSAwIHx8ICFyZXN1bHQuc3Rkb3V0Py50cmltKCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICByZXR1cm4gcmVzdWx0LnN0ZG91dC5zcGxpdCgnXFwwJykuZmlsdGVyKEJvb2xlYW4pXG59XG5cbi8qKlxuICogR2V0cyB0aGUgY2hpbGQgcHJvY2VzcyBJRHMgZm9yIGEgZ2l2ZW4gcHJvY2Vzc1xuICogQHBhcmFtIHBpZCAtIFRoZSBwYXJlbnQgcHJvY2VzcyBJRFxuICogQHJldHVybnMgQXJyYXkgb2YgY2hpbGQgcHJvY2VzcyBJRHMgYXMgbnVtYmVyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hpbGRQaWRzKHBpZDogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyW10ge1xuICB0cnkge1xuICAgIGNvbnN0IHBpZFN0ciA9IFN0cmluZyhwaWQpXG4gICAgY29uc3QgY29tbWFuZCA9XG4gICAgICBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInXG4gICAgICAgID8gYHBvd2Vyc2hlbGwuZXhlIC1Ob1Byb2ZpbGUgLUNvbW1hbmQgXCIoR2V0LUNpbUluc3RhbmNlIFdpbjMyX1Byb2Nlc3MgLUZpbHRlciBcXFxcXCJQYXJlbnRQcm9jZXNzSWQ9JHtwaWRTdHJ9XFxcXFwiKS5Qcm9jZXNzSWRcImBcbiAgICAgICAgOiBgcGdyZXAgLVAgJHtwaWRTdHJ9YFxuXG4gICAgY29uc3QgcmVzdWx0ID0gZXhlY1N5bmNXaXRoRGVmYXVsdHNfREVQUkVDQVRFRChjb21tYW5kLCB7IHRpbWVvdXQ6IDEwMDAgfSlcbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgICAgIC50cmltKClcbiAgICAgIC5zcGxpdCgnXFxuJylcbiAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgIC5tYXAocCA9PiBwYXJzZUludChwLCAxMCkpXG4gICAgICAuZmlsdGVyKHAgPT4gIWlzTmFOKHApKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gW11cbiAgfVxufVxuIiwgImltcG9ydCB7IGZlYXR1cmUgfSBmcm9tICdidW46YnVuZGxlJ1xuaW1wb3J0IHsgc3RhdCB9IGZyb20gJ2ZzL3Byb21pc2VzJ1xuaW1wb3J0IG1lbW9pemUgZnJvbSAnbG9kYXNoLWVzL21lbW9pemUuanMnXG5pbXBvcnQgeyBlbnYsIEpFVEJSQUlOU19JREVTIH0gZnJvbSAnLi9lbnYuanMnXG5pbXBvcnQgeyBpc0VudlRydXRoeSB9IGZyb20gJy4vZW52VXRpbHMuanMnXG5pbXBvcnQgeyBleGVjRmlsZU5vVGhyb3cgfSBmcm9tICcuL2V4ZWNGaWxlTm9UaHJvdy5qcydcbmltcG9ydCB7IGdldEFuY2VzdG9yQ29tbWFuZHNBc3luYyB9IGZyb20gJy4vZ2VuZXJpY1Byb2Nlc3NVdGlscy5qcydcblxuLy8gRnVuY3Rpb25zIHRoYXQgcmVxdWlyZSBleGVjRmlsZU5vVGhyb3cgYW5kIHRodXMgY2Fubm90IGJlIGluIGVudi50c1xuXG5jb25zdCBnZXRJc0RvY2tlciA9IG1lbW9pemUoYXN5bmMgKCk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ2xpbnV4JykgcmV0dXJuIGZhbHNlXG4gIC8vIENoZWNrIGZvciAuZG9ja2VyZW52IGZpbGVcbiAgY29uc3QgeyBjb2RlIH0gPSBhd2FpdCBleGVjRmlsZU5vVGhyb3coJ3Rlc3QnLCBbJy1mJywgJy8uZG9ja2VyZW52J10pXG4gIHJldHVybiBjb2RlID09PSAwXG59KVxuXG5mdW5jdGlvbiBnZXRJc0J1YmJsZXdyYXBTYW5kYm94KCk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIHByb2Nlc3MucGxhdGZvcm0gPT09ICdsaW51eCcgJiZcbiAgICBpc0VudlRydXRoeShwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9CVUJCTEVXUkFQKVxuICApXG59XG5cbi8vIENhY2hlIGZvciB0aGUgcnVudGltZSBtdXNsIGRldGVjdGlvbiBmYWxsYmFjayAobm9kZS91bmJ1bmRsZWQgb25seSkuXG4vLyBJbiBuYXRpdmUgbGludXggYnVpbGRzLCBmZWF0dXJlIGZsYWdzIHJlc29sdmUgdGhpcyBhdCBjb21waWxlIHRpbWUsIHNvIHRoZVxuLy8gY2FjaGUgaXMgb25seSBjb25zdWx0ZWQgd2hlbiBib3RoIElTX0xJQkNfTVVTTCBhbmQgSVNfTElCQ19HTElCQyBhcmUgZmFsc2UuXG5sZXQgbXVzbFJ1bnRpbWVDYWNoZTogYm9vbGVhbiB8IG51bGwgPSBudWxsXG5cbi8vIEZpcmUtYW5kLWZvcmdldDogcG9wdWxhdGUgdGhlIG11c2wgY2FjaGUgZm9yIHRoZSBub2RlIGZhbGxiYWNrIHBhdGguXG4vLyBOYXRpdmUgYnVpbGRzIG5ldmVyIHJlYWNoIHRoaXMgKGZlYXR1cmUgZmxhZ3Mgc2hvcnQtY2lyY3VpdCksIHNvIHRoaXMgb25seVxuLy8gbWF0dGVycyBmb3IgdW5idW5kbGVkIG5vZGUgb24gTGludXguIEluc3RhbGxlciBjYWxscyBvbiBuYXRpdmUgYnVpbGRzIGFyZVxuLy8gdW5hZmZlY3RlZCBzaW5jZSBmZWF0dXJlKCkgcmVzb2x2ZXMgYXQgY29tcGlsZSB0aW1lLlxuaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICdsaW51eCcpIHtcbiAgY29uc3QgbXVzbEFyY2ggPSBwcm9jZXNzLmFyY2ggPT09ICd4NjQnID8gJ3g4Nl82NCcgOiAnYWFyY2g2NCdcbiAgdm9pZCBzdGF0KGAvbGliL2xpYmMubXVzbC0ke211c2xBcmNofS5zby4xYCkudGhlbihcbiAgICAoKSA9PiB7XG4gICAgICBtdXNsUnVudGltZUNhY2hlID0gdHJ1ZVxuICAgIH0sXG4gICAgKCkgPT4ge1xuICAgICAgbXVzbFJ1bnRpbWVDYWNoZSA9IGZhbHNlXG4gICAgfSxcbiAgKVxufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgc3lzdGVtIGlzIHVzaW5nIE1VU0wgbGliYyBpbnN0ZWFkIG9mIGdsaWJjLlxuICogSW4gbmF0aXZlIGxpbnV4IGJ1aWxkcywgdGhpcyBpcyBzdGF0aWNhbGx5IGtub3duIGF0IGNvbXBpbGUgdGltZSB2aWEgSVNfTElCQ19NVVNML0lTX0xJQkNfR0xJQkMgZmxhZ3MuXG4gKiBJbiBub2RlICh1bmJ1bmRsZWQpLCBib3RoIGZsYWdzIGFyZSBmYWxzZSBhbmQgd2UgZmFsbCBiYWNrIHRvIGEgcnVudGltZSBhc3luYyBzdGF0IGNoZWNrXG4gKiB3aG9zZSByZXN1bHQgaXMgY2FjaGVkIGF0IG1vZHVsZSBsb2FkLiBJZiB0aGUgY2FjaGUgaXNuJ3QgcG9wdWxhdGVkIHlldCwgcmV0dXJucyBmYWxzZS5cbiAqL1xuZnVuY3Rpb24gaXNNdXNsRW52aXJvbm1lbnQoKTogYm9vbGVhbiB7XG4gIGlmIChmZWF0dXJlKCdJU19MSUJDX01VU0wnKSkgcmV0dXJuIHRydWVcbiAgaWYgKGZlYXR1cmUoJ0lTX0xJQkNfR0xJQkMnKSkgcmV0dXJuIGZhbHNlXG5cbiAgLy8gRmFsbGJhY2sgZm9yIG5vZGU6IHJ1bnRpbWUgZGV0ZWN0aW9uIHZpYSBwcmUtcG9wdWxhdGVkIGNhY2hlXG4gIGlmIChwcm9jZXNzLnBsYXRmb3JtICE9PSAnbGludXgnKSByZXR1cm4gZmFsc2VcbiAgcmV0dXJuIG11c2xSdW50aW1lQ2FjaGUgPz8gZmFsc2Vcbn1cblxuLy8gQ2FjaGUgZm9yIGFzeW5jIEpldEJyYWlucyBkZXRlY3Rpb25cbmxldCBqZXRCcmFpbnNJREVDYWNoZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZFxuXG5hc3luYyBmdW5jdGlvbiBkZXRlY3RKZXRCcmFpbnNJREVGcm9tUGFyZW50UHJvY2Vzc0FzeW5jKCk6IFByb21pc2U8XG4gIHN0cmluZyB8IG51bGxcbj4ge1xuICBpZiAoamV0QnJhaW5zSURFQ2FjaGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBqZXRCcmFpbnNJREVDYWNoZVxuICB9XG5cbiAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICdkYXJ3aW4nKSB7XG4gICAgamV0QnJhaW5zSURFQ2FjaGUgPSBudWxsXG4gICAgcmV0dXJuIG51bGwgLy8gbWFjT1MgdXNlcyBidW5kbGUgSUQgZGV0ZWN0aW9uIHdoaWNoIGlzIGFscmVhZHkgaGFuZGxlZFxuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBHZXQgYW5jZXN0b3IgY29tbWFuZHMgaW4gYSBzaW5nbGUgY2FsbCAoYXZvaWRzIHN5bmMgYmFzaCBpbiBsb29wKVxuICAgIGNvbnN0IGNvbW1hbmRzID0gYXdhaXQgZ2V0QW5jZXN0b3JDb21tYW5kc0FzeW5jKHByb2Nlc3MucGlkLCAxMClcblxuICAgIGZvciAoY29uc3QgY29tbWFuZCBvZiBjb21tYW5kcykge1xuICAgICAgY29uc3QgbG93ZXJDb21tYW5kID0gY29tbWFuZC50b0xvd2VyQ2FzZSgpXG4gICAgICAvLyBDaGVjayBmb3Igc3BlY2lmaWMgSmV0QnJhaW5zIElERXMgaW4gdGhlIGNvbW1hbmQgbGluZVxuICAgICAgZm9yIChjb25zdCBpZGUgb2YgSkVUQlJBSU5TX0lERVMpIHtcbiAgICAgICAgaWYgKGxvd2VyQ29tbWFuZC5pbmNsdWRlcyhpZGUpKSB7XG4gICAgICAgICAgamV0QnJhaW5zSURFQ2FjaGUgPSBpZGVcbiAgICAgICAgICByZXR1cm4gaWRlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2gge1xuICAgIC8vIFNpbGVudGx5IGZhaWwgLSB0aGlzIGlzIGEgYmVzdC1lZmZvcnQgZGV0ZWN0aW9uXG4gIH1cblxuICBqZXRCcmFpbnNJREVDYWNoZSA9IG51bGxcbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRlcm1pbmFsV2l0aEpldEJyYWluc0RldGVjdGlvbkFzeW5jKCk6IFByb21pc2U8XG4gIHN0cmluZyB8IG51bGxcbj4ge1xuICAvLyBDaGVjayBmb3IgSmV0QnJhaW5zIHRlcm1pbmFsIG9uIExpbnV4L1dpbmRvd3NcbiAgaWYgKHByb2Nlc3MuZW52LlRFUk1JTkFMX0VNVUxBVE9SID09PSAnSmV0QnJhaW5zLUplZGlUZXJtJykge1xuICAgIC8vIEZvciBtYWNPUywgYnVuZGxlIElEIGRldGVjdGlvbiBhYm92ZSBhbHJlYWR5IGhhbmRsZXMgSmV0QnJhaW5zIElERXNcbiAgICBpZiAoZW52LnBsYXRmb3JtICE9PSAnZGFyd2luJykge1xuICAgICAgY29uc3Qgc3BlY2lmaWNJREUgPSBhd2FpdCBkZXRlY3RKZXRCcmFpbnNJREVGcm9tUGFyZW50UHJvY2Vzc0FzeW5jKClcbiAgICAgIHJldHVybiBzcGVjaWZpY0lERSB8fCAncHljaGFybSdcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVudi50ZXJtaW5hbFxufVxuXG4vLyBTeW5jaHJvbm91cyB2ZXJzaW9uIHRoYXQgcmV0dXJucyBjYWNoZWQgcmVzdWx0IG9yIGZhbGxzIGJhY2sgdG8gZW52LnRlcm1pbmFsXG4vLyBVc2VkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IC0gY2FsbGVycyBzaG91bGQgbWlncmF0ZSB0byBhc3luYyB2ZXJzaW9uXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGVybWluYWxXaXRoSmV0QnJhaW5zRGV0ZWN0aW9uKCk6IHN0cmluZyB8IG51bGwge1xuICAvLyBDaGVjayBmb3IgSmV0QnJhaW5zIHRlcm1pbmFsIG9uIExpbnV4L1dpbmRvd3NcbiAgaWYgKHByb2Nlc3MuZW52LlRFUk1JTkFMX0VNVUxBVE9SID09PSAnSmV0QnJhaW5zLUplZGlUZXJtJykge1xuICAgIC8vIEZvciBtYWNPUywgYnVuZGxlIElEIGRldGVjdGlvbiBhYm92ZSBhbHJlYWR5IGhhbmRsZXMgSmV0QnJhaW5zIElERXNcbiAgICBpZiAoZW52LnBsYXRmb3JtICE9PSAnZGFyd2luJykge1xuICAgICAgLy8gUmV0dXJuIGNhY2hlZCB2YWx1ZSBpZiBhdmFpbGFibGUsIG90aGVyd2lzZSBmYWxsIGJhY2sgdG8gZ2VuZXJpYyBkZXRlY3Rpb25cbiAgICAgIC8vIFRoZSBhc3luYyB2ZXJzaW9uIHNob3VsZCBiZSBjYWxsZWQgZWFybHkgaW4gYXBwIGluaXRpYWxpemF0aW9uIHRvIHBvcHVsYXRlIGNhY2hlXG4gICAgICBpZiAoamV0QnJhaW5zSURFQ2FjaGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gamV0QnJhaW5zSURFQ2FjaGUgfHwgJ3B5Y2hhcm0nXG4gICAgICB9XG4gICAgICAvLyBGYWxsIGJhY2sgdG8gZ2VuZXJpYyAncHljaGFybScgaWYgY2FjaGUgbm90IHBvcHVsYXRlZCB5ZXRcbiAgICAgIHJldHVybiAncHljaGFybSdcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVudi50ZXJtaW5hbFxufVxuXG4vKipcbiAqIEluaXRpYWxpemUgSmV0QnJhaW5zIElERSBkZXRlY3Rpb24gYXN5bmNocm9ub3VzbHkuXG4gKiBDYWxsIHRoaXMgZWFybHkgaW4gYXBwIGluaXRpYWxpemF0aW9uIHRvIHBvcHVsYXRlIHRoZSBjYWNoZS5cbiAqIEFmdGVyIHRoaXMgcmVzb2x2ZXMsIGdldFRlcm1pbmFsV2l0aEpldEJyYWluc0RldGVjdGlvbigpIHdpbGwgcmV0dXJuIGFjY3VyYXRlIHJlc3VsdHMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0SmV0QnJhaW5zRGV0ZWN0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuVEVSTUlOQUxfRU1VTEFUT1IgPT09ICdKZXRCcmFpbnMtSmVkaVRlcm0nKSB7XG4gICAgYXdhaXQgZGV0ZWN0SmV0QnJhaW5zSURFRnJvbVBhcmVudFByb2Nlc3NBc3luYygpXG4gIH1cbn1cblxuLy8gQ29tYmluZWQgZXhwb3J0IHRoYXQgaW5jbHVkZXMgYWxsIGVudiBwcm9wZXJ0aWVzIHBsdXMgZHluYW1pYyBmdW5jdGlvbnNcbmV4cG9ydCBjb25zdCBlbnZEeW5hbWljID0ge1xuICAuLi5lbnYsIC8vIEluY2x1ZGUgYWxsIHByb3BlcnRpZXMgZnJvbSBlbnZcbiAgdGVybWluYWw6IGdldFRlcm1pbmFsV2l0aEpldEJyYWluc0RldGVjdGlvbigpLFxuICBnZXRJc0RvY2tlcixcbiAgZ2V0SXNCdWJibGV3cmFwU2FuZGJveCxcbiAgaXNNdXNsRW52aXJvbm1lbnQsXG4gIGdldFRlcm1pbmFsV2l0aEpldEJyYWluc0RldGVjdGlvbkFzeW5jLFxuICBpbml0SmV0QnJhaW5zRGV0ZWN0aW9uLFxufVxuIiwgImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IGxvZ0ZvckRlYnVnZ2luZyB9IGZyb20gJy4uLy4uL3V0aWxzL2RlYnVnLmpzJ1xuaW1wb3J0IHsgZXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXJyb3JzLmpzJ1xuXG50eXBlIFJlZ2lzdHJ5U2VydmVyID0ge1xuICBzZXJ2ZXI6IHtcbiAgICByZW1vdGVzPzogQXJyYXk8eyB1cmw6IHN0cmluZyB9PlxuICB9XG59XG5cbnR5cGUgUmVnaXN0cnlSZXNwb25zZSA9IHtcbiAgc2VydmVyczogUmVnaXN0cnlTZXJ2ZXJbXVxufVxuXG4vLyBVUkxzIHN0cmlwcGVkIG9mIHF1ZXJ5IHN0cmluZyBhbmQgdHJhaWxpbmcgc2xhc2ggXHUyMDE0IG1hdGNoZXMgdGhlIG5vcm1hbGl6YXRpb25cbi8vIGRvbmUgYnkgZ2V0TG9nZ2luZ1NhZmVNY3BCYXNlVXJsIHNvIGRpcmVjdCBTZXQuaGFzKCkgbG9va3VwIHdvcmtzLlxubGV0IG9mZmljaWFsVXJsczogU2V0PHN0cmluZz4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWRcblxuZnVuY3Rpb24gbm9ybWFsaXplVXJsKHVybDogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1ID0gbmV3IFVSTCh1cmwpXG4gICAgdS5zZWFyY2ggPSAnJ1xuICAgIHJldHVybiB1LnRvU3RyaW5nKCkucmVwbGFjZSgvXFwvJC8sICcnKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cbn1cblxuLyoqXG4gKiBGaXJlLWFuZC1mb3JnZXQgZmV0Y2ggb2YgdGhlIG9mZmljaWFsIE1DUCByZWdpc3RyeS5cbiAqIFBvcHVsYXRlcyBvZmZpY2lhbFVybHMgZm9yIGlzT2ZmaWNpYWxNY3BVcmwgbG9va3Vwcy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWZldGNoT2ZmaWNpYWxNY3BVcmxzKCk6IFByb21pc2U8dm9pZD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfRElTQUJMRV9OT05FU1NFTlRJQUxfVFJBRkZJQykge1xuICAgIHJldHVyblxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldDxSZWdpc3RyeVJlc3BvbnNlPihcbiAgICAgICdodHRwczovL2FwaS5hbnRocm9waWMuY29tL21jcC1yZWdpc3RyeS92MC9zZXJ2ZXJzP3ZlcnNpb249bGF0ZXN0JnZpc2liaWxpdHk9Y29tbWVyY2lhbCcsXG4gICAgICB7IHRpbWVvdXQ6IDUwMDAgfSxcbiAgICApXG5cbiAgICBjb25zdCB1cmxzID0gbmV3IFNldDxzdHJpbmc+KClcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHJlc3BvbnNlLmRhdGEuc2VydmVycykge1xuICAgICAgZm9yIChjb25zdCByZW1vdGUgb2YgZW50cnkuc2VydmVyLnJlbW90ZXMgPz8gW10pIHtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVVybChyZW1vdGUudXJsKVxuICAgICAgICBpZiAobm9ybWFsaXplZCkge1xuICAgICAgICAgIHVybHMuYWRkKG5vcm1hbGl6ZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgb2ZmaWNpYWxVcmxzID0gdXJsc1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhgW21jcC1yZWdpc3RyeV0gTG9hZGVkICR7dXJscy5zaXplfSBvZmZpY2lhbCBNQ1AgVVJMc2ApXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKGBGYWlsZWQgdG8gZmV0Y2ggTUNQIHJlZ2lzdHJ5OiAke2Vycm9yTWVzc2FnZShlcnJvcil9YCwge1xuICAgICAgbGV2ZWw6ICdlcnJvcicsXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZmYgdGhlIGdpdmVuIChhbHJlYWR5LW5vcm1hbGl6ZWQgdmlhIGdldExvZ2dpbmdTYWZlTWNwQmFzZVVybClcbiAqIFVSTCBpcyBpbiB0aGUgb2ZmaWNpYWwgTUNQIHJlZ2lzdHJ5LiBVbmRlZmluZWQgcmVnaXN0cnkgXHUyMTkyIGZhbHNlIChmYWlsLWNsb3NlZCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09mZmljaWFsTWNwVXJsKG5vcm1hbGl6ZWRVcmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gb2ZmaWNpYWxVcmxzPy5oYXMobm9ybWFsaXplZFVybCkgPz8gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0T2ZmaWNpYWxNY3BVcmxzRm9yVGVzdGluZygpOiB2b2lkIHtcbiAgb2ZmaWNpYWxVcmxzID0gdW5kZWZpbmVkXG59XG4iLCAiaW1wb3J0IHsgZ2V0RmVhdHVyZVZhbHVlX0NBQ0hFRF9NQVlfQkVfU1RBTEUgfSBmcm9tICcuLi9zZXJ2aWNlcy9hbmFseXRpY3MvZ3Jvd3RoYm9vay5qcydcbmltcG9ydCB7IGlzRW52VHJ1dGh5IH0gZnJvbSAnLi9lbnZVdGlscy5qcydcblxuLyoqXG4gKiBDaGVjayBpZiAtLWFnZW50LXRlYW1zIGZsYWcgaXMgcHJvdmlkZWQgdmlhIENMSS5cbiAqIENoZWNrcyBwcm9jZXNzLmFyZ3YgZGlyZWN0bHkgdG8gYXZvaWQgaW1wb3J0IGN5Y2xlcyB3aXRoIGJvb3RzdHJhcC9zdGF0ZS5cbiAqIE5vdGU6IFRoZSBmbGFnIGlzIG9ubHkgc2hvd24gaW4gaGVscCBmb3IgYW50IHVzZXJzLCBidXQgaWYgZXh0ZXJuYWwgdXNlcnNcbiAqIHBhc3MgaXQgYW55d2F5LCBpdCB3aWxsIHdvcmsgKHN1YmplY3QgdG8gdGhlIGtpbGxzd2l0Y2gpLlxuICovXG5mdW5jdGlvbiBpc0FnZW50VGVhbXNGbGFnU2V0KCk6IGJvb2xlYW4ge1xuICByZXR1cm4gcHJvY2Vzcy5hcmd2LmluY2x1ZGVzKCctLWFnZW50LXRlYW1zJylcbn1cblxuLyoqXG4gKiBDZW50cmFsaXplZCBydW50aW1lIGNoZWNrIGZvciBhZ2VudCB0ZWFtcy90ZWFtbWF0ZSBmZWF0dXJlcy5cbiAqIFRoaXMgaXMgdGhlIHNpbmdsZSBnYXRlIHRoYXQgc2hvdWxkIGJlIGNoZWNrZWQgZXZlcnl3aGVyZSB0ZWFtbWF0ZXNcbiAqIGFyZSByZWZlcmVuY2VkIChwcm9tcHRzLCBjb2RlLCB0b29scyBpc0VuYWJsZWQsIFVJLCBldGMuKS5cbiAqXG4gKiBBbnQgYnVpbGRzOiBhbHdheXMgZW5hYmxlZC5cbiAqIEV4dGVybmFsIGJ1aWxkcyByZXF1aXJlIGJvdGg6XG4gKiAxLiBPcHQtaW4gdmlhIENMQVVERV9DT0RFX0VYUEVSSU1FTlRBTF9BR0VOVF9URUFNUyBlbnYgdmFyIE9SIC0tYWdlbnQtdGVhbXMgZmxhZ1xuICogMi4gR3Jvd3RoQm9vayBnYXRlICd0ZW5ndV9hbWJlcl9mbGludCcgZW5hYmxlZCAoa2lsbHN3aXRjaClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQWdlbnRTd2FybXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAvLyBBbnQ6IGFsd2F5cyBvblxuICBpZiAocHJvY2Vzcy5lbnYuVVNFUl9UWVBFID09PSAnYW50Jykge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvLyBFeHRlcm5hbDogcmVxdWlyZSBvcHQtaW4gdmlhIGVudiB2YXIgb3IgLS1hZ2VudC10ZWFtcyBmbGFnXG4gIGlmIChcbiAgICAhaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfRVhQRVJJTUVOVEFMX0FHRU5UX1RFQU1TKSAmJlxuICAgICFpc0FnZW50VGVhbXNGbGFnU2V0KClcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBLaWxsc3dpdGNoIFx1MjAxNCBhbHdheXMgcmVzcGVjdGVkIGZvciBleHRlcm5hbCB1c2Vyc1xuICBpZiAoIWdldEZlYXR1cmVWYWx1ZV9DQUNIRURfTUFZX0JFX1NUQUxFKCd0ZW5ndV9hbWJlcl9mbGludCcsIHRydWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuIiwgIi8qKlxuICogQWdlbnQgY29udGV4dCBmb3IgYW5hbHl0aWNzIGF0dHJpYnV0aW9uIHVzaW5nIEFzeW5jTG9jYWxTdG9yYWdlLlxuICpcbiAqIFRoaXMgbW9kdWxlIHByb3ZpZGVzIGEgd2F5IHRvIHRyYWNrIGFnZW50IGlkZW50aXR5IGFjcm9zcyBhc3luYyBvcGVyYXRpb25zXG4gKiB3aXRob3V0IHBhcmFtZXRlciBkcmlsbGluZy4gU3VwcG9ydHMgdHdvIGFnZW50IHR5cGVzOlxuICpcbiAqIDEuIFN1YmFnZW50cyAoQWdlbnQgdG9vbCk6IFJ1biBpbi1wcm9jZXNzIGZvciBxdWljaywgZGVsZWdhdGVkIHRhc2tzLlxuICogICAgQ29udGV4dDogU3ViYWdlbnRDb250ZXh0IHdpdGggYWdlbnRUeXBlOiAnc3ViYWdlbnQnXG4gKlxuICogMi4gSW4tcHJvY2VzcyB0ZWFtbWF0ZXM6IFBhcnQgb2YgYSBzd2FybSB3aXRoIHRlYW0gY29vcmRpbmF0aW9uLlxuICogICAgQ29udGV4dDogVGVhbW1hdGVBZ2VudENvbnRleHQgd2l0aCBhZ2VudFR5cGU6ICd0ZWFtbWF0ZSdcbiAqXG4gKiBGb3Igc3dhcm0gdGVhbW1hdGVzIGluIHNlcGFyYXRlIHByb2Nlc3NlcyAodG11eC9pVGVybTIpLCB1c2UgZW52aXJvbm1lbnRcbiAqIHZhcmlhYmxlcyBpbnN0ZWFkOiBDTEFVREVfQ09ERV9BR0VOVF9JRCwgQ0xBVURFX0NPREVfUEFSRU5UX1NFU1NJT05fSURcbiAqXG4gKiBXSFkgQXN5bmNMb2NhbFN0b3JhZ2UgKG5vdCBBcHBTdGF0ZSk6XG4gKiBXaGVuIGFnZW50cyBhcmUgYmFja2dyb3VuZGVkIChjdHJsK2IpLCBtdWx0aXBsZSBhZ2VudHMgY2FuIHJ1biBjb25jdXJyZW50bHlcbiAqIGluIHRoZSBzYW1lIHByb2Nlc3MuIEFwcFN0YXRlIGlzIGEgc2luZ2xlIHNoYXJlZCBzdGF0ZSB0aGF0IHdvdWxkIGJlXG4gKiBvdmVyd3JpdHRlbiwgY2F1c2luZyBBZ2VudCBBJ3MgZXZlbnRzIHRvIGluY29ycmVjdGx5IHVzZSBBZ2VudCBCJ3MgY29udGV4dC5cbiAqIEFzeW5jTG9jYWxTdG9yYWdlIGlzb2xhdGVzIGVhY2ggYXN5bmMgZXhlY3V0aW9uIGNoYWluLCBzbyBjb25jdXJyZW50IGFnZW50c1xuICogZG9uJ3QgaW50ZXJmZXJlIHdpdGggZWFjaCBvdGhlci5cbiAqL1xuXG5pbXBvcnQgeyBBc3luY0xvY2FsU3RvcmFnZSB9IGZyb20gJ2FzeW5jX2hvb2tzJ1xuaW1wb3J0IHR5cGUgeyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTIH0gZnJvbSAnLi4vc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHsgaXNBZ2VudFN3YXJtc0VuYWJsZWQgfSBmcm9tICcuL2FnZW50U3dhcm1zRW5hYmxlZC5qcydcblxuLyoqXG4gKiBDb250ZXh0IGZvciBzdWJhZ2VudHMgKEFnZW50IHRvb2wgYWdlbnRzKS5cbiAqIFN1YmFnZW50cyBydW4gaW4tcHJvY2VzcyBmb3IgcXVpY2ssIGRlbGVnYXRlZCB0YXNrcy5cbiAqL1xuZXhwb3J0IHR5cGUgU3ViYWdlbnRDb250ZXh0ID0ge1xuICAvKiogVGhlIHN1YmFnZW50J3MgVVVJRCAoZnJvbSBjcmVhdGVBZ2VudElkKCkpICovXG4gIGFnZW50SWQ6IHN0cmluZ1xuICAvKiogVGhlIHRlYW0gbGVhZCdzIHNlc3Npb24gSUQgKGZyb20gQ0xBVURFX0NPREVfUEFSRU5UX1NFU1NJT05fSUQgZW52IHZhciksIHVuZGVmaW5lZCBmb3IgbWFpbiBSRVBMIHN1YmFnZW50cyAqL1xuICBwYXJlbnRTZXNzaW9uSWQ/OiBzdHJpbmdcbiAgLyoqIEFnZW50IHR5cGUgLSAnc3ViYWdlbnQnIGZvciBBZ2VudCB0b29sIGFnZW50cyAqL1xuICBhZ2VudFR5cGU6ICdzdWJhZ2VudCdcbiAgLyoqIFRoZSBzdWJhZ2VudCdzIHR5cGUgbmFtZSAoZS5nLiwgXCJFeHBsb3JlXCIsIFwiQmFzaFwiLCBcImNvZGUtcmV2aWV3ZXJcIikgKi9cbiAgc3ViYWdlbnROYW1lPzogc3RyaW5nXG4gIC8qKiBXaGV0aGVyIHRoaXMgaXMgYSBidWlsdC1pbiBhZ2VudCAodnMgdXNlci1kZWZpbmVkIGN1c3RvbSBhZ2VudCkgKi9cbiAgaXNCdWlsdEluPzogYm9vbGVhblxuICAvKiogVGhlIHJlcXVlc3RfaWQgaW4gdGhlIGludm9raW5nIGFnZW50IHRoYXQgc3Bhd25lZCBvciByZXN1bWVkIHRoaXMgYWdlbnQuXG4gICAqICBGb3IgbmVzdGVkIHN1YmFnZW50cyB0aGlzIGlzIHRoZSBpbW1lZGlhdGUgaW52b2tlciwgbm90IHRoZSByb290IFx1MjAxNFxuICAgKiAgc2Vzc2lvbl9pZCBhbHJlYWR5IGJ1bmRsZXMgdGhlIHdob2xlIHRyZWUuIFVwZGF0ZWQgb24gZWFjaCByZXN1bWUuICovXG4gIGludm9raW5nUmVxdWVzdElkPzogc3RyaW5nXG4gIC8qKiBXaGV0aGVyIHRoaXMgaW52b2NhdGlvbiBpcyB0aGUgaW5pdGlhbCBzcGF3biBvciBhIHN1YnNlcXVlbnQgcmVzdW1lXG4gICAqICB2aWEgU2VuZE1lc3NhZ2UuIFVuZGVmaW5lZCB3aGVuIGludm9raW5nUmVxdWVzdElkIGlzIGFic2VudC4gKi9cbiAgaW52b2NhdGlvbktpbmQ/OiAnc3Bhd24nIHwgJ3Jlc3VtZSdcbiAgLyoqIE11dGFibGUgZmxhZzogaGFzIHRoaXMgaW52b2NhdGlvbidzIGVkZ2UgYmVlbiBlbWl0dGVkIHRvIHRlbGVtZXRyeSB5ZXQ/XG4gICAqICBSZXNldCB0byBmYWxzZSBvbiBlYWNoIHNwYXduL3Jlc3VtZTsgZmxpcHBlZCB0cnVlIGJ5XG4gICAqICBjb25zdW1lSW52b2tpbmdSZXF1ZXN0SWQoKSBvbiB0aGUgZmlyc3QgdGVybWluYWwgQVBJIGV2ZW50LiAqL1xuICBpbnZvY2F0aW9uRW1pdHRlZD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBDb250ZXh0IGZvciBpbi1wcm9jZXNzIHRlYW1tYXRlcy5cbiAqIFRlYW1tYXRlcyBhcmUgcGFydCBvZiBhIHN3YXJtIGFuZCBoYXZlIHRlYW0gY29vcmRpbmF0aW9uLlxuICovXG5leHBvcnQgdHlwZSBUZWFtbWF0ZUFnZW50Q29udGV4dCA9IHtcbiAgLyoqIEZ1bGwgYWdlbnQgSUQsIGUuZy4sIFwicmVzZWFyY2hlckBteS10ZWFtXCIgKi9cbiAgYWdlbnRJZDogc3RyaW5nXG4gIC8qKiBEaXNwbGF5IG5hbWUsIGUuZy4sIFwicmVzZWFyY2hlclwiICovXG4gIGFnZW50TmFtZTogc3RyaW5nXG4gIC8qKiBUZWFtIG5hbWUgdGhpcyB0ZWFtbWF0ZSBiZWxvbmdzIHRvICovXG4gIHRlYW1OYW1lOiBzdHJpbmdcbiAgLyoqIFVJIGNvbG9yIGFzc2lnbmVkIHRvIHRoaXMgdGVhbW1hdGUgKi9cbiAgYWdlbnRDb2xvcj86IHN0cmluZ1xuICAvKiogV2hldGhlciB0ZWFtbWF0ZSBtdXN0IGVudGVyIHBsYW4gbW9kZSBiZWZvcmUgaW1wbGVtZW50aW5nICovXG4gIHBsYW5Nb2RlUmVxdWlyZWQ6IGJvb2xlYW5cbiAgLyoqIFRoZSB0ZWFtIGxlYWQncyBzZXNzaW9uIElEIGZvciB0cmFuc2NyaXB0IGNvcnJlbGF0aW9uICovXG4gIHBhcmVudFNlc3Npb25JZDogc3RyaW5nXG4gIC8qKiBXaGV0aGVyIHRoaXMgYWdlbnQgaXMgdGhlIHRlYW0gbGVhZCAqL1xuICBpc1RlYW1MZWFkOiBib29sZWFuXG4gIC8qKiBBZ2VudCB0eXBlIC0gJ3RlYW1tYXRlJyBmb3Igc3dhcm0gdGVhbW1hdGVzICovXG4gIGFnZW50VHlwZTogJ3RlYW1tYXRlJ1xuICAvKiogVGhlIHJlcXVlc3RfaWQgaW4gdGhlIGludm9raW5nIGFnZW50IHRoYXQgc3Bhd25lZCBvciByZXN1bWVkIHRoaXNcbiAgICogIHRlYW1tYXRlLiBVbmRlZmluZWQgZm9yIHRlYW1tYXRlcyBzdGFydGVkIG91dHNpZGUgYSB0b29sIGNhbGxcbiAgICogIChlLmcuIHNlc3Npb24gc3RhcnQpLiBVcGRhdGVkIG9uIGVhY2ggcmVzdW1lLiAqL1xuICBpbnZva2luZ1JlcXVlc3RJZD86IHN0cmluZ1xuICAvKiogU2VlIFN1YmFnZW50Q29udGV4dC5pbnZvY2F0aW9uS2luZC4gKi9cbiAgaW52b2NhdGlvbktpbmQ/OiAnc3Bhd24nIHwgJ3Jlc3VtZSdcbiAgLyoqIE11dGFibGUgZmxhZzogc2VlIFN1YmFnZW50Q29udGV4dC5pbnZvY2F0aW9uRW1pdHRlZC4gKi9cbiAgaW52b2NhdGlvbkVtaXR0ZWQ/OiBib29sZWFuXG59XG5cbi8qKlxuICogRGlzY3JpbWluYXRlZCB1bmlvbiBmb3IgYWdlbnQgY29udGV4dC5cbiAqIFVzZSBhZ2VudFR5cGUgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBzdWJhZ2VudCBhbmQgdGVhbW1hdGUgY29udGV4dHMuXG4gKi9cbmV4cG9ydCB0eXBlIEFnZW50Q29udGV4dCA9IFN1YmFnZW50Q29udGV4dCB8IFRlYW1tYXRlQWdlbnRDb250ZXh0XG5cbmNvbnN0IGFnZW50Q29udGV4dFN0b3JhZ2UgPSBuZXcgQXN5bmNMb2NhbFN0b3JhZ2U8QWdlbnRDb250ZXh0PigpXG5cbi8qKlxuICogR2V0IHRoZSBjdXJyZW50IGFnZW50IGNvbnRleHQsIGlmIGFueS5cbiAqIFJldHVybnMgdW5kZWZpbmVkIGlmIG5vdCBydW5uaW5nIHdpdGhpbiBhbiBhZ2VudCBjb250ZXh0IChzdWJhZ2VudCBvciB0ZWFtbWF0ZSkuXG4gKiBVc2UgdHlwZSBndWFyZHMgaXNTdWJhZ2VudENvbnRleHQoKSBvciBpc1RlYW1tYXRlQWdlbnRDb250ZXh0KCkgdG8gbmFycm93IHRoZSB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWdlbnRDb250ZXh0KCk6IEFnZW50Q29udGV4dCB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBhZ2VudENvbnRleHRTdG9yYWdlLmdldFN0b3JlKClcbn1cblxuLyoqXG4gKiBSdW4gYW4gYXN5bmMgZnVuY3Rpb24gd2l0aCB0aGUgZ2l2ZW4gYWdlbnQgY29udGV4dC5cbiAqIEFsbCBhc3luYyBvcGVyYXRpb25zIHdpdGhpbiB0aGUgZnVuY3Rpb24gd2lsbCBoYXZlIGFjY2VzcyB0byB0aGlzIGNvbnRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBydW5XaXRoQWdlbnRDb250ZXh0PFQ+KGNvbnRleHQ6IEFnZW50Q29udGV4dCwgZm46ICgpID0+IFQpOiBUIHtcbiAgcmV0dXJuIGFnZW50Q29udGV4dFN0b3JhZ2UucnVuKGNvbnRleHQsIGZuKVxufVxuXG4vKipcbiAqIFR5cGUgZ3VhcmQgdG8gY2hlY2sgaWYgY29udGV4dCBpcyBhIFN1YmFnZW50Q29udGV4dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3ViYWdlbnRDb250ZXh0KFxuICBjb250ZXh0OiBBZ2VudENvbnRleHQgfCB1bmRlZmluZWQsXG4pOiBjb250ZXh0IGlzIFN1YmFnZW50Q29udGV4dCB7XG4gIHJldHVybiBjb250ZXh0Py5hZ2VudFR5cGUgPT09ICdzdWJhZ2VudCdcbn1cblxuLyoqXG4gKiBUeXBlIGd1YXJkIHRvIGNoZWNrIGlmIGNvbnRleHQgaXMgYSBUZWFtbWF0ZUFnZW50Q29udGV4dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVGVhbW1hdGVBZ2VudENvbnRleHQoXG4gIGNvbnRleHQ6IEFnZW50Q29udGV4dCB8IHVuZGVmaW5lZCxcbik6IGNvbnRleHQgaXMgVGVhbW1hdGVBZ2VudENvbnRleHQge1xuICBpZiAoaXNBZ2VudFN3YXJtc0VuYWJsZWQoKSkge1xuICAgIHJldHVybiBjb250ZXh0Py5hZ2VudFR5cGUgPT09ICd0ZWFtbWF0ZSdcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHN1YmFnZW50IG5hbWUgc3VpdGFibGUgZm9yIGFuYWx5dGljcyBsb2dnaW5nLlxuICogUmV0dXJucyB0aGUgYWdlbnQgdHlwZSBuYW1lIGZvciBidWlsdC1pbiBhZ2VudHMsIFwidXNlci1kZWZpbmVkXCIgZm9yIGN1c3RvbSBhZ2VudHMsXG4gKiBvciB1bmRlZmluZWQgaWYgbm90IHJ1bm5pbmcgd2l0aGluIGEgc3ViYWdlbnQgY29udGV4dC5cbiAqXG4gKiBTYWZlIGZvciBhbmFseXRpY3MgbWV0YWRhdGE6IGJ1aWx0LWluIGFnZW50IG5hbWVzIGFyZSBjb2RlIGNvbnN0YW50cyxcbiAqIGFuZCBjdXN0b20gYWdlbnRzIGFyZSBhbHdheXMgbWFwcGVkIHRvIHRoZSBsaXRlcmFsIFwidXNlci1kZWZpbmVkXCIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdWJhZ2VudExvZ05hbWUoKTpcbiAgfCBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTXG4gIHwgdW5kZWZpbmVkIHtcbiAgY29uc3QgY29udGV4dCA9IGdldEFnZW50Q29udGV4dCgpXG4gIGlmICghaXNTdWJhZ2VudENvbnRleHQoY29udGV4dCkgfHwgIWNvbnRleHQuc3ViYWdlbnROYW1lKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG4gIHJldHVybiAoXG4gICAgY29udGV4dC5pc0J1aWx0SW4gPyBjb250ZXh0LnN1YmFnZW50TmFtZSA6ICd1c2VyLWRlZmluZWQnXG4gICkgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIU1xufVxuXG4vKipcbiAqIEdldCB0aGUgaW52b2tpbmcgcmVxdWVzdF9pZCBmb3IgdGhlIGN1cnJlbnQgYWdlbnQgY29udGV4dCBcdTIwMTQgb25jZSBwZXJcbiAqIGludm9jYXRpb24uIFJldHVybnMgdGhlIGlkIG9uIHRoZSBmaXJzdCBjYWxsIGFmdGVyIGEgc3Bhd24vcmVzdW1lLCB0aGVuXG4gKiB1bmRlZmluZWQgdW50aWwgdGhlIG5leHQgYm91bmRhcnkuIEFsc28gdW5kZWZpbmVkIG9uIHRoZSBtYWluIHRocmVhZCBvclxuICogd2hlbiB0aGUgc3Bhd24gcGF0aCBoYWQgbm8gcmVxdWVzdF9pZC5cbiAqXG4gKiBTcGFyc2UgZWRnZSBzZW1hbnRpY3M6IGludm9raW5nUmVxdWVzdElkIGFwcGVhcnMgb24gZXhhY3RseSBvbmVcbiAqIHRlbmd1X2FwaV9zdWNjZXNzL2Vycm9yIHBlciBpbnZvY2F0aW9uLCBzbyBhIG5vbi1OVUxMIHZhbHVlIGRvd25zdHJlYW1cbiAqIG1hcmtzIGEgc3Bhd24vcmVzdW1lIGJvdW5kYXJ5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3VtZUludm9raW5nUmVxdWVzdElkKCk6XG4gIHwge1xuICAgICAgaW52b2tpbmdSZXF1ZXN0SWQ6IHN0cmluZ1xuICAgICAgaW52b2NhdGlvbktpbmQ6ICdzcGF3bicgfCAncmVzdW1lJyB8IHVuZGVmaW5lZFxuICAgIH1cbiAgfCB1bmRlZmluZWQge1xuICBjb25zdCBjb250ZXh0ID0gZ2V0QWdlbnRDb250ZXh0KClcbiAgaWYgKCFjb250ZXh0Py5pbnZva2luZ1JlcXVlc3RJZCB8fCBjb250ZXh0Lmludm9jYXRpb25FbWl0dGVkKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG4gIGNvbnRleHQuaW52b2NhdGlvbkVtaXR0ZWQgPSB0cnVlXG4gIHJldHVybiB7XG4gICAgaW52b2tpbmdSZXF1ZXN0SWQ6IGNvbnRleHQuaW52b2tpbmdSZXF1ZXN0SWQsXG4gICAgaW52b2NhdGlvbktpbmQ6IGNvbnRleHQuaW52b2NhdGlvbktpbmQsXG4gIH1cbn1cbiIsICIvKipcbiAqIFRhZ2dlZCBJRCBlbmNvZGluZyBjb21wYXRpYmxlIHdpdGggdGhlIEFQSSdzIHRhZ2dlZF9pZC5weSBmb3JtYXQuXG4gKlxuICogUHJvZHVjZXMgSURzIGxpa2UgXCJ1c2VyXzAxUGFHVVAycmJnMVhEaDdaOVcxQ0VwZFwiIGZyb20gYSBVVUlEIHN0cmluZy5cbiAqIFRoZSBmb3JtYXQgaXM6IHt0YWd9X3t2ZXJzaW9ufXtiYXNlNTgodXVpZF9hc18xMjhiaXRfaW50KX1cbiAqXG4gKiBUaGlzIG11c3Qgc3RheSBpbiBzeW5jIHdpdGggYXBpL2FwaS9jb21tb24vdXRpbHMvdGFnZ2VkX2lkLnB5LlxuICovXG5cbmNvbnN0IEJBU0VfNThfQ0hBUlMgPVxuICAnMTIzNDU2Nzg5QUJDREVGR0hKS0xNTlBRUlNUVVZXWFlaYWJjZGVmZ2hpamttbm9wcXJzdHV2d3h5eidcbmNvbnN0IFZFUlNJT04gPSAnMDEnXG4vLyBjZWlsKDEyOCAvIGxvZzIoNTgpKSA9IDIyXG5jb25zdCBFTkNPREVEX0xFTkdUSCA9IDIyXG5cbi8qKlxuICogRW5jb2RlIGEgMTI4LWJpdCB1bnNpZ25lZCBpbnRlZ2VyIGFzIGEgZml4ZWQtbGVuZ3RoIGJhc2U1OCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2U1OEVuY29kZShuOiBiaWdpbnQpOiBzdHJpbmcge1xuICBjb25zdCBiYXNlID0gQmlnSW50KEJBU0VfNThfQ0hBUlMubGVuZ3RoKVxuICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8c3RyaW5nPihFTkNPREVEX0xFTkdUSCkuZmlsbChCQVNFXzU4X0NIQVJTWzBdISlcbiAgbGV0IGkgPSBFTkNPREVEX0xFTkdUSCAtIDFcbiAgbGV0IHZhbHVlID0gblxuICB3aGlsZSAodmFsdWUgPiAwbikge1xuICAgIGNvbnN0IHJlbSA9IE51bWJlcih2YWx1ZSAlIGJhc2UpXG4gICAgcmVzdWx0W2ldID0gQkFTRV81OF9DSEFSU1tyZW1dIVxuICAgIHZhbHVlID0gdmFsdWUgLyBiYXNlXG4gICAgaS0tXG4gIH1cbiAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKVxufVxuXG4vKipcbiAqIFBhcnNlIGEgVVVJRCBzdHJpbmcgKHdpdGggb3Igd2l0aG91dCBoeXBoZW5zKSBpbnRvIGEgMTI4LWJpdCBiaWdpbnQuXG4gKi9cbmZ1bmN0aW9uIHV1aWRUb0JpZ0ludCh1dWlkOiBzdHJpbmcpOiBiaWdpbnQge1xuICBjb25zdCBoZXggPSB1dWlkLnJlcGxhY2UoLy0vZywgJycpXG4gIGlmIChoZXgubGVuZ3RoICE9PSAzMikge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBVVUlEIGhleCBsZW5ndGg6ICR7aGV4Lmxlbmd0aH1gKVxuICB9XG4gIHJldHVybiBCaWdJbnQoJzB4JyArIGhleClcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGFuIGFjY291bnQgVVVJRCB0byBhIHRhZ2dlZCBJRCBpbiB0aGUgQVBJJ3MgZm9ybWF0LlxuICpcbiAqIEBwYXJhbSB0YWcgLSBUaGUgdGFnIHByZWZpeCAoZS5nLiBcInVzZXJcIiwgXCJvcmdcIilcbiAqIEBwYXJhbSB1dWlkIC0gQSBVVUlEIHN0cmluZyAod2l0aCBvciB3aXRob3V0IGh5cGhlbnMpXG4gKiBAcmV0dXJucyBUYWdnZWQgSUQgc3RyaW5nIGxpa2UgXCJ1c2VyXzAxUGFHVVAycmJnMVhEaDdaOVcxQ0VwZFwiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b1RhZ2dlZElkKHRhZzogc3RyaW5nLCB1dWlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBuID0gdXVpZFRvQmlnSW50KHV1aWQpXG4gIHJldHVybiBgJHt0YWd9XyR7VkVSU0lPTn0ke2Jhc2U1OEVuY29kZShuKX1gXG59XG4iLCAiaW1wb3J0IHR5cGUgeyBBdHRyaWJ1dGVzIH0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvYXBpJ1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbklkIH0gZnJvbSAnc3JjL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB7IGdldE9hdXRoQWNjb3VudEluZm8gfSBmcm9tICcuL2F1dGguanMnXG5pbXBvcnQgeyBnZXRPckNyZWF0ZVVzZXJJRCB9IGZyb20gJy4vY29uZmlnLmpzJ1xuaW1wb3J0IHsgZW52RHluYW1pYyB9IGZyb20gJy4vZW52RHluYW1pYy5qcydcbmltcG9ydCB7IGlzRW52VHJ1dGh5IH0gZnJvbSAnLi9lbnZVdGlscy5qcydcbmltcG9ydCB7IHRvVGFnZ2VkSWQgfSBmcm9tICcuL3RhZ2dlZElkLmpzJ1xuXG4vLyBEZWZhdWx0IGNvbmZpZ3VyYXRpb24gZm9yIG1ldHJpY3MgY2FyZGluYWxpdHlcbmNvbnN0IE1FVFJJQ1NfQ0FSRElOQUxJVFlfREVGQVVMVFMgPSB7XG4gIE9URUxfTUVUUklDU19JTkNMVURFX1NFU1NJT05fSUQ6IHRydWUsXG4gIE9URUxfTUVUUklDU19JTkNMVURFX1ZFUlNJT046IGZhbHNlLFxuICBPVEVMX01FVFJJQ1NfSU5DTFVERV9BQ0NPVU5UX1VVSUQ6IHRydWUsXG59XG5cbmZ1bmN0aW9uIHNob3VsZEluY2x1ZGVBdHRyaWJ1dGUoXG4gIGVudlZhcjoga2V5b2YgdHlwZW9mIE1FVFJJQ1NfQ0FSRElOQUxJVFlfREVGQVVMVFMsXG4pOiBib29sZWFuIHtcbiAgY29uc3QgZGVmYXVsdFZhbHVlID0gTUVUUklDU19DQVJESU5BTElUWV9ERUZBVUxUU1tlbnZWYXJdXG4gIGNvbnN0IGVudlZhbHVlID0gcHJvY2Vzcy5lbnZbZW52VmFyXVxuXG4gIGlmIChlbnZWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZVxuICB9XG5cbiAgcmV0dXJuIGlzRW52VHJ1dGh5KGVudlZhbHVlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGVsZW1ldHJ5QXR0cmlidXRlcygpOiBBdHRyaWJ1dGVzIHtcbiAgY29uc3QgdXNlcklkID0gZ2V0T3JDcmVhdGVVc2VySUQoKVxuICBjb25zdCBzZXNzaW9uSWQgPSBnZXRTZXNzaW9uSWQoKVxuXG4gIGNvbnN0IGF0dHJpYnV0ZXM6IEF0dHJpYnV0ZXMgPSB7XG4gICAgJ3VzZXIuaWQnOiB1c2VySWQsXG4gIH1cblxuICBpZiAoc2hvdWxkSW5jbHVkZUF0dHJpYnV0ZSgnT1RFTF9NRVRSSUNTX0lOQ0xVREVfU0VTU0lPTl9JRCcpKSB7XG4gICAgYXR0cmlidXRlc1snc2Vzc2lvbi5pZCddID0gc2Vzc2lvbklkXG4gIH1cbiAgaWYgKHNob3VsZEluY2x1ZGVBdHRyaWJ1dGUoJ09URUxfTUVUUklDU19JTkNMVURFX1ZFUlNJT04nKSkge1xuICAgIGF0dHJpYnV0ZXNbJ2FwcC52ZXJzaW9uJ10gPSBNQUNSTy5WRVJTSU9OXG4gIH1cblxuICAvLyBPbmx5IGluY2x1ZGUgT0F1dGggYWNjb3VudCBkYXRhIHdoZW4gYWN0aXZlbHkgdXNpbmcgT0F1dGggYXV0aGVudGljYXRpb25cbiAgY29uc3Qgb2F1dGhBY2NvdW50ID0gZ2V0T2F1dGhBY2NvdW50SW5mbygpXG4gIGlmIChvYXV0aEFjY291bnQpIHtcbiAgICBjb25zdCBvcmdJZCA9IG9hdXRoQWNjb3VudC5vcmdhbml6YXRpb25VdWlkXG4gICAgY29uc3QgZW1haWwgPSBvYXV0aEFjY291bnQuZW1haWxBZGRyZXNzXG4gICAgY29uc3QgYWNjb3VudFV1aWQgPSBvYXV0aEFjY291bnQuYWNjb3VudFV1aWRcblxuICAgIGlmIChvcmdJZCkgYXR0cmlidXRlc1snb3JnYW5pemF0aW9uLmlkJ10gPSBvcmdJZFxuICAgIGlmIChlbWFpbCkgYXR0cmlidXRlc1sndXNlci5lbWFpbCddID0gZW1haWxcblxuICAgIGlmIChcbiAgICAgIGFjY291bnRVdWlkICYmXG4gICAgICBzaG91bGRJbmNsdWRlQXR0cmlidXRlKCdPVEVMX01FVFJJQ1NfSU5DTFVERV9BQ0NPVU5UX1VVSUQnKVxuICAgICkge1xuICAgICAgYXR0cmlidXRlc1sndXNlci5hY2NvdW50X3V1aWQnXSA9IGFjY291bnRVdWlkXG4gICAgICBhdHRyaWJ1dGVzWyd1c2VyLmFjY291bnRfaWQnXSA9XG4gICAgICAgIHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX0FDQ09VTlRfVEFHR0VEX0lEIHx8XG4gICAgICAgIHRvVGFnZ2VkSWQoJ3VzZXInLCBhY2NvdW50VXVpZClcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgdGVybWluYWwgdHlwZSBpZiBhdmFpbGFibGVcbiAgaWYgKGVudkR5bmFtaWMudGVybWluYWwpIHtcbiAgICBhdHRyaWJ1dGVzWyd0ZXJtaW5hbC50eXBlJ10gPSBlbnZEeW5hbWljLnRlcm1pbmFsXG4gIH1cblxuICByZXR1cm4gYXR0cmlidXRlc1xufVxuIiwgImltcG9ydCB0eXBlIHsgQXR0cmlidXRlcyB9IGZyb20gJ0BvcGVudGVsZW1ldHJ5L2FwaSdcbmltcG9ydCB7IGdldEV2ZW50TG9nZ2VyLCBnZXRQcm9tcHRJZCB9IGZyb20gJ3NyYy9ib290c3RyYXAvc3RhdGUuanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuLi9kZWJ1Zy5qcydcbmltcG9ydCB7IGlzRW52VHJ1dGh5IH0gZnJvbSAnLi4vZW52VXRpbHMuanMnXG5pbXBvcnQgeyBnZXRUZWxlbWV0cnlBdHRyaWJ1dGVzIH0gZnJvbSAnLi4vdGVsZW1ldHJ5QXR0cmlidXRlcy5qcydcblxuLy8gTW9ub3RvbmljYWxseSBpbmNyZWFzaW5nIGNvdW50ZXIgZm9yIG9yZGVyaW5nIGV2ZW50cyB3aXRoaW4gYSBzZXNzaW9uXG5sZXQgZXZlbnRTZXF1ZW5jZSA9IDBcblxuLy8gVHJhY2sgd2hldGhlciB3ZSd2ZSBhbHJlYWR5IHdhcm5lZCBhYm91dCBhIG51bGwgZXZlbnQgbG9nZ2VyIHRvIGF2b2lkIHNwYW1taW5nXG5sZXQgaGFzV2FybmVkTm9FdmVudExvZ2dlciA9IGZhbHNlXG5cbmZ1bmN0aW9uIGlzVXNlclByb21wdExvZ2dpbmdFbmFibGVkKCkge1xuICByZXR1cm4gaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuT1RFTF9MT0dfVVNFUl9QUk9NUFRTKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkYWN0SWZEaXNhYmxlZChjb250ZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gaXNVc2VyUHJvbXB0TG9nZ2luZ0VuYWJsZWQoKSA/IGNvbnRlbnQgOiAnPFJFREFDVEVEPidcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ09UZWxFdmVudChcbiAgZXZlbnROYW1lOiBzdHJpbmcsXG4gIG1ldGFkYXRhOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHVuZGVmaW5lZCB9ID0ge30sXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgZXZlbnRMb2dnZXIgPSBnZXRFdmVudExvZ2dlcigpXG4gIGlmICghZXZlbnRMb2dnZXIpIHtcbiAgICBpZiAoIWhhc1dhcm5lZE5vRXZlbnRMb2dnZXIpIHtcbiAgICAgIGhhc1dhcm5lZE5vRXZlbnRMb2dnZXIgPSB0cnVlXG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBbM1AgdGVsZW1ldHJ5XSBFdmVudCBkcm9wcGVkIChubyBldmVudCBsb2dnZXIgaW5pdGlhbGl6ZWQpOiAke2V2ZW50TmFtZX1gLFxuICAgICAgICB7IGxldmVsOiAnd2FybicgfSxcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBTa2lwIGxvZ2dpbmcgaW4gdGVzdCBlbnZpcm9ubWVudFxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0Jykge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgYXR0cmlidXRlczogQXR0cmlidXRlcyA9IHtcbiAgICAuLi5nZXRUZWxlbWV0cnlBdHRyaWJ1dGVzKCksXG4gICAgJ2V2ZW50Lm5hbWUnOiBldmVudE5hbWUsXG4gICAgJ2V2ZW50LnRpbWVzdGFtcCc6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAnZXZlbnQuc2VxdWVuY2UnOiBldmVudFNlcXVlbmNlKyssXG4gIH1cblxuICAvLyBBZGQgcHJvbXB0IElEIHRvIGV2ZW50cyAoYnV0IG5vdCBtZXRyaWNzLCB3aGVyZSBpdCB3b3VsZCBjYXVzZSB1bmJvdW5kZWQgY2FyZGluYWxpdHkpXG4gIGNvbnN0IHByb21wdElkID0gZ2V0UHJvbXB0SWQoKVxuICBpZiAocHJvbXB0SWQpIHtcbiAgICBhdHRyaWJ1dGVzWydwcm9tcHQuaWQnXSA9IHByb21wdElkXG4gIH1cblxuICAvLyBXb3Jrc3BhY2UgZGlyZWN0b3J5IGZyb20gdGhlIGRlc2t0b3AgYXBwIChob3N0IHBhdGgpLiBFdmVudHMgb25seSBcdTIwMTRcbiAgLy8gZmlsZXN5c3RlbSBwYXRocyBhcmUgdG9vIGhpZ2gtY2FyZGluYWxpdHkgZm9yIG1ldHJpYyBkaW1lbnNpb25zLCBhbmRcbiAgLy8gdGhlIEJRIG1ldHJpY3MgcGlwZWxpbmUgbXVzdCBuZXZlciBzZWUgdGhlbS5cbiAgY29uc3Qgd29ya3NwYWNlRGlyID0gcHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfV09SS1NQQUNFX0hPU1RfUEFUSFNcbiAgaWYgKHdvcmtzcGFjZURpcikge1xuICAgIGF0dHJpYnV0ZXNbJ3dvcmtzcGFjZS5ob3N0X3BhdGhzJ10gPSB3b3Jrc3BhY2VEaXIuc3BsaXQoJ3wnKVxuICB9XG5cbiAgLy8gQWRkIG1ldGFkYXRhIGFzIGF0dHJpYnV0ZXMgLSBhbGwgdmFsdWVzIGFyZSBhbHJlYWR5IHN0cmluZ3NcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMobWV0YWRhdGEpKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGF0dHJpYnV0ZXNba2V5XSA9IHZhbHVlXG4gICAgfVxuICB9XG5cbiAgLy8gRW1pdCBsb2cgcmVjb3JkIGFzIGFuIGV2ZW50XG4gIGV2ZW50TG9nZ2VyLmVtaXQoe1xuICAgIGJvZHk6IGBjbGF1ZGVfY29kZS4ke2V2ZW50TmFtZX1gLFxuICAgIGF0dHJpYnV0ZXMsXG4gIH0pXG59XG4iLCAiLyoqXG4gKiBQZXJmZXR0byBUcmFjaW5nIGZvciBDbGF1ZGUgQ29kZSAoQW50LW9ubHkpXG4gKlxuICogVGhpcyBtb2R1bGUgZ2VuZXJhdGVzIHRyYWNlcyBpbiB0aGUgQ2hyb21lIFRyYWNlIEV2ZW50IGZvcm1hdCB0aGF0IGNhbiBiZVxuICogdmlld2VkIGluIHVpLnBlcmZldHRvLmRldiBvciBDaHJvbWUncyBjaHJvbWU6Ly90cmFjaW5nLlxuICpcbiAqIE5PVEU6IFRoaXMgZmVhdHVyZSBpcyBhbnQtb25seSBhbmQgZWxpbWluYXRlZCBmcm9tIGV4dGVybmFsIGJ1aWxkcy5cbiAqXG4gKiBUaGUgdHJhY2UgZmlsZSBpbmNsdWRlczpcbiAqIC0gQWdlbnQgaGllcmFyY2h5IChwYXJlbnQtY2hpbGQgcmVsYXRpb25zaGlwcyBpbiBhIHN3YXJtKVxuICogLSBBUEkgcmVxdWVzdHMgd2l0aCBUVEZULCBUVExULCBwcm9tcHQgbGVuZ3RoLCBjYWNoZSBzdGF0cywgbXNnIElELCBzcGVjdWxhdGl2ZSBmbGFnXG4gKiAtIFRvb2wgZXhlY3V0aW9ucyB3aXRoIG5hbWUsIGR1cmF0aW9uLCBhbmQgdG9rZW4gdXNhZ2VcbiAqIC0gVXNlciBpbnB1dCB3YWl0aW5nIHRpbWVcbiAqXG4gKiBVc2FnZTpcbiAqIDEuIEVuYWJsZSB2aWEgQ0xBVURFX0NPREVfUEVSRkVUVE9fVFJBQ0U9MSBvciBDTEFVREVfQ09ERV9QRVJGRVRUT19UUkFDRT08cGF0aD5cbiAqIDIuIE9wdGlvbmFsbHkgc2V0IENMQVVERV9DT0RFX1BFUkZFVFRPX1dSSVRFX0lOVEVSVkFMX1M9PHBvc2l0aXZlIGludGVnZXI+IHRvIHdyaXRlIHRoZVxuICogICAgdHJhY2UgZmlsZSBwZXJpb2RpY2FsbHkgKGRlZmF1bHQ6IHdyaXRlIG9ubHkgb24gZXhpdCkuXG4gKiAzLiBSdW4gQ2xhdWRlIENvZGUgbm9ybWFsbHlcbiAqIDQuIFRyYWNlIGZpbGUgaXMgd3JpdHRlbiB0byB+Ly5jbGF1ZGUvdHJhY2VzL3RyYWNlLTxzZXNzaW9uLWlkPi5qc29uXG4gKiAgICBvciB0byB0aGUgc3BlY2lmaWVkIHBhdGhcbiAqIDUuIE9wZW4gaW4gdWkucGVyZmV0dG8uZGV2IHRvIHZpc3VhbGl6ZVxuICovXG5cbmltcG9ydCB7IGZlYXR1cmUgfSBmcm9tICdidW46YnVuZGxlJ1xuaW1wb3J0IHsgbWtkaXJTeW5jLCB3cml0ZUZpbGVTeW5jIH0gZnJvbSAnZnMnXG5pbXBvcnQgeyBta2Rpciwgd3JpdGVGaWxlIH0gZnJvbSAnZnMvcHJvbWlzZXMnXG5pbXBvcnQgeyBkaXJuYW1lLCBqb2luIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IGdldFNlc3Npb25JZCB9IGZyb20gJy4uLy4uL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB7IHJlZ2lzdGVyQ2xlYW51cCB9IGZyb20gJy4uL2NsZWFudXBSZWdpc3RyeS5qcydcbmltcG9ydCB7IGxvZ0ZvckRlYnVnZ2luZyB9IGZyb20gJy4uL2RlYnVnLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xhdWRlQ29uZmlnSG9tZURpcixcbiAgaXNFbnZEZWZpbmVkRmFsc3ksXG4gIGlzRW52VHJ1dGh5LFxufSBmcm9tICcuLi9lbnZVdGlscy5qcydcbmltcG9ydCB7IGVycm9yTWVzc2FnZSB9IGZyb20gJy4uL2Vycm9ycy5qcydcbmltcG9ydCB7IGRqYjJIYXNoIH0gZnJvbSAnLi4vaGFzaC5qcydcbmltcG9ydCB7IGpzb25TdHJpbmdpZnkgfSBmcm9tICcuLi9zbG93T3BlcmF0aW9ucy5qcydcbmltcG9ydCB7IGdldEFnZW50SWQsIGdldEFnZW50TmFtZSwgZ2V0UGFyZW50U2Vzc2lvbklkIH0gZnJvbSAnLi4vdGVhbW1hdGUuanMnXG5cbi8qKlxuICogQ2hyb21lIFRyYWNlIEV2ZW50IGZvcm1hdCB0eXBlc1xuICogU2VlOiBodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9kb2N1bWVudC9kLzFDdkFDbHZGZnlBNVItUGhZVW1uNU9PUXRZTUg0aDZJMG5Tc0tjaE5BeVNVXG4gKi9cblxuZXhwb3J0IHR5cGUgVHJhY2VFdmVudFBoYXNlID1cbiAgfCAnQicgLy8gQmVnaW4gZHVyYXRpb24gZXZlbnRcbiAgfCAnRScgLy8gRW5kIGR1cmF0aW9uIGV2ZW50XG4gIHwgJ1gnIC8vIENvbXBsZXRlIGV2ZW50ICh3aXRoIGR1cmF0aW9uKVxuICB8ICdpJyAvLyBJbnN0YW50IGV2ZW50XG4gIHwgJ0MnIC8vIENvdW50ZXIgZXZlbnRcbiAgfCAnYicgLy8gQXN5bmMgYmVnaW5cbiAgfCAnbicgLy8gQXN5bmMgaW5zdGFudFxuICB8ICdlJyAvLyBBc3luYyBlbmRcbiAgfCAnTScgLy8gTWV0YWRhdGEgZXZlbnRcblxuZXhwb3J0IHR5cGUgVHJhY2VFdmVudCA9IHtcbiAgbmFtZTogc3RyaW5nXG4gIGNhdDogc3RyaW5nXG4gIHBoOiBUcmFjZUV2ZW50UGhhc2VcbiAgdHM6IG51bWJlciAvLyBUaW1lc3RhbXAgaW4gbWljcm9zZWNvbmRzXG4gIHBpZDogbnVtYmVyIC8vIFByb2Nlc3MgSUQgKHdlIHVzZSAxIGZvciBtYWluLCBhZ2VudCBJRHMgZm9yIHN1YmFnZW50cylcbiAgdGlkOiBudW1iZXIgLy8gVGhyZWFkIElEICh3ZSB1c2UgbnVtZXJpYyBoYXNoIG9mIGFnZW50IG5hbWUgb3IgMSBmb3IgbWFpbilcbiAgZHVyPzogbnVtYmVyIC8vIER1cmF0aW9uIGluIG1pY3Jvc2Vjb25kcyAoZm9yICdYJyBldmVudHMpXG4gIGFyZ3M/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICBpZD86IHN0cmluZyAvLyBGb3IgYXN5bmMgZXZlbnRzXG4gIHNjb3BlPzogc3RyaW5nXG59XG5cbi8qKlxuICogQWdlbnQgaW5mbyBmb3IgdHJhY2tpbmcgaGllcmFyY2h5XG4gKi9cbnR5cGUgQWdlbnRJbmZvID0ge1xuICBhZ2VudElkOiBzdHJpbmdcbiAgYWdlbnROYW1lOiBzdHJpbmdcbiAgcGFyZW50QWdlbnRJZD86IHN0cmluZ1xuICBwcm9jZXNzSWQ6IG51bWJlclxuICB0aHJlYWRJZDogbnVtYmVyXG59XG5cbi8qKlxuICogUGVuZGluZyBzcGFuIGZvciB0cmFja2luZyBiZWdpbi9lbmQgcGFpcnNcbiAqL1xudHlwZSBQZW5kaW5nU3BhbiA9IHtcbiAgbmFtZTogc3RyaW5nXG4gIGNhdGVnb3J5OiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgYWdlbnRJbmZvOiBBZ2VudEluZm9cbiAgYXJnczogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbn1cblxuLy8gR2xvYmFsIHN0YXRlIGZvciB0aGUgUGVyZmV0dG8gdHJhY2VyXG5sZXQgaXNFbmFibGVkID0gZmFsc2VcbmxldCB0cmFjZVBhdGg6IHN0cmluZyB8IG51bGwgPSBudWxsXG4vLyBNZXRhZGF0YSBldmVudHMgKHBoOiAnTScgXHUyMDE0IHByb2Nlc3MvdGhyZWFkIG5hbWVzLCBwYXJlbnQgbGlua3MpIGFyZSBrZXB0XG4vLyBzZXBhcmF0ZSBzbyB0aGV5IHN1cnZpdmUgZXZpY3Rpb24gXHUyMDE0IFBlcmZldHRvIFVJIG5lZWRzIHRoZW0gdG8gbGFiZWxcbi8vIHRyYWNrcy4gQm91bmRlZCBieSBhZ2VudCBjb3VudCAofjMgZXZlbnRzIHBlciBhZ2VudCkuXG5jb25zdCBtZXRhZGF0YUV2ZW50czogVHJhY2VFdmVudFtdID0gW11cbmNvbnN0IGV2ZW50czogVHJhY2VFdmVudFtdID0gW11cbi8vIGV2ZW50c1tdIGNhcC4gQ3Jvbi1kcml2ZW4gc2Vzc2lvbnMgcnVuIGZvciBkYXlzOyAyMiBwdXNoIHNpdGVzIFx1MDBENyBtYW55XG4vLyB0dXJucyB3b3VsZCBvdGhlcndpc2UgZ3JvdyB1bmJvdW5kZWRseSAocGVyaW9kaWNXcml0ZSBmbHVzaGVzIHRvIGRpc2sgYnV0XG4vLyBkb2VzIG5vdCB0cnVuY2F0ZSBcdTIwMTQgaXQgd3JpdGVzIHRoZSBmdWxsIHNuYXBzaG90KS4gQXQgfjMwMEIvZXZlbnQgdGhpcyBpc1xuLy8gfjMwTUIsIGVub3VnaCB0cmFjZSBoaXN0b3J5IGZvciBhbnkgZGVidWdnaW5nIHNlc3Npb24uIEV2aWN0aW9uIGRyb3BzIHRoZVxuLy8gb2xkZXN0IGhhbGYgd2hlbiBoaXQsIGFtb3J0aXplZCBPKDEpLlxuY29uc3QgTUFYX0VWRU5UUyA9IDEwMF8wMDBcbmNvbnN0IHBlbmRpbmdTcGFucyA9IG5ldyBNYXA8c3RyaW5nLCBQZW5kaW5nU3Bhbj4oKVxuY29uc3QgYWdlbnRSZWdpc3RyeSA9IG5ldyBNYXA8c3RyaW5nLCBBZ2VudEluZm8+KClcbmxldCB0b3RhbEFnZW50Q291bnQgPSAwXG5sZXQgc3RhcnRUaW1lTXMgPSAwXG5sZXQgc3BhbklkQ291bnRlciA9IDBcbmxldCB0cmFjZVdyaXR0ZW4gPSBmYWxzZSAvLyBGbGFnIHRvIGF2b2lkIGRvdWJsZSB3cml0ZXNcblxuLy8gTWFwIGFnZW50IElEcyB0byBudW1lcmljIHByb2Nlc3MgSURzIChQZXJmZXR0byByZXF1aXJlcyBudW1lcmljIElEcylcbmxldCBwcm9jZXNzSWRDb3VudGVyID0gMVxuY29uc3QgYWdlbnRJZFRvUHJvY2Vzc0lkID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKVxuXG4vLyBQZXJpb2RpYyB3cml0ZSBpbnRlcnZhbCBoYW5kbGVcbmxldCB3cml0ZUludGVydmFsSWQ6IFJldHVyblR5cGU8dHlwZW9mIHNldEludGVydmFsPiB8IG51bGwgPSBudWxsXG5cbmNvbnN0IFNUQUxFX1NQQU5fVFRMX01TID0gMzAgKiA2MCAqIDEwMDAgLy8gMzAgbWludXRlc1xuY29uc3QgU1RBTEVfU1BBTl9DTEVBTlVQX0lOVEVSVkFMX01TID0gNjAgKiAxMDAwIC8vIDEgbWludXRlXG5sZXQgc3RhbGVTcGFuQ2xlYW51cElkOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRJbnRlcnZhbD4gfCBudWxsID0gbnVsbFxuXG4vKipcbiAqIENvbnZlcnQgYSBzdHJpbmcgdG8gYSBudW1lcmljIGhhc2ggZm9yIHVzZSBhcyB0aHJlYWQgSURcbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9OdW1lcmljSGFzaChzdHI6IHN0cmluZyk6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLmFicyhkamIySGFzaChzdHIpKSB8fCAxIC8vIEVuc3VyZSBub24temVyb1xufVxuXG4vKipcbiAqIEdldCBvciBjcmVhdGUgYSBudW1lcmljIHByb2Nlc3MgSUQgZm9yIGFuIGFnZW50XG4gKi9cbmZ1bmN0aW9uIGdldFByb2Nlc3NJZEZvckFnZW50KGFnZW50SWQ6IHN0cmluZyk6IG51bWJlciB7XG4gIGNvbnN0IGV4aXN0aW5nID0gYWdlbnRJZFRvUHJvY2Vzc0lkLmdldChhZ2VudElkKVxuICBpZiAoZXhpc3RpbmcgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGV4aXN0aW5nXG5cbiAgcHJvY2Vzc0lkQ291bnRlcisrXG4gIGFnZW50SWRUb1Byb2Nlc3NJZC5zZXQoYWdlbnRJZCwgcHJvY2Vzc0lkQ291bnRlcilcbiAgcmV0dXJuIHByb2Nlc3NJZENvdW50ZXJcbn1cblxuLyoqXG4gKiBHZXQgY3VycmVudCBhZ2VudCBpbmZvXG4gKi9cbmZ1bmN0aW9uIGdldEN1cnJlbnRBZ2VudEluZm8oKTogQWdlbnRJbmZvIHtcbiAgY29uc3QgYWdlbnRJZCA9IGdldEFnZW50SWQoKSA/PyBnZXRTZXNzaW9uSWQoKVxuICBjb25zdCBhZ2VudE5hbWUgPSBnZXRBZ2VudE5hbWUoKSA/PyAnbWFpbidcbiAgY29uc3QgcGFyZW50U2Vzc2lvbklkID0gZ2V0UGFyZW50U2Vzc2lvbklkKClcblxuICAvLyBDaGVjayBpZiB3ZSd2ZSBhbHJlYWR5IHJlZ2lzdGVyZWQgdGhpcyBhZ2VudFxuICBjb25zdCBleGlzdGluZyA9IGFnZW50UmVnaXN0cnkuZ2V0KGFnZW50SWQpXG4gIGlmIChleGlzdGluZykgcmV0dXJuIGV4aXN0aW5nXG5cbiAgY29uc3QgaW5mbzogQWdlbnRJbmZvID0ge1xuICAgIGFnZW50SWQsXG4gICAgYWdlbnROYW1lLFxuICAgIHBhcmVudEFnZW50SWQ6IHBhcmVudFNlc3Npb25JZCxcbiAgICBwcm9jZXNzSWQ6IGFnZW50SWQgPT09IGdldFNlc3Npb25JZCgpID8gMSA6IGdldFByb2Nlc3NJZEZvckFnZW50KGFnZW50SWQpLFxuICAgIHRocmVhZElkOiBzdHJpbmdUb051bWVyaWNIYXNoKGFnZW50TmFtZSksXG4gIH1cblxuICBhZ2VudFJlZ2lzdHJ5LnNldChhZ2VudElkLCBpbmZvKVxuICB0b3RhbEFnZW50Q291bnQrK1xuICByZXR1cm4gaW5mb1xufVxuXG4vKipcbiAqIEdldCB0aW1lc3RhbXAgaW4gbWljcm9zZWNvbmRzIHJlbGF0aXZlIHRvIHRyYWNlIHN0YXJ0XG4gKi9cbmZ1bmN0aW9uIGdldFRpbWVzdGFtcCgpOiBudW1iZXIge1xuICByZXR1cm4gKERhdGUubm93KCkgLSBzdGFydFRpbWVNcykgKiAxMDAwXG59XG5cbi8qKlxuICogR2VuZXJhdGUgYSB1bmlxdWUgc3BhbiBJRFxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZVNwYW5JZCgpOiBzdHJpbmcge1xuICByZXR1cm4gYHNwYW5fJHsrK3NwYW5JZENvdW50ZXJ9YFxufVxuXG4vKipcbiAqIEV2aWN0IHBlbmRpbmcgc3BhbnMgb2xkZXIgdGhhbiBTVEFMRV9TUEFOX1RUTF9NUy5cbiAqIE1pcnJvcnMgdGhlIFRUTCBjbGVhbnVwIHBhdHRlcm4gaW4gc2Vzc2lvblRyYWNpbmcudHMuXG4gKi9cbmZ1bmN0aW9uIGV2aWN0U3RhbGVTcGFucygpOiB2b2lkIHtcbiAgY29uc3Qgbm93ID0gZ2V0VGltZXN0YW1wKClcbiAgY29uc3QgdHRsVXMgPSBTVEFMRV9TUEFOX1RUTF9NUyAqIDEwMDAgLy8gQ29udmVydCBtcyB0byBtaWNyb3NlY29uZHNcbiAgZm9yIChjb25zdCBbc3BhbklkLCBzcGFuXSBvZiBwZW5kaW5nU3BhbnMpIHtcbiAgICBpZiAobm93IC0gc3Bhbi5zdGFydFRpbWUgPiB0dGxVcykge1xuICAgICAgLy8gRW1pdCBhbiBlbmQgZXZlbnQgc28gdGhlIHNwYW4gc2hvd3MgdXAgaW4gdGhlIHRyYWNlIGFzIGluY29tcGxldGVcbiAgICAgIGV2ZW50cy5wdXNoKHtcbiAgICAgICAgbmFtZTogc3Bhbi5uYW1lLFxuICAgICAgICBjYXQ6IHNwYW4uY2F0ZWdvcnksXG4gICAgICAgIHBoOiAnRScsXG4gICAgICAgIHRzOiBub3csXG4gICAgICAgIHBpZDogc3Bhbi5hZ2VudEluZm8ucHJvY2Vzc0lkLFxuICAgICAgICB0aWQ6IHNwYW4uYWdlbnRJbmZvLnRocmVhZElkLFxuICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgLi4uc3Bhbi5hcmdzLFxuICAgICAgICAgIGV2aWN0ZWQ6IHRydWUsXG4gICAgICAgICAgZHVyYXRpb25fbXM6IChub3cgLSBzcGFuLnN0YXJ0VGltZSkgLyAxMDAwLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIHBlbmRpbmdTcGFucy5kZWxldGUoc3BhbklkKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEJ1aWxkIHRoZSBmdWxsIHRyYWNlIGRvY3VtZW50IChDaHJvbWUgVHJhY2UgSlNPTiBmb3JtYXQpLlxuICovXG5mdW5jdGlvbiBidWlsZFRyYWNlRG9jdW1lbnQoKTogc3RyaW5nIHtcbiAgcmV0dXJuIGpzb25TdHJpbmdpZnkoe1xuICAgIHRyYWNlRXZlbnRzOiBbLi4ubWV0YWRhdGFFdmVudHMsIC4uLmV2ZW50c10sXG4gICAgbWV0YWRhdGE6IHtcbiAgICAgIHNlc3Npb25faWQ6IGdldFNlc3Npb25JZCgpLFxuICAgICAgdHJhY2Vfc3RhcnRfdGltZTogbmV3IERhdGUoc3RhcnRUaW1lTXMpLnRvSVNPU3RyaW5nKCksXG4gICAgICBhZ2VudF9jb3VudDogdG90YWxBZ2VudENvdW50LFxuICAgICAgdG90YWxfZXZlbnRfY291bnQ6IG1ldGFkYXRhRXZlbnRzLmxlbmd0aCArIGV2ZW50cy5sZW5ndGgsXG4gICAgfSxcbiAgfSlcbn1cblxuLyoqXG4gKiBEcm9wIHRoZSBvbGRlc3QgaGFsZiBvZiBldmVudHNbXSB3aGVuIG92ZXIgTUFYX0VWRU5UUy4gQ2FsbGVkIGZyb20gdGhlXG4gKiBzdGFsZS1zcGFuIGNsZWFudXAgaW50ZXJ2YWwgKDYwcykuIFRoZSBoYWxmLWJhdGNoIHNwbGljZSBrZWVwcyB0aGlzXG4gKiBhbW9ydGl6ZWQgTygxKSBcdTIwMTQgd2UgZG9uJ3QgcGF5IHNwbGljZSBjb3N0IHBlci1wdXNoLiBBIHN5bnRoZXRpYyBtYXJrZXJcbiAqIGlzIGluc2VydGVkIHNvIHRoZSBnYXAgaXMgdmlzaWJsZSBpbiB1aS5wZXJmZXR0by5kZXYuXG4gKi9cbmZ1bmN0aW9uIGV2aWN0T2xkZXN0RXZlbnRzKCk6IHZvaWQge1xuICBpZiAoZXZlbnRzLmxlbmd0aCA8IE1BWF9FVkVOVFMpIHJldHVyblxuICBjb25zdCBkcm9wcGVkID0gZXZlbnRzLnNwbGljZSgwLCBNQVhfRVZFTlRTIC8gMilcbiAgZXZlbnRzLnVuc2hpZnQoe1xuICAgIG5hbWU6ICd0cmFjZV90cnVuY2F0ZWQnLFxuICAgIGNhdDogJ19fbWV0YWRhdGEnLFxuICAgIHBoOiAnaScsXG4gICAgdHM6IGRyb3BwZWRbZHJvcHBlZC5sZW5ndGggLSAxXT8udHMgPz8gMCxcbiAgICBwaWQ6IDEsXG4gICAgdGlkOiAwLFxuICAgIGFyZ3M6IHsgZHJvcHBlZF9ldmVudHM6IGRyb3BwZWQubGVuZ3RoIH0sXG4gIH0pXG4gIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICBgW1BlcmZldHRvXSBFdmljdGVkICR7ZHJvcHBlZC5sZW5ndGh9IG9sZGVzdCBldmVudHMgKGNhcCAke01BWF9FVkVOVFN9KWAsXG4gIClcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIFBlcmZldHRvIHRyYWNpbmdcbiAqIENhbGwgdGhpcyBlYXJseSBpbiB0aGUgYXBwbGljYXRpb24gbGlmZWN5Y2xlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplUGVyZmV0dG9UcmFjaW5nKCk6IHZvaWQge1xuICBjb25zdCBlbnZWYWx1ZSA9IHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX1BFUkZFVFRPX1RSQUNFXG4gIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICBgW1BlcmZldHRvXSBpbml0aWFsaXplUGVyZmV0dG9UcmFjaW5nIGNhbGxlZCwgZW52IHZhbHVlOiAke2VudlZhbHVlfWAsXG4gIClcblxuICAvLyBXcmFwIGluIGZlYXR1cmUoKSBmb3IgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIC0gZW50aXJlIGJsb2NrIHJlbW92ZWQgZnJvbSBleHRlcm5hbCBidWlsZHNcbiAgaWYgKGZlYXR1cmUoJ1BFUkZFVFRPX1RSQUNJTkcnKSkge1xuICAgIGlmICghZW52VmFsdWUgfHwgaXNFbnZEZWZpbmVkRmFsc3koZW52VmFsdWUpKSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICdbUGVyZmV0dG9dIFRyYWNpbmcgZGlzYWJsZWQgKGVudiB2YXIgbm90IHNldCBvciBkaXNhYmxlZCknLFxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaXNFbmFibGVkID0gdHJ1ZVxuICAgIHN0YXJ0VGltZU1zID0gRGF0ZS5ub3coKVxuXG4gICAgLy8gRGV0ZXJtaW5lIHRyYWNlIGZpbGUgcGF0aFxuICAgIGlmIChpc0VudlRydXRoeShlbnZWYWx1ZSkpIHtcbiAgICAgIGNvbnN0IHRyYWNlc0RpciA9IGpvaW4oZ2V0Q2xhdWRlQ29uZmlnSG9tZURpcigpLCAndHJhY2VzJylcbiAgICAgIHRyYWNlUGF0aCA9IGpvaW4odHJhY2VzRGlyLCBgdHJhY2UtJHtnZXRTZXNzaW9uSWQoKX0uanNvbmApXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFVzZSB0aGUgcHJvdmlkZWQgcGF0aFxuICAgICAgdHJhY2VQYXRoID0gZW52VmFsdWVcbiAgICB9XG5cbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgW1BlcmZldHRvXSBUcmFjaW5nIGVuYWJsZWQsIHdpbGwgd3JpdGUgdG86ICR7dHJhY2VQYXRofSwgaXNFbmFibGVkPSR7aXNFbmFibGVkfWAsXG4gICAgKVxuXG4gICAgLy8gU3RhcnQgcGVyaW9kaWMgZnVsbC10cmFjZSB3cml0ZSBpZiBDTEFVREVfQ09ERV9QRVJGRVRUT19XUklURV9JTlRFUlZBTF9TIGlzIGEgcG9zaXRpdmUgaW50ZWdlclxuICAgIGNvbnN0IGludGVydmFsU2VjID0gcGFyc2VJbnQoXG4gICAgICBwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9QRVJGRVRUT19XUklURV9JTlRFUlZBTF9TID8/ICcnLFxuICAgICAgMTAsXG4gICAgKVxuICAgIGlmIChpbnRlcnZhbFNlYyA+IDApIHtcbiAgICAgIHdyaXRlSW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdm9pZCBwZXJpb2RpY1dyaXRlKClcbiAgICAgIH0sIGludGVydmFsU2VjICogMTAwMClcbiAgICAgIC8vIERvbid0IGxldCB0aGUgaW50ZXJ2YWwga2VlcCB0aGUgcHJvY2VzcyBhbGl2ZSBvbiBpdHMgb3duXG4gICAgICBpZiAod3JpdGVJbnRlcnZhbElkLnVucmVmKSB3cml0ZUludGVydmFsSWQudW5yZWYoKVxuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgW1BlcmZldHRvXSBQZXJpb2RpYyB3cml0ZSBlbmFibGVkLCBpbnRlcnZhbDogJHtpbnRlcnZhbFNlY31zYCxcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBTdGFydCBzdGFsZSBzcGFuIGNsZWFudXAgaW50ZXJ2YWxcbiAgICBzdGFsZVNwYW5DbGVhbnVwSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBldmljdFN0YWxlU3BhbnMoKVxuICAgICAgZXZpY3RPbGRlc3RFdmVudHMoKVxuICAgIH0sIFNUQUxFX1NQQU5fQ0xFQU5VUF9JTlRFUlZBTF9NUylcbiAgICBpZiAoc3RhbGVTcGFuQ2xlYW51cElkLnVucmVmKSBzdGFsZVNwYW5DbGVhbnVwSWQudW5yZWYoKVxuXG4gICAgLy8gUmVnaXN0ZXIgY2xlYW51cCB0byB3cml0ZSBmaW5hbCB0cmFjZSBvbiBleGl0XG4gICAgcmVnaXN0ZXJDbGVhbnVwKGFzeW5jICgpID0+IHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZygnW1BlcmZldHRvXSBDbGVhbnVwIGNhbGxiYWNrIGludm9rZWQnKVxuICAgICAgYXdhaXQgd3JpdGVQZXJmZXR0b1RyYWNlKClcbiAgICB9KVxuXG4gICAgLy8gQWxzbyByZWdpc3RlciBhIGJlZm9yZUV4aXQgaGFuZGxlciBhcyBhIGZhbGxiYWNrXG4gICAgLy8gVGhpcyBlbnN1cmVzIHRoZSB0cmFjZSBpcyB3cml0dGVuIGV2ZW4gaWYgY2xlYW51cCByZWdpc3RyeSBpcyBub3QgY2FsbGVkXG4gICAgcHJvY2Vzcy5vbignYmVmb3JlRXhpdCcsICgpID0+IHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZygnW1BlcmZldHRvXSBiZWZvcmVFeGl0IGhhbmRsZXIgaW52b2tlZCcpXG4gICAgICB2b2lkIHdyaXRlUGVyZmV0dG9UcmFjZSgpXG4gICAgfSlcblxuICAgIC8vIFJlZ2lzdGVyIGEgc3luY2hyb25vdXMgZXhpdCBoYW5kbGVyIGFzIGEgbGFzdCByZXNvcnRcbiAgICAvLyBUaGlzIGlzIHRoZSBmaW5hbCBmYWxsYmFjayB0byBlbnN1cmUgdHJhY2UgaXMgd3JpdHRlbiBiZWZvcmUgcHJvY2VzcyBleGl0c1xuICAgIHByb2Nlc3Mub24oJ2V4aXQnLCAoKSA9PiB7XG4gICAgICBpZiAoIXRyYWNlV3JpdHRlbikge1xuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgJ1tQZXJmZXR0b10gZXhpdCBoYW5kbGVyIGludm9rZWQsIHdyaXRpbmcgdHJhY2Ugc3luY2hyb25vdXNseScsXG4gICAgICAgIClcbiAgICAgICAgd3JpdGVQZXJmZXR0b1RyYWNlU3luYygpXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIEVtaXQgcHJvY2VzcyBtZXRhZGF0YSBldmVudHMgZm9yIG1haW4gcHJvY2Vzc1xuICAgIGNvbnN0IG1haW5BZ2VudCA9IGdldEN1cnJlbnRBZ2VudEluZm8oKVxuICAgIGVtaXRQcm9jZXNzTWV0YWRhdGEobWFpbkFnZW50KVxuICB9XG59XG5cbi8qKlxuICogRW1pdCBtZXRhZGF0YSBldmVudHMgZm9yIGEgcHJvY2Vzcy9hZ2VudFxuICovXG5mdW5jdGlvbiBlbWl0UHJvY2Vzc01ldGFkYXRhKGFnZW50SW5mbzogQWdlbnRJbmZvKTogdm9pZCB7XG4gIGlmICghaXNFbmFibGVkKSByZXR1cm5cblxuICAvLyBQcm9jZXNzIG5hbWVcbiAgbWV0YWRhdGFFdmVudHMucHVzaCh7XG4gICAgbmFtZTogJ3Byb2Nlc3NfbmFtZScsXG4gICAgY2F0OiAnX19tZXRhZGF0YScsXG4gICAgcGg6ICdNJyxcbiAgICB0czogMCxcbiAgICBwaWQ6IGFnZW50SW5mby5wcm9jZXNzSWQsXG4gICAgdGlkOiAwLFxuICAgIGFyZ3M6IHsgbmFtZTogYWdlbnRJbmZvLmFnZW50TmFtZSB9LFxuICB9KVxuXG4gIC8vIFRocmVhZCBuYW1lIChzYW1lIGFzIHByb2Nlc3MgZm9yIG5vdylcbiAgbWV0YWRhdGFFdmVudHMucHVzaCh7XG4gICAgbmFtZTogJ3RocmVhZF9uYW1lJyxcbiAgICBjYXQ6ICdfX21ldGFkYXRhJyxcbiAgICBwaDogJ00nLFxuICAgIHRzOiAwLFxuICAgIHBpZDogYWdlbnRJbmZvLnByb2Nlc3NJZCxcbiAgICB0aWQ6IGFnZW50SW5mby50aHJlYWRJZCxcbiAgICBhcmdzOiB7IG5hbWU6IGFnZW50SW5mby5hZ2VudE5hbWUgfSxcbiAgfSlcblxuICAvLyBBZGQgcGFyZW50IGluZm8gaWYgYXZhaWxhYmxlXG4gIGlmIChhZ2VudEluZm8ucGFyZW50QWdlbnRJZCkge1xuICAgIG1ldGFkYXRhRXZlbnRzLnB1c2goe1xuICAgICAgbmFtZTogJ3BhcmVudF9hZ2VudCcsXG4gICAgICBjYXQ6ICdfX21ldGFkYXRhJyxcbiAgICAgIHBoOiAnTScsXG4gICAgICB0czogMCxcbiAgICAgIHBpZDogYWdlbnRJbmZvLnByb2Nlc3NJZCxcbiAgICAgIHRpZDogMCxcbiAgICAgIGFyZ3M6IHtcbiAgICAgICAgcGFyZW50X2FnZW50X2lkOiBhZ2VudEluZm8ucGFyZW50QWdlbnRJZCxcbiAgICAgIH0sXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIFBlcmZldHRvIHRyYWNpbmcgaXMgZW5hYmxlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQZXJmZXR0b1RyYWNpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNFbmFibGVkXG59XG5cbi8qKlxuICogUmVnaXN0ZXIgYSBuZXcgYWdlbnQgaW4gdGhlIHRyYWNlXG4gKiBDYWxsIHRoaXMgd2hlbiBhIHN1YmFnZW50L3RlYW1tYXRlIGlzIHNwYXduZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQWdlbnQoXG4gIGFnZW50SWQ6IHN0cmluZyxcbiAgYWdlbnROYW1lOiBzdHJpbmcsXG4gIHBhcmVudEFnZW50SWQ/OiBzdHJpbmcsXG4pOiB2b2lkIHtcbiAgaWYgKCFpc0VuYWJsZWQpIHJldHVyblxuXG4gIGNvbnN0IGluZm86IEFnZW50SW5mbyA9IHtcbiAgICBhZ2VudElkLFxuICAgIGFnZW50TmFtZSxcbiAgICBwYXJlbnRBZ2VudElkLFxuICAgIHByb2Nlc3NJZDogZ2V0UHJvY2Vzc0lkRm9yQWdlbnQoYWdlbnRJZCksXG4gICAgdGhyZWFkSWQ6IHN0cmluZ1RvTnVtZXJpY0hhc2goYWdlbnROYW1lKSxcbiAgfVxuXG4gIGFnZW50UmVnaXN0cnkuc2V0KGFnZW50SWQsIGluZm8pXG4gIHRvdGFsQWdlbnRDb3VudCsrXG4gIGVtaXRQcm9jZXNzTWV0YWRhdGEoaW5mbylcbn1cblxuLyoqXG4gKiBVbnJlZ2lzdGVyIGFuIGFnZW50IGZyb20gdGhlIHRyYWNlLlxuICogQ2FsbCB0aGlzIHdoZW4gYW4gYWdlbnQgY29tcGxldGVzLCBmYWlscywgb3IgaXMgYWJvcnRlZCB0byBmcmVlIG1lbW9yeS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVucmVnaXN0ZXJBZ2VudChhZ2VudElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKCFpc0VuYWJsZWQpIHJldHVyblxuICBhZ2VudFJlZ2lzdHJ5LmRlbGV0ZShhZ2VudElkKVxuICBhZ2VudElkVG9Qcm9jZXNzSWQuZGVsZXRlKGFnZW50SWQpXG59XG5cbi8qKlxuICogU3RhcnQgYW4gQVBJIGNhbGwgc3BhblxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRMTE1SZXF1ZXN0UGVyZmV0dG9TcGFuKGFyZ3M6IHtcbiAgbW9kZWw6IHN0cmluZ1xuICBwcm9tcHRUb2tlbnM/OiBudW1iZXJcbiAgbWVzc2FnZUlkPzogc3RyaW5nXG4gIGlzU3BlY3VsYXRpdmU/OiBib29sZWFuXG4gIHF1ZXJ5U291cmNlPzogc3RyaW5nXG59KTogc3RyaW5nIHtcbiAgaWYgKCFpc0VuYWJsZWQpIHJldHVybiAnJ1xuXG4gIGNvbnN0IHNwYW5JZCA9IGdlbmVyYXRlU3BhbklkKClcbiAgY29uc3QgYWdlbnRJbmZvID0gZ2V0Q3VycmVudEFnZW50SW5mbygpXG5cbiAgcGVuZGluZ1NwYW5zLnNldChzcGFuSWQsIHtcbiAgICBuYW1lOiAnQVBJIENhbGwnLFxuICAgIGNhdGVnb3J5OiAnYXBpJyxcbiAgICBzdGFydFRpbWU6IGdldFRpbWVzdGFtcCgpLFxuICAgIGFnZW50SW5mbyxcbiAgICBhcmdzOiB7XG4gICAgICBtb2RlbDogYXJncy5tb2RlbCxcbiAgICAgIHByb21wdF90b2tlbnM6IGFyZ3MucHJvbXB0VG9rZW5zLFxuICAgICAgbWVzc2FnZV9pZDogYXJncy5tZXNzYWdlSWQsXG4gICAgICBpc19zcGVjdWxhdGl2ZTogYXJncy5pc1NwZWN1bGF0aXZlID8/IGZhbHNlLFxuICAgICAgcXVlcnlfc291cmNlOiBhcmdzLnF1ZXJ5U291cmNlLFxuICAgIH0sXG4gIH0pXG5cbiAgLy8gRW1pdCBiZWdpbiBldmVudFxuICBldmVudHMucHVzaCh7XG4gICAgbmFtZTogJ0FQSSBDYWxsJyxcbiAgICBjYXQ6ICdhcGknLFxuICAgIHBoOiAnQicsXG4gICAgdHM6IHBlbmRpbmdTcGFucy5nZXQoc3BhbklkKSEuc3RhcnRUaW1lLFxuICAgIHBpZDogYWdlbnRJbmZvLnByb2Nlc3NJZCxcbiAgICB0aWQ6IGFnZW50SW5mby50aHJlYWRJZCxcbiAgICBhcmdzOiBwZW5kaW5nU3BhbnMuZ2V0KHNwYW5JZCkhLmFyZ3MsXG4gIH0pXG5cbiAgcmV0dXJuIHNwYW5JZFxufVxuXG4vKipcbiAqIEVuZCBhbiBBUEkgY2FsbCBzcGFuIHdpdGggcmVzcG9uc2UgbWV0YWRhdGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuZExMTVJlcXVlc3RQZXJmZXR0b1NwYW4oXG4gIHNwYW5JZDogc3RyaW5nLFxuICBtZXRhZGF0YToge1xuICAgIHR0ZnRNcz86IG51bWJlclxuICAgIHR0bHRNcz86IG51bWJlclxuICAgIHByb21wdFRva2Vucz86IG51bWJlclxuICAgIG91dHB1dFRva2Vucz86IG51bWJlclxuICAgIGNhY2hlUmVhZFRva2Vucz86IG51bWJlclxuICAgIGNhY2hlQ3JlYXRpb25Ub2tlbnM/OiBudW1iZXJcbiAgICBtZXNzYWdlSWQ/OiBzdHJpbmdcbiAgICBzdWNjZXNzPzogYm9vbGVhblxuICAgIGVycm9yPzogc3RyaW5nXG4gICAgLyoqIFRpbWUgc3BlbnQgaW4gcHJlLXJlcXVlc3Qgc2V0dXAgKGNsaWVudCBjcmVhdGlvbiwgcmV0cmllcykgYmVmb3JlIHRoZSBzdWNjZXNzZnVsIGF0dGVtcHQgKi9cbiAgICByZXF1ZXN0U2V0dXBNcz86IG51bWJlclxuICAgIC8qKiBUaW1lc3RhbXBzIChEYXRlLm5vdygpKSBvZiBlYWNoIGF0dGVtcHQgc3RhcnQgXHUyMDE0IHVzZWQgdG8gZW1pdCByZXRyeSBzdWItc3BhbnMgKi9cbiAgICBhdHRlbXB0U3RhcnRUaW1lcz86IG51bWJlcltdXG4gIH0sXG4pOiB2b2lkIHtcbiAgaWYgKCFpc0VuYWJsZWQgfHwgIXNwYW5JZCkgcmV0dXJuXG5cbiAgY29uc3QgcGVuZGluZyA9IHBlbmRpbmdTcGFucy5nZXQoc3BhbklkKVxuICBpZiAoIXBlbmRpbmcpIHJldHVyblxuXG4gIGNvbnN0IGVuZFRpbWUgPSBnZXRUaW1lc3RhbXAoKVxuICBjb25zdCBkdXJhdGlvbiA9IGVuZFRpbWUgLSBwZW5kaW5nLnN0YXJ0VGltZVxuXG4gIGNvbnN0IHByb21wdFRva2VucyA9XG4gICAgbWV0YWRhdGEucHJvbXB0VG9rZW5zID8/IChwZW5kaW5nLmFyZ3MucHJvbXB0X3Rva2VucyBhcyBudW1iZXIgfCB1bmRlZmluZWQpXG4gIGNvbnN0IHR0ZnRNcyA9IG1ldGFkYXRhLnR0ZnRNc1xuICBjb25zdCB0dGx0TXMgPSBtZXRhZGF0YS50dGx0TXNcbiAgY29uc3Qgb3V0cHV0VG9rZW5zID0gbWV0YWRhdGEub3V0cHV0VG9rZW5zXG4gIGNvbnN0IGNhY2hlUmVhZFRva2VucyA9IG1ldGFkYXRhLmNhY2hlUmVhZFRva2Vuc1xuXG4gIC8vIENvbXB1dGUgZGVyaXZlZCBtZXRyaWNzXG4gIC8vIElUUFM6IGlucHV0IHRva2VucyBwZXIgc2Vjb25kIChwcm9tcHQgcHJvY2Vzc2luZyBzcGVlZClcbiAgY29uc3QgaXRwcyA9XG4gICAgdHRmdE1zICE9PSB1bmRlZmluZWQgJiYgcHJvbXB0VG9rZW5zICE9PSB1bmRlZmluZWQgJiYgdHRmdE1zID4gMFxuICAgICAgPyBNYXRoLnJvdW5kKChwcm9tcHRUb2tlbnMgLyAodHRmdE1zIC8gMTAwMCkpICogMTAwKSAvIDEwMFxuICAgICAgOiB1bmRlZmluZWRcblxuICAvLyBPVFBTOiBvdXRwdXQgdG9rZW5zIHBlciBzZWNvbmQgKHNhbXBsaW5nIHNwZWVkKVxuICBjb25zdCBzYW1wbGluZ01zID1cbiAgICB0dGx0TXMgIT09IHVuZGVmaW5lZCAmJiB0dGZ0TXMgIT09IHVuZGVmaW5lZCA/IHR0bHRNcyAtIHR0ZnRNcyA6IHVuZGVmaW5lZFxuICBjb25zdCBvdHBzID1cbiAgICBzYW1wbGluZ01zICE9PSB1bmRlZmluZWQgJiYgb3V0cHV0VG9rZW5zICE9PSB1bmRlZmluZWQgJiYgc2FtcGxpbmdNcyA+IDBcbiAgICAgID8gTWF0aC5yb3VuZCgob3V0cHV0VG9rZW5zIC8gKHNhbXBsaW5nTXMgLyAxMDAwKSkgKiAxMDApIC8gMTAwXG4gICAgICA6IHVuZGVmaW5lZFxuXG4gIC8vIENhY2hlIGhpdCByYXRlOiBwZXJjZW50YWdlIG9mIHByb21wdCB0b2tlbnMgZnJvbSBjYWNoZVxuICBjb25zdCBjYWNoZUhpdFJhdGUgPVxuICAgIGNhY2hlUmVhZFRva2VucyAhPT0gdW5kZWZpbmVkICYmXG4gICAgcHJvbXB0VG9rZW5zICE9PSB1bmRlZmluZWQgJiZcbiAgICBwcm9tcHRUb2tlbnMgPiAwXG4gICAgICA/IE1hdGgucm91bmQoKGNhY2hlUmVhZFRva2VucyAvIHByb21wdFRva2VucykgKiAxMDAwMCkgLyAxMDBcbiAgICAgIDogdW5kZWZpbmVkXG5cbiAgY29uc3QgcmVxdWVzdFNldHVwTXMgPSBtZXRhZGF0YS5yZXF1ZXN0U2V0dXBNc1xuICBjb25zdCBhdHRlbXB0U3RhcnRUaW1lcyA9IG1ldGFkYXRhLmF0dGVtcHRTdGFydFRpbWVzXG5cbiAgLy8gTWVyZ2UgbWV0YWRhdGEgd2l0aCBvcmlnaW5hbCBhcmdzXG4gIGNvbnN0IGFyZ3MgPSB7XG4gICAgLi4ucGVuZGluZy5hcmdzLFxuICAgIHR0ZnRfbXM6IHR0ZnRNcyxcbiAgICB0dGx0X21zOiB0dGx0TXMsXG4gICAgcHJvbXB0X3Rva2VuczogcHJvbXB0VG9rZW5zLFxuICAgIG91dHB1dF90b2tlbnM6IG91dHB1dFRva2VucyxcbiAgICBjYWNoZV9yZWFkX3Rva2VuczogY2FjaGVSZWFkVG9rZW5zLFxuICAgIGNhY2hlX2NyZWF0aW9uX3Rva2VuczogbWV0YWRhdGEuY2FjaGVDcmVhdGlvblRva2VucyxcbiAgICBtZXNzYWdlX2lkOiBtZXRhZGF0YS5tZXNzYWdlSWQgPz8gcGVuZGluZy5hcmdzLm1lc3NhZ2VfaWQsXG4gICAgc3VjY2VzczogbWV0YWRhdGEuc3VjY2VzcyA/PyB0cnVlLFxuICAgIGVycm9yOiBtZXRhZGF0YS5lcnJvcixcbiAgICBkdXJhdGlvbl9tczogZHVyYXRpb24gLyAxMDAwLFxuICAgIHJlcXVlc3Rfc2V0dXBfbXM6IHJlcXVlc3RTZXR1cE1zLFxuICAgIC8vIERlcml2ZWQgbWV0cmljc1xuICAgIGl0cHMsXG4gICAgb3RwcyxcbiAgICBjYWNoZV9oaXRfcmF0ZV9wY3Q6IGNhY2hlSGl0UmF0ZSxcbiAgfVxuXG4gIC8vIEVtaXQgUmVxdWVzdCBTZXR1cCBzdWItc3BhbiB3aGVuIHRoZXJlIHdhcyBtZWFzdXJhYmxlIHNldHVwIHRpbWVcbiAgLy8gKGNsaWVudCBjcmVhdGlvbiwgcGFyYW0gYnVpbGRpbmcsIHJldHJpZXMgYmVmb3JlIHRoZSBzdWNjZXNzZnVsIGF0dGVtcHQpXG4gIGNvbnN0IHNldHVwVXMgPVxuICAgIHJlcXVlc3RTZXR1cE1zICE9PSB1bmRlZmluZWQgJiYgcmVxdWVzdFNldHVwTXMgPiAwXG4gICAgICA/IHJlcXVlc3RTZXR1cE1zICogMTAwMFxuICAgICAgOiAwXG4gIGlmIChzZXR1cFVzID4gMCkge1xuICAgIGNvbnN0IHNldHVwRW5kVHMgPSBwZW5kaW5nLnN0YXJ0VGltZSArIHNldHVwVXNcblxuICAgIGV2ZW50cy5wdXNoKHtcbiAgICAgIG5hbWU6ICdSZXF1ZXN0IFNldHVwJyxcbiAgICAgIGNhdDogJ2FwaSxzZXR1cCcsXG4gICAgICBwaDogJ0InLFxuICAgICAgdHM6IHBlbmRpbmcuc3RhcnRUaW1lLFxuICAgICAgcGlkOiBwZW5kaW5nLmFnZW50SW5mby5wcm9jZXNzSWQsXG4gICAgICB0aWQ6IHBlbmRpbmcuYWdlbnRJbmZvLnRocmVhZElkLFxuICAgICAgYXJnczoge1xuICAgICAgICByZXF1ZXN0X3NldHVwX21zOiByZXF1ZXN0U2V0dXBNcyxcbiAgICAgICAgYXR0ZW1wdF9jb3VudDogYXR0ZW1wdFN0YXJ0VGltZXM/Lmxlbmd0aCA/PyAxLFxuICAgICAgfSxcbiAgICB9KVxuXG4gICAgLy8gRW1pdCByZXRyeSBhdHRlbXB0IHN1Yi1zcGFucyB3aXRoaW4gUmVxdWVzdCBTZXR1cC5cbiAgICAvLyBFYWNoIGZhaWxlZCBhdHRlbXB0IHJ1bnMgZnJvbSBpdHMgc3RhcnQgdG8gdGhlIG5leHQgYXR0ZW1wdCdzIHN0YXJ0LlxuICAgIGlmIChhdHRlbXB0U3RhcnRUaW1lcyAmJiBhdHRlbXB0U3RhcnRUaW1lcy5sZW5ndGggPiAxKSB7XG4gICAgICAvLyBhdHRlbXB0U3RhcnRUaW1lc1swXSBpcyB0aGUgcmVmZXJlbmNlIHBvaW50IChmaXJzdCBhdHRlbXB0KS5cbiAgICAgIC8vIENvbnZlcnQgd2FsbC1jbG9jayBkZWx0YXMgaW50byBQZXJmZXR0by1yZWxhdGl2ZSBtaWNyb3NlY29uZHMuXG4gICAgICBjb25zdCBiYXNlV2FsbE1zID0gYXR0ZW1wdFN0YXJ0VGltZXNbMF0hXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dGVtcHRTdGFydFRpbWVzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICBjb25zdCBhdHRlbXB0U3RhcnRVcyA9XG4gICAgICAgICAgcGVuZGluZy5zdGFydFRpbWUgKyAoYXR0ZW1wdFN0YXJ0VGltZXNbaV0hIC0gYmFzZVdhbGxNcykgKiAxMDAwXG4gICAgICAgIGNvbnN0IGF0dGVtcHRFbmRVcyA9XG4gICAgICAgICAgcGVuZGluZy5zdGFydFRpbWUgKyAoYXR0ZW1wdFN0YXJ0VGltZXNbaSArIDFdISAtIGJhc2VXYWxsTXMpICogMTAwMFxuXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBgQXR0ZW1wdCAke2kgKyAxfSAocmV0cnkpYCxcbiAgICAgICAgICBjYXQ6ICdhcGkscmV0cnknLFxuICAgICAgICAgIHBoOiAnQicsXG4gICAgICAgICAgdHM6IGF0dGVtcHRTdGFydFVzLFxuICAgICAgICAgIHBpZDogcGVuZGluZy5hZ2VudEluZm8ucHJvY2Vzc0lkLFxuICAgICAgICAgIHRpZDogcGVuZGluZy5hZ2VudEluZm8udGhyZWFkSWQsXG4gICAgICAgICAgYXJnczogeyBhdHRlbXB0OiBpICsgMSB9LFxuICAgICAgICB9KVxuICAgICAgICBldmVudHMucHVzaCh7XG4gICAgICAgICAgbmFtZTogYEF0dGVtcHQgJHtpICsgMX0gKHJldHJ5KWAsXG4gICAgICAgICAgY2F0OiAnYXBpLHJldHJ5JyxcbiAgICAgICAgICBwaDogJ0UnLFxuICAgICAgICAgIHRzOiBhdHRlbXB0RW5kVXMsXG4gICAgICAgICAgcGlkOiBwZW5kaW5nLmFnZW50SW5mby5wcm9jZXNzSWQsXG4gICAgICAgICAgdGlkOiBwZW5kaW5nLmFnZW50SW5mby50aHJlYWRJZCxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMucHVzaCh7XG4gICAgICBuYW1lOiAnUmVxdWVzdCBTZXR1cCcsXG4gICAgICBjYXQ6ICdhcGksc2V0dXAnLFxuICAgICAgcGg6ICdFJyxcbiAgICAgIHRzOiBzZXR1cEVuZFRzLFxuICAgICAgcGlkOiBwZW5kaW5nLmFnZW50SW5mby5wcm9jZXNzSWQsXG4gICAgICB0aWQ6IHBlbmRpbmcuYWdlbnRJbmZvLnRocmVhZElkLFxuICAgIH0pXG4gIH1cblxuICAvLyBFbWl0IHN1Yi1zcGFucyBmb3IgRmlyc3QgVG9rZW4gYW5kIFNhbXBsaW5nIHBoYXNlcyAoYmVmb3JlIEFQSSBDYWxsIGVuZClcbiAgLy8gVXNpbmcgQi9FIHBhaXJzIGluIHByb3BlciBuZXN0aW5nIG9yZGVyIGZvciBjb3JyZWN0IFBlcmZldHRvIHZpc3VhbGl6YXRpb25cbiAgaWYgKHR0ZnRNcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gRmlyc3QgVG9rZW4gc3RhcnRzIGFmdGVyIHJlcXVlc3Qgc2V0dXAgKGlmIGFueSlcbiAgICBjb25zdCBmaXJzdFRva2VuU3RhcnRUcyA9IHBlbmRpbmcuc3RhcnRUaW1lICsgc2V0dXBVc1xuICAgIGNvbnN0IGZpcnN0VG9rZW5FbmRUcyA9IGZpcnN0VG9rZW5TdGFydFRzICsgdHRmdE1zICogMTAwMFxuXG4gICAgLy8gRmlyc3QgVG9rZW4gcGhhc2U6IGZyb20gc3VjY2Vzc2Z1bCBhdHRlbXB0IHN0YXJ0IHRvIGZpcnN0IHRva2VuXG4gICAgZXZlbnRzLnB1c2goe1xuICAgICAgbmFtZTogJ0ZpcnN0IFRva2VuJyxcbiAgICAgIGNhdDogJ2FwaSx0dGZ0JyxcbiAgICAgIHBoOiAnQicsXG4gICAgICB0czogZmlyc3RUb2tlblN0YXJ0VHMsXG4gICAgICBwaWQ6IHBlbmRpbmcuYWdlbnRJbmZvLnByb2Nlc3NJZCxcbiAgICAgIHRpZDogcGVuZGluZy5hZ2VudEluZm8udGhyZWFkSWQsXG4gICAgICBhcmdzOiB7XG4gICAgICAgIHR0ZnRfbXM6IHR0ZnRNcyxcbiAgICAgICAgcHJvbXB0X3Rva2VuczogcHJvbXB0VG9rZW5zLFxuICAgICAgICBpdHBzLFxuICAgICAgICBjYWNoZV9oaXRfcmF0ZV9wY3Q6IGNhY2hlSGl0UmF0ZSxcbiAgICAgIH0sXG4gICAgfSlcbiAgICBldmVudHMucHVzaCh7XG4gICAgICBuYW1lOiAnRmlyc3QgVG9rZW4nLFxuICAgICAgY2F0OiAnYXBpLHR0ZnQnLFxuICAgICAgcGg6ICdFJyxcbiAgICAgIHRzOiBmaXJzdFRva2VuRW5kVHMsXG4gICAgICBwaWQ6IHBlbmRpbmcuYWdlbnRJbmZvLnByb2Nlc3NJZCxcbiAgICAgIHRpZDogcGVuZGluZy5hZ2VudEluZm8udGhyZWFkSWQsXG4gICAgfSlcblxuICAgIC8vIFNhbXBsaW5nIHBoYXNlOiBmcm9tIGZpcnN0IHRva2VuIHRvIGxhc3QgdG9rZW5cbiAgICAvLyBOb3RlOiBzYW1wbGluZ01zID0gdHRsdE1zIC0gdHRmdE1zIHN0aWxsIGluY2x1ZGVzIHNldHVwIHRpbWUgaW4gdHRsdE1zLFxuICAgIC8vIHNvIHdlIGNvbXB1dGUgdGhlIGFjdHVhbCBzYW1wbGluZyBkdXJhdGlvbiBmb3IgdGhlIHNwYW4gYXMgdGhlIHRpbWUgZnJvbVxuICAgIC8vIGZpcnN0IHRva2VuIHRvIEFQSSBjYWxsIGVuZCAoZW5kVGltZSksIG5vdCBzYW1wbGluZ01zIGRpcmVjdGx5LlxuICAgIGNvbnN0IGFjdHVhbFNhbXBsaW5nTXMgPVxuICAgICAgdHRsdE1zICE9PSB1bmRlZmluZWQgPyB0dGx0TXMgLSB0dGZ0TXMgLSBzZXR1cFVzIC8gMTAwMCA6IHVuZGVmaW5lZFxuICAgIGlmIChhY3R1YWxTYW1wbGluZ01zICE9PSB1bmRlZmluZWQgJiYgYWN0dWFsU2FtcGxpbmdNcyA+IDApIHtcbiAgICAgIGV2ZW50cy5wdXNoKHtcbiAgICAgICAgbmFtZTogJ1NhbXBsaW5nJyxcbiAgICAgICAgY2F0OiAnYXBpLHNhbXBsaW5nJyxcbiAgICAgICAgcGg6ICdCJyxcbiAgICAgICAgdHM6IGZpcnN0VG9rZW5FbmRUcyxcbiAgICAgICAgcGlkOiBwZW5kaW5nLmFnZW50SW5mby5wcm9jZXNzSWQsXG4gICAgICAgIHRpZDogcGVuZGluZy5hZ2VudEluZm8udGhyZWFkSWQsXG4gICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICBzYW1wbGluZ19tczogYWN0dWFsU2FtcGxpbmdNcyxcbiAgICAgICAgICBvdXRwdXRfdG9rZW5zOiBvdXRwdXRUb2tlbnMsXG4gICAgICAgICAgb3RwcyxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICBldmVudHMucHVzaCh7XG4gICAgICAgIG5hbWU6ICdTYW1wbGluZycsXG4gICAgICAgIGNhdDogJ2FwaSxzYW1wbGluZycsXG4gICAgICAgIHBoOiAnRScsXG4gICAgICAgIHRzOiBmaXJzdFRva2VuRW5kVHMgKyBhY3R1YWxTYW1wbGluZ01zICogMTAwMCxcbiAgICAgICAgcGlkOiBwZW5kaW5nLmFnZW50SW5mby5wcm9jZXNzSWQsXG4gICAgICAgIHRpZDogcGVuZGluZy5hZ2VudEluZm8udGhyZWFkSWQsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIEVtaXQgQVBJIENhbGwgZW5kIGV2ZW50IChhZnRlciBzdWItc3BhbnMpXG4gIGV2ZW50cy5wdXNoKHtcbiAgICBuYW1lOiBwZW5kaW5nLm5hbWUsXG4gICAgY2F0OiBwZW5kaW5nLmNhdGVnb3J5LFxuICAgIHBoOiAnRScsXG4gICAgdHM6IGVuZFRpbWUsXG4gICAgcGlkOiBwZW5kaW5nLmFnZW50SW5mby5wcm9jZXNzSWQsXG4gICAgdGlkOiBwZW5kaW5nLmFnZW50SW5mby50aHJlYWRJZCxcbiAgICBhcmdzLFxuICB9KVxuXG4gIHBlbmRpbmdTcGFucy5kZWxldGUoc3BhbklkKVxufVxuXG4vKipcbiAqIFN0YXJ0IGEgdG9vbCBleGVjdXRpb24gc3BhblxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRUb29sUGVyZmV0dG9TcGFuKFxuICB0b29sTmFtZTogc3RyaW5nLFxuICBhcmdzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4pOiBzdHJpbmcge1xuICBpZiAoIWlzRW5hYmxlZCkgcmV0dXJuICcnXG5cbiAgY29uc3Qgc3BhbklkID0gZ2VuZXJhdGVTcGFuSWQoKVxuICBjb25zdCBhZ2VudEluZm8gPSBnZXRDdXJyZW50QWdlbnRJbmZvKClcblxuICBwZW5kaW5nU3BhbnMuc2V0KHNwYW5JZCwge1xuICAgIG5hbWU6IGBUb29sOiAke3Rvb2xOYW1lfWAsXG4gICAgY2F0ZWdvcnk6ICd0b29sJyxcbiAgICBzdGFydFRpbWU6IGdldFRpbWVzdGFtcCgpLFxuICAgIGFnZW50SW5mbyxcbiAgICBhcmdzOiB7XG4gICAgICB0b29sX25hbWU6IHRvb2xOYW1lLFxuICAgICAgLi4uYXJncyxcbiAgICB9LFxuICB9KVxuXG4gIC8vIEVtaXQgYmVnaW4gZXZlbnRcbiAgZXZlbnRzLnB1c2goe1xuICAgIG5hbWU6IGBUb29sOiAke3Rvb2xOYW1lfWAsXG4gICAgY2F0OiAndG9vbCcsXG4gICAgcGg6ICdCJyxcbiAgICB0czogcGVuZGluZ1NwYW5zLmdldChzcGFuSWQpIS5zdGFydFRpbWUsXG4gICAgcGlkOiBhZ2VudEluZm8ucHJvY2Vzc0lkLFxuICAgIHRpZDogYWdlbnRJbmZvLnRocmVhZElkLFxuICAgIGFyZ3M6IHBlbmRpbmdTcGFucy5nZXQoc3BhbklkKSEuYXJncyxcbiAgfSlcblxuICByZXR1cm4gc3BhbklkXG59XG5cbi8qKlxuICogRW5kIGEgdG9vbCBleGVjdXRpb24gc3BhblxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5kVG9vbFBlcmZldHRvU3BhbihcbiAgc3BhbklkOiBzdHJpbmcsXG4gIG1ldGFkYXRhPzoge1xuICAgIHN1Y2Nlc3M/OiBib29sZWFuXG4gICAgZXJyb3I/OiBzdHJpbmdcbiAgICByZXN1bHRUb2tlbnM/OiBudW1iZXJcbiAgfSxcbik6IHZvaWQge1xuICBpZiAoIWlzRW5hYmxlZCB8fCAhc3BhbklkKSByZXR1cm5cblxuICBjb25zdCBwZW5kaW5nID0gcGVuZGluZ1NwYW5zLmdldChzcGFuSWQpXG4gIGlmICghcGVuZGluZykgcmV0dXJuXG5cbiAgY29uc3QgZW5kVGltZSA9IGdldFRpbWVzdGFtcCgpXG4gIGNvbnN0IGR1cmF0aW9uID0gZW5kVGltZSAtIHBlbmRpbmcuc3RhcnRUaW1lXG5cbiAgY29uc3QgYXJncyA9IHtcbiAgICAuLi5wZW5kaW5nLmFyZ3MsXG4gICAgc3VjY2VzczogbWV0YWRhdGE/LnN1Y2Nlc3MgPz8gdHJ1ZSxcbiAgICBlcnJvcjogbWV0YWRhdGE/LmVycm9yLFxuICAgIHJlc3VsdF90b2tlbnM6IG1ldGFkYXRhPy5yZXN1bHRUb2tlbnMsXG4gICAgZHVyYXRpb25fbXM6IGR1cmF0aW9uIC8gMTAwMCxcbiAgfVxuXG4gIC8vIEVtaXQgZW5kIGV2ZW50XG4gIGV2ZW50cy5wdXNoKHtcbiAgICBuYW1lOiBwZW5kaW5nLm5hbWUsXG4gICAgY2F0OiBwZW5kaW5nLmNhdGVnb3J5LFxuICAgIHBoOiAnRScsXG4gICAgdHM6IGVuZFRpbWUsXG4gICAgcGlkOiBwZW5kaW5nLmFnZW50SW5mby5wcm9jZXNzSWQsXG4gICAgdGlkOiBwZW5kaW5nLmFnZW50SW5mby50aHJlYWRJZCxcbiAgICBhcmdzLFxuICB9KVxuXG4gIHBlbmRpbmdTcGFucy5kZWxldGUoc3BhbklkKVxufVxuXG4vKipcbiAqIFN0YXJ0IGEgdXNlciBpbnB1dCB3YWl0aW5nIHNwYW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0VXNlcklucHV0UGVyZmV0dG9TcGFuKGNvbnRleHQ/OiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoIWlzRW5hYmxlZCkgcmV0dXJuICcnXG5cbiAgY29uc3Qgc3BhbklkID0gZ2VuZXJhdGVTcGFuSWQoKVxuICBjb25zdCBhZ2VudEluZm8gPSBnZXRDdXJyZW50QWdlbnRJbmZvKClcblxuICBwZW5kaW5nU3BhbnMuc2V0KHNwYW5JZCwge1xuICAgIG5hbWU6ICdXYWl0aW5nIGZvciBVc2VyIElucHV0JyxcbiAgICBjYXRlZ29yeTogJ3VzZXJfaW5wdXQnLFxuICAgIHN0YXJ0VGltZTogZ2V0VGltZXN0YW1wKCksXG4gICAgYWdlbnRJbmZvLFxuICAgIGFyZ3M6IHtcbiAgICAgIGNvbnRleHQsXG4gICAgfSxcbiAgfSlcblxuICAvLyBFbWl0IGJlZ2luIGV2ZW50XG4gIGV2ZW50cy5wdXNoKHtcbiAgICBuYW1lOiAnV2FpdGluZyBmb3IgVXNlciBJbnB1dCcsXG4gICAgY2F0OiAndXNlcl9pbnB1dCcsXG4gICAgcGg6ICdCJyxcbiAgICB0czogcGVuZGluZ1NwYW5zLmdldChzcGFuSWQpIS5zdGFydFRpbWUsXG4gICAgcGlkOiBhZ2VudEluZm8ucHJvY2Vzc0lkLFxuICAgIHRpZDogYWdlbnRJbmZvLnRocmVhZElkLFxuICAgIGFyZ3M6IHBlbmRpbmdTcGFucy5nZXQoc3BhbklkKSEuYXJncyxcbiAgfSlcblxuICByZXR1cm4gc3BhbklkXG59XG5cbi8qKlxuICogRW5kIGEgdXNlciBpbnB1dCB3YWl0aW5nIHNwYW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuZFVzZXJJbnB1dFBlcmZldHRvU3BhbihcbiAgc3BhbklkOiBzdHJpbmcsXG4gIG1ldGFkYXRhPzoge1xuICAgIGRlY2lzaW9uPzogc3RyaW5nXG4gICAgc291cmNlPzogc3RyaW5nXG4gIH0sXG4pOiB2b2lkIHtcbiAgaWYgKCFpc0VuYWJsZWQgfHwgIXNwYW5JZCkgcmV0dXJuXG5cbiAgY29uc3QgcGVuZGluZyA9IHBlbmRpbmdTcGFucy5nZXQoc3BhbklkKVxuICBpZiAoIXBlbmRpbmcpIHJldHVyblxuXG4gIGNvbnN0IGVuZFRpbWUgPSBnZXRUaW1lc3RhbXAoKVxuICBjb25zdCBkdXJhdGlvbiA9IGVuZFRpbWUgLSBwZW5kaW5nLnN0YXJ0VGltZVxuXG4gIGNvbnN0IGFyZ3MgPSB7XG4gICAgLi4ucGVuZGluZy5hcmdzLFxuICAgIGRlY2lzaW9uOiBtZXRhZGF0YT8uZGVjaXNpb24sXG4gICAgc291cmNlOiBtZXRhZGF0YT8uc291cmNlLFxuICAgIGR1cmF0aW9uX21zOiBkdXJhdGlvbiAvIDEwMDAsXG4gIH1cblxuICAvLyBFbWl0IGVuZCBldmVudFxuICBldmVudHMucHVzaCh7XG4gICAgbmFtZTogcGVuZGluZy5uYW1lLFxuICAgIGNhdDogcGVuZGluZy5jYXRlZ29yeSxcbiAgICBwaDogJ0UnLFxuICAgIHRzOiBlbmRUaW1lLFxuICAgIHBpZDogcGVuZGluZy5hZ2VudEluZm8ucHJvY2Vzc0lkLFxuICAgIHRpZDogcGVuZGluZy5hZ2VudEluZm8udGhyZWFkSWQsXG4gICAgYXJncyxcbiAgfSlcblxuICBwZW5kaW5nU3BhbnMuZGVsZXRlKHNwYW5JZClcbn1cblxuLyoqXG4gKiBFbWl0IGFuIGluc3RhbnQgZXZlbnQgKG1hcmtlcilcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVtaXRQZXJmZXR0b0luc3RhbnQoXG4gIG5hbWU6IHN0cmluZyxcbiAgY2F0ZWdvcnk6IHN0cmluZyxcbiAgYXJncz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuKTogdm9pZCB7XG4gIGlmICghaXNFbmFibGVkKSByZXR1cm5cblxuICBjb25zdCBhZ2VudEluZm8gPSBnZXRDdXJyZW50QWdlbnRJbmZvKClcblxuICBldmVudHMucHVzaCh7XG4gICAgbmFtZSxcbiAgICBjYXQ6IGNhdGVnb3J5LFxuICAgIHBoOiAnaScsXG4gICAgdHM6IGdldFRpbWVzdGFtcCgpLFxuICAgIHBpZDogYWdlbnRJbmZvLnByb2Nlc3NJZCxcbiAgICB0aWQ6IGFnZW50SW5mby50aHJlYWRJZCxcbiAgICBhcmdzLFxuICB9KVxufVxuXG4vKipcbiAqIEVtaXQgYSBjb3VudGVyIGV2ZW50IGZvciB0cmFja2luZyBtZXRyaWNzIG92ZXIgdGltZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZW1pdFBlcmZldHRvQ291bnRlcihcbiAgbmFtZTogc3RyaW5nLFxuICB2YWx1ZXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4sXG4pOiB2b2lkIHtcbiAgaWYgKCFpc0VuYWJsZWQpIHJldHVyblxuXG4gIGNvbnN0IGFnZW50SW5mbyA9IGdldEN1cnJlbnRBZ2VudEluZm8oKVxuXG4gIGV2ZW50cy5wdXNoKHtcbiAgICBuYW1lLFxuICAgIGNhdDogJ2NvdW50ZXInLFxuICAgIHBoOiAnQycsXG4gICAgdHM6IGdldFRpbWVzdGFtcCgpLFxuICAgIHBpZDogYWdlbnRJbmZvLnByb2Nlc3NJZCxcbiAgICB0aWQ6IGFnZW50SW5mby50aHJlYWRJZCxcbiAgICBhcmdzOiB2YWx1ZXMsXG4gIH0pXG59XG5cbi8qKlxuICogU3RhcnQgYW4gaW50ZXJhY3Rpb24gc3BhbiAod3JhcHMgYSBmdWxsIHVzZXIgcmVxdWVzdCBjeWNsZSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0SW50ZXJhY3Rpb25QZXJmZXR0b1NwYW4odXNlclByb21wdD86IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghaXNFbmFibGVkKSByZXR1cm4gJydcblxuICBjb25zdCBzcGFuSWQgPSBnZW5lcmF0ZVNwYW5JZCgpXG4gIGNvbnN0IGFnZW50SW5mbyA9IGdldEN1cnJlbnRBZ2VudEluZm8oKVxuXG4gIHBlbmRpbmdTcGFucy5zZXQoc3BhbklkLCB7XG4gICAgbmFtZTogJ0ludGVyYWN0aW9uJyxcbiAgICBjYXRlZ29yeTogJ2ludGVyYWN0aW9uJyxcbiAgICBzdGFydFRpbWU6IGdldFRpbWVzdGFtcCgpLFxuICAgIGFnZW50SW5mbyxcbiAgICBhcmdzOiB7XG4gICAgICB1c2VyX3Byb21wdF9sZW5ndGg6IHVzZXJQcm9tcHQ/Lmxlbmd0aCxcbiAgICB9LFxuICB9KVxuXG4gIC8vIEVtaXQgYmVnaW4gZXZlbnRcbiAgZXZlbnRzLnB1c2goe1xuICAgIG5hbWU6ICdJbnRlcmFjdGlvbicsXG4gICAgY2F0OiAnaW50ZXJhY3Rpb24nLFxuICAgIHBoOiAnQicsXG4gICAgdHM6IHBlbmRpbmdTcGFucy5nZXQoc3BhbklkKSEuc3RhcnRUaW1lLFxuICAgIHBpZDogYWdlbnRJbmZvLnByb2Nlc3NJZCxcbiAgICB0aWQ6IGFnZW50SW5mby50aHJlYWRJZCxcbiAgICBhcmdzOiBwZW5kaW5nU3BhbnMuZ2V0KHNwYW5JZCkhLmFyZ3MsXG4gIH0pXG5cbiAgcmV0dXJuIHNwYW5JZFxufVxuXG4vKipcbiAqIEVuZCBhbiBpbnRlcmFjdGlvbiBzcGFuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmRJbnRlcmFjdGlvblBlcmZldHRvU3BhbihzcGFuSWQ6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoIWlzRW5hYmxlZCB8fCAhc3BhbklkKSByZXR1cm5cblxuICBjb25zdCBwZW5kaW5nID0gcGVuZGluZ1NwYW5zLmdldChzcGFuSWQpXG4gIGlmICghcGVuZGluZykgcmV0dXJuXG5cbiAgY29uc3QgZW5kVGltZSA9IGdldFRpbWVzdGFtcCgpXG4gIGNvbnN0IGR1cmF0aW9uID0gZW5kVGltZSAtIHBlbmRpbmcuc3RhcnRUaW1lXG5cbiAgLy8gRW1pdCBlbmQgZXZlbnRcbiAgZXZlbnRzLnB1c2goe1xuICAgIG5hbWU6IHBlbmRpbmcubmFtZSxcbiAgICBjYXQ6IHBlbmRpbmcuY2F0ZWdvcnksXG4gICAgcGg6ICdFJyxcbiAgICB0czogZW5kVGltZSxcbiAgICBwaWQ6IHBlbmRpbmcuYWdlbnRJbmZvLnByb2Nlc3NJZCxcbiAgICB0aWQ6IHBlbmRpbmcuYWdlbnRJbmZvLnRocmVhZElkLFxuICAgIGFyZ3M6IHtcbiAgICAgIC4uLnBlbmRpbmcuYXJncyxcbiAgICAgIGR1cmF0aW9uX21zOiBkdXJhdGlvbiAvIDEwMDAsXG4gICAgfSxcbiAgfSlcblxuICBwZW5kaW5nU3BhbnMuZGVsZXRlKHNwYW5JZClcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBQZXJpb2RpYyB3cml0ZSBoZWxwZXJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBTdG9wIHRoZSBwZXJpb2RpYyB3cml0ZSB0aW1lci5cbiAqL1xuZnVuY3Rpb24gc3RvcFdyaXRlSW50ZXJ2YWwoKTogdm9pZCB7XG4gIGlmIChzdGFsZVNwYW5DbGVhbnVwSWQpIHtcbiAgICBjbGVhckludGVydmFsKHN0YWxlU3BhbkNsZWFudXBJZClcbiAgICBzdGFsZVNwYW5DbGVhbnVwSWQgPSBudWxsXG4gIH1cbiAgaWYgKHdyaXRlSW50ZXJ2YWxJZCkge1xuICAgIGNsZWFySW50ZXJ2YWwod3JpdGVJbnRlcnZhbElkKVxuICAgIHdyaXRlSW50ZXJ2YWxJZCA9IG51bGxcbiAgfVxufVxuXG4vKipcbiAqIEZvcmNlLWNsb3NlIGFueSByZW1haW5pbmcgb3BlbiBzcGFucyBhdCBzZXNzaW9uIGVuZC5cbiAqL1xuZnVuY3Rpb24gY2xvc2VPcGVuU3BhbnMoKTogdm9pZCB7XG4gIGZvciAoY29uc3QgW3NwYW5JZCwgcGVuZGluZ10gb2YgcGVuZGluZ1NwYW5zKSB7XG4gICAgY29uc3QgZW5kVGltZSA9IGdldFRpbWVzdGFtcCgpXG4gICAgZXZlbnRzLnB1c2goe1xuICAgICAgbmFtZTogcGVuZGluZy5uYW1lLFxuICAgICAgY2F0OiBwZW5kaW5nLmNhdGVnb3J5LFxuICAgICAgcGg6ICdFJyxcbiAgICAgIHRzOiBlbmRUaW1lLFxuICAgICAgcGlkOiBwZW5kaW5nLmFnZW50SW5mby5wcm9jZXNzSWQsXG4gICAgICB0aWQ6IHBlbmRpbmcuYWdlbnRJbmZvLnRocmVhZElkLFxuICAgICAgYXJnczoge1xuICAgICAgICAuLi5wZW5kaW5nLmFyZ3MsXG4gICAgICAgIGluY29tcGxldGU6IHRydWUsXG4gICAgICAgIGR1cmF0aW9uX21zOiAoZW5kVGltZSAtIHBlbmRpbmcuc3RhcnRUaW1lKSAvIDEwMDAsXG4gICAgICB9LFxuICAgIH0pXG4gICAgcGVuZGluZ1NwYW5zLmRlbGV0ZShzcGFuSWQpXG4gIH1cbn1cblxuLyoqXG4gKiBXcml0ZSB0aGUgZnVsbCB0cmFjZSB0byBkaXNrLiAgRXJyb3JzIGFyZSBsb2dnZWQgYnV0IHN3YWxsb3dlZCBzbyB0aGF0IGFcbiAqIHRyYW5zaWVudCBJL08gcHJvYmxlbSBkb2VzIG5vdCBjcmFzaCB0aGUgc2Vzc2lvbiBcdTIwMTQgdGhlIG5leHQgcGVyaW9kaWMgdGlja1xuICogKG9yIHRoZSBmaW5hbCBleGl0IHdyaXRlKSB3aWxsIHJldHJ5IHdpdGggYSBjb21wbGV0ZSBzbmFwc2hvdC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gcGVyaW9kaWNXcml0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgaWYgKCFpc0VuYWJsZWQgfHwgIXRyYWNlUGF0aCB8fCB0cmFjZVdyaXR0ZW4pIHJldHVyblxuXG4gIHRyeSB7XG4gICAgYXdhaXQgbWtkaXIoZGlybmFtZSh0cmFjZVBhdGgpLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KVxuICAgIGF3YWl0IHdyaXRlRmlsZSh0cmFjZVBhdGgsIGJ1aWxkVHJhY2VEb2N1bWVudCgpKVxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbUGVyZmV0dG9dIFBlcmlvZGljIHdyaXRlOiAke2V2ZW50cy5sZW5ndGh9IGV2ZW50cyB0byAke3RyYWNlUGF0aH1gLFxuICAgIClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgW1BlcmZldHRvXSBQZXJpb2RpYyB3cml0ZSBmYWlsZWQ6ICR7ZXJyb3JNZXNzYWdlKGVycm9yKX1gLFxuICAgICAgeyBsZXZlbDogJ2Vycm9yJyB9LFxuICAgIClcbiAgfVxufVxuXG4vKipcbiAqIEZpbmFsIGFzeW5jIHdyaXRlOiBjbG9zZSBvcGVuIHNwYW5zIGFuZCB3cml0ZSB0aGUgY29tcGxldGUgdHJhY2UuXG4gKiBJZGVtcG90ZW50IFx1MjAxNCBzZXRzIGB0cmFjZVdyaXR0ZW5gIG9uIHN1Y2Nlc3Mgc28gc3Vic2VxdWVudCBjYWxscyBhcmUgbm8tb3BzLlxuICovXG5hc3luYyBmdW5jdGlvbiB3cml0ZVBlcmZldHRvVHJhY2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmICghaXNFbmFibGVkIHx8ICF0cmFjZVBhdGggfHwgdHJhY2VXcml0dGVuKSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFtQZXJmZXR0b10gU2tpcHBpbmcgZmluYWwgd3JpdGU6IGlzRW5hYmxlZD0ke2lzRW5hYmxlZH0sIHRyYWNlUGF0aD0ke3RyYWNlUGF0aH0sIHRyYWNlV3JpdHRlbj0ke3RyYWNlV3JpdHRlbn1gLFxuICAgIClcbiAgICByZXR1cm5cbiAgfVxuXG4gIHN0b3BXcml0ZUludGVydmFsKClcbiAgY2xvc2VPcGVuU3BhbnMoKVxuXG4gIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICBgW1BlcmZldHRvXSB3cml0ZVBlcmZldHRvVHJhY2UgY2FsbGVkOiBldmVudHM9JHtldmVudHMubGVuZ3RofWAsXG4gIClcblxuICB0cnkge1xuICAgIGF3YWl0IG1rZGlyKGRpcm5hbWUodHJhY2VQYXRoKSwgeyByZWN1cnNpdmU6IHRydWUgfSlcbiAgICBhd2FpdCB3cml0ZUZpbGUodHJhY2VQYXRoLCBidWlsZFRyYWNlRG9jdW1lbnQoKSlcbiAgICB0cmFjZVdyaXR0ZW4gPSB0cnVlXG4gICAgbG9nRm9yRGVidWdnaW5nKGBbUGVyZmV0dG9dIFRyYWNlIGZpbmFsaXplZCBhdDogJHt0cmFjZVBhdGh9YClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgW1BlcmZldHRvXSBGYWlsZWQgdG8gd3JpdGUgZmluYWwgdHJhY2U6ICR7ZXJyb3JNZXNzYWdlKGVycm9yKX1gLFxuICAgICAgeyBsZXZlbDogJ2Vycm9yJyB9LFxuICAgIClcbiAgfVxufVxuXG4vKipcbiAqIEZpbmFsIHN5bmNocm9ub3VzIHdyaXRlIChmYWxsYmFjayBmb3IgcHJvY2VzcyAnZXhpdCcgaGFuZGxlciB3aGVyZSBhc3luYyBpcyBmb3JiaWRkZW4pLlxuICovXG5mdW5jdGlvbiB3cml0ZVBlcmZldHRvVHJhY2VTeW5jKCk6IHZvaWQge1xuICBpZiAoIWlzRW5hYmxlZCB8fCAhdHJhY2VQYXRoIHx8IHRyYWNlV3JpdHRlbikge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbUGVyZmV0dG9dIFNraXBwaW5nIGZpbmFsIHN5bmMgd3JpdGU6IGlzRW5hYmxlZD0ke2lzRW5hYmxlZH0sIHRyYWNlUGF0aD0ke3RyYWNlUGF0aH0sIHRyYWNlV3JpdHRlbj0ke3RyYWNlV3JpdHRlbn1gLFxuICAgIClcbiAgICByZXR1cm5cbiAgfVxuXG4gIHN0b3BXcml0ZUludGVydmFsKClcbiAgY2xvc2VPcGVuU3BhbnMoKVxuXG4gIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICBgW1BlcmZldHRvXSB3cml0ZVBlcmZldHRvVHJhY2VTeW5jIGNhbGxlZDogZXZlbnRzPSR7ZXZlbnRzLmxlbmd0aH1gLFxuICApXG5cbiAgdHJ5IHtcbiAgICBjb25zdCBkaXIgPSBkaXJuYW1lKHRyYWNlUGF0aClcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3VzdG9tLXJ1bGVzL25vLXN5bmMtZnMgLS0gT25seSBjYWxsZWQgZnJvbSBwcm9jZXNzLm9uKCdleGl0JykgaGFuZGxlclxuICAgIG1rZGlyU3luYyhkaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGN1c3RvbS1ydWxlcy9uby1zeW5jLWZzLCBlc2xpbnQtcGx1Z2luLW4vbm8tc3luYyAtLSBSZXF1aXJlZCBmb3IgcHJvY2VzcyAnZXhpdCcgaGFuZGxlciB3aGljaCBkb2Vzbid0IHN1cHBvcnQgYXN5bmNcbiAgICB3cml0ZUZpbGVTeW5jKHRyYWNlUGF0aCwgYnVpbGRUcmFjZURvY3VtZW50KCkpXG4gICAgdHJhY2VXcml0dGVuID0gdHJ1ZVxuICAgIGxvZ0ZvckRlYnVnZ2luZyhgW1BlcmZldHRvXSBUcmFjZSBmaW5hbGl6ZWQgc3luY2hyb25vdXNseSBhdDogJHt0cmFjZVBhdGh9YClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgW1BlcmZldHRvXSBGYWlsZWQgdG8gd3JpdGUgZmluYWwgdHJhY2Ugc3luY2hyb25vdXNseTogJHtlcnJvck1lc3NhZ2UoZXJyb3IpfWAsXG4gICAgICB7IGxldmVsOiAnZXJyb3InIH0sXG4gICAgKVxuICB9XG59XG5cbi8qKlxuICogR2V0IGFsbCByZWNvcmRlZCBldmVudHMgKGZvciB0ZXN0aW5nKVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGVyZmV0dG9FdmVudHMoKTogVHJhY2VFdmVudFtdIHtcbiAgcmV0dXJuIFsuLi5tZXRhZGF0YUV2ZW50cywgLi4uZXZlbnRzXVxufVxuXG4vKipcbiAqIFJlc2V0IHRoZSB0cmFjZXIgc3RhdGUgKGZvciB0ZXN0aW5nKVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRQZXJmZXR0b1RyYWNlcigpOiB2b2lkIHtcbiAgaWYgKHN0YWxlU3BhbkNsZWFudXBJZCkge1xuICAgIGNsZWFySW50ZXJ2YWwoc3RhbGVTcGFuQ2xlYW51cElkKVxuICAgIHN0YWxlU3BhbkNsZWFudXBJZCA9IG51bGxcbiAgfVxuICBzdG9wV3JpdGVJbnRlcnZhbCgpXG4gIG1ldGFkYXRhRXZlbnRzLmxlbmd0aCA9IDBcbiAgZXZlbnRzLmxlbmd0aCA9IDBcbiAgcGVuZGluZ1NwYW5zLmNsZWFyKClcbiAgYWdlbnRSZWdpc3RyeS5jbGVhcigpXG4gIGFnZW50SWRUb1Byb2Nlc3NJZC5jbGVhcigpXG4gIHRvdGFsQWdlbnRDb3VudCA9IDBcbiAgcHJvY2Vzc0lkQ291bnRlciA9IDFcbiAgc3BhbklkQ291bnRlciA9IDBcbiAgaXNFbmFibGVkID0gZmFsc2VcbiAgdHJhY2VQYXRoID0gbnVsbFxuICBzdGFydFRpbWVNcyA9IDBcbiAgdHJhY2VXcml0dGVuID0gZmFsc2Vcbn1cblxuLyoqXG4gKiBUcmlnZ2VyIGEgcGVyaW9kaWMgd3JpdGUgaW1tZWRpYXRlbHkgKGZvciB0ZXN0aW5nKVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJpZ2dlclBlcmlvZGljV3JpdGVGb3JUZXN0aW5nKCk6IFByb21pc2U8dm9pZD4ge1xuICBhd2FpdCBwZXJpb2RpY1dyaXRlKClcbn1cblxuLyoqXG4gKiBFdmljdCBzdGFsZSBzcGFucyBpbW1lZGlhdGVseSAoZm9yIHRlc3RpbmcpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBldmljdFN0YWxlU3BhbnNGb3JUZXN0aW5nKCk6IHZvaWQge1xuICBldmljdFN0YWxlU3BhbnMoKVxufVxuXG5leHBvcnQgY29uc3QgTUFYX0VWRU5UU19GT1JfVEVTVElORyA9IE1BWF9FVkVOVFNcbmV4cG9ydCBmdW5jdGlvbiBldmljdE9sZGVzdEV2ZW50c0ZvclRlc3RpbmcoKTogdm9pZCB7XG4gIGV2aWN0T2xkZXN0RXZlbnRzKClcbn1cbiIsICIvLyBiaW9tZS1pZ25vcmUtYWxsIGFzc2lzdC9zb3VyY2Uvb3JnYW5pemVJbXBvcnRzOiBBTlQtT05MWSBpbXBvcnQgbWFya2VycyBtdXN0IG5vdCBiZSByZW9yZGVyZWRcbi8qKlxuICogU2hhcmVkIGV2ZW50IG1ldGFkYXRhIGVucmljaG1lbnQgZm9yIGFuYWx5dGljcyBzeXN0ZW1zXG4gKlxuICogVGhpcyBtb2R1bGUgcHJvdmlkZXMgYSBzaW5nbGUgc291cmNlIG9mIHRydXRoIGZvciBjb2xsZWN0aW5nIGFuZCBmb3JtYXR0aW5nXG4gKiBldmVudCBtZXRhZGF0YSBhY3Jvc3MgYWxsIGFuYWx5dGljcyBzeXN0ZW1zIChEYXRhZG9nLCAxUCkuXG4gKi9cblxuaW1wb3J0IHsgZXh0bmFtZSB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdsb2Rhc2gtZXMvbWVtb2l6ZS5qcydcbmltcG9ydCB7IGVudiwgZ2V0SG9zdFBsYXRmb3JtRm9yQW5hbHl0aWNzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZW52LmpzJ1xuaW1wb3J0IHsgZW52RHluYW1pYyB9IGZyb20gJy4uLy4uL3V0aWxzL2VudkR5bmFtaWMuanMnXG5pbXBvcnQgeyBnZXRNb2RlbEJldGFzIH0gZnJvbSAnLi4vLi4vdXRpbHMvYmV0YXMuanMnXG5pbXBvcnQgeyBnZXRNYWluTG9vcE1vZGVsIH0gZnJvbSAnLi4vLi4vdXRpbHMvbW9kZWwvbW9kZWwuanMnXG5pbXBvcnQge1xuICBnZXRTZXNzaW9uSWQsXG4gIGdldElzSW50ZXJhY3RpdmUsXG4gIGdldEthaXJvc0FjdGl2ZSxcbiAgZ2V0Q2xpZW50VHlwZSxcbiAgZ2V0UGFyZW50U2Vzc2lvbklkIGFzIGdldFBhcmVudFNlc3Npb25JZEZyb21TdGF0ZSxcbn0gZnJvbSAnLi4vLi4vYm9vdHN0cmFwL3N0YXRlLmpzJ1xuaW1wb3J0IHsgaXNFbnZUcnV0aHkgfSBmcm9tICcuLi8uLi91dGlscy9lbnZVdGlscy5qcydcbmltcG9ydCB7IGlzT2ZmaWNpYWxNY3BVcmwgfSBmcm9tICcuLi9tY3Avb2ZmaWNpYWxSZWdpc3RyeS5qcydcbmltcG9ydCB7IGlzQ2xhdWRlQUlTdWJzY3JpYmVyLCBnZXRTdWJzY3JpcHRpb25UeXBlIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXV0aC5qcydcbmltcG9ydCB7IGdldFJlcG9SZW1vdGVIYXNoIH0gZnJvbSAnLi4vLi4vdXRpbHMvZ2l0LmpzJ1xuaW1wb3J0IHtcbiAgZ2V0V3NsVmVyc2lvbixcbiAgZ2V0TGludXhEaXN0cm9JbmZvLFxuICBkZXRlY3RWY3MsXG59IGZyb20gJy4uLy4uL3V0aWxzL3BsYXRmb3JtLmpzJ1xuaW1wb3J0IHR5cGUgeyBDb3JlVXNlckRhdGEgfSBmcm9tICdzcmMvdXRpbHMvdXNlci5qcydcbmltcG9ydCB7IGdldEFnZW50Q29udGV4dCB9IGZyb20gJy4uLy4uL3V0aWxzL2FnZW50Q29udGV4dC5qcydcbmltcG9ydCB0eXBlIHsgRW52aXJvbm1lbnRNZXRhZGF0YSB9IGZyb20gJy4uLy4uL3R5cGVzL2dlbmVyYXRlZC9ldmVudHNfbW9uby9jbGF1ZGVfY29kZS92MS9jbGF1ZGVfY29kZV9pbnRlcm5hbF9ldmVudC5qcydcbmltcG9ydCB0eXBlIHsgUHVibGljQXBpQXV0aCB9IGZyb20gJy4uLy4uL3R5cGVzL2dlbmVyYXRlZC9ldmVudHNfbW9uby9jb21tb24vdjEvYXV0aC5qcydcbmltcG9ydCB7IGpzb25TdHJpbmdpZnkgfSBmcm9tICcuLi8uLi91dGlscy9zbG93T3BlcmF0aW9ucy5qcydcbmltcG9ydCB7XG4gIGdldEFnZW50SWQsXG4gIGdldFBhcmVudFNlc3Npb25JZCBhcyBnZXRUZWFtbWF0ZVBhcmVudFNlc3Npb25JZCxcbiAgZ2V0VGVhbU5hbWUsXG4gIGlzVGVhbW1hdGUsXG59IGZyb20gJy4uLy4uL3V0aWxzL3RlYW1tYXRlLmpzJ1xuaW1wb3J0IHsgZmVhdHVyZSB9IGZyb20gJ2J1bjpidW5kbGUnXG5cbi8qKlxuICogTWFya2VyIHR5cGUgZm9yIHZlcmlmeWluZyBhbmFseXRpY3MgbWV0YWRhdGEgZG9lc24ndCBjb250YWluIHNlbnNpdGl2ZSBkYXRhXG4gKlxuICogVGhpcyB0eXBlIGZvcmNlcyBleHBsaWNpdCB2ZXJpZmljYXRpb24gdGhhdCBzdHJpbmcgdmFsdWVzIGJlaW5nIGxvZ2dlZFxuICogZG9uJ3QgY29udGFpbiBjb2RlIHNuaXBwZXRzLCBmaWxlIHBhdGhzLCBvciBvdGhlciBzZW5zaXRpdmUgaW5mb3JtYXRpb24uXG4gKlxuICogVGhlIG1ldGFkYXRhIGlzIGV4cGVjdGVkIHRvIGJlIEpTT04tc2VyaWFsaXphYmxlLlxuICpcbiAqIFVzYWdlOiBgbXlTdHJpbmcgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIU2BcbiAqXG4gKiBUaGUgdHlwZSBpcyBgbmV2ZXJgIHdoaWNoIG1lYW5zIGl0IGNhbiBuZXZlciBhY3R1YWxseSBob2xkIGEgdmFsdWUgLSB0aGlzIGlzXG4gKiBpbnRlbnRpb25hbCBhcyBpdCdzIG9ubHkgdXNlZCBmb3IgdHlwZS1jYXN0aW5nIHRvIGRvY3VtZW50IGRldmVsb3BlciBpbnRlbnQuXG4gKi9cbmV4cG9ydCB0eXBlIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMgPSBuZXZlclxuXG4vKipcbiAqIFNhbml0aXplcyB0b29sIG5hbWVzIGZvciBhbmFseXRpY3MgbG9nZ2luZyB0byBhdm9pZCBQSUkgZXhwb3N1cmUuXG4gKlxuICogTUNQIHRvb2wgbmFtZXMgZm9sbG93IHRoZSBmb3JtYXQgYG1jcF9fPHNlcnZlcj5fXzx0b29sPmAgYW5kIGNhbiByZXZlYWxcbiAqIHVzZXItc3BlY2lmaWMgc2VydmVyIGNvbmZpZ3VyYXRpb25zLCB3aGljaCBpcyBjb25zaWRlcmVkIFBJSS1tZWRpdW0uXG4gKiBUaGlzIGZ1bmN0aW9uIHJlZGFjdHMgTUNQIHRvb2wgbmFtZXMgd2hpbGUgcHJlc2VydmluZyBidWlsdC1pbiB0b29sIG5hbWVzXG4gKiAoQmFzaCwgUmVhZCwgV3JpdGUsIGV0Yy4pIHdoaWNoIGFyZSBzYWZlIHRvIGxvZy5cbiAqXG4gKiBAcGFyYW0gdG9vbE5hbWUgLSBUaGUgdG9vbCBuYW1lIHRvIHNhbml0aXplXG4gKiBAcmV0dXJucyBUaGUgb3JpZ2luYWwgbmFtZSBmb3IgYnVpbHQtaW4gdG9vbHMsIG9yICdtY3BfdG9vbCcgZm9yIE1DUCB0b29sc1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVUb29sTmFtZUZvckFuYWx5dGljcyhcbiAgdG9vbE5hbWU6IHN0cmluZyxcbik6IEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMge1xuICBpZiAodG9vbE5hbWUuc3RhcnRzV2l0aCgnbWNwX18nKSkge1xuICAgIHJldHVybiAnbWNwX3Rvb2wnIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFNcbiAgfVxuICByZXR1cm4gdG9vbE5hbWUgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIU1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGRldGFpbGVkIHRvb2wgbmFtZSBsb2dnaW5nIGlzIGVuYWJsZWQgZm9yIE9UTFAgZXZlbnRzLlxuICogV2hlbiBlbmFibGVkLCBNQ1Agc2VydmVyL3Rvb2wgbmFtZXMgYW5kIFNraWxsIG5hbWVzIGFyZSBsb2dnZWQuXG4gKiBEaXNhYmxlZCBieSBkZWZhdWx0IHRvIHByb3RlY3QgUElJICh1c2VyLXNwZWNpZmljIHNlcnZlciBjb25maWd1cmF0aW9ucykuXG4gKlxuICogRW5hYmxlIHdpdGggT1RFTF9MT0dfVE9PTF9ERVRBSUxTPTFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVG9vbERldGFpbHNMb2dnaW5nRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgcmV0dXJuIGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52Lk9URUxfTE9HX1RPT0xfREVUQUlMUylcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBkZXRhaWxlZCB0b29sIG5hbWUgbG9nZ2luZyAoTUNQIHNlcnZlci90b29sIG5hbWVzKSBpcyBlbmFibGVkXG4gKiBmb3IgYW5hbHl0aWNzIGV2ZW50cy5cbiAqXG4gKiBQZXIgZ28vdGF4b25vbXksIE1DUCBuYW1lcyBhcmUgbWVkaXVtIFBJSS4gV2UgbG9nIHRoZW0gZm9yOlxuICogLSBDb3dvcmsgKGVudHJ5cG9pbnQ9bG9jYWwtYWdlbnQpIFx1MjAxNCBubyBaRFIgY29uY2VwdCwgbG9nIGFsbCBNQ1BzXG4gKiAtIGNsYXVkZS5haS1wcm94aWVkIGNvbm5lY3RvcnMgXHUyMDE0IGFsd2F5cyBvZmZpY2lhbCAoZnJvbSBjbGF1ZGUuYWkncyBsaXN0KVxuICogLSBTZXJ2ZXJzIHdob3NlIFVSTCBtYXRjaGVzIHRoZSBvZmZpY2lhbCBNQ1AgcmVnaXN0cnkgXHUyMDE0IGRpcmVjdG9yeVxuICogICBjb25uZWN0b3JzIGFkZGVkIHZpYSBgY2xhdWRlIG1jcCBhZGRgLCBub3QgY3VzdG9tZXItc3BlY2lmaWMgY29uZmlnXG4gKlxuICogQ3VzdG9tL3VzZXItY29uZmlndXJlZCBNQ1BzIHN0YXkgc2FuaXRpemVkICh0b29sTmFtZT0nbWNwX3Rvb2wnKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQW5hbHl0aWNzVG9vbERldGFpbHNMb2dnaW5nRW5hYmxlZChcbiAgbWNwU2VydmVyVHlwZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBtY3BTZXJ2ZXJCYXNlVXJsOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4pOiBib29sZWFuIHtcbiAgaWYgKHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX0VOVFJZUE9JTlQgPT09ICdsb2NhbC1hZ2VudCcpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIGlmIChtY3BTZXJ2ZXJUeXBlID09PSAnY2xhdWRlYWktcHJveHknKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICBpZiAobWNwU2VydmVyQmFzZVVybCAmJiBpc09mZmljaWFsTWNwVXJsKG1jcFNlcnZlckJhc2VVcmwpKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuLyoqXG4gKiBCdWlsdC1pbiBmaXJzdC1wYXJ0eSBNQ1Agc2VydmVycyB3aG9zZSBuYW1lcyBhcmUgZml4ZWQgcmVzZXJ2ZWQgc3RyaW5ncyxcbiAqIG5vdCB1c2VyLWNvbmZpZ3VyZWQgXHUyMDE0IHNvIGxvZ2dpbmcgdGhlbSBpcyBub3QgUElJLiBDaGVja2VkIGluIGFkZGl0aW9uIHRvXG4gKiBpc0FuYWx5dGljc1Rvb2xEZXRhaWxzTG9nZ2luZ0VuYWJsZWQncyB0cmFuc3BvcnQvVVJMIGdhdGVzLCB3aGljaCBhIHN0ZGlvXG4gKiBidWlsdC1pbiB3b3VsZCBvdGhlcndpc2UgZmFpbC5cbiAqXG4gKiBGZWF0dXJlLWdhdGVkIHNvIHRoZSBzZXQgaXMgZW1wdHkgd2hlbiB0aGUgZmVhdHVyZSBpcyBvZmY6IHRoZSBuYW1lXG4gKiByZXNlcnZhdGlvbiAobWFpbi50c3gsIGNvbmZpZy50cyBhZGRNY3BTZXJ2ZXIpIGlzIGl0c2VsZiBmZWF0dXJlLWdhdGVkLCBzb1xuICogYSB1c2VyLWNvbmZpZ3VyZWQgJ2NvbXB1dGVyLXVzZScgaXMgcG9zc2libGUgaW4gYnVpbGRzIHdpdGhvdXQgdGhlIGZlYXR1cmUuXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHMgKi9cbmNvbnN0IEJVSUxUSU5fTUNQX1NFUlZFUl9OQU1FUzogUmVhZG9ubHlTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoXG4gIGZlYXR1cmUoJ0NISUNBR09fTUNQJylcbiAgICA/IFtcbiAgICAgICAgKFxuICAgICAgICAgIHJlcXVpcmUoJy4uLy4uL3V0aWxzL2NvbXB1dGVyVXNlL2NvbW1vbi5qcycpIGFzIHR5cGVvZiBpbXBvcnQoJy4uLy4uL3V0aWxzL2NvbXB1dGVyVXNlL2NvbW1vbi5qcycpXG4gICAgICAgICkuQ09NUFVURVJfVVNFX01DUF9TRVJWRVJfTkFNRSxcbiAgICAgIF1cbiAgICA6IFtdLFxuKVxuLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG5cbi8qKlxuICogU3ByZWFkYWJsZSBoZWxwZXIgZm9yIGxvZ0V2ZW50IHBheWxvYWRzIFx1MjAxNCByZXR1cm5zIHttY3BTZXJ2ZXJOYW1lLCBtY3BUb29sTmFtZX1cbiAqIGlmIHRoZSBnYXRlIHBhc3NlcywgZW1wdHkgb2JqZWN0IG90aGVyd2lzZS4gQ29uc29saWRhdGVzIHRoZSBpZGVudGljYWwgSUlGRVxuICogcGF0dGVybiBhdCBlYWNoIHRlbmd1X3Rvb2xfdXNlXyogY2FsbCBzaXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWNwVG9vbERldGFpbHNGb3JBbmFseXRpY3MoXG4gIHRvb2xOYW1lOiBzdHJpbmcsXG4gIG1jcFNlcnZlclR5cGU6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgbWNwU2VydmVyQmFzZVVybDogc3RyaW5nIHwgdW5kZWZpbmVkLFxuKToge1xuICBtY3BTZXJ2ZXJOYW1lPzogQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIU1xuICBtY3BUb29sTmFtZT86IEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFNcbn0ge1xuICBjb25zdCBkZXRhaWxzID0gZXh0cmFjdE1jcFRvb2xEZXRhaWxzKHRvb2xOYW1lKVxuICBpZiAoIWRldGFpbHMpIHtcbiAgICByZXR1cm4ge31cbiAgfVxuICBpZiAoXG4gICAgIUJVSUxUSU5fTUNQX1NFUlZFUl9OQU1FUy5oYXMoZGV0YWlscy5zZXJ2ZXJOYW1lKSAmJlxuICAgICFpc0FuYWx5dGljc1Rvb2xEZXRhaWxzTG9nZ2luZ0VuYWJsZWQobWNwU2VydmVyVHlwZSwgbWNwU2VydmVyQmFzZVVybClcbiAgKSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtY3BTZXJ2ZXJOYW1lOiBkZXRhaWxzLnNlcnZlck5hbWUsXG4gICAgbWNwVG9vbE5hbWU6IGRldGFpbHMubWNwVG9vbE5hbWUsXG4gIH1cbn1cblxuLyoqXG4gKiBFeHRyYWN0IE1DUCBzZXJ2ZXIgYW5kIHRvb2wgbmFtZXMgZnJvbSBhIGZ1bGwgTUNQIHRvb2wgbmFtZS5cbiAqIE1DUCB0b29sIG5hbWVzIGZvbGxvdyB0aGUgZm9ybWF0OiBtY3BfXzxzZXJ2ZXI+X188dG9vbD5cbiAqXG4gKiBAcGFyYW0gdG9vbE5hbWUgLSBUaGUgZnVsbCB0b29sIG5hbWUgKGUuZy4sICdtY3BfX3NsYWNrX19yZWFkX2NoYW5uZWwnKVxuICogQHJldHVybnMgT2JqZWN0IHdpdGggc2VydmVyTmFtZSBhbmQgdG9vbE5hbWUsIG9yIHVuZGVmaW5lZCBpZiBub3QgYW4gTUNQIHRvb2xcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RNY3BUb29sRGV0YWlscyh0b29sTmFtZTogc3RyaW5nKTpcbiAgfCB7XG4gICAgICBzZXJ2ZXJOYW1lOiBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTXG4gICAgICBtY3BUb29sTmFtZTogQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIU1xuICAgIH1cbiAgfCB1bmRlZmluZWQge1xuICBpZiAoIXRvb2xOYW1lLnN0YXJ0c1dpdGgoJ21jcF9fJykpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICAvLyBGb3JtYXQ6IG1jcF9fPHNlcnZlcj5fXzx0b29sPlxuICBjb25zdCBwYXJ0cyA9IHRvb2xOYW1lLnNwbGl0KCdfXycpXG4gIGlmIChwYXJ0cy5sZW5ndGggPCAzKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgY29uc3Qgc2VydmVyTmFtZSA9IHBhcnRzWzFdXG4gIC8vIFRvb2wgbmFtZSBtYXkgY29udGFpbiBfXyBzbyByZWpvaW4gcmVtYWluaW5nIHBhcnRzXG4gIGNvbnN0IG1jcFRvb2xOYW1lID0gcGFydHMuc2xpY2UoMikuam9pbignX18nKVxuXG4gIGlmICghc2VydmVyTmFtZSB8fCAhbWNwVG9vbE5hbWUpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNlcnZlck5hbWU6XG4gICAgICBzZXJ2ZXJOYW1lIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgbWNwVG9vbE5hbWU6XG4gICAgICBtY3BUb29sTmFtZSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICB9XG59XG5cbi8qKlxuICogRXh0cmFjdCBza2lsbCBuYW1lIGZyb20gU2tpbGwgdG9vbCBpbnB1dC5cbiAqXG4gKiBAcGFyYW0gdG9vbE5hbWUgLSBUaGUgdG9vbCBuYW1lIChzaG91bGQgYmUgJ1NraWxsJylcbiAqIEBwYXJhbSBpbnB1dCAtIFRoZSB0b29sIGlucHV0IGNvbnRhaW5pbmcgdGhlIHNraWxsIG5hbWVcbiAqIEByZXR1cm5zIFRoZSBza2lsbCBuYW1lIGlmIHRoaXMgaXMgYSBTa2lsbCB0b29sIGNhbGwsIHVuZGVmaW5lZCBvdGhlcndpc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RTa2lsbE5hbWUoXG4gIHRvb2xOYW1lOiBzdHJpbmcsXG4gIGlucHV0OiB1bmtub3duLFxuKTogQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyB8IHVuZGVmaW5lZCB7XG4gIGlmICh0b29sTmFtZSAhPT0gJ1NraWxsJykge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGlmIChcbiAgICB0eXBlb2YgaW5wdXQgPT09ICdvYmplY3QnICYmXG4gICAgaW5wdXQgIT09IG51bGwgJiZcbiAgICAnc2tpbGwnIGluIGlucHV0ICYmXG4gICAgdHlwZW9mIChpbnB1dCBhcyB7IHNraWxsOiB1bmtub3duIH0pLnNraWxsID09PSAnc3RyaW5nJ1xuICApIHtcbiAgICByZXR1cm4gKGlucHV0IGFzIHsgc2tpbGw6IHN0cmluZyB9KVxuICAgICAgLnNraWxsIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFNcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuY29uc3QgVE9PTF9JTlBVVF9TVFJJTkdfVFJVTkNBVEVfQVQgPSA1MTJcbmNvbnN0IFRPT0xfSU5QVVRfU1RSSU5HX1RSVU5DQVRFX1RPID0gMTI4XG5jb25zdCBUT09MX0lOUFVUX01BWF9KU09OX0NIQVJTID0gNCAqIDEwMjRcbmNvbnN0IFRPT0xfSU5QVVRfTUFYX0NPTExFQ1RJT05fSVRFTVMgPSAyMFxuY29uc3QgVE9PTF9JTlBVVF9NQVhfREVQVEggPSAyXG5cbmZ1bmN0aW9uIHRydW5jYXRlVG9vbElucHV0VmFsdWUodmFsdWU6IHVua25vd24sIGRlcHRoID0gMCk6IHVua25vd24ge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPiBUT09MX0lOUFVUX1NUUklOR19UUlVOQ0FURV9BVCkge1xuICAgICAgcmV0dXJuIGAke3ZhbHVlLnNsaWNlKDAsIFRPT0xfSU5QVVRfU1RSSU5HX1RSVU5DQVRFX1RPKX1cdTIwMjZbJHt2YWx1ZS5sZW5ndGh9IGNoYXJzXWBcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHxcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyB8fFxuICAgIHZhbHVlID09PSBudWxsIHx8XG4gICAgdmFsdWUgPT09IHVuZGVmaW5lZFxuICApIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuICBpZiAoZGVwdGggPj0gVE9PTF9JTlBVVF9NQVhfREVQVEgpIHtcbiAgICByZXR1cm4gJzxuZXN0ZWQ+J1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIGNvbnN0IG1hcHBlZCA9IHZhbHVlXG4gICAgICAuc2xpY2UoMCwgVE9PTF9JTlBVVF9NQVhfQ09MTEVDVElPTl9JVEVNUylcbiAgICAgIC5tYXAodiA9PiB0cnVuY2F0ZVRvb2xJbnB1dFZhbHVlKHYsIGRlcHRoICsgMSkpXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA+IFRPT0xfSU5QVVRfTUFYX0NPTExFQ1RJT05fSVRFTVMpIHtcbiAgICAgIG1hcHBlZC5wdXNoKGBcdTIwMjZbJHt2YWx1ZS5sZW5ndGh9IGl0ZW1zXWApXG4gICAgfVxuICAgIHJldHVybiBtYXBwZWRcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgIGNvbnN0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyh2YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilcbiAgICAgIC8vIFNraXAgaW50ZXJuYWwgbWFya2VyIGtleXMgKGUuZy4gX3NpbXVsYXRlZFNlZEVkaXQgcmUtaW50cm9kdWNlZCBieVxuICAgICAgLy8gU2VkRWRpdFBlcm1pc3Npb25SZXF1ZXN0KSBzbyB0aGV5IGRvbid0IGxlYWsgaW50byB0ZWxlbWV0cnkuXG4gICAgICAuZmlsdGVyKChba10pID0+ICFrLnN0YXJ0c1dpdGgoJ18nKSlcbiAgICBjb25zdCBtYXBwZWQgPSBlbnRyaWVzXG4gICAgICAuc2xpY2UoMCwgVE9PTF9JTlBVVF9NQVhfQ09MTEVDVElPTl9JVEVNUylcbiAgICAgIC5tYXAoKFtrLCB2XSkgPT4gW2ssIHRydW5jYXRlVG9vbElucHV0VmFsdWUodiwgZGVwdGggKyAxKV0pXG4gICAgaWYgKGVudHJpZXMubGVuZ3RoID4gVE9PTF9JTlBVVF9NQVhfQ09MTEVDVElPTl9JVEVNUykge1xuICAgICAgbWFwcGVkLnB1c2goWydcdTIwMjYnLCBgJHtlbnRyaWVzLmxlbmd0aH0ga2V5c2BdKVxuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKG1hcHBlZClcbiAgfVxuICByZXR1cm4gU3RyaW5nKHZhbHVlKVxufVxuXG4vKipcbiAqIFNlcmlhbGl6ZSBhIHRvb2wncyBpbnB1dCBhcmd1bWVudHMgZm9yIHRoZSBPVGVsIHRvb2xfcmVzdWx0IGV2ZW50LlxuICogVHJ1bmNhdGVzIGxvbmcgc3RyaW5ncyBhbmQgZGVlcCBuZXN0aW5nIHRvIGtlZXAgdGhlIG91dHB1dCBib3VuZGVkIHdoaWxlXG4gKiBwcmVzZXJ2aW5nIGZvcmVuc2ljYWxseSB1c2VmdWwgZmllbGRzIGxpa2UgZmlsZSBwYXRocywgVVJMcywgYW5kIE1DUCBhcmdzLlxuICogUmV0dXJucyB1bmRlZmluZWQgd2hlbiBPVEVMX0xPR19UT09MX0RFVEFJTFMgaXMgbm90IGVuYWJsZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0VG9vbElucHV0Rm9yVGVsZW1ldHJ5KFxuICBpbnB1dDogdW5rbm93bixcbik6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGlmICghaXNUb29sRGV0YWlsc0xvZ2dpbmdFbmFibGVkKCkpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cbiAgY29uc3QgdHJ1bmNhdGVkID0gdHJ1bmNhdGVUb29sSW5wdXRWYWx1ZShpbnB1dClcbiAgbGV0IGpzb24gPSBqc29uU3RyaW5naWZ5KHRydW5jYXRlZClcbiAgaWYgKGpzb24ubGVuZ3RoID4gVE9PTF9JTlBVVF9NQVhfSlNPTl9DSEFSUykge1xuICAgIGpzb24gPSBqc29uLnNsaWNlKDAsIFRPT0xfSU5QVVRfTUFYX0pTT05fQ0hBUlMpICsgJ1x1MjAyNlt0cnVuY2F0ZWRdJ1xuICB9XG4gIHJldHVybiBqc29uXG59XG5cbi8qKlxuICogTWF4aW11bSBsZW5ndGggZm9yIGZpbGUgZXh0ZW5zaW9ucyB0byBiZSBsb2dnZWQuXG4gKiBFeHRlbnNpb25zIGxvbmdlciB0aGFuIHRoaXMgYXJlIGNvbnNpZGVyZWQgcG90ZW50aWFsbHkgc2Vuc2l0aXZlXG4gKiAoZS5nLiwgaGFzaC1iYXNlZCBmaWxlbmFtZXMgbGlrZSBcImtleS1oYXNoLWFiY2QtMTIzLTQ1NlwiKSBhbmRcbiAqIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCAnb3RoZXInLlxuICovXG5jb25zdCBNQVhfRklMRV9FWFRFTlNJT05fTEVOR1RIID0gMTBcblxuLyoqXG4gKiBFeHRyYWN0cyBhbmQgc2FuaXRpemVzIGEgZmlsZSBleHRlbnNpb24gZm9yIGFuYWx5dGljcyBsb2dnaW5nLlxuICpcbiAqIFVzZXMgTm9kZSdzIHBhdGguZXh0bmFtZSBmb3IgcmVsaWFibGUgY3Jvc3MtcGxhdGZvcm0gZXh0ZW5zaW9uIGV4dHJhY3Rpb24uXG4gKiBSZXR1cm5zICdvdGhlcicgZm9yIGV4dGVuc2lvbnMgZXhjZWVkaW5nIE1BWF9GSUxFX0VYVEVOU0lPTl9MRU5HVEggdG8gYXZvaWRcbiAqIGxvZ2dpbmcgcG90ZW50aWFsbHkgc2Vuc2l0aXZlIGRhdGEgKGxpa2UgaGFzaC1iYXNlZCBmaWxlbmFtZXMpLlxuICpcbiAqIEBwYXJhbSBmaWxlUGF0aCAtIFRoZSBmaWxlIHBhdGggdG8gZXh0cmFjdCB0aGUgZXh0ZW5zaW9uIGZyb21cbiAqIEByZXR1cm5zIFRoZSBzYW5pdGl6ZWQgZXh0ZW5zaW9uLCAnb3RoZXInIGZvciBsb25nIGV4dGVuc2lvbnMsIG9yIHVuZGVmaW5lZCBpZiBubyBleHRlbnNpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbGVFeHRlbnNpb25Gb3JBbmFseXRpY3MoXG4gIGZpbGVQYXRoOiBzdHJpbmcsXG4pOiBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTIHwgdW5kZWZpbmVkIHtcbiAgY29uc3QgZXh0ID0gZXh0bmFtZShmaWxlUGF0aCkudG9Mb3dlckNhc2UoKVxuICBpZiAoIWV4dCB8fCBleHQgPT09ICcuJykge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGNvbnN0IGV4dGVuc2lvbiA9IGV4dC5zbGljZSgxKSAvLyByZW1vdmUgbGVhZGluZyBkb3RcbiAgaWYgKGV4dGVuc2lvbi5sZW5ndGggPiBNQVhfRklMRV9FWFRFTlNJT05fTEVOR1RIKSB7XG4gICAgcmV0dXJuICdvdGhlcicgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIU1xuICB9XG5cbiAgcmV0dXJuIGV4dGVuc2lvbiBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTXG59XG5cbi8qKiBBbGxvdyBsaXN0IG9mIGNvbW1hbmRzIHdlIGV4dHJhY3QgZmlsZSBleHRlbnNpb25zIGZyb20uICovXG5jb25zdCBGSUxFX0NPTU1BTkRTID0gbmV3IFNldChbXG4gICdybScsXG4gICdtdicsXG4gICdjcCcsXG4gICd0b3VjaCcsXG4gICdta2RpcicsXG4gICdjaG1vZCcsXG4gICdjaG93bicsXG4gICdjYXQnLFxuICAnaGVhZCcsXG4gICd0YWlsJyxcbiAgJ3NvcnQnLFxuICAnc3RhdCcsXG4gICdkaWZmJyxcbiAgJ3djJyxcbiAgJ2dyZXAnLFxuICAncmcnLFxuICAnc2VkJyxcbl0pXG5cbi8qKiBSZWdleCB0byBzcGxpdCBiYXNoIGNvbW1hbmRzIG9uIGNvbXBvdW5kIG9wZXJhdG9ycyAoJiYsIHx8LCA7LCB8KS4gKi9cbmNvbnN0IENPTVBPVU5EX09QRVJBVE9SX1JFR0VYID0gL1xccyooPzomJnxcXHxcXHx8Wzt8XSlcXHMqL1xuXG4vKiogUmVnZXggdG8gc3BsaXQgb24gd2hpdGVzcGFjZS4gKi9cbmNvbnN0IFdISVRFU1BBQ0VfUkVHRVggPSAvXFxzKy9cblxuLyoqXG4gKiBFeHRyYWN0cyBmaWxlIGV4dGVuc2lvbnMgZnJvbSBhIGJhc2ggY29tbWFuZCBmb3IgYW5hbHl0aWNzLlxuICogQmVzdC1lZmZvcnQ6IHNwbGl0cyBvbiBvcGVyYXRvcnMgYW5kIHdoaXRlc3BhY2UsIGV4dHJhY3RzIGV4dGVuc2lvbnNcbiAqIGZyb20gbm9uLWZsYWcgYXJncyBvZiBhbGxvd2VkIGNvbW1hbmRzLiBObyBoZWF2eSBzaGVsbCBwYXJzaW5nIG5lZWRlZFxuICogYmVjYXVzZSBncmVwIHBhdHRlcm5zIGFuZCBzZWQgc2NyaXB0cyByYXJlbHkgcmVzZW1ibGUgZmlsZSBleHRlbnNpb25zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsZUV4dGVuc2lvbnNGcm9tQmFzaENvbW1hbmQoXG4gIGNvbW1hbmQ6IHN0cmluZyxcbiAgc2ltdWxhdGVkU2VkRWRpdEZpbGVQYXRoPzogc3RyaW5nLFxuKTogQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyB8IHVuZGVmaW5lZCB7XG4gIGlmICghY29tbWFuZC5pbmNsdWRlcygnLicpICYmICFzaW11bGF0ZWRTZWRFZGl0RmlsZVBhdGgpIHJldHVybiB1bmRlZmluZWRcblxuICBsZXQgcmVzdWx0OiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgY29uc3Qgc2VlbiA9IG5ldyBTZXQ8c3RyaW5nPigpXG5cbiAgaWYgKHNpbXVsYXRlZFNlZEVkaXRGaWxlUGF0aCkge1xuICAgIGNvbnN0IGV4dCA9IGdldEZpbGVFeHRlbnNpb25Gb3JBbmFseXRpY3Moc2ltdWxhdGVkU2VkRWRpdEZpbGVQYXRoKVxuICAgIGlmIChleHQpIHtcbiAgICAgIHNlZW4uYWRkKGV4dClcbiAgICAgIHJlc3VsdCA9IGV4dFxuICAgIH1cbiAgfVxuXG4gIGZvciAoY29uc3Qgc3ViY21kIG9mIGNvbW1hbmQuc3BsaXQoQ09NUE9VTkRfT1BFUkFUT1JfUkVHRVgpKSB7XG4gICAgaWYgKCFzdWJjbWQpIGNvbnRpbnVlXG4gICAgY29uc3QgdG9rZW5zID0gc3ViY21kLnNwbGl0KFdISVRFU1BBQ0VfUkVHRVgpXG4gICAgaWYgKHRva2Vucy5sZW5ndGggPCAyKSBjb250aW51ZVxuXG4gICAgY29uc3QgZmlyc3RUb2tlbiA9IHRva2Vuc1swXSFcbiAgICBjb25zdCBzbGFzaElkeCA9IGZpcnN0VG9rZW4ubGFzdEluZGV4T2YoJy8nKVxuICAgIGNvbnN0IGJhc2VDbWQgPSBzbGFzaElkeCA+PSAwID8gZmlyc3RUb2tlbi5zbGljZShzbGFzaElkeCArIDEpIDogZmlyc3RUb2tlblxuICAgIGlmICghRklMRV9DT01NQU5EUy5oYXMoYmFzZUNtZCkpIGNvbnRpbnVlXG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYXJnID0gdG9rZW5zW2ldIVxuICAgICAgaWYgKGFyZy5jaGFyQ29kZUF0KDApID09PSA0NSAvKiAtICovKSBjb250aW51ZVxuICAgICAgY29uc3QgZXh0ID0gZ2V0RmlsZUV4dGVuc2lvbkZvckFuYWx5dGljcyhhcmcpXG4gICAgICBpZiAoZXh0ICYmICFzZWVuLmhhcyhleHQpKSB7XG4gICAgICAgIHNlZW4uYWRkKGV4dClcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0ID8gcmVzdWx0ICsgJywnICsgZXh0IDogZXh0XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKCFyZXN1bHQpIHJldHVybiB1bmRlZmluZWRcbiAgcmV0dXJuIHJlc3VsdCBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTXG59XG5cbi8qKlxuICogRW52aXJvbm1lbnQgY29udGV4dCBtZXRhZGF0YVxuICovXG5leHBvcnQgdHlwZSBFbnZDb250ZXh0ID0ge1xuICBwbGF0Zm9ybTogc3RyaW5nXG4gIHBsYXRmb3JtUmF3OiBzdHJpbmdcbiAgYXJjaDogc3RyaW5nXG4gIG5vZGVWZXJzaW9uOiBzdHJpbmdcbiAgdGVybWluYWw6IHN0cmluZyB8IG51bGxcbiAgcGFja2FnZU1hbmFnZXJzOiBzdHJpbmdcbiAgcnVudGltZXM6IHN0cmluZ1xuICBpc1J1bm5pbmdXaXRoQnVuOiBib29sZWFuXG4gIGlzQ2k6IGJvb2xlYW5cbiAgaXNDbGF1YmJpdDogYm9vbGVhblxuICBpc0NsYXVkZUNvZGVSZW1vdGU6IGJvb2xlYW5cbiAgaXNMb2NhbEFnZW50TW9kZTogYm9vbGVhblxuICBpc0NvbmR1Y3RvcjogYm9vbGVhblxuICByZW1vdGVFbnZpcm9ubWVudFR5cGU/OiBzdHJpbmdcbiAgY293b3JrZXJUeXBlPzogc3RyaW5nXG4gIGNsYXVkZUNvZGVDb250YWluZXJJZD86IHN0cmluZ1xuICBjbGF1ZGVDb2RlUmVtb3RlU2Vzc2lvbklkPzogc3RyaW5nXG4gIHRhZ3M/OiBzdHJpbmdcbiAgaXNHaXRodWJBY3Rpb246IGJvb2xlYW5cbiAgaXNDbGF1ZGVDb2RlQWN0aW9uOiBib29sZWFuXG4gIGlzQ2xhdWRlQWlBdXRoOiBib29sZWFuXG4gIHZlcnNpb246IHN0cmluZ1xuICB2ZXJzaW9uQmFzZT86IHN0cmluZ1xuICBidWlsZFRpbWU6IHN0cmluZ1xuICBkZXBsb3ltZW50RW52aXJvbm1lbnQ6IHN0cmluZ1xuICBnaXRodWJFdmVudE5hbWU/OiBzdHJpbmdcbiAgZ2l0aHViQWN0aW9uc1J1bm5lckVudmlyb25tZW50Pzogc3RyaW5nXG4gIGdpdGh1YkFjdGlvbnNSdW5uZXJPcz86IHN0cmluZ1xuICBnaXRodWJBY3Rpb25SZWY/OiBzdHJpbmdcbiAgd3NsVmVyc2lvbj86IHN0cmluZ1xuICBsaW51eERpc3Ryb0lkPzogc3RyaW5nXG4gIGxpbnV4RGlzdHJvVmVyc2lvbj86IHN0cmluZ1xuICBsaW51eEtlcm5lbD86IHN0cmluZ1xuICB2Y3M/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBQcm9jZXNzIG1ldHJpY3MgaW5jbHVkZWQgd2l0aCBhbGwgYW5hbHl0aWNzIGV2ZW50cy5cbiAqL1xuZXhwb3J0IHR5cGUgUHJvY2Vzc01ldHJpY3MgPSB7XG4gIHVwdGltZTogbnVtYmVyXG4gIHJzczogbnVtYmVyXG4gIGhlYXBUb3RhbDogbnVtYmVyXG4gIGhlYXBVc2VkOiBudW1iZXJcbiAgZXh0ZXJuYWw6IG51bWJlclxuICBhcnJheUJ1ZmZlcnM6IG51bWJlclxuICBjb25zdHJhaW5lZE1lbW9yeTogbnVtYmVyIHwgdW5kZWZpbmVkXG4gIGNwdVVzYWdlOiBOb2RlSlMuQ3B1VXNhZ2VcbiAgY3B1UGVyY2VudDogbnVtYmVyIHwgdW5kZWZpbmVkXG59XG5cbi8qKlxuICogQ29yZSBldmVudCBtZXRhZGF0YSBzaGFyZWQgYWNyb3NzIGFsbCBhbmFseXRpY3Mgc3lzdGVtc1xuICovXG5leHBvcnQgdHlwZSBFdmVudE1ldGFkYXRhID0ge1xuICBtb2RlbDogc3RyaW5nXG4gIHNlc3Npb25JZDogc3RyaW5nXG4gIHVzZXJUeXBlOiBzdHJpbmdcbiAgYmV0YXM/OiBzdHJpbmdcbiAgZW52Q29udGV4dDogRW52Q29udGV4dFxuICBlbnRyeXBvaW50Pzogc3RyaW5nXG4gIGFnZW50U2RrVmVyc2lvbj86IHN0cmluZ1xuICBpc0ludGVyYWN0aXZlOiBzdHJpbmdcbiAgY2xpZW50VHlwZTogc3RyaW5nXG4gIHByb2Nlc3NNZXRyaWNzPzogUHJvY2Vzc01ldHJpY3NcbiAgc3dlQmVuY2hSdW5JZDogc3RyaW5nXG4gIHN3ZUJlbmNoSW5zdGFuY2VJZDogc3RyaW5nXG4gIHN3ZUJlbmNoVGFza0lkOiBzdHJpbmdcbiAgLy8gU3dhcm0vdGVhbSBhZ2VudCBpZGVudGlmaWNhdGlvbiBmb3IgYW5hbHl0aWNzIGF0dHJpYnV0aW9uXG4gIGFnZW50SWQ/OiBzdHJpbmcgLy8gQ0xBVURFX0NPREVfQUdFTlRfSUQgKGZvcm1hdDogYWdlbnROYW1lQHRlYW1OYW1lKSBvciBzdWJhZ2VudCBVVUlEXG4gIHBhcmVudFNlc3Npb25JZD86IHN0cmluZyAvLyBDTEFVREVfQ09ERV9QQVJFTlRfU0VTU0lPTl9JRCAodGVhbSBsZWFkJ3Mgc2Vzc2lvbilcbiAgYWdlbnRUeXBlPzogJ3RlYW1tYXRlJyB8ICdzdWJhZ2VudCcgfCAnc3RhbmRhbG9uZScgLy8gRGlzdGluZ3Vpc2hlcyBzd2FybSB0ZWFtbWF0ZXMsIEFnZW50IHRvb2wgc3ViYWdlbnRzLCBhbmQgc3RhbmRhbG9uZSBhZ2VudHNcbiAgdGVhbU5hbWU/OiBzdHJpbmcgLy8gVGVhbSBuYW1lIGZvciBzd2FybSBhZ2VudHMgKGZyb20gZW52IHZhciBvciBBc3luY0xvY2FsU3RvcmFnZSlcbiAgc3Vic2NyaXB0aW9uVHlwZT86IHN0cmluZyAvLyBPQXV0aCBzdWJzY3JpcHRpb24gdGllciAobWF4LCBwcm8sIGVudGVycHJpc2UsIHRlYW0pXG4gIHJoPzogc3RyaW5nIC8vIEhhc2hlZCByZXBvIHJlbW90ZSBVUkwgKGZpcnN0IDE2IGNoYXJzIG9mIFNIQTI1NiksIGZvciBqb2luaW5nIHdpdGggc2VydmVyLXNpZGUgZGF0YVxuICBrYWlyb3NBY3RpdmU/OiB0cnVlIC8vIEtBSVJPUyBhc3Npc3RhbnQgbW9kZSBhY3RpdmUgKGFudC1vbmx5OyBzZXQgaW4gbWFpbi50c3ggYWZ0ZXIgZ2F0ZSBjaGVjaylcbiAgc2tpbGxNb2RlPzogJ2Rpc2NvdmVyeScgfCAnY29hY2gnIHwgJ2Rpc2NvdmVyeV9hbmRfY29hY2gnIC8vIFdoaWNoIHNraWxsIHN1cmZhY2luZyBtZWNoYW5pc20ocykgYXJlIGdhdGVkIG9uIChhbnQtb25seTsgZm9yIEJRIHNlc3Npb24gc2VnbWVudGF0aW9uKVxuICBvYnNlcnZlck1vZGU/OiAnYmFja3NlYXQnIHwgJ3NraWxsY29hY2gnIHwgJ2JvdGgnIC8vIFdoaWNoIG9ic2VydmVyIGNsYXNzaWZpZXJzIGFyZSBnYXRlZCBvbiAoYW50LW9ubHk7IGZvciBCUSBjb2hvcnQgc3BsaXRzIG9uIHRlbmd1X2JhY2tzZWF0XyogZXZlbnRzKVxufVxuXG4vKipcbiAqIE9wdGlvbnMgZm9yIGVucmljaGluZyBldmVudCBtZXRhZGF0YVxuICovXG5leHBvcnQgdHlwZSBFbnJpY2hNZXRhZGF0YU9wdGlvbnMgPSB7XG4gIC8vIE1vZGVsIHRvIHVzZSwgZmFsbHMgYmFjayB0byBnZXRNYWluTG9vcE1vZGVsKCkgaWYgbm90IHByb3ZpZGVkXG4gIG1vZGVsPzogdW5rbm93blxuICAvLyBFeHBsaWNpdCBiZXRhcyBzdHJpbmcgKGFscmVhZHkgam9pbmVkKVxuICBiZXRhcz86IHVua25vd25cbiAgLy8gQWRkaXRpb25hbCBtZXRhZGF0YSB0byBpbmNsdWRlIChvcHRpb25hbClcbiAgYWRkaXRpb25hbE1ldGFkYXRhPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbn1cblxuLyoqXG4gKiBHZXQgYWdlbnQgaWRlbnRpZmljYXRpb24gZm9yIGFuYWx5dGljcy5cbiAqIFByaW9yaXR5OiBBc3luY0xvY2FsU3RvcmFnZSBjb250ZXh0IChzdWJhZ2VudHMpID4gZW52IHZhcnMgKHN3YXJtIHRlYW1tYXRlcylcbiAqL1xuZnVuY3Rpb24gZ2V0QWdlbnRJZGVudGlmaWNhdGlvbigpOiB7XG4gIGFnZW50SWQ/OiBzdHJpbmdcbiAgcGFyZW50U2Vzc2lvbklkPzogc3RyaW5nXG4gIGFnZW50VHlwZT86ICd0ZWFtbWF0ZScgfCAnc3ViYWdlbnQnIHwgJ3N0YW5kYWxvbmUnXG4gIHRlYW1OYW1lPzogc3RyaW5nXG59IHtcbiAgLy8gQ2hlY2sgQXN5bmNMb2NhbFN0b3JhZ2UgZmlyc3QgKGZvciBzdWJhZ2VudHMgcnVubmluZyBpbiBzYW1lIHByb2Nlc3MpXG4gIGNvbnN0IGFnZW50Q29udGV4dCA9IGdldEFnZW50Q29udGV4dCgpXG4gIGlmIChhZ2VudENvbnRleHQpIHtcbiAgICBjb25zdCByZXN1bHQ6IFJldHVyblR5cGU8dHlwZW9mIGdldEFnZW50SWRlbnRpZmljYXRpb24+ID0ge1xuICAgICAgYWdlbnRJZDogYWdlbnRDb250ZXh0LmFnZW50SWQsXG4gICAgICBwYXJlbnRTZXNzaW9uSWQ6IGFnZW50Q29udGV4dC5wYXJlbnRTZXNzaW9uSWQsXG4gICAgICBhZ2VudFR5cGU6IGFnZW50Q29udGV4dC5hZ2VudFR5cGUsXG4gICAgfVxuICAgIGlmIChhZ2VudENvbnRleHQuYWdlbnRUeXBlID09PSAndGVhbW1hdGUnKSB7XG4gICAgICByZXN1bHQudGVhbU5hbWUgPSBhZ2VudENvbnRleHQudGVhbU5hbWVcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgLy8gRmFsbCBiYWNrIHRvIHN3YXJtIGhlbHBlcnMgKGZvciBzd2FybSBhZ2VudHMpXG4gIGNvbnN0IGFnZW50SWQgPSBnZXRBZ2VudElkKClcbiAgY29uc3QgcGFyZW50U2Vzc2lvbklkID0gZ2V0VGVhbW1hdGVQYXJlbnRTZXNzaW9uSWQoKVxuICBjb25zdCB0ZWFtTmFtZSA9IGdldFRlYW1OYW1lKClcbiAgY29uc3QgaXNTd2FybUFnZW50ID0gaXNUZWFtbWF0ZSgpXG4gIC8vIEZvciBzdGFuZGFsb25lIGFnZW50cyAoaGF2ZSBhZ2VudCBJRCBidXQgbm90IGEgdGVhbW1hdGUpLCBzZXQgYWdlbnRUeXBlIHRvICdzdGFuZGFsb25lJ1xuICBjb25zdCBhZ2VudFR5cGUgPSBpc1N3YXJtQWdlbnRcbiAgICA/ICgndGVhbW1hdGUnIGFzIGNvbnN0KVxuICAgIDogYWdlbnRJZFxuICAgICAgPyAoJ3N0YW5kYWxvbmUnIGFzIGNvbnN0KVxuICAgICAgOiB1bmRlZmluZWRcbiAgaWYgKGFnZW50SWQgfHwgYWdlbnRUeXBlIHx8IHBhcmVudFNlc3Npb25JZCB8fCB0ZWFtTmFtZSkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi4oYWdlbnRJZCA/IHsgYWdlbnRJZCB9IDoge30pLFxuICAgICAgLi4uKGFnZW50VHlwZSA/IHsgYWdlbnRUeXBlIH0gOiB7fSksXG4gICAgICAuLi4ocGFyZW50U2Vzc2lvbklkID8geyBwYXJlbnRTZXNzaW9uSWQgfSA6IHt9KSxcbiAgICAgIC4uLih0ZWFtTmFtZSA/IHsgdGVhbU5hbWUgfSA6IHt9KSxcbiAgICB9XG4gIH1cblxuICAvLyBDaGVjayBib290c3RyYXAgc3RhdGUgZm9yIHBhcmVudCBzZXNzaW9uIElEIChlLmcuLCBwbGFuIG1vZGUgLT4gaW1wbGVtZW50YXRpb24pXG4gIGNvbnN0IHN0YXRlUGFyZW50U2Vzc2lvbklkID0gZ2V0UGFyZW50U2Vzc2lvbklkRnJvbVN0YXRlKClcbiAgaWYgKHN0YXRlUGFyZW50U2Vzc2lvbklkKSB7XG4gICAgcmV0dXJuIHsgcGFyZW50U2Vzc2lvbklkOiBzdGF0ZVBhcmVudFNlc3Npb25JZCB9XG4gIH1cblxuICByZXR1cm4ge31cbn1cblxuLyoqXG4gKiBFeHRyYWN0IGJhc2UgdmVyc2lvbiBmcm9tIGZ1bGwgdmVyc2lvbiBzdHJpbmcuIFwiMi4wLjM2LWRldi4yMDI1MTEwNy50MTc0MTUwLnNoYTI3MDk2OTlcIiBcdTIxOTIgXCIyLjAuMzYtZGV2XCJcbiAqL1xuY29uc3QgZ2V0VmVyc2lvbkJhc2UgPSBtZW1vaXplKCgpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuICBjb25zdCBtYXRjaCA9IE1BQ1JPLlZFUlNJT04ubWF0Y2goL15cXGQrXFwuXFxkK1xcLlxcZCsoPzotW2Etel0rKT8vKVxuICByZXR1cm4gbWF0Y2ggPyBtYXRjaFswXSA6IHVuZGVmaW5lZFxufSlcblxuLyoqXG4gKiBCdWlsZHMgdGhlIGVudmlyb25tZW50IGNvbnRleHQgb2JqZWN0XG4gKi9cbmNvbnN0IGJ1aWxkRW52Q29udGV4dCA9IG1lbW9pemUoYXN5bmMgKCk6IFByb21pc2U8RW52Q29udGV4dD4gPT4ge1xuICBjb25zdCBbcGFja2FnZU1hbmFnZXJzLCBydW50aW1lcywgbGludXhEaXN0cm9JbmZvLCB2Y3NdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGVudi5nZXRQYWNrYWdlTWFuYWdlcnMoKSxcbiAgICBlbnYuZ2V0UnVudGltZXMoKSxcbiAgICBnZXRMaW51eERpc3Ryb0luZm8oKSxcbiAgICBkZXRlY3RWY3MoKSxcbiAgXSlcblxuICByZXR1cm4ge1xuICAgIHBsYXRmb3JtOiBnZXRIb3N0UGxhdGZvcm1Gb3JBbmFseXRpY3MoKSxcbiAgICAvLyBSYXcgcHJvY2Vzcy5wbGF0Zm9ybSBzbyBmcmVlYnNkL29wZW5ic2QvYWl4L3N1bm9zIGFyZSB2aXNpYmxlIGluIEJRLlxuICAgIC8vIGdldEhvc3RQbGF0Zm9ybUZvckFuYWx5dGljcygpIGJ1Y2tldHMgdGhvc2UgaW50byAnbGludXgnOyBoZXJlIHdlIHdhbnRcbiAgICAvLyB0aGUgdHJ1dGguIENMQVVERV9DT0RFX0hPU1RfUExBVEZPUk0gc3RpbGwgb3ZlcnJpZGVzIGZvciBjb250YWluZXIvcmVtb3RlLlxuICAgIHBsYXRmb3JtUmF3OiBwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9IT1NUX1BMQVRGT1JNIHx8IHByb2Nlc3MucGxhdGZvcm0sXG4gICAgYXJjaDogZW52LmFyY2gsXG4gICAgbm9kZVZlcnNpb246IGVudi5ub2RlVmVyc2lvbixcbiAgICB0ZXJtaW5hbDogZW52RHluYW1pYy50ZXJtaW5hbCxcbiAgICBwYWNrYWdlTWFuYWdlcnM6IHBhY2thZ2VNYW5hZ2Vycy5qb2luKCcsJyksXG4gICAgcnVudGltZXM6IHJ1bnRpbWVzLmpvaW4oJywnKSxcbiAgICBpc1J1bm5pbmdXaXRoQnVuOiBlbnYuaXNSdW5uaW5nV2l0aEJ1bigpLFxuICAgIGlzQ2k6IGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkNJKSxcbiAgICBpc0NsYXViYml0OiBpc0VudlRydXRoeShwcm9jZXNzLmVudi5DTEFVQkJJVCksXG4gICAgaXNDbGF1ZGVDb2RlUmVtb3RlOiBpc0VudlRydXRoeShwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9SRU1PVEUpLFxuICAgIGlzTG9jYWxBZ2VudE1vZGU6IHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX0VOVFJZUE9JTlQgPT09ICdsb2NhbC1hZ2VudCcsXG4gICAgaXNDb25kdWN0b3I6IGVudi5pc0NvbmR1Y3RvcigpLFxuICAgIC4uLihwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9SRU1PVEVfRU5WSVJPTk1FTlRfVFlQRSAmJiB7XG4gICAgICByZW1vdGVFbnZpcm9ubWVudFR5cGU6IHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX1JFTU9URV9FTlZJUk9OTUVOVF9UWVBFLFxuICAgIH0pLFxuICAgIC8vIEdhdGVkIGJ5IGZlYXR1cmUgZmxhZyB0byBwcmV2ZW50IGxlYWtpbmcgXCJjb3dvcmtlclR5cGVcIiBzdHJpbmcgaW4gZXh0ZXJuYWwgYnVpbGRzXG4gICAgLi4uKGZlYXR1cmUoJ0NPV09SS0VSX1RZUEVfVEVMRU1FVFJZJylcbiAgICAgID8gcHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfQ09XT1JLRVJfVFlQRVxuICAgICAgICA/IHsgY293b3JrZXJUeXBlOiBwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9DT1dPUktFUl9UWVBFIH1cbiAgICAgICAgOiB7fVxuICAgICAgOiB7fSksXG4gICAgLi4uKHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX0NPTlRBSU5FUl9JRCAmJiB7XG4gICAgICBjbGF1ZGVDb2RlQ29udGFpbmVySWQ6IHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX0NPTlRBSU5FUl9JRCxcbiAgICB9KSxcbiAgICAuLi4ocHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfUkVNT1RFX1NFU1NJT05fSUQgJiYge1xuICAgICAgY2xhdWRlQ29kZVJlbW90ZVNlc3Npb25JZDogcHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfUkVNT1RFX1NFU1NJT05fSUQsXG4gICAgfSksXG4gICAgLi4uKHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX1RBR1MgJiYge1xuICAgICAgdGFnczogcHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfVEFHUyxcbiAgICB9KSxcbiAgICBpc0dpdGh1YkFjdGlvbjogaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuR0lUSFVCX0FDVElPTlMpLFxuICAgIGlzQ2xhdWRlQ29kZUFjdGlvbjogaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfQUNUSU9OKSxcbiAgICBpc0NsYXVkZUFpQXV0aDogaXNDbGF1ZGVBSVN1YnNjcmliZXIoKSxcbiAgICB2ZXJzaW9uOiBNQUNSTy5WRVJTSU9OLFxuICAgIHZlcnNpb25CYXNlOiBnZXRWZXJzaW9uQmFzZSgpLFxuICAgIGJ1aWxkVGltZTogTUFDUk8uQlVJTERfVElNRSxcbiAgICBkZXBsb3ltZW50RW52aXJvbm1lbnQ6IGVudi5kZXRlY3REZXBsb3ltZW50RW52aXJvbm1lbnQoKSxcbiAgICAuLi4oaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuR0lUSFVCX0FDVElPTlMpICYmIHtcbiAgICAgIGdpdGh1YkV2ZW50TmFtZTogcHJvY2Vzcy5lbnYuR0lUSFVCX0VWRU5UX05BTUUsXG4gICAgICBnaXRodWJBY3Rpb25zUnVubmVyRW52aXJvbm1lbnQ6IHByb2Nlc3MuZW52LlJVTk5FUl9FTlZJUk9OTUVOVCxcbiAgICAgIGdpdGh1YkFjdGlvbnNSdW5uZXJPczogcHJvY2Vzcy5lbnYuUlVOTkVSX09TLFxuICAgICAgZ2l0aHViQWN0aW9uUmVmOiBwcm9jZXNzLmVudi5HSVRIVUJfQUNUSU9OX1BBVEg/LmluY2x1ZGVzKFxuICAgICAgICAnY2xhdWRlLWNvZGUtYWN0aW9uLycsXG4gICAgICApXG4gICAgICAgID8gcHJvY2Vzcy5lbnYuR0lUSFVCX0FDVElPTl9QQVRILnNwbGl0KCdjbGF1ZGUtY29kZS1hY3Rpb24vJylbMV1cbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgfSksXG4gICAgLi4uKGdldFdzbFZlcnNpb24oKSAmJiB7IHdzbFZlcnNpb246IGdldFdzbFZlcnNpb24oKSB9KSxcbiAgICAuLi4obGludXhEaXN0cm9JbmZvID8/IHt9KSxcbiAgICAuLi4odmNzLmxlbmd0aCA+IDAgPyB7IHZjczogdmNzLmpvaW4oJywnKSB9IDoge30pLFxuICB9XG59KVxuXG4vLyAtLVxuLy8gQ1BVJSBkZWx0YSB0cmFja2luZyBcdTIwMTQgaW5oZXJlbnRseSBwcm9jZXNzLWdsb2JhbCwgc2FtZSBwYXR0ZXJuIGFzIGxvZ0JhdGNoL2ZsdXNoVGltZXIgaW4gZGF0YWRvZy50c1xubGV0IHByZXZDcHVVc2FnZTogTm9kZUpTLkNwdVVzYWdlIHwgbnVsbCA9IG51bGxcbmxldCBwcmV2V2FsbFRpbWVNczogbnVtYmVyIHwgbnVsbCA9IG51bGxcblxuLyoqXG4gKiBCdWlsZHMgcHJvY2VzcyBtZXRyaWNzIG9iamVjdCBmb3IgYWxsIHVzZXJzLlxuICovXG5mdW5jdGlvbiBidWlsZFByb2Nlc3NNZXRyaWNzKCk6IFByb2Nlc3NNZXRyaWNzIHwgdW5kZWZpbmVkIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBtZW0gPSBwcm9jZXNzLm1lbW9yeVVzYWdlKClcbiAgICBjb25zdCBjcHUgPSBwcm9jZXNzLmNwdVVzYWdlKClcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG5cbiAgICBsZXQgY3B1UGVyY2VudDogbnVtYmVyIHwgdW5kZWZpbmVkXG4gICAgaWYgKHByZXZDcHVVc2FnZSAmJiBwcmV2V2FsbFRpbWVNcykge1xuICAgICAgY29uc3Qgd2FsbERlbHRhTXMgPSBub3cgLSBwcmV2V2FsbFRpbWVNc1xuICAgICAgaWYgKHdhbGxEZWx0YU1zID4gMCkge1xuICAgICAgICBjb25zdCB1c2VyRGVsdGFVcyA9IGNwdS51c2VyIC0gcHJldkNwdVVzYWdlLnVzZXJcbiAgICAgICAgY29uc3Qgc3lzdGVtRGVsdGFVcyA9IGNwdS5zeXN0ZW0gLSBwcmV2Q3B1VXNhZ2Uuc3lzdGVtXG4gICAgICAgIGNwdVBlcmNlbnQgPVxuICAgICAgICAgICgodXNlckRlbHRhVXMgKyBzeXN0ZW1EZWx0YVVzKSAvICh3YWxsRGVsdGFNcyAqIDEwMDApKSAqIDEwMFxuICAgICAgfVxuICAgIH1cbiAgICBwcmV2Q3B1VXNhZ2UgPSBjcHVcbiAgICBwcmV2V2FsbFRpbWVNcyA9IG5vd1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHVwdGltZTogcHJvY2Vzcy51cHRpbWUoKSxcbiAgICAgIHJzczogbWVtLnJzcyxcbiAgICAgIGhlYXBUb3RhbDogbWVtLmhlYXBUb3RhbCxcbiAgICAgIGhlYXBVc2VkOiBtZW0uaGVhcFVzZWQsXG4gICAgICBleHRlcm5hbDogbWVtLmV4dGVybmFsLFxuICAgICAgYXJyYXlCdWZmZXJzOiBtZW0uYXJyYXlCdWZmZXJzLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzbGludC1wbHVnaW4tbi9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zXG4gICAgICBjb25zdHJhaW5lZE1lbW9yeTogcHJvY2Vzcy5jb25zdHJhaW5lZE1lbW9yeSgpLFxuICAgICAgY3B1VXNhZ2U6IGNwdSxcbiAgICAgIGNwdVBlcmNlbnQsXG4gICAgfVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgY29yZSBldmVudCBtZXRhZGF0YSBzaGFyZWQgYWNyb3NzIGFsbCBhbmFseXRpY3Mgc3lzdGVtcy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGNvbGxlY3RzIGVudmlyb25tZW50LCBydW50aW1lLCBhbmQgY29udGV4dCBpbmZvcm1hdGlvblxuICogdGhhdCBzaG91bGQgYmUgaW5jbHVkZWQgd2l0aCBhbGwgYW5hbHl0aWNzIGV2ZW50cy5cbiAqXG4gKiBAcGFyYW0gb3B0aW9ucyAtIENvbmZpZ3VyYXRpb24gb3B0aW9uc1xuICogQHJldHVybnMgUHJvbWlzZSByZXNvbHZpbmcgdG8gZW5yaWNoZWQgbWV0YWRhdGEgb2JqZWN0XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFdmVudE1ldGFkYXRhKFxuICBvcHRpb25zOiBFbnJpY2hNZXRhZGF0YU9wdGlvbnMgPSB7fSxcbik6IFByb21pc2U8RXZlbnRNZXRhZGF0YT4ge1xuICBjb25zdCBtb2RlbCA9IG9wdGlvbnMubW9kZWwgPyBTdHJpbmcob3B0aW9ucy5tb2RlbCkgOiBnZXRNYWluTG9vcE1vZGVsKClcbiAgY29uc3QgYmV0YXMgPVxuICAgIHR5cGVvZiBvcHRpb25zLmJldGFzID09PSAnc3RyaW5nJ1xuICAgICAgPyBvcHRpb25zLmJldGFzXG4gICAgICA6IGdldE1vZGVsQmV0YXMobW9kZWwpLmpvaW4oJywnKVxuICBjb25zdCBbZW52Q29udGV4dCwgcmVwb1JlbW90ZUhhc2hdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGJ1aWxkRW52Q29udGV4dCgpLFxuICAgIGdldFJlcG9SZW1vdGVIYXNoKCksXG4gIF0pXG4gIGNvbnN0IHByb2Nlc3NNZXRyaWNzID0gYnVpbGRQcm9jZXNzTWV0cmljcygpXG5cbiAgY29uc3QgbWV0YWRhdGE6IEV2ZW50TWV0YWRhdGEgPSB7XG4gICAgbW9kZWwsXG4gICAgc2Vzc2lvbklkOiBnZXRTZXNzaW9uSWQoKSxcbiAgICB1c2VyVHlwZTogcHJvY2Vzcy5lbnYuVVNFUl9UWVBFIHx8ICcnLFxuICAgIC4uLihiZXRhcy5sZW5ndGggPiAwID8geyBiZXRhczogYmV0YXMgfSA6IHt9KSxcbiAgICBlbnZDb250ZXh0LFxuICAgIC4uLihwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9FTlRSWVBPSU5UICYmIHtcbiAgICAgIGVudHJ5cG9pbnQ6IHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX0VOVFJZUE9JTlQsXG4gICAgfSksXG4gICAgLi4uKHByb2Nlc3MuZW52LkNMQVVERV9BR0VOVF9TREtfVkVSU0lPTiAmJiB7XG4gICAgICBhZ2VudFNka1ZlcnNpb246IHByb2Nlc3MuZW52LkNMQVVERV9BR0VOVF9TREtfVkVSU0lPTixcbiAgICB9KSxcbiAgICBpc0ludGVyYWN0aXZlOiBTdHJpbmcoZ2V0SXNJbnRlcmFjdGl2ZSgpKSxcbiAgICBjbGllbnRUeXBlOiBnZXRDbGllbnRUeXBlKCksXG4gICAgLi4uKHByb2Nlc3NNZXRyaWNzICYmIHsgcHJvY2Vzc01ldHJpY3MgfSksXG4gICAgc3dlQmVuY2hSdW5JZDogcHJvY2Vzcy5lbnYuU1dFX0JFTkNIX1JVTl9JRCB8fCAnJyxcbiAgICBzd2VCZW5jaEluc3RhbmNlSWQ6IHByb2Nlc3MuZW52LlNXRV9CRU5DSF9JTlNUQU5DRV9JRCB8fCAnJyxcbiAgICBzd2VCZW5jaFRhc2tJZDogcHJvY2Vzcy5lbnYuU1dFX0JFTkNIX1RBU0tfSUQgfHwgJycsXG4gICAgLy8gU3dhcm0vdGVhbSBhZ2VudCBpZGVudGlmaWNhdGlvblxuICAgIC8vIFByaW9yaXR5OiBBc3luY0xvY2FsU3RvcmFnZSBjb250ZXh0IChzdWJhZ2VudHMpID4gZW52IHZhcnMgKHN3YXJtIHRlYW1tYXRlcylcbiAgICAuLi5nZXRBZ2VudElkZW50aWZpY2F0aW9uKCksXG4gICAgLy8gU3Vic2NyaXB0aW9uIHRpZXIgZm9yIERBVS1ieS10aWVyIGFuYWx5dGljc1xuICAgIC4uLihnZXRTdWJzY3JpcHRpb25UeXBlKCkgJiYge1xuICAgICAgc3Vic2NyaXB0aW9uVHlwZTogZ2V0U3Vic2NyaXB0aW9uVHlwZSgpISxcbiAgICB9KSxcbiAgICAvLyBBc3Npc3RhbnQgbW9kZSB0YWcgXHUyMDE0IGxpdmVzIG91dHNpZGUgbWVtb2l6ZWQgYnVpbGRFbnZDb250ZXh0KCkgYmVjYXVzZVxuICAgIC8vIHNldEthaXJvc0FjdGl2ZSgpIHJ1bnMgYXQgbWFpbi50c3g6fjE2NDgsIGFmdGVyIHRoZSBmaXJzdCBldmVudCBtYXlcbiAgICAvLyBoYXZlIGFscmVhZHkgZmlyZWQgYW5kIG1lbW9pemVkIHRoZSBlbnYuIFJlYWQgZnJlc2ggcGVyLWV2ZW50IGluc3RlYWQuXG4gICAgLi4uKGZlYXR1cmUoJ0tBSVJPUycpICYmIGdldEthaXJvc0FjdGl2ZSgpXG4gICAgICA/IHsga2Fpcm9zQWN0aXZlOiB0cnVlIGFzIGNvbnN0IH1cbiAgICAgIDoge30pLFxuICAgIC8vIFJlcG8gcmVtb3RlIGhhc2ggZm9yIGpvaW5pbmcgd2l0aCBzZXJ2ZXItc2lkZSByZXBvIGJ1bmRsZSBkYXRhXG4gICAgLi4uKHJlcG9SZW1vdGVIYXNoICYmIHsgcmg6IHJlcG9SZW1vdGVIYXNoIH0pLFxuICB9XG5cbiAgcmV0dXJuIG1ldGFkYXRhXG59XG5cblxuLyoqXG4gKiBDb3JlIGV2ZW50IG1ldGFkYXRhIGZvciAxUCBldmVudCBsb2dnaW5nIChzbmFrZV9jYXNlIGZvcm1hdCkuXG4gKi9cbmV4cG9ydCB0eXBlIEZpcnN0UGFydHlFdmVudExvZ2dpbmdDb3JlTWV0YWRhdGEgPSB7XG4gIHNlc3Npb25faWQ6IHN0cmluZ1xuICBtb2RlbDogc3RyaW5nXG4gIHVzZXJfdHlwZTogc3RyaW5nXG4gIGJldGFzPzogc3RyaW5nXG4gIGVudHJ5cG9pbnQ/OiBzdHJpbmdcbiAgYWdlbnRfc2RrX3ZlcnNpb24/OiBzdHJpbmdcbiAgaXNfaW50ZXJhY3RpdmU6IGJvb2xlYW5cbiAgY2xpZW50X3R5cGU6IHN0cmluZ1xuICBzd2VfYmVuY2hfcnVuX2lkPzogc3RyaW5nXG4gIHN3ZV9iZW5jaF9pbnN0YW5jZV9pZD86IHN0cmluZ1xuICBzd2VfYmVuY2hfdGFza19pZD86IHN0cmluZ1xuICAvLyBTd2FybS90ZWFtIGFnZW50IGlkZW50aWZpY2F0aW9uXG4gIGFnZW50X2lkPzogc3RyaW5nXG4gIHBhcmVudF9zZXNzaW9uX2lkPzogc3RyaW5nXG4gIGFnZW50X3R5cGU/OiAndGVhbW1hdGUnIHwgJ3N1YmFnZW50JyB8ICdzdGFuZGFsb25lJ1xuICB0ZWFtX25hbWU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBDb21wbGV0ZSBldmVudCBsb2dnaW5nIG1ldGFkYXRhIGZvcm1hdCBmb3IgMVAgZXZlbnRzLlxuICovXG5leHBvcnQgdHlwZSBGaXJzdFBhcnR5RXZlbnRMb2dnaW5nTWV0YWRhdGEgPSB7XG4gIGVudjogRW52aXJvbm1lbnRNZXRhZGF0YVxuICBwcm9jZXNzPzogc3RyaW5nXG4gIC8vIGF1dGggaXMgYSB0b3AtbGV2ZWwgZmllbGQgb24gQ2xhdWRlQ29kZUludGVybmFsRXZlbnQgKHByb3RvIFB1YmxpY0FwaUF1dGgpLlxuICAvLyBhY2NvdW50X2lkIGlzIGludGVudGlvbmFsbHkgb21pdHRlZCBcdTIwMTQgb25seSBVVUlEIGZpZWxkcyBhcmUgcG9wdWxhdGVkIGNsaWVudC1zaWRlLlxuICBhdXRoPzogUHVibGljQXBpQXV0aFxuICAvLyBjb3JlIGZpZWxkcyBjb3JyZXNwb25kIHRvIHRoZSB0b3AgbGV2ZWwgb2YgQ2xhdWRlQ29kZUludGVybmFsRXZlbnQuXG4gIC8vIFRoZXkgZ2V0IGRpcmVjdGx5IGV4cG9ydGVkIHRvIHRoZWlyIGluZGl2aWR1YWwgY29sdW1ucyBpbiB0aGUgQmlnUXVlcnkgdGFibGVzXG4gIGNvcmU6IEZpcnN0UGFydHlFdmVudExvZ2dpbmdDb3JlTWV0YWRhdGFcbiAgLy8gYWRkaXRpb25hbCBmaWVsZHMgYXJlIHBvcHVsYXRlZCBpbiB0aGUgYWRkaXRpb25hbF9tZXRhZGF0YSBmaWVsZCBvZiB0aGVcbiAgLy8gQ2xhdWRlQ29kZUludGVybmFsRXZlbnQgcHJvdG8uIEluY2x1ZGVzIGJ1dCBpcyBub3QgbGltaXRlZCB0byBpbmZvcm1hdGlvblxuICAvLyB0aGF0IGRpZmZlcnMgYnkgZXZlbnQgdHlwZS5cbiAgYWRkaXRpb25hbDogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbn1cblxuLyoqXG4gKiBDb252ZXJ0IG1ldGFkYXRhIHRvIDFQIGV2ZW50IGxvZ2dpbmcgZm9ybWF0IChzbmFrZV9jYXNlIGZpZWxkcykuXG4gKlxuICogVGhlIC9hcGkvZXZlbnRfbG9nZ2luZy9iYXRjaCBlbmRwb2ludCBleHBlY3RzIHNuYWtlX2Nhc2UgZmllbGQgbmFtZXNcbiAqIGZvciBlbnZpcm9ubWVudCBhbmQgY29yZSBtZXRhZGF0YS5cbiAqXG4gKiBAcGFyYW0gbWV0YWRhdGEgLSBDb3JlIGV2ZW50IG1ldGFkYXRhXG4gKiBAcGFyYW0gYWRkaXRpb25hbE1ldGFkYXRhIC0gQWRkaXRpb25hbCBtZXRhZGF0YSB0byBpbmNsdWRlXG4gKiBAcmV0dXJucyBNZXRhZGF0YSBmb3JtYXR0ZWQgZm9yIDFQIGV2ZW50IGxvZ2dpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvMVBFdmVudEZvcm1hdChcbiAgbWV0YWRhdGE6IEV2ZW50TWV0YWRhdGEsXG4gIHVzZXJNZXRhZGF0YTogQ29yZVVzZXJEYXRhLFxuICBhZGRpdGlvbmFsTWV0YWRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge30sXG4pOiBGaXJzdFBhcnR5RXZlbnRMb2dnaW5nTWV0YWRhdGEge1xuICBjb25zdCB7XG4gICAgZW52Q29udGV4dCxcbiAgICBwcm9jZXNzTWV0cmljcyxcbiAgICByaCxcbiAgICBrYWlyb3NBY3RpdmUsXG4gICAgc2tpbGxNb2RlLFxuICAgIG9ic2VydmVyTW9kZSxcbiAgICAuLi5jb3JlRmllbGRzXG4gIH0gPSBtZXRhZGF0YVxuXG4gIC8vIENvbnZlcnQgZW52Q29udGV4dCB0byBzbmFrZV9jYXNlLlxuICAvLyBJTVBPUlRBTlQ6IGVudiBpcyB0eXBlZCBhcyB0aGUgcHJvdG8tZ2VuZXJhdGVkIEVudmlyb25tZW50TWV0YWRhdGEgc28gdGhhdFxuICAvLyBhZGRpbmcgYSBmaWVsZCBoZXJlIHRoYXQgdGhlIHByb3RvIGRvZXNuJ3QgZGVmaW5lIGlzIGEgY29tcGlsZSBlcnJvci4gVGhlXG4gIC8vIGdlbmVyYXRlZCB0b0pTT04oKSBzZXJpYWxpemVyIHNpbGVudGx5IGRyb3BzIHVua25vd24ga2V5cyBcdTIwMTQgYSBoYW5kLXdyaXR0ZW5cbiAgLy8gcGFyYWxsZWwgdHlwZSBwcmV2aW91c2x5IGxldCAjMTEzMTgsICMxMzkyNCwgIzE5NDQ4LCBhbmQgY293b3JrZXJfdHlwZSBhbGxcbiAgLy8gc2hpcCBmaWVsZHMgdGhhdCBuZXZlciByZWFjaGVkIEJRLlxuICAvLyBBZGRpbmcgYSBmaWVsZD8gVXBkYXRlIHRoZSBtb25vcmVwbyBwcm90byBmaXJzdCAoZ28vY2MtbG9nZ2luZyk6XG4gIC8vICAgZXZlbnRfc2NoZW1hcy8uLi4vY2xhdWRlX2NvZGUvdjEvY2xhdWRlX2NvZGVfaW50ZXJuYWxfZXZlbnQucHJvdG9cbiAgLy8gdGhlbiBydW4gYGJ1biBydW4gZ2VuZXJhdGU6cHJvdG9gIGhlcmUuXG4gIGNvbnN0IGVudjogRW52aXJvbm1lbnRNZXRhZGF0YSA9IHtcbiAgICBwbGF0Zm9ybTogZW52Q29udGV4dC5wbGF0Zm9ybSxcbiAgICBwbGF0Zm9ybV9yYXc6IGVudkNvbnRleHQucGxhdGZvcm1SYXcsXG4gICAgYXJjaDogZW52Q29udGV4dC5hcmNoLFxuICAgIG5vZGVfdmVyc2lvbjogZW52Q29udGV4dC5ub2RlVmVyc2lvbixcbiAgICB0ZXJtaW5hbDogZW52Q29udGV4dC50ZXJtaW5hbCB8fCAndW5rbm93bicsXG4gICAgcGFja2FnZV9tYW5hZ2VyczogZW52Q29udGV4dC5wYWNrYWdlTWFuYWdlcnMsXG4gICAgcnVudGltZXM6IGVudkNvbnRleHQucnVudGltZXMsXG4gICAgaXNfcnVubmluZ193aXRoX2J1bjogZW52Q29udGV4dC5pc1J1bm5pbmdXaXRoQnVuLFxuICAgIGlzX2NpOiBlbnZDb250ZXh0LmlzQ2ksXG4gICAgaXNfY2xhdWJiaXQ6IGVudkNvbnRleHQuaXNDbGF1YmJpdCxcbiAgICBpc19jbGF1ZGVfY29kZV9yZW1vdGU6IGVudkNvbnRleHQuaXNDbGF1ZGVDb2RlUmVtb3RlLFxuICAgIGlzX2xvY2FsX2FnZW50X21vZGU6IGVudkNvbnRleHQuaXNMb2NhbEFnZW50TW9kZSxcbiAgICBpc19jb25kdWN0b3I6IGVudkNvbnRleHQuaXNDb25kdWN0b3IsXG4gICAgaXNfZ2l0aHViX2FjdGlvbjogZW52Q29udGV4dC5pc0dpdGh1YkFjdGlvbixcbiAgICBpc19jbGF1ZGVfY29kZV9hY3Rpb246IGVudkNvbnRleHQuaXNDbGF1ZGVDb2RlQWN0aW9uLFxuICAgIGlzX2NsYXVkZV9haV9hdXRoOiBlbnZDb250ZXh0LmlzQ2xhdWRlQWlBdXRoLFxuICAgIHZlcnNpb246IGVudkNvbnRleHQudmVyc2lvbixcbiAgICBidWlsZF90aW1lOiBlbnZDb250ZXh0LmJ1aWxkVGltZSxcbiAgICBkZXBsb3ltZW50X2Vudmlyb25tZW50OiBlbnZDb250ZXh0LmRlcGxveW1lbnRFbnZpcm9ubWVudCxcbiAgfVxuXG4gIC8vIEFkZCBvcHRpb25hbCBlbnYgZmllbGRzXG4gIGlmIChlbnZDb250ZXh0LnJlbW90ZUVudmlyb25tZW50VHlwZSkge1xuICAgIGVudi5yZW1vdGVfZW52aXJvbm1lbnRfdHlwZSA9IGVudkNvbnRleHQucmVtb3RlRW52aXJvbm1lbnRUeXBlXG4gIH1cbiAgaWYgKGZlYXR1cmUoJ0NPV09SS0VSX1RZUEVfVEVMRU1FVFJZJykgJiYgZW52Q29udGV4dC5jb3dvcmtlclR5cGUpIHtcbiAgICBlbnYuY293b3JrZXJfdHlwZSA9IGVudkNvbnRleHQuY293b3JrZXJUeXBlXG4gIH1cbiAgaWYgKGVudkNvbnRleHQuY2xhdWRlQ29kZUNvbnRhaW5lcklkKSB7XG4gICAgZW52LmNsYXVkZV9jb2RlX2NvbnRhaW5lcl9pZCA9IGVudkNvbnRleHQuY2xhdWRlQ29kZUNvbnRhaW5lcklkXG4gIH1cbiAgaWYgKGVudkNvbnRleHQuY2xhdWRlQ29kZVJlbW90ZVNlc3Npb25JZCkge1xuICAgIGVudi5jbGF1ZGVfY29kZV9yZW1vdGVfc2Vzc2lvbl9pZCA9IGVudkNvbnRleHQuY2xhdWRlQ29kZVJlbW90ZVNlc3Npb25JZFxuICB9XG4gIGlmIChlbnZDb250ZXh0LnRhZ3MpIHtcbiAgICBlbnYudGFncyA9IGVudkNvbnRleHQudGFnc1xuICAgICAgLnNwbGl0KCcsJylcbiAgICAgIC5tYXAodCA9PiB0LnRyaW0oKSlcbiAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgfVxuICBpZiAoZW52Q29udGV4dC5naXRodWJFdmVudE5hbWUpIHtcbiAgICBlbnYuZ2l0aHViX2V2ZW50X25hbWUgPSBlbnZDb250ZXh0LmdpdGh1YkV2ZW50TmFtZVxuICB9XG4gIGlmIChlbnZDb250ZXh0LmdpdGh1YkFjdGlvbnNSdW5uZXJFbnZpcm9ubWVudCkge1xuICAgIGVudi5naXRodWJfYWN0aW9uc19ydW5uZXJfZW52aXJvbm1lbnQgPVxuICAgICAgZW52Q29udGV4dC5naXRodWJBY3Rpb25zUnVubmVyRW52aXJvbm1lbnRcbiAgfVxuICBpZiAoZW52Q29udGV4dC5naXRodWJBY3Rpb25zUnVubmVyT3MpIHtcbiAgICBlbnYuZ2l0aHViX2FjdGlvbnNfcnVubmVyX29zID0gZW52Q29udGV4dC5naXRodWJBY3Rpb25zUnVubmVyT3NcbiAgfVxuICBpZiAoZW52Q29udGV4dC5naXRodWJBY3Rpb25SZWYpIHtcbiAgICBlbnYuZ2l0aHViX2FjdGlvbl9yZWYgPSBlbnZDb250ZXh0LmdpdGh1YkFjdGlvblJlZlxuICB9XG4gIGlmIChlbnZDb250ZXh0LndzbFZlcnNpb24pIHtcbiAgICBlbnYud3NsX3ZlcnNpb24gPSBlbnZDb250ZXh0LndzbFZlcnNpb25cbiAgfVxuICBpZiAoZW52Q29udGV4dC5saW51eERpc3Ryb0lkKSB7XG4gICAgZW52LmxpbnV4X2Rpc3Ryb19pZCA9IGVudkNvbnRleHQubGludXhEaXN0cm9JZFxuICB9XG4gIGlmIChlbnZDb250ZXh0LmxpbnV4RGlzdHJvVmVyc2lvbikge1xuICAgIGVudi5saW51eF9kaXN0cm9fdmVyc2lvbiA9IGVudkNvbnRleHQubGludXhEaXN0cm9WZXJzaW9uXG4gIH1cbiAgaWYgKGVudkNvbnRleHQubGludXhLZXJuZWwpIHtcbiAgICBlbnYubGludXhfa2VybmVsID0gZW52Q29udGV4dC5saW51eEtlcm5lbFxuICB9XG4gIGlmIChlbnZDb250ZXh0LnZjcykge1xuICAgIGVudi52Y3MgPSBlbnZDb250ZXh0LnZjc1xuICB9XG4gIGlmIChlbnZDb250ZXh0LnZlcnNpb25CYXNlKSB7XG4gICAgZW52LnZlcnNpb25fYmFzZSA9IGVudkNvbnRleHQudmVyc2lvbkJhc2VcbiAgfVxuXG4gIC8vIENvbnZlcnQgY29yZSBmaWVsZHMgdG8gc25ha2VfY2FzZVxuICBjb25zdCBjb3JlOiBGaXJzdFBhcnR5RXZlbnRMb2dnaW5nQ29yZU1ldGFkYXRhID0ge1xuICAgIHNlc3Npb25faWQ6IGNvcmVGaWVsZHMuc2Vzc2lvbklkLFxuICAgIG1vZGVsOiBjb3JlRmllbGRzLm1vZGVsLFxuICAgIHVzZXJfdHlwZTogY29yZUZpZWxkcy51c2VyVHlwZSxcbiAgICBpc19pbnRlcmFjdGl2ZTogY29yZUZpZWxkcy5pc0ludGVyYWN0aXZlID09PSAndHJ1ZScsXG4gICAgY2xpZW50X3R5cGU6IGNvcmVGaWVsZHMuY2xpZW50VHlwZSxcbiAgfVxuXG4gIC8vIEFkZCBvdGhlciBjb3JlIGZpZWxkc1xuICBpZiAoY29yZUZpZWxkcy5iZXRhcykge1xuICAgIGNvcmUuYmV0YXMgPSBjb3JlRmllbGRzLmJldGFzXG4gIH1cbiAgaWYgKGNvcmVGaWVsZHMuZW50cnlwb2ludCkge1xuICAgIGNvcmUuZW50cnlwb2ludCA9IGNvcmVGaWVsZHMuZW50cnlwb2ludFxuICB9XG4gIGlmIChjb3JlRmllbGRzLmFnZW50U2RrVmVyc2lvbikge1xuICAgIGNvcmUuYWdlbnRfc2RrX3ZlcnNpb24gPSBjb3JlRmllbGRzLmFnZW50U2RrVmVyc2lvblxuICB9XG4gIGlmIChjb3JlRmllbGRzLnN3ZUJlbmNoUnVuSWQpIHtcbiAgICBjb3JlLnN3ZV9iZW5jaF9ydW5faWQgPSBjb3JlRmllbGRzLnN3ZUJlbmNoUnVuSWRcbiAgfVxuICBpZiAoY29yZUZpZWxkcy5zd2VCZW5jaEluc3RhbmNlSWQpIHtcbiAgICBjb3JlLnN3ZV9iZW5jaF9pbnN0YW5jZV9pZCA9IGNvcmVGaWVsZHMuc3dlQmVuY2hJbnN0YW5jZUlkXG4gIH1cbiAgaWYgKGNvcmVGaWVsZHMuc3dlQmVuY2hUYXNrSWQpIHtcbiAgICBjb3JlLnN3ZV9iZW5jaF90YXNrX2lkID0gY29yZUZpZWxkcy5zd2VCZW5jaFRhc2tJZFxuICB9XG4gIC8vIFN3YXJtL3RlYW0gYWdlbnQgaWRlbnRpZmljYXRpb25cbiAgaWYgKGNvcmVGaWVsZHMuYWdlbnRJZCkge1xuICAgIGNvcmUuYWdlbnRfaWQgPSBjb3JlRmllbGRzLmFnZW50SWRcbiAgfVxuICBpZiAoY29yZUZpZWxkcy5wYXJlbnRTZXNzaW9uSWQpIHtcbiAgICBjb3JlLnBhcmVudF9zZXNzaW9uX2lkID0gY29yZUZpZWxkcy5wYXJlbnRTZXNzaW9uSWRcbiAgfVxuICBpZiAoY29yZUZpZWxkcy5hZ2VudFR5cGUpIHtcbiAgICBjb3JlLmFnZW50X3R5cGUgPSBjb3JlRmllbGRzLmFnZW50VHlwZVxuICB9XG4gIGlmIChjb3JlRmllbGRzLnRlYW1OYW1lKSB7XG4gICAgY29yZS50ZWFtX25hbWUgPSBjb3JlRmllbGRzLnRlYW1OYW1lXG4gIH1cblxuICAvLyBNYXAgdXNlck1ldGFkYXRhIHRvIG91dHB1dCBmaWVsZHMuXG4gIC8vIEJhc2VkIG9uIHNyYy91dGlscy91c2VyLnRzIGdldFVzZXIoKSwgYnV0IHdpdGggZmllbGRzIHByZXNlbnQgaW4gb3RoZXJcbiAgLy8gcGFydHMgb2YgQ2xhdWRlQ29kZUludGVybmFsRXZlbnQgZGVkdXBsaWNhdGVkLlxuICAvLyBDb252ZXJ0IGNhbWVsQ2FzZSBHaXRIdWJBY3Rpb25zTWV0YWRhdGEgdG8gc25ha2VfY2FzZSBmb3IgMVAgQVBJXG4gIC8vIE5vdGU6IGdpdGh1Yl9hY3Rpb25zX21ldGFkYXRhIGlzIHBsYWNlZCBpbnNpZGUgZW52IChFbnZpcm9ubWVudE1ldGFkYXRhKVxuICAvLyByYXRoZXIgdGhhbiBhdCB0aGUgdG9wIGxldmVsIG9mIENsYXVkZUNvZGVJbnRlcm5hbEV2ZW50XG4gIGlmICh1c2VyTWV0YWRhdGEuZ2l0aHViQWN0aW9uc01ldGFkYXRhKSB7XG4gICAgY29uc3QgZ2hNZXRhID0gdXNlck1ldGFkYXRhLmdpdGh1YkFjdGlvbnNNZXRhZGF0YVxuICAgIGVudi5naXRodWJfYWN0aW9uc19tZXRhZGF0YSA9IHtcbiAgICAgIGFjdG9yX2lkOiBnaE1ldGEuYWN0b3JJZCxcbiAgICAgIHJlcG9zaXRvcnlfaWQ6IGdoTWV0YS5yZXBvc2l0b3J5SWQsXG4gICAgICByZXBvc2l0b3J5X293bmVyX2lkOiBnaE1ldGEucmVwb3NpdG9yeU93bmVySWQsXG4gICAgfVxuICB9XG5cbiAgbGV0IGF1dGg6IFB1YmxpY0FwaUF1dGggfCB1bmRlZmluZWRcbiAgaWYgKHVzZXJNZXRhZGF0YS5hY2NvdW50VXVpZCB8fCB1c2VyTWV0YWRhdGEub3JnYW5pemF0aW9uVXVpZCkge1xuICAgIGF1dGggPSB7XG4gICAgICBhY2NvdW50X3V1aWQ6IHVzZXJNZXRhZGF0YS5hY2NvdW50VXVpZCxcbiAgICAgIG9yZ2FuaXphdGlvbl91dWlkOiB1c2VyTWV0YWRhdGEub3JnYW5pemF0aW9uVXVpZCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVudixcbiAgICAuLi4ocHJvY2Vzc01ldHJpY3MgJiYge1xuICAgICAgcHJvY2VzczogQnVmZmVyLmZyb20oanNvblN0cmluZ2lmeShwcm9jZXNzTWV0cmljcykpLnRvU3RyaW5nKCdiYXNlNjQnKSxcbiAgICB9KSxcbiAgICAuLi4oYXV0aCAmJiB7IGF1dGggfSksXG4gICAgY29yZSxcbiAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAuLi4ocmggJiYgeyByaCB9KSxcbiAgICAgIC4uLihrYWlyb3NBY3RpdmUgJiYgeyBpc19hc3Npc3RhbnRfbW9kZTogdHJ1ZSB9KSxcbiAgICAgIC4uLihza2lsbE1vZGUgJiYgeyBza2lsbF9tb2RlOiBza2lsbE1vZGUgfSksXG4gICAgICAuLi4ob2JzZXJ2ZXJNb2RlICYmIHsgb2JzZXJ2ZXJfbW9kZTogb2JzZXJ2ZXJNb2RlIH0pLFxuICAgICAgLi4uYWRkaXRpb25hbE1ldGFkYXRhLFxuICAgIH0sXG4gIH1cbn1cbiIsICIvKipcbiAqIEJldGEgU2Vzc2lvbiBUcmFjaW5nIGZvciBDbGF1ZGUgQ29kZVxuICpcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIGJldGEgdHJhY2luZyBmZWF0dXJlcyBlbmFibGVkIHdoZW5cbiAqIEVOQUJMRV9CRVRBX1RSQUNJTkdfREVUQUlMRUQ9MSBhbmQgQkVUQV9UUkFDSU5HX0VORFBPSU5UIGFyZSBzZXQuXG4gKlxuICogRm9yIGV4dGVybmFsIHVzZXJzLCB0cmFjaW5nIGlzIGVuYWJsZWQgaW4gU0RLL2hlYWRsZXNzIG1vZGUsIG9yIGluXG4gKiBpbnRlcmFjdGl2ZSBtb2RlIHdoZW4gdGhlIG9yZyBpcyBhbGxvd2xpc3RlZCB2aWEgdGhlXG4gKiB0ZW5ndV90cmFjZV9sYW50ZXJuIEdyb3d0aEJvb2sgZ2F0ZS5cbiAqIEZvciBhbnQgdXNlcnMsIHRyYWNpbmcgaXMgZW5hYmxlZCBpbiBhbGwgbW9kZXMuXG4gKlxuICogVmlzaWJpbGl0eSBSdWxlczpcbiAqIHwgQ29udGVudCAgICAgICAgICB8IEV4dGVybmFsIHwgQW50ICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS18LS0tLS0tfFxuICogfCBTeXN0ZW0gcHJvbXB0cyAgIHwgXHUyNzA1ICAgICAgICAgICAgICAgICAgfCBcdTI3MDUgICB8XG4gKiB8IE1vZGVsIG91dHB1dCAgICAgfCBcdTI3MDUgICAgICAgICAgICAgICAgICB8IFx1MjcwNSAgIHxcbiAqIHwgVGhpbmtpbmcgb3V0cHV0ICB8IFx1Mjc0QyAgICAgICAgICAgICAgICAgIHwgXHUyNzA1ICAgfFxuICogfCBUb29scyAgICAgICAgICAgIHwgXHUyNzA1ICAgICAgICAgICAgICAgICAgfCBcdTI3MDUgICB8XG4gKiB8IG5ld19jb250ZXh0ICAgICAgfCBcdTI3MDUgICAgICAgICAgICAgICAgICB8IFx1MjcwNSAgIHxcbiAqXG4gKiBGZWF0dXJlczpcbiAqIC0gUGVyLWFnZW50IG1lc3NhZ2UgdHJhY2tpbmcgd2l0aCBoYXNoLWJhc2VkIGRlZHVwbGljYXRpb25cbiAqIC0gU3lzdGVtIHByb21wdCBsb2dnaW5nIChvbmNlIHBlciB1bmlxdWUgaGFzaClcbiAqIC0gSG9vayBleGVjdXRpb24gc3BhbnNcbiAqIC0gRGV0YWlsZWQgbmV3X2NvbnRleHQgYXR0cmlidXRlcyBmb3IgTExNIHJlcXVlc3RzXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBTcGFuIH0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvYXBpJ1xuaW1wb3J0IHsgY3JlYXRlSGFzaCB9IGZyb20gJ2NyeXB0bydcbmltcG9ydCB7IGdldElzTm9uSW50ZXJhY3RpdmVTZXNzaW9uIH0gZnJvbSAnLi4vLi4vYm9vdHN0cmFwL3N0YXRlLmpzJ1xuaW1wb3J0IHsgZ2V0RmVhdHVyZVZhbHVlX0NBQ0hFRF9NQVlfQkVfU1RBTEUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbmFseXRpY3MvZ3Jvd3RoYm9vay5qcydcbmltcG9ydCB7IHNhbml0aXplVG9vbE5hbWVGb3JBbmFseXRpY3MgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbmFseXRpY3MvbWV0YWRhdGEuanMnXG5pbXBvcnQgdHlwZSB7IEFzc2lzdGFudE1lc3NhZ2UsIFVzZXJNZXNzYWdlIH0gZnJvbSAnLi4vLi4vdHlwZXMvbWVzc2FnZS5qcydcbmltcG9ydCB7IGlzRW52VHJ1dGh5IH0gZnJvbSAnLi4vZW52VXRpbHMuanMnXG5pbXBvcnQgeyBqc29uUGFyc2UsIGpzb25TdHJpbmdpZnkgfSBmcm9tICcuLi9zbG93T3BlcmF0aW9ucy5qcydcbmltcG9ydCB7IGxvZ09UZWxFdmVudCB9IGZyb20gJy4vZXZlbnRzLmpzJ1xuXG4vLyBNZXNzYWdlIHR5cGUgZm9yIEFQSSBjYWxscyAoVXNlck1lc3NhZ2Ugb3IgQXNzaXN0YW50TWVzc2FnZSlcbnR5cGUgQVBJTWVzc2FnZSA9IFVzZXJNZXNzYWdlIHwgQXNzaXN0YW50TWVzc2FnZVxuXG4vKipcbiAqIFRyYWNrIGhhc2hlcyB3ZSd2ZSBhbHJlYWR5IGxvZ2dlZCB0aGlzIHNlc3Npb24gKHN5c3RlbSBwcm9tcHRzLCB0b29scywgZXRjKS5cbiAqXG4gKiBXSFk6IFN5c3RlbSBwcm9tcHRzIGFuZCB0b29sIHNjaGVtYXMgYXJlIGxhcmdlIGFuZCByYXJlbHkgY2hhbmdlIHdpdGhpbiBhIHNlc3Npb24uXG4gKiBTZW5kaW5nIGZ1bGwgY29udGVudCBvbiBldmVyeSByZXF1ZXN0IHdvdWxkIGJlIHdhc3RlZnVsLiBJbnN0ZWFkLCB3ZSBoYXNoIGFuZFxuICogb25seSBsb2cgdGhlIGZ1bGwgY29udGVudCBvbmNlIHBlciB1bmlxdWUgaGFzaC5cbiAqL1xuY29uc3Qgc2Vlbkhhc2hlcyA9IG5ldyBTZXQ8c3RyaW5nPigpXG5cbi8qKlxuICogVHJhY2sgdGhlIGxhc3QgcmVwb3J0ZWQgbWVzc2FnZSBoYXNoIHBlciBxdWVyeVNvdXJjZSAoYWdlbnQpIGZvciBpbmNyZW1lbnRhbCBjb250ZXh0LlxuICpcbiAqIFdIWTogV2hlbiBkZWJ1Z2dpbmcgdHJhY2VzLCB3ZSB3YW50IHRvIHNlZSB3aGF0IE5FVyBpbmZvcm1hdGlvbiB3YXMgYWRkZWQgZWFjaCB0dXJuLFxuICogbm90IHRoZSBlbnRpcmUgY29udmVyc2F0aW9uIGhpc3RvcnkgKHdoaWNoIGNhbiBiZSBodWdlKS4gQnkgdHJhY2tpbmcgdGhlIGxhc3QgbWVzc2FnZVxuICogd2UgcmVwb3J0ZWQgcGVyIGFnZW50LCB3ZSBjYW4gY29tcHV0ZSBhbmQgc2VuZCBvbmx5IHRoZSBkZWx0YSAobmV3IG1lc3NhZ2VzIHNpbmNlXG4gKiB0aGUgbGFzdCByZXF1ZXN0KS4gVGhpcyBpcyB0cmFja2VkIHBlci1hZ2VudCAocXVlcnlTb3VyY2UpIGJlY2F1c2UgZGlmZmVyZW50IGFnZW50c1xuICogKG1haW4gdGhyZWFkLCBzdWJhZ2VudHMsIHdhcm11cCByZXF1ZXN0cykgaGF2ZSBpbmRlcGVuZGVudCBjb252ZXJzYXRpb24gY29udGV4dHMuXG4gKi9cbmNvbnN0IGxhc3RSZXBvcnRlZE1lc3NhZ2VIYXNoID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKVxuXG4vKipcbiAqIENsZWFyIHRyYWNraW5nIHN0YXRlIGFmdGVyIGNvbXBhY3Rpb24uXG4gKiBPbGQgaGFzaGVzIGFyZSBpcnJlbGV2YW50IG9uY2UgbWVzc2FnZXMgaGF2ZSBiZWVuIHJlcGxhY2VkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJCZXRhVHJhY2luZ1N0YXRlKCk6IHZvaWQge1xuICBzZWVuSGFzaGVzLmNsZWFyKClcbiAgbGFzdFJlcG9ydGVkTWVzc2FnZUhhc2guY2xlYXIoKVxufVxuXG5jb25zdCBNQVhfQ09OVEVOVF9TSVpFID0gNjAgKiAxMDI0IC8vIDYwS0IgKEhvbmV5Y29tYiBsaW1pdCBpcyA2NEtCLCBzdGF5aW5nIHNhZmUpXG5cbi8qKlxuICogQ2hlY2sgaWYgYmV0YSBkZXRhaWxlZCB0cmFjaW5nIGlzIGVuYWJsZWQuXG4gKiAtIFJlcXVpcmVzIEVOQUJMRV9CRVRBX1RSQUNJTkdfREVUQUlMRUQ9MSBhbmQgQkVUQV9UUkFDSU5HX0VORFBPSU5UXG4gKiAtIEZvciBleHRlcm5hbCB1c2VycywgZW5hYmxlZCBpbiBTREsvaGVhZGxlc3MgbW9kZSBPUiB3aGVuIG9yZyBpc1xuICogICBhbGxvd2xpc3RlZCB2aWEgdGhlIHRlbmd1X3RyYWNlX2xhbnRlcm4gR3Jvd3RoQm9vayBnYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0JldGFUcmFjaW5nRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgY29uc3QgYmFzZUVuYWJsZWQgPVxuICAgIGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkVOQUJMRV9CRVRBX1RSQUNJTkdfREVUQUlMRUQpICYmXG4gICAgQm9vbGVhbihwcm9jZXNzLmVudi5CRVRBX1RSQUNJTkdfRU5EUE9JTlQpXG5cbiAgaWYgKCFiYXNlRW5hYmxlZCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gRm9yIGV4dGVybmFsIHVzZXJzLCBlbmFibGUgaW4gU0RLL2hlYWRsZXNzIG1vZGUgT1Igd2hlbiBvcmcgaXMgYWxsb3dsaXN0ZWQuXG4gIC8vIEdhdGUgcmVhZHMgZnJvbSBkaXNrIGNhY2hlLCBzbyBmaXJzdCBydW4gYWZ0ZXIgYWxsb3dsaXN0aW5nIHJldHVybnMgZmFsc2U7XG4gIC8vIHdvcmtzIGZyb20gc2Vjb25kIHJ1biBvbndhcmQgKHNhbWUgYmVoYXZpb3IgYXMgZW5oYW5jZWRfdGVsZW1ldHJ5X2JldGEpLlxuICBpZiAocHJvY2Vzcy5lbnYuVVNFUl9UWVBFICE9PSAnYW50Jykge1xuICAgIHJldHVybiAoXG4gICAgICBnZXRJc05vbkludGVyYWN0aXZlU2Vzc2lvbigpIHx8XG4gICAgICBnZXRGZWF0dXJlVmFsdWVfQ0FDSEVEX01BWV9CRV9TVEFMRSgndGVuZ3VfdHJhY2VfbGFudGVybicsIGZhbHNlKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG5cbi8qKlxuICogVHJ1bmNhdGUgY29udGVudCB0byBmaXQgd2l0aGluIEhvbmV5Y29tYiBsaW1pdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cnVuY2F0ZUNvbnRlbnQoXG4gIGNvbnRlbnQ6IHN0cmluZyxcbiAgbWF4U2l6ZTogbnVtYmVyID0gTUFYX0NPTlRFTlRfU0laRSxcbik6IHsgY29udGVudDogc3RyaW5nOyB0cnVuY2F0ZWQ6IGJvb2xlYW4gfSB7XG4gIGlmIChjb250ZW50Lmxlbmd0aCA8PSBtYXhTaXplKSB7XG4gICAgcmV0dXJuIHsgY29udGVudCwgdHJ1bmNhdGVkOiBmYWxzZSB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNvbnRlbnQ6XG4gICAgICBjb250ZW50LnNsaWNlKDAsIG1heFNpemUpICtcbiAgICAgICdcXG5cXG5bVFJVTkNBVEVEIC0gQ29udGVudCBleGNlZWRzIDYwS0IgbGltaXRdJyxcbiAgICB0cnVuY2F0ZWQ6IHRydWUsXG4gIH1cbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBhIHNob3J0IGhhc2ggKGZpcnN0IDEyIGhleCBjaGFycyBvZiBTSEEtMjU2KS5cbiAqL1xuZnVuY3Rpb24gc2hvcnRIYXNoKGNvbnRlbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBjcmVhdGVIYXNoKCdzaGEyNTYnKS51cGRhdGUoY29udGVudCkuZGlnZXN0KCdoZXgnKS5zbGljZSgwLCAxMilcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBhIGhhc2ggZm9yIGEgc3lzdGVtIHByb21wdC5cbiAqL1xuZnVuY3Rpb24gaGFzaFN5c3RlbVByb21wdChzeXN0ZW1Qcm9tcHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBgc3BfJHtzaG9ydEhhc2goc3lzdGVtUHJvbXB0KX1gXG59XG5cbi8qKlxuICogR2VuZXJhdGUgYSBoYXNoIGZvciBhIG1lc3NhZ2UgYmFzZWQgb24gaXRzIGNvbnRlbnQuXG4gKi9cbmZ1bmN0aW9uIGhhc2hNZXNzYWdlKG1lc3NhZ2U6IEFQSU1lc3NhZ2UpOiBzdHJpbmcge1xuICBjb25zdCBjb250ZW50ID0ganNvblN0cmluZ2lmeShtZXNzYWdlLm1lc3NhZ2UuY29udGVudClcbiAgcmV0dXJuIGBtc2dfJHtzaG9ydEhhc2goY29udGVudCl9YFxufVxuXG4vLyBSZWdleCB0byBkZXRlY3QgY29udGVudCB3cmFwcGVkIGluIDxzeXN0ZW0tcmVtaW5kZXI+IHRhZ3NcbmNvbnN0IFNZU1RFTV9SRU1JTkRFUl9SRUdFWCA9XG4gIC9ePHN5c3RlbS1yZW1pbmRlcj5cXG4/KFtcXHNcXFNdKj8pXFxuPzxcXC9zeXN0ZW0tcmVtaW5kZXI+JC9cblxuLyoqXG4gKiBDaGVjayBpZiB0ZXh0IGlzIGVudGlyZWx5IGEgc3lzdGVtIHJlbWluZGVyICh3cmFwcGVkIGluIDxzeXN0ZW0tcmVtaW5kZXI+IHRhZ3MpLlxuICogUmV0dXJucyB0aGUgaW5uZXIgY29udGVudCBpZiBpdCBpcywgbnVsbCBvdGhlcndpc2UuXG4gKi9cbmZ1bmN0aW9uIGV4dHJhY3RTeXN0ZW1SZW1pbmRlckNvbnRlbnQodGV4dDogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IG1hdGNoID0gdGV4dC50cmltKCkubWF0Y2goU1lTVEVNX1JFTUlOREVSX1JFR0VYKVxuICByZXR1cm4gbWF0Y2ggJiYgbWF0Y2hbMV0gPyBtYXRjaFsxXS50cmltKCkgOiBudWxsXG59XG5cbi8qKlxuICogUmVzdWx0IG9mIGZvcm1hdHRpbmcgbWVzc2FnZXMgLSBzZXBhcmF0ZXMgcmVndWxhciBjb250ZW50IGZyb20gc3lzdGVtIHJlbWluZGVycy5cbiAqL1xuaW50ZXJmYWNlIEZvcm1hdHRlZE1lc3NhZ2VzIHtcbiAgY29udGV4dFBhcnRzOiBzdHJpbmdbXVxuICBzeXN0ZW1SZW1pbmRlcnM6IHN0cmluZ1tdXG59XG5cbi8qKlxuICogRm9ybWF0IHVzZXIgbWVzc2FnZXMgZm9yIG5ld19jb250ZXh0IGRpc3BsYXksIHNlcGFyYXRpbmcgc3lzdGVtIHJlbWluZGVycy5cbiAqIE9ubHkgaGFuZGxlcyB1c2VyIG1lc3NhZ2VzIChhc3Npc3RhbnQgbWVzc2FnZXMgYXJlIGZpbHRlcmVkIG91dCBiZWZvcmUgdGhpcyBpcyBjYWxsZWQpLlxuICovXG5mdW5jdGlvbiBmb3JtYXRNZXNzYWdlc0ZvckNvbnRleHQobWVzc2FnZXM6IFVzZXJNZXNzYWdlW10pOiBGb3JtYXR0ZWRNZXNzYWdlcyB7XG4gIGNvbnN0IGNvbnRleHRQYXJ0czogc3RyaW5nW10gPSBbXVxuICBjb25zdCBzeXN0ZW1SZW1pbmRlcnM6IHN0cmluZ1tdID0gW11cblxuICBmb3IgKGNvbnN0IG1lc3NhZ2Ugb2YgbWVzc2FnZXMpIHtcbiAgICBjb25zdCBjb250ZW50ID0gbWVzc2FnZS5tZXNzYWdlLmNvbnRlbnRcbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCByZW1pbmRlckNvbnRlbnQgPSBleHRyYWN0U3lzdGVtUmVtaW5kZXJDb250ZW50KGNvbnRlbnQpXG4gICAgICBpZiAocmVtaW5kZXJDb250ZW50KSB7XG4gICAgICAgIHN5c3RlbVJlbWluZGVycy5wdXNoKHJlbWluZGVyQ29udGVudClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHRQYXJ0cy5wdXNoKGBbVVNFUl1cXG4ke2NvbnRlbnR9YClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY29udGVudCkpIHtcbiAgICAgIGZvciAoY29uc3QgYmxvY2sgb2YgY29udGVudCkge1xuICAgICAgICBpZiAoYmxvY2sudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgY29uc3QgcmVtaW5kZXJDb250ZW50ID0gZXh0cmFjdFN5c3RlbVJlbWluZGVyQ29udGVudChibG9jay50ZXh0KVxuICAgICAgICAgIGlmIChyZW1pbmRlckNvbnRlbnQpIHtcbiAgICAgICAgICAgIHN5c3RlbVJlbWluZGVycy5wdXNoKHJlbWluZGVyQ29udGVudClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGV4dFBhcnRzLnB1c2goYFtVU0VSXVxcbiR7YmxvY2sudGV4dH1gKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChibG9jay50eXBlID09PSAndG9vbF9yZXN1bHQnKSB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0Q29udGVudCA9XG4gICAgICAgICAgICB0eXBlb2YgYmxvY2suY29udGVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgPyBibG9jay5jb250ZW50XG4gICAgICAgICAgICAgIDoganNvblN0cmluZ2lmeShibG9jay5jb250ZW50KVxuICAgICAgICAgIC8vIFRvb2wgcmVzdWx0cyBjYW4gYWxzbyBjb250YWluIHN5c3RlbSByZW1pbmRlcnMgKGUuZy4sIG1hbHdhcmUgd2FybmluZylcbiAgICAgICAgICBjb25zdCByZW1pbmRlckNvbnRlbnQgPSBleHRyYWN0U3lzdGVtUmVtaW5kZXJDb250ZW50KHJlc3VsdENvbnRlbnQpXG4gICAgICAgICAgaWYgKHJlbWluZGVyQ29udGVudCkge1xuICAgICAgICAgICAgc3lzdGVtUmVtaW5kZXJzLnB1c2gocmVtaW5kZXJDb250ZW50KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZXh0UGFydHMucHVzaChcbiAgICAgICAgICAgICAgYFtUT09MIFJFU1VMVDogJHtibG9jay50b29sX3VzZV9pZH1dXFxuJHtyZXN1bHRDb250ZW50fWAsXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgY29udGV4dFBhcnRzLCBzeXN0ZW1SZW1pbmRlcnMgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExMTVJlcXVlc3ROZXdDb250ZXh0IHtcbiAgLyoqIFN5c3RlbSBwcm9tcHQgKHR5cGljYWxseSBvbmx5IG9uIGZpcnN0IHJlcXVlc3Qgb3IgaWYgY2hhbmdlZCkgKi9cbiAgc3lzdGVtUHJvbXB0Pzogc3RyaW5nXG4gIC8qKiBRdWVyeSBzb3VyY2UgaWRlbnRpZnlpbmcgdGhlIGFnZW50L3B1cnBvc2UgKGUuZy4sICdyZXBsX21haW5fdGhyZWFkJywgJ2FnZW50OmJ1aWx0aW4nKSAqL1xuICBxdWVyeVNvdXJjZT86IHN0cmluZ1xuICAvKiogVG9vbCBzY2hlbWFzIHNlbnQgd2l0aCB0aGUgcmVxdWVzdCAqL1xuICB0b29scz86IHN0cmluZ1xufVxuXG4vKipcbiAqIEFkZCBiZXRhIGF0dHJpYnV0ZXMgdG8gYW4gaW50ZXJhY3Rpb24gc3Bhbi5cbiAqIEFkZHMgbmV3X2NvbnRleHQgd2l0aCB0aGUgdXNlciBwcm9tcHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRCZXRhSW50ZXJhY3Rpb25BdHRyaWJ1dGVzKFxuICBzcGFuOiBTcGFuLFxuICB1c2VyUHJvbXB0OiBzdHJpbmcsXG4pOiB2b2lkIHtcbiAgaWYgKCFpc0JldGFUcmFjaW5nRW5hYmxlZCgpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCB7IGNvbnRlbnQ6IHRydW5jYXRlZFByb21wdCwgdHJ1bmNhdGVkIH0gPSB0cnVuY2F0ZUNvbnRlbnQoXG4gICAgYFtVU0VSIFBST01QVF1cXG4ke3VzZXJQcm9tcHR9YCxcbiAgKVxuICBzcGFuLnNldEF0dHJpYnV0ZXMoe1xuICAgIG5ld19jb250ZXh0OiB0cnVuY2F0ZWRQcm9tcHQsXG4gICAgLi4uKHRydW5jYXRlZCAmJiB7XG4gICAgICBuZXdfY29udGV4dF90cnVuY2F0ZWQ6IHRydWUsXG4gICAgICBuZXdfY29udGV4dF9vcmlnaW5hbF9sZW5ndGg6IHVzZXJQcm9tcHQubGVuZ3RoLFxuICAgIH0pLFxuICB9KVxufVxuXG4vKipcbiAqIEFkZCBiZXRhIGF0dHJpYnV0ZXMgdG8gYW4gTExNIHJlcXVlc3Qgc3Bhbi5cbiAqIEhhbmRsZXMgc3lzdGVtIHByb21wdCBsb2dnaW5nIGFuZCBuZXdfY29udGV4dCBjb21wdXRhdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEJldGFMTE1SZXF1ZXN0QXR0cmlidXRlcyhcbiAgc3BhbjogU3BhbixcbiAgbmV3Q29udGV4dD86IExMTVJlcXVlc3ROZXdDb250ZXh0LFxuICBtZXNzYWdlc0ZvckFQST86IEFQSU1lc3NhZ2VbXSxcbik6IHZvaWQge1xuICBpZiAoIWlzQmV0YVRyYWNpbmdFbmFibGVkKCkpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIEFkZCBzeXN0ZW0gcHJvbXB0IGluZm8gdG8gdGhlIHNwYW5cbiAgaWYgKG5ld0NvbnRleHQ/LnN5c3RlbVByb21wdCkge1xuICAgIGNvbnN0IHByb21wdEhhc2ggPSBoYXNoU3lzdGVtUHJvbXB0KG5ld0NvbnRleHQuc3lzdGVtUHJvbXB0KVxuICAgIGNvbnN0IHByZXZpZXcgPSBuZXdDb250ZXh0LnN5c3RlbVByb21wdC5zbGljZSgwLCA1MDApXG5cbiAgICAvLyBBbHdheXMgYWRkIGhhc2gsIHByZXZpZXcsIGFuZCBsZW5ndGggdG8gdGhlIHNwYW5cbiAgICBzcGFuLnNldEF0dHJpYnV0ZSgnc3lzdGVtX3Byb21wdF9oYXNoJywgcHJvbXB0SGFzaClcbiAgICBzcGFuLnNldEF0dHJpYnV0ZSgnc3lzdGVtX3Byb21wdF9wcmV2aWV3JywgcHJldmlldylcbiAgICBzcGFuLnNldEF0dHJpYnV0ZSgnc3lzdGVtX3Byb21wdF9sZW5ndGgnLCBuZXdDb250ZXh0LnN5c3RlbVByb21wdC5sZW5ndGgpXG5cbiAgICAvLyBMb2cgdGhlIGZ1bGwgc3lzdGVtIHByb21wdCBvbmx5IG9uY2UgcGVyIHVuaXF1ZSBoYXNoIHRoaXMgc2Vzc2lvblxuICAgIGlmICghc2Vlbkhhc2hlcy5oYXMocHJvbXB0SGFzaCkpIHtcbiAgICAgIHNlZW5IYXNoZXMuYWRkKHByb21wdEhhc2gpXG5cbiAgICAgIC8vIFRydW5jYXRlIGZvciB0aGUgbG9nIGlmIG5lZWRlZFxuICAgICAgY29uc3QgeyBjb250ZW50OiB0cnVuY2F0ZWRQcm9tcHQsIHRydW5jYXRlZCB9ID0gdHJ1bmNhdGVDb250ZW50KFxuICAgICAgICBuZXdDb250ZXh0LnN5c3RlbVByb21wdCxcbiAgICAgIClcblxuICAgICAgdm9pZCBsb2dPVGVsRXZlbnQoJ3N5c3RlbV9wcm9tcHQnLCB7XG4gICAgICAgIHN5c3RlbV9wcm9tcHRfaGFzaDogcHJvbXB0SGFzaCxcbiAgICAgICAgc3lzdGVtX3Byb21wdDogdHJ1bmNhdGVkUHJvbXB0LFxuICAgICAgICBzeXN0ZW1fcHJvbXB0X2xlbmd0aDogU3RyaW5nKG5ld0NvbnRleHQuc3lzdGVtUHJvbXB0Lmxlbmd0aCksXG4gICAgICAgIC4uLih0cnVuY2F0ZWQgJiYgeyBzeXN0ZW1fcHJvbXB0X3RydW5jYXRlZDogJ3RydWUnIH0pLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgdG9vbHMgaW5mbyB0byB0aGUgc3BhblxuICBpZiAobmV3Q29udGV4dD8udG9vbHMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9vbHNBcnJheSA9IGpzb25QYXJzZShuZXdDb250ZXh0LnRvb2xzKSBhcyBSZWNvcmQ8XG4gICAgICAgIHN0cmluZyxcbiAgICAgICAgdW5rbm93blxuICAgICAgPltdXG5cbiAgICAgIC8vIEJ1aWxkIGFycmF5IG9mIHtuYW1lLCBoYXNofSBmb3IgZWFjaCB0b29sXG4gICAgICBjb25zdCB0b29sc1dpdGhIYXNoZXMgPSB0b29sc0FycmF5Lm1hcCh0b29sID0+IHtcbiAgICAgICAgY29uc3QgdG9vbEpzb24gPSBqc29uU3RyaW5naWZ5KHRvb2wpXG4gICAgICAgIGNvbnN0IHRvb2xIYXNoID0gc2hvcnRIYXNoKHRvb2xKc29uKVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5hbWU6IHR5cGVvZiB0b29sLm5hbWUgPT09ICdzdHJpbmcnID8gdG9vbC5uYW1lIDogJ3Vua25vd24nLFxuICAgICAgICAgIGhhc2g6IHRvb2xIYXNoLFxuICAgICAgICAgIGpzb246IHRvb2xKc29uLFxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICAvLyBTZXQgc3BhbiBhdHRyaWJ1dGUgd2l0aCBhcnJheSBvZiBuYW1lL2hhc2ggcGFpcnNcbiAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFxuICAgICAgICAndG9vbHMnLFxuICAgICAgICBqc29uU3RyaW5naWZ5KFxuICAgICAgICAgIHRvb2xzV2l0aEhhc2hlcy5tYXAoKHsgbmFtZSwgaGFzaCB9KSA9PiAoeyBuYW1lLCBoYXNoIH0pKSxcbiAgICAgICAgKSxcbiAgICAgIClcbiAgICAgIHNwYW4uc2V0QXR0cmlidXRlKCd0b29sc19jb3VudCcsIHRvb2xzV2l0aEhhc2hlcy5sZW5ndGgpXG5cbiAgICAgIC8vIExvZyBlYWNoIHRvb2wncyBmdWxsIGRlc2NyaXB0aW9uIG9uY2UgcGVyIHVuaXF1ZSBoYXNoXG4gICAgICBmb3IgKGNvbnN0IHsgbmFtZSwgaGFzaCwganNvbiB9IG9mIHRvb2xzV2l0aEhhc2hlcykge1xuICAgICAgICBpZiAoIXNlZW5IYXNoZXMuaGFzKGB0b29sXyR7aGFzaH1gKSkge1xuICAgICAgICAgIHNlZW5IYXNoZXMuYWRkKGB0b29sXyR7aGFzaH1gKVxuXG4gICAgICAgICAgY29uc3QgeyBjb250ZW50OiB0cnVuY2F0ZWRUb29sLCB0cnVuY2F0ZWQgfSA9IHRydW5jYXRlQ29udGVudChqc29uKVxuXG4gICAgICAgICAgdm9pZCBsb2dPVGVsRXZlbnQoJ3Rvb2wnLCB7XG4gICAgICAgICAgICB0b29sX25hbWU6IHNhbml0aXplVG9vbE5hbWVGb3JBbmFseXRpY3MobmFtZSksXG4gICAgICAgICAgICB0b29sX2hhc2g6IGhhc2gsXG4gICAgICAgICAgICB0b29sOiB0cnVuY2F0ZWRUb29sLFxuICAgICAgICAgICAgLi4uKHRydW5jYXRlZCAmJiB7IHRvb2xfdHJ1bmNhdGVkOiAndHJ1ZScgfSksXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gSWYgcGFyc2luZyBmYWlscywgbG9nIHRoZSByYXcgdG9vbHMgc3RyaW5nXG4gICAgICBzcGFuLnNldEF0dHJpYnV0ZSgndG9vbHNfcGFyc2VfZXJyb3InLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBuZXdfY29udGV4dCB1c2luZyBoYXNoLWJhc2VkIHRyYWNraW5nICh2aXNpYmxlIHRvIGFsbCB1c2VycylcbiAgaWYgKG1lc3NhZ2VzRm9yQVBJICYmIG1lc3NhZ2VzRm9yQVBJLmxlbmd0aCA+IDAgJiYgbmV3Q29udGV4dD8ucXVlcnlTb3VyY2UpIHtcbiAgICBjb25zdCBxdWVyeVNvdXJjZSA9IG5ld0NvbnRleHQucXVlcnlTb3VyY2VcbiAgICBjb25zdCBsYXN0SGFzaCA9IGxhc3RSZXBvcnRlZE1lc3NhZ2VIYXNoLmdldChxdWVyeVNvdXJjZSlcblxuICAgIC8vIEZpbmQgd2hlcmUgdGhlIGxhc3QgcmVwb3J0ZWQgbWVzc2FnZSBpcyBpbiB0aGUgYXJyYXlcbiAgICBsZXQgc3RhcnRJbmRleCA9IDBcbiAgICBpZiAobGFzdEhhc2gpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZXNGb3JBUEkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbXNnID0gbWVzc2FnZXNGb3JBUElbaV1cbiAgICAgICAgaWYgKG1zZyAmJiBoYXNoTWVzc2FnZShtc2cpID09PSBsYXN0SGFzaCkge1xuICAgICAgICAgIHN0YXJ0SW5kZXggPSBpICsgMSAvLyBTdGFydCBhZnRlciB0aGUgbGFzdCByZXBvcnRlZCBtZXNzYWdlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gSWYgbGFzdEhhc2ggbm90IGZvdW5kLCBzdGFydEluZGV4IHN0YXlzIDAgKHNlbmQgZXZlcnl0aGluZylcbiAgICB9XG5cbiAgICAvLyBHZXQgbmV3IG1lc3NhZ2VzIChmaWx0ZXIgb3V0IGFzc2lzdGFudCBtZXNzYWdlcyAtIHdlIG9ubHkgd2FudCB1c2VyIGlucHV0L3Rvb2wgcmVzdWx0cylcbiAgICBjb25zdCBuZXdNZXNzYWdlcyA9IG1lc3NhZ2VzRm9yQVBJXG4gICAgICAuc2xpY2Uoc3RhcnRJbmRleClcbiAgICAgIC5maWx0ZXIoKG0pOiBtIGlzIFVzZXJNZXNzYWdlID0+IG0udHlwZSA9PT0gJ3VzZXInKVxuXG4gICAgaWYgKG5ld01lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIEZvcm1hdCBuZXcgbWVzc2FnZXMsIHNlcGFyYXRpbmcgc3lzdGVtIHJlbWluZGVycyBmcm9tIHJlZ3VsYXIgY29udGVudFxuICAgICAgY29uc3QgeyBjb250ZXh0UGFydHMsIHN5c3RlbVJlbWluZGVycyB9ID1cbiAgICAgICAgZm9ybWF0TWVzc2FnZXNGb3JDb250ZXh0KG5ld01lc3NhZ2VzKVxuXG4gICAgICAvLyBTZXQgbmV3X2NvbnRleHQgKHJlZ3VsYXIgdXNlciBjb250ZW50IGFuZCB0b29sIHJlc3VsdHMpXG4gICAgICBpZiAoY29udGV4dFBhcnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgZnVsbENvbnRleHQgPSBjb250ZXh0UGFydHMuam9pbignXFxuXFxuLS0tXFxuXFxuJylcbiAgICAgICAgY29uc3QgeyBjb250ZW50OiB0cnVuY2F0ZWRDb250ZXh0LCB0cnVuY2F0ZWQgfSA9XG4gICAgICAgICAgdHJ1bmNhdGVDb250ZW50KGZ1bGxDb250ZXh0KVxuXG4gICAgICAgIHNwYW4uc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgbmV3X2NvbnRleHQ6IHRydW5jYXRlZENvbnRleHQsXG4gICAgICAgICAgbmV3X2NvbnRleHRfbWVzc2FnZV9jb3VudDogbmV3TWVzc2FnZXMubGVuZ3RoLFxuICAgICAgICAgIC4uLih0cnVuY2F0ZWQgJiYge1xuICAgICAgICAgICAgbmV3X2NvbnRleHRfdHJ1bmNhdGVkOiB0cnVlLFxuICAgICAgICAgICAgbmV3X2NvbnRleHRfb3JpZ2luYWxfbGVuZ3RoOiBmdWxsQ29udGV4dC5sZW5ndGgsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIC8vIFNldCBzeXN0ZW1fcmVtaW5kZXJzIGFzIGEgc2VwYXJhdGUgYXR0cmlidXRlXG4gICAgICBpZiAoc3lzdGVtUmVtaW5kZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgZnVsbFJlbWluZGVycyA9IHN5c3RlbVJlbWluZGVycy5qb2luKCdcXG5cXG4tLS1cXG5cXG4nKVxuICAgICAgICBjb25zdCB7IGNvbnRlbnQ6IHRydW5jYXRlZFJlbWluZGVycywgdHJ1bmNhdGVkOiByZW1pbmRlcnNUcnVuY2F0ZWQgfSA9XG4gICAgICAgICAgdHJ1bmNhdGVDb250ZW50KGZ1bGxSZW1pbmRlcnMpXG5cbiAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICBzeXN0ZW1fcmVtaW5kZXJzOiB0cnVuY2F0ZWRSZW1pbmRlcnMsXG4gICAgICAgICAgc3lzdGVtX3JlbWluZGVyc19jb3VudDogc3lzdGVtUmVtaW5kZXJzLmxlbmd0aCxcbiAgICAgICAgICAuLi4ocmVtaW5kZXJzVHJ1bmNhdGVkICYmIHtcbiAgICAgICAgICAgIHN5c3RlbV9yZW1pbmRlcnNfdHJ1bmNhdGVkOiB0cnVlLFxuICAgICAgICAgICAgc3lzdGVtX3JlbWluZGVyc19vcmlnaW5hbF9sZW5ndGg6IGZ1bGxSZW1pbmRlcnMubGVuZ3RoLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyBVcGRhdGUgbGFzdCByZXBvcnRlZCBoYXNoIHRvIHRoZSBsYXN0IG1lc3NhZ2UgaW4gdGhlIGFycmF5XG4gICAgICBjb25zdCBsYXN0TWVzc2FnZSA9IG1lc3NhZ2VzRm9yQVBJW21lc3NhZ2VzRm9yQVBJLmxlbmd0aCAtIDFdXG4gICAgICBpZiAobGFzdE1lc3NhZ2UpIHtcbiAgICAgICAgbGFzdFJlcG9ydGVkTWVzc2FnZUhhc2guc2V0KHF1ZXJ5U291cmNlLCBoYXNoTWVzc2FnZShsYXN0TWVzc2FnZSkpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWRkIGJldGEgYXR0cmlidXRlcyB0byBlbmRMTE1SZXF1ZXN0U3Bhbi5cbiAqIEhhbmRsZXMgbW9kZWxfb3V0cHV0IGFuZCB0aGlua2luZ19vdXRwdXQgdHJ1bmNhdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEJldGFMTE1SZXNwb25zZUF0dHJpYnV0ZXMoXG4gIGVuZEF0dHJpYnV0ZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4+LFxuICBtZXRhZGF0YT86IHtcbiAgICBtb2RlbE91dHB1dD86IHN0cmluZ1xuICAgIHRoaW5raW5nT3V0cHV0Pzogc3RyaW5nXG4gIH0sXG4pOiB2b2lkIHtcbiAgaWYgKCFpc0JldGFUcmFjaW5nRW5hYmxlZCgpIHx8ICFtZXRhZGF0YSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gQWRkIG1vZGVsX291dHB1dCAodGV4dCBjb250ZW50KSAtIHZpc2libGUgdG8gYWxsIHVzZXJzXG4gIGlmIChtZXRhZGF0YS5tb2RlbE91dHB1dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgeyBjb250ZW50OiBtb2RlbE91dHB1dCwgdHJ1bmNhdGVkOiBvdXRwdXRUcnVuY2F0ZWQgfSA9XG4gICAgICB0cnVuY2F0ZUNvbnRlbnQobWV0YWRhdGEubW9kZWxPdXRwdXQpXG4gICAgZW5kQXR0cmlidXRlc1sncmVzcG9uc2UubW9kZWxfb3V0cHV0J10gPSBtb2RlbE91dHB1dFxuICAgIGlmIChvdXRwdXRUcnVuY2F0ZWQpIHtcbiAgICAgIGVuZEF0dHJpYnV0ZXNbJ3Jlc3BvbnNlLm1vZGVsX291dHB1dF90cnVuY2F0ZWQnXSA9IHRydWVcbiAgICAgIGVuZEF0dHJpYnV0ZXNbJ3Jlc3BvbnNlLm1vZGVsX291dHB1dF9vcmlnaW5hbF9sZW5ndGgnXSA9XG4gICAgICAgIG1ldGFkYXRhLm1vZGVsT3V0cHV0Lmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCB0aGlua2luZ19vdXRwdXQgLSBhbnQtb25seVxuICBpZiAoXG4gICAgcHJvY2Vzcy5lbnYuVVNFUl9UWVBFID09PSAnYW50JyAmJlxuICAgIG1ldGFkYXRhLnRoaW5raW5nT3V0cHV0ICE9PSB1bmRlZmluZWRcbiAgKSB7XG4gICAgY29uc3QgeyBjb250ZW50OiB0aGlua2luZ091dHB1dCwgdHJ1bmNhdGVkOiB0aGlua2luZ1RydW5jYXRlZCB9ID1cbiAgICAgIHRydW5jYXRlQ29udGVudChtZXRhZGF0YS50aGlua2luZ091dHB1dClcbiAgICBlbmRBdHRyaWJ1dGVzWydyZXNwb25zZS50aGlua2luZ19vdXRwdXQnXSA9IHRoaW5raW5nT3V0cHV0XG4gICAgaWYgKHRoaW5raW5nVHJ1bmNhdGVkKSB7XG4gICAgICBlbmRBdHRyaWJ1dGVzWydyZXNwb25zZS50aGlua2luZ19vdXRwdXRfdHJ1bmNhdGVkJ10gPSB0cnVlXG4gICAgICBlbmRBdHRyaWJ1dGVzWydyZXNwb25zZS50aGlua2luZ19vdXRwdXRfb3JpZ2luYWxfbGVuZ3RoJ10gPVxuICAgICAgICBtZXRhZGF0YS50aGlua2luZ091dHB1dC5sZW5ndGhcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBZGQgYmV0YSBhdHRyaWJ1dGVzIHRvIHN0YXJ0VG9vbFNwYW4uXG4gKiBBZGRzIHRvb2xfaW5wdXQgd2l0aCB0aGUgc2VyaWFsaXplZCB0b29sIGlucHV0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkQmV0YVRvb2xJbnB1dEF0dHJpYnV0ZXMoXG4gIHNwYW46IFNwYW4sXG4gIHRvb2xOYW1lOiBzdHJpbmcsXG4gIHRvb2xJbnB1dDogc3RyaW5nLFxuKTogdm9pZCB7XG4gIGlmICghaXNCZXRhVHJhY2luZ0VuYWJsZWQoKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgeyBjb250ZW50OiB0cnVuY2F0ZWRJbnB1dCwgdHJ1bmNhdGVkIH0gPSB0cnVuY2F0ZUNvbnRlbnQoXG4gICAgYFtUT09MIElOUFVUOiAke3Rvb2xOYW1lfV1cXG4ke3Rvb2xJbnB1dH1gLFxuICApXG4gIHNwYW4uc2V0QXR0cmlidXRlcyh7XG4gICAgdG9vbF9pbnB1dDogdHJ1bmNhdGVkSW5wdXQsXG4gICAgLi4uKHRydW5jYXRlZCAmJiB7XG4gICAgICB0b29sX2lucHV0X3RydW5jYXRlZDogdHJ1ZSxcbiAgICAgIHRvb2xfaW5wdXRfb3JpZ2luYWxfbGVuZ3RoOiB0b29sSW5wdXQubGVuZ3RoLFxuICAgIH0pLFxuICB9KVxufVxuXG4vKipcbiAqIEFkZCBiZXRhIGF0dHJpYnV0ZXMgdG8gZW5kVG9vbFNwYW4uXG4gKiBBZGRzIG5ld19jb250ZXh0IHdpdGggdGhlIHRvb2wgcmVzdWx0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkQmV0YVRvb2xSZXN1bHRBdHRyaWJ1dGVzKFxuICBlbmRBdHRyaWJ1dGVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPixcbiAgdG9vbE5hbWU6IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4sXG4gIHRvb2xSZXN1bHQ6IHN0cmluZyxcbik6IHZvaWQge1xuICBpZiAoIWlzQmV0YVRyYWNpbmdFbmFibGVkKCkpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHsgY29udGVudDogdHJ1bmNhdGVkUmVzdWx0LCB0cnVuY2F0ZWQgfSA9IHRydW5jYXRlQ29udGVudChcbiAgICBgW1RPT0wgUkVTVUxUOiAke3Rvb2xOYW1lfV1cXG4ke3Rvb2xSZXN1bHR9YCxcbiAgKVxuICBlbmRBdHRyaWJ1dGVzWyduZXdfY29udGV4dCddID0gdHJ1bmNhdGVkUmVzdWx0XG4gIGlmICh0cnVuY2F0ZWQpIHtcbiAgICBlbmRBdHRyaWJ1dGVzWyduZXdfY29udGV4dF90cnVuY2F0ZWQnXSA9IHRydWVcbiAgICBlbmRBdHRyaWJ1dGVzWyduZXdfY29udGV4dF9vcmlnaW5hbF9sZW5ndGgnXSA9IHRvb2xSZXN1bHQubGVuZ3RoXG4gIH1cbn1cbiIsICIvKipcbiAqIFNlc3Npb24gVHJhY2luZyBmb3IgQ2xhdWRlIENvZGUgdXNpbmcgT3BlblRlbGVtZXRyeSAoQkVUQSlcbiAqXG4gKiBUaGlzIG1vZHVsZSBwcm92aWRlcyBhIGhpZ2gtbGV2ZWwgQVBJIGZvciBjcmVhdGluZyBhbmQgbWFuYWdpbmcgc3BhbnNcbiAqIHRvIHRyYWNlIENsYXVkZSBDb2RlIHdvcmtmbG93cy4gRWFjaCB1c2VyIGludGVyYWN0aW9uIGNyZWF0ZXMgYSByb290XG4gKiBpbnRlcmFjdGlvbiBzcGFuLCB3aGljaCBjb250YWlucyBvcGVyYXRpb24gc3BhbnMgKExMTSByZXF1ZXN0cywgdG9vbCBjYWxscywgZXRjLikuXG4gKlxuICogUmVxdWlyZW1lbnRzOlxuICogLSBFbmhhbmNlZCB0ZWxlbWV0cnkgaXMgZW5hYmxlZCB2aWEgZmVhdHVyZSgnRU5IQU5DRURfVEVMRU1FVFJZX0JFVEEnKVxuICogLSBDb25maWd1cmUgT1RFTF9UUkFDRVNfRVhQT1JURVIgKGNvbnNvbGUsIG90bHAsIGV0Yy4pXG4gKi9cblxuaW1wb3J0IHsgZmVhdHVyZSB9IGZyb20gJ2J1bjpidW5kbGUnXG5pbXBvcnQgeyBjb250ZXh0IGFzIG90ZWxDb250ZXh0LCB0eXBlIFNwYW4sIHRyYWNlIH0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvYXBpJ1xuaW1wb3J0IHsgQXN5bmNMb2NhbFN0b3JhZ2UgfSBmcm9tICdhc3luY19ob29rcydcbmltcG9ydCB7IGdldEZlYXR1cmVWYWx1ZV9DQUNIRURfTUFZX0JFX1NUQUxFIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5hbHl0aWNzL2dyb3d0aGJvb2suanMnXG5pbXBvcnQgdHlwZSB7IEFzc2lzdGFudE1lc3NhZ2UsIFVzZXJNZXNzYWdlIH0gZnJvbSAnLi4vLi4vdHlwZXMvbWVzc2FnZS5qcydcbmltcG9ydCB7IGlzRW52RGVmaW5lZEZhbHN5LCBpc0VudlRydXRoeSB9IGZyb20gJy4uL2VudlV0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0VGVsZW1ldHJ5QXR0cmlidXRlcyB9IGZyb20gJy4uL3RlbGVtZXRyeUF0dHJpYnV0ZXMuanMnXG5pbXBvcnQge1xuICBhZGRCZXRhSW50ZXJhY3Rpb25BdHRyaWJ1dGVzLFxuICBhZGRCZXRhTExNUmVxdWVzdEF0dHJpYnV0ZXMsXG4gIGFkZEJldGFMTE1SZXNwb25zZUF0dHJpYnV0ZXMsXG4gIGFkZEJldGFUb29sSW5wdXRBdHRyaWJ1dGVzLFxuICBhZGRCZXRhVG9vbFJlc3VsdEF0dHJpYnV0ZXMsXG4gIGlzQmV0YVRyYWNpbmdFbmFibGVkLFxuICB0eXBlIExMTVJlcXVlc3ROZXdDb250ZXh0LFxuICB0cnVuY2F0ZUNvbnRlbnQsXG59IGZyb20gJy4vYmV0YVNlc3Npb25UcmFjaW5nLmpzJ1xuaW1wb3J0IHtcbiAgZW5kSW50ZXJhY3Rpb25QZXJmZXR0b1NwYW4sXG4gIGVuZExMTVJlcXVlc3RQZXJmZXR0b1NwYW4sXG4gIGVuZFRvb2xQZXJmZXR0b1NwYW4sXG4gIGVuZFVzZXJJbnB1dFBlcmZldHRvU3BhbixcbiAgaXNQZXJmZXR0b1RyYWNpbmdFbmFibGVkLFxuICBzdGFydEludGVyYWN0aW9uUGVyZmV0dG9TcGFuLFxuICBzdGFydExMTVJlcXVlc3RQZXJmZXR0b1NwYW4sXG4gIHN0YXJ0VG9vbFBlcmZldHRvU3BhbixcbiAgc3RhcnRVc2VySW5wdXRQZXJmZXR0b1NwYW4sXG59IGZyb20gJy4vcGVyZmV0dG9UcmFjaW5nLmpzJ1xuXG4vLyBSZS1leHBvcnQgZm9yIGNhbGxlcnNcbmV4cG9ydCB0eXBlIHsgU3BhbiB9XG5leHBvcnQgeyBpc0JldGFUcmFjaW5nRW5hYmxlZCwgdHlwZSBMTE1SZXF1ZXN0TmV3Q29udGV4dCB9XG5cbi8vIE1lc3NhZ2UgdHlwZSBmb3IgQVBJIGNhbGxzIChVc2VyTWVzc2FnZSBvciBBc3Npc3RhbnRNZXNzYWdlKVxudHlwZSBBUElNZXNzYWdlID0gVXNlck1lc3NhZ2UgfCBBc3Npc3RhbnRNZXNzYWdlXG5cbnR5cGUgU3BhblR5cGUgPVxuICB8ICdpbnRlcmFjdGlvbidcbiAgfCAnbGxtX3JlcXVlc3QnXG4gIHwgJ3Rvb2wnXG4gIHwgJ3Rvb2wuYmxvY2tlZF9vbl91c2VyJ1xuICB8ICd0b29sLmV4ZWN1dGlvbidcbiAgfCAnaG9vaydcblxuaW50ZXJmYWNlIFNwYW5Db250ZXh0IHtcbiAgc3BhbjogU3BhblxuICBzdGFydFRpbWU6IG51bWJlclxuICBhdHRyaWJ1dGVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPlxuICBlbmRlZD86IGJvb2xlYW5cbiAgcGVyZmV0dG9TcGFuSWQ/OiBzdHJpbmdcbn1cblxuLy8gQUxTIHN0b3JlcyBTcGFuQ29udGV4dCBkaXJlY3RseSBzbyBpdCBob2xkcyBhIHN0cm9uZyByZWZlcmVuY2Ugd2hpbGUgYSBzcGFuXG4vLyBpcyBhY3RpdmUuIFdpdGggdGhhdCwgYWN0aXZlU3BhbnMgY2FuIHVzZSBXZWFrUmVmIFx1MjAxNCB3aGVuIEFMUyBpcyBjbGVhcmVkXG4vLyAoZW50ZXJXaXRoKHVuZGVmaW5lZCkpIGFuZCBubyBvdGhlciBjb2RlIGhvbGRzIHRoZSBTcGFuQ29udGV4dCwgR0MgY2FuIGNvbGxlY3Rcbi8vIGl0IGFuZCB0aGUgV2Vha1JlZiBnb2VzIHN0YWxlLlxuY29uc3QgaW50ZXJhY3Rpb25Db250ZXh0ID0gbmV3IEFzeW5jTG9jYWxTdG9yYWdlPFNwYW5Db250ZXh0IHwgdW5kZWZpbmVkPigpXG5jb25zdCB0b29sQ29udGV4dCA9IG5ldyBBc3luY0xvY2FsU3RvcmFnZTxTcGFuQ29udGV4dCB8IHVuZGVmaW5lZD4oKVxuY29uc3QgYWN0aXZlU3BhbnMgPSBuZXcgTWFwPHN0cmluZywgV2Vha1JlZjxTcGFuQ29udGV4dD4+KClcbi8vIFNwYW5zIG5vdCBzdG9yZWQgaW4gQUxTIChMTE0gcmVxdWVzdCwgYmxvY2tlZC1vbi11c2VyLCB0b29sIGV4ZWN1dGlvbiwgaG9vaylcbi8vIG5lZWQgYSBzdHJvbmcgcmVmZXJlbmNlIHRvIHByZXZlbnQgR0MgZnJvbSBjb2xsZWN0aW5nIHRoZSBTcGFuQ29udGV4dCBiZWZvcmVcbi8vIHRoZSBjb3JyZXNwb25kaW5nIGVuZCogZnVuY3Rpb24gcmV0cmlldmVzIGl0LlxuY29uc3Qgc3Ryb25nU3BhbnMgPSBuZXcgTWFwPHN0cmluZywgU3BhbkNvbnRleHQ+KClcbmxldCBpbnRlcmFjdGlvblNlcXVlbmNlID0gMFxubGV0IF9jbGVhbnVwSW50ZXJ2YWxTdGFydGVkID0gZmFsc2VcblxuY29uc3QgU1BBTl9UVExfTVMgPSAzMCAqIDYwICogMTAwMCAvLyAzMCBtaW51dGVzXG5cbmZ1bmN0aW9uIGdldFNwYW5JZChzcGFuOiBTcGFuKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNwYW4uc3BhbkNvbnRleHQoKS5zcGFuSWQgfHwgJydcbn1cblxuLyoqXG4gKiBMYXppbHkgc3RhcnQgYSBiYWNrZ3JvdW5kIGludGVydmFsIHRoYXQgZXZpY3RzIG9ycGhhbmVkIHNwYW5zIGZyb20gYWN0aXZlU3BhbnMuXG4gKlxuICogTm9ybWFsIHRlYXJkb3duIGNhbGxzIGVuZEludGVyYWN0aW9uU3BhbiAvIGVuZFRvb2xTcGFuLCB3aGljaCBkZWxldGUgc3BhbnNcbiAqIGltbWVkaWF0ZWx5LiBUaGlzIGludGVydmFsIGlzIGEgc2FmZXR5IG5ldCBmb3Igc3BhbnMgdGhhdCB3ZXJlIG5ldmVyIGVuZGVkXG4gKiAoZS5nLiBhYm9ydGVkIHN0cmVhbXMsIHVuY2F1Z2h0IGV4Y2VwdGlvbnMgbWlkLXF1ZXJ5KSBcdTIwMTQgd2l0aG91dCBpdCB0aGV5XG4gKiBhY2N1bXVsYXRlIGluIGFjdGl2ZVNwYW5zIGluZGVmaW5pdGVseSwgaG9sZGluZyByZWZlcmVuY2VzIHRvIFNwYW4gb2JqZWN0c1xuICogYW5kIHRoZSBPcGVuVGVsZW1ldHJ5IGNvbnRleHQgY2hhaW4uXG4gKlxuICogSW5pdGlhbGl6ZWQgb24gdGhlIGZpcnN0IHN0YXJ0SW50ZXJhY3Rpb25TcGFuIGNhbGwgKG5vdCBhdCBtb2R1bGUgbG9hZCkgdG9cbiAqIGF2b2lkIHRyaWdnZXJpbmcgdGhlIG5vLXRvcC1sZXZlbC1zaWRlLWVmZmVjdHMgbGludCBydWxlIGFuZCB0byBrZWVwIHRoZVxuICogaW50ZXJ2YWwgZnJvbSBydW5uaW5nIGluIHByb2Nlc3NlcyB0aGF0IG5ldmVyIHN0YXJ0IGEgc3Bhbi5cbiAqIHVucmVmKCkgcHJldmVudHMgdGhlIHRpbWVyIGZyb20ga2VlcGluZyB0aGUgcHJvY2VzcyBhbGl2ZSBhZnRlciBhbGwgb3RoZXJcbiAqIHdvcmsgaXMgZG9uZS5cbiAqL1xuZnVuY3Rpb24gZW5zdXJlQ2xlYW51cEludGVydmFsKCk6IHZvaWQge1xuICBpZiAoX2NsZWFudXBJbnRlcnZhbFN0YXJ0ZWQpIHJldHVyblxuICBfY2xlYW51cEludGVydmFsU3RhcnRlZCA9IHRydWVcbiAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgY29uc3QgY3V0b2ZmID0gRGF0ZS5ub3coKSAtIFNQQU5fVFRMX01TXG4gICAgZm9yIChjb25zdCBbc3BhbklkLCB3ZWFrUmVmXSBvZiBhY3RpdmVTcGFucykge1xuICAgICAgY29uc3QgY3R4ID0gd2Vha1JlZi5kZXJlZigpXG4gICAgICBpZiAoY3R4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYWN0aXZlU3BhbnMuZGVsZXRlKHNwYW5JZClcbiAgICAgICAgc3Ryb25nU3BhbnMuZGVsZXRlKHNwYW5JZClcbiAgICAgIH0gZWxzZSBpZiAoY3R4LnN0YXJ0VGltZSA8IGN1dG9mZikge1xuICAgICAgICBpZiAoIWN0eC5lbmRlZCkgY3R4LnNwYW4uZW5kKCkgLy8gZmx1c2ggYW55IHJlY29yZGVkIGF0dHJpYnV0ZXMgdG8gdGhlIGV4cG9ydGVyXG4gICAgICAgIGFjdGl2ZVNwYW5zLmRlbGV0ZShzcGFuSWQpXG4gICAgICAgIHN0cm9uZ1NwYW5zLmRlbGV0ZShzcGFuSWQpXG4gICAgICB9XG4gICAgfVxuICB9LCA2MF8wMDApXG4gIGlmICh0eXBlb2YgaW50ZXJ2YWwudW5yZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICBpbnRlcnZhbC51bnJlZigpIC8vIE5vZGUuanMgLyBCdW46IGRvbid0IGJsb2NrIHByb2Nlc3MgZXhpdFxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgZW5oYW5jZWQgdGVsZW1ldHJ5IGlzIGVuYWJsZWQuXG4gKiBQcmlvcml0eTogZW52IHZhciBvdmVycmlkZSA+IGFudCBidWlsZCA+IEdyb3d0aEJvb2sgZ2F0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFbmhhbmNlZFRlbGVtZXRyeUVuYWJsZWQoKTogYm9vbGVhbiB7XG4gIGlmIChmZWF0dXJlKCdFTkhBTkNFRF9URUxFTUVUUllfQkVUQScpKSB7XG4gICAgY29uc3QgZW52ID1cbiAgICAgIHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX0VOSEFOQ0VEX1RFTEVNRVRSWV9CRVRBID8/XG4gICAgICBwcm9jZXNzLmVudi5FTkFCTEVfRU5IQU5DRURfVEVMRU1FVFJZX0JFVEFcbiAgICBpZiAoaXNFbnZUcnV0aHkoZW52KSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgaWYgKGlzRW52RGVmaW5lZEZhbHN5KGVudikpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgcHJvY2Vzcy5lbnYuVVNFUl9UWVBFID09PSAnYW50JyB8fFxuICAgICAgZ2V0RmVhdHVyZVZhbHVlX0NBQ0hFRF9NQVlfQkVfU1RBTEUoJ2VuaGFuY2VkX3RlbGVtZXRyeV9iZXRhJywgZmFsc2UpXG4gICAgKVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGFueSB0cmFjaW5nIGlzIGVuYWJsZWQgKGVpdGhlciBzdGFuZGFyZCBlbmhhbmNlZCB0ZWxlbWV0cnkgT1IgYmV0YSB0cmFjaW5nKVxuICovXG5mdW5jdGlvbiBpc0FueVRyYWNpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNFbmhhbmNlZFRlbGVtZXRyeUVuYWJsZWQoKSB8fCBpc0JldGFUcmFjaW5nRW5hYmxlZCgpXG59XG5cbmZ1bmN0aW9uIGdldFRyYWNlcigpIHtcbiAgcmV0dXJuIHRyYWNlLmdldFRyYWNlcignY29tLmFudGhyb3BpYy5jbGF1ZGVfY29kZS50cmFjaW5nJywgJzEuMC4wJylcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3BhbkF0dHJpYnV0ZXMoXG4gIHNwYW5UeXBlOiBTcGFuVHlwZSxcbiAgY3VzdG9tQXR0cmlidXRlczogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbj4gPSB7fSxcbik6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4+IHtcbiAgY29uc3QgYmFzZUF0dHJpYnV0ZXMgPSBnZXRUZWxlbWV0cnlBdHRyaWJ1dGVzKClcblxuICBjb25zdCBhdHRyaWJ1dGVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPiA9IHtcbiAgICAuLi5iYXNlQXR0cmlidXRlcyxcbiAgICAnc3Bhbi50eXBlJzogc3BhblR5cGUsXG4gICAgLi4uY3VzdG9tQXR0cmlidXRlcyxcbiAgfVxuXG4gIHJldHVybiBhdHRyaWJ1dGVzXG59XG5cbi8qKlxuICogU3RhcnQgYW4gaW50ZXJhY3Rpb24gc3Bhbi4gVGhpcyB3cmFwcyBhIHVzZXIgcmVxdWVzdCAtPiBDbGF1ZGUgcmVzcG9uc2UgY3ljbGUuXG4gKiBUaGlzIGlzIG5vdyBhIHJvb3Qgc3BhbiB0aGF0IGluY2x1ZGVzIGFsbCBzZXNzaW9uLWxldmVsIGF0dHJpYnV0ZXMuXG4gKiBTZXRzIHRoZSBpbnRlcmFjdGlvbiBjb250ZXh0IGZvciBhbGwgc3Vic2VxdWVudCBvcGVyYXRpb25zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRJbnRlcmFjdGlvblNwYW4odXNlclByb21wdDogc3RyaW5nKTogU3BhbiB7XG4gIGVuc3VyZUNsZWFudXBJbnRlcnZhbCgpXG5cbiAgLy8gU3RhcnQgUGVyZmV0dG8gc3BhbiByZWdhcmRsZXNzIG9mIE9UZWwgdHJhY2luZyBzdGF0ZVxuICBjb25zdCBwZXJmZXR0b1NwYW5JZCA9IGlzUGVyZmV0dG9UcmFjaW5nRW5hYmxlZCgpXG4gICAgPyBzdGFydEludGVyYWN0aW9uUGVyZmV0dG9TcGFuKHVzZXJQcm9tcHQpXG4gICAgOiB1bmRlZmluZWRcblxuICBpZiAoIWlzQW55VHJhY2luZ0VuYWJsZWQoKSkge1xuICAgIC8vIFN0aWxsIHRyYWNrIFBlcmZldHRvIHNwYW4gZXZlbiBpZiBPVGVsIGlzIGRpc2FibGVkXG4gICAgaWYgKHBlcmZldHRvU3BhbklkKSB7XG4gICAgICBjb25zdCBkdW1teVNwYW4gPSB0cmFjZS5nZXRBY3RpdmVTcGFuKCkgfHwgZ2V0VHJhY2VyKCkuc3RhcnRTcGFuKCdkdW1teScpXG4gICAgICBjb25zdCBzcGFuSWQgPSBnZXRTcGFuSWQoZHVtbXlTcGFuKVxuICAgICAgY29uc3Qgc3BhbkNvbnRleHRPYmo6IFNwYW5Db250ZXh0ID0ge1xuICAgICAgICBzcGFuOiBkdW1teVNwYW4sXG4gICAgICAgIHN0YXJ0VGltZTogRGF0ZS5ub3coKSxcbiAgICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICAgIHBlcmZldHRvU3BhbklkLFxuICAgICAgfVxuICAgICAgYWN0aXZlU3BhbnMuc2V0KHNwYW5JZCwgbmV3IFdlYWtSZWYoc3BhbkNvbnRleHRPYmopKVxuICAgICAgaW50ZXJhY3Rpb25Db250ZXh0LmVudGVyV2l0aChzcGFuQ29udGV4dE9iailcbiAgICAgIHJldHVybiBkdW1teVNwYW5cbiAgICB9XG4gICAgcmV0dXJuIHRyYWNlLmdldEFjdGl2ZVNwYW4oKSB8fCBnZXRUcmFjZXIoKS5zdGFydFNwYW4oJ2R1bW15JylcbiAgfVxuXG4gIGNvbnN0IHRyYWNlciA9IGdldFRyYWNlcigpXG4gIGNvbnN0IGlzVXNlclByb21wdExvZ2dpbmdFbmFibGVkID0gaXNFbnZUcnV0aHkoXG4gICAgcHJvY2Vzcy5lbnYuT1RFTF9MT0dfVVNFUl9QUk9NUFRTLFxuICApXG4gIGNvbnN0IHByb21wdFRvTG9nID0gaXNVc2VyUHJvbXB0TG9nZ2luZ0VuYWJsZWQgPyB1c2VyUHJvbXB0IDogJzxSRURBQ1RFRD4nXG5cbiAgaW50ZXJhY3Rpb25TZXF1ZW5jZSsrXG5cbiAgY29uc3QgYXR0cmlidXRlcyA9IGNyZWF0ZVNwYW5BdHRyaWJ1dGVzKCdpbnRlcmFjdGlvbicsIHtcbiAgICB1c2VyX3Byb21wdDogcHJvbXB0VG9Mb2csXG4gICAgdXNlcl9wcm9tcHRfbGVuZ3RoOiB1c2VyUHJvbXB0Lmxlbmd0aCxcbiAgICAnaW50ZXJhY3Rpb24uc2VxdWVuY2UnOiBpbnRlcmFjdGlvblNlcXVlbmNlLFxuICB9KVxuXG4gIGNvbnN0IHNwYW4gPSB0cmFjZXIuc3RhcnRTcGFuKCdjbGF1ZGVfY29kZS5pbnRlcmFjdGlvbicsIHtcbiAgICBhdHRyaWJ1dGVzLFxuICB9KVxuXG4gIC8vIEFkZCBleHBlcmltZW50YWwgYXR0cmlidXRlcyAobmV3X2NvbnRleHQpXG4gIGFkZEJldGFJbnRlcmFjdGlvbkF0dHJpYnV0ZXMoc3BhbiwgdXNlclByb21wdClcblxuICBjb25zdCBzcGFuSWQgPSBnZXRTcGFuSWQoc3BhbilcbiAgY29uc3Qgc3BhbkNvbnRleHRPYmo6IFNwYW5Db250ZXh0ID0ge1xuICAgIHNwYW4sXG4gICAgc3RhcnRUaW1lOiBEYXRlLm5vdygpLFxuICAgIGF0dHJpYnV0ZXMsXG4gICAgcGVyZmV0dG9TcGFuSWQsXG4gIH1cbiAgYWN0aXZlU3BhbnMuc2V0KHNwYW5JZCwgbmV3IFdlYWtSZWYoc3BhbkNvbnRleHRPYmopKVxuXG4gIGludGVyYWN0aW9uQ29udGV4dC5lbnRlcldpdGgoc3BhbkNvbnRleHRPYmopXG5cbiAgcmV0dXJuIHNwYW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuZEludGVyYWN0aW9uU3BhbigpOiB2b2lkIHtcbiAgY29uc3Qgc3BhbkNvbnRleHQgPSBpbnRlcmFjdGlvbkNvbnRleHQuZ2V0U3RvcmUoKVxuICBpZiAoIXNwYW5Db250ZXh0KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoc3BhbkNvbnRleHQuZW5kZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIEVuZCBQZXJmZXR0byBzcGFuXG4gIGlmIChzcGFuQ29udGV4dC5wZXJmZXR0b1NwYW5JZCkge1xuICAgIGVuZEludGVyYWN0aW9uUGVyZmV0dG9TcGFuKHNwYW5Db250ZXh0LnBlcmZldHRvU3BhbklkKVxuICB9XG5cbiAgaWYgKCFpc0FueVRyYWNpbmdFbmFibGVkKCkpIHtcbiAgICBzcGFuQ29udGV4dC5lbmRlZCA9IHRydWVcbiAgICBhY3RpdmVTcGFucy5kZWxldGUoZ2V0U3BhbklkKHNwYW5Db250ZXh0LnNwYW4pKVxuICAgIC8vIENsZWFyIHRoZSBzdG9yZSBzbyBhc3luYyBjb250aW51YXRpb25zIGNyZWF0ZWQgYWZ0ZXIgdGhpcyBwb2ludCAodGltZXJzLFxuICAgIC8vIHByb21pc2UgY2FsbGJhY2tzLCBJL08pIGRvIG5vdCBpbmhlcml0IGEgcmVmZXJlbmNlIHRvIHRoZSBlbmRlZCBzcGFuLlxuICAgIC8vIGVudGVyV2l0aCh1bmRlZmluZWQpIGlzIGludGVudGlvbmFsOiBleGl0KCgpID0+IHt9KSBpcyBhIG5vLW9wIGJlY2F1c2UgaXRcbiAgICAvLyBvbmx5IHN1cHByZXNzZXMgdGhlIHN0b3JlIGluc2lkZSB0aGUgY2FsbGJhY2sgYW5kIHJldHVybnMgaW1tZWRpYXRlbHkuXG4gICAgaW50ZXJhY3Rpb25Db250ZXh0LmVudGVyV2l0aCh1bmRlZmluZWQpXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBkdXJhdGlvbiA9IERhdGUubm93KCkgLSBzcGFuQ29udGV4dC5zdGFydFRpbWVcbiAgc3BhbkNvbnRleHQuc3Bhbi5zZXRBdHRyaWJ1dGVzKHtcbiAgICAnaW50ZXJhY3Rpb24uZHVyYXRpb25fbXMnOiBkdXJhdGlvbixcbiAgfSlcblxuICBzcGFuQ29udGV4dC5zcGFuLmVuZCgpXG4gIHNwYW5Db250ZXh0LmVuZGVkID0gdHJ1ZVxuICBhY3RpdmVTcGFucy5kZWxldGUoZ2V0U3BhbklkKHNwYW5Db250ZXh0LnNwYW4pKVxuICBpbnRlcmFjdGlvbkNvbnRleHQuZW50ZXJXaXRoKHVuZGVmaW5lZClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0TExNUmVxdWVzdFNwYW4oXG4gIG1vZGVsOiBzdHJpbmcsXG4gIG5ld0NvbnRleHQ/OiBMTE1SZXF1ZXN0TmV3Q29udGV4dCxcbiAgbWVzc2FnZXNGb3JBUEk/OiBBUElNZXNzYWdlW10sXG4gIGZhc3RNb2RlPzogYm9vbGVhbixcbik6IFNwYW4ge1xuICAvLyBTdGFydCBQZXJmZXR0byBzcGFuIHJlZ2FyZGxlc3Mgb2YgT1RlbCB0cmFjaW5nIHN0YXRlXG4gIGNvbnN0IHBlcmZldHRvU3BhbklkID0gaXNQZXJmZXR0b1RyYWNpbmdFbmFibGVkKClcbiAgICA/IHN0YXJ0TExNUmVxdWVzdFBlcmZldHRvU3Bhbih7XG4gICAgICAgIG1vZGVsLFxuICAgICAgICBxdWVyeVNvdXJjZTogbmV3Q29udGV4dD8ucXVlcnlTb3VyY2UsXG4gICAgICAgIG1lc3NhZ2VJZDogdW5kZWZpbmVkLCAvLyBXaWxsIGJlIHNldCBpbiBlbmRMTE1SZXF1ZXN0U3BhblxuICAgICAgfSlcbiAgICA6IHVuZGVmaW5lZFxuXG4gIGlmICghaXNBbnlUcmFjaW5nRW5hYmxlZCgpKSB7XG4gICAgLy8gU3RpbGwgdHJhY2sgUGVyZmV0dG8gc3BhbiBldmVuIGlmIE9UZWwgaXMgZGlzYWJsZWRcbiAgICBpZiAocGVyZmV0dG9TcGFuSWQpIHtcbiAgICAgIGNvbnN0IGR1bW15U3BhbiA9IHRyYWNlLmdldEFjdGl2ZVNwYW4oKSB8fCBnZXRUcmFjZXIoKS5zdGFydFNwYW4oJ2R1bW15JylcbiAgICAgIGNvbnN0IHNwYW5JZCA9IGdldFNwYW5JZChkdW1teVNwYW4pXG4gICAgICBjb25zdCBzcGFuQ29udGV4dE9iajogU3BhbkNvbnRleHQgPSB7XG4gICAgICAgIHNwYW46IGR1bW15U3BhbixcbiAgICAgICAgc3RhcnRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7IG1vZGVsIH0sXG4gICAgICAgIHBlcmZldHRvU3BhbklkLFxuICAgICAgfVxuICAgICAgYWN0aXZlU3BhbnMuc2V0KHNwYW5JZCwgbmV3IFdlYWtSZWYoc3BhbkNvbnRleHRPYmopKVxuICAgICAgc3Ryb25nU3BhbnMuc2V0KHNwYW5JZCwgc3BhbkNvbnRleHRPYmopXG4gICAgICByZXR1cm4gZHVtbXlTcGFuXG4gICAgfVxuICAgIHJldHVybiB0cmFjZS5nZXRBY3RpdmVTcGFuKCkgfHwgZ2V0VHJhY2VyKCkuc3RhcnRTcGFuKCdkdW1teScpXG4gIH1cblxuICBjb25zdCB0cmFjZXIgPSBnZXRUcmFjZXIoKVxuICBjb25zdCBwYXJlbnRTcGFuQ3R4ID0gaW50ZXJhY3Rpb25Db250ZXh0LmdldFN0b3JlKClcblxuICBjb25zdCBhdHRyaWJ1dGVzID0gY3JlYXRlU3BhbkF0dHJpYnV0ZXMoJ2xsbV9yZXF1ZXN0Jywge1xuICAgIG1vZGVsOiBtb2RlbCxcbiAgICAnbGxtX3JlcXVlc3QuY29udGV4dCc6IHBhcmVudFNwYW5DdHggPyAnaW50ZXJhY3Rpb24nIDogJ3N0YW5kYWxvbmUnLFxuICAgIHNwZWVkOiBmYXN0TW9kZSA/ICdmYXN0JyA6ICdub3JtYWwnLFxuICB9KVxuXG4gIGNvbnN0IGN0eCA9IHBhcmVudFNwYW5DdHhcbiAgICA/IHRyYWNlLnNldFNwYW4ob3RlbENvbnRleHQuYWN0aXZlKCksIHBhcmVudFNwYW5DdHguc3BhbilcbiAgICA6IG90ZWxDb250ZXh0LmFjdGl2ZSgpXG4gIGNvbnN0IHNwYW4gPSB0cmFjZXIuc3RhcnRTcGFuKCdjbGF1ZGVfY29kZS5sbG1fcmVxdWVzdCcsIHsgYXR0cmlidXRlcyB9LCBjdHgpXG5cbiAgLy8gQWRkIHF1ZXJ5X3NvdXJjZSAoYWdlbnQgbmFtZSkgaWYgcHJvdmlkZWRcbiAgaWYgKG5ld0NvbnRleHQ/LnF1ZXJ5U291cmNlKSB7XG4gICAgc3Bhbi5zZXRBdHRyaWJ1dGUoJ3F1ZXJ5X3NvdXJjZScsIG5ld0NvbnRleHQucXVlcnlTb3VyY2UpXG4gIH1cblxuICAvLyBBZGQgZXhwZXJpbWVudGFsIGF0dHJpYnV0ZXMgKHN5c3RlbSBwcm9tcHQsIG5ld19jb250ZXh0KVxuICBhZGRCZXRhTExNUmVxdWVzdEF0dHJpYnV0ZXMoc3BhbiwgbmV3Q29udGV4dCwgbWVzc2FnZXNGb3JBUEkpXG5cbiAgY29uc3Qgc3BhbklkID0gZ2V0U3BhbklkKHNwYW4pXG4gIGNvbnN0IHNwYW5Db250ZXh0T2JqOiBTcGFuQ29udGV4dCA9IHtcbiAgICBzcGFuLFxuICAgIHN0YXJ0VGltZTogRGF0ZS5ub3coKSxcbiAgICBhdHRyaWJ1dGVzLFxuICAgIHBlcmZldHRvU3BhbklkLFxuICB9XG4gIGFjdGl2ZVNwYW5zLnNldChzcGFuSWQsIG5ldyBXZWFrUmVmKHNwYW5Db250ZXh0T2JqKSlcbiAgc3Ryb25nU3BhbnMuc2V0KHNwYW5JZCwgc3BhbkNvbnRleHRPYmopXG5cbiAgcmV0dXJuIHNwYW5cbn1cblxuLyoqXG4gKiBFbmQgYW4gTExNIHJlcXVlc3Qgc3BhbiBhbmQgYXR0YWNoIHJlc3BvbnNlIG1ldGFkYXRhLlxuICpcbiAqIEBwYXJhbSBzcGFuIC0gT3B0aW9uYWwuIFRoZSBleGFjdCBzcGFuIHJldHVybmVkIGJ5IHN0YXJ0TExNUmVxdWVzdFNwYW4oKS5cbiAqICAgSU1QT1JUQU5UOiBXaGVuIG11bHRpcGxlIExMTSByZXF1ZXN0cyBydW4gaW4gcGFyYWxsZWwgKGUuZy4sIHdhcm11cCByZXF1ZXN0cyxcbiAqICAgdG9waWMgY2xhc3NpZmllciwgZmlsZSBwYXRoIGV4dHJhY3RvciwgbWFpbiB0aHJlYWQpLCB5b3UgTVVTVCBwYXNzIHRoZSBzcGVjaWZpYyBzcGFuXG4gKiAgIHRvIGVuc3VyZSByZXNwb25zZXMgYXJlIGF0dGFjaGVkIHRvIHRoZSBjb3JyZWN0IHJlcXVlc3QuIFdpdGhvdXQgaXQsIHJlc3BvbnNlcyBtYXkgYmVcbiAqICAgaW5jb3JyZWN0bHkgYXR0YWNoZWQgdG8gd2hpY2hldmVyIHNwYW4gaGFwcGVucyB0byBiZSBcImxhc3RcIiBpbiB0aGUgYWN0aXZlU3BhbnMgbWFwLlxuICpcbiAqICAgSWYgbm90IHByb3ZpZGVkLCBmYWxscyBiYWNrIHRvIGZpbmRpbmcgdGhlIG1vc3QgcmVjZW50IGxsbV9yZXF1ZXN0IHNwYW4gKGxlZ2FjeSBiZWhhdmlvcikuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmRMTE1SZXF1ZXN0U3BhbihcbiAgc3Bhbj86IFNwYW4sXG4gIG1ldGFkYXRhPzoge1xuICAgIGlucHV0VG9rZW5zPzogbnVtYmVyXG4gICAgb3V0cHV0VG9rZW5zPzogbnVtYmVyXG4gICAgY2FjaGVSZWFkVG9rZW5zPzogbnVtYmVyXG4gICAgY2FjaGVDcmVhdGlvblRva2Vucz86IG51bWJlclxuICAgIHN1Y2Nlc3M/OiBib29sZWFuXG4gICAgc3RhdHVzQ29kZT86IG51bWJlclxuICAgIGVycm9yPzogc3RyaW5nXG4gICAgYXR0ZW1wdD86IG51bWJlclxuICAgIG1vZGVsUmVzcG9uc2U/OiBzdHJpbmdcbiAgICAvKiogVGV4dCBvdXRwdXQgZnJvbSB0aGUgbW9kZWwgKG5vbi10aGlua2luZyBjb250ZW50KSAqL1xuICAgIG1vZGVsT3V0cHV0Pzogc3RyaW5nXG4gICAgLyoqIFRoaW5raW5nL3JlYXNvbmluZyBvdXRwdXQgZnJvbSB0aGUgbW9kZWwgKi9cbiAgICB0aGlua2luZ091dHB1dD86IHN0cmluZ1xuICAgIC8qKiBXaGV0aGVyIHRoZSBvdXRwdXQgaW5jbHVkZWQgdG9vbCBjYWxscyAobG9vayBhdCB0b29sIHNwYW5zIGZvciBkZXRhaWxzKSAqL1xuICAgIGhhc1Rvb2xDYWxsPzogYm9vbGVhblxuICAgIC8qKiBUaW1lIHRvIGZpcnN0IHRva2VuIGluIG1pbGxpc2Vjb25kcyAqL1xuICAgIHR0ZnRNcz86IG51bWJlclxuICAgIC8qKiBUaW1lIHNwZW50IGluIHByZS1yZXF1ZXN0IHNldHVwIGJlZm9yZSB0aGUgc3VjY2Vzc2Z1bCBhdHRlbXB0ICovXG4gICAgcmVxdWVzdFNldHVwTXM/OiBudW1iZXJcbiAgICAvKiogVGltZXN0YW1wcyAoRGF0ZS5ub3coKSkgb2YgZWFjaCBhdHRlbXB0IHN0YXJ0IFx1MjAxNCB1c2VkIHRvIGVtaXQgcmV0cnkgc3ViLXNwYW5zICovXG4gICAgYXR0ZW1wdFN0YXJ0VGltZXM/OiBudW1iZXJbXVxuICB9LFxuKTogdm9pZCB7XG4gIGxldCBsbG1TcGFuQ29udGV4dDogU3BhbkNvbnRleHQgfCB1bmRlZmluZWRcblxuICBpZiAoc3Bhbikge1xuICAgIC8vIFVzZSB0aGUgcHJvdmlkZWQgc3BhbiBkaXJlY3RseSAtIHRoaXMgaXMgdGhlIGNvcnJlY3QgYXBwcm9hY2ggZm9yIHBhcmFsbGVsIHJlcXVlc3RzXG4gICAgY29uc3Qgc3BhbklkID0gZ2V0U3BhbklkKHNwYW4pXG4gICAgbGxtU3BhbkNvbnRleHQgPSBhY3RpdmVTcGFucy5nZXQoc3BhbklkKT8uZGVyZWYoKVxuICB9IGVsc2Uge1xuICAgIC8vIExlZ2FjeSBmYWxsYmFjazogZmluZCB0aGUgbW9zdCByZWNlbnQgbGxtX3JlcXVlc3Qgc3BhblxuICAgIC8vIFdBUk5JTkc6IFRoaXMgY2FuIGNhdXNlIG1pc21hdGNoZWQgcmVzcG9uc2VzIHdoZW4gbXVsdGlwbGUgcmVxdWVzdHMgYXJlIGluIGZsaWdodFxuICAgIGxsbVNwYW5Db250ZXh0ID0gQXJyYXkuZnJvbShhY3RpdmVTcGFucy52YWx1ZXMoKSlcbiAgICAgIC5maW5kTGFzdChyID0+IHtcbiAgICAgICAgY29uc3QgY3R4ID0gci5kZXJlZigpXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgY3R4Py5hdHRyaWJ1dGVzWydzcGFuLnR5cGUnXSA9PT0gJ2xsbV9yZXF1ZXN0JyB8fFxuICAgICAgICAgIGN0eD8uYXR0cmlidXRlc1snbW9kZWwnXVxuICAgICAgICApXG4gICAgICB9KVxuICAgICAgPy5kZXJlZigpXG4gIH1cblxuICBpZiAoIWxsbVNwYW5Db250ZXh0KSB7XG4gICAgLy8gU3BhbiB3YXMgYWxyZWFkeSBlbmRlZCBvciBuZXZlciB0cmFja2VkXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBkdXJhdGlvbiA9IERhdGUubm93KCkgLSBsbG1TcGFuQ29udGV4dC5zdGFydFRpbWVcblxuICAvLyBFbmQgUGVyZmV0dG8gc3BhbiB3aXRoIGZ1bGwgbWV0YWRhdGFcbiAgaWYgKGxsbVNwYW5Db250ZXh0LnBlcmZldHRvU3BhbklkKSB7XG4gICAgZW5kTExNUmVxdWVzdFBlcmZldHRvU3BhbihsbG1TcGFuQ29udGV4dC5wZXJmZXR0b1NwYW5JZCwge1xuICAgICAgdHRmdE1zOiBtZXRhZGF0YT8udHRmdE1zLFxuICAgICAgdHRsdE1zOiBkdXJhdGlvbiwgLy8gVGltZSB0byBsYXN0IHRva2VuIGlzIHRoZSB0b3RhbCBkdXJhdGlvblxuICAgICAgcHJvbXB0VG9rZW5zOiBtZXRhZGF0YT8uaW5wdXRUb2tlbnMsXG4gICAgICBvdXRwdXRUb2tlbnM6IG1ldGFkYXRhPy5vdXRwdXRUb2tlbnMsXG4gICAgICBjYWNoZVJlYWRUb2tlbnM6IG1ldGFkYXRhPy5jYWNoZVJlYWRUb2tlbnMsXG4gICAgICBjYWNoZUNyZWF0aW9uVG9rZW5zOiBtZXRhZGF0YT8uY2FjaGVDcmVhdGlvblRva2VucyxcbiAgICAgIHN1Y2Nlc3M6IG1ldGFkYXRhPy5zdWNjZXNzLFxuICAgICAgZXJyb3I6IG1ldGFkYXRhPy5lcnJvcixcbiAgICAgIHJlcXVlc3RTZXR1cE1zOiBtZXRhZGF0YT8ucmVxdWVzdFNldHVwTXMsXG4gICAgICBhdHRlbXB0U3RhcnRUaW1lczogbWV0YWRhdGE/LmF0dGVtcHRTdGFydFRpbWVzLFxuICAgIH0pXG4gIH1cblxuICBpZiAoIWlzQW55VHJhY2luZ0VuYWJsZWQoKSkge1xuICAgIGNvbnN0IHNwYW5JZCA9IGdldFNwYW5JZChsbG1TcGFuQ29udGV4dC5zcGFuKVxuICAgIGFjdGl2ZVNwYW5zLmRlbGV0ZShzcGFuSWQpXG4gICAgc3Ryb25nU3BhbnMuZGVsZXRlKHNwYW5JZClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGVuZEF0dHJpYnV0ZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4+ID0ge1xuICAgIGR1cmF0aW9uX21zOiBkdXJhdGlvbixcbiAgfVxuXG4gIGlmIChtZXRhZGF0YSkge1xuICAgIGlmIChtZXRhZGF0YS5pbnB1dFRva2VucyAhPT0gdW5kZWZpbmVkKVxuICAgICAgZW5kQXR0cmlidXRlc1snaW5wdXRfdG9rZW5zJ10gPSBtZXRhZGF0YS5pbnB1dFRva2Vuc1xuICAgIGlmIChtZXRhZGF0YS5vdXRwdXRUb2tlbnMgIT09IHVuZGVmaW5lZClcbiAgICAgIGVuZEF0dHJpYnV0ZXNbJ291dHB1dF90b2tlbnMnXSA9IG1ldGFkYXRhLm91dHB1dFRva2Vuc1xuICAgIGlmIChtZXRhZGF0YS5jYWNoZVJlYWRUb2tlbnMgIT09IHVuZGVmaW5lZClcbiAgICAgIGVuZEF0dHJpYnV0ZXNbJ2NhY2hlX3JlYWRfdG9rZW5zJ10gPSBtZXRhZGF0YS5jYWNoZVJlYWRUb2tlbnNcbiAgICBpZiAobWV0YWRhdGEuY2FjaGVDcmVhdGlvblRva2VucyAhPT0gdW5kZWZpbmVkKVxuICAgICAgZW5kQXR0cmlidXRlc1snY2FjaGVfY3JlYXRpb25fdG9rZW5zJ10gPSBtZXRhZGF0YS5jYWNoZUNyZWF0aW9uVG9rZW5zXG4gICAgaWYgKG1ldGFkYXRhLnN1Y2Nlc3MgIT09IHVuZGVmaW5lZClcbiAgICAgIGVuZEF0dHJpYnV0ZXNbJ3N1Y2Nlc3MnXSA9IG1ldGFkYXRhLnN1Y2Nlc3NcbiAgICBpZiAobWV0YWRhdGEuc3RhdHVzQ29kZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgZW5kQXR0cmlidXRlc1snc3RhdHVzX2NvZGUnXSA9IG1ldGFkYXRhLnN0YXR1c0NvZGVcbiAgICBpZiAobWV0YWRhdGEuZXJyb3IgIT09IHVuZGVmaW5lZCkgZW5kQXR0cmlidXRlc1snZXJyb3InXSA9IG1ldGFkYXRhLmVycm9yXG4gICAgaWYgKG1ldGFkYXRhLmF0dGVtcHQgIT09IHVuZGVmaW5lZClcbiAgICAgIGVuZEF0dHJpYnV0ZXNbJ2F0dGVtcHQnXSA9IG1ldGFkYXRhLmF0dGVtcHRcbiAgICBpZiAobWV0YWRhdGEuaGFzVG9vbENhbGwgIT09IHVuZGVmaW5lZClcbiAgICAgIGVuZEF0dHJpYnV0ZXNbJ3Jlc3BvbnNlLmhhc190b29sX2NhbGwnXSA9IG1ldGFkYXRhLmhhc1Rvb2xDYWxsXG4gICAgaWYgKG1ldGFkYXRhLnR0ZnRNcyAhPT0gdW5kZWZpbmVkKVxuICAgICAgZW5kQXR0cmlidXRlc1sndHRmdF9tcyddID0gbWV0YWRhdGEudHRmdE1zXG5cbiAgICAvLyBBZGQgZXhwZXJpbWVudGFsIHJlc3BvbnNlIGF0dHJpYnV0ZXMgKG1vZGVsX291dHB1dCwgdGhpbmtpbmdfb3V0cHV0KVxuICAgIGFkZEJldGFMTE1SZXNwb25zZUF0dHJpYnV0ZXMoZW5kQXR0cmlidXRlcywgbWV0YWRhdGEpXG4gIH1cblxuICBsbG1TcGFuQ29udGV4dC5zcGFuLnNldEF0dHJpYnV0ZXMoZW5kQXR0cmlidXRlcylcbiAgbGxtU3BhbkNvbnRleHQuc3Bhbi5lbmQoKVxuXG4gIGNvbnN0IHNwYW5JZCA9IGdldFNwYW5JZChsbG1TcGFuQ29udGV4dC5zcGFuKVxuICBhY3RpdmVTcGFucy5kZWxldGUoc3BhbklkKVxuICBzdHJvbmdTcGFucy5kZWxldGUoc3BhbklkKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRUb29sU3BhbihcbiAgdG9vbE5hbWU6IHN0cmluZyxcbiAgdG9vbEF0dHJpYnV0ZXM/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPixcbiAgdG9vbElucHV0Pzogc3RyaW5nLFxuKTogU3BhbiB7XG4gIC8vIFN0YXJ0IFBlcmZldHRvIHNwYW4gcmVnYXJkbGVzcyBvZiBPVGVsIHRyYWNpbmcgc3RhdGVcbiAgY29uc3QgcGVyZmV0dG9TcGFuSWQgPSBpc1BlcmZldHRvVHJhY2luZ0VuYWJsZWQoKVxuICAgID8gc3RhcnRUb29sUGVyZmV0dG9TcGFuKHRvb2xOYW1lLCB0b29sQXR0cmlidXRlcylcbiAgICA6IHVuZGVmaW5lZFxuXG4gIGlmICghaXNBbnlUcmFjaW5nRW5hYmxlZCgpKSB7XG4gICAgLy8gU3RpbGwgdHJhY2sgUGVyZmV0dG8gc3BhbiBldmVuIGlmIE9UZWwgaXMgZGlzYWJsZWRcbiAgICBpZiAocGVyZmV0dG9TcGFuSWQpIHtcbiAgICAgIGNvbnN0IGR1bW15U3BhbiA9IHRyYWNlLmdldEFjdGl2ZVNwYW4oKSB8fCBnZXRUcmFjZXIoKS5zdGFydFNwYW4oJ2R1bW15JylcbiAgICAgIGNvbnN0IHNwYW5JZCA9IGdldFNwYW5JZChkdW1teVNwYW4pXG4gICAgICBjb25zdCBzcGFuQ29udGV4dE9iajogU3BhbkNvbnRleHQgPSB7XG4gICAgICAgIHNwYW46IGR1bW15U3BhbixcbiAgICAgICAgc3RhcnRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7ICdzcGFuLnR5cGUnOiAndG9vbCcsIHRvb2xfbmFtZTogdG9vbE5hbWUgfSxcbiAgICAgICAgcGVyZmV0dG9TcGFuSWQsXG4gICAgICB9XG4gICAgICBhY3RpdmVTcGFucy5zZXQoc3BhbklkLCBuZXcgV2Vha1JlZihzcGFuQ29udGV4dE9iaikpXG4gICAgICB0b29sQ29udGV4dC5lbnRlcldpdGgoc3BhbkNvbnRleHRPYmopXG4gICAgICByZXR1cm4gZHVtbXlTcGFuXG4gICAgfVxuICAgIHJldHVybiB0cmFjZS5nZXRBY3RpdmVTcGFuKCkgfHwgZ2V0VHJhY2VyKCkuc3RhcnRTcGFuKCdkdW1teScpXG4gIH1cblxuICBjb25zdCB0cmFjZXIgPSBnZXRUcmFjZXIoKVxuICBjb25zdCBwYXJlbnRTcGFuQ3R4ID0gaW50ZXJhY3Rpb25Db250ZXh0LmdldFN0b3JlKClcblxuICBjb25zdCBhdHRyaWJ1dGVzID0gY3JlYXRlU3BhbkF0dHJpYnV0ZXMoJ3Rvb2wnLCB7XG4gICAgdG9vbF9uYW1lOiB0b29sTmFtZSxcbiAgICAuLi50b29sQXR0cmlidXRlcyxcbiAgfSlcblxuICBjb25zdCBjdHggPSBwYXJlbnRTcGFuQ3R4XG4gICAgPyB0cmFjZS5zZXRTcGFuKG90ZWxDb250ZXh0LmFjdGl2ZSgpLCBwYXJlbnRTcGFuQ3R4LnNwYW4pXG4gICAgOiBvdGVsQ29udGV4dC5hY3RpdmUoKVxuICBjb25zdCBzcGFuID0gdHJhY2VyLnN0YXJ0U3BhbignY2xhdWRlX2NvZGUudG9vbCcsIHsgYXR0cmlidXRlcyB9LCBjdHgpXG5cbiAgLy8gQWRkIGV4cGVyaW1lbnRhbCB0b29sIGlucHV0IGF0dHJpYnV0ZXNcbiAgaWYgKHRvb2xJbnB1dCkge1xuICAgIGFkZEJldGFUb29sSW5wdXRBdHRyaWJ1dGVzKHNwYW4sIHRvb2xOYW1lLCB0b29sSW5wdXQpXG4gIH1cblxuICBjb25zdCBzcGFuSWQgPSBnZXRTcGFuSWQoc3BhbilcbiAgY29uc3Qgc3BhbkNvbnRleHRPYmo6IFNwYW5Db250ZXh0ID0ge1xuICAgIHNwYW4sXG4gICAgc3RhcnRUaW1lOiBEYXRlLm5vdygpLFxuICAgIGF0dHJpYnV0ZXMsXG4gICAgcGVyZmV0dG9TcGFuSWQsXG4gIH1cbiAgYWN0aXZlU3BhbnMuc2V0KHNwYW5JZCwgbmV3IFdlYWtSZWYoc3BhbkNvbnRleHRPYmopKVxuXG4gIHRvb2xDb250ZXh0LmVudGVyV2l0aChzcGFuQ29udGV4dE9iailcblxuICByZXR1cm4gc3BhblxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRUb29sQmxvY2tlZE9uVXNlclNwYW4oKTogU3BhbiB7XG4gIC8vIFN0YXJ0IFBlcmZldHRvIHNwYW4gcmVnYXJkbGVzcyBvZiBPVGVsIHRyYWNpbmcgc3RhdGVcbiAgY29uc3QgcGVyZmV0dG9TcGFuSWQgPSBpc1BlcmZldHRvVHJhY2luZ0VuYWJsZWQoKVxuICAgID8gc3RhcnRVc2VySW5wdXRQZXJmZXR0b1NwYW4oJ3Rvb2xfcGVybWlzc2lvbicpXG4gICAgOiB1bmRlZmluZWRcblxuICBpZiAoIWlzQW55VHJhY2luZ0VuYWJsZWQoKSkge1xuICAgIC8vIFN0aWxsIHRyYWNrIFBlcmZldHRvIHNwYW4gZXZlbiBpZiBPVGVsIGlzIGRpc2FibGVkXG4gICAgaWYgKHBlcmZldHRvU3BhbklkKSB7XG4gICAgICBjb25zdCBkdW1teVNwYW4gPSB0cmFjZS5nZXRBY3RpdmVTcGFuKCkgfHwgZ2V0VHJhY2VyKCkuc3RhcnRTcGFuKCdkdW1teScpXG4gICAgICBjb25zdCBzcGFuSWQgPSBnZXRTcGFuSWQoZHVtbXlTcGFuKVxuICAgICAgY29uc3Qgc3BhbkNvbnRleHRPYmo6IFNwYW5Db250ZXh0ID0ge1xuICAgICAgICBzcGFuOiBkdW1teVNwYW4sXG4gICAgICAgIHN0YXJ0VGltZTogRGF0ZS5ub3coKSxcbiAgICAgICAgYXR0cmlidXRlczogeyAnc3Bhbi50eXBlJzogJ3Rvb2wuYmxvY2tlZF9vbl91c2VyJyB9LFxuICAgICAgICBwZXJmZXR0b1NwYW5JZCxcbiAgICAgIH1cbiAgICAgIGFjdGl2ZVNwYW5zLnNldChzcGFuSWQsIG5ldyBXZWFrUmVmKHNwYW5Db250ZXh0T2JqKSlcbiAgICAgIHN0cm9uZ1NwYW5zLnNldChzcGFuSWQsIHNwYW5Db250ZXh0T2JqKVxuICAgICAgcmV0dXJuIGR1bW15U3BhblxuICAgIH1cbiAgICByZXR1cm4gdHJhY2UuZ2V0QWN0aXZlU3BhbigpIHx8IGdldFRyYWNlcigpLnN0YXJ0U3BhbignZHVtbXknKVxuICB9XG5cbiAgY29uc3QgdHJhY2VyID0gZ2V0VHJhY2VyKClcbiAgY29uc3QgcGFyZW50U3BhbkN0eCA9IHRvb2xDb250ZXh0LmdldFN0b3JlKClcblxuICBjb25zdCBhdHRyaWJ1dGVzID0gY3JlYXRlU3BhbkF0dHJpYnV0ZXMoJ3Rvb2wuYmxvY2tlZF9vbl91c2VyJylcblxuICBjb25zdCBjdHggPSBwYXJlbnRTcGFuQ3R4XG4gICAgPyB0cmFjZS5zZXRTcGFuKG90ZWxDb250ZXh0LmFjdGl2ZSgpLCBwYXJlbnRTcGFuQ3R4LnNwYW4pXG4gICAgOiBvdGVsQ29udGV4dC5hY3RpdmUoKVxuICBjb25zdCBzcGFuID0gdHJhY2VyLnN0YXJ0U3BhbihcbiAgICAnY2xhdWRlX2NvZGUudG9vbC5ibG9ja2VkX29uX3VzZXInLFxuICAgIHsgYXR0cmlidXRlcyB9LFxuICAgIGN0eCxcbiAgKVxuXG4gIGNvbnN0IHNwYW5JZCA9IGdldFNwYW5JZChzcGFuKVxuICBjb25zdCBzcGFuQ29udGV4dE9iajogU3BhbkNvbnRleHQgPSB7XG4gICAgc3BhbixcbiAgICBzdGFydFRpbWU6IERhdGUubm93KCksXG4gICAgYXR0cmlidXRlcyxcbiAgICBwZXJmZXR0b1NwYW5JZCxcbiAgfVxuICBhY3RpdmVTcGFucy5zZXQoc3BhbklkLCBuZXcgV2Vha1JlZihzcGFuQ29udGV4dE9iaikpXG4gIHN0cm9uZ1NwYW5zLnNldChzcGFuSWQsIHNwYW5Db250ZXh0T2JqKVxuXG4gIHJldHVybiBzcGFuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmRUb29sQmxvY2tlZE9uVXNlclNwYW4oXG4gIGRlY2lzaW9uPzogc3RyaW5nLFxuICBzb3VyY2U/OiBzdHJpbmcsXG4pOiB2b2lkIHtcbiAgY29uc3QgYmxvY2tlZFNwYW5Db250ZXh0ID0gQXJyYXkuZnJvbShhY3RpdmVTcGFucy52YWx1ZXMoKSlcbiAgICAuZmluZExhc3QoXG4gICAgICByID0+IHIuZGVyZWYoKT8uYXR0cmlidXRlc1snc3Bhbi50eXBlJ10gPT09ICd0b29sLmJsb2NrZWRfb25fdXNlcicsXG4gICAgKVxuICAgID8uZGVyZWYoKVxuXG4gIGlmICghYmxvY2tlZFNwYW5Db250ZXh0KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBFbmQgUGVyZmV0dG8gc3BhblxuICBpZiAoYmxvY2tlZFNwYW5Db250ZXh0LnBlcmZldHRvU3BhbklkKSB7XG4gICAgZW5kVXNlcklucHV0UGVyZmV0dG9TcGFuKGJsb2NrZWRTcGFuQ29udGV4dC5wZXJmZXR0b1NwYW5JZCwge1xuICAgICAgZGVjaXNpb24sXG4gICAgICBzb3VyY2UsXG4gICAgfSlcbiAgfVxuXG4gIGlmICghaXNBbnlUcmFjaW5nRW5hYmxlZCgpKSB7XG4gICAgY29uc3Qgc3BhbklkID0gZ2V0U3BhbklkKGJsb2NrZWRTcGFuQ29udGV4dC5zcGFuKVxuICAgIGFjdGl2ZVNwYW5zLmRlbGV0ZShzcGFuSWQpXG4gICAgc3Ryb25nU3BhbnMuZGVsZXRlKHNwYW5JZClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGR1cmF0aW9uID0gRGF0ZS5ub3coKSAtIGJsb2NrZWRTcGFuQ29udGV4dC5zdGFydFRpbWVcbiAgY29uc3QgYXR0cmlidXRlczogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbj4gPSB7XG4gICAgZHVyYXRpb25fbXM6IGR1cmF0aW9uLFxuICB9XG5cbiAgaWYgKGRlY2lzaW9uKSB7XG4gICAgYXR0cmlidXRlc1snZGVjaXNpb24nXSA9IGRlY2lzaW9uXG4gIH1cbiAgaWYgKHNvdXJjZSkge1xuICAgIGF0dHJpYnV0ZXNbJ3NvdXJjZSddID0gc291cmNlXG4gIH1cblxuICBibG9ja2VkU3BhbkNvbnRleHQuc3Bhbi5zZXRBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpXG4gIGJsb2NrZWRTcGFuQ29udGV4dC5zcGFuLmVuZCgpXG5cbiAgY29uc3Qgc3BhbklkID0gZ2V0U3BhbklkKGJsb2NrZWRTcGFuQ29udGV4dC5zcGFuKVxuICBhY3RpdmVTcGFucy5kZWxldGUoc3BhbklkKVxuICBzdHJvbmdTcGFucy5kZWxldGUoc3BhbklkKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRUb29sRXhlY3V0aW9uU3BhbigpOiBTcGFuIHtcbiAgaWYgKCFpc0FueVRyYWNpbmdFbmFibGVkKCkpIHtcbiAgICByZXR1cm4gdHJhY2UuZ2V0QWN0aXZlU3BhbigpIHx8IGdldFRyYWNlcigpLnN0YXJ0U3BhbignZHVtbXknKVxuICB9XG5cbiAgY29uc3QgdHJhY2VyID0gZ2V0VHJhY2VyKClcbiAgY29uc3QgcGFyZW50U3BhbkN0eCA9IHRvb2xDb250ZXh0LmdldFN0b3JlKClcblxuICBjb25zdCBhdHRyaWJ1dGVzID0gY3JlYXRlU3BhbkF0dHJpYnV0ZXMoJ3Rvb2wuZXhlY3V0aW9uJylcblxuICBjb25zdCBjdHggPSBwYXJlbnRTcGFuQ3R4XG4gICAgPyB0cmFjZS5zZXRTcGFuKG90ZWxDb250ZXh0LmFjdGl2ZSgpLCBwYXJlbnRTcGFuQ3R4LnNwYW4pXG4gICAgOiBvdGVsQ29udGV4dC5hY3RpdmUoKVxuICBjb25zdCBzcGFuID0gdHJhY2VyLnN0YXJ0U3BhbihcbiAgICAnY2xhdWRlX2NvZGUudG9vbC5leGVjdXRpb24nLFxuICAgIHsgYXR0cmlidXRlcyB9LFxuICAgIGN0eCxcbiAgKVxuXG4gIGNvbnN0IHNwYW5JZCA9IGdldFNwYW5JZChzcGFuKVxuICBjb25zdCBzcGFuQ29udGV4dE9iajogU3BhbkNvbnRleHQgPSB7XG4gICAgc3BhbixcbiAgICBzdGFydFRpbWU6IERhdGUubm93KCksXG4gICAgYXR0cmlidXRlcyxcbiAgfVxuICBhY3RpdmVTcGFucy5zZXQoc3BhbklkLCBuZXcgV2Vha1JlZihzcGFuQ29udGV4dE9iaikpXG4gIHN0cm9uZ1NwYW5zLnNldChzcGFuSWQsIHNwYW5Db250ZXh0T2JqKVxuXG4gIHJldHVybiBzcGFuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmRUb29sRXhlY3V0aW9uU3BhbihtZXRhZGF0YT86IHtcbiAgc3VjY2Vzcz86IGJvb2xlYW5cbiAgZXJyb3I/OiBzdHJpbmdcbn0pOiB2b2lkIHtcbiAgaWYgKCFpc0FueVRyYWNpbmdFbmFibGVkKCkpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGV4ZWN1dGlvblNwYW5Db250ZXh0ID0gQXJyYXkuZnJvbShhY3RpdmVTcGFucy52YWx1ZXMoKSlcbiAgICAuZmluZExhc3QociA9PiByLmRlcmVmKCk/LmF0dHJpYnV0ZXNbJ3NwYW4udHlwZSddID09PSAndG9vbC5leGVjdXRpb24nKVxuICAgID8uZGVyZWYoKVxuXG4gIGlmICghZXhlY3V0aW9uU3BhbkNvbnRleHQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGR1cmF0aW9uID0gRGF0ZS5ub3coKSAtIGV4ZWN1dGlvblNwYW5Db250ZXh0LnN0YXJ0VGltZVxuICBjb25zdCBhdHRyaWJ1dGVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPiA9IHtcbiAgICBkdXJhdGlvbl9tczogZHVyYXRpb24sXG4gIH1cblxuICBpZiAobWV0YWRhdGEpIHtcbiAgICBpZiAobWV0YWRhdGEuc3VjY2VzcyAhPT0gdW5kZWZpbmVkKSBhdHRyaWJ1dGVzWydzdWNjZXNzJ10gPSBtZXRhZGF0YS5zdWNjZXNzXG4gICAgaWYgKG1ldGFkYXRhLmVycm9yICE9PSB1bmRlZmluZWQpIGF0dHJpYnV0ZXNbJ2Vycm9yJ10gPSBtZXRhZGF0YS5lcnJvclxuICB9XG5cbiAgZXhlY3V0aW9uU3BhbkNvbnRleHQuc3Bhbi5zZXRBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpXG4gIGV4ZWN1dGlvblNwYW5Db250ZXh0LnNwYW4uZW5kKClcblxuICBjb25zdCBzcGFuSWQgPSBnZXRTcGFuSWQoZXhlY3V0aW9uU3BhbkNvbnRleHQuc3BhbilcbiAgYWN0aXZlU3BhbnMuZGVsZXRlKHNwYW5JZClcbiAgc3Ryb25nU3BhbnMuZGVsZXRlKHNwYW5JZClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuZFRvb2xTcGFuKHRvb2xSZXN1bHQ/OiBzdHJpbmcsIHJlc3VsdFRva2Vucz86IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB0b29sU3BhbkNvbnRleHQgPSB0b29sQ29udGV4dC5nZXRTdG9yZSgpXG5cbiAgaWYgKCF0b29sU3BhbkNvbnRleHQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIEVuZCBQZXJmZXR0byBzcGFuXG4gIGlmICh0b29sU3BhbkNvbnRleHQucGVyZmV0dG9TcGFuSWQpIHtcbiAgICBlbmRUb29sUGVyZmV0dG9TcGFuKHRvb2xTcGFuQ29udGV4dC5wZXJmZXR0b1NwYW5JZCwge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIHJlc3VsdFRva2VucyxcbiAgICB9KVxuICB9XG5cbiAgaWYgKCFpc0FueVRyYWNpbmdFbmFibGVkKCkpIHtcbiAgICBjb25zdCBzcGFuSWQgPSBnZXRTcGFuSWQodG9vbFNwYW5Db250ZXh0LnNwYW4pXG4gICAgYWN0aXZlU3BhbnMuZGVsZXRlKHNwYW5JZClcbiAgICAvLyBTYW1lIHJlYXNvbmluZyBhcyBpbnRlcmFjdGlvbkNvbnRleHQgYWJvdmU6IGNsZWFyIHNvIHN1YnNlcXVlbnQgYXN5bmNcbiAgICAvLyB3b3JrIGRvZXNuJ3QgaG9sZCBhIHN0YWxlIHJlZmVyZW5jZSB0byB0aGUgZW5kZWQgdG9vbCBzcGFuLlxuICAgIHRvb2xDb250ZXh0LmVudGVyV2l0aCh1bmRlZmluZWQpXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBkdXJhdGlvbiA9IERhdGUubm93KCkgLSB0b29sU3BhbkNvbnRleHQuc3RhcnRUaW1lXG4gIGNvbnN0IGVuZEF0dHJpYnV0ZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4+ID0ge1xuICAgIGR1cmF0aW9uX21zOiBkdXJhdGlvbixcbiAgfVxuXG4gIC8vIEFkZCBleHBlcmltZW50YWwgdG9vbCByZXN1bHQgYXR0cmlidXRlcyAobmV3X2NvbnRleHQpXG4gIGlmICh0b29sUmVzdWx0KSB7XG4gICAgY29uc3QgdG9vbE5hbWUgPSB0b29sU3BhbkNvbnRleHQuYXR0cmlidXRlc1sndG9vbF9uYW1lJ10gfHwgJ3Vua25vd24nXG4gICAgYWRkQmV0YVRvb2xSZXN1bHRBdHRyaWJ1dGVzKGVuZEF0dHJpYnV0ZXMsIHRvb2xOYW1lLCB0b29sUmVzdWx0KVxuICB9XG5cbiAgaWYgKHJlc3VsdFRva2VucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZW5kQXR0cmlidXRlc1sncmVzdWx0X3Rva2VucyddID0gcmVzdWx0VG9rZW5zXG4gIH1cblxuICB0b29sU3BhbkNvbnRleHQuc3Bhbi5zZXRBdHRyaWJ1dGVzKGVuZEF0dHJpYnV0ZXMpXG4gIHRvb2xTcGFuQ29udGV4dC5zcGFuLmVuZCgpXG5cbiAgY29uc3Qgc3BhbklkID0gZ2V0U3BhbklkKHRvb2xTcGFuQ29udGV4dC5zcGFuKVxuICBhY3RpdmVTcGFucy5kZWxldGUoc3BhbklkKVxuICB0b29sQ29udGV4dC5lbnRlcldpdGgodW5kZWZpbmVkKVxufVxuXG5mdW5jdGlvbiBpc1Rvb2xDb250ZW50TG9nZ2luZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc0VudlRydXRoeShwcm9jZXNzLmVudi5PVEVMX0xPR19UT09MX0NPTlRFTlQpXG59XG5cbi8qKlxuICogQWRkIGEgc3BhbiBldmVudCB3aXRoIHRvb2wgY29udGVudC9vdXRwdXQgZGF0YS5cbiAqIE9ubHkgbG9ncyBpZiBPVEVMX0xPR19UT09MX0NPTlRFTlQ9MSBpcyBzZXQuXG4gKiBUcnVuY2F0ZXMgY29udGVudCBpZiBpdCBleGNlZWRzIE1BWF9DT05URU5UX1NJWkUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb29sQ29udGVudEV2ZW50KFxuICBldmVudE5hbWU6IHN0cmluZyxcbiAgYXR0cmlidXRlczogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbj4sXG4pOiB2b2lkIHtcbiAgaWYgKCFpc0FueVRyYWNpbmdFbmFibGVkKCkgfHwgIWlzVG9vbENvbnRlbnRMb2dnaW5nRW5hYmxlZCgpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBjdXJyZW50U3BhbkN0eCA9IHRvb2xDb250ZXh0LmdldFN0b3JlKClcbiAgaWYgKCFjdXJyZW50U3BhbkN0eCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gVHJ1bmNhdGUgc3RyaW5nIGF0dHJpYnV0ZXMgdGhhdCBtaWdodCBiZSBsYXJnZVxuICBjb25zdCBwcm9jZXNzZWRBdHRyaWJ1dGVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPiA9IHt9XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IHsgY29udGVudCwgdHJ1bmNhdGVkIH0gPSB0cnVuY2F0ZUNvbnRlbnQodmFsdWUpXG4gICAgICBwcm9jZXNzZWRBdHRyaWJ1dGVzW2tleV0gPSBjb250ZW50XG4gICAgICBpZiAodHJ1bmNhdGVkKSB7XG4gICAgICAgIHByb2Nlc3NlZEF0dHJpYnV0ZXNbYCR7a2V5fV90cnVuY2F0ZWRgXSA9IHRydWVcbiAgICAgICAgcHJvY2Vzc2VkQXR0cmlidXRlc1tgJHtrZXl9X29yaWdpbmFsX2xlbmd0aGBdID0gdmFsdWUubGVuZ3RoXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2Nlc3NlZEF0dHJpYnV0ZXNba2V5XSA9IHZhbHVlXG4gICAgfVxuICB9XG5cbiAgY3VycmVudFNwYW5DdHguc3Bhbi5hZGRFdmVudChldmVudE5hbWUsIHByb2Nlc3NlZEF0dHJpYnV0ZXMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50U3BhbigpOiBTcGFuIHwgbnVsbCB7XG4gIGlmICghaXNBbnlUcmFjaW5nRW5hYmxlZCgpKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgdG9vbENvbnRleHQuZ2V0U3RvcmUoKT8uc3BhbiA/PyBpbnRlcmFjdGlvbkNvbnRleHQuZ2V0U3RvcmUoKT8uc3BhbiA/PyBudWxsXG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVJblNwYW48VD4oXG4gIHNwYW5OYW1lOiBzdHJpbmcsXG4gIGZuOiAoc3BhbjogU3BhbikgPT4gUHJvbWlzZTxUPixcbiAgYXR0cmlidXRlcz86IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4+LFxuKTogUHJvbWlzZTxUPiB7XG4gIGlmICghaXNBbnlUcmFjaW5nRW5hYmxlZCgpKSB7XG4gICAgcmV0dXJuIGZuKHRyYWNlLmdldEFjdGl2ZVNwYW4oKSB8fCBnZXRUcmFjZXIoKS5zdGFydFNwYW4oJ2R1bW15JykpXG4gIH1cblxuICBjb25zdCB0cmFjZXIgPSBnZXRUcmFjZXIoKVxuICBjb25zdCBwYXJlbnRTcGFuQ3R4ID0gdG9vbENvbnRleHQuZ2V0U3RvcmUoKSA/PyBpbnRlcmFjdGlvbkNvbnRleHQuZ2V0U3RvcmUoKVxuXG4gIGNvbnN0IGZpbmFsQXR0cmlidXRlcyA9IGNyZWF0ZVNwYW5BdHRyaWJ1dGVzKCd0b29sJywge1xuICAgIC4uLmF0dHJpYnV0ZXMsXG4gIH0pXG5cbiAgY29uc3QgY3R4ID0gcGFyZW50U3BhbkN0eFxuICAgID8gdHJhY2Uuc2V0U3BhbihvdGVsQ29udGV4dC5hY3RpdmUoKSwgcGFyZW50U3BhbkN0eC5zcGFuKVxuICAgIDogb3RlbENvbnRleHQuYWN0aXZlKClcbiAgY29uc3Qgc3BhbiA9IHRyYWNlci5zdGFydFNwYW4oc3Bhbk5hbWUsIHsgYXR0cmlidXRlczogZmluYWxBdHRyaWJ1dGVzIH0sIGN0eClcblxuICBjb25zdCBzcGFuSWQgPSBnZXRTcGFuSWQoc3BhbilcbiAgY29uc3Qgc3BhbkNvbnRleHRPYmo6IFNwYW5Db250ZXh0ID0ge1xuICAgIHNwYW4sXG4gICAgc3RhcnRUaW1lOiBEYXRlLm5vdygpLFxuICAgIGF0dHJpYnV0ZXM6IGZpbmFsQXR0cmlidXRlcyxcbiAgfVxuICBhY3RpdmVTcGFucy5zZXQoc3BhbklkLCBuZXcgV2Vha1JlZihzcGFuQ29udGV4dE9iaikpXG4gIHN0cm9uZ1NwYW5zLnNldChzcGFuSWQsIHNwYW5Db250ZXh0T2JqKVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZm4oc3BhbilcbiAgICBzcGFuLmVuZCgpXG4gICAgYWN0aXZlU3BhbnMuZGVsZXRlKHNwYW5JZClcbiAgICBzdHJvbmdTcGFucy5kZWxldGUoc3BhbklkKVxuICAgIHJldHVybiByZXN1bHRcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgc3Bhbi5yZWNvcmRFeGNlcHRpb24oZXJyb3IpXG4gICAgfVxuICAgIHNwYW4uZW5kKClcbiAgICBhY3RpdmVTcGFucy5kZWxldGUoc3BhbklkKVxuICAgIHN0cm9uZ1NwYW5zLmRlbGV0ZShzcGFuSWQpXG4gICAgdGhyb3cgZXJyb3JcbiAgfVxufVxuXG4vKipcbiAqIFN0YXJ0IGEgaG9vayBleGVjdXRpb24gc3Bhbi5cbiAqIE9ubHkgY3JlYXRlcyBhIHNwYW4gd2hlbiBiZXRhIHRyYWNpbmcgaXMgZW5hYmxlZC5cbiAqIEBwYXJhbSBob29rRXZlbnQgVGhlIGhvb2sgZXZlbnQgdHlwZSAoZS5nLiwgJ1ByZVRvb2xVc2UnLCAnUG9zdFRvb2xVc2UnKVxuICogQHBhcmFtIGhvb2tOYW1lIFRoZSBmdWxsIGhvb2sgbmFtZSAoZS5nLiwgJ1ByZVRvb2xVc2U6V3JpdGUnKVxuICogQHBhcmFtIG51bUhvb2tzIFRoZSBudW1iZXIgb2YgaG9va3MgYmVpbmcgZXhlY3V0ZWRcbiAqIEBwYXJhbSBob29rRGVmaW5pdGlvbnMgSlNPTiBzdHJpbmcgb2YgaG9vayBkZWZpbml0aW9ucyBmb3IgdHJhY2luZ1xuICogQHJldHVybnMgVGhlIHNwYW4gKG9yIGEgZHVtbXkgc3BhbiBpZiB0cmFjaW5nIGlzIGRpc2FibGVkKVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRIb29rU3BhbihcbiAgaG9va0V2ZW50OiBzdHJpbmcsXG4gIGhvb2tOYW1lOiBzdHJpbmcsXG4gIG51bUhvb2tzOiBudW1iZXIsXG4gIGhvb2tEZWZpbml0aW9uczogc3RyaW5nLFxuKTogU3BhbiB7XG4gIGlmICghaXNCZXRhVHJhY2luZ0VuYWJsZWQoKSkge1xuICAgIHJldHVybiB0cmFjZS5nZXRBY3RpdmVTcGFuKCkgfHwgZ2V0VHJhY2VyKCkuc3RhcnRTcGFuKCdkdW1teScpXG4gIH1cblxuICBjb25zdCB0cmFjZXIgPSBnZXRUcmFjZXIoKVxuICBjb25zdCBwYXJlbnRTcGFuQ3R4ID0gdG9vbENvbnRleHQuZ2V0U3RvcmUoKSA/PyBpbnRlcmFjdGlvbkNvbnRleHQuZ2V0U3RvcmUoKVxuXG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSBjcmVhdGVTcGFuQXR0cmlidXRlcygnaG9vaycsIHtcbiAgICBob29rX2V2ZW50OiBob29rRXZlbnQsXG4gICAgaG9va19uYW1lOiBob29rTmFtZSxcbiAgICBudW1faG9va3M6IG51bUhvb2tzLFxuICAgIGhvb2tfZGVmaW5pdGlvbnM6IGhvb2tEZWZpbml0aW9ucyxcbiAgfSlcblxuICBjb25zdCBjdHggPSBwYXJlbnRTcGFuQ3R4XG4gICAgPyB0cmFjZS5zZXRTcGFuKG90ZWxDb250ZXh0LmFjdGl2ZSgpLCBwYXJlbnRTcGFuQ3R4LnNwYW4pXG4gICAgOiBvdGVsQ29udGV4dC5hY3RpdmUoKVxuICBjb25zdCBzcGFuID0gdHJhY2VyLnN0YXJ0U3BhbignY2xhdWRlX2NvZGUuaG9vaycsIHsgYXR0cmlidXRlcyB9LCBjdHgpXG5cbiAgY29uc3Qgc3BhbklkID0gZ2V0U3BhbklkKHNwYW4pXG4gIGNvbnN0IHNwYW5Db250ZXh0T2JqOiBTcGFuQ29udGV4dCA9IHtcbiAgICBzcGFuLFxuICAgIHN0YXJ0VGltZTogRGF0ZS5ub3coKSxcbiAgICBhdHRyaWJ1dGVzLFxuICB9XG4gIGFjdGl2ZVNwYW5zLnNldChzcGFuSWQsIG5ldyBXZWFrUmVmKHNwYW5Db250ZXh0T2JqKSlcbiAgc3Ryb25nU3BhbnMuc2V0KHNwYW5JZCwgc3BhbkNvbnRleHRPYmopXG5cbiAgcmV0dXJuIHNwYW5cbn1cblxuLyoqXG4gKiBFbmQgYSBob29rIGV4ZWN1dGlvbiBzcGFuIHdpdGggb3V0Y29tZSBtZXRhZGF0YS5cbiAqIE9ubHkgZG9lcyB3b3JrIHdoZW4gYmV0YSB0cmFjaW5nIGlzIGVuYWJsZWQuXG4gKiBAcGFyYW0gc3BhbiBUaGUgc3BhbiB0byBlbmQgKHJldHVybmVkIGZyb20gc3RhcnRIb29rU3BhbilcbiAqIEBwYXJhbSBtZXRhZGF0YSBUaGUgb3V0Y29tZSBtZXRhZGF0YSBmb3IgdGhlIGhvb2sgZXhlY3V0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmRIb29rU3BhbihcbiAgc3BhbjogU3BhbixcbiAgbWV0YWRhdGE/OiB7XG4gICAgbnVtU3VjY2Vzcz86IG51bWJlclxuICAgIG51bUJsb2NraW5nPzogbnVtYmVyXG4gICAgbnVtTm9uQmxvY2tpbmdFcnJvcj86IG51bWJlclxuICAgIG51bUNhbmNlbGxlZD86IG51bWJlclxuICB9LFxuKTogdm9pZCB7XG4gIGlmICghaXNCZXRhVHJhY2luZ0VuYWJsZWQoKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3Qgc3BhbklkID0gZ2V0U3BhbklkKHNwYW4pXG4gIGNvbnN0IHNwYW5Db250ZXh0ID0gYWN0aXZlU3BhbnMuZ2V0KHNwYW5JZCk/LmRlcmVmKClcblxuICBpZiAoIXNwYW5Db250ZXh0KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBkdXJhdGlvbiA9IERhdGUubm93KCkgLSBzcGFuQ29udGV4dC5zdGFydFRpbWVcbiAgY29uc3QgZW5kQXR0cmlidXRlczogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbj4gPSB7XG4gICAgZHVyYXRpb25fbXM6IGR1cmF0aW9uLFxuICB9XG5cbiAgaWYgKG1ldGFkYXRhKSB7XG4gICAgaWYgKG1ldGFkYXRhLm51bVN1Y2Nlc3MgIT09IHVuZGVmaW5lZClcbiAgICAgIGVuZEF0dHJpYnV0ZXNbJ251bV9zdWNjZXNzJ10gPSBtZXRhZGF0YS5udW1TdWNjZXNzXG4gICAgaWYgKG1ldGFkYXRhLm51bUJsb2NraW5nICE9PSB1bmRlZmluZWQpXG4gICAgICBlbmRBdHRyaWJ1dGVzWydudW1fYmxvY2tpbmcnXSA9IG1ldGFkYXRhLm51bUJsb2NraW5nXG4gICAgaWYgKG1ldGFkYXRhLm51bU5vbkJsb2NraW5nRXJyb3IgIT09IHVuZGVmaW5lZClcbiAgICAgIGVuZEF0dHJpYnV0ZXNbJ251bV9ub25fYmxvY2tpbmdfZXJyb3InXSA9IG1ldGFkYXRhLm51bU5vbkJsb2NraW5nRXJyb3JcbiAgICBpZiAobWV0YWRhdGEubnVtQ2FuY2VsbGVkICE9PSB1bmRlZmluZWQpXG4gICAgICBlbmRBdHRyaWJ1dGVzWydudW1fY2FuY2VsbGVkJ10gPSBtZXRhZGF0YS5udW1DYW5jZWxsZWRcbiAgfVxuXG4gIHNwYW5Db250ZXh0LnNwYW4uc2V0QXR0cmlidXRlcyhlbmRBdHRyaWJ1dGVzKVxuICBzcGFuQ29udGV4dC5zcGFuLmVuZCgpXG4gIGFjdGl2ZVNwYW5zLmRlbGV0ZShzcGFuSWQpXG4gIHN0cm9uZ1NwYW5zLmRlbGV0ZShzcGFuSWQpXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQk8sU0FBUyxpQkFBaUIsS0FBc0I7QUFDckQsTUFBSSxPQUFPLEVBQUcsUUFBTztBQUNyQixNQUFJO0FBQ0YsWUFBUSxLQUFLLEtBQUssQ0FBQztBQUNuQixXQUFPO0FBQUEsRUFDVCxRQUFRO0FBQ04sV0FBTztBQUFBLEVBQ1Q7QUFDRjtBQVFBLGVBQXNCLHFCQUNwQixLQUNBLFdBQVcsSUFDUTtBQUNuQixNQUFJLFFBQVEsYUFBYSxTQUFTO0FBRWhDLFVBQU1BLFVBQVM7QUFBQSxlQUNKLE9BQU8sR0FBRyxDQUFD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
