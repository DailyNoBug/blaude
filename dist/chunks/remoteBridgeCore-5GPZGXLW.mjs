#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  FlushGate,
  createV2ReplTransport
} from "./chunk-O26YMNPP.mjs";
import "./chunk-AVZQW3S6.mjs";
import {
  BoundedUUIDSet,
  extractTitleText,
  handleIngressMessage,
  handleServerControlRequest,
  isEligibleBridgeMessage,
  makeResultMessage
} from "./chunk-56GML2C2.mjs";
import "./chunk-WBJL7DYB.mjs";
import {
  buildCCRv2SdkUrl
} from "./chunk-LD7DS2YH.mjs";
import {
  createTokenRefreshScheduler
} from "./chunk-AWPTVMZY.mjs";
import {
  getEnvLessBridgeConfig,
  init_envLessBridgeConfig
} from "./chunk-4CUQRZU6.mjs";
import {
  getBridgeBaseUrlOverride,
  init_bridgeConfig
} from "./chunk-HWCIXFFE.mjs";
import "./chunk-SQ6KOOZS.mjs";
import {
  extractErrorDetail,
  init_debugUtils,
  init_sessionIdCompat,
  logBridgeSkip,
  toCompatSessionId
} from "./chunk-M22WMPMZ.mjs";
import {
  getTrustedDeviceToken,
  init_trustedDevice
} from "./chunk-R326WRGL.mjs";
import "./chunk-NKGQGSP5.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-UIIDPH35.mjs";
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
import "./chunk-JOMSGAK7.mjs";
import "./chunk-3PS62SCS.mjs";
import "./chunk-SFCRD75C.mjs";
import "./chunk-QFFW7MQ2.mjs";
import "./chunk-3AEW3KDQ.mjs";
import "./chunk-OGGCTXYU.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-MDXHK5AD.mjs";
import "./chunk-SETG7O3F.mjs";
import {
  axios_default,
  init_axios
} from "./chunk-J6MJ6UVK.mjs";
import "./chunk-PKIVPZJM.mjs";
import "./chunk-JXCG2JDO.mjs";
import {
  init_diagLogs,
  logForDiagnosticsNoPII
} from "./chunk-7SC6PTLR.mjs";
import "./chunk-NT7W7YWD.mjs";
import "./chunk-4S33EKPF.mjs";
import "./chunk-VNIROYYL.mjs";
import "./chunk-TZFTPSMG.mjs";
import "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-IPMELYAB.mjs";
import "./chunk-F5ODCUJD.mjs";
import "./chunk-ZAYB3WZV.mjs";
import {
  errorMessage,
  init_cleanupRegistry,
  init_debug,
  init_errors,
  init_slowOperations,
  jsonStringify,
  logForDebugging,
  registerCleanup
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
  isInProtectedNamespace
} from "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import "./chunk-O5PZ3G6I.mjs";

// src/bridge/remoteBridgeCore.ts
init_bun_bundle();
init_axios();
init_sessionIdCompat();
init_trustedDevice();
init_envLessBridgeConfig();
init_debugUtils();
init_debug();
init_diagLogs();
init_envUtils();
init_errors();
init_sleep();
init_cleanupRegistry();
init_analytics();

// src/bridge/codeSessionApi.ts
init_axios();
init_debug();
init_errors();
init_slowOperations();
init_debugUtils();
var ANTHROPIC_VERSION = "2023-06-01";
function oauthHeaders(accessToken) {
  return {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
    "anthropic-version": ANTHROPIC_VERSION
  };
}
async function createCodeSession(baseUrl, accessToken, title, timeoutMs, tags) {
  const url = `${baseUrl}/v1/code/sessions`;
  let response;
  try {
    response = await axios_default.post(
      url,
      // bridge: {} is the positive signal for the oneof runner — omitting it
      // (or sending environment_id: "") now 400s. BridgeRunner is an empty
      // message today; it's a placeholder for future bridge-specific options.
      { title, bridge: {}, ...tags?.length ? { tags } : {} },
      {
        headers: oauthHeaders(accessToken),
        timeout: timeoutMs,
        validateStatus: (s) => s < 500
      }
    );
  } catch (err) {
    logForDebugging(
      `[code-session] Session create request failed: ${errorMessage(err)}`
    );
    return null;
  }
  if (response.status !== 200 && response.status !== 201) {
    const detail = extractErrorDetail(response.data);
    logForDebugging(
      `[code-session] Session create failed ${response.status}${detail ? `: ${detail}` : ""}`
    );
    return null;
  }
  const data = response.data;
  if (!data || typeof data !== "object" || !("session" in data) || !data.session || typeof data.session !== "object" || !("id" in data.session) || typeof data.session.id !== "string" || !data.session.id.startsWith("cse_")) {
    logForDebugging(
      `[code-session] No session.id (cse_*) in response: ${jsonStringify(data).slice(0, 200)}`
    );
    return null;
  }
  return data.session.id;
}
async function fetchRemoteCredentials(sessionId, baseUrl, accessToken, timeoutMs, trustedDeviceToken) {
  const url = `${baseUrl}/v1/code/sessions/${sessionId}/bridge`;
  const headers = oauthHeaders(accessToken);
  if (trustedDeviceToken) {
    headers["X-Trusted-Device-Token"] = trustedDeviceToken;
  }
  let response;
  try {
    response = await axios_default.post(
      url,
      {},
      {
        headers,
        timeout: timeoutMs,
        validateStatus: (s) => s < 500
      }
    );
  } catch (err) {
    logForDebugging(
      `[code-session] /bridge request failed: ${errorMessage(err)}`
    );
    return null;
  }
  if (response.status !== 200) {
    const detail = extractErrorDetail(response.data);
    logForDebugging(
      `[code-session] /bridge failed ${response.status}${detail ? `: ${detail}` : ""}`
    );
    return null;
  }
  const data = response.data;
  if (data === null || typeof data !== "object" || !("worker_jwt" in data) || typeof data.worker_jwt !== "string" || !("expires_in" in data) || typeof data.expires_in !== "number" || !("api_base_url" in data) || typeof data.api_base_url !== "string" || !("worker_epoch" in data)) {
    logForDebugging(
      `[code-session] /bridge response malformed (need worker_jwt, expires_in, api_base_url, worker_epoch): ${jsonStringify(data).slice(0, 200)}`
    );
    return null;
  }
  const rawEpoch = data.worker_epoch;
  const epoch = typeof rawEpoch === "string" ? Number(rawEpoch) : rawEpoch;
  if (typeof epoch !== "number" || !Number.isFinite(epoch) || !Number.isSafeInteger(epoch)) {
    logForDebugging(
      `[code-session] /bridge worker_epoch invalid: ${jsonStringify(rawEpoch)}`
    );
    return null;
  }
  return {
    worker_jwt: data.worker_jwt,
    api_base_url: data.api_base_url,
    expires_in: data.expires_in,
    worker_epoch: epoch
  };
}

