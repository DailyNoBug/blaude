#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  DesktopHandoff,
  init_DesktopHandoff
} from "./chunk-RJJVAY4R.mjs";
import {
  init_OverageCreditUpsell,
  shouldShowOverageCreditUpsell
} from "./chunk-6DOUMYB2.mjs";
import {
  formatGrantAmount,
  getCachedOverageCreditGrant,
  init_overageCreditGrant
} from "./chunk-NSUS22JB.mjs";
import {
  OFFICIAL_MARKETPLACE_NAME,
  PermissionDialog,
  Select,
  countConcurrentSessions,
  detectRunningIDEsCached,
  fileHistoryEnabled,
  getCurrentSessionAgentColor,
  getEffortEnvOverride,
  getShortcutDisplay,
  getSortedIdeLockfiles,
  init_PermissionDialog,
  init_concurrentSessions,
  init_effort,
  init_fileHistory,
  init_ide,
  init_installedPluginsManager,
  init_marketplaceManager,
  init_officialMarketplace,
  init_prompt10 as init_prompt,
  init_select,
  init_sessionStorage,
  init_shortcutFormat,
  isCursorInstalled,
  isCustomTitleEnabled,
  isKairosCronEnabled,
  isPluginInstalled,
  isSupportedTerminal,
  isSupportedVSCodeTerminal,
  isVSCodeInstalled,
  isWindsurfInstalled,
  loadKnownMarketplacesConfigSafe,
  modelSupportsEffort
} from "./chunk-FMU4URRE.mjs";
import {
  checkCachedPassesEligibility,
  formatCreditAmount,
  getCachedReferrerReward,
  init_referral
} from "./chunk-Y2PD6CVC.mjs";
import {
  cacheKeys,
  init_fileStateCache
} from "./chunk-GYT5IJSH.mjs";
import {
  init_terminalSetup,
  shouldOfferTerminalSetup
} from "./chunk-H474P6P2.mjs";
import {
  init_api,
  sendEventToRemoteSession
} from "./chunk-L57KLZUF.mjs";
import {
  getTeamFilePath,
  init_teamHelpers,
  readTeamFile
} from "./chunk-IIPAGI5R.mjs";
import {
  ThemedBox_default,
  ThemedText,
  c,
  color,
  init_color,
  init_ink,
  init_react_compiler_runtime
} from "./chunk-HWTXKBLR.mjs";
import {
  createElement,
  init_react,
  useEffect,
  useState
} from "./chunk-TEJH3H3H.mjs";
import {
  getAPIProvider,
  getCurrentProjectConfig,
  getDynamicConfig_CACHED_MAY_BE_STALE,
  getFeatureValue_CACHED_MAY_BE_STALE,
  getGitEmail,
  getGlobalConfig,
  getInitialSettings,
  getMainLoopModel,
  getSettingsForSource,
  getSettings_DEPRECATED,
  getUserSpecifiedModelSetting,
  init_auth,
  init_config2 as init_config,
  init_growthbook,
  init_model,
  init_providers,
  init_sample,
  init_settings2 as init_settings,
  init_source,
  init_user,
  is1PApiCustomer,
  sample_default,
  saveCurrentProjectConfig,
  saveGlobalConfig,
  source_default
} from "./chunk-NKGQGSP5.mjs";
import {
  getWebSocketProxyAgent,
  getWebSocketProxyUrl,
  getWebSocketTLSOptions,
  init_mtls,
  init_proxy
} from "./chunk-DNXEQXI7.mjs";
import {
  getPlatform,
  init_platform
} from "./chunk-HGPSKCV5.mjs";
import {
  getDynamicTeamContext,
  init_teammate
} from "./chunk-GC6TKYZ3.mjs";
import {
  env,
  init_env
} from "./chunk-JOMSGAK7.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-MDXHK5AD.mjs";
import {
  getOauthConfig,
  init_oauth
} from "./chunk-JXCG2JDO.mjs";
import {
  getIsGit,
  getWorktreeCount,
  gitExe,
  init_git
} from "./chunk-7SC6PTLR.mjs";
import {
  execFileNoThrowWithCwd,
  init_execFileNoThrow
} from "./chunk-VNIROYYL.mjs";
import {
  getCwd,
  init_cwd
} from "./chunk-TZFTPSMG.mjs";
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import {
  errorMessage,
  init_debug,
  init_errors,
  init_slowOperations,
  jsonParse,
  jsonStringify,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import {
  init_memoize,
  memoize_default
} from "./chunk-AZFPZFFC.mjs";

// src/utils/exampleCommands.ts
init_memoize();
init_sample();
init_cwd();
init_config();
init_env();
init_execFileNoThrow();
init_git();
init_log();
init_user();
var NON_CORE_PATTERNS = [
  // lock / dependency manifests
  /(?:^|\/)(?:package-lock\.json|yarn\.lock|bun\.lock|bun\.lockb|pnpm-lock\.yaml|Pipfile\.lock|poetry\.lock|Cargo\.lock|Gemfile\.lock|go\.sum|composer\.lock|uv\.lock)$/,
  // generated / build artifacts
  /\.generated\./,
  /(?:^|\/)(?:dist|build|out|target|node_modules|\.next|__pycache__)\//,
  /\.(?:min\.js|min\.css|map|pyc|pyo)$/,
  // data / docs / config extensions (not "write a test for" material)
  /\.(?:json|ya?ml|toml|xml|ini|cfg|conf|env|lock|txt|md|mdx|rst|csv|log|svg)$/i,
  // configuration / metadata
  /(?:^|\/)\.?(?:eslintrc|prettierrc|babelrc|editorconfig|gitignore|gitattributes|dockerignore|npmrc)/,
  /(?:^|\/)(?:tsconfig|jsconfig|biome|vitest\.config|jest\.config|webpack\.config|vite\.config|rollup\.config)\.[a-z]+$/,
  /(?:^|\/)\.(?:github|vscode|idea|claude)\//,
  // docs / changelogs (not "how does X work" material)
  /(?:^|\/)(?:CHANGELOG|LICENSE|CONTRIBUTING|CODEOWNERS|README)(?:\.[a-z]+)?$/i
];
function isCoreFile(path) {
  return !NON_CORE_PATTERNS.some((p) => p.test(path));
}
function pickDiverseCoreFiles(sortedPaths, want) {
  const picked = [];
  const seenBasenames = /* @__PURE__ */ new Set();
  const dirTally = /* @__PURE__ */ new Map();
  for (let cap = 1; picked.length < want && cap <= want; cap++) {
    for (const p of sortedPaths) {
      if (picked.length >= want) break;
      if (!isCoreFile(p)) continue;
      const lastSep = Math.max(p.lastIndexOf("/"), p.lastIndexOf("\\"));
      const base = lastSep >= 0 ? p.slice(lastSep + 1) : p;
      if (!base || seenBasenames.has(base)) continue;
      const dir = lastSep >= 0 ? p.slice(0, lastSep) : ".";
      if ((dirTally.get(dir) ?? 0) >= cap) continue;
      picked.push(base);
      seenBasenames.add(base);
      dirTally.set(dir, (dirTally.get(dir) ?? 0) + 1);
    }
  }
  return picked.length >= want ? picked : [];
}
async function getFrequentlyModifiedFiles() {
  if (process.env.NODE_ENV === "test") return [];
  if (env.platform === "win32") return [];
  if (!await getIsGit()) return [];
  try {
    const userEmail = await getGitEmail();
    const logArgs = [
      "log",
      "-n",
      "1000",
      "--pretty=format:",
      "--name-only",
      "--diff-filter=M"
    ];
    const counts = /* @__PURE__ */ new Map();
    const tallyInto = (stdout) => {
      for (const line of stdout.split("\n")) {
        const f = line.trim();
        if (f) counts.set(f, (counts.get(f) ?? 0) + 1);
      }
    };
    if (userEmail) {
      const { stdout } = await execFileNoThrowWithCwd(
        "git",
        [...logArgs, `--author=${userEmail}`],
        { cwd: getCwd() }
      );
      tallyInto(stdout);
    }
    if (counts.size < 10) {
      const { stdout } = await execFileNoThrowWithCwd(gitExe(), logArgs, {
        cwd: getCwd()
      });
      tallyInto(stdout);
    }
    const sorted = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]).map(([p]) => p);
    return pickDiverseCoreFiles(sorted, 5);
  } catch (err) {
    logError(err);
    return [];
  }
}
var ONE_WEEK_IN_MS = 7 * 24 * 60 * 60 * 1e3;
var getExampleCommandFromCache = memoize_default(() => {
  const projectConfig = getCurrentProjectConfig();
  const frequentFile = projectConfig.exampleFiles?.length ? sample_default(projectConfig.exampleFiles) : "<filepath>";
  const commands = [
    "fix lint errors",
    "fix typecheck errors",
    `how does ${frequentFile} work?`,
    `refactor ${frequentFile}`,
    "how do I log an error?",
    `edit ${frequentFile} to...`,
    `write a test for ${frequentFile}`,
    "create a util logging.py that..."
  ];
  return `Try "${sample_default(commands)}"`;
});
var refreshExampleCommands = memoize_default(async () => {
  const projectConfig = getCurrentProjectConfig();
  const now = Date.now();
  const lastGenerated = projectConfig.exampleFilesGeneratedAt ?? 0;
  if (now - lastGenerated > ONE_WEEK_IN_MS) {
    projectConfig.exampleFiles = [];
  }
  if (!projectConfig.exampleFiles?.length) {
    void getFrequentlyModifiedFiles().then((files) => {
      if (files.length) {
        saveCurrentProjectConfig((current) => ({
          ...current,
          exampleFiles: files,
          exampleFilesGeneratedAt: Date.now()
        }));
      }
    });
  }
});

// src/remote/RemoteSessionManager.ts
init_debug();
init_log();
init_api();

// src/remote/SessionsWebSocket.ts
init_oauth();
init_debug();
init_errors();
init_log();
init_mtls();
init_proxy();
init_slowOperations();
import { randomUUID } from "crypto";
var RECONNECT_DELAY_MS = 2e3;
var MAX_RECONNECT_ATTEMPTS = 5;
var PING_INTERVAL_MS = 3e4;
var MAX_SESSION_NOT_FOUND_RETRIES = 3;
var PERMANENT_CLOSE_CODES = /* @__PURE__ */ new Set([
  4003
  // unauthorized
]);
function isSessionsMessage(value) {
  if (typeof value !== "object" || value === null || !("type" in value)) {
    return false;
  }
  return typeof value.type === "string";
}
var SessionsWebSocket = class {
  constructor(sessionId, orgUuid, getAccessToken, callbacks) {
    this.sessionId = sessionId;
    this.orgUuid = orgUuid;
    this.getAccessToken = getAccessToken;
    this.callbacks = callbacks;
  }
  ws = null;
  state = "closed";
  reconnectAttempts = 0;
  sessionNotFoundRetries = 0;
  pingInterval = null;
  reconnectTimer = null;
  /**
   * Connect to the sessions WebSocket endpoint
   */
  async connect() {
    if (this.state === "connecting") {
      logForDebugging("[SessionsWebSocket] Already connecting");
      return;
    }
    this.state = "connecting";
    const baseUrl = getOauthConfig().BASE_API_URL.replace("https://", "wss://");
    const url = `${baseUrl}/v1/sessions/ws/${this.sessionId}/subscribe?organization_uuid=${this.orgUuid}`;
    logForDebugging(`[SessionsWebSocket] Connecting to ${url}`);
    const accessToken = this.getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "anthropic-version": "2023-06-01"
    };
    if (typeof Bun !== "undefined") {
      const ws = new globalThis.WebSocket(url, {
        headers,
        proxy: getWebSocketProxyUrl(url),
        tls: getWebSocketTLSOptions() || void 0
      });
      this.ws = ws;
      ws.addEventListener("open", () => {
        logForDebugging(
          "[SessionsWebSocket] Connection opened, authenticated via headers"
        );
        this.state = "connected";
        this.reconnectAttempts = 0;
        this.sessionNotFoundRetries = 0;
        this.startPingInterval();
        this.callbacks.onConnected?.();
      });
      ws.addEventListener("message", (event) => {
        const data = typeof event.data === "string" ? event.data : String(event.data);
        this.handleMessage(data);
      });
      ws.addEventListener("error", () => {
        const err = new Error("[SessionsWebSocket] WebSocket error");
        logError(err);
        this.callbacks.onError?.(err);
      });
      ws.addEventListener("close", (event) => {
        logForDebugging(
          `[SessionsWebSocket] Closed: code=${event.code} reason=${event.reason}`
        );
        this.handleClose(event.code);
      });
      ws.addEventListener("pong", () => {
        logForDebugging("[SessionsWebSocket] Pong received");
      });
    } else {
      const { default: WS } = await import("./wrapper-U6YMRWUE.mjs");
      const ws = new WS(url, {
        headers,
        agent: getWebSocketProxyAgent(url),
        ...getWebSocketTLSOptions()
      });
      this.ws = ws;
      ws.on("open", () => {
        logForDebugging(
          "[SessionsWebSocket] Connection opened, authenticated via headers"
        );
        this.state = "connected";
        this.reconnectAttempts = 0;
        this.sessionNotFoundRetries = 0;
        this.startPingInterval();
        this.callbacks.onConnected?.();
      });
      ws.on("message", (data) => {
        this.handleMessage(data.toString());
      });
      ws.on("error", (err) => {
        logError(new Error(`[SessionsWebSocket] Error: ${err.message}`));
        this.callbacks.onError?.(err);
      });
      ws.on("close", (code, reason) => {
        logForDebugging(
          `[SessionsWebSocket] Closed: code=${code} reason=${reason.toString()}`
        );
        this.handleClose(code);
      });
      ws.on("pong", () => {
        logForDebugging("[SessionsWebSocket] Pong received");
      });
    }
  }
  /**
   * Handle incoming WebSocket message
   */
  handleMessage(data) {
    try {
      const message = jsonParse(data);
      if (isSessionsMessage(message)) {
        this.callbacks.onMessage(message);
      } else {
        logForDebugging(
          `[SessionsWebSocket] Ignoring message type: ${typeof message === "object" && message !== null && "type" in message ? String(message.type) : "unknown"}`
        );
      }
    } catch (error) {
      logError(
        new Error(
          `[SessionsWebSocket] Failed to parse message: ${errorMessage(error)}`
        )
      );
    }
  }
  /**
   * Handle WebSocket close
   */
  handleClose(closeCode) {
    this.stopPingInterval();
    if (this.state === "closed") {
      return;
    }
    this.ws = null;
    const previousState = this.state;
    this.state = "closed";
    if (PERMANENT_CLOSE_CODES.has(closeCode)) {
      logForDebugging(
        `[SessionsWebSocket] Permanent close code ${closeCode}, not reconnecting`
      );
      this.callbacks.onClose?.();
      return;
    }
    if (closeCode === 4001) {
      this.sessionNotFoundRetries++;
      if (this.sessionNotFoundRetries > MAX_SESSION_NOT_FOUND_RETRIES) {
        logForDebugging(
          `[SessionsWebSocket] 4001 retry budget exhausted (${MAX_SESSION_NOT_FOUND_RETRIES}), not reconnecting`
        );
        this.callbacks.onClose?.();
        return;
      }
      this.scheduleReconnect(
        RECONNECT_DELAY_MS * this.sessionNotFoundRetries,
        `4001 attempt ${this.sessionNotFoundRetries}/${MAX_SESSION_NOT_FOUND_RETRIES}`
      );
      return;
    }
    if (previousState === "connected" && this.reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
      this.reconnectAttempts++;
      this.scheduleReconnect(
        RECONNECT_DELAY_MS,
        `attempt ${this.reconnectAttempts}/${MAX_RECONNECT_ATTEMPTS}`
      );
    } else {
      logForDebugging("[SessionsWebSocket] Not reconnecting");
      this.callbacks.onClose?.();
    }
  }
  scheduleReconnect(delay, label) {
    this.callbacks.onReconnecting?.();
    logForDebugging(
      `[SessionsWebSocket] Scheduling reconnect (${label}) in ${delay}ms`
    );
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null;
      void this.connect();
    }, delay);
  }
  startPingInterval() {
    this.stopPingInterval();
    this.pingInterval = setInterval(() => {
      if (this.ws && this.state === "connected") {
        try {
          this.ws.ping?.();
        } catch {
        }
      }
    }, PING_INTERVAL_MS);
  }
  /**
   * Stop ping interval
   */
  stopPingInterval() {
    if (this.pingInterval) {
      clearInterval(this.pingInterval);
      this.pingInterval = null;
    }
  }
  /**
   * Send a control response back to the session
   */
  sendControlResponse(response) {
    if (!this.ws || this.state !== "connected") {
      logError(new Error("[SessionsWebSocket] Cannot send: not connected"));
      return;
    }
    logForDebugging("[SessionsWebSocket] Sending control response");
    this.ws.send(jsonStringify(response));
  }
  /**
   * Send a control request to the session (e.g., interrupt)
   */
  sendControlRequest(request) {
    if (!this.ws || this.state !== "connected") {
      logError(new Error("[SessionsWebSocket] Cannot send: not connected"));
      return;
    }
    const controlRequest = {
      type: "control_request",
      request_id: randomUUID(),
      request
    };
    logForDebugging(
      `[SessionsWebSocket] Sending control request: ${request.subtype}`
    );
    this.ws.send(jsonStringify(controlRequest));
  }
  /**
   * Check if connected
   */
  isConnected() {
    return this.state === "connected";
  }
  /**
   * Close the WebSocket connection
   */
  close() {
    logForDebugging("[SessionsWebSocket] Closing connection");
    this.state = "closed";
    this.stopPingInterval();
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }
  /**
   * Force reconnect - closes existing connection and establishes a new one.
   * Useful when the subscription becomes stale (e.g., after container shutdown).
   */
  reconnect() {
    logForDebugging("[SessionsWebSocket] Force reconnecting");
    this.reconnectAttempts = 0;
    this.sessionNotFoundRetries = 0;
    this.close();
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null;
      void this.connect();
    }, 500);
  }
};

// src/remote/RemoteSessionManager.ts
function isSDKMessage(message) {
  return message.type !== "control_request" && message.type !== "control_response" && message.type !== "control_cancel_request";
}
var RemoteSessionManager = class {
  constructor(config, callbacks) {
    this.config = config;
    this.callbacks = callbacks;
  }
  websocket = null;
  pendingPermissionRequests = /* @__PURE__ */ new Map();
  /**
   * Connect to the remote session via WebSocket
   */
  connect() {
    logForDebugging(
      `[RemoteSessionManager] Connecting to session ${this.config.sessionId}`
    );
    const wsCallbacks = {
      onMessage: (message) => this.handleMessage(message),
      onConnected: () => {
        logForDebugging("[RemoteSessionManager] Connected");
        this.callbacks.onConnected?.();
      },
      onClose: () => {
        logForDebugging("[RemoteSessionManager] Disconnected");
        this.callbacks.onDisconnected?.();
      },
      onReconnecting: () => {
        logForDebugging("[RemoteSessionManager] Reconnecting");
        this.callbacks.onReconnecting?.();
      },
      onError: (error) => {
        logError(error);
        this.callbacks.onError?.(error);
      }
    };
    this.websocket = new SessionsWebSocket(
      this.config.sessionId,
      this.config.orgUuid,
      this.config.getAccessToken,
      wsCallbacks
    );
    void this.websocket.connect();
  }
  /**
   * Handle messages from WebSocket
   */
  handleMessage(message) {
    if (message.type === "control_request") {
      this.handleControlRequest(message);
      return;
    }
    if (message.type === "control_cancel_request") {
      const { request_id } = message;
      const pendingRequest = this.pendingPermissionRequests.get(request_id);
      logForDebugging(
        `[RemoteSessionManager] Permission request cancelled: ${request_id}`
      );
      this.pendingPermissionRequests.delete(request_id);
      this.callbacks.onPermissionCancelled?.(
        request_id,
        pendingRequest?.tool_use_id
      );
      return;
    }
    if (message.type === "control_response") {
      logForDebugging("[RemoteSessionManager] Received control response");
      return;
    }
    if (isSDKMessage(message)) {
      this.callbacks.onMessage(message);
    }
  }
  /**
   * Handle control requests from CCR (e.g., permission requests)
   */
  handleControlRequest(request) {
    const { request_id, request: inner } = request;
    if (inner.subtype === "can_use_tool") {
      logForDebugging(
        `[RemoteSessionManager] Permission request for tool: ${inner.tool_name}`
      );
      this.pendingPermissionRequests.set(request_id, inner);
      this.callbacks.onPermissionRequest(inner, request_id);
    } else {
      logForDebugging(
        `[RemoteSessionManager] Unsupported control request subtype: ${inner.subtype}`
      );
      const response = {
        type: "control_response",
        response: {
          subtype: "error",
          request_id,
          error: `Unsupported control request subtype: ${inner.subtype}`
        }
      };
      this.websocket?.sendControlResponse(response);
    }
  }
  /**
   * Send a user message to the remote session via HTTP POST
   */
  async sendMessage(content, opts) {
    logForDebugging(
      `[RemoteSessionManager] Sending message to session ${this.config.sessionId}`
    );
    const success = await sendEventToRemoteSession(
      this.config.sessionId,
      content,
      opts
    );
    if (!success) {
      logError(
        new Error(
          `[RemoteSessionManager] Failed to send message to session ${this.config.sessionId}`
        )
      );
    }
    return success;
  }
  /**
   * Respond to a permission request from CCR
   */
  respondToPermissionRequest(requestId, result) {
    const pendingRequest = this.pendingPermissionRequests.get(requestId);
    if (!pendingRequest) {
      logError(
        new Error(
          `[RemoteSessionManager] No pending permission request with ID: ${requestId}`
        )
      );
      return;
    }
    this.pendingPermissionRequests.delete(requestId);
    const response = {
      type: "control_response",
      response: {
        subtype: "success",
        request_id: requestId,
        response: {
          behavior: result.behavior,
          ...result.behavior === "allow" ? { updatedInput: result.updatedInput } : { message: result.message }
        }
      }
    };
    logForDebugging(
      `[RemoteSessionManager] Sending permission response: ${result.behavior}`
    );
    this.websocket?.sendControlResponse(response);
  }
  /**
   * Check if connected to the remote session
   */
  isConnected() {
    return this.websocket?.isConnected() ?? false;
  }
  /**
   * Send an interrupt signal to cancel the current request on the remote session
   */
  cancelSession() {
    logForDebugging("[RemoteSessionManager] Sending interrupt signal");
    this.websocket?.sendControlRequest({ subtype: "interrupt" });
  }
  /**
   * Get the session ID
   */
  getSessionId() {
    return this.config.sessionId;
  }
  /**
   * Disconnect from the remote session
   */
  disconnect() {
    logForDebugging("[RemoteSessionManager] Disconnecting");
    this.websocket?.close();
    this.websocket = null;
    this.pendingPermissionRequests.clear();
  }
  /**
   * Force reconnect the WebSocket.
   * Useful when the subscription becomes stale after container shutdown.
   */
  reconnect() {
    logForDebugging("[RemoteSessionManager] Reconnecting WebSocket");
    this.websocket?.reconnect();
  }
};
function createRemoteSessionConfig(sessionId, getAccessToken, orgUuid, hasInitialPrompt = false, viewerOnly = false) {
  return {
    sessionId,
    getAccessToken,
    orgUuid,
    hasInitialPrompt,
    viewerOnly
  };
}

// src/utils/swarm/reconnection.ts
init_debug();
init_log();
init_teammate();
init_teamHelpers();
function computeInitialTeamContext() {
  const context = getDynamicTeamContext();
  if (!context?.teamName || !context?.agentName) {
    logForDebugging(
      "[Reconnection] computeInitialTeamContext: No teammate context set (not a teammate)"
    );
    return void 0;
  }
  const { teamName, agentId, agentName } = context;
  const teamFile = readTeamFile(teamName);
  if (!teamFile) {
    logError(
      new Error(
        `[computeInitialTeamContext] Could not read team file for ${teamName}`
      )
    );
    return void 0;
  }
  const teamFilePath = getTeamFilePath(teamName);
  const isLeader = !agentId;
  logForDebugging(
    `[Reconnection] Computed initial team context for ${isLeader ? "leader" : `teammate ${agentName}`} in team ${teamName}`
  );
  return {
    teamName,
    teamFilePath,
    leadAgentId: teamFile.leadAgentId,
    selfAgentId: agentId,
    selfAgentName: agentName,
    isLeader,
    teammates: {}
  };
}
function initializeTeammateContextFromSession(setAppState, teamName, agentName) {
  const teamFile = readTeamFile(teamName);
  if (!teamFile) {
    logError(
      new Error(
        `[initializeTeammateContextFromSession] Could not read team file for ${teamName} (agent: ${agentName})`
      )
    );
    return;
  }
  const member = teamFile.members.find((m) => m.name === agentName);
  if (!member) {
    logForDebugging(
      `[Reconnection] Member ${agentName} not found in team ${teamName} - may have been removed`
    );
  }
  const agentId = member?.agentId;
  const teamFilePath = getTeamFilePath(teamName);
  setAppState((prev) => ({
    ...prev,
    teamContext: {
      teamName,
      teamFilePath,
      leadAgentId: teamFile.leadAgentId,
      selfAgentId: agentId,
      selfAgentName: agentName,
      isLeader: false,
      teammates: {}
    }
  }));
  logForDebugging(
    `[Reconnection] Initialized agent context from session for ${agentName} in team ${teamName}`
  );
}

