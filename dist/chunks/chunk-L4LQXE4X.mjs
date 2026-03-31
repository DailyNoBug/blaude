#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  context,
  init_opentelemetry_api,
  trace
} from "./chunk-GG7RJVEZ.mjs";
import {
  envDynamic,
  getFeatureValue_CACHED_MAY_BE_STALE,
  getOauthAccountInfo,
  getOrCreateUserID,
  init_auth,
  init_config2 as init_config,
  init_envDynamic,
  init_growthbook,
  init_metadata,
  sanitizeToolNameForAnalytics
} from "./chunk-Z6CSO4BY.mjs";
import {
  getAgentId,
  getAgentName,
  getParentSessionId,
  init_teammate
} from "./chunk-GC6TKYZ3.mjs";
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
  __esm
} from "./chunk-O5PZ3G6I.mjs";

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
import { AsyncLocalStorage } from "async_hooks";
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
    const env = process.env.CLAUDE_CODE_ENHANCED_TELEMETRY_BETA ?? process.env.ENABLE_ENHANCED_TELEMETRY_BETA;
    if (isEnvTruthy(env)) {
      return true;
    }
    if (isEnvDefinedFalsy(env)) {
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
    interactionContext = new AsyncLocalStorage();
    toolContext = new AsyncLocalStorage();
    activeSpans = /* @__PURE__ */ new Map();
    strongSpans = /* @__PURE__ */ new Map();
    interactionSequence = 0;
    _cleanupIntervalStarted = false;
    SPAN_TTL_MS = 30 * 60 * 1e3;
  }
});

