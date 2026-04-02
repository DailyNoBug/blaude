#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  HybridTransport
} from "./chunk-NAMV3GIN.mjs";
import {
  FlushGate,
  createV1ReplTransport,
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
  createCapacityWake
} from "./chunk-ZTYOR7T4.mjs";
import {
  DEFAULT_POLL_CONFIG,
  getPollIntervalConfig
} from "./chunk-E6K6IUF5.mjs";
import {
  buildCCRv2SdkUrl,
  buildSdkUrl,
  decodeWorkSecret,
  sameSessionId
} from "./chunk-LD7DS2YH.mjs";
import "./chunk-AWPTVMZY.mjs";
import {
  assistant_exports,
  init_assistant
} from "./chunk-64SNM3NX.mjs";
import {
  checkEnvLessBridgeMinVersion,
  init_envLessBridgeConfig
} from "./chunk-4CUQRZU6.mjs";
import {
  init_mappers,
  toSDKMessages
} from "./chunk-TYT35UNL.mjs";
import {
  archiveBridgeSession,
  createBridgeSession,
  init_createSession,
  updateBridgeSessionTitle
} from "./chunk-4G4KFLAE.mjs";
import {
  extractConversationText,
  generateSessionTitle,
  init_sessionTitle
} from "./chunk-CUFNINNZ.mjs";
import {
  getBridgeAccessToken,
  getBridgeBaseUrl,
  getBridgeTokenOverride,
  init_bridgeConfig
} from "./chunk-HWCIXFFE.mjs";
import {
  BridgeFatalError,
  clearBridgeDebugHandle,
  createBridgeApiClient,
  generateShortWordSlug,
  getContentText,
  getCurrentSessionTitle,
  getMessagesAfterCompactBoundary,
  init_bridgeApi,
  init_bridgeDebug,
  init_concurrentSessions,
  init_messages2 as init_messages,
  init_policyLimits,
  init_sessionStorage,
  init_words,
  injectBridgeFault,
  isExpiredErrorType,
  isPolicyAllowed,
  isSuppressible403,
  isSyntheticMessage,
  registerBridgeDebugHandle,
  updateSessionBridgeId,
  validateBridgeId,
  waitForPolicyLimitsToLoad,
  wrapApiForFaultInjection
} from "./chunk-PWGYNHQM.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-2ONWBUQT.mjs";
import {
  init_sessionIngressAuth,
  updateSessionIngressAuthToken
} from "./chunk-SQ6KOOZS.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-Y2PD6CVC.mjs";
import "./chunk-TBOD624P.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-SY3WEZL4.mjs";
import {
  describeAxiosError,
  extractHttpStatus,
  init_debugUtils,
  init_sessionIdCompat,
  logBridgeSkip,
  setCseShimGate,
  toCompatSessionId,
  toInfraSessionId
} from "./chunk-M22WMPMZ.mjs";
import "./chunk-4WEGPCYF.mjs";
import "./chunk-Z4JLAMMU.mjs";
import "./chunk-FUHJGEFK.mjs";
import "./chunk-2MSZ62QE.mjs";
import "./chunk-SEJU7JU7.mjs";
import "./chunk-ABRSTIS2.mjs";
import "./chunk-L22EUB4Z.mjs";
import "./chunk-NE3WJ556.mjs";
import "./chunk-U3YG33GN.mjs";
import "./chunk-I4JSDM2A.mjs";
import "./chunk-KNCFJEES.mjs";
import "./chunk-R2NMUWG6.mjs";
import "./chunk-XTFZIHQR.mjs";
import "./chunk-X6KULBXG.mjs";
import "./chunk-ORS2TTME.mjs";
import "./chunk-IAEMXMG4.mjs";
import "./chunk-L57KLZUF.mjs";
import "./chunk-J7TDGLE4.mjs";
import "./chunk-HUHT3U2I.mjs";
import "./chunk-X7OJ6FBK.mjs";
import "./chunk-5MQ7MACZ.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-HUEORIXP.mjs";
import "./chunk-H6COQF52.mjs";
import "./chunk-IQJUSPBJ.mjs";
import {
  getTrustedDeviceToken,
  init_trustedDevice
} from "./chunk-R326WRGL.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import "./chunk-KMJXN3MK.mjs";
import "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  checkAndRefreshOAuthTokenIfNeeded,
  checkBridgeMinVersion,
  getClaudeAIOAuthTokens,
  getFeatureValue_CACHED_WITH_REFRESH,
  getGlobalConfig,
  getOrganizationUUID,
  handleOAuth401Error,
  init_auth,
  init_bridgeEnabled,
  init_client,
  init_config2 as init_config,
  init_growthbook,
  isBridgeEnabledBlocking,
  isCseShimEnabled,
  isEnvLessBridgeEnabled,
  saveGlobalConfig
} from "./chunk-NKGQGSP5.mjs";
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
import "./chunk-J6MJ6UVK.mjs";
import "./chunk-PKIVPZJM.mjs";
import "./chunk-JXCG2JDO.mjs";
import "./chunk-N62V5C2K.mjs";
import {
  getBranch,
  getRemoteUrl,
  init_diagLogs,
  init_git,
  logForDiagnosticsNoPII
} from "./chunk-7SC6PTLR.mjs";
import "./chunk-NT7W7YWD.mjs";
import "./chunk-4S33EKPF.mjs";
import "./chunk-VNIROYYL.mjs";
import "./chunk-TZFTPSMG.mjs";
import {
  init_displayTags,
  stripDisplayTagsAllowEmpty
} from "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-IPMELYAB.mjs";
import "./chunk-F5ODCUJD.mjs";
import "./chunk-ZAYB3WZV.mjs";
import {
  errorMessage,
  init_cleanupRegistry,
  init_debug,
  init_errors,
  logForDebugging,
  registerCleanup
} from "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import {
  feature,
  init_bun_bundle
} from "./chunk-OU3SZVVB.mjs";
import {
  getOriginalCwd,
  getSessionId,
  init_state
} from "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import {
  init_envUtils,
  isEnvTruthy,
  isInProtectedNamespace
} from "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// src/bridge/initReplBridge.ts
init_bun_bundle();
init_state();
init_growthbook();
init_client();
init_policyLimits();
init_auth();
init_config();
init_debug();
init_displayTags();
init_errors();
init_git();
init_mappers();
init_messages();
init_sessionStorage();
init_sessionTitle();
init_words();
init_bridgeConfig();
init_bridgeEnabled();
init_createSession();
init_debugUtils();
init_envLessBridgeConfig();
import { hostname } from "os";

// src/bridge/replBridge.ts
init_bridgeApi();
init_debug();
init_diagLogs();
init_analytics();
init_cleanupRegistry();
import { randomUUID } from "crypto";
init_sessionIdCompat();
init_concurrentSessions();
init_trustedDevice();
init_sessionIngressAuth();
init_envUtils();
init_bridgeApi();
init_debugUtils();
init_errors();
init_sleep();
init_bridgeDebug();
var POLL_ERROR_INITIAL_DELAY_MS = 2e3;
var POLL_ERROR_MAX_DELAY_MS = 6e4;
var POLL_ERROR_GIVE_UP_MS = 15 * 60 * 1e3;
var initSequence = 0;
async function initBridgeCore(params) {
  const {
    dir,
    machineName,
    branch,
    gitRepoUrl,
    title,
    baseUrl,
    sessionIngressUrl,
    workerType,
    getAccessToken,
    createSession,
    archiveSession,
    getCurrentTitle = () => title,
    toSDKMessages: toSDKMessages2 = () => {
      throw new Error(
        "BridgeCoreParams.toSDKMessages not provided. Pass it if you use writeMessages() or initialMessages \u2014 daemon callers that only use writeSdkMessages() never hit this path."
      );
    },
    onAuth401,
    getPollIntervalConfig: getPollIntervalConfig2 = () => DEFAULT_POLL_CONFIG,
    initialHistoryCap = 200,
    initialMessages,
    previouslyFlushedUUIDs,
    onInboundMessage,
    onPermissionResponse,
    onInterrupt,
    onSetModel,
    onSetMaxThinkingTokens,
    onSetPermissionMode,
    onStateChange,
    onUserMessage,
    perpetual,
    initialSSESequenceNum = 0
  } = params;
  const seq = ++initSequence;
  const { writeBridgePointer, clearBridgePointer, readBridgePointer } = await import("./bridgePointer-V3PVQJPH.mjs");
  const rawPrior = perpetual ? await readBridgePointer(dir) : null;
  const prior = rawPrior?.source === "repl" ? rawPrior : null;
  logForDebugging(
    `[bridge:repl] initBridgeCore #${seq} starting (initialMessages=${initialMessages?.length ?? 0}${prior ? ` perpetual prior=env:${prior.environmentId}` : ""})`
  );
  const rawApi = createBridgeApiClient({
    baseUrl,
    getAccessToken,
    runnerVersion: MACRO.VERSION,
    onDebug: logForDebugging,
    onAuth401,
    getTrustedDeviceToken
  });
  const api = process.env.USER_TYPE === "ant" ? wrapApiForFaultInjection(rawApi) : rawApi;
  const bridgeConfig = {
    dir,
    machineName,
    branch,
    gitRepoUrl,
    maxSessions: 1,
    spawnMode: "single-session",
    verbose: false,
    sandbox: false,
    bridgeId: randomUUID(),
    workerType,
    environmentId: randomUUID(),
    reuseEnvironmentId: prior?.environmentId,
    apiBaseUrl: baseUrl,
    sessionIngressUrl
  };
  let environmentId;
  let environmentSecret;
  try {
    const reg = await api.registerBridgeEnvironment(bridgeConfig);
    environmentId = reg.environment_id;
    environmentSecret = reg.environment_secret;
  } catch (err) {
    logBridgeSkip(
      "registration_failed",
      `[bridge:repl] Environment registration failed: ${errorMessage(err)}`
    );
    if (prior) {
      await clearBridgePointer(dir);
    }
    onStateChange?.("failed", errorMessage(err));
    return null;
  }
  logForDebugging(`[bridge:repl] Environment registered: ${environmentId}`);
  logForDiagnosticsNoPII("info", "bridge_repl_env_registered");
  logEvent("tengu_bridge_repl_env_registered", {});
  async function tryReconnectInPlace(requestedEnvId, sessionId) {
    if (environmentId !== requestedEnvId) {
      logForDebugging(
        `[bridge:repl] Env mismatch (requested ${requestedEnvId}, got ${environmentId}) \u2014 cannot reconnect in place`
      );
      return false;
    }
    const infraId = toInfraSessionId(sessionId);
    const candidates = infraId === sessionId ? [sessionId] : [sessionId, infraId];
    for (const id of candidates) {
      try {
        await api.reconnectSession(environmentId, id);
        logForDebugging(
          `[bridge:repl] Reconnected session ${id} in place on env ${environmentId}`
        );
        return true;
      } catch (err) {
        logForDebugging(
          `[bridge:repl] reconnectSession(${id}) failed: ${errorMessage(err)}`
        );
      }
    }
    logForDebugging(
      "[bridge:repl] reconnectSession exhausted \u2014 falling through to fresh session"
    );
    return false;
  }
  const reusedPriorSession = prior ? await tryReconnectInPlace(prior.environmentId, prior.sessionId) : false;
  if (prior && !reusedPriorSession) {
    await clearBridgePointer(dir);
  }
  let currentSessionId;
  if (reusedPriorSession && prior) {
    currentSessionId = prior.sessionId;
    logForDebugging(
      `[bridge:repl] Perpetual session reused: ${currentSessionId}`
    );
    if (initialMessages && previouslyFlushedUUIDs) {
      for (const msg of initialMessages) {
        previouslyFlushedUUIDs.add(msg.uuid);
      }
    }
  } else {
    const createdSessionId = await createSession({
      environmentId,
      title,
      gitRepoUrl,
      branch,
      signal: AbortSignal.timeout(15e3)
    });
    if (!createdSessionId) {
      logForDebugging(
        "[bridge:repl] Session creation failed, deregistering environment"
      );
      logEvent("tengu_bridge_repl_session_failed", {});
      await api.deregisterEnvironment(environmentId).catch(() => {
      });
      onStateChange?.("failed", "Session creation failed");
      return null;
    }
    currentSessionId = createdSessionId;
    logForDebugging(`[bridge:repl] Session created: ${currentSessionId}`);
  }
  await writeBridgePointer(dir, {
    sessionId: currentSessionId,
    environmentId,
    source: "repl"
  });
  logForDiagnosticsNoPII("info", "bridge_repl_session_created");
  logEvent("tengu_bridge_repl_started", {
    has_initial_messages: !!(initialMessages && initialMessages.length > 0),
    inProtectedNamespace: isInProtectedNamespace()
  });
  const initialMessageUUIDs = /* @__PURE__ */ new Set();
  if (initialMessages) {
    for (const msg of initialMessages) {
      initialMessageUUIDs.add(msg.uuid);
    }
  }
  const recentPostedUUIDs = new BoundedUUIDSet(2e3);
  for (const uuid of initialMessageUUIDs) {
    recentPostedUUIDs.add(uuid);
  }
  const recentInboundUUIDs = new BoundedUUIDSet(2e3);
  const pollController = new AbortController();
  let transport = null;
  let v2Generation = 0;
  let lastTransportSequenceNum = reusedPriorSession ? initialSSESequenceNum : 0;
  let currentWorkId = null;
  let currentIngressToken = null;
  const capacityWake = createCapacityWake(pollController.signal);
  const wakePollLoop = capacityWake.wake;
  const capacitySignal = capacityWake.signal;
  const flushGate = new FlushGate();
  let userMessageCallbackDone = !onUserMessage;
  const MAX_ENVIRONMENT_RECREATIONS = 3;
  let environmentRecreations = 0;
  let reconnectPromise = null;
  async function reconnectEnvironmentWithSession() {
    if (reconnectPromise) {
      return reconnectPromise;
    }
    reconnectPromise = doReconnect();
    try {
      return await reconnectPromise;
    } finally {
      reconnectPromise = null;
    }
  }
  async function doReconnect() {
    environmentRecreations++;
    v2Generation++;
    logForDebugging(
      `[bridge:repl] Reconnecting after env lost (attempt ${environmentRecreations}/${MAX_ENVIRONMENT_RECREATIONS})`
    );
    if (environmentRecreations > MAX_ENVIRONMENT_RECREATIONS) {
      logForDebugging(
        `[bridge:repl] Environment reconnect limit reached (${MAX_ENVIRONMENT_RECREATIONS}), giving up`
      );
      return false;
    }
    if (transport) {
      const seq2 = transport.getLastSequenceNum();
      if (seq2 > lastTransportSequenceNum) {
        lastTransportSequenceNum = seq2;
      }
      transport.close();
      transport = null;
    }
    wakePollLoop();
    flushGate.drop();
    if (currentWorkId) {
      const workIdBeingCleared = currentWorkId;
      await api.stopWork(environmentId, workIdBeingCleared, false).catch(() => {
      });
      if (currentWorkId !== workIdBeingCleared) {
        logForDebugging(
          "[bridge:repl] Poll loop recovered during stopWork await \u2014 deferring to it"
        );
        environmentRecreations = 0;
        return true;
      }
      currentWorkId = null;
      currentIngressToken = null;
    }
    if (pollController.signal.aborted) {
      logForDebugging("[bridge:repl] Reconnect aborted by teardown");
      return false;
    }
    const requestedEnvId = environmentId;
    bridgeConfig.reuseEnvironmentId = requestedEnvId;
    try {
      const reg = await api.registerBridgeEnvironment(bridgeConfig);
      environmentId = reg.environment_id;
      environmentSecret = reg.environment_secret;
    } catch (err) {
      bridgeConfig.reuseEnvironmentId = void 0;
      logForDebugging(
        `[bridge:repl] Environment re-registration failed: ${errorMessage(err)}`
      );
      return false;
    }
    bridgeConfig.reuseEnvironmentId = void 0;
    logForDebugging(
      `[bridge:repl] Re-registered: requested=${requestedEnvId} got=${environmentId}`
    );
    if (pollController.signal.aborted) {
      logForDebugging(
        "[bridge:repl] Reconnect aborted after env registration, cleaning up"
      );
      await api.deregisterEnvironment(environmentId).catch(() => {
      });
      return false;
    }
    if (transport !== null) {
      logForDebugging(
        "[bridge:repl] Poll loop recovered during registerBridgeEnvironment await \u2014 deferring to it"
      );
      environmentRecreations = 0;
      return true;
    }
    if (await tryReconnectInPlace(requestedEnvId, currentSessionId)) {
      logEvent("tengu_bridge_repl_reconnected_in_place", {});
      environmentRecreations = 0;
      return true;
    }
    if (environmentId !== requestedEnvId) {
      logEvent("tengu_bridge_repl_env_expired_fresh_session", {});
    }
    await archiveSession(currentSessionId);
    if (pollController.signal.aborted) {
      logForDebugging(
        "[bridge:repl] Reconnect aborted after archive, cleaning up"
      );
      await api.deregisterEnvironment(environmentId).catch(() => {
      });
      return false;
    }
    const currentTitle = getCurrentTitle();
    const newSessionId = await createSession({
      environmentId,
      title: currentTitle,
      gitRepoUrl,
      branch,
      signal: AbortSignal.timeout(15e3)
    });
    if (!newSessionId) {
      logForDebugging(
        "[bridge:repl] Session creation failed during reconnection"
      );
      return false;
    }
    if (pollController.signal.aborted) {
      logForDebugging(
        "[bridge:repl] Reconnect aborted after session creation, cleaning up"
      );
      await archiveSession(newSessionId);
      return false;
    }
    currentSessionId = newSessionId;
    void updateSessionBridgeId(toCompatSessionId(newSessionId)).catch(() => {
    });
    lastTransportSequenceNum = 0;
    recentInboundUUIDs.clear();
    userMessageCallbackDone = !onUserMessage;
    logForDebugging(`[bridge:repl] Re-created session: ${currentSessionId}`);
    await writeBridgePointer(dir, {
      sessionId: currentSessionId,
      environmentId,
      source: "repl"
    });
    previouslyFlushedUUIDs?.clear();
    environmentRecreations = 0;
    return true;
  }
  function getOAuthToken() {
    return getAccessToken();
  }
  function drainFlushGate() {
    const msgs = flushGate.end();
    if (msgs.length === 0) return;
    if (!transport) {
      logForDebugging(
        `[bridge:repl] Cannot drain ${msgs.length} pending message(s): no transport`
      );
      return;
    }
    for (const msg of msgs) {
      recentPostedUUIDs.add(msg.uuid);
    }
    const sdkMessages = toSDKMessages2(msgs);
    const events = sdkMessages.map((sdkMsg) => ({
      ...sdkMsg,
      session_id: currentSessionId
    }));
    logForDebugging(
      `[bridge:repl] Drained ${msgs.length} pending message(s) after flush`
    );
    void transport.writeBatch(events);
  }
  let doTeardownImpl = null;
  function triggerTeardown() {
    void doTeardownImpl?.();
  }
  function handleTransportPermanentClose(closeCode) {
    logForDebugging(
      `[bridge:repl] Transport permanently closed: code=${closeCode}`
    );
    logEvent("tengu_bridge_repl_ws_closed", {
      code: closeCode
    });
    if (transport) {
      const closedSeq = transport.getLastSequenceNum();
      if (closedSeq > lastTransportSequenceNum) {
        lastTransportSequenceNum = closedSeq;
      }
      transport = null;
    }
    wakePollLoop();
    const dropped = flushGate.drop();
    if (dropped > 0) {
      logForDebugging(
        `[bridge:repl] Dropping ${dropped} pending message(s) on transport close (code=${closeCode})`,
        { level: "warn" }
      );
    }
    if (closeCode === 1e3) {
      onStateChange?.("failed", "session ended");
      pollController.abort();
      triggerTeardown();
      return;
    }
    onStateChange?.(
      "reconnecting",
      `Remote Control connection lost (code ${closeCode})`
    );
    logForDebugging(
      `[bridge:repl] Transport reconnect budget exhausted (code=${closeCode}), attempting env reconnect`
    );
    void reconnectEnvironmentWithSession().then((success) => {
      if (success) return;
      if (pollController.signal.aborted) return;
      logForDebugging(
        "[bridge:repl] reconnectEnvironmentWithSession resolved false \u2014 tearing down"
      );
      logEvent("tengu_bridge_repl_reconnect_failed", {
        close_code: closeCode
      });
      onStateChange?.("failed", "reconnection failed");
      triggerTeardown();
    });
  }
  let sigusr2Handler;
  if (process.env.USER_TYPE === "ant" && process.platform !== "win32") {
    sigusr2Handler = () => {
      logForDebugging(
        "[bridge:repl] SIGUSR2 received \u2014 forcing doReconnect() for testing"
      );
      void reconnectEnvironmentWithSession();
    };
    process.on("SIGUSR2", sigusr2Handler);
  }
  let debugFireClose = null;
  if (process.env.USER_TYPE === "ant") {
    registerBridgeDebugHandle({
      fireClose: (code) => {
        if (!debugFireClose) {
          logForDebugging("[bridge:debug] fireClose: no transport wired yet");
          return;
        }
        logForDebugging(`[bridge:debug] fireClose(${code}) \u2014 injecting`);
        debugFireClose(code);
      },
      forceReconnect: () => {
        logForDebugging("[bridge:debug] forceReconnect \u2014 injecting");
        void reconnectEnvironmentWithSession();
      },
      injectFault: injectBridgeFault,
      wakePollLoop,
      describe: () => `env=${environmentId} session=${currentSessionId} transport=${transport?.getStateLabel() ?? "null"} workId=${currentWorkId ?? "null"}`
    });
  }
  const pollOpts = {
    api,
    getCredentials: () => ({ environmentId, environmentSecret }),
    signal: pollController.signal,
    getPollIntervalConfig: getPollIntervalConfig2,
    onStateChange,
    getWsState: () => transport?.getStateLabel() ?? "null",
    // REPL bridge is single-session: having any transport == at capacity.
    // No need to check isConnectedStatus() — even while the transport is
    // auto-reconnecting internally (up to 10 min), poll is heartbeat-only.
    isAtCapacity: () => transport !== null,
    capacitySignal,
    onFatalError: triggerTeardown,
    getHeartbeatInfo: () => {
      if (!currentWorkId || !currentIngressToken) {
        return null;
      }
      return {
        environmentId,
        workId: currentWorkId,
        sessionToken: currentIngressToken
      };
    },
    // Work-item JWT expired (or work gone). The transport is useless —
    // SSE reconnects and CCR writes use the same stale token. Without
    // this callback the poll loop would do a 10-min at-capacity backoff,
    // during which the work lease (300s TTL) expires and the server stops
    // forwarding prompts → ~25-min dead window observed in daemon logs.
    // Kill the transport + work state so isAtCapacity()=false; the loop
    // fast-polls and picks up the server's re-dispatched work in seconds.
    onHeartbeatFatal: (err) => {
      logForDebugging(
        `[bridge:repl] heartbeatWork fatal (status=${err.status}) \u2014 tearing down work item for fast re-dispatch`
      );
      if (transport) {
        const seq2 = transport.getLastSequenceNum();
        if (seq2 > lastTransportSequenceNum) {
          lastTransportSequenceNum = seq2;
        }
        transport.close();
        transport = null;
      }
      flushGate.drop();
      if (currentWorkId) {
        void api.stopWork(environmentId, currentWorkId, false).catch((e) => {
          logForDebugging(
            `[bridge:repl] stopWork after heartbeat fatal: ${errorMessage(e)}`
          );
        });
      }
      currentWorkId = null;
      currentIngressToken = null;
      wakePollLoop();
      onStateChange?.(
        "reconnecting",
        "Work item lease expired, fetching fresh token"
      );
    },
    async onEnvironmentLost() {
      const success = await reconnectEnvironmentWithSession();
      if (!success) {
        return null;
      }
      return { environmentId, environmentSecret };
    },
    onWorkReceived: (workSessionId, ingressToken, workId, serverUseCcrV2) => {
      if (transport?.isConnectedStatus()) {
        logForDebugging(
          `[bridge:repl] Work received while transport connected, replacing with fresh token (workId=${workId})`
        );
      }
      logForDebugging(
        `[bridge:repl] Work received: workId=${workId} workSessionId=${workSessionId} currentSessionId=${currentSessionId} match=${sameSessionId(workSessionId, currentSessionId)}`
      );
      void writeBridgePointer(dir, {
        sessionId: currentSessionId,
        environmentId,
        source: "repl"
      });
      if (!sameSessionId(workSessionId, currentSessionId)) {
        logForDebugging(
          `[bridge:repl] Rejecting foreign session: expected=${currentSessionId} got=${workSessionId}`
        );
        return;
      }
      currentWorkId = workId;
      currentIngressToken = ingressToken;
      const useCcrV2 = serverUseCcrV2 || isEnvTruthy(process.env.CLAUDE_BRIDGE_USE_CCR_V2);
      let v1OauthToken;
      if (!useCcrV2) {
        v1OauthToken = getOAuthToken();
        if (!v1OauthToken) {
          logForDebugging(
            "[bridge:repl] No OAuth token available for session ingress, skipping work"
          );
          return;
        }
        updateSessionIngressAuthToken(v1OauthToken);
      }
      logEvent("tengu_bridge_repl_work_received", {});
      if (transport) {
        const oldTransport = transport;
        transport = null;
        const oldSeq = oldTransport.getLastSequenceNum();
        if (oldSeq > lastTransportSequenceNum) {
          lastTransportSequenceNum = oldSeq;
        }
        oldTransport.close();
      }
      flushGate.deactivate();
      const onServerControlRequest = (request) => handleServerControlRequest(request, {
        transport,
        sessionId: currentSessionId,
        onInterrupt,
        onSetModel,
        onSetMaxThinkingTokens,
        onSetPermissionMode
      });
      let initialFlushDone = false;
      const wireTransport = (newTransport) => {
        transport = newTransport;
        newTransport.setOnConnect(() => {
          if (transport !== newTransport) return;
          logForDebugging("[bridge:repl] Ingress transport connected");
          logEvent("tengu_bridge_repl_ws_connected", {});
          if (!useCcrV2) {
            const freshToken = getOAuthToken();
            if (freshToken) {
              updateSessionIngressAuthToken(freshToken);
            }
          }
          teardownStarted = false;
          if (!initialFlushDone && initialMessages && initialMessages.length > 0) {
            initialFlushDone = true;
            const historyCap = initialHistoryCap;
            const eligibleMessages = initialMessages.filter(
              (m) => isEligibleBridgeMessage(m) && !previouslyFlushedUUIDs?.has(m.uuid)
            );
            const cappedMessages = historyCap > 0 && eligibleMessages.length > historyCap ? eligibleMessages.slice(-historyCap) : eligibleMessages;
            if (cappedMessages.length < eligibleMessages.length) {
              logForDebugging(
                `[bridge:repl] Capped initial flush: ${eligibleMessages.length} -> ${cappedMessages.length} (cap=${historyCap})`
              );
              logEvent("tengu_bridge_repl_history_capped", {
                eligible_count: eligibleMessages.length,
                capped_count: cappedMessages.length
              });
            }
            const sdkMessages = toSDKMessages2(cappedMessages);
            if (sdkMessages.length > 0) {
              logForDebugging(
                `[bridge:repl] Flushing ${sdkMessages.length} initial message(s) via transport`
              );
              const events = sdkMessages.map((sdkMsg) => ({
                ...sdkMsg,
                session_id: currentSessionId
              }));
              const dropsBefore = newTransport.droppedBatchCount;
              void newTransport.writeBatch(events).then(() => {
                if (newTransport.droppedBatchCount > dropsBefore) {
                  logForDebugging(
                    `[bridge:repl] Initial flush dropped ${newTransport.droppedBatchCount - dropsBefore} batch(es) \u2014 not marking ${sdkMessages.length} UUID(s) as flushed`
                  );
                  return;
                }
                if (previouslyFlushedUUIDs) {
                  for (const sdkMsg of sdkMessages) {
                    if (sdkMsg.uuid) {
                      previouslyFlushedUUIDs.add(sdkMsg.uuid);
                    }
                  }
                }
              }).catch(
                (e) => logForDebugging(`[bridge:repl] Initial flush failed: ${e}`)
              ).finally(() => {
                if (transport !== newTransport) return;
                drainFlushGate();
                onStateChange?.("connected");
              });
            } else {
              drainFlushGate();
              onStateChange?.("connected");
            }
          } else if (!flushGate.active) {
            onStateChange?.("connected");
          }
        });
        newTransport.setOnData((data) => {
          handleIngressMessage(
            data,
            recentPostedUUIDs,
            recentInboundUUIDs,
            onInboundMessage,
            onPermissionResponse,
            onServerControlRequest
          );
        });
        debugFireClose = handleTransportPermanentClose;
        newTransport.setOnClose((closeCode) => {
          if (transport !== newTransport) return;
          handleTransportPermanentClose(closeCode);
        });
        if (!initialFlushDone && initialMessages && initialMessages.length > 0) {
          flushGate.start();
        }
        newTransport.connect();
      };
      v2Generation++;
      if (useCcrV2) {
        const sessionUrl = buildCCRv2SdkUrl(baseUrl, workSessionId);
        const thisGen = v2Generation;
        logForDebugging(
          `[bridge:repl] CCR v2: sessionUrl=${sessionUrl} session=${workSessionId} gen=${thisGen}`
        );
        void createV2ReplTransport({
          sessionUrl,
          ingressToken,
          sessionId: workSessionId,
          initialSequenceNum: lastTransportSequenceNum
        }).then(
          (t) => {
            if (pollController.signal.aborted) {
              t.close();
              return;
            }
            if (thisGen !== v2Generation) {
              logForDebugging(
                `[bridge:repl] CCR v2: discarding stale handshake gen=${thisGen} current=${v2Generation}`
              );
              t.close();
              return;
            }
            wireTransport(t);
          },
          (err) => {
            logForDebugging(
              `[bridge:repl] CCR v2: createV2ReplTransport failed: ${errorMessage(err)}`,
              { level: "error" }
            );
            logEvent("tengu_bridge_repl_ccr_v2_init_failed", {});
            if (thisGen !== v2Generation) return;
            if (currentWorkId) {
              void api.stopWork(environmentId, currentWorkId, false).catch((e) => {
                logForDebugging(
                  `[bridge:repl] stopWork after v2 init failure: ${errorMessage(e)}`
                );
              });
              currentWorkId = null;
              currentIngressToken = null;
            }
            wakePollLoop();
          }
        );
      } else {
        const wsUrl = buildSdkUrl(sessionIngressUrl, workSessionId);
        logForDebugging(`[bridge:repl] Ingress URL: ${wsUrl}`);
        logForDebugging(
          `[bridge:repl] Creating HybridTransport: session=${workSessionId}`
        );
        const oauthToken = v1OauthToken ?? "";
        wireTransport(
          createV1ReplTransport(
            new HybridTransport(
              new URL(wsUrl),
              {
                Authorization: `Bearer ${oauthToken}`,
                "anthropic-version": "2023-06-01"
              },
              workSessionId,
              () => ({
                Authorization: `Bearer ${getOAuthToken() ?? oauthToken}`,
                "anthropic-version": "2023-06-01"
              }),
              // Cap retries so a persistently-failing session-ingress can't
              // pin the uploader drain loop for the lifetime of the bridge.
              // 50 attempts ≈ 20 min (15s POST timeout + 8s backoff + jitter
              // per cycle at steady state). Bridge-only — 1P keeps indefinite.
              {
                maxConsecutiveFailures: 50,
                isBridge: true,
                onBatchDropped: () => {
                  onStateChange?.(
                    "reconnecting",
                    "Lost sync with Remote Control \u2014 events could not be delivered"
                  );
                  wakePollLoop();
                }
              }
            )
          )
        );
      }
    }
  };
  void startWorkPollLoop(pollOpts);
  const pointerRefreshTimer = perpetual ? setInterval(() => {
    if (reconnectPromise) return;
    void writeBridgePointer(dir, {
      sessionId: currentSessionId,
      environmentId,
      source: "repl"
    });
  }, 60 * 6e4) : null;
  pointerRefreshTimer?.unref?.();
  const keepAliveIntervalMs = getPollIntervalConfig2().session_keepalive_interval_v2_ms;
  const keepAliveTimer = keepAliveIntervalMs > 0 ? setInterval(() => {
    if (!transport) return;
    logForDebugging("[bridge:repl] keep_alive sent");
    void transport.write({ type: "keep_alive" }).catch((err) => {
      logForDebugging(
        `[bridge:repl] keep_alive write failed: ${errorMessage(err)}`
      );
    });
  }, keepAliveIntervalMs) : null;
  keepAliveTimer?.unref?.();
  let teardownStarted = false;
  doTeardownImpl = async () => {
    if (teardownStarted) {
      logForDebugging(
        `[bridge:repl] Teardown already in progress, skipping duplicate call env=${environmentId} session=${currentSessionId}`
      );
      return;
    }
    teardownStarted = true;
    const teardownStart = Date.now();
    logForDebugging(
      `[bridge:repl] Teardown starting: env=${environmentId} session=${currentSessionId} workId=${currentWorkId ?? "none"} transportState=${transport?.getStateLabel() ?? "null"}`
    );
    if (pointerRefreshTimer !== null) {
      clearInterval(pointerRefreshTimer);
    }
    if (keepAliveTimer !== null) {
      clearInterval(keepAliveTimer);
    }
    if (sigusr2Handler) {
      process.off("SIGUSR2", sigusr2Handler);
    }
    if (process.env.USER_TYPE === "ant") {
      clearBridgeDebugHandle();
      debugFireClose = null;
    }
    pollController.abort();
    logForDebugging("[bridge:repl] Teardown: poll loop aborted");
    if (transport) {
      const finalSeq = transport.getLastSequenceNum();
      if (finalSeq > lastTransportSequenceNum) {
        lastTransportSequenceNum = finalSeq;
      }
    }
    if (perpetual) {
      transport = null;
      flushGate.drop();
      await writeBridgePointer(dir, {
        sessionId: currentSessionId,
        environmentId,
        source: "repl"
      });
      logForDebugging(
        `[bridge:repl] Teardown (perpetual): leaving env=${environmentId} session=${currentSessionId} alive on server, duration=${Date.now() - teardownStart}ms`
      );
      return;
    }
    const teardownTransport = transport;
    transport = null;
    flushGate.drop();
    if (teardownTransport) {
      void teardownTransport.write(makeResultMessage(currentSessionId));
    }
    const stopWorkP = currentWorkId ? api.stopWork(environmentId, currentWorkId, true).then(() => {
      logForDebugging("[bridge:repl] Teardown: stopWork completed");
    }).catch((err) => {
      logForDebugging(
        `[bridge:repl] Teardown stopWork failed: ${errorMessage(err)}`
      );
    }) : Promise.resolve();
    await Promise.all([stopWorkP, archiveSession(currentSessionId)]);
    teardownTransport?.close();
    logForDebugging("[bridge:repl] Teardown: transport closed");
    await api.deregisterEnvironment(environmentId).catch((err) => {
      logForDebugging(
        `[bridge:repl] Teardown deregister failed: ${errorMessage(err)}`
      );
    });
    await clearBridgePointer(dir);
    logForDebugging(
      `[bridge:repl] Teardown complete: env=${environmentId} duration=${Date.now() - teardownStart}ms`
    );
  };
  const unregister = registerCleanup(() => doTeardownImpl?.());
  logForDebugging(
    `[bridge:repl] Ready: env=${environmentId} session=${currentSessionId}`
  );
  onStateChange?.("ready");
  return {
    get bridgeSessionId() {
      return currentSessionId;
    },
    get environmentId() {
      return environmentId;
    },
    getSSESequenceNum() {
      const live = transport?.getLastSequenceNum() ?? 0;
      return Math.max(lastTransportSequenceNum, live);
    },
    sessionIngressUrl,
    writeMessages(messages) {
      const filtered = messages.filter(
        (m) => isEligibleBridgeMessage(m) && !initialMessageUUIDs.has(m.uuid) && !recentPostedUUIDs.has(m.uuid)
      );
      if (filtered.length === 0) return;
      if (!userMessageCallbackDone) {
        for (const m of filtered) {
          const text = extractTitleText(m);
          if (text !== void 0 && onUserMessage?.(text, currentSessionId)) {
            userMessageCallbackDone = true;
            break;
          }
        }
      }
      if (flushGate.enqueue(...filtered)) {
        logForDebugging(
          `[bridge:repl] Queued ${filtered.length} message(s) during initial flush`
        );
        return;
      }
      if (!transport) {
        const types = filtered.map((m) => m.type).join(",");
        logForDebugging(
          `[bridge:repl] Transport not configured, dropping ${filtered.length} message(s) [${types}] for session=${currentSessionId}`,
          { level: "warn" }
        );
        return;
      }
      for (const msg of filtered) {
        recentPostedUUIDs.add(msg.uuid);
      }
      logForDebugging(
        `[bridge:repl] Sending ${filtered.length} message(s) via transport`
      );
      const sdkMessages = toSDKMessages2(filtered);
      const events = sdkMessages.map((sdkMsg) => ({
        ...sdkMsg,
        session_id: currentSessionId
      }));
      void transport.writeBatch(events);
    },
    writeSdkMessages(messages) {
      const filtered = messages.filter(
        (m) => !m.uuid || !recentPostedUUIDs.has(m.uuid)
      );
      if (filtered.length === 0) return;
      if (!transport) {
        logForDebugging(
          `[bridge:repl] Transport not configured, dropping ${filtered.length} SDK message(s) for session=${currentSessionId}`,
          { level: "warn" }
        );
        return;
      }
      for (const msg of filtered) {
        if (msg.uuid) recentPostedUUIDs.add(msg.uuid);
      }
      const events = filtered.map((m) => ({ ...m, session_id: currentSessionId }));
      void transport.writeBatch(events);
    },
    sendControlRequest(request) {
      if (!transport) {
        logForDebugging(
          "[bridge:repl] Transport not configured, skipping control_request"
        );
        return;
      }
      const event = { ...request, session_id: currentSessionId };
      void transport.write(event);
      logForDebugging(
        `[bridge:repl] Sent control_request request_id=${request.request_id}`
      );
    },
    sendControlResponse(response) {
      if (!transport) {
        logForDebugging(
          "[bridge:repl] Transport not configured, skipping control_response"
        );
        return;
      }
      const event = { ...response, session_id: currentSessionId };
      void transport.write(event);
      logForDebugging("[bridge:repl] Sent control_response");
    },
    sendControlCancelRequest(requestId) {
      if (!transport) {
        logForDebugging(
          "[bridge:repl] Transport not configured, skipping control_cancel_request"
        );
        return;
      }
      const event = {
        type: "control_cancel_request",
        request_id: requestId,
        session_id: currentSessionId
      };
      void transport.write(event);
      logForDebugging(
        `[bridge:repl] Sent control_cancel_request request_id=${requestId}`
      );
    },
    sendResult() {
      if (!transport) {
        logForDebugging(
          `[bridge:repl] sendResult: skipping, transport not configured session=${currentSessionId}`
        );
        return;
      }
      void transport.write(makeResultMessage(currentSessionId));
      logForDebugging(
        `[bridge:repl] Sent result for session=${currentSessionId}`
      );
    },
    async teardown() {
      unregister();
      await doTeardownImpl?.();
      logForDebugging("[bridge:repl] Torn down");
      logEvent("tengu_bridge_repl_teardown", {});
    }
  };
}
async function startWorkPollLoop({
  api,
  getCredentials,
  signal,
  onStateChange,
  onWorkReceived,
  onEnvironmentLost,
  getWsState,
  isAtCapacity,
  capacitySignal,
  onFatalError,
  getPollIntervalConfig: getPollIntervalConfig2 = () => DEFAULT_POLL_CONFIG,
  getHeartbeatInfo,
  onHeartbeatFatal
}) {
  const MAX_ENVIRONMENT_RECREATIONS = 3;
  logForDebugging(
    `[bridge:repl] Starting work poll loop for env=${getCredentials().environmentId}`
  );
  let consecutiveErrors = 0;
  let firstErrorTime = null;
  let lastPollErrorTime = null;
  let environmentRecreations = 0;
  let suspensionDetected = false;
  while (!signal.aborted) {
    const { environmentId: envId, environmentSecret: envSecret } = getCredentials();
    const pollConfig = getPollIntervalConfig2();
    try {
      const work = await api.pollForWork(
        envId,
        envSecret,
        signal,
        pollConfig.reclaim_older_than_ms
      );
      environmentRecreations = 0;
      if (consecutiveErrors > 0) {
        logForDebugging(
          `[bridge:repl] Poll recovered after ${consecutiveErrors} consecutive error(s)`
        );
        consecutiveErrors = 0;
        firstErrorTime = null;
        lastPollErrorTime = null;
        onStateChange?.("ready");
      }
      if (!work) {
        const skipAtCapacityOnce = suspensionDetected;
        suspensionDetected = false;
        if (isAtCapacity?.() && capacitySignal && !skipAtCapacityOnce) {
          const atCapMs = pollConfig.poll_interval_ms_at_capacity;
          if (pollConfig.non_exclusive_heartbeat_interval_ms > 0 && getHeartbeatInfo) {
            logEvent("tengu_bridge_heartbeat_mode_entered", {
              heartbeat_interval_ms: pollConfig.non_exclusive_heartbeat_interval_ms
            });
            const pollDeadline = atCapMs > 0 ? Date.now() + atCapMs : null;
            let needsBackoff = false;
            let hbCycles = 0;
            while (!signal.aborted && isAtCapacity() && (pollDeadline === null || Date.now() < pollDeadline)) {
              const hbConfig = getPollIntervalConfig2();
              if (hbConfig.non_exclusive_heartbeat_interval_ms <= 0) break;
              const info = getHeartbeatInfo();
              if (!info) break;
              const cap = capacitySignal();
              try {
                await api.heartbeatWork(
                  info.environmentId,
                  info.workId,
                  info.sessionToken
                );
              } catch (err) {
                logForDebugging(
                  `[bridge:repl:heartbeat] Failed: ${errorMessage(err)}`
                );
                if (err instanceof BridgeFatalError) {
                  cap.cleanup();
                  logEvent("tengu_bridge_heartbeat_error", {
                    status: err.status,
                    error_type: err.status === 401 || err.status === 403 ? "auth_failed" : "fatal"
                  });
                  if (onHeartbeatFatal) {
                    onHeartbeatFatal(err);
                    logForDebugging(
                      `[bridge:repl:heartbeat] Fatal (status=${err.status}), work state cleared \u2014 fast-polling for re-dispatch`
                    );
                  } else {
                    needsBackoff = true;
                  }
                  break;
                }
              }
              hbCycles++;
              await sleep(
                hbConfig.non_exclusive_heartbeat_interval_ms,
                cap.signal
              );
              cap.cleanup();
            }
            const exitReason = needsBackoff ? "error" : signal.aborted ? "shutdown" : !isAtCapacity() ? "capacity_changed" : pollDeadline !== null && Date.now() >= pollDeadline ? "poll_due" : "config_disabled";
            logEvent("tengu_bridge_heartbeat_mode_exited", {
              reason: exitReason,
              heartbeat_cycles: hbCycles
            });
            if (!needsBackoff) {
              if (exitReason === "poll_due") {
                logForDebugging(
                  `[bridge:repl] Heartbeat poll_due after ${hbCycles} cycles \u2014 falling through to pollForWork`
                );
              }
              continue;
            }
          }
          const sleepMs = atCapMs > 0 ? atCapMs : pollConfig.non_exclusive_heartbeat_interval_ms;
          if (sleepMs > 0) {
            const cap = capacitySignal();
            const sleepStart = Date.now();
            await sleep(sleepMs, cap.signal);
            cap.cleanup();
            const overrun = Date.now() - sleepStart - sleepMs;
            if (overrun > 6e4) {
              logForDebugging(
                `[bridge:repl] At-capacity sleep overran by ${Math.round(overrun / 1e3)}s \u2014 process suspension detected, forcing one fast-poll cycle`
              );
              logEvent("tengu_bridge_repl_suspension_detected", {
                overrun_ms: overrun
              });
              suspensionDetected = true;
            }
          }
        } else {
          await sleep(pollConfig.poll_interval_ms_not_at_capacity, signal);
        }
        continue;
      }
      let secret;
      try {
        secret = decodeWorkSecret(work.secret);
      } catch (err) {
        logForDebugging(
          `[bridge:repl] Failed to decode work secret: ${errorMessage(err)}`
        );
        logEvent("tengu_bridge_repl_work_secret_failed", {});
        await api.stopWork(envId, work.id, false).catch(() => {
        });
        continue;
      }
      logForDebugging(`[bridge:repl] Acknowledging workId=${work.id}`);
      try {
        await api.acknowledgeWork(envId, work.id, secret.session_ingress_token);
      } catch (err) {
        logForDebugging(
          `[bridge:repl] Acknowledge failed workId=${work.id}: ${errorMessage(err)}`
        );
      }
      if (work.data.type === "healthcheck") {
        logForDebugging("[bridge:repl] Healthcheck received");
        continue;
      }
      if (work.data.type === "session") {
        const workSessionId = work.data.id;
        try {
          validateBridgeId(workSessionId, "session_id");
        } catch {
          logForDebugging(
            `[bridge:repl] Invalid session_id in work: ${workSessionId}`
          );
          continue;
        }
        onWorkReceived(
          workSessionId,
          secret.session_ingress_token,
          work.id,
          secret.use_code_sessions === true
        );
        logForDebugging("[bridge:repl] Work accepted, continuing poll loop");
      }
    } catch (err) {
      if (signal.aborted) break;
      if (err instanceof BridgeFatalError && err.status === 404 && onEnvironmentLost) {
        const currentEnvId = getCredentials().environmentId;
        if (envId !== currentEnvId) {
          logForDebugging(
            `[bridge:repl] Stale poll error for old env=${envId}, current env=${currentEnvId} \u2014 skipping onEnvironmentLost`
          );
          consecutiveErrors = 0;
          firstErrorTime = null;
          continue;
        }
        environmentRecreations++;
        logForDebugging(
          `[bridge:repl] Environment deleted, attempting re-registration (attempt ${environmentRecreations}/${MAX_ENVIRONMENT_RECREATIONS})`
        );
        logEvent("tengu_bridge_repl_env_lost", {
          attempt: environmentRecreations
        });
        if (environmentRecreations > MAX_ENVIRONMENT_RECREATIONS) {
          logForDebugging(
            `[bridge:repl] Environment re-registration limit reached (${MAX_ENVIRONMENT_RECREATIONS}), giving up`
          );
          onStateChange?.(
            "failed",
            "Environment deleted and re-registration limit reached"
          );
          onFatalError?.();
          break;
        }
        onStateChange?.("reconnecting", "environment lost, recreating session");
        const newCreds = await onEnvironmentLost();
        if (signal.aborted) break;
        if (newCreds) {
          consecutiveErrors = 0;
          firstErrorTime = null;
          onStateChange?.("ready");
          logForDebugging(
            `[bridge:repl] Re-registered environment: ${newCreds.environmentId}`
          );
          continue;
        }
        onStateChange?.(
          "failed",
          "Environment deleted and re-registration failed"
        );
        onFatalError?.();
        break;
      }
      if (err instanceof BridgeFatalError) {
        const isExpiry = isExpiredErrorType(err.errorType);
        const isSuppressible = isSuppressible403(err);
        logForDebugging(
          `[bridge:repl] Fatal poll error: ${err.message} (status=${err.status}, type=${err.errorType ?? "unknown"})${isSuppressible ? " (suppressed)" : ""}`
        );
        logEvent("tengu_bridge_repl_fatal_error", {
          status: err.status,
          error_type: err.errorType
        });
        logForDiagnosticsNoPII(
          isExpiry ? "info" : "error",
          "bridge_repl_fatal_error",
          { status: err.status, error_type: err.errorType }
        );
        if (!isSuppressible) {
          onStateChange?.(
            "failed",
            isExpiry ? "session expired \xB7 /remote-control to reconnect" : err.message
          );
        }
        onFatalError?.();
        break;
      }
      const now = Date.now();
      if (lastPollErrorTime !== null && now - lastPollErrorTime > POLL_ERROR_MAX_DELAY_MS * 2) {
        logForDebugging(
          `[bridge:repl] Detected system sleep (${Math.round((now - lastPollErrorTime) / 1e3)}s gap), resetting poll error budget`
        );
        logForDiagnosticsNoPII("info", "bridge_repl_poll_sleep_detected", {
          gapMs: now - lastPollErrorTime
        });
        consecutiveErrors = 0;
        firstErrorTime = null;
      }
      lastPollErrorTime = now;
      consecutiveErrors++;
      if (firstErrorTime === null) {
        firstErrorTime = now;
      }
      const elapsed = now - firstErrorTime;
      const httpStatus = extractHttpStatus(err);
      const errMsg = describeAxiosError(err);
      const wsLabel = getWsState?.() ?? "unknown";
      logForDebugging(
        `[bridge:repl] Poll error (attempt ${consecutiveErrors}, elapsed ${Math.round(elapsed / 1e3)}s, ws=${wsLabel}): ${errMsg}`
      );
      logEvent("tengu_bridge_repl_poll_error", {
        status: httpStatus,
        consecutiveErrors,
        elapsedMs: elapsed
      });
      if (consecutiveErrors === 1) {
        onStateChange?.("reconnecting", errMsg);
      }
      if (elapsed >= POLL_ERROR_GIVE_UP_MS) {
        logForDebugging(
          `[bridge:repl] Poll failures exceeded ${POLL_ERROR_GIVE_UP_MS / 1e3}s (${consecutiveErrors} errors), giving up`
        );
        logForDiagnosticsNoPII("info", "bridge_repl_poll_give_up");
        logEvent("tengu_bridge_repl_poll_give_up", {
          consecutiveErrors,
          elapsedMs: elapsed,
          lastStatus: httpStatus
        });
        onStateChange?.("failed", "connection to server lost");
        break;
      }
      const backoff = Math.min(
        POLL_ERROR_INITIAL_DELAY_MS * 2 ** (consecutiveErrors - 1),
        POLL_ERROR_MAX_DELAY_MS
      );
      if (getPollIntervalConfig2().non_exclusive_heartbeat_interval_ms > 0) {
        const info = getHeartbeatInfo?.();
        if (info) {
          try {
            await api.heartbeatWork(
              info.environmentId,
              info.workId,
              info.sessionToken
            );
          } catch {
          }
        }
      }
      await sleep(backoff, signal);
    }
  }
  logForDebugging(
    `[bridge:repl] Work poll loop ended (aborted=${signal.aborted}) env=${getCredentials().environmentId}`
  );
}

// src/bridge/initReplBridge.ts
init_sessionIdCompat();
async function initReplBridge(options) {
  const {
    onInboundMessage,
    onPermissionResponse,
    onInterrupt,
    onSetModel,
    onSetMaxThinkingTokens,
    onSetPermissionMode,
    onStateChange,
    initialMessages,
    getMessages,
    previouslyFlushedUUIDs,
    initialName,
    perpetual,
    outboundOnly,
    tags
  } = options ?? {};
  setCseShimGate(isCseShimEnabled);
  if (!await isBridgeEnabledBlocking()) {
    logBridgeSkip("not_enabled", "[bridge:repl] Skipping: bridge not enabled");
    return null;
  }
  if (!getBridgeAccessToken()) {
    logBridgeSkip("no_oauth", "[bridge:repl] Skipping: no OAuth tokens");
    onStateChange?.("failed", "/login");
    return null;
  }
  await waitForPolicyLimitsToLoad();
  if (!isPolicyAllowed("allow_remote_control")) {
    logBridgeSkip(
      "policy_denied",
      "[bridge:repl] Skipping: allow_remote_control policy not allowed"
    );
    onStateChange?.("failed", "disabled by your organization's policy");
    return null;
  }
  if (!getBridgeTokenOverride()) {
    const cfg = getGlobalConfig();
    if (cfg.bridgeOauthDeadExpiresAt != null && (cfg.bridgeOauthDeadFailCount ?? 0) >= 3 && getClaudeAIOAuthTokens()?.expiresAt === cfg.bridgeOauthDeadExpiresAt) {
      logForDebugging(
        `[bridge:repl] Skipping: cross-process backoff (dead token seen ${cfg.bridgeOauthDeadFailCount} times)`
      );
      return null;
    }
    await checkAndRefreshOAuthTokenIfNeeded();
    const tokens = getClaudeAIOAuthTokens();
    if (tokens && tokens.expiresAt !== null && tokens.expiresAt <= Date.now()) {
      logBridgeSkip(
        "oauth_expired_unrefreshable",
        "[bridge:repl] Skipping: OAuth token expired and refresh failed (re-login required)"
      );
      onStateChange?.("failed", "/login");
      const deadExpiresAt = tokens.expiresAt;
      saveGlobalConfig((c) => ({
        ...c,
        bridgeOauthDeadExpiresAt: deadExpiresAt,
        bridgeOauthDeadFailCount: c.bridgeOauthDeadExpiresAt === deadExpiresAt ? (c.bridgeOauthDeadFailCount ?? 0) + 1 : 1
      }));
      return null;
    }
  }
  const baseUrl = getBridgeBaseUrl();
  let title = `remote-control-${generateShortWordSlug()}`;
  let hasTitle = false;
  let hasExplicitTitle = false;
  if (initialName) {
    title = initialName;
    hasTitle = true;
    hasExplicitTitle = true;
  } else {
    const sessionId = getSessionId();
    const customTitle = sessionId ? getCurrentSessionTitle(sessionId) : void 0;
    if (customTitle) {
      title = customTitle;
      hasTitle = true;
      hasExplicitTitle = true;
    } else if (initialMessages && initialMessages.length > 0) {
      for (let i = initialMessages.length - 1; i >= 0; i--) {
        const msg = initialMessages[i];
        if (msg.type !== "user" || msg.isMeta || msg.toolUseResult || msg.isCompactSummary || msg.origin && msg.origin.kind !== "human" || isSyntheticMessage(msg))
          continue;
        const rawContent = getContentText(msg.message.content);
        if (!rawContent) continue;
        const derived = deriveTitle(rawContent);
        if (!derived) continue;
        title = derived;
        hasTitle = true;
        break;
      }
    }
  }
  let userMessageCount = 0;
  let lastBridgeSessionId;
  let genSeq = 0;
  const patch = (derived, bridgeSessionId, atCount) => {
    hasTitle = true;
    title = derived;
    logForDebugging(
      `[bridge:repl] derived title from message ${atCount}: ${derived}`
    );
    void updateBridgeSessionTitle(bridgeSessionId, derived, {
      baseUrl,
      getAccessToken: getBridgeAccessToken
    }).catch(() => {
    });
  };
  const generateAndPatch = (input, bridgeSessionId) => {
    const gen = ++genSeq;
    const atCount = userMessageCount;
    void generateSessionTitle(input, AbortSignal.timeout(15e3)).then(
      (generated) => {
        if (generated && gen === genSeq && lastBridgeSessionId === bridgeSessionId && !getCurrentSessionTitle(getSessionId())) {
          patch(generated, bridgeSessionId, atCount);
        }
      }
    );
  };
  const onUserMessage = (text, bridgeSessionId) => {
    if (hasExplicitTitle || getCurrentSessionTitle(getSessionId())) {
      return true;
    }
    if (lastBridgeSessionId !== void 0 && lastBridgeSessionId !== bridgeSessionId) {
      userMessageCount = 0;
    }
    lastBridgeSessionId = bridgeSessionId;
    userMessageCount++;
    if (userMessageCount === 1 && !hasTitle) {
      const placeholder = deriveTitle(text);
      if (placeholder) patch(placeholder, bridgeSessionId, userMessageCount);
      generateAndPatch(text, bridgeSessionId);
    } else if (userMessageCount === 3) {
      const msgs = getMessages?.();
      const input = msgs ? extractConversationText(getMessagesAfterCompactBoundary(msgs)) : text;
      generateAndPatch(input, bridgeSessionId);
    }
    return userMessageCount >= 3;
  };
  const initialHistoryCap = getFeatureValue_CACHED_WITH_REFRESH(
    "tengu_bridge_initial_history_cap",
    200,
    5 * 60 * 1e3
  );
  const orgUUID = await getOrganizationUUID();
  if (!orgUUID) {
    logBridgeSkip("no_org_uuid", "[bridge:repl] Skipping: no org UUID");
    onStateChange?.("failed", "/login");
    return null;
  }
  if (isEnvLessBridgeEnabled() && !perpetual) {
    const versionError2 = await checkEnvLessBridgeMinVersion();
    if (versionError2) {
      logBridgeSkip(
        "version_too_old",
        `[bridge:repl] Skipping: ${versionError2}`,
        true
      );
      onStateChange?.("failed", "run `blaude update` to upgrade");
      return null;
    }
    logForDebugging(
      "[bridge:repl] Using env-less bridge path (tengu_bridge_repl_v2)"
    );
    const { initEnvLessBridgeCore } = await import("./remoteBridgeCore-5GPZGXLW.mjs");
    return initEnvLessBridgeCore({
      baseUrl,
      orgUUID,
      title,
      getAccessToken: getBridgeAccessToken,
      onAuth401: handleOAuth401Error,
      toSDKMessages,
      initialHistoryCap,
      initialMessages,
      // v2 always creates a fresh server session (new cse_* id), so
      // previouslyFlushedUUIDs is not passed — there's no cross-session
      // UUID collision risk, and the ref persists across enable→disable→
      // re-enable cycles which would cause the new session to receive zero
      // history (all UUIDs already in the set from the prior enable).
      // v1 handles this by calling previouslyFlushedUUIDs.clear() on fresh
      // session creation (replBridge.ts:768); v2 skips the param entirely.
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
    });
  }
  const versionError = checkBridgeMinVersion();
  if (versionError) {
    logBridgeSkip("version_too_old", `[bridge:repl] Skipping: ${versionError}`);
    onStateChange?.("failed", "run `blaude update` to upgrade");
    return null;
  }
  const branch = await getBranch();
  const gitRepoUrl = await getRemoteUrl();
  const sessionIngressUrl = process.env.USER_TYPE === "ant" && process.env.CLAUDE_BRIDGE_SESSION_INGRESS_URL ? process.env.CLAUDE_BRIDGE_SESSION_INGRESS_URL : baseUrl;
  let workerType = "claude_code";
  if (feature("KAIROS")) {
    const { isAssistantMode } = (init_assistant(), __toCommonJS(assistant_exports));
    if (isAssistantMode()) {
      workerType = "claude_code_assistant";
    }
  }
  return initBridgeCore({
    dir: getOriginalCwd(),
    machineName: hostname(),
    branch,
    gitRepoUrl,
    title,
    baseUrl,
    sessionIngressUrl,
    workerType,
    getAccessToken: getBridgeAccessToken,
    createSession: (opts) => createBridgeSession({
      ...opts,
      events: [],
      baseUrl,
      getAccessToken: getBridgeAccessToken
    }),
    archiveSession: (sessionId) => archiveBridgeSession(sessionId, {
      baseUrl,
      getAccessToken: getBridgeAccessToken,
      // gracefulShutdown.ts:407 races runCleanupFunctions against 2s.
      // Teardown also does stopWork (parallel) + deregister (sequential),
      // so archive can't have the full budget. 1.5s matches v2's
      // teardown_archive_timeout_ms default.
      timeoutMs: 1500
    }).catch((err) => {
      logForDebugging(
        `[bridge:repl] archiveBridgeSession threw: ${errorMessage(err)}`,
        { level: "error" }
      );
    }),
    // getCurrentTitle is read on reconnect-after-env-lost to re-title the new
    // session. /rename writes to session storage; onUserMessage mutates
    // `title` directly — both paths are picked up here.
    getCurrentTitle: () => getCurrentSessionTitle(getSessionId()) ?? title,
    onUserMessage,
    toSDKMessages,
    onAuth401: handleOAuth401Error,
    getPollIntervalConfig,
    initialHistoryCap,
    initialMessages,
    previouslyFlushedUUIDs,
    onInboundMessage,
    onPermissionResponse,
    onInterrupt,
    onSetModel,
    onSetMaxThinkingTokens,
    onSetPermissionMode,
    onStateChange,
    perpetual
  });
}
var TITLE_MAX_LEN = 50;
function deriveTitle(raw) {
  const clean = stripDisplayTagsAllowEmpty(raw);
  const firstSentence = /^(.*?[.!?])\s/.exec(clean)?.[1] ?? clean;
  const flat = firstSentence.replace(/\s+/g, " ").trim();
  if (!flat) return void 0;
  return flat.length > TITLE_MAX_LEN ? flat.slice(0, TITLE_MAX_LEN - 1) + "\u2026" : flat;
}
export {
  initReplBridge
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2JyaWRnZS9pbml0UmVwbEJyaWRnZS50cyIsICIuLi8uLi9zcmMvYnJpZGdlL3JlcGxCcmlkZ2UudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogUkVQTC1zcGVjaWZpYyB3cmFwcGVyIGFyb3VuZCBpbml0QnJpZGdlQ29yZS4gT3ducyB0aGUgcGFydHMgdGhhdCByZWFkXG4gKiBib290c3RyYXAgc3RhdGUgXHUyMDE0IGdhdGVzLCBjd2QsIHNlc3Npb24gSUQsIGdpdCBjb250ZXh0LCBPQXV0aCwgdGl0bGVcbiAqIGRlcml2YXRpb24gXHUyMDE0IHRoZW4gZGVsZWdhdGVzIHRvIHRoZSBib290c3RyYXAtZnJlZSBjb3JlLlxuICpcbiAqIFNwbGl0IG91dCBvZiByZXBsQnJpZGdlLnRzIGJlY2F1c2UgdGhlIHNlc3Npb25TdG9yYWdlIGltcG9ydFxuICogKGdldEN1cnJlbnRTZXNzaW9uVGl0bGUpIHRyYW5zaXRpdmVseSBwdWxscyBpbiBzcmMvY29tbWFuZHMudHMgXHUyMTkyIHRoZVxuICogZW50aXJlIHNsYXNoIGNvbW1hbmQgKyBSZWFjdCBjb21wb25lbnQgdHJlZSAofjEzMDAgbW9kdWxlcykuIEtlZXBpbmdcbiAqIGluaXRCcmlkZ2VDb3JlIGluIGEgZmlsZSB0aGF0IGRvZXNuJ3QgdG91Y2ggc2Vzc2lvblN0b3JhZ2UgbGV0c1xuICogZGFlbW9uQnJpZGdlLnRzIGltcG9ydCB0aGUgY29yZSB3aXRob3V0IGJsb2F0aW5nIHRoZSBBZ2VudCBTREsgYnVuZGxlLlxuICpcbiAqIENhbGxlZCB2aWEgZHluYW1pYyBpbXBvcnQgYnkgdXNlUmVwbEJyaWRnZSAoYXV0by1zdGFydCkgYW5kIHByaW50LnRzXG4gKiAoU0RLIC1wIG1vZGUgdmlhIHF1ZXJ5LmVuYWJsZVJlbW90ZUNvbnRyb2wpLlxuICovXG5cbmltcG9ydCB7IGZlYXR1cmUgfSBmcm9tICdidW46YnVuZGxlJ1xuaW1wb3J0IHsgaG9zdG5hbWUgfSBmcm9tICdvcydcbmltcG9ydCB7IGdldE9yaWdpbmFsQ3dkLCBnZXRTZXNzaW9uSWQgfSBmcm9tICcuLi9ib290c3RyYXAvc3RhdGUuanMnXG5pbXBvcnQgdHlwZSB7IFNES01lc3NhZ2UgfSBmcm9tICcuLi9lbnRyeXBvaW50cy9hZ2VudFNka1R5cGVzLmpzJ1xuaW1wb3J0IHR5cGUgeyBTREtDb250cm9sUmVzcG9uc2UgfSBmcm9tICcuLi9lbnRyeXBvaW50cy9zZGsvY29udHJvbFR5cGVzLmpzJ1xuaW1wb3J0IHsgZ2V0RmVhdHVyZVZhbHVlX0NBQ0hFRF9XSVRIX1JFRlJFU0ggfSBmcm9tICcuLi9zZXJ2aWNlcy9hbmFseXRpY3MvZ3Jvd3RoYm9vay5qcydcbmltcG9ydCB7IGdldE9yZ2FuaXphdGlvblVVSUQgfSBmcm9tICcuLi9zZXJ2aWNlcy9vYXV0aC9jbGllbnQuanMnXG5pbXBvcnQge1xuICBpc1BvbGljeUFsbG93ZWQsXG4gIHdhaXRGb3JQb2xpY3lMaW1pdHNUb0xvYWQsXG59IGZyb20gJy4uL3NlcnZpY2VzL3BvbGljeUxpbWl0cy9pbmRleC5qcydcbmltcG9ydCB0eXBlIHsgTWVzc2FnZSB9IGZyb20gJy4uL3R5cGVzL21lc3NhZ2UuanMnXG5pbXBvcnQge1xuICBjaGVja0FuZFJlZnJlc2hPQXV0aFRva2VuSWZOZWVkZWQsXG4gIGdldENsYXVkZUFJT0F1dGhUb2tlbnMsXG4gIGhhbmRsZU9BdXRoNDAxRXJyb3IsXG59IGZyb20gJy4uL3V0aWxzL2F1dGguanMnXG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcsIHNhdmVHbG9iYWxDb25maWcgfSBmcm9tICcuLi91dGlscy9jb25maWcuanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuLi91dGlscy9kZWJ1Zy5qcydcbmltcG9ydCB7IHN0cmlwRGlzcGxheVRhZ3NBbGxvd0VtcHR5IH0gZnJvbSAnLi4vdXRpbHMvZGlzcGxheVRhZ3MuanMnXG5pbXBvcnQgeyBlcnJvck1lc3NhZ2UgfSBmcm9tICcuLi91dGlscy9lcnJvcnMuanMnXG5pbXBvcnQgeyBnZXRCcmFuY2gsIGdldFJlbW90ZVVybCB9IGZyb20gJy4uL3V0aWxzL2dpdC5qcydcbmltcG9ydCB7IHRvU0RLTWVzc2FnZXMgfSBmcm9tICcuLi91dGlscy9tZXNzYWdlcy9tYXBwZXJzLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0Q29udGVudFRleHQsXG4gIGdldE1lc3NhZ2VzQWZ0ZXJDb21wYWN0Qm91bmRhcnksXG4gIGlzU3ludGhldGljTWVzc2FnZSxcbn0gZnJvbSAnLi4vdXRpbHMvbWVzc2FnZXMuanMnXG5pbXBvcnQgdHlwZSB7IFBlcm1pc3Npb25Nb2RlIH0gZnJvbSAnLi4vdXRpbHMvcGVybWlzc2lvbnMvUGVybWlzc2lvbk1vZGUuanMnXG5pbXBvcnQgeyBnZXRDdXJyZW50U2Vzc2lvblRpdGxlIH0gZnJvbSAnLi4vdXRpbHMvc2Vzc2lvblN0b3JhZ2UuanMnXG5pbXBvcnQge1xuICBleHRyYWN0Q29udmVyc2F0aW9uVGV4dCxcbiAgZ2VuZXJhdGVTZXNzaW9uVGl0bGUsXG59IGZyb20gJy4uL3V0aWxzL3Nlc3Npb25UaXRsZS5qcydcbmltcG9ydCB7IGdlbmVyYXRlU2hvcnRXb3JkU2x1ZyB9IGZyb20gJy4uL3V0aWxzL3dvcmRzLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0QnJpZGdlQWNjZXNzVG9rZW4sXG4gIGdldEJyaWRnZUJhc2VVcmwsXG4gIGdldEJyaWRnZVRva2VuT3ZlcnJpZGUsXG59IGZyb20gJy4vYnJpZGdlQ29uZmlnLmpzJ1xuaW1wb3J0IHtcbiAgY2hlY2tCcmlkZ2VNaW5WZXJzaW9uLFxuICBpc0JyaWRnZUVuYWJsZWRCbG9ja2luZyxcbiAgaXNDc2VTaGltRW5hYmxlZCxcbiAgaXNFbnZMZXNzQnJpZGdlRW5hYmxlZCxcbn0gZnJvbSAnLi9icmlkZ2VFbmFibGVkLmpzJ1xuaW1wb3J0IHtcbiAgYXJjaGl2ZUJyaWRnZVNlc3Npb24sXG4gIGNyZWF0ZUJyaWRnZVNlc3Npb24sXG4gIHVwZGF0ZUJyaWRnZVNlc3Npb25UaXRsZSxcbn0gZnJvbSAnLi9jcmVhdGVTZXNzaW9uLmpzJ1xuaW1wb3J0IHsgbG9nQnJpZGdlU2tpcCB9IGZyb20gJy4vZGVidWdVdGlscy5qcydcbmltcG9ydCB7IGNoZWNrRW52TGVzc0JyaWRnZU1pblZlcnNpb24gfSBmcm9tICcuL2Vudkxlc3NCcmlkZ2VDb25maWcuanMnXG5pbXBvcnQgeyBnZXRQb2xsSW50ZXJ2YWxDb25maWcgfSBmcm9tICcuL3BvbGxDb25maWcuanMnXG5pbXBvcnQgdHlwZSB7IEJyaWRnZVN0YXRlLCBSZXBsQnJpZGdlSGFuZGxlIH0gZnJvbSAnLi9yZXBsQnJpZGdlLmpzJ1xuaW1wb3J0IHsgaW5pdEJyaWRnZUNvcmUgfSBmcm9tICcuL3JlcGxCcmlkZ2UuanMnXG5pbXBvcnQgeyBzZXRDc2VTaGltR2F0ZSB9IGZyb20gJy4vc2Vzc2lvbklkQ29tcGF0LmpzJ1xuaW1wb3J0IHR5cGUgeyBCcmlkZ2VXb3JrZXJUeXBlIH0gZnJvbSAnLi90eXBlcy5qcydcblxuZXhwb3J0IHR5cGUgSW5pdEJyaWRnZU9wdGlvbnMgPSB7XG4gIG9uSW5ib3VuZE1lc3NhZ2U/OiAobXNnOiBTREtNZXNzYWdlKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuICBvblBlcm1pc3Npb25SZXNwb25zZT86IChyZXNwb25zZTogU0RLQ29udHJvbFJlc3BvbnNlKSA9PiB2b2lkXG4gIG9uSW50ZXJydXB0PzogKCkgPT4gdm9pZFxuICBvblNldE1vZGVsPzogKG1vZGVsOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHZvaWRcbiAgb25TZXRNYXhUaGlua2luZ1Rva2Vucz86IChtYXhUb2tlbnM6IG51bWJlciB8IG51bGwpID0+IHZvaWRcbiAgb25TZXRQZXJtaXNzaW9uTW9kZT86IChcbiAgICBtb2RlOiBQZXJtaXNzaW9uTW9kZSxcbiAgKSA9PiB7IG9rOiB0cnVlIH0gfCB7IG9rOiBmYWxzZTsgZXJyb3I6IHN0cmluZyB9XG4gIG9uU3RhdGVDaGFuZ2U/OiAoc3RhdGU6IEJyaWRnZVN0YXRlLCBkZXRhaWw/OiBzdHJpbmcpID0+IHZvaWRcbiAgaW5pdGlhbE1lc3NhZ2VzPzogTWVzc2FnZVtdXG4gIC8vIEV4cGxpY2l0IHNlc3Npb24gbmFtZSBmcm9tIGAvcmVtb3RlLWNvbnRyb2wgPG5hbWU+YC4gV2hlbiBzZXQsIG92ZXJyaWRlc1xuICAvLyB0aGUgdGl0bGUgZGVyaXZlZCBmcm9tIHRoZSBjb252ZXJzYXRpb24gb3IgL3JlbmFtZS5cbiAgaW5pdGlhbE5hbWU/OiBzdHJpbmdcbiAgLy8gRnJlc2ggdmlldyBvZiB0aGUgZnVsbCBjb252ZXJzYXRpb24gYXQgY2FsbCB0aW1lLiBVc2VkIGJ5IG9uVXNlck1lc3NhZ2Unc1xuICAvLyBjb3VudC0zIGRlcml2YXRpb24gdG8gY2FsbCBnZW5lcmF0ZVNlc3Npb25UaXRsZSBvdmVyIHRoZSBmdWxsIGNvbnZlcnNhdGlvbi5cbiAgLy8gT3B0aW9uYWwgXHUyMDE0IHByaW50LnRzJ3MgU0RLIGVuYWJsZVJlbW90ZUNvbnRyb2wgcGF0aCBoYXMgbm8gUkVQTCBtZXNzYWdlXG4gIC8vIGFycmF5OyBjb3VudC0zIGZhbGxzIGJhY2sgdG8gdGhlIHNpbmdsZSBtZXNzYWdlIHRleHQgd2hlbiBhYnNlbnQuXG4gIGdldE1lc3NhZ2VzPzogKCkgPT4gTWVzc2FnZVtdXG4gIC8vIFVVSURzIGFscmVhZHkgZmx1c2hlZCBpbiBhIHByaW9yIGJyaWRnZSBzZXNzaW9uLiBNZXNzYWdlcyB3aXRoIHRoZXNlXG4gIC8vIFVVSURzIGFyZSBleGNsdWRlZCBmcm9tIHRoZSBpbml0aWFsIGZsdXNoIHRvIGF2b2lkIHBvaXNvbmluZyB0aGVcbiAgLy8gc2VydmVyIChkdXBsaWNhdGUgVVVJRHMgYWNyb3NzIHNlc3Npb25zIGNhdXNlIHRoZSBXUyB0byBiZSBraWxsZWQpLlxuICAvLyBNdXRhdGVkIGluIHBsYWNlIFx1MjAxNCBuZXdseSBmbHVzaGVkIFVVSURzIGFyZSBhZGRlZCBhZnRlciBlYWNoIGZsdXNoLlxuICBwcmV2aW91c2x5Rmx1c2hlZFVVSURzPzogU2V0PHN0cmluZz5cbiAgLyoqIFNlZSBCcmlkZ2VDb3JlUGFyYW1zLnBlcnBldHVhbC4gKi9cbiAgcGVycGV0dWFsPzogYm9vbGVhblxuICAvKipcbiAgICogV2hlbiB0cnVlLCB0aGUgYnJpZGdlIG9ubHkgZm9yd2FyZHMgZXZlbnRzIG91dGJvdW5kIChubyBTU0UgaW5ib3VuZFxuICAgKiBzdHJlYW0pLiBVc2VkIGJ5IENDUiBtaXJyb3IgbW9kZSBcdTIwMTQgbG9jYWwgc2Vzc2lvbnMgdmlzaWJsZSBvbiBjbGF1ZGUuYWlcbiAgICogd2l0aG91dCBlbmFibGluZyBpbmJvdW5kIGNvbnRyb2wuXG4gICAqL1xuICBvdXRib3VuZE9ubHk/OiBib29sZWFuXG4gIHRhZ3M/OiBzdHJpbmdbXVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdFJlcGxCcmlkZ2UoXG4gIG9wdGlvbnM/OiBJbml0QnJpZGdlT3B0aW9ucyxcbik6IFByb21pc2U8UmVwbEJyaWRnZUhhbmRsZSB8IG51bGw+IHtcbiAgY29uc3Qge1xuICAgIG9uSW5ib3VuZE1lc3NhZ2UsXG4gICAgb25QZXJtaXNzaW9uUmVzcG9uc2UsXG4gICAgb25JbnRlcnJ1cHQsXG4gICAgb25TZXRNb2RlbCxcbiAgICBvblNldE1heFRoaW5raW5nVG9rZW5zLFxuICAgIG9uU2V0UGVybWlzc2lvbk1vZGUsXG4gICAgb25TdGF0ZUNoYW5nZSxcbiAgICBpbml0aWFsTWVzc2FnZXMsXG4gICAgZ2V0TWVzc2FnZXMsXG4gICAgcHJldmlvdXNseUZsdXNoZWRVVUlEcyxcbiAgICBpbml0aWFsTmFtZSxcbiAgICBwZXJwZXR1YWwsXG4gICAgb3V0Ym91bmRPbmx5LFxuICAgIHRhZ3MsXG4gIH0gPSBvcHRpb25zID8/IHt9XG5cbiAgLy8gV2lyZSB0aGUgY3NlXyBzaGltIGtpbGwgc3dpdGNoIHNvIHRvQ29tcGF0U2Vzc2lvbklkIHJlc3BlY3RzIHRoZVxuICAvLyBHcm93dGhCb29rIGdhdGUuIERhZW1vbi9TREsgcGF0aHMgc2tpcCB0aGlzIFx1MjAxNCBzaGltIGRlZmF1bHRzIHRvIGFjdGl2ZS5cbiAgc2V0Q3NlU2hpbUdhdGUoaXNDc2VTaGltRW5hYmxlZClcblxuICAvLyAxLiBSdW50aW1lIGdhdGVcbiAgaWYgKCEoYXdhaXQgaXNCcmlkZ2VFbmFibGVkQmxvY2tpbmcoKSkpIHtcbiAgICBsb2dCcmlkZ2VTa2lwKCdub3RfZW5hYmxlZCcsICdbYnJpZGdlOnJlcGxdIFNraXBwaW5nOiBicmlkZ2Ugbm90IGVuYWJsZWQnKVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyAxYi4gTWluaW11bSB2ZXJzaW9uIGNoZWNrIFx1MjAxNCBkZWZlcnJlZCB0byBhZnRlciB0aGUgdjEvdjIgYnJhbmNoIGJlbG93LFxuICAvLyBzaW5jZSBlYWNoIGltcGxlbWVudGF0aW9uIGhhcyBpdHMgb3duIGZsb29yICh0ZW5ndV9icmlkZ2VfbWluX3ZlcnNpb25cbiAgLy8gZm9yIHYxLCB0ZW5ndV9icmlkZ2VfcmVwbF92Ml9jb25maWcubWluX3ZlcnNpb24gZm9yIHYyKS5cblxuICAvLyAyLiBDaGVjayBPQXV0aCBcdTIwMTQgbXVzdCBiZSBzaWduZWQgaW4gd2l0aCBjbGF1ZGUuYWkuIFJ1bnMgYmVmb3JlIHRoZVxuICAvLyBwb2xpY3kgY2hlY2sgc28gY29uc29sZS1hdXRoIHVzZXJzIGdldCB0aGUgYWN0aW9uYWJsZSBcIi9sb2dpblwiIGhpbnRcbiAgLy8gaW5zdGVhZCBvZiBhIG1pc2xlYWRpbmcgcG9saWN5IGVycm9yIGZyb20gYSBzdGFsZS93cm9uZy1vcmcgY2FjaGUuXG4gIGlmICghZ2V0QnJpZGdlQWNjZXNzVG9rZW4oKSkge1xuICAgIGxvZ0JyaWRnZVNraXAoJ25vX29hdXRoJywgJ1ticmlkZ2U6cmVwbF0gU2tpcHBpbmc6IG5vIE9BdXRoIHRva2VucycpXG4gICAgb25TdGF0ZUNoYW5nZT8uKCdmYWlsZWQnLCAnL2xvZ2luJylcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLy8gMy4gQ2hlY2sgb3JnYW5pemF0aW9uIHBvbGljeSBcdTIwMTQgcmVtb3RlIGNvbnRyb2wgbWF5IGJlIGRpc2FibGVkXG4gIGF3YWl0IHdhaXRGb3JQb2xpY3lMaW1pdHNUb0xvYWQoKVxuICBpZiAoIWlzUG9saWN5QWxsb3dlZCgnYWxsb3dfcmVtb3RlX2NvbnRyb2wnKSkge1xuICAgIGxvZ0JyaWRnZVNraXAoXG4gICAgICAncG9saWN5X2RlbmllZCcsXG4gICAgICAnW2JyaWRnZTpyZXBsXSBTa2lwcGluZzogYWxsb3dfcmVtb3RlX2NvbnRyb2wgcG9saWN5IG5vdCBhbGxvd2VkJyxcbiAgICApXG4gICAgb25TdGF0ZUNoYW5nZT8uKCdmYWlsZWQnLCBcImRpc2FibGVkIGJ5IHlvdXIgb3JnYW5pemF0aW9uJ3MgcG9saWN5XCIpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8vIFdoZW4gQ0xBVURFX0JSSURHRV9PQVVUSF9UT0tFTiBpcyBzZXQgKGFudC1vbmx5IGxvY2FsIGRldiksIHRoZSBicmlkZ2VcbiAgLy8gdXNlcyB0aGF0IHRva2VuIGRpcmVjdGx5IHZpYSBnZXRCcmlkZ2VBY2Nlc3NUb2tlbigpIFx1MjAxNCBrZXljaGFpbiBzdGF0ZSBpc1xuICAvLyBpcnJlbGV2YW50LiBTa2lwIDJiLzJjIHRvIHByZXNlcnZlIHRoYXQgZGVjb3VwbGluZzogYW4gZXhwaXJlZCBrZXljaGFpblxuICAvLyB0b2tlbiBzaG91bGRuJ3QgYmxvY2sgYSBicmlkZ2UgY29ubmVjdGlvbiB0aGF0IGRvZXNuJ3QgdXNlIGl0LlxuICBpZiAoIWdldEJyaWRnZVRva2VuT3ZlcnJpZGUoKSkge1xuICAgIC8vIDJhLiBDcm9zcy1wcm9jZXNzIGJhY2tvZmYuIElmIE4gcHJpb3IgcHJvY2Vzc2VzIGFscmVhZHkgc2F3IHRoaXMgZXhhY3RcbiAgICAvLyBkZWFkIHRva2VuIChtYXRjaGVkIGJ5IGV4cGlyZXNBdCksIHNraXAgc2lsZW50bHkgXHUyMDE0IG5vIGV2ZW50LCBubyByZWZyZXNoXG4gICAgLy8gYXR0ZW1wdC4gVGhlIGNvdW50IHRocmVzaG9sZCB0b2xlcmF0ZXMgdHJhbnNpZW50IHJlZnJlc2ggZmFpbHVyZXMgKGF1dGhcbiAgICAvLyBzZXJ2ZXIgNXh4LCBsb2NrZmlsZSBlcnJvcnMgcGVyIGF1dGgudHM6MTQzNy8xNDQ0LzE0ODUpOiBlYWNoIHByb2Nlc3NcbiAgICAvLyBpbmRlcGVuZGVudGx5IHJldHJpZXMgdW50aWwgMyBjb25zZWN1dGl2ZSBmYWlsdXJlcyBwcm92ZSB0aGUgdG9rZW4gZGVhZC5cbiAgICAvLyBNaXJyb3JzIHVzZVJlcGxCcmlkZ2UncyBNQVhfQ09OU0VDVVRJVkVfSU5JVF9GQUlMVVJFUyBmb3IgaW4tcHJvY2Vzcy5cbiAgICAvLyBUaGUgZXhwaXJlc0F0IGtleSBpcyBjb250ZW50LWFkZHJlc3NlZDogL2xvZ2luIFx1MjE5MiBuZXcgdG9rZW4gXHUyMTkyIG5ldyBleHBpcmVzQXRcbiAgICAvLyBcdTIxOTIgdGhpcyBzdG9wcyBtYXRjaGluZyB3aXRob3V0IGFueSBleHBsaWNpdCBjbGVhci5cbiAgICBjb25zdCBjZmcgPSBnZXRHbG9iYWxDb25maWcoKVxuICAgIGlmIChcbiAgICAgIGNmZy5icmlkZ2VPYXV0aERlYWRFeHBpcmVzQXQgIT0gbnVsbCAmJlxuICAgICAgKGNmZy5icmlkZ2VPYXV0aERlYWRGYWlsQ291bnQgPz8gMCkgPj0gMyAmJlxuICAgICAgZ2V0Q2xhdWRlQUlPQXV0aFRva2VucygpPy5leHBpcmVzQXQgPT09IGNmZy5icmlkZ2VPYXV0aERlYWRFeHBpcmVzQXRcbiAgICApIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFticmlkZ2U6cmVwbF0gU2tpcHBpbmc6IGNyb3NzLXByb2Nlc3MgYmFja29mZiAoZGVhZCB0b2tlbiBzZWVuICR7Y2ZnLmJyaWRnZU9hdXRoRGVhZEZhaWxDb3VudH0gdGltZXMpYCxcbiAgICAgIClcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgLy8gMmIuIFByb2FjdGl2ZWx5IHJlZnJlc2ggaWYgZXhwaXJlZC4gTWlycm9ycyBicmlkZ2VNYWluLnRzOjIwOTYgXHUyMDE0IHRoZSBSRVBMXG4gICAgLy8gYnJpZGdlIGZpcmVzIGF0IHVzZUVmZmVjdCBtb3VudCBCRUZPUkUgYW55IHYxL21lc3NhZ2VzIGNhbGwsIG1ha2luZyB0aGlzXG4gICAgLy8gdXN1YWxseSB0aGUgZmlyc3QgT0F1dGggcmVxdWVzdCBvZiB0aGUgc2Vzc2lvbi4gV2l0aG91dCB0aGlzLCB+OSUgb2ZcbiAgICAvLyByZWdpc3RyYXRpb25zIGhpdCB0aGUgc2VydmVyIHdpdGggYSA+OGgtZXhwaXJlZCB0b2tlbiBcdTIxOTIgNDAxIFx1MjE5MiB3aXRoT0F1dGhSZXRyeVxuICAgIC8vIHJlY292ZXJzLCBidXQgdGhlIHNlcnZlciBsb2dzIGEgNDAxIHdlIGNhbiBhdm9pZC4gVlBOIGVncmVzcyBJUHMgb2JzZXJ2ZWRcbiAgICAvLyBhdCAzMDoxIDQwMToyMDAgd2hlbiBtYW55IHVucmVsYXRlZCB1c2VycyBjbHVzdGVyIGF0IHRoZSA4aCBUVEwgYm91bmRhcnkuXG4gICAgLy9cbiAgICAvLyBGcmVzaC10b2tlbiBjb3N0OiBvbmUgbWVtb2l6ZWQgcmVhZCArIG9uZSBEYXRlLm5vdygpIGNvbXBhcmlzb24gKH5cdTAwQjVzKS5cbiAgICAvLyBjaGVja0FuZFJlZnJlc2hPQXV0aFRva2VuSWZOZWVkZWQgY2xlYXJzIGl0cyBvd24gY2FjaGUgaW4gZXZlcnkgcGF0aCB0aGF0XG4gICAgLy8gdG91Y2hlcyB0aGUga2V5Y2hhaW4gKHJlZnJlc2ggc3VjY2VzcywgbG9ja2ZpbGUgcmFjZSwgdGhyb3cpLCBzbyBub1xuICAgIC8vIGV4cGxpY2l0IGNsZWFyT0F1dGhUb2tlbkNhY2hlKCkgaGVyZSBcdTIwMTQgdGhhdCB3b3VsZCBmb3JjZSBhIGJsb2NraW5nXG4gICAgLy8ga2V5Y2hhaW4gc3Bhd24gb24gdGhlIDkxJSsgZnJlc2gtdG9rZW4gcGF0aC5cbiAgICBhd2FpdCBjaGVja0FuZFJlZnJlc2hPQXV0aFRva2VuSWZOZWVkZWQoKVxuXG4gICAgLy8gMmMuIFNraXAgaWYgdG9rZW4gaXMgc3RpbGwgZXhwaXJlZCBwb3N0LXJlZnJlc2gtYXR0ZW1wdC4gRW52LXZhciAvIEZEXG4gICAgLy8gdG9rZW5zIChhdXRoLnRzOjg5NC05MTcpIGhhdmUgZXhwaXJlc0F0PW51bGwgXHUyMTkyIG5ldmVyIHRyaXAgdGhpcy4gQnV0IGFcbiAgICAvLyBrZXljaGFpbiB0b2tlbiB3aG9zZSByZWZyZXNoIHRva2VuIGlzIGRlYWQgKHBhc3N3b3JkIGNoYW5nZSwgb3JnIGxlZnQsXG4gICAgLy8gdG9rZW4gR0MnZCkgaGFzIGV4cGlyZXNBdDxub3cgQU5EIHJlZnJlc2gganVzdCBmYWlsZWQgXHUyMDE0IHRoZSBjbGllbnQgd291bGRcbiAgICAvLyBvdGhlcndpc2UgbG9vcCA0MDEgZm9yZXZlcjogd2l0aE9BdXRoUmV0cnkgXHUyMTkyIGhhbmRsZU9BdXRoNDAxRXJyb3IgXHUyMTkyXG4gICAgLy8gcmVmcmVzaCBmYWlscyBhZ2FpbiBcdTIxOTIgcmV0cnkgd2l0aCBzYW1lIHN0YWxlIHRva2VuIFx1MjE5MiA0MDEgYWdhaW4uXG4gICAgLy8gRGF0YWRvZyAyMDI2LTAzLTA4OiBzaW5nbGUgSVBzIGdlbmVyYXRpbmcgMiw4Nzkgc3VjaCA0MDFzL2RheS4gU2tpcCB0aGVcbiAgICAvLyBndWFyYW50ZWVkLWZhaWwgQVBJIGNhbGw7IHVzZVJlcGxCcmlkZ2Ugc3VyZmFjZXMgdGhlIGZhaWx1cmUuXG4gICAgLy9cbiAgICAvLyBJbnRlbnRpb25hbGx5IE5PVCB1c2luZyBpc09BdXRoVG9rZW5FeHBpcmVkIGhlcmUgXHUyMDE0IHRoYXQgaGFzIGEgNS1taW51dGVcbiAgICAvLyBwcm9hY3RpdmUtcmVmcmVzaCBidWZmZXIsIHdoaWNoIGlzIHRoZSByaWdodCBoZXVyaXN0aWMgZm9yIFwic2hvdWxkXG4gICAgLy8gcmVmcmVzaCBzb29uXCIgYnV0IHdyb25nIGZvciBcInByb3ZhYmx5IHVudXNhYmxlXCIuIEEgdG9rZW4gd2l0aCAzbWluIGxlZnRcbiAgICAvLyArIHRyYW5zaWVudCByZWZyZXNoIGVuZHBvaW50IGJsaXAgKDV4eC90aW1lb3V0L3dpZmktcmVjb25uZWN0KSB3b3VsZFxuICAgIC8vIGZhbHNlbHkgdHJpcCBhIGJ1ZmZlcmVkIGNoZWNrOyB0aGUgc3RpbGwtdmFsaWQgdG9rZW4gd291bGQgY29ubmVjdCBmaW5lLlxuICAgIC8vIENoZWNrIGFjdHVhbCBleHBpcnkgaW5zdGVhZDogcGFzdC1leHBpcnkgQU5EIHJlZnJlc2gtZmFpbGVkIFx1MjE5MiB0cnVseSBkZWFkLlxuICAgIGNvbnN0IHRva2VucyA9IGdldENsYXVkZUFJT0F1dGhUb2tlbnMoKVxuICAgIGlmICh0b2tlbnMgJiYgdG9rZW5zLmV4cGlyZXNBdCAhPT0gbnVsbCAmJiB0b2tlbnMuZXhwaXJlc0F0IDw9IERhdGUubm93KCkpIHtcbiAgICAgIGxvZ0JyaWRnZVNraXAoXG4gICAgICAgICdvYXV0aF9leHBpcmVkX3VucmVmcmVzaGFibGUnLFxuICAgICAgICAnW2JyaWRnZTpyZXBsXSBTa2lwcGluZzogT0F1dGggdG9rZW4gZXhwaXJlZCBhbmQgcmVmcmVzaCBmYWlsZWQgKHJlLWxvZ2luIHJlcXVpcmVkKScsXG4gICAgICApXG4gICAgICBvblN0YXRlQ2hhbmdlPy4oJ2ZhaWxlZCcsICcvbG9naW4nKVxuICAgICAgLy8gUGVyc2lzdCBmb3IgdGhlIG5leHQgcHJvY2Vzcy4gSW5jcmVtZW50cyBmYWlsQ291bnQgd2hlbiByZS1kaXNjb3ZlcmluZ1xuICAgICAgLy8gdGhlIHNhbWUgZGVhZCB0b2tlbiAobWF0Y2hlZCBieSBleHBpcmVzQXQpOyByZXNldHMgdG8gMSBmb3IgYSBkaWZmZXJlbnRcbiAgICAgIC8vIHRva2VuLiBPbmNlIGNvdW50IHJlYWNoZXMgMywgc3RlcCAyYSdzIGVhcmx5LXJldHVybiBmaXJlcyBhbmQgdGhpcyBwYXRoXG4gICAgICAvLyBpcyBuZXZlciByZWFjaGVkIGFnYWluIFx1MjAxNCB3cml0ZXMgYXJlIGNhcHBlZCBhdCAzIHBlciBkZWFkIHRva2VuLlxuICAgICAgLy8gTG9jYWwgY29uc3QgY2FwdHVyZXMgdGhlIG5hcnJvd2VkIHR5cGUgKGNsb3N1cmUgbG9zZXMgIT09bnVsbCBuYXJyb3dpbmcpLlxuICAgICAgY29uc3QgZGVhZEV4cGlyZXNBdCA9IHRva2Vucy5leHBpcmVzQXRcbiAgICAgIHNhdmVHbG9iYWxDb25maWcoYyA9PiAoe1xuICAgICAgICAuLi5jLFxuICAgICAgICBicmlkZ2VPYXV0aERlYWRFeHBpcmVzQXQ6IGRlYWRFeHBpcmVzQXQsXG4gICAgICAgIGJyaWRnZU9hdXRoRGVhZEZhaWxDb3VudDpcbiAgICAgICAgICBjLmJyaWRnZU9hdXRoRGVhZEV4cGlyZXNBdCA9PT0gZGVhZEV4cGlyZXNBdFxuICAgICAgICAgICAgPyAoYy5icmlkZ2VPYXV0aERlYWRGYWlsQ291bnQgPz8gMCkgKyAxXG4gICAgICAgICAgICA6IDEsXG4gICAgICB9KSlcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgLy8gNC4gQ29tcHV0ZSBiYXNlVXJsIFx1MjAxNCBuZWVkZWQgYnkgYm90aCB2MSAoZW52LWJhc2VkKSBhbmQgdjIgKGVudi1sZXNzKVxuICAvLyBwYXRocy4gSG9pc3RlZCBhYm92ZSB0aGUgdjIgZ2F0ZSBzbyBib3RoIGNhbiB1c2UgaXQuXG4gIGNvbnN0IGJhc2VVcmwgPSBnZXRCcmlkZ2VCYXNlVXJsKClcblxuICAvLyA1LiBEZXJpdmUgc2Vzc2lvbiB0aXRsZS4gUHJlY2VkZW5jZTogZXhwbGljaXQgaW5pdGlhbE5hbWUgXHUyMTkyIC9yZW5hbWVcbiAgLy8gKHNlc3Npb24gc3RvcmFnZSkgXHUyMTkyIGxhc3QgbWVhbmluZ2Z1bCB1c2VyIG1lc3NhZ2UgXHUyMTkyIGdlbmVyYXRlZCBzbHVnLlxuICAvLyBDb3NtZXRpYyBvbmx5IChjbGF1ZGUuYWkgc2Vzc2lvbiBsaXN0KTsgdGhlIG1vZGVsIG5ldmVyIHNlZXMgaXQuXG4gIC8vIFR3byBmbGFnczogYGhhc0V4cGxpY2l0VGl0bGVgIChpbml0aWFsTmFtZSBvciAvcmVuYW1lIFx1MjAxNCBuZXZlciBhdXRvLVxuICAvLyBvdmVyd3JpdGUpIHZzLiBgaGFzVGl0bGVgIChhbnkgdGl0bGUsIGluY2x1ZGluZyBhdXRvLWRlcml2ZWQgXHUyMDE0IGJsb2Nrc1xuICAvLyB0aGUgY291bnQtMSByZS1kZXJpdmF0aW9uIGJ1dCBub3QgY291bnQtMykuIFRoZSBvblVzZXJNZXNzYWdlIGNhbGxiYWNrXG4gIC8vICh3aXJlZCB0byBib3RoIHYxIGFuZCB2MiBiZWxvdykgZGVyaXZlcyBmcm9tIHRoZSAxc3QgcHJvbXB0IGFuZCBhZ2FpblxuICAvLyBmcm9tIHRoZSAzcmQgc28gbW9iaWxlL3dlYiBzaG93IGEgdGl0bGUgdGhhdCByZWZsZWN0cyBtb3JlIGNvbnRleHQuXG4gIC8vIFRoZSBzbHVnIGZhbGxiYWNrIChlLmcuIFwicmVtb3RlLWNvbnRyb2wtZ3JhY2VmdWwtdW5pY29yblwiKSBtYWtlc1xuICAvLyBhdXRvLXN0YXJ0ZWQgc2Vzc2lvbnMgZGlzdGluZ3Vpc2hhYmxlIGluIHRoZSBjbGF1ZGUuYWkgbGlzdCBiZWZvcmUgdGhlXG4gIC8vIGZpcnN0IHByb21wdC5cbiAgbGV0IHRpdGxlID0gYHJlbW90ZS1jb250cm9sLSR7Z2VuZXJhdGVTaG9ydFdvcmRTbHVnKCl9YFxuICBsZXQgaGFzVGl0bGUgPSBmYWxzZVxuICBsZXQgaGFzRXhwbGljaXRUaXRsZSA9IGZhbHNlXG4gIGlmIChpbml0aWFsTmFtZSkge1xuICAgIHRpdGxlID0gaW5pdGlhbE5hbWVcbiAgICBoYXNUaXRsZSA9IHRydWVcbiAgICBoYXNFeHBsaWNpdFRpdGxlID0gdHJ1ZVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHNlc3Npb25JZCA9IGdldFNlc3Npb25JZCgpXG4gICAgY29uc3QgY3VzdG9tVGl0bGUgPSBzZXNzaW9uSWRcbiAgICAgID8gZ2V0Q3VycmVudFNlc3Npb25UaXRsZShzZXNzaW9uSWQpXG4gICAgICA6IHVuZGVmaW5lZFxuICAgIGlmIChjdXN0b21UaXRsZSkge1xuICAgICAgdGl0bGUgPSBjdXN0b21UaXRsZVxuICAgICAgaGFzVGl0bGUgPSB0cnVlXG4gICAgICBoYXNFeHBsaWNpdFRpdGxlID0gdHJ1ZVxuICAgIH0gZWxzZSBpZiAoaW5pdGlhbE1lc3NhZ2VzICYmIGluaXRpYWxNZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBGaW5kIHRoZSBsYXN0IHVzZXIgbWVzc2FnZSB0aGF0IGhhcyBtZWFuaW5nZnVsIGNvbnRlbnQuIFNraXAgbWV0YVxuICAgICAgLy8gKG51ZGdlcyksIHRvb2wgcmVzdWx0cywgY29tcGFjdCBzdW1tYXJpZXMgKFwiVGhpcyBzZXNzaW9uIGlzIGJlaW5nXG4gICAgICAvLyBjb250aW51ZWRcdTIwMjZcIiksIG5vbi1odW1hbiBvcmlnaW5zICh0YXNrIG5vdGlmaWNhdGlvbnMsIGNoYW5uZWwgcHVzaGVzKSxcbiAgICAgIC8vIGFuZCBzeW50aGV0aWMgaW50ZXJydXB0cyAoW1JlcXVlc3QgaW50ZXJydXB0ZWQgYnkgdXNlcl0pIFx1MjAxNCBub25lIGFyZVxuICAgICAgLy8gaHVtYW4tYXV0aG9yZWQuIFNhbWUgZmlsdGVyIGFzIGV4dHJhY3RUaXRsZVRleHQgKyBpc1N5bnRoZXRpY01lc3NhZ2UuXG4gICAgICBmb3IgKGxldCBpID0gaW5pdGlhbE1lc3NhZ2VzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IG1zZyA9IGluaXRpYWxNZXNzYWdlc1tpXSFcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1zZy50eXBlICE9PSAndXNlcicgfHxcbiAgICAgICAgICBtc2cuaXNNZXRhIHx8XG4gICAgICAgICAgbXNnLnRvb2xVc2VSZXN1bHQgfHxcbiAgICAgICAgICBtc2cuaXNDb21wYWN0U3VtbWFyeSB8fFxuICAgICAgICAgIChtc2cub3JpZ2luICYmIG1zZy5vcmlnaW4ua2luZCAhPT0gJ2h1bWFuJykgfHxcbiAgICAgICAgICBpc1N5bnRoZXRpY01lc3NhZ2UobXNnKVxuICAgICAgICApXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgY29uc3QgcmF3Q29udGVudCA9IGdldENvbnRlbnRUZXh0KG1zZy5tZXNzYWdlLmNvbnRlbnQpXG4gICAgICAgIGlmICghcmF3Q29udGVudCkgY29udGludWVcbiAgICAgICAgY29uc3QgZGVyaXZlZCA9IGRlcml2ZVRpdGxlKHJhd0NvbnRlbnQpXG4gICAgICAgIGlmICghZGVyaXZlZCkgY29udGludWVcbiAgICAgICAgdGl0bGUgPSBkZXJpdmVkXG4gICAgICAgIGhhc1RpdGxlID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFNoYXJlZCBieSBib3RoIHYxIGFuZCB2MiBcdTIwMTQgZmlyZXMgb24gZXZlcnkgdGl0bGUtd29ydGh5IHVzZXIgbWVzc2FnZSB1bnRpbFxuICAvLyBpdCByZXR1cm5zIHRydWUuIEF0IGNvdW50IDE6IGRlcml2ZVRpdGxlIHBsYWNlaG9sZGVyIGltbWVkaWF0ZWx5LCB0aGVuXG4gIC8vIGdlbmVyYXRlU2Vzc2lvblRpdGxlIChIYWlrdSwgc2VudGVuY2UtY2FzZSkgZmlyZS1hbmQtZm9yZ2V0IHVwZ3JhZGUuIEF0XG4gIC8vIGNvdW50IDM6IHJlLWdlbmVyYXRlIG92ZXIgdGhlIGZ1bGwgY29udmVyc2F0aW9uLiBTa2lwcyBlbnRpcmVseSBpZiB0aGVcbiAgLy8gdGl0bGUgaXMgZXhwbGljaXQgKC9yZW1vdGUtY29udHJvbCA8bmFtZT4gb3IgL3JlbmFtZSkgXHUyMDE0IHJlLWNoZWNrc1xuICAvLyBzZXNzaW9uU3RvcmFnZSBhdCBjYWxsIHRpbWUgc28gL3JlbmFtZSBiZXR3ZWVuIG1lc3NhZ2VzIGlzbid0IGNsb2JiZXJlZC5cbiAgLy8gU2tpcHMgY291bnQgMSBpZiBpbml0aWFsTWVzc2FnZXMgYWxyZWFkeSBkZXJpdmVkICh0aGF0IHRpdGxlIGlzIGZyZXNoKTtcbiAgLy8gc3RpbGwgcmVmcmVzaGVzIGF0IGNvdW50IDMuIHYyIHBhc3NlcyBjc2VfKjsgdXBkYXRlQnJpZGdlU2Vzc2lvblRpdGxlXG4gIC8vIHJldGFncyBpbnRlcm5hbGx5LlxuICBsZXQgdXNlck1lc3NhZ2VDb3VudCA9IDBcbiAgbGV0IGxhc3RCcmlkZ2VTZXNzaW9uSWQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBsZXQgZ2VuU2VxID0gMFxuICBjb25zdCBwYXRjaCA9IChcbiAgICBkZXJpdmVkOiBzdHJpbmcsXG4gICAgYnJpZGdlU2Vzc2lvbklkOiBzdHJpbmcsXG4gICAgYXRDb3VudDogbnVtYmVyLFxuICApOiB2b2lkID0+IHtcbiAgICBoYXNUaXRsZSA9IHRydWVcbiAgICB0aXRsZSA9IGRlcml2ZWRcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgW2JyaWRnZTpyZXBsXSBkZXJpdmVkIHRpdGxlIGZyb20gbWVzc2FnZSAke2F0Q291bnR9OiAke2Rlcml2ZWR9YCxcbiAgICApXG4gICAgdm9pZCB1cGRhdGVCcmlkZ2VTZXNzaW9uVGl0bGUoYnJpZGdlU2Vzc2lvbklkLCBkZXJpdmVkLCB7XG4gICAgICBiYXNlVXJsLFxuICAgICAgZ2V0QWNjZXNzVG9rZW46IGdldEJyaWRnZUFjY2Vzc1Rva2VuLFxuICAgIH0pLmNhdGNoKCgpID0+IHt9KVxuICB9XG4gIC8vIEZpcmUtYW5kLWZvcmdldCBIYWlrdSBnZW5lcmF0aW9uIHdpdGggcG9zdC1hd2FpdCBndWFyZHMuIFJlLWNoZWNrcyAvcmVuYW1lXG4gIC8vIChzZXNzaW9uU3RvcmFnZSksIHYxIGVudi1sb3N0IChsYXN0QnJpZGdlU2Vzc2lvbklkKSwgYW5kIHNhbWUtc2Vzc2lvblxuICAvLyBvdXQtb2Ytb3JkZXIgcmVzb2x1dGlvbiAoZ2VuU2VxIFx1MjAxNCBjb3VudC0xJ3MgSGFpa3UgcmVzb2x2aW5nIGFmdGVyIGNvdW50LTNcbiAgLy8gd291bGQgY2xvYmJlciB0aGUgcmljaGVyIHRpdGxlKS4gZ2VuZXJhdGVTZXNzaW9uVGl0bGUgbmV2ZXIgcmVqZWN0cy5cbiAgY29uc3QgZ2VuZXJhdGVBbmRQYXRjaCA9IChpbnB1dDogc3RyaW5nLCBicmlkZ2VTZXNzaW9uSWQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGdlbiA9ICsrZ2VuU2VxXG4gICAgY29uc3QgYXRDb3VudCA9IHVzZXJNZXNzYWdlQ291bnRcbiAgICB2b2lkIGdlbmVyYXRlU2Vzc2lvblRpdGxlKGlucHV0LCBBYm9ydFNpZ25hbC50aW1lb3V0KDE1XzAwMCkpLnRoZW4oXG4gICAgICBnZW5lcmF0ZWQgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZ2VuZXJhdGVkICYmXG4gICAgICAgICAgZ2VuID09PSBnZW5TZXEgJiZcbiAgICAgICAgICBsYXN0QnJpZGdlU2Vzc2lvbklkID09PSBicmlkZ2VTZXNzaW9uSWQgJiZcbiAgICAgICAgICAhZ2V0Q3VycmVudFNlc3Npb25UaXRsZShnZXRTZXNzaW9uSWQoKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGF0Y2goZ2VuZXJhdGVkLCBicmlkZ2VTZXNzaW9uSWQsIGF0Q291bnQpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgKVxuICB9XG4gIGNvbnN0IG9uVXNlck1lc3NhZ2UgPSAodGV4dDogc3RyaW5nLCBicmlkZ2VTZXNzaW9uSWQ6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICAgIGlmIChoYXNFeHBsaWNpdFRpdGxlIHx8IGdldEN1cnJlbnRTZXNzaW9uVGl0bGUoZ2V0U2Vzc2lvbklkKCkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICAvLyB2MSBlbnYtbG9zdCByZS1jcmVhdGVzIHRoZSBzZXNzaW9uIHdpdGggYSBuZXcgSUQuIFJlc2V0IHRoZSBjb3VudCBzb1xuICAgIC8vIHRoZSBuZXcgc2Vzc2lvbiBnZXRzIGl0cyBvd24gY291bnQtMyBkZXJpdmF0aW9uOyBoYXNUaXRsZSBzdGF5cyB0cnVlXG4gICAgLy8gKG5ldyBzZXNzaW9uIHdhcyBjcmVhdGVkIHZpYSBnZXRDdXJyZW50VGl0bGUoKSwgd2hpY2ggcmVhZHMgdGhlIGNvdW50LTFcbiAgICAvLyB0aXRsZSBmcm9tIHRoaXMgY2xvc3VyZSksIHNvIGNvdW50LTEgb2YgdGhlIGZyZXNoIGN5Y2xlIGNvcnJlY3RseSBza2lwcy5cbiAgICBpZiAoXG4gICAgICBsYXN0QnJpZGdlU2Vzc2lvbklkICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIGxhc3RCcmlkZ2VTZXNzaW9uSWQgIT09IGJyaWRnZVNlc3Npb25JZFxuICAgICkge1xuICAgICAgdXNlck1lc3NhZ2VDb3VudCA9IDBcbiAgICB9XG4gICAgbGFzdEJyaWRnZVNlc3Npb25JZCA9IGJyaWRnZVNlc3Npb25JZFxuICAgIHVzZXJNZXNzYWdlQ291bnQrK1xuICAgIGlmICh1c2VyTWVzc2FnZUNvdW50ID09PSAxICYmICFoYXNUaXRsZSkge1xuICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSBkZXJpdmVUaXRsZSh0ZXh0KVxuICAgICAgaWYgKHBsYWNlaG9sZGVyKSBwYXRjaChwbGFjZWhvbGRlciwgYnJpZGdlU2Vzc2lvbklkLCB1c2VyTWVzc2FnZUNvdW50KVxuICAgICAgZ2VuZXJhdGVBbmRQYXRjaCh0ZXh0LCBicmlkZ2VTZXNzaW9uSWQpXG4gICAgfSBlbHNlIGlmICh1c2VyTWVzc2FnZUNvdW50ID09PSAzKSB7XG4gICAgICBjb25zdCBtc2dzID0gZ2V0TWVzc2FnZXM/LigpXG4gICAgICBjb25zdCBpbnB1dCA9IG1zZ3NcbiAgICAgICAgPyBleHRyYWN0Q29udmVyc2F0aW9uVGV4dChnZXRNZXNzYWdlc0FmdGVyQ29tcGFjdEJvdW5kYXJ5KG1zZ3MpKVxuICAgICAgICA6IHRleHRcbiAgICAgIGdlbmVyYXRlQW5kUGF0Y2goaW5wdXQsIGJyaWRnZVNlc3Npb25JZClcbiAgICB9XG4gICAgLy8gQWxzbyByZS1sYXRjaGVzIGlmIHYxIGVudi1sb3N0IHJlc2V0cyB0aGUgdHJhbnNwb3J0J3MgZG9uZSBmbGFnIHBhc3QgMy5cbiAgICByZXR1cm4gdXNlck1lc3NhZ2VDb3VudCA+PSAzXG4gIH1cblxuICBjb25zdCBpbml0aWFsSGlzdG9yeUNhcCA9IGdldEZlYXR1cmVWYWx1ZV9DQUNIRURfV0lUSF9SRUZSRVNIKFxuICAgICd0ZW5ndV9icmlkZ2VfaW5pdGlhbF9oaXN0b3J5X2NhcCcsXG4gICAgMjAwLFxuICAgIDUgKiA2MCAqIDEwMDAsXG4gIClcblxuICAvLyBGZXRjaCBvcmdVVUlEIGJlZm9yZSB0aGUgdjEvdjIgYnJhbmNoIFx1MjAxNCBib3RoIHBhdGhzIG5lZWQgaXQuIHYxIGZvclxuICAvLyBlbnZpcm9ubWVudCByZWdpc3RyYXRpb247IHYyIGZvciBhcmNoaXZlICh3aGljaCBsaXZlcyBhdCB0aGUgY29tcGF0XG4gIC8vIC92MS9zZXNzaW9ucy97aWR9L2FyY2hpdmUsIG5vdCAvdjEvY29kZS9zZXNzaW9ucykuIFdpdGhvdXQgaXQsIHYyXG4gIC8vIGFyY2hpdmUgNDA0cyBhbmQgc2Vzc2lvbnMgc3RheSBhbGl2ZSBpbiBDQ1IgYWZ0ZXIgL2V4aXQuXG4gIGNvbnN0IG9yZ1VVSUQgPSBhd2FpdCBnZXRPcmdhbml6YXRpb25VVUlEKClcbiAgaWYgKCFvcmdVVUlEKSB7XG4gICAgbG9nQnJpZGdlU2tpcCgnbm9fb3JnX3V1aWQnLCAnW2JyaWRnZTpyZXBsXSBTa2lwcGluZzogbm8gb3JnIFVVSUQnKVxuICAgIG9uU3RhdGVDaGFuZ2U/LignZmFpbGVkJywgJy9sb2dpbicpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8vIFx1MjUwMFx1MjUwMCBHcm93dGhCb29rIGdhdGU6IGVudi1sZXNzIGJyaWRnZSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcbiAgLy8gV2hlbiBlbmFibGVkLCBza2lwcyB0aGUgRW52aXJvbm1lbnRzIEFQSSBsYXllciBlbnRpcmVseSAobm8gcmVnaXN0ZXIvXG4gIC8vIHBvbGwvYWNrL2hlYXJ0YmVhdCkgYW5kIGNvbm5lY3RzIGRpcmVjdGx5IHZpYSBQT1NUIC9icmlkZ2UgXHUyMTkyIHdvcmtlcl9qd3QuXG4gIC8vIFNlZSBzZXJ2ZXIgUFIgIzI5MjYwNSAocmVuYW1lZCBpbiAjMjkzMjgwKS4gUkVQTC1vbmx5IFx1MjAxNCBkYWVtb24vcHJpbnQgc3RheVxuICAvLyBvbiBlbnYtYmFzZWQuXG4gIC8vXG4gIC8vIE5BTUlORzogXCJlbnYtbGVzc1wiIGlzIGRpc3RpbmN0IGZyb20gXCJDQ1IgdjJcIiAodGhlIC93b3JrZXIvKiB0cmFuc3BvcnQpLlxuICAvLyBUaGUgZW52LWJhc2VkIHBhdGggYmVsb3cgY2FuIEFMU08gdXNlIENDUiB2MiB2aWEgQ0xBVURFX0NPREVfVVNFX0NDUl9WMi5cbiAgLy8gdGVuZ3VfYnJpZGdlX3JlcGxfdjIgZ2F0ZXMgZW52LWxlc3MgKG5vIHBvbGwgbG9vcCksIG5vdCB0cmFuc3BvcnQgdmVyc2lvbi5cbiAgLy9cbiAgLy8gcGVycGV0dWFsIChhc3Npc3RhbnQtbW9kZSBzZXNzaW9uIGNvbnRpbnVpdHkgdmlhIGJyaWRnZS1wb2ludGVyLmpzb24pIGlzXG4gIC8vIGVudi1jb3VwbGVkIGFuZCBub3QgeWV0IGltcGxlbWVudGVkIGhlcmUgXHUyMDE0IGZhbGwgYmFjayB0byBlbnYtYmFzZWQgd2hlbiBzZXRcbiAgLy8gc28gS0FJUk9TIHVzZXJzIGRvbid0IHNpbGVudGx5IGxvc2UgY3Jvc3MtcmVzdGFydCBjb250aW51aXR5LlxuICBpZiAoaXNFbnZMZXNzQnJpZGdlRW5hYmxlZCgpICYmICFwZXJwZXR1YWwpIHtcbiAgICBjb25zdCB2ZXJzaW9uRXJyb3IgPSBhd2FpdCBjaGVja0Vudkxlc3NCcmlkZ2VNaW5WZXJzaW9uKClcbiAgICBpZiAodmVyc2lvbkVycm9yKSB7XG4gICAgICBsb2dCcmlkZ2VTa2lwKFxuICAgICAgICAndmVyc2lvbl90b29fb2xkJyxcbiAgICAgICAgYFticmlkZ2U6cmVwbF0gU2tpcHBpbmc6ICR7dmVyc2lvbkVycm9yfWAsXG4gICAgICAgIHRydWUsXG4gICAgICApXG4gICAgICBvblN0YXRlQ2hhbmdlPy4oJ2ZhaWxlZCcsICdydW4gYGJsYXVkZSB1cGRhdGVgIHRvIHVwZ3JhZGUnKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgJ1ticmlkZ2U6cmVwbF0gVXNpbmcgZW52LWxlc3MgYnJpZGdlIHBhdGggKHRlbmd1X2JyaWRnZV9yZXBsX3YyKScsXG4gICAgKVxuICAgIGNvbnN0IHsgaW5pdEVudkxlc3NCcmlkZ2VDb3JlIH0gPSBhd2FpdCBpbXBvcnQoJy4vcmVtb3RlQnJpZGdlQ29yZS5qcycpXG4gICAgcmV0dXJuIGluaXRFbnZMZXNzQnJpZGdlQ29yZSh7XG4gICAgICBiYXNlVXJsLFxuICAgICAgb3JnVVVJRCxcbiAgICAgIHRpdGxlLFxuICAgICAgZ2V0QWNjZXNzVG9rZW46IGdldEJyaWRnZUFjY2Vzc1Rva2VuLFxuICAgICAgb25BdXRoNDAxOiBoYW5kbGVPQXV0aDQwMUVycm9yLFxuICAgICAgdG9TREtNZXNzYWdlcyxcbiAgICAgIGluaXRpYWxIaXN0b3J5Q2FwLFxuICAgICAgaW5pdGlhbE1lc3NhZ2VzLFxuICAgICAgLy8gdjIgYWx3YXlzIGNyZWF0ZXMgYSBmcmVzaCBzZXJ2ZXIgc2Vzc2lvbiAobmV3IGNzZV8qIGlkKSwgc29cbiAgICAgIC8vIHByZXZpb3VzbHlGbHVzaGVkVVVJRHMgaXMgbm90IHBhc3NlZCBcdTIwMTQgdGhlcmUncyBubyBjcm9zcy1zZXNzaW9uXG4gICAgICAvLyBVVUlEIGNvbGxpc2lvbiByaXNrLCBhbmQgdGhlIHJlZiBwZXJzaXN0cyBhY3Jvc3MgZW5hYmxlXHUyMTkyZGlzYWJsZVx1MjE5MlxuICAgICAgLy8gcmUtZW5hYmxlIGN5Y2xlcyB3aGljaCB3b3VsZCBjYXVzZSB0aGUgbmV3IHNlc3Npb24gdG8gcmVjZWl2ZSB6ZXJvXG4gICAgICAvLyBoaXN0b3J5IChhbGwgVVVJRHMgYWxyZWFkeSBpbiB0aGUgc2V0IGZyb20gdGhlIHByaW9yIGVuYWJsZSkuXG4gICAgICAvLyB2MSBoYW5kbGVzIHRoaXMgYnkgY2FsbGluZyBwcmV2aW91c2x5Rmx1c2hlZFVVSURzLmNsZWFyKCkgb24gZnJlc2hcbiAgICAgIC8vIHNlc3Npb24gY3JlYXRpb24gKHJlcGxCcmlkZ2UudHM6NzY4KTsgdjIgc2tpcHMgdGhlIHBhcmFtIGVudGlyZWx5LlxuICAgICAgb25JbmJvdW5kTWVzc2FnZSxcbiAgICAgIG9uVXNlck1lc3NhZ2UsXG4gICAgICBvblBlcm1pc3Npb25SZXNwb25zZSxcbiAgICAgIG9uSW50ZXJydXB0LFxuICAgICAgb25TZXRNb2RlbCxcbiAgICAgIG9uU2V0TWF4VGhpbmtpbmdUb2tlbnMsXG4gICAgICBvblNldFBlcm1pc3Npb25Nb2RlLFxuICAgICAgb25TdGF0ZUNoYW5nZSxcbiAgICAgIG91dGJvdW5kT25seSxcbiAgICAgIHRhZ3MsXG4gICAgfSlcbiAgfVxuXG4gIC8vIFx1MjUwMFx1MjUwMCB2MSBwYXRoOiBlbnYtYmFzZWQgKHJlZ2lzdGVyL3BvbGwvYWNrL2hlYXJ0YmVhdCkgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cbiAgY29uc3QgdmVyc2lvbkVycm9yID0gY2hlY2tCcmlkZ2VNaW5WZXJzaW9uKClcbiAgaWYgKHZlcnNpb25FcnJvcikge1xuICAgIGxvZ0JyaWRnZVNraXAoJ3ZlcnNpb25fdG9vX29sZCcsIGBbYnJpZGdlOnJlcGxdIFNraXBwaW5nOiAke3ZlcnNpb25FcnJvcn1gKVxuICAgIG9uU3RhdGVDaGFuZ2U/LignZmFpbGVkJywgJ3J1biBgYmxhdWRlIHVwZGF0ZWAgdG8gdXBncmFkZScpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8vIEdhdGhlciBnaXQgY29udGV4dCBcdTIwMTQgdGhpcyBpcyB0aGUgYm9vdHN0cmFwLXJlYWQgYm91bmRhcnkuXG4gIC8vIEV2ZXJ5dGhpbmcgZnJvbSBoZXJlIGRvd24gaXMgcGFzc2VkIGV4cGxpY2l0bHkgdG8gYnJpZGdlQ29yZS5cbiAgY29uc3QgYnJhbmNoID0gYXdhaXQgZ2V0QnJhbmNoKClcbiAgY29uc3QgZ2l0UmVwb1VybCA9IGF3YWl0IGdldFJlbW90ZVVybCgpXG4gIGNvbnN0IHNlc3Npb25JbmdyZXNzVXJsID1cbiAgICBwcm9jZXNzLmVudi5VU0VSX1RZUEUgPT09ICdhbnQnICYmXG4gICAgcHJvY2Vzcy5lbnYuQ0xBVURFX0JSSURHRV9TRVNTSU9OX0lOR1JFU1NfVVJMXG4gICAgICA/IHByb2Nlc3MuZW52LkNMQVVERV9CUklER0VfU0VTU0lPTl9JTkdSRVNTX1VSTFxuICAgICAgOiBiYXNlVXJsXG5cbiAgLy8gQXNzaXN0YW50LW1vZGUgc2Vzc2lvbnMgYWR2ZXJ0aXNlIGEgZGlzdGluY3Qgd29ya2VyX3R5cGUgc28gdGhlIHdlYiBVSVxuICAvLyBjYW4gZmlsdGVyIHRoZW0gaW50byBhIGRlZGljYXRlZCBwaWNrZXIuIEtBSVJPUyBndWFyZCBrZWVwcyB0aGVcbiAgLy8gYXNzaXN0YW50IG1vZHVsZSBvdXQgb2YgZXh0ZXJuYWwgYnVpbGRzIGVudGlyZWx5LlxuICBsZXQgd29ya2VyVHlwZTogQnJpZGdlV29ya2VyVHlwZSA9ICdjbGF1ZGVfY29kZSdcbiAgaWYgKGZlYXR1cmUoJ0tBSVJPUycpKSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyAqL1xuICAgIGNvbnN0IHsgaXNBc3Npc3RhbnRNb2RlIH0gPVxuICAgICAgcmVxdWlyZSgnLi4vYXNzaXN0YW50L2luZGV4LmpzJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vYXNzaXN0YW50L2luZGV4LmpzJylcbiAgICAvKiBlc2xpbnQtZW5hYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHMgKi9cbiAgICBpZiAoaXNBc3Npc3RhbnRNb2RlKCkpIHtcbiAgICAgIHdvcmtlclR5cGUgPSAnY2xhdWRlX2NvZGVfYXNzaXN0YW50J1xuICAgIH1cbiAgfVxuXG4gIC8vIDYuIERlbGVnYXRlLiBCcmlkZ2VDb3JlSGFuZGxlIGlzIGEgc3RydWN0dXJhbCBzdXBlcnNldCBvZlxuICAvLyBSZXBsQnJpZGdlSGFuZGxlIChhZGRzIHdyaXRlU2RrTWVzc2FnZXMgd2hpY2ggUkVQTCBjYWxsZXJzIGRvbid0IHVzZSksXG4gIC8vIHNvIG5vIGFkYXB0ZXIgbmVlZGVkIFx1MjAxNCBqdXN0IHRoZSBuYXJyb3dlciB0eXBlIG9uIHRoZSB3YXkgb3V0LlxuICByZXR1cm4gaW5pdEJyaWRnZUNvcmUoe1xuICAgIGRpcjogZ2V0T3JpZ2luYWxDd2QoKSxcbiAgICBtYWNoaW5lTmFtZTogaG9zdG5hbWUoKSxcbiAgICBicmFuY2gsXG4gICAgZ2l0UmVwb1VybCxcbiAgICB0aXRsZSxcbiAgICBiYXNlVXJsLFxuICAgIHNlc3Npb25JbmdyZXNzVXJsLFxuICAgIHdvcmtlclR5cGUsXG4gICAgZ2V0QWNjZXNzVG9rZW46IGdldEJyaWRnZUFjY2Vzc1Rva2VuLFxuICAgIGNyZWF0ZVNlc3Npb246IG9wdHMgPT5cbiAgICAgIGNyZWF0ZUJyaWRnZVNlc3Npb24oe1xuICAgICAgICAuLi5vcHRzLFxuICAgICAgICBldmVudHM6IFtdLFxuICAgICAgICBiYXNlVXJsLFxuICAgICAgICBnZXRBY2Nlc3NUb2tlbjogZ2V0QnJpZGdlQWNjZXNzVG9rZW4sXG4gICAgICB9KSxcbiAgICBhcmNoaXZlU2Vzc2lvbjogc2Vzc2lvbklkID0+XG4gICAgICBhcmNoaXZlQnJpZGdlU2Vzc2lvbihzZXNzaW9uSWQsIHtcbiAgICAgICAgYmFzZVVybCxcbiAgICAgICAgZ2V0QWNjZXNzVG9rZW46IGdldEJyaWRnZUFjY2Vzc1Rva2VuLFxuICAgICAgICAvLyBncmFjZWZ1bFNodXRkb3duLnRzOjQwNyByYWNlcyBydW5DbGVhbnVwRnVuY3Rpb25zIGFnYWluc3QgMnMuXG4gICAgICAgIC8vIFRlYXJkb3duIGFsc28gZG9lcyBzdG9wV29yayAocGFyYWxsZWwpICsgZGVyZWdpc3RlciAoc2VxdWVudGlhbCksXG4gICAgICAgIC8vIHNvIGFyY2hpdmUgY2FuJ3QgaGF2ZSB0aGUgZnVsbCBidWRnZXQuIDEuNXMgbWF0Y2hlcyB2MidzXG4gICAgICAgIC8vIHRlYXJkb3duX2FyY2hpdmVfdGltZW91dF9tcyBkZWZhdWx0LlxuICAgICAgICB0aW1lb3V0TXM6IDE1MDAsXG4gICAgICB9KS5jYXRjaCgoZXJyOiB1bmtub3duKSA9PiB7XG4gICAgICAgIC8vIGFyY2hpdmVCcmlkZ2VTZXNzaW9uIGhhcyBubyB0cnkvY2F0Y2ggXHUyMDE0IDV4eC90aW1lb3V0L25ldHdvcmsgdGhyb3dcbiAgICAgICAgLy8gc3RyYWlnaHQgdGhyb3VnaC4gUHJldmlvdXNseSBzd2FsbG93ZWQgc2lsZW50bHksIG1ha2luZyBhcmNoaXZlXG4gICAgICAgIC8vIGZhaWx1cmVzIEJRLWludmlzaWJsZSBhbmQgdW5kaWFnbm9zYWJsZSBmcm9tIGRlYnVnIGxvZ3MuXG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICBgW2JyaWRnZTpyZXBsXSBhcmNoaXZlQnJpZGdlU2Vzc2lvbiB0aHJldzogJHtlcnJvck1lc3NhZ2UoZXJyKX1gLFxuICAgICAgICAgIHsgbGV2ZWw6ICdlcnJvcicgfSxcbiAgICAgICAgKVxuICAgICAgfSksXG4gICAgLy8gZ2V0Q3VycmVudFRpdGxlIGlzIHJlYWQgb24gcmVjb25uZWN0LWFmdGVyLWVudi1sb3N0IHRvIHJlLXRpdGxlIHRoZSBuZXdcbiAgICAvLyBzZXNzaW9uLiAvcmVuYW1lIHdyaXRlcyB0byBzZXNzaW9uIHN0b3JhZ2U7IG9uVXNlck1lc3NhZ2UgbXV0YXRlc1xuICAgIC8vIGB0aXRsZWAgZGlyZWN0bHkgXHUyMDE0IGJvdGggcGF0aHMgYXJlIHBpY2tlZCB1cCBoZXJlLlxuICAgIGdldEN1cnJlbnRUaXRsZTogKCkgPT4gZ2V0Q3VycmVudFNlc3Npb25UaXRsZShnZXRTZXNzaW9uSWQoKSkgPz8gdGl0bGUsXG4gICAgb25Vc2VyTWVzc2FnZSxcbiAgICB0b1NES01lc3NhZ2VzLFxuICAgIG9uQXV0aDQwMTogaGFuZGxlT0F1dGg0MDFFcnJvcixcbiAgICBnZXRQb2xsSW50ZXJ2YWxDb25maWcsXG4gICAgaW5pdGlhbEhpc3RvcnlDYXAsXG4gICAgaW5pdGlhbE1lc3NhZ2VzLFxuICAgIHByZXZpb3VzbHlGbHVzaGVkVVVJRHMsXG4gICAgb25JbmJvdW5kTWVzc2FnZSxcbiAgICBvblBlcm1pc3Npb25SZXNwb25zZSxcbiAgICBvbkludGVycnVwdCxcbiAgICBvblNldE1vZGVsLFxuICAgIG9uU2V0TWF4VGhpbmtpbmdUb2tlbnMsXG4gICAgb25TZXRQZXJtaXNzaW9uTW9kZSxcbiAgICBvblN0YXRlQ2hhbmdlLFxuICAgIHBlcnBldHVhbCxcbiAgfSlcbn1cblxuY29uc3QgVElUTEVfTUFYX0xFTiA9IDUwXG5cbi8qKlxuICogUXVpY2sgcGxhY2Vob2xkZXIgdGl0bGU6IHN0cmlwIGRpc3BsYXkgdGFncywgdGFrZSB0aGUgZmlyc3Qgc2VudGVuY2UsXG4gKiBjb2xsYXBzZSB3aGl0ZXNwYWNlLCB0cnVuY2F0ZSB0byA1MCBjaGFycy4gUmV0dXJucyB1bmRlZmluZWQgaWYgdGhlIHJlc3VsdFxuICogaXMgZW1wdHkgKGUuZy4gbWVzc2FnZSB3YXMgb25seSA8bG9jYWwtY29tbWFuZC1zdGRvdXQ+KS4gUmVwbGFjZWQgYnlcbiAqIGdlbmVyYXRlU2Vzc2lvblRpdGxlIG9uY2UgSGFpa3UgcmVzb2x2ZXMgKH4xLTE1cykuXG4gKi9cbmZ1bmN0aW9uIGRlcml2ZVRpdGxlKHJhdzogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgLy8gU3RyaXAgPGlkZV9vcGVuZWRfZmlsZT4sIDxzZXNzaW9uLXN0YXJ0LWhvb2s+LCBldGMuIFx1MjAxNCB0aGVzZSBhcHBlYXIgaW5cbiAgLy8gdXNlciBtZXNzYWdlcyB3aGVuIElERS9ob29rcyBpbmplY3QgY29udGV4dC4gc3RyaXBEaXNwbGF5VGFnc0FsbG93RW1wdHlcbiAgLy8gcmV0dXJucyAnJyAobm90IHRoZSBvcmlnaW5hbCkgc28gcHVyZS10YWcgbWVzc2FnZXMgYXJlIHNraXBwZWQuXG4gIGNvbnN0IGNsZWFuID0gc3RyaXBEaXNwbGF5VGFnc0FsbG93RW1wdHkocmF3KVxuICAvLyBGaXJzdCBzZW50ZW5jZSBpcyB1c3VhbGx5IHRoZSBpbnRlbnQ7IHJlc3QgaXMgb2Z0ZW4gY29udGV4dC9kZXRhaWwuXG4gIC8vIENhcHR1cmUgZ3JvdXAgaW5zdGVhZCBvZiBsb29rYmVoaW5kIFx1MjAxNCBrZWVwcyBZQVJSIEpJVCBoYXBweS5cbiAgY29uc3QgZmlyc3RTZW50ZW5jZSA9IC9eKC4qP1suIT9dKVxccy8uZXhlYyhjbGVhbik/LlsxXSA/PyBjbGVhblxuICAvLyBDb2xsYXBzZSBuZXdsaW5lcy90YWJzIFx1MjAxNCB0aXRsZXMgYXJlIHNpbmdsZS1saW5lIGluIHRoZSBjbGF1ZGUuYWkgbGlzdC5cbiAgY29uc3QgZmxhdCA9IGZpcnN0U2VudGVuY2UucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKVxuICBpZiAoIWZsYXQpIHJldHVybiB1bmRlZmluZWRcbiAgcmV0dXJuIGZsYXQubGVuZ3RoID4gVElUTEVfTUFYX0xFTlxuICAgID8gZmxhdC5zbGljZSgwLCBUSVRMRV9NQVhfTEVOIC0gMSkgKyAnXFx1MjAyNidcbiAgICA6IGZsYXRcbn1cbiIsICIvLyBiaW9tZS1pZ25vcmUtYWxsIGFzc2lzdC9zb3VyY2Uvb3JnYW5pemVJbXBvcnRzOiBBTlQtT05MWSBpbXBvcnQgbWFya2VycyBtdXN0IG5vdCBiZSByZW9yZGVyZWRcbmltcG9ydCB7IHJhbmRvbVVVSUQgfSBmcm9tICdjcnlwdG8nXG5pbXBvcnQge1xuICBjcmVhdGVCcmlkZ2VBcGlDbGllbnQsXG4gIEJyaWRnZUZhdGFsRXJyb3IsXG4gIGlzRXhwaXJlZEVycm9yVHlwZSxcbiAgaXNTdXBwcmVzc2libGU0MDMsXG59IGZyb20gJy4vYnJpZGdlQXBpLmpzJ1xuaW1wb3J0IHR5cGUgeyBCcmlkZ2VDb25maWcsIEJyaWRnZUFwaUNsaWVudCB9IGZyb20gJy4vdHlwZXMuanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuLi91dGlscy9kZWJ1Zy5qcydcbmltcG9ydCB7IGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkgfSBmcm9tICcuLi91dGlscy9kaWFnTG9ncy5qcydcbmltcG9ydCB7XG4gIHR5cGUgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgbG9nRXZlbnQsXG59IGZyb20gJy4uL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB7IHJlZ2lzdGVyQ2xlYW51cCB9IGZyb20gJy4uL3V0aWxzL2NsZWFudXBSZWdpc3RyeS5qcydcbmltcG9ydCB7XG4gIGhhbmRsZUluZ3Jlc3NNZXNzYWdlLFxuICBoYW5kbGVTZXJ2ZXJDb250cm9sUmVxdWVzdCxcbiAgbWFrZVJlc3VsdE1lc3NhZ2UsXG4gIGlzRWxpZ2libGVCcmlkZ2VNZXNzYWdlLFxuICBleHRyYWN0VGl0bGVUZXh0LFxuICBCb3VuZGVkVVVJRFNldCxcbn0gZnJvbSAnLi9icmlkZ2VNZXNzYWdpbmcuanMnXG5pbXBvcnQge1xuICBkZWNvZGVXb3JrU2VjcmV0LFxuICBidWlsZFNka1VybCxcbiAgYnVpbGRDQ1J2MlNka1VybCxcbiAgc2FtZVNlc3Npb25JZCxcbn0gZnJvbSAnLi93b3JrU2VjcmV0LmpzJ1xuaW1wb3J0IHsgdG9Db21wYXRTZXNzaW9uSWQsIHRvSW5mcmFTZXNzaW9uSWQgfSBmcm9tICcuL3Nlc3Npb25JZENvbXBhdC5qcydcbmltcG9ydCB7IHVwZGF0ZVNlc3Npb25CcmlkZ2VJZCB9IGZyb20gJy4uL3V0aWxzL2NvbmN1cnJlbnRTZXNzaW9ucy5qcydcbmltcG9ydCB7IGdldFRydXN0ZWREZXZpY2VUb2tlbiB9IGZyb20gJy4vdHJ1c3RlZERldmljZS5qcydcbmltcG9ydCB7IEh5YnJpZFRyYW5zcG9ydCB9IGZyb20gJy4uL2NsaS90cmFuc3BvcnRzL0h5YnJpZFRyYW5zcG9ydC5qcydcbmltcG9ydCB7XG4gIHR5cGUgUmVwbEJyaWRnZVRyYW5zcG9ydCxcbiAgY3JlYXRlVjFSZXBsVHJhbnNwb3J0LFxuICBjcmVhdGVWMlJlcGxUcmFuc3BvcnQsXG59IGZyb20gJy4vcmVwbEJyaWRnZVRyYW5zcG9ydC5qcydcbmltcG9ydCB7IHVwZGF0ZVNlc3Npb25JbmdyZXNzQXV0aFRva2VuIH0gZnJvbSAnLi4vdXRpbHMvc2Vzc2lvbkluZ3Jlc3NBdXRoLmpzJ1xuaW1wb3J0IHsgaXNFbnZUcnV0aHksIGlzSW5Qcm90ZWN0ZWROYW1lc3BhY2UgfSBmcm9tICcuLi91dGlscy9lbnZVdGlscy5qcydcbmltcG9ydCB7IHZhbGlkYXRlQnJpZGdlSWQgfSBmcm9tICcuL2JyaWRnZUFwaS5qcydcbmltcG9ydCB7XG4gIGRlc2NyaWJlQXhpb3NFcnJvcixcbiAgZXh0cmFjdEh0dHBTdGF0dXMsXG4gIGxvZ0JyaWRnZVNraXAsXG59IGZyb20gJy4vZGVidWdVdGlscy5qcydcbmltcG9ydCB0eXBlIHsgTWVzc2FnZSB9IGZyb20gJy4uL3R5cGVzL21lc3NhZ2UuanMnXG5pbXBvcnQgdHlwZSB7IFNES01lc3NhZ2UgfSBmcm9tICcuLi9lbnRyeXBvaW50cy9hZ2VudFNka1R5cGVzLmpzJ1xuaW1wb3J0IHR5cGUgeyBQZXJtaXNzaW9uTW9kZSB9IGZyb20gJy4uL3V0aWxzL3Blcm1pc3Npb25zL1Blcm1pc3Npb25Nb2RlLmpzJ1xuaW1wb3J0IHR5cGUge1xuICBTREtDb250cm9sUmVxdWVzdCxcbiAgU0RLQ29udHJvbFJlc3BvbnNlLFxufSBmcm9tICcuLi9lbnRyeXBvaW50cy9zZGsvY29udHJvbFR5cGVzLmpzJ1xuaW1wb3J0IHsgY3JlYXRlQ2FwYWNpdHlXYWtlLCB0eXBlIENhcGFjaXR5U2lnbmFsIH0gZnJvbSAnLi9jYXBhY2l0eVdha2UuanMnXG5pbXBvcnQgeyBGbHVzaEdhdGUgfSBmcm9tICcuL2ZsdXNoR2F0ZS5qcydcbmltcG9ydCB7XG4gIERFRkFVTFRfUE9MTF9DT05GSUcsXG4gIHR5cGUgUG9sbEludGVydmFsQ29uZmlnLFxufSBmcm9tICcuL3BvbGxDb25maWdEZWZhdWx0cy5qcydcbmltcG9ydCB7IGVycm9yTWVzc2FnZSB9IGZyb20gJy4uL3V0aWxzL2Vycm9ycy5qcydcbmltcG9ydCB7IHNsZWVwIH0gZnJvbSAnLi4vdXRpbHMvc2xlZXAuanMnXG5pbXBvcnQge1xuICB3cmFwQXBpRm9yRmF1bHRJbmplY3Rpb24sXG4gIHJlZ2lzdGVyQnJpZGdlRGVidWdIYW5kbGUsXG4gIGNsZWFyQnJpZGdlRGVidWdIYW5kbGUsXG4gIGluamVjdEJyaWRnZUZhdWx0LFxufSBmcm9tICcuL2JyaWRnZURlYnVnLmpzJ1xuXG5leHBvcnQgdHlwZSBSZXBsQnJpZGdlSGFuZGxlID0ge1xuICBicmlkZ2VTZXNzaW9uSWQ6IHN0cmluZ1xuICBlbnZpcm9ubWVudElkOiBzdHJpbmdcbiAgc2Vzc2lvbkluZ3Jlc3NVcmw6IHN0cmluZ1xuICB3cml0ZU1lc3NhZ2VzKG1lc3NhZ2VzOiBNZXNzYWdlW10pOiB2b2lkXG4gIHdyaXRlU2RrTWVzc2FnZXMobWVzc2FnZXM6IFNES01lc3NhZ2VbXSk6IHZvaWRcbiAgc2VuZENvbnRyb2xSZXF1ZXN0KHJlcXVlc3Q6IFNES0NvbnRyb2xSZXF1ZXN0KTogdm9pZFxuICBzZW5kQ29udHJvbFJlc3BvbnNlKHJlc3BvbnNlOiBTREtDb250cm9sUmVzcG9uc2UpOiB2b2lkXG4gIHNlbmRDb250cm9sQ2FuY2VsUmVxdWVzdChyZXF1ZXN0SWQ6IHN0cmluZyk6IHZvaWRcbiAgc2VuZFJlc3VsdCgpOiB2b2lkXG4gIHRlYXJkb3duKCk6IFByb21pc2U8dm9pZD5cbn1cblxuZXhwb3J0IHR5cGUgQnJpZGdlU3RhdGUgPSAncmVhZHknIHwgJ2Nvbm5lY3RlZCcgfCAncmVjb25uZWN0aW5nJyB8ICdmYWlsZWQnXG5cbi8qKlxuICogRXhwbGljaXQtcGFyYW0gaW5wdXQgdG8gaW5pdEJyaWRnZUNvcmUuIEV2ZXJ5dGhpbmcgaW5pdFJlcGxCcmlkZ2UgcmVhZHNcbiAqIGZyb20gYm9vdHN0cmFwIHN0YXRlIChjd2QsIHNlc3Npb24gSUQsIGdpdCwgT0F1dGgpIGJlY29tZXMgYSBmaWVsZCBoZXJlLlxuICogQSBkYWVtb24gY2FsbGVyIChBZ2VudCBTREssIFBSIDQpIHRoYXQgbmV2ZXIgcnVucyBtYWluLnRzeCBmaWxscyB0aGVzZVxuICogaW4gaXRzZWxmLlxuICovXG5leHBvcnQgdHlwZSBCcmlkZ2VDb3JlUGFyYW1zID0ge1xuICBkaXI6IHN0cmluZ1xuICBtYWNoaW5lTmFtZTogc3RyaW5nXG4gIGJyYW5jaDogc3RyaW5nXG4gIGdpdFJlcG9Vcmw6IHN0cmluZyB8IG51bGxcbiAgdGl0bGU6IHN0cmluZ1xuICBiYXNlVXJsOiBzdHJpbmdcbiAgc2Vzc2lvbkluZ3Jlc3NVcmw6IHN0cmluZ1xuICAvKipcbiAgICogT3BhcXVlIHN0cmluZyBzZW50IGFzIG1ldGFkYXRhLndvcmtlcl90eXBlLiBVc2UgQnJpZGdlV29ya2VyVHlwZSBmb3JcbiAgICogdGhlIHR3byBDTEktb3JpZ2luYXRlZCB2YWx1ZXM7IGRhZW1vbiBjYWxsZXJzIG1heSBzZW5kIGFueSBzdHJpbmcgdGhlXG4gICAqIGJhY2tlbmQgcmVjb2duaXplcyAoaXQncyBqdXN0IGEgZmlsdGVyIGtleSBvbiB0aGUgd2ViIHNpZGUpLlxuICAgKi9cbiAgd29ya2VyVHlwZTogc3RyaW5nXG4gIGdldEFjY2Vzc1Rva2VuOiAoKSA9PiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgLyoqXG4gICAqIFBPU1QgL3YxL3Nlc3Npb25zLiBJbmplY3RlZCBiZWNhdXNlIGBjcmVhdGVTZXNzaW9uLnRzYCBsYXp5LWxvYWRzXG4gICAqIGBhdXRoLnRzYC9gbW9kZWwudHNgL2BvYXV0aC9jbGllbnQudHNgIGFuZCBgYnVuIC0tb3V0ZmlsZWAgaW5saW5lc1xuICAgKiBkeW5hbWljIGltcG9ydHMgXHUyMDE0IHRoZSBsYXp5LWxvYWQgZG9lc24ndCBoZWxwLCB0aGUgd2hvbGUgUkVQTCB0cmVlIGVuZHNcbiAgICogdXAgaW4gdGhlIEFnZW50IFNESyBidW5kbGUuXG4gICAqXG4gICAqIFJFUEwgd3JhcHBlciBwYXNzZXMgYGNyZWF0ZUJyaWRnZVNlc3Npb25gIGZyb20gYGNyZWF0ZVNlc3Npb24udHNgLlxuICAgKiBEYWVtb24gd3JhcHBlciBwYXNzZXMgYGNyZWF0ZUJyaWRnZVNlc3Npb25MZWFuYCBmcm9tIGBzZXNzaW9uQXBpLnRzYFxuICAgKiAoSFRUUC1vbmx5LCBvcmdVVUlEK21vZGVsIHN1cHBsaWVkIGJ5IHRoZSBkYWVtb24gY2FsbGVyKS5cbiAgICpcbiAgICogUmVjZWl2ZXMgYGdpdFJlcG9VcmxgK2BicmFuY2hgIHNvIHRoZSBSRVBMIHdyYXBwZXIgY2FuIGJ1aWxkIHRoZSBnaXRcbiAgICogc291cmNlL291dGNvbWUgZm9yIGNsYXVkZS5haSdzIHNlc3Npb24gY2FyZC4gRGFlbW9uIGlnbm9yZXMgdGhlbS5cbiAgICovXG4gIGNyZWF0ZVNlc3Npb246IChvcHRzOiB7XG4gICAgZW52aXJvbm1lbnRJZDogc3RyaW5nXG4gICAgdGl0bGU6IHN0cmluZ1xuICAgIGdpdFJlcG9Vcmw6IHN0cmluZyB8IG51bGxcbiAgICBicmFuY2g6IHN0cmluZ1xuICAgIHNpZ25hbDogQWJvcnRTaWduYWxcbiAgfSkgPT4gUHJvbWlzZTxzdHJpbmcgfCBudWxsPlxuICAvKipcbiAgICogUE9TVCAvdjEvc2Vzc2lvbnMve2lkfS9hcmNoaXZlLiBTYW1lIGluamVjdGlvbiByYXRpb25hbGUuIEJlc3QtZWZmb3J0O1xuICAgKiB0aGUgY2FsbGJhY2sgTVVTVCBOT1QgdGhyb3cuXG4gICAqL1xuICBhcmNoaXZlU2Vzc2lvbjogKHNlc3Npb25JZDogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+XG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHJlY29ubmVjdC1hZnRlci1lbnYtbG9zdCB0byByZWZyZXNoIHRoZSB0aXRsZS4gUkVQTCB3cmFwcGVyXG4gICAqIHJlYWRzIHNlc3Npb24gc3RvcmFnZSAocGlja3MgdXAgL3JlbmFtZSk7IGRhZW1vbiByZXR1cm5zIHRoZSBzdGF0aWNcbiAgICogdGl0bGUuIERlZmF1bHRzIHRvICgpID0+IHRpdGxlLlxuICAgKi9cbiAgZ2V0Q3VycmVudFRpdGxlPzogKCkgPT4gc3RyaW5nXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBpbnRlcm5hbCBNZXNzYWdlW10gXHUyMTkyIFNES01lc3NhZ2VbXSBmb3Igd3JpdGVNZXNzYWdlcygpIGFuZCB0aGVcbiAgICogaW5pdGlhbC1mbHVzaC9kcmFpbiBwYXRocy4gUkVQTCB3cmFwcGVyIHBhc3NlcyB0aGUgcmVhbCB0b1NES01lc3NhZ2VzXG4gICAqIGZyb20gdXRpbHMvbWVzc2FnZXMvbWFwcGVycy50cy4gRGFlbW9uIGNhbGxlcnMgdGhhdCBvbmx5IHVzZVxuICAgKiB3cml0ZVNka01lc3NhZ2VzKCkgYW5kIHBhc3Mgbm8gaW5pdGlhbE1lc3NhZ2VzIGNhbiBvbWl0IHRoaXMgXHUyMDE0IHRob3NlXG4gICAqIGNvZGUgcGF0aHMgYXJlIHVucmVhY2hhYmxlLlxuICAgKlxuICAgKiBJbmplY3RlZCByYXRoZXIgdGhhbiBpbXBvcnRlZCBiZWNhdXNlIG1hcHBlcnMudHMgdHJhbnNpdGl2ZWx5IHB1bGxzIGluXG4gICAqIHNyYy9jb21tYW5kcy50cyB2aWEgbWVzc2FnZXMudHMgXHUyMTkyIGFwaS50cyBcdTIxOTIgcHJvbXB0cy50cywgZHJhZ2dpbmcgdGhlXG4gICAqIGVudGlyZSBjb21tYW5kIHJlZ2lzdHJ5ICsgUmVhY3QgdHJlZSBpbnRvIHRoZSBBZ2VudCBTREsgYnVuZGxlLlxuICAgKi9cbiAgdG9TREtNZXNzYWdlcz86IChtZXNzYWdlczogTWVzc2FnZVtdKSA9PiBTREtNZXNzYWdlW11cbiAgLyoqXG4gICAqIE9BdXRoIDQwMSByZWZyZXNoIGhhbmRsZXIgcGFzc2VkIHRvIGNyZWF0ZUJyaWRnZUFwaUNsaWVudC4gUkVQTCB3cmFwcGVyXG4gICAqIHBhc3NlcyBoYW5kbGVPQXV0aDQwMUVycm9yOyBkYWVtb24gcGFzc2VzIGl0cyBBdXRoTWFuYWdlcidzIGhhbmRsZXIuXG4gICAqIEluamVjdGVkIGJlY2F1c2UgdXRpbHMvYXV0aC50cyB0cmFuc2l0aXZlbHkgcHVsbHMgaW4gdGhlIGNvbW1hbmRcbiAgICogcmVnaXN0cnkgdmlhIGNvbmZpZy50cyBcdTIxOTIgZmlsZS50cyBcdTIxOTIgcGVybWlzc2lvbnMvZmlsZXN5c3RlbS50cyBcdTIxOTJcbiAgICogc2Vzc2lvblN0b3JhZ2UudHMgXHUyMTkyIGNvbW1hbmRzLnRzLlxuICAgKi9cbiAgb25BdXRoNDAxPzogKHN0YWxlQWNjZXNzVG9rZW46IHN0cmluZykgPT4gUHJvbWlzZTxib29sZWFuPlxuICAvKipcbiAgICogUG9sbCBpbnRlcnZhbCBjb25maWcgZ2V0dGVyIGZvciB0aGUgd29yay1wb2xsIGhlYXJ0YmVhdCBsb29wLiBSRVBMXG4gICAqIHdyYXBwZXIgcGFzc2VzIHRoZSBHcm93dGhCb29rLWJhY2tlZCBnZXRQb2xsSW50ZXJ2YWxDb25maWcgKGFsbG93cyBvcHNcbiAgICogdG8gbGl2ZS10dW5lIHBvbGwgcmF0ZXMgZmxlZXQtd2lkZSkuIERhZW1vbiBwYXNzZXMgYSBzdGF0aWMgY29uZmlnXG4gICAqIHdpdGggYSA2MHMgaGVhcnRiZWF0ICg1XHUwMEQ3IGhlYWRyb29tIHVuZGVyIHRoZSAzMDBzIHdvcmstbGVhc2UgVFRMKS5cbiAgICogSW5qZWN0ZWQgYmVjYXVzZSBncm93dGhib29rLnRzIHRyYW5zaXRpdmVseSBwdWxscyBpbiB0aGUgY29tbWFuZFxuICAgKiByZWdpc3RyeSB2aWEgdGhlIHNhbWUgY29uZmlnLnRzIGNoYWluLlxuICAgKi9cbiAgZ2V0UG9sbEludGVydmFsQ29uZmlnPzogKCkgPT4gUG9sbEludGVydmFsQ29uZmlnXG4gIC8qKlxuICAgKiBNYXggaW5pdGlhbCBtZXNzYWdlcyB0byByZXBsYXkgb24gY29ubmVjdC4gUkVQTCB3cmFwcGVyIHJlYWRzIGZyb20gdGhlXG4gICAqIHRlbmd1X2JyaWRnZV9pbml0aWFsX2hpc3RvcnlfY2FwIEdyb3d0aEJvb2sgZmxhZy4gRGFlbW9uIHBhc3NlcyBub1xuICAgKiBpbml0aWFsTWVzc2FnZXMgc28gdGhpcyBpcyBuZXZlciByZWFkLiBEZWZhdWx0IDIwMCBtYXRjaGVzIHRoZSBmbGFnXG4gICAqIGRlZmF1bHQuXG4gICAqL1xuICBpbml0aWFsSGlzdG9yeUNhcD86IG51bWJlclxuICAvLyBTYW1lIFJFUEwtZmx1c2ggbWFjaGluZXJ5IGFzIEluaXRCcmlkZ2VPcHRpb25zIFx1MjAxNCBkYWVtb24gb21pdHMgdGhlc2UuXG4gIGluaXRpYWxNZXNzYWdlcz86IE1lc3NhZ2VbXVxuICBwcmV2aW91c2x5Rmx1c2hlZFVVSURzPzogU2V0PHN0cmluZz5cbiAgb25JbmJvdW5kTWVzc2FnZT86IChtc2c6IFNES01lc3NhZ2UpID0+IHZvaWRcbiAgb25QZXJtaXNzaW9uUmVzcG9uc2U/OiAocmVzcG9uc2U6IFNES0NvbnRyb2xSZXNwb25zZSkgPT4gdm9pZFxuICBvbkludGVycnVwdD86ICgpID0+IHZvaWRcbiAgb25TZXRNb2RlbD86IChtb2RlbDogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB2b2lkXG4gIG9uU2V0TWF4VGhpbmtpbmdUb2tlbnM/OiAobWF4VG9rZW5zOiBudW1iZXIgfCBudWxsKSA9PiB2b2lkXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcG9saWN5IHZlcmRpY3Qgc28gdGhpcyBtb2R1bGUgY2FuIGVtaXQgYW4gZXJyb3IgY29udHJvbF9yZXNwb25zZVxuICAgKiB3aXRob3V0IGltcG9ydGluZyB0aGUgcG9saWN5IGNoZWNrcyBpdHNlbGYgKGJvb3RzdHJhcC1pc29sYXRpb24gY29uc3RyYWludCkuXG4gICAqIFRoZSBjYWxsYmFjayBtdXN0IGd1YXJkIGBhdXRvYCAoaXNBdXRvTW9kZUdhdGVFbmFibGVkKSBhbmRcbiAgICogYGJ5cGFzc1Blcm1pc3Npb25zYCAoaXNCeXBhc3NQZXJtaXNzaW9uc01vZGVEaXNhYmxlZCBBTkRcbiAgICogaXNCeXBhc3NQZXJtaXNzaW9uc01vZGVBdmFpbGFibGUpIEJFRk9SRSBjYWxsaW5nIHRyYW5zaXRpb25QZXJtaXNzaW9uTW9kZSBcdTIwMTRcbiAgICogdGhhdCBmdW5jdGlvbidzIGludGVybmFsIGF1dG8tZ2F0ZSBjaGVjayBpcyBhIGRlZmVuc2l2ZSB0aHJvdywgbm90IGFcbiAgICogZ3JhY2VmdWwgZ3VhcmQsIGFuZCBpdHMgc2lkZS1lZmZlY3Qgb3JkZXIgaXMgc2V0QXV0b01vZGVBY3RpdmUodHJ1ZSkgdGhlblxuICAgKiB0aHJvdywgd2hpY2ggY29ycnVwdHMgdGhlIDMtd2F5IGludmFyaWFudCBkb2N1bWVudGVkIGluIHNyYy9DTEFVREUubWQgaWZcbiAgICogdGhlIGNhbGxiYWNrIGxldHMgdGhlIHRocm93IGVzY2FwZSBoZXJlLlxuICAgKi9cbiAgb25TZXRQZXJtaXNzaW9uTW9kZT86IChcbiAgICBtb2RlOiBQZXJtaXNzaW9uTW9kZSxcbiAgKSA9PiB7IG9rOiB0cnVlIH0gfCB7IG9rOiBmYWxzZTsgZXJyb3I6IHN0cmluZyB9XG4gIG9uU3RhdGVDaGFuZ2U/OiAoc3RhdGU6IEJyaWRnZVN0YXRlLCBkZXRhaWw/OiBzdHJpbmcpID0+IHZvaWRcbiAgLyoqXG4gICAqIEZpcmVzIG9uIGVhY2ggcmVhbCB1c2VyIG1lc3NhZ2UgdG8gZmxvdyB0aHJvdWdoIHdyaXRlTWVzc2FnZXMoKSB1bnRpbFxuICAgKiB0aGUgY2FsbGJhY2sgcmV0dXJucyB0cnVlIChkb25lKS4gTWlycm9ycyByZW1vdGVCcmlkZ2VDb3JlLnRzJ3NcbiAgICogb25Vc2VyTWVzc2FnZSBzbyB0aGUgUkVQTCBicmlkZ2UgY2FuIGRlcml2ZSBhIHNlc3Npb24gdGl0bGUgZnJvbSBlYXJseVxuICAgKiBwcm9tcHRzIHdoZW4gbm9uZSB3YXMgc2V0IGF0IGluaXQgdGltZSAoZS5nLiB1c2VyIHJ1bnMgL3JlbW90ZS1jb250cm9sXG4gICAqIG9uIGFuIGVtcHR5IGNvbnZlcnNhdGlvbiwgdGhlbiB0eXBlcykuIFRvb2wtcmVzdWx0IHdyYXBwZXJzLCBtZXRhXG4gICAqIG1lc3NhZ2VzLCBhbmQgZGlzcGxheS10YWctb25seSBtZXNzYWdlcyBhcmUgc2tpcHBlZC4gUmVjZWl2ZXNcbiAgICogY3VycmVudFNlc3Npb25JZCBzbyB0aGUgd3JhcHBlciBjYW4gUEFUQ0ggdGhlIHRpdGxlIHdpdGhvdXQgYSBjbG9zdXJlXG4gICAqIGRhbmNlIHRvIHJlYWNoIHRoZSBub3QteWV0LXJldHVybmVkIGhhbmRsZS4gVGhlIGNhbGxlciBvd25zIHRoZVxuICAgKiBkZXJpdmUtYXQtY291bnQtMS1hbmQtMyBwb2xpY3k7IHRoZSB0cmFuc3BvcnQganVzdCBrZWVwcyBjYWxsaW5nIHVudGlsXG4gICAqIHRvbGQgdG8gc3RvcC4gTm90IGZpcmVkIGZvciB0aGUgd3JpdGVTZGtNZXNzYWdlcyBkYWVtb24gcGF0aCAoZGFlbW9uXG4gICAqIHNldHMgaXRzIG93biB0aXRsZSBhdCBpbml0KS4gRGlzdGluY3QgZnJvbSBTZXNzaW9uU3Bhd25PcHRzJ3NcbiAgICogb25GaXJzdFVzZXJNZXNzYWdlIChzcGF3bi1icmlkZ2UsIFBSICMyMTI1MCksIHdoaWNoIHN0YXlzIGZpcmUtb25jZS5cbiAgICovXG4gIG9uVXNlck1lc3NhZ2U/OiAodGV4dDogc3RyaW5nLCBzZXNzaW9uSWQ6IHN0cmluZykgPT4gYm9vbGVhblxuICAvKiogU2VlIEluaXRCcmlkZ2VPcHRpb25zLnBlcnBldHVhbC4gKi9cbiAgcGVycGV0dWFsPzogYm9vbGVhblxuICAvKipcbiAgICogU2VlZHMgbGFzdFRyYW5zcG9ydFNlcXVlbmNlTnVtIFx1MjAxNCB0aGUgU1NFIGV2ZW50LXN0cmVhbSBoaWdoLXdhdGVyIG1hcmtcbiAgICogdGhhdCdzIGNhcnJpZWQgYWNyb3NzIHRyYW5zcG9ydCBzd2FwcyB3aXRoaW4gb25lIHByb2Nlc3MuIERhZW1vbiBjYWxsZXJzXG4gICAqIHBhc3MgdGhlIHZhbHVlIHRoZXkgcGVyc2lzdGVkIGF0IHNodXRkb3duIHNvIHRoZSBGSVJTVCBTU0UgY29ubmVjdCBvZiBhXG4gICAqIGZyZXNoIHByb2Nlc3Mgc2VuZHMgZnJvbV9zZXF1ZW5jZV9udW0gYW5kIHRoZSBzZXJ2ZXIgZG9lc24ndCByZXBsYXkgZnVsbFxuICAgKiBoaXN0b3J5LiBSRVBMIGNhbGxlcnMgb21pdCAoZnJlc2ggc2Vzc2lvbiBlYWNoIHJ1biBcdTIxOTIgMCBpcyBjb3JyZWN0KS5cbiAgICovXG4gIGluaXRpYWxTU0VTZXF1ZW5jZU51bT86IG51bWJlclxufVxuXG4vKipcbiAqIFN1cGVyc2V0IG9mIFJlcGxCcmlkZ2VIYW5kbGUuIEFkZHMgZ2V0U1NFU2VxdWVuY2VOdW0gZm9yIGRhZW1vbiBjYWxsZXJzXG4gKiB0aGF0IHBlcnNpc3QgdGhlIFNTRSBzZXEtbnVtIGFjcm9zcyBwcm9jZXNzIHJlc3RhcnRzIGFuZCBwYXNzIGl0IGJhY2sgYXNcbiAqIGluaXRpYWxTU0VTZXF1ZW5jZU51bSBvbiB0aGUgbmV4dCBzdGFydC5cbiAqL1xuZXhwb3J0IHR5cGUgQnJpZGdlQ29yZUhhbmRsZSA9IFJlcGxCcmlkZ2VIYW5kbGUgJiB7XG4gIC8qKlxuICAgKiBDdXJyZW50IFNTRSBzZXF1ZW5jZS1udW1iZXIgaGlnaC13YXRlciBtYXJrLiBVcGRhdGVzIGFzIHRyYW5zcG9ydHNcbiAgICogc3dhcC4gRGFlbW9uIGNhbGxlcnMgcGVyc2lzdCB0aGlzIG9uIHNodXRkb3duIGFuZCBwYXNzIGl0IGJhY2sgYXNcbiAgICogaW5pdGlhbFNTRVNlcXVlbmNlTnVtIG9uIG5leHQgc3RhcnQuXG4gICAqL1xuICBnZXRTU0VTZXF1ZW5jZU51bSgpOiBudW1iZXJcbn1cblxuLyoqXG4gKiBQb2xsIGVycm9yIHJlY292ZXJ5IGNvbnN0YW50cy4gV2hlbiB0aGUgd29yayBwb2xsIHN0YXJ0cyBmYWlsaW5nIChlLmcuXG4gKiBzZXJ2ZXIgNTAwcyksIHdlIHVzZSBleHBvbmVudGlhbCBiYWNrb2ZmIGFuZCBnaXZlIHVwIGFmdGVyIHRoaXMgdGltZW91dC5cbiAqIFRoaXMgaXMgZGVsaWJlcmF0ZWx5IGxvbmcgXHUyMDE0IHRoZSBzZXJ2ZXIgaXMgdGhlIGF1dGhvcml0eSBvbiB3aGVuIGEgc2Vzc2lvblxuICogaXMgdHJ1bHkgZGVhZC4gQXMgbG9uZyBhcyB0aGUgc2VydmVyIGFjY2VwdHMgb3VyIHBvbGwsIHdlIGtlZXAgd2FpdGluZ1xuICogZm9yIGl0IHRvIHJlLWRpc3BhdGNoIHRoZSB3b3JrIGl0ZW0uXG4gKi9cbmNvbnN0IFBPTExfRVJST1JfSU5JVElBTF9ERUxBWV9NUyA9IDJfMDAwXG5jb25zdCBQT0xMX0VSUk9SX01BWF9ERUxBWV9NUyA9IDYwXzAwMFxuY29uc3QgUE9MTF9FUlJPUl9HSVZFX1VQX01TID0gMTUgKiA2MCAqIDEwMDBcblxuLy8gTW9ub3RvbmljYWxseSBpbmNyZWFzaW5nIGNvdW50ZXIgZm9yIGRpc3Rpbmd1aXNoaW5nIGluaXQgY2FsbHMgaW4gbG9nc1xubGV0IGluaXRTZXF1ZW5jZSA9IDBcblxuLyoqXG4gKiBCb290c3RyYXAtZnJlZSBjb3JlOiBlbnYgcmVnaXN0cmF0aW9uIFx1MjE5MiBzZXNzaW9uIGNyZWF0aW9uIFx1MjE5MiBwb2xsIGxvb3AgXHUyMTkyXG4gKiBpbmdyZXNzIFdTIFx1MjE5MiB0ZWFyZG93bi4gUmVhZHMgbm90aGluZyBmcm9tIGJvb3RzdHJhcC9zdGF0ZSBvclxuICogc2Vzc2lvblN0b3JhZ2UgXHUyMDE0IGFsbCBjb250ZXh0IGNvbWVzIGZyb20gcGFyYW1zLiBDYWxsZXIgKGluaXRSZXBsQnJpZGdlXG4gKiBiZWxvdywgb3IgYSBkYWVtb24gaW4gUFIgNCkgaGFzIGFscmVhZHkgcGFzc2VkIGVudGl0bGVtZW50IGdhdGVzIGFuZFxuICogZ2F0aGVyZWQgZ2l0L2F1dGgvdGl0bGUuXG4gKlxuICogUmV0dXJucyBudWxsIG9uIHJlZ2lzdHJhdGlvbiBvciBzZXNzaW9uLWNyZWF0aW9uIGZhaWx1cmUuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0QnJpZGdlQ29yZShcbiAgcGFyYW1zOiBCcmlkZ2VDb3JlUGFyYW1zLFxuKTogUHJvbWlzZTxCcmlkZ2VDb3JlSGFuZGxlIHwgbnVsbD4ge1xuICBjb25zdCB7XG4gICAgZGlyLFxuICAgIG1hY2hpbmVOYW1lLFxuICAgIGJyYW5jaCxcbiAgICBnaXRSZXBvVXJsLFxuICAgIHRpdGxlLFxuICAgIGJhc2VVcmwsXG4gICAgc2Vzc2lvbkluZ3Jlc3NVcmwsXG4gICAgd29ya2VyVHlwZSxcbiAgICBnZXRBY2Nlc3NUb2tlbixcbiAgICBjcmVhdGVTZXNzaW9uLFxuICAgIGFyY2hpdmVTZXNzaW9uLFxuICAgIGdldEN1cnJlbnRUaXRsZSA9ICgpID0+IHRpdGxlLFxuICAgIHRvU0RLTWVzc2FnZXMgPSAoKSA9PiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdCcmlkZ2VDb3JlUGFyYW1zLnRvU0RLTWVzc2FnZXMgbm90IHByb3ZpZGVkLiBQYXNzIGl0IGlmIHlvdSB1c2Ugd3JpdGVNZXNzYWdlcygpIG9yIGluaXRpYWxNZXNzYWdlcyBcdTIwMTQgZGFlbW9uIGNhbGxlcnMgdGhhdCBvbmx5IHVzZSB3cml0ZVNka01lc3NhZ2VzKCkgbmV2ZXIgaGl0IHRoaXMgcGF0aC4nLFxuICAgICAgKVxuICAgIH0sXG4gICAgb25BdXRoNDAxLFxuICAgIGdldFBvbGxJbnRlcnZhbENvbmZpZyA9ICgpID0+IERFRkFVTFRfUE9MTF9DT05GSUcsXG4gICAgaW5pdGlhbEhpc3RvcnlDYXAgPSAyMDAsXG4gICAgaW5pdGlhbE1lc3NhZ2VzLFxuICAgIHByZXZpb3VzbHlGbHVzaGVkVVVJRHMsXG4gICAgb25JbmJvdW5kTWVzc2FnZSxcbiAgICBvblBlcm1pc3Npb25SZXNwb25zZSxcbiAgICBvbkludGVycnVwdCxcbiAgICBvblNldE1vZGVsLFxuICAgIG9uU2V0TWF4VGhpbmtpbmdUb2tlbnMsXG4gICAgb25TZXRQZXJtaXNzaW9uTW9kZSxcbiAgICBvblN0YXRlQ2hhbmdlLFxuICAgIG9uVXNlck1lc3NhZ2UsXG4gICAgcGVycGV0dWFsLFxuICAgIGluaXRpYWxTU0VTZXF1ZW5jZU51bSA9IDAsXG4gIH0gPSBwYXJhbXNcblxuICBjb25zdCBzZXEgPSArK2luaXRTZXF1ZW5jZVxuXG4gIC8vIGJyaWRnZVBvaW50ZXIgaW1wb3J0IGhvaXN0ZWQ6IHBlcnBldHVhbCBtb2RlIHJlYWRzIGl0IGJlZm9yZSByZWdpc3RlcjtcbiAgLy8gbm9uLXBlcnBldHVhbCB3cml0ZXMgaXQgYWZ0ZXIgc2Vzc2lvbiBjcmVhdGU7IGJvdGggdXNlIGNsZWFyIGF0IHRlYXJkb3duLlxuICBjb25zdCB7IHdyaXRlQnJpZGdlUG9pbnRlciwgY2xlYXJCcmlkZ2VQb2ludGVyLCByZWFkQnJpZGdlUG9pbnRlciB9ID1cbiAgICBhd2FpdCBpbXBvcnQoJy4vYnJpZGdlUG9pbnRlci5qcycpXG5cbiAgLy8gUGVycGV0dWFsIG1vZGU6IHJlYWQgdGhlIGNyYXNoLXJlY292ZXJ5IHBvaW50ZXIgYW5kIHRyZWF0IGl0IGFzIHByaW9yXG4gIC8vIHN0YXRlLiBUaGUgcG9pbnRlciBpcyB3cml0dGVuIHVuY29uZGl0aW9uYWxseSBhZnRlciBzZXNzaW9uIGNyZWF0ZVxuICAvLyAoY3Jhc2gtcmVjb3ZlcnkgZm9yIGFsbCBzZXNzaW9ucyk7IHBlcnBldHVhbCBtb2RlIGp1c3Qgc2tpcHMgdGhlXG4gIC8vIHRlYXJkb3duIGNsZWFyIHNvIGl0IHN1cnZpdmVzIGNsZWFuIGV4aXRzIHRvby4gT25seSByZXVzZSAncmVwbCdcbiAgLy8gcG9pbnRlcnMgXHUyMDE0IGEgY3Jhc2hlZCBzdGFuZGFsb25lIGJyaWRnZSAoYGNsYXVkZSByZW1vdGUtY29udHJvbGApXG4gIC8vIHdyaXRlcyBzb3VyY2U6J3N0YW5kYWxvbmUnIHdpdGggYSBkaWZmZXJlbnQgd29ya2VyVHlwZS5cbiAgY29uc3QgcmF3UHJpb3IgPSBwZXJwZXR1YWwgPyBhd2FpdCByZWFkQnJpZGdlUG9pbnRlcihkaXIpIDogbnVsbFxuICBjb25zdCBwcmlvciA9IHJhd1ByaW9yPy5zb3VyY2UgPT09ICdyZXBsJyA/IHJhd1ByaW9yIDogbnVsbFxuXG4gIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICBgW2JyaWRnZTpyZXBsXSBpbml0QnJpZGdlQ29yZSAjJHtzZXF9IHN0YXJ0aW5nIChpbml0aWFsTWVzc2FnZXM9JHtpbml0aWFsTWVzc2FnZXM/Lmxlbmd0aCA/PyAwfSR7cHJpb3IgPyBgIHBlcnBldHVhbCBwcmlvcj1lbnY6JHtwcmlvci5lbnZpcm9ubWVudElkfWAgOiAnJ30pYCxcbiAgKVxuXG4gIC8vIDUuIFJlZ2lzdGVyIGJyaWRnZSBlbnZpcm9ubWVudFxuICBjb25zdCByYXdBcGkgPSBjcmVhdGVCcmlkZ2VBcGlDbGllbnQoe1xuICAgIGJhc2VVcmwsXG4gICAgZ2V0QWNjZXNzVG9rZW4sXG4gICAgcnVubmVyVmVyc2lvbjogTUFDUk8uVkVSU0lPTixcbiAgICBvbkRlYnVnOiBsb2dGb3JEZWJ1Z2dpbmcsXG4gICAgb25BdXRoNDAxLFxuICAgIGdldFRydXN0ZWREZXZpY2VUb2tlbixcbiAgfSlcbiAgLy8gQW50LW9ubHk6IGludGVycG9zZSBzbyAvYnJpZGdlLWtpY2sgY2FuIGluamVjdCBwb2xsL3JlZ2lzdGVyL2hlYXJ0YmVhdFxuICAvLyBmYWlsdXJlcy4gWmVybyBjb3N0IGluIGV4dGVybmFsIGJ1aWxkcyAocmF3QXBpIHBhc3NlcyB0aHJvdWdoIHVuY2hhbmdlZCkuXG4gIGNvbnN0IGFwaSA9XG4gICAgcHJvY2Vzcy5lbnYuVVNFUl9UWVBFID09PSAnYW50JyA/IHdyYXBBcGlGb3JGYXVsdEluamVjdGlvbihyYXdBcGkpIDogcmF3QXBpXG5cbiAgY29uc3QgYnJpZGdlQ29uZmlnOiBCcmlkZ2VDb25maWcgPSB7XG4gICAgZGlyLFxuICAgIG1hY2hpbmVOYW1lLFxuICAgIGJyYW5jaCxcbiAgICBnaXRSZXBvVXJsLFxuICAgIG1heFNlc3Npb25zOiAxLFxuICAgIHNwYXduTW9kZTogJ3NpbmdsZS1zZXNzaW9uJyxcbiAgICB2ZXJib3NlOiBmYWxzZSxcbiAgICBzYW5kYm94OiBmYWxzZSxcbiAgICBicmlkZ2VJZDogcmFuZG9tVVVJRCgpLFxuICAgIHdvcmtlclR5cGUsXG4gICAgZW52aXJvbm1lbnRJZDogcmFuZG9tVVVJRCgpLFxuICAgIHJldXNlRW52aXJvbm1lbnRJZDogcHJpb3I/LmVudmlyb25tZW50SWQsXG4gICAgYXBpQmFzZVVybDogYmFzZVVybCxcbiAgICBzZXNzaW9uSW5ncmVzc1VybCxcbiAgfVxuXG4gIGxldCBlbnZpcm9ubWVudElkOiBzdHJpbmdcbiAgbGV0IGVudmlyb25tZW50U2VjcmV0OiBzdHJpbmdcbiAgdHJ5IHtcbiAgICBjb25zdCByZWcgPSBhd2FpdCBhcGkucmVnaXN0ZXJCcmlkZ2VFbnZpcm9ubWVudChicmlkZ2VDb25maWcpXG4gICAgZW52aXJvbm1lbnRJZCA9IHJlZy5lbnZpcm9ubWVudF9pZFxuICAgIGVudmlyb25tZW50U2VjcmV0ID0gcmVnLmVudmlyb25tZW50X3NlY3JldFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBsb2dCcmlkZ2VTa2lwKFxuICAgICAgJ3JlZ2lzdHJhdGlvbl9mYWlsZWQnLFxuICAgICAgYFticmlkZ2U6cmVwbF0gRW52aXJvbm1lbnQgcmVnaXN0cmF0aW9uIGZhaWxlZDogJHtlcnJvck1lc3NhZ2UoZXJyKX1gLFxuICAgIClcbiAgICAvLyBTdGFsZSBwb2ludGVyIG1heSBiZSB0aGUgY2F1c2UgKGV4cGlyZWQvZGVsZXRlZCBlbnYpIFx1MjAxNCBjbGVhciBpdCBzb1xuICAgIC8vIHRoZSBuZXh0IHN0YXJ0IGRvZXNuJ3QgcmV0cnkgdGhlIHNhbWUgZGVhZCBJRC5cbiAgICBpZiAocHJpb3IpIHtcbiAgICAgIGF3YWl0IGNsZWFyQnJpZGdlUG9pbnRlcihkaXIpXG4gICAgfVxuICAgIG9uU3RhdGVDaGFuZ2U/LignZmFpbGVkJywgZXJyb3JNZXNzYWdlKGVycikpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGxvZ0ZvckRlYnVnZ2luZyhgW2JyaWRnZTpyZXBsXSBFbnZpcm9ubWVudCByZWdpc3RlcmVkOiAke2Vudmlyb25tZW50SWR9YClcbiAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnaW5mbycsICdicmlkZ2VfcmVwbF9lbnZfcmVnaXN0ZXJlZCcpXG4gIGxvZ0V2ZW50KCd0ZW5ndV9icmlkZ2VfcmVwbF9lbnZfcmVnaXN0ZXJlZCcsIHt9KVxuXG4gIC8qKlxuICAgKiBSZWNvbm5lY3QtaW4tcGxhY2U6IGlmIHRoZSBqdXN0LXJlZ2lzdGVyZWQgZW52aXJvbm1lbnRJZCBtYXRjaGVzIHdoYXRcbiAgICogd2FzIHJlcXVlc3RlZCwgY2FsbCByZWNvbm5lY3RTZXNzaW9uIHRvIGZvcmNlLXN0b3Agc3RhbGUgd29ya2VycyBhbmRcbiAgICogcmUtcXVldWUgdGhlIHNlc3Npb24uIFVzZWQgYXQgaW5pdCAocGVycGV0dWFsIG1vZGUgXHUyMDE0IGVudiBpcyBhbGl2ZSBidXRcbiAgICogaWRsZSBhZnRlciBjbGVhbiB0ZWFyZG93bikgYW5kIGluIGRvUmVjb25uZWN0KCkgU3RyYXRlZ3kgMSAoZW52IGxvc3RcbiAgICogdGhlbiByZXN1cnJlY3RlZCkuIFJldHVybnMgdHJ1ZSBvbiBzdWNjZXNzOyBjYWxsZXIgZmFsbHMgYmFjayB0b1xuICAgKiBmcmVzaCBzZXNzaW9uIGNyZWF0aW9uIG9uIGZhbHNlLlxuICAgKi9cbiAgYXN5bmMgZnVuY3Rpb24gdHJ5UmVjb25uZWN0SW5QbGFjZShcbiAgICByZXF1ZXN0ZWRFbnZJZDogc3RyaW5nLFxuICAgIHNlc3Npb25JZDogc3RyaW5nLFxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoZW52aXJvbm1lbnRJZCAhPT0gcmVxdWVzdGVkRW52SWQpIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFticmlkZ2U6cmVwbF0gRW52IG1pc21hdGNoIChyZXF1ZXN0ZWQgJHtyZXF1ZXN0ZWRFbnZJZH0sIGdvdCAke2Vudmlyb25tZW50SWR9KSBcdTIwMTQgY2Fubm90IHJlY29ubmVjdCBpbiBwbGFjZWAsXG4gICAgICApXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgLy8gVGhlIHBvaW50ZXIgc3RvcmVzIHdoYXQgY3JlYXRlQnJpZGdlU2Vzc2lvbiByZXR1cm5lZCAoc2Vzc2lvbl8qLFxuICAgIC8vIGNvbXBhdC9jb252ZXJ0LmdvOjQxKS4gL2JyaWRnZS9yZWNvbm5lY3QgaXMgYW4gZW52aXJvbm1lbnRzLWxheWVyXG4gICAgLy8gZW5kcG9pbnQgXHUyMDE0IG9uY2UgdGhlIHNlcnZlcidzIGNjcl92Ml9jb21wYXRfZW5hYmxlZCBnYXRlIGlzIG9uIGl0XG4gICAgLy8gbG9va3Mgc2Vzc2lvbnMgdXAgYnkgdGhlaXIgaW5mcmEgdGFnIChjc2VfKikgYW5kIHJldHVybnMgXCJTZXNzaW9uXG4gICAgLy8gbm90IGZvdW5kXCIgZm9yIHRoZSBzZXNzaW9uXyogY29zdHVtZS4gV2UgZG9uJ3Qga25vdyB0aGUgZ2F0ZSBzdGF0ZVxuICAgIC8vIHByZS1wb2xsLCBzbyB0cnkgYm90aDsgdGhlIHJlLXRhZyBpcyBhIG5vLW9wIGlmIHRoZSBJRCBpcyBhbHJlYWR5XG4gICAgLy8gY3NlXyogKGRvUmVjb25uZWN0IFN0cmF0ZWd5IDEgcGF0aCBcdTIwMTQgY3VycmVudFNlc3Npb25JZCBuZXZlciBtdXRhdGVzXG4gICAgLy8gdG8gY3NlXyogYnV0IGZ1dHVyZS1wcm9vZiB0aGUgY2hlY2spLlxuICAgIGNvbnN0IGluZnJhSWQgPSB0b0luZnJhU2Vzc2lvbklkKHNlc3Npb25JZClcbiAgICBjb25zdCBjYW5kaWRhdGVzID1cbiAgICAgIGluZnJhSWQgPT09IHNlc3Npb25JZCA/IFtzZXNzaW9uSWRdIDogW3Nlc3Npb25JZCwgaW5mcmFJZF1cbiAgICBmb3IgKGNvbnN0IGlkIG9mIGNhbmRpZGF0ZXMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGFwaS5yZWNvbm5lY3RTZXNzaW9uKGVudmlyb25tZW50SWQsIGlkKVxuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgYFticmlkZ2U6cmVwbF0gUmVjb25uZWN0ZWQgc2Vzc2lvbiAke2lkfSBpbiBwbGFjZSBvbiBlbnYgJHtlbnZpcm9ubWVudElkfWAsXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgYFticmlkZ2U6cmVwbF0gcmVjb25uZWN0U2Vzc2lvbigke2lkfSkgZmFpbGVkOiAke2Vycm9yTWVzc2FnZShlcnIpfWAsXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgJ1ticmlkZ2U6cmVwbF0gcmVjb25uZWN0U2Vzc2lvbiBleGhhdXN0ZWQgXHUyMDE0IGZhbGxpbmcgdGhyb3VnaCB0byBmcmVzaCBzZXNzaW9uJyxcbiAgICApXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBQZXJwZXR1YWwgaW5pdDogZW52IGlzIGFsaXZlIGJ1dCBoYXMgbm8gcXVldWVkIHdvcmsgYWZ0ZXIgY2xlYW5cbiAgLy8gdGVhcmRvd24uIHJlY29ubmVjdFNlc3Npb24gcmUtcXVldWVzIGl0LiBkb1JlY29ubmVjdCgpIGhhcyB0aGUgc2FtZVxuICAvLyBjYWxsIGJ1dCBvbmx5IGZpcmVzIG9uIHBvbGwgNDA0IChlbnYgZGVhZCk7XG4gIC8vIGhlcmUgdGhlIGVudiBpcyBhbGl2ZSBidXQgaWRsZS5cbiAgY29uc3QgcmV1c2VkUHJpb3JTZXNzaW9uID0gcHJpb3JcbiAgICA/IGF3YWl0IHRyeVJlY29ubmVjdEluUGxhY2UocHJpb3IuZW52aXJvbm1lbnRJZCwgcHJpb3Iuc2Vzc2lvbklkKVxuICAgIDogZmFsc2VcbiAgaWYgKHByaW9yICYmICFyZXVzZWRQcmlvclNlc3Npb24pIHtcbiAgICBhd2FpdCBjbGVhckJyaWRnZVBvaW50ZXIoZGlyKVxuICB9XG5cbiAgLy8gNi4gQ3JlYXRlIHNlc3Npb24gb24gdGhlIGJyaWRnZS4gSW5pdGlhbCBtZXNzYWdlcyBhcmUgTk9UIGluY2x1ZGVkIGFzXG4gIC8vIHNlc3Npb24gY3JlYXRpb24gZXZlbnRzIGJlY2F1c2UgdGhvc2UgdXNlIFNUUkVBTV9PTkxZIHBlcnNpc3RlbmNlIGFuZFxuICAvLyBhcmUgcHVibGlzaGVkIGJlZm9yZSB0aGUgQ0NSIFVJIHN1YnNjcmliZXMsIHNvIHRoZXkgZ2V0IGxvc3QuIEluc3RlYWQsXG4gIC8vIGluaXRpYWwgbWVzc2FnZXMgYXJlIGZsdXNoZWQgdmlhIHRoZSBpbmdyZXNzIFdlYlNvY2tldCBvbmNlIGl0IGNvbm5lY3RzLlxuXG4gIC8vIE11dGFibGUgc2Vzc2lvbiBJRCBcdTIwMTQgdXBkYXRlZCB3aGVuIHRoZSBlbnZpcm9ubWVudCtzZXNzaW9uIHBhaXIgaXNcbiAgLy8gcmUtY3JlYXRlZCBhZnRlciBhIGNvbm5lY3Rpb24gbG9zcy5cbiAgbGV0IGN1cnJlbnRTZXNzaW9uSWQ6IHN0cmluZ1xuXG5cbiAgaWYgKHJldXNlZFByaW9yU2Vzc2lvbiAmJiBwcmlvcikge1xuICAgIGN1cnJlbnRTZXNzaW9uSWQgPSBwcmlvci5zZXNzaW9uSWRcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgW2JyaWRnZTpyZXBsXSBQZXJwZXR1YWwgc2Vzc2lvbiByZXVzZWQ6ICR7Y3VycmVudFNlc3Npb25JZH1gLFxuICAgIClcbiAgICAvLyBTZXJ2ZXIgYWxyZWFkeSBoYXMgYWxsIGluaXRpYWxNZXNzYWdlcyBmcm9tIHRoZSBwcmlvciBDTEkgcnVuLiBNYXJrXG4gICAgLy8gdGhlbSBhcyBwcmV2aW91c2x5LWZsdXNoZWQgc28gdGhlIGluaXRpYWwgZmx1c2ggZmlsdGVyIGV4Y2x1ZGVzIHRoZW1cbiAgICAvLyAocHJldmlvdXNseUZsdXNoZWRVVUlEcyBpcyBhIGZyZXNoIFNldCBvbiBldmVyeSBDTEkgc3RhcnQpLiBEdXBsaWNhdGVcbiAgICAvLyBVVUlEcyBjYXVzZSB0aGUgc2VydmVyIHRvIGtpbGwgdGhlIFdlYlNvY2tldC5cbiAgICBpZiAoaW5pdGlhbE1lc3NhZ2VzICYmIHByZXZpb3VzbHlGbHVzaGVkVVVJRHMpIHtcbiAgICAgIGZvciAoY29uc3QgbXNnIG9mIGluaXRpYWxNZXNzYWdlcykge1xuICAgICAgICBwcmV2aW91c2x5Rmx1c2hlZFVVSURzLmFkZChtc2cudXVpZClcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgY3JlYXRlZFNlc3Npb25JZCA9IGF3YWl0IGNyZWF0ZVNlc3Npb24oe1xuICAgICAgZW52aXJvbm1lbnRJZCxcbiAgICAgIHRpdGxlLFxuICAgICAgZ2l0UmVwb1VybCxcbiAgICAgIGJyYW5jaCxcbiAgICAgIHNpZ25hbDogQWJvcnRTaWduYWwudGltZW91dCgxNV8wMDApLFxuICAgIH0pXG5cbiAgICBpZiAoIWNyZWF0ZWRTZXNzaW9uSWQpIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgJ1ticmlkZ2U6cmVwbF0gU2Vzc2lvbiBjcmVhdGlvbiBmYWlsZWQsIGRlcmVnaXN0ZXJpbmcgZW52aXJvbm1lbnQnLFxuICAgICAgKVxuICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2JyaWRnZV9yZXBsX3Nlc3Npb25fZmFpbGVkJywge30pXG4gICAgICBhd2FpdCBhcGkuZGVyZWdpc3RlckVudmlyb25tZW50KGVudmlyb25tZW50SWQpLmNhdGNoKCgpID0+IHt9KVxuICAgICAgb25TdGF0ZUNoYW5nZT8uKCdmYWlsZWQnLCAnU2Vzc2lvbiBjcmVhdGlvbiBmYWlsZWQnKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjdXJyZW50U2Vzc2lvbklkID0gY3JlYXRlZFNlc3Npb25JZFxuICAgIGxvZ0ZvckRlYnVnZ2luZyhgW2JyaWRnZTpyZXBsXSBTZXNzaW9uIGNyZWF0ZWQ6ICR7Y3VycmVudFNlc3Npb25JZH1gKVxuICB9XG5cbiAgLy8gQ3Jhc2gtcmVjb3ZlcnkgcG9pbnRlcjogd3JpdHRlbiBub3cgc28gYSBraWxsIC05IGF0IGFueSBwb2ludCBhZnRlclxuICAvLyB0aGlzIGxlYXZlcyBhIHJlY292ZXJhYmxlIHRyYWlsLiBDbGVhcmVkIGluIHRlYXJkb3duIChub24tcGVycGV0dWFsKVxuICAvLyBvciBsZWZ0IGFsb25lIChwZXJwZXR1YWwgbW9kZSBcdTIwMTQgcG9pbnRlciBzdXJ2aXZlcyBjbGVhbiBleGl0IHRvbykuXG4gIC8vIGBjbGF1ZGUgcmVtb3RlLWNvbnRyb2wgLS1jb250aW51ZWAgZnJvbSB0aGUgc2FtZSBkaXJlY3Rvcnkgd2lsbCBkZXRlY3RcbiAgLy8gaXQgYW5kIG9mZmVyIHRvIHJlc3VtZS5cbiAgYXdhaXQgd3JpdGVCcmlkZ2VQb2ludGVyKGRpciwge1xuICAgIHNlc3Npb25JZDogY3VycmVudFNlc3Npb25JZCxcbiAgICBlbnZpcm9ubWVudElkLFxuICAgIHNvdXJjZTogJ3JlcGwnLFxuICB9KVxuICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdpbmZvJywgJ2JyaWRnZV9yZXBsX3Nlc3Npb25fY3JlYXRlZCcpXG4gIGxvZ0V2ZW50KCd0ZW5ndV9icmlkZ2VfcmVwbF9zdGFydGVkJywge1xuICAgIGhhc19pbml0aWFsX21lc3NhZ2VzOiAhIShpbml0aWFsTWVzc2FnZXMgJiYgaW5pdGlhbE1lc3NhZ2VzLmxlbmd0aCA+IDApLFxuICAgIGluUHJvdGVjdGVkTmFtZXNwYWNlOiBpc0luUHJvdGVjdGVkTmFtZXNwYWNlKCksXG4gIH0pXG5cbiAgLy8gVVVJRHMgb2YgaW5pdGlhbCBtZXNzYWdlcy4gVXNlZCBmb3IgZGVkdXAgaW4gd3JpdGVNZXNzYWdlcyB0byBhdm9pZFxuICAvLyByZS1zZW5kaW5nIG1lc3NhZ2VzIHRoYXQgd2VyZSBhbHJlYWR5IGZsdXNoZWQgb24gV2ViU29ja2V0IG9wZW4uXG4gIGNvbnN0IGluaXRpYWxNZXNzYWdlVVVJRHMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICBpZiAoaW5pdGlhbE1lc3NhZ2VzKSB7XG4gICAgZm9yIChjb25zdCBtc2cgb2YgaW5pdGlhbE1lc3NhZ2VzKSB7XG4gICAgICBpbml0aWFsTWVzc2FnZVVVSURzLmFkZChtc2cudXVpZClcbiAgICB9XG4gIH1cblxuICAvLyBCb3VuZGVkIHJpbmcgYnVmZmVyIG9mIFVVSURzIGZvciBtZXNzYWdlcyB3ZSd2ZSBhbHJlYWR5IHNlbnQgdG8gdGhlXG4gIC8vIHNlcnZlciB2aWEgdGhlIGluZ3Jlc3MgV2ViU29ja2V0LiBTZXJ2ZXMgdHdvIHB1cnBvc2VzOlxuICAvLyAgMS4gRWNobyBmaWx0ZXJpbmcgXHUyMDE0IGlnbm9yZSBvdXIgb3duIG1lc3NhZ2VzIGJvdW5jaW5nIGJhY2sgb24gdGhlIFdTLlxuICAvLyAgMi4gU2Vjb25kYXJ5IGRlZHVwIGluIHdyaXRlTWVzc2FnZXMgXHUyMDE0IGNhdGNoIHJhY2UgY29uZGl0aW9ucyB3aGVyZVxuICAvLyAgICAgdGhlIGhvb2sncyBpbmRleC1iYXNlZCB0cmFja2luZyBpc24ndCBzdWZmaWNpZW50LlxuICAvL1xuICAvLyBTZWVkZWQgd2l0aCBpbml0aWFsTWVzc2FnZVVVSURzIHNvIHRoYXQgd2hlbiB0aGUgc2VydmVyIGVjaG9lcyBiYWNrXG4gIC8vIHRoZSBpbml0aWFsIGNvbnZlcnNhdGlvbiBjb250ZXh0IG92ZXIgdGhlIGluZ3Jlc3MgV2ViU29ja2V0LCB0aG9zZVxuICAvLyBtZXNzYWdlcyBhcmUgcmVjb2duaXplZCBhcyBlY2hvZXMgYW5kIG5vdCByZS1pbmplY3RlZCBpbnRvIHRoZSBSRVBMLlxuICAvL1xuICAvLyBDYXBhY2l0eSBvZiAyMDAwIGNvdmVycyB3ZWxsIG92ZXIgYW55IHJlYWxpc3RpYyBlY2hvIHdpbmRvdyAoZWNob2VzXG4gIC8vIGFycml2ZSB3aXRoaW4gbWlsbGlzZWNvbmRzKSBhbmQgYW55IG1lc3NhZ2VzIHRoYXQgbWlnaHQgYmUgcmUtZW5jb3VudGVyZWRcbiAgLy8gYWZ0ZXIgY29tcGFjdGlvbi4gVGhlIGhvb2sncyBsYXN0V3JpdHRlbkluZGV4UmVmIGlzIHRoZSBwcmltYXJ5IGRlZHVwO1xuICAvLyB0aGlzIGlzIGEgc2FmZXR5IG5ldC5cbiAgY29uc3QgcmVjZW50UG9zdGVkVVVJRHMgPSBuZXcgQm91bmRlZFVVSURTZXQoMjAwMClcbiAgZm9yIChjb25zdCB1dWlkIG9mIGluaXRpYWxNZXNzYWdlVVVJRHMpIHtcbiAgICByZWNlbnRQb3N0ZWRVVUlEcy5hZGQodXVpZClcbiAgfVxuXG4gIC8vIEJvdW5kZWQgc2V0IG9mIElOQk9VTkQgcHJvbXB0IFVVSURzIHdlJ3ZlIGFscmVhZHkgZm9yd2FyZGVkIHRvIHRoZSBSRVBMLlxuICAvLyBEZWZlbnNpdmUgZGVkdXAgZm9yIHdoZW4gdGhlIHNlcnZlciByZS1kZWxpdmVycyBwcm9tcHRzIChzZXEtbnVtXG4gIC8vIG5lZ290aWF0aW9uIGZhaWx1cmUsIHNlcnZlciBlZGdlIGNhc2VzLCB0cmFuc3BvcnQgc3dhcCByYWNlcykuIFRoZVxuICAvLyBzZXEtbnVtIGNhcnJ5b3ZlciBiZWxvdyBpcyB0aGUgcHJpbWFyeSBmaXg7IHRoaXMgaXMgdGhlIHNhZmV0eSBuZXQuXG4gIGNvbnN0IHJlY2VudEluYm91bmRVVUlEcyA9IG5ldyBCb3VuZGVkVVVJRFNldCgyMDAwKVxuXG4gIC8vIDcuIFN0YXJ0IHBvbGwgbG9vcCBmb3Igd29yayBpdGVtcyBcdTIwMTQgdGhpcyBpcyB3aGF0IG1ha2VzIHRoZSBzZXNzaW9uXG4gIC8vIFwibGl2ZVwiIG9uIGNsYXVkZS5haS4gV2hlbiBhIHVzZXIgdHlwZXMgdGhlcmUsIHRoZSBiYWNrZW5kIGRpc3BhdGNoZXNcbiAgLy8gYSB3b3JrIGl0ZW0gdG8gb3VyIGVudmlyb25tZW50LiBXZSBwb2xsIGZvciBpdCwgZ2V0IHRoZSBpbmdyZXNzIHRva2VuLFxuICAvLyBhbmQgY29ubmVjdCB0aGUgaW5ncmVzcyBXZWJTb2NrZXQuXG4gIC8vXG4gIC8vIFRoZSBwb2xsIGxvb3Aga2VlcHMgcnVubmluZzogd2hlbiB3b3JrIGFycml2ZXMgaXQgY29ubmVjdHMgdGhlIGluZ3Jlc3NcbiAgLy8gV2ViU29ja2V0LCBhbmQgaWYgdGhlIFdlYlNvY2tldCBkcm9wcyB1bmV4cGVjdGVkbHkgKGNvZGUgIT0gMTAwMCkgaXRcbiAgLy8gcmVzdW1lcyBwb2xsaW5nIHRvIGdldCBhIGZyZXNoIGluZ3Jlc3MgdG9rZW4gYW5kIHJlY29ubmVjdC5cbiAgY29uc3QgcG9sbENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgLy8gQWRhcHRlciBvdmVyIGVpdGhlciBIeWJyaWRUcmFuc3BvcnQgKHYxOiBXUyByZWFkcyArIFBPU1Qgd3JpdGVzIHRvXG4gIC8vIFNlc3Npb24tSW5ncmVzcykgb3IgU1NFVHJhbnNwb3J0K0NDUkNsaWVudCAodjI6IFNTRSByZWFkcyArIFBPU1RcbiAgLy8gd3JpdGVzIHRvIENDUiAvd29ya2VyLyopLiBUaGUgdjEvdjIgY2hvaWNlIGlzIG1hZGUgaW4gb25Xb3JrUmVjZWl2ZWQ6XG4gIC8vIHNlcnZlci1kcml2ZW4gdmlhIHNlY3JldC51c2VfY29kZV9zZXNzaW9ucywgd2l0aCBDTEFVREVfQlJJREdFX1VTRV9DQ1JfVjJcbiAgLy8gYXMgYW4gYW50LWRldiBvdmVycmlkZS5cbiAgbGV0IHRyYW5zcG9ydDogUmVwbEJyaWRnZVRyYW5zcG9ydCB8IG51bGwgPSBudWxsXG4gIC8vIEJ1bXBlZCBvbiBldmVyeSBvbldvcmtSZWNlaXZlZC4gQ2FwdHVyZWQgaW4gY3JlYXRlVjJSZXBsVHJhbnNwb3J0J3MgLnRoZW4oKVxuICAvLyBjbG9zdXJlIHRvIGRldGVjdCBzdGFsZSByZXNvbHV0aW9uczogaWYgdHdvIGNhbGxzIHJhY2Ugd2hpbGUgdHJhbnNwb3J0IGlzXG4gIC8vIG51bGwsIGJvdGggcmVnaXN0ZXJXb3JrZXIoKSAoYnVtcGluZyBzZXJ2ZXIgZXBvY2gpLCBhbmQgd2hpY2hldmVyIHJlc29sdmVzXG4gIC8vIFNFQ09ORCBpcyB0aGUgY29ycmVjdCBvbmUgXHUyMDE0IGJ1dCB0aGUgdHJhbnNwb3J0ICE9PSBudWxsIGNoZWNrIGdldHMgdGhpc1xuICAvLyBiYWNrd2FyZHMgKGZpcnN0LXRvLXJlc29sdmUgaW5zdGFsbHMsIHNlY29uZCBkaXNjYXJkcykuIFRoZSBnZW5lcmF0aW9uXG4gIC8vIGNvdW50ZXIgY2F0Y2hlcyBpdCBpbmRlcGVuZGVudCBvZiB0cmFuc3BvcnQgc3RhdGUuXG4gIGxldCB2MkdlbmVyYXRpb24gPSAwXG4gIC8vIFNTRSBzZXF1ZW5jZS1udW1iZXIgaGlnaC13YXRlciBtYXJrIGNhcnJpZWQgYWNyb3NzIHRyYW5zcG9ydCBzd2Fwcy5cbiAgLy8gV2l0aG91dCB0aGlzLCBlYWNoIG5ldyBTU0VUcmFuc3BvcnQgc3RhcnRzIGF0IDAsIHNlbmRzIG5vXG4gIC8vIGZyb21fc2VxdWVuY2VfbnVtIC8gTGFzdC1FdmVudC1JRCBvbiBpdHMgZmlyc3QgY29ubmVjdCwgYW5kIHRoZSBzZXJ2ZXJcbiAgLy8gcmVwbGF5cyB0aGUgZW50aXJlIHNlc3Npb24gZXZlbnQgaGlzdG9yeSBcdTIwMTQgZXZlcnkgcHJvbXB0IGV2ZXIgc2VudFxuICAvLyByZS1kZWxpdmVyZWQgYXMgZnJlc2ggaW5ib3VuZCBtZXNzYWdlcyBvbiBldmVyeSBvbldvcmtSZWNlaXZlZC5cbiAgLy9cbiAgLy8gU2VlZCBvbmx5IHdoZW4gd2UgYWN0dWFsbHkgcmVjb25uZWN0ZWQgdGhlIHByaW9yIHNlc3Npb24uIElmXG4gIC8vIGByZXVzZWRQcmlvclNlc3Npb25gIGlzIGZhbHNlIHdlIGZlbGwgdGhyb3VnaCB0byBgY3JlYXRlU2Vzc2lvbigpYCBcdTIwMTRcbiAgLy8gdGhlIGNhbGxlcidzIHBlcnNpc3RlZCBzZXEtbnVtIGJlbG9uZ3MgdG8gYSBkZWFkIHNlc3Npb24gYW5kIGFwcGx5aW5nXG4gIC8vIGl0IHRvIHRoZSBmcmVzaCBzdHJlYW0gKHN0YXJ0aW5nIGF0IDEpIHNpbGVudGx5IGRyb3BzIGV2ZW50cy4gU2FtZVxuICAvLyBoYXphcmQgYXMgZG9SZWNvbm5lY3QgU3RyYXRlZ3kgMjsgc2FtZSBmaXggYXMgdGhlIHJlc2V0IHRoZXJlLlxuICBsZXQgbGFzdFRyYW5zcG9ydFNlcXVlbmNlTnVtID0gcmV1c2VkUHJpb3JTZXNzaW9uID8gaW5pdGlhbFNTRVNlcXVlbmNlTnVtIDogMFxuICAvLyBUcmFjayB0aGUgY3VycmVudCB3b3JrIElEIHNvIHRlYXJkb3duIGNhbiBjYWxsIHN0b3BXb3JrXG4gIGxldCBjdXJyZW50V29ya0lkOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICAvLyBTZXNzaW9uIGluZ3Jlc3MgSldUIGZvciB0aGUgY3VycmVudCB3b3JrIGl0ZW0gXHUyMDE0IHVzZWQgZm9yIGhlYXJ0YmVhdCBhdXRoLlxuICBsZXQgY3VycmVudEluZ3Jlc3NUb2tlbjogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgLy8gU2lnbmFsIHRvIHdha2UgdGhlIGF0LWNhcGFjaXR5IHNsZWVwIGVhcmx5IHdoZW4gdGhlIHRyYW5zcG9ydCBpcyBsb3N0LFxuICAvLyBzbyB0aGUgcG9sbCBsb29wIGltbWVkaWF0ZWx5IHN3aXRjaGVzIGJhY2sgdG8gZmFzdCBwb2xsaW5nIGZvciBuZXcgd29yay5cbiAgY29uc3QgY2FwYWNpdHlXYWtlID0gY3JlYXRlQ2FwYWNpdHlXYWtlKHBvbGxDb250cm9sbGVyLnNpZ25hbClcbiAgY29uc3Qgd2FrZVBvbGxMb29wID0gY2FwYWNpdHlXYWtlLndha2VcbiAgY29uc3QgY2FwYWNpdHlTaWduYWwgPSBjYXBhY2l0eVdha2Uuc2lnbmFsXG4gIC8vIEdhdGVzIG1lc3NhZ2Ugd3JpdGVzIGR1cmluZyB0aGUgaW5pdGlhbCBmbHVzaCB0byBwcmV2ZW50IG9yZGVyaW5nXG4gIC8vIHJhY2VzIHdoZXJlIG5ldyBtZXNzYWdlcyBhcnJpdmUgYXQgdGhlIHNlcnZlciBpbnRlcmxlYXZlZCB3aXRoIGhpc3RvcnkuXG4gIGNvbnN0IGZsdXNoR2F0ZSA9IG5ldyBGbHVzaEdhdGU8TWVzc2FnZT4oKVxuXG4gIC8vIExhdGNoIGZvciBvblVzZXJNZXNzYWdlIFx1MjAxNCBmbGlwcyB0cnVlIHdoZW4gdGhlIGNhbGxiYWNrIHJldHVybnMgdHJ1ZVxuICAvLyAocG9saWN5IHNheXMgXCJkb25lIGRlcml2aW5nXCIpLiBJZiBubyBjYWxsYmFjaywgc2tpcCBzY2FubmluZyBlbnRpcmVseVxuICAvLyAoZGFlbW9uIHBhdGggXHUyMDE0IG5vIHRpdGxlIGRlcml2YXRpb24gbmVlZGVkKS5cbiAgbGV0IHVzZXJNZXNzYWdlQ2FsbGJhY2tEb25lID0gIW9uVXNlck1lc3NhZ2VcblxuICAvLyBTaGFyZWQgY291bnRlciBmb3IgZW52aXJvbm1lbnQgcmUtY3JlYXRpb25zLCB1c2VkIGJ5IGJvdGhcbiAgLy8gb25FbnZpcm9ubWVudExvc3QgYW5kIHRoZSBhYm5vcm1hbC1jbG9zZSBoYW5kbGVyLlxuICBjb25zdCBNQVhfRU5WSVJPTk1FTlRfUkVDUkVBVElPTlMgPSAzXG4gIGxldCBlbnZpcm9ubWVudFJlY3JlYXRpb25zID0gMFxuICBsZXQgcmVjb25uZWN0UHJvbWlzZTogUHJvbWlzZTxib29sZWFuPiB8IG51bGwgPSBudWxsXG5cbiAgLyoqXG4gICAqIFJlY292ZXIgZnJvbSBvbkVudmlyb25tZW50TG9zdCAocG9sbCByZXR1cm5lZCA0MDQgXHUyMDE0IGVudiB3YXMgcmVhcGVkXG4gICAqIHNlcnZlci1zaWRlKS4gVHJpZXMgdHdvIHN0cmF0ZWdpZXMgaW4gb3JkZXI6XG4gICAqXG4gICAqICAgMS4gUmVjb25uZWN0LWluLXBsYWNlOiBpZGVtcG90ZW50IHJlLXJlZ2lzdGVyIHdpdGggcmV1c2VFbnZpcm9ubWVudElkXG4gICAqICAgICAgXHUyMTkyIGlmIHRoZSBiYWNrZW5kIHJldHVybnMgdGhlIHNhbWUgZW52IElELCBjYWxsIHJlY29ubmVjdFNlc3Npb24oKVxuICAgKiAgICAgIHRvIHJlLXF1ZXVlIHRoZSBleGlzdGluZyBzZXNzaW9uLiBjdXJyZW50U2Vzc2lvbklkIHN0YXlzIHRoZSBzYW1lO1xuICAgKiAgICAgIHRoZSBVUkwgb24gdGhlIHVzZXIncyBwaG9uZSBzdGF5cyB2YWxpZDsgcHJldmlvdXNseUZsdXNoZWRVVUlEcyBpc1xuICAgKiAgICAgIHByZXNlcnZlZCBzbyBoaXN0b3J5IGlzbid0IHJlLXNlbnQuXG4gICAqXG4gICAqICAgMi4gRnJlc2ggc2Vzc2lvbiBmYWxsYmFjazogaWYgdGhlIGJhY2tlbmQgcmV0dXJucyBhIGRpZmZlcmVudCBlbnYgSURcbiAgICogICAgICAob3JpZ2luYWwgVFRMLWV4cGlyZWQsIGUuZy4gbGFwdG9wIHNsZXB0ID40aCkgb3IgcmVjb25uZWN0U2Vzc2lvbigpXG4gICAqICAgICAgdGhyb3dzLCBhcmNoaXZlIHRoZSBvbGQgc2Vzc2lvbiBhbmQgY3JlYXRlIGEgbmV3IG9uZSBvbiB0aGVcbiAgICogICAgICBub3ctcmVnaXN0ZXJlZCBlbnYuIE9sZCBiZWhhdmlvciBiZWZvcmUgIzIwNDYwIHByaW1pdGl2ZXMgbGFuZGVkLlxuICAgKlxuICAgKiBVc2VzIGEgcHJvbWlzZS1iYXNlZCByZWVudHJhbmN5IGd1YXJkIHNvIGNvbmN1cnJlbnQgY2FsbGVycyBzaGFyZSB0aGVcbiAgICogc2FtZSByZWNvbm5lY3Rpb24gYXR0ZW1wdC5cbiAgICovXG4gIGFzeW5jIGZ1bmN0aW9uIHJlY29ubmVjdEVudmlyb25tZW50V2l0aFNlc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKHJlY29ubmVjdFByb21pc2UpIHtcbiAgICAgIHJldHVybiByZWNvbm5lY3RQcm9taXNlXG4gICAgfVxuICAgIHJlY29ubmVjdFByb21pc2UgPSBkb1JlY29ubmVjdCgpXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhd2FpdCByZWNvbm5lY3RQcm9taXNlXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHJlY29ubmVjdFByb21pc2UgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZG9SZWNvbm5lY3QoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgZW52aXJvbm1lbnRSZWNyZWF0aW9ucysrXG4gICAgLy8gSW52YWxpZGF0ZSBhbnkgaW4tZmxpZ2h0IHYyIGhhbmRzaGFrZSBcdTIwMTQgdGhlIGVudmlyb25tZW50IGlzIGJlaW5nXG4gICAgLy8gcmVjcmVhdGVkLCBzbyBhIHN0YWxlIHRyYW5zcG9ydCBhcnJpdmluZyBwb3N0LXJlY29ubmVjdCB3b3VsZCBiZVxuICAgIC8vIHBvaW50ZWQgYXQgYSBkZWFkIHNlc3Npb24uXG4gICAgdjJHZW5lcmF0aW9uKytcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgW2JyaWRnZTpyZXBsXSBSZWNvbm5lY3RpbmcgYWZ0ZXIgZW52IGxvc3QgKGF0dGVtcHQgJHtlbnZpcm9ubWVudFJlY3JlYXRpb25zfS8ke01BWF9FTlZJUk9OTUVOVF9SRUNSRUFUSU9OU30pYCxcbiAgICApXG5cbiAgICBpZiAoZW52aXJvbm1lbnRSZWNyZWF0aW9ucyA+IE1BWF9FTlZJUk9OTUVOVF9SRUNSRUFUSU9OUykge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgW2JyaWRnZTpyZXBsXSBFbnZpcm9ubWVudCByZWNvbm5lY3QgbGltaXQgcmVhY2hlZCAoJHtNQVhfRU5WSVJPTk1FTlRfUkVDUkVBVElPTlN9KSwgZ2l2aW5nIHVwYCxcbiAgICAgIClcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIENsb3NlIHRoZSBzdGFsZSB0cmFuc3BvcnQuIENhcHR1cmUgc2VxIEJFRk9SRSBjbG9zZSBcdTIwMTQgaWYgU3RyYXRlZ3kgMVxuICAgIC8vICh0cnlSZWNvbm5lY3RJblBsYWNlKSBzdWNjZWVkcyB3ZSBrZWVwIHRoZSBTQU1FIHNlc3Npb24sIGFuZCB0aGVcbiAgICAvLyBuZXh0IHRyYW5zcG9ydCBtdXN0IHJlc3VtZSB3aGVyZSB0aGlzIG9uZSBsZWZ0IG9mZiwgbm90IHJlcGxheSBmcm9tXG4gICAgLy8gdGhlIGxhc3QgdHJhbnNwb3J0LXN3YXAgY2hlY2twb2ludC5cbiAgICBpZiAodHJhbnNwb3J0KSB7XG4gICAgICBjb25zdCBzZXEgPSB0cmFuc3BvcnQuZ2V0TGFzdFNlcXVlbmNlTnVtKClcbiAgICAgIGlmIChzZXEgPiBsYXN0VHJhbnNwb3J0U2VxdWVuY2VOdW0pIHtcbiAgICAgICAgbGFzdFRyYW5zcG9ydFNlcXVlbmNlTnVtID0gc2VxXG4gICAgICB9XG4gICAgICB0cmFuc3BvcnQuY2xvc2UoKVxuICAgICAgdHJhbnNwb3J0ID0gbnVsbFxuICAgIH1cbiAgICAvLyBUcmFuc3BvcnQgaXMgZ29uZSBcdTIwMTQgd2FrZSB0aGUgcG9sbCBsb29wIG91dCBvZiBpdHMgYXQtY2FwYWNpdHlcbiAgICAvLyBoZWFydGJlYXQgc2xlZXAgc28gaXQgY2FuIGZhc3QtcG9sbCBmb3IgcmUtZGlzcGF0Y2hlZCB3b3JrLlxuICAgIHdha2VQb2xsTG9vcCgpXG4gICAgLy8gUmVzZXQgZmx1c2ggZ2F0ZSBzbyB3cml0ZU1lc3NhZ2VzKCkgaGl0cyB0aGUgIXRyYW5zcG9ydCBndWFyZFxuICAgIC8vIGluc3RlYWQgb2Ygc2lsZW50bHkgcXVldWluZyBpbnRvIGEgZGVhZCBidWZmZXIuXG4gICAgZmx1c2hHYXRlLmRyb3AoKVxuXG4gICAgLy8gUmVsZWFzZSB0aGUgY3VycmVudCB3b3JrIGl0ZW0gKGZvcmNlPWZhbHNlIFx1MjAxNCB3ZSBtYXkgd2FudCB0aGUgc2Vzc2lvblxuICAgIC8vIGJhY2spLiBCZXN0LWVmZm9ydDogdGhlIGVudiBpcyBwcm9iYWJseSBnb25lLCBzbyB0aGlzIGxpa2VseSA0MDRzLlxuICAgIGlmIChjdXJyZW50V29ya0lkKSB7XG4gICAgICBjb25zdCB3b3JrSWRCZWluZ0NsZWFyZWQgPSBjdXJyZW50V29ya0lkXG4gICAgICBhd2FpdCBhcGlcbiAgICAgICAgLnN0b3BXb3JrKGVudmlyb25tZW50SWQsIHdvcmtJZEJlaW5nQ2xlYXJlZCwgZmFsc2UpXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7fSlcbiAgICAgIC8vIFdoZW4gZG9SZWNvbm5lY3QgcnVucyBjb25jdXJyZW50bHkgd2l0aCB0aGUgcG9sbCBsb29wICh3c19jbG9zZWRcbiAgICAgIC8vIGhhbmRsZXIgY2FzZSBcdTIwMTQgdm9pZC1jYWxsZWQsIHVubGlrZSB0aGUgYXdhaXRlZCBvbkVudmlyb25tZW50TG9zdFxuICAgICAgLy8gcGF0aCksIG9uV29ya1JlY2VpdmVkIGNhbiBmaXJlIGR1cmluZyB0aGUgc3RvcFdvcmsgYXdhaXQgYW5kIHNldFxuICAgICAgLy8gYSBmcmVzaCBjdXJyZW50V29ya0lkLiBJZiBpdCBkaWQsIHRoZSBwb2xsIGxvb3AgaGFzIGFscmVhZHlcbiAgICAgIC8vIHJlY292ZXJlZCBvbiBpdHMgb3duIFx1MjAxNCBkZWZlciB0byBpdCByYXRoZXIgdGhhbiBwcm9jZWVkaW5nIHRvXG4gICAgICAvLyBhcmNoaXZlU2Vzc2lvbiwgd2hpY2ggd291bGQgZGVzdHJveSB0aGUgc2Vzc2lvbiBpdHMgbmV3XG4gICAgICAvLyB0cmFuc3BvcnQgaXMgY29ubmVjdGVkIHRvLlxuICAgICAgaWYgKGN1cnJlbnRXb3JrSWQgIT09IHdvcmtJZEJlaW5nQ2xlYXJlZCkge1xuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgJ1ticmlkZ2U6cmVwbF0gUG9sbCBsb29wIHJlY292ZXJlZCBkdXJpbmcgc3RvcFdvcmsgYXdhaXQgXHUyMDE0IGRlZmVycmluZyB0byBpdCcsXG4gICAgICAgIClcbiAgICAgICAgZW52aXJvbm1lbnRSZWNyZWF0aW9ucyA9IDBcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIGN1cnJlbnRXb3JrSWQgPSBudWxsXG4gICAgICBjdXJyZW50SW5ncmVzc1Rva2VuID0gbnVsbFxuICAgIH1cblxuICAgIC8vIEJhaWwgb3V0IGlmIHRlYXJkb3duIHN0YXJ0ZWQgd2hpbGUgd2Ugd2VyZSBhd2FpdGluZ1xuICAgIGlmIChwb2xsQ29udHJvbGxlci5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKCdbYnJpZGdlOnJlcGxdIFJlY29ubmVjdCBhYm9ydGVkIGJ5IHRlYXJkb3duJylcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIFN0cmF0ZWd5IDE6IGlkZW1wb3RlbnQgcmUtcmVnaXN0ZXIgd2l0aCB0aGUgc2VydmVyLWlzc3VlZCBlbnYgSUQuXG4gICAgLy8gSWYgdGhlIGJhY2tlbmQgcmVzdXJyZWN0cyB0aGUgc2FtZSBlbnYgKGZyZXNoIHNlY3JldCksIHdlIGNhblxuICAgIC8vIHJlY29ubmVjdCB0aGUgZXhpc3Rpbmcgc2Vzc2lvbi4gSWYgaXQgaGFuZHMgYmFjayBhIGRpZmZlcmVudCBJRCwgdGhlXG4gICAgLy8gb3JpZ2luYWwgZW52IGlzIHRydWx5IGdvbmUgYW5kIHdlIGZhbGwgdGhyb3VnaCB0byBhIGZyZXNoIHNlc3Npb24uXG4gICAgY29uc3QgcmVxdWVzdGVkRW52SWQgPSBlbnZpcm9ubWVudElkXG4gICAgYnJpZGdlQ29uZmlnLnJldXNlRW52aXJvbm1lbnRJZCA9IHJlcXVlc3RlZEVudklkXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlZyA9IGF3YWl0IGFwaS5yZWdpc3RlckJyaWRnZUVudmlyb25tZW50KGJyaWRnZUNvbmZpZylcbiAgICAgIGVudmlyb25tZW50SWQgPSByZWcuZW52aXJvbm1lbnRfaWRcbiAgICAgIGVudmlyb25tZW50U2VjcmV0ID0gcmVnLmVudmlyb25tZW50X3NlY3JldFxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYnJpZGdlQ29uZmlnLnJldXNlRW52aXJvbm1lbnRJZCA9IHVuZGVmaW5lZFxuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgW2JyaWRnZTpyZXBsXSBFbnZpcm9ubWVudCByZS1yZWdpc3RyYXRpb24gZmFpbGVkOiAke2Vycm9yTWVzc2FnZShlcnIpfWAsXG4gICAgICApXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgLy8gQ2xlYXIgYmVmb3JlIGFueSBhd2FpdCBcdTIwMTQgYSBzdGFsZSB2YWx1ZSB3b3VsZCBwb2lzb24gdGhlIG5leHQgZnJlc2hcbiAgICAvLyByZWdpc3RyYXRpb24gaWYgZG9SZWNvbm5lY3QgcnVucyBhZ2Fpbi5cbiAgICBicmlkZ2VDb25maWcucmV1c2VFbnZpcm9ubWVudElkID0gdW5kZWZpbmVkXG5cbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgW2JyaWRnZTpyZXBsXSBSZS1yZWdpc3RlcmVkOiByZXF1ZXN0ZWQ9JHtyZXF1ZXN0ZWRFbnZJZH0gZ290PSR7ZW52aXJvbm1lbnRJZH1gLFxuICAgIClcblxuICAgIC8vIEJhaWwgb3V0IGlmIHRlYXJkb3duIHN0YXJ0ZWQgd2hpbGUgd2Ugd2VyZSByZWdpc3RlcmluZ1xuICAgIGlmIChwb2xsQ29udHJvbGxlci5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAnW2JyaWRnZTpyZXBsXSBSZWNvbm5lY3QgYWJvcnRlZCBhZnRlciBlbnYgcmVnaXN0cmF0aW9uLCBjbGVhbmluZyB1cCcsXG4gICAgICApXG4gICAgICBhd2FpdCBhcGkuZGVyZWdpc3RlckVudmlyb25tZW50KGVudmlyb25tZW50SWQpLmNhdGNoKCgpID0+IHt9KVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gU2FtZSByYWNlIGFzIGFib3ZlLCBuYXJyb3dlciB3aW5kb3c6IHBvbGwgbG9vcCBtYXkgaGF2ZSBzZXQgdXAgYVxuICAgIC8vIHRyYW5zcG9ydCBkdXJpbmcgdGhlIHJlZ2lzdGVyQnJpZGdlRW52aXJvbm1lbnQgYXdhaXQuIEJhaWwgYmVmb3JlXG4gICAgLy8gdHJ5UmVjb25uZWN0SW5QbGFjZS9hcmNoaXZlU2Vzc2lvbiBraWxsIGl0IHNlcnZlci1zaWRlLlxuICAgIGlmICh0cmFuc3BvcnQgIT09IG51bGwpIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgJ1ticmlkZ2U6cmVwbF0gUG9sbCBsb29wIHJlY292ZXJlZCBkdXJpbmcgcmVnaXN0ZXJCcmlkZ2VFbnZpcm9ubWVudCBhd2FpdCBcdTIwMTQgZGVmZXJyaW5nIHRvIGl0JyxcbiAgICAgIClcbiAgICAgIGVudmlyb25tZW50UmVjcmVhdGlvbnMgPSAwXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFN0cmF0ZWd5IDE6IHNhbWUgaGVscGVyIGFzIHBlcnBldHVhbCBpbml0LiBjdXJyZW50U2Vzc2lvbklkIHN0YXlzXG4gICAgLy8gdGhlIHNhbWUgb24gc3VjY2VzczsgVVJMIG9uIG1vYmlsZS93ZWIgc3RheXMgdmFsaWQ7XG4gICAgLy8gcHJldmlvdXNseUZsdXNoZWRVVUlEcyBwcmVzZXJ2ZWQgKG5vIHJlLWZsdXNoKS5cbiAgICBpZiAoYXdhaXQgdHJ5UmVjb25uZWN0SW5QbGFjZShyZXF1ZXN0ZWRFbnZJZCwgY3VycmVudFNlc3Npb25JZCkpIHtcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9icmlkZ2VfcmVwbF9yZWNvbm5lY3RlZF9pbl9wbGFjZScsIHt9KVxuICAgICAgZW52aXJvbm1lbnRSZWNyZWF0aW9ucyA9IDBcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIC8vIEVudiBkaWZmZXJzIFx1MjE5MiBUVEwtZXhwaXJlZC9yZWFwZWQ7IG9yIHJlY29ubmVjdCBmYWlsZWQuXG4gICAgLy8gRG9uJ3QgZGVyZWdpc3RlciBcdTIwMTQgd2UgaGF2ZSBhIGZyZXNoIHNlY3JldCBmb3IgdGhpcyBlbnYgZWl0aGVyIHdheS5cbiAgICBpZiAoZW52aXJvbm1lbnRJZCAhPT0gcmVxdWVzdGVkRW52SWQpIHtcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9icmlkZ2VfcmVwbF9lbnZfZXhwaXJlZF9mcmVzaF9zZXNzaW9uJywge30pXG4gICAgfVxuXG4gICAgLy8gU3RyYXRlZ3kgMjogZnJlc2ggc2Vzc2lvbiBvbiB0aGUgbm93LXJlZ2lzdGVyZWQgZW52aXJvbm1lbnQuXG4gICAgLy8gQXJjaGl2ZSB0aGUgb2xkIHNlc3Npb24gZmlyc3QgXHUyMDE0IGl0J3Mgb3JwaGFuZWQgKGJvdW5kIHRvIGEgZGVhZCBlbnYsXG4gICAgLy8gb3IgcmVjb25uZWN0U2Vzc2lvbiByZWplY3RlZCBpdCkuIERvbid0IGRlcmVnaXN0ZXIgdGhlIGVudiBcdTIwMTQgd2UganVzdFxuICAgIC8vIGdvdCBhIGZyZXNoIHNlY3JldCBmb3IgaXQgYW5kIGFyZSBhYm91dCB0byB1c2UgaXQuXG4gICAgYXdhaXQgYXJjaGl2ZVNlc3Npb24oY3VycmVudFNlc3Npb25JZClcblxuICAgIC8vIEJhaWwgb3V0IGlmIHRlYXJkb3duIHN0YXJ0ZWQgd2hpbGUgd2Ugd2VyZSBhcmNoaXZpbmdcbiAgICBpZiAocG9sbENvbnRyb2xsZXIuc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgJ1ticmlkZ2U6cmVwbF0gUmVjb25uZWN0IGFib3J0ZWQgYWZ0ZXIgYXJjaGl2ZSwgY2xlYW5pbmcgdXAnLFxuICAgICAgKVxuICAgICAgYXdhaXQgYXBpLmRlcmVnaXN0ZXJFbnZpcm9ubWVudChlbnZpcm9ubWVudElkKS5jYXRjaCgoKSA9PiB7fSlcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIFJlLXJlYWQgdGhlIGN1cnJlbnQgdGl0bGUgaW4gY2FzZSB0aGUgdXNlciByZW5hbWVkIHRoZSBzZXNzaW9uLlxuICAgIC8vIFJFUEwgd3JhcHBlciByZWFkcyBzZXNzaW9uIHN0b3JhZ2U7IGRhZW1vbiB3cmFwcGVyIHJldHVybnMgdGhlXG4gICAgLy8gb3JpZ2luYWwgdGl0bGUgKG5vdGhpbmcgdG8gcmVmcmVzaCkuXG4gICAgY29uc3QgY3VycmVudFRpdGxlID0gZ2V0Q3VycmVudFRpdGxlKClcblxuICAgIC8vIENyZWF0ZSBhIG5ldyBzZXNzaW9uIG9uIHRoZSBub3ctcmVnaXN0ZXJlZCBlbnZpcm9ubWVudFxuICAgIGNvbnN0IG5ld1Nlc3Npb25JZCA9IGF3YWl0IGNyZWF0ZVNlc3Npb24oe1xuICAgICAgZW52aXJvbm1lbnRJZCxcbiAgICAgIHRpdGxlOiBjdXJyZW50VGl0bGUsXG4gICAgICBnaXRSZXBvVXJsLFxuICAgICAgYnJhbmNoLFxuICAgICAgc2lnbmFsOiBBYm9ydFNpZ25hbC50aW1lb3V0KDE1XzAwMCksXG4gICAgfSlcblxuICAgIGlmICghbmV3U2Vzc2lvbklkKSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICdbYnJpZGdlOnJlcGxdIFNlc3Npb24gY3JlYXRpb24gZmFpbGVkIGR1cmluZyByZWNvbm5lY3Rpb24nLFxuICAgICAgKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gQmFpbCBvdXQgaWYgdGVhcmRvd24gc3RhcnRlZCBkdXJpbmcgc2Vzc2lvbiBjcmVhdGlvbiAodXAgdG8gMTVzKVxuICAgIGlmIChwb2xsQ29udHJvbGxlci5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAnW2JyaWRnZTpyZXBsXSBSZWNvbm5lY3QgYWJvcnRlZCBhZnRlciBzZXNzaW9uIGNyZWF0aW9uLCBjbGVhbmluZyB1cCcsXG4gICAgICApXG4gICAgICBhd2FpdCBhcmNoaXZlU2Vzc2lvbihuZXdTZXNzaW9uSWQpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjdXJyZW50U2Vzc2lvbklkID0gbmV3U2Vzc2lvbklkXG4gICAgLy8gUmUtcHVibGlzaCB0byB0aGUgUElEIGZpbGUgc28gcGVlciBkZWR1cCAocGVlclJlZ2lzdHJ5LnRzKSBwaWNrcyB1cCB0aGVcbiAgICAvLyBuZXcgSUQgXHUyMDE0IHNldFJlcGxCcmlkZ2VIYW5kbGUgb25seSBmaXJlcyBhdCBpbml0L3RlYXJkb3duLCBub3QgcmVjb25uZWN0LlxuICAgIHZvaWQgdXBkYXRlU2Vzc2lvbkJyaWRnZUlkKHRvQ29tcGF0U2Vzc2lvbklkKG5ld1Nlc3Npb25JZCkpLmNhdGNoKCgpID0+IHt9KVxuICAgIC8vIFJlc2V0IHBlci1zZXNzaW9uIHRyYW5zcG9ydCBzdGF0ZSBJTU1FRElBVEVMWSBhZnRlciB0aGUgc2Vzc2lvbiBzd2FwLFxuICAgIC8vIGJlZm9yZSBhbnkgYXdhaXQuIElmIHRoaXMgcnVucyBhZnRlciBgYXdhaXQgd3JpdGVCcmlkZ2VQb2ludGVyYCBiZWxvdyxcbiAgICAvLyB0aGVyZSdzIGEgd2luZG93IHdoZXJlIGhhbmRsZS5icmlkZ2VTZXNzaW9uSWQgYWxyZWFkeSByZXR1cm5zIHNlc3Npb24gQlxuICAgIC8vIGJ1dCBnZXRTU0VTZXF1ZW5jZU51bSgpIHN0aWxsIHJldHVybnMgc2Vzc2lvbiBBJ3Mgc2VxIFx1MjAxNCBhIGRhZW1vblxuICAgIC8vIHBlcnNpc3RTdGF0ZSgpIGluIHRoYXQgd2luZG93IHdyaXRlcyB7YnJpZGdlU2Vzc2lvbklkOiBCLCBzZXE6IE9MRF9BfSxcbiAgICAvLyB3aGljaCBQQVNTRVMgdGhlIHNlc3Npb24tSUQgdmFsaWRhdGlvbiBjaGVjayBhbmQgZGVmZWF0cyBpdCBlbnRpcmVseS5cbiAgICAvL1xuICAgIC8vIFRoZSBTU0Ugc2VxLW51bSBpcyBzY29wZWQgdG8gdGhlIHNlc3Npb24ncyBldmVudCBzdHJlYW0gXHUyMDE0IGNhcnJ5aW5nIGl0XG4gICAgLy8gb3ZlciBsZWF2ZXMgdGhlIHRyYW5zcG9ydCdzIGxhc3RTZXF1ZW5jZU51bSBzdHVjayBoaWdoIChzZXEgb25seVxuICAgIC8vIGFkdmFuY2VzIHdoZW4gcmVjZWl2ZWQgPiBsYXN0KSwgYW5kIGl0cyBuZXh0IGludGVybmFsIHJlY29ubmVjdCB3b3VsZFxuICAgIC8vIHNlbmQgZnJvbV9zZXF1ZW5jZV9udW09T0xEX1NFUSBhZ2FpbnN0IGEgc3RyZWFtIHN0YXJ0aW5nIGF0IDEgXHUyMTkyIGFsbFxuICAgIC8vIGV2ZW50cyBpbiB0aGUgZ2FwIHNpbGVudGx5IGRyb3BwZWQuIEluYm91bmQgVVVJRCBkZWR1cCBpcyBhbHNvXG4gICAgLy8gc2Vzc2lvbi1zY29wZWQuXG4gICAgbGFzdFRyYW5zcG9ydFNlcXVlbmNlTnVtID0gMFxuICAgIHJlY2VudEluYm91bmRVVUlEcy5jbGVhcigpXG4gICAgLy8gVGl0bGUgZGVyaXZhdGlvbiBpcyBzZXNzaW9uLXNjb3BlZCB0b286IGlmIHRoZSB1c2VyIHR5cGVkIGR1cmluZyB0aGVcbiAgICAvLyBjcmVhdGVTZXNzaW9uIGF3YWl0IGFib3ZlLCB0aGUgY2FsbGJhY2sgZmlyZWQgYWdhaW5zdCB0aGUgT0xEIGFyY2hpdmVkXG4gICAgLy8gc2Vzc2lvbiBJRCAoUEFUQ0ggbG9zdCkgYW5kIHRoZSBuZXcgc2Vzc2lvbiBnb3QgYGN1cnJlbnRUaXRsZWAgY2FwdHVyZWRcbiAgICAvLyBCRUZPUkUgdGhleSB0eXBlZC4gUmVzZXQgc28gdGhlIG5leHQgcHJvbXB0IGNhbiByZS1kZXJpdmUuIFNlbGYtXG4gICAgLy8gY29ycmVjdGluZzogaWYgdGhlIGNhbGxlcidzIHBvbGljeSBpcyBhbHJlYWR5IGRvbmUgKGV4cGxpY2l0IHRpdGxlIG9yXG4gICAgLy8gY291bnQgXHUyMjY1IDMpLCBpdCByZXR1cm5zIHRydWUgb24gdGhlIGZpcnN0IHBvc3QtcmVzZXQgY2FsbCBhbmQgcmUtbGF0Y2hlcy5cbiAgICB1c2VyTWVzc2FnZUNhbGxiYWNrRG9uZSA9ICFvblVzZXJNZXNzYWdlXG4gICAgbG9nRm9yRGVidWdnaW5nKGBbYnJpZGdlOnJlcGxdIFJlLWNyZWF0ZWQgc2Vzc2lvbjogJHtjdXJyZW50U2Vzc2lvbklkfWApXG5cbiAgICAvLyBSZXdyaXRlIHRoZSBjcmFzaC1yZWNvdmVyeSBwb2ludGVyIHdpdGggdGhlIG5ldyBJRHMgc28gYSBjcmFzaCBhZnRlclxuICAgIC8vIHRoaXMgcG9pbnQgcmVzdW1lcyB0aGUgcmlnaHQgc2Vzc2lvbi4gKFRoZSByZWNvbm5lY3QtaW4tcGxhY2UgcGF0aFxuICAgIC8vIGFib3ZlIGRvZXNuJ3QgdG91Y2ggdGhlIHBvaW50ZXIgXHUyMDE0IHNhbWUgc2Vzc2lvbiwgc2FtZSBlbnYuKVxuICAgIGF3YWl0IHdyaXRlQnJpZGdlUG9pbnRlcihkaXIsIHtcbiAgICAgIHNlc3Npb25JZDogY3VycmVudFNlc3Npb25JZCxcbiAgICAgIGVudmlyb25tZW50SWQsXG4gICAgICBzb3VyY2U6ICdyZXBsJyxcbiAgICB9KVxuXG4gICAgLy8gQ2xlYXIgZmx1c2hlZCBVVUlEcyBzbyBpbml0aWFsIG1lc3NhZ2VzIGFyZSByZS1zZW50IHRvIHRoZSBuZXcgc2Vzc2lvbi5cbiAgICAvLyBVVUlEcyBhcmUgc2NvcGVkIHBlci1zZXNzaW9uIG9uIHRoZSBzZXJ2ZXIsIHNvIHJlLWZsdXNoaW5nIGlzIHNhZmUuXG4gICAgcHJldmlvdXNseUZsdXNoZWRVVUlEcz8uY2xlYXIoKVxuXG5cbiAgICAvLyBSZXNldCB0aGUgY291bnRlciBzbyBpbmRlcGVuZGVudCByZWNvbm5lY3Rpb25zIGhvdXJzIGFwYXJ0IGRvbid0XG4gICAgLy8gZXhoYXVzdCB0aGUgbGltaXQgXHUyMDE0IGl0IGd1YXJkcyBhZ2FpbnN0IHJhcGlkIGNvbnNlY3V0aXZlIGZhaWx1cmVzLFxuICAgIC8vIG5vdCBsaWZldGltZSB0b3RhbC5cbiAgICBlbnZpcm9ubWVudFJlY3JlYXRpb25zID0gMFxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIC8vIEhlbHBlcjogZ2V0IHRoZSBjdXJyZW50IE9BdXRoIGFjY2VzcyB0b2tlbiBmb3Igc2Vzc2lvbiBpbmdyZXNzIGF1dGguXG4gIC8vIFVubGlrZSB0aGUgSldUIHBhdGgsIE9BdXRoIHRva2VucyBhcmUgcmVmcmVzaGVkIGJ5IHRoZSBzdGFuZGFyZCBPQXV0aFxuICAvLyBmbG93IFx1MjAxNCBubyBwcm9hY3RpdmUgc2NoZWR1bGVyIG5lZWRlZC5cbiAgZnVuY3Rpb24gZ2V0T0F1dGhUb2tlbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiBnZXRBY2Nlc3NUb2tlbigpXG4gIH1cblxuICAvLyBEcmFpbiBhbnkgbWVzc2FnZXMgdGhhdCB3ZXJlIHF1ZXVlZCBkdXJpbmcgdGhlIGluaXRpYWwgZmx1c2guXG4gIC8vIENhbGxlZCBhZnRlciB3cml0ZUJhdGNoIGNvbXBsZXRlcyAob3IgZmFpbHMpIHNvIHF1ZXVlZCBtZXNzYWdlc1xuICAvLyBhcmUgc2VudCBpbiBvcmRlciBhZnRlciB0aGUgaGlzdG9yaWNhbCBtZXNzYWdlcy5cbiAgZnVuY3Rpb24gZHJhaW5GbHVzaEdhdGUoKTogdm9pZCB7XG4gICAgY29uc3QgbXNncyA9IGZsdXNoR2F0ZS5lbmQoKVxuICAgIGlmIChtc2dzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG4gICAgaWYgKCF0cmFuc3BvcnQpIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFticmlkZ2U6cmVwbF0gQ2Fubm90IGRyYWluICR7bXNncy5sZW5ndGh9IHBlbmRpbmcgbWVzc2FnZShzKTogbm8gdHJhbnNwb3J0YCxcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBmb3IgKGNvbnN0IG1zZyBvZiBtc2dzKSB7XG4gICAgICByZWNlbnRQb3N0ZWRVVUlEcy5hZGQobXNnLnV1aWQpXG4gICAgfVxuICAgIGNvbnN0IHNka01lc3NhZ2VzID0gdG9TREtNZXNzYWdlcyhtc2dzKVxuICAgIGNvbnN0IGV2ZW50cyA9IHNka01lc3NhZ2VzLm1hcChzZGtNc2cgPT4gKHtcbiAgICAgIC4uLnNka01zZyxcbiAgICAgIHNlc3Npb25faWQ6IGN1cnJlbnRTZXNzaW9uSWQsXG4gICAgfSkpXG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFticmlkZ2U6cmVwbF0gRHJhaW5lZCAke21zZ3MubGVuZ3RofSBwZW5kaW5nIG1lc3NhZ2UocykgYWZ0ZXIgZmx1c2hgLFxuICAgIClcbiAgICB2b2lkIHRyYW5zcG9ydC53cml0ZUJhdGNoKGV2ZW50cylcbiAgfVxuXG4gIC8vIFRlYXJkb3duIHJlZmVyZW5jZSBcdTIwMTQgc2V0IGFmdGVyIGRlZmluaXRpb24gYmVsb3cuIEFsbCBjYWxsZXJzIGFyZSBhc3luY1xuICAvLyBjYWxsYmFja3MgdGhhdCBydW4gYWZ0ZXIgYXNzaWdubWVudCwgc28gdGhlIHJlZmVyZW5jZSBpcyBhbHdheXMgdmFsaWQuXG4gIGxldCBkb1RlYXJkb3duSW1wbDogKCgpID0+IFByb21pc2U8dm9pZD4pIHwgbnVsbCA9IG51bGxcbiAgZnVuY3Rpb24gdHJpZ2dlclRlYXJkb3duKCk6IHZvaWQge1xuICAgIHZvaWQgZG9UZWFyZG93bkltcGw/LigpXG4gIH1cblxuICAvKipcbiAgICogQm9keSBvZiB0aGUgdHJhbnNwb3J0J3Mgc2V0T25DbG9zZSBjYWxsYmFjaywgaG9pc3RlZCB0byBpbml0QnJpZGdlQ29yZVxuICAgKiBzY29wZSBzbyAvYnJpZGdlLWtpY2sgY2FuIGZpcmUgaXQgZGlyZWN0bHkuIHNldE9uQ2xvc2Ugd3JhcHMgdGhpcyB3aXRoXG4gICAqIGEgc3RhbGUtdHJhbnNwb3J0IGd1YXJkOyBkZWJ1Z0ZpcmVDbG9zZSBjYWxscyBpdCBiYXJlLlxuICAgKlxuICAgKiBXaXRoIGF1dG9SZWNvbm5lY3Q6dHJ1ZSwgdGhpcyBvbmx5IGZpcmVzIG9uOiBjbGVhbiBjbG9zZSAoMTAwMCksXG4gICAqIHBlcm1hbmVudCBzZXJ2ZXIgcmVqZWN0aW9uICg0MDAxLzEwMDIvNDAwMyksIG9yIDEwLW1pbiBidWRnZXRcbiAgICogZXhoYXVzdGlvbi4gVHJhbnNpZW50IGRyb3BzIGFyZSByZXRyaWVkIGludGVybmFsbHkgYnkgdGhlIHRyYW5zcG9ydC5cbiAgICovXG4gIGZ1bmN0aW9uIGhhbmRsZVRyYW5zcG9ydFBlcm1hbmVudENsb3NlKGNsb3NlQ29kZTogbnVtYmVyIHwgdW5kZWZpbmVkKTogdm9pZCB7XG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFticmlkZ2U6cmVwbF0gVHJhbnNwb3J0IHBlcm1hbmVudGx5IGNsb3NlZDogY29kZT0ke2Nsb3NlQ29kZX1gLFxuICAgIClcbiAgICBsb2dFdmVudCgndGVuZ3VfYnJpZGdlX3JlcGxfd3NfY2xvc2VkJywge1xuICAgICAgY29kZTogY2xvc2VDb2RlLFxuICAgIH0pXG4gICAgLy8gQ2FwdHVyZSBTU0Ugc2VxIGhpZ2gtd2F0ZXIgbWFyayBiZWZvcmUgbnVsbGluZy4gV2hlbiBjYWxsZWQgZnJvbVxuICAgIC8vIHNldE9uQ2xvc2UgdGhlIGd1YXJkIGd1YXJhbnRlZXMgdHJhbnNwb3J0ICE9PSBudWxsOyB3aGVuIGZpcmVkIGZyb21cbiAgICAvLyAvYnJpZGdlLWtpY2sgaXQgbWF5IGFscmVhZHkgYmUgbnVsbCAoZS5nLiBmaXJlZCB0d2ljZSkgXHUyMDE0IHNraXAuXG4gICAgaWYgKHRyYW5zcG9ydCkge1xuICAgICAgY29uc3QgY2xvc2VkU2VxID0gdHJhbnNwb3J0LmdldExhc3RTZXF1ZW5jZU51bSgpXG4gICAgICBpZiAoY2xvc2VkU2VxID4gbGFzdFRyYW5zcG9ydFNlcXVlbmNlTnVtKSB7XG4gICAgICAgIGxhc3RUcmFuc3BvcnRTZXF1ZW5jZU51bSA9IGNsb3NlZFNlcVxuICAgICAgfVxuICAgICAgdHJhbnNwb3J0ID0gbnVsbFxuICAgIH1cbiAgICAvLyBUcmFuc3BvcnQgaXMgZ29uZSBcdTIwMTQgd2FrZSB0aGUgcG9sbCBsb29wIG91dCBvZiBpdHMgYXQtY2FwYWNpdHlcbiAgICAvLyBoZWFydGJlYXQgc2xlZXAgc28gaXQncyBmYXN0LXBvbGxpbmcgYnkgdGhlIHRpbWUgdGhlIHJlY29ubmVjdFxuICAgIC8vIGJlbG93IGNvbXBsZXRlcyBhbmQgdGhlIHNlcnZlciByZS1xdWV1ZXMgd29yay5cbiAgICB3YWtlUG9sbExvb3AoKVxuICAgIC8vIFJlc2V0IGZsdXNoIHN0YXRlIHNvIHdyaXRlTWVzc2FnZXMoKSBoaXRzIHRoZSAhdHJhbnNwb3J0IGd1YXJkXG4gICAgLy8gKHdpdGggYSB3YXJuaW5nIGxvZykgaW5zdGVhZCBvZiBzaWxlbnRseSBxdWV1aW5nIGludG8gYSBidWZmZXJcbiAgICAvLyB0aGF0IHdpbGwgbmV2ZXIgYmUgZHJhaW5lZC4gVW5saWtlIG9uV29ya1JlY2VpdmVkICh3aGljaFxuICAgIC8vIHByZXNlcnZlcyBwZW5kaW5nIG1lc3NhZ2VzIGZvciB0aGUgbmV3IHRyYW5zcG9ydCksIG9uQ2xvc2UgaXNcbiAgICAvLyBhIHBlcm1hbmVudCBjbG9zZSBcdTIwMTQgbm8gbmV3IHRyYW5zcG9ydCB3aWxsIGRyYWluIHRoZXNlLlxuICAgIGNvbnN0IGRyb3BwZWQgPSBmbHVzaEdhdGUuZHJvcCgpXG4gICAgaWYgKGRyb3BwZWQgPiAwKSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBbYnJpZGdlOnJlcGxdIERyb3BwaW5nICR7ZHJvcHBlZH0gcGVuZGluZyBtZXNzYWdlKHMpIG9uIHRyYW5zcG9ydCBjbG9zZSAoY29kZT0ke2Nsb3NlQ29kZX0pYCxcbiAgICAgICAgeyBsZXZlbDogJ3dhcm4nIH0sXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKGNsb3NlQ29kZSA9PT0gMTAwMCkge1xuICAgICAgLy8gQ2xlYW4gY2xvc2UgXHUyMDE0IHNlc3Npb24gZW5kZWQgbm9ybWFsbHkuIFRlYXIgZG93biB0aGUgYnJpZGdlLlxuICAgICAgb25TdGF0ZUNoYW5nZT8uKCdmYWlsZWQnLCAnc2Vzc2lvbiBlbmRlZCcpXG4gICAgICBwb2xsQ29udHJvbGxlci5hYm9ydCgpXG4gICAgICB0cmlnZ2VyVGVhcmRvd24oKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gVHJhbnNwb3J0IHJlY29ubmVjdCBidWRnZXQgZXhoYXVzdGVkIG9yIHBlcm1hbmVudCBzZXJ2ZXJcbiAgICAvLyByZWplY3Rpb24uIEJ5IHRoaXMgcG9pbnQgdGhlIGVudiBoYXMgdXN1YWxseSBiZWVuIHJlYXBlZFxuICAgIC8vIHNlcnZlci1zaWRlIChCUSAyMDI2LTAzLTEyOiB+OTglIG9mIHdzX2Nsb3NlZCBuZXZlciByZWNvdmVyXG4gICAgLy8gdmlhIHBvbGwgYWxvbmUpLiBzdG9wV29yayhmb3JjZT1mYWxzZSkgY2FuJ3QgcmUtZGlzcGF0Y2ggd29ya1xuICAgIC8vIGZyb20gYW4gYXJjaGl2ZWQgZW52OyByZWNvbm5lY3RFbnZpcm9ubWVudFdpdGhTZXNzaW9uIGNhblxuICAgIC8vIHJlLWFjdGl2YXRlIGl0IHZpYSBQT1NUIC9icmlkZ2UvcmVjb25uZWN0LCBvciBmYWxsIHRocm91Z2hcbiAgICAvLyB0byBhIGZyZXNoIHNlc3Npb24gaWYgdGhlIGVudiBpcyB0cnVseSBnb25lLiBUaGUgcG9sbCBsb29wXG4gICAgLy8gKGFscmVhZHkgd29rZW4gYWJvdmUpIHBpY2tzIHVwIHRoZSByZS1xdWV1ZWQgd29yayBvbmNlXG4gICAgLy8gZG9SZWNvbm5lY3QgY29tcGxldGVzLlxuICAgIG9uU3RhdGVDaGFuZ2U/LihcbiAgICAgICdyZWNvbm5lY3RpbmcnLFxuICAgICAgYFJlbW90ZSBDb250cm9sIGNvbm5lY3Rpb24gbG9zdCAoY29kZSAke2Nsb3NlQ29kZX0pYCxcbiAgICApXG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFticmlkZ2U6cmVwbF0gVHJhbnNwb3J0IHJlY29ubmVjdCBidWRnZXQgZXhoYXVzdGVkIChjb2RlPSR7Y2xvc2VDb2RlfSksIGF0dGVtcHRpbmcgZW52IHJlY29ubmVjdGAsXG4gICAgKVxuICAgIHZvaWQgcmVjb25uZWN0RW52aXJvbm1lbnRXaXRoU2Vzc2lvbigpLnRoZW4oc3VjY2VzcyA9PiB7XG4gICAgICBpZiAoc3VjY2VzcykgcmV0dXJuXG4gICAgICAvLyBkb1JlY29ubmVjdCBoYXMgZm91ciBhYm9ydC1jaGVjayByZXR1cm4tZmFsc2Ugc2l0ZXMgZm9yXG4gICAgICAvLyB0ZWFyZG93bi1pbi1wcm9ncmVzcy4gRG9uJ3QgcG9sbHV0ZSB0aGUgQlEgZmFpbHVyZSBzaWduYWxcbiAgICAgIC8vIG9yIGRvdWJsZS10ZWFyZG93biB3aGVuIHRoZSB1c2VyIGp1c3QgcXVpdC5cbiAgICAgIGlmIChwb2xsQ29udHJvbGxlci5zaWduYWwuYWJvcnRlZCkgcmV0dXJuXG4gICAgICAvLyBkb1JlY29ubmVjdCByZXR1cm5zIGZhbHNlIChuZXZlciB0aHJvd3MpIG9uIGdlbnVpbmUgZmFpbHVyZS5cbiAgICAgIC8vIFRoZSBkYW5nZXJvdXMgY2FzZTogcmVnaXN0ZXJCcmlkZ2VFbnZpcm9ubWVudCBzdWNjZWVkZWQgKHNvXG4gICAgICAvLyBlbnZpcm9ubWVudElkIG5vdyBwb2ludHMgYXQgYSBmcmVzaCB2YWxpZCBlbnYpIGJ1dFxuICAgICAgLy8gY3JlYXRlU2Vzc2lvbiBmYWlsZWQgXHUyMDE0IHBvbGwgbG9vcCB3b3VsZCBwb2xsIGEgc2Vzc2lvbmxlc3NcbiAgICAgIC8vIGVudiBnZXR0aW5nIG51bGwgd29yayB3aXRoIG5vIGVycm9ycywgbmV2ZXIgaGl0dGluZyBhbnlcbiAgICAgIC8vIGdpdmUtdXAgcGF0aC4gVGVhciBkb3duIGV4cGxpY2l0bHkuXG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICdbYnJpZGdlOnJlcGxdIHJlY29ubmVjdEVudmlyb25tZW50V2l0aFNlc3Npb24gcmVzb2x2ZWQgZmFsc2UgXHUyMDE0IHRlYXJpbmcgZG93bicsXG4gICAgICApXG4gICAgICBsb2dFdmVudCgndGVuZ3VfYnJpZGdlX3JlcGxfcmVjb25uZWN0X2ZhaWxlZCcsIHtcbiAgICAgICAgY2xvc2VfY29kZTogY2xvc2VDb2RlLFxuICAgICAgfSlcbiAgICAgIG9uU3RhdGVDaGFuZ2U/LignZmFpbGVkJywgJ3JlY29ubmVjdGlvbiBmYWlsZWQnKVxuICAgICAgdHJpZ2dlclRlYXJkb3duKClcbiAgICB9KVxuICB9XG5cbiAgLy8gQW50LW9ubHk6IFNJR1VTUjIgXHUyMTkyIGZvcmNlIGRvUmVjb25uZWN0KCkgZm9yIG1hbnVhbCB0ZXN0aW5nLiBTa2lwcyB0aGVcbiAgLy8gfjMwcyBwb2xsIHdhaXQgXHUyMDE0IGZpcmUtYW5kLW9ic2VydmUgaW4gdGhlIGRlYnVnIGxvZyBpbW1lZGlhdGVseS5cbiAgLy8gV2luZG93cyBoYXMgbm8gVVNSIHNpZ25hbHM7IGBwcm9jZXNzLm9uYCB3b3VsZCB0aHJvdyB0aGVyZS5cbiAgbGV0IHNpZ3VzcjJIYW5kbGVyOiAoKCkgPT4gdm9pZCkgfCB1bmRlZmluZWRcbiAgaWYgKHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCcgJiYgcHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ3dpbjMyJykge1xuICAgIHNpZ3VzcjJIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAnW2JyaWRnZTpyZXBsXSBTSUdVU1IyIHJlY2VpdmVkIFx1MjAxNCBmb3JjaW5nIGRvUmVjb25uZWN0KCkgZm9yIHRlc3RpbmcnLFxuICAgICAgKVxuICAgICAgdm9pZCByZWNvbm5lY3RFbnZpcm9ubWVudFdpdGhTZXNzaW9uKClcbiAgICB9XG4gICAgcHJvY2Vzcy5vbignU0lHVVNSMicsIHNpZ3VzcjJIYW5kbGVyKVxuICB9XG5cbiAgLy8gQW50LW9ubHk6IC9icmlkZ2Uta2ljayBmYXVsdCBpbmplY3Rpb24uIGhhbmRsZVRyYW5zcG9ydFBlcm1hbmVudENsb3NlXG4gIC8vIGlzIGRlZmluZWQgYmVsb3cgYW5kIGFzc2lnbmVkIGludG8gdGhpcyBzbG90IHNvIHRoZSBzbGFzaCBjb21tYW5kIGNhblxuICAvLyBpbnZva2UgaXQgZGlyZWN0bHkgXHUyMDE0IHRoZSByZWFsIHNldE9uQ2xvc2UgY2FsbGJhY2sgaXMgYnVyaWVkIGluc2lkZVxuICAvLyB3aXJlVHJhbnNwb3J0IHdoaWNoIGlzIGl0c2VsZiBpbnNpZGUgb25Xb3JrUmVjZWl2ZWQuXG4gIGxldCBkZWJ1Z0ZpcmVDbG9zZTogKChjb2RlOiBudW1iZXIpID0+IHZvaWQpIHwgbnVsbCA9IG51bGxcbiAgaWYgKHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCcpIHtcbiAgICByZWdpc3RlckJyaWRnZURlYnVnSGFuZGxlKHtcbiAgICAgIGZpcmVDbG9zZTogY29kZSA9PiB7XG4gICAgICAgIGlmICghZGVidWdGaXJlQ2xvc2UpIHtcbiAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoJ1ticmlkZ2U6ZGVidWddIGZpcmVDbG9zZTogbm8gdHJhbnNwb3J0IHdpcmVkIHlldCcpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKGBbYnJpZGdlOmRlYnVnXSBmaXJlQ2xvc2UoJHtjb2RlfSkgXHUyMDE0IGluamVjdGluZ2ApXG4gICAgICAgIGRlYnVnRmlyZUNsb3NlKGNvZGUpXG4gICAgICB9LFxuICAgICAgZm9yY2VSZWNvbm5lY3Q6ICgpID0+IHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKCdbYnJpZGdlOmRlYnVnXSBmb3JjZVJlY29ubmVjdCBcdTIwMTQgaW5qZWN0aW5nJylcbiAgICAgICAgdm9pZCByZWNvbm5lY3RFbnZpcm9ubWVudFdpdGhTZXNzaW9uKClcbiAgICAgIH0sXG4gICAgICBpbmplY3RGYXVsdDogaW5qZWN0QnJpZGdlRmF1bHQsXG4gICAgICB3YWtlUG9sbExvb3AsXG4gICAgICBkZXNjcmliZTogKCkgPT5cbiAgICAgICAgYGVudj0ke2Vudmlyb25tZW50SWR9IHNlc3Npb249JHtjdXJyZW50U2Vzc2lvbklkfSB0cmFuc3BvcnQ9JHt0cmFuc3BvcnQ/LmdldFN0YXRlTGFiZWwoKSA/PyAnbnVsbCd9IHdvcmtJZD0ke2N1cnJlbnRXb3JrSWQgPz8gJ251bGwnfWAsXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IHBvbGxPcHRzID0ge1xuICAgIGFwaSxcbiAgICBnZXRDcmVkZW50aWFsczogKCkgPT4gKHsgZW52aXJvbm1lbnRJZCwgZW52aXJvbm1lbnRTZWNyZXQgfSksXG4gICAgc2lnbmFsOiBwb2xsQ29udHJvbGxlci5zaWduYWwsXG4gICAgZ2V0UG9sbEludGVydmFsQ29uZmlnLFxuICAgIG9uU3RhdGVDaGFuZ2UsXG4gICAgZ2V0V3NTdGF0ZTogKCkgPT4gdHJhbnNwb3J0Py5nZXRTdGF0ZUxhYmVsKCkgPz8gJ251bGwnLFxuICAgIC8vIFJFUEwgYnJpZGdlIGlzIHNpbmdsZS1zZXNzaW9uOiBoYXZpbmcgYW55IHRyYW5zcG9ydCA9PSBhdCBjYXBhY2l0eS5cbiAgICAvLyBObyBuZWVkIHRvIGNoZWNrIGlzQ29ubmVjdGVkU3RhdHVzKCkgXHUyMDE0IGV2ZW4gd2hpbGUgdGhlIHRyYW5zcG9ydCBpc1xuICAgIC8vIGF1dG8tcmVjb25uZWN0aW5nIGludGVybmFsbHkgKHVwIHRvIDEwIG1pbiksIHBvbGwgaXMgaGVhcnRiZWF0LW9ubHkuXG4gICAgaXNBdENhcGFjaXR5OiAoKSA9PiB0cmFuc3BvcnQgIT09IG51bGwsXG4gICAgY2FwYWNpdHlTaWduYWwsXG4gICAgb25GYXRhbEVycm9yOiB0cmlnZ2VyVGVhcmRvd24sXG4gICAgZ2V0SGVhcnRiZWF0SW5mbzogKCkgPT4ge1xuICAgICAgaWYgKCFjdXJyZW50V29ya0lkIHx8ICFjdXJyZW50SW5ncmVzc1Rva2VuKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbnZpcm9ubWVudElkLFxuICAgICAgICB3b3JrSWQ6IGN1cnJlbnRXb3JrSWQsXG4gICAgICAgIHNlc3Npb25Ub2tlbjogY3VycmVudEluZ3Jlc3NUb2tlbixcbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIFdvcmstaXRlbSBKV1QgZXhwaXJlZCAob3Igd29yayBnb25lKS4gVGhlIHRyYW5zcG9ydCBpcyB1c2VsZXNzIFx1MjAxNFxuICAgIC8vIFNTRSByZWNvbm5lY3RzIGFuZCBDQ1Igd3JpdGVzIHVzZSB0aGUgc2FtZSBzdGFsZSB0b2tlbi4gV2l0aG91dFxuICAgIC8vIHRoaXMgY2FsbGJhY2sgdGhlIHBvbGwgbG9vcCB3b3VsZCBkbyBhIDEwLW1pbiBhdC1jYXBhY2l0eSBiYWNrb2ZmLFxuICAgIC8vIGR1cmluZyB3aGljaCB0aGUgd29yayBsZWFzZSAoMzAwcyBUVEwpIGV4cGlyZXMgYW5kIHRoZSBzZXJ2ZXIgc3RvcHNcbiAgICAvLyBmb3J3YXJkaW5nIHByb21wdHMgXHUyMTkyIH4yNS1taW4gZGVhZCB3aW5kb3cgb2JzZXJ2ZWQgaW4gZGFlbW9uIGxvZ3MuXG4gICAgLy8gS2lsbCB0aGUgdHJhbnNwb3J0ICsgd29yayBzdGF0ZSBzbyBpc0F0Q2FwYWNpdHkoKT1mYWxzZTsgdGhlIGxvb3BcbiAgICAvLyBmYXN0LXBvbGxzIGFuZCBwaWNrcyB1cCB0aGUgc2VydmVyJ3MgcmUtZGlzcGF0Y2hlZCB3b3JrIGluIHNlY29uZHMuXG4gICAgb25IZWFydGJlYXRGYXRhbDogKGVycjogQnJpZGdlRmF0YWxFcnJvcikgPT4ge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgW2JyaWRnZTpyZXBsXSBoZWFydGJlYXRXb3JrIGZhdGFsIChzdGF0dXM9JHtlcnIuc3RhdHVzfSkgXHUyMDE0IHRlYXJpbmcgZG93biB3b3JrIGl0ZW0gZm9yIGZhc3QgcmUtZGlzcGF0Y2hgLFxuICAgICAgKVxuICAgICAgaWYgKHRyYW5zcG9ydCkge1xuICAgICAgICBjb25zdCBzZXEgPSB0cmFuc3BvcnQuZ2V0TGFzdFNlcXVlbmNlTnVtKClcbiAgICAgICAgaWYgKHNlcSA+IGxhc3RUcmFuc3BvcnRTZXF1ZW5jZU51bSkge1xuICAgICAgICAgIGxhc3RUcmFuc3BvcnRTZXF1ZW5jZU51bSA9IHNlcVxuICAgICAgICB9XG4gICAgICAgIHRyYW5zcG9ydC5jbG9zZSgpXG4gICAgICAgIHRyYW5zcG9ydCA9IG51bGxcbiAgICAgIH1cbiAgICAgIGZsdXNoR2F0ZS5kcm9wKClcbiAgICAgIC8vIGZvcmNlPWZhbHNlIFx1MjE5MiBzZXJ2ZXIgcmUtcXVldWVzLiBMaWtlbHkgYWxyZWFkeSBleHBpcmVkLCBidXRcbiAgICAgIC8vIGlkZW1wb3RlbnQgYW5kIG1ha2VzIHJlLWRpc3BhdGNoIGltbWVkaWF0ZSBpZiBub3QuXG4gICAgICBpZiAoY3VycmVudFdvcmtJZCkge1xuICAgICAgICB2b2lkIGFwaVxuICAgICAgICAgIC5zdG9wV29yayhlbnZpcm9ubWVudElkLCBjdXJyZW50V29ya0lkLCBmYWxzZSlcbiAgICAgICAgICAuY2F0Y2goKGU6IHVua25vd24pID0+IHtcbiAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgYFticmlkZ2U6cmVwbF0gc3RvcFdvcmsgYWZ0ZXIgaGVhcnRiZWF0IGZhdGFsOiAke2Vycm9yTWVzc2FnZShlKX1gLFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICB9XG4gICAgICBjdXJyZW50V29ya0lkID0gbnVsbFxuICAgICAgY3VycmVudEluZ3Jlc3NUb2tlbiA9IG51bGxcbiAgICAgIHdha2VQb2xsTG9vcCgpXG4gICAgICBvblN0YXRlQ2hhbmdlPy4oXG4gICAgICAgICdyZWNvbm5lY3RpbmcnLFxuICAgICAgICAnV29yayBpdGVtIGxlYXNlIGV4cGlyZWQsIGZldGNoaW5nIGZyZXNoIHRva2VuJyxcbiAgICAgIClcbiAgICB9LFxuICAgIGFzeW5jIG9uRW52aXJvbm1lbnRMb3N0KCkge1xuICAgICAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IHJlY29ubmVjdEVudmlyb25tZW50V2l0aFNlc3Npb24oKVxuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgICByZXR1cm4geyBlbnZpcm9ubWVudElkLCBlbnZpcm9ubWVudFNlY3JldCB9XG4gICAgfSxcbiAgICBvbldvcmtSZWNlaXZlZDogKFxuICAgICAgd29ya1Nlc3Npb25JZDogc3RyaW5nLFxuICAgICAgaW5ncmVzc1Rva2VuOiBzdHJpbmcsXG4gICAgICB3b3JrSWQ6IHN0cmluZyxcbiAgICAgIHNlcnZlclVzZUNjclYyOiBib29sZWFuLFxuICAgICkgPT4ge1xuICAgICAgLy8gV2hlbiBuZXcgd29yayBhcnJpdmVzIHdoaWxlIGEgdHJhbnNwb3J0IGlzIGFscmVhZHkgb3BlbiwgdGhlXG4gICAgICAvLyBzZXJ2ZXIgaGFzIGRlY2lkZWQgdG8gcmUtZGlzcGF0Y2ggKGUuZy4gdG9rZW4gcm90YXRpb24sIHNlcnZlclxuICAgICAgLy8gcmVzdGFydCkuIENsb3NlIHRoZSBleGlzdGluZyB0cmFuc3BvcnQgYW5kIHJlY29ubmVjdCBcdTIwMTQgZGlzY2FyZGluZ1xuICAgICAgLy8gdGhlIHdvcmsgY2F1c2VzIGEgc3R1Y2sgJ3JlY29ubmVjdGluZycgc3RhdGUgaWYgdGhlIG9sZCBXUyBkaWVzXG4gICAgICAvLyBzaG9ydGx5IGFmdGVyICh0aGUgc2VydmVyIHdvbid0IHJlLWRpc3BhdGNoIGEgd29yayBpdGVtIGl0XG4gICAgICAvLyBhbHJlYWR5IGRlbGl2ZXJlZCkuXG4gICAgICAvLyBpbmdyZXNzVG9rZW4gKEpXVCkgaXMgc3RvcmVkIGZvciBoZWFydGJlYXQgYXV0aCAoYm90aCB2MSBhbmQgdjIpLlxuICAgICAgLy8gVHJhbnNwb3J0IGF1dGggZGl2ZXJnZXMgXHUyMDE0IHNlZSB0aGUgdjEvdjIgc3BsaXQgYmVsb3cuXG4gICAgICBpZiAodHJhbnNwb3J0Py5pc0Nvbm5lY3RlZFN0YXR1cygpKSB7XG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICBgW2JyaWRnZTpyZXBsXSBXb3JrIHJlY2VpdmVkIHdoaWxlIHRyYW5zcG9ydCBjb25uZWN0ZWQsIHJlcGxhY2luZyB3aXRoIGZyZXNoIHRva2VuICh3b3JrSWQ9JHt3b3JrSWR9KWAsXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgW2JyaWRnZTpyZXBsXSBXb3JrIHJlY2VpdmVkOiB3b3JrSWQ9JHt3b3JrSWR9IHdvcmtTZXNzaW9uSWQ9JHt3b3JrU2Vzc2lvbklkfSBjdXJyZW50U2Vzc2lvbklkPSR7Y3VycmVudFNlc3Npb25JZH0gbWF0Y2g9JHtzYW1lU2Vzc2lvbklkKHdvcmtTZXNzaW9uSWQsIGN1cnJlbnRTZXNzaW9uSWQpfWAsXG4gICAgICApXG5cbiAgICAgIC8vIFJlZnJlc2ggdGhlIGNyYXNoLXJlY292ZXJ5IHBvaW50ZXIncyBtdGltZS4gU3RhbGVuZXNzIGNoZWNrcyBmaWxlXG4gICAgICAvLyBtdGltZSAobm90IGVtYmVkZGVkIHRpbWVzdGFtcCkgc28gdGhpcyByZS13cml0ZSBidW1wcyB0aGUgY2xvY2sgXHUyMDE0XG4gICAgICAvLyBhIDVoKyBzZXNzaW9uIHRoYXQgY3Jhc2hlcyBzdGlsbCBoYXMgYSBmcmVzaCBwb2ludGVyLiBGaXJlcyBvbmNlXG4gICAgICAvLyBwZXIgd29yayBkaXNwYXRjaCAoaW5mcmVxdWVudCBcdTIwMTQgYm91bmRlZCBieSB1c2VyIG1lc3NhZ2UgcmF0ZSkuXG4gICAgICB2b2lkIHdyaXRlQnJpZGdlUG9pbnRlcihkaXIsIHtcbiAgICAgICAgc2Vzc2lvbklkOiBjdXJyZW50U2Vzc2lvbklkLFxuICAgICAgICBlbnZpcm9ubWVudElkLFxuICAgICAgICBzb3VyY2U6ICdyZXBsJyxcbiAgICAgIH0pXG5cbiAgICAgIC8vIFJlamVjdCBmb3JlaWduIHNlc3Npb24gSURzIFx1MjAxNCB0aGUgc2VydmVyIHNob3VsZG4ndCBhc3NpZ24gc2Vzc2lvbnNcbiAgICAgIC8vIGZyb20gb3RoZXIgZW52aXJvbm1lbnRzLiBTaW5jZSB3ZSBjcmVhdGUgZW52K3Nlc3Npb24gYXMgYSBwYWlyLFxuICAgICAgLy8gYSBtaXNtYXRjaCBpbmRpY2F0ZXMgYW4gdW5leHBlY3RlZCBzZXJ2ZXItc2lkZSByZWFzc2lnbm1lbnQuXG4gICAgICAvL1xuICAgICAgLy8gQ29tcGFyZSBieSB1bmRlcmx5aW5nIFVVSUQsIG5vdCBieSB0YWdnZWQtSUQgcHJlZml4LiBXaGVuIENDUlxuICAgICAgLy8gdjIncyBjb21wYXQgbGF5ZXIgc2VydmVzIHRoZSBzZXNzaW9uLCBjcmVhdGVCcmlkZ2VTZXNzaW9uIGdldHNcbiAgICAgIC8vIHNlc3Npb25fKiBmcm9tIHRoZSB2MS1mYWNpbmcgQVBJIChjb21wYXQvY29udmVydC5nbzo0MSkgYnV0IHRoZVxuICAgICAgLy8gaW5mcmFzdHJ1Y3R1cmUgbGF5ZXIgZGVsaXZlcnMgY3NlXyogaW4gdGhlIHdvcmsgcXVldWVcbiAgICAgIC8vIChjb250YWluZXJfbWFuYWdlci5nbzoxMjkpLiBTYW1lIFVVSUQsIGRpZmZlcmVudCB0YWcuXG4gICAgICBpZiAoIXNhbWVTZXNzaW9uSWQod29ya1Nlc3Npb25JZCwgY3VycmVudFNlc3Npb25JZCkpIHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgIGBbYnJpZGdlOnJlcGxdIFJlamVjdGluZyBmb3JlaWduIHNlc3Npb246IGV4cGVjdGVkPSR7Y3VycmVudFNlc3Npb25JZH0gZ290PSR7d29ya1Nlc3Npb25JZH1gLFxuICAgICAgICApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjdXJyZW50V29ya0lkID0gd29ya0lkXG4gICAgICBjdXJyZW50SW5ncmVzc1Rva2VuID0gaW5ncmVzc1Rva2VuXG5cbiAgICAgIC8vIFNlcnZlciBkZWNpZGVzIHBlci1zZXNzaW9uIChzZWNyZXQudXNlX2NvZGVfc2Vzc2lvbnMgZnJvbSB0aGUgd29ya1xuICAgICAgLy8gc2VjcmV0LCB0aHJlYWRlZCB0aHJvdWdoIHJ1bldvcmtQb2xsTG9vcCkuIFRoZSBlbnYgdmFyIGlzIGFuIGFudC1kZXZcbiAgICAgIC8vIG92ZXJyaWRlIGZvciBmb3JjaW5nIHYyIGJlZm9yZSB0aGUgc2VydmVyIGZsYWcgaXMgb24gZm9yIHlvdXIgdXNlciBcdTIwMTRcbiAgICAgIC8vIHJlcXVpcmVzIGNjcl92Ml9jb21wYXRfZW5hYmxlZCBzZXJ2ZXItc2lkZSBvciByZWdpc3RlcldvcmtlciA0MDRzLlxuICAgICAgLy9cbiAgICAgIC8vIEtlcHQgc2VwYXJhdGUgZnJvbSBDTEFVREVfQ09ERV9VU0VfQ0NSX1YyICh0aGUgY2hpbGQtU0RLIHRyYW5zcG9ydFxuICAgICAgLy8gc2VsZWN0b3Igc2V0IGJ5IHNlc3Npb25SdW5uZXIvZW52aXJvbm1lbnQtbWFuYWdlcikgdG8gYXZvaWQgdGhlXG4gICAgICAvLyBpbmhlcml0YW5jZSBoYXphcmQgaW4gc3Bhd24gbW9kZSB3aGVyZSB0aGUgcGFyZW50J3Mgb3JjaGVzdHJhdG9yXG4gICAgICAvLyB2YXIgd291bGQgbGVhayBpbnRvIGEgdjEgY2hpbGQuXG4gICAgICBjb25zdCB1c2VDY3JWMiA9XG4gICAgICAgIHNlcnZlclVzZUNjclYyIHx8IGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkNMQVVERV9CUklER0VfVVNFX0NDUl9WMilcblxuICAgICAgLy8gQXV0aCBpcyB0aGUgb25lIHBsYWNlIHYxIGFuZCB2MiBkaXZlcmdlIGhhcmQ6XG4gICAgICAvL1xuICAgICAgLy8gLSB2MSAoU2Vzc2lvbi1JbmdyZXNzKTogYWNjZXB0cyBPQXV0aCBPUiBKV1QuIFdlIHByZWZlciBPQXV0aFxuICAgICAgLy8gICBiZWNhdXNlIHRoZSBzdGFuZGFyZCBPQXV0aCByZWZyZXNoIGZsb3cgaGFuZGxlcyBleHBpcnkgXHUyMDE0IG5vXG4gICAgICAvLyAgIHNlcGFyYXRlIEpXVCByZWZyZXNoIHNjaGVkdWxlciBuZWVkZWQuXG4gICAgICAvL1xuICAgICAgLy8gLSB2MiAoQ0NSIC93b3JrZXIvKik6IFJFUVVJUkVTIHRoZSBKV1QuIHJlZ2lzdGVyX3dvcmtlci5nbzozMlxuICAgICAgLy8gICB2YWxpZGF0ZXMgdGhlIHNlc3Npb25faWQgY2xhaW0sIHdoaWNoIE9BdXRoIHRva2VucyBkb24ndCBjYXJyeS5cbiAgICAgIC8vICAgVGhlIEpXVCBmcm9tIHRoZSB3b3JrIHNlY3JldCBoYXMgYm90aCB0aGF0IGNsYWltIGFuZCB0aGUgd29ya2VyXG4gICAgICAvLyAgIHJvbGUgKGVudmlyb25tZW50X2F1dGgucHk6ODU2KS4gSldUIHJlZnJlc2g6IHdoZW4gaXQgZXhwaXJlcyB0aGVcbiAgICAgIC8vICAgc2VydmVyIHJlLWRpc3BhdGNoZXMgd29yayB3aXRoIGEgZnJlc2ggb25lLCBhbmQgb25Xb3JrUmVjZWl2ZWRcbiAgICAgIC8vICAgZmlyZXMgYWdhaW4uIGNyZWF0ZVYyUmVwbFRyYW5zcG9ydCBzdG9yZXMgaXQgdmlhXG4gICAgICAvLyAgIHVwZGF0ZVNlc3Npb25JbmdyZXNzQXV0aFRva2VuKCkgYmVmb3JlIHRvdWNoaW5nIHRoZSBuZXR3b3JrLlxuICAgICAgbGV0IHYxT2F1dGhUb2tlbjogc3RyaW5nIHwgdW5kZWZpbmVkXG4gICAgICBpZiAoIXVzZUNjclYyKSB7XG4gICAgICAgIHYxT2F1dGhUb2tlbiA9IGdldE9BdXRoVG9rZW4oKVxuICAgICAgICBpZiAoIXYxT2F1dGhUb2tlbikge1xuICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICdbYnJpZGdlOnJlcGxdIE5vIE9BdXRoIHRva2VuIGF2YWlsYWJsZSBmb3Igc2Vzc2lvbiBpbmdyZXNzLCBza2lwcGluZyB3b3JrJyxcbiAgICAgICAgICApXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlU2Vzc2lvbkluZ3Jlc3NBdXRoVG9rZW4odjFPYXV0aFRva2VuKVxuICAgICAgfVxuICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2JyaWRnZV9yZXBsX3dvcmtfcmVjZWl2ZWQnLCB7fSlcblxuICAgICAgLy8gQ2xvc2UgdGhlIHByZXZpb3VzIHRyYW5zcG9ydC4gTnVsbGlmeSBCRUZPUkUgY2FsbGluZyBjbG9zZSgpIHNvXG4gICAgICAvLyB0aGUgY2xvc2UgY2FsbGJhY2sgZG9lc24ndCB0cmVhdCB0aGUgcHJvZ3JhbW1hdGljIGNsb3NlIGFzXG4gICAgICAvLyBcInNlc3Npb24gZW5kZWQgbm9ybWFsbHlcIiBhbmQgdHJpZ2dlciBhIGZ1bGwgdGVhcmRvd24uXG4gICAgICBpZiAodHJhbnNwb3J0KSB7XG4gICAgICAgIGNvbnN0IG9sZFRyYW5zcG9ydCA9IHRyYW5zcG9ydFxuICAgICAgICB0cmFuc3BvcnQgPSBudWxsXG4gICAgICAgIC8vIENhcHR1cmUgdGhlIFNTRSBzZXF1ZW5jZSBoaWdoLXdhdGVyIG1hcmsgc28gdGhlIG5leHQgdHJhbnNwb3J0XG4gICAgICAgIC8vIHJlc3VtZXMgdGhlIHN0cmVhbSBpbnN0ZWFkIG9mIHJlcGxheWluZyBmcm9tIHNlcSAwLiBVc2UgbWF4KCkgXHUyMDE0XG4gICAgICAgIC8vIGEgdHJhbnNwb3J0IHRoYXQgZGllZCBlYXJseSAobmV2ZXIgcmVjZWl2ZWQgYW55IGZyYW1lcykgd291bGRcbiAgICAgICAgLy8gb3RoZXJ3aXNlIHJlc2V0IGEgbm9uLXplcm8gbWFyayBiYWNrIHRvIDAuXG4gICAgICAgIGNvbnN0IG9sZFNlcSA9IG9sZFRyYW5zcG9ydC5nZXRMYXN0U2VxdWVuY2VOdW0oKVxuICAgICAgICBpZiAob2xkU2VxID4gbGFzdFRyYW5zcG9ydFNlcXVlbmNlTnVtKSB7XG4gICAgICAgICAgbGFzdFRyYW5zcG9ydFNlcXVlbmNlTnVtID0gb2xkU2VxXG4gICAgICAgIH1cbiAgICAgICAgb2xkVHJhbnNwb3J0LmNsb3NlKClcbiAgICAgIH1cbiAgICAgIC8vIFJlc2V0IGZsdXNoIHN0YXRlIFx1MjAxNCB0aGUgb2xkIGZsdXNoIChpZiBhbnkpIGlzIG5vIGxvbmdlciByZWxldmFudC5cbiAgICAgIC8vIFByZXNlcnZlIHBlbmRpbmcgbWVzc2FnZXMgc28gdGhleSdyZSBkcmFpbmVkIGFmdGVyIHRoZSBuZXdcbiAgICAgIC8vIHRyYW5zcG9ydCdzIGZsdXNoIGNvbXBsZXRlcyAodGhlIGhvb2sgaGFzIGFscmVhZHkgYWR2YW5jZWQgaXRzXG4gICAgICAvLyBsYXN0V3JpdHRlbkluZGV4IGFuZCB3b24ndCByZS1zZW5kIHRoZW0pLlxuICAgICAgZmx1c2hHYXRlLmRlYWN0aXZhdGUoKVxuXG4gICAgICAvLyBDbG9zdXJlIGFkYXB0ZXIgb3ZlciB0aGUgc2hhcmVkIGhhbmRsZVNlcnZlckNvbnRyb2xSZXF1ZXN0IFx1MjAxNFxuICAgICAgLy8gY2FwdHVyZXMgdHJhbnNwb3J0L2N1cnJlbnRTZXNzaW9uSWQgc28gdGhlIHRyYW5zcG9ydC5zZXRPbkRhdGFcbiAgICAgIC8vIGNhbGxiYWNrIGJlbG93IGRvZXNuJ3QgbmVlZCB0byB0aHJlYWQgdGhlbSB0aHJvdWdoLlxuICAgICAgY29uc3Qgb25TZXJ2ZXJDb250cm9sUmVxdWVzdCA9IChyZXF1ZXN0OiBTREtDb250cm9sUmVxdWVzdCk6IHZvaWQgPT5cbiAgICAgICAgaGFuZGxlU2VydmVyQ29udHJvbFJlcXVlc3QocmVxdWVzdCwge1xuICAgICAgICAgIHRyYW5zcG9ydCxcbiAgICAgICAgICBzZXNzaW9uSWQ6IGN1cnJlbnRTZXNzaW9uSWQsXG4gICAgICAgICAgb25JbnRlcnJ1cHQsXG4gICAgICAgICAgb25TZXRNb2RlbCxcbiAgICAgICAgICBvblNldE1heFRoaW5raW5nVG9rZW5zLFxuICAgICAgICAgIG9uU2V0UGVybWlzc2lvbk1vZGUsXG4gICAgICAgIH0pXG5cbiAgICAgIGxldCBpbml0aWFsRmx1c2hEb25lID0gZmFsc2VcblxuICAgICAgLy8gV2lyZSBjYWxsYmFja3Mgb250byBhIGZyZXNobHkgY29uc3RydWN0ZWQgdHJhbnNwb3J0IGFuZCBjb25uZWN0LlxuICAgICAgLy8gRXh0cmFjdGVkIHNvIHRoZSAoc3luYykgdjEgYW5kIChhc3luYykgdjIgY29uc3RydWN0aW9uIHBhdGhzIGNhblxuICAgICAgLy8gc2hhcmUgdGhlIGlkZW50aWNhbCBjYWxsYmFjayArIGZsdXNoIG1hY2hpbmVyeS5cbiAgICAgIGNvbnN0IHdpcmVUcmFuc3BvcnQgPSAobmV3VHJhbnNwb3J0OiBSZXBsQnJpZGdlVHJhbnNwb3J0KTogdm9pZCA9PiB7XG4gICAgICAgIHRyYW5zcG9ydCA9IG5ld1RyYW5zcG9ydFxuXG4gICAgICAgIG5ld1RyYW5zcG9ydC5zZXRPbkNvbm5lY3QoKCkgPT4ge1xuICAgICAgICAgIC8vIEd1YXJkOiBpZiB0cmFuc3BvcnQgd2FzIHJlcGxhY2VkIGJ5IGEgbmV3ZXIgb25Xb3JrUmVjZWl2ZWQgY2FsbFxuICAgICAgICAgIC8vIHdoaWxlIHRoZSBXUyB3YXMgY29ubmVjdGluZywgaWdub3JlIHRoaXMgc3RhbGUgY2FsbGJhY2suXG4gICAgICAgICAgaWYgKHRyYW5zcG9ydCAhPT0gbmV3VHJhbnNwb3J0KSByZXR1cm5cblxuICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZygnW2JyaWRnZTpyZXBsXSBJbmdyZXNzIHRyYW5zcG9ydCBjb25uZWN0ZWQnKVxuICAgICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9icmlkZ2VfcmVwbF93c19jb25uZWN0ZWQnLCB7fSlcblxuICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgZW52IHZhciB3aXRoIHRoZSBsYXRlc3QgT0F1dGggdG9rZW4gc28gUE9TVCB3cml0ZXNcbiAgICAgICAgICAvLyAod2hpY2ggcmVhZCB2aWEgZ2V0U2Vzc2lvbkluZ3Jlc3NBdXRoVG9rZW4oKSkgdXNlIGEgZnJlc2ggdG9rZW4uXG4gICAgICAgICAgLy8gdjIgc2tpcHMgdGhpcyBcdTIwMTQgY3JlYXRlVjJSZXBsVHJhbnNwb3J0IGFscmVhZHkgc3RvcmVkIHRoZSBKV1QsXG4gICAgICAgICAgLy8gYW5kIG92ZXJ3cml0aW5nIGl0IHdpdGggT0F1dGggd291bGQgYnJlYWsgc3Vic2VxdWVudCAvd29ya2VyLypcbiAgICAgICAgICAvLyByZXF1ZXN0cyAoc2Vzc2lvbl9pZCBjbGFpbSBjaGVjaykuXG4gICAgICAgICAgaWYgKCF1c2VDY3JWMikge1xuICAgICAgICAgICAgY29uc3QgZnJlc2hUb2tlbiA9IGdldE9BdXRoVG9rZW4oKVxuICAgICAgICAgICAgaWYgKGZyZXNoVG9rZW4pIHtcbiAgICAgICAgICAgICAgdXBkYXRlU2Vzc2lvbkluZ3Jlc3NBdXRoVG9rZW4oZnJlc2hUb2tlbilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBSZXNldCB0ZWFyZG93blN0YXJ0ZWQgc28gZnV0dXJlIHRlYXJkb3ducyBhcmUgbm90IGJsb2NrZWQuXG4gICAgICAgICAgdGVhcmRvd25TdGFydGVkID0gZmFsc2VcblxuICAgICAgICAgIC8vIEZsdXNoIGluaXRpYWwgbWVzc2FnZXMgb25seSBvbiBmaXJzdCBjb25uZWN0LCBub3Qgb24gZXZlcnlcbiAgICAgICAgICAvLyBXUyByZWNvbm5lY3Rpb24uIFJlLWZsdXNoaW5nIHdvdWxkIGNhdXNlIGR1cGxpY2F0ZSBtZXNzYWdlcy5cbiAgICAgICAgICAvLyBJTVBPUlRBTlQ6IG9uU3RhdGVDaGFuZ2UoJ2Nvbm5lY3RlZCcpIGlzIGRlZmVycmVkIHVudGlsIHRoZVxuICAgICAgICAgIC8vIGZsdXNoIGNvbXBsZXRlcy4gVGhpcyBwcmV2ZW50cyB3cml0ZU1lc3NhZ2VzKCkgZnJvbSBzZW5kaW5nXG4gICAgICAgICAgLy8gbmV3IG1lc3NhZ2VzIHRoYXQgY291bGQgYXJyaXZlIGF0IHRoZSBzZXJ2ZXIgaW50ZXJsZWF2ZWQgd2l0aFxuICAgICAgICAgIC8vIHRoZSBoaXN0b3JpY2FsIG1lc3NhZ2VzLCBhbmQgZGVsYXlzIHRoZSB3ZWIgVUkgZnJvbSBzaG93aW5nXG4gICAgICAgICAgLy8gdGhlIHNlc3Npb24gYXMgYWN0aXZlIHVudGlsIGhpc3RvcnkgaXMgcGVyc2lzdGVkLlxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFpbml0aWFsRmx1c2hEb25lICYmXG4gICAgICAgICAgICBpbml0aWFsTWVzc2FnZXMgJiZcbiAgICAgICAgICAgIGluaXRpYWxNZXNzYWdlcy5sZW5ndGggPiAwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBpbml0aWFsRmx1c2hEb25lID0gdHJ1ZVxuXG4gICAgICAgICAgICAvLyBDYXAgdGhlIGluaXRpYWwgZmx1c2ggdG8gdGhlIG1vc3QgcmVjZW50IE4gbWVzc2FnZXMuIFRoZSBmdWxsXG4gICAgICAgICAgICAvLyBoaXN0b3J5IGlzIFVJLW9ubHkgKG1vZGVsIGRvZXNuJ3Qgc2VlIGl0KSBhbmQgbGFyZ2UgcmVwbGF5cyBjYXVzZVxuICAgICAgICAgICAgLy8gc2xvdyBzZXNzaW9uLWluZ3Jlc3MgcGVyc2lzdGVuY2UgKGVhY2ggZXZlbnQgaXMgYSB0aHJlYWRzdG9yZSB3cml0ZSlcbiAgICAgICAgICAgIC8vIHBsdXMgZWxldmF0ZWQgRmlyZXN0b3JlIHByZXNzdXJlLiBBIDAgb3IgbmVnYXRpdmUgY2FwIGRpc2FibGVzIGl0LlxuICAgICAgICAgICAgY29uc3QgaGlzdG9yeUNhcCA9IGluaXRpYWxIaXN0b3J5Q2FwXG4gICAgICAgICAgICBjb25zdCBlbGlnaWJsZU1lc3NhZ2VzID0gaW5pdGlhbE1lc3NhZ2VzLmZpbHRlcihcbiAgICAgICAgICAgICAgbSA9PlxuICAgICAgICAgICAgICAgIGlzRWxpZ2libGVCcmlkZ2VNZXNzYWdlKG0pICYmXG4gICAgICAgICAgICAgICAgIXByZXZpb3VzbHlGbHVzaGVkVVVJRHM/LmhhcyhtLnV1aWQpLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY29uc3QgY2FwcGVkTWVzc2FnZXMgPVxuICAgICAgICAgICAgICBoaXN0b3J5Q2FwID4gMCAmJiBlbGlnaWJsZU1lc3NhZ2VzLmxlbmd0aCA+IGhpc3RvcnlDYXBcbiAgICAgICAgICAgICAgICA/IGVsaWdpYmxlTWVzc2FnZXMuc2xpY2UoLWhpc3RvcnlDYXApXG4gICAgICAgICAgICAgICAgOiBlbGlnaWJsZU1lc3NhZ2VzXG4gICAgICAgICAgICBpZiAoY2FwcGVkTWVzc2FnZXMubGVuZ3RoIDwgZWxpZ2libGVNZXNzYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgICAgIGBbYnJpZGdlOnJlcGxdIENhcHBlZCBpbml0aWFsIGZsdXNoOiAke2VsaWdpYmxlTWVzc2FnZXMubGVuZ3RofSAtPiAke2NhcHBlZE1lc3NhZ2VzLmxlbmd0aH0gKGNhcD0ke2hpc3RvcnlDYXB9KWAsXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2JyaWRnZV9yZXBsX2hpc3RvcnlfY2FwcGVkJywge1xuICAgICAgICAgICAgICAgIGVsaWdpYmxlX2NvdW50OiBlbGlnaWJsZU1lc3NhZ2VzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBjYXBwZWRfY291bnQ6IGNhcHBlZE1lc3NhZ2VzLmxlbmd0aCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHNka01lc3NhZ2VzID0gdG9TREtNZXNzYWdlcyhjYXBwZWRNZXNzYWdlcylcbiAgICAgICAgICAgIGlmIChzZGtNZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgICBgW2JyaWRnZTpyZXBsXSBGbHVzaGluZyAke3Nka01lc3NhZ2VzLmxlbmd0aH0gaW5pdGlhbCBtZXNzYWdlKHMpIHZpYSB0cmFuc3BvcnRgLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNvbnN0IGV2ZW50cyA9IHNka01lc3NhZ2VzLm1hcChzZGtNc2cgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5zZGtNc2csXG4gICAgICAgICAgICAgICAgc2Vzc2lvbl9pZDogY3VycmVudFNlc3Npb25JZCxcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgIGNvbnN0IGRyb3BzQmVmb3JlID0gbmV3VHJhbnNwb3J0LmRyb3BwZWRCYXRjaENvdW50XG4gICAgICAgICAgICAgIHZvaWQgbmV3VHJhbnNwb3J0XG4gICAgICAgICAgICAgICAgLndyaXRlQmF0Y2goZXZlbnRzKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIC8vIElmIGFueSBiYXRjaCB3YXMgZHJvcHBlZCBkdXJpbmcgdGhpcyBmbHVzaCAoU0kgZG93biBmb3JcbiAgICAgICAgICAgICAgICAgIC8vIG1heENvbnNlY3V0aXZlRmFpbHVyZXMgYXR0ZW1wdHMpLCBmbHVzaCgpIHN0aWxsIHJlc29sdmVkXG4gICAgICAgICAgICAgICAgICAvLyBub3JtYWxseSBidXQgdGhlIGV2ZW50cyB3ZXJlIE5PVCBkZWxpdmVyZWQuIERvbid0IG1hcmtcbiAgICAgICAgICAgICAgICAgIC8vIFVVSURzIGFzIGZsdXNoZWQgXHUyMDE0IGtlZXAgdGhlbSBlbGlnaWJsZSBmb3IgcmUtc2VuZCBvbiB0aGVcbiAgICAgICAgICAgICAgICAgIC8vIG5leHQgb25Xb3JrUmVjZWl2ZWQgKEpXVCByZWZyZXNoIHJlLWRpc3BhdGNoLCBsaW5lIH4xMTQ0KS5cbiAgICAgICAgICAgICAgICAgIGlmIChuZXdUcmFuc3BvcnQuZHJvcHBlZEJhdGNoQ291bnQgPiBkcm9wc0JlZm9yZSkge1xuICAgICAgICAgICAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICAgICAgICAgICAgYFticmlkZ2U6cmVwbF0gSW5pdGlhbCBmbHVzaCBkcm9wcGVkICR7bmV3VHJhbnNwb3J0LmRyb3BwZWRCYXRjaENvdW50IC0gZHJvcHNCZWZvcmV9IGJhdGNoKGVzKSBcdTIwMTQgbm90IG1hcmtpbmcgJHtzZGtNZXNzYWdlcy5sZW5ndGh9IFVVSUQocykgYXMgZmx1c2hlZGAsXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNseUZsdXNoZWRVVUlEcykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNka01zZyBvZiBzZGtNZXNzYWdlcykge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChzZGtNc2cudXVpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNseUZsdXNoZWRVVUlEcy5hZGQoc2RrTXNnLnV1aWQpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZSA9PlxuICAgICAgICAgICAgICAgICAgbG9nRm9yRGVidWdnaW5nKGBbYnJpZGdlOnJlcGxdIEluaXRpYWwgZmx1c2ggZmFpbGVkOiAke2V9YCksXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIC8vIEd1YXJkOiBpZiB0cmFuc3BvcnQgd2FzIHJlcGxhY2VkIGR1cmluZyB0aGUgZmx1c2gsXG4gICAgICAgICAgICAgICAgICAvLyBkb24ndCBzaWduYWwgY29ubmVjdGVkIG9yIGRyYWluIFx1MjAxNCB0aGUgbmV3IHRyYW5zcG9ydFxuICAgICAgICAgICAgICAgICAgLy8gb3ducyB0aGUgbGlmZWN5Y2xlIG5vdy5cbiAgICAgICAgICAgICAgICAgIGlmICh0cmFuc3BvcnQgIT09IG5ld1RyYW5zcG9ydCkgcmV0dXJuXG4gICAgICAgICAgICAgICAgICBkcmFpbkZsdXNoR2F0ZSgpXG4gICAgICAgICAgICAgICAgICBvblN0YXRlQ2hhbmdlPy4oJ2Nvbm5lY3RlZCcpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIEFsbCBpbml0aWFsIG1lc3NhZ2VzIHdlcmUgYWxyZWFkeSBmbHVzaGVkIChmaWx0ZXJlZCBieVxuICAgICAgICAgICAgICAvLyBwcmV2aW91c2x5Rmx1c2hlZFVVSURzKS4gTm8gZmx1c2ggUE9TVCBuZWVkZWQgXHUyMDE0IGNsZWFyXG4gICAgICAgICAgICAgIC8vIHRoZSBmbGFnIGFuZCBzaWduYWwgY29ubmVjdGVkIGltbWVkaWF0ZWx5LiBUaGlzIGlzIHRoZVxuICAgICAgICAgICAgICAvLyBmaXJzdCBjb25uZWN0IGZvciB0aGlzIHRyYW5zcG9ydCAoaW5zaWRlICFpbml0aWFsRmx1c2hEb25lKSxcbiAgICAgICAgICAgICAgLy8gc28gbm8gZmx1c2ggUE9TVCBpcyBpbi1mbGlnaHQgXHUyMDE0IHRoZSBmbGFnIHdhcyBzZXQgYmVmb3JlXG4gICAgICAgICAgICAgIC8vIGNvbm5lY3QoKSBhbmQgbXVzdCBiZSBjbGVhcmVkIGhlcmUuXG4gICAgICAgICAgICAgIGRyYWluRmx1c2hHYXRlKClcbiAgICAgICAgICAgICAgb25TdGF0ZUNoYW5nZT8uKCdjb25uZWN0ZWQnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoIWZsdXNoR2F0ZS5hY3RpdmUpIHtcbiAgICAgICAgICAgIC8vIE5vIGluaXRpYWwgbWVzc2FnZXMgb3IgYWxyZWFkeSBmbHVzaGVkIG9uIGZpcnN0IGNvbm5lY3QuXG4gICAgICAgICAgICAvLyBXUyBhdXRvLXJlY29ubmVjdCBwYXRoIFx1MjAxNCBvbmx5IHNpZ25hbCBjb25uZWN0ZWQgaWYgbm8gZmx1c2hcbiAgICAgICAgICAgIC8vIFBPU1QgaXMgaW4tZmxpZ2h0LiBJZiBvbmUgaXMsIC5maW5hbGx5KCkgb3ducyB0aGUgbGlmZWN5Y2xlLlxuICAgICAgICAgICAgb25TdGF0ZUNoYW5nZT8uKCdjb25uZWN0ZWQnKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBuZXdUcmFuc3BvcnQuc2V0T25EYXRhKGRhdGEgPT4ge1xuICAgICAgICAgIGhhbmRsZUluZ3Jlc3NNZXNzYWdlKFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHJlY2VudFBvc3RlZFVVSURzLFxuICAgICAgICAgICAgcmVjZW50SW5ib3VuZFVVSURzLFxuICAgICAgICAgICAgb25JbmJvdW5kTWVzc2FnZSxcbiAgICAgICAgICAgIG9uUGVybWlzc2lvblJlc3BvbnNlLFxuICAgICAgICAgICAgb25TZXJ2ZXJDb250cm9sUmVxdWVzdCxcbiAgICAgICAgICApXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gQm9keSBsaXZlcyBhdCBpbml0QnJpZGdlQ29yZSBzY29wZSBzbyAvYnJpZGdlLWtpY2sgY2FuIGNhbGwgaXRcbiAgICAgICAgLy8gZGlyZWN0bHkgdmlhIGRlYnVnRmlyZUNsb3NlLiBBbGwgcmVmZXJlbmNlZCBjbG9zdXJlcyAodHJhbnNwb3J0LFxuICAgICAgICAvLyB3YWtlUG9sbExvb3AsIGZsdXNoR2F0ZSwgcmVjb25uZWN0RW52aXJvbm1lbnRXaXRoU2Vzc2lvbiwgZXRjLilcbiAgICAgICAgLy8gYXJlIGFscmVhZHkgYXQgdGhhdCBzY29wZS4gVGhlIG9ubHkgbGV4aWNhbCBkZXBlbmRlbmN5IG9uXG4gICAgICAgIC8vIHdpcmVUcmFuc3BvcnQgd2FzIGBuZXdUcmFuc3BvcnQuZ2V0TGFzdFNlcXVlbmNlTnVtKClgIFx1MjAxNCBidXQgYWZ0ZXJcbiAgICAgICAgLy8gdGhlIGd1YXJkIGJlbG93IHBhc3NlcyB3ZSBrbm93IHRyYW5zcG9ydCA9PT0gbmV3VHJhbnNwb3J0LlxuICAgICAgICBkZWJ1Z0ZpcmVDbG9zZSA9IGhhbmRsZVRyYW5zcG9ydFBlcm1hbmVudENsb3NlXG4gICAgICAgIG5ld1RyYW5zcG9ydC5zZXRPbkNsb3NlKGNsb3NlQ29kZSA9PiB7XG4gICAgICAgICAgLy8gR3VhcmQ6IGlmIHRyYW5zcG9ydCB3YXMgcmVwbGFjZWQsIGlnbm9yZSBzdGFsZSBjbG9zZS5cbiAgICAgICAgICBpZiAodHJhbnNwb3J0ICE9PSBuZXdUcmFuc3BvcnQpIHJldHVyblxuICAgICAgICAgIGhhbmRsZVRyYW5zcG9ydFBlcm1hbmVudENsb3NlKGNsb3NlQ29kZSlcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBTdGFydCB0aGUgZmx1c2ggZ2F0ZSBiZWZvcmUgY29ubmVjdCgpIHRvIGNvdmVyIHRoZSBXUyBoYW5kc2hha2VcbiAgICAgICAgLy8gd2luZG93LiBCZXR3ZWVuIHRyYW5zcG9ydCBhc3NpZ25tZW50IGFuZCBzZXRPbkNvbm5lY3QgZmlyaW5nLFxuICAgICAgICAvLyB3cml0ZU1lc3NhZ2VzKCkgY291bGQgc2VuZCBtZXNzYWdlcyB2aWEgSFRUUCBQT1NUIGJlZm9yZSB0aGVcbiAgICAgICAgLy8gaW5pdGlhbCBmbHVzaCBzdGFydHMuIFN0YXJ0aW5nIHRoZSBnYXRlIGhlcmUgZW5zdXJlcyB0aG9zZVxuICAgICAgICAvLyBjYWxscyBhcmUgcXVldWVkLiBJZiB0aGVyZSBhcmUgbm8gaW5pdGlhbCBtZXNzYWdlcywgdGhlIGdhdGVcbiAgICAgICAgLy8gc3RheXMgaW5hY3RpdmUuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhaW5pdGlhbEZsdXNoRG9uZSAmJlxuICAgICAgICAgIGluaXRpYWxNZXNzYWdlcyAmJlxuICAgICAgICAgIGluaXRpYWxNZXNzYWdlcy5sZW5ndGggPiAwXG4gICAgICAgICkge1xuICAgICAgICAgIGZsdXNoR2F0ZS5zdGFydCgpXG4gICAgICAgIH1cblxuICAgICAgICBuZXdUcmFuc3BvcnQuY29ubmVjdCgpXG4gICAgICB9IC8vIGVuZCB3aXJlVHJhbnNwb3J0XG5cbiAgICAgIC8vIEJ1bXAgdW5jb25kaXRpb25hbGx5IFx1MjAxNCBBTlkgbmV3IHRyYW5zcG9ydCAodjEgb3IgdjIpIGludmFsaWRhdGVzIGFuXG4gICAgICAvLyBpbi1mbGlnaHQgdjIgaGFuZHNoYWtlLiBBbHNvIGJ1bXBlZCBpbiBkb1JlY29ubmVjdCgpLlxuICAgICAgdjJHZW5lcmF0aW9uKytcblxuICAgICAgaWYgKHVzZUNjclYyKSB7XG4gICAgICAgIC8vIHdvcmtTZXNzaW9uSWQgaXMgdGhlIGNzZV8qIGZvcm0gKGluZnJhc3RydWN0dXJlLWxheWVyIElEIGZyb20gdGhlXG4gICAgICAgIC8vIHdvcmsgcXVldWUpLCB3aGljaCBpcyB3aGF0IC92MS9jb2RlL3Nlc3Npb25zL3tpZH0vd29ya2VyLyogd2FudHMuXG4gICAgICAgIC8vIFRoZSBzZXNzaW9uXyogZm9ybSAoY3VycmVudFNlc3Npb25JZCkgaXMgTk9UIHVzYWJsZSBoZXJlIFx1MjAxNFxuICAgICAgICAvLyBoYW5kbGVyL2NvbnZlcnQuZ286MzAgdmFsaWRhdGVzIFRhZ0NvZGVTZXNzaW9uLlxuICAgICAgICBjb25zdCBzZXNzaW9uVXJsID0gYnVpbGRDQ1J2MlNka1VybChiYXNlVXJsLCB3b3JrU2Vzc2lvbklkKVxuICAgICAgICBjb25zdCB0aGlzR2VuID0gdjJHZW5lcmF0aW9uXG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICBgW2JyaWRnZTpyZXBsXSBDQ1IgdjI6IHNlc3Npb25Vcmw9JHtzZXNzaW9uVXJsfSBzZXNzaW9uPSR7d29ya1Nlc3Npb25JZH0gZ2VuPSR7dGhpc0dlbn1gLFxuICAgICAgICApXG4gICAgICAgIHZvaWQgY3JlYXRlVjJSZXBsVHJhbnNwb3J0KHtcbiAgICAgICAgICBzZXNzaW9uVXJsLFxuICAgICAgICAgIGluZ3Jlc3NUb2tlbixcbiAgICAgICAgICBzZXNzaW9uSWQ6IHdvcmtTZXNzaW9uSWQsXG4gICAgICAgICAgaW5pdGlhbFNlcXVlbmNlTnVtOiBsYXN0VHJhbnNwb3J0U2VxdWVuY2VOdW0sXG4gICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgdCA9PiB7XG4gICAgICAgICAgICAvLyBUZWFyZG93biBzdGFydGVkIHdoaWxlIHJlZ2lzdGVyV29ya2VyIHdhcyBpbiBmbGlnaHQuIFRlYXJkb3duXG4gICAgICAgICAgICAvLyBzYXcgdHJhbnNwb3J0ID09PSBudWxsIGFuZCBza2lwcGVkIGNsb3NlKCk7IGluc3RhbGxpbmcgbm93XG4gICAgICAgICAgICAvLyB3b3VsZCBsZWFrIENDUkNsaWVudCBoZWFydGJlYXQgdGltZXJzIGFuZCByZXNldFxuICAgICAgICAgICAgLy8gdGVhcmRvd25TdGFydGVkIHZpYSB3aXJlVHJhbnNwb3J0J3Mgc2lkZSBlZmZlY3RzLlxuICAgICAgICAgICAgaWYgKHBvbGxDb250cm9sbGVyLnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAgICAgICAgIHQuY2xvc2UoKVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG9uV29ya1JlY2VpdmVkIG1heSBoYXZlIGZpcmVkIGFnYWluIHdoaWxlIHJlZ2lzdGVyV29ya2VyKClcbiAgICAgICAgICAgIC8vIHdhcyBpbiBmbGlnaHQgKHNlcnZlciByZS1kaXNwYXRjaCB3aXRoIGEgZnJlc2ggSldUKS4gVGhlXG4gICAgICAgICAgICAvLyB0cmFuc3BvcnQgIT09IG51bGwgY2hlY2sgYWxvbmUgZ2V0cyB0aGUgcmFjZSB3cm9uZyB3aGVuIEJPVEhcbiAgICAgICAgICAgIC8vIGF0dGVtcHRzIHNhdyB0cmFuc3BvcnQgPT09IG51bGwgXHUyMDE0IGl0IGtlZXBzIHRoZSBmaXJzdCByZXNvbHZlclxuICAgICAgICAgICAgLy8gKHN0YWxlIGVwb2NoKSBhbmQgZGlzY2FyZHMgdGhlIHNlY29uZCAoY29ycmVjdCBlcG9jaCkuIFRoZVxuICAgICAgICAgICAgLy8gZ2VuZXJhdGlvbiBjaGVjayBjYXRjaGVzIGl0IHJlZ2FyZGxlc3Mgb2YgdHJhbnNwb3J0IHN0YXRlLlxuICAgICAgICAgICAgaWYgKHRoaXNHZW4gIT09IHYyR2VuZXJhdGlvbikge1xuICAgICAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICAgICAgYFticmlkZ2U6cmVwbF0gQ0NSIHYyOiBkaXNjYXJkaW5nIHN0YWxlIGhhbmRzaGFrZSBnZW49JHt0aGlzR2VufSBjdXJyZW50PSR7djJHZW5lcmF0aW9ufWAsXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgdC5jbG9zZSgpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2lyZVRyYW5zcG9ydCh0KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgKGVycjogdW5rbm93bikgPT4ge1xuICAgICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgICBgW2JyaWRnZTpyZXBsXSBDQ1IgdjI6IGNyZWF0ZVYyUmVwbFRyYW5zcG9ydCBmYWlsZWQ6ICR7ZXJyb3JNZXNzYWdlKGVycil9YCxcbiAgICAgICAgICAgICAgeyBsZXZlbDogJ2Vycm9yJyB9LFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2JyaWRnZV9yZXBsX2Njcl92Ml9pbml0X2ZhaWxlZCcsIHt9KVxuICAgICAgICAgICAgLy8gSWYgYSBuZXdlciBhdHRlbXB0IGlzIGluIGZsaWdodCBvciBhbHJlYWR5IHN1Y2NlZWRlZCwgZG9uJ3RcbiAgICAgICAgICAgIC8vIHRvdWNoIGl0cyB3b3JrIGl0ZW0gXHUyMDE0IG91ciBmYWlsdXJlIGlzIGlycmVsZXZhbnQuXG4gICAgICAgICAgICBpZiAodGhpc0dlbiAhPT0gdjJHZW5lcmF0aW9uKSByZXR1cm5cbiAgICAgICAgICAgIC8vIFJlbGVhc2UgdGhlIHdvcmsgaXRlbSBzbyB0aGUgc2VydmVyIHJlLWRpc3BhdGNoZXMgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgIC8vIGluc3RlYWQgb2Ygd2FpdGluZyBmb3IgaXRzIG93biB0aW1lb3V0LiBjdXJyZW50V29ya0lkIHdhcyBzZXRcbiAgICAgICAgICAgIC8vIGFib3ZlOyB3aXRob3V0IHRoaXMsIHRoZSBzZXNzaW9uIGxvb2tzIHN0dWNrIHRvIHRoZSB1c2VyLlxuICAgICAgICAgICAgaWYgKGN1cnJlbnRXb3JrSWQpIHtcbiAgICAgICAgICAgICAgdm9pZCBhcGlcbiAgICAgICAgICAgICAgICAuc3RvcFdvcmsoZW52aXJvbm1lbnRJZCwgY3VycmVudFdvcmtJZCwgZmFsc2UpXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlOiB1bmtub3duKSA9PiB7XG4gICAgICAgICAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICAgICAgICAgIGBbYnJpZGdlOnJlcGxdIHN0b3BXb3JrIGFmdGVyIHYyIGluaXQgZmFpbHVyZTogJHtlcnJvck1lc3NhZ2UoZSl9YCxcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBjdXJyZW50V29ya0lkID0gbnVsbFxuICAgICAgICAgICAgICBjdXJyZW50SW5ncmVzc1Rva2VuID0gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2FrZVBvbGxMb29wKClcbiAgICAgICAgICB9LFxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB2MTogSHlicmlkVHJhbnNwb3J0IChXUyByZWFkcyArIFBPU1Qgd3JpdGVzIHRvIFNlc3Npb24tSW5ncmVzcykuXG4gICAgICAgIC8vIGF1dG9SZWNvbm5lY3QgaXMgdHJ1ZSAoZGVmYXVsdCkgXHUyMDE0IHdoZW4gdGhlIFdTIGRpZXMsIHRoZSB0cmFuc3BvcnRcbiAgICAgICAgLy8gcmVjb25uZWN0cyBhdXRvbWF0aWNhbGx5IHdpdGggZXhwb25lbnRpYWwgYmFja29mZi4gUE9TVCB3cml0ZXNcbiAgICAgICAgLy8gY29udGludWUgZHVyaW5nIHJlY29ubmVjdGlvbiAodGhleSB1c2UgZ2V0U2Vzc2lvbkluZ3Jlc3NBdXRoVG9rZW4oKVxuICAgICAgICAvLyBpbmRlcGVuZGVudGx5IG9mIFdTIHN0YXRlKS4gVGhlIHBvbGwgbG9vcCByZW1haW5zIGFzIGEgc2Vjb25kYXJ5XG4gICAgICAgIC8vIGZhbGxiYWNrIGlmIHRoZSByZWNvbm5lY3QgYnVkZ2V0IGlzIGV4aGF1c3RlZCAoMTAgbWluKS5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gQXV0aDogdXNlcyBPQXV0aCB0b2tlbnMgZGlyZWN0bHkgaW5zdGVhZCBvZiB0aGUgSldUIGZyb20gdGhlIHdvcmtcbiAgICAgICAgLy8gc2VjcmV0LiByZWZyZXNoSGVhZGVycyBwaWNrcyB1cCB0aGUgbGF0ZXN0IE9BdXRoIHRva2VuIG9uIGVhY2hcbiAgICAgICAgLy8gV1MgcmVjb25uZWN0IGF0dGVtcHQuXG4gICAgICAgIGNvbnN0IHdzVXJsID0gYnVpbGRTZGtVcmwoc2Vzc2lvbkluZ3Jlc3NVcmwsIHdvcmtTZXNzaW9uSWQpXG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhgW2JyaWRnZTpyZXBsXSBJbmdyZXNzIFVSTDogJHt3c1VybH1gKVxuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgYFticmlkZ2U6cmVwbF0gQ3JlYXRpbmcgSHlicmlkVHJhbnNwb3J0OiBzZXNzaW9uPSR7d29ya1Nlc3Npb25JZH1gLFxuICAgICAgICApXG4gICAgICAgIC8vIHYxT2F1dGhUb2tlbiB3YXMgdmFsaWRhdGVkIG5vbi1udWxsIGFib3ZlICh3ZSdkIGhhdmUgcmV0dXJuZWQgZWFybHkpLlxuICAgICAgICBjb25zdCBvYXV0aFRva2VuID0gdjFPYXV0aFRva2VuID8/ICcnXG4gICAgICAgIHdpcmVUcmFuc3BvcnQoXG4gICAgICAgICAgY3JlYXRlVjFSZXBsVHJhbnNwb3J0KFxuICAgICAgICAgICAgbmV3IEh5YnJpZFRyYW5zcG9ydChcbiAgICAgICAgICAgICAgbmV3IFVSTCh3c1VybCksXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7b2F1dGhUb2tlbn1gLFxuICAgICAgICAgICAgICAgICdhbnRocm9waWMtdmVyc2lvbic6ICcyMDIzLTA2LTAxJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgd29ya1Nlc3Npb25JZCxcbiAgICAgICAgICAgICAgKCkgPT4gKHtcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0T0F1dGhUb2tlbigpID8/IG9hdXRoVG9rZW59YCxcbiAgICAgICAgICAgICAgICAnYW50aHJvcGljLXZlcnNpb24nOiAnMjAyMy0wNi0wMScsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAvLyBDYXAgcmV0cmllcyBzbyBhIHBlcnNpc3RlbnRseS1mYWlsaW5nIHNlc3Npb24taW5ncmVzcyBjYW4ndFxuICAgICAgICAgICAgICAvLyBwaW4gdGhlIHVwbG9hZGVyIGRyYWluIGxvb3AgZm9yIHRoZSBsaWZldGltZSBvZiB0aGUgYnJpZGdlLlxuICAgICAgICAgICAgICAvLyA1MCBhdHRlbXB0cyBcdTIyNDggMjAgbWluICgxNXMgUE9TVCB0aW1lb3V0ICsgOHMgYmFja29mZiArIGppdHRlclxuICAgICAgICAgICAgICAvLyBwZXIgY3ljbGUgYXQgc3RlYWR5IHN0YXRlKS4gQnJpZGdlLW9ubHkgXHUyMDE0IDFQIGtlZXBzIGluZGVmaW5pdGUuXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtYXhDb25zZWN1dGl2ZUZhaWx1cmVzOiA1MCxcbiAgICAgICAgICAgICAgICBpc0JyaWRnZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvbkJhdGNoRHJvcHBlZDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgb25TdGF0ZUNoYW5nZT8uKFxuICAgICAgICAgICAgICAgICAgICAncmVjb25uZWN0aW5nJyxcbiAgICAgICAgICAgICAgICAgICAgJ0xvc3Qgc3luYyB3aXRoIFJlbW90ZSBDb250cm9sIFx1MjAxNCBldmVudHMgY291bGQgbm90IGJlIGRlbGl2ZXJlZCcsXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAvLyBTSSBoYXMgYmVlbiBkb3duIH4yMCBtaW4uIFdha2UgdGhlIHBvbGwgbG9vcCBzbyB0aGF0IHdoZW5cbiAgICAgICAgICAgICAgICAgIC8vIFNJIHJlY292ZXJzLCBuZXh0IHBvbGwgXHUyMTkyIG9uV29ya1JlY2VpdmVkIFx1MjE5MiBmcmVzaCB0cmFuc3BvcnRcbiAgICAgICAgICAgICAgICAgIC8vIFx1MjE5MiBpbml0aWFsIGZsdXNoIHN1Y2NlZWRzIFx1MjE5MiBvblN0YXRlQ2hhbmdlKCdjb25uZWN0ZWQnKSBhdFxuICAgICAgICAgICAgICAgICAgLy8gfmxpbmUgMTQyMC4gV2l0aG91dCB0aGlzLCBzdGF0ZSBzdGF5cyAncmVjb25uZWN0aW5nJyBldmVuXG4gICAgICAgICAgICAgICAgICAvLyBhZnRlciBTSSByZWNvdmVycyBcdTIwMTQgZGFlbW9uLnRzOjQzNyBkZW5pZXMgYWxsIHBlcm1pc3Npb25zLFxuICAgICAgICAgICAgICAgICAgLy8gdXNlUmVwbEJyaWRnZS50czozMTEga2VlcHMgcmVwbEJyaWRnZVNlc3Npb25BY3RpdmU9ZmFsc2UuXG4gICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgZW52IHdhcyBhcmNoaXZlZCBkdXJpbmcgdGhlIG91dGFnZSwgcG9sbCA0MDQgXHUyMTkyXG4gICAgICAgICAgICAgICAgICAvLyBvbkVudmlyb25tZW50TG9zdCByZWNvdmVyeSBwYXRoIGhhbmRsZXMgaXQuXG4gICAgICAgICAgICAgICAgICB3YWtlUG9sbExvb3AoKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApLFxuICAgICAgICAgICksXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICB9XG4gIHZvaWQgc3RhcnRXb3JrUG9sbExvb3AocG9sbE9wdHMpXG5cbiAgLy8gUGVycGV0dWFsIG1vZGU6IGhvdXJseSBtdGltZSByZWZyZXNoIG9mIHRoZSBjcmFzaC1yZWNvdmVyeSBwb2ludGVyLlxuICAvLyBUaGUgb25Xb3JrUmVjZWl2ZWQgcmVmcmVzaCBvbmx5IGZpcmVzIHBlciB1c2VyIHByb21wdCBcdTIwMTQgYVxuICAvLyBkYWVtb24gaWRsZSBmb3IgPjRoIHdvdWxkIGhhdmUgYSBzdGFsZSBwb2ludGVyLCBhbmQgdGhlIG5leHQgcmVzdGFydFxuICAvLyB3b3VsZCBjbGVhciBpdCAocmVhZEJyaWRnZVBvaW50ZXIgVFRMIGNoZWNrKSBcdTIxOTIgZnJlc2ggc2Vzc2lvbi4gVGhlXG4gIC8vIHN0YW5kYWxvbmUgYnJpZGdlIChicmlkZ2VNYWluLnRzKSBoYXMgYW4gaWRlbnRpY2FsIGhvdXJseSB0aW1lci5cbiAgY29uc3QgcG9pbnRlclJlZnJlc2hUaW1lciA9IHBlcnBldHVhbFxuICAgID8gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAvLyBkb1JlY29ubmVjdCgpIHJlYXNzaWducyBjdXJyZW50U2Vzc2lvbklkL2Vudmlyb25tZW50SWQgbm9uLVxuICAgICAgICAvLyBhdG9taWNhbGx5IChlbnYgYXQgfjo2MzQsIHNlc3Npb24gYXQgfjo3MTksIGF3YWl0cyBpbiBiZXR3ZWVuKS5cbiAgICAgICAgLy8gSWYgdGhpcyB0aW1lciBmaXJlcyBpbiB0aGF0IHdpbmRvdywgaXRzIGZpcmUtYW5kLWZvcmdldCB3cml0ZSBjYW5cbiAgICAgICAgLy8gcmFjZSB3aXRoIChhbmQgb3ZlcndyaXRlKSBkb1JlY29ubmVjdCdzIG93biBwb2ludGVyIHdyaXRlIGF0IH46NzQwLFxuICAgICAgICAvLyBsZWF2aW5nIHRoZSBwb2ludGVyIGF0IHRoZSBub3ctYXJjaGl2ZWQgb2xkIHNlc3Npb24uIGRvUmVjb25uZWN0XG4gICAgICAgIC8vIHdyaXRlcyB0aGUgcG9pbnRlciBpdHNlbGYsIHNvIHNraXBwaW5nIGhlcmUgaXMgZnJlZS5cbiAgICAgICAgaWYgKHJlY29ubmVjdFByb21pc2UpIHJldHVyblxuICAgICAgICB2b2lkIHdyaXRlQnJpZGdlUG9pbnRlcihkaXIsIHtcbiAgICAgICAgICBzZXNzaW9uSWQ6IGN1cnJlbnRTZXNzaW9uSWQsXG4gICAgICAgICAgZW52aXJvbm1lbnRJZCxcbiAgICAgICAgICBzb3VyY2U6ICdyZXBsJyxcbiAgICAgICAgfSlcbiAgICAgIH0sIDYwICogNjBfMDAwKVxuICAgIDogbnVsbFxuICBwb2ludGVyUmVmcmVzaFRpbWVyPy51bnJlZj8uKClcblxuICAvLyBQdXNoIGEgc2lsZW50IGtlZXBfYWxpdmUgZnJhbWUgb24gYSBmaXhlZCBpbnRlcnZhbCBzbyB1cHN0cmVhbSBwcm94aWVzXG4gIC8vIGFuZCB0aGUgc2Vzc2lvbi1pbmdyZXNzIGxheWVyIGRvbid0IEdDIGFuIG90aGVyd2lzZS1pZGxlIHJlbW90ZSBjb250cm9sXG4gIC8vIHNlc3Npb24uIFRoZSBrZWVwX2FsaXZlIHR5cGUgaXMgZmlsdGVyZWQgYmVmb3JlIHJlYWNoaW5nIGFueSBjbGllbnQgVUlcbiAgLy8gKFF1ZXJ5LnRzIGRyb3BzIGl0OyB3ZWIvaU9TL0FuZHJvaWQgbmV2ZXIgc2VlIGl0IGluIHRoZWlyIG1lc3NhZ2UgbG9vcCkuXG4gIC8vIEludGVydmFsIGNvbWVzIGZyb20gR3Jvd3RoQm9vayAodGVuZ3VfYnJpZGdlX3BvbGxfaW50ZXJ2YWxfY29uZmlnXG4gIC8vIHNlc3Npb25fa2VlcGFsaXZlX2ludGVydmFsX3YyX21zLCBkZWZhdWx0IDEyMHMpOyAwID0gZGlzYWJsZWQuXG4gIGNvbnN0IGtlZXBBbGl2ZUludGVydmFsTXMgPVxuICAgIGdldFBvbGxJbnRlcnZhbENvbmZpZygpLnNlc3Npb25fa2VlcGFsaXZlX2ludGVydmFsX3YyX21zXG4gIGNvbnN0IGtlZXBBbGl2ZVRpbWVyID1cbiAgICBrZWVwQWxpdmVJbnRlcnZhbE1zID4gMFxuICAgICAgPyBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgaWYgKCF0cmFuc3BvcnQpIHJldHVyblxuICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZygnW2JyaWRnZTpyZXBsXSBrZWVwX2FsaXZlIHNlbnQnKVxuICAgICAgICAgIHZvaWQgdHJhbnNwb3J0LndyaXRlKHsgdHlwZTogJ2tlZXBfYWxpdmUnIH0pLmNhdGNoKChlcnI6IHVua25vd24pID0+IHtcbiAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgYFticmlkZ2U6cmVwbF0ga2VlcF9hbGl2ZSB3cml0ZSBmYWlsZWQ6ICR7ZXJyb3JNZXNzYWdlKGVycil9YCxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICB9LCBrZWVwQWxpdmVJbnRlcnZhbE1zKVxuICAgICAgOiBudWxsXG4gIGtlZXBBbGl2ZVRpbWVyPy51bnJlZj8uKClcblxuICAvLyBTaGFyZWQgdGVhcmRvd24gc2VxdWVuY2UgdXNlZCBieSBib3RoIGNsZWFudXAgcmVnaXN0cmF0aW9uIGFuZFxuICAvLyB0aGUgZXhwbGljaXQgdGVhcmRvd24oKSBtZXRob2Qgb24gdGhlIHJldHVybmVkIGhhbmRsZS5cbiAgbGV0IHRlYXJkb3duU3RhcnRlZCA9IGZhbHNlXG4gIGRvVGVhcmRvd25JbXBsID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGlmICh0ZWFyZG93blN0YXJ0ZWQpIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFticmlkZ2U6cmVwbF0gVGVhcmRvd24gYWxyZWFkeSBpbiBwcm9ncmVzcywgc2tpcHBpbmcgZHVwbGljYXRlIGNhbGwgZW52PSR7ZW52aXJvbm1lbnRJZH0gc2Vzc2lvbj0ke2N1cnJlbnRTZXNzaW9uSWR9YCxcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0ZWFyZG93blN0YXJ0ZWQgPSB0cnVlXG4gICAgY29uc3QgdGVhcmRvd25TdGFydCA9IERhdGUubm93KClcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgW2JyaWRnZTpyZXBsXSBUZWFyZG93biBzdGFydGluZzogZW52PSR7ZW52aXJvbm1lbnRJZH0gc2Vzc2lvbj0ke2N1cnJlbnRTZXNzaW9uSWR9IHdvcmtJZD0ke2N1cnJlbnRXb3JrSWQgPz8gJ25vbmUnfSB0cmFuc3BvcnRTdGF0ZT0ke3RyYW5zcG9ydD8uZ2V0U3RhdGVMYWJlbCgpID8/ICdudWxsJ31gLFxuICAgIClcblxuICAgIGlmIChwb2ludGVyUmVmcmVzaFRpbWVyICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKHBvaW50ZXJSZWZyZXNoVGltZXIpXG4gICAgfVxuICAgIGlmIChrZWVwQWxpdmVUaW1lciAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChrZWVwQWxpdmVUaW1lcilcbiAgICB9XG4gICAgaWYgKHNpZ3VzcjJIYW5kbGVyKSB7XG4gICAgICBwcm9jZXNzLm9mZignU0lHVVNSMicsIHNpZ3VzcjJIYW5kbGVyKVxuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuVVNFUl9UWVBFID09PSAnYW50Jykge1xuICAgICAgY2xlYXJCcmlkZ2VEZWJ1Z0hhbmRsZSgpXG4gICAgICBkZWJ1Z0ZpcmVDbG9zZSA9IG51bGxcbiAgICB9XG4gICAgcG9sbENvbnRyb2xsZXIuYWJvcnQoKVxuICAgIGxvZ0ZvckRlYnVnZ2luZygnW2JyaWRnZTpyZXBsXSBUZWFyZG93bjogcG9sbCBsb29wIGFib3J0ZWQnKVxuXG4gICAgLy8gQ2FwdHVyZSB0aGUgbGl2ZSB0cmFuc3BvcnQncyBzZXEgQkVGT1JFIGNsb3NlKCkgXHUyMDE0IGNsb3NlKCkgaXMgc3luY1xuICAgIC8vIChqdXN0IGFib3J0cyB0aGUgU1NFIGZldGNoKSBhbmQgZG9lcyBOT1QgaW52b2tlIG9uQ2xvc2UsIHNvIHRoZVxuICAgIC8vIHNldE9uQ2xvc2UgY2FwdHVyZSBwYXRoIG5ldmVyIHJ1bnMgZm9yIGV4cGxpY2l0IHRlYXJkb3duLlxuICAgIC8vIFdpdGhvdXQgdGhpcywgZ2V0U1NFU2VxdWVuY2VOdW0oKSBhZnRlciB0ZWFyZG93biByZXR1cm5zIHRoZSBzdGFsZVxuICAgIC8vIGxhc3RUcmFuc3BvcnRTZXF1ZW5jZU51bSAoY2FwdHVyZWQgYXQgdGhlIGxhc3QgdHJhbnNwb3J0IHN3YXApLCBhbmRcbiAgICAvLyBkYWVtb24gY2FsbGVycyBwZXJzaXN0aW5nIHRoYXQgdmFsdWUgbG9zZSBhbGwgZXZlbnRzIHNpbmNlIHRoZW4uXG4gICAgaWYgKHRyYW5zcG9ydCkge1xuICAgICAgY29uc3QgZmluYWxTZXEgPSB0cmFuc3BvcnQuZ2V0TGFzdFNlcXVlbmNlTnVtKClcbiAgICAgIGlmIChmaW5hbFNlcSA+IGxhc3RUcmFuc3BvcnRTZXF1ZW5jZU51bSkge1xuICAgICAgICBsYXN0VHJhbnNwb3J0U2VxdWVuY2VOdW0gPSBmaW5hbFNlcVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwZXJwZXR1YWwpIHtcbiAgICAgIC8vIFBlcnBldHVhbCB0ZWFyZG93biBpcyBMT0NBTC1PTkxZIFx1MjAxNCBkbyBub3Qgc2VuZCByZXN1bHQsIGRvIG5vdCBjYWxsXG4gICAgICAvLyBzdG9wV29yaywgZG8gbm90IGNsb3NlIHRoZSB0cmFuc3BvcnQuIEFsbCBvZiB0aG9zZSBzaWduYWwgdGhlXG4gICAgICAvLyBzZXJ2ZXIgKGFuZCBhbnkgbW9iaWxlL2F0dGFjaCBzdWJzY3JpYmVycykgdGhhdCB0aGUgc2Vzc2lvbiBpc1xuICAgICAgLy8gZW5kaW5nLiBJbnN0ZWFkOiBzdG9wIHBvbGxpbmcsIGxldCB0aGUgc29ja2V0IGRpZSB3aXRoIHRoZVxuICAgICAgLy8gcHJvY2VzczsgdGhlIGJhY2tlbmQgdGltZXMgdGhlIHdvcmstaXRlbSBsZWFzZSBiYWNrIHRvIHBlbmRpbmcgb25cbiAgICAgIC8vIGl0cyBvd24gKFRUTCAzMDBzKS4gTmV4dCBkYWVtb24gc3RhcnQgcmVhZHMgdGhlIHBvaW50ZXIgYW5kXG4gICAgICAvLyByZWNvbm5lY3RTZXNzaW9uIHJlLXF1ZXVlcyB3b3JrLlxuICAgICAgdHJhbnNwb3J0ID0gbnVsbFxuICAgICAgZmx1c2hHYXRlLmRyb3AoKVxuICAgICAgLy8gUmVmcmVzaCB0aGUgcG9pbnRlciBtdGltZSBzbyB0aGF0IHNlc3Npb25zIGxhc3RpbmcgbG9uZ2VyIHRoYW5cbiAgICAgIC8vIEJSSURHRV9QT0lOVEVSX1RUTF9NUyAoNGgpIGRvbid0IGFwcGVhciBzdGFsZSBvbiBuZXh0IHN0YXJ0LlxuICAgICAgYXdhaXQgd3JpdGVCcmlkZ2VQb2ludGVyKGRpciwge1xuICAgICAgICBzZXNzaW9uSWQ6IGN1cnJlbnRTZXNzaW9uSWQsXG4gICAgICAgIGVudmlyb25tZW50SWQsXG4gICAgICAgIHNvdXJjZTogJ3JlcGwnLFxuICAgICAgfSlcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFticmlkZ2U6cmVwbF0gVGVhcmRvd24gKHBlcnBldHVhbCk6IGxlYXZpbmcgZW52PSR7ZW52aXJvbm1lbnRJZH0gc2Vzc2lvbj0ke2N1cnJlbnRTZXNzaW9uSWR9IGFsaXZlIG9uIHNlcnZlciwgZHVyYXRpb249JHtEYXRlLm5vdygpIC0gdGVhcmRvd25TdGFydH1tc2AsXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJlIHRoZSByZXN1bHQgbWVzc2FnZSwgdGhlbiBhcmNoaXZlLCBUSEVOIGNsb3NlLiB0cmFuc3BvcnQud3JpdGUoKVxuICAgIC8vIG9ubHkgZW5xdWV1ZXMgKFNlcmlhbEJhdGNoRXZlbnRVcGxvYWRlciByZXNvbHZlcyBvbiBidWZmZXItYWRkKTsgdGhlXG4gICAgLy8gc3RvcFdvcmsvYXJjaGl2ZSBsYXRlbmN5ICh+MjAwLTUwMG1zKSBpcyB0aGUgZHJhaW4gd2luZG93IGZvciB0aGVcbiAgICAvLyByZXN1bHQgUE9TVC4gQ2xvc2luZyBCRUZPUkUgYXJjaGl2ZSBtZWFudCByZWx5aW5nIG9uIEh5YnJpZFRyYW5zcG9ydCdzXG4gICAgLy8gdm9pZC1lZCAzcyBncmFjZSBwZXJpb2QsIHdoaWNoIG5vdGhpbmcgYXdhaXRzIFx1MjAxNCBmb3JjZUV4aXQgY2FuIGtpbGwgdGhlXG4gICAgLy8gc29ja2V0IG1pZC1QT1NULiBTYW1lIHJlb3JkZXIgYXMgcmVtb3RlQnJpZGdlQ29yZS50cyB0ZWFyZG93biAoIzIyODAzKS5cbiAgICBjb25zdCB0ZWFyZG93blRyYW5zcG9ydCA9IHRyYW5zcG9ydFxuICAgIHRyYW5zcG9ydCA9IG51bGxcbiAgICBmbHVzaEdhdGUuZHJvcCgpXG4gICAgaWYgKHRlYXJkb3duVHJhbnNwb3J0KSB7XG4gICAgICB2b2lkIHRlYXJkb3duVHJhbnNwb3J0LndyaXRlKG1ha2VSZXN1bHRNZXNzYWdlKGN1cnJlbnRTZXNzaW9uSWQpKVxuICAgIH1cblxuICAgIGNvbnN0IHN0b3BXb3JrUCA9IGN1cnJlbnRXb3JrSWRcbiAgICAgID8gYXBpXG4gICAgICAgICAgLnN0b3BXb3JrKGVudmlyb25tZW50SWQsIGN1cnJlbnRXb3JrSWQsIHRydWUpXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgbG9nRm9yRGVidWdnaW5nKCdbYnJpZGdlOnJlcGxdIFRlYXJkb3duOiBzdG9wV29yayBjb21wbGV0ZWQnKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnI6IHVua25vd24pID0+IHtcbiAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgYFticmlkZ2U6cmVwbF0gVGVhcmRvd24gc3RvcFdvcmsgZmFpbGVkOiAke2Vycm9yTWVzc2FnZShlcnIpfWAsXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgIDogUHJvbWlzZS5yZXNvbHZlKClcblxuICAgIC8vIFJ1biBzdG9wV29yayBhbmQgYXJjaGl2ZVNlc3Npb24gaW4gcGFyYWxsZWwuIGdyYWNlZnVsU2h1dGRvd24udHM6NDA3XG4gICAgLy8gcmFjZXMgcnVuQ2xlYW51cEZ1bmN0aW9ucygpIGFnYWluc3QgMnMgKE5PVCB0aGUgNXMgb3V0ZXIgZmFpbHNhZmUpLFxuICAgIC8vIHNvIGFyY2hpdmUgaXMgY2FwcGVkIGF0IDEuNXMgYXQgdGhlIGluamVjdGlvbiBzaXRlIHRvIHN0YXkgdW5kZXIgYnVkZ2V0LlxuICAgIC8vIGFyY2hpdmVTZXNzaW9uIGlzIGNvbnRyYWN0dWFsbHkgbm8tdGhyb3c7IHRoZSBpbmplY3RlZCBpbXBsZW1lbnRhdGlvbnNcbiAgICAvLyBsb2cgdGhlaXIgb3duIHN1Y2Nlc3MvZmFpbHVyZSBpbnRlcm5hbGx5LlxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtzdG9wV29ya1AsIGFyY2hpdmVTZXNzaW9uKGN1cnJlbnRTZXNzaW9uSWQpXSlcblxuICAgIHRlYXJkb3duVHJhbnNwb3J0Py5jbG9zZSgpXG4gICAgbG9nRm9yRGVidWdnaW5nKCdbYnJpZGdlOnJlcGxdIFRlYXJkb3duOiB0cmFuc3BvcnQgY2xvc2VkJylcblxuICAgIGF3YWl0IGFwaS5kZXJlZ2lzdGVyRW52aXJvbm1lbnQoZW52aXJvbm1lbnRJZCkuY2F0Y2goKGVycjogdW5rbm93bikgPT4ge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgW2JyaWRnZTpyZXBsXSBUZWFyZG93biBkZXJlZ2lzdGVyIGZhaWxlZDogJHtlcnJvck1lc3NhZ2UoZXJyKX1gLFxuICAgICAgKVxuICAgIH0pXG5cbiAgICAvLyBDbGVhciB0aGUgY3Jhc2gtcmVjb3ZlcnkgcG9pbnRlciBcdTIwMTQgZXhwbGljaXQgZGlzY29ubmVjdCBvciBjbGVhbiBSRVBMXG4gICAgLy8gZXhpdCBtZWFucyB0aGUgdXNlciBpcyBkb25lIHdpdGggdGhpcyBzZXNzaW9uLiBDcmFzaC9raWxsLTkgbmV2ZXJcbiAgICAvLyByZWFjaGVzIHRoaXMgbGluZSwgbGVhdmluZyB0aGUgcG9pbnRlciBmb3IgbmV4dC1sYXVuY2ggcmVjb3ZlcnkuXG4gICAgYXdhaXQgY2xlYXJCcmlkZ2VQb2ludGVyKGRpcilcblxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbYnJpZGdlOnJlcGxdIFRlYXJkb3duIGNvbXBsZXRlOiBlbnY9JHtlbnZpcm9ubWVudElkfSBkdXJhdGlvbj0ke0RhdGUubm93KCkgLSB0ZWFyZG93blN0YXJ0fW1zYCxcbiAgICApXG4gIH1cblxuICAvLyA4LiBSZWdpc3RlciBjbGVhbnVwIGZvciBncmFjZWZ1bCBzaHV0ZG93blxuICBjb25zdCB1bnJlZ2lzdGVyID0gcmVnaXN0ZXJDbGVhbnVwKCgpID0+IGRvVGVhcmRvd25JbXBsPy4oKSlcblxuICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgYFticmlkZ2U6cmVwbF0gUmVhZHk6IGVudj0ke2Vudmlyb25tZW50SWR9IHNlc3Npb249JHtjdXJyZW50U2Vzc2lvbklkfWAsXG4gIClcbiAgb25TdGF0ZUNoYW5nZT8uKCdyZWFkeScpXG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgYnJpZGdlU2Vzc2lvbklkKCkge1xuICAgICAgcmV0dXJuIGN1cnJlbnRTZXNzaW9uSWRcbiAgICB9LFxuICAgIGdldCBlbnZpcm9ubWVudElkKCkge1xuICAgICAgcmV0dXJuIGVudmlyb25tZW50SWRcbiAgICB9LFxuICAgIGdldFNTRVNlcXVlbmNlTnVtKCkge1xuICAgICAgLy8gbGFzdFRyYW5zcG9ydFNlcXVlbmNlTnVtIG9ubHkgdXBkYXRlcyB3aGVuIGEgdHJhbnNwb3J0IGlzIENMT1NFRFxuICAgICAgLy8gKGNhcHR1cmVkIGF0IHN3YXAvb25DbG9zZSkuIER1cmluZyBub3JtYWwgb3BlcmF0aW9uIHRoZSBDVVJSRU5UXG4gICAgICAvLyB0cmFuc3BvcnQncyBsaXZlIHNlcSBpc24ndCByZWZsZWN0ZWQgdGhlcmUuIE1lcmdlIGJvdGggc28gY2FsbGVyc1xuICAgICAgLy8gKGUuZy4gZGFlbW9uIHBlcnNpc3RTdGF0ZSgpKSBnZXQgdGhlIGFjdHVhbCBoaWdoLXdhdGVyIG1hcmsuXG4gICAgICBjb25zdCBsaXZlID0gdHJhbnNwb3J0Py5nZXRMYXN0U2VxdWVuY2VOdW0oKSA/PyAwXG4gICAgICByZXR1cm4gTWF0aC5tYXgobGFzdFRyYW5zcG9ydFNlcXVlbmNlTnVtLCBsaXZlKVxuICAgIH0sXG4gICAgc2Vzc2lvbkluZ3Jlc3NVcmwsXG4gICAgd3JpdGVNZXNzYWdlcyhtZXNzYWdlcykge1xuICAgICAgLy8gRmlsdGVyIHRvIHVzZXIvYXNzaXN0YW50IG1lc3NhZ2VzIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gc2VudC5cbiAgICAgIC8vIFR3byBsYXllcnMgb2YgZGVkdXA6XG4gICAgICAvLyAgLSBpbml0aWFsTWVzc2FnZVVVSURzOiBtZXNzYWdlcyBzZW50IGFzIHNlc3Npb24gY3JlYXRpb24gZXZlbnRzXG4gICAgICAvLyAgLSByZWNlbnRQb3N0ZWRVVUlEczogbWVzc2FnZXMgcmVjZW50bHkgc2VudCB2aWEgUE9TVFxuICAgICAgY29uc3QgZmlsdGVyZWQgPSBtZXNzYWdlcy5maWx0ZXIoXG4gICAgICAgIG0gPT5cbiAgICAgICAgICBpc0VsaWdpYmxlQnJpZGdlTWVzc2FnZShtKSAmJlxuICAgICAgICAgICFpbml0aWFsTWVzc2FnZVVVSURzLmhhcyhtLnV1aWQpICYmXG4gICAgICAgICAgIXJlY2VudFBvc3RlZFVVSURzLmhhcyhtLnV1aWQpLFxuICAgICAgKVxuICAgICAgaWYgKGZpbHRlcmVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgICAgIC8vIEZpcmUgb25Vc2VyTWVzc2FnZSBmb3IgdGl0bGUgZGVyaXZhdGlvbi4gU2NhbiBiZWZvcmUgdGhlIGZsdXNoR2F0ZVxuICAgICAgLy8gY2hlY2sgXHUyMDE0IHByb21wdHMgYXJlIHRpdGxlLXdvcnRoeSBldmVuIGlmIHRoZXkgcXVldWUgYmVoaW5kIHRoZVxuICAgICAgLy8gaW5pdGlhbCBoaXN0b3J5IGZsdXNoLiBLZWVwcyBjYWxsaW5nIG9uIGV2ZXJ5IHRpdGxlLXdvcnRoeSBtZXNzYWdlXG4gICAgICAvLyB1bnRpbCB0aGUgY2FsbGJhY2sgcmV0dXJucyB0cnVlOyB0aGUgY2FsbGVyIG93bnMgdGhlIHBvbGljeS5cbiAgICAgIGlmICghdXNlck1lc3NhZ2VDYWxsYmFja0RvbmUpIHtcbiAgICAgICAgZm9yIChjb25zdCBtIG9mIGZpbHRlcmVkKSB7XG4gICAgICAgICAgY29uc3QgdGV4dCA9IGV4dHJhY3RUaXRsZVRleHQobSlcbiAgICAgICAgICBpZiAodGV4dCAhPT0gdW5kZWZpbmVkICYmIG9uVXNlck1lc3NhZ2U/Lih0ZXh0LCBjdXJyZW50U2Vzc2lvbklkKSkge1xuICAgICAgICAgICAgdXNlck1lc3NhZ2VDYWxsYmFja0RvbmUgPSB0cnVlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBRdWV1ZSBtZXNzYWdlcyB3aGlsZSB0aGUgaW5pdGlhbCBmbHVzaCBpcyBpbiBwcm9ncmVzcyB0byBwcmV2ZW50XG4gICAgICAvLyB0aGVtIGZyb20gYXJyaXZpbmcgYXQgdGhlIHNlcnZlciBpbnRlcmxlYXZlZCB3aXRoIGhpc3RvcnkuXG4gICAgICBpZiAoZmx1c2hHYXRlLmVucXVldWUoLi4uZmlsdGVyZWQpKSB7XG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICBgW2JyaWRnZTpyZXBsXSBRdWV1ZWQgJHtmaWx0ZXJlZC5sZW5ndGh9IG1lc3NhZ2UocykgZHVyaW5nIGluaXRpYWwgZmx1c2hgLFxuICAgICAgICApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoIXRyYW5zcG9ydCkge1xuICAgICAgICBjb25zdCB0eXBlcyA9IGZpbHRlcmVkLm1hcChtID0+IG0udHlwZSkuam9pbignLCcpXG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICBgW2JyaWRnZTpyZXBsXSBUcmFuc3BvcnQgbm90IGNvbmZpZ3VyZWQsIGRyb3BwaW5nICR7ZmlsdGVyZWQubGVuZ3RofSBtZXNzYWdlKHMpIFske3R5cGVzfV0gZm9yIHNlc3Npb249JHtjdXJyZW50U2Vzc2lvbklkfWAsXG4gICAgICAgICAgeyBsZXZlbDogJ3dhcm4nIH0sXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIFRyYWNrIGluIHRoZSBib3VuZGVkIHJpbmcgYnVmZmVyIGZvciBlY2hvIGZpbHRlcmluZyBhbmQgZGVkdXAuXG4gICAgICBmb3IgKGNvbnN0IG1zZyBvZiBmaWx0ZXJlZCkge1xuICAgICAgICByZWNlbnRQb3N0ZWRVVUlEcy5hZGQobXNnLnV1aWQpXG4gICAgICB9XG5cbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFticmlkZ2U6cmVwbF0gU2VuZGluZyAke2ZpbHRlcmVkLmxlbmd0aH0gbWVzc2FnZShzKSB2aWEgdHJhbnNwb3J0YCxcbiAgICAgIClcblxuICAgICAgLy8gQ29udmVydCB0byBTREsgZm9ybWF0IGFuZCBzZW5kIHZpYSBIVFRQIFBPU1QgKEh5YnJpZFRyYW5zcG9ydCkuXG4gICAgICAvLyBUaGUgd2ViIFVJIHJlY2VpdmVzIHRoZW0gdmlhIHRoZSBzdWJzY3JpYmUgV2ViU29ja2V0LlxuICAgICAgY29uc3Qgc2RrTWVzc2FnZXMgPSB0b1NES01lc3NhZ2VzKGZpbHRlcmVkKVxuICAgICAgY29uc3QgZXZlbnRzID0gc2RrTWVzc2FnZXMubWFwKHNka01zZyA9PiAoe1xuICAgICAgICAuLi5zZGtNc2csXG4gICAgICAgIHNlc3Npb25faWQ6IGN1cnJlbnRTZXNzaW9uSWQsXG4gICAgICB9KSlcbiAgICAgIHZvaWQgdHJhbnNwb3J0LndyaXRlQmF0Y2goZXZlbnRzKVxuICAgIH0sXG4gICAgd3JpdGVTZGtNZXNzYWdlcyhtZXNzYWdlcykge1xuICAgICAgLy8gRGFlbW9uIHBhdGg6IHF1ZXJ5KCkgYWxyZWFkeSB5aWVsZHMgU0RLTWVzc2FnZSwgc2tpcCBjb252ZXJzaW9uLlxuICAgICAgLy8gU3RpbGwgcnVuIGVjaG8gZGVkdXAgKHNlcnZlciBib3VuY2VzIHdyaXRlcyBiYWNrIG9uIHRoZSBXUykuXG4gICAgICAvLyBObyBpbml0aWFsTWVzc2FnZVVVSURzIGZpbHRlciBcdTIwMTQgZGFlbW9uIGhhcyBubyBpbml0aWFsIG1lc3NhZ2VzLlxuICAgICAgLy8gTm8gZmx1c2hHYXRlIFx1MjAxNCBkYWVtb24gbmV2ZXIgc3RhcnRzIGl0IChubyBpbml0aWFsIGZsdXNoKS5cbiAgICAgIGNvbnN0IGZpbHRlcmVkID0gbWVzc2FnZXMuZmlsdGVyKFxuICAgICAgICBtID0+ICFtLnV1aWQgfHwgIXJlY2VudFBvc3RlZFVVSURzLmhhcyhtLnV1aWQpLFxuICAgICAgKVxuICAgICAgaWYgKGZpbHRlcmVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG4gICAgICBpZiAoIXRyYW5zcG9ydCkge1xuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgYFticmlkZ2U6cmVwbF0gVHJhbnNwb3J0IG5vdCBjb25maWd1cmVkLCBkcm9wcGluZyAke2ZpbHRlcmVkLmxlbmd0aH0gU0RLIG1lc3NhZ2UocykgZm9yIHNlc3Npb249JHtjdXJyZW50U2Vzc2lvbklkfWAsXG4gICAgICAgICAgeyBsZXZlbDogJ3dhcm4nIH0sXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IG1zZyBvZiBmaWx0ZXJlZCkge1xuICAgICAgICBpZiAobXNnLnV1aWQpIHJlY2VudFBvc3RlZFVVSURzLmFkZChtc2cudXVpZClcbiAgICAgIH1cbiAgICAgIGNvbnN0IGV2ZW50cyA9IGZpbHRlcmVkLm1hcChtID0+ICh7IC4uLm0sIHNlc3Npb25faWQ6IGN1cnJlbnRTZXNzaW9uSWQgfSkpXG4gICAgICB2b2lkIHRyYW5zcG9ydC53cml0ZUJhdGNoKGV2ZW50cylcbiAgICB9LFxuICAgIHNlbmRDb250cm9sUmVxdWVzdChyZXF1ZXN0OiBTREtDb250cm9sUmVxdWVzdCkge1xuICAgICAgaWYgKCF0cmFuc3BvcnQpIHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICdbYnJpZGdlOnJlcGxdIFRyYW5zcG9ydCBub3QgY29uZmlndXJlZCwgc2tpcHBpbmcgY29udHJvbF9yZXF1ZXN0JyxcbiAgICAgICAgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IGV2ZW50ID0geyAuLi5yZXF1ZXN0LCBzZXNzaW9uX2lkOiBjdXJyZW50U2Vzc2lvbklkIH1cbiAgICAgIHZvaWQgdHJhbnNwb3J0LndyaXRlKGV2ZW50KVxuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgW2JyaWRnZTpyZXBsXSBTZW50IGNvbnRyb2xfcmVxdWVzdCByZXF1ZXN0X2lkPSR7cmVxdWVzdC5yZXF1ZXN0X2lkfWAsXG4gICAgICApXG4gICAgfSxcbiAgICBzZW5kQ29udHJvbFJlc3BvbnNlKHJlc3BvbnNlOiBTREtDb250cm9sUmVzcG9uc2UpIHtcbiAgICAgIGlmICghdHJhbnNwb3J0KSB7XG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAnW2JyaWRnZTpyZXBsXSBUcmFuc3BvcnQgbm90IGNvbmZpZ3VyZWQsIHNraXBwaW5nIGNvbnRyb2xfcmVzcG9uc2UnLFxuICAgICAgICApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3QgZXZlbnQgPSB7IC4uLnJlc3BvbnNlLCBzZXNzaW9uX2lkOiBjdXJyZW50U2Vzc2lvbklkIH1cbiAgICAgIHZvaWQgdHJhbnNwb3J0LndyaXRlKGV2ZW50KVxuICAgICAgbG9nRm9yRGVidWdnaW5nKCdbYnJpZGdlOnJlcGxdIFNlbnQgY29udHJvbF9yZXNwb25zZScpXG4gICAgfSxcbiAgICBzZW5kQ29udHJvbENhbmNlbFJlcXVlc3QocmVxdWVzdElkOiBzdHJpbmcpIHtcbiAgICAgIGlmICghdHJhbnNwb3J0KSB7XG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAnW2JyaWRnZTpyZXBsXSBUcmFuc3BvcnQgbm90IGNvbmZpZ3VyZWQsIHNraXBwaW5nIGNvbnRyb2xfY2FuY2VsX3JlcXVlc3QnLFxuICAgICAgICApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICAgIHR5cGU6ICdjb250cm9sX2NhbmNlbF9yZXF1ZXN0JyBhcyBjb25zdCxcbiAgICAgICAgcmVxdWVzdF9pZDogcmVxdWVzdElkLFxuICAgICAgICBzZXNzaW9uX2lkOiBjdXJyZW50U2Vzc2lvbklkLFxuICAgICAgfVxuICAgICAgdm9pZCB0cmFuc3BvcnQud3JpdGUoZXZlbnQpXG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBbYnJpZGdlOnJlcGxdIFNlbnQgY29udHJvbF9jYW5jZWxfcmVxdWVzdCByZXF1ZXN0X2lkPSR7cmVxdWVzdElkfWAsXG4gICAgICApXG4gICAgfSxcbiAgICBzZW5kUmVzdWx0KCkge1xuICAgICAgaWYgKCF0cmFuc3BvcnQpIHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgIGBbYnJpZGdlOnJlcGxdIHNlbmRSZXN1bHQ6IHNraXBwaW5nLCB0cmFuc3BvcnQgbm90IGNvbmZpZ3VyZWQgc2Vzc2lvbj0ke2N1cnJlbnRTZXNzaW9uSWR9YCxcbiAgICAgICAgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHZvaWQgdHJhbnNwb3J0LndyaXRlKG1ha2VSZXN1bHRNZXNzYWdlKGN1cnJlbnRTZXNzaW9uSWQpKVxuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgW2JyaWRnZTpyZXBsXSBTZW50IHJlc3VsdCBmb3Igc2Vzc2lvbj0ke2N1cnJlbnRTZXNzaW9uSWR9YCxcbiAgICAgIClcbiAgICB9LFxuICAgIGFzeW5jIHRlYXJkb3duKCkge1xuICAgICAgdW5yZWdpc3RlcigpXG4gICAgICBhd2FpdCBkb1RlYXJkb3duSW1wbD8uKClcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZygnW2JyaWRnZTpyZXBsXSBUb3JuIGRvd24nKVxuICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2JyaWRnZV9yZXBsX3RlYXJkb3duJywge30pXG4gICAgfSxcbiAgfVxufVxuXG4vKipcbiAqIFBlcnNpc3RlbnQgcG9sbCBsb29wIGZvciB3b3JrIGl0ZW1zLiBSdW5zIGluIHRoZSBiYWNrZ3JvdW5kIGZvciB0aGVcbiAqIGxpZmV0aW1lIG9mIHRoZSBicmlkZ2UgY29ubmVjdGlvbi5cbiAqXG4gKiBXaGVuIGEgd29yayBpdGVtIGFycml2ZXMsIGFja25vd2xlZGdlcyBpdCBhbmQgY2FsbHMgb25Xb3JrUmVjZWl2ZWRcbiAqIHdpdGggdGhlIHNlc3Npb24gSUQgYW5kIGluZ3Jlc3MgdG9rZW4gKHdoaWNoIGNvbm5lY3RzIHRoZSBpbmdyZXNzXG4gKiBXZWJTb2NrZXQpLiBUaGVuIGNvbnRpbnVlcyBwb2xsaW5nIFx1MjAxNCB0aGUgc2VydmVyIHdpbGwgZGlzcGF0Y2ggYSBuZXdcbiAqIHdvcmsgaXRlbSBpZiB0aGUgaW5ncmVzcyBXZWJTb2NrZXQgZHJvcHMsIGFsbG93aW5nIGF1dG9tYXRpY1xuICogcmVjb25uZWN0aW9uIHdpdGhvdXQgdGVhcmluZyBkb3duIHRoZSBicmlkZ2UuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0V29ya1BvbGxMb29wKHtcbiAgYXBpLFxuICBnZXRDcmVkZW50aWFscyxcbiAgc2lnbmFsLFxuICBvblN0YXRlQ2hhbmdlLFxuICBvbldvcmtSZWNlaXZlZCxcbiAgb25FbnZpcm9ubWVudExvc3QsXG4gIGdldFdzU3RhdGUsXG4gIGlzQXRDYXBhY2l0eSxcbiAgY2FwYWNpdHlTaWduYWwsXG4gIG9uRmF0YWxFcnJvcixcbiAgZ2V0UG9sbEludGVydmFsQ29uZmlnID0gKCkgPT4gREVGQVVMVF9QT0xMX0NPTkZJRyxcbiAgZ2V0SGVhcnRiZWF0SW5mbyxcbiAgb25IZWFydGJlYXRGYXRhbCxcbn06IHtcbiAgYXBpOiBCcmlkZ2VBcGlDbGllbnRcbiAgZ2V0Q3JlZGVudGlhbHM6ICgpID0+IHsgZW52aXJvbm1lbnRJZDogc3RyaW5nOyBlbnZpcm9ubWVudFNlY3JldDogc3RyaW5nIH1cbiAgc2lnbmFsOiBBYm9ydFNpZ25hbFxuICBvblN0YXRlQ2hhbmdlPzogKHN0YXRlOiBCcmlkZ2VTdGF0ZSwgZGV0YWlsPzogc3RyaW5nKSA9PiB2b2lkXG4gIG9uV29ya1JlY2VpdmVkOiAoXG4gICAgc2Vzc2lvbklkOiBzdHJpbmcsXG4gICAgaW5ncmVzc1Rva2VuOiBzdHJpbmcsXG4gICAgd29ya0lkOiBzdHJpbmcsXG4gICAgdXNlQ29kZVNlc3Npb25zOiBib29sZWFuLFxuICApID0+IHZvaWRcbiAgLyoqIENhbGxlZCB3aGVuIHRoZSBlbnZpcm9ubWVudCBoYXMgYmVlbiBkZWxldGVkLiBSZXR1cm5zIG5ldyBjcmVkZW50aWFscyBvciBudWxsLiAqL1xuICBvbkVudmlyb25tZW50TG9zdD86ICgpID0+IFByb21pc2U8e1xuICAgIGVudmlyb25tZW50SWQ6IHN0cmluZ1xuICAgIGVudmlyb25tZW50U2VjcmV0OiBzdHJpbmdcbiAgfSB8IG51bGw+XG4gIC8qKiBSZXR1cm5zIHRoZSBjdXJyZW50IFdlYlNvY2tldCByZWFkeVN0YXRlIGxhYmVsIGZvciBkaWFnbm9zdGljIGxvZ2dpbmcuICovXG4gIGdldFdzU3RhdGU/OiAoKSA9PiBzdHJpbmdcbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSB3aGVuIHRoZSBjYWxsZXIgY2Fubm90IGFjY2VwdCBuZXcgd29yayAodHJhbnNwb3J0IGFscmVhZHlcbiAgICogY29ubmVjdGVkKS4gV2hlbiB0cnVlLCB0aGUgbG9vcCBwb2xscyBhdCB0aGUgY29uZmlndXJlZCBhdC1jYXBhY2l0eVxuICAgKiBpbnRlcnZhbCBhcyBhIGhlYXJ0YmVhdCBvbmx5LiBTZXJ2ZXItc2lkZSBCUklER0VfTEFTVF9QT0xMX1RUTCBpc1xuICAgKiA0IGhvdXJzIFx1MjAxNCBhbnl0aGluZyBzaG9ydGVyIHRoYW4gdGhhdCBpcyBzdWZmaWNpZW50IGZvciBsaXZlbmVzcy5cbiAgICovXG4gIGlzQXRDYXBhY2l0eT86ICgpID0+IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByb2R1Y2VzIGEgc2lnbmFsIHRoYXQgYWJvcnRzIHdoZW4gY2FwYWNpdHkgZnJlZXMgdXAgKHRyYW5zcG9ydCBsb3N0KSxcbiAgICogbWVyZ2VkIHdpdGggdGhlIGxvb3Agc2lnbmFsLiBVc2VkIHRvIGludGVycnVwdCB0aGUgYXQtY2FwYWNpdHkgc2xlZXBcbiAgICogc28gcmVjb3ZlcnkgcG9sbGluZyBzdGFydHMgaW1tZWRpYXRlbHkuXG4gICAqL1xuICBjYXBhY2l0eVNpZ25hbD86ICgpID0+IENhcGFjaXR5U2lnbmFsXG4gIC8qKiBDYWxsZWQgb24gdW5yZWNvdmVyYWJsZSBlcnJvcnMgKGUuZy4gc2VydmVyLXNpZGUgZXhwaXJ5KSB0byB0cmlnZ2VyIGZ1bGwgdGVhcmRvd24uICovXG4gIG9uRmF0YWxFcnJvcj86ICgpID0+IHZvaWRcbiAgLyoqIFBvbGwgaW50ZXJ2YWwgY29uZmlnIGdldHRlciBcdTIwMTQgZGVmYXVsdHMgdG8gREVGQVVMVF9QT0xMX0NPTkZJRy4gKi9cbiAgZ2V0UG9sbEludGVydmFsQ29uZmlnPzogKCkgPT4gUG9sbEludGVydmFsQ29uZmlnXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHdvcmsgSUQgYW5kIHNlc3Npb24gaW5ncmVzcyB0b2tlbiBmb3IgaGVhcnRiZWF0LlxuICAgKiBXaGVuIG51bGwsIGhlYXJ0YmVhdCBpcyBub3QgcG9zc2libGUgKG5vIGFjdGl2ZSB3b3JrIGl0ZW0pLlxuICAgKi9cbiAgZ2V0SGVhcnRiZWF0SW5mbz86ICgpID0+IHtcbiAgICBlbnZpcm9ubWVudElkOiBzdHJpbmdcbiAgICB3b3JrSWQ6IHN0cmluZ1xuICAgIHNlc3Npb25Ub2tlbjogc3RyaW5nXG4gIH0gfCBudWxsXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBoZWFydGJlYXRXb3JrIHRocm93cyBCcmlkZ2VGYXRhbEVycm9yICg0MDEvNDAzLzQwNC80MTAgXHUyMDE0XG4gICAqIEpXVCBleHBpcmVkIG9yIHdvcmsgaXRlbSBnb25lKS4gQ2FsbGVyIHNob3VsZCB0ZWFyIGRvd24gdGhlIHRyYW5zcG9ydFxuICAgKiArIHdvcmsgc3RhdGUgc28gaXNBdENhcGFjaXR5KCkgZmxpcHMgdG8gZmFsc2UgYW5kIHRoZSBsb29wIGZhc3QtcG9sbHNcbiAgICogZm9yIHRoZSBzZXJ2ZXIncyByZS1kaXNwYXRjaGVkIHdvcmsgaXRlbS4gV2hlbiBwcm92aWRlZCwgdGhlIGxvb3BcbiAgICogU0tJUFMgdGhlIGF0LWNhcGFjaXR5IGJhY2tvZmYgc2xlZXAgKHdoaWNoIHdvdWxkIG90aGVyd2lzZSBjYXVzZSBhXG4gICAqIH4xMC1taW51dGUgZGVhZCB3aW5kb3cgYmVmb3JlIHJlY292ZXJ5KS4gV2hlbiBvbWl0dGVkLCBmYWxscyBiYWNrIHRvXG4gICAqIHRoZSBiYWNrb2ZmIHNsZWVwIHRvIGF2b2lkIGEgdGlnaHQgcG9sbCtoZWFydGJlYXQgbG9vcC5cbiAgICovXG4gIG9uSGVhcnRiZWF0RmF0YWw/OiAoZXJyOiBCcmlkZ2VGYXRhbEVycm9yKSA9PiB2b2lkXG59KTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IE1BWF9FTlZJUk9OTUVOVF9SRUNSRUFUSU9OUyA9IDNcblxuICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgYFticmlkZ2U6cmVwbF0gU3RhcnRpbmcgd29yayBwb2xsIGxvb3AgZm9yIGVudj0ke2dldENyZWRlbnRpYWxzKCkuZW52aXJvbm1lbnRJZH1gLFxuICApXG5cbiAgbGV0IGNvbnNlY3V0aXZlRXJyb3JzID0gMFxuICBsZXQgZmlyc3RFcnJvclRpbWU6IG51bWJlciB8IG51bGwgPSBudWxsXG4gIGxldCBsYXN0UG9sbEVycm9yVGltZTogbnVtYmVyIHwgbnVsbCA9IG51bGxcbiAgbGV0IGVudmlyb25tZW50UmVjcmVhdGlvbnMgPSAwXG4gIC8vIFNldCB3aGVuIHRoZSBhdC1jYXBhY2l0eSBzbGVlcCBvdmVycnVucyBpdHMgZGVhZGxpbmUgYnkgYSBsYXJnZSBtYXJnaW5cbiAgLy8gKHByb2Nlc3Mgc3VzcGVuc2lvbikuIENvbnN1bWVkIGF0IHRoZSB0b3Agb2YgdGhlIG5leHQgaXRlcmF0aW9uIHRvXG4gIC8vIGZvcmNlIG9uZSBmYXN0LXBvbGwgY3ljbGUgXHUyMDE0IGlzQXRDYXBhY2l0eSgpIGlzIGB0cmFuc3BvcnQgIT09IG51bGxgLFxuICAvLyB3aGljaCBzdGF5cyB0cnVlIHdoaWxlIHRoZSB0cmFuc3BvcnQgYXV0by1yZWNvbm5lY3RzLCBzbyB0aGUgcG9sbFxuICAvLyBsb29wIHdvdWxkIG90aGVyd2lzZSBnbyBzdHJhaWdodCBiYWNrIHRvIGEgMTAtbWludXRlIHNsZWVwIG9uIGFcbiAgLy8gdHJhbnNwb3J0IHRoYXQgbWF5IGJlIHBvaW50ZWQgYXQgYSBkZWFkIHNvY2tldC5cbiAgbGV0IHN1c3BlbnNpb25EZXRlY3RlZCA9IGZhbHNlXG5cbiAgd2hpbGUgKCFzaWduYWwuYWJvcnRlZCkge1xuICAgIC8vIENhcHR1cmUgY3JlZGVudGlhbHMgb3V0c2lkZSB0cnkgc28gdGhlIGNhdGNoIGJsb2NrIGNhbiBkZXRlY3RcbiAgICAvLyB3aGV0aGVyIGEgY29uY3VycmVudCByZWNvbm5lY3Rpb24gcmVwbGFjZWQgdGhlIGVudmlyb25tZW50LlxuICAgIGNvbnN0IHsgZW52aXJvbm1lbnRJZDogZW52SWQsIGVudmlyb25tZW50U2VjcmV0OiBlbnZTZWNyZXQgfSA9XG4gICAgICBnZXRDcmVkZW50aWFscygpXG4gICAgY29uc3QgcG9sbENvbmZpZyA9IGdldFBvbGxJbnRlcnZhbENvbmZpZygpXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHdvcmsgPSBhd2FpdCBhcGkucG9sbEZvcldvcmsoXG4gICAgICAgIGVudklkLFxuICAgICAgICBlbnZTZWNyZXQsXG4gICAgICAgIHNpZ25hbCxcbiAgICAgICAgcG9sbENvbmZpZy5yZWNsYWltX29sZGVyX3RoYW5fbXMsXG4gICAgICApXG5cbiAgICAgIC8vIEEgc3VjY2Vzc2Z1bCBwb2xsIHByb3ZlcyB0aGUgZW52IGlzIGdlbnVpbmVseSBoZWFsdGh5IFx1MjAxNCByZXNldCB0aGVcbiAgICAgIC8vIGVudi1sb3NzIGNvdW50ZXIgc28gZXZlbnRzIGhvdXJzIGFwYXJ0IGVhY2ggc3RhcnQgZnJlc2guIE91dHNpZGVcbiAgICAgIC8vIHRoZSBzdGF0ZS1jaGFuZ2UgZ3VhcmQgYmVsb3cgYmVjYXVzZSBvbkVudkxvc3QncyBzdWNjZXNzIHBhdGhcbiAgICAgIC8vIGFscmVhZHkgZW1pdHMgJ3JlYWR5JzsgZW1pdHRpbmcgYWdhaW4gaGVyZSB3b3VsZCBiZSBhIGR1cGxpY2F0ZS5cbiAgICAgIC8vIChvbkVudkxvc3QgcmV0dXJuaW5nIGNyZWRzIGRvZXMgTk9UIHJlc2V0IHRoaXMgXHUyMDE0IHRoYXQgd291bGQgYnJlYWtcbiAgICAgIC8vIG9zY2lsbGF0aW9uIHByb3RlY3Rpb24gd2hlbiB0aGUgbmV3IGVudiBpbW1lZGlhdGVseSBkaWVzLilcbiAgICAgIGVudmlyb25tZW50UmVjcmVhdGlvbnMgPSAwXG5cbiAgICAgIC8vIFJlc2V0IGVycm9yIHRyYWNraW5nIG9uIHN1Y2Nlc3NmdWwgcG9sbFxuICAgICAgaWYgKGNvbnNlY3V0aXZlRXJyb3JzID4gMCkge1xuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgYFticmlkZ2U6cmVwbF0gUG9sbCByZWNvdmVyZWQgYWZ0ZXIgJHtjb25zZWN1dGl2ZUVycm9yc30gY29uc2VjdXRpdmUgZXJyb3IocylgLFxuICAgICAgICApXG4gICAgICAgIGNvbnNlY3V0aXZlRXJyb3JzID0gMFxuICAgICAgICBmaXJzdEVycm9yVGltZSA9IG51bGxcbiAgICAgICAgbGFzdFBvbGxFcnJvclRpbWUgPSBudWxsXG4gICAgICAgIG9uU3RhdGVDaGFuZ2U/LigncmVhZHknKVxuICAgICAgfVxuXG4gICAgICBpZiAoIXdvcmspIHtcbiAgICAgICAgLy8gUmVhZC1hbmQtY2xlYXI6IGFmdGVyIGEgZGV0ZWN0ZWQgc3VzcGVuc2lvbiwgc2tpcCB0aGUgYXQtY2FwYWNpdHlcbiAgICAgICAgLy8gYnJhbmNoIGV4YWN0bHkgb25jZS4gVGhlIHBvbGxGb3JXb3JrIGFib3ZlIGFscmVhZHkgcmVmcmVzaGVkIHRoZVxuICAgICAgICAvLyBzZXJ2ZXIncyBCUklER0VfTEFTVF9QT0xMX1RUTDsgdGhpcyBmYXN0IGN5Y2xlIGdpdmVzIGFueVxuICAgICAgICAvLyByZS1kaXNwYXRjaGVkIHdvcmsgaXRlbSBhIGNoYW5jZSB0byBsYW5kIGJlZm9yZSB3ZSBnbyBiYWNrIHVuZGVyLlxuICAgICAgICBjb25zdCBza2lwQXRDYXBhY2l0eU9uY2UgPSBzdXNwZW5zaW9uRGV0ZWN0ZWRcbiAgICAgICAgc3VzcGVuc2lvbkRldGVjdGVkID0gZmFsc2VcbiAgICAgICAgaWYgKGlzQXRDYXBhY2l0eT8uKCkgJiYgY2FwYWNpdHlTaWduYWwgJiYgIXNraXBBdENhcGFjaXR5T25jZSkge1xuICAgICAgICAgIGNvbnN0IGF0Q2FwTXMgPSBwb2xsQ29uZmlnLnBvbGxfaW50ZXJ2YWxfbXNfYXRfY2FwYWNpdHlcbiAgICAgICAgICAvLyBIZWFydGJlYXQgbG9vcHMgV0lUSE9VVCBwb2xsaW5nLiBXaGVuIGF0LWNhcGFjaXR5IHBvbGxpbmcgaXMgYWxzb1xuICAgICAgICAgIC8vIGVuYWJsZWQgKGF0Q2FwTXMgPiAwKSwgdGhlIGxvb3AgdHJhY2tzIGEgZGVhZGxpbmUgYW5kIGJyZWFrcyBvdXRcbiAgICAgICAgICAvLyB0byBwb2xsIGF0IHRoYXQgaW50ZXJ2YWwgXHUyMDE0IGhlYXJ0YmVhdCBhbmQgcG9sbCBjb21wb3NlIGluc3RlYWQgb2ZcbiAgICAgICAgICAvLyBvbmUgc3VwcHJlc3NpbmcgdGhlIG90aGVyLiBCcmVha3Mgb3V0IHdoZW46XG4gICAgICAgICAgLy8gICAtIFBvbGwgZGVhZGxpbmUgcmVhY2hlZCAoYXRDYXBNcyA+IDAgb25seSlcbiAgICAgICAgICAvLyAgIC0gQXV0aCBmYWlscyAoSldUIGV4cGlyZWQgXHUyMTkyIHBvbGwgcmVmcmVzaGVzIHRva2VucylcbiAgICAgICAgICAvLyAgIC0gQ2FwYWNpdHkgd2FrZSBmaXJlcyAodHJhbnNwb3J0IGxvc3QgXHUyMTkyIHBvbGwgZm9yIG5ldyB3b3JrKVxuICAgICAgICAgIC8vICAgLSBIZWFydGJlYXQgY29uZmlnIGRpc2FibGVkIChHcm93dGhCb29rIHVwZGF0ZSlcbiAgICAgICAgICAvLyAgIC0gTG9vcCBhYm9ydGVkIChzaHV0ZG93bilcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBwb2xsQ29uZmlnLm5vbl9leGNsdXNpdmVfaGVhcnRiZWF0X2ludGVydmFsX21zID4gMCAmJlxuICAgICAgICAgICAgZ2V0SGVhcnRiZWF0SW5mb1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2JyaWRnZV9oZWFydGJlYXRfbW9kZV9lbnRlcmVkJywge1xuICAgICAgICAgICAgICBoZWFydGJlYXRfaW50ZXJ2YWxfbXM6XG4gICAgICAgICAgICAgICAgcG9sbENvbmZpZy5ub25fZXhjbHVzaXZlX2hlYXJ0YmVhdF9pbnRlcnZhbF9tcyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBEZWFkbGluZSBjb21wdXRlZCBvbmNlIGF0IGVudHJ5IFx1MjAxNCBHQiB1cGRhdGVzIHRvIGF0Q2FwTXMgZG9uJ3RcbiAgICAgICAgICAgIC8vIHNoaWZ0IGFuIGluLWZsaWdodCBkZWFkbGluZSAobmV4dCBlbnRyeSBwaWNrcyB1cCB0aGUgbmV3IHZhbHVlKS5cbiAgICAgICAgICAgIGNvbnN0IHBvbGxEZWFkbGluZSA9IGF0Q2FwTXMgPiAwID8gRGF0ZS5ub3coKSArIGF0Q2FwTXMgOiBudWxsXG4gICAgICAgICAgICBsZXQgbmVlZHNCYWNrb2ZmID0gZmFsc2VcbiAgICAgICAgICAgIGxldCBoYkN5Y2xlcyA9IDBcbiAgICAgICAgICAgIHdoaWxlIChcbiAgICAgICAgICAgICAgIXNpZ25hbC5hYm9ydGVkICYmXG4gICAgICAgICAgICAgIGlzQXRDYXBhY2l0eSgpICYmXG4gICAgICAgICAgICAgIChwb2xsRGVhZGxpbmUgPT09IG51bGwgfHwgRGF0ZS5ub3coKSA8IHBvbGxEZWFkbGluZSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBjb25zdCBoYkNvbmZpZyA9IGdldFBvbGxJbnRlcnZhbENvbmZpZygpXG4gICAgICAgICAgICAgIGlmIChoYkNvbmZpZy5ub25fZXhjbHVzaXZlX2hlYXJ0YmVhdF9pbnRlcnZhbF9tcyA8PSAwKSBicmVha1xuXG4gICAgICAgICAgICAgIGNvbnN0IGluZm8gPSBnZXRIZWFydGJlYXRJbmZvKClcbiAgICAgICAgICAgICAgaWYgKCFpbmZvKSBicmVha1xuXG4gICAgICAgICAgICAgIC8vIENhcHR1cmUgY2FwYWNpdHkgc2lnbmFsIEJFRk9SRSB0aGUgYXN5bmMgaGVhcnRiZWF0IGNhbGwgc29cbiAgICAgICAgICAgICAgLy8gYSB0cmFuc3BvcnQgbG9zcyBkdXJpbmcgdGhlIEhUVFAgcmVxdWVzdCBpcyBjYXVnaHQgYnkgdGhlXG4gICAgICAgICAgICAgIC8vIHN1YnNlcXVlbnQgc2xlZXAuXG4gICAgICAgICAgICAgIGNvbnN0IGNhcCA9IGNhcGFjaXR5U2lnbmFsKClcblxuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGFwaS5oZWFydGJlYXRXb3JrKFxuICAgICAgICAgICAgICAgICAgaW5mby5lbnZpcm9ubWVudElkLFxuICAgICAgICAgICAgICAgICAgaW5mby53b3JrSWQsXG4gICAgICAgICAgICAgICAgICBpbmZvLnNlc3Npb25Ub2tlbixcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgICAgIGBbYnJpZGdlOnJlcGw6aGVhcnRiZWF0XSBGYWlsZWQ6ICR7ZXJyb3JNZXNzYWdlKGVycil9YCxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEJyaWRnZUZhdGFsRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgIGNhcC5jbGVhbnVwKClcbiAgICAgICAgICAgICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9icmlkZ2VfaGVhcnRiZWF0X2Vycm9yJywge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6XG4gICAgICAgICAgICAgICAgICAgICAgZXJyLnN0YXR1cyBhcyB1bmtub3duIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yX3R5cGU6IChlcnIuc3RhdHVzID09PSA0MDEgfHwgZXJyLnN0YXR1cyA9PT0gNDAzXG4gICAgICAgICAgICAgICAgICAgICAgPyAnYXV0aF9mYWlsZWQnXG4gICAgICAgICAgICAgICAgICAgICAgOiAnZmF0YWwnKSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIC8vIEpXVCBleHBpcmVkICg0MDEvNDAzKSBvciB3b3JrIGl0ZW0gZ29uZSAoNDA0LzQxMCkuXG4gICAgICAgICAgICAgICAgICAvLyBFaXRoZXIgd2F5IHRoZSBjdXJyZW50IHRyYW5zcG9ydCBpcyBkZWFkIFx1MjAxNCBTU0VcbiAgICAgICAgICAgICAgICAgIC8vIHJlY29ubmVjdHMgYW5kIENDUiB3cml0ZXMgd2lsbCBmYWlsIG9uIHRoZSBzYW1lXG4gICAgICAgICAgICAgICAgICAvLyBzdGFsZSB0b2tlbi4gSWYgdGhlIGNhbGxlciBnYXZlIHVzIGEgcmVjb3ZlcnkgaG9vayxcbiAgICAgICAgICAgICAgICAgIC8vIHRlYXIgZG93biB3b3JrIHN0YXRlIGFuZCBza2lwIGJhY2tvZmY6IGlzQXRDYXBhY2l0eSgpXG4gICAgICAgICAgICAgICAgICAvLyBmbGlwcyB0byBmYWxzZSwgbmV4dCBvdXRlci1sb29wIGl0ZXJhdGlvbiBmYXN0LXBvbGxzXG4gICAgICAgICAgICAgICAgICAvLyBmb3IgdGhlIHNlcnZlcidzIHJlLWRpc3BhdGNoZWQgd29yayBpdGVtLiBXaXRob3V0XG4gICAgICAgICAgICAgICAgICAvLyB0aGUgaG9vaywgYmFja29mZiB0byBhdm9pZCB0aWdodCBwb2xsK2hlYXJ0YmVhdCBsb29wLlxuICAgICAgICAgICAgICAgICAgaWYgKG9uSGVhcnRiZWF0RmF0YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgb25IZWFydGJlYXRGYXRhbChlcnIpXG4gICAgICAgICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgICAgICAgICBgW2JyaWRnZTpyZXBsOmhlYXJ0YmVhdF0gRmF0YWwgKHN0YXR1cz0ke2Vyci5zdGF0dXN9KSwgd29yayBzdGF0ZSBjbGVhcmVkIFx1MjAxNCBmYXN0LXBvbGxpbmcgZm9yIHJlLWRpc3BhdGNoYCxcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmVlZHNCYWNrb2ZmID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBoYkN5Y2xlcysrXG4gICAgICAgICAgICAgIGF3YWl0IHNsZWVwKFxuICAgICAgICAgICAgICAgIGhiQ29uZmlnLm5vbl9leGNsdXNpdmVfaGVhcnRiZWF0X2ludGVydmFsX21zLFxuICAgICAgICAgICAgICAgIGNhcC5zaWduYWwsXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgY2FwLmNsZWFudXAoKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBleGl0UmVhc29uID0gbmVlZHNCYWNrb2ZmXG4gICAgICAgICAgICAgID8gJ2Vycm9yJ1xuICAgICAgICAgICAgICA6IHNpZ25hbC5hYm9ydGVkXG4gICAgICAgICAgICAgICAgPyAnc2h1dGRvd24nXG4gICAgICAgICAgICAgICAgOiAhaXNBdENhcGFjaXR5KClcbiAgICAgICAgICAgICAgICAgID8gJ2NhcGFjaXR5X2NoYW5nZWQnXG4gICAgICAgICAgICAgICAgICA6IHBvbGxEZWFkbGluZSAhPT0gbnVsbCAmJiBEYXRlLm5vdygpID49IHBvbGxEZWFkbGluZVxuICAgICAgICAgICAgICAgICAgICA/ICdwb2xsX2R1ZSdcbiAgICAgICAgICAgICAgICAgICAgOiAnY29uZmlnX2Rpc2FibGVkJ1xuICAgICAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2JyaWRnZV9oZWFydGJlYXRfbW9kZV9leGl0ZWQnLCB7XG4gICAgICAgICAgICAgIHJlYXNvbjpcbiAgICAgICAgICAgICAgICBleGl0UmVhc29uIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgICAgICAgIGhlYXJ0YmVhdF9jeWNsZXM6IGhiQ3ljbGVzLFxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8gT24gYXV0aF9mYWlsZWQgb3IgZmF0YWwsIGJhY2tvZmYgYmVmb3JlIHBvbGxpbmcgdG8gYXZvaWQgYVxuICAgICAgICAgICAgLy8gdGlnaHQgcG9sbCtoZWFydGJlYXQgbG9vcC4gRmFsbCB0aHJvdWdoIHRvIHRoZSBzaGFyZWQgc2xlZXBcbiAgICAgICAgICAgIC8vIGJlbG93IFx1MjAxNCBpdCdzIHRoZSBzYW1lIGNhcGFjaXR5U2lnbmFsLXdyYXBwZWQgc2xlZXAgdGhlIGxlZ2FjeVxuICAgICAgICAgICAgLy8gcGF0aCB1c2VzLCBhbmQgYm90aCBuZWVkIHRoZSBzdXNwZW5zaW9uLW92ZXJydW4gY2hlY2suXG4gICAgICAgICAgICBpZiAoIW5lZWRzQmFja29mZikge1xuICAgICAgICAgICAgICBpZiAoZXhpdFJlYXNvbiA9PT0gJ3BvbGxfZHVlJykge1xuICAgICAgICAgICAgICAgIC8vIGJyaWRnZUFwaSB0aHJvdHRsZXMgZW1wdHktcG9sbCBsb2dzIChFTVBUWV9QT0xMX0xPR19JTlRFUlZBTD0xMDApXG4gICAgICAgICAgICAgICAgLy8gc28gdGhlIG9uY2UtcGVyLTEwbWluIHBvbGxfZHVlIHBvbGwgaXMgaW52aXNpYmxlIGF0IGNvdW50ZXI9Mi5cbiAgICAgICAgICAgICAgICAvLyBMb2cgaXQgaGVyZSBzbyB2ZXJpZmljYXRpb24gcnVucyBzZWUgYm90aCBlbmRwb2ludHMgaW4gdGhlIGRlYnVnIGxvZy5cbiAgICAgICAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICAgICAgICBgW2JyaWRnZTpyZXBsXSBIZWFydGJlYXQgcG9sbF9kdWUgYWZ0ZXIgJHtoYkN5Y2xlc30gY3ljbGVzIFx1MjAxNCBmYWxsaW5nIHRocm91Z2ggdG8gcG9sbEZvcldvcmtgLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBBdC1jYXBhY2l0eSBzbGVlcCBcdTIwMTQgcmVhY2hlZCBieSBib3RoIHRoZSBsZWdhY3kgcGF0aCAoaGVhcnRiZWF0XG4gICAgICAgICAgLy8gZGlzYWJsZWQpIGFuZCB0aGUgaGVhcnRiZWF0LWJhY2tvZmYgcGF0aCAobmVlZHNCYWNrb2ZmPXRydWUpLlxuICAgICAgICAgIC8vIE1lcmdlZCBzbyB0aGUgc3VzcGVuc2lvbiBkZXRlY3RvciBjb3ZlcnMgYm90aDsgcHJldmlvdXNseSB0aGVcbiAgICAgICAgICAvLyBiYWNrb2ZmIHBhdGggaGFkIG5vIG92ZXJydW4gY2hlY2sgYW5kIGNvdWxkIGdvIHN0cmFpZ2h0IGJhY2tcbiAgICAgICAgICAvLyB1bmRlciBmb3IgMTAgbWluIGFmdGVyIGEgbGFwdG9wIHdha2UuIFVzZSBhdENhcE1zIHdoZW4gZW5hYmxlZCxcbiAgICAgICAgICAvLyBlbHNlIHRoZSBoZWFydGJlYXQgaW50ZXJ2YWwgYXMgYSBmbG9vciAoZ3VhcmFudGVlZCA+IDAgb24gdGhlXG4gICAgICAgICAgLy8gYmFja29mZiBwYXRoKSBzbyBoZWFydGJlYXQtb25seSBjb25maWdzIGRvbid0IHRpZ2h0LWxvb3AuXG4gICAgICAgICAgY29uc3Qgc2xlZXBNcyA9XG4gICAgICAgICAgICBhdENhcE1zID4gMFxuICAgICAgICAgICAgICA/IGF0Q2FwTXNcbiAgICAgICAgICAgICAgOiBwb2xsQ29uZmlnLm5vbl9leGNsdXNpdmVfaGVhcnRiZWF0X2ludGVydmFsX21zXG4gICAgICAgICAgaWYgKHNsZWVwTXMgPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBjYXAgPSBjYXBhY2l0eVNpZ25hbCgpXG4gICAgICAgICAgICBjb25zdCBzbGVlcFN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgICAgICAgICAgYXdhaXQgc2xlZXAoc2xlZXBNcywgY2FwLnNpZ25hbClcbiAgICAgICAgICAgIGNhcC5jbGVhbnVwKClcbiAgICAgICAgICAgIC8vIFByb2Nlc3Mtc3VzcGVuc2lvbiBkZXRlY3Rvci4gQSBzZXRUaW1lb3V0IG92ZXJzaG9vdGluZyBpdHNcbiAgICAgICAgICAgIC8vIGRlYWRsaW5lIGJ5IDYwcyBtZWFucyB0aGUgcHJvY2VzcyB3YXMgc3VzcGVuZGVkIChsYXB0b3AgbGlkLFxuICAgICAgICAgICAgLy8gU0lHU1RPUCwgVk0gcGF1c2UpIFx1MjAxNCBldmVuIGEgcGF0aG9sb2dpY2FsIEdDIHBhdXNlIGlzIHNlY29uZHMsXG4gICAgICAgICAgICAvLyBub3QgbWludXRlcy4gRWFybHkgYWJvcnRzICh3YWtlUG9sbExvb3AgXHUyMTkyIGNhcC5zaWduYWwpIHByb2R1Y2VcbiAgICAgICAgICAgIC8vIG92ZXJydW4gPCAwIGFuZCBmYWxsIHRocm91Z2guIE5vdGU6IHRoaXMgb25seSBjYXRjaGVzIHNsZWVwc1xuICAgICAgICAgICAgLy8gdGhhdCBvdXRsYXN0IHRoZWlyIGRlYWRsaW5lOyBXZWJTb2NrZXRUcmFuc3BvcnQncyBwaW5nXG4gICAgICAgICAgICAvLyBpbnRlcnZhbCAoMTBzIGdyYW51bGFyaXR5KSBpcyB0aGUgcHJpbWFyeSBkZXRlY3RvciBmb3Igc2hvcnRlclxuICAgICAgICAgICAgLy8gc3VzcGVuc2lvbnMuIFRoaXMgaXMgdGhlIGJhY2tzdG9wIGZvciB3aGVuIHRoYXQgZGV0ZWN0b3IgaXNuJ3RcbiAgICAgICAgICAgIC8vIHJ1bm5pbmcgKHRyYW5zcG9ydCBtaWQtcmVjb25uZWN0LCBpbnRlcnZhbCBzdG9wcGVkKS5cbiAgICAgICAgICAgIGNvbnN0IG92ZXJydW4gPSBEYXRlLm5vdygpIC0gc2xlZXBTdGFydCAtIHNsZWVwTXNcbiAgICAgICAgICAgIGlmIChvdmVycnVuID4gNjBfMDAwKSB7XG4gICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgICBgW2JyaWRnZTpyZXBsXSBBdC1jYXBhY2l0eSBzbGVlcCBvdmVycmFuIGJ5ICR7TWF0aC5yb3VuZChvdmVycnVuIC8gMTAwMCl9cyBcdTIwMTQgcHJvY2VzcyBzdXNwZW5zaW9uIGRldGVjdGVkLCBmb3JjaW5nIG9uZSBmYXN0LXBvbGwgY3ljbGVgLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9icmlkZ2VfcmVwbF9zdXNwZW5zaW9uX2RldGVjdGVkJywge1xuICAgICAgICAgICAgICAgIG92ZXJydW5fbXM6IG92ZXJydW4sXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIHN1c3BlbnNpb25EZXRlY3RlZCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXdhaXQgc2xlZXAocG9sbENvbmZpZy5wb2xsX2ludGVydmFsX21zX25vdF9hdF9jYXBhY2l0eSwgc2lnbmFsKVxuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIERlY29kZSBiZWZvcmUgdHlwZSBkaXNwYXRjaCBcdTIwMTQgbmVlZCB0aGUgSldUIGZvciB0aGUgZXhwbGljaXQgYWNrLlxuICAgICAgbGV0IHNlY3JldFxuICAgICAgdHJ5IHtcbiAgICAgICAgc2VjcmV0ID0gZGVjb2RlV29ya1NlY3JldCh3b3JrLnNlY3JldClcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgYFticmlkZ2U6cmVwbF0gRmFpbGVkIHRvIGRlY29kZSB3b3JrIHNlY3JldDogJHtlcnJvck1lc3NhZ2UoZXJyKX1gLFxuICAgICAgICApXG4gICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9icmlkZ2VfcmVwbF93b3JrX3NlY3JldF9mYWlsZWQnLCB7fSlcbiAgICAgICAgLy8gQ2FuJ3QgYWNrIChuZWVkcyB0aGUgSldUIHdlIGZhaWxlZCB0byBkZWNvZGUpLiBzdG9wV29yayB1c2VzIE9BdXRoLlxuICAgICAgICAvLyBQcmV2ZW50cyBYQVVUT0NMQUlNIHJlLWRlbGl2ZXJpbmcgdGhpcyBwb2lzb25lZCBpdGVtIGV2ZXJ5IGN5Y2xlLlxuICAgICAgICBhd2FpdCBhcGkuc3RvcFdvcmsoZW52SWQsIHdvcmsuaWQsIGZhbHNlKS5jYXRjaCgoKSA9PiB7fSlcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gRXhwbGljaXRseSBhY2tub3dsZWRnZSB0byBwcmV2ZW50IHJlZGVsaXZlcnkuIE5vbi1mYXRhbCBvbiBmYWlsdXJlOlxuICAgICAgLy8gc2VydmVyIHJlLWRlbGl2ZXJzLCBhbmQgdGhlIG9uV29ya1JlY2VpdmVkIGNhbGxiYWNrIGhhbmRsZXMgZGVkdXAuXG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoYFticmlkZ2U6cmVwbF0gQWNrbm93bGVkZ2luZyB3b3JrSWQ9JHt3b3JrLmlkfWApXG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBhcGkuYWNrbm93bGVkZ2VXb3JrKGVudklkLCB3b3JrLmlkLCBzZWNyZXQuc2Vzc2lvbl9pbmdyZXNzX3Rva2VuKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICBgW2JyaWRnZTpyZXBsXSBBY2tub3dsZWRnZSBmYWlsZWQgd29ya0lkPSR7d29yay5pZH06ICR7ZXJyb3JNZXNzYWdlKGVycil9YCxcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAod29yay5kYXRhLnR5cGUgPT09ICdoZWFsdGhjaGVjaycpIHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKCdbYnJpZGdlOnJlcGxdIEhlYWx0aGNoZWNrIHJlY2VpdmVkJylcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgaWYgKHdvcmsuZGF0YS50eXBlID09PSAnc2Vzc2lvbicpIHtcbiAgICAgICAgY29uc3Qgd29ya1Nlc3Npb25JZCA9IHdvcmsuZGF0YS5pZFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhbGlkYXRlQnJpZGdlSWQod29ya1Nlc3Npb25JZCwgJ3Nlc3Npb25faWQnKVxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICBgW2JyaWRnZTpyZXBsXSBJbnZhbGlkIHNlc3Npb25faWQgaW4gd29yazogJHt3b3JrU2Vzc2lvbklkfWAsXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBvbldvcmtSZWNlaXZlZChcbiAgICAgICAgICB3b3JrU2Vzc2lvbklkLFxuICAgICAgICAgIHNlY3JldC5zZXNzaW9uX2luZ3Jlc3NfdG9rZW4sXG4gICAgICAgICAgd29yay5pZCxcbiAgICAgICAgICBzZWNyZXQudXNlX2NvZGVfc2Vzc2lvbnMgPT09IHRydWUsXG4gICAgICAgIClcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKCdbYnJpZGdlOnJlcGxdIFdvcmsgYWNjZXB0ZWQsIGNvbnRpbnVpbmcgcG9sbCBsb29wJylcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChzaWduYWwuYWJvcnRlZCkgYnJlYWtcblxuICAgICAgLy8gRGV0ZWN0IHBlcm1hbmVudCBcImVudmlyb25tZW50IGRlbGV0ZWRcIiBlcnJvciBcdTIwMTQgbm8gYW1vdW50IG9mXG4gICAgICAvLyByZXRyeWluZyB3aWxsIHJlY292ZXIuIFJlLXJlZ2lzdGVyIGEgbmV3IGVudmlyb25tZW50IGluc3RlYWQuXG4gICAgICAvLyBDaGVja2VkIEJFRk9SRSB0aGUgZ2VuZXJpYyBCcmlkZ2VGYXRhbEVycm9yIGJhaWwuIHBvbGxGb3JXb3JrIHVzZXNcbiAgICAgIC8vIHZhbGlkYXRlU3RhdHVzOiBzID0+IHMgPCA1MDAsIHNvIDQwNCBpcyBhbHdheXMgd3JhcHBlZCBpbnRvIGFcbiAgICAgIC8vIEJyaWRnZUZhdGFsRXJyb3IgYnkgaGFuZGxlRXJyb3JTdGF0dXMoKSBcdTIwMTQgbmV2ZXIgYW4gYXhpb3Mtc2hhcGVkXG4gICAgICAvLyBlcnJvci4gVGhlIHBvbGwgZW5kcG9pbnQncyBvbmx5IHBhdGggcGFyYW0gaXMgdGhlIGVudiBJRDsgNDA0XG4gICAgICAvLyB1bmFtYmlndW91c2x5IG1lYW5zIGVudi1nb25lIChuby13b3JrIGlzIGEgMjAwIHdpdGggbnVsbCBib2R5KS5cbiAgICAgIC8vIFRoZSBzZXJ2ZXIgc2VuZHMgZXJyb3IudHlwZT0nbm90X2ZvdW5kX2Vycm9yJyAoc3RhbmRhcmQgQW50aHJvcGljXG4gICAgICAvLyBBUEkgc2hhcGUpLCBub3QgYSBicmlkZ2Utc3BlY2lmaWMgc3RyaW5nIFx1MjAxNCBidXQgc3RhdHVzPT09NDA0IGlzXG4gICAgICAvLyB0aGUgcmVhbCBzaWduYWwgYW5kIHN1cnZpdmVzIGJvZHktc2hhcGUgY2hhbmdlcy5cbiAgICAgIGlmIChcbiAgICAgICAgZXJyIGluc3RhbmNlb2YgQnJpZGdlRmF0YWxFcnJvciAmJlxuICAgICAgICBlcnIuc3RhdHVzID09PSA0MDQgJiZcbiAgICAgICAgb25FbnZpcm9ubWVudExvc3RcbiAgICAgICkge1xuICAgICAgICAvLyBJZiBjcmVkZW50aWFscyBoYXZlIGFscmVhZHkgYmVlbiByZWZyZXNoZWQgYnkgYSBjb25jdXJyZW50XG4gICAgICAgIC8vIHJlY29ubmVjdGlvbiAoZS5nLiBXUyBjbG9zZSBoYW5kbGVyKSwgdGhlIHN0YWxlIHBvbGwncyBlcnJvclxuICAgICAgICAvLyBpcyBleHBlY3RlZCBcdTIwMTQgc2tpcCBvbkVudmlyb25tZW50TG9zdCBhbmQgcmV0cnkgd2l0aCBmcmVzaCBjcmVkcy5cbiAgICAgICAgY29uc3QgY3VycmVudEVudklkID0gZ2V0Q3JlZGVudGlhbHMoKS5lbnZpcm9ubWVudElkXG4gICAgICAgIGlmIChlbnZJZCAhPT0gY3VycmVudEVudklkKSB7XG4gICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgYFticmlkZ2U6cmVwbF0gU3RhbGUgcG9sbCBlcnJvciBmb3Igb2xkIGVudj0ke2VudklkfSwgY3VycmVudCBlbnY9JHtjdXJyZW50RW52SWR9IFx1MjAxNCBza2lwcGluZyBvbkVudmlyb25tZW50TG9zdGAsXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnNlY3V0aXZlRXJyb3JzID0gMFxuICAgICAgICAgIGZpcnN0RXJyb3JUaW1lID0gbnVsbFxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBlbnZpcm9ubWVudFJlY3JlYXRpb25zKytcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgIGBbYnJpZGdlOnJlcGxdIEVudmlyb25tZW50IGRlbGV0ZWQsIGF0dGVtcHRpbmcgcmUtcmVnaXN0cmF0aW9uIChhdHRlbXB0ICR7ZW52aXJvbm1lbnRSZWNyZWF0aW9uc30vJHtNQVhfRU5WSVJPTk1FTlRfUkVDUkVBVElPTlN9KWAsXG4gICAgICAgIClcbiAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2JyaWRnZV9yZXBsX2Vudl9sb3N0Jywge1xuICAgICAgICAgIGF0dGVtcHQ6IGVudmlyb25tZW50UmVjcmVhdGlvbnMsXG4gICAgICAgIH0gYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUylcblxuICAgICAgICBpZiAoZW52aXJvbm1lbnRSZWNyZWF0aW9ucyA+IE1BWF9FTlZJUk9OTUVOVF9SRUNSRUFUSU9OUykge1xuICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgIGBbYnJpZGdlOnJlcGxdIEVudmlyb25tZW50IHJlLXJlZ2lzdHJhdGlvbiBsaW1pdCByZWFjaGVkICgke01BWF9FTlZJUk9OTUVOVF9SRUNSRUFUSU9OU30pLCBnaXZpbmcgdXBgLFxuICAgICAgICAgIClcbiAgICAgICAgICBvblN0YXRlQ2hhbmdlPy4oXG4gICAgICAgICAgICAnZmFpbGVkJyxcbiAgICAgICAgICAgICdFbnZpcm9ubWVudCBkZWxldGVkIGFuZCByZS1yZWdpc3RyYXRpb24gbGltaXQgcmVhY2hlZCcsXG4gICAgICAgICAgKVxuICAgICAgICAgIG9uRmF0YWxFcnJvcj8uKClcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgb25TdGF0ZUNoYW5nZT8uKCdyZWNvbm5lY3RpbmcnLCAnZW52aXJvbm1lbnQgbG9zdCwgcmVjcmVhdGluZyBzZXNzaW9uJylcbiAgICAgICAgY29uc3QgbmV3Q3JlZHMgPSBhd2FpdCBvbkVudmlyb25tZW50TG9zdCgpXG4gICAgICAgIC8vIGRvUmVjb25uZWN0KCkgbWFrZXMgc2V2ZXJhbCBzZXF1ZW50aWFsIG5ldHdvcmsgY2FsbHMgKDEtNXMpLlxuICAgICAgICAvLyBJZiB0aGUgdXNlciB0cmlnZ2VyZWQgdGVhcmRvd24gZHVyaW5nIHRoYXQgd2luZG93LCBpdHMgaW50ZXJuYWxcbiAgICAgICAgLy8gYWJvcnQgY2hlY2tzIHJldHVybiBmYWxzZSBcdTIwMTQgYnV0IHdlIG5lZWQgdG8gcmUtY2hlY2sgaGVyZSB0b1xuICAgICAgICAvLyBhdm9pZCBlbWl0dGluZyBhIHNwdXJpb3VzICdmYWlsZWQnICsgb25GYXRhbEVycm9yKCkgZHVyaW5nXG4gICAgICAgIC8vIGdyYWNlZnVsIHNodXRkb3duLlxuICAgICAgICBpZiAoc2lnbmFsLmFib3J0ZWQpIGJyZWFrXG4gICAgICAgIGlmIChuZXdDcmVkcykge1xuICAgICAgICAgIC8vIENyZWRlbnRpYWxzIGFyZSB1cGRhdGVkIGluIHRoZSBvdXRlciBzY29wZSB2aWFcbiAgICAgICAgICAvLyByZWNvbm5lY3RFbnZpcm9ubWVudFdpdGhTZXNzaW9uIFx1MjAxNCBnZXRDcmVkZW50aWFscygpIHdpbGxcbiAgICAgICAgICAvLyByZXR1cm4gdGhlIGZyZXNoIHZhbHVlcyBvbiB0aGUgbmV4dCBwb2xsIGl0ZXJhdGlvbi5cbiAgICAgICAgICAvLyBEbyBOT1QgcmVzZXQgZW52aXJvbm1lbnRSZWNyZWF0aW9ucyBoZXJlIFx1MjAxNCBvbkVudkxvc3QgcmV0dXJuaW5nXG4gICAgICAgICAgLy8gY3JlZHMgb25seSBwcm92ZXMgd2UgdHJpZWQgdG8gZml4IGl0LCBub3QgdGhhdCB0aGUgZW52IGlzXG4gICAgICAgICAgLy8gaGVhbHRoeS4gQSBzdWNjZXNzZnVsIHBvbGwgKGFib3ZlKSBpcyB0aGUgcmVzZXQgcG9pbnQ7IGlmIHRoZVxuICAgICAgICAgIC8vIG5ldyBlbnYgaW1tZWRpYXRlbHkgZGllcyBhZ2FpbiB3ZSBzdGlsbCB3YW50IHRoZSBsaW1pdCB0byBmaXJlLlxuICAgICAgICAgIGNvbnNlY3V0aXZlRXJyb3JzID0gMFxuICAgICAgICAgIGZpcnN0RXJyb3JUaW1lID0gbnVsbFxuICAgICAgICAgIG9uU3RhdGVDaGFuZ2U/LigncmVhZHknKVxuICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgIGBbYnJpZGdlOnJlcGxdIFJlLXJlZ2lzdGVyZWQgZW52aXJvbm1lbnQ6ICR7bmV3Q3JlZHMuZW52aXJvbm1lbnRJZH1gLFxuICAgICAgICAgIClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgb25TdGF0ZUNoYW5nZT8uKFxuICAgICAgICAgICdmYWlsZWQnLFxuICAgICAgICAgICdFbnZpcm9ubWVudCBkZWxldGVkIGFuZCByZS1yZWdpc3RyYXRpb24gZmFpbGVkJyxcbiAgICAgICAgKVxuICAgICAgICBvbkZhdGFsRXJyb3I/LigpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIC8vIEZhdGFsIGVycm9ycyAoNDAxLzQwMy80MDQvNDEwKSBcdTIwMTQgbm8gcG9pbnQgcmV0cnlpbmdcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBCcmlkZ2VGYXRhbEVycm9yKSB7XG4gICAgICAgIGNvbnN0IGlzRXhwaXJ5ID0gaXNFeHBpcmVkRXJyb3JUeXBlKGVyci5lcnJvclR5cGUpXG4gICAgICAgIGNvbnN0IGlzU3VwcHJlc3NpYmxlID0gaXNTdXBwcmVzc2libGU0MDMoZXJyKVxuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgYFticmlkZ2U6cmVwbF0gRmF0YWwgcG9sbCBlcnJvcjogJHtlcnIubWVzc2FnZX0gKHN0YXR1cz0ke2Vyci5zdGF0dXN9LCB0eXBlPSR7ZXJyLmVycm9yVHlwZSA/PyAndW5rbm93bid9KSR7aXNTdXBwcmVzc2libGUgPyAnIChzdXBwcmVzc2VkKScgOiAnJ31gLFxuICAgICAgICApXG4gICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9icmlkZ2VfcmVwbF9mYXRhbF9lcnJvcicsIHtcbiAgICAgICAgICBzdGF0dXM6IGVyci5zdGF0dXMsXG4gICAgICAgICAgZXJyb3JfdHlwZTpcbiAgICAgICAgICAgIGVyci5lcnJvclR5cGUgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgfSlcbiAgICAgICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSShcbiAgICAgICAgICBpc0V4cGlyeSA/ICdpbmZvJyA6ICdlcnJvcicsXG4gICAgICAgICAgJ2JyaWRnZV9yZXBsX2ZhdGFsX2Vycm9yJyxcbiAgICAgICAgICB7IHN0YXR1czogZXJyLnN0YXR1cywgZXJyb3JfdHlwZTogZXJyLmVycm9yVHlwZSB9LFxuICAgICAgICApXG4gICAgICAgIC8vIENvc21ldGljIDQwMyBlcnJvcnMgKGUuZy4sIGV4dGVybmFsX3BvbGxfc2Vzc2lvbnMgc2NvcGUsXG4gICAgICAgIC8vIGVudmlyb25tZW50czptYW5hZ2UgcGVybWlzc2lvbikgXHUyMDE0IHN1cHByZXNzIHVzZXItdmlzaWJsZSBlcnJvclxuICAgICAgICAvLyBidXQgYWx3YXlzIHRyaWdnZXIgdGVhcmRvd24gc28gY2xlYW51cCBydW5zLlxuICAgICAgICBpZiAoIWlzU3VwcHJlc3NpYmxlKSB7XG4gICAgICAgICAgb25TdGF0ZUNoYW5nZT8uKFxuICAgICAgICAgICAgJ2ZhaWxlZCcsXG4gICAgICAgICAgICBpc0V4cGlyeVxuICAgICAgICAgICAgICA/ICdzZXNzaW9uIGV4cGlyZWQgXHUwMEI3IC9yZW1vdGUtY29udHJvbCB0byByZWNvbm5lY3QnXG4gICAgICAgICAgICAgIDogZXJyLm1lc3NhZ2UsXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIC8vIEFsd2F5cyB0cmlnZ2VyIHRlYXJkb3duIFx1MjAxNCBtYXRjaGVzIGJyaWRnZU1haW4udHMgd2hlcmUgZmF0YWxFeGl0PXRydWVcbiAgICAgICAgLy8gaXMgdW5jb25kaXRpb25hbCBhbmQgcG9zdC1sb29wIGNsZWFudXAgYWx3YXlzIHJ1bnMuXG4gICAgICAgIG9uRmF0YWxFcnJvcj8uKClcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuXG4gICAgICAvLyBEZXRlY3Qgc3lzdGVtIHNsZWVwL3dha2U6IGlmIHRoZSBnYXAgc2luY2UgdGhlIGxhc3QgcG9sbCBlcnJvclxuICAgICAgLy8gZ3JlYXRseSBleGNlZWRzIHRoZSBtYXggYmFja29mZiBkZWxheSwgdGhlIG1hY2hpbmUgbGlrZWx5IHNsZXB0LlxuICAgICAgLy8gUmVzZXQgZXJyb3IgdHJhY2tpbmcgc28gd2UgcmV0cnkgd2l0aCBhIGZyZXNoIGJ1ZGdldCBpbnN0ZWFkIG9mXG4gICAgICAvLyBpbW1lZGlhdGVseSBnaXZpbmcgdXAuXG4gICAgICBpZiAoXG4gICAgICAgIGxhc3RQb2xsRXJyb3JUaW1lICE9PSBudWxsICYmXG4gICAgICAgIG5vdyAtIGxhc3RQb2xsRXJyb3JUaW1lID4gUE9MTF9FUlJPUl9NQVhfREVMQVlfTVMgKiAyXG4gICAgICApIHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgIGBbYnJpZGdlOnJlcGxdIERldGVjdGVkIHN5c3RlbSBzbGVlcCAoJHtNYXRoLnJvdW5kKChub3cgLSBsYXN0UG9sbEVycm9yVGltZSkgLyAxMDAwKX1zIGdhcCksIHJlc2V0dGluZyBwb2xsIGVycm9yIGJ1ZGdldGAsXG4gICAgICAgIClcbiAgICAgICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnaW5mbycsICdicmlkZ2VfcmVwbF9wb2xsX3NsZWVwX2RldGVjdGVkJywge1xuICAgICAgICAgIGdhcE1zOiBub3cgLSBsYXN0UG9sbEVycm9yVGltZSxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc2VjdXRpdmVFcnJvcnMgPSAwXG4gICAgICAgIGZpcnN0RXJyb3JUaW1lID0gbnVsbFxuICAgICAgfVxuICAgICAgbGFzdFBvbGxFcnJvclRpbWUgPSBub3dcblxuICAgICAgY29uc2VjdXRpdmVFcnJvcnMrK1xuICAgICAgaWYgKGZpcnN0RXJyb3JUaW1lID09PSBudWxsKSB7XG4gICAgICAgIGZpcnN0RXJyb3JUaW1lID0gbm93XG4gICAgICB9XG4gICAgICBjb25zdCBlbGFwc2VkID0gbm93IC0gZmlyc3RFcnJvclRpbWVcbiAgICAgIGNvbnN0IGh0dHBTdGF0dXMgPSBleHRyYWN0SHR0cFN0YXR1cyhlcnIpXG4gICAgICBjb25zdCBlcnJNc2cgPSBkZXNjcmliZUF4aW9zRXJyb3IoZXJyKVxuICAgICAgY29uc3Qgd3NMYWJlbCA9IGdldFdzU3RhdGU/LigpID8/ICd1bmtub3duJ1xuXG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBbYnJpZGdlOnJlcGxdIFBvbGwgZXJyb3IgKGF0dGVtcHQgJHtjb25zZWN1dGl2ZUVycm9yc30sIGVsYXBzZWQgJHtNYXRoLnJvdW5kKGVsYXBzZWQgLyAxMDAwKX1zLCB3cz0ke3dzTGFiZWx9KTogJHtlcnJNc2d9YCxcbiAgICAgIClcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9icmlkZ2VfcmVwbF9wb2xsX2Vycm9yJywge1xuICAgICAgICBzdGF0dXM6IGh0dHBTdGF0dXMsXG4gICAgICAgIGNvbnNlY3V0aXZlRXJyb3JzLFxuICAgICAgICBlbGFwc2VkTXM6IGVsYXBzZWQsXG4gICAgICB9IGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMpXG5cbiAgICAgIC8vIE9ubHkgdHJhbnNpdGlvbiB0byAncmVjb25uZWN0aW5nJyBvbiB0aGUgZmlyc3QgZXJyb3IgXHUyMDE0IHN0YXlcbiAgICAgIC8vIHRoZXJlIHVudGlsIGEgc3VjY2Vzc2Z1bCBwb2xsIChhdm9pZCBmbGlja2VyaW5nIHRoZSBVSSBzdGF0ZSkuXG4gICAgICBpZiAoY29uc2VjdXRpdmVFcnJvcnMgPT09IDEpIHtcbiAgICAgICAgb25TdGF0ZUNoYW5nZT8uKCdyZWNvbm5lY3RpbmcnLCBlcnJNc2cpXG4gICAgICB9XG5cbiAgICAgIC8vIEdpdmUgdXAgYWZ0ZXIgY29udGludW91cyBmYWlsdXJlc1xuICAgICAgaWYgKGVsYXBzZWQgPj0gUE9MTF9FUlJPUl9HSVZFX1VQX01TKSB7XG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICBgW2JyaWRnZTpyZXBsXSBQb2xsIGZhaWx1cmVzIGV4Y2VlZGVkICR7UE9MTF9FUlJPUl9HSVZFX1VQX01TIC8gMTAwMH1zICgke2NvbnNlY3V0aXZlRXJyb3JzfSBlcnJvcnMpLCBnaXZpbmcgdXBgLFxuICAgICAgICApXG4gICAgICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2luZm8nLCAnYnJpZGdlX3JlcGxfcG9sbF9naXZlX3VwJylcbiAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2JyaWRnZV9yZXBsX3BvbGxfZ2l2ZV91cCcsIHtcbiAgICAgICAgICBjb25zZWN1dGl2ZUVycm9ycyxcbiAgICAgICAgICBlbGFwc2VkTXM6IGVsYXBzZWQsXG4gICAgICAgICAgbGFzdFN0YXR1czogaHR0cFN0YXR1cyxcbiAgICAgICAgfSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTKVxuICAgICAgICBvblN0YXRlQ2hhbmdlPy4oJ2ZhaWxlZCcsICdjb25uZWN0aW9uIHRvIHNlcnZlciBsb3N0JylcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgLy8gRXhwb25lbnRpYWwgYmFja29mZjogMnMgXHUyMTkyIDRzIFx1MjE5MiA4cyBcdTIxOTIgMTZzIFx1MjE5MiAzMnMgXHUyMTkyIDYwcyAoY2FwKVxuICAgICAgY29uc3QgYmFja29mZiA9IE1hdGgubWluKFxuICAgICAgICBQT0xMX0VSUk9SX0lOSVRJQUxfREVMQVlfTVMgKiAyICoqIChjb25zZWN1dGl2ZUVycm9ycyAtIDEpLFxuICAgICAgICBQT0xMX0VSUk9SX01BWF9ERUxBWV9NUyxcbiAgICAgIClcbiAgICAgIC8vIFRoZSBwb2xsX2R1ZSBoZWFydGJlYXQtbG9vcCBleGl0IGxlYXZlcyBhIGhlYWx0aHkgbGVhc2UgZXhwb3NlZCB0b1xuICAgICAgLy8gdGhpcyBiYWNrb2ZmIHBhdGguIEhlYXJ0YmVhdCBiZWZvcmUgZWFjaCBzbGVlcCBzbyAvcG9sbCBvdXRhZ2VzXG4gICAgICAvLyAodGhlIFZlcmlmeUVudmlyb25tZW50U2VjcmV0QXV0aCBEQiBwYXRoIGhlYXJ0YmVhdCB3YXMgaW50cm9kdWNlZCB0b1xuICAgICAgLy8gYXZvaWQpIGRvbid0IGtpbGwgdGhlIDMwMHMgbGVhc2UgVFRMLlxuICAgICAgaWYgKGdldFBvbGxJbnRlcnZhbENvbmZpZygpLm5vbl9leGNsdXNpdmVfaGVhcnRiZWF0X2ludGVydmFsX21zID4gMCkge1xuICAgICAgICBjb25zdCBpbmZvID0gZ2V0SGVhcnRiZWF0SW5mbz8uKClcbiAgICAgICAgaWYgKGluZm8pIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgYXBpLmhlYXJ0YmVhdFdvcmsoXG4gICAgICAgICAgICAgIGluZm8uZW52aXJvbm1lbnRJZCxcbiAgICAgICAgICAgICAgaW5mby53b3JrSWQsXG4gICAgICAgICAgICAgIGluZm8uc2Vzc2lvblRva2VuLFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgLy8gQmVzdC1lZmZvcnQgXHUyMDE0IGlmIGhlYXJ0YmVhdCBhbHNvIGZhaWxzIHRoZSBsZWFzZSBkaWVzLCBzYW1lIGFzXG4gICAgICAgICAgICAvLyBwcmUtcG9sbF9kdWUgYmVoYXZpb3IgKHdoZXJlIHRoZSBvbmx5IGhlYXJ0YmVhdC1sb29wIGV4aXRzIHdlcmVcbiAgICAgICAgICAgIC8vIG9uZXMgd2hlcmUgdGhlIGxlYXNlIHdhcyBhbHJlYWR5IGR5aW5nKS5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGF3YWl0IHNsZWVwKGJhY2tvZmYsIHNpZ25hbClcbiAgICB9XG4gIH1cblxuICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgYFticmlkZ2U6cmVwbF0gV29yayBwb2xsIGxvb3AgZW5kZWQgKGFib3J0ZWQ9JHtzaWduYWwuYWJvcnRlZH0pIGVudj0ke2dldENyZWRlbnRpYWxzKCkuZW52aXJvbm1lbnRJZH1gLFxuICApXG59XG5cbi8vIEV4cG9ydGVkIGZvciB0ZXN0aW5nIG9ubHlcbmV4cG9ydCB7XG4gIHN0YXJ0V29ya1BvbGxMb29wIGFzIF9zdGFydFdvcmtQb2xsTG9vcEZvclRlc3RpbmcsXG4gIFBPTExfRVJST1JfSU5JVElBTF9ERUxBWV9NUyBhcyBfUE9MTF9FUlJPUl9JTklUSUFMX0RFTEFZX01TX0ZvclRlc3RpbmcsXG4gIFBPTExfRVJST1JfTUFYX0RFTEFZX01TIGFzIF9QT0xMX0VSUk9SX01BWF9ERUxBWV9NU19Gb3JUZXN0aW5nLFxuICBQT0xMX0VSUk9SX0dJVkVfVVBfTVMgYXMgX1BPTExfRVJST1JfR0lWRV9VUF9NU19Gb3JUZXN0aW5nLFxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUtBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBSUE7QUFDQTtBQUtBO0FBTUE7QUFL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Q3RDLFFBQU0sb0JBQ0osUUFBUSxJQUFJLGNBQWMsU0FDMUIsUUFBUSxJQUFJLG9DQUNSLFFBQVEsSUFBSSxvQ0FDWjtBQUtOLE1BQUksYUFBK0I7QUFDbkMsTUFBSSxRQUFRLFFBQVEsR0FBRztBQUVyQixVQUFNLEVBQUUsZ0JBQWdCLElBQ3RCO0FBRUYsUUFBSSxnQkFBZ0IsR0FBRztBQUNyQixtQkFBYTtBQUFBLElBQ2Y7QUFBQSxFQUNGO0FBS0EsU0FBTyxlQUFlO0FBQUEsSUFDcEIsS0FBSyxlQUFlO0FBQUEsSUFDcEIsYUFBYSxTQUFTO0FBQUEsSUFDdEI7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0EsZ0JBQWdCO0FBQUEsSUFDaEIsZUFBZSxVQUNiLG9CQUFvQjtBQUFBLE1BQ2xCLEdBQUc7QUFBQSxNQUNILFFBQVEsQ0FBQztBQUFBLE1BQ1Q7QUFBQSxNQUNBLGdCQUFnQjtBQUFBLElBQ2xCLENBQUM7QUFBQSxJQUNILGdCQUFnQixlQUNkLHFCQUFxQixXQUFXO0FBQUEsTUFDOUI7QUFBQSxNQUNBLGdCQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLaEIsV0FBVztBQUFBLElBQ2IsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxRQUFpQjtBQUl6QjtBQUFBLFFBQ0UsNkNBQTZDLGFBQWEsR0FBRyxDQUFDO0FBQUEsUUFDOUQsRUFBRSxPQUFPLFFBQVE7QUFBQSxNQUNuQjtBQUFBLElBQ0YsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBLElBSUgsaUJBQWlCLE1BQU0sdUJBQXVCLGFBQWEsQ0FBQyxLQUFLO0FBQUEsSUFDakU7QUFBQSxJQUNBO0FBQUEsSUFDQSxXQUFXO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRixDQUFDO0FBQ0g7QUFFQSxJQUFNLGdCQUFnQjtBQVF0QixTQUFTLFlBQVksS0FBaUM7QUFJcEQsUUFBTSxRQUFRLDJCQUEyQixHQUFHO0FBRzVDLFFBQU0sZ0JBQWdCLGdCQUFnQixLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUs7QUFFMUQsUUFBTSxPQUFPLGNBQWMsUUFBUSxRQUFRLEdBQUcsRUFBRSxLQUFLO0FBQ3JELE1BQUksQ0FBQyxLQUFNLFFBQU87QUFDbEIsU0FBTyxLQUFLLFNBQVMsZ0JBQ2pCLEtBQUssTUFBTSxHQUFHLGdCQUFnQixDQUFDLElBQUksV0FDbkM7QUFDTjsiLAogICJuYW1lcyI6IFsidG9TREtNZXNzYWdlcyIsICJnZXRQb2xsSW50ZXJ2YWxDb25maWciLCAic2VxIiwgInZlcnNpb25FcnJvciJdCn0K
