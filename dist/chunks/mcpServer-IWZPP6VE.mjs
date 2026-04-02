#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  StdioServerTransport,
  init_stdio
} from "./chunk-E6YMNRMM.mjs";
import {
  createClaudeForChromeMcpServer,
  init_ant_claude_for_chrome_mcp
} from "./chunk-7DA2PBIX.mjs";
import {
  init_sideQuery,
  sideQuery
} from "./chunk-BQ2W5UUK.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-UPQJMBLU.mjs";
import "./chunk-JWBPLKI2.mjs";
import {
  getAllSocketPaths,
  getSecureSocketPath,
  init_common
} from "./chunk-B5LIYBEU.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-IVRFWWJD.mjs";
import "./chunk-WFZ47W7F.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-36ZVP56J.mjs";
import "./chunk-WKBYDC63.mjs";
import "./chunk-JPGTA2FH.mjs";
import "./chunk-2G5PON4H.mjs";
import "./chunk-SRAO5KUL.mjs";
import "./chunk-75K7OLET.mjs";
import "./chunk-ABRSTIS2.mjs";
import "./chunk-L22EUB4Z.mjs";
import "./chunk-NE3WJ556.mjs";
import "./chunk-3W743YKD.mjs";
import "./chunk-I4JSDM2A.mjs";
import "./chunk-ORS2TTME.mjs";
import "./chunk-H5UJY55C.mjs";
import "./chunk-R2NMUWG6.mjs";
import "./chunk-J7TDGLE4.mjs";
import "./chunk-XTFZIHQR.mjs";
import "./chunk-X6KULBXG.mjs";
import "./chunk-AKNFPKUI.mjs";
import "./chunk-EL6ZMCGB.mjs";
import "./chunk-ALBMKMIQ.mjs";
import "./chunk-A6JDOKBH.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-3IFS4CK6.mjs";
import "./chunk-2UP4OFWW.mjs";
import "./chunk-XXNQOOJ5.mjs";
import "./chunk-TQHEE24N.mjs";
import "./chunk-GRYB5GTK.mjs";
import "./chunk-V35HZRR2.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import "./chunk-ZFJCSCYD.mjs";
import "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-H3V45RZC.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  enableConfigs,
  getClaudeAIOAuthTokens,
  getGlobalConfig,
  init_auth,
  init_config,
  saveGlobalConfig
} from "./chunk-JQ55XPLZ.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-5EA44JDA.mjs";
import "./chunk-O2ZQRVJU.mjs";
import "./chunk-ZPEBVZEB.mjs";
import "./chunk-DQ5JTCOA.mjs";
import "./chunk-HGPSKCV5.mjs";
import "./chunk-B7JYVDBT.mjs";
import "./chunk-GHLJY6GK.mjs";
import "./chunk-PPND3F3V.mjs";
import "./chunk-BKRSSLV2.mjs";
import "./chunk-XFYUWZYI.mjs";
import "./chunk-TR6BOGPZ.mjs";
import "./chunk-KTLUBGNP.mjs";
import "./chunk-3PS62SCS.mjs";
import "./chunk-SFCRD75C.mjs";
import "./chunk-QFFW7MQ2.mjs";
import "./chunk-3AEW3KDQ.mjs";
import "./chunk-NLMC5AZV.mjs";
import "./chunk-M5NTYAY2.mjs";
import "./chunk-SETG7O3F.mjs";
import "./chunk-J6MJ6UVK.mjs";
import "./chunk-PKIVPZJM.mjs";
import "./chunk-JXCG2JDO.mjs";
import "./chunk-FBLMX54P.mjs";
import "./chunk-FOFMX5GB.mjs";
import "./chunk-SF3TOBTZ.mjs";
import "./chunk-IVTTVOOG.mjs";
import "./chunk-LNQOFDTT.mjs";
import "./chunk-ZAYB3WZV.mjs";
import "./chunk-NT7W7YWD.mjs";
import "./chunk-4S33EKPF.mjs";
import "./chunk-TZFTPSMG.mjs";
import "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-F5ODCUJD.mjs";
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
  const bridgeEnabled = process.env.USER_TYPE === "ant";
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
    }
  };
}
async function runClaudeInChromeMcpServer() {
  enableConfigs();
  const context = createChromeContext();
  const server = createClaudeForChromeMcpServer(context);
  const transport = new StdioServerTransport();
  let exiting = false;
  const shutdownAndExit = async () => {
    if (exiting) {
      return;
    }
    exiting = true;
    process.exit(0);
  };
  process.stdin.on("end", () => void shutdownAndExit());
  process.stdin.on("error", () => void shutdownAndExit());
  logForDebugging("[Claude in Chrome] Starting MCP server");
  await server.connect(transport);
  logForDebugging("[Claude in Chrome] MCP server started");
}
var EXTENSION_DOWNLOAD_URL, BUG_REPORT_URL, PERMISSION_MODES, DebugLogger;
var init_mcpServer = __esm({
  "src/utils/claudeInChrome/mcpServer.ts"() {
    init_ant_claude_for_chrome_mcp();
    init_stdio();
    init_auth();
    init_config();
    init_debug();
    init_envUtils();
    init_sideQuery();
    init_common();
    EXTENSION_DOWNLOAD_URL = "https://claude.ai/chrome";
    BUG_REPORT_URL = "https://github.com/anthropics/claude-code/issues/new?labels=bug,claude-in-chrome";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL2NsYXVkZUluQ2hyb21lL21jcFNlcnZlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtcbiAgdHlwZSBDbGF1ZGVGb3JDaHJvbWVDb250ZXh0LFxuICBjcmVhdGVDbGF1ZGVGb3JDaHJvbWVNY3BTZXJ2ZXIsXG4gIHR5cGUgTG9nZ2VyLFxuICB0eXBlIFBlcm1pc3Npb25Nb2RlLFxufSBmcm9tICdAYW50L2NsYXVkZS1mb3ItY2hyb21lLW1jcCdcbmltcG9ydCB7IFN0ZGlvU2VydmVyVHJhbnNwb3J0IH0gZnJvbSAnQG1vZGVsY29udGV4dHByb3RvY29sL3Nkay9zZXJ2ZXIvc3RkaW8uanMnXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICd1dGlsJ1xuaW1wb3J0IHsgZ2V0Q2xhdWRlQUlPQXV0aFRva2VucyB9IGZyb20gJy4uL2F1dGguanMnXG5pbXBvcnQgeyBlbmFibGVDb25maWdzLCBnZXRHbG9iYWxDb25maWcsIHNhdmVHbG9iYWxDb25maWcgfSBmcm9tICcuLi9jb25maWcuanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuLi9kZWJ1Zy5qcydcbmltcG9ydCB7IGlzRW52VHJ1dGh5IH0gZnJvbSAnLi4vZW52VXRpbHMuanMnXG5pbXBvcnQgeyBzaWRlUXVlcnkgfSBmcm9tICcuLi9zaWRlUXVlcnkuanMnXG5pbXBvcnQgeyBnZXRBbGxTb2NrZXRQYXRocywgZ2V0U2VjdXJlU29ja2V0UGF0aCB9IGZyb20gJy4vY29tbW9uLmpzJ1xuXG5jb25zdCBFWFRFTlNJT05fRE9XTkxPQURfVVJMID0gJ2h0dHBzOi8vY2xhdWRlLmFpL2Nocm9tZSdcbmNvbnN0IEJVR19SRVBPUlRfVVJMID1cbiAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbnRocm9waWNzL2NsYXVkZS1jb2RlL2lzc3Vlcy9uZXc/bGFiZWxzPWJ1ZyxjbGF1ZGUtaW4tY2hyb21lJ1xuXG5jb25zdCBQRVJNSVNTSU9OX01PREVTOiByZWFkb25seSBQZXJtaXNzaW9uTW9kZVtdID0gW1xuICAnYXNrJyxcbiAgJ3NraXBfYWxsX3Blcm1pc3Npb25fY2hlY2tzJyxcbiAgJ2ZvbGxvd19hX3BsYW4nLFxuXVxuXG5mdW5jdGlvbiBpc1Blcm1pc3Npb25Nb2RlKHJhdzogc3RyaW5nKTogcmF3IGlzIFBlcm1pc3Npb25Nb2RlIHtcbiAgcmV0dXJuIFBFUk1JU1NJT05fTU9ERVMuc29tZShtID0+IG0gPT09IHJhdylcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgQ2hyb21lIGJyaWRnZSBVUkwgYmFzZWQgb24gZW52aXJvbm1lbnQuXG4gKiBCcmlkZ2UgaXMgdXNlZCBmb3IgYW50IHVzZXJzOyBBUEkga2V5IC8gM1AgdXNlcnMgZmFsbCBiYWNrIHRvIG5hdGl2ZSBtZXNzYWdpbmcuXG4gKi9cbmZ1bmN0aW9uIGdldENocm9tZUJyaWRnZVVybCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICBjb25zdCBicmlkZ2VFbmFibGVkID0gcHJvY2Vzcy5lbnYuVVNFUl9UWVBFID09PSAnYW50J1xuXG4gIGlmICghYnJpZGdlRW5hYmxlZCkge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGlmIChcbiAgICBpc0VudlRydXRoeShwcm9jZXNzLmVudi5VU0VfTE9DQUxfT0FVVEgpIHx8XG4gICAgaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuTE9DQUxfQlJJREdFKVxuICApIHtcbiAgICByZXR1cm4gJ3dzOi8vbG9jYWxob3N0Ojg3NjUnXG4gIH1cblxuICBpZiAoaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuVVNFX1NUQUdJTkdfT0FVVEgpKSB7XG4gICAgcmV0dXJuICd3c3M6Ly9icmlkZ2Utc3RhZ2luZy5jbGF1ZGV1c2VyY29udGVudC5jb20nXG4gIH1cblxuICByZXR1cm4gJ3dzczovL2JyaWRnZS5jbGF1ZGV1c2VyY29udGVudC5jb20nXG59XG5cbmZ1bmN0aW9uIGlzTG9jYWxCcmlkZ2UoKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuVVNFX0xPQ0FMX09BVVRIKSB8fFxuICAgIGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkxPQ0FMX0JSSURHRSlcbiAgKVxufVxuXG4vKipcbiAqIEJ1aWxkIHRoZSBDbGF1ZGVGb3JDaHJvbWVDb250ZXh0IHVzZWQgYnkgYm90aCB0aGUgc3VicHJvY2VzcyBNQ1Agc2VydmVyXG4gKiBhbmQgdGhlIGluLXByb2Nlc3MgcGF0aCBpbiB0aGUgTUNQIGNsaWVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNocm9tZUNvbnRleHQoXG4gIGVudj86IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sXG4pOiBDbGF1ZGVGb3JDaHJvbWVDb250ZXh0IHtcbiAgY29uc3QgbG9nZ2VyID0gbmV3IERlYnVnTG9nZ2VyKClcbiAgY29uc3QgY2hyb21lQnJpZGdlVXJsID0gZ2V0Q2hyb21lQnJpZGdlVXJsKClcbiAgbG9nZ2VyLmluZm8oYEJyaWRnZSBVUkw6ICR7Y2hyb21lQnJpZGdlVXJsID8/ICdub25lICh1c2luZyBuYXRpdmUgc29ja2V0KSd9YClcbiAgY29uc3QgcmF3UGVybWlzc2lvbk1vZGUgPVxuICAgIGVudj8uQ0xBVURFX0NIUk9NRV9QRVJNSVNTSU9OX01PREUgPz9cbiAgICBwcm9jZXNzLmVudi5DTEFVREVfQ0hST01FX1BFUk1JU1NJT05fTU9ERVxuICBsZXQgaW5pdGlhbFBlcm1pc3Npb25Nb2RlOiBQZXJtaXNzaW9uTW9kZSB8IHVuZGVmaW5lZFxuICBpZiAocmF3UGVybWlzc2lvbk1vZGUpIHtcbiAgICBpZiAoaXNQZXJtaXNzaW9uTW9kZShyYXdQZXJtaXNzaW9uTW9kZSkpIHtcbiAgICAgIGluaXRpYWxQZXJtaXNzaW9uTW9kZSA9IHJhd1Blcm1pc3Npb25Nb2RlXG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZ2dlci53YXJuKFxuICAgICAgICBgSW52YWxpZCBDTEFVREVfQ0hST01FX1BFUk1JU1NJT05fTU9ERSBcIiR7cmF3UGVybWlzc2lvbk1vZGV9XCIuIFZhbGlkIHZhbHVlczogJHtQRVJNSVNTSU9OX01PREVTLmpvaW4oJywgJyl9YCxcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzZXJ2ZXJOYW1lOiAnQ2xhdWRlIGluIENocm9tZScsXG4gICAgbG9nZ2VyLFxuICAgIHNvY2tldFBhdGg6IGdldFNlY3VyZVNvY2tldFBhdGgoKSxcbiAgICBnZXRTb2NrZXRQYXRoczogZ2V0QWxsU29ja2V0UGF0aHMsXG4gICAgY2xpZW50VHlwZUlkOiAnY2xhdWRlLWNvZGUnLFxuICAgIG9uQXV0aGVudGljYXRpb25FcnJvcjogKCkgPT4ge1xuICAgICAgbG9nZ2VyLndhcm4oXG4gICAgICAgICdBdXRoZW50aWNhdGlvbiBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIGVuc3VyZSB5b3UgYXJlIGxvZ2dlZCBpbnRvIHRoZSBCbGF1ZGUgYnJvd3NlciBleHRlbnNpb24gd2l0aCB0aGUgc2FtZSBjbGF1ZGUuYWkgYWNjb3VudCBhcyBCbGF1ZGUuJyxcbiAgICAgIClcbiAgICB9LFxuICAgIG9uVG9vbENhbGxEaXNjb25uZWN0ZWQ6ICgpID0+IHtcbiAgICAgIHJldHVybiBgQnJvd3NlciBleHRlbnNpb24gaXMgbm90IGNvbm5lY3RlZC4gUGxlYXNlIGVuc3VyZSB0aGUgQmxhdWRlIGJyb3dzZXIgZXh0ZW5zaW9uIGlzIGluc3RhbGxlZCBhbmQgcnVubmluZyAoJHtFWFRFTlNJT05fRE9XTkxPQURfVVJMfSksIGFuZCB0aGF0IHlvdSBhcmUgbG9nZ2VkIGludG8gY2xhdWRlLmFpIHdpdGggdGhlIHNhbWUgYWNjb3VudCBhcyBCbGF1ZGUuIElmIHRoaXMgaXMgeW91ciBmaXJzdCB0aW1lIGNvbm5lY3RpbmcgdG8gQ2hyb21lLCB5b3UgbWF5IG5lZWQgdG8gcmVzdGFydCBDaHJvbWUgZm9yIHRoZSBpbnN0YWxsYXRpb24gdG8gdGFrZSBlZmZlY3QuIElmIHlvdSBjb250aW51ZSB0byBleHBlcmllbmNlIGlzc3VlcywgcGxlYXNlIHJlcG9ydCBhIGJ1ZzogJHtCVUdfUkVQT1JUX1VSTH1gXG4gICAgfSxcbiAgICBvbkV4dGVuc2lvblBhaXJlZDogKGRldmljZUlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgc2F2ZUdsb2JhbENvbmZpZyhjb25maWcgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY29uZmlnLmNocm9tZUV4dGVuc2lvbj8ucGFpcmVkRGV2aWNlSWQgPT09IGRldmljZUlkICYmXG4gICAgICAgICAgY29uZmlnLmNocm9tZUV4dGVuc2lvbj8ucGFpcmVkRGV2aWNlTmFtZSA9PT0gbmFtZVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gY29uZmlnXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5jb25maWcsXG4gICAgICAgICAgY2hyb21lRXh0ZW5zaW9uOiB7XG4gICAgICAgICAgICBwYWlyZWREZXZpY2VJZDogZGV2aWNlSWQsXG4gICAgICAgICAgICBwYWlyZWREZXZpY2VOYW1lOiBuYW1lLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBsb2dnZXIuaW5mbyhgUGFpcmVkIHdpdGggXCIke25hbWV9XCIgKCR7ZGV2aWNlSWQuc2xpY2UoMCwgOCl9KWApXG4gICAgfSxcbiAgICBnZXRQZXJzaXN0ZWREZXZpY2VJZDogKCkgPT4ge1xuICAgICAgcmV0dXJuIGdldEdsb2JhbENvbmZpZygpLmNocm9tZUV4dGVuc2lvbj8ucGFpcmVkRGV2aWNlSWRcbiAgICB9LFxuICAgIC4uLihjaHJvbWVCcmlkZ2VVcmwgJiYge1xuICAgICAgYnJpZGdlQ29uZmlnOiB7XG4gICAgICAgIHVybDogY2hyb21lQnJpZGdlVXJsLFxuICAgICAgICBnZXRVc2VySWQ6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gZ2V0R2xvYmFsQ29uZmlnKCkub2F1dGhBY2NvdW50Py5hY2NvdW50VXVpZFxuICAgICAgICB9LFxuICAgICAgICBnZXRPQXV0aFRva2VuOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGdldENsYXVkZUFJT0F1dGhUb2tlbnMoKT8uYWNjZXNzVG9rZW4gPz8gJydcbiAgICAgICAgfSxcbiAgICAgICAgLi4uKGlzTG9jYWxCcmlkZ2UoKSAmJiB7IGRldlVzZXJJZDogJ2Rldl91c2VyX2xvY2FsJyB9KSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgLi4uKGluaXRpYWxQZXJtaXNzaW9uTW9kZSAmJiB7IGluaXRpYWxQZXJtaXNzaW9uTW9kZSB9KSxcbiAgICAvLyBXaXJlIGluZmVyZW5jZSBmb3IgdGhlIGJyb3dzZXJfdGFzayB0b29sIFx1MjAxNCB0aGUgY2hyb21lLW1jcCBzZXJ2ZXIgcnVuc1xuICAgIC8vIGEgbGlnaHRuaW5nLW1vZGUgYWdlbnQgbG9vcCBpbiBOb2RlIGFuZCBjYWxscyB0aGUgZXh0ZW5zaW9uJ3NcbiAgICAvLyBsaWdodG5pbmdfdHVybiB0b29sIG9uY2UgcGVyIGl0ZXJhdGlvbiBmb3IgZXhlY3V0aW9uLlxuICAgIC8vXG4gICAgLy8gQW50LW9ubHk6IHRoZSBleHRlbnNpb24ncyBsaWdodG5pbmdfdHVybiBpcyBidWlsZC10aW1lLWdhdGVkIHZpYVxuICAgIC8vIGltcG9ydC5tZXRhLmVudi5BTlRfT05MWV9CVUlMRCBcdTIwMTQgdGhlIHdob2xlIGxpZ2h0bmluZy8gbW9kdWxlIGdyYXBoIGlzXG4gICAgLy8gdHJlZS1zaGFrZW4gZnJvbSB0aGUgcHVibGljIGV4dGVuc2lvbiBidWlsZCAoYnVpbGQ6cHJvZCBncmVwcyBmb3IgYVxuICAgIC8vIG1hcmtlciB0byB2ZXJpZnkpLiBXaXRob3V0IHRoaXMgaW5qZWN0aW9uLCB0aGUgTm9kZSBNQ1Agc2VydmVyJ3NcbiAgICAvLyBMaXN0VG9vbHMgYWxzbyBmaWx0ZXJzIGJyb3dzZXJfdGFzayArIGxpZ2h0bmluZ190dXJuIG91dCwgc28gZXh0ZXJuYWxcbiAgICAvLyB1c2VycyBuZXZlciBzZWUgdGhlIHRvb2xzIGFkdmVydGlzZWQuIFRocmVlIGluZGVwZW5kZW50IGdhdGVzLlxuICAgIC8vXG4gICAgLy8gVHlwZXMgaW5saW5lZDogQW50aHJvcGljTWVzc2FnZXNSZXF1ZXN0L1Jlc3BvbnNlIGxpdmUgaW5cbiAgICAvLyBAYW50L2NsYXVkZS1mb3ItY2hyb21lLW1jcEAwLjQuMCB3aGljaCBpc24ndCBwdWJsaXNoZWQgeWV0LiBDSSBpbnN0YWxsc1xuICAgIC8vIDAuMy4wLiBUaGUgY2FsbEFudGhyb3BpY01lc3NhZ2VzIGZpZWxkIGlzIGFsc28gMC40LjAtb25seSwgYnV0IHNwcmVhZGluZ1xuICAgIC8vIGFuIGV4dHJhIHByb3BlcnR5IGludG8gQ2xhdWRlRm9yQ2hyb21lQ29udGV4dCBpcyBmaW5lIGFnYWluc3QgZWl0aGVyXG4gICAgLy8gdmVyc2lvbiBcdTIwMTQgMC4zLjAgc2VlcyBhbiB1bmtub3duIGZpZWxkIChhbGxvd2VkIGluIHNwcmVhZCksIDAuNC4wIHNlZXMgYVxuICAgIC8vIHN0cnVjdHVyYWxseS1tYXRjaGluZyBvbmUuIE9uY2UgMC40LjAgaXMgcHVibGlzaGVkLCB0aGlzIGNhbiBzd2l0Y2ggdG9cbiAgICAvLyB0aGUgcGFja2FnZSdzIGV4cG9ydGVkIHR5cGVzIGFuZCB0aGUgZGVwIGNhbiBiZSBidW1wZWQuXG4gICAgLi4uKHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCcgJiYge1xuICAgICAgY2FsbEFudGhyb3BpY01lc3NhZ2VzOiBhc3luYyAocmVxOiB7XG4gICAgICAgIG1vZGVsOiBzdHJpbmdcbiAgICAgICAgbWF4X3Rva2VuczogbnVtYmVyXG4gICAgICAgIHN5c3RlbTogc3RyaW5nXG4gICAgICAgIG1lc3NhZ2VzOiBQYXJhbWV0ZXJzPHR5cGVvZiBzaWRlUXVlcnk+WzBdWydtZXNzYWdlcyddXG4gICAgICAgIHN0b3Bfc2VxdWVuY2VzPzogc3RyaW5nW11cbiAgICAgICAgc2lnbmFsPzogQWJvcnRTaWduYWxcbiAgICAgIH0pOiBQcm9taXNlPHtcbiAgICAgICAgY29udGVudDogQXJyYXk8eyB0eXBlOiAndGV4dCc7IHRleHQ6IHN0cmluZyB9PlxuICAgICAgICBzdG9wX3JlYXNvbjogc3RyaW5nIHwgbnVsbFxuICAgICAgICB1c2FnZT86IHsgaW5wdXRfdG9rZW5zOiBudW1iZXI7IG91dHB1dF90b2tlbnM6IG51bWJlciB9XG4gICAgICB9PiA9PiB7XG4gICAgICAgIC8vIHNpZGVRdWVyeSBoYW5kbGVzIE9BdXRoIGF0dHJpYnV0aW9uIGZpbmdlcnByaW50LCBwcm94eSwgbW9kZWwgYmV0YXMuXG4gICAgICAgIC8vIHNraXBTeXN0ZW1Qcm9tcHRQcmVmaXg6IHRoZSBsaWdodG5pbmcgcHJvbXB0IGlzIGNvbXBsZXRlIG9uIGl0cyBvd247XG4gICAgICAgIC8vIHRoZSBDTEkgcHJlZml4IHdvdWxkIGRpbHV0ZSB0aGUgYmF0Y2hpbmcgaW5zdHJ1Y3Rpb25zLlxuICAgICAgICAvLyB0b29sczogW10gaXMgbG9hZC1iZWFyaW5nIFx1MjAxNCB3aXRob3V0IGl0IFNvbm5ldCBlbWl0c1xuICAgICAgICAvLyA8ZnVuY3Rpb25fY2FsbHM+IFhNTCBiZWZvcmUgdGhlIHRleHQgY29tbWFuZHMuIE9yaWdpbmFsXG4gICAgICAgIC8vIGxpZ2h0bmluZy1oYXJuZXNzLmpzIChhcHBzIHJlcG8pIGRvZXMgdGhlIHNhbWUuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc2lkZVF1ZXJ5KHtcbiAgICAgICAgICBtb2RlbDogcmVxLm1vZGVsLFxuICAgICAgICAgIHN5c3RlbTogcmVxLnN5c3RlbSxcbiAgICAgICAgICBtZXNzYWdlczogcmVxLm1lc3NhZ2VzLFxuICAgICAgICAgIG1heF90b2tlbnM6IHJlcS5tYXhfdG9rZW5zLFxuICAgICAgICAgIHN0b3Bfc2VxdWVuY2VzOiByZXEuc3RvcF9zZXF1ZW5jZXMsXG4gICAgICAgICAgc2lnbmFsOiByZXEuc2lnbmFsLFxuICAgICAgICAgIHNraXBTeXN0ZW1Qcm9tcHRQcmVmaXg6IHRydWUsXG4gICAgICAgICAgdG9vbHM6IFtdLFxuICAgICAgICAgIHF1ZXJ5U291cmNlOiAnY2hyb21lX21jcCcsXG4gICAgICAgIH0pXG4gICAgICAgIC8vIEJldGFDb250ZW50QmxvY2sgaXMgVGV4dEJsb2NrIHwgVGhpbmtpbmdCbG9jayB8IFRvb2xVc2VCbG9jayB8IC4uLlxuICAgICAgICAvLyBPbmx5IHRleHQgYmxvY2tzIGNhcnJ5IHRoZSBtb2RlbCdzIGNvbW1hbmQgb3V0cHV0LlxuICAgICAgICBjb25zdCB0ZXh0QmxvY2tzOiBBcnJheTx7IHR5cGU6ICd0ZXh0JzsgdGV4dDogc3RyaW5nIH0+ID0gW11cbiAgICAgICAgZm9yIChjb25zdCBiIG9mIHJlc3BvbnNlLmNvbnRlbnQpIHtcbiAgICAgICAgICBpZiAoYi50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgICAgIHRleHRCbG9ja3MucHVzaCh7IHR5cGU6ICd0ZXh0JywgdGV4dDogYi50ZXh0IH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY29udGVudDogdGV4dEJsb2NrcyxcbiAgICAgICAgICBzdG9wX3JlYXNvbjogcmVzcG9uc2Uuc3RvcF9yZWFzb24sXG4gICAgICAgICAgdXNhZ2U6IHtcbiAgICAgICAgICAgIGlucHV0X3Rva2VuczogcmVzcG9uc2UudXNhZ2UuaW5wdXRfdG9rZW5zLFxuICAgICAgICAgICAgb3V0cHV0X3Rva2VuczogcmVzcG9uc2UudXNhZ2Uub3V0cHV0X3Rva2VucyxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pLFxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBydW5DbGF1ZGVJbkNocm9tZU1jcFNlcnZlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgZW5hYmxlQ29uZmlncygpXG4gIGNvbnN0IGNvbnRleHQgPSBjcmVhdGVDaHJvbWVDb250ZXh0KClcblxuICBjb25zdCBzZXJ2ZXIgPSBjcmVhdGVDbGF1ZGVGb3JDaHJvbWVNY3BTZXJ2ZXIoY29udGV4dClcbiAgY29uc3QgdHJhbnNwb3J0ID0gbmV3IFN0ZGlvU2VydmVyVHJhbnNwb3J0KClcblxuICAvLyBFeGl0IHdoZW4gcGFyZW50IHByb2Nlc3MgZGllcyAoc3RkaW4gcGlwZSBjbG9zZXMpLlxuICBsZXQgZXhpdGluZyA9IGZhbHNlXG4gIGNvbnN0IHNodXRkb3duQW5kRXhpdCA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBpZiAoZXhpdGluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGV4aXRpbmcgPSB0cnVlXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGN1c3RvbS1ydWxlcy9uby1wcm9jZXNzLWV4aXRcbiAgICBwcm9jZXNzLmV4aXQoMClcbiAgfVxuICBwcm9jZXNzLnN0ZGluLm9uKCdlbmQnLCAoKSA9PiB2b2lkIHNodXRkb3duQW5kRXhpdCgpKVxuICBwcm9jZXNzLnN0ZGluLm9uKCdlcnJvcicsICgpID0+IHZvaWQgc2h1dGRvd25BbmRFeGl0KCkpXG5cbiAgbG9nRm9yRGVidWdnaW5nKCdbQ2xhdWRlIGluIENocm9tZV0gU3RhcnRpbmcgTUNQIHNlcnZlcicpXG4gIGF3YWl0IHNlcnZlci5jb25uZWN0KHRyYW5zcG9ydClcbiAgbG9nRm9yRGVidWdnaW5nKCdbQ2xhdWRlIGluIENocm9tZV0gTUNQIHNlcnZlciBzdGFydGVkJylcbn1cblxuY2xhc3MgRGVidWdMb2dnZXIgaW1wbGVtZW50cyBMb2dnZXIge1xuICBzaWxseShtZXNzYWdlOiBzdHJpbmcsIC4uLmFyZ3M6IHVua25vd25bXSk6IHZvaWQge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhmb3JtYXQobWVzc2FnZSwgLi4uYXJncyksIHsgbGV2ZWw6ICdkZWJ1ZycgfSlcbiAgfVxuICBkZWJ1ZyhtZXNzYWdlOiBzdHJpbmcsIC4uLmFyZ3M6IHVua25vd25bXSk6IHZvaWQge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhmb3JtYXQobWVzc2FnZSwgLi4uYXJncyksIHsgbGV2ZWw6ICdkZWJ1ZycgfSlcbiAgfVxuICBpbmZvKG1lc3NhZ2U6IHN0cmluZywgLi4uYXJnczogdW5rbm93bltdKTogdm9pZCB7XG4gICAgbG9nRm9yRGVidWdnaW5nKGZvcm1hdChtZXNzYWdlLCAuLi5hcmdzKSwgeyBsZXZlbDogJ2luZm8nIH0pXG4gIH1cbiAgd2FybihtZXNzYWdlOiBzdHJpbmcsIC4uLmFyZ3M6IHVua25vd25bXSk6IHZvaWQge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhmb3JtYXQobWVzc2FnZSwgLi4uYXJncyksIHsgbGV2ZWw6ICd3YXJuJyB9KVxuICB9XG4gIGVycm9yKG1lc3NhZ2U6IHN0cmluZywgLi4uYXJnczogdW5rbm93bltdKTogdm9pZCB7XG4gICAgbG9nRm9yRGVidWdnaW5nKGZvcm1hdChtZXNzYWdlLCAuLi5hcmdzKSwgeyBsZXZlbDogJ2Vycm9yJyB9KVxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxTQUFTLGNBQWM7QUFrQnZCLFNBQVMsaUJBQWlCLEtBQW9DO0FBQzVELFNBQU8saUJBQWlCLEtBQUssT0FBSyxNQUFNLEdBQUc7QUFDN0M7QUFNQSxTQUFTLHFCQUF5QztBQUNoRCxRQUFNLGdCQUFnQixRQUFRLElBQUksY0FBYztBQUVoRCxNQUFJLENBQUMsZUFBZTtBQUNsQixXQUFPO0FBQUEsRUFDVDtBQUVBLE1BQ0UsWUFBWSxRQUFRLElBQUksZUFBZSxLQUN2QyxZQUFZLFFBQVEsSUFBSSxZQUFZLEdBQ3BDO0FBQ0EsV0FBTztBQUFBLEVBQ1Q7QUFFQSxNQUFJLFlBQVksUUFBUSxJQUFJLGlCQUFpQixHQUFHO0FBQzlDLFdBQU87QUFBQSxFQUNUO0FBRUEsU0FBTztBQUNUO0FBRUEsU0FBUyxnQkFBeUI7QUFDaEMsU0FDRSxZQUFZLFFBQVEsSUFBSSxl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
