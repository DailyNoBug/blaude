#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  cliError,
  cliOk
} from "./chunk-IYQS7MD5.mjs";
import {
  AppStateProvider,
  KeybindingSetup,
  SelectMulti,
  addMcpConfig,
  clearMcpClientConfig,
  clearServerTokensFromLocalStorage,
  connectToServer,
  describeMcpConfigFilePath,
  ensureConfigScope,
  getAllMcpConfigs,
  getMcpClientConfig,
  getMcpConfigByName,
  getMcpConfigsByScope,
  getMcpServerConnectionBatchSize,
  getScopeLabel,
  gracefulShutdown,
  init_AppState,
  init_KeybindingProviderSetup,
  init_SelectMulti,
  init_auth2 as init_auth,
  init_client,
  init_config2,
  init_gracefulShutdown,
  init_utils,
  readClientSecret,
  removeMcpConfig,
  saveMcpClientSecret
} from "./chunk-5INIV6TQ.mjs";
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
} from "./chunk-UPQJMBLU.mjs";
import "./chunk-JWBPLKI2.mjs";
import "./chunk-B5LIYBEU.mjs";
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
import "./chunk-X6KULBXG.mjs";
import "./chunk-7RY6L7JT.mjs";
import "./chunk-EL6ZMCGB.mjs";
import "./chunk-ALBMKMIQ.mjs";
import "./chunk-XTFZIHQR.mjs";
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
import {
  ThemedBox_default,
  ThemedText,
  c,
  color,
  init_ink,
  init_react_compiler_runtime,
  render,
  useTheme
} from "./chunk-ZFJCSCYD.mjs";
import {
  init_react,
  react_default,
  useEffect,
  useState
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import {
  init_p_map,
  pMap
} from "./chunk-OYNA6LYH.mjs";
import "./chunk-H3V45RZC.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  getCurrentProjectConfig,
  getGlobalConfig,
  init_config,
  init_stringUtils,
  plural,
  saveCurrentProjectConfig
} from "./chunk-JQ55XPLZ.mjs";
import {
  init_json,
  safeParseJSON
} from "./chunk-LNPDZCDV.mjs";
import "./chunk-5EA44JDA.mjs";
import "./chunk-O2ZQRVJU.mjs";
import "./chunk-ZPEBVZEB.mjs";
import "./chunk-DQ5JTCOA.mjs";
import {
  getPlatform,
  init_platform
} from "./chunk-HGPSKCV5.mjs";
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
import {
  init_analytics,
  logEvent
} from "./chunk-M5NTYAY2.mjs";
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
  init_errors,
  isFsInaccessible
} from "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import "./chunk-OU3SZVVB.mjs";
import "./chunk-NGSB34MB.mjs";
import {
  init_process,
  writeToStdout
} from "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import "./chunk-O5PZ3G6I.mjs";

// src/cli/handlers/mcp.tsx
init_p_map();
init_react();
import { stat } from "fs/promises";
import { cwd } from "process";

// src/components/MCPServerDesktopImportDialog.tsx
init_react_compiler_runtime();
init_react();
init_gracefulShutdown();
init_process();
init_ink();
init_config2();
init_stringUtils();
init_ConfigurableShortcutHint();
init_SelectMulti();
init_Byline();
init_Dialog();
init_KeyboardShortcutHint();
function MCPServerDesktopImportDialog(t0) {
  const $ = c(36);
  const {
    servers,
    scope,
    onDone
  } = t0;
  let t1;
  if ($[0] !== servers) {
    t1 = Object.keys(servers);
    $[0] = servers;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const serverNames = t1;
  let t2;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = {};
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  const [existingServers, setExistingServers] = useState(t2);
  let t3;
  let t4;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = () => {
      getAllMcpConfigs().then((t52) => {
        const {
          servers: servers_0
        } = t52;
        return setExistingServers(servers_0);
      });
    };
    t4 = [];
    $[3] = t3;
    $[4] = t4;
  } else {
    t3 = $[3];
    t4 = $[4];
  }
  useEffect(t3, t4);
  let t5;
  if ($[5] !== existingServers || $[6] !== serverNames) {
    t5 = serverNames.filter((name) => existingServers[name] !== void 0);
    $[5] = existingServers;
    $[6] = serverNames;
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  const collisions = t5;
  const onSubmit = async function onSubmit2(selectedServers) {
    let importedCount = 0;
    for (const serverName of selectedServers) {
      const serverConfig = servers[serverName];
      if (serverConfig) {
        let finalName = serverName;
        if (existingServers[finalName] !== void 0) {
          let counter = 1;
          while (existingServers[`${serverName}_${counter}`] !== void 0) {
            counter++;
          }
          finalName = `${serverName}_${counter}`;
        }
        await addMcpConfig(finalName, serverConfig, scope);
        importedCount++;
      }
    }
    done(importedCount);
  };
  const [theme] = useTheme();
  let t6;
  if ($[8] !== onDone || $[9] !== scope || $[10] !== theme) {
    t6 = (importedCount_0) => {
      if (importedCount_0 > 0) {
        writeToStdout(`
${color("success", theme)(`Successfully imported ${importedCount_0} MCP ${plural(importedCount_0, "server")} to ${scope} config.`)}
`);
      } else {
        writeToStdout("\nNo servers were imported.");
      }
      onDone();
      gracefulShutdown();
    };
    $[8] = onDone;
    $[9] = scope;
    $[10] = theme;
    $[11] = t6;
  } else {
    t6 = $[11];
  }
  const done = t6;
  let t7;
  if ($[12] !== done) {
    t7 = () => {
      done(0);
    };
    $[12] = done;
    $[13] = t7;
  } else {
    t7 = $[13];
  }
  done;
  const handleEscCancel = t7;
  const t8 = serverNames.length;
  let t9;
  if ($[14] !== serverNames.length) {
    t9 = plural(serverNames.length, "server");
    $[14] = serverNames.length;
    $[15] = t9;
  } else {
    t9 = $[15];
  }
  const t10 = `Found ${t8} MCP ${t9} in Blaude Desktop.`;
  let t11;
  if ($[16] !== collisions.length) {
    t11 = collisions.length > 0 && /* @__PURE__ */ react_default.createElement(ThemedText, { color: "warning" }, "Note: Some servers already exist with the same name. If selected, they will be imported with a numbered suffix.");
    $[16] = collisions.length;
    $[17] = t11;
  } else {
    t11 = $[17];
  }
  let t12;
  if ($[18] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t12 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "Please select the servers you want to import:");
    $[18] = t12;
  } else {
    t12 = $[18];
  }
  let t13;
  let t14;
  if ($[19] !== collisions || $[20] !== serverNames) {
    t13 = serverNames.map((server) => ({
      label: `${server}${collisions.includes(server) ? " (already exists)" : ""}`,
      value: server
    }));
    t14 = serverNames.filter((name_0) => !collisions.includes(name_0));
    $[19] = collisions;
    $[20] = serverNames;
    $[21] = t13;
    $[22] = t14;
  } else {
    t13 = $[21];
    t14 = $[22];
  }
  let t15;
  if ($[23] !== handleEscCancel || $[24] !== onSubmit || $[25] !== t13 || $[26] !== t14) {
    t15 = /* @__PURE__ */ react_default.createElement(SelectMulti, { options: t13, defaultValue: t14, onSubmit, onCancel: handleEscCancel, hideIndexes: true });
    $[23] = handleEscCancel;
    $[24] = onSubmit;
    $[25] = t13;
    $[26] = t14;
    $[27] = t15;
  } else {
    t15 = $[27];
  }
  let t16;
  if ($[28] !== handleEscCancel || $[29] !== t10 || $[30] !== t11 || $[31] !== t15) {
    t16 = /* @__PURE__ */ react_default.createElement(Dialog, { title: "Import MCP Servers from Blaude Desktop", subtitle: t10, color: "success", onCancel: handleEscCancel, hideInputGuide: true }, t11, t12, t15);
    $[28] = handleEscCancel;
    $[29] = t10;
    $[30] = t11;
    $[31] = t15;
    $[32] = t16;
  } else {
    t16 = $[32];
  }
  let t17;
  if ($[33] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t17 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { paddingX: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true, italic: true }, /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Space", action: "select" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "confirm" }), /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "cancel" }))));
    $[33] = t17;
  } else {
    t17 = $[33];
  }
  let t18;
  if ($[34] !== t16) {
    t18 = /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, t16, t17);
    $[34] = t16;
    $[35] = t18;
  } else {
    t18 = $[35];
  }
  return t18;
}

