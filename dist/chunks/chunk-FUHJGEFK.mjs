#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  MODEL_COSTS,
  getAPIProvider,
  getCanonicalName,
  getEventMetadata,
  getOrCreateUserID,
  init_config,
  init_config2,
  init_metadata,
  init_model,
  init_modelCost,
  init_providers,
  isAnalyticsDisabled
} from "./chunk-NKGQGSP5.mjs";
import {
  axios_default,
  init_axios
} from "./chunk-J6MJ6UVK.mjs";
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import {
  init_memoize,
  memoize_default
} from "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/services/analytics/datadog.ts
import { createHash } from "crypto";
function camelToSnakeCase(str) {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}
async function flushLogs() {
  if (logBatch.length === 0) return;
  const logsToSend = logBatch;
  logBatch = [];
  try {
    await axios_default.post(DATADOG_LOGS_ENDPOINT, logsToSend, {
      headers: {
        "Content-Type": "application/json",
        "DD-API-KEY": DATADOG_CLIENT_TOKEN
      },
      timeout: NETWORK_TIMEOUT_MS
    });
  } catch (error) {
    logError(error);
  }
}
function scheduleFlush() {
  if (flushTimer) return;
  flushTimer = setTimeout(() => {
    flushTimer = null;
    void flushLogs();
  }, getFlushIntervalMs()).unref();
}
async function shutdownDatadog() {
  if (flushTimer) {
    clearTimeout(flushTimer);
    flushTimer = null;
  }
  await flushLogs();
}
async function trackDatadogEvent(eventName, properties) {
  if (process.env.NODE_ENV !== "production") {
    return;
  }
  if (getAPIProvider() !== "firstParty") {
    return;
  }
  let initialized = datadogInitialized;
  if (initialized === null) {
    initialized = await initializeDatadog();
  }
  if (!initialized || !DATADOG_ALLOWED_EVENTS.has(eventName)) {
    return;
  }
  try {
    const metadata = await getEventMetadata({
      model: properties.model,
      betas: properties.betas
    });
    const { envContext, ...restMetadata } = metadata;
    const allData = {
      ...restMetadata,
      ...envContext,
      ...properties,
      userBucket: getUserBucket()
    };
    if (typeof allData.toolName === "string" && allData.toolName.startsWith("mcp__")) {
      allData.toolName = "mcp";
    }
    if (process.env.USER_TYPE !== "ant" && typeof allData.model === "string") {
      const shortName = getCanonicalName(allData.model.replace(/\[1m]$/i, ""));
      allData.model = shortName in MODEL_COSTS ? shortName : "other";
    }
    if (typeof allData.version === "string") {
      allData.version = allData.version.replace(
        /^(\d+\.\d+\.\d+-dev\.\d{8})\.t\d+\.sha[a-f0-9]+$/,
        "$1"
      );
    }
    if (allData.status !== void 0 && allData.status !== null) {
      const statusCode = String(allData.status);
      allData.http_status = statusCode;
      const firstDigit = statusCode.charAt(0);
      if (firstDigit >= "1" && firstDigit <= "5") {
        allData.http_status_range = `${firstDigit}xx`;
      }
      delete allData.status;
    }
    const allDataRecord = allData;
    const tags = [
      `event:${eventName}`,
      ...TAG_FIELDS.filter(
        (field) => allDataRecord[field] !== void 0 && allDataRecord[field] !== null
      ).map((field) => `${camelToSnakeCase(field)}:${allDataRecord[field]}`)
    ];
    const log = {
      ddsource: "nodejs",
      ddtags: tags.join(","),
      message: eventName,
      service: "claude-code",
      hostname: "claude-code",
      env: process.env.USER_TYPE
    };
    for (const [key, value] of Object.entries(allData)) {
      if (value !== void 0 && value !== null) {
        log[camelToSnakeCase(key)] = value;
      }
    }
    logBatch.push(log);
    if (logBatch.length >= MAX_BATCH_SIZE) {
      if (flushTimer) {
        clearTimeout(flushTimer);
        flushTimer = null;
      }
      void flushLogs();
    } else {
      scheduleFlush();
    }
  } catch (error) {
    logError(error);
  }
}
function getFlushIntervalMs() {
  return parseInt(process.env.CLAUDE_CODE_DATADOG_FLUSH_INTERVAL_MS || "", 10) || DEFAULT_FLUSH_INTERVAL_MS;
}
var DATADOG_LOGS_ENDPOINT, DATADOG_CLIENT_TOKEN, DEFAULT_FLUSH_INTERVAL_MS, MAX_BATCH_SIZE, NETWORK_TIMEOUT_MS, DATADOG_ALLOWED_EVENTS, TAG_FIELDS, logBatch, flushTimer, datadogInitialized, initializeDatadog, NUM_USER_BUCKETS, getUserBucket;
var init_datadog = __esm({
  "src/services/analytics/datadog.ts"() {
    init_axios();
    init_memoize();
    init_config2();
    init_log();
    init_model();
    init_providers();
    init_modelCost();
    init_config();
    init_metadata();
    DATADOG_LOGS_ENDPOINT = "https://http-intake.logs.us5.datadoghq.com/api/v2/logs";
    DATADOG_CLIENT_TOKEN = "pubbbf48e6d78dae54bceaa4acf463299bf";
    DEFAULT_FLUSH_INTERVAL_MS = 15e3;
    MAX_BATCH_SIZE = 100;
    NETWORK_TIMEOUT_MS = 5e3;
    DATADOG_ALLOWED_EVENTS = /* @__PURE__ */ new Set([
      "chrome_bridge_connection_succeeded",
      "chrome_bridge_connection_failed",
      "chrome_bridge_disconnected",
      "chrome_bridge_tool_call_completed",
      "chrome_bridge_tool_call_error",
      "chrome_bridge_tool_call_started",
      "chrome_bridge_tool_call_timeout",
      "tengu_api_error",
      "tengu_api_success",
      "tengu_brief_mode_enabled",
      "tengu_brief_mode_toggled",
      "tengu_brief_send",
      "tengu_cancel",
      "tengu_compact_failed",
      "tengu_exit",
      "tengu_flicker",
      "tengu_init",
      "tengu_model_fallback_triggered",
      "tengu_oauth_error",
      "tengu_oauth_success",
      "tengu_oauth_token_refresh_failure",
      "tengu_oauth_token_refresh_success",
      "tengu_oauth_token_refresh_lock_acquiring",
      "tengu_oauth_token_refresh_lock_acquired",
      "tengu_oauth_token_refresh_starting",
      "tengu_oauth_token_refresh_completed",
      "tengu_oauth_token_refresh_lock_releasing",
      "tengu_oauth_token_refresh_lock_released",
      "tengu_query_error",
      "tengu_session_file_read",
      "tengu_started",
      "tengu_tool_use_error",
      "tengu_tool_use_granted_in_prompt_permanent",
      "tengu_tool_use_granted_in_prompt_temporary",
      "tengu_tool_use_rejected_in_prompt",
      "tengu_tool_use_success",
      "tengu_uncaught_exception",
      "tengu_unhandled_rejection",
      "tengu_voice_recording_started",
      "tengu_voice_toggled",
      "tengu_team_mem_sync_pull",
      "tengu_team_mem_sync_push",
      "tengu_team_mem_sync_started",
      "tengu_team_mem_entries_capped"
    ]);
    TAG_FIELDS = [
      "arch",
      "clientType",
      "errorType",
      "http_status_range",
      "http_status",
      "kairosActive",
      "model",
      "platform",
      "provider",
      "skillMode",
      "subscriptionType",
      "toolName",
      "userBucket",
      "userType",
      "version",
      "versionBase"
    ];
    logBatch = [];
    flushTimer = null;
    datadogInitialized = null;
    initializeDatadog = memoize_default(async () => {
      if (isAnalyticsDisabled()) {
        datadogInitialized = false;
        return false;
      }
      try {
        datadogInitialized = true;
        return true;
      } catch (error) {
        logError(error);
        datadogInitialized = false;
        return false;
      }
    });
    NUM_USER_BUCKETS = 30;
    getUserBucket = memoize_default(() => {
      const userId = getOrCreateUserID();
      const hash = createHash("sha256").update(userId).digest("hex");
      return parseInt(hash.slice(0, 8), 16) % NUM_USER_BUCKETS;
    });
  }
});

