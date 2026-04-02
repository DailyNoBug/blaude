#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  CHANNEL_PERMISSION_METHOD,
  ChannelMessageNotificationSchema,
  ChannelPermissionNotificationSchema,
  findChannelEntry,
  gateChannelServer,
  init_channelNotification,
  wrapChannelMessage
} from "./chunk-NVJGKF76.mjs";
import {
  clearClaudeAIMcpConfigsCache,
  clearServerCache,
  commandBelongsToServer,
  dedupClaudeAiMcpServers,
  doesEnterpriseMcpConfigExist,
  enqueue,
  excludeStalePluginClients,
  fetchClaudeAIMcpConfigsIfEligible,
  fetchCommandsForClient,
  fetchResourcesForClient,
  fetchToolsForClient,
  filterMcpServersByPolicy,
  getClaudeCodeMcpConfigs,
  getMcpToolsCommandsAndResources,
  init_AppState,
  init_claudeai,
  init_client,
  init_config,
  init_elicitationHandler,
  init_localSearch,
  init_mcpSkills,
  init_messageQueueManager,
  init_notifications,
  init_utils,
  isMcpServerDisabled,
  localSearch_exports,
  mcpSkills_exports,
  reconnectMcpServerImpl,
  registerElicitationHandler,
  setMcpServerEnabled,
  useAppState,
  useAppStateStore,
  useNotifications,
  useSetAppState
} from "./chunk-PWGYNHQM.mjs";
import {
  PromptListChangedNotificationSchema,
  ResourceListChangedNotificationSchema,
  ToolListChangedNotificationSchema,
  init_types
} from "./chunk-I4JSDM2A.mjs";
import {
  c,
  init_react_compiler_runtime
} from "./chunk-KMJXN3MK.mjs";
import {
  createContext,
  init_react,
  react_default,
  useCallback,
  useContext,
  useEffect,
  useRef
} from "./chunk-TEJH3H3H.mjs";
import {
  getFeatureValue_CACHED_MAY_BE_STALE,
  getMcpPrefix,
  init_growthbook,
  init_mcpStringUtils,
  init_omit,
  init_reject,
  omit_default,
  reject_default
} from "./chunk-NKGQGSP5.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-MDXHK5AD.mjs";
import {
  init_log,
  logMCPDebug,
  logMCPError
} from "./chunk-KCFW5MKY.mjs";
import {
  errorMessage,
  init_debug,
  init_errors,
  init_slowOperations,
  jsonStringify,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import {
  feature,
  init_bun_bundle
} from "./chunk-OU3SZVVB.mjs";
import {
  getAllowedChannels,
  getSessionId,
  init_state
} from "./chunk-NGSB34MB.mjs";
import {
  __esm,
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// src/services/mcp/channelPermissions.ts
function isChannelPermissionRelayEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_harbor_permissions", false);
}
function hashToId(input) {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  h = h >>> 0;
  let s = "";
  for (let i = 0; i < 5; i++) {
    s += ID_ALPHABET[h % 25];
    h = Math.floor(h / 25);
  }
  return s;
}
function shortRequestId(toolUseID) {
  let candidate = hashToId(toolUseID);
  for (let salt = 0; salt < 10; salt++) {
    if (!ID_AVOID_SUBSTRINGS.some((bad) => candidate.includes(bad))) {
      return candidate;
    }
    candidate = hashToId(`${toolUseID}:${salt}`);
  }
  return candidate;
}
function truncateForPreview(input) {
  try {
    const s = jsonStringify(input);
    return s.length > 200 ? s.slice(0, 200) + "\u2026" : s;
  } catch {
    return "(unserializable)";
  }
}
function filterPermissionRelayClients(clients, isInAllowlist) {
  return clients.filter(
    (c2) => c2.type === "connected" && isInAllowlist(c2.name) && c2.capabilities?.experimental?.["claude/channel"] !== void 0 && c2.capabilities?.experimental?.["claude/channel/permission"] !== void 0
  );
}
function createChannelPermissionCallbacks() {
  const pending = /* @__PURE__ */ new Map();
  return {
    onResponse(requestId, handler) {
      const key = requestId.toLowerCase();
      pending.set(key, handler);
      return () => {
        pending.delete(key);
      };
    },
    resolve(requestId, behavior, fromServer) {
      const key = requestId.toLowerCase();
      const resolver = pending.get(key);
      if (!resolver) return false;
      pending.delete(key);
      resolver({ behavior, fromServer });
      return true;
    }
  };
}
var ID_ALPHABET, ID_AVOID_SUBSTRINGS;
var init_channelPermissions = __esm({
  "src/services/mcp/channelPermissions.ts"() {
    init_slowOperations();
    init_growthbook();
    ID_ALPHABET = "abcdefghijkmnopqrstuvwxyz";
    ID_AVOID_SUBSTRINGS = [
      "fuck",
      "shit",
      "cunt",
      "cock",
      "dick",
      "twat",
      "piss",
      "crap",
      "bitch",
      "whore",
      "ass",
      "tit",
      "cum",
      "fag",
      "dyke",
      "nig",
      "kike",
      "rape",
      "nazi",
      "damn",
      "poo",
      "pee",
      "wank",
      "anus"
    ];
  }
});

// src/services/mcp/useManageMCPConnections.ts
import { basename } from "path";
function getErrorKey(error) {
  const plugin = "plugin" in error ? error.plugin : "no-plugin";
  return `${error.type}:${error.source}:${plugin}`;
}
function addErrorsToAppState(setAppState, newErrors) {
  if (newErrors.length === 0) return;
  setAppState((prevState) => {
    const existingKeys = new Set(
      prevState.plugins.errors.map((e) => getErrorKey(e))
    );
    const uniqueNewErrors = newErrors.filter(
      (error) => !existingKeys.has(getErrorKey(error))
    );
    if (uniqueNewErrors.length === 0) {
      return prevState;
    }
    return {
      ...prevState,
      plugins: {
        ...prevState.plugins,
        errors: [...prevState.plugins.errors, ...uniqueNewErrors]
      }
    };
  });
}
function useManageMCPConnections(dynamicMcpConfig, isStrictMcpConfig = false) {
  const store = useAppStateStore();
  const _authVersion = useAppState((s) => s.authVersion);
  const _pluginReconnectKey = useAppState((s) => s.mcp.pluginReconnectKey);
  const setAppState = useSetAppState();
  const reconnectTimersRef = useRef(/* @__PURE__ */ new Map());
  const channelWarnedKindsRef = useRef(/* @__PURE__ */ new Set());
  const channelPermCallbacksRef = useRef(
    null
  );
  if ((feature("KAIROS") || feature("KAIROS_CHANNELS")) && channelPermCallbacksRef.current === null) {
    channelPermCallbacksRef.current = createChannelPermissionCallbacks();
  }
  useEffect(() => {
    if (feature("KAIROS") || feature("KAIROS_CHANNELS")) {
      const callbacks = channelPermCallbacksRef.current;
      if (!callbacks) return;
      if (!isChannelPermissionRelayEnabled()) return;
      setAppState((prev) => {
        if (prev.channelPermissionCallbacks === callbacks) return prev;
        return { ...prev, channelPermissionCallbacks: callbacks };
      });
      return () => {
        setAppState((prev) => {
          if (prev.channelPermissionCallbacks === void 0) return prev;
          return { ...prev, channelPermissionCallbacks: void 0 };
        });
      };
    }
  }, [setAppState]);
  const { addNotification } = useNotifications();
  const MCP_BATCH_FLUSH_MS = 16;
  const pendingUpdatesRef = useRef([]);
  const flushTimerRef = useRef(null);
  const flushPendingUpdates = useCallback(() => {
    flushTimerRef.current = null;
    const updates = pendingUpdatesRef.current;
    if (updates.length === 0) return;
    pendingUpdatesRef.current = [];
    setAppState((prevState) => {
      let mcp = prevState.mcp;
      for (const update of updates) {
        const {
          tools: rawTools,
          commands: rawCmds,
          resources: rawRes,
          ...client
        } = update;
        const tools = client.type === "disabled" || client.type === "failed" ? rawTools ?? [] : rawTools;
        const commands = client.type === "disabled" || client.type === "failed" ? rawCmds ?? [] : rawCmds;
        const resources = client.type === "disabled" || client.type === "failed" ? rawRes ?? [] : rawRes;
        const prefix = getMcpPrefix(client.name);
        const existingClientIndex = mcp.clients.findIndex(
          (c2) => c2.name === client.name
        );
        const updatedClients = existingClientIndex === -1 ? [...mcp.clients, client] : mcp.clients.map((c2) => c2.name === client.name ? client : c2);
        const updatedTools = tools === void 0 ? mcp.tools : [...reject_default(mcp.tools, (t) => t.name?.startsWith(prefix)), ...tools];
        const updatedCommands = commands === void 0 ? mcp.commands : [
          ...reject_default(
            mcp.commands,
            (c2) => commandBelongsToServer(c2, client.name)
          ),
          ...commands
        ];
        const updatedResources = resources === void 0 ? mcp.resources : {
          ...mcp.resources,
          ...resources.length > 0 ? { [client.name]: resources } : omit_default(mcp.resources, client.name)
        };
        mcp = {
          ...mcp,
          clients: updatedClients,
          tools: updatedTools,
          commands: updatedCommands,
          resources: updatedResources
        };
      }
      return { ...prevState, mcp };
    });
  }, [setAppState]);
  const updateServer = useCallback(
    (update) => {
      pendingUpdatesRef.current.push(update);
      if (flushTimerRef.current === null) {
        flushTimerRef.current = setTimeout(
          flushPendingUpdates,
          MCP_BATCH_FLUSH_MS
        );
      }
    },
    [flushPendingUpdates]
  );
  const onConnectionAttempt = useCallback(
    ({
      client,
      tools,
      commands,
      resources
    }) => {
      updateServer({ ...client, tools, commands, resources });
      switch (client.type) {
        case "connected": {
          registerElicitationHandler(client.client, client.name, setAppState);
          client.client.onclose = () => {
            const configType = client.config.type ?? "stdio";
            clearServerCache(client.name, client.config).catch(() => {
              logForDebugging(
                `Failed to invalidate the server cache: ${client.name}`
              );
            });
            if (isMcpServerDisabled(client.name)) {
              logMCPDebug(
                client.name,
                `Server is disabled, skipping automatic reconnection`
              );
              return;
            }
            if (configType !== "stdio" && configType !== "sdk") {
              const transportType = getTransportDisplayName(configType);
              logMCPDebug(
                client.name,
                `${transportType} transport closed/disconnected, attempting automatic reconnection`
              );
              const existingTimer = reconnectTimersRef.current.get(client.name);
              if (existingTimer) {
                clearTimeout(existingTimer);
                reconnectTimersRef.current.delete(client.name);
              }
              const reconnectWithBackoff = async () => {
                for (let attempt = 1; attempt <= MAX_RECONNECT_ATTEMPTS; attempt++) {
                  if (isMcpServerDisabled(client.name)) {
                    logMCPDebug(
                      client.name,
                      `Server disabled during reconnection, stopping retry`
                    );
                    reconnectTimersRef.current.delete(client.name);
                    return;
                  }
                  updateServer({
                    ...client,
                    type: "pending",
                    reconnectAttempt: attempt,
                    maxReconnectAttempts: MAX_RECONNECT_ATTEMPTS
                  });
                  const reconnectStartTime = Date.now();
                  try {
                    const result = await reconnectMcpServerImpl(
                      client.name,
                      client.config
                    );
                    const elapsed = Date.now() - reconnectStartTime;
                    if (result.client.type === "connected") {
                      logMCPDebug(
                        client.name,
                        `${transportType} reconnection successful after ${elapsed}ms (attempt ${attempt})`
                      );
                      reconnectTimersRef.current.delete(client.name);
                      onConnectionAttempt(result);
                      return;
                    }
                    logMCPDebug(
                      client.name,
                      `${transportType} reconnection attempt ${attempt} completed with status: ${result.client.type}`
                    );
                    if (attempt === MAX_RECONNECT_ATTEMPTS) {
                      logMCPDebug(
                        client.name,
                        `Max reconnection attempts (${MAX_RECONNECT_ATTEMPTS}) reached, giving up`
                      );
                      reconnectTimersRef.current.delete(client.name);
                      onConnectionAttempt(result);
                      return;
                    }
                  } catch (error) {
                    const elapsed = Date.now() - reconnectStartTime;
                    logMCPError(
                      client.name,
                      `${transportType} reconnection attempt ${attempt} failed after ${elapsed}ms: ${error}`
                    );
                    if (attempt === MAX_RECONNECT_ATTEMPTS) {
                      logMCPDebug(
                        client.name,
                        `Max reconnection attempts (${MAX_RECONNECT_ATTEMPTS}) reached, giving up`
                      );
                      reconnectTimersRef.current.delete(client.name);
                      updateServer({ ...client, type: "failed" });
                      return;
                    }
                  }
                  const backoffMs = Math.min(
                    INITIAL_BACKOFF_MS * Math.pow(2, attempt - 1),
                    MAX_BACKOFF_MS
                  );
                  logMCPDebug(
                    client.name,
                    `Scheduling reconnection attempt ${attempt + 1} in ${backoffMs}ms`
                  );
                  await new Promise((resolve) => {
                    const timer = setTimeout(resolve, backoffMs);
                    reconnectTimersRef.current.set(client.name, timer);
                  });
                }
              };
              void reconnectWithBackoff();
            } else {
              updateServer({ ...client, type: "failed" });
            }
          };
          if (feature("KAIROS") || feature("KAIROS_CHANNELS")) {
            const gate = gateChannelServer(
              client.name,
              client.capabilities,
              client.config.pluginSource
            );
            const entry = findChannelEntry(client.name, getAllowedChannels());
            const pluginId = entry?.kind === "plugin" ? `${entry.name}@${entry.marketplace}` : void 0;
            if (gate.action === "register" || gate.kind !== "capability") {
              logEvent("tengu_mcp_channel_gate", {
                registered: gate.action === "register",
                skip_kind: gate.action === "skip" ? gate.kind : void 0,
                entry_kind: entry?.kind,
                is_dev: entry?.dev ?? false,
                plugin: pluginId
              });
            }
            switch (gate.action) {
              case "register":
                logMCPDebug(client.name, "Channel notifications registered");
                client.client.setNotificationHandler(
                  ChannelMessageNotificationSchema(),
                  async (notification) => {
                    const { content, meta } = notification.params;
                    logMCPDebug(
                      client.name,
                      `notifications/claude/channel: ${content.slice(0, 80)}`
                    );
                    logEvent("tengu_mcp_channel_message", {
                      content_length: content.length,
                      meta_key_count: Object.keys(meta ?? {}).length,
                      entry_kind: entry?.kind,
                      is_dev: entry?.dev ?? false,
                      plugin: pluginId
                    });
                    enqueue({
                      mode: "prompt",
                      value: wrapChannelMessage(client.name, content, meta),
                      priority: "next",
                      isMeta: true,
                      origin: { kind: "channel", server: client.name },
                      skipSlashCommands: true
                    });
                  }
                );
                if (client.capabilities?.experimental?.["claude/channel/permission"] !== void 0) {
                  client.client.setNotificationHandler(
                    ChannelPermissionNotificationSchema(),
                    async (notification) => {
                      const { request_id, behavior } = notification.params;
                      const resolved = channelPermCallbacksRef.current?.resolve(
                        request_id,
                        behavior,
                        client.name
                      ) ?? false;
                      logMCPDebug(
                        client.name,
                        `notifications/claude/channel/permission: ${request_id} \u2192 ${behavior} (${resolved ? "matched pending" : "no pending entry \u2014 stale or unknown ID"})`
                      );
                    }
                  );
                }
                break;
              case "skip":
                client.client.removeNotificationHandler(
                  "notifications/claude/channel"
                );
                client.client.removeNotificationHandler(
                  CHANNEL_PERMISSION_METHOD
                );
                logMCPDebug(
                  client.name,
                  `Channel notifications skipped: ${gate.reason}`
                );
                if (gate.kind !== "capability" && gate.kind !== "session" && !channelWarnedKindsRef.current.has(gate.kind) && (gate.kind === "marketplace" || gate.kind === "allowlist" || entry !== void 0)) {
                  channelWarnedKindsRef.current.add(gate.kind);
                  const text = gate.kind === "disabled" ? "Channels are not currently available" : gate.kind === "auth" ? "Channels require claude.ai authentication \xB7 run /login" : gate.kind === "policy" ? "Channels are not enabled for your org \xB7 have an administrator set channelsEnabled: true in managed settings" : gate.reason;
                  addNotification({
                    key: `channels-blocked-${gate.kind}`,
                    priority: "high",
                    text,
                    color: "warning",
                    timeoutMs: 12e3
                  });
                }
                break;
            }
          }
          if (client.capabilities?.tools?.listChanged) {
            client.client.setNotificationHandler(
              ToolListChangedNotificationSchema,
              async () => {
                logMCPDebug(
                  client.name,
                  `Received tools/list_changed notification, refreshing tools`
                );
                try {
                  const previousToolsPromise = fetchToolsForClient.cache.get(
                    client.name
                  );
                  fetchToolsForClient.cache.delete(client.name);
                  const newTools = await fetchToolsForClient(client);
                  const newCount = newTools.length;
                  if (previousToolsPromise) {
                    previousToolsPromise.then(
                      (previousTools) => {
                        logEvent("tengu_mcp_list_changed", {
                          type: "tools",
                          previousCount: previousTools.length,
                          newCount
                        });
                      },
                      () => {
                        logEvent("tengu_mcp_list_changed", {
                          type: "tools",
                          newCount
                        });
                      }
                    );
                  } else {
                    logEvent("tengu_mcp_list_changed", {
                      type: "tools",
                      newCount
                    });
                  }
                  updateServer({ ...client, tools: newTools });
                } catch (error) {
                  logMCPError(
                    client.name,
                    `Failed to refresh tools after list_changed notification: ${errorMessage(error)}`
                  );
                }
              }
            );
          }
          if (client.capabilities?.prompts?.listChanged) {
            client.client.setNotificationHandler(
              PromptListChangedNotificationSchema,
              async () => {
                logMCPDebug(
                  client.name,
                  `Received prompts/list_changed notification, refreshing prompts`
                );
                logEvent("tengu_mcp_list_changed", {
                  type: "prompts"
                });
                try {
                  fetchCommandsForClient.cache.delete(client.name);
                  const [mcpPrompts, mcpSkills] = await Promise.all([
                    fetchCommandsForClient(client),
                    feature("MCP_SKILLS") ? fetchMcpSkillsForClient(client) : Promise.resolve([])
                  ]);
                  updateServer({
                    ...client,
                    commands: [...mcpPrompts, ...mcpSkills]
                  });
                  clearSkillIndexCache?.();
                } catch (error) {
                  logMCPError(
                    client.name,
                    `Failed to refresh prompts after list_changed notification: ${errorMessage(error)}`
                  );
                }
              }
            );
          }
          if (client.capabilities?.resources?.listChanged) {
            client.client.setNotificationHandler(
              ResourceListChangedNotificationSchema,
              async () => {
                logMCPDebug(
                  client.name,
                  `Received resources/list_changed notification, refreshing resources`
                );
                logEvent("tengu_mcp_list_changed", {
                  type: "resources"
                });
                try {
                  fetchResourcesForClient.cache.delete(client.name);
                  if (feature("MCP_SKILLS")) {
                    fetchMcpSkillsForClient.cache.delete(client.name);
                    fetchCommandsForClient.cache.delete(client.name);
                    const [newResources, mcpPrompts, mcpSkills] = await Promise.all([
                      fetchResourcesForClient(client),
                      fetchCommandsForClient(client),
                      fetchMcpSkillsForClient(client)
                    ]);
                    updateServer({
                      ...client,
                      resources: newResources,
                      commands: [...mcpPrompts, ...mcpSkills]
                    });
                    clearSkillIndexCache?.();
                  } else {
                    const newResources = await fetchResourcesForClient(client);
                    updateServer({ ...client, resources: newResources });
                  }
                } catch (error) {
                  logMCPError(
                    client.name,
                    `Failed to refresh resources after list_changed notification: ${errorMessage(error)}`
                  );
                }
              }
            );
          }
          break;
        }
        case "needs-auth":
        case "failed":
        case "pending":
        case "disabled":
          break;
      }
    },
    [updateServer]
  );
  const sessionId = getSessionId();
  useEffect(() => {
    async function initializeServersAsPending() {
      const { servers: existingConfigs, errors: mcpErrors } = isStrictMcpConfig ? { servers: {}, errors: [] } : await getClaudeCodeMcpConfigs(dynamicMcpConfig);
      const configs = { ...existingConfigs, ...dynamicMcpConfig };
      addErrorsToAppState(setAppState, mcpErrors);
      setAppState((prevState) => {
        const { stale, ...mcpWithoutStale } = excludeStalePluginClients(
          prevState.mcp,
          configs
        );
        for (const s of stale) {
          const timer = reconnectTimersRef.current.get(s.name);
          if (timer) {
            clearTimeout(timer);
            reconnectTimersRef.current.delete(s.name);
          }
          if (s.type === "connected") {
            s.client.onclose = void 0;
            void clearServerCache(s.name, s.config).catch(() => {
            });
          }
        }
        const existingServerNames = new Set(
          mcpWithoutStale.clients.map((c2) => c2.name)
        );
        const newClients = Object.entries(configs).filter(([name]) => !existingServerNames.has(name)).map(([name, config]) => ({
          name,
          type: isMcpServerDisabled(name) ? "disabled" : "pending",
          config
        }));
        if (newClients.length === 0 && stale.length === 0) {
          return prevState;
        }
        return {
          ...prevState,
          mcp: {
            ...prevState.mcp,
            ...mcpWithoutStale,
            clients: [...mcpWithoutStale.clients, ...newClients]
          }
        };
      });
    }
    void initializeServersAsPending().catch((error) => {
      logMCPError(
        "useManageMCPConnections",
        `Failed to initialize servers as pending: ${errorMessage(error)}`
      );
    });
  }, [
    isStrictMcpConfig,
    dynamicMcpConfig,
    setAppState,
    sessionId,
    _pluginReconnectKey
  ]);
  useEffect(() => {
    let cancelled = false;
    async function loadAndConnectMcpConfigs() {
      let claudeaiPromise;
      if (isStrictMcpConfig || doesEnterpriseMcpConfigExist()) {
        claudeaiPromise = Promise.resolve({});
      } else {
        clearClaudeAIMcpConfigsCache();
        claudeaiPromise = fetchClaudeAIMcpConfigsIfEligible();
      }
      const { servers: claudeCodeConfigs, errors: mcpErrors } = isStrictMcpConfig ? { servers: {}, errors: [] } : await getClaudeCodeMcpConfigs(dynamicMcpConfig, claudeaiPromise);
      if (cancelled) return;
      addErrorsToAppState(setAppState, mcpErrors);
      const configs = { ...claudeCodeConfigs, ...dynamicMcpConfig };
      const enabledConfigs = Object.fromEntries(
        Object.entries(configs).filter(([name]) => !isMcpServerDisabled(name))
      );
      getMcpToolsCommandsAndResources(
        onConnectionAttempt,
        enabledConfigs
      ).catch((error) => {
        logMCPError(
          "useManageMcpConnections",
          `Failed to get MCP resources: ${errorMessage(error)}`
        );
      });
      let claudeaiConfigs = {};
      if (!isStrictMcpConfig) {
        claudeaiConfigs = filterMcpServersByPolicy(
          await claudeaiPromise
        ).allowed;
        if (cancelled) return;
        if (Object.keys(claudeaiConfigs).length > 0) {
          const { servers: dedupedClaudeAi } = dedupClaudeAiMcpServers(
            claudeaiConfigs,
            configs
          );
          claudeaiConfigs = dedupedClaudeAi;
        }
        if (Object.keys(claudeaiConfigs).length > 0) {
          setAppState((prevState) => {
            const existingServerNames = new Set(
              prevState.mcp.clients.map((c2) => c2.name)
            );
            const newClients = Object.entries(claudeaiConfigs).filter(([name]) => !existingServerNames.has(name)).map(([name, config]) => ({
              name,
              type: isMcpServerDisabled(name) ? "disabled" : "pending",
              config
            }));
            if (newClients.length === 0) return prevState;
            return {
              ...prevState,
              mcp: {
                ...prevState.mcp,
                clients: [...prevState.mcp.clients, ...newClients]
              }
            };
          });
          const enabledClaudeaiConfigs = Object.fromEntries(
            Object.entries(claudeaiConfigs).filter(
              ([name]) => !isMcpServerDisabled(name)
            )
          );
          getMcpToolsCommandsAndResources(
            onConnectionAttempt,
            enabledClaudeaiConfigs
          ).catch((error) => {
            logMCPError(
              "useManageMcpConnections",
              `Failed to get claude.ai MCP resources: ${errorMessage(error)}`
            );
          });
        }
      }
      const allConfigs = { ...configs, ...claudeaiConfigs };
      const counts = {
        enterprise: 0,
        global: 0,
        project: 0,
        user: 0,
        plugin: 0,
        claudeai: 0
      };
      const stdioCommands = [];
      for (const [name, serverConfig] of Object.entries(allConfigs)) {
        if (serverConfig.scope === "enterprise") counts.enterprise++;
        else if (serverConfig.scope === "user") counts.global++;
        else if (serverConfig.scope === "project") counts.project++;
        else if (serverConfig.scope === "local") counts.user++;
        else if (serverConfig.scope === "dynamic") counts.plugin++;
        else if (serverConfig.scope === "claudeai") counts.claudeai++;
        if (process.env.USER_TYPE === "ant" && !isMcpServerDisabled(name) && (serverConfig.type === void 0 || serverConfig.type === "stdio") && "command" in serverConfig) {
          stdioCommands.push(basename(serverConfig.command));
        }
      }
      logEvent("tengu_mcp_servers", {
        ...counts,
        ...process.env.USER_TYPE === "ant" && stdioCommands.length > 0 ? {
          stdio_commands: stdioCommands.sort().join(
            ","
          )
        } : {}
      });
    }
    void loadAndConnectMcpConfigs();
    return () => {
      cancelled = true;
    };
  }, [
    isStrictMcpConfig,
    dynamicMcpConfig,
    onConnectionAttempt,
    setAppState,
    _authVersion,
    sessionId,
    _pluginReconnectKey
  ]);
  useEffect(() => {
    const timers = reconnectTimersRef.current;
    return () => {
      for (const timer of timers.values()) {
        clearTimeout(timer);
      }
      timers.clear();
      if (flushTimerRef.current !== null) {
        clearTimeout(flushTimerRef.current);
        flushTimerRef.current = null;
        flushPendingUpdates();
      }
    };
  }, [flushPendingUpdates]);
  const reconnectMcpServer = useCallback(
    async (serverName) => {
      const client = store.getState().mcp.clients.find((c2) => c2.name === serverName);
      if (!client) {
        throw new Error(`MCP server ${serverName} not found`);
      }
      const existingTimer = reconnectTimersRef.current.get(serverName);
      if (existingTimer) {
        clearTimeout(existingTimer);
        reconnectTimersRef.current.delete(serverName);
      }
      const result = await reconnectMcpServerImpl(serverName, client.config);
      onConnectionAttempt(result);
      return result;
    },
    [store, onConnectionAttempt]
  );
  const toggleMcpServer = useCallback(
    async (serverName) => {
      const client = store.getState().mcp.clients.find((c2) => c2.name === serverName);
      if (!client) {
        throw new Error(`MCP server ${serverName} not found`);
      }
      const isCurrentlyDisabled = client.type === "disabled";
      if (!isCurrentlyDisabled) {
        const existingTimer = reconnectTimersRef.current.get(serverName);
        if (existingTimer) {
          clearTimeout(existingTimer);
          reconnectTimersRef.current.delete(serverName);
        }
        setMcpServerEnabled(serverName, false);
        if (client.type === "connected") {
          await clearServerCache(serverName, client.config);
        }
        updateServer({
          name: serverName,
          type: "disabled",
          config: client.config
        });
      } else {
        setMcpServerEnabled(serverName, true);
        updateServer({
          name: serverName,
          type: "pending",
          config: client.config
        });
        const result = await reconnectMcpServerImpl(serverName, client.config);
        onConnectionAttempt(result);
      }
    },
    [store, updateServer, onConnectionAttempt]
  );
  return { reconnectMcpServer, toggleMcpServer };
}
function getTransportDisplayName(type) {
  switch (type) {
    case "http":
      return "HTTP";
    case "ws":
    case "ws-ide":
      return "WebSocket";
    default:
      return "SSE";
  }
}
var fetchMcpSkillsForClient, clearSkillIndexCache, MAX_RECONNECT_ATTEMPTS, INITIAL_BACKOFF_MS, MAX_BACKOFF_MS;
var init_useManageMCPConnections = __esm({
  "src/services/mcp/useManageMCPConnections.ts"() {
    init_bun_bundle();
    init_react();
    init_state();
    init_client();
    init_types();
    init_omit();
    init_reject();
    init_analytics();
    init_config();
    init_debug();
    init_state();
    init_notifications();
    init_AppState();
    init_errors();
    init_log();
    init_messageQueueManager();
    init_channelNotification();
    init_channelPermissions();
    init_claudeai();
    init_elicitationHandler();
    init_mcpStringUtils();
    init_utils();
    fetchMcpSkillsForClient = feature("MCP_SKILLS") ? (init_mcpSkills(), __toCommonJS(mcpSkills_exports)).fetchMcpSkillsForClient : null;
    clearSkillIndexCache = feature("EXPERIMENTAL_SKILL_SEARCH") ? (init_localSearch(), __toCommonJS(localSearch_exports)).clearSkillIndexCache : null;
    MAX_RECONNECT_ATTEMPTS = 5;
    INITIAL_BACKOFF_MS = 1e3;
    MAX_BACKOFF_MS = 3e4;
  }
});

// src/services/mcp/MCPConnectionManager.tsx
function useMcpReconnect() {
  const context = useContext(MCPConnectionContext);
  if (!context) {
    throw new Error("useMcpReconnect must be used within MCPConnectionManager");
  }
  return context.reconnectMcpServer;
}
function useMcpToggleEnabled() {
  const context = useContext(MCPConnectionContext);
  if (!context) {
    throw new Error("useMcpToggleEnabled must be used within MCPConnectionManager");
  }
  return context.toggleMcpServer;
}
function MCPConnectionManager(t0) {
  const $ = c(6);
  const {
    children,
    dynamicMcpConfig,
    isStrictMcpConfig
  } = t0;
  const {
    reconnectMcpServer,
    toggleMcpServer
  } = useManageMCPConnections(dynamicMcpConfig, isStrictMcpConfig);
  let t1;
  if ($[0] !== reconnectMcpServer || $[1] !== toggleMcpServer) {
    t1 = {
      reconnectMcpServer,
      toggleMcpServer
    };
    $[0] = reconnectMcpServer;
    $[1] = toggleMcpServer;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const value = t1;
  let t2;
  if ($[3] !== children || $[4] !== value) {
    t2 = /* @__PURE__ */ react_default.createElement(MCPConnectionContext.Provider, { value }, children);
    $[3] = children;
    $[4] = value;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  return t2;
}
var MCPConnectionContext;
var init_MCPConnectionManager = __esm({
  "src/services/mcp/MCPConnectionManager.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_useManageMCPConnections();
    MCPConnectionContext = createContext(null);
  }
});

export {
  shortRequestId,
  truncateForPreview,
  filterPermissionRelayClients,
  init_channelPermissions,
  useMcpReconnect,
  useMcpToggleEnabled,
  MCPConnectionManager,
  init_MCPConnectionManager
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3NlcnZpY2VzL21jcC9jaGFubmVsUGVybWlzc2lvbnMudHMiLCAiLi4vLi4vc3JjL3NlcnZpY2VzL21jcC91c2VNYW5hZ2VNQ1BDb25uZWN0aW9ucy50cyIsICIuLi8uLi9zcmMvc2VydmljZXMvbWNwL01DUENvbm5lY3Rpb25NYW5hZ2VyLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBQZXJtaXNzaW9uIHByb21wdHMgb3ZlciBjaGFubmVscyAoVGVsZWdyYW0sIGlNZXNzYWdlLCBEaXNjb3JkKS5cbiAqXG4gKiBNaXJyb3JzIGBCcmlkZ2VQZXJtaXNzaW9uQ2FsbGJhY2tzYCBcdTIwMTQgd2hlbiBDQyBoaXRzIGEgcGVybWlzc2lvbiBkaWFsb2csXG4gKiBpdCBBTFNPIHNlbmRzIHRoZSBwcm9tcHQgdmlhIGFjdGl2ZSBjaGFubmVscyBhbmQgcmFjZXMgdGhlIHJlcGx5IGFnYWluc3RcbiAqIGxvY2FsIFVJIC8gYnJpZGdlIC8gaG9va3MgLyBjbGFzc2lmaWVyLiBGaXJzdCByZXNvbHZlciB3aW5zIHZpYSBjbGFpbSgpLlxuICpcbiAqIEluYm91bmQgaXMgYSBzdHJ1Y3R1cmVkIGV2ZW50OiB0aGUgc2VydmVyIHBhcnNlcyB0aGUgdXNlcidzIFwieWVzIHRieGtxXCJcbiAqIHJlcGx5IGFuZCBlbWl0cyBub3RpZmljYXRpb25zL2NsYXVkZS9jaGFubmVsL3Blcm1pc3Npb24gd2l0aFxuICoge3JlcXVlc3RfaWQsIGJlaGF2aW9yfS4gQ0MgbmV2ZXIgc2VlcyB0aGUgcmVwbHkgYXMgdGV4dCBcdTIwMTQgYXBwcm92YWxcbiAqIHJlcXVpcmVzIHRoZSBzZXJ2ZXIgdG8gZGVsaWJlcmF0ZWx5IGVtaXQgdGhhdCBzcGVjaWZpYyBldmVudCwgbm90IGp1c3RcbiAqIHJlbGF5IGNvbnRlbnQuIFNlcnZlcnMgb3B0IGluIGJ5IGRlY2xhcmluZ1xuICogY2FwYWJpbGl0aWVzLmV4cGVyaW1lbnRhbFsnY2xhdWRlL2NoYW5uZWwvcGVybWlzc2lvbiddLlxuICpcbiAqIEtlbm5ldGgncyBcIndvdWxkIHRoaXMgbGV0IENsYXVkZSBzZWxmLWFwcHJvdmU/XCI6IHRoZSBhcHByb3ZpbmcgcGFydHkgaXNcbiAqIHRoZSBodW1hbiB2aWEgdGhlIGNoYW5uZWwsIG5vdCBDbGF1ZGUuIEJ1dCB0aGUgdHJ1c3QgYm91bmRhcnkgaXNuJ3QgdGhlXG4gKiB0ZXJtaW5hbCBcdTIwMTQgaXQncyB0aGUgYWxsb3dsaXN0ICh0ZW5ndV9oYXJib3JfbGVkZ2VyKS4gQSBjb21wcm9taXNlZFxuICogY2hhbm5lbCBzZXJ2ZXIgQ0FOIGZhYnJpY2F0ZSBcInllcyA8aWQ+XCIgd2l0aG91dCB0aGUgaHVtYW4gc2VlaW5nIHRoZVxuICogcHJvbXB0LiBBY2NlcHRlZCByaXNrOiBhIGNvbXByb21pc2VkIGNoYW5uZWwgYWxyZWFkeSBoYXMgdW5saW1pdGVkXG4gKiBjb252ZXJzYXRpb24taW5qZWN0aW9uIHR1cm5zIChzb2NpYWwtZW5naW5lZXIgb3ZlciB0aW1lLCB3YWl0IGZvclxuICogYWNjZXB0RWRpdHMsIGV0Yy4pOyBpbmplY3QtdGhlbi1zZWxmLWFwcHJvdmUgaXMgZmFzdGVyLCBub3QgbW9yZVxuICogY2FwYWJsZS4gVGhlIGRpYWxvZyBzbG93cyBhIGNvbXByb21pc2VkIGNoYW5uZWw7IGl0IGRvZXNuJ3Qgc3RvcCBvbmUuXG4gKiBTZWUgUFIgZGlzY3Vzc2lvbiAyOTU2NDQwODQ4LlxuICovXG5cbmltcG9ydCB7IGpzb25TdHJpbmdpZnkgfSBmcm9tICcuLi8uLi91dGlscy9zbG93T3BlcmF0aW9ucy5qcydcbmltcG9ydCB7IGdldEZlYXR1cmVWYWx1ZV9DQUNIRURfTUFZX0JFX1NUQUxFIH0gZnJvbSAnLi4vYW5hbHl0aWNzL2dyb3d0aGJvb2suanMnXG5cbi8qKlxuICogR3Jvd3RoQm9vayBydW50aW1lIGdhdGUgXHUyMDE0IHNlcGFyYXRlIGZyb20gdGhlIGNoYW5uZWxzIGdhdGUgKHRlbmd1X2hhcmJvcilcbiAqIHNvIGNoYW5uZWxzIGNhbiBzaGlwIHdpdGhvdXQgcGVybWlzc2lvbi1yZWxheSByaWRpbmcgYWxvbmcgKEtlbm5ldGg6IFwibm9cbiAqIGJha2UgdGltZSBpZiBpdCBnb2VzIG91dCB0b21vcnJvd1wiKS4gRGVmYXVsdCBmYWxzZTsgZmxpcCB3aXRob3V0IGEgcmVsZWFzZS5cbiAqIENoZWNrZWQgb25jZSBhdCB1c2VNYW5hZ2VNQ1BDb25uZWN0aW9ucyBtb3VudCBcdTIwMTQgbWlkLXNlc3Npb24gZmxhZyBjaGFuZ2VzXG4gKiBkb24ndCBhcHBseSB1bnRpbCByZXN0YXJ0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNDaGFubmVsUGVybWlzc2lvblJlbGF5RW5hYmxlZCgpOiBib29sZWFuIHtcbiAgcmV0dXJuIGdldEZlYXR1cmVWYWx1ZV9DQUNIRURfTUFZX0JFX1NUQUxFKCd0ZW5ndV9oYXJib3JfcGVybWlzc2lvbnMnLCBmYWxzZSlcbn1cblxuZXhwb3J0IHR5cGUgQ2hhbm5lbFBlcm1pc3Npb25SZXNwb25zZSA9IHtcbiAgYmVoYXZpb3I6ICdhbGxvdycgfCAnZGVueSdcbiAgLyoqIFdoaWNoIGNoYW5uZWwgc2VydmVyIHRoZSByZXBseSBjYW1lIGZyb20gKGUuZy4sIFwicGx1Z2luOnRlbGVncmFtOnRnXCIpLiAqL1xuICBmcm9tU2VydmVyOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgQ2hhbm5lbFBlcm1pc3Npb25DYWxsYmFja3MgPSB7XG4gIC8qKiBSZWdpc3RlciBhIHJlc29sdmVyIGZvciBhIHJlcXVlc3QgSUQuIFJldHVybnMgdW5zdWJzY3JpYmUuICovXG4gIG9uUmVzcG9uc2UoXG4gICAgcmVxdWVzdElkOiBzdHJpbmcsXG4gICAgaGFuZGxlcjogKHJlc3BvbnNlOiBDaGFubmVsUGVybWlzc2lvblJlc3BvbnNlKSA9PiB2b2lkLFxuICApOiAoKSA9PiB2b2lkXG4gIC8qKiBSZXNvbHZlIGEgcGVuZGluZyByZXF1ZXN0IGZyb20gYSBzdHJ1Y3R1cmVkIGNoYW5uZWwgZXZlbnRcbiAgICogIChub3RpZmljYXRpb25zL2NsYXVkZS9jaGFubmVsL3Blcm1pc3Npb24pLiBSZXR1cm5zIHRydWUgaWYgdGhlIElEXG4gICAqICB3YXMgcGVuZGluZyBcdTIwMTQgdGhlIHNlcnZlciBwYXJzZWQgdGhlIHVzZXIncyByZXBseSBhbmQgZW1pdHRlZFxuICAgKiAge3JlcXVlc3RfaWQsIGJlaGF2aW9yfTsgd2UganVzdCBtYXRjaCBhZ2FpbnN0IHRoZSBtYXAuICovXG4gIHJlc29sdmUoXG4gICAgcmVxdWVzdElkOiBzdHJpbmcsXG4gICAgYmVoYXZpb3I6ICdhbGxvdycgfCAnZGVueScsXG4gICAgZnJvbVNlcnZlcjogc3RyaW5nLFxuICApOiBib29sZWFuXG59XG5cbi8qKlxuICogUmVwbHkgZm9ybWF0IHNwZWMgZm9yIGNoYW5uZWwgc2VydmVycyB0byBpbXBsZW1lbnQ6XG4gKiAgIC9eXFxzKih5fHllc3xufG5vKVxccysoW2Eta20tel17NX0pXFxzKiQvaVxuICpcbiAqIDUgbG93ZXJjYXNlIGxldHRlcnMsIG5vICdsJyAobG9va3MgbGlrZSAxL0kpLiBDYXNlLWluc2Vuc2l0aXZlIChwaG9uZVxuICogYXV0b2NvcnJlY3QpLiBObyBiYXJlIHllcy9ubyAoY29udmVyc2F0aW9uYWwpLiBObyBwcmVmaXgvc3VmZml4IGNoYXR0ZXIuXG4gKlxuICogQ0MgZ2VuZXJhdGVzIHRoZSBJRCBhbmQgc2VuZHMgdGhlIHByb21wdC4gVGhlIFNFUlZFUiBwYXJzZXMgdGhlIHVzZXInc1xuICogcmVwbHkgYW5kIGVtaXRzIG5vdGlmaWNhdGlvbnMvY2xhdWRlL2NoYW5uZWwvcGVybWlzc2lvbiB3aXRoIHtyZXF1ZXN0X2lkLFxuICogYmVoYXZpb3J9IFx1MjAxNCBDQyBkb2Vzbid0IHJlZ2V4LW1hdGNoIHRleHQgYW55bW9yZS4gRXhwb3J0ZWQgc28gcGx1Z2lucyBjYW5cbiAqIGltcG9ydCB0aGUgZXhhY3QgcmVnZXggcmF0aGVyIHRoYW4gaGFuZC1jb3B5aW5nIGl0LlxuICovXG5leHBvcnQgY29uc3QgUEVSTUlTU0lPTl9SRVBMWV9SRSA9IC9eXFxzKih5fHllc3xufG5vKVxccysoW2Eta20tel17NX0pXFxzKiQvaVxuXG4vLyAyNS1sZXR0ZXIgYWxwaGFiZXQ6IGEteiBtaW51cyAnbCcgKGxvb2tzIGxpa2UgMS9JKS4gMjVeNSBcdTIyNDggOS44TSBzcGFjZS5cbmNvbnN0IElEX0FMUEhBQkVUID0gJ2FiY2RlZmdoaWprbW5vcHFyc3R1dnd4eXonXG5cbi8vIFN1YnN0cmluZyBibG9ja2xpc3QgXHUyMDE0IDUgcmFuZG9tIGxldHRlcnMgY2FuIHNwZWxsIHRoaW5ncyAoS2VubmV0aCwgaW4gdGhlXG4vLyBsYXVuY2ggdGhyZWFkOiBcInRoaXMgaXMgd2h5IGkgYmlhcyB0byBudW1iZXJzLCBoYXJkIHRvIGhhdmUgYW55dGhpbmcgd29yc2Vcbi8vIHRoYW4gODAwODVcIikuIE5vbi1leGhhdXN0aXZlLCBjb3ZlcnMgdGhlIHNlbmQtdG8teW91ci1ib3NzLWJ5LWFjY2lkZW50XG4vLyB0aWVyLiBJZiBhIGdlbmVyYXRlZCBJRCBjb250YWlucyBhbnkgb2YgdGhlc2UsIHJlLWhhc2ggd2l0aCBhIHNhbHQuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IElEX0FWT0lEX1NVQlNUUklOR1MgPSBbXG4gICdmdWNrJyxcbiAgJ3NoaXQnLFxuICAnY3VudCcsXG4gICdjb2NrJyxcbiAgJ2RpY2snLFxuICAndHdhdCcsXG4gICdwaXNzJyxcbiAgJ2NyYXAnLFxuICAnYml0Y2gnLFxuICAnd2hvcmUnLFxuICAnYXNzJyxcbiAgJ3RpdCcsXG4gICdjdW0nLFxuICAnZmFnJyxcbiAgJ2R5a2UnLFxuICAnbmlnJyxcbiAgJ2tpa2UnLFxuICAncmFwZScsXG4gICduYXppJyxcbiAgJ2RhbW4nLFxuICAncG9vJyxcbiAgJ3BlZScsXG4gICd3YW5rJyxcbiAgJ2FudXMnLFxuXVxuXG5mdW5jdGlvbiBoYXNoVG9JZChpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gRk5WLTFhIFx1MjE5MiB1aW50MzIsIHRoZW4gYmFzZS0yNSBlbmNvZGUuIE5vdCBjcnlwdG8sIGp1c3QgYSBzdGFibGVcbiAgLy8gc2hvcnQgbGV0dGVycy1vbmx5IElELiAzMiBiaXRzIC8gbG9nMigyNSkgXHUyMjQ4IDYuOSBsZXR0ZXJzIG9mIGVudHJvcHk7XG4gIC8vIHRha2luZyA1IHdhc3RlcyBhIGxpdHRsZSwgcGxlbnR5IGZvciB0aGlzLlxuICBsZXQgaCA9IDB4ODExYzlkYzVcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgIGggXj0gaW5wdXQuY2hhckNvZGVBdChpKVxuICAgIGggPSBNYXRoLmltdWwoaCwgMHgwMTAwMDE5MylcbiAgfVxuICBoID0gaCA+Pj4gMFxuICBsZXQgcyA9ICcnXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgcyArPSBJRF9BTFBIQUJFVFtoICUgMjVdXG4gICAgaCA9IE1hdGguZmxvb3IoaCAvIDI1KVxuICB9XG4gIHJldHVybiBzXG59XG5cbi8qKlxuICogU2hvcnQgSUQgZnJvbSBhIHRvb2xVc2VJRC4gNSBsZXR0ZXJzIGZyb20gYSAyNS1jaGFyIGFscGhhYmV0IChhLXogbWludXNcbiAqICdsJyBcdTIwMTQgbG9va3MgbGlrZSAxL0kgaW4gbWFueSBmb250cykuIDI1XjUgXHUyMjQ4IDkuOE0gc3BhY2UsIGJpcnRoZGF5XG4gKiBjb2xsaXNpb24gYXQgNTAlIG5lZWRzIH4zSyBzaW11bHRhbmVvdXMgcGVuZGluZyBwcm9tcHRzLCBhYnN1cmQgZm9yIGFcbiAqIHNpbmdsZSBpbnRlcmFjdGl2ZSBzZXNzaW9uLiBMZXR0ZXJzLW9ubHkgc28gcGhvbmUgdXNlcnMgZG9uJ3Qgc3dpdGNoXG4gKiBrZXlib2FyZCBtb2RlcyAoaGV4IGFsdGVybmF0ZXMgYS1mLzAtOSBcdTIxOTIgbW9kZSB0b2dnbGVzKS4gUmUtaGFzaGVzIHdpdGhcbiAqIGEgc2FsdCBzdWZmaXggaWYgdGhlIHJlc3VsdCBjb250YWlucyBhIGJsb2NrbGlzdGVkIHN1YnN0cmluZyBcdTIwMTQgNSByYW5kb21cbiAqIGxldHRlcnMgY2FuIHNwZWxsIHRoaW5ncyB5b3UgZG9uJ3Qgd2FudCBpbiBhIHRleHQgbWVzc2FnZSB0byB5b3VyIHBob25lLlxuICogdG9vbFVzZUlEcyBhcmUgYHRvb2x1X2AgKyBiYXNlNjQtaXNoOyB3ZSBoYXNoIHJhdGhlciB0aGFuIHNsaWNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvcnRSZXF1ZXN0SWQodG9vbFVzZUlEOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyA3IGxlbmd0aC0zIFx1MDBENyAzIHBvc2l0aW9ucyBcdTAwRDcgMjVcdTAwQjIgKyAxNSBsZW5ndGgtNCBcdTAwRDcgMiBcdTAwRDcgMjUgKyAyIGxlbmd0aC01XG4gIC8vIFx1MjI0OCAxMyw4NzcgYmxvY2tlZCBJRHMgb3V0IG9mIDkuOE0gXHUyMDE0IHJvdWdobHkgMSBpbiA3MDAgaGl0cyB0aGUgYmxvY2tsaXN0LlxuICAvLyBDYXAgYXQgMTAgcmV0cmllczsgKDEvNzAwKV4xMCBpcyBuZWdsaWdpYmxlLlxuICBsZXQgY2FuZGlkYXRlID0gaGFzaFRvSWQodG9vbFVzZUlEKVxuICBmb3IgKGxldCBzYWx0ID0gMDsgc2FsdCA8IDEwOyBzYWx0KyspIHtcbiAgICBpZiAoIUlEX0FWT0lEX1NVQlNUUklOR1Muc29tZShiYWQgPT4gY2FuZGlkYXRlLmluY2x1ZGVzKGJhZCkpKSB7XG4gICAgICByZXR1cm4gY2FuZGlkYXRlXG4gICAgfVxuICAgIGNhbmRpZGF0ZSA9IGhhc2hUb0lkKGAke3Rvb2xVc2VJRH06JHtzYWx0fWApXG4gIH1cbiAgcmV0dXJuIGNhbmRpZGF0ZVxufVxuXG4vKipcbiAqIFRydW5jYXRlIHRvb2wgaW5wdXQgdG8gYSBwaG9uZS1zaXplZCBKU09OIHByZXZpZXcuIDIwMCBjaGFycyBpc1xuICogcm91Z2hseSAzIGxpbmVzIG9uIGEgbmFycm93IHBob25lIHNjcmVlbi4gRnVsbCBpbnB1dCBpcyBpbiB0aGUgbG9jYWxcbiAqIHRlcm1pbmFsIGRpYWxvZzsgdGhlIGNoYW5uZWwgZ2V0cyBhIHN1bW1hcnkgc28gV3JpdGUoNUtCLWZpbGUpIGRvZXNuJ3RcbiAqIGZsb29kIHlvdXIgdGV4dHMuIFNlcnZlciBkZWNpZGVzIHdoZXRoZXIvaG93IHRvIHNob3cgaXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cnVuY2F0ZUZvclByZXZpZXcoaW5wdXQ6IHVua25vd24pOiBzdHJpbmcge1xuICB0cnkge1xuICAgIGNvbnN0IHMgPSBqc29uU3RyaW5naWZ5KGlucHV0KVxuICAgIHJldHVybiBzLmxlbmd0aCA+IDIwMCA/IHMuc2xpY2UoMCwgMjAwKSArICdcdTIwMjYnIDogc1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gJyh1bnNlcmlhbGl6YWJsZSknXG4gIH1cbn1cblxuLyoqXG4gKiBGaWx0ZXIgTUNQIGNsaWVudHMgZG93biB0byB0aG9zZSB0aGF0IGNhbiByZWxheSBwZXJtaXNzaW9uIHByb21wdHMuXG4gKiBUaHJlZSBjb25kaXRpb25zLCBBTEwgcmVxdWlyZWQ6IGNvbm5lY3RlZCArIGluIHRoZSBzZXNzaW9uJ3MgLS1jaGFubmVsc1xuICogYWxsb3dsaXN0ICsgZGVjbGFyZXMgQk9USCBjYXBhYmlsaXRpZXMuIFRoZSBzZWNvbmQgY2FwYWJpbGl0eSBpcyB0aGVcbiAqIHNlcnZlcidzIGV4cGxpY2l0IG9wdC1pbiBcdTIwMTQgYSByZWxheS1vbmx5IGNoYW5uZWwgbmV2ZXIgYmVjb21lcyBhXG4gKiBwZXJtaXNzaW9uIHN1cmZhY2UgYnkgYWNjaWRlbnQgKEtlbm5ldGgncyBcInVzZXJzIG1heSBiZSB1bnBsZWFzYW50bHlcbiAqIHN1cnByaXNlZFwiKS4gQ2VudHJhbGl6ZWQgaGVyZSBzbyBhIGZ1dHVyZSBmb3VydGggY29uZGl0aW9uIGxhbmRzIG9uY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJQZXJtaXNzaW9uUmVsYXlDbGllbnRzPFxuICBUIGV4dGVuZHMge1xuICAgIHR5cGU6IHN0cmluZ1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGNhcGFiaWxpdGllcz86IHsgZXhwZXJpbWVudGFsPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfVxuICB9LFxuPihcbiAgY2xpZW50czogcmVhZG9ubHkgVFtdLFxuICBpc0luQWxsb3dsaXN0OiAobmFtZTogc3RyaW5nKSA9PiBib29sZWFuLFxuKTogKFQgJiB7IHR5cGU6ICdjb25uZWN0ZWQnIH0pW10ge1xuICByZXR1cm4gY2xpZW50cy5maWx0ZXIoXG4gICAgKGMpOiBjIGlzIFQgJiB7IHR5cGU6ICdjb25uZWN0ZWQnIH0gPT5cbiAgICAgIGMudHlwZSA9PT0gJ2Nvbm5lY3RlZCcgJiZcbiAgICAgIGlzSW5BbGxvd2xpc3QoYy5uYW1lKSAmJlxuICAgICAgYy5jYXBhYmlsaXRpZXM/LmV4cGVyaW1lbnRhbD8uWydjbGF1ZGUvY2hhbm5lbCddICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIGMuY2FwYWJpbGl0aWVzPy5leHBlcmltZW50YWw/LlsnY2xhdWRlL2NoYW5uZWwvcGVybWlzc2lvbiddICE9PSB1bmRlZmluZWQsXG4gIClcbn1cblxuLyoqXG4gKiBGYWN0b3J5IGZvciB0aGUgY2FsbGJhY2tzIG9iamVjdC4gVGhlIHBlbmRpbmcgTWFwIGlzIGNsb3NlZCBvdmVyIFx1MjAxNCBOT1RcbiAqIG1vZHVsZS1sZXZlbCAocGVyIHNyYy9DTEFVREUubWQpLCBOT1QgaW4gQXBwU3RhdGUgKGZ1bmN0aW9ucy1pbi1zdGF0ZVxuICogY2F1c2VzIGlzc3VlcyB3aXRoIGVxdWFsaXR5L3NlcmlhbGl6YXRpb24pLiBTYW1lIGxpZmV0aW1lIHBhdHRlcm4gYXNcbiAqIGByZXBsQnJpZGdlUGVybWlzc2lvbkNhbGxiYWNrc2A6IGNvbnN0cnVjdGVkIG9uY2UgcGVyIHNlc3Npb24gaW5zaWRlXG4gKiBhIFJlYWN0IGhvb2ssIHN0YWJsZSByZWZlcmVuY2Ugc3RvcmVkIGluIEFwcFN0YXRlLlxuICpcbiAqIHJlc29sdmUoKSBpcyBjYWxsZWQgZnJvbSB0aGUgZGVkaWNhdGVkIG5vdGlmaWNhdGlvbiBoYW5kbGVyXG4gKiAobm90aWZpY2F0aW9ucy9jbGF1ZGUvY2hhbm5lbC9wZXJtaXNzaW9uKSB3aXRoIHRoZSBzdHJ1Y3R1cmVkIHBheWxvYWQuXG4gKiBUaGUgc2VydmVyIGFscmVhZHkgcGFyc2VkIFwieWVzIHRieGtxXCIgXHUyMTkyIHtyZXF1ZXN0X2lkLCBiZWhhdmlvcn07IHdlIGp1c3RcbiAqIG1hdGNoIGFnYWluc3QgdGhlIHBlbmRpbmcgbWFwLiBObyByZWdleCBvbiBDQydzIHNpZGUgXHUyMDE0IHRleHQgaW4gdGhlXG4gKiBnZW5lcmFsIGNoYW5uZWwgY2FuJ3QgYWNjaWRlbnRhbGx5IGFwcHJvdmUgYW55dGhpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDaGFubmVsUGVybWlzc2lvbkNhbGxiYWNrcygpOiBDaGFubmVsUGVybWlzc2lvbkNhbGxiYWNrcyB7XG4gIGNvbnN0IHBlbmRpbmcgPSBuZXcgTWFwPFxuICAgIHN0cmluZyxcbiAgICAocmVzcG9uc2U6IENoYW5uZWxQZXJtaXNzaW9uUmVzcG9uc2UpID0+IHZvaWRcbiAgPigpXG5cbiAgcmV0dXJuIHtcbiAgICBvblJlc3BvbnNlKHJlcXVlc3RJZCwgaGFuZGxlcikge1xuICAgICAgLy8gTG93ZXJjYXNlIGhlcmUgdG9vIFx1MjAxNCByZXNvbHZlKCkgYWxyZWFkeSBkb2VzOyBhc3ltbWV0cnkgbWVhbnMgYVxuICAgICAgLy8gZnV0dXJlIGNhbGxlciBwYXNzaW5nIGEgbWl4ZWQtY2FzZSBJRCB3b3VsZCBzaWxlbnRseSBuZXZlciBtYXRjaC5cbiAgICAgIC8vIHNob3J0UmVxdWVzdElkIGFsd2F5cyBlbWl0cyBsb3dlcmNhc2Ugc28gdGhpcyBpcyBhIG5vb3AgdG9kYXksXG4gICAgICAvLyBidXQgdGhlIHN5bW1ldHJ5IG1ha2VzIHRoZSBjb250cmFjdCBleHBsaWNpdC5cbiAgICAgIGNvbnN0IGtleSA9IHJlcXVlc3RJZC50b0xvd2VyQ2FzZSgpXG4gICAgICBwZW5kaW5nLnNldChrZXksIGhhbmRsZXIpXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBwZW5kaW5nLmRlbGV0ZShrZXkpXG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlc29sdmUocmVxdWVzdElkLCBiZWhhdmlvciwgZnJvbVNlcnZlcikge1xuICAgICAgY29uc3Qga2V5ID0gcmVxdWVzdElkLnRvTG93ZXJDYXNlKClcbiAgICAgIGNvbnN0IHJlc29sdmVyID0gcGVuZGluZy5nZXQoa2V5KVxuICAgICAgaWYgKCFyZXNvbHZlcikgcmV0dXJuIGZhbHNlXG4gICAgICAvLyBEZWxldGUgQkVGT1JFIGNhbGxpbmcgXHUyMDE0IGlmIHJlc29sdmVyIHRocm93cyBvciByZS1lbnRlcnMsIHRoZVxuICAgICAgLy8gZW50cnkgaXMgYWxyZWFkeSBnb25lLiBBbHNvIGhhbmRsZXMgZHVwbGljYXRlIGV2ZW50cyAoc2Vjb25kXG4gICAgICAvLyBlbWlzc2lvbiBmYWxscyB0aHJvdWdoIFx1MjAxNCBzZXJ2ZXIgYnVnIG9yIG5ldHdvcmsgZHVwLCBpZ25vcmUpLlxuICAgICAgcGVuZGluZy5kZWxldGUoa2V5KVxuICAgICAgcmVzb2x2ZXIoeyBiZWhhdmlvciwgZnJvbVNlcnZlciB9KVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9LFxuICB9XG59XG4iLCAiaW1wb3J0IHsgZmVhdHVyZSB9IGZyb20gJ2J1bjpidW5kbGUnXG5pbXBvcnQgeyBiYXNlbmFtZSB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldFNlc3Npb25JZCB9IGZyb20gJy4uLy4uL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB0eXBlIHsgQ29tbWFuZCB9IGZyb20gJy4uLy4uL2NvbW1hbmRzLmpzJ1xuaW1wb3J0IHR5cGUgeyBUb29sIH0gZnJvbSAnLi4vLi4vVG9vbC5qcydcbmltcG9ydCB7XG4gIGNsZWFyU2VydmVyQ2FjaGUsXG4gIGZldGNoQ29tbWFuZHNGb3JDbGllbnQsXG4gIGZldGNoUmVzb3VyY2VzRm9yQ2xpZW50LFxuICBmZXRjaFRvb2xzRm9yQ2xpZW50LFxuICBnZXRNY3BUb29sc0NvbW1hbmRzQW5kUmVzb3VyY2VzLFxuICByZWNvbm5lY3RNY3BTZXJ2ZXJJbXBsLFxufSBmcm9tICcuL2NsaWVudC5qcydcbmltcG9ydCB0eXBlIHtcbiAgTUNQU2VydmVyQ29ubmVjdGlvbixcbiAgU2NvcGVkTWNwU2VydmVyQ29uZmlnLFxuICBTZXJ2ZXJSZXNvdXJjZSxcbn0gZnJvbSAnLi90eXBlcy5qcydcblxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyAqL1xuY29uc3QgZmV0Y2hNY3BTa2lsbHNGb3JDbGllbnQgPSBmZWF0dXJlKCdNQ1BfU0tJTExTJylcbiAgPyAoXG4gICAgICByZXF1aXJlKCcuLi8uLi9za2lsbHMvbWNwU2tpbGxzLmpzJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vLi4vc2tpbGxzL21jcFNraWxscy5qcycpXG4gICAgKS5mZXRjaE1jcFNraWxsc0ZvckNsaWVudFxuICA6IG51bGxcbmNvbnN0IGNsZWFyU2tpbGxJbmRleENhY2hlID0gZmVhdHVyZSgnRVhQRVJJTUVOVEFMX1NLSUxMX1NFQVJDSCcpXG4gID8gKFxuICAgICAgcmVxdWlyZSgnLi4vc2tpbGxTZWFyY2gvbG9jYWxTZWFyY2guanMnKSBhcyB0eXBlb2YgaW1wb3J0KCcuLi9za2lsbFNlYXJjaC9sb2NhbFNlYXJjaC5qcycpXG4gICAgKS5jbGVhclNraWxsSW5kZXhDYWNoZVxuICA6IG51bGxcblxuaW1wb3J0IHtcbiAgUHJvbXB0TGlzdENoYW5nZWROb3RpZmljYXRpb25TY2hlbWEsXG4gIFJlc291cmNlTGlzdENoYW5nZWROb3RpZmljYXRpb25TY2hlbWEsXG4gIFRvb2xMaXN0Q2hhbmdlZE5vdGlmaWNhdGlvblNjaGVtYSxcbn0gZnJvbSAnQG1vZGVsY29udGV4dHByb3RvY29sL3Nkay90eXBlcy5qcydcbmltcG9ydCBvbWl0IGZyb20gJ2xvZGFzaC1lcy9vbWl0LmpzJ1xuaW1wb3J0IHJlamVjdCBmcm9tICdsb2Rhc2gtZXMvcmVqZWN0LmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICBsb2dFdmVudCxcbn0gZnJvbSAnc3JjL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB7XG4gIGRlZHVwQ2xhdWRlQWlNY3BTZXJ2ZXJzLFxuICBkb2VzRW50ZXJwcmlzZU1jcENvbmZpZ0V4aXN0LFxuICBmaWx0ZXJNY3BTZXJ2ZXJzQnlQb2xpY3ksXG4gIGdldENsYXVkZUNvZGVNY3BDb25maWdzLFxuICBpc01jcFNlcnZlckRpc2FibGVkLFxuICBzZXRNY3BTZXJ2ZXJFbmFibGVkLFxufSBmcm9tICdzcmMvc2VydmljZXMvbWNwL2NvbmZpZy5qcydcbmltcG9ydCB0eXBlIHsgQXBwU3RhdGUgfSBmcm9tICdzcmMvc3RhdGUvQXBwU3RhdGUuanMnXG5pbXBvcnQgdHlwZSB7IFBsdWdpbkVycm9yIH0gZnJvbSAnc3JjL3R5cGVzL3BsdWdpbi5qcydcbmltcG9ydCB7IGxvZ0ZvckRlYnVnZ2luZyB9IGZyb20gJ3NyYy91dGlscy9kZWJ1Zy5qcydcbmltcG9ydCB7IGdldEFsbG93ZWRDaGFubmVscyB9IGZyb20gJy4uLy4uL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB7IHVzZU5vdGlmaWNhdGlvbnMgfSBmcm9tICcuLi8uLi9jb250ZXh0L25vdGlmaWNhdGlvbnMuanMnXG5pbXBvcnQge1xuICB1c2VBcHBTdGF0ZSxcbiAgdXNlQXBwU3RhdGVTdG9yZSxcbiAgdXNlU2V0QXBwU3RhdGUsXG59IGZyb20gJy4uLy4uL3N0YXRlL0FwcFN0YXRlLmpzJ1xuaW1wb3J0IHsgZXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXJyb3JzLmpzJ1xuLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG5pbXBvcnQgeyBsb2dNQ1BEZWJ1ZywgbG9nTUNQRXJyb3IgfSBmcm9tICcuLi8uLi91dGlscy9sb2cuanMnXG5pbXBvcnQgeyBlbnF1ZXVlIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWVzc2FnZVF1ZXVlTWFuYWdlci5qcydcbmltcG9ydCB7XG4gIENIQU5ORUxfUEVSTUlTU0lPTl9NRVRIT0QsXG4gIENoYW5uZWxNZXNzYWdlTm90aWZpY2F0aW9uU2NoZW1hLFxuICBDaGFubmVsUGVybWlzc2lvbk5vdGlmaWNhdGlvblNjaGVtYSxcbiAgZmluZENoYW5uZWxFbnRyeSxcbiAgZ2F0ZUNoYW5uZWxTZXJ2ZXIsXG4gIHdyYXBDaGFubmVsTWVzc2FnZSxcbn0gZnJvbSAnLi9jaGFubmVsTm90aWZpY2F0aW9uLmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBDaGFubmVsUGVybWlzc2lvbkNhbGxiYWNrcyxcbiAgY3JlYXRlQ2hhbm5lbFBlcm1pc3Npb25DYWxsYmFja3MsXG4gIGlzQ2hhbm5lbFBlcm1pc3Npb25SZWxheUVuYWJsZWQsXG59IGZyb20gJy4vY2hhbm5lbFBlcm1pc3Npb25zLmpzJ1xuaW1wb3J0IHtcbiAgY2xlYXJDbGF1ZGVBSU1jcENvbmZpZ3NDYWNoZSxcbiAgZmV0Y2hDbGF1ZGVBSU1jcENvbmZpZ3NJZkVsaWdpYmxlLFxufSBmcm9tICcuL2NsYXVkZWFpLmpzJ1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGljaXRhdGlvbkhhbmRsZXIgfSBmcm9tICcuL2VsaWNpdGF0aW9uSGFuZGxlci5qcydcbmltcG9ydCB7IGdldE1jcFByZWZpeCB9IGZyb20gJy4vbWNwU3RyaW5nVXRpbHMuanMnXG5pbXBvcnQgeyBjb21tYW5kQmVsb25nc1RvU2VydmVyLCBleGNsdWRlU3RhbGVQbHVnaW5DbGllbnRzIH0gZnJvbSAnLi91dGlscy5qcydcblxuLy8gQ29uc3RhbnRzIGZvciByZWNvbm5lY3Rpb24gd2l0aCBleHBvbmVudGlhbCBiYWNrb2ZmXG5jb25zdCBNQVhfUkVDT05ORUNUX0FUVEVNUFRTID0gNVxuY29uc3QgSU5JVElBTF9CQUNLT0ZGX01TID0gMTAwMFxuY29uc3QgTUFYX0JBQ0tPRkZfTVMgPSAzMDAwMFxuXG4vKipcbiAqIENyZWF0ZSBhIHVuaXF1ZSBrZXkgZm9yIGEgcGx1Z2luIGVycm9yIHRvIGVuYWJsZSBkZWR1cGxpY2F0aW9uXG4gKi9cbmZ1bmN0aW9uIGdldEVycm9yS2V5KGVycm9yOiBQbHVnaW5FcnJvcik6IHN0cmluZyB7XG4gIGNvbnN0IHBsdWdpbiA9ICdwbHVnaW4nIGluIGVycm9yID8gZXJyb3IucGx1Z2luIDogJ25vLXBsdWdpbidcbiAgcmV0dXJuIGAke2Vycm9yLnR5cGV9OiR7ZXJyb3Iuc291cmNlfToke3BsdWdpbn1gXG59XG5cbi8qKlxuICogQWRkIGVycm9ycyB0byBBcHBTdGF0ZSwgZGVkdXBsaWNhdGluZyB0byBhdm9pZCBzaG93aW5nIHRoZSBzYW1lIGVycm9yIG11bHRpcGxlIHRpbWVzXG4gKi9cbmZ1bmN0aW9uIGFkZEVycm9yc1RvQXBwU3RhdGUoXG4gIHNldEFwcFN0YXRlOiAodXBkYXRlcjogKHByZXY6IEFwcFN0YXRlKSA9PiBBcHBTdGF0ZSkgPT4gdm9pZCxcbiAgbmV3RXJyb3JzOiBQbHVnaW5FcnJvcltdLFxuKTogdm9pZCB7XG4gIGlmIChuZXdFcnJvcnMubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICBzZXRBcHBTdGF0ZShwcmV2U3RhdGUgPT4ge1xuICAgIC8vIEJ1aWxkIHNldCBvZiBleGlzdGluZyBlcnJvciBrZXlzXG4gICAgY29uc3QgZXhpc3RpbmdLZXlzID0gbmV3IFNldChcbiAgICAgIHByZXZTdGF0ZS5wbHVnaW5zLmVycm9ycy5tYXAoZSA9PiBnZXRFcnJvcktleShlKSksXG4gICAgKVxuXG4gICAgLy8gT25seSBhZGQgZXJyb3JzIHRoYXQgZG9uJ3QgYWxyZWFkeSBleGlzdFxuICAgIGNvbnN0IHVuaXF1ZU5ld0Vycm9ycyA9IG5ld0Vycm9ycy5maWx0ZXIoXG4gICAgICBlcnJvciA9PiAhZXhpc3RpbmdLZXlzLmhhcyhnZXRFcnJvcktleShlcnJvcikpLFxuICAgIClcblxuICAgIGlmICh1bmlxdWVOZXdFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gcHJldlN0YXRlXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgLi4ucHJldlN0YXRlLnBsdWdpbnMsXG4gICAgICAgIGVycm9yczogWy4uLnByZXZTdGF0ZS5wbHVnaW5zLmVycm9ycywgLi4udW5pcXVlTmV3RXJyb3JzXSxcbiAgICAgIH0sXG4gICAgfVxuICB9KVxufVxuXG4vKipcbiAqIEhvb2sgdG8gbWFuYWdlIE1DUCAoTW9kZWwgQ29udGV4dCBQcm90b2NvbCkgc2VydmVyIGNvbm5lY3Rpb25zIGFuZCB1cGRhdGVzXG4gKlxuICogVGhpcyBob29rOlxuICogMS4gSW5pdGlhbGl6ZXMgTUNQIGNsaWVudCBjb25uZWN0aW9ucyBiYXNlZCBvbiBjb25maWdcbiAqIDIuIFNldHMgdXAgaGFuZGxlcnMgZm9yIGNvbm5lY3Rpb24gbGlmZWN5Y2xlIGV2ZW50cyBhbmQgc3luYyB3aXRoIGFwcCBzdGF0ZVxuICogMy4gTWFuYWdlcyBhdXRvbWF0aWMgcmVjb25uZWN0aW9uIGZvciBTU0UgY29ubmVjdGlvbnNcbiAqIDQuIFJldHVybnMgYSByZWNvbm5lY3QgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1hbmFnZU1DUENvbm5lY3Rpb25zKFxuICBkeW5hbWljTWNwQ29uZmlnOiBSZWNvcmQ8c3RyaW5nLCBTY29wZWRNY3BTZXJ2ZXJDb25maWc+IHwgdW5kZWZpbmVkLFxuICBpc1N0cmljdE1jcENvbmZpZyA9IGZhbHNlLFxuKSB7XG4gIGNvbnN0IHN0b3JlID0gdXNlQXBwU3RhdGVTdG9yZSgpXG4gIGNvbnN0IF9hdXRoVmVyc2lvbiA9IHVzZUFwcFN0YXRlKHMgPT4gcy5hdXRoVmVyc2lvbilcbiAgLy8gSW5jcmVtZW50ZWQgYnkgL3JlbG9hZC1wbHVnaW5zIChyZWZyZXNoQWN0aXZlUGx1Z2lucykgdG8gcGljayB1cCBuZXdseVxuICAvLyBlbmFibGVkIHBsdWdpbiBNQ1Agc2VydmVycy4gZ2V0Q2xhdWRlQ29kZU1jcENvbmZpZ3MoKSByZWFkcyBsb2FkQWxsUGx1Z2lucygpXG4gIC8vIHdoaWNoIGhhcyBiZWVuIGNsZWFyZWQgYnkgcmVmcmVzaEFjdGl2ZVBsdWdpbnMsIHNvIHRoZSBlZmZlY3RzIGJlbG93IHNlZVxuICAvLyBmcmVzaCBwbHVnaW4gZGF0YSBvbiByZS1ydW4uXG4gIGNvbnN0IF9wbHVnaW5SZWNvbm5lY3RLZXkgPSB1c2VBcHBTdGF0ZShzID0+IHMubWNwLnBsdWdpblJlY29ubmVjdEtleSlcbiAgY29uc3Qgc2V0QXBwU3RhdGUgPSB1c2VTZXRBcHBTdGF0ZSgpXG5cbiAgLy8gVHJhY2sgYWN0aXZlIHJlY29ubmVjdGlvbiBhdHRlbXB0cyB0byBhbGxvdyBjYW5jZWxsYXRpb25cbiAgY29uc3QgcmVjb25uZWN0VGltZXJzUmVmID0gdXNlUmVmPE1hcDxzdHJpbmcsIE5vZGVKUy5UaW1lb3V0Pj4obmV3IE1hcCgpKVxuXG4gIC8vIERlZHVwIHRoZSAtLWNoYW5uZWxzIGJsb2NrZWQgd2FybmluZyBwZXIgc2tpcCBraW5kIHNvIHRoYXQgYSB1c2VyIHdob1xuICAvLyBzZWVzIFwicnVuIC9sb2dpblwiIChhdXRoIHNraXApLCBsb2dzIGluLCB0aGVuIGhpdHMgdGhlIHBvbGljeSBnYXRlXG4gIC8vIGdldHMgYSBzZWNvbmQgdG9hc3QuXG4gIGNvbnN0IGNoYW5uZWxXYXJuZWRLaW5kc1JlZiA9IHVzZVJlZjxcbiAgICBTZXQ8J2Rpc2FibGVkJyB8ICdhdXRoJyB8ICdwb2xpY3knIHwgJ21hcmtldHBsYWNlJyB8ICdhbGxvd2xpc3QnPlxuICA+KG5ldyBTZXQoKSlcbiAgLy8gQ2hhbm5lbCBwZXJtaXNzaW9uIGNhbGxiYWNrcyBcdTIwMTQgY29uc3RydWN0ZWQgb25jZSwgc3RhYmxlIHJlZi4gU3RvcmVkIGluXG4gIC8vIEFwcFN0YXRlIHNvIGludGVyYWN0aXZlSGFuZGxlciBjYW4gc3Vic2NyaWJlLiBUaGUgcGVuZGluZyBNYXAgbGl2ZXMgaW5zaWRlXG4gIC8vIHRoZSBjbG9zdXJlIChub3QgbW9kdWxlLWxldmVsLCBub3QgQXBwU3RhdGUgXHUyMDE0IGZ1bmN0aW9ucy1pbi1zdGF0ZSBpcyBicml0dGxlKS5cbiAgY29uc3QgY2hhbm5lbFBlcm1DYWxsYmFja3NSZWYgPSB1c2VSZWY8Q2hhbm5lbFBlcm1pc3Npb25DYWxsYmFja3MgfCBudWxsPihcbiAgICBudWxsLFxuICApXG4gIGlmIChcbiAgICAoZmVhdHVyZSgnS0FJUk9TJykgfHwgZmVhdHVyZSgnS0FJUk9TX0NIQU5ORUxTJykpICYmXG4gICAgY2hhbm5lbFBlcm1DYWxsYmFja3NSZWYuY3VycmVudCA9PT0gbnVsbFxuICApIHtcbiAgICBjaGFubmVsUGVybUNhbGxiYWNrc1JlZi5jdXJyZW50ID0gY3JlYXRlQ2hhbm5lbFBlcm1pc3Npb25DYWxsYmFja3MoKVxuICB9XG4gIC8vIFN0b3JlIGNhbGxiYWNrcyBpbiBBcHBTdGF0ZSBzbyBpbnRlcmFjdGl2ZUhhbmRsZXIudHMgY2FuIHJlYWNoIHRoZW0gdmlhXG4gIC8vIGN0eC50b29sVXNlQ29udGV4dC5nZXRBcHBTdGF0ZSgpLiBPbmUtdGltZSBzZXQgXHUyMDE0IHRoZSByZWYgaXMgc3RhYmxlLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChmZWF0dXJlKCdLQUlST1MnKSB8fCBmZWF0dXJlKCdLQUlST1NfQ0hBTk5FTFMnKSkge1xuICAgICAgY29uc3QgY2FsbGJhY2tzID0gY2hhbm5lbFBlcm1DYWxsYmFja3NSZWYuY3VycmVudFxuICAgICAgaWYgKCFjYWxsYmFja3MpIHJldHVyblxuICAgICAgLy8gR3Jvd3RoQm9vayBydW50aW1lIGdhdGUgXHUyMDE0IHNlcGFyYXRlIGZyb20gY2hhbm5lbHMgc28gY2hhbm5lbHMgY2FuXG4gICAgICAvLyBzaGlwIHdpdGhvdXQgdGhpcy4gQ2hlY2tlZCBhdCBtb3VudDsgbWlkLXNlc3Npb24gZmxpcHMgbmVlZCByZXN0YXJ0LlxuICAgICAgLy8gSWYgb2ZmLCBjYWxsYmFja3MgbmV2ZXIgZ28gaW50byBBcHBTdGF0ZSBcdTIxOTIgaW50ZXJhY3RpdmVIYW5kbGVyIHNlZXNcbiAgICAgIC8vIHVuZGVmaW5lZCBcdTIxOTIgbmV2ZXIgc2VuZHMgXHUyMTkyIGludGVyY2VwdCBoYXMgbm90aGluZyBwZW5kaW5nIFx1MjE5MiBcInllcyB0YnhrcVwiXG4gICAgICAvLyBmbG93cyB0byBDbGF1ZGUgYXMgbm9ybWFsIGNoYXQuIE9uZSBnYXRlLCBmdWxsIGRpc2FibGUuXG4gICAgICBpZiAoIWlzQ2hhbm5lbFBlcm1pc3Npb25SZWxheUVuYWJsZWQoKSkgcmV0dXJuXG4gICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+IHtcbiAgICAgICAgaWYgKHByZXYuY2hhbm5lbFBlcm1pc3Npb25DYWxsYmFja3MgPT09IGNhbGxiYWNrcykgcmV0dXJuIHByZXZcbiAgICAgICAgcmV0dXJuIHsgLi4ucHJldiwgY2hhbm5lbFBlcm1pc3Npb25DYWxsYmFja3M6IGNhbGxiYWNrcyB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgc2V0QXBwU3RhdGUocHJldiA9PiB7XG4gICAgICAgICAgaWYgKHByZXYuY2hhbm5lbFBlcm1pc3Npb25DYWxsYmFja3MgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHByZXZcbiAgICAgICAgICByZXR1cm4geyAuLi5wcmV2LCBjaGFubmVsUGVybWlzc2lvbkNhbGxiYWNrczogdW5kZWZpbmVkIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtzZXRBcHBTdGF0ZV0pXG4gIGNvbnN0IHsgYWRkTm90aWZpY2F0aW9uIH0gPSB1c2VOb3RpZmljYXRpb25zKClcblxuICAvLyBCYXRjaGVkIE1DUCBzdGF0ZSB1cGRhdGVzOiBxdWV1ZSBpbmRpdmlkdWFsIHNlcnZlciB1cGRhdGVzIGFuZCBmbHVzaCB0aGVtXG4gIC8vIGluIGEgc2luZ2xlIHNldEFwcFN0YXRlIGNhbGwgdmlhIHNldFRpbWVvdXQuIFVzaW5nIGEgdGltZS1iYXNlZCB3aW5kb3dcbiAgLy8gKGluc3RlYWQgb2YgcXVldWVNaWNyb3Rhc2spIGVuc3VyZXMgdXBkYXRlcyBhcmUgYmF0Y2hlZCBldmVuIHdoZW5cbiAgLy8gY29ubmVjdGlvbiBjYWxsYmFja3MgYXJyaXZlIGF0IGRpZmZlcmVudCB0aW1lcyBkdWUgdG8gbmV0d29yayBJL08uXG4gIGNvbnN0IE1DUF9CQVRDSF9GTFVTSF9NUyA9IDE2XG4gIHR5cGUgUGVuZGluZ1VwZGF0ZSA9IE1DUFNlcnZlckNvbm5lY3Rpb24gJiB7XG4gICAgdG9vbHM/OiBUb29sW11cbiAgICBjb21tYW5kcz86IENvbW1hbmRbXVxuICAgIHJlc291cmNlcz86IFNlcnZlclJlc291cmNlW11cbiAgfVxuICBjb25zdCBwZW5kaW5nVXBkYXRlc1JlZiA9IHVzZVJlZjxQZW5kaW5nVXBkYXRlW10+KFtdKVxuICBjb25zdCBmbHVzaFRpbWVyUmVmID0gdXNlUmVmPFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+IHwgbnVsbD4obnVsbClcblxuICBjb25zdCBmbHVzaFBlbmRpbmdVcGRhdGVzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGZsdXNoVGltZXJSZWYuY3VycmVudCA9IG51bGxcbiAgICBjb25zdCB1cGRhdGVzID0gcGVuZGluZ1VwZGF0ZXNSZWYuY3VycmVudFxuICAgIGlmICh1cGRhdGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG4gICAgcGVuZGluZ1VwZGF0ZXNSZWYuY3VycmVudCA9IFtdXG5cbiAgICBzZXRBcHBTdGF0ZShwcmV2U3RhdGUgPT4ge1xuICAgICAgbGV0IG1jcCA9IHByZXZTdGF0ZS5tY3BcblxuICAgICAgZm9yIChjb25zdCB1cGRhdGUgb2YgdXBkYXRlcykge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgdG9vbHM6IHJhd1Rvb2xzLFxuICAgICAgICAgIGNvbW1hbmRzOiByYXdDbWRzLFxuICAgICAgICAgIHJlc291cmNlczogcmF3UmVzLFxuICAgICAgICAgIC4uLmNsaWVudFxuICAgICAgICB9ID0gdXBkYXRlXG4gICAgICAgIGNvbnN0IHRvb2xzID1cbiAgICAgICAgICBjbGllbnQudHlwZSA9PT0gJ2Rpc2FibGVkJyB8fCBjbGllbnQudHlwZSA9PT0gJ2ZhaWxlZCdcbiAgICAgICAgICAgID8gKHJhd1Rvb2xzID8/IFtdKVxuICAgICAgICAgICAgOiByYXdUb29sc1xuICAgICAgICBjb25zdCBjb21tYW5kcyA9XG4gICAgICAgICAgY2xpZW50LnR5cGUgPT09ICdkaXNhYmxlZCcgfHwgY2xpZW50LnR5cGUgPT09ICdmYWlsZWQnXG4gICAgICAgICAgICA/IChyYXdDbWRzID8/IFtdKVxuICAgICAgICAgICAgOiByYXdDbWRzXG4gICAgICAgIGNvbnN0IHJlc291cmNlcyA9XG4gICAgICAgICAgY2xpZW50LnR5cGUgPT09ICdkaXNhYmxlZCcgfHwgY2xpZW50LnR5cGUgPT09ICdmYWlsZWQnXG4gICAgICAgICAgICA/IChyYXdSZXMgPz8gW10pXG4gICAgICAgICAgICA6IHJhd1Jlc1xuXG4gICAgICAgIGNvbnN0IHByZWZpeCA9IGdldE1jcFByZWZpeChjbGllbnQubmFtZSlcbiAgICAgICAgY29uc3QgZXhpc3RpbmdDbGllbnRJbmRleCA9IG1jcC5jbGllbnRzLmZpbmRJbmRleChcbiAgICAgICAgICBjID0+IGMubmFtZSA9PT0gY2xpZW50Lm5hbWUsXG4gICAgICAgIClcblxuICAgICAgICBjb25zdCB1cGRhdGVkQ2xpZW50cyA9XG4gICAgICAgICAgZXhpc3RpbmdDbGllbnRJbmRleCA9PT0gLTFcbiAgICAgICAgICAgID8gWy4uLm1jcC5jbGllbnRzLCBjbGllbnRdXG4gICAgICAgICAgICA6IG1jcC5jbGllbnRzLm1hcChjID0+IChjLm5hbWUgPT09IGNsaWVudC5uYW1lID8gY2xpZW50IDogYykpXG5cbiAgICAgICAgY29uc3QgdXBkYXRlZFRvb2xzID1cbiAgICAgICAgICB0b29scyA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IG1jcC50b29sc1xuICAgICAgICAgICAgOiBbLi4ucmVqZWN0KG1jcC50b29scywgdCA9PiB0Lm5hbWU/LnN0YXJ0c1dpdGgocHJlZml4KSksIC4uLnRvb2xzXVxuXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRDb21tYW5kcyA9XG4gICAgICAgICAgY29tbWFuZHMgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBtY3AuY29tbWFuZHNcbiAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgIC4uLnJlamVjdChtY3AuY29tbWFuZHMsIGMgPT5cbiAgICAgICAgICAgICAgICAgIGNvbW1hbmRCZWxvbmdzVG9TZXJ2ZXIoYywgY2xpZW50Lm5hbWUpLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgLi4uY29tbWFuZHMsXG4gICAgICAgICAgICAgIF1cblxuICAgICAgICBjb25zdCB1cGRhdGVkUmVzb3VyY2VzID1cbiAgICAgICAgICByZXNvdXJjZXMgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBtY3AucmVzb3VyY2VzXG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAuLi5tY3AucmVzb3VyY2VzLFxuICAgICAgICAgICAgICAgIC4uLihyZXNvdXJjZXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgPyB7IFtjbGllbnQubmFtZV06IHJlc291cmNlcyB9XG4gICAgICAgICAgICAgICAgICA6IG9taXQobWNwLnJlc291cmNlcywgY2xpZW50Lm5hbWUpKSxcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgIG1jcCA9IHtcbiAgICAgICAgICAuLi5tY3AsXG4gICAgICAgICAgY2xpZW50czogdXBkYXRlZENsaWVudHMsXG4gICAgICAgICAgdG9vbHM6IHVwZGF0ZWRUb29scyxcbiAgICAgICAgICBjb21tYW5kczogdXBkYXRlZENvbW1hbmRzLFxuICAgICAgICAgIHJlc291cmNlczogdXBkYXRlZFJlc291cmNlcyxcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIG1jcCB9XG4gICAgfSlcbiAgfSwgW3NldEFwcFN0YXRlXSlcblxuICAvLyBVcGRhdGUgc2VydmVyIHN0YXRlLCB0b29scywgY29tbWFuZHMsIGFuZCByZXNvdXJjZXMuXG4gIC8vIFdoZW4gdG9vbHMsIGNvbW1hbmRzLCBvciByZXNvdXJjZXMgYXJlIHVuZGVmaW5lZCwgdGhlIGV4aXN0aW5nIHZhbHVlcyBhcmUgcHJlc2VydmVkLlxuICAvLyBXaGVuIHR5cGUgaXMgJ2Rpc2FibGVkJyBvciAnZmFpbGVkJywgdG9vbHMvY29tbWFuZHMvcmVzb3VyY2VzIGFyZSBhdXRvbWF0aWNhbGx5IGNsZWFyZWQuXG4gIC8vIFVwZGF0ZXMgYXJlIGJhdGNoZWQgdmlhIHNldFRpbWVvdXQgdG8gY29hbGVzY2UgdXBkYXRlcyBhcnJpdmluZyB3aXRoaW4gTUNQX0JBVENIX0ZMVVNIX01TLlxuICBjb25zdCB1cGRhdGVTZXJ2ZXIgPSB1c2VDYWxsYmFjayhcbiAgICAodXBkYXRlOiBQZW5kaW5nVXBkYXRlKSA9PiB7XG4gICAgICBwZW5kaW5nVXBkYXRlc1JlZi5jdXJyZW50LnB1c2godXBkYXRlKVxuICAgICAgaWYgKGZsdXNoVGltZXJSZWYuY3VycmVudCA9PT0gbnVsbCkge1xuICAgICAgICBmbHVzaFRpbWVyUmVmLmN1cnJlbnQgPSBzZXRUaW1lb3V0KFxuICAgICAgICAgIGZsdXNoUGVuZGluZ1VwZGF0ZXMsXG4gICAgICAgICAgTUNQX0JBVENIX0ZMVVNIX01TLFxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbZmx1c2hQZW5kaW5nVXBkYXRlc10sXG4gIClcblxuICBjb25zdCBvbkNvbm5lY3Rpb25BdHRlbXB0ID0gdXNlQ2FsbGJhY2soXG4gICAgKHtcbiAgICAgIGNsaWVudCxcbiAgICAgIHRvb2xzLFxuICAgICAgY29tbWFuZHMsXG4gICAgICByZXNvdXJjZXMsXG4gICAgfToge1xuICAgICAgY2xpZW50OiBNQ1BTZXJ2ZXJDb25uZWN0aW9uXG4gICAgICB0b29sczogVG9vbFtdXG4gICAgICBjb21tYW5kczogQ29tbWFuZFtdXG4gICAgICByZXNvdXJjZXM/OiBTZXJ2ZXJSZXNvdXJjZVtdXG4gICAgfSkgPT4ge1xuICAgICAgdXBkYXRlU2VydmVyKHsgLi4uY2xpZW50LCB0b29scywgY29tbWFuZHMsIHJlc291cmNlcyB9KVxuXG4gICAgICAvLyBIYW5kbGUgc2lkZSBlZmZlY3RzIGJhc2VkIG9uIGNsaWVudCBzdGF0ZVxuICAgICAgc3dpdGNoIChjbGllbnQudHlwZSkge1xuICAgICAgICBjYXNlICdjb25uZWN0ZWQnOiB7XG4gICAgICAgICAgLy8gT3ZlcndyaXRlIHRoZSBkZWZhdWx0IGVsaWNpdGF0aW9uIGhhbmRsZXIgcmVnaXN0ZXJlZCBpbiBjb25uZWN0VG9TZXJ2ZXJcbiAgICAgICAgICAvLyB3aXRoIHRoZSByZWFsIG9uZSAocXVldWVzIGVsaWNpdGF0aW9uIGluIEFwcFN0YXRlIGZvciBVSSkuIFJlZ2lzdGVyaW5nXG4gICAgICAgICAgLy8gaGVyZSAob25jZSBwZXIgY29ubmVjdCkgaW5zdGVhZCBvZiBpbiBhIFttY3BDbGllbnRzXSBlZmZlY3QgYXZvaWRzXG4gICAgICAgICAgLy8gcmUtcnVubmluZyBmb3IgZXZlcnkgYWxyZWFkeS1jb25uZWN0ZWQgc2VydmVyIG9uIGVhY2ggc3RhdGUgY2hhbmdlLlxuICAgICAgICAgIHJlZ2lzdGVyRWxpY2l0YXRpb25IYW5kbGVyKGNsaWVudC5jbGllbnQsIGNsaWVudC5uYW1lLCBzZXRBcHBTdGF0ZSlcblxuICAgICAgICAgIGNsaWVudC5jbGllbnQub25jbG9zZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZ1R5cGUgPSBjbGllbnQuY29uZmlnLnR5cGUgPz8gJ3N0ZGlvJ1xuXG4gICAgICAgICAgICBjbGVhclNlcnZlckNhY2hlKGNsaWVudC5uYW1lLCBjbGllbnQuY29uZmlnKS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgICBgRmFpbGVkIHRvIGludmFsaWRhdGUgdGhlIHNlcnZlciBjYWNoZTogJHtjbGllbnQubmFtZX1gLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyBUT0RPOiBUaGlzIHJlYWxseSBpc24ndCBncmVhdDogaWRlYWxseSB3ZSdkIGNoZWNrIGFwcHN0YXRlIGFzIHRoZSBzb3VyY2Ugb2YgdHJ1dGhcbiAgICAgICAgICAgIC8vIGFzIHRvIHdoZXRoZXIgaXQgd2FzIGRpc2Nvbm5lY3RlZCBkdWUgdG8gYSBkaXNhYmxlLCBidXQgYXBwc3RhdGUgaXMgc3RhbGUgYXQgdGhpc1xuICAgICAgICAgICAgLy8gcG9pbnQuIEdldHRpbmcgYSBsaXZlIHJlZmVyZW5jZSB0byBhcHBzdGF0ZSBmZWVscyBhIGxpdHRsZSBoYWNreSwgc28gd2UnbGwganVzdFxuICAgICAgICAgICAgLy8gY2hlY2sgdGhlIGRpc2sgc3RhdGUuIFdlIG1heSB3YW50IHRvIHJlZmFjdG9yIHNvbWUgb2YgdGhpcy5cbiAgICAgICAgICAgIGlmIChpc01jcFNlcnZlckRpc2FibGVkKGNsaWVudC5uYW1lKSkge1xuICAgICAgICAgICAgICBsb2dNQ1BEZWJ1ZyhcbiAgICAgICAgICAgICAgICBjbGllbnQubmFtZSxcbiAgICAgICAgICAgICAgICBgU2VydmVyIGlzIGRpc2FibGVkLCBza2lwcGluZyBhdXRvbWF0aWMgcmVjb25uZWN0aW9uYCxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSGFuZGxlIGF1dG9tYXRpYyByZWNvbm5lY3Rpb24gZm9yIHJlbW90ZSB0cmFuc3BvcnRzXG4gICAgICAgICAgICAvLyBTa2lwIHN0ZGlvIChsb2NhbCBwcm9jZXNzKSBhbmQgc2RrIChpbnRlcm5hbCkgLSB0aGV5IGRvbid0IHN1cHBvcnQgcmVjb25uZWN0aW9uXG4gICAgICAgICAgICBpZiAoY29uZmlnVHlwZSAhPT0gJ3N0ZGlvJyAmJiBjb25maWdUeXBlICE9PSAnc2RrJykge1xuICAgICAgICAgICAgICBjb25zdCB0cmFuc3BvcnRUeXBlID0gZ2V0VHJhbnNwb3J0RGlzcGxheU5hbWUoY29uZmlnVHlwZSlcbiAgICAgICAgICAgICAgbG9nTUNQRGVidWcoXG4gICAgICAgICAgICAgICAgY2xpZW50Lm5hbWUsXG4gICAgICAgICAgICAgICAgYCR7dHJhbnNwb3J0VHlwZX0gdHJhbnNwb3J0IGNsb3NlZC9kaXNjb25uZWN0ZWQsIGF0dGVtcHRpbmcgYXV0b21hdGljIHJlY29ubmVjdGlvbmAsXG4gICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICAvLyBDYW5jZWwgYW55IGV4aXN0aW5nIHJlY29ubmVjdGlvbiBhdHRlbXB0IGZvciB0aGlzIHNlcnZlclxuICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ1RpbWVyID0gcmVjb25uZWN0VGltZXJzUmVmLmN1cnJlbnQuZ2V0KGNsaWVudC5uYW1lKVxuICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdUaW1lcikge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChleGlzdGluZ1RpbWVyKVxuICAgICAgICAgICAgICAgIHJlY29ubmVjdFRpbWVyc1JlZi5jdXJyZW50LmRlbGV0ZShjbGllbnQubmFtZSlcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIEF0dGVtcHQgcmVjb25uZWN0aW9uIHdpdGggZXhwb25lbnRpYWwgYmFja29mZlxuICAgICAgICAgICAgICBjb25zdCByZWNvbm5lY3RXaXRoQmFja29mZiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgICAgICAgbGV0IGF0dGVtcHQgPSAxO1xuICAgICAgICAgICAgICAgICAgYXR0ZW1wdCA8PSBNQVhfUkVDT05ORUNUX0FUVEVNUFRTO1xuICAgICAgICAgICAgICAgICAgYXR0ZW1wdCsrXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBzZXJ2ZXIgd2FzIGRpc2FibGVkIHdoaWxlIHdlIHdlcmUgd2FpdGluZ1xuICAgICAgICAgICAgICAgICAgaWYgKGlzTWNwU2VydmVyRGlzYWJsZWQoY2xpZW50Lm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ01DUERlYnVnKFxuICAgICAgICAgICAgICAgICAgICAgIGNsaWVudC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGBTZXJ2ZXIgZGlzYWJsZWQgZHVyaW5nIHJlY29ubmVjdGlvbiwgc3RvcHBpbmcgcmV0cnlgLFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHJlY29ubmVjdFRpbWVyc1JlZi5jdXJyZW50LmRlbGV0ZShjbGllbnQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHVwZGF0ZVNlcnZlcih7XG4gICAgICAgICAgICAgICAgICAgIC4uLmNsaWVudCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3BlbmRpbmcnLFxuICAgICAgICAgICAgICAgICAgICByZWNvbm5lY3RBdHRlbXB0OiBhdHRlbXB0LFxuICAgICAgICAgICAgICAgICAgICBtYXhSZWNvbm5lY3RBdHRlbXB0czogTUFYX1JFQ09OTkVDVF9BVFRFTVBUUyxcbiAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY29ubmVjdFN0YXJ0VGltZSA9IERhdGUubm93KClcbiAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlY29ubmVjdE1jcFNlcnZlckltcGwoXG4gICAgICAgICAgICAgICAgICAgICAgY2xpZW50Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgY2xpZW50LmNvbmZpZyxcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGFwc2VkID0gRGF0ZS5ub3coKSAtIHJlY29ubmVjdFN0YXJ0VGltZVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY2xpZW50LnR5cGUgPT09ICdjb25uZWN0ZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgbG9nTUNQRGVidWcoXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke3RyYW5zcG9ydFR5cGV9IHJlY29ubmVjdGlvbiBzdWNjZXNzZnVsIGFmdGVyICR7ZWxhcHNlZH1tcyAoYXR0ZW1wdCAke2F0dGVtcHR9KWAsXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIHJlY29ubmVjdFRpbWVyc1JlZi5jdXJyZW50LmRlbGV0ZShjbGllbnQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICBvbkNvbm5lY3Rpb25BdHRlbXB0KHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGxvZ01DUERlYnVnKFxuICAgICAgICAgICAgICAgICAgICAgIGNsaWVudC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGAke3RyYW5zcG9ydFR5cGV9IHJlY29ubmVjdGlvbiBhdHRlbXB0ICR7YXR0ZW1wdH0gY29tcGxldGVkIHdpdGggc3RhdHVzOiAke3Jlc3VsdC5jbGllbnQudHlwZX1gLFxuICAgICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gT24gZmluYWwgYXR0ZW1wdCwgdXBkYXRlIHN0YXRlIHdpdGggdGhlIHJlc3VsdFxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdCA9PT0gTUFYX1JFQ09OTkVDVF9BVFRFTVBUUykge1xuICAgICAgICAgICAgICAgICAgICAgIGxvZ01DUERlYnVnKFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBgTWF4IHJlY29ubmVjdGlvbiBhdHRlbXB0cyAoJHtNQVhfUkVDT05ORUNUX0FUVEVNUFRTfSkgcmVhY2hlZCwgZ2l2aW5nIHVwYCxcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgcmVjb25uZWN0VGltZXJzUmVmLmN1cnJlbnQuZGVsZXRlKGNsaWVudC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ29ubmVjdGlvbkF0dGVtcHQocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGFwc2VkID0gRGF0ZS5ub3coKSAtIHJlY29ubmVjdFN0YXJ0VGltZVxuICAgICAgICAgICAgICAgICAgICBsb2dNQ1BFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICBjbGllbnQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBgJHt0cmFuc3BvcnRUeXBlfSByZWNvbm5lY3Rpb24gYXR0ZW1wdCAke2F0dGVtcHR9IGZhaWxlZCBhZnRlciAke2VsYXBzZWR9bXM6ICR7ZXJyb3J9YCxcbiAgICAgICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIE9uIGZpbmFsIGF0dGVtcHQsIG1hcmsgYXMgZmFpbGVkXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRlbXB0ID09PSBNQVhfUkVDT05ORUNUX0FUVEVNUFRTKSB7XG4gICAgICAgICAgICAgICAgICAgICAgbG9nTUNQRGVidWcoXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGBNYXggcmVjb25uZWN0aW9uIGF0dGVtcHRzICgke01BWF9SRUNPTk5FQ1RfQVRURU1QVFN9KSByZWFjaGVkLCBnaXZpbmcgdXBgLFxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICByZWNvbm5lY3RUaW1lcnNSZWYuY3VycmVudC5kZWxldGUoY2xpZW50Lm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgdXBkYXRlU2VydmVyKHsgLi4uY2xpZW50LCB0eXBlOiAnZmFpbGVkJyB9KVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC8vIFNjaGVkdWxlIG5leHQgcmV0cnkgd2l0aCBleHBvbmVudGlhbCBiYWNrb2ZmXG4gICAgICAgICAgICAgICAgICBjb25zdCBiYWNrb2ZmTXMgPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgICAgICAgSU5JVElBTF9CQUNLT0ZGX01TICogTWF0aC5wb3coMiwgYXR0ZW1wdCAtIDEpLFxuICAgICAgICAgICAgICAgICAgICBNQVhfQkFDS09GRl9NUyxcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGxvZ01DUERlYnVnKFxuICAgICAgICAgICAgICAgICAgICBjbGllbnQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgYFNjaGVkdWxpbmcgcmVjb25uZWN0aW9uIGF0dGVtcHQgJHthdHRlbXB0ICsgMX0gaW4gJHtiYWNrb2ZmTXN9bXNgLFxuICAgICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4IC0tIHRpbWVyIHN0b3JlZCBpbiByZWYgZm9yIGNhbmNlbGxhdGlvbjsgc2xlZXAoKSBkb2Vzbid0IGV4cG9zZSB0aGUgaGFuZGxlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dChyZXNvbHZlLCBiYWNrb2ZmTXMpXG4gICAgICAgICAgICAgICAgICAgIHJlY29ubmVjdFRpbWVyc1JlZi5jdXJyZW50LnNldChjbGllbnQubmFtZSwgdGltZXIpXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHZvaWQgcmVjb25uZWN0V2l0aEJhY2tvZmYoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdXBkYXRlU2VydmVyKHsgLi4uY2xpZW50LCB0eXBlOiAnZmFpbGVkJyB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENoYW5uZWwgcHVzaDogbm90aWZpY2F0aW9ucy9jbGF1ZGUvY2hhbm5lbCBcdTIxOTIgZW5xdWV1ZSgpLlxuICAgICAgICAgIC8vIEdhdGUgZGVjaWRlcyB3aGV0aGVyIHRvIHJlZ2lzdGVyIHRoZSBoYW5kbGVyOyBjb25uZWN0aW9uIHN0YXlzXG4gICAgICAgICAgLy8gdXAgZWl0aGVyIHdheSAoYWxsb3dlZE1jcFNlcnZlcnMgY29udHJvbHMgdGhhdCkuXG4gICAgICAgICAgaWYgKGZlYXR1cmUoJ0tBSVJPUycpIHx8IGZlYXR1cmUoJ0tBSVJPU19DSEFOTkVMUycpKSB7XG4gICAgICAgICAgICBjb25zdCBnYXRlID0gZ2F0ZUNoYW5uZWxTZXJ2ZXIoXG4gICAgICAgICAgICAgIGNsaWVudC5uYW1lLFxuICAgICAgICAgICAgICBjbGllbnQuY2FwYWJpbGl0aWVzLFxuICAgICAgICAgICAgICBjbGllbnQuY29uZmlnLnBsdWdpblNvdXJjZSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0gZmluZENoYW5uZWxFbnRyeShjbGllbnQubmFtZSwgZ2V0QWxsb3dlZENoYW5uZWxzKCkpXG4gICAgICAgICAgICAvLyBQbHVnaW4gaWRlbnRpZmllciBmb3IgdGVsZW1ldHJ5IFx1MjAxNCBsb2cgbmFtZUBtYXJrZXRwbGFjZSBmb3IgYW55XG4gICAgICAgICAgICAvLyBwbHVnaW4ta2luZCBlbnRyeSAoc2FtZSB0aWVyIGFzIHRlbmd1X3BsdWdpbl9pbnN0YWxsZWQsIHdoaWNoXG4gICAgICAgICAgICAvLyBsb2dzIGFyYml0cmFyeSBwbHVnaW5faWQrbWFya2V0cGxhY2VfbmFtZSB1bmdhdGVkKS4gc2VydmVyLWtpbmRcbiAgICAgICAgICAgIC8vIG5hbWVzIGFyZSBNQ1Atc2VydmVyLW5hbWUgdGllcjsgdGhvc2UgYXJlIG9wdC1pbi1vbmx5IGVsc2V3aGVyZVxuICAgICAgICAgICAgLy8gKHNlZSBpc0FuYWx5dGljc1Rvb2xEZXRhaWxzTG9nZ2luZ0VuYWJsZWQgaW4gbWV0YWRhdGEudHMpIGFuZFxuICAgICAgICAgICAgLy8gc3RheSB1bmxvZ2dlZCBoZXJlLiBpc19kZXYvZW50cnlfa2luZCBzZWdtZW50IHRoZSByZXN0LlxuICAgICAgICAgICAgY29uc3QgcGx1Z2luSWQgPVxuICAgICAgICAgICAgICBlbnRyeT8ua2luZCA9PT0gJ3BsdWdpbidcbiAgICAgICAgICAgICAgICA/IChgJHtlbnRyeS5uYW1lfUAke2VudHJ5Lm1hcmtldHBsYWNlfWAgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUylcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgLy8gU2tpcCBjYXBhYmlsaXR5LW1pc3MgXHUyMDE0IGV2ZXJ5IG5vbi1jaGFubmVsIE1DUCBzZXJ2ZXIgdHJpcHMgaXQuXG4gICAgICAgICAgICBpZiAoZ2F0ZS5hY3Rpb24gPT09ICdyZWdpc3RlcicgfHwgZ2F0ZS5raW5kICE9PSAnY2FwYWJpbGl0eScpIHtcbiAgICAgICAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X21jcF9jaGFubmVsX2dhdGUnLCB7XG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJlZDogZ2F0ZS5hY3Rpb24gPT09ICdyZWdpc3RlcicsXG4gICAgICAgICAgICAgICAgc2tpcF9raW5kOlxuICAgICAgICAgICAgICAgICAgZ2F0ZS5hY3Rpb24gPT09ICdza2lwJ1xuICAgICAgICAgICAgICAgICAgICA/IChnYXRlLmtpbmQgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUylcbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgZW50cnlfa2luZDpcbiAgICAgICAgICAgICAgICAgIGVudHJ5Py5raW5kIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgICAgICAgICAgaXNfZGV2OiBlbnRyeT8uZGV2ID8/IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBsdWdpbjogcGx1Z2luSWQsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2ggKGdhdGUuYWN0aW9uKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ3JlZ2lzdGVyJzpcbiAgICAgICAgICAgICAgICBsb2dNQ1BEZWJ1ZyhjbGllbnQubmFtZSwgJ0NoYW5uZWwgbm90aWZpY2F0aW9ucyByZWdpc3RlcmVkJylcbiAgICAgICAgICAgICAgICBjbGllbnQuY2xpZW50LnNldE5vdGlmaWNhdGlvbkhhbmRsZXIoXG4gICAgICAgICAgICAgICAgICBDaGFubmVsTWVzc2FnZU5vdGlmaWNhdGlvblNjaGVtYSgpLFxuICAgICAgICAgICAgICAgICAgYXN5bmMgbm90aWZpY2F0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBjb250ZW50LCBtZXRhIH0gPSBub3RpZmljYXRpb24ucGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIGxvZ01DUERlYnVnKFxuICAgICAgICAgICAgICAgICAgICAgIGNsaWVudC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGBub3RpZmljYXRpb25zL2NsYXVkZS9jaGFubmVsOiAke2NvbnRlbnQuc2xpY2UoMCwgODApfWAsXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X21jcF9jaGFubmVsX21lc3NhZ2UnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudF9sZW5ndGg6IGNvbnRlbnQubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgIG1ldGFfa2V5X2NvdW50OiBPYmplY3Qua2V5cyhtZXRhID8/IHt9KS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgZW50cnlfa2luZDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5Py5raW5kIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgICAgICAgICAgICAgICAgaXNfZGV2OiBlbnRyeT8uZGV2ID8/IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbjogcGx1Z2luSWQsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIGVucXVldWUoe1xuICAgICAgICAgICAgICAgICAgICAgIG1vZGU6ICdwcm9tcHQnLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB3cmFwQ2hhbm5lbE1lc3NhZ2UoY2xpZW50Lm5hbWUsIGNvbnRlbnQsIG1ldGEpLFxuICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiAnbmV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgaXNNZXRhOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbjogeyBraW5kOiAnY2hhbm5lbCcsIHNlcnZlcjogY2xpZW50Lm5hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICBza2lwU2xhc2hDb21tYW5kczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC8vIFBlcm1pc3Npb24tcmVwbHkgaGFuZGxlciBcdTIwMTQgc2VwYXJhdGUgZXZlbnQsIHNlcGFyYXRlXG4gICAgICAgICAgICAgICAgLy8gY2FwYWJpbGl0eS4gT25seSByZWdpc3RlcnMgaWYgdGhlIHNlcnZlciBkZWNsYXJlc1xuICAgICAgICAgICAgICAgIC8vIGNsYXVkZS9jaGFubmVsL3Blcm1pc3Npb24gKHNhbWUgb3B0LWluIGNoZWNrIGFzIHRoZSBzZW5kXG4gICAgICAgICAgICAgICAgLy8gcGF0aCBpbiBpbnRlcmFjdGl2ZUhhbmRsZXIudHMpLiBTZXJ2ZXIgcGFyc2VzIHRoZSB1c2VyJ3NcbiAgICAgICAgICAgICAgICAvLyByZXBseSBhbmQgZW1pdHMge3JlcXVlc3RfaWQsIGJlaGF2aW9yfTsgbm8gcmVnZXggb24gb3VyXG4gICAgICAgICAgICAgICAgLy8gc2lkZSwgdGV4dCBpbiB0aGUgZ2VuZXJhbCBjaGFubmVsIGNhbid0IGFjY2lkZW50YWxseSBtYXRjaC5cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBjbGllbnQuY2FwYWJpbGl0aWVzPy5leHBlcmltZW50YWw/LltcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXVkZS9jaGFubmVsL3Blcm1pc3Npb24nXG4gICAgICAgICAgICAgICAgICBdICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIGNsaWVudC5jbGllbnQuc2V0Tm90aWZpY2F0aW9uSGFuZGxlcihcbiAgICAgICAgICAgICAgICAgICAgQ2hhbm5lbFBlcm1pc3Npb25Ob3RpZmljYXRpb25TY2hlbWEoKSxcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMgbm90aWZpY2F0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHJlcXVlc3RfaWQsIGJlaGF2aW9yIH0gPSBub3RpZmljYXRpb24ucGFyYW1zXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbFBlcm1DYWxsYmFja3NSZWYuY3VycmVudD8ucmVzb2x2ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgKSA/PyBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgIGxvZ01DUERlYnVnKFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBgbm90aWZpY2F0aW9ucy9jbGF1ZGUvY2hhbm5lbC9wZXJtaXNzaW9uOiAke3JlcXVlc3RfaWR9IFx1MjE5MiAke2JlaGF2aW9yfSAoJHtyZXNvbHZlZCA/ICdtYXRjaGVkIHBlbmRpbmcnIDogJ25vIHBlbmRpbmcgZW50cnkgXHUyMDE0IHN0YWxlIG9yIHVua25vd24gSUQnfSlgLFxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAnc2tpcCc6XG4gICAgICAgICAgICAgICAgLy8gSWRlbXBvdGVudCB0ZWFyZG93biBzbyBhIHJlZ2lzdGVyXHUyMTkyc2tpcCByZS1nYXRlIChlLmcuXG4gICAgICAgICAgICAgICAgLy8gZWZmZWN0IHJlLXJ1bnMgYWZ0ZXIgL2xvZ291dCkgYWN0dWFsbHkgcmVtb3ZlcyB0aGUgbGl2ZVxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZXIuIFdpdGhvdXQgdGhpcywgbWlkLXNlc3Npb24gZGVtb3Rpb24gaXMgb25lLXdheTpcbiAgICAgICAgICAgICAgICAvLyB0aGUgZ2F0ZSBzYXlzIHNraXAgYnV0IHRoZSBlYXJsaWVyIGhhbmRsZXIga2VlcHMgZW5xdWV1aW5nLlxuICAgICAgICAgICAgICAgIC8vIE1hcC5kZWxldGUgXHUyMDE0IHNhZmUgd2hlbiBuZXZlciByZWdpc3RlcmVkLlxuICAgICAgICAgICAgICAgIGNsaWVudC5jbGllbnQucmVtb3ZlTm90aWZpY2F0aW9uSGFuZGxlcihcbiAgICAgICAgICAgICAgICAgICdub3RpZmljYXRpb25zL2NsYXVkZS9jaGFubmVsJyxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgY2xpZW50LmNsaWVudC5yZW1vdmVOb3RpZmljYXRpb25IYW5kbGVyKFxuICAgICAgICAgICAgICAgICAgQ0hBTk5FTF9QRVJNSVNTSU9OX01FVEhPRCxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgbG9nTUNQRGVidWcoXG4gICAgICAgICAgICAgICAgICBjbGllbnQubmFtZSxcbiAgICAgICAgICAgICAgICAgIGBDaGFubmVsIG5vdGlmaWNhdGlvbnMgc2tpcHBlZDogJHtnYXRlLnJlYXNvbn1gLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAvLyBTdXJmYWNlIGEgb25jZS1wZXIta2luZCB0b2FzdCB3aGVuIGEgY2hhbm5lbCBzZXJ2ZXIgaXNcbiAgICAgICAgICAgICAgICAvLyBibG9ja2VkLiBUaGlzIGlzIHRoZSBvbmx5XG4gICAgICAgICAgICAgICAgLy8gdXNlci12aXNpYmxlIHNpZ25hbCAobG9nTUNQRGVidWcgYWJvdmUgcmVxdWlyZXMgLS1kZWJ1ZykuXG4gICAgICAgICAgICAgICAgLy8gQ2FwYWJpbGl0eS9zZXNzaW9uIHNraXBzIGFyZSBleHBlY3RlZCBub2lzZSBhbmQgc3RheVxuICAgICAgICAgICAgICAgIC8vIGRlYnVnLW9ubHkuIG1hcmtldHBsYWNlL2FsbG93bGlzdCBydW4gYWZ0ZXIgc2Vzc2lvbiBcdTIwMTQgaWZcbiAgICAgICAgICAgICAgICAvLyB3ZSdyZSBoZXJlIHdpdGggdGhvc2Uga2luZHMsIHRoZSB1c2VyIGFza2VkIGZvciBpdC5cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBnYXRlLmtpbmQgIT09ICdjYXBhYmlsaXR5JyAmJlxuICAgICAgICAgICAgICAgICAgZ2F0ZS5raW5kICE9PSAnc2Vzc2lvbicgJiZcbiAgICAgICAgICAgICAgICAgICFjaGFubmVsV2FybmVkS2luZHNSZWYuY3VycmVudC5oYXMoZ2F0ZS5raW5kKSAmJlxuICAgICAgICAgICAgICAgICAgKGdhdGUua2luZCA9PT0gJ21hcmtldHBsYWNlJyB8fFxuICAgICAgICAgICAgICAgICAgICBnYXRlLmtpbmQgPT09ICdhbGxvd2xpc3QnIHx8XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICBjaGFubmVsV2FybmVkS2luZHNSZWYuY3VycmVudC5hZGQoZ2F0ZS5raW5kKVxuICAgICAgICAgICAgICAgICAgLy8gZGlzYWJsZWQvYXV0aC9wb2xpY3kgZ2V0IGN1c3RvbSB0b2FzdCBjb3B5IChzaG9ydGVyLCBhY3Rpb25hYmxlKTtcbiAgICAgICAgICAgICAgICAgIC8vIG1hcmtldHBsYWNlL2FsbG93bGlzdCByZXVzZSB0aGUgZ2F0ZSdzIHJlYXNvbiB2ZXJiYXRpbVxuICAgICAgICAgICAgICAgICAgLy8gc2luY2UgaXQgYWxyZWFkeSBuYW1lcyB0aGUgbWlzbWF0Y2guXG4gICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID1cbiAgICAgICAgICAgICAgICAgICAgZ2F0ZS5raW5kID09PSAnZGlzYWJsZWQnXG4gICAgICAgICAgICAgICAgICAgICAgPyAnQ2hhbm5lbHMgYXJlIG5vdCBjdXJyZW50bHkgYXZhaWxhYmxlJ1xuICAgICAgICAgICAgICAgICAgICAgIDogZ2F0ZS5raW5kID09PSAnYXV0aCdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ0NoYW5uZWxzIHJlcXVpcmUgY2xhdWRlLmFpIGF1dGhlbnRpY2F0aW9uIFx1MDBCNyBydW4gL2xvZ2luJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiBnYXRlLmtpbmQgPT09ICdwb2xpY3knXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJ0NoYW5uZWxzIGFyZSBub3QgZW5hYmxlZCBmb3IgeW91ciBvcmcgXHUwMEI3IGhhdmUgYW4gYWRtaW5pc3RyYXRvciBzZXQgY2hhbm5lbHNFbmFibGVkOiB0cnVlIGluIG1hbmFnZWQgc2V0dGluZ3MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogZ2F0ZS5yZWFzb25cbiAgICAgICAgICAgICAgICAgIGFkZE5vdGlmaWNhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIGtleTogYGNoYW5uZWxzLWJsb2NrZWQtJHtnYXRlLmtpbmR9YCxcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3YXJuaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dE1zOiAxMjAwMCxcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUmVnaXN0ZXIgbm90aWZpY2F0aW9uIGhhbmRsZXJzIGZvciBsaXN0X2NoYW5nZWQgbm90aWZpY2F0aW9uc1xuICAgICAgICAgIC8vIFRoZXNlIGFsbG93IHRoZSBzZXJ2ZXIgdG8gbm90aWZ5IHVzIHdoZW4gdG9vbHMsIHByb21wdHMsIG9yIHJlc291cmNlcyBjaGFuZ2VcbiAgICAgICAgICBpZiAoY2xpZW50LmNhcGFiaWxpdGllcz8udG9vbHM/Lmxpc3RDaGFuZ2VkKSB7XG4gICAgICAgICAgICBjbGllbnQuY2xpZW50LnNldE5vdGlmaWNhdGlvbkhhbmRsZXIoXG4gICAgICAgICAgICAgIFRvb2xMaXN0Q2hhbmdlZE5vdGlmaWNhdGlvblNjaGVtYSxcbiAgICAgICAgICAgICAgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxvZ01DUERlYnVnKFxuICAgICAgICAgICAgICAgICAgY2xpZW50Lm5hbWUsXG4gICAgICAgICAgICAgICAgICBgUmVjZWl2ZWQgdG9vbHMvbGlzdF9jaGFuZ2VkIG5vdGlmaWNhdGlvbiwgcmVmcmVzaGluZyB0b29sc2AsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAvLyBHcmFiIGNhY2hlZCBwcm9taXNlIGJlZm9yZSBpbnZhbGlkYXRpbmcgdG8gbG9nIHByZXZpb3VzIGNvdW50XG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c1Rvb2xzUHJvbWlzZSA9IGZldGNoVG9vbHNGb3JDbGllbnQuY2FjaGUuZ2V0KFxuICAgICAgICAgICAgICAgICAgICBjbGllbnQubmFtZSxcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGZldGNoVG9vbHNGb3JDbGllbnQuY2FjaGUuZGVsZXRlKGNsaWVudC5uYW1lKVxuICAgICAgICAgICAgICAgICAgY29uc3QgbmV3VG9vbHMgPSBhd2FpdCBmZXRjaFRvb2xzRm9yQ2xpZW50KGNsaWVudClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NvdW50ID0gbmV3VG9vbHMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNUb29sc1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNUb29sc1Byb21pc2UudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAocHJldmlvdXNUb29sczogVG9vbFtdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dFdmVudCgndGVuZ3VfbWNwX2xpc3RfY2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Rvb2xzJyBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0NvdW50OiBwcmV2aW91c1Rvb2xzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X21jcF9saXN0X2NoYW5nZWQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0b29scycgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9tY3BfbGlzdF9jaGFuZ2VkJywge1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0b29scycgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgICAgICAgICAgICAgICBuZXdDb3VudCxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHVwZGF0ZVNlcnZlcih7IC4uLmNsaWVudCwgdG9vbHM6IG5ld1Rvb2xzIH0pXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgIGxvZ01DUEVycm9yKFxuICAgICAgICAgICAgICAgICAgICBjbGllbnQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgYEZhaWxlZCB0byByZWZyZXNoIHRvb2xzIGFmdGVyIGxpc3RfY2hhbmdlZCBub3RpZmljYXRpb246ICR7ZXJyb3JNZXNzYWdlKGVycm9yKX1gLFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY2xpZW50LmNhcGFiaWxpdGllcz8ucHJvbXB0cz8ubGlzdENoYW5nZWQpIHtcbiAgICAgICAgICAgIGNsaWVudC5jbGllbnQuc2V0Tm90aWZpY2F0aW9uSGFuZGxlcihcbiAgICAgICAgICAgICAgUHJvbXB0TGlzdENoYW5nZWROb3RpZmljYXRpb25TY2hlbWEsXG4gICAgICAgICAgICAgIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBsb2dNQ1BEZWJ1ZyhcbiAgICAgICAgICAgICAgICAgIGNsaWVudC5uYW1lLFxuICAgICAgICAgICAgICAgICAgYFJlY2VpdmVkIHByb21wdHMvbGlzdF9jaGFuZ2VkIG5vdGlmaWNhdGlvbiwgcmVmcmVzaGluZyBwcm9tcHRzYCxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X21jcF9saXN0X2NoYW5nZWQnLCB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAncHJvbXB0cycgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAvLyBTa2lsbHMgY29tZSBmcm9tIHJlc291cmNlcywgbm90IHByb21wdHMgXHUyMDE0IGRvbid0IGludmFsaWRhdGUgdGhlaXJcbiAgICAgICAgICAgICAgICAgIC8vIGNhY2hlIGhlcmUuIGZldGNoTWNwU2tpbGxzRm9yQ2xpZW50IHJldHVybnMgdGhlIGNhY2hlZCByZXN1bHQuXG4gICAgICAgICAgICAgICAgICBmZXRjaENvbW1hbmRzRm9yQ2xpZW50LmNhY2hlLmRlbGV0ZShjbGllbnQubmFtZSlcbiAgICAgICAgICAgICAgICAgIGNvbnN0IFttY3BQcm9tcHRzLCBtY3BTa2lsbHNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICBmZXRjaENvbW1hbmRzRm9yQ2xpZW50KGNsaWVudCksXG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmUoJ01DUF9TS0lMTFMnKVxuICAgICAgICAgICAgICAgICAgICAgID8gZmV0Y2hNY3BTa2lsbHNGb3JDbGllbnQhKGNsaWVudClcbiAgICAgICAgICAgICAgICAgICAgICA6IFByb21pc2UucmVzb2x2ZShbXSksXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgdXBkYXRlU2VydmVyKHtcbiAgICAgICAgICAgICAgICAgICAgLi4uY2xpZW50LFxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kczogWy4uLm1jcFByb21wdHMsIC4uLm1jcFNraWxsc10sXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLy8gTUNQIHNraWxscyBjaGFuZ2VkIFx1MjAxNCBpbnZhbGlkYXRlIHNraWxsLXNlYXJjaCBpbmRleCBzb1xuICAgICAgICAgICAgICAgICAgLy8gbmV4dCBkaXNjb3ZlcnkgcmVidWlsZHMgd2l0aCB0aGUgbmV3IHNldC5cbiAgICAgICAgICAgICAgICAgIGNsZWFyU2tpbGxJbmRleENhY2hlPy4oKVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICBsb2dNQ1BFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGBGYWlsZWQgdG8gcmVmcmVzaCBwcm9tcHRzIGFmdGVyIGxpc3RfY2hhbmdlZCBub3RpZmljYXRpb246ICR7ZXJyb3JNZXNzYWdlKGVycm9yKX1gLFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY2xpZW50LmNhcGFiaWxpdGllcz8ucmVzb3VyY2VzPy5saXN0Q2hhbmdlZCkge1xuICAgICAgICAgICAgY2xpZW50LmNsaWVudC5zZXROb3RpZmljYXRpb25IYW5kbGVyKFxuICAgICAgICAgICAgICBSZXNvdXJjZUxpc3RDaGFuZ2VkTm90aWZpY2F0aW9uU2NoZW1hLFxuICAgICAgICAgICAgICBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbG9nTUNQRGVidWcoXG4gICAgICAgICAgICAgICAgICBjbGllbnQubmFtZSxcbiAgICAgICAgICAgICAgICAgIGBSZWNlaXZlZCByZXNvdXJjZXMvbGlzdF9jaGFuZ2VkIG5vdGlmaWNhdGlvbiwgcmVmcmVzaGluZyByZXNvdXJjZXNgLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBsb2dFdmVudCgndGVuZ3VfbWNwX2xpc3RfY2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdyZXNvdXJjZXMnIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgZmV0Y2hSZXNvdXJjZXNGb3JDbGllbnQuY2FjaGUuZGVsZXRlKGNsaWVudC5uYW1lKVxuICAgICAgICAgICAgICAgICAgaWYgKGZlYXR1cmUoJ01DUF9TS0lMTFMnKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lsbHMgYXJlIGRpc2NvdmVyZWQgZnJvbSByZXNvdXJjZXMsIHNvIHJlZnJlc2ggdGhlbSB0b28uXG4gICAgICAgICAgICAgICAgICAgIC8vIEludmFsaWRhdGUgcHJvbXB0cyBjYWNoZSBhcyB3ZWxsOiB3ZSB3cml0ZSBjb21tYW5kcyBoZXJlLFxuICAgICAgICAgICAgICAgICAgICAvLyBhbmQgYSBjb25jdXJyZW50IHByb21wdHMvbGlzdF9jaGFuZ2VkIGNvdWxkIG90aGVyd2lzZSBoYXZlXG4gICAgICAgICAgICAgICAgICAgIC8vIHVzIHN0b21wIGl0cyBmcmVzaCByZXN1bHQgd2l0aCBvdXIgY2FjaGVkIHN0YWxlIG9uZS5cbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hNY3BTa2lsbHNGb3JDbGllbnQhLmNhY2hlLmRlbGV0ZShjbGllbnQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hDb21tYW5kc0ZvckNsaWVudC5jYWNoZS5kZWxldGUoY2xpZW50Lm5hbWUpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFtuZXdSZXNvdXJjZXMsIG1jcFByb21wdHMsIG1jcFNraWxsc10gPVxuICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoUmVzb3VyY2VzRm9yQ2xpZW50KGNsaWVudCksXG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaENvbW1hbmRzRm9yQ2xpZW50KGNsaWVudCksXG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaE1jcFNraWxsc0ZvckNsaWVudCEoY2xpZW50KSxcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVTZXJ2ZXIoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmNsaWVudCxcbiAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZXM6IG5ld1Jlc291cmNlcyxcbiAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kczogWy4uLm1jcFByb21wdHMsIC4uLm1jcFNraWxsc10sXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC8vIE1DUCBza2lsbHMgY2hhbmdlZCBcdTIwMTQgaW52YWxpZGF0ZSBza2lsbC1zZWFyY2ggaW5kZXggc29cbiAgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBkaXNjb3ZlcnkgcmVidWlsZHMgd2l0aCB0aGUgbmV3IHNldC5cbiAgICAgICAgICAgICAgICAgICAgY2xlYXJTa2lsbEluZGV4Q2FjaGU/LigpXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdSZXNvdXJjZXMgPSBhd2FpdCBmZXRjaFJlc291cmNlc0ZvckNsaWVudChjbGllbnQpXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVNlcnZlcih7IC4uLmNsaWVudCwgcmVzb3VyY2VzOiBuZXdSZXNvdXJjZXMgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgbG9nTUNQRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBgRmFpbGVkIHRvIHJlZnJlc2ggcmVzb3VyY2VzIGFmdGVyIGxpc3RfY2hhbmdlZCBub3RpZmljYXRpb246ICR7ZXJyb3JNZXNzYWdlKGVycm9yKX1gLFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ25lZWRzLWF1dGgnOlxuICAgICAgICBjYXNlICdmYWlsZWQnOlxuICAgICAgICBjYXNlICdwZW5kaW5nJzpcbiAgICAgICAgY2FzZSAnZGlzYWJsZWQnOlxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfSxcbiAgICBbdXBkYXRlU2VydmVyXSxcbiAgKVxuXG4gIC8vIEluaXRpYWxpemUgYWxsIHNlcnZlcnMgdG8gcGVuZGluZyBzdGF0ZSBpZiB0aGV5IGRvbid0IGV4aXN0IGluIGFwcFN0YXRlLlxuICAvLyBSZS1ydW5zIG9uIHNlc3Npb24gY2hhbmdlICgvY2xlYXIpIGFuZCBvbiAvcmVsb2FkLXBsdWdpbnMgKHBsdWdpblJlY29ubmVjdEtleSkuXG4gIC8vIE9uIHBsdWdpbiByZWxvYWQsIGFsc28gZGlzY29ubmVjdHMgc3RhbGUgcGx1Z2luIE1DUCBzZXJ2ZXJzIChzY29wZSAnZHluYW1pYycpXG4gIC8vIHRoYXQgbm8gbG9uZ2VyIGFwcGVhciBpbiBjb25maWdzIFx1MjAxNCBwcmV2ZW50cyBnaG9zdCB0b29scyBmcm9tIGRpc2FibGVkIHBsdWdpbnMuXG4gIC8vIFNraXAgY2xhdWRlLmFpIGRlZHVwIGhlcmUgdG8gYXZvaWQgYmxvY2tpbmcgb24gdGhlIG5ldHdvcmsgZmV0Y2g7IHRoZSBjb25uZWN0XG4gIC8vIHVzZUVmZmVjdCBiZWxvdyBydW5zIGltbWVkaWF0ZWx5IGFmdGVyIGFuZCBkZWR1cHMgYmVmb3JlIGNvbm5lY3RpbmcuXG4gIGNvbnN0IHNlc3Npb25JZCA9IGdldFNlc3Npb25JZCgpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZVNlcnZlcnNBc1BlbmRpbmcoKSB7XG4gICAgICBjb25zdCB7IHNlcnZlcnM6IGV4aXN0aW5nQ29uZmlncywgZXJyb3JzOiBtY3BFcnJvcnMgfSA9IGlzU3RyaWN0TWNwQ29uZmlnXG4gICAgICAgID8geyBzZXJ2ZXJzOiB7fSwgZXJyb3JzOiBbXSB9XG4gICAgICAgIDogYXdhaXQgZ2V0Q2xhdWRlQ29kZU1jcENvbmZpZ3MoZHluYW1pY01jcENvbmZpZylcbiAgICAgIGNvbnN0IGNvbmZpZ3MgPSB7IC4uLmV4aXN0aW5nQ29uZmlncywgLi4uZHluYW1pY01jcENvbmZpZyB9XG5cbiAgICAgIC8vIEFkZCBNQ1AgZXJyb3JzIHRvIHBsdWdpbiBlcnJvcnMgZm9yIFVJIHZpc2liaWxpdHkgKGRlZHVwbGljYXRlZClcbiAgICAgIGFkZEVycm9yc1RvQXBwU3RhdGUoc2V0QXBwU3RhdGUsIG1jcEVycm9ycylcblxuICAgICAgc2V0QXBwU3RhdGUocHJldlN0YXRlID0+IHtcbiAgICAgICAgLy8gRGlzY29ubmVjdCBNQ1Agc2VydmVycyB0aGF0IGFyZSBzdGFsZTogcGx1Z2luIHNlcnZlcnMgcmVtb3ZlZCBmcm9tXG4gICAgICAgIC8vIGNvbmZpZywgb3IgYW55IHNlcnZlciB3aG9zZSBjb25maWcgaGFzaCBjaGFuZ2VkIChlZGl0ZWQgLm1jcC5qc29uKS5cbiAgICAgICAgLy8gU3RhbGUgc2VydmVycyBnZXQgcmUtYWRkZWQgYXMgJ3BlbmRpbmcnIGJlbG93IHNpbmNlIHRoZWlyIG5hbWUgaXNcbiAgICAgICAgLy8gbm93IGFic2VudCBmcm9tIG1jcFdpdGhvdXRTdGFsZS5jbGllbnRzLlxuICAgICAgICBjb25zdCB7IHN0YWxlLCAuLi5tY3BXaXRob3V0U3RhbGUgfSA9IGV4Y2x1ZGVTdGFsZVBsdWdpbkNsaWVudHMoXG4gICAgICAgICAgcHJldlN0YXRlLm1jcCxcbiAgICAgICAgICBjb25maWdzLFxuICAgICAgICApXG4gICAgICAgIC8vIENsZWFuIHVwIHN0YWxlIGNvbm5lY3Rpb25zLiBGaXJlLWFuZC1mb3JnZXQgXHUyMDE0IHN0YXRlIHVwZGF0ZXJzIG11c3RcbiAgICAgICAgLy8gYmUgc3luY2hyb25vdXMuIFRocmVlIGhhemFyZHMgdG8gZGVmdXNlIGJlZm9yZSBjYWxsaW5nIGNsZWFudXA6XG4gICAgICAgIC8vICAgMS4gUGVuZGluZyByZWNvbm5lY3QgdGltZXIgd291bGQgZmlyZSB3aXRoIHRoZSBPTEQgY29uZmlnLlxuICAgICAgICAvLyAgIDIuIG9uY2xvc2UgKHNldCBhdCBMMjU0KSBzdGFydHMgcmVjb25uZWN0V2l0aEJhY2tvZmYgd2l0aCB0aGVcbiAgICAgICAgLy8gICAgICBPTEQgY29uZmlnIGZyb20gaXRzIGNsb3N1cmUgXHUyMDE0IGl0IGNoZWNrcyBpc01jcFNlcnZlckRpc2FibGVkXG4gICAgICAgIC8vICAgICAgYnV0IGNvbmZpZy1jaGFuZ2VkIHNlcnZlcnMgYXJlbid0IGRpc2FibGVkLCBzbyBpdCdkIHJhY2UgdGhlXG4gICAgICAgIC8vICAgICAgZnJlc2ggY29ubmVjdGlvbiBhbmQgbGFzdCB1cGRhdGVTZXJ2ZXIgd2lucy5cbiAgICAgICAgLy8gICAzLiBjbGVhclNlcnZlckNhY2hlIGludGVybmFsbHkgY2FsbHMgY29ubmVjdFRvU2VydmVyIChtZW1vaXplZCkuXG4gICAgICAgIC8vICAgICAgRm9yIG5ldmVyLWNvbm5lY3RlZCBzZXJ2ZXJzIChkaXNhYmxlZC9wZW5kaW5nL2ZhaWxlZCkgdGhlXG4gICAgICAgIC8vICAgICAgY2FjaGUgaXMgZW1wdHkgXHUyMTkyIHJlYWwgY29ubmVjdCBhdHRlbXB0IFx1MjE5MiBzcGF3bi9PQXV0aCBqdXN0IHRvXG4gICAgICAgIC8vICAgICAgaW1tZWRpYXRlbHkga2lsbCBpdC4gT25seSBjb25uZWN0ZWQgc2VydmVycyBuZWVkIGNsZWFudXAuXG4gICAgICAgIGZvciAoY29uc3QgcyBvZiBzdGFsZSkge1xuICAgICAgICAgIGNvbnN0IHRpbWVyID0gcmVjb25uZWN0VGltZXJzUmVmLmN1cnJlbnQuZ2V0KHMubmFtZSlcbiAgICAgICAgICBpZiAodGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgICAgICAgIHJlY29ubmVjdFRpbWVyc1JlZi5jdXJyZW50LmRlbGV0ZShzLm5hbWUpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzLnR5cGUgPT09ICdjb25uZWN0ZWQnKSB7XG4gICAgICAgICAgICBzLmNsaWVudC5vbmNsb3NlID0gdW5kZWZpbmVkXG4gICAgICAgICAgICB2b2lkIGNsZWFyU2VydmVyQ2FjaGUocy5uYW1lLCBzLmNvbmZpZykuY2F0Y2goKCkgPT4ge30pXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmdTZXJ2ZXJOYW1lcyA9IG5ldyBTZXQoXG4gICAgICAgICAgbWNwV2l0aG91dFN0YWxlLmNsaWVudHMubWFwKGMgPT4gYy5uYW1lKSxcbiAgICAgICAgKVxuICAgICAgICBjb25zdCBuZXdDbGllbnRzID0gT2JqZWN0LmVudHJpZXMoY29uZmlncylcbiAgICAgICAgICAuZmlsdGVyKChbbmFtZV0pID0+ICFleGlzdGluZ1NlcnZlck5hbWVzLmhhcyhuYW1lKSlcbiAgICAgICAgICAubWFwKChbbmFtZSwgY29uZmlnXSkgPT4gKHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB0eXBlOiBpc01jcFNlcnZlckRpc2FibGVkKG5hbWUpXG4gICAgICAgICAgICAgID8gKCdkaXNhYmxlZCcgYXMgY29uc3QpXG4gICAgICAgICAgICAgIDogKCdwZW5kaW5nJyBhcyBjb25zdCksXG4gICAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgfSkpXG5cbiAgICAgICAgaWYgKG5ld0NsaWVudHMubGVuZ3RoID09PSAwICYmIHN0YWxlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBwcmV2U3RhdGVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgIG1jcDoge1xuICAgICAgICAgICAgLi4ucHJldlN0YXRlLm1jcCxcbiAgICAgICAgICAgIC4uLm1jcFdpdGhvdXRTdGFsZSxcbiAgICAgICAgICAgIGNsaWVudHM6IFsuLi5tY3BXaXRob3V0U3RhbGUuY2xpZW50cywgLi4ubmV3Q2xpZW50c10sXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB2b2lkIGluaXRpYWxpemVTZXJ2ZXJzQXNQZW5kaW5nKCkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgbG9nTUNQRXJyb3IoXG4gICAgICAgICd1c2VNYW5hZ2VNQ1BDb25uZWN0aW9ucycsXG4gICAgICAgIGBGYWlsZWQgdG8gaW5pdGlhbGl6ZSBzZXJ2ZXJzIGFzIHBlbmRpbmc6ICR7ZXJyb3JNZXNzYWdlKGVycm9yKX1gLFxuICAgICAgKVxuICAgIH0pXG4gIH0sIFtcbiAgICBpc1N0cmljdE1jcENvbmZpZyxcbiAgICBkeW5hbWljTWNwQ29uZmlnLFxuICAgIHNldEFwcFN0YXRlLFxuICAgIHNlc3Npb25JZCxcbiAgICBfcGx1Z2luUmVjb25uZWN0S2V5LFxuICBdKVxuXG4gIC8vIExvYWQgTUNQIGNvbmZpZ3MgYW5kIGNvbm5lY3QgdG8gc2VydmVyc1xuICAvLyBUd28tcGhhc2UgbG9hZGluZzogQ2xhdWRlIENvZGUgY29uZmlncyBmaXJzdCAoZmFzdCksIHRoZW4gY2xhdWRlLmFpIGNvbmZpZ3MgKG1heSBiZSBzbG93KVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZEFuZENvbm5lY3RNY3BDb25maWdzKCkge1xuICAgICAgLy8gQ2xlYXIgY2xhdWRlLmFpIE1DUCBjYWNoZSBzbyB3ZSBmZXRjaCBmcmVzaCBjb25maWdzIHdpdGggY3VycmVudCBhdXRoXG4gICAgICAvLyBzdGF0ZS4gVGhpcyBpcyBpbXBvcnRhbnQgd2hlbiBhdXRoVmVyc2lvbiBjaGFuZ2VzIChlLmcuLCBhZnRlciBsb2dpbi9cbiAgICAgIC8vIGxvZ291dCkuIEtpY2sgb2ZmIHRoZSBmZXRjaCBub3cgc28gaXQgb3ZlcmxhcHMgd2l0aCBsb2FkQWxsUGx1Z2lucygpXG4gICAgICAvLyBpbnNpZGUgZ2V0Q2xhdWRlQ29kZU1jcENvbmZpZ3M7IGl0J3MgYXdhaXRlZCBvbmx5IGF0IHRoZSBkZWR1cCBzdGVwLlxuICAgICAgLy8gUGhhc2UgMiBiZWxvdyBhd2FpdHMgdGhlIHNhbWUgcHJvbWlzZSBcdTIwMTQgbm8gc2Vjb25kIG5ldHdvcmsgY2FsbC5cbiAgICAgIGxldCBjbGF1ZGVhaVByb21pc2U6IFByb21pc2U8UmVjb3JkPHN0cmluZywgU2NvcGVkTWNwU2VydmVyQ29uZmlnPj5cbiAgICAgIGlmIChpc1N0cmljdE1jcENvbmZpZyB8fCBkb2VzRW50ZXJwcmlzZU1jcENvbmZpZ0V4aXN0KCkpIHtcbiAgICAgICAgY2xhdWRlYWlQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHt9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xlYXJDbGF1ZGVBSU1jcENvbmZpZ3NDYWNoZSgpXG4gICAgICAgIGNsYXVkZWFpUHJvbWlzZSA9IGZldGNoQ2xhdWRlQUlNY3BDb25maWdzSWZFbGlnaWJsZSgpXG4gICAgICB9XG5cbiAgICAgIC8vIFBoYXNlIDE6IExvYWQgQ2xhdWRlIENvZGUgY29uZmlncy4gUGx1Z2luIE1DUCBzZXJ2ZXJzIHRoYXQgZHVwbGljYXRlIGFcbiAgICAgIC8vIC0tbWNwLWNvbmZpZyBlbnRyeSBvciBhIGNsYXVkZS5haSBjb25uZWN0b3IgYXJlIHN1cHByZXNzZWQgaGVyZSBzbyB0aGV5XG4gICAgICAvLyBkb24ndCBjb25uZWN0IGFsb25nc2lkZSB0aGUgY29ubmVjdG9yIGluIFBoYXNlIDIuXG4gICAgICBjb25zdCB7IHNlcnZlcnM6IGNsYXVkZUNvZGVDb25maWdzLCBlcnJvcnM6IG1jcEVycm9ycyB9ID1cbiAgICAgICAgaXNTdHJpY3RNY3BDb25maWdcbiAgICAgICAgICA/IHsgc2VydmVyczoge30sIGVycm9yczogW10gfVxuICAgICAgICAgIDogYXdhaXQgZ2V0Q2xhdWRlQ29kZU1jcENvbmZpZ3MoZHluYW1pY01jcENvbmZpZywgY2xhdWRlYWlQcm9taXNlKVxuICAgICAgaWYgKGNhbmNlbGxlZCkgcmV0dXJuXG5cbiAgICAgIC8vIEFkZCBNQ1AgZXJyb3JzIHRvIHBsdWdpbiBlcnJvcnMgZm9yIFVJIHZpc2liaWxpdHkgKGRlZHVwbGljYXRlZClcbiAgICAgIGFkZEVycm9yc1RvQXBwU3RhdGUoc2V0QXBwU3RhdGUsIG1jcEVycm9ycylcblxuICAgICAgY29uc3QgY29uZmlncyA9IHsgLi4uY2xhdWRlQ29kZUNvbmZpZ3MsIC4uLmR5bmFtaWNNY3BDb25maWcgfVxuXG4gICAgICAvLyBTdGFydCBjb25uZWN0aW5nIHRvIENsYXVkZSBDb2RlIHNlcnZlcnMgKGRvbid0IHdhaXQgLSBydW5zIGNvbmN1cnJlbnRseSB3aXRoIFBoYXNlIDIpXG4gICAgICAvLyBGaWx0ZXIgb3V0IGRpc2FibGVkIHNlcnZlcnMgdG8gYXZvaWQgdW5uZWNlc3NhcnkgY29ubmVjdGlvbiBhdHRlbXB0c1xuICAgICAgY29uc3QgZW5hYmxlZENvbmZpZ3MgPSBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGNvbmZpZ3MpLmZpbHRlcigoW25hbWVdKSA9PiAhaXNNY3BTZXJ2ZXJEaXNhYmxlZChuYW1lKSksXG4gICAgICApXG4gICAgICBnZXRNY3BUb29sc0NvbW1hbmRzQW5kUmVzb3VyY2VzKFxuICAgICAgICBvbkNvbm5lY3Rpb25BdHRlbXB0LFxuICAgICAgICBlbmFibGVkQ29uZmlncyxcbiAgICAgICkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBsb2dNQ1BFcnJvcihcbiAgICAgICAgICAndXNlTWFuYWdlTWNwQ29ubmVjdGlvbnMnLFxuICAgICAgICAgIGBGYWlsZWQgdG8gZ2V0IE1DUCByZXNvdXJjZXM6ICR7ZXJyb3JNZXNzYWdlKGVycm9yKX1gLFxuICAgICAgICApXG4gICAgICB9KVxuXG4gICAgICAvLyBQaGFzZSAyOiBBd2FpdCBjbGF1ZGUuYWkgY29uZmlncyAoc3RhcnRlZCBhYm92ZTsgbWVtb2l6ZWQgXHUyMDE0IG5vIHNlY29uZCBmZXRjaClcbiAgICAgIGxldCBjbGF1ZGVhaUNvbmZpZ3M6IFJlY29yZDxzdHJpbmcsIFNjb3BlZE1jcFNlcnZlckNvbmZpZz4gPSB7fVxuICAgICAgaWYgKCFpc1N0cmljdE1jcENvbmZpZykge1xuICAgICAgICBjbGF1ZGVhaUNvbmZpZ3MgPSBmaWx0ZXJNY3BTZXJ2ZXJzQnlQb2xpY3koXG4gICAgICAgICAgYXdhaXQgY2xhdWRlYWlQcm9taXNlLFxuICAgICAgICApLmFsbG93ZWRcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkgcmV0dXJuXG5cbiAgICAgICAgLy8gU3VwcHJlc3MgY2xhdWRlLmFpIGNvbm5lY3RvcnMgdGhhdCBkdXBsaWNhdGUgYW4gZW5hYmxlZCBtYW51YWwgc2VydmVyLlxuICAgICAgICAvLyBLZXlzIG5ldmVyIGNvbGxpZGUgKGBzbGFja2AgdnMgYGNsYXVkZS5haSBTbGFja2ApIHNvIHRoZSBtZXJnZSBiZWxvd1xuICAgICAgICAvLyB3b24ndCBjYXRjaCB0aGlzIFx1MjAxNCBuZWVkIGNvbnRlbnQtYmFzZWQgZGVkdXAgYnkgVVJMIHNpZ25hdHVyZS5cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGNsYXVkZWFpQ29uZmlncykubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IHsgc2VydmVyczogZGVkdXBlZENsYXVkZUFpIH0gPSBkZWR1cENsYXVkZUFpTWNwU2VydmVycyhcbiAgICAgICAgICAgIGNsYXVkZWFpQ29uZmlncyxcbiAgICAgICAgICAgIGNvbmZpZ3MsXG4gICAgICAgICAgKVxuICAgICAgICAgIGNsYXVkZWFpQ29uZmlncyA9IGRlZHVwZWRDbGF1ZGVBaVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGNsYXVkZWFpQ29uZmlncykubGVuZ3RoID4gMCkge1xuICAgICAgICAgIC8vIEFkZCBjbGF1ZGUuYWkgc2VydmVycyBhcyBwZW5kaW5nIGltbWVkaWF0ZWx5IHNvIHRoZXkgc2hvdyB1cCBpbiBVSVxuICAgICAgICAgIHNldEFwcFN0YXRlKHByZXZTdGF0ZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1NlcnZlck5hbWVzID0gbmV3IFNldChcbiAgICAgICAgICAgICAgcHJldlN0YXRlLm1jcC5jbGllbnRzLm1hcChjID0+IGMubmFtZSksXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjb25zdCBuZXdDbGllbnRzID0gT2JqZWN0LmVudHJpZXMoY2xhdWRlYWlDb25maWdzKVxuICAgICAgICAgICAgICAuZmlsdGVyKChbbmFtZV0pID0+ICFleGlzdGluZ1NlcnZlck5hbWVzLmhhcyhuYW1lKSlcbiAgICAgICAgICAgICAgLm1hcCgoW25hbWUsIGNvbmZpZ10pID0+ICh7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBpc01jcFNlcnZlckRpc2FibGVkKG5hbWUpXG4gICAgICAgICAgICAgICAgICA/ICgnZGlzYWJsZWQnIGFzIGNvbnN0KVxuICAgICAgICAgICAgICAgICAgOiAoJ3BlbmRpbmcnIGFzIGNvbnN0KSxcbiAgICAgICAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgaWYgKG5ld0NsaWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gcHJldlN0YXRlXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgICAgICAgIG1jcDoge1xuICAgICAgICAgICAgICAgIC4uLnByZXZTdGF0ZS5tY3AsXG4gICAgICAgICAgICAgICAgY2xpZW50czogWy4uLnByZXZTdGF0ZS5tY3AuY2xpZW50cywgLi4ubmV3Q2xpZW50c10sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIC8vIE5vdyBzdGFydCBjb25uZWN0aW5nIChvbmx5IGVuYWJsZWQgc2VydmVycylcbiAgICAgICAgICBjb25zdCBlbmFibGVkQ2xhdWRlYWlDb25maWdzID0gT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY2xhdWRlYWlDb25maWdzKS5maWx0ZXIoXG4gICAgICAgICAgICAgIChbbmFtZV0pID0+ICFpc01jcFNlcnZlckRpc2FibGVkKG5hbWUpLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICApXG4gICAgICAgICAgZ2V0TWNwVG9vbHNDb21tYW5kc0FuZFJlc291cmNlcyhcbiAgICAgICAgICAgIG9uQ29ubmVjdGlvbkF0dGVtcHQsXG4gICAgICAgICAgICBlbmFibGVkQ2xhdWRlYWlDb25maWdzLFxuICAgICAgICAgICkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgbG9nTUNQRXJyb3IoXG4gICAgICAgICAgICAgICd1c2VNYW5hZ2VNY3BDb25uZWN0aW9ucycsXG4gICAgICAgICAgICAgIGBGYWlsZWQgdG8gZ2V0IGNsYXVkZS5haSBNQ1AgcmVzb3VyY2VzOiAke2Vycm9yTWVzc2FnZShlcnJvcil9YCxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIExvZyBzZXJ2ZXIgY291bnRzIGFmdGVyIGJvdGggcGhhc2VzIGNvbXBsZXRlXG4gICAgICBjb25zdCBhbGxDb25maWdzID0geyAuLi5jb25maWdzLCAuLi5jbGF1ZGVhaUNvbmZpZ3MgfVxuICAgICAgY29uc3QgY291bnRzID0ge1xuICAgICAgICBlbnRlcnByaXNlOiAwLFxuICAgICAgICBnbG9iYWw6IDAsXG4gICAgICAgIHByb2plY3Q6IDAsXG4gICAgICAgIHVzZXI6IDAsXG4gICAgICAgIHBsdWdpbjogMCxcbiAgICAgICAgY2xhdWRlYWk6IDAsXG4gICAgICB9XG4gICAgICAvLyBBbnQtb25seTogY29sbGVjdCBzdGRpbyBjb21tYW5kIGJhc2VuYW1lcyB0byBjb3JyZWxhdGUgd2l0aCBSU1MvRlBTXG4gICAgICAvLyBtZXRyaWNzLiBTdGRpbyBzZXJ2ZXJzIGxpa2UgcnVzdC1hbmFseXplciBjYW4gYmUgaGVhdnkgYW5kIHdlIHdhbnQgdG9cbiAgICAgIC8vIGtub3cgd2hpY2ggb25lcyBjb3JyZWxhdGUgd2l0aCBwb29yIHNlc3Npb24gcGVyZm9ybWFuY2UuXG4gICAgICBjb25zdCBzdGRpb0NvbW1hbmRzOiBzdHJpbmdbXSA9IFtdXG4gICAgICBmb3IgKGNvbnN0IFtuYW1lLCBzZXJ2ZXJDb25maWddIG9mIE9iamVjdC5lbnRyaWVzKGFsbENvbmZpZ3MpKSB7XG4gICAgICAgIGlmIChzZXJ2ZXJDb25maWcuc2NvcGUgPT09ICdlbnRlcnByaXNlJykgY291bnRzLmVudGVycHJpc2UrK1xuICAgICAgICBlbHNlIGlmIChzZXJ2ZXJDb25maWcuc2NvcGUgPT09ICd1c2VyJykgY291bnRzLmdsb2JhbCsrXG4gICAgICAgIGVsc2UgaWYgKHNlcnZlckNvbmZpZy5zY29wZSA9PT0gJ3Byb2plY3QnKSBjb3VudHMucHJvamVjdCsrXG4gICAgICAgIGVsc2UgaWYgKHNlcnZlckNvbmZpZy5zY29wZSA9PT0gJ2xvY2FsJykgY291bnRzLnVzZXIrK1xuICAgICAgICBlbHNlIGlmIChzZXJ2ZXJDb25maWcuc2NvcGUgPT09ICdkeW5hbWljJykgY291bnRzLnBsdWdpbisrXG4gICAgICAgIGVsc2UgaWYgKHNlcnZlckNvbmZpZy5zY29wZSA9PT0gJ2NsYXVkZWFpJykgY291bnRzLmNsYXVkZWFpKytcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvY2Vzcy5lbnYuVVNFUl9UWVBFID09PSAnYW50JyAmJlxuICAgICAgICAgICFpc01jcFNlcnZlckRpc2FibGVkKG5hbWUpICYmXG4gICAgICAgICAgKHNlcnZlckNvbmZpZy50eXBlID09PSB1bmRlZmluZWQgfHwgc2VydmVyQ29uZmlnLnR5cGUgPT09ICdzdGRpbycpICYmXG4gICAgICAgICAgJ2NvbW1hbmQnIGluIHNlcnZlckNvbmZpZ1xuICAgICAgICApIHtcbiAgICAgICAgICBzdGRpb0NvbW1hbmRzLnB1c2goYmFzZW5hbWUoc2VydmVyQ29uZmlnLmNvbW1hbmQpKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsb2dFdmVudCgndGVuZ3VfbWNwX3NlcnZlcnMnLCB7XG4gICAgICAgIC4uLmNvdW50cyxcbiAgICAgICAgLi4uKHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCcgJiYgc3RkaW9Db21tYW5kcy5sZW5ndGggPiAwXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIHN0ZGlvX2NvbW1hbmRzOiBzdGRpb0NvbW1hbmRzXG4gICAgICAgICAgICAgICAgLnNvcnQoKVxuICAgICAgICAgICAgICAgIC5qb2luKFxuICAgICAgICAgICAgICAgICAgJywnLFxuICAgICAgICAgICAgICAgICkgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IHt9KSxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdm9pZCBsb2FkQW5kQ29ubmVjdE1jcENvbmZpZ3MoKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gIH0sIFtcbiAgICBpc1N0cmljdE1jcENvbmZpZyxcbiAgICBkeW5hbWljTWNwQ29uZmlnLFxuICAgIG9uQ29ubmVjdGlvbkF0dGVtcHQsXG4gICAgc2V0QXBwU3RhdGUsXG4gICAgX2F1dGhWZXJzaW9uLFxuICAgIHNlc3Npb25JZCxcbiAgICBfcGx1Z2luUmVjb25uZWN0S2V5LFxuICBdKVxuXG4gIC8vIENsZWFudXAgYWxsIHRpbWVycyBvbiB1bm1vdW50XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXJzID0gcmVjb25uZWN0VGltZXJzUmVmLmN1cnJlbnRcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZm9yIChjb25zdCB0aW1lciBvZiB0aW1lcnMudmFsdWVzKCkpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgfVxuICAgICAgdGltZXJzLmNsZWFyKClcbiAgICAgIC8vIEZsdXNoIGFueSBwZW5kaW5nIGJhdGNoZWQgTUNQIHVwZGF0ZXMgYmVmb3JlIHVubW91bnRcbiAgICAgIGlmIChmbHVzaFRpbWVyUmVmLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGZsdXNoVGltZXJSZWYuY3VycmVudClcbiAgICAgICAgZmx1c2hUaW1lclJlZi5jdXJyZW50ID0gbnVsbFxuICAgICAgICBmbHVzaFBlbmRpbmdVcGRhdGVzKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtmbHVzaFBlbmRpbmdVcGRhdGVzXSlcblxuICAvLyBFeHBvc2UgcmVjb25uZWN0TWNwU2VydmVyIGZ1bmN0aW9uIGZvciBjb21wb25lbnRzIHRvIHVzZS5cbiAgLy8gUmVhZHMgbWNwLmNsaWVudHMgdmlhIHN0b3JlLmdldFN0YXRlKCkgc28gdGhpcyBjYWxsYmFjayBzdGF5cyBzdGFibGVcbiAgLy8gYWNyb3NzIGNsaWVudCBzdGF0ZSB0cmFuc2l0aW9ucyAobm8gbmVlZCB0byByZS1jcmVhdGUgb24gZXZlcnkgY29ubmVjdCkuXG4gIGNvbnN0IHJlY29ubmVjdE1jcFNlcnZlciA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jIChzZXJ2ZXJOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGNsaWVudCA9IHN0b3JlXG4gICAgICAgIC5nZXRTdGF0ZSgpXG4gICAgICAgIC5tY3AuY2xpZW50cy5maW5kKGMgPT4gYy5uYW1lID09PSBzZXJ2ZXJOYW1lKVxuICAgICAgaWYgKCFjbGllbnQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNQ1Agc2VydmVyICR7c2VydmVyTmFtZX0gbm90IGZvdW5kYClcbiAgICAgIH1cblxuICAgICAgLy8gQ2FuY2VsIGFueSBwZW5kaW5nIGF1dG9tYXRpYyByZWNvbm5lY3Rpb24gYXR0ZW1wdFxuICAgICAgY29uc3QgZXhpc3RpbmdUaW1lciA9IHJlY29ubmVjdFRpbWVyc1JlZi5jdXJyZW50LmdldChzZXJ2ZXJOYW1lKVxuICAgICAgaWYgKGV4aXN0aW5nVGltZXIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGV4aXN0aW5nVGltZXIpXG4gICAgICAgIHJlY29ubmVjdFRpbWVyc1JlZi5jdXJyZW50LmRlbGV0ZShzZXJ2ZXJOYW1lKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZWNvbm5lY3RNY3BTZXJ2ZXJJbXBsKHNlcnZlck5hbWUsIGNsaWVudC5jb25maWcpXG5cbiAgICAgIG9uQ29ubmVjdGlvbkF0dGVtcHQocmVzdWx0KVxuXG4gICAgICAvLyBEb24ndCB0aHJvdywganVzdCBsZXQgVUkgaGFuZGxlIHRoZSBjbGllbnQgdHlwZSBpbiBjYXNlIHRoZSByZWNvbm5lY3QgZmFpbGVkXG4gICAgICAvLyAoRGV0YWlsZWQgbG9ncyBhcmUgd2l0aGluIHRoZSByZWNvbm5lY3RNY3BTZXJ2ZXJJbXBsIHZpYSAtLWRlYnVnKVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH0sXG4gICAgW3N0b3JlLCBvbkNvbm5lY3Rpb25BdHRlbXB0XSxcbiAgKVxuXG4gIC8vIEV4cG9zZSBmdW5jdGlvbiB0byB0b2dnbGUgc2VydmVyIGVuYWJsZWQvZGlzYWJsZWQgc3RhdGVcbiAgY29uc3QgdG9nZ2xlTWNwU2VydmVyID0gdXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKHNlcnZlck5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgY29uc3QgY2xpZW50ID0gc3RvcmVcbiAgICAgICAgLmdldFN0YXRlKClcbiAgICAgICAgLm1jcC5jbGllbnRzLmZpbmQoYyA9PiBjLm5hbWUgPT09IHNlcnZlck5hbWUpXG4gICAgICBpZiAoIWNsaWVudCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1DUCBzZXJ2ZXIgJHtzZXJ2ZXJOYW1lfSBub3QgZm91bmRgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc0N1cnJlbnRseURpc2FibGVkID0gY2xpZW50LnR5cGUgPT09ICdkaXNhYmxlZCdcblxuICAgICAgaWYgKCFpc0N1cnJlbnRseURpc2FibGVkKSB7XG4gICAgICAgIC8vIENhbmNlbCBhbnkgcGVuZGluZyBhdXRvbWF0aWMgcmVjb25uZWN0aW9uIGF0dGVtcHRcbiAgICAgICAgY29uc3QgZXhpc3RpbmdUaW1lciA9IHJlY29ubmVjdFRpbWVyc1JlZi5jdXJyZW50LmdldChzZXJ2ZXJOYW1lKVxuICAgICAgICBpZiAoZXhpc3RpbmdUaW1lcikge1xuICAgICAgICAgIGNsZWFyVGltZW91dChleGlzdGluZ1RpbWVyKVxuICAgICAgICAgIHJlY29ubmVjdFRpbWVyc1JlZi5jdXJyZW50LmRlbGV0ZShzZXJ2ZXJOYW1lKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGVyc2lzdCBkaXNhYmxlZCBzdGF0ZSB0byBkaXNrIEZJUlNUIGJlZm9yZSBjbGVhcmluZyBjYWNoZVxuICAgICAgICAvLyBUaGlzIGlzIGltcG9ydGFudCBiZWNhdXNlIHRoZSBvbmNsb3NlIGhhbmRsZXIgY2hlY2tzIGRpc2sgc3RhdGVcbiAgICAgICAgc2V0TWNwU2VydmVyRW5hYmxlZChzZXJ2ZXJOYW1lLCBmYWxzZSlcblxuICAgICAgICAvLyBEaXNhYmxpbmc6IGRpc2Nvbm5lY3QgYW5kIGNsZWFuIHVwIGlmIGN1cnJlbnRseSBjb25uZWN0ZWRcbiAgICAgICAgaWYgKGNsaWVudC50eXBlID09PSAnY29ubmVjdGVkJykge1xuICAgICAgICAgIGF3YWl0IGNsZWFyU2VydmVyQ2FjaGUoc2VydmVyTmFtZSwgY2xpZW50LmNvbmZpZylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSB0byBkaXNhYmxlZCBzdGF0ZSAodG9vbHMvY29tbWFuZHMvcmVzb3VyY2VzIGF1dG8tY2xlYXJlZClcbiAgICAgICAgdXBkYXRlU2VydmVyKHtcbiAgICAgICAgICBuYW1lOiBzZXJ2ZXJOYW1lLFxuICAgICAgICAgIHR5cGU6ICdkaXNhYmxlZCcsXG4gICAgICAgICAgY29uZmlnOiBjbGllbnQuY29uZmlnLFxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRW5hYmxpbmc6IHBlcnNpc3QgZW5hYmxlZCBzdGF0ZSB0byBkaXNrIGZpcnN0XG4gICAgICAgIHNldE1jcFNlcnZlckVuYWJsZWQoc2VydmVyTmFtZSwgdHJ1ZSlcblxuICAgICAgICAvLyBNYXJrIGFzIHBlbmRpbmcgYW5kIHJlY29ubmVjdFxuICAgICAgICB1cGRhdGVTZXJ2ZXIoe1xuICAgICAgICAgIG5hbWU6IHNlcnZlck5hbWUsXG4gICAgICAgICAgdHlwZTogJ3BlbmRpbmcnLFxuICAgICAgICAgIGNvbmZpZzogY2xpZW50LmNvbmZpZyxcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBSZWNvbm5lY3QgdGhlIHNlcnZlclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZWNvbm5lY3RNY3BTZXJ2ZXJJbXBsKHNlcnZlck5hbWUsIGNsaWVudC5jb25maWcpXG5cbiAgICAgICAgb25Db25uZWN0aW9uQXR0ZW1wdChyZXN1bHQpXG4gICAgICB9XG4gICAgfSxcbiAgICBbc3RvcmUsIHVwZGF0ZVNlcnZlciwgb25Db25uZWN0aW9uQXR0ZW1wdF0sXG4gIClcblxuICByZXR1cm4geyByZWNvbm5lY3RNY3BTZXJ2ZXIsIHRvZ2dsZU1jcFNlcnZlciB9XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zcG9ydERpc3BsYXlOYW1lKHR5cGU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ2h0dHAnOlxuICAgICAgcmV0dXJuICdIVFRQJ1xuICAgIGNhc2UgJ3dzJzpcbiAgICBjYXNlICd3cy1pZGUnOlxuICAgICAgcmV0dXJuICdXZWJTb2NrZXQnXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnU1NFJ1xuICB9XG59XG4iLCAiaW1wb3J0IFJlYWN0LCB7XG4gIGNyZWF0ZUNvbnRleHQsXG4gIHR5cGUgUmVhY3ROb2RlLFxuICB1c2VDb250ZXh0LFxuICB1c2VNZW1vLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgQ29tbWFuZCB9IGZyb20gJy4uLy4uL2NvbW1hbmRzLmpzJ1xuaW1wb3J0IHR5cGUgeyBUb29sIH0gZnJvbSAnLi4vLi4vVG9vbC5qcydcbmltcG9ydCB0eXBlIHtcbiAgTUNQU2VydmVyQ29ubmVjdGlvbixcbiAgU2NvcGVkTWNwU2VydmVyQ29uZmlnLFxuICBTZXJ2ZXJSZXNvdXJjZSxcbn0gZnJvbSAnLi90eXBlcy5qcydcbmltcG9ydCB7IHVzZU1hbmFnZU1DUENvbm5lY3Rpb25zIH0gZnJvbSAnLi91c2VNYW5hZ2VNQ1BDb25uZWN0aW9ucy5qcydcblxuaW50ZXJmYWNlIE1DUENvbm5lY3Rpb25Db250ZXh0VmFsdWUge1xuICByZWNvbm5lY3RNY3BTZXJ2ZXI6IChzZXJ2ZXJOYW1lOiBzdHJpbmcpID0+IFByb21pc2U8e1xuICAgIGNsaWVudDogTUNQU2VydmVyQ29ubmVjdGlvblxuICAgIHRvb2xzOiBUb29sW11cbiAgICBjb21tYW5kczogQ29tbWFuZFtdXG4gICAgcmVzb3VyY2VzPzogU2VydmVyUmVzb3VyY2VbXVxuICB9PlxuICB0b2dnbGVNY3BTZXJ2ZXI6IChzZXJ2ZXJOYW1lOiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD5cbn1cblxuY29uc3QgTUNQQ29ubmVjdGlvbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0PE1DUENvbm5lY3Rpb25Db250ZXh0VmFsdWUgfCBudWxsPihcbiAgbnVsbCxcbilcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1jcFJlY29ubmVjdCgpIHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoTUNQQ29ubmVjdGlvbkNvbnRleHQpXG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXNlTWNwUmVjb25uZWN0IG11c3QgYmUgdXNlZCB3aXRoaW4gTUNQQ29ubmVjdGlvbk1hbmFnZXInKVxuICB9XG4gIHJldHVybiBjb250ZXh0LnJlY29ubmVjdE1jcFNlcnZlclxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlTWNwVG9nZ2xlRW5hYmxlZCgpIHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoTUNQQ29ubmVjdGlvbkNvbnRleHQpXG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICd1c2VNY3BUb2dnbGVFbmFibGVkIG11c3QgYmUgdXNlZCB3aXRoaW4gTUNQQ29ubmVjdGlvbk1hbmFnZXInLFxuICAgIClcbiAgfVxuICByZXR1cm4gY29udGV4dC50b2dnbGVNY3BTZXJ2ZXJcbn1cblxuaW50ZXJmYWNlIE1DUENvbm5lY3Rpb25NYW5hZ2VyUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlXG4gIGR5bmFtaWNNY3BDb25maWc6IFJlY29yZDxzdHJpbmcsIFNjb3BlZE1jcFNlcnZlckNvbmZpZz4gfCB1bmRlZmluZWRcbiAgaXNTdHJpY3RNY3BDb25maWc6IGJvb2xlYW5cbn1cblxuLy8gVE9ETyAob2xsaWUpOiBXZSBtYXkgYmUgYWJsZSB0byBnZXQgcmlkIG9mIHRoaXMgY29udGV4dCBieSBwdXR0aW5nIHRoZXNlIGZ1bmN0aW9uIG9uIGFwcCBzdGF0ZVxuZXhwb3J0IGZ1bmN0aW9uIE1DUENvbm5lY3Rpb25NYW5hZ2VyKHtcbiAgY2hpbGRyZW4sXG4gIGR5bmFtaWNNY3BDb25maWcsXG4gIGlzU3RyaWN0TWNwQ29uZmlnLFxufTogTUNQQ29ubmVjdGlvbk1hbmFnZXJQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IHsgcmVjb25uZWN0TWNwU2VydmVyLCB0b2dnbGVNY3BTZXJ2ZXIgfSA9IHVzZU1hbmFnZU1DUENvbm5lY3Rpb25zKFxuICAgIGR5bmFtaWNNY3BDb25maWcsXG4gICAgaXNTdHJpY3RNY3BDb25maWcsXG4gIClcbiAgY29uc3QgdmFsdWUgPSB1c2VNZW1vKFxuICAgICgpID0+ICh7IHJlY29ubmVjdE1jcFNlcnZlciwgdG9nZ2xlTWNwU2VydmVyIH0pLFxuICAgIFtyZWNvbm5lY3RNY3BTZXJ2ZXIsIHRvZ2dsZU1jcFNlcnZlcl0sXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxNQ1BDb25uZWN0aW9uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTUNQQ29ubmVjdGlvbkNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ08sU0FBUyxrQ0FBMkM7QUFDekQsU0FBTyxvQ0FBb0MsNEJBQTRCLEtBQUs7QUFDOUU7QUEwRUEsU0FBUyxTQUFTLE9BQXVCO0FBSXZDLE1BQUksSUFBSTtBQUNSLFdBQVMsSUFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEtBQUs7QUFDckMsU0FBSyxNQUFNLFdBQVcsQ0FBQztBQUN2QixRQUFJLEtBQUssS0FBSyxHQUFHLFFBQVU7QUFBQSxFQUM3QjtBQUNBLE1BQUksTUFBTTtBQUNWLE1BQUksSUFBSTtBQUNSLFdBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQzFCLFNBQUssWUFBWSxJQUFJLEVBQUU7QUFDdkIsUUFBSSxLQUFLLE1BQU0sSUFBSSxFQUFFO0FBQUEsRUFDdkI7QUFDQSxTQUFPO0FBQ1Q7QUFZTyxTQUFTLGVBQWUsV0FBMkI7QUFJeEQsTUFBSSxZQUFZLFNBQVMsU0FBUztBQUNsQyxXQUFTLE9BQU8sR0FBRyxPQUFPLElBQUksUUFBUTtBQUNwQyxRQUFJLENBQUMsb0JBQW9CLEtBQUssU0FBTyxVQUFVLFNBQVMsR0FBRyxDQUFDLEdBQUc7QUFDN0QsYUFBTztBQUFBLElBQ1Q7QUFDQSxnQkFBWSxTQUFTLEdBQUcsU0FBUyxJQUFJLElBQUksRUFBRTtBQUFBLEVBQzdDO0FBQ0EsU0FBTztBQUNUO0FBUU8sU0FBUyxtQkFBbUIsT0FBd0I7QUFDekQsTUFBSTtBQUNGLFVBQU0sSUFBSSxjQUFjLEtBQUs7QUFDN0IsV0FBTyxFQUFFLFNBQVMsTUFBTSxFQUFFLE1BQU0sR0FBRyxHQUFHLElBQUksV0FBTTtBQUFBLEVBQ2xELFFBQVE7QUFDTixXQUFPO0FBQUEsRUFDVDtBQUNGO0FBVU8sU0FBUyw2QkFPZCxTQUNBLGVBQytCO0FBQy9CLFNBQU8sUUFBUTtBQUFBLElBQ2IsQ0FBQ0EsT0FDQ0EsR0FBRSxTQUFTLGVBQ1gsY0FBY0EsR0FBRSxJQUFJLEtBQ3BCQSxHQUFFLGNBQWMsZUFBZSxnQkFBZ0IsTUFBTSxVQUNyREEsR0FBRSxjQUFjLGVBQWUsMkJBQTJCLE1BQU07QUFBQSxFQUNwRTtBQUNGO0FBZU8sU0FBUyxtQ0FBK0Q7QUFDN0UsUUFBTSxVQUFVLG9CQUFJLElBR2xCO0FBRUYsU0FBTztBQUFBLElBQ0wsV0FBVyxXQUFXLFNBQVM7QUFLN0IsWUFBTSxNQUFNLFVBQVUsWUFBWTtBQUNsQyxjQUFRLElBQUksS0FBSyxPQUFPO0FBQ3hCLGFBQU8sTUFBTTtBQUNYLGdCQUFRLE9BQU8sR0FBRztBQUFBLE1BQ3BCO0FBQUEsSUFDRjtBQUFBLElBRUEsUUFBUSxXQUFXLFVBQVUsWUFBWTtBQUN2QyxZQUFNLE1BQU0sVUFBVSxZQUFZO0FBQ2xDLFlBQU0sV0FBVyxRQUFRLElBQUksR0FBRztBQUNoQyxVQUFJLENBQUMsU0FBVSxRQUFPO0FBSXRCLGNBQVEsT0FBTyxHQUFHO0FBQ2xCLGVBQVMsRUFBRSxVQUFVLFdBQVcsQ0FBQztBQUNqQyxhQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFDRjtBQS9PQSxJQTZFTSxhQU9BO0FBcEZOO0FBQUE7QUF5QkE7QUFDQTtBQW1EQSxJQUFNLGNBQWM7QUFPcEIsSUFBTSxzQkFBc0I7QUFBQSxNQUMxQjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQzVHQSxTQUFTLGdCQUFnQjtBQTZGekIsU0FBUyxZQUFZLE9BQTRCO0FBQy9DLFFBQU0sU0FBUyxZQUFZLFFBQVEsTUFBTSxTQUFTO0FBQ2xELFNBQU8sR0FBRyxNQUFNLElBQUksSUFBSSxNQUFNLE1BQU0sSUFBSSxNQUFNO0FBQ2hEO0FBS0EsU0FBUyxvQkFDUCxhQUNBLFdBQ007QUFDTixNQUFJLFVBQVUsV0FBVyxFQUFHO0FBRTVCLGNBQVksZUFBYTtBQUV2QixVQUFNLGVBQWUsSUFBSTtBQUFBLE1BQ3ZCLFVBQVUsUUFBUSxPQUFPLElBQUksT0FBSyxZQUFZLENBQUMsQ0FBQztBQUFBLElBQ2xEO0FBR0EsVUFBTSxrQkFBa0IsVUFBVTtBQUFBLE1BQ2hDLFdBQVMsQ0FBQyxhQUFhLElBQUksWUFBWSxLQUFLLENBQUM7QUFBQSxJQUMvQztBQUVBLFFBQUksZ0JBQWdCLFdBQVcsR0FBRztBQUNoQyxhQUFPO0FBQUEsSUFDVDtBQUVBLFdBQU87QUFBQSxNQUNMLEdBQUc7QUFBQSxNQUNILFNBQVM7QUFBQSxRQUNQLEdBQUcsVUFBVTtBQUFBLFFBQ2IsUUFBUSxDQUFDLEdBQUcsVUFBVSxRQUFRLFFBQVEsR0FBRyxlQUFlO0FBQUEsTUFDMUQ7QUFBQSxJQUNGO0FBQUEsRUFDRixDQUFDO0FBQ0g7QUFXTyxTQUFTLHdCQUNkLGtCQUNBLG9CQUFvQixPQUNwQjtBQUNBLFFBQU0sUUFBUSxpQkFBaUI7QUFDL0IsUUFBTSxlQUFlLFlBQVksT0FBSyxFQUFFLFdBQVc7QUFLbkQsUUFBTSxzQkFBc0IsWUFBWSxPQUFLLEVBQUUsSUFBSSxrQkFBa0I7QUFDckUsUUFBTSxjQUFjLGVBQWU7QUFHbkMsUUFBTSxxQkFBcUIsT0FBb0Msb0JBQUksSUFBSSxDQUFDO0FBS3hFLFFBQU0sd0JBQXdCLE9BRTVCLG9CQUFJLElBQUksQ0FBQztBQUlYLFFBQU0sMEJBQTBCO0FBQUEsSUFDOUI7QUFBQSxFQUNGO0FBQ0EsT0FDRyxRQUFRLFFBQVEsS0FBSyxRQUFRLGlCQUFpQixNQUMvQyx3QkFBd0IsWUFBWSxNQUNwQztBQUNBLDRCQUF3QixVQUFVLGlDQUFpQztBQUFBLEVBQ3JFO0FBR0EsWUFBVSxNQUFNO0FBQ2QsUUFBSSxRQUFRLFFBQVEsS0FBSyxRQUFRLGlCQUFpQixHQUFHO0FBQ25ELFlBQU0sWUFBWSx3QkFBd0I7QUFDMUMsVUFBSSxDQUFDLFVBQVc7QUFNaEIsVUFBSSxDQUFDLGdDQUFnQyxFQUFHO0FBQ3hDLGtCQUFZLFVBQVE7QUFDbEIsWUFBSSxLQUFLLCtCQUErQixVQUFXLFFBQU87QUFDMUQsZUFBTyxFQUFFLEdBQUcsTUFBTSw0QkFBNEIsVUFBVTtBQUFBLE1BQzFELENBQUM7QUFDRCxhQUFPLE1BQU07QUFDWCxvQkFBWSxVQUFRO0FBQ2xCLGNBQUksS0FBSywrQkFBK0IsT0FBVyxRQUFPO0FBQzFELGlCQUFPLEVBQUUsR0FBRyxNQUFNLDRCQUE0QixPQUFVO0FBQUEsUUFDMUQsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGO0FBQUEsRUFDRixHQUFHLENBQUMsV0FBVyxDQUFDO0FBQ2hCLFFBQU0sRUFBRSxnQkFBZ0IsSUFBSSxpQkFBaUI7QUFNN0MsUUFBTSxxQkFBcUI7QUFNM0IsUUFBTSxvQkFBb0IsT0FBd0IsQ0FBQyxDQUFDO0FBQ3BELFFBQU0sZ0JBQWdCLE9BQTZDLElBQUk7QUFFdkUsUUFBTSxzQkFBc0IsWUFBWSxNQUFNO0FBQzVDLGtCQUFjLFVBQVU7QUFDeEIsVUFBTSxVQUFVLGtCQUFrQjtBQUNsQyxRQUFJLFFBQVEsV0FBVyxFQUFHO0FBQzFCLHNCQUFrQixVQUFVLENBQUM7QUFFN0IsZ0JBQVksZUFBYTtBQUN2QixVQUFJLE1BQU0sVUFBVTtBQUVwQixpQkFBVyxVQUFVLFNBQVM7QUFDNUIsY0FBTTtBQUFBLFVBQ0osT0FBTztBQUFBLFVBQ1AsVUFBVTtBQUFBLFVBQ1YsV0FBVztBQUFBLFVBQ1gsR0FBRztBQUFBLFFBQ0wsSUFBSTtBQUNKLGNBQU0sUUFDSixPQUFPLFNBQVMsY0FBYyxPQUFPLFNBQVMsV0FDekMsWUFBWSxDQUFDLElBQ2Q7QUFDTixjQUFNLFdBQ0osT0FBTyxTQUFTLGNBQWMsT0FBTyxTQUFTLFdBQ3pDLFdBQVcsQ0FBQyxJQUNiO0FBQ04sY0FBTSxZQUNKLE9BQU8sU0FBUyxjQUFjLE9BQU8sU0FBUyxXQUN6QyxVQUFVLENBQUMsSUFDWjtBQUVOLGNBQU0sU0FBUyxhQUFhLE9BQU8sSUFBSTtBQUN2QyxjQUFNLHNCQUFzQixJQUFJLFFBQVE7QUFBQSxVQUN0QyxDQUFBQyxPQUFLQSxHQUFFLFNBQVMsT0FBTztBQUFBLFFBQ3pCO0FBRUEsY0FBTSxpQkFDSix3QkFBd0IsS0FDcEIsQ0FBQyxHQUFHLElBQUksU0FBUyxNQUFNLElBQ3ZCLElBQUksUUFBUSxJQUFJLENBQUFBLE9BQU1BLEdBQUUsU0FBUyxPQUFPLE9BQU8sU0FBU0EsRUFBRTtBQUVoRSxjQUFNLGVBQ0osVUFBVSxTQUNOLElBQUksUUFDSixDQUFDLEdBQUcsZUFBTyxJQUFJLE9BQU8sT0FBSyxFQUFFLE1BQU0sV0FBVyxNQUFNLENBQUMsR0FBRyxHQUFHLEtBQUs7QUFFdEUsY0FBTSxrQkFDSixhQUFhLFNBQ1QsSUFBSSxXQUNKO0FBQUEsVUFDRSxHQUFHO0FBQUEsWUFBTyxJQUFJO0FBQUEsWUFBVSxDQUFBQSxPQUN0Qix1QkFBdUJBLElBQUcsT0FBTyxJQUFJO0FBQUEsVUFDdkM7QUFBQSxVQUNBLEdBQUc7QUFBQSxRQUNMO0FBRU4sY0FBTSxtQkFDSixjQUFjLFNBQ1YsSUFBSSxZQUNKO0FBQUEsVUFDRSxHQUFHLElBQUk7QUFBQSxVQUNQLEdBQUksVUFBVSxTQUFTLElBQ25CLEVBQUUsQ0FBQyxPQUFPLElBQUksR0FBRyxVQUFVLElBQzNCLGFBQUssSUFBSSxXQUFXLE9BQU8sSUFBSTtBQUFBLFFBQ3JDO0FBRU4sY0FBTTtBQUFBLFVBQ0osR0FBRztBQUFBLFVBQ0gsU0FBUztBQUFBLFVBQ1QsT0FBTztBQUFBLFVBQ1AsVUFBVTtBQUFBLFVBQ1YsV0FBVztBQUFBLFFBQ2I7QUFBQSxNQUNGO0FBRUEsYUFBTyxFQUFFLEdBQUcsV0FBVyxJQUFJO0FBQUEsSUFDN0IsQ0FBQztBQUFBLEVBQ0gsR0FBRyxDQUFDLFdBQVcsQ0FBQztBQU1oQixRQUFNLGVBQWU7QUFBQSxJQUNuQixDQUFDLFdBQTBCO0FBQ3pCLHdCQUFrQixRQUFRLEtBQUssTUFBTTtBQUNyQyxVQUFJLGNBQWMsWUFBWSxNQUFNO0FBQ2xDLHNCQUFjLFVBQVU7QUFBQSxVQUN0QjtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLENBQUMsbUJBQW1CO0FBQUEsRUFDdEI7QUFFQSxRQUFNLHNCQUFzQjtBQUFBLElBQzFCLENBQUM7QUFBQSxNQUNDO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRixNQUtNO0FBQ0osbUJBQWEsRUFBRSxHQUFHLFFBQVEsT0FBTyxVQUFVLFVBQVUsQ0FBQztBQUd0RCxjQUFRLE9BQU8sTUFBTTtBQUFBLFFBQ25CLEtBQUssYUFBYTtBQUtoQixxQ0FBMkIsT0FBTyxRQUFRLE9BQU8sTUFBTSxXQUFXO0FBRWxFLGlCQUFPLE9BQU8sVUFBVSxNQUFNO0FBQzVCLGtCQUFNLGFBQWEsT0FBTyxPQUFPLFFBQVE7QUFFekMsNkJBQWlCLE9BQU8sTUFBTSxPQUFPLE1BQU0sRUFBRSxNQUFNLE1BQU07QUFDdkQ7QUFBQSxnQkFDRSwwQ0FBMEMsT0FBTyxJQUFJO0FBQUEsY0FDdkQ7QUFBQSxZQUNGLENBQUM7QUFNRCxnQkFBSSxvQkFBb0IsT0FBTyxJQUFJLEdBQUc7QUFDcEM7QUFBQSxnQkFDRSxPQUFPO0FBQUEsZ0JBQ1A7QUFBQSxjQUNGO0FBQ0E7QUFBQSxZQUNGO0FBSUEsZ0JBQUksZUFBZSxXQUFXLGVBQWUsT0FBTztBQUNsRCxvQkFBTSxnQkFBZ0Isd0JBQXdCLFVBQVU7QUFDeEQ7QUFBQSxnQkFDRSxPQUFPO0FBQUEsZ0JBQ1AsR0FBRyxhQUFhO0FBQUEsY0FDbEI7QUFHQSxvQkFBTSxnQkFBZ0IsbUJBQW1CLFFBQVEsSUFBSSxPQUFPLElBQUk7QUFDaEUsa0JBQUksZUFBZTtBQUNqQiw2QkFBYSxhQUFhO0FBQzFCLG1DQUFtQixRQUFRLE9BQU8sT0FBTyxJQUFJO0FBQUEsY0FDL0M7QUFHQSxvQkFBTSx1QkFBdUIsWUFBWTtBQUN2Qyx5QkFDTSxVQUFVLEdBQ2QsV0FBVyx3QkFDWCxXQUNBO0FBRUEsc0JBQUksb0JBQW9CLE9BQU8sSUFBSSxHQUFHO0FBQ3BDO0FBQUEsc0JBQ0UsT0FBTztBQUFBLHNCQUNQO0FBQUEsb0JBQ0Y7QUFDQSx1Q0FBbUIsUUFBUSxPQUFPLE9BQU8sSUFBSTtBQUM3QztBQUFBLGtCQUNGO0FBRUEsK0JBQWE7QUFBQSxvQkFDWCxHQUFHO0FBQUEsb0JBQ0gsTUFBTTtBQUFBLG9CQUNOLGtCQUFrQjtBQUFBLG9CQUNsQixzQkFBc0I7QUFBQSxrQkFDeEIsQ0FBQztBQUVELHdCQUFNLHFCQUFxQixLQUFLLElBQUk7QUFDcEMsc0JBQUk7QUFDRiwwQkFBTSxTQUFTLE1BQU07QUFBQSxzQkFDbkIsT0FBTztBQUFBLHNCQUNQLE9BQU87QUFBQSxvQkFDVDtBQUNBLDBCQUFNLFVBQVUsS0FBSyxJQUFJLElBQUk7QUFFN0Isd0JBQUksT0FBTyxPQUFPLFNBQVMsYUFBYTtBQUN0QztBQUFBLHdCQUNFLE9BQU87QUFBQSx3QkFDUCxHQUFHLGFBQWEsa0NBQWtDLE9BQU8sZUFBZSxPQUFPO0FBQUEsc0JBQ2pGO0FBQ0EseUNBQW1CLFFBQVEsT0FBTyxPQUFPLElBQUk7QUFDN0MsMENBQW9CLE1BQU07QUFDMUI7QUFBQSxvQkFDRjtBQUVBO0FBQUEsc0JBQ0UsT0FBTztBQUFBLHNCQUNQLEdBQUcsYUFBYSx5QkFBeUIsT0FBTywyQkFBMkIsT0FBTyxPQUFPLElBQUk7QUFBQSxvQkFDL0Y7QUFHQSx3QkFBSSxZQUFZLHdCQUF3QjtBQUN0QztBQUFBLHdCQUNFLE9BQU87QUFBQSx3QkFDUCw4QkFBOEIsc0JBQXNCO0FBQUEsc0JBQ3REO0FBQ0EseUNBQW1CLFFBQVEsT0FBTyxPQUFPLElBQUk7QUFDN0MsMENBQW9CLE1BQU07QUFDMUI7QUFBQSxvQkFDRjtBQUFBLGtCQUNGLFNBQVMsT0FBTztBQUNkLDBCQUFNLFVBQVUsS0FBSyxJQUFJLElBQUk7QUFDN0I7QUFBQSxzQkFDRSxPQUFPO0FBQUEsc0JBQ1AsR0FBRyxhQUFhLHlCQUF5QixPQUFPLGlCQUFpQixPQUFPLE9BQU8sS0FBSztBQUFBLG9CQUN0RjtBQUdBLHdCQUFJLFlBQVksd0JBQXdCO0FBQ3RDO0FBQUEsd0JBQ0UsT0FBTztBQUFBLHdCQUNQLDhCQUE4QixzQkFBc0I7QUFBQSxzQkFDdEQ7QUFDQSx5Q0FBbUIsUUFBUSxPQUFPLE9BQU8sSUFBSTtBQUM3QyxtQ0FBYSxFQUFFLEdBQUcsUUFBUSxNQUFNLFNBQVMsQ0FBQztBQUMxQztBQUFBLG9CQUNGO0FBQUEsa0JBQ0Y7QUFHQSx3QkFBTSxZQUFZLEtBQUs7QUFBQSxvQkFDckIscUJBQXFCLEtBQUssSUFBSSxHQUFHLFVBQVUsQ0FBQztBQUFBLG9CQUM1QztBQUFBLGtCQUNGO0FBQ0E7QUFBQSxvQkFDRSxPQUFPO0FBQUEsb0JBQ1AsbUNBQW1DLFVBQVUsQ0FBQyxPQUFPLFNBQVM7QUFBQSxrQkFDaEU7QUFFQSx3QkFBTSxJQUFJLFFBQWMsYUFBVztBQUVqQywwQkFBTSxRQUFRLFdBQVcsU0FBUyxTQUFTO0FBQzNDLHVDQUFtQixRQUFRLElBQUksT0FBTyxNQUFNLEtBQUs7QUFBQSxrQkFDbkQsQ0FBQztBQUFBLGdCQUNIO0FBQUEsY0FDRjtBQUVBLG1CQUFLLHFCQUFxQjtBQUFBLFlBQzVCLE9BQU87QUFDTCwyQkFBYSxFQUFFLEdBQUcsUUFBUSxNQUFNLFNBQVMsQ0FBQztBQUFBLFlBQzVDO0FBQUEsVUFDRjtBQUtBLGNBQUksUUFBUSxRQUFRLEtBQUssUUFBUSxpQkFBaUIsR0FBRztBQUNuRCxrQkFBTSxPQUFPO0FBQUEsY0FDWCxPQUFPO0FBQUEsY0FDUCxPQUFPO0FBQUEsY0FDUCxPQUFPLE9BQU87QUFBQSxZQUNoQjtBQUNBLGtCQUFNLFFBQVEsaUJBQWlCLE9BQU8sTUFBTSxtQkFBbUIsQ0FBQztBQU9oRSxrQkFBTSxXQUNKLE9BQU8sU0FBUyxXQUNYLEdBQUcsTUFBTSxJQUFJLElBQUksTUFBTSxXQUFXLEtBQ25DO0FBRU4sZ0JBQUksS0FBSyxXQUFXLGNBQWMsS0FBSyxTQUFTLGNBQWM7QUFDNUQsdUJBQVMsMEJBQTBCO0FBQUEsZ0JBQ2pDLFlBQVksS0FBSyxXQUFXO0FBQUEsZ0JBQzVCLFdBQ0UsS0FBSyxXQUFXLFNBQ1gsS0FBSyxPQUNOO0FBQUEsZ0JBQ04sWUFDRSxPQUFPO0FBQUEsZ0JBQ1QsUUFBUSxPQUFPLE9BQU87QUFBQSxnQkFDdEIsUUFBUTtBQUFBLGNBQ1YsQ0FBQztBQUFBLFlBQ0g7QUFDQSxvQkFBUSxLQUFLLFFBQVE7QUFBQSxjQUNuQixLQUFLO0FBQ0gsNEJBQVksT0FBTyxNQUFNLGtDQUFrQztBQUMzRCx1QkFBTyxPQUFPO0FBQUEsa0JBQ1osaUNBQWlDO0FBQUEsa0JBQ2pDLE9BQU0saUJBQWdCO0FBQ3BCLDBCQUFNLEVBQUUsU0FBUyxLQUFLLElBQUksYUFBYTtBQUN2QztBQUFBLHNCQUNFLE9BQU87QUFBQSxzQkFDUCxpQ0FBaUMsUUFBUSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQUEsb0JBQ3ZEO0FBQ0EsNkJBQVMsNkJBQTZCO0FBQUEsc0JBQ3BDLGdCQUFnQixRQUFRO0FBQUEsc0JBQ3hCLGdCQUFnQixPQUFPLEtBQUssUUFBUSxDQUFDLENBQUMsRUFBRTtBQUFBLHNCQUN4QyxZQUNFLE9BQU87QUFBQSxzQkFDVCxRQUFRLE9BQU8sT0FBTztBQUFBLHNCQUN0QixRQUFRO0FBQUEsb0JBQ1YsQ0FBQztBQUNELDRCQUFRO0FBQUEsc0JBQ04sTUFBTTtBQUFBLHNCQUNOLE9BQU8sbUJBQW1CLE9BQU8sTUFBTSxTQUFTLElBQUk7QUFBQSxzQkFDcEQsVUFBVTtBQUFBLHNCQUNWLFFBQVE7QUFBQSxzQkFDUixRQUFRLEVBQUUsTUFBTSxXQUFXLFFBQVEsT0FBTyxLQUFLO0FBQUEsc0JBQy9DLG1CQUFtQjtBQUFBLG9CQUNyQixDQUFDO0FBQUEsa0JBQ0g7QUFBQSxnQkFDRjtBQU9BLG9CQUNFLE9BQU8sY0FBYyxlQUNuQiwyQkFDRixNQUFNLFFBQ047QUFDQSx5QkFBTyxPQUFPO0FBQUEsb0JBQ1osb0NBQW9DO0FBQUEsb0JBQ3BDLE9BQU0saUJBQWdCO0FBQ3BCLDRCQUFNLEVBQUUsWUFBWSxTQUFTLElBQUksYUFBYTtBQUM5Qyw0QkFBTSxXQUNKLHdCQUF3QixTQUFTO0FBQUEsd0JBQy9CO0FBQUEsd0JBQ0E7QUFBQSx3QkFDQSxPQUFPO0FBQUEsc0JBQ1QsS0FBSztBQUNQO0FBQUEsd0JBQ0UsT0FBTztBQUFBLHdCQUNQLDRDQUE0QyxVQUFVLFdBQU0sUUFBUSxLQUFLLFdBQVcsb0JBQW9CLDZDQUF3QztBQUFBLHNCQUNsSjtBQUFBLG9CQUNGO0FBQUEsa0JBQ0Y7QUFBQSxnQkFDRjtBQUNBO0FBQUEsY0FDRixLQUFLO0FBTUgsdUJBQU8sT0FBTztBQUFBLGtCQUNaO0FBQUEsZ0JBQ0Y7QUFDQSx1QkFBTyxPQUFPO0FBQUEsa0JBQ1o7QUFBQSxnQkFDRjtBQUNBO0FBQUEsa0JBQ0UsT0FBTztBQUFBLGtCQUNQLGtDQUFrQyxLQUFLLE1BQU07QUFBQSxnQkFDL0M7QUFPQSxvQkFDRSxLQUFLLFNBQVMsZ0JBQ2QsS0FBSyxTQUFTLGFBQ2QsQ0FBQyxzQkFBc0IsUUFBUSxJQUFJLEtBQUssSUFBSSxNQUMzQyxLQUFLLFNBQVMsaUJBQ2IsS0FBSyxTQUFTLGVBQ2QsVUFBVSxTQUNaO0FBQ0Esd0NBQXNCLFFBQVEsSUFBSSxLQUFLLElBQUk7QUFJM0Msd0JBQU0sT0FDSixLQUFLLFNBQVMsYUFDVix5Q0FDQSxLQUFLLFNBQVMsU0FDWiw4REFDQSxLQUFLLFNBQVMsV0FDWixtSEFDQSxLQUFLO0FBQ2Ysa0NBQWdCO0FBQUEsb0JBQ2QsS0FBSyxvQkFBb0IsS0FBSyxJQUFJO0FBQUEsb0JBQ2xDLFVBQVU7QUFBQSxvQkFDVjtBQUFBLG9CQUNBLE9BQU87QUFBQSxvQkFDUCxXQUFXO0FBQUEsa0JBQ2IsQ0FBQztBQUFBLGdCQUNIO0FBQ0E7QUFBQSxZQUNKO0FBQUEsVUFDRjtBQUlBLGNBQUksT0FBTyxjQUFjLE9BQU8sYUFBYTtBQUMzQyxtQkFBTyxPQUFPO0FBQUEsY0FDWjtBQUFBLGNBQ0EsWUFBWTtBQUNWO0FBQUEsa0JBQ0UsT0FBTztBQUFBLGtCQUNQO0FBQUEsZ0JBQ0Y7QUFDQSxvQkFBSTtBQUVGLHdCQUFNLHVCQUF1QixvQkFBb0IsTUFBTTtBQUFBLG9CQUNyRCxPQUFPO0FBQUEsa0JBQ1Q7QUFDQSxzQ0FBb0IsTUFBTSxPQUFPLE9BQU8sSUFBSTtBQUM1Qyx3QkFBTSxXQUFXLE1BQU0sb0JBQW9CLE1BQU07QUFDakQsd0JBQU0sV0FBVyxTQUFTO0FBQzFCLHNCQUFJLHNCQUFzQjtBQUN4Qix5Q0FBcUI7QUFBQSxzQkFDbkIsQ0FBQyxrQkFBMEI7QUFDekIsaUNBQVMsMEJBQTBCO0FBQUEsMEJBQ2pDLE1BQU07QUFBQSwwQkFDTixlQUFlLGNBQWM7QUFBQSwwQkFDN0I7QUFBQSx3QkFDRixDQUFDO0FBQUEsc0JBQ0g7QUFBQSxzQkFDQSxNQUFNO0FBQ0osaUNBQVMsMEJBQTBCO0FBQUEsMEJBQ2pDLE1BQU07QUFBQSwwQkFDTjtBQUFBLHdCQUNGLENBQUM7QUFBQSxzQkFDSDtBQUFBLG9CQUNGO0FBQUEsa0JBQ0YsT0FBTztBQUNMLDZCQUFTLDBCQUEwQjtBQUFBLHNCQUNqQyxNQUFNO0FBQUEsc0JBQ047QUFBQSxvQkFDRixDQUFDO0FBQUEsa0JBQ0g7QUFDQSwrQkFBYSxFQUFFLEdBQUcsUUFBUSxPQUFPLFNBQVMsQ0FBQztBQUFBLGdCQUM3QyxTQUFTLE9BQU87QUFDZDtBQUFBLG9CQUNFLE9BQU87QUFBQSxvQkFDUCw0REFBNEQsYUFBYSxLQUFLLENBQUM7QUFBQSxrQkFDakY7QUFBQSxnQkFDRjtBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUVBLGNBQUksT0FBTyxjQUFjLFNBQVMsYUFBYTtBQUM3QyxtQkFBTyxPQUFPO0FBQUEsY0FDWjtBQUFBLGNBQ0EsWUFBWTtBQUNWO0FBQUEsa0JBQ0UsT0FBTztBQUFBLGtCQUNQO0FBQUEsZ0JBQ0Y7QUFDQSx5QkFBUywwQkFBMEI7QUFBQSxrQkFDakMsTUFBTTtBQUFBLGdCQUNSLENBQUM7QUFDRCxvQkFBSTtBQUdGLHlDQUF1QixNQUFNLE9BQU8sT0FBTyxJQUFJO0FBQy9DLHdCQUFNLENBQUMsWUFBWSxTQUFTLElBQUksTUFBTSxRQUFRLElBQUk7QUFBQSxvQkFDaEQsdUJBQXVCLE1BQU07QUFBQSxvQkFDN0IsUUFBUSxZQUFZLElBQ2hCLHdCQUF5QixNQUFNLElBQy9CLFFBQVEsUUFBUSxDQUFDLENBQUM7QUFBQSxrQkFDeEIsQ0FBQztBQUNELCtCQUFhO0FBQUEsb0JBQ1gsR0FBRztBQUFBLG9CQUNILFVBQVUsQ0FBQyxHQUFHLFlBQVksR0FBRyxTQUFTO0FBQUEsa0JBQ3hDLENBQUM7QUFHRCx5Q0FBdUI7QUFBQSxnQkFDekIsU0FBUyxPQUFPO0FBQ2Q7QUFBQSxvQkFDRSxPQUFPO0FBQUEsb0JBQ1AsOERBQThELGFBQWEsS0FBSyxDQUFDO0FBQUEsa0JBQ25GO0FBQUEsZ0JBQ0Y7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFFQSxjQUFJLE9BQU8sY0FBYyxXQUFXLGFBQWE7QUFDL0MsbUJBQU8sT0FBTztBQUFBLGNBQ1o7QUFBQSxjQUNBLFlBQVk7QUFDVjtBQUFBLGtCQUNFLE9BQU87QUFBQSxrQkFDUDtBQUFBLGdCQUNGO0FBQ0EseUJBQVMsMEJBQTBCO0FBQUEsa0JBQ2pDLE1BQU07QUFBQSxnQkFDUixDQUFDO0FBQ0Qsb0JBQUk7QUFDRiwwQ0FBd0IsTUFBTSxPQUFPLE9BQU8sSUFBSTtBQUNoRCxzQkFBSSxRQUFRLFlBQVksR0FBRztBQUt6Qiw0Q0FBeUIsTUFBTSxPQUFPLE9BQU8sSUFBSTtBQUNqRCwyQ0FBdUIsTUFBTSxPQUFPLE9BQU8sSUFBSTtBQUMvQywwQkFBTSxDQUFDLGNBQWMsWUFBWSxTQUFTLElBQ3hDLE1BQU0sUUFBUSxJQUFJO0FBQUEsc0JBQ2hCLHdCQUF3QixNQUFNO0FBQUEsc0JBQzlCLHVCQUF1QixNQUFNO0FBQUEsc0JBQzdCLHdCQUF5QixNQUFNO0FBQUEsb0JBQ2pDLENBQUM7QUFDSCxpQ0FBYTtBQUFBLHNCQUNYLEdBQUc7QUFBQSxzQkFDSCxXQUFXO0FBQUEsc0JBQ1gsVUFBVSxDQUFDLEdBQUcsWUFBWSxHQUFHLFNBQVM7QUFBQSxvQkFDeEMsQ0FBQztBQUdELDJDQUF1QjtBQUFBLGtCQUN6QixPQUFPO0FBQ0wsMEJBQU0sZUFBZSxNQUFNLHdCQUF3QixNQUFNO0FBQ3pELGlDQUFhLEVBQUUsR0FBRyxRQUFRLFdBQVcsYUFBYSxDQUFDO0FBQUEsa0JBQ3JEO0FBQUEsZ0JBQ0YsU0FBUyxPQUFPO0FBQ2Q7QUFBQSxvQkFDRSxPQUFPO0FBQUEsb0JBQ1AsZ0VBQWdFLGFBQWEsS0FBSyxDQUFDO0FBQUEsa0JBQ3JGO0FBQUEsZ0JBQ0Y7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUVBLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFDSDtBQUFBLE1BQ0o7QUFBQSxJQUNGO0FBQUEsSUFDQSxDQUFDLFlBQVk7QUFBQSxFQUNmO0FBUUEsUUFBTSxZQUFZLGFBQWE7QUFDL0IsWUFBVSxNQUFNO0FBQ2QsbUJBQWUsNkJBQTZCO0FBQzFDLFlBQU0sRUFBRSxTQUFTLGlCQUFpQixRQUFRLFVBQVUsSUFBSSxvQkFDcEQsRUFBRSxTQUFTLENBQUMsR0FBRyxRQUFRLENBQUMsRUFBRSxJQUMxQixNQUFNLHdCQUF3QixnQkFBZ0I7QUFDbEQsWUFBTSxVQUFVLEVBQUUsR0FBRyxpQkFBaUIsR0FBRyxpQkFBaUI7QUFHMUQsMEJBQW9CLGFBQWEsU0FBUztBQUUxQyxrQkFBWSxlQUFhO0FBS3ZCLGNBQU0sRUFBRSxPQUFPLEdBQUcsZ0JBQWdCLElBQUk7QUFBQSxVQUNwQyxVQUFVO0FBQUEsVUFDVjtBQUFBLFFBQ0Y7QUFZQSxtQkFBVyxLQUFLLE9BQU87QUFDckIsZ0JBQU0sUUFBUSxtQkFBbUIsUUFBUSxJQUFJLEVBQUUsSUFBSTtBQUNuRCxjQUFJLE9BQU87QUFDVCx5QkFBYSxLQUFLO0FBQ2xCLCtCQUFtQixRQUFRLE9BQU8sRUFBRSxJQUFJO0FBQUEsVUFDMUM7QUFDQSxjQUFJLEVBQUUsU0FBUyxhQUFhO0FBQzFCLGNBQUUsT0FBTyxVQUFVO0FBQ25CLGlCQUFLLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxNQUFNO0FBQUEsWUFBQyxDQUFDO0FBQUEsVUFDeEQ7QUFBQSxRQUNGO0FBRUEsY0FBTSxzQkFBc0IsSUFBSTtBQUFBLFVBQzlCLGdCQUFnQixRQUFRLElBQUksQ0FBQUEsT0FBS0EsR0FBRSxJQUFJO0FBQUEsUUFDekM7QUFDQSxjQUFNLGFBQWEsT0FBTyxRQUFRLE9BQU8sRUFDdEMsT0FBTyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLEVBQ2pELElBQUksQ0FBQyxDQUFDLE1BQU0sTUFBTSxPQUFPO0FBQUEsVUFDeEI7QUFBQSxVQUNBLE1BQU0sb0JBQW9CLElBQUksSUFDekIsYUFDQTtBQUFBLFVBQ0w7QUFBQSxRQUNGLEVBQUU7QUFFSixZQUFJLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxHQUFHO0FBQ2pELGlCQUFPO0FBQUEsUUFDVDtBQUVBLGVBQU87QUFBQSxVQUNMLEdBQUc7QUFBQSxVQUNILEtBQUs7QUFBQSxZQUNILEdBQUcsVUFBVTtBQUFBLFlBQ2IsR0FBRztBQUFBLFlBQ0gsU0FBUyxDQUFDLEdBQUcsZ0JBQWdCLFNBQVMsR0FBRyxVQUFVO0FBQUEsVUFDckQ7QUFBQSxRQUNGO0FBQUEsTUFDRixDQUFDO0FBQUEsSUFDSDtBQUVBLFNBQUssMkJBQTJCLEVBQUUsTUFBTSxXQUFTO0FBQy9DO0FBQUEsUUFDRTtBQUFBLFFBQ0EsNENBQTRDLGFBQWEsS0FBSyxDQUFDO0FBQUEsTUFDakU7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNILEdBQUc7QUFBQSxJQUNEO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0YsQ0FBQztBQUlELFlBQVUsTUFBTTtBQUNkLFFBQUksWUFBWTtBQUVoQixtQkFBZSwyQkFBMkI7QUFNeEMsVUFBSTtBQUNKLFVBQUkscUJBQXFCLDZCQUE2QixHQUFHO0FBQ3ZELDBCQUFrQixRQUFRLFFBQVEsQ0FBQyxDQUFDO0FBQUEsTUFDdEMsT0FBTztBQUNMLHFDQUE2QjtBQUM3QiwwQkFBa0Isa0NBQWtDO0FBQUEsTUFDdEQ7QUFLQSxZQUFNLEVBQUUsU0FBUyxtQkFBbUIsUUFBUSxVQUFVLElBQ3BELG9CQUNJLEVBQUUsU0FBUyxDQUFDLEdBQUcsUUFBUSxDQUFDLEVBQUUsSUFDMUIsTUFBTSx3QkFBd0Isa0JBQWtCLGVBQWU7QUFDckUsVUFBSSxVQUFXO0FBR2YsMEJBQW9CLGFBQWEsU0FBUztBQUUxQyxZQUFNLFVBQVUsRUFBRSxHQUFHLG1CQUFtQixHQUFHLGlCQUFpQjtBQUk1RCxZQUFNLGlCQUFpQixPQUFPO0FBQUEsUUFDNUIsT0FBTyxRQUFRLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxvQkFBb0IsSUFBSSxDQUFDO0FBQUEsTUFDdkU7QUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRixFQUFFLE1BQU0sV0FBUztBQUNmO0FBQUEsVUFDRTtBQUFBLFVBQ0EsZ0NBQWdDLGFBQWEsS0FBSyxDQUFDO0FBQUEsUUFDckQ7QUFBQSxNQUNGLENBQUM7QUFHRCxVQUFJLGtCQUF5RCxDQUFDO0FBQzlELFVBQUksQ0FBQyxtQkFBbUI7QUFDdEIsMEJBQWtCO0FBQUEsVUFDaEIsTUFBTTtBQUFBLFFBQ1IsRUFBRTtBQUNGLFlBQUksVUFBVztBQUtmLFlBQUksT0FBTyxLQUFLLGVBQWUsRUFBRSxTQUFTLEdBQUc7QUFDM0MsZ0JBQU0sRUFBRSxTQUFTLGdCQUFnQixJQUFJO0FBQUEsWUFDbkM7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUNBLDRCQUFrQjtBQUFBLFFBQ3BCO0FBRUEsWUFBSSxPQUFPLEtBQUssZUFBZSxFQUFFLFNBQVMsR0FBRztBQUUzQyxzQkFBWSxlQUFhO0FBQ3ZCLGtCQUFNLHNCQUFzQixJQUFJO0FBQUEsY0FDOUIsVUFBVSxJQUFJLFFBQVEsSUFBSSxDQUFBQSxPQUFLQSxHQUFFLElBQUk7QUFBQSxZQUN2QztBQUNBLGtCQUFNLGFBQWEsT0FBTyxRQUFRLGVBQWUsRUFDOUMsT0FBTyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLEVBQ2pELElBQUksQ0FBQyxDQUFDLE1BQU0sTUFBTSxPQUFPO0FBQUEsY0FDeEI7QUFBQSxjQUNBLE1BQU0sb0JBQW9CLElBQUksSUFDekIsYUFDQTtBQUFBLGNBQ0w7QUFBQSxZQUNGLEVBQUU7QUFDSixnQkFBSSxXQUFXLFdBQVcsRUFBRyxRQUFPO0FBQ3BDLG1CQUFPO0FBQUEsY0FDTCxHQUFHO0FBQUEsY0FDSCxLQUFLO0FBQUEsZ0JBQ0gsR0FBRyxVQUFVO0FBQUEsZ0JBQ2IsU0FBUyxDQUFDLEdBQUcsVUFBVSxJQUFJLFNBQVMsR0FBRyxVQUFVO0FBQUEsY0FDbkQ7QUFBQSxZQUNGO0FBQUEsVUFDRixDQUFDO0FBR0QsZ0JBQU0seUJBQXlCLE9BQU87QUFBQSxZQUNwQyxPQUFPLFFBQVEsZUFBZSxFQUFFO0FBQUEsY0FDOUIsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLG9CQUFvQixJQUFJO0FBQUEsWUFDdkM7QUFBQSxVQUNGO0FBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0YsRUFBRSxNQUFNLFdBQVM7QUFDZjtBQUFBLGNBQ0U7QUFBQSxjQUNBLDBDQUEwQyxhQUFhLEtBQUssQ0FBQztBQUFBLFlBQy9EO0FBQUEsVUFDRixDQUFDO0FBQUEsUUFDSDtBQUFBLE1BQ0Y7QUFHQSxZQUFNLGFBQWEsRUFBRSxHQUFHLFNBQVMsR0FBRyxnQkFBZ0I7QUFDcEQsWUFBTSxTQUFTO0FBQUEsUUFDYixZQUFZO0FBQUEsUUFDWixRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixVQUFVO0FBQUEsTUFDWjtBQUlBLFlBQU0sZ0JBQTBCLENBQUM7QUFDakMsaUJBQVcsQ0FBQyxNQUFNLFlBQVksS0FBSyxPQUFPLFFBQVEsVUFBVSxHQUFHO0FBQzdELFlBQUksYUFBYSxVQUFVLGFBQWMsUUFBTztBQUFBLGlCQUN2QyxhQUFhLFVBQVUsT0FBUSxRQUFPO0FBQUEsaUJBQ3RDLGFBQWEsVUFBVSxVQUFXLFFBQU87QUFBQSxpQkFDekMsYUFBYSxVQUFVLFFBQVMsUUFBTztBQUFBLGlCQUN2QyxhQUFhLFVBQVUsVUFBVyxRQUFPO0FBQUEsaUJBQ3pDLGFBQWEsVUFBVSxXQUFZLFFBQU87QUFFbkQsWUFDRSxRQUFRLElBQUksY0FBYyxTQUMxQixDQUFDLG9CQUFvQixJQUFJLE1BQ3hCLGFBQWEsU0FBUyxVQUFhLGFBQWEsU0FBUyxZQUMxRCxhQUFhLGNBQ2I7QUFDQSx3QkFBYyxLQUFLLFNBQVMsYUFBYSxPQUFPLENBQUM7QUFBQSxRQUNuRDtBQUFBLE1BQ0Y7QUFDQSxlQUFTLHFCQUFxQjtBQUFBLFFBQzVCLEdBQUc7QUFBQSxRQUNILEdBQUksUUFBUSxJQUFJLGNBQWMsU0FBUyxjQUFjLFNBQVMsSUFDMUQ7QUFBQSxVQUNFLGdCQUFnQixjQUNiLEtBQUssRUFDTDtBQUFBLFlBQ0M7QUFBQSxVQUNGO0FBQUEsUUFDSixJQUNBLENBQUM7QUFBQSxNQUNQLENBQUM7QUFBQSxJQUNIO0FBRUEsU0FBSyx5QkFBeUI7QUFFOUIsV0FBTyxNQUFNO0FBQ1gsa0JBQVk7QUFBQSxJQUNkO0FBQUEsRUFDRixHQUFHO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0YsQ0FBQztBQUdELFlBQVUsTUFBTTtBQUNkLFVBQU0sU0FBUyxtQkFBbUI7QUFDbEMsV0FBTyxNQUFNO0FBQ1gsaUJBQVcsU0FBUyxPQUFPLE9BQU8sR0FBRztBQUNuQyxxQkFBYSxLQUFLO0FBQUEsTUFDcEI7QUFDQSxhQUFPLE1BQU07QUFFYixVQUFJLGNBQWMsWUFBWSxNQUFNO0FBQ2xDLHFCQUFhLGNBQWMsT0FBTztBQUNsQyxzQkFBYyxVQUFVO0FBQ3hCLDRCQUFvQjtBQUFBLE1BQ3RCO0FBQUEsSUFDRjtBQUFBLEVBQ0YsR0FBRyxDQUFDLG1CQUFtQixDQUFDO0FBS3hCLFFBQU0scUJBQXFCO0FBQUEsSUFDekIsT0FBTyxlQUF1QjtBQUM1QixZQUFNLFNBQVMsTUFDWixTQUFTLEVBQ1QsSUFBSSxRQUFRLEtBQUssQ0FBQUEsT0FBS0EsR0FBRSxTQUFTLFVBQVU7QUFDOUMsVUFBSSxDQUFDLFFBQVE7QUFDWCxjQUFNLElBQUksTUFBTSxjQUFjLFVBQVUsWUFBWTtBQUFBLE1BQ3REO0FBR0EsWUFBTSxnQkFBZ0IsbUJBQW1CLFFBQVEsSUFBSSxVQUFVO0FBQy9ELFVBQUksZUFBZTtBQUNqQixxQkFBYSxhQUFhO0FBQzFCLDJCQUFtQixRQUFRLE9BQU8sVUFBVTtBQUFBLE1BQzlDO0FBRUEsWUFBTSxTQUFTLE1BQU0sdUJBQXVCLFlBQVksT0FBTyxNQUFNO0FBRXJFLDBCQUFvQixNQUFNO0FBSTFCLGFBQU87QUFBQSxJQUNUO0FBQUEsSUFDQSxDQUFDLE9BQU8sbUJBQW1CO0FBQUEsRUFDN0I7QUFHQSxRQUFNLGtCQUFrQjtBQUFBLElBQ3RCLE9BQU8sZUFBc0M7QUFDM0MsWUFBTSxTQUFTLE1BQ1osU0FBUyxFQUNULElBQUksUUFBUSxLQUFLLENBQUFBLE9BQUtBLEdBQUUsU0FBUyxVQUFVO0FBQzlDLFVBQUksQ0FBQyxRQUFRO0FBQ1gsY0FBTSxJQUFJLE1BQU0sY0FBYyxVQUFVLFlBQVk7QUFBQSxNQUN0RDtBQUVBLFlBQU0sc0JBQXNCLE9BQU8sU0FBUztBQUU1QyxVQUFJLENBQUMscUJBQXFCO0FBRXhCLGNBQU0sZ0JBQWdCLG1CQUFtQixRQUFRLElBQUksVUFBVTtBQUMvRCxZQUFJLGVBQWU7QUFDakIsdUJBQWEsYUFBYTtBQUMxQiw2QkFBbUIsUUFBUSxPQUFPLFVBQVU7QUFBQSxRQUM5QztBQUlBLDRCQUFvQixZQUFZLEtBQUs7QUFHckMsWUFBSSxPQUFPLFNBQVMsYUFBYTtBQUMvQixnQkFBTSxpQkFBaUIsWUFBWSxPQUFPLE1BQU07QUFBQSxRQUNsRDtBQUdBLHFCQUFhO0FBQUEsVUFDWCxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixRQUFRLE9BQU87QUFBQSxRQUNqQixDQUFDO0FBQUEsTUFDSCxPQUFPO0FBRUwsNEJBQW9CLFlBQVksSUFBSTtBQUdwQyxxQkFBYTtBQUFBLFVBQ1gsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sUUFBUSxPQUFPO0FBQUEsUUFDakIsQ0FBQztBQUdELGNBQU0sU0FBUyxNQUFNLHVCQUF1QixZQUFZLE9BQU8sTUFBTTtBQUVyRSw0QkFBb0IsTUFBTTtBQUFBLE1BQzVCO0FBQUEsSUFDRjtBQUFBLElBQ0EsQ0FBQyxPQUFPLGNBQWMsbUJBQW1CO0FBQUEsRUFDM0M7QUFFQSxTQUFPLEVBQUUsb0JBQW9CLGdCQUFnQjtBQUMvQztBQUVBLFNBQVMsd0JBQXdCLE1BQXNCO0FBQ3JELFVBQVEsTUFBTTtBQUFBLElBQ1osS0FBSztBQUNILGFBQU87QUFBQSxJQUNULEtBQUs7QUFBQSxJQUNMLEtBQUs7QUFDSCxhQUFPO0FBQUEsSUFDVDtBQUNFLGFBQU87QUFBQSxFQUNYO0FBQ0Y7QUFwbkNBLElBcUJNLHlCQUtBLHNCQTZEQSx3QkFDQSxvQkFDQTtBQXpGTjtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUEwQkE7QUFLQTtBQUNBO0FBQ0E7QUFJQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFRQTtBQUtBO0FBSUE7QUFDQTtBQUNBO0FBL0RBLElBQU0sMEJBQTBCLFFBQVEsWUFBWSxJQUU5QyxvREFDQSwwQkFDRjtBQUNKLElBQU0sdUJBQXVCLFFBQVEsMkJBQTJCLElBRTFELHdEQUNBLHVCQUNGO0FBeURKLElBQU0seUJBQXlCO0FBQy9CLElBQU0scUJBQXFCO0FBQzNCLElBQU0saUJBQWlCO0FBQUE7QUFBQTs7O0FDNURoQixTQUFBQyxrQkFBQTtBQUNMLFFBQUFDLFVBQWdCQyxXQUFXQyxvQkFBb0I7QUFDL0MsTUFBSSxDQUFDRixTQUFPO0FBQ1YsVUFBTSxJQUFJRyxNQUFNLDBEQUEwRDtFQUFDO0FBQzVFLFNBQ01ILFFBQU9JO0FBQW1CO0FBRzVCLFNBQUFDLHNCQUFBO0FBQ0wsUUFBQUwsVUFBZ0JDLFdBQVdDLG9CQUFvQjtBQUMvQyxNQUFJLENBQUNGLFNBQU87QUFDVixVQUFNLElBQUlHLE1BQ1IsOERBQ0Y7RUFBQztBQUNGLFNBQ01ILFFBQU9NO0FBQWdCO0FBVXpCLFNBQUFDLHFCQUFBQyxJQUFBO0FBQUEsUUFBQUMsSUFBQUMsRUFBQSxDQUFBO0FBQThCLFFBQUE7SUFBQUM7SUFBQUM7SUFBQUM7RUFBQSxJQUFBTDtBQUtuQyxRQUFBO0lBQUFKO0lBQUFFO0VBQUEsSUFBZ0RRLHdCQUM5Q0Ysa0JBQ0FDLGlCQUNGO0FBQUMsTUFBQUU7QUFBQSxNQUFBTixFQUFBLENBQUEsTUFBQUwsc0JBQUFLLEVBQUEsQ0FBQSxNQUFBSCxpQkFBQTtBQUVRUyxTQUFBO01BQUFYO01BQUFFO0lBQXNDO0FBQUNHLE1BQUEsQ0FBQSxJQUFBTDtBQUFBSyxNQUFBLENBQUEsSUFBQUg7QUFBQUcsTUFBQSxDQUFBLElBQUFNO0VBQUEsT0FBQTtBQUFBQSxTQUFBTixFQUFBLENBQUE7RUFBQTtBQURoRCxRQUFBTyxRQUNTRDtBQUVSLE1BQUFFO0FBQUEsTUFBQVIsRUFBQSxDQUFBLE1BQUFFLFlBQUFGLEVBQUEsQ0FBQSxNQUFBTyxPQUFBO0FBR0NDLFNBQUEsNENBQUEscUJBQUEsVUFBQSxFQUFzQ0QsU0FDbkNMLFFBQ0g7QUFBZ0NGLE1BQUEsQ0FBQSxJQUFBRTtBQUFBRixNQUFBLENBQUEsSUFBQU87QUFBQVAsTUFBQSxDQUFBLElBQUFRO0VBQUEsT0FBQTtBQUFBQSxTQUFBUixFQUFBLENBQUE7RUFBQTtBQUFBLFNBRmhDUTtBQUVnQztJQTlDOUJmOzs7O0FBekJOO0FBYUE7QUFZQSxJQUFNQSx1QkFBdUJnQixjQUMzQixJQUNGOzs7IiwKICAibmFtZXMiOiBbImMiLCAiYyIsICJ1c2VNY3BSZWNvbm5lY3QiLCAiY29udGV4dCIsICJ1c2VDb250ZXh0IiwgIk1DUENvbm5lY3Rpb25Db250ZXh0IiwgIkVycm9yIiwgInJlY29ubmVjdE1jcFNlcnZlciIsICJ1c2VNY3BUb2dnbGVFbmFibGVkIiwgInRvZ2dsZU1jcFNlcnZlciIsICJNQ1BDb25uZWN0aW9uTWFuYWdlciIsICJ0MCIsICIkIiwgIl9jIiwgImNoaWxkcmVuIiwgImR5bmFtaWNNY3BDb25maWciLCAiaXNTdHJpY3RNY3BDb25maWciLCAidXNlTWFuYWdlTUNQQ29ubmVjdGlvbnMiLCAidDEiLCAidmFsdWUiLCAidDIiLCAiY3JlYXRlQ29udGV4dCJdCn0K
