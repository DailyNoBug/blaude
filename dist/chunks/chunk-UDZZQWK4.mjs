#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  SerialBatchEventUploader
} from "./chunk-AVZQW3S6.mjs";
import {
  CircularBuffer,
  init_CircularBuffer
} from "./chunk-OTDPNGFK.mjs";
import {
  getSessionIngressAuthToken,
  init_sessionActivity,
  init_sessionIngressAuth,
  registerSessionActivityCallback,
  unregisterSessionActivityCallback
} from "./chunk-SQ6KOOZS.mjs";
import {
  getWebSocketProxyAgent,
  getWebSocketProxyUrl,
  getWebSocketTLSOptions,
  init_mtls,
  init_proxy
} from "./chunk-DNXEQXI7.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-MDXHK5AD.mjs";
import {
  axios_default,
  init_axios
} from "./chunk-J6MJ6UVK.mjs";
import {
  init_diagLogs,
  logForDiagnosticsNoPII
} from "./chunk-7SC6PTLR.mjs";
import {
  init_debug,
  init_slowOperations,
  jsonStringify,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import {
  init_envUtils,
  isEnvTruthy
} from "./chunk-6NQGQQQI.mjs";

// src/cli/transports/HybridTransport.ts
init_axios();
init_debug();
init_diagLogs();
init_sessionIngressAuth();

// src/cli/transports/WebSocketTransport.ts
init_analytics();
init_CircularBuffer();
init_debug();
init_diagLogs();
init_envUtils();
init_mtls();
init_proxy();
init_sessionActivity();
init_slowOperations();
var KEEP_ALIVE_FRAME = '{"type":"keep_alive"}\n';
var DEFAULT_MAX_BUFFER_SIZE = 1e3;
var DEFAULT_BASE_RECONNECT_DELAY = 1e3;
var DEFAULT_MAX_RECONNECT_DELAY = 3e4;
var DEFAULT_RECONNECT_GIVE_UP_MS = 6e5;
var DEFAULT_PING_INTERVAL = 1e4;
var DEFAULT_KEEPALIVE_INTERVAL = 3e5;
var SLEEP_DETECTION_THRESHOLD_MS = DEFAULT_MAX_RECONNECT_DELAY * 2;
var PERMANENT_CLOSE_CODES = /* @__PURE__ */ new Set([
  1002,
  // protocol error — server rejected handshake (e.g. session reaped)
  4001,
  // session expired / not found
  4003
  // unauthorized
]);
var WebSocketTransport = class {
  ws = null;
  lastSentId = null;
  url;
  state = "idle";
  onData;
  onCloseCallback;
  onConnectCallback;
  headers;
  sessionId;
  autoReconnect;
  isBridge;
  // Reconnection state
  reconnectAttempts = 0;
  reconnectStartTime = null;
  reconnectTimer = null;
  lastReconnectAttemptTime = null;
  // Wall-clock of last WS data-frame activity (inbound message or outbound
  // ws.send). Used to compute idle time at close — the signal for diagnosing
  // proxy idle-timeout RSTs (e.g. Cloudflare 5-min). Excludes ping/pong
  // control frames (proxies don't count those).
  lastActivityTime = 0;
  // Ping interval for connection health checks
  pingInterval = null;
  pongReceived = true;
  // Periodic keep_alive data frames to reset proxy idle timers
  keepAliveInterval = null;
  // Message buffering for replay on reconnection
  messageBuffer;
  // Track which runtime's WS we're using so we can detach listeners
  // with the matching API (removeEventListener vs. off).
  isBunWs = false;
  // Captured at connect() time for handleOpenEvent timing. Stored as an
  // instance field so the onOpen handler can be a stable class-property
  // arrow function (removable in doDisconnect) instead of a closure over
  // a local variable.
  connectStartTime = 0;
  refreshHeaders;
  constructor(url, headers = {}, sessionId, refreshHeaders, options) {
    this.url = url;
    this.headers = headers;
    this.sessionId = sessionId;
    this.refreshHeaders = refreshHeaders;
    this.autoReconnect = options?.autoReconnect ?? true;
    this.isBridge = options?.isBridge ?? false;
    this.messageBuffer = new CircularBuffer(DEFAULT_MAX_BUFFER_SIZE);
  }
  async connect() {
    if (this.state !== "idle" && this.state !== "reconnecting") {
      logForDebugging(
        `WebSocketTransport: Cannot connect, current state is ${this.state}`,
        { level: "error" }
      );
      logForDiagnosticsNoPII("error", "cli_websocket_connect_failed");
      return;
    }
    this.state = "reconnecting";
    this.connectStartTime = Date.now();
    logForDebugging(`WebSocketTransport: Opening ${this.url.href}`);
    logForDiagnosticsNoPII("info", "cli_websocket_connect_opening");
    const headers = { ...this.headers };
    if (this.lastSentId) {
      headers["X-Last-Request-Id"] = this.lastSentId;
      logForDebugging(
        `WebSocketTransport: Adding X-Last-Request-Id header: ${this.lastSentId}`
      );
    }
    if (typeof Bun !== "undefined") {
      const ws = new globalThis.WebSocket(this.url.href, {
        headers,
        proxy: getWebSocketProxyUrl(this.url.href),
        tls: getWebSocketTLSOptions() || void 0
      });
      this.ws = ws;
      this.isBunWs = true;
      ws.addEventListener("open", this.onBunOpen);
      ws.addEventListener("message", this.onBunMessage);
      ws.addEventListener("error", this.onBunError);
      ws.addEventListener("close", this.onBunClose);
      ws.addEventListener("pong", this.onPong);
    } else {
      const { default: WS } = await import("./wrapper-U6YMRWUE.mjs");
      const ws = new WS(this.url.href, {
        headers,
        agent: getWebSocketProxyAgent(this.url.href),
        ...getWebSocketTLSOptions()
      });
      this.ws = ws;
      this.isBunWs = false;
      ws.on("open", this.onNodeOpen);
      ws.on("message", this.onNodeMessage);
      ws.on("error", this.onNodeError);
      ws.on("close", this.onNodeClose);
      ws.on("pong", this.onPong);
    }
  }
  // --- Bun (native WebSocket) event handlers ---
  // Stored as class-property arrow functions so they can be removed in
  // doDisconnect(). Without removal, each reconnect orphans the old WS
  // object + its 5 closures until GC, which accumulates under network
  // instability. Mirrors the pattern in src/utils/mcpWebSocketTransport.ts.
  onBunOpen = () => {
    this.handleOpenEvent();
    if (this.lastSentId) {
      this.replayBufferedMessages("");
    }
  };
  onBunMessage = (event) => {
    const message = typeof event.data === "string" ? event.data : String(event.data);
    this.lastActivityTime = Date.now();
    logForDiagnosticsNoPII("info", "cli_websocket_message_received", {
      length: message.length
    });
    if (this.onData) {
      this.onData(message);
    }
  };
  onBunError = () => {
    logForDebugging("WebSocketTransport: Error", {
      level: "error"
    });
    logForDiagnosticsNoPII("error", "cli_websocket_connect_error");
  };
  // eslint-disable-next-line eslint-plugin-n/no-unsupported-features/node-builtins
  onBunClose = (event) => {
    const isClean = event.code === 1e3 || event.code === 1001;
    logForDebugging(
      `WebSocketTransport: Closed: ${event.code}`,
      isClean ? void 0 : { level: "error" }
    );
    logForDiagnosticsNoPII("error", "cli_websocket_connect_closed");
    this.handleConnectionError(event.code);
  };
  // --- Node (ws package) event handlers ---
  onNodeOpen = () => {
    const ws = this.ws;
    this.handleOpenEvent();
    if (!ws) return;
    const nws = ws;
    const upgradeResponse = nws.upgradeReq;
    if (upgradeResponse?.headers?.["x-last-request-id"]) {
      const serverLastId = upgradeResponse.headers["x-last-request-id"];
      this.replayBufferedMessages(serverLastId);
    }
  };
  onNodeMessage = (data) => {
    const message = data.toString();
    this.lastActivityTime = Date.now();
    logForDiagnosticsNoPII("info", "cli_websocket_message_received", {
      length: message.length
    });
    if (this.onData) {
      this.onData(message);
    }
  };
  onNodeError = (err) => {
    logForDebugging(`WebSocketTransport: Error: ${err.message}`, {
      level: "error"
    });
    logForDiagnosticsNoPII("error", "cli_websocket_connect_error");
  };
  onNodeClose = (code, _reason) => {
    const isClean = code === 1e3 || code === 1001;
    logForDebugging(
      `WebSocketTransport: Closed: ${code}`,
      isClean ? void 0 : { level: "error" }
    );
    logForDiagnosticsNoPII("error", "cli_websocket_connect_closed");
    this.handleConnectionError(code);
  };
  // --- Shared handlers ---
  onPong = () => {
    this.pongReceived = true;
  };
  handleOpenEvent() {
    const connectDuration = Date.now() - this.connectStartTime;
    logForDebugging("WebSocketTransport: Connected");
    logForDiagnosticsNoPII("info", "cli_websocket_connect_connected", {
      duration_ms: connectDuration
    });
    if (this.isBridge && this.reconnectStartTime !== null) {
      logEvent("tengu_ws_transport_reconnected", {
        attempts: this.reconnectAttempts,
        downtimeMs: Date.now() - this.reconnectStartTime
      });
    }
    this.reconnectAttempts = 0;
    this.reconnectStartTime = null;
    this.lastReconnectAttemptTime = null;
    this.lastActivityTime = Date.now();
    this.state = "connected";
    this.onConnectCallback?.();
    this.startPingInterval();
    this.startKeepaliveInterval();
    registerSessionActivityCallback(() => {
      void this.write({ type: "keep_alive" });
    });
  }
  sendLine(line) {
    if (!this.ws || this.state !== "connected") {
      logForDebugging("WebSocketTransport: Not connected");
      logForDiagnosticsNoPII("info", "cli_websocket_send_not_connected");
      return false;
    }
    try {
      this.ws.send(line);
      this.lastActivityTime = Date.now();
      return true;
    } catch (error) {
      logForDebugging(`WebSocketTransport: Failed to send: ${error}`, {
        level: "error"
      });
      logForDiagnosticsNoPII("error", "cli_websocket_send_error");
      this.handleConnectionError();
      return false;
    }
  }
  /**
   * Remove all listeners attached in connect() for the given WebSocket.
   * Without this, each reconnect orphans the old WS object + its closures
   * until GC — these accumulate under network instability. Mirrors the
   * pattern in src/utils/mcpWebSocketTransport.ts.
   */
  removeWsListeners(ws) {
    if (this.isBunWs) {
      const nws = ws;
      nws.removeEventListener("open", this.onBunOpen);
      nws.removeEventListener("message", this.onBunMessage);
      nws.removeEventListener("error", this.onBunError);
      nws.removeEventListener("close", this.onBunClose);
      nws.removeEventListener("pong", this.onPong);
    } else {
      const nws = ws;
      nws.off("open", this.onNodeOpen);
      nws.off("message", this.onNodeMessage);
      nws.off("error", this.onNodeError);
      nws.off("close", this.onNodeClose);
      nws.off("pong", this.onPong);
    }
  }
  doDisconnect() {
    this.stopPingInterval();
    this.stopKeepaliveInterval();
    unregisterSessionActivityCallback();
    if (this.ws) {
      this.removeWsListeners(this.ws);
      this.ws.close();
      this.ws = null;
    }
  }
  handleConnectionError(closeCode) {
    logForDebugging(
      `WebSocketTransport: Disconnected from ${this.url.href}` + (closeCode != null ? ` (code ${closeCode})` : "")
    );
    logForDiagnosticsNoPII("info", "cli_websocket_disconnected");
    if (this.isBridge) {
      logEvent("tengu_ws_transport_closed", {
        closeCode,
        msSinceLastActivity: this.lastActivityTime > 0 ? Date.now() - this.lastActivityTime : -1,
        // 'connected' = healthy drop (the Cloudflare case); 'reconnecting' =
        // connect-rejection mid-storm. State isn't mutated until the branches
        // below, so this reads the pre-close value.
        wasConnected: this.state === "connected",
        reconnectAttempts: this.reconnectAttempts
      });
    }
    this.doDisconnect();
    if (this.state === "closing" || this.state === "closed") return;
    let headersRefreshed = false;
    if (closeCode === 4003 && this.refreshHeaders) {
      const freshHeaders = this.refreshHeaders();
      if (freshHeaders.Authorization !== this.headers.Authorization) {
        Object.assign(this.headers, freshHeaders);
        headersRefreshed = true;
        logForDebugging(
          "WebSocketTransport: 4003 received but headers refreshed, scheduling reconnect"
        );
        logForDiagnosticsNoPII("info", "cli_websocket_4003_token_refreshed");
      }
    }
    if (closeCode != null && PERMANENT_CLOSE_CODES.has(closeCode) && !headersRefreshed) {
      logForDebugging(
        `WebSocketTransport: Permanent close code ${closeCode}, not reconnecting`,
        { level: "error" }
      );
      logForDiagnosticsNoPII("error", "cli_websocket_permanent_close", {
        closeCode
      });
      this.state = "closed";
      this.onCloseCallback?.(closeCode);
      return;
    }
    if (!this.autoReconnect) {
      this.state = "closed";
      this.onCloseCallback?.(closeCode);
      return;
    }
    const now = Date.now();
    if (!this.reconnectStartTime) {
      this.reconnectStartTime = now;
    }
    if (this.lastReconnectAttemptTime !== null && now - this.lastReconnectAttemptTime > SLEEP_DETECTION_THRESHOLD_MS) {
      logForDebugging(
        `WebSocketTransport: Detected system sleep (${Math.round((now - this.lastReconnectAttemptTime) / 1e3)}s gap), resetting reconnection budget`
      );
      logForDiagnosticsNoPII("info", "cli_websocket_sleep_detected", {
        gapMs: now - this.lastReconnectAttemptTime
      });
      this.reconnectStartTime = now;
      this.reconnectAttempts = 0;
    }
    this.lastReconnectAttemptTime = now;
    const elapsed = now - this.reconnectStartTime;
    if (elapsed < DEFAULT_RECONNECT_GIVE_UP_MS) {
      if (this.reconnectTimer) {
        clearTimeout(this.reconnectTimer);
        this.reconnectTimer = null;
      }
      if (!headersRefreshed && this.refreshHeaders) {
        const freshHeaders = this.refreshHeaders();
        Object.assign(this.headers, freshHeaders);
        logForDebugging("WebSocketTransport: Refreshed headers for reconnect");
      }
      this.state = "reconnecting";
      this.reconnectAttempts++;
      const baseDelay = Math.min(
        DEFAULT_BASE_RECONNECT_DELAY * Math.pow(2, this.reconnectAttempts - 1),
        DEFAULT_MAX_RECONNECT_DELAY
      );
      const delay = Math.max(
        0,
        baseDelay + baseDelay * 0.25 * (2 * Math.random() - 1)
      );
      logForDebugging(
        `WebSocketTransport: Reconnecting in ${Math.round(delay)}ms (attempt ${this.reconnectAttempts}, ${Math.round(elapsed / 1e3)}s elapsed)`
      );
      logForDiagnosticsNoPII("error", "cli_websocket_reconnect_attempt", {
        reconnectAttempts: this.reconnectAttempts
      });
      if (this.isBridge) {
        logEvent("tengu_ws_transport_reconnecting", {
          attempt: this.reconnectAttempts,
          elapsedMs: elapsed,
          delayMs: Math.round(delay)
        });
      }
      this.reconnectTimer = setTimeout(() => {
        this.reconnectTimer = null;
        void this.connect();
      }, delay);
    } else {
      logForDebugging(
        `WebSocketTransport: Reconnection time budget exhausted after ${Math.round(elapsed / 1e3)}s for ${this.url.href}`,
        { level: "error" }
      );
      logForDiagnosticsNoPII("error", "cli_websocket_reconnect_exhausted", {
        reconnectAttempts: this.reconnectAttempts,
        elapsedMs: elapsed
      });
      this.state = "closed";
      if (this.onCloseCallback) {
        this.onCloseCallback(closeCode);
      }
    }
  }
  close() {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    this.stopPingInterval();
    this.stopKeepaliveInterval();
    unregisterSessionActivityCallback();
    this.state = "closing";
    this.doDisconnect();
  }
  replayBufferedMessages(lastId) {
    const messages = this.messageBuffer.toArray();
    if (messages.length === 0) return;
    let startIndex = 0;
    if (lastId) {
      const lastConfirmedIndex = messages.findIndex(
        (message) => "uuid" in message && message.uuid === lastId
      );
      if (lastConfirmedIndex >= 0) {
        startIndex = lastConfirmedIndex + 1;
        const remaining = messages.slice(startIndex);
        this.messageBuffer.clear();
        this.messageBuffer.addAll(remaining);
        if (remaining.length === 0) {
          this.lastSentId = null;
        }
        logForDebugging(
          `WebSocketTransport: Evicted ${startIndex} confirmed messages, ${remaining.length} remaining`
        );
        logForDiagnosticsNoPII(
          "info",
          "cli_websocket_evicted_confirmed_messages",
          {
            evicted: startIndex,
            remaining: remaining.length
          }
        );
      }
    }
    const messagesToReplay = messages.slice(startIndex);
    if (messagesToReplay.length === 0) {
      logForDebugging("WebSocketTransport: No new messages to replay");
      logForDiagnosticsNoPII("info", "cli_websocket_no_messages_to_replay");
      return;
    }
    logForDebugging(
      `WebSocketTransport: Replaying ${messagesToReplay.length} buffered messages`
    );
    logForDiagnosticsNoPII("info", "cli_websocket_messages_to_replay", {
      count: messagesToReplay.length
    });
    for (const message of messagesToReplay) {
      const line = jsonStringify(message) + "\n";
      const success = this.sendLine(line);
      if (!success) {
        this.handleConnectionError();
        break;
      }
    }
  }
  isConnectedStatus() {
    return this.state === "connected";
  }
  isClosedStatus() {
    return this.state === "closed";
  }
  setOnData(callback) {
    this.onData = callback;
  }
  setOnConnect(callback) {
    this.onConnectCallback = callback;
  }
  setOnClose(callback) {
    this.onCloseCallback = callback;
  }
  getStateLabel() {
    return this.state;
  }
  async write(message) {
    if ("uuid" in message && typeof message.uuid === "string") {
      this.messageBuffer.add(message);
      this.lastSentId = message.uuid;
    }
    const line = jsonStringify(message) + "\n";
    if (this.state !== "connected") {
      return;
    }
    const sessionLabel = this.sessionId ? ` session=${this.sessionId}` : "";
    const detailLabel = this.getControlMessageDetailLabel(message);
    logForDebugging(
      `WebSocketTransport: Sending message type=${message.type}${sessionLabel}${detailLabel}`
    );
    this.sendLine(line);
  }
  getControlMessageDetailLabel(message) {
    if (message.type === "control_request") {
      const { request_id, request } = message;
      const toolName = request.subtype === "can_use_tool" ? request.tool_name : "";
      return ` subtype=${request.subtype} request_id=${request_id}${toolName ? ` tool=${toolName}` : ""}`;
    }
    if (message.type === "control_response") {
      const { subtype, request_id } = message.response;
      return ` subtype=${subtype} request_id=${request_id}`;
    }
    return "";
  }
  startPingInterval() {
    this.stopPingInterval();
    this.pongReceived = true;
    let lastTickTime = Date.now();
    this.pingInterval = setInterval(() => {
      if (this.state === "connected" && this.ws) {
        const now = Date.now();
        const gap = now - lastTickTime;
        lastTickTime = now;
        if (gap > SLEEP_DETECTION_THRESHOLD_MS) {
          logForDebugging(
            `WebSocketTransport: ${Math.round(gap / 1e3)}s tick gap detected \u2014 process was suspended, forcing reconnect`
          );
          logForDiagnosticsNoPII(
            "info",
            "cli_websocket_sleep_detected_on_ping",
            { gapMs: gap }
          );
          this.handleConnectionError();
          return;
        }
        if (!this.pongReceived) {
          logForDebugging(
            "WebSocketTransport: No pong received, connection appears dead",
            { level: "error" }
          );
          logForDiagnosticsNoPII("error", "cli_websocket_pong_timeout");
          this.handleConnectionError();
          return;
        }
        this.pongReceived = false;
        try {
          this.ws.ping?.();
        } catch (error) {
          logForDebugging(`WebSocketTransport: Ping failed: ${error}`, {
            level: "error"
          });
          logForDiagnosticsNoPII("error", "cli_websocket_ping_failed");
        }
      }
    }, DEFAULT_PING_INTERVAL);
  }
  stopPingInterval() {
    if (this.pingInterval) {
      clearInterval(this.pingInterval);
      this.pingInterval = null;
    }
  }
  startKeepaliveInterval() {
    this.stopKeepaliveInterval();
    if (isEnvTruthy(process.env.CLAUDE_CODE_REMOTE)) {
      return;
    }
    this.keepAliveInterval = setInterval(() => {
      if (this.state === "connected" && this.ws) {
        try {
          this.ws.send(KEEP_ALIVE_FRAME);
          this.lastActivityTime = Date.now();
          logForDebugging(
            "WebSocketTransport: Sent periodic keep_alive data frame"
          );
        } catch (error) {
          logForDebugging(
            `WebSocketTransport: Periodic keep_alive failed: ${error}`,
            { level: "error" }
          );
          logForDiagnosticsNoPII("error", "cli_websocket_keepalive_failed");
        }
      }
    }, DEFAULT_KEEPALIVE_INTERVAL);
  }
  stopKeepaliveInterval() {
    if (this.keepAliveInterval) {
      clearInterval(this.keepAliveInterval);
      this.keepAliveInterval = null;
    }
  }
};

// src/cli/transports/HybridTransport.ts
var BATCH_FLUSH_INTERVAL_MS = 100;
var POST_TIMEOUT_MS = 15e3;
var CLOSE_GRACE_MS = 3e3;
var HybridTransport = class extends WebSocketTransport {
  postUrl;
  uploader;
  // stream_event delay buffer — accumulates content deltas for up to
  // BATCH_FLUSH_INTERVAL_MS before enqueueing (reduces POST count)
  streamEventBuffer = [];
  streamEventTimer = null;
  constructor(url, headers = {}, sessionId, refreshHeaders, options) {
    super(url, headers, sessionId, refreshHeaders, options);
    const { maxConsecutiveFailures, onBatchDropped } = options ?? {};
    this.postUrl = convertWsUrlToPostUrl(url);
    this.uploader = new SerialBatchEventUploader({
      // Large cap — session-ingress accepts arbitrary batch sizes. Events
      // naturally batch during in-flight POSTs; this just bounds the payload.
      maxBatchSize: 500,
      // Bridge callers use `void transport.write()` — backpressure doesn't
      // apply (they don't await). A batch >maxQueueSize deadlocks (see
      // SerialBatchEventUploader backpressure check). So set it high enough
      // to be a memory bound only. Wire real backpressure in a follow-up
      // once callers await.
      maxQueueSize: 1e5,
      baseDelayMs: 500,
      maxDelayMs: 8e3,
      jitterMs: 1e3,
      // Optional cap so a persistently-failing server can't pin the drain
      // loop for the lifetime of the process. Undefined = indefinite retry.
      // replBridge sets this; the 1P transportUtils path does not.
      maxConsecutiveFailures,
      onBatchDropped: (batchSize, failures) => {
        logForDiagnosticsNoPII(
          "error",
          "cli_hybrid_batch_dropped_max_failures",
          {
            batchSize,
            failures
          }
        );
        onBatchDropped?.(batchSize, failures);
      },
      send: (batch) => this.postOnce(batch)
    });
    logForDebugging(`HybridTransport: POST URL = ${this.postUrl}`);
    logForDiagnosticsNoPII("info", "cli_hybrid_transport_initialized");
  }
  /**
   * Enqueue a message and wait for the queue to drain. Returning flush()
   * preserves the contract that `await write()` resolves after the event is
   * POSTed (relied on by tests and replBridge's initial flush). Fire-and-forget
   * callers (`void transport.write()`) are unaffected — they don't await,
   * so the later resolution doesn't add latency.
   */
  async write(message) {
    if (message.type === "stream_event") {
      this.streamEventBuffer.push(message);
      if (!this.streamEventTimer) {
        this.streamEventTimer = setTimeout(
          () => this.flushStreamEvents(),
          BATCH_FLUSH_INTERVAL_MS
        );
      }
      return;
    }
    await this.uploader.enqueue([...this.takeStreamEvents(), message]);
    return this.uploader.flush();
  }
  async writeBatch(messages) {
    await this.uploader.enqueue([...this.takeStreamEvents(), ...messages]);
    return this.uploader.flush();
  }
  /** Snapshot before/after writeBatch() to detect silent drops. */
  get droppedBatchCount() {
    return this.uploader.droppedBatchCount;
  }
  /**
   * Block until all pending events are POSTed. Used by bridge's initial
   * history flush so onStateChange('connected') fires after persistence.
   */
  flush() {
    void this.uploader.enqueue(this.takeStreamEvents());
    return this.uploader.flush();
  }
  /** Take ownership of buffered stream_events and clear the delay timer. */
  takeStreamEvents() {
    if (this.streamEventTimer) {
      clearTimeout(this.streamEventTimer);
      this.streamEventTimer = null;
    }
    const buffered = this.streamEventBuffer;
    this.streamEventBuffer = [];
    return buffered;
  }
  /** Delay timer fired — enqueue accumulated stream_events. */
  flushStreamEvents() {
    this.streamEventTimer = null;
    void this.uploader.enqueue(this.takeStreamEvents());
  }
  close() {
    if (this.streamEventTimer) {
      clearTimeout(this.streamEventTimer);
      this.streamEventTimer = null;
    }
    this.streamEventBuffer = [];
    const uploader = this.uploader;
    let graceTimer;
    void Promise.race([
      uploader.flush(),
      new Promise((r) => {
        graceTimer = setTimeout(r, CLOSE_GRACE_MS);
      })
    ]).finally(() => {
      clearTimeout(graceTimer);
      uploader.close();
    });
    super.close();
  }
  /**
   * Single-attempt POST. Throws on retryable failures (429, 5xx, network)
   * so SerialBatchEventUploader re-queues and retries. Returns on success
   * and on permanent failures (4xx non-429, no token) so the uploader moves on.
   */
  async postOnce(events) {
    const sessionToken = getSessionIngressAuthToken();
    if (!sessionToken) {
      logForDebugging("HybridTransport: No session token available for POST");
      logForDiagnosticsNoPII("warn", "cli_hybrid_post_no_token");
      return;
    }
    const headers = {
      Authorization: `Bearer ${sessionToken}`,
      "Content-Type": "application/json"
    };
    let response;
    try {
      response = await axios_default.post(
        this.postUrl,
        { events },
        {
          headers,
          validateStatus: () => true,
          timeout: POST_TIMEOUT_MS
        }
      );
    } catch (error) {
      const axiosError = error;
      logForDebugging(`HybridTransport: POST error: ${axiosError.message}`);
      logForDiagnosticsNoPII("warn", "cli_hybrid_post_network_error");
      throw error;
    }
    if (response.status >= 200 && response.status < 300) {
      logForDebugging(`HybridTransport: POST success count=${events.length}`);
      return;
    }
    if (response.status >= 400 && response.status < 500 && response.status !== 429) {
      logForDebugging(
        `HybridTransport: POST returned ${response.status} (permanent), dropping`
      );
      logForDiagnosticsNoPII("warn", "cli_hybrid_post_client_error", {
        status: response.status
      });
      return;
    }
    logForDebugging(
      `HybridTransport: POST returned ${response.status} (retryable)`
    );
    logForDiagnosticsNoPII("warn", "cli_hybrid_post_retryable_error", {
      status: response.status
    });
    throw new Error(`POST failed with ${response.status}`);
  }
};
function convertWsUrlToPostUrl(wsUrl) {
  const protocol = wsUrl.protocol === "wss:" ? "https:" : "http:";
  let pathname = wsUrl.pathname;
  pathname = pathname.replace("/ws/", "/session/");
  if (!pathname.endsWith("/events")) {
    pathname = pathname.endsWith("/") ? pathname + "events" : pathname + "/events";
  }
  return `${protocol}//${wsUrl.host}${pathname}${wsUrl.search}`;
}

export {
  WebSocketTransport,
  HybridTransport
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NsaS90cmFuc3BvcnRzL0h5YnJpZFRyYW5zcG9ydC50cyIsICIuLi8uLi9zcmMvY2xpL3RyYW5zcG9ydHMvV2ViU29ja2V0VHJhbnNwb3J0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgYXhpb3MsIHsgdHlwZSBBeGlvc0Vycm9yIH0gZnJvbSAnYXhpb3MnXG5pbXBvcnQgdHlwZSB7IFN0ZG91dE1lc3NhZ2UgfSBmcm9tICdzcmMvZW50cnlwb2ludHMvc2RrL2NvbnRyb2xUeXBlcy5qcydcbmltcG9ydCB7IGxvZ0ZvckRlYnVnZ2luZyB9IGZyb20gJy4uLy4uL3V0aWxzL2RlYnVnLmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSB9IGZyb20gJy4uLy4uL3V0aWxzL2RpYWdMb2dzLmpzJ1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbkluZ3Jlc3NBdXRoVG9rZW4gfSBmcm9tICcuLi8uLi91dGlscy9zZXNzaW9uSW5ncmVzc0F1dGguanMnXG5pbXBvcnQgeyBTZXJpYWxCYXRjaEV2ZW50VXBsb2FkZXIgfSBmcm9tICcuL1NlcmlhbEJhdGNoRXZlbnRVcGxvYWRlci5qcydcbmltcG9ydCB7XG4gIFdlYlNvY2tldFRyYW5zcG9ydCxcbiAgdHlwZSBXZWJTb2NrZXRUcmFuc3BvcnRPcHRpb25zLFxufSBmcm9tICcuL1dlYlNvY2tldFRyYW5zcG9ydC5qcydcblxuY29uc3QgQkFUQ0hfRkxVU0hfSU5URVJWQUxfTVMgPSAxMDBcbi8vIFBlci1hdHRlbXB0IFBPU1QgdGltZW91dC4gQm91bmRzIGhvdyBsb25nIGEgc2luZ2xlIHN0dWNrIFBPU1QgY2FuIGJsb2NrXG4vLyB0aGUgc2VyaWFsaXplZCBxdWV1ZS4gV2l0aG91dCB0aGlzLCBhIGh1bmcgY29ubmVjdGlvbiBzdGFsbHMgYWxsIHdyaXRlcy5cbmNvbnN0IFBPU1RfVElNRU9VVF9NUyA9IDE1XzAwMFxuLy8gR3JhY2UgcGVyaW9kIGZvciBxdWV1ZWQgd3JpdGVzIG9uIGNsb3NlKCkuIENvdmVycyBhIGhlYWx0aHkgUE9TVCAofjEwMG1zKVxuLy8gcGx1cyBoZWFkcm9vbTsgYmVzdC1lZmZvcnQsIG5vdCBhIGRlbGl2ZXJ5IGd1YXJhbnRlZSB1bmRlciBkZWdyYWRlZCBuZXR3b3JrLlxuLy8gVm9pZC1lZCAobm90aGluZyBhd2FpdHMgaXQpIHNvIHRoaXMgaXMgYSBsYXN0IHJlc29ydCBcdTIwMTQgcmVwbEJyaWRnZSB0ZWFyZG93blxuLy8gbm93IGNsb3NlcyBBRlRFUiBhcmNoaXZlIHNvIGFyY2hpdmUgbGF0ZW5jeSBpcyB0aGUgcHJpbWFyeSBkcmFpbiB3aW5kb3cuXG4vLyBOT1RFOiBncmFjZWZ1bFNodXRkb3duJ3MgY2xlYW51cCBidWRnZXQgaXMgMnMgKG5vdCB0aGUgNXMgb3V0ZXIgZmFpbHNhZmUpO1xuLy8gM3MgaGVyZSBleGNlZWRzIGl0LCBidXQgdGhlIHByb2Nlc3MgbGl2ZXMgfjJzIGxvbmdlciBmb3IgaG9va3MrYW5hbHl0aWNzLlxuY29uc3QgQ0xPU0VfR1JBQ0VfTVMgPSAzMDAwXG5cbi8qKlxuICogSHlicmlkIHRyYW5zcG9ydDogV2ViU29ja2V0IGZvciByZWFkcywgSFRUUCBQT1NUIGZvciB3cml0ZXMuXG4gKlxuICogV3JpdGUgZmxvdzpcbiAqXG4gKiAgIHdyaXRlKHN0cmVhbV9ldmVudCkgXHUyNTAwXHUyNTEwXG4gKiAgICAgICAgICAgICAgICAgICAgICAgIFx1MjUwMiAoMTAwbXMgdGltZXIpXG4gKiAgICAgICAgICAgICAgICAgICAgICAgIFx1MjUwMlxuICogICAgICAgICAgICAgICAgICAgICAgICBcdTI1QkNcbiAqICAgd3JpdGUob3RoZXIpIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjVCQSB1cGxvYWRlci5lbnF1ZXVlKCkgIChTZXJpYWxCYXRjaEV2ZW50VXBsb2FkZXIpXG4gKiAgICAgICAgICAgICAgICAgICAgICAgIFx1MjVCMiAgICBcdTI1MDJcbiAqICAgd3JpdGVCYXRjaCgpIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUxOCAgICBcdTI1MDIgc2VyaWFsLCBiYXRjaGVkLCByZXRyaWVzIGluZGVmaW5pdGVseSxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdTI1MDIgYmFja3ByZXNzdXJlIGF0IG1heFF1ZXVlU2l6ZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx1MjVCQ1xuICogICAgICAgICAgICAgICAgICAgICAgICBwb3N0T25jZSgpICAoc2luZ2xlIEhUVFAgUE9TVCwgdGhyb3dzIG9uIHJldHJ5YWJsZSlcbiAqXG4gKiBzdHJlYW1fZXZlbnQgbWVzc2FnZXMgYWNjdW11bGF0ZSBpbiBzdHJlYW1FdmVudEJ1ZmZlciBmb3IgdXAgdG8gMTAwbXNcbiAqIGJlZm9yZSBlbnF1ZXVlIChyZWR1Y2VzIFBPU1QgY291bnQgZm9yIGhpZ2gtdm9sdW1lIGNvbnRlbnQgZGVsdGFzKS4gQVxuICogbm9uLXN0cmVhbSB3cml0ZSBmbHVzaGVzIGFueSBidWZmZXJlZCBzdHJlYW1fZXZlbnRzIGZpcnN0IHRvIHByZXNlcnZlIG9yZGVyLlxuICpcbiAqIFNlcmlhbGl6YXRpb24gKyByZXRyeSArIGJhY2twcmVzc3VyZSBhcmUgZGVsZWdhdGVkIHRvIFNlcmlhbEJhdGNoRXZlbnRVcGxvYWRlclxuICogKHNhbWUgcHJpbWl0aXZlIENDUiB1c2VzKS4gQXQgbW9zdCBvbmUgUE9TVCBpbi1mbGlnaHQ7IGV2ZW50cyBhcnJpdmluZyBkdXJpbmdcbiAqIGEgUE9TVCBiYXRjaCBpbnRvIHRoZSBuZXh0IG9uZS4gT24gZmFpbHVyZSwgdGhlIHVwbG9hZGVyIHJlLXF1ZXVlcyBhbmQgcmV0cmllc1xuICogd2l0aCBleHBvbmVudGlhbCBiYWNrb2ZmICsgaml0dGVyLiBJZiB0aGUgcXVldWUgZmlsbHMgcGFzdCBtYXhRdWV1ZVNpemUsXG4gKiBlbnF1ZXVlKCkgYmxvY2tzIFx1MjAxNCBnaXZpbmcgYXdhaXRpbmcgY2FsbGVycyBiYWNrcHJlc3N1cmUuXG4gKlxuICogV2h5IHNlcmlhbGl6ZT8gQnJpZGdlIG1vZGUgZmlyZXMgd3JpdGVzIHZpYSBgdm9pZCB0cmFuc3BvcnQud3JpdGUoKWBcbiAqIChmaXJlLWFuZC1mb3JnZXQpLiBXaXRob3V0IHRoaXMsIGNvbmN1cnJlbnQgUE9TVHMgXHUyMTkyIGNvbmN1cnJlbnQgRmlyZXN0b3JlXG4gKiB3cml0ZXMgdG8gdGhlIHNhbWUgZG9jdW1lbnQgXHUyMTkyIGNvbGxpc2lvbnMgXHUyMTkyIHJldHJ5IHN0b3JtcyBcdTIxOTIgcGFnZXMgb25jYWxsLlxuICovXG5leHBvcnQgY2xhc3MgSHlicmlkVHJhbnNwb3J0IGV4dGVuZHMgV2ViU29ja2V0VHJhbnNwb3J0IHtcbiAgcHJpdmF0ZSBwb3N0VXJsOiBzdHJpbmdcbiAgcHJpdmF0ZSB1cGxvYWRlcjogU2VyaWFsQmF0Y2hFdmVudFVwbG9hZGVyPFN0ZG91dE1lc3NhZ2U+XG5cbiAgLy8gc3RyZWFtX2V2ZW50IGRlbGF5IGJ1ZmZlciBcdTIwMTQgYWNjdW11bGF0ZXMgY29udGVudCBkZWx0YXMgZm9yIHVwIHRvXG4gIC8vIEJBVENIX0ZMVVNIX0lOVEVSVkFMX01TIGJlZm9yZSBlbnF1ZXVlaW5nIChyZWR1Y2VzIFBPU1QgY291bnQpXG4gIHByaXZhdGUgc3RyZWFtRXZlbnRCdWZmZXI6IFN0ZG91dE1lc3NhZ2VbXSA9IFtdXG4gIHByaXZhdGUgc3RyZWFtRXZlbnRUaW1lcjogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gfCBudWxsID0gbnVsbFxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHVybDogVVJMLFxuICAgIGhlYWRlcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fSxcbiAgICBzZXNzaW9uSWQ/OiBzdHJpbmcsXG4gICAgcmVmcmVzaEhlYWRlcnM/OiAoKSA9PiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuICAgIG9wdGlvbnM/OiBXZWJTb2NrZXRUcmFuc3BvcnRPcHRpb25zICYge1xuICAgICAgbWF4Q29uc2VjdXRpdmVGYWlsdXJlcz86IG51bWJlclxuICAgICAgb25CYXRjaERyb3BwZWQ/OiAoYmF0Y2hTaXplOiBudW1iZXIsIGZhaWx1cmVzOiBudW1iZXIpID0+IHZvaWRcbiAgICB9LFxuICApIHtcbiAgICBzdXBlcih1cmwsIGhlYWRlcnMsIHNlc3Npb25JZCwgcmVmcmVzaEhlYWRlcnMsIG9wdGlvbnMpXG4gICAgY29uc3QgeyBtYXhDb25zZWN1dGl2ZUZhaWx1cmVzLCBvbkJhdGNoRHJvcHBlZCB9ID0gb3B0aW9ucyA/PyB7fVxuICAgIHRoaXMucG9zdFVybCA9IGNvbnZlcnRXc1VybFRvUG9zdFVybCh1cmwpXG4gICAgdGhpcy51cGxvYWRlciA9IG5ldyBTZXJpYWxCYXRjaEV2ZW50VXBsb2FkZXI8U3Rkb3V0TWVzc2FnZT4oe1xuICAgICAgLy8gTGFyZ2UgY2FwIFx1MjAxNCBzZXNzaW9uLWluZ3Jlc3MgYWNjZXB0cyBhcmJpdHJhcnkgYmF0Y2ggc2l6ZXMuIEV2ZW50c1xuICAgICAgLy8gbmF0dXJhbGx5IGJhdGNoIGR1cmluZyBpbi1mbGlnaHQgUE9TVHM7IHRoaXMganVzdCBib3VuZHMgdGhlIHBheWxvYWQuXG4gICAgICBtYXhCYXRjaFNpemU6IDUwMCxcbiAgICAgIC8vIEJyaWRnZSBjYWxsZXJzIHVzZSBgdm9pZCB0cmFuc3BvcnQud3JpdGUoKWAgXHUyMDE0IGJhY2twcmVzc3VyZSBkb2Vzbid0XG4gICAgICAvLyBhcHBseSAodGhleSBkb24ndCBhd2FpdCkuIEEgYmF0Y2ggPm1heFF1ZXVlU2l6ZSBkZWFkbG9ja3MgKHNlZVxuICAgICAgLy8gU2VyaWFsQmF0Y2hFdmVudFVwbG9hZGVyIGJhY2twcmVzc3VyZSBjaGVjaykuIFNvIHNldCBpdCBoaWdoIGVub3VnaFxuICAgICAgLy8gdG8gYmUgYSBtZW1vcnkgYm91bmQgb25seS4gV2lyZSByZWFsIGJhY2twcmVzc3VyZSBpbiBhIGZvbGxvdy11cFxuICAgICAgLy8gb25jZSBjYWxsZXJzIGF3YWl0LlxuICAgICAgbWF4UXVldWVTaXplOiAxMDBfMDAwLFxuICAgICAgYmFzZURlbGF5TXM6IDUwMCxcbiAgICAgIG1heERlbGF5TXM6IDgwMDAsXG4gICAgICBqaXR0ZXJNczogMTAwMCxcbiAgICAgIC8vIE9wdGlvbmFsIGNhcCBzbyBhIHBlcnNpc3RlbnRseS1mYWlsaW5nIHNlcnZlciBjYW4ndCBwaW4gdGhlIGRyYWluXG4gICAgICAvLyBsb29wIGZvciB0aGUgbGlmZXRpbWUgb2YgdGhlIHByb2Nlc3MuIFVuZGVmaW5lZCA9IGluZGVmaW5pdGUgcmV0cnkuXG4gICAgICAvLyByZXBsQnJpZGdlIHNldHMgdGhpczsgdGhlIDFQIHRyYW5zcG9ydFV0aWxzIHBhdGggZG9lcyBub3QuXG4gICAgICBtYXhDb25zZWN1dGl2ZUZhaWx1cmVzLFxuICAgICAgb25CYXRjaERyb3BwZWQ6IChiYXRjaFNpemUsIGZhaWx1cmVzKSA9PiB7XG4gICAgICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoXG4gICAgICAgICAgJ2Vycm9yJyxcbiAgICAgICAgICAnY2xpX2h5YnJpZF9iYXRjaF9kcm9wcGVkX21heF9mYWlsdXJlcycsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmF0Y2hTaXplLFxuICAgICAgICAgICAgZmFpbHVyZXMsXG4gICAgICAgICAgfSxcbiAgICAgICAgKVxuICAgICAgICBvbkJhdGNoRHJvcHBlZD8uKGJhdGNoU2l6ZSwgZmFpbHVyZXMpXG4gICAgICB9LFxuICAgICAgc2VuZDogYmF0Y2ggPT4gdGhpcy5wb3N0T25jZShiYXRjaCksXG4gICAgfSlcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoYEh5YnJpZFRyYW5zcG9ydDogUE9TVCBVUkwgPSAke3RoaXMucG9zdFVybH1gKVxuICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2luZm8nLCAnY2xpX2h5YnJpZF90cmFuc3BvcnRfaW5pdGlhbGl6ZWQnKVxuICB9XG5cbiAgLyoqXG4gICAqIEVucXVldWUgYSBtZXNzYWdlIGFuZCB3YWl0IGZvciB0aGUgcXVldWUgdG8gZHJhaW4uIFJldHVybmluZyBmbHVzaCgpXG4gICAqIHByZXNlcnZlcyB0aGUgY29udHJhY3QgdGhhdCBgYXdhaXQgd3JpdGUoKWAgcmVzb2x2ZXMgYWZ0ZXIgdGhlIGV2ZW50IGlzXG4gICAqIFBPU1RlZCAocmVsaWVkIG9uIGJ5IHRlc3RzIGFuZCByZXBsQnJpZGdlJ3MgaW5pdGlhbCBmbHVzaCkuIEZpcmUtYW5kLWZvcmdldFxuICAgKiBjYWxsZXJzIChgdm9pZCB0cmFuc3BvcnQud3JpdGUoKWApIGFyZSB1bmFmZmVjdGVkIFx1MjAxNCB0aGV5IGRvbid0IGF3YWl0LFxuICAgKiBzbyB0aGUgbGF0ZXIgcmVzb2x1dGlvbiBkb2Vzbid0IGFkZCBsYXRlbmN5LlxuICAgKi9cbiAgb3ZlcnJpZGUgYXN5bmMgd3JpdGUobWVzc2FnZTogU3Rkb3V0TWVzc2FnZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICdzdHJlYW1fZXZlbnQnKSB7XG4gICAgICAvLyBEZWxheTogYWNjdW11bGF0ZSBzdHJlYW1fZXZlbnRzIGJyaWVmbHkgYmVmb3JlIGVucXVldWVpbmcuXG4gICAgICAvLyBQcm9taXNlIHJlc29sdmVzIGltbWVkaWF0ZWx5IFx1MjAxNCBjYWxsZXJzIGRvbid0IGF3YWl0IHN0cmVhbV9ldmVudHMuXG4gICAgICB0aGlzLnN0cmVhbUV2ZW50QnVmZmVyLnB1c2gobWVzc2FnZSlcbiAgICAgIGlmICghdGhpcy5zdHJlYW1FdmVudFRpbWVyKSB7XG4gICAgICAgIHRoaXMuc3RyZWFtRXZlbnRUaW1lciA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgKCkgPT4gdGhpcy5mbHVzaFN0cmVhbUV2ZW50cygpLFxuICAgICAgICAgIEJBVENIX0ZMVVNIX0lOVEVSVkFMX01TLFxuICAgICAgICApXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSW1tZWRpYXRlOiBmbHVzaCBhbnkgYnVmZmVyZWQgc3RyZWFtX2V2ZW50cyAob3JkZXJpbmcpLCB0aGVuIHRoaXMgZXZlbnQuXG4gICAgYXdhaXQgdGhpcy51cGxvYWRlci5lbnF1ZXVlKFsuLi50aGlzLnRha2VTdHJlYW1FdmVudHMoKSwgbWVzc2FnZV0pXG4gICAgcmV0dXJuIHRoaXMudXBsb2FkZXIuZmx1c2goKVxuICB9XG5cbiAgYXN5bmMgd3JpdGVCYXRjaChtZXNzYWdlczogU3Rkb3V0TWVzc2FnZVtdKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy51cGxvYWRlci5lbnF1ZXVlKFsuLi50aGlzLnRha2VTdHJlYW1FdmVudHMoKSwgLi4ubWVzc2FnZXNdKVxuICAgIHJldHVybiB0aGlzLnVwbG9hZGVyLmZsdXNoKClcbiAgfVxuXG4gIC8qKiBTbmFwc2hvdCBiZWZvcmUvYWZ0ZXIgd3JpdGVCYXRjaCgpIHRvIGRldGVjdCBzaWxlbnQgZHJvcHMuICovXG4gIGdldCBkcm9wcGVkQmF0Y2hDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnVwbG9hZGVyLmRyb3BwZWRCYXRjaENvdW50XG4gIH1cblxuICAvKipcbiAgICogQmxvY2sgdW50aWwgYWxsIHBlbmRpbmcgZXZlbnRzIGFyZSBQT1NUZWQuIFVzZWQgYnkgYnJpZGdlJ3MgaW5pdGlhbFxuICAgKiBoaXN0b3J5IGZsdXNoIHNvIG9uU3RhdGVDaGFuZ2UoJ2Nvbm5lY3RlZCcpIGZpcmVzIGFmdGVyIHBlcnNpc3RlbmNlLlxuICAgKi9cbiAgZmx1c2goKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdm9pZCB0aGlzLnVwbG9hZGVyLmVucXVldWUodGhpcy50YWtlU3RyZWFtRXZlbnRzKCkpXG4gICAgcmV0dXJuIHRoaXMudXBsb2FkZXIuZmx1c2goKVxuICB9XG5cbiAgLyoqIFRha2Ugb3duZXJzaGlwIG9mIGJ1ZmZlcmVkIHN0cmVhbV9ldmVudHMgYW5kIGNsZWFyIHRoZSBkZWxheSB0aW1lci4gKi9cbiAgcHJpdmF0ZSB0YWtlU3RyZWFtRXZlbnRzKCk6IFN0ZG91dE1lc3NhZ2VbXSB7XG4gICAgaWYgKHRoaXMuc3RyZWFtRXZlbnRUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RyZWFtRXZlbnRUaW1lcilcbiAgICAgIHRoaXMuc3RyZWFtRXZlbnRUaW1lciA9IG51bGxcbiAgICB9XG4gICAgY29uc3QgYnVmZmVyZWQgPSB0aGlzLnN0cmVhbUV2ZW50QnVmZmVyXG4gICAgdGhpcy5zdHJlYW1FdmVudEJ1ZmZlciA9IFtdXG4gICAgcmV0dXJuIGJ1ZmZlcmVkXG4gIH1cblxuICAvKiogRGVsYXkgdGltZXIgZmlyZWQgXHUyMDE0IGVucXVldWUgYWNjdW11bGF0ZWQgc3RyZWFtX2V2ZW50cy4gKi9cbiAgcHJpdmF0ZSBmbHVzaFN0cmVhbUV2ZW50cygpOiB2b2lkIHtcbiAgICB0aGlzLnN0cmVhbUV2ZW50VGltZXIgPSBudWxsXG4gICAgdm9pZCB0aGlzLnVwbG9hZGVyLmVucXVldWUodGhpcy50YWtlU3RyZWFtRXZlbnRzKCkpXG4gIH1cblxuICBvdmVycmlkZSBjbG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdHJlYW1FdmVudFRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5zdHJlYW1FdmVudFRpbWVyKVxuICAgICAgdGhpcy5zdHJlYW1FdmVudFRpbWVyID0gbnVsbFxuICAgIH1cbiAgICB0aGlzLnN0cmVhbUV2ZW50QnVmZmVyID0gW11cbiAgICAvLyBHcmFjZSBwZXJpb2QgZm9yIHF1ZXVlZCB3cml0ZXMgXHUyMDE0IGZhbGxiYWNrLiByZXBsQnJpZGdlIHRlYXJkb3duIG5vd1xuICAgIC8vIGF3YWl0cyBhcmNoaXZlIGJldHdlZW4gd3JpdGUgYW5kIGNsb3NlIChzZWUgQ0xPU0VfR1JBQ0VfTVMpLCBzb1xuICAgIC8vIGFyY2hpdmUgbGF0ZW5jeSBpcyB0aGUgcHJpbWFyeSBkcmFpbiB3aW5kb3cgYW5kIHRoaXMgaXMgYSBsYXN0XG4gICAgLy8gcmVzb3J0LiBLZWVwIGNsb3NlKCkgc3luYyAocmV0dXJucyBpbW1lZGlhdGVseSkgYnV0IGRlZmVyXG4gICAgLy8gdXBsb2FkZXIuY2xvc2UoKSBzbyBhbnkgcmVtYWluaW5nIHF1ZXVlIGdldHMgYSBjaGFuY2UgdG8gZmluaXNoLlxuICAgIGNvbnN0IHVwbG9hZGVyID0gdGhpcy51cGxvYWRlclxuICAgIGxldCBncmFjZVRpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IHVuZGVmaW5lZFxuICAgIHZvaWQgUHJvbWlzZS5yYWNlKFtcbiAgICAgIHVwbG9hZGVyLmZsdXNoKCksXG4gICAgICBuZXcgUHJvbWlzZTx2b2lkPihyID0+IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4IC0tIG5lZWQgdGltZXIgcmVmIGZvciBjbGVhclRpbWVvdXRcbiAgICAgICAgZ3JhY2VUaW1lciA9IHNldFRpbWVvdXQociwgQ0xPU0VfR1JBQ0VfTVMpXG4gICAgICB9KSxcbiAgICBdKS5maW5hbGx5KCgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dChncmFjZVRpbWVyKVxuICAgICAgdXBsb2FkZXIuY2xvc2UoKVxuICAgIH0pXG4gICAgc3VwZXIuY2xvc2UoKVxuICB9XG5cbiAgLyoqXG4gICAqIFNpbmdsZS1hdHRlbXB0IFBPU1QuIFRocm93cyBvbiByZXRyeWFibGUgZmFpbHVyZXMgKDQyOSwgNXh4LCBuZXR3b3JrKVxuICAgKiBzbyBTZXJpYWxCYXRjaEV2ZW50VXBsb2FkZXIgcmUtcXVldWVzIGFuZCByZXRyaWVzLiBSZXR1cm5zIG9uIHN1Y2Nlc3NcbiAgICogYW5kIG9uIHBlcm1hbmVudCBmYWlsdXJlcyAoNHh4IG5vbi00MjksIG5vIHRva2VuKSBzbyB0aGUgdXBsb2FkZXIgbW92ZXMgb24uXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIHBvc3RPbmNlKGV2ZW50czogU3Rkb3V0TWVzc2FnZVtdKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3Qgc2Vzc2lvblRva2VuID0gZ2V0U2Vzc2lvbkluZ3Jlc3NBdXRoVG9rZW4oKVxuICAgIGlmICghc2Vzc2lvblRva2VuKSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoJ0h5YnJpZFRyYW5zcG9ydDogTm8gc2Vzc2lvbiB0b2tlbiBhdmFpbGFibGUgZm9yIFBPU1QnKVxuICAgICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnd2FybicsICdjbGlfaHlicmlkX3Bvc3Rfbm9fdG9rZW4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGVhZGVyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtzZXNzaW9uVG9rZW59YCxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfVxuXG4gICAgbGV0IHJlc3BvbnNlXG4gICAgdHJ5IHtcbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgdGhpcy5wb3N0VXJsLFxuICAgICAgICB7IGV2ZW50cyB9LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgICB2YWxpZGF0ZVN0YXR1czogKCkgPT4gdHJ1ZSxcbiAgICAgICAgICB0aW1lb3V0OiBQT1NUX1RJTUVPVVRfTVMsXG4gICAgICAgIH0sXG4gICAgICApXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnN0IGF4aW9zRXJyb3IgPSBlcnJvciBhcyBBeGlvc0Vycm9yXG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoYEh5YnJpZFRyYW5zcG9ydDogUE9TVCBlcnJvcjogJHtheGlvc0Vycm9yLm1lc3NhZ2V9YClcbiAgICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ3dhcm4nLCAnY2xpX2h5YnJpZF9wb3N0X25ldHdvcmtfZXJyb3InKVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhgSHlicmlkVHJhbnNwb3J0OiBQT1NUIHN1Y2Nlc3MgY291bnQ9JHtldmVudHMubGVuZ3RofWApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyA0eHggKGV4Y2VwdCA0MjkpIGFyZSBwZXJtYW5lbnQgXHUyMDE0IGRyb3AsIGRvbid0IHJldHJ5LlxuICAgIGlmIChcbiAgICAgIHJlc3BvbnNlLnN0YXR1cyA+PSA0MDAgJiZcbiAgICAgIHJlc3BvbnNlLnN0YXR1cyA8IDUwMCAmJlxuICAgICAgcmVzcG9uc2Uuc3RhdHVzICE9PSA0MjlcbiAgICApIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYEh5YnJpZFRyYW5zcG9ydDogUE9TVCByZXR1cm5lZCAke3Jlc3BvbnNlLnN0YXR1c30gKHBlcm1hbmVudCksIGRyb3BwaW5nYCxcbiAgICAgIClcbiAgICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ3dhcm4nLCAnY2xpX2h5YnJpZF9wb3N0X2NsaWVudF9lcnJvcicsIHtcbiAgICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gNDI5IC8gNXh4IFx1MjAxNCByZXRyeWFibGUuIFRocm93IHNvIHVwbG9hZGVyIHJlLXF1ZXVlcyBhbmQgYmFja3Mgb2ZmLlxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBIeWJyaWRUcmFuc3BvcnQ6IFBPU1QgcmV0dXJuZWQgJHtyZXNwb25zZS5zdGF0dXN9IChyZXRyeWFibGUpYCxcbiAgICApXG4gICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnd2FybicsICdjbGlfaHlicmlkX3Bvc3RfcmV0cnlhYmxlX2Vycm9yJywge1xuICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgfSlcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFBPU1QgZmFpbGVkIHdpdGggJHtyZXNwb25zZS5zdGF0dXN9YClcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgYSBXZWJTb2NrZXQgVVJMIHRvIHRoZSBIVFRQIFBPU1QgZW5kcG9pbnQgVVJMLlxuICogRnJvbTogd3NzOi8vYXBpLmV4YW1wbGUuY29tL3YyL3Nlc3Npb25faW5ncmVzcy93cy88c2Vzc2lvbl9pZD5cbiAqIFRvOiBodHRwczovL2FwaS5leGFtcGxlLmNvbS92Mi9zZXNzaW9uX2luZ3Jlc3Mvc2Vzc2lvbi88c2Vzc2lvbl9pZD4vZXZlbnRzXG4gKi9cbmZ1bmN0aW9uIGNvbnZlcnRXc1VybFRvUG9zdFVybCh3c1VybDogVVJMKTogc3RyaW5nIHtcbiAgY29uc3QgcHJvdG9jb2wgPSB3c1VybC5wcm90b2NvbCA9PT0gJ3dzczonID8gJ2h0dHBzOicgOiAnaHR0cDonXG5cbiAgLy8gUmVwbGFjZSAvd3MvIHdpdGggL3Nlc3Npb24vIGFuZCBhcHBlbmQgL2V2ZW50c1xuICBsZXQgcGF0aG5hbWUgPSB3c1VybC5wYXRobmFtZVxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoJy93cy8nLCAnL3Nlc3Npb24vJylcbiAgaWYgKCFwYXRobmFtZS5lbmRzV2l0aCgnL2V2ZW50cycpKSB7XG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZS5lbmRzV2l0aCgnLycpXG4gICAgICA/IHBhdGhuYW1lICsgJ2V2ZW50cydcbiAgICAgIDogcGF0aG5hbWUgKyAnL2V2ZW50cydcbiAgfVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7d3NVcmwuaG9zdH0ke3BhdGhuYW1lfSR7d3NVcmwuc2VhcmNofWBcbn1cbiIsICJpbXBvcnQgdHlwZSB7IFN0ZG91dE1lc3NhZ2UgfSBmcm9tICdzcmMvZW50cnlwb2ludHMvc2RrL2NvbnRyb2xUeXBlcy5qcydcbmltcG9ydCB0eXBlIFdzV2ViU29ja2V0IGZyb20gJ3dzJ1xuaW1wb3J0IHsgbG9nRXZlbnQgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbmFseXRpY3MvaW5kZXguanMnXG5pbXBvcnQgeyBDaXJjdWxhckJ1ZmZlciB9IGZyb20gJy4uLy4uL3V0aWxzL0NpcmN1bGFyQnVmZmVyLmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGVidWcuanMnXG5pbXBvcnQgeyBsb2dGb3JEaWFnbm9zdGljc05vUElJIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGlhZ0xvZ3MuanMnXG5pbXBvcnQgeyBpc0VudlRydXRoeSB9IGZyb20gJy4uLy4uL3V0aWxzL2VudlV0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0V2ViU29ja2V0VExTT3B0aW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL210bHMuanMnXG5pbXBvcnQge1xuICBnZXRXZWJTb2NrZXRQcm94eUFnZW50LFxuICBnZXRXZWJTb2NrZXRQcm94eVVybCxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvcHJveHkuanMnXG5pbXBvcnQge1xuICByZWdpc3RlclNlc3Npb25BY3Rpdml0eUNhbGxiYWNrLFxuICB1bnJlZ2lzdGVyU2Vzc2lvbkFjdGl2aXR5Q2FsbGJhY2ssXG59IGZyb20gJy4uLy4uL3V0aWxzL3Nlc3Npb25BY3Rpdml0eS5qcydcbmltcG9ydCB7IGpzb25TdHJpbmdpZnkgfSBmcm9tICcuLi8uLi91dGlscy9zbG93T3BlcmF0aW9ucy5qcydcbmltcG9ydCB0eXBlIHsgVHJhbnNwb3J0IH0gZnJvbSAnLi9UcmFuc3BvcnQuanMnXG5cbmNvbnN0IEtFRVBfQUxJVkVfRlJBTUUgPSAne1widHlwZVwiOlwia2VlcF9hbGl2ZVwifVxcbidcblxuY29uc3QgREVGQVVMVF9NQVhfQlVGRkVSX1NJWkUgPSAxMDAwXG5jb25zdCBERUZBVUxUX0JBU0VfUkVDT05ORUNUX0RFTEFZID0gMTAwMFxuY29uc3QgREVGQVVMVF9NQVhfUkVDT05ORUNUX0RFTEFZID0gMzAwMDBcbi8qKiBUaW1lIGJ1ZGdldCBmb3IgcmVjb25uZWN0aW9uIGF0dGVtcHRzIGJlZm9yZSBnaXZpbmcgdXAgKDEwIG1pbnV0ZXMpLiAqL1xuY29uc3QgREVGQVVMVF9SRUNPTk5FQ1RfR0lWRV9VUF9NUyA9IDYwMF8wMDBcbmNvbnN0IERFRkFVTFRfUElOR19JTlRFUlZBTCA9IDEwMDAwXG5jb25zdCBERUZBVUxUX0tFRVBBTElWRV9JTlRFUlZBTCA9IDMwMF8wMDAgLy8gNSBtaW51dGVzXG5cbi8qKlxuICogVGhyZXNob2xkIGZvciBkZXRlY3Rpbmcgc3lzdGVtIHNsZWVwL3dha2UuIElmIHRoZSBnYXAgYmV0d2VlbiBjb25zZWN1dGl2ZVxuICogcmVjb25uZWN0aW9uIGF0dGVtcHRzIGV4Y2VlZHMgdGhpcywgdGhlIG1hY2hpbmUgbGlrZWx5IHNsZXB0LiBXZSByZXNldFxuICogdGhlIHJlY29ubmVjdGlvbiBidWRnZXQgYW5kIHJldHJ5IFx1MjAxNCB0aGUgc2VydmVyIHdpbGwgcmVqZWN0IHdpdGggcGVybWFuZW50XG4gKiBjbG9zZSBjb2RlcyAoNDAwMS8xMDAyKSBpZiB0aGUgc2Vzc2lvbiB3YXMgcmVhcGVkIGR1cmluZyBzbGVlcC5cbiAqL1xuY29uc3QgU0xFRVBfREVURUNUSU9OX1RIUkVTSE9MRF9NUyA9IERFRkFVTFRfTUFYX1JFQ09OTkVDVF9ERUxBWSAqIDIgLy8gNjBzXG5cbi8qKlxuICogV2ViU29ja2V0IGNsb3NlIGNvZGVzIHRoYXQgaW5kaWNhdGUgYSBwZXJtYW5lbnQgc2VydmVyLXNpZGUgcmVqZWN0aW9uLlxuICogVGhlIHRyYW5zcG9ydCB0cmFuc2l0aW9ucyB0byAnY2xvc2VkJyBpbW1lZGlhdGVseSB3aXRob3V0IHJldHJ5aW5nLlxuICovXG5jb25zdCBQRVJNQU5FTlRfQ0xPU0VfQ09ERVMgPSBuZXcgU2V0KFtcbiAgMTAwMiwgLy8gcHJvdG9jb2wgZXJyb3IgXHUyMDE0IHNlcnZlciByZWplY3RlZCBoYW5kc2hha2UgKGUuZy4gc2Vzc2lvbiByZWFwZWQpXG4gIDQwMDEsIC8vIHNlc3Npb24gZXhwaXJlZCAvIG5vdCBmb3VuZFxuICA0MDAzLCAvLyB1bmF1dGhvcml6ZWRcbl0pXG5cbmV4cG9ydCB0eXBlIFdlYlNvY2tldFRyYW5zcG9ydE9wdGlvbnMgPSB7XG4gIC8qKiBXaGVuIGZhbHNlLCB0aGUgdHJhbnNwb3J0IGRvZXMgbm90IGF0dGVtcHQgYXV0b21hdGljIHJlY29ubmVjdGlvbiBvblxuICAgKiAgZGlzY29ubmVjdC4gVXNlIHRoaXMgd2hlbiB0aGUgY2FsbGVyIGhhcyBpdHMgb3duIHJlY292ZXJ5IG1lY2hhbmlzbVxuICAgKiAgKGUuZy4gdGhlIFJFUEwgYnJpZGdlIHBvbGwgbG9vcCkuIERlZmF1bHRzIHRvIHRydWUuICovXG4gIGF1dG9SZWNvbm5lY3Q/OiBib29sZWFuXG4gIC8qKiBHYXRlcyB0aGUgdGVuZ3Vfd3NfdHJhbnNwb3J0XyogdGVsZW1ldHJ5IGV2ZW50cy4gU2V0IHRydWUgYXQgdGhlXG4gICAqICBSRVBMLWJyaWRnZSBjb25zdHJ1Y3Rpb24gc2l0ZSBzbyBvbmx5IFJlbW90ZSBDb250cm9sIHNlc3Npb25zICh0aGVcbiAgICogIENsb3VkZmxhcmUtaWRsZS10aW1lb3V0IHBvcHVsYXRpb24pIGVtaXQ7IHByaW50LW1vZGUgd29ya2VycyBzdGF5XG4gICAqICBzaWxlbnQuIERlZmF1bHRzIHRvIGZhbHNlLiAqL1xuICBpc0JyaWRnZT86IGJvb2xlYW5cbn1cblxudHlwZSBXZWJTb2NrZXRUcmFuc3BvcnRTdGF0ZSA9XG4gIHwgJ2lkbGUnXG4gIHwgJ2Nvbm5lY3RlZCdcbiAgfCAncmVjb25uZWN0aW5nJ1xuICB8ICdjbG9zaW5nJ1xuICB8ICdjbG9zZWQnXG5cbi8vIENvbW1vbiBpbnRlcmZhY2UgYmV0d2VlbiBnbG9iYWxUaGlzLldlYlNvY2tldCBhbmQgd3MuV2ViU29ja2V0XG50eXBlIFdlYlNvY2tldExpa2UgPSB7XG4gIGNsb3NlKCk6IHZvaWRcbiAgc2VuZChkYXRhOiBzdHJpbmcpOiB2b2lkXG4gIHBpbmc/KCk6IHZvaWQgLy8gQnVuICYgd3MgYm90aCBzdXBwb3J0IHRoaXNcbn1cblxuZXhwb3J0IGNsYXNzIFdlYlNvY2tldFRyYW5zcG9ydCBpbXBsZW1lbnRzIFRyYW5zcG9ydCB7XG4gIHByaXZhdGUgd3M6IFdlYlNvY2tldExpa2UgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIGxhc3RTZW50SWQ6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gIHByb3RlY3RlZCB1cmw6IFVSTFxuICBwcm90ZWN0ZWQgc3RhdGU6IFdlYlNvY2tldFRyYW5zcG9ydFN0YXRlID0gJ2lkbGUnXG4gIHByb3RlY3RlZCBvbkRhdGE/OiAoZGF0YTogc3RyaW5nKSA9PiB2b2lkXG4gIHByaXZhdGUgb25DbG9zZUNhbGxiYWNrPzogKGNsb3NlQ29kZT86IG51bWJlcikgPT4gdm9pZFxuICBwcml2YXRlIG9uQ29ubmVjdENhbGxiYWNrPzogKCkgPT4gdm9pZFxuICBwcml2YXRlIGhlYWRlcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbiAgcHJpdmF0ZSBzZXNzaW9uSWQ/OiBzdHJpbmdcbiAgcHJpdmF0ZSBhdXRvUmVjb25uZWN0OiBib29sZWFuXG4gIHByaXZhdGUgaXNCcmlkZ2U6IGJvb2xlYW5cblxuICAvLyBSZWNvbm5lY3Rpb24gc3RhdGVcbiAgcHJpdmF0ZSByZWNvbm5lY3RBdHRlbXB0cyA9IDBcbiAgcHJpdmF0ZSByZWNvbm5lY3RTdGFydFRpbWU6IG51bWJlciB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgcmVjb25uZWN0VGltZXI6IE5vZGVKUy5UaW1lb3V0IHwgbnVsbCA9IG51bGxcbiAgcHJpdmF0ZSBsYXN0UmVjb25uZWN0QXR0ZW1wdFRpbWU6IG51bWJlciB8IG51bGwgPSBudWxsXG4gIC8vIFdhbGwtY2xvY2sgb2YgbGFzdCBXUyBkYXRhLWZyYW1lIGFjdGl2aXR5IChpbmJvdW5kIG1lc3NhZ2Ugb3Igb3V0Ym91bmRcbiAgLy8gd3Muc2VuZCkuIFVzZWQgdG8gY29tcHV0ZSBpZGxlIHRpbWUgYXQgY2xvc2UgXHUyMDE0IHRoZSBzaWduYWwgZm9yIGRpYWdub3NpbmdcbiAgLy8gcHJveHkgaWRsZS10aW1lb3V0IFJTVHMgKGUuZy4gQ2xvdWRmbGFyZSA1LW1pbikuIEV4Y2x1ZGVzIHBpbmcvcG9uZ1xuICAvLyBjb250cm9sIGZyYW1lcyAocHJveGllcyBkb24ndCBjb3VudCB0aG9zZSkuXG4gIHByaXZhdGUgbGFzdEFjdGl2aXR5VGltZSA9IDBcblxuICAvLyBQaW5nIGludGVydmFsIGZvciBjb25uZWN0aW9uIGhlYWx0aCBjaGVja3NcbiAgcHJpdmF0ZSBwaW5nSW50ZXJ2YWw6IE5vZGVKUy5UaW1lb3V0IHwgbnVsbCA9IG51bGxcbiAgcHJpdmF0ZSBwb25nUmVjZWl2ZWQgPSB0cnVlXG5cbiAgLy8gUGVyaW9kaWMga2VlcF9hbGl2ZSBkYXRhIGZyYW1lcyB0byByZXNldCBwcm94eSBpZGxlIHRpbWVyc1xuICBwcml2YXRlIGtlZXBBbGl2ZUludGVydmFsOiBOb2RlSlMuVGltZW91dCB8IG51bGwgPSBudWxsXG5cbiAgLy8gTWVzc2FnZSBidWZmZXJpbmcgZm9yIHJlcGxheSBvbiByZWNvbm5lY3Rpb25cbiAgcHJpdmF0ZSBtZXNzYWdlQnVmZmVyOiBDaXJjdWxhckJ1ZmZlcjxTdGRvdXRNZXNzYWdlPlxuICAvLyBUcmFjayB3aGljaCBydW50aW1lJ3MgV1Mgd2UncmUgdXNpbmcgc28gd2UgY2FuIGRldGFjaCBsaXN0ZW5lcnNcbiAgLy8gd2l0aCB0aGUgbWF0Y2hpbmcgQVBJIChyZW1vdmVFdmVudExpc3RlbmVyIHZzLiBvZmYpLlxuICBwcml2YXRlIGlzQnVuV3MgPSBmYWxzZVxuXG4gIC8vIENhcHR1cmVkIGF0IGNvbm5lY3QoKSB0aW1lIGZvciBoYW5kbGVPcGVuRXZlbnQgdGltaW5nLiBTdG9yZWQgYXMgYW5cbiAgLy8gaW5zdGFuY2UgZmllbGQgc28gdGhlIG9uT3BlbiBoYW5kbGVyIGNhbiBiZSBhIHN0YWJsZSBjbGFzcy1wcm9wZXJ0eVxuICAvLyBhcnJvdyBmdW5jdGlvbiAocmVtb3ZhYmxlIGluIGRvRGlzY29ubmVjdCkgaW5zdGVhZCBvZiBhIGNsb3N1cmUgb3ZlclxuICAvLyBhIGxvY2FsIHZhcmlhYmxlLlxuICBwcml2YXRlIGNvbm5lY3RTdGFydFRpbWUgPSAwXG5cbiAgcHJpdmF0ZSByZWZyZXNoSGVhZGVycz86ICgpID0+IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cblxuICBjb25zdHJ1Y3RvcihcbiAgICB1cmw6IFVSTCxcbiAgICBoZWFkZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge30sXG4gICAgc2Vzc2lvbklkPzogc3RyaW5nLFxuICAgIHJlZnJlc2hIZWFkZXJzPzogKCkgPT4gUmVjb3JkPHN0cmluZywgc3RyaW5nPixcbiAgICBvcHRpb25zPzogV2ViU29ja2V0VHJhbnNwb3J0T3B0aW9ucyxcbiAgKSB7XG4gICAgdGhpcy51cmwgPSB1cmxcbiAgICB0aGlzLmhlYWRlcnMgPSBoZWFkZXJzXG4gICAgdGhpcy5zZXNzaW9uSWQgPSBzZXNzaW9uSWRcbiAgICB0aGlzLnJlZnJlc2hIZWFkZXJzID0gcmVmcmVzaEhlYWRlcnNcbiAgICB0aGlzLmF1dG9SZWNvbm5lY3QgPSBvcHRpb25zPy5hdXRvUmVjb25uZWN0ID8/IHRydWVcbiAgICB0aGlzLmlzQnJpZGdlID0gb3B0aW9ucz8uaXNCcmlkZ2UgPz8gZmFsc2VcbiAgICB0aGlzLm1lc3NhZ2VCdWZmZXIgPSBuZXcgQ2lyY3VsYXJCdWZmZXIoREVGQVVMVF9NQVhfQlVGRkVSX1NJWkUpXG4gIH1cblxuICBwdWJsaWMgYXN5bmMgY29ubmVjdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5zdGF0ZSAhPT0gJ2lkbGUnICYmIHRoaXMuc3RhdGUgIT09ICdyZWNvbm5lY3RpbmcnKSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBXZWJTb2NrZXRUcmFuc3BvcnQ6IENhbm5vdCBjb25uZWN0LCBjdXJyZW50IHN0YXRlIGlzICR7dGhpcy5zdGF0ZX1gLFxuICAgICAgICB7IGxldmVsOiAnZXJyb3InIH0sXG4gICAgICApXG4gICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdlcnJvcicsICdjbGlfd2Vic29ja2V0X2Nvbm5lY3RfZmFpbGVkJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLnN0YXRlID0gJ3JlY29ubmVjdGluZydcblxuICAgIHRoaXMuY29ubmVjdFN0YXJ0VGltZSA9IERhdGUubm93KClcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoYFdlYlNvY2tldFRyYW5zcG9ydDogT3BlbmluZyAke3RoaXMudXJsLmhyZWZ9YClcbiAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdpbmZvJywgJ2NsaV93ZWJzb2NrZXRfY29ubmVjdF9vcGVuaW5nJylcblxuICAgIC8vIFN0YXJ0IHdpdGggcHJvdmlkZWQgaGVhZGVycyBhbmQgYWRkIHJ1bnRpbWUgaGVhZGVyc1xuICAgIGNvbnN0IGhlYWRlcnMgPSB7IC4uLnRoaXMuaGVhZGVycyB9XG4gICAgaWYgKHRoaXMubGFzdFNlbnRJZCkge1xuICAgICAgaGVhZGVyc1snWC1MYXN0LVJlcXVlc3QtSWQnXSA9IHRoaXMubGFzdFNlbnRJZFxuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgV2ViU29ja2V0VHJhbnNwb3J0OiBBZGRpbmcgWC1MYXN0LVJlcXVlc3QtSWQgaGVhZGVyOiAke3RoaXMubGFzdFNlbnRJZH1gLFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgQnVuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gQnVuJ3MgV2ViU29ja2V0IHN1cHBvcnRzIGhlYWRlcnMvcHJveHkgb3B0aW9ucyBidXQgdGhlIERPTSB0eXBpbmdzIGRvbid0XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXNsaW50LXBsdWdpbi1uL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnNcbiAgICAgIGNvbnN0IHdzID0gbmV3IGdsb2JhbFRoaXMuV2ViU29ja2V0KHRoaXMudXJsLmhyZWYsIHtcbiAgICAgICAgaGVhZGVycyxcbiAgICAgICAgcHJveHk6IGdldFdlYlNvY2tldFByb3h5VXJsKHRoaXMudXJsLmhyZWYpLFxuICAgICAgICB0bHM6IGdldFdlYlNvY2tldFRMU09wdGlvbnMoKSB8fCB1bmRlZmluZWQsXG4gICAgICB9IGFzIHVua25vd24gYXMgc3RyaW5nW10pXG4gICAgICB0aGlzLndzID0gd3NcbiAgICAgIHRoaXMuaXNCdW5XcyA9IHRydWVcblxuICAgICAgd3MuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsIHRoaXMub25CdW5PcGVuKVxuICAgICAgd3MuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMub25CdW5NZXNzYWdlKVxuICAgICAgd3MuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0aGlzLm9uQnVuRXJyb3IpXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXNsaW50LXBsdWdpbi1uL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnNcbiAgICAgIHdzLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhpcy5vbkJ1bkNsb3NlKVxuICAgICAgLy8gJ3BvbmcnIGlzIEJ1bi1zcGVjaWZpYyBcdTIwMTQgbm90IGluIERPTSB0eXBpbmdzLlxuICAgICAgd3MuYWRkRXZlbnRMaXN0ZW5lcigncG9uZycsIHRoaXMub25Qb25nKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IGRlZmF1bHQ6IFdTIH0gPSBhd2FpdCBpbXBvcnQoJ3dzJylcbiAgICAgIGNvbnN0IHdzID0gbmV3IFdTKHRoaXMudXJsLmhyZWYsIHtcbiAgICAgICAgaGVhZGVycyxcbiAgICAgICAgYWdlbnQ6IGdldFdlYlNvY2tldFByb3h5QWdlbnQodGhpcy51cmwuaHJlZiksXG4gICAgICAgIC4uLmdldFdlYlNvY2tldFRMU09wdGlvbnMoKSxcbiAgICAgIH0pXG4gICAgICB0aGlzLndzID0gd3NcbiAgICAgIHRoaXMuaXNCdW5XcyA9IGZhbHNlXG5cbiAgICAgIHdzLm9uKCdvcGVuJywgdGhpcy5vbk5vZGVPcGVuKVxuICAgICAgd3Mub24oJ21lc3NhZ2UnLCB0aGlzLm9uTm9kZU1lc3NhZ2UpXG4gICAgICB3cy5vbignZXJyb3InLCB0aGlzLm9uTm9kZUVycm9yKVxuICAgICAgd3Mub24oJ2Nsb3NlJywgdGhpcy5vbk5vZGVDbG9zZSlcbiAgICAgIHdzLm9uKCdwb25nJywgdGhpcy5vblBvbmcpXG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIEJ1biAobmF0aXZlIFdlYlNvY2tldCkgZXZlbnQgaGFuZGxlcnMgLS0tXG4gIC8vIFN0b3JlZCBhcyBjbGFzcy1wcm9wZXJ0eSBhcnJvdyBmdW5jdGlvbnMgc28gdGhleSBjYW4gYmUgcmVtb3ZlZCBpblxuICAvLyBkb0Rpc2Nvbm5lY3QoKS4gV2l0aG91dCByZW1vdmFsLCBlYWNoIHJlY29ubmVjdCBvcnBoYW5zIHRoZSBvbGQgV1NcbiAgLy8gb2JqZWN0ICsgaXRzIDUgY2xvc3VyZXMgdW50aWwgR0MsIHdoaWNoIGFjY3VtdWxhdGVzIHVuZGVyIG5ldHdvcmtcbiAgLy8gaW5zdGFiaWxpdHkuIE1pcnJvcnMgdGhlIHBhdHRlcm4gaW4gc3JjL3V0aWxzL21jcFdlYlNvY2tldFRyYW5zcG9ydC50cy5cblxuICBwcml2YXRlIG9uQnVuT3BlbiA9ICgpID0+IHtcbiAgICB0aGlzLmhhbmRsZU9wZW5FdmVudCgpXG4gICAgLy8gQnVuJ3MgV2ViU29ja2V0IGRvZXNuJ3QgZXhwb3NlIHVwZ3JhZGUgcmVzcG9uc2UgaGVhZGVycyxcbiAgICAvLyBzbyByZXBsYXkgYWxsIGJ1ZmZlcmVkIG1lc3NhZ2VzLiBUaGUgc2VydmVyIGRlZHVwbGljYXRlcyBieSBVVUlELlxuICAgIGlmICh0aGlzLmxhc3RTZW50SWQpIHtcbiAgICAgIHRoaXMucmVwbGF5QnVmZmVyZWRNZXNzYWdlcygnJylcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uQnVuTWVzc2FnZSA9IChldmVudDogTWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gJ3N0cmluZycgPyBldmVudC5kYXRhIDogU3RyaW5nKGV2ZW50LmRhdGEpXG4gICAgdGhpcy5sYXN0QWN0aXZpdHlUaW1lID0gRGF0ZS5ub3coKVxuICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2luZm8nLCAnY2xpX3dlYnNvY2tldF9tZXNzYWdlX3JlY2VpdmVkJywge1xuICAgICAgbGVuZ3RoOiBtZXNzYWdlLmxlbmd0aCxcbiAgICB9KVxuICAgIGlmICh0aGlzLm9uRGF0YSkge1xuICAgICAgdGhpcy5vbkRhdGEobWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uQnVuRXJyb3IgPSAoKSA9PiB7XG4gICAgbG9nRm9yRGVidWdnaW5nKCdXZWJTb2NrZXRUcmFuc3BvcnQ6IEVycm9yJywge1xuICAgICAgbGV2ZWw6ICdlcnJvcicsXG4gICAgfSlcbiAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdlcnJvcicsICdjbGlfd2Vic29ja2V0X2Nvbm5lY3RfZXJyb3InKVxuICAgIC8vIGNsb3NlIGV2ZW50IGZpcmVzIGFmdGVyIGVycm9yIFx1MjAxNCBsZXQgaXQgY2FsbCBoYW5kbGVDb25uZWN0aW9uRXJyb3JcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlc2xpbnQtcGx1Z2luLW4vbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGluc1xuICBwcml2YXRlIG9uQnVuQ2xvc2UgPSAoZXZlbnQ6IENsb3NlRXZlbnQpID0+IHtcbiAgICBjb25zdCBpc0NsZWFuID0gZXZlbnQuY29kZSA9PT0gMTAwMCB8fCBldmVudC5jb2RlID09PSAxMDAxXG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFdlYlNvY2tldFRyYW5zcG9ydDogQ2xvc2VkOiAke2V2ZW50LmNvZGV9YCxcbiAgICAgIGlzQ2xlYW4gPyB1bmRlZmluZWQgOiB7IGxldmVsOiAnZXJyb3InIH0sXG4gICAgKVxuICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2Vycm9yJywgJ2NsaV93ZWJzb2NrZXRfY29ubmVjdF9jbG9zZWQnKVxuICAgIHRoaXMuaGFuZGxlQ29ubmVjdGlvbkVycm9yKGV2ZW50LmNvZGUpXG4gIH1cblxuICAvLyAtLS0gTm9kZSAod3MgcGFja2FnZSkgZXZlbnQgaGFuZGxlcnMgLS0tXG5cbiAgcHJpdmF0ZSBvbk5vZGVPcGVuID0gKCkgPT4ge1xuICAgIC8vIENhcHR1cmUgd3MgYmVmb3JlIGhhbmRsZU9wZW5FdmVudCgpIGludm9rZXMgb25Db25uZWN0Q2FsbGJhY2sgXHUyMDE0IGlmIHRoZVxuICAgIC8vIGNhbGxiYWNrIHN5bmNocm9ub3VzbHkgY2xvc2VzIHRoZSB0cmFuc3BvcnQsIHRoaXMud3MgYmVjb21lcyBudWxsLlxuICAgIC8vIFRoZSBvbGQgaW5saW5lLWNsb3N1cmUgY29kZSBoYWQgdGhpcyBzYWZldHkgaW1wbGljaXRseSB2aWEgY2xvc3VyZSBjYXB0dXJlLlxuICAgIGNvbnN0IHdzID0gdGhpcy53c1xuICAgIHRoaXMuaGFuZGxlT3BlbkV2ZW50KClcbiAgICBpZiAoIXdzKSByZXR1cm5cbiAgICAvLyBDaGVjayBmb3IgbGFzdC1pZCBpbiB1cGdyYWRlIHJlc3BvbnNlIGhlYWRlcnMgKHdzIHBhY2thZ2Ugb25seSlcbiAgICBjb25zdCBud3MgPSB3cyBhcyB1bmtub3duIGFzIFdzV2ViU29ja2V0ICYge1xuICAgICAgdXBncmFkZVJlcT86IHsgaGVhZGVycz86IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gfVxuICAgIH1cbiAgICBjb25zdCB1cGdyYWRlUmVzcG9uc2UgPSBud3MudXBncmFkZVJlcVxuICAgIGlmICh1cGdyYWRlUmVzcG9uc2U/LmhlYWRlcnM/LlsneC1sYXN0LXJlcXVlc3QtaWQnXSkge1xuICAgICAgY29uc3Qgc2VydmVyTGFzdElkID0gdXBncmFkZVJlc3BvbnNlLmhlYWRlcnNbJ3gtbGFzdC1yZXF1ZXN0LWlkJ11cbiAgICAgIHRoaXMucmVwbGF5QnVmZmVyZWRNZXNzYWdlcyhzZXJ2ZXJMYXN0SWQpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbk5vZGVNZXNzYWdlID0gKGRhdGE6IEJ1ZmZlcikgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBkYXRhLnRvU3RyaW5nKClcbiAgICB0aGlzLmxhc3RBY3Rpdml0eVRpbWUgPSBEYXRlLm5vdygpXG4gICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnaW5mbycsICdjbGlfd2Vic29ja2V0X21lc3NhZ2VfcmVjZWl2ZWQnLCB7XG4gICAgICBsZW5ndGg6IG1lc3NhZ2UubGVuZ3RoLFxuICAgIH0pXG4gICAgaWYgKHRoaXMub25EYXRhKSB7XG4gICAgICB0aGlzLm9uRGF0YShtZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25Ob2RlRXJyb3IgPSAoZXJyOiBFcnJvcikgPT4ge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhgV2ViU29ja2V0VHJhbnNwb3J0OiBFcnJvcjogJHtlcnIubWVzc2FnZX1gLCB7XG4gICAgICBsZXZlbDogJ2Vycm9yJyxcbiAgICB9KVxuICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2Vycm9yJywgJ2NsaV93ZWJzb2NrZXRfY29ubmVjdF9lcnJvcicpXG4gICAgLy8gY2xvc2UgZXZlbnQgZmlyZXMgYWZ0ZXIgZXJyb3IgXHUyMDE0IGxldCBpdCBjYWxsIGhhbmRsZUNvbm5lY3Rpb25FcnJvclxuICB9XG5cbiAgcHJpdmF0ZSBvbk5vZGVDbG9zZSA9IChjb2RlOiBudW1iZXIsIF9yZWFzb246IEJ1ZmZlcikgPT4ge1xuICAgIGNvbnN0IGlzQ2xlYW4gPSBjb2RlID09PSAxMDAwIHx8IGNvZGUgPT09IDEwMDFcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgV2ViU29ja2V0VHJhbnNwb3J0OiBDbG9zZWQ6ICR7Y29kZX1gLFxuICAgICAgaXNDbGVhbiA/IHVuZGVmaW5lZCA6IHsgbGV2ZWw6ICdlcnJvcicgfSxcbiAgICApXG4gICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnZXJyb3InLCAnY2xpX3dlYnNvY2tldF9jb25uZWN0X2Nsb3NlZCcpXG4gICAgdGhpcy5oYW5kbGVDb25uZWN0aW9uRXJyb3IoY29kZSlcbiAgfVxuXG4gIC8vIC0tLSBTaGFyZWQgaGFuZGxlcnMgLS0tXG5cbiAgcHJpdmF0ZSBvblBvbmcgPSAoKSA9PiB7XG4gICAgdGhpcy5wb25nUmVjZWl2ZWQgPSB0cnVlXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU9wZW5FdmVudCgpOiB2b2lkIHtcbiAgICBjb25zdCBjb25uZWN0RHVyYXRpb24gPSBEYXRlLm5vdygpIC0gdGhpcy5jb25uZWN0U3RhcnRUaW1lXG4gICAgbG9nRm9yRGVidWdnaW5nKCdXZWJTb2NrZXRUcmFuc3BvcnQ6IENvbm5lY3RlZCcpXG4gICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnaW5mbycsICdjbGlfd2Vic29ja2V0X2Nvbm5lY3RfY29ubmVjdGVkJywge1xuICAgICAgZHVyYXRpb25fbXM6IGNvbm5lY3REdXJhdGlvbixcbiAgICB9KVxuXG4gICAgLy8gUmVjb25uZWN0IHN1Y2Nlc3MgXHUyMDE0IGNhcHR1cmUgYXR0ZW1wdCBjb3VudCArIGRvd250aW1lIGJlZm9yZSByZXNldHRpbmcuXG4gICAgLy8gcmVjb25uZWN0U3RhcnRUaW1lIGlzIG51bGwgb24gZmlyc3QgY29ubmVjdCwgbm9uLW51bGwgb24gcmVvcGVuLlxuICAgIGlmICh0aGlzLmlzQnJpZGdlICYmIHRoaXMucmVjb25uZWN0U3RhcnRUaW1lICE9PSBudWxsKSB7XG4gICAgICBsb2dFdmVudCgndGVuZ3Vfd3NfdHJhbnNwb3J0X3JlY29ubmVjdGVkJywge1xuICAgICAgICBhdHRlbXB0czogdGhpcy5yZWNvbm5lY3RBdHRlbXB0cyxcbiAgICAgICAgZG93bnRpbWVNczogRGF0ZS5ub3coKSAtIHRoaXMucmVjb25uZWN0U3RhcnRUaW1lLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnJlY29ubmVjdEF0dGVtcHRzID0gMFxuICAgIHRoaXMucmVjb25uZWN0U3RhcnRUaW1lID0gbnVsbFxuICAgIHRoaXMubGFzdFJlY29ubmVjdEF0dGVtcHRUaW1lID0gbnVsbFxuICAgIHRoaXMubGFzdEFjdGl2aXR5VGltZSA9IERhdGUubm93KClcbiAgICB0aGlzLnN0YXRlID0gJ2Nvbm5lY3RlZCdcbiAgICB0aGlzLm9uQ29ubmVjdENhbGxiYWNrPy4oKVxuXG4gICAgLy8gU3RhcnQgcGVyaW9kaWMgcGluZ3MgdG8gZGV0ZWN0IGRlYWQgY29ubmVjdGlvbnNcbiAgICB0aGlzLnN0YXJ0UGluZ0ludGVydmFsKClcblxuICAgIC8vIFN0YXJ0IHBlcmlvZGljIGtlZXBfYWxpdmUgZGF0YSBmcmFtZXMgdG8gcmVzZXQgcHJveHkgaWRsZSB0aW1lcnNcbiAgICB0aGlzLnN0YXJ0S2VlcGFsaXZlSW50ZXJ2YWwoKVxuXG4gICAgLy8gUmVnaXN0ZXIgY2FsbGJhY2sgZm9yIHNlc3Npb24gYWN0aXZpdHkgc2lnbmFsc1xuICAgIHJlZ2lzdGVyU2Vzc2lvbkFjdGl2aXR5Q2FsbGJhY2soKCkgPT4ge1xuICAgICAgdm9pZCB0aGlzLndyaXRlKHsgdHlwZTogJ2tlZXBfYWxpdmUnIH0pXG4gICAgfSlcbiAgfVxuXG4gIHByb3RlY3RlZCBzZW5kTGluZShsaW5lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMud3MgfHwgdGhpcy5zdGF0ZSAhPT0gJ2Nvbm5lY3RlZCcpIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZygnV2ViU29ja2V0VHJhbnNwb3J0OiBOb3QgY29ubmVjdGVkJylcbiAgICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2luZm8nLCAnY2xpX3dlYnNvY2tldF9zZW5kX25vdF9jb25uZWN0ZWQnKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMud3Muc2VuZChsaW5lKVxuICAgICAgdGhpcy5sYXN0QWN0aXZpdHlUaW1lID0gRGF0ZS5ub3coKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKGBXZWJTb2NrZXRUcmFuc3BvcnQ6IEZhaWxlZCB0byBzZW5kOiAke2Vycm9yfWAsIHtcbiAgICAgICAgbGV2ZWw6ICdlcnJvcicsXG4gICAgICB9KVxuICAgICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnZXJyb3InLCAnY2xpX3dlYnNvY2tldF9zZW5kX2Vycm9yJylcbiAgICAgIC8vIERvbid0IG51bGwgdGhpcy53cyBoZXJlIFx1MjAxNCBsZXQgZG9EaXNjb25uZWN0KCkgKHZpYSBoYW5kbGVDb25uZWN0aW9uRXJyb3IpXG4gICAgICAvLyBoYW5kbGUgY2xlYW51cCBzbyBsaXN0ZW5lcnMgYXJlIHJlbW92ZWQgYmVmb3JlIHRoZSBXUyBpcyByZWxlYXNlZC5cbiAgICAgIHRoaXMuaGFuZGxlQ29ubmVjdGlvbkVycm9yKClcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGxpc3RlbmVycyBhdHRhY2hlZCBpbiBjb25uZWN0KCkgZm9yIHRoZSBnaXZlbiBXZWJTb2NrZXQuXG4gICAqIFdpdGhvdXQgdGhpcywgZWFjaCByZWNvbm5lY3Qgb3JwaGFucyB0aGUgb2xkIFdTIG9iamVjdCArIGl0cyBjbG9zdXJlc1xuICAgKiB1bnRpbCBHQyBcdTIwMTQgdGhlc2UgYWNjdW11bGF0ZSB1bmRlciBuZXR3b3JrIGluc3RhYmlsaXR5LiBNaXJyb3JzIHRoZVxuICAgKiBwYXR0ZXJuIGluIHNyYy91dGlscy9tY3BXZWJTb2NrZXRUcmFuc3BvcnQudHMuXG4gICAqL1xuICBwcml2YXRlIHJlbW92ZVdzTGlzdGVuZXJzKHdzOiBXZWJTb2NrZXRMaWtlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNCdW5Xcykge1xuICAgICAgY29uc3QgbndzID0gd3MgYXMgdW5rbm93biBhcyBnbG9iYWxUaGlzLldlYlNvY2tldFxuICAgICAgbndzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29wZW4nLCB0aGlzLm9uQnVuT3BlbilcbiAgICAgIG53cy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5vbkJ1bk1lc3NhZ2UpXG4gICAgICBud3MucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0aGlzLm9uQnVuRXJyb3IpXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXNsaW50LXBsdWdpbi1uL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnNcbiAgICAgIG53cy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMub25CdW5DbG9zZSlcbiAgICAgIC8vICdwb25nJyBpcyBCdW4tc3BlY2lmaWMgXHUyMDE0IG5vdCBpbiBET00gdHlwaW5nc1xuICAgICAgbndzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvbmcnIGFzICdtZXNzYWdlJywgdGhpcy5vblBvbmcpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG53cyA9IHdzIGFzIHVua25vd24gYXMgV3NXZWJTb2NrZXRcbiAgICAgIG53cy5vZmYoJ29wZW4nLCB0aGlzLm9uTm9kZU9wZW4pXG4gICAgICBud3Mub2ZmKCdtZXNzYWdlJywgdGhpcy5vbk5vZGVNZXNzYWdlKVxuICAgICAgbndzLm9mZignZXJyb3InLCB0aGlzLm9uTm9kZUVycm9yKVxuICAgICAgbndzLm9mZignY2xvc2UnLCB0aGlzLm9uTm9kZUNsb3NlKVxuICAgICAgbndzLm9mZigncG9uZycsIHRoaXMub25Qb25nKVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBkb0Rpc2Nvbm5lY3QoKTogdm9pZCB7XG4gICAgLy8gU3RvcCBwaW5naW5nIGFuZCBrZWVwYWxpdmUgd2hlbiBkaXNjb25uZWN0aW5nXG4gICAgdGhpcy5zdG9wUGluZ0ludGVydmFsKClcbiAgICB0aGlzLnN0b3BLZWVwYWxpdmVJbnRlcnZhbCgpXG5cbiAgICAvLyBVbnJlZ2lzdGVyIHNlc3Npb24gYWN0aXZpdHkgY2FsbGJhY2tcbiAgICB1bnJlZ2lzdGVyU2Vzc2lvbkFjdGl2aXR5Q2FsbGJhY2soKVxuXG4gICAgaWYgKHRoaXMud3MpIHtcbiAgICAgIC8vIFJlbW92ZSBsaXN0ZW5lcnMgQkVGT1JFIGNsb3NlKCkgc28gdGhlIG9sZCBXUyArIGNsb3N1cmVzIGNhbiBiZVxuICAgICAgLy8gR0MnZCBwcm9tcHRseSBpbnN0ZWFkIG9mIGxpbmdlcmluZyB1bnRpbCB0aGUgbmV4dCBtYXJrLWFuZC1zd2VlcC5cbiAgICAgIHRoaXMucmVtb3ZlV3NMaXN0ZW5lcnModGhpcy53cylcbiAgICAgIHRoaXMud3MuY2xvc2UoKVxuICAgICAgdGhpcy53cyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNvbm5lY3Rpb25FcnJvcihjbG9zZUNvZGU/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgV2ViU29ja2V0VHJhbnNwb3J0OiBEaXNjb25uZWN0ZWQgZnJvbSAke3RoaXMudXJsLmhyZWZ9YCArXG4gICAgICAgIChjbG9zZUNvZGUgIT0gbnVsbCA/IGAgKGNvZGUgJHtjbG9zZUNvZGV9KWAgOiAnJyksXG4gICAgKVxuICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2luZm8nLCAnY2xpX3dlYnNvY2tldF9kaXNjb25uZWN0ZWQnKVxuICAgIGlmICh0aGlzLmlzQnJpZGdlKSB7XG4gICAgICAvLyBGaXJlIG9uIGV2ZXJ5IGNsb3NlIFx1MjAxNCBpbmNsdWRpbmcgaW50ZXJtZWRpYXRlIG9uZXMgZHVyaW5nIGEgcmVjb25uZWN0XG4gICAgICAvLyBzdG9ybSAodGhvc2UgbmV2ZXIgc3VyZmFjZSB0byB0aGUgb25DbG9zZUNhbGxiYWNrIGNvbnN1bWVyKS4gRm9yIHRoZVxuICAgICAgLy8gQ2xvdWRmbGFyZS01bWluLWlkbGUgaHlwb3RoZXNpczogY2x1c3RlciBtc1NpbmNlTGFzdEFjdGl2aXR5OyBpZiB0aGVcbiAgICAgIC8vIHBlYWsgc2l0cyBhdCB+MzAwcyB3aXRoIGNsb3NlQ29kZSAxMDA2LCB0aGF0J3MgdGhlIHByb3h5IFJTVC5cbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV93c190cmFuc3BvcnRfY2xvc2VkJywge1xuICAgICAgICBjbG9zZUNvZGUsXG4gICAgICAgIG1zU2luY2VMYXN0QWN0aXZpdHk6XG4gICAgICAgICAgdGhpcy5sYXN0QWN0aXZpdHlUaW1lID4gMCA/IERhdGUubm93KCkgLSB0aGlzLmxhc3RBY3Rpdml0eVRpbWUgOiAtMSxcbiAgICAgICAgLy8gJ2Nvbm5lY3RlZCcgPSBoZWFsdGh5IGRyb3AgKHRoZSBDbG91ZGZsYXJlIGNhc2UpOyAncmVjb25uZWN0aW5nJyA9XG4gICAgICAgIC8vIGNvbm5lY3QtcmVqZWN0aW9uIG1pZC1zdG9ybS4gU3RhdGUgaXNuJ3QgbXV0YXRlZCB1bnRpbCB0aGUgYnJhbmNoZXNcbiAgICAgICAgLy8gYmVsb3csIHNvIHRoaXMgcmVhZHMgdGhlIHByZS1jbG9zZSB2YWx1ZS5cbiAgICAgICAgd2FzQ29ubmVjdGVkOiB0aGlzLnN0YXRlID09PSAnY29ubmVjdGVkJyxcbiAgICAgICAgcmVjb25uZWN0QXR0ZW1wdHM6IHRoaXMucmVjb25uZWN0QXR0ZW1wdHMsXG4gICAgICB9KVxuICAgIH1cbiAgICB0aGlzLmRvRGlzY29ubmVjdCgpXG5cbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ2Nsb3NpbmcnIHx8IHRoaXMuc3RhdGUgPT09ICdjbG9zZWQnKSByZXR1cm5cblxuICAgIC8vIFBlcm1hbmVudCBjb2RlczogZG9uJ3QgcmV0cnkgXHUyMDE0IHNlcnZlciBoYXMgZGVmaW5pdGl2ZWx5IGVuZGVkIHRoZSBzZXNzaW9uLlxuICAgIC8vIEV4Y2VwdGlvbjogNDAwMyAodW5hdXRob3JpemVkKSBjYW4gYmUgcmV0cmllZCB3aGVuIHJlZnJlc2hIZWFkZXJzIGlzXG4gICAgLy8gYXZhaWxhYmxlIGFuZCByZXR1cm5zIGEgbmV3IHRva2VuIChlLmcuIGFmdGVyIHRoZSBwYXJlbnQgcHJvY2VzcyBtaW50c1xuICAgIC8vIGEgZnJlc2ggc2Vzc2lvbiBpbmdyZXNzIHRva2VuIGR1cmluZyByZWNvbm5lY3Rpb24pLlxuICAgIGxldCBoZWFkZXJzUmVmcmVzaGVkID0gZmFsc2VcbiAgICBpZiAoY2xvc2VDb2RlID09PSA0MDAzICYmIHRoaXMucmVmcmVzaEhlYWRlcnMpIHtcbiAgICAgIGNvbnN0IGZyZXNoSGVhZGVycyA9IHRoaXMucmVmcmVzaEhlYWRlcnMoKVxuICAgICAgaWYgKGZyZXNoSGVhZGVycy5BdXRob3JpemF0aW9uICE9PSB0aGlzLmhlYWRlcnMuQXV0aG9yaXphdGlvbikge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuaGVhZGVycywgZnJlc2hIZWFkZXJzKVxuICAgICAgICBoZWFkZXJzUmVmcmVzaGVkID0gdHJ1ZVxuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgJ1dlYlNvY2tldFRyYW5zcG9ydDogNDAwMyByZWNlaXZlZCBidXQgaGVhZGVycyByZWZyZXNoZWQsIHNjaGVkdWxpbmcgcmVjb25uZWN0JyxcbiAgICAgICAgKVxuICAgICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdpbmZvJywgJ2NsaV93ZWJzb2NrZXRfNDAwM190b2tlbl9yZWZyZXNoZWQnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGNsb3NlQ29kZSAhPSBudWxsICYmXG4gICAgICBQRVJNQU5FTlRfQ0xPU0VfQ09ERVMuaGFzKGNsb3NlQ29kZSkgJiZcbiAgICAgICFoZWFkZXJzUmVmcmVzaGVkXG4gICAgKSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBXZWJTb2NrZXRUcmFuc3BvcnQ6IFBlcm1hbmVudCBjbG9zZSBjb2RlICR7Y2xvc2VDb2RlfSwgbm90IHJlY29ubmVjdGluZ2AsXG4gICAgICAgIHsgbGV2ZWw6ICdlcnJvcicgfSxcbiAgICAgIClcbiAgICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2Vycm9yJywgJ2NsaV93ZWJzb2NrZXRfcGVybWFuZW50X2Nsb3NlJywge1xuICAgICAgICBjbG9zZUNvZGUsXG4gICAgICB9KVxuICAgICAgdGhpcy5zdGF0ZSA9ICdjbG9zZWQnXG4gICAgICB0aGlzLm9uQ2xvc2VDYWxsYmFjaz8uKGNsb3NlQ29kZSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIFdoZW4gYXV0b1JlY29ubmVjdCBpcyBkaXNhYmxlZCwgZ28gc3RyYWlnaHQgdG8gY2xvc2VkIHN0YXRlLlxuICAgIC8vIFRoZSBjYWxsZXIgKGUuZy4gUkVQTCBicmlkZ2UgcG9sbCBsb29wKSBoYW5kbGVzIHJlY292ZXJ5LlxuICAgIGlmICghdGhpcy5hdXRvUmVjb25uZWN0KSB7XG4gICAgICB0aGlzLnN0YXRlID0gJ2Nsb3NlZCdcbiAgICAgIHRoaXMub25DbG9zZUNhbGxiYWNrPy4oY2xvc2VDb2RlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gU2NoZWR1bGUgcmVjb25uZWN0aW9uIHdpdGggZXhwb25lbnRpYWwgYmFja29mZiBhbmQgdGltZSBidWRnZXRcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgaWYgKCF0aGlzLnJlY29ubmVjdFN0YXJ0VGltZSkge1xuICAgICAgdGhpcy5yZWNvbm5lY3RTdGFydFRpbWUgPSBub3dcbiAgICB9XG5cbiAgICAvLyBEZXRlY3Qgc3lzdGVtIHNsZWVwL3dha2U6IGlmIHRoZSBnYXAgc2luY2Ugb3VyIGxhc3QgcmVjb25uZWN0aW9uXG4gICAgLy8gYXR0ZW1wdCBncmVhdGx5IGV4Y2VlZHMgdGhlIG1heCBkZWxheSwgdGhlIG1hY2hpbmUgbGlrZWx5IHNsZXB0XG4gICAgLy8gKGUuZy4gbGFwdG9wIGxpZCBjbG9zZWQpLiBSZXNldCB0aGUgYnVkZ2V0IGFuZCByZXRyeSBmcm9tIHNjcmF0Y2ggXHUyMDE0XG4gICAgLy8gdGhlIHNlcnZlciB3aWxsIHJlamVjdCB3aXRoIHBlcm1hbmVudCBjbG9zZSBjb2RlcyAoNDAwMS8xMDAyKSBpZlxuICAgIC8vIHRoZSBzZXNzaW9uIHdhcyByZWFwZWQgd2hpbGUgd2Ugd2VyZSBhc2xlZXAuXG4gICAgaWYgKFxuICAgICAgdGhpcy5sYXN0UmVjb25uZWN0QXR0ZW1wdFRpbWUgIT09IG51bGwgJiZcbiAgICAgIG5vdyAtIHRoaXMubGFzdFJlY29ubmVjdEF0dGVtcHRUaW1lID4gU0xFRVBfREVURUNUSU9OX1RIUkVTSE9MRF9NU1xuICAgICkge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgV2ViU29ja2V0VHJhbnNwb3J0OiBEZXRlY3RlZCBzeXN0ZW0gc2xlZXAgKCR7TWF0aC5yb3VuZCgobm93IC0gdGhpcy5sYXN0UmVjb25uZWN0QXR0ZW1wdFRpbWUpIC8gMTAwMCl9cyBnYXApLCByZXNldHRpbmcgcmVjb25uZWN0aW9uIGJ1ZGdldGAsXG4gICAgICApXG4gICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdpbmZvJywgJ2NsaV93ZWJzb2NrZXRfc2xlZXBfZGV0ZWN0ZWQnLCB7XG4gICAgICAgIGdhcE1zOiBub3cgLSB0aGlzLmxhc3RSZWNvbm5lY3RBdHRlbXB0VGltZSxcbiAgICAgIH0pXG4gICAgICB0aGlzLnJlY29ubmVjdFN0YXJ0VGltZSA9IG5vd1xuICAgICAgdGhpcy5yZWNvbm5lY3RBdHRlbXB0cyA9IDBcbiAgICB9XG4gICAgdGhpcy5sYXN0UmVjb25uZWN0QXR0ZW1wdFRpbWUgPSBub3dcblxuICAgIGNvbnN0IGVsYXBzZWQgPSBub3cgLSB0aGlzLnJlY29ubmVjdFN0YXJ0VGltZVxuICAgIGlmIChlbGFwc2VkIDwgREVGQVVMVF9SRUNPTk5FQ1RfR0lWRV9VUF9NUykge1xuICAgICAgLy8gQ2xlYXIgYW55IGV4aXN0aW5nIHJlY29ubmVjdGlvbiB0aW1lciB0byBhdm9pZCBkdXBsaWNhdGVzXG4gICAgICBpZiAodGhpcy5yZWNvbm5lY3RUaW1lcikge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5yZWNvbm5lY3RUaW1lcilcbiAgICAgICAgdGhpcy5yZWNvbm5lY3RUaW1lciA9IG51bGxcbiAgICAgIH1cblxuICAgICAgLy8gUmVmcmVzaCBoZWFkZXJzIGJlZm9yZSByZWNvbm5lY3RpbmcgKGUuZy4gdG8gcGljayB1cCBhIG5ldyBzZXNzaW9uIHRva2VuKS5cbiAgICAgIC8vIFNraXAgaWYgYWxyZWFkeSByZWZyZXNoZWQgYnkgdGhlIDQwMDMgcGF0aCBhYm92ZS5cbiAgICAgIGlmICghaGVhZGVyc1JlZnJlc2hlZCAmJiB0aGlzLnJlZnJlc2hIZWFkZXJzKSB7XG4gICAgICAgIGNvbnN0IGZyZXNoSGVhZGVycyA9IHRoaXMucmVmcmVzaEhlYWRlcnMoKVxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuaGVhZGVycywgZnJlc2hIZWFkZXJzKVxuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoJ1dlYlNvY2tldFRyYW5zcG9ydDogUmVmcmVzaGVkIGhlYWRlcnMgZm9yIHJlY29ubmVjdCcpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhdGUgPSAncmVjb25uZWN0aW5nJ1xuICAgICAgdGhpcy5yZWNvbm5lY3RBdHRlbXB0cysrXG5cbiAgICAgIGNvbnN0IGJhc2VEZWxheSA9IE1hdGgubWluKFxuICAgICAgICBERUZBVUxUX0JBU0VfUkVDT05ORUNUX0RFTEFZICogTWF0aC5wb3coMiwgdGhpcy5yZWNvbm5lY3RBdHRlbXB0cyAtIDEpLFxuICAgICAgICBERUZBVUxUX01BWF9SRUNPTk5FQ1RfREVMQVksXG4gICAgICApXG4gICAgICAvLyBBZGQgXHUwMEIxMjUlIGppdHRlciB0byBhdm9pZCB0aHVuZGVyaW5nIGhlcmRcbiAgICAgIGNvbnN0IGRlbGF5ID0gTWF0aC5tYXgoXG4gICAgICAgIDAsXG4gICAgICAgIGJhc2VEZWxheSArIGJhc2VEZWxheSAqIDAuMjUgKiAoMiAqIE1hdGgucmFuZG9tKCkgLSAxKSxcbiAgICAgIClcblxuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgV2ViU29ja2V0VHJhbnNwb3J0OiBSZWNvbm5lY3RpbmcgaW4gJHtNYXRoLnJvdW5kKGRlbGF5KX1tcyAoYXR0ZW1wdCAke3RoaXMucmVjb25uZWN0QXR0ZW1wdHN9LCAke01hdGgucm91bmQoZWxhcHNlZCAvIDEwMDApfXMgZWxhcHNlZClgLFxuICAgICAgKVxuICAgICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnZXJyb3InLCAnY2xpX3dlYnNvY2tldF9yZWNvbm5lY3RfYXR0ZW1wdCcsIHtcbiAgICAgICAgcmVjb25uZWN0QXR0ZW1wdHM6IHRoaXMucmVjb25uZWN0QXR0ZW1wdHMsXG4gICAgICB9KVxuICAgICAgaWYgKHRoaXMuaXNCcmlkZ2UpIHtcbiAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X3dzX3RyYW5zcG9ydF9yZWNvbm5lY3RpbmcnLCB7XG4gICAgICAgICAgYXR0ZW1wdDogdGhpcy5yZWNvbm5lY3RBdHRlbXB0cyxcbiAgICAgICAgICBlbGFwc2VkTXM6IGVsYXBzZWQsXG4gICAgICAgICAgZGVsYXlNczogTWF0aC5yb3VuZChkZWxheSksXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHRoaXMucmVjb25uZWN0VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5yZWNvbm5lY3RUaW1lciA9IG51bGxcbiAgICAgICAgdm9pZCB0aGlzLmNvbm5lY3QoKVxuICAgICAgfSwgZGVsYXkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFdlYlNvY2tldFRyYW5zcG9ydDogUmVjb25uZWN0aW9uIHRpbWUgYnVkZ2V0IGV4aGF1c3RlZCBhZnRlciAke01hdGgucm91bmQoZWxhcHNlZCAvIDEwMDApfXMgZm9yICR7dGhpcy51cmwuaHJlZn1gLFxuICAgICAgICB7IGxldmVsOiAnZXJyb3InIH0sXG4gICAgICApXG4gICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdlcnJvcicsICdjbGlfd2Vic29ja2V0X3JlY29ubmVjdF9leGhhdXN0ZWQnLCB7XG4gICAgICAgIHJlY29ubmVjdEF0dGVtcHRzOiB0aGlzLnJlY29ubmVjdEF0dGVtcHRzLFxuICAgICAgICBlbGFwc2VkTXM6IGVsYXBzZWQsXG4gICAgICB9KVxuICAgICAgdGhpcy5zdGF0ZSA9ICdjbG9zZWQnXG5cbiAgICAgIC8vIE5vdGlmeSBjbG9zZSBjYWxsYmFja1xuICAgICAgaWYgKHRoaXMub25DbG9zZUNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMub25DbG9zZUNhbGxiYWNrKGNsb3NlQ29kZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICAvLyBDbGVhciBhbnkgcGVuZGluZyByZWNvbm5lY3Rpb24gdGltZXJcbiAgICBpZiAodGhpcy5yZWNvbm5lY3RUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmVjb25uZWN0VGltZXIpXG4gICAgICB0aGlzLnJlY29ubmVjdFRpbWVyID0gbnVsbFxuICAgIH1cblxuICAgIC8vIENsZWFyIHBpbmcgYW5kIGtlZXBhbGl2ZSBpbnRlcnZhbHNcbiAgICB0aGlzLnN0b3BQaW5nSW50ZXJ2YWwoKVxuICAgIHRoaXMuc3RvcEtlZXBhbGl2ZUludGVydmFsKClcblxuICAgIC8vIFVucmVnaXN0ZXIgc2Vzc2lvbiBhY3Rpdml0eSBjYWxsYmFja1xuICAgIHVucmVnaXN0ZXJTZXNzaW9uQWN0aXZpdHlDYWxsYmFjaygpXG5cbiAgICB0aGlzLnN0YXRlID0gJ2Nsb3NpbmcnXG4gICAgdGhpcy5kb0Rpc2Nvbm5lY3QoKVxuICB9XG5cbiAgcHJpdmF0ZSByZXBsYXlCdWZmZXJlZE1lc3NhZ2VzKGxhc3RJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLm1lc3NhZ2VCdWZmZXIudG9BcnJheSgpXG4gICAgaWYgKG1lc3NhZ2VzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgICAvLyBGaW5kIHdoZXJlIHRvIHN0YXJ0IHJlcGxheSBiYXNlZCBvbiBzZXJ2ZXIncyBsYXN0IHJlY2VpdmVkIG1lc3NhZ2VcbiAgICBsZXQgc3RhcnRJbmRleCA9IDBcbiAgICBpZiAobGFzdElkKSB7XG4gICAgICBjb25zdCBsYXN0Q29uZmlybWVkSW5kZXggPSBtZXNzYWdlcy5maW5kSW5kZXgoXG4gICAgICAgIG1lc3NhZ2UgPT4gJ3V1aWQnIGluIG1lc3NhZ2UgJiYgbWVzc2FnZS51dWlkID09PSBsYXN0SWQsXG4gICAgICApXG4gICAgICBpZiAobGFzdENvbmZpcm1lZEluZGV4ID49IDApIHtcbiAgICAgICAgLy8gU2VydmVyIGNvbmZpcm1lZCBtZXNzYWdlcyB1cCB0byBsYXN0Q29uZmlybWVkSW5kZXggXHUyMDE0IGV2aWN0IHRoZW1cbiAgICAgICAgc3RhcnRJbmRleCA9IGxhc3RDb25maXJtZWRJbmRleCArIDFcbiAgICAgICAgLy8gUmVidWlsZCB0aGUgYnVmZmVyIHdpdGggb25seSB1bmNvbmZpcm1lZCBtZXNzYWdlc1xuICAgICAgICBjb25zdCByZW1haW5pbmcgPSBtZXNzYWdlcy5zbGljZShzdGFydEluZGV4KVxuICAgICAgICB0aGlzLm1lc3NhZ2VCdWZmZXIuY2xlYXIoKVxuICAgICAgICB0aGlzLm1lc3NhZ2VCdWZmZXIuYWRkQWxsKHJlbWFpbmluZylcbiAgICAgICAgaWYgKHJlbWFpbmluZy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmxhc3RTZW50SWQgPSBudWxsXG4gICAgICAgIH1cbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgIGBXZWJTb2NrZXRUcmFuc3BvcnQ6IEV2aWN0ZWQgJHtzdGFydEluZGV4fSBjb25maXJtZWQgbWVzc2FnZXMsICR7cmVtYWluaW5nLmxlbmd0aH0gcmVtYWluaW5nYCxcbiAgICAgICAgKVxuICAgICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKFxuICAgICAgICAgICdpbmZvJyxcbiAgICAgICAgICAnY2xpX3dlYnNvY2tldF9ldmljdGVkX2NvbmZpcm1lZF9tZXNzYWdlcycsXG4gICAgICAgICAge1xuICAgICAgICAgICAgZXZpY3RlZDogc3RhcnRJbmRleCxcbiAgICAgICAgICAgIHJlbWFpbmluZzogcmVtYWluaW5nLmxlbmd0aCxcbiAgICAgICAgICB9LFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXNUb1JlcGxheSA9IG1lc3NhZ2VzLnNsaWNlKHN0YXJ0SW5kZXgpXG4gICAgaWYgKG1lc3NhZ2VzVG9SZXBsYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoJ1dlYlNvY2tldFRyYW5zcG9ydDogTm8gbmV3IG1lc3NhZ2VzIHRvIHJlcGxheScpXG4gICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdpbmZvJywgJ2NsaV93ZWJzb2NrZXRfbm9fbWVzc2FnZXNfdG9fcmVwbGF5JylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBXZWJTb2NrZXRUcmFuc3BvcnQ6IFJlcGxheWluZyAke21lc3NhZ2VzVG9SZXBsYXkubGVuZ3RofSBidWZmZXJlZCBtZXNzYWdlc2AsXG4gICAgKVxuICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2luZm8nLCAnY2xpX3dlYnNvY2tldF9tZXNzYWdlc190b19yZXBsYXknLCB7XG4gICAgICBjb3VudDogbWVzc2FnZXNUb1JlcGxheS5sZW5ndGgsXG4gICAgfSlcblxuICAgIGZvciAoY29uc3QgbWVzc2FnZSBvZiBtZXNzYWdlc1RvUmVwbGF5KSB7XG4gICAgICBjb25zdCBsaW5lID0ganNvblN0cmluZ2lmeShtZXNzYWdlKSArICdcXG4nXG4gICAgICBjb25zdCBzdWNjZXNzID0gdGhpcy5zZW5kTGluZShsaW5lKVxuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ29ubmVjdGlvbkVycm9yKClcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gRG8gTk9UIGNsZWFyIHRoZSBidWZmZXIgYWZ0ZXIgcmVwbGF5IFx1MjAxNCBtZXNzYWdlcyByZW1haW4gYnVmZmVyZWQgdW50aWxcbiAgICAvLyB0aGUgc2VydmVyIGNvbmZpcm1zIHJlY2VpcHQgb24gdGhlIG5leHQgcmVjb25uZWN0aW9uLiBUaGlzIHByZXZlbnRzXG4gICAgLy8gbWVzc2FnZSBsb3NzIGlmIHRoZSBjb25uZWN0aW9uIGRyb3BzIGFmdGVyIHJlcGxheSBidXQgYmVmb3JlIHRoZSBzZXJ2ZXJcbiAgICAvLyBwcm9jZXNzZXMgdGhlIG1lc3NhZ2VzLlxuICB9XG5cbiAgaXNDb25uZWN0ZWRTdGF0dXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09ICdjb25uZWN0ZWQnXG4gIH1cblxuICBpc0Nsb3NlZFN0YXR1cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gJ2Nsb3NlZCdcbiAgfVxuXG4gIHNldE9uRGF0YShjYWxsYmFjazogKGRhdGE6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25EYXRhID0gY2FsbGJhY2tcbiAgfVxuXG4gIHNldE9uQ29ubmVjdChjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Db25uZWN0Q2FsbGJhY2sgPSBjYWxsYmFja1xuICB9XG5cbiAgc2V0T25DbG9zZShjYWxsYmFjazogKGNsb3NlQ29kZT86IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DbG9zZUNhbGxiYWNrID0gY2FsbGJhY2tcbiAgfVxuXG4gIGdldFN0YXRlTGFiZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZVxuICB9XG5cbiAgYXN5bmMgd3JpdGUobWVzc2FnZTogU3Rkb3V0TWVzc2FnZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICgndXVpZCcgaW4gbWVzc2FnZSAmJiB0eXBlb2YgbWVzc2FnZS51dWlkID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5tZXNzYWdlQnVmZmVyLmFkZChtZXNzYWdlKVxuICAgICAgdGhpcy5sYXN0U2VudElkID0gbWVzc2FnZS51dWlkXG4gICAgfVxuXG4gICAgY29uc3QgbGluZSA9IGpzb25TdHJpbmdpZnkobWVzc2FnZSkgKyAnXFxuJ1xuXG4gICAgaWYgKHRoaXMuc3RhdGUgIT09ICdjb25uZWN0ZWQnKSB7XG4gICAgICAvLyBNZXNzYWdlIGJ1ZmZlcmVkIGZvciByZXBsYXkgd2hlbiBjb25uZWN0ZWQgKGlmIGl0IGhhcyBhIFVVSUQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzZXNzaW9uTGFiZWwgPSB0aGlzLnNlc3Npb25JZCA/IGAgc2Vzc2lvbj0ke3RoaXMuc2Vzc2lvbklkfWAgOiAnJ1xuICAgIGNvbnN0IGRldGFpbExhYmVsID0gdGhpcy5nZXRDb250cm9sTWVzc2FnZURldGFpbExhYmVsKG1lc3NhZ2UpXG5cbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgV2ViU29ja2V0VHJhbnNwb3J0OiBTZW5kaW5nIG1lc3NhZ2UgdHlwZT0ke21lc3NhZ2UudHlwZX0ke3Nlc3Npb25MYWJlbH0ke2RldGFpbExhYmVsfWAsXG4gICAgKVxuXG4gICAgdGhpcy5zZW5kTGluZShsaW5lKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb250cm9sTWVzc2FnZURldGFpbExhYmVsKG1lc3NhZ2U6IFN0ZG91dE1lc3NhZ2UpOiBzdHJpbmcge1xuICAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICdjb250cm9sX3JlcXVlc3QnKSB7XG4gICAgICBjb25zdCB7IHJlcXVlc3RfaWQsIHJlcXVlc3QgfSA9IG1lc3NhZ2VcbiAgICAgIGNvbnN0IHRvb2xOYW1lID1cbiAgICAgICAgcmVxdWVzdC5zdWJ0eXBlID09PSAnY2FuX3VzZV90b29sJyA/IHJlcXVlc3QudG9vbF9uYW1lIDogJydcbiAgICAgIHJldHVybiBgIHN1YnR5cGU9JHtyZXF1ZXN0LnN1YnR5cGV9IHJlcXVlc3RfaWQ9JHtyZXF1ZXN0X2lkfSR7dG9vbE5hbWUgPyBgIHRvb2w9JHt0b29sTmFtZX1gIDogJyd9YFxuICAgIH1cbiAgICBpZiAobWVzc2FnZS50eXBlID09PSAnY29udHJvbF9yZXNwb25zZScpIHtcbiAgICAgIGNvbnN0IHsgc3VidHlwZSwgcmVxdWVzdF9pZCB9ID0gbWVzc2FnZS5yZXNwb25zZVxuICAgICAgcmV0dXJuIGAgc3VidHlwZT0ke3N1YnR5cGV9IHJlcXVlc3RfaWQ9JHtyZXF1ZXN0X2lkfWBcbiAgICB9XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBwcml2YXRlIHN0YXJ0UGluZ0ludGVydmFsKCk6IHZvaWQge1xuICAgIC8vIENsZWFyIGFueSBleGlzdGluZyBpbnRlcnZhbFxuICAgIHRoaXMuc3RvcFBpbmdJbnRlcnZhbCgpXG5cbiAgICB0aGlzLnBvbmdSZWNlaXZlZCA9IHRydWVcbiAgICBsZXQgbGFzdFRpY2tUaW1lID0gRGF0ZS5ub3coKVxuXG4gICAgLy8gU2VuZCBwaW5nIHBlcmlvZGljYWxseSB0byBkZXRlY3QgZGVhZCBjb25uZWN0aW9ucy5cbiAgICAvLyBJZiB0aGUgcHJldmlvdXMgcGluZyBnb3Qgbm8gcG9uZywgdHJlYXQgdGhlIGNvbm5lY3Rpb24gYXMgZGVhZC5cbiAgICB0aGlzLnBpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlID09PSAnY29ubmVjdGVkJyAmJiB0aGlzLndzKSB7XG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICAgICAgY29uc3QgZ2FwID0gbm93IC0gbGFzdFRpY2tUaW1lXG4gICAgICAgIGxhc3RUaWNrVGltZSA9IG5vd1xuXG4gICAgICAgIC8vIFByb2Nlc3Mtc3VzcGVuc2lvbiBkZXRlY3Rvci4gSWYgdGhlIHdhbGwtY2xvY2sgZ2FwIGJldHdlZW4gdGlja3NcbiAgICAgICAgLy8gZ3JlYXRseSBleGNlZWRzIHRoZSAxMHMgaW50ZXJ2YWwsIHRoZSBwcm9jZXNzIHdhcyBzdXNwZW5kZWRcbiAgICAgICAgLy8gKGxhcHRvcCBsaWQsIFNJR1NUT1AsIFZNIHBhdXNlKS4gc2V0SW50ZXJ2YWwgZG9lcyBub3QgcXVldWVcbiAgICAgICAgLy8gbWlzc2VkIHRpY2tzIFx1MjAxNCBpdCBjb2FsZXNjZXMgXHUyMDE0IHNvIG9uIHdha2UgdGhpcyBjYWxsYmFjayBmaXJlc1xuICAgICAgICAvLyBvbmNlIHdpdGggYSBodWdlIGdhcC4gVGhlIHNvY2tldCBpcyBhbG1vc3QgY2VydGFpbmx5IGRlYWQ6XG4gICAgICAgIC8vIE5BVCBtYXBwaW5ncyBkcm9wIGluIDMwc1x1MjAxMzVtaW4sIGFuZCB0aGUgc2VydmVyIGhhcyBiZWVuXG4gICAgICAgIC8vIHJldHJhbnNtaXR0aW5nIGludG8gdGhlIHZvaWQuIERvbid0IHdhaXQgZm9yIGEgcGluZy9wb25nXG4gICAgICAgIC8vIHJvdW5kLXRyaXAgdG8gY29uZmlybSAod3MucGluZygpIG9uIGEgZGVhZCBzb2NrZXQgcmV0dXJuc1xuICAgICAgICAvLyBpbW1lZGlhdGVseSB3aXRoIG5vIGVycm9yIFx1MjAxNCBieXRlcyBnbyBpbnRvIHRoZSBrZXJuZWwgc2VuZFxuICAgICAgICAvLyBidWZmZXIpLiBBc3N1bWUgZGVhZCBhbmQgcmVjb25uZWN0IG5vdy4gQSBzcHVyaW91cyByZWNvbm5lY3RcbiAgICAgICAgLy8gYWZ0ZXIgYSBzaG9ydCBzbGVlcCBpcyBjaGVhcCBcdTIwMTQgcmVwbGF5QnVmZmVyZWRNZXNzYWdlcygpIGhhbmRsZXNcbiAgICAgICAgLy8gaXQgYW5kIHRoZSBzZXJ2ZXIgZGVkdXBzIGJ5IFVVSUQuXG4gICAgICAgIGlmIChnYXAgPiBTTEVFUF9ERVRFQ1RJT05fVEhSRVNIT0xEX01TKSB7XG4gICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgYFdlYlNvY2tldFRyYW5zcG9ydDogJHtNYXRoLnJvdW5kKGdhcCAvIDEwMDApfXMgdGljayBnYXAgZGV0ZWN0ZWQgXHUyMDE0IHByb2Nlc3Mgd2FzIHN1c3BlbmRlZCwgZm9yY2luZyByZWNvbm5lY3RgLFxuICAgICAgICAgIClcbiAgICAgICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKFxuICAgICAgICAgICAgJ2luZm8nLFxuICAgICAgICAgICAgJ2NsaV93ZWJzb2NrZXRfc2xlZXBfZGV0ZWN0ZWRfb25fcGluZycsXG4gICAgICAgICAgICB7IGdhcE1zOiBnYXAgfSxcbiAgICAgICAgICApXG4gICAgICAgICAgdGhpcy5oYW5kbGVDb25uZWN0aW9uRXJyb3IoKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnBvbmdSZWNlaXZlZCkge1xuICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICdXZWJTb2NrZXRUcmFuc3BvcnQ6IE5vIHBvbmcgcmVjZWl2ZWQsIGNvbm5lY3Rpb24gYXBwZWFycyBkZWFkJyxcbiAgICAgICAgICAgIHsgbGV2ZWw6ICdlcnJvcicgfSxcbiAgICAgICAgICApXG4gICAgICAgICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnZXJyb3InLCAnY2xpX3dlYnNvY2tldF9wb25nX3RpbWVvdXQnKVxuICAgICAgICAgIHRoaXMuaGFuZGxlQ29ubmVjdGlvbkVycm9yKClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucG9uZ1JlY2VpdmVkID0gZmFsc2VcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLndzLnBpbmc/LigpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgbG9nRm9yRGVidWdnaW5nKGBXZWJTb2NrZXRUcmFuc3BvcnQ6IFBpbmcgZmFpbGVkOiAke2Vycm9yfWAsIHtcbiAgICAgICAgICAgIGxldmVsOiAnZXJyb3InLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnZXJyb3InLCAnY2xpX3dlYnNvY2tldF9waW5nX2ZhaWxlZCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBERUZBVUxUX1BJTkdfSU5URVJWQUwpXG4gIH1cblxuICBwcml2YXRlIHN0b3BQaW5nSW50ZXJ2YWwoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGluZ0ludGVydmFsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMucGluZ0ludGVydmFsKVxuICAgICAgdGhpcy5waW5nSW50ZXJ2YWwgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGFydEtlZXBhbGl2ZUludGVydmFsKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcEtlZXBhbGl2ZUludGVydmFsKClcblxuICAgIC8vIEluIENDUiBzZXNzaW9ucywgc2Vzc2lvbiBhY3Rpdml0eSBoZWFydGJlYXRzIGhhbmRsZSBrZWVwLWFsaXZlc1xuICAgIGlmIChpc0VudlRydXRoeShwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9SRU1PVEUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmtlZXBBbGl2ZUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUgPT09ICdjb25uZWN0ZWQnICYmIHRoaXMud3MpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLndzLnNlbmQoS0VFUF9BTElWRV9GUkFNRSlcbiAgICAgICAgICB0aGlzLmxhc3RBY3Rpdml0eVRpbWUgPSBEYXRlLm5vdygpXG4gICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgJ1dlYlNvY2tldFRyYW5zcG9ydDogU2VudCBwZXJpb2RpYyBrZWVwX2FsaXZlIGRhdGEgZnJhbWUnLFxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICBgV2ViU29ja2V0VHJhbnNwb3J0OiBQZXJpb2RpYyBrZWVwX2FsaXZlIGZhaWxlZDogJHtlcnJvcn1gLFxuICAgICAgICAgICAgeyBsZXZlbDogJ2Vycm9yJyB9LFxuICAgICAgICAgIClcbiAgICAgICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdlcnJvcicsICdjbGlfd2Vic29ja2V0X2tlZXBhbGl2ZV9mYWlsZWQnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgREVGQVVMVF9LRUVQQUxJVkVfSU5URVJWQUwpXG4gIH1cblxuICBwcml2YXRlIHN0b3BLZWVwYWxpdmVJbnRlcnZhbCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5rZWVwQWxpdmVJbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmtlZXBBbGl2ZUludGVydmFsKVxuICAgICAgdGhpcy5rZWVwQWxpdmVJbnRlcnZhbCA9IG51bGxcbiAgICB9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