// src/bridge/remoteBridgeCore.ts
init_bridgeConfig();
var ANTHROPIC_VERSION2 = "2023-06-01";
function oauthHeaders2(accessToken) {
  return {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
    "anthropic-version": ANTHROPIC_VERSION2
  };
}
async function initEnvLessBridgeCore(params) {
  const {
    baseUrl,
    orgUUID,
    title,
    getAccessToken,
    onAuth401,
    toSDKMessages,
    initialHistoryCap,
    initialMessages,
    onInboundMessage,
    onUserMessage,
    onPermissionResponse,
    onInterrupt,
    onSetModel,
    onSetMaxThinkingTokens,
    onSetPermissionMode,
    onStateChange,
    outboundOnly,
    tags
  } = params;
  const cfg = await getEnvLessBridgeConfig();
  const accessToken = getAccessToken();
  if (!accessToken) {
    logForDebugging("[remote-bridge] No OAuth token");
    return null;
  }
  const createdSessionId = await withRetry(
    () => createCodeSession(baseUrl, accessToken, title, cfg.http_timeout_ms, tags),
    "createCodeSession",
    cfg
  );
  if (!createdSessionId) {
    onStateChange?.("failed", "Session creation failed \u2014 see debug log");
    logBridgeSkip("v2_session_create_failed", void 0, true);
    return null;
  }
  const sessionId = createdSessionId;
  logForDebugging(`[remote-bridge] Created session ${sessionId}`);
  logForDiagnosticsNoPII("info", "bridge_repl_v2_session_created");
  const credentials = await withRetry(
    () => fetchRemoteCredentials2(
      sessionId,
      baseUrl,
      accessToken,
      cfg.http_timeout_ms
    ),
    "fetchRemoteCredentials",
    cfg
  );
  if (!credentials) {
    onStateChange?.("failed", "Remote credentials fetch failed \u2014 see debug log");
    logBridgeSkip("v2_remote_creds_failed", void 0, true);
    void archiveSession(
      sessionId,
      baseUrl,
      accessToken,
      orgUUID,
      cfg.http_timeout_ms
    );
    return null;
  }
  logForDebugging(
    `[remote-bridge] Fetched bridge credentials (expires_in=${credentials.expires_in}s)`
  );
  const sessionUrl = buildCCRv2SdkUrl(credentials.api_base_url, sessionId);
  logForDebugging(`[remote-bridge] v2 session URL: ${sessionUrl}`);
  let transport;
  try {
    transport = await createV2ReplTransport({
      sessionUrl,
      ingressToken: credentials.worker_jwt,
      sessionId,
      epoch: credentials.worker_epoch,
      heartbeatIntervalMs: cfg.heartbeat_interval_ms,
      heartbeatJitterFraction: cfg.heartbeat_jitter_fraction,
      // Per-instance closure — keeps the worker JWT out of
      // process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN, which mcp/client.ts
      // reads ungatedly and would otherwise send to user-configured ws/http
      // MCP servers. Frozen-at-construction is correct: transport is fully
      // rebuilt on refresh (rebuildTransport below).
      getAuthToken: () => credentials.worker_jwt,
      outboundOnly
    });
  } catch (err) {
    logForDebugging(
      `[remote-bridge] v2 transport setup failed: ${errorMessage(err)}`,
      { level: "error" }
    );
    onStateChange?.("failed", `Transport setup failed: ${errorMessage(err)}`);
    logBridgeSkip("v2_transport_setup_failed", void 0, true);
    void archiveSession(
      sessionId,
      baseUrl,
      accessToken,
      orgUUID,
      cfg.http_timeout_ms
    );
    return null;
  }
  logForDebugging(
    `[remote-bridge] v2 transport created (epoch=${credentials.worker_epoch})`
  );
  onStateChange?.("ready");
  const recentPostedUUIDs = new BoundedUUIDSet(cfg.uuid_dedup_buffer_size);
  const initialMessageUUIDs = /* @__PURE__ */ new Set();
  if (initialMessages) {
    for (const msg of initialMessages) {
      initialMessageUUIDs.add(msg.uuid);
      recentPostedUUIDs.add(msg.uuid);
    }
  }
  const recentInboundUUIDs = new BoundedUUIDSet(cfg.uuid_dedup_buffer_size);
  const flushGate = new FlushGate();
  let initialFlushDone = false;
  let tornDown = false;
  let authRecoveryInFlight = false;
  let userMessageCallbackDone = !onUserMessage;
  let connectCause = "initial";
  let connectDeadline;
  function onConnectTimeout(cause) {
    if (tornDown) return;
    logEvent("tengu_bridge_repl_connect_timeout", {
      v2: true,
      elapsed_ms: cfg.connect_timeout_ms,
      cause
    });
  }
  const refresh = createTokenRefreshScheduler({
    refreshBufferMs: cfg.token_refresh_buffer_ms,
    getAccessToken: async () => {
      const stale = getAccessToken();
      if (onAuth401) await onAuth401(stale ?? "");
      return getAccessToken() ?? stale;
    },
    onRefresh: (sid, oauthToken) => {
      void (async () => {
        if (authRecoveryInFlight || tornDown) {
          logForDebugging(
            "[remote-bridge] Recovery already in flight, skipping proactive refresh"
          );
          return;
        }
        authRecoveryInFlight = true;
        try {
          const fresh = await withRetry(
            () => fetchRemoteCredentials2(
              sid,
              baseUrl,
              oauthToken,
              cfg.http_timeout_ms
            ),
            "fetchRemoteCredentials (proactive)",
            cfg
          );
          if (!fresh || tornDown) return;
          await rebuildTransport(fresh, "proactive_refresh");
          logForDebugging(
            "[remote-bridge] Transport rebuilt (proactive refresh)"
          );
        } catch (err) {
          logForDebugging(
            `[remote-bridge] Proactive refresh rebuild failed: ${errorMessage(err)}`,
            { level: "error" }
          );
          logForDiagnosticsNoPII(
            "error",
            "bridge_repl_v2_proactive_refresh_failed"
          );
          if (!tornDown) {
            onStateChange?.("failed", `Refresh failed: ${errorMessage(err)}`);
          }
        } finally {
          authRecoveryInFlight = false;
        }
      })();
    },
    label: "remote"
  });
  refresh.scheduleFromExpiresIn(sessionId, credentials.expires_in);
  function wireTransportCallbacks() {
    transport.setOnConnect(() => {
      clearTimeout(connectDeadline);
      logForDebugging("[remote-bridge] v2 transport connected");
      logForDiagnosticsNoPII("info", "bridge_repl_v2_transport_connected");
      logEvent("tengu_bridge_repl_ws_connected", {
        v2: true,
        cause: connectCause
      });
      if (!initialFlushDone && initialMessages && initialMessages.length > 0) {
        initialFlushDone = true;
        const flushTransport = transport;
        void flushHistory(initialMessages).catch(
          (e) => logForDebugging(`[remote-bridge] flushHistory failed: ${e}`)
        ).finally(() => {
          if (transport !== flushTransport || tornDown || authRecoveryInFlight) {
            return;
          }
          drainFlushGate();
          onStateChange?.("connected");
        });
      } else if (!flushGate.active) {
        onStateChange?.("connected");
      }
    });
    transport.setOnData((data) => {
      handleIngressMessage(
        data,
        recentPostedUUIDs,
        recentInboundUUIDs,
        onInboundMessage,
        // Remote client answered the permission prompt — the turn resumes.
        // Without this the server stays on requires_action until the next
        // user message or turn-end result.
        onPermissionResponse ? (res) => {
          transport.reportState("running");
          onPermissionResponse(res);
        } : void 0,
        (req) => handleServerControlRequest(req, {
          transport,
          sessionId,
          onInterrupt,
          onSetModel,
          onSetMaxThinkingTokens,
          onSetPermissionMode,
          outboundOnly
        })
      );
    });
    transport.setOnClose((code) => {
      clearTimeout(connectDeadline);
      if (tornDown) return;
      logForDebugging(`[remote-bridge] v2 transport closed (code=${code})`);
      logEvent("tengu_bridge_repl_ws_closed", { code, v2: true });
      if (code === 401 && !authRecoveryInFlight) {
        void recoverFromAuthFailure();
        return;
      }
      onStateChange?.("failed", `Transport closed (code ${code})`);
    });
  }
  async function rebuildTransport(fresh, cause) {
    connectCause = cause;
    flushGate.start();
    try {
      const seq = transport.getLastSequenceNum();
      transport.close();
      transport = await createV2ReplTransport({
        sessionUrl: buildCCRv2SdkUrl(fresh.api_base_url, sessionId),
        ingressToken: fresh.worker_jwt,
        sessionId,
        epoch: fresh.worker_epoch,
        heartbeatIntervalMs: cfg.heartbeat_interval_ms,
        heartbeatJitterFraction: cfg.heartbeat_jitter_fraction,
        initialSequenceNum: seq,
        getAuthToken: () => fresh.worker_jwt,
        outboundOnly
      });
      if (tornDown) {
        transport.close();
        return;
      }
      wireTransportCallbacks();
      transport.connect();
      connectDeadline = setTimeout(
        onConnectTimeout,
        cfg.connect_timeout_ms,
        connectCause
      );
      refresh.scheduleFromExpiresIn(sessionId, fresh.expires_in);
      drainFlushGate();
    } finally {
      flushGate.drop();
    }
  }
  async function recoverFromAuthFailure() {
    if (authRecoveryInFlight) return;
    authRecoveryInFlight = true;
    onStateChange?.("reconnecting", "JWT expired \u2014 refreshing");
    logForDebugging("[remote-bridge] 401 on SSE \u2014 attempting JWT refresh");
    try {
      const stale = getAccessToken();
      if (onAuth401) await onAuth401(stale ?? "");
      const oauthToken = getAccessToken() ?? stale;
      if (!oauthToken || tornDown) {
        if (!tornDown) {
          onStateChange?.("failed", "JWT refresh failed: no OAuth token");
        }
        return;
      }
      const fresh = await withRetry(
        () => fetchRemoteCredentials2(
          sessionId,
          baseUrl,
          oauthToken,
          cfg.http_timeout_ms
        ),
        "fetchRemoteCredentials (recovery)",
        cfg
      );
      if (!fresh || tornDown) {
        if (!tornDown) {
          onStateChange?.("failed", "JWT refresh failed after 401");
        }
        return;
      }
      initialFlushDone = false;
      await rebuildTransport(fresh, "auth_401_recovery");
      logForDebugging("[remote-bridge] Transport rebuilt after 401");
    } catch (err) {
      logForDebugging(
        `[remote-bridge] 401 recovery failed: ${errorMessage(err)}`,
        { level: "error" }
      );
      logForDiagnosticsNoPII("error", "bridge_repl_v2_jwt_refresh_failed");
      if (!tornDown) {
        onStateChange?.("failed", `JWT refresh failed: ${errorMessage(err)}`);
      }
    } finally {
      authRecoveryInFlight = false;
    }
  }
  wireTransportCallbacks();
  if (initialMessages && initialMessages.length > 0) {
    flushGate.start();
  }
  transport.connect();
  connectDeadline = setTimeout(
    onConnectTimeout,
    cfg.connect_timeout_ms,
    connectCause
  );
  function drainFlushGate() {
    const msgs = flushGate.end();
    if (msgs.length === 0) return;
    for (const msg of msgs) recentPostedUUIDs.add(msg.uuid);
    const events = toSDKMessages(msgs).map((m) => ({
      ...m,
      session_id: sessionId
    }));
    if (msgs.some((m) => m.type === "user")) {
      transport.reportState("running");
    }
    logForDebugging(
      `[remote-bridge] Drained ${msgs.length} queued message(s) after flush`
    );
    void transport.writeBatch(events);
  }
  async function flushHistory(msgs) {
    const eligible = msgs.filter(isEligibleBridgeMessage);
    const capped = initialHistoryCap > 0 && eligible.length > initialHistoryCap ? eligible.slice(-initialHistoryCap) : eligible;
    if (capped.length < eligible.length) {
      logForDebugging(
        `[remote-bridge] Capped initial flush: ${eligible.length} -> ${capped.length} (cap=${initialHistoryCap})`
      );
    }
    const events = toSDKMessages(capped).map((m) => ({
      ...m,
      session_id: sessionId
    }));
    if (events.length === 0) return;
    if (eligible.at(-1)?.type === "user") {
      transport.reportState("running");
    }
    logForDebugging(`[remote-bridge] Flushing ${events.length} history events`);
    await transport.writeBatch(events);
  }
  async function teardown() {
    if (tornDown) return;
    tornDown = true;
    refresh.cancelAll();
    clearTimeout(connectDeadline);
    flushGate.drop();
    transport.reportState("idle");
    void transport.write(makeResultMessage(sessionId));
    let token = getAccessToken();
    let status = await archiveSession(
      sessionId,
      baseUrl,
      token,
      orgUUID,
      cfg.teardown_archive_timeout_ms
    );
    if (status === 401 && onAuth401) {
      try {
        await onAuth401(token ?? "");
        token = getAccessToken();
        status = await archiveSession(
          sessionId,
          baseUrl,
          token,
          orgUUID,
          cfg.teardown_archive_timeout_ms
        );
      } catch (err) {
        logForDebugging(
          `[remote-bridge] Teardown 401 retry threw: ${errorMessage(err)}`,
          { level: "error" }
        );
      }
    }
    transport.close();
    const archiveStatus = status === "no_token" ? "skipped_no_token" : status === "timeout" || status === "error" ? "network_error" : status >= 500 ? "server_5xx" : status >= 400 ? "server_4xx" : "ok";
    logForDebugging(`[remote-bridge] Torn down (archive=${status})`);
    logForDiagnosticsNoPII("info", "bridge_repl_v2_teardown");
    logEvent(
      feature("CCR_MIRROR") && outboundOnly ? "tengu_ccr_mirror_teardown" : "tengu_bridge_repl_teardown",
      {
        v2: true,
        archive_status: archiveStatus,
        archive_ok: typeof status === "number" && status < 400,
        archive_http_status: typeof status === "number" ? status : void 0,
        archive_timeout: status === "timeout",
        archive_no_token: status === "no_token"
      }
    );
  }
  const unregister = registerCleanup(teardown);
  if (feature("CCR_MIRROR") && outboundOnly) {
    logEvent("tengu_ccr_mirror_started", {
      v2: true,
      expires_in_s: credentials.expires_in
    });
  } else {
    logEvent("tengu_bridge_repl_started", {
      has_initial_messages: !!(initialMessages && initialMessages.length > 0),
      v2: true,
      expires_in_s: credentials.expires_in,
      inProtectedNamespace: isInProtectedNamespace()
    });
  }
  return {
    bridgeSessionId: sessionId,
    environmentId: "",
    sessionIngressUrl: credentials.api_base_url,
    writeMessages(messages) {
      const filtered = messages.filter(
        (m) => isEligibleBridgeMessage(m) && !initialMessageUUIDs.has(m.uuid) && !recentPostedUUIDs.has(m.uuid)
      );
      if (filtered.length === 0) return;
      if (!userMessageCallbackDone) {
        for (const m of filtered) {
          const text = extractTitleText(m);
          if (text !== void 0 && onUserMessage?.(text, sessionId)) {
            userMessageCallbackDone = true;
            break;
          }
        }
      }
      if (flushGate.enqueue(...filtered)) {
        logForDebugging(
          `[remote-bridge] Queued ${filtered.length} message(s) during flush`
        );
        return;
      }
      for (const msg of filtered) recentPostedUUIDs.add(msg.uuid);
      const events = toSDKMessages(filtered).map((m) => ({
        ...m,
        session_id: sessionId
      }));
      if (filtered.some((m) => m.type === "user")) {
        transport.reportState("running");
      }
      logForDebugging(`[remote-bridge] Sending ${filtered.length} message(s)`);
      void transport.writeBatch(events);
    },
    writeSdkMessages(messages) {
      const filtered = messages.filter(
        (m) => !m.uuid || !recentPostedUUIDs.has(m.uuid)
      );
      if (filtered.length === 0) return;
      for (const msg of filtered) {
        if (msg.uuid) recentPostedUUIDs.add(msg.uuid);
      }
      const events = filtered.map((m) => ({ ...m, session_id: sessionId }));
      void transport.writeBatch(events);
    },
    sendControlRequest(request) {
      if (authRecoveryInFlight) {
        logForDebugging(
          `[remote-bridge] Dropping control_request during 401 recovery: ${request.request_id}`
        );
        return;
      }
      const event = { ...request, session_id: sessionId };
      if (request.request.subtype === "can_use_tool") {
        transport.reportState("requires_action");
      }
      void transport.write(event);
      logForDebugging(
        `[remote-bridge] Sent control_request request_id=${request.request_id}`
      );
    },
    sendControlResponse(response) {
      if (authRecoveryInFlight) {
        logForDebugging(
          "[remote-bridge] Dropping control_response during 401 recovery"
        );
        return;
      }
      const event = { ...response, session_id: sessionId };
      transport.reportState("running");
      void transport.write(event);
      logForDebugging("[remote-bridge] Sent control_response");
    },
    sendControlCancelRequest(requestId) {
      if (authRecoveryInFlight) {
        logForDebugging(
          `[remote-bridge] Dropping control_cancel_request during 401 recovery: ${requestId}`
        );
        return;
      }
      const event = {
        type: "control_cancel_request",
        request_id: requestId,
        session_id: sessionId
      };
      transport.reportState("running");
      void transport.write(event);
      logForDebugging(
        `[remote-bridge] Sent control_cancel_request request_id=${requestId}`
      );
    },
    sendResult() {
      if (authRecoveryInFlight) {
        logForDebugging("[remote-bridge] Dropping result during 401 recovery");
        return;
      }
      transport.reportState("idle");
      void transport.write(makeResultMessage(sessionId));
      logForDebugging(`[remote-bridge] Sent result`);
    },
    async teardown() {
      unregister();
      await teardown();
    }
  };
}
async function withRetry(fn, label, cfg) {
  const max = cfg.init_retry_max_attempts;
  for (let attempt = 1; attempt <= max; attempt++) {
    const result = await fn();
    if (result !== null) return result;
    if (attempt < max) {
      const base = cfg.init_retry_base_delay_ms * 2 ** (attempt - 1);
      const jitter = base * cfg.init_retry_jitter_fraction * (2 * Math.random() - 1);
      const delay = Math.min(base + jitter, cfg.init_retry_max_delay_ms);
      logForDebugging(
        `[remote-bridge] ${label} failed (attempt ${attempt}/${max}), retrying in ${Math.round(delay)}ms`
      );
      await sleep(delay);
    }
  }
  return null;
}
async function fetchRemoteCredentials2(sessionId, baseUrl, accessToken, timeoutMs) {
  const creds = await fetchRemoteCredentials(
    sessionId,
    baseUrl,
    accessToken,
    timeoutMs,
    getTrustedDeviceToken()
  );
  if (!creds) return null;
  return getBridgeBaseUrlOverride() ? { ...creds, api_base_url: baseUrl } : creds;
}
async function archiveSession(sessionId, baseUrl, accessToken, orgUUID, timeoutMs) {
  if (!accessToken) return "no_token";
  const compatId = toCompatSessionId(sessionId);
  try {
    const response = await axios_default.post(
      `${baseUrl}/v1/sessions/${compatId}/archive`,
      {},
      {
        headers: {
          ...oauthHeaders2(accessToken),
          "anthropic-beta": "ccr-byoc-2025-07-29",
          "x-organization-uuid": orgUUID
        },
        timeout: timeoutMs,
        validateStatus: () => true
      }
    );
    logForDebugging(
      `[remote-bridge] Archive ${compatId} status=${response.status}`
    );
    return response.status;
  } catch (err) {
    const msg = errorMessage(err);
    logForDebugging(`[remote-bridge] Archive failed: ${msg}`);
    return axios_default.isAxiosError(err) && err.code === "ECONNABORTED" ? "timeout" : "error";
  }
}
export {
  createCodeSession,
  fetchRemoteCredentials2 as fetchRemoteCredentials,
  initEnvLessBridgeCore
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2JyaWRnZS9yZW1vdGVCcmlkZ2VDb3JlLnRzIiwgIi4uLy4uL3NyYy9icmlkZ2UvY29kZVNlc3Npb25BcGkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIGJpb21lLWlnbm9yZS1hbGwgYXNzaXN0L3NvdXJjZS9vcmdhbml6ZUltcG9ydHM6IEFOVC1PTkxZIGltcG9ydCBtYXJrZXJzIG11c3Qgbm90IGJlIHJlb3JkZXJlZFxuLyoqXG4gKiBFbnYtbGVzcyBSZW1vdGUgQ29udHJvbCBicmlkZ2UgY29yZS5cbiAqXG4gKiBcIkVudi1sZXNzXCIgPSBubyBFbnZpcm9ubWVudHMgQVBJIGxheWVyLiBEaXN0aW5jdCBmcm9tIFwiQ0NSIHYyXCIgKHRoZVxuICogL3dvcmtlci8qIHRyYW5zcG9ydCBwcm90b2NvbCkgXHUyMDE0IHRoZSBlbnYtYmFzZWQgcGF0aCAocmVwbEJyaWRnZS50cykgY2FuIGFsc29cbiAqIHVzZSBDQ1IgdjIgdHJhbnNwb3J0IHZpYSBDTEFVREVfQ09ERV9VU0VfQ0NSX1YyLiBUaGlzIGZpbGUgaXMgYWJvdXQgcmVtb3ZpbmdcbiAqIHRoZSBwb2xsL2Rpc3BhdGNoIGxheWVyLCBub3QgYWJvdXQgd2hpY2ggdHJhbnNwb3J0IHByb3RvY29sIGlzIHVuZGVybmVhdGguXG4gKlxuICogVW5saWtlIGluaXRCcmlkZ2VDb3JlIChlbnYtYmFzZWQsIH4yNDAwIGxpbmVzKSwgdGhpcyBjb25uZWN0cyBkaXJlY3RseVxuICogdG8gdGhlIHNlc3Npb24taW5ncmVzcyBsYXllciB3aXRob3V0IHRoZSBFbnZpcm9ubWVudHMgQVBJIHdvcmstZGlzcGF0Y2hcbiAqIGxheWVyOlxuICpcbiAqICAgMS4gUE9TVCAvdjEvY29kZS9zZXNzaW9ucyAgICAgICAgICAgICAgKE9BdXRoLCBubyBlbnZfaWQpICBcdTIxOTIgc2Vzc2lvbi5pZFxuICogICAyLiBQT1NUIC92MS9jb2RlL3Nlc3Npb25zL3tpZH0vYnJpZGdlICAoT0F1dGgpICAgICAgICAgICAgIFx1MjE5MiB7d29ya2VyX2p3dCwgZXhwaXJlc19pbiwgYXBpX2Jhc2VfdXJsLCB3b3JrZXJfZXBvY2h9XG4gKiAgICAgIEVhY2ggL2JyaWRnZSBjYWxsIGJ1bXBzIGVwb2NoIFx1MjAxNCBpdCBJUyB0aGUgcmVnaXN0ZXIuIE5vIHNlcGFyYXRlIC93b3JrZXIvcmVnaXN0ZXIuXG4gKiAgIDMuIGNyZWF0ZVYyUmVwbFRyYW5zcG9ydCh3b3JrZXJfand0LCB3b3JrZXJfZXBvY2gpICAgICAgICAgXHUyMTkyIFNTRSArIENDUkNsaWVudFxuICogICA0LiBjcmVhdGVUb2tlblJlZnJlc2hTY2hlZHVsZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx1MjE5MiBwcm9hY3RpdmUgL2JyaWRnZSByZS1jYWxsIChuZXcgSldUICsgbmV3IGVwb2NoKVxuICogICA1LiA0MDEgb24gU1NFIFx1MjE5MiByZWJ1aWxkIHRyYW5zcG9ydCB3aXRoIGZyZXNoIC9icmlkZ2UgY3JlZGVudGlhbHMgKHNhbWUgc2VxLW51bSlcbiAqXG4gKiBObyByZWdpc3Rlci9wb2xsL2Fjay9zdG9wL2hlYXJ0YmVhdC9kZXJlZ2lzdGVyIGVudmlyb25tZW50IGxpZmVjeWNsZS5cbiAqIFRoZSBFbnZpcm9ubWVudHMgQVBJIGhpc3RvcmljYWxseSBleGlzdGVkIGJlY2F1c2UgQ0NSJ3MgL3dvcmtlci8qXG4gKiBlbmRwb2ludHMgcmVxdWlyZWQgYSBzZXNzaW9uX2lkK3JvbGU9d29ya2VyIEpXVCB0aGF0IG9ubHkgdGhlIHdvcmstZGlzcGF0Y2hcbiAqIGxheWVyIGNvdWxkIG1pbnQuIFNlcnZlciBQUiAjMjkyNjA1IChyZW5hbWVkIGluICMyOTMyODApIGFkZHMgdGhlIC9icmlkZ2UgZW5kcG9pbnQgYXMgYSBkaXJlY3RcbiAqIE9BdXRoXHUyMTkyd29ya2VyX2p3dCBleGNoYW5nZSwgbWFraW5nIHRoZSBlbnYgbGF5ZXIgb3B0aW9uYWwgZm9yIFJFUEwgc2Vzc2lvbnMuXG4gKlxuICogR2F0ZWQgYnkgYHRlbmd1X2JyaWRnZV9yZXBsX3YyYCBHcm93dGhCb29rIGZsYWcgaW4gaW5pdFJlcGxCcmlkZ2UudHMuXG4gKiBSRVBMLW9ubHkgXHUyMDE0IGRhZW1vbi9wcmludCBzdGF5IG9uIGVudi1iYXNlZC5cbiAqL1xuXG5pbXBvcnQgeyBmZWF0dXJlIH0gZnJvbSAnYnVuOmJ1bmRsZSdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7XG4gIGNyZWF0ZVYyUmVwbFRyYW5zcG9ydCxcbiAgdHlwZSBSZXBsQnJpZGdlVHJhbnNwb3J0LFxufSBmcm9tICcuL3JlcGxCcmlkZ2VUcmFuc3BvcnQuanMnXG5pbXBvcnQgeyBidWlsZENDUnYyU2RrVXJsIH0gZnJvbSAnLi93b3JrU2VjcmV0LmpzJ1xuaW1wb3J0IHsgdG9Db21wYXRTZXNzaW9uSWQgfSBmcm9tICcuL3Nlc3Npb25JZENvbXBhdC5qcydcbmltcG9ydCB7IEZsdXNoR2F0ZSB9IGZyb20gJy4vZmx1c2hHYXRlLmpzJ1xuaW1wb3J0IHsgY3JlYXRlVG9rZW5SZWZyZXNoU2NoZWR1bGVyIH0gZnJvbSAnLi9qd3RVdGlscy5qcydcbmltcG9ydCB7IGdldFRydXN0ZWREZXZpY2VUb2tlbiB9IGZyb20gJy4vdHJ1c3RlZERldmljZS5qcydcbmltcG9ydCB7XG4gIGdldEVudkxlc3NCcmlkZ2VDb25maWcsXG4gIHR5cGUgRW52TGVzc0JyaWRnZUNvbmZpZyxcbn0gZnJvbSAnLi9lbnZMZXNzQnJpZGdlQ29uZmlnLmpzJ1xuaW1wb3J0IHtcbiAgaGFuZGxlSW5ncmVzc01lc3NhZ2UsXG4gIGhhbmRsZVNlcnZlckNvbnRyb2xSZXF1ZXN0LFxuICBtYWtlUmVzdWx0TWVzc2FnZSxcbiAgaXNFbGlnaWJsZUJyaWRnZU1lc3NhZ2UsXG4gIGV4dHJhY3RUaXRsZVRleHQsXG4gIEJvdW5kZWRVVUlEU2V0LFxufSBmcm9tICcuL2JyaWRnZU1lc3NhZ2luZy5qcydcbmltcG9ydCB7IGxvZ0JyaWRnZVNraXAgfSBmcm9tICcuL2RlYnVnVXRpbHMuanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuLi91dGlscy9kZWJ1Zy5qcydcbmltcG9ydCB7IGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkgfSBmcm9tICcuLi91dGlscy9kaWFnTG9ncy5qcydcbmltcG9ydCB7IGlzSW5Qcm90ZWN0ZWROYW1lc3BhY2UgfSBmcm9tICcuLi91dGlscy9lbnZVdGlscy5qcydcbmltcG9ydCB7IGVycm9yTWVzc2FnZSB9IGZyb20gJy4uL3V0aWxzL2Vycm9ycy5qcydcbmltcG9ydCB7IHNsZWVwIH0gZnJvbSAnLi4vdXRpbHMvc2xlZXAuanMnXG5pbXBvcnQgeyByZWdpc3RlckNsZWFudXAgfSBmcm9tICcuLi91dGlscy9jbGVhbnVwUmVnaXN0cnkuanMnXG5pbXBvcnQge1xuICB0eXBlIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gIGxvZ0V2ZW50LFxufSBmcm9tICcuLi9zZXJ2aWNlcy9hbmFseXRpY3MvaW5kZXguanMnXG5pbXBvcnQgdHlwZSB7IFJlcGxCcmlkZ2VIYW5kbGUsIEJyaWRnZVN0YXRlIH0gZnJvbSAnLi9yZXBsQnJpZGdlLmpzJ1xuaW1wb3J0IHR5cGUgeyBNZXNzYWdlIH0gZnJvbSAnLi4vdHlwZXMvbWVzc2FnZS5qcydcbmltcG9ydCB0eXBlIHsgU0RLTWVzc2FnZSB9IGZyb20gJy4uL2VudHJ5cG9pbnRzL2FnZW50U2RrVHlwZXMuanMnXG5pbXBvcnQgdHlwZSB7XG4gIFNES0NvbnRyb2xSZXF1ZXN0LFxuICBTREtDb250cm9sUmVzcG9uc2UsXG59IGZyb20gJy4uL2VudHJ5cG9pbnRzL3Nkay9jb250cm9sVHlwZXMuanMnXG5pbXBvcnQgdHlwZSB7IFBlcm1pc3Npb25Nb2RlIH0gZnJvbSAnLi4vdXRpbHMvcGVybWlzc2lvbnMvUGVybWlzc2lvbk1vZGUuanMnXG5cbmNvbnN0IEFOVEhST1BJQ19WRVJTSU9OID0gJzIwMjMtMDYtMDEnXG5cbi8vIFRlbGVtZXRyeSBkaXNjcmltaW5hdG9yIGZvciB3c19jb25uZWN0ZWQuICdpbml0aWFsJyBpcyB0aGUgZGVmYXVsdCBhbmRcbi8vIG5ldmVyIHBhc3NlZCB0byByZWJ1aWxkVHJhbnNwb3J0ICh3aGljaCBjYW4gb25seSBiZSBjYWxsZWQgcG9zdC1pbml0KTtcbi8vIEV4Y2x1ZGU8PiBtYWtlcyB0aGF0IGNvbnN0cmFpbnQgZXhwbGljaXQgYXQgYm90aCBzaWduYXR1cmVzLlxudHlwZSBDb25uZWN0Q2F1c2UgPSAnaW5pdGlhbCcgfCAncHJvYWN0aXZlX3JlZnJlc2gnIHwgJ2F1dGhfNDAxX3JlY292ZXJ5J1xuXG5mdW5jdGlvbiBvYXV0aEhlYWRlcnMoYWNjZXNzVG9rZW46IHN0cmluZyk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICByZXR1cm4ge1xuICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgJ2FudGhyb3BpYy12ZXJzaW9uJzogQU5USFJPUElDX1ZFUlNJT04sXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgRW52TGVzc0JyaWRnZVBhcmFtcyA9IHtcbiAgYmFzZVVybDogc3RyaW5nXG4gIG9yZ1VVSUQ6IHN0cmluZ1xuICB0aXRsZTogc3RyaW5nXG4gIGdldEFjY2Vzc1Rva2VuOiAoKSA9PiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgb25BdXRoNDAxPzogKHN0YWxlQWNjZXNzVG9rZW46IHN0cmluZykgPT4gUHJvbWlzZTxib29sZWFuPlxuICAvKipcbiAgICogQ29udmVydHMgaW50ZXJuYWwgTWVzc2FnZVtdIFx1MjE5MiBTREtNZXNzYWdlW10gZm9yIHdyaXRlTWVzc2FnZXMoKSBhbmQgdGhlXG4gICAqIGluaXRpYWwtZmx1c2gvZHJhaW4gcGF0aHMuIEluamVjdGVkIHJhdGhlciB0aGFuIGltcG9ydGVkIFx1MjAxNCBtYXBwZXJzLnRzXG4gICAqIHRyYW5zaXRpdmVseSBwdWxscyBpbiBzcmMvY29tbWFuZHMudHMgKGVudGlyZSBjb21tYW5kIHJlZ2lzdHJ5ICsgUmVhY3RcbiAgICogdHJlZSkgd2hpY2ggd291bGQgYmxvYXQgYnVuZGxlcyB0aGF0IGRvbid0IGFscmVhZHkgaGF2ZSBpdC5cbiAgICovXG4gIHRvU0RLTWVzc2FnZXM6IChtZXNzYWdlczogTWVzc2FnZVtdKSA9PiBTREtNZXNzYWdlW11cbiAgaW5pdGlhbEhpc3RvcnlDYXA6IG51bWJlclxuICBpbml0aWFsTWVzc2FnZXM/OiBNZXNzYWdlW11cbiAgb25JbmJvdW5kTWVzc2FnZT86IChtc2c6IFNES01lc3NhZ2UpID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG4gIC8qKlxuICAgKiBGaXJlZCBvbiBlYWNoIHRpdGxlLXdvcnRoeSB1c2VyIG1lc3NhZ2Ugc2VlbiBpbiB3cml0ZU1lc3NhZ2VzKCkgdW50aWxcbiAgICogdGhlIGNhbGxiYWNrIHJldHVybnMgdHJ1ZSAoZG9uZSkuIE1pcnJvcnMgcmVwbEJyaWRnZS50cydzIG9uVXNlck1lc3NhZ2UgXHUyMDE0XG4gICAqIGNhbGxlciBkZXJpdmVzIGEgdGl0bGUgYW5kIFBBVENIZXMgL3YxL3Nlc3Npb25zL3tpZH0gc28gYXV0by1zdGFydGVkXG4gICAqIHNlc3Npb25zIGRvbid0IHN0YXkgYXQgdGhlIGdlbmVyaWMgZmFsbGJhY2suIFRoZSBjYWxsZXIgb3ducyB0aGVcbiAgICogZGVyaXZlLWF0LWNvdW50LTEtYW5kLTMgcG9saWN5OyB0aGUgdHJhbnNwb3J0IGp1c3Qga2VlcHMgY2FsbGluZyB1bnRpbFxuICAgKiB0b2xkIHRvIHN0b3AuIHNlc3Npb25JZCBpcyB0aGUgcmF3IGNzZV8qIFx1MjAxNCB1cGRhdGVCcmlkZ2VTZXNzaW9uVGl0bGVcbiAgICogcmV0YWdzIGludGVybmFsbHkuXG4gICAqL1xuICBvblVzZXJNZXNzYWdlPzogKHRleHQ6IHN0cmluZywgc2Vzc2lvbklkOiBzdHJpbmcpID0+IGJvb2xlYW5cbiAgb25QZXJtaXNzaW9uUmVzcG9uc2U/OiAocmVzcG9uc2U6IFNES0NvbnRyb2xSZXNwb25zZSkgPT4gdm9pZFxuICBvbkludGVycnVwdD86ICgpID0+IHZvaWRcbiAgb25TZXRNb2RlbD86IChtb2RlbDogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB2b2lkXG4gIG9uU2V0TWF4VGhpbmtpbmdUb2tlbnM/OiAobWF4VG9rZW5zOiBudW1iZXIgfCBudWxsKSA9PiB2b2lkXG4gIG9uU2V0UGVybWlzc2lvbk1vZGU/OiAoXG4gICAgbW9kZTogUGVybWlzc2lvbk1vZGUsXG4gICkgPT4geyBvazogdHJ1ZSB9IHwgeyBvazogZmFsc2U7IGVycm9yOiBzdHJpbmcgfVxuICBvblN0YXRlQ2hhbmdlPzogKHN0YXRlOiBCcmlkZ2VTdGF0ZSwgZGV0YWlsPzogc3RyaW5nKSA9PiB2b2lkXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHNraXAgb3BlbmluZyB0aGUgU1NFIHJlYWQgc3RyZWFtIFx1MjAxNCBvbmx5IHRoZSBDQ1JDbGllbnQgd3JpdGVcbiAgICogcGF0aCBpcyBhY3RpdmF0ZWQuIFRocmVhZGVkIHRvIGNyZWF0ZVYyUmVwbFRyYW5zcG9ydCBhbmRcbiAgICogaGFuZGxlU2VydmVyQ29udHJvbFJlcXVlc3QuXG4gICAqL1xuICBvdXRib3VuZE9ubHk/OiBib29sZWFuXG4gIC8qKiBGcmVlLWZvcm0gdGFncyBmb3Igc2Vzc2lvbiBjYXRlZ29yaXphdGlvbiAoZS5nLiBbJ2Njci1taXJyb3InXSkuICovXG4gIHRhZ3M/OiBzdHJpbmdbXVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIHNlc3Npb24sIGZldGNoIGEgd29ya2VyIEpXVCwgY29ubmVjdCB0aGUgdjIgdHJhbnNwb3J0LlxuICpcbiAqIFJldHVybnMgbnVsbCBvbiBhbnkgcHJlLWZsaWdodCBmYWlsdXJlIChzZXNzaW9uIGNyZWF0ZSBmYWlsZWQsIC9icmlkZ2VcbiAqIGZhaWxlZCwgdHJhbnNwb3J0IHNldHVwIGZhaWxlZCkuIENhbGxlciAoaW5pdFJlcGxCcmlkZ2UpIHN1cmZhY2VzIHRoaXNcbiAqIGFzIGEgZ2VuZXJpYyBcImluaXRpYWxpemF0aW9uIGZhaWxlZFwiIHN0YXRlLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdEVudkxlc3NCcmlkZ2VDb3JlKFxuICBwYXJhbXM6IEVudkxlc3NCcmlkZ2VQYXJhbXMsXG4pOiBQcm9taXNlPFJlcGxCcmlkZ2VIYW5kbGUgfCBudWxsPiB7XG4gIGNvbnN0IHtcbiAgICBiYXNlVXJsLFxuICAgIG9yZ1VVSUQsXG4gICAgdGl0bGUsXG4gICAgZ2V0QWNjZXNzVG9rZW4sXG4gICAgb25BdXRoNDAxLFxuICAgIHRvU0RLTWVzc2FnZXMsXG4gICAgaW5pdGlhbEhpc3RvcnlDYXAsXG4gICAgaW5pdGlhbE1lc3NhZ2VzLFxuICAgIG9uSW5ib3VuZE1lc3NhZ2UsXG4gICAgb25Vc2VyTWVzc2FnZSxcbiAgICBvblBlcm1pc3Npb25SZXNwb25zZSxcbiAgICBvbkludGVycnVwdCxcbiAgICBvblNldE1vZGVsLFxuICAgIG9uU2V0TWF4VGhpbmtpbmdUb2tlbnMsXG4gICAgb25TZXRQZXJtaXNzaW9uTW9kZSxcbiAgICBvblN0YXRlQ2hhbmdlLFxuICAgIG91dGJvdW5kT25seSxcbiAgICB0YWdzLFxuICB9ID0gcGFyYW1zXG5cbiAgY29uc3QgY2ZnID0gYXdhaXQgZ2V0RW52TGVzc0JyaWRnZUNvbmZpZygpXG5cbiAgLy8gXHUyNTAwXHUyNTAwIDEuIENyZWF0ZSBzZXNzaW9uIChQT1NUIC92MS9jb2RlL3Nlc3Npb25zLCBubyBlbnZfaWQpIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IGdldEFjY2Vzc1Rva2VuKClcbiAgaWYgKCFhY2Nlc3NUb2tlbikge1xuICAgIGxvZ0ZvckRlYnVnZ2luZygnW3JlbW90ZS1icmlkZ2VdIE5vIE9BdXRoIHRva2VuJylcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgY3JlYXRlZFNlc3Npb25JZCA9IGF3YWl0IHdpdGhSZXRyeShcbiAgICAoKSA9PlxuICAgICAgY3JlYXRlQ29kZVNlc3Npb24oYmFzZVVybCwgYWNjZXNzVG9rZW4sIHRpdGxlLCBjZmcuaHR0cF90aW1lb3V0X21zLCB0YWdzKSxcbiAgICAnY3JlYXRlQ29kZVNlc3Npb24nLFxuICAgIGNmZyxcbiAgKVxuICBpZiAoIWNyZWF0ZWRTZXNzaW9uSWQpIHtcbiAgICBvblN0YXRlQ2hhbmdlPy4oJ2ZhaWxlZCcsICdTZXNzaW9uIGNyZWF0aW9uIGZhaWxlZCBcdTIwMTQgc2VlIGRlYnVnIGxvZycpXG4gICAgbG9nQnJpZGdlU2tpcCgndjJfc2Vzc2lvbl9jcmVhdGVfZmFpbGVkJywgdW5kZWZpbmVkLCB0cnVlKVxuICAgIHJldHVybiBudWxsXG4gIH1cbiAgY29uc3Qgc2Vzc2lvbklkOiBzdHJpbmcgPSBjcmVhdGVkU2Vzc2lvbklkXG4gIGxvZ0ZvckRlYnVnZ2luZyhgW3JlbW90ZS1icmlkZ2VdIENyZWF0ZWQgc2Vzc2lvbiAke3Nlc3Npb25JZH1gKVxuICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdpbmZvJywgJ2JyaWRnZV9yZXBsX3YyX3Nlc3Npb25fY3JlYXRlZCcpXG5cbiAgLy8gXHUyNTAwXHUyNTAwIDIuIEZldGNoIGJyaWRnZSBjcmVkZW50aWFscyAoUE9TVCAvYnJpZGdlIFx1MjE5MiB3b3JrZXJfand0LCBleHBpcmVzX2luLCBhcGlfYmFzZV91cmwpIFx1MjUwMFx1MjUwMFxuICBjb25zdCBjcmVkZW50aWFscyA9IGF3YWl0IHdpdGhSZXRyeShcbiAgICAoKSA9PlxuICAgICAgZmV0Y2hSZW1vdGVDcmVkZW50aWFscyhcbiAgICAgICAgc2Vzc2lvbklkLFxuICAgICAgICBiYXNlVXJsLFxuICAgICAgICBhY2Nlc3NUb2tlbixcbiAgICAgICAgY2ZnLmh0dHBfdGltZW91dF9tcyxcbiAgICAgICksXG4gICAgJ2ZldGNoUmVtb3RlQ3JlZGVudGlhbHMnLFxuICAgIGNmZyxcbiAgKVxuICBpZiAoIWNyZWRlbnRpYWxzKSB7XG4gICAgb25TdGF0ZUNoYW5nZT8uKCdmYWlsZWQnLCAnUmVtb3RlIGNyZWRlbnRpYWxzIGZldGNoIGZhaWxlZCBcdTIwMTQgc2VlIGRlYnVnIGxvZycpXG4gICAgbG9nQnJpZGdlU2tpcCgndjJfcmVtb3RlX2NyZWRzX2ZhaWxlZCcsIHVuZGVmaW5lZCwgdHJ1ZSlcbiAgICB2b2lkIGFyY2hpdmVTZXNzaW9uKFxuICAgICAgc2Vzc2lvbklkLFxuICAgICAgYmFzZVVybCxcbiAgICAgIGFjY2Vzc1Rva2VuLFxuICAgICAgb3JnVVVJRCxcbiAgICAgIGNmZy5odHRwX3RpbWVvdXRfbXMsXG4gICAgKVxuICAgIHJldHVybiBudWxsXG4gIH1cbiAgbG9nRm9yRGVidWdnaW5nKFxuICAgIGBbcmVtb3RlLWJyaWRnZV0gRmV0Y2hlZCBicmlkZ2UgY3JlZGVudGlhbHMgKGV4cGlyZXNfaW49JHtjcmVkZW50aWFscy5leHBpcmVzX2lufXMpYCxcbiAgKVxuXG4gIC8vIFx1MjUwMFx1MjUwMCAzLiBCdWlsZCB2MiB0cmFuc3BvcnQgKFNTRVRyYW5zcG9ydCArIENDUkNsaWVudCkgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG4gIGNvbnN0IHNlc3Npb25VcmwgPSBidWlsZENDUnYyU2RrVXJsKGNyZWRlbnRpYWxzLmFwaV9iYXNlX3VybCwgc2Vzc2lvbklkKVxuICBsb2dGb3JEZWJ1Z2dpbmcoYFtyZW1vdGUtYnJpZGdlXSB2MiBzZXNzaW9uIFVSTDogJHtzZXNzaW9uVXJsfWApXG5cbiAgbGV0IHRyYW5zcG9ydDogUmVwbEJyaWRnZVRyYW5zcG9ydFxuICB0cnkge1xuICAgIHRyYW5zcG9ydCA9IGF3YWl0IGNyZWF0ZVYyUmVwbFRyYW5zcG9ydCh7XG4gICAgICBzZXNzaW9uVXJsLFxuICAgICAgaW5ncmVzc1Rva2VuOiBjcmVkZW50aWFscy53b3JrZXJfand0LFxuICAgICAgc2Vzc2lvbklkLFxuICAgICAgZXBvY2g6IGNyZWRlbnRpYWxzLndvcmtlcl9lcG9jaCxcbiAgICAgIGhlYXJ0YmVhdEludGVydmFsTXM6IGNmZy5oZWFydGJlYXRfaW50ZXJ2YWxfbXMsXG4gICAgICBoZWFydGJlYXRKaXR0ZXJGcmFjdGlvbjogY2ZnLmhlYXJ0YmVhdF9qaXR0ZXJfZnJhY3Rpb24sXG4gICAgICAvLyBQZXItaW5zdGFuY2UgY2xvc3VyZSBcdTIwMTQga2VlcHMgdGhlIHdvcmtlciBKV1Qgb3V0IG9mXG4gICAgICAvLyBwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9TRVNTSU9OX0FDQ0VTU19UT0tFTiwgd2hpY2ggbWNwL2NsaWVudC50c1xuICAgICAgLy8gcmVhZHMgdW5nYXRlZGx5IGFuZCB3b3VsZCBvdGhlcndpc2Ugc2VuZCB0byB1c2VyLWNvbmZpZ3VyZWQgd3MvaHR0cFxuICAgICAgLy8gTUNQIHNlcnZlcnMuIEZyb3plbi1hdC1jb25zdHJ1Y3Rpb24gaXMgY29ycmVjdDogdHJhbnNwb3J0IGlzIGZ1bGx5XG4gICAgICAvLyByZWJ1aWx0IG9uIHJlZnJlc2ggKHJlYnVpbGRUcmFuc3BvcnQgYmVsb3cpLlxuICAgICAgZ2V0QXV0aFRva2VuOiAoKSA9PiBjcmVkZW50aWFscy53b3JrZXJfand0LFxuICAgICAgb3V0Ym91bmRPbmx5LFxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbcmVtb3RlLWJyaWRnZV0gdjIgdHJhbnNwb3J0IHNldHVwIGZhaWxlZDogJHtlcnJvck1lc3NhZ2UoZXJyKX1gLFxuICAgICAgeyBsZXZlbDogJ2Vycm9yJyB9LFxuICAgIClcbiAgICBvblN0YXRlQ2hhbmdlPy4oJ2ZhaWxlZCcsIGBUcmFuc3BvcnQgc2V0dXAgZmFpbGVkOiAke2Vycm9yTWVzc2FnZShlcnIpfWApXG4gICAgbG9nQnJpZGdlU2tpcCgndjJfdHJhbnNwb3J0X3NldHVwX2ZhaWxlZCcsIHVuZGVmaW5lZCwgdHJ1ZSlcbiAgICB2b2lkIGFyY2hpdmVTZXNzaW9uKFxuICAgICAgc2Vzc2lvbklkLFxuICAgICAgYmFzZVVybCxcbiAgICAgIGFjY2Vzc1Rva2VuLFxuICAgICAgb3JnVVVJRCxcbiAgICAgIGNmZy5odHRwX3RpbWVvdXRfbXMsXG4gICAgKVxuICAgIHJldHVybiBudWxsXG4gIH1cbiAgbG9nRm9yRGVidWdnaW5nKFxuICAgIGBbcmVtb3RlLWJyaWRnZV0gdjIgdHJhbnNwb3J0IGNyZWF0ZWQgKGVwb2NoPSR7Y3JlZGVudGlhbHMud29ya2VyX2Vwb2NofSlgLFxuICApXG4gIG9uU3RhdGVDaGFuZ2U/LigncmVhZHknKVxuXG4gIC8vIFx1MjUwMFx1MjUwMCA0LiBTdGF0ZSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuICAvLyBFY2hvIGRlZHVwOiBtZXNzYWdlcyB3ZSBQT1NUIGNvbWUgYmFjayBvbiB0aGUgcmVhZCBzdHJlYW0uIFNlZWRlZCB3aXRoXG4gIC8vIGluaXRpYWwgbWVzc2FnZSBVVUlEcyBzbyBzZXJ2ZXIgZWNob2VzIG9mIGZsdXNoZWQgaGlzdG9yeSBhcmUgcmVjb2duaXplZC5cbiAgLy8gQm90aCBzZXRzIGNvdmVyIGluaXRpYWwgVVVJRHMgXHUyMDE0IHJlY2VudFBvc3RlZFVVSURzIGlzIGEgMjAwMC1jYXAgcmluZyBidWZmZXJcbiAgLy8gYW5kIGNvdWxkIGV2aWN0IHRoZW0gYWZ0ZXIgZW5vdWdoIGxpdmUgd3JpdGVzOyBpbml0aWFsTWVzc2FnZVVVSURzIGlzIHRoZVxuICAvLyB1bmJvdW5kZWQgZmFsbGJhY2suIERlZmVuc2UtaW4tZGVwdGg7IG1pcnJvcnMgcmVwbEJyaWRnZS50cy5cbiAgY29uc3QgcmVjZW50UG9zdGVkVVVJRHMgPSBuZXcgQm91bmRlZFVVSURTZXQoY2ZnLnV1aWRfZGVkdXBfYnVmZmVyX3NpemUpXG4gIGNvbnN0IGluaXRpYWxNZXNzYWdlVVVJRHMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICBpZiAoaW5pdGlhbE1lc3NhZ2VzKSB7XG4gICAgZm9yIChjb25zdCBtc2cgb2YgaW5pdGlhbE1lc3NhZ2VzKSB7XG4gICAgICBpbml0aWFsTWVzc2FnZVVVSURzLmFkZChtc2cudXVpZClcbiAgICAgIHJlY2VudFBvc3RlZFVVSURzLmFkZChtc2cudXVpZClcbiAgICB9XG4gIH1cblxuICAvLyBEZWZlbnNpdmUgZGVkdXAgZm9yIHJlLWRlbGl2ZXJlZCBpbmJvdW5kIHByb21wdHMgKHNlcS1udW0gbmVnb3RpYXRpb25cbiAgLy8gZWRnZSBjYXNlcywgc2VydmVyIGhpc3RvcnkgcmVwbGF5IGFmdGVyIHRyYW5zcG9ydCBzd2FwKS5cbiAgY29uc3QgcmVjZW50SW5ib3VuZFVVSURzID0gbmV3IEJvdW5kZWRVVUlEU2V0KGNmZy51dWlkX2RlZHVwX2J1ZmZlcl9zaXplKVxuXG4gIC8vIEZsdXNoR2F0ZTogcXVldWUgbGl2ZSB3cml0ZXMgd2hpbGUgdGhlIGhpc3RvcnkgZmx1c2ggUE9TVCBpcyBpbiBmbGlnaHQsXG4gIC8vIHNvIHRoZSBzZXJ2ZXIgcmVjZWl2ZXMgW2hpc3RvcnkuLi4sIGxpdmUuLi5dIGluIG9yZGVyLlxuICBjb25zdCBmbHVzaEdhdGUgPSBuZXcgRmx1c2hHYXRlPE1lc3NhZ2U+KClcblxuICBsZXQgaW5pdGlhbEZsdXNoRG9uZSA9IGZhbHNlXG4gIGxldCB0b3JuRG93biA9IGZhbHNlXG4gIGxldCBhdXRoUmVjb3ZlcnlJbkZsaWdodCA9IGZhbHNlXG4gIC8vIExhdGNoIGZvciBvblVzZXJNZXNzYWdlIFx1MjAxNCBmbGlwcyB0cnVlIHdoZW4gdGhlIGNhbGxiYWNrIHJldHVybnMgdHJ1ZVxuICAvLyAocG9saWN5IHNheXMgXCJkb25lIGRlcml2aW5nXCIpLiBzZXNzaW9uSWQgaXMgY29uc3QgKG5vIHJlLWNyZWF0ZSBwYXRoIFx1MjAxNFxuICAvLyByZWJ1aWxkVHJhbnNwb3J0IHN3YXBzIEpXVC9lcG9jaCwgc2FtZSBzZXNzaW9uKSwgc28gbm8gcmVzZXQgbmVlZGVkLlxuICBsZXQgdXNlck1lc3NhZ2VDYWxsYmFja0RvbmUgPSAhb25Vc2VyTWVzc2FnZVxuXG4gIC8vIFRlbGVtZXRyeTogd2h5IGRpZCBvbkNvbm5lY3QgZmlyZT8gU2V0IGJ5IHJlYnVpbGRUcmFuc3BvcnQgYmVmb3JlXG4gIC8vIHdpcmVUcmFuc3BvcnRDYWxsYmFja3M7IHJlYWQgYXN5bmNocm9ub3VzbHkgYnkgb25Db25uZWN0LiBSYWNlLXNhZmVcbiAgLy8gYmVjYXVzZSBhdXRoUmVjb3ZlcnlJbkZsaWdodCBzZXJpYWxpemVzIHJlYnVpbGQgY2FsbGVycywgYW5kIGEgZnJlc2hcbiAgLy8gaW5pdEVudkxlc3NCcmlkZ2VDb3JlKCkgY2FsbCBnZXRzIGEgZnJlc2ggY2xvc3VyZSBkZWZhdWx0aW5nIHRvICdpbml0aWFsJy5cbiAgbGV0IGNvbm5lY3RDYXVzZTogQ29ubmVjdENhdXNlID0gJ2luaXRpYWwnXG5cbiAgLy8gRGVhZGxpbmUgZm9yIG9uQ29ubmVjdCBhZnRlciB0cmFuc3BvcnQuY29ubmVjdCgpLiBDbGVhcmVkIGJ5IG9uQ29ubmVjdFxuICAvLyAoY29ubmVjdGVkKSBhbmQgb25DbG9zZSAoZ290IGEgY2xvc2UgXHUyMDE0IG5vdCBzaWxlbnQpLiBJZiBuZWl0aGVyIGZpcmVzXG4gIC8vIGJlZm9yZSBjZmcuY29ubmVjdF90aW1lb3V0X21zLCBvbkNvbm5lY3RUaW1lb3V0IGVtaXRzIFx1MjAxNCB0aGUgb25seVxuICAvLyBzaWduYWwgZm9yIHRoZSBgc3RhcnRlZCBcdTIxOTIgKHNpbGVuY2UpYCBnYXAuXG4gIGxldCBjb25uZWN0RGVhZGxpbmU6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+IHwgdW5kZWZpbmVkXG4gIGZ1bmN0aW9uIG9uQ29ubmVjdFRpbWVvdXQoY2F1c2U6IENvbm5lY3RDYXVzZSk6IHZvaWQge1xuICAgIGlmICh0b3JuRG93bikgcmV0dXJuXG4gICAgbG9nRXZlbnQoJ3Rlbmd1X2JyaWRnZV9yZXBsX2Nvbm5lY3RfdGltZW91dCcsIHtcbiAgICAgIHYyOiB0cnVlLFxuICAgICAgZWxhcHNlZF9tczogY2ZnLmNvbm5lY3RfdGltZW91dF9tcyxcbiAgICAgIGNhdXNlOlxuICAgICAgICBjYXVzZSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgIH0pXG4gIH1cblxuICAvLyBcdTI1MDBcdTI1MDAgNS4gSldUIHJlZnJlc2ggc2NoZWR1bGVyIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuICAvLyBTY2hlZHVsZSBhIGNhbGxiYWNrIDVtaW4gYmVmb3JlIGV4cGlyeSAocGVyIHJlc3BvbnNlLmV4cGlyZXNfaW4pLiBPbiBmaXJlLFxuICAvLyByZS1mZXRjaCAvYnJpZGdlIHdpdGggT0F1dGggXHUyMTkyIHJlYnVpbGQgdHJhbnNwb3J0IHdpdGggZnJlc2ggY3JlZGVudGlhbHMuXG4gIC8vIEVhY2ggL2JyaWRnZSBjYWxsIGJ1bXBzIGVwb2NoIHNlcnZlci1zaWRlLCBzbyBhIEpXVC1vbmx5IHN3YXAgd291bGQgbGVhdmVcbiAgLy8gdGhlIG9sZCBDQ1JDbGllbnQgaGVhcnRiZWF0aW5nIHdpdGggYSBzdGFsZSBlcG9jaCBcdTIxOTIgNDA5IHdpdGhpbiAyMHMuXG4gIC8vIEpXVCBpcyBvcGFxdWUgXHUyMDE0IGRvIG5vdCBkZWNvZGUuXG4gIGNvbnN0IHJlZnJlc2ggPSBjcmVhdGVUb2tlblJlZnJlc2hTY2hlZHVsZXIoe1xuICAgIHJlZnJlc2hCdWZmZXJNczogY2ZnLnRva2VuX3JlZnJlc2hfYnVmZmVyX21zLFxuICAgIGdldEFjY2Vzc1Rva2VuOiBhc3luYyAoKSA9PiB7XG4gICAgICAvLyBVbmNvbmRpdGlvbmFsbHkgcmVmcmVzaCBPQXV0aCBiZWZvcmUgY2FsbGluZyAvYnJpZGdlIFx1MjAxNCBnZXRBY2Nlc3NUb2tlbigpXG4gICAgICAvLyByZXR1cm5zIGV4cGlyZWQgdG9rZW5zIGFzIG5vbi1udWxsIHN0cmluZ3MgKGRvZXNuJ3QgY2hlY2sgZXhwaXJlc0F0KSxcbiAgICAgIC8vIHNvIHRydXRoaW5lc3MgZG9lc24ndCBtZWFuIHZhbGlkLiBQYXNzIHRoZSBzdGFsZSB0b2tlbiB0byBvbkF1dGg0MDFcbiAgICAgIC8vIHNvIGhhbmRsZU9BdXRoNDAxRXJyb3IncyBrZXljaGFpbi1jb21wYXJpc29uIGNhbiBkZXRlY3QgcGFyYWxsZWwgcmVmcmVzaC5cbiAgICAgIGNvbnN0IHN0YWxlID0gZ2V0QWNjZXNzVG9rZW4oKVxuICAgICAgaWYgKG9uQXV0aDQwMSkgYXdhaXQgb25BdXRoNDAxKHN0YWxlID8/ICcnKVxuICAgICAgcmV0dXJuIGdldEFjY2Vzc1Rva2VuKCkgPz8gc3RhbGVcbiAgICB9LFxuICAgIG9uUmVmcmVzaDogKHNpZCwgb2F1dGhUb2tlbikgPT4ge1xuICAgICAgdm9pZCAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAvLyBMYXB0b3Agd2FrZTogb3ZlcmR1ZSBwcm9hY3RpdmUgdGltZXIgKyBTU0UgNDAxIGZpcmUgfnNpbXVsdGFuZW91c2x5LlxuICAgICAgICAvLyBDbGFpbSB0aGUgZmxhZyBCRUZPUkUgdGhlIC9icmlkZ2UgZmV0Y2ggc28gdGhlIG90aGVyIHBhdGggc2tpcHNcbiAgICAgICAgLy8gZW50aXJlbHkgXHUyMDE0IHByZXZlbnRzIGRvdWJsZSBlcG9jaCBidW1wIChlYWNoIC9icmlkZ2UgY2FsbCBidW1wczsgaWZcbiAgICAgICAgLy8gYm90aCBmZXRjaCwgdGhlIGZpcnN0IHJlYnVpbGQgZ2V0cyBhIHN0YWxlIGVwb2NoIGFuZCA0MDlzKS5cbiAgICAgICAgaWYgKGF1dGhSZWNvdmVyeUluRmxpZ2h0IHx8IHRvcm5Eb3duKSB7XG4gICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgJ1tyZW1vdGUtYnJpZGdlXSBSZWNvdmVyeSBhbHJlYWR5IGluIGZsaWdodCwgc2tpcHBpbmcgcHJvYWN0aXZlIHJlZnJlc2gnLFxuICAgICAgICAgIClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBhdXRoUmVjb3ZlcnlJbkZsaWdodCA9IHRydWVcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBmcmVzaCA9IGF3YWl0IHdpdGhSZXRyeShcbiAgICAgICAgICAgICgpID0+XG4gICAgICAgICAgICAgIGZldGNoUmVtb3RlQ3JlZGVudGlhbHMoXG4gICAgICAgICAgICAgICAgc2lkLFxuICAgICAgICAgICAgICAgIGJhc2VVcmwsXG4gICAgICAgICAgICAgICAgb2F1dGhUb2tlbixcbiAgICAgICAgICAgICAgICBjZmcuaHR0cF90aW1lb3V0X21zLFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgJ2ZldGNoUmVtb3RlQ3JlZGVudGlhbHMgKHByb2FjdGl2ZSknLFxuICAgICAgICAgICAgY2ZnLFxuICAgICAgICAgIClcbiAgICAgICAgICBpZiAoIWZyZXNoIHx8IHRvcm5Eb3duKSByZXR1cm5cbiAgICAgICAgICBhd2FpdCByZWJ1aWxkVHJhbnNwb3J0KGZyZXNoLCAncHJvYWN0aXZlX3JlZnJlc2gnKVxuICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICdbcmVtb3RlLWJyaWRnZV0gVHJhbnNwb3J0IHJlYnVpbHQgKHByb2FjdGl2ZSByZWZyZXNoKScsXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICBgW3JlbW90ZS1icmlkZ2VdIFByb2FjdGl2ZSByZWZyZXNoIHJlYnVpbGQgZmFpbGVkOiAke2Vycm9yTWVzc2FnZShlcnIpfWAsXG4gICAgICAgICAgICB7IGxldmVsOiAnZXJyb3InIH0sXG4gICAgICAgICAgKVxuICAgICAgICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoXG4gICAgICAgICAgICAnZXJyb3InLFxuICAgICAgICAgICAgJ2JyaWRnZV9yZXBsX3YyX3Byb2FjdGl2ZV9yZWZyZXNoX2ZhaWxlZCcsXG4gICAgICAgICAgKVxuICAgICAgICAgIGlmICghdG9ybkRvd24pIHtcbiAgICAgICAgICAgIG9uU3RhdGVDaGFuZ2U/LignZmFpbGVkJywgYFJlZnJlc2ggZmFpbGVkOiAke2Vycm9yTWVzc2FnZShlcnIpfWApXG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGF1dGhSZWNvdmVyeUluRmxpZ2h0ID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSkoKVxuICAgIH0sXG4gICAgbGFiZWw6ICdyZW1vdGUnLFxuICB9KVxuICByZWZyZXNoLnNjaGVkdWxlRnJvbUV4cGlyZXNJbihzZXNzaW9uSWQsIGNyZWRlbnRpYWxzLmV4cGlyZXNfaW4pXG5cbiAgLy8gXHUyNTAwXHUyNTAwIDYuIFdpcmUgY2FsbGJhY2tzIChleHRyYWN0ZWQgc28gdHJhbnNwb3J0LXJlYnVpbGQgY2FuIHJlLXdpcmUpIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuICBmdW5jdGlvbiB3aXJlVHJhbnNwb3J0Q2FsbGJhY2tzKCk6IHZvaWQge1xuICAgIHRyYW5zcG9ydC5zZXRPbkNvbm5lY3QoKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KGNvbm5lY3REZWFkbGluZSlcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZygnW3JlbW90ZS1icmlkZ2VdIHYyIHRyYW5zcG9ydCBjb25uZWN0ZWQnKVxuICAgICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnaW5mbycsICdicmlkZ2VfcmVwbF92Ml90cmFuc3BvcnRfY29ubmVjdGVkJylcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9icmlkZ2VfcmVwbF93c19jb25uZWN0ZWQnLCB7XG4gICAgICAgIHYyOiB0cnVlLFxuICAgICAgICBjYXVzZTpcbiAgICAgICAgICBjb25uZWN0Q2F1c2UgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgIH0pXG5cbiAgICAgIGlmICghaW5pdGlhbEZsdXNoRG9uZSAmJiBpbml0aWFsTWVzc2FnZXMgJiYgaW5pdGlhbE1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaW5pdGlhbEZsdXNoRG9uZSA9IHRydWVcbiAgICAgICAgLy8gQ2FwdHVyZSBjdXJyZW50IHRyYW5zcG9ydCBcdTIwMTQgaWYgNDAxL3RlYXJkb3duIGhhcHBlbnMgbWlkLWZsdXNoLFxuICAgICAgICAvLyB0aGUgc3RhbGUgLmZpbmFsbHkoKSBtdXN0IG5vdCBkcmFpbiB0aGUgZ2F0ZSBvciBzaWduYWwgY29ubmVjdGVkLlxuICAgICAgICAvLyAoU2FtZSBndWFyZCBwYXR0ZXJuIGFzIHJlcGxCcmlkZ2UudHM6MTExOS4pXG4gICAgICAgIGNvbnN0IGZsdXNoVHJhbnNwb3J0ID0gdHJhbnNwb3J0XG4gICAgICAgIHZvaWQgZmx1c2hIaXN0b3J5KGluaXRpYWxNZXNzYWdlcylcbiAgICAgICAgICAuY2F0Y2goZSA9PlxuICAgICAgICAgICAgbG9nRm9yRGVidWdnaW5nKGBbcmVtb3RlLWJyaWRnZV0gZmx1c2hIaXN0b3J5IGZhaWxlZDogJHtlfWApLFxuICAgICAgICAgIClcbiAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAvLyBhdXRoUmVjb3ZlcnlJbkZsaWdodCBjYXRjaGVzIHRoZSB2MS12cy12MiBhc3ltbWV0cnk6IHYxIG51bGxzXG4gICAgICAgICAgICAvLyB0cmFuc3BvcnQgc3luY2hyb25vdXNseSBpbiBzZXRPbkNsb3NlIChyZXBsQnJpZGdlLnRzOjExNzUpLCBzb1xuICAgICAgICAgICAgLy8gdHJhbnNwb3J0ICE9PSBmbHVzaFRyYW5zcG9ydCB0cmlwcyBpbW1lZGlhdGVseS4gdjIgZG9lc24ndCBudWxsIFx1MjAxNFxuICAgICAgICAgICAgLy8gdHJhbnNwb3J0IHJlYXNzaWduZWQgb25seSBhdCByZWJ1aWxkVHJhbnNwb3J0OjM0NiwgMyBhd2FpdHMgZGVlcC5cbiAgICAgICAgICAgIC8vIGF1dGhSZWNvdmVyeUluRmxpZ2h0IGlzIHNldCBzeW5jaHJvbm91c2x5IGF0IHJlYnVpbGRUcmFuc3BvcnQgZW50cnkuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRyYW5zcG9ydCAhPT0gZmx1c2hUcmFuc3BvcnQgfHxcbiAgICAgICAgICAgICAgdG9ybkRvd24gfHxcbiAgICAgICAgICAgICAgYXV0aFJlY292ZXJ5SW5GbGlnaHRcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRyYWluRmx1c2hHYXRlKClcbiAgICAgICAgICAgIG9uU3RhdGVDaGFuZ2U/LignY29ubmVjdGVkJylcbiAgICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmICghZmx1c2hHYXRlLmFjdGl2ZSkge1xuICAgICAgICBvblN0YXRlQ2hhbmdlPy4oJ2Nvbm5lY3RlZCcpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRyYW5zcG9ydC5zZXRPbkRhdGEoKGRhdGE6IHN0cmluZykgPT4ge1xuICAgICAgaGFuZGxlSW5ncmVzc01lc3NhZ2UoXG4gICAgICAgIGRhdGEsXG4gICAgICAgIHJlY2VudFBvc3RlZFVVSURzLFxuICAgICAgICByZWNlbnRJbmJvdW5kVVVJRHMsXG4gICAgICAgIG9uSW5ib3VuZE1lc3NhZ2UsXG4gICAgICAgIC8vIFJlbW90ZSBjbGllbnQgYW5zd2VyZWQgdGhlIHBlcm1pc3Npb24gcHJvbXB0IFx1MjAxNCB0aGUgdHVybiByZXN1bWVzLlxuICAgICAgICAvLyBXaXRob3V0IHRoaXMgdGhlIHNlcnZlciBzdGF5cyBvbiByZXF1aXJlc19hY3Rpb24gdW50aWwgdGhlIG5leHRcbiAgICAgICAgLy8gdXNlciBtZXNzYWdlIG9yIHR1cm4tZW5kIHJlc3VsdC5cbiAgICAgICAgb25QZXJtaXNzaW9uUmVzcG9uc2VcbiAgICAgICAgICA/IHJlcyA9PiB7XG4gICAgICAgICAgICAgIHRyYW5zcG9ydC5yZXBvcnRTdGF0ZSgncnVubmluZycpXG4gICAgICAgICAgICAgIG9uUGVybWlzc2lvblJlc3BvbnNlKHJlcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgcmVxID0+XG4gICAgICAgICAgaGFuZGxlU2VydmVyQ29udHJvbFJlcXVlc3QocmVxLCB7XG4gICAgICAgICAgICB0cmFuc3BvcnQsXG4gICAgICAgICAgICBzZXNzaW9uSWQsXG4gICAgICAgICAgICBvbkludGVycnVwdCxcbiAgICAgICAgICAgIG9uU2V0TW9kZWwsXG4gICAgICAgICAgICBvblNldE1heFRoaW5raW5nVG9rZW5zLFxuICAgICAgICAgICAgb25TZXRQZXJtaXNzaW9uTW9kZSxcbiAgICAgICAgICAgIG91dGJvdW5kT25seSxcbiAgICAgICAgICB9KSxcbiAgICAgIClcbiAgICB9KVxuXG4gICAgdHJhbnNwb3J0LnNldE9uQ2xvc2UoKGNvZGU/OiBudW1iZXIpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dChjb25uZWN0RGVhZGxpbmUpXG4gICAgICBpZiAodG9ybkRvd24pIHJldHVyblxuICAgICAgbG9nRm9yRGVidWdnaW5nKGBbcmVtb3RlLWJyaWRnZV0gdjIgdHJhbnNwb3J0IGNsb3NlZCAoY29kZT0ke2NvZGV9KWApXG4gICAgICBsb2dFdmVudCgndGVuZ3VfYnJpZGdlX3JlcGxfd3NfY2xvc2VkJywgeyBjb2RlLCB2MjogdHJ1ZSB9KVxuICAgICAgLy8gb25DbG9zZSBmaXJlcyBvbmx5IGZvciBURVJNSU5BTCBmYWlsdXJlczogNDAxIChKV1QgaW52YWxpZCksXG4gICAgICAvLyA0MDkwIChDQ1IgZXBvY2ggbWlzbWF0Y2gpLCA0MDkxIChDQ1IgaW5pdCBmYWlsZWQpLCBvciBTU0UgMTAtbWluXG4gICAgICAvLyByZWNvbm5lY3QgYnVkZ2V0IGV4aGF1c3RlZC4gVHJhbnNpZW50IGRpc2Nvbm5lY3RzIGFyZSBoYW5kbGVkXG4gICAgICAvLyB0cmFuc3BhcmVudGx5IGluc2lkZSBTU0VUcmFuc3BvcnQuIDQwMSB3ZSBjYW4gcmVjb3ZlciBmcm9tIChmZXRjaFxuICAgICAgLy8gZnJlc2ggSldULCByZWJ1aWxkIHRyYW5zcG9ydCk7IGFsbCBvdGhlciBjb2RlcyBhcmUgZGVhZC1lbmRzLlxuICAgICAgaWYgKGNvZGUgPT09IDQwMSAmJiAhYXV0aFJlY292ZXJ5SW5GbGlnaHQpIHtcbiAgICAgICAgdm9pZCByZWNvdmVyRnJvbUF1dGhGYWlsdXJlKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBvblN0YXRlQ2hhbmdlPy4oJ2ZhaWxlZCcsIGBUcmFuc3BvcnQgY2xvc2VkIChjb2RlICR7Y29kZX0pYClcbiAgICB9KVxuICB9XG5cbiAgLy8gXHUyNTAwXHUyNTAwIDcuIFRyYW5zcG9ydCByZWJ1aWxkIChzaGFyZWQgYnkgcHJvYWN0aXZlIHJlZnJlc2ggKyA0MDEgcmVjb3ZlcnkpIFx1MjUwMFx1MjUwMFxuICAvLyBFdmVyeSAvYnJpZGdlIGNhbGwgYnVtcHMgZXBvY2ggc2VydmVyLXNpZGUuIEJvdGggcmVmcmVzaCBwYXRocyBtdXN0XG4gIC8vIHJlYnVpbGQgdGhlIHRyYW5zcG9ydCB3aXRoIHRoZSBuZXcgZXBvY2ggXHUyMDE0IGEgSldULW9ubHkgc3dhcCBsZWF2ZXMgdGhlXG4gIC8vIG9sZCBDQ1JDbGllbnQgaGVhcnRiZWF0aW5nIHN0YWxlIGVwb2NoIFx1MjE5MiA0MDkuIFNTRSByZXN1bWVzIGZyb20gdGhlIG9sZFxuICAvLyB0cmFuc3BvcnQncyBoaWdoLXdhdGVyLW1hcmsgc2VxLW51bSBzbyBubyBzZXJ2ZXItc2lkZSByZXBsYXkuXG4gIC8vIENhbGxlciBNVVNUIHNldCBhdXRoUmVjb3ZlcnlJbkZsaWdodCA9IHRydWUgYmVmb3JlIGNhbGxpbmcgKHN5bmNocm9ub3VzbHksXG4gIC8vIGJlZm9yZSBhbnkgYXdhaXQpIGFuZCBjbGVhciBpdCBpbiBhIGZpbmFsbHkuIFRoaXMgZnVuY3Rpb24gZG9lc24ndCBtYW5hZ2VcbiAgLy8gdGhlIGZsYWcgXHUyMDE0IG1vdmluZyBpdCBoZXJlIHdvdWxkIGJlIHRvbyBsYXRlIHRvIHByZXZlbnQgYSBkb3VibGUgL2JyaWRnZVxuICAvLyBmZXRjaCwgYW5kIGVhY2ggZmV0Y2ggYnVtcHMgZXBvY2guXG4gIGFzeW5jIGZ1bmN0aW9uIHJlYnVpbGRUcmFuc3BvcnQoXG4gICAgZnJlc2g6IFJlbW90ZUNyZWRlbnRpYWxzLFxuICAgIGNhdXNlOiBFeGNsdWRlPENvbm5lY3RDYXVzZSwgJ2luaXRpYWwnPixcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29ubmVjdENhdXNlID0gY2F1c2VcbiAgICAvLyBRdWV1ZSB3cml0ZXMgZHVyaW5nIHJlYnVpbGQgXHUyMDE0IG9uY2UgL2JyaWRnZSByZXR1cm5zLCB0aGUgb2xkIHRyYW5zcG9ydCdzXG4gICAgLy8gZXBvY2ggaXMgc3RhbGUgYW5kIGl0cyBuZXh0IHdyaXRlL2hlYXJ0YmVhdCA0MDlzLiBXaXRob3V0IHRoaXMgZ2F0ZSxcbiAgICAvLyB3cml0ZU1lc3NhZ2VzIGFkZHMgVVVJRHMgdG8gcmVjZW50UG9zdGVkVVVJRHMgdGhlbiB3cml0ZUJhdGNoIHNpbGVudGx5XG4gICAgLy8gbm8tb3BzIChjbG9zZWQgdXBsb2FkZXIgYWZ0ZXIgNDA5KSBcdTIxOTIgcGVybWFuZW50IHNpbGVudCBtZXNzYWdlIGxvc3MuXG4gICAgZmx1c2hHYXRlLnN0YXJ0KClcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2VxID0gdHJhbnNwb3J0LmdldExhc3RTZXF1ZW5jZU51bSgpXG4gICAgICB0cmFuc3BvcnQuY2xvc2UoKVxuICAgICAgdHJhbnNwb3J0ID0gYXdhaXQgY3JlYXRlVjJSZXBsVHJhbnNwb3J0KHtcbiAgICAgICAgc2Vzc2lvblVybDogYnVpbGRDQ1J2MlNka1VybChmcmVzaC5hcGlfYmFzZV91cmwsIHNlc3Npb25JZCksXG4gICAgICAgIGluZ3Jlc3NUb2tlbjogZnJlc2gud29ya2VyX2p3dCxcbiAgICAgICAgc2Vzc2lvbklkLFxuICAgICAgICBlcG9jaDogZnJlc2gud29ya2VyX2Vwb2NoLFxuICAgICAgICBoZWFydGJlYXRJbnRlcnZhbE1zOiBjZmcuaGVhcnRiZWF0X2ludGVydmFsX21zLFxuICAgICAgICBoZWFydGJlYXRKaXR0ZXJGcmFjdGlvbjogY2ZnLmhlYXJ0YmVhdF9qaXR0ZXJfZnJhY3Rpb24sXG4gICAgICAgIGluaXRpYWxTZXF1ZW5jZU51bTogc2VxLFxuICAgICAgICBnZXRBdXRoVG9rZW46ICgpID0+IGZyZXNoLndvcmtlcl9qd3QsXG4gICAgICAgIG91dGJvdW5kT25seSxcbiAgICAgIH0pXG4gICAgICBpZiAodG9ybkRvd24pIHtcbiAgICAgICAgLy8gVGVhcmRvd24gZmlyZWQgZHVyaW5nIHRoZSBhc3luYyBjcmVhdGVWMlJlcGxUcmFuc3BvcnQgd2luZG93LlxuICAgICAgICAvLyBEb24ndCB3aXJlL2Nvbm5lY3Qvc2NoZWR1bGUgXHUyMDE0IHdlJ2QgcmUtYXJtIHRpbWVycyBhZnRlciBjYW5jZWxBbGwoKVxuICAgICAgICAvLyBhbmQgZmlyZSBvbkluYm91bmRNZXNzYWdlIGludG8gYSB0b3JuLWRvd24gYnJpZGdlLlxuICAgICAgICB0cmFuc3BvcnQuY2xvc2UoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHdpcmVUcmFuc3BvcnRDYWxsYmFja3MoKVxuICAgICAgdHJhbnNwb3J0LmNvbm5lY3QoKVxuICAgICAgY29ubmVjdERlYWRsaW5lID0gc2V0VGltZW91dChcbiAgICAgICAgb25Db25uZWN0VGltZW91dCxcbiAgICAgICAgY2ZnLmNvbm5lY3RfdGltZW91dF9tcyxcbiAgICAgICAgY29ubmVjdENhdXNlLFxuICAgICAgKVxuICAgICAgcmVmcmVzaC5zY2hlZHVsZUZyb21FeHBpcmVzSW4oc2Vzc2lvbklkLCBmcmVzaC5leHBpcmVzX2luKVxuICAgICAgLy8gRHJhaW4gcXVldWVkIHdyaXRlcyBpbnRvIHRoZSBuZXcgdXBsb2FkZXIuIFJ1bnMgYmVmb3JlXG4gICAgICAvLyBjY3IuaW5pdGlhbGl6ZSgpIHJlc29sdmVzICh0cmFuc3BvcnQuY29ubmVjdCgpIGlzIGZpcmUtYW5kLWZvcmdldCksXG4gICAgICAvLyBidXQgdGhlIHVwbG9hZGVyIHNlcmlhbGl6ZXMgYmVoaW5kIHRoZSBpbml0aWFsIFBVVCAvd29ya2VyLiBJZlxuICAgICAgLy8gaW5pdCBmYWlscyAoNDA5MSksIGV2ZW50cyBkcm9wIFx1MjAxNCBidXQgb25seSByZWNlbnRQb3N0ZWRVVUlEc1xuICAgICAgLy8gKHBlci1pbnN0YW5jZSkgaXMgcG9wdWxhdGVkLCBzbyByZS1lbmFibGluZyB0aGUgYnJpZGdlIHJlLWZsdXNoZXMuXG4gICAgICBkcmFpbkZsdXNoR2F0ZSgpXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIC8vIEVuZCB0aGUgZ2F0ZSBvbiBmYWlsdXJlIHBhdGhzIHRvbyBcdTIwMTQgZHJhaW5GbHVzaEdhdGUgYWxyZWFkeSBlbmRlZFxuICAgICAgLy8gaXQgb24gc3VjY2Vzcy4gUXVldWVkIG1lc3NhZ2VzIGFyZSBkcm9wcGVkICh0cmFuc3BvcnQgc3RpbGwgZGVhZCkuXG4gICAgICBmbHVzaEdhdGUuZHJvcCgpXG4gICAgfVxuICB9XG5cbiAgLy8gXHUyNTAwXHUyNTAwIDguIDQwMSByZWNvdmVyeSAoT0F1dGggcmVmcmVzaCArIHJlYnVpbGQpIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuICBhc3luYyBmdW5jdGlvbiByZWNvdmVyRnJvbUF1dGhGYWlsdXJlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIHNldE9uQ2xvc2UgYWxyZWFkeSBndWFyZHMgYCFhdXRoUmVjb3ZlcnlJbkZsaWdodGAgYnV0IHRoYXQgY2hlY2sgYW5kXG4gICAgLy8gdGhpcyBzZXQgbXVzdCBiZSBhdG9taWMgYWdhaW5zdCBvblJlZnJlc2ggXHUyMDE0IGNsYWltIHN5bmNocm9ub3VzbHkgYmVmb3JlXG4gICAgLy8gYW55IGF3YWl0LiBMYXB0b3Agd2FrZSBmaXJlcyBib3RoIHBhdGhzIH5zaW11bHRhbmVvdXNseS5cbiAgICBpZiAoYXV0aFJlY292ZXJ5SW5GbGlnaHQpIHJldHVyblxuICAgIGF1dGhSZWNvdmVyeUluRmxpZ2h0ID0gdHJ1ZVxuICAgIG9uU3RhdGVDaGFuZ2U/LigncmVjb25uZWN0aW5nJywgJ0pXVCBleHBpcmVkIFx1MjAxNCByZWZyZXNoaW5nJylcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoJ1tyZW1vdGUtYnJpZGdlXSA0MDEgb24gU1NFIFx1MjAxNCBhdHRlbXB0aW5nIEpXVCByZWZyZXNoJylcbiAgICB0cnkge1xuICAgICAgLy8gVW5jb25kaXRpb25hbGx5IHRyeSBPQXV0aCByZWZyZXNoIFx1MjAxNCBnZXRBY2Nlc3NUb2tlbigpIHJldHVybnMgZXhwaXJlZFxuICAgICAgLy8gdG9rZW5zIGFzIG5vbi1udWxsIHN0cmluZ3MsIHNvICFvYXV0aFRva2VuIGRvZXNuJ3QgY2F0Y2ggZXhwaXJ5LlxuICAgICAgLy8gUGFzcyB0aGUgc3RhbGUgdG9rZW4gc28gaGFuZGxlT0F1dGg0MDFFcnJvcidzIGtleWNoYWluLWNvbXBhcmlzb25cbiAgICAgIC8vIGNhbiBkZXRlY3QgaWYgYW5vdGhlciB0YWIgYWxyZWFkeSByZWZyZXNoZWQuXG4gICAgICBjb25zdCBzdGFsZSA9IGdldEFjY2Vzc1Rva2VuKClcbiAgICAgIGlmIChvbkF1dGg0MDEpIGF3YWl0IG9uQXV0aDQwMShzdGFsZSA/PyAnJylcbiAgICAgIGNvbnN0IG9hdXRoVG9rZW4gPSBnZXRBY2Nlc3NUb2tlbigpID8/IHN0YWxlXG4gICAgICBpZiAoIW9hdXRoVG9rZW4gfHwgdG9ybkRvd24pIHtcbiAgICAgICAgaWYgKCF0b3JuRG93bikge1xuICAgICAgICAgIG9uU3RhdGVDaGFuZ2U/LignZmFpbGVkJywgJ0pXVCByZWZyZXNoIGZhaWxlZDogbm8gT0F1dGggdG9rZW4nKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBmcmVzaCA9IGF3YWl0IHdpdGhSZXRyeShcbiAgICAgICAgKCkgPT5cbiAgICAgICAgICBmZXRjaFJlbW90ZUNyZWRlbnRpYWxzKFxuICAgICAgICAgICAgc2Vzc2lvbklkLFxuICAgICAgICAgICAgYmFzZVVybCxcbiAgICAgICAgICAgIG9hdXRoVG9rZW4sXG4gICAgICAgICAgICBjZmcuaHR0cF90aW1lb3V0X21zLFxuICAgICAgICAgICksXG4gICAgICAgICdmZXRjaFJlbW90ZUNyZWRlbnRpYWxzIChyZWNvdmVyeSknLFxuICAgICAgICBjZmcsXG4gICAgICApXG4gICAgICBpZiAoIWZyZXNoIHx8IHRvcm5Eb3duKSB7XG4gICAgICAgIGlmICghdG9ybkRvd24pIHtcbiAgICAgICAgICBvblN0YXRlQ2hhbmdlPy4oJ2ZhaWxlZCcsICdKV1QgcmVmcmVzaCBmYWlsZWQgYWZ0ZXIgNDAxJylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIC8vIElmIDQwMSBpbnRlcnJ1cHRlZCB0aGUgaW5pdGlhbCBmbHVzaCwgd3JpdGVCYXRjaCBtYXkgaGF2ZSBzaWxlbnRseVxuICAgICAgLy8gbm8tb3AnZCBvbiB0aGUgY2xvc2VkIHVwbG9hZGVyIChjY3IuY2xvc2UoKSByYW4gaW4gdGhlIFNTRSB3cmFwcGVyXG4gICAgICAvLyBiZWZvcmUgb3VyIHNldE9uQ2xvc2UgY2FsbGJhY2spLiBSZXNldCBzbyB0aGUgbmV3IG9uQ29ubmVjdCByZS1mbHVzaGVzLlxuICAgICAgLy8gKHYxIHNjb3BlcyBpbml0aWFsRmx1c2hEb25lIGluc2lkZSB0aGUgcGVyLXRyYW5zcG9ydCBjbG9zdXJlIGF0XG4gICAgICAvLyByZXBsQnJpZGdlLnRzOjEwMjcgc28gaXQgcmVzZXRzIG5hdHVyYWxseTsgdjIgaGFzIGl0IGF0IG91dGVyIHNjb3BlLilcbiAgICAgIGluaXRpYWxGbHVzaERvbmUgPSBmYWxzZVxuICAgICAgYXdhaXQgcmVidWlsZFRyYW5zcG9ydChmcmVzaCwgJ2F1dGhfNDAxX3JlY292ZXJ5JylcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZygnW3JlbW90ZS1icmlkZ2VdIFRyYW5zcG9ydCByZWJ1aWx0IGFmdGVyIDQwMScpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBbcmVtb3RlLWJyaWRnZV0gNDAxIHJlY292ZXJ5IGZhaWxlZDogJHtlcnJvck1lc3NhZ2UoZXJyKX1gLFxuICAgICAgICB7IGxldmVsOiAnZXJyb3InIH0sXG4gICAgICApXG4gICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdlcnJvcicsICdicmlkZ2VfcmVwbF92Ml9qd3RfcmVmcmVzaF9mYWlsZWQnKVxuICAgICAgaWYgKCF0b3JuRG93bikge1xuICAgICAgICBvblN0YXRlQ2hhbmdlPy4oJ2ZhaWxlZCcsIGBKV1QgcmVmcmVzaCBmYWlsZWQ6ICR7ZXJyb3JNZXNzYWdlKGVycil9YClcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgYXV0aFJlY292ZXJ5SW5GbGlnaHQgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHdpcmVUcmFuc3BvcnRDYWxsYmFja3MoKVxuXG4gIC8vIFN0YXJ0IGZsdXNoR2F0ZSBCRUZPUkUgY29ubmVjdCBzbyB3cml0ZU1lc3NhZ2VzKCkgZHVyaW5nIGhhbmRzaGFrZVxuICAvLyBxdWV1ZXMgaW5zdGVhZCBvZiByYWNpbmcgdGhlIGhpc3RvcnkgUE9TVC5cbiAgaWYgKGluaXRpYWxNZXNzYWdlcyAmJiBpbml0aWFsTWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgIGZsdXNoR2F0ZS5zdGFydCgpXG4gIH1cbiAgdHJhbnNwb3J0LmNvbm5lY3QoKVxuICBjb25uZWN0RGVhZGxpbmUgPSBzZXRUaW1lb3V0KFxuICAgIG9uQ29ubmVjdFRpbWVvdXQsXG4gICAgY2ZnLmNvbm5lY3RfdGltZW91dF9tcyxcbiAgICBjb25uZWN0Q2F1c2UsXG4gIClcblxuICAvLyBcdTI1MDBcdTI1MDAgOC4gSGlzdG9yeSBmbHVzaCArIGRyYWluIGhlbHBlcnMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG4gIGZ1bmN0aW9uIGRyYWluRmx1c2hHYXRlKCk6IHZvaWQge1xuICAgIGNvbnN0IG1zZ3MgPSBmbHVzaEdhdGUuZW5kKClcbiAgICBpZiAobXNncy5sZW5ndGggPT09IDApIHJldHVyblxuICAgIGZvciAoY29uc3QgbXNnIG9mIG1zZ3MpIHJlY2VudFBvc3RlZFVVSURzLmFkZChtc2cudXVpZClcbiAgICBjb25zdCBldmVudHMgPSB0b1NES01lc3NhZ2VzKG1zZ3MpLm1hcChtID0+ICh7XG4gICAgICAuLi5tLFxuICAgICAgc2Vzc2lvbl9pZDogc2Vzc2lvbklkLFxuICAgIH0pKVxuICAgIGlmIChtc2dzLnNvbWUobSA9PiBtLnR5cGUgPT09ICd1c2VyJykpIHtcbiAgICAgIHRyYW5zcG9ydC5yZXBvcnRTdGF0ZSgncnVubmluZycpXG4gICAgfVxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbcmVtb3RlLWJyaWRnZV0gRHJhaW5lZCAke21zZ3MubGVuZ3RofSBxdWV1ZWQgbWVzc2FnZShzKSBhZnRlciBmbHVzaGAsXG4gICAgKVxuICAgIHZvaWQgdHJhbnNwb3J0LndyaXRlQmF0Y2goZXZlbnRzKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZmx1c2hIaXN0b3J5KG1zZ3M6IE1lc3NhZ2VbXSk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIHYyIGFsd2F5cyBjcmVhdGVzIGEgZnJlc2ggc2VydmVyIHNlc3Npb24gKHVuY29uZGl0aW9uYWwgY3JlYXRlQ29kZVNlc3Npb25cbiAgICAvLyBhYm92ZSkgXHUyMDE0IG5vIHNlc3Npb24gcmV1c2UsIG5vIGRvdWJsZS1wb3N0IHJpc2suIFVubGlrZSB2MSwgd2UgZG8gTk9UXG4gICAgLy8gZmlsdGVyIGJ5IHByZXZpb3VzbHlGbHVzaGVkVVVJRHM6IHRoYXQgc2V0IHBlcnNpc3RzIGFjcm9zcyBSRVBMIGVuYWJsZS9cbiAgICAvLyBkaXNhYmxlIGN5Y2xlcyAodXNlUmVmKSwgc28gaXQgd291bGQgd3JvbmdseSBzdXBwcmVzcyBoaXN0b3J5IG9uIHJlLWVuYWJsZS5cbiAgICBjb25zdCBlbGlnaWJsZSA9IG1zZ3MuZmlsdGVyKGlzRWxpZ2libGVCcmlkZ2VNZXNzYWdlKVxuICAgIGNvbnN0IGNhcHBlZCA9XG4gICAgICBpbml0aWFsSGlzdG9yeUNhcCA+IDAgJiYgZWxpZ2libGUubGVuZ3RoID4gaW5pdGlhbEhpc3RvcnlDYXBcbiAgICAgICAgPyBlbGlnaWJsZS5zbGljZSgtaW5pdGlhbEhpc3RvcnlDYXApXG4gICAgICAgIDogZWxpZ2libGVcbiAgICBpZiAoY2FwcGVkLmxlbmd0aCA8IGVsaWdpYmxlLmxlbmd0aCkge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgW3JlbW90ZS1icmlkZ2VdIENhcHBlZCBpbml0aWFsIGZsdXNoOiAke2VsaWdpYmxlLmxlbmd0aH0gLT4gJHtjYXBwZWQubGVuZ3RofSAoY2FwPSR7aW5pdGlhbEhpc3RvcnlDYXB9KWAsXG4gICAgICApXG4gICAgfVxuICAgIGNvbnN0IGV2ZW50cyA9IHRvU0RLTWVzc2FnZXMoY2FwcGVkKS5tYXAobSA9PiAoe1xuICAgICAgLi4ubSxcbiAgICAgIHNlc3Npb25faWQ6IHNlc3Npb25JZCxcbiAgICB9KSlcbiAgICBpZiAoZXZlbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG4gICAgLy8gTWlkLXR1cm4gaW5pdDogaWYgUmVtb3RlIENvbnRyb2wgaXMgZW5hYmxlZCB3aGlsZSBhIHF1ZXJ5IGlzIHJ1bm5pbmcsXG4gICAgLy8gdGhlIGxhc3QgZWxpZ2libGUgbWVzc2FnZSBpcyBhIHVzZXIgcHJvbXB0IG9yIHRvb2xfcmVzdWx0IChib3RoICd1c2VyJ1xuICAgIC8vIHR5cGUpLiBXaXRob3V0IHRoaXMgdGhlIGluaXQgUFVUJ3MgJ2lkbGUnIHN0aWNrcyB1bnRpbCB0aGUgbmV4dCB1c2VyLVxuICAgIC8vIHR5cGUgbWVzc2FnZSBmb3J3YXJkcyB2aWEgd3JpdGVNZXNzYWdlcyBcdTIwMTQgd2hpY2ggZm9yIGEgcHVyZS10ZXh0IHR1cm5cbiAgICAvLyBpcyBuZXZlciAob25seSBhc3Npc3RhbnQgY2h1bmtzIHN0cmVhbSBwb3N0LWluaXQpLiBDaGVjayBlbGlnaWJsZSAocHJlLVxuICAgIC8vIGNhcCksIG5vdCBjYXBwZWQ6IHRoZSBjYXAgbWF5IHRydW5jYXRlIHRvIGEgdXNlciBtZXNzYWdlIGV2ZW4gd2hlbiB0aGVcbiAgICAvLyBhY3R1YWwgdHJhaWxpbmcgbWVzc2FnZSBpcyBhc3Npc3RhbnQuXG4gICAgaWYgKGVsaWdpYmxlLmF0KC0xKT8udHlwZSA9PT0gJ3VzZXInKSB7XG4gICAgICB0cmFuc3BvcnQucmVwb3J0U3RhdGUoJ3J1bm5pbmcnKVxuICAgIH1cbiAgICBsb2dGb3JEZWJ1Z2dpbmcoYFtyZW1vdGUtYnJpZGdlXSBGbHVzaGluZyAke2V2ZW50cy5sZW5ndGh9IGhpc3RvcnkgZXZlbnRzYClcbiAgICBhd2FpdCB0cmFuc3BvcnQud3JpdGVCYXRjaChldmVudHMpXG4gIH1cblxuICAvLyBcdTI1MDBcdTI1MDAgOS4gVGVhcmRvd24gXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG4gIC8vIE9uIFNJR0lOVC9TSUdURVJNL1x1MjA2MC9leGl0LCBncmFjZWZ1bFNodXRkb3duIHJhY2VzIHJ1bkNsZWFudXBGdW5jdGlvbnMoKVxuICAvLyBhZ2FpbnN0IGEgMnMgY2FwIGJlZm9yZSBmb3JjZUV4aXQga2lsbHMgdGhlIHByb2Nlc3MuIEJ1ZGdldCBhY2NvcmRpbmdseTpcbiAgLy8gICAtIGFyY2hpdmU6IHRlYXJkb3duX2FyY2hpdmVfdGltZW91dF9tcyAoZGVmYXVsdCAxNTAwLCBjYXAgMjAwMClcbiAgLy8gICAtIHJlc3VsdCB3cml0ZTogZmlyZS1hbmQtZm9yZ2V0LCBhcmNoaXZlIGxhdGVuY3kgY292ZXJzIHRoZSBkcmFpblxuICAvLyAgIC0gNDAxIHJldHJ5OiBvbmx5IGlmIGZpcnN0IGFyY2hpdmUgNDAxcywgc2hhcmVzIHRoZSBzYW1lIGJ1ZGdldFxuICBhc3luYyBmdW5jdGlvbiB0ZWFyZG93bigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodG9ybkRvd24pIHJldHVyblxuICAgIHRvcm5Eb3duID0gdHJ1ZVxuICAgIHJlZnJlc2guY2FuY2VsQWxsKClcbiAgICBjbGVhclRpbWVvdXQoY29ubmVjdERlYWRsaW5lKVxuICAgIGZsdXNoR2F0ZS5kcm9wKClcblxuICAgIC8vIEZpcmUgdGhlIHJlc3VsdCBtZXNzYWdlIGJlZm9yZSBhcmNoaXZlIFx1MjAxNCB0cmFuc3BvcnQud3JpdGUoKSBvbmx5IGF3YWl0c1xuICAgIC8vIGVucXVldWUgKFNlcmlhbEJhdGNoRXZlbnRVcGxvYWRlciByZXNvbHZlcyBvbmNlIGJ1ZmZlcmVkLCBkcmFpbiBpc1xuICAgIC8vIGFzeW5jKS4gQXJjaGl2aW5nIGJlZm9yZSBjbG9zZSgpIGdpdmVzIHRoZSB1cGxvYWRlcidzIGRyYWluIGxvb3AgYVxuICAgIC8vIHdpbmRvdyAodHlwaWNhbCBhcmNoaXZlIFx1MjI0OCAxMDAtNTAwbXMpIHRvIFBPU1QgdGhlIHJlc3VsdCB3aXRob3V0IGFuXG4gICAgLy8gZXhwbGljaXQgc2xlZXAuIGNsb3NlKCkgc2V0cyBjbG9zZWQ9dHJ1ZSB3aGljaCBpbnRlcnJ1cHRzIGRyYWluIGF0IHRoZVxuICAgIC8vIG5leHQgd2hpbGUtY2hlY2ssIHNvIGNsb3NlLWJlZm9yZS1hcmNoaXZlIGRyb3BzIHRoZSByZXN1bHQuXG4gICAgdHJhbnNwb3J0LnJlcG9ydFN0YXRlKCdpZGxlJylcbiAgICB2b2lkIHRyYW5zcG9ydC53cml0ZShtYWtlUmVzdWx0TWVzc2FnZShzZXNzaW9uSWQpKVxuXG4gICAgbGV0IHRva2VuID0gZ2V0QWNjZXNzVG9rZW4oKVxuICAgIGxldCBzdGF0dXMgPSBhd2FpdCBhcmNoaXZlU2Vzc2lvbihcbiAgICAgIHNlc3Npb25JZCxcbiAgICAgIGJhc2VVcmwsXG4gICAgICB0b2tlbixcbiAgICAgIG9yZ1VVSUQsXG4gICAgICBjZmcudGVhcmRvd25fYXJjaGl2ZV90aW1lb3V0X21zLFxuICAgIClcblxuICAgIC8vIFRva2VuIGlzIHVzdWFsbHkgZnJlc2ggKHJlZnJlc2ggc2NoZWR1bGVyIHJ1bnMgNW1pbiBiZWZvcmUgZXhwaXJ5KSBidXRcbiAgICAvLyBsYXB0b3Atd2FrZSBwYXN0IHRoZSByZWZyZXNoIHdpbmRvdyBsZWF2ZXMgZ2V0QWNjZXNzVG9rZW4oKSByZXR1cm5pbmcgYVxuICAgIC8vIHN0YWxlIHN0cmluZy4gUmV0cnkgb25jZSBvbiA0MDEgXHUyMDE0IG9uQXV0aDQwMSAoPSBoYW5kbGVPQXV0aDQwMUVycm9yKVxuICAgIC8vIGNsZWFycyBrZXljaGFpbiBjYWNoZSArIGZvcmNlLXJlZnJlc2hlcy4gTm8gcHJvYWN0aXZlIHJlZnJlc2ggb24gdGhlXG4gICAgLy8gaGFwcHkgcGF0aDogaGFuZGxlT0F1dGg0MDFFcnJvciBmb3JjZS1yZWZyZXNoZXMgZXZlbiB2YWxpZCB0b2tlbnMsXG4gICAgLy8gd2hpY2ggd291bGQgd2FzdGUgYnVkZ2V0IDk5JSBvZiB0aGUgdGltZS4gdHJ5L2NhdGNoIG1pcnJvcnNcbiAgICAvLyByZWNvdmVyRnJvbUF1dGhGYWlsdXJlOiBrZXljaGFpbiByZWFkcyBjYW4gdGhyb3cgKG1hY09TIGxvY2tlZCBhZnRlclxuICAgIC8vIHdha2UpOyBhbiB1bmNhdWdodCB0aHJvdyBoZXJlIHdvdWxkIHNraXAgdHJhbnNwb3J0LmNsb3NlICsgdGVsZW1ldHJ5LlxuICAgIGlmIChzdGF0dXMgPT09IDQwMSAmJiBvbkF1dGg0MDEpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IG9uQXV0aDQwMSh0b2tlbiA/PyAnJylcbiAgICAgICAgdG9rZW4gPSBnZXRBY2Nlc3NUb2tlbigpXG4gICAgICAgIHN0YXR1cyA9IGF3YWl0IGFyY2hpdmVTZXNzaW9uKFxuICAgICAgICAgIHNlc3Npb25JZCxcbiAgICAgICAgICBiYXNlVXJsLFxuICAgICAgICAgIHRva2VuLFxuICAgICAgICAgIG9yZ1VVSUQsXG4gICAgICAgICAgY2ZnLnRlYXJkb3duX2FyY2hpdmVfdGltZW91dF9tcyxcbiAgICAgICAgKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICBgW3JlbW90ZS1icmlkZ2VdIFRlYXJkb3duIDQwMSByZXRyeSB0aHJldzogJHtlcnJvck1lc3NhZ2UoZXJyKX1gLFxuICAgICAgICAgIHsgbGV2ZWw6ICdlcnJvcicgfSxcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRyYW5zcG9ydC5jbG9zZSgpXG5cbiAgICBjb25zdCBhcmNoaXZlU3RhdHVzOiBBcmNoaXZlVGVsZW1ldHJ5U3RhdHVzID1cbiAgICAgIHN0YXR1cyA9PT0gJ25vX3Rva2VuJ1xuICAgICAgICA/ICdza2lwcGVkX25vX3Rva2VuJ1xuICAgICAgICA6IHN0YXR1cyA9PT0gJ3RpbWVvdXQnIHx8IHN0YXR1cyA9PT0gJ2Vycm9yJ1xuICAgICAgICAgID8gJ25ldHdvcmtfZXJyb3InXG4gICAgICAgICAgOiBzdGF0dXMgPj0gNTAwXG4gICAgICAgICAgICA/ICdzZXJ2ZXJfNXh4J1xuICAgICAgICAgICAgOiBzdGF0dXMgPj0gNDAwXG4gICAgICAgICAgICAgID8gJ3NlcnZlcl80eHgnXG4gICAgICAgICAgICAgIDogJ29rJ1xuXG4gICAgbG9nRm9yRGVidWdnaW5nKGBbcmVtb3RlLWJyaWRnZV0gVG9ybiBkb3duIChhcmNoaXZlPSR7c3RhdHVzfSlgKVxuICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2luZm8nLCAnYnJpZGdlX3JlcGxfdjJfdGVhcmRvd24nKVxuICAgIGxvZ0V2ZW50KFxuICAgICAgZmVhdHVyZSgnQ0NSX01JUlJPUicpICYmIG91dGJvdW5kT25seVxuICAgICAgICA/ICd0ZW5ndV9jY3JfbWlycm9yX3RlYXJkb3duJ1xuICAgICAgICA6ICd0ZW5ndV9icmlkZ2VfcmVwbF90ZWFyZG93bicsXG4gICAgICB7XG4gICAgICAgIHYyOiB0cnVlLFxuICAgICAgICBhcmNoaXZlX3N0YXR1czpcbiAgICAgICAgICBhcmNoaXZlU3RhdHVzIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgIGFyY2hpdmVfb2s6IHR5cGVvZiBzdGF0dXMgPT09ICdudW1iZXInICYmIHN0YXR1cyA8IDQwMCxcbiAgICAgICAgYXJjaGl2ZV9odHRwX3N0YXR1czogdHlwZW9mIHN0YXR1cyA9PT0gJ251bWJlcicgPyBzdGF0dXMgOiB1bmRlZmluZWQsXG4gICAgICAgIGFyY2hpdmVfdGltZW91dDogc3RhdHVzID09PSAndGltZW91dCcsXG4gICAgICAgIGFyY2hpdmVfbm9fdG9rZW46IHN0YXR1cyA9PT0gJ25vX3Rva2VuJyxcbiAgICAgIH0sXG4gICAgKVxuICB9XG4gIGNvbnN0IHVucmVnaXN0ZXIgPSByZWdpc3RlckNsZWFudXAodGVhcmRvd24pXG5cbiAgaWYgKGZlYXR1cmUoJ0NDUl9NSVJST1InKSAmJiBvdXRib3VuZE9ubHkpIHtcbiAgICBsb2dFdmVudCgndGVuZ3VfY2NyX21pcnJvcl9zdGFydGVkJywge1xuICAgICAgdjI6IHRydWUsXG4gICAgICBleHBpcmVzX2luX3M6IGNyZWRlbnRpYWxzLmV4cGlyZXNfaW4sXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBsb2dFdmVudCgndGVuZ3VfYnJpZGdlX3JlcGxfc3RhcnRlZCcsIHtcbiAgICAgIGhhc19pbml0aWFsX21lc3NhZ2VzOiAhIShpbml0aWFsTWVzc2FnZXMgJiYgaW5pdGlhbE1lc3NhZ2VzLmxlbmd0aCA+IDApLFxuICAgICAgdjI6IHRydWUsXG4gICAgICBleHBpcmVzX2luX3M6IGNyZWRlbnRpYWxzLmV4cGlyZXNfaW4sXG4gICAgICBpblByb3RlY3RlZE5hbWVzcGFjZTogaXNJblByb3RlY3RlZE5hbWVzcGFjZSgpLFxuICAgIH0pXG4gIH1cblxuICAvLyBcdTI1MDBcdTI1MDAgMTAuIEhhbmRsZSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcbiAgcmV0dXJuIHtcbiAgICBicmlkZ2VTZXNzaW9uSWQ6IHNlc3Npb25JZCxcbiAgICBlbnZpcm9ubWVudElkOiAnJyxcbiAgICBzZXNzaW9uSW5ncmVzc1VybDogY3JlZGVudGlhbHMuYXBpX2Jhc2VfdXJsLFxuICAgIHdyaXRlTWVzc2FnZXMobWVzc2FnZXMpIHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkID0gbWVzc2FnZXMuZmlsdGVyKFxuICAgICAgICBtID0+XG4gICAgICAgICAgaXNFbGlnaWJsZUJyaWRnZU1lc3NhZ2UobSkgJiZcbiAgICAgICAgICAhaW5pdGlhbE1lc3NhZ2VVVUlEcy5oYXMobS51dWlkKSAmJlxuICAgICAgICAgICFyZWNlbnRQb3N0ZWRVVUlEcy5oYXMobS51dWlkKSxcbiAgICAgIClcbiAgICAgIGlmIChmaWx0ZXJlZC5sZW5ndGggPT09IDApIHJldHVyblxuXG4gICAgICAvLyBGaXJlIG9uVXNlck1lc3NhZ2UgZm9yIHRpdGxlIGRlcml2YXRpb24uIFNjYW4gYmVmb3JlIHRoZSBmbHVzaEdhdGVcbiAgICAgIC8vIGNoZWNrIFx1MjAxNCBwcm9tcHRzIGFyZSB0aXRsZS13b3J0aHkgZXZlbiBpZiB0aGV5IHF1ZXVlLiBLZWVwcyBjYWxsaW5nXG4gICAgICAvLyBvbiBldmVyeSB0aXRsZS13b3J0aHkgbWVzc2FnZSB1bnRpbCB0aGUgY2FsbGJhY2sgcmV0dXJucyB0cnVlOyB0aGVcbiAgICAgIC8vIGNhbGxlciBvd25zIHRoZSBwb2xpY3kgKGRlcml2ZSBhdCAxc3QgYW5kIDNyZCwgc2tpcCBpZiBleHBsaWNpdCkuXG4gICAgICBpZiAoIXVzZXJNZXNzYWdlQ2FsbGJhY2tEb25lKSB7XG4gICAgICAgIGZvciAoY29uc3QgbSBvZiBmaWx0ZXJlZCkge1xuICAgICAgICAgIGNvbnN0IHRleHQgPSBleHRyYWN0VGl0bGVUZXh0KG0pXG4gICAgICAgICAgaWYgKHRleHQgIT09IHVuZGVmaW5lZCAmJiBvblVzZXJNZXNzYWdlPy4odGV4dCwgc2Vzc2lvbklkKSkge1xuICAgICAgICAgICAgdXNlck1lc3NhZ2VDYWxsYmFja0RvbmUgPSB0cnVlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmx1c2hHYXRlLmVucXVldWUoLi4uZmlsdGVyZWQpKSB7XG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICBgW3JlbW90ZS1icmlkZ2VdIFF1ZXVlZCAke2ZpbHRlcmVkLmxlbmd0aH0gbWVzc2FnZShzKSBkdXJpbmcgZmx1c2hgLFxuICAgICAgICApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IG1zZyBvZiBmaWx0ZXJlZCkgcmVjZW50UG9zdGVkVVVJRHMuYWRkKG1zZy51dWlkKVxuICAgICAgY29uc3QgZXZlbnRzID0gdG9TREtNZXNzYWdlcyhmaWx0ZXJlZCkubWFwKG0gPT4gKHtcbiAgICAgICAgLi4ubSxcbiAgICAgICAgc2Vzc2lvbl9pZDogc2Vzc2lvbklkLFxuICAgICAgfSkpXG4gICAgICAvLyB2MiBkb2VzIG5vdCBkZXJpdmUgd29ya2VyX3N0YXR1cyBmcm9tIGV2ZW50cyBzZXJ2ZXItc2lkZSAodW5saWtlIHYxXG4gICAgICAvLyBzZXNzaW9uLWluZ3Jlc3Mgc2Vzc2lvbl9zdGF0dXNfdXBkYXRlci5nbykuIFB1c2ggaXQgZnJvbSBoZXJlIHNvIHRoZVxuICAgICAgLy8gQ0NSIHdlYiBzZXNzaW9uIGxpc3Qgc2hvd3MgUnVubmluZyBpbnN0ZWFkIG9mIHN0dWNrIG9uIElkbGUuIEEgdXNlclxuICAgICAgLy8gbWVzc2FnZSBpbiB0aGUgYmF0Y2ggbWFya3MgdHVybiBzdGFydC4gQ0NSQ2xpZW50LnJlcG9ydFN0YXRlIGRlZHVwZXNcbiAgICAgIC8vIGNvbnNlY3V0aXZlIHNhbWUtc3RhdGUgcHVzaGVzLlxuICAgICAgaWYgKGZpbHRlcmVkLnNvbWUobSA9PiBtLnR5cGUgPT09ICd1c2VyJykpIHtcbiAgICAgICAgdHJhbnNwb3J0LnJlcG9ydFN0YXRlKCdydW5uaW5nJylcbiAgICAgIH1cbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhgW3JlbW90ZS1icmlkZ2VdIFNlbmRpbmcgJHtmaWx0ZXJlZC5sZW5ndGh9IG1lc3NhZ2UocylgKVxuICAgICAgdm9pZCB0cmFuc3BvcnQud3JpdGVCYXRjaChldmVudHMpXG4gICAgfSxcbiAgICB3cml0ZVNka01lc3NhZ2VzKG1lc3NhZ2VzOiBTREtNZXNzYWdlW10pIHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkID0gbWVzc2FnZXMuZmlsdGVyKFxuICAgICAgICBtID0+ICFtLnV1aWQgfHwgIXJlY2VudFBvc3RlZFVVSURzLmhhcyhtLnV1aWQpLFxuICAgICAgKVxuICAgICAgaWYgKGZpbHRlcmVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG4gICAgICBmb3IgKGNvbnN0IG1zZyBvZiBmaWx0ZXJlZCkge1xuICAgICAgICBpZiAobXNnLnV1aWQpIHJlY2VudFBvc3RlZFVVSURzLmFkZChtc2cudXVpZClcbiAgICAgIH1cbiAgICAgIGNvbnN0IGV2ZW50cyA9IGZpbHRlcmVkLm1hcChtID0+ICh7IC4uLm0sIHNlc3Npb25faWQ6IHNlc3Npb25JZCB9KSlcbiAgICAgIHZvaWQgdHJhbnNwb3J0LndyaXRlQmF0Y2goZXZlbnRzKVxuICAgIH0sXG4gICAgc2VuZENvbnRyb2xSZXF1ZXN0KHJlcXVlc3Q6IFNES0NvbnRyb2xSZXF1ZXN0KSB7XG4gICAgICBpZiAoYXV0aFJlY292ZXJ5SW5GbGlnaHQpIHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgIGBbcmVtb3RlLWJyaWRnZV0gRHJvcHBpbmcgY29udHJvbF9yZXF1ZXN0IGR1cmluZyA0MDEgcmVjb3Zlcnk6ICR7cmVxdWVzdC5yZXF1ZXN0X2lkfWAsXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCBldmVudCA9IHsgLi4ucmVxdWVzdCwgc2Vzc2lvbl9pZDogc2Vzc2lvbklkIH1cbiAgICAgIGlmIChyZXF1ZXN0LnJlcXVlc3Quc3VidHlwZSA9PT0gJ2Nhbl91c2VfdG9vbCcpIHtcbiAgICAgICAgdHJhbnNwb3J0LnJlcG9ydFN0YXRlKCdyZXF1aXJlc19hY3Rpb24nKVxuICAgICAgfVxuICAgICAgdm9pZCB0cmFuc3BvcnQud3JpdGUoZXZlbnQpXG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBbcmVtb3RlLWJyaWRnZV0gU2VudCBjb250cm9sX3JlcXVlc3QgcmVxdWVzdF9pZD0ke3JlcXVlc3QucmVxdWVzdF9pZH1gLFxuICAgICAgKVxuICAgIH0sXG4gICAgc2VuZENvbnRyb2xSZXNwb25zZShyZXNwb25zZTogU0RLQ29udHJvbFJlc3BvbnNlKSB7XG4gICAgICBpZiAoYXV0aFJlY292ZXJ5SW5GbGlnaHQpIHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICdbcmVtb3RlLWJyaWRnZV0gRHJvcHBpbmcgY29udHJvbF9yZXNwb25zZSBkdXJpbmcgNDAxIHJlY292ZXJ5JyxcbiAgICAgICAgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IGV2ZW50ID0geyAuLi5yZXNwb25zZSwgc2Vzc2lvbl9pZDogc2Vzc2lvbklkIH1cbiAgICAgIHRyYW5zcG9ydC5yZXBvcnRTdGF0ZSgncnVubmluZycpXG4gICAgICB2b2lkIHRyYW5zcG9ydC53cml0ZShldmVudClcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZygnW3JlbW90ZS1icmlkZ2VdIFNlbnQgY29udHJvbF9yZXNwb25zZScpXG4gICAgfSxcbiAgICBzZW5kQ29udHJvbENhbmNlbFJlcXVlc3QocmVxdWVzdElkOiBzdHJpbmcpIHtcbiAgICAgIGlmIChhdXRoUmVjb3ZlcnlJbkZsaWdodCkge1xuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgYFtyZW1vdGUtYnJpZGdlXSBEcm9wcGluZyBjb250cm9sX2NhbmNlbF9yZXF1ZXN0IGR1cmluZyA0MDEgcmVjb3Zlcnk6ICR7cmVxdWVzdElkfWAsXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCBldmVudCA9IHtcbiAgICAgICAgdHlwZTogJ2NvbnRyb2xfY2FuY2VsX3JlcXVlc3QnIGFzIGNvbnN0LFxuICAgICAgICByZXF1ZXN0X2lkOiByZXF1ZXN0SWQsXG4gICAgICAgIHNlc3Npb25faWQ6IHNlc3Npb25JZCxcbiAgICAgIH1cbiAgICAgIC8vIEhvb2svY2xhc3NpZmllci9jaGFubmVsL3JlY2hlY2sgcmVzb2x2ZWQgdGhlIHBlcm1pc3Npb24gbG9jYWxseSBcdTIwMTRcbiAgICAgIC8vIGludGVyYWN0aXZlSGFuZGxlciBjYWxscyBvbmx5IGNhbmNlbFJlcXVlc3QgKG5vIHNlbmRSZXNwb25zZSkgb25cbiAgICAgIC8vIHRob3NlIHBhdGhzLCBzbyB3aXRob3V0IHRoaXMgdGhlIHNlcnZlciBzdGF5cyBvbiByZXF1aXJlc19hY3Rpb24uXG4gICAgICB0cmFuc3BvcnQucmVwb3J0U3RhdGUoJ3J1bm5pbmcnKVxuICAgICAgdm9pZCB0cmFuc3BvcnQud3JpdGUoZXZlbnQpXG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBbcmVtb3RlLWJyaWRnZV0gU2VudCBjb250cm9sX2NhbmNlbF9yZXF1ZXN0IHJlcXVlc3RfaWQ9JHtyZXF1ZXN0SWR9YCxcbiAgICAgIClcbiAgICB9LFxuICAgIHNlbmRSZXN1bHQoKSB7XG4gICAgICBpZiAoYXV0aFJlY292ZXJ5SW5GbGlnaHQpIHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKCdbcmVtb3RlLWJyaWRnZV0gRHJvcHBpbmcgcmVzdWx0IGR1cmluZyA0MDEgcmVjb3ZlcnknKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHRyYW5zcG9ydC5yZXBvcnRTdGF0ZSgnaWRsZScpXG4gICAgICB2b2lkIHRyYW5zcG9ydC53cml0ZShtYWtlUmVzdWx0TWVzc2FnZShzZXNzaW9uSWQpKVxuICAgICAgbG9nRm9yRGVidWdnaW5nKGBbcmVtb3RlLWJyaWRnZV0gU2VudCByZXN1bHRgKVxuICAgIH0sXG4gICAgYXN5bmMgdGVhcmRvd24oKSB7XG4gICAgICB1bnJlZ2lzdGVyKClcbiAgICAgIGF3YWl0IHRlYXJkb3duKClcbiAgICB9LFxuICB9XG59XG5cbi8vIFx1MjUwMFx1MjUwMFx1MjUwMCBTZXNzaW9uIEFQSSAodjIgL2NvZGUvc2Vzc2lvbnMsIG5vIGVudikgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cbi8qKiBSZXRyeSBhbiBhc3luYyBpbml0IGNhbGwgd2l0aCBleHBvbmVudGlhbCBiYWNrb2ZmICsgaml0dGVyLiAqL1xuYXN5bmMgZnVuY3Rpb24gd2l0aFJldHJ5PFQ+KFxuICBmbjogKCkgPT4gUHJvbWlzZTxUIHwgbnVsbD4sXG4gIGxhYmVsOiBzdHJpbmcsXG4gIGNmZzogRW52TGVzc0JyaWRnZUNvbmZpZyxcbik6IFByb21pc2U8VCB8IG51bGw+IHtcbiAgY29uc3QgbWF4ID0gY2ZnLmluaXRfcmV0cnlfbWF4X2F0dGVtcHRzXG4gIGZvciAobGV0IGF0dGVtcHQgPSAxOyBhdHRlbXB0IDw9IG1heDsgYXR0ZW1wdCsrKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZm4oKVxuICAgIGlmIChyZXN1bHQgIT09IG51bGwpIHJldHVybiByZXN1bHRcbiAgICBpZiAoYXR0ZW1wdCA8IG1heCkge1xuICAgICAgY29uc3QgYmFzZSA9IGNmZy5pbml0X3JldHJ5X2Jhc2VfZGVsYXlfbXMgKiAyICoqIChhdHRlbXB0IC0gMSlcbiAgICAgIGNvbnN0IGppdHRlciA9XG4gICAgICAgIGJhc2UgKiBjZmcuaW5pdF9yZXRyeV9qaXR0ZXJfZnJhY3Rpb24gKiAoMiAqIE1hdGgucmFuZG9tKCkgLSAxKVxuICAgICAgY29uc3QgZGVsYXkgPSBNYXRoLm1pbihiYXNlICsgaml0dGVyLCBjZmcuaW5pdF9yZXRyeV9tYXhfZGVsYXlfbXMpXG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBbcmVtb3RlLWJyaWRnZV0gJHtsYWJlbH0gZmFpbGVkIChhdHRlbXB0ICR7YXR0ZW1wdH0vJHttYXh9KSwgcmV0cnlpbmcgaW4gJHtNYXRoLnJvdW5kKGRlbGF5KX1tc2AsXG4gICAgICApXG4gICAgICBhd2FpdCBzbGVlcChkZWxheSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuLy8gTW92ZWQgdG8gY29kZVNlc3Npb25BcGkudHMgc28gdGhlIFNESyAvYnJpZGdlIHN1YnBhdGggY2FuIGJ1bmRsZSB0aGVtXG4vLyB3aXRob3V0IHB1bGxpbmcgaW4gdGhpcyBmaWxlJ3MgaGVhdnkgQ0xJIHRyZWUgKGFuYWx5dGljcywgdHJhbnNwb3J0KS5cbmV4cG9ydCB7XG4gIGNyZWF0ZUNvZGVTZXNzaW9uLFxuICB0eXBlIFJlbW90ZUNyZWRlbnRpYWxzLFxufSBmcm9tICcuL2NvZGVTZXNzaW9uQXBpLmpzJ1xuaW1wb3J0IHtcbiAgY3JlYXRlQ29kZVNlc3Npb24sXG4gIGZldGNoUmVtb3RlQ3JlZGVudGlhbHMgYXMgZmV0Y2hSZW1vdGVDcmVkZW50aWFsc1JhdyxcbiAgdHlwZSBSZW1vdGVDcmVkZW50aWFscyxcbn0gZnJvbSAnLi9jb2RlU2Vzc2lvbkFwaS5qcydcbmltcG9ydCB7IGdldEJyaWRnZUJhc2VVcmxPdmVycmlkZSB9IGZyb20gJy4vYnJpZGdlQ29uZmlnLmpzJ1xuXG4vLyBDTEktc2lkZSB3cmFwcGVyIHRoYXQgYXBwbGllcyB0aGUgQ0xBVURFX0JSSURHRV9CQVNFX1VSTCBkZXYgb3ZlcnJpZGUgYW5kXG4vLyBpbmplY3RzIHRoZSB0cnVzdGVkLWRldmljZSB0b2tlbiAoYm90aCBhcmUgZW52L0dyb3d0aEJvb2sgcmVhZHMgdGhhdCB0aGVcbi8vIFNESy1mYWNpbmcgY29kZVNlc3Npb25BcGkudHMgZXhwb3J0IG11c3Qgc3RheSBmcmVlIG9mKS5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFJlbW90ZUNyZWRlbnRpYWxzKFxuICBzZXNzaW9uSWQ6IHN0cmluZyxcbiAgYmFzZVVybDogc3RyaW5nLFxuICBhY2Nlc3NUb2tlbjogc3RyaW5nLFxuICB0aW1lb3V0TXM6IG51bWJlcixcbik6IFByb21pc2U8UmVtb3RlQ3JlZGVudGlhbHMgfCBudWxsPiB7XG4gIGNvbnN0IGNyZWRzID0gYXdhaXQgZmV0Y2hSZW1vdGVDcmVkZW50aWFsc1JhdyhcbiAgICBzZXNzaW9uSWQsXG4gICAgYmFzZVVybCxcbiAgICBhY2Nlc3NUb2tlbixcbiAgICB0aW1lb3V0TXMsXG4gICAgZ2V0VHJ1c3RlZERldmljZVRva2VuKCksXG4gIClcbiAgaWYgKCFjcmVkcykgcmV0dXJuIG51bGxcbiAgcmV0dXJuIGdldEJyaWRnZUJhc2VVcmxPdmVycmlkZSgpXG4gICAgPyB7IC4uLmNyZWRzLCBhcGlfYmFzZV91cmw6IGJhc2VVcmwgfVxuICAgIDogY3JlZHNcbn1cblxudHlwZSBBcmNoaXZlU3RhdHVzID0gbnVtYmVyIHwgJ3RpbWVvdXQnIHwgJ2Vycm9yJyB8ICdub190b2tlbidcblxuLy8gU2luZ2xlIGNhdGVnb3JpY2FsIGZvciBCUSBgR1JPVVAgQlkgYXJjaGl2ZV9zdGF0dXNgLiBUaGUgYm9vbGVhbnMgb25cbi8vIF90ZWFyZG93biBwcmVkYXRlIHRoaXMgYW5kIGFyZSByZWR1bmRhbnQgd2l0aCBpdCAoZXhjZXB0IGFyY2hpdmVfdGltZW91dCxcbi8vIHdoaWNoIGRpc3Rpbmd1aXNoZXMgRUNPTk5BQk9SVEVEIGZyb20gb3RoZXIgbmV0d29yayBlcnJvcnMgXHUyMDE0IGJvdGggbWFwIHRvXG4vLyAnbmV0d29ya19lcnJvcicgaGVyZSBzaW5jZSB0aGUgZG9taW5hbnQgY2F1c2UgaW4gYSAxLjVzIHdpbmRvdyBpcyB0aW1lb3V0KS5cbnR5cGUgQXJjaGl2ZVRlbGVtZXRyeVN0YXR1cyA9XG4gIHwgJ29rJ1xuICB8ICdza2lwcGVkX25vX3Rva2VuJ1xuICB8ICduZXR3b3JrX2Vycm9yJ1xuICB8ICdzZXJ2ZXJfNHh4J1xuICB8ICdzZXJ2ZXJfNXh4J1xuXG5hc3luYyBmdW5jdGlvbiBhcmNoaXZlU2Vzc2lvbihcbiAgc2Vzc2lvbklkOiBzdHJpbmcsXG4gIGJhc2VVcmw6IHN0cmluZyxcbiAgYWNjZXNzVG9rZW46IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgb3JnVVVJRDogc3RyaW5nLFxuICB0aW1lb3V0TXM6IG51bWJlcixcbik6IFByb21pc2U8QXJjaGl2ZVN0YXR1cz4ge1xuICBpZiAoIWFjY2Vzc1Rva2VuKSByZXR1cm4gJ25vX3Rva2VuJ1xuICAvLyBBcmNoaXZlIGxpdmVzIGF0IHRoZSBjb21wYXQgbGF5ZXIgKC92MS9zZXNzaW9ucy8qLCBub3QgL3YxL2NvZGUvc2Vzc2lvbnMpLlxuICAvLyBjb21wYXQucGFyc2VTZXNzaW9uSUQgb25seSBhY2NlcHRzIFRhZ1Nlc3Npb24gKHNlc3Npb25fKiksIHNvIHJldGFnIGNzZV8qLlxuICAvLyBhbnRocm9waWMtYmV0YSArIHgtb3JnYW5pemF0aW9uLXV1aWQgYXJlIHJlcXVpcmVkIFx1MjAxNCB3aXRob3V0IHRoZW0gdGhlXG4gIC8vIGNvbXBhdCBnYXRld2F5IDQwNHMgYmVmb3JlIHJlYWNoaW5nIHRoZSBoYW5kbGVyLlxuICAvL1xuICAvLyBVbmxpa2UgYnJpZGdlTWFpbi50cyAod2hpY2ggY2FjaGVzIGNvbXBhdElkIGluIHNlc3Npb25Db21wYXRJZHMgdG8ga2VlcFxuICAvLyBpbi1tZW1vcnkgdGl0bGVkU2Vzc2lvbnMvbG9nZ2VyIGtleXMgY29uc2lzdGVudCBhY3Jvc3MgYSBtaWQtc2Vzc2lvblxuICAvLyBnYXRlIGZsaXApLCB0aGlzIGNvbXBhdElkIGlzIG9ubHkgYSBzZXJ2ZXIgVVJMIHBhdGggc2VnbWVudCBcdTIwMTQgbm9cbiAgLy8gaW4tbWVtb3J5IHN0YXRlLiBGcmVzaCBjb21wdXRlIG1hdGNoZXMgd2hhdGV2ZXIgdGhlIHNlcnZlciBjdXJyZW50bHlcbiAgLy8gdmFsaWRhdGVzOiBpZiB0aGUgZ2F0ZSBpcyBPRkYsIHRoZSBzZXJ2ZXIgaGFzIGJlZW4gdXBkYXRlZCB0byBhY2NlcHRcbiAgLy8gY3NlXyogYW5kIHdlIGNvcnJlY3RseSBzZW5kIGl0LlxuICBjb25zdCBjb21wYXRJZCA9IHRvQ29tcGF0U2Vzc2lvbklkKHNlc3Npb25JZClcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICBgJHtiYXNlVXJsfS92MS9zZXNzaW9ucy8ke2NvbXBhdElkfS9hcmNoaXZlYCxcbiAgICAgIHt9LFxuICAgICAge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgLi4ub2F1dGhIZWFkZXJzKGFjY2Vzc1Rva2VuKSxcbiAgICAgICAgICAnYW50aHJvcGljLWJldGEnOiAnY2NyLWJ5b2MtMjAyNS0wNy0yOScsXG4gICAgICAgICAgJ3gtb3JnYW5pemF0aW9uLXV1aWQnOiBvcmdVVUlELFxuICAgICAgICB9LFxuICAgICAgICB0aW1lb3V0OiB0aW1lb3V0TXMsXG4gICAgICAgIHZhbGlkYXRlU3RhdHVzOiAoKSA9PiB0cnVlLFxuICAgICAgfSxcbiAgICApXG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFtyZW1vdGUtYnJpZGdlXSBBcmNoaXZlICR7Y29tcGF0SWR9IHN0YXR1cz0ke3Jlc3BvbnNlLnN0YXR1c31gLFxuICAgIClcbiAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnN0IG1zZyA9IGVycm9yTWVzc2FnZShlcnIpXG4gICAgbG9nRm9yRGVidWdnaW5nKGBbcmVtb3RlLWJyaWRnZV0gQXJjaGl2ZSBmYWlsZWQ6ICR7bXNnfWApXG4gICAgcmV0dXJuIGF4aW9zLmlzQXhpb3NFcnJvcihlcnIpICYmIGVyci5jb2RlID09PSAnRUNPTk5BQk9SVEVEJ1xuICAgICAgPyAndGltZW91dCdcbiAgICAgIDogJ2Vycm9yJ1xuICB9XG59XG4iLCAiLyoqXG4gKiBUaGluIEhUVFAgd3JhcHBlcnMgZm9yIHRoZSBDQ1IgdjIgY29kZS1zZXNzaW9uIEFQSS5cbiAqXG4gKiBTZXBhcmF0ZSBmaWxlIGZyb20gcmVtb3RlQnJpZGdlQ29yZS50cyBzbyB0aGUgU0RLIC9icmlkZ2Ugc3VicGF0aCBjYW5cbiAqIGV4cG9ydCBjcmVhdGVDb2RlU2Vzc2lvbiArIGZldGNoUmVtb3RlQ3JlZGVudGlhbHMgd2l0aG91dCBidW5kbGluZyB0aGVcbiAqIGhlYXZ5IENMSSB0cmVlIChhbmFseXRpY3MsIHRyYW5zcG9ydCwgZXRjLikuIENhbGxlcnMgc3VwcGx5IGV4cGxpY2l0XG4gKiBhY2Nlc3NUb2tlbiArIGJhc2VVcmwgXHUyMDE0IG5vIGltcGxpY2l0IGF1dGggb3IgY29uZmlnIHJlYWRzLlxuICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IGxvZ0ZvckRlYnVnZ2luZyB9IGZyb20gJy4uL3V0aWxzL2RlYnVnLmpzJ1xuaW1wb3J0IHsgZXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vdXRpbHMvZXJyb3JzLmpzJ1xuaW1wb3J0IHsganNvblN0cmluZ2lmeSB9IGZyb20gJy4uL3V0aWxzL3Nsb3dPcGVyYXRpb25zLmpzJ1xuaW1wb3J0IHsgZXh0cmFjdEVycm9yRGV0YWlsIH0gZnJvbSAnLi9kZWJ1Z1V0aWxzLmpzJ1xuXG5jb25zdCBBTlRIUk9QSUNfVkVSU0lPTiA9ICcyMDIzLTA2LTAxJ1xuXG5mdW5jdGlvbiBvYXV0aEhlYWRlcnMoYWNjZXNzVG9rZW46IHN0cmluZyk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICByZXR1cm4ge1xuICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgJ2FudGhyb3BpYy12ZXJzaW9uJzogQU5USFJPUElDX1ZFUlNJT04sXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvZGVTZXNzaW9uKFxuICBiYXNlVXJsOiBzdHJpbmcsXG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmcsXG4gIHRpdGxlOiBzdHJpbmcsXG4gIHRpbWVvdXRNczogbnVtYmVyLFxuICB0YWdzPzogc3RyaW5nW10sXG4pOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgY29uc3QgdXJsID0gYCR7YmFzZVVybH0vdjEvY29kZS9zZXNzaW9uc2BcbiAgbGV0IHJlc3BvbnNlXG4gIHRyeSB7XG4gICAgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgdXJsLFxuICAgICAgLy8gYnJpZGdlOiB7fSBpcyB0aGUgcG9zaXRpdmUgc2lnbmFsIGZvciB0aGUgb25lb2YgcnVubmVyIFx1MjAxNCBvbWl0dGluZyBpdFxuICAgICAgLy8gKG9yIHNlbmRpbmcgZW52aXJvbm1lbnRfaWQ6IFwiXCIpIG5vdyA0MDBzLiBCcmlkZ2VSdW5uZXIgaXMgYW4gZW1wdHlcbiAgICAgIC8vIG1lc3NhZ2UgdG9kYXk7IGl0J3MgYSBwbGFjZWhvbGRlciBmb3IgZnV0dXJlIGJyaWRnZS1zcGVjaWZpYyBvcHRpb25zLlxuICAgICAgeyB0aXRsZSwgYnJpZGdlOiB7fSwgLi4uKHRhZ3M/Lmxlbmd0aCA/IHsgdGFncyB9IDoge30pIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IG9hdXRoSGVhZGVycyhhY2Nlc3NUb2tlbiksXG4gICAgICAgIHRpbWVvdXQ6IHRpbWVvdXRNcyxcbiAgICAgICAgdmFsaWRhdGVTdGF0dXM6IHMgPT4gcyA8IDUwMCxcbiAgICAgIH0sXG4gICAgKVxuICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgW2NvZGUtc2Vzc2lvbl0gU2Vzc2lvbiBjcmVhdGUgcmVxdWVzdCBmYWlsZWQ6ICR7ZXJyb3JNZXNzYWdlKGVycil9YCxcbiAgICApXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgIT09IDIwMSkge1xuICAgIGNvbnN0IGRldGFpbCA9IGV4dHJhY3RFcnJvckRldGFpbChyZXNwb25zZS5kYXRhKVxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbY29kZS1zZXNzaW9uXSBTZXNzaW9uIGNyZWF0ZSBmYWlsZWQgJHtyZXNwb25zZS5zdGF0dXN9JHtkZXRhaWwgPyBgOiAke2RldGFpbH1gIDogJyd9YCxcbiAgICApXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IGRhdGE6IHVua25vd24gPSByZXNwb25zZS5kYXRhXG4gIGlmIChcbiAgICAhZGF0YSB8fFxuICAgIHR5cGVvZiBkYXRhICE9PSAnb2JqZWN0JyB8fFxuICAgICEoJ3Nlc3Npb24nIGluIGRhdGEpIHx8XG4gICAgIWRhdGEuc2Vzc2lvbiB8fFxuICAgIHR5cGVvZiBkYXRhLnNlc3Npb24gIT09ICdvYmplY3QnIHx8XG4gICAgISgnaWQnIGluIGRhdGEuc2Vzc2lvbikgfHxcbiAgICB0eXBlb2YgZGF0YS5zZXNzaW9uLmlkICE9PSAnc3RyaW5nJyB8fFxuICAgICFkYXRhLnNlc3Npb24uaWQuc3RhcnRzV2l0aCgnY3NlXycpXG4gICkge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbY29kZS1zZXNzaW9uXSBObyBzZXNzaW9uLmlkIChjc2VfKikgaW4gcmVzcG9uc2U6ICR7anNvblN0cmluZ2lmeShkYXRhKS5zbGljZSgwLCAyMDApfWAsXG4gICAgKVxuICAgIHJldHVybiBudWxsXG4gIH1cbiAgcmV0dXJuIGRhdGEuc2Vzc2lvbi5pZFxufVxuXG4vKipcbiAqIENyZWRlbnRpYWxzIGZyb20gUE9TVCAvYnJpZGdlLiBKV1QgaXMgb3BhcXVlIFx1MjAxNCBkbyBub3QgZGVjb2RlLlxuICogRWFjaCAvYnJpZGdlIGNhbGwgYnVtcHMgd29ya2VyX2Vwb2NoIHNlcnZlci1zaWRlIChpdCBJUyB0aGUgcmVnaXN0ZXIpLlxuICovXG5leHBvcnQgdHlwZSBSZW1vdGVDcmVkZW50aWFscyA9IHtcbiAgd29ya2VyX2p3dDogc3RyaW5nXG4gIGFwaV9iYXNlX3VybDogc3RyaW5nXG4gIGV4cGlyZXNfaW46IG51bWJlclxuICB3b3JrZXJfZXBvY2g6IG51bWJlclxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hSZW1vdGVDcmVkZW50aWFscyhcbiAgc2Vzc2lvbklkOiBzdHJpbmcsXG4gIGJhc2VVcmw6IHN0cmluZyxcbiAgYWNjZXNzVG9rZW46IHN0cmluZyxcbiAgdGltZW91dE1zOiBudW1iZXIsXG4gIHRydXN0ZWREZXZpY2VUb2tlbj86IHN0cmluZyxcbik6IFByb21pc2U8UmVtb3RlQ3JlZGVudGlhbHMgfCBudWxsPiB7XG4gIGNvbnN0IHVybCA9IGAke2Jhc2VVcmx9L3YxL2NvZGUvc2Vzc2lvbnMvJHtzZXNzaW9uSWR9L2JyaWRnZWBcbiAgY29uc3QgaGVhZGVycyA9IG9hdXRoSGVhZGVycyhhY2Nlc3NUb2tlbilcbiAgaWYgKHRydXN0ZWREZXZpY2VUb2tlbikge1xuICAgIGhlYWRlcnNbJ1gtVHJ1c3RlZC1EZXZpY2UtVG9rZW4nXSA9IHRydXN0ZWREZXZpY2VUb2tlblxuICB9XG4gIGxldCByZXNwb25zZVxuICB0cnkge1xuICAgIHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgIHVybCxcbiAgICAgIHt9LFxuICAgICAge1xuICAgICAgICBoZWFkZXJzLFxuICAgICAgICB0aW1lb3V0OiB0aW1lb3V0TXMsXG4gICAgICAgIHZhbGlkYXRlU3RhdHVzOiBzID0+IHMgPCA1MDAsXG4gICAgICB9LFxuICAgIClcbiAgfSBjYXRjaCAoZXJyOiB1bmtub3duKSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFtjb2RlLXNlc3Npb25dIC9icmlkZ2UgcmVxdWVzdCBmYWlsZWQ6ICR7ZXJyb3JNZXNzYWdlKGVycil9YCxcbiAgICApXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgIGNvbnN0IGRldGFpbCA9IGV4dHJhY3RFcnJvckRldGFpbChyZXNwb25zZS5kYXRhKVxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbY29kZS1zZXNzaW9uXSAvYnJpZGdlIGZhaWxlZCAke3Jlc3BvbnNlLnN0YXR1c30ke2RldGFpbCA/IGA6ICR7ZGV0YWlsfWAgOiAnJ31gLFxuICAgIClcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgZGF0YTogdW5rbm93biA9IHJlc3BvbnNlLmRhdGFcbiAgaWYgKFxuICAgIGRhdGEgPT09IG51bGwgfHxcbiAgICB0eXBlb2YgZGF0YSAhPT0gJ29iamVjdCcgfHxcbiAgICAhKCd3b3JrZXJfand0JyBpbiBkYXRhKSB8fFxuICAgIHR5cGVvZiBkYXRhLndvcmtlcl9qd3QgIT09ICdzdHJpbmcnIHx8XG4gICAgISgnZXhwaXJlc19pbicgaW4gZGF0YSkgfHxcbiAgICB0eXBlb2YgZGF0YS5leHBpcmVzX2luICE9PSAnbnVtYmVyJyB8fFxuICAgICEoJ2FwaV9iYXNlX3VybCcgaW4gZGF0YSkgfHxcbiAgICB0eXBlb2YgZGF0YS5hcGlfYmFzZV91cmwgIT09ICdzdHJpbmcnIHx8XG4gICAgISgnd29ya2VyX2Vwb2NoJyBpbiBkYXRhKVxuICApIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgW2NvZGUtc2Vzc2lvbl0gL2JyaWRnZSByZXNwb25zZSBtYWxmb3JtZWQgKG5lZWQgd29ya2VyX2p3dCwgZXhwaXJlc19pbiwgYXBpX2Jhc2VfdXJsLCB3b3JrZXJfZXBvY2gpOiAke2pzb25TdHJpbmdpZnkoZGF0YSkuc2xpY2UoMCwgMjAwKX1gLFxuICAgIClcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIC8vIHByb3RvanNvbiBzZXJpYWxpemVzIGludDY0IGFzIGEgc3RyaW5nIHRvIGF2b2lkIEpTIHByZWNpc2lvbiBsb3NzO1xuICAvLyBHbyBtYXkgYWxzbyByZXR1cm4gYSBudW1iZXIgZGVwZW5kaW5nIG9uIGVuY29kZXIgc2V0dGluZ3MuXG4gIGNvbnN0IHJhd0Vwb2NoID0gZGF0YS53b3JrZXJfZXBvY2hcbiAgY29uc3QgZXBvY2ggPSB0eXBlb2YgcmF3RXBvY2ggPT09ICdzdHJpbmcnID8gTnVtYmVyKHJhd0Vwb2NoKSA6IHJhd0Vwb2NoXG4gIGlmIChcbiAgICB0eXBlb2YgZXBvY2ggIT09ICdudW1iZXInIHx8XG4gICAgIU51bWJlci5pc0Zpbml0ZShlcG9jaCkgfHxcbiAgICAhTnVtYmVyLmlzU2FmZUludGVnZXIoZXBvY2gpXG4gICkge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbY29kZS1zZXNzaW9uXSAvYnJpZGdlIHdvcmtlcl9lcG9jaCBpbnZhbGlkOiAke2pzb25TdHJpbmdpZnkocmF3RXBvY2gpfWAsXG4gICAgKVxuICAgIHJldHVybiBudWxsXG4gIH1cbiAgcmV0dXJuIHtcbiAgICB3b3JrZXJfand0OiBkYXRhLndvcmtlcl9qd3QsXG4gICAgYXBpX2Jhc2VfdXJsOiBkYXRhLmFwaV9iYXNlX3VybCxcbiAgICBleHBpcmVzX2luOiBkYXRhLmV4cGlyZXNfaW4sXG4gICAgd29ya2VyX2Vwb2NoOiBlcG9jaCxcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBO0FBQ0E7QUFNQTtBQUdBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU0sb0JBQW9CO0FBRTFCLFNBQVMsYUFBYSxhQUE2QztBQUNqRSxTQUFPO0FBQUEsSUFDTCxlQUFlLFVBQVUsV0FBVztBQUFBLElBQ3BDLGdCQUFnQjtBQUFBLElBQ2hCLHFCQUFxQjtBQUFBLEVBQ3ZCO0FBQ0Y7QUFFQSxlQUFzQixrQkFDcEIsU0FDQSxhQUNBLE9BQ0EsV0FDQSxNQUN3QjtBQUN4QixRQUFNLE1BQU0sR0FBRyxPQUFPO0FBQ3RCLE1BQUk7QUFDSixNQUFJO0FBQ0YsZUFBVyxNQUFNLGNBQU07QUFBQSxNQUNyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSUEsRUFBRSxPQUFPLFFBQVEsQ0FBQyxHQUFHLEdBQUksTUFBTSxTQUFTLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRztBQUFBLE1BQ3ZEO0FBQUEsUUFDRSxTQUFTLGFBQWEsV0FBVztBQUFBLFFBQ2pDLFNBQVM7QUFBQSxRQUNULGdCQUFnQixPQUFLLElBQUk7QUFBQSxNQUMzQjtBQUFBLElBQ0Y7QUFBQSxFQUNGLFNBQVMsS0FBYztBQUNyQjtBQUFBLE1BQ0UsaURBQWlELGFBQWEsR0FBRyxDQUFDO0FBQUEsSUFDcEU7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQUVBLE1BQUks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
