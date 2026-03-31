#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  StdioServerTransport,
  init_stdio
} from "./chunk-K3XGYRJG.mjs";
import {
  init_sink,
  initializeAnalyticsSink
} from "./chunk-MIXTJ7VY.mjs";
import {
  createClaudeForChromeMcpServer,
  init_ant_claude_for_chrome_mcp
} from "./chunk-7DA2PBIX.mjs";
import {
  init_sideQuery,
  sideQuery
} from "./chunk-OPLSBIOC.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-SR5JKAMQ.mjs";
import "./chunk-RUHH7ZNU.mjs";
import {
  getAllSocketPaths,
  getSecureSocketPath,
  init_common
} from "./chunk-NPSF3VOX.mjs";
import "./chunk-P2O4HXJJ.mjs";
import "./chunk-ADZQUMT7.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-M22WMPMZ.mjs";
import "./chunk-66JTK2MJ.mjs";
import "./chunk-2LTMY2QU.mjs";
import "./chunk-WJKMR27I.mjs";
import {
  init_datadog,
  shutdownDatadog
} from "./chunk-EATKTAOV.mjs";
import "./chunk-AB7U5P7O.mjs";
import "./chunk-SEJU7JU7.mjs";
import "./chunk-ABRSTIS2.mjs";
import "./chunk-L22EUB4Z.mjs";
import "./chunk-NE3WJ556.mjs";
import "./chunk-4BEDQUYS.mjs";
import "./chunk-I4JSDM2A.mjs";
import "./chunk-GQIWFVMV.mjs";
import "./chunk-R2NMUWG6.mjs";
import "./chunk-XTFZIHQR.mjs";
import "./chunk-X6KULBXG.mjs";
import "./chunk-ORS2TTME.mjs";
import "./chunk-IAEMXMG4.mjs";
import "./chunk-WZXBZQWR.mjs";
import "./chunk-J7TDGLE4.mjs";
import "./chunk-HUHT3U2I.mjs";
import "./chunk-MPXK3SNP.mjs";
import "./chunk-C5B5VR2F.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-L4LQXE4X.mjs";
import "./chunk-H6COQF52.mjs";
import "./chunk-5DUAEYU5.mjs";
import "./chunk-4HSGHMYS.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import "./chunk-IVRGECFY.mjs";
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
} from "./chunk-Z6CSO4BY.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-Q64VCQQA.mjs";
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
        "Authentication error occurred. Please ensure you are logged into the Claude browser extension with the same claude.ai account as Claude Code."
      );
    },
    onToolCallDisconnected: () => {
      return `Browser extension is not connected. Please ensure the Claude browser extension is installed and running (${EXTENSION_DOWNLOAD_URL}), and that you are logged into claude.ai with the same account as Claude Code. If this is your first time connecting to Chrome, you may need to restart Chrome for the installation to take effect. If you continue to experience issues, please report a bug: ${BUG_REPORT_URL}`;
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL2NsYXVkZUluQ2hyb21lL21jcFNlcnZlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtcbiAgdHlwZSBDbGF1ZGVGb3JDaHJvbWVDb250ZXh0LFxuICBjcmVhdGVDbGF1ZGVGb3JDaHJvbWVNY3BTZXJ2ZXIsXG4gIHR5cGUgTG9nZ2VyLFxuICB0eXBlIFBlcm1pc3Npb25Nb2RlLFxufSBmcm9tICdAYW50L2NsYXVkZS1mb3ItY2hyb21lLW1jcCdcbmltcG9ydCB7IFN0ZGlvU2VydmVyVHJhbnNwb3J0IH0gZnJvbSAnQG1vZGVsY29udGV4dHByb3RvY29sL3Nkay9zZXJ2ZXIvc3RkaW8uanMnXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICd1dGlsJ1xuaW1wb3J0IHsgc2h1dGRvd25EYXRhZG9nIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5hbHl0aWNzL2RhdGFkb2cuanMnXG5pbXBvcnQgeyBzaHV0ZG93bjFQRXZlbnRMb2dnaW5nIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5hbHl0aWNzL2ZpcnN0UGFydHlFdmVudExvZ2dlci5qcydcbmltcG9ydCB7IGdldEZlYXR1cmVWYWx1ZV9DQUNIRURfTUFZX0JFX1NUQUxFIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5hbHl0aWNzL2dyb3d0aGJvb2suanMnXG5pbXBvcnQge1xuICB0eXBlIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gIGxvZ0V2ZW50LFxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbmFseXRpY3MvaW5kZXguanMnXG5pbXBvcnQgeyBpbml0aWFsaXplQW5hbHl0aWNzU2luayB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FuYWx5dGljcy9zaW5rLmpzJ1xuaW1wb3J0IHsgZ2V0Q2xhdWRlQUlPQXV0aFRva2VucyB9IGZyb20gJy4uL2F1dGguanMnXG5pbXBvcnQgeyBlbmFibGVDb25maWdzLCBnZXRHbG9iYWxDb25maWcsIHNhdmVHbG9iYWxDb25maWcgfSBmcm9tICcuLi9jb25maWcuanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuLi9kZWJ1Zy5qcydcbmltcG9ydCB7IGlzRW52VHJ1dGh5IH0gZnJvbSAnLi4vZW52VXRpbHMuanMnXG5pbXBvcnQgeyBzaWRlUXVlcnkgfSBmcm9tICcuLi9zaWRlUXVlcnkuanMnXG5pbXBvcnQgeyBnZXRBbGxTb2NrZXRQYXRocywgZ2V0U2VjdXJlU29ja2V0UGF0aCB9IGZyb20gJy4vY29tbW9uLmpzJ1xuXG5jb25zdCBFWFRFTlNJT05fRE9XTkxPQURfVVJMID0gJ2h0dHBzOi8vY2xhdWRlLmFpL2Nocm9tZSdcbmNvbnN0IEJVR19SRVBPUlRfVVJMID1cbiAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbnRocm9waWNzL2NsYXVkZS1jb2RlL2lzc3Vlcy9uZXc/bGFiZWxzPWJ1ZyxjbGF1ZGUtaW4tY2hyb21lJ1xuXG4vLyBTdHJpbmcgbWV0YWRhdGEga2V5cyBzYWZlIHRvIGZvcndhcmQgdG8gYW5hbHl0aWNzLiBLZXlzIGxpa2UgZXJyb3JfbWVzc2FnZVxuLy8gYXJlIGV4Y2x1ZGVkIGJlY2F1c2UgdGhleSBjb3VsZCBjb250YWluIHBhZ2UgY29udGVudCBvciB1c2VyIGRhdGEuXG5jb25zdCBTQUZFX0JSSURHRV9TVFJJTkdfS0VZUyA9IG5ldyBTZXQoW1xuICAnYnJpZGdlX3N0YXR1cycsXG4gICdlcnJvcl90eXBlJyxcbiAgJ3Rvb2xfbmFtZScsXG5dKVxuXG5jb25zdCBQRVJNSVNTSU9OX01PREVTOiByZWFkb25seSBQZXJtaXNzaW9uTW9kZVtdID0gW1xuICAnYXNrJyxcbiAgJ3NraXBfYWxsX3Blcm1pc3Npb25fY2hlY2tzJyxcbiAgJ2ZvbGxvd19hX3BsYW4nLFxuXVxuXG5mdW5jdGlvbiBpc1Blcm1pc3Npb25Nb2RlKHJhdzogc3RyaW5nKTogcmF3IGlzIFBlcm1pc3Npb25Nb2RlIHtcbiAgcmV0dXJuIFBFUk1JU1NJT05fTU9ERVMuc29tZShtID0+IG0gPT09IHJhdylcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgQ2hyb21lIGJyaWRnZSBVUkwgYmFzZWQgb24gZW52aXJvbm1lbnQgYW5kIGZlYXR1cmUgZmxhZy5cbiAqIEJyaWRnZSBpcyB1c2VkIHdoZW4gdGhlIGZlYXR1cmUgZmxhZyBpcyBlbmFibGVkOyBhbnQgdXNlcnMgYWx3YXlzIGdldFxuICogYnJpZGdlLiBBUEkga2V5IC8gM1AgdXNlcnMgZmFsbCBiYWNrIHRvIG5hdGl2ZSBtZXNzYWdpbmcuXG4gKi9cbmZ1bmN0aW9uIGdldENocm9tZUJyaWRnZVVybCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICBjb25zdCBicmlkZ2VFbmFibGVkID1cbiAgICBwcm9jZXNzLmVudi5VU0VSX1RZUEUgPT09ICdhbnQnIHx8XG4gICAgZ2V0RmVhdHVyZVZhbHVlX0NBQ0hFRF9NQVlfQkVfU1RBTEUoJ3Rlbmd1X2NvcHBlcl9icmlkZ2UnLCBmYWxzZSlcblxuICBpZiAoIWJyaWRnZUVuYWJsZWQpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBpZiAoXG4gICAgaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuVVNFX0xPQ0FMX09BVVRIKSB8fFxuICAgIGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkxPQ0FMX0JSSURHRSlcbiAgKSB7XG4gICAgcmV0dXJuICd3czovL2xvY2FsaG9zdDo4NzY1J1xuICB9XG5cbiAgaWYgKGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LlVTRV9TVEFHSU5HX09BVVRIKSkge1xuICAgIHJldHVybiAnd3NzOi8vYnJpZGdlLXN0YWdpbmcuY2xhdWRldXNlcmNvbnRlbnQuY29tJ1xuICB9XG5cbiAgcmV0dXJuICd3c3M6Ly9icmlkZ2UuY2xhdWRldXNlcmNvbnRlbnQuY29tJ1xufVxuXG5mdW5jdGlvbiBpc0xvY2FsQnJpZGdlKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LlVTRV9MT0NBTF9PQVVUSCkgfHxcbiAgICBpc0VudlRydXRoeShwcm9jZXNzLmVudi5MT0NBTF9CUklER0UpXG4gIClcbn1cblxuLyoqXG4gKiBCdWlsZCB0aGUgQ2xhdWRlRm9yQ2hyb21lQ29udGV4dCB1c2VkIGJ5IGJvdGggdGhlIHN1YnByb2Nlc3MgTUNQIHNlcnZlclxuICogYW5kIHRoZSBpbi1wcm9jZXNzIHBhdGggaW4gdGhlIE1DUCBjbGllbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDaHJvbWVDb250ZXh0KFxuICBlbnY/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuKTogQ2xhdWRlRm9yQ2hyb21lQ29udGV4dCB7XG4gIGNvbnN0IGxvZ2dlciA9IG5ldyBEZWJ1Z0xvZ2dlcigpXG4gIGNvbnN0IGNocm9tZUJyaWRnZVVybCA9IGdldENocm9tZUJyaWRnZVVybCgpXG4gIGxvZ2dlci5pbmZvKGBCcmlkZ2UgVVJMOiAke2Nocm9tZUJyaWRnZVVybCA/PyAnbm9uZSAodXNpbmcgbmF0aXZlIHNvY2tldCknfWApXG4gIGNvbnN0IHJhd1Blcm1pc3Npb25Nb2RlID1cbiAgICBlbnY/LkNMQVVERV9DSFJPTUVfUEVSTUlTU0lPTl9NT0RFID8/XG4gICAgcHJvY2Vzcy5lbnYuQ0xBVURFX0NIUk9NRV9QRVJNSVNTSU9OX01PREVcbiAgbGV0IGluaXRpYWxQZXJtaXNzaW9uTW9kZTogUGVybWlzc2lvbk1vZGUgfCB1bmRlZmluZWRcbiAgaWYgKHJhd1Blcm1pc3Npb25Nb2RlKSB7XG4gICAgaWYgKGlzUGVybWlzc2lvbk1vZGUocmF3UGVybWlzc2lvbk1vZGUpKSB7XG4gICAgICBpbml0aWFsUGVybWlzc2lvbk1vZGUgPSByYXdQZXJtaXNzaW9uTW9kZVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2dnZXIud2FybihcbiAgICAgICAgYEludmFsaWQgQ0xBVURFX0NIUk9NRV9QRVJNSVNTSU9OX01PREUgXCIke3Jhd1Blcm1pc3Npb25Nb2RlfVwiLiBWYWxpZCB2YWx1ZXM6ICR7UEVSTUlTU0lPTl9NT0RFUy5qb2luKCcsICcpfWAsXG4gICAgICApXG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgc2VydmVyTmFtZTogJ0NsYXVkZSBpbiBDaHJvbWUnLFxuICAgIGxvZ2dlcixcbiAgICBzb2NrZXRQYXRoOiBnZXRTZWN1cmVTb2NrZXRQYXRoKCksXG4gICAgZ2V0U29ja2V0UGF0aHM6IGdldEFsbFNvY2tldFBhdGhzLFxuICAgIGNsaWVudFR5cGVJZDogJ2NsYXVkZS1jb2RlJyxcbiAgICBvbkF1dGhlbnRpY2F0aW9uRXJyb3I6ICgpID0+IHtcbiAgICAgIGxvZ2dlci53YXJuKFxuICAgICAgICAnQXV0aGVudGljYXRpb24gZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSBlbnN1cmUgeW91IGFyZSBsb2dnZWQgaW50byB0aGUgQ2xhdWRlIGJyb3dzZXIgZXh0ZW5zaW9uIHdpdGggdGhlIHNhbWUgY2xhdWRlLmFpIGFjY291bnQgYXMgQ2xhdWRlIENvZGUuJyxcbiAgICAgIClcbiAgICB9LFxuICAgIG9uVG9vbENhbGxEaXNjb25uZWN0ZWQ6ICgpID0+IHtcbiAgICAgIHJldHVybiBgQnJvd3NlciBleHRlbnNpb24gaXMgbm90IGNvbm5lY3RlZC4gUGxlYXNlIGVuc3VyZSB0aGUgQ2xhdWRlIGJyb3dzZXIgZXh0ZW5zaW9uIGlzIGluc3RhbGxlZCBhbmQgcnVubmluZyAoJHtFWFRFTlNJT05fRE9XTkxPQURfVVJMfSksIGFuZCB0aGF0IHlvdSBhcmUgbG9nZ2VkIGludG8gY2xhdWRlLmFpIHdpdGggdGhlIHNhbWUgYWNjb3VudCBhcyBDbGF1ZGUgQ29kZS4gSWYgdGhpcyBpcyB5b3VyIGZpcnN0IHRpbWUgY29ubmVjdGluZyB0byBDaHJvbWUsIHlvdSBtYXkgbmVlZCB0byByZXN0YXJ0IENocm9tZSBmb3IgdGhlIGluc3RhbGxhdGlvbiB0byB0YWtlIGVmZmVjdC4gSWYgeW91IGNvbnRpbnVlIHRvIGV4cGVyaWVuY2UgaXNzdWVzLCBwbGVhc2UgcmVwb3J0IGEgYnVnOiAke0JVR19SRVBPUlRfVVJMfWBcbiAgICB9LFxuICAgIG9uRXh0ZW5zaW9uUGFpcmVkOiAoZGV2aWNlSWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBzYXZlR2xvYmFsQ29uZmlnKGNvbmZpZyA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjb25maWcuY2hyb21lRXh0ZW5zaW9uPy5wYWlyZWREZXZpY2VJZCA9PT0gZGV2aWNlSWQgJiZcbiAgICAgICAgICBjb25maWcuY2hyb21lRXh0ZW5zaW9uPy5wYWlyZWREZXZpY2VOYW1lID09PSBuYW1lXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBjb25maWdcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgICBjaHJvbWVFeHRlbnNpb246IHtcbiAgICAgICAgICAgIHBhaXJlZERldmljZUlkOiBkZXZpY2VJZCxcbiAgICAgICAgICAgIHBhaXJlZERldmljZU5hbWU6IG5hbWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGxvZ2dlci5pbmZvKGBQYWlyZWQgd2l0aCBcIiR7bmFtZX1cIiAoJHtkZXZpY2VJZC5zbGljZSgwLCA4KX0pYClcbiAgICB9LFxuICAgIGdldFBlcnNpc3RlZERldmljZUlkOiAoKSA9PiB7XG4gICAgICByZXR1cm4gZ2V0R2xvYmFsQ29uZmlnKCkuY2hyb21lRXh0ZW5zaW9uPy5wYWlyZWREZXZpY2VJZFxuICAgIH0sXG4gICAgLi4uKGNocm9tZUJyaWRnZVVybCAmJiB7XG4gICAgICBicmlkZ2VDb25maWc6IHtcbiAgICAgICAgdXJsOiBjaHJvbWVCcmlkZ2VVcmwsXG4gICAgICAgIGdldFVzZXJJZDogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBnZXRHbG9iYWxDb25maWcoKS5vYXV0aEFjY291bnQ/LmFjY291bnRVdWlkXG4gICAgICAgIH0sXG4gICAgICAgIGdldE9BdXRoVG9rZW46IGFzeW5jICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gZ2V0Q2xhdWRlQUlPQXV0aFRva2VucygpPy5hY2Nlc3NUb2tlbiA/PyAnJ1xuICAgICAgICB9LFxuICAgICAgICAuLi4oaXNMb2NhbEJyaWRnZSgpICYmIHsgZGV2VXNlcklkOiAnZGV2X3VzZXJfbG9jYWwnIH0pLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICAuLi4oaW5pdGlhbFBlcm1pc3Npb25Nb2RlICYmIHsgaW5pdGlhbFBlcm1pc3Npb25Nb2RlIH0pLFxuICAgIC8vIFdpcmUgaW5mZXJlbmNlIGZvciB0aGUgYnJvd3Nlcl90YXNrIHRvb2wgXHUyMDE0IHRoZSBjaHJvbWUtbWNwIHNlcnZlciBydW5zXG4gICAgLy8gYSBsaWdodG5pbmctbW9kZSBhZ2VudCBsb29wIGluIE5vZGUgYW5kIGNhbGxzIHRoZSBleHRlbnNpb24nc1xuICAgIC8vIGxpZ2h0bmluZ190dXJuIHRvb2wgb25jZSBwZXIgaXRlcmF0aW9uIGZvciBleGVjdXRpb24uXG4gICAgLy9cbiAgICAvLyBBbnQtb25seTogdGhlIGV4dGVuc2lvbidzIGxpZ2h0bmluZ190dXJuIGlzIGJ1aWxkLXRpbWUtZ2F0ZWQgdmlhXG4gICAgLy8gaW1wb3J0Lm1ldGEuZW52LkFOVF9PTkxZX0JVSUxEIFx1MjAxNCB0aGUgd2hvbGUgbGlnaHRuaW5nLyBtb2R1bGUgZ3JhcGggaXNcbiAgICAvLyB0cmVlLXNoYWtlbiBmcm9tIHRoZSBwdWJsaWMgZXh0ZW5zaW9uIGJ1aWxkIChidWlsZDpwcm9kIGdyZXBzIGZvciBhXG4gICAgLy8gbWFya2VyIHRvIHZlcmlmeSkuIFdpdGhvdXQgdGhpcyBpbmplY3Rpb24sIHRoZSBOb2RlIE1DUCBzZXJ2ZXInc1xuICAgIC8vIExpc3RUb29scyBhbHNvIGZpbHRlcnMgYnJvd3Nlcl90YXNrICsgbGlnaHRuaW5nX3R1cm4gb3V0LCBzbyBleHRlcm5hbFxuICAgIC8vIHVzZXJzIG5ldmVyIHNlZSB0aGUgdG9vbHMgYWR2ZXJ0aXNlZC4gVGhyZWUgaW5kZXBlbmRlbnQgZ2F0ZXMuXG4gICAgLy9cbiAgICAvLyBUeXBlcyBpbmxpbmVkOiBBbnRocm9waWNNZXNzYWdlc1JlcXVlc3QvUmVzcG9uc2UgbGl2ZSBpblxuICAgIC8vIEBhbnQvY2xhdWRlLWZvci1jaHJvbWUtbWNwQDAuNC4wIHdoaWNoIGlzbid0IHB1Ymxpc2hlZCB5ZXQuIENJIGluc3RhbGxzXG4gICAgLy8gMC4zLjAuIFRoZSBjYWxsQW50aHJvcGljTWVzc2FnZXMgZmllbGQgaXMgYWxzbyAwLjQuMC1vbmx5LCBidXQgc3ByZWFkaW5nXG4gICAgLy8gYW4gZXh0cmEgcHJvcGVydHkgaW50byBDbGF1ZGVGb3JDaHJvbWVDb250ZXh0IGlzIGZpbmUgYWdhaW5zdCBlaXRoZXJcbiAgICAvLyB2ZXJzaW9uIFx1MjAxNCAwLjMuMCBzZWVzIGFuIHVua25vd24gZmllbGQgKGFsbG93ZWQgaW4gc3ByZWFkKSwgMC40LjAgc2VlcyBhXG4gICAgLy8gc3RydWN0dXJhbGx5LW1hdGNoaW5nIG9uZS4gT25jZSAwLjQuMCBpcyBwdWJsaXNoZWQsIHRoaXMgY2FuIHN3aXRjaCB0b1xuICAgIC8vIHRoZSBwYWNrYWdlJ3MgZXhwb3J0ZWQgdHlwZXMgYW5kIHRoZSBkZXAgY2FuIGJlIGJ1bXBlZC5cbiAgICAuLi4ocHJvY2Vzcy5lbnYuVVNFUl9UWVBFID09PSAnYW50JyAmJiB7XG4gICAgICBjYWxsQW50aHJvcGljTWVzc2FnZXM6IGFzeW5jIChyZXE6IHtcbiAgICAgICAgbW9kZWw6IHN0cmluZ1xuICAgICAgICBtYXhfdG9rZW5zOiBudW1iZXJcbiAgICAgICAgc3lzdGVtOiBzdHJpbmdcbiAgICAgICAgbWVzc2FnZXM6IFBhcmFtZXRlcnM8dHlwZW9mIHNpZGVRdWVyeT5bMF1bJ21lc3NhZ2VzJ11cbiAgICAgICAgc3RvcF9zZXF1ZW5jZXM/OiBzdHJpbmdbXVxuICAgICAgICBzaWduYWw/OiBBYm9ydFNpZ25hbFxuICAgICAgfSk6IFByb21pc2U8e1xuICAgICAgICBjb250ZW50OiBBcnJheTx7IHR5cGU6ICd0ZXh0JzsgdGV4dDogc3RyaW5nIH0+XG4gICAgICAgIHN0b3BfcmVhc29uOiBzdHJpbmcgfCBudWxsXG4gICAgICAgIHVzYWdlPzogeyBpbnB1dF90b2tlbnM6IG51bWJlcjsgb3V0cHV0X3Rva2VuczogbnVtYmVyIH1cbiAgICAgIH0+ID0+IHtcbiAgICAgICAgLy8gc2lkZVF1ZXJ5IGhhbmRsZXMgT0F1dGggYXR0cmlidXRpb24gZmluZ2VycHJpbnQsIHByb3h5LCBtb2RlbCBiZXRhcy5cbiAgICAgICAgLy8gc2tpcFN5c3RlbVByb21wdFByZWZpeDogdGhlIGxpZ2h0bmluZyBwcm9tcHQgaXMgY29tcGxldGUgb24gaXRzIG93bjtcbiAgICAgICAgLy8gdGhlIENMSSBwcmVmaXggd291bGQgZGlsdXRlIHRoZSBiYXRjaGluZyBpbnN0cnVjdGlvbnMuXG4gICAgICAgIC8vIHRvb2xzOiBbXSBpcyBsb2FkLWJlYXJpbmcgXHUyMDE0IHdpdGhvdXQgaXQgU29ubmV0IGVtaXRzXG4gICAgICAgIC8vIDxmdW5jdGlvbl9jYWxscz4gWE1MIGJlZm9yZSB0aGUgdGV4dCBjb21tYW5kcy4gT3JpZ2luYWxcbiAgICAgICAgLy8gbGlnaHRuaW5nLWhhcm5lc3MuanMgKGFwcHMgcmVwbykgZG9lcyB0aGUgc2FtZS5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzaWRlUXVlcnkoe1xuICAgICAgICAgIG1vZGVsOiByZXEubW9kZWwsXG4gICAgICAgICAgc3lzdGVtOiByZXEuc3lzdGVtLFxuICAgICAgICAgIG1lc3NhZ2VzOiByZXEubWVzc2FnZXMsXG4gICAgICAgICAgbWF4X3Rva2VuczogcmVxLm1heF90b2tlbnMsXG4gICAgICAgICAgc3RvcF9zZXF1ZW5jZXM6IHJlcS5zdG9wX3NlcXVlbmNlcyxcbiAgICAgICAgICBzaWduYWw6IHJlcS5zaWduYWwsXG4gICAgICAgICAgc2tpcFN5c3RlbVByb21wdFByZWZpeDogdHJ1ZSxcbiAgICAgICAgICB0b29sczogW10sXG4gICAgICAgICAgcXVlcnlTb3VyY2U6ICdjaHJvbWVfbWNwJyxcbiAgICAgICAgfSlcbiAgICAgICAgLy8gQmV0YUNvbnRlbnRCbG9jayBpcyBUZXh0QmxvY2sgfCBUaGlua2luZ0Jsb2NrIHwgVG9vbFVzZUJsb2NrIHwgLi4uXG4gICAgICAgIC8vIE9ubHkgdGV4dCBibG9ja3MgY2FycnkgdGhlIG1vZGVsJ3MgY29tbWFuZCBvdXRwdXQuXG4gICAgICAgIGNvbnN0IHRleHRCbG9ja3M6IEFycmF5PHsgdHlwZTogJ3RleHQnOyB0ZXh0OiBzdHJpbmcgfT4gPSBbXVxuICAgICAgICBmb3IgKGNvbnN0IGIgb2YgcmVzcG9uc2UuY29udGVudCkge1xuICAgICAgICAgIGlmIChiLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgICAgdGV4dEJsb2Nrcy5wdXNoKHsgdHlwZTogJ3RleHQnLCB0ZXh0OiBiLnRleHQgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb250ZW50OiB0ZXh0QmxvY2tzLFxuICAgICAgICAgIHN0b3BfcmVhc29uOiByZXNwb25zZS5zdG9wX3JlYXNvbixcbiAgICAgICAgICB1c2FnZToge1xuICAgICAgICAgICAgaW5wdXRfdG9rZW5zOiByZXNwb25zZS51c2FnZS5pbnB1dF90b2tlbnMsXG4gICAgICAgICAgICBvdXRwdXRfdG9rZW5zOiByZXNwb25zZS51c2FnZS5vdXRwdXRfdG9rZW5zLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSksXG4gICAgdHJhY2tFdmVudDogKGV2ZW50TmFtZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgIGNvbnN0IHNhZmVNZXRhZGF0YToge1xuICAgICAgICBba2V5OiBzdHJpbmddOlxuICAgICAgICAgIHwgYm9vbGVhblxuICAgICAgICAgIHwgbnVtYmVyXG4gICAgICAgICAgfCBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTXG4gICAgICAgICAgfCB1bmRlZmluZWRcbiAgICAgIH0gPSB7fVxuICAgICAgaWYgKG1ldGFkYXRhKSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG1ldGFkYXRhKSkge1xuICAgICAgICAgIC8vIFJlbmFtZSAnc3RhdHVzJyB0byAnYnJpZGdlX3N0YXR1cycgdG8gYXZvaWQgRGF0YWRvZydzIHJlc2VydmVkIGZpZWxkXG4gICAgICAgICAgY29uc3Qgc2FmZUtleSA9IGtleSA9PT0gJ3N0YXR1cycgPyAnYnJpZGdlX3N0YXR1cycgOiBrZXlcbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgfHwgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgc2FmZU1ldGFkYXRhW3NhZmVLZXldID0gdmFsdWVcbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJlxuICAgICAgICAgICAgU0FGRV9CUklER0VfU1RSSU5HX0tFWVMuaGFzKHNhZmVLZXkpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyBPbmx5IGZvcndhcmQgYWxsb3dsaXN0ZWQgc3RyaW5nIGtleXMgXHUyMDE0IGZpZWxkcyBsaWtlIGVycm9yX21lc3NhZ2VcbiAgICAgICAgICAgIC8vIGNvdWxkIGNvbnRhaW4gcGFnZSBjb250ZW50IG9yIHVzZXIgZGF0YVxuICAgICAgICAgICAgc2FmZU1ldGFkYXRhW3NhZmVLZXldID1cbiAgICAgICAgICAgICAgdmFsdWUgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIU1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbG9nRXZlbnQoZXZlbnROYW1lLCBzYWZlTWV0YWRhdGEpXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuQ2xhdWRlSW5DaHJvbWVNY3BTZXJ2ZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGVuYWJsZUNvbmZpZ3MoKVxuICBpbml0aWFsaXplQW5hbHl0aWNzU2luaygpXG4gIGNvbnN0IGNvbnRleHQgPSBjcmVhdGVDaHJvbWVDb250ZXh0KClcblxuICBjb25zdCBzZXJ2ZXIgPSBjcmVhdGVDbGF1ZGVGb3JDaHJvbWVNY3BTZXJ2ZXIoY29udGV4dClcbiAgY29uc3QgdHJhbnNwb3J0ID0gbmV3IFN0ZGlvU2VydmVyVHJhbnNwb3J0KClcblxuICAvLyBFeGl0IHdoZW4gcGFyZW50IHByb2Nlc3MgZGllcyAoc3RkaW4gcGlwZSBjbG9zZXMpLlxuICAvLyBGbHVzaCBhbmFseXRpY3MgYmVmb3JlIGV4aXRpbmcgc28gZmluYWwtYmF0Y2ggZXZlbnRzIChlLmcuIGRpc2Nvbm5lY3QpIGFyZW4ndCBsb3N0LlxuICBsZXQgZXhpdGluZyA9IGZhbHNlXG4gIGNvbnN0IHNodXRkb3duQW5kRXhpdCA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBpZiAoZXhpdGluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGV4aXRpbmcgPSB0cnVlXG4gICAgYXdhaXQgc2h1dGRvd24xUEV2ZW50TG9nZ2luZygpXG4gICAgYXdhaXQgc2h1dGRvd25EYXRhZG9nKClcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3VzdG9tLXJ1bGVzL25vLXByb2Nlc3MtZXhpdFxuICAgIHByb2Nlc3MuZXhpdCgwKVxuICB9XG4gIHByb2Nlc3Muc3RkaW4ub24oJ2VuZCcsICgpID0+IHZvaWQgc2h1dGRvd25BbmRFeGl0KCkpXG4gIHByb2Nlc3Muc3RkaW4ub24oJ2Vycm9yJywgKCkgPT4gdm9pZCBzaHV0ZG93bkFuZEV4aXQoKSlcblxuICBsb2dGb3JEZWJ1Z2dpbmcoJ1tDbGF1ZGUgaW4gQ2hyb21lXSBTdGFydGluZyBNQ1Agc2VydmVyJylcbiAgYXdhaXQgc2VydmVyLmNvbm5lY3QodHJhbnNwb3J0KVxuICBsb2dGb3JEZWJ1Z2dpbmcoJ1tDbGF1ZGUgaW4gQ2hyb21lXSBNQ1Agc2VydmVyIHN0YXJ0ZWQnKVxufVxuXG5jbGFzcyBEZWJ1Z0xvZ2dlciBpbXBsZW1lbnRzIExvZ2dlciB7XG4gIHNpbGx5KG1lc3NhZ2U6IHN0cmluZywgLi4uYXJnczogdW5rbm93bltdKTogdm9pZCB7XG4gICAgbG9nRm9yRGVidWdnaW5nKGZvcm1hdChtZXNzYWdlLCAuLi5hcmdzKSwgeyBsZXZlbDogJ2RlYnVnJyB9KVxuICB9XG4gIGRlYnVnKG1lc3NhZ2U6IHN0cmluZywgLi4uYXJnczogdW5rbm93bltdKTogdm9pZCB7XG4gICAgbG9nRm9yRGVidWdnaW5nKGZvcm1hdChtZXNzYWdlLCAuLi5hcmdzKSwgeyBsZXZlbDogJ2RlYnVnJyB9KVxuICB9XG4gIGluZm8obWVzc2FnZTogc3RyaW5nLCAuLi5hcmdzOiB1bmtub3duW10pOiB2b2lkIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoZm9ybWF0KG1lc3NhZ2UsIC4uLmFyZ3MpLCB7IGxldmVsOiAnaW5mbycgfSlcbiAgfVxuICB3YXJuKG1lc3NhZ2U6IHN0cmluZywgLi4uYXJnczogdW5rbm93bltdKTogdm9pZCB7XG4gICAgbG9nRm9yRGVidWdnaW5nKGZvcm1hdChtZXNzYWdlLCAuLi5hcmdzKSwgeyBsZXZlbDogJ3dhcm4nIH0pXG4gIH1cbiAgZXJyb3IobWVzc2FnZTogc3RyaW5nLCAuLi5hcmdzOiB1bmtub3duW10pOiB2b2lkIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoZm9ybWF0KG1lc3NhZ2UsIC4uLmFyZ3MpLCB7IGxldmVsOiAnZXJyb3InIH0pXG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0EsU0FBUyxjQUFjO0FBa0N2QixTQUFTLGlCQUFpQixLQUFvQztBQUM1RCxTQUFPLGlCQUFpQixLQUFLLE9BQUssTUFBTSxHQUFHO0FBQzdDO0FBT0EsU0FBUyxxQkFBeUM7QUFDaEQsUUFBTSxnQkFDSixRQUFRLElBQUksY0FBYyxTQUMxQixvQ0FBb0MsdUJBQXVCLEtBQUs7QUFFbEUsTUFBSSxDQUFDLGVBQWU7QUFDbEIsV0FBTztBQUFBLEVBQ1Q7QUFFQSxNQUNFLFlBQVksUUFBUSxJQUFJLGVBQWUsS0FDdkMsWUFBWSxRQUFRLElBQUksWUFBWSxHQUNwQztBQUNBLFdBQU87QUFBQSxFQUNUO0FBRUEsTUFBSSxZQUFZLFFBQVEsSUFBSSxpQkFBaUIsR0FBRztBQUM5QyxXQUFPO0FBQUEsRUFDVDtBQUVBLFNBQU87QUFDVDtBQUVBLFNBQVMsZ0JBQXlCO0FBQ2hDLFNBQ0UsWUFBWSxRQUFRLElBQUksZUFBZSxLQUN2QyxZQUFZLFFBQVEsSUFBSSxZQUFZO0FBRXhDO0FBTU8sU0FBUyxvQkFDZCxLQUN3QjtBQUN4QixRQUFNLFNBQVMsSUFBSSxZQUFZO0FBQy9CLFFBQU0sa0JBQWtCLG1CQUFtQjtBQUMzQyxTQUFPLEtBQUssZUFBZSxtQkFBbUIsNEJBQTRCLEVBQUU7QUFDNUUsUUFBTSxvQkFDSixLQUFLLGlDQUNMLFFBQVEsSUFBSTtBQUNkLE1BQUk7QUFDSixNQUFJLG1CQUFtQjtBQUNyQixRQUFJLGlCQUFpQixpQkFBaUIsR0FBRztBQUN2Qyw4QkFBd0I7QUFBQSxJQUMxQixPQUFPO0FBQ0wsYUFBTztBQUFBLFFBQ0wsMENBQTBDLGlCQUFpQixvQkFBb0IsaUJBQWlCLEtBQUssSUFBSSxDQUFDO0FBQUEsTUFDNUc7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNBLFNBQU87QUFBQSxJQUNMLFlBQVk7QUFBQSxJQUNaO0FBQUEsSUFDQSxZQUFZLG9CQUFvQjtBQUFBLElBQ2hDLGdCQUFnQjtBQUFBLElBQ2hCLGNBQWM7QUFBQSxJQUNkLHVCQUF1QixNQUFNO0FBQzNCLGFBQU87QUFBQSxRQUNMO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLHdCQUF3QixNQUFNO0FBQzVCLGFBQU8sNEdBQTRHLHNCQUFzQixtUUFBbVEsY0FBYztBQUFBLElBQzVaO0FBQUEsSUFDQSxtQkFBbUIsQ0FBQyxVQUFrQixTQUFpQjtBQUNyRCx1QkFBaUIsWUFBVTtBQUN6QixZQUNFLE9BQU8saUJBQWlCLG1CQUFtQixZQUMzQyxPQUFPLGlCQUFpQixxQkFBcUIsTUFDN0M7QUFDQSxpQkFBTztBQUFBLFFBQ1Q7QUFDQSxlQUFPO0FBQUEsVUFDTCxHQUFHO0FBQUEsVUFDSCxpQkFBaUI7QUFBQSxZQUNmLGdCQUFnQjtBQUFBLFlBQ2hCLGtCQUFrQjtBQUFBLFVBQ3BCO0FBQUEsUUFDRjtBQUFBLE1BQ0YsQ0FBQztBQUNELGFBQU8sS0FBSyxnQkFBZ0IsSUFBSSxNQUFNLFNBQVMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHO0FBQUEsSUFDL0Q7QUFBQSxJQUNBLHNCQUFzQixNQUFNO0FBQzFCLGFBQU8sZ0JBQWdCLEVBQUUsaUJBQWlCO0FBQUEsSUFDNUM7QUFBQSxJQUNBLEdBQUksbUJBQW1CO0FBQUEsTUFDckIsY0FBYztBQUFBLFFBQ1osS0FBSztBQUFBLFFBQ0wsV0FBVyxZQUFZO0FBQ3JCLGlCQUFPLGdCQUFnQixFQUFFLGNBQWM7QUFBQSxRQUN6QztBQUFBLFFBQ0EsZUFBZSxZQUFZO0FBQ3pCLGlCQUFPLHVCQUF1QixHQUFHLGVBQWU7QUFBQSxRQUNsRDtBQUFBLFFBQ0EsR0FBSSxjQUFjLEtBQUssRUFBRSxXQUFXLGlCQUFpQjtBQUFBLE1BQ3ZEO0FBQUEsSUFDRjtBQUFBLElBQ0EsR0FBSSx5QkFBeUIsRUFBRSxzQkFBc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW1CckQsR0FBSSxRQUFRLElBQUksY0FBYyxTQUFTO0FBQUEsTUFDckMsdUJBQXVCLE9BQU8sUUFXeEI7QUFPSixjQUFNLFdBQVcsTUFBTSxVQUFVO0FBQUEsVUFDL0IsT0FBTyxJQUFJO0FBQUEsVUFDWCxRQUFRLElBQUk7QUFBQSxVQUNaLFVBQVUsSUFBSTtBQUFBLFVBQ2QsWUFBWSxJQUFJO0FBQUEsVUFDaEIsZ0JBQWdCLElBQUk7QUFBQSxVQUNwQixRQUFRLElBQUk7QUFBQSxVQUNaLHdCQUF3QjtBQUFBLFVBQ3hCLE9BQU8sQ0FBQztBQUFBLFVBQ1IsYUFBYTtBQUFBLFFBQ2YsQ0FBQztBQUdELGNBQU0sYUFBb0QsQ0FBQztBQUMzRCxtQkFBVyxLQUFLLFNBQVMsU0FBUztBQUNoQyxjQUFJLEVBQUUsU0FBUyxRQUFRO0FBQ3JCLHVCQUFXLEtBQUssRUFBRSxNQUFNLFFBQVEsTUFBTSxFQUFFLEtBQUssQ0FBQztBQUFBLFVBQ2hEO0FBQUEsUUFDRjtBQUNBLGVBQU87QUFBQSxVQUNMLFNBQVM7QUFBQSxVQUNULGFBQWEsU0FBUztBQUFBLFVBQ3RCLE9BQU87QUFBQSxZQUNMLGNBQWMsU0FBUyxNQUFNO0FBQUEsWUFDN0IsZUFBZSxTQUFTLE1BQU07QUFBQSxVQUNoQztBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsWUFBWSxDQUFDLFdBQVcsYUFBYTtBQUNuQyxZQUFNLGVBTUYsQ0FBQztBQUNMLFVBQUksVUFBVTtBQUNaLG1CQUFXLENBQUMsS0FBSyxLQUFLLEtBQUssT0FBTyxRQUFRLFFBQVEsR0FBRztBQUVuRCxnQkFBTSxVQUFVLFFBQVEsV0FBVyxrQkFBa0I7QUFDckQsY0FBSSxPQUFPLFVBQVUsYUFBYSxPQUFPLFVBQVUsVUFBVTtBQUMzRCx5QkFBYSxPQUFPLElBQUk7QUFBQSxVQUMxQixXQUNFLE9BQU8sVUFBVSxZQUNqQix3QkFBd0IsSUFBSSxPQUFPLEdBQ25DO0FBR0EseUJBQWEsT0FBTyxJQUNsQjtBQUFBLFVBQ0o7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUNBLGVBQVMsV0FBVyxZQUFZO0FBQUEsSUFDbEM7QUFBQSxFQUNGO0FBQ0Y7QUFFQSxlQUFzQiw2QkFBNEM7QUFDaEUsZ0JBQWM7QUFDZCwwQkFBd0I7QUFDeEIsUUFBTSxVQUFVLG9CQUFvQjtBQUVwQyxRQUFNLFNBQVMsK0JBQStCLE9BQU87QUFDckQsUUFBTSxZQUFZLElBQUkscUJBQXFCO0FBSTNDLE1BQUksVUFBVTtBQUNkLFFBQU0sa0JBQWtCLFlBQTJCO0FBQ2pELFFBQUksU0FBUztBQUNYO0FBQUEsSUFDRjtBQUNBLGNBQVU7QUFDVixVQUFNLHVCQUF1QjtBQUM3QixVQUFNLGdCQUFnQjtBQUV0QixZQUFRLEtBQUssQ0FBQztBQUFBLEVBQ2hCO0FBQ0EsVUFBUSxNQUFNLEdBQUcsT0FBTyxNQUFNLEtBQUssZ0JBQWdCLENBQUM7QUFDcEQsVUFBUSxNQUFNLEdBQUcsU0FBUyxNQUFNLEtBQUssZ0JBQWdCLENBQUM7QUFFdEQsa0JBQWdCLHdDQUF3QztBQUN4RCxRQUFNLE9BQU8sUUFBUSxTQUFTO0FBQzlCLGtCQUFnQix1Q0FBdUM7QUFDekQ7QUFsUkEsSUF1Qk0sd0JBQ0EsZ0JBS0EseUJBTUEsa0JBaVBBO0FBcFJOO0FBQUE7QUFBQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU0seUJBQXlCO0FBQy9CLElBQU0saUJBQ0o7QUFJRixJQUFNLDBCQUEwQixvQkFBSSxJQUFJO0FBQUEsTUFDdEM7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0YsQ0FBQztBQUVELElBQU0sbUJBQThDO0FBQUEsTUFDbEQ7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUE2T0EsSUFBTSxjQUFOLE1BQW9DO0FBQUEsTUFDbEMsTUFBTSxZQUFvQixNQUF1QjtBQUMvQyx3QkFBZ0IsT0FBTyxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQUUsT0FBTyxRQUFRLENBQUM7QUFBQSxNQUM5RDtBQUFBLE1BQ0EsTUFBTSxZQUFvQixNQUF1QjtBQUMvQyx3QkFBZ0IsT0FBTyxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQUUsT0FBTyxRQUFRLENBQUM7QUFBQSxNQUM5RDtBQUFBLE1BQ0EsS0FBSyxZQUFvQixNQUF1QjtBQUM5Qyx3QkFBZ0IsT0FBTyxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQUUsT0FBTyxPQUFPLENBQUM7QUFBQSxNQUM3RDtBQUFBLE1BQ0EsS0FBSyxZQUFvQixNQUF1QjtBQUM5Qyx3QkFBZ0IsT0FBTyxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQUUsT0FBTyxPQUFPLENBQUM7QUFBQSxNQUM3RDtBQUFBLE1BQ0EsTUFBTSxZQUFvQixNQUF1QjtBQUMvQyx3QkFBZ0IsT0FBTyxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQUUsT0FBTyxRQUFRLENBQUM7QUFBQSxNQUM5RDtBQUFBLElBQ0Y7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