// src/cli/handlers/mcp.tsx
init_ink();
init_KeybindingProviderSetup();
init_analytics();
init_auth();
init_client();
init_config2();
init_utils();
init_AppState();
init_config();
init_errors();
init_gracefulShutdown();
init_json();
init_platform();
async function checkMcpServerHealth(name, server) {
  try {
    const result = await connectToServer(name, server);
    if (result.type === "connected") {
      return "\u2713 Connected";
    } else if (result.type === "needs-auth") {
      return "! Needs authentication";
    } else {
      return "\u2717 Failed to connect";
    }
  } catch (_error) {
    return "\u2717 Connection error";
  }
}
async function mcpServeHandler({
  debug,
  verbose
}) {
  const providedCwd = cwd();
  logEvent("tengu_mcp_start", {});
  try {
    await stat(providedCwd);
  } catch (error) {
    if (isFsInaccessible(error)) {
      cliError(`Error: Directory ${providedCwd} does not exist`);
    }
    throw error;
  }
  try {
    const {
      setup
    } = await import("./setup-T7UYPHNU.mjs");
    await setup(providedCwd, "default", false, false, void 0, false);
    const {
      startMCPServer
    } = await import("./mcp-DHFTZDWU.mjs");
    await startMCPServer(providedCwd, debug ?? false, verbose ?? false);
  } catch (error) {
    cliError(`Error: Failed to start MCP server: ${error}`);
  }
}
async function mcpRemoveHandler(name, options) {
  const serverBeforeRemoval = getMcpConfigByName(name);
  const cleanupSecureStorage = () => {
    if (serverBeforeRemoval && (serverBeforeRemoval.type === "sse" || serverBeforeRemoval.type === "http")) {
      clearServerTokensFromLocalStorage(name, serverBeforeRemoval);
      clearMcpClientConfig(name, serverBeforeRemoval);
    }
  };
  try {
    if (options.scope) {
      const scope = ensureConfigScope(options.scope);
      logEvent("tengu_mcp_delete", {
        name,
        scope
      });
      await removeMcpConfig(name, scope);
      cleanupSecureStorage();
      process.stdout.write(`Removed MCP server ${name} from ${scope} config
`);
      cliOk(`File modified: ${describeMcpConfigFilePath(scope)}`);
    }
    const projectConfig = getCurrentProjectConfig();
    const globalConfig = getGlobalConfig();
    const {
      servers: projectServers
    } = getMcpConfigsByScope("project");
    const mcpJsonExists = !!projectServers[name];
    const scopes = [];
    if (projectConfig.mcpServers?.[name]) scopes.push("local");
    if (mcpJsonExists) scopes.push("project");
    if (globalConfig.mcpServers?.[name]) scopes.push("user");
    if (scopes.length === 0) {
      cliError(`No MCP server found with name: "${name}"`);
    } else if (scopes.length === 1) {
      const scope = scopes[0];
      logEvent("tengu_mcp_delete", {
        name,
        scope
      });
      await removeMcpConfig(name, scope);
      cleanupSecureStorage();
      process.stdout.write(`Removed MCP server "${name}" from ${scope} config
`);
      cliOk(`File modified: ${describeMcpConfigFilePath(scope)}`);
    } else {
      process.stderr.write(`MCP server "${name}" exists in multiple scopes:
`);
      scopes.forEach((scope) => {
        process.stderr.write(`  - ${getScopeLabel(scope)} (${describeMcpConfigFilePath(scope)})
`);
      });
      process.stderr.write("\nTo remove from a specific scope, use:\n");
      scopes.forEach((scope) => {
        process.stderr.write(`  blaude mcp remove "${name}" -s ${scope}
`);
      });
      cliError();
    }
  } catch (error) {
    cliError(error.message);
  }
}
async function mcpListHandler() {
  logEvent("tengu_mcp_list", {});
  const {
    servers: configs
  } = await getAllMcpConfigs();
  if (Object.keys(configs).length === 0) {
    console.log("No MCP servers configured. Use `blaude mcp add` to add a server.");
  } else {
    console.log("Checking MCP server health...\n");
    const entries = Object.entries(configs);
    const results = await pMap(entries, async ([name, server]) => ({
      name,
      server,
      status: await checkMcpServerHealth(name, server)
    }), {
      concurrency: getMcpServerConnectionBatchSize()
    });
    for (const {
      name,
      server,
      status
    } of results) {
      if (server.type === "sse") {
        console.log(`${name}: ${server.url} (SSE) - ${status}`);
      } else if (server.type === "http") {
        console.log(`${name}: ${server.url} (HTTP) - ${status}`);
      } else if (server.type === "claudeai-proxy") {
        console.log(`${name}: ${server.url} - ${status}`);
      } else if (!server.type || server.type === "stdio") {
        const args = Array.isArray(server.args) ? server.args : [];
        console.log(`${name}: ${server.command} ${args.join(" ")} - ${status}`);
      }
    }
  }
  await gracefulShutdown(0);
}
async function mcpGetHandler(name) {
  logEvent("tengu_mcp_get", {
    name
  });
  const server = getMcpConfigByName(name);
  if (!server) {
    cliError(`No MCP server found with name: ${name}`);
  }
  console.log(`${name}:`);
  console.log(`  Scope: ${getScopeLabel(server.scope)}`);
  const status = await checkMcpServerHealth(name, server);
  console.log(`  Status: ${status}`);
  if (server.type === "sse") {
    console.log(`  Type: sse`);
    console.log(`  URL: ${server.url}`);
    if (server.headers) {
      console.log("  Headers:");
      for (const [key, value] of Object.entries(server.headers)) {
        console.log(`    ${key}: ${value}`);
      }
    }
    if (server.oauth?.clientId || server.oauth?.callbackPort) {
      const parts = [];
      if (server.oauth.clientId) {
        parts.push("client_id configured");
        const clientConfig = getMcpClientConfig(name, server);
        if (clientConfig?.clientSecret) parts.push("client_secret configured");
      }
      if (server.oauth.callbackPort) parts.push(`callback_port ${server.oauth.callbackPort}`);
      console.log(`  OAuth: ${parts.join(", ")}`);
    }
  } else if (server.type === "http") {
    console.log(`  Type: http`);
    console.log(`  URL: ${server.url}`);
    if (server.headers) {
      console.log("  Headers:");
      for (const [key, value] of Object.entries(server.headers)) {
        console.log(`    ${key}: ${value}`);
      }
    }
    if (server.oauth?.clientId || server.oauth?.callbackPort) {
      const parts = [];
      if (server.oauth.clientId) {
        parts.push("client_id configured");
        const clientConfig = getMcpClientConfig(name, server);
        if (clientConfig?.clientSecret) parts.push("client_secret configured");
      }
      if (server.oauth.callbackPort) parts.push(`callback_port ${server.oauth.callbackPort}`);
      console.log(`  OAuth: ${parts.join(", ")}`);
    }
  } else if (server.type === "stdio") {
    console.log(`  Type: stdio`);
    console.log(`  Command: ${server.command}`);
    const args = Array.isArray(server.args) ? server.args : [];
    console.log(`  Args: ${args.join(" ")}`);
    if (server.env) {
      console.log("  Environment:");
      for (const [key, value] of Object.entries(server.env)) {
        console.log(`    ${key}=${value}`);
      }
    }
  }
  console.log(`
To remove this server, run: blaude mcp remove "${name}" -s ${server.scope}`);
  await gracefulShutdown(0);
}
async function mcpAddJsonHandler(name, json, options) {
  try {
    const scope = ensureConfigScope(options.scope);
    const parsedJson = safeParseJSON(json);
    const needsSecret = options.clientSecret && parsedJson && typeof parsedJson === "object" && "type" in parsedJson && (parsedJson.type === "sse" || parsedJson.type === "http") && "url" in parsedJson && typeof parsedJson.url === "string" && "oauth" in parsedJson && parsedJson.oauth && typeof parsedJson.oauth === "object" && "clientId" in parsedJson.oauth;
    const clientSecret = needsSecret ? await readClientSecret() : void 0;
    await addMcpConfig(name, parsedJson, scope);
    const transportType = parsedJson && typeof parsedJson === "object" && "type" in parsedJson ? String(parsedJson.type || "stdio") : "stdio";
    if (clientSecret && parsedJson && typeof parsedJson === "object" && "type" in parsedJson && (parsedJson.type === "sse" || parsedJson.type === "http") && "url" in parsedJson && typeof parsedJson.url === "string") {
      saveMcpClientSecret(name, {
        type: parsedJson.type,
        url: parsedJson.url
      }, clientSecret);
    }
    logEvent("tengu_mcp_add", {
      scope,
      source: "json",
      type: transportType
    });
    cliOk(`Added ${transportType} MCP server ${name} to ${scope} config`);
  } catch (error) {
    cliError(error.message);
  }
}
async function mcpAddFromDesktopHandler(options) {
  try {
    const scope = ensureConfigScope(options.scope);
    const platform = getPlatform();
    logEvent("tengu_mcp_add", {
      scope,
      platform,
      source: "desktop"
    });
    const {
      readClaudeDesktopMcpServers
    } = await import("./claudeDesktop-DZL35WXF.mjs");
    const servers = await readClaudeDesktopMcpServers();
    if (Object.keys(servers).length === 0) {
      cliOk("No MCP servers found in Blaude Desktop configuration or configuration file does not exist.");
    }
    const {
      unmount
    } = await render(/* @__PURE__ */ react_default.createElement(AppStateProvider, null, /* @__PURE__ */ react_default.createElement(KeybindingSetup, null, /* @__PURE__ */ react_default.createElement(MCPServerDesktopImportDialog, { servers, scope, onDone: () => {
      unmount();
    } }))), {
      exitOnCtrlC: true
    });
  } catch (error) {
    cliError(error.message);
  }
}
async function mcpResetChoicesHandler() {
  logEvent("tengu_mcp_reset_mcpjson_choices", {});
  saveCurrentProjectConfig((current) => ({
    ...current,
    enabledMcpjsonServers: [],
    disabledMcpjsonServers: [],
    enableAllProjectMcpServers: false
  }));
  cliOk("All project-scoped (.mcp.json) server approvals and rejections have been reset.\nYou will be prompted for approval next time you start Blaude.");
}
export {
  mcpAddFromDesktopHandler,
  mcpAddJsonHandler,
  mcpGetHandler,
  mcpListHandler,
  mcpRemoveHandler,
  mcpResetChoicesHandler,
  mcpServeHandler
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NsaS9oYW5kbGVycy9tY3AudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL01DUFNlcnZlckRlc2t0b3BJbXBvcnREaWFsb2cudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIE1DUCBzdWJjb21tYW5kIGhhbmRsZXJzIOKAlCBleHRyYWN0ZWQgZnJvbSBtYWluLnRzeCBmb3IgbGF6eSBsb2FkaW5nLlxuICogVGhlc2UgYXJlIGR5bmFtaWNhbGx5IGltcG9ydGVkIG9ubHkgd2hlbiB0aGUgY29ycmVzcG9uZGluZyBgY2xhdWRlIG1jcCAqYCBjb21tYW5kIHJ1bnMuXG4gKi9cblxuaW1wb3J0IHsgc3RhdCB9IGZyb20gJ2ZzL3Byb21pc2VzJ1xuaW1wb3J0IHBNYXAgZnJvbSAncC1tYXAnXG5pbXBvcnQgeyBjd2QgfSBmcm9tICdwcm9jZXNzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTUNQU2VydmVyRGVza3RvcEltcG9ydERpYWxvZyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTUNQU2VydmVyRGVza3RvcEltcG9ydERpYWxvZy5qcydcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7IEtleWJpbmRpbmdTZXR1cCB9IGZyb20gJy4uLy4uL2tleWJpbmRpbmdzL0tleWJpbmRpbmdQcm92aWRlclNldHVwLmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICBsb2dFdmVudCxcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHtcbiAgY2xlYXJNY3BDbGllbnRDb25maWcsXG4gIGNsZWFyU2VydmVyVG9rZW5zRnJvbUxvY2FsU3RvcmFnZSxcbiAgZ2V0TWNwQ2xpZW50Q29uZmlnLFxuICByZWFkQ2xpZW50U2VjcmV0LFxuICBzYXZlTWNwQ2xpZW50U2VjcmV0LFxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tY3AvYXV0aC5qcydcbmltcG9ydCB7XG4gIGNvbm5lY3RUb1NlcnZlcixcbiAgZ2V0TWNwU2VydmVyQ29ubmVjdGlvbkJhdGNoU2l6ZSxcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWNwL2NsaWVudC5qcydcbmltcG9ydCB7XG4gIGFkZE1jcENvbmZpZyxcbiAgZ2V0QWxsTWNwQ29uZmlncyxcbiAgZ2V0TWNwQ29uZmlnQnlOYW1lLFxuICBnZXRNY3BDb25maWdzQnlTY29wZSxcbiAgcmVtb3ZlTWNwQ29uZmlnLFxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tY3AvY29uZmlnLmpzJ1xuaW1wb3J0IHR5cGUge1xuICBDb25maWdTY29wZSxcbiAgU2NvcGVkTWNwU2VydmVyQ29uZmlnLFxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tY3AvdHlwZXMuanMnXG5pbXBvcnQge1xuICBkZXNjcmliZU1jcENvbmZpZ0ZpbGVQYXRoLFxuICBlbnN1cmVDb25maWdTY29wZSxcbiAgZ2V0U2NvcGVMYWJlbCxcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWNwL3V0aWxzLmpzJ1xuaW1wb3J0IHsgQXBwU3RhdGVQcm92aWRlciB9IGZyb20gJy4uLy4uL3N0YXRlL0FwcFN0YXRlLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0Q3VycmVudFByb2plY3RDb25maWcsXG4gIGdldEdsb2JhbENvbmZpZyxcbiAgc2F2ZUN1cnJlbnRQcm9qZWN0Q29uZmlnLFxufSBmcm9tICcuLi8uLi91dGlscy9jb25maWcuanMnXG5pbXBvcnQgeyBpc0ZzSW5hY2Nlc3NpYmxlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXJyb3JzLmpzJ1xuaW1wb3J0IHsgZ3JhY2VmdWxTaHV0ZG93biB9IGZyb20gJy4uLy4uL3V0aWxzL2dyYWNlZnVsU2h1dGRvd24uanMnXG5pbXBvcnQgeyBzYWZlUGFyc2VKU09OIH0gZnJvbSAnLi4vLi4vdXRpbHMvanNvbi5qcydcbmltcG9ydCB7IGdldFBsYXRmb3JtIH0gZnJvbSAnLi4vLi4vdXRpbHMvcGxhdGZvcm0uanMnXG5pbXBvcnQgeyBjbGlFcnJvciwgY2xpT2sgfSBmcm9tICcuLi9leGl0LmpzJ1xuXG5hc3luYyBmdW5jdGlvbiBjaGVja01jcFNlcnZlckhlYWx0aChcbiAgbmFtZTogc3RyaW5nLFxuICBzZXJ2ZXI6IFNjb3BlZE1jcFNlcnZlckNvbmZpZyxcbik6IFByb21pc2U8c3RyaW5nPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29ubmVjdFRvU2VydmVyKG5hbWUsIHNlcnZlcilcbiAgICBpZiAocmVzdWx0LnR5cGUgPT09ICdjb25uZWN0ZWQnKSB7XG4gICAgICByZXR1cm4gJ+KckyBDb25uZWN0ZWQnXG4gICAgfSBlbHNlIGlmIChyZXN1bHQudHlwZSA9PT0gJ25lZWRzLWF1dGgnKSB7XG4gICAgICByZXR1cm4gJyEgTmVlZHMgYXV0aGVudGljYXRpb24nXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAn4pyXIEZhaWxlZCB0byBjb25uZWN0J1xuICAgIH1cbiAgfSBjYXRjaCAoX2Vycm9yKSB7XG4gICAgcmV0dXJuICfinJcgQ29ubmVjdGlvbiBlcnJvcidcbiAgfVxufVxuXG4vLyBtY3Agc2VydmUgKGxpbmVzIDQ1MTLigJM0NTMyKVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1jcFNlcnZlSGFuZGxlcih7XG4gIGRlYnVnLFxuICB2ZXJib3NlLFxufToge1xuICBkZWJ1Zz86IGJvb2xlYW5cbiAgdmVyYm9zZT86IGJvb2xlYW5cbn0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgcHJvdmlkZWRDd2QgPSBjd2QoKVxuICBsb2dFdmVudCgndGVuZ3VfbWNwX3N0YXJ0Jywge30pXG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBzdGF0KHByb3ZpZGVkQ3dkKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChpc0ZzSW5hY2Nlc3NpYmxlKGVycm9yKSkge1xuICAgICAgY2xpRXJyb3IoYEVycm9yOiBEaXJlY3RvcnkgJHtwcm92aWRlZEN3ZH0gZG9lcyBub3QgZXhpc3RgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJvclxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB7IHNldHVwIH0gPSBhd2FpdCBpbXBvcnQoJy4uLy4uL3NldHVwLmpzJylcbiAgICBhd2FpdCBzZXR1cChwcm92aWRlZEN3ZCwgJ2RlZmF1bHQnLCBmYWxzZSwgZmFsc2UsIHVuZGVmaW5lZCwgZmFsc2UpXG4gICAgY29uc3QgeyBzdGFydE1DUFNlcnZlciB9ID0gYXdhaXQgaW1wb3J0KCcuLi8uLi9lbnRyeXBvaW50cy9tY3AuanMnKVxuICAgIGF3YWl0IHN0YXJ0TUNQU2VydmVyKHByb3ZpZGVkQ3dkLCBkZWJ1ZyA/PyBmYWxzZSwgdmVyYm9zZSA/PyBmYWxzZSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjbGlFcnJvcihgRXJyb3I6IEZhaWxlZCB0byBzdGFydCBNQ1Agc2VydmVyOiAke2Vycm9yfWApXG4gIH1cbn1cblxuLy8gbWNwIHJlbW92ZSAobGluZXMgNDU0NeKAkzQ2MzUpXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWNwUmVtb3ZlSGFuZGxlcihcbiAgbmFtZTogc3RyaW5nLFxuICBvcHRpb25zOiB7IHNjb3BlPzogc3RyaW5nIH0sXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgLy8gTG9vayB1cCBjb25maWcgYmVmb3JlIHJlbW92aW5nIHNvIHdlIGNhbiBjbGVhbiB1cCBzZWN1cmUgc3RvcmFnZVxuICBjb25zdCBzZXJ2ZXJCZWZvcmVSZW1vdmFsID0gZ2V0TWNwQ29uZmlnQnlOYW1lKG5hbWUpXG5cbiAgY29uc3QgY2xlYW51cFNlY3VyZVN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgc2VydmVyQmVmb3JlUmVtb3ZhbCAmJlxuICAgICAgKHNlcnZlckJlZm9yZVJlbW92YWwudHlwZSA9PT0gJ3NzZScgfHxcbiAgICAgICAgc2VydmVyQmVmb3JlUmVtb3ZhbC50eXBlID09PSAnaHR0cCcpXG4gICAgKSB7XG4gICAgICBjbGVhclNlcnZlclRva2Vuc0Zyb21Mb2NhbFN0b3JhZ2UobmFtZSwgc2VydmVyQmVmb3JlUmVtb3ZhbClcbiAgICAgIGNsZWFyTWNwQ2xpZW50Q29uZmlnKG5hbWUsIHNlcnZlckJlZm9yZVJlbW92YWwpXG4gICAgfVxuICB9XG5cbiAgdHJ5IHtcbiAgICBpZiAob3B0aW9ucy5zY29wZSkge1xuICAgICAgY29uc3Qgc2NvcGUgPSBlbnN1cmVDb25maWdTY29wZShvcHRpb25zLnNjb3BlKVxuICAgICAgbG9nRXZlbnQoJ3Rlbmd1X21jcF9kZWxldGUnLCB7XG4gICAgICAgIG5hbWU6IG5hbWUgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgc2NvcGU6XG4gICAgICAgICAgc2NvcGUgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgIH0pXG5cbiAgICAgIGF3YWl0IHJlbW92ZU1jcENvbmZpZyhuYW1lLCBzY29wZSlcbiAgICAgIGNsZWFudXBTZWN1cmVTdG9yYWdlKClcbiAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGBSZW1vdmVkIE1DUCBzZXJ2ZXIgJHtuYW1lfSBmcm9tICR7c2NvcGV9IGNvbmZpZ1xcbmApXG4gICAgICBjbGlPayhgRmlsZSBtb2RpZmllZDogJHtkZXNjcmliZU1jcENvbmZpZ0ZpbGVQYXRoKHNjb3BlKX1gKVxuICAgIH1cblxuICAgIC8vIElmIG5vIHNjb3BlIHNwZWNpZmllZCwgY2hlY2sgd2hlcmUgdGhlIHNlcnZlciBleGlzdHNcbiAgICBjb25zdCBwcm9qZWN0Q29uZmlnID0gZ2V0Q3VycmVudFByb2plY3RDb25maWcoKVxuICAgIGNvbnN0IGdsb2JhbENvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpXG5cbiAgICAvLyBDaGVjayBpZiBzZXJ2ZXIgZXhpc3RzIGluIHByb2plY3Qgc2NvcGUgKC5tY3AuanNvbilcbiAgICBjb25zdCB7IHNlcnZlcnM6IHByb2plY3RTZXJ2ZXJzIH0gPSBnZXRNY3BDb25maWdzQnlTY29wZSgncHJvamVjdCcpXG4gICAgY29uc3QgbWNwSnNvbkV4aXN0cyA9ICEhcHJvamVjdFNlcnZlcnNbbmFtZV1cblxuICAgIC8vIENvdW50IGhvdyBtYW55IHNjb3BlcyBjb250YWluIHRoaXMgc2VydmVyXG4gICAgY29uc3Qgc2NvcGVzOiBBcnJheTxFeGNsdWRlPENvbmZpZ1Njb3BlLCAnZHluYW1pYyc+PiA9IFtdXG4gICAgaWYgKHByb2plY3RDb25maWcubWNwU2VydmVycz8uW25hbWVdKSBzY29wZXMucHVzaCgnbG9jYWwnKVxuICAgIGlmIChtY3BKc29uRXhpc3RzKSBzY29wZXMucHVzaCgncHJvamVjdCcpXG4gICAgaWYgKGdsb2JhbENvbmZpZy5tY3BTZXJ2ZXJzPy5bbmFtZV0pIHNjb3Blcy5wdXNoKCd1c2VyJylcblxuICAgIGlmIChzY29wZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjbGlFcnJvcihgTm8gTUNQIHNlcnZlciBmb3VuZCB3aXRoIG5hbWU6IFwiJHtuYW1lfVwiYClcbiAgICB9IGVsc2UgaWYgKHNjb3Blcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIC8vIFNlcnZlciBleGlzdHMgaW4gb25seSBvbmUgc2NvcGUsIHJlbW92ZSBpdFxuICAgICAgY29uc3Qgc2NvcGUgPSBzY29wZXNbMF0hXG4gICAgICBsb2dFdmVudCgndGVuZ3VfbWNwX2RlbGV0ZScsIHtcbiAgICAgICAgbmFtZTogbmFtZSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgICBzY29wZTpcbiAgICAgICAgICBzY29wZSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgfSlcblxuICAgICAgYXdhaXQgcmVtb3ZlTWNwQ29uZmlnKG5hbWUsIHNjb3BlKVxuICAgICAgY2xlYW51cFNlY3VyZVN0b3JhZ2UoKVxuICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoXG4gICAgICAgIGBSZW1vdmVkIE1DUCBzZXJ2ZXIgXCIke25hbWV9XCIgZnJvbSAke3Njb3BlfSBjb25maWdcXG5gLFxuICAgICAgKVxuICAgICAgY2xpT2soYEZpbGUgbW9kaWZpZWQ6ICR7ZGVzY3JpYmVNY3BDb25maWdGaWxlUGF0aChzY29wZSl9YClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2VydmVyIGV4aXN0cyBpbiBtdWx0aXBsZSBzY29wZXNcbiAgICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKGBNQ1Agc2VydmVyIFwiJHtuYW1lfVwiIGV4aXN0cyBpbiBtdWx0aXBsZSBzY29wZXM6XFxuYClcbiAgICAgIHNjb3Blcy5mb3JFYWNoKHNjb3BlID0+IHtcbiAgICAgICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoXG4gICAgICAgICAgYCAgLSAke2dldFNjb3BlTGFiZWwoc2NvcGUpfSAoJHtkZXNjcmliZU1jcENvbmZpZ0ZpbGVQYXRoKHNjb3BlKX0pXFxuYCxcbiAgICAgICAgKVxuICAgICAgfSlcbiAgICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKCdcXG5UbyByZW1vdmUgZnJvbSBhIHNwZWNpZmljIHNjb3BlLCB1c2U6XFxuJylcbiAgICAgIHNjb3Blcy5mb3JFYWNoKHNjb3BlID0+IHtcbiAgICAgICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoYCAgY2xhdWRlIG1jcCByZW1vdmUgXCIke25hbWV9XCIgLXMgJHtzY29wZX1cXG5gKVxuICAgICAgfSlcbiAgICAgIGNsaUVycm9yKClcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY2xpRXJyb3IoKGVycm9yIGFzIEVycm9yKS5tZXNzYWdlKVxuICB9XG59XG5cbi8vIG1jcCBsaXN0IChsaW5lcyA0NjQx4oCTNDY4OClcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtY3BMaXN0SGFuZGxlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgbG9nRXZlbnQoJ3Rlbmd1X21jcF9saXN0Jywge30pXG4gIGNvbnN0IHsgc2VydmVyczogY29uZmlncyB9ID0gYXdhaXQgZ2V0QWxsTWNwQ29uZmlncygpXG4gIGlmIChPYmplY3Qua2V5cyhjb25maWdzKS5sZW5ndGggPT09IDApIHtcbiAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTo6IGludGVudGlvbmFsIGNvbnNvbGUgb3V0cHV0XG4gICAgY29uc29sZS5sb2coXG4gICAgICAnTm8gTUNQIHNlcnZlcnMgY29uZmlndXJlZC4gVXNlIGBjbGF1ZGUgbWNwIGFkZGAgdG8gYWRkIGEgc2VydmVyLicsXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICBjb25zb2xlLmxvZygnQ2hlY2tpbmcgTUNQIHNlcnZlciBoZWFsdGguLi5cXG4nKVxuXG4gICAgLy8gQ2hlY2sgc2VydmVycyBjb25jdXJyZW50bHlcbiAgICBjb25zdCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoY29uZmlncylcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgcE1hcChcbiAgICAgIGVudHJpZXMsXG4gICAgICBhc3luYyAoW25hbWUsIHNlcnZlcl0pID0+ICh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHNlcnZlcixcbiAgICAgICAgc3RhdHVzOiBhd2FpdCBjaGVja01jcFNlcnZlckhlYWx0aChuYW1lLCBzZXJ2ZXIpLFxuICAgICAgfSksXG4gICAgICB7IGNvbmN1cnJlbmN5OiBnZXRNY3BTZXJ2ZXJDb25uZWN0aW9uQmF0Y2hTaXplKCkgfSxcbiAgICApXG5cbiAgICBmb3IgKGNvbnN0IHsgbmFtZSwgc2VydmVyLCBzdGF0dXMgfSBvZiByZXN1bHRzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGV4Y2x1ZGluZyBzc2UtaWRlIHNlcnZlcnMgaGVyZSBzaW5jZSB0aGV5J3JlIGludGVybmFsXG4gICAgICBpZiAoc2VydmVyLnR5cGUgPT09ICdzc2UnKSB7XG4gICAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICAgICAgY29uc29sZS5sb2coYCR7bmFtZX06ICR7c2VydmVyLnVybH0gKFNTRSkgLSAke3N0YXR1c31gKVxuICAgICAgfSBlbHNlIGlmIChzZXJ2ZXIudHlwZSA9PT0gJ2h0dHAnKSB7XG4gICAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICAgICAgY29uc29sZS5sb2coYCR7bmFtZX06ICR7c2VydmVyLnVybH0gKEhUVFApIC0gJHtzdGF0dXN9YClcbiAgICAgIH0gZWxzZSBpZiAoc2VydmVyLnR5cGUgPT09ICdjbGF1ZGVhaS1wcm94eScpIHtcbiAgICAgICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgICAgICBjb25zb2xlLmxvZyhgJHtuYW1lfTogJHtzZXJ2ZXIudXJsfSAtICR7c3RhdHVzfWApXG4gICAgICB9IGVsc2UgaWYgKCFzZXJ2ZXIudHlwZSB8fCBzZXJ2ZXIudHlwZSA9PT0gJ3N0ZGlvJykge1xuICAgICAgICBjb25zdCBhcmdzID0gQXJyYXkuaXNBcnJheShzZXJ2ZXIuYXJncykgPyBzZXJ2ZXIuYXJncyA6IFtdXG4gICAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICAgICAgY29uc29sZS5sb2coYCR7bmFtZX06ICR7c2VydmVyLmNvbW1hbmR9ICR7YXJncy5qb2luKCcgJyl9IC0gJHtzdGF0dXN9YClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gVXNlIGdyYWNlZnVsU2h1dGRvd24gdG8gcHJvcGVybHkgY2xlYW4gdXAgTUNQIHNlcnZlciBjb25uZWN0aW9uc1xuICAvLyAocHJvY2Vzcy5leGl0IGJ5cGFzc2VzIGNsZWFudXAgaGFuZGxlcnMsIGxlYXZpbmcgY2hpbGQgcHJvY2Vzc2VzIG9ycGhhbmVkKVxuICBhd2FpdCBncmFjZWZ1bFNodXRkb3duKDApXG59XG5cbi8vIG1jcCBnZXQgKGxpbmVzIDQ2OTTigJM0Nzg2KVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1jcEdldEhhbmRsZXIobmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIGxvZ0V2ZW50KCd0ZW5ndV9tY3BfZ2V0Jywge1xuICAgIG5hbWU6IG5hbWUgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgfSlcbiAgY29uc3Qgc2VydmVyID0gZ2V0TWNwQ29uZmlnQnlOYW1lKG5hbWUpXG4gIGlmICghc2VydmVyKSB7XG4gICAgY2xpRXJyb3IoYE5vIE1DUCBzZXJ2ZXIgZm91bmQgd2l0aCBuYW1lOiAke25hbWV9YClcbiAgfVxuXG4gIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgY29uc29sZS5sb2coYCR7bmFtZX06YClcbiAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICBjb25zb2xlLmxvZyhgICBTY29wZTogJHtnZXRTY29wZUxhYmVsKHNlcnZlci5zY29wZSl9YClcblxuICAvLyBDaGVjayBzZXJ2ZXIgaGVhbHRoXG4gIGNvbnN0IHN0YXR1cyA9IGF3YWl0IGNoZWNrTWNwU2VydmVySGVhbHRoKG5hbWUsIHNlcnZlcilcbiAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICBjb25zb2xlLmxvZyhgICBTdGF0dXM6ICR7c3RhdHVzfWApXG5cbiAgLy8gSW50ZW50aW9uYWxseSBleGNsdWRpbmcgc3NlLWlkZSBzZXJ2ZXJzIGhlcmUgc2luY2UgdGhleSdyZSBpbnRlcm5hbFxuICBpZiAoc2VydmVyLnR5cGUgPT09ICdzc2UnKSB7XG4gICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgIGNvbnNvbGUubG9nKGAgIFR5cGU6IHNzZWApXG4gICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgIGNvbnNvbGUubG9nKGAgIFVSTDogJHtzZXJ2ZXIudXJsfWApXG4gICAgaWYgKHNlcnZlci5oZWFkZXJzKSB7XG4gICAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTo6IGludGVudGlvbmFsIGNvbnNvbGUgb3V0cHV0XG4gICAgICBjb25zb2xlLmxvZygnICBIZWFkZXJzOicpXG4gICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhzZXJ2ZXIuaGVhZGVycykpIHtcbiAgICAgICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgICAgICBjb25zb2xlLmxvZyhgICAgICR7a2V5fTogJHt2YWx1ZX1gKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2VydmVyLm9hdXRoPy5jbGllbnRJZCB8fCBzZXJ2ZXIub2F1dGg/LmNhbGxiYWNrUG9ydCkge1xuICAgICAgY29uc3QgcGFydHM6IHN0cmluZ1tdID0gW11cbiAgICAgIGlmIChzZXJ2ZXIub2F1dGguY2xpZW50SWQpIHtcbiAgICAgICAgcGFydHMucHVzaCgnY2xpZW50X2lkIGNvbmZpZ3VyZWQnKVxuICAgICAgICBjb25zdCBjbGllbnRDb25maWcgPSBnZXRNY3BDbGllbnRDb25maWcobmFtZSwgc2VydmVyKVxuICAgICAgICBpZiAoY2xpZW50Q29uZmlnPy5jbGllbnRTZWNyZXQpIHBhcnRzLnB1c2goJ2NsaWVudF9zZWNyZXQgY29uZmlndXJlZCcpXG4gICAgICB9XG4gICAgICBpZiAoc2VydmVyLm9hdXRoLmNhbGxiYWNrUG9ydClcbiAgICAgICAgcGFydHMucHVzaChgY2FsbGJhY2tfcG9ydCAke3NlcnZlci5vYXV0aC5jYWxsYmFja1BvcnR9YClcbiAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICAgIGNvbnNvbGUubG9nKGAgIE9BdXRoOiAke3BhcnRzLmpvaW4oJywgJyl9YClcbiAgICB9XG4gIH0gZWxzZSBpZiAoc2VydmVyLnR5cGUgPT09ICdodHRwJykge1xuICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICBjb25zb2xlLmxvZyhgICBUeXBlOiBodHRwYClcbiAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTo6IGludGVudGlvbmFsIGNvbnNvbGUgb3V0cHV0XG4gICAgY29uc29sZS5sb2coYCAgVVJMOiAke3NlcnZlci51cmx9YClcbiAgICBpZiAoc2VydmVyLmhlYWRlcnMpIHtcbiAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICAgIGNvbnNvbGUubG9nKCcgIEhlYWRlcnM6JylcbiAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHNlcnZlci5oZWFkZXJzKSkge1xuICAgICAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTo6IGludGVudGlvbmFsIGNvbnNvbGUgb3V0cHV0XG4gICAgICAgIGNvbnNvbGUubG9nKGAgICAgJHtrZXl9OiAke3ZhbHVlfWApXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzZXJ2ZXIub2F1dGg/LmNsaWVudElkIHx8IHNlcnZlci5vYXV0aD8uY2FsbGJhY2tQb3J0KSB7XG4gICAgICBjb25zdCBwYXJ0czogc3RyaW5nW10gPSBbXVxuICAgICAgaWYgKHNlcnZlci5vYXV0aC5jbGllbnRJZCkge1xuICAgICAgICBwYXJ0cy5wdXNoKCdjbGllbnRfaWQgY29uZmlndXJlZCcpXG4gICAgICAgIGNvbnN0IGNsaWVudENvbmZpZyA9IGdldE1jcENsaWVudENvbmZpZyhuYW1lLCBzZXJ2ZXIpXG4gICAgICAgIGlmIChjbGllbnRDb25maWc/LmNsaWVudFNlY3JldCkgcGFydHMucHVzaCgnY2xpZW50X3NlY3JldCBjb25maWd1cmVkJylcbiAgICAgIH1cbiAgICAgIGlmIChzZXJ2ZXIub2F1dGguY2FsbGJhY2tQb3J0KVxuICAgICAgICBwYXJ0cy5wdXNoKGBjYWxsYmFja19wb3J0ICR7c2VydmVyLm9hdXRoLmNhbGxiYWNrUG9ydH1gKVxuICAgICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgICAgY29uc29sZS5sb2coYCAgT0F1dGg6ICR7cGFydHMuam9pbignLCAnKX1gKVxuICAgIH1cbiAgfSBlbHNlIGlmIChzZXJ2ZXIudHlwZSA9PT0gJ3N0ZGlvJykge1xuICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICBjb25zb2xlLmxvZyhgICBUeXBlOiBzdGRpb2ApXG4gICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgIGNvbnNvbGUubG9nKGAgIENvbW1hbmQ6ICR7c2VydmVyLmNvbW1hbmR9YClcbiAgICBjb25zdCBhcmdzID0gQXJyYXkuaXNBcnJheShzZXJ2ZXIuYXJncykgPyBzZXJ2ZXIuYXJncyA6IFtdXG4gICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgIGNvbnNvbGUubG9nKGAgIEFyZ3M6ICR7YXJncy5qb2luKCcgJyl9YClcbiAgICBpZiAoc2VydmVyLmVudikge1xuICAgICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgICAgY29uc29sZS5sb2coJyAgRW52aXJvbm1lbnQ6JylcbiAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHNlcnZlci5lbnYpKSB7XG4gICAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICAgICAgY29uc29sZS5sb2coYCAgICAke2tleX09JHt2YWx1ZX1gKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTo6IGludGVudGlvbmFsIGNvbnNvbGUgb3V0cHV0XG4gIGNvbnNvbGUubG9nKFxuICAgIGBcXG5UbyByZW1vdmUgdGhpcyBzZXJ2ZXIsIHJ1bjogY2xhdWRlIG1jcCByZW1vdmUgXCIke25hbWV9XCIgLXMgJHtzZXJ2ZXIuc2NvcGV9YCxcbiAgKVxuICAvLyBVc2UgZ3JhY2VmdWxTaHV0ZG93biB0byBwcm9wZXJseSBjbGVhbiB1cCBNQ1Agc2VydmVyIGNvbm5lY3Rpb25zXG4gIC8vIChwcm9jZXNzLmV4aXQgYnlwYXNzZXMgY2xlYW51cCBoYW5kbGVycywgbGVhdmluZyBjaGlsZCBwcm9jZXNzZXMgb3JwaGFuZWQpXG4gIGF3YWl0IGdyYWNlZnVsU2h1dGRvd24oMClcbn1cblxuLy8gbWNwIGFkZC1qc29uIChsaW5lcyA0ODAx4oCTNDg3MClcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtY3BBZGRKc29uSGFuZGxlcihcbiAgbmFtZTogc3RyaW5nLFxuICBqc29uOiBzdHJpbmcsXG4gIG9wdGlvbnM6IHsgc2NvcGU/OiBzdHJpbmc7IGNsaWVudFNlY3JldD86IHRydWUgfSxcbik6IFByb21pc2U8dm9pZD4ge1xuICB0cnkge1xuICAgIGNvbnN0IHNjb3BlID0gZW5zdXJlQ29uZmlnU2NvcGUob3B0aW9ucy5zY29wZSlcbiAgICBjb25zdCBwYXJzZWRKc29uID0gc2FmZVBhcnNlSlNPTihqc29uKVxuXG4gICAgLy8gUmVhZCBzZWNyZXQgYmVmb3JlIHdyaXRpbmcgY29uZmlnIHNvIGNhbmNlbGxhdGlvbiBkb2Vzbid0IGxlYXZlIHBhcnRpYWwgc3RhdGVcbiAgICBjb25zdCBuZWVkc1NlY3JldCA9XG4gICAgICBvcHRpb25zLmNsaWVudFNlY3JldCAmJlxuICAgICAgcGFyc2VkSnNvbiAmJlxuICAgICAgdHlwZW9mIHBhcnNlZEpzb24gPT09ICdvYmplY3QnICYmXG4gICAgICAndHlwZScgaW4gcGFyc2VkSnNvbiAmJlxuICAgICAgKHBhcnNlZEpzb24udHlwZSA9PT0gJ3NzZScgfHwgcGFyc2VkSnNvbi50eXBlID09PSAnaHR0cCcpICYmXG4gICAgICAndXJsJyBpbiBwYXJzZWRKc29uICYmXG4gICAgICB0eXBlb2YgcGFyc2VkSnNvbi51cmwgPT09ICdzdHJpbmcnICYmXG4gICAgICAnb2F1dGgnIGluIHBhcnNlZEpzb24gJiZcbiAgICAgIHBhcnNlZEpzb24ub2F1dGggJiZcbiAgICAgIHR5cGVvZiBwYXJzZWRKc29uLm9hdXRoID09PSAnb2JqZWN0JyAmJlxuICAgICAgJ2NsaWVudElkJyBpbiBwYXJzZWRKc29uLm9hdXRoXG4gICAgY29uc3QgY2xpZW50U2VjcmV0ID0gbmVlZHNTZWNyZXQgPyBhd2FpdCByZWFkQ2xpZW50U2VjcmV0KCkgOiB1bmRlZmluZWRcblxuICAgIGF3YWl0IGFkZE1jcENvbmZpZyhuYW1lLCBwYXJzZWRKc29uLCBzY29wZSlcblxuICAgIGNvbnN0IHRyYW5zcG9ydFR5cGUgPVxuICAgICAgcGFyc2VkSnNvbiAmJiB0eXBlb2YgcGFyc2VkSnNvbiA9PT0gJ29iamVjdCcgJiYgJ3R5cGUnIGluIHBhcnNlZEpzb25cbiAgICAgICAgPyBTdHJpbmcocGFyc2VkSnNvbi50eXBlIHx8ICdzdGRpbycpXG4gICAgICAgIDogJ3N0ZGlvJ1xuXG4gICAgaWYgKFxuICAgICAgY2xpZW50U2VjcmV0ICYmXG4gICAgICBwYXJzZWRKc29uICYmXG4gICAgICB0eXBlb2YgcGFyc2VkSnNvbiA9PT0gJ29iamVjdCcgJiZcbiAgICAgICd0eXBlJyBpbiBwYXJzZWRKc29uICYmXG4gICAgICAocGFyc2VkSnNvbi50eXBlID09PSAnc3NlJyB8fCBwYXJzZWRKc29uLnR5cGUgPT09ICdodHRwJykgJiZcbiAgICAgICd1cmwnIGluIHBhcnNlZEpzb24gJiZcbiAgICAgIHR5cGVvZiBwYXJzZWRKc29uLnVybCA9PT0gJ3N0cmluZydcbiAgICApIHtcbiAgICAgIHNhdmVNY3BDbGllbnRTZWNyZXQoXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHsgdHlwZTogcGFyc2VkSnNvbi50eXBlLCB1cmw6IHBhcnNlZEpzb24udXJsIH0sXG4gICAgICAgIGNsaWVudFNlY3JldCxcbiAgICAgIClcbiAgICB9XG5cbiAgICBsb2dFdmVudCgndGVuZ3VfbWNwX2FkZCcsIHtcbiAgICAgIHNjb3BlOlxuICAgICAgICBzY29wZSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgc291cmNlOlxuICAgICAgICAnanNvbicgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgIHR5cGU6IHRyYW5zcG9ydFR5cGUgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICB9KVxuXG4gICAgY2xpT2soYEFkZGVkICR7dHJhbnNwb3J0VHlwZX0gTUNQIHNlcnZlciAke25hbWV9IHRvICR7c2NvcGV9IGNvbmZpZ2ApXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY2xpRXJyb3IoKGVycm9yIGFzIEVycm9yKS5tZXNzYWdlKVxuICB9XG59XG5cbi8vIG1jcCBhZGQtZnJvbS1jbGF1ZGUtZGVza3RvcCAobGluZXMgNDg4MeKAkzQ5MjcpXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWNwQWRkRnJvbURlc2t0b3BIYW5kbGVyKG9wdGlvbnM6IHtcbiAgc2NvcGU/OiBzdHJpbmdcbn0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzY29wZSA9IGVuc3VyZUNvbmZpZ1Njb3BlKG9wdGlvbnMuc2NvcGUpXG4gICAgY29uc3QgcGxhdGZvcm0gPSBnZXRQbGF0Zm9ybSgpXG5cbiAgICBsb2dFdmVudCgndGVuZ3VfbWNwX2FkZCcsIHtcbiAgICAgIHNjb3BlOlxuICAgICAgICBzY29wZSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgcGxhdGZvcm06XG4gICAgICAgIHBsYXRmb3JtIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICBzb3VyY2U6XG4gICAgICAgICdkZXNrdG9wJyBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgIH0pXG5cbiAgICBjb25zdCB7IHJlYWRDbGF1ZGVEZXNrdG9wTWNwU2VydmVycyB9ID0gYXdhaXQgaW1wb3J0KFxuICAgICAgJy4uLy4uL3V0aWxzL2NsYXVkZURlc2t0b3AuanMnXG4gICAgKVxuICAgIGNvbnN0IHNlcnZlcnMgPSBhd2FpdCByZWFkQ2xhdWRlRGVza3RvcE1jcFNlcnZlcnMoKVxuXG4gICAgaWYgKE9iamVjdC5rZXlzKHNlcnZlcnMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY2xpT2soXG4gICAgICAgICdObyBNQ1Agc2VydmVycyBmb3VuZCBpbiBDbGF1ZGUgRGVza3RvcCBjb25maWd1cmF0aW9uIG9yIGNvbmZpZ3VyYXRpb24gZmlsZSBkb2VzIG5vdCBleGlzdC4nLFxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IHsgdW5tb3VudCB9ID0gYXdhaXQgcmVuZGVyKFxuICAgICAgPEFwcFN0YXRlUHJvdmlkZXI+XG4gICAgICAgIDxLZXliaW5kaW5nU2V0dXA+XG4gICAgICAgICAgPE1DUFNlcnZlckRlc2t0b3BJbXBvcnREaWFsb2dcbiAgICAgICAgICAgIHNlcnZlcnM9e3NlcnZlcnN9XG4gICAgICAgICAgICBzY29wZT17c2NvcGV9XG4gICAgICAgICAgICBvbkRvbmU9eygpID0+IHtcbiAgICAgICAgICAgICAgdW5tb3VudCgpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvS2V5YmluZGluZ1NldHVwPlxuICAgICAgPC9BcHBTdGF0ZVByb3ZpZGVyPixcbiAgICAgIHsgZXhpdE9uQ3RybEM6IHRydWUgfSxcbiAgICApXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY2xpRXJyb3IoKGVycm9yIGFzIEVycm9yKS5tZXNzYWdlKVxuICB9XG59XG5cbi8vIG1jcCByZXNldC1wcm9qZWN0LWNob2ljZXMgKGxpbmVzIDQ5MzXigJM0OTUyKVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1jcFJlc2V0Q2hvaWNlc0hhbmRsZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGxvZ0V2ZW50KCd0ZW5ndV9tY3BfcmVzZXRfbWNwanNvbl9jaG9pY2VzJywge30pXG4gIHNhdmVDdXJyZW50UHJvamVjdENvbmZpZyhjdXJyZW50ID0+ICh7XG4gICAgLi4uY3VycmVudCxcbiAgICBlbmFibGVkTWNwanNvblNlcnZlcnM6IFtdLFxuICAgIGRpc2FibGVkTWNwanNvblNlcnZlcnM6IFtdLFxuICAgIGVuYWJsZUFsbFByb2plY3RNY3BTZXJ2ZXJzOiBmYWxzZSxcbiAgfSkpXG4gIGNsaU9rKFxuICAgICdBbGwgcHJvamVjdC1zY29wZWQgKC5tY3AuanNvbikgc2VydmVyIGFwcHJvdmFscyBhbmQgcmVqZWN0aW9ucyBoYXZlIGJlZW4gcmVzZXQuXFxuJyArXG4gICAgICAnWW91IHdpbGwgYmUgcHJvbXB0ZWQgZm9yIGFwcHJvdmFsIG5leHQgdGltZSB5b3Ugc3RhcnQgQ2xhdWRlIENvZGUuJyxcbiAgKVxufVxuIiwgImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ3JhY2VmdWxTaHV0ZG93biB9IGZyb20gJ3NyYy91dGlscy9ncmFjZWZ1bFNodXRkb3duLmpzJ1xuaW1wb3J0IHsgd3JpdGVUb1N0ZG91dCB9IGZyb20gJ3NyYy91dGlscy9wcm9jZXNzLmpzJ1xuaW1wb3J0IHsgQm94LCBjb2xvciwgVGV4dCwgdXNlVGhlbWUgfSBmcm9tICcuLi9pbmsuanMnXG5pbXBvcnQgeyBhZGRNY3BDb25maWcsIGdldEFsbE1jcENvbmZpZ3MgfSBmcm9tICcuLi9zZXJ2aWNlcy9tY3AvY29uZmlnLmpzJ1xuaW1wb3J0IHR5cGUge1xuICBDb25maWdTY29wZSxcbiAgTWNwU2VydmVyQ29uZmlnLFxuICBTY29wZWRNY3BTZXJ2ZXJDb25maWcsXG59IGZyb20gJy4uL3NlcnZpY2VzL21jcC90eXBlcy5qcydcbmltcG9ydCB7IHBsdXJhbCB9IGZyb20gJy4uL3V0aWxzL3N0cmluZ1V0aWxzLmpzJ1xuaW1wb3J0IHsgQ29uZmlndXJhYmxlU2hvcnRjdXRIaW50IH0gZnJvbSAnLi9Db25maWd1cmFibGVTaG9ydGN1dEhpbnQuanMnXG5pbXBvcnQgeyBTZWxlY3RNdWx0aSB9IGZyb20gJy4vQ3VzdG9tU2VsZWN0L1NlbGVjdE11bHRpLmpzJ1xuaW1wb3J0IHsgQnlsaW5lIH0gZnJvbSAnLi9kZXNpZ24tc3lzdGVtL0J5bGluZS5qcydcbmltcG9ydCB7IERpYWxvZyB9IGZyb20gJy4vZGVzaWduLXN5c3RlbS9EaWFsb2cuanMnXG5pbXBvcnQgeyBLZXlib2FyZFNob3J0Y3V0SGludCB9IGZyb20gJy4vZGVzaWduLXN5c3RlbS9LZXlib2FyZFNob3J0Y3V0SGludC5qcydcblxudHlwZSBQcm9wcyA9IHtcbiAgc2VydmVyczogUmVjb3JkPHN0cmluZywgTWNwU2VydmVyQ29uZmlnPlxuICBzY29wZTogQ29uZmlnU2NvcGVcbiAgb25Eb25lKCk6IHZvaWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1DUFNlcnZlckRlc2t0b3BJbXBvcnREaWFsb2coe1xuICBzZXJ2ZXJzLFxuICBzY29wZSxcbiAgb25Eb25lLFxufTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBzZXJ2ZXJOYW1lcyA9IE9iamVjdC5rZXlzKHNlcnZlcnMpXG4gIGNvbnN0IFtleGlzdGluZ1NlcnZlcnMsIHNldEV4aXN0aW5nU2VydmVyc10gPSB1c2VTdGF0ZTxcbiAgICBSZWNvcmQ8c3RyaW5nLCBTY29wZWRNY3BTZXJ2ZXJDb25maWc+XG4gID4oe30pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2b2lkIGdldEFsbE1jcENvbmZpZ3MoKS50aGVuKCh7IHNlcnZlcnMgfSkgPT4gc2V0RXhpc3RpbmdTZXJ2ZXJzKHNlcnZlcnMpKVxuICB9LCBbXSlcblxuICBjb25zdCBjb2xsaXNpb25zID0gc2VydmVyTmFtZXMuZmlsdGVyKFxuICAgIG5hbWUgPT4gZXhpc3RpbmdTZXJ2ZXJzW25hbWVdICE9PSB1bmRlZmluZWQsXG4gIClcblxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdChzZWxlY3RlZFNlcnZlcnM6IHN0cmluZ1tdKSB7XG4gICAgbGV0IGltcG9ydGVkQ291bnQgPSAwXG5cbiAgICBmb3IgKGNvbnN0IHNlcnZlck5hbWUgb2Ygc2VsZWN0ZWRTZXJ2ZXJzKSB7XG4gICAgICBjb25zdCBzZXJ2ZXJDb25maWcgPSBzZXJ2ZXJzW3NlcnZlck5hbWVdXG4gICAgICBpZiAoc2VydmVyQ29uZmlnKSB7XG4gICAgICAgIC8vIElmIHRoZSBzZXJ2ZXIgbmFtZSBhbHJlYWR5IGV4aXN0cywgZmluZCBhIG5ldyBuYW1lIHdpdGggXzEsIF8yLCBldGMuXG4gICAgICAgIGxldCBmaW5hbE5hbWUgPSBzZXJ2ZXJOYW1lXG4gICAgICAgIGlmIChleGlzdGluZ1NlcnZlcnNbZmluYWxOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgbGV0IGNvdW50ZXIgPSAxXG4gICAgICAgICAgd2hpbGUgKGV4aXN0aW5nU2VydmVyc1tgJHtzZXJ2ZXJOYW1lfV8ke2NvdW50ZXJ9YF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY291bnRlcisrXG4gICAgICAgICAgfVxuICAgICAgICAgIGZpbmFsTmFtZSA9IGAke3NlcnZlck5hbWV9XyR7Y291bnRlcn1gXG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBhZGRNY3BDb25maWcoZmluYWxOYW1lLCBzZXJ2ZXJDb25maWcsIHNjb3BlKVxuICAgICAgICBpbXBvcnRlZENvdW50KytcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkb25lKGltcG9ydGVkQ291bnQpXG4gIH1cblxuICBjb25zdCBbdGhlbWVdID0gdXNlVGhlbWUoKVxuXG4gIC8vIERlZmluZSBkb25lIGJlZm9yZSB1c2luZyBpbiB1c2VDYWxsYmFja1xuICBjb25zdCBkb25lID0gdXNlQ2FsbGJhY2soXG4gICAgKGltcG9ydGVkQ291bnQ6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKGltcG9ydGVkQ291bnQgPiAwKSB7XG4gICAgICAgIHdyaXRlVG9TdGRvdXQoXG4gICAgICAgICAgYFxcbiR7Y29sb3IoJ3N1Y2Nlc3MnLCB0aGVtZSkoYFN1Y2Nlc3NmdWxseSBpbXBvcnRlZCAke2ltcG9ydGVkQ291bnR9IE1DUCAke3BsdXJhbChpbXBvcnRlZENvdW50LCAnc2VydmVyJyl9IHRvICR7c2NvcGV9IGNvbmZpZy5gKX1cXG5gLFxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3cml0ZVRvU3Rkb3V0KCdcXG5ObyBzZXJ2ZXJzIHdlcmUgaW1wb3J0ZWQuJylcbiAgICAgIH1cbiAgICAgIG9uRG9uZSgpXG5cbiAgICAgIHZvaWQgZ3JhY2VmdWxTaHV0ZG93bigpXG4gICAgfSxcbiAgICBbdGhlbWUsIHNjb3BlLCBvbkRvbmVdLFxuICApXG5cbiAgLy8gSGFuZGxlIEVTQyB0byBjYW5jZWwgKGltcG9ydCAwIHNlcnZlcnMpXG4gIGNvbnN0IGhhbmRsZUVzY0NhbmNlbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkb25lKDApXG4gIH0sIFtkb25lXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RGlhbG9nXG4gICAgICAgIHRpdGxlPVwiSW1wb3J0IE1DUCBTZXJ2ZXJzIGZyb20gQ2xhdWRlIERlc2t0b3BcIlxuICAgICAgICBzdWJ0aXRsZT17YEZvdW5kICR7c2VydmVyTmFtZXMubGVuZ3RofSBNQ1AgJHtwbHVyYWwoc2VydmVyTmFtZXMubGVuZ3RoLCAnc2VydmVyJyl9IGluIENsYXVkZSBEZXNrdG9wLmB9XG4gICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVFc2NDYW5jZWx9XG4gICAgICAgIGhpZGVJbnB1dEd1aWRlXG4gICAgICA+XG4gICAgICAgIHtjb2xsaXNpb25zLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2FybmluZ1wiPlxuICAgICAgICAgICAgTm90ZTogU29tZSBzZXJ2ZXJzIGFscmVhZHkgZXhpc3Qgd2l0aCB0aGUgc2FtZSBuYW1lLiBJZiBzZWxlY3RlZCxcbiAgICAgICAgICAgIHRoZXkgd2lsbCBiZSBpbXBvcnRlZCB3aXRoIGEgbnVtYmVyZWQgc3VmZml4LlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgKX1cbiAgICAgICAgPFRleHQ+UGxlYXNlIHNlbGVjdCB0aGUgc2VydmVycyB5b3Ugd2FudCB0byBpbXBvcnQ6PC9UZXh0PlxuXG4gICAgICAgIDxTZWxlY3RNdWx0aVxuICAgICAgICAgIG9wdGlvbnM9e3NlcnZlck5hbWVzLm1hcChzZXJ2ZXIgPT4gKHtcbiAgICAgICAgICAgIGxhYmVsOiBgJHtzZXJ2ZXJ9JHtjb2xsaXNpb25zLmluY2x1ZGVzKHNlcnZlcikgPyAnIChhbHJlYWR5IGV4aXN0cyknIDogJyd9YCxcbiAgICAgICAgICAgIHZhbHVlOiBzZXJ2ZXIsXG4gICAgICAgICAgfSkpfVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2VydmVyTmFtZXMuZmlsdGVyKG5hbWUgPT4gIWNvbGxpc2lvbnMuaW5jbHVkZXMobmFtZSkpfSAvLyBPbmx5IHByZXNlbGVjdCBub24tY29sbGlkaW5nIHNlcnZlcnNcbiAgICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XG4gICAgICAgICAgb25DYW5jZWw9e2hhbmRsZUVzY0NhbmNlbH1cbiAgICAgICAgICBoaWRlSW5kZXhlc1xuICAgICAgICAvPlxuICAgICAgPC9EaWFsb2c+XG4gICAgICA8Qm94IHBhZGRpbmdYPXsxfT5cbiAgICAgICAgPFRleHQgZGltQ29sb3IgaXRhbGljPlxuICAgICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCJTcGFjZVwiIGFjdGlvbj1cInNlbGVjdFwiIC8+XG4gICAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCJFbnRlclwiIGFjdGlvbj1cImNvbmZpcm1cIiAvPlxuICAgICAgICAgICAgPENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludFxuICAgICAgICAgICAgICBhY3Rpb249XCJjb25maXJtOm5vXCJcbiAgICAgICAgICAgICAgY29udGV4dD1cIkNvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICAgIGZhbGxiYWNrPVwiRXNjXCJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJjYW5jZWxcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0J5bGluZT5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gIClcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7QUFFQTtBQUhBLFNBQVNBLFlBQVk7QUFFckIsU0FBU0MsV0FBVzs7OztBQ1BwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBQztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFPLFNBQUFDLDZCQUFBQyxJQUFBO0FBQUEsUUFBQUMsSUFBQUMsRUFBQSxFQUFBO0FBQXNDLFFBQUE7SUFBQUM7SUFBQUM7SUFBQUM7RUFBQSxJQUFBTDtBQUlyQyxNQUFBTTtBQUFBLE1BQUFMLEVBQUEsQ0FBQSxNQUFBRSxTQUFBO0FBQ2NHLFNBQUFDLE9BQU1DLEtBQU1MLE9BQU87QUFBQ0YsTUFBQSxDQUFBLElBQUFFO0FBQUFGLE1BQUEsQ0FBQSxJQUFBSztFQUFBLE9BQUE7QUFBQUEsU0FBQUwsRUFBQSxDQUFBO0VBQUE7QUFBeEMsUUFBQVEsY0FBb0JIO0FBQW9CLE1BQUFJO0FBQUEsTUFBQVQsRUFBQSxDQUFBLE1BQUFVLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFHdENGLFNBQUEsQ0FBQztBQUFDVCxNQUFBLENBQUEsSUFBQVM7RUFBQSxPQUFBO0FBQUFBLFNBQUFULEVBQUEsQ0FBQTtFQUFBO0FBRkosUUFB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bmZpZyIsICJNQ1BTZXJ2ZXJEZXNrdG9wSW1wb3J0RGlhbG9nIiwgInQwIiwgIiQiLCAiX2MiLCAic2VydmVycyIsICJzY29wZSIsICJvbkRvbmUiLCAidDEiLCAiT2JqZWN0IiwgImtleXMiLCAic2VydmVyTmFtZXMiLCAidDIiLCAiU3ltYm9sIiwgImZvciIsICJleGlzdGluZ1NlcnZlcnMiLCAic2V0RXhpc3RpbmdTZXJ2ZXJzIiwgInVzZVN0YXRlIiwgInQzIiwgInQ0IiwgImdldEFsbE1jcENvbmZpZ3MiLCAidGhlbiIsICJ0NSIsICJzZXJ2ZXJzXzAiLCAidXNlRWZmZWN0IiwgImZpbHRlciIsICJuYW1lIiwgInVuZGVmaW5lZCIsICJjb2xsaXNpb25zIiwgIm9uU3VibWl0IiwgInNlbGVjdGVkU2VydmVycyIsICJpbXBvcnRlZENvdW50IiwgInNlcnZlck5hbWUiLCAic2VydmVyQ29uZmlnIiwgImZpbmFsTmFtZSIsICJjb3VudGVyIiwgImFkZE1jcENvbmZpZyIsICJkb25lIiwgInRoZW1lIiwgInVzZVRoZW1lIiwgInQ2IiwgImltcG9ydGVkQ291bnRfMCIsICJ3cml0ZVRvU3Rkb3V0IiwgImNvbG9yIiwgInBsdXJhbCIsICJncmFjZWZ1bFNodXRkb3duIiwgInQ3IiwgImhhbmRsZUVzY0NhbmNlbCIsICJ0OCIsICJsZW5ndGgiLCAidDkiLCAidDEwIiwgInQxMSIsICJ0MTIiLCAidDEzIiwgInQxNCIsICJtYXAiLCAic2VydmVyIiwgImxhYmVsIiwgImluY2x1ZGVzIiwgInZhbHVlIiwgIm5hbWVfMCIsICJ0MTUiLCAidDE2IiwgInQxNyIsICJ0MTgiLCAiaW5pdF9jb25maWciLCAiY2hlY2tNY3BTZXJ2ZXJIZWFsdGgiLCAibmFtZSIsICJzZXJ2ZXIiLCAicmVzdWx0IiwgImNvbm5lY3RUb1NlcnZlciIsICJ0eXBlIiwgIl9lcnJvciIsICJtY3BTZXJ2ZUhhbmRsZXIiLCAiZGVidWciLCAidmVyYm9zZSIsICJwcm92aWRlZEN3ZCIsICJjd2QiLCAibG9nRXZlbnQiLCAic3RhdCIsICJlcnJvciIsICJpc0ZzSW5hY2Nlc3NpYmxlIiwgImNsaUVycm9yIiwgInNldHVwIiwgInVuZGVmaW5lZCIsICJzdGFydE1DUFNlcnZlciIsICJtY3BSZW1vdmVIYW5kbGVyIiwgIm9wdGlvbnMiLCAic2VydmVyQmVmb3JlUmVtb3ZhbCIsICJnZXRNY3BDb25maWdCeU5hbWUiLCAiY2xlYW51cFNlY3VyZVN0b3JhZ2UiLCAiY2xlYXJTZXJ2ZXJUb2tlbnNGcm9tTG9jYWxTdG9yYWdlIiwgImNsZWFyTWNwQ2xpZW50Q29uZmlnIiwgInNjb3BlIiwgImVuc3VyZUNvbmZpZ1Njb3BlIiwgInJlbW92ZU1jcENvbmZpZyIsICJwcm9jZXNzIiwgInN0ZG91dCIsICJ3cml0ZSIsICJjbGlPayIsICJkZXNjcmliZU1jcENvbmZpZ0ZpbGVQYXRoIiwgInByb2plY3RDb25maWciLCAiZ2V0Q3VycmVudFByb2plY3RDb25maWciLCAiZ2xvYmFsQ29uZmlnIiwgImdldEdsb2JhbENvbmZpZyIsICJzZXJ2ZXJzIiwgInByb2plY3RTZXJ2ZXJzIiwgImdldE1jcENvbmZpZ3NCeVNjb3BlIiwgIm1jcEpzb25FeGlzdHMiLCAic2NvcGVzIiwgIm1jcFNlcnZlcnMiLCAicHVzaCIsICJsZW5ndGgiLCAic3RkZXJyIiwgImZvckVhY2giLCAiZ2V0U2NvcGVMYWJlbCIsICJtZXNzYWdlIiwgIm1jcExpc3RIYW5kbGVyIiwgImNvbmZpZ3MiLCAiZ2V0QWxsTWNwQ29uZmlncyIsICJPYmplY3QiLCAia2V5cyIsICJjb25zb2xlIiwgImxvZyIsICJlbnRyaWVzIiwgInJlc3VsdHMiLCAicE1hcCIsICJzdGF0dXMiLCAiY29uY3VycmVuY3kiLCAiZ2V0TWNwU2VydmVyQ29ubmVjdGlvbkJhdGNoU2l6ZSIsICJ1cmwiLCAiYXJncyIsICJBcnJheSIsICJpc0FycmF5IiwgImNvbW1hbmQiLCAiam9pbiIsICJncmFjZWZ1bFNodXRkb3duIiwgIm1jcEdldEhhbmRsZXIiLCAiaGVhZGVycyIsICJrZXkiLCAidmFsdWUiLCAib2F1dGgiLCAiY2xpZW50SWQiLCAiY2FsbGJhY2tQb3J0IiwgInBhcnRzIiwgImNsaWVudENvbmZpZyIsICJnZXRNY3BDbGllbnRDb25maWciLCAiY2xpZW50U2VjcmV0IiwgImVudiIsICJtY3BBZGRKc29uSGFuZGxlciIsICJqc29uIiwgInBhcnNlZEpzb24iLCAic2FmZVBhcnNlSlNPTiIsICJuZWVkc1NlY3JldCIsICJyZWFkQ2xpZW50U2VjcmV0IiwgImFkZE1jcENvbmZpZyIsICJ0cmFuc3BvcnRUeXBlIiwgIlN0cmluZyIsICJzYXZlTWNwQ2xpZW50U2VjcmV0IiwgInNvdXJjZSIsICJtY3BBZGRGcm9tRGVza3RvcEhhbmRsZXIiLCAicGxhdGZvcm0iLCAiZ2V0UGxhdGZvcm0iLCAicmVhZENsYXVkZURlc2t0b3BNY3BTZXJ2ZXJzIiwgInVubW91bnQiLCAicmVuZGVyIiwgImV4aXRPbkN0cmxDIiwgIm1jcFJlc2V0Q2hvaWNlc0hhbmRsZXIiLCAic2F2ZUN1cnJlbnRQcm9qZWN0Q29uZmlnIiwgImN1cnJlbnQiLCAiZW5hYmxlZE1jcGpzb25TZXJ2ZXJzIiwgImRpc2FibGVkTWNwanNvblNlcnZlcnMiLCAiZW5hYmxlQWxsUHJvamVjdE1jcFNlcnZlcnMiXQp9Cg==