export {
  getTelemetryAttributes,
  init_telemetryAttributes,
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL3RhZ2dlZElkLnRzIiwgIi4uLy4uL3NyYy91dGlscy90ZWxlbWV0cnlBdHRyaWJ1dGVzLnRzIiwgIi4uLy4uL3NyYy91dGlscy90ZWxlbWV0cnkvZXZlbnRzLnRzIiwgIi4uLy4uL3NyYy91dGlscy90ZWxlbWV0cnkvcGVyZmV0dG9UcmFjaW5nLnRzIiwgIi4uLy4uL3NyYy91dGlscy90ZWxlbWV0cnkvYmV0YVNlc3Npb25UcmFjaW5nLnRzIiwgIi4uLy4uL3NyYy91dGlscy90ZWxlbWV0cnkvc2Vzc2lvblRyYWNpbmcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogVGFnZ2VkIElEIGVuY29kaW5nIGNvbXBhdGlibGUgd2l0aCB0aGUgQVBJJ3MgdGFnZ2VkX2lkLnB5IGZvcm1hdC5cbiAqXG4gKiBQcm9kdWNlcyBJRHMgbGlrZSBcInVzZXJfMDFQYUdVUDJyYmcxWERoN1o5VzFDRXBkXCIgZnJvbSBhIFVVSUQgc3RyaW5nLlxuICogVGhlIGZvcm1hdCBpczoge3RhZ31fe3ZlcnNpb259e2Jhc2U1OCh1dWlkX2FzXzEyOGJpdF9pbnQpfVxuICpcbiAqIFRoaXMgbXVzdCBzdGF5IGluIHN5bmMgd2l0aCBhcGkvYXBpL2NvbW1vbi91dGlscy90YWdnZWRfaWQucHkuXG4gKi9cblxuY29uc3QgQkFTRV81OF9DSEFSUyA9XG4gICcxMjM0NTY3ODlBQkNERUZHSEpLTE1OUFFSU1RVVldYWVphYmNkZWZnaGlqa21ub3BxcnN0dXZ3eHl6J1xuY29uc3QgVkVSU0lPTiA9ICcwMSdcbi8vIGNlaWwoMTI4IC8gbG9nMig1OCkpID0gMjJcbmNvbnN0IEVOQ09ERURfTEVOR1RIID0gMjJcblxuLyoqXG4gKiBFbmNvZGUgYSAxMjgtYml0IHVuc2lnbmVkIGludGVnZXIgYXMgYSBmaXhlZC1sZW5ndGggYmFzZTU4IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZTU4RW5jb2RlKG46IGJpZ2ludCk6IHN0cmluZyB7XG4gIGNvbnN0IGJhc2UgPSBCaWdJbnQoQkFTRV81OF9DSEFSUy5sZW5ndGgpXG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxzdHJpbmc+KEVOQ09ERURfTEVOR1RIKS5maWxsKEJBU0VfNThfQ0hBUlNbMF0hKVxuICBsZXQgaSA9IEVOQ09ERURfTEVOR1RIIC0gMVxuICBsZXQgdmFsdWUgPSBuXG4gIHdoaWxlICh2YWx1ZSA+IDBuKSB7XG4gICAgY29uc3QgcmVtID0gTnVtYmVyKHZhbHVlICUgYmFzZSlcbiAgICByZXN1bHRbaV0gPSBCQVNFXzU4X0NIQVJTW3JlbV0hXG4gICAgdmFsdWUgPSB2YWx1ZSAvIGJhc2VcbiAgICBpLS1cbiAgfVxuICByZXR1cm4gcmVzdWx0LmpvaW4oJycpXG59XG5cbi8qKlxuICogUGFyc2UgYSBVVUlEIHN0cmluZyAod2l0aCBvciB3aXRob3V0IGh5cGhlbnMpIGludG8gYSAxMjgtYml0IGJpZ2ludC5cbiAqL1xuZnVuY3Rpb24gdXVpZFRvQmlnSW50KHV1aWQ6IHN0cmluZyk6IGJpZ2ludCB7XG4gIGNvbnN0IGhleCA9IHV1aWQucmVwbGFjZSgvLS9nLCAnJylcbiAgaWYgKGhleC5sZW5ndGggIT09IDMyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFVVSUQgaGV4IGxlbmd0aDogJHtoZXgubGVuZ3RofWApXG4gIH1cbiAgcmV0dXJuIEJpZ0ludCgnMHgnICsgaGV4KVxufVxuXG4vKipcbiAqIENvbnZlcnQgYW4gYWNjb3VudCBVVUlEIHRvIGEgdGFnZ2VkIElEIGluIHRoZSBBUEkncyBmb3JtYXQuXG4gKlxuICogQHBhcmFtIHRhZyAtIFRoZSB0YWcgcHJlZml4IChlLmcuIFwidXNlclwiLCBcIm9yZ1wiKVxuICogQHBhcmFtIHV1aWQgLSBBIFVVSUQgc3RyaW5nICh3aXRoIG9yIHdpdGhvdXQgaHlwaGVucylcbiAqIEByZXR1cm5zIFRhZ2dlZCBJRCBzdHJpbmcgbGlrZSBcInVzZXJfMDFQYUdVUDJyYmcxWERoN1o5VzFDRXBkXCJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvVGFnZ2VkSWQodGFnOiBzdHJpbmcsIHV1aWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IG4gPSB1dWlkVG9CaWdJbnQodXVpZClcbiAgcmV0dXJuIGAke3RhZ31fJHtWRVJTSU9OfSR7YmFzZTU4RW5jb2RlKG4pfWBcbn1cbiIsICJpbXBvcnQgdHlwZSB7IEF0dHJpYnV0ZXMgfSBmcm9tICdAb3BlbnRlbGVtZXRyeS9hcGknXG5pbXBvcnQgeyBnZXRTZXNzaW9uSWQgfSBmcm9tICdzcmMvYm9vdHN0cmFwL3N0YXRlLmpzJ1xuaW1wb3J0IHsgZ2V0T2F1dGhBY2NvdW50SW5mbyB9IGZyb20gJy4vYXV0aC5qcydcbmltcG9ydCB7IGdldE9yQ3JlYXRlVXNlcklEIH0gZnJvbSAnLi9jb25maWcuanMnXG5pbXBvcnQgeyBlbnZEeW5hbWljIH0gZnJvbSAnLi9lbnZEeW5hbWljLmpzJ1xuaW1wb3J0IHsgaXNFbnZUcnV0aHkgfSBmcm9tICcuL2VudlV0aWxzLmpzJ1xuaW1wb3J0IHsgdG9UYWdnZWRJZCB9IGZyb20gJy4vdGFnZ2VkSWQuanMnXG5cbi8vIERlZmF1bHQgY29uZmlndXJhdGlvbiBmb3IgbWV0cmljcyBjYXJkaW5hbGl0eVxuY29uc3QgTUVUUklDU19DQVJESU5BTElUWV9ERUZBVUxUUyA9IHtcbiAgT1RFTF9NRVRSSUNTX0lOQ0xVREVfU0VTU0lPTl9JRDogdHJ1ZSxcbiAgT1RFTF9NRVRSSUNTX0lOQ0xVREVfVkVSU0lPTjogZmFsc2UsXG4gIE9URUxfTUVUUklDU19JTkNMVURFX0FDQ09VTlRfVVVJRDogdHJ1ZSxcbn1cblxuZnVuY3Rpb24gc2hvdWxkSW5jbHVkZUF0dHJpYnV0ZShcbiAgZW52VmFyOiBrZXlvZiB0eXBlb2YgTUVUUklDU19DQVJESU5BTElUWV9ERUZBVUxUUyxcbik6IGJvb2xlYW4ge1xuICBjb25zdCBkZWZhdWx0VmFsdWUgPSBNRVRSSUNTX0NBUkRJTkFMSVRZX0RFRkFVTFRTW2VudlZhcl1cbiAgY29uc3QgZW52VmFsdWUgPSBwcm9jZXNzLmVudltlbnZWYXJdXG5cbiAgaWYgKGVudlZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlXG4gIH1cblxuICByZXR1cm4gaXNFbnZUcnV0aHkoZW52VmFsdWUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZWxlbWV0cnlBdHRyaWJ1dGVzKCk6IEF0dHJpYnV0ZXMge1xuICBjb25zdCB1c2VySWQgPSBnZXRPckNyZWF0ZVVzZXJJRCgpXG4gIGNvbnN0IHNlc3Npb25JZCA9IGdldFNlc3Npb25JZCgpXG5cbiAgY29uc3QgYXR0cmlidXRlczogQXR0cmlidXRlcyA9IHtcbiAgICAndXNlci5pZCc6IHVzZXJJZCxcbiAgfVxuXG4gIGlmIChzaG91bGRJbmNsdWRlQXR0cmlidXRlKCdPVEVMX01FVFJJQ1NfSU5DTFVERV9TRVNTSU9OX0lEJykpIHtcbiAgICBhdHRyaWJ1dGVzWydzZXNzaW9uLmlkJ10gPSBzZXNzaW9uSWRcbiAgfVxuICBpZiAoc2hvdWxkSW5jbHVkZUF0dHJpYnV0ZSgnT1RFTF9NRVRSSUNTX0lOQ0xVREVfVkVSU0lPTicpKSB7XG4gICAgYXR0cmlidXRlc1snYXBwLnZlcnNpb24nXSA9IE1BQ1JPLlZFUlNJT05cbiAgfVxuXG4gIC8vIE9ubHkgaW5jbHVkZSBPQXV0aCBhY2NvdW50IGRhdGEgd2hlbiBhY3RpdmVseSB1c2luZyBPQXV0aCBhdXRoZW50aWNhdGlvblxuICBjb25zdCBvYXV0aEFjY291bnQgPSBnZXRPYXV0aEFjY291bnRJbmZvKClcbiAgaWYgKG9hdXRoQWNjb3VudCkge1xuICAgIGNvbnN0IG9yZ0lkID0gb2F1dGhBY2NvdW50Lm9yZ2FuaXphdGlvblV1aWRcbiAgICBjb25zdCBlbWFpbCA9IG9hdXRoQWNjb3VudC5lbWFpbEFkZHJlc3NcbiAgICBjb25zdCBhY2NvdW50VXVpZCA9IG9hdXRoQWNjb3VudC5hY2NvdW50VXVpZFxuXG4gICAgaWYgKG9yZ0lkKSBhdHRyaWJ1dGVzWydvcmdhbml6YXRpb24uaWQnXSA9IG9yZ0lkXG4gICAgaWYgKGVtYWlsKSBhdHRyaWJ1dGVzWyd1c2VyLmVtYWlsJ10gPSBlbWFpbFxuXG4gICAgaWYgKFxuICAgICAgYWNjb3VudFV1aWQgJiZcbiAgICAgIHNob3VsZEluY2x1ZGVBdHRyaWJ1dGUoJ09URUxfTUVUUklDU19JTkNMVURFX0FDQ09VTlRfVVVJRCcpXG4gICAgKSB7XG4gICAgICBhdHRyaWJ1dGVzWyd1c2VyLmFjY291bnRfdXVpZCddID0gYWNjb3VudFV1aWRcbiAgICAgIGF0dHJpYnV0ZXNbJ3VzZXIuYWNjb3VudF9pZCddID1cbiAgICAgICAgcHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfQUNDT1VOVF9UQUdHRURfSUQgfHxcbiAgICAgICAgdG9UYWdnZWRJZCgndXNlcicsIGFjY291bnRVdWlkKVxuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCB0ZXJtaW5hbCB0eXBlIGlmIGF2YWlsYWJsZVxuICBpZiAoZW52RHluYW1pYy50ZXJtaW5hbCkge1xuICAgIGF0dHJpYnV0ZXNbJ3Rlcm1pbmFsLnR5cGUnXSA9IGVudkR5bmFtaWMudGVybWluYWxcbiAgfVxuXG4gIHJldHVybiBhdHRyaWJ1dGVzXG59XG4iLCAiaW1wb3J0IHR5cGUgeyBBdHRyaWJ1dGVzIH0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvYXBpJ1xuaW1wb3J0IHsgZ2V0RXZlbnRMb2dnZXIsIGdldFByb21wdElkIH0gZnJvbSAnc3JjL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB7IGxvZ0ZvckRlYnVnZ2luZyB9IGZyb20gJy4uL2RlYnVnLmpzJ1xuaW1wb3J0IHsgaXNFbnZUcnV0aHkgfSBmcm9tICcuLi9lbnZVdGlscy5qcydcbmltcG9ydCB7IGdldFRlbGVtZXRyeUF0dHJpYnV0ZXMgfSBmcm9tICcuLi90ZWxlbWV0cnlBdHRyaWJ1dGVzLmpzJ1xuXG4vLyBNb25vdG9uaWNhbGx5IGluY3JlYXNpbmcgY291bnRlciBmb3Igb3JkZXJpbmcgZXZlbnRzIHdpdGhpbiBhIHNlc3Npb25cbmxldCBldmVudFNlcXVlbmNlID0gMFxuXG4vLyBUcmFjayB3aGV0aGVyIHdlJ3ZlIGFscmVhZHkgd2FybmVkIGFib3V0IGEgbnVsbCBldmVudCBsb2dnZXIgdG8gYXZvaWQgc3BhbW1pbmdcbmxldCBoYXNXYXJuZWROb0V2ZW50TG9nZ2VyID0gZmFsc2VcblxuZnVuY3Rpb24gaXNVc2VyUHJvbXB0TG9nZ2luZ0VuYWJsZWQoKSB7XG4gIHJldHVybiBpc0VudlRydXRoeShwcm9jZXNzLmVudi5PVEVMX0xPR19VU0VSX1BST01QVFMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWRhY3RJZkRpc2FibGVkKGNvbnRlbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBpc1VzZXJQcm9tcHRMb2dnaW5nRW5hYmxlZCgpID8gY29udGVudCA6ICc8UkVEQUNURUQ+J1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nT1RlbEV2ZW50KFxuICBldmVudE5hbWU6IHN0cmluZyxcbiAgbWV0YWRhdGE6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgdW5kZWZpbmVkIH0gPSB7fSxcbik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBldmVudExvZ2dlciA9IGdldEV2ZW50TG9nZ2VyKClcbiAgaWYgKCFldmVudExvZ2dlcikge1xuICAgIGlmICghaGFzV2FybmVkTm9FdmVudExvZ2dlcikge1xuICAgICAgaGFzV2FybmVkTm9FdmVudExvZ2dlciA9IHRydWVcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFszUCB0ZWxlbWV0cnldIEV2ZW50IGRyb3BwZWQgKG5vIGV2ZW50IGxvZ2dlciBpbml0aWFsaXplZCk6ICR7ZXZlbnROYW1lfWAsXG4gICAgICAgIHsgbGV2ZWw6ICd3YXJuJyB9LFxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIFNraXAgbG9nZ2luZyBpbiB0ZXN0IGVudmlyb25tZW50XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBhdHRyaWJ1dGVzOiBBdHRyaWJ1dGVzID0ge1xuICAgIC4uLmdldFRlbGVtZXRyeUF0dHJpYnV0ZXMoKSxcbiAgICAnZXZlbnQubmFtZSc6IGV2ZW50TmFtZSxcbiAgICAnZXZlbnQudGltZXN0YW1wJzogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICdldmVudC5zZXF1ZW5jZSc6IGV2ZW50U2VxdWVuY2UrKyxcbiAgfVxuXG4gIC8vIEFkZCBwcm9tcHQgSUQgdG8gZXZlbnRzIChidXQgbm90IG1ldHJpY3MsIHdoZXJlIGl0IHdvdWxkIGNhdXNlIHVuYm91bmRlZCBjYXJkaW5hbGl0eSlcbiAgY29uc3QgcHJvbXB0SWQgPSBnZXRQcm9tcHRJZCgpXG4gIGlmIChwcm9tcHRJZCkge1xuICAgIGF0dHJpYnV0ZXNbJ3Byb21wdC5pZCddID0gcHJvbXB0SWRcbiAgfVxuXG4gIC8vIFdvcmtzcGFjZSBkaXJlY3RvcnkgZnJvbSB0aGUgZGVza3RvcCBhcHAgKGhvc3QgcGF0aCkuIEV2ZW50cyBvbmx5IFx1MjAxNFxuICAvLyBmaWxlc3lzdGVtIHBhdGhzIGFyZSB0b28gaGlnaC1jYXJkaW5hbGl0eSBmb3IgbWV0cmljIGRpbWVuc2lvbnMsIGFuZFxuICAvLyB0aGUgQlEgbWV0cmljcyBwaXBlbGluZSBtdXN0IG5ldmVyIHNlZSB0aGVtLlxuICBjb25zdCB3b3Jrc3BhY2VEaXIgPSBwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9XT1JLU1BBQ0VfSE9TVF9QQVRIU1xuICBpZiAod29ya3NwYWNlRGlyKSB7XG4gICAgYXR0cmlidXRlc1snd29ya3NwYWNlLmhvc3RfcGF0aHMnXSA9IHdvcmtzcGFjZURpci5zcGxpdCgnfCcpXG4gIH1cblxuICAvLyBBZGQgbWV0YWRhdGEgYXMgYXR0cmlidXRlcyAtIGFsbCB2YWx1ZXMgYXJlIGFscmVhZHkgc3RyaW5nc1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhtZXRhZGF0YSkpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgYXR0cmlidXRlc1trZXldID0gdmFsdWVcbiAgICB9XG4gIH1cblxuICAvLyBFbWl0IGxvZyByZWNvcmQgYXMgYW4gZXZlbnRcbiAgZXZlbnRMb2dnZXIuZW1pdCh7XG4gICAgYm9keTogYGNsYXVkZV9jb2RlLiR7ZXZlbnROYW1lfWAsXG4gICAgYXR0cmlidXRlcyxcbiAgfSlcbn1cbiIsICIvKipcbiAqIFBlcmZldHRvIFRyYWNpbmcgZm9yIENsYXVkZSBDb2RlIChBbnQtb25seSlcbiAqXG4gKiBUaGlzIG1vZHVsZSBnZW5lcmF0ZXMgdHJhY2VzIGluIHRoZSBDaHJvbWUgVHJhY2UgRXZlbnQgZm9ybWF0IHRoYXQgY2FuIGJlXG4gKiB2aWV3ZWQgaW4gdWkucGVyZmV0dG8uZGV2IG9yIENocm9tZSdzIGNocm9tZTovL3RyYWNpbmcuXG4gKlxuICogTk9URTogVGhpcyBmZWF0dXJlIGlzIGFudC1vbmx5IGFuZCBlbGltaW5hdGVkIGZyb20gZXh0ZXJuYWwgYnVpbGRzLlxuICpcbiAqIFRoZSB0cmFjZSBmaWxlIGluY2x1ZGVzOlxuICogLSBBZ2VudCBoaWVyYXJjaHkgKHBhcmVudC1jaGlsZCByZWxhdGlvbnNoaXBzIGluIGEgc3dhcm0pXG4gKiAtIEFQSSByZXF1ZXN0cyB3aXRoIFRURlQsIFRUTFQsIHByb21wdCBsZW5ndGgsIGNhY2hlIHN0YXRzLCBtc2cgSUQsIHNwZWN1bGF0aXZlIGZsYWdcbiAqIC0gVG9vbCBleGVjdXRpb25zIHdpdGggbmFtZSwgZHVyYXRpb24sIGFuZCB0b2tlbiB1c2FnZVxuICogLSBVc2VyIGlucHV0IHdhaXRpbmcgdGltZVxuICpcbiAqIFVzYWdlOlxuICogMS4gRW5hYmxlIHZpYSBDTEFVREVfQ09ERV9QRVJGRVRUT19UUkFDRT0xIG9yIENMQVVERV9DT0RFX1BFUkZFVFRPX1RSQUNFPTxwYXRoPlxuICogMi4gT3B0aW9uYWxseSBzZXQgQ0xBVURFX0NPREVfUEVSRkVUVE9fV1JJVEVfSU5URVJWQUxfUz08cG9zaXRpdmUgaW50ZWdlcj4gdG8gd3JpdGUgdGhlXG4gKiAgICB0cmFjZSBmaWxlIHBlcmlvZGljYWxseSAoZGVmYXVsdDogd3JpdGUgb25seSBvbiBleGl0KS5cbiAqIDMuIFJ1biBDbGF1ZGUgQ29kZSBub3JtYWxseVxuICogNC4gVHJhY2UgZmlsZSBpcyB3cml0dGVuIHRvIH4vLmNsYXVkZS90cmFjZXMvdHJhY2UtPHNlc3Npb24taWQ+Lmpzb25cbiAqICAgIG9yIHRvIHRoZSBzcGVjaWZpZWQgcGF0aFxuICogNS4gT3BlbiBpbiB1aS5wZXJmZXR0by5kZXYgdG8gdmlzdWFsaXplXG4gKi9cblxuaW1wb3J0IHsgZmVhdHVyZSB9IGZyb20gJ2J1bjpidW5kbGUnXG5pbXBvcnQgeyBta2RpclN5bmMsIHdyaXRlRmlsZVN5bmMgfSBmcm9tICdmcydcbmltcG9ydCB7IG1rZGlyLCB3cml0ZUZpbGUgfSBmcm9tICdmcy9wcm9taXNlcydcbmltcG9ydCB7IGRpcm5hbWUsIGpvaW4gfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbklkIH0gZnJvbSAnLi4vLi4vYm9vdHN0cmFwL3N0YXRlLmpzJ1xuaW1wb3J0IHsgcmVnaXN0ZXJDbGVhbnVwIH0gZnJvbSAnLi4vY2xlYW51cFJlZ2lzdHJ5LmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi4vZGVidWcuanMnXG5pbXBvcnQge1xuICBnZXRDbGF1ZGVDb25maWdIb21lRGlyLFxuICBpc0VudkRlZmluZWRGYWxzeSxcbiAgaXNFbnZUcnV0aHksXG59IGZyb20gJy4uL2VudlV0aWxzLmpzJ1xuaW1wb3J0IHsgZXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vZXJyb3JzLmpzJ1xuaW1wb3J0IHsgZGpiMkhhc2ggfSBmcm9tICcuLi9oYXNoLmpzJ1xuaW1wb3J0IHsganNvblN0cmluZ2lmeSB9IGZyb20gJy4uL3Nsb3dPcGVyYXRpb25zLmpzJ1xuaW1wb3J0IHsgZ2V0QWdlbnRJZCwgZ2V0QWdlbnROYW1lLCBnZXRQYXJlbnRTZXNzaW9uSWQgfSBmcm9tICcuLi90ZWFtbWF0ZS5qcydcblxuLyoqXG4gKiBDaHJvbWUgVHJhY2UgRXZlbnQgZm9ybWF0IHR5cGVzXG4gKiBTZWU6IGh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2RvY3VtZW50L2QvMUN2QUNsdkZmeUE1Ui1QaFlVbW41T09RdFlNSDRoNkkwblNzS2NoTkF5U1VcbiAqL1xuXG5leHBvcnQgdHlwZSBUcmFjZUV2ZW50UGhhc2UgPVxuICB8ICdCJyAvLyBCZWdpbiBkdXJhdGlvbiBldmVudFxuICB8ICdFJyAvLyBFbmQgZHVyYXRpb24gZXZlbnRcbiAgfCAnWCcgLy8gQ29tcGxldGUgZXZlbnQgKHdpdGggZHVyYXRpb24pXG4gIHwgJ2knIC8vIEluc3RhbnQgZXZlbnRcbiAgfCAnQycgLy8gQ291bnRlciBldmVudFxuICB8ICdiJyAvLyBBc3luYyBiZWdpblxuICB8ICduJyAvLyBBc3luYyBpbnN0YW50XG4gIHwgJ2UnIC8vIEFzeW5jIGVuZFxuICB8ICdNJyAvLyBNZXRhZGF0YSBldmVudFxuXG5leHBvcnQgdHlwZSBUcmFjZUV2ZW50ID0ge1xuICBuYW1lOiBzdHJpbmdcbiAgY2F0OiBzdHJpbmdcbiAgcGg6IFRyYWNlRXZlbnRQaGFzZVxuICB0czogbnVtYmVyIC8vIFRpbWVzdGFtcCBpbiBtaWNyb3NlY29uZHNcbiAgcGlkOiBudW1iZXIgLy8gUHJvY2VzcyBJRCAod2UgdXNlIDEgZm9yIG1haW4sIGFnZW50IElEcyBmb3Igc3ViYWdlbnRzKVxuICB0aWQ6IG51bWJlciAvLyBUaHJlYWQgSUQgKHdlIHVzZSBudW1lcmljIGhhc2ggb2YgYWdlbnQgbmFtZSBvciAxIGZvciBtYWluKVxuICBkdXI/OiBudW1iZXIgLy8gRHVyYXRpb24gaW4gbWljcm9zZWNvbmRzIChmb3IgJ1gnIGV2ZW50cylcbiAgYXJncz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIGlkPzogc3RyaW5nIC8vIEZvciBhc3luYyBldmVudHNcbiAgc2NvcGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBBZ2VudCBpbmZvIGZvciB0cmFja2luZyBoaWVyYXJjaHlcbiAqL1xudHlwZSBBZ2VudEluZm8gPSB7XG4gIGFnZW50SWQ6IHN0cmluZ1xuICBhZ2VudE5hbWU6IHN0cmluZ1xuICBwYXJlbnRBZ2VudElkPzogc3RyaW5nXG4gIHByb2Nlc3NJZDogbnVtYmVyXG4gIHRocmVhZElkOiBudW1iZXJcbn1cblxuLyoqXG4gKiBQZW5kaW5nIHNwYW4gZm9yIHRyYWNraW5nIGJlZ2luL2VuZCBwYWlyc1xuICovXG50eXBlIFBlbmRpbmdTcGFuID0ge1xuICBuYW1lOiBzdHJpbmdcbiAgY2F0ZWdvcnk6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICBhZ2VudEluZm86IEFnZW50SW5mb1xuICBhcmdzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxufVxuXG4vLyBHbG9iYWwgc3RhdGUgZm9yIHRoZSBQZXJmZXR0byB0cmFjZXJcbmxldCBpc0VuYWJsZWQgPSBmYWxzZVxubGV0IHRyYWNlUGF0aDogc3RyaW5nIHwgbnVsbCA9IG51bGxcbi8vIE1ldGFkYXRhIGV2ZW50cyAocGg6ICdNJyBcdTIwMTQgcHJvY2Vzcy90aHJlYWQgbmFtZXMsIHBhcmVudCBsaW5rcykgYXJlIGtlcHRcbi8vIHNlcGFyYXRlIHNvIHRoZXkgc3Vydml2ZSBldmljdGlvbiBcdTIwMTQgUGVyZmV0dG8gVUkgbmVlZHMgdGhlbSB0byBsYWJlbFxuLy8gdHJhY2tzLiBCb3VuZGVkIGJ5IGFnZW50IGNvdW50ICh+MyBldmVudHMgcGVyIGFnZW50KS5cbmNvbnN0IG1ldGFkYXRhRXZlbnRzOiBUcmFjZUV2ZW50W10gPSBbXVxuY29uc3QgZXZlbnRzOiBUcmFjZUV2ZW50W10gPSBbXVxuLy8gZXZlbnRzW10gY2FwLiBDcm9uLWRyaXZlbiBzZXNzaW9ucyBydW4gZm9yIGRheXM7IDIyIHB1c2ggc2l0ZXMgXHUwMEQ3IG1hbnlcbi8vIHR1cm5zIHdvdWxkIG90aGVyd2lzZSBncm93IHVuYm91bmRlZGx5IChwZXJpb2RpY1dyaXRlIGZsdXNoZXMgdG8gZGlzayBidXRcbi8vIGRvZXMgbm90IHRydW5jYXRlIFx1MjAxNCBpdCB3cml0ZXMgdGhlIGZ1bGwgc25hcHNob3QpLiBBdCB+MzAwQi9ldmVudCB0aGlzIGlzXG4vLyB+MzBNQiwgZW5vdWdoIHRyYWNlIGhpc3RvcnkgZm9yIGFueSBkZWJ1Z2dpbmcgc2Vzc2lvbi4gRXZpY3Rpb24gZHJvcHMgdGhlXG4vLyBvbGRlc3QgaGFsZiB3aGVuIGhpdCwgYW1vcnRpemVkIE8oMSkuXG5jb25zdCBNQVhfRVZFTlRTID0gMTAwXzAwMFxuY29uc3QgcGVuZGluZ1NwYW5zID0gbmV3IE1hcDxzdHJpbmcsIFBlbmRpbmdTcGFuPigpXG5jb25zdCBhZ2VudFJlZ2lzdHJ5ID0gbmV3IE1hcDxzdHJpbmcsIEFnZW50SW5mbz4oKVxubGV0IHRvdGFsQWdlbnRDb3VudCA9IDBcbmxldCBzdGFydFRpbWVNcyA9IDBcbmxldCBzcGFuSWRDb3VudGVyID0gMFxubGV0IHRyYWNlV3JpdHRlbiA9IGZhbHNlIC8vIEZsYWcgdG8gYXZvaWQgZG91YmxlIHdyaXRlc1xuXG4vLyBNYXAgYWdlbnQgSURzIHRvIG51bWVyaWMgcHJvY2VzcyBJRHMgKFBlcmZldHRvIHJlcXVpcmVzIG51bWVyaWMgSURzKVxubGV0IHByb2Nlc3NJZENvdW50ZXIgPSAxXG5jb25zdCBhZ2VudElkVG9Qcm9jZXNzSWQgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpXG5cbi8vIFBlcmlvZGljIHdyaXRlIGludGVydmFsIGhhbmRsZVxubGV0IHdyaXRlSW50ZXJ2YWxJZDogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0SW50ZXJ2YWw+IHwgbnVsbCA9IG51bGxcblxuY29uc3QgU1RBTEVfU1BBTl9UVExfTVMgPSAzMCAqIDYwICogMTAwMCAvLyAzMCBtaW51dGVzXG5jb25zdCBTVEFMRV9TUEFOX0NMRUFOVVBfSU5URVJWQUxfTVMgPSA2MCAqIDEwMDAgLy8gMSBtaW51dGVcbmxldCBzdGFsZVNwYW5DbGVhbnVwSWQ6IFJldHVyblR5cGU8dHlwZW9mIHNldEludGVydmFsPiB8IG51bGwgPSBudWxsXG5cbi8qKlxuICogQ29udmVydCBhIHN0cmluZyB0byBhIG51bWVyaWMgaGFzaCBmb3IgdXNlIGFzIHRocmVhZCBJRFxuICovXG5mdW5jdGlvbiBzdHJpbmdUb051bWVyaWNIYXNoKHN0cjogc3RyaW5nKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGguYWJzKGRqYjJIYXNoKHN0cikpIHx8IDEgLy8gRW5zdXJlIG5vbi16ZXJvXG59XG5cbi8qKlxuICogR2V0IG9yIGNyZWF0ZSBhIG51bWVyaWMgcHJvY2VzcyBJRCBmb3IgYW4gYWdlbnRcbiAqL1xuZnVuY3Rpb24gZ2V0UHJvY2Vzc0lkRm9yQWdlbnQoYWdlbnRJZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgZXhpc3RpbmcgPSBhZ2VudElkVG9Qcm9jZXNzSWQuZ2V0KGFnZW50SWQpXG4gIGlmIChleGlzdGluZyAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZXhpc3RpbmdcblxuICBwcm9jZXNzSWRDb3VudGVyKytcbiAgYWdlbnRJZFRvUHJvY2Vzc0lkLnNldChhZ2VudElkLCBwcm9jZXNzSWRDb3VudGVyKVxuICByZXR1cm4gcHJvY2Vzc0lkQ291bnRlclxufVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGFnZW50IGluZm9cbiAqL1xuZnVuY3Rpb24gZ2V0Q3VycmVudEFnZW50SW5mbygpOiBBZ2VudEluZm8ge1xuICBjb25zdCBhZ2VudElkID0gZ2V0QWdlbnRJZCgpID8/IGdldFNlc3Npb25JZCgpXG4gIGNvbnN0IGFnZW50TmFtZSA9IGdldEFnZW50TmFtZSgpID8/ICdtYWluJ1xuICBjb25zdCBwYXJlbnRTZXNzaW9uSWQgPSBnZXRQYXJlbnRTZXNzaW9uSWQoKVxuXG4gIC8vIENoZWNrIGlmIHdlJ3ZlIGFscmVhZHkgcmVnaXN0ZXJlZCB0aGlzIGFnZW50XG4gIGNvbnN0IGV4aXN0aW5nID0gYWdlbnRSZWdpc3RyeS5nZXQoYWdlbnRJZClcbiAgaWYgKGV4aXN0aW5nKSByZXR1cm4gZXhpc3RpbmdcblxuICBjb25zdCBpbmZvOiBBZ2VudEluZm8gPSB7XG4gICAgYWdlbnRJZCxcbiAgICBhZ2VudE5hbWUsXG4gICAgcGFyZW50QWdlbnRJZDogcGFyZW50U2Vzc2lvbklkLFxuICAgIHByb2Nlc3NJZDogYWdlbnRJZCA9PT0gZ2V0U2Vzc2lvbklkKCkgPyAxIDogZ2V0UHJvY2Vzc0lkRm9yQWdlbnQoYWdlbnRJZCksXG4gICAgdGhyZWFkSWQ6IHN0cmluZ1RvTnVtZXJpY0hhc2goYWdlbnROYW1lKSxcbiAgfVxuXG4gIGFnZW50UmVnaXN0cnkuc2V0KGFnZW50SWQsIGluZm8pXG4gIHRvdGFsQWdlbnRDb3VudCsrXG4gIHJldHVybiBpbmZvXG59XG5cbi8qKlxuICogR2V0IHRpbWVzdGFtcCBpbiBtaWNyb3NlY29uZHMgcmVsYXRpdmUgdG8gdHJhY2Ugc3RhcnRcbiAqL1xuZnVuY3Rpb24gZ2V0VGltZXN0YW1wKCk6IG51bWJlciB7XG4gIHJldHVybiAoRGF0ZS5ub3coKSAtIHN0YXJ0VGltZU1zKSAqIDEwMDBcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBhIHVuaXF1ZSBzcGFuIElEXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlU3BhbklkKCk6IHN0cmluZyB7XG4gIHJldHVybiBgc3Bhbl8keysrc3BhbklkQ291bnRlcn1gXG59XG5cbi8qKlxuICogRXZpY3QgcGVuZGluZyBzcGFucyBvbGRlciB0aGFuIFNUQUxFX1NQQU5fVFRMX01TLlxuICogTWlycm9ycyB0aGUgVFRMIGNsZWFudXAgcGF0dGVybiBpbiBzZXNzaW9uVHJhY2luZy50cy5cbiAqL1xuZnVuY3Rpb24gZXZpY3RTdGFsZVNwYW5zKCk6IHZvaWQge1xuICBjb25zdCBub3cgPSBnZXRUaW1lc3RhbXAoKVxuICBjb25zdCB0dGxVcyA9IFNUQUxFX1NQQU5fVFRMX01TICogMTAwMCAvLyBDb252ZXJ0IG1zIHRvIG1pY3Jvc2Vjb25kc1xuICBmb3IgKGNvbnN0IFtzcGFuSWQsIHNwYW5dIG9mIHBlbmRpbmdTcGFucykge1xuICAgIGlmIChub3cgLSBzcGFuLnN0YXJ0VGltZSA+IHR0bFVzKSB7XG4gICAgICAvLyBFbWl0IGFuIGVuZCBldmVudCBzbyB0aGUgc3BhbiBzaG93cyB1cCBpbiB0aGUgdHJhY2UgYXMgaW5jb21wbGV0ZVxuICAgICAgZXZlbnRzLnB1c2goe1xuICAgICAgICBuYW1lOiBzcGFuLm5hbWUsXG4gICAgICAgIGNhdDogc3Bhbi5jYXRlZ29yeSxcbiAgICAgICAgcGg6ICdFJyxcbiAgICAgICAgdHM6IG5vdyxcbiAgICAgICAgcGlkOiBzcGFuLmFnZW50SW5mby5wcm9jZXNzSWQsXG4gICAgICAgIHRpZDogc3Bhbi5hZ2VudEluZm8udGhyZWFkSWQsXG4gICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICAuLi5zcGFuLmFyZ3MsXG4gICAgICAgICAgZXZpY3RlZDogdHJ1ZSxcbiAgICAgICAgICBkdXJhdGlvbl9tczogKG5vdyAtIHNwYW4uc3RhcnRUaW1lKSAvIDEwMDAsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgcGVuZGluZ1NwYW5zLmRlbGV0ZShzcGFuSWQpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQnVpbGQgdGhlIGZ1bGwgdHJhY2UgZG9jdW1lbnQgKENocm9tZSBUcmFjZSBKU09OIGZvcm1hdCkuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkVHJhY2VEb2N1bWVudCgpOiBzdHJpbmcge1xuICByZXR1cm4ganNvblN0cmluZ2lmeSh7XG4gICAgdHJhY2VFdmVudHM6IFsuLi5tZXRhZGF0YUV2ZW50cywgLi4uZXZlbnRzXSxcbiAgICBtZXRhZGF0YToge1xuICAgICAgc2Vzc2lvbl9pZDogZ2V0U2Vzc2lvbklkKCksXG4gICAgICB0cmFjZV9zdGFydF90aW1lOiBuZXcgRGF0ZShzdGFydFRpbWVNcykudG9JU09TdHJpbmcoKSxcbiAgICAgIGFnZW50X2NvdW50OiB0b3RhbEFnZW50Q291bnQsXG4gICAgICB0b3RhbF9ldmVudF9jb3VudDogbWV0YWRhdGFFdmVudHMubGVuZ3RoICsgZXZlbnRzLmxlbmd0aCxcbiAgICB9LFxuICB9KVxufVxuXG4vKipcbiAqIERyb3AgdGhlIG9sZGVzdCBoYWxmIG9mIGV2ZW50c1tdIHdoZW4gb3ZlciBNQVhfRVZFTlRTLiBDYWxsZWQgZnJvbSB0aGVcbiAqIHN0YWxlLXNwYW4gY2xlYW51cCBpbnRlcnZhbCAoNjBzKS4gVGhlIGhhbGYtYmF0Y2ggc3BsaWNlIGtlZXBzIHRoaXNcbiAqIGFtb3J0aXplZCBPKDEpIFx1MjAxNCB3ZSBkb24ndCBwYXkgc3BsaWNlIGNvc3QgcGVyLXB1c2guIEEgc3ludGhldGljIG1hcmtlclxuICogaXMgaW5zZXJ0ZWQgc28gdGhlIGdhcCBpcyB2aXNpYmxlIGluIHVpLnBlcmZldHRvLmRldi5cbiAqL1xuZnVuY3Rpb24gZXZpY3RPbGRlc3RFdmVudHMoKTogdm9pZCB7XG4gIGlmIChldmVudHMubGVuZ3RoIDwgTUFYX0VWRU5UUykgcmV0dXJuXG4gIGNvbnN0IGRyb3BwZWQgPSBldmVudHMuc3BsaWNlKDAsIE1BWF9FVkVOVFMgLyAyKVxuICBldmVudHMudW5zaGlmdCh7XG4gICAgbmFtZTogJ3RyYWNlX3RydW5jYXRlZCcsXG4gICAgY2F0OiAnX19tZXRhZGF0YScsXG4gICAgcGg6ICdpJyxcbiAgICB0czogZHJvcHBlZFtkcm9wcGVkLmxlbmd0aCAtIDFdPy50cyA/PyAwLFxuICAgIHBpZDogMSxcbiAgICB0aWQ6IDAsXG4gICAgYXJnczogeyBkcm9wcGVkX2V2ZW50czogZHJvcHBlZC5sZW5ndGggfSxcbiAgfSlcbiAgbG9nRm9yRGVidWdnaW5nKFxuICAgIGBbUGVyZmV0dG9dIEV2aWN0ZWQgJHtkcm9wcGVkLmxlbmd0aH0gb2xkZXN0IGV2ZW50cyAoY2FwICR7TUFYX0VWRU5UU30pYCxcbiAgKVxufVxuXG4vKipcbiAqIEluaXRpYWxpemUgUGVyZmV0dG8gdHJhY2luZ1xuICogQ2FsbCB0aGlzIGVhcmx5IGluIHRoZSBhcHBsaWNhdGlvbiBsaWZlY3ljbGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVQZXJmZXR0b1RyYWNpbmcoKTogdm9pZCB7XG4gIGNvbnN0IGVudlZhbHVlID0gcHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfUEVSRkVUVE9fVFJBQ0VcbiAgbG9nRm9yRGVidWdnaW5nKFxuICAgIGBbUGVyZmV0dG9dIGluaXRpYWxpemVQZXJmZXR0b1RyYWNpbmcgY2FsbGVkLCBlbnYgdmFsdWU6ICR7ZW52VmFsdWV9YCxcbiAgKVxuXG4gIC8vIFdyYXAgaW4gZmVhdHVyZSgpIGZvciBkZWFkIGNvZGUgZWxpbWluYXRpb24gLSBlbnRpcmUgYmxvY2sgcmVtb3ZlZCBmcm9tIGV4dGVybmFsIGJ1aWxkc1xuICBpZiAoZmVhdHVyZSgnUEVSRkVUVE9fVFJBQ0lORycpKSB7XG4gICAgaWYgKCFlbnZWYWx1ZSB8fCBpc0VudkRlZmluZWRGYWxzeShlbnZWYWx1ZSkpIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgJ1tQZXJmZXR0b10gVHJhY2luZyBkaXNhYmxlZCAoZW52IHZhciBub3Qgc2V0IG9yIGRpc2FibGVkKScsXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpc0VuYWJsZWQgPSB0cnVlXG4gICAgc3RhcnRUaW1lTXMgPSBEYXRlLm5vdygpXG5cbiAgICAvLyBEZXRlcm1pbmUgdHJhY2UgZmlsZSBwYXRoXG4gICAgaWYgKGlzRW52VHJ1dGh5KGVudlZhbHVlKSkge1xuICAgICAgY29uc3QgdHJhY2VzRGlyID0gam9pbihnZXRDbGF1ZGVDb25maWdIb21lRGlyKCksICd0cmFjZXMnKVxuICAgICAgdHJhY2VQYXRoID0gam9pbih0cmFjZXNEaXIsIGB0cmFjZS0ke2dldFNlc3Npb25JZCgpfS5qc29uYClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVXNlIHRoZSBwcm92aWRlZCBwYXRoXG4gICAgICB0cmFjZVBhdGggPSBlbnZWYWx1ZVxuICAgIH1cblxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbUGVyZmV0dG9dIFRyYWNpbmcgZW5hYmxlZCwgd2lsbCB3cml0ZSB0bzogJHt0cmFjZVBhdGh9LCBpc0VuYWJsZWQ9JHtpc0VuYWJsZWR9YCxcbiAgICApXG5cbiAgICAvLyBTdGFydCBwZXJpb2RpYyBmdWxsLXRyYWNlIHdyaXRlIGlmIENMQVVERV9DT0RFX1BFUkZFVFRPX1dSSVRFX0lOVEVSVkFMX1MgaXMgYSBwb3NpdGl2ZSBpbnRlZ2VyXG4gICAgY29uc3QgaW50ZXJ2YWxTZWMgPSBwYXJzZUludChcbiAgICAgIHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX1BFUkZFVFRPX1dSSVRFX0lOVEVSVkFMX1MgPz8gJycsXG4gICAgICAxMCxcbiAgICApXG4gICAgaWYgKGludGVydmFsU2VjID4gMCkge1xuICAgICAgd3JpdGVJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB2b2lkIHBlcmlvZGljV3JpdGUoKVxuICAgICAgfSwgaW50ZXJ2YWxTZWMgKiAxMDAwKVxuICAgICAgLy8gRG9uJ3QgbGV0IHRoZSBpbnRlcnZhbCBrZWVwIHRoZSBwcm9jZXNzIGFsaXZlIG9uIGl0cyBvd25cbiAgICAgIGlmICh3cml0ZUludGVydmFsSWQudW5yZWYpIHdyaXRlSW50ZXJ2YWxJZC51bnJlZigpXG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBbUGVyZmV0dG9dIFBlcmlvZGljIHdyaXRlIGVuYWJsZWQsIGludGVydmFsOiAke2ludGVydmFsU2VjfXNgLFxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFN0YXJ0IHN0YWxlIHNwYW4gY2xlYW51cCBpbnRlcnZhbFxuICAgIHN0YWxlU3BhbkNsZWFudXBJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGV2aWN0U3RhbGVTcGFucygpXG4gICAgICBldmljdE9sZGVzdEV2ZW50cygpXG4gICAgfSwgU1RBTEVfU1BBTl9DTEVBTlVQX0lOVEVSVkFMX01TKVxuICAgIGlmIChzdGFsZVNwYW5DbGVhbnVwSWQudW5yZWYpIHN0YWxlU3BhbkNsZWFudXBJZC51bnJlZigpXG5cbiAgICAvLyBSZWdpc3RlciBjbGVhbnVwIHRvIHdyaXRlIGZpbmFsIHRyYWNlIG9uIGV4aXRcbiAgICByZWdpc3RlckNsZWFudXAoYXN5bmMgKCkgPT4ge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKCdbUGVyZmV0dG9dIENsZWFudXAgY2FsbGJhY2sgaW52b2tlZCcpXG4gICAgICBhd2FpdCB3cml0ZVBlcmZldHRvVHJhY2UoKVxuICAgIH0pXG5cbiAgICAvLyBBbHNvIHJlZ2lzdGVyIGEgYmVmb3JlRXhpdCBoYW5kbGVyIGFzIGEgZmFsbGJhY2tcbiAgICAvLyBUaGlzIGVuc3VyZXMgdGhlIHRyYWNlIGlzIHdyaXR0ZW4gZXZlbiBpZiBjbGVhbnVwIHJlZ2lzdHJ5IGlzIG5vdCBjYWxsZWRcbiAgICBwcm9jZXNzLm9uKCdiZWZvcmVFeGl0JywgKCkgPT4ge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKCdbUGVyZmV0dG9dIGJlZm9yZUV4aXQgaGFuZGxlciBpbnZva2VkJylcbiAgICAgIHZvaWQgd3JpdGVQZXJmZXR0b1RyYWNlKClcbiAgICB9KVxuXG4gICAgLy8gUmVnaXN0ZXIgYSBzeW5jaHJvbm91cyBleGl0IGhhbmRsZXIgYXMgYSBsYXN0IHJlc29ydFxuICAgIC8vIFRoaXMgaXMgdGhlIGZpbmFsIGZhbGxiYWNrIHRvIGVuc3VyZSB0cmFjZSBpcyB3cml0dGVuIGJlZm9yZSBwcm9jZXNzIGV4aXRzXG4gICAgcHJvY2Vzcy5vbignZXhpdCcsICgpID0+IHtcbiAgICAgIGlmICghdHJhY2VXcml0dGVuKSB7XG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAnW1BlcmZldHRvXSBleGl0IGhhbmRsZXIgaW52b2tlZCwgd3JpdGluZyB0cmFjZSBzeW5jaHJvbm91c2x5JyxcbiAgICAgICAgKVxuICAgICAgICB3cml0ZVBlcmZldHRvVHJhY2VTeW5jKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gRW1pdCBwcm9jZXNzIG1ldGFkYXRhIGV2ZW50cyBmb3IgbWFpbiBwcm9jZXNzXG4gICAgY29uc3QgbWFpbkFnZW50ID0gZ2V0Q3VycmVudEFnZW50SW5mbygpXG4gICAgZW1pdFByb2Nlc3NNZXRhZGF0YShtYWluQWdlbnQpXG4gIH1cbn1cblxuLyoqXG4gKiBFbWl0IG1ldGFkYXRhIGV2ZW50cyBmb3IgYSBwcm9jZXNzL2FnZW50XG4gKi9cbmZ1bmN0aW9uIGVtaXRQcm9jZXNzTWV0YWRhdGEoYWdlbnRJbmZvOiBBZ2VudEluZm8pOiB2b2lkIHtcbiAgaWYgKCFpc0VuYWJsZWQpIHJldHVyblxuXG4gIC8vIFByb2Nlc3MgbmFtZVxuICBtZXRhZGF0YUV2ZW50cy5wdXNoKHtcbiAgICBuYW1lOiAncHJvY2Vzc19uYW1lJyxcbiAgICBjYXQ6ICdfX21ldGFkYXRhJyxcbiAgICBwaDogJ00nLFxuICAgIHRzOiAwLFxuICAgIHBpZDogYWdlbnRJbmZvLnByb2Nlc3NJZCxcbiAgICB0aWQ6IDAsXG4gICAgYXJnczogeyBuYW1lOiBhZ2VudEluZm8uYWdlbnROYW1lIH0sXG4gIH0pXG5cbiAgLy8gVGhyZWFkIG5hbWUgKHNhbWUgYXMgcHJvY2VzcyBmb3Igbm93KVxuICBtZXRhZGF0YUV2ZW50cy5wdXNoKHtcbiAgICBuYW1lOiAndGhyZWFkX25hbWUnLFxuICAgIGNhdDogJ19fbWV0YWRhdGEnLFxuICAgIHBoOiAnTScsXG4gICAgdHM6IDAsXG4gICAgcGlkOiBhZ2VudEluZm8ucHJvY2Vzc0lkLFxuICAgIHRpZDogYWdlbnRJbmZvLnRocmVhZElkLFxuICAgIGFyZ3M6IHsgbmFtZTogYWdlbnRJbmZvLmFnZW50TmFtZSB9LFxuICB9KVxuXG4gIC8vIEFkZCBwYXJlbnQgaW5mbyBpZiBhdmFpbGFibGVcbiAgaWYgKGFnZW50SW5mby5wYXJlbnRBZ2VudElkKSB7XG4gICAgbWV0YWRhdGFFdmVudHMucHVzaCh7XG4gICAgICBuYW1lOiAncGFyZW50X2FnZW50JyxcbiAgICAgIGNhdDogJ19fbWV0YWRhdGEnLFxuICAgICAgcGg6ICdNJyxcbiAgICAgIHRzOiAwLFxuICAgICAgcGlkOiBhZ2VudEluZm8ucHJvY2Vzc0lkLFxuICAgICAgdGlkOiAwLFxuICAgICAgYXJnczoge1xuICAgICAgICBwYXJlbnRfYWdlbnRfaWQ6IGFnZW50SW5mby5wYXJlbnRBZ2VudElkLFxuICAgICAgfSxcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgUGVyZmV0dG8gdHJhY2luZyBpcyBlbmFibGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1BlcmZldHRvVHJhY2luZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc0VuYWJsZWRcbn1cblxuLyoqXG4gKiBSZWdpc3RlciBhIG5ldyBhZ2VudCBpbiB0aGUgdHJhY2VcbiAqIENhbGwgdGhpcyB3aGVuIGEgc3ViYWdlbnQvdGVhbW1hdGUgaXMgc3Bhd25lZFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJBZ2VudChcbiAgYWdlbnRJZDogc3RyaW5nLFxuICBhZ2VudE5hbWU6IHN0cmluZyxcbiAgcGFyZW50QWdlbnRJZD86IHN0cmluZyxcbik6IHZvaWQge1xuICBpZiAoIWlzRW5hYmxlZCkgcmV0dXJuXG5cbiAgY29uc3QgaW5mbzogQWdlbnRJbmZvID0ge1xuICAgIGFnZW50SWQsXG4gICAgYWdlbnROYW1lLFxuICAgIHBhcmVudEFnZW50SWQsXG4gICAgcHJvY2Vzc0lkOiBnZXRQcm9jZXNzSWRGb3JBZ2VudChhZ2VudElkKSxcbiAgICB0aHJlYWRJZDogc3RyaW5nVG9OdW1lcmljSGFzaChhZ2VudE5hbWUpLFxuICB9XG5cbiAgYWdlbnRSZWdpc3RyeS5zZXQoYWdlbnRJZCwgaW5mbylcbiAgdG90YWxBZ2VudENvdW50KytcbiAgZW1pdFByb2Nlc3NNZXRhZGF0YShpbmZvKVxufVxuXG4vKipcbiAqIFVucmVnaXN0ZXIgYW4gYWdlbnQgZnJvbSB0aGUgdHJhY2UuXG4gKiBDYWxsIHRoaXMgd2hlbiBhbiBhZ2VudCBjb21wbGV0ZXMsIGZhaWxzLCBvciBpcyBhYm9ydGVkIHRvIGZyZWUgbWVtb3J5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5yZWdpc3RlckFnZW50KGFnZW50SWQ6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoIWlzRW5hYmxlZCkgcmV0dXJuXG4gIGFnZW50UmVnaXN0cnkuZGVsZXRlKGFnZW50SWQpXG4gIGFnZW50SWRUb1Byb2Nlc3NJZC5kZWxldGUoYWdlbnRJZClcbn1cblxuLyoqXG4gKiBTdGFydCBhbiBBUEkgY2FsbCBzcGFuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydExMTVJlcXVlc3RQZXJmZXR0b1NwYW4oYXJnczoge1xuICBtb2RlbDogc3RyaW5nXG4gIHByb21wdFRva2Vucz86IG51bWJlclxuICBtZXNzYWdlSWQ/OiBzdHJpbmdcbiAgaXNTcGVjdWxhdGl2ZT86IGJvb2xlYW5cbiAgcXVlcnlTb3VyY2U/OiBzdHJpbmdcbn0pOiBzdHJpbmcge1xuICBpZiAoIWlzRW5hYmxlZCkgcmV0dXJuICcnXG5cbiAgY29uc3Qgc3BhbklkID0gZ2VuZXJhdGVTcGFuSWQoKVxuICBjb25zdCBhZ2VudEluZm8gPSBnZXRDdXJyZW50QWdlbnRJbmZvKClcblxuICBwZW5kaW5nU3BhbnMuc2V0KHNwYW5JZCwge1xuICAgIG5hbWU6ICdBUEkgQ2FsbCcsXG4gICAgY2F0ZWdvcnk6ICdhcGknLFxuICAgIHN0YXJ0VGltZTogZ2V0VGltZXN0YW1wKCksXG4gICAgYWdlbnRJbmZvLFxuICAgIGFyZ3M6IHtcbiAgICAgIG1vZGVsOiBhcmdzLm1vZGVsLFxuICAgICAgcHJvbXB0X3Rva2VuczogYXJncy5wcm9tcHRUb2tlbnMsXG4gICAgICBtZXNzYWdlX2lkOiBhcmdzLm1lc3NhZ2VJZCxcbiAgICAgIGlzX3NwZWN1bGF0aXZlOiBhcmdzLmlzU3BlY3VsYXRpdmUgPz8gZmFsc2UsXG4gICAgICBxdWVyeV9zb3VyY2U6IGFyZ3MucXVlcnlTb3VyY2UsXG4gICAgfSxcbiAgfSlcblxuICAvLyBFbWl0IGJlZ2luIGV2ZW50XG4gIGV2ZW50cy5wdXNoKHtcbiAgICBuYW1lOiAnQVBJIENhbGwnLFxuICAgIGNhdDogJ2FwaScsXG4gICAgcGg6ICdCJyxcbiAgICB0czogcGVuZGluZ1NwYW5zLmdldChzcGFuSWQpIS5zdGFydFRpbWUsXG4gICAgcGlkOiBhZ2VudEluZm8ucHJvY2Vzc0lkLFxuICAgIHRpZDogYWdlbnRJbmZvLnRocmVhZElkLFxuICAgIGFyZ3M6IHBlbmRpbmdTcGFucy5nZXQoc3BhbklkKSEuYXJncyxcbiAgfSlcblxuICByZXR1cm4gc3BhbklkXG59XG5cbi8qKlxuICogRW5kIGFuIEFQSSBjYWxsIHNwYW4gd2l0aCByZXNwb25zZSBtZXRhZGF0YVxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5kTExNUmVxdWVzdFBlcmZldHRvU3BhbihcbiAgc3BhbklkOiBzdHJpbmcsXG4gIG1ldGFkYXRhOiB7XG4gICAgdHRmdE1zPzogbnVtYmVyXG4gICAgdHRsdE1zPzogbnVtYmVyXG4gICAgcHJvbXB0VG9rZW5zPzogbnVtYmVyXG4gICAgb3V0cHV0VG9rZW5zPzogbnVtYmVyXG4gICAgY2FjaGVSZWFkVG9rZW5zPzogbnVtYmVyXG4gICAgY2FjaGVDcmVhdGlvblRva2Vucz86IG51bWJlclxuICAgIG1lc3NhZ2VJZD86IHN0cmluZ1xuICAgIHN1Y2Nlc3M/OiBib29sZWFuXG4gICAgZXJyb3I/OiBzdHJpbmdcbiAgICAvKiogVGltZSBzcGVudCBpbiBwcmUtcmVxdWVzdCBzZXR1cCAoY2xpZW50IGNyZWF0aW9uLCByZXRyaWVzKSBiZWZvcmUgdGhlIHN1Y2Nlc3NmdWwgYXR0ZW1wdCAqL1xuICAgIHJlcXVlc3RTZXR1cE1zPzogbnVtYmVyXG4gICAgLyoqIFRpbWVzdGFtcHMgKERhdGUubm93KCkpIG9mIGVhY2ggYXR0ZW1wdCBzdGFydCBcdTIwMTQgdXNlZCB0byBlbWl0IHJldHJ5IHN1Yi1zcGFucyAqL1xuICAgIGF0dGVtcHRTdGFydFRpbWVzPzogbnVtYmVyW11cbiAgfSxcbik6IHZvaWQge1xuICBpZiAoIWlzRW5hYmxlZCB8fCAhc3BhbklkKSByZXR1cm5cblxuICBjb25zdCBwZW5kaW5nID0gcGVuZGluZ1NwYW5zLmdldChzcGFuSWQpXG4gIGlmICghcGVuZGluZykgcmV0dXJuXG5cbiAgY29uc3QgZW5kVGltZSA9IGdldFRpbWVzdGFtcCgpXG4gIGNvbnN0IGR1cmF0aW9uID0gZW5kVGltZSAtIHBlbmRpbmcuc3RhcnRUaW1lXG5cbiAgY29uc3QgcHJvbXB0VG9rZW5zID1cbiAgICBtZXRhZGF0YS5wcm9tcHRUb2tlbnMgPz8gKHBlbmRpbmcuYXJncy5wcm9tcHRfdG9rZW5zIGFzIG51bWJlciB8IHVuZGVmaW5lZClcbiAgY29uc3QgdHRmdE1zID0gbWV0YWRhdGEudHRmdE1zXG4gIGNvbnN0IHR0bHRNcyA9IG1ldGFkYXRhLnR0bHRNc1xuICBjb25zdCBvdXRwdXRUb2tlbnMgPSBtZXRhZGF0YS5vdXRwdXRUb2tlbnNcbiAgY29uc3QgY2FjaGVSZWFkVG9rZW5zID0gbWV0YWRhdGEuY2FjaGVSZWFkVG9rZW5zXG5cbiAgLy8gQ29tcHV0ZSBkZXJpdmVkIG1ldHJpY3NcbiAgLy8gSVRQUzogaW5wdXQgdG9rZW5zIHBlciBzZWNvbmQgKHByb21wdCBwcm9jZXNzaW5nIHNwZWVkKVxuICBjb25zdCBpdHBzID1cbiAgICB0dGZ0TXMgIT09IHVuZGVmaW5lZCAmJiBwcm9tcHRUb2tlbnMgIT09IHVuZGVmaW5lZCAmJiB0dGZ0TXMgPiAwXG4gICAgICA/IE1hdGgucm91bmQoKHByb21wdFRva2VucyAvICh0dGZ0TXMgLyAxMDAwKSkgKiAxMDApIC8gMTAwXG4gICAgICA6IHVuZGVmaW5lZFxuXG4gIC8vIE9UUFM6IG91dHB1dCB0b2tlbnMgcGVyIHNlY29uZCAoc2FtcGxpbmcgc3BlZWQpXG4gIGNvbnN0IHNhbXBsaW5nTXMgPVxuICAgIHR0bHRNcyAhPT0gdW5kZWZpbmVkICYmIHR0ZnRNcyAhPT0gdW5kZWZpbmVkID8gdHRsdE1zIC0gdHRmdE1zIDogdW5kZWZpbmVkXG4gIGNvbnN0IG90cHMgPVxuICAgIHNhbXBsaW5nTXMgIT09IHVuZGVmaW5lZCAmJiBvdXRwdXRUb2tlbnMgIT09IHVuZGVmaW5lZCAmJiBzYW1wbGluZ01zID4gMFxuICAgICAgPyBNYXRoLnJvdW5kKChvdXRwdXRUb2tlbnMgLyAoc2FtcGxpbmdNcyAvIDEwMDApKSAqIDEwMCkgLyAxMDBcbiAgICAgIDogdW5kZWZpbmVkXG5cbiAgLy8gQ2FjaGUgaGl0IHJhdGU6IHBlcmNlbnRhZ2Ugb2YgcHJvbXB0IHRva2VucyBmcm9tIGNhY2hlXG4gIGNvbnN0IGNhY2hlSGl0UmF0ZSA9XG4gICAgY2FjaGVSZWFkVG9rZW5zICE9PSB1bmRlZmluZWQgJiZcbiAgICBwcm9tcHRUb2tlbnMgIT09IHVuZGVmaW5lZCAmJlxuICAgIHByb21wdFRva2VucyA+IDBcbiAgICAgID8gTWF0aC5yb3VuZCgoY2FjaGVSZWFkVG9rZW5zIC8gcHJvbXB0VG9rZW5zKSAqIDEwMDAwKSAvIDEwMFxuICAgICAgOiB1bmRlZmluZWRcblxuICBjb25zdCByZXF1ZXN0U2V0dXBNcyA9IG1ldGFkYXRhLnJlcXVlc3RTZXR1cE1zXG4gIGNvbnN0IGF0dGVtcHRTdGFydFRpbWVzID0gbWV0YWRhdGEuYXR0ZW1wdFN0YXJ0VGltZXNcblxuICAvLyBNZXJnZSBtZXRhZGF0YSB3aXRoIG9yaWdpbmFsIGFyZ3NcbiAgY29uc3QgYXJncyA9IHtcbiAgICAuLi5wZW5kaW5nLmFyZ3MsXG4gICAgdHRmdF9tczogdHRmdE1zLFxuICAgIHR0bHRfbXM6IHR0bHRNcyxcbiAgICBwcm9tcHRfdG9rZW5zOiBwcm9tcHRUb2tlbnMsXG4gICAgb3V0cHV0X3Rva2Vuczogb3V0cHV0VG9rZW5zLFxuICAgIGNhY2hlX3JlYWRfdG9rZW5zOiBjYWNoZVJlYWRUb2tlbnMsXG4gICAgY2FjaGVfY3JlYXRpb25fdG9rZW5zOiBtZXRhZGF0YS5jYWNoZUNyZWF0aW9uVG9rZW5zLFxuICAgIG1lc3NhZ2VfaWQ6IG1ldGFkYXRhLm1lc3NhZ2VJZCA/PyBwZW5kaW5nLmFyZ3MubWVzc2FnZV9pZCxcbiAgICBzdWNjZXNzOiBtZXRhZGF0YS5zdWNjZXNzID8/IHRydWUsXG4gICAgZXJyb3I6IG1ldGFkYXRhLmVycm9yLFxuICAgIGR1cmF0aW9uX21zOiBkdXJhdGlvbiAvIDEwMDAsXG4gICAgcmVxdWVzdF9zZXR1cF9tczogcmVxdWVzdFNldHVwTXMsXG4gICAgLy8gRGVyaXZlZCBtZXRyaWNzXG4gICAgaXRwcyxcbiAgICBvdHBzLFxuICAgIGNhY2hlX2hpdF9yYXRlX3BjdDogY2FjaGVIaXRSYXRlLFxuICB9XG5cbiAgLy8gRW1pdCBSZXF1ZXN0IFNldHVwIHN1Yi1zcGFuIHdoZW4gdGhlcmUgd2FzIG1lYXN1cmFibGUgc2V0dXAgdGltZVxuICAvLyAoY2xpZW50IGNyZWF0aW9uLCBwYXJhbSBidWlsZGluZywgcmV0cmllcyBiZWZvcmUgdGhlIHN1Y2Nlc3NmdWwgYXR0ZW1wdClcbiAgY29uc3Qgc2V0dXBVcyA9XG4gICAgcmVxdWVzdFNldHVwTXMgIT09IHVuZGVmaW5lZCAmJiByZXF1ZXN0U2V0dXBNcyA+IDBcbiAgICAgID8gcmVxdWVzdFNldHVwTXMgKiAxMDAwXG4gICAgICA6IDBcbiAgaWYgKHNldHVwVXMgPiAwKSB7XG4gICAgY29uc3Qgc2V0dXBFbmRUcyA9IHBlbmRpbmcuc3RhcnRUaW1lICsgc2V0dXBVc1xuXG4gICAgZXZlbnRzLnB1c2goe1xuICAgICAgbmFtZTogJ1JlcXVlc3QgU2V0dXAnLFxuICAgICAgY2F0OiAnYXBpLHNldHVwJyxcbiAgICAgIHBoOiAnQicsXG4gICAgICB0czogcGVuZGluZy5zdGFydFRpbWUsXG4gICAgICBwaWQ6IHBlbmRpbmcuYWdlbnRJbmZvLnByb2Nlc3NJZCxcbiAgICAgIHRpZDogcGVuZGluZy5hZ2VudEluZm8udGhyZWFkSWQsXG4gICAgICBhcmdzOiB7XG4gICAgICAgIHJlcXVlc3Rfc2V0dXBfbXM6IHJlcXVlc3RTZXR1cE1zLFxuICAgICAgICBhdHRlbXB0X2NvdW50OiBhdHRlbXB0U3RhcnRUaW1lcz8ubGVuZ3RoID8/IDEsXG4gICAgICB9LFxuICAgIH0pXG5cbiAgICAvLyBFbWl0IHJldHJ5IGF0dGVtcHQgc3ViLXNwYW5zIHdpdGhpbiBSZXF1ZXN0IFNldHVwLlxuICAgIC8vIEVhY2ggZmFpbGVkIGF0dGVtcHQgcnVucyBmcm9tIGl0cyBzdGFydCB0byB0aGUgbmV4dCBhdHRlbXB0J3Mgc3RhcnQuXG4gICAgaWYgKGF0dGVtcHRTdGFydFRpbWVzICYmIGF0dGVtcHRTdGFydFRpbWVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIC8vIGF0dGVtcHRTdGFydFRpbWVzWzBdIGlzIHRoZSByZWZlcmVuY2UgcG9pbnQgKGZpcnN0IGF0dGVtcHQpLlxuICAgICAgLy8gQ29udmVydCB3YWxsLWNsb2NrIGRlbHRhcyBpbnRvIFBlcmZldHRvLXJlbGF0aXZlIG1pY3Jvc2Vjb25kcy5cbiAgICAgIGNvbnN0IGJhc2VXYWxsTXMgPSBhdHRlbXB0U3RhcnRUaW1lc1swXSFcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0ZW1wdFN0YXJ0VGltZXMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRTdGFydFVzID1cbiAgICAgICAgICBwZW5kaW5nLnN0YXJ0VGltZSArIChhdHRlbXB0U3RhcnRUaW1lc1tpXSEgLSBiYXNlV2FsbE1zKSAqIDEwMDBcbiAgICAgICAgY29uc3QgYXR0ZW1wdEVuZFVzID1cbiAgICAgICAgICBwZW5kaW5nLnN0YXJ0VGltZSArIChhdHRlbXB0U3RhcnRUaW1lc1tpICsgMV0hIC0gYmFzZVdhbGxNcykgKiAxMDAwXG5cbiAgICAgICAgZXZlbnRzLnB1c2goe1xuICAgICAgICAgIG5hbWU6IGBBdHRlbXB0ICR7aSArIDF9IChyZXRyeSlgLFxuICAgICAgICAgIGNhdDogJ2FwaSxyZXRyeScsXG4gICAgICAgICAgcGg6ICdCJyxcbiAgICAgICAgICB0czogYXR0ZW1wdFN0YXJ0VXMsXG4gICAgICAgICAgcGlkOiBwZW5kaW5nLmFnZW50SW5mby5wcm9jZXNzSWQsXG4gICAgICAgICAgdGlkOiBwZW5kaW5nLmFnZW50SW5mby50aHJlYWRJZCxcbiAgICAgICAgICBhcmdzOiB7IGF0dGVtcHQ6IGkgKyAxIH0sXG4gICAgICAgIH0pXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBgQXR0ZW1wdCAke2kgKyAxfSAocmV0cnkpYCxcbiAgICAgICAgICBjYXQ6ICdhcGkscmV0cnknLFxuICAgICAgICAgIHBoOiAnRScsXG4gICAgICAgICAgdHM6IGF0dGVtcHRFbmRVcyxcbiAgICAgICAgICBwaWQ6IHBlbmRpbmcuYWdlbnRJbmZvLnByb2Nlc3NJZCxcbiAgICAgICAgICB0aWQ6IHBlbmRpbmcuYWdlbnRJbmZvLnRocmVhZElkLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cy5wdXNoKHtcbiAgICAgIG5hbWU6ICdSZXF1ZXN0IFNldHVwJyxcbiAgICAgIGNhdDogJ2FwaSxzZXR1cCcsXG4gICAgICBwaDogJ0UnLFxuICAgICAgdHM6IHNldHVwRW5kVHMsXG4gICAgICBwaWQ6IHBlbmRpbmcuYWdlbnRJbmZvLnByb2Nlc3NJZCxcbiAgICAgIHRpZDogcGVuZGluZy5hZ2VudEluZm8udGhyZWFkSWQsXG4gICAgfSlcbiAgfVxuXG4gIC8vIEVtaXQgc3ViLXNwYW5zIGZvciBGaXJzdCBUb2tlbiBhbmQgU2FtcGxpbmcgcGhhc2VzIChiZWZvcmUgQVBJIENhbGwgZW5kKVxuICAvLyBVc2luZyBCL0UgcGFpcnMgaW4gcHJvcGVyIG5lc3Rpbmcgb3JkZXIgZm9yIGNvcnJlY3QgUGVyZmV0dG8gdmlzdWFsaXphdGlvblxuICBpZiAodHRmdE1zICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBGaXJzdCBUb2tlbiBzdGFydHMgYWZ0ZXIgcmVxdWVzdCBzZXR1cCAoaWYgYW55KVxuICAgIGNvbnN0IGZpcnN0VG9rZW5TdGFydFRzID0gcGVuZGluZy5zdGFydFRpbWUgKyBzZXR1cFVzXG4gICAgY29uc3QgZmlyc3RUb2tlbkVuZFRzID0gZmlyc3RUb2tlblN0YXJ0VHMgKyB0dGZ0TXMgKiAxMDAwXG5cbiAgICAvLyBGaXJzdCBUb2tlbiBwaGFzZTogZnJvbSBzdWNjZXNzZnVsIGF0dGVtcHQgc3RhcnQgdG8gZmlyc3QgdG9rZW5cbiAgICBldmVudHMucHVzaCh7XG4gICAgICBuYW1lOiAnRmlyc3QgVG9rZW4nLFxuICAgICAgY2F0OiAnYXBpLHR0ZnQnLFxuICAgICAgcGg6ICdCJyxcbiAgICAgIHRzOiBmaXJzdFRva2VuU3RhcnRUcyxcbiAgICAgIHBpZDogcGVuZGluZy5hZ2VudEluZm8ucHJvY2Vzc0lkLFxuICAgICAgdGlkOiBwZW5kaW5nLmFnZW50SW5mby50aHJlYWRJZCxcbiAgICAgIGFyZ3M6IHtcbiAgICAgICAgdHRmdF9tczogdHRmdE1zLFxuICAgICAgICBwcm9tcHRfdG9rZW5zOiBwcm9tcHRUb2tlbnMsXG4gICAgICAgIGl0cHMsXG4gICAgICAgIGNhY2hlX2hpdF9yYXRlX3BjdDogY2FjaGVIaXRSYXRlLFxuICAgICAgfSxcbiAgICB9KVxuICAgIGV2ZW50cy5wdXNoKHtcbiAgICAgIG5hbWU6ICdGaXJzdCBUb2tlbicsXG4gICAgICBjYXQ6ICdhcGksdHRmdCcsXG4gICAgICBwaDogJ0UnLFxuICAgICAgdHM6IGZpcnN0VG9rZW5FbmRUcyxcbiAgICAgIHBpZDogcGVuZGluZy5hZ2VudEluZm8ucHJvY2Vzc0lkLFxuICAgICAgdGlkOiBwZW5kaW5nLmFnZW50SW5mby50aHJlYWRJZCxcbiAgICB9KVxuXG4gICAgLy8gU2FtcGxpbmcgcGhhc2U6IGZyb20gZmlyc3QgdG9rZW4gdG8gbGFzdCB0b2tlblxuICAgIC8vIE5vdGU6IHNhbXBsaW5nTXMgPSB0dGx0TXMgLSB0dGZ0TXMgc3RpbGwgaW5jbHVkZXMgc2V0dXAgdGltZSBpbiB0dGx0TXMsXG4gICAgLy8gc28gd2UgY29tcHV0ZSB0aGUgYWN0dWFsIHNhbXBsaW5nIGR1cmF0aW9uIGZvciB0aGUgc3BhbiBhcyB0aGUgdGltZSBmcm9tXG4gICAgLy8gZmlyc3QgdG9rZW4gdG8gQVBJIGNhbGwgZW5kIChlbmRUaW1lKSwgbm90IHNhbXBsaW5nTXMgZGlyZWN0bHkuXG4gICAgY29uc3QgYWN0dWFsU2FtcGxpbmdNcyA9XG4gICAgICB0dGx0TXMgIT09IHVuZGVmaW5lZCA/IHR0bHRNcyAtIHR0ZnRNcyAtIHNldHVwVXMgLyAxMDAwIDogdW5kZWZpbmVkXG4gICAgaWYgKGFjdHVhbFNhbXBsaW5nTXMgIT09IHVuZGVmaW5lZCAmJiBhY3R1YWxTYW1wbGluZ01zID4gMCkge1xuICAgICAgZXZlbnRzLnB1c2goe1xuICAgICAgICBuYW1lOiAnU2FtcGxpbmcnLFxuICAgICAgICBjYXQ6ICdhcGksc2FtcGxpbmcnLFxuICAgICAgICBwaDogJ0InLFxuICAgICAgICB0czogZmlyc3RUb2tlbkVuZFRzLFxuICAgICAgICBwaWQ6IHBlbmRpbmcuYWdlbnRJbmZvLnByb2Nlc3NJZCxcbiAgICAgICAgdGlkOiBwZW5kaW5nLmFnZW50SW5mby50aHJlYWRJZCxcbiAgICAgICAgYXJnczoge1xuICAgICAgICAgIHNhbXBsaW5nX21zOiBhY3R1YWxTYW1wbGluZ01zLFxuICAgICAgICAgIG91dHB1dF90b2tlbnM6IG91dHB1dFRva2VucyxcbiAgICAgICAgICBvdHBzLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIGV2ZW50cy5wdXNoKHtcbiAgICAgICAgbmFtZTogJ1NhbXBsaW5nJyxcbiAgICAgICAgY2F0OiAnYXBpLHNhbXBsaW5nJyxcbiAgICAgICAgcGg6ICdFJyxcbiAgICAgICAgdHM6IGZpcnN0VG9rZW5FbmRUcyArIGFjdHVhbFNhbXBsaW5nTXMgKiAxMDAwLFxuICAgICAgICBwaWQ6IHBlbmRpbmcuYWdlbnRJbmZvLnByb2Nlc3NJZCxcbiAgICAgICAgdGlkOiBwZW5kaW5nLmFnZW50SW5mby50aHJlYWRJZCxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gRW1pdCBBUEkgQ2FsbCBlbmQgZXZlbnQgKGFmdGVyIHN1Yi1zcGFucylcbiAgZXZlbnRzLnB1c2goe1xuICAgIG5hbWU6IHBlbmRpbmcubmFtZSxcbiAgICBjYXQ6IHBlbmRpbmcuY2F0ZWdvcnksXG4gICAgcGg6ICdFJyxcbiAgICB0czogZW5kVGltZSxcbiAgICBwaWQ6IHBlbmRpbmcuYWdlbnRJbmZvLnByb2Nlc3NJZCxcbiAgICB0aWQ6IHBlbmRpbmcuYWdlbnRJbmZvLnRocmVhZElkLFxuICAgIGFyZ3MsXG4gIH0pXG5cbiAgcGVuZGluZ1NwYW5zLmRlbGV0ZShzcGFuSWQpXG59XG5cbi8qKlxuICogU3RhcnQgYSB0b29sIGV4ZWN1dGlvbiBzcGFuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFRvb2xQZXJmZXR0b1NwYW4oXG4gIHRvb2xOYW1lOiBzdHJpbmcsXG4gIGFyZ3M/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbik6IHN0cmluZyB7XG4gIGlmICghaXNFbmFibGVkKSByZXR1cm4gJydcblxuICBjb25zdCBzcGFuSWQgPSBnZW5lcmF0ZVNwYW5JZCgpXG4gIGNvbnN0IGFnZW50SW5mbyA9IGdldEN1cnJlbnRBZ2VudEluZm8oKVxuXG4gIHBlbmRpbmdTcGFucy5zZXQoc3BhbklkLCB7XG4gICAgbmFtZTogYFRvb2w6ICR7dG9vbE5hbWV9YCxcbiAgICBjYXRlZ29yeTogJ3Rvb2wnLFxuICAgIHN0YXJ0VGltZTogZ2V0VGltZXN0YW1wKCksXG4gICAgYWdlbnRJbmZvLFxuICAgIGFyZ3M6IHtcbiAgICAgIHRvb2xfbmFtZTogdG9vbE5hbWUsXG4gICAgICAuLi5hcmdzLFxuICAgIH0sXG4gIH0pXG5cbiAgLy8gRW1pdCBiZWdpbiBldmVudFxuICBldmVudHMucHVzaCh7XG4gICAgbmFtZTogYFRvb2w6ICR7dG9vbE5hbWV9YCxcbiAgICBjYXQ6ICd0b29sJyxcbiAgICBwaDogJ0InLFxuICAgIHRzOiBwZW5kaW5nU3BhbnMuZ2V0KHNwYW5JZCkhLnN0YXJ0VGltZSxcbiAgICBwaWQ6IGFnZW50SW5mby5wcm9jZXNzSWQsXG4gICAgdGlkOiBhZ2VudEluZm8udGhyZWFkSWQsXG4gICAgYXJnczogcGVuZGluZ1NwYW5zLmdldChzcGFuSWQpIS5hcmdzLFxuICB9KVxuXG4gIHJldHVybiBzcGFuSWRcbn1cblxuLyoqXG4gKiBFbmQgYSB0b29sIGV4ZWN1dGlvbiBzcGFuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmRUb29sUGVyZmV0dG9TcGFuKFxuICBzcGFuSWQ6IHN0cmluZyxcbiAgbWV0YWRhdGE/OiB7XG4gICAgc3VjY2Vzcz86IGJvb2xlYW5cbiAgICBlcnJvcj86IHN0cmluZ1xuICAgIHJlc3VsdFRva2Vucz86IG51bWJlclxuICB9LFxuKTogdm9pZCB7XG4gIGlmICghaXNFbmFibGVkIHx8ICFzcGFuSWQpIHJldHVyblxuXG4gIGNvbnN0IHBlbmRpbmcgPSBwZW5kaW5nU3BhbnMuZ2V0KHNwYW5JZClcbiAgaWYgKCFwZW5kaW5nKSByZXR1cm5cblxuICBjb25zdCBlbmRUaW1lID0gZ2V0VGltZXN0YW1wKClcbiAgY29uc3QgZHVyYXRpb24gPSBlbmRUaW1lIC0gcGVuZGluZy5zdGFydFRpbWVcblxuICBjb25zdCBhcmdzID0ge1xuICAgIC4uLnBlbmRpbmcuYXJncyxcbiAgICBzdWNjZXNzOiBtZXRhZGF0YT8uc3VjY2VzcyA/PyB0cnVlLFxuICAgIGVycm9yOiBtZXRhZGF0YT8uZXJyb3IsXG4gICAgcmVzdWx0X3Rva2VuczogbWV0YWRhdGE/LnJlc3VsdFRva2VucyxcbiAgICBkdXJhdGlvbl9tczogZHVyYXRpb24gLyAxMDAwLFxuICB9XG5cbiAgLy8gRW1pdCBlbmQgZXZlbnRcbiAgZXZlbnRzLnB1c2goe1xuICAgIG5hbWU6IHBlbmRpbmcubmFtZSxcbiAgICBjYXQ6IHBlbmRpbmcuY2F0ZWdvcnksXG4gICAgcGg6ICdFJyxcbiAgICB0czogZW5kVGltZSxcbiAgICBwaWQ6IHBlbmRpbmcuYWdlbnRJbmZvLnByb2Nlc3NJZCxcbiAgICB0aWQ6IHBlbmRpbmcuYWdlbnRJbmZvLnRocmVhZElkLFxuICAgIGFyZ3MsXG4gIH0pXG5cbiAgcGVuZGluZ1NwYW5zLmRlbGV0ZShzcGFuSWQpXG59XG5cbi8qKlxuICogU3RhcnQgYSB1c2VyIGlucHV0IHdhaXRpbmcgc3BhblxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRVc2VySW5wdXRQZXJmZXR0b1NwYW4oY29udGV4dD86IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghaXNFbmFibGVkKSByZXR1cm4gJydcblxuICBjb25zdCBzcGFuSWQgPSBnZW5lcmF0ZVNwYW5JZCgpXG4gIGNvbnN0IGFnZW50SW5mbyA9IGdldEN1cnJlbnRBZ2VudEluZm8oKVxuXG4gIHBlbmRpbmdTcGFucy5zZXQoc3BhbklkLCB7XG4gICAgbmFtZTogJ1dhaXRpbmcgZm9yIFVzZXIgSW5wdXQnLFxuICAgIGNhdGVnb3J5OiAndXNlcl9pbnB1dCcsXG4gICAgc3RhcnRUaW1lOiBnZXRUaW1lc3RhbXAoKSxcbiAgICBhZ2VudEluZm8sXG4gICAgYXJnczoge1xuICAgICAgY29udGV4dCxcbiAgICB9LFxuICB9KVxuXG4gIC8vIEVtaXQgYmVnaW4gZXZlbnRcbiAgZXZlbnRzLnB1c2goe1xuICAgIG5hbWU6ICdXYWl0aW5nIGZvciBVc2VyIElucHV0JyxcbiAgICBjYXQ6ICd1c2VyX2lucHV0JyxcbiAgICBwaDogJ0InLFxuICAgIHRzOiBwZW5kaW5nU3BhbnMuZ2V0KHNwYW5JZCkhLnN0YXJ0VGltZSxcbiAgICBwaWQ6IGFnZW50SW5mby5wcm9jZXNzSWQsXG4gICAgdGlkOiBhZ2VudEluZm8udGhyZWFkSWQsXG4gICAgYXJnczogcGVuZGluZ1NwYW5zLmdldChzcGFuSWQpIS5hcmdzLFxuICB9KVxuXG4gIHJldHVybiBzcGFuSWRcbn1cblxuLyoqXG4gKiBFbmQgYSB1c2VyIGlucHV0IHdhaXRpbmcgc3BhblxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5kVXNlcklucHV0UGVyZmV0dG9TcGFuKFxuICBzcGFuSWQ6IHN0cmluZyxcbiAgbWV0YWRhdGE/OiB7XG4gICAgZGVjaXNpb24/OiBzdHJpbmdcbiAgICBzb3VyY2U/OiBzdHJpbmdcbiAgfSxcbik6IHZvaWQge1xuICBpZiAoIWlzRW5hYmxlZCB8fCAhc3BhbklkKSByZXR1cm5cblxuICBjb25zdCBwZW5kaW5nID0gcGVuZGluZ1NwYW5zLmdldChzcGFuSWQpXG4gIGlmICghcGVuZGluZykgcmV0dXJuXG5cbiAgY29uc3QgZW5kVGltZSA9IGdldFRpbWVzdGFtcCgpXG4gIGNvbnN0IGR1cmF0aW9uID0gZW5kVGltZSAtIHBlbmRpbmcuc3RhcnRUaW1lXG5cbiAgY29uc3QgYXJncyA9IHtcbiAgICAuLi5wZW5kaW5nLmFyZ3MsXG4gICAgZGVjaXNpb246IG1ldGFkYXRhPy5kZWNpc2lvbixcbiAgICBzb3VyY2U6IG1ldGFkYXRhPy5zb3VyY2UsXG4gICAgZHVyYXRpb25fbXM6IGR1cmF0aW9uIC8gMTAwMCxcbiAgfVxuXG4gIC8vIEVtaXQgZW5kIGV2ZW50XG4gIGV2ZW50cy5wdXNoKHtcbiAgICBuYW1lOiBwZW5kaW5nLm5hbWUsXG4gICAgY2F0OiBwZW5kaW5nLmNhdGVnb3J5LFxuICAgIHBoOiAnRScsXG4gICAgdHM6IGVuZFRpbWUsXG4gICAgcGlkOiBwZW5kaW5nLmFnZW50SW5mby5wcm9jZXNzSWQsXG4gICAgdGlkOiBwZW5kaW5nLmFnZW50SW5mby50aHJlYWRJZCxcbiAgICBhcmdzLFxuICB9KVxuXG4gIHBlbmRpbmdTcGFucy5kZWxldGUoc3BhbklkKVxufVxuXG4vKipcbiAqIEVtaXQgYW4gaW5zdGFudCBldmVudCAobWFya2VyKVxuICovXG5leHBvcnQgZnVuY3Rpb24gZW1pdFBlcmZldHRvSW5zdGFudChcbiAgbmFtZTogc3RyaW5nLFxuICBjYXRlZ29yeTogc3RyaW5nLFxuICBhcmdzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4pOiB2b2lkIHtcbiAgaWYgKCFpc0VuYWJsZWQpIHJldHVyblxuXG4gIGNvbnN0IGFnZW50SW5mbyA9IGdldEN1cnJlbnRBZ2VudEluZm8oKVxuXG4gIGV2ZW50cy5wdXNoKHtcbiAgICBuYW1lLFxuICAgIGNhdDogY2F0ZWdvcnksXG4gICAgcGg6ICdpJyxcbiAgICB0czogZ2V0VGltZXN0YW1wKCksXG4gICAgcGlkOiBhZ2VudEluZm8ucHJvY2Vzc0lkLFxuICAgIHRpZDogYWdlbnRJbmZvLnRocmVhZElkLFxuICAgIGFyZ3MsXG4gIH0pXG59XG5cbi8qKlxuICogRW1pdCBhIGNvdW50ZXIgZXZlbnQgZm9yIHRyYWNraW5nIG1ldHJpY3Mgb3ZlciB0aW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbWl0UGVyZmV0dG9Db3VudGVyKFxuICBuYW1lOiBzdHJpbmcsXG4gIHZhbHVlczogUmVjb3JkPHN0cmluZywgbnVtYmVyPixcbik6IHZvaWQge1xuICBpZiAoIWlzRW5hYmxlZCkgcmV0dXJuXG5cbiAgY29uc3QgYWdlbnRJbmZvID0gZ2V0Q3VycmVudEFnZW50SW5mbygpXG5cbiAgZXZlbnRzLnB1c2goe1xuICAgIG5hbWUsXG4gICAgY2F0OiAnY291bnRlcicsXG4gICAgcGg6ICdDJyxcbiAgICB0czogZ2V0VGltZXN0YW1wKCksXG4gICAgcGlkOiBhZ2VudEluZm8ucHJvY2Vzc0lkLFxuICAgIHRpZDogYWdlbnRJbmZvLnRocmVhZElkLFxuICAgIGFyZ3M6IHZhbHVlcyxcbiAgfSlcbn1cblxuLyoqXG4gKiBTdGFydCBhbiBpbnRlcmFjdGlvbiBzcGFuICh3cmFwcyBhIGZ1bGwgdXNlciByZXF1ZXN0IGN5Y2xlKVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRJbnRlcmFjdGlvblBlcmZldHRvU3Bhbih1c2VyUHJvbXB0Pzogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKCFpc0VuYWJsZWQpIHJldHVybiAnJ1xuXG4gIGNvbnN0IHNwYW5JZCA9IGdlbmVyYXRlU3BhbklkKClcbiAgY29uc3QgYWdlbnRJbmZvID0gZ2V0Q3VycmVudEFnZW50SW5mbygpXG5cbiAgcGVuZGluZ1NwYW5zLnNldChzcGFuSWQsIHtcbiAgICBuYW1lOiAnSW50ZXJhY3Rpb24nLFxuICAgIGNhdGVnb3J5OiAnaW50ZXJhY3Rpb24nLFxuICAgIHN0YXJ0VGltZTogZ2V0VGltZXN0YW1wKCksXG4gICAgYWdlbnRJbmZvLFxuICAgIGFyZ3M6IHtcbiAgICAgIHVzZXJfcHJvbXB0X2xlbmd0aDogdXNlclByb21wdD8ubGVuZ3RoLFxuICAgIH0sXG4gIH0pXG5cbiAgLy8gRW1pdCBiZWdpbiBldmVudFxuICBldmVudHMucHVzaCh7XG4gICAgbmFtZTogJ0ludGVyYWN0aW9uJyxcbiAgICBjYXQ6ICdpbnRlcmFjdGlvbicsXG4gICAgcGg6ICdCJyxcbiAgICB0czogcGVuZGluZ1NwYW5zLmdldChzcGFuSWQpIS5zdGFydFRpbWUsXG4gICAgcGlkOiBhZ2VudEluZm8ucHJvY2Vzc0lkLFxuICAgIHRpZDogYWdlbnRJbmZvLnRocmVhZElkLFxuICAgIGFyZ3M6IHBlbmRpbmdTcGFucy5nZXQoc3BhbklkKSEuYXJncyxcbiAgfSlcblxuICByZXR1cm4gc3BhbklkXG59XG5cbi8qKlxuICogRW5kIGFuIGludGVyYWN0aW9uIHNwYW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuZEludGVyYWN0aW9uUGVyZmV0dG9TcGFuKHNwYW5JZDogc3RyaW5nKTogdm9pZCB7XG4gIGlmICghaXNFbmFibGVkIHx8ICFzcGFuSWQpIHJldHVyblxuXG4gIGNvbnN0IHBlbmRpbmcgPSBwZW5kaW5nU3BhbnMuZ2V0KHNwYW5JZClcbiAgaWYgKCFwZW5kaW5nKSByZXR1cm5cblxuICBjb25zdCBlbmRUaW1lID0gZ2V0VGltZXN0YW1wKClcbiAgY29uc3QgZHVyYXRpb24gPSBlbmRUaW1lIC0gcGVuZGluZy5zdGFydFRpbWVcblxuICAvLyBFbWl0IGVuZCBldmVudFxuICBldmVudHMucHVzaCh7XG4gICAgbmFtZTogcGVuZGluZy5uYW1lLFxuICAgIGNhdDogcGVuZGluZy5jYXRlZ29yeSxcbiAgICBwaDogJ0UnLFxuICAgIHRzOiBlbmRUaW1lLFxuICAgIHBpZDogcGVuZGluZy5hZ2VudEluZm8ucHJvY2Vzc0lkLFxuICAgIHRpZDogcGVuZGluZy5hZ2VudEluZm8udGhyZWFkSWQsXG4gICAgYXJnczoge1xuICAgICAgLi4ucGVuZGluZy5hcmdzLFxuICAgICAgZHVyYXRpb25fbXM6IGR1cmF0aW9uIC8gMTAwMCxcbiAgICB9LFxuICB9KVxuXG4gIHBlbmRpbmdTcGFucy5kZWxldGUoc3BhbklkKVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFBlcmlvZGljIHdyaXRlIGhlbHBlcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIFN0b3AgdGhlIHBlcmlvZGljIHdyaXRlIHRpbWVyLlxuICovXG5mdW5jdGlvbiBzdG9wV3JpdGVJbnRlcnZhbCgpOiB2b2lkIHtcbiAgaWYgKHN0YWxlU3BhbkNsZWFudXBJZCkge1xuICAgIGNsZWFySW50ZXJ2YWwoc3RhbGVTcGFuQ2xlYW51cElkKVxuICAgIHN0YWxlU3BhbkNsZWFudXBJZCA9IG51bGxcbiAgfVxuICBpZiAod3JpdGVJbnRlcnZhbElkKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh3cml0ZUludGVydmFsSWQpXG4gICAgd3JpdGVJbnRlcnZhbElkID0gbnVsbFxuICB9XG59XG5cbi8qKlxuICogRm9yY2UtY2xvc2UgYW55IHJlbWFpbmluZyBvcGVuIHNwYW5zIGF0IHNlc3Npb24gZW5kLlxuICovXG5mdW5jdGlvbiBjbG9zZU9wZW5TcGFucygpOiB2b2lkIHtcbiAgZm9yIChjb25zdCBbc3BhbklkLCBwZW5kaW5nXSBvZiBwZW5kaW5nU3BhbnMpIHtcbiAgICBjb25zdCBlbmRUaW1lID0gZ2V0VGltZXN0YW1wKClcbiAgICBldmVudHMucHVzaCh7XG4gICAgICBuYW1lOiBwZW5kaW5nLm5hbWUsXG4gICAgICBjYXQ6IHBlbmRpbmcuY2F0ZWdvcnksXG4gICAgICBwaDogJ0UnLFxuICAgICAgdHM6IGVuZFRpbWUsXG4gICAgICBwaWQ6IHBlbmRpbmcuYWdlbnRJbmZvLnByb2Nlc3NJZCxcbiAgICAgIHRpZDogcGVuZGluZy5hZ2VudEluZm8udGhyZWFkSWQsXG4gICAgICBhcmdzOiB7XG4gICAgICAgIC4uLnBlbmRpbmcuYXJncyxcbiAgICAgICAgaW5jb21wbGV0ZTogdHJ1ZSxcbiAgICAgICAgZHVyYXRpb25fbXM6IChlbmRUaW1lIC0gcGVuZGluZy5zdGFydFRpbWUpIC8gMTAwMCxcbiAgICAgIH0sXG4gICAgfSlcbiAgICBwZW5kaW5nU3BhbnMuZGVsZXRlKHNwYW5JZClcbiAgfVxufVxuXG4vKipcbiAqIFdyaXRlIHRoZSBmdWxsIHRyYWNlIHRvIGRpc2suICBFcnJvcnMgYXJlIGxvZ2dlZCBidXQgc3dhbGxvd2VkIHNvIHRoYXQgYVxuICogdHJhbnNpZW50IEkvTyBwcm9ibGVtIGRvZXMgbm90IGNyYXNoIHRoZSBzZXNzaW9uIFx1MjAxNCB0aGUgbmV4dCBwZXJpb2RpYyB0aWNrXG4gKiAob3IgdGhlIGZpbmFsIGV4aXQgd3JpdGUpIHdpbGwgcmV0cnkgd2l0aCBhIGNvbXBsZXRlIHNuYXBzaG90LlxuICovXG5hc3luYyBmdW5jdGlvbiBwZXJpb2RpY1dyaXRlKCk6IFByb21pc2U8dm9pZD4ge1xuICBpZiAoIWlzRW5hYmxlZCB8fCAhdHJhY2VQYXRoIHx8IHRyYWNlV3JpdHRlbikgcmV0dXJuXG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBta2RpcihkaXJuYW1lKHRyYWNlUGF0aCksIHsgcmVjdXJzaXZlOiB0cnVlIH0pXG4gICAgYXdhaXQgd3JpdGVGaWxlKHRyYWNlUGF0aCwgYnVpbGRUcmFjZURvY3VtZW50KCkpXG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFtQZXJmZXR0b10gUGVyaW9kaWMgd3JpdGU6ICR7ZXZlbnRzLmxlbmd0aH0gZXZlbnRzIHRvICR7dHJhY2VQYXRofWAsXG4gICAgKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbUGVyZmV0dG9dIFBlcmlvZGljIHdyaXRlIGZhaWxlZDogJHtlcnJvck1lc3NhZ2UoZXJyb3IpfWAsXG4gICAgICB7IGxldmVsOiAnZXJyb3InIH0sXG4gICAgKVxuICB9XG59XG5cbi8qKlxuICogRmluYWwgYXN5bmMgd3JpdGU6IGNsb3NlIG9wZW4gc3BhbnMgYW5kIHdyaXRlIHRoZSBjb21wbGV0ZSB0cmFjZS5cbiAqIElkZW1wb3RlbnQgXHUyMDE0IHNldHMgYHRyYWNlV3JpdHRlbmAgb24gc3VjY2VzcyBzbyBzdWJzZXF1ZW50IGNhbGxzIGFyZSBuby1vcHMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHdyaXRlUGVyZmV0dG9UcmFjZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgaWYgKCFpc0VuYWJsZWQgfHwgIXRyYWNlUGF0aCB8fCB0cmFjZVdyaXR0ZW4pIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgW1BlcmZldHRvXSBTa2lwcGluZyBmaW5hbCB3cml0ZTogaXNFbmFibGVkPSR7aXNFbmFibGVkfSwgdHJhY2VQYXRoPSR7dHJhY2VQYXRofSwgdHJhY2VXcml0dGVuPSR7dHJhY2VXcml0dGVufWAsXG4gICAgKVxuICAgIHJldHVyblxuICB9XG5cbiAgc3RvcFdyaXRlSW50ZXJ2YWwoKVxuICBjbG9zZU9wZW5TcGFucygpXG5cbiAgbG9nRm9yRGVidWdnaW5nKFxuICAgIGBbUGVyZmV0dG9dIHdyaXRlUGVyZmV0dG9UcmFjZSBjYWxsZWQ6IGV2ZW50cz0ke2V2ZW50cy5sZW5ndGh9YCxcbiAgKVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgbWtkaXIoZGlybmFtZSh0cmFjZVBhdGgpLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KVxuICAgIGF3YWl0IHdyaXRlRmlsZSh0cmFjZVBhdGgsIGJ1aWxkVHJhY2VEb2N1bWVudCgpKVxuICAgIHRyYWNlV3JpdHRlbiA9IHRydWVcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoYFtQZXJmZXR0b10gVHJhY2UgZmluYWxpemVkIGF0OiAke3RyYWNlUGF0aH1gKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbUGVyZmV0dG9dIEZhaWxlZCB0byB3cml0ZSBmaW5hbCB0cmFjZTogJHtlcnJvck1lc3NhZ2UoZXJyb3IpfWAsXG4gICAgICB7IGxldmVsOiAnZXJyb3InIH0sXG4gICAgKVxuICB9XG59XG5cbi8qKlxuICogRmluYWwgc3luY2hyb25vdXMgd3JpdGUgKGZhbGxiYWNrIGZvciBwcm9jZXNzICdleGl0JyBoYW5kbGVyIHdoZXJlIGFzeW5jIGlzIGZvcmJpZGRlbikuXG4gKi9cbmZ1bmN0aW9uIHdyaXRlUGVyZmV0dG9UcmFjZVN5bmMoKTogdm9pZCB7XG4gIGlmICghaXNFbmFibGVkIHx8ICF0cmFjZVBhdGggfHwgdHJhY2VXcml0dGVuKSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFtQZXJmZXR0b10gU2tpcHBpbmcgZmluYWwgc3luYyB3cml0ZTogaXNFbmFibGVkPSR7aXNFbmFibGVkfSwgdHJhY2VQYXRoPSR7dHJhY2VQYXRofSwgdHJhY2VXcml0dGVuPSR7dHJhY2VXcml0dGVufWAsXG4gICAgKVxuICAgIHJldHVyblxuICB9XG5cbiAgc3RvcFdyaXRlSW50ZXJ2YWwoKVxuICBjbG9zZU9wZW5TcGFucygpXG5cbiAgbG9nRm9yRGVidWdnaW5nKFxuICAgIGBbUGVyZmV0dG9dIHdyaXRlUGVyZmV0dG9UcmFjZVN5bmMgY2FsbGVkOiBldmVudHM9JHtldmVudHMubGVuZ3RofWAsXG4gIClcblxuICB0cnkge1xuICAgIGNvbnN0IGRpciA9IGRpcm5hbWUodHJhY2VQYXRoKVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjdXN0b20tcnVsZXMvbm8tc3luYy1mcyAtLSBPbmx5IGNhbGxlZCBmcm9tIHByb2Nlc3Mub24oJ2V4aXQnKSBoYW5kbGVyXG4gICAgbWtkaXJTeW5jKGRpciwgeyByZWN1cnNpdmU6IHRydWUgfSlcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3VzdG9tLXJ1bGVzL25vLXN5bmMtZnMsIGVzbGludC1wbHVnaW4tbi9uby1zeW5jIC0tIFJlcXVpcmVkIGZvciBwcm9jZXNzICdleGl0JyBoYW5kbGVyIHdoaWNoIGRvZXNuJ3Qgc3VwcG9ydCBhc3luY1xuICAgIHdyaXRlRmlsZVN5bmModHJhY2VQYXRoLCBidWlsZFRyYWNlRG9jdW1lbnQoKSlcbiAgICB0cmFjZVdyaXR0ZW4gPSB0cnVlXG4gICAgbG9nRm9yRGVidWdnaW5nKGBbUGVyZmV0dG9dIFRyYWNlIGZpbmFsaXplZCBzeW5jaHJvbm91c2x5IGF0OiAke3RyYWNlUGF0aH1gKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbUGVyZmV0dG9dIEZhaWxlZCB0byB3cml0ZSBmaW5hbCB0cmFjZSBzeW5jaHJvbm91c2x5OiAke2Vycm9yTWVzc2FnZShlcnJvcil9YCxcbiAgICAgIHsgbGV2ZWw6ICdlcnJvcicgfSxcbiAgICApXG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgYWxsIHJlY29yZGVkIGV2ZW50cyAoZm9yIHRlc3RpbmcpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQZXJmZXR0b0V2ZW50cygpOiBUcmFjZUV2ZW50W10ge1xuICByZXR1cm4gWy4uLm1ldGFkYXRhRXZlbnRzLCAuLi5ldmVudHNdXG59XG5cbi8qKlxuICogUmVzZXQgdGhlIHRyYWNlciBzdGF0ZSAoZm9yIHRlc3RpbmcpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNldFBlcmZldHRvVHJhY2VyKCk6IHZvaWQge1xuICBpZiAoc3RhbGVTcGFuQ2xlYW51cElkKSB7XG4gICAgY2xlYXJJbnRlcnZhbChzdGFsZVNwYW5DbGVhbnVwSWQpXG4gICAgc3RhbGVTcGFuQ2xlYW51cElkID0gbnVsbFxuICB9XG4gIHN0b3BXcml0ZUludGVydmFsKClcbiAgbWV0YWRhdGFFdmVudHMubGVuZ3RoID0gMFxuICBldmVudHMubGVuZ3RoID0gMFxuICBwZW5kaW5nU3BhbnMuY2xlYXIoKVxuICBhZ2VudFJlZ2lzdHJ5LmNsZWFyKClcbiAgYWdlbnRJZFRvUHJvY2Vzc0lkLmNsZWFyKClcbiAgdG90YWxBZ2VudENvdW50ID0gMFxuICBwcm9jZXNzSWRDb3VudGVyID0gMVxuICBzcGFuSWRDb3VudGVyID0gMFxuICBpc0VuYWJsZWQgPSBmYWxzZVxuICB0cmFjZVBhdGggPSBudWxsXG4gIHN0YXJ0VGltZU1zID0gMFxuICB0cmFjZVdyaXR0ZW4gPSBmYWxzZVxufVxuXG4vKipcbiAqIFRyaWdnZXIgYSBwZXJpb2RpYyB3cml0ZSBpbW1lZGlhdGVseSAoZm9yIHRlc3RpbmcpXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmlnZ2VyUGVyaW9kaWNXcml0ZUZvclRlc3RpbmcoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IHBlcmlvZGljV3JpdGUoKVxufVxuXG4vKipcbiAqIEV2aWN0IHN0YWxlIHNwYW5zIGltbWVkaWF0ZWx5IChmb3IgdGVzdGluZylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV2aWN0U3RhbGVTcGFuc0ZvclRlc3RpbmcoKTogdm9pZCB7XG4gIGV2aWN0U3RhbGVTcGFucygpXG59XG5cbmV4cG9ydCBjb25zdCBNQVhfRVZFTlRTX0ZPUl9URVNUSU5HID0gTUFYX0VWRU5UU1xuZXhwb3J0IGZ1bmN0aW9uIGV2aWN0T2xkZXN0RXZlbnRzRm9yVGVzdGluZygpOiB2b2lkIHtcbiAgZXZpY3RPbGRlc3RFdmVudHMoKVxufVxuIiwgIi8qKlxuICogQmV0YSBTZXNzaW9uIFRyYWNpbmcgZm9yIENsYXVkZSBDb2RlXG4gKlxuICogVGhpcyBtb2R1bGUgY29udGFpbnMgYmV0YSB0cmFjaW5nIGZlYXR1cmVzIGVuYWJsZWQgd2hlblxuICogRU5BQkxFX0JFVEFfVFJBQ0lOR19ERVRBSUxFRD0xIGFuZCBCRVRBX1RSQUNJTkdfRU5EUE9JTlQgYXJlIHNldC5cbiAqXG4gKiBGb3IgZXh0ZXJuYWwgdXNlcnMsIHRyYWNpbmcgaXMgZW5hYmxlZCBpbiBTREsvaGVhZGxlc3MgbW9kZSwgb3IgaW5cbiAqIGludGVyYWN0aXZlIG1vZGUgd2hlbiB0aGUgb3JnIGlzIGFsbG93bGlzdGVkIHZpYSB0aGVcbiAqIHRlbmd1X3RyYWNlX2xhbnRlcm4gR3Jvd3RoQm9vayBnYXRlLlxuICogRm9yIGFudCB1c2VycywgdHJhY2luZyBpcyBlbmFibGVkIGluIGFsbCBtb2Rlcy5cbiAqXG4gKiBWaXNpYmlsaXR5IFJ1bGVzOlxuICogfCBDb250ZW50ICAgICAgICAgIHwgRXh0ZXJuYWwgfCBBbnQgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLXwtLS0tLS18XG4gKiB8IFN5c3RlbSBwcm9tcHRzICAgfCBcdTI3MDUgICAgICAgICAgICAgICAgICB8IFx1MjcwNSAgIHxcbiAqIHwgTW9kZWwgb3V0cHV0ICAgICB8IFx1MjcwNSAgICAgICAgICAgICAgICAgIHwgXHUyNzA1ICAgfFxuICogfCBUaGlua2luZyBvdXRwdXQgIHwgXHUyNzRDICAgICAgICAgICAgICAgICAgfCBcdTI3MDUgICB8XG4gKiB8IFRvb2xzICAgICAgICAgICAgfCBcdTI3MDUgICAgICAgICAgICAgICAgICB8IFx1MjcwNSAgIHxcbiAqIHwgbmV3X2NvbnRleHQgICAgICB8IFx1MjcwNSAgICAgICAgICAgICAgICAgIHwgXHUyNzA1ICAgfFxuICpcbiAqIEZlYXR1cmVzOlxuICogLSBQZXItYWdlbnQgbWVzc2FnZSB0cmFja2luZyB3aXRoIGhhc2gtYmFzZWQgZGVkdXBsaWNhdGlvblxuICogLSBTeXN0ZW0gcHJvbXB0IGxvZ2dpbmcgKG9uY2UgcGVyIHVuaXF1ZSBoYXNoKVxuICogLSBIb29rIGV4ZWN1dGlvbiBzcGFuc1xuICogLSBEZXRhaWxlZCBuZXdfY29udGV4dCBhdHRyaWJ1dGVzIGZvciBMTE0gcmVxdWVzdHNcbiAqL1xuXG5pbXBvcnQgdHlwZSB7IFNwYW4gfSBmcm9tICdAb3BlbnRlbGVtZXRyeS9hcGknXG5pbXBvcnQgeyBjcmVhdGVIYXNoIH0gZnJvbSAnY3J5cHRvJ1xuaW1wb3J0IHsgZ2V0SXNOb25JbnRlcmFjdGl2ZVNlc3Npb24gfSBmcm9tICcuLi8uLi9ib290c3RyYXAvc3RhdGUuanMnXG5pbXBvcnQgeyBnZXRGZWF0dXJlVmFsdWVfQ0FDSEVEX01BWV9CRV9TVEFMRSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FuYWx5dGljcy9ncm93dGhib29rLmpzJ1xuaW1wb3J0IHsgc2FuaXRpemVUb29sTmFtZUZvckFuYWx5dGljcyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FuYWx5dGljcy9tZXRhZGF0YS5qcydcbmltcG9ydCB0eXBlIHsgQXNzaXN0YW50TWVzc2FnZSwgVXNlck1lc3NhZ2UgfSBmcm9tICcuLi8uLi90eXBlcy9tZXNzYWdlLmpzJ1xuaW1wb3J0IHsgaXNFbnZUcnV0aHkgfSBmcm9tICcuLi9lbnZVdGlscy5qcydcbmltcG9ydCB7IGpzb25QYXJzZSwganNvblN0cmluZ2lmeSB9IGZyb20gJy4uL3Nsb3dPcGVyYXRpb25zLmpzJ1xuaW1wb3J0IHsgbG9nT1RlbEV2ZW50IH0gZnJvbSAnLi9ldmVudHMuanMnXG5cbi8vIE1lc3NhZ2UgdHlwZSBmb3IgQVBJIGNhbGxzIChVc2VyTWVzc2FnZSBvciBBc3Npc3RhbnRNZXNzYWdlKVxudHlwZSBBUElNZXNzYWdlID0gVXNlck1lc3NhZ2UgfCBBc3Npc3RhbnRNZXNzYWdlXG5cbi8qKlxuICogVHJhY2sgaGFzaGVzIHdlJ3ZlIGFscmVhZHkgbG9nZ2VkIHRoaXMgc2Vzc2lvbiAoc3lzdGVtIHByb21wdHMsIHRvb2xzLCBldGMpLlxuICpcbiAqIFdIWTogU3lzdGVtIHByb21wdHMgYW5kIHRvb2wgc2NoZW1hcyBhcmUgbGFyZ2UgYW5kIHJhcmVseSBjaGFuZ2Ugd2l0aGluIGEgc2Vzc2lvbi5cbiAqIFNlbmRpbmcgZnVsbCBjb250ZW50IG9uIGV2ZXJ5IHJlcXVlc3Qgd291bGQgYmUgd2FzdGVmdWwuIEluc3RlYWQsIHdlIGhhc2ggYW5kXG4gKiBvbmx5IGxvZyB0aGUgZnVsbCBjb250ZW50IG9uY2UgcGVyIHVuaXF1ZSBoYXNoLlxuICovXG5jb25zdCBzZWVuSGFzaGVzID0gbmV3IFNldDxzdHJpbmc+KClcblxuLyoqXG4gKiBUcmFjayB0aGUgbGFzdCByZXBvcnRlZCBtZXNzYWdlIGhhc2ggcGVyIHF1ZXJ5U291cmNlIChhZ2VudCkgZm9yIGluY3JlbWVudGFsIGNvbnRleHQuXG4gKlxuICogV0hZOiBXaGVuIGRlYnVnZ2luZyB0cmFjZXMsIHdlIHdhbnQgdG8gc2VlIHdoYXQgTkVXIGluZm9ybWF0aW9uIHdhcyBhZGRlZCBlYWNoIHR1cm4sXG4gKiBub3QgdGhlIGVudGlyZSBjb252ZXJzYXRpb24gaGlzdG9yeSAod2hpY2ggY2FuIGJlIGh1Z2UpLiBCeSB0cmFja2luZyB0aGUgbGFzdCBtZXNzYWdlXG4gKiB3ZSByZXBvcnRlZCBwZXIgYWdlbnQsIHdlIGNhbiBjb21wdXRlIGFuZCBzZW5kIG9ubHkgdGhlIGRlbHRhIChuZXcgbWVzc2FnZXMgc2luY2VcbiAqIHRoZSBsYXN0IHJlcXVlc3QpLiBUaGlzIGlzIHRyYWNrZWQgcGVyLWFnZW50IChxdWVyeVNvdXJjZSkgYmVjYXVzZSBkaWZmZXJlbnQgYWdlbnRzXG4gKiAobWFpbiB0aHJlYWQsIHN1YmFnZW50cywgd2FybXVwIHJlcXVlc3RzKSBoYXZlIGluZGVwZW5kZW50IGNvbnZlcnNhdGlvbiBjb250ZXh0cy5cbiAqL1xuY29uc3QgbGFzdFJlcG9ydGVkTWVzc2FnZUhhc2ggPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpXG5cbi8qKlxuICogQ2xlYXIgdHJhY2tpbmcgc3RhdGUgYWZ0ZXIgY29tcGFjdGlvbi5cbiAqIE9sZCBoYXNoZXMgYXJlIGlycmVsZXZhbnQgb25jZSBtZXNzYWdlcyBoYXZlIGJlZW4gcmVwbGFjZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckJldGFUcmFjaW5nU3RhdGUoKTogdm9pZCB7XG4gIHNlZW5IYXNoZXMuY2xlYXIoKVxuICBsYXN0UmVwb3J0ZWRNZXNzYWdlSGFzaC5jbGVhcigpXG59XG5cbmNvbnN0IE1BWF9DT05URU5UX1NJWkUgPSA2MCAqIDEwMjQgLy8gNjBLQiAoSG9uZXljb21iIGxpbWl0IGlzIDY0S0IsIHN0YXlpbmcgc2FmZSlcblxuLyoqXG4gKiBDaGVjayBpZiBiZXRhIGRldGFpbGVkIHRyYWNpbmcgaXMgZW5hYmxlZC5cbiAqIC0gUmVxdWlyZXMgRU5BQkxFX0JFVEFfVFJBQ0lOR19ERVRBSUxFRD0xIGFuZCBCRVRBX1RSQUNJTkdfRU5EUE9JTlRcbiAqIC0gRm9yIGV4dGVybmFsIHVzZXJzLCBlbmFibGVkIGluIFNESy9oZWFkbGVzcyBtb2RlIE9SIHdoZW4gb3JnIGlzXG4gKiAgIGFsbG93bGlzdGVkIHZpYSB0aGUgdGVuZ3VfdHJhY2VfbGFudGVybiBHcm93dGhCb29rIGdhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQmV0YVRyYWNpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuICBjb25zdCBiYXNlRW5hYmxlZCA9XG4gICAgaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuRU5BQkxFX0JFVEFfVFJBQ0lOR19ERVRBSUxFRCkgJiZcbiAgICBCb29sZWFuKHByb2Nlc3MuZW52LkJFVEFfVFJBQ0lOR19FTkRQT0lOVClcblxuICBpZiAoIWJhc2VFbmFibGVkKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBGb3IgZXh0ZXJuYWwgdXNlcnMsIGVuYWJsZSBpbiBTREsvaGVhZGxlc3MgbW9kZSBPUiB3aGVuIG9yZyBpcyBhbGxvd2xpc3RlZC5cbiAgLy8gR2F0ZSByZWFkcyBmcm9tIGRpc2sgY2FjaGUsIHNvIGZpcnN0IHJ1biBhZnRlciBhbGxvd2xpc3RpbmcgcmV0dXJucyBmYWxzZTtcbiAgLy8gd29ya3MgZnJvbSBzZWNvbmQgcnVuIG9ud2FyZCAoc2FtZSBiZWhhdmlvciBhcyBlbmhhbmNlZF90ZWxlbWV0cnlfYmV0YSkuXG4gIGlmIChwcm9jZXNzLmVudi5VU0VSX1RZUEUgIT09ICdhbnQnKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGdldElzTm9uSW50ZXJhY3RpdmVTZXNzaW9uKCkgfHxcbiAgICAgIGdldEZlYXR1cmVWYWx1ZV9DQUNIRURfTUFZX0JFX1NUQUxFKCd0ZW5ndV90cmFjZV9sYW50ZXJuJywgZmFsc2UpXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqXG4gKiBUcnVuY2F0ZSBjb250ZW50IHRvIGZpdCB3aXRoaW4gSG9uZXljb21iIGxpbWl0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRydW5jYXRlQ29udGVudChcbiAgY29udGVudDogc3RyaW5nLFxuICBtYXhTaXplOiBudW1iZXIgPSBNQVhfQ09OVEVOVF9TSVpFLFxuKTogeyBjb250ZW50OiBzdHJpbmc7IHRydW5jYXRlZDogYm9vbGVhbiB9IHtcbiAgaWYgKGNvbnRlbnQubGVuZ3RoIDw9IG1heFNpemUpIHtcbiAgICByZXR1cm4geyBjb250ZW50LCB0cnVuY2F0ZWQ6IGZhbHNlIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY29udGVudDpcbiAgICAgIGNvbnRlbnQuc2xpY2UoMCwgbWF4U2l6ZSkgK1xuICAgICAgJ1xcblxcbltUUlVOQ0FURUQgLSBDb250ZW50IGV4Y2VlZHMgNjBLQiBsaW1pdF0nLFxuICAgIHRydW5jYXRlZDogdHJ1ZSxcbiAgfVxufVxuXG4vKipcbiAqIEdlbmVyYXRlIGEgc2hvcnQgaGFzaCAoZmlyc3QgMTIgaGV4IGNoYXJzIG9mIFNIQS0yNTYpLlxuICovXG5mdW5jdGlvbiBzaG9ydEhhc2goY29udGVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGNyZWF0ZUhhc2goJ3NoYTI1NicpLnVwZGF0ZShjb250ZW50KS5kaWdlc3QoJ2hleCcpLnNsaWNlKDAsIDEyKVxufVxuXG4vKipcbiAqIEdlbmVyYXRlIGEgaGFzaCBmb3IgYSBzeXN0ZW0gcHJvbXB0LlxuICovXG5mdW5jdGlvbiBoYXNoU3lzdGVtUHJvbXB0KHN5c3RlbVByb21wdDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGBzcF8ke3Nob3J0SGFzaChzeXN0ZW1Qcm9tcHQpfWBcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBhIGhhc2ggZm9yIGEgbWVzc2FnZSBiYXNlZCBvbiBpdHMgY29udGVudC5cbiAqL1xuZnVuY3Rpb24gaGFzaE1lc3NhZ2UobWVzc2FnZTogQVBJTWVzc2FnZSk6IHN0cmluZyB7XG4gIGNvbnN0IGNvbnRlbnQgPSBqc29uU3RyaW5naWZ5KG1lc3NhZ2UubWVzc2FnZS5jb250ZW50KVxuICByZXR1cm4gYG1zZ18ke3Nob3J0SGFzaChjb250ZW50KX1gXG59XG5cbi8vIFJlZ2V4IHRvIGRldGVjdCBjb250ZW50IHdyYXBwZWQgaW4gPHN5c3RlbS1yZW1pbmRlcj4gdGFnc1xuY29uc3QgU1lTVEVNX1JFTUlOREVSX1JFR0VYID1cbiAgL148c3lzdGVtLXJlbWluZGVyPlxcbj8oW1xcc1xcU10qPylcXG4/PFxcL3N5c3RlbS1yZW1pbmRlcj4kL1xuXG4vKipcbiAqIENoZWNrIGlmIHRleHQgaXMgZW50aXJlbHkgYSBzeXN0ZW0gcmVtaW5kZXIgKHdyYXBwZWQgaW4gPHN5c3RlbS1yZW1pbmRlcj4gdGFncykuXG4gKiBSZXR1cm5zIHRoZSBpbm5lciBjb250ZW50IGlmIGl0IGlzLCBudWxsIG90aGVyd2lzZS5cbiAqL1xuZnVuY3Rpb24gZXh0cmFjdFN5c3RlbVJlbWluZGVyQ29udGVudCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgY29uc3QgbWF0Y2ggPSB0ZXh0LnRyaW0oKS5tYXRjaChTWVNURU1fUkVNSU5ERVJfUkVHRVgpXG4gIHJldHVybiBtYXRjaCAmJiBtYXRjaFsxXSA/IG1hdGNoWzFdLnRyaW0oKSA6IG51bGxcbn1cblxuLyoqXG4gKiBSZXN1bHQgb2YgZm9ybWF0dGluZyBtZXNzYWdlcyAtIHNlcGFyYXRlcyByZWd1bGFyIGNvbnRlbnQgZnJvbSBzeXN0ZW0gcmVtaW5kZXJzLlxuICovXG5pbnRlcmZhY2UgRm9ybWF0dGVkTWVzc2FnZXMge1xuICBjb250ZXh0UGFydHM6IHN0cmluZ1tdXG4gIHN5c3RlbVJlbWluZGVyczogc3RyaW5nW11cbn1cblxuLyoqXG4gKiBGb3JtYXQgdXNlciBtZXNzYWdlcyBmb3IgbmV3X2NvbnRleHQgZGlzcGxheSwgc2VwYXJhdGluZyBzeXN0ZW0gcmVtaW5kZXJzLlxuICogT25seSBoYW5kbGVzIHVzZXIgbWVzc2FnZXMgKGFzc2lzdGFudCBtZXNzYWdlcyBhcmUgZmlsdGVyZWQgb3V0IGJlZm9yZSB0aGlzIGlzIGNhbGxlZCkuXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdE1lc3NhZ2VzRm9yQ29udGV4dChtZXNzYWdlczogVXNlck1lc3NhZ2VbXSk6IEZvcm1hdHRlZE1lc3NhZ2VzIHtcbiAgY29uc3QgY29udGV4dFBhcnRzOiBzdHJpbmdbXSA9IFtdXG4gIGNvbnN0IHN5c3RlbVJlbWluZGVyczogc3RyaW5nW10gPSBbXVxuXG4gIGZvciAoY29uc3QgbWVzc2FnZSBvZiBtZXNzYWdlcykge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBtZXNzYWdlLm1lc3NhZ2UuY29udGVudFxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IHJlbWluZGVyQ29udGVudCA9IGV4dHJhY3RTeXN0ZW1SZW1pbmRlckNvbnRlbnQoY29udGVudClcbiAgICAgIGlmIChyZW1pbmRlckNvbnRlbnQpIHtcbiAgICAgICAgc3lzdGVtUmVtaW5kZXJzLnB1c2gocmVtaW5kZXJDb250ZW50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dFBhcnRzLnB1c2goYFtVU0VSXVxcbiR7Y29udGVudH1gKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjb250ZW50KSkge1xuICAgICAgZm9yIChjb25zdCBibG9jayBvZiBjb250ZW50KSB7XG4gICAgICAgIGlmIChibG9jay50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgICBjb25zdCByZW1pbmRlckNvbnRlbnQgPSBleHRyYWN0U3lzdGVtUmVtaW5kZXJDb250ZW50KGJsb2NrLnRleHQpXG4gICAgICAgICAgaWYgKHJlbWluZGVyQ29udGVudCkge1xuICAgICAgICAgICAgc3lzdGVtUmVtaW5kZXJzLnB1c2gocmVtaW5kZXJDb250ZW50KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZXh0UGFydHMucHVzaChgW1VTRVJdXFxuJHtibG9jay50ZXh0fWApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGJsb2NrLnR5cGUgPT09ICd0b29sX3Jlc3VsdCcpIHtcbiAgICAgICAgICBjb25zdCByZXN1bHRDb250ZW50ID1cbiAgICAgICAgICAgIHR5cGVvZiBibG9jay5jb250ZW50ID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICA/IGJsb2NrLmNvbnRlbnRcbiAgICAgICAgICAgICAgOiBqc29uU3RyaW5naWZ5KGJsb2NrLmNvbnRlbnQpXG4gICAgICAgICAgLy8gVG9vbCByZXN1bHRzIGNhbiBhbHNvIGNvbnRhaW4gc3lzdGVtIHJlbWluZGVycyAoZS5nLiwgbWFsd2FyZSB3YXJuaW5nKVxuICAgICAgICAgIGNvbnN0IHJlbWluZGVyQ29udGVudCA9IGV4dHJhY3RTeXN0ZW1SZW1pbmRlckNvbnRlbnQocmVzdWx0Q29udGVudClcbiAgICAgICAgICBpZiAocmVtaW5kZXJDb250ZW50KSB7XG4gICAgICAgICAgICBzeXN0ZW1SZW1pbmRlcnMucHVzaChyZW1pbmRlckNvbnRlbnQpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRleHRQYXJ0cy5wdXNoKFxuICAgICAgICAgICAgICBgW1RPT0wgUkVTVUxUOiAke2Jsb2NrLnRvb2xfdXNlX2lkfV1cXG4ke3Jlc3VsdENvbnRlbnR9YCxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBjb250ZXh0UGFydHMsIHN5c3RlbVJlbWluZGVycyB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTExNUmVxdWVzdE5ld0NvbnRleHQge1xuICAvKiogU3lzdGVtIHByb21wdCAodHlwaWNhbGx5IG9ubHkgb24gZmlyc3QgcmVxdWVzdCBvciBpZiBjaGFuZ2VkKSAqL1xuICBzeXN0ZW1Qcm9tcHQ/OiBzdHJpbmdcbiAgLyoqIFF1ZXJ5IHNvdXJjZSBpZGVudGlmeWluZyB0aGUgYWdlbnQvcHVycG9zZSAoZS5nLiwgJ3JlcGxfbWFpbl90aHJlYWQnLCAnYWdlbnQ6YnVpbHRpbicpICovXG4gIHF1ZXJ5U291cmNlPzogc3RyaW5nXG4gIC8qKiBUb29sIHNjaGVtYXMgc2VudCB3aXRoIHRoZSByZXF1ZXN0ICovXG4gIHRvb2xzPzogc3RyaW5nXG59XG5cbi8qKlxuICogQWRkIGJldGEgYXR0cmlidXRlcyB0byBhbiBpbnRlcmFjdGlvbiBzcGFuLlxuICogQWRkcyBuZXdfY29udGV4dCB3aXRoIHRoZSB1c2VyIHByb21wdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEJldGFJbnRlcmFjdGlvbkF0dHJpYnV0ZXMoXG4gIHNwYW46IFNwYW4sXG4gIHVzZXJQcm9tcHQ6IHN0cmluZyxcbik6IHZvaWQge1xuICBpZiAoIWlzQmV0YVRyYWNpbmdFbmFibGVkKCkpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHsgY29udGVudDogdHJ1bmNhdGVkUHJvbXB0LCB0cnVuY2F0ZWQgfSA9IHRydW5jYXRlQ29udGVudChcbiAgICBgW1VTRVIgUFJPTVBUXVxcbiR7dXNlclByb21wdH1gLFxuICApXG4gIHNwYW4uc2V0QXR0cmlidXRlcyh7XG4gICAgbmV3X2NvbnRleHQ6IHRydW5jYXRlZFByb21wdCxcbiAgICAuLi4odHJ1bmNhdGVkICYmIHtcbiAgICAgIG5ld19jb250ZXh0X3RydW5jYXRlZDogdHJ1ZSxcbiAgICAgIG5ld19jb250ZXh0X29yaWdpbmFsX2xlbmd0aDogdXNlclByb21wdC5sZW5ndGgsXG4gICAgfSksXG4gIH0pXG59XG5cbi8qKlxuICogQWRkIGJldGEgYXR0cmlidXRlcyB0byBhbiBMTE0gcmVxdWVzdCBzcGFuLlxuICogSGFuZGxlcyBzeXN0ZW0gcHJvbXB0IGxvZ2dpbmcgYW5kIG5ld19jb250ZXh0IGNvbXB1dGF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkQmV0YUxMTVJlcXVlc3RBdHRyaWJ1dGVzKFxuICBzcGFuOiBTcGFuLFxuICBuZXdDb250ZXh0PzogTExNUmVxdWVzdE5ld0NvbnRleHQsXG4gIG1lc3NhZ2VzRm9yQVBJPzogQVBJTWVzc2FnZVtdLFxuKTogdm9pZCB7XG4gIGlmICghaXNCZXRhVHJhY2luZ0VuYWJsZWQoKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gQWRkIHN5c3RlbSBwcm9tcHQgaW5mbyB0byB0aGUgc3BhblxuICBpZiAobmV3Q29udGV4dD8uc3lzdGVtUHJvbXB0KSB7XG4gICAgY29uc3QgcHJvbXB0SGFzaCA9IGhhc2hTeXN0ZW1Qcm9tcHQobmV3Q29udGV4dC5zeXN0ZW1Qcm9tcHQpXG4gICAgY29uc3QgcHJldmlldyA9IG5ld0NvbnRleHQuc3lzdGVtUHJvbXB0LnNsaWNlKDAsIDUwMClcblxuICAgIC8vIEFsd2F5cyBhZGQgaGFzaCwgcHJldmlldywgYW5kIGxlbmd0aCB0byB0aGUgc3BhblxuICAgIHNwYW4uc2V0QXR0cmlidXRlKCdzeXN0ZW1fcHJvbXB0X2hhc2gnLCBwcm9tcHRIYXNoKVxuICAgIHNwYW4uc2V0QXR0cmlidXRlKCdzeXN0ZW1fcHJvbXB0X3ByZXZpZXcnLCBwcmV2aWV3KVxuICAgIHNwYW4uc2V0QXR0cmlidXRlKCdzeXN0ZW1fcHJvbXB0X2xlbmd0aCcsIG5ld0NvbnRleHQuc3lzdGVtUHJvbXB0Lmxlbmd0aClcblxuICAgIC8vIExvZyB0aGUgZnVsbCBzeXN0ZW0gcHJvbXB0IG9ubHkgb25jZSBwZXIgdW5pcXVlIGhhc2ggdGhpcyBzZXNzaW9uXG4gICAgaWYgKCFzZWVuSGFzaGVzLmhhcyhwcm9tcHRIYXNoKSkge1xuICAgICAgc2Vlbkhhc2hlcy5hZGQocHJvbXB0SGFzaClcblxuICAgICAgLy8gVHJ1bmNhdGUgZm9yIHRoZSBsb2cgaWYgbmVlZGVkXG4gICAgICBjb25zdCB7IGNvbnRlbnQ6IHRydW5jYXRlZFByb21wdCwgdHJ1bmNhdGVkIH0gPSB0cnVuY2F0ZUNvbnRlbnQoXG4gICAgICAgIG5ld0NvbnRleHQuc3lzdGVtUHJvbXB0LFxuICAgICAgKVxuXG4gICAgICB2b2lkIGxvZ09UZWxFdmVudCgnc3lzdGVtX3Byb21wdCcsIHtcbiAgICAgICAgc3lzdGVtX3Byb21wdF9oYXNoOiBwcm9tcHRIYXNoLFxuICAgICAgICBzeXN0ZW1fcHJvbXB0OiB0cnVuY2F0ZWRQcm9tcHQsXG4gICAgICAgIHN5c3RlbV9wcm9tcHRfbGVuZ3RoOiBTdHJpbmcobmV3Q29udGV4dC5zeXN0ZW1Qcm9tcHQubGVuZ3RoKSxcbiAgICAgICAgLi4uKHRydW5jYXRlZCAmJiB7IHN5c3RlbV9wcm9tcHRfdHJ1bmNhdGVkOiAndHJ1ZScgfSksXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCB0b29scyBpbmZvIHRvIHRoZSBzcGFuXG4gIGlmIChuZXdDb250ZXh0Py50b29scykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b29sc0FycmF5ID0ganNvblBhcnNlKG5ld0NvbnRleHQudG9vbHMpIGFzIFJlY29yZDxcbiAgICAgICAgc3RyaW5nLFxuICAgICAgICB1bmtub3duXG4gICAgICA+W11cblxuICAgICAgLy8gQnVpbGQgYXJyYXkgb2Yge25hbWUsIGhhc2h9IGZvciBlYWNoIHRvb2xcbiAgICAgIGNvbnN0IHRvb2xzV2l0aEhhc2hlcyA9IHRvb2xzQXJyYXkubWFwKHRvb2wgPT4ge1xuICAgICAgICBjb25zdCB0b29sSnNvbiA9IGpzb25TdHJpbmdpZnkodG9vbClcbiAgICAgICAgY29uc3QgdG9vbEhhc2ggPSBzaG9ydEhhc2godG9vbEpzb24pXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZTogdHlwZW9mIHRvb2wubmFtZSA9PT0gJ3N0cmluZycgPyB0b29sLm5hbWUgOiAndW5rbm93bicsXG4gICAgICAgICAgaGFzaDogdG9vbEhhc2gsXG4gICAgICAgICAganNvbjogdG9vbEpzb24sXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC8vIFNldCBzcGFuIGF0dHJpYnV0ZSB3aXRoIGFycmF5IG9mIG5hbWUvaGFzaCBwYWlyc1xuICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICd0b29scycsXG4gICAgICAgIGpzb25TdHJpbmdpZnkoXG4gICAgICAgICAgdG9vbHNXaXRoSGFzaGVzLm1hcCgoeyBuYW1lLCBoYXNoIH0pID0+ICh7IG5hbWUsIGhhc2ggfSkpLFxuICAgICAgICApLFxuICAgICAgKVxuICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoJ3Rvb2xzX2NvdW50JywgdG9vbHNXaXRoSGFzaGVzLmxlbmd0aClcblxuICAgICAgLy8gTG9nIGVhY2ggdG9vbCdzIGZ1bGwgZGVzY3JpcHRpb24gb25jZSBwZXIgdW5pcXVlIGhhc2hcbiAgICAgIGZvciAoY29uc3QgeyBuYW1lLCBoYXNoLCBqc29uIH0gb2YgdG9vbHNXaXRoSGFzaGVzKSB7XG4gICAgICAgIGlmICghc2Vlbkhhc2hlcy5oYXMoYHRvb2xfJHtoYXNofWApKSB7XG4gICAgICAgICAgc2Vlbkhhc2hlcy5hZGQoYHRvb2xfJHtoYXNofWApXG5cbiAgICAgICAgICBjb25zdCB7IGNvbnRlbnQ6IHRydW5jYXRlZFRvb2wsIHRydW5jYXRlZCB9ID0gdHJ1bmNhdGVDb250ZW50KGpzb24pXG5cbiAgICAgICAgICB2b2lkIGxvZ09UZWxFdmVudCgndG9vbCcsIHtcbiAgICAgICAgICAgIHRvb2xfbmFtZTogc2FuaXRpemVUb29sTmFtZUZvckFuYWx5dGljcyhuYW1lKSxcbiAgICAgICAgICAgIHRvb2xfaGFzaDogaGFzaCxcbiAgICAgICAgICAgIHRvb2w6IHRydW5jYXRlZFRvb2wsXG4gICAgICAgICAgICAuLi4odHJ1bmNhdGVkICYmIHsgdG9vbF90cnVuY2F0ZWQ6ICd0cnVlJyB9KSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBJZiBwYXJzaW5nIGZhaWxzLCBsb2cgdGhlIHJhdyB0b29scyBzdHJpbmdcbiAgICAgIHNwYW4uc2V0QXR0cmlidXRlKCd0b29sc19wYXJzZV9lcnJvcicsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIG5ld19jb250ZXh0IHVzaW5nIGhhc2gtYmFzZWQgdHJhY2tpbmcgKHZpc2libGUgdG8gYWxsIHVzZXJzKVxuICBpZiAobWVzc2FnZXNGb3JBUEkgJiYgbWVzc2FnZXNGb3JBUEkubGVuZ3RoID4gMCAmJiBuZXdDb250ZXh0Py5xdWVyeVNvdXJjZSkge1xuICAgIGNvbnN0IHF1ZXJ5U291cmNlID0gbmV3Q29udGV4dC5xdWVyeVNvdXJjZVxuICAgIGNvbnN0IGxhc3RIYXNoID0gbGFzdFJlcG9ydGVkTWVzc2FnZUhhc2guZ2V0KHF1ZXJ5U291cmNlKVxuXG4gICAgLy8gRmluZCB3aGVyZSB0aGUgbGFzdCByZXBvcnRlZCBtZXNzYWdlIGlzIGluIHRoZSBhcnJheVxuICAgIGxldCBzdGFydEluZGV4ID0gMFxuICAgIGlmIChsYXN0SGFzaCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlc0ZvckFQSS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBtc2cgPSBtZXNzYWdlc0ZvckFQSVtpXVxuICAgICAgICBpZiAobXNnICYmIGhhc2hNZXNzYWdlKG1zZykgPT09IGxhc3RIYXNoKSB7XG4gICAgICAgICAgc3RhcnRJbmRleCA9IGkgKyAxIC8vIFN0YXJ0IGFmdGVyIHRoZSBsYXN0IHJlcG9ydGVkIG1lc3NhZ2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBJZiBsYXN0SGFzaCBub3QgZm91bmQsIHN0YXJ0SW5kZXggc3RheXMgMCAoc2VuZCBldmVyeXRoaW5nKVxuICAgIH1cblxuICAgIC8vIEdldCBuZXcgbWVzc2FnZXMgKGZpbHRlciBvdXQgYXNzaXN0YW50IG1lc3NhZ2VzIC0gd2Ugb25seSB3YW50IHVzZXIgaW5wdXQvdG9vbCByZXN1bHRzKVxuICAgIGNvbnN0IG5ld01lc3NhZ2VzID0gbWVzc2FnZXNGb3JBUElcbiAgICAgIC5zbGljZShzdGFydEluZGV4KVxuICAgICAgLmZpbHRlcigobSk6IG0gaXMgVXNlck1lc3NhZ2UgPT4gbS50eXBlID09PSAndXNlcicpXG5cbiAgICBpZiAobmV3TWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gRm9ybWF0IG5ldyBtZXNzYWdlcywgc2VwYXJhdGluZyBzeXN0ZW0gcmVtaW5kZXJzIGZyb20gcmVndWxhciBjb250ZW50XG4gICAgICBjb25zdCB7IGNvbnRleHRQYXJ0cywgc3lzdGVtUmVtaW5kZXJzIH0gPVxuICAgICAgICBmb3JtYXRNZXNzYWdlc0ZvckNvbnRleHQobmV3TWVzc2FnZXMpXG5cbiAgICAgIC8vIFNldCBuZXdfY29udGV4dCAocmVndWxhciB1c2VyIGNvbnRlbnQgYW5kIHRvb2wgcmVzdWx0cylcbiAgICAgIGlmIChjb250ZXh0UGFydHMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBmdWxsQ29udGV4dCA9IGNvbnRleHRQYXJ0cy5qb2luKCdcXG5cXG4tLS1cXG5cXG4nKVxuICAgICAgICBjb25zdCB7IGNvbnRlbnQ6IHRydW5jYXRlZENvbnRleHQsIHRydW5jYXRlZCB9ID1cbiAgICAgICAgICB0cnVuY2F0ZUNvbnRlbnQoZnVsbENvbnRleHQpXG5cbiAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICBuZXdfY29udGV4dDogdHJ1bmNhdGVkQ29udGV4dCxcbiAgICAgICAgICBuZXdfY29udGV4dF9tZXNzYWdlX2NvdW50OiBuZXdNZXNzYWdlcy5sZW5ndGgsXG4gICAgICAgICAgLi4uKHRydW5jYXRlZCAmJiB7XG4gICAgICAgICAgICBuZXdfY29udGV4dF90cnVuY2F0ZWQ6IHRydWUsXG4gICAgICAgICAgICBuZXdfY29udGV4dF9vcmlnaW5hbF9sZW5ndGg6IGZ1bGxDb250ZXh0Lmxlbmd0aCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgLy8gU2V0IHN5c3RlbV9yZW1pbmRlcnMgYXMgYSBzZXBhcmF0ZSBhdHRyaWJ1dGVcbiAgICAgIGlmIChzeXN0ZW1SZW1pbmRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBmdWxsUmVtaW5kZXJzID0gc3lzdGVtUmVtaW5kZXJzLmpvaW4oJ1xcblxcbi0tLVxcblxcbicpXG4gICAgICAgIGNvbnN0IHsgY29udGVudDogdHJ1bmNhdGVkUmVtaW5kZXJzLCB0cnVuY2F0ZWQ6IHJlbWluZGVyc1RydW5jYXRlZCB9ID1cbiAgICAgICAgICB0cnVuY2F0ZUNvbnRlbnQoZnVsbFJlbWluZGVycylcblxuICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgIHN5c3RlbV9yZW1pbmRlcnM6IHRydW5jYXRlZFJlbWluZGVycyxcbiAgICAgICAgICBzeXN0ZW1fcmVtaW5kZXJzX2NvdW50OiBzeXN0ZW1SZW1pbmRlcnMubGVuZ3RoLFxuICAgICAgICAgIC4uLihyZW1pbmRlcnNUcnVuY2F0ZWQgJiYge1xuICAgICAgICAgICAgc3lzdGVtX3JlbWluZGVyc190cnVuY2F0ZWQ6IHRydWUsXG4gICAgICAgICAgICBzeXN0ZW1fcmVtaW5kZXJzX29yaWdpbmFsX2xlbmd0aDogZnVsbFJlbWluZGVycy5sZW5ndGgsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIC8vIFVwZGF0ZSBsYXN0IHJlcG9ydGVkIGhhc2ggdG8gdGhlIGxhc3QgbWVzc2FnZSBpbiB0aGUgYXJyYXlcbiAgICAgIGNvbnN0IGxhc3RNZXNzYWdlID0gbWVzc2FnZXNGb3JBUElbbWVzc2FnZXNGb3JBUEkubGVuZ3RoIC0gMV1cbiAgICAgIGlmIChsYXN0TWVzc2FnZSkge1xuICAgICAgICBsYXN0UmVwb3J0ZWRNZXNzYWdlSGFzaC5zZXQocXVlcnlTb3VyY2UsIGhhc2hNZXNzYWdlKGxhc3RNZXNzYWdlKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBZGQgYmV0YSBhdHRyaWJ1dGVzIHRvIGVuZExMTVJlcXVlc3RTcGFuLlxuICogSGFuZGxlcyBtb2RlbF9vdXRwdXQgYW5kIHRoaW5raW5nX291dHB1dCB0cnVuY2F0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkQmV0YUxMTVJlc3BvbnNlQXR0cmlidXRlcyhcbiAgZW5kQXR0cmlidXRlczogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbj4sXG4gIG1ldGFkYXRhPzoge1xuICAgIG1vZGVsT3V0cHV0Pzogc3RyaW5nXG4gICAgdGhpbmtpbmdPdXRwdXQ/OiBzdHJpbmdcbiAgfSxcbik6IHZvaWQge1xuICBpZiAoIWlzQmV0YVRyYWNpbmdFbmFibGVkKCkgfHwgIW1ldGFkYXRhKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBBZGQgbW9kZWxfb3V0cHV0ICh0ZXh0IGNvbnRlbnQpIC0gdmlzaWJsZSB0byBhbGwgdXNlcnNcbiAgaWYgKG1ldGFkYXRhLm1vZGVsT3V0cHV0ICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCB7IGNvbnRlbnQ6IG1vZGVsT3V0cHV0LCB0cnVuY2F0ZWQ6IG91dHB1dFRydW5jYXRlZCB9ID1cbiAgICAgIHRydW5jYXRlQ29udGVudChtZXRhZGF0YS5tb2RlbE91dHB1dClcbiAgICBlbmRBdHRyaWJ1dGVzWydyZXNwb25zZS5tb2RlbF9vdXRwdXQnXSA9IG1vZGVsT3V0cHV0XG4gICAgaWYgKG91dHB1dFRydW5jYXRlZCkge1xuICAgICAgZW5kQXR0cmlidXRlc1sncmVzcG9uc2UubW9kZWxfb3V0cHV0X3RydW5jYXRlZCddID0gdHJ1ZVxuICAgICAgZW5kQXR0cmlidXRlc1sncmVzcG9uc2UubW9kZWxfb3V0cHV0X29yaWdpbmFsX2xlbmd0aCddID1cbiAgICAgICAgbWV0YWRhdGEubW9kZWxPdXRwdXQubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIHRoaW5raW5nX291dHB1dCAtIGFudC1vbmx5XG4gIGlmIChcbiAgICBwcm9jZXNzLmVudi5VU0VSX1RZUEUgPT09ICdhbnQnICYmXG4gICAgbWV0YWRhdGEudGhpbmtpbmdPdXRwdXQgIT09IHVuZGVmaW5lZFxuICApIHtcbiAgICBjb25zdCB7IGNvbnRlbnQ6IHRoaW5raW5nT3V0cHV0LCB0cnVuY2F0ZWQ6IHRoaW5raW5nVHJ1bmNhdGVkIH0gPVxuICAgICAgdHJ1bmNhdGVDb250ZW50KG1ldGFkYXRhLnRoaW5raW5nT3V0cHV0KVxuICAgIGVuZEF0dHJpYnV0ZXNbJ3Jlc3BvbnNlLnRoaW5raW5nX291dHB1dCddID0gdGhpbmtpbmdPdXRwdXRcbiAgICBpZiAodGhpbmtpbmdUcnVuY2F0ZWQpIHtcbiAgICAgIGVuZEF0dHJpYnV0ZXNbJ3Jlc3BvbnNlLnRoaW5raW5nX291dHB1dF90cnVuY2F0ZWQnXSA9IHRydWVcbiAgICAgIGVuZEF0dHJpYnV0ZXNbJ3Jlc3BvbnNlLnRoaW5raW5nX291dHB1dF9vcmlnaW5hbF9sZW5ndGgnXSA9XG4gICAgICAgIG1ldGFkYXRhLnRoaW5raW5nT3V0cHV0Lmxlbmd0aFxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFkZCBiZXRhIGF0dHJpYnV0ZXMgdG8gc3RhcnRUb29sU3Bhbi5cbiAqIEFkZHMgdG9vbF9pbnB1dCB3aXRoIHRoZSBzZXJpYWxpemVkIHRvb2wgaW5wdXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRCZXRhVG9vbElucHV0QXR0cmlidXRlcyhcbiAgc3BhbjogU3BhbixcbiAgdG9vbE5hbWU6IHN0cmluZyxcbiAgdG9vbElucHV0OiBzdHJpbmcsXG4pOiB2b2lkIHtcbiAgaWYgKCFpc0JldGFUcmFjaW5nRW5hYmxlZCgpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCB7IGNvbnRlbnQ6IHRydW5jYXRlZElucHV0LCB0cnVuY2F0ZWQgfSA9IHRydW5jYXRlQ29udGVudChcbiAgICBgW1RPT0wgSU5QVVQ6ICR7dG9vbE5hbWV9XVxcbiR7dG9vbElucHV0fWAsXG4gIClcbiAgc3Bhbi5zZXRBdHRyaWJ1dGVzKHtcbiAgICB0b29sX2lucHV0OiB0cnVuY2F0ZWRJbnB1dCxcbiAgICAuLi4odHJ1bmNhdGVkICYmIHtcbiAgICAgIHRvb2xfaW5wdXRfdHJ1bmNhdGVkOiB0cnVlLFxuICAgICAgdG9vbF9pbnB1dF9vcmlnaW5hbF9sZW5ndGg6IHRvb2xJbnB1dC5sZW5ndGgsXG4gICAgfSksXG4gIH0pXG59XG5cbi8qKlxuICogQWRkIGJldGEgYXR0cmlidXRlcyB0byBlbmRUb29sU3Bhbi5cbiAqIEFkZHMgbmV3X2NvbnRleHQgd2l0aCB0aGUgdG9vbCByZXN1bHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRCZXRhVG9vbFJlc3VsdEF0dHJpYnV0ZXMoXG4gIGVuZEF0dHJpYnV0ZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4+LFxuICB0b29sTmFtZTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbixcbiAgdG9vbFJlc3VsdDogc3RyaW5nLFxuKTogdm9pZCB7XG4gIGlmICghaXNCZXRhVHJhY2luZ0VuYWJsZWQoKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgeyBjb250ZW50OiB0cnVuY2F0ZWRSZXN1bHQsIHRydW5jYXRlZCB9ID0gdHJ1bmNhdGVDb250ZW50KFxuICAgIGBbVE9PTCBSRVNVTFQ6ICR7dG9vbE5hbWV9XVxcbiR7dG9vbFJlc3VsdH1gLFxuICApXG4gIGVuZEF0dHJpYnV0ZXNbJ25ld19jb250ZXh0J10gPSB0cnVuY2F0ZWRSZXN1bHRcbiAgaWYgKHRydW5jYXRlZCkge1xuICAgIGVuZEF0dHJpYnV0ZXNbJ25ld19jb250ZXh0X3RydW5jYXRlZCddID0gdHJ1ZVxuICAgIGVuZEF0dHJpYnV0ZXNbJ25ld19jb250ZXh0X29yaWdpbmFsX2xlbmd0aCddID0gdG9vbFJlc3VsdC5sZW5ndGhcbiAgfVxufVxuIiwgIi8qKlxuICogU2Vzc2lvbiBUcmFjaW5nIGZvciBDbGF1ZGUgQ29kZSB1c2luZyBPcGVuVGVsZW1ldHJ5IChCRVRBKVxuICpcbiAqIFRoaXMgbW9kdWxlIHByb3ZpZGVzIGEgaGlnaC1sZXZlbCBBUEkgZm9yIGNyZWF0aW5nIGFuZCBtYW5hZ2luZyBzcGFuc1xuICogdG8gdHJhY2UgQ2xhdWRlIENvZGUgd29ya2Zsb3dzLiBFYWNoIHVzZXIgaW50ZXJhY3Rpb24gY3JlYXRlcyBhIHJvb3RcbiAqIGludGVyYWN0aW9uIHNwYW4sIHdoaWNoIGNvbnRhaW5zIG9wZXJhdGlvbiBzcGFucyAoTExNIHJlcXVlc3RzLCB0b29sIGNhbGxzLCBldGMuKS5cbiAqXG4gKiBSZXF1aXJlbWVudHM6XG4gKiAtIEVuaGFuY2VkIHRlbGVtZXRyeSBpcyBlbmFibGVkIHZpYSBmZWF0dXJlKCdFTkhBTkNFRF9URUxFTUVUUllfQkVUQScpXG4gKiAtIENvbmZpZ3VyZSBPVEVMX1RSQUNFU19FWFBPUlRFUiAoY29uc29sZSwgb3RscCwgZXRjLilcbiAqL1xuXG5pbXBvcnQgeyBmZWF0dXJlIH0gZnJvbSAnYnVuOmJ1bmRsZSdcbmltcG9ydCB7IGNvbnRleHQgYXMgb3RlbENvbnRleHQsIHR5cGUgU3BhbiwgdHJhY2UgfSBmcm9tICdAb3BlbnRlbGVtZXRyeS9hcGknXG5pbXBvcnQgeyBBc3luY0xvY2FsU3RvcmFnZSB9IGZyb20gJ2FzeW5jX2hvb2tzJ1xuaW1wb3J0IHsgZ2V0RmVhdHVyZVZhbHVlX0NBQ0hFRF9NQVlfQkVfU1RBTEUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbmFseXRpY3MvZ3Jvd3RoYm9vay5qcydcbmltcG9ydCB0eXBlIHsgQXNzaXN0YW50TWVzc2FnZSwgVXNlck1lc3NhZ2UgfSBmcm9tICcuLi8uLi90eXBlcy9tZXNzYWdlLmpzJ1xuaW1wb3J0IHsgaXNFbnZEZWZpbmVkRmFsc3ksIGlzRW52VHJ1dGh5IH0gZnJvbSAnLi4vZW52VXRpbHMuanMnXG5pbXBvcnQgeyBnZXRUZWxlbWV0cnlBdHRyaWJ1dGVzIH0gZnJvbSAnLi4vdGVsZW1ldHJ5QXR0cmlidXRlcy5qcydcbmltcG9ydCB7XG4gIGFkZEJldGFJbnRlcmFjdGlvbkF0dHJpYnV0ZXMsXG4gIGFkZEJldGFMTE1SZXF1ZXN0QXR0cmlidXRlcyxcbiAgYWRkQmV0YUxMTVJlc3BvbnNlQXR0cmlidXRlcyxcbiAgYWRkQmV0YVRvb2xJbnB1dEF0dHJpYnV0ZXMsXG4gIGFkZEJldGFUb29sUmVzdWx0QXR0cmlidXRlcyxcbiAgaXNCZXRhVHJhY2luZ0VuYWJsZWQsXG4gIHR5cGUgTExNUmVxdWVzdE5ld0NvbnRleHQsXG4gIHRydW5jYXRlQ29udGVudCxcbn0gZnJvbSAnLi9iZXRhU2Vzc2lvblRyYWNpbmcuanMnXG5pbXBvcnQge1xuICBlbmRJbnRlcmFjdGlvblBlcmZldHRvU3BhbixcbiAgZW5kTExNUmVxdWVzdFBlcmZldHRvU3BhbixcbiAgZW5kVG9vbFBlcmZldHRvU3BhbixcbiAgZW5kVXNlcklucHV0UGVyZmV0dG9TcGFuLFxuICBpc1BlcmZldHRvVHJhY2luZ0VuYWJsZWQsXG4gIHN0YXJ0SW50ZXJhY3Rpb25QZXJmZXR0b1NwYW4sXG4gIHN0YXJ0TExNUmVxdWVzdFBlcmZldHRvU3BhbixcbiAgc3RhcnRUb29sUGVyZmV0dG9TcGFuLFxuICBzdGFydFVzZXJJbnB1dFBlcmZldHRvU3Bhbixcbn0gZnJvbSAnLi9wZXJmZXR0b1RyYWNpbmcuanMnXG5cbi8vIFJlLWV4cG9ydCBmb3IgY2FsbGVyc1xuZXhwb3J0IHR5cGUgeyBTcGFuIH1cbmV4cG9ydCB7IGlzQmV0YVRyYWNpbmdFbmFibGVkLCB0eXBlIExMTVJlcXVlc3ROZXdDb250ZXh0IH1cblxuLy8gTWVzc2FnZSB0eXBlIGZvciBBUEkgY2FsbHMgKFVzZXJNZXNzYWdlIG9yIEFzc2lzdGFudE1lc3NhZ2UpXG50eXBlIEFQSU1lc3NhZ2UgPSBVc2VyTWVzc2FnZSB8IEFzc2lzdGFudE1lc3NhZ2VcblxudHlwZSBTcGFuVHlwZSA9XG4gIHwgJ2ludGVyYWN0aW9uJ1xuICB8ICdsbG1fcmVxdWVzdCdcbiAgfCAndG9vbCdcbiAgfCAndG9vbC5ibG9ja2VkX29uX3VzZXInXG4gIHwgJ3Rvb2wuZXhlY3V0aW9uJ1xuICB8ICdob29rJ1xuXG5pbnRlcmZhY2UgU3BhbkNvbnRleHQge1xuICBzcGFuOiBTcGFuXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIGF0dHJpYnV0ZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4+XG4gIGVuZGVkPzogYm9vbGVhblxuICBwZXJmZXR0b1NwYW5JZD86IHN0cmluZ1xufVxuXG4vLyBBTFMgc3RvcmVzIFNwYW5Db250ZXh0IGRpcmVjdGx5IHNvIGl0IGhvbGRzIGEgc3Ryb25nIHJlZmVyZW5jZSB3aGlsZSBhIHNwYW5cbi8vIGlzIGFjdGl2ZS4gV2l0aCB0aGF0LCBhY3RpdmVTcGFucyBjYW4gdXNlIFdlYWtSZWYgXHUyMDE0IHdoZW4gQUxTIGlzIGNsZWFyZWRcbi8vIChlbnRlcldpdGgodW5kZWZpbmVkKSkgYW5kIG5vIG90aGVyIGNvZGUgaG9sZHMgdGhlIFNwYW5Db250ZXh0LCBHQyBjYW4gY29sbGVjdFxuLy8gaXQgYW5kIHRoZSBXZWFrUmVmIGdvZXMgc3RhbGUuXG5jb25zdCBpbnRlcmFjdGlvbkNvbnRleHQgPSBuZXcgQXN5bmNMb2NhbFN0b3JhZ2U8U3BhbkNvbnRleHQgfCB1bmRlZmluZWQ+KClcbmNvbnN0IHRvb2xDb250ZXh0ID0gbmV3IEFzeW5jTG9jYWxTdG9yYWdlPFNwYW5Db250ZXh0IHwgdW5kZWZpbmVkPigpXG5jb25zdCBhY3RpdmVTcGFucyA9IG5ldyBNYXA8c3RyaW5nLCBXZWFrUmVmPFNwYW5Db250ZXh0Pj4oKVxuLy8gU3BhbnMgbm90IHN0b3JlZCBpbiBBTFMgKExMTSByZXF1ZXN0LCBibG9ja2VkLW9uLXVzZXIsIHRvb2wgZXhlY3V0aW9uLCBob29rKVxuLy8gbmVlZCBhIHN0cm9uZyByZWZlcmVuY2UgdG8gcHJldmVudCBHQyBmcm9tIGNvbGxlY3RpbmcgdGhlIFNwYW5Db250ZXh0IGJlZm9yZVxuLy8gdGhlIGNvcnJlc3BvbmRpbmcgZW5kKiBmdW5jdGlvbiByZXRyaWV2ZXMgaXQuXG5jb25zdCBzdHJvbmdTcGFucyA9IG5ldyBNYXA8c3RyaW5nLCBTcGFuQ29udGV4dD4oKVxubGV0IGludGVyYWN0aW9uU2VxdWVuY2UgPSAwXG5sZXQgX2NsZWFudXBJbnRlcnZhbFN0YXJ0ZWQgPSBmYWxzZVxuXG5jb25zdCBTUEFOX1RUTF9NUyA9IDMwICogNjAgKiAxMDAwIC8vIDMwIG1pbnV0ZXNcblxuZnVuY3Rpb24gZ2V0U3BhbklkKHNwYW46IFNwYW4pOiBzdHJpbmcge1xuICByZXR1cm4gc3Bhbi5zcGFuQ29udGV4dCgpLnNwYW5JZCB8fCAnJ1xufVxuXG4vKipcbiAqIExhemlseSBzdGFydCBhIGJhY2tncm91bmQgaW50ZXJ2YWwgdGhhdCBldmljdHMgb3JwaGFuZWQgc3BhbnMgZnJvbSBhY3RpdmVTcGFucy5cbiAqXG4gKiBOb3JtYWwgdGVhcmRvd24gY2FsbHMgZW5kSW50ZXJhY3Rpb25TcGFuIC8gZW5kVG9vbFNwYW4sIHdoaWNoIGRlbGV0ZSBzcGFuc1xuICogaW1tZWRpYXRlbHkuIFRoaXMgaW50ZXJ2YWwgaXMgYSBzYWZldHkgbmV0IGZvciBzcGFucyB0aGF0IHdlcmUgbmV2ZXIgZW5kZWRcbiAqIChlLmcuIGFib3J0ZWQgc3RyZWFtcywgdW5jYXVnaHQgZXhjZXB0aW9ucyBtaWQtcXVlcnkpIFx1MjAxNCB3aXRob3V0IGl0IHRoZXlcbiAqIGFjY3VtdWxhdGUgaW4gYWN0aXZlU3BhbnMgaW5kZWZpbml0ZWx5LCBob2xkaW5nIHJlZmVyZW5jZXMgdG8gU3BhbiBvYmplY3RzXG4gKiBhbmQgdGhlIE9wZW5UZWxlbWV0cnkgY29udGV4dCBjaGFpbi5cbiAqXG4gKiBJbml0aWFsaXplZCBvbiB0aGUgZmlyc3Qgc3RhcnRJbnRlcmFjdGlvblNwYW4gY2FsbCAobm90IGF0IG1vZHVsZSBsb2FkKSB0b1xuICogYXZvaWQgdHJpZ2dlcmluZyB0aGUgbm8tdG9wLWxldmVsLXNpZGUtZWZmZWN0cyBsaW50IHJ1bGUgYW5kIHRvIGtlZXAgdGhlXG4gKiBpbnRlcnZhbCBmcm9tIHJ1bm5pbmcgaW4gcHJvY2Vzc2VzIHRoYXQgbmV2ZXIgc3RhcnQgYSBzcGFuLlxuICogdW5yZWYoKSBwcmV2ZW50cyB0aGUgdGltZXIgZnJvbSBrZWVwaW5nIHRoZSBwcm9jZXNzIGFsaXZlIGFmdGVyIGFsbCBvdGhlclxuICogd29yayBpcyBkb25lLlxuICovXG5mdW5jdGlvbiBlbnN1cmVDbGVhbnVwSW50ZXJ2YWwoKTogdm9pZCB7XG4gIGlmIChfY2xlYW51cEludGVydmFsU3RhcnRlZCkgcmV0dXJuXG4gIF9jbGVhbnVwSW50ZXJ2YWxTdGFydGVkID0gdHJ1ZVxuICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICBjb25zdCBjdXRvZmYgPSBEYXRlLm5vdygpIC0gU1BBTl9UVExfTVNcbiAgICBmb3IgKGNvbnN0IFtzcGFuSWQsIHdlYWtSZWZdIG9mIGFjdGl2ZVNwYW5zKSB7XG4gICAgICBjb25zdCBjdHggPSB3ZWFrUmVmLmRlcmVmKClcbiAgICAgIGlmIChjdHggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhY3RpdmVTcGFucy5kZWxldGUoc3BhbklkKVxuICAgICAgICBzdHJvbmdTcGFucy5kZWxldGUoc3BhbklkKVxuICAgICAgfSBlbHNlIGlmIChjdHguc3RhcnRUaW1lIDwgY3V0b2ZmKSB7XG4gICAgICAgIGlmICghY3R4LmVuZGVkKSBjdHguc3Bhbi5lbmQoKSAvLyBmbHVzaCBhbnkgcmVjb3JkZWQgYXR0cmlidXRlcyB0byB0aGUgZXhwb3J0ZXJcbiAgICAgICAgYWN0aXZlU3BhbnMuZGVsZXRlKHNwYW5JZClcbiAgICAgICAgc3Ryb25nU3BhbnMuZGVsZXRlKHNwYW5JZClcbiAgICAgIH1cbiAgICB9XG4gIH0sIDYwXzAwMClcbiAgaWYgKHR5cGVvZiBpbnRlcnZhbC51bnJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGludGVydmFsLnVucmVmKCkgLy8gTm9kZS5qcyAvIEJ1bjogZG9uJ3QgYmxvY2sgcHJvY2VzcyBleGl0XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayBpZiBlbmhhbmNlZCB0ZWxlbWV0cnkgaXMgZW5hYmxlZC5cbiAqIFByaW9yaXR5OiBlbnYgdmFyIG92ZXJyaWRlID4gYW50IGJ1aWxkID4gR3Jvd3RoQm9vayBnYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0VuaGFuY2VkVGVsZW1ldHJ5RW5hYmxlZCgpOiBib29sZWFuIHtcbiAgaWYgKGZlYXR1cmUoJ0VOSEFOQ0VEX1RFTEVNRVRSWV9CRVRBJykpIHtcbiAgICBjb25zdCBlbnYgPVxuICAgICAgcHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfRU5IQU5DRURfVEVMRU1FVFJZX0JFVEEgPz9cbiAgICAgIHByb2Nlc3MuZW52LkVOQUJMRV9FTkhBTkNFRF9URUxFTUVUUllfQkVUQVxuICAgIGlmIChpc0VudlRydXRoeShlbnYpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBpZiAoaXNFbnZEZWZpbmVkRmFsc3koZW52KSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICBwcm9jZXNzLmVudi5VU0VSX1RZUEUgPT09ICdhbnQnIHx8XG4gICAgICBnZXRGZWF0dXJlVmFsdWVfQ0FDSEVEX01BWV9CRV9TVEFMRSgnZW5oYW5jZWRfdGVsZW1ldHJ5X2JldGEnLCBmYWxzZSlcbiAgICApXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYW55IHRyYWNpbmcgaXMgZW5hYmxlZCAoZWl0aGVyIHN0YW5kYXJkIGVuaGFuY2VkIHRlbGVtZXRyeSBPUiBiZXRhIHRyYWNpbmcpXG4gKi9cbmZ1bmN0aW9uIGlzQW55VHJhY2luZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc0VuaGFuY2VkVGVsZW1ldHJ5RW5hYmxlZCgpIHx8IGlzQmV0YVRyYWNpbmdFbmFibGVkKClcbn1cblxuZnVuY3Rpb24gZ2V0VHJhY2VyKCkge1xuICByZXR1cm4gdHJhY2UuZ2V0VHJhY2VyKCdjb20uYW50aHJvcGljLmNsYXVkZV9jb2RlLnRyYWNpbmcnLCAnMS4wLjAnKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTcGFuQXR0cmlidXRlcyhcbiAgc3BhblR5cGU6IFNwYW5UeXBlLFxuICBjdXN0b21BdHRyaWJ1dGVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPiA9IHt9LFxuKTogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbj4ge1xuICBjb25zdCBiYXNlQXR0cmlidXRlcyA9IGdldFRlbGVtZXRyeUF0dHJpYnV0ZXMoKVxuXG4gIGNvbnN0IGF0dHJpYnV0ZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4+ID0ge1xuICAgIC4uLmJhc2VBdHRyaWJ1dGVzLFxuICAgICdzcGFuLnR5cGUnOiBzcGFuVHlwZSxcbiAgICAuLi5jdXN0b21BdHRyaWJ1dGVzLFxuICB9XG5cbiAgcmV0dXJuIGF0dHJpYnV0ZXNcbn1cblxuLyoqXG4gKiBTdGFydCBhbiBpbnRlcmFjdGlvbiBzcGFuLiBUaGlzIHdyYXBzIGEgdXNlciByZXF1ZXN0IC0+IENsYXVkZSByZXNwb25zZSBjeWNsZS5cbiAqIFRoaXMgaXMgbm93IGEgcm9vdCBzcGFuIHRoYXQgaW5jbHVkZXMgYWxsIHNlc3Npb24tbGV2ZWwgYXR0cmlidXRlcy5cbiAqIFNldHMgdGhlIGludGVyYWN0aW9uIGNvbnRleHQgZm9yIGFsbCBzdWJzZXF1ZW50IG9wZXJhdGlvbnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydEludGVyYWN0aW9uU3Bhbih1c2VyUHJvbXB0OiBzdHJpbmcpOiBTcGFuIHtcbiAgZW5zdXJlQ2xlYW51cEludGVydmFsKClcblxuICAvLyBTdGFydCBQZXJmZXR0byBzcGFuIHJlZ2FyZGxlc3Mgb2YgT1RlbCB0cmFjaW5nIHN0YXRlXG4gIGNvbnN0IHBlcmZldHRvU3BhbklkID0gaXNQZXJmZXR0b1RyYWNpbmdFbmFibGVkKClcbiAgICA/IHN0YXJ0SW50ZXJhY3Rpb25QZXJmZXR0b1NwYW4odXNlclByb21wdClcbiAgICA6IHVuZGVmaW5lZFxuXG4gIGlmICghaXNBbnlUcmFjaW5nRW5hYmxlZCgpKSB7XG4gICAgLy8gU3RpbGwgdHJhY2sgUGVyZmV0dG8gc3BhbiBldmVuIGlmIE9UZWwgaXMgZGlzYWJsZWRcbiAgICBpZiAocGVyZmV0dG9TcGFuSWQpIHtcbiAgICAgIGNvbnN0IGR1bW15U3BhbiA9IHRyYWNlLmdldEFjdGl2ZVNwYW4oKSB8fCBnZXRUcmFjZXIoKS5zdGFydFNwYW4oJ2R1bW15JylcbiAgICAgIGNvbnN0IHNwYW5JZCA9IGdldFNwYW5JZChkdW1teVNwYW4pXG4gICAgICBjb25zdCBzcGFuQ29udGV4dE9iajogU3BhbkNvbnRleHQgPSB7XG4gICAgICAgIHNwYW46IGR1bW15U3BhbixcbiAgICAgICAgc3RhcnRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgICAgcGVyZmV0dG9TcGFuSWQsXG4gICAgICB9XG4gICAgICBhY3RpdmVTcGFucy5zZXQoc3BhbklkLCBuZXcgV2Vha1JlZihzcGFuQ29udGV4dE9iaikpXG4gICAgICBpbnRlcmFjdGlvbkNvbnRleHQuZW50ZXJXaXRoKHNwYW5Db250ZXh0T2JqKVxuICAgICAgcmV0dXJuIGR1bW15U3BhblxuICAgIH1cbiAgICByZXR1cm4gdHJhY2UuZ2V0QWN0aXZlU3BhbigpIHx8IGdldFRyYWNlcigpLnN0YXJ0U3BhbignZHVtbXknKVxuICB9XG5cbiAgY29uc3QgdHJhY2VyID0gZ2V0VHJhY2VyKClcbiAgY29uc3QgaXNVc2VyUHJvbXB0TG9nZ2luZ0VuYWJsZWQgPSBpc0VudlRydXRoeShcbiAgICBwcm9jZXNzLmVudi5PVEVMX0xPR19VU0VSX1BST01QVFMsXG4gIClcbiAgY29uc3QgcHJvbXB0VG9Mb2cgPSBpc1VzZXJQcm9tcHRMb2dnaW5nRW5hYmxlZCA/IHVzZXJQcm9tcHQgOiAnPFJFREFDVEVEPidcblxuICBpbnRlcmFjdGlvblNlcXVlbmNlKytcblxuICBjb25zdCBhdHRyaWJ1dGVzID0gY3JlYXRlU3BhbkF0dHJpYnV0ZXMoJ2ludGVyYWN0aW9uJywge1xuICAgIHVzZXJfcHJvbXB0OiBwcm9tcHRUb0xvZyxcbiAgICB1c2VyX3Byb21wdF9sZW5ndGg6IHVzZXJQcm9tcHQubGVuZ3RoLFxuICAgICdpbnRlcmFjdGlvbi5zZXF1ZW5jZSc6IGludGVyYWN0aW9uU2VxdWVuY2UsXG4gIH0pXG5cbiAgY29uc3Qgc3BhbiA9IHRyYWNlci5zdGFydFNwYW4oJ2NsYXVkZV9jb2RlLmludGVyYWN0aW9uJywge1xuICAgIGF0dHJpYnV0ZXMsXG4gIH0pXG5cbiAgLy8gQWRkIGV4cGVyaW1lbnRhbCBhdHRyaWJ1dGVzIChuZXdfY29udGV4dClcbiAgYWRkQmV0YUludGVyYWN0aW9uQXR0cmlidXRlcyhzcGFuLCB1c2VyUHJvbXB0KVxuXG4gIGNvbnN0IHNwYW5JZCA9IGdldFNwYW5JZChzcGFuKVxuICBjb25zdCBzcGFuQ29udGV4dE9iajogU3BhbkNvbnRleHQgPSB7XG4gICAgc3BhbixcbiAgICBzdGFydFRpbWU6IERhdGUubm93KCksXG4gICAgYXR0cmlidXRlcyxcbiAgICBwZXJmZXR0b1NwYW5JZCxcbiAgfVxuICBhY3RpdmVTcGFucy5zZXQoc3BhbklkLCBuZXcgV2Vha1JlZihzcGFuQ29udGV4dE9iaikpXG5cbiAgaW50ZXJhY3Rpb25Db250ZXh0LmVudGVyV2l0aChzcGFuQ29udGV4dE9iailcblxuICByZXR1cm4gc3BhblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5kSW50ZXJhY3Rpb25TcGFuKCk6IHZvaWQge1xuICBjb25zdCBzcGFuQ29udGV4dCA9IGludGVyYWN0aW9uQ29udGV4dC5nZXRTdG9yZSgpXG4gIGlmICghc3BhbkNvbnRleHQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChzcGFuQ29udGV4dC5lbmRlZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gRW5kIFBlcmZldHRvIHNwYW5cbiAgaWYgKHNwYW5Db250ZXh0LnBlcmZldHRvU3BhbklkKSB7XG4gICAgZW5kSW50ZXJhY3Rpb25QZXJmZXR0b1NwYW4oc3BhbkNvbnRleHQucGVyZmV0dG9TcGFuSWQpXG4gIH1cblxuICBpZiAoIWlzQW55VHJhY2luZ0VuYWJsZWQoKSkge1xuICAgIHNwYW5Db250ZXh0LmVuZGVkID0gdHJ1ZVxuICAgIGFjdGl2ZVNwYW5zLmRlbGV0ZShnZXRTcGFuSWQoc3BhbkNvbnRleHQuc3BhbikpXG4gICAgLy8gQ2xlYXIgdGhlIHN0b3JlIHNvIGFzeW5jIGNvbnRpbnVhdGlvbnMgY3JlYXRlZCBhZnRlciB0aGlzIHBvaW50ICh0aW1lcnMsXG4gICAgLy8gcHJvbWlzZSBjYWxsYmFja3MsIEkvTykgZG8gbm90IGluaGVyaXQgYSByZWZlcmVuY2UgdG8gdGhlIGVuZGVkIHNwYW4uXG4gICAgLy8gZW50ZXJXaXRoKHVuZGVmaW5lZCkgaXMgaW50ZW50aW9uYWw6IGV4aXQoKCkgPT4ge30pIGlzIGEgbm8tb3AgYmVjYXVzZSBpdFxuICAgIC8vIG9ubHkgc3VwcHJlc3NlcyB0aGUgc3RvcmUgaW5zaWRlIHRoZSBjYWxsYmFjayBhbmQgcmV0dXJucyBpbW1lZGlhdGVseS5cbiAgICBpbnRlcmFjdGlvbkNvbnRleHQuZW50ZXJXaXRoKHVuZGVmaW5lZClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGR1cmF0aW9uID0gRGF0ZS5ub3coKSAtIHNwYW5Db250ZXh0LnN0YXJ0VGltZVxuICBzcGFuQ29udGV4dC5zcGFuLnNldEF0dHJpYnV0ZXMoe1xuICAgICdpbnRlcmFjdGlvbi5kdXJhdGlvbl9tcyc6IGR1cmF0aW9uLFxuICB9KVxuXG4gIHNwYW5Db250ZXh0LnNwYW4uZW5kKClcbiAgc3BhbkNvbnRleHQuZW5kZWQgPSB0cnVlXG4gIGFjdGl2ZVNwYW5zLmRlbGV0ZShnZXRTcGFuSWQoc3BhbkNvbnRleHQuc3BhbikpXG4gIGludGVyYWN0aW9uQ29udGV4dC5lbnRlcldpdGgodW5kZWZpbmVkKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRMTE1SZXF1ZXN0U3BhbihcbiAgbW9kZWw6IHN0cmluZyxcbiAgbmV3Q29udGV4dD86IExMTVJlcXVlc3ROZXdDb250ZXh0LFxuICBtZXNzYWdlc0ZvckFQST86IEFQSU1lc3NhZ2VbXSxcbiAgZmFzdE1vZGU/OiBib29sZWFuLFxuKTogU3BhbiB7XG4gIC8vIFN0YXJ0IFBlcmZldHRvIHNwYW4gcmVnYXJkbGVzcyBvZiBPVGVsIHRyYWNpbmcgc3RhdGVcbiAgY29uc3QgcGVyZmV0dG9TcGFuSWQgPSBpc1BlcmZldHRvVHJhY2luZ0VuYWJsZWQoKVxuICAgID8gc3RhcnRMTE1SZXF1ZXN0UGVyZmV0dG9TcGFuKHtcbiAgICAgICAgbW9kZWwsXG4gICAgICAgIHF1ZXJ5U291cmNlOiBuZXdDb250ZXh0Py5xdWVyeVNvdXJjZSxcbiAgICAgICAgbWVzc2FnZUlkOiB1bmRlZmluZWQsIC8vIFdpbGwgYmUgc2V0IGluIGVuZExMTVJlcXVlc3RTcGFuXG4gICAgICB9KVxuICAgIDogdW5kZWZpbmVkXG5cbiAgaWYgKCFpc0FueVRyYWNpbmdFbmFibGVkKCkpIHtcbiAgICAvLyBTdGlsbCB0cmFjayBQZXJmZXR0byBzcGFuIGV2ZW4gaWYgT1RlbCBpcyBkaXNhYmxlZFxuICAgIGlmIChwZXJmZXR0b1NwYW5JZCkge1xuICAgICAgY29uc3QgZHVtbXlTcGFuID0gdHJhY2UuZ2V0QWN0aXZlU3BhbigpIHx8IGdldFRyYWNlcigpLnN0YXJ0U3BhbignZHVtbXknKVxuICAgICAgY29uc3Qgc3BhbklkID0gZ2V0U3BhbklkKGR1bW15U3BhbilcbiAgICAgIGNvbnN0IHNwYW5Db250ZXh0T2JqOiBTcGFuQ29udGV4dCA9IHtcbiAgICAgICAgc3BhbjogZHVtbXlTcGFuLFxuICAgICAgICBzdGFydFRpbWU6IERhdGUubm93KCksXG4gICAgICAgIGF0dHJpYnV0ZXM6IHsgbW9kZWwgfSxcbiAgICAgICAgcGVyZmV0dG9TcGFuSWQsXG4gICAgICB9XG4gICAgICBhY3RpdmVTcGFucy5zZXQoc3BhbklkLCBuZXcgV2Vha1JlZihzcGFuQ29udGV4dE9iaikpXG4gICAgICBzdHJvbmdTcGFucy5zZXQoc3BhbklkLCBzcGFuQ29udGV4dE9iailcbiAgICAgIHJldHVybiBkdW1teVNwYW5cbiAgICB9XG4gICAgcmV0dXJuIHRyYWNlLmdldEFjdGl2ZVNwYW4oKSB8fCBnZXRUcmFjZXIoKS5zdGFydFNwYW4oJ2R1bW15JylcbiAgfVxuXG4gIGNvbnN0IHRyYWNlciA9IGdldFRyYWNlcigpXG4gIGNvbnN0IHBhcmVudFNwYW5DdHggPSBpbnRlcmFjdGlvbkNvbnRleHQuZ2V0U3RvcmUoKVxuXG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSBjcmVhdGVTcGFuQXR0cmlidXRlcygnbGxtX3JlcXVlc3QnLCB7XG4gICAgbW9kZWw6IG1vZGVsLFxuICAgICdsbG1fcmVxdWVzdC5jb250ZXh0JzogcGFyZW50U3BhbkN0eCA/ICdpbnRlcmFjdGlvbicgOiAnc3RhbmRhbG9uZScsXG4gICAgc3BlZWQ6IGZhc3RNb2RlID8gJ2Zhc3QnIDogJ25vcm1hbCcsXG4gIH0pXG5cbiAgY29uc3QgY3R4ID0gcGFyZW50U3BhbkN0eFxuICAgID8gdHJhY2Uuc2V0U3BhbihvdGVsQ29udGV4dC5hY3RpdmUoKSwgcGFyZW50U3BhbkN0eC5zcGFuKVxuICAgIDogb3RlbENvbnRleHQuYWN0aXZlKClcbiAgY29uc3Qgc3BhbiA9IHRyYWNlci5zdGFydFNwYW4oJ2NsYXVkZV9jb2RlLmxsbV9yZXF1ZXN0JywgeyBhdHRyaWJ1dGVzIH0sIGN0eClcblxuICAvLyBBZGQgcXVlcnlfc291cmNlIChhZ2VudCBuYW1lKSBpZiBwcm92aWRlZFxuICBpZiAobmV3Q29udGV4dD8ucXVlcnlTb3VyY2UpIHtcbiAgICBzcGFuLnNldEF0dHJpYnV0ZSgncXVlcnlfc291cmNlJywgbmV3Q29udGV4dC5xdWVyeVNvdXJjZSlcbiAgfVxuXG4gIC8vIEFkZCBleHBlcmltZW50YWwgYXR0cmlidXRlcyAoc3lzdGVtIHByb21wdCwgbmV3X2NvbnRleHQpXG4gIGFkZEJldGFMTE1SZXF1ZXN0QXR0cmlidXRlcyhzcGFuLCBuZXdDb250ZXh0LCBtZXNzYWdlc0ZvckFQSSlcblxuICBjb25zdCBzcGFuSWQgPSBnZXRTcGFuSWQoc3BhbilcbiAgY29uc3Qgc3BhbkNvbnRleHRPYmo6IFNwYW5Db250ZXh0ID0ge1xuICAgIHNwYW4sXG4gICAgc3RhcnRUaW1lOiBEYXRlLm5vdygpLFxuICAgIGF0dHJpYnV0ZXMsXG4gICAgcGVyZmV0dG9TcGFuSWQsXG4gIH1cbiAgYWN0aXZlU3BhbnMuc2V0KHNwYW5JZCwgbmV3IFdlYWtSZWYoc3BhbkNvbnRleHRPYmopKVxuICBzdHJvbmdTcGFucy5zZXQoc3BhbklkLCBzcGFuQ29udGV4dE9iailcblxuICByZXR1cm4gc3BhblxufVxuXG4vKipcbiAqIEVuZCBhbiBMTE0gcmVxdWVzdCBzcGFuIGFuZCBhdHRhY2ggcmVzcG9uc2UgbWV0YWRhdGEuXG4gKlxuICogQHBhcmFtIHNwYW4gLSBPcHRpb25hbC4gVGhlIGV4YWN0IHNwYW4gcmV0dXJuZWQgYnkgc3RhcnRMTE1SZXF1ZXN0U3BhbigpLlxuICogICBJTVBPUlRBTlQ6IFdoZW4gbXVsdGlwbGUgTExNIHJlcXVlc3RzIHJ1biBpbiBwYXJhbGxlbCAoZS5nLiwgd2FybXVwIHJlcXVlc3RzLFxuICogICB0b3BpYyBjbGFzc2lmaWVyLCBmaWxlIHBhdGggZXh0cmFjdG9yLCBtYWluIHRocmVhZCksIHlvdSBNVVNUIHBhc3MgdGhlIHNwZWNpZmljIHNwYW5cbiAqICAgdG8gZW5zdXJlIHJlc3BvbnNlcyBhcmUgYXR0YWNoZWQgdG8gdGhlIGNvcnJlY3QgcmVxdWVzdC4gV2l0aG91dCBpdCwgcmVzcG9uc2VzIG1heSBiZVxuICogICBpbmNvcnJlY3RseSBhdHRhY2hlZCB0byB3aGljaGV2ZXIgc3BhbiBoYXBwZW5zIHRvIGJlIFwibGFzdFwiIGluIHRoZSBhY3RpdmVTcGFucyBtYXAuXG4gKlxuICogICBJZiBub3QgcHJvdmlkZWQsIGZhbGxzIGJhY2sgdG8gZmluZGluZyB0aGUgbW9zdCByZWNlbnQgbGxtX3JlcXVlc3Qgc3BhbiAobGVnYWN5IGJlaGF2aW9yKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuZExMTVJlcXVlc3RTcGFuKFxuICBzcGFuPzogU3BhbixcbiAgbWV0YWRhdGE/OiB7XG4gICAgaW5wdXRUb2tlbnM/OiBudW1iZXJcbiAgICBvdXRwdXRUb2tlbnM/OiBudW1iZXJcbiAgICBjYWNoZVJlYWRUb2tlbnM/OiBudW1iZXJcbiAgICBjYWNoZUNyZWF0aW9uVG9rZW5zPzogbnVtYmVyXG4gICAgc3VjY2Vzcz86IGJvb2xlYW5cbiAgICBzdGF0dXNDb2RlPzogbnVtYmVyXG4gICAgZXJyb3I/OiBzdHJpbmdcbiAgICBhdHRlbXB0PzogbnVtYmVyXG4gICAgbW9kZWxSZXNwb25zZT86IHN0cmluZ1xuICAgIC8qKiBUZXh0IG91dHB1dCBmcm9tIHRoZSBtb2RlbCAobm9uLXRoaW5raW5nIGNvbnRlbnQpICovXG4gICAgbW9kZWxPdXRwdXQ/OiBzdHJpbmdcbiAgICAvKiogVGhpbmtpbmcvcmVhc29uaW5nIG91dHB1dCBmcm9tIHRoZSBtb2RlbCAqL1xuICAgIHRoaW5raW5nT3V0cHV0Pzogc3RyaW5nXG4gICAgLyoqIFdoZXRoZXIgdGhlIG91dHB1dCBpbmNsdWRlZCB0b29sIGNhbGxzIChsb29rIGF0IHRvb2wgc3BhbnMgZm9yIGRldGFpbHMpICovXG4gICAgaGFzVG9vbENhbGw/OiBib29sZWFuXG4gICAgLyoqIFRpbWUgdG8gZmlyc3QgdG9rZW4gaW4gbWlsbGlzZWNvbmRzICovXG4gICAgdHRmdE1zPzogbnVtYmVyXG4gICAgLyoqIFRpbWUgc3BlbnQgaW4gcHJlLXJlcXVlc3Qgc2V0dXAgYmVmb3JlIHRoZSBzdWNjZXNzZnVsIGF0dGVtcHQgKi9cbiAgICByZXF1ZXN0U2V0dXBNcz86IG51bWJlclxuICAgIC8qKiBUaW1lc3RhbXBzIChEYXRlLm5vdygpKSBvZiBlYWNoIGF0dGVtcHQgc3RhcnQgXHUyMDE0IHVzZWQgdG8gZW1pdCByZXRyeSBzdWItc3BhbnMgKi9cbiAgICBhdHRlbXB0U3RhcnRUaW1lcz86IG51bWJlcltdXG4gIH0sXG4pOiB2b2lkIHtcbiAgbGV0IGxsbVNwYW5Db250ZXh0OiBTcGFuQ29udGV4dCB8IHVuZGVmaW5lZFxuXG4gIGlmIChzcGFuKSB7XG4gICAgLy8gVXNlIHRoZSBwcm92aWRlZCBzcGFuIGRpcmVjdGx5IC0gdGhpcyBpcyB0aGUgY29ycmVjdCBhcHByb2FjaCBmb3IgcGFyYWxsZWwgcmVxdWVzdHNcbiAgICBjb25zdCBzcGFuSWQgPSBnZXRTcGFuSWQoc3BhbilcbiAgICBsbG1TcGFuQ29udGV4dCA9IGFjdGl2ZVNwYW5zLmdldChzcGFuSWQpPy5kZXJlZigpXG4gIH0gZWxzZSB7XG4gICAgLy8gTGVnYWN5IGZhbGxiYWNrOiBmaW5kIHRoZSBtb3N0IHJlY2VudCBsbG1fcmVxdWVzdCBzcGFuXG4gICAgLy8gV0FSTklORzogVGhpcyBjYW4gY2F1c2UgbWlzbWF0Y2hlZCByZXNwb25zZXMgd2hlbiBtdWx0aXBsZSByZXF1ZXN0cyBhcmUgaW4gZmxpZ2h0XG4gICAgbGxtU3BhbkNvbnRleHQgPSBBcnJheS5mcm9tKGFjdGl2ZVNwYW5zLnZhbHVlcygpKVxuICAgICAgLmZpbmRMYXN0KHIgPT4ge1xuICAgICAgICBjb25zdCBjdHggPSByLmRlcmVmKClcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBjdHg/LmF0dHJpYnV0ZXNbJ3NwYW4udHlwZSddID09PSAnbGxtX3JlcXVlc3QnIHx8XG4gICAgICAgICAgY3R4Py5hdHRyaWJ1dGVzWydtb2RlbCddXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgICA/LmRlcmVmKClcbiAgfVxuXG4gIGlmICghbGxtU3BhbkNvbnRleHQpIHtcbiAgICAvLyBTcGFuIHdhcyBhbHJlYWR5IGVuZGVkIG9yIG5ldmVyIHRyYWNrZWRcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGR1cmF0aW9uID0gRGF0ZS5ub3coKSAtIGxsbVNwYW5Db250ZXh0LnN0YXJ0VGltZVxuXG4gIC8vIEVuZCBQZXJmZXR0byBzcGFuIHdpdGggZnVsbCBtZXRhZGF0YVxuICBpZiAobGxtU3BhbkNvbnRleHQucGVyZmV0dG9TcGFuSWQpIHtcbiAgICBlbmRMTE1SZXF1ZXN0UGVyZmV0dG9TcGFuKGxsbVNwYW5Db250ZXh0LnBlcmZldHRvU3BhbklkLCB7XG4gICAgICB0dGZ0TXM6IG1ldGFkYXRhPy50dGZ0TXMsXG4gICAgICB0dGx0TXM6IGR1cmF0aW9uLCAvLyBUaW1lIHRvIGxhc3QgdG9rZW4gaXMgdGhlIHRvdGFsIGR1cmF0aW9uXG4gICAgICBwcm9tcHRUb2tlbnM6IG1ldGFkYXRhPy5pbnB1dFRva2VucyxcbiAgICAgIG91dHB1dFRva2VuczogbWV0YWRhdGE/Lm91dHB1dFRva2VucyxcbiAgICAgIGNhY2hlUmVhZFRva2VuczogbWV0YWRhdGE/LmNhY2hlUmVhZFRva2VucyxcbiAgICAgIGNhY2hlQ3JlYXRpb25Ub2tlbnM6IG1ldGFkYXRhPy5jYWNoZUNyZWF0aW9uVG9rZW5zLFxuICAgICAgc3VjY2VzczogbWV0YWRhdGE/LnN1Y2Nlc3MsXG4gICAgICBlcnJvcjogbWV0YWRhdGE/LmVycm9yLFxuICAgICAgcmVxdWVzdFNldHVwTXM6IG1ldGFkYXRhPy5yZXF1ZXN0U2V0dXBNcyxcbiAgICAgIGF0dGVtcHRTdGFydFRpbWVzOiBtZXRhZGF0YT8uYXR0ZW1wdFN0YXJ0VGltZXMsXG4gICAgfSlcbiAgfVxuXG4gIGlmICghaXNBbnlUcmFjaW5nRW5hYmxlZCgpKSB7XG4gICAgY29uc3Qgc3BhbklkID0gZ2V0U3BhbklkKGxsbVNwYW5Db250ZXh0LnNwYW4pXG4gICAgYWN0aXZlU3BhbnMuZGVsZXRlKHNwYW5JZClcbiAgICBzdHJvbmdTcGFucy5kZWxldGUoc3BhbklkKVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgZW5kQXR0cmlidXRlczogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbj4gPSB7XG4gICAgZHVyYXRpb25fbXM6IGR1cmF0aW9uLFxuICB9XG5cbiAgaWYgKG1ldGFkYXRhKSB7XG4gICAgaWYgKG1ldGFkYXRhLmlucHV0VG9rZW5zICE9PSB1bmRlZmluZWQpXG4gICAgICBlbmRBdHRyaWJ1dGVzWydpbnB1dF90b2tlbnMnXSA9IG1ldGFkYXRhLmlucHV0VG9rZW5zXG4gICAgaWYgKG1ldGFkYXRhLm91dHB1dFRva2VucyAhPT0gdW5kZWZpbmVkKVxuICAgICAgZW5kQXR0cmlidXRlc1snb3V0cHV0X3Rva2VucyddID0gbWV0YWRhdGEub3V0cHV0VG9rZW5zXG4gICAgaWYgKG1ldGFkYXRhLmNhY2hlUmVhZFRva2VucyAhPT0gdW5kZWZpbmVkKVxuICAgICAgZW5kQXR0cmlidXRlc1snY2FjaGVfcmVhZF90b2tlbnMnXSA9IG1ldGFkYXRhLmNhY2hlUmVhZFRva2Vuc1xuICAgIGlmIChtZXRhZGF0YS5jYWNoZUNyZWF0aW9uVG9rZW5zICE9PSB1bmRlZmluZWQpXG4gICAgICBlbmRBdHRyaWJ1dGVzWydjYWNoZV9jcmVhdGlvbl90b2tlbnMnXSA9IG1ldGFkYXRhLmNhY2hlQ3JlYXRpb25Ub2tlbnNcbiAgICBpZiAobWV0YWRhdGEuc3VjY2VzcyAhPT0gdW5kZWZpbmVkKVxuICAgICAgZW5kQXR0cmlidXRlc1snc3VjY2VzcyddID0gbWV0YWRhdGEuc3VjY2Vzc1xuICAgIGlmIChtZXRhZGF0YS5zdGF0dXNDb2RlICE9PSB1bmRlZmluZWQpXG4gICAgICBlbmRBdHRyaWJ1dGVzWydzdGF0dXNfY29kZSddID0gbWV0YWRhdGEuc3RhdHVzQ29kZVxuICAgIGlmIChtZXRhZGF0YS5lcnJvciAhPT0gdW5kZWZpbmVkKSBlbmRBdHRyaWJ1dGVzWydlcnJvciddID0gbWV0YWRhdGEuZXJyb3JcbiAgICBpZiAobWV0YWRhdGEuYXR0ZW1wdCAhPT0gdW5kZWZpbmVkKVxuICAgICAgZW5kQXR0cmlidXRlc1snYXR0ZW1wdCddID0gbWV0YWRhdGEuYXR0ZW1wdFxuICAgIGlmIChtZXRhZGF0YS5oYXNUb29sQ2FsbCAhPT0gdW5kZWZpbmVkKVxuICAgICAgZW5kQXR0cmlidXRlc1sncmVzcG9uc2UuaGFzX3Rvb2xfY2FsbCddID0gbWV0YWRhdGEuaGFzVG9vbENhbGxcbiAgICBpZiAobWV0YWRhdGEudHRmdE1zICE9PSB1bmRlZmluZWQpXG4gICAgICBlbmRBdHRyaWJ1dGVzWyd0dGZ0X21zJ10gPSBtZXRhZGF0YS50dGZ0TXNcblxuICAgIC8vIEFkZCBleHBlcmltZW50YWwgcmVzcG9uc2UgYXR0cmlidXRlcyAobW9kZWxfb3V0cHV0LCB0aGlua2luZ19vdXRwdXQpXG4gICAgYWRkQmV0YUxMTVJlc3BvbnNlQXR0cmlidXRlcyhlbmRBdHRyaWJ1dGVzLCBtZXRhZGF0YSlcbiAgfVxuXG4gIGxsbVNwYW5Db250ZXh0LnNwYW4uc2V0QXR0cmlidXRlcyhlbmRBdHRyaWJ1dGVzKVxuICBsbG1TcGFuQ29udGV4dC5zcGFuLmVuZCgpXG5cbiAgY29uc3Qgc3BhbklkID0gZ2V0U3BhbklkKGxsbVNwYW5Db250ZXh0LnNwYW4pXG4gIGFjdGl2ZVNwYW5zLmRlbGV0ZShzcGFuSWQpXG4gIHN0cm9uZ1NwYW5zLmRlbGV0ZShzcGFuSWQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFRvb2xTcGFuKFxuICB0b29sTmFtZTogc3RyaW5nLFxuICB0b29sQXR0cmlidXRlcz86IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4+LFxuICB0b29sSW5wdXQ/OiBzdHJpbmcsXG4pOiBTcGFuIHtcbiAgLy8gU3RhcnQgUGVyZmV0dG8gc3BhbiByZWdhcmRsZXNzIG9mIE9UZWwgdHJhY2luZyBzdGF0ZVxuICBjb25zdCBwZXJmZXR0b1NwYW5JZCA9IGlzUGVyZmV0dG9UcmFjaW5nRW5hYmxlZCgpXG4gICAgPyBzdGFydFRvb2xQZXJmZXR0b1NwYW4odG9vbE5hbWUsIHRvb2xBdHRyaWJ1dGVzKVxuICAgIDogdW5kZWZpbmVkXG5cbiAgaWYgKCFpc0FueVRyYWNpbmdFbmFibGVkKCkpIHtcbiAgICAvLyBTdGlsbCB0cmFjayBQZXJmZXR0byBzcGFuIGV2ZW4gaWYgT1RlbCBpcyBkaXNhYmxlZFxuICAgIGlmIChwZXJmZXR0b1NwYW5JZCkge1xuICAgICAgY29uc3QgZHVtbXlTcGFuID0gdHJhY2UuZ2V0QWN0aXZlU3BhbigpIHx8IGdldFRyYWNlcigpLnN0YXJ0U3BhbignZHVtbXknKVxuICAgICAgY29uc3Qgc3BhbklkID0gZ2V0U3BhbklkKGR1bW15U3BhbilcbiAgICAgIGNvbnN0IHNwYW5Db250ZXh0T2JqOiBTcGFuQ29udGV4dCA9IHtcbiAgICAgICAgc3BhbjogZHVtbXlTcGFuLFxuICAgICAgICBzdGFydFRpbWU6IERhdGUubm93KCksXG4gICAgICAgIGF0dHJpYnV0ZXM6IHsgJ3NwYW4udHlwZSc6ICd0b29sJywgdG9vbF9uYW1lOiB0b29sTmFtZSB9LFxuICAgICAgICBwZXJmZXR0b1NwYW5JZCxcbiAgICAgIH1cbiAgICAgIGFjdGl2ZVNwYW5zLnNldChzcGFuSWQsIG5ldyBXZWFrUmVmKHNwYW5Db250ZXh0T2JqKSlcbiAgICAgIHRvb2xDb250ZXh0LmVudGVyV2l0aChzcGFuQ29udGV4dE9iailcbiAgICAgIHJldHVybiBkdW1teVNwYW5cbiAgICB9XG4gICAgcmV0dXJuIHRyYWNlLmdldEFjdGl2ZVNwYW4oKSB8fCBnZXRUcmFjZXIoKS5zdGFydFNwYW4oJ2R1bW15JylcbiAgfVxuXG4gIGNvbnN0IHRyYWNlciA9IGdldFRyYWNlcigpXG4gIGNvbnN0IHBhcmVudFNwYW5DdHggPSBpbnRlcmFjdGlvbkNvbnRleHQuZ2V0U3RvcmUoKVxuXG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSBjcmVhdGVTcGFuQXR0cmlidXRlcygndG9vbCcsIHtcbiAgICB0b29sX25hbWU6IHRvb2xOYW1lLFxuICAgIC4uLnRvb2xBdHRyaWJ1dGVzLFxuICB9KVxuXG4gIGNvbnN0IGN0eCA9IHBhcmVudFNwYW5DdHhcbiAgICA/IHRyYWNlLnNldFNwYW4ob3RlbENvbnRleHQuYWN0aXZlKCksIHBhcmVudFNwYW5DdHguc3BhbilcbiAgICA6IG90ZWxDb250ZXh0LmFjdGl2ZSgpXG4gIGNvbnN0IHNwYW4gPSB0cmFjZXIuc3RhcnRTcGFuKCdjbGF1ZGVfY29kZS50b29sJywgeyBhdHRyaWJ1dGVzIH0sIGN0eClcblxuICAvLyBBZGQgZXhwZXJpbWVudGFsIHRvb2wgaW5wdXQgYXR0cmlidXRlc1xuICBpZiAodG9vbElucHV0KSB7XG4gICAgYWRkQmV0YVRvb2xJbnB1dEF0dHJpYnV0ZXMoc3BhbiwgdG9vbE5hbWUsIHRvb2xJbnB1dClcbiAgfVxuXG4gIGNvbnN0IHNwYW5JZCA9IGdldFNwYW5JZChzcGFuKVxuICBjb25zdCBzcGFuQ29udGV4dE9iajogU3BhbkNvbnRleHQgPSB7XG4gICAgc3BhbixcbiAgICBzdGFydFRpbWU6IERhdGUubm93KCksXG4gICAgYXR0cmlidXRlcyxcbiAgICBwZXJmZXR0b1NwYW5JZCxcbiAgfVxuICBhY3RpdmVTcGFucy5zZXQoc3BhbklkLCBuZXcgV2Vha1JlZihzcGFuQ29udGV4dE9iaikpXG5cbiAgdG9vbENvbnRleHQuZW50ZXJXaXRoKHNwYW5Db250ZXh0T2JqKVxuXG4gIHJldHVybiBzcGFuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFRvb2xCbG9ja2VkT25Vc2VyU3BhbigpOiBTcGFuIHtcbiAgLy8gU3RhcnQgUGVyZmV0dG8gc3BhbiByZWdhcmRsZXNzIG9mIE9UZWwgdHJhY2luZyBzdGF0ZVxuICBjb25zdCBwZXJmZXR0b1NwYW5JZCA9IGlzUGVyZmV0dG9UcmFjaW5nRW5hYmxlZCgpXG4gICAgPyBzdGFydFVzZXJJbnB1dFBlcmZldHRvU3BhbigndG9vbF9wZXJtaXNzaW9uJylcbiAgICA6IHVuZGVmaW5lZFxuXG4gIGlmICghaXNBbnlUcmFjaW5nRW5hYmxlZCgpKSB7XG4gICAgLy8gU3RpbGwgdHJhY2sgUGVyZmV0dG8gc3BhbiBldmVuIGlmIE9UZWwgaXMgZGlzYWJsZWRcbiAgICBpZiAocGVyZmV0dG9TcGFuSWQpIHtcbiAgICAgIGNvbnN0IGR1bW15U3BhbiA9IHRyYWNlLmdldEFjdGl2ZVNwYW4oKSB8fCBnZXRUcmFjZXIoKS5zdGFydFNwYW4oJ2R1bW15JylcbiAgICAgIGNvbnN0IHNwYW5JZCA9IGdldFNwYW5JZChkdW1teVNwYW4pXG4gICAgICBjb25zdCBzcGFuQ29udGV4dE9iajogU3BhbkNvbnRleHQgPSB7XG4gICAgICAgIHNwYW46IGR1bW15U3BhbixcbiAgICAgICAgc3RhcnRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7ICdzcGFuLnR5cGUnOiAndG9vbC5ibG9ja2VkX29uX3VzZXInIH0sXG4gICAgICAgIHBlcmZldHRvU3BhbklkLFxuICAgICAgfVxuICAgICAgYWN0aXZlU3BhbnMuc2V0KHNwYW5JZCwgbmV3IFdlYWtSZWYoc3BhbkNvbnRleHRPYmopKVxuICAgICAgc3Ryb25nU3BhbnMuc2V0KHNwYW5JZCwgc3BhbkNvbnRleHRPYmopXG4gICAgICByZXR1cm4gZHVtbXlTcGFuXG4gICAgfVxuICAgIHJldHVybiB0cmFjZS5nZXRBY3RpdmVTcGFuKCkgfHwgZ2V0VHJhY2VyKCkuc3RhcnRTcGFuKCdkdW1teScpXG4gIH1cblxuICBjb25zdCB0cmFjZXIgPSBnZXRUcmFjZXIoKVxuICBjb25zdCBwYXJlbnRTcGFuQ3R4ID0gdG9vbENvbnRleHQuZ2V0U3RvcmUoKVxuXG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSBjcmVhdGVTcGFuQXR0cmlidXRlcygndG9vbC5ibG9ja2VkX29uX3VzZXInKVxuXG4gIGNvbnN0IGN0eCA9IHBhcmVudFNwYW5DdHhcbiAgICA/IHRyYWNlLnNldFNwYW4ob3RlbENvbnRleHQuYWN0aXZlKCksIHBhcmVudFNwYW5DdHguc3BhbilcbiAgICA6IG90ZWxDb250ZXh0LmFjdGl2ZSgpXG4gIGNvbnN0IHNwYW4gPSB0cmFjZXIuc3RhcnRTcGFuKFxuICAgICdjbGF1ZGVfY29kZS50b29sLmJsb2NrZWRfb25fdXNlcicsXG4gICAgeyBhdHRyaWJ1dGVzIH0sXG4gICAgY3R4LFxuICApXG5cbiAgY29uc3Qgc3BhbklkID0gZ2V0U3BhbklkKHNwYW4pXG4gIGNvbnN0IHNwYW5Db250ZXh0T2JqOiBTcGFuQ29udGV4dCA9IHtcbiAgICBzcGFuLFxuICAgIHN0YXJ0VGltZTogRGF0ZS5ub3coKSxcbiAgICBhdHRyaWJ1dGVzLFxuICAgIHBlcmZldHRvU3BhbklkLFxuICB9XG4gIGFjdGl2ZVNwYW5zLnNldChzcGFuSWQsIG5ldyBXZWFrUmVmKHNwYW5Db250ZXh0T2JqKSlcbiAgc3Ryb25nU3BhbnMuc2V0KHNwYW5JZCwgc3BhbkNvbnRleHRPYmopXG5cbiAgcmV0dXJuIHNwYW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuZFRvb2xCbG9ja2VkT25Vc2VyU3BhbihcbiAgZGVjaXNpb24/OiBzdHJpbmcsXG4gIHNvdXJjZT86IHN0cmluZyxcbik6IHZvaWQge1xuICBjb25zdCBibG9ja2VkU3BhbkNvbnRleHQgPSBBcnJheS5mcm9tKGFjdGl2ZVNwYW5zLnZhbHVlcygpKVxuICAgIC5maW5kTGFzdChcbiAgICAgIHIgPT4gci5kZXJlZigpPy5hdHRyaWJ1dGVzWydzcGFuLnR5cGUnXSA9PT0gJ3Rvb2wuYmxvY2tlZF9vbl91c2VyJyxcbiAgICApXG4gICAgPy5kZXJlZigpXG5cbiAgaWYgKCFibG9ja2VkU3BhbkNvbnRleHQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIEVuZCBQZXJmZXR0byBzcGFuXG4gIGlmIChibG9ja2VkU3BhbkNvbnRleHQucGVyZmV0dG9TcGFuSWQpIHtcbiAgICBlbmRVc2VySW5wdXRQZXJmZXR0b1NwYW4oYmxvY2tlZFNwYW5Db250ZXh0LnBlcmZldHRvU3BhbklkLCB7XG4gICAgICBkZWNpc2lvbixcbiAgICAgIHNvdXJjZSxcbiAgICB9KVxuICB9XG5cbiAgaWYgKCFpc0FueVRyYWNpbmdFbmFibGVkKCkpIHtcbiAgICBjb25zdCBzcGFuSWQgPSBnZXRTcGFuSWQoYmxvY2tlZFNwYW5Db250ZXh0LnNwYW4pXG4gICAgYWN0aXZlU3BhbnMuZGVsZXRlKHNwYW5JZClcbiAgICBzdHJvbmdTcGFucy5kZWxldGUoc3BhbklkKVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgZHVyYXRpb24gPSBEYXRlLm5vdygpIC0gYmxvY2tlZFNwYW5Db250ZXh0LnN0YXJ0VGltZVxuICBjb25zdCBhdHRyaWJ1dGVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPiA9IHtcbiAgICBkdXJhdGlvbl9tczogZHVyYXRpb24sXG4gIH1cblxuICBpZiAoZGVjaXNpb24pIHtcbiAgICBhdHRyaWJ1dGVzWydkZWNpc2lvbiddID0gZGVjaXNpb25cbiAgfVxuICBpZiAoc291cmNlKSB7XG4gICAgYXR0cmlidXRlc1snc291cmNlJ10gPSBzb3VyY2VcbiAgfVxuXG4gIGJsb2NrZWRTcGFuQ29udGV4dC5zcGFuLnNldEF0dHJpYnV0ZXMoYXR0cmlidXRlcylcbiAgYmxvY2tlZFNwYW5Db250ZXh0LnNwYW4uZW5kKClcblxuICBjb25zdCBzcGFuSWQgPSBnZXRTcGFuSWQoYmxvY2tlZFNwYW5Db250ZXh0LnNwYW4pXG4gIGFjdGl2ZVNwYW5zLmRlbGV0ZShzcGFuSWQpXG4gIHN0cm9uZ1NwYW5zLmRlbGV0ZShzcGFuSWQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFRvb2xFeGVjdXRpb25TcGFuKCk6IFNwYW4ge1xuICBpZiAoIWlzQW55VHJhY2luZ0VuYWJsZWQoKSkge1xuICAgIHJldHVybiB0cmFjZS5nZXRBY3RpdmVTcGFuKCkgfHwgZ2V0VHJhY2VyKCkuc3RhcnRTcGFuKCdkdW1teScpXG4gIH1cblxuICBjb25zdCB0cmFjZXIgPSBnZXRUcmFjZXIoKVxuICBjb25zdCBwYXJlbnRTcGFuQ3R4ID0gdG9vbENvbnRleHQuZ2V0U3RvcmUoKVxuXG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSBjcmVhdGVTcGFuQXR0cmlidXRlcygndG9vbC5leGVjdXRpb24nKVxuXG4gIGNvbnN0IGN0eCA9IHBhcmVudFNwYW5DdHhcbiAgICA/IHRyYWNlLnNldFNwYW4ob3RlbENvbnRleHQuYWN0aXZlKCksIHBhcmVudFNwYW5DdHguc3BhbilcbiAgICA6IG90ZWxDb250ZXh0LmFjdGl2ZSgpXG4gIGNvbnN0IHNwYW4gPSB0cmFjZXIuc3RhcnRTcGFuKFxuICAgICdjbGF1ZGVfY29kZS50b29sLmV4ZWN1dGlvbicsXG4gICAgeyBhdHRyaWJ1dGVzIH0sXG4gICAgY3R4LFxuICApXG5cbiAgY29uc3Qgc3BhbklkID0gZ2V0U3BhbklkKHNwYW4pXG4gIGNvbnN0IHNwYW5Db250ZXh0T2JqOiBTcGFuQ29udGV4dCA9IHtcbiAgICBzcGFuLFxuICAgIHN0YXJ0VGltZTogRGF0ZS5ub3coKSxcbiAgICBhdHRyaWJ1dGVzLFxuICB9XG4gIGFjdGl2ZVNwYW5zLnNldChzcGFuSWQsIG5ldyBXZWFrUmVmKHNwYW5Db250ZXh0T2JqKSlcbiAgc3Ryb25nU3BhbnMuc2V0KHNwYW5JZCwgc3BhbkNvbnRleHRPYmopXG5cbiAgcmV0dXJuIHNwYW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuZFRvb2xFeGVjdXRpb25TcGFuKG1ldGFkYXRhPzoge1xuICBzdWNjZXNzPzogYm9vbGVhblxuICBlcnJvcj86IHN0cmluZ1xufSk6IHZvaWQge1xuICBpZiAoIWlzQW55VHJhY2luZ0VuYWJsZWQoKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgZXhlY3V0aW9uU3BhbkNvbnRleHQgPSBBcnJheS5mcm9tKGFjdGl2ZVNwYW5zLnZhbHVlcygpKVxuICAgIC5maW5kTGFzdChyID0+IHIuZGVyZWYoKT8uYXR0cmlidXRlc1snc3Bhbi50eXBlJ10gPT09ICd0b29sLmV4ZWN1dGlvbicpXG4gICAgPy5kZXJlZigpXG5cbiAgaWYgKCFleGVjdXRpb25TcGFuQ29udGV4dCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgZHVyYXRpb24gPSBEYXRlLm5vdygpIC0gZXhlY3V0aW9uU3BhbkNvbnRleHQuc3RhcnRUaW1lXG4gIGNvbnN0IGF0dHJpYnV0ZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4+ID0ge1xuICAgIGR1cmF0aW9uX21zOiBkdXJhdGlvbixcbiAgfVxuXG4gIGlmIChtZXRhZGF0YSkge1xuICAgIGlmIChtZXRhZGF0YS5zdWNjZXNzICE9PSB1bmRlZmluZWQpIGF0dHJpYnV0ZXNbJ3N1Y2Nlc3MnXSA9IG1ldGFkYXRhLnN1Y2Nlc3NcbiAgICBpZiAobWV0YWRhdGEuZXJyb3IgIT09IHVuZGVmaW5lZCkgYXR0cmlidXRlc1snZXJyb3InXSA9IG1ldGFkYXRhLmVycm9yXG4gIH1cblxuICBleGVjdXRpb25TcGFuQ29udGV4dC5zcGFuLnNldEF0dHJpYnV0ZXMoYXR0cmlidXRlcylcbiAgZXhlY3V0aW9uU3BhbkNvbnRleHQuc3Bhbi5lbmQoKVxuXG4gIGNvbnN0IHNwYW5JZCA9IGdldFNwYW5JZChleGVjdXRpb25TcGFuQ29udGV4dC5zcGFuKVxuICBhY3RpdmVTcGFucy5kZWxldGUoc3BhbklkKVxuICBzdHJvbmdTcGFucy5kZWxldGUoc3BhbklkKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5kVG9vbFNwYW4odG9vbFJlc3VsdD86IHN0cmluZywgcmVzdWx0VG9rZW5zPzogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHRvb2xTcGFuQ29udGV4dCA9IHRvb2xDb250ZXh0LmdldFN0b3JlKClcblxuICBpZiAoIXRvb2xTcGFuQ29udGV4dCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gRW5kIFBlcmZldHRvIHNwYW5cbiAgaWYgKHRvb2xTcGFuQ29udGV4dC5wZXJmZXR0b1NwYW5JZCkge1xuICAgIGVuZFRvb2xQZXJmZXR0b1NwYW4odG9vbFNwYW5Db250ZXh0LnBlcmZldHRvU3BhbklkLCB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgcmVzdWx0VG9rZW5zLFxuICAgIH0pXG4gIH1cblxuICBpZiAoIWlzQW55VHJhY2luZ0VuYWJsZWQoKSkge1xuICAgIGNvbnN0IHNwYW5JZCA9IGdldFNwYW5JZCh0b29sU3BhbkNvbnRleHQuc3BhbilcbiAgICBhY3RpdmVTcGFucy5kZWxldGUoc3BhbklkKVxuICAgIC8vIFNhbWUgcmVhc29uaW5nIGFzIGludGVyYWN0aW9uQ29udGV4dCBhYm92ZTogY2xlYXIgc28gc3Vic2VxdWVudCBhc3luY1xuICAgIC8vIHdvcmsgZG9lc24ndCBob2xkIGEgc3RhbGUgcmVmZXJlbmNlIHRvIHRoZSBlbmRlZCB0b29sIHNwYW4uXG4gICAgdG9vbENvbnRleHQuZW50ZXJXaXRoKHVuZGVmaW5lZClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGR1cmF0aW9uID0gRGF0ZS5ub3coKSAtIHRvb2xTcGFuQ29udGV4dC5zdGFydFRpbWVcbiAgY29uc3QgZW5kQXR0cmlidXRlczogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbj4gPSB7XG4gICAgZHVyYXRpb25fbXM6IGR1cmF0aW9uLFxuICB9XG5cbiAgLy8gQWRkIGV4cGVyaW1lbnRhbCB0b29sIHJlc3VsdCBhdHRyaWJ1dGVzIChuZXdfY29udGV4dClcbiAgaWYgKHRvb2xSZXN1bHQpIHtcbiAgICBjb25zdCB0b29sTmFtZSA9IHRvb2xTcGFuQ29udGV4dC5hdHRyaWJ1dGVzWyd0b29sX25hbWUnXSB8fCAndW5rbm93bidcbiAgICBhZGRCZXRhVG9vbFJlc3VsdEF0dHJpYnV0ZXMoZW5kQXR0cmlidXRlcywgdG9vbE5hbWUsIHRvb2xSZXN1bHQpXG4gIH1cblxuICBpZiAocmVzdWx0VG9rZW5zICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbmRBdHRyaWJ1dGVzWydyZXN1bHRfdG9rZW5zJ10gPSByZXN1bHRUb2tlbnNcbiAgfVxuXG4gIHRvb2xTcGFuQ29udGV4dC5zcGFuLnNldEF0dHJpYnV0ZXMoZW5kQXR0cmlidXRlcylcbiAgdG9vbFNwYW5Db250ZXh0LnNwYW4uZW5kKClcblxuICBjb25zdCBzcGFuSWQgPSBnZXRTcGFuSWQodG9vbFNwYW5Db250ZXh0LnNwYW4pXG4gIGFjdGl2ZVNwYW5zLmRlbGV0ZShzcGFuSWQpXG4gIHRvb2xDb250ZXh0LmVudGVyV2l0aCh1bmRlZmluZWQpXG59XG5cbmZ1bmN0aW9uIGlzVG9vbENvbnRlbnRMb2dnaW5nRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgcmV0dXJuIGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52Lk9URUxfTE9HX1RPT0xfQ09OVEVOVClcbn1cblxuLyoqXG4gKiBBZGQgYSBzcGFuIGV2ZW50IHdpdGggdG9vbCBjb250ZW50L291dHB1dCBkYXRhLlxuICogT25seSBsb2dzIGlmIE9URUxfTE9HX1RPT0xfQ09OVEVOVD0xIGlzIHNldC5cbiAqIFRydW5jYXRlcyBjb250ZW50IGlmIGl0IGV4Y2VlZHMgTUFYX0NPTlRFTlRfU0laRS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvb2xDb250ZW50RXZlbnQoXG4gIGV2ZW50TmFtZTogc3RyaW5nLFxuICBhdHRyaWJ1dGVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPixcbik6IHZvaWQge1xuICBpZiAoIWlzQW55VHJhY2luZ0VuYWJsZWQoKSB8fCAhaXNUb29sQ29udGVudExvZ2dpbmdFbmFibGVkKCkpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGN1cnJlbnRTcGFuQ3R4ID0gdG9vbENvbnRleHQuZ2V0U3RvcmUoKVxuICBpZiAoIWN1cnJlbnRTcGFuQ3R4KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBUcnVuY2F0ZSBzdHJpbmcgYXR0cmlidXRlcyB0aGF0IG1pZ2h0IGJlIGxhcmdlXG4gIGNvbnN0IHByb2Nlc3NlZEF0dHJpYnV0ZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4+ID0ge31cbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgeyBjb250ZW50LCB0cnVuY2F0ZWQgfSA9IHRydW5jYXRlQ29udGVudCh2YWx1ZSlcbiAgICAgIHByb2Nlc3NlZEF0dHJpYnV0ZXNba2V5XSA9IGNvbnRlbnRcbiAgICAgIGlmICh0cnVuY2F0ZWQpIHtcbiAgICAgICAgcHJvY2Vzc2VkQXR0cmlidXRlc1tgJHtrZXl9X3RydW5jYXRlZGBdID0gdHJ1ZVxuICAgICAgICBwcm9jZXNzZWRBdHRyaWJ1dGVzW2Ake2tleX1fb3JpZ2luYWxfbGVuZ3RoYF0gPSB2YWx1ZS5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcHJvY2Vzc2VkQXR0cmlidXRlc1trZXldID0gdmFsdWVcbiAgICB9XG4gIH1cblxuICBjdXJyZW50U3BhbkN0eC5zcGFuLmFkZEV2ZW50KGV2ZW50TmFtZSwgcHJvY2Vzc2VkQXR0cmlidXRlcylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRTcGFuKCk6IFNwYW4gfCBudWxsIHtcbiAgaWYgKCFpc0FueVRyYWNpbmdFbmFibGVkKCkpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICB0b29sQ29udGV4dC5nZXRTdG9yZSgpPy5zcGFuID8/IGludGVyYWN0aW9uQ29udGV4dC5nZXRTdG9yZSgpPy5zcGFuID8/IG51bGxcbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZUluU3BhbjxUPihcbiAgc3Bhbk5hbWU6IHN0cmluZyxcbiAgZm46IChzcGFuOiBTcGFuKSA9PiBQcm9taXNlPFQ+LFxuICBhdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbj4sXG4pOiBQcm9taXNlPFQ+IHtcbiAgaWYgKCFpc0FueVRyYWNpbmdFbmFibGVkKCkpIHtcbiAgICByZXR1cm4gZm4odHJhY2UuZ2V0QWN0aXZlU3BhbigpIHx8IGdldFRyYWNlcigpLnN0YXJ0U3BhbignZHVtbXknKSlcbiAgfVxuXG4gIGNvbnN0IHRyYWNlciA9IGdldFRyYWNlcigpXG4gIGNvbnN0IHBhcmVudFNwYW5DdHggPSB0b29sQ29udGV4dC5nZXRTdG9yZSgpID8/IGludGVyYWN0aW9uQ29udGV4dC5nZXRTdG9yZSgpXG5cbiAgY29uc3QgZmluYWxBdHRyaWJ1dGVzID0gY3JlYXRlU3BhbkF0dHJpYnV0ZXMoJ3Rvb2wnLCB7XG4gICAgLi4uYXR0cmlidXRlcyxcbiAgfSlcblxuICBjb25zdCBjdHggPSBwYXJlbnRTcGFuQ3R4XG4gICAgPyB0cmFjZS5zZXRTcGFuKG90ZWxDb250ZXh0LmFjdGl2ZSgpLCBwYXJlbnRTcGFuQ3R4LnNwYW4pXG4gICAgOiBvdGVsQ29udGV4dC5hY3RpdmUoKVxuICBjb25zdCBzcGFuID0gdHJhY2VyLnN0YXJ0U3BhbihzcGFuTmFtZSwgeyBhdHRyaWJ1dGVzOiBmaW5hbEF0dHJpYnV0ZXMgfSwgY3R4KVxuXG4gIGNvbnN0IHNwYW5JZCA9IGdldFNwYW5JZChzcGFuKVxuICBjb25zdCBzcGFuQ29udGV4dE9iajogU3BhbkNvbnRleHQgPSB7XG4gICAgc3BhbixcbiAgICBzdGFydFRpbWU6IERhdGUubm93KCksXG4gICAgYXR0cmlidXRlczogZmluYWxBdHRyaWJ1dGVzLFxuICB9XG4gIGFjdGl2ZVNwYW5zLnNldChzcGFuSWQsIG5ldyBXZWFrUmVmKHNwYW5Db250ZXh0T2JqKSlcbiAgc3Ryb25nU3BhbnMuc2V0KHNwYW5JZCwgc3BhbkNvbnRleHRPYmopXG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmbihzcGFuKVxuICAgIHNwYW4uZW5kKClcbiAgICBhY3RpdmVTcGFucy5kZWxldGUoc3BhbklkKVxuICAgIHN0cm9uZ1NwYW5zLmRlbGV0ZShzcGFuSWQpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICBzcGFuLnJlY29yZEV4Y2VwdGlvbihlcnJvcilcbiAgICB9XG4gICAgc3Bhbi5lbmQoKVxuICAgIGFjdGl2ZVNwYW5zLmRlbGV0ZShzcGFuSWQpXG4gICAgc3Ryb25nU3BhbnMuZGVsZXRlKHNwYW5JZClcbiAgICB0aHJvdyBlcnJvclxuICB9XG59XG5cbi8qKlxuICogU3RhcnQgYSBob29rIGV4ZWN1dGlvbiBzcGFuLlxuICogT25seSBjcmVhdGVzIGEgc3BhbiB3aGVuIGJldGEgdHJhY2luZyBpcyBlbmFibGVkLlxuICogQHBhcmFtIGhvb2tFdmVudCBUaGUgaG9vayBldmVudCB0eXBlIChlLmcuLCAnUHJlVG9vbFVzZScsICdQb3N0VG9vbFVzZScpXG4gKiBAcGFyYW0gaG9va05hbWUgVGhlIGZ1bGwgaG9vayBuYW1lIChlLmcuLCAnUHJlVG9vbFVzZTpXcml0ZScpXG4gKiBAcGFyYW0gbnVtSG9va3MgVGhlIG51bWJlciBvZiBob29rcyBiZWluZyBleGVjdXRlZFxuICogQHBhcmFtIGhvb2tEZWZpbml0aW9ucyBKU09OIHN0cmluZyBvZiBob29rIGRlZmluaXRpb25zIGZvciB0cmFjaW5nXG4gKiBAcmV0dXJucyBUaGUgc3BhbiAob3IgYSBkdW1teSBzcGFuIGlmIHRyYWNpbmcgaXMgZGlzYWJsZWQpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydEhvb2tTcGFuKFxuICBob29rRXZlbnQ6IHN0cmluZyxcbiAgaG9va05hbWU6IHN0cmluZyxcbiAgbnVtSG9va3M6IG51bWJlcixcbiAgaG9va0RlZmluaXRpb25zOiBzdHJpbmcsXG4pOiBTcGFuIHtcbiAgaWYgKCFpc0JldGFUcmFjaW5nRW5hYmxlZCgpKSB7XG4gICAgcmV0dXJuIHRyYWNlLmdldEFjdGl2ZVNwYW4oKSB8fCBnZXRUcmFjZXIoKS5zdGFydFNwYW4oJ2R1bW15JylcbiAgfVxuXG4gIGNvbnN0IHRyYWNlciA9IGdldFRyYWNlcigpXG4gIGNvbnN0IHBhcmVudFNwYW5DdHggPSB0b29sQ29udGV4dC5nZXRTdG9yZSgpID8/IGludGVyYWN0aW9uQ29udGV4dC5nZXRTdG9yZSgpXG5cbiAgY29uc3QgYXR0cmlidXRlcyA9IGNyZWF0ZVNwYW5BdHRyaWJ1dGVzKCdob29rJywge1xuICAgIGhvb2tfZXZlbnQ6IGhvb2tFdmVudCxcbiAgICBob29rX25hbWU6IGhvb2tOYW1lLFxuICAgIG51bV9ob29rczogbnVtSG9va3MsXG4gICAgaG9va19kZWZpbml0aW9uczogaG9va0RlZmluaXRpb25zLFxuICB9KVxuXG4gIGNvbnN0IGN0eCA9IHBhcmVudFNwYW5DdHhcbiAgICA/IHRyYWNlLnNldFNwYW4ob3RlbENvbnRleHQuYWN0aXZlKCksIHBhcmVudFNwYW5DdHguc3BhbilcbiAgICA6IG90ZWxDb250ZXh0LmFjdGl2ZSgpXG4gIGNvbnN0IHNwYW4gPSB0cmFjZXIuc3RhcnRTcGFuKCdjbGF1ZGVfY29kZS5ob29rJywgeyBhdHRyaWJ1dGVzIH0sIGN0eClcblxuICBjb25zdCBzcGFuSWQgPSBnZXRTcGFuSWQoc3BhbilcbiAgY29uc3Qgc3BhbkNvbnRleHRPYmo6IFNwYW5Db250ZXh0ID0ge1xuICAgIHNwYW4sXG4gICAgc3RhcnRUaW1lOiBEYXRlLm5vdygpLFxuICAgIGF0dHJpYnV0ZXMsXG4gIH1cbiAgYWN0aXZlU3BhbnMuc2V0KHNwYW5JZCwgbmV3IFdlYWtSZWYoc3BhbkNvbnRleHRPYmopKVxuICBzdHJvbmdTcGFucy5zZXQoc3BhbklkLCBzcGFuQ29udGV4dE9iailcblxuICByZXR1cm4gc3BhblxufVxuXG4vKipcbiAqIEVuZCBhIGhvb2sgZXhlY3V0aW9uIHNwYW4gd2l0aCBvdXRjb21lIG1ldGFkYXRhLlxuICogT25seSBkb2VzIHdvcmsgd2hlbiBiZXRhIHRyYWNpbmcgaXMgZW5hYmxlZC5cbiAqIEBwYXJhbSBzcGFuIFRoZSBzcGFuIHRvIGVuZCAocmV0dXJuZWQgZnJvbSBzdGFydEhvb2tTcGFuKVxuICogQHBhcmFtIG1ldGFkYXRhIFRoZSBvdXRjb21lIG1ldGFkYXRhIGZvciB0aGUgaG9vayBleGVjdXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuZEhvb2tTcGFuKFxuICBzcGFuOiBTcGFuLFxuICBtZXRhZGF0YT86IHtcbiAgICBudW1TdWNjZXNzPzogbnVtYmVyXG4gICAgbnVtQmxvY2tpbmc/OiBudW1iZXJcbiAgICBudW1Ob25CbG9ja2luZ0Vycm9yPzogbnVtYmVyXG4gICAgbnVtQ2FuY2VsbGVkPzogbnVtYmVyXG4gIH0sXG4pOiB2b2lkIHtcbiAgaWYgKCFpc0JldGFUcmFjaW5nRW5hYmxlZCgpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBzcGFuSWQgPSBnZXRTcGFuSWQoc3BhbilcbiAgY29uc3Qgc3BhbkNvbnRleHQgPSBhY3RpdmVTcGFucy5nZXQoc3BhbklkKT8uZGVyZWYoKVxuXG4gIGlmICghc3BhbkNvbnRleHQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGR1cmF0aW9uID0gRGF0ZS5ub3coKSAtIHNwYW5Db250ZXh0LnN0YXJ0VGltZVxuICBjb25zdCBlbmRBdHRyaWJ1dGVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPiA9IHtcbiAgICBkdXJhdGlvbl9tczogZHVyYXRpb24sXG4gIH1cblxuICBpZiAobWV0YWRhdGEpIHtcbiAgICBpZiAobWV0YWRhdGEubnVtU3VjY2VzcyAhPT0gdW5kZWZpbmVkKVxuICAgICAgZW5kQXR0cmlidXRlc1snbnVtX3N1Y2Nlc3MnXSA9IG1ldGFkYXRhLm51bVN1Y2Nlc3NcbiAgICBpZiAobWV0YWRhdGEubnVtQmxvY2tpbmcgIT09IHVuZGVmaW5lZClcbiAgICAgIGVuZEF0dHJpYnV0ZXNbJ251bV9ibG9ja2luZyddID0gbWV0YWRhdGEubnVtQmxvY2tpbmdcbiAgICBpZiAobWV0YWRhdGEubnVtTm9uQmxvY2tpbmdFcnJvciAhPT0gdW5kZWZpbmVkKVxuICAgICAgZW5kQXR0cmlidXRlc1snbnVtX25vbl9ibG9ja2luZ19lcnJvciddID0gbWV0YWRhdGEubnVtTm9uQmxvY2tpbmdFcnJvclxuICAgIGlmIChtZXRhZGF0YS5udW1DYW5jZWxsZWQgIT09IHVuZGVmaW5lZClcbiAgICAgIGVuZEF0dHJpYnV0ZXNbJ251bV9jYW5jZWxsZWQnXSA9IG1ldGFkYXRhLm51bUNhbmNlbGxlZFxuICB9XG5cbiAgc3BhbkNvbnRleHQuc3Bhbi5zZXRBdHRyaWJ1dGVzKGVuZEF0dHJpYnV0ZXMpXG4gIHNwYW5Db250ZXh0LnNwYW4uZW5kKClcbiAgYWN0aXZlU3BhbnMuZGVsZXRlKHNwYW5JZClcbiAgc3Ryb25nU3BhbnMuZGVsZXRlKHNwYW5JZClcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUcsY0FBYyxJQUFJLElBQ3RELFFBQVksT0FBTztBQUN2QixRQUFNLE9BQU8sT0FBTyxVQUFVLG9CQUFvQixFQUFFLFdBQVcsR0FBRyxHQUFHO0FBRXJFLFFBQU0sU0FBUyxVQUFVLElBQUk7QUFDN0IsUUFBTSxpQkFBOEI7QUFBQSxJQUNsQztBQUFBLElBQ0EsV0FBVyxLQUFLLElBQUk7QUFBQSxJQUNwQjtBQUFBLEVBQ0Y7QUFDQSxjQUFZLElBQUksUUFBUSxJQUFJLFFBQVEsY0FBYyxDQUFDO0FBQ25ELGNBQVksSUFBSSxRQUFRLGNBQWM7QUFFdEMsU0FBTztBQUNUO0FBUU8sU0FBUyxZQUNkLE1BQ0EsVUFNTTtBQUNOLE1BQUksQ0FBQyxxQkFBcUIsR0FBRztBQUMzQjtBQUFBLEVBQ0Y7QUFFQSxRQUFNLFNBQVMsVUFBVSxJQUFJO0FBQzdCLFFBQU0sY0FBYyxZQUFZLElBQUksTUFBTSxHQUFHLE1BQU07QUFFbkQsTUFBSSxDQUFDLGFBQWE7QUFDaEI7QUFBQSxFQUNGO0FBRUEsUUFBTSxXQUFXLEtBQUssSUFBSSxJQUFJLFlBQVk7QUFDMUMsUUFBTSxnQkFBMkQ7QUFBQSxJQUMvRCxhQUFhO0FBQUEsRUFDZjtBQUVBLE1BQUksVUFBVTtBQUNaLFFBQUksU0FBUyxlQUFlO0FBQzFCLG9CQUFjLGFBQWEsSUFBSSxTQUFTO0FBQzFDLFFBQUksU0FBUyxnQkFBZ0I7QUFDM0Isb0JBQWMsY0FBYyxJQUFJLFNBQVM7QUFDM0MsUUFBSSxTQUFTLHdCQUF3QjtBQUNuQyxvQkFBYyx3QkFBd0IsSUFBSSxTQUFTO0FBQ3JELFFBQUksU0FBUyxpQkFBaUI7QUFDNUIsb0JBQWMsZUFBZSxJQUFJLFNBQVM7QUFBQSxFQUM5QztBQUVBLGNBQVksS0FBSyxjQUFjLGFBQWE7QUFDNUMsY0FBWSxLQUFLLElBQUk7QUFDckIsY0FBWSxPQUFPLE1BQU07QUFDekIsY0FBWSxPQUFPLE1BQU07QUFDM0I7QUE5NUJBLElBb0VNLG9CQUNBLGFBQ0EsYUFJQSxhQUNGLHFCQUNBLHlCQUVFO0FBOUVOO0FBQUE7QUFZQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFVQTtBQXVDQSxJQUFNLHFCQUFxQixJQUFJLGtCQUEyQztBQUMxRSxJQUFNLGNBQWMsSUFBSSxrQkFBMkM7QUFDbkUsSUFBTSxjQUFjLG9CQUFJLElBQWtDO0FBSTFELElBQU0sY0FBYyxvQkFBSSxJQUF5QjtBQUNqRCxJQUFJLHNCQUFzQjtBQUMxQixJQUFJLDBCQUEwQjtBQUU5QixJQUFNLGNBQWMsS0FBSyxLQUFLO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFsiY29udGV4dCIsICJzcGFuSWQiLCAic3BhbkNvbnRleHRPYmoiLCAiaXNVc2VyUHJvbXB0TG9nZ2luZ0VuYWJsZWQiXQp9Cg==
