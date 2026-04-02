#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  StdioServerTransport,
  init_stdio
} from "./chunk-DMI3EUWL.mjs";
import {
  init_sink,
  initializeAnalyticsSink
} from "./chunk-57A2KPHN.mjs";
import {
  createClaudeForChromeMcpServer,
  init_ant_claude_for_chrome_mcp
} from "./chunk-7DA2PBIX.mjs";
import {
  init_sideQuery,
  sideQuery
} from "./chunk-PWGYNHQM.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-2ONWBUQT.mjs";
import "./chunk-SQ6KOOZS.mjs";
import {
  getAllSocketPaths,
  getSecureSocketPath,
  init_common
} from "./chunk-NPSF3VOX.mjs";
import "./chunk-Y2PD6CVC.mjs";
import "./chunk-TBOD624P.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-SY3WEZL4.mjs";
import "./chunk-M22WMPMZ.mjs";
import "./chunk-4WEGPCYF.mjs";
import "./chunk-Z4JLAMMU.mjs";
import {
  init_datadog,
  shutdownDatadog
} from "./chunk-FUHJGEFK.mjs";
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
import "./chunk-R326WRGL.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import "./chunk-KMJXN3MK.mjs";
import "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  enableConfigs,
  getClaudeAIOAuthTokens,
  getFeatureValue_CACHED_MAY_BE_STALE,
  getGlobalConfig,
  init_auth,
  init_config2 as init_config,
  init_firstPartyEventLogger,
  init_growthbook,
  saveGlobalConfig,
  shutdown1PEventLogging
} from "./chunk-NKGQGSP5.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-UIIDPH35.mjs";
import "./chunk-DNXEQXI7.mjs";
import "./chunk-ZPEBVZEB.mjs";
import "./chunk-DQ5JTCOA.mjs";
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
import "./chunk-7SC6PTLR.mjs";
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
  init_debug,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import "./chunk-OU3SZVVB.mjs";