export {
  shutdownDatadog,
  trackDatadogEvent,
  init_datadog
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3NlcnZpY2VzL2FuYWx5dGljcy9kYXRhZG9nLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBjcmVhdGVIYXNoIH0gZnJvbSAnY3J5cHRvJ1xuaW1wb3J0IG1lbW9pemUgZnJvbSAnbG9kYXNoLWVzL21lbW9pemUuanMnXG5pbXBvcnQgeyBnZXRPckNyZWF0ZVVzZXJJRCB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbmZpZy5qcydcbmltcG9ydCB7IGxvZ0Vycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nLmpzJ1xuaW1wb3J0IHsgZ2V0Q2Fub25pY2FsTmFtZSB9IGZyb20gJy4uLy4uL3V0aWxzL21vZGVsL21vZGVsLmpzJ1xuaW1wb3J0IHsgZ2V0QVBJUHJvdmlkZXIgfSBmcm9tICcuLi8uLi91dGlscy9tb2RlbC9wcm92aWRlcnMuanMnXG5pbXBvcnQgeyBNT0RFTF9DT1NUUyB9IGZyb20gJy4uLy4uL3V0aWxzL21vZGVsQ29zdC5qcydcbmltcG9ydCB7IGlzQW5hbHl0aWNzRGlzYWJsZWQgfSBmcm9tICcuL2NvbmZpZy5qcydcbmltcG9ydCB7IGdldEV2ZW50TWV0YWRhdGEgfSBmcm9tICcuL21ldGFkYXRhLmpzJ1xuXG5jb25zdCBEQVRBRE9HX0xPR1NfRU5EUE9JTlQgPVxuICAnaHR0cHM6Ly9odHRwLWludGFrZS5sb2dzLnVzNS5kYXRhZG9naHEuY29tL2FwaS92Mi9sb2dzJ1xuY29uc3QgREFUQURPR19DTElFTlRfVE9LRU4gPSAncHViYmJmNDhlNmQ3OGRhZTU0YmNlYWE0YWNmNDYzMjk5YmYnXG5jb25zdCBERUZBVUxUX0ZMVVNIX0lOVEVSVkFMX01TID0gMTUwMDBcbmNvbnN0IE1BWF9CQVRDSF9TSVpFID0gMTAwXG5jb25zdCBORVRXT1JLX1RJTUVPVVRfTVMgPSA1MDAwXG5cbmNvbnN0IERBVEFET0dfQUxMT1dFRF9FVkVOVFMgPSBuZXcgU2V0KFtcbiAgJ2Nocm9tZV9icmlkZ2VfY29ubmVjdGlvbl9zdWNjZWVkZWQnLFxuICAnY2hyb21lX2JyaWRnZV9jb25uZWN0aW9uX2ZhaWxlZCcsXG4gICdjaHJvbWVfYnJpZGdlX2Rpc2Nvbm5lY3RlZCcsXG4gICdjaHJvbWVfYnJpZGdlX3Rvb2xfY2FsbF9jb21wbGV0ZWQnLFxuICAnY2hyb21lX2JyaWRnZV90b29sX2NhbGxfZXJyb3InLFxuICAnY2hyb21lX2JyaWRnZV90b29sX2NhbGxfc3RhcnRlZCcsXG4gICdjaHJvbWVfYnJpZGdlX3Rvb2xfY2FsbF90aW1lb3V0JyxcbiAgJ3Rlbmd1X2FwaV9lcnJvcicsXG4gICd0ZW5ndV9hcGlfc3VjY2VzcycsXG4gICd0ZW5ndV9icmllZl9tb2RlX2VuYWJsZWQnLFxuICAndGVuZ3VfYnJpZWZfbW9kZV90b2dnbGVkJyxcbiAgJ3Rlbmd1X2JyaWVmX3NlbmQnLFxuICAndGVuZ3VfY2FuY2VsJyxcbiAgJ3Rlbmd1X2NvbXBhY3RfZmFpbGVkJyxcbiAgJ3Rlbmd1X2V4aXQnLFxuICAndGVuZ3VfZmxpY2tlcicsXG4gICd0ZW5ndV9pbml0JyxcbiAgJ3Rlbmd1X21vZGVsX2ZhbGxiYWNrX3RyaWdnZXJlZCcsXG4gICd0ZW5ndV9vYXV0aF9lcnJvcicsXG4gICd0ZW5ndV9vYXV0aF9zdWNjZXNzJyxcbiAgJ3Rlbmd1X29hdXRoX3Rva2VuX3JlZnJlc2hfZmFpbHVyZScsXG4gICd0ZW5ndV9vYXV0aF90b2tlbl9yZWZyZXNoX3N1Y2Nlc3MnLFxuICAndGVuZ3Vfb2F1dGhfdG9rZW5fcmVmcmVzaF9sb2NrX2FjcXVpcmluZycsXG4gICd0ZW5ndV9vYXV0aF90b2tlbl9yZWZyZXNoX2xvY2tfYWNxdWlyZWQnLFxuICAndGVuZ3Vfb2F1dGhfdG9rZW5fcmVmcmVzaF9zdGFydGluZycsXG4gICd0ZW5ndV9vYXV0aF90b2tlbl9yZWZyZXNoX2NvbXBsZXRlZCcsXG4gICd0ZW5ndV9vYXV0aF90b2tlbl9yZWZyZXNoX2xvY2tfcmVsZWFzaW5nJyxcbiAgJ3Rlbmd1X29hdXRoX3Rva2VuX3JlZnJlc2hfbG9ja19yZWxlYXNlZCcsXG4gICd0ZW5ndV9xdWVyeV9lcnJvcicsXG4gICd0ZW5ndV9zZXNzaW9uX2ZpbGVfcmVhZCcsXG4gICd0ZW5ndV9zdGFydGVkJyxcbiAgJ3Rlbmd1X3Rvb2xfdXNlX2Vycm9yJyxcbiAgJ3Rlbmd1X3Rvb2xfdXNlX2dyYW50ZWRfaW5fcHJvbXB0X3Blcm1hbmVudCcsXG4gICd0ZW5ndV90b29sX3VzZV9ncmFudGVkX2luX3Byb21wdF90ZW1wb3JhcnknLFxuICAndGVuZ3VfdG9vbF91c2VfcmVqZWN0ZWRfaW5fcHJvbXB0JyxcbiAgJ3Rlbmd1X3Rvb2xfdXNlX3N1Y2Nlc3MnLFxuICAndGVuZ3VfdW5jYXVnaHRfZXhjZXB0aW9uJyxcbiAgJ3Rlbmd1X3VuaGFuZGxlZF9yZWplY3Rpb24nLFxuICAndGVuZ3Vfdm9pY2VfcmVjb3JkaW5nX3N0YXJ0ZWQnLFxuICAndGVuZ3Vfdm9pY2VfdG9nZ2xlZCcsXG4gICd0ZW5ndV90ZWFtX21lbV9zeW5jX3B1bGwnLFxuICAndGVuZ3VfdGVhbV9tZW1fc3luY19wdXNoJyxcbiAgJ3Rlbmd1X3RlYW1fbWVtX3N5bmNfc3RhcnRlZCcsXG4gICd0ZW5ndV90ZWFtX21lbV9lbnRyaWVzX2NhcHBlZCcsXG5dKVxuXG5jb25zdCBUQUdfRklFTERTID0gW1xuICAnYXJjaCcsXG4gICdjbGllbnRUeXBlJyxcbiAgJ2Vycm9yVHlwZScsXG4gICdodHRwX3N0YXR1c19yYW5nZScsXG4gICdodHRwX3N0YXR1cycsXG4gICdrYWlyb3NBY3RpdmUnLFxuICAnbW9kZWwnLFxuICAncGxhdGZvcm0nLFxuICAncHJvdmlkZXInLFxuICAnc2tpbGxNb2RlJyxcbiAgJ3N1YnNjcmlwdGlvblR5cGUnLFxuICAndG9vbE5hbWUnLFxuICAndXNlckJ1Y2tldCcsXG4gICd1c2VyVHlwZScsXG4gICd2ZXJzaW9uJyxcbiAgJ3ZlcnNpb25CYXNlJyxcbl1cblxuZnVuY3Rpb24gY2FtZWxUb1NuYWtlQ2FzZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW0EtWl0vZywgbGV0dGVyID0+IGBfJHtsZXR0ZXIudG9Mb3dlckNhc2UoKX1gKVxufVxuXG50eXBlIERhdGFkb2dMb2cgPSB7XG4gIGRkc291cmNlOiBzdHJpbmdcbiAgZGR0YWdzOiBzdHJpbmdcbiAgbWVzc2FnZTogc3RyaW5nXG4gIHNlcnZpY2U6IHN0cmluZ1xuICBob3N0bmFtZTogc3RyaW5nXG4gIFtrZXk6IHN0cmluZ106IHVua25vd25cbn1cblxubGV0IGxvZ0JhdGNoOiBEYXRhZG9nTG9nW10gPSBbXVxubGV0IGZsdXNoVGltZXI6IE5vZGVKUy5UaW1lb3V0IHwgbnVsbCA9IG51bGxcbmxldCBkYXRhZG9nSW5pdGlhbGl6ZWQ6IGJvb2xlYW4gfCBudWxsID0gbnVsbFxuXG5hc3luYyBmdW5jdGlvbiBmbHVzaExvZ3MoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmIChsb2dCYXRjaC5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIGNvbnN0IGxvZ3NUb1NlbmQgPSBsb2dCYXRjaFxuICBsb2dCYXRjaCA9IFtdXG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBheGlvcy5wb3N0KERBVEFET0dfTE9HU19FTkRQT0lOVCwgbG9nc1RvU2VuZCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnREQtQVBJLUtFWSc6IERBVEFET0dfQ0xJRU5UX1RPS0VOLFxuICAgICAgfSxcbiAgICAgIHRpbWVvdXQ6IE5FVFdPUktfVElNRU9VVF9NUyxcbiAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZ0Vycm9yKGVycm9yKVxuICB9XG59XG5cbmZ1bmN0aW9uIHNjaGVkdWxlRmx1c2goKTogdm9pZCB7XG4gIGlmIChmbHVzaFRpbWVyKSByZXR1cm5cblxuICBmbHVzaFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZmx1c2hUaW1lciA9IG51bGxcbiAgICB2b2lkIGZsdXNoTG9ncygpXG4gIH0sIGdldEZsdXNoSW50ZXJ2YWxNcygpKS51bnJlZigpXG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplRGF0YWRvZyA9IG1lbW9pemUoYXN5bmMgKCk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICBpZiAoaXNBbmFseXRpY3NEaXNhYmxlZCgpKSB7XG4gICAgZGF0YWRvZ0luaXRpYWxpemVkID0gZmFsc2VcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHRyeSB7XG4gICAgZGF0YWRvZ0luaXRpYWxpemVkID0gdHJ1ZVxuICAgIHJldHVybiB0cnVlXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nRXJyb3IoZXJyb3IpXG4gICAgZGF0YWRvZ0luaXRpYWxpemVkID0gZmFsc2VcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufSlcblxuLyoqXG4gKiBGbHVzaCByZW1haW5pbmcgRGF0YWRvZyBsb2dzIGFuZCBzaHV0IGRvd24uXG4gKiBDYWxsZWQgZnJvbSBncmFjZWZ1bFNodXRkb3duKCkgYmVmb3JlIHByb2Nlc3MuZXhpdCgpIHNpbmNlXG4gKiBmb3JjZUV4aXQoKSBwcmV2ZW50cyB0aGUgYmVmb3JlRXhpdCBoYW5kbGVyIGZyb20gZmlyaW5nLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2h1dGRvd25EYXRhZG9nKCk6IFByb21pc2U8dm9pZD4ge1xuICBpZiAoZmx1c2hUaW1lcikge1xuICAgIGNsZWFyVGltZW91dChmbHVzaFRpbWVyKVxuICAgIGZsdXNoVGltZXIgPSBudWxsXG4gIH1cbiAgYXdhaXQgZmx1c2hMb2dzKClcbn1cblxuLy8gTk9URTogdXNlIHZpYSBzcmMvc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LnRzID4gbG9nRXZlbnRcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmFja0RhdGFkb2dFdmVudChcbiAgZXZlbnROYW1lOiBzdHJpbmcsXG4gIHByb3BlcnRpZXM6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB8IG51bWJlciB8IHVuZGVmaW5lZCB9LFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBEb24ndCBzZW5kIGV2ZW50cyBmb3IgM1AgcHJvdmlkZXJzIChCZWRyb2NrLCBWZXJ0ZXgsIEZvdW5kcnkpXG4gIGlmIChnZXRBUElQcm92aWRlcigpICE9PSAnZmlyc3RQYXJ0eScpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIEZhc3QgcGF0aDogdXNlIGNhY2hlZCByZXN1bHQgaWYgYXZhaWxhYmxlIHRvIGF2b2lkIGF3YWl0IG92ZXJoZWFkXG4gIGxldCBpbml0aWFsaXplZCA9IGRhdGFkb2dJbml0aWFsaXplZFxuICBpZiAoaW5pdGlhbGl6ZWQgPT09IG51bGwpIHtcbiAgICBpbml0aWFsaXplZCA9IGF3YWl0IGluaXRpYWxpemVEYXRhZG9nKClcbiAgfVxuICBpZiAoIWluaXRpYWxpemVkIHx8ICFEQVRBRE9HX0FMTE9XRURfRVZFTlRTLmhhcyhldmVudE5hbWUpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IG1ldGFkYXRhID0gYXdhaXQgZ2V0RXZlbnRNZXRhZGF0YSh7XG4gICAgICBtb2RlbDogcHJvcGVydGllcy5tb2RlbCxcbiAgICAgIGJldGFzOiBwcm9wZXJ0aWVzLmJldGFzLFxuICAgIH0pXG4gICAgLy8gRGVzdHJ1Y3R1cmUgdG8gYXZvaWQgZHVwbGljYXRlIGVudkNvbnRleHQgKG9uY2UgbmVzdGVkLCBvbmNlIGZsYXR0ZW5lZClcbiAgICBjb25zdCB7IGVudkNvbnRleHQsIC4uLnJlc3RNZXRhZGF0YSB9ID0gbWV0YWRhdGFcbiAgICBjb25zdCBhbGxEYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHtcbiAgICAgIC4uLnJlc3RNZXRhZGF0YSxcbiAgICAgIC4uLmVudkNvbnRleHQsXG4gICAgICAuLi5wcm9wZXJ0aWVzLFxuICAgICAgdXNlckJ1Y2tldDogZ2V0VXNlckJ1Y2tldCgpLFxuICAgIH1cblxuICAgIC8vIE5vcm1hbGl6ZSBNQ1AgdG9vbCBuYW1lcyB0byBcIm1jcFwiIGZvciBjYXJkaW5hbGl0eSByZWR1Y3Rpb25cbiAgICBpZiAoXG4gICAgICB0eXBlb2YgYWxsRGF0YS50b29sTmFtZSA9PT0gJ3N0cmluZycgJiZcbiAgICAgIGFsbERhdGEudG9vbE5hbWUuc3RhcnRzV2l0aCgnbWNwX18nKVxuICAgICkge1xuICAgICAgYWxsRGF0YS50b29sTmFtZSA9ICdtY3AnXG4gICAgfVxuXG4gICAgLy8gTm9ybWFsaXplIG1vZGVsIG5hbWVzIGZvciBjYXJkaW5hbGl0eSByZWR1Y3Rpb24gKGV4dGVybmFsIHVzZXJzIG9ubHkpXG4gICAgaWYgKHByb2Nlc3MuZW52LlVTRVJfVFlQRSAhPT0gJ2FudCcgJiYgdHlwZW9mIGFsbERhdGEubW9kZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBzaG9ydE5hbWUgPSBnZXRDYW5vbmljYWxOYW1lKGFsbERhdGEubW9kZWwucmVwbGFjZSgvXFxbMW1dJC9pLCAnJykpXG4gICAgICBhbGxEYXRhLm1vZGVsID0gc2hvcnROYW1lIGluIE1PREVMX0NPU1RTID8gc2hvcnROYW1lIDogJ290aGVyJ1xuICAgIH1cblxuICAgIC8vIFRydW5jYXRlIGRldiB2ZXJzaW9uIHRvIGJhc2UgKyBkYXRlIChyZW1vdmUgdGltZXN0YW1wIGFuZCBzaGEgZm9yIGNhcmRpbmFsaXR5IHJlZHVjdGlvbilcbiAgICAvLyBlLmcuIFwiMi4wLjUzLWRldi4yMDI1MTEyNC50MTczMzAyLnNoYTUyNmNjNmFcIiAtPiBcIjIuMC41My1kZXYuMjAyNTExMjRcIlxuICAgIGlmICh0eXBlb2YgYWxsRGF0YS52ZXJzaW9uID09PSAnc3RyaW5nJykge1xuICAgICAgYWxsRGF0YS52ZXJzaW9uID0gYWxsRGF0YS52ZXJzaW9uLnJlcGxhY2UoXG4gICAgICAgIC9eKFxcZCtcXC5cXGQrXFwuXFxkKy1kZXZcXC5cXGR7OH0pXFwudFxcZCtcXC5zaGFbYS1mMC05XSskLyxcbiAgICAgICAgJyQxJyxcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUcmFuc2Zvcm0gc3RhdHVzIHRvIGh0dHBfc3RhdHVzIGFuZCBodHRwX3N0YXR1c19yYW5nZSB0byBhdm9pZCBEYXRhZG9nIHJlc2VydmVkIGZpZWxkXG4gICAgaWYgKGFsbERhdGEuc3RhdHVzICE9PSB1bmRlZmluZWQgJiYgYWxsRGF0YS5zdGF0dXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXR1c0NvZGUgPSBTdHJpbmcoYWxsRGF0YS5zdGF0dXMpXG4gICAgICBhbGxEYXRhLmh0dHBfc3RhdHVzID0gc3RhdHVzQ29kZVxuXG4gICAgICAvLyBEZXRlcm1pbmUgc3RhdHVzIHJhbmdlICgxeHgsIDJ4eCwgM3h4LCA0eHgsIDV4eClcbiAgICAgIGNvbnN0IGZpcnN0RGlnaXQgPSBzdGF0dXNDb2RlLmNoYXJBdCgwKVxuICAgICAgaWYgKGZpcnN0RGlnaXQgPj0gJzEnICYmIGZpcnN0RGlnaXQgPD0gJzUnKSB7XG4gICAgICAgIGFsbERhdGEuaHR0cF9zdGF0dXNfcmFuZ2UgPSBgJHtmaXJzdERpZ2l0fXh4YFxuICAgICAgfVxuXG4gICAgICAvLyBSZW1vdmUgb3JpZ2luYWwgc3RhdHVzIGZpZWxkIHRvIGF2b2lkIGNvbmZsaWN0IHdpdGggRGF0YWRvZydzIHJlc2VydmVkIGZpZWxkXG4gICAgICBkZWxldGUgYWxsRGF0YS5zdGF0dXNcbiAgICB9XG5cbiAgICAvLyBCdWlsZCBkZHRhZ3Mgd2l0aCBoaWdoLWNhcmRpbmFsaXR5IGZpZWxkcyBmb3IgZmlsdGVyaW5nLlxuICAgIC8vIGV2ZW50OjxuYW1lPiBpcyBwcmVwZW5kZWQgc28gdGhlIGV2ZW50IG5hbWUgaXMgc2VhcmNoYWJsZSB2aWEgdGhlXG4gICAgLy8gbG9nIHNlYXJjaCBBUEkgXHUyMDE0IHRoZSBgbWVzc2FnZWAgZmllbGQgKHdoZXJlIGV2ZW50TmFtZSBhbHNvIGxpdmVzKVxuICAgIC8vIGlzIGEgREQgcmVzZXJ2ZWQgZmllbGQgYW5kIGlzIE5PVCBxdWVyeWFibGUgZnJvbSBkYXNoYm9hcmQgd2lkZ2V0XG4gICAgLy8gcXVlcmllcyBvciB0aGUgYWdncmVnYXRpb24gQVBJLiBTZWUgc2NyaXB0cy9yZWxlYXNlL01PTklUT1JJTkcubWQuXG4gICAgY29uc3QgYWxsRGF0YVJlY29yZCA9IGFsbERhdGFcbiAgICBjb25zdCB0YWdzID0gW1xuICAgICAgYGV2ZW50OiR7ZXZlbnROYW1lfWAsXG4gICAgICAuLi5UQUdfRklFTERTLmZpbHRlcihcbiAgICAgICAgZmllbGQgPT5cbiAgICAgICAgICBhbGxEYXRhUmVjb3JkW2ZpZWxkXSAhPT0gdW5kZWZpbmVkICYmIGFsbERhdGFSZWNvcmRbZmllbGRdICE9PSBudWxsLFxuICAgICAgKS5tYXAoZmllbGQgPT4gYCR7Y2FtZWxUb1NuYWtlQ2FzZShmaWVsZCl9OiR7YWxsRGF0YVJlY29yZFtmaWVsZF19YCksXG4gICAgXVxuXG4gICAgY29uc3QgbG9nOiBEYXRhZG9nTG9nID0ge1xuICAgICAgZGRzb3VyY2U6ICdub2RlanMnLFxuICAgICAgZGR0YWdzOiB0YWdzLmpvaW4oJywnKSxcbiAgICAgIG1lc3NhZ2U6IGV2ZW50TmFtZSxcbiAgICAgIHNlcnZpY2U6ICdjbGF1ZGUtY29kZScsXG4gICAgICBob3N0bmFtZTogJ2NsYXVkZS1jb2RlJyxcbiAgICAgIGVudjogcHJvY2Vzcy5lbnYuVVNFUl9UWVBFLFxuICAgIH1cblxuICAgIC8vIEFkZCBhbGwgZmllbGRzIGFzIHNlYXJjaGFibGUgYXR0cmlidXRlcyAobm90IGR1cGxpY2F0ZWQgaW4gdGFncylcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhbGxEYXRhKSkge1xuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgbG9nW2NhbWVsVG9TbmFrZUNhc2Uoa2V5KV0gPSB2YWx1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGxvZ0JhdGNoLnB1c2gobG9nKVxuXG4gICAgLy8gRmx1c2ggaW1tZWRpYXRlbHkgaWYgYmF0Y2ggaXMgZnVsbCwgb3RoZXJ3aXNlIHNjaGVkdWxlXG4gICAgaWYgKGxvZ0JhdGNoLmxlbmd0aCA+PSBNQVhfQkFUQ0hfU0laRSkge1xuICAgICAgaWYgKGZsdXNoVGltZXIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGZsdXNoVGltZXIpXG4gICAgICAgIGZsdXNoVGltZXIgPSBudWxsXG4gICAgICB9XG4gICAgICB2b2lkIGZsdXNoTG9ncygpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNjaGVkdWxlRmx1c2goKVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2dFcnJvcihlcnJvcilcbiAgfVxufVxuXG5jb25zdCBOVU1fVVNFUl9CVUNLRVRTID0gMzBcblxuLyoqXG4gKiBHZXRzIGEgJ2J1Y2tldCcgdGhhdCB0aGUgdXNlciBJRCBmYWxscyBpbnRvLlxuICpcbiAqIEZvciBhbGVydGluZyBwdXJwb3Nlcywgd2Ugd2FudCB0byBhbGVydCBvbiB0aGUgbnVtYmVyIG9mIHVzZXJzIGltcGFjdGVkXG4gKiBieSBhbiBpc3N1ZSwgcmF0aGVyIHRoYW4gdGhlIG51bWJlciBvZiBldmVudHMtIG9mdGVuIGEgc21hbGwgbnVtYmVyIG9mIHVzZXJzXG4gKiBjYW4gZ2VuZXJhdGUgYSBsYXJnZSBudW1iZXIgb2YgZXZlbnRzIChlLmcuIGR1ZSB0byByZXRyaWVzKS4gVG8gYXBwcm94aW1hdGVcbiAqIHRoaXMgd2l0aG91dCBydWluaW5nIGNhcmRpbmFsaXR5IGJ5IGNvdW50aW5nIHVzZXIgSURzIGRpcmVjdGx5LCB3ZSBoYXNoIHRoZSB1c2VyIElEXG4gKiBhbmQgYXNzaWduIGl0IHRvIG9uZSBvZiBhIGZpeGVkIG51bWJlciBvZiBidWNrZXRzLlxuICpcbiAqIFRoaXMgYWxsb3dzIHVzIHRvIGVzdGltYXRlIHRoZSBudW1iZXIgb2YgdW5pcXVlIHVzZXJzIGJ5IGNvdW50aW5nIHVuaXF1ZSBidWNrZXRzLFxuICogd2hpbGUgcHJlc2VydmluZyB1c2VyIHByaXZhY3kgYW5kIHJlZHVjaW5nIGNhcmRpbmFsaXR5LlxuICovXG5jb25zdCBnZXRVc2VyQnVja2V0ID0gbWVtb2l6ZSgoKTogbnVtYmVyID0+IHtcbiAgY29uc3QgdXNlcklkID0gZ2V0T3JDcmVhdGVVc2VySUQoKVxuICBjb25zdCBoYXNoID0gY3JlYXRlSGFzaCgnc2hhMjU2JykudXBkYXRlKHVzZXJJZCkuZGlnZXN0KCdoZXgnKVxuICByZXR1cm4gcGFyc2VJbnQoaGFzaC5zbGljZSgwLCA4KSwgMTYpICUgTlVNX1VTRVJfQlVDS0VUU1xufSlcblxuZnVuY3Rpb24gZ2V0Rmx1c2hJbnRlcnZhbE1zKCk6IG51bWJlciB7XG4gIC8vIEFsbG93IHRlc3RzIHRvIG92ZXJyaWRlIHRvIG5vdCBibG9jayBvbiB0aGUgZGVmYXVsdCBmbHVzaCBpbnRlcnZhbC5cbiAgcmV0dXJuIChcbiAgICBwYXJzZUludChwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9EQVRBRE9HX0ZMVVNIX0lOVEVSVkFMX01TIHx8ICcnLCAxMCkgfHxcbiAgICBERUZBVUxUX0ZMVVNIX0lOVEVSVkFMX01TXG4gIClcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxTQUFTLGtCQUFrQjtBQW1GM0IsU0FBUyxpQkFBaUIsS0FBcUI7QUFDN0MsU0FBTyxJQUFJLFFBQVEsVUFBVSxZQUFVLElBQUksT0FBTyxZQUFZLENBQUMsRUFBRTtBQUNuRTtBQWVBLGVBQWUsWUFBMkI7QUFDeEMsTUFBSSxTQUFTLFdBQVcsRUFBRztBQUUzQixRQUFNLGFBQWE7QUFDbkIsYUFBVyxDQUFDO0FBRVosTUFBSTtBQUNGLFVBQU0sY0FBTSxLQUFLLHVCQUF1QixZQUFZO0FBQUEsTUFDbEQsU0FBUztBQUFBLFFBQ1AsZ0JBQWdCO0FBQUEsUUFDaEIsY0FBYztBQUFBLE1BQ2hCO0FBQUEsTUFDQSxTQUFTO0FBQUEsSUFDWCxDQUFDO0FBQUEsRUFDSCxT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
