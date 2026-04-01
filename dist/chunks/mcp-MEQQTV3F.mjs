#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  MCPRemoteServerMenu,
  MCPStdioServerMenu,
  MCPToolDetailView,
  MCPToolListView,
  init_MCPRemoteServerMenu,
  init_MCPStdioServerMenu,
  init_MCPToolDetailView,
  init_MCPToolListView,
  init_PluginSettings
} from "./chunk-35ABCZPB.mjs";
import "./chunk-4ALOYVV6.mjs";
import {
  init_MCPConnectionManager,
  useMcpReconnect,
  useMcpToggleEnabled
} from "./chunk-G7GD7K34.mjs";
import "./chunk-USK6WK3P.mjs";
import "./chunk-QEBNTS4F.mjs";
import "./chunk-Z4SJV6S3.mjs";
import "./chunk-C5PXL5QF.mjs";
import "./chunk-5VAWKU3E.mjs";
import "./chunk-PTYHZPYV.mjs";
import {
  McpParsingWarnings,
  init_McpParsingWarnings
} from "./chunk-WB2QCNUO.mjs";
import "./chunk-EOFNYHIQ.mjs";
import "./chunk-6TYKXPLL.mjs";
import "./chunk-U2LTAULA.mjs";
import {
  AuthenticationCancelledError,
  ClaudeAuthProvider,
  Select,
  Spinner,
  describeMcpConfigFilePath,
  extractAgentMcpServers,
  filterToolsByServer,
  init_AppState,
  init_CustomSelect,
  init_Spinner,
  init_auth2 as init_auth,
  init_utils,
  performMCPOAuthFlow,
  useAppState,
  useAppStateStore
} from "./chunk-OTDPNGFK.mjs";
import "./chunk-PJK4KGGT.mjs";
import {
  Byline,
  ConfigurableShortcutHint,
  Dialog,
  KeyboardShortcutHint,
  init_Byline,
  init_ConfigurableShortcutHint,
  init_Dialog,
  init_KeyboardShortcutHint
} from "./chunk-PEMK4FQH.mjs";
import {
  getSessionIngressAuthToken,
  init_sessionIngressAuth
} from "./chunk-SQ6KOOZS.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-Y2PD6CVC.mjs";
import "./chunk-S5Z6SZDA.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import {
  init_useKeybinding,
  useKeybinding,
  useKeybindings
} from "./chunk-HO5F7BV3.mjs";
import "./chunk-M22WMPMZ.mjs";
import "./chunk-4WEGPCYF.mjs";
import "./chunk-Z4JLAMMU.mjs";
import "./chunk-FUHJGEFK.mjs";
import "./chunk-H474P6P2.mjs";
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
import "./chunk-4GJVIJWN.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-HUEORIXP.mjs";
import "./chunk-H6COQF52.mjs";
import "./chunk-IQJUSPBJ.mjs";
import "./chunk-R326WRGL.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import {
  Link,
  ThemedBox_default,
  ThemedText,
  c,
  color,
  init_ink,
  init_react_compiler_runtime,
  useTheme
} from "./chunk-HWTXKBLR.mjs";
import {
  init_react,
  react_default,
  useCallback,
  useEffect,
  useRef,
  useState
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  capitalize,
  init_stringUtils,
  plural
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
import "./chunk-MDXHK5AD.mjs";
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
import {
  figures_default,
  init_figures
} from "./chunk-ZAYB3WZV.mjs";
import {
  init_debug,
  isDebugMode
} from "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import "./chunk-OU3SZVVB.mjs";
import "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/components/mcp/MCPAgentServerMenu.tsx
function MCPAgentServerMenu({
  agentServer,
  onCancel,
  onComplete
}) {
  const [theme] = useTheme();
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [error, setError] = useState(null);
  const [authorizationUrl, setAuthorizationUrl] = useState(null);
  const authAbortControllerRef = useRef(null);
  useEffect(() => () => authAbortControllerRef.current?.abort(), []);
  const handleEscCancel = useCallback(() => {
    if (isAuthenticating) {
      authAbortControllerRef.current?.abort();
      authAbortControllerRef.current = null;
      setIsAuthenticating(false);
      setAuthorizationUrl(null);
    }
  }, [isAuthenticating]);
  useKeybinding("confirm:no", handleEscCancel, {
    context: "Confirmation",
    isActive: isAuthenticating
  });
  const handleAuthenticate = useCallback(async () => {
    if (!agentServer.needsAuth || !agentServer.url) {
      return;
    }
    setIsAuthenticating(true);
    setError(null);
    const controller = new AbortController();
    authAbortControllerRef.current = controller;
    try {
      const tempConfig = {
        type: agentServer.transport,
        url: agentServer.url
      };
      await performMCPOAuthFlow(agentServer.name, tempConfig, setAuthorizationUrl, controller.signal);
      onComplete?.(`Authentication successful for ${agentServer.name}. The server will connect when the agent runs.`);
    } catch (err) {
      if (err instanceof Error && !(err instanceof AuthenticationCancelledError)) {
        setError(err.message);
      }
    } finally {
      setIsAuthenticating(false);
      authAbortControllerRef.current = null;
    }
  }, [agentServer, onComplete]);
  const capitalizedServerName = capitalize(String(agentServer.name));
  if (isAuthenticating) {
    return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1, padding: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "claude" }, "Authenticating with ", agentServer.name, "\u2026"), /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(Spinner, null), /* @__PURE__ */ react_default.createElement(ThemedText, null, " A browser window will open for authentication")), authorizationUrl && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "If your browser doesn't open automatically, copy this URL manually:"), /* @__PURE__ */ react_default.createElement(Link, { url: authorizationUrl })), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginLeft: 3 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Return here after authenticating in your browser.", " ", /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "go back" }))));
  }
  const menuOptions = [];
  if (agentServer.needsAuth) {
    menuOptions.push({
      label: agentServer.isAuthenticated ? "Re-authenticate" : "Authenticate",
      value: "auth"
    });
  }
  menuOptions.push({
    label: "Back",
    value: "back"
  });
  return /* @__PURE__ */ react_default.createElement(Dialog, { title: `${capitalizedServerName} MCP Server`, subtitle: "agent-only", onCancel, inputGuide: (exitState) => exitState.pending ? /* @__PURE__ */ react_default.createElement(ThemedText, null, "Press ", exitState.keyName, " again to exit") : /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "\u2191\u2193", action: "navigate" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "confirm" }), /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "go back" })) }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 0 }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Type: "), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, agentServer.transport)), agentServer.url && /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "URL: "), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, agentServer.url)), agentServer.command && /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Command: "), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, agentServer.command)), /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Used by: "), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, agentServer.sourceAgents.join(", "))), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Status: "), /* @__PURE__ */ react_default.createElement(ThemedText, null, color("inactive", theme)(figures_default.radioOff), " not connected (agent-only)")), agentServer.needsAuth && /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Auth: "), agentServer.isAuthenticated ? /* @__PURE__ */ react_default.createElement(ThemedText, null, color("success", theme)(figures_default.tick), " authenticated") : /* @__PURE__ */ react_default.createElement(ThemedText, null, color("warning", theme)(figures_default.triangleUpOutline), " may need authentication"))), /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "This server connects only when running the agent.")), error && /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, "Error: ", error)), /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(Select, { options: menuOptions, onChange: async (value) => {
    switch (value) {
      case "auth":
        await handleAuthenticate();
        break;
      case "back":
        onCancel();
        break;
    }
  }, onCancel })));
}
var init_MCPAgentServerMenu = __esm({
  "src/components/mcp/MCPAgentServerMenu.tsx"() {
    init_figures();
    init_react();
    init_ink();
    init_useKeybinding();
    init_auth();
    init_stringUtils();
    init_ConfigurableShortcutHint();
    init_CustomSelect();
    init_Byline();
    init_Dialog();
    init_KeyboardShortcutHint();
    init_Spinner();
  }
});

// src/components/mcp/MCPListPanel.tsx
function getScopeHeading(scope) {
  switch (scope) {
    case "project":
      return {
        label: "Project MCPs",
        path: describeMcpConfigFilePath(scope)
      };
    case "user":
      return {
        label: "User MCPs",
        path: describeMcpConfigFilePath(scope)
      };
    case "local":
      return {
        label: "Local MCPs",
        path: describeMcpConfigFilePath(scope)
      };
    case "enterprise":
      return {
        label: "Enterprise MCPs"
      };
    case "dynamic":
      return {
        label: "Built-in MCPs",
        path: "always available"
      };
    default:
      return {
        label: scope
      };
  }
}
function groupServersByScope(serverList) {
  const groups = /* @__PURE__ */ new Map();
  for (const server of serverList) {
    const scope = server.scope;
    if (!groups.has(scope)) {
      groups.set(scope, []);
    }
    groups.get(scope).push(server);
  }
  for (const [, groupServers] of groups) {
    groupServers.sort((a, b) => a.name.localeCompare(b.name));
  }
  return groups;
}
function MCPListPanel(t0) {
  const $ = c(78);
  const {
    servers,
    agentServers: t1,
    onSelectServer,
    onSelectAgentServer,
    onComplete
  } = t0;
  let t2;
  if ($[0] !== t1) {
    t2 = t1 === void 0 ? [] : t1;
    $[0] = t1;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const agentServers = t2;
  const [theme] = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);
  let t3;
  if ($[2] !== servers) {
    const regularServers = servers.filter(_temp);
    t3 = groupServersByScope(regularServers);
    $[2] = servers;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  const serversByScope = t3;
  let t4;
  if ($[4] !== servers) {
    t4 = servers.filter(_temp2).sort(_temp3);
    $[4] = servers;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  const claudeAiServers = t4;
  let t5;
  if ($[6] !== serversByScope) {
    t5 = (serversByScope.get("dynamic") ?? []).sort(_temp4);
    $[6] = serversByScope;
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  const dynamicServers = t5;
  let t6;
  if ($[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = getScopeHeading("dynamic");
    $[8] = t6;
  } else {
    t6 = $[8];
  }
  const dynamicHeading = t6;
  let items;
  if ($[9] !== agentServers || $[10] !== claudeAiServers || $[11] !== dynamicServers || $[12] !== serversByScope) {
    items = [];
    for (const scope of SCOPE_ORDER) {
      const scopeServers = serversByScope.get(scope) ?? [];
      for (const server of scopeServers) {
        items.push({
          type: "server",
          server
        });
      }
    }
    for (const server_0 of claudeAiServers) {
      items.push({
        type: "server",
        server: server_0
      });
    }
    for (const agentServer of agentServers) {
      items.push({
        type: "agent-server",
        agentServer
      });
    }
    for (const server_1 of dynamicServers) {
      items.push({
        type: "server",
        server: server_1
      });
    }
    $[9] = agentServers;
    $[10] = claudeAiServers;
    $[11] = dynamicServers;
    $[12] = serversByScope;
    $[13] = items;
  } else {
    items = $[13];
  }
  const selectableItems = items;
  let t7;
  if ($[14] !== onComplete) {
    t7 = () => {
      onComplete("MCP dialog dismissed", {
        display: "system"
      });
    };
    $[14] = onComplete;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  const handleCancel = t7;
  let t8;
  if ($[16] !== onSelectAgentServer || $[17] !== onSelectServer || $[18] !== selectableItems || $[19] !== selectedIndex) {
    t8 = () => {
      const item = selectableItems[selectedIndex];
      if (!item) {
        return;
      }
      if (item.type === "server") {
        onSelectServer(item.server);
      } else {
        if (item.type === "agent-server" && onSelectAgentServer) {
          onSelectAgentServer(item.agentServer);
        }
      }
    };
    $[16] = onSelectAgentServer;
    $[17] = onSelectServer;
    $[18] = selectableItems;
    $[19] = selectedIndex;
    $[20] = t8;
  } else {
    t8 = $[20];
  }
  const handleSelect = t8;
  let t10;
  let t9;
  if ($[21] !== selectableItems) {
    t9 = () => setSelectedIndex((prev) => prev === 0 ? selectableItems.length - 1 : prev - 1);
    t10 = () => setSelectedIndex((prev_0) => prev_0 === selectableItems.length - 1 ? 0 : prev_0 + 1);
    $[21] = selectableItems;
    $[22] = t10;
    $[23] = t9;
  } else {
    t10 = $[22];
    t9 = $[23];
  }
  let t11;
  if ($[24] !== handleCancel || $[25] !== handleSelect || $[26] !== t10 || $[27] !== t9) {
    t11 = {
      "confirm:previous": t9,
      "confirm:next": t10,
      "confirm:yes": handleSelect,
      "confirm:no": handleCancel
    };
    $[24] = handleCancel;
    $[25] = handleSelect;
    $[26] = t10;
    $[27] = t9;
    $[28] = t11;
  } else {
    t11 = $[28];
  }
  let t12;
  if ($[29] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t12 = {
      context: "Confirmation"
    };
    $[29] = t12;
  } else {
    t12 = $[29];
  }
  useKeybindings(t11, t12);
  let t13;
  if ($[30] !== selectableItems) {
    t13 = (server_2) => selectableItems.findIndex((item_0) => item_0.type === "server" && item_0.server === server_2);
    $[30] = selectableItems;
    $[31] = t13;
  } else {
    t13 = $[31];
  }
  const getServerIndex = t13;
  let t14;
  if ($[32] !== selectableItems) {
    t14 = (agentServer_0) => selectableItems.findIndex((item_1) => item_1.type === "agent-server" && item_1.agentServer === agentServer_0);
    $[32] = selectableItems;
    $[33] = t14;
  } else {
    t14 = $[33];
  }
  const getAgentServerIndex = t14;
  let t15;
  if ($[34] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t15 = isDebugMode();
    $[34] = t15;
  } else {
    t15 = $[34];
  }
  const debugMode = t15;
  let t16;
  if ($[35] !== servers) {
    t16 = servers.some(_temp5);
    $[35] = servers;
    $[36] = t16;
  } else {
    t16 = $[36];
  }
  const hasFailedClients = t16;
  if (servers.length === 0 && agentServers.length === 0) {
    return null;
  }
  let t17;
  if ($[37] !== getServerIndex || $[38] !== selectedIndex || $[39] !== theme) {
    t17 = (server_3) => {
      const index = getServerIndex(server_3);
      const isSelected = selectedIndex === index;
      let statusIcon;
      let statusText;
      if (server_3.client.type === "disabled") {
        statusIcon = color("inactive", theme)(figures_default.radioOff);
        statusText = "disabled";
      } else {
        if (server_3.client.type === "connected") {
          statusIcon = color("success", theme)(figures_default.tick);
          statusText = "connected";
        } else {
          if (server_3.client.type === "pending") {
            statusIcon = color("inactive", theme)(figures_default.radioOff);
            const {
              reconnectAttempt,
              maxReconnectAttempts
            } = server_3.client;
            if (reconnectAttempt && maxReconnectAttempts) {
              statusText = `reconnecting (${reconnectAttempt}/${maxReconnectAttempts})\u2026`;
            } else {
              statusText = "connecting\u2026";
            }
          } else {
            if (server_3.client.type === "needs-auth") {
              statusIcon = color("warning", theme)(figures_default.triangleUpOutline);
              statusText = "needs authentication";
            } else {
              statusIcon = color("error", theme)(figures_default.cross);
              statusText = "failed";
            }
          }
        }
      }
      return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { key: `${server_3.name}-${index}` }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: isSelected ? "suggestion" : void 0 }, isSelected ? `${figures_default.pointer} ` : "  "), /* @__PURE__ */ react_default.createElement(ThemedText, { color: isSelected ? "suggestion" : void 0 }, server_3.name), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: !isSelected }, " \xB7 ", statusIcon, " "), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: !isSelected }, statusText));
    };
    $[37] = getServerIndex;
    $[38] = selectedIndex;
    $[39] = theme;
    $[40] = t17;
  } else {
    t17 = $[40];
  }
  const renderServerItem = t17;
  let t18;
  if ($[41] !== getAgentServerIndex || $[42] !== selectedIndex || $[43] !== theme) {
    t18 = (agentServer_1) => {
      const index_0 = getAgentServerIndex(agentServer_1);
      const isSelected_0 = selectedIndex === index_0;
      const statusIcon_0 = agentServer_1.needsAuth ? color("warning", theme)(figures_default.triangleUpOutline) : color("inactive", theme)(figures_default.radioOff);
      const statusText_0 = agentServer_1.needsAuth ? "may need auth" : "agent-only";
      return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { key: `agent-${agentServer_1.name}-${index_0}` }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: isSelected_0 ? "suggestion" : void 0 }, isSelected_0 ? `${figures_default.pointer} ` : "  "), /* @__PURE__ */ react_default.createElement(ThemedText, { color: isSelected_0 ? "suggestion" : void 0 }, agentServer_1.name), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: !isSelected_0 }, " \xB7 ", statusIcon_0, " "), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: !isSelected_0 }, statusText_0));
    };
    $[41] = getAgentServerIndex;
    $[42] = selectedIndex;
    $[43] = theme;
    $[44] = t18;
  } else {
    t18 = $[44];
  }
  const renderAgentServerItem = t18;
  const totalServers = servers.length + agentServers.length;
  let t19;
  if ($[45] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t19 = /* @__PURE__ */ react_default.createElement(McpParsingWarnings, null);
    $[45] = t19;
  } else {
    t19 = $[45];
  }
  let t20;
  if ($[46] !== totalServers) {
    t20 = plural(totalServers, "server");
    $[46] = totalServers;
    $[47] = t20;
  } else {
    t20 = $[47];
  }
  const t21 = `${totalServers} ${t20}`;
  let t22;
  if ($[48] !== renderServerItem || $[49] !== serversByScope) {
    t22 = SCOPE_ORDER.map((scope_0) => {
      const scopeServers_0 = serversByScope.get(scope_0);
      if (!scopeServers_0 || scopeServers_0.length === 0) {
        return null;
      }
      const heading = getScopeHeading(scope_0);
      return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { key: scope_0, flexDirection: "column", marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { paddingLeft: 2 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, heading.label), heading.path && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, " (", heading.path, ")")), scopeServers_0.map((server_4) => renderServerItem(server_4)));
    });
    $[48] = renderServerItem;
    $[49] = serversByScope;
    $[50] = t22;
  } else {
    t22 = $[50];
  }
  let t23;
  if ($[51] !== claudeAiServers || $[52] !== renderServerItem) {
    t23 = claudeAiServers.length > 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { paddingLeft: 2 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "claude.ai")), claudeAiServers.map((server_5) => renderServerItem(server_5)));
    $[51] = claudeAiServers;
    $[52] = renderServerItem;
    $[53] = t23;
  } else {
    t23 = $[53];
  }
  let t24;
  if ($[54] !== agentServers || $[55] !== renderAgentServerItem) {
    t24 = agentServers.length > 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { paddingLeft: 2 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Agent MCPs")), [...new Set(agentServers.flatMap(_temp6))].map((agentName) => /* @__PURE__ */ react_default.createElement(ThemedBox_default, { key: agentName, flexDirection: "column", marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { paddingLeft: 2 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "@", agentName)), agentServers.filter((s_3) => s_3.sourceAgents.includes(agentName)).map((agentServer_2) => renderAgentServerItem(agentServer_2)))));
    $[54] = agentServers;
    $[55] = renderAgentServerItem;
    $[56] = t24;
  } else {
    t24 = $[56];
  }
  let t25;
  if ($[57] !== dynamicServers || $[58] !== renderServerItem) {
    t25 = dynamicServers.length > 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { paddingLeft: 2 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, dynamicHeading.label), dynamicHeading.path && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, " (", dynamicHeading.path, ")")), dynamicServers.map((server_6) => renderServerItem(server_6)));
    $[57] = dynamicServers;
    $[58] = renderServerItem;
    $[59] = t25;
  } else {
    t25 = $[59];
  }
  let t26;
  if ($[60] !== hasFailedClients) {
    t26 = hasFailedClients && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, debugMode ? "\u203B Error logs shown inline with --debug" : "\u203B Run blaude --debug to see error logs");
    $[60] = hasFailedClients;
    $[61] = t26;
  } else {
    t26 = $[61];
  }
  let t27;
  if ($[62] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t27 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ react_default.createElement(Link, { url: "https://code.claude.com/docs/en/mcp" }, "https://code.claude.com/docs/en/mcp"), " ", "for help");
    $[62] = t27;
  } else {
    t27 = $[62];
  }
  let t28;
  if ($[63] !== t26) {
    t28 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, t26, t27);
    $[63] = t26;
    $[64] = t28;
  } else {
    t28 = $[64];
  }
  let t29;
  if ($[65] !== t22 || $[66] !== t23 || $[67] !== t24 || $[68] !== t25 || $[69] !== t28) {
    t29 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, t22, t23, t24, t25, t28);
    $[65] = t22;
    $[66] = t23;
    $[67] = t24;
    $[68] = t25;
    $[69] = t28;
    $[70] = t29;
  } else {
    t29 = $[70];
  }
  let t30;
  if ($[71] !== handleCancel || $[72] !== t21 || $[73] !== t29) {
    t30 = /* @__PURE__ */ react_default.createElement(Dialog, { title: "Manage MCP servers", subtitle: t21, onCancel: handleCancel, hideInputGuide: true }, t29);
    $[71] = handleCancel;
    $[72] = t21;
    $[73] = t29;
    $[74] = t30;
  } else {
    t30 = $[74];
  }
  let t31;
  if ($[75] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t31 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { paddingX: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true, italic: true }, /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "\u2191\u2193", action: "navigate" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "confirm" }), /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "cancel" }))));
    $[75] = t31;
  } else {
    t31 = $[75];
  }
  let t32;
  if ($[76] !== t30) {
    t32 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, t19, t30, t31);
    $[76] = t30;
    $[77] = t32;
  } else {
    t32 = $[77];
  }
  return t32;
}
function _temp6(s_2) {
  return s_2.sourceAgents;
}
function _temp5(s_1) {
  return s_1.client.type === "failed";
}
function _temp4(a_0, b_0) {
  return a_0.name.localeCompare(b_0.name);
}
function _temp3(a, b) {
  return a.name.localeCompare(b.name);
}
function _temp2(s_0) {
  return s_0.client.config.type === "claudeai-proxy";
}
function _temp(s) {
  return s.client.config.type !== "claudeai-proxy";
}
var SCOPE_ORDER;
var init_MCPListPanel = __esm({
  "src/components/mcp/MCPListPanel.tsx"() {
    init_react_compiler_runtime();
    init_figures();
    init_react();
    init_ink();
    init_useKeybinding();
    init_utils();
    init_debug();
    init_stringUtils();
    init_ConfigurableShortcutHint();
    init_Byline();
    init_Dialog();
    init_KeyboardShortcutHint();
    init_McpParsingWarnings();
    SCOPE_ORDER = ["project", "local", "user", "enterprise"];
  }
});

// src/components/mcp/MCPReconnect.tsx
function MCPReconnect(t0) {
  const $ = c(25);
  const {
    serverName,
    onComplete
  } = t0;
  const [theme] = useTheme();
  const store = useAppStateStore();
  const reconnectMcpServer = useMcpReconnect();
  const [isReconnecting, setIsReconnecting] = useState(true);
  const [error, setError] = useState(null);
  let t1;
  let t2;
  if ($[0] !== onComplete || $[1] !== reconnectMcpServer || $[2] !== serverName || $[3] !== store) {
    t1 = () => {
      const attemptReconnect = async function attemptReconnect2() {
        ;
        try {
          const server = store.getState().mcp.clients.find((c2) => c2.name === serverName);
          if (!server) {
            setError(`MCP server "${serverName}" not found`);
            setIsReconnecting(false);
            onComplete(`MCP server "${serverName}" not found`);
            return;
          }
          const result = await reconnectMcpServer(serverName);
          bb43: switch (result.client.type) {
            case "connected": {
              setIsReconnecting(false);
              onComplete(`Successfully reconnected to ${serverName}`);
              break bb43;
            }
            case "needs-auth": {
              setError(`${serverName} requires authentication`);
              setIsReconnecting(false);
              onComplete(`${serverName} requires authentication. Use /mcp to authenticate.`);
              break bb43;
            }
            case "pending":
            case "failed":
            case "disabled": {
              setError(`Failed to reconnect to ${serverName}`);
              setIsReconnecting(false);
              onComplete(`Failed to reconnect to ${serverName}`);
            }
          }
        } catch (t3) {
          const err = t3;
          const errorMessage = err instanceof Error ? err.message : String(err);
          setError(errorMessage);
          setIsReconnecting(false);
          onComplete(`Error: ${errorMessage}`);
        }
      };
      attemptReconnect();
    };
    t2 = [serverName, reconnectMcpServer, store, onComplete];
    $[0] = onComplete;
    $[1] = reconnectMcpServer;
    $[2] = serverName;
    $[3] = store;
    $[4] = t1;
    $[5] = t2;
  } else {
    t1 = $[4];
    t2 = $[5];
  }
  useEffect(t1, t2);
  if (isReconnecting) {
    let t3;
    if ($[6] !== serverName) {
      t3 = /* @__PURE__ */ react_default.createElement(ThemedText, { color: "text" }, "Reconnecting to ", /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, serverName));
      $[6] = serverName;
      $[7] = t3;
    } else {
      t3 = $[7];
    }
    let t4;
    if ($[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t4 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(Spinner, null), /* @__PURE__ */ react_default.createElement(ThemedText, null, " Establishing connection to MCP server"));
      $[8] = t4;
    } else {
      t4 = $[8];
    }
    let t5;
    if ($[9] !== t3) {
      t5 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1, padding: 1 }, t3, t4);
      $[9] = t3;
      $[10] = t5;
    } else {
      t5 = $[10];
    }
    return t5;
  }
  if (error) {
    let t3;
    if ($[11] !== theme) {
      t3 = color("error", theme)(figures_default.cross);
      $[11] = theme;
      $[12] = t3;
    } else {
      t3 = $[12];
    }
    let t4;
    if ($[13] !== t3) {
      t4 = /* @__PURE__ */ react_default.createElement(ThemedText, null, t3, " ");
      $[13] = t3;
      $[14] = t4;
    } else {
      t4 = $[14];
    }
    let t5;
    if ($[15] !== serverName) {
      t5 = /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, "Failed to reconnect to ", serverName);
      $[15] = serverName;
      $[16] = t5;
    } else {
      t5 = $[16];
    }
    let t6;
    if ($[17] !== t4 || $[18] !== t5) {
      t6 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, t4, t5);
      $[17] = t4;
      $[18] = t5;
      $[19] = t6;
    } else {
      t6 = $[19];
    }
    let t7;
    if ($[20] !== error) {
      t7 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Error: ", error);
      $[20] = error;
      $[21] = t7;
    } else {
      t7 = $[21];
    }
    let t8;
    if ($[22] !== t6 || $[23] !== t7) {
      t8 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1, padding: 1 }, t6, t7);
      $[22] = t6;
      $[23] = t7;
      $[24] = t8;
    } else {
      t8 = $[24];
    }
    return t8;
  }
  return null;
}
var init_MCPReconnect = __esm({
  "src/components/mcp/MCPReconnect.tsx"() {
    init_react_compiler_runtime();
    init_figures();
    init_react();
    init_ink();
    init_MCPConnectionManager();
    init_AppState();
    init_Spinner();
  }
});

