#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  decodeJwtExpiry
} from "./chunk-SN2BUZJI.mjs";
import {
  getSessionIngressAuthHeaders,
  getSessionIngressAuthToken,
  init_sessionActivity,
  init_sessionIngressAuth,
  registerSessionActivityCallback,
  unregisterSessionActivityCallback
} from "./chunk-JWBPLKI2.mjs";
import {
  getClaudeCodeUserAgent,
  init_userAgent
} from "./chunk-JQ55XPLZ.mjs";
import {
  createAxiosInstance,
  init_proxy
} from "./chunk-O2ZQRVJU.mjs";
import {
  init_sleep,
  sleep
} from "./chunk-DQ5JTCOA.mjs";
import {
  axios_default,
  init_axios
} from "./chunk-J6MJ6UVK.mjs";
import {
  init_diagLogs,
  logForDiagnosticsNoPII
} from "./chunk-SF3TOBTZ.mjs";
import {
  errorMessage,
  getErrnoCode,
  init_debug,
  init_errors,
  init_slowOperations,
  jsonParse,
  jsonStringify,
  logForDebugging
} from "./chunk-L2VTD674.mjs";

// src/cli/transports/ccrClient.ts
import { randomUUID } from "crypto";
init_debug();
init_diagLogs();
init_errors();
init_proxy();
init_sessionActivity();
init_sessionIngressAuth();
init_sleep();
init_userAgent();

// src/cli/transports/SerialBatchEventUploader.ts
init_slowOperations();
var RetryableError = class extends Error {
  constructor(message, retryAfterMs) {
    super(message);
    this.retryAfterMs = retryAfterMs;
  }
};
var SerialBatchEventUploader = class {
  pending = [];
  pendingAtClose = 0;
  draining = false;
  closed = false;
  backpressureResolvers = [];
  sleepResolve = null;
  flushResolvers = [];
  droppedBatches = 0;
  config;
  constructor(config) {
    this.config = config;
  }
  /**
   * Monotonic count of batches dropped via maxConsecutiveFailures. Callers
   * can snapshot before flush() and compare after to detect silent drops
   * (flush() resolves normally even when batches were dropped).
   */
  get droppedBatchCount() {
    return this.droppedBatches;
  }
  /**
   * Pending queue depth. After close(), returns the count at close time —
   * close() clears the queue but shutdown diagnostics may read this after.
   */
  get pendingCount() {
    return this.closed ? this.pendingAtClose : this.pending.length;
  }
  /**
   * Add events to the pending buffer. Returns immediately if space is
   * available. Blocks (awaits) if the buffer is full — caller pauses
   * until drain frees space.
   */
  async enqueue(events) {
    if (this.closed) return;
    const items = Array.isArray(events) ? events : [events];
    if (items.length === 0) return;
    while (this.pending.length + items.length > this.config.maxQueueSize && !this.closed) {
      await new Promise((resolve) => {
        this.backpressureResolvers.push(resolve);
      });
    }
    if (this.closed) return;
    this.pending.push(...items);
    void this.drain();
  }
  /**
   * Block until all pending events have been sent.
   * Used at turn boundaries and graceful shutdown.
   */
  flush() {
    if (this.pending.length === 0 && !this.draining) {
      return Promise.resolve();
    }
    void this.drain();
    return new Promise((resolve) => {
      this.flushResolvers.push(resolve);
    });
  }
  /**
   * Drop pending events and stop processing.
   * Resolves any blocked enqueue() and flush() callers.
   */
  close() {
    if (this.closed) return;
    this.closed = true;
    this.pendingAtClose = this.pending.length;
    this.pending = [];
    this.sleepResolve?.();
    this.sleepResolve = null;
    for (const resolve of this.backpressureResolvers) resolve();
    this.backpressureResolvers = [];
    for (const resolve of this.flushResolvers) resolve();
    this.flushResolvers = [];
  }
  /**
   * Drain loop. At most one instance runs at a time (guarded by this.draining).
   * Sends batches serially. On failure, backs off and retries indefinitely.
   */
  async drain() {
    if (this.draining || this.closed) return;
    this.draining = true;
    let failures = 0;
    try {
      while (this.pending.length > 0 && !this.closed) {
        const batch = this.takeBatch();
        if (batch.length === 0) continue;
        try {
          await this.config.send(batch);
          failures = 0;
        } catch (err) {
          failures++;
          if (this.config.maxConsecutiveFailures !== void 0 && failures >= this.config.maxConsecutiveFailures) {
            this.droppedBatches++;
            this.config.onBatchDropped?.(batch.length, failures);
            failures = 0;
            this.releaseBackpressure();
            continue;
          }
          this.pending = batch.concat(this.pending);
          const retryAfterMs = err instanceof RetryableError ? err.retryAfterMs : void 0;
          await this.sleep(this.retryDelay(failures, retryAfterMs));
          continue;
        }
        this.releaseBackpressure();
      }
    } finally {
      this.draining = false;
      if (this.pending.length === 0) {
        for (const resolve of this.flushResolvers) resolve();
        this.flushResolvers = [];
      }
    }
  }
  /**
   * Pull the next batch from pending. Respects both maxBatchSize and
   * maxBatchBytes. The first item is always taken; subsequent items only
   * if adding them keeps the cumulative JSON size under maxBatchBytes.
   *
   * Un-serializable items (BigInt, circular refs, throwing toJSON) are
   * dropped in place — they can never be sent and leaving them at
   * pending[0] would poison the queue and hang flush() forever.
   */
  takeBatch() {
    const { maxBatchSize, maxBatchBytes } = this.config;
    if (maxBatchBytes === void 0) {
      return this.pending.splice(0, maxBatchSize);
    }
    let bytes = 0;
    let count = 0;
    while (count < this.pending.length && count < maxBatchSize) {
      let itemBytes;
      try {
        itemBytes = Buffer.byteLength(jsonStringify(this.pending[count]));
      } catch {
        this.pending.splice(count, 1);
        continue;
      }
      if (count > 0 && bytes + itemBytes > maxBatchBytes) break;
      bytes += itemBytes;
      count++;
    }
    return this.pending.splice(0, count);
  }
  retryDelay(failures, retryAfterMs) {
    const jitter = Math.random() * this.config.jitterMs;
    if (retryAfterMs !== void 0) {
      const clamped = Math.max(
        this.config.baseDelayMs,
        Math.min(retryAfterMs, this.config.maxDelayMs)
      );
      return clamped + jitter;
    }
    const exponential = Math.min(
      this.config.baseDelayMs * 2 ** (failures - 1),
      this.config.maxDelayMs
    );
    return exponential + jitter;
  }
  releaseBackpressure() {
    const resolvers = this.backpressureResolvers;
    this.backpressureResolvers = [];
    for (const resolve of resolvers) resolve();
  }
  sleep(ms) {
    return new Promise((resolve) => {
      this.sleepResolve = resolve;
      setTimeout(
        (self, resolve2) => {
          self.sleepResolve = null;
          resolve2();
        },
        ms,
        this,
        resolve
      );
    });
  }
};

// src/cli/transports/WorkerStateUploader.ts
init_sleep();
var WorkerStateUploader = class {
  inflight = null;
  pending = null;
  closed = false;
  config;
  constructor(config) {
    this.config = config;
  }
  /**
   * Enqueue a patch to PUT /worker. Coalesces with any existing pending
   * patch. Fire-and-forget — callers don't need to await.
   */
  enqueue(patch) {
    if (this.closed) return;
    this.pending = this.pending ? coalescePatches(this.pending, patch) : patch;
    void this.drain();
  }
  close() {
    this.closed = true;
    this.pending = null;
  }
  async drain() {
    if (this.inflight || this.closed) return;
    if (!this.pending) return;
    const payload = this.pending;
    this.pending = null;
    this.inflight = this.sendWithRetry(payload).then(() => {
      this.inflight = null;
      if (this.pending && !this.closed) {
        void this.drain();
      }
    });
  }
  /** Retries indefinitely with exponential backoff until success or close(). */
  async sendWithRetry(payload) {
    let current = payload;
    let failures = 0;
    while (!this.closed) {
      const ok = await this.config.send(current);
      if (ok) return;
      failures++;
      await sleep(this.retryDelay(failures));
      if (this.pending && !this.closed) {
        current = coalescePatches(current, this.pending);
        this.pending = null;
      }
    }
  }
  retryDelay(failures) {
    const exponential = Math.min(
      this.config.baseDelayMs * 2 ** (failures - 1),
      this.config.maxDelayMs
    );
    const jitter = Math.random() * this.config.jitterMs;
    return exponential + jitter;
  }
};
function coalescePatches(base, overlay) {
  const merged = { ...base };
  for (const [key, value] of Object.entries(overlay)) {
    if ((key === "external_metadata" || key === "internal_metadata") && merged[key] && typeof merged[key] === "object" && typeof value === "object" && value !== null) {
      merged[key] = {
        ...merged[key],
        ...value
      };
    } else {
      merged[key] = value;
    }
  }
  return merged;
}

// src/cli/transports/ccrClient.ts
var DEFAULT_HEARTBEAT_INTERVAL_MS = 2e4;
var STREAM_EVENT_FLUSH_INTERVAL_MS = 100;
function alwaysValidStatus() {
  return true;
}
var CCRInitError = class extends Error {
  constructor(reason) {
    super(`CCRClient init failed: ${reason}`);
    this.reason = reason;
  }
};
var MAX_CONSECUTIVE_AUTH_FAILURES = 10;
function createStreamAccumulator() {
  return { byMessage: /* @__PURE__ */ new Map(), scopeToMessage: /* @__PURE__ */ new Map() };
}
function scopeKey(m) {
  return `${m.session_id}:${m.parent_tool_use_id ?? ""}`;
}
function accumulateStreamEvents(buffer, state) {
  const out = [];
  const touched = /* @__PURE__ */ new Map();
  for (const msg of buffer) {
    switch (msg.event.type) {
      case "message_start": {
        const id = msg.event.message.id;
        const prevId = state.scopeToMessage.get(scopeKey(msg));
        if (prevId) state.byMessage.delete(prevId);
        state.scopeToMessage.set(scopeKey(msg), id);
        state.byMessage.set(id, []);
        out.push(msg);
        break;
      }
      case "content_block_delta": {
        if (msg.event.delta.type !== "text_delta") {
          out.push(msg);
          break;
        }
        const messageId = state.scopeToMessage.get(scopeKey(msg));
        const blocks = messageId ? state.byMessage.get(messageId) : void 0;
        if (!blocks) {
          out.push(msg);
          break;
        }
        const chunks = blocks[msg.event.index] ??= [];
        chunks.push(msg.event.delta.text);
        const existing = touched.get(chunks);
        if (existing) {
          existing.event.delta.text = chunks.join("");
          break;
        }
        const snapshot = {
          type: "stream_event",
          uuid: msg.uuid,
          session_id: msg.session_id,
          parent_tool_use_id: msg.parent_tool_use_id,
          event: {
            type: "content_block_delta",
            index: msg.event.index,
            delta: { type: "text_delta", text: chunks.join("") }
          }
        };
        touched.set(chunks, snapshot);
        out.push(snapshot);
        break;
      }
      default:
        out.push(msg);
    }
  }
  return out;
}
function clearStreamAccumulatorForMessage(state, assistant) {
  state.byMessage.delete(assistant.message.id);
  const scope = scopeKey(assistant);
  if (state.scopeToMessage.get(scope) === assistant.message.id) {
    state.scopeToMessage.delete(scope);
  }
}
var CCRClient = class {
  workerEpoch = 0;
  heartbeatIntervalMs;
  heartbeatJitterFraction;
  heartbeatTimer = null;
  heartbeatInFlight = false;
  closed = false;
  consecutiveAuthFailures = 0;
  currentState = null;
  sessionBaseUrl;
  sessionId;
  http = createAxiosInstance({ keepAlive: true });
  // stream_event delay buffer — accumulates content deltas for up to
  // STREAM_EVENT_FLUSH_INTERVAL_MS before enqueueing (reduces POST count
  // and enables text_delta coalescing). Mirrors HybridTransport's pattern.
  streamEventBuffer = [];
  streamEventTimer = null;
  // Full-so-far text accumulator. Persists across flushes so each emitted
  // text_delta event carries the complete text from the start of the block —
  // mid-stream reconnects see a self-contained snapshot. Keyed by API message
  // ID; cleared in writeEvent when the complete assistant message arrives.
  streamTextAccumulator = createStreamAccumulator();
  workerState;
  eventUploader;
  internalEventUploader;
  deliveryUploader;
  /**
   * Called when the server returns 409 (a newer worker epoch superseded ours).
   * Default: process.exit(1) — correct for spawn-mode children where the
   * parent bridge re-spawns. In-process callers (replBridge) MUST override
   * this to close gracefully instead; exit would kill the user's REPL.
   */
  onEpochMismatch;
  /**
   * Auth header source. Defaults to the process-wide session-ingress token
   * (CLAUDE_CODE_SESSION_ACCESS_TOKEN env var). Callers managing multiple
   * concurrent sessions with distinct JWTs MUST inject this — the env-var
   * path is a process global and would stomp across sessions.
   */
  getAuthHeaders;
  constructor(transport, sessionUrl, opts) {
    this.onEpochMismatch = opts?.onEpochMismatch ?? (() => {
      process.exit(1);
    });
    this.heartbeatIntervalMs = opts?.heartbeatIntervalMs ?? DEFAULT_HEARTBEAT_INTERVAL_MS;
    this.heartbeatJitterFraction = opts?.heartbeatJitterFraction ?? 0;
    this.getAuthHeaders = opts?.getAuthHeaders ?? getSessionIngressAuthHeaders;
    if (sessionUrl.protocol !== "http:" && sessionUrl.protocol !== "https:") {
      throw new Error(
        `CCRClient: Expected http(s) URL, got ${sessionUrl.protocol}`
      );
    }
    const pathname = sessionUrl.pathname.replace(/\/$/, "");
    this.sessionBaseUrl = `${sessionUrl.protocol}//${sessionUrl.host}${pathname}`;
    this.sessionId = pathname.split("/").pop() || "";
    this.workerState = new WorkerStateUploader({
      send: (body) => this.request(
        "put",
        "/worker",
        { worker_epoch: this.workerEpoch, ...body },
        "PUT worker"
      ).then((r) => r.ok),
      baseDelayMs: 500,
      maxDelayMs: 3e4,
      jitterMs: 500
    });
    this.eventUploader = new SerialBatchEventUploader({
      maxBatchSize: 100,
      maxBatchBytes: 10 * 1024 * 1024,
      // flushStreamEventBuffer() enqueues a full 100ms window of accumulated
      // stream_events in one call. A burst of mixed delta types that don't
      // fold into a single snapshot could exceed the old cap (50) and deadlock
      // on the SerialBatchEventUploader backpressure check. Match
      // HybridTransport's bound — high enough to be memory-only.
      maxQueueSize: 1e5,
      send: async (batch) => {
        const result = await this.request(
          "post",
          "/worker/events",
          { worker_epoch: this.workerEpoch, events: batch },
          "client events"
        );
        if (!result.ok) {
          throw new RetryableError(
            "client event POST failed",
            result.retryAfterMs
          );
        }
      },
      baseDelayMs: 500,
      maxDelayMs: 3e4,
      jitterMs: 500
    });
    this.internalEventUploader = new SerialBatchEventUploader({
      maxBatchSize: 100,
      maxBatchBytes: 10 * 1024 * 1024,
      maxQueueSize: 200,
      send: async (batch) => {
        const result = await this.request(
          "post",
          "/worker/internal-events",
          { worker_epoch: this.workerEpoch, events: batch },
          "internal events"
        );
        if (!result.ok) {
          throw new RetryableError(
            "internal event POST failed",
            result.retryAfterMs
          );
        }
      },
      baseDelayMs: 500,
      maxDelayMs: 3e4,
      jitterMs: 500
    });
    this.deliveryUploader = new SerialBatchEventUploader({
      maxBatchSize: 64,
      maxQueueSize: 64,
      send: async (batch) => {
        const result = await this.request(
          "post",
          "/worker/events/delivery",
          {
            worker_epoch: this.workerEpoch,
            updates: batch.map((d) => ({
              event_id: d.eventId,
              status: d.status
            }))
          },
          "delivery batch"
        );
        if (!result.ok) {
          throw new RetryableError("delivery POST failed", result.retryAfterMs);
        }
      },
      baseDelayMs: 500,
      maxDelayMs: 3e4,
      jitterMs: 500
    });
    transport.setOnEvent((event) => {
      this.reportDelivery(event.event_id, "received");
    });
  }
  /**
   * Initialize the session worker:
   * 1. Take worker_epoch from the argument, or fall back to
   *    CLAUDE_CODE_WORKER_EPOCH (set by env-manager / bridge spawner)
   * 2. Report state as 'idle'
   * 3. Start heartbeat timer
   *
   * In-process callers (replBridge) pass the epoch directly — they
   * registered the worker themselves and there is no parent process
   * setting env vars.
   */
  async initialize(epoch) {
    const startMs = Date.now();
    if (Object.keys(this.getAuthHeaders()).length === 0) {
      throw new CCRInitError("no_auth_headers");
    }
    if (epoch === void 0) {
      const rawEpoch = process.env.CLAUDE_CODE_WORKER_EPOCH;
      epoch = rawEpoch ? parseInt(rawEpoch, 10) : NaN;
    }
    if (isNaN(epoch)) {
      throw new CCRInitError("missing_epoch");
    }
    this.workerEpoch = epoch;
    const restoredPromise = this.getWorkerState();
    const result = await this.request(
      "put",
      "/worker",
      {
        worker_status: "idle",
        worker_epoch: this.workerEpoch,
        // Clear stale pending_action/task_summary left by a prior
        // worker crash — the in-session clears don't survive process restart.
        external_metadata: {
          pending_action: null,
          task_summary: null
        }
      },
      "PUT worker (init)"
    );
    if (!result.ok) {
      throw new CCRInitError("worker_register_failed");
    }
    this.currentState = "idle";
    this.startHeartbeat();
    registerSessionActivityCallback(() => {
      void this.writeEvent({ type: "keep_alive" });
    });
    logForDebugging(`CCRClient: initialized, epoch=${this.workerEpoch}`);
    logForDiagnosticsNoPII("info", "cli_worker_lifecycle_initialized", {
      epoch: this.workerEpoch,
      duration_ms: Date.now() - startMs
    });
    const { metadata, durationMs } = await restoredPromise;
    if (!this.closed) {
      logForDiagnosticsNoPII("info", "cli_worker_state_restored", {
        duration_ms: durationMs,
        had_state: metadata !== null
      });
    }
    return metadata;
  }
  // Control_requests are marked processed and not re-delivered on
  // restart, so read back what the prior worker wrote.
  async getWorkerState() {
    const startMs = Date.now();
    const authHeaders = this.getAuthHeaders();
    if (Object.keys(authHeaders).length === 0) {
      return { metadata: null, durationMs: 0 };
    }
    const data = await this.getWithRetry(
      `${this.sessionBaseUrl}/worker`,
      authHeaders,
      "worker_state"
    );
    return {
      metadata: data?.worker?.external_metadata ?? null,
      durationMs: Date.now() - startMs
    };
  }
  /**
   * Send an authenticated HTTP request to CCR. Handles auth headers,
   * 409 epoch mismatch, and error logging. Returns { ok: true } on 2xx.
   * On 429, reads Retry-After (integer seconds) so the uploader can honor
   * the server's backoff hint instead of blindly exponentiating.
   */
  async request(method, path, body, label, { timeout = 1e4 } = {}) {
    const authHeaders = this.getAuthHeaders();
    if (Object.keys(authHeaders).length === 0) return { ok: false };
    try {
      const response = await this.http[method](
        `${this.sessionBaseUrl}${path}`,
        body,
        {
          headers: {
            ...authHeaders,
            "Content-Type": "application/json",
            "anthropic-version": "2023-06-01",
            "User-Agent": getClaudeCodeUserAgent()
          },
          validateStatus: alwaysValidStatus,
          timeout
        }
      );
      if (response.status >= 200 && response.status < 300) {
        this.consecutiveAuthFailures = 0;
        return { ok: true };
      }
      if (response.status === 409) {
        this.handleEpochMismatch();
      }
      if (response.status === 401 || response.status === 403) {
        const tok = getSessionIngressAuthToken();
        const exp = tok ? decodeJwtExpiry(tok) : null;
        if (exp !== null && exp * 1e3 < Date.now()) {
          logForDebugging(
            `CCRClient: session_token expired (exp=${new Date(exp * 1e3).toISOString()}) \u2014 no refresh was delivered, exiting`,
            { level: "error" }
          );
          logForDiagnosticsNoPII("error", "cli_worker_token_expired_no_refresh");
          this.onEpochMismatch();
        }
        this.consecutiveAuthFailures++;
        if (this.consecutiveAuthFailures >= MAX_CONSECUTIVE_AUTH_FAILURES) {
          logForDebugging(
            `CCRClient: ${this.consecutiveAuthFailures} consecutive auth failures with a valid-looking token \u2014 server-side auth unrecoverable, exiting`,
            { level: "error" }
          );
          logForDiagnosticsNoPII("error", "cli_worker_auth_failures_exhausted");
          this.onEpochMismatch();
        }
      }
      logForDebugging(`CCRClient: ${label} returned ${response.status}`, {
        level: "warn"
      });
      logForDiagnosticsNoPII("warn", "cli_worker_request_failed", {
        method,
        path,
        status: response.status
      });
      if (response.status === 429) {
        const raw = response.headers?.["retry-after"];
        const seconds = typeof raw === "string" ? parseInt(raw, 10) : NaN;
        if (!isNaN(seconds) && seconds >= 0) {
          return { ok: false, retryAfterMs: seconds * 1e3 };
        }
      }
      return { ok: false };
    } catch (error) {
      logForDebugging(`CCRClient: ${label} failed: ${errorMessage(error)}`, {
        level: "warn"
      });
      logForDiagnosticsNoPII("warn", "cli_worker_request_error", {
        method,
        path,
        error_code: getErrnoCode(error)
      });
      return { ok: false };
    }
  }
  /** Report worker state to CCR via PUT /sessions/{id}/worker. */
  reportState(state, details) {
    if (state === this.currentState && !details) return;
    this.currentState = state;
    this.workerState.enqueue({
      worker_status: state,
      requires_action_details: details ? {
        tool_name: details.tool_name,
        action_description: details.action_description,
        request_id: details.request_id
      } : null
    });
  }
  /** Report external metadata to CCR via PUT /worker. */
  reportMetadata(metadata) {
    this.workerState.enqueue({ external_metadata: metadata });
  }
  /**
   * Handle epoch mismatch (409 Conflict). A newer CC instance has replaced
   * this one — exit immediately.
   */
  handleEpochMismatch() {
    logForDebugging("CCRClient: Epoch mismatch (409), shutting down", {
      level: "error"
    });
    logForDiagnosticsNoPII("error", "cli_worker_epoch_mismatch");
    this.onEpochMismatch();
  }
  /** Start periodic heartbeat. */
  startHeartbeat() {
    this.stopHeartbeat();
    const schedule = () => {
      const jitter = this.heartbeatIntervalMs * this.heartbeatJitterFraction * (2 * Math.random() - 1);
      this.heartbeatTimer = setTimeout(tick, this.heartbeatIntervalMs + jitter);
    };
    const tick = () => {
      void this.sendHeartbeat();
      if (this.heartbeatTimer === null) return;
      schedule();
    };
    schedule();
  }
  /** Stop heartbeat timer. */
  stopHeartbeat() {
    if (this.heartbeatTimer) {
      clearTimeout(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
  }
  /** Send a heartbeat via POST /sessions/{id}/worker/heartbeat. */
  async sendHeartbeat() {
    if (this.heartbeatInFlight) return;
    this.heartbeatInFlight = true;
    try {
      const result = await this.request(
        "post",
        "/worker/heartbeat",
        { session_id: this.sessionId, worker_epoch: this.workerEpoch },
        "Heartbeat",
        { timeout: 5e3 }
      );
      if (result.ok) {
        logForDebugging("CCRClient: Heartbeat sent");
      }
    } finally {
      this.heartbeatInFlight = false;
    }
  }
  /**
   * Write a StdoutMessage as a client event via POST /sessions/{id}/worker/events.
   * These events are visible to frontend clients via the SSE stream.
   * Injects a UUID if missing to ensure server-side idempotency on retry.
   *
   * stream_event messages are held in a 100ms delay buffer and accumulated
   * (text_deltas for the same content block emit a full-so-far snapshot per
   * flush). A non-stream_event write flushes the buffer first so downstream
   * ordering is preserved.
   */
  async writeEvent(message) {
    if (message.type === "stream_event") {
      this.streamEventBuffer.push(message);
      if (!this.streamEventTimer) {
        this.streamEventTimer = setTimeout(
          () => void this.flushStreamEventBuffer(),
          STREAM_EVENT_FLUSH_INTERVAL_MS
        );
      }
      return;
    }
    await this.flushStreamEventBuffer();
    if (message.type === "assistant") {
      clearStreamAccumulatorForMessage(this.streamTextAccumulator, message);
    }
    await this.eventUploader.enqueue(this.toClientEvent(message));
  }
  /** Wrap a StdoutMessage as a ClientEvent, injecting a UUID if missing. */
  toClientEvent(message) {
    const msg = message;
    return {
      payload: {
        ...msg,
        uuid: typeof msg.uuid === "string" ? msg.uuid : randomUUID()
      }
    };
  }
  /**
   * Drain the stream_event delay buffer: accumulate text_deltas into
   * full-so-far snapshots, clear the timer, enqueue the resulting events.
   * Called from the timer, from writeEvent on a non-stream message, and from
   * flush(). close() drops the buffer — call flush() first if you need
   * delivery.
   */
  async flushStreamEventBuffer() {
    if (this.streamEventTimer) {
      clearTimeout(this.streamEventTimer);
      this.streamEventTimer = null;
    }
    if (this.streamEventBuffer.length === 0) return;
    const buffered = this.streamEventBuffer;
    this.streamEventBuffer = [];
    const payloads = accumulateStreamEvents(
      buffered,
      this.streamTextAccumulator
    );
    await this.eventUploader.enqueue(
      payloads.map((payload) => ({ payload, ephemeral: true }))
    );
  }
  /**
   * Write an internal worker event via POST /sessions/{id}/worker/internal-events.
   * These events are NOT visible to frontend clients — they store worker-internal
   * state (transcript messages, compaction markers) needed for session resume.
   */
  async writeInternalEvent(eventType, payload, {
    isCompaction = false,
    agentId
  } = {}) {
    const event = {
      payload: {
        type: eventType,
        ...payload,
        uuid: typeof payload.uuid === "string" ? payload.uuid : randomUUID()
      },
      ...isCompaction && { is_compaction: true },
      ...agentId && { agent_id: agentId }
    };
    await this.internalEventUploader.enqueue(event);
  }
  /**
   * Flush pending internal events. Call between turns and on shutdown
   * to ensure transcript entries are persisted.
   */
  flushInternalEvents() {
    return this.internalEventUploader.flush();
  }
  /**
   * Flush pending client events (writeEvent queue). Call before close()
   * when the caller needs delivery confirmation — close() abandons the
   * queue. Resolves once the uploader drains or rejects; returns
   * regardless of whether individual POSTs succeeded (check server state
   * separately if that matters).
   */
  async flush() {
    await this.flushStreamEventBuffer();
    return this.eventUploader.flush();
  }
  /**
   * Read foreground agent internal events from
   * GET /sessions/{id}/worker/internal-events.
   * Returns transcript entries from the last compaction boundary, or null on failure.
   * Used for session resume.
   */
  async readInternalEvents() {
    return this.paginatedGet("/worker/internal-events", {}, "internal_events");
  }
  /**
   * Read all subagent internal events from
   * GET /sessions/{id}/worker/internal-events?subagents=true.
   * Returns a merged stream across all non-foreground agents, each from its
   * compaction point. Used for session resume.
   */
  async readSubagentInternalEvents() {
    return this.paginatedGet(
      "/worker/internal-events",
      { subagents: "true" },
      "subagent_events"
    );
  }
  /**
   * Paginated GET with retry. Fetches all pages from a list endpoint,
   * retrying each page on failure with exponential backoff + jitter.
   */
  async paginatedGet(path, params, context) {
    const authHeaders = this.getAuthHeaders();
    if (Object.keys(authHeaders).length === 0) return null;
    const allEvents = [];
    let cursor;
    do {
      const url = new URL(`${this.sessionBaseUrl}${path}`);
      for (const [k, v] of Object.entries(params)) {
        url.searchParams.set(k, v);
      }
      if (cursor) {
        url.searchParams.set("cursor", cursor);
      }
      const page = await this.getWithRetry(
        url.toString(),
        authHeaders,
        context
      );
      if (!page) return null;
      allEvents.push(...page.data ?? []);
      cursor = page.next_cursor;
    } while (cursor);
    logForDebugging(
      `CCRClient: Read ${allEvents.length} internal events from ${path}${params.subagents ? " (subagents)" : ""}`
    );
    return allEvents;
  }
  /**
   * Single GET request with retry. Returns the parsed response body
   * on success, null if all retries are exhausted.
   */
  async getWithRetry(url, authHeaders, context) {
    for (let attempt = 1; attempt <= 10; attempt++) {
      let response;
      try {
        response = await this.http.get(url, {
          headers: {
            ...authHeaders,
            "anthropic-version": "2023-06-01",
            "User-Agent": getClaudeCodeUserAgent()
          },
          validateStatus: alwaysValidStatus,
          timeout: 3e4
        });
      } catch (error) {
        logForDebugging(
          `CCRClient: GET ${url} failed (attempt ${attempt}/10): ${errorMessage(error)}`,
          { level: "warn" }
        );
        if (attempt < 10) {
          const delay = Math.min(500 * 2 ** (attempt - 1), 3e4) + Math.random() * 500;
          await sleep(delay);
        }
        continue;
      }
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      }
      if (response.status === 409) {
        this.handleEpochMismatch();
      }
      logForDebugging(
        `CCRClient: GET ${url} returned ${response.status} (attempt ${attempt}/10)`,
        { level: "warn" }
      );
      if (attempt < 10) {
        const delay = Math.min(500 * 2 ** (attempt - 1), 3e4) + Math.random() * 500;
        await sleep(delay);
      }
    }
    logForDebugging("CCRClient: GET retries exhausted", { level: "error" });
    logForDiagnosticsNoPII("error", "cli_worker_get_retries_exhausted", {
      context
    });
    return null;
  }
  /**
   * Report delivery status for a client-to-worker event.
   * POST /v1/code/sessions/{id}/worker/events/delivery (batch endpoint)
   */
  reportDelivery(eventId, status) {
    void this.deliveryUploader.enqueue({ eventId, status });
  }
  /** Get the current epoch (for external use). */
  getWorkerEpoch() {
    return this.workerEpoch;
  }
  /** Internal-event queue depth — shutdown-snapshot backpressure signal. */
  get internalEventsPending() {
    return this.internalEventUploader.pendingCount;
  }
  /** Clean up uploaders and timers. */
  close() {
    this.closed = true;
    this.stopHeartbeat();
    unregisterSessionActivityCallback();
    if (this.streamEventTimer) {
      clearTimeout(this.streamEventTimer);
      this.streamEventTimer = null;
    }
    this.streamEventBuffer = [];
    this.streamTextAccumulator.byMessage.clear();
    this.streamTextAccumulator.scopeToMessage.clear();
    this.workerState.close();
    this.eventUploader.close();
    this.internalEventUploader.close();
    this.deliveryUploader.close();
  }
};

// src/cli/transports/SSETransport.ts
init_axios();
init_debug();
init_diagLogs();
init_errors();
init_sessionIngressAuth();
init_sleep();
init_slowOperations();
init_userAgent();
var RECONNECT_BASE_DELAY_MS = 1e3;
var RECONNECT_MAX_DELAY_MS = 3e4;
var RECONNECT_GIVE_UP_MS = 6e5;
var LIVENESS_TIMEOUT_MS = 45e3;
var PERMANENT_HTTP_CODES = /* @__PURE__ */ new Set([401, 403, 404]);
var POST_MAX_RETRIES = 10;
var POST_BASE_DELAY_MS = 500;
var POST_MAX_DELAY_MS = 8e3;
var STREAM_DECODE_OPTS = { stream: true };
function alwaysValidStatus2() {
  return true;
}
function parseSSEFrames(buffer) {
  const frames = [];
  let pos = 0;
  let idx;
  while ((idx = buffer.indexOf("\n\n", pos)) !== -1) {
    const rawFrame = buffer.slice(pos, idx);
    pos = idx + 2;
    if (!rawFrame.trim()) continue;
    const frame = {};
    let isComment = false;
    for (const line of rawFrame.split("\n")) {
      if (line.startsWith(":")) {
        isComment = true;
        continue;
      }
      const colonIdx = line.indexOf(":");
      if (colonIdx === -1) continue;
      const field = line.slice(0, colonIdx);
      const value = line[colonIdx + 1] === " " ? line.slice(colonIdx + 2) : line.slice(colonIdx + 1);
      switch (field) {
        case "event":
          frame.event = value;
          break;
        case "id":
          frame.id = value;
          break;
        case "data":
          frame.data = frame.data ? frame.data + "\n" + value : value;
          break;
      }
    }
    if (frame.data || isComment) {
      frames.push(frame);
    }
  }
  return { frames, remaining: buffer.slice(pos) };
}
var SSETransport = class {
  // Runtime epoch for CCR v2 event format
  constructor(url, headers = {}, sessionId, refreshHeaders, initialSequenceNum, getAuthHeaders) {
    this.url = url;
    this.headers = headers;
    this.sessionId = sessionId;
    this.refreshHeaders = refreshHeaders;
    this.getAuthHeaders = getAuthHeaders ?? getSessionIngressAuthHeaders;
    this.postUrl = convertSSEUrlToPostUrl(url);
    if (initialSequenceNum !== void 0 && initialSequenceNum > 0) {
      this.lastSequenceNum = initialSequenceNum;
    }
    logForDebugging(`SSETransport: SSE URL = ${url.href}`);
    logForDebugging(`SSETransport: POST URL = ${this.postUrl}`);
    logForDiagnosticsNoPII("info", "cli_sse_transport_initialized");
  }
  state = "idle";
  onData;
  onCloseCallback;
  onEventCallback;
  headers;
  sessionId;
  refreshHeaders;
  getAuthHeaders;
  // SSE connection state
  abortController = null;
  lastSequenceNum = 0;
  seenSequenceNums = /* @__PURE__ */ new Set();
  // Reconnection state
  reconnectAttempts = 0;
  reconnectStartTime = null;
  reconnectTimer = null;
  // Liveness detection
  livenessTimer = null;
  // POST URL (derived from SSE URL)
  postUrl;
  /**
   * High-water mark of sequence numbers seen on this stream. Callers that
   * recreate the transport (e.g. replBridge onWorkReceived) read this before
   * close() and pass it as `initialSequenceNum` to the next instance so the
   * server resumes from the right point instead of replaying everything.
   */
  getLastSequenceNum() {
    return this.lastSequenceNum;
  }
  async connect() {
    if (this.state !== "idle" && this.state !== "reconnecting") {
      logForDebugging(
        `SSETransport: Cannot connect, current state is ${this.state}`,
        { level: "error" }
      );
      logForDiagnosticsNoPII("error", "cli_sse_connect_failed");
      return;
    }
    this.state = "reconnecting";
    const connectStartTime = Date.now();
    const sseUrl = new URL(this.url.href);
    if (this.lastSequenceNum > 0) {
      sseUrl.searchParams.set("from_sequence_num", String(this.lastSequenceNum));
    }
    const authHeaders = this.getAuthHeaders();
    const headers = {
      ...this.headers,
      ...authHeaders,
      Accept: "text/event-stream",
      "anthropic-version": "2023-06-01",
      "User-Agent": getClaudeCodeUserAgent()
    };
    if (authHeaders["Cookie"]) {
      delete headers["Authorization"];
    }
    if (this.lastSequenceNum > 0) {
      headers["Last-Event-ID"] = String(this.lastSequenceNum);
    }
    logForDebugging(`SSETransport: Opening ${sseUrl.href}`);
    logForDiagnosticsNoPII("info", "cli_sse_connect_opening");
    this.abortController = new AbortController();
    try {
      const response = await fetch(sseUrl.href, {
        headers,
        signal: this.abortController.signal
      });
      if (!response.ok) {
        const isPermanent = PERMANENT_HTTP_CODES.has(response.status);
        logForDebugging(
          `SSETransport: HTTP ${response.status}${isPermanent ? " (permanent)" : ""}`,
          { level: "error" }
        );
        logForDiagnosticsNoPII("error", "cli_sse_connect_http_error", {
          status: response.status
        });
        if (isPermanent) {
          this.state = "closed";
          this.onCloseCallback?.(response.status);
          return;
        }
        this.handleConnectionError();
        return;
      }
      if (!response.body) {
        logForDebugging("SSETransport: No response body");
        this.handleConnectionError();
        return;
      }
      const connectDuration = Date.now() - connectStartTime;
      logForDebugging("SSETransport: Connected");
      logForDiagnosticsNoPII("info", "cli_sse_connect_connected", {
        duration_ms: connectDuration
      });
      this.state = "connected";
      this.reconnectAttempts = 0;
      this.reconnectStartTime = null;
      this.resetLivenessTimer();
      await this.readStream(response.body);
    } catch (error) {
      if (this.abortController?.signal.aborted) {
        return;
      }
      logForDebugging(
        `SSETransport: Connection error: ${errorMessage(error)}`,
        { level: "error" }
      );
      logForDiagnosticsNoPII("error", "cli_sse_connect_error");
      this.handleConnectionError();
    }
  }
  /**
   * Read and process the SSE stream body.
   */
  // eslint-disable-next-line eslint-plugin-n/no-unsupported-features/node-builtins
  async readStream(body) {
    const reader = body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, STREAM_DECODE_OPTS);
        const { frames, remaining } = parseSSEFrames(buffer);
        buffer = remaining;
        for (const frame of frames) {
          this.resetLivenessTimer();
          if (frame.id) {
            const seqNum = parseInt(frame.id, 10);
            if (!isNaN(seqNum)) {
              if (this.seenSequenceNums.has(seqNum)) {
                logForDebugging(
                  `SSETransport: DUPLICATE frame seq=${seqNum} (lastSequenceNum=${this.lastSequenceNum}, seenCount=${this.seenSequenceNums.size})`,
                  { level: "warn" }
                );
                logForDiagnosticsNoPII("warn", "cli_sse_duplicate_sequence");
              } else {
                this.seenSequenceNums.add(seqNum);
                if (this.seenSequenceNums.size > 1e3) {
                  const threshold = this.lastSequenceNum - 200;
                  for (const s of this.seenSequenceNums) {
                    if (s < threshold) {
                      this.seenSequenceNums.delete(s);
                    }
                  }
                }
              }
              if (seqNum > this.lastSequenceNum) {
                this.lastSequenceNum = seqNum;
              }
            }
          }
          if (frame.event && frame.data) {
            this.handleSSEFrame(frame.event, frame.data);
          } else if (frame.data) {
            logForDebugging(
              "SSETransport: Frame has data: but no event: field \u2014 dropped",
              { level: "warn" }
            );
            logForDiagnosticsNoPII("warn", "cli_sse_frame_missing_event_field");
          }
        }
      }
    } catch (error) {
      if (this.abortController?.signal.aborted) return;
      logForDebugging(
        `SSETransport: Stream read error: ${errorMessage(error)}`,
        { level: "error" }
      );
      logForDiagnosticsNoPII("error", "cli_sse_stream_read_error");
    } finally {
      reader.releaseLock();
    }
    if (this.state !== "closing" && this.state !== "closed") {
      logForDebugging("SSETransport: Stream ended, reconnecting");
      this.handleConnectionError();
    }
  }
  /**
   * Handle a single SSE frame. The event: field names the variant; data:
   * carries the inner proto JSON directly (no envelope).
   *
   * Worker subscribers only receive client_event frames (see notifier.go) —
   * any other event type indicates a server-side change that CC doesn't yet
   * understand. Log a diagnostic so we notice in telemetry.
   */
  handleSSEFrame(eventType, data) {
    if (eventType !== "client_event") {
      logForDebugging(
        `SSETransport: Unexpected SSE event type '${eventType}' on worker stream`,
        { level: "warn" }
      );
      logForDiagnosticsNoPII("warn", "cli_sse_unexpected_event_type", {
        event_type: eventType
      });
      return;
    }
    let ev;
    try {
      ev = jsonParse(data);
    } catch (error) {
      logForDebugging(
        `SSETransport: Failed to parse client_event data: ${errorMessage(error)}`,
        { level: "error" }
      );
      return;
    }
    const payload = ev.payload;
    if (payload && typeof payload === "object" && "type" in payload) {
      const sessionLabel = this.sessionId ? ` session=${this.sessionId}` : "";
      logForDebugging(
        `SSETransport: Event seq=${ev.sequence_num} event_id=${ev.event_id} event_type=${ev.event_type} payload_type=${String(payload.type)}${sessionLabel}`
      );
      logForDiagnosticsNoPII("info", "cli_sse_message_received");
      this.onData?.(jsonStringify(payload) + "\n");
    } else {
      logForDebugging(
        `SSETransport: Ignoring client_event with no type in payload: event_id=${ev.event_id}`
      );
    }
    this.onEventCallback?.(ev);
  }
  /**
   * Handle connection errors with exponential backoff and time budget.
   */
  handleConnectionError() {
    this.clearLivenessTimer();
    if (this.state === "closing" || this.state === "closed") return;
    this.abortController?.abort();
    this.abortController = null;
    const now = Date.now();
    if (!this.reconnectStartTime) {
      this.reconnectStartTime = now;
    }
    const elapsed = now - this.reconnectStartTime;
    if (elapsed < RECONNECT_GIVE_UP_MS) {
      if (this.reconnectTimer) {
        clearTimeout(this.reconnectTimer);
        this.reconnectTimer = null;
      }
      if (this.refreshHeaders) {
        const freshHeaders = this.refreshHeaders();
        Object.assign(this.headers, freshHeaders);
        logForDebugging("SSETransport: Refreshed headers for reconnect");
      }
      this.state = "reconnecting";
      this.reconnectAttempts++;
      const baseDelay = Math.min(
        RECONNECT_BASE_DELAY_MS * Math.pow(2, this.reconnectAttempts - 1),
        RECONNECT_MAX_DELAY_MS
      );
      const delay = Math.max(
        0,
        baseDelay + baseDelay * 0.25 * (2 * Math.random() - 1)
      );
      logForDebugging(
        `SSETransport: Reconnecting in ${Math.round(delay)}ms (attempt ${this.reconnectAttempts}, ${Math.round(elapsed / 1e3)}s elapsed)`
      );
      logForDiagnosticsNoPII("error", "cli_sse_reconnect_attempt", {
        reconnectAttempts: this.reconnectAttempts
      });
      this.reconnectTimer = setTimeout(() => {
        this.reconnectTimer = null;
        void this.connect();
      }, delay);
    } else {
      logForDebugging(
        `SSETransport: Reconnection time budget exhausted after ${Math.round(elapsed / 1e3)}s`,
        { level: "error" }
      );
      logForDiagnosticsNoPII("error", "cli_sse_reconnect_exhausted", {
        reconnectAttempts: this.reconnectAttempts,
        elapsedMs: elapsed
      });
      this.state = "closed";
      this.onCloseCallback?.();
    }
  }
  /**
   * Bound timeout callback. Hoisted from an inline closure so that
   * resetLivenessTimer (called per-frame) does not allocate a new closure
   * on every SSE frame.
   */
  onLivenessTimeout = () => {
    this.livenessTimer = null;
    logForDebugging("SSETransport: Liveness timeout, reconnecting", {
      level: "error"
    });
    logForDiagnosticsNoPII("error", "cli_sse_liveness_timeout");
    this.abortController?.abort();
    this.handleConnectionError();
  };
  /**
   * Reset the liveness timer. If no SSE frame arrives within the timeout,
   * treat the connection as dead and reconnect.
   */
  resetLivenessTimer() {
    this.clearLivenessTimer();
    this.livenessTimer = setTimeout(this.onLivenessTimeout, LIVENESS_TIMEOUT_MS);
  }
  clearLivenessTimer() {
    if (this.livenessTimer) {
      clearTimeout(this.livenessTimer);
      this.livenessTimer = null;
    }
  }
  // -----------------------------------------------------------------------
  // Write (HTTP POST) — same pattern as HybridTransport
  // -----------------------------------------------------------------------
  async write(message) {
    const authHeaders = this.getAuthHeaders();
    if (Object.keys(authHeaders).length === 0) {
      logForDebugging("SSETransport: No session token available for POST");
      logForDiagnosticsNoPII("warn", "cli_sse_post_no_token");
      return;
    }
    const headers = {
      ...authHeaders,
      "Content-Type": "application/json",
      "anthropic-version": "2023-06-01",
      "User-Agent": getClaudeCodeUserAgent()
    };
    logForDebugging(
      `SSETransport: POST body keys=${Object.keys(message).join(",")}`
    );
    for (let attempt = 1; attempt <= POST_MAX_RETRIES; attempt++) {
      try {
        const response = await axios_default.post(this.postUrl, message, {
          headers,
          validateStatus: alwaysValidStatus2
        });
        if (response.status === 200 || response.status === 201) {
          logForDebugging(`SSETransport: POST success type=${message.type}`);
          return;
        }
        logForDebugging(
          `SSETransport: POST ${response.status} body=${jsonStringify(response.data).slice(0, 200)}`
        );
        if (response.status >= 400 && response.status < 500 && response.status !== 429) {
          logForDebugging(
            `SSETransport: POST returned ${response.status} (client error), not retrying`
          );
          logForDiagnosticsNoPII("warn", "cli_sse_post_client_error", {
            status: response.status
          });
          return;
        }
        logForDebugging(
          `SSETransport: POST returned ${response.status}, attempt ${attempt}/${POST_MAX_RETRIES}`
        );
        logForDiagnosticsNoPII("warn", "cli_sse_post_retryable_error", {
          status: response.status,
          attempt
        });
      } catch (error) {
        const axiosError = error;
        logForDebugging(
          `SSETransport: POST error: ${axiosError.message}, attempt ${attempt}/${POST_MAX_RETRIES}`
        );
        logForDiagnosticsNoPII("warn", "cli_sse_post_network_error", {
          attempt
        });
      }
      if (attempt === POST_MAX_RETRIES) {
        logForDebugging(
          `SSETransport: POST failed after ${POST_MAX_RETRIES} attempts, continuing`
        );
        logForDiagnosticsNoPII("warn", "cli_sse_post_retries_exhausted");
        return;
      }
      const delayMs = Math.min(
        POST_BASE_DELAY_MS * Math.pow(2, attempt - 1),
        POST_MAX_DELAY_MS
      );
      await sleep(delayMs);
    }
  }
  // -----------------------------------------------------------------------
  // Transport interface
  // -----------------------------------------------------------------------
  isConnectedStatus() {
    return this.state === "connected";
  }
  isClosedStatus() {
    return this.state === "closed";
  }
  setOnData(callback) {
    this.onData = callback;
  }
  setOnClose(callback) {
    this.onCloseCallback = callback;
  }
  setOnEvent(callback) {
    this.onEventCallback = callback;
  }
  close() {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    this.clearLivenessTimer();
    this.state = "closing";
    this.abortController?.abort();
    this.abortController = null;
  }
};
function convertSSEUrlToPostUrl(sseUrl) {
  let pathname = sseUrl.pathname;
  if (pathname.endsWith("/stream")) {
    pathname = pathname.slice(0, -"/stream".length);
  }
  return `${sseUrl.protocol}//${sseUrl.host}${pathname}`;
}