// src/components/DesktopUpsell/DesktopUpsellStartup.tsx
init_react_compiler_runtime();
init_react();
init_react();
init_ink();
init_growthbook();
init_analytics();
init_config();
init_select();
init_DesktopHandoff();
init_PermissionDialog();
var DESKTOP_UPSELL_DEFAULT = {
  enable_shortcut_tip: false,
  enable_startup_dialog: false
};
function getDesktopUpsellConfig() {
  return getDynamicConfig_CACHED_MAY_BE_STALE("tengu_desktop_upsell", DESKTOP_UPSELL_DEFAULT);
}
function isSupportedPlatform() {
  return process.platform === "darwin" || process.platform === "win32" && process.arch === "x64";
}
function shouldShowDesktopUpsellStartup() {
  if (!isSupportedPlatform()) return false;
  if (!getDesktopUpsellConfig().enable_startup_dialog) return false;
  const config = getGlobalConfig();
  if (config.desktopUpsellDismissed) return false;
  if ((config.desktopUpsellSeenCount ?? 0) >= 3) return false;
  return true;
}
function DesktopUpsellStartup(t0) {
  const $ = c(14);
  const {
    onDone
  } = t0;
  const [showHandoff, setShowHandoff] = useState(false);
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = [];
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  useEffect(_temp, t1);
  if (showHandoff) {
    let t22;
    if ($[1] !== onDone) {
      t22 = /* @__PURE__ */ createElement(DesktopHandoff, { onDone: () => onDone() });
      $[1] = onDone;
      $[2] = t22;
    } else {
      t22 = $[2];
    }
    return t22;
  }
  let t2;
  if ($[3] !== onDone) {
    t2 = function handleSelect2(value) {
      switch (value) {
        case "try": {
          setShowHandoff(true);
          return;
        }
        case "never": {
          saveGlobalConfig(_temp2);
          onDone();
          return;
        }
        case "not-now": {
          onDone();
          return;
        }
      }
    };
    $[3] = onDone;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  const handleSelect = t2;
  let t3;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = {
      label: "Open in Blaude Desktop",
      value: "try"
    };
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = {
      label: "Not now",
      value: "not-now"
    };
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = [t3, t4, {
      label: "Don't ask again",
      value: "never"
    }];
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  const options = t5;
  let t6;
  if ($[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, null, "Same Blaude with visual diffs, live app preview, parallel sessions, and more."));
    $[8] = t6;
  } else {
    t6 = $[8];
  }
  let t7;
  if ($[9] !== handleSelect) {
    t7 = () => handleSelect("not-now");
    $[9] = handleSelect;
    $[10] = t7;
  } else {
    t7 = $[10];
  }
  let t8;
  if ($[11] !== handleSelect || $[12] !== t7) {
    t8 = /* @__PURE__ */ createElement(PermissionDialog, { title: "Try Blaude Desktop" }, /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", paddingX: 2, paddingY: 1 }, t6, /* @__PURE__ */ createElement(Select, { options, onChange: handleSelect, onCancel: t7 })));
    $[11] = handleSelect;
    $[12] = t7;
    $[13] = t8;
  } else {
    t8 = $[13];
  }
  return t8;
}
function _temp2(prev_0) {
  if (prev_0.desktopUpsellDismissed) {
    return prev_0;
  }
  return {
    ...prev_0,
    desktopUpsellDismissed: true
  };
}
function _temp() {
  const newCount = (getGlobalConfig().desktopUpsellSeenCount ?? 0) + 1;
  saveGlobalConfig((prev) => {
    if ((prev.desktopUpsellSeenCount ?? 0) >= newCount) {
      return prev;
    }
    return {
      ...prev,
      desktopUpsellSeenCount: newCount
    };
  });
  logEvent("tengu_desktop_upsell_shown", {
    seen_count: newCount
  });
}

// src/services/tips/tipRegistry.ts
init_source();
init_debug();
init_fileHistory();
init_settings();
init_terminalSetup();
init_color();
init_OverageCreditUpsell();
init_shortcutFormat();
init_prompt();
init_auth();
init_concurrentSessions();
init_config();
init_effort();
init_env();
init_fileStateCache();
init_git();
init_ide();
init_model();
init_platform();
init_installedPluginsManager();
init_marketplaceManager();
init_officialMarketplace();
init_sessionStorage();
init_growthbook();
init_overageCreditGrant();
init_referral();

// src/services/tips/tipHistory.ts
init_config();
function recordTipShown(tipId) {
  const numStartups = getGlobalConfig().numStartups;
  saveGlobalConfig((c2) => {
    const history = c2.tipsHistory ?? {};
    if (history[tipId] === numStartups) return c2;
    return { ...c2, tipsHistory: { ...history, [tipId]: numStartups } };
  });
}
function getSessionsSinceLastShown(tipId) {
  const config = getGlobalConfig();
  const lastShown = config.tipsHistory?.[tipId];
  if (!lastShown) return Infinity;
  return config.numStartups - lastShown;
}

// src/services/tips/tipRegistry.ts
var _isOfficialMarketplaceInstalledCache;
async function isOfficialMarketplaceInstalled() {
  if (_isOfficialMarketplaceInstalledCache !== void 0) {
    return _isOfficialMarketplaceInstalledCache;
  }
  const config = await loadKnownMarketplacesConfigSafe();
  _isOfficialMarketplaceInstalledCache = OFFICIAL_MARKETPLACE_NAME in config;
  return _isOfficialMarketplaceInstalledCache;
}
async function isMarketplacePluginRelevant(pluginName, context, signals) {
  if (!await isOfficialMarketplaceInstalled()) {
    return false;
  }
  if (isPluginInstalled(`${pluginName}@${OFFICIAL_MARKETPLACE_NAME}`)) {
    return false;
  }
  const { bashTools } = context ?? {};
  if (signals.cli && bashTools?.size) {
    if (signals.cli.some((cmd) => bashTools.has(cmd))) {
      return true;
    }
  }
  if (signals.filePath && context?.readFileState) {
    const readFiles = cacheKeys(context.readFileState);
    if (readFiles.some((fp) => signals.filePath.test(fp))) {
      return true;
    }
  }
  return false;
}
var externalTips = [
  {
    id: "new-user-warmup",
    content: async () => `Start with small features or bug fixes, tell Blaude to propose a plan, and verify its suggested edits`,
    cooldownSessions: 3,
    async isRelevant() {
      const config = getGlobalConfig();
      return config.numStartups < 10;
    }
  },
  {
    id: "plan-mode-for-complex-tasks",
    content: async () => `Use Plan Mode to prepare for a complex request before making changes. Press ${getShortcutDisplay("chat:cycleMode", "Chat", "shift+tab")} twice to enable.`,
    cooldownSessions: 5,
    isRelevant: async () => {
      if (process.env.USER_TYPE === "ant") return false;
      const config = getGlobalConfig();
      const daysSinceLastUse = config.lastPlanModeUse ? (Date.now() - config.lastPlanModeUse) / (1e3 * 60 * 60 * 24) : Infinity;
      return daysSinceLastUse > 7;
    }
  },
  {
    id: "default-permission-mode-config",
    content: async () => `Use /config to change your default permission mode (including Plan Mode)`,
    cooldownSessions: 10,
    isRelevant: async () => {
      try {
        const config = getGlobalConfig();
        const settings = getSettings_DEPRECATED();
        const hasUsedPlanMode = Boolean(config.lastPlanModeUse);
        const hasDefaultMode = Boolean(settings?.permissions?.defaultMode);
        return hasUsedPlanMode && !hasDefaultMode;
      } catch (error) {
        logForDebugging(
          `Failed to check default-permission-mode-config tip relevance: ${error}`,
          { level: "warn" }
        );
        return false;
      }
    }
  },
  {
    id: "git-worktrees",
    content: async () => "Use git worktrees to run multiple Claude sessions in parallel.",
    cooldownSessions: 10,
    isRelevant: async () => {
      try {
        const config = getGlobalConfig();
        const worktreeCount = await getWorktreeCount();
        return worktreeCount <= 1 && config.numStartups > 50;
      } catch (_) {
        return false;
      }
    }
  },
  {
    id: "color-when-multi-clauding",
    content: async () => "Running multiple Claude sessions? Use /color and /rename to tell them apart at a glance.",
    cooldownSessions: 10,
    isRelevant: async () => {
      if (getCurrentSessionAgentColor()) return false;
      const count = await countConcurrentSessions();
      return count >= 2;
    }
  },
  {
    id: "terminal-setup",
    content: async () => env.terminal === "Apple_Terminal" ? "Run /terminal-setup to enable convenient terminal integration like Option + Enter for new line and more" : "Run /terminal-setup to enable convenient terminal integration like Shift + Enter for new line and more",
    cooldownSessions: 10,
    async isRelevant() {
      const config = getGlobalConfig();
      if (env.terminal === "Apple_Terminal") {
        return !config.optionAsMetaKeyInstalled;
      }
      return !config.shiftEnterKeyBindingInstalled;
    }
  },
  {
    id: "shift-enter",
    content: async () => env.terminal === "Apple_Terminal" ? "Press Option+Enter to send a multi-line message" : "Press Shift+Enter to send a multi-line message",
    cooldownSessions: 10,
    async isRelevant() {
      const config = getGlobalConfig();
      return Boolean(
        (env.terminal === "Apple_Terminal" ? config.optionAsMetaKeyInstalled : config.shiftEnterKeyBindingInstalled) && config.numStartups > 3
      );
    }
  },
  {
    id: "shift-enter-setup",
    content: async () => env.terminal === "Apple_Terminal" ? "Run /terminal-setup to enable Option+Enter for new lines" : "Run /terminal-setup to enable Shift+Enter for new lines",
    cooldownSessions: 10,
    async isRelevant() {
      if (!shouldOfferTerminalSetup()) {
        return false;
      }
      const config = getGlobalConfig();
      return !(env.terminal === "Apple_Terminal" ? config.optionAsMetaKeyInstalled : config.shiftEnterKeyBindingInstalled);
    }
  },
  {
    id: "memory-command",
    content: async () => "Use /memory to view and manage Claude memory",
    cooldownSessions: 15,
    async isRelevant() {
      const config = getGlobalConfig();
      return config.memoryUsageCount <= 0;
    }
  },
  {
    id: "theme-command",
    content: async () => "Use /theme to change the color theme",
    cooldownSessions: 20,
    isRelevant: async () => true
  },
  {
    id: "colorterm-truecolor",
    content: async () => "Try setting environment variable COLORTERM=truecolor for richer colors",
    cooldownSessions: 30,
    isRelevant: async () => !process.env.COLORTERM && source_default.level < 3
  },
  {
    id: "powershell-tool-env",
    content: async () => "Set CLAUDE_CODE_USE_POWERSHELL_TOOL=1 to enable the PowerShell tool (preview)",
    cooldownSessions: 10,
    isRelevant: async () => getPlatform() === "windows" && process.env.CLAUDE_CODE_USE_POWERSHELL_TOOL === void 0
  },
  {
    id: "status-line",
    content: async () => "Use /statusline to set up a custom status line that will display beneath the input box",
    cooldownSessions: 25,
    isRelevant: async () => getSettings_DEPRECATED().statusLine === void 0
  },
  {
    id: "prompt-queue",
    content: async () => "Hit Enter to queue up additional messages while Claude is working.",
    cooldownSessions: 5,
    async isRelevant() {
      const config = getGlobalConfig();
      return config.promptQueueUseCount <= 3;
    }
  },
  {
    id: "enter-to-steer-in-relatime",
    content: async () => "Send messages to Claude while it works to steer Claude in real-time",
    cooldownSessions: 20,
    isRelevant: async () => true
  },
  {
    id: "todo-list",
    content: async () => "Ask Claude to create a todo list when working on complex tasks to track progress and remain on track",
    cooldownSessions: 20,
    isRelevant: async () => true
  },
  {
    id: "vscode-command-install",
    content: async () => `Open the Command Palette (Cmd+Shift+P) and run "Shell Command: Install '${env.terminal === "vscode" ? "code" : env.terminal}' command in PATH" to enable IDE integration`,
    cooldownSessions: 0,
    async isRelevant() {
      if (!isSupportedVSCodeTerminal()) {
        return false;
      }
      if (getPlatform() !== "macos") {
        return false;
      }
      switch (env.terminal) {
        case "vscode":
          return !await isVSCodeInstalled();
        case "cursor":
          return !await isCursorInstalled();
        case "windsurf":
          return !await isWindsurfInstalled();
        default:
          return false;
      }
    }
  },
  {
    id: "ide-upsell-external-terminal",
    content: async () => "Connect Claude to your IDE \xB7 /ide",
    cooldownSessions: 4,
    async isRelevant() {
      if (isSupportedTerminal()) {
        return false;
      }
      const lockfiles = await getSortedIdeLockfiles();
      if (lockfiles.length !== 0) {
        return false;
      }
      const runningIDEs = await detectRunningIDEsCached();
      return runningIDEs.length > 0;
    }
  },
  {
    id: "install-github-app",
    content: async () => "Run /install-github-app to tag @claude right from your Github issues and PRs",
    cooldownSessions: 10,
    isRelevant: async () => !getGlobalConfig().githubActionSetupCount
  },
  {
    id: "install-slack-app",
    content: async () => "Run /install-slack-app to use Claude in Slack",
    cooldownSessions: 10,
    isRelevant: async () => !getGlobalConfig().slackAppInstallCount
  },
  {
    id: "permissions",
    content: async () => "Use /permissions to pre-approve and pre-deny bash, edit, and MCP tools",
    cooldownSessions: 10,
    async isRelevant() {
      const config = getGlobalConfig();
      return config.numStartups > 10;
    }
  },
  {
    id: "drag-and-drop-images",
    content: async () => "Did you know you can drag and drop image files into your terminal?",
    cooldownSessions: 10,
    isRelevant: async () => !env.isSSH()
  },
  {
    id: "paste-images-mac",
    content: async () => "Paste images into Blaude using control+v (not cmd+v!)",
    cooldownSessions: 10,
    isRelevant: async () => getPlatform() === "macos"
  },
  {
    id: "double-esc",
    content: async () => "Double-tap esc to rewind the conversation to a previous point in time",
    cooldownSessions: 10,
    isRelevant: async () => !fileHistoryEnabled()
  },
  {
    id: "double-esc-code-restore",
    content: async () => "Double-tap esc to rewind the code and/or conversation to a previous point in time",
    cooldownSessions: 10,
    isRelevant: async () => fileHistoryEnabled()
  },
  {
    id: "continue",
    content: async () => "Run blaude --continue or blaude --resume to resume a conversation",
    cooldownSessions: 10,
    isRelevant: async () => true
  },
  {
    id: "rename-conversation",
    content: async () => "Name your conversations with /rename to find them easily in /resume later",
    cooldownSessions: 15,
    isRelevant: async () => isCustomTitleEnabled() && getGlobalConfig().numStartups > 10
  },
  {
    id: "custom-commands",
    content: async () => "Create skills by adding .md files to .claude/skills/ in your project or ~/.claude/skills/ for skills that work in any project",
    cooldownSessions: 15,
    async isRelevant() {
      const config = getGlobalConfig();
      return config.numStartups > 10;
    }
  },
  {
    id: "shift-tab",
    content: async () => process.env.USER_TYPE === "ant" ? `Hit ${getShortcutDisplay("chat:cycleMode", "Chat", "shift+tab")} to cycle between default mode and auto mode` : `Hit ${getShortcutDisplay("chat:cycleMode", "Chat", "shift+tab")} to cycle between default mode, auto-accept edit mode, and plan mode`,
    cooldownSessions: 10,
    isRelevant: async () => true
  },
  {
    id: "image-paste",
    content: async () => `Use ${getShortcutDisplay("chat:imagePaste", "Chat", "ctrl+v")} to paste images from your clipboard`,
    cooldownSessions: 20,
    isRelevant: async () => true
  },
  {
    id: "custom-agents",
    content: async () => "Use /agents to optimize specific tasks. Eg. Software Architect, Code Writer, Code Reviewer",
    cooldownSessions: 15,
    async isRelevant() {
      const config = getGlobalConfig();
      return config.numStartups > 5;
    }
  },
  {
    id: "agent-flag",
    content: async () => "Use --agent <agent_name> to directly start a conversation with a subagent",
    cooldownSessions: 15,
    async isRelevant() {
      const config = getGlobalConfig();
      return config.numStartups > 5;
    }
  },
  {
    id: "desktop-app",
    content: async () => "Run Blaude locally or remotely using the Blaude desktop app: clau.de/desktop",
    cooldownSessions: 15,
    isRelevant: async () => getPlatform() !== "linux"
  },
  {
    id: "desktop-shortcut",
    content: async (ctx) => {
      const blue = color("suggestion", ctx.theme);
      return `Continue your session in Blaude Desktop with ${blue("/desktop")}`;
    },
    cooldownSessions: 15,
    isRelevant: async () => {
      if (!getDesktopUpsellConfig().enable_shortcut_tip) return false;
      return process.platform === "darwin" || process.platform === "win32" && process.arch === "x64";
    }
  },
  {
    id: "web-app",
    content: async () => "Run tasks in the cloud while you keep coding locally \xB7 clau.de/web",
    cooldownSessions: 15,
    isRelevant: async () => true
  },
  {
    id: "mobile-app",
    content: async () => "/mobile to use Blaude from the Blaude app on your phone",
    cooldownSessions: 15,
    isRelevant: async () => true
  },
  {
    id: "opusplan-mode-reminder",
    content: async () => `Your default model setting is Opus Plan Mode. Press ${getShortcutDisplay("chat:cycleMode", "Chat", "shift+tab")} twice to activate Plan Mode and plan with Blaude Opus.`,
    cooldownSessions: 2,
    async isRelevant() {
      if (process.env.USER_TYPE === "ant") return false;
      const config = getGlobalConfig();
      const modelSetting = getUserSpecifiedModelSetting();
      const hasOpusPlanMode = modelSetting === "opusplan";
      const daysSinceLastUse = config.lastPlanModeUse ? (Date.now() - config.lastPlanModeUse) / (1e3 * 60 * 60 * 24) : Infinity;
      return hasOpusPlanMode && daysSinceLastUse > 3;
    }
  },
  {
    id: "frontend-design-plugin",
    content: async (ctx) => {
      const blue = color("suggestion", ctx.theme);
      return `Working with HTML/CSS? Install the frontend-design plugin:
${blue(`/plugin install frontend-design@${OFFICIAL_MARKETPLACE_NAME}`)}`;
    },
    cooldownSessions: 3,
    isRelevant: async (context) => isMarketplacePluginRelevant("frontend-design", context, {
      filePath: /\.(html|css|htm)$/i
    })
  },
  {
    id: "vercel-plugin",
    content: async (ctx) => {
      const blue = color("suggestion", ctx.theme);
      return `Working with Vercel? Install the vercel plugin:
${blue(`/plugin install vercel@${OFFICIAL_MARKETPLACE_NAME}`)}`;
    },
    cooldownSessions: 3,
    isRelevant: async (context) => isMarketplacePluginRelevant("vercel", context, {
      filePath: /(?:^|[/\\])vercel\.json$/i,
      cli: ["vercel"]
    })
  },
  {
    id: "effort-high-nudge",
    content: async (ctx) => {
      const blue = color("suggestion", ctx.theme);
      const cmd = blue("/effort high");
      const variant = getFeatureValue_CACHED_MAY_BE_STALE("tengu_tide_elm", "off");
      return variant === "copy_b" ? `Use ${cmd} for better one-shot answers. Blaude thinks it through first.` : `Working on something tricky? ${cmd} gives better first answers`;
    },
    cooldownSessions: 3,
    isRelevant: async () => {
      if (!is1PApiCustomer()) return false;
      if (!modelSupportsEffort(getMainLoopModel())) return false;
      if (getSettingsForSource("policySettings")?.effortLevel !== void 0) {
        return false;
      }
      if (getEffortEnvOverride() !== void 0) return false;
      const persisted = getInitialSettings().effortLevel;
      if (persisted === "high" || persisted === "max") return false;
      return getFeatureValue_CACHED_MAY_BE_STALE(
        "tengu_tide_elm",
        "off"
      ) !== "off";
    }
  },
  {
    id: "subagent-fanout-nudge",
    content: async (ctx) => {
      const blue = color("suggestion", ctx.theme);
      const variant = getFeatureValue_CACHED_MAY_BE_STALE("tengu_tern_alloy", "off");
      return variant === "copy_b" ? `For big tasks, tell Blaude to ${blue("use subagents")}. They work in parallel and keep your main thread clean.` : `Say ${blue('"fan out subagents"')} and Blaude sends a team. Each one digs deep so nothing gets missed.`;
    },
    cooldownSessions: 3,
    isRelevant: async () => {
      if (!is1PApiCustomer()) return false;
      return getFeatureValue_CACHED_MAY_BE_STALE(
        "tengu_tern_alloy",
        "off"
      ) !== "off";
    }
  },
  {
    id: "loop-command-nudge",
    content: async (ctx) => {
      const blue = color("suggestion", ctx.theme);
      const variant = getFeatureValue_CACHED_MAY_BE_STALE("tengu_timber_lark", "off");
      return variant === "copy_b" ? `Use ${blue("/loop 5m check the deploy")} to run any prompt on a schedule. Set it and forget it.` : `${blue("/loop")} runs any prompt on a recurring schedule. Great for monitoring deploys, babysitting PRs, or polling status.`;
    },
    cooldownSessions: 3,
    isRelevant: async () => {
      if (!is1PApiCustomer()) return false;
      if (!isKairosCronEnabled()) return false;
      return getFeatureValue_CACHED_MAY_BE_STALE(
        "tengu_timber_lark",
        "off"
      ) !== "off";
    }
  },
  {
    id: "guest-passes",
    content: async (ctx) => {
      const claude = color("claude", ctx.theme);
      const reward = getCachedReferrerReward();
      return reward ? `Share Blaude and earn ${claude(formatCreditAmount(reward))} of extra usage \xB7 ${claude("/passes")}` : `You have free guest passes to share \xB7 ${claude("/passes")}`;
    },
    cooldownSessions: 3,
    isRelevant: async () => {
      const config = getGlobalConfig();
      if (config.hasVisitedPasses) {
        return false;
      }
      const { eligible } = checkCachedPassesEligibility();
      return eligible;
    }
  },
  {
    id: "overage-credit",
    content: async (ctx) => {
      const claude = color("claude", ctx.theme);
      const info = getCachedOverageCreditGrant();
      const amount = info ? formatGrantAmount(info) : null;
      if (!amount) return "";
      return `${claude(`${amount} in extra usage, on us`)} \xB7 third-party apps \xB7 ${claude("/extra-usage")}`;
    },
    cooldownSessions: 3,
    isRelevant: async () => shouldShowOverageCreditUpsell()
  },
  {
    id: "feedback-command",
    content: async () => "Use /feedback to help us improve!",
    cooldownSessions: 15,
    async isRelevant() {
      if (process.env.USER_TYPE === "ant") {
        return false;
      }
      const config = getGlobalConfig();
      return config.numStartups > 5;
    }
  }
];
var internalOnlyTips = process.env.USER_TYPE === "ant" ? [
  {
    id: "important-claudemd",
    content: async () => '[ANT-ONLY] Use "IMPORTANT:" prefix for must-follow CLAUDE.md rules',
    cooldownSessions: 30,
    isRelevant: async () => true
  },
  {
    id: "skillify",
    content: async () => "[ANT-ONLY] Use /skillify at the end of a workflow to turn it into a reusable skill",
    cooldownSessions: 15,
    isRelevant: async () => true
  }
] : [];
function getCustomTips() {
  const settings = getInitialSettings();
  const override = settings.spinnerTipsOverride;
  if (!override?.tips?.length) return [];
  return override.tips.map((content, i) => ({
    id: `custom-tip-${i}`,
    content: async () => content,
    cooldownSessions: 0,
    isRelevant: async () => true
  }));
}
async function getRelevantTips(context) {
  const settings = getInitialSettings();
  const override = settings.spinnerTipsOverride;
  const customTips = getCustomTips();
  if (override?.excludeDefault && customTips.length > 0) {
    return customTips;
  }
  const tips = [...externalTips, ...internalOnlyTips];
  const isRelevant = await Promise.all(tips.map((_) => _.isRelevant(context)));
  const filtered = tips.filter((_, index) => isRelevant[index]).filter((_) => getSessionsSinceLastShown(_.id) >= _.cooldownSessions);
  return [...filtered, ...customTips];
}

// src/utils/model/deprecation.ts
init_providers();
var DEPRECATED_MODELS = {
  "claude-3-opus": {
    modelName: "Claude 3 Opus",
    retirementDates: {
      firstParty: "January 5, 2026",
      bedrock: "January 15, 2026",
      vertex: "January 5, 2026",
      foundry: "January 5, 2026"
    }
  },
  "claude-3-7-sonnet": {
    modelName: "Claude 3.7 Sonnet",
    retirementDates: {
      firstParty: "February 19, 2026",
      bedrock: "April 28, 2026",
      vertex: "May 11, 2026",
      foundry: "February 19, 2026"
    }
  },
  "claude-3-5-haiku": {
    modelName: "Claude 3.5 Haiku",
    retirementDates: {
      firstParty: "February 19, 2026",
      bedrock: null,
      vertex: null,
      foundry: null
    }
  }
};
function getDeprecatedModelInfo(modelId) {
  const lowercaseModelId = modelId.toLowerCase();
  const provider = getAPIProvider();
  for (const [key, value] of Object.entries(DEPRECATED_MODELS)) {
    const retirementDate = value.retirementDates[provider];
    if (!lowercaseModelId.includes(key) || !retirementDate) {
      continue;
    }
    return {
      isDeprecated: true,
      modelName: value.modelName,
      retirementDate
    };
  }
  return { isDeprecated: false };
}
function getModelDeprecationWarning(modelId) {
  if (!modelId) {
    return null;
  }
  const info = getDeprecatedModelInfo(modelId);
  if (!info.isDeprecated) {
    return null;
  }
  return `\u26A0 ${info.modelName} will be retired on ${info.retirementDate}. Consider switching to a newer model.`;
}

export {
  getExampleCommandFromCache,
  refreshExampleCommands,
  RemoteSessionManager,
  createRemoteSessionConfig,
  computeInitialTeamContext,
  initializeTeammateContextFromSession,
  recordTipShown,
  getSessionsSinceLastShown,
  shouldShowDesktopUpsellStartup,
  DesktopUpsellStartup,
  getRelevantTips,
  getModelDeprecationWarning
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL2V4YW1wbGVDb21tYW5kcy50cyIsICIuLi8uLi9zcmMvcmVtb3RlL1JlbW90ZVNlc3Npb25NYW5hZ2VyLnRzIiwgIi4uLy4uL3NyYy9yZW1vdGUvU2Vzc2lvbnNXZWJTb2NrZXQudHMiLCAiLi4vLi4vc3JjL3V0aWxzL3N3YXJtL3JlY29ubmVjdGlvbi50cyIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9EZXNrdG9wVXBzZWxsL0Rlc2t0b3BVcHNlbGxTdGFydHVwLnRzeCIsICIuLi8uLi9zcmMvc2VydmljZXMvdGlwcy90aXBSZWdpc3RyeS50cyIsICIuLi8uLi9zcmMvc2VydmljZXMvdGlwcy90aXBIaXN0b3J5LnRzIiwgIi4uLy4uL3NyYy91dGlscy9tb2RlbC9kZXByZWNhdGlvbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IG1lbW9pemUgZnJvbSAnbG9kYXNoLWVzL21lbW9pemUuanMnXG5pbXBvcnQgc2FtcGxlIGZyb20gJ2xvZGFzaC1lcy9zYW1wbGUuanMnXG5pbXBvcnQgeyBnZXRDd2QgfSBmcm9tICcuLi91dGlscy9jd2QuanMnXG5pbXBvcnQgeyBnZXRDdXJyZW50UHJvamVjdENvbmZpZywgc2F2ZUN1cnJlbnRQcm9qZWN0Q29uZmlnIH0gZnJvbSAnLi9jb25maWcuanMnXG5pbXBvcnQgeyBlbnYgfSBmcm9tICcuL2Vudi5qcydcbmltcG9ydCB7IGV4ZWNGaWxlTm9UaHJvd1dpdGhDd2QgfSBmcm9tICcuL2V4ZWNGaWxlTm9UaHJvdy5qcydcbmltcG9ydCB7IGdldElzR2l0LCBnaXRFeGUgfSBmcm9tICcuL2dpdC5qcydcbmltcG9ydCB7IGxvZ0Vycm9yIH0gZnJvbSAnLi9sb2cuanMnXG5pbXBvcnQgeyBnZXRHaXRFbWFpbCB9IGZyb20gJy4vdXNlci5qcydcblxuLy8gUGF0dGVybnMgdGhhdCBtYXJrIGEgZmlsZSBhcyBub24tY29yZSAoYXV0by1nZW5lcmF0ZWQsIGRlcGVuZGVuY3ksIG9yIGNvbmZpZykuXG4vLyBVc2VkIHRvIGZpbHRlciBleGFtcGxlLWNvbW1hbmQgZmlsZW5hbWUgc3VnZ2VzdGlvbnMgZGV0ZXJtaW5pc3RpY2FsbHlcbi8vIGluc3RlYWQgb2Ygc2hlbGxpbmcgb3V0IHRvIEhhaWt1LlxuY29uc3QgTk9OX0NPUkVfUEFUVEVSTlMgPSBbXG4gIC8vIGxvY2sgLyBkZXBlbmRlbmN5IG1hbmlmZXN0c1xuICAvKD86XnxcXC8pKD86cGFja2FnZS1sb2NrXFwuanNvbnx5YXJuXFwubG9ja3xidW5cXC5sb2NrfGJ1blxcLmxvY2tifHBucG0tbG9ja1xcLnlhbWx8UGlwZmlsZVxcLmxvY2t8cG9ldHJ5XFwubG9ja3xDYXJnb1xcLmxvY2t8R2VtZmlsZVxcLmxvY2t8Z29cXC5zdW18Y29tcG9zZXJcXC5sb2NrfHV2XFwubG9jaykkLyxcbiAgLy8gZ2VuZXJhdGVkIC8gYnVpbGQgYXJ0aWZhY3RzXG4gIC9cXC5nZW5lcmF0ZWRcXC4vLFxuICAvKD86XnxcXC8pKD86ZGlzdHxidWlsZHxvdXR8dGFyZ2V0fG5vZGVfbW9kdWxlc3xcXC5uZXh0fF9fcHljYWNoZV9fKVxcLy8sXG4gIC9cXC4oPzptaW5cXC5qc3xtaW5cXC5jc3N8bWFwfHB5Y3xweW8pJC8sXG4gIC8vIGRhdGEgLyBkb2NzIC8gY29uZmlnIGV4dGVuc2lvbnMgKG5vdCBcIndyaXRlIGEgdGVzdCBmb3JcIiBtYXRlcmlhbClcbiAgL1xcLig/Ompzb258eWE/bWx8dG9tbHx4bWx8aW5pfGNmZ3xjb25mfGVudnxsb2NrfHR4dHxtZHxtZHh8cnN0fGNzdnxsb2d8c3ZnKSQvaSxcbiAgLy8gY29uZmlndXJhdGlvbiAvIG1ldGFkYXRhXG4gIC8oPzpefFxcLylcXC4/KD86ZXNsaW50cmN8cHJldHRpZXJyY3xiYWJlbHJjfGVkaXRvcmNvbmZpZ3xnaXRpZ25vcmV8Z2l0YXR0cmlidXRlc3xkb2NrZXJpZ25vcmV8bnBtcmMpLyxcbiAgLyg/Ol58XFwvKSg/OnRzY29uZmlnfGpzY29uZmlnfGJpb21lfHZpdGVzdFxcLmNvbmZpZ3xqZXN0XFwuY29uZmlnfHdlYnBhY2tcXC5jb25maWd8dml0ZVxcLmNvbmZpZ3xyb2xsdXBcXC5jb25maWcpXFwuW2Etel0rJC8sXG4gIC8oPzpefFxcLylcXC4oPzpnaXRodWJ8dnNjb2RlfGlkZWF8Y2xhdWRlKVxcLy8sXG4gIC8vIGRvY3MgLyBjaGFuZ2Vsb2dzIChub3QgXCJob3cgZG9lcyBYIHdvcmtcIiBtYXRlcmlhbClcbiAgLyg/Ol58XFwvKSg/OkNIQU5HRUxPR3xMSUNFTlNFfENPTlRSSUJVVElOR3xDT0RFT1dORVJTfFJFQURNRSkoPzpcXC5bYS16XSspPyQvaSxcbl1cblxuZnVuY3Rpb24gaXNDb3JlRmlsZShwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuICFOT05fQ09SRV9QQVRURVJOUy5zb21lKHAgPT4gcC50ZXN0KHBhdGgpKVxufVxuXG4vKipcbiAqIENvdW50cyBvY2N1cnJlbmNlcyBvZiBpdGVtcyBpbiBhbiBhcnJheSBhbmQgcmV0dXJucyB0aGUgdG9wIE4gaXRlbXNcbiAqIHNvcnRlZCBieSBjb3VudCBpbiBkZXNjZW5kaW5nIG9yZGVyLCBmb3JtYXR0ZWQgYXMgYSBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3VudEFuZFNvcnRJdGVtcyhpdGVtczogc3RyaW5nW10sIHRvcE46IG51bWJlciA9IDIwKTogc3RyaW5nIHtcbiAgY29uc3QgY291bnRzID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKVxuICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICBjb3VudHMuc2V0KGl0ZW0sIChjb3VudHMuZ2V0KGl0ZW0pIHx8IDApICsgMSlcbiAgfVxuICByZXR1cm4gQXJyYXkuZnJvbShjb3VudHMuZW50cmllcygpKVxuICAgIC5zb3J0KChhLCBiKSA9PiBiWzFdIC0gYVsxXSlcbiAgICAuc2xpY2UoMCwgdG9wTilcbiAgICAubWFwKChbaXRlbSwgY291bnRdKSA9PiBgJHtjb3VudC50b1N0cmluZygpLnBhZFN0YXJ0KDYpfSAke2l0ZW19YClcbiAgICAuam9pbignXFxuJylcbn1cblxuLyoqXG4gKiBQaWNrcyB1cCB0byBgd2FudGAgYmFzZW5hbWVzIGZyb20gYSBmcmVxdWVuY3ktc29ydGVkIGxpc3Qgb2YgcGF0aHMsXG4gKiBza2lwcGluZyBub24tY29yZSBmaWxlcyBhbmQgc3ByZWFkaW5nIGFjcm9zcyBkaWZmZXJlbnQgZGlyZWN0b3JpZXMuXG4gKiBSZXR1cm5zIGVtcHR5IGFycmF5IGlmIGZld2VyIHRoYW4gYHdhbnRgIGNvcmUgZmlsZXMgYXJlIGF2YWlsYWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBpY2tEaXZlcnNlQ29yZUZpbGVzKFxuICBzb3J0ZWRQYXRoczogc3RyaW5nW10sXG4gIHdhbnQ6IG51bWJlcixcbik6IHN0cmluZ1tdIHtcbiAgY29uc3QgcGlja2VkOiBzdHJpbmdbXSA9IFtdXG4gIGNvbnN0IHNlZW5CYXNlbmFtZXMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICBjb25zdCBkaXJUYWxseSA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KClcblxuICAvLyBHcmVlZHk6IG9uIGVhY2ggcGFzcyBhbGxvdyArMSBmaWxlIHBlciBkaXJlY3RvcnkuIEtlZXBzIHRoZVxuICAvLyB0b3AtNSBmcm9tIGNvbGxhcHNpbmcgaW50byBhIHNpbmdsZSBob3QgZm9sZGVyIHdoaWxlIHN0aWxsXG4gIC8vIGxldHRpbmcgYSBkb21pbmFudCBmb2xkZXIgY29udHJpYnV0ZSBtdWx0aXBsZSBmaWxlcyBpZiB0aGVcbiAgLy8gcmVwbyBpcyBuYXJyb3cuXG4gIGZvciAobGV0IGNhcCA9IDE7IHBpY2tlZC5sZW5ndGggPCB3YW50ICYmIGNhcCA8PSB3YW50OyBjYXArKykge1xuICAgIGZvciAoY29uc3QgcCBvZiBzb3J0ZWRQYXRocykge1xuICAgICAgaWYgKHBpY2tlZC5sZW5ndGggPj0gd2FudCkgYnJlYWtcbiAgICAgIGlmICghaXNDb3JlRmlsZShwKSkgY29udGludWVcbiAgICAgIGNvbnN0IGxhc3RTZXAgPSBNYXRoLm1heChwLmxhc3RJbmRleE9mKCcvJyksIHAubGFzdEluZGV4T2YoJ1xcXFwnKSlcbiAgICAgIGNvbnN0IGJhc2UgPSBsYXN0U2VwID49IDAgPyBwLnNsaWNlKGxhc3RTZXAgKyAxKSA6IHBcbiAgICAgIGlmICghYmFzZSB8fCBzZWVuQmFzZW5hbWVzLmhhcyhiYXNlKSkgY29udGludWVcbiAgICAgIGNvbnN0IGRpciA9IGxhc3RTZXAgPj0gMCA/IHAuc2xpY2UoMCwgbGFzdFNlcCkgOiAnLidcbiAgICAgIGlmICgoZGlyVGFsbHkuZ2V0KGRpcikgPz8gMCkgPj0gY2FwKSBjb250aW51ZVxuICAgICAgcGlja2VkLnB1c2goYmFzZSlcbiAgICAgIHNlZW5CYXNlbmFtZXMuYWRkKGJhc2UpXG4gICAgICBkaXJUYWxseS5zZXQoZGlyLCAoZGlyVGFsbHkuZ2V0KGRpcikgPz8gMCkgKyAxKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwaWNrZWQubGVuZ3RoID49IHdhbnQgPyBwaWNrZWQgOiBbXVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRGcmVxdWVudGx5TW9kaWZpZWRGaWxlcygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnKSByZXR1cm4gW11cbiAgaWYgKGVudi5wbGF0Zm9ybSA9PT0gJ3dpbjMyJykgcmV0dXJuIFtdXG4gIGlmICghKGF3YWl0IGdldElzR2l0KCkpKSByZXR1cm4gW11cblxuICB0cnkge1xuICAgIC8vIENvbGxlY3QgZnJlcXVlbnRseS1tb2RpZmllZCBmaWxlcywgcHJlZmVycmluZyB0aGUgdXNlcidzIG93biBjb21taXRzLlxuICAgIGNvbnN0IHVzZXJFbWFpbCA9IGF3YWl0IGdldEdpdEVtYWlsKClcblxuICAgIGNvbnN0IGxvZ0FyZ3MgPSBbXG4gICAgICAnbG9nJyxcbiAgICAgICctbicsXG4gICAgICAnMTAwMCcsXG4gICAgICAnLS1wcmV0dHk9Zm9ybWF0OicsXG4gICAgICAnLS1uYW1lLW9ubHknLFxuICAgICAgJy0tZGlmZi1maWx0ZXI9TScsXG4gICAgXVxuXG4gICAgY29uc3QgY291bnRzID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKVxuICAgIGNvbnN0IHRhbGx5SW50byA9IChzdGRvdXQ6IHN0cmluZykgPT4ge1xuICAgICAgZm9yIChjb25zdCBsaW5lIG9mIHN0ZG91dC5zcGxpdCgnXFxuJykpIHtcbiAgICAgICAgY29uc3QgZiA9IGxpbmUudHJpbSgpXG4gICAgICAgIGlmIChmKSBjb3VudHMuc2V0KGYsIChjb3VudHMuZ2V0KGYpID8/IDApICsgMSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodXNlckVtYWlsKSB7XG4gICAgICBjb25zdCB7IHN0ZG91dCB9ID0gYXdhaXQgZXhlY0ZpbGVOb1Rocm93V2l0aEN3ZChcbiAgICAgICAgJ2dpdCcsXG4gICAgICAgIFsuLi5sb2dBcmdzLCBgLS1hdXRob3I9JHt1c2VyRW1haWx9YF0sXG4gICAgICAgIHsgY3dkOiBnZXRDd2QoKSB9LFxuICAgICAgKVxuICAgICAgdGFsbHlJbnRvKHN0ZG91dClcbiAgICB9XG5cbiAgICAvLyBGYWxsIGJhY2sgdG8gYWxsIGF1dGhvcnMgaWYgdGhlIHVzZXIncyBvd24gaGlzdG9yeSBpcyB0aGluLlxuICAgIGlmIChjb3VudHMuc2l6ZSA8IDEwKSB7XG4gICAgICBjb25zdCB7IHN0ZG91dCB9ID0gYXdhaXQgZXhlY0ZpbGVOb1Rocm93V2l0aEN3ZChnaXRFeGUoKSwgbG9nQXJncywge1xuICAgICAgICBjd2Q6IGdldEN3ZCgpLFxuICAgICAgfSlcbiAgICAgIHRhbGx5SW50byhzdGRvdXQpXG4gICAgfVxuXG4gICAgY29uc3Qgc29ydGVkID0gQXJyYXkuZnJvbShjb3VudHMuZW50cmllcygpKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGJbMV0gLSBhWzFdKVxuICAgICAgLm1hcCgoW3BdKSA9PiBwKVxuXG4gICAgcmV0dXJuIHBpY2tEaXZlcnNlQ29yZUZpbGVzKHNvcnRlZCwgNSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbG9nRXJyb3IoZXJyIGFzIEVycm9yKVxuICAgIHJldHVybiBbXVxuICB9XG59XG5cbmNvbnN0IE9ORV9XRUVLX0lOX01TID0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDBcblxuZXhwb3J0IGNvbnN0IGdldEV4YW1wbGVDb21tYW5kRnJvbUNhY2hlID0gbWVtb2l6ZSgoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RDb25maWcgPSBnZXRDdXJyZW50UHJvamVjdENvbmZpZygpXG4gIGNvbnN0IGZyZXF1ZW50RmlsZSA9IHByb2plY3RDb25maWcuZXhhbXBsZUZpbGVzPy5sZW5ndGhcbiAgICA/IHNhbXBsZShwcm9qZWN0Q29uZmlnLmV4YW1wbGVGaWxlcylcbiAgICA6ICc8ZmlsZXBhdGg+J1xuXG4gIGNvbnN0IGNvbW1hbmRzID0gW1xuICAgICdmaXggbGludCBlcnJvcnMnLFxuICAgICdmaXggdHlwZWNoZWNrIGVycm9ycycsXG4gICAgYGhvdyBkb2VzICR7ZnJlcXVlbnRGaWxlfSB3b3JrP2AsXG4gICAgYHJlZmFjdG9yICR7ZnJlcXVlbnRGaWxlfWAsXG4gICAgJ2hvdyBkbyBJIGxvZyBhbiBlcnJvcj8nLFxuICAgIGBlZGl0ICR7ZnJlcXVlbnRGaWxlfSB0by4uLmAsXG4gICAgYHdyaXRlIGEgdGVzdCBmb3IgJHtmcmVxdWVudEZpbGV9YCxcbiAgICAnY3JlYXRlIGEgdXRpbCBsb2dnaW5nLnB5IHRoYXQuLi4nLFxuICBdXG5cbiAgcmV0dXJuIGBUcnkgXCIke3NhbXBsZShjb21tYW5kcyl9XCJgXG59KVxuXG5leHBvcnQgY29uc3QgcmVmcmVzaEV4YW1wbGVDb21tYW5kcyA9IG1lbW9pemUoYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBjb25zdCBwcm9qZWN0Q29uZmlnID0gZ2V0Q3VycmVudFByb2plY3RDb25maWcoKVxuICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gIGNvbnN0IGxhc3RHZW5lcmF0ZWQgPSBwcm9qZWN0Q29uZmlnLmV4YW1wbGVGaWxlc0dlbmVyYXRlZEF0ID8/IDBcblxuICAvLyBSZWdlbmVyYXRlIGV4YW1wbGVzIGlmIHRoZXkncmUgb3ZlciBhIHdlZWsgb2xkXG4gIGlmIChub3cgLSBsYXN0R2VuZXJhdGVkID4gT05FX1dFRUtfSU5fTVMpIHtcbiAgICBwcm9qZWN0Q29uZmlnLmV4YW1wbGVGaWxlcyA9IFtdXG4gIH1cblxuICAvLyBJZiBubyBleGFtcGxlIGZpbGVzIGNhY2hlZCwga2lja3N0YXJ0IGZldGNoIGluIGJhY2tncm91bmRcbiAgaWYgKCFwcm9qZWN0Q29uZmlnLmV4YW1wbGVGaWxlcz8ubGVuZ3RoKSB7XG4gICAgdm9pZCBnZXRGcmVxdWVudGx5TW9kaWZpZWRGaWxlcygpLnRoZW4oZmlsZXMgPT4ge1xuICAgICAgaWYgKGZpbGVzLmxlbmd0aCkge1xuICAgICAgICBzYXZlQ3VycmVudFByb2plY3RDb25maWcoY3VycmVudCA9PiAoe1xuICAgICAgICAgIC4uLmN1cnJlbnQsXG4gICAgICAgICAgZXhhbXBsZUZpbGVzOiBmaWxlcyxcbiAgICAgICAgICBleGFtcGxlRmlsZXNHZW5lcmF0ZWRBdDogRGF0ZS5ub3coKSxcbiAgICAgICAgfSkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSlcbiIsICJpbXBvcnQgdHlwZSB7IFNES01lc3NhZ2UgfSBmcm9tICcuLi9lbnRyeXBvaW50cy9hZ2VudFNka1R5cGVzLmpzJ1xuaW1wb3J0IHR5cGUge1xuICBTREtDb250cm9sQ2FuY2VsUmVxdWVzdCxcbiAgU0RLQ29udHJvbFBlcm1pc3Npb25SZXF1ZXN0LFxuICBTREtDb250cm9sUmVxdWVzdCxcbiAgU0RLQ29udHJvbFJlc3BvbnNlLFxufSBmcm9tICcuLi9lbnRyeXBvaW50cy9zZGsvY29udHJvbFR5cGVzLmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi4vdXRpbHMvZGVidWcuanMnXG5pbXBvcnQgeyBsb2dFcnJvciB9IGZyb20gJy4uL3V0aWxzL2xvZy5qcydcbmltcG9ydCB7XG4gIHR5cGUgUmVtb3RlTWVzc2FnZUNvbnRlbnQsXG4gIHNlbmRFdmVudFRvUmVtb3RlU2Vzc2lvbixcbn0gZnJvbSAnLi4vdXRpbHMvdGVsZXBvcnQvYXBpLmpzJ1xuaW1wb3J0IHtcbiAgU2Vzc2lvbnNXZWJTb2NrZXQsXG4gIHR5cGUgU2Vzc2lvbnNXZWJTb2NrZXRDYWxsYmFja3MsXG59IGZyb20gJy4vU2Vzc2lvbnNXZWJTb2NrZXQuanMnXG5cbi8qKlxuICogVHlwZSBndWFyZCB0byBjaGVjayBpZiBhIG1lc3NhZ2UgaXMgYW4gU0RLTWVzc2FnZSAobm90IGEgY29udHJvbCBtZXNzYWdlKVxuICovXG5mdW5jdGlvbiBpc1NES01lc3NhZ2UoXG4gIG1lc3NhZ2U6XG4gICAgfCBTREtNZXNzYWdlXG4gICAgfCBTREtDb250cm9sUmVxdWVzdFxuICAgIHwgU0RLQ29udHJvbFJlc3BvbnNlXG4gICAgfCBTREtDb250cm9sQ2FuY2VsUmVxdWVzdCxcbik6IG1lc3NhZ2UgaXMgU0RLTWVzc2FnZSB7XG4gIHJldHVybiAoXG4gICAgbWVzc2FnZS50eXBlICE9PSAnY29udHJvbF9yZXF1ZXN0JyAmJlxuICAgIG1lc3NhZ2UudHlwZSAhPT0gJ2NvbnRyb2xfcmVzcG9uc2UnICYmXG4gICAgbWVzc2FnZS50eXBlICE9PSAnY29udHJvbF9jYW5jZWxfcmVxdWVzdCdcbiAgKVxufVxuXG4vKipcbiAqIFNpbXBsZSBwZXJtaXNzaW9uIHJlc3BvbnNlIGZvciByZW1vdGUgc2Vzc2lvbnMuXG4gKiBUaGlzIGlzIGEgc2ltcGxpZmllZCB2ZXJzaW9uIG9mIFBlcm1pc3Npb25SZXN1bHQgZm9yIENDUiBjb21tdW5pY2F0aW9uLlxuICovXG5leHBvcnQgdHlwZSBSZW1vdGVQZXJtaXNzaW9uUmVzcG9uc2UgPVxuICB8IHtcbiAgICAgIGJlaGF2aW9yOiAnYWxsb3cnXG4gICAgICB1cGRhdGVkSW5wdXQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICAgfVxuICB8IHtcbiAgICAgIGJlaGF2aW9yOiAnZGVueSdcbiAgICAgIG1lc3NhZ2U6IHN0cmluZ1xuICAgIH1cblxuZXhwb3J0IHR5cGUgUmVtb3RlU2Vzc2lvbkNvbmZpZyA9IHtcbiAgc2Vzc2lvbklkOiBzdHJpbmdcbiAgZ2V0QWNjZXNzVG9rZW46ICgpID0+IHN0cmluZ1xuICBvcmdVdWlkOiBzdHJpbmdcbiAgLyoqIFRydWUgaWYgc2Vzc2lvbiB3YXMgY3JlYXRlZCB3aXRoIGFuIGluaXRpYWwgcHJvbXB0IHRoYXQncyBiZWluZyBwcm9jZXNzZWQgKi9cbiAgaGFzSW5pdGlhbFByb21wdD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgdGhpcyBjbGllbnQgaXMgYSBwdXJlIHZpZXdlci4gQ3RybCtDL0VzY2FwZSBkbyBOT1Qgc2VuZFxuICAgKiBpbnRlcnJ1cHQgdG8gdGhlIHJlbW90ZSBhZ2VudDsgNjBzIHJlY29ubmVjdCB0aW1lb3V0IGlzIGRpc2FibGVkO1xuICAgKiBzZXNzaW9uIHRpdGxlIGlzIG5ldmVyIHVwZGF0ZWQuIFVzZWQgYnkgYGNsYXVkZSBhc3Npc3RhbnRgLlxuICAgKi9cbiAgdmlld2VyT25seT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUmVtb3RlU2Vzc2lvbkNhbGxiYWNrcyA9IHtcbiAgLyoqIENhbGxlZCB3aGVuIGFuIFNES01lc3NhZ2UgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgc2Vzc2lvbiAqL1xuICBvbk1lc3NhZ2U6IChtZXNzYWdlOiBTREtNZXNzYWdlKSA9PiB2b2lkXG4gIC8qKiBDYWxsZWQgd2hlbiBhIHBlcm1pc3Npb24gcmVxdWVzdCBpcyByZWNlaXZlZCBmcm9tIENDUiAqL1xuICBvblBlcm1pc3Npb25SZXF1ZXN0OiAoXG4gICAgcmVxdWVzdDogU0RLQ29udHJvbFBlcm1pc3Npb25SZXF1ZXN0LFxuICAgIHJlcXVlc3RJZDogc3RyaW5nLFxuICApID0+IHZvaWRcbiAgLyoqIENhbGxlZCB3aGVuIHRoZSBzZXJ2ZXIgY2FuY2VscyBhIHBlbmRpbmcgcGVybWlzc2lvbiByZXF1ZXN0ICovXG4gIG9uUGVybWlzc2lvbkNhbmNlbGxlZD86IChcbiAgICByZXF1ZXN0SWQ6IHN0cmluZyxcbiAgICB0b29sVXNlSWQ6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgKSA9PiB2b2lkXG4gIC8qKiBDYWxsZWQgd2hlbiBjb25uZWN0aW9uIGlzIGVzdGFibGlzaGVkICovXG4gIG9uQ29ubmVjdGVkPzogKCkgPT4gdm9pZFxuICAvKiogQ2FsbGVkIHdoZW4gY29ubmVjdGlvbiBpcyBsb3N0IGFuZCBjYW5ub3QgYmUgcmVzdG9yZWQgKi9cbiAgb25EaXNjb25uZWN0ZWQ/OiAoKSA9PiB2b2lkXG4gIC8qKiBDYWxsZWQgb24gdHJhbnNpZW50IFdTIGRyb3Agd2hpbGUgcmVjb25uZWN0IGJhY2tvZmYgaXMgaW4gcHJvZ3Jlc3MgKi9cbiAgb25SZWNvbm5lY3Rpbmc/OiAoKSA9PiB2b2lkXG4gIC8qKiBDYWxsZWQgb24gZXJyb3IgKi9cbiAgb25FcnJvcj86IChlcnJvcjogRXJyb3IpID0+IHZvaWRcbn1cblxuLyoqXG4gKiBNYW5hZ2VzIGEgcmVtb3RlIENDUiBzZXNzaW9uLlxuICpcbiAqIENvb3JkaW5hdGVzOlxuICogLSBXZWJTb2NrZXQgc3Vic2NyaXB0aW9uIGZvciByZWNlaXZpbmcgbWVzc2FnZXMgZnJvbSBDQ1JcbiAqIC0gSFRUUCBQT1NUIGZvciBzZW5kaW5nIHVzZXIgbWVzc2FnZXMgdG8gQ0NSXG4gKiAtIFBlcm1pc3Npb24gcmVxdWVzdC9yZXNwb25zZSBmbG93XG4gKi9cbmV4cG9ydCBjbGFzcyBSZW1vdGVTZXNzaW9uTWFuYWdlciB7XG4gIHByaXZhdGUgd2Vic29ja2V0OiBTZXNzaW9uc1dlYlNvY2tldCB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgcGVuZGluZ1Blcm1pc3Npb25SZXF1ZXN0czogTWFwPHN0cmluZywgU0RLQ29udHJvbFBlcm1pc3Npb25SZXF1ZXN0PiA9XG4gICAgbmV3IE1hcCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb25maWc6IFJlbW90ZVNlc3Npb25Db25maWcsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjYWxsYmFja3M6IFJlbW90ZVNlc3Npb25DYWxsYmFja3MsXG4gICkge31cblxuICAvKipcbiAgICogQ29ubmVjdCB0byB0aGUgcmVtb3RlIHNlc3Npb24gdmlhIFdlYlNvY2tldFxuICAgKi9cbiAgY29ubmVjdCgpOiB2b2lkIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgW1JlbW90ZVNlc3Npb25NYW5hZ2VyXSBDb25uZWN0aW5nIHRvIHNlc3Npb24gJHt0aGlzLmNvbmZpZy5zZXNzaW9uSWR9YCxcbiAgICApXG5cbiAgICBjb25zdCB3c0NhbGxiYWNrczogU2Vzc2lvbnNXZWJTb2NrZXRDYWxsYmFja3MgPSB7XG4gICAgICBvbk1lc3NhZ2U6IG1lc3NhZ2UgPT4gdGhpcy5oYW5kbGVNZXNzYWdlKG1lc3NhZ2UpLFxuICAgICAgb25Db25uZWN0ZWQ6ICgpID0+IHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKCdbUmVtb3RlU2Vzc2lvbk1hbmFnZXJdIENvbm5lY3RlZCcpXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLm9uQ29ubmVjdGVkPy4oKVxuICAgICAgfSxcbiAgICAgIG9uQ2xvc2U6ICgpID0+IHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKCdbUmVtb3RlU2Vzc2lvbk1hbmFnZXJdIERpc2Nvbm5lY3RlZCcpXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLm9uRGlzY29ubmVjdGVkPy4oKVxuICAgICAgfSxcbiAgICAgIG9uUmVjb25uZWN0aW5nOiAoKSA9PiB7XG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZygnW1JlbW90ZVNlc3Npb25NYW5hZ2VyXSBSZWNvbm5lY3RpbmcnKVxuICAgICAgICB0aGlzLmNhbGxiYWNrcy5vblJlY29ubmVjdGluZz8uKClcbiAgICAgIH0sXG4gICAgICBvbkVycm9yOiBlcnJvciA9PiB7XG4gICAgICAgIGxvZ0Vycm9yKGVycm9yKVxuICAgICAgICB0aGlzLmNhbGxiYWNrcy5vbkVycm9yPy4oZXJyb3IpXG4gICAgICB9LFxuICAgIH1cblxuICAgIHRoaXMud2Vic29ja2V0ID0gbmV3IFNlc3Npb25zV2ViU29ja2V0KFxuICAgICAgdGhpcy5jb25maWcuc2Vzc2lvbklkLFxuICAgICAgdGhpcy5jb25maWcub3JnVXVpZCxcbiAgICAgIHRoaXMuY29uZmlnLmdldEFjY2Vzc1Rva2VuLFxuICAgICAgd3NDYWxsYmFja3MsXG4gICAgKVxuXG4gICAgdm9pZCB0aGlzLndlYnNvY2tldC5jb25uZWN0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgbWVzc2FnZXMgZnJvbSBXZWJTb2NrZXRcbiAgICovXG4gIHByaXZhdGUgaGFuZGxlTWVzc2FnZShcbiAgICBtZXNzYWdlOlxuICAgICAgfCBTREtNZXNzYWdlXG4gICAgICB8IFNES0NvbnRyb2xSZXF1ZXN0XG4gICAgICB8IFNES0NvbnRyb2xSZXNwb25zZVxuICAgICAgfCBTREtDb250cm9sQ2FuY2VsUmVxdWVzdCxcbiAgKTogdm9pZCB7XG4gICAgLy8gSGFuZGxlIGNvbnRyb2wgcmVxdWVzdHMgKHBlcm1pc3Npb24gcHJvbXB0cyBmcm9tIENDUilcbiAgICBpZiAobWVzc2FnZS50eXBlID09PSAnY29udHJvbF9yZXF1ZXN0Jykge1xuICAgICAgdGhpcy5oYW5kbGVDb250cm9sUmVxdWVzdChtZXNzYWdlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGNvbnRyb2wgY2FuY2VsIHJlcXVlc3RzIChzZXJ2ZXIgY2FuY2VsbGluZyBhIHBlbmRpbmcgcGVybWlzc2lvbiBwcm9tcHQpXG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2NvbnRyb2xfY2FuY2VsX3JlcXVlc3QnKSB7XG4gICAgICBjb25zdCB7IHJlcXVlc3RfaWQgfSA9IG1lc3NhZ2VcbiAgICAgIGNvbnN0IHBlbmRpbmdSZXF1ZXN0ID0gdGhpcy5wZW5kaW5nUGVybWlzc2lvblJlcXVlc3RzLmdldChyZXF1ZXN0X2lkKVxuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgW1JlbW90ZVNlc3Npb25NYW5hZ2VyXSBQZXJtaXNzaW9uIHJlcXVlc3QgY2FuY2VsbGVkOiAke3JlcXVlc3RfaWR9YCxcbiAgICAgIClcbiAgICAgIHRoaXMucGVuZGluZ1Blcm1pc3Npb25SZXF1ZXN0cy5kZWxldGUocmVxdWVzdF9pZClcbiAgICAgIHRoaXMuY2FsbGJhY2tzLm9uUGVybWlzc2lvbkNhbmNlbGxlZD8uKFxuICAgICAgICByZXF1ZXN0X2lkLFxuICAgICAgICBwZW5kaW5nUmVxdWVzdD8udG9vbF91c2VfaWQsXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgY29udHJvbCByZXNwb25zZXMgKGFja25vd2xlZGdtZW50cylcbiAgICBpZiAobWVzc2FnZS50eXBlID09PSAnY29udHJvbF9yZXNwb25zZScpIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZygnW1JlbW90ZVNlc3Npb25NYW5hZ2VyXSBSZWNlaXZlZCBjb250cm9sIHJlc3BvbnNlJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZvcndhcmQgU0RLIG1lc3NhZ2VzIHRvIGNhbGxiYWNrICh0eXBlIGd1YXJkIGVuc3VyZXMgcHJvcGVyIG5hcnJvd2luZylcbiAgICBpZiAoaXNTREtNZXNzYWdlKG1lc3NhZ2UpKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrcy5vbk1lc3NhZ2UobWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGNvbnRyb2wgcmVxdWVzdHMgZnJvbSBDQ1IgKGUuZy4sIHBlcm1pc3Npb24gcmVxdWVzdHMpXG4gICAqL1xuICBwcml2YXRlIGhhbmRsZUNvbnRyb2xSZXF1ZXN0KHJlcXVlc3Q6IFNES0NvbnRyb2xSZXF1ZXN0KTogdm9pZCB7XG4gICAgY29uc3QgeyByZXF1ZXN0X2lkLCByZXF1ZXN0OiBpbm5lciB9ID0gcmVxdWVzdFxuXG4gICAgaWYgKGlubmVyLnN1YnR5cGUgPT09ICdjYW5fdXNlX3Rvb2wnKSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBbUmVtb3RlU2Vzc2lvbk1hbmFnZXJdIFBlcm1pc3Npb24gcmVxdWVzdCBmb3IgdG9vbDogJHtpbm5lci50b29sX25hbWV9YCxcbiAgICAgIClcbiAgICAgIHRoaXMucGVuZGluZ1Blcm1pc3Npb25SZXF1ZXN0cy5zZXQocmVxdWVzdF9pZCwgaW5uZXIpXG4gICAgICB0aGlzLmNhbGxiYWNrcy5vblBlcm1pc3Npb25SZXF1ZXN0KGlubmVyLCByZXF1ZXN0X2lkKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTZW5kIGFuIGVycm9yIHJlc3BvbnNlIGZvciB1bnJlY29nbml6ZWQgc3VidHlwZXMgc28gdGhlIHNlcnZlclxuICAgICAgLy8gZG9lc24ndCBoYW5nIHdhaXRpbmcgZm9yIGEgcmVwbHkgdGhhdCBuZXZlciBjb21lcy5cbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFtSZW1vdGVTZXNzaW9uTWFuYWdlcl0gVW5zdXBwb3J0ZWQgY29udHJvbCByZXF1ZXN0IHN1YnR5cGU6ICR7aW5uZXIuc3VidHlwZX1gLFxuICAgICAgKVxuICAgICAgY29uc3QgcmVzcG9uc2U6IFNES0NvbnRyb2xSZXNwb25zZSA9IHtcbiAgICAgICAgdHlwZTogJ2NvbnRyb2xfcmVzcG9uc2UnLFxuICAgICAgICByZXNwb25zZToge1xuICAgICAgICAgIHN1YnR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgcmVxdWVzdF9pZCxcbiAgICAgICAgICBlcnJvcjogYFVuc3VwcG9ydGVkIGNvbnRyb2wgcmVxdWVzdCBzdWJ0eXBlOiAke2lubmVyLnN1YnR5cGV9YCxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICAgIHRoaXMud2Vic29ja2V0Py5zZW5kQ29udHJvbFJlc3BvbnNlKHJlc3BvbnNlKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgdXNlciBtZXNzYWdlIHRvIHRoZSByZW1vdGUgc2Vzc2lvbiB2aWEgSFRUUCBQT1NUXG4gICAqL1xuICBhc3luYyBzZW5kTWVzc2FnZShcbiAgICBjb250ZW50OiBSZW1vdGVNZXNzYWdlQ29udGVudCxcbiAgICBvcHRzPzogeyB1dWlkPzogc3RyaW5nIH0sXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbUmVtb3RlU2Vzc2lvbk1hbmFnZXJdIFNlbmRpbmcgbWVzc2FnZSB0byBzZXNzaW9uICR7dGhpcy5jb25maWcuc2Vzc2lvbklkfWAsXG4gICAgKVxuXG4gICAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IHNlbmRFdmVudFRvUmVtb3RlU2Vzc2lvbihcbiAgICAgIHRoaXMuY29uZmlnLnNlc3Npb25JZCxcbiAgICAgIGNvbnRlbnQsXG4gICAgICBvcHRzLFxuICAgIClcblxuICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgbG9nRXJyb3IoXG4gICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICBgW1JlbW90ZVNlc3Npb25NYW5hZ2VyXSBGYWlsZWQgdG8gc2VuZCBtZXNzYWdlIHRvIHNlc3Npb24gJHt0aGlzLmNvbmZpZy5zZXNzaW9uSWR9YCxcbiAgICAgICAgKSxcbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gc3VjY2Vzc1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc3BvbmQgdG8gYSBwZXJtaXNzaW9uIHJlcXVlc3QgZnJvbSBDQ1JcbiAgICovXG4gIHJlc3BvbmRUb1Blcm1pc3Npb25SZXF1ZXN0KFxuICAgIHJlcXVlc3RJZDogc3RyaW5nLFxuICAgIHJlc3VsdDogUmVtb3RlUGVybWlzc2lvblJlc3BvbnNlLFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBwZW5kaW5nUmVxdWVzdCA9IHRoaXMucGVuZGluZ1Blcm1pc3Npb25SZXF1ZXN0cy5nZXQocmVxdWVzdElkKVxuICAgIGlmICghcGVuZGluZ1JlcXVlc3QpIHtcbiAgICAgIGxvZ0Vycm9yKFxuICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgYFtSZW1vdGVTZXNzaW9uTWFuYWdlcl0gTm8gcGVuZGluZyBwZXJtaXNzaW9uIHJlcXVlc3Qgd2l0aCBJRDogJHtyZXF1ZXN0SWR9YCxcbiAgICAgICAgKSxcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMucGVuZGluZ1Blcm1pc3Npb25SZXF1ZXN0cy5kZWxldGUocmVxdWVzdElkKVxuXG4gICAgY29uc3QgcmVzcG9uc2U6IFNES0NvbnRyb2xSZXNwb25zZSA9IHtcbiAgICAgIHR5cGU6ICdjb250cm9sX3Jlc3BvbnNlJyxcbiAgICAgIHJlc3BvbnNlOiB7XG4gICAgICAgIHN1YnR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgcmVxdWVzdF9pZDogcmVxdWVzdElkLFxuICAgICAgICByZXNwb25zZToge1xuICAgICAgICAgIGJlaGF2aW9yOiByZXN1bHQuYmVoYXZpb3IsXG4gICAgICAgICAgLi4uKHJlc3VsdC5iZWhhdmlvciA9PT0gJ2FsbG93J1xuICAgICAgICAgICAgPyB7IHVwZGF0ZWRJbnB1dDogcmVzdWx0LnVwZGF0ZWRJbnB1dCB9XG4gICAgICAgICAgICA6IHsgbWVzc2FnZTogcmVzdWx0Lm1lc3NhZ2UgfSksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH1cblxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbUmVtb3RlU2Vzc2lvbk1hbmFnZXJdIFNlbmRpbmcgcGVybWlzc2lvbiByZXNwb25zZTogJHtyZXN1bHQuYmVoYXZpb3J9YCxcbiAgICApXG5cbiAgICB0aGlzLndlYnNvY2tldD8uc2VuZENvbnRyb2xSZXNwb25zZShyZXNwb25zZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBjb25uZWN0ZWQgdG8gdGhlIHJlbW90ZSBzZXNzaW9uXG4gICAqL1xuICBpc0Nvbm5lY3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy53ZWJzb2NrZXQ/LmlzQ29ubmVjdGVkKCkgPz8gZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGFuIGludGVycnVwdCBzaWduYWwgdG8gY2FuY2VsIHRoZSBjdXJyZW50IHJlcXVlc3Qgb24gdGhlIHJlbW90ZSBzZXNzaW9uXG4gICAqL1xuICBjYW5jZWxTZXNzaW9uKCk6IHZvaWQge1xuICAgIGxvZ0ZvckRlYnVnZ2luZygnW1JlbW90ZVNlc3Npb25NYW5hZ2VyXSBTZW5kaW5nIGludGVycnVwdCBzaWduYWwnKVxuICAgIHRoaXMud2Vic29ja2V0Py5zZW5kQ29udHJvbFJlcXVlc3QoeyBzdWJ0eXBlOiAnaW50ZXJydXB0JyB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc2Vzc2lvbiBJRFxuICAgKi9cbiAgZ2V0U2Vzc2lvbklkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLnNlc3Npb25JZFxuICB9XG5cbiAgLyoqXG4gICAqIERpc2Nvbm5lY3QgZnJvbSB0aGUgcmVtb3RlIHNlc3Npb25cbiAgICovXG4gIGRpc2Nvbm5lY3QoKTogdm9pZCB7XG4gICAgbG9nRm9yRGVidWdnaW5nKCdbUmVtb3RlU2Vzc2lvbk1hbmFnZXJdIERpc2Nvbm5lY3RpbmcnKVxuICAgIHRoaXMud2Vic29ja2V0Py5jbG9zZSgpXG4gICAgdGhpcy53ZWJzb2NrZXQgPSBudWxsXG4gICAgdGhpcy5wZW5kaW5nUGVybWlzc2lvblJlcXVlc3RzLmNsZWFyKClcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JjZSByZWNvbm5lY3QgdGhlIFdlYlNvY2tldC5cbiAgICogVXNlZnVsIHdoZW4gdGhlIHN1YnNjcmlwdGlvbiBiZWNvbWVzIHN0YWxlIGFmdGVyIGNvbnRhaW5lciBzaHV0ZG93bi5cbiAgICovXG4gIHJlY29ubmVjdCgpOiB2b2lkIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoJ1tSZW1vdGVTZXNzaW9uTWFuYWdlcl0gUmVjb25uZWN0aW5nIFdlYlNvY2tldCcpXG4gICAgdGhpcy53ZWJzb2NrZXQ/LnJlY29ubmVjdCgpXG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYSByZW1vdGUgc2Vzc2lvbiBjb25maWcgZnJvbSBPQXV0aCB0b2tlbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlbW90ZVNlc3Npb25Db25maWcoXG4gIHNlc3Npb25JZDogc3RyaW5nLFxuICBnZXRBY2Nlc3NUb2tlbjogKCkgPT4gc3RyaW5nLFxuICBvcmdVdWlkOiBzdHJpbmcsXG4gIGhhc0luaXRpYWxQcm9tcHQgPSBmYWxzZSxcbiAgdmlld2VyT25seSA9IGZhbHNlLFxuKTogUmVtb3RlU2Vzc2lvbkNvbmZpZyB7XG4gIHJldHVybiB7XG4gICAgc2Vzc2lvbklkLFxuICAgIGdldEFjY2Vzc1Rva2VuLFxuICAgIG9yZ1V1aWQsXG4gICAgaGFzSW5pdGlhbFByb21wdCxcbiAgICB2aWV3ZXJPbmx5LFxuICB9XG59XG4iLCAiaW1wb3J0IHsgcmFuZG9tVVVJRCB9IGZyb20gJ2NyeXB0bydcbmltcG9ydCB7IGdldE9hdXRoQ29uZmlnIH0gZnJvbSAnLi4vY29uc3RhbnRzL29hdXRoLmpzJ1xuaW1wb3J0IHR5cGUgeyBTREtNZXNzYWdlIH0gZnJvbSAnLi4vZW50cnlwb2ludHMvYWdlbnRTZGtUeXBlcy5qcydcbmltcG9ydCB0eXBlIHtcbiAgU0RLQ29udHJvbENhbmNlbFJlcXVlc3QsXG4gIFNES0NvbnRyb2xSZXF1ZXN0LFxuICBTREtDb250cm9sUmVxdWVzdElubmVyLFxuICBTREtDb250cm9sUmVzcG9uc2UsXG59IGZyb20gJy4uL2VudHJ5cG9pbnRzL3Nkay9jb250cm9sVHlwZXMuanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuLi91dGlscy9kZWJ1Zy5qcydcbmltcG9ydCB7IGVycm9yTWVzc2FnZSB9IGZyb20gJy4uL3V0aWxzL2Vycm9ycy5qcydcbmltcG9ydCB7IGxvZ0Vycm9yIH0gZnJvbSAnLi4vdXRpbHMvbG9nLmpzJ1xuaW1wb3J0IHsgZ2V0V2ViU29ja2V0VExTT3B0aW9ucyB9IGZyb20gJy4uL3V0aWxzL210bHMuanMnXG5pbXBvcnQgeyBnZXRXZWJTb2NrZXRQcm94eUFnZW50LCBnZXRXZWJTb2NrZXRQcm94eVVybCB9IGZyb20gJy4uL3V0aWxzL3Byb3h5LmpzJ1xuaW1wb3J0IHsganNvblBhcnNlLCBqc29uU3RyaW5naWZ5IH0gZnJvbSAnLi4vdXRpbHMvc2xvd09wZXJhdGlvbnMuanMnXG5cbmNvbnN0IFJFQ09OTkVDVF9ERUxBWV9NUyA9IDIwMDBcbmNvbnN0IE1BWF9SRUNPTk5FQ1RfQVRURU1QVFMgPSA1XG5jb25zdCBQSU5HX0lOVEVSVkFMX01TID0gMzAwMDBcblxuLyoqXG4gKiBNYXhpbXVtIHJldHJpZXMgZm9yIDQwMDEgKHNlc3Npb24gbm90IGZvdW5kKS4gRHVyaW5nIGNvbXBhY3Rpb24gdGhlXG4gKiBzZXJ2ZXIgbWF5IGJyaWVmbHkgY29uc2lkZXIgdGhlIHNlc3Npb24gc3RhbGU7IGEgc2hvcnQgcmV0cnkgd2luZG93XG4gKiBsZXRzIHRoZSBjbGllbnQgcmVjb3ZlciB3aXRob3V0IGdpdmluZyB1cCBwZXJtYW5lbnRseS5cbiAqL1xuY29uc3QgTUFYX1NFU1NJT05fTk9UX0ZPVU5EX1JFVFJJRVMgPSAzXG5cbi8qKlxuICogV2ViU29ja2V0IGNsb3NlIGNvZGVzIHRoYXQgaW5kaWNhdGUgYSBwZXJtYW5lbnQgc2VydmVyLXNpZGUgcmVqZWN0aW9uLlxuICogVGhlIGNsaWVudCBzdG9wcyByZWNvbm5lY3RpbmcgaW1tZWRpYXRlbHkuXG4gKiBOb3RlOiA0MDAxIChzZXNzaW9uIG5vdCBmb3VuZCkgaXMgaGFuZGxlZCBzZXBhcmF0ZWx5IHdpdGggbGltaXRlZFxuICogcmV0cmllcyBzaW5jZSBpdCBjYW4gYmUgdHJhbnNpZW50IGR1cmluZyBjb21wYWN0aW9uLlxuICovXG5jb25zdCBQRVJNQU5FTlRfQ0xPU0VfQ09ERVMgPSBuZXcgU2V0KFtcbiAgNDAwMywgLy8gdW5hdXRob3JpemVkXG5dKVxuXG50eXBlIFdlYlNvY2tldFN0YXRlID0gJ2Nvbm5lY3RpbmcnIHwgJ2Nvbm5lY3RlZCcgfCAnY2xvc2VkJ1xuXG50eXBlIFNlc3Npb25zTWVzc2FnZSA9XG4gIHwgU0RLTWVzc2FnZVxuICB8IFNES0NvbnRyb2xSZXF1ZXN0XG4gIHwgU0RLQ29udHJvbFJlc3BvbnNlXG4gIHwgU0RLQ29udHJvbENhbmNlbFJlcXVlc3RcblxuZnVuY3Rpb24gaXNTZXNzaW9uc01lc3NhZ2UodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBTZXNzaW9uc01lc3NhZ2Uge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCB8fCAhKCd0eXBlJyBpbiB2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICAvLyBBY2NlcHQgYW55IG1lc3NhZ2Ugd2l0aCBhIHN0cmluZyBgdHlwZWAgZmllbGQuIERvd25zdHJlYW0gaGFuZGxlcnNcbiAgLy8gKHNka01lc3NhZ2VBZGFwdGVyLCBSZW1vdGVTZXNzaW9uTWFuYWdlcikgZGVjaWRlIHdoYXQgdG8gZG8gd2l0aFxuICAvLyB1bmtub3duIHR5cGVzLiBBIGhhcmRjb2RlZCBhbGxvd2xpc3QgaGVyZSB3b3VsZCBzaWxlbnRseSBkcm9wIG5ld1xuICAvLyBtZXNzYWdlIHR5cGVzIHRoZSBiYWNrZW5kIHN0YXJ0cyBzZW5kaW5nIGJlZm9yZSB0aGUgY2xpZW50IGlzIHVwZGF0ZWQuXG4gIHJldHVybiB0eXBlb2YgdmFsdWUudHlwZSA9PT0gJ3N0cmluZydcbn1cblxuZXhwb3J0IHR5cGUgU2Vzc2lvbnNXZWJTb2NrZXRDYWxsYmFja3MgPSB7XG4gIG9uTWVzc2FnZTogKG1lc3NhZ2U6IFNlc3Npb25zTWVzc2FnZSkgPT4gdm9pZFxuICBvbkNsb3NlPzogKCkgPT4gdm9pZFxuICBvbkVycm9yPzogKGVycm9yOiBFcnJvcikgPT4gdm9pZFxuICBvbkNvbm5lY3RlZD86ICgpID0+IHZvaWRcbiAgLyoqIEZpcmVkIHdoZW4gYSB0cmFuc2llbnQgY2xvc2UgaXMgZGV0ZWN0ZWQgYW5kIGEgcmVjb25uZWN0IGlzIHNjaGVkdWxlZC5cbiAgICogIG9uQ2xvc2UgZmlyZXMgb25seSBmb3IgcGVybWFuZW50IGNsb3NlIChzZXJ2ZXIgZW5kZWQgLyBhdHRlbXB0cyBleGhhdXN0ZWQpLiAqL1xuICBvblJlY29ubmVjdGluZz86ICgpID0+IHZvaWRcbn1cblxuLy8gQ29tbW9uIGludGVyZmFjZSBiZXR3ZWVuIGdsb2JhbFRoaXMuV2ViU29ja2V0IGFuZCB3cy5XZWJTb2NrZXRcbnR5cGUgV2ViU29ja2V0TGlrZSA9IHtcbiAgY2xvc2UoKTogdm9pZFxuICBzZW5kKGRhdGE6IHN0cmluZyk6IHZvaWRcbiAgcGluZz8oKTogdm9pZCAvLyBCdW4gJiB3cyBib3RoIHN1cHBvcnQgdGhpc1xufVxuXG4vKipcbiAqIFdlYlNvY2tldCBjbGllbnQgZm9yIGNvbm5lY3RpbmcgdG8gQ0NSIHNlc3Npb25zIHZpYSAvdjEvc2Vzc2lvbnMvd3Mve2lkfS9zdWJzY3JpYmVcbiAqXG4gKiBQcm90b2NvbDpcbiAqIDEuIENvbm5lY3QgdG8gd3NzOi8vYXBpLmFudGhyb3BpYy5jb20vdjEvc2Vzc2lvbnMvd3Mve3Nlc3Npb25JZH0vc3Vic2NyaWJlP29yZ2FuaXphdGlvbl91dWlkPS4uLlxuICogMi4gU2VuZCBhdXRoIG1lc3NhZ2U6IHsgdHlwZTogJ2F1dGgnLCBjcmVkZW50aWFsOiB7IHR5cGU6ICdvYXV0aCcsIHRva2VuOiAnLi4uJyB9IH1cbiAqIDMuIFJlY2VpdmUgU0RLTWVzc2FnZSBzdHJlYW0gZnJvbSB0aGUgc2Vzc2lvblxuICovXG5leHBvcnQgY2xhc3MgU2Vzc2lvbnNXZWJTb2NrZXQge1xuICBwcml2YXRlIHdzOiBXZWJTb2NrZXRMaWtlIHwgbnVsbCA9IG51bGxcbiAgcHJpdmF0ZSBzdGF0ZTogV2ViU29ja2V0U3RhdGUgPSAnY2xvc2VkJ1xuICBwcml2YXRlIHJlY29ubmVjdEF0dGVtcHRzID0gMFxuICBwcml2YXRlIHNlc3Npb25Ob3RGb3VuZFJldHJpZXMgPSAwXG4gIHByaXZhdGUgcGluZ0ludGVydmFsOiBOb2RlSlMuVGltZW91dCB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgcmVjb25uZWN0VGltZXI6IE5vZGVKUy5UaW1lb3V0IHwgbnVsbCA9IG51bGxcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNlc3Npb25JZDogc3RyaW5nLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgb3JnVXVpZDogc3RyaW5nLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZ2V0QWNjZXNzVG9rZW46ICgpID0+IHN0cmluZyxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhbGxiYWNrczogU2Vzc2lvbnNXZWJTb2NrZXRDYWxsYmFja3MsXG4gICkge31cblxuICAvKipcbiAgICogQ29ubmVjdCB0byB0aGUgc2Vzc2lvbnMgV2ViU29ja2V0IGVuZHBvaW50XG4gICAqL1xuICBhc3luYyBjb25uZWN0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLnN0YXRlID09PSAnY29ubmVjdGluZycpIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZygnW1Nlc3Npb25zV2ViU29ja2V0XSBBbHJlYWR5IGNvbm5lY3RpbmcnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9ICdjb25uZWN0aW5nJ1xuXG4gICAgY29uc3QgYmFzZVVybCA9IGdldE9hdXRoQ29uZmlnKCkuQkFTRV9BUElfVVJMLnJlcGxhY2UoJ2h0dHBzOi8vJywgJ3dzczovLycpXG4gICAgY29uc3QgdXJsID0gYCR7YmFzZVVybH0vdjEvc2Vzc2lvbnMvd3MvJHt0aGlzLnNlc3Npb25JZH0vc3Vic2NyaWJlP29yZ2FuaXphdGlvbl91dWlkPSR7dGhpcy5vcmdVdWlkfWBcblxuICAgIGxvZ0ZvckRlYnVnZ2luZyhgW1Nlc3Npb25zV2ViU29ja2V0XSBDb25uZWN0aW5nIHRvICR7dXJsfWApXG5cbiAgICAvLyBHZXQgZnJlc2ggdG9rZW4gZm9yIGVhY2ggY29ubmVjdGlvbiBhdHRlbXB0XG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSB0aGlzLmdldEFjY2Vzc1Rva2VuKClcbiAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsXG4gICAgICAnYW50aHJvcGljLXZlcnNpb24nOiAnMjAyMy0wNi0wMScsXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBCdW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBCdW4ncyBXZWJTb2NrZXQgc3VwcG9ydHMgaGVhZGVycy9wcm94eSBvcHRpb25zIGJ1dCB0aGUgRE9NIHR5cGluZ3MgZG9uJ3RcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlc2xpbnQtcGx1Z2luLW4vbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGluc1xuICAgICAgY29uc3Qgd3MgPSBuZXcgZ2xvYmFsVGhpcy5XZWJTb2NrZXQodXJsLCB7XG4gICAgICAgIGhlYWRlcnMsXG4gICAgICAgIHByb3h5OiBnZXRXZWJTb2NrZXRQcm94eVVybCh1cmwpLFxuICAgICAgICB0bHM6IGdldFdlYlNvY2tldFRMU09wdGlvbnMoKSB8fCB1bmRlZmluZWQsXG4gICAgICB9IGFzIHVua25vd24gYXMgc3RyaW5nW10pXG4gICAgICB0aGlzLndzID0gd3NcblxuICAgICAgd3MuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsICgpID0+IHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICdbU2Vzc2lvbnNXZWJTb2NrZXRdIENvbm5lY3Rpb24gb3BlbmVkLCBhdXRoZW50aWNhdGVkIHZpYSBoZWFkZXJzJyxcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnN0YXRlID0gJ2Nvbm5lY3RlZCdcbiAgICAgICAgdGhpcy5yZWNvbm5lY3RBdHRlbXB0cyA9IDBcbiAgICAgICAgdGhpcy5zZXNzaW9uTm90Rm91bmRSZXRyaWVzID0gMFxuICAgICAgICB0aGlzLnN0YXJ0UGluZ0ludGVydmFsKClcbiAgICAgICAgdGhpcy5jYWxsYmFja3Mub25Db25uZWN0ZWQ/LigpXG4gICAgICB9KVxuXG4gICAgICB3cy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGV2ZW50OiBNZXNzYWdlRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9XG4gICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09ICdzdHJpbmcnID8gZXZlbnQuZGF0YSA6IFN0cmluZyhldmVudC5kYXRhKVxuICAgICAgICB0aGlzLmhhbmRsZU1lc3NhZ2UoZGF0YSlcbiAgICAgIH0pXG5cbiAgICAgIHdzLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ1tTZXNzaW9uc1dlYlNvY2tldF0gV2ViU29ja2V0IGVycm9yJylcbiAgICAgICAgbG9nRXJyb3IoZXJyKVxuICAgICAgICB0aGlzLmNhbGxiYWNrcy5vbkVycm9yPy4oZXJyKVxuICAgICAgfSlcblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzbGludC1wbHVnaW4tbi9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zXG4gICAgICB3cy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIChldmVudDogQ2xvc2VFdmVudCkgPT4ge1xuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgYFtTZXNzaW9uc1dlYlNvY2tldF0gQ2xvc2VkOiBjb2RlPSR7ZXZlbnQuY29kZX0gcmVhc29uPSR7ZXZlbnQucmVhc29ufWAsXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5oYW5kbGVDbG9zZShldmVudC5jb2RlKVxuICAgICAgfSlcblxuICAgICAgd3MuYWRkRXZlbnRMaXN0ZW5lcigncG9uZycsICgpID0+IHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKCdbU2Vzc2lvbnNXZWJTb2NrZXRdIFBvbmcgcmVjZWl2ZWQnKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBkZWZhdWx0OiBXUyB9ID0gYXdhaXQgaW1wb3J0KCd3cycpXG4gICAgICBjb25zdCB3cyA9IG5ldyBXUyh1cmwsIHtcbiAgICAgICAgaGVhZGVycyxcbiAgICAgICAgYWdlbnQ6IGdldFdlYlNvY2tldFByb3h5QWdlbnQodXJsKSxcbiAgICAgICAgLi4uZ2V0V2ViU29ja2V0VExTT3B0aW9ucygpLFxuICAgICAgfSlcbiAgICAgIHRoaXMud3MgPSB3c1xuXG4gICAgICB3cy5vbignb3BlbicsICgpID0+IHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICdbU2Vzc2lvbnNXZWJTb2NrZXRdIENvbm5lY3Rpb24gb3BlbmVkLCBhdXRoZW50aWNhdGVkIHZpYSBoZWFkZXJzJyxcbiAgICAgICAgKVxuICAgICAgICAvLyBBdXRoIGlzIGhhbmRsZWQgdmlhIGhlYWRlcnMsIHNvIHdlJ3JlIGltbWVkaWF0ZWx5IGNvbm5lY3RlZFxuICAgICAgICB0aGlzLnN0YXRlID0gJ2Nvbm5lY3RlZCdcbiAgICAgICAgdGhpcy5yZWNvbm5lY3RBdHRlbXB0cyA9IDBcbiAgICAgICAgdGhpcy5zZXNzaW9uTm90Rm91bmRSZXRyaWVzID0gMFxuICAgICAgICB0aGlzLnN0YXJ0UGluZ0ludGVydmFsKClcbiAgICAgICAgdGhpcy5jYWxsYmFja3Mub25Db25uZWN0ZWQ/LigpXG4gICAgICB9KVxuXG4gICAgICB3cy5vbignbWVzc2FnZScsIChkYXRhOiBCdWZmZXIpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVNZXNzYWdlKGRhdGEudG9TdHJpbmcoKSlcbiAgICAgIH0pXG5cbiAgICAgIHdzLm9uKCdlcnJvcicsIChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAgIGxvZ0Vycm9yKG5ldyBFcnJvcihgW1Nlc3Npb25zV2ViU29ja2V0XSBFcnJvcjogJHtlcnIubWVzc2FnZX1gKSlcbiAgICAgICAgdGhpcy5jYWxsYmFja3Mub25FcnJvcj8uKGVycilcbiAgICAgIH0pXG5cbiAgICAgIHdzLm9uKCdjbG9zZScsIChjb2RlOiBudW1iZXIsIHJlYXNvbjogQnVmZmVyKSA9PiB7XG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICBgW1Nlc3Npb25zV2ViU29ja2V0XSBDbG9zZWQ6IGNvZGU9JHtjb2RlfSByZWFzb249JHtyZWFzb24udG9TdHJpbmcoKX1gLFxuICAgICAgICApXG4gICAgICAgIHRoaXMuaGFuZGxlQ2xvc2UoY29kZSlcbiAgICAgIH0pXG5cbiAgICAgIHdzLm9uKCdwb25nJywgKCkgPT4ge1xuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoJ1tTZXNzaW9uc1dlYlNvY2tldF0gUG9uZyByZWNlaXZlZCcpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgaW5jb21pbmcgV2ViU29ja2V0IG1lc3NhZ2VcbiAgICovXG4gIHByaXZhdGUgaGFuZGxlTWVzc2FnZShkYXRhOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbWVzc2FnZTogdW5rbm93biA9IGpzb25QYXJzZShkYXRhKVxuXG4gICAgICAvLyBGb3J3YXJkIFNESyBtZXNzYWdlcyB0byBjYWxsYmFja1xuICAgICAgaWYgKGlzU2Vzc2lvbnNNZXNzYWdlKG1lc3NhZ2UpKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLm9uTWVzc2FnZShtZXNzYWdlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgIGBbU2Vzc2lvbnNXZWJTb2NrZXRdIElnbm9yaW5nIG1lc3NhZ2UgdHlwZTogJHt0eXBlb2YgbWVzc2FnZSA9PT0gJ29iamVjdCcgJiYgbWVzc2FnZSAhPT0gbnVsbCAmJiAndHlwZScgaW4gbWVzc2FnZSA/IFN0cmluZyhtZXNzYWdlLnR5cGUpIDogJ3Vua25vd24nfWAsXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbG9nRXJyb3IoXG4gICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICBgW1Nlc3Npb25zV2ViU29ja2V0XSBGYWlsZWQgdG8gcGFyc2UgbWVzc2FnZTogJHtlcnJvck1lc3NhZ2UoZXJyb3IpfWAsXG4gICAgICAgICksXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBXZWJTb2NrZXQgY2xvc2VcbiAgICovXG4gIHByaXZhdGUgaGFuZGxlQ2xvc2UoY2xvc2VDb2RlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3BQaW5nSW50ZXJ2YWwoKVxuXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09ICdjbG9zZWQnKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLndzID0gbnVsbFxuXG4gICAgY29uc3QgcHJldmlvdXNTdGF0ZSA9IHRoaXMuc3RhdGVcbiAgICB0aGlzLnN0YXRlID0gJ2Nsb3NlZCdcblxuICAgIC8vIFBlcm1hbmVudCBjb2Rlczogc3RvcCByZWNvbm5lY3RpbmcgXHUyMDE0IHNlcnZlciBoYXMgZGVmaW5pdGl2ZWx5IGVuZGVkIHRoZSBzZXNzaW9uXG4gICAgaWYgKFBFUk1BTkVOVF9DTE9TRV9DT0RFUy5oYXMoY2xvc2VDb2RlKSkge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgW1Nlc3Npb25zV2ViU29ja2V0XSBQZXJtYW5lbnQgY2xvc2UgY29kZSAke2Nsb3NlQ29kZX0sIG5vdCByZWNvbm5lY3RpbmdgLFxuICAgICAgKVxuICAgICAgdGhpcy5jYWxsYmFja3Mub25DbG9zZT8uKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIDQwMDEgKHNlc3Npb24gbm90IGZvdW5kKSBjYW4gYmUgdHJhbnNpZW50IGR1cmluZyBjb21wYWN0aW9uOiB0aGVcbiAgICAvLyBzZXJ2ZXIgbWF5IGJyaWVmbHkgY29uc2lkZXIgdGhlIHNlc3Npb24gc3RhbGUgd2hpbGUgdGhlIENMSSB3b3JrZXJcbiAgICAvLyBpcyBidXN5IHdpdGggdGhlIGNvbXBhY3Rpb24gQVBJIGNhbGwgYW5kIG5vdCBlbWl0dGluZyBldmVudHMuXG4gICAgaWYgKGNsb3NlQ29kZSA9PT0gNDAwMSkge1xuICAgICAgdGhpcy5zZXNzaW9uTm90Rm91bmRSZXRyaWVzKytcbiAgICAgIGlmICh0aGlzLnNlc3Npb25Ob3RGb3VuZFJldHJpZXMgPiBNQVhfU0VTU0lPTl9OT1RfRk9VTkRfUkVUUklFUykge1xuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgYFtTZXNzaW9uc1dlYlNvY2tldF0gNDAwMSByZXRyeSBidWRnZXQgZXhoYXVzdGVkICgke01BWF9TRVNTSU9OX05PVF9GT1VORF9SRVRSSUVTfSksIG5vdCByZWNvbm5lY3RpbmdgLFxuICAgICAgICApXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLm9uQ2xvc2U/LigpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdGhpcy5zY2hlZHVsZVJlY29ubmVjdChcbiAgICAgICAgUkVDT05ORUNUX0RFTEFZX01TICogdGhpcy5zZXNzaW9uTm90Rm91bmRSZXRyaWVzLFxuICAgICAgICBgNDAwMSBhdHRlbXB0ICR7dGhpcy5zZXNzaW9uTm90Rm91bmRSZXRyaWVzfS8ke01BWF9TRVNTSU9OX05PVF9GT1VORF9SRVRSSUVTfWAsXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBBdHRlbXB0IHJlY29ubmVjdGlvbiBpZiB3ZSB3ZXJlIGNvbm5lY3RlZFxuICAgIGlmIChcbiAgICAgIHByZXZpb3VzU3RhdGUgPT09ICdjb25uZWN0ZWQnICYmXG4gICAgICB0aGlzLnJlY29ubmVjdEF0dGVtcHRzIDwgTUFYX1JFQ09OTkVDVF9BVFRFTVBUU1xuICAgICkge1xuICAgICAgdGhpcy5yZWNvbm5lY3RBdHRlbXB0cysrXG4gICAgICB0aGlzLnNjaGVkdWxlUmVjb25uZWN0KFxuICAgICAgICBSRUNPTk5FQ1RfREVMQVlfTVMsXG4gICAgICAgIGBhdHRlbXB0ICR7dGhpcy5yZWNvbm5lY3RBdHRlbXB0c30vJHtNQVhfUkVDT05ORUNUX0FUVEVNUFRTfWAsXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZygnW1Nlc3Npb25zV2ViU29ja2V0XSBOb3QgcmVjb25uZWN0aW5nJylcbiAgICAgIHRoaXMuY2FsbGJhY2tzLm9uQ2xvc2U/LigpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzY2hlZHVsZVJlY29ubmVjdChkZWxheTogbnVtYmVyLCBsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jYWxsYmFja3Mub25SZWNvbm5lY3Rpbmc/LigpXG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFtTZXNzaW9uc1dlYlNvY2tldF0gU2NoZWR1bGluZyByZWNvbm5lY3QgKCR7bGFiZWx9KSBpbiAke2RlbGF5fW1zYCxcbiAgICApXG4gICAgdGhpcy5yZWNvbm5lY3RUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5yZWNvbm5lY3RUaW1lciA9IG51bGxcbiAgICAgIHZvaWQgdGhpcy5jb25uZWN0KClcbiAgICB9LCBkZWxheSlcbiAgfVxuXG4gIHByaXZhdGUgc3RhcnRQaW5nSW50ZXJ2YWwoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9wUGluZ0ludGVydmFsKClcblxuICAgIHRoaXMucGluZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMud3MgJiYgdGhpcy5zdGF0ZSA9PT0gJ2Nvbm5lY3RlZCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLndzLnBpbmc/LigpXG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIC8vIElnbm9yZSBwaW5nIGVycm9ycywgY2xvc2UgaGFuZGxlciB3aWxsIGRlYWwgd2l0aCBjb25uZWN0aW9uIGlzc3Vlc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgUElOR19JTlRFUlZBTF9NUylcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIHBpbmcgaW50ZXJ2YWxcbiAgICovXG4gIHByaXZhdGUgc3RvcFBpbmdJbnRlcnZhbCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5waW5nSW50ZXJ2YWwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5waW5nSW50ZXJ2YWwpXG4gICAgICB0aGlzLnBpbmdJbnRlcnZhbCA9IG51bGxcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIGNvbnRyb2wgcmVzcG9uc2UgYmFjayB0byB0aGUgc2Vzc2lvblxuICAgKi9cbiAgc2VuZENvbnRyb2xSZXNwb25zZShyZXNwb25zZTogU0RLQ29udHJvbFJlc3BvbnNlKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLndzIHx8IHRoaXMuc3RhdGUgIT09ICdjb25uZWN0ZWQnKSB7XG4gICAgICBsb2dFcnJvcihuZXcgRXJyb3IoJ1tTZXNzaW9uc1dlYlNvY2tldF0gQ2Fubm90IHNlbmQ6IG5vdCBjb25uZWN0ZWQnKSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxvZ0ZvckRlYnVnZ2luZygnW1Nlc3Npb25zV2ViU29ja2V0XSBTZW5kaW5nIGNvbnRyb2wgcmVzcG9uc2UnKVxuICAgIHRoaXMud3Muc2VuZChqc29uU3RyaW5naWZ5KHJlc3BvbnNlKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgY29udHJvbCByZXF1ZXN0IHRvIHRoZSBzZXNzaW9uIChlLmcuLCBpbnRlcnJ1cHQpXG4gICAqL1xuICBzZW5kQ29udHJvbFJlcXVlc3QocmVxdWVzdDogU0RLQ29udHJvbFJlcXVlc3RJbm5lcik6IHZvaWQge1xuICAgIGlmICghdGhpcy53cyB8fCB0aGlzLnN0YXRlICE9PSAnY29ubmVjdGVkJykge1xuICAgICAgbG9nRXJyb3IobmV3IEVycm9yKCdbU2Vzc2lvbnNXZWJTb2NrZXRdIENhbm5vdCBzZW5kOiBub3QgY29ubmVjdGVkJykpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjb250cm9sUmVxdWVzdDogU0RLQ29udHJvbFJlcXVlc3QgPSB7XG4gICAgICB0eXBlOiAnY29udHJvbF9yZXF1ZXN0JyxcbiAgICAgIHJlcXVlc3RfaWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgIHJlcXVlc3QsXG4gICAgfVxuXG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFtTZXNzaW9uc1dlYlNvY2tldF0gU2VuZGluZyBjb250cm9sIHJlcXVlc3Q6ICR7cmVxdWVzdC5zdWJ0eXBlfWAsXG4gICAgKVxuICAgIHRoaXMud3Muc2VuZChqc29uU3RyaW5naWZ5KGNvbnRyb2xSZXF1ZXN0KSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBjb25uZWN0ZWRcbiAgICovXG4gIGlzQ29ubmVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlID09PSAnY29ubmVjdGVkJ1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlIHRoZSBXZWJTb2NrZXQgY29ubmVjdGlvblxuICAgKi9cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgbG9nRm9yRGVidWdnaW5nKCdbU2Vzc2lvbnNXZWJTb2NrZXRdIENsb3NpbmcgY29ubmVjdGlvbicpXG4gICAgdGhpcy5zdGF0ZSA9ICdjbG9zZWQnXG4gICAgdGhpcy5zdG9wUGluZ0ludGVydmFsKClcblxuICAgIGlmICh0aGlzLnJlY29ubmVjdFRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5yZWNvbm5lY3RUaW1lcilcbiAgICAgIHRoaXMucmVjb25uZWN0VGltZXIgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHRoaXMud3MpIHtcbiAgICAgIC8vIE51bGwgb3V0IGV2ZW50IGhhbmRsZXJzIHRvIHByZXZlbnQgcmFjZSBjb25kaXRpb25zIGR1cmluZyByZWNvbm5lY3QuXG4gICAgICAvLyBVbmRlciBCdW4gKG5hdGl2ZSBXZWJTb2NrZXQpLCBvblggaGFuZGxlcnMgYXJlIHRoZSBjbGVhbiB3YXkgdG8gZGV0YWNoLlxuICAgICAgLy8gVW5kZXIgTm9kZSAod3MgcGFja2FnZSksIHRoZSBsaXN0ZW5lcnMgd2VyZSBhdHRhY2hlZCB3aXRoIC5vbigpIGluIGNvbm5lY3QoKSxcbiAgICAgIC8vIGJ1dCBzaW5jZSB3ZSdyZSBhYm91dCB0byBjbG9zZSBhbmQgbnVsbCBvdXQgdGhpcy53cywgbm8gY2xlYW51cCBpcyBuZWVkZWQuXG4gICAgICB0aGlzLndzLmNsb3NlKClcbiAgICAgIHRoaXMud3MgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZvcmNlIHJlY29ubmVjdCAtIGNsb3NlcyBleGlzdGluZyBjb25uZWN0aW9uIGFuZCBlc3RhYmxpc2hlcyBhIG5ldyBvbmUuXG4gICAqIFVzZWZ1bCB3aGVuIHRoZSBzdWJzY3JpcHRpb24gYmVjb21lcyBzdGFsZSAoZS5nLiwgYWZ0ZXIgY29udGFpbmVyIHNodXRkb3duKS5cbiAgICovXG4gIHJlY29ubmVjdCgpOiB2b2lkIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoJ1tTZXNzaW9uc1dlYlNvY2tldF0gRm9yY2UgcmVjb25uZWN0aW5nJylcbiAgICB0aGlzLnJlY29ubmVjdEF0dGVtcHRzID0gMFxuICAgIHRoaXMuc2Vzc2lvbk5vdEZvdW5kUmV0cmllcyA9IDBcbiAgICB0aGlzLmNsb3NlKClcbiAgICAvLyBTbWFsbCBkZWxheSBiZWZvcmUgcmVjb25uZWN0aW5nIChzdG9yZWQgaW4gcmVjb25uZWN0VGltZXIgc28gaXQgY2FuIGJlIGNhbmNlbGxlZClcbiAgICB0aGlzLnJlY29ubmVjdFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnJlY29ubmVjdFRpbWVyID0gbnVsbFxuICAgICAgdm9pZCB0aGlzLmNvbm5lY3QoKVxuICAgIH0sIDUwMClcbiAgfVxufVxuIiwgIi8qKlxuICogU3dhcm0gUmVjb25uZWN0aW9uIE1vZHVsZVxuICpcbiAqIEhhbmRsZXMgaW5pdGlhbGl6YXRpb24gb2Ygc3dhcm0gY29udGV4dCBmb3IgdGVhbW1hdGVzLlxuICogLSBGcmVzaCBzcGF3bnM6IEluaXRpYWxpemUgZnJvbSBDTEkgYXJncyAoc2V0IGluIG1haW4udHN4IHZpYSBkeW5hbWljVGVhbUNvbnRleHQpXG4gKiAtIFJlc3VtZWQgc2Vzc2lvbnM6IEluaXRpYWxpemUgZnJvbSB0ZWFtTmFtZS9hZ2VudE5hbWUgc3RvcmVkIGluIHRoZSB0cmFuc2NyaXB0XG4gKi9cblxuaW1wb3J0IHR5cGUgeyBBcHBTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlL0FwcFN0YXRlLmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi4vZGVidWcuanMnXG5pbXBvcnQgeyBsb2dFcnJvciB9IGZyb20gJy4uL2xvZy5qcydcbmltcG9ydCB7IGdldER5bmFtaWNUZWFtQ29udGV4dCB9IGZyb20gJy4uL3RlYW1tYXRlLmpzJ1xuaW1wb3J0IHsgZ2V0VGVhbUZpbGVQYXRoLCByZWFkVGVhbUZpbGUgfSBmcm9tICcuL3RlYW1IZWxwZXJzLmpzJ1xuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBpbml0aWFsIHRlYW1Db250ZXh0IGZvciBBcHBTdGF0ZS5cbiAqXG4gKiBUaGlzIGlzIGNhbGxlZCBzeW5jaHJvbm91c2x5IGluIG1haW4udHN4IHRvIGNvbXB1dGUgdGhlIHRlYW1Db250ZXh0XG4gKiBCRUZPUkUgdGhlIGZpcnN0IHJlbmRlciwgZWxpbWluYXRpbmcgdGhlIG5lZWQgZm9yIHVzZUVmZmVjdCB3b3JrYXJvdW5kcy5cbiAqXG4gKiBAcmV0dXJucyBUaGUgdGVhbUNvbnRleHQgb2JqZWN0IHRvIGluY2x1ZGUgaW4gaW5pdGlhbFN0YXRlLCBvciB1bmRlZmluZWQgaWYgbm90IGEgdGVhbW1hdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVJbml0aWFsVGVhbUNvbnRleHQoKTpcbiAgfCBBcHBTdGF0ZVsndGVhbUNvbnRleHQnXVxuICB8IHVuZGVmaW5lZCB7XG4gIC8vIGR5bmFtaWNUZWFtQ29udGV4dCBpcyBzZXQgaW4gbWFpbi50c3ggZnJvbSBDTEkgYXJnc1xuICBjb25zdCBjb250ZXh0ID0gZ2V0RHluYW1pY1RlYW1Db250ZXh0KClcblxuICBpZiAoIWNvbnRleHQ/LnRlYW1OYW1lIHx8ICFjb250ZXh0Py5hZ2VudE5hbWUpIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAnW1JlY29ubmVjdGlvbl0gY29tcHV0ZUluaXRpYWxUZWFtQ29udGV4dDogTm8gdGVhbW1hdGUgY29udGV4dCBzZXQgKG5vdCBhIHRlYW1tYXRlKScsXG4gICAgKVxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGNvbnN0IHsgdGVhbU5hbWUsIGFnZW50SWQsIGFnZW50TmFtZSB9ID0gY29udGV4dFxuXG4gIC8vIFJlYWQgdGVhbSBmaWxlIHRvIGdldCBsZWFkIGFnZW50IElEXG4gIGNvbnN0IHRlYW1GaWxlID0gcmVhZFRlYW1GaWxlKHRlYW1OYW1lKVxuICBpZiAoIXRlYW1GaWxlKSB7XG4gICAgbG9nRXJyb3IoXG4gICAgICBuZXcgRXJyb3IoXG4gICAgICAgIGBbY29tcHV0ZUluaXRpYWxUZWFtQ29udGV4dF0gQ291bGQgbm90IHJlYWQgdGVhbSBmaWxlIGZvciAke3RlYW1OYW1lfWAsXG4gICAgICApLFxuICAgIClcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBjb25zdCB0ZWFtRmlsZVBhdGggPSBnZXRUZWFtRmlsZVBhdGgodGVhbU5hbWUpXG5cbiAgY29uc3QgaXNMZWFkZXIgPSAhYWdlbnRJZFxuXG4gIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICBgW1JlY29ubmVjdGlvbl0gQ29tcHV0ZWQgaW5pdGlhbCB0ZWFtIGNvbnRleHQgZm9yICR7aXNMZWFkZXIgPyAnbGVhZGVyJyA6IGB0ZWFtbWF0ZSAke2FnZW50TmFtZX1gfSBpbiB0ZWFtICR7dGVhbU5hbWV9YCxcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgdGVhbU5hbWUsXG4gICAgdGVhbUZpbGVQYXRoLFxuICAgIGxlYWRBZ2VudElkOiB0ZWFtRmlsZS5sZWFkQWdlbnRJZCxcbiAgICBzZWxmQWdlbnRJZDogYWdlbnRJZCxcbiAgICBzZWxmQWdlbnROYW1lOiBhZ2VudE5hbWUsXG4gICAgaXNMZWFkZXIsXG4gICAgdGVhbW1hdGVzOiB7fSxcbiAgfVxufVxuXG4vKipcbiAqIEluaXRpYWxpemUgdGVhbW1hdGUgY29udGV4dCBmcm9tIGEgcmVzdW1lZCBzZXNzaW9uLlxuICpcbiAqIFRoaXMgaXMgY2FsbGVkIHdoZW4gcmVzdW1pbmcgYSBzZXNzaW9uIHRoYXQgaGFzIHRlYW1OYW1lL2FnZW50TmFtZSBzdG9yZWRcbiAqIGluIHRoZSB0cmFuc2NyaXB0LiBJdCBzZXRzIHVwIHRlYW1Db250ZXh0IGluIEFwcFN0YXRlIHNvIHRoYXQgaGVhcnRiZWF0XG4gKiBhbmQgb3RoZXIgc3dhcm0gZmVhdHVyZXMgd29yayBjb3JyZWN0bHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplVGVhbW1hdGVDb250ZXh0RnJvbVNlc3Npb24oXG4gIHNldEFwcFN0YXRlOiAodXBkYXRlcjogKHByZXY6IEFwcFN0YXRlKSA9PiBBcHBTdGF0ZSkgPT4gdm9pZCxcbiAgdGVhbU5hbWU6IHN0cmluZyxcbiAgYWdlbnROYW1lOiBzdHJpbmcsXG4pOiB2b2lkIHtcbiAgLy8gUmVhZCB0ZWFtIGZpbGUgdG8gZ2V0IGxlYWQgYWdlbnQgSURcbiAgY29uc3QgdGVhbUZpbGUgPSByZWFkVGVhbUZpbGUodGVhbU5hbWUpXG4gIGlmICghdGVhbUZpbGUpIHtcbiAgICBsb2dFcnJvcihcbiAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgYFtpbml0aWFsaXplVGVhbW1hdGVDb250ZXh0RnJvbVNlc3Npb25dIENvdWxkIG5vdCByZWFkIHRlYW0gZmlsZSBmb3IgJHt0ZWFtTmFtZX0gKGFnZW50OiAke2FnZW50TmFtZX0pYCxcbiAgICAgICksXG4gICAgKVxuICAgIHJldHVyblxuICB9XG5cbiAgLy8gRmluZCB0aGUgbWVtYmVyIGluIHRoZSB0ZWFtIGZpbGUgdG8gZ2V0IHRoZWlyIGFnZW50SWRcbiAgY29uc3QgbWVtYmVyID0gdGVhbUZpbGUubWVtYmVycy5maW5kKG0gPT4gbS5uYW1lID09PSBhZ2VudE5hbWUpXG4gIGlmICghbWVtYmVyKSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFtSZWNvbm5lY3Rpb25dIE1lbWJlciAke2FnZW50TmFtZX0gbm90IGZvdW5kIGluIHRlYW0gJHt0ZWFtTmFtZX0gLSBtYXkgaGF2ZSBiZWVuIHJlbW92ZWRgLFxuICAgIClcbiAgfVxuICBjb25zdCBhZ2VudElkID0gbWVtYmVyPy5hZ2VudElkXG5cbiAgY29uc3QgdGVhbUZpbGVQYXRoID0gZ2V0VGVhbUZpbGVQYXRoKHRlYW1OYW1lKVxuXG4gIC8vIFNldCB0ZWFtQ29udGV4dCBpbiBBcHBTdGF0ZVxuICBzZXRBcHBTdGF0ZShwcmV2ID0+ICh7XG4gICAgLi4ucHJldixcbiAgICB0ZWFtQ29udGV4dDoge1xuICAgICAgdGVhbU5hbWUsXG4gICAgICB0ZWFtRmlsZVBhdGgsXG4gICAgICBsZWFkQWdlbnRJZDogdGVhbUZpbGUubGVhZEFnZW50SWQsXG4gICAgICBzZWxmQWdlbnRJZDogYWdlbnRJZCxcbiAgICAgIHNlbGZBZ2VudE5hbWU6IGFnZW50TmFtZSxcbiAgICAgIGlzTGVhZGVyOiBmYWxzZSxcbiAgICAgIHRlYW1tYXRlczoge30sXG4gICAgfSxcbiAgfSkpXG5cbiAgbG9nRm9yRGVidWdnaW5nKFxuICAgIGBbUmVjb25uZWN0aW9uXSBJbml0aWFsaXplZCBhZ2VudCBjb250ZXh0IGZyb20gc2Vzc2lvbiBmb3IgJHthZ2VudE5hbWV9IGluIHRlYW0gJHt0ZWFtTmFtZX1gLFxuICApXG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQgeyBnZXREeW5hbWljQ29uZmlnX0NBQ0hFRF9NQVlfQkVfU1RBTEUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbmFseXRpY3MvZ3Jvd3RoYm9vay5qcydcbmltcG9ydCB7IGxvZ0V2ZW50IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnLCBzYXZlR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uZmlnLmpzJ1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnLi4vQ3VzdG9tU2VsZWN0L3NlbGVjdC5qcydcbmltcG9ydCB7IERlc2t0b3BIYW5kb2ZmIH0gZnJvbSAnLi4vRGVza3RvcEhhbmRvZmYuanMnXG5pbXBvcnQgeyBQZXJtaXNzaW9uRGlhbG9nIH0gZnJvbSAnLi4vcGVybWlzc2lvbnMvUGVybWlzc2lvbkRpYWxvZy5qcydcblxudHlwZSBEZXNrdG9wVXBzZWxsQ29uZmlnID0ge1xuICBlbmFibGVfc2hvcnRjdXRfdGlwOiBib29sZWFuXG4gIGVuYWJsZV9zdGFydHVwX2RpYWxvZzogYm9vbGVhblxufVxuXG5jb25zdCBERVNLVE9QX1VQU0VMTF9ERUZBVUxUOiBEZXNrdG9wVXBzZWxsQ29uZmlnID0ge1xuICBlbmFibGVfc2hvcnRjdXRfdGlwOiBmYWxzZSxcbiAgZW5hYmxlX3N0YXJ0dXBfZGlhbG9nOiBmYWxzZSxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlc2t0b3BVcHNlbGxDb25maWcoKTogRGVza3RvcFVwc2VsbENvbmZpZyB7XG4gIHJldHVybiBnZXREeW5hbWljQ29uZmlnX0NBQ0hFRF9NQVlfQkVfU1RBTEUoXG4gICAgJ3Rlbmd1X2Rlc2t0b3BfdXBzZWxsJyxcbiAgICBERVNLVE9QX1VQU0VMTF9ERUZBVUxULFxuICApXG59XG5cbmZ1bmN0aW9uIGlzU3VwcG9ydGVkUGxhdGZvcm0oKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ2RhcndpbicgfHxcbiAgICAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJyAmJiBwcm9jZXNzLmFyY2ggPT09ICd4NjQnKVxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG91bGRTaG93RGVza3RvcFVwc2VsbFN0YXJ0dXAoKTogYm9vbGVhbiB7XG4gIGlmICghaXNTdXBwb3J0ZWRQbGF0Zm9ybSgpKSByZXR1cm4gZmFsc2VcbiAgaWYgKCFnZXREZXNrdG9wVXBzZWxsQ29uZmlnKCkuZW5hYmxlX3N0YXJ0dXBfZGlhbG9nKSByZXR1cm4gZmFsc2VcbiAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKClcbiAgaWYgKGNvbmZpZy5kZXNrdG9wVXBzZWxsRGlzbWlzc2VkKSByZXR1cm4gZmFsc2VcbiAgaWYgKChjb25maWcuZGVza3RvcFVwc2VsbFNlZW5Db3VudCA/PyAwKSA+PSAzKSByZXR1cm4gZmFsc2VcbiAgcmV0dXJuIHRydWVcbn1cblxudHlwZSBEZXNrdG9wVXBzZWxsU2VsZWN0aW9uID0gJ3RyeScgfCAnbm90LW5vdycgfCAnbmV2ZXInXG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9uRG9uZTogKCkgPT4gdm9pZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gRGVza3RvcFVwc2VsbFN0YXJ0dXAoeyBvbkRvbmUgfTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBbc2hvd0hhbmRvZmYsIHNldFNob3dIYW5kb2ZmXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIC8vIEluY3JlbWVudCBzZWVuIGNvdW50IG9uIG1vdW50IChndWFyZCBpbiB1cGRhdGVyIGZvciBTdHJpY3RNb2RlIHNhZmV0eSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBuZXdDb3VudCA9IChnZXRHbG9iYWxDb25maWcoKS5kZXNrdG9wVXBzZWxsU2VlbkNvdW50ID8/IDApICsgMVxuICAgIHNhdmVHbG9iYWxDb25maWcocHJldiA9PiB7XG4gICAgICBpZiAoKHByZXYuZGVza3RvcFVwc2VsbFNlZW5Db3VudCA/PyAwKSA+PSBuZXdDb3VudCkgcmV0dXJuIHByZXZcbiAgICAgIHJldHVybiB7IC4uLnByZXYsIGRlc2t0b3BVcHNlbGxTZWVuQ291bnQ6IG5ld0NvdW50IH1cbiAgICB9KVxuICAgIGxvZ0V2ZW50KCd0ZW5ndV9kZXNrdG9wX3Vwc2VsbF9zaG93bicsIHsgc2Vlbl9jb3VudDogbmV3Q291bnQgfSlcbiAgfSwgW10pXG5cbiAgaWYgKHNob3dIYW5kb2ZmKSB7XG4gICAgcmV0dXJuIDxEZXNrdG9wSGFuZG9mZiBvbkRvbmU9eygpID0+IG9uRG9uZSgpfSAvPlxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0KHZhbHVlOiBEZXNrdG9wVXBzZWxsU2VsZWN0aW9uKTogdm9pZCB7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSAndHJ5JzpcbiAgICAgICAgc2V0U2hvd0hhbmRvZmYodHJ1ZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICBjYXNlICduZXZlcic6XG4gICAgICAgIHNhdmVHbG9iYWxDb25maWcocHJldiA9PiB7XG4gICAgICAgICAgaWYgKHByZXYuZGVza3RvcFVwc2VsbERpc21pc3NlZCkgcmV0dXJuIHByZXZcbiAgICAgICAgICByZXR1cm4geyAuLi5wcmV2LCBkZXNrdG9wVXBzZWxsRGlzbWlzc2VkOiB0cnVlIH1cbiAgICAgICAgfSlcbiAgICAgICAgb25Eb25lKClcbiAgICAgICAgcmV0dXJuXG4gICAgICBjYXNlICdub3Qtbm93JzpcbiAgICAgICAgb25Eb25lKClcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IFtcbiAgICB7IGxhYmVsOiAnT3BlbiBpbiBDbGF1ZGUgQ29kZSBEZXNrdG9wJywgdmFsdWU6ICd0cnknIGFzIGNvbnN0IH0sXG4gICAgeyBsYWJlbDogJ05vdCBub3cnLCB2YWx1ZTogJ25vdC1ub3cnIGFzIGNvbnN0IH0sXG4gICAgeyBsYWJlbDogXCJEb24ndCBhc2sgYWdhaW5cIiwgdmFsdWU6ICduZXZlcicgYXMgY29uc3QgfSxcbiAgXVxuXG4gIHJldHVybiAoXG4gICAgPFBlcm1pc3Npb25EaWFsb2cgdGl0bGU9XCJUcnkgQ2xhdWRlIENvZGUgRGVza3RvcFwiPlxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgcGFkZGluZ1g9ezJ9IHBhZGRpbmdZPXsxfT5cbiAgICAgICAgPEJveCBtYXJnaW5Cb3R0b209ezF9PlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgU2FtZSBDbGF1ZGUgQ29kZSB3aXRoIHZpc3VhbCBkaWZmcywgbGl2ZSBhcHAgcHJldmlldywgcGFyYWxsZWxcbiAgICAgICAgICAgIHNlc3Npb25zLCBhbmQgbW9yZS5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VsZWN0fVxuICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBoYW5kbGVTZWxlY3QoJ25vdC1ub3cnKX1cbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvUGVybWlzc2lvbkRpYWxvZz5cbiAgKVxufVxuIiwgImltcG9ydCBjaGFsayBmcm9tICdjaGFsaydcbmltcG9ydCB7IGxvZ0ZvckRlYnVnZ2luZyB9IGZyb20gJ3NyYy91dGlscy9kZWJ1Zy5qcydcbmltcG9ydCB7IGZpbGVIaXN0b3J5RW5hYmxlZCB9IGZyb20gJ3NyYy91dGlscy9maWxlSGlzdG9yeS5qcydcbmltcG9ydCB7XG4gIGdldEluaXRpYWxTZXR0aW5ncyxcbiAgZ2V0U2V0dGluZ3NfREVQUkVDQVRFRCxcbiAgZ2V0U2V0dGluZ3NGb3JTb3VyY2UsXG59IGZyb20gJ3NyYy91dGlscy9zZXR0aW5ncy9zZXR0aW5ncy5qcydcbmltcG9ydCB7IHNob3VsZE9mZmVyVGVybWluYWxTZXR1cCB9IGZyb20gJy4uLy4uL2NvbW1hbmRzL3Rlcm1pbmFsU2V0dXAvdGVybWluYWxTZXR1cC5qcydcbmltcG9ydCB7IGdldERlc2t0b3BVcHNlbGxDb25maWcgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Rlc2t0b3BVcHNlbGwvRGVza3RvcFVwc2VsbFN0YXJ0dXAuanMnXG5pbXBvcnQgeyBjb2xvciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGVzaWduLXN5c3RlbS9jb2xvci5qcydcbmltcG9ydCB7IHNob3VsZFNob3dPdmVyYWdlQ3JlZGl0VXBzZWxsIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Mb2dvVjIvT3ZlcmFnZUNyZWRpdFVwc2VsbC5qcydcbmltcG9ydCB7IGdldFNob3J0Y3V0RGlzcGxheSB9IGZyb20gJy4uLy4uL2tleWJpbmRpbmdzL3Nob3J0Y3V0Rm9ybWF0LmpzJ1xuaW1wb3J0IHsgaXNLYWlyb3NDcm9uRW5hYmxlZCB9IGZyb20gJy4uLy4uL3Rvb2xzL1NjaGVkdWxlQ3JvblRvb2wvcHJvbXB0LmpzJ1xuaW1wb3J0IHsgaXMxUEFwaUN1c3RvbWVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXV0aC5qcydcbmltcG9ydCB7IGNvdW50Q29uY3VycmVudFNlc3Npb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uY3VycmVudFNlc3Npb25zLmpzJ1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uZmlnLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0RWZmb3J0RW52T3ZlcnJpZGUsXG4gIG1vZGVsU3VwcG9ydHNFZmZvcnQsXG59IGZyb20gJy4uLy4uL3V0aWxzL2VmZm9ydC5qcydcbmltcG9ydCB7IGVudiB9IGZyb20gJy4uLy4uL3V0aWxzL2Vudi5qcydcbmltcG9ydCB7IGNhY2hlS2V5cyB9IGZyb20gJy4uLy4uL3V0aWxzL2ZpbGVTdGF0ZUNhY2hlLmpzJ1xuaW1wb3J0IHsgZ2V0V29ya3RyZWVDb3VudCB9IGZyb20gJy4uLy4uL3V0aWxzL2dpdC5qcydcbmltcG9ydCB7XG4gIGRldGVjdFJ1bm5pbmdJREVzQ2FjaGVkLFxuICBnZXRTb3J0ZWRJZGVMb2NrZmlsZXMsXG4gIGlzQ3Vyc29ySW5zdGFsbGVkLFxuICBpc1N1cHBvcnRlZFRlcm1pbmFsLFxuICBpc1N1cHBvcnRlZFZTQ29kZVRlcm1pbmFsLFxuICBpc1ZTQ29kZUluc3RhbGxlZCxcbiAgaXNXaW5kc3VyZkluc3RhbGxlZCxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvaWRlLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0TWFpbkxvb3BNb2RlbCxcbiAgZ2V0VXNlclNwZWNpZmllZE1vZGVsU2V0dGluZyxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvbW9kZWwvbW9kZWwuanMnXG5pbXBvcnQgeyBnZXRQbGF0Zm9ybSB9IGZyb20gJy4uLy4uL3V0aWxzL3BsYXRmb3JtLmpzJ1xuaW1wb3J0IHsgaXNQbHVnaW5JbnN0YWxsZWQgfSBmcm9tICcuLi8uLi91dGlscy9wbHVnaW5zL2luc3RhbGxlZFBsdWdpbnNNYW5hZ2VyLmpzJ1xuaW1wb3J0IHsgbG9hZEtub3duTWFya2V0cGxhY2VzQ29uZmlnU2FmZSB9IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvbWFya2V0cGxhY2VNYW5hZ2VyLmpzJ1xuaW1wb3J0IHsgT0ZGSUNJQUxfTUFSS0VUUExBQ0VfTkFNRSB9IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvb2ZmaWNpYWxNYXJrZXRwbGFjZS5qcydcbmltcG9ydCB7XG4gIGdldEN1cnJlbnRTZXNzaW9uQWdlbnRDb2xvcixcbiAgaXNDdXN0b21UaXRsZUVuYWJsZWQsXG59IGZyb20gJy4uLy4uL3V0aWxzL3Nlc3Npb25TdG9yYWdlLmpzJ1xuaW1wb3J0IHsgZ2V0RmVhdHVyZVZhbHVlX0NBQ0hFRF9NQVlfQkVfU1RBTEUgfSBmcm9tICcuLi9hbmFseXRpY3MvZ3Jvd3RoYm9vay5qcydcbmltcG9ydCB7XG4gIGZvcm1hdEdyYW50QW1vdW50LFxuICBnZXRDYWNoZWRPdmVyYWdlQ3JlZGl0R3JhbnQsXG59IGZyb20gJy4uL2FwaS9vdmVyYWdlQ3JlZGl0R3JhbnQuanMnXG5pbXBvcnQge1xuICBjaGVja0NhY2hlZFBhc3Nlc0VsaWdpYmlsaXR5LFxuICBmb3JtYXRDcmVkaXRBbW91bnQsXG4gIGdldENhY2hlZFJlZmVycmVyUmV3YXJkLFxufSBmcm9tICcuLi9hcGkvcmVmZXJyYWwuanMnXG5pbXBvcnQgeyBnZXRTZXNzaW9uc1NpbmNlTGFzdFNob3duIH0gZnJvbSAnLi90aXBIaXN0b3J5LmpzJ1xuaW1wb3J0IHR5cGUgeyBUaXAsIFRpcENvbnRleHQgfSBmcm9tICcuL3R5cGVzLmpzJ1xuXG5sZXQgX2lzT2ZmaWNpYWxNYXJrZXRwbGFjZUluc3RhbGxlZENhY2hlOiBib29sZWFuIHwgdW5kZWZpbmVkXG5hc3luYyBmdW5jdGlvbiBpc09mZmljaWFsTWFya2V0cGxhY2VJbnN0YWxsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIGlmIChfaXNPZmZpY2lhbE1hcmtldHBsYWNlSW5zdGFsbGVkQ2FjaGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBfaXNPZmZpY2lhbE1hcmtldHBsYWNlSW5zdGFsbGVkQ2FjaGVcbiAgfVxuICBjb25zdCBjb25maWcgPSBhd2FpdCBsb2FkS25vd25NYXJrZXRwbGFjZXNDb25maWdTYWZlKClcbiAgX2lzT2ZmaWNpYWxNYXJrZXRwbGFjZUluc3RhbGxlZENhY2hlID0gT0ZGSUNJQUxfTUFSS0VUUExBQ0VfTkFNRSBpbiBjb25maWdcbiAgcmV0dXJuIF9pc09mZmljaWFsTWFya2V0cGxhY2VJbnN0YWxsZWRDYWNoZVxufVxuXG5hc3luYyBmdW5jdGlvbiBpc01hcmtldHBsYWNlUGx1Z2luUmVsZXZhbnQoXG4gIHBsdWdpbk5hbWU6IHN0cmluZyxcbiAgY29udGV4dDogVGlwQ29udGV4dCB8IHVuZGVmaW5lZCxcbiAgc2lnbmFsczogeyBmaWxlUGF0aD86IFJlZ0V4cDsgY2xpPzogc3RyaW5nW10gfSxcbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICBpZiAoIShhd2FpdCBpc09mZmljaWFsTWFya2V0cGxhY2VJbnN0YWxsZWQoKSkpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBpZiAoaXNQbHVnaW5JbnN0YWxsZWQoYCR7cGx1Z2luTmFtZX1AJHtPRkZJQ0lBTF9NQVJLRVRQTEFDRV9OQU1FfWApKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgY29uc3QgeyBiYXNoVG9vbHMgfSA9IGNvbnRleHQgPz8ge31cbiAgaWYgKHNpZ25hbHMuY2xpICYmIGJhc2hUb29scz8uc2l6ZSkge1xuICAgIGlmIChzaWduYWxzLmNsaS5zb21lKGNtZCA9PiBiYXNoVG9vbHMuaGFzKGNtZCkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuICBpZiAoc2lnbmFscy5maWxlUGF0aCAmJiBjb250ZXh0Py5yZWFkRmlsZVN0YXRlKSB7XG4gICAgY29uc3QgcmVhZEZpbGVzID0gY2FjaGVLZXlzKGNvbnRleHQucmVhZEZpbGVTdGF0ZSlcbiAgICBpZiAocmVhZEZpbGVzLnNvbWUoZnAgPT4gc2lnbmFscy5maWxlUGF0aCEudGVzdChmcCkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuY29uc3QgZXh0ZXJuYWxUaXBzOiBUaXBbXSA9IFtcbiAge1xuICAgIGlkOiAnbmV3LXVzZXItd2FybXVwJyxcbiAgICBjb250ZW50OiBhc3luYyAoKSA9PlxuICAgICAgYFN0YXJ0IHdpdGggc21hbGwgZmVhdHVyZXMgb3IgYnVnIGZpeGVzLCB0ZWxsIEJsYXVkZSB0byBwcm9wb3NlIGEgcGxhbiwgYW5kIHZlcmlmeSBpdHMgc3VnZ2VzdGVkIGVkaXRzYCxcbiAgICBjb29sZG93blNlc3Npb25zOiAzLFxuICAgIGFzeW5jIGlzUmVsZXZhbnQoKSB7XG4gICAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKVxuICAgICAgcmV0dXJuIGNvbmZpZy5udW1TdGFydHVwcyA8IDEwXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAncGxhbi1tb2RlLWZvci1jb21wbGV4LXRhc2tzJyxcbiAgICBjb250ZW50OiBhc3luYyAoKSA9PlxuICAgICAgYFVzZSBQbGFuIE1vZGUgdG8gcHJlcGFyZSBmb3IgYSBjb21wbGV4IHJlcXVlc3QgYmVmb3JlIG1ha2luZyBjaGFuZ2VzLiBQcmVzcyAke2dldFNob3J0Y3V0RGlzcGxheSgnY2hhdDpjeWNsZU1vZGUnLCAnQ2hhdCcsICdzaGlmdCt0YWInKX0gdHdpY2UgdG8gZW5hYmxlLmAsXG4gICAgY29vbGRvd25TZXNzaW9uczogNSxcbiAgICBpc1JlbGV2YW50OiBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuVVNFUl9UWVBFID09PSAnYW50JykgcmV0dXJuIGZhbHNlXG4gICAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKVxuICAgICAgLy8gU2hvdyB0byB1c2VycyB3aG8gaGF2ZW4ndCB1c2VkIHBsYW4gbW9kZSByZWNlbnRseSAoNysgZGF5cylcbiAgICAgIGNvbnN0IGRheXNTaW5jZUxhc3RVc2UgPSBjb25maWcubGFzdFBsYW5Nb2RlVXNlXG4gICAgICAgID8gKERhdGUubm93KCkgLSBjb25maWcubGFzdFBsYW5Nb2RlVXNlKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KVxuICAgICAgICA6IEluZmluaXR5XG4gICAgICByZXR1cm4gZGF5c1NpbmNlTGFzdFVzZSA+IDdcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdkZWZhdWx0LXBlcm1pc3Npb24tbW9kZS1jb25maWcnLFxuICAgIGNvbnRlbnQ6IGFzeW5jICgpID0+XG4gICAgICBgVXNlIC9jb25maWcgdG8gY2hhbmdlIHlvdXIgZGVmYXVsdCBwZXJtaXNzaW9uIG1vZGUgKGluY2x1ZGluZyBQbGFuIE1vZGUpYCxcbiAgICBjb29sZG93blNlc3Npb25zOiAxMCxcbiAgICBpc1JlbGV2YW50OiBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKVxuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IGdldFNldHRpbmdzX0RFUFJFQ0FURUQoKVxuICAgICAgICAvLyBTaG93IGlmIHRoZXkndmUgdXNlZCBwbGFuIG1vZGUgYnV0IGhhdmVuJ3Qgc2V0IGEgZGVmYXVsdFxuICAgICAgICBjb25zdCBoYXNVc2VkUGxhbk1vZGUgPSBCb29sZWFuKGNvbmZpZy5sYXN0UGxhbk1vZGVVc2UpXG4gICAgICAgIGNvbnN0IGhhc0RlZmF1bHRNb2RlID0gQm9vbGVhbihzZXR0aW5ncz8ucGVybWlzc2lvbnM/LmRlZmF1bHRNb2RlKVxuICAgICAgICByZXR1cm4gaGFzVXNlZFBsYW5Nb2RlICYmICFoYXNEZWZhdWx0TW9kZVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgIGBGYWlsZWQgdG8gY2hlY2sgZGVmYXVsdC1wZXJtaXNzaW9uLW1vZGUtY29uZmlnIHRpcCByZWxldmFuY2U6ICR7ZXJyb3J9YCxcbiAgICAgICAgICB7IGxldmVsOiAnd2FybicgfSxcbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdnaXQtd29ya3RyZWVzJyxcbiAgICBjb250ZW50OiBhc3luYyAoKSA9PlxuICAgICAgJ1VzZSBnaXQgd29ya3RyZWVzIHRvIHJ1biBtdWx0aXBsZSBDbGF1ZGUgc2Vzc2lvbnMgaW4gcGFyYWxsZWwuJyxcbiAgICBjb29sZG93blNlc3Npb25zOiAxMCxcbiAgICBpc1JlbGV2YW50OiBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKVxuICAgICAgICBjb25zdCB3b3JrdHJlZUNvdW50ID0gYXdhaXQgZ2V0V29ya3RyZWVDb3VudCgpXG4gICAgICAgIHJldHVybiB3b3JrdHJlZUNvdW50IDw9IDEgJiYgY29uZmlnLm51bVN0YXJ0dXBzID4gNTBcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAnY29sb3Itd2hlbi1tdWx0aS1jbGF1ZGluZycsXG4gICAgY29udGVudDogYXN5bmMgKCkgPT5cbiAgICAgICdSdW5uaW5nIG11bHRpcGxlIENsYXVkZSBzZXNzaW9ucz8gVXNlIC9jb2xvciBhbmQgL3JlbmFtZSB0byB0ZWxsIHRoZW0gYXBhcnQgYXQgYSBnbGFuY2UuJyxcbiAgICBjb29sZG93blNlc3Npb25zOiAxMCxcbiAgICBpc1JlbGV2YW50OiBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoZ2V0Q3VycmVudFNlc3Npb25BZ2VudENvbG9yKCkpIHJldHVybiBmYWxzZVxuICAgICAgY29uc3QgY291bnQgPSBhd2FpdCBjb3VudENvbmN1cnJlbnRTZXNzaW9ucygpXG4gICAgICByZXR1cm4gY291bnQgPj0gMlxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ3Rlcm1pbmFsLXNldHVwJyxcbiAgICBjb250ZW50OiBhc3luYyAoKSA9PlxuICAgICAgZW52LnRlcm1pbmFsID09PSAnQXBwbGVfVGVybWluYWwnXG4gICAgICAgID8gJ1J1biAvdGVybWluYWwtc2V0dXAgdG8gZW5hYmxlIGNvbnZlbmllbnQgdGVybWluYWwgaW50ZWdyYXRpb24gbGlrZSBPcHRpb24gKyBFbnRlciBmb3IgbmV3IGxpbmUgYW5kIG1vcmUnXG4gICAgICAgIDogJ1J1biAvdGVybWluYWwtc2V0dXAgdG8gZW5hYmxlIGNvbnZlbmllbnQgdGVybWluYWwgaW50ZWdyYXRpb24gbGlrZSBTaGlmdCArIEVudGVyIGZvciBuZXcgbGluZSBhbmQgbW9yZScsXG4gICAgY29vbGRvd25TZXNzaW9uczogMTAsXG4gICAgYXN5bmMgaXNSZWxldmFudCgpIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpXG4gICAgICBpZiAoZW52LnRlcm1pbmFsID09PSAnQXBwbGVfVGVybWluYWwnKSB7XG4gICAgICAgIHJldHVybiAhY29uZmlnLm9wdGlvbkFzTWV0YUtleUluc3RhbGxlZFxuICAgICAgfVxuICAgICAgcmV0dXJuICFjb25maWcuc2hpZnRFbnRlcktleUJpbmRpbmdJbnN0YWxsZWRcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdzaGlmdC1lbnRlcicsXG4gICAgY29udGVudDogYXN5bmMgKCkgPT5cbiAgICAgIGVudi50ZXJtaW5hbCA9PT0gJ0FwcGxlX1Rlcm1pbmFsJ1xuICAgICAgICA/ICdQcmVzcyBPcHRpb24rRW50ZXIgdG8gc2VuZCBhIG11bHRpLWxpbmUgbWVzc2FnZSdcbiAgICAgICAgOiAnUHJlc3MgU2hpZnQrRW50ZXIgdG8gc2VuZCBhIG11bHRpLWxpbmUgbWVzc2FnZScsXG4gICAgY29vbGRvd25TZXNzaW9uczogMTAsXG4gICAgYXN5bmMgaXNSZWxldmFudCgpIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpXG4gICAgICByZXR1cm4gQm9vbGVhbihcbiAgICAgICAgKGVudi50ZXJtaW5hbCA9PT0gJ0FwcGxlX1Rlcm1pbmFsJ1xuICAgICAgICAgID8gY29uZmlnLm9wdGlvbkFzTWV0YUtleUluc3RhbGxlZFxuICAgICAgICAgIDogY29uZmlnLnNoaWZ0RW50ZXJLZXlCaW5kaW5nSW5zdGFsbGVkKSAmJiBjb25maWcubnVtU3RhcnR1cHMgPiAzLFxuICAgICAgKVxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ3NoaWZ0LWVudGVyLXNldHVwJyxcbiAgICBjb250ZW50OiBhc3luYyAoKSA9PlxuICAgICAgZW52LnRlcm1pbmFsID09PSAnQXBwbGVfVGVybWluYWwnXG4gICAgICAgID8gJ1J1biAvdGVybWluYWwtc2V0dXAgdG8gZW5hYmxlIE9wdGlvbitFbnRlciBmb3IgbmV3IGxpbmVzJ1xuICAgICAgICA6ICdSdW4gL3Rlcm1pbmFsLXNldHVwIHRvIGVuYWJsZSBTaGlmdCtFbnRlciBmb3IgbmV3IGxpbmVzJyxcbiAgICBjb29sZG93blNlc3Npb25zOiAxMCxcbiAgICBhc3luYyBpc1JlbGV2YW50KCkge1xuICAgICAgaWYgKCFzaG91bGRPZmZlclRlcm1pbmFsU2V0dXAoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpXG4gICAgICByZXR1cm4gIShlbnYudGVybWluYWwgPT09ICdBcHBsZV9UZXJtaW5hbCdcbiAgICAgICAgPyBjb25maWcub3B0aW9uQXNNZXRhS2V5SW5zdGFsbGVkXG4gICAgICAgIDogY29uZmlnLnNoaWZ0RW50ZXJLZXlCaW5kaW5nSW5zdGFsbGVkKVxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ21lbW9yeS1jb21tYW5kJyxcbiAgICBjb250ZW50OiBhc3luYyAoKSA9PiAnVXNlIC9tZW1vcnkgdG8gdmlldyBhbmQgbWFuYWdlIENsYXVkZSBtZW1vcnknLFxuICAgIGNvb2xkb3duU2Vzc2lvbnM6IDE1LFxuICAgIGFzeW5jIGlzUmVsZXZhbnQoKSB7XG4gICAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKVxuICAgICAgcmV0dXJuIGNvbmZpZy5tZW1vcnlVc2FnZUNvdW50IDw9IDBcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICd0aGVtZS1jb21tYW5kJyxcbiAgICBjb250ZW50OiBhc3luYyAoKSA9PiAnVXNlIC90aGVtZSB0byBjaGFuZ2UgdGhlIGNvbG9yIHRoZW1lJyxcbiAgICBjb29sZG93blNlc3Npb25zOiAyMCxcbiAgICBpc1JlbGV2YW50OiBhc3luYyAoKSA9PiB0cnVlLFxuICB9LFxuICB7XG4gICAgaWQ6ICdjb2xvcnRlcm0tdHJ1ZWNvbG9yJyxcbiAgICBjb250ZW50OiBhc3luYyAoKSA9PlxuICAgICAgJ1RyeSBzZXR0aW5nIGVudmlyb25tZW50IHZhcmlhYmxlIENPTE9SVEVSTT10cnVlY29sb3IgZm9yIHJpY2hlciBjb2xvcnMnLFxuICAgIGNvb2xkb3duU2Vzc2lvbnM6IDMwLFxuICAgIGlzUmVsZXZhbnQ6IGFzeW5jICgpID0+ICFwcm9jZXNzLmVudi5DT0xPUlRFUk0gJiYgY2hhbGsubGV2ZWwgPCAzLFxuICB9LFxuICB7XG4gICAgaWQ6ICdwb3dlcnNoZWxsLXRvb2wtZW52JyxcbiAgICBjb250ZW50OiBhc3luYyAoKSA9PlxuICAgICAgJ1NldCBDTEFVREVfQ09ERV9VU0VfUE9XRVJTSEVMTF9UT09MPTEgdG8gZW5hYmxlIHRoZSBQb3dlclNoZWxsIHRvb2wgKHByZXZpZXcpJyxcbiAgICBjb29sZG93blNlc3Npb25zOiAxMCxcbiAgICBpc1JlbGV2YW50OiBhc3luYyAoKSA9PlxuICAgICAgZ2V0UGxhdGZvcm0oKSA9PT0gJ3dpbmRvd3MnICYmXG4gICAgICBwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9VU0VfUE9XRVJTSEVMTF9UT09MID09PSB1bmRlZmluZWQsXG4gIH0sXG4gIHtcbiAgICBpZDogJ3N0YXR1cy1saW5lJyxcbiAgICBjb250ZW50OiBhc3luYyAoKSA9PlxuICAgICAgJ1VzZSAvc3RhdHVzbGluZSB0byBzZXQgdXAgYSBjdXN0b20gc3RhdHVzIGxpbmUgdGhhdCB3aWxsIGRpc3BsYXkgYmVuZWF0aCB0aGUgaW5wdXQgYm94JyxcbiAgICBjb29sZG93blNlc3Npb25zOiAyNSxcbiAgICBpc1JlbGV2YW50OiBhc3luYyAoKSA9PiBnZXRTZXR0aW5nc19ERVBSRUNBVEVEKCkuc3RhdHVzTGluZSA9PT0gdW5kZWZpbmVkLFxuICB9LFxuICB7XG4gICAgaWQ6ICdwcm9tcHQtcXVldWUnLFxuICAgIGNvbnRlbnQ6IGFzeW5jICgpID0+XG4gICAgICAnSGl0IEVudGVyIHRvIHF1ZXVlIHVwIGFkZGl0aW9uYWwgbWVzc2FnZXMgd2hpbGUgQ2xhdWRlIGlzIHdvcmtpbmcuJyxcbiAgICBjb29sZG93blNlc3Npb25zOiA1LFxuICAgIGFzeW5jIGlzUmVsZXZhbnQoKSB7XG4gICAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKVxuICAgICAgcmV0dXJuIGNvbmZpZy5wcm9tcHRRdWV1ZVVzZUNvdW50IDw9IDNcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdlbnRlci10by1zdGVlci1pbi1yZWxhdGltZScsXG4gICAgY29udGVudDogYXN5bmMgKCkgPT5cbiAgICAgICdTZW5kIG1lc3NhZ2VzIHRvIENsYXVkZSB3aGlsZSBpdCB3b3JrcyB0byBzdGVlciBDbGF1ZGUgaW4gcmVhbC10aW1lJyxcbiAgICBjb29sZG93blNlc3Npb25zOiAyMCxcbiAgICBpc1JlbGV2YW50OiBhc3luYyAoKSA9PiB0cnVlLFxuICB9LFxuICB7XG4gICAgaWQ6ICd0b2RvLWxpc3QnLFxuICAgIGNvbnRlbnQ6IGFzeW5jICgpID0+XG4gICAgICAnQXNrIENsYXVkZSB0byBjcmVhdGUgYSB0b2RvIGxpc3Qgd2hlbiB3b3JraW5nIG9uIGNvbXBsZXggdGFza3MgdG8gdHJhY2sgcHJvZ3Jlc3MgYW5kIHJlbWFpbiBvbiB0cmFjaycsXG4gICAgY29vbGRvd25TZXNzaW9uczogMjAsXG4gICAgaXNSZWxldmFudDogYXN5bmMgKCkgPT4gdHJ1ZSxcbiAgfSxcbiAge1xuICAgIGlkOiAndnNjb2RlLWNvbW1hbmQtaW5zdGFsbCcsXG4gICAgY29udGVudDogYXN5bmMgKCkgPT5cbiAgICAgIGBPcGVuIHRoZSBDb21tYW5kIFBhbGV0dGUgKENtZCtTaGlmdCtQKSBhbmQgcnVuIFwiU2hlbGwgQ29tbWFuZDogSW5zdGFsbCAnJHtlbnYudGVybWluYWwgPT09ICd2c2NvZGUnID8gJ2NvZGUnIDogZW52LnRlcm1pbmFsfScgY29tbWFuZCBpbiBQQVRIXCIgdG8gZW5hYmxlIElERSBpbnRlZ3JhdGlvbmAsXG4gICAgY29vbGRvd25TZXNzaW9uczogMCxcbiAgICBhc3luYyBpc1JlbGV2YW50KCkge1xuICAgICAgLy8gT25seSBzaG93IHRoaXMgdGlwIGlmIHdlJ3JlIGluIGEgVlMgQ29kZS1zdHlsZSB0ZXJtaW5hbFxuICAgICAgaWYgKCFpc1N1cHBvcnRlZFZTQ29kZVRlcm1pbmFsKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICBpZiAoZ2V0UGxhdGZvcm0oKSAhPT0gJ21hY29zJykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIHJlbGV2YW50IGNvbW1hbmQgaXMgYXZhaWxhYmxlXG4gICAgICBzd2l0Y2ggKGVudi50ZXJtaW5hbCkge1xuICAgICAgICBjYXNlICd2c2NvZGUnOlxuICAgICAgICAgIHJldHVybiAhKGF3YWl0IGlzVlNDb2RlSW5zdGFsbGVkKCkpXG4gICAgICAgIGNhc2UgJ2N1cnNvcic6XG4gICAgICAgICAgcmV0dXJuICEoYXdhaXQgaXNDdXJzb3JJbnN0YWxsZWQoKSlcbiAgICAgICAgY2FzZSAnd2luZHN1cmYnOlxuICAgICAgICAgIHJldHVybiAhKGF3YWl0IGlzV2luZHN1cmZJbnN0YWxsZWQoKSlcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdpZGUtdXBzZWxsLWV4dGVybmFsLXRlcm1pbmFsJyxcbiAgICBjb250ZW50OiBhc3luYyAoKSA9PiAnQ29ubmVjdCBDbGF1ZGUgdG8geW91ciBJREUgXHUwMEI3IC9pZGUnLFxuICAgIGNvb2xkb3duU2Vzc2lvbnM6IDQsXG4gICAgYXN5bmMgaXNSZWxldmFudCgpIHtcbiAgICAgIGlmIChpc1N1cHBvcnRlZFRlcm1pbmFsKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIC8vIFVzZSBsb2NrZmlsZXMgYXMgYSAocXVpY2tlcikgc2lnbmFsIGZvciBydW5uaW5nIElERXNcbiAgICAgIGNvbnN0IGxvY2tmaWxlcyA9IGF3YWl0IGdldFNvcnRlZElkZUxvY2tmaWxlcygpXG4gICAgICBpZiAobG9ja2ZpbGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgY29uc3QgcnVubmluZ0lERXMgPSBhd2FpdCBkZXRlY3RSdW5uaW5nSURFc0NhY2hlZCgpXG4gICAgICByZXR1cm4gcnVubmluZ0lERXMubGVuZ3RoID4gMFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ2luc3RhbGwtZ2l0aHViLWFwcCcsXG4gICAgY29udGVudDogYXN5bmMgKCkgPT5cbiAgICAgICdSdW4gL2luc3RhbGwtZ2l0aHViLWFwcCB0byB0YWcgQGNsYXVkZSByaWdodCBmcm9tIHlvdXIgR2l0aHViIGlzc3VlcyBhbmQgUFJzJyxcbiAgICBjb29sZG93blNlc3Npb25zOiAxMCxcbiAgICBpc1JlbGV2YW50OiBhc3luYyAoKSA9PiAhZ2V0R2xvYmFsQ29uZmlnKCkuZ2l0aHViQWN0aW9uU2V0dXBDb3VudCxcbiAgfSxcbiAge1xuICAgIGlkOiAnaW5zdGFsbC1zbGFjay1hcHAnLFxuICAgIGNvbnRlbnQ6IGFzeW5jICgpID0+ICdSdW4gL2luc3RhbGwtc2xhY2stYXBwIHRvIHVzZSBDbGF1ZGUgaW4gU2xhY2snLFxuICAgIGNvb2xkb3duU2Vzc2lvbnM6IDEwLFxuICAgIGlzUmVsZXZhbnQ6IGFzeW5jICgpID0+ICFnZXRHbG9iYWxDb25maWcoKS5zbGFja0FwcEluc3RhbGxDb3VudCxcbiAgfSxcbiAge1xuICAgIGlkOiAncGVybWlzc2lvbnMnLFxuICAgIGNvbnRlbnQ6IGFzeW5jICgpID0+XG4gICAgICAnVXNlIC9wZXJtaXNzaW9ucyB0byBwcmUtYXBwcm92ZSBhbmQgcHJlLWRlbnkgYmFzaCwgZWRpdCwgYW5kIE1DUCB0b29scycsXG4gICAgY29vbGRvd25TZXNzaW9uczogMTAsXG4gICAgYXN5bmMgaXNSZWxldmFudCgpIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpXG4gICAgICByZXR1cm4gY29uZmlnLm51bVN0YXJ0dXBzID4gMTBcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdkcmFnLWFuZC1kcm9wLWltYWdlcycsXG4gICAgY29udGVudDogYXN5bmMgKCkgPT5cbiAgICAgICdEaWQgeW91IGtub3cgeW91IGNhbiBkcmFnIGFuZCBkcm9wIGltYWdlIGZpbGVzIGludG8geW91ciB0ZXJtaW5hbD8nLFxuICAgIGNvb2xkb3duU2Vzc2lvbnM6IDEwLFxuICAgIGlzUmVsZXZhbnQ6IGFzeW5jICgpID0+ICFlbnYuaXNTU0goKSxcbiAgfSxcbiAge1xuICAgIGlkOiAncGFzdGUtaW1hZ2VzLW1hYycsXG4gICAgY29udGVudDogYXN5bmMgKCkgPT5cbiAgICAgICdQYXN0ZSBpbWFnZXMgaW50byBCbGF1ZGUgdXNpbmcgY29udHJvbCt2IChub3QgY21kK3YhKScsXG4gICAgY29vbGRvd25TZXNzaW9uczogMTAsXG4gICAgaXNSZWxldmFudDogYXN5bmMgKCkgPT4gZ2V0UGxhdGZvcm0oKSA9PT0gJ21hY29zJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnZG91YmxlLWVzYycsXG4gICAgY29udGVudDogYXN5bmMgKCkgPT5cbiAgICAgICdEb3VibGUtdGFwIGVzYyB0byByZXdpbmQgdGhlIGNvbnZlcnNhdGlvbiB0byBhIHByZXZpb3VzIHBvaW50IGluIHRpbWUnLFxuICAgIGNvb2xkb3duU2Vzc2lvbnM6IDEwLFxuICAgIGlzUmVsZXZhbnQ6IGFzeW5jICgpID0+ICFmaWxlSGlzdG9yeUVuYWJsZWQoKSxcbiAgfSxcbiAge1xuICAgIGlkOiAnZG91YmxlLWVzYy1jb2RlLXJlc3RvcmUnLFxuICAgIGNvbnRlbnQ6IGFzeW5jICgpID0+XG4gICAgICAnRG91YmxlLXRhcCBlc2MgdG8gcmV3aW5kIHRoZSBjb2RlIGFuZC9vciBjb252ZXJzYXRpb24gdG8gYSBwcmV2aW91cyBwb2ludCBpbiB0aW1lJyxcbiAgICBjb29sZG93blNlc3Npb25zOiAxMCxcbiAgICBpc1JlbGV2YW50OiBhc3luYyAoKSA9PiBmaWxlSGlzdG9yeUVuYWJsZWQoKSxcbiAgfSxcbiAge1xuICAgIGlkOiAnY29udGludWUnLFxuICAgIGNvbnRlbnQ6IGFzeW5jICgpID0+XG4gICAgICAnUnVuIGJsYXVkZSAtLWNvbnRpbnVlIG9yIGJsYXVkZSAtLXJlc3VtZSB0byByZXN1bWUgYSBjb252ZXJzYXRpb24nLFxuICAgIGNvb2xkb3duU2Vzc2lvbnM6IDEwLFxuICAgIGlzUmVsZXZhbnQ6IGFzeW5jICgpID0+IHRydWUsXG4gIH0sXG4gIHtcbiAgICBpZDogJ3JlbmFtZS1jb252ZXJzYXRpb24nLFxuICAgIGNvbnRlbnQ6IGFzeW5jICgpID0+XG4gICAgICAnTmFtZSB5b3VyIGNvbnZlcnNhdGlvbnMgd2l0aCAvcmVuYW1lIHRvIGZpbmQgdGhlbSBlYXNpbHkgaW4gL3Jlc3VtZSBsYXRlcicsXG4gICAgY29vbGRvd25TZXNzaW9uczogMTUsXG4gICAgaXNSZWxldmFudDogYXN5bmMgKCkgPT5cbiAgICAgIGlzQ3VzdG9tVGl0bGVFbmFibGVkKCkgJiYgZ2V0R2xvYmFsQ29uZmlnKCkubnVtU3RhcnR1cHMgPiAxMCxcbiAgfSxcbiAge1xuICAgIGlkOiAnY3VzdG9tLWNvbW1hbmRzJyxcbiAgICBjb250ZW50OiBhc3luYyAoKSA9PlxuICAgICAgJ0NyZWF0ZSBza2lsbHMgYnkgYWRkaW5nIC5tZCBmaWxlcyB0byAuY2xhdWRlL3NraWxscy8gaW4geW91ciBwcm9qZWN0IG9yIH4vLmNsYXVkZS9za2lsbHMvIGZvciBza2lsbHMgdGhhdCB3b3JrIGluIGFueSBwcm9qZWN0JyxcbiAgICBjb29sZG93blNlc3Npb25zOiAxNSxcbiAgICBhc3luYyBpc1JlbGV2YW50KCkge1xuICAgICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKClcbiAgICAgIHJldHVybiBjb25maWcubnVtU3RhcnR1cHMgPiAxMFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ3NoaWZ0LXRhYicsXG4gICAgY29udGVudDogYXN5bmMgKCkgPT5cbiAgICAgIHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCdcbiAgICAgICAgPyBgSGl0ICR7Z2V0U2hvcnRjdXREaXNwbGF5KCdjaGF0OmN5Y2xlTW9kZScsICdDaGF0JywgJ3NoaWZ0K3RhYicpfSB0byBjeWNsZSBiZXR3ZWVuIGRlZmF1bHQgbW9kZSBhbmQgYXV0byBtb2RlYFxuICAgICAgICA6IGBIaXQgJHtnZXRTaG9ydGN1dERpc3BsYXkoJ2NoYXQ6Y3ljbGVNb2RlJywgJ0NoYXQnLCAnc2hpZnQrdGFiJyl9IHRvIGN5Y2xlIGJldHdlZW4gZGVmYXVsdCBtb2RlLCBhdXRvLWFjY2VwdCBlZGl0IG1vZGUsIGFuZCBwbGFuIG1vZGVgLFxuICAgIGNvb2xkb3duU2Vzc2lvbnM6IDEwLFxuICAgIGlzUmVsZXZhbnQ6IGFzeW5jICgpID0+IHRydWUsXG4gIH0sXG4gIHtcbiAgICBpZDogJ2ltYWdlLXBhc3RlJyxcbiAgICBjb250ZW50OiBhc3luYyAoKSA9PlxuICAgICAgYFVzZSAke2dldFNob3J0Y3V0RGlzcGxheSgnY2hhdDppbWFnZVBhc3RlJywgJ0NoYXQnLCAnY3RybCt2Jyl9IHRvIHBhc3RlIGltYWdlcyBmcm9tIHlvdXIgY2xpcGJvYXJkYCxcbiAgICBjb29sZG93blNlc3Npb25zOiAyMCxcbiAgICBpc1JlbGV2YW50OiBhc3luYyAoKSA9PiB0cnVlLFxuICB9LFxuICB7XG4gICAgaWQ6ICdjdXN0b20tYWdlbnRzJyxcbiAgICBjb250ZW50OiBhc3luYyAoKSA9PlxuICAgICAgJ1VzZSAvYWdlbnRzIHRvIG9wdGltaXplIHNwZWNpZmljIHRhc2tzLiBFZy4gU29mdHdhcmUgQXJjaGl0ZWN0LCBDb2RlIFdyaXRlciwgQ29kZSBSZXZpZXdlcicsXG4gICAgY29vbGRvd25TZXNzaW9uczogMTUsXG4gICAgYXN5bmMgaXNSZWxldmFudCgpIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpXG4gICAgICByZXR1cm4gY29uZmlnLm51bVN0YXJ0dXBzID4gNVxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ2FnZW50LWZsYWcnLFxuICAgIGNvbnRlbnQ6IGFzeW5jICgpID0+XG4gICAgICAnVXNlIC0tYWdlbnQgPGFnZW50X25hbWU+IHRvIGRpcmVjdGx5IHN0YXJ0IGEgY29udmVyc2F0aW9uIHdpdGggYSBzdWJhZ2VudCcsXG4gICAgY29vbGRvd25TZXNzaW9uczogMTUsXG4gICAgYXN5bmMgaXNSZWxldmFudCgpIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpXG4gICAgICByZXR1cm4gY29uZmlnLm51bVN0YXJ0dXBzID4gNVxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ2Rlc2t0b3AtYXBwJyxcbiAgICBjb250ZW50OiBhc3luYyAoKSA9PlxuICAgICAgJ1J1biBCbGF1ZGUgbG9jYWxseSBvciByZW1vdGVseSB1c2luZyB0aGUgQmxhdWRlIGRlc2t0b3AgYXBwOiBjbGF1LmRlL2Rlc2t0b3AnLFxuICAgIGNvb2xkb3duU2Vzc2lvbnM6IDE1LFxuICAgIGlzUmVsZXZhbnQ6IGFzeW5jICgpID0+IGdldFBsYXRmb3JtKCkgIT09ICdsaW51eCcsXG4gIH0sXG4gIHtcbiAgICBpZDogJ2Rlc2t0b3Atc2hvcnRjdXQnLFxuICAgIGNvbnRlbnQ6IGFzeW5jIGN0eCA9PiB7XG4gICAgICBjb25zdCBibHVlID0gY29sb3IoJ3N1Z2dlc3Rpb24nLCBjdHgudGhlbWUpXG4gICAgICByZXR1cm4gYENvbnRpbnVlIHlvdXIgc2Vzc2lvbiBpbiBCbGF1ZGUgRGVza3RvcCB3aXRoICR7Ymx1ZSgnL2Rlc2t0b3AnKX1gXG4gICAgfSxcbiAgICBjb29sZG93blNlc3Npb25zOiAxNSxcbiAgICBpc1JlbGV2YW50OiBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoIWdldERlc2t0b3BVcHNlbGxDb25maWcoKS5lbmFibGVfc2hvcnRjdXRfdGlwKSByZXR1cm4gZmFsc2VcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHByb2Nlc3MucGxhdGZvcm0gPT09ICdkYXJ3aW4nIHx8XG4gICAgICAgIChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInICYmIHByb2Nlc3MuYXJjaCA9PT0gJ3g2NCcpXG4gICAgICApXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAnd2ViLWFwcCcsXG4gICAgY29udGVudDogYXN5bmMgKCkgPT5cbiAgICAgICdSdW4gdGFza3MgaW4gdGhlIGNsb3VkIHdoaWxlIHlvdSBrZWVwIGNvZGluZyBsb2NhbGx5IFx1MDBCNyBjbGF1LmRlL3dlYicsXG4gICAgY29vbGRvd25TZXNzaW9uczogMTUsXG4gICAgaXNSZWxldmFudDogYXN5bmMgKCkgPT4gdHJ1ZSxcbiAgfSxcbiAge1xuICAgIGlkOiAnbW9iaWxlLWFwcCcsXG4gICAgY29udGVudDogYXN5bmMgKCkgPT5cbiAgICAgICcvbW9iaWxlIHRvIHVzZSBCbGF1ZGUgZnJvbSB0aGUgQmxhdWRlIGFwcCBvbiB5b3VyIHBob25lJyxcbiAgICBjb29sZG93blNlc3Npb25zOiAxNSxcbiAgICBpc1JlbGV2YW50OiBhc3luYyAoKSA9PiB0cnVlLFxuICB9LFxuICB7XG4gICAgaWQ6ICdvcHVzcGxhbi1tb2RlLXJlbWluZGVyJyxcbiAgICBjb250ZW50OiBhc3luYyAoKSA9PlxuICAgICAgYFlvdXIgZGVmYXVsdCBtb2RlbCBzZXR0aW5nIGlzIE9wdXMgUGxhbiBNb2RlLiBQcmVzcyAke2dldFNob3J0Y3V0RGlzcGxheSgnY2hhdDpjeWNsZU1vZGUnLCAnQ2hhdCcsICdzaGlmdCt0YWInKX0gdHdpY2UgdG8gYWN0aXZhdGUgUGxhbiBNb2RlIGFuZCBwbGFuIHdpdGggQmxhdWRlIE9wdXMuYCxcbiAgICBjb29sZG93blNlc3Npb25zOiAyLFxuICAgIGFzeW5jIGlzUmVsZXZhbnQoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuVVNFUl9UWVBFID09PSAnYW50JykgcmV0dXJuIGZhbHNlXG4gICAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKVxuICAgICAgY29uc3QgbW9kZWxTZXR0aW5nID0gZ2V0VXNlclNwZWNpZmllZE1vZGVsU2V0dGluZygpXG4gICAgICBjb25zdCBoYXNPcHVzUGxhbk1vZGUgPSBtb2RlbFNldHRpbmcgPT09ICdvcHVzcGxhbidcbiAgICAgIC8vIFNob3cgcmVtaW5kZXIgaWYgdGhleSBoYXZlIE9wdXMgUGxhbiBNb2RlIGFuZCBoYXZlbid0IHVzZWQgcGxhbiBtb2RlIHJlY2VudGx5ICgzKyBkYXlzKVxuICAgICAgY29uc3QgZGF5c1NpbmNlTGFzdFVzZSA9IGNvbmZpZy5sYXN0UGxhbk1vZGVVc2VcbiAgICAgICAgPyAoRGF0ZS5ub3coKSAtIGNvbmZpZy5sYXN0UGxhbk1vZGVVc2UpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpXG4gICAgICAgIDogSW5maW5pdHlcbiAgICAgIHJldHVybiBoYXNPcHVzUGxhbk1vZGUgJiYgZGF5c1NpbmNlTGFzdFVzZSA+IDNcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdmcm9udGVuZC1kZXNpZ24tcGx1Z2luJyxcbiAgICBjb250ZW50OiBhc3luYyBjdHggPT4ge1xuICAgICAgY29uc3QgYmx1ZSA9IGNvbG9yKCdzdWdnZXN0aW9uJywgY3R4LnRoZW1lKVxuICAgICAgcmV0dXJuIGBXb3JraW5nIHdpdGggSFRNTC9DU1M/IEluc3RhbGwgdGhlIGZyb250ZW5kLWRlc2lnbiBwbHVnaW46XFxuJHtibHVlKGAvcGx1Z2luIGluc3RhbGwgZnJvbnRlbmQtZGVzaWduQCR7T0ZGSUNJQUxfTUFSS0VUUExBQ0VfTkFNRX1gKX1gXG4gICAgfSxcbiAgICBjb29sZG93blNlc3Npb25zOiAzLFxuICAgIGlzUmVsZXZhbnQ6IGFzeW5jIGNvbnRleHQgPT5cbiAgICAgIGlzTWFya2V0cGxhY2VQbHVnaW5SZWxldmFudCgnZnJvbnRlbmQtZGVzaWduJywgY29udGV4dCwge1xuICAgICAgICBmaWxlUGF0aDogL1xcLihodG1sfGNzc3xodG0pJC9pLFxuICAgICAgfSksXG4gIH0sXG4gIHtcbiAgICBpZDogJ3ZlcmNlbC1wbHVnaW4nLFxuICAgIGNvbnRlbnQ6IGFzeW5jIGN0eCA9PiB7XG4gICAgICBjb25zdCBibHVlID0gY29sb3IoJ3N1Z2dlc3Rpb24nLCBjdHgudGhlbWUpXG4gICAgICByZXR1cm4gYFdvcmtpbmcgd2l0aCBWZXJjZWw/IEluc3RhbGwgdGhlIHZlcmNlbCBwbHVnaW46XFxuJHtibHVlKGAvcGx1Z2luIGluc3RhbGwgdmVyY2VsQCR7T0ZGSUNJQUxfTUFSS0VUUExBQ0VfTkFNRX1gKX1gXG4gICAgfSxcbiAgICBjb29sZG93blNlc3Npb25zOiAzLFxuICAgIGlzUmVsZXZhbnQ6IGFzeW5jIGNvbnRleHQgPT5cbiAgICAgIGlzTWFya2V0cGxhY2VQbHVnaW5SZWxldmFudCgndmVyY2VsJywgY29udGV4dCwge1xuICAgICAgICBmaWxlUGF0aDogLyg/Ol58Wy9cXFxcXSl2ZXJjZWxcXC5qc29uJC9pLFxuICAgICAgICBjbGk6IFsndmVyY2VsJ10sXG4gICAgICB9KSxcbiAgfSxcbiAge1xuICAgIGlkOiAnZWZmb3J0LWhpZ2gtbnVkZ2UnLFxuICAgIGNvbnRlbnQ6IGFzeW5jIGN0eCA9PiB7XG4gICAgICBjb25zdCBibHVlID0gY29sb3IoJ3N1Z2dlc3Rpb24nLCBjdHgudGhlbWUpXG4gICAgICBjb25zdCBjbWQgPSBibHVlKCcvZWZmb3J0IGhpZ2gnKVxuICAgICAgY29uc3QgdmFyaWFudCA9IGdldEZlYXR1cmVWYWx1ZV9DQUNIRURfTUFZX0JFX1NUQUxFPFxuICAgICAgICAnb2ZmJyB8ICdjb3B5X2EnIHwgJ2NvcHlfYidcbiAgICAgID4oJ3Rlbmd1X3RpZGVfZWxtJywgJ29mZicpXG4gICAgICByZXR1cm4gdmFyaWFudCA9PT0gJ2NvcHlfYidcbiAgICAgICAgPyBgVXNlICR7Y21kfSBmb3IgYmV0dGVyIG9uZS1zaG90IGFuc3dlcnMuIEJsYXVkZSB0aGlua3MgaXQgdGhyb3VnaCBmaXJzdC5gXG4gICAgICAgIDogYFdvcmtpbmcgb24gc29tZXRoaW5nIHRyaWNreT8gJHtjbWR9IGdpdmVzIGJldHRlciBmaXJzdCBhbnN3ZXJzYFxuICAgIH0sXG4gICAgY29vbGRvd25TZXNzaW9uczogMyxcbiAgICBpc1JlbGV2YW50OiBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoIWlzMVBBcGlDdXN0b21lcigpKSByZXR1cm4gZmFsc2VcbiAgICAgIGlmICghbW9kZWxTdXBwb3J0c0VmZm9ydChnZXRNYWluTG9vcE1vZGVsKCkpKSByZXR1cm4gZmFsc2VcbiAgICAgIGlmIChnZXRTZXR0aW5nc0ZvclNvdXJjZSgncG9saWN5U2V0dGluZ3MnKT8uZWZmb3J0TGV2ZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIGlmIChnZXRFZmZvcnRFbnZPdmVycmlkZSgpICE9PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZVxuICAgICAgY29uc3QgcGVyc2lzdGVkID0gZ2V0SW5pdGlhbFNldHRpbmdzKCkuZWZmb3J0TGV2ZWxcbiAgICAgIGlmIChwZXJzaXN0ZWQgPT09ICdoaWdoJyB8fCBwZXJzaXN0ZWQgPT09ICdtYXgnKSByZXR1cm4gZmFsc2VcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGdldEZlYXR1cmVWYWx1ZV9DQUNIRURfTUFZX0JFX1NUQUxFPCdvZmYnIHwgJ2NvcHlfYScgfCAnY29weV9iJz4oXG4gICAgICAgICAgJ3Rlbmd1X3RpZGVfZWxtJyxcbiAgICAgICAgICAnb2ZmJyxcbiAgICAgICAgKSAhPT0gJ29mZidcbiAgICAgIClcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdzdWJhZ2VudC1mYW5vdXQtbnVkZ2UnLFxuICAgIGNvbnRlbnQ6IGFzeW5jIGN0eCA9PiB7XG4gICAgICBjb25zdCBibHVlID0gY29sb3IoJ3N1Z2dlc3Rpb24nLCBjdHgudGhlbWUpXG4gICAgICBjb25zdCB2YXJpYW50ID0gZ2V0RmVhdHVyZVZhbHVlX0NBQ0hFRF9NQVlfQkVfU1RBTEU8XG4gICAgICAgICdvZmYnIHwgJ2NvcHlfYScgfCAnY29weV9iJ1xuICAgICAgPigndGVuZ3VfdGVybl9hbGxveScsICdvZmYnKVxuICAgICAgcmV0dXJuIHZhcmlhbnQgPT09ICdjb3B5X2InXG4gICAgICAgID8gYEZvciBiaWcgdGFza3MsIHRlbGwgQmxhdWRlIHRvICR7Ymx1ZSgndXNlIHN1YmFnZW50cycpfS4gVGhleSB3b3JrIGluIHBhcmFsbGVsIGFuZCBrZWVwIHlvdXIgbWFpbiB0aHJlYWQgY2xlYW4uYFxuICAgICAgICA6IGBTYXkgJHtibHVlKCdcImZhbiBvdXQgc3ViYWdlbnRzXCInKX0gYW5kIEJsYXVkZSBzZW5kcyBhIHRlYW0uIEVhY2ggb25lIGRpZ3MgZGVlcCBzbyBub3RoaW5nIGdldHMgbWlzc2VkLmBcbiAgICB9LFxuICAgIGNvb2xkb3duU2Vzc2lvbnM6IDMsXG4gICAgaXNSZWxldmFudDogYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCFpczFQQXBpQ3VzdG9tZXIoKSkgcmV0dXJuIGZhbHNlXG4gICAgICByZXR1cm4gKFxuICAgICAgICBnZXRGZWF0dXJlVmFsdWVfQ0FDSEVEX01BWV9CRV9TVEFMRTwnb2ZmJyB8ICdjb3B5X2EnIHwgJ2NvcHlfYic+KFxuICAgICAgICAgICd0ZW5ndV90ZXJuX2FsbG95JyxcbiAgICAgICAgICAnb2ZmJyxcbiAgICAgICAgKSAhPT0gJ29mZidcbiAgICAgIClcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdsb29wLWNvbW1hbmQtbnVkZ2UnLFxuICAgIGNvbnRlbnQ6IGFzeW5jIGN0eCA9PiB7XG4gICAgICBjb25zdCBibHVlID0gY29sb3IoJ3N1Z2dlc3Rpb24nLCBjdHgudGhlbWUpXG4gICAgICBjb25zdCB2YXJpYW50ID0gZ2V0RmVhdHVyZVZhbHVlX0NBQ0hFRF9NQVlfQkVfU1RBTEU8XG4gICAgICAgICdvZmYnIHwgJ2NvcHlfYScgfCAnY29weV9iJ1xuICAgICAgPigndGVuZ3VfdGltYmVyX2xhcmsnLCAnb2ZmJylcbiAgICAgIHJldHVybiB2YXJpYW50ID09PSAnY29weV9iJ1xuICAgICAgICA/IGBVc2UgJHtibHVlKCcvbG9vcCA1bSBjaGVjayB0aGUgZGVwbG95Jyl9IHRvIHJ1biBhbnkgcHJvbXB0IG9uIGEgc2NoZWR1bGUuIFNldCBpdCBhbmQgZm9yZ2V0IGl0LmBcbiAgICAgICAgOiBgJHtibHVlKCcvbG9vcCcpfSBydW5zIGFueSBwcm9tcHQgb24gYSByZWN1cnJpbmcgc2NoZWR1bGUuIEdyZWF0IGZvciBtb25pdG9yaW5nIGRlcGxveXMsIGJhYnlzaXR0aW5nIFBScywgb3IgcG9sbGluZyBzdGF0dXMuYFxuICAgIH0sXG4gICAgY29vbGRvd25TZXNzaW9uczogMyxcbiAgICBpc1JlbGV2YW50OiBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoIWlzMVBBcGlDdXN0b21lcigpKSByZXR1cm4gZmFsc2VcbiAgICAgIGlmICghaXNLYWlyb3NDcm9uRW5hYmxlZCgpKSByZXR1cm4gZmFsc2VcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGdldEZlYXR1cmVWYWx1ZV9DQUNIRURfTUFZX0JFX1NUQUxFPCdvZmYnIHwgJ2NvcHlfYScgfCAnY29weV9iJz4oXG4gICAgICAgICAgJ3Rlbmd1X3RpbWJlcl9sYXJrJyxcbiAgICAgICAgICAnb2ZmJyxcbiAgICAgICAgKSAhPT0gJ29mZidcbiAgICAgIClcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdndWVzdC1wYXNzZXMnLFxuICAgIGNvbnRlbnQ6IGFzeW5jIGN0eCA9PiB7XG4gICAgICBjb25zdCBjbGF1ZGUgPSBjb2xvcignY2xhdWRlJywgY3R4LnRoZW1lKVxuICAgICAgY29uc3QgcmV3YXJkID0gZ2V0Q2FjaGVkUmVmZXJyZXJSZXdhcmQoKVxuICAgICAgcmV0dXJuIHJld2FyZFxuICAgICAgICA/IGBTaGFyZSBCbGF1ZGUgYW5kIGVhcm4gJHtjbGF1ZGUoZm9ybWF0Q3JlZGl0QW1vdW50KHJld2FyZCkpfSBvZiBleHRyYSB1c2FnZSBcdTAwQjcgJHtjbGF1ZGUoJy9wYXNzZXMnKX1gXG4gICAgICAgIDogYFlvdSBoYXZlIGZyZWUgZ3Vlc3QgcGFzc2VzIHRvIHNoYXJlIFx1MDBCNyAke2NsYXVkZSgnL3Bhc3NlcycpfWBcbiAgICB9LFxuICAgIGNvb2xkb3duU2Vzc2lvbnM6IDMsXG4gICAgaXNSZWxldmFudDogYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKClcbiAgICAgIGlmIChjb25maWcuaGFzVmlzaXRlZFBhc3Nlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgZWxpZ2libGUgfSA9IGNoZWNrQ2FjaGVkUGFzc2VzRWxpZ2liaWxpdHkoKVxuICAgICAgcmV0dXJuIGVsaWdpYmxlXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAnb3ZlcmFnZS1jcmVkaXQnLFxuICAgIGNvbnRlbnQ6IGFzeW5jIGN0eCA9PiB7XG4gICAgICBjb25zdCBjbGF1ZGUgPSBjb2xvcignY2xhdWRlJywgY3R4LnRoZW1lKVxuICAgICAgY29uc3QgaW5mbyA9IGdldENhY2hlZE92ZXJhZ2VDcmVkaXRHcmFudCgpXG4gICAgICBjb25zdCBhbW91bnQgPSBpbmZvID8gZm9ybWF0R3JhbnRBbW91bnQoaW5mbykgOiBudWxsXG4gICAgICBpZiAoIWFtb3VudCkgcmV0dXJuICcnXG4gICAgICAvLyBDb3B5IGZyb20gXCJPQyAmIEJ1bGsgT3ZlcmFnZXMgY29weVwiIGRvYyAoIzUgXHUyMDE0IENMSSBSb3RhdGluZyB0aXApXG4gICAgICByZXR1cm4gYCR7Y2xhdWRlKGAke2Ftb3VudH0gaW4gZXh0cmEgdXNhZ2UsIG9uIHVzYCl9IFx1MDBCNyB0aGlyZC1wYXJ0eSBhcHBzIFx1MDBCNyAke2NsYXVkZSgnL2V4dHJhLXVzYWdlJyl9YFxuICAgIH0sXG4gICAgY29vbGRvd25TZXNzaW9uczogMyxcbiAgICBpc1JlbGV2YW50OiBhc3luYyAoKSA9PiBzaG91bGRTaG93T3ZlcmFnZUNyZWRpdFVwc2VsbCgpLFxuICB9LFxuICB7XG4gICAgaWQ6ICdmZWVkYmFjay1jb21tYW5kJyxcbiAgICBjb250ZW50OiBhc3luYyAoKSA9PiAnVXNlIC9mZWVkYmFjayB0byBoZWxwIHVzIGltcHJvdmUhJyxcbiAgICBjb29sZG93blNlc3Npb25zOiAxNSxcbiAgICBhc3luYyBpc1JlbGV2YW50KCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKVxuICAgICAgcmV0dXJuIGNvbmZpZy5udW1TdGFydHVwcyA+IDVcbiAgICB9LFxuICB9LFxuXVxuY29uc3QgaW50ZXJuYWxPbmx5VGlwczogVGlwW10gPVxuICBwcm9jZXNzLmVudi5VU0VSX1RZUEUgPT09ICdhbnQnXG4gICAgPyBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ2ltcG9ydGFudC1jbGF1ZGVtZCcsXG4gICAgICAgICAgY29udGVudDogYXN5bmMgKCkgPT5cbiAgICAgICAgICAgICdbQU5ULU9OTFldIFVzZSBcIklNUE9SVEFOVDpcIiBwcmVmaXggZm9yIG11c3QtZm9sbG93IENMQVVERS5tZCBydWxlcycsXG4gICAgICAgICAgY29vbGRvd25TZXNzaW9uczogMzAsXG4gICAgICAgICAgaXNSZWxldmFudDogYXN5bmMgKCkgPT4gdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnc2tpbGxpZnknLFxuICAgICAgICAgIGNvbnRlbnQ6IGFzeW5jICgpID0+XG4gICAgICAgICAgICAnW0FOVC1PTkxZXSBVc2UgL3NraWxsaWZ5IGF0IHRoZSBlbmQgb2YgYSB3b3JrZmxvdyB0byB0dXJuIGl0IGludG8gYSByZXVzYWJsZSBza2lsbCcsXG4gICAgICAgICAgY29vbGRvd25TZXNzaW9uczogMTUsXG4gICAgICAgICAgaXNSZWxldmFudDogYXN5bmMgKCkgPT4gdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIF1cbiAgICA6IFtdXG5cbmZ1bmN0aW9uIGdldEN1c3RvbVRpcHMoKTogVGlwW10ge1xuICBjb25zdCBzZXR0aW5ncyA9IGdldEluaXRpYWxTZXR0aW5ncygpXG4gIGNvbnN0IG92ZXJyaWRlID0gc2V0dGluZ3Muc3Bpbm5lclRpcHNPdmVycmlkZVxuICBpZiAoIW92ZXJyaWRlPy50aXBzPy5sZW5ndGgpIHJldHVybiBbXVxuXG4gIHJldHVybiBvdmVycmlkZS50aXBzLm1hcCgoY29udGVudCwgaSkgPT4gKHtcbiAgICBpZDogYGN1c3RvbS10aXAtJHtpfWAsXG4gICAgY29udGVudDogYXN5bmMgKCkgPT4gY29udGVudCxcbiAgICBjb29sZG93blNlc3Npb25zOiAwLFxuICAgIGlzUmVsZXZhbnQ6IGFzeW5jICgpID0+IHRydWUsXG4gIH0pKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVsZXZhbnRUaXBzKGNvbnRleHQ/OiBUaXBDb250ZXh0KTogUHJvbWlzZTxUaXBbXT4ge1xuICBjb25zdCBzZXR0aW5ncyA9IGdldEluaXRpYWxTZXR0aW5ncygpXG4gIGNvbnN0IG92ZXJyaWRlID0gc2V0dGluZ3Muc3Bpbm5lclRpcHNPdmVycmlkZVxuICBjb25zdCBjdXN0b21UaXBzID0gZ2V0Q3VzdG9tVGlwcygpXG5cbiAgLy8gSWYgZXhjbHVkZURlZmF1bHQgaXMgdHJ1ZSBhbmQgdGhlcmUgYXJlIGN1c3RvbSB0aXBzLCBza2lwIGJ1aWx0LWluIHRpcHMgZW50aXJlbHlcbiAgaWYgKG92ZXJyaWRlPy5leGNsdWRlRGVmYXVsdCAmJiBjdXN0b21UaXBzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gY3VzdG9tVGlwc1xuICB9XG5cbiAgLy8gT3RoZXJ3aXNlLCBmaWx0ZXIgYnVpbHQtaW4gdGlwcyBhcyBiZWZvcmUgYW5kIGNvbWJpbmUgd2l0aCBjdXN0b21cbiAgY29uc3QgdGlwcyA9IFsuLi5leHRlcm5hbFRpcHMsIC4uLmludGVybmFsT25seVRpcHNdXG4gIGNvbnN0IGlzUmVsZXZhbnQgPSBhd2FpdCBQcm9taXNlLmFsbCh0aXBzLm1hcChfID0+IF8uaXNSZWxldmFudChjb250ZXh0KSkpXG4gIGNvbnN0IGZpbHRlcmVkID0gdGlwc1xuICAgIC5maWx0ZXIoKF8sIGluZGV4KSA9PiBpc1JlbGV2YW50W2luZGV4XSlcbiAgICAuZmlsdGVyKF8gPT4gZ2V0U2Vzc2lvbnNTaW5jZUxhc3RTaG93bihfLmlkKSA+PSBfLmNvb2xkb3duU2Vzc2lvbnMpXG5cbiAgcmV0dXJuIFsuLi5maWx0ZXJlZCwgLi4uY3VzdG9tVGlwc11cbn1cbiIsICJpbXBvcnQgeyBnZXRHbG9iYWxDb25maWcsIHNhdmVHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi91dGlscy9jb25maWcuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiByZWNvcmRUaXBTaG93bih0aXBJZDogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IG51bVN0YXJ0dXBzID0gZ2V0R2xvYmFsQ29uZmlnKCkubnVtU3RhcnR1cHNcbiAgc2F2ZUdsb2JhbENvbmZpZyhjID0+IHtcbiAgICBjb25zdCBoaXN0b3J5ID0gYy50aXBzSGlzdG9yeSA/PyB7fVxuICAgIGlmIChoaXN0b3J5W3RpcElkXSA9PT0gbnVtU3RhcnR1cHMpIHJldHVybiBjXG4gICAgcmV0dXJuIHsgLi4uYywgdGlwc0hpc3Rvcnk6IHsgLi4uaGlzdG9yeSwgW3RpcElkXTogbnVtU3RhcnR1cHMgfSB9XG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXNzaW9uc1NpbmNlTGFzdFNob3duKHRpcElkOiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKVxuICBjb25zdCBsYXN0U2hvd24gPSBjb25maWcudGlwc0hpc3Rvcnk/Llt0aXBJZF1cbiAgaWYgKCFsYXN0U2hvd24pIHJldHVybiBJbmZpbml0eVxuICByZXR1cm4gY29uZmlnLm51bVN0YXJ0dXBzIC0gbGFzdFNob3duXG59XG4iLCAiLyoqXG4gKiBNb2RlbCBkZXByZWNhdGlvbiB1dGlsaXRpZXNcbiAqXG4gKiBDb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCBkZXByZWNhdGVkIG1vZGVscyBhbmQgdGhlaXIgcmV0aXJlbWVudCBkYXRlcy5cbiAqL1xuXG5pbXBvcnQgeyB0eXBlIEFQSVByb3ZpZGVyLCBnZXRBUElQcm92aWRlciB9IGZyb20gJy4vcHJvdmlkZXJzLmpzJ1xuXG50eXBlIERlcHJlY2F0ZWRNb2RlbEluZm8gPSB7XG4gIGlzRGVwcmVjYXRlZDogdHJ1ZVxuICBtb2RlbE5hbWU6IHN0cmluZ1xuICByZXRpcmVtZW50RGF0ZTogc3RyaW5nXG59XG5cbnR5cGUgTm90RGVwcmVjYXRlZEluZm8gPSB7XG4gIGlzRGVwcmVjYXRlZDogZmFsc2Vcbn1cblxudHlwZSBEZXByZWNhdGlvbkluZm8gPSBEZXByZWNhdGVkTW9kZWxJbmZvIHwgTm90RGVwcmVjYXRlZEluZm9cblxudHlwZSBEZXByZWNhdGlvbkVudHJ5ID0ge1xuICAvKiogSHVtYW4tcmVhZGFibGUgbW9kZWwgbmFtZSAqL1xuICBtb2RlbE5hbWU6IHN0cmluZ1xuICAvKiogUmV0aXJlbWVudCBkYXRlcyBieSBwcm92aWRlciAobnVsbCA9IG5vdCBkZXByZWNhdGVkIGZvciB0aGF0IHByb3ZpZGVyKSAqL1xuICByZXRpcmVtZW50RGF0ZXM6IFJlY29yZDxBUElQcm92aWRlciwgc3RyaW5nIHwgbnVsbD5cbn1cblxuLyoqXG4gKiBEZXByZWNhdGVkIG1vZGVscyBhbmQgdGhlaXIgcmV0aXJlbWVudCBkYXRlcyBieSBwcm92aWRlci5cbiAqIEtleXMgYXJlIHN1YnN0cmluZ3MgdG8gbWF0Y2ggaW4gbW9kZWwgSURzIChjYXNlLWluc2Vuc2l0aXZlKS5cbiAqIFRvIGFkZCBhIG5ldyBkZXByZWNhdGVkIG1vZGVsLCBhZGQgYW4gZW50cnkgdG8gdGhpcyBvYmplY3QuXG4gKi9cbmNvbnN0IERFUFJFQ0FURURfTU9ERUxTOiBSZWNvcmQ8c3RyaW5nLCBEZXByZWNhdGlvbkVudHJ5PiA9IHtcbiAgJ2NsYXVkZS0zLW9wdXMnOiB7XG4gICAgbW9kZWxOYW1lOiAnQ2xhdWRlIDMgT3B1cycsXG4gICAgcmV0aXJlbWVudERhdGVzOiB7XG4gICAgICBmaXJzdFBhcnR5OiAnSmFudWFyeSA1LCAyMDI2JyxcbiAgICAgIGJlZHJvY2s6ICdKYW51YXJ5IDE1LCAyMDI2JyxcbiAgICAgIHZlcnRleDogJ0phbnVhcnkgNSwgMjAyNicsXG4gICAgICBmb3VuZHJ5OiAnSmFudWFyeSA1LCAyMDI2JyxcbiAgICB9LFxuICB9LFxuICAnY2xhdWRlLTMtNy1zb25uZXQnOiB7XG4gICAgbW9kZWxOYW1lOiAnQ2xhdWRlIDMuNyBTb25uZXQnLFxuICAgIHJldGlyZW1lbnREYXRlczoge1xuICAgICAgZmlyc3RQYXJ0eTogJ0ZlYnJ1YXJ5IDE5LCAyMDI2JyxcbiAgICAgIGJlZHJvY2s6ICdBcHJpbCAyOCwgMjAyNicsXG4gICAgICB2ZXJ0ZXg6ICdNYXkgMTEsIDIwMjYnLFxuICAgICAgZm91bmRyeTogJ0ZlYnJ1YXJ5IDE5LCAyMDI2JyxcbiAgICB9LFxuICB9LFxuICAnY2xhdWRlLTMtNS1oYWlrdSc6IHtcbiAgICBtb2RlbE5hbWU6ICdDbGF1ZGUgMy41IEhhaWt1JyxcbiAgICByZXRpcmVtZW50RGF0ZXM6IHtcbiAgICAgIGZpcnN0UGFydHk6ICdGZWJydWFyeSAxOSwgMjAyNicsXG4gICAgICBiZWRyb2NrOiBudWxsLFxuICAgICAgdmVydGV4OiBudWxsLFxuICAgICAgZm91bmRyeTogbnVsbCxcbiAgICB9LFxuICB9LFxufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgbW9kZWwgaXMgZGVwcmVjYXRlZCBhbmQgZ2V0IGl0cyBkZXByZWNhdGlvbiBpbmZvXG4gKi9cbmZ1bmN0aW9uIGdldERlcHJlY2F0ZWRNb2RlbEluZm8obW9kZWxJZDogc3RyaW5nKTogRGVwcmVjYXRpb25JbmZvIHtcbiAgY29uc3QgbG93ZXJjYXNlTW9kZWxJZCA9IG1vZGVsSWQudG9Mb3dlckNhc2UoKVxuICBjb25zdCBwcm92aWRlciA9IGdldEFQSVByb3ZpZGVyKClcblxuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhERVBSRUNBVEVEX01PREVMUykpIHtcbiAgICBjb25zdCByZXRpcmVtZW50RGF0ZSA9IHZhbHVlLnJldGlyZW1lbnREYXRlc1twcm92aWRlcl1cbiAgICBpZiAoIWxvd2VyY2FzZU1vZGVsSWQuaW5jbHVkZXMoa2V5KSB8fCAhcmV0aXJlbWVudERhdGUpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBpc0RlcHJlY2F0ZWQ6IHRydWUsXG4gICAgICBtb2RlbE5hbWU6IHZhbHVlLm1vZGVsTmFtZSxcbiAgICAgIHJldGlyZW1lbnREYXRlLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGlzRGVwcmVjYXRlZDogZmFsc2UgfVxufVxuXG4vKipcbiAqIEdldCBhIGRlcHJlY2F0aW9uIHdhcm5pbmcgbWVzc2FnZSBmb3IgYSBtb2RlbCwgb3IgbnVsbCBpZiBub3QgZGVwcmVjYXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9kZWxEZXByZWNhdGlvbldhcm5pbmcoXG4gIG1vZGVsSWQ6IHN0cmluZyB8IG51bGwsXG4pOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKCFtb2RlbElkKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IGluZm8gPSBnZXREZXByZWNhdGVkTW9kZWxJbmZvKG1vZGVsSWQpXG4gIGlmICghaW5mby5pc0RlcHJlY2F0ZWQpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIGBcdTI2QTAgJHtpbmZvLm1vZGVsTmFtZX0gd2lsbCBiZSByZXRpcmVkIG9uICR7aW5mby5yZXRpcmVtZW50RGF0ZX0uIENvbnNpZGVyIHN3aXRjaGluZyB0byBhIG5ld2VyIG1vZGVsLmBcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQSxJQUFNLG9CQUFvQjtBQUFBO0FBQUEsRUFFeEI7QUFBQTtBQUFBLEVBRUE7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFFQTtBQUFBO0FBQUEsRUFFQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUVBO0FBQ0Y7QUFFQSxTQUFTLFdBQVcsTUFBdUI7QUFDekMsU0FBTyxDQUFDLGtCQUFrQixLQUFLLE9BQUssRUFBRSxLQUFLLElBQUksQ0FBQztBQUNsRDtBQXVC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QUVBLFFBQU0sT0FBTyx1QkFBdUIsT0FBTztBQUMzQyxNQUFJLENBQUMsS0FBSyxjQUFjO0FBQ3RCLFdBQU87QUFBQSxFQUNUO0FBRUEsU0FBTyxVQUFLLEtBQUssU0FBUyx1QkFBdUIsS0FBSyxjQUFjO0FBQ3RFOyIsCiAgIm5hbWVzIjogWyJERVNLVE9QX1VQU0VMTF9ERUZBVUxUIiwgImVuYWJsZV9zaG9ydGN1dF90aXAiLCAiZW5hYmxlX3N0YXJ0dXBfZGlhbG9nIiwgImdldERlc2t0b3BVcHNlbGxDb25maWciLCAiZ2V0RHluYW1pY0NvbmZpZ19DQUNIRURfTUFZX0JFX1NUQUxFIiwgImlzU3VwcG9ydGVkUGxhdGZvcm0iLCAicHJvY2VzcyIsICJwbGF0Zm9ybSIsICJhcmNoIiwgInNob3VsZFNob3dEZXNrdG9wVXBzZWxsU3RhcnR1cCIsICJjb25maWciLCAiZ2V0R2xvYmFsQ29uZmlnIiwgImRlc2t0b3BVcHNlbGxEaXNtaXNzZWQiLCAiZGVza3RvcFVwc2VsbFNlZW5Db3VudCIsICJEZXNrdG9wVXBzZWxsU3RhcnR1cCIsICJ0MCIsICIkIiwgIl9jIiwgIm9uRG9uZSIsICJzaG93SGFuZG9mZiIsICJzZXRTaG93SGFuZG9mZiIsICJ1c2VTdGF0ZSIsICJ0MSIsICJTeW1ib2wiLCAiZm9yIiwgInVzZUVmZmVjdCIsICJfdGVtcCIsICJ0MiIsICJoYW5kbGVTZWxlY3QiLCAidmFsdWUiLCAic2F2ZUdsb2JhbENvbmZpZyIsICJfdGVtcDIiLCAidDMiLCAibGFiZWwiLCAidDQiLCAidDUiLCAib3B0aW9ucyIsICJ0NiIsICJ0NyIsICJ0OCIsICJwcmV2XzAiLCAicHJldiIsICJuZXdDb3VudCIsICJsb2dFdmVudCIsICJzZWVuX2NvdW50IiwgImMiXQp9Cg==