// src/components/mcp/MCPSettings.tsx
function MCPSettings(t0) {
  const $ = c(66);
  const {
    onComplete
  } = t0;
  const mcp = useAppState(_temp7);
  const agentDefinitions = useAppState(_temp22);
  const mcpClients = mcp.clients;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = {
      type: "list"
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const [viewState, setViewState] = react_default.useState(t1);
  let t2;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = [];
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const [servers, setServers] = react_default.useState(t2);
  let t3;
  if ($[2] !== agentDefinitions.allAgents) {
    t3 = extractAgentMcpServers(agentDefinitions.allAgents);
    $[2] = agentDefinitions.allAgents;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  const agentMcpServers = t3;
  let t4;
  if ($[4] !== mcpClients) {
    t4 = mcpClients.filter(_temp32).sort(_temp42);
    $[4] = mcpClients;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  const filteredClients = t4;
  let t5;
  let t6;
  if ($[6] !== filteredClients || $[7] !== mcp.tools) {
    t5 = () => {
      let cancelled = false;
      const prepareServers = async function prepareServers2() {
        const serverInfos = await Promise.all(filteredClients.map(async (client_0) => {
          const scope = client_0.config.scope;
          const isSSE = client_0.config.type === "sse";
          const isHTTP = client_0.config.type === "http";
          const isClaudeAIProxy = client_0.config.type === "claudeai-proxy";
          let isAuthenticated = void 0;
          if (isSSE || isHTTP) {
            const authProvider = new ClaudeAuthProvider(client_0.name, client_0.config);
            const tokens = await authProvider.tokens();
            const hasSessionAuth = getSessionIngressAuthToken() !== null && client_0.type === "connected";
            const hasToolsAndConnected = client_0.type === "connected" && filterToolsByServer(mcp.tools, client_0.name).length > 0;
            isAuthenticated = Boolean(tokens) || hasSessionAuth || hasToolsAndConnected;
          }
          const baseInfo = {
            name: client_0.name,
            client: client_0,
            scope
          };
          if (isClaudeAIProxy) {
            return {
              ...baseInfo,
              transport: "claudeai-proxy",
              isAuthenticated: false,
              config: client_0.config
            };
          } else {
            if (isSSE) {
              return {
                ...baseInfo,
                transport: "sse",
                isAuthenticated,
                config: client_0.config
              };
            } else {
              if (isHTTP) {
                return {
                  ...baseInfo,
                  transport: "http",
                  isAuthenticated,
                  config: client_0.config
                };
              } else {
                return {
                  ...baseInfo,
                  transport: "stdio",
                  config: client_0.config
                };
              }
            }
          }
        }));
        if (cancelled) {
          return;
        }
        setServers(serverInfos);
      };
      prepareServers();
      return () => {
        cancelled = true;
      };
    };
    t6 = [filteredClients, mcp.tools];
    $[6] = filteredClients;
    $[7] = mcp.tools;
    $[8] = t5;
    $[9] = t6;
  } else {
    t5 = $[8];
    t6 = $[9];
  }
  react_default.useEffect(t5, t6);
  let t7;
  let t8;
  if ($[10] !== agentMcpServers.length || $[11] !== filteredClients.length || $[12] !== onComplete || $[13] !== servers.length) {
    t7 = () => {
      if (servers.length === 0 && filteredClients.length > 0) {
        return;
      }
      if (servers.length === 0 && agentMcpServers.length === 0) {
        onComplete("No MCP servers configured. Please run /doctor if this is unexpected. Otherwise, run `blaude mcp --help` or visit https://code.claude.com/docs/en/mcp to learn more.");
      }
    };
    t8 = [servers.length, filteredClients.length, agentMcpServers.length, onComplete];
    $[10] = agentMcpServers.length;
    $[11] = filteredClients.length;
    $[12] = onComplete;
    $[13] = servers.length;
    $[14] = t7;
    $[15] = t8;
  } else {
    t7 = $[14];
    t8 = $[15];
  }
  useEffect(t7, t8);
  switch (viewState.type) {
    case "list": {
      let t10;
      let t9;
      if ($[16] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t9 = (server) => setViewState({
          type: "server-menu",
          server
        });
        t10 = (agentServer) => setViewState({
          type: "agent-server-menu",
          agentServer
        });
        $[16] = t10;
        $[17] = t9;
      } else {
        t10 = $[16];
        t9 = $[17];
      }
      let t11;
      if ($[18] !== agentMcpServers || $[19] !== onComplete || $[20] !== servers || $[21] !== viewState.defaultTab) {
        t11 = /* @__PURE__ */ react_default.createElement(MCPListPanel, { servers, agentServers: agentMcpServers, onSelectServer: t9, onSelectAgentServer: t10, onComplete, defaultTab: viewState.defaultTab });
        $[18] = agentMcpServers;
        $[19] = onComplete;
        $[20] = servers;
        $[21] = viewState.defaultTab;
        $[22] = t11;
      } else {
        t11 = $[22];
      }
      return t11;
    }
    case "server-menu": {
      let t9;
      if ($[23] !== mcp.tools || $[24] !== viewState.server.name) {
        t9 = filterToolsByServer(mcp.tools, viewState.server.name);
        $[23] = mcp.tools;
        $[24] = viewState.server.name;
        $[25] = t9;
      } else {
        t9 = $[25];
      }
      const serverTools_0 = t9;
      const defaultTab = viewState.server.transport === "claudeai-proxy" ? "claude.ai" : "Blaude";
      if (viewState.server.transport === "stdio") {
        let t10;
        if ($[26] !== viewState.server) {
          t10 = () => setViewState({
            type: "server-tools",
            server: viewState.server
          });
          $[26] = viewState.server;
          $[27] = t10;
        } else {
          t10 = $[27];
        }
        let t11;
        if ($[28] !== defaultTab) {
          t11 = () => setViewState({
            type: "list",
            defaultTab
          });
          $[28] = defaultTab;
          $[29] = t11;
        } else {
          t11 = $[29];
        }
        let t12;
        if ($[30] !== onComplete || $[31] !== serverTools_0.length || $[32] !== t10 || $[33] !== t11 || $[34] !== viewState.server) {
          t12 = /* @__PURE__ */ react_default.createElement(MCPStdioServerMenu, { server: viewState.server, serverToolsCount: serverTools_0.length, onViewTools: t10, onCancel: t11, onComplete });
          $[30] = onComplete;
          $[31] = serverTools_0.length;
          $[32] = t10;
          $[33] = t11;
          $[34] = viewState.server;
          $[35] = t12;
        } else {
          t12 = $[35];
        }
        return t12;
      } else {
        let t10;
        if ($[36] !== viewState.server) {
          t10 = () => setViewState({
            type: "server-tools",
            server: viewState.server
          });
          $[36] = viewState.server;
          $[37] = t10;
        } else {
          t10 = $[37];
        }
        let t11;
        if ($[38] !== defaultTab) {
          t11 = () => setViewState({
            type: "list",
            defaultTab
          });
          $[38] = defaultTab;
          $[39] = t11;
        } else {
          t11 = $[39];
        }
        let t12;
        if ($[40] !== onComplete || $[41] !== serverTools_0.length || $[42] !== t10 || $[43] !== t11 || $[44] !== viewState.server) {
          t12 = /* @__PURE__ */ react_default.createElement(MCPRemoteServerMenu, { server: viewState.server, serverToolsCount: serverTools_0.length, onViewTools: t10, onCancel: t11, onComplete });
          $[40] = onComplete;
          $[41] = serverTools_0.length;
          $[42] = t10;
          $[43] = t11;
          $[44] = viewState.server;
          $[45] = t12;
        } else {
          t12 = $[45];
        }
        return t12;
      }
    }
    case "server-tools": {
      let t10;
      let t9;
      if ($[46] !== viewState.server) {
        t9 = (_, index) => setViewState({
          type: "server-tool-detail",
          server: viewState.server,
          toolIndex: index
        });
        t10 = () => setViewState({
          type: "server-menu",
          server: viewState.server
        });
        $[46] = viewState.server;
        $[47] = t10;
        $[48] = t9;
      } else {
        t10 = $[47];
        t9 = $[48];
      }
      let t11;
      if ($[49] !== t10 || $[50] !== t9 || $[51] !== viewState.server) {
        t11 = /* @__PURE__ */ react_default.createElement(MCPToolListView, { server: viewState.server, onSelectTool: t9, onBack: t10 });
        $[49] = t10;
        $[50] = t9;
        $[51] = viewState.server;
        $[52] = t11;
      } else {
        t11 = $[52];
      }
      return t11;
    }
    case "server-tool-detail": {
      let t9;
      if ($[53] !== mcp.tools || $[54] !== viewState.server.name) {
        t9 = filterToolsByServer(mcp.tools, viewState.server.name);
        $[53] = mcp.tools;
        $[54] = viewState.server.name;
        $[55] = t9;
      } else {
        t9 = $[55];
      }
      const serverTools = t9;
      const tool = serverTools[viewState.toolIndex];
      if (!tool) {
        setViewState({
          type: "server-tools",
          server: viewState.server
        });
        return null;
      }
      let t10;
      if ($[56] !== viewState.server) {
        t10 = () => setViewState({
          type: "server-tools",
          server: viewState.server
        });
        $[56] = viewState.server;
        $[57] = t10;
      } else {
        t10 = $[57];
      }
      let t11;
      if ($[58] !== t10 || $[59] !== tool || $[60] !== viewState.server) {
        t11 = /* @__PURE__ */ react_default.createElement(MCPToolDetailView, { tool, server: viewState.server, onBack: t10 });
        $[58] = t10;
        $[59] = tool;
        $[60] = viewState.server;
        $[61] = t11;
      } else {
        t11 = $[61];
      }
      return t11;
    }
    case "agent-server-menu": {
      let t9;
      if ($[62] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t9 = () => setViewState({
          type: "list",
          defaultTab: "Agents"
        });
        $[62] = t9;
      } else {
        t9 = $[62];
      }
      let t10;
      if ($[63] !== onComplete || $[64] !== viewState.agentServer) {
        t10 = /* @__PURE__ */ react_default.createElement(MCPAgentServerMenu, { agentServer: viewState.agentServer, onCancel: t9, onComplete });
        $[63] = onComplete;
        $[64] = viewState.agentServer;
        $[65] = t10;
      } else {
        t10 = $[65];
      }
      return t10;
    }
  }
}
function _temp42(a, b) {
  return a.name.localeCompare(b.name);
}
function _temp32(client) {
  return client.name !== "ide";
}
function _temp22(s_0) {
  return s_0.agentDefinitions;
}
function _temp7(s) {
  return s.mcp;
}
var init_MCPSettings = __esm({
  "src/components/mcp/MCPSettings.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_auth();
    init_utils();
    init_AppState();
    init_sessionIngressAuth();
    init_MCPAgentServerMenu();
    init_MCPListPanel();
    init_MCPRemoteServerMenu();
    init_MCPStdioServerMenu();
    init_MCPToolDetailView();
    init_MCPToolListView();
  }
});

// src/components/mcp/index.ts
var init_mcp = __esm({
  "src/components/mcp/index.ts"() {
    init_MCPAgentServerMenu();
    init_MCPListPanel();
    init_MCPReconnect();
    init_MCPRemoteServerMenu();
    init_MCPSettings();
    init_MCPStdioServerMenu();
    init_MCPToolDetailView();
    init_MCPToolListView();
  }
});

// src/commands/mcp/mcp.tsx
function MCPToggle(t0) {
  const $ = c(7);
  const {
    action,
    target,
    onComplete
  } = t0;
  const mcpClients = useAppState(_temp8);
  const toggleMcpServer = useMcpToggleEnabled();
  const didRun = useRef(false);
  let t1;
  let t2;
  if ($[0] !== action || $[1] !== mcpClients || $[2] !== onComplete || $[3] !== target || $[4] !== toggleMcpServer) {
    t1 = () => {
      if (didRun.current) {
        return;
      }
      didRun.current = true;
      const isEnabling = action === "enable";
      const clients = mcpClients.filter(_temp23);
      const toToggle = target === "all" ? clients.filter((c_0) => isEnabling ? c_0.type === "disabled" : c_0.type !== "disabled") : clients.filter((c_1) => c_1.name === target);
      if (toToggle.length === 0) {
        onComplete(target === "all" ? `All MCP servers are already ${isEnabling ? "enabled" : "disabled"}` : `MCP server "${target}" not found`);
        return;
      }
      for (const s_0 of toToggle) {
        toggleMcpServer(s_0.name);
      }
      onComplete(target === "all" ? `${isEnabling ? "Enabled" : "Disabled"} ${toToggle.length} MCP server(s)` : `MCP server "${target}" ${isEnabling ? "enabled" : "disabled"}`);
    };
    t2 = [action, target, mcpClients, toggleMcpServer, onComplete];
    $[0] = action;
    $[1] = mcpClients;
    $[2] = onComplete;
    $[3] = target;
    $[4] = toggleMcpServer;
    $[5] = t1;
    $[6] = t2;
  } else {
    t1 = $[5];
    t2 = $[6];
  }
  useEffect(t1, t2);
  return null;
}
function _temp23(c2) {
  return c2.name !== "ide";
}
function _temp8(s) {
  return s.mcp.clients;
}
async function call(onDone, _context, args) {
  if (args) {
    const parts = args.trim().split(/\s+/);
    if (parts[0] === "no-redirect") {
      return /* @__PURE__ */ react_default.createElement(MCPSettings, { onComplete: onDone });
    }
    if (parts[0] === "reconnect" && parts[1]) {
      return /* @__PURE__ */ react_default.createElement(MCPReconnect, { serverName: parts.slice(1).join(" "), onComplete: onDone });
    }
    if (parts[0] === "enable" || parts[0] === "disable") {
      return /* @__PURE__ */ react_default.createElement(MCPToggle, { action: parts[0], target: parts.length > 1 ? parts.slice(1).join(" ") : "all", onComplete: onDone });
    }
  }
  if (false) {
    return /* @__PURE__ */ react_default.createElement(PluginSettings, { onComplete: onDone, args: "manage", showMcpRedirectMessage: true });
  }
  return /* @__PURE__ */ react_default.createElement(MCPSettings, { onComplete: onDone });
}
var init_mcp2 = __esm({
  "src/commands/mcp/mcp.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_mcp();
    init_MCPReconnect();
    init_MCPConnectionManager();
    init_AppState();
    init_PluginSettings();
  }
});
init_mcp2();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvbWNwL01DUEFnZW50U2VydmVyTWVudS50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvbWNwL01DUExpc3RQYW5lbC50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvbWNwL01DUFJlY29ubmVjdC50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvbWNwL01DUFNldHRpbmdzLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9tY3AvaW5kZXgudHMiLCAiLi4vLi4vc3JjL2NvbW1hbmRzL21jcC9tY3AudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgZmlndXJlcyBmcm9tICdmaWd1cmVzJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgQ29tbWFuZFJlc3VsdERpc3BsYXkgfSBmcm9tICcuLi8uLi9jb21tYW5kcy5qcydcbmltcG9ydCB7IEJveCwgY29sb3IsIExpbmssIFRleHQsIHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdXNlS2V5YmluZGluZyB9IGZyb20gJy4uLy4uL2tleWJpbmRpbmdzL3VzZUtleWJpbmRpbmcuanMnXG5pbXBvcnQge1xuICBBdXRoZW50aWNhdGlvbkNhbmNlbGxlZEVycm9yLFxuICBwZXJmb3JtTUNQT0F1dGhGbG93LFxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tY3AvYXV0aC5qcydcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICcuLi8uLi91dGlscy9zdHJpbmdVdGlscy5qcydcbmltcG9ydCB7IENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludCB9IGZyb20gJy4uL0NvbmZpZ3VyYWJsZVNob3J0Y3V0SGludC5qcydcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJy4uL0N1c3RvbVNlbGVjdC9pbmRleC5qcydcbmltcG9ydCB7IEJ5bGluZSB9IGZyb20gJy4uL2Rlc2lnbi1zeXN0ZW0vQnlsaW5lLmpzJ1xuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi4vZGVzaWduLXN5c3RlbS9EaWFsb2cuanMnXG5pbXBvcnQgeyBLZXlib2FyZFNob3J0Y3V0SGludCB9IGZyb20gJy4uL2Rlc2lnbi1zeXN0ZW0vS2V5Ym9hcmRTaG9ydGN1dEhpbnQuanMnXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnLi4vU3Bpbm5lci5qcydcbmltcG9ydCB0eXBlIHsgQWdlbnRNY3BTZXJ2ZXJJbmZvIH0gZnJvbSAnLi90eXBlcy5qcydcblxudHlwZSBQcm9wcyA9IHtcbiAgYWdlbnRTZXJ2ZXI6IEFnZW50TWNwU2VydmVySW5mb1xuICBvbkNhbmNlbDogKCkgPT4gdm9pZFxuICBvbkNvbXBsZXRlPzogKFxuICAgIHJlc3VsdD86IHN0cmluZyxcbiAgICBvcHRpb25zPzogeyBkaXNwbGF5PzogQ29tbWFuZFJlc3VsdERpc3BsYXkgfSxcbiAgKSA9PiB2b2lkXG59XG5cbi8qKlxuICogTWVudSBmb3IgYWdlbnQtc3BlY2lmaWMgTUNQIHNlcnZlcnMuXG4gKiBUaGVzZSBzZXJ2ZXJzIGFyZSBkZWZpbmVkIGluIGFnZW50IGZyb250bWF0dGVyIGFuZCBvbmx5IGNvbm5lY3Qgd2hlbiB0aGUgYWdlbnQgcnVucy5cbiAqIEZvciBIVFRQL1NTRSBzZXJ2ZXJzLCB0aGlzIGFsbG93cyBwcmUtYXV0aGVudGljYXRpb24gYmVmb3JlIHVzaW5nIHRoZSBhZ2VudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1DUEFnZW50U2VydmVyTWVudSh7XG4gIGFnZW50U2VydmVyLFxuICBvbkNhbmNlbCxcbiAgb25Db21wbGV0ZSxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgW3RoZW1lXSA9IHVzZVRoZW1lKClcbiAgY29uc3QgW2lzQXV0aGVudGljYXRpbmcsIHNldElzQXV0aGVudGljYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2F1dGhvcml6YXRpb25VcmwsIHNldEF1dGhvcml6YXRpb25VcmxdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgYXV0aEFib3J0Q29udHJvbGxlclJlZiA9IHVzZVJlZjxBYm9ydENvbnRyb2xsZXIgfCBudWxsPihudWxsKVxuXG4gIC8vIEFib3J0IE9BdXRoIGZsb3cgb24gdW5tb3VudCBzbyB0aGUgY2FsbGJhY2sgc2VydmVyIGlzIGNsb3NlZCBldmVuIGlmIGFcbiAgLy8gcGFyZW50IGNvbXBvbmVudCdzIEVzYyBoYW5kbGVyIG5hdmlnYXRlcyBhd2F5IGJlZm9yZSBvdXJzIGZpcmVzLlxuICB1c2VFZmZlY3QoKCkgPT4gKCkgPT4gYXV0aEFib3J0Q29udHJvbGxlclJlZi5jdXJyZW50Py5hYm9ydCgpLCBbXSlcblxuICAvLyBIYW5kbGUgRVNDIHRvIGNhbmNlbCBhdXRoZW50aWNhdGlvbiBmbG93XG4gIGNvbnN0IGhhbmRsZUVzY0NhbmNlbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoaXNBdXRoZW50aWNhdGluZykge1xuICAgICAgYXV0aEFib3J0Q29udHJvbGxlclJlZi5jdXJyZW50Py5hYm9ydCgpXG4gICAgICBhdXRoQWJvcnRDb250cm9sbGVyUmVmLmN1cnJlbnQgPSBudWxsXG4gICAgICBzZXRJc0F1dGhlbnRpY2F0aW5nKGZhbHNlKVxuICAgICAgc2V0QXV0aG9yaXphdGlvblVybChudWxsKVxuICAgIH1cbiAgfSwgW2lzQXV0aGVudGljYXRpbmddKVxuXG4gIHVzZUtleWJpbmRpbmcoJ2NvbmZpcm06bm8nLCBoYW5kbGVFc2NDYW5jZWwsIHtcbiAgICBjb250ZXh0OiAnQ29uZmlybWF0aW9uJyxcbiAgICBpc0FjdGl2ZTogaXNBdXRoZW50aWNhdGluZyxcbiAgfSlcblxuICBjb25zdCBoYW5kbGVBdXRoZW50aWNhdGUgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFhZ2VudFNlcnZlci5uZWVkc0F1dGggfHwgIWFnZW50U2VydmVyLnVybCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc2V0SXNBdXRoZW50aWNhdGluZyh0cnVlKVxuICAgIHNldEVycm9yKG51bGwpXG5cbiAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG4gICAgYXV0aEFib3J0Q29udHJvbGxlclJlZi5jdXJyZW50ID0gY29udHJvbGxlclxuXG4gICAgdHJ5IHtcbiAgICAgIC8vIENyZWF0ZSBhIHRlbXBvcmFyeSBjb25maWcgZm9yIE9BdXRoXG4gICAgICBjb25zdCB0ZW1wQ29uZmlnID0ge1xuICAgICAgICB0eXBlOiBhZ2VudFNlcnZlci50cmFuc3BvcnQgYXMgJ2h0dHAnIHwgJ3NzZScsXG4gICAgICAgIHVybDogYWdlbnRTZXJ2ZXIudXJsLFxuICAgICAgfVxuXG4gICAgICBhd2FpdCBwZXJmb3JtTUNQT0F1dGhGbG93KFxuICAgICAgICBhZ2VudFNlcnZlci5uYW1lLFxuICAgICAgICB0ZW1wQ29uZmlnLFxuICAgICAgICBzZXRBdXRob3JpemF0aW9uVXJsLFxuICAgICAgICBjb250cm9sbGVyLnNpZ25hbCxcbiAgICAgIClcblxuICAgICAgb25Db21wbGV0ZT8uKFxuICAgICAgICBgQXV0aGVudGljYXRpb24gc3VjY2Vzc2Z1bCBmb3IgJHthZ2VudFNlcnZlci5uYW1lfS4gVGhlIHNlcnZlciB3aWxsIGNvbm5lY3Qgd2hlbiB0aGUgYWdlbnQgcnVucy5gLFxuICAgICAgKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gRG9uJ3Qgc2hvdyBlcnJvciBpZiBpdCB3YXMgYSBjYW5jZWxsYXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgZXJyIGluc3RhbmNlb2YgRXJyb3IgJiZcbiAgICAgICAgIShlcnIgaW5zdGFuY2VvZiBBdXRoZW50aWNhdGlvbkNhbmNlbGxlZEVycm9yKVxuICAgICAgKSB7XG4gICAgICAgIHNldEVycm9yKGVyci5tZXNzYWdlKVxuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc0F1dGhlbnRpY2F0aW5nKGZhbHNlKVxuICAgICAgYXV0aEFib3J0Q29udHJvbGxlclJlZi5jdXJyZW50ID0gbnVsbFxuICAgIH1cbiAgfSwgW2FnZW50U2VydmVyLCBvbkNvbXBsZXRlXSlcblxuICBjb25zdCBjYXBpdGFsaXplZFNlcnZlck5hbWUgPSBjYXBpdGFsaXplKFN0cmluZyhhZ2VudFNlcnZlci5uYW1lKSlcblxuICBpZiAoaXNBdXRoZW50aWNhdGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9ezF9IHBhZGRpbmc9ezF9PlxuICAgICAgICA8VGV4dCBjb2xvcj1cImNsYXVkZVwiPkF1dGhlbnRpY2F0aW5nIHdpdGgge2FnZW50U2VydmVyLm5hbWV94oCmPC9UZXh0PlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgICAgPFRleHQ+IEEgYnJvd3NlciB3aW5kb3cgd2lsbCBvcGVuIGZvciBhdXRoZW50aWNhdGlvbjwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIHthdXRob3JpemF0aW9uVXJsICYmIChcbiAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICBJZiB5b3VyIGJyb3dzZXIgZG9lc24mYXBvczt0IG9wZW4gYXV0b21hdGljYWxseSwgY29weSB0aGlzIFVSTFxuICAgICAgICAgICAgICBtYW51YWxseTpcbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxMaW5rIHVybD17YXV0aG9yaXphdGlvblVybH0gLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgICAgPEJveCBtYXJnaW5MZWZ0PXszfT5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgIFJldHVybiBoZXJlIGFmdGVyIGF1dGhlbnRpY2F0aW5nIGluIHlvdXIgYnJvd3Nlci57JyAnfVxuICAgICAgICAgICAgPENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludFxuICAgICAgICAgICAgICBhY3Rpb249XCJjb25maXJtOm5vXCJcbiAgICAgICAgICAgICAgY29udGV4dD1cIkNvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICAgIGZhbGxiYWNrPVwiRXNjXCJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJnbyBiYWNrXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxuXG4gIGNvbnN0IG1lbnVPcHRpb25zID0gW11cblxuICAvLyBPbmx5IHNob3cgYXV0aGVudGljYXRlIG9wdGlvbiBmb3IgSFRUUC9TU0Ugc2VydmVyc1xuICBpZiAoYWdlbnRTZXJ2ZXIubmVlZHNBdXRoKSB7XG4gICAgbWVudU9wdGlvbnMucHVzaCh7XG4gICAgICBsYWJlbDogYWdlbnRTZXJ2ZXIuaXNBdXRoZW50aWNhdGVkID8gJ1JlLWF1dGhlbnRpY2F0ZScgOiAnQXV0aGVudGljYXRlJyxcbiAgICAgIHZhbHVlOiAnYXV0aCcsXG4gICAgfSlcbiAgfVxuXG4gIG1lbnVPcHRpb25zLnB1c2goe1xuICAgIGxhYmVsOiAnQmFjaycsXG4gICAgdmFsdWU6ICdiYWNrJyxcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2dcbiAgICAgIHRpdGxlPXtgJHtjYXBpdGFsaXplZFNlcnZlck5hbWV9IE1DUCBTZXJ2ZXJgfVxuICAgICAgc3VidGl0bGU9XCJhZ2VudC1vbmx5XCJcbiAgICAgIG9uQ2FuY2VsPXtvbkNhbmNlbH1cbiAgICAgIGlucHV0R3VpZGU9e2V4aXRTdGF0ZSA9PlxuICAgICAgICBleGl0U3RhdGUucGVuZGluZyA/IChcbiAgICAgICAgICA8VGV4dD5QcmVzcyB7ZXhpdFN0YXRlLmtleU5hbWV9IGFnYWluIHRvIGV4aXQ8L1RleHQ+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEJ5bGluZT5cbiAgICAgICAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cIuKGkeKGk1wiIGFjdGlvbj1cIm5hdmlnYXRlXCIgLz5cbiAgICAgICAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cIkVudGVyXCIgYWN0aW9uPVwiY29uZmlybVwiIC8+XG4gICAgICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgICAgIGFjdGlvbj1cImNvbmZpcm06bm9cIlxuICAgICAgICAgICAgICBjb250ZXh0PVwiQ29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgZmFsbGJhY2s9XCJFc2NcIlxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cImdvIGJhY2tcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0J5bGluZT5cbiAgICAgICAgKVxuICAgICAgfVxuICAgID5cbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGdhcD17MH0+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPFRleHQgYm9sZD5UeXBlOiA8L1RleHQ+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+e2FnZW50U2VydmVyLnRyYW5zcG9ydH08L1RleHQ+XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIHthZ2VudFNlcnZlci51cmwgJiYgKFxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8VGV4dCBib2xkPlVSTDogPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+e2FnZW50U2VydmVyLnVybH08L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG5cbiAgICAgICAge2FnZW50U2VydmVyLmNvbW1hbmQgJiYgKFxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8VGV4dCBib2xkPkNvbW1hbmQ6IDwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPnthZ2VudFNlcnZlci5jb21tYW5kfTwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cblxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxUZXh0IGJvbGQ+VXNlZCBieTogPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPnthZ2VudFNlcnZlci5zb3VyY2VBZ2VudHMuam9pbignLCAnKX08L1RleHQ+XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICA8VGV4dCBib2xkPlN0YXR1czogPC9UZXh0PlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAge2NvbG9yKCdpbmFjdGl2ZScsIHRoZW1lKShmaWd1cmVzLnJhZGlvT2ZmKX0gbm90IGNvbm5lY3RlZFxuICAgICAgICAgICAgKGFnZW50LW9ubHkpXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cblxuICAgICAgICB7YWdlbnRTZXJ2ZXIubmVlZHNBdXRoICYmIChcbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPFRleHQgYm9sZD5BdXRoOiA8L1RleHQ+XG4gICAgICAgICAgICB7YWdlbnRTZXJ2ZXIuaXNBdXRoZW50aWNhdGVkID8gKFxuICAgICAgICAgICAgICA8VGV4dD57Y29sb3IoJ3N1Y2Nlc3MnLCB0aGVtZSkoZmlndXJlcy50aWNrKX0gYXV0aGVudGljYXRlZDwvVGV4dD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgIHtjb2xvcignd2FybmluZycsIHRoZW1lKShmaWd1cmVzLnRyaWFuZ2xlVXBPdXRsaW5lKX0gbWF5IG5lZWRcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3g+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPlRoaXMgc2VydmVyIGNvbm5lY3RzIG9ubHkgd2hlbiBydW5uaW5nIHRoZSBhZ2VudC48L1RleHQ+XG4gICAgICA8L0JveD5cblxuICAgICAge2Vycm9yICYmIChcbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8VGV4dCBjb2xvcj1cImVycm9yXCI+RXJyb3I6IHtlcnJvcn08L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cblxuICAgICAgPEJveD5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIG9wdGlvbnM9e21lbnVPcHRpb25zfVxuICAgICAgICAgIG9uQ2hhbmdlPXthc3luYyB2YWx1ZSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ2F1dGgnOlxuICAgICAgICAgICAgICAgIGF3YWl0IGhhbmRsZUF1dGhlbnRpY2F0ZSgpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAnYmFjayc6XG4gICAgICAgICAgICAgICAgb25DYW5jZWwoKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNhbmNlbD17b25DYW5jZWx9XG4gICAgICAgIC8+XG4gICAgICA8L0JveD5cbiAgICA8L0RpYWxvZz5cbiAgKVxufVxuIiwgImltcG9ydCBmaWd1cmVzIGZyb20gJ2ZpZ3VyZXMnXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IENvbW1hbmRSZXN1bHREaXNwbGF5IH0gZnJvbSAnLi4vLi4vY29tbWFuZHMuanMnXG5pbXBvcnQgeyBCb3gsIGNvbG9yLCBMaW5rLCBUZXh0LCB1c2VUaGVtZSB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7IHVzZUtleWJpbmRpbmdzIH0gZnJvbSAnLi4vLi4va2V5YmluZGluZ3MvdXNlS2V5YmluZGluZy5qcydcbmltcG9ydCB0eXBlIHsgQ29uZmlnU2NvcGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tY3AvdHlwZXMuanMnXG5pbXBvcnQgeyBkZXNjcmliZU1jcENvbmZpZ0ZpbGVQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWNwL3V0aWxzLmpzJ1xuaW1wb3J0IHsgaXNEZWJ1Z01vZGUgfSBmcm9tICcuLi8uLi91dGlscy9kZWJ1Zy5qcydcbmltcG9ydCB7IHBsdXJhbCB9IGZyb20gJy4uLy4uL3V0aWxzL3N0cmluZ1V0aWxzLmpzJ1xuaW1wb3J0IHsgQ29uZmlndXJhYmxlU2hvcnRjdXRIaW50IH0gZnJvbSAnLi4vQ29uZmlndXJhYmxlU2hvcnRjdXRIaW50LmpzJ1xuaW1wb3J0IHsgQnlsaW5lIH0gZnJvbSAnLi4vZGVzaWduLXN5c3RlbS9CeWxpbmUuanMnXG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICcuLi9kZXNpZ24tc3lzdGVtL0RpYWxvZy5qcydcbmltcG9ydCB7IEtleWJvYXJkU2hvcnRjdXRIaW50IH0gZnJvbSAnLi4vZGVzaWduLXN5c3RlbS9LZXlib2FyZFNob3J0Y3V0SGludC5qcydcbmltcG9ydCB7IE1jcFBhcnNpbmdXYXJuaW5ncyB9IGZyb20gJy4vTWNwUGFyc2luZ1dhcm5pbmdzLmpzJ1xuaW1wb3J0IHR5cGUgeyBBZ2VudE1jcFNlcnZlckluZm8sIFNlcnZlckluZm8gfSBmcm9tICcuL3R5cGVzLmpzJ1xuXG50eXBlIFByb3BzID0ge1xuICBzZXJ2ZXJzOiBTZXJ2ZXJJbmZvW11cbiAgYWdlbnRTZXJ2ZXJzPzogQWdlbnRNY3BTZXJ2ZXJJbmZvW11cbiAgb25TZWxlY3RTZXJ2ZXI6IChzZXJ2ZXI6IFNlcnZlckluZm8pID0+IHZvaWRcbiAgb25TZWxlY3RBZ2VudFNlcnZlcj86IChhZ2VudFNlcnZlcjogQWdlbnRNY3BTZXJ2ZXJJbmZvKSA9PiB2b2lkXG4gIG9uQ29tcGxldGU6IChcbiAgICByZXN1bHQ/OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHsgZGlzcGxheT86IENvbW1hbmRSZXN1bHREaXNwbGF5IH0sXG4gICkgPT4gdm9pZFxuICBkZWZhdWx0VGFiPzogc3RyaW5nXG59XG5cbnR5cGUgU2VsZWN0YWJsZUl0ZW0gPVxuICB8IHsgdHlwZTogJ3NlcnZlcic7IHNlcnZlcjogU2VydmVySW5mbyB9XG4gIHwgeyB0eXBlOiAnYWdlbnQtc2VydmVyJzsgYWdlbnRTZXJ2ZXI6IEFnZW50TWNwU2VydmVySW5mbyB9XG5cbi8vIERlZmluZSBzY29wZSBvcmRlciBmb3IgZGlzcGxheSAoY29uc3RhbnQsIG91dHNpZGUgY29tcG9uZW50KVxuLy8gJ2R5bmFtaWMnIChidWlsdC1pbikgaXMgcmVuZGVyZWQgc2VwYXJhdGVseSBhdCB0aGUgZW5kXG5jb25zdCBTQ09QRV9PUkRFUjogQ29uZmlnU2NvcGVbXSA9IFsncHJvamVjdCcsICdsb2NhbCcsICd1c2VyJywgJ2VudGVycHJpc2UnXVxuXG4vLyBHZXQgc2NvcGUgaGVhZGluZyBwYXJ0cyAobGFiZWwgaXMgYm9sZCwgcGF0aCBpcyBncmV5KVxuZnVuY3Rpb24gZ2V0U2NvcGVIZWFkaW5nKHNjb3BlOiBDb25maWdTY29wZSk6IHsgbGFiZWw6IHN0cmluZzsgcGF0aD86IHN0cmluZyB9IHtcbiAgc3dpdGNoIChzY29wZSkge1xuICAgIGNhc2UgJ3Byb2plY3QnOlxuICAgICAgcmV0dXJuIHsgbGFiZWw6ICdQcm9qZWN0IE1DUHMnLCBwYXRoOiBkZXNjcmliZU1jcENvbmZpZ0ZpbGVQYXRoKHNjb3BlKSB9XG4gICAgY2FzZSAndXNlcic6XG4gICAgICByZXR1cm4geyBsYWJlbDogJ1VzZXIgTUNQcycsIHBhdGg6IGRlc2NyaWJlTWNwQ29uZmlnRmlsZVBhdGgoc2NvcGUpIH1cbiAgICBjYXNlICdsb2NhbCc6XG4gICAgICByZXR1cm4geyBsYWJlbDogJ0xvY2FsIE1DUHMnLCBwYXRoOiBkZXNjcmliZU1jcENvbmZpZ0ZpbGVQYXRoKHNjb3BlKSB9XG4gICAgY2FzZSAnZW50ZXJwcmlzZSc6XG4gICAgICByZXR1cm4geyBsYWJlbDogJ0VudGVycHJpc2UgTUNQcycgfVxuICAgIGNhc2UgJ2R5bmFtaWMnOlxuICAgICAgcmV0dXJuIHsgbGFiZWw6ICdCdWlsdC1pbiBNQ1BzJywgcGF0aDogJ2Fsd2F5cyBhdmFpbGFibGUnIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHsgbGFiZWw6IHNjb3BlIH1cbiAgfVxufVxuXG4vLyBHcm91cCBzZXJ2ZXJzIGJ5IHNjb3BlXG5mdW5jdGlvbiBncm91cFNlcnZlcnNCeVNjb3BlKFxuICBzZXJ2ZXJMaXN0OiBTZXJ2ZXJJbmZvW10sXG4pOiBNYXA8Q29uZmlnU2NvcGUsIFNlcnZlckluZm9bXT4ge1xuICBjb25zdCBncm91cHMgPSBuZXcgTWFwPENvbmZpZ1Njb3BlLCBTZXJ2ZXJJbmZvW10+KClcbiAgZm9yIChjb25zdCBzZXJ2ZXIgb2Ygc2VydmVyTGlzdCkge1xuICAgIGNvbnN0IHNjb3BlID0gc2VydmVyLnNjb3BlXG4gICAgaWYgKCFncm91cHMuaGFzKHNjb3BlKSkge1xuICAgICAgZ3JvdXBzLnNldChzY29wZSwgW10pXG4gICAgfVxuICAgIGdyb3Vwcy5nZXQoc2NvcGUpIS5wdXNoKHNlcnZlcilcbiAgfVxuICAvLyBTb3J0IHNlcnZlcnMgd2l0aGluIGVhY2ggZ3JvdXAgYWxwaGFiZXRpY2FsbHlcbiAgZm9yIChjb25zdCBbLCBncm91cFNlcnZlcnNdIG9mIGdyb3Vwcykge1xuICAgIGdyb3VwU2VydmVycy5zb3J0KChhLCBiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKVxuICB9XG4gIHJldHVybiBncm91cHNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1DUExpc3RQYW5lbCh7XG4gIHNlcnZlcnMsXG4gIGFnZW50U2VydmVycyA9IFtdLFxuICBvblNlbGVjdFNlcnZlcixcbiAgb25TZWxlY3RBZ2VudFNlcnZlcixcbiAgb25Db21wbGV0ZSxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgW3RoZW1lXSA9IHVzZVRoZW1lKClcbiAgY29uc3QgW3NlbGVjdGVkSW5kZXgsIHNldFNlbGVjdGVkSW5kZXhdID0gdXNlU3RhdGUoMClcblxuICAvLyBOb24tY2xhdWRlYWkgc2VydmVycyBncm91cGVkIGJ5IHNjb3BlXG4gIGNvbnN0IHNlcnZlcnNCeVNjb3BlID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmVndWxhclNlcnZlcnMgPSBzZXJ2ZXJzLmZpbHRlcihcbiAgICAgIHMgPT4gcy5jbGllbnQuY29uZmlnLnR5cGUgIT09ICdjbGF1ZGVhaS1wcm94eScsXG4gICAgKVxuICAgIHJldHVybiBncm91cFNlcnZlcnNCeVNjb3BlKHJlZ3VsYXJTZXJ2ZXJzKVxuICB9LCBbc2VydmVyc10pXG5cbiAgY29uc3QgY2xhdWRlQWlTZXJ2ZXJzID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgc2VydmVyc1xuICAgICAgICAuZmlsdGVyKHMgPT4gcy5jbGllbnQuY29uZmlnLnR5cGUgPT09ICdjbGF1ZGVhaS1wcm94eScpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKSxcbiAgICBbc2VydmVyc10sXG4gIClcblxuICAvLyBCdWlsdC1pbiAoZHluYW1pYykgc2VydmVycyAtIHJlbmRlcmVkIGxhc3RcbiAgY29uc3QgZHluYW1pY1NlcnZlcnMgPSBSZWFjdC51c2VNZW1vKFxuICAgICgpID0+XG4gICAgICAoc2VydmVyc0J5U2NvcGUuZ2V0KCdkeW5hbWljJykgPz8gW10pLnNvcnQoKGEsIGIpID0+XG4gICAgICAgIGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSksXG4gICAgICApLFxuICAgIFtzZXJ2ZXJzQnlTY29wZV0sXG4gIClcblxuICAvLyBQcmUtY29tcHV0ZSBkeW5hbWljIGhlYWRpbmcgZm9yIHJlbmRlclxuICBjb25zdCBkeW5hbWljSGVhZGluZyA9IGdldFNjb3BlSGVhZGluZygnZHluYW1pYycpXG5cbiAgLy8gQnVpbGQgZmxhdCBsaXN0IG9mIHNlbGVjdGFibGUgaXRlbXMgaW4gZGlzcGxheSBvcmRlclxuICBjb25zdCBzZWxlY3RhYmxlSXRlbXMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBpdGVtczogU2VsZWN0YWJsZUl0ZW1bXSA9IFtdXG4gICAgZm9yIChjb25zdCBzY29wZSBvZiBTQ09QRV9PUkRFUikge1xuICAgICAgY29uc3Qgc2NvcGVTZXJ2ZXJzID0gc2VydmVyc0J5U2NvcGUuZ2V0KHNjb3BlKSA/PyBbXVxuICAgICAgZm9yIChjb25zdCBzZXJ2ZXIgb2Ygc2NvcGVTZXJ2ZXJzKSB7XG4gICAgICAgIGl0ZW1zLnB1c2goeyB0eXBlOiAnc2VydmVyJywgc2VydmVyIH0pXG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3Qgc2VydmVyIG9mIGNsYXVkZUFpU2VydmVycykge1xuICAgICAgaXRlbXMucHVzaCh7IHR5cGU6ICdzZXJ2ZXInLCBzZXJ2ZXIgfSlcbiAgICB9XG4gICAgZm9yIChjb25zdCBhZ2VudFNlcnZlciBvZiBhZ2VudFNlcnZlcnMpIHtcbiAgICAgIGl0ZW1zLnB1c2goeyB0eXBlOiAnYWdlbnQtc2VydmVyJywgYWdlbnRTZXJ2ZXIgfSlcbiAgICB9XG4gICAgLy8gRHluYW1pYyAoYnVpbHQtaW4pIHNlcnZlcnMgY29tZSBsYXN0XG4gICAgZm9yIChjb25zdCBzZXJ2ZXIgb2YgZHluYW1pY1NlcnZlcnMpIHtcbiAgICAgIGl0ZW1zLnB1c2goeyB0eXBlOiAnc2VydmVyJywgc2VydmVyIH0pXG4gICAgfVxuICAgIHJldHVybiBpdGVtc1xuICB9LCBbc2VydmVyc0J5U2NvcGUsIGNsYXVkZUFpU2VydmVycywgYWdlbnRTZXJ2ZXJzLCBkeW5hbWljU2VydmVyc10pXG5cbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gdXNlQ2FsbGJhY2soKCk6IHZvaWQgPT4ge1xuICAgIG9uQ29tcGxldGUoJ01DUCBkaWFsb2cgZGlzbWlzc2VkJywge1xuICAgICAgZGlzcGxheTogJ3N5c3RlbScsXG4gICAgfSlcbiAgfSwgW29uQ29tcGxldGVdKVxuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdCA9IHVzZUNhbGxiYWNrKCgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBpdGVtID0gc2VsZWN0YWJsZUl0ZW1zW3NlbGVjdGVkSW5kZXhdXG4gICAgaWYgKCFpdGVtKSByZXR1cm5cbiAgICBpZiAoaXRlbS50eXBlID09PSAnc2VydmVyJykge1xuICAgICAgb25TZWxlY3RTZXJ2ZXIoaXRlbS5zZXJ2ZXIpXG4gICAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT09ICdhZ2VudC1zZXJ2ZXInICYmIG9uU2VsZWN0QWdlbnRTZXJ2ZXIpIHtcbiAgICAgIG9uU2VsZWN0QWdlbnRTZXJ2ZXIoaXRlbS5hZ2VudFNlcnZlcilcbiAgICB9XG4gIH0sIFtzZWxlY3RhYmxlSXRlbXMsIHNlbGVjdGVkSW5kZXgsIG9uU2VsZWN0U2VydmVyLCBvblNlbGVjdEFnZW50U2VydmVyXSlcblxuICAvLyBVc2UgY29uZmlndXJhYmxlIGtleWJpbmRpbmdzIGZvciBuYXZpZ2F0aW9uIGFuZCBzZWxlY3Rpb25cbiAgdXNlS2V5YmluZGluZ3MoXG4gICAge1xuICAgICAgJ2NvbmZpcm06cHJldmlvdXMnOiAoKSA9PlxuICAgICAgICBzZXRTZWxlY3RlZEluZGV4KHByZXYgPT5cbiAgICAgICAgICBwcmV2ID09PSAwID8gc2VsZWN0YWJsZUl0ZW1zLmxlbmd0aCAtIDEgOiBwcmV2IC0gMSxcbiAgICAgICAgKSxcbiAgICAgICdjb25maXJtOm5leHQnOiAoKSA9PlxuICAgICAgICBzZXRTZWxlY3RlZEluZGV4KHByZXYgPT5cbiAgICAgICAgICBwcmV2ID09PSBzZWxlY3RhYmxlSXRlbXMubGVuZ3RoIC0gMSA/IDAgOiBwcmV2ICsgMSxcbiAgICAgICAgKSxcbiAgICAgICdjb25maXJtOnllcyc6IGhhbmRsZVNlbGVjdCxcbiAgICAgICdjb25maXJtOm5vJzogaGFuZGxlQ2FuY2VsLFxuICAgIH0sXG4gICAgeyBjb250ZXh0OiAnQ29uZmlybWF0aW9uJyB9LFxuICApXG5cbiAgLy8gQnVpbGQgaW5kZXggbG9va3VwIGZvciBlYWNoIHNlcnZlclxuICBjb25zdCBnZXRTZXJ2ZXJJbmRleCA9IChzZXJ2ZXI6IFNlcnZlckluZm8pOiBudW1iZXIgPT4ge1xuICAgIHJldHVybiBzZWxlY3RhYmxlSXRlbXMuZmluZEluZGV4KFxuICAgICAgaXRlbSA9PiBpdGVtLnR5cGUgPT09ICdzZXJ2ZXInICYmIGl0ZW0uc2VydmVyID09PSBzZXJ2ZXIsXG4gICAgKVxuICB9XG5cbiAgY29uc3QgZ2V0QWdlbnRTZXJ2ZXJJbmRleCA9IChhZ2VudFNlcnZlcjogQWdlbnRNY3BTZXJ2ZXJJbmZvKTogbnVtYmVyID0+IHtcbiAgICByZXR1cm4gc2VsZWN0YWJsZUl0ZW1zLmZpbmRJbmRleChcbiAgICAgIGl0ZW0gPT4gaXRlbS50eXBlID09PSAnYWdlbnQtc2VydmVyJyAmJiBpdGVtLmFnZW50U2VydmVyID09PSBhZ2VudFNlcnZlcixcbiAgICApXG4gIH1cblxuICBjb25zdCBkZWJ1Z01vZGUgPSBpc0RlYnVnTW9kZSgpXG4gIGNvbnN0IGhhc0ZhaWxlZENsaWVudHMgPSBzZXJ2ZXJzLnNvbWUocyA9PiBzLmNsaWVudC50eXBlID09PSAnZmFpbGVkJylcblxuICBpZiAoc2VydmVycy5sZW5ndGggPT09IDAgJiYgYWdlbnRTZXJ2ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCByZW5kZXJTZXJ2ZXJJdGVtID0gKHNlcnZlcjogU2VydmVySW5mbyk6IFJlYWN0LlJlYWN0Tm9kZSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBnZXRTZXJ2ZXJJbmRleChzZXJ2ZXIpXG4gICAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkSW5kZXggPT09IGluZGV4XG4gICAgbGV0IHN0YXR1c0ljb24gPSAnJ1xuICAgIGxldCBzdGF0dXNUZXh0ID0gJydcblxuICAgIGlmIChzZXJ2ZXIuY2xpZW50LnR5cGUgPT09ICdkaXNhYmxlZCcpIHtcbiAgICAgIHN0YXR1c0ljb24gPSBjb2xvcignaW5hY3RpdmUnLCB0aGVtZSkoZmlndXJlcy5yYWRpb09mZilcbiAgICAgIHN0YXR1c1RleHQgPSAnZGlzYWJsZWQnXG4gICAgfSBlbHNlIGlmIChzZXJ2ZXIuY2xpZW50LnR5cGUgPT09ICdjb25uZWN0ZWQnKSB7XG4gICAgICBzdGF0dXNJY29uID0gY29sb3IoJ3N1Y2Nlc3MnLCB0aGVtZSkoZmlndXJlcy50aWNrKVxuICAgICAgc3RhdHVzVGV4dCA9ICdjb25uZWN0ZWQnXG4gICAgfSBlbHNlIGlmIChzZXJ2ZXIuY2xpZW50LnR5cGUgPT09ICdwZW5kaW5nJykge1xuICAgICAgc3RhdHVzSWNvbiA9IGNvbG9yKCdpbmFjdGl2ZScsIHRoZW1lKShmaWd1cmVzLnJhZGlvT2ZmKVxuICAgICAgY29uc3QgeyByZWNvbm5lY3RBdHRlbXB0LCBtYXhSZWNvbm5lY3RBdHRlbXB0cyB9ID0gc2VydmVyLmNsaWVudFxuICAgICAgaWYgKHJlY29ubmVjdEF0dGVtcHQgJiYgbWF4UmVjb25uZWN0QXR0ZW1wdHMpIHtcbiAgICAgICAgc3RhdHVzVGV4dCA9IGByZWNvbm5lY3RpbmcgKCR7cmVjb25uZWN0QXR0ZW1wdH0vJHttYXhSZWNvbm5lY3RBdHRlbXB0c30p4oCmYFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdHVzVGV4dCA9ICdjb25uZWN0aW5n4oCmJ1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2VydmVyLmNsaWVudC50eXBlID09PSAnbmVlZHMtYXV0aCcpIHtcbiAgICAgIHN0YXR1c0ljb24gPSBjb2xvcignd2FybmluZycsIHRoZW1lKShmaWd1cmVzLnRyaWFuZ2xlVXBPdXRsaW5lKVxuICAgICAgc3RhdHVzVGV4dCA9ICduZWVkcyBhdXRoZW50aWNhdGlvbidcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdHVzSWNvbiA9IGNvbG9yKCdlcnJvcicsIHRoZW1lKShmaWd1cmVzLmNyb3NzKVxuICAgICAgc3RhdHVzVGV4dCA9ICdmYWlsZWQnXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3gga2V5PXtgJHtzZXJ2ZXIubmFtZX0tJHtpbmRleH1gfT5cbiAgICAgICAgPFRleHQgY29sb3I9e2lzU2VsZWN0ZWQgPyAnc3VnZ2VzdGlvbicgOiB1bmRlZmluZWR9PlxuICAgICAgICAgIHtpc1NlbGVjdGVkID8gYCR7ZmlndXJlcy5wb2ludGVyfSBgIDogJyAgJ31cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dCBjb2xvcj17aXNTZWxlY3RlZCA/ICdzdWdnZXN0aW9uJyA6IHVuZGVmaW5lZH0+e3NlcnZlci5uYW1lfTwvVGV4dD5cbiAgICAgICAgPFRleHQgZGltQ29sb3I9eyFpc1NlbGVjdGVkfT4gwrcge3N0YXR1c0ljb259IDwvVGV4dD5cbiAgICAgICAgPFRleHQgZGltQ29sb3I9eyFpc1NlbGVjdGVkfT57c3RhdHVzVGV4dH08L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICBjb25zdCByZW5kZXJBZ2VudFNlcnZlckl0ZW0gPSAoXG4gICAgYWdlbnRTZXJ2ZXI6IEFnZW50TWNwU2VydmVySW5mbyxcbiAgKTogUmVhY3QuUmVhY3ROb2RlID0+IHtcbiAgICBjb25zdCBpbmRleCA9IGdldEFnZW50U2VydmVySW5kZXgoYWdlbnRTZXJ2ZXIpXG4gICAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkSW5kZXggPT09IGluZGV4XG4gICAgY29uc3Qgc3RhdHVzSWNvbiA9IGFnZW50U2VydmVyLm5lZWRzQXV0aFxuICAgICAgPyBjb2xvcignd2FybmluZycsIHRoZW1lKShmaWd1cmVzLnRyaWFuZ2xlVXBPdXRsaW5lKVxuICAgICAgOiBjb2xvcignaW5hY3RpdmUnLCB0aGVtZSkoZmlndXJlcy5yYWRpb09mZilcbiAgICBjb25zdCBzdGF0dXNUZXh0ID0gYWdlbnRTZXJ2ZXIubmVlZHNBdXRoID8gJ21heSBuZWVkIGF1dGgnIDogJ2FnZW50LW9ubHknXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBrZXk9e2BhZ2VudC0ke2FnZW50U2VydmVyLm5hbWV9LSR7aW5kZXh9YH0+XG4gICAgICAgIDxUZXh0IGNvbG9yPXtpc1NlbGVjdGVkID8gJ3N1Z2dlc3Rpb24nIDogdW5kZWZpbmVkfT5cbiAgICAgICAgICB7aXNTZWxlY3RlZCA/IGAke2ZpZ3VyZXMucG9pbnRlcn0gYCA6ICcgICd9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQgY29sb3I9e2lzU2VsZWN0ZWQgPyAnc3VnZ2VzdGlvbicgOiB1bmRlZmluZWR9PlxuICAgICAgICAgIHthZ2VudFNlcnZlci5uYW1lfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPXshaXNTZWxlY3RlZH0+IMK3IHtzdGF0dXNJY29ufSA8L1RleHQ+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPXshaXNTZWxlY3RlZH0+e3N0YXR1c1RleHR9PC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgY29uc3QgdG90YWxTZXJ2ZXJzID0gc2VydmVycy5sZW5ndGggKyBhZ2VudFNlcnZlcnMubGVuZ3RoXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgIDxNY3BQYXJzaW5nV2FybmluZ3MgLz5cblxuICAgICAgPERpYWxvZ1xuICAgICAgICB0aXRsZT1cIk1hbmFnZSBNQ1Agc2VydmVyc1wiXG4gICAgICAgIHN1YnRpdGxlPXtgJHt0b3RhbFNlcnZlcnN9ICR7cGx1cmFsKHRvdGFsU2VydmVycywgJ3NlcnZlcicpfWB9XG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9XG4gICAgICAgIGhpZGVJbnB1dEd1aWRlXG4gICAgICA+XG4gICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgIHsvKiBSZWd1bGFyIHNlcnZlcnMgZ3JvdXBlZCBieSBzY29wZSAqL31cbiAgICAgICAgICB7U0NPUEVfT1JERVIubWFwKHNjb3BlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNjb3BlU2VydmVycyA9IHNlcnZlcnNCeVNjb3BlLmdldChzY29wZSlcbiAgICAgICAgICAgIGlmICghc2NvcGVTZXJ2ZXJzIHx8IHNjb3BlU2VydmVycy5sZW5ndGggPT09IDApIHJldHVybiBudWxsXG4gICAgICAgICAgICBjb25zdCBoZWFkaW5nID0gZ2V0U2NvcGVIZWFkaW5nKHNjb3BlKVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPEJveCBrZXk9e3Njb3BlfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbWFyZ2luQm90dG9tPXsxfT5cbiAgICAgICAgICAgICAgICA8Qm94IHBhZGRpbmdMZWZ0PXsyfT5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IGJvbGQ+e2hlYWRpbmcubGFiZWx9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAge2hlYWRpbmcucGF0aCAmJiA8VGV4dCBkaW1Db2xvcj4gKHtoZWFkaW5nLnBhdGh9KTwvVGV4dD59XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAge3Njb3BlU2VydmVycy5tYXAoc2VydmVyID0+IHJlbmRlclNlcnZlckl0ZW0oc2VydmVyKSl9XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgey8qIENsYXVkZS5haSBzZXJ2ZXJzIHNlY3Rpb24gKi99XG4gICAgICAgICAge2NsYXVkZUFpU2VydmVycy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpbkJvdHRvbT17MX0+XG4gICAgICAgICAgICAgIDxCb3ggcGFkZGluZ0xlZnQ9ezJ9PlxuICAgICAgICAgICAgICAgIDxUZXh0IGJvbGQ+Y2xhdWRlLmFpPC9UZXh0PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAge2NsYXVkZUFpU2VydmVycy5tYXAoc2VydmVyID0+IHJlbmRlclNlcnZlckl0ZW0oc2VydmVyKSl9XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgey8qIEFnZW50IHNlcnZlcnMgc2VjdGlvbiAtIGdyb3VwZWQgYnkgc291cmNlIGFnZW50ICovfVxuICAgICAgICAgIHthZ2VudFNlcnZlcnMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBtYXJnaW5Cb3R0b209ezF9PlxuICAgICAgICAgICAgICA8Qm94IHBhZGRpbmdMZWZ0PXsyfT5cbiAgICAgICAgICAgICAgICA8VGV4dCBib2xkPkFnZW50IE1DUHM8L1RleHQ+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICB7LyogR3JvdXAgc2VydmVycyBieSBzb3VyY2UgYWdlbnQgKi99XG4gICAgICAgICAgICAgIHtbLi4ubmV3IFNldChhZ2VudFNlcnZlcnMuZmxhdE1hcChzID0+IHMuc291cmNlQWdlbnRzKSldLm1hcChcbiAgICAgICAgICAgICAgICBhZ2VudE5hbWUgPT4gKFxuICAgICAgICAgICAgICAgICAgPEJveCBrZXk9e2FnZW50TmFtZX0gZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggcGFkZGluZ0xlZnQ9ezJ9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPkB7YWdlbnROYW1lfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIHthZ2VudFNlcnZlcnNcbiAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHMgPT4gcy5zb3VyY2VBZ2VudHMuaW5jbHVkZXMoYWdlbnROYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAubWFwKGFnZW50U2VydmVyID0+IHJlbmRlckFnZW50U2VydmVySXRlbShhZ2VudFNlcnZlcikpfVxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7LyogQnVpbHQtaW4gKGR5bmFtaWMpIHNlcnZlcnMgc2VjdGlvbiAtIGFsd2F5cyBsYXN0ICovfVxuICAgICAgICAgIHtkeW5hbWljU2VydmVycy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpbkJvdHRvbT17MX0+XG4gICAgICAgICAgICAgIDxCb3ggcGFkZGluZ0xlZnQ9ezJ9PlxuICAgICAgICAgICAgICAgIDxUZXh0IGJvbGQ+e2R5bmFtaWNIZWFkaW5nLmxhYmVsfTwvVGV4dD5cbiAgICAgICAgICAgICAgICB7ZHluYW1pY0hlYWRpbmcucGF0aCAmJiAoXG4gICAgICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj4gKHtkeW5hbWljSGVhZGluZy5wYXRofSk8L1RleHQ+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIHtkeW5hbWljU2VydmVycy5tYXAoc2VydmVyID0+IHJlbmRlclNlcnZlckl0ZW0oc2VydmVyKSl9XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgey8qIEZvb3RlciBpbmZvICovfVxuICAgICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAge2hhc0ZhaWxlZENsaWVudHMgJiYgKFxuICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgICB7ZGVidWdNb2RlXG4gICAgICAgICAgICAgICAgICA/ICfigLsgRXJyb3IgbG9ncyBzaG93biBpbmxpbmUgd2l0aCAtLWRlYnVnJ1xuICAgICAgICAgICAgICAgICAgOiAn4oC7IFJ1biBjbGF1ZGUgLS1kZWJ1ZyB0byBzZWUgZXJyb3IgbG9ncyd9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgPExpbmsgdXJsPVwiaHR0cHM6Ly9jb2RlLmNsYXVkZS5jb20vZG9jcy9lbi9tY3BcIj5cbiAgICAgICAgICAgICAgICBodHRwczovL2NvZGUuY2xhdWRlLmNvbS9kb2NzL2VuL21jcFxuICAgICAgICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgICAgICAgZm9yIGhlbHBcbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0RpYWxvZz5cblxuICAgICAgey8qIEN1c3RvbSBmb290ZXIgd2l0aCBuYXZpZ2F0aW9uIGhpbnQgKi99XG4gICAgICA8Qm94IHBhZGRpbmdYPXsxfT5cbiAgICAgICAgPFRleHQgZGltQ29sb3IgaXRhbGljPlxuICAgICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCLihpHihpNcIiBhY3Rpb249XCJuYXZpZ2F0ZVwiIC8+XG4gICAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCJFbnRlclwiIGFjdGlvbj1cImNvbmZpcm1cIiAvPlxuICAgICAgICAgICAgPENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludFxuICAgICAgICAgICAgICBhY3Rpb249XCJjb25maXJtOm5vXCJcbiAgICAgICAgICAgICAgY29udGV4dD1cIkNvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICAgIGZhbGxiYWNrPVwiRXNjXCJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJjYW5jZWxcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0J5bGluZT5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gIClcbn1cbiIsICJpbXBvcnQgZmlndXJlcyBmcm9tICdmaWd1cmVzJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgQ29tbWFuZFJlc3VsdERpc3BsYXkgfSBmcm9tICcuLi8uLi9jb21tYW5kcy5qcydcbmltcG9ydCB7IEJveCwgY29sb3IsIFRleHQsIHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdXNlTWNwUmVjb25uZWN0IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWNwL01DUENvbm5lY3Rpb25NYW5hZ2VyLmpzJ1xuaW1wb3J0IHsgdXNlQXBwU3RhdGVTdG9yZSB9IGZyb20gJy4uLy4uL3N0YXRlL0FwcFN0YXRlLmpzJ1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJy4uL1NwaW5uZXIuanMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIHNlcnZlck5hbWU6IHN0cmluZ1xuICBvbkNvbXBsZXRlOiAoXG4gICAgcmVzdWx0Pzogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7IGRpc3BsYXk/OiBDb21tYW5kUmVzdWx0RGlzcGxheSB9LFxuICApID0+IHZvaWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1DUFJlY29ubmVjdCh7XG4gIHNlcnZlck5hbWUsXG4gIG9uQ29tcGxldGUsXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IFt0aGVtZV0gPSB1c2VUaGVtZSgpXG4gIGNvbnN0IHN0b3JlID0gdXNlQXBwU3RhdGVTdG9yZSgpXG4gIGNvbnN0IHJlY29ubmVjdE1jcFNlcnZlciA9IHVzZU1jcFJlY29ubmVjdCgpXG4gIGNvbnN0IFtpc1JlY29ubmVjdGluZywgc2V0SXNSZWNvbm5lY3RpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gYXR0ZW1wdFJlY29ubmVjdCgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIENoZWNrIGlmIHNlcnZlciBleGlzdHMuIFJlYWQgdmlhIHN0b3JlLmdldFN0YXRlKCkgaW5zdGVhZCBvZiBhXG4gICAgICAgIC8vIHJlYWN0aXZlIHNlbGVjdG9yIHNvIHRoaXMgZWZmZWN0IGRvZXMgbm90IHJlLWZpcmUgd2hlblxuICAgICAgICAvLyByZWNvbm5lY3RNY3BTZXJ2ZXIgdXBkYXRlcyBtY3AuY2xpZW50cyB2aWEgb25Db25uZWN0aW9uQXR0ZW1wdC5cbiAgICAgICAgY29uc3Qgc2VydmVyID0gc3RvcmVcbiAgICAgICAgICAuZ2V0U3RhdGUoKVxuICAgICAgICAgIC5tY3AuY2xpZW50cy5maW5kKGMgPT4gYy5uYW1lID09PSBzZXJ2ZXJOYW1lKVxuICAgICAgICBpZiAoIXNlcnZlcikge1xuICAgICAgICAgIHNldEVycm9yKGBNQ1Agc2VydmVyIFwiJHtzZXJ2ZXJOYW1lfVwiIG5vdCBmb3VuZGApXG4gICAgICAgICAgc2V0SXNSZWNvbm5lY3RpbmcoZmFsc2UpXG4gICAgICAgICAgb25Db21wbGV0ZShgTUNQIHNlcnZlciBcIiR7c2VydmVyTmFtZX1cIiBub3QgZm91bmRgKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXR0ZW1wdCByZWNvbm5lY3Rpb25cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVjb25uZWN0TWNwU2VydmVyKHNlcnZlck5hbWUpXG5cbiAgICAgICAgc3dpdGNoIChyZXN1bHQuY2xpZW50LnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdjb25uZWN0ZWQnOlxuICAgICAgICAgICAgc2V0SXNSZWNvbm5lY3RpbmcoZmFsc2UpXG4gICAgICAgICAgICBvbkNvbXBsZXRlKGBTdWNjZXNzZnVsbHkgcmVjb25uZWN0ZWQgdG8gJHtzZXJ2ZXJOYW1lfWApXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGNhc2UgJ25lZWRzLWF1dGgnOlxuICAgICAgICAgICAgc2V0RXJyb3IoYCR7c2VydmVyTmFtZX0gcmVxdWlyZXMgYXV0aGVudGljYXRpb25gKVxuICAgICAgICAgICAgc2V0SXNSZWNvbm5lY3RpbmcoZmFsc2UpXG4gICAgICAgICAgICBvbkNvbXBsZXRlKFxuICAgICAgICAgICAgICBgJHtzZXJ2ZXJOYW1lfSByZXF1aXJlcyBhdXRoZW50aWNhdGlvbi4gVXNlIC9tY3AgdG8gYXV0aGVudGljYXRlLmAsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGNhc2UgJ3BlbmRpbmcnOlxuICAgICAgICAgIGNhc2UgJ2ZhaWxlZCc6XG4gICAgICAgICAgY2FzZSAnZGlzYWJsZWQnOlxuICAgICAgICAgICAgc2V0RXJyb3IoYEZhaWxlZCB0byByZWNvbm5lY3QgdG8gJHtzZXJ2ZXJOYW1lfWApXG4gICAgICAgICAgICBzZXRJc1JlY29ubmVjdGluZyhmYWxzZSlcbiAgICAgICAgICAgIG9uQ29tcGxldGUoYEZhaWxlZCB0byByZWNvbm5lY3QgdG8gJHtzZXJ2ZXJOYW1lfWApXG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy8gT25seSBjYXRjaCBhY3R1YWwgZXJyb3JzIChsaWtlIHNlcnZlciBub3QgZm91bmQpXG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBTdHJpbmcoZXJyKVxuICAgICAgICBzZXRFcnJvcihlcnJvck1lc3NhZ2UpXG4gICAgICAgIHNldElzUmVjb25uZWN0aW5nKGZhbHNlKVxuICAgICAgICBvbkNvbXBsZXRlKGBFcnJvcjogJHtlcnJvck1lc3NhZ2V9YClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2b2lkIGF0dGVtcHRSZWNvbm5lY3QoKVxuICB9LCBbc2VydmVyTmFtZSwgcmVjb25uZWN0TWNwU2VydmVyLCBzdG9yZSwgb25Db21wbGV0ZV0pXG5cbiAgaWYgKGlzUmVjb25uZWN0aW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGdhcD17MX0gcGFkZGluZz17MX0+XG4gICAgICAgIDxUZXh0IGNvbG9yPVwidGV4dFwiPlxuICAgICAgICAgIFJlY29ubmVjdGluZyB0byA8VGV4dCBib2xkPntzZXJ2ZXJOYW1lfTwvVGV4dD5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgICAgPFRleHQ+IEVzdGFibGlzaGluZyBjb25uZWN0aW9uIHRvIE1DUCBzZXJ2ZXI8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGdhcD17MX0gcGFkZGluZz17MX0+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPFRleHQ+e2NvbG9yKCdlcnJvcicsIHRoZW1lKShmaWd1cmVzLmNyb3NzKX0gPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZXJyb3JcIj5GYWlsZWQgdG8gcmVjb25uZWN0IHRvIHtzZXJ2ZXJOYW1lfTwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPkVycm9yOiB7ZXJyb3J9PC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cbiIsICJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IENvbW1hbmRSZXN1bHREaXNwbGF5IH0gZnJvbSAnLi4vLi4vY29tbWFuZHMuanMnXG5pbXBvcnQgeyBDbGF1ZGVBdXRoUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tY3AvYXV0aC5qcydcbmltcG9ydCB0eXBlIHtcbiAgTWNwQ2xhdWRlQUlQcm94eVNlcnZlckNvbmZpZyxcbiAgTWNwSFRUUFNlcnZlckNvbmZpZyxcbiAgTWNwU1NFU2VydmVyQ29uZmlnLFxuICBNY3BTdGRpb1NlcnZlckNvbmZpZyxcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWNwL3R5cGVzLmpzJ1xuaW1wb3J0IHtcbiAgZXh0cmFjdEFnZW50TWNwU2VydmVycyxcbiAgZmlsdGVyVG9vbHNCeVNlcnZlcixcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWNwL3V0aWxzLmpzJ1xuaW1wb3J0IHsgdXNlQXBwU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9BcHBTdGF0ZS5qcydcbmltcG9ydCB7IGdldFNlc3Npb25JbmdyZXNzQXV0aFRva2VuIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Vzc2lvbkluZ3Jlc3NBdXRoLmpzJ1xuaW1wb3J0IHsgTUNQQWdlbnRTZXJ2ZXJNZW51IH0gZnJvbSAnLi9NQ1BBZ2VudFNlcnZlck1lbnUuanMnXG5pbXBvcnQgeyBNQ1BMaXN0UGFuZWwgfSBmcm9tICcuL01DUExpc3RQYW5lbC5qcydcbmltcG9ydCB7IE1DUFJlbW90ZVNlcnZlck1lbnUgfSBmcm9tICcuL01DUFJlbW90ZVNlcnZlck1lbnUuanMnXG5pbXBvcnQgeyBNQ1BTdGRpb1NlcnZlck1lbnUgfSBmcm9tICcuL01DUFN0ZGlvU2VydmVyTWVudS5qcydcbmltcG9ydCB7IE1DUFRvb2xEZXRhaWxWaWV3IH0gZnJvbSAnLi9NQ1BUb29sRGV0YWlsVmlldy5qcydcbmltcG9ydCB7IE1DUFRvb2xMaXN0VmlldyB9IGZyb20gJy4vTUNQVG9vbExpc3RWaWV3LmpzJ1xuaW1wb3J0IHR5cGUgeyBBZ2VudE1jcFNlcnZlckluZm8sIE1DUFZpZXdTdGF0ZSwgU2VydmVySW5mbyB9IGZyb20gJy4vdHlwZXMuanMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9uQ29tcGxldGU6IChcbiAgICByZXN1bHQ/OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHsgZGlzcGxheT86IENvbW1hbmRSZXN1bHREaXNwbGF5IH0sXG4gICkgPT4gdm9pZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gTUNQU2V0dGluZ3MoeyBvbkNvbXBsZXRlIH06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgbWNwID0gdXNlQXBwU3RhdGUocyA9PiBzLm1jcClcbiAgY29uc3QgYWdlbnREZWZpbml0aW9ucyA9IHVzZUFwcFN0YXRlKHMgPT4gcy5hZ2VudERlZmluaXRpb25zKVxuICBjb25zdCBtY3BDbGllbnRzID0gbWNwLmNsaWVudHNcbiAgY29uc3QgW3ZpZXdTdGF0ZSwgc2V0Vmlld1N0YXRlXSA9IFJlYWN0LnVzZVN0YXRlPE1DUFZpZXdTdGF0ZT4oe1xuICAgIHR5cGU6ICdsaXN0JyxcbiAgfSlcbiAgY29uc3QgW3NlcnZlcnMsIHNldFNlcnZlcnNdID0gUmVhY3QudXNlU3RhdGU8U2VydmVySW5mb1tdPihbXSlcblxuICAvLyBFeHRyYWN0IGFnZW50LXNwZWNpZmljIE1DUCBzZXJ2ZXJzIGZyb20gYWdlbnQgZGVmaW5pdGlvbnNcbiAgY29uc3QgYWdlbnRNY3BTZXJ2ZXJzID0gdXNlTWVtbyhcbiAgICAoKSA9PiBleHRyYWN0QWdlbnRNY3BTZXJ2ZXJzKGFnZW50RGVmaW5pdGlvbnMuYWxsQWdlbnRzKSxcbiAgICBbYWdlbnREZWZpbml0aW9ucy5hbGxBZ2VudHNdLFxuICApXG5cbiAgY29uc3QgZmlsdGVyZWRDbGllbnRzID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgbWNwQ2xpZW50c1xuICAgICAgICAuZmlsdGVyKGNsaWVudCA9PiBjbGllbnQubmFtZSAhPT0gJ2lkZScpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKSxcbiAgICBbbWNwQ2xpZW50c10sXG4gIClcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGFzeW5jIGZ1bmN0aW9uIHByZXBhcmVTZXJ2ZXJzKCkge1xuICAgICAgY29uc3Qgc2VydmVySW5mb3MgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgZmlsdGVyZWRDbGllbnRzLm1hcChhc3luYyBjbGllbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IHNjb3BlID0gY2xpZW50LmNvbmZpZy5zY29wZVxuICAgICAgICAgIGNvbnN0IGlzU1NFID0gY2xpZW50LmNvbmZpZy50eXBlID09PSAnc3NlJ1xuICAgICAgICAgIGNvbnN0IGlzSFRUUCA9IGNsaWVudC5jb25maWcudHlwZSA9PT0gJ2h0dHAnXG4gICAgICAgICAgY29uc3QgaXNDbGF1ZGVBSVByb3h5ID0gY2xpZW50LmNvbmZpZy50eXBlID09PSAnY2xhdWRlYWktcHJveHknXG4gICAgICAgICAgbGV0IGlzQXV0aGVudGljYXRlZDogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZFxuXG4gICAgICAgICAgaWYgKGlzU1NFIHx8IGlzSFRUUCkge1xuICAgICAgICAgICAgY29uc3QgYXV0aFByb3ZpZGVyID0gbmV3IENsYXVkZUF1dGhQcm92aWRlcihcbiAgICAgICAgICAgICAgY2xpZW50Lm5hbWUsXG4gICAgICAgICAgICAgIGNsaWVudC5jb25maWcgYXMgTWNwU1NFU2VydmVyQ29uZmlnIHwgTWNwSFRUUFNlcnZlckNvbmZpZyxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnN0IHRva2VucyA9IGF3YWl0IGF1dGhQcm92aWRlci50b2tlbnMoKVxuICAgICAgICAgICAgLy8gU2VydmVyIGlzIGF1dGhlbnRpY2F0ZWQgaWY6XG4gICAgICAgICAgICAvLyAxLiBJdCBoYXMgT0F1dGggdG9rZW5zLCBPUlxuICAgICAgICAgICAgLy8gMi4gSXQncyBjb25uZWN0ZWQgdmlhIHNlc3Npb24gYXV0aCAoaGFzIHNlc3Npb24gdG9rZW4gYW5kIGlzIGNvbm5lY3RlZCksIE9SXG4gICAgICAgICAgICAvLyAzLiBJdCdzIGNvbm5lY3RlZCBhbmQgaGFzIHRvb2xzIChtZWFuaW5nIGl0J3Mgd29ya2luZywgcmVnYXJkbGVzcyBvZiBhdXRoIG1ldGhvZClcbiAgICAgICAgICAgIGNvbnN0IGhhc1Nlc3Npb25BdXRoID1cbiAgICAgICAgICAgICAgZ2V0U2Vzc2lvbkluZ3Jlc3NBdXRoVG9rZW4oKSAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICBjbGllbnQudHlwZSA9PT0gJ2Nvbm5lY3RlZCdcbiAgICAgICAgICAgIGNvbnN0IGhhc1Rvb2xzQW5kQ29ubmVjdGVkID1cbiAgICAgICAgICAgICAgY2xpZW50LnR5cGUgPT09ICdjb25uZWN0ZWQnICYmXG4gICAgICAgICAgICAgIGZpbHRlclRvb2xzQnlTZXJ2ZXIobWNwLnRvb2xzLCBjbGllbnQubmFtZSkubGVuZ3RoID4gMFxuICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkID1cbiAgICAgICAgICAgICAgQm9vbGVhbih0b2tlbnMpIHx8IGhhc1Nlc3Npb25BdXRoIHx8IGhhc1Rvb2xzQW5kQ29ubmVjdGVkXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgYmFzZUluZm8gPSB7XG4gICAgICAgICAgICBuYW1lOiBjbGllbnQubmFtZSxcbiAgICAgICAgICAgIGNsaWVudCxcbiAgICAgICAgICAgIHNjb3BlLFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpc0NsYXVkZUFJUHJveHkpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLmJhc2VJbmZvLFxuICAgICAgICAgICAgICB0cmFuc3BvcnQ6ICdjbGF1ZGVhaS1wcm94eScgYXMgY29uc3QsXG4gICAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmZpZzogY2xpZW50LmNvbmZpZyBhcyBNY3BDbGF1ZGVBSVByb3h5U2VydmVyQ29uZmlnLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNTU0UpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLmJhc2VJbmZvLFxuICAgICAgICAgICAgICB0cmFuc3BvcnQ6ICdzc2UnIGFzIGNvbnN0LFxuICAgICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQsXG4gICAgICAgICAgICAgIGNvbmZpZzogY2xpZW50LmNvbmZpZyBhcyBNY3BTU0VTZXJ2ZXJDb25maWcsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChpc0hUVFApIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLmJhc2VJbmZvLFxuICAgICAgICAgICAgICB0cmFuc3BvcnQ6ICdodHRwJyBhcyBjb25zdCxcbiAgICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkLFxuICAgICAgICAgICAgICBjb25maWc6IGNsaWVudC5jb25maWcgYXMgTWNwSFRUUFNlcnZlckNvbmZpZyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4uYmFzZUluZm8sXG4gICAgICAgICAgICAgIHRyYW5zcG9ydDogJ3N0ZGlvJyBhcyBjb25zdCxcbiAgICAgICAgICAgICAgY29uZmlnOiBjbGllbnQuY29uZmlnIGFzIE1jcFN0ZGlvU2VydmVyQ29uZmlnLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICApXG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHJldHVyblxuICAgICAgc2V0U2VydmVycyhzZXJ2ZXJJbmZvcylcbiAgICB9XG5cbiAgICB2b2lkIHByZXBhcmVTZXJ2ZXJzKClcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgfSwgW2ZpbHRlcmVkQ2xpZW50cywgbWNwLnRvb2xzXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZXJ2ZXJzLmxlbmd0aCA9PT0gMCAmJiBmaWx0ZXJlZENsaWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gU3RpbGwgbG9hZGluZ1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gT25seSBzaG93IFwibm8gc2VydmVyc1wiIG1lc3NhZ2UgaWYgbm8gcmVndWxhciBzZXJ2ZXJzIEFORCBubyBhZ2VudCBzZXJ2ZXJzXG4gICAgaWYgKHNlcnZlcnMubGVuZ3RoID09PSAwICYmIGFnZW50TWNwU2VydmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIG9uQ29tcGxldGUoXG4gICAgICAgICdObyBNQ1Agc2VydmVycyBjb25maWd1cmVkLiBQbGVhc2UgcnVuIC9kb2N0b3IgaWYgdGhpcyBpcyB1bmV4cGVjdGVkLiBPdGhlcndpc2UsIHJ1biBgY2xhdWRlIG1jcCAtLWhlbHBgIG9yIHZpc2l0IGh0dHBzOi8vY29kZS5jbGF1ZGUuY29tL2RvY3MvZW4vbWNwIHRvIGxlYXJuIG1vcmUuJyxcbiAgICAgIClcbiAgICB9XG4gIH0sIFtcbiAgICBzZXJ2ZXJzLmxlbmd0aCxcbiAgICBmaWx0ZXJlZENsaWVudHMubGVuZ3RoLFxuICAgIGFnZW50TWNwU2VydmVycy5sZW5ndGgsXG4gICAgb25Db21wbGV0ZSxcbiAgXSlcblxuICBzd2l0Y2ggKHZpZXdTdGF0ZS50eXBlKSB7XG4gICAgY2FzZSAnbGlzdCc6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TUNQTGlzdFBhbmVsXG4gICAgICAgICAgc2VydmVycz17c2VydmVyc31cbiAgICAgICAgICBhZ2VudFNlcnZlcnM9e2FnZW50TWNwU2VydmVyc31cbiAgICAgICAgICBvblNlbGVjdFNlcnZlcj17c2VydmVyID0+XG4gICAgICAgICAgICBzZXRWaWV3U3RhdGUoeyB0eXBlOiAnc2VydmVyLW1lbnUnLCBzZXJ2ZXIgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgb25TZWxlY3RBZ2VudFNlcnZlcj17KGFnZW50U2VydmVyOiBBZ2VudE1jcFNlcnZlckluZm8pID0+XG4gICAgICAgICAgICBzZXRWaWV3U3RhdGUoeyB0eXBlOiAnYWdlbnQtc2VydmVyLW1lbnUnLCBhZ2VudFNlcnZlciB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBvbkNvbXBsZXRlPXtvbkNvbXBsZXRlfVxuICAgICAgICAgIGRlZmF1bHRUYWI9e3ZpZXdTdGF0ZS5kZWZhdWx0VGFifVxuICAgICAgICAvPlxuICAgICAgKVxuXG4gICAgY2FzZSAnc2VydmVyLW1lbnUnOiB7XG4gICAgICBjb25zdCBzZXJ2ZXJUb29scyA9IGZpbHRlclRvb2xzQnlTZXJ2ZXIobWNwLnRvb2xzLCB2aWV3U3RhdGUuc2VydmVyLm5hbWUpXG5cbiAgICAgIGNvbnN0IGRlZmF1bHRUYWIgPVxuICAgICAgICB2aWV3U3RhdGUuc2VydmVyLnRyYW5zcG9ydCA9PT0gJ2NsYXVkZWFpLXByb3h5J1xuICAgICAgICAgID8gJ2NsYXVkZS5haSdcbiAgICAgICAgICA6ICdDbGF1ZGUgQ29kZSdcblxuICAgICAgaWYgKHZpZXdTdGF0ZS5zZXJ2ZXIudHJhbnNwb3J0ID09PSAnc3RkaW8nKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1DUFN0ZGlvU2VydmVyTWVudVxuICAgICAgICAgICAgc2VydmVyPXt2aWV3U3RhdGUuc2VydmVyfVxuICAgICAgICAgICAgc2VydmVyVG9vbHNDb3VudD17c2VydmVyVG9vbHMubGVuZ3RofVxuICAgICAgICAgICAgb25WaWV3VG9vbHM9eygpID0+XG4gICAgICAgICAgICAgIHNldFZpZXdTdGF0ZSh7IHR5cGU6ICdzZXJ2ZXItdG9vbHMnLCBzZXJ2ZXI6IHZpZXdTdGF0ZS5zZXJ2ZXIgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBzZXRWaWV3U3RhdGUoeyB0eXBlOiAnbGlzdCcsIGRlZmF1bHRUYWIgfSl9XG4gICAgICAgICAgICBvbkNvbXBsZXRlPXtvbkNvbXBsZXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1DUFJlbW90ZVNlcnZlck1lbnVcbiAgICAgICAgICAgIHNlcnZlcj17dmlld1N0YXRlLnNlcnZlcn1cbiAgICAgICAgICAgIHNlcnZlclRvb2xzQ291bnQ9e3NlcnZlclRvb2xzLmxlbmd0aH1cbiAgICAgICAgICAgIG9uVmlld1Rvb2xzPXsoKSA9PlxuICAgICAgICAgICAgICBzZXRWaWV3U3RhdGUoeyB0eXBlOiAnc2VydmVyLXRvb2xzJywgc2VydmVyOiB2aWV3U3RhdGUuc2VydmVyIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0Vmlld1N0YXRlKHsgdHlwZTogJ2xpc3QnLCBkZWZhdWx0VGFiIH0pfVxuICAgICAgICAgICAgb25Db21wbGV0ZT17b25Db21wbGV0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnc2VydmVyLXRvb2xzJzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxNQ1BUb29sTGlzdFZpZXdcbiAgICAgICAgICBzZXJ2ZXI9e3ZpZXdTdGF0ZS5zZXJ2ZXJ9XG4gICAgICAgICAgb25TZWxlY3RUb29sPXsoXywgaW5kZXgpID0+XG4gICAgICAgICAgICBzZXRWaWV3U3RhdGUoe1xuICAgICAgICAgICAgICB0eXBlOiAnc2VydmVyLXRvb2wtZGV0YWlsJyxcbiAgICAgICAgICAgICAgc2VydmVyOiB2aWV3U3RhdGUuc2VydmVyLFxuICAgICAgICAgICAgICB0b29sSW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgb25CYWNrPXsoKSA9PlxuICAgICAgICAgICAgc2V0Vmlld1N0YXRlKHsgdHlwZTogJ3NlcnZlci1tZW51Jywgc2VydmVyOiB2aWV3U3RhdGUuc2VydmVyIH0pXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgKVxuXG4gICAgY2FzZSAnc2VydmVyLXRvb2wtZGV0YWlsJzoge1xuICAgICAgY29uc3Qgc2VydmVyVG9vbHMgPSBmaWx0ZXJUb29sc0J5U2VydmVyKG1jcC50b29scywgdmlld1N0YXRlLnNlcnZlci5uYW1lKVxuICAgICAgY29uc3QgdG9vbCA9IHNlcnZlclRvb2xzW3ZpZXdTdGF0ZS50b29sSW5kZXhdXG4gICAgICBpZiAoIXRvb2wpIHtcbiAgICAgICAgc2V0Vmlld1N0YXRlKHsgdHlwZTogJ3NlcnZlci10b29scycsIHNlcnZlcjogdmlld1N0YXRlLnNlcnZlciB9KVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPE1DUFRvb2xEZXRhaWxWaWV3XG4gICAgICAgICAgdG9vbD17dG9vbH1cbiAgICAgICAgICBzZXJ2ZXI9e3ZpZXdTdGF0ZS5zZXJ2ZXJ9XG4gICAgICAgICAgb25CYWNrPXsoKSA9PlxuICAgICAgICAgICAgc2V0Vmlld1N0YXRlKHsgdHlwZTogJ3NlcnZlci10b29scycsIHNlcnZlcjogdmlld1N0YXRlLnNlcnZlciB9KVxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjYXNlICdhZ2VudC1zZXJ2ZXItbWVudSc6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TUNQQWdlbnRTZXJ2ZXJNZW51XG4gICAgICAgICAgYWdlbnRTZXJ2ZXI9e3ZpZXdTdGF0ZS5hZ2VudFNlcnZlcn1cbiAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0Vmlld1N0YXRlKHsgdHlwZTogJ2xpc3QnLCBkZWZhdWx0VGFiOiAnQWdlbnRzJyB9KX1cbiAgICAgICAgICBvbkNvbXBsZXRlPXtvbkNvbXBsZXRlfVxuICAgICAgICAvPlxuICAgICAgKVxuICB9XG59XG4iLCAiZXhwb3J0IHsgTUNQQWdlbnRTZXJ2ZXJNZW51IH0gZnJvbSAnLi9NQ1BBZ2VudFNlcnZlck1lbnUuanMnXG5leHBvcnQgeyBNQ1BMaXN0UGFuZWwgfSBmcm9tICcuL01DUExpc3RQYW5lbC5qcydcbmV4cG9ydCB7IE1DUFJlY29ubmVjdCB9IGZyb20gJy4vTUNQUmVjb25uZWN0LmpzJ1xuZXhwb3J0IHsgTUNQUmVtb3RlU2VydmVyTWVudSB9IGZyb20gJy4vTUNQUmVtb3RlU2VydmVyTWVudS5qcydcbmV4cG9ydCB7IE1DUFNldHRpbmdzIH0gZnJvbSAnLi9NQ1BTZXR0aW5ncy5qcydcbmV4cG9ydCB7IE1DUFN0ZGlvU2VydmVyTWVudSB9IGZyb20gJy4vTUNQU3RkaW9TZXJ2ZXJNZW51LmpzJ1xuZXhwb3J0IHsgTUNQVG9vbERldGFpbFZpZXcgfSBmcm9tICcuL01DUFRvb2xEZXRhaWxWaWV3LmpzJ1xuZXhwb3J0IHsgTUNQVG9vbExpc3RWaWV3IH0gZnJvbSAnLi9NQ1BUb29sTGlzdFZpZXcuanMnXG5leHBvcnQgdHlwZSB7IEFnZW50TWNwU2VydmVySW5mbywgTUNQVmlld1N0YXRlLCBTZXJ2ZXJJbmZvIH0gZnJvbSAnLi90eXBlcy5qcydcbiIsICJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1DUFNldHRpbmdzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tY3AvaW5kZXguanMnXG5pbXBvcnQgeyBNQ1BSZWNvbm5lY3QgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL21jcC9NQ1BSZWNvbm5lY3QuanMnXG5pbXBvcnQgeyB1c2VNY3BUb2dnbGVFbmFibGVkIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWNwL01DUENvbm5lY3Rpb25NYW5hZ2VyLmpzJ1xuaW1wb3J0IHsgdXNlQXBwU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9BcHBTdGF0ZS5qcydcbmltcG9ydCB0eXBlIHsgTG9jYWxKU1hDb21tYW5kT25Eb25lIH0gZnJvbSAnLi4vLi4vdHlwZXMvY29tbWFuZC5qcydcbmltcG9ydCB7IFBsdWdpblNldHRpbmdzIH0gZnJvbSAnLi4vcGx1Z2luL1BsdWdpblNldHRpbmdzLmpzJ1xuXG4vLyBUT0RPOiBUaGlzIGlzIGEgaGFjayB0byBnZXQgdGhlIGNvbnRleHQgdmFsdWUgZnJvbSB0b2dnbGVNY3BTZXJ2ZXIgKHVzZUNvbnRleHQgb25seSB3b3JrcyBpbiBhIGNvbXBvbmVudClcbi8vIElkZWFsbHksIGFsbCBNQ1Agc3RhdGUgYW5kIGZ1bmN0aW9ucyB3b3VsZCBiZSBpbiBnbG9iYWwgc3RhdGUuXG5mdW5jdGlvbiBNQ1BUb2dnbGUoe1xuICBhY3Rpb24sXG4gIHRhcmdldCxcbiAgb25Db21wbGV0ZSxcbn06IHtcbiAgYWN0aW9uOiAnZW5hYmxlJyB8ICdkaXNhYmxlJ1xuICB0YXJnZXQ6IHN0cmluZ1xuICBvbkNvbXBsZXRlOiAocmVzdWx0OiBzdHJpbmcpID0+IHZvaWRcbn0pOiBudWxsIHtcbiAgY29uc3QgbWNwQ2xpZW50cyA9IHVzZUFwcFN0YXRlKHMgPT4gcy5tY3AuY2xpZW50cylcbiAgY29uc3QgdG9nZ2xlTWNwU2VydmVyID0gdXNlTWNwVG9nZ2xlRW5hYmxlZCgpXG4gIGNvbnN0IGRpZFJ1biA9IHVzZVJlZihmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkaWRSdW4uY3VycmVudCkgcmV0dXJuXG4gICAgZGlkUnVuLmN1cnJlbnQgPSB0cnVlXG5cbiAgICBjb25zdCBpc0VuYWJsaW5nID0gYWN0aW9uID09PSAnZW5hYmxlJ1xuICAgIGNvbnN0IGNsaWVudHMgPSBtY3BDbGllbnRzLmZpbHRlcihjID0+IGMubmFtZSAhPT0gJ2lkZScpXG4gICAgY29uc3QgdG9Ub2dnbGUgPVxuICAgICAgdGFyZ2V0ID09PSAnYWxsJ1xuICAgICAgICA/IGNsaWVudHMuZmlsdGVyKGMgPT5cbiAgICAgICAgICAgIGlzRW5hYmxpbmcgPyBjLnR5cGUgPT09ICdkaXNhYmxlZCcgOiBjLnR5cGUgIT09ICdkaXNhYmxlZCcsXG4gICAgICAgICAgKVxuICAgICAgICA6IGNsaWVudHMuZmlsdGVyKGMgPT4gYy5uYW1lID09PSB0YXJnZXQpXG5cbiAgICBpZiAodG9Ub2dnbGUubGVuZ3RoID09PSAwKSB7XG4gICAgICBvbkNvbXBsZXRlKFxuICAgICAgICB0YXJnZXQgPT09ICdhbGwnXG4gICAgICAgICAgPyBgQWxsIE1DUCBzZXJ2ZXJzIGFyZSBhbHJlYWR5ICR7aXNFbmFibGluZyA/ICdlbmFibGVkJyA6ICdkaXNhYmxlZCd9YFxuICAgICAgICAgIDogYE1DUCBzZXJ2ZXIgXCIke3RhcmdldH1cIiBub3QgZm91bmRgLFxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBzIG9mIHRvVG9nZ2xlKSB7XG4gICAgICB2b2lkIHRvZ2dsZU1jcFNlcnZlcihzLm5hbWUpXG4gICAgfVxuXG4gICAgb25Db21wbGV0ZShcbiAgICAgIHRhcmdldCA9PT0gJ2FsbCdcbiAgICAgICAgPyBgJHtpc0VuYWJsaW5nID8gJ0VuYWJsZWQnIDogJ0Rpc2FibGVkJ30gJHt0b1RvZ2dsZS5sZW5ndGh9IE1DUCBzZXJ2ZXIocylgXG4gICAgICAgIDogYE1DUCBzZXJ2ZXIgXCIke3RhcmdldH1cIiAke2lzRW5hYmxpbmcgPyAnZW5hYmxlZCcgOiAnZGlzYWJsZWQnfWAsXG4gICAgKVxuICB9LCBbYWN0aW9uLCB0YXJnZXQsIG1jcENsaWVudHMsIHRvZ2dsZU1jcFNlcnZlciwgb25Db21wbGV0ZV0pXG5cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGwoXG4gIG9uRG9uZTogTG9jYWxKU1hDb21tYW5kT25Eb25lLFxuICBfY29udGV4dDogdW5rbm93bixcbiAgYXJncz86IHN0cmluZyxcbik6IFByb21pc2U8UmVhY3QuUmVhY3ROb2RlPiB7XG4gIGlmIChhcmdzKSB7XG4gICAgY29uc3QgcGFydHMgPSBhcmdzLnRyaW0oKS5zcGxpdCgvXFxzKy8pXG5cbiAgICAvLyBBbGxvdyAvbWNwIG5vLXJlZGlyZWN0IHRvIGJ5cGFzcyB0aGUgcmVkaXJlY3QgZm9yIHRlc3RpbmdcbiAgICBpZiAocGFydHNbMF0gPT09ICduby1yZWRpcmVjdCcpIHtcbiAgICAgIHJldHVybiA8TUNQU2V0dGluZ3Mgb25Db21wbGV0ZT17b25Eb25lfSAvPlxuICAgIH1cblxuICAgIGlmIChwYXJ0c1swXSA9PT0gJ3JlY29ubmVjdCcgJiYgcGFydHNbMV0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxNQ1BSZWNvbm5lY3RcbiAgICAgICAgICBzZXJ2ZXJOYW1lPXtwYXJ0cy5zbGljZSgxKS5qb2luKCcgJyl9XG4gICAgICAgICAgb25Db21wbGV0ZT17b25Eb25lfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChwYXJ0c1swXSA9PT0gJ2VuYWJsZScgfHwgcGFydHNbMF0gPT09ICdkaXNhYmxlJykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPE1DUFRvZ2dsZVxuICAgICAgICAgIGFjdGlvbj17cGFydHNbMF19XG4gICAgICAgICAgdGFyZ2V0PXtwYXJ0cy5sZW5ndGggPiAxID8gcGFydHMuc2xpY2UoMSkuam9pbignICcpIDogJ2FsbCd9XG4gICAgICAgICAgb25Db21wbGV0ZT17b25Eb25lfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIC8vIFJlZGlyZWN0IGJhc2UgL21jcCBjb21tYW5kIHRvIC9wbHVnaW5zIGluc3RhbGxlZCB0YWIgZm9yIGFudCB1c2Vyc1xuICBpZiAoXCJleHRlcm5hbFwiID09PSAnYW50Jykge1xuICAgIHJldHVybiAoXG4gICAgICA8UGx1Z2luU2V0dGluZ3NcbiAgICAgICAgb25Db21wbGV0ZT17b25Eb25lfVxuICAgICAgICBhcmdzPVwibWFuYWdlXCJcbiAgICAgICAgc2hvd01jcFJlZGlyZWN0TWVzc2FnZVxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICByZXR1cm4gPE1DUFNldHRpbmdzIG9uQ29tcGxldGU9e29uRG9uZX0gLz5cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDTyxTQUFTQSxtQkFBbUI7RUFDakNDO0VBQ0FDO0VBQ0FDO0FBQ0ssR0FBb0I7QUFDekIsUUFBTSxDQUFDQyxLQUFLLElBQUlDLFNBQVM7QUFDekIsUUFBTSxDQUFDQyxrQkFBa0JDLG1CQUFtQixJQUFJQyxTQUFTLEtBQUs7QUFDOUQsUUFBTSxDQUFDQyxPQUFPQyxRQUFRLElBQUlGLFNBQXdCLElBQUk7QUFDdEQsUUFBTSxDQUFDRyxrQkFBa0JDLG1CQUFtQixJQUFJSixTQUF3QixJQUFJO0FBQzVFLFFBQU1LLHlCQUF5QkMsT0FBK0IsSUFBSTtBQUlsRUMsWUFBVSxNQUFNLE1BQU1GLHVCQUF1QkcsU0FBU0MsTUFBTSxHQUFHLENBQUEsQ0FBRTtBQUdqRSxRQUFNQyxrQkFBa0JDLFlBQVksTUFBTTtBQUN4QyxRQUFJYixrQkFBa0I7QUFDcEJPLDZCQUF1QkcsU0FBU0MsTUFBTTtBQUN0Q0osNkJBQXVCRyxVQUFVO0FBQ2pDVCwwQkFBb0IsS0FBSztBQUN6QkssMEJBQW9CLElBQUk7SUFDMUI7RUFDRixHQUFHLENBQUNOLGdCQUFnQixDQUFDO0FBRXJCYyxnQkFBYyxjQUFjRixpQkFBaUI7SUFDM0NHLFNBQVM7SUFDVEMsVUFBVWhCO0VBQ1osQ0FBQztBQUVELFFBQU1pQixxQkFBcUJKLFlBQVksWUFBWTtBQUNqRCxRQUFJLENBQUNsQixZQUFZdUIsYUFBYSxDQUFDdkIsWUFBWXdCLEtBQUs7QUFDOUM7SUFDRjtBQUVBbEIsd0JBQW9CLElBQUk7QUFDeEJHLGFBQVMsSUFBSTtBQUViLFVBQU1nQixhQUFhLElBQUlDLGdCQUFnQjtBQUN2Q2QsMkJBQXVCRyxVQUFVVTtBQUVqQyxRQUFJO0FBRUYsWUFBTUUsYUFBYTtRQUNqQkMsTUFBTTVCLFlBQVk2QjtRQUNsQkwsS0FBS3hCLFlBQVl3QjtNQUNuQjtBQUVBLFlBQU1NLG9CQUNKOUIsWUFBWStCLE1BQ1pKLFlBQ0FoQixxQkFDQWMsV0FBV08sTUFDYjtBQUVBOUIsbUJBQ0UsaUNBQWlDRixZQUFZK0IsSUFBSSxnREFDbkQ7SUFDRixTQUFTRSxLQUFLO0FBRVosVUFDRUEsZUFBZUMsU0FDZixFQUFFRCxlQUFlRSwrQkFDakI7QUFDQTFCLGlCQUFTd0IsSUFBSUcsT0FBTztNQUN0QjtJQUNGLFVBQUM7QUFDQzlCLDBCQUFvQixLQUFLO0FBQ3pCTSw2QkFBdUJHLFVBQVU7SUFDbkM7RUFDRixHQUFHLENBQUNmLGFBQWFFLFVBQVUsQ0FBQztBQUU1QixRQUFNbUMsd0JBQXdCQyxXQUFXQyxPQUFPdkMsWUFBWStCLElBQUksQ0FBQztBQUVqRSxNQUFJMUIsa0JBQWtCO0FBQ3BCLFdBQ0UsNENBQUMscUJBQUksZUFBYyxVQUFTLEtBQUssR0FBRyxTQUFTLEtBQzNDLDRDQUFDLGNBQUssT0FBTSxZQUFTLHdCQUFxQkwsWUFBWStCLE1BQUssUUFBQyxHQUM1RCw0Q0FBQyx5QkFDQyw0Q0FBQyxhQUFPLEdBQ1IsNENBQUMsa0JBQUssZ0RBQThDLENBQ3RELEdBQ0NyQixvQkFDQyw0Q0FBQyxxQkFBSSxlQUFjLFlBQ2pCLDRDQUFDLGNBQUssVUFBUSxRQUFBLHFFQUdkLEdBQ0EsNENBQUMsUUFBSyxLQUFLQSxrQkFBaUIsQ0FDOUIsR0FFRiw0Q0FBQyxxQkFBSSxZQUFZLEtBQ2YsNENBQUMsY0FBSyxVQUFRLFFBQUEscURBQ3NDLEtBQ2xELDRDQUFDLDRCQUNDLFFBQU8sY0FDUCxTQUFRLGdCQUNSLFVBQVMsT0FDVCxhQUFZLFdBQVMsQ0FFekIsQ0FDRixDQUNGO0VBRUo7QUFFQSxRQUFNOEIsY0FBYyxDQUFBO0FBR3BCLE1BQUl4QyxZQUFZdUIsV0FBVztBQUN6QmlCLGdCQUFZQyxLQUFLO01BQ2ZDLE9BQU8xQyxZQUFZMkMsa0JBQWtCLG9CQUFvQjtNQUN6REMsT0FBTztJQUNULENBQUM7RUFDSDtBQUVBSixjQUFZQyxLQUFLO0lBQ2ZDLE9BQU87SUFDUEUsT0FBTztFQUNULENBQUM7QUFFRCxTQUNFLDRDQUFDLFVBQ0MsT0FBTyxHQUFHUCxxQkFBcUIsZUFDL0IsVUFBUyxjQUNULFVBQ0EsWUFBWVEsZUFDVkEsVUFBVUMsVUFDUiw0Q0FBQyxrQkFBSyxVQUFPRCxVQUFVRSxTQUFRLGdCQUFjLElBRTdDLDRDQUFDLGNBQ0MsNENBQUMsd0JBQXFCLFVBQVMsZ0JBQUssUUFBTyxZQUFVLEdBQ3JELDRDQUFDLHdCQUFxQixVQUFTLFNBQVEsUUFBTyxXQUFTLEdBQ3ZELDRDQUFDLDRCQUNDLFFBQU8sY0FDUCxTQUFRLGdCQUNSLFVBQVMsT0FDVCxhQUFZLFdBQVMsQ0FFekIsS0FJSiw0Q0FBQyxxQkFBSSxlQUFjLFVBQVMsS0FBSyxLQUMvQiw0Q0FBQyx5QkFDQyw0Q0FBQyxjQUFLLE1BQUksUUFBQyxRQUFNLEdBQ2pCLDRDQUFDLGNBQUssVUFBUSxRQUFFL0MsWUFBWTZCLFNBQVUsQ0FDeEMsR0FFQzdCLFlBQVl3QixPQUNYLDRDQUFDLHlCQUNDLDRDQUFDLGNBQUssTUFBSSxRQUFDLE9BQUssR0FDaEIsNENBQUMsY0FBSyxVQUFRLFFBQUV4QixZQUFZd0IsR0FBSSxDQUNsQyxHQUdEeEIsWUFBWWdELFdBQ1gsNENBQUMseUJBQ0MsNENBQUMsY0FBSyxNQUFJLFFBQUMsV0FBUyxHQUNwQiw0Q0FBQyxjQUFLLFVBQVEsUUFBRWhELFlBQVlnRCxPQUFRLENBQ3RDLEdBR0YsNENBQUMseUJBQ0MsNENBQUMsY0FBSyxNQUFJLFFBQUMsV0FBUyxHQUNwQiw0Q0FBQyxjQUFLLFVBQVEsUUFBRWhELFlBQVlpRCxhQUFhQyxLQUFLLElBQUksQ0FBRSxDQUN0RCxHQUVBLDRDQUFDLHFCQUFJLFdBQVcsS0FDZCw0Q0FBQyxjQUFLLE1BQUksUUFBQyxVQUFRLEdBQ25CLDRDQUFDLGtCQUNFQyxNQUFNLFlBQVloRCxLQUFLLEVBQUVpRCxnQkFBUUMsUUFBUSxHQUFFLDZCQUU5QyxDQUNGLEdBRUNyRCxZQUFZdUIsYUFDWCw0Q0FBQyx5QkFDQyw0Q0FBQyxjQUFLLE1BQUksUUFBQyxRQUFNLEdBQ2hCdkIsWUFBWTJDLGtCQUNYLDRDQUFDLGtCQUFNUSxNQUFNLFdBQVdoRCxLQUFLLEVBQUVpRCxnQkFBUUUsSUFBSSxHQUFFLGdCQUFjLElBRTNELDRDQUFDLGtCQUNFSCxNQUFNLFdBQVdoRCxLQUFLLEVBQUVpRCxnQkFBUUcsaUJBQWlCLEdBQUUsMEJBRXRELENBRUosQ0FFSixHQUVBLDRDQUFDLHlCQUNDLDRDQUFDLGNBQUssVUFBUSxRQUFDLG1EQUFpRCxDQUNsRSxHQUVDL0MsU0FDQyw0Q0FBQyx5QkFDQyw0Q0FBQyxjQUFLLE9BQU0sV0FBUSxXQUFRQSxLQUFNLENBQ3BDLEdBR0YsNENBQUMseUJBQ0MsNENBQUMsVUFDQyxTQUFTZ0MsYUFDVCxVQUFVLE9BQU1JLFVBQVM7QUFDdkIsWUFBUUEsT0FBSztNQUNYLEtBQUs7QUFDSCxjQUFNdEIsbUJBQW1CO0FBQ3pCO01BQ0YsS0FBSztBQUNIckIsaUJBQVM7QUFDVDtJQUNKO0VBQ0YsR0FDQSxVQUFtQixDQUV2QixDQUNGO0FBRUo7QUEzUEE7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDc0JBLFNBQVN1RCxnQkFBZ0JDLE9BQXNEO0FBQzdFLFVBQVFBLE9BQUs7SUFDWCxLQUFLO0FBQ0gsYUFBTztRQUFFQyxPQUFPO1FBQWdCQyxNQUFNQywwQkFBMEJILEtBQUs7TUFBRTtJQUN6RSxLQUFLO0FBQ0gsYUFBTztRQUFFQyxPQUFPO1FBQWFDLE1BQU1DLDBCQUEwQkgsS0FBSztNQUFFO0lBQ3RFLEtBQUs7QUFDSCxhQUFPO1FBQUVDLE9BQU87UUFBY0MsTUFBTUMsMEJBQTBCSCxLQUFLO01BQUU7SUFDdkUsS0FBSztBQUNILGFBQU87UUFBRUMsT0FBTztNQUFrQjtJQUNwQyxLQUFLO0FBQ0gsYUFBTztRQUFFQSxPQUFPO1FBQWlCQyxNQUFNO01BQW1CO0lBQzVEO0FBQ0UsYUFBTztRQUFFRCxPQUFPRDtNQUFNO0VBQzFCO0FBQ0Y7QUFHQSxTQUFTSSxvQkFDUEMsWUFDZ0M7QUFDaEMsUUFBTUMsU0FBUyxvQkFBSUMsSUFBK0I7QUFDbEQsYUFBV0MsVUFBVUgsWUFBWTtBQUMvQixVQUFNTCxRQUFRUSxPQUFPUjtBQUNyQixRQUFJLENBQUNNLE9BQU9HLElBQUlULEtBQUssR0FBRztBQUN0Qk0sYUFBT0ksSUFBSVYsT0FBTyxDQUFBLENBQUU7SUFDdEI7QUFDQU0sV0FBT0ssSUFBSVgsS0FBSyxFQUFHWSxLQUFLSixNQUFNO0VBQ2hDO0FBRUEsYUFBVyxDQUFBLEVBQUdLLFlBQVksS0FBS1AsUUFBUTtBQUNyQ08saUJBQWFDLEtBQUssQ0FBQ0MsR0FBR0MsTUFBTUQsRUFBRUUsS0FBS0MsY0FBY0YsRUFBRUMsSUFBSSxDQUFDO0VBQzFEO0FBQ0EsU0FBT1g7QUFDVDtBQUVPLFNBQUFhLGFBQUFDLElBQUE7QUFBQSxRQUFBQyxJQUFBQyxFQUFBLEVBQUE7QUFBc0IsUUFBQTtJQUFBQztJQUFBQyxjQUFBQztJQUFBQztJQUFBQztJQUFBQztFQUFBLElBQUFSO0FBTXJCLE1BQUFTO0FBQUEsTUFBQVIsRUFBQSxDQUFBLE1BQUFJLElBQUE7QUFKTkksU0FBQUosT0FBQUssU0FBQSxDQUFBLElBQUFMO0FBQWlCSixNQUFBLENBQUEsSUFBQUk7QUFBQUosTUFBQSxDQUFBLElBQUFRO0VBQUEsT0FBQTtBQUFBQSxTQUFBUixFQUFBLENBQUE7RUFBQTtBQUFqQixRQUFBRyxlQUFBSztBQUtBLFFBQUEsQ0FBQUUsS0FBQSxJQUFnQkMsU0FBUztBQUN6QixRQUFBLENBQUFDLGVBQUFDLGdCQUFBLElBQTBDQyxTQUFTLENBQUM7QUFBQyxNQUFBQztBQUFBLE1BQUFmLEVBQUEsQ0FBQSxNQUFBRSxTQUFBO0FBSW5ELFVBQUFjLGlCQUF1QmQsUUFBT2UsT0FDNUJDLEtBQ0Y7QUFDT0gsU0FBQWhDLG9CQUFvQmlDLGNBQWM7QUFBQ2hCLE1BQUEsQ0FBQSxJQUFBRTtBQUFBRixNQUFBLENBQUEsSUFBQWU7RUFBQSxPQUFBO0FBQUFBLFNBQUFmLEVBQUEsQ0FBQTtFQUFBO0FBSjVDLFFBQUFtQixpQkFJRUo7QUFDVyxNQUFBSztBQUFBLE1BQUFwQixFQUFBLENBQUEsTUFBQUUsU0FBQTtBQUlUa0IsU0FBQWxCLFFBQU9lLE9BQ0dJLE1BQThDLEVBQUM1QixLQUNqRDZCLE1BQXNDO0FBQUN0QixNQUFBLENBQUEsSUFBQUU7QUFBQUYsTUFBQSxDQUFBLElBQUFvQjtFQUFBLE9BQUE7QUFBQUEsU0FBQXBCLEVBQUEsQ0FBQTtFQUFBO0FBSm5ELFFBQUF1QixrQkFFSUg7QUFJSCxNQUFBSTtBQUFBLE1BQUF4QixFQUFBLENBQUEsTUFBQW1CLGdCQUFBO0FBS0dLLFVBQUNMLGVBQWM3QixJQUFLLFNBQWUsS0FBbEMsQ0FBQSxHQUFtQ0csS0FBT2dDLE1BRTNDO0FBQUN6QixNQUFBLENBQUEsSUFBQW1CO0FBQUFuQixNQUFBLENBQUEsSUFBQXdCO0VBQUEsT0FBQTtBQUFBQSxTQUFBeEIsRUFBQSxDQUFBO0VBQUE7QUFKTCxRQUFBMEIsaUJBRUlGO0FBSUgsTUFBQUc7QUFBQSxNQUFBM0IsRUFBQSxDQUFBLE1BQUE0Qix1QkFBQUMsSUFBQSwyQkFBQSxHQUFBO0FBR3NCRixTQUFBakQsZ0JBQWdCLFNBQVM7QUFBQ3NCLE1BQUEsQ0FBQSxJQUFBMkI7RUFBQSxPQUFBO0FBQUFBLFNBQUEzQixFQUFBLENBQUE7RUFBQTtBQUFqRCxRQUFBOEIsaUJBQXVCSDtBQUEwQixNQUFBSTtBQUFBLE1BQUEvQixFQUFBLENBQUEsTUFBQUcsZ0JBQUFILEVBQUEsRUFBQSxNQUFBdUIsbUJBQUF2QixFQUFBLEVBQUEsTUFBQTBCLGtCQUFBMUIsRUFBQSxFQUFBLE1BQUFtQixnQkFBQTtBQUkvQ1ksWUFBZ0MsQ0FBQTtBQUNoQyxlQUFLcEQsU0FBZXFELGFBQVc7QUFDN0IsWUFBQUMsZUFBcUJkLGVBQWM3QixJQUFLWCxLQUFXLEtBQTlCLENBQUE7QUFDckIsaUJBQUtRLFVBQWdCOEMsY0FBWTtBQUMvQkYsY0FBS3hDLEtBQU07VUFBQTJDLE1BQVE7VUFBUS9DO1FBQVMsQ0FBQztNQUFDO0lBQ3ZDO0FBRUgsZUFBS2dELFlBQWdCWixpQkFBZTtBQUNsQ1EsWUFBS3hDLEtBQU07UUFBQTJDLE1BQVE7UUFBUS9DLFFBQUVBO01BQU8sQ0FBQztJQUFDO0FBRXhDLGVBQUtpRCxlQUFxQmpDLGNBQVk7QUFDcEM0QixZQUFLeEMsS0FBTTtRQUFBMkMsTUFBUTtRQUFjRTtNQUFjLENBQUM7SUFBQztBQUduRCxlQUFLQyxZQUFnQlgsZ0JBQWM7QUFDakNLLFlBQUt4QyxLQUFNO1FBQUEyQyxNQUFRO1FBQVEvQyxRQUFFQTtNQUFPLENBQUM7SUFBQztBQUN2Q2EsTUFBQSxDQUFBLElBQUFHO0FBQUFILE1BQUEsRUFBQSxJQUFBdUI7QUFBQXZCLE1BQUEsRUFBQSxJQUFBMEI7QUFBQTFCLE1BQUEsRUFBQSxJQUFBbUI7QUFBQW5CLE1BQUEsRUFBQSxJQUFBK0I7RUFBQSxPQUFBO0FBQUFBLFlBQUEvQixFQUFBLEVBQUE7RUFBQTtBQWpCSCxRQUFBc0Msa0JBa0JFUDtBQUNpRSxNQUFBUTtBQUFBLE1BQUF2QyxFQUFBLEVBQUEsTUFBQU8sWUFBQTtBQUVsQ2dDLFNBQUFBLE1BQUE7QUFDL0JoQyxpQkFBVyx3QkFBd0I7UUFBQWlDLFNBQ3hCO01BQ1gsQ0FBQztJQUFDO0FBQ0h4QyxNQUFBLEVBQUEsSUFBQU87QUFBQVAsTUFBQSxFQUFBLElBQUF1QztFQUFBLE9BQUE7QUFBQUEsU0FBQXZDLEVBQUEsRUFBQTtFQUFBO0FBSkQsUUFBQXlDLGVBQXFCRjtBQUlMLE1BQUFHO0FBQUEsTUFBQTFDLEVBQUEsRUFBQSxNQUFBTSx1QkFBQU4sRUFBQSxFQUFBLE1BQUFLLGtCQUFBTCxFQUFBLEVBQUEsTUFBQXNDLG1CQUFBdEMsRUFBQSxFQUFBLE1BQUFZLGVBQUE7QUFFaUI4QixTQUFBQSxNQUFBO0FBQy9CLFlBQUFDLE9BQWFMLGdCQUFnQjFCLGFBQWE7QUFDMUMsVUFBSSxDQUFDK0IsTUFBSTtBQUFBO01BQUE7QUFDVCxVQUFJQSxLQUFJVCxTQUFVLFVBQVE7QUFDeEI3Qix1QkFBZXNDLEtBQUl4RCxNQUFPO01BQUMsT0FBQTtBQUN0QixZQUFJd0QsS0FBSVQsU0FBVSxrQkFBZDVCLHFCQUFtRDtBQUM1REEsOEJBQW9CcUMsS0FBSVAsV0FBWTtRQUFDO01BQ3RDO0lBQUE7QUFDRnBDLE1BQUEsRUFBQSxJQUFBTTtBQUFBTixNQUFBLEVBQUEsSUFBQUs7QUFBQUwsTUFBQSxFQUFBLElBQUFzQztBQUFBdEMsTUFBQSxFQUFBLElBQUFZO0FBQUFaLE1BQUEsRUFBQSxJQUFBMEM7RUFBQSxPQUFBO0FBQUFBLFNBQUExQyxFQUFBLEVBQUE7RUFBQTtBQVJELFFBQUE0QyxlQUFxQkY7QUFRb0QsTUFBQUc7QUFBQSxNQUFBQztBQUFBLE1BQUE5QyxFQUFBLEVBQUEsTUFBQXNDLGlCQUFBO0FBS2pEUSxTQUFBQSxNQUNsQmpDLGlCQUFpQmtDLFVBQ2ZBLFNBQVMsSUFBSVQsZ0JBQWVVLFNBQVUsSUFBSUQsT0FBTyxDQUNuRDtBQUNjRixVQUFBQSxNQUNkaEMsaUJBQWlCb0MsWUFDZkYsV0FBU1QsZ0JBQWVVLFNBQVUsSUFBbEMsSUFBMENELFNBQU8sQ0FDbkQ7QUFBQy9DLE1BQUEsRUFBQSxJQUFBc0M7QUFBQXRDLE1BQUEsRUFBQSxJQUFBNkM7QUFBQTdDLE1BQUEsRUFBQSxJQUFBOEM7RUFBQSxPQUFBO0FBQUFELFVBQUE3QyxFQUFBLEVBQUE7QUFBQThDLFNBQUE5QyxFQUFBLEVBQUE7RUFBQTtBQUFBLE1BQUFrRDtBQUFBLE1BQUFsRCxFQUFBLEVBQUEsTUFBQXlDLGdCQUFBekMsRUFBQSxFQUFBLE1BQUE0QyxnQkFBQTVDLEVBQUEsRUFBQSxNQUFBNkMsT0FBQTdDLEVBQUEsRUFBQSxNQUFBOEMsSUFBQTtBQVJMSSxVQUFBO01BQUEsb0JBQ3NCSjtNQUdqQixnQkFDYUQ7TUFHYixlQUNZRDtNQUFZLGNBQ2JIO0lBQ2hCO0FBQUN6QyxNQUFBLEVBQUEsSUFBQXlDO0FBQUF6QyxNQUFBLEVBQUEsSUFBQTRDO0FBQUE1QyxNQUFBLEVBQUEsSUFBQTZDO0FBQUE3QyxNQUFBLEVBQUEsSUFBQThDO0FBQUE5QyxNQUFBLEVBQUEsSUFBQWtEO0VBQUEsT0FBQTtBQUFBQSxVQUFBbEQsRUFBQSxFQUFBO0VBQUE7QUFBQSxNQUFBbUQ7QUFBQSxNQUFBbkQsRUFBQSxFQUFBLE1BQUE0Qix1QkFBQUMsSUFBQSwyQkFBQSxHQUFBO0FBQ0RzQixVQUFBO01BQUFDLFNBQVc7SUFBZTtBQUFDcEQsTUFBQSxFQUFBLElBQUFtRDtFQUFBLE9BQUE7QUFBQUEsVUFBQW5ELEVBQUEsRUFBQTtFQUFBO0FBYjdCcUQsaUJBQ0VILEtBWUFDLEdBQ0Y7QUFBQyxNQUFBRztBQUFBLE1BQUF0RCxFQUFBLEVBQUEsTUFBQXNDLGlCQUFBO0FBR3NCZ0IsVUFBQUMsY0FDZGpCLGdCQUFla0IsVUFDcEJDLFlBQVFkLE9BQUlULFNBQVUsWUFBWVMsT0FBSXhELFdBQVlBLFFBQ3BEO0FBQ0RhLE1BQUEsRUFBQSxJQUFBc0M7QUFBQXRDLE1BQUEsRUFBQSxJQUFBc0Q7RUFBQSxPQUFBO0FBQUFBLFVBQUF0RCxFQUFBLEVBQUE7RUFBQTtBQUpELFFBQUEwRCxpQkFBdUJKO0FBSXRCLE1BQUFLO0FBQUEsTUFBQTNELEVBQUEsRUFBQSxNQUFBc0MsaUJBQUE7QUFFMkJxQixVQUFBQyxtQkFDbkJ0QixnQkFBZWtCLFVBQ3BCSyxZQUFRbEIsT0FBSVQsU0FBVSxrQkFBa0JTLE9BQUlQLGdCQUFpQkEsYUFDL0Q7QUFDRHBDLE1BQUEsRUFBQSxJQUFBc0M7QUFBQXRDLE1BQUEsRUFBQSxJQUFBMkQ7RUFBQSxPQUFBO0FBQUFBLFVBQUEzRCxFQUFBLEVBQUE7RUFBQTtBQUpELFFBQUE4RCxzQkFBNEJIO0FBSTNCLE1BQUFJO0FBQUEsTUFBQS9ELEVBQUEsRUFBQSxNQUFBNEIsdUJBQUFDLElBQUEsMkJBQUEsR0FBQTtBQUVpQmtDLFVBQUFDLFlBQVk7QUFBQ2hFLE1BQUEsRUFBQSxJQUFBK0Q7RUFBQSxPQUFBO0FBQUFBLFVBQUEvRCxFQUFBLEVBQUE7RUFBQTtBQUEvQixRQUFBaUUsWUFBa0JGO0FBQWEsTUFBQUc7QUFBQSxNQUFBbEUsRUFBQSxFQUFBLE1BQUFFLFNBQUE7QUFDTmdFLFVBQUFoRSxRQUFPaUUsS0FBTUMsTUFBK0I7QUFBQ3BFLE1BQUEsRUFBQSxJQUFBRTtBQUFBRixNQUFBLEVBQUEsSUFBQWtFO0VBQUEsT0FBQTtBQUFBQSxVQUFBbEUsRUFBQSxFQUFBO0VBQUE7QUFBdEUsUUFBQXFFLG1CQUF5Qkg7QUFFekIsTUFBSWhFLFFBQU84QyxXQUFZLEtBQUs3QyxhQUFZNkMsV0FBWSxHQUFDO0FBQUEsV0FDNUM7RUFBSTtBQUNaLE1BQUFzQjtBQUFBLE1BQUF0RSxFQUFBLEVBQUEsTUFBQTBELGtCQUFBMUQsRUFBQSxFQUFBLE1BQUFZLGlCQUFBWixFQUFBLEVBQUEsTUFBQVUsT0FBQTtBQUV3QjRELFVBQUFDLGNBQUE7QUFDdkIsWUFBQUMsUUFBY2QsZUFBZXZFLFFBQU07QUFDbkMsWUFBQXNGLGFBQW1CN0Qsa0JBQWtCNEQ7QUFDckMsVUFBQUU7QUFDQSxVQUFBQztBQUVBLFVBQUl4RixTQUFNeUYsT0FBTzFDLFNBQVUsWUFBVTtBQUNuQ3dDLHFCQUFhRyxNQUFNLFlBQVluRSxLQUFLLEVBQUVvRSxnQkFBT0MsUUFBUztBQUN0REoscUJBQWFBO01BQUgsT0FBQTtBQUNMLFlBQUl4RixTQUFNeUYsT0FBTzFDLFNBQVUsYUFBVztBQUMzQ3dDLHVCQUFhRyxNQUFNLFdBQVduRSxLQUFLLEVBQUVvRSxnQkFBT0UsSUFBSztBQUNqREwsdUJBQWFBO1FBQUgsT0FBQTtBQUNMLGNBQUl4RixTQUFNeUYsT0FBTzFDLFNBQVUsV0FBUztBQUN6Q3dDLHlCQUFhRyxNQUFNLFlBQVluRSxLQUFLLEVBQUVvRSxnQkFBT0MsUUFBUztBQUN0RCxrQkFBQTtjQUFBRTtjQUFBQztZQUFBLElBQW1EL0YsU0FBTXlGO0FBQ3pELGdCQUFJSyxvQkFBQUMsc0JBQXdDO0FBQzFDUCwyQkFBYUEsaUJBQWlCTSxnQkFBZ0IsSUFBSUMsb0JBQW9CO1lBQTVELE9BQUE7QUFFVlAsMkJBQWFBO1lBQUg7VUFDWCxPQUFBO0FBQ0ksZ0JBQUl4RixTQUFNeUYsT0FBTzFDLFNBQVUsY0FBWTtBQUM1Q3dDLDJCQUFhRyxNQUFNLFdBQVduRSxLQUFLLEVBQUVvRSxnQkFBT0ssaUJBQWtCO0FBQzlEUiwyQkFBYUE7WUFBSCxPQUFBO0FBRVZELDJCQUFhRyxNQUFNLFNBQVNuRSxLQUFLLEVBQUVvRSxnQkFBT00sS0FBTTtBQUNoRFQsMkJBQWFBO1lBQUg7VUFDWDtRQUFBO01BQUE7QUFBQSxhQUdDLDRDQUFDLHFCQUFTLEtBQUEsR0FBR3hGLFNBQU1TLElBQUssSUFBSTRFLEtBQUssTUFDL0IsNENBQUMsY0FBWSxPQUFBQyxhQUFBLGVBQUFoRSxVQUNWZ0UsYUFBQSxHQUFnQkssZ0JBQU9PLE9BQVEsTUFBL0IsSUFDSCxHQUNBLDRDQUFDLGNBQVksT0FBQVosYUFBQSxlQUFBaEUsVUFBd0N0QixTQUFNUyxJQUFNLEdBQ2pFLDRDQUFDLGNBQWUsVUFBQSxDQUFDNkUsY0FBWSxVQUFJQyxZQUFXLEdBQUMsR0FDN0MsNENBQUMsY0FBZSxVQUFBLENBQUNELGNBQWFFLFVBQVcsQ0FDM0M7SUFBTTtBQUVUM0UsTUFBQSxFQUFBLElBQUEwRDtBQUFBMUQsTUFBQSxFQUFBLElBQUFZO0FBQUFaLE1BQUEsRUFBQSxJQUFBVTtBQUFBVixNQUFBLEVBQUEsSUFBQXNFO0VBQUEsT0FBQTtBQUFBQSxVQUFBdEUsRUFBQSxFQUFBO0VBQUE7QUF0Q0QsUUFBQXNGLG1CQUF5QmhCO0FBc0N4QixNQUFBaUI7QUFBQSxNQUFBdkYsRUFBQSxFQUFBLE1BQUE4RCx1QkFBQTlELEVBQUEsRUFBQSxNQUFBWSxpQkFBQVosRUFBQSxFQUFBLE1BQUFVLE9BQUE7QUFFNkI2RSxVQUFBQyxtQkFBQTtBQUc1QixZQUFBQyxVQUFjM0Isb0JBQW9CMUIsYUFBVztBQUM3QyxZQUFBc0QsZUFBbUI5RSxrQkFBa0I0RDtBQUNyQyxZQUFBbUIsZUFBbUJ2RCxjQUFXd0QsWUFDMUJmLE1BQU0sV0FBV25FLEtBQUssRUFBRW9FLGdCQUFPSyxpQkFDVSxJQUF6Q04sTUFBTSxZQUFZbkUsS0FBSyxFQUFFb0UsZ0JBQU9DLFFBQVM7QUFDN0MsWUFBQWMsZUFBbUJ6RCxjQUFXd0QsWUFBWCxrQkFBQTtBQUFzRCxhQUd2RSw0Q0FBQyxxQkFBUyxLQUFBLFNBQVN4RCxjQUFXeEMsSUFBSyxJQUFJNEUsT0FBSyxNQUMxQyw0Q0FBQyxjQUFZLE9BQUFDLGVBQUEsZUFBQWhFLFVBQ1ZnRSxlQUFBLEdBQWdCSyxnQkFBT08sT0FBUSxNQUEvQixJQUNILEdBQ0EsNENBQUMsY0FBWSxPQUFBWixlQUFBLGVBQUFoRSxVQUNWMkIsY0FBV3hDLElBQ2QsR0FDQSw0Q0FBQyxjQUFlLFVBQUEsQ0FBQzZFLGdCQUFZLFVBQUlDLGNBQVcsR0FBQyxHQUM3Qyw0Q0FBQyxjQUFlLFVBQUEsQ0FBQ0QsZ0JBQWFFLFlBQVcsQ0FDM0M7SUFBTTtBQUVUM0UsTUFBQSxFQUFBLElBQUE4RDtBQUFBOUQsTUFBQSxFQUFBLElBQUFZO0FBQUFaLE1BQUEsRUFBQSxJQUFBVTtBQUFBVixNQUFBLEVBQUEsSUFBQXVGO0VBQUEsT0FBQTtBQUFBQSxVQUFBdkYsRUFBQSxFQUFBO0VBQUE7QUF0QkQsUUFBQThGLHdCQUE4QlA7QUF3QjlCLFFBQUFRLGVBQXFCN0YsUUFBTzhDLFNBQVU3QyxhQUFZNkM7QUFBTyxNQUFBZ0Q7QUFBQSxNQUFBaEcsRUFBQSxFQUFBLE1BQUE0Qix1QkFBQUMsSUFBQSwyQkFBQSxHQUFBO0FBSXJEbUUsVUFBQSw0Q0FBQyx3QkFBa0I7QUFBR2hHLE1BQUEsRUFBQSxJQUFBZ0c7RUFBQSxPQUFBO0FBQUFBLFVBQUFoRyxFQUFBLEVBQUE7RUFBQTtBQUFBLE1BQUFpRztBQUFBLE1BQUFqRyxFQUFBLEVBQUEsTUFBQStGLGNBQUE7QUFJU0UsVUFBQUMsT0FBT0gsY0FBYyxRQUFRO0FBQUMvRixNQUFBLEVBQUEsSUFBQStGO0FBQUEvRixNQUFBLEVBQUEsSUFBQWlHO0VBQUEsT0FBQTtBQUFBQSxVQUFBakcsRUFBQSxFQUFBO0VBQUE7QUFBakQsUUFBQW1HLE1BQUEsR0FBR0osWUFBWSxJQUFJRSxHQUE4QjtBQUFFLE1BQUFHO0FBQUEsTUFBQXBHLEVBQUEsRUFBQSxNQUFBc0Ysb0JBQUF0RixFQUFBLEVBQUEsTUFBQW1CLGdCQUFBO0FBTTFEaUYsVUFBQXBFLFlBQVdxRSxJQUFLQyxhQUFBO0FBQ2YsWUFBQUMsaUJBQXFCcEYsZUFBYzdCLElBQUtYLE9BQUs7QUFDN0MsVUFBSSxDQUFDc0Qsa0JBQWdCQSxlQUFZZSxXQUFZLEdBQUM7QUFBQSxlQUFTO01BQUk7QUFDM0QsWUFBQXdELFVBQWdCOUgsZ0JBQWdCQyxPQUFLO0FBQUMsYUFFcEMsNENBQUMscUJBQVNBLEtBQUFBLFNBQXFCLGVBQUEsVUFBdUIsY0FBQSxLQUNwRCw0Q0FBQyxxQkFBaUIsYUFBQSxLQUNoQiw0Q0FBQyxjQUFLLE1BQUEsUUFBTTZILFFBQU81SCxLQUFPLEdBQ3pCNEgsUUFBTzNILFFBQVMsNENBQUMsY0FBSyxVQUFBLFFBQVMsTUFBRzJILFFBQU8zSCxNQUFNLEdBQUMsQ0FDbkQsR0FDQ29ELGVBQVlvRSxJQUFLSSxjQUFVbkIsaUJBQWlCbkcsUUFBTSxDQUFDLENBQ3REO0lBQU0sQ0FFVDtBQUFDYSxNQUFBLEVBQUEsSUFBQXNGO0FBQUF0RixNQUFBLEVBQUEsSUFBQW1CO0FBQUFuQixNQUFBLEVBQUEsSUFBQW9HO0VBQUEsT0FBQTtBQUFBQSxVQUFBcEcsRUFBQSxFQUFBO0VBQUE7QUFBQSxNQUFBMEc7QUFBQSxNQUFBMUcsRUFBQSxFQUFBLE1BQUF1QixtQkFBQXZCLEVBQUEsRUFBQSxNQUFBc0Ysa0JBQUE7QUFHRG9CLFVBQUFuRixnQkFBZXlCLFNBQVUsS0FDeEIsNENBQUMscUJBQWtCLGVBQUEsVUFBdUIsY0FBQSxLQUN4Qyw0Q0FBQyxxQkFBaUIsYUFBQSxLQUNoQiw0Q0FBQyxjQUFLLE1BQUEsUUFBSyxXQUFTLENBQ3RCLEdBQ0N6QixnQkFBZThFLElBQUtNLGNBQVVyQixpQkFBaUJuRyxRQUFNLENBQUMsQ0FDekQ7QUFDRGEsTUFBQSxFQUFBLElBQUF1QjtBQUFBdkIsTUFBQSxFQUFBLElBQUFzRjtBQUFBdEYsTUFBQSxFQUFBLElBQUEwRztFQUFBLE9BQUE7QUFBQUEsVUFBQTFHLEVBQUEsRUFBQTtFQUFBO0FBQUEsTUFBQTRHO0FBQUEsTUFBQTVHLEVBQUEsRUFBQSxNQUFBRyxnQkFBQUgsRUFBQSxFQUFBLE1BQUE4Rix1QkFBQTtBQUdBYyxVQUFBekcsYUFBWTZDLFNBQVUsS0FDckIsNENBQUMscUJBQWtCLGVBQUEsVUFBdUIsY0FBQSxLQUN4Qyw0Q0FBQyxxQkFBaUIsYUFBQSxLQUNoQiw0Q0FBQyxjQUFLLE1BQUEsUUFBSyxZQUFVLENBQ3ZCLEdBRUMsQ0FBQSxHQUFJLElBQUk2RCxJQUFJMUcsYUFBWTJHLFFBQVNDLE1BQW1CLENBQUMsQ0FBQyxFQUFDVixJQUN0RFcsZUFDRSw0Q0FBQyxxQkFBU0EsS0FBQUEsV0FBeUIsZUFBQSxVQUFvQixXQUFBLEtBQ3JELDRDQUFDLHFCQUFpQixhQUFBLEtBQ2hCLDRDQUFDLGNBQUssVUFBQSxRQUFTLEtBQUVBLFNBQVUsQ0FDN0IsR0FDQzdHLGFBQVljLE9BQ0hnRyxTQUFLQyxJQUFDQyxhQUFhQyxTQUFVSixTQUFTLENBQUMsRUFBQ1gsSUFDM0NnQixtQkFBZXZCLHNCQUFzQjFELGFBQVcsQ0FBQyxDQUMxRCxDQUVKLENBQ0Y7QUFDRHBDLE1BQUEsRUFBQSxJQUFBRztBQUFBSCxNQUFBLEVBQUEsSUFBQThGO0FBQUE5RixNQUFBLEVBQUEsSUFBQTRHO0VBQUEsT0FBQTtBQUFBQSxVQUFBNUcsRUFBQSxFQUFBO0VBQUE7QUFBQSxNQUFBc0g7QUFBQSxNQUFBdEgsRUFBQSxFQUFBLE1BQUEwQixrQkFBQTFCLEVBQUEsRUFBQSxNQUFBc0Ysa0JBQUE7QUFHQWdDLFVBQUE1RixlQUFjc0IsU0FBVSxLQUN2Qiw0Q0FBQyxxQkFBa0IsZUFBQSxVQUF1QixjQUFBLEtBQ3hDLDRDQUFDLHFCQUFpQixhQUFBLEtBQ2hCLDRDQUFDLGNBQUssTUFBQSxRQUFNbEIsZUFBY2xELEtBQU8sR0FDaENrRCxlQUFjakQsUUFDYiw0Q0FBQyxjQUFLLFVBQUEsUUFBUyxNQUFHaUQsZUFBY2pELE1BQU0sR0FBQyxDQUUzQyxHQUNDNkMsZUFBYzJFLElBQUtrQixjQUFVakMsaUJBQWlCbkcsUUFBTSxDQUFDLENBQ3hEO0FBQ0RhLE1BQUEsRUFBQSxJQUFBMEI7QUFBQTFCLE1BQUEsRUFBQSxJQUFBc0Y7QUFBQXRGLE1BQUEsRUFBQSxJQUFBc0g7RUFBQSxPQUFBO0FBQUFBLFVBQUF0SCxFQUFBLEVBQUE7RUFBQTtBQUFBLE1BQUF3SDtBQUFBLE1BQUF4SCxFQUFBLEVBQUEsTUFBQXFFLGtCQUFBO0FBSUVtRCxVQUFBbkQsb0JBQ0MsNENBQUMsY0FBSyxVQUFBLFFBQ0hKLFlBQUEsZ0RBQUEsNkNBR0g7QUFDRGpFLE1BQUEsRUFBQSxJQUFBcUU7QUFBQXJFLE1BQUEsRUFBQSxJQUFBd0g7RUFBQSxPQUFBO0FBQUFBLFVBQUF4SCxFQUFBLEVBQUE7RUFBQTtBQUFBLE1BQUF5SDtBQUFBLE1BQUF6SCxFQUFBLEVBQUEsTUFBQTRCLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFDRDRGLFVBQUEsNENBQUMsY0FBSyxVQUFBLFFBQ0osNENBQUMsUUFBUyxLQUFBLHlDQUFzQyxxQ0FFaEQsR0FBUSxLQUFJLFVBRWQ7QUFBT3pILE1BQUEsRUFBQSxJQUFBeUg7RUFBQSxPQUFBO0FBQUFBLFVBQUF6SCxFQUFBLEVBQUE7RUFBQTtBQUFBLE1BQUEwSDtBQUFBLE1BQUExSCxFQUFBLEVBQUEsTUFBQXdILEtBQUE7QUFiVEUsVUFBQSw0Q0FBQyxxQkFBa0IsZUFBQSxZQUNoQkYsS0FPREMsR0FNRjtBQUFNekgsTUFBQSxFQUFBLElBQUF3SDtBQUFBeEgsTUFBQSxFQUFBLElBQUEwSDtFQUFBLE9BQUE7QUFBQUEsVUFBQTFILEVBQUEsRUFBQTtFQUFBO0FBQUEsTUFBQTJIO0FBQUEsTUFBQTNILEVBQUEsRUFBQSxNQUFBb0csT0FBQXBHLEVBQUEsRUFBQSxNQUFBMEcsT0FBQTFHLEVBQUEsRUFBQSxNQUFBNEcsT0FBQTVHLEVBQUEsRUFBQSxNQUFBc0gsT0FBQXRILEVBQUEsRUFBQSxNQUFBMEgsS0FBQTtBQTdFUkMsVUFBQSw0Q0FBQyxxQkFBa0IsZUFBQSxZQUVoQnZCLEtBZ0JBTSxLQVVBRSxLQXNCQVUsS0FhREksR0FlRjtBQUFNMUgsTUFBQSxFQUFBLElBQUFvRztBQUFBcEcsTUFBQSxFQUFBLElBQUEwRztBQUFBMUcsTUFBQSxFQUFBLElBQUE0RztBQUFBNUcsTUFBQSxFQUFBLElBQUFzSDtBQUFBdEgsTUFBQSxFQUFBLElBQUEwSDtBQUFBMUgsTUFBQSxFQUFBLElBQUEySDtFQUFBLE9BQUE7QUFBQUEsVUFBQTNILEVBQUEsRUFBQTtFQUFBO0FBQUEsTUFBQTRIO0FBQUEsTUFBQTVILEVBQUEsRUFBQSxNQUFBeUMsZ0JBQUF6QyxFQUFBLEVBQUEsTUFBQW1HLE9BQUFuRyxFQUFBLEVBQUEsTUFBQTJILEtBQUE7QUFwRlJDLFVBQUEsNENBQUMsVUFDTyxPQUFBLHNCQUNJLFVBQUF6QixLQUNBMUQsVUFBQUEsY0FDVixnQkFBQSxRQUVBa0YsR0ErRUY7QUFBUzNILE1BQUEsRUFBQSxJQUFBeUM7QUFBQXpDLE1BQUEsRUFBQSxJQUFBbUc7QUFBQW5HLE1BQUEsRUFBQSxJQUFBMkg7QUFBQTNILE1BQUEsRUFBQSxJQUFBNEg7RUFBQSxPQUFBO0FBQUFBLFVBQUE1SCxFQUFBLEVBQUE7RUFBQTtBQUFBLE1BQUE2SDtBQUFBLE1BQUE3SCxFQUFBLEVBQUEsTUFBQTRCLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFHVGdHLFVBQUEsNENBQUMscUJBQWMsVUFBQSxLQUNiLDRDQUFDLGNBQUssVUFBQSxNQUFTLFFBQUEsUUFDYiw0Q0FBQyxjQUNDLDRDQUFDLHdCQUE4QixVQUFBLGdCQUFZLFFBQUEsWUFBVSxHQUNyRCw0Q0FBQyx3QkFBOEIsVUFBQSxTQUFlLFFBQUEsV0FBUyxHQUN2RCw0Q0FBQyw0QkFDUSxRQUFBLGNBQ0MsU0FBQSxnQkFDQyxVQUFBLE9BQ0csYUFBQSxVQUFRLENBRXhCLENBQ0YsQ0FDRjtBQUFNN0gsTUFBQSxFQUFBLElBQUE2SDtFQUFBLE9BQUE7QUFBQUEsVUFBQTdILEVBQUEsRUFBQTtFQUFBO0FBQUEsTUFBQThIO0FBQUEsTUFBQTlILEVBQUEsRUFBQSxNQUFBNEgsS0FBQTtBQXhHUkUsVUFBQSw0Q0FBQyxxQkFBa0IsZUFBQSxZQUNqQjlCLEtBRUE0QixLQXdGQUMsR0FjRjtBQUFNN0gsTUFBQSxFQUFBLElBQUE0SDtBQUFBNUgsTUFBQSxFQUFBLElBQUE4SDtFQUFBLE9BQUE7QUFBQUEsVUFBQTlILEVBQUEsRUFBQTtFQUFBO0FBQUEsU0F6R044SDtBQXlHTTtBQTdSSCxTQUFBZixPQUFBZ0IsS0FBQTtBQUFBLFNBK044Q2IsSUFBQ0M7QUFBYTtBQS9ONUQsU0FBQS9DLE9BQUE0RCxLQUFBO0FBQUEsU0EyR3NDZCxJQUFDdEMsT0FBTzFDLFNBQVU7QUFBUTtBQTNHaEUsU0FBQVQsT0FBQXdHLEtBQUFDLEtBQUE7QUFBQSxTQThCQ3hJLElBQUNFLEtBQUtDLGNBQWVGLElBQUNDLElBQUs7QUFBQztBQTlCN0IsU0FBQTBCLE9BQUE1QixHQUFBQyxHQUFBO0FBQUEsU0FzQmlCRCxFQUFDRSxLQUFLQyxjQUFlRixFQUFDQyxJQUFLO0FBQUM7QUF0QjdDLFNBQUF5QixPQUFBOEcsS0FBQTtBQUFBLFNBcUJjakIsSUFBQ3RDLE9BQU93RCxPQUFPbEcsU0FBVTtBQUFnQjtBQXJCdkQsU0FBQWhCLE1BQUFnRyxHQUFBO0FBQUEsU0FhSUEsRUFBQ3RDLE9BQU93RCxPQUFPbEcsU0FBVTtBQUFnQjtJQXBEOUNGOzs7O0FBbENOO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXFCQSxJQUFNQSxjQUE2QixDQUFDLFdBQVcsU0FBUyxRQUFRLFlBQVk7Ozs7O0FDbEJyRSxTQUFBcUcsYUFBQUMsSUFBQTtBQUFBLFFBQUFDLElBQUFDLEVBQUEsRUFBQTtBQUFzQixRQUFBO0lBQUFDO0lBQUFDO0VBQUEsSUFBQUo7QUFJM0IsUUFBQSxDQUFBSyxLQUFBLElBQWdCQyxTQUFTO0FBQ3pCLFFBQUFDLFFBQWNDLGlCQUFpQjtBQUMvQixRQUFBQyxxQkFBMkJDLGdCQUFnQjtBQUMzQyxRQUFBLENBQUFDLGdCQUFBQyxpQkFBQSxJQUE0Q0MsU0FBUyxJQUFJO0FBQ3pELFFBQUEsQ0FBQUMsT0FBQUMsUUFBQSxJQUEwQkYsU0FBd0IsSUFBSTtBQUFDLE1BQUFHO0FBQUEsTUFBQUM7QUFBQSxNQUFBaEIsRUFBQSxDQUFBLE1BQUFHLGNBQUFILEVBQUEsQ0FBQSxNQUFBUSxzQkFBQVIsRUFBQSxDQUFBLE1BQUFFLGNBQUFGLEVBQUEsQ0FBQSxNQUFBTSxPQUFBO0FBRTdDUyxTQUFBQSxNQUFBO0FBQ1IsWUFBQUUsbUJBQUEsZUFBQUEsb0JBQUE7QUFBQTtBQUNFLFlBQUE7QUFJRSxnQkFBQUMsU0FBZVosTUFBS2EsU0FDUixFQUFDQyxJQUNQQyxRQUFRQyxLQUFNQyxDQUFBQSxPQUFLQSxHQUFDQyxTQUFVdEIsVUFBVTtBQUM5QyxjQUFJLENBQUNnQixRQUFNO0FBQ1RKLHFCQUFTLGVBQWVaLFVBQVUsYUFBYTtBQUMvQ1MsOEJBQWtCLEtBQUs7QUFDdkJSLHVCQUFXLGVBQWVELFVBQVUsYUFBYTtBQUFDO1VBQUE7QUFLcEQsZ0JBQUF1QixTQUFlLE1BQU1qQixtQkFBbUJOLFVBQVU7QUFBQ3dCLGVBRW5ELFNBQVFELE9BQU1FLE9BQU9DLE1BQUs7WUFBQSxLQUNuQixhQUFXO0FBQ2RqQixnQ0FBa0IsS0FBSztBQUN2QlIseUJBQVcsK0JBQStCRCxVQUFVLEVBQUU7QUFDdEQsb0JBQUF3QjtZQUFLO1lBQUEsS0FDRixjQUFZO0FBQ2ZaLHVCQUFTLEdBQUdaLFVBQVUsMEJBQTBCO0FBQ2hEUyxnQ0FBa0IsS0FBSztBQUN2QlIseUJBQ0UsR0FBR0QsVUFBVSxxREFDZjtBQUNBLG9CQUFBd0I7WUFBSztZQUFBLEtBQ0Y7WUFBUyxLQUNUO1lBQVEsS0FDUixZQUFVO0FBQ2JaLHVCQUFTLDBCQUEwQlosVUFBVSxFQUFFO0FBQy9DUyxnQ0FBa0IsS0FBSztBQUN2QlIseUJBQVcsMEJBQTBCRCxVQUFVLEVBQUU7WUFBQztVQUV0RDtRQUFDLFNBQUEyQixJQUFBO0FBQ01DLGdCQUFBQSxNQUFBQTtBQUVQLGdCQUFBQyxlQUFxQkQsZUFBZUUsUUFBUUYsSUFBR0csVUFBV0MsT0FBT0osR0FBRztBQUNwRWhCLG1CQUFTaUIsWUFBWTtBQUNyQnBCLDRCQUFrQixLQUFLO0FBQ3ZCUixxQkFBVyxVQUFVNEIsWUFBWSxFQUFFO1FBQUM7TUFDckM7QUFHRWQsdUJBQWlCO0lBQUM7QUFDdEJELFNBQUEsQ0FBQ2QsWUFBWU0sb0JBQW9CRixPQUFPSCxVQUFVO0FBQUNILE1BQUEsQ0FBQSxJQUFBRztBQUFBSCxNQUFBLENBQUEsSUFBQVE7QUFBQVIsTUFBQSxDQUFBLElBQUFFO0FBQUFGLE1BQUEsQ0FBQSxJQUFBTTtBQUFBTixNQUFBLENBQUEsSUFBQWU7QUFBQWYsTUFBQSxDQUFBLElBQUFnQjtFQUFBLE9BQUE7QUFBQUQsU0FBQWYsRUFBQSxDQUFBO0FBQUFnQixTQUFBaEIsRUFBQSxDQUFBO0VBQUE7QUFqRHREbUMsWUFBVXBCLElBaURQQyxFQUFtRDtBQUV0RCxNQUFJTixnQkFBYztBQUFBLFFBQUFtQjtBQUFBLFFBQUE3QixFQUFBLENBQUEsTUFBQUUsWUFBQTtBQUdaMkIsV0FBQSw0Q0FBQyxjQUFXLE9BQUEsVUFBTyxvQkFDRCw0Q0FBQyxjQUFLLE1BQUEsUUFBTTNCLFVBQVcsQ0FDekM7QUFBT0YsUUFBQSxDQUFBLElBQUFFO0FBQUFGLFFBQUEsQ0FBQSxJQUFBNkI7SUFBQSxPQUFBO0FBQUFBLFdBQUE3QixFQUFBLENBQUE7SUFBQTtBQUFBLFFBQUFvQztBQUFBLFFBQUFwQyxFQUFBLENBQUEsTUFBQXFDLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFDUEYsV0FBQSw0Q0FBQyx5QkFDQyw0Q0FBQyxhQUFPLEdBQ1IsNENBQUMsa0JBQUssd0NBQXNDLENBQzlDO0FBQU1wQyxRQUFBLENBQUEsSUFBQW9DO0lBQUEsT0FBQTtBQUFBQSxXQUFBcEMsRUFBQSxDQUFBO0lBQUE7QUFBQSxRQUFBdUM7QUFBQSxRQUFBdkMsRUFBQSxDQUFBLE1BQUE2QixJQUFBO0FBUFJVLFdBQUEsNENBQUMscUJBQWtCLGVBQUEsVUFBYyxLQUFBLEdBQVksU0FBQSxLQUMzQ1YsSUFHQU8sRUFJRjtBQUFNcEMsUUFBQSxDQUFBLElBQUE2QjtBQUFBN0IsUUFBQSxFQUFBLElBQUF1QztJQUFBLE9BQUE7QUFBQUEsV0FBQXZDLEVBQUEsRUFBQTtJQUFBO0FBQUEsV0FSTnVDO0VBUU07QUFJVixNQUFJMUIsT0FBSztBQUFBLFFBQUFnQjtBQUFBLFFBQUE3QixFQUFBLEVBQUEsTUFBQUksT0FBQTtBQUlNeUIsV0FBQVcsTUFBTSxTQUFTcEMsS0FBSyxFQUFFcUMsZ0JBQU9DLEtBQU07QUFBQzFDLFFBQUEsRUFBQSxJQUFBSTtBQUFBSixRQUFBLEVBQUEsSUFBQTZCO0lBQUEsT0FBQTtBQUFBQSxXQUFBN0IsRUFBQSxFQUFBO0lBQUE7QUFBQSxRQUFBb0M7QUFBQSxRQUFBcEMsRUFBQSxFQUFBLE1BQUE2QixJQUFBO0FBQTNDTyxXQUFBLDRDQUFDLGtCQUFNUCxJQUFxQyxHQUFDO0FBQU83QixRQUFBLEVBQUEsSUFBQTZCO0FBQUE3QixRQUFBLEVBQUEsSUFBQW9DO0lBQUEsT0FBQTtBQUFBQSxXQUFBcEMsRUFBQSxFQUFBO0lBQUE7QUFBQSxRQUFBdUM7QUFBQSxRQUFBdkMsRUFBQSxFQUFBLE1BQUFFLFlBQUE7QUFDcERxQyxXQUFBLDRDQUFDLGNBQVcsT0FBQSxXQUFRLDJCQUF3QnJDLFVBQVc7QUFBT0YsUUFBQSxFQUFBLElBQUFFO0FBQUFGLFFBQUEsRUFBQSxJQUFBdUM7SUFBQSxPQUFBO0FBQUFBLFdBQUF2QyxFQUFBLEVBQUE7SUFBQTtBQUFBLFFBQUEyQztBQUFBLFFBQUEzQyxFQUFBLEVBQUEsTUFBQW9DLE1BQUFwQyxFQUFBLEVBQUEsTUFBQXVDLElBQUE7QUFGaEVJLFdBQUEsNENBQUMseUJBQ0NQLElBQ0FHLEVBQ0Y7QUFBTXZDLFFBQUEsRUFBQSxJQUFBb0M7QUFBQXBDLFFBQUEsRUFBQSxJQUFBdUM7QUFBQXZDLFFBQUEsRUFBQSxJQUFBMkM7SUFBQSxPQUFBO0FBQUFBLFdBQUEzQyxFQUFBLEVBQUE7SUFBQTtBQUFBLFFBQUE0QztBQUFBLFFBQUE1QyxFQUFBLEVBQUEsTUFBQWEsT0FBQTtBQUNOK0IsV0FBQSw0Q0FBQyxjQUFLLFVBQUEsUUFBUyxXQUFRL0IsS0FBTTtBQUFPYixRQUFBLEVBQUEsSUFBQWE7QUFBQWIsUUFBQSxFQUFBLElBQUE0QztJQUFBLE9BQUE7QUFBQUEsV0FBQTVDLEVBQUEsRUFBQTtJQUFBO0FBQUEsUUFBQTZDO0FBQUEsUUFBQTdDLEVBQUEsRUFBQSxNQUFBMkMsTUFBQTNDLEVBQUEsRUFBQSxNQUFBNEMsSUFBQTtBQUx0Q0MsV0FBQSw0Q0FBQyxxQkFBa0IsZUFBQSxVQUFjLEtBQUEsR0FBWSxTQUFBLEtBQzNDRixJQUlBQyxFQUNGO0FBQU01QyxRQUFBLEVBQUEsSUFBQTJDO0FBQUEzQyxRQUFBLEVBQUEsSUFBQTRDO0FBQUE1QyxRQUFBLEVBQUEsSUFBQTZDO0lBQUEsT0FBQTtBQUFBQSxXQUFBN0MsRUFBQSxFQUFBO0lBQUE7QUFBQSxXQU5ONkM7RUFNTTtBQUVULFNBRU07QUFBSTs7OztBQXZHYjtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDd0JPLFNBQUFDLFlBQUFDLElBQUE7QUFBQSxRQUFBQyxJQUFBQyxFQUFBLEVBQUE7QUFBcUIsUUFBQTtJQUFBQztFQUFBLElBQUFIO0FBQzFCLFFBQUFJLE1BQVlDLFlBQVlDLE1BQVU7QUFDbEMsUUFBQUMsbUJBQXlCRixZQUFZRyxPQUF1QjtBQUM1RCxRQUFBQyxhQUFtQkwsSUFBR007QUFBUSxNQUFBQztBQUFBLE1BQUFWLEVBQUEsQ0FBQSxNQUFBVyx1QkFBQUMsSUFBQSwyQkFBQSxHQUFBO0FBQ2lDRixTQUFBO01BQUFHLE1BQ3ZEO0lBQ1I7QUFBQ2IsTUFBQSxDQUFBLElBQUFVO0VBQUEsT0FBQTtBQUFBQSxTQUFBVixFQUFBLENBQUE7RUFBQTtBQUZELFFBQUEsQ0FBQWMsV0FBQUMsWUFBQSxJQUFrQ0MsY0FBS0MsU0FBd0JQLEVBRTlEO0FBQUMsTUFBQVE7QUFBQSxNQUFBbEIsRUFBQSxDQUFBLE1BQUFXLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFDeURNLFNBQUEsQ0FBQTtBQUFFbEIsTUFBQSxDQUFBLElBQUFrQjtFQUFBLE9BQUE7QUFBQUEsU0FBQWxCLEVBQUEsQ0FBQTtFQUFBO0FBQTdELFFBQUEsQ0FBQW1CLFNBQUFDLFVBQUEsSUFBOEJKLGNBQUtDLFNBQXdCQyxFQUFFO0FBQUMsTUFBQUc7QUFBQSxNQUFBckIsRUFBQSxDQUFBLE1BQUFNLGlCQUFBZ0IsV0FBQTtBQUl0REQsU0FBQUUsdUJBQXVCakIsaUJBQWdCZ0IsU0FBVTtBQUFDdEIsTUFBQSxDQUFBLElBQUFNLGlCQUFBZ0I7QUFBQXRCLE1BQUEsQ0FBQSxJQUFBcUI7RUFBQSxPQUFBO0FBQUFBLFNBQUFyQixFQUFBLENBQUE7RUFBQTtBQUQxRCxRQUFBd0Isa0JBQ1FIO0FBRVAsTUFBQUk7QUFBQSxNQUFBekIsRUFBQSxDQUFBLE1BQUFRLFlBQUE7QUFJR2lCLFNBQUFqQixXQUFVa0IsT0FDQUMsT0FBK0IsRUFBQ0MsS0FDbENDLE9BQXNDO0FBQUM3QixNQUFBLENBQUEsSUFBQVE7QUFBQVIsTUFBQSxDQUFBLElBQUF5QjtFQUFBLE9BQUE7QUFBQUEsU0FBQXpCLEVBQUEsQ0FBQTtFQUFBO0FBSm5ELFFBQUE4QixrQkFFSUw7QUFJSCxNQUFBTTtBQUFBLE1BQUFDO0FBQUEsTUFBQWhDLEVBQUEsQ0FBQSxNQUFBOEIsbUJBQUE5QixFQUFBLENBQUEsTUFBQUcsSUFBQThCLE9BQUE7QUFFZUYsU0FBQUEsTUFBQTtBQUNkLFVBQUFHLFlBQWdCO0FBQ2hCLFlBQUFDLGlCQUFBLGVBQUFBLGtCQUFBO0FBQ0UsY0FBQUMsY0FBb0IsTUFBTUMsUUFBT0MsSUFDL0JSLGdCQUFlUyxJQUFLLE9BQUFDLGFBQUE7QUFDbEIsZ0JBQUFDLFFBQWNDLFNBQU1DLE9BQU9GO0FBQzNCLGdCQUFBRyxRQUFjRixTQUFNQyxPQUFPOUIsU0FBVTtBQUNyQyxnQkFBQWdDLFNBQWVILFNBQU1DLE9BQU85QixTQUFVO0FBQ3RDLGdCQUFBaUMsa0JBQXdCSixTQUFNQyxPQUFPOUIsU0FBVTtBQUMvQyxjQUFBa0Msa0JBQTJDQztBQUUzQyxjQUFJSixTQUFBQyxRQUFlO0FBQ2pCLGtCQUFBSSxlQUFxQixJQUFJQyxtQkFDdkJSLFNBQU1TLE1BQ05ULFNBQU1DLE1BQ1I7QUFDQSxrQkFBQVMsU0FBZSxNQUFNSCxhQUFZRyxPQUFRO0FBS3pDLGtCQUFBQyxpQkFDRUMsMkJBQTJCLE1BQU0sUUFDakNaLFNBQU03QixTQUFVO0FBQ2xCLGtCQUFBMEMsdUJBQ0ViLFNBQU03QixTQUFVLGVBQ2hCMkMsb0JBQW9CckQsSUFBRzhCLE9BQVFTLFNBQU1TLElBQUssRUFBQ00sU0FBVTtBQUN2RFYsOEJBQ0VXLFFBQVFOLE1BQXdCLEtBQWhDQyxrQkFBQUU7VUFEYTtBQUlqQixnQkFBQUksV0FBaUI7WUFBQVIsTUFDVFQsU0FBTVM7WUFBS1QsUUFDakJBO1lBQU1EO1VBRVI7QUFFQSxjQUFJSyxpQkFBZTtBQUFBLG1CQUNWO2NBQUEsR0FDRmE7Y0FBUUMsV0FDQTtjQUF5QmIsaUJBQ25CO2NBQUtKLFFBQ2RELFNBQU1DO1lBQ2hCO1VBQUMsT0FBQTtBQUNJLGdCQUFJQyxPQUFLO0FBQUEscUJBQ1A7Z0JBQUEsR0FDRmU7Z0JBQVFDLFdBQ0E7Z0JBQWNiO2dCQUFBSixRQUVqQkQsU0FBTUM7Y0FDaEI7WUFBQyxPQUFBO0FBQ0ksa0JBQUlFLFFBQU07QUFBQSx1QkFDUjtrQkFBQSxHQUNGYztrQkFBUUMsV0FDQTtrQkFBZWI7a0JBQUFKLFFBRWxCRCxTQUFNQztnQkFDaEI7Y0FBQyxPQUFBO0FBQUEsdUJBRU07a0JBQUEsR0FDRmdCO2tCQUFRQyxXQUNBO2tCQUFnQmpCLFFBQ25CRCxTQUFNQztnQkFDaEI7Y0FBQztZQUNGO1VBQUE7UUFBQSxDQUNGLENBQ0g7QUFFQSxZQUFJVCxXQUFTO0FBQUE7UUFBQTtBQUNiZCxtQkFBV2dCLFdBQVc7TUFBQztBQUdwQkQscUJBQWU7QUFBQyxhQUNkLE1BQUE7QUFDTEQsb0JBQVlBO01BQUg7SUFDVjtBQUNBRixTQUFBLENBQUNGLGlCQUFpQjNCLElBQUc4QixLQUFNO0FBQUNqQyxNQUFBLENBQUEsSUFBQThCO0FBQUE5QixNQUFBLENBQUEsSUFBQUcsSUFBQThCO0FBQUFqQyxNQUFBLENBQUEsSUFBQStCO0FBQUEvQixNQUFBLENBQUEsSUFBQWdDO0VBQUEsT0FBQTtBQUFBRCxTQUFBL0IsRUFBQSxDQUFBO0FBQUFnQyxTQUFBaEMsRUFBQSxDQUFBO0VBQUE7QUE1RS9CZ0IsZ0JBQUs2QyxVQUFXOUIsSUE0RWJDLEVBQTRCO0FBQUMsTUFBQThCO0FBQUEsTUFBQUM7QUFBQSxNQUFBL0QsRUFBQSxFQUFBLE1BQUF3QixnQkFBQWlDLFVBQUF6RCxFQUFBLEVBQUEsTUFBQThCLGdCQUFBMkIsVUFBQXpELEVBQUEsRUFBQSxNQUFBRSxjQUFBRixFQUFBLEVBQUEsTUFBQW1CLFFBQUFzQyxRQUFBO0FBRXRCSyxTQUFBQSxNQUFBO0FBQ1IsVUFBSTNDLFFBQU9zQyxXQUFZLEtBQUszQixnQkFBZTJCLFNBQVUsR0FBQztBQUFBO01BQUE7QUFNdEQsVUFBSXRDLFFBQU9zQyxXQUFZLEtBQUtqQyxnQkFBZWlDLFdBQVksR0FBQztBQUN0RHZELG1CQUNFLHFLQUNGO01BQUM7SUFDRjtBQUNBNkQsU0FBQSxDQUNENUMsUUFBT3NDLFFBQ1AzQixnQkFBZTJCLFFBQ2ZqQyxnQkFBZWlDLFFBQ2Z2RCxVQUFVO0FBQ1hGLE1BQUEsRUFBQSxJQUFBd0IsZ0JBQUFpQztBQUFBekQsTUFBQSxFQUFBLElBQUE4QixnQkFBQTJCO0FBQUF6RCxNQUFBLEVBQUEsSUFBQUU7QUFBQUYsTUFBQSxFQUFBLElBQUFtQixRQUFBc0M7QUFBQXpELE1BQUEsRUFBQSxJQUFBOEQ7QUFBQTlELE1BQUEsRUFBQSxJQUFBK0Q7RUFBQSxPQUFBO0FBQUFELFNBQUE5RCxFQUFBLEVBQUE7QUFBQStELFNBQUEvRCxFQUFBLEVBQUE7RUFBQTtBQWpCRDZELFlBQVVDLElBWVBDLEVBS0Y7QUFFRCxVQUFRakQsVUFBU0QsTUFBSztJQUFBLEtBQ2YsUUFBTTtBQUFBLFVBQUFtRDtBQUFBLFVBQUFDO0FBQUEsVUFBQWpFLEVBQUEsRUFBQSxNQUFBVyx1QkFBQUMsSUFBQSwyQkFBQSxHQUFBO0FBS1dxRCxhQUFBQyxZQUNkbkQsYUFBYTtVQUFBRixNQUFRO1VBQWFxRDtRQUFTLENBQUM7QUFFekJGLGNBQUFHLGlCQUNuQnBELGFBQWE7VUFBQUYsTUFBUTtVQUFtQnNEO1FBQWMsQ0FBQztBQUFDbkUsVUFBQSxFQUFBLElBQUFnRTtBQUFBaEUsVUFBQSxFQUFBLElBQUFpRTtNQUFBLE9BQUE7QUFBQUQsY0FBQWhFLEVBQUEsRUFBQTtBQUFBaUUsYUFBQWpFLEVBQUEsRUFBQTtNQUFBO0FBQUEsVUFBQW9FO0FBQUEsVUFBQXBFLEVBQUEsRUFBQSxNQUFBd0IsbUJBQUF4QixFQUFBLEVBQUEsTUFBQUUsY0FBQUYsRUFBQSxFQUFBLE1BQUFtQixXQUFBbkIsRUFBQSxFQUFBLE1BQUFjLFVBQUF1RCxZQUFBO0FBUDVERCxjQUFBLDRDQUFDLGdCQUNVakQsU0FDS0ssY0FBQUEsaUJBQ0UsZ0JBQUF5QyxJQUdLLHFCQUFBRCxLQUdUOUQsWUFDQSxZQUFBWSxVQUFTdUQsWUFBVztBQUNoQ3JFLFVBQUEsRUFBQSxJQUFBd0I7QUFBQXhCLFVBQUEsRUFBQSxJQUFBRTtBQUFBRixVQUFBLEVBQUEsSUFBQW1CO0FBQUFuQixVQUFBLEVBQUEsSUFBQWMsVUFBQXVEO0FBQUFyRSxVQUFBLEVBQUEsSUFBQW9FO01BQUEsT0FBQTtBQUFBQSxjQUFBcEUsRUFBQSxFQUFBO01BQUE7QUFBQSxhQVhGb0U7SUFXRTtJQUFBLEtBR0QsZUFBYTtBQUFBLFVBQUFIO0FBQUEsVUFBQWpFLEVBQUEsRUFBQSxNQUFBRyxJQUFBOEIsU0FBQWpDLEVBQUEsRUFBQSxNQUFBYyxVQUFBb0QsT0FBQWYsTUFBQTtBQUNJYyxhQUFBVCxvQkFBb0JyRCxJQUFHOEIsT0FBUW5CLFVBQVNvRCxPQUFPZixJQUFLO0FBQUNuRCxVQUFBLEVBQUEsSUFBQUcsSUFBQThCO0FBQUFqQyxVQUFBLEVBQUEsSUFBQWMsVUFBQW9ELE9BQUFmO0FBQUFuRCxVQUFBLEVBQUEsSUFBQWlFO01BQUEsT0FBQTtBQUFBQSxhQUFBakUsRUFBQSxFQUFBO01BQUE7QUFBekUsWUFBQXNFLGdCQUFvQkw7QUFFcEIsWUFBQUksYUFDRXZELFVBQVNvRCxPQUFPTixjQUFlLG1CQUEvQixjQUFBO0FBSUYsVUFBSTlDLFVBQVNvRCxPQUFPTixjQUFlLFNBQU87QUFBQSxZQUFBSTtBQUFBLFlBQUFoRSxFQUFBLEVBQUEsTUFBQWMsVUFBQW9ELFFBQUE7QUFLdkJGLGdCQUFBQSxNQUNYakQsYUFBYTtZQUFBRixNQUFRO1lBQWNxRCxRQUFVcEQsVUFBU29EO1VBQVEsQ0FBQztBQUFDbEUsWUFBQSxFQUFBLElBQUFjLFVBQUFvRDtBQUFBbEUsWUFBQSxFQUFBLElBQUFnRTtRQUFBLE9BQUE7QUFBQUEsZ0JBQUFoRSxFQUFBLEVBQUE7UUFBQTtBQUFBLFlBQUFvRTtBQUFBLFlBQUFwRSxFQUFBLEVBQUEsTUFBQXFFLFlBQUE7QUFFeERELGdCQUFBQSxNQUFNckQsYUFBYTtZQUFBRixNQUFRO1lBQU13RDtVQUFhLENBQUM7QUFBQ3JFLFlBQUEsRUFBQSxJQUFBcUU7QUFBQXJFLFlBQUEsRUFBQSxJQUFBb0U7UUFBQSxPQUFBO0FBQUFBLGdCQUFBcEUsRUFBQSxFQUFBO1FBQUE7QUFBQSxZQUFBdUU7QUFBQSxZQUFBdkUsRUFBQSxFQUFBLE1BQUFFLGNBQUFGLEVBQUEsRUFBQSxNQUFBc0UsY0FBQWIsVUFBQXpELEVBQUEsRUFBQSxNQUFBZ0UsT0FBQWhFLEVBQUEsRUFBQSxNQUFBb0UsT0FBQXBFLEVBQUEsRUFBQSxNQUFBYyxVQUFBb0QsUUFBQTtBQU41REssZ0JBQUEsNENBQUMsc0JBQ1MsUUFBQXpELFVBQVNvRCxRQUNDLGtCQUFBTSxjQUFXZixRQUNoQixhQUFBTyxLQUdILFVBQUFJLEtBQ0VsRSxZQUFVO0FBQ3RCRixZQUFBLEVBQUEsSUFBQUU7QUFBQUYsWUFBQSxFQUFBLElBQUFzRSxjQUFBYjtBQUFBekQsWUFBQSxFQUFBLElBQUFnRTtBQUFBaEUsWUFBQSxFQUFBLElBQUFvRTtBQUFBcEUsWUFBQSxFQUFBLElBQUFjLFVBQUFvRDtBQUFBbEUsWUFBQSxFQUFBLElBQUF1RTtRQUFBLE9BQUE7QUFBQUEsZ0JBQUF2RSxFQUFBLEVBQUE7UUFBQTtBQUFBLGVBUkZ1RTtNQVFFLE9BQUE7QUFBQSxZQUFBUDtBQUFBLFlBQUFoRSxFQUFBLEVBQUEsTUFBQWMsVUFBQW9ELFFBQUE7QUFPYUYsZ0JBQUFBLE1BQ1hqRCxhQUFhO1lBQUFGLE1BQVE7WUFBY3FELFFBQVVwRCxVQUFTb0Q7VUFBUSxDQUFDO0FBQUNsRSxZQUFBLEVBQUEsSUFBQWMsVUFBQW9EO0FBQUFsRSxZQUFBLEVBQUEsSUFBQWdFO1FBQUEsT0FBQTtBQUFBQSxnQkFBQWhFLEVBQUEsRUFBQTtRQUFBO0FBQUEsWUFBQW9FO0FBQUEsWUFBQXBFLEVBQUEsRUFBQSxNQUFBcUUsWUFBQTtBQUV4REQsZ0JBQUFBLE1BQU1yRCxhQUFhO1lBQUFGLE1BQVE7WUFBTXdEO1VBQWEsQ0FBQztBQUFDckUsWUFBQSxFQUFBLElBQUFxRTtBQUFBckUsWUFBQSxFQUFBLElBQUFvRTtRQUFBLE9BQUE7QUFBQUEsZ0JBQUFwRSxFQUFBLEVBQUE7UUFBQTtBQUFBLFlBQUF1RTtBQUFBLFlBQUF2RSxFQUFBLEVBQUEsTUFBQUUsY0FBQUYsRUFBQSxFQUFBLE1BQUFzRSxjQUFBYixVQUFBekQsRUFBQSxFQUFBLE1BQUFnRSxPQUFBaEUsRUFBQSxFQUFBLE1BQUFvRSxPQUFBcEUsRUFBQSxFQUFBLE1BQUFjLFVBQUFvRCxRQUFBO0FBTjVESyxnQkFBQSw0Q0FBQyx1QkFDUyxRQUFBekQsVUFBU29ELFFBQ0Msa0JBQUFNLGNBQVdmLFFBQ2hCLGFBQUFPLEtBR0gsVUFBQUksS0FDRWxFLFlBQVU7QUFDdEJGLFlBQUEsRUFBQSxJQUFBRTtBQUFBRixZQUFBLEVBQUEsSUFBQXNFLGNBQUFiO0FBQUF6RCxZQUFBLEVBQUEsSUFBQWdFO0FBQUFoRSxZQUFBLEVBQUEsSUFBQW9FO0FBQUFwRSxZQUFBLEVBQUEsSUFBQWMsVUFBQW9EO0FBQUFsRSxZQUFBLEVBQUEsSUFBQXVFO1FBQUEsT0FBQTtBQUFBQSxnQkFBQXZFLEVBQUEsRUFBQTtRQUFBO0FBQUEsZUFSRnVFO01BUUU7SUFFTDtJQUFBLEtBR0UsZ0JBQWM7QUFBQSxVQUFBUDtBQUFBLFVBQUFDO0FBQUEsVUFBQWpFLEVBQUEsRUFBQSxNQUFBYyxVQUFBb0QsUUFBQTtBQUlDRCxhQUFBQSxDQUFBUSxHQUFBQyxVQUNaM0QsYUFBYTtVQUFBRixNQUNMO1VBQW9CcUQsUUFDbEJwRCxVQUFTb0Q7VUFBT1MsV0FDYkQ7UUFDYixDQUFDO0FBRUtWLGNBQUFBLE1BQ05qRCxhQUFhO1VBQUFGLE1BQVE7VUFBYXFELFFBQVVwRCxVQUFTb0Q7UUFBUSxDQUFDO0FBQUNsRSxVQUFBLEVBQUEsSUFBQWMsVUFBQW9EO0FBQUFsRSxVQUFBLEVBQUEsSUFBQWdFO0FBQUFoRSxVQUFBLEVBQUEsSUFBQWlFO01BQUEsT0FBQTtBQUFBRCxjQUFBaEUsRUFBQSxFQUFBO0FBQUFpRSxhQUFBakUsRUFBQSxFQUFBO01BQUE7QUFBQSxVQUFBb0U7QUFBQSxVQUFBcEUsRUFBQSxFQUFBLE1BQUFnRSxPQUFBaEUsRUFBQSxFQUFBLE1BQUFpRSxNQUFBakUsRUFBQSxFQUFBLE1BQUFjLFVBQUFvRCxRQUFBO0FBVm5FRSxjQUFBLDRDQUFDLG1CQUNTLFFBQUF0RCxVQUFTb0QsUUFDSCxjQUFBRCxJQU9OLFFBQUFELEtBQ3lEO0FBRWpFaEUsVUFBQSxFQUFBLElBQUFnRTtBQUFBaEUsVUFBQSxFQUFBLElBQUFpRTtBQUFBakUsVUFBQSxFQUFBLElBQUFjLFVBQUFvRDtBQUFBbEUsVUFBQSxFQUFBLElBQUFvRTtNQUFBLE9BQUE7QUFBQUEsY0FBQXBFLEVBQUEsRUFBQTtNQUFBO0FBQUEsYUFaRm9FO0lBWUU7SUFBQSxLQUdELHNCQUFvQjtBQUFBLFVBQUFIO0FBQUEsVUFBQWpFLEVBQUEsRUFBQSxNQUFBRyxJQUFBOEIsU0FBQWpDLEVBQUEsRUFBQSxNQUFBYyxVQUFBb0QsT0FBQWYsTUFBQTtBQUNIYyxhQUFBVCxvQkFBb0JyRCxJQUFHOEIsT0FBUW5CLFVBQVNvRCxPQUFPZixJQUFLO0FBQUNuRCxVQUFBLEVBQUEsSUFBQUcsSUFBQThCO0FBQUFqQyxVQUFBLEVBQUEsSUFBQWMsVUFBQW9ELE9BQUFmO0FBQUFuRCxVQUFBLEVBQUEsSUFBQWlFO01BQUEsT0FBQTtBQUFBQSxhQUFBakUsRUFBQSxFQUFBO01BQUE7QUFBekUsWUFBQXdFLGNBQW9CUDtBQUNwQixZQUFBVyxPQUFhSixZQUFZMUQsVUFBUzZELFNBQVU7QUFDNUMsVUFBSSxDQUFDQyxNQUFJO0FBQ1A3RCxxQkFBYTtVQUFBRixNQUFRO1VBQWNxRCxRQUFVcEQsVUFBU29EO1FBQVEsQ0FBQztBQUFDLGVBQ3pEO01BQUk7QUFDWixVQUFBRjtBQUFBLFVBQUFoRSxFQUFBLEVBQUEsTUFBQWMsVUFBQW9ELFFBQUE7QUFLV0YsY0FBQUEsTUFDTmpELGFBQWE7VUFBQUYsTUFBUTtVQUFjcUQsUUFBVXBELFVBQVNvRDtRQUFRLENBQUM7QUFBQ2xFLFVBQUEsRUFBQSxJQUFBYyxVQUFBb0Q7QUFBQWxFLFVBQUEsRUFBQSxJQUFBZ0U7TUFBQSxPQUFBO0FBQUFBLGNBQUFoRSxFQUFBLEVBQUE7TUFBQTtBQUFBLFVBQUFvRTtBQUFBLFVBQUFwRSxFQUFBLEVBQUEsTUFBQWdFLE9BQUFoRSxFQUFBLEVBQUEsTUFBQTRFLFFBQUE1RSxFQUFBLEVBQUEsTUFBQWMsVUFBQW9ELFFBQUE7QUFKcEVFLGNBQUEsNENBQUMscUJBQ09RLE1BQ0UsUUFBQTlELFVBQVNvRCxRQUNULFFBQUFGLEtBQzBEO0FBRWxFaEUsVUFBQSxFQUFBLElBQUFnRTtBQUFBaEUsVUFBQSxFQUFBLElBQUE0RTtBQUFBNUUsVUFBQSxFQUFBLElBQUFjLFVBQUFvRDtBQUFBbEUsVUFBQSxFQUFBLElBQUFvRTtNQUFBLE9BQUE7QUFBQUEsY0FBQXBFLEVBQUEsRUFBQTtNQUFBO0FBQUEsYUFORm9FO0lBTUU7SUFBQSxLQUlELHFCQUFtQjtBQUFBLFVBQUFIO0FBQUEsVUFBQWpFLEVBQUEsRUFBQSxNQUFBVyx1QkFBQUMsSUFBQSwyQkFBQSxHQUFBO0FBSVJxRCxhQUFBQSxNQUFNbEQsYUFBYTtVQUFBRixNQUFRO1VBQU13RCxZQUFjO1FBQVMsQ0FBQztBQUFDckUsVUFBQSxFQUFBLElBQUFpRTtNQUFBLE9BQUE7QUFBQUEsYUFBQWpFLEVBQUEsRUFBQTtNQUFBO0FBQUEsVUFBQWdFO0FBQUEsVUFBQWhFLEVBQUEsRUFBQSxNQUFBRSxjQUFBRixFQUFBLEVBQUEsTUFBQWMsVUFBQXFELGFBQUE7QUFGdEVILGNBQUEsNENBQUMsc0JBQ2MsYUFBQWxELFVBQVNxRCxhQUNaLFVBQUFGLElBQ0UvRCxZQUFVO0FBQ3RCRixVQUFBLEVBQUEsSUFBQUU7QUFBQUYsVUFBQSxFQUFBLElBQUFjLFVBQUFxRDtBQUFBbkUsVUFBQSxFQUFBLElBQUFnRTtNQUFBLE9BQUE7QUFBQUEsY0FBQWhFLEVBQUEsRUFBQTtNQUFBO0FBQUEsYUFKRmdFO0lBSUU7RUFFUjtBQUFDO0FBdk5JLFNBQUFuQyxRQUFBZ0QsR0FBQUMsR0FBQTtBQUFBLFNBbUJpQkQsRUFBQzFCLEtBQUs0QixjQUFlRCxFQUFDM0IsSUFBSztBQUFDO0FBbkI3QyxTQUFBeEIsUUFBQWUsUUFBQTtBQUFBLFNBa0JtQkEsT0FBTVMsU0FBVTtBQUFLO0FBbEJ4QyxTQUFBNUMsUUFBQXlFLEtBQUE7QUFBQSxTQUVxQ0MsSUFBQzNFO0FBQWlCO0FBRnZELFNBQUFELE9BQUE0RSxHQUFBO0FBQUEsU0FDd0JBLEVBQUM5RTtBQUFJOzs7O0FBL0JwQztBQUVBO0FBT0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3BCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7OztBQ0dBLFNBQUErRSxVQUFBQyxJQUFBO0FBQUEsUUFBQUMsSUFBQUMsRUFBQSxDQUFBO0FBQW1CLFFBQUE7SUFBQUM7SUFBQUM7SUFBQUM7RUFBQSxJQUFBTDtBQVNqQixRQUFBTSxhQUFtQkMsWUFBWUMsTUFBa0I7QUFDakQsUUFBQUMsa0JBQXdCQyxvQkFBb0I7QUFDNUMsUUFBQUMsU0FBZUMsT0FBTyxLQUFLO0FBQUMsTUFBQUM7QUFBQSxNQUFBQztBQUFBLE1BQUFiLEVBQUEsQ0FBQSxNQUFBRSxVQUFBRixFQUFBLENBQUEsTUFBQUssY0FBQUwsRUFBQSxDQUFBLE1BQUFJLGNBQUFKLEVBQUEsQ0FBQSxNQUFBRyxVQUFBSCxFQUFBLENBQUEsTUFBQVEsaUJBQUE7QUFFbEJJLFNBQUFBLE1BQUE7QUFDUixVQUFJRixPQUFNSSxTQUFRO0FBQUE7TUFBQTtBQUNsQkosYUFBTUksVUFBVztBQUVqQixZQUFBQyxhQUFtQmIsV0FBVztBQUM5QixZQUFBYyxVQUFnQlgsV0FBVVksT0FBUUMsT0FBcUI7QUFDdkQsWUFBQUMsV0FDRWhCLFdBQVcsUUFDUGEsUUFBT0MsT0FBUUcsU0FDYkwsYUFBYU0sSUFBQ0MsU0FBVSxhQUFhRCxJQUFDQyxTQUFVLFVBRWIsSUFBckNOLFFBQU9DLE9BQVFNLFNBQUtGLElBQUNHLFNBQVVyQixNQUFNO0FBRTNDLFVBQUlnQixTQUFRTSxXQUFZLEdBQUM7QUFDdkJyQixtQkFDRUQsV0FBVyxRQUFYLCtCQUNtQ1ksYUFBQSxZQUFBLFVBQW1DLEtBRHRFLGVBRW1CWixNQUFNLGFBQzNCO0FBQUM7TUFBQTtBQUlILGlCQUFLdUIsT0FBV1AsVUFBUTtBQUNqQlgsd0JBQWdCbUIsSUFBQ0gsSUFBSztNQUFDO0FBRzlCcEIsaUJBQ0VELFdBQVcsUUFBWCxHQUNPWSxhQUFBLFlBQUEsVUFBbUMsSUFBSUksU0FBUU0sTUFBTyxtQkFEN0QsZUFFbUJ0QixNQUFNLEtBQUtZLGFBQUEsWUFBQSxVQUFtQyxFQUNuRTtJQUFDO0FBQ0FGLFNBQUEsQ0FBQ1gsUUFBUUMsUUFBUUUsWUFBWUcsaUJBQWlCSixVQUFVO0FBQUNKLE1BQUEsQ0FBQSxJQUFBRTtBQUFBRixNQUFBLENBQUEsSUFBQUs7QUFBQUwsTUFBQSxDQUFBLElBQUFJO0FBQUFKLE1BQUEsQ0FBQSxJQUFBRztBQUFBSCxNQUFBLENBQUEsSUFBQVE7QUFBQVIsTUFBQSxDQUFBLElBQUFZO0FBQUFaLE1BQUEsQ0FBQSxJQUFBYTtFQUFBLE9BQUE7QUFBQUQsU0FBQVosRUFBQSxDQUFBO0FBQUFhLFNBQUFiLEVBQUEsQ0FBQTtFQUFBO0FBL0I1RDRCLFlBQVVoQixJQStCUEMsRUFBeUQ7QUFBQyxTQUV0RDtBQUFJO0FBOUNiLFNBQUFLLFFBQUFHLElBQUE7QUFBQSxTQWtCMkNBLEdBQUNHLFNBQVU7QUFBSztBQWxCM0QsU0FBQWpCLE9BQUFvQixHQUFBO0FBQUEsU0FTc0NBLEVBQUNFLElBQUliO0FBQVE7QUF3Q25ELGVBQXNCYyxLQUNwQkMsUUFDQUMsVUFDQUMsTUFDMEI7QUFDMUIsTUFBSUEsTUFBTTtBQUNSLFVBQU1DLFFBQVFELEtBQUtFLEtBQUssRUFBRUMsTUFBTSxLQUFLO0FBR3JDLFFBQUlGLE1BQU0sQ0FBQyxNQUFNLGVBQWU7QUFDOUIsYUFBTyw0Q0FBQyxlQUFZLFlBQVlILFFBQU87SUFDekM7QUFFQSxRQUFJRyxNQUFNLENBQUMsTUFBTSxlQUFlQSxNQUFNLENBQUMsR0FBRztBQUN4QyxhQUNFLDRDQUFDLGdCQUNDLFlBQVlBLE1BQU1HLE1BQU0sQ0FBQyxFQUFFQyxLQUFLLEdBQUcsR0FDbkMsWUFBWVAsUUFBTztJQUd6QjtBQUVBLFFBQUlHLE1BQU0sQ0FBQyxNQUFNLFlBQVlBLE1BQU0sQ0FBQyxNQUFNLFdBQVc7QUFDbkQsYUFDRSw0Q0FBQyxhQUNDLFFBQVFBLE1BQU0sQ0FBQyxHQUNmLFFBQVFBLE1BQU1ULFNBQVMsSUFBSVMsTUFBTUcsTUFBTSxDQUFDLEVBQUVDLEtBQUssR0FBRyxJQUFJLE9BQ3RELFlBQVlQLFFBQU87SUFHekI7RUFDRjtBQUdBLE1BQUksT0FBc0I7QUFDeEIsV0FDRSw0Q0FBQyxrQkFDQyxZQUFZQSxRQUNaLE1BQUssVUFDTCx3QkFBc0IsTUFBQTtFQUc1QjtBQUVBLFNBQU8sNENBQUMsZUFBWSxZQUFZQSxRQUFPO0FBQ3pDOzs7O0FBeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OyIsCiAgIm5hbWVzIjogWyJNQ1BBZ2VudFNlcnZlck1lbnUiLCAiYWdlbnRTZXJ2ZXIiLCAib25DYW5jZWwiLCAib25Db21wbGV0ZSIsICJ0aGVtZSIsICJ1c2VUaGVtZSIsICJpc0F1dGhlbnRpY2F0aW5nIiwgInNldElzQXV0aGVudGljYXRpbmciLCAidXNlU3RhdGUiLCAiZXJyb3IiLCAic2V0RXJyb3IiLCAiYXV0aG9yaXphdGlvblVybCIsICJzZXRBdXRob3JpemF0aW9uVXJsIiwgImF1dGhBYm9ydENvbnRyb2xsZXJSZWYiLCAidXNlUmVmIiwgInVzZUVmZmVjdCIsICJjdXJyZW50IiwgImFib3J0IiwgImhhbmRsZUVzY0NhbmNlbCIsICJ1c2VDYWxsYmFjayIsICJ1c2VLZXliaW5kaW5nIiwgImNvbnRleHQiLCAiaXNBY3RpdmUiLCAiaGFuZGxlQXV0aGVudGljYXRlIiwgIm5lZWRzQXV0aCIsICJ1cmwiLCAiY29udHJvbGxlciIsICJBYm9ydENvbnRyb2xsZXIiLCAidGVtcENvbmZpZyIsICJ0eXBlIiwgInRyYW5zcG9ydCIsICJwZXJmb3JtTUNQT0F1dGhGbG93IiwgIm5hbWUiLCAic2lnbmFsIiwgImVyciIsICJFcnJvciIsICJBdXRoZW50aWNhdGlvbkNhbmNlbGxlZEVycm9yIiwgIm1lc3NhZ2UiLCAiY2FwaXRhbGl6ZWRTZXJ2ZXJOYW1lIiwgImNhcGl0YWxpemUiLCAiU3RyaW5nIiwgIm1lbnVPcHRpb25zIiwgInB1c2giLCAibGFiZWwiLCAiaXNBdXRoZW50aWNhdGVkIiwgInZhbHVlIiwgImV4aXRTdGF0ZSIsICJwZW5kaW5nIiwgImtleU5hbWUiLCAiY29tbWFuZCIsICJzb3VyY2VBZ2VudHMiLCAiam9pbiIsICJjb2xvciIsICJmaWd1cmVzIiwgInJhZGlvT2ZmIiwgInRpY2siLCAidHJpYW5nbGVVcE91dGxpbmUiLCAiZ2V0U2NvcGVIZWFkaW5nIiwgInNjb3BlIiwgImxhYmVsIiwgInBhdGgiLCAiZGVzY3JpYmVNY3BDb25maWdGaWxlUGF0aCIsICJncm91cFNlcnZlcnNCeVNjb3BlIiwgInNlcnZlckxpc3QiLCAiZ3JvdXBzIiwgIk1hcCIsICJzZXJ2ZXIiLCAiaGFzIiwgInNldCIsICJnZXQiLCAicHVzaCIsICJncm91cFNlcnZlcnMiLCAic29ydCIsICJhIiwgImIiLCAibmFtZSIsICJsb2NhbGVDb21wYXJlIiwgIk1DUExpc3RQYW5lbCIsICJ0MCIsICIkIiwgIl9jIiwgInNlcnZlcnMiLCAiYWdlbnRTZXJ2ZXJzIiwgInQxIiwgIm9uU2VsZWN0U2VydmVyIiwgIm9uU2VsZWN0QWdlbnRTZXJ2ZXIiLCAib25Db21wbGV0ZSIsICJ0MiIsICJ1bmRlZmluZWQiLCAidGhlbWUiLCAidXNlVGhlbWUiLCAic2VsZWN0ZWRJbmRleCIsICJzZXRTZWxlY3RlZEluZGV4IiwgInVzZVN0YXRlIiwgInQzIiwgInJlZ3VsYXJTZXJ2ZXJzIiwgImZpbHRlciIsICJfdGVtcCIsICJzZXJ2ZXJzQnlTY29wZSIsICJ0NCIsICJfdGVtcDIiLCAiX3RlbXAzIiwgImNsYXVkZUFpU2VydmVycyIsICJ0NSIsICJfdGVtcDQiLCAiZHluYW1pY1NlcnZlcnMiLCAidDYiLCAiU3ltYm9sIiwgImZvciIsICJkeW5hbWljSGVhZGluZyIsICJpdGVtcyIsICJTQ09QRV9PUkRFUiIsICJzY29wZVNlcnZlcnMiLCAidHlwZSIsICJzZXJ2ZXJfMCIsICJhZ2VudFNlcnZlciIsICJzZXJ2ZXJfMSIsICJzZWxlY3RhYmxlSXRlbXMiLCAidDciLCAiZGlzcGxheSIsICJoYW5kbGVDYW5jZWwiLCAidDgiLCAiaXRlbSIsICJoYW5kbGVTZWxlY3QiLCAidDEwIiwgInQ5IiwgInByZXYiLCAibGVuZ3RoIiwgInByZXZfMCIsICJ0MTEiLCAidDEyIiwgImNvbnRleHQiLCAidXNlS2V5YmluZGluZ3MiLCAidDEzIiwgInNlcnZlcl8yIiwgImZpbmRJbmRleCIsICJpdGVtXzAiLCAiZ2V0U2VydmVySW5kZXgiLCAidDE0IiwgImFnZW50U2VydmVyXzAiLCAiaXRlbV8xIiwgImdldEFnZW50U2VydmVySW5kZXgiLCAidDE1IiwgImlzRGVidWdNb2RlIiwgImRlYnVnTW9kZSIsICJ0MTYiLCAic29tZSIsICJfdGVtcDUiLCAiaGFzRmFpbGVkQ2xpZW50cyIsICJ0MTciLCAic2VydmVyXzMiLCAiaW5kZXgiLCAiaXNTZWxlY3RlZCIsICJzdGF0dXNJY29uIiwgInN0YXR1c1RleHQiLCAiY2xpZW50IiwgImNvbG9yIiwgImZpZ3VyZXMiLCAicmFkaW9PZmYiLCAidGljayIsICJyZWNvbm5lY3RBdHRlbXB0IiwgIm1heFJlY29ubmVjdEF0dGVtcHRzIiwgInRyaWFuZ2xlVXBPdXRsaW5lIiwgImNyb3NzIiwgInBvaW50ZXIiLCAicmVuZGVyU2VydmVySXRlbSIsICJ0MTgiLCAiYWdlbnRTZXJ2ZXJfMSIsICJpbmRleF8wIiwgImlzU2VsZWN0ZWRfMCIsICJzdGF0dXNJY29uXzAiLCAibmVlZHNBdXRoIiwgInN0YXR1c1RleHRfMCIsICJyZW5kZXJBZ2VudFNlcnZlckl0ZW0iLCAidG90YWxTZXJ2ZXJzIiwgInQxOSIsICJ0MjAiLCAicGx1cmFsIiwgInQyMSIsICJ0MjIiLCAibWFwIiwgInNjb3BlXzAiLCAic2NvcGVTZXJ2ZXJzXzAiLCAiaGVhZGluZyIsICJzZXJ2ZXJfNCIsICJ0MjMiLCAic2VydmVyXzUiLCAidDI0IiwgIlNldCIsICJmbGF0TWFwIiwgIl90ZW1wNiIsICJhZ2VudE5hbWUiLCAic18zIiwgInMiLCAic291cmNlQWdlbnRzIiwgImluY2x1ZGVzIiwgImFnZW50U2VydmVyXzIiLCAidDI1IiwgInNlcnZlcl82IiwgInQyNiIsICJ0MjciLCAidDI4IiwgInQyOSIsICJ0MzAiLCAidDMxIiwgInQzMiIsICJzXzIiLCAic18xIiwgImFfMCIsICJiXzAiLCAic18wIiwgImNvbmZpZyIsICJNQ1BSZWNvbm5lY3QiLCAidDAiLCAiJCIsICJfYyIsICJzZXJ2ZXJOYW1lIiwgIm9uQ29tcGxldGUiLCAidGhlbWUiLCAidXNlVGhlbWUiLCAic3RvcmUiLCAidXNlQXBwU3RhdGVTdG9yZSIsICJyZWNvbm5lY3RNY3BTZXJ2ZXIiLCAidXNlTWNwUmVjb25uZWN0IiwgImlzUmVjb25uZWN0aW5nIiwgInNldElzUmVjb25uZWN0aW5nIiwgInVzZVN0YXRlIiwgImVycm9yIiwgInNldEVycm9yIiwgInQxIiwgInQyIiwgImF0dGVtcHRSZWNvbm5lY3QiLCAic2VydmVyIiwgImdldFN0YXRlIiwgIm1jcCIsICJjbGllbnRzIiwgImZpbmQiLCAiYyIsICJuYW1lIiwgInJlc3VsdCIsICJiYjQzIiwgImNsaWVudCIsICJ0eXBlIiwgInQzIiwgImVyciIsICJlcnJvck1lc3NhZ2UiLCAiRXJyb3IiLCAibWVzc2FnZSIsICJTdHJpbmciLCAidXNlRWZmZWN0IiwgInQ0IiwgIlN5bWJvbCIsICJmb3IiLCAidDUiLCAiY29sb3IiLCAiZmlndXJlcyIsICJjcm9zcyIsICJ0NiIsICJ0NyIsICJ0OCIsICJNQ1BTZXR0aW5ncyIsICJ0MCIsICIkIiwgIl9jIiwgIm9uQ29tcGxldGUiLCAibWNwIiwgInVzZUFwcFN0YXRlIiwgIl90ZW1wIiwgImFnZW50RGVmaW5pdGlvbnMiLCAiX3RlbXAyIiwgIm1jcENsaWVudHMiLCAiY2xpZW50cyIsICJ0MSIsICJTeW1ib2wiLCAiZm9yIiwgInR5cGUiLCAidmlld1N0YXRlIiwgInNldFZpZXdTdGF0ZSIsICJSZWFjdCIsICJ1c2VTdGF0ZSIsICJ0MiIsICJzZXJ2ZXJzIiwgInNldFNlcnZlcnMiLCAidDMiLCAiYWxsQWdlbnRzIiwgImV4dHJhY3RBZ2VudE1jcFNlcnZlcnMiLCAiYWdlbnRNY3BTZXJ2ZXJzIiwgInQ0IiwgImZpbHRlciIsICJfdGVtcDMiLCAic29ydCIsICJfdGVtcDQiLCAiZmlsdGVyZWRDbGllbnRzIiwgInQ1IiwgInQ2IiwgInRvb2xzIiwgImNhbmNlbGxlZCIsICJwcmVwYXJlU2VydmVycyIsICJzZXJ2ZXJJbmZvcyIsICJQcm9taXNlIiwgImFsbCIsICJtYXAiLCAiY2xpZW50XzAiLCAic2NvcGUiLCAiY2xpZW50IiwgImNvbmZpZyIsICJpc1NTRSIsICJpc0hUVFAiLCAiaXNDbGF1ZGVBSVByb3h5IiwgImlzQXV0aGVudGljYXRlZCIsICJ1bmRlZmluZWQiLCAiYXV0aFByb3ZpZGVyIiwgIkNsYXVkZUF1dGhQcm92aWRlciIsICJuYW1lIiwgInRva2VucyIsICJoYXNTZXNzaW9uQXV0aCIsICJnZXRTZXNzaW9uSW5ncmVzc0F1dGhUb2tlbiIsICJoYXNUb29sc0FuZENvbm5lY3RlZCIsICJmaWx0ZXJUb29sc0J5U2VydmVyIiwgImxlbmd0aCIsICJCb29sZWFuIiwgImJhc2VJbmZvIiwgInRyYW5zcG9ydCIsICJ1c2VFZmZlY3QiLCAidDciLCAidDgiLCAidDEwIiwgInQ5IiwgInNlcnZlciIsICJhZ2VudFNlcnZlciIsICJ0MTEiLCAiZGVmYXVsdFRhYiIsICJzZXJ2ZXJUb29sc18wIiwgInQxMiIsICJzZXJ2ZXJUb29scyIsICJfIiwgImluZGV4IiwgInRvb2xJbmRleCIsICJ0b29sIiwgImEiLCAiYiIsICJsb2NhbGVDb21wYXJlIiwgInNfMCIsICJzIiwgIk1DUFRvZ2dsZSIsICJ0MCIsICIkIiwgIl9jIiwgImFjdGlvbiIsICJ0YXJnZXQiLCAib25Db21wbGV0ZSIsICJtY3BDbGllbnRzIiwgInVzZUFwcFN0YXRlIiwgIl90ZW1wIiwgInRvZ2dsZU1jcFNlcnZlciIsICJ1c2VNY3BUb2dnbGVFbmFibGVkIiwgImRpZFJ1biIsICJ1c2VSZWYiLCAidDEiLCAidDIiLCAiY3VycmVudCIsICJpc0VuYWJsaW5nIiwgImNsaWVudHMiLCAiZmlsdGVyIiwgIl90ZW1wMiIsICJ0b1RvZ2dsZSIsICJjXzAiLCAiYyIsICJ0eXBlIiwgImNfMSIsICJuYW1lIiwgImxlbmd0aCIsICJzXzAiLCAicyIsICJ1c2VFZmZlY3QiLCAibWNwIiwgImNhbGwiLCAib25Eb25lIiwgIl9jb250ZXh0IiwgImFyZ3MiLCAicGFydHMiLCAidHJpbSIsICJzcGxpdCIsICJzbGljZSIsICJqb2luIl0KfQo=