export {
  SerialBatchEventUploader,
  CCRInitError,
  CCRClient,
  SSETransport
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NsaS90cmFuc3BvcnRzL2NjckNsaWVudC50cyIsICIuLi8uLi9zcmMvY2xpL3RyYW5zcG9ydHMvU2VyaWFsQmF0Y2hFdmVudFVwbG9hZGVyLnRzIiwgIi4uLy4uL3NyYy9jbGkvdHJhbnNwb3J0cy9Xb3JrZXJTdGF0ZVVwbG9hZGVyLnRzIiwgIi4uLy4uL3NyYy9jbGkvdHJhbnNwb3J0cy9TU0VUcmFuc3BvcnQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IHJhbmRvbVVVSUQgfSBmcm9tICdjcnlwdG8nXG5pbXBvcnQgdHlwZSB7XG4gIFNES1BhcnRpYWxBc3Npc3RhbnRNZXNzYWdlLFxuICBTdGRvdXRNZXNzYWdlLFxufSBmcm9tICdzcmMvZW50cnlwb2ludHMvc2RrL2NvbnRyb2xUeXBlcy5qcydcbmltcG9ydCB7IGRlY29kZUp3dEV4cGlyeSB9IGZyb20gJy4uLy4uL2JyaWRnZS9qd3RVdGlscy5qcydcbmltcG9ydCB7IGxvZ0ZvckRlYnVnZ2luZyB9IGZyb20gJy4uLy4uL3V0aWxzL2RlYnVnLmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSB9IGZyb20gJy4uLy4uL3V0aWxzL2RpYWdMb2dzLmpzJ1xuaW1wb3J0IHsgZXJyb3JNZXNzYWdlLCBnZXRFcnJub0NvZGUgfSBmcm9tICcuLi8uLi91dGlscy9lcnJvcnMuanMnXG5pbXBvcnQgeyBjcmVhdGVBeGlvc0luc3RhbmNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJveHkuanMnXG5pbXBvcnQge1xuICByZWdpc3RlclNlc3Npb25BY3Rpdml0eUNhbGxiYWNrLFxuICB1bnJlZ2lzdGVyU2Vzc2lvbkFjdGl2aXR5Q2FsbGJhY2ssXG59IGZyb20gJy4uLy4uL3V0aWxzL3Nlc3Npb25BY3Rpdml0eS5qcydcbmltcG9ydCB7XG4gIGdldFNlc3Npb25JbmdyZXNzQXV0aEhlYWRlcnMsXG4gIGdldFNlc3Npb25JbmdyZXNzQXV0aFRva2VuLFxufSBmcm9tICcuLi8uLi91dGlscy9zZXNzaW9uSW5ncmVzc0F1dGguanMnXG5pbXBvcnQgdHlwZSB7XG4gIFJlcXVpcmVzQWN0aW9uRGV0YWlscyxcbiAgU2Vzc2lvblN0YXRlLFxufSBmcm9tICcuLi8uLi91dGlscy9zZXNzaW9uU3RhdGUuanMnXG5pbXBvcnQgeyBzbGVlcCB9IGZyb20gJy4uLy4uL3V0aWxzL3NsZWVwLmpzJ1xuaW1wb3J0IHsgZ2V0Q2xhdWRlQ29kZVVzZXJBZ2VudCB9IGZyb20gJy4uLy4uL3V0aWxzL3VzZXJBZ2VudC5qcydcbmltcG9ydCB7XG4gIFJldHJ5YWJsZUVycm9yLFxuICBTZXJpYWxCYXRjaEV2ZW50VXBsb2FkZXIsXG59IGZyb20gJy4vU2VyaWFsQmF0Y2hFdmVudFVwbG9hZGVyLmpzJ1xuaW1wb3J0IHR5cGUgeyBTU0VUcmFuc3BvcnQsIFN0cmVhbUNsaWVudEV2ZW50IH0gZnJvbSAnLi9TU0VUcmFuc3BvcnQuanMnXG5pbXBvcnQgeyBXb3JrZXJTdGF0ZVVwbG9hZGVyIH0gZnJvbSAnLi9Xb3JrZXJTdGF0ZVVwbG9hZGVyLmpzJ1xuXG4vKiogRGVmYXVsdCBpbnRlcnZhbCBiZXR3ZWVuIGhlYXJ0YmVhdCBldmVudHMgKDIwczsgc2VydmVyIFRUTCBpcyA2MHMpLiAqL1xuY29uc3QgREVGQVVMVF9IRUFSVEJFQVRfSU5URVJWQUxfTVMgPSAyMF8wMDBcblxuLyoqXG4gKiBzdHJlYW1fZXZlbnQgbWVzc2FnZXMgYWNjdW11bGF0ZSBpbiBhIGRlbGF5IGJ1ZmZlciBmb3IgdXAgdG8gdGhpcyBtYW55IG1zXG4gKiBiZWZvcmUgZW5xdWV1ZS4gTWlycm9ycyBIeWJyaWRUcmFuc3BvcnQncyBiYXRjaGluZyB3aW5kb3cuIHRleHRfZGVsdGFcbiAqIGV2ZW50cyBmb3IgdGhlIHNhbWUgY29udGVudCBibG9jayBhY2N1bXVsYXRlIGludG8gYSBzaW5nbGUgZnVsbC1zby1mYXJcbiAqIHNuYXBzaG90IHBlciBmbHVzaCBcdTIwMTQgZWFjaCBlbWl0dGVkIGV2ZW50IGlzIHNlbGYtY29udGFpbmVkIHNvIGEgY2xpZW50XG4gKiBjb25uZWN0aW5nIG1pZC1zdHJlYW0gc2VlcyBjb21wbGV0ZSB0ZXh0LCBub3QgYSBmcmFnbWVudC5cbiAqL1xuY29uc3QgU1RSRUFNX0VWRU5UX0ZMVVNIX0lOVEVSVkFMX01TID0gMTAwXG5cbi8qKiBIb2lzdGVkIGF4aW9zIHZhbGlkYXRlU3RhdHVzIGNhbGxiYWNrIHRvIGF2b2lkIHBlci1yZXF1ZXN0IGNsb3N1cmUgYWxsb2NhdGlvbi4gKi9cbmZ1bmN0aW9uIGFsd2F5c1ZhbGlkU3RhdHVzKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gdHJ1ZVxufVxuXG5leHBvcnQgdHlwZSBDQ1JJbml0RmFpbFJlYXNvbiA9XG4gIHwgJ25vX2F1dGhfaGVhZGVycydcbiAgfCAnbWlzc2luZ19lcG9jaCdcbiAgfCAnd29ya2VyX3JlZ2lzdGVyX2ZhaWxlZCdcblxuLyoqIFRocm93biBieSBpbml0aWFsaXplKCk7IGNhcnJpZXMgYSB0eXBlZCByZWFzb24gZm9yIHRoZSBkaWFnIGNsYXNzaWZpZXIuICovXG5leHBvcnQgY2xhc3MgQ0NSSW5pdEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihyZWFkb25seSByZWFzb246IENDUkluaXRGYWlsUmVhc29uKSB7XG4gICAgc3VwZXIoYENDUkNsaWVudCBpbml0IGZhaWxlZDogJHtyZWFzb259YClcbiAgfVxufVxuXG4vKipcbiAqIENvbnNlY3V0aXZlIDQwMS80MDMgd2l0aCBhIFZBTElELUxPT0tJTkcgdG9rZW4gYmVmb3JlIGdpdmluZyB1cC4gQW5cbiAqIGV4cGlyZWQgSldUIHNob3J0LWNpcmN1aXRzIHRoaXMgKGV4aXRzIGltbWVkaWF0ZWx5IFx1MjAxNCBkZXRlcm1pbmlzdGljLFxuICogcmV0cnkgaXMgZnV0aWxlKS4gVGhpcyB0aHJlc2hvbGQgaXMgZm9yIHRoZSB1bmNlcnRhaW4gY2FzZTogdG9rZW4nc1xuICogZXhwIGlzIGluIHRoZSBmdXR1cmUgYnV0IHNlcnZlciBzYXlzIDQwMSAodXNlcmF1dGggZG93biwgS01TIGhpY2N1cCxcbiAqIGNsb2NrIHNrZXcpLiAxMCBcdTAwRDcgMjBzIGhlYXJ0YmVhdCBcdTIyNDggMjAwcyB0byByaWRlIGl0IG91dC5cbiAqL1xuY29uc3QgTUFYX0NPTlNFQ1VUSVZFX0FVVEhfRkFJTFVSRVMgPSAxMFxuXG50eXBlIEV2ZW50UGF5bG9hZCA9IHtcbiAgdXVpZDogc3RyaW5nXG4gIHR5cGU6IHN0cmluZ1xuICBba2V5OiBzdHJpbmddOiB1bmtub3duXG59XG5cbnR5cGUgQ2xpZW50RXZlbnQgPSB7XG4gIHBheWxvYWQ6IEV2ZW50UGF5bG9hZFxuICBlcGhlbWVyYWw/OiBib29sZWFuXG59XG5cbi8qKlxuICogU3RydWN0dXJhbCBzdWJzZXQgb2YgYSBzdHJlYW1fZXZlbnQgY2FycnlpbmcgYSB0ZXh0X2RlbHRhLiBOb3QgYSBuYXJyb3dpbmdcbiAqIG9mIFNES1BhcnRpYWxBc3Npc3RhbnRNZXNzYWdlIFx1MjAxNCBSYXdNZXNzYWdlU3RyZWFtRXZlbnQncyBkZWx0YSBpcyBhIHVuaW9uIGFuZFxuICogbmFycm93aW5nIHRocm91Z2ggdHdvIGxldmVscyBkZWZlYXRzIHRoZSBkaXNjcmltaW5hbnQuXG4gKi9cbnR5cGUgQ29hbGVzY2VkU3RyZWFtRXZlbnQgPSB7XG4gIHR5cGU6ICdzdHJlYW1fZXZlbnQnXG4gIHV1aWQ6IHN0cmluZ1xuICBzZXNzaW9uX2lkOiBzdHJpbmdcbiAgcGFyZW50X3Rvb2xfdXNlX2lkOiBzdHJpbmcgfCBudWxsXG4gIGV2ZW50OiB7XG4gICAgdHlwZTogJ2NvbnRlbnRfYmxvY2tfZGVsdGEnXG4gICAgaW5kZXg6IG51bWJlclxuICAgIGRlbHRhOiB7IHR5cGU6ICd0ZXh0X2RlbHRhJzsgdGV4dDogc3RyaW5nIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY3VtdWxhdG9yIHN0YXRlIGZvciB0ZXh0X2RlbHRhIGNvYWxlc2NpbmcuIEtleWVkIGJ5IEFQSSBtZXNzYWdlIElEIHNvXG4gKiBsaWZldGltZSBpcyB0aWVkIHRvIHRoZSBhc3Npc3RhbnQgbWVzc2FnZSBcdTIwMTQgY2xlYXJlZCB3aGVuIHRoZSBjb21wbGV0ZVxuICogU0RLQXNzaXN0YW50TWVzc2FnZSBhcnJpdmVzICh3cml0ZUV2ZW50KSwgd2hpY2ggaXMgcmVsaWFibGUgZXZlbiB3aGVuXG4gKiBhYm9ydC9lcnJvciBwYXRocyBza2lwIGNvbnRlbnRfYmxvY2tfc3RvcC9tZXNzYWdlX3N0b3AgZGVsaXZlcnkuXG4gKi9cbmV4cG9ydCB0eXBlIFN0cmVhbUFjY3VtdWxhdG9yU3RhdGUgPSB7XG4gIC8qKiBBUEkgbWVzc2FnZSBJRCAobXNnXy4uLikgXHUyMTkyIGJsb2Nrc1tibG9ja0luZGV4XSBcdTIxOTIgY2h1bmsgYXJyYXkuICovXG4gIGJ5TWVzc2FnZTogTWFwPHN0cmluZywgc3RyaW5nW11bXT5cbiAgLyoqXG4gICAqIHtzZXNzaW9uX2lkfTp7cGFyZW50X3Rvb2xfdXNlX2lkfSBcdTIxOTIgYWN0aXZlIG1lc3NhZ2UgSUQuXG4gICAqIGNvbnRlbnRfYmxvY2tfZGVsdGEgZXZlbnRzIGRvbid0IGNhcnJ5IHRoZSBtZXNzYWdlIElEIChvbmx5XG4gICAqIG1lc3NhZ2Vfc3RhcnQgZG9lcyksIHNvIHdlIHRyYWNrIHdoaWNoIG1lc3NhZ2UgaXMgY3VycmVudGx5IHN0cmVhbWluZ1xuICAgKiBmb3IgZWFjaCBzY29wZS4gQXQgbW9zdCBvbmUgbWVzc2FnZSBzdHJlYW1zIHBlciBzY29wZSBhdCBhIHRpbWUuXG4gICAqL1xuICBzY29wZVRvTWVzc2FnZTogTWFwPHN0cmluZywgc3RyaW5nPlxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RyZWFtQWNjdW11bGF0b3IoKTogU3RyZWFtQWNjdW11bGF0b3JTdGF0ZSB7XG4gIHJldHVybiB7IGJ5TWVzc2FnZTogbmV3IE1hcCgpLCBzY29wZVRvTWVzc2FnZTogbmV3IE1hcCgpIH1cbn1cblxuZnVuY3Rpb24gc2NvcGVLZXkobToge1xuICBzZXNzaW9uX2lkOiBzdHJpbmdcbiAgcGFyZW50X3Rvb2xfdXNlX2lkOiBzdHJpbmcgfCBudWxsXG59KTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke20uc2Vzc2lvbl9pZH06JHttLnBhcmVudF90b29sX3VzZV9pZCA/PyAnJ31gXG59XG5cbi8qKlxuICogQWNjdW11bGF0ZSB0ZXh0X2RlbHRhIHN0cmVhbV9ldmVudHMgaW50byBmdWxsLXNvLWZhciBzbmFwc2hvdHMgcGVyIGNvbnRlbnRcbiAqIGJsb2NrLiBFYWNoIGZsdXNoIGVtaXRzIE9ORSBldmVudCBwZXIgdG91Y2hlZCBibG9jayBjb250YWluaW5nIHRoZSBGVUxMXG4gKiBhY2N1bXVsYXRlZCB0ZXh0IGZyb20gdGhlIHN0YXJ0IG9mIHRoZSBibG9jayBcdTIwMTQgYSBjbGllbnQgY29ubmVjdGluZ1xuICogbWlkLXN0cmVhbSByZWNlaXZlcyBhIHNlbGYtY29udGFpbmVkIHNuYXBzaG90LCBub3QgYSBmcmFnbWVudC5cbiAqXG4gKiBOb24tdGV4dC1kZWx0YSBldmVudHMgcGFzcyB0aHJvdWdoIHVuY2hhbmdlZC4gbWVzc2FnZV9zdGFydCByZWNvcmRzIHRoZVxuICogYWN0aXZlIG1lc3NhZ2UgSUQgZm9yIHRoZSBzY29wZTsgY29udGVudF9ibG9ja19kZWx0YSBhcHBlbmRzIGNodW5rcztcbiAqIHRoZSBzbmFwc2hvdCBldmVudCByZXVzZXMgdGhlIGZpcnN0IHRleHRfZGVsdGEgVVVJRCBzZWVuIGZvciB0aGF0IGJsb2NrIGluXG4gKiB0aGlzIGZsdXNoIHNvIHNlcnZlci1zaWRlIGlkZW1wb3RlbmN5IHJlbWFpbnMgc3RhYmxlIGFjcm9zcyByZXRyaWVzLlxuICpcbiAqIENsZWFudXAgaGFwcGVucyBpbiB3cml0ZUV2ZW50IHdoZW4gdGhlIGNvbXBsZXRlIGFzc2lzdGFudCBtZXNzYWdlIGFycml2ZXNcbiAqIChyZWxpYWJsZSksIG5vdCBoZXJlIG9uIHN0b3AgZXZlbnRzIChhYm9ydC9lcnJvciBwYXRocyBza2lwIHRob3NlKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFjY3VtdWxhdGVTdHJlYW1FdmVudHMoXG4gIGJ1ZmZlcjogU0RLUGFydGlhbEFzc2lzdGFudE1lc3NhZ2VbXSxcbiAgc3RhdGU6IFN0cmVhbUFjY3VtdWxhdG9yU3RhdGUsXG4pOiBFdmVudFBheWxvYWRbXSB7XG4gIGNvbnN0IG91dDogRXZlbnRQYXlsb2FkW10gPSBbXVxuICAvLyBjaHVua3NbXSBcdTIxOTIgc25hcHNob3QgYWxyZWFkeSBpbiBgb3V0YCB0aGlzIGZsdXNoLiBLZXllZCBieSB0aGUgY2h1bmtzXG4gIC8vIGFycmF5IHJlZmVyZW5jZSAoc3RhYmxlIHBlciB7bWVzc2FnZUlkLCBpbmRleH0pIHNvIHN1YnNlcXVlbnQgZGVsdGFzXG4gIC8vIHJld3JpdGUgdGhlIHNhbWUgZW50cnkgaW5zdGVhZCBvZiBlbWl0dGluZyBvbmUgZXZlbnQgcGVyIGRlbHRhLlxuICBjb25zdCB0b3VjaGVkID0gbmV3IE1hcDxzdHJpbmdbXSwgQ29hbGVzY2VkU3RyZWFtRXZlbnQ+KClcbiAgZm9yIChjb25zdCBtc2cgb2YgYnVmZmVyKSB7XG4gICAgc3dpdGNoIChtc2cuZXZlbnQudHlwZSkge1xuICAgICAgY2FzZSAnbWVzc2FnZV9zdGFydCc6IHtcbiAgICAgICAgY29uc3QgaWQgPSBtc2cuZXZlbnQubWVzc2FnZS5pZFxuICAgICAgICBjb25zdCBwcmV2SWQgPSBzdGF0ZS5zY29wZVRvTWVzc2FnZS5nZXQoc2NvcGVLZXkobXNnKSlcbiAgICAgICAgaWYgKHByZXZJZCkgc3RhdGUuYnlNZXNzYWdlLmRlbGV0ZShwcmV2SWQpXG4gICAgICAgIHN0YXRlLnNjb3BlVG9NZXNzYWdlLnNldChzY29wZUtleShtc2cpLCBpZClcbiAgICAgICAgc3RhdGUuYnlNZXNzYWdlLnNldChpZCwgW10pXG4gICAgICAgIG91dC5wdXNoKG1zZylcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2NvbnRlbnRfYmxvY2tfZGVsdGEnOiB7XG4gICAgICAgIGlmIChtc2cuZXZlbnQuZGVsdGEudHlwZSAhPT0gJ3RleHRfZGVsdGEnKSB7XG4gICAgICAgICAgb3V0LnB1c2gobXNnKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWVzc2FnZUlkID0gc3RhdGUuc2NvcGVUb01lc3NhZ2UuZ2V0KHNjb3BlS2V5KG1zZykpXG4gICAgICAgIGNvbnN0IGJsb2NrcyA9IG1lc3NhZ2VJZCA/IHN0YXRlLmJ5TWVzc2FnZS5nZXQobWVzc2FnZUlkKSA6IHVuZGVmaW5lZFxuICAgICAgICBpZiAoIWJsb2Nrcykge1xuICAgICAgICAgIC8vIERlbHRhIHdpdGhvdXQgYSBwcmVjZWRpbmcgbWVzc2FnZV9zdGFydCAocmVjb25uZWN0IG1pZC1zdHJlYW0sXG4gICAgICAgICAgLy8gb3IgbWVzc2FnZV9zdGFydCB3YXMgaW4gYSBwcmlvciBidWZmZXIgdGhhdCBnb3QgZHJvcHBlZCkuIFBhc3NcbiAgICAgICAgICAvLyB0aHJvdWdoIHJhdyBcdTIwMTQgY2FuJ3QgcHJvZHVjZSBhIGZ1bGwtc28tZmFyIHNuYXBzaG90IHdpdGhvdXQgdGhlXG4gICAgICAgICAgLy8gcHJpb3IgY2h1bmtzIGFueXdheS5cbiAgICAgICAgICBvdXQucHVzaChtc2cpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjaHVua3MgPSAoYmxvY2tzW21zZy5ldmVudC5pbmRleF0gPz89IFtdKVxuICAgICAgICBjaHVua3MucHVzaChtc2cuZXZlbnQuZGVsdGEudGV4dClcbiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSB0b3VjaGVkLmdldChjaHVua3MpXG4gICAgICAgIGlmIChleGlzdGluZykge1xuICAgICAgICAgIGV4aXN0aW5nLmV2ZW50LmRlbHRhLnRleHQgPSBjaHVua3Muam9pbignJylcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNuYXBzaG90OiBDb2FsZXNjZWRTdHJlYW1FdmVudCA9IHtcbiAgICAgICAgICB0eXBlOiAnc3RyZWFtX2V2ZW50JyxcbiAgICAgICAgICB1dWlkOiBtc2cudXVpZCxcbiAgICAgICAgICBzZXNzaW9uX2lkOiBtc2cuc2Vzc2lvbl9pZCxcbiAgICAgICAgICBwYXJlbnRfdG9vbF91c2VfaWQ6IG1zZy5wYXJlbnRfdG9vbF91c2VfaWQsXG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdjb250ZW50X2Jsb2NrX2RlbHRhJyxcbiAgICAgICAgICAgIGluZGV4OiBtc2cuZXZlbnQuaW5kZXgsXG4gICAgICAgICAgICBkZWx0YTogeyB0eXBlOiAndGV4dF9kZWx0YScsIHRleHQ6IGNodW5rcy5qb2luKCcnKSB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICAgdG91Y2hlZC5zZXQoY2h1bmtzLCBzbmFwc2hvdClcbiAgICAgICAgb3V0LnB1c2goc25hcHNob3QpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBvdXQucHVzaChtc2cpXG4gICAgfVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuLyoqXG4gKiBDbGVhciBhY2N1bXVsYXRvciBlbnRyaWVzIGZvciBhIGNvbXBsZXRlZCBhc3Npc3RhbnQgbWVzc2FnZS4gQ2FsbGVkIGZyb21cbiAqIHdyaXRlRXZlbnQgd2hlbiB0aGUgU0RLQXNzaXN0YW50TWVzc2FnZSBhcnJpdmVzIFx1MjAxNCB0aGUgcmVsaWFibGUgZW5kLW9mLXN0cmVhbVxuICogc2lnbmFsIHRoYXQgZmlyZXMgZXZlbiB3aGVuIGFib3J0L2ludGVycnVwdC9lcnJvciBza2lwIFNTRSBzdG9wIGV2ZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyU3RyZWFtQWNjdW11bGF0b3JGb3JNZXNzYWdlKFxuICBzdGF0ZTogU3RyZWFtQWNjdW11bGF0b3JTdGF0ZSxcbiAgYXNzaXN0YW50OiB7XG4gICAgc2Vzc2lvbl9pZDogc3RyaW5nXG4gICAgcGFyZW50X3Rvb2xfdXNlX2lkOiBzdHJpbmcgfCBudWxsXG4gICAgbWVzc2FnZTogeyBpZDogc3RyaW5nIH1cbiAgfSxcbik6IHZvaWQge1xuICBzdGF0ZS5ieU1lc3NhZ2UuZGVsZXRlKGFzc2lzdGFudC5tZXNzYWdlLmlkKVxuICBjb25zdCBzY29wZSA9IHNjb3BlS2V5KGFzc2lzdGFudClcbiAgaWYgKHN0YXRlLnNjb3BlVG9NZXNzYWdlLmdldChzY29wZSkgPT09IGFzc2lzdGFudC5tZXNzYWdlLmlkKSB7XG4gICAgc3RhdGUuc2NvcGVUb01lc3NhZ2UuZGVsZXRlKHNjb3BlKVxuICB9XG59XG5cbnR5cGUgUmVxdWVzdFJlc3VsdCA9IHsgb2s6IHRydWUgfSB8IHsgb2s6IGZhbHNlOyByZXRyeUFmdGVyTXM/OiBudW1iZXIgfVxuXG50eXBlIFdvcmtlckV2ZW50ID0ge1xuICBwYXlsb2FkOiBFdmVudFBheWxvYWRcbiAgaXNfY29tcGFjdGlvbj86IGJvb2xlYW5cbiAgYWdlbnRfaWQ/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgSW50ZXJuYWxFdmVudCA9IHtcbiAgZXZlbnRfaWQ6IHN0cmluZ1xuICBldmVudF90eXBlOiBzdHJpbmdcbiAgcGF5bG9hZDogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgZXZlbnRfbWV0YWRhdGE/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IG51bGxcbiAgaXNfY29tcGFjdGlvbjogYm9vbGVhblxuICBjcmVhdGVkX2F0OiBzdHJpbmdcbiAgYWdlbnRfaWQ/OiBzdHJpbmdcbn1cblxudHlwZSBMaXN0SW50ZXJuYWxFdmVudHNSZXNwb25zZSA9IHtcbiAgZGF0YTogSW50ZXJuYWxFdmVudFtdXG4gIG5leHRfY3Vyc29yPzogc3RyaW5nXG59XG5cbnR5cGUgV29ya2VyU3RhdGVSZXNwb25zZSA9IHtcbiAgd29ya2VyPzoge1xuICAgIGV4dGVybmFsX21ldGFkYXRhPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgfVxufVxuXG4vKipcbiAqIE1hbmFnZXMgdGhlIHdvcmtlciBsaWZlY3ljbGUgcHJvdG9jb2wgd2l0aCBDQ1IgdjI6XG4gKiAtIEVwb2NoIG1hbmFnZW1lbnQ6IHJlYWRzIHdvcmtlcl9lcG9jaCBmcm9tIENMQVVERV9DT0RFX1dPUktFUl9FUE9DSCBlbnYgdmFyXG4gKiAtIFJ1bnRpbWUgc3RhdGUgcmVwb3J0aW5nOiBQVVQgL3Nlc3Npb25zL3tpZH0vd29ya2VyXG4gKiAtIEhlYXJ0YmVhdDogUE9TVCAvc2Vzc2lvbnMve2lkfS93b3JrZXIvaGVhcnRiZWF0IGZvciBsaXZlbmVzcyBkZXRlY3Rpb25cbiAqXG4gKiBBbGwgd3JpdGVzIGdvIHRocm91Z2ggdGhpcy5yZXF1ZXN0KCkuXG4gKi9cbmV4cG9ydCBjbGFzcyBDQ1JDbGllbnQge1xuICBwcml2YXRlIHdvcmtlckVwb2NoID0gMFxuICBwcml2YXRlIHJlYWRvbmx5IGhlYXJ0YmVhdEludGVydmFsTXM6IG51bWJlclxuICBwcml2YXRlIHJlYWRvbmx5IGhlYXJ0YmVhdEppdHRlckZyYWN0aW9uOiBudW1iZXJcbiAgcHJpdmF0ZSBoZWFydGJlYXRUaW1lcjogTm9kZUpTLlRpbWVvdXQgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIGhlYXJ0YmVhdEluRmxpZ2h0ID0gZmFsc2VcbiAgcHJpdmF0ZSBjbG9zZWQgPSBmYWxzZVxuICBwcml2YXRlIGNvbnNlY3V0aXZlQXV0aEZhaWx1cmVzID0gMFxuICBwcml2YXRlIGN1cnJlbnRTdGF0ZTogU2Vzc2lvblN0YXRlIHwgbnVsbCA9IG51bGxcbiAgcHJpdmF0ZSByZWFkb25seSBzZXNzaW9uQmFzZVVybDogc3RyaW5nXG4gIHByaXZhdGUgcmVhZG9ubHkgc2Vzc2lvbklkOiBzdHJpbmdcbiAgcHJpdmF0ZSByZWFkb25seSBodHRwID0gY3JlYXRlQXhpb3NJbnN0YW5jZSh7IGtlZXBBbGl2ZTogdHJ1ZSB9KVxuXG4gIC8vIHN0cmVhbV9ldmVudCBkZWxheSBidWZmZXIgXHUyMDE0IGFjY3VtdWxhdGVzIGNvbnRlbnQgZGVsdGFzIGZvciB1cCB0b1xuICAvLyBTVFJFQU1fRVZFTlRfRkxVU0hfSU5URVJWQUxfTVMgYmVmb3JlIGVucXVldWVpbmcgKHJlZHVjZXMgUE9TVCBjb3VudFxuICAvLyBhbmQgZW5hYmxlcyB0ZXh0X2RlbHRhIGNvYWxlc2NpbmcpLiBNaXJyb3JzIEh5YnJpZFRyYW5zcG9ydCdzIHBhdHRlcm4uXG4gIHByaXZhdGUgc3RyZWFtRXZlbnRCdWZmZXI6IFNES1BhcnRpYWxBc3Npc3RhbnRNZXNzYWdlW10gPSBbXVxuICBwcml2YXRlIHN0cmVhbUV2ZW50VGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+IHwgbnVsbCA9IG51bGxcbiAgLy8gRnVsbC1zby1mYXIgdGV4dCBhY2N1bXVsYXRvci4gUGVyc2lzdHMgYWNyb3NzIGZsdXNoZXMgc28gZWFjaCBlbWl0dGVkXG4gIC8vIHRleHRfZGVsdGEgZXZlbnQgY2FycmllcyB0aGUgY29tcGxldGUgdGV4dCBmcm9tIHRoZSBzdGFydCBvZiB0aGUgYmxvY2sgXHUyMDE0XG4gIC8vIG1pZC1zdHJlYW0gcmVjb25uZWN0cyBzZWUgYSBzZWxmLWNvbnRhaW5lZCBzbmFwc2hvdC4gS2V5ZWQgYnkgQVBJIG1lc3NhZ2VcbiAgLy8gSUQ7IGNsZWFyZWQgaW4gd3JpdGVFdmVudCB3aGVuIHRoZSBjb21wbGV0ZSBhc3Npc3RhbnQgbWVzc2FnZSBhcnJpdmVzLlxuICBwcml2YXRlIHN0cmVhbVRleHRBY2N1bXVsYXRvciA9IGNyZWF0ZVN0cmVhbUFjY3VtdWxhdG9yKClcblxuICBwcml2YXRlIHJlYWRvbmx5IHdvcmtlclN0YXRlOiBXb3JrZXJTdGF0ZVVwbG9hZGVyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRVcGxvYWRlcjogU2VyaWFsQmF0Y2hFdmVudFVwbG9hZGVyPENsaWVudEV2ZW50PlxuICBwcml2YXRlIHJlYWRvbmx5IGludGVybmFsRXZlbnRVcGxvYWRlcjogU2VyaWFsQmF0Y2hFdmVudFVwbG9hZGVyPFdvcmtlckV2ZW50PlxuICBwcml2YXRlIHJlYWRvbmx5IGRlbGl2ZXJ5VXBsb2FkZXI6IFNlcmlhbEJhdGNoRXZlbnRVcGxvYWRlcjx7XG4gICAgZXZlbnRJZDogc3RyaW5nXG4gICAgc3RhdHVzOiAncmVjZWl2ZWQnIHwgJ3Byb2Nlc3NpbmcnIHwgJ3Byb2Nlc3NlZCdcbiAgfT5cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHNlcnZlciByZXR1cm5zIDQwOSAoYSBuZXdlciB3b3JrZXIgZXBvY2ggc3VwZXJzZWRlZCBvdXJzKS5cbiAgICogRGVmYXVsdDogcHJvY2Vzcy5leGl0KDEpIFx1MjAxNCBjb3JyZWN0IGZvciBzcGF3bi1tb2RlIGNoaWxkcmVuIHdoZXJlIHRoZVxuICAgKiBwYXJlbnQgYnJpZGdlIHJlLXNwYXducy4gSW4tcHJvY2VzcyBjYWxsZXJzIChyZXBsQnJpZGdlKSBNVVNUIG92ZXJyaWRlXG4gICAqIHRoaXMgdG8gY2xvc2UgZ3JhY2VmdWxseSBpbnN0ZWFkOyBleGl0IHdvdWxkIGtpbGwgdGhlIHVzZXIncyBSRVBMLlxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBvbkVwb2NoTWlzbWF0Y2g6ICgpID0+IG5ldmVyXG5cbiAgLyoqXG4gICAqIEF1dGggaGVhZGVyIHNvdXJjZS4gRGVmYXVsdHMgdG8gdGhlIHByb2Nlc3Mtd2lkZSBzZXNzaW9uLWluZ3Jlc3MgdG9rZW5cbiAgICogKENMQVVERV9DT0RFX1NFU1NJT05fQUNDRVNTX1RPS0VOIGVudiB2YXIpLiBDYWxsZXJzIG1hbmFnaW5nIG11bHRpcGxlXG4gICAqIGNvbmN1cnJlbnQgc2Vzc2lvbnMgd2l0aCBkaXN0aW5jdCBKV1RzIE1VU1QgaW5qZWN0IHRoaXMgXHUyMDE0IHRoZSBlbnYtdmFyXG4gICAqIHBhdGggaXMgYSBwcm9jZXNzIGdsb2JhbCBhbmQgd291bGQgc3RvbXAgYWNyb3NzIHNlc3Npb25zLlxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBnZXRBdXRoSGVhZGVyczogKCkgPT4gUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHRyYW5zcG9ydDogU1NFVHJhbnNwb3J0LFxuICAgIHNlc3Npb25Vcmw6IFVSTCxcbiAgICBvcHRzPzoge1xuICAgICAgb25FcG9jaE1pc21hdGNoPzogKCkgPT4gbmV2ZXJcbiAgICAgIGhlYXJ0YmVhdEludGVydmFsTXM/OiBudW1iZXJcbiAgICAgIGhlYXJ0YmVhdEppdHRlckZyYWN0aW9uPzogbnVtYmVyXG4gICAgICAvKipcbiAgICAgICAqIFBlci1pbnN0YW5jZSBhdXRoIGhlYWRlciBzb3VyY2UuIE9taXQgdG8gcmVhZCB0aGUgcHJvY2Vzcy13aWRlXG4gICAgICAgKiBDTEFVREVfQ09ERV9TRVNTSU9OX0FDQ0VTU19UT0tFTiAoc2luZ2xlLXNlc3Npb24gY2FsbGVycyBcdTIwMTQgUkVQTCxcbiAgICAgICAqIGRhZW1vbikuIFJlcXVpcmVkIGZvciBjb25jdXJyZW50IG11bHRpLXNlc3Npb24gY2FsbGVycy5cbiAgICAgICAqL1xuICAgICAgZ2V0QXV0aEhlYWRlcnM/OiAoKSA9PiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG4gICAgfSxcbiAgKSB7XG4gICAgdGhpcy5vbkVwb2NoTWlzbWF0Y2ggPVxuICAgICAgb3B0cz8ub25FcG9jaE1pc21hdGNoID8/XG4gICAgICAoKCkgPT4ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3VzdG9tLXJ1bGVzL25vLXByb2Nlc3MtZXhpdFxuICAgICAgICBwcm9jZXNzLmV4aXQoMSlcbiAgICAgIH0pXG4gICAgdGhpcy5oZWFydGJlYXRJbnRlcnZhbE1zID1cbiAgICAgIG9wdHM/LmhlYXJ0YmVhdEludGVydmFsTXMgPz8gREVGQVVMVF9IRUFSVEJFQVRfSU5URVJWQUxfTVNcbiAgICB0aGlzLmhlYXJ0YmVhdEppdHRlckZyYWN0aW9uID0gb3B0cz8uaGVhcnRiZWF0Sml0dGVyRnJhY3Rpb24gPz8gMFxuICAgIHRoaXMuZ2V0QXV0aEhlYWRlcnMgPSBvcHRzPy5nZXRBdXRoSGVhZGVycyA/PyBnZXRTZXNzaW9uSW5ncmVzc0F1dGhIZWFkZXJzXG4gICAgLy8gU2Vzc2lvbiBVUkw6IGh0dHBzOi8vaG9zdC92MS9jb2RlL3Nlc3Npb25zL3tpZH1cbiAgICBpZiAoc2Vzc2lvblVybC5wcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBzZXNzaW9uVXJsLnByb3RvY29sICE9PSAnaHR0cHM6Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgQ0NSQ2xpZW50OiBFeHBlY3RlZCBodHRwKHMpIFVSTCwgZ290ICR7c2Vzc2lvblVybC5wcm90b2NvbH1gLFxuICAgICAgKVxuICAgIH1cbiAgICBjb25zdCBwYXRobmFtZSA9IHNlc3Npb25VcmwucGF0aG5hbWUucmVwbGFjZSgvXFwvJC8sICcnKVxuICAgIHRoaXMuc2Vzc2lvbkJhc2VVcmwgPSBgJHtzZXNzaW9uVXJsLnByb3RvY29sfS8vJHtzZXNzaW9uVXJsLmhvc3R9JHtwYXRobmFtZX1gXG4gICAgLy8gRXh0cmFjdCBzZXNzaW9uIElEIGZyb20gdGhlIFVSTCBwYXRoIChsYXN0IHNlZ21lbnQpXG4gICAgdGhpcy5zZXNzaW9uSWQgPSBwYXRobmFtZS5zcGxpdCgnLycpLnBvcCgpIHx8ICcnXG5cbiAgICB0aGlzLndvcmtlclN0YXRlID0gbmV3IFdvcmtlclN0YXRlVXBsb2FkZXIoe1xuICAgICAgc2VuZDogYm9keSA9PlxuICAgICAgICB0aGlzLnJlcXVlc3QoXG4gICAgICAgICAgJ3B1dCcsXG4gICAgICAgICAgJy93b3JrZXInLFxuICAgICAgICAgIHsgd29ya2VyX2Vwb2NoOiB0aGlzLndvcmtlckVwb2NoLCAuLi5ib2R5IH0sXG4gICAgICAgICAgJ1BVVCB3b3JrZXInLFxuICAgICAgICApLnRoZW4ociA9PiByLm9rKSxcbiAgICAgIGJhc2VEZWxheU1zOiA1MDAsXG4gICAgICBtYXhEZWxheU1zOiAzMF8wMDAsXG4gICAgICBqaXR0ZXJNczogNTAwLFxuICAgIH0pXG5cbiAgICB0aGlzLmV2ZW50VXBsb2FkZXIgPSBuZXcgU2VyaWFsQmF0Y2hFdmVudFVwbG9hZGVyPENsaWVudEV2ZW50Pih7XG4gICAgICBtYXhCYXRjaFNpemU6IDEwMCxcbiAgICAgIG1heEJhdGNoQnl0ZXM6IDEwICogMTAyNCAqIDEwMjQsXG4gICAgICAvLyBmbHVzaFN0cmVhbUV2ZW50QnVmZmVyKCkgZW5xdWV1ZXMgYSBmdWxsIDEwMG1zIHdpbmRvdyBvZiBhY2N1bXVsYXRlZFxuICAgICAgLy8gc3RyZWFtX2V2ZW50cyBpbiBvbmUgY2FsbC4gQSBidXJzdCBvZiBtaXhlZCBkZWx0YSB0eXBlcyB0aGF0IGRvbid0XG4gICAgICAvLyBmb2xkIGludG8gYSBzaW5nbGUgc25hcHNob3QgY291bGQgZXhjZWVkIHRoZSBvbGQgY2FwICg1MCkgYW5kIGRlYWRsb2NrXG4gICAgICAvLyBvbiB0aGUgU2VyaWFsQmF0Y2hFdmVudFVwbG9hZGVyIGJhY2twcmVzc3VyZSBjaGVjay4gTWF0Y2hcbiAgICAgIC8vIEh5YnJpZFRyYW5zcG9ydCdzIGJvdW5kIFx1MjAxNCBoaWdoIGVub3VnaCB0byBiZSBtZW1vcnktb25seS5cbiAgICAgIG1heFF1ZXVlU2l6ZTogMTAwXzAwMCxcbiAgICAgIHNlbmQ6IGFzeW5jIGJhdGNoID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KFxuICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAnL3dvcmtlci9ldmVudHMnLFxuICAgICAgICAgIHsgd29ya2VyX2Vwb2NoOiB0aGlzLndvcmtlckVwb2NoLCBldmVudHM6IGJhdGNoIH0sXG4gICAgICAgICAgJ2NsaWVudCBldmVudHMnLFxuICAgICAgICApXG4gICAgICAgIGlmICghcmVzdWx0Lm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFJldHJ5YWJsZUVycm9yKFxuICAgICAgICAgICAgJ2NsaWVudCBldmVudCBQT1NUIGZhaWxlZCcsXG4gICAgICAgICAgICByZXN1bHQucmV0cnlBZnRlck1zLFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJhc2VEZWxheU1zOiA1MDAsXG4gICAgICBtYXhEZWxheU1zOiAzMF8wMDAsXG4gICAgICBqaXR0ZXJNczogNTAwLFxuICAgIH0pXG5cbiAgICB0aGlzLmludGVybmFsRXZlbnRVcGxvYWRlciA9IG5ldyBTZXJpYWxCYXRjaEV2ZW50VXBsb2FkZXI8V29ya2VyRXZlbnQ+KHtcbiAgICAgIG1heEJhdGNoU2l6ZTogMTAwLFxuICAgICAgbWF4QmF0Y2hCeXRlczogMTAgKiAxMDI0ICogMTAyNCxcbiAgICAgIG1heFF1ZXVlU2l6ZTogMjAwLFxuICAgICAgc2VuZDogYXN5bmMgYmF0Y2ggPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoXG4gICAgICAgICAgJ3Bvc3QnLFxuICAgICAgICAgICcvd29ya2VyL2ludGVybmFsLWV2ZW50cycsXG4gICAgICAgICAgeyB3b3JrZXJfZXBvY2g6IHRoaXMud29ya2VyRXBvY2gsIGV2ZW50czogYmF0Y2ggfSxcbiAgICAgICAgICAnaW50ZXJuYWwgZXZlbnRzJyxcbiAgICAgICAgKVxuICAgICAgICBpZiAoIXJlc3VsdC5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBSZXRyeWFibGVFcnJvcihcbiAgICAgICAgICAgICdpbnRlcm5hbCBldmVudCBQT1NUIGZhaWxlZCcsXG4gICAgICAgICAgICByZXN1bHQucmV0cnlBZnRlck1zLFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJhc2VEZWxheU1zOiA1MDAsXG4gICAgICBtYXhEZWxheU1zOiAzMF8wMDAsXG4gICAgICBqaXR0ZXJNczogNTAwLFxuICAgIH0pXG5cbiAgICB0aGlzLmRlbGl2ZXJ5VXBsb2FkZXIgPSBuZXcgU2VyaWFsQmF0Y2hFdmVudFVwbG9hZGVyPHtcbiAgICAgIGV2ZW50SWQ6IHN0cmluZ1xuICAgICAgc3RhdHVzOiAncmVjZWl2ZWQnIHwgJ3Byb2Nlc3NpbmcnIHwgJ3Byb2Nlc3NlZCdcbiAgICB9Pih7XG4gICAgICBtYXhCYXRjaFNpemU6IDY0LFxuICAgICAgbWF4UXVldWVTaXplOiA2NCxcbiAgICAgIHNlbmQ6IGFzeW5jIGJhdGNoID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KFxuICAgICAgICAgICdwb3N0JyxcbiAgICAgICAgICAnL3dvcmtlci9ldmVudHMvZGVsaXZlcnknLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHdvcmtlcl9lcG9jaDogdGhpcy53b3JrZXJFcG9jaCxcbiAgICAgICAgICAgIHVwZGF0ZXM6IGJhdGNoLm1hcChkID0+ICh7XG4gICAgICAgICAgICAgIGV2ZW50X2lkOiBkLmV2ZW50SWQsXG4gICAgICAgICAgICAgIHN0YXR1czogZC5zdGF0dXMsXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnZGVsaXZlcnkgYmF0Y2gnLFxuICAgICAgICApXG4gICAgICAgIGlmICghcmVzdWx0Lm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFJldHJ5YWJsZUVycm9yKCdkZWxpdmVyeSBQT1NUIGZhaWxlZCcsIHJlc3VsdC5yZXRyeUFmdGVyTXMpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBiYXNlRGVsYXlNczogNTAwLFxuICAgICAgbWF4RGVsYXlNczogMzBfMDAwLFxuICAgICAgaml0dGVyTXM6IDUwMCxcbiAgICB9KVxuXG4gICAgLy8gQWNrIGVhY2ggcmVjZWl2ZWQgY2xpZW50X2V2ZW50IHNvIENDUiBjYW4gdHJhY2sgZGVsaXZlcnkgc3RhdHVzLlxuICAgIC8vIFdpcmVkIGhlcmUgKG5vdCBpbiBpbml0aWFsaXplKCkpIHNvIHRoZSBjYWxsYmFjayBpcyByZWdpc3RlcmVkIHRoZVxuICAgIC8vIG1vbWVudCBuZXcgQ0NSQ2xpZW50KCkgcmV0dXJucyBcdTIwMTQgcmVtb3RlSU8gbXVzdCBiZSBmcmVlIHRvIGNhbGxcbiAgICAvLyB0cmFuc3BvcnQuY29ubmVjdCgpIGltbWVkaWF0ZWx5IGFmdGVyIHdpdGhvdXQgcmFjaW5nIHRoZSBmaXJzdFxuICAgIC8vIFNTRSBjYXRjaC11cCBmcmFtZSBhZ2FpbnN0IGFuIHVud2lyZWQgb25FdmVudENhbGxiYWNrLlxuICAgIHRyYW5zcG9ydC5zZXRPbkV2ZW50KChldmVudDogU3RyZWFtQ2xpZW50RXZlbnQpID0+IHtcbiAgICAgIHRoaXMucmVwb3J0RGVsaXZlcnkoZXZlbnQuZXZlbnRfaWQsICdyZWNlaXZlZCcpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBzZXNzaW9uIHdvcmtlcjpcbiAgICogMS4gVGFrZSB3b3JrZXJfZXBvY2ggZnJvbSB0aGUgYXJndW1lbnQsIG9yIGZhbGwgYmFjayB0b1xuICAgKiAgICBDTEFVREVfQ09ERV9XT1JLRVJfRVBPQ0ggKHNldCBieSBlbnYtbWFuYWdlciAvIGJyaWRnZSBzcGF3bmVyKVxuICAgKiAyLiBSZXBvcnQgc3RhdGUgYXMgJ2lkbGUnXG4gICAqIDMuIFN0YXJ0IGhlYXJ0YmVhdCB0aW1lclxuICAgKlxuICAgKiBJbi1wcm9jZXNzIGNhbGxlcnMgKHJlcGxCcmlkZ2UpIHBhc3MgdGhlIGVwb2NoIGRpcmVjdGx5IFx1MjAxNCB0aGV5XG4gICAqIHJlZ2lzdGVyZWQgdGhlIHdvcmtlciB0aGVtc2VsdmVzIGFuZCB0aGVyZSBpcyBubyBwYXJlbnQgcHJvY2Vzc1xuICAgKiBzZXR0aW5nIGVudiB2YXJzLlxuICAgKi9cbiAgYXN5bmMgaW5pdGlhbGl6ZShlcG9jaD86IG51bWJlcik6IFByb21pc2U8UmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBudWxsPiB7XG4gICAgY29uc3Qgc3RhcnRNcyA9IERhdGUubm93KClcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5nZXRBdXRoSGVhZGVycygpKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBDQ1JJbml0RXJyb3IoJ25vX2F1dGhfaGVhZGVycycpXG4gICAgfVxuICAgIGlmIChlcG9jaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCByYXdFcG9jaCA9IHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX1dPUktFUl9FUE9DSFxuICAgICAgZXBvY2ggPSByYXdFcG9jaCA/IHBhcnNlSW50KHJhd0Vwb2NoLCAxMCkgOiBOYU5cbiAgICB9XG4gICAgaWYgKGlzTmFOKGVwb2NoKSkge1xuICAgICAgdGhyb3cgbmV3IENDUkluaXRFcnJvcignbWlzc2luZ19lcG9jaCcpXG4gICAgfVxuICAgIHRoaXMud29ya2VyRXBvY2ggPSBlcG9jaFxuXG4gICAgLy8gQ29uY3VycmVudCB3aXRoIHRoZSBpbml0IFBVVCBcdTIwMTQgbmVpdGhlciBkZXBlbmRzIG9uIHRoZSBvdGhlci5cbiAgICBjb25zdCByZXN0b3JlZFByb21pc2UgPSB0aGlzLmdldFdvcmtlclN0YXRlKClcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdChcbiAgICAgICdwdXQnLFxuICAgICAgJy93b3JrZXInLFxuICAgICAge1xuICAgICAgICB3b3JrZXJfc3RhdHVzOiAnaWRsZScsXG4gICAgICAgIHdvcmtlcl9lcG9jaDogdGhpcy53b3JrZXJFcG9jaCxcbiAgICAgICAgLy8gQ2xlYXIgc3RhbGUgcGVuZGluZ19hY3Rpb24vdGFza19zdW1tYXJ5IGxlZnQgYnkgYSBwcmlvclxuICAgICAgICAvLyB3b3JrZXIgY3Jhc2ggXHUyMDE0IHRoZSBpbi1zZXNzaW9uIGNsZWFycyBkb24ndCBzdXJ2aXZlIHByb2Nlc3MgcmVzdGFydC5cbiAgICAgICAgZXh0ZXJuYWxfbWV0YWRhdGE6IHtcbiAgICAgICAgICBwZW5kaW5nX2FjdGlvbjogbnVsbCxcbiAgICAgICAgICB0YXNrX3N1bW1hcnk6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgJ1BVVCB3b3JrZXIgKGluaXQpJyxcbiAgICApXG4gICAgaWYgKCFyZXN1bHQub2spIHtcbiAgICAgIC8vIDQwOSBcdTIxOTIgb25FcG9jaE1pc21hdGNoIG1heSB0aHJvdywgYnV0IHJlcXVlc3QoKSBjYXRjaGVzIGl0IGFuZCByZXR1cm5zXG4gICAgICAvLyBmYWxzZS4gV2l0aG91dCB0aGlzIGNoZWNrIHdlJ2QgY29udGludWUgdG8gc3RhcnRIZWFydGJlYXQoKSwgbGVha2luZyBhXG4gICAgICAvLyAyMHMgdGltZXIgYWdhaW5zdCBhIGRlYWQgZXBvY2guIFRocm93IHNvIGNvbm5lY3QoKSdzIHJlamVjdGlvbiBoYW5kbGVyXG4gICAgICAvLyBmaXJlcyBpbnN0ZWFkIG9mIHRoZSBzdWNjZXNzIHBhdGguXG4gICAgICB0aHJvdyBuZXcgQ0NSSW5pdEVycm9yKCd3b3JrZXJfcmVnaXN0ZXJfZmFpbGVkJylcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50U3RhdGUgPSAnaWRsZSdcbiAgICB0aGlzLnN0YXJ0SGVhcnRiZWF0KClcblxuICAgIC8vIHNlc3Npb25BY3Rpdml0eSdzIHJlZmNvdW50LWdhdGVkIHRpbWVyIGZpcmVzIHdoaWxlIGFuIEFQSSBjYWxsIG9yIHRvb2xcbiAgICAvLyBpcyBpbi1mbGlnaHQ7IHdpdGhvdXQgYSB3cml0ZSB0aGUgY29udGFpbmVyIGxlYXNlIGNhbiBleHBpcmUgbWlkLXdhaXQuXG4gICAgLy8gdjEgd2lyZXMgdGhpcyBpbiBXZWJTb2NrZXRUcmFuc3BvcnQgcGVyLWNvbm5lY3Rpb24uXG4gICAgcmVnaXN0ZXJTZXNzaW9uQWN0aXZpdHlDYWxsYmFjaygoKSA9PiB7XG4gICAgICB2b2lkIHRoaXMud3JpdGVFdmVudCh7IHR5cGU6ICdrZWVwX2FsaXZlJyB9KVxuICAgIH0pXG5cbiAgICBsb2dGb3JEZWJ1Z2dpbmcoYENDUkNsaWVudDogaW5pdGlhbGl6ZWQsIGVwb2NoPSR7dGhpcy53b3JrZXJFcG9jaH1gKVxuICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2luZm8nLCAnY2xpX3dvcmtlcl9saWZlY3ljbGVfaW5pdGlhbGl6ZWQnLCB7XG4gICAgICBlcG9jaDogdGhpcy53b3JrZXJFcG9jaCxcbiAgICAgIGR1cmF0aW9uX21zOiBEYXRlLm5vdygpIC0gc3RhcnRNcyxcbiAgICB9KVxuXG4gICAgLy8gQXdhaXQgdGhlIGNvbmN1cnJlbnQgR0VUIGFuZCBsb2cgc3RhdGVfcmVzdG9yZWQgaGVyZSwgYWZ0ZXIgdGhlIFBVVFxuICAgIC8vIGhhcyBzdWNjZWVkZWQgXHUyMDE0IGxvZ2dpbmcgaW5zaWRlIGdldFdvcmtlclN0YXRlKCkgcmFjZWQ6IGlmIHRoZSBHRVRcbiAgICAvLyByZXNvbHZlZCBiZWZvcmUgdGhlIFBVVCBmYWlsZWQsIGRpYWdub3N0aWNzIHNob3dlZCBib3RoIGluaXRfZmFpbGVkXG4gICAgLy8gYW5kIHN0YXRlX3Jlc3RvcmVkIGZvciB0aGUgc2FtZSBzZXNzaW9uLlxuICAgIGNvbnN0IHsgbWV0YWRhdGEsIGR1cmF0aW9uTXMgfSA9IGF3YWl0IHJlc3RvcmVkUHJvbWlzZVxuICAgIGlmICghdGhpcy5jbG9zZWQpIHtcbiAgICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2luZm8nLCAnY2xpX3dvcmtlcl9zdGF0ZV9yZXN0b3JlZCcsIHtcbiAgICAgICAgZHVyYXRpb25fbXM6IGR1cmF0aW9uTXMsXG4gICAgICAgIGhhZF9zdGF0ZTogbWV0YWRhdGEgIT09IG51bGwsXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gbWV0YWRhdGFcbiAgfVxuXG4gIC8vIENvbnRyb2xfcmVxdWVzdHMgYXJlIG1hcmtlZCBwcm9jZXNzZWQgYW5kIG5vdCByZS1kZWxpdmVyZWQgb25cbiAgLy8gcmVzdGFydCwgc28gcmVhZCBiYWNrIHdoYXQgdGhlIHByaW9yIHdvcmtlciB3cm90ZS5cbiAgcHJpdmF0ZSBhc3luYyBnZXRXb3JrZXJTdGF0ZSgpOiBQcm9taXNlPHtcbiAgICBtZXRhZGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBudWxsXG4gICAgZHVyYXRpb25NczogbnVtYmVyXG4gIH0+IHtcbiAgICBjb25zdCBzdGFydE1zID0gRGF0ZS5ub3coKVxuICAgIGNvbnN0IGF1dGhIZWFkZXJzID0gdGhpcy5nZXRBdXRoSGVhZGVycygpXG4gICAgaWYgKE9iamVjdC5rZXlzKGF1dGhIZWFkZXJzKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB7IG1ldGFkYXRhOiBudWxsLCBkdXJhdGlvbk1zOiAwIH1cbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuZ2V0V2l0aFJldHJ5PFdvcmtlclN0YXRlUmVzcG9uc2U+KFxuICAgICAgYCR7dGhpcy5zZXNzaW9uQmFzZVVybH0vd29ya2VyYCxcbiAgICAgIGF1dGhIZWFkZXJzLFxuICAgICAgJ3dvcmtlcl9zdGF0ZScsXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBtZXRhZGF0YTogZGF0YT8ud29ya2VyPy5leHRlcm5hbF9tZXRhZGF0YSA/PyBudWxsLFxuICAgICAgZHVyYXRpb25NczogRGF0ZS5ub3coKSAtIHN0YXJ0TXMsXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYW4gYXV0aGVudGljYXRlZCBIVFRQIHJlcXVlc3QgdG8gQ0NSLiBIYW5kbGVzIGF1dGggaGVhZGVycyxcbiAgICogNDA5IGVwb2NoIG1pc21hdGNoLCBhbmQgZXJyb3IgbG9nZ2luZy4gUmV0dXJucyB7IG9rOiB0cnVlIH0gb24gMnh4LlxuICAgKiBPbiA0MjksIHJlYWRzIFJldHJ5LUFmdGVyIChpbnRlZ2VyIHNlY29uZHMpIHNvIHRoZSB1cGxvYWRlciBjYW4gaG9ub3JcbiAgICogdGhlIHNlcnZlcidzIGJhY2tvZmYgaGludCBpbnN0ZWFkIG9mIGJsaW5kbHkgZXhwb25lbnRpYXRpbmcuXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIHJlcXVlc3QoXG4gICAgbWV0aG9kOiAncG9zdCcgfCAncHV0JyxcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgYm9keTogdW5rbm93bixcbiAgICBsYWJlbDogc3RyaW5nLFxuICAgIHsgdGltZW91dCA9IDEwXzAwMCB9OiB7IHRpbWVvdXQ/OiBudW1iZXIgfSA9IHt9LFxuICApOiBQcm9taXNlPFJlcXVlc3RSZXN1bHQ+IHtcbiAgICBjb25zdCBhdXRoSGVhZGVycyA9IHRoaXMuZ2V0QXV0aEhlYWRlcnMoKVxuICAgIGlmIChPYmplY3Qua2V5cyhhdXRoSGVhZGVycykubGVuZ3RoID09PSAwKSByZXR1cm4geyBvazogZmFsc2UgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwW21ldGhvZF0oXG4gICAgICAgIGAke3RoaXMuc2Vzc2lvbkJhc2VVcmx9JHtwYXRofWAsXG4gICAgICAgIGJvZHksXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAuLi5hdXRoSGVhZGVycyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnYW50aHJvcGljLXZlcnNpb24nOiAnMjAyMy0wNi0wMScsXG4gICAgICAgICAgICAnVXNlci1BZ2VudCc6IGdldENsYXVkZUNvZGVVc2VyQWdlbnQoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZhbGlkYXRlU3RhdHVzOiBhbHdheXNWYWxpZFN0YXR1cyxcbiAgICAgICAgICB0aW1lb3V0LFxuICAgICAgICB9LFxuICAgICAgKVxuXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgdGhpcy5jb25zZWN1dGl2ZUF1dGhGYWlsdXJlcyA9IDBcbiAgICAgICAgcmV0dXJuIHsgb2s6IHRydWUgfVxuICAgICAgfVxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA5KSB7XG4gICAgICAgIHRoaXMuaGFuZGxlRXBvY2hNaXNtYXRjaCgpXG4gICAgICB9XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSA0MDMpIHtcbiAgICAgICAgLy8gQSA0MDEgd2l0aCBhbiBleHBpcmVkIEpXVCBpcyBkZXRlcm1pbmlzdGljIFx1MjAxNCBubyByZXRyeSB3aWxsXG4gICAgICAgIC8vIGV2ZXIgc3VjY2VlZC4gQ2hlY2sgdGhlIHRva2VuJ3Mgb3duIGV4cCBiZWZvcmUgYnVybmluZ1xuICAgICAgICAvLyB3YWxsLWNsb2NrIG9uIHRoZSB0aHJlc2hvbGQgbG9vcC5cbiAgICAgICAgY29uc3QgdG9rID0gZ2V0U2Vzc2lvbkluZ3Jlc3NBdXRoVG9rZW4oKVxuICAgICAgICBjb25zdCBleHAgPSB0b2sgPyBkZWNvZGVKd3RFeHBpcnkodG9rKSA6IG51bGxcbiAgICAgICAgaWYgKGV4cCAhPT0gbnVsbCAmJiBleHAgKiAxMDAwIDwgRGF0ZS5ub3coKSkge1xuICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgIGBDQ1JDbGllbnQ6IHNlc3Npb25fdG9rZW4gZXhwaXJlZCAoZXhwPSR7bmV3IERhdGUoZXhwICogMTAwMCkudG9JU09TdHJpbmcoKX0pIFx1MjAxNCBubyByZWZyZXNoIHdhcyBkZWxpdmVyZWQsIGV4aXRpbmdgLFxuICAgICAgICAgICAgeyBsZXZlbDogJ2Vycm9yJyB9LFxuICAgICAgICAgIClcbiAgICAgICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdlcnJvcicsICdjbGlfd29ya2VyX3Rva2VuX2V4cGlyZWRfbm9fcmVmcmVzaCcpXG4gICAgICAgICAgdGhpcy5vbkVwb2NoTWlzbWF0Y2goKVxuICAgICAgICB9XG4gICAgICAgIC8vIFRva2VuIGxvb2tzIHZhbGlkIGJ1dCBzZXJ2ZXIgc2F5cyA0MDEgXHUyMDE0IHBvc3NpYmxlIHNlcnZlci1zaWRlXG4gICAgICAgIC8vIGJsaXAgKHVzZXJhdXRoIGRvd24sIEtNUyBoaWNjdXApLiBDb3VudCB0b3dhcmQgdGhyZXNob2xkLlxuICAgICAgICB0aGlzLmNvbnNlY3V0aXZlQXV0aEZhaWx1cmVzKytcbiAgICAgICAgaWYgKHRoaXMuY29uc2VjdXRpdmVBdXRoRmFpbHVyZXMgPj0gTUFYX0NPTlNFQ1VUSVZFX0FVVEhfRkFJTFVSRVMpIHtcbiAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICBgQ0NSQ2xpZW50OiAke3RoaXMuY29uc2VjdXRpdmVBdXRoRmFpbHVyZXN9IGNvbnNlY3V0aXZlIGF1dGggZmFpbHVyZXMgd2l0aCBhIHZhbGlkLWxvb2tpbmcgdG9rZW4gXHUyMDE0IHNlcnZlci1zaWRlIGF1dGggdW5yZWNvdmVyYWJsZSwgZXhpdGluZ2AsXG4gICAgICAgICAgICB7IGxldmVsOiAnZXJyb3InIH0sXG4gICAgICAgICAgKVxuICAgICAgICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2Vycm9yJywgJ2NsaV93b3JrZXJfYXV0aF9mYWlsdXJlc19leGhhdXN0ZWQnKVxuICAgICAgICAgIHRoaXMub25FcG9jaE1pc21hdGNoKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbG9nRm9yRGVidWdnaW5nKGBDQ1JDbGllbnQ6ICR7bGFiZWx9IHJldHVybmVkICR7cmVzcG9uc2Uuc3RhdHVzfWAsIHtcbiAgICAgICAgbGV2ZWw6ICd3YXJuJyxcbiAgICAgIH0pXG4gICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCd3YXJuJywgJ2NsaV93b3JrZXJfcmVxdWVzdF9mYWlsZWQnLCB7XG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgcGF0aCxcbiAgICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICB9KVxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDI5KSB7XG4gICAgICAgIGNvbnN0IHJhdyA9IHJlc3BvbnNlLmhlYWRlcnM/LlsncmV0cnktYWZ0ZXInXVxuICAgICAgICBjb25zdCBzZWNvbmRzID0gdHlwZW9mIHJhdyA9PT0gJ3N0cmluZycgPyBwYXJzZUludChyYXcsIDEwKSA6IE5hTlxuICAgICAgICBpZiAoIWlzTmFOKHNlY29uZHMpICYmIHNlY29uZHMgPj0gMCkge1xuICAgICAgICAgIHJldHVybiB7IG9rOiBmYWxzZSwgcmV0cnlBZnRlck1zOiBzZWNvbmRzICogMTAwMCB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7IG9rOiBmYWxzZSB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhgQ0NSQ2xpZW50OiAke2xhYmVsfSBmYWlsZWQ6ICR7ZXJyb3JNZXNzYWdlKGVycm9yKX1gLCB7XG4gICAgICAgIGxldmVsOiAnd2FybicsXG4gICAgICB9KVxuICAgICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnd2FybicsICdjbGlfd29ya2VyX3JlcXVlc3RfZXJyb3InLCB7XG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgcGF0aCxcbiAgICAgICAgZXJyb3JfY29kZTogZ2V0RXJybm9Db2RlKGVycm9yKSxcbiAgICAgIH0pXG4gICAgICByZXR1cm4geyBvazogZmFsc2UgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBSZXBvcnQgd29ya2VyIHN0YXRlIHRvIENDUiB2aWEgUFVUIC9zZXNzaW9ucy97aWR9L3dvcmtlci4gKi9cbiAgcmVwb3J0U3RhdGUoc3RhdGU6IFNlc3Npb25TdGF0ZSwgZGV0YWlscz86IFJlcXVpcmVzQWN0aW9uRGV0YWlscyk6IHZvaWQge1xuICAgIGlmIChzdGF0ZSA9PT0gdGhpcy5jdXJyZW50U3RhdGUgJiYgIWRldGFpbHMpIHJldHVyblxuICAgIHRoaXMuY3VycmVudFN0YXRlID0gc3RhdGVcbiAgICB0aGlzLndvcmtlclN0YXRlLmVucXVldWUoe1xuICAgICAgd29ya2VyX3N0YXR1czogc3RhdGUsXG4gICAgICByZXF1aXJlc19hY3Rpb25fZGV0YWlsczogZGV0YWlsc1xuICAgICAgICA/IHtcbiAgICAgICAgICAgIHRvb2xfbmFtZTogZGV0YWlscy50b29sX25hbWUsXG4gICAgICAgICAgICBhY3Rpb25fZGVzY3JpcHRpb246IGRldGFpbHMuYWN0aW9uX2Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcmVxdWVzdF9pZDogZGV0YWlscy5yZXF1ZXN0X2lkLFxuICAgICAgICAgIH1cbiAgICAgICAgOiBudWxsLFxuICAgIH0pXG4gIH1cblxuICAvKiogUmVwb3J0IGV4dGVybmFsIG1ldGFkYXRhIHRvIENDUiB2aWEgUFVUIC93b3JrZXIuICovXG4gIHJlcG9ydE1ldGFkYXRhKG1ldGFkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IHZvaWQge1xuICAgIHRoaXMud29ya2VyU3RhdGUuZW5xdWV1ZSh7IGV4dGVybmFsX21ldGFkYXRhOiBtZXRhZGF0YSB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBlcG9jaCBtaXNtYXRjaCAoNDA5IENvbmZsaWN0KS4gQSBuZXdlciBDQyBpbnN0YW5jZSBoYXMgcmVwbGFjZWRcbiAgICogdGhpcyBvbmUgXHUyMDE0IGV4aXQgaW1tZWRpYXRlbHkuXG4gICAqL1xuICBwcml2YXRlIGhhbmRsZUVwb2NoTWlzbWF0Y2goKTogbmV2ZXIge1xuICAgIGxvZ0ZvckRlYnVnZ2luZygnQ0NSQ2xpZW50OiBFcG9jaCBtaXNtYXRjaCAoNDA5KSwgc2h1dHRpbmcgZG93bicsIHtcbiAgICAgIGxldmVsOiAnZXJyb3InLFxuICAgIH0pXG4gICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnZXJyb3InLCAnY2xpX3dvcmtlcl9lcG9jaF9taXNtYXRjaCcpXG4gICAgdGhpcy5vbkVwb2NoTWlzbWF0Y2goKVxuICB9XG5cbiAgLyoqIFN0YXJ0IHBlcmlvZGljIGhlYXJ0YmVhdC4gKi9cbiAgcHJpdmF0ZSBzdGFydEhlYXJ0YmVhdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3BIZWFydGJlYXQoKVxuICAgIGNvbnN0IHNjaGVkdWxlID0gKCk6IHZvaWQgPT4ge1xuICAgICAgY29uc3Qgaml0dGVyID1cbiAgICAgICAgdGhpcy5oZWFydGJlYXRJbnRlcnZhbE1zICpcbiAgICAgICAgdGhpcy5oZWFydGJlYXRKaXR0ZXJGcmFjdGlvbiAqXG4gICAgICAgICgyICogTWF0aC5yYW5kb20oKSAtIDEpXG4gICAgICB0aGlzLmhlYXJ0YmVhdFRpbWVyID0gc2V0VGltZW91dCh0aWNrLCB0aGlzLmhlYXJ0YmVhdEludGVydmFsTXMgKyBqaXR0ZXIpXG4gICAgfVxuICAgIGNvbnN0IHRpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgICB2b2lkIHRoaXMuc2VuZEhlYXJ0YmVhdCgpXG4gICAgICAvLyBzdG9wSGVhcnRiZWF0IG51bGxzIHRoZSB0aW1lcjsgY2hlY2sgYWZ0ZXIgdGhlIGZpcmUtYW5kLWZvcmdldCBzZW5kXG4gICAgICAvLyBidXQgYmVmb3JlIHJlc2NoZWR1bGluZyBzbyBjbG9zZSgpIGR1cmluZyBzZW5kSGVhcnRiZWF0IGlzIGhvbm9yZWQuXG4gICAgICBpZiAodGhpcy5oZWFydGJlYXRUaW1lciA9PT0gbnVsbCkgcmV0dXJuXG4gICAgICBzY2hlZHVsZSgpXG4gICAgfVxuICAgIHNjaGVkdWxlKClcbiAgfVxuXG4gIC8qKiBTdG9wIGhlYXJ0YmVhdCB0aW1lci4gKi9cbiAgcHJpdmF0ZSBzdG9wSGVhcnRiZWF0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmhlYXJ0YmVhdFRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5oZWFydGJlYXRUaW1lcilcbiAgICAgIHRoaXMuaGVhcnRiZWF0VGltZXIgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgLyoqIFNlbmQgYSBoZWFydGJlYXQgdmlhIFBPU1QgL3Nlc3Npb25zL3tpZH0vd29ya2VyL2hlYXJ0YmVhdC4gKi9cbiAgcHJpdmF0ZSBhc3luYyBzZW5kSGVhcnRiZWF0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLmhlYXJ0YmVhdEluRmxpZ2h0KSByZXR1cm5cbiAgICB0aGlzLmhlYXJ0YmVhdEluRmxpZ2h0ID0gdHJ1ZVxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3QoXG4gICAgICAgICdwb3N0JyxcbiAgICAgICAgJy93b3JrZXIvaGVhcnRiZWF0JyxcbiAgICAgICAgeyBzZXNzaW9uX2lkOiB0aGlzLnNlc3Npb25JZCwgd29ya2VyX2Vwb2NoOiB0aGlzLndvcmtlckVwb2NoIH0sXG4gICAgICAgICdIZWFydGJlYXQnLFxuICAgICAgICB7IHRpbWVvdXQ6IDVfMDAwIH0sXG4gICAgICApXG4gICAgICBpZiAocmVzdWx0Lm9rKSB7XG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZygnQ0NSQ2xpZW50OiBIZWFydGJlYXQgc2VudCcpXG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuaGVhcnRiZWF0SW5GbGlnaHQgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZSBhIFN0ZG91dE1lc3NhZ2UgYXMgYSBjbGllbnQgZXZlbnQgdmlhIFBPU1QgL3Nlc3Npb25zL3tpZH0vd29ya2VyL2V2ZW50cy5cbiAgICogVGhlc2UgZXZlbnRzIGFyZSB2aXNpYmxlIHRvIGZyb250ZW5kIGNsaWVudHMgdmlhIHRoZSBTU0Ugc3RyZWFtLlxuICAgKiBJbmplY3RzIGEgVVVJRCBpZiBtaXNzaW5nIHRvIGVuc3VyZSBzZXJ2ZXItc2lkZSBpZGVtcG90ZW5jeSBvbiByZXRyeS5cbiAgICpcbiAgICogc3RyZWFtX2V2ZW50IG1lc3NhZ2VzIGFyZSBoZWxkIGluIGEgMTAwbXMgZGVsYXkgYnVmZmVyIGFuZCBhY2N1bXVsYXRlZFxuICAgKiAodGV4dF9kZWx0YXMgZm9yIHRoZSBzYW1lIGNvbnRlbnQgYmxvY2sgZW1pdCBhIGZ1bGwtc28tZmFyIHNuYXBzaG90IHBlclxuICAgKiBmbHVzaCkuIEEgbm9uLXN0cmVhbV9ldmVudCB3cml0ZSBmbHVzaGVzIHRoZSBidWZmZXIgZmlyc3Qgc28gZG93bnN0cmVhbVxuICAgKiBvcmRlcmluZyBpcyBwcmVzZXJ2ZWQuXG4gICAqL1xuICBhc3luYyB3cml0ZUV2ZW50KG1lc3NhZ2U6IFN0ZG91dE1lc3NhZ2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAobWVzc2FnZS50eXBlID09PSAnc3RyZWFtX2V2ZW50Jykge1xuICAgICAgdGhpcy5zdHJlYW1FdmVudEJ1ZmZlci5wdXNoKG1lc3NhZ2UpXG4gICAgICBpZiAoIXRoaXMuc3RyZWFtRXZlbnRUaW1lcikge1xuICAgICAgICB0aGlzLnN0cmVhbUV2ZW50VGltZXIgPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICgpID0+IHZvaWQgdGhpcy5mbHVzaFN0cmVhbUV2ZW50QnVmZmVyKCksXG4gICAgICAgICAgU1RSRUFNX0VWRU5UX0ZMVVNIX0lOVEVSVkFMX01TLFxuICAgICAgICApXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgYXdhaXQgdGhpcy5mbHVzaFN0cmVhbUV2ZW50QnVmZmVyKClcbiAgICBpZiAobWVzc2FnZS50eXBlID09PSAnYXNzaXN0YW50Jykge1xuICAgICAgY2xlYXJTdHJlYW1BY2N1bXVsYXRvckZvck1lc3NhZ2UodGhpcy5zdHJlYW1UZXh0QWNjdW11bGF0b3IsIG1lc3NhZ2UpXG4gICAgfVxuICAgIGF3YWl0IHRoaXMuZXZlbnRVcGxvYWRlci5lbnF1ZXVlKHRoaXMudG9DbGllbnRFdmVudChtZXNzYWdlKSlcbiAgfVxuXG4gIC8qKiBXcmFwIGEgU3Rkb3V0TWVzc2FnZSBhcyBhIENsaWVudEV2ZW50LCBpbmplY3RpbmcgYSBVVUlEIGlmIG1pc3NpbmcuICovXG4gIHByaXZhdGUgdG9DbGllbnRFdmVudChtZXNzYWdlOiBTdGRvdXRNZXNzYWdlKTogQ2xpZW50RXZlbnQge1xuICAgIGNvbnN0IG1zZyA9IG1lc3NhZ2UgYXMgdW5rbm93biBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgIHJldHVybiB7XG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIC4uLm1zZyxcbiAgICAgICAgdXVpZDogdHlwZW9mIG1zZy51dWlkID09PSAnc3RyaW5nJyA/IG1zZy51dWlkIDogcmFuZG9tVVVJRCgpLFxuICAgICAgfSBhcyBFdmVudFBheWxvYWQsXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERyYWluIHRoZSBzdHJlYW1fZXZlbnQgZGVsYXkgYnVmZmVyOiBhY2N1bXVsYXRlIHRleHRfZGVsdGFzIGludG9cbiAgICogZnVsbC1zby1mYXIgc25hcHNob3RzLCBjbGVhciB0aGUgdGltZXIsIGVucXVldWUgdGhlIHJlc3VsdGluZyBldmVudHMuXG4gICAqIENhbGxlZCBmcm9tIHRoZSB0aW1lciwgZnJvbSB3cml0ZUV2ZW50IG9uIGEgbm9uLXN0cmVhbSBtZXNzYWdlLCBhbmQgZnJvbVxuICAgKiBmbHVzaCgpLiBjbG9zZSgpIGRyb3BzIHRoZSBidWZmZXIgXHUyMDE0IGNhbGwgZmx1c2goKSBmaXJzdCBpZiB5b3UgbmVlZFxuICAgKiBkZWxpdmVyeS5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgZmx1c2hTdHJlYW1FdmVudEJ1ZmZlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5zdHJlYW1FdmVudFRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5zdHJlYW1FdmVudFRpbWVyKVxuICAgICAgdGhpcy5zdHJlYW1FdmVudFRpbWVyID0gbnVsbFxuICAgIH1cbiAgICBpZiAodGhpcy5zdHJlYW1FdmVudEJ1ZmZlci5sZW5ndGggPT09IDApIHJldHVyblxuICAgIGNvbnN0IGJ1ZmZlcmVkID0gdGhpcy5zdHJlYW1FdmVudEJ1ZmZlclxuICAgIHRoaXMuc3RyZWFtRXZlbnRCdWZmZXIgPSBbXVxuICAgIGNvbnN0IHBheWxvYWRzID0gYWNjdW11bGF0ZVN0cmVhbUV2ZW50cyhcbiAgICAgIGJ1ZmZlcmVkLFxuICAgICAgdGhpcy5zdHJlYW1UZXh0QWNjdW11bGF0b3IsXG4gICAgKVxuICAgIGF3YWl0IHRoaXMuZXZlbnRVcGxvYWRlci5lbnF1ZXVlKFxuICAgICAgcGF5bG9hZHMubWFwKHBheWxvYWQgPT4gKHsgcGF5bG9hZCwgZXBoZW1lcmFsOiB0cnVlIH0pKSxcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogV3JpdGUgYW4gaW50ZXJuYWwgd29ya2VyIGV2ZW50IHZpYSBQT1NUIC9zZXNzaW9ucy97aWR9L3dvcmtlci9pbnRlcm5hbC1ldmVudHMuXG4gICAqIFRoZXNlIGV2ZW50cyBhcmUgTk9UIHZpc2libGUgdG8gZnJvbnRlbmQgY2xpZW50cyBcdTIwMTQgdGhleSBzdG9yZSB3b3JrZXItaW50ZXJuYWxcbiAgICogc3RhdGUgKHRyYW5zY3JpcHQgbWVzc2FnZXMsIGNvbXBhY3Rpb24gbWFya2VycykgbmVlZGVkIGZvciBzZXNzaW9uIHJlc3VtZS5cbiAgICovXG4gIGFzeW5jIHdyaXRlSW50ZXJuYWxFdmVudChcbiAgICBldmVudFR5cGU6IHN0cmluZyxcbiAgICBwYXlsb2FkOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgICB7XG4gICAgICBpc0NvbXBhY3Rpb24gPSBmYWxzZSxcbiAgICAgIGFnZW50SWQsXG4gICAgfToge1xuICAgICAgaXNDb21wYWN0aW9uPzogYm9vbGVhblxuICAgICAgYWdlbnRJZD86IHN0cmluZ1xuICAgIH0gPSB7fSxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgZXZlbnQ6IFdvcmtlckV2ZW50ID0ge1xuICAgICAgcGF5bG9hZDoge1xuICAgICAgICB0eXBlOiBldmVudFR5cGUsXG4gICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgIHV1aWQ6IHR5cGVvZiBwYXlsb2FkLnV1aWQgPT09ICdzdHJpbmcnID8gcGF5bG9hZC51dWlkIDogcmFuZG9tVVVJRCgpLFxuICAgICAgfSBhcyBFdmVudFBheWxvYWQsXG4gICAgICAuLi4oaXNDb21wYWN0aW9uICYmIHsgaXNfY29tcGFjdGlvbjogdHJ1ZSB9KSxcbiAgICAgIC4uLihhZ2VudElkICYmIHsgYWdlbnRfaWQ6IGFnZW50SWQgfSksXG4gICAgfVxuICAgIGF3YWl0IHRoaXMuaW50ZXJuYWxFdmVudFVwbG9hZGVyLmVucXVldWUoZXZlbnQpXG4gIH1cblxuICAvKipcbiAgICogRmx1c2ggcGVuZGluZyBpbnRlcm5hbCBldmVudHMuIENhbGwgYmV0d2VlbiB0dXJucyBhbmQgb24gc2h1dGRvd25cbiAgICogdG8gZW5zdXJlIHRyYW5zY3JpcHQgZW50cmllcyBhcmUgcGVyc2lzdGVkLlxuICAgKi9cbiAgZmx1c2hJbnRlcm5hbEV2ZW50cygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbEV2ZW50VXBsb2FkZXIuZmx1c2goKVxuICB9XG5cbiAgLyoqXG4gICAqIEZsdXNoIHBlbmRpbmcgY2xpZW50IGV2ZW50cyAod3JpdGVFdmVudCBxdWV1ZSkuIENhbGwgYmVmb3JlIGNsb3NlKClcbiAgICogd2hlbiB0aGUgY2FsbGVyIG5lZWRzIGRlbGl2ZXJ5IGNvbmZpcm1hdGlvbiBcdTIwMTQgY2xvc2UoKSBhYmFuZG9ucyB0aGVcbiAgICogcXVldWUuIFJlc29sdmVzIG9uY2UgdGhlIHVwbG9hZGVyIGRyYWlucyBvciByZWplY3RzOyByZXR1cm5zXG4gICAqIHJlZ2FyZGxlc3Mgb2Ygd2hldGhlciBpbmRpdmlkdWFsIFBPU1RzIHN1Y2NlZWRlZCAoY2hlY2sgc2VydmVyIHN0YXRlXG4gICAqIHNlcGFyYXRlbHkgaWYgdGhhdCBtYXR0ZXJzKS5cbiAgICovXG4gIGFzeW5jIGZsdXNoKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMuZmx1c2hTdHJlYW1FdmVudEJ1ZmZlcigpXG4gICAgcmV0dXJuIHRoaXMuZXZlbnRVcGxvYWRlci5mbHVzaCgpXG4gIH1cblxuICAvKipcbiAgICogUmVhZCBmb3JlZ3JvdW5kIGFnZW50IGludGVybmFsIGV2ZW50cyBmcm9tXG4gICAqIEdFVCAvc2Vzc2lvbnMve2lkfS93b3JrZXIvaW50ZXJuYWwtZXZlbnRzLlxuICAgKiBSZXR1cm5zIHRyYW5zY3JpcHQgZW50cmllcyBmcm9tIHRoZSBsYXN0IGNvbXBhY3Rpb24gYm91bmRhcnksIG9yIG51bGwgb24gZmFpbHVyZS5cbiAgICogVXNlZCBmb3Igc2Vzc2lvbiByZXN1bWUuXG4gICAqL1xuICBhc3luYyByZWFkSW50ZXJuYWxFdmVudHMoKTogUHJvbWlzZTxJbnRlcm5hbEV2ZW50W10gfCBudWxsPiB7XG4gICAgcmV0dXJuIHRoaXMucGFnaW5hdGVkR2V0KCcvd29ya2VyL2ludGVybmFsLWV2ZW50cycsIHt9LCAnaW50ZXJuYWxfZXZlbnRzJylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkIGFsbCBzdWJhZ2VudCBpbnRlcm5hbCBldmVudHMgZnJvbVxuICAgKiBHRVQgL3Nlc3Npb25zL3tpZH0vd29ya2VyL2ludGVybmFsLWV2ZW50cz9zdWJhZ2VudHM9dHJ1ZS5cbiAgICogUmV0dXJucyBhIG1lcmdlZCBzdHJlYW0gYWNyb3NzIGFsbCBub24tZm9yZWdyb3VuZCBhZ2VudHMsIGVhY2ggZnJvbSBpdHNcbiAgICogY29tcGFjdGlvbiBwb2ludC4gVXNlZCBmb3Igc2Vzc2lvbiByZXN1bWUuXG4gICAqL1xuICBhc3luYyByZWFkU3ViYWdlbnRJbnRlcm5hbEV2ZW50cygpOiBQcm9taXNlPEludGVybmFsRXZlbnRbXSB8IG51bGw+IHtcbiAgICByZXR1cm4gdGhpcy5wYWdpbmF0ZWRHZXQoXG4gICAgICAnL3dvcmtlci9pbnRlcm5hbC1ldmVudHMnLFxuICAgICAgeyBzdWJhZ2VudHM6ICd0cnVlJyB9LFxuICAgICAgJ3N1YmFnZW50X2V2ZW50cycsXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIFBhZ2luYXRlZCBHRVQgd2l0aCByZXRyeS4gRmV0Y2hlcyBhbGwgcGFnZXMgZnJvbSBhIGxpc3QgZW5kcG9pbnQsXG4gICAqIHJldHJ5aW5nIGVhY2ggcGFnZSBvbiBmYWlsdXJlIHdpdGggZXhwb25lbnRpYWwgYmFja29mZiArIGppdHRlci5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgcGFnaW5hdGVkR2V0KFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBwYXJhbXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sXG4gICAgY29udGV4dDogc3RyaW5nLFxuICApOiBQcm9taXNlPEludGVybmFsRXZlbnRbXSB8IG51bGw+IHtcbiAgICBjb25zdCBhdXRoSGVhZGVycyA9IHRoaXMuZ2V0QXV0aEhlYWRlcnMoKVxuICAgIGlmIChPYmplY3Qua2V5cyhhdXRoSGVhZGVycykubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbFxuXG4gICAgY29uc3QgYWxsRXZlbnRzOiBJbnRlcm5hbEV2ZW50W10gPSBbXVxuICAgIGxldCBjdXJzb3I6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgZG8ge1xuICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChgJHt0aGlzLnNlc3Npb25CYXNlVXJsfSR7cGF0aH1gKVxuICAgICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMocGFyYW1zKSkge1xuICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLnNldChrLCB2KVxuICAgICAgfVxuICAgICAgaWYgKGN1cnNvcikge1xuICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLnNldCgnY3Vyc29yJywgY3Vyc29yKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYWdlID0gYXdhaXQgdGhpcy5nZXRXaXRoUmV0cnk8TGlzdEludGVybmFsRXZlbnRzUmVzcG9uc2U+KFxuICAgICAgICB1cmwudG9TdHJpbmcoKSxcbiAgICAgICAgYXV0aEhlYWRlcnMsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICApXG4gICAgICBpZiAoIXBhZ2UpIHJldHVybiBudWxsXG5cbiAgICAgIGFsbEV2ZW50cy5wdXNoKC4uLihwYWdlLmRhdGEgPz8gW10pKVxuICAgICAgY3Vyc29yID0gcGFnZS5uZXh0X2N1cnNvclxuICAgIH0gd2hpbGUgKGN1cnNvcilcblxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBDQ1JDbGllbnQ6IFJlYWQgJHthbGxFdmVudHMubGVuZ3RofSBpbnRlcm5hbCBldmVudHMgZnJvbSAke3BhdGh9JHtwYXJhbXMuc3ViYWdlbnRzID8gJyAoc3ViYWdlbnRzKScgOiAnJ31gLFxuICAgIClcbiAgICByZXR1cm4gYWxsRXZlbnRzXG4gIH1cblxuICAvKipcbiAgICogU2luZ2xlIEdFVCByZXF1ZXN0IHdpdGggcmV0cnkuIFJldHVybnMgdGhlIHBhcnNlZCByZXNwb25zZSBib2R5XG4gICAqIG9uIHN1Y2Nlc3MsIG51bGwgaWYgYWxsIHJldHJpZXMgYXJlIGV4aGF1c3RlZC5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgZ2V0V2l0aFJldHJ5PFQ+KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGF1dGhIZWFkZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuICAgIGNvbnRleHQ6IHN0cmluZyxcbiAgKTogUHJvbWlzZTxUIHwgbnVsbD4ge1xuICAgIGZvciAobGV0IGF0dGVtcHQgPSAxOyBhdHRlbXB0IDw9IDEwOyBhdHRlbXB0KyspIHtcbiAgICAgIGxldCByZXNwb25zZVxuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAuZ2V0PFQ+KHVybCwge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIC4uLmF1dGhIZWFkZXJzLFxuICAgICAgICAgICAgJ2FudGhyb3BpYy12ZXJzaW9uJzogJzIwMjMtMDYtMDEnLFxuICAgICAgICAgICAgJ1VzZXItQWdlbnQnOiBnZXRDbGF1ZGVDb2RlVXNlckFnZW50KCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2YWxpZGF0ZVN0YXR1czogYWx3YXlzVmFsaWRTdGF0dXMsXG4gICAgICAgICAgdGltZW91dDogMzBfMDAwLFxuICAgICAgICB9KVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgIGBDQ1JDbGllbnQ6IEdFVCAke3VybH0gZmFpbGVkIChhdHRlbXB0ICR7YXR0ZW1wdH0vMTApOiAke2Vycm9yTWVzc2FnZShlcnJvcil9YCxcbiAgICAgICAgICB7IGxldmVsOiAnd2FybicgfSxcbiAgICAgICAgKVxuICAgICAgICBpZiAoYXR0ZW1wdCA8IDEwKSB7XG4gICAgICAgICAgY29uc3QgZGVsYXkgPVxuICAgICAgICAgICAgTWF0aC5taW4oNTAwICogMiAqKiAoYXR0ZW1wdCAtIDEpLCAzMF8wMDApICsgTWF0aC5yYW5kb20oKSAqIDUwMFxuICAgICAgICAgIGF3YWl0IHNsZWVwKGRlbGF5KVxuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxuICAgICAgfVxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA5KSB7XG4gICAgICAgIHRoaXMuaGFuZGxlRXBvY2hNaXNtYXRjaCgpXG4gICAgICB9XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBDQ1JDbGllbnQ6IEdFVCAke3VybH0gcmV0dXJuZWQgJHtyZXNwb25zZS5zdGF0dXN9IChhdHRlbXB0ICR7YXR0ZW1wdH0vMTApYCxcbiAgICAgICAgeyBsZXZlbDogJ3dhcm4nIH0sXG4gICAgICApXG5cbiAgICAgIGlmIChhdHRlbXB0IDwgMTApIHtcbiAgICAgICAgY29uc3QgZGVsYXkgPVxuICAgICAgICAgIE1hdGgubWluKDUwMCAqIDIgKiogKGF0dGVtcHQgLSAxKSwgMzBfMDAwKSArIE1hdGgucmFuZG9tKCkgKiA1MDBcbiAgICAgICAgYXdhaXQgc2xlZXAoZGVsYXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbG9nRm9yRGVidWdnaW5nKCdDQ1JDbGllbnQ6IEdFVCByZXRyaWVzIGV4aGF1c3RlZCcsIHsgbGV2ZWw6ICdlcnJvcicgfSlcbiAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdlcnJvcicsICdjbGlfd29ya2VyX2dldF9yZXRyaWVzX2V4aGF1c3RlZCcsIHtcbiAgICAgIGNvbnRleHQsXG4gICAgfSlcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLyoqXG4gICAqIFJlcG9ydCBkZWxpdmVyeSBzdGF0dXMgZm9yIGEgY2xpZW50LXRvLXdvcmtlciBldmVudC5cbiAgICogUE9TVCAvdjEvY29kZS9zZXNzaW9ucy97aWR9L3dvcmtlci9ldmVudHMvZGVsaXZlcnkgKGJhdGNoIGVuZHBvaW50KVxuICAgKi9cbiAgcmVwb3J0RGVsaXZlcnkoXG4gICAgZXZlbnRJZDogc3RyaW5nLFxuICAgIHN0YXR1czogJ3JlY2VpdmVkJyB8ICdwcm9jZXNzaW5nJyB8ICdwcm9jZXNzZWQnLFxuICApOiB2b2lkIHtcbiAgICB2b2lkIHRoaXMuZGVsaXZlcnlVcGxvYWRlci5lbnF1ZXVlKHsgZXZlbnRJZCwgc3RhdHVzIH0pXG4gIH1cblxuICAvKiogR2V0IHRoZSBjdXJyZW50IGVwb2NoIChmb3IgZXh0ZXJuYWwgdXNlKS4gKi9cbiAgZ2V0V29ya2VyRXBvY2goKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy53b3JrZXJFcG9jaFxuICB9XG5cbiAgLyoqIEludGVybmFsLWV2ZW50IHF1ZXVlIGRlcHRoIFx1MjAxNCBzaHV0ZG93bi1zbmFwc2hvdCBiYWNrcHJlc3N1cmUgc2lnbmFsLiAqL1xuICBnZXQgaW50ZXJuYWxFdmVudHNQZW5kaW5nKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxFdmVudFVwbG9hZGVyLnBlbmRpbmdDb3VudFxuICB9XG5cbiAgLyoqIENsZWFuIHVwIHVwbG9hZGVycyBhbmQgdGltZXJzLiAqL1xuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlZCA9IHRydWVcbiAgICB0aGlzLnN0b3BIZWFydGJlYXQoKVxuICAgIHVucmVnaXN0ZXJTZXNzaW9uQWN0aXZpdHlDYWxsYmFjaygpXG4gICAgaWYgKHRoaXMuc3RyZWFtRXZlbnRUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RyZWFtRXZlbnRUaW1lcilcbiAgICAgIHRoaXMuc3RyZWFtRXZlbnRUaW1lciA9IG51bGxcbiAgICB9XG4gICAgdGhpcy5zdHJlYW1FdmVudEJ1ZmZlciA9IFtdXG4gICAgdGhpcy5zdHJlYW1UZXh0QWNjdW11bGF0b3IuYnlNZXNzYWdlLmNsZWFyKClcbiAgICB0aGlzLnN0cmVhbVRleHRBY2N1bXVsYXRvci5zY29wZVRvTWVzc2FnZS5jbGVhcigpXG4gICAgdGhpcy53b3JrZXJTdGF0ZS5jbG9zZSgpXG4gICAgdGhpcy5ldmVudFVwbG9hZGVyLmNsb3NlKClcbiAgICB0aGlzLmludGVybmFsRXZlbnRVcGxvYWRlci5jbG9zZSgpXG4gICAgdGhpcy5kZWxpdmVyeVVwbG9hZGVyLmNsb3NlKClcbiAgfVxufVxuIiwgImltcG9ydCB7IGpzb25TdHJpbmdpZnkgfSBmcm9tICcuLi8uLi91dGlscy9zbG93T3BlcmF0aW9ucy5qcydcblxuLyoqXG4gKiBTZXJpYWwgb3JkZXJlZCBldmVudCB1cGxvYWRlciB3aXRoIGJhdGNoaW5nLCByZXRyeSwgYW5kIGJhY2twcmVzc3VyZS5cbiAqXG4gKiAtIGVucXVldWUoKSBhZGRzIGV2ZW50cyB0byBhIHBlbmRpbmcgYnVmZmVyXG4gKiAtIEF0IG1vc3QgMSBQT1NUIGluLWZsaWdodCBhdCBhIHRpbWVcbiAqIC0gRHJhaW5zIHVwIHRvIG1heEJhdGNoU2l6ZSBpdGVtcyBwZXIgUE9TVFxuICogLSBOZXcgZXZlbnRzIGFjY3VtdWxhdGUgd2hpbGUgaW4tZmxpZ2h0XG4gKiAtIE9uIGZhaWx1cmU6IGV4cG9uZW50aWFsIGJhY2tvZmYgKGNsYW1wZWQpLCByZXRyaWVzIGluZGVmaW5pdGVseVxuICogICB1bnRpbCBzdWNjZXNzIG9yIGNsb3NlKCkgXHUyMDE0IHVubGVzcyBtYXhDb25zZWN1dGl2ZUZhaWx1cmVzIGlzIHNldCxcbiAqICAgaW4gd2hpY2ggY2FzZSB0aGUgZmFpbGluZyBiYXRjaCBpcyBkcm9wcGVkIGFuZCBkcmFpbiBhZHZhbmNlc1xuICogLSBmbHVzaCgpIGJsb2NrcyB1bnRpbCBwZW5kaW5nIGlzIGVtcHR5IGFuZCBraWNrcyBkcmFpbiBpZiBuZWVkZWRcbiAqIC0gQmFja3ByZXNzdXJlOiBlbnF1ZXVlKCkgYmxvY2tzIHdoZW4gbWF4UXVldWVTaXplIGlzIHJlYWNoZWRcbiAqL1xuXG4vKipcbiAqIFRocm93IGZyb20gY29uZmlnLnNlbmQoKSB0byBtYWtlIHRoZSB1cGxvYWRlciB3YWl0IGEgc2VydmVyLXN1cHBsaWVkXG4gKiBkdXJhdGlvbiBiZWZvcmUgcmV0cnlpbmcgKGUuZy4gNDI5IHdpdGggUmV0cnktQWZ0ZXIpLiBXaGVuIHJldHJ5QWZ0ZXJNc1xuICogaXMgc2V0LCBpdCBvdmVycmlkZXMgZXhwb25lbnRpYWwgYmFja29mZiBmb3IgdGhhdCBhdHRlbXB0IFx1MjAxNCBjbGFtcGVkIHRvXG4gKiBbYmFzZURlbGF5TXMsIG1heERlbGF5TXNdIGFuZCBqaXR0ZXJlZCBzbyBhIG1pc2JlaGF2aW5nIHNlcnZlciBjYW5cbiAqIG5laXRoZXIgaG90LWxvb3Agbm9yIHN0YWxsIHRoZSBjbGllbnQsIGFuZCBtYW55IHNlc3Npb25zIHNoYXJpbmcgYSByYXRlXG4gKiBsaW1pdCBkb24ndCBhbGwgcG91bmNlIGF0IHRoZSBzYW1lIGluc3RhbnQuIFdpdGhvdXQgcmV0cnlBZnRlck1zLCBiZWhhdmVzXG4gKiBsaWtlIGFueSBvdGhlciB0aHJvd24gZXJyb3IgKGV4cG9uZW50aWFsIGJhY2tvZmYpLlxuICovXG5leHBvcnQgY2xhc3MgUmV0cnlhYmxlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIG1lc3NhZ2U6IHN0cmluZyxcbiAgICByZWFkb25seSByZXRyeUFmdGVyTXM/OiBudW1iZXIsXG4gICkge1xuICAgIHN1cGVyKG1lc3NhZ2UpXG4gIH1cbn1cblxudHlwZSBTZXJpYWxCYXRjaEV2ZW50VXBsb2FkZXJDb25maWc8VD4gPSB7XG4gIC8qKiBNYXggaXRlbXMgcGVyIFBPU1QgKDEgPSBubyBiYXRjaGluZykgKi9cbiAgbWF4QmF0Y2hTaXplOiBudW1iZXJcbiAgLyoqXG4gICAqIE1heCBzZXJpYWxpemVkIGJ5dGVzIHBlciBQT1NULiBGaXJzdCBpdGVtIGFsd2F5cyBnb2VzIGluIHJlZ2FyZGxlc3Mgb2ZcbiAgICogc2l6ZTsgc3Vic2VxdWVudCBpdGVtcyBvbmx5IGlmIGN1bXVsYXRpdmUgSlNPTiBieXRlcyBzdGF5IHVuZGVyIHRoaXMuXG4gICAqIFVuZGVmaW5lZCA9IG5vIGJ5dGUgbGltaXQgKGNvdW50LW9ubHkgYmF0Y2hpbmcpLlxuICAgKi9cbiAgbWF4QmF0Y2hCeXRlcz86IG51bWJlclxuICAvKiogTWF4IHBlbmRpbmcgaXRlbXMgYmVmb3JlIGVucXVldWUoKSBibG9ja3MgKi9cbiAgbWF4UXVldWVTaXplOiBudW1iZXJcbiAgLyoqIFRoZSBhY3R1YWwgSFRUUCBjYWxsIFx1MjAxNCBjYWxsZXIgY29udHJvbHMgcGF5bG9hZCBmb3JtYXQgKi9cbiAgc2VuZDogKGJhdGNoOiBUW10pID0+IFByb21pc2U8dm9pZD5cbiAgLyoqIEJhc2UgZGVsYXkgZm9yIGV4cG9uZW50aWFsIGJhY2tvZmYgKG1zKSAqL1xuICBiYXNlRGVsYXlNczogbnVtYmVyXG4gIC8qKiBNYXggZGVsYXkgY2FwIChtcykgKi9cbiAgbWF4RGVsYXlNczogbnVtYmVyXG4gIC8qKiBSYW5kb20gaml0dGVyIHJhbmdlIGFkZGVkIHRvIHJldHJ5IGRlbGF5IChtcykgKi9cbiAgaml0dGVyTXM6IG51bWJlclxuICAvKipcbiAgICogQWZ0ZXIgdGhpcyBtYW55IGNvbnNlY3V0aXZlIHNlbmQoKSBmYWlsdXJlcywgZHJvcCB0aGUgZmFpbGluZyBiYXRjaFxuICAgKiBhbmQgbW92ZSBvbiB0byB0aGUgbmV4dCBwZW5kaW5nIGl0ZW0gd2l0aCBhIGZyZXNoIGZhaWx1cmUgYnVkZ2V0LlxuICAgKiBVbmRlZmluZWQgPSByZXRyeSBpbmRlZmluaXRlbHkgKGRlZmF1bHQpLlxuICAgKi9cbiAgbWF4Q29uc2VjdXRpdmVGYWlsdXJlcz86IG51bWJlclxuICAvKiogQ2FsbGVkIHdoZW4gYSBiYXRjaCBpcyBkcm9wcGVkIGZvciBoaXR0aW5nIG1heENvbnNlY3V0aXZlRmFpbHVyZXMuICovXG4gIG9uQmF0Y2hEcm9wcGVkPzogKGJhdGNoU2l6ZTogbnVtYmVyLCBmYWlsdXJlczogbnVtYmVyKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBjbGFzcyBTZXJpYWxCYXRjaEV2ZW50VXBsb2FkZXI8VD4ge1xuICBwcml2YXRlIHBlbmRpbmc6IFRbXSA9IFtdXG4gIHByaXZhdGUgcGVuZGluZ0F0Q2xvc2UgPSAwXG4gIHByaXZhdGUgZHJhaW5pbmcgPSBmYWxzZVxuICBwcml2YXRlIGNsb3NlZCA9IGZhbHNlXG4gIHByaXZhdGUgYmFja3ByZXNzdXJlUmVzb2x2ZXJzOiBBcnJheTwoKSA9PiB2b2lkPiA9IFtdXG4gIHByaXZhdGUgc2xlZXBSZXNvbHZlOiAoKCkgPT4gdm9pZCkgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIGZsdXNoUmVzb2x2ZXJzOiBBcnJheTwoKSA9PiB2b2lkPiA9IFtdXG4gIHByaXZhdGUgZHJvcHBlZEJhdGNoZXMgPSAwXG4gIHByaXZhdGUgcmVhZG9ubHkgY29uZmlnOiBTZXJpYWxCYXRjaEV2ZW50VXBsb2FkZXJDb25maWc8VD5cblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IFNlcmlhbEJhdGNoRXZlbnRVcGxvYWRlckNvbmZpZzxUPikge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnXG4gIH1cblxuICAvKipcbiAgICogTW9ub3RvbmljIGNvdW50IG9mIGJhdGNoZXMgZHJvcHBlZCB2aWEgbWF4Q29uc2VjdXRpdmVGYWlsdXJlcy4gQ2FsbGVyc1xuICAgKiBjYW4gc25hcHNob3QgYmVmb3JlIGZsdXNoKCkgYW5kIGNvbXBhcmUgYWZ0ZXIgdG8gZGV0ZWN0IHNpbGVudCBkcm9wc1xuICAgKiAoZmx1c2goKSByZXNvbHZlcyBub3JtYWxseSBldmVuIHdoZW4gYmF0Y2hlcyB3ZXJlIGRyb3BwZWQpLlxuICAgKi9cbiAgZ2V0IGRyb3BwZWRCYXRjaENvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZHJvcHBlZEJhdGNoZXNcbiAgfVxuXG4gIC8qKlxuICAgKiBQZW5kaW5nIHF1ZXVlIGRlcHRoLiBBZnRlciBjbG9zZSgpLCByZXR1cm5zIHRoZSBjb3VudCBhdCBjbG9zZSB0aW1lIFx1MjAxNFxuICAgKiBjbG9zZSgpIGNsZWFycyB0aGUgcXVldWUgYnV0IHNodXRkb3duIGRpYWdub3N0aWNzIG1heSByZWFkIHRoaXMgYWZ0ZXIuXG4gICAqL1xuICBnZXQgcGVuZGluZ0NvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY2xvc2VkID8gdGhpcy5wZW5kaW5nQXRDbG9zZSA6IHRoaXMucGVuZGluZy5sZW5ndGhcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgZXZlbnRzIHRvIHRoZSBwZW5kaW5nIGJ1ZmZlci4gUmV0dXJucyBpbW1lZGlhdGVseSBpZiBzcGFjZSBpc1xuICAgKiBhdmFpbGFibGUuIEJsb2NrcyAoYXdhaXRzKSBpZiB0aGUgYnVmZmVyIGlzIGZ1bGwgXHUyMDE0IGNhbGxlciBwYXVzZXNcbiAgICogdW50aWwgZHJhaW4gZnJlZXMgc3BhY2UuXG4gICAqL1xuICBhc3luYyBlbnF1ZXVlKGV2ZW50czogVCB8IFRbXSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLmNsb3NlZCkgcmV0dXJuXG4gICAgY29uc3QgaXRlbXMgPSBBcnJheS5pc0FycmF5KGV2ZW50cykgPyBldmVudHMgOiBbZXZlbnRzXVxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHJldHVyblxuXG4gICAgLy8gQmFja3ByZXNzdXJlOiB3YWl0IHVudGlsIHRoZXJlJ3Mgc3BhY2VcbiAgICB3aGlsZSAoXG4gICAgICB0aGlzLnBlbmRpbmcubGVuZ3RoICsgaXRlbXMubGVuZ3RoID4gdGhpcy5jb25maWcubWF4UXVldWVTaXplICYmXG4gICAgICAhdGhpcy5jbG9zZWRcbiAgICApIHtcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4ge1xuICAgICAgICB0aGlzLmJhY2twcmVzc3VyZVJlc29sdmVycy5wdXNoKHJlc29sdmUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLmNsb3NlZCkgcmV0dXJuXG4gICAgdGhpcy5wZW5kaW5nLnB1c2goLi4uaXRlbXMpXG4gICAgdm9pZCB0aGlzLmRyYWluKClcbiAgfVxuXG4gIC8qKlxuICAgKiBCbG9jayB1bnRpbCBhbGwgcGVuZGluZyBldmVudHMgaGF2ZSBiZWVuIHNlbnQuXG4gICAqIFVzZWQgYXQgdHVybiBib3VuZGFyaWVzIGFuZCBncmFjZWZ1bCBzaHV0ZG93bi5cbiAgICovXG4gIGZsdXNoKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLnBlbmRpbmcubGVuZ3RoID09PSAwICYmICF0aGlzLmRyYWluaW5nKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG4gICAgdm9pZCB0aGlzLmRyYWluKClcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLmZsdXNoUmVzb2x2ZXJzLnB1c2gocmVzb2x2ZSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIERyb3AgcGVuZGluZyBldmVudHMgYW5kIHN0b3AgcHJvY2Vzc2luZy5cbiAgICogUmVzb2x2ZXMgYW55IGJsb2NrZWQgZW5xdWV1ZSgpIGFuZCBmbHVzaCgpIGNhbGxlcnMuXG4gICAqL1xuICBjbG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbG9zZWQpIHJldHVyblxuICAgIHRoaXMuY2xvc2VkID0gdHJ1ZVxuICAgIHRoaXMucGVuZGluZ0F0Q2xvc2UgPSB0aGlzLnBlbmRpbmcubGVuZ3RoXG4gICAgdGhpcy5wZW5kaW5nID0gW11cbiAgICB0aGlzLnNsZWVwUmVzb2x2ZT8uKClcbiAgICB0aGlzLnNsZWVwUmVzb2x2ZSA9IG51bGxcbiAgICBmb3IgKGNvbnN0IHJlc29sdmUgb2YgdGhpcy5iYWNrcHJlc3N1cmVSZXNvbHZlcnMpIHJlc29sdmUoKVxuICAgIHRoaXMuYmFja3ByZXNzdXJlUmVzb2x2ZXJzID0gW11cbiAgICBmb3IgKGNvbnN0IHJlc29sdmUgb2YgdGhpcy5mbHVzaFJlc29sdmVycykgcmVzb2x2ZSgpXG4gICAgdGhpcy5mbHVzaFJlc29sdmVycyA9IFtdXG4gIH1cblxuICAvKipcbiAgICogRHJhaW4gbG9vcC4gQXQgbW9zdCBvbmUgaW5zdGFuY2UgcnVucyBhdCBhIHRpbWUgKGd1YXJkZWQgYnkgdGhpcy5kcmFpbmluZykuXG4gICAqIFNlbmRzIGJhdGNoZXMgc2VyaWFsbHkuIE9uIGZhaWx1cmUsIGJhY2tzIG9mZiBhbmQgcmV0cmllcyBpbmRlZmluaXRlbHkuXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGRyYWluKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLmRyYWluaW5nIHx8IHRoaXMuY2xvc2VkKSByZXR1cm5cbiAgICB0aGlzLmRyYWluaW5nID0gdHJ1ZVxuICAgIGxldCBmYWlsdXJlcyA9IDBcblxuICAgIHRyeSB7XG4gICAgICB3aGlsZSAodGhpcy5wZW5kaW5nLmxlbmd0aCA+IDAgJiYgIXRoaXMuY2xvc2VkKSB7XG4gICAgICAgIGNvbnN0IGJhdGNoID0gdGhpcy50YWtlQmF0Y2goKVxuICAgICAgICBpZiAoYmF0Y2gubGVuZ3RoID09PSAwKSBjb250aW51ZVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5jb25maWcuc2VuZChiYXRjaClcbiAgICAgICAgICBmYWlsdXJlcyA9IDBcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgZmFpbHVyZXMrK1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLm1heENvbnNlY3V0aXZlRmFpbHVyZXMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgZmFpbHVyZXMgPj0gdGhpcy5jb25maWcubWF4Q29uc2VjdXRpdmVGYWlsdXJlc1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5kcm9wcGVkQmF0Y2hlcysrXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5vbkJhdGNoRHJvcHBlZD8uKGJhdGNoLmxlbmd0aCwgZmFpbHVyZXMpXG4gICAgICAgICAgICBmYWlsdXJlcyA9IDBcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZUJhY2twcmVzc3VyZSgpXG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBSZS1xdWV1ZSB0aGUgZmFpbGVkIGJhdGNoIGF0IHRoZSBmcm9udC4gVXNlIGNvbmNhdCAoc2luZ2xlXG4gICAgICAgICAgLy8gYWxsb2NhdGlvbikgaW5zdGVhZCBvZiB1bnNoaWZ0KC4uLmJhdGNoKSB3aGljaCBzaGlmdHMgZXZlcnlcbiAgICAgICAgICAvLyBwZW5kaW5nIGl0ZW0gYmF0Y2gubGVuZ3RoIHRpbWVzLiBPbmx5IGhpdCBvbiBmYWlsdXJlIHBhdGguXG4gICAgICAgICAgdGhpcy5wZW5kaW5nID0gYmF0Y2guY29uY2F0KHRoaXMucGVuZGluZylcbiAgICAgICAgICBjb25zdCByZXRyeUFmdGVyTXMgPVxuICAgICAgICAgICAgZXJyIGluc3RhbmNlb2YgUmV0cnlhYmxlRXJyb3IgPyBlcnIucmV0cnlBZnRlck1zIDogdW5kZWZpbmVkXG4gICAgICAgICAgYXdhaXQgdGhpcy5zbGVlcCh0aGlzLnJldHJ5RGVsYXkoZmFpbHVyZXMsIHJldHJ5QWZ0ZXJNcykpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbGVhc2UgYmFja3ByZXNzdXJlIHdhaXRlcnMgaWYgc3BhY2Ugb3BlbmVkIHVwXG4gICAgICAgIHRoaXMucmVsZWFzZUJhY2twcmVzc3VyZSgpXG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuZHJhaW5pbmcgPSBmYWxzZVxuICAgICAgLy8gTm90aWZ5IGZsdXNoIHdhaXRlcnMgaWYgcXVldWUgaXMgZW1wdHlcbiAgICAgIGlmICh0aGlzLnBlbmRpbmcubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGZvciAoY29uc3QgcmVzb2x2ZSBvZiB0aGlzLmZsdXNoUmVzb2x2ZXJzKSByZXNvbHZlKClcbiAgICAgICAgdGhpcy5mbHVzaFJlc29sdmVycyA9IFtdXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFB1bGwgdGhlIG5leHQgYmF0Y2ggZnJvbSBwZW5kaW5nLiBSZXNwZWN0cyBib3RoIG1heEJhdGNoU2l6ZSBhbmRcbiAgICogbWF4QmF0Y2hCeXRlcy4gVGhlIGZpcnN0IGl0ZW0gaXMgYWx3YXlzIHRha2VuOyBzdWJzZXF1ZW50IGl0ZW1zIG9ubHlcbiAgICogaWYgYWRkaW5nIHRoZW0ga2VlcHMgdGhlIGN1bXVsYXRpdmUgSlNPTiBzaXplIHVuZGVyIG1heEJhdGNoQnl0ZXMuXG4gICAqXG4gICAqIFVuLXNlcmlhbGl6YWJsZSBpdGVtcyAoQmlnSW50LCBjaXJjdWxhciByZWZzLCB0aHJvd2luZyB0b0pTT04pIGFyZVxuICAgKiBkcm9wcGVkIGluIHBsYWNlIFx1MjAxNCB0aGV5IGNhbiBuZXZlciBiZSBzZW50IGFuZCBsZWF2aW5nIHRoZW0gYXRcbiAgICogcGVuZGluZ1swXSB3b3VsZCBwb2lzb24gdGhlIHF1ZXVlIGFuZCBoYW5nIGZsdXNoKCkgZm9yZXZlci5cbiAgICovXG4gIHByaXZhdGUgdGFrZUJhdGNoKCk6IFRbXSB7XG4gICAgY29uc3QgeyBtYXhCYXRjaFNpemUsIG1heEJhdGNoQnl0ZXMgfSA9IHRoaXMuY29uZmlnXG4gICAgaWYgKG1heEJhdGNoQnl0ZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMucGVuZGluZy5zcGxpY2UoMCwgbWF4QmF0Y2hTaXplKVxuICAgIH1cbiAgICBsZXQgYnl0ZXMgPSAwXG4gICAgbGV0IGNvdW50ID0gMFxuICAgIHdoaWxlIChjb3VudCA8IHRoaXMucGVuZGluZy5sZW5ndGggJiYgY291bnQgPCBtYXhCYXRjaFNpemUpIHtcbiAgICAgIGxldCBpdGVtQnl0ZXM6IG51bWJlclxuICAgICAgdHJ5IHtcbiAgICAgICAgaXRlbUJ5dGVzID0gQnVmZmVyLmJ5dGVMZW5ndGgoanNvblN0cmluZ2lmeSh0aGlzLnBlbmRpbmdbY291bnRdKSlcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICB0aGlzLnBlbmRpbmcuc3BsaWNlKGNvdW50LCAxKVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgaWYgKGNvdW50ID4gMCAmJiBieXRlcyArIGl0ZW1CeXRlcyA+IG1heEJhdGNoQnl0ZXMpIGJyZWFrXG4gICAgICBieXRlcyArPSBpdGVtQnl0ZXNcbiAgICAgIGNvdW50KytcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucGVuZGluZy5zcGxpY2UoMCwgY291bnQpXG4gIH1cblxuICBwcml2YXRlIHJldHJ5RGVsYXkoZmFpbHVyZXM6IG51bWJlciwgcmV0cnlBZnRlck1zPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBqaXR0ZXIgPSBNYXRoLnJhbmRvbSgpICogdGhpcy5jb25maWcuaml0dGVyTXNcbiAgICBpZiAocmV0cnlBZnRlck1zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEppdHRlciBvbiB0b3Agb2YgdGhlIHNlcnZlcidzIGhpbnQgcHJldmVudHMgdGh1bmRlcmluZyBoZXJkIHdoZW5cbiAgICAgIC8vIG1hbnkgc2Vzc2lvbnMgc2hhcmUgYSByYXRlIGxpbWl0IGFuZCBhbGwgcmVjZWl2ZSB0aGUgc2FtZVxuICAgICAgLy8gUmV0cnktQWZ0ZXIuIENsYW1wIGZpcnN0LCB0aGVuIHNwcmVhZCBcdTIwMTQgc2FtZSBzaGFwZSBhcyB0aGVcbiAgICAgIC8vIGV4cG9uZW50aWFsIHBhdGggKGVmZmVjdGl2ZSBjZWlsaW5nIGlzIG1heERlbGF5TXMgKyBqaXR0ZXJNcykuXG4gICAgICBjb25zdCBjbGFtcGVkID0gTWF0aC5tYXgoXG4gICAgICAgIHRoaXMuY29uZmlnLmJhc2VEZWxheU1zLFxuICAgICAgICBNYXRoLm1pbihyZXRyeUFmdGVyTXMsIHRoaXMuY29uZmlnLm1heERlbGF5TXMpLFxuICAgICAgKVxuICAgICAgcmV0dXJuIGNsYW1wZWQgKyBqaXR0ZXJcbiAgICB9XG4gICAgY29uc3QgZXhwb25lbnRpYWwgPSBNYXRoLm1pbihcbiAgICAgIHRoaXMuY29uZmlnLmJhc2VEZWxheU1zICogMiAqKiAoZmFpbHVyZXMgLSAxKSxcbiAgICAgIHRoaXMuY29uZmlnLm1heERlbGF5TXMsXG4gICAgKVxuICAgIHJldHVybiBleHBvbmVudGlhbCArIGppdHRlclxuICB9XG5cbiAgcHJpdmF0ZSByZWxlYXNlQmFja3ByZXNzdXJlKCk6IHZvaWQge1xuICAgIGNvbnN0IHJlc29sdmVycyA9IHRoaXMuYmFja3ByZXNzdXJlUmVzb2x2ZXJzXG4gICAgdGhpcy5iYWNrcHJlc3N1cmVSZXNvbHZlcnMgPSBbXVxuICAgIGZvciAoY29uc3QgcmVzb2x2ZSBvZiByZXNvbHZlcnMpIHJlc29sdmUoKVxuICB9XG5cbiAgcHJpdmF0ZSBzbGVlcChtczogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5zbGVlcFJlc29sdmUgPSByZXNvbHZlXG4gICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAoc2VsZiwgcmVzb2x2ZSkgPT4ge1xuICAgICAgICAgIHNlbGYuc2xlZXBSZXNvbHZlID0gbnVsbFxuICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICB9LFxuICAgICAgICBtcyxcbiAgICAgICAgdGhpcyxcbiAgICAgICAgcmVzb2x2ZSxcbiAgICAgIClcbiAgICB9KVxuICB9XG59XG4iLCAiaW1wb3J0IHsgc2xlZXAgfSBmcm9tICcuLi8uLi91dGlscy9zbGVlcC5qcydcblxuLyoqXG4gKiBDb2FsZXNjaW5nIHVwbG9hZGVyIGZvciBQVVQgL3dvcmtlciAoc2Vzc2lvbiBzdGF0ZSArIG1ldGFkYXRhKS5cbiAqXG4gKiAtIDEgaW4tZmxpZ2h0IFBVVCArIDEgcGVuZGluZyBwYXRjaFxuICogLSBOZXcgY2FsbHMgY29hbGVzY2UgaW50byBwZW5kaW5nIChuZXZlciBncm93cyBiZXlvbmQgMSBzbG90KVxuICogLSBPbiBzdWNjZXNzOiBzZW5kIHBlbmRpbmcgaWYgZXhpc3RzXG4gKiAtIE9uIGZhaWx1cmU6IGV4cG9uZW50aWFsIGJhY2tvZmYgKGNsYW1wZWQpLCByZXRyaWVzIGluZGVmaW5pdGVseVxuICogICB1bnRpbCBzdWNjZXNzIG9yIGNsb3NlKCkuIEFic29yYnMgYW55IHBlbmRpbmcgcGF0Y2hlcyBiZWZvcmUgZWFjaCByZXRyeS5cbiAqIC0gTm8gYmFja3ByZXNzdXJlIG5lZWRlZCBcdTIwMTQgbmF0dXJhbGx5IGJvdW5kZWQgYXQgMiBzbG90c1xuICpcbiAqIENvYWxlc2NpbmcgcnVsZXM6XG4gKiAtIFRvcC1sZXZlbCBrZXlzICh3b3JrZXJfc3RhdHVzLCBleHRlcm5hbF9tZXRhZGF0YSkgXHUyMDE0IGxhc3QgdmFsdWUgd2luc1xuICogLSBJbnNpZGUgZXh0ZXJuYWxfbWV0YWRhdGEgLyBpbnRlcm5hbF9tZXRhZGF0YSBcdTIwMTQgUkZDIDczOTYgbWVyZ2U6XG4gKiAgIGtleXMgYXJlIGFkZGVkL292ZXJ3cml0dGVuLCBudWxsIHZhbHVlcyBwcmVzZXJ2ZWQgKHNlcnZlciBkZWxldGVzKVxuICovXG5cbnR5cGUgV29ya2VyU3RhdGVVcGxvYWRlckNvbmZpZyA9IHtcbiAgc2VuZDogKGJvZHk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA9PiBQcm9taXNlPGJvb2xlYW4+XG4gIC8qKiBCYXNlIGRlbGF5IGZvciBleHBvbmVudGlhbCBiYWNrb2ZmIChtcykgKi9cbiAgYmFzZURlbGF5TXM6IG51bWJlclxuICAvKiogTWF4IGRlbGF5IGNhcCAobXMpICovXG4gIG1heERlbGF5TXM6IG51bWJlclxuICAvKiogUmFuZG9tIGppdHRlciByYW5nZSBhZGRlZCB0byByZXRyeSBkZWxheSAobXMpICovXG4gIGppdHRlck1zOiBudW1iZXJcbn1cblxuZXhwb3J0IGNsYXNzIFdvcmtlclN0YXRlVXBsb2FkZXIge1xuICBwcml2YXRlIGluZmxpZ2h0OiBQcm9taXNlPHZvaWQ+IHwgbnVsbCA9IG51bGxcbiAgcHJpdmF0ZSBwZW5kaW5nOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgY2xvc2VkID0gZmFsc2VcbiAgcHJpdmF0ZSByZWFkb25seSBjb25maWc6IFdvcmtlclN0YXRlVXBsb2FkZXJDb25maWdcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IFdvcmtlclN0YXRlVXBsb2FkZXJDb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZ1xuICB9XG5cbiAgLyoqXG4gICAqIEVucXVldWUgYSBwYXRjaCB0byBQVVQgL3dvcmtlci4gQ29hbGVzY2VzIHdpdGggYW55IGV4aXN0aW5nIHBlbmRpbmdcbiAgICogcGF0Y2guIEZpcmUtYW5kLWZvcmdldCBcdTIwMTQgY2FsbGVycyBkb24ndCBuZWVkIHRvIGF3YWl0LlxuICAgKi9cbiAgZW5xdWV1ZShwYXRjaDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbG9zZWQpIHJldHVyblxuICAgIHRoaXMucGVuZGluZyA9IHRoaXMucGVuZGluZyA/IGNvYWxlc2NlUGF0Y2hlcyh0aGlzLnBlbmRpbmcsIHBhdGNoKSA6IHBhdGNoXG4gICAgdm9pZCB0aGlzLmRyYWluKClcbiAgfVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2VkID0gdHJ1ZVxuICAgIHRoaXMucGVuZGluZyA9IG51bGxcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZHJhaW4oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHRoaXMuaW5mbGlnaHQgfHwgdGhpcy5jbG9zZWQpIHJldHVyblxuICAgIGlmICghdGhpcy5wZW5kaW5nKSByZXR1cm5cblxuICAgIGNvbnN0IHBheWxvYWQgPSB0aGlzLnBlbmRpbmdcbiAgICB0aGlzLnBlbmRpbmcgPSBudWxsXG5cbiAgICB0aGlzLmluZmxpZ2h0ID0gdGhpcy5zZW5kV2l0aFJldHJ5KHBheWxvYWQpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5pbmZsaWdodCA9IG51bGxcbiAgICAgIGlmICh0aGlzLnBlbmRpbmcgJiYgIXRoaXMuY2xvc2VkKSB7XG4gICAgICAgIHZvaWQgdGhpcy5kcmFpbigpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKiBSZXRyaWVzIGluZGVmaW5pdGVseSB3aXRoIGV4cG9uZW50aWFsIGJhY2tvZmYgdW50aWwgc3VjY2VzcyBvciBjbG9zZSgpLiAqL1xuICBwcml2YXRlIGFzeW5jIHNlbmRXaXRoUmV0cnkocGF5bG9hZDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgY3VycmVudCA9IHBheWxvYWRcbiAgICBsZXQgZmFpbHVyZXMgPSAwXG4gICAgd2hpbGUgKCF0aGlzLmNsb3NlZCkge1xuICAgICAgY29uc3Qgb2sgPSBhd2FpdCB0aGlzLmNvbmZpZy5zZW5kKGN1cnJlbnQpXG4gICAgICBpZiAob2spIHJldHVyblxuXG4gICAgICBmYWlsdXJlcysrXG4gICAgICBhd2FpdCBzbGVlcCh0aGlzLnJldHJ5RGVsYXkoZmFpbHVyZXMpKVxuXG4gICAgICAvLyBBYnNvcmIgYW55IHBhdGNoZXMgdGhhdCBhcnJpdmVkIGR1cmluZyB0aGUgcmV0cnlcbiAgICAgIGlmICh0aGlzLnBlbmRpbmcgJiYgIXRoaXMuY2xvc2VkKSB7XG4gICAgICAgIGN1cnJlbnQgPSBjb2FsZXNjZVBhdGNoZXMoY3VycmVudCwgdGhpcy5wZW5kaW5nKVxuICAgICAgICB0aGlzLnBlbmRpbmcgPSBudWxsXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZXRyeURlbGF5KGZhaWx1cmVzOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IGV4cG9uZW50aWFsID0gTWF0aC5taW4oXG4gICAgICB0aGlzLmNvbmZpZy5iYXNlRGVsYXlNcyAqIDIgKiogKGZhaWx1cmVzIC0gMSksXG4gICAgICB0aGlzLmNvbmZpZy5tYXhEZWxheU1zLFxuICAgIClcbiAgICBjb25zdCBqaXR0ZXIgPSBNYXRoLnJhbmRvbSgpICogdGhpcy5jb25maWcuaml0dGVyTXNcbiAgICByZXR1cm4gZXhwb25lbnRpYWwgKyBqaXR0ZXJcbiAgfVxufVxuXG4vKipcbiAqIENvYWxlc2NlIHR3byBwYXRjaGVzIGZvciBQVVQgL3dvcmtlci5cbiAqXG4gKiBUb3AtbGV2ZWwga2V5czogb3ZlcmxheSByZXBsYWNlcyBiYXNlIChsYXN0IHZhbHVlIHdpbnMpLlxuICogTWV0YWRhdGEga2V5cyAoZXh0ZXJuYWxfbWV0YWRhdGEsIGludGVybmFsX21ldGFkYXRhKTogUkZDIDczOTYgbWVyZ2VcbiAqIG9uZSBsZXZlbCBkZWVwIFx1MjAxNCBvdmVybGF5IGtleXMgYXJlIGFkZGVkL292ZXJ3cml0dGVuLCBudWxsIHZhbHVlc1xuICogcHJlc2VydmVkIGZvciBzZXJ2ZXItc2lkZSBkZWxldGUuXG4gKi9cbmZ1bmN0aW9uIGNvYWxlc2NlUGF0Y2hlcyhcbiAgYmFzZTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gIG92ZXJsYXk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4ge1xuICBjb25zdCBtZXJnZWQgPSB7IC4uLmJhc2UgfVxuXG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG92ZXJsYXkpKSB7XG4gICAgaWYgKFxuICAgICAgKGtleSA9PT0gJ2V4dGVybmFsX21ldGFkYXRhJyB8fCBrZXkgPT09ICdpbnRlcm5hbF9tZXRhZGF0YScpICYmXG4gICAgICBtZXJnZWRba2V5XSAmJlxuICAgICAgdHlwZW9mIG1lcmdlZFtrZXldID09PSAnb2JqZWN0JyAmJlxuICAgICAgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgICAgdmFsdWUgIT09IG51bGxcbiAgICApIHtcbiAgICAgIC8vIFJGQyA3Mzk2IG1lcmdlIFx1MjAxNCBvdmVybGF5IGtleXMgd2luLCBudWxscyBwcmVzZXJ2ZWQgZm9yIHNlcnZlclxuICAgICAgbWVyZ2VkW2tleV0gPSB7XG4gICAgICAgIC4uLihtZXJnZWRba2V5XSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiksXG4gICAgICAgIC4uLih2YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiksXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lcmdlZFtrZXldID0gdmFsdWVcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWVyZ2VkXG59XG4iLCAiaW1wb3J0IGF4aW9zLCB7IHR5cGUgQXhpb3NFcnJvciB9IGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHR5cGUgeyBTdGRvdXRNZXNzYWdlIH0gZnJvbSAnc3JjL2VudHJ5cG9pbnRzL3Nkay9jb250cm9sVHlwZXMuanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuLi8uLi91dGlscy9kZWJ1Zy5qcydcbmltcG9ydCB7IGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkgfSBmcm9tICcuLi8uLi91dGlscy9kaWFnTG9ncy5qcydcbmltcG9ydCB7IGVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Vycm9ycy5qcydcbmltcG9ydCB7IGdldFNlc3Npb25JbmdyZXNzQXV0aEhlYWRlcnMgfSBmcm9tICcuLi8uLi91dGlscy9zZXNzaW9uSW5ncmVzc0F1dGguanMnXG5pbXBvcnQgeyBzbGVlcCB9IGZyb20gJy4uLy4uL3V0aWxzL3NsZWVwLmpzJ1xuaW1wb3J0IHsganNvblBhcnNlLCBqc29uU3RyaW5naWZ5IH0gZnJvbSAnLi4vLi4vdXRpbHMvc2xvd09wZXJhdGlvbnMuanMnXG5pbXBvcnQgeyBnZXRDbGF1ZGVDb2RlVXNlckFnZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvdXNlckFnZW50LmpzJ1xuaW1wb3J0IHR5cGUgeyBUcmFuc3BvcnQgfSBmcm9tICcuL1RyYW5zcG9ydC5qcydcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDb25maWd1cmF0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgUkVDT05ORUNUX0JBU0VfREVMQVlfTVMgPSAxMDAwXG5jb25zdCBSRUNPTk5FQ1RfTUFYX0RFTEFZX01TID0gMzBfMDAwXG4vKiogVGltZSBidWRnZXQgZm9yIHJlY29ubmVjdGlvbiBhdHRlbXB0cyBiZWZvcmUgZ2l2aW5nIHVwICgxMCBtaW51dGVzKS4gKi9cbmNvbnN0IFJFQ09OTkVDVF9HSVZFX1VQX01TID0gNjAwXzAwMFxuLyoqIFNlcnZlciBzZW5kcyBrZWVwYWxpdmVzIGV2ZXJ5IDE1czsgdHJlYXQgY29ubmVjdGlvbiBhcyBkZWFkIGFmdGVyIDQ1cyBvZiBzaWxlbmNlLiAqL1xuY29uc3QgTElWRU5FU1NfVElNRU9VVF9NUyA9IDQ1XzAwMFxuXG4vKipcbiAqIEhUVFAgc3RhdHVzIGNvZGVzIHRoYXQgaW5kaWNhdGUgYSBwZXJtYW5lbnQgc2VydmVyLXNpZGUgcmVqZWN0aW9uLlxuICogVGhlIHRyYW5zcG9ydCB0cmFuc2l0aW9ucyB0byAnY2xvc2VkJyBpbW1lZGlhdGVseSB3aXRob3V0IHJldHJ5aW5nLlxuICovXG5jb25zdCBQRVJNQU5FTlRfSFRUUF9DT0RFUyA9IG5ldyBTZXQoWzQwMSwgNDAzLCA0MDRdKVxuXG4vLyBQT1NUIHJldHJ5IGNvbmZpZ3VyYXRpb24gKG1hdGNoZXMgSHlicmlkVHJhbnNwb3J0KVxuY29uc3QgUE9TVF9NQVhfUkVUUklFUyA9IDEwXG5jb25zdCBQT1NUX0JBU0VfREVMQVlfTVMgPSA1MDBcbmNvbnN0IFBPU1RfTUFYX0RFTEFZX01TID0gODAwMFxuXG4vKiogSG9pc3RlZCBUZXh0RGVjb2RlciBvcHRpb25zIHRvIGF2b2lkIHBlci1jaHVuayBhbGxvY2F0aW9uIGluIHJlYWRTdHJlYW0uICovXG5jb25zdCBTVFJFQU1fREVDT0RFX09QVFM6IFRleHREZWNvZGVPcHRpb25zID0geyBzdHJlYW06IHRydWUgfVxuXG4vKiogSG9pc3RlZCBheGlvcyB2YWxpZGF0ZVN0YXR1cyBjYWxsYmFjayB0byBhdm9pZCBwZXItcmVxdWVzdCBjbG9zdXJlIGFsbG9jYXRpb24uICovXG5mdW5jdGlvbiBhbHdheXNWYWxpZFN0YXR1cygpOiBib29sZWFuIHtcbiAgcmV0dXJuIHRydWVcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTU0UgRnJhbWUgUGFyc2VyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudHlwZSBTU0VGcmFtZSA9IHtcbiAgZXZlbnQ/OiBzdHJpbmdcbiAgaWQ/OiBzdHJpbmdcbiAgZGF0YT86IHN0cmluZ1xufVxuXG4vKipcbiAqIEluY3JlbWVudGFsbHkgcGFyc2UgU1NFIGZyYW1lcyBmcm9tIGEgdGV4dCBidWZmZXIuXG4gKiBSZXR1cm5zIHBhcnNlZCBmcmFtZXMgYW5kIHRoZSByZW1haW5pbmcgKGluY29tcGxldGUpIGJ1ZmZlci5cbiAqXG4gKiBAaW50ZXJuYWwgZXhwb3J0ZWQgZm9yIHRlc3RpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU1NFRnJhbWVzKGJ1ZmZlcjogc3RyaW5nKToge1xuICBmcmFtZXM6IFNTRUZyYW1lW11cbiAgcmVtYWluaW5nOiBzdHJpbmdcbn0ge1xuICBjb25zdCBmcmFtZXM6IFNTRUZyYW1lW10gPSBbXVxuICBsZXQgcG9zID0gMFxuXG4gIC8vIFNTRSBmcmFtZXMgYXJlIGRlbGltaXRlZCBieSBkb3VibGUgbmV3bGluZXNcbiAgbGV0IGlkeDogbnVtYmVyXG4gIHdoaWxlICgoaWR4ID0gYnVmZmVyLmluZGV4T2YoJ1xcblxcbicsIHBvcykpICE9PSAtMSkge1xuICAgIGNvbnN0IHJhd0ZyYW1lID0gYnVmZmVyLnNsaWNlKHBvcywgaWR4KVxuICAgIHBvcyA9IGlkeCArIDJcblxuICAgIC8vIFNraXAgZW1wdHkgZnJhbWVzXG4gICAgaWYgKCFyYXdGcmFtZS50cmltKCkpIGNvbnRpbnVlXG5cbiAgICBjb25zdCBmcmFtZTogU1NFRnJhbWUgPSB7fVxuICAgIGxldCBpc0NvbW1lbnQgPSBmYWxzZVxuXG4gICAgZm9yIChjb25zdCBsaW5lIG9mIHJhd0ZyYW1lLnNwbGl0KCdcXG4nKSkge1xuICAgICAgaWYgKGxpbmUuc3RhcnRzV2l0aCgnOicpKSB7XG4gICAgICAgIC8vIFNTRSBjb21tZW50IChlLmcuLCBgOmtlZXBhbGl2ZWApXG4gICAgICAgIGlzQ29tbWVudCA9IHRydWVcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29sb25JZHggPSBsaW5lLmluZGV4T2YoJzonKVxuICAgICAgaWYgKGNvbG9uSWR4ID09PSAtMSkgY29udGludWVcblxuICAgICAgY29uc3QgZmllbGQgPSBsaW5lLnNsaWNlKDAsIGNvbG9uSWR4KVxuICAgICAgLy8gUGVyIFNTRSBzcGVjLCBzdHJpcCBvbmUgbGVhZGluZyBzcGFjZSBhZnRlciBjb2xvbiBpZiBwcmVzZW50XG4gICAgICBjb25zdCB2YWx1ZSA9XG4gICAgICAgIGxpbmVbY29sb25JZHggKyAxXSA9PT0gJyAnXG4gICAgICAgICAgPyBsaW5lLnNsaWNlKGNvbG9uSWR4ICsgMilcbiAgICAgICAgICA6IGxpbmUuc2xpY2UoY29sb25JZHggKyAxKVxuXG4gICAgICBzd2l0Y2ggKGZpZWxkKSB7XG4gICAgICAgIGNhc2UgJ2V2ZW50JzpcbiAgICAgICAgICBmcmFtZS5ldmVudCA9IHZhbHVlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnaWQnOlxuICAgICAgICAgIGZyYW1lLmlkID0gdmFsdWVcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdkYXRhJzpcbiAgICAgICAgICAvLyBQZXIgU1NFIHNwZWMsIG11bHRpcGxlIGRhdGE6IGxpbmVzIGFyZSBjb25jYXRlbmF0ZWQgd2l0aCBcXG5cbiAgICAgICAgICBmcmFtZS5kYXRhID0gZnJhbWUuZGF0YSA/IGZyYW1lLmRhdGEgKyAnXFxuJyArIHZhbHVlIDogdmFsdWVcbiAgICAgICAgICBicmVha1xuICAgICAgICAvLyBJZ25vcmUgb3RoZXIgZmllbGRzIChyZXRyeTosIGV0Yy4pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gT25seSBlbWl0IGZyYW1lcyB0aGF0IGhhdmUgZGF0YSAob3IgYXJlIHB1cmUgY29tbWVudHMgd2hpY2ggcmVzZXQgbGl2ZW5lc3MpXG4gICAgaWYgKGZyYW1lLmRhdGEgfHwgaXNDb21tZW50KSB7XG4gICAgICBmcmFtZXMucHVzaChmcmFtZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBmcmFtZXMsIHJlbWFpbmluZzogYnVmZmVyLnNsaWNlKHBvcykgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFR5cGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudHlwZSBTU0VUcmFuc3BvcnRTdGF0ZSA9XG4gIHwgJ2lkbGUnXG4gIHwgJ2Nvbm5lY3RlZCdcbiAgfCAncmVjb25uZWN0aW5nJ1xuICB8ICdjbG9zaW5nJ1xuICB8ICdjbG9zZWQnXG5cbi8qKlxuICogUGF5bG9hZCBmb3IgYGV2ZW50OiBjbGllbnRfZXZlbnRgIGZyYW1lcywgbWF0Y2hpbmcgdGhlIFN0cmVhbUNsaWVudEV2ZW50XG4gKiBwcm90byBtZXNzYWdlIGluIHNlc3Npb25fc3RyZWFtLnByb3RvLiBUaGlzIGlzIHRoZSBvbmx5IGV2ZW50IHR5cGUgc2VudFxuICogdG8gd29ya2VyIHN1YnNjcmliZXJzIFx1MjAxNCBkZWxpdmVyeV91cGRhdGUsIHNlc3Npb25fdXBkYXRlLCBlcGhlbWVyYWxfZXZlbnQsXG4gKiBhbmQgY2F0Y2hfdXBfdHJ1bmNhdGVkIGFyZSBjbGllbnQtY2hhbm5lbC1vbmx5IChzZWUgbm90aWZpZXIuZ28gYW5kXG4gKiBldmVudF9zdHJlYW0uZ28gU3Vic2NyaWJlckNsaWVudCBndWFyZCkuXG4gKi9cbmV4cG9ydCB0eXBlIFN0cmVhbUNsaWVudEV2ZW50ID0ge1xuICBldmVudF9pZDogc3RyaW5nXG4gIHNlcXVlbmNlX251bTogbnVtYmVyXG4gIGV2ZW50X3R5cGU6IHN0cmluZ1xuICBzb3VyY2U6IHN0cmluZ1xuICBwYXlsb2FkOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICBjcmVhdGVkX2F0OiBzdHJpbmdcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTU0VUcmFuc3BvcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIFRyYW5zcG9ydCB0aGF0IHVzZXMgU1NFIGZvciByZWFkaW5nIGFuZCBIVFRQIFBPU1QgZm9yIHdyaXRpbmcuXG4gKlxuICogUmVhZHMgZXZlbnRzIHZpYSBTZXJ2ZXItU2VudCBFdmVudHMgZnJvbSB0aGUgQ0NSIHYyIGV2ZW50IHN0cmVhbSBlbmRwb2ludC5cbiAqIFdyaXRlcyBldmVudHMgdmlhIEhUVFAgUE9TVCB3aXRoIHJldHJ5IGxvZ2ljIChzYW1lIHBhdHRlcm4gYXMgSHlicmlkVHJhbnNwb3J0KS5cbiAqXG4gKiBFYWNoIGBldmVudDogY2xpZW50X2V2ZW50YCBmcmFtZSBjYXJyaWVzIGEgU3RyZWFtQ2xpZW50RXZlbnQgcHJvdG8gSlNPTlxuICogZGlyZWN0bHkgaW4gYGRhdGE6YC4gVGhlIHRyYW5zcG9ydCBleHRyYWN0cyBgcGF5bG9hZGAgYW5kIHBhc3NlcyBpdCB0b1xuICogYG9uRGF0YWAgYXMgbmV3bGluZS1kZWxpbWl0ZWQgSlNPTiBmb3IgU3RydWN0dXJlZElPIGNvbnN1bWVycy5cbiAqXG4gKiBTdXBwb3J0cyBhdXRvbWF0aWMgcmVjb25uZWN0aW9uIHdpdGggZXhwb25lbnRpYWwgYmFja29mZiBhbmQgTGFzdC1FdmVudC1JRFxuICogZm9yIHJlc3VtcHRpb24gYWZ0ZXIgZGlzY29ubmVjdGlvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIFNTRVRyYW5zcG9ydCBpbXBsZW1lbnRzIFRyYW5zcG9ydCB7XG4gIHByaXZhdGUgc3RhdGU6IFNTRVRyYW5zcG9ydFN0YXRlID0gJ2lkbGUnXG4gIHByaXZhdGUgb25EYXRhPzogKGRhdGE6IHN0cmluZykgPT4gdm9pZFxuICBwcml2YXRlIG9uQ2xvc2VDYWxsYmFjaz86IChjbG9zZUNvZGU/OiBudW1iZXIpID0+IHZvaWRcbiAgcHJpdmF0ZSBvbkV2ZW50Q2FsbGJhY2s/OiAoZXZlbnQ6IFN0cmVhbUNsaWVudEV2ZW50KSA9PiB2b2lkXG4gIHByaXZhdGUgaGVhZGVyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuICBwcml2YXRlIHNlc3Npb25JZD86IHN0cmluZ1xuICBwcml2YXRlIHJlZnJlc2hIZWFkZXJzPzogKCkgPT4gUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuICBwcml2YXRlIHJlYWRvbmx5IGdldEF1dGhIZWFkZXJzOiAoKSA9PiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG5cbiAgLy8gU1NFIGNvbm5lY3Rpb24gc3RhdGVcbiAgcHJpdmF0ZSBhYm9ydENvbnRyb2xsZXI6IEFib3J0Q29udHJvbGxlciB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgbGFzdFNlcXVlbmNlTnVtID0gMFxuICBwcml2YXRlIHNlZW5TZXF1ZW5jZU51bXMgPSBuZXcgU2V0PG51bWJlcj4oKVxuXG4gIC8vIFJlY29ubmVjdGlvbiBzdGF0ZVxuICBwcml2YXRlIHJlY29ubmVjdEF0dGVtcHRzID0gMFxuICBwcml2YXRlIHJlY29ubmVjdFN0YXJ0VGltZTogbnVtYmVyIHwgbnVsbCA9IG51bGxcbiAgcHJpdmF0ZSByZWNvbm5lY3RUaW1lcjogTm9kZUpTLlRpbWVvdXQgfCBudWxsID0gbnVsbFxuXG4gIC8vIExpdmVuZXNzIGRldGVjdGlvblxuICBwcml2YXRlIGxpdmVuZXNzVGltZXI6IE5vZGVKUy5UaW1lb3V0IHwgbnVsbCA9IG51bGxcblxuICAvLyBQT1NUIFVSTCAoZGVyaXZlZCBmcm9tIFNTRSBVUkwpXG4gIHByaXZhdGUgcG9zdFVybDogc3RyaW5nXG5cbiAgLy8gUnVudGltZSBlcG9jaCBmb3IgQ0NSIHYyIGV2ZW50IGZvcm1hdFxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdXJsOiBVUkwsXG4gICAgaGVhZGVyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9LFxuICAgIHNlc3Npb25JZD86IHN0cmluZyxcbiAgICByZWZyZXNoSGVhZGVycz86ICgpID0+IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sXG4gICAgaW5pdGlhbFNlcXVlbmNlTnVtPzogbnVtYmVyLFxuICAgIC8qKlxuICAgICAqIFBlci1pbnN0YW5jZSBhdXRoIGhlYWRlciBzb3VyY2UuIE9taXQgdG8gcmVhZCB0aGUgcHJvY2Vzcy13aWRlXG4gICAgICogQ0xBVURFX0NPREVfU0VTU0lPTl9BQ0NFU1NfVE9LRU4gKHNpbmdsZS1zZXNzaW9uIGNhbGxlcnMpLiBSZXF1aXJlZFxuICAgICAqIGZvciBjb25jdXJyZW50IG11bHRpLXNlc3Npb24gY2FsbGVycyBcdTIwMTQgdGhlIGVudi12YXIgcGF0aCBpcyBhIHByb2Nlc3NcbiAgICAgKiBnbG9iYWwgYW5kIHdvdWxkIHN0b21wIGFjcm9zcyBzZXNzaW9ucy5cbiAgICAgKi9cbiAgICBnZXRBdXRoSGVhZGVycz86ICgpID0+IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sXG4gICkge1xuICAgIHRoaXMuaGVhZGVycyA9IGhlYWRlcnNcbiAgICB0aGlzLnNlc3Npb25JZCA9IHNlc3Npb25JZFxuICAgIHRoaXMucmVmcmVzaEhlYWRlcnMgPSByZWZyZXNoSGVhZGVyc1xuICAgIHRoaXMuZ2V0QXV0aEhlYWRlcnMgPSBnZXRBdXRoSGVhZGVycyA/PyBnZXRTZXNzaW9uSW5ncmVzc0F1dGhIZWFkZXJzXG4gICAgdGhpcy5wb3N0VXJsID0gY29udmVydFNTRVVybFRvUG9zdFVybCh1cmwpXG4gICAgLy8gU2VlZCB3aXRoIGEgY2FsbGVyLXByb3ZpZGVkIGhpZ2gtd2F0ZXIgbWFyayBzbyB0aGUgZmlyc3QgY29ubmVjdCgpXG4gICAgLy8gc2VuZHMgZnJvbV9zZXF1ZW5jZV9udW0gLyBMYXN0LUV2ZW50LUlELiBXaXRob3V0IHRoaXMsIGEgZnJlc2hcbiAgICAvLyBTU0VUcmFuc3BvcnQgYWx3YXlzIGFza3MgdGhlIHNlcnZlciB0byByZXBsYXkgZnJvbSBzZXF1ZW5jZSAwIFx1MjAxNFxuICAgIC8vIHRoZSBlbnRpcmUgc2Vzc2lvbiBoaXN0b3J5IG9uIGV2ZXJ5IHRyYW5zcG9ydCBzd2FwLlxuICAgIGlmIChpbml0aWFsU2VxdWVuY2VOdW0gIT09IHVuZGVmaW5lZCAmJiBpbml0aWFsU2VxdWVuY2VOdW0gPiAwKSB7XG4gICAgICB0aGlzLmxhc3RTZXF1ZW5jZU51bSA9IGluaXRpYWxTZXF1ZW5jZU51bVxuICAgIH1cbiAgICBsb2dGb3JEZWJ1Z2dpbmcoYFNTRVRyYW5zcG9ydDogU1NFIFVSTCA9ICR7dXJsLmhyZWZ9YClcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoYFNTRVRyYW5zcG9ydDogUE9TVCBVUkwgPSAke3RoaXMucG9zdFVybH1gKVxuICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2luZm8nLCAnY2xpX3NzZV90cmFuc3BvcnRfaW5pdGlhbGl6ZWQnKVxuICB9XG5cbiAgLyoqXG4gICAqIEhpZ2gtd2F0ZXIgbWFyayBvZiBzZXF1ZW5jZSBudW1iZXJzIHNlZW4gb24gdGhpcyBzdHJlYW0uIENhbGxlcnMgdGhhdFxuICAgKiByZWNyZWF0ZSB0aGUgdHJhbnNwb3J0IChlLmcuIHJlcGxCcmlkZ2Ugb25Xb3JrUmVjZWl2ZWQpIHJlYWQgdGhpcyBiZWZvcmVcbiAgICogY2xvc2UoKSBhbmQgcGFzcyBpdCBhcyBgaW5pdGlhbFNlcXVlbmNlTnVtYCB0byB0aGUgbmV4dCBpbnN0YW5jZSBzbyB0aGVcbiAgICogc2VydmVyIHJlc3VtZXMgZnJvbSB0aGUgcmlnaHQgcG9pbnQgaW5zdGVhZCBvZiByZXBsYXlpbmcgZXZlcnl0aGluZy5cbiAgICovXG4gIGdldExhc3RTZXF1ZW5jZU51bSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmxhc3RTZXF1ZW5jZU51bVxuICB9XG5cbiAgYXN5bmMgY29ubmVjdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5zdGF0ZSAhPT0gJ2lkbGUnICYmIHRoaXMuc3RhdGUgIT09ICdyZWNvbm5lY3RpbmcnKSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBTU0VUcmFuc3BvcnQ6IENhbm5vdCBjb25uZWN0LCBjdXJyZW50IHN0YXRlIGlzICR7dGhpcy5zdGF0ZX1gLFxuICAgICAgICB7IGxldmVsOiAnZXJyb3InIH0sXG4gICAgICApXG4gICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdlcnJvcicsICdjbGlfc3NlX2Nvbm5lY3RfZmFpbGVkJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSAncmVjb25uZWN0aW5nJ1xuICAgIGNvbnN0IGNvbm5lY3RTdGFydFRpbWUgPSBEYXRlLm5vdygpXG5cbiAgICAvLyBCdWlsZCBTU0UgVVJMIHdpdGggc2VxdWVuY2UgbnVtYmVyIGZvciByZXN1bXB0aW9uXG4gICAgY29uc3Qgc3NlVXJsID0gbmV3IFVSTCh0aGlzLnVybC5ocmVmKVxuICAgIGlmICh0aGlzLmxhc3RTZXF1ZW5jZU51bSA+IDApIHtcbiAgICAgIHNzZVVybC5zZWFyY2hQYXJhbXMuc2V0KCdmcm9tX3NlcXVlbmNlX251bScsIFN0cmluZyh0aGlzLmxhc3RTZXF1ZW5jZU51bSkpXG4gICAgfVxuXG4gICAgLy8gQnVpbGQgaGVhZGVycyAtLSB1c2UgZnJlc2ggYXV0aCBoZWFkZXJzIChzdXBwb3J0cyBDb29raWUgZm9yIHNlc3Npb24ga2V5cykuXG4gICAgLy8gUmVtb3ZlIHN0YWxlIEF1dGhvcml6YXRpb24gaGVhZGVyIGZyb20gdGhpcy5oZWFkZXJzIHdoZW4gQ29va2llIGF1dGggaXMgdXNlZCxcbiAgICAvLyBzaW5jZSBzZW5kaW5nIGJvdGggY29uZnVzZXMgdGhlIGF1dGggaW50ZXJjZXB0b3IuXG4gICAgY29uc3QgYXV0aEhlYWRlcnMgPSB0aGlzLmdldEF1dGhIZWFkZXJzKClcbiAgICBjb25zdCBoZWFkZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgICAgLi4udGhpcy5oZWFkZXJzLFxuICAgICAgLi4uYXV0aEhlYWRlcnMsXG4gICAgICBBY2NlcHQ6ICd0ZXh0L2V2ZW50LXN0cmVhbScsXG4gICAgICAnYW50aHJvcGljLXZlcnNpb24nOiAnMjAyMy0wNi0wMScsXG4gICAgICAnVXNlci1BZ2VudCc6IGdldENsYXVkZUNvZGVVc2VyQWdlbnQoKSxcbiAgICB9XG4gICAgaWYgKGF1dGhIZWFkZXJzWydDb29raWUnXSkge1xuICAgICAgZGVsZXRlIGhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXVxuICAgIH1cbiAgICBpZiAodGhpcy5sYXN0U2VxdWVuY2VOdW0gPiAwKSB7XG4gICAgICBoZWFkZXJzWydMYXN0LUV2ZW50LUlEJ10gPSBTdHJpbmcodGhpcy5sYXN0U2VxdWVuY2VOdW0pXG4gICAgfVxuXG4gICAgbG9nRm9yRGVidWdnaW5nKGBTU0VUcmFuc3BvcnQ6IE9wZW5pbmcgJHtzc2VVcmwuaHJlZn1gKVxuICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2luZm8nLCAnY2xpX3NzZV9jb25uZWN0X29wZW5pbmcnKVxuXG4gICAgdGhpcy5hYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcblxuICAgIHRyeSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXNsaW50LXBsdWdpbi1uL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnNcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goc3NlVXJsLmhyZWYsIHtcbiAgICAgICAgaGVhZGVycyxcbiAgICAgICAgc2lnbmFsOiB0aGlzLmFib3J0Q29udHJvbGxlci5zaWduYWwsXG4gICAgICB9KVxuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnN0IGlzUGVybWFuZW50ID0gUEVSTUFORU5UX0hUVFBfQ09ERVMuaGFzKHJlc3BvbnNlLnN0YXR1cylcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgIGBTU0VUcmFuc3BvcnQ6IEhUVFAgJHtyZXNwb25zZS5zdGF0dXN9JHtpc1Blcm1hbmVudCA/ICcgKHBlcm1hbmVudCknIDogJyd9YCxcbiAgICAgICAgICB7IGxldmVsOiAnZXJyb3InIH0sXG4gICAgICAgIClcbiAgICAgICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnZXJyb3InLCAnY2xpX3NzZV9jb25uZWN0X2h0dHBfZXJyb3InLCB7XG4gICAgICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKGlzUGVybWFuZW50KSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZSA9ICdjbG9zZWQnXG4gICAgICAgICAgdGhpcy5vbkNsb3NlQ2FsbGJhY2s/LihyZXNwb25zZS5zdGF0dXMpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhhbmRsZUNvbm5lY3Rpb25FcnJvcigpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoIXJlc3BvbnNlLmJvZHkpIHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKCdTU0VUcmFuc3BvcnQ6IE5vIHJlc3BvbnNlIGJvZHknKVxuICAgICAgICB0aGlzLmhhbmRsZUNvbm5lY3Rpb25FcnJvcigpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBTdWNjZXNzZnVsbHkgY29ubmVjdGVkXG4gICAgICBjb25zdCBjb25uZWN0RHVyYXRpb24gPSBEYXRlLm5vdygpIC0gY29ubmVjdFN0YXJ0VGltZVxuICAgICAgbG9nRm9yRGVidWdnaW5nKCdTU0VUcmFuc3BvcnQ6IENvbm5lY3RlZCcpXG4gICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdpbmZvJywgJ2NsaV9zc2VfY29ubmVjdF9jb25uZWN0ZWQnLCB7XG4gICAgICAgIGR1cmF0aW9uX21zOiBjb25uZWN0RHVyYXRpb24sXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN0YXRlID0gJ2Nvbm5lY3RlZCdcbiAgICAgIHRoaXMucmVjb25uZWN0QXR0ZW1wdHMgPSAwXG4gICAgICB0aGlzLnJlY29ubmVjdFN0YXJ0VGltZSA9IG51bGxcbiAgICAgIHRoaXMucmVzZXRMaXZlbmVzc1RpbWVyKClcblxuICAgICAgLy8gUmVhZCB0aGUgU1NFIHN0cmVhbVxuICAgICAgYXdhaXQgdGhpcy5yZWFkU3RyZWFtKHJlc3BvbnNlLmJvZHkpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmICh0aGlzLmFib3J0Q29udHJvbGxlcj8uc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgLy8gSW50ZW50aW9uYWwgY2xvc2VcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFNTRVRyYW5zcG9ydDogQ29ubmVjdGlvbiBlcnJvcjogJHtlcnJvck1lc3NhZ2UoZXJyb3IpfWAsXG4gICAgICAgIHsgbGV2ZWw6ICdlcnJvcicgfSxcbiAgICAgIClcbiAgICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2Vycm9yJywgJ2NsaV9zc2VfY29ubmVjdF9lcnJvcicpXG4gICAgICB0aGlzLmhhbmRsZUNvbm5lY3Rpb25FcnJvcigpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlYWQgYW5kIHByb2Nlc3MgdGhlIFNTRSBzdHJlYW0gYm9keS5cbiAgICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlc2xpbnQtcGx1Z2luLW4vbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGluc1xuICBwcml2YXRlIGFzeW5jIHJlYWRTdHJlYW0oYm9keTogUmVhZGFibGVTdHJlYW08VWludDhBcnJheT4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCByZWFkZXIgPSBib2R5LmdldFJlYWRlcigpXG4gICAgY29uc3QgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpXG4gICAgbGV0IGJ1ZmZlciA9ICcnXG5cbiAgICB0cnkge1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgY29uc3QgeyBkb25lLCB2YWx1ZSB9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKVxuICAgICAgICBpZiAoZG9uZSkgYnJlYWtcblxuICAgICAgICBidWZmZXIgKz0gZGVjb2Rlci5kZWNvZGUodmFsdWUsIFNUUkVBTV9ERUNPREVfT1BUUylcbiAgICAgICAgY29uc3QgeyBmcmFtZXMsIHJlbWFpbmluZyB9ID0gcGFyc2VTU0VGcmFtZXMoYnVmZmVyKVxuICAgICAgICBidWZmZXIgPSByZW1haW5pbmdcblxuICAgICAgICBmb3IgKGNvbnN0IGZyYW1lIG9mIGZyYW1lcykge1xuICAgICAgICAgIC8vIEFueSBmcmFtZSAoaW5jbHVkaW5nIGtlZXBhbGl2ZSBjb21tZW50cykgcHJvdmVzIHRoZSBjb25uZWN0aW9uIGlzIGFsaXZlXG4gICAgICAgICAgdGhpcy5yZXNldExpdmVuZXNzVGltZXIoKVxuXG4gICAgICAgICAgaWYgKGZyYW1lLmlkKSB7XG4gICAgICAgICAgICBjb25zdCBzZXFOdW0gPSBwYXJzZUludChmcmFtZS5pZCwgMTApXG4gICAgICAgICAgICBpZiAoIWlzTmFOKHNlcU51bSkpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuc2VlblNlcXVlbmNlTnVtcy5oYXMoc2VxTnVtKSkge1xuICAgICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgICAgIGBTU0VUcmFuc3BvcnQ6IERVUExJQ0FURSBmcmFtZSBzZXE9JHtzZXFOdW19IChsYXN0U2VxdWVuY2VOdW09JHt0aGlzLmxhc3RTZXF1ZW5jZU51bX0sIHNlZW5Db3VudD0ke3RoaXMuc2VlblNlcXVlbmNlTnVtcy5zaXplfSlgLFxuICAgICAgICAgICAgICAgICAgeyBsZXZlbDogJ3dhcm4nIH0sXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ3dhcm4nLCAnY2xpX3NzZV9kdXBsaWNhdGVfc2VxdWVuY2UnKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VlblNlcXVlbmNlTnVtcy5hZGQoc2VxTnVtKVxuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgdW5ib3VuZGVkIGdyb3d0aDogb25jZSB3ZSBoYXZlIG1hbnkgZW50cmllcywgcHJ1bmVcbiAgICAgICAgICAgICAgICAvLyBvbGQgc2VxdWVuY2UgbnVtYmVycyB0aGF0IGFyZSB3ZWxsIGJlbG93IHRoZSBoaWdoLXdhdGVyIG1hcmsuXG4gICAgICAgICAgICAgICAgLy8gT25seSBzZXF1ZW5jZSBudW1iZXJzIG5lYXIgbGFzdFNlcXVlbmNlTnVtIG1hdHRlciBmb3IgZGVkdXAuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VlblNlcXVlbmNlTnVtcy5zaXplID4gMTAwMCkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdGhyZXNob2xkID0gdGhpcy5sYXN0U2VxdWVuY2VOdW0gLSAyMDBcbiAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcyBvZiB0aGlzLnNlZW5TZXF1ZW5jZU51bXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMgPCB0aHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlZW5TZXF1ZW5jZU51bXMuZGVsZXRlKHMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHNlcU51bSA+IHRoaXMubGFzdFNlcXVlbmNlTnVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0U2VxdWVuY2VOdW0gPSBzZXFOdW1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChmcmFtZS5ldmVudCAmJiBmcmFtZS5kYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVNTRUZyYW1lKGZyYW1lLmV2ZW50LCBmcmFtZS5kYXRhKVxuICAgICAgICAgIH0gZWxzZSBpZiAoZnJhbWUuZGF0YSkge1xuICAgICAgICAgICAgLy8gZGF0YTogd2l0aG91dCBldmVudDogXHUyMDE0IHNlcnZlciBpcyBlbWl0dGluZyB0aGUgb2xkIGVudmVsb3BlIGZvcm1hdFxuICAgICAgICAgICAgLy8gb3IgYSBidWcuIExvZyBzbyBpbmNpZGVudHMgc2hvdyBhcyBhIHNpZ25hbCBpbnN0ZWFkIG9mIHNpbGVudCBkcm9wcy5cbiAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgJ1NTRVRyYW5zcG9ydDogRnJhbWUgaGFzIGRhdGE6IGJ1dCBubyBldmVudDogZmllbGQgXHUyMDE0IGRyb3BwZWQnLFxuICAgICAgICAgICAgICB7IGxldmVsOiAnd2FybicgfSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ3dhcm4nLCAnY2xpX3NzZV9mcmFtZV9taXNzaW5nX2V2ZW50X2ZpZWxkJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKHRoaXMuYWJvcnRDb250cm9sbGVyPy5zaWduYWwuYWJvcnRlZCkgcmV0dXJuXG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBTU0VUcmFuc3BvcnQ6IFN0cmVhbSByZWFkIGVycm9yOiAke2Vycm9yTWVzc2FnZShlcnJvcil9YCxcbiAgICAgICAgeyBsZXZlbDogJ2Vycm9yJyB9LFxuICAgICAgKVxuICAgICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnZXJyb3InLCAnY2xpX3NzZV9zdHJlYW1fcmVhZF9lcnJvcicpXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHJlYWRlci5yZWxlYXNlTG9jaygpXG4gICAgfVxuXG4gICAgLy8gU3RyZWFtIGVuZGVkIFx1MjAxNCByZWNvbm5lY3QgdW5sZXNzIHdlJ3JlIGNsb3NpbmdcbiAgICBpZiAodGhpcy5zdGF0ZSAhPT0gJ2Nsb3NpbmcnICYmIHRoaXMuc3RhdGUgIT09ICdjbG9zZWQnKSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoJ1NTRVRyYW5zcG9ydDogU3RyZWFtIGVuZGVkLCByZWNvbm5lY3RpbmcnKVxuICAgICAgdGhpcy5oYW5kbGVDb25uZWN0aW9uRXJyb3IoKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgYSBzaW5nbGUgU1NFIGZyYW1lLiBUaGUgZXZlbnQ6IGZpZWxkIG5hbWVzIHRoZSB2YXJpYW50OyBkYXRhOlxuICAgKiBjYXJyaWVzIHRoZSBpbm5lciBwcm90byBKU09OIGRpcmVjdGx5IChubyBlbnZlbG9wZSkuXG4gICAqXG4gICAqIFdvcmtlciBzdWJzY3JpYmVycyBvbmx5IHJlY2VpdmUgY2xpZW50X2V2ZW50IGZyYW1lcyAoc2VlIG5vdGlmaWVyLmdvKSBcdTIwMTRcbiAgICogYW55IG90aGVyIGV2ZW50IHR5cGUgaW5kaWNhdGVzIGEgc2VydmVyLXNpZGUgY2hhbmdlIHRoYXQgQ0MgZG9lc24ndCB5ZXRcbiAgICogdW5kZXJzdGFuZC4gTG9nIGEgZGlhZ25vc3RpYyBzbyB3ZSBub3RpY2UgaW4gdGVsZW1ldHJ5LlxuICAgKi9cbiAgcHJpdmF0ZSBoYW5kbGVTU0VGcmFtZShldmVudFR5cGU6IHN0cmluZywgZGF0YTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKGV2ZW50VHlwZSAhPT0gJ2NsaWVudF9ldmVudCcpIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFNTRVRyYW5zcG9ydDogVW5leHBlY3RlZCBTU0UgZXZlbnQgdHlwZSAnJHtldmVudFR5cGV9JyBvbiB3b3JrZXIgc3RyZWFtYCxcbiAgICAgICAgeyBsZXZlbDogJ3dhcm4nIH0sXG4gICAgICApXG4gICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCd3YXJuJywgJ2NsaV9zc2VfdW5leHBlY3RlZF9ldmVudF90eXBlJywge1xuICAgICAgICBldmVudF90eXBlOiBldmVudFR5cGUsXG4gICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGV2OiBTdHJlYW1DbGllbnRFdmVudFxuICAgIHRyeSB7XG4gICAgICBldiA9IGpzb25QYXJzZShkYXRhKSBhcyBTdHJlYW1DbGllbnRFdmVudFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBTU0VUcmFuc3BvcnQ6IEZhaWxlZCB0byBwYXJzZSBjbGllbnRfZXZlbnQgZGF0YTogJHtlcnJvck1lc3NhZ2UoZXJyb3IpfWAsXG4gICAgICAgIHsgbGV2ZWw6ICdlcnJvcicgfSxcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHBheWxvYWQgPSBldi5wYXlsb2FkXG4gICAgaWYgKHBheWxvYWQgJiYgdHlwZW9mIHBheWxvYWQgPT09ICdvYmplY3QnICYmICd0eXBlJyBpbiBwYXlsb2FkKSB7XG4gICAgICBjb25zdCBzZXNzaW9uTGFiZWwgPSB0aGlzLnNlc3Npb25JZCA/IGAgc2Vzc2lvbj0ke3RoaXMuc2Vzc2lvbklkfWAgOiAnJ1xuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgU1NFVHJhbnNwb3J0OiBFdmVudCBzZXE9JHtldi5zZXF1ZW5jZV9udW19IGV2ZW50X2lkPSR7ZXYuZXZlbnRfaWR9IGV2ZW50X3R5cGU9JHtldi5ldmVudF90eXBlfSBwYXlsb2FkX3R5cGU9JHtTdHJpbmcocGF5bG9hZC50eXBlKX0ke3Nlc3Npb25MYWJlbH1gLFxuICAgICAgKVxuICAgICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnaW5mbycsICdjbGlfc3NlX21lc3NhZ2VfcmVjZWl2ZWQnKVxuICAgICAgLy8gUGFzcyB0aGUgdW53cmFwcGVkIHBheWxvYWQgYXMgbmV3bGluZS1kZWxpbWl0ZWQgSlNPTixcbiAgICAgIC8vIG1hdGNoaW5nIHRoZSBmb3JtYXQgdGhhdCBTdHJ1Y3R1cmVkSU8vV2ViU29ja2V0VHJhbnNwb3J0IGNvbnN1bWVycyBleHBlY3RcbiAgICAgIHRoaXMub25EYXRhPy4oanNvblN0cmluZ2lmeShwYXlsb2FkKSArICdcXG4nKVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBTU0VUcmFuc3BvcnQ6IElnbm9yaW5nIGNsaWVudF9ldmVudCB3aXRoIG5vIHR5cGUgaW4gcGF5bG9hZDogZXZlbnRfaWQ9JHtldi5ldmVudF9pZH1gLFxuICAgICAgKVxuICAgIH1cblxuICAgIHRoaXMub25FdmVudENhbGxiYWNrPy4oZXYpXG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGNvbm5lY3Rpb24gZXJyb3JzIHdpdGggZXhwb25lbnRpYWwgYmFja29mZiBhbmQgdGltZSBidWRnZXQuXG4gICAqL1xuICBwcml2YXRlIGhhbmRsZUNvbm5lY3Rpb25FcnJvcigpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyTGl2ZW5lc3NUaW1lcigpXG5cbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ2Nsb3NpbmcnIHx8IHRoaXMuc3RhdGUgPT09ICdjbG9zZWQnKSByZXR1cm5cblxuICAgIC8vIEFib3J0IGFueSBpbi1mbGlnaHQgU1NFIGZldGNoXG4gICAgdGhpcy5hYm9ydENvbnRyb2xsZXI/LmFib3J0KClcbiAgICB0aGlzLmFib3J0Q29udHJvbGxlciA9IG51bGxcblxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICBpZiAoIXRoaXMucmVjb25uZWN0U3RhcnRUaW1lKSB7XG4gICAgICB0aGlzLnJlY29ubmVjdFN0YXJ0VGltZSA9IG5vd1xuICAgIH1cblxuICAgIGNvbnN0IGVsYXBzZWQgPSBub3cgLSB0aGlzLnJlY29ubmVjdFN0YXJ0VGltZVxuICAgIGlmIChlbGFwc2VkIDwgUkVDT05ORUNUX0dJVkVfVVBfTVMpIHtcbiAgICAgIC8vIENsZWFyIGFueSBleGlzdGluZyB0aW1lclxuICAgICAgaWYgKHRoaXMucmVjb25uZWN0VGltZXIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmVjb25uZWN0VGltZXIpXG4gICAgICAgIHRoaXMucmVjb25uZWN0VGltZXIgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIC8vIFJlZnJlc2ggaGVhZGVycyBiZWZvcmUgcmVjb25uZWN0aW5nXG4gICAgICBpZiAodGhpcy5yZWZyZXNoSGVhZGVycykge1xuICAgICAgICBjb25zdCBmcmVzaEhlYWRlcnMgPSB0aGlzLnJlZnJlc2hIZWFkZXJzKClcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmhlYWRlcnMsIGZyZXNoSGVhZGVycylcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKCdTU0VUcmFuc3BvcnQ6IFJlZnJlc2hlZCBoZWFkZXJzIGZvciByZWNvbm5lY3QnKVxuICAgICAgfVxuXG4gICAgICB0aGlzLnN0YXRlID0gJ3JlY29ubmVjdGluZydcbiAgICAgIHRoaXMucmVjb25uZWN0QXR0ZW1wdHMrK1xuXG4gICAgICBjb25zdCBiYXNlRGVsYXkgPSBNYXRoLm1pbihcbiAgICAgICAgUkVDT05ORUNUX0JBU0VfREVMQVlfTVMgKiBNYXRoLnBvdygyLCB0aGlzLnJlY29ubmVjdEF0dGVtcHRzIC0gMSksXG4gICAgICAgIFJFQ09OTkVDVF9NQVhfREVMQVlfTVMsXG4gICAgICApXG4gICAgICAvLyBBZGQgXHUwMEIxMjUlIGppdHRlclxuICAgICAgY29uc3QgZGVsYXkgPSBNYXRoLm1heChcbiAgICAgICAgMCxcbiAgICAgICAgYmFzZURlbGF5ICsgYmFzZURlbGF5ICogMC4yNSAqICgyICogTWF0aC5yYW5kb20oKSAtIDEpLFxuICAgICAgKVxuXG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBTU0VUcmFuc3BvcnQ6IFJlY29ubmVjdGluZyBpbiAke01hdGgucm91bmQoZGVsYXkpfW1zIChhdHRlbXB0ICR7dGhpcy5yZWNvbm5lY3RBdHRlbXB0c30sICR7TWF0aC5yb3VuZChlbGFwc2VkIC8gMTAwMCl9cyBlbGFwc2VkKWAsXG4gICAgICApXG4gICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdlcnJvcicsICdjbGlfc3NlX3JlY29ubmVjdF9hdHRlbXB0Jywge1xuICAgICAgICByZWNvbm5lY3RBdHRlbXB0czogdGhpcy5yZWNvbm5lY3RBdHRlbXB0cyxcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMucmVjb25uZWN0VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5yZWNvbm5lY3RUaW1lciA9IG51bGxcbiAgICAgICAgdm9pZCB0aGlzLmNvbm5lY3QoKVxuICAgICAgfSwgZGVsYXkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFNTRVRyYW5zcG9ydDogUmVjb25uZWN0aW9uIHRpbWUgYnVkZ2V0IGV4aGF1c3RlZCBhZnRlciAke01hdGgucm91bmQoZWxhcHNlZCAvIDEwMDApfXNgLFxuICAgICAgICB7IGxldmVsOiAnZXJyb3InIH0sXG4gICAgICApXG4gICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdlcnJvcicsICdjbGlfc3NlX3JlY29ubmVjdF9leGhhdXN0ZWQnLCB7XG4gICAgICAgIHJlY29ubmVjdEF0dGVtcHRzOiB0aGlzLnJlY29ubmVjdEF0dGVtcHRzLFxuICAgICAgICBlbGFwc2VkTXM6IGVsYXBzZWQsXG4gICAgICB9KVxuICAgICAgdGhpcy5zdGF0ZSA9ICdjbG9zZWQnXG4gICAgICB0aGlzLm9uQ2xvc2VDYWxsYmFjaz8uKClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQm91bmQgdGltZW91dCBjYWxsYmFjay4gSG9pc3RlZCBmcm9tIGFuIGlubGluZSBjbG9zdXJlIHNvIHRoYXRcbiAgICogcmVzZXRMaXZlbmVzc1RpbWVyIChjYWxsZWQgcGVyLWZyYW1lKSBkb2VzIG5vdCBhbGxvY2F0ZSBhIG5ldyBjbG9zdXJlXG4gICAqIG9uIGV2ZXJ5IFNTRSBmcmFtZS5cbiAgICovXG4gIHByaXZhdGUgcmVhZG9ubHkgb25MaXZlbmVzc1RpbWVvdXQgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5saXZlbmVzc1RpbWVyID0gbnVsbFxuICAgIGxvZ0ZvckRlYnVnZ2luZygnU1NFVHJhbnNwb3J0OiBMaXZlbmVzcyB0aW1lb3V0LCByZWNvbm5lY3RpbmcnLCB7XG4gICAgICBsZXZlbDogJ2Vycm9yJyxcbiAgICB9KVxuICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2Vycm9yJywgJ2NsaV9zc2VfbGl2ZW5lc3NfdGltZW91dCcpXG4gICAgdGhpcy5hYm9ydENvbnRyb2xsZXI/LmFib3J0KClcbiAgICB0aGlzLmhhbmRsZUNvbm5lY3Rpb25FcnJvcigpXG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIGxpdmVuZXNzIHRpbWVyLiBJZiBubyBTU0UgZnJhbWUgYXJyaXZlcyB3aXRoaW4gdGhlIHRpbWVvdXQsXG4gICAqIHRyZWF0IHRoZSBjb25uZWN0aW9uIGFzIGRlYWQgYW5kIHJlY29ubmVjdC5cbiAgICovXG4gIHByaXZhdGUgcmVzZXRMaXZlbmVzc1RpbWVyKCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJMaXZlbmVzc1RpbWVyKClcbiAgICB0aGlzLmxpdmVuZXNzVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMub25MaXZlbmVzc1RpbWVvdXQsIExJVkVORVNTX1RJTUVPVVRfTVMpXG4gIH1cblxuICBwcml2YXRlIGNsZWFyTGl2ZW5lc3NUaW1lcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5saXZlbmVzc1RpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5saXZlbmVzc1RpbWVyKVxuICAgICAgdGhpcy5saXZlbmVzc1RpbWVyID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFdyaXRlIChIVFRQIFBPU1QpIFx1MjAxNCBzYW1lIHBhdHRlcm4gYXMgSHlicmlkVHJhbnNwb3J0XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgYXN5bmMgd3JpdGUobWVzc2FnZTogU3Rkb3V0TWVzc2FnZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGF1dGhIZWFkZXJzID0gdGhpcy5nZXRBdXRoSGVhZGVycygpXG4gICAgaWYgKE9iamVjdC5rZXlzKGF1dGhIZWFkZXJzKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZygnU1NFVHJhbnNwb3J0OiBObyBzZXNzaW9uIHRva2VuIGF2YWlsYWJsZSBmb3IgUE9TVCcpXG4gICAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCd3YXJuJywgJ2NsaV9zc2VfcG9zdF9ub190b2tlbicpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgICAgLi4uYXV0aEhlYWRlcnMsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ2FudGhyb3BpYy12ZXJzaW9uJzogJzIwMjMtMDYtMDEnLFxuICAgICAgJ1VzZXItQWdlbnQnOiBnZXRDbGF1ZGVDb2RlVXNlckFnZW50KCksXG4gICAgfVxuXG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFNTRVRyYW5zcG9ydDogUE9TVCBib2R5IGtleXM9JHtPYmplY3Qua2V5cyhtZXNzYWdlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KS5qb2luKCcsJyl9YCxcbiAgICApXG5cbiAgICBmb3IgKGxldCBhdHRlbXB0ID0gMTsgYXR0ZW1wdCA8PSBQT1NUX01BWF9SRVRSSUVTOyBhdHRlbXB0KyspIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCh0aGlzLnBvc3RVcmwsIG1lc3NhZ2UsIHtcbiAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICAgIHZhbGlkYXRlU3RhdHVzOiBhbHdheXNWYWxpZFN0YXR1cyxcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoYFNTRVRyYW5zcG9ydDogUE9TVCBzdWNjZXNzIHR5cGU9JHttZXNzYWdlLnR5cGV9YClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICBgU1NFVHJhbnNwb3J0OiBQT1NUICR7cmVzcG9uc2Uuc3RhdHVzfSBib2R5PSR7anNvblN0cmluZ2lmeShyZXNwb25zZS5kYXRhKS5zbGljZSgwLCAyMDApfWAsXG4gICAgICAgIClcbiAgICAgICAgLy8gNHh4IGVycm9ycyAoZXhjZXB0IDQyOSkgYXJlIHBlcm1hbmVudCAtIGRvbid0IHJldHJ5XG4gICAgICAgIGlmIChcbiAgICAgICAgICByZXNwb25zZS5zdGF0dXMgPj0gNDAwICYmXG4gICAgICAgICAgcmVzcG9uc2Uuc3RhdHVzIDwgNTAwICYmXG4gICAgICAgICAgcmVzcG9uc2Uuc3RhdHVzICE9PSA0MjlcbiAgICAgICAgKSB7XG4gICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgYFNTRVRyYW5zcG9ydDogUE9TVCByZXR1cm5lZCAke3Jlc3BvbnNlLnN0YXR1c30gKGNsaWVudCBlcnJvciksIG5vdCByZXRyeWluZ2AsXG4gICAgICAgICAgKVxuICAgICAgICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ3dhcm4nLCAnY2xpX3NzZV9wb3N0X2NsaWVudF9lcnJvcicsIHtcbiAgICAgICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyA0Mjkgb3IgNXh4IC0gcmV0cnlcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgIGBTU0VUcmFuc3BvcnQ6IFBPU1QgcmV0dXJuZWQgJHtyZXNwb25zZS5zdGF0dXN9LCBhdHRlbXB0ICR7YXR0ZW1wdH0vJHtQT1NUX01BWF9SRVRSSUVTfWAsXG4gICAgICAgIClcbiAgICAgICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnd2FybicsICdjbGlfc3NlX3Bvc3RfcmV0cnlhYmxlX2Vycm9yJywge1xuICAgICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgIGF0dGVtcHQsXG4gICAgICAgIH0pXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zdCBheGlvc0Vycm9yID0gZXJyb3IgYXMgQXhpb3NFcnJvclxuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgYFNTRVRyYW5zcG9ydDogUE9TVCBlcnJvcjogJHtheGlvc0Vycm9yLm1lc3NhZ2V9LCBhdHRlbXB0ICR7YXR0ZW1wdH0vJHtQT1NUX01BWF9SRVRSSUVTfWAsXG4gICAgICAgIClcbiAgICAgICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnd2FybicsICdjbGlfc3NlX3Bvc3RfbmV0d29ya19lcnJvcicsIHtcbiAgICAgICAgICBhdHRlbXB0LFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAoYXR0ZW1wdCA9PT0gUE9TVF9NQVhfUkVUUklFUykge1xuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgYFNTRVRyYW5zcG9ydDogUE9TVCBmYWlsZWQgYWZ0ZXIgJHtQT1NUX01BWF9SRVRSSUVTfSBhdHRlbXB0cywgY29udGludWluZ2AsXG4gICAgICAgIClcbiAgICAgICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnd2FybicsICdjbGlfc3NlX3Bvc3RfcmV0cmllc19leGhhdXN0ZWQnKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGVsYXlNcyA9IE1hdGgubWluKFxuICAgICAgICBQT1NUX0JBU0VfREVMQVlfTVMgKiBNYXRoLnBvdygyLCBhdHRlbXB0IC0gMSksXG4gICAgICAgIFBPU1RfTUFYX0RFTEFZX01TLFxuICAgICAgKVxuICAgICAgYXdhaXQgc2xlZXAoZGVsYXlNcylcbiAgICB9XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBUcmFuc3BvcnQgaW50ZXJmYWNlXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgaXNDb25uZWN0ZWRTdGF0dXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09ICdjb25uZWN0ZWQnXG4gIH1cblxuICBpc0Nsb3NlZFN0YXR1cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gJ2Nsb3NlZCdcbiAgfVxuXG4gIHNldE9uRGF0YShjYWxsYmFjazogKGRhdGE6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25EYXRhID0gY2FsbGJhY2tcbiAgfVxuXG4gIHNldE9uQ2xvc2UoY2FsbGJhY2s6IChjbG9zZUNvZGU/OiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2xvc2VDYWxsYmFjayA9IGNhbGxiYWNrXG4gIH1cblxuICBzZXRPbkV2ZW50KGNhbGxiYWNrOiAoZXZlbnQ6IFN0cmVhbUNsaWVudEV2ZW50KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkV2ZW50Q2FsbGJhY2sgPSBjYWxsYmFja1xuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVjb25uZWN0VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlY29ubmVjdFRpbWVyKVxuICAgICAgdGhpcy5yZWNvbm5lY3RUaW1lciA9IG51bGxcbiAgICB9XG4gICAgdGhpcy5jbGVhckxpdmVuZXNzVGltZXIoKVxuXG4gICAgdGhpcy5zdGF0ZSA9ICdjbG9zaW5nJ1xuICAgIHRoaXMuYWJvcnRDb250cm9sbGVyPy5hYm9ydCgpXG4gICAgdGhpcy5hYm9ydENvbnRyb2xsZXIgPSBudWxsXG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBVUkwgQ29udmVyc2lvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQ29udmVydCBhbiBTU0UgVVJMIHRvIHRoZSBIVFRQIFBPU1QgZW5kcG9pbnQgVVJMLlxuICogVGhlIFNTRSBzdHJlYW0gVVJMIGFuZCBQT1NUIFVSTCBzaGFyZSB0aGUgc2FtZSBiYXNlOyB0aGUgUE9TVCBlbmRwb2ludFxuICogaXMgYXQgYC9ldmVudHNgICh3aXRob3V0IGAvc3RyZWFtYCkuXG4gKlxuICogRnJvbTogaHR0cHM6Ly9hcGkuZXhhbXBsZS5jb20vdjIvc2Vzc2lvbl9pbmdyZXNzL3Nlc3Npb24vPHNlc3Npb25faWQ+L2V2ZW50cy9zdHJlYW1cbiAqIFRvOiAgIGh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL3YyL3Nlc3Npb25faW5ncmVzcy9zZXNzaW9uLzxzZXNzaW9uX2lkPi9ldmVudHNcbiAqL1xuZnVuY3Rpb24gY29udmVydFNTRVVybFRvUG9zdFVybChzc2VVcmw6IFVSTCk6IHN0cmluZyB7XG4gIGxldCBwYXRobmFtZSA9IHNzZVVybC5wYXRobmFtZVxuICAvLyBSZW1vdmUgL3N0cmVhbSBzdWZmaXggdG8gZ2V0IHRoZSBQT1NUIGV2ZW50cyBlbmRwb2ludFxuICBpZiAocGF0aG5hbWUuZW5kc1dpdGgoJy9zdHJlYW0nKSkge1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc2xpY2UoMCwgLScvc3RyZWFtJy5sZW5ndGgpXG4gIH1cbiAgcmV0dXJuIGAke3NzZVVybC5wcm90b2NvbH0vLyR7c3NlVXJsLmhvc3R9JHtwYXRobmFtZX1gXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyxrQkFBa0I7QUFNM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBUUE7QUFDQTs7O0FDdkJBO0FBeUJPLElBQU0saUJBQU4sY0FBNkIsTUFBTTtBQUFBLEVBQ3hDLFlBQ0UsU0FDUyxjQUNUO0FBQ0EsVUFBTSxPQUFPO0FBRko7QUFBQSxFQUdYO0FBQ0Y7QUErQk8sSUFBTSwyQkFBTixNQUFrQztBQUFBLEVBQy9CLFVBQWUsQ0FBQztBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULHdCQUEyQyxDQUFDO0FBQUEsRUFDNUMsZUFBb0M7QUFBQSxFQUNwQyxpQkFBb0MsQ0FBQztBQUFBLEVBQ3JDLGlCQUFpQjtBQUFBLEVBQ1I7QUFBQSxFQUVqQixZQUFZLFFBQTJDO0FBQ3JELFNBQUssU0FBUztBQUFBLEVBQ2hCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT0EsSUFBSSxvQkFBNEI7QUFDOUIsV0FBTyxLQUFLO0FBQUEsRUFDZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSxJQUFJLGVBQXVCO0FBQ3pCLFdBQU8sS0FBSyxTQUFTLEtBQUssaUJBQWlCLEtBQUssUUFBUTtBQUFBLEVBQzFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT0EsTUFBTSxRQUFRLFFBQWdDO0FBQzVDLFFBQUksS0FBSyxPQUFRO0FBQ2pCLFVBQU0sUUFBUSxNQUFNLFFBQVEsTUFBTSxJQUFJLFNBQVMsQ0FBQyxNQUFNO0FBQ3RELFFBQUksTUFBTSxXQUFXLEVBQUc7QUFHeEIsV0FDRSxLQUFLLFFBQVEsU0FBUyxNQUFNLFNBQVMsS0FBSyxPQUFPLGdCQUNqRCxDQUFDLEtBQUssUUFDTjtBQUNBLFlBQU0sSUFBSSxRQUFjLGFBQVc7QUFDakMsYUFBSyxzQkFBc0IsS0FBSyxPQUFPO0FBQUEsTUFDekMsQ0FBQztBQUFBLElBQ0g7QUFFQSxRQUFJLEtBQUssT0FBUTtBQUNqQixTQUFLLFFBQVEsS0FBSyxHQUFHLEtBQUs7QUFDMUIsU0FBSyxLQUFLLE1BQU07QUFBQSxFQUNsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSxRQUF1QjtBQUNyQixRQUFJLEtBQUssUUFBUSxXQUFXLEtBQUssQ0FBQyxLQUFLLFVBQVU7QUFDL0MsYUFBTyxRQUFRLFFBQVE7QUFBQSxJQUN6QjtBQUNBLFNBQUssS0FBSyxNQUFNO0FBQ2hCLFdBQU8sSUFBSSxRQUFjLGFBQVc7QUFDbEMsV0FBSyxlQUFlLEtBQUssT0FBTztBQUFBLElBQ2xDLENBQUM7QUFBQSxFQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLFFBQWM7QUFDWixRQUFJLEtBQUssT0FBUTtBQUNqQixTQUFLLFNBQVM7QUFDZCxTQUFLLGlCQUFpQixLQUFLLFFBQVE7QUFDbkMsU0FBSyxVQUFVLENBQUM7QUFDaEIsU0FBSyxlQUFlO0FBQ3BCLFNBQUssZUFBZTtBQUNwQixlQUFXLFdBQVcsS0FBSyxzQkFBdUIsU0FBUTtBQUMxRCxTQUFLLHdCQUF3QixDQUFDO0FBQzlCLGVBQVcsV0FBVyxLQUFLLGVBQWdCLFNBQVE7QUFDbkQsU0FBSyxpQkFBaUIsQ0FBQztBQUFBLEVBQ3pCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLE1BQWMsUUFBdUI7QUFDbkMsUUFBSSxLQUFLLFlBQVksS0FBSyxPQUFRO0FBQ2xDLFNBQUssV0FBVztBQUNoQixRQUFJLFdBQVc7QUFFZixRQUFJO0FBQ0YsYUFBTyxLQUFLLFFBQVEsU0FBUyxLQUFLLENBQUMsS0FBSyxRQUFRO0FBQzlDLGNBQU0sUUFBUSxLQUFLLFVBQVU7QUFDN0IsWUFBSSxNQUFNLFdBQVcsRUFBRztBQUV4QixZQUFJO0FBQ0YsZ0JBQU0sS0FBSyxPQUFPLEtBQUssS0FBSztBQUM1QixxQkFBVztBQUFBLFFBQ2IsU0FBUyxLQUFLO0FBQ1o7QUFDQSxjQUNFLEtBQUssT0FBTywyQkFBMkIsVUFDdkMsWUFBWSxLQUFLLE9BQU8sd0JBQ3hCO0FBQ0EsaUJBQUs7QUFDTCxpQkFBSyxPQUFPLGlCQUFpQixNQUFNLFFBQVEsUUFBUTtBQUNuRCx1QkFBVztBQUNYLGlCQUFLLG9CQUFvQjtBQUN6QjtBQUFBLFVBQ0Y7QUFJQSxlQUFLLFVBQVUsTUFBTSxPQUFPLEtBQUssT0FBTztBQUN4QyxnQkFBTSxlQUNKLGVBQWUsaUJBQWlCLElBQUksZUFBZTtBQUNyRCxnQkFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFVBQVUsWUFBWSxDQUFDO0FBQ3hEO0FBQUEsUUFDRjtBQUdBLGFBQUssb0JBQW9CO0FBQUEsTUFDM0I7QUFBQSxJQUNGLFVBQUU7QUFDQSxXQUFLLFdBQVc7QUFFaEIsVUFBSSxLQUFLLFFBQVEsV0FBVyxHQUFHO0FBQzdCLG1CQUFXLFdBQVcsS0FBSyxlQUFnQixTQUFRO0FBQ25ELGFBQUssaUJBQWlCLENBQUM7QUFBQSxNQUN6QjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFXUSxZQUFpQjtBQUN2QixVQUFNLEVBQUUsY0FBYyxjQUFjLElBQUksS0FBSztBQUM3QyxRQUFJLGtCQUFrQixRQUFXO0FBQy9CLGFBQU8sS0FBSyxRQUFRLE9BQU8sR0FBRyxZQUFZO0FBQUEsSUFDNUM7QUFDQSxRQUFJLFFBQVE7QUFDWixRQUFJLFFBQVE7QUFDWixXQUFPLFFBQVEsS0FBSyxRQUFRLFVBQVUsUUFBUSxjQUFjO0FBQzFELFVBQUk7QUFDSixVQUFJO0FBQ0Ysb0JBQVksT0FBTyxXQUFXLGNBQWMsS0FBSyxRQUFRLEtBQUssQ0FBQyxDQUFDO0FBQUEsTUFDbEUsUUFBUTtBQUNOLGFBQUssUUFBUSxPQUFPLE9BQU8sQ0FBQztBQUM1QjtBQUFBLE1BQ0Y7QUFDQSxVQUFJLFFBQVEsS0FBSyxRQUFRLFlBQVksY0FBZTtBQUNwRCxlQUFTO0FBQ1Q7QUFBQSxJQUNGO0FBQ0EsV0FBTyxLQUFLLFFBQVEsT0FBTyxHQUFHLEtBQUs7QUFBQSxFQUNyQztBQUFBLEVBRVEsV0FBVyxVQUFrQixjQUErQjtBQUNsRSxVQUFNLFNBQVMsS0FBSyxPQUFPLElBQUksS0FBSyxPQUFPO0FBQzNDLFFBQUksaUJBQWlCLFFBQVc7QUFLOUIsWUFBTSxVQUFVLEtBQUs7QUFBQSxRQUNuQixLQUFLLE9BQU87QUFBQSxRQUNaLEtBQUssSUFBSSxjQUFjLEtBQUssT0FBTyxVQUFVO0FBQUEsTUFDL0M7QUFDQSxhQUFPLFVBQVU7QUFBQSxJQUNuQjtBQUNBLFVBQU0sY0FBYyxLQUFLO0FBQUEsTUFDdkIsS0FBSyxPQUFPLGNBQWMsTUFBTSxXQUFXO0FBQUEsTUFDM0MsS0FBSyxPQUFPO0FBQUEsSUFDZDtBQUNBLFdBQU8sY0FBYztBQUFBLEVBQ3ZCO0FBQUEsRUFFUSxzQkFBNEI7QUFDbEMsVUFBTSxZQUFZLEtBQUs7QUFDdkIsU0FBSyx3QkFBd0IsQ0FBQztBQUM5QixlQUFXLFdBQVcsVUFBVyxTQUFRO0FBQUEsRUFDM0M7QUFBQSxFQUVRLE1BQU0sSUFBMkI7QUFDdkMsV0FBTyxJQUFJLFFBQVEsYUFBVztBQUM1QixXQUFLLGVBQWU7QUFDcEI7QUFBQSxRQUNFLENBQUMsTUFBTUEsYUFBWTtBQUNqQixlQUFLLGVBQWU7QUFDcEIsVUFBQUEsU0FBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUNGOzs7QUNsUkE7QUE0Qk8sSUFBTSxzQkFBTixNQUEwQjtBQUFBLEVBQ3ZCLFdBQWlDO0FBQUEsRUFDakMsVUFBMEM7QUFBQSxFQUMxQyxTQUFTO0FBQUEsRUFDQTtBQUFBLEVBRWpCLFlBQVksUUFBbUM7QUFDN0MsU0FBSyxTQUFTO0FBQUEsRUFDaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsUUFBUSxPQUFzQztBQUM1QyxRQUFJLEtBQUssT0FBUTtBQUNqQixTQUFLLFVBQVUsS0FBSyxVQUFVLGdCQUFnQixLQUFLLFNBQVMsS0FBSyxJQUFJO0FBQ3JFLFNBQUssS0FBSyxNQUFNO0FBQUEsRUFDbEI7QUFBQSxFQUVBLFFBQWM7QUFDWixTQUFLLFNBQVM7QUFDZCxTQUFLLFVBQVU7QUFBQSxFQUNqQjtBQUFBLEVBRUEsTUFBYyxRQUF1QjtBQUNuQyxRQUFJLEtBQUssWUFBWSxLQUFLLE9BQVE7QUFDbEMsUUFBSSxDQUFDLEtBQUssUUFBUztBQUVuQixVQUFNLFVBQVUsS0FBSztBQUNyQixTQUFLLFVBQVU7QUFFZixTQUFLLFdBQVcsS0FBSyxjQUFjLE9BQU8sRUFBRSxLQUFLLE1BQU07QUFDckQsV0FBSyxXQUFXO0FBQ2hCLFVBQUksS0FBSyxXQUFXLENBQUMsS0FBSyxRQUFRO0FBQ2hDLGFBQUssS0FBSyxNQUFNO0FBQUEsTUFDbEI7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUE7QUFBQSxFQUdBLE1BQWMsY0FBYyxTQUFpRDtBQUMzRSxRQUFJLFVBQVU7QUFDZCxRQUFJLFdBQVc7QUFDZixXQUFPLENBQUMsS0FBSyxRQUFRO0FBQ25CLFlBQU0sS0FBSyxNQUFNLEtBQUssT0FBTyxLQUFLLE9BQU87QUFDekMsVUFBSSxHQUFJO0FBRVI7QUFDQSxZQUFNLE1BQU0sS0FBSyxXQUFXLFFBQVEsQ0FBQztBQUdyQyxVQUFJLEtBQUssV0FBVyxDQUFDLEtBQUssUUFBUTtBQUNoQyxrQkFBVSxnQkFBZ0IsU0FBUyxLQUFLLE9BQU87QUFDL0MsYUFBSyxVQUFVO0FBQUEsTUFDakI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBRVEsV0FBVyxVQUEwQjtBQUMzQyxVQUFNLGNBQWMsS0FBSztBQUFBLE1BQ3ZCLEtBQUssT0FBTyxjQUFjLE1BQU0sV0FBVztBQUFBLE1BQzNDLEtBQUssT0FBTztBQUFBLElBQ2Q7QUFDQSxVQUFNLFNBQVMsS0FBSyxPQUFPLElBQUksS0FBSyxPQUFPO0FBQzNDLFdBQU8sY0FBYztBQUFBLEVBQ3ZCO0FBQ0Y7QUFVQSxTQUFTLGdCQUNQLE1BQ0EsU0FDeUI7QUFDekIsUUFBTSxTQUFTLEVBQUUsR0FBRyxLQUFLO0FBRXpCLGFBQVcsQ0FBQyxLQUFLLEtBQUssS0FBSyxPQUFPLFFBQVEsT0FBTyxHQUFHO0FBQ2xELFNBQ0csUUFBUSx1QkFBdUIsUUFBUSx3QkFDeEMsT0FBTyxHQUFHLEtBQ1YsT0FBTyxPQUFPLEdBQUcsTUFBTSxZQUN2QixPQUFPLFVBQVUsWUFDakIsVUFBVSxNQUNWO0FBRUEsYUFBTyxHQUFHLElBQUk7QUFBQSxRQUNaLEdBQUksT0FBTyxHQUFHO0FBQUEsUUFDZCxHQUFJO0FBQUEsTUFDTjtBQUFBLElBQ0YsT0FBTztBQUNMLGFBQU8sR0FBRyxJQUFJO0FBQUEsSUFDaEI7QUFBQSxFQUNGO0FBRUEsU0FBTztBQUNUOzs7QUZsR0EsSUFBTSxnQ0FBZ0M7QUFTdEMsSUFBTSxpQ0FBaUM7QUFHdkMsU0FBUyxvQkFBNkI7QUFDcEMsU0FBTztBQUNUO0FBUU8sSUFBTSxlQUFOLGNBQTJCLE1BQU07QUFBQSxFQUN0QyxZQUFxQixRQUEyQjtBQUM5QyxVQUFNLDBCQUEwQixNQUFNLEVBQUU7QUFEckI7QUFBQSxFQUVyQjtBQUNGO0FBU0EsSUFBTSxnQ0FBZ0M7QUFnRC9CLFNBQVMsMEJBQWtEO0FBQ2hFLFNBQU8sRUFBRSxXQUFXLG9CQUFJLElBQUksR0FBRyxnQkFBZ0Isb0JBQUksSUFBSSxFQUFFO0FBQzNEO0FBRUEsU0FBUyxTQUFTLEdBR1A7QUFDVCxTQUFPLEdBQUcsRUFBRSxVQUFVLElBQUksRUFBRSxzQkFBc0IsRUFBRTtBQUN0RDtBQWdCTyxTQUFTLHVCQUNkLFFBQ0EsT0FDZ0I7QUFDaEIsUUFBTSxNQUFzQixDQUFDO0FBSTdCLFFBQU0sVUFBVSxvQkFBSSxJQUFvQztBQUN4RCxhQUFXLE9BQU8sUUFBUTtBQUN4QixZQUFRLElBQUksTUFBTSxNQUFNO0FBQUEsTUFDdEIsS0FBSyxpQkFBaUI7QUFDcEIsY0FBTSxLQUFLLElBQUksTUFBTSxRQUFRO0FBQzdCLGNBQU0sU0FBUyxNQUFNLGVBQWUsSUFBSSxTQUFTLEdBQUcsQ0FBQztBQUNyRCxZQUFJLE9BQVEsT0FBTSxVQUFVLE9BQU8sTUFBTTtBQUN6QyxjQUFNLGVBQWUsSUFBSSxTQUFTLEdBQUcsR0FBRyxFQUFFO0FBQzFDLGNBQU0sVUFBVSxJQUFJLElBQUksQ0FBQyxDQUFDO0FBQzFCLFlBQUksS0FBSyxHQUFHO0FBQ1o7QUFBQSxNQUNGO0FBQUEsTUFDQSxLQUFLLHVCQUF1QjtBQUMxQixZQUFJLElBQUksTUFBTSxNQUFNLFNBQVMsY0FBYztBQUN6QyxjQUFJLEtBQUssR0FBRztBQUNaO0FBQUEsUUFDRjtBQUNBLGNBQU0sWUFBWSxNQUFNLGVBQWUsSUFBSSxTQUFTLEdBQUcsQ0FBQztBQUN4RCxjQUFNLFNBQVMsWUFBWSxNQUFNLFVBQVUsSUFBSSxTQUFTLElBQUk7QUFDNUQsWUFBSSxDQUFDLFFBQVE7QUFLWCxjQUFJLEtBQUssR0FBRztBQUNaO0FBQUEsUUFDRjtBQUNBLGNBQU0sU0FBVSxPQUFPLElBQUksTUFBTSxLQUFLLE1BQU0sQ0FBQztBQUM3QyxlQUFPLEtBQUssSUFBSSxNQUFNLE1BQU0sSUFBSTtBQUNoQyxjQUFNLFdBQVcsUUFBUSxJQUFJLE1BQU07QUFDbkMsWUFBSSxVQUFVO0FBQ1osbUJBQVMsTUFBTSxNQUFNLE9BQU8sT0FBTyxLQUFLLEVBQUU7QUFDMUM7QUFBQSxRQUNGO0FBQ0EsY0FBTSxXQUFpQztBQUFBLFVBQ3JDLE1BQU07QUFBQSxVQUNOLE1BQU0sSUFBSTtBQUFBLFVBQ1YsWUFBWSxJQUFJO0FBQUEsVUFDaEIsb0JBQW9CLElBQUk7QUFBQSxVQUN4QixPQUFPO0FBQUEsWUFDTCxNQUFNO0FBQUEsWUFDTixPQUFPLElBQUksTUFBTTtBQUFBLFlBQ2pCLE9BQU8sRUFBRSxNQUFNLGNBQWMsTUFBTSxPQUFPLEtBQUssRUFBRSxFQUFFO0FBQUEsVUFDckQ7QUFBQSxRQUNGO0FBQ0EsZ0JBQVEsSUFBSSxRQUFRLFFBQVE7QUFDNUIsWUFBSSxLQUFLLFFBQVE7QUFDakI7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUNFLFlBQUksS0FBSyxHQUFHO0FBQUEsSUFDaEI7QUFBQSxFQUNGO0FBQ0EsU0FBTztBQUNUO0FBT08sU0FBUyxpQ0FDZCxPQUNBLFdBS007QUFDTixRQUFNLFVBQVUsT0FBTyxVQUFVLFFBQVEsRUFBRTtBQUMzQyxRQUFNLFFBQVEsU0FBUyxTQUFTO0FBQ2hDLE1BQUksTUFBTSxlQUFlLElBQUksS0FBSyxNQUFNLFVBQVUsUUFBUSxJQUFJO0FBQzVELFVBQU0sZUFBZSxPQUFPLEtBQUs7QUFBQSxFQUNuQztBQUNGO0FBdUNPLElBQU0sWUFBTixNQUFnQjtBQUFBLEVBQ2IsY0FBYztBQUFBLEVBQ0w7QUFBQSxFQUNBO0FBQUEsRUFDVCxpQkFBd0M7QUFBQSxFQUN4QyxvQkFBb0I7QUFBQSxFQUNwQixTQUFTO0FBQUEsRUFDVCwwQkFBMEI7QUFBQSxFQUMxQixlQUFvQztBQUFBLEVBQzNCO0FBQUEsRUFDQTtBQUFBLEVBQ0EsT0FBTyxvQkFBb0IsRUFBRSxXQUFXLEtBQUssQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS3ZELG9CQUFrRCxDQUFDO0FBQUEsRUFDbkQsbUJBQXlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUt6RCx3QkFBd0Isd0JBQXdCO0FBQUEsRUFFdkM7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFRQTtBQUFBLEVBRWpCLFlBQ0UsV0FDQSxZQUNBLE1BV0E7QUFDQSxTQUFLLGtCQUNILE1BQU0sb0JBQ0wsTUFBTTtBQUVMLGNBQVEsS0FBSyxDQUFDO0FBQUEsSUFDaEI7QUFDRixTQUFLLHNCQUNILE1BQU0sdUJBQXVCO0FBQy9CLFNBQUssMEJBQTBCLE1BQU0sMkJBQTJCO0FBQ2hFLFNBQUssaUJBQWlCLE1BQU0sa0JBQWtCO0FBRTlDLFFBQUksV0FBVyxhQUFhLFdBQVcsV0FBVyxhQUFhLFVBQVU7QUFDdkUsWUFBTSxJQUFJO0FBQUEsUUFDUix3Q0FBd0MsV0FBVyxRQUFRO0FBQUEsTUFDN0Q7QUFBQSxJQUNGO0FBQ0EsVUFBTSxXQUFXLFdBQVcsU0FBUyxRQUFRLE9BQU8sRUFBRTtBQUN0RCxTQUFLLGlCQUFpQixHQUFHLFdBQVcsUUFBUSxLQUFLLFdBQVcsSUFBSSxHQUFHLFFBQVE7QUFFM0UsU0FBSyxZQUFZLFNBQVMsTUFBTSxHQUFHLEVBQUUsSUFBSSxLQUFLO0FBRTlDLFNBQUssY0FBYyxJQUFJLG9CQUFvQjtBQUFBLE1BQ3pDLE1BQU0sVUFDSixLQUFLO0FBQUEsUUFDSDtBQUFBLFFBQ0E7QUFBQSxRQUNBLEVBQUUsY0FBYyxLQUFLLGFBQWEsR0FBRyxLQUFLO0FBQUEsUUFDMUM7QUFBQSxNQUNGLEVBQUUsS0FBSyxPQUFLLEVBQUUsRUFBRTtBQUFBLE1BQ2xCLGFBQWE7QUFBQSxNQUNiLFlBQVk7QUFBQSxNQUNaLFVBQVU7QUFBQSxJQUNaLENBQUM7QUFFRCxTQUFLLGdCQUFnQixJQUFJLHlCQUFzQztBQUFBLE1BQzdELGNBQWM7QUFBQSxNQUNkLGVBQWUsS0FBSyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTTNCLGNBQWM7QUFBQSxNQUNkLE1BQU0sT0FBTSxVQUFTO0FBQ25CLGNBQU0sU0FBUyxNQUFNLEtBQUs7QUFBQSxVQUN4QjtBQUFBLFVBQ0E7QUFBQSxVQUNBLEVBQUUsY0FBYyxLQUFLLGFBQWEsUUFBUSxNQUFNO0FBQUEsVUFDaEQ7QUFBQSxRQUNGO0FBQ0EsWUFBSSxDQUFDLE9BQU8sSUFBSTtBQUNkLGdCQUFNLElBQUk7QUFBQSxZQUNSO0FBQUEsWUFDQSxPQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxhQUFhO0FBQUEsTUFDYixZQUFZO0FBQUEsTUFDWixVQUFVO0FBQUEsSUFDWixDQUFDO0FBRUQsU0FBSyx3QkFBd0IsSUFBSSx5QkFBc0M7QUFBQSxNQUNyRSxjQUFjO0FBQUEsTUFDZCxlQUFlLEtBQUssT0FBTztBQUFBLE1BQzNCLGNBQWM7QUFBQSxNQUNkLE1BQU0sT0FBTSxVQUFTO0FBQ25CLGNBQU0sU0FBUyxNQUFNLEtBQUs7QUFBQSxVQUN4QjtBQUFBLFVBQ0E7QUFBQSxVQUNBLEVBQUUsY0FBYyxLQUFLLGFBQWEsUUFBUSxNQUFNO0FBQUEsVUFDaEQ7QUFBQSxRQUNGO0FBQ0EsWUFBSSxDQUFDLE9BQU8sSUFBSTtBQUNkLGdCQUFNLElBQUk7QUFBQSxZQUNSO0FBQUEsWUFDQSxPQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxhQUFhO0FBQUEsTUFDYixZQUFZO0FBQUEsTUFDWixVQUFVO0FBQUEsSUFDWixDQUFDO0FBRUQsU0FBSyxtQkFBbUIsSUFBSSx5QkFHekI7QUFBQSxNQUNELGNBQWM7QUFBQSxNQUNkLGNBQWM7QUFBQSxNQUNkLE1BQU0sT0FBTSxVQUFTO0FBQ25CLGNBQU0sU0FBUyxNQUFNLEtBQUs7QUFBQSxVQUN4QjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsWUFDRSxjQUFjLEtBQUs7QUFBQSxZQUNuQixTQUFTLE1BQU0sSUFBSSxRQUFNO0FBQUEsY0FDdkIsVUFBVSxFQUFFO0FBQUEsY0FDWixRQUFRLEVBQUU7QUFBQSxZQUNaLEVBQUU7QUFBQSxVQUNKO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFDQSxZQUFJLENBQUMsT0FBTyxJQUFJO0FBQ2QsZ0JBQU0sSUFBSSxlQUFlLHdCQUF3QixPQUFPLFlBQVk7QUFBQSxRQUN0RTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGFBQWE7QUFBQSxNQUNiLFlBQVk7QUFBQSxNQUNaLFVBQVU7QUFBQSxJQUNaLENBQUM7QUFPRCxjQUFVLFdBQVcsQ0FBQyxVQUE2QjtBQUNqRCxXQUFLLGVBQWUsTUFBTSxVQUFVLFVBQVU7QUFBQSxJQUNoRCxDQUFDO0FBQUEsRUFDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWFBLE1BQU0sV0FBVyxPQUF5RDtBQUN4RSxVQUFNLFVBQVUsS0FBSyxJQUFJO0FBQ3pCLFFBQUksT0FBTyxLQUFLLEtBQUssZUFBZSxDQUFDLEVBQUUsV0FBVyxHQUFHO0FBQ25ELFlBQU0sSUFBSSxhQUFhLGlCQUFpQjtBQUFBLElBQzFDO0FBQ0EsUUFBSSxVQUFVLFFBQVc7QUFDdkIsWUFBTSxXQUFXLFFBQVEsSUFBSTtBQUM3QixjQUFRLFdBQVcsU0FBUyxVQUFVLEVBQUUsSUFBSTtBQUFBLElBQzlDO0FBQ0EsUUFBSSxNQUFNLEtBQUssR0FBRztBQUNoQixZQUFNLElBQUksYUFBYSxlQUFlO0FBQUEsSUFDeEM7QUFDQSxTQUFLLGNBQWM7QUFHbkIsVUFBTSxrQkFBa0IsS0FBSyxlQUFlO0FBRTVDLFVBQU0sU0FBUyxNQUFNLEtBQUs7QUFBQSxNQUN4QjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsUUFDRSxlQUFlO0FBQUEsUUFDZixjQUFjLEtBQUs7QUFBQTtBQUFBO0FBQUEsUUFHbkIsbUJBQW1CO0FBQUEsVUFDakIsZ0JBQWdCO0FBQUEsVUFDaEIsY0FBYztBQUFBLFFBQ2hCO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQ0EsUUFBSSxDQUFDLE9BQU8sSUFBSTtBQUtkLFlBQU0sSUFBSSxhQUFhLHdCQUF3QjtBQUFBLElBQ2pEO0FBQ0EsU0FBSyxlQUFlO0FBQ3BCLFNBQUssZUFBZTtBQUtwQixvQ0FBZ0MsTUFBTTtBQUNwQyxXQUFLLEtBQUssV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQUEsSUFDN0MsQ0FBQztBQUVELG9CQUFnQixpQ0FBaUMsS0FBSyxXQUFXLEVBQUU7QUFDbkUsMkJBQXVCLFFBQVEsb0NBQW9DO0FBQUEsTUFDakUsT0FBTyxLQUFLO0FBQUEsTUFDWixhQUFhLEtBQUssSUFBSSxJQUFJO0FBQUEsSUFDNUIsQ0FBQztBQU1ELFVBQU0sRUFBRSxVQUFVLFdBQVcsSUFBSSxNQUFNO0FBQ3ZDLFFBQUksQ0FBQyxLQUFLLFFBQVE7QUFDaEIsNkJBQXVCLFFBQVEsNkJBQTZCO0FBQUEsUUFDMUQsYUFBYTtBQUFBLFFBQ2IsV0FBVyxhQUFhO0FBQUEsTUFDMUIsQ0FBQztBQUFBLElBQ0g7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQUFBO0FBQUE7QUFBQSxFQUlBLE1BQWMsaUJBR1g7QUFDRCxVQUFNLFVBQVUsS0FBSyxJQUFJO0FBQ3pCLFVBQU0sY0FBYyxLQUFLLGVBQWU7QUFDeEMsUUFBSSxPQUFPLEtBQUssV0FBVyxFQUFFLFdBQVcsR0FBRztBQUN6QyxhQUFPLEVBQUUsVUFBVSxNQUFNLFlBQVksRUFBRTtBQUFBLElBQ3pDO0FBQ0EsVUFBTSxPQUFPLE1BQU0sS0FBSztBQUFBLE1BQ3RCLEdBQUcsS0FBSyxjQUFjO0FBQUEsTUFDdEI7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUNBLFdBQU87QUFBQSxNQUNMLFVBQVUsTUFBTSxRQUFRLHFCQUFxQjtBQUFBLE1BQzdDLFlBQVksS0FBSyxJQUFJLElBQUk7QUFBQSxJQUMzQjtBQUFBLEVBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVFBLE1BQWMsUUFDWixRQUNBLE1BQ0EsTUFDQSxPQUNBLEVBQUUsVUFBVSxJQUFPLElBQTBCLENBQUMsR0FDdEI7QUFDeEIsVUFBTSxjQUFjLEtBQUssZUFBZTtBQUN4QyxRQUFJLE9BQU8sS0FBSyxXQUFXLEVBQUUsV0FBVyxFQUFHLFFBQU8sRUFBRSxJQUFJLE1BQU07QUFFOUQsUUFBSTtBQUNGLFlBQU0sV0FBVyxNQUFNLEtBQUssS0FBSyxNQUFNO0FBQUEsUUFDckMsR0FBRyxLQUFLLGNBQWMsR0FBRyxJQUFJO0FBQUEsUUFDN0I7QUFBQSxRQUNBO0FBQUEsVUFDRSxTQUFTO0FBQUEsWUFDUCxHQUFHO0FBQUEsWUFDSCxnQkFBZ0I7QUFBQSxZQUNoQixxQkFBcUI7QUFBQSxZQUNyQixjQUFjLHVCQUF1QjtBQUFBLFVBQ3ZDO0FBQUEsVUFDQSxnQkFBZ0I7QUFBQSxVQUNoQjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBRUEsVUFBSSxTQUFTLFVBQVUsT0FBTyxTQUFTLFNBQVMsS0FBSztBQUNuRCxhQUFLLDBCQUEwQjtBQUMvQixlQUFPLEVBQUUsSUFBSSxLQUFLO0FBQUEsTUFDcEI7QUFDQSxVQUFJLFNBQVMsV0FBVyxLQUFLO0FBQzNCLGFBQUssb0JBQW9CO0FBQUEsTUFDM0I7QUFDQSxVQUFJLFNBQVMsV0FBVyxPQUFPLFNBQVMsV0FBVyxLQUFLO0FBSXRELGNBQU0sTUFBTSwyQkFBMkI7QUFDdkMsY0FBTSxNQUFNLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSTtBQUN6QyxZQUFJLFFBQVEsUUFBUSxNQUFNLE1BQU8sS0FBSyxJQUFJLEdBQUc7QUFDM0M7QUFBQSxZQUNFLHlDQUF5QyxJQUFJLEtBQUssTUFBTSxHQUFJLEVBQUUsWUFBWSxDQUFDO0FBQUEsWUFDM0UsRUFBRSxPQUFPLFFBQVE7QUFBQSxVQUNuQjtBQUNBLGlDQUF1QixTQUFTLHFDQUFxQztBQUNyRSxlQUFLLGdCQUFnQjtBQUFBLFFBQ3ZCO0FBR0EsYUFBSztBQUNMLFlBQUksS0FBSywyQkFBMkIsK0JBQStCO0FBQ2pFO0FBQUEsWUFDRSxjQUFjLEtBQUssdUJBQXVCO0FBQUEsWUFDMUMsRUFBRSxPQUFPLFFBQVE7QUFBQSxVQUNuQjtBQUNBLGlDQUF1QixTQUFTLG9DQUFvQztBQUNwRSxlQUFLLGdCQUFnQjtBQUFBLFFBQ3ZCO0FBQUEsTUFDRjtBQUNBLHNCQUFnQixjQUFjLEtBQUssYUFBYSxTQUFTLE1BQU0sSUFBSTtBQUFBLFFBQ2pFLE9BQU87QUFBQSxNQUNULENBQUM7QUFDRCw2QkFBdUIsUUFBUSw2QkFBNkI7QUFBQSxRQUMxRDtBQUFBLFFBQ0E7QUFBQSxRQUNBLFFBQVEsU0FBUztBQUFBLE1BQ25CLENBQUM7QUFDRCxVQUFJLFNBQVMsV0FBVyxLQUFLO0FBQzNCLGNBQU0sTUFBTSxTQUFTLFVBQVUsYUFBYTtBQUM1QyxjQUFNLFVBQVUsT0FBTyxRQUFRLFdBQVcsU0FBUyxLQUFLLEVBQUUsSUFBSTtBQUM5RCxZQUFJLENBQUMsTUFBTSxPQUFPLEtBQUssV0FBVyxHQUFHO0FBQ25DLGlCQUFPLEVBQUUsSUFBSSxPQUFPLGNBQWMsVUFBVSxJQUFLO0FBQUEsUUFDbkQ7QUFBQSxNQUNGO0FBQ0EsYUFBTyxFQUFFLElBQUksTUFBTTtBQUFBLElBQ3JCLFNBQVMsT0FBTztBQUNkLHNCQUFnQixjQUFjLEtBQUssWUFBWSxhQUFhLEtBQUssQ0FBQyxJQUFJO0FBQUEsUUFDcEUsT0FBTztBQUFBLE1BQ1QsQ0FBQztBQUNELDZCQUF1QixRQUFRLDRCQUE0QjtBQUFBLFFBQ3pEO0FBQUEsUUFDQTtBQUFBLFFBQ0EsWUFBWSxhQUFhLEtBQUs7QUFBQSxNQUNoQyxDQUFDO0FBQ0QsYUFBTyxFQUFFLElBQUksTUFBTTtBQUFBLElBQ3JCO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFHQSxZQUFZLE9BQXFCLFNBQXVDO0FBQ3RFLFFBQUksVUFBVSxLQUFLLGdCQUFnQixDQUFDLFFBQVM7QUFDN0MsU0FBSyxlQUFlO0FBQ3BCLFNBQUssWUFBWSxRQUFRO0FBQUEsTUFDdkIsZUFBZTtBQUFBLE1BQ2YseUJBQXlCLFVBQ3JCO0FBQUEsUUFDRSxXQUFXLFFBQVE7QUFBQSxRQUNuQixvQkFBb0IsUUFBUTtBQUFBLFFBQzVCLFlBQVksUUFBUTtBQUFBLE1BQ3RCLElBQ0E7QUFBQSxJQUNOLENBQUM7QUFBQSxFQUNIO0FBQUE7QUFBQSxFQUdBLGVBQWUsVUFBeUM7QUFDdEQsU0FBSyxZQUFZLFFBQVEsRUFBRSxtQkFBbUIsU0FBUyxDQUFDO0FBQUEsRUFDMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTVEsc0JBQTZCO0FBQ25DLG9CQUFnQixrREFBa0Q7QUFBQSxNQUNoRSxPQUFPO0FBQUEsSUFDVCxDQUFDO0FBQ0QsMkJBQXVCLFNBQVMsMkJBQTJCO0FBQzNELFNBQUssZ0JBQWdCO0FBQUEsRUFDdkI7QUFBQTtBQUFBLEVBR1EsaUJBQXVCO0FBQzdCLFNBQUssY0FBYztBQUNuQixVQUFNLFdBQVcsTUFBWTtBQUMzQixZQUFNLFNBQ0osS0FBSyxzQkFDTCxLQUFLLDJCQUNKLElBQUksS0FBSyxPQUFPLElBQUk7QUFDdkIsV0FBSyxpQkFBaUIsV0FBVyxNQUFNLEtBQUssc0JBQXNCLE1BQU07QUFBQSxJQUMxRTtBQUNBLFVBQU0sT0FBTyxNQUFZO0FBQ3ZCLFdBQUssS0FBSyxjQUFjO0FBR3hCLFVBQUksS0FBSyxtQkFBbUIsS0FBTTtBQUNsQyxlQUFTO0FBQUEsSUFDWDtBQUNBLGFBQVM7QUFBQSxFQUNYO0FBQUE7QUFBQSxFQUdRLGdCQUFzQjtBQUM1QixRQUFJLEtBQUssZ0JBQWdCO0FBQ3ZCLG1CQUFhLEtBQUssY0FBYztBQUNoQyxXQUFLLGlCQUFpQjtBQUFBLElBQ3hCO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFHQSxNQUFjLGdCQUErQjtBQUMzQyxRQUFJLEtBQUssa0JBQW1CO0FBQzVCLFNBQUssb0JBQW9CO0FBQ3pCLFFBQUk7QUFDRixZQUFNLFNBQVMsTUFBTSxLQUFLO0FBQUEsUUFDeEI7QUFBQSxRQUNBO0FBQUEsUUFDQSxFQUFFLFlBQVksS0FBSyxXQUFXLGNBQWMsS0FBSyxZQUFZO0FBQUEsUUFDN0Q7QUFBQSxRQUNBLEVBQUUsU0FBUyxJQUFNO0FBQUEsTUFDbkI7QUFDQSxVQUFJLE9BQU8sSUFBSTtBQUNiLHdCQUFnQiwyQkFBMkI7QUFBQSxNQUM3QztBQUFBLElBQ0YsVUFBRTtBQUNBLFdBQUssb0JBQW9CO0FBQUEsSUFDM0I7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVlBLE1BQU0sV0FBVyxTQUF1QztBQUN0RCxRQUFJLFFBQVEsU0FBUyxnQkFBZ0I7QUFDbkMsV0FBSyxrQkFBa0IsS0FBSyxPQUFPO0FBQ25DLFVBQUksQ0FBQyxLQUFLLGtCQUFrQjtBQUMxQixhQUFLLG1CQUFtQjtBQUFBLFVBQ3RCLE1BQU0sS0FBSyxLQUFLLHVCQUF1QjtBQUFBLFVBQ3ZDO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFDQTtBQUFBLElBQ0Y7QUFDQSxVQUFNLEtBQUssdUJBQXVCO0FBQ2xDLFFBQUksUUFBUSxTQUFTLGFBQWE7QUFDaEMsdUNBQWlDLEtBQUssdUJBQXVCLE9BQU87QUFBQSxJQUN0RTtBQUNBLFVBQU0sS0FBSyxjQUFjLFFBQVEsS0FBSyxjQUFjLE9BQU8sQ0FBQztBQUFBLEVBQzlEO0FBQUE7QUFBQSxFQUdRLGNBQWMsU0FBcUM7QUFDekQsVUFBTSxNQUFNO0FBQ1osV0FBTztBQUFBLE1BQ0wsU0FBUztBQUFBLFFBQ1AsR0FBRztBQUFBLFFBQ0gsTUFBTSxPQUFPLElBQUksU0FBUyxXQUFXLElBQUksT0FBTyxXQUFXO0FBQUEsTUFDN0Q7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFTQSxNQUFjLHlCQUF3QztBQUNwRCxRQUFJLEtBQUssa0JBQWtCO0FBQ3pCLG1CQUFhLEtBQUssZ0JBQWdCO0FBQ2xDLFdBQUssbUJBQW1CO0FBQUEsSUFDMUI7QUFDQSxRQUFJLEtBQUssa0JBQWtCLFdBQVcsRUFBRztBQUN6QyxVQUFNLFdBQVcsS0FBSztBQUN0QixTQUFLLG9CQUFvQixDQUFDO0FBQzFCLFVBQU0sV0FBVztBQUFBLE1BQ2Y7QUFBQSxNQUNBLEtBQUs7QUFBQSxJQUNQO0FBQ0EsVUFBTSxLQUFLLGNBQWM7QUFBQSxNQUN2QixTQUFTLElBQUksY0FBWSxFQUFFLFNBQVMsV0FBVyxLQUFLLEVBQUU7QUFBQSxJQUN4RDtBQUFBLEVBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPQSxNQUFNLG1CQUNKLFdBQ0EsU0FDQTtBQUFBLElBQ0UsZUFBZTtBQUFBLElBQ2Y7QUFBQSxFQUNGLElBR0ksQ0FBQyxHQUNVO0FBQ2YsVUFBTSxRQUFxQjtBQUFBLE1BQ3pCLFNBQVM7QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLEdBQUc7QUFBQSxRQUNILE1BQU0sT0FBTyxRQUFRLFNBQVMsV0FBVyxRQUFRLE9BQU8sV0FBVztBQUFBLE1BQ3JFO0FBQUEsTUFDQSxHQUFJLGdCQUFnQixFQUFFLGVBQWUsS0FBSztBQUFBLE1BQzFDLEdBQUksV0FBVyxFQUFFLFVBQVUsUUFBUTtBQUFBLElBQ3JDO0FBQ0EsVUFBTSxLQUFLLHNCQUFzQixRQUFRLEtBQUs7QUFBQSxFQUNoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSxzQkFBcUM7QUFDbkMsV0FBTyxLQUFLLHNCQUFzQixNQUFNO0FBQUEsRUFDMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBU0EsTUFBTSxRQUF1QjtBQUMzQixVQUFNLEtBQUssdUJBQXVCO0FBQ2xDLFdBQU8sS0FBSyxjQUFjLE1BQU07QUFBQSxFQUNsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBUUEsTUFBTSxxQkFBc0Q7QUFDMUQsV0FBTyxLQUFLLGFBQWEsMkJBQTJCLENBQUMsR0FBRyxpQkFBaUI7QUFBQSxFQUMzRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBUUEsTUFBTSw2QkFBOEQ7QUFDbEUsV0FBTyxLQUFLO0FBQUEsTUFDVjtBQUFBLE1BQ0EsRUFBRSxXQUFXLE9BQU87QUFBQSxNQUNwQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLE1BQWMsYUFDWixNQUNBLFFBQ0EsU0FDaUM7QUFDakMsVUFBTSxjQUFjLEtBQUssZUFBZTtBQUN4QyxRQUFJLE9BQU8sS0FBSyxXQUFXLEVBQUUsV0FBVyxFQUFHLFFBQU87QUFFbEQsVUFBTSxZQUE2QixDQUFDO0FBQ3BDLFFBQUk7QUFFSixPQUFHO0FBQ0QsWUFBTSxNQUFNLElBQUksSUFBSSxHQUFHLEtBQUssY0FBYyxHQUFHLElBQUksRUFBRTtBQUNuRCxpQkFBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLE9BQU8sUUFBUSxNQUFNLEdBQUc7QUFDM0MsWUFBSSxhQUFhLElBQUksR0FBRyxDQUFDO0FBQUEsTUFDM0I7QUFDQSxVQUFJLFFBQVE7QUFDVixZQUFJLGFBQWEsSUFBSSxVQUFVLE1BQU07QUFBQSxNQUN2QztBQUVBLFlBQU0sT0FBTyxNQUFNLEtBQUs7QUFBQSxRQUN0QixJQUFJLFNBQVM7QUFBQSxRQUNiO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFDQSxVQUFJLENBQUMsS0FBTSxRQUFPO0FBRWxCLGdCQUFVLEtBQUssR0FBSSxLQUFLLFFBQVEsQ0FBQyxDQUFFO0FBQ25DLGVBQVMsS0FBSztBQUFBLElBQ2hCLFNBQVM7QUFFVDtBQUFBLE1BQ0UsbUJBQW1CLFVBQVUsTUFBTSx5QkFBeUIsSUFBSSxHQUFHLE9BQU8sWUFBWSxpQkFBaUIsRUFBRTtBQUFBLElBQzNHO0FBQ0EsV0FBTztBQUFBLEVBQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsTUFBYyxhQUNaLEtBQ0EsYUFDQSxTQUNtQjtBQUNuQixhQUFTLFVBQVUsR0FBRyxXQUFXLElBQUksV0FBVztBQUM5QyxVQUFJO0FBQ0osVUFBSTtBQUNGLG1CQUFXLE1BQU0sS0FBSyxLQUFLLElBQU8sS0FBSztBQUFBLFVBQ3JDLFNBQVM7QUFBQSxZQUNQLEdBQUc7QUFBQSxZQUNILHFCQUFxQjtBQUFBLFlBQ3JCLGNBQWMsdUJBQXVCO0FBQUEsVUFDdkM7QUFBQSxVQUNBLGdCQUFnQjtBQUFBLFVBQ2hCLFNBQVM7QUFBQSxRQUNYLENBQUM7QUFBQSxNQUNILFNBQVMsT0FBTztBQUNkO0FBQUEsVUFDRSxrQkFBa0IsR0FBRyxvQkFBb0IsT0FBTyxTQUFTLGFBQWEsS0FBSyxDQUFDO0FBQUEsVUFDNUUsRUFBRSxPQUFPLE9BQU87QUFBQSxRQUNsQjtBQUNBLFlBQUksVUFBVSxJQUFJO0FBQ2hCLGdCQUFNLFFBQ0osS0FBSyxJQUFJLE1BQU0sTUFBTSxVQUFVLElBQUksR0FBTSxJQUFJLEtBQUssT0FBTyxJQUFJO0FBQy9ELGdCQUFNLE1BQU0sS0FBSztBQUFBLFFBQ25CO0FBQ0E7QUFBQSxNQUNGO0FBRUEsVUFBSSxTQUFTLFVBQVUsT0FBTyxTQUFTLFNBQVMsS0FBSztBQUNuRCxlQUFPLFNBQVM7QUFBQSxNQUNsQjtBQUNBLFVBQUksU0FBUyxXQUFXLEtBQUs7QUFDM0IsYUFBSyxvQkFBb0I7QUFBQSxNQUMzQjtBQUNBO0FBQUEsUUFDRSxrQkFBa0IsR0FBRyxhQUFhLFNBQVMsTUFBTSxhQUFhLE9BQU87QUFBQSxRQUNyRSxFQUFFLE9BQU8sT0FBTztBQUFBLE1BQ2xCO0FBRUEsVUFBSSxVQUFVLElBQUk7QUFDaEIsY0FBTSxRQUNKLEtBQUssSUFBSSxNQUFNLE1BQU0sVUFBVSxJQUFJLEdBQU0sSUFBSSxLQUFLLE9BQU8sSUFBSTtBQUMvRCxjQUFNLE1BQU0sS0FBSztBQUFBLE1BQ25CO0FBQUEsSUFDRjtBQUVBLG9CQUFnQixvQ0FBb0MsRUFBRSxPQUFPLFFBQVEsQ0FBQztBQUN0RSwyQkFBdUIsU0FBUyxvQ0FBb0M7QUFBQSxNQUNsRTtBQUFBLElBQ0YsQ0FBQztBQUNELFdBQU87QUFBQSxFQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLGVBQ0UsU0FDQSxRQUNNO0FBQ04sU0FBSyxLQUFLLGlCQUFpQixRQUFRLEVBQUUsU0FBUyxPQUFPLENBQUM7QUFBQSxFQUN4RDtBQUFBO0FBQUEsRUFHQSxpQkFBeUI7QUFDdkIsV0FBTyxLQUFLO0FBQUEsRUFDZDtBQUFBO0FBQUEsRUFHQSxJQUFJLHdCQUFnQztBQUNsQyxXQUFPLEtBQUssc0JBQXNCO0FBQUEsRUFDcEM7QUFBQTtBQUFBLEVBR0EsUUFBYztBQUNaLFNBQUssU0FBUztBQUNkLFNBQUssY0FBYztBQUNuQixzQ0FBa0M7QUFDbEMsUUFBSSxLQUFLLGtCQUFrQjtBQUN6QixtQkFBYSxLQUFLLGdCQUFnQjtBQUNsQyxXQUFLLG1CQUFtQjtBQUFBLElBQzFCO0FBQ0EsU0FBSyxvQkFBb0IsQ0FBQztBQUMxQixTQUFLLHNCQUFzQixVQUFVLE1BQU07QUFDM0MsU0FBSyxzQkFBc0IsZUFBZSxNQUFNO0FBQ2hELFNBQUssWUFBWSxNQUFNO0FBQ3ZCLFNBQUssY0FBYyxNQUFNO0FBQ3pCLFNBQUssc0JBQXNCLE1BQU07QUFDakMsU0FBSyxpQkFBaUIsTUFBTTtBQUFBLEVBQzlCO0FBQ0Y7OztBR3IrQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BLElBQU0sMEJBQTBCO0FBQ2hDLElBQU0seUJBQXlCO0FBRS9CLElBQU0sdUJBQXVCO0FBRTdCLElBQU0sc0JBQXNCO0FBTTVCLElBQU0sdUJBQXVCLG9CQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssR0FBRyxDQUFDO0FBR3BELElBQU0sbUJBQW1CO0FBQ3pCLElBQU0scUJBQXFCO0FBQzNCLElBQU0sb0JBQW9CO0FBRzFCLElBQU0scUJBQXdDLEVBQUUsUUFBUSxLQUFLO0FBRzdELFNBQVNDLHFCQUE2QjtBQUNwQyxTQUFPO0FBQ1Q7QUFrQk8sU0FBUyxlQUFlLFFBRzdCO0FBQ0EsUUFBTSxTQUFxQixDQUFDO0FBQzVCLE1BQUksTUFBTTtBQUdWLE1BQUk7QUFDSixVQUFRLE1BQU0sT0FBTyxRQUFRLFFBQVEsR0FBRyxPQUFPLElBQUk7QUFDakQsVUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLEdBQUc7QUFDdEMsVUFBTSxNQUFNO0FBR1osUUFBSSxDQUFDLFNBQVMsS0FBSyxFQUFHO0FBRXRCLFVBQU0sUUFBa0IsQ0FBQztBQUN6QixRQUFJLFlBQVk7QUFFaEIsZUFBVyxRQUFRLFNBQVMsTUFBTSxJQUFJLEdBQUc7QUFDdkMsVUFBSSxLQUFLLFdBQVcsR0FBRyxHQUFHO0FBRXhCLG9CQUFZO0FBQ1o7QUFBQSxNQUNGO0FBRUEsWUFBTSxXQUFXLEtBQUssUUFBUSxHQUFHO0FBQ2pDLFVBQUksYUFBYSxHQUFJO0FBRXJCLFlBQU0sUUFBUSxLQUFLLE1BQU0sR0FBRyxRQUFRO0FBRXBDLFlBQU0sUUFDSixLQUFLLFdBQVcsQ0FBQyxNQUFNLE1BQ25CLEtBQUssTUFBTSxXQUFXLENBQUMsSUFDdkIsS0FBSyxNQUFNLFdBQVcsQ0FBQztBQUU3QixjQUFRLE9BQU87QUFBQSxRQUNiLEtBQUs7QUFDSCxnQkFBTSxRQUFRO0FBQ2Q7QUFBQSxRQUNGLEtBQUs7QUFDSCxnQkFBTSxLQUFLO0FBQ1g7QUFBQSxRQUNGLEtBQUs7QUFFSCxnQkFBTSxPQUFPLE1BQU0sT0FBTyxNQUFNLE9BQU8sT0FBTyxRQUFRO0FBQ3REO0FBQUEsTUFFSjtBQUFBLElBQ0Y7QUFHQSxRQUFJLE1BQU0sUUFBUSxXQUFXO0FBQzNCLGFBQU8sS0FBSyxLQUFLO0FBQUEsSUFDbkI7QUFBQSxFQUNGO0FBRUEsU0FBTyxFQUFFLFFBQVEsV0FBVyxPQUFPLE1BQU0sR0FBRyxFQUFFO0FBQ2hEO0FBOENPLElBQU0sZUFBTixNQUF3QztBQUFBO0FBQUEsRUE0QjdDLFlBQ21CLEtBQ2pCLFVBQWtDLENBQUMsR0FDbkMsV0FDQSxnQkFDQSxvQkFPQSxnQkFDQTtBQVppQjtBQWFqQixTQUFLLFVBQVU7QUFDZixTQUFLLFlBQVk7QUFDakIsU0FBSyxpQkFBaUI7QUFDdEIsU0FBSyxpQkFBaUIsa0JBQWtCO0FBQ3hDLFNBQUssVUFBVSx1QkFBdUIsR0FBRztBQUt6QyxRQUFJLHVCQUF1QixVQUFhLHFCQUFxQixHQUFHO0FBQzlELFdBQUssa0JBQWtCO0FBQUEsSUFDekI7QUFDQSxvQkFBZ0IsMkJBQTJCLElBQUksSUFBSSxFQUFFO0FBQ3JELG9CQUFnQiw0QkFBNEIsS0FBSyxPQUFPLEVBQUU7QUFDMUQsMkJBQXVCLFFBQVEsK0JBQStCO0FBQUEsRUFDaEU7QUFBQSxFQXhEUSxRQUEyQjtBQUFBLEVBQzNCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNTO0FBQUE7QUFBQSxFQUdULGtCQUEwQztBQUFBLEVBQzFDLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQixvQkFBSSxJQUFZO0FBQUE7QUFBQSxFQUduQyxvQkFBb0I7QUFBQSxFQUNwQixxQkFBb0M7QUFBQSxFQUNwQyxpQkFBd0M7QUFBQTtBQUFBLEVBR3hDLGdCQUF1QztBQUFBO0FBQUEsRUFHdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQXlDUixxQkFBNkI7QUFDM0IsV0FBTyxLQUFLO0FBQUEsRUFDZDtBQUFBLEVBRUEsTUFBTSxVQUF5QjtBQUM3QixRQUFJLEtBQUssVUFBVSxVQUFVLEtBQUssVUFBVSxnQkFBZ0I7QUFDMUQ7QUFBQSxRQUNFLGtEQUFrRCxLQUFLLEtBQUs7QUFBQSxRQUM1RCxFQUFFLE9BQU8sUUFBUTtBQUFBLE1BQ25CO0FBQ0EsNkJBQXVCLFNBQVMsd0JBQXdCO0FBQ3hEO0FBQUEsSUFDRjtBQUVBLFNBQUssUUFBUTtBQUNiLFVBQU0sbUJBQW1CLEtBQUssSUFBSTtBQUdsQyxVQUFNLFNBQVMsSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJO0FBQ3BDLFFBQUksS0FBSyxrQkFBa0IsR0FBRztBQUM1QixhQUFPLGFBQWEsSUFBSSxxQkFBcUIsT0FBTyxLQUFLLGVBQWUsQ0FBQztBQUFBLElBQzNFO0FBS0EsVUFBTSxjQUFjLEtBQUssZUFBZTtBQUN4QyxVQUFNLFVBQWtDO0FBQUEsTUFDdEMsR0FBRyxLQUFLO0FBQUEsTUFDUixHQUFHO0FBQUEsTUFDSCxRQUFRO0FBQUEsTUFDUixxQkFBcUI7QUFBQSxNQUNyQixjQUFjLHVCQUF1QjtBQUFBLElBQ3ZDO0FBQ0EsUUFBSSxZQUFZLFFBQVEsR0FBRztBQUN6QixhQUFPLFFBQVEsZUFBZTtBQUFBLElBQ2hDO0FBQ0EsUUFBSSxLQUFLLGtCQUFrQixHQUFHO0FBQzVCLGNBQVEsZUFBZSxJQUFJLE9BQU8sS0FBSyxlQUFlO0FBQUEsSUFDeEQ7QUFFQSxvQkFBZ0IseUJBQXlCLE9BQU8sSUFBSSxFQUFFO0FBQ3RELDJCQUF1QixRQUFRLHlCQUF5QjtBQUV4RCxTQUFLLGtCQUFrQixJQUFJLGdCQUFnQjtBQUUzQyxRQUFJO0FBRUYsWUFBTSxXQUFXLE1BQU0sTUFBTSxPQUFPLE1BQU07QUFBQSxRQUN4QztBQUFBLFFBQ0EsUUFBUSxLQUFLLGdCQUFnQjtBQUFBLE1BQy9CLENBQUM7QUFFRCxVQUFJLENBQUMsU0FBUyxJQUFJO0FBQ2hCLGNBQU0sY0FBYyxxQkFBcUIsSUFBSSxTQUFTLE1BQU07QUFDNUQ7QUFBQSxVQUNFLHNCQUFzQixTQUFTLE1BQU0sR0FBRyxjQUFjLGlCQUFpQixFQUFFO0FBQUEsVUFDekUsRUFBRSxPQUFPLFFBQVE7QUFBQSxRQUNuQjtBQUNBLCtCQUF1QixTQUFTLDhCQUE4QjtBQUFBLFVBQzVELFFBQVEsU0FBUztBQUFBLFFBQ25CLENBQUM7QUFFRCxZQUFJLGFBQWE7QUFDZixlQUFLLFFBQVE7QUFDYixlQUFLLGtCQUFrQixTQUFTLE1BQU07QUFDdEM7QUFBQSxRQUNGO0FBRUEsYUFBSyxzQkFBc0I7QUFDM0I7QUFBQSxNQUNGO0FBRUEsVUFBSSxDQUFDLFNBQVMsTUFBTTtBQUNsQix3QkFBZ0IsZ0NBQWdDO0FBQ2hELGFBQUssc0JBQXNCO0FBQzNCO0FBQUEsTUFDRjtBQUdBLFlBQU0sa0JBQWtCLEtBQUssSUFBSSxJQUFJO0FBQ3JDLHNCQUFnQix5QkFBeUI7QUFDekMsNkJBQXVCLFFBQVEsNkJBQTZCO0FBQUEsUUFDMUQsYUFBYTtBQUFBLE1BQ2YsQ0FBQztBQUVELFdBQUssUUFBUTtBQUNiLFdBQUssb0JBQW9CO0FBQ3pCLFdBQUsscUJBQXFCO0FBQzFCLFdBQUssbUJBQW1CO0FBR3hCLFlBQU0sS0FBSyxXQUFXLFNBQVMsSUFBSTtBQUFBLElBQ3JDLFNBQVMsT0FBTztBQUNkLFVBQUksS0FBSyxpQkFBaUIsT0FBTyxTQUFTO0FBRXhDO0FBQUEsTUFDRjtBQUVBO0FBQUEsUUFDRSxtQ0FBbUMsYUFBYSxLQUFLLENBQUM7QUFBQSxRQUN0RCxFQUFFLE9BQU8sUUFBUTtBQUFBLE1BQ25CO0FBQ0EsNkJBQXVCLFNBQVMsdUJBQXVCO0FBQ3ZELFdBQUssc0JBQXNCO0FBQUEsSUFDN0I7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLE1BQWMsV0FBVyxNQUFpRDtBQUN4RSxVQUFNLFNBQVMsS0FBSyxVQUFVO0FBQzlCLFVBQU0sVUFBVSxJQUFJLFlBQVk7QUFDaEMsUUFBSSxTQUFTO0FBRWIsUUFBSTtBQUNGLGFBQU8sTUFBTTtBQUNYLGNBQU0sRUFBRSxNQUFNLE1BQU0sSUFBSSxNQUFNLE9BQU8sS0FBSztBQUMxQyxZQUFJLEtBQU07QUFFVixrQkFBVSxRQUFRLE9BQU8sT0FBTyxrQkFBa0I7QUFDbEQsY0FBTSxFQUFFLFFBQVEsVUFBVSxJQUFJLGVBQWUsTUFBTTtBQUNuRCxpQkFBUztBQUVULG1CQUFXLFNBQVMsUUFBUTtBQUUxQixlQUFLLG1CQUFtQjtBQUV4QixjQUFJLE1BQU0sSUFBSTtBQUNaLGtCQUFNLFNBQVMsU0FBUyxNQUFNLElBQUksRUFBRTtBQUNwQyxnQkFBSSxDQUFDLE1BQU0sTUFBTSxHQUFHO0FBQ2xCLGtCQUFJLEtBQUssaUJBQWlCLElBQUksTUFBTSxHQUFHO0FBQ3JDO0FBQUEsa0JBQ0UscUNBQXFDLE1BQU0scUJBQXFCLEtBQUssZUFBZSxlQUFlLEtBQUssaUJBQWlCLElBQUk7QUFBQSxrQkFDN0gsRUFBRSxPQUFPLE9BQU87QUFBQSxnQkFDbEI7QUFDQSx1Q0FBdUIsUUFBUSw0QkFBNEI7QUFBQSxjQUM3RCxPQUFPO0FBQ0wscUJBQUssaUJBQWlCLElBQUksTUFBTTtBQUloQyxvQkFBSSxLQUFLLGlCQUFpQixPQUFPLEtBQU07QUFDckMsd0JBQU0sWUFBWSxLQUFLLGtCQUFrQjtBQUN6Qyw2QkFBVyxLQUFLLEtBQUssa0JBQWtCO0FBQ3JDLHdCQUFJLElBQUksV0FBVztBQUNqQiwyQkFBSyxpQkFBaUIsT0FBTyxDQUFDO0FBQUEsb0JBQ2hDO0FBQUEsa0JBQ0Y7QUFBQSxnQkFDRjtBQUFBLGNBQ0Y7QUFDQSxrQkFBSSxTQUFTLEtBQUssaUJBQWlCO0FBQ2pDLHFCQUFLLGtCQUFrQjtBQUFBLGNBQ3pCO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFFQSxjQUFJLE1BQU0sU0FBUyxNQUFNLE1BQU07QUFDN0IsaUJBQUssZUFBZSxNQUFNLE9BQU8sTUFBTSxJQUFJO0FBQUEsVUFDN0MsV0FBVyxNQUFNLE1BQU07QUFHckI7QUFBQSxjQUNFO0FBQUEsY0FDQSxFQUFFLE9BQU8sT0FBTztBQUFBLFlBQ2xCO0FBQ0EsbUNBQXVCLFFBQVEsbUNBQW1DO0FBQUEsVUFDcEU7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsU0FBUyxPQUFPO0FBQ2QsVUFBSSxLQUFLLGlCQUFpQixPQUFPLFFBQVM7QUFDMUM7QUFBQSxRQUNFLG9DQUFvQyxhQUFhLEtBQUssQ0FBQztBQUFBLFFBQ3ZELEVBQUUsT0FBTyxRQUFRO0FBQUEsTUFDbkI7QUFDQSw2QkFBdUIsU0FBUywyQkFBMkI7QUFBQSxJQUM3RCxVQUFFO0FBQ0EsYUFBTyxZQUFZO0FBQUEsSUFDckI7QUFHQSxRQUFJLEtBQUssVUFBVSxhQUFhLEtBQUssVUFBVSxVQUFVO0FBQ3ZELHNCQUFnQiwwQ0FBMEM7QUFDMUQsV0FBSyxzQkFBc0I7QUFBQSxJQUM3QjtBQUFBLEVBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFVUSxlQUFlLFdBQW1CLE1BQW9CO0FBQzVELFFBQUksY0FBYyxnQkFBZ0I7QUFDaEM7QUFBQSxRQUNFLDRDQUE0QyxTQUFTO0FBQUEsUUFDckQsRUFBRSxPQUFPLE9BQU87QUFBQSxNQUNsQjtBQUNBLDZCQUF1QixRQUFRLGlDQUFpQztBQUFBLFFBQzlELFlBQVk7QUFBQSxNQUNkLENBQUM7QUFDRDtBQUFBLElBQ0Y7QUFFQSxRQUFJO0FBQ0osUUFBSTtBQUNGLFdBQUssVUFBVSxJQUFJO0FBQUEsSUFDckIsU0FBUyxPQUFPO0FBQ2Q7QUFBQSxRQUNFLG9EQUFvRCxhQUFhLEtBQUssQ0FBQztBQUFBLFFBQ3ZFLEVBQUUsT0FBTyxRQUFRO0FBQUEsTUFDbkI7QUFDQTtBQUFBLElBQ0Y7QUFFQSxVQUFNLFVBQVUsR0FBRztBQUNuQixRQUFJLFdBQVcsT0FBTyxZQUFZLFlBQVksVUFBVSxTQUFTO0FBQy9ELFlBQU0sZUFBZSxLQUFLLFlBQVksWUFBWSxLQUFLLFNBQVMsS0FBSztBQUNyRTtBQUFBLFFBQ0UsMkJBQTJCLEdBQUcsWUFBWSxhQUFhLEdBQUcsUUFBUSxlQUFlLEdBQUcsVUFBVSxpQkFBaUIsT0FBTyxRQUFRLElBQUksQ0FBQyxHQUFHLFlBQVk7QUFBQSxNQUNwSjtBQUNBLDZCQUF1QixRQUFRLDBCQUEwQjtBQUd6RCxXQUFLLFNBQVMsY0FBYyxPQUFPLElBQUksSUFBSTtBQUFBLElBQzdDLE9BQU87QUFDTDtBQUFBLFFBQ0UseUVBQXlFLEdBQUcsUUFBUTtBQUFBLE1BQ3RGO0FBQUEsSUFDRjtBQUVBLFNBQUssa0JBQWtCLEVBQUU7QUFBQSxFQUMzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS1Esd0JBQThCO0FBQ3BDLFNBQUssbUJBQW1CO0FBRXhCLFFBQUksS0FBSyxVQUFVLGFBQWEsS0FBSyxVQUFVLFNBQVU7QUFHekQsU0FBSyxpQkFBaUIsTUFBTTtBQUM1QixTQUFLLGtCQUFrQjtBQUV2QixVQUFNLE1BQU0sS0FBSyxJQUFJO0FBQ3JCLFFBQUksQ0FBQyxLQUFLLG9CQUFvQjtBQUM1QixXQUFLLHFCQUFxQjtBQUFBLElBQzVCO0FBRUEsVUFBTSxVQUFVLE1BQU0sS0FBSztBQUMzQixRQUFJLFVBQVUsc0JBQXNCO0FBRWxDLFVBQUksS0FBSyxnQkFBZ0I7QUFDdkIscUJBQWEsS0FBSyxjQUFjO0FBQ2hDLGFBQUssaUJBQWlCO0FBQUEsTUFDeEI7QUFHQSxVQUFJLEtBQUssZ0JBQWdCO0FBQ3ZCLGNBQU0sZUFBZSxLQUFLLGVBQWU7QUFDekMsZUFBTyxPQUFPLEtBQUssU0FBUyxZQUFZO0FBQ3hDLHdCQUFnQiwrQ0FBK0M7QUFBQSxNQUNqRTtBQUVBLFdBQUssUUFBUTtBQUNiLFdBQUs7QUFFTCxZQUFNLFlBQVksS0FBSztBQUFBLFFBQ3JCLDBCQUEwQixLQUFLLElBQUksR0FBRyxLQUFLLG9CQUFvQixDQUFDO0FBQUEsUUFDaEU7QUFBQSxNQUNGO0FBRUEsWUFBTSxRQUFRLEtBQUs7QUFBQSxRQUNqQjtBQUFBLFFBQ0EsWUFBWSxZQUFZLFFBQVEsSUFBSSxLQUFLLE9BQU8sSUFBSTtBQUFBLE1BQ3REO0FBRUE7QUFBQSxRQUNFLGlDQUFpQyxLQUFLLE1BQU0sS0FBSyxDQUFDLGVBQWUsS0FBSyxpQkFBaUIsS0FBSyxLQUFLLE1BQU0sVUFBVSxHQUFJLENBQUM7QUFBQSxNQUN4SDtBQUNBLDZCQUF1QixTQUFTLDZCQUE2QjtBQUFBLFFBQzNELG1CQUFtQixLQUFLO0FBQUEsTUFDMUIsQ0FBQztBQUVELFdBQUssaUJBQWlCLFdBQVcsTUFBTTtBQUNyQyxhQUFLLGlCQUFpQjtBQUN0QixhQUFLLEtBQUssUUFBUTtBQUFBLE1BQ3BCLEdBQUcsS0FBSztBQUFBLElBQ1YsT0FBTztBQUNMO0FBQUEsUUFDRSwwREFBMEQsS0FBSyxNQUFNLFVBQVUsR0FBSSxDQUFDO0FBQUEsUUFDcEYsRUFBRSxPQUFPLFFBQVE7QUFBQSxNQUNuQjtBQUNBLDZCQUF1QixTQUFTLCtCQUErQjtBQUFBLFFBQzdELG1CQUFtQixLQUFLO0FBQUEsUUFDeEIsV0FBVztBQUFBLE1BQ2IsQ0FBQztBQUNELFdBQUssUUFBUTtBQUNiLFdBQUssa0JBQWtCO0FBQUEsSUFDekI7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT2lCLG9CQUFvQixNQUFZO0FBQy9DLFNBQUssZ0JBQWdCO0FBQ3JCLG9CQUFnQixnREFBZ0Q7QUFBQSxNQUM5RCxPQUFPO0FBQUEsSUFDVCxDQUFDO0FBQ0QsMkJBQXVCLFNBQVMsMEJBQTBCO0FBQzFELFNBQUssaUJBQWlCLE1BQU07QUFDNUIsU0FBSyxzQkFBc0I7QUFBQSxFQUM3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNUSxxQkFBMkI7QUFDakMsU0FBSyxtQkFBbUI7QUFDeEIsU0FBSyxnQkFBZ0IsV0FBVyxLQUFLLG1CQUFtQixtQkFBbUI7QUFBQSxFQUM3RTtBQUFBLEVBRVEscUJBQTJCO0FBQ2pDLFFBQUksS0FBSyxlQUFlO0FBQ3RCLG1CQUFhLEtBQUssYUFBYTtBQUMvQixXQUFLLGdCQUFnQjtBQUFBLElBQ3ZCO0FBQUEsRUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsTUFBTSxNQUFNLFNBQXVDO0FBQ2pELFVBQU0sY0FBYyxLQUFLLGVBQWU7QUFDeEMsUUFBSSxPQUFPLEtBQUssV0FBVyxFQUFFLFdBQVcsR0FBRztBQUN6QyxzQkFBZ0IsbURBQW1EO0FBQ25FLDZCQUF1QixRQUFRLHVCQUF1QjtBQUN0RDtBQUFBLElBQ0Y7QUFFQSxVQUFNLFVBQWtDO0FBQUEsTUFDdEMsR0FBRztBQUFBLE1BQ0gsZ0JBQWdCO0FBQUEsTUFDaEIscUJBQXFCO0FBQUEsTUFDckIsY0FBYyx1QkFBdUI7QUFBQSxJQUN2QztBQUVBO0FBQUEsTUFDRSxnQ0FBZ0MsT0FBTyxLQUFLLE9BQWtDLEVBQUUsS0FBSyxHQUFHLENBQUM7QUFBQSxJQUMzRjtBQUVBLGFBQVMsVUFBVSxHQUFHLFdBQVcsa0JBQWtCLFdBQVc7QUFDNUQsVUFBSTtBQUNGLGNBQU0sV0FBVyxNQUFNLGNBQU0sS0FBSyxLQUFLLFNBQVMsU0FBUztBQUFBLFVBQ3ZEO0FBQUEsVUFDQSxnQkFBZ0JBO0FBQUEsUUFDbEIsQ0FBQztBQUVELFlBQUksU0FBUyxXQUFXLE9BQU8sU0FBUyxXQUFXLEtBQUs7QUFDdEQsMEJBQWdCLG1DQUFtQyxRQUFRLElBQUksRUFBRTtBQUNqRTtBQUFBLFFBQ0Y7QUFFQTtBQUFBLFVBQ0Usc0JBQXNCLFNBQVMsTUFBTSxTQUFTLGNBQWMsU0FBUyxJQUFJLEVBQUUsTUFBTSxHQUFHLEdBQUcsQ0FBQztBQUFBLFFBQzFGO0FBRUEsWUFDRSxTQUFTLFVBQVUsT0FDbkIsU0FBUyxTQUFTLE9BQ2xCLFNBQVMsV0FBVyxLQUNwQjtBQUNBO0FBQUEsWUFDRSwrQkFBK0IsU0FBUyxNQUFNO0FBQUEsVUFDaEQ7QUFDQSxpQ0FBdUIsUUFBUSw2QkFBNkI7QUFBQSxZQUMxRCxRQUFRLFNBQVM7QUFBQSxVQUNuQixDQUFDO0FBQ0Q7QUFBQSxRQUNGO0FBR0E7QUFBQSxVQUNFLCtCQUErQixTQUFTLE1BQU0sYUFBYSxPQUFPLElBQUksZ0JBQWdCO0FBQUEsUUFDeEY7QUFDQSwrQkFBdUIsUUFBUSxnQ0FBZ0M7QUFBQSxVQUM3RCxRQUFRLFNBQVM7QUFBQSxVQUNqQjtBQUFBLFFBQ0YsQ0FBQztBQUFBLE1BQ0gsU0FBUyxPQUFPO0FBQ2QsY0FBTSxhQUFhO0FBQ25CO0FBQUEsVUFDRSw2QkFBNkIsV0FBVyxPQUFPLGFBQWEsT0FBTyxJQUFJLGdCQUFnQjtBQUFBLFFBQ3pGO0FBQ0EsK0JBQXVCLFFBQVEsOEJBQThCO0FBQUEsVUFDM0Q7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUNIO0FBRUEsVUFBSSxZQUFZLGtCQUFrQjtBQUNoQztBQUFBLFVBQ0UsbUNBQW1DLGdCQUFnQjtBQUFBLFFBQ3JEO0FBQ0EsK0JBQXVCLFFBQVEsZ0NBQWdDO0FBQy9EO0FBQUEsTUFDRjtBQUVBLFlBQU0sVUFBVSxLQUFLO0FBQUEsUUFDbkIscUJBQXFCLEtBQUssSUFBSSxHQUFHLFVBQVUsQ0FBQztBQUFBLFFBQzVDO0FBQUEsTUFDRjtBQUNBLFlBQU0sTUFBTSxPQUFPO0FBQUEsSUFDckI7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSxvQkFBNkI7QUFDM0IsV0FBTyxLQUFLLFVBQVU7QUFBQSxFQUN4QjtBQUFBLEVBRUEsaUJBQTBCO0FBQ3hCLFdBQU8sS0FBSyxVQUFVO0FBQUEsRUFDeEI7QUFBQSxFQUVBLFVBQVUsVUFBd0M7QUFDaEQsU0FBSyxTQUFTO0FBQUEsRUFDaEI7QUFBQSxFQUVBLFdBQVcsVUFBOEM7QUFDdkQsU0FBSyxrQkFBa0I7QUFBQSxFQUN6QjtBQUFBLEVBRUEsV0FBVyxVQUFvRDtBQUM3RCxTQUFLLGtCQUFrQjtBQUFBLEVBQ3pCO0FBQUEsRUFFQSxRQUFjO0FBQ1osUUFBSSxLQUFLLGdCQUFnQjtBQUN2QixtQkFBYSxLQUFLLGNBQWM7QUFDaEMsV0FBSyxpQkFBaUI7QUFBQSxJQUN4QjtBQUNBLFNBQUssbUJBQW1CO0FBRXhCLFNBQUssUUFBUTtBQUNiLFNBQUssaUJBQWlCLE1BQU07QUFDNUIsU0FBSyxrQkFBa0I7QUFBQSxFQUN6QjtBQUNGO0FBY0EsU0FBUyx1QkFBdUIsUUFBcUI7QUFDbkQsTUFBSSxXQUFXLE9BQU87QUFFdEIsTUFBSSxTQUFTLFNBQVMsU0FBUyxHQUFHO0FBQ2hDLGVBQVcsU0FBUyxNQUFNLEdBQUcsQ0FBQyxVQUFVLE1BQU07QUFBQSxFQUNoRDtBQUNBLFNBQU8sR0FBRyxPQUFPLFFBQVEsS0FBSyxPQUFPLElBQUksR0FBRyxRQUFRO0FBQ3REOyIsCiAgIm5hbWVzIjogWyJyZXNvbHZlIiwgImFsd2F5c1ZhbGlkU3RhdHVzIl0KfQo=