import "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import {
  init_envUtils,
  isEnvTruthy
} from "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/claudeInChrome/mcpServer.ts
import { format } from "util";
function isPermissionMode(raw) {
  return PERMISSION_MODES.some((m) => m === raw);
}
function getChromeBridgeUrl() {
  const bridgeEnabled = process.env.USER_TYPE === "ant" || getFeatureValue_CACHED_MAY_BE_STALE("tengu_copper_bridge", false);
  if (!bridgeEnabled) {
    return void 0;
  }
  if (isEnvTruthy(process.env.USE_LOCAL_OAUTH) || isEnvTruthy(process.env.LOCAL_BRIDGE)) {
    return "ws://localhost:8765";
  }
  if (isEnvTruthy(process.env.USE_STAGING_OAUTH)) {
    return "wss://bridge-staging.claudeusercontent.com";
  }
  return "wss://bridge.claudeusercontent.com";
}
function isLocalBridge() {
  return isEnvTruthy(process.env.USE_LOCAL_OAUTH) || isEnvTruthy(process.env.LOCAL_BRIDGE);
}
function createChromeContext(env) {
  const logger = new DebugLogger();
  const chromeBridgeUrl = getChromeBridgeUrl();
  logger.info(`Bridge URL: ${chromeBridgeUrl ?? "none (using native socket)"}`);
  const rawPermissionMode = env?.CLAUDE_CHROME_PERMISSION_MODE ?? process.env.CLAUDE_CHROME_PERMISSION_MODE;
  let initialPermissionMode;
  if (rawPermissionMode) {
    if (isPermissionMode(rawPermissionMode)) {
      initialPermissionMode = rawPermissionMode;
    } else {
      logger.warn(
        `Invalid CLAUDE_CHROME_PERMISSION_MODE "${rawPermissionMode}". Valid values: ${PERMISSION_MODES.join(", ")}`
      );
    }
  }
  return {
    serverName: "Claude in Chrome",
    logger,
    socketPath: getSecureSocketPath(),
    getSocketPaths: getAllSocketPaths,
    clientTypeId: "claude-code",
    onAuthenticationError: () => {
      logger.warn(
        "Authentication error occurred. Please ensure you are logged into the Blaude browser extension with the same claude.ai account as Blaude."
      );
    },
    onToolCallDisconnected: () => {
      return `Browser extension is not connected. Please ensure the Blaude browser extension is installed and running (${EXTENSION_DOWNLOAD_URL}), and that you are logged into claude.ai with the same account as Blaude. If this is your first time connecting to Chrome, you may need to restart Chrome for the installation to take effect. If you continue to experience issues, please report a bug: ${BUG_REPORT_URL}`;
    },
    onExtensionPaired: (deviceId, name) => {
      saveGlobalConfig((config) => {
        if (config.chromeExtension?.pairedDeviceId === deviceId && config.chromeExtension?.pairedDeviceName === name) {
          return config;
        }
        return {
          ...config,
          chromeExtension: {
            pairedDeviceId: deviceId,
            pairedDeviceName: name
          }
        };
      });
      logger.info(`Paired with "${name}" (${deviceId.slice(0, 8)})`);
    },
    getPersistedDeviceId: () => {
      return getGlobalConfig().chromeExtension?.pairedDeviceId;
    },
    ...chromeBridgeUrl && {
      bridgeConfig: {
        url: chromeBridgeUrl,
        getUserId: async () => {
          return getGlobalConfig().oauthAccount?.accountUuid;
        },
        getOAuthToken: async () => {
          return getClaudeAIOAuthTokens()?.accessToken ?? "";
        },
        ...isLocalBridge() && { devUserId: "dev_user_local" }
      }
    },
    ...initialPermissionMode && { initialPermissionMode },
    // Wire inference for the browser_task tool — the chrome-mcp server runs
    // a lightning-mode agent loop in Node and calls the extension's
    // lightning_turn tool once per iteration for execution.
    //
    // Ant-only: the extension's lightning_turn is build-time-gated via
    // import.meta.env.ANT_ONLY_BUILD — the whole lightning/ module graph is
    // tree-shaken from the public extension build (build:prod greps for a
    // marker to verify). Without this injection, the Node MCP server's
    // ListTools also filters browser_task + lightning_turn out, so external
    // users never see the tools advertised. Three independent gates.
    //
    // Types inlined: AnthropicMessagesRequest/Response live in
    // @ant/claude-for-chrome-mcp@0.4.0 which isn't published yet. CI installs
    // 0.3.0. The callAnthropicMessages field is also 0.4.0-only, but spreading
    // an extra property into ClaudeForChromeContext is fine against either
    // version — 0.3.0 sees an unknown field (allowed in spread), 0.4.0 sees a
    // structurally-matching one. Once 0.4.0 is published, this can switch to
    // the package's exported types and the dep can be bumped.
    ...process.env.USER_TYPE === "ant" && {
      callAnthropicMessages: async (req) => {
        const response = await sideQuery({
          model: req.model,
          system: req.system,
          messages: req.messages,
          max_tokens: req.max_tokens,
          stop_sequences: req.stop_sequences,
          signal: req.signal,
          skipSystemPromptPrefix: true,
          tools: [],
          querySource: "chrome_mcp"
        });
        const textBlocks = [];
        for (const b of response.content) {
          if (b.type === "text") {
            textBlocks.push({ type: "text", text: b.text });
          }
        }
        return {
          content: textBlocks,
          stop_reason: response.stop_reason,
          usage: {
            input_tokens: response.usage.input_tokens,
            output_tokens: response.usage.output_tokens
          }
        };
      }
    },
    trackEvent: (eventName, metadata) => {
      const safeMetadata = {};
      if (metadata) {
        for (const [key, value] of Object.entries(metadata)) {
          const safeKey = key === "status" ? "bridge_status" : key;
          if (typeof value === "boolean" || typeof value === "number") {
            safeMetadata[safeKey] = value;
          } else if (typeof value === "string" && SAFE_BRIDGE_STRING_KEYS.has(safeKey)) {
            safeMetadata[safeKey] = value;
          }
        }
      }
      logEvent(eventName, safeMetadata);
    }
  };
}
async function runClaudeInChromeMcpServer() {
  enableConfigs();
  initializeAnalyticsSink();
  const context = createChromeContext();
  const server = createClaudeForChromeMcpServer(context);
  const transport = new StdioServerTransport();
  let exiting = false;
  const shutdownAndExit = async () => {
    if (exiting) {
      return;
    }
    exiting = true;
    await shutdown1PEventLogging();
    await shutdownDatadog();
    process.exit(0);
  };
  process.stdin.on("end", () => void shutdownAndExit());
  process.stdin.on("error", () => void shutdownAndExit());
  logForDebugging("[Claude in Chrome] Starting MCP server");
  await server.connect(transport);
  logForDebugging("[Claude in Chrome] MCP server started");
}
var EXTENSION_DOWNLOAD_URL, BUG_REPORT_URL, SAFE_BRIDGE_STRING_KEYS, PERMISSION_MODES, DebugLogger;
var init_mcpServer = __esm({
  "src/utils/claudeInChrome/mcpServer.ts"() {
    init_ant_claude_for_chrome_mcp();
    init_stdio();
    init_datadog();
    init_firstPartyEventLogger();
    init_growthbook();
    init_analytics();
    init_sink();
    init_auth();
    init_config();
    init_debug();
    init_envUtils();
    init_sideQuery();
    init_common();
    EXTENSION_DOWNLOAD_URL = "https://claude.ai/chrome";
    BUG_REPORT_URL = "https://github.com/anthropics/claude-code/issues/new?labels=bug,claude-in-chrome";
    SAFE_BRIDGE_STRING_KEYS = /* @__PURE__ */ new Set([
      "bridge_status",
      "error_type",
      "tool_name"
    ]);
    PERMISSION_MODES = [
      "ask",
      "skip_all_permission_checks",
      "follow_a_plan"
    ];
    DebugLogger = class {
      silly(message, ...args) {
        logForDebugging(format(message, ...args), { level: "debug" });
      }
      debug(message, ...args) {
        logForDebugging(format(message, ...args), { level: "debug" });
      }
      info(message, ...args) {
        logForDebugging(format(message, ...args), { level: "info" });
      }
      warn(message, ...args) {
        logForDebugging(format(message, ...args), { level: "warn" });
      }
      error(message, ...args) {
        logForDebugging(format(message, ...args), { level: "error" });
      }
    };
  }
});
init_mcpServer();
export {
  createChromeContext,
  runClaudeInChromeMcpServer
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL2NsYXVkZUluQ2hyb21lL21jcFNlcnZlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtcbiAgdHlwZSBDbGF1ZGVGb3JDaHJvbWVDb250ZXh0LFxuICBjcmVhdGVDbGF1ZGVGb3JDaHJvbWVNY3BTZXJ2ZXIsXG4gIHR5cGUgTG9nZ2VyLFxuICB0eXBlIFBlcm1pc3Npb25Nb2RlLFxufSBmcm9tICdAYW50L2NsYXVkZS1mb3ItY2hyb21lLW1jcCdcbmltcG9ydCB7IFN0ZGlvU2VydmVyVHJhbnNwb3J0IH0gZnJvbSAnQG1vZGVsY29udGV4dHByb3RvY29sL3Nkay9zZXJ2ZXIvc3RkaW8uanMnXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICd1dGlsJ1xuaW1wb3J0IHsgc2h1dGRvd25EYXRhZG9nIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5hbHl0aWNzL2RhdGFkb2cuanMnXG5pbXBvcnQgeyBzaHV0ZG93bjFQRXZlbnRMb2dnaW5nIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5hbHl0aWNzL2ZpcnN0UGFydHlFdmVudExvZ2dlci5qcydcbmltcG9ydCB7IGdldEZlYXR1cmVWYWx1ZV9DQUNIRURfTUFZX0JFX1NUQUxFIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5hbHl0aWNzL2dyb3d0aGJvb2suanMnXG5pbXBvcnQge1xuICB0eXBlIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gIGxvZ0V2ZW50LFxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbmFseXRpY3MvaW5kZXguanMnXG5pbXBvcnQgeyBpbml0aWFsaXplQW5hbHl0aWNzU2luayB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FuYWx5dGljcy9zaW5rLmpzJ1xuaW1wb3J0IHsgZ2V0Q2xhdWRlQUlPQXV0aFRva2VucyB9IGZyb20gJy4uL2F1dGguanMnXG5pbXBvcnQgeyBlbmFibGVDb25maWdzLCBnZXRHbG9iYWxDb25maWcsIHNhdmVHbG9iYWxDb25maWcgfSBmcm9tICcuLi9jb25maWcuanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuLi9kZWJ1Zy5qcydcbmltcG9ydCB7IGlzRW52VHJ1dGh5IH0gZnJvbSAnLi4vZW52VXRpbHMuanMnXG5pbXBvcnQgeyBzaWRlUXVlcnkgfSBmcm9tICcuLi9zaWRlUXVlcnkuanMnXG5pbXBvcnQgeyBnZXRBbGxTb2NrZXRQYXRocywgZ2V0U2VjdXJlU29ja2V0UGF0aCB9IGZyb20gJy4vY29tbW9uLmpzJ1xuXG5jb25zdCBFWFRFTlNJT05fRE9XTkxPQURfVVJMID0gJ2h0dHBzOi8vY2xhdWRlLmFpL2Nocm9tZSdcbmNvbnN0IEJVR19SRVBPUlRfVVJMID1cbiAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbnRocm9waWNzL2NsYXVkZS1jb2RlL2lzc3Vlcy9uZXc/bGFiZWxzPWJ1ZyxjbGF1ZGUtaW4tY2hyb21lJ1xuXG4vLyBTdHJpbmcgbWV0YWRhdGEga2V5cyBzYWZlIHRvIGZvcndhcmQgdG8gYW5hbHl0aWNzLiBLZXlzIGxpa2UgZXJyb3JfbWVzc2FnZVxuLy8gYXJlIGV4Y2x1ZGVkIGJlY2F1c2UgdGhleSBjb3VsZCBjb250YWluIHBhZ2UgY29udGVudCBvciB1c2VyIGRhdGEuXG5jb25zdCBTQUZFX0JSSURHRV9TVFJJTkdfS0VZUyA9IG5ldyBTZXQoW1xuICAnYnJpZGdlX3N0YXR1cycsXG4gICdlcnJvcl90eXBlJyxcbiAgJ3Rvb2xfbmFtZScsXG5dKVxuXG5jb25zdCBQRVJNSVNTSU9OX01PREVTOiByZWFkb25seSBQZXJtaXNzaW9uTW9kZVtdID0gW1xuICAnYXNrJyxcbiAgJ3NraXBfYWxsX3Blcm1pc3Npb25fY2hlY2tzJyxcbiAgJ2ZvbGxvd19hX3BsYW4nLFxuXVxuXG5mdW5jdGlvbiBpc1Blcm1pc3Npb25Nb2RlKHJhdzogc3RyaW5nKTogcmF3IGlzIFBlcm1pc3Npb25Nb2RlIHtcbiAgcmV0dXJuIFBFUk1JU1NJT05fTU9ERVMuc29tZShtID0+IG0gPT09IHJhdylcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgQ2hyb21lIGJyaWRnZSBVUkwgYmFzZWQgb24gZW52aXJvbm1lbnQgYW5kIGZlYXR1cmUgZmxhZy5cbiAqIEJyaWRnZSBpcyB1c2VkIHdoZW4gdGhlIGZlYXR1cmUgZmxhZyBpcyBlbmFibGVkOyBhbnQgdXNlcnMgYWx3YXlzIGdldFxuICogYnJpZGdlLiBBUEkga2V5IC8gM1AgdXNlcnMgZmFsbCBiYWNrIHRvIG5hdGl2ZSBtZXNzYWdpbmcuXG4gKi9cbmZ1bmN0aW9uIGdldENocm9tZUJyaWRnZVVybCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICBjb25zdCBicmlkZ2VFbmFibGVkID1cbiAgICBwcm9jZXNzLmVudi5VU0VSX1RZUEUgPT09ICdhbnQnIHx8XG4gICAgZ2V0RmVhdHVyZVZhbHVlX0NBQ0hFRF9NQVlfQkVfU1RBTEUoJ3Rlbmd1X2NvcHBlcl9icmlkZ2UnLCBmYWxzZSlcblxuICBpZiAoIWJyaWRnZUVuYWJsZWQpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBpZiAoXG4gICAgaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuVVNFX0xPQ0FMX09BVVRIKSB8fFxuICAgIGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkxPQ0FMX0JSSURHRSlcbiAgKSB7XG4gICAgcmV0dXJuICd3czovL2xvY2FsaG9zdDo4NzY1J1xuICB9XG5cbiAgaWYgKGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LlVTRV9TVEFHSU5HX09BVVRIKSkge1xuICAgIHJldHVybiAnd3NzOi8vYnJpZGdlLXN0YWdpbmcuY2xhdWRldXNlcmNvbnRlbnQuY29tJ1xuICB9XG5cbiAgcmV0dXJuICd3c3M6Ly9icmlkZ2UuY2xhdWRldXNlcmNvbnRlbnQuY29tJ1xufVxuXG5mdW5jdGlvbiBpc0xvY2FsQnJpZGdlKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LlVTRV9MT0NBTF9PQVVUSCkgfHxcbiAgICBpc0VudlRydXRoeShwcm9jZXNzLmVudi5MT0NBTF9CUklER0UpXG4gIClcbn1cblxuLyoqXG4gKiBCdWlsZCB0aGUgQ2xhdWRlRm9yQ2hyb21lQ29udGV4dCB1c2VkIGJ5IGJvdGggdGhlIHN1YnByb2Nlc3MgTUNQIHNlcnZlclxuICogYW5kIHRoZSBpbi1wcm9jZXNzIHBhdGggaW4gdGhlIE1DUCBjbGllbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDaHJvbWVDb250ZXh0KFxuICBlbnY/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuKTogQ2xhdWRlRm9yQ2hyb21lQ29udGV4dCB7XG4gIGNvbnN0IGxvZ2dlciA9IG5ldyBEZWJ1Z0xvZ2dlcigpXG4gIGNvbnN0IGNocm9tZUJyaWRnZVVybCA9IGdldENocm9tZUJyaWRnZVVybCgpXG4gIGxvZ2dlci5pbmZvKGBCcmlkZ2UgVVJMOiAke2Nocm9tZUJyaWRnZVVybCA/PyAnbm9uZSAodXNpbmcgbmF0aXZlIHNvY2tldCknfWApXG4gIGNvbnN0IHJhd1Blcm1pc3Npb25Nb2RlID1cbiAgICBlbnY/LkNMQVVERV9DSFJPTUVfUEVSTUlTU0lPTl9NT0RFID8/XG4gICAgcHJvY2Vzcy5lbnYuQ0xBVURFX0NIUk9NRV9QRVJNSVNTSU9OX01PREVcbiAgbGV0IGluaXRpYWxQZXJtaXNzaW9uTW9kZTogUGVybWlzc2lvbk1vZGUgfCB1bmRlZmluZWRcbiAgaWYgKHJhd1Blcm1pc3Npb25Nb2RlKSB7XG4gICAgaWYgKGlzUGVybWlzc2lvbk1vZGUocmF3UGVybWlzc2lvbk1vZGUpKSB7XG4gICAgICBpbml0aWFsUGVybWlzc2lvbk1vZGUgPSByYXdQZXJtaXNzaW9uTW9kZVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2dnZXIud2FybihcbiAgICAgICAgYEludmFsaWQgQ0xBVURFX0NIUk9NRV9QRVJNSVNTSU9OX01PREUgXCIke3Jhd1Blcm1pc3Npb25Nb2RlfVwiLiBWYWxpZCB2YWx1ZXM6ICR7UEVSTUlTU0lPTl9NT0RFUy5qb2luKCcsICcpfWAsXG4gICAgICApXG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgc2VydmVyTmFtZTogJ0NsYXVkZSBpbiBDaHJvbWUnLFxuICAgIGxvZ2dlcixcbiAgICBzb2NrZXRQYXRoOiBnZXRTZWN1cmVTb2NrZXRQYXRoKCksXG4gICAgZ2V0U29ja2V0UGF0aHM6IGdldEFsbFNvY2tldFBhdGhzLFxuICAgIGNsaWVudFR5cGVJZDogJ2NsYXVkZS1jb2RlJyxcbiAgICBvbkF1dGhlbnRpY2F0aW9uRXJyb3I6ICgpID0+IHtcbiAgICAgIGxvZ2dlci53YXJuKFxuICAgICAgICAnQXV0aGVudGljYXRpb24gZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSBlbnN1cmUgeW91IGFyZSBsb2dnZWQgaW50byB0aGUgQmxhdWRlIGJyb3dzZXIgZXh0ZW5zaW9uIHdpdGggdGhlIHNhbWUgY2xhdWRlLmFpIGFjY291bnQgYXMgQmxhdWRlLicsXG4gICAgICApXG4gICAgfSxcbiAgICBvblRvb2xDYWxsRGlzY29ubmVjdGVkOiAoKSA9PiB7XG4gICAgICByZXR1cm4gYEJyb3dzZXIgZXh0ZW5zaW9uIGlzIG5vdCBjb25uZWN0ZWQuIFBsZWFzZSBlbnN1cmUgdGhlIEJsYXVkZSBicm93c2VyIGV4dGVuc2lvbiBpcyBpbnN0YWxsZWQgYW5kIHJ1bm5pbmcgKCR7RVhURU5TSU9OX0RPV05MT0FEX1VSTH0pLCBhbmQgdGhhdCB5b3UgYXJlIGxvZ2dlZCBpbnRvIGNsYXVkZS5haSB3aXRoIHRoZSBzYW1lIGFjY291bnQgYXMgQmxhdWRlLiBJZiB0aGlzIGlzIHlvdXIgZmlyc3QgdGltZSBjb25uZWN0aW5nIHRvIENocm9tZSwgeW91IG1heSBuZWVkIHRvIHJlc3RhcnQgQ2hyb21lIGZvciB0aGUgaW5zdGFsbGF0aW9uIHRvIHRha2UgZWZmZWN0LiBJZiB5b3UgY29udGludWUgdG8gZXhwZXJpZW5jZSBpc3N1ZXMsIHBsZWFzZSByZXBvcnQgYSBidWc6ICR7QlVHX1JFUE9SVF9VUkx9YFxuICAgIH0sXG4gICAgb25FeHRlbnNpb25QYWlyZWQ6IChkZXZpY2VJZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIHNhdmVHbG9iYWxDb25maWcoY29uZmlnID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNvbmZpZy5jaHJvbWVFeHRlbnNpb24/LnBhaXJlZERldmljZUlkID09PSBkZXZpY2VJZCAmJlxuICAgICAgICAgIGNvbmZpZy5jaHJvbWVFeHRlbnNpb24/LnBhaXJlZERldmljZU5hbWUgPT09IG5hbWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbmZpZ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uY29uZmlnLFxuICAgICAgICAgIGNocm9tZUV4dGVuc2lvbjoge1xuICAgICAgICAgICAgcGFpcmVkRGV2aWNlSWQ6IGRldmljZUlkLFxuICAgICAgICAgICAgcGFpcmVkRGV2aWNlTmFtZTogbmFtZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgbG9nZ2VyLmluZm8oYFBhaXJlZCB3aXRoIFwiJHtuYW1lfVwiICgke2RldmljZUlkLnNsaWNlKDAsIDgpfSlgKVxuICAgIH0sXG4gICAgZ2V0UGVyc2lzdGVkRGV2aWNlSWQ6ICgpID0+IHtcbiAgICAgIHJldHVybiBnZXRHbG9iYWxDb25maWcoKS5jaHJvbWVFeHRlbnNpb24/LnBhaXJlZERldmljZUlkXG4gICAgfSxcbiAgICAuLi4oY2hyb21lQnJpZGdlVXJsICYmIHtcbiAgICAgIGJyaWRnZUNvbmZpZzoge1xuICAgICAgICB1cmw6IGNocm9tZUJyaWRnZVVybCxcbiAgICAgICAgZ2V0VXNlcklkOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGdldEdsb2JhbENvbmZpZygpLm9hdXRoQWNjb3VudD8uYWNjb3VudFV1aWRcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0T0F1dGhUb2tlbjogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBnZXRDbGF1ZGVBSU9BdXRoVG9rZW5zKCk/LmFjY2Vzc1Rva2VuID8/ICcnXG4gICAgICAgIH0sXG4gICAgICAgIC4uLihpc0xvY2FsQnJpZGdlKCkgJiYgeyBkZXZVc2VySWQ6ICdkZXZfdXNlcl9sb2NhbCcgfSksXG4gICAgICB9LFxuICAgIH0pLFxuICAgIC4uLihpbml0aWFsUGVybWlzc2lvbk1vZGUgJiYgeyBpbml0aWFsUGVybWlzc2lvbk1vZGUgfSksXG4gICAgLy8gV2lyZSBpbmZlcmVuY2UgZm9yIHRoZSBicm93c2VyX3Rhc2sgdG9vbCBcdTIwMTQgdGhlIGNocm9tZS1tY3Agc2VydmVyIHJ1bnNcbiAgICAvLyBhIGxpZ2h0bmluZy1tb2RlIGFnZW50IGxvb3AgaW4gTm9kZSBhbmQgY2FsbHMgdGhlIGV4dGVuc2lvbidzXG4gICAgLy8gbGlnaHRuaW5nX3R1cm4gdG9vbCBvbmNlIHBlciBpdGVyYXRpb24gZm9yIGV4ZWN1dGlvbi5cbiAgICAvL1xuICAgIC8vIEFudC1vbmx5OiB0aGUgZXh0ZW5zaW9uJ3MgbGlnaHRuaW5nX3R1cm4gaXMgYnVpbGQtdGltZS1nYXRlZCB2aWFcbiAgICAvLyBpbXBvcnQubWV0YS5lbnYuQU5UX09OTFlfQlVJTEQgXHUyMDE0IHRoZSB3aG9sZSBsaWdodG5pbmcvIG1vZHVsZSBncmFwaCBpc1xuICAgIC8vIHRyZWUtc2hha2VuIGZyb20gdGhlIHB1YmxpYyBleHRlbnNpb24gYnVpbGQgKGJ1aWxkOnByb2QgZ3JlcHMgZm9yIGFcbiAgICAvLyBtYXJrZXIgdG8gdmVyaWZ5KS4gV2l0aG91dCB0aGlzIGluamVjdGlvbiwgdGhlIE5vZGUgTUNQIHNlcnZlcidzXG4gICAgLy8gTGlzdFRvb2xzIGFsc28gZmlsdGVycyBicm93c2VyX3Rhc2sgKyBsaWdodG5pbmdfdHVybiBvdXQsIHNvIGV4dGVybmFsXG4gICAgLy8gdXNlcnMgbmV2ZXIgc2VlIHRoZSB0b29scyBhZHZlcnRpc2VkLiBUaHJlZSBpbmRlcGVuZGVudCBnYXRlcy5cbiAgICAvL1xuICAgIC8vIFR5cGVzIGlubGluZWQ6IEFudGhyb3BpY01lc3NhZ2VzUmVxdWVzdC9SZXNwb25zZSBsaXZlIGluXG4gICAgLy8gQGFudC9jbGF1ZGUtZm9yLWNocm9tZS1tY3BAMC40LjAgd2hpY2ggaXNuJ3QgcHVibGlzaGVkIHlldC4gQ0kgaW5zdGFsbHNcbiAgICAvLyAwLjMuMC4gVGhlIGNhbGxBbnRocm9waWNNZXNzYWdlcyBmaWVsZCBpcyBhbHNvIDAuNC4wLW9ubHksIGJ1dCBzcHJlYWRpbmdcbiAgICAvLyBhbiBleHRyYSBwcm9wZXJ0eSBpbnRvIENsYXVkZUZvckNocm9tZUNvbnRleHQgaXMgZmluZSBhZ2FpbnN0IGVpdGhlclxuICAgIC8vIHZlcnNpb24gXHUyMDE0IDAuMy4wIHNlZXMgYW4gdW5rbm93biBmaWVsZCAoYWxsb3dlZCBpbiBzcHJlYWQpLCAwLjQuMCBzZWVzIGFcbiAgICAvLyBzdHJ1Y3R1cmFsbHktbWF0Y2hpbmcgb25lLiBPbmNlIDAuNC4wIGlzIHB1Ymxpc2hlZCwgdGhpcyBjYW4gc3dpdGNoIHRvXG4gICAgLy8gdGhlIHBhY2thZ2UncyBleHBvcnRlZCB0eXBlcyBhbmQgdGhlIGRlcCBjYW4gYmUgYnVtcGVkLlxuICAgIC4uLihwcm9jZXNzLmVudi5VU0VSX1RZUEUgPT09ICdhbnQnICYmIHtcbiAgICAgIGNhbGxBbnRocm9waWNNZXNzYWdlczogYXN5bmMgKHJlcToge1xuICAgICAgICBtb2RlbDogc3RyaW5nXG4gICAgICAgIG1heF90b2tlbnM6IG51bWJlclxuICAgICAgICBzeXN0ZW06IHN0cmluZ1xuICAgICAgICBtZXNzYWdlczogUGFyYW1ldGVyczx0eXBlb2Ygc2lkZVF1ZXJ5PlswXVsnbWVzc2FnZXMnXVxuICAgICAgICBzdG9wX3NlcXVlbmNlcz86IHN0cmluZ1tdXG4gICAgICAgIHNpZ25hbD86IEFib3J0U2lnbmFsXG4gICAgICB9KTogUHJvbWlzZTx7XG4gICAgICAgIGNvbnRlbnQ6IEFycmF5PHsgdHlwZTogJ3RleHQnOyB0ZXh0OiBzdHJpbmcgfT5cbiAgICAgICAgc3RvcF9yZWFzb246IHN0cmluZyB8IG51bGxcbiAgICAgICAgdXNhZ2U/OiB7IGlucHV0X3Rva2VuczogbnVtYmVyOyBvdXRwdXRfdG9rZW5zOiBudW1iZXIgfVxuICAgICAgfT4gPT4ge1xuICAgICAgICAvLyBzaWRlUXVlcnkgaGFuZGxlcyBPQXV0aCBhdHRyaWJ1dGlvbiBmaW5nZXJwcmludCwgcHJveHksIG1vZGVsIGJldGFzLlxuICAgICAgICAvLyBza2lwU3lzdGVtUHJvbXB0UHJlZml4OiB0aGUgbGlnaHRuaW5nIHByb21wdCBpcyBjb21wbGV0ZSBvbiBpdHMgb3duO1xuICAgICAgICAvLyB0aGUgQ0xJIHByZWZpeCB3b3VsZCBkaWx1dGUgdGhlIGJhdGNoaW5nIGluc3RydWN0aW9ucy5cbiAgICAgICAgLy8gdG9vbHM6IFtdIGlzIGxvYWQtYmVhcmluZyBcdTIwMTQgd2l0aG91dCBpdCBTb25uZXQgZW1pdHNcbiAgICAgICAgLy8gPGZ1bmN0aW9uX2NhbGxzPiBYTUwgYmVmb3JlIHRoZSB0ZXh0IGNvbW1hbmRzLiBPcmlnaW5hbFxuICAgICAgICAvLyBsaWdodG5pbmctaGFybmVzcy5qcyAoYXBwcyByZXBvKSBkb2VzIHRoZSBzYW1lLlxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHNpZGVRdWVyeSh7XG4gICAgICAgICAgbW9kZWw6IHJlcS5tb2RlbCxcbiAgICAgICAgICBzeXN0ZW06IHJlcS5zeXN0ZW0sXG4gICAgICAgICAgbWVzc2FnZXM6IHJlcS5tZXNzYWdlcyxcbiAgICAgICAgICBtYXhfdG9rZW5zOiByZXEubWF4X3Rva2VucyxcbiAgICAgICAgICBzdG9wX3NlcXVlbmNlczogcmVxLnN0b3Bfc2VxdWVuY2VzLFxuICAgICAgICAgIHNpZ25hbDogcmVxLnNpZ25hbCxcbiAgICAgICAgICBza2lwU3lzdGVtUHJvbXB0UHJlZml4OiB0cnVlLFxuICAgICAgICAgIHRvb2xzOiBbXSxcbiAgICAgICAgICBxdWVyeVNvdXJjZTogJ2Nocm9tZV9tY3AnLFxuICAgICAgICB9KVxuICAgICAgICAvLyBCZXRhQ29udGVudEJsb2NrIGlzIFRleHRCbG9jayB8IFRoaW5raW5nQmxvY2sgfCBUb29sVXNlQmxvY2sgfCAuLi5cbiAgICAgICAgLy8gT25seSB0ZXh0IGJsb2NrcyBjYXJyeSB0aGUgbW9kZWwncyBjb21tYW5kIG91dHB1dC5cbiAgICAgICAgY29uc3QgdGV4dEJsb2NrczogQXJyYXk8eyB0eXBlOiAndGV4dCc7IHRleHQ6IHN0cmluZyB9PiA9IFtdXG4gICAgICAgIGZvciAoY29uc3QgYiBvZiByZXNwb25zZS5jb250ZW50KSB7XG4gICAgICAgICAgaWYgKGIudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgICB0ZXh0QmxvY2tzLnB1c2goeyB0eXBlOiAndGV4dCcsIHRleHQ6IGIudGV4dCB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvbnRlbnQ6IHRleHRCbG9ja3MsXG4gICAgICAgICAgc3RvcF9yZWFzb246IHJlc3BvbnNlLnN0b3BfcmVhc29uLFxuICAgICAgICAgIHVzYWdlOiB7XG4gICAgICAgICAgICBpbnB1dF90b2tlbnM6IHJlc3BvbnNlLnVzYWdlLmlucHV0X3Rva2VucyxcbiAgICAgICAgICAgIG91dHB1dF90b2tlbnM6IHJlc3BvbnNlLnVzYWdlLm91dHB1dF90b2tlbnMsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KSxcbiAgICB0cmFja0V2ZW50OiAoZXZlbnROYW1lLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgY29uc3Qgc2FmZU1ldGFkYXRhOiB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106XG4gICAgICAgICAgfCBib29sZWFuXG4gICAgICAgICAgfCBudW1iZXJcbiAgICAgICAgICB8IEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFNcbiAgICAgICAgICB8IHVuZGVmaW5lZFxuICAgICAgfSA9IHt9XG4gICAgICBpZiAobWV0YWRhdGEpIHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMobWV0YWRhdGEpKSB7XG4gICAgICAgICAgLy8gUmVuYW1lICdzdGF0dXMnIHRvICdicmlkZ2Vfc3RhdHVzJyB0byBhdm9pZCBEYXRhZG9nJ3MgcmVzZXJ2ZWQgZmllbGRcbiAgICAgICAgICBjb25zdCBzYWZlS2V5ID0ga2V5ID09PSAnc3RhdHVzJyA/ICdicmlkZ2Vfc3RhdHVzJyA6IGtleVxuICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBzYWZlTWV0YWRhdGFbc2FmZUtleV0gPSB2YWx1ZVxuICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgICBTQUZFX0JSSURHRV9TVFJJTkdfS0VZUy5oYXMoc2FmZUtleSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIE9ubHkgZm9yd2FyZCBhbGxvd2xpc3RlZCBzdHJpbmcga2V5cyBcdTIwMTQgZmllbGRzIGxpa2UgZXJyb3JfbWVzc2FnZVxuICAgICAgICAgICAgLy8gY291bGQgY29udGFpbiBwYWdlIGNvbnRlbnQgb3IgdXNlciBkYXRhXG4gICAgICAgICAgICBzYWZlTWV0YWRhdGFbc2FmZUtleV0gPVxuICAgICAgICAgICAgICB2YWx1ZSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsb2dFdmVudChldmVudE5hbWUsIHNhZmVNZXRhZGF0YSlcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBydW5DbGF1ZGVJbkNocm9tZU1jcFNlcnZlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgZW5hYmxlQ29uZmlncygpXG4gIGluaXRpYWxpemVBbmFseXRpY3NTaW5rKClcbiAgY29uc3QgY29udGV4dCA9IGNyZWF0ZUNocm9tZUNvbnRleHQoKVxuXG4gIGNvbnN0IHNlcnZlciA9IGNyZWF0ZUNsYXVkZUZvckNocm9tZU1jcFNlcnZlcihjb250ZXh0KVxuICBjb25zdCB0cmFuc3BvcnQgPSBuZXcgU3RkaW9TZXJ2ZXJUcmFuc3BvcnQoKVxuXG4gIC8vIEV4aXQgd2hlbiBwYXJlbnQgcHJvY2VzcyBkaWVzIChzdGRpbiBwaXBlIGNsb3NlcykuXG4gIC8vIEZsdXNoIGFuYWx5dGljcyBiZWZvcmUgZXhpdGluZyBzbyBmaW5hbC1iYXRjaCBldmVudHMgKGUuZy4gZGlzY29ubmVjdCkgYXJlbid0IGxvc3QuXG4gIGxldCBleGl0aW5nID0gZmFsc2VcbiAgY29uc3Qgc2h1dGRvd25BbmRFeGl0ID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGlmIChleGl0aW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgZXhpdGluZyA9IHRydWVcbiAgICBhd2FpdCBzaHV0ZG93bjFQRXZlbnRMb2dnaW5nKClcbiAgICBhd2FpdCBzaHV0ZG93bkRhdGFkb2coKVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjdXN0b20tcnVsZXMvbm8tcHJvY2Vzcy1leGl0XG4gICAgcHJvY2Vzcy5leGl0KDApXG4gIH1cbiAgcHJvY2Vzcy5zdGRpbi5vbignZW5kJywgKCkgPT4gdm9pZCBzaHV0ZG93bkFuZEV4aXQoKSlcbiAgcHJvY2Vzcy5zdGRpbi5vbignZXJyb3InLCAoKSA9PiB2b2lkIHNodXRkb3duQW5kRXhpdCgpKVxuXG4gIGxvZ0ZvckRlYnVnZ2luZygnW0NsYXVkZSBpbiBDaHJvbWVdIFN0YXJ0aW5nIE1DUCBzZXJ2ZXInKVxuICBhd2FpdCBzZXJ2ZXIuY29ubmVjdCh0cmFuc3BvcnQpXG4gIGxvZ0ZvckRlYnVnZ2luZygnW0NsYXVkZSBpbiBDaHJvbWVdIE1DUCBzZXJ2ZXIgc3RhcnRlZCcpXG59XG5cbmNsYXNzIERlYnVnTG9nZ2VyIGltcGxlbWVudHMgTG9nZ2VyIHtcbiAgc2lsbHkobWVzc2FnZTogc3RyaW5nLCAuLi5hcmdzOiB1bmtub3duW10pOiB2b2lkIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoZm9ybWF0KG1lc3NhZ2UsIC4uLmFyZ3MpLCB7IGxldmVsOiAnZGVidWcnIH0pXG4gIH1cbiAgZGVidWcobWVzc2FnZTogc3RyaW5nLCAuLi5hcmdzOiB1bmtub3duW10pOiB2b2lkIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoZm9ybWF0KG1lc3NhZ2UsIC4uLmFyZ3MpLCB7IGxldmVsOiAnZGVidWcnIH0pXG4gIH1cbiAgaW5mbyhtZXNzYWdlOiBzdHJpbmcsIC4uLmFyZ3M6IHVua25vd25bXSk6IHZvaWQge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhmb3JtYXQobWVzc2FnZSwgLi4uYXJncyksIHsgbGV2ZWw6ICdpbmZvJyB9KVxuICB9XG4gIHdhcm4obWVzc2FnZTogc3RyaW5nLCAuLi5hcmdzOiB1bmtub3duW10pOiB2b2lkIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoZm9ybWF0KG1lc3NhZ2UsIC4uLmFyZ3MpLCB7IGxldmVsOiAnd2FybicgfSlcbiAgfVxuICBlcnJvcihtZXNzYWdlOiBzdHJpbmcsIC4uLmFyZ3M6IHVua25vd25bXSk6IHZvaWQge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhmb3JtYXQobWVzc2FnZSwgLi4uYXJncyksIHsgbGV2ZWw6ICdlcnJvcicgfSlcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxTQUFTLGNBQWM7QUFrQ3ZCLFNBQVMsaUJBQWlC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
