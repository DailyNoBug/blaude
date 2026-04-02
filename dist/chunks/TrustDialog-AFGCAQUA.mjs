#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  BASH_TOOL_NAME,
  PermissionDialog,
  SAFE_ENV_VARS,
  Select,
  getMcpConfigsByScope,
  getPermissionRulesForSource,
  gracefulShutdownSync,
  init_CustomSelect,
  init_PermissionDialog,
  init_config as init_config2,
  init_gracefulShutdown,
  init_managedEnvConstants,
  init_permissionsLoader,
  init_toolName
} from "./chunk-PWGYNHQM.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-2ONWBUQT.mjs";
import "./chunk-SQ6KOOZS.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-Y2PD6CVC.mjs";
import {
  init_useExitOnCtrlCDWithKeybindings,
  useExitOnCtrlCDWithKeybindings
} from "./chunk-TBOD624P.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import {
  init_useKeybinding,
  useKeybinding
} from "./chunk-SY3WEZL4.mjs";
import "./chunk-M22WMPMZ.mjs";
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
import "./chunk-R326WRGL.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import {
  Link,
  ThemedBox_default,
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime
} from "./chunk-KMJXN3MK.mjs";
import {
  init_react,
  react_default
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  checkHasTrustDialogAccepted,
  getSettingsForSource,
  init_config2 as init_config,
  init_settings2 as init_settings,
  saveCurrentProjectConfig
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
import {
  getCwd,
  init_cwd
} from "./chunk-TZFTPSMG.mjs";
import "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-IPMELYAB.mjs";
import "./chunk-F5ODCUJD.mjs";
import "./chunk-ZAYB3WZV.mjs";
import {
  getFsImplementation,
  init_fsOperations
} from "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import "./chunk-OU3SZVVB.mjs";
import {
  init_state,
  setSessionTrustAccepted
} from "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import "./chunk-O5PZ3G6I.mjs";

// src/components/TrustDialog/TrustDialog.tsx
init_react_compiler_runtime();
init_react();
init_analytics();
init_state();
init_useExitOnCtrlCDWithKeybindings();
init_ink();
init_useKeybinding();
init_config2();
init_toolName();
init_config();
init_cwd();
init_fsOperations();
init_gracefulShutdown();
init_CustomSelect();
init_PermissionDialog();
import { homedir } from "os";

// src/components/TrustDialog/utils.ts
init_settings();
init_toolName();
init_managedEnvConstants();
init_permissionsLoader();
function hasHooks(settings) {
  if (settings === null || settings.disableAllHooks) {
    return false;
  }
  if (settings.statusLine) {
    return true;
  }
  if (settings.fileSuggestion) {
    return true;
  }
  if (!settings.hooks) {
    return false;
  }
  for (const hookConfig of Object.values(settings.hooks)) {
    if (hookConfig.length > 0) {
      return true;
    }
  }
  return false;
}
function getHooksSources() {
  const sources = [];
  const projectSettings = getSettingsForSource("projectSettings");
  if (hasHooks(projectSettings)) {
    sources.push(".claude/settings.json");
  }
  const localSettings = getSettingsForSource("localSettings");
  if (hasHooks(localSettings)) {
    sources.push(".claude/settings.local.json");
  }
  return sources;
}
function hasBashPermission(rules) {
  return rules.some(
    (rule) => rule.ruleBehavior === "allow" && (rule.ruleValue.toolName === BASH_TOOL_NAME || rule.ruleValue.toolName.startsWith(BASH_TOOL_NAME + "("))
  );
}
function getBashPermissionSources() {
  const sources = [];
  const projectRules = getPermissionRulesForSource("projectSettings");
  if (hasBashPermission(projectRules)) {
    sources.push(".claude/settings.json");
  }
  const localRules = getPermissionRulesForSource("localSettings");
  if (hasBashPermission(localRules)) {
    sources.push(".claude/settings.local.json");
  }
  return sources;
}
function hasOtelHeadersHelper(settings) {
  return !!settings?.otelHeadersHelper;
}
function getOtelHeadersHelperSources() {
  const sources = [];
  const projectSettings = getSettingsForSource("projectSettings");
  if (hasOtelHeadersHelper(projectSettings)) {
    sources.push(".claude/settings.json");
  }
  const localSettings = getSettingsForSource("localSettings");
  if (hasOtelHeadersHelper(localSettings)) {
    sources.push(".claude/settings.local.json");
  }
  return sources;
}
function hasApiKeyHelper(settings) {
  return !!settings?.apiKeyHelper;
}
function getApiKeyHelperSources() {
  const sources = [];
  const projectSettings = getSettingsForSource("projectSettings");
  if (hasApiKeyHelper(projectSettings)) {
    sources.push(".claude/settings.json");
  }
  const localSettings = getSettingsForSource("localSettings");
  if (hasApiKeyHelper(localSettings)) {
    sources.push(".claude/settings.local.json");
  }
  return sources;
}
function hasAwsCommands(settings) {
  return !!(settings?.awsAuthRefresh || settings?.awsCredentialExport);
}
function getAwsCommandsSources() {
  const sources = [];
  const projectSettings = getSettingsForSource("projectSettings");
  if (hasAwsCommands(projectSettings)) {
    sources.push(".claude/settings.json");
  }
  const localSettings = getSettingsForSource("localSettings");
  if (hasAwsCommands(localSettings)) {
    sources.push(".claude/settings.local.json");
  }
  return sources;
}
function hasGcpCommands(settings) {
  return !!settings?.gcpAuthRefresh;
}
function getGcpCommandsSources() {
  const sources = [];
  const projectSettings = getSettingsForSource("projectSettings");
  if (hasGcpCommands(projectSettings)) {
    sources.push(".claude/settings.json");
  }
  const localSettings = getSettingsForSource("localSettings");
  if (hasGcpCommands(localSettings)) {
    sources.push(".claude/settings.local.json");
  }
  return sources;
}
function hasDangerousEnvVars(settings) {
  if (!settings?.env) {
    return false;
  }
  return Object.keys(settings.env).some(
    (key) => !SAFE_ENV_VARS.has(key.toUpperCase())
  );
}
function getDangerousEnvVarsSources() {
  const sources = [];
  const projectSettings = getSettingsForSource("projectSettings");
  if (hasDangerousEnvVars(projectSettings)) {
    sources.push(".claude/settings.json");
  }
  const localSettings = getSettingsForSource("localSettings");
  if (hasDangerousEnvVars(localSettings)) {
    sources.push(".claude/settings.local.json");
  }
  return sources;
}

// src/components/TrustDialog/TrustDialog.tsx
function TrustDialog(t0) {
  const $ = c(33);
  const {
    onDone,
    commands
  } = t0;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = getMcpConfigsByScope("project");
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const {
    servers: projectServers
  } = t1;
  let t2;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = Object.keys(projectServers);
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const hasMcpServers = t2.length > 0;
  let t3;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = getHooksSources();
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  const hooksSettingSources = t3;
  const hasHooks2 = hooksSettingSources.length > 0;
  let t4;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = getBashPermissionSources();
    $[3] = t4;
  } else {
    t4 = $[3];
  }
  const bashSettingSources = t4;
  let t5;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = getApiKeyHelperSources();
    $[4] = t5;
  } else {
    t5 = $[4];
  }
  const apiKeyHelperSources = t5;
  const hasApiKeyHelper2 = apiKeyHelperSources.length > 0;
  let t6;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = getAwsCommandsSources();
    $[5] = t6;
  } else {
    t6 = $[5];
  }
  const awsCommandsSources = t6;
  const hasAwsCommands2 = awsCommandsSources.length > 0;
  let t7;
  if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = getGcpCommandsSources();
    $[6] = t7;
  } else {
    t7 = $[6];
  }
  const gcpCommandsSources = t7;
  const hasGcpCommands2 = gcpCommandsSources.length > 0;
  let t8;
  if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t8 = getOtelHeadersHelperSources();
    $[7] = t8;
  } else {
    t8 = $[7];
  }
  const otelHeadersHelperSources = t8;
  const hasOtelHeadersHelper2 = otelHeadersHelperSources.length > 0;
  let t9;
  if ($[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t9 = getDangerousEnvVarsSources();
    $[8] = t9;
  } else {
    t9 = $[8];
  }
  const dangerousEnvVarsSources = t9;
  const hasDangerousEnvVars2 = dangerousEnvVarsSources.length > 0;
  let t10;
  if ($[9] !== commands) {
    t10 = commands?.some(_temp2) ?? false;
    $[9] = commands;
    $[10] = t10;
  } else {
    t10 = $[10];
  }
  const hasSlashCommandBash = t10;
  let t11;
  if ($[11] !== commands) {
    t11 = commands?.some(_temp4) ?? false;
    $[11] = commands;
    $[12] = t11;
  } else {
    t11 = $[12];
  }
  const hasSkillsBash = t11;
  const hasAnyBashExecution = bashSettingSources.length > 0 || hasSlashCommandBash || hasSkillsBash;
  const hasTrustDialogAccepted = checkHasTrustDialogAccepted();
  let t12;
  let t13;
  if ($[13] !== hasAnyBashExecution) {
    t12 = () => {
      const isHomeDir = homedir() === getCwd();
      logEvent("tengu_trust_dialog_shown", {
        isHomeDir,
        hasMcpServers,
        hasHooks: hasHooks2,
        hasBashExecution: hasAnyBashExecution,
        hasApiKeyHelper: hasApiKeyHelper2,
        hasAwsCommands: hasAwsCommands2,
        hasGcpCommands: hasGcpCommands2,
        hasOtelHeadersHelper: hasOtelHeadersHelper2,
        hasDangerousEnvVars: hasDangerousEnvVars2
      });
    };
    t13 = [hasMcpServers, hasHooks2, hasAnyBashExecution, hasApiKeyHelper2, hasAwsCommands2, hasGcpCommands2, hasOtelHeadersHelper2, hasDangerousEnvVars2];
    $[13] = hasAnyBashExecution;
    $[14] = t12;
    $[15] = t13;
  } else {
    t12 = $[14];
    t13 = $[15];
  }
  react_default.useEffect(t12, t13);
  let t14;
  if ($[16] !== hasAnyBashExecution || $[17] !== onDone) {
    t14 = function onChange2(value) {
      if (value === "exit") {
        gracefulShutdownSync(1);
        return;
      }
      const isHomeDir_0 = homedir() === getCwd();
      logEvent("tengu_trust_dialog_accept", {
        isHomeDir: isHomeDir_0,
        hasMcpServers,
        hasHooks: hasHooks2,
        hasBashExecution: hasAnyBashExecution,
        hasApiKeyHelper: hasApiKeyHelper2,
        hasAwsCommands: hasAwsCommands2,
        hasGcpCommands: hasGcpCommands2,
        hasOtelHeadersHelper: hasOtelHeadersHelper2,
        hasDangerousEnvVars: hasDangerousEnvVars2
      });
      if (isHomeDir_0) {
        setSessionTrustAccepted(true);
      } else {
        saveCurrentProjectConfig(_temp5);
      }
      onDone();
    };
    $[16] = hasAnyBashExecution;
    $[17] = onDone;
    $[18] = t14;
  } else {
    t14 = $[18];
  }
  const onChange = t14;
  const exitState = useExitOnCtrlCDWithKeybindings(_temp6);
  let t15;
  if ($[19] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t15 = {
      context: "Confirmation"
    };
    $[19] = t15;
  } else {
    t15 = $[19];
  }
  useKeybinding("confirm:no", _temp7, t15);
  if (hasTrustDialogAccepted) {
    setTimeout(onDone);
    return null;
  }
  let t16;
  let t17;
  let t18;
  if ($[20] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t16 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, getFsImplementation().cwd());
    t17 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "Quick safety check: Is this a project you created or one you trust? (Like your own code, a well-known open source project, or work from your team). If not, take a moment to review what", "'", "s in this folder first.");
    t18 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "Blaude", "'", "ll be able to read, edit, and execute files here.");
    $[20] = t16;
    $[21] = t17;
    $[22] = t18;
  } else {
    t16 = $[20];
    t17 = $[21];
    t18 = $[22];
  }
  let t19;
  if ($[23] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t19 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ react_default.createElement(Link, { url: "https://code.claude.com/docs/en/security" }, "Security guide"));
    $[23] = t19;
  } else {
    t19 = $[23];
  }
  let t20;
  if ($[24] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t20 = [{
      label: "Yes, I trust this folder",
      value: "enable_all"
    }, {
      label: "No, exit",
      value: "exit"
    }];
    $[24] = t20;
  } else {
    t20 = $[24];
  }
  let t21;
  if ($[25] !== onChange) {
    t21 = /* @__PURE__ */ react_default.createElement(Select, { options: t20, onChange: (value_0) => onChange(value_0), onCancel: () => onChange("exit") });
    $[25] = onChange;
    $[26] = t21;
  } else {
    t21 = $[26];
  }
  let t22;
  if ($[27] !== exitState.keyName || $[28] !== exitState.pending) {
    t22 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, exitState.pending ? /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, "Press ", exitState.keyName, " again to exit") : /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, "Enter to confirm \xB7 Esc to cancel"));
    $[27] = exitState.keyName;
    $[28] = exitState.pending;
    $[29] = t22;
  } else {
    t22 = $[29];
  }
  let t23;
  if ($[30] !== t21 || $[31] !== t22) {
    t23 = /* @__PURE__ */ react_default.createElement(PermissionDialog, { color: "warning", titleColor: "warning", title: "Accessing workspace:" }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1, paddingTop: 1 }, t16, t17, t18, t19, t21, t22));
    $[30] = t21;
    $[31] = t22;
    $[32] = t23;
  } else {
    t23 = $[32];
  }
  return t23;
}
function _temp7() {
  gracefulShutdownSync(0);
}
function _temp6() {
  return gracefulShutdownSync(1);
}
function _temp5(current) {
  return {
    ...current,
    hasTrustDialogAccepted: true
  };
}
function _temp4(command_0) {
  return command_0.type === "prompt" && (command_0.loadedFrom === "skills" || command_0.loadedFrom === "plugin") && (command_0.source === "projectSettings" || command_0.source === "localSettings" || command_0.source === "plugin") && command_0.allowedTools?.some(_temp3);
}
function _temp3(tool_0) {
  return tool_0 === BASH_TOOL_NAME || tool_0.startsWith(BASH_TOOL_NAME + "(");
}
function _temp2(command) {
  return command.type === "prompt" && command.loadedFrom === "commands_DEPRECATED" && (command.source === "projectSettings" || command.source === "localSettings") && command.allowedTools?.some(_temp);
}
function _temp(tool) {
  return tool === BASH_TOOL_NAME || tool.startsWith(BASH_TOOL_NAME + "(");
}
export {
  TrustDialog
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvVHJ1c3REaWFsb2cvVHJ1c3REaWFsb2cudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL1RydXN0RGlhbG9nL3V0aWxzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBob21lZGlyIH0gZnJvbSAnb3MnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBsb2dFdmVudCB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9hbmFseXRpY3MvaW5kZXguanMnXG5pbXBvcnQgeyBzZXRTZXNzaW9uVHJ1c3RBY2NlcHRlZCB9IGZyb20gJy4uLy4uL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB0eXBlIHsgQ29tbWFuZCB9IGZyb20gJy4uLy4uL2NvbW1hbmRzLmpzJ1xuaW1wb3J0IHsgdXNlRXhpdE9uQ3RybENEV2l0aEtleWJpbmRpbmdzIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlRXhpdE9uQ3RybENEV2l0aEtleWJpbmRpbmdzLmpzJ1xuaW1wb3J0IHsgQm94LCBMaW5rLCBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdXNlS2V5YmluZGluZyB9IGZyb20gJy4uLy4uL2tleWJpbmRpbmdzL3VzZUtleWJpbmRpbmcuanMnXG5pbXBvcnQgeyBnZXRNY3BDb25maWdzQnlTY29wZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21jcC9jb25maWcuanMnXG5pbXBvcnQgeyBCQVNIX1RPT0xfTkFNRSB9IGZyb20gJy4uLy4uL3Rvb2xzL0Jhc2hUb29sL3Rvb2xOYW1lLmpzJ1xuaW1wb3J0IHtcbiAgY2hlY2tIYXNUcnVzdERpYWxvZ0FjY2VwdGVkLFxuICBzYXZlQ3VycmVudFByb2plY3RDb25maWcsXG59IGZyb20gJy4uLy4uL3V0aWxzL2NvbmZpZy5qcydcbmltcG9ydCB7IGdldEN3ZCB9IGZyb20gJy4uLy4uL3V0aWxzL2N3ZC5qcydcbmltcG9ydCB7IGdldEZzSW1wbGVtZW50YXRpb24gfSBmcm9tICcuLi8uLi91dGlscy9mc09wZXJhdGlvbnMuanMnXG5pbXBvcnQgeyBncmFjZWZ1bFNodXRkb3duU3luYyB9IGZyb20gJy4uLy4uL3V0aWxzL2dyYWNlZnVsU2h1dGRvd24uanMnXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICcuLi9DdXN0b21TZWxlY3QvaW5kZXguanMnXG5pbXBvcnQgeyBQZXJtaXNzaW9uRGlhbG9nIH0gZnJvbSAnLi4vcGVybWlzc2lvbnMvUGVybWlzc2lvbkRpYWxvZy5qcydcbmltcG9ydCB7XG4gIGdldEFwaUtleUhlbHBlclNvdXJjZXMsXG4gIGdldEF3c0NvbW1hbmRzU291cmNlcyxcbiAgZ2V0QmFzaFBlcm1pc3Npb25Tb3VyY2VzLFxuICBnZXREYW5nZXJvdXNFbnZWYXJzU291cmNlcyxcbiAgZ2V0R2NwQ29tbWFuZHNTb3VyY2VzLFxuICBnZXRIb29rc1NvdXJjZXMsXG4gIGdldE90ZWxIZWFkZXJzSGVscGVyU291cmNlcyxcbn0gZnJvbSAnLi91dGlscy5qcydcblxudHlwZSBQcm9wcyA9IHtcbiAgb25Eb25lKCk6IHZvaWRcbiAgY29tbWFuZHM/OiBDb21tYW5kW11cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRydXN0RGlhbG9nKHsgb25Eb25lLCBjb21tYW5kcyB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IHsgc2VydmVyczogcHJvamVjdFNlcnZlcnMgfSA9IGdldE1jcENvbmZpZ3NCeVNjb3BlKCdwcm9qZWN0JylcblxuICAvLyBJbiBhbGwgY2FzZXMsIHdlIGdlbmVyYWxseSBjaGVjayBvbmx5IHRoZSBwcm9qZWN0LWxldmVsIGFuZFxuICAvLyBwcm9qZWN0LWxvY2FsLWxldmVsIHNldHRpbmdzLCB3aGljaCB3ZSBhc3N1bWUgdGhhdCB1c2VycyBkbyBub3QgY29uZmlndXJlXG4gIC8vIGRpcmVjdGx5IGNvbXBhcmVkIHRvIHVzZXItbGV2ZWwgc2V0dGluZ3MuXG5cbiAgLy8gQ2hlY2sgZm9yIE1DUHNcbiAgY29uc3QgaGFzTWNwU2VydmVycyA9IE9iamVjdC5rZXlzKHByb2plY3RTZXJ2ZXJzKS5sZW5ndGggPiAwXG4gIC8vIENoZWNrIGZvciBob29rc1xuICBjb25zdCBob29rc1NldHRpbmdTb3VyY2VzID0gZ2V0SG9va3NTb3VyY2VzKClcbiAgY29uc3QgaGFzSG9va3MgPSBob29rc1NldHRpbmdTb3VyY2VzLmxlbmd0aCA+IDBcbiAgLy8gQ2hlY2sgd2hldGhlciBjb2RlIGV4ZWN1dGlvbiBpcyBhbGxvd2VkIGluIHBlcm1pc3Npb25zIGFuZCBzbGFzaCBjb21tYW5kc1xuICBjb25zdCBiYXNoU2V0dGluZ1NvdXJjZXMgPSBnZXRCYXNoUGVybWlzc2lvblNvdXJjZXMoKVxuICAvLyBDaGVjayBmb3IgYXBpS2V5SGVscGVyIHdoaWNoIGV4ZWN1dGVzIGFyYml0cmFyeSBjb21tYW5kc1xuICBjb25zdCBhcGlLZXlIZWxwZXJTb3VyY2VzID0gZ2V0QXBpS2V5SGVscGVyU291cmNlcygpXG4gIGNvbnN0IGhhc0FwaUtleUhlbHBlciA9IGFwaUtleUhlbHBlclNvdXJjZXMubGVuZ3RoID4gMFxuICAvLyBDaGVjayBmb3IgQVdTIGNvbW1hbmRzIHdoaWNoIGV4ZWN1dGUgYXJiaXRyYXJ5IGNvbW1hbmRzXG4gIGNvbnN0IGF3c0NvbW1hbmRzU291cmNlcyA9IGdldEF3c0NvbW1hbmRzU291cmNlcygpXG4gIGNvbnN0IGhhc0F3c0NvbW1hbmRzID0gYXdzQ29tbWFuZHNTb3VyY2VzLmxlbmd0aCA+IDBcbiAgLy8gQ2hlY2sgZm9yIEdDUCBjb21tYW5kcyB3aGljaCBleGVjdXRlIGFyYml0cmFyeSBjb21tYW5kc1xuICBjb25zdCBnY3BDb21tYW5kc1NvdXJjZXMgPSBnZXRHY3BDb21tYW5kc1NvdXJjZXMoKVxuICBjb25zdCBoYXNHY3BDb21tYW5kcyA9IGdjcENvbW1hbmRzU291cmNlcy5sZW5ndGggPiAwXG4gIC8vIENoZWNrIGZvciBvdGVsSGVhZGVyc0hlbHBlciB3aGljaCBleGVjdXRlcyBhcmJpdHJhcnkgY29tbWFuZHNcbiAgY29uc3Qgb3RlbEhlYWRlcnNIZWxwZXJTb3VyY2VzID0gZ2V0T3RlbEhlYWRlcnNIZWxwZXJTb3VyY2VzKClcbiAgY29uc3QgaGFzT3RlbEhlYWRlcnNIZWxwZXIgPSBvdGVsSGVhZGVyc0hlbHBlclNvdXJjZXMubGVuZ3RoID4gMFxuICAvLyBDaGVjayBmb3IgZGFuZ2Vyb3VzIGVudmlyb25tZW50IHZhcmlhYmxlcyAobm90IGluIFNBRkVfRU5WX1ZBUlMpXG4gIGNvbnN0IGRhbmdlcm91c0VudlZhcnNTb3VyY2VzID0gZ2V0RGFuZ2Vyb3VzRW52VmFyc1NvdXJjZXMoKVxuICBjb25zdCBoYXNEYW5nZXJvdXNFbnZWYXJzID0gZGFuZ2Vyb3VzRW52VmFyc1NvdXJjZXMubGVuZ3RoID4gMFxuXG4gIGNvbnN0IGhhc1NsYXNoQ29tbWFuZEJhc2ggPVxuICAgIGNvbW1hbmRzPy5zb21lKFxuICAgICAgY29tbWFuZCA9PlxuICAgICAgICBjb21tYW5kLnR5cGUgPT09ICdwcm9tcHQnICYmXG4gICAgICAgIGNvbW1hbmQubG9hZGVkRnJvbSA9PT0gJ2NvbW1hbmRzX0RFUFJFQ0FURUQnICYmXG4gICAgICAgIChjb21tYW5kLnNvdXJjZSA9PT0gJ3Byb2plY3RTZXR0aW5ncycgfHxcbiAgICAgICAgICBjb21tYW5kLnNvdXJjZSA9PT0gJ2xvY2FsU2V0dGluZ3MnKSAmJlxuICAgICAgICBjb21tYW5kLmFsbG93ZWRUb29scz8uc29tZShcbiAgICAgICAgICAodG9vbDogc3RyaW5nKSA9PlxuICAgICAgICAgICAgdG9vbCA9PT0gQkFTSF9UT09MX05BTUUgfHwgdG9vbC5zdGFydHNXaXRoKEJBU0hfVE9PTF9OQU1FICsgJygnKSxcbiAgICAgICAgKSxcbiAgICApID8/IGZhbHNlXG5cbiAgY29uc3QgaGFzU2tpbGxzQmFzaCA9XG4gICAgY29tbWFuZHM/LnNvbWUoXG4gICAgICBjb21tYW5kID0+XG4gICAgICAgIGNvbW1hbmQudHlwZSA9PT0gJ3Byb21wdCcgJiZcbiAgICAgICAgKGNvbW1hbmQubG9hZGVkRnJvbSA9PT0gJ3NraWxscycgfHwgY29tbWFuZC5sb2FkZWRGcm9tID09PSAncGx1Z2luJykgJiZcbiAgICAgICAgKGNvbW1hbmQuc291cmNlID09PSAncHJvamVjdFNldHRpbmdzJyB8fFxuICAgICAgICAgIGNvbW1hbmQuc291cmNlID09PSAnbG9jYWxTZXR0aW5ncycgfHxcbiAgICAgICAgICBjb21tYW5kLnNvdXJjZSA9PT0gJ3BsdWdpbicpICYmXG4gICAgICAgIGNvbW1hbmQuYWxsb3dlZFRvb2xzPy5zb21lKFxuICAgICAgICAgICh0b29sOiBzdHJpbmcpID0+XG4gICAgICAgICAgICB0b29sID09PSBCQVNIX1RPT0xfTkFNRSB8fCB0b29sLnN0YXJ0c1dpdGgoQkFTSF9UT09MX05BTUUgKyAnKCcpLFxuICAgICAgICApLFxuICAgICkgPz8gZmFsc2VcblxuICBjb25zdCBoYXNBbnlCYXNoRXhlY3V0aW9uID1cbiAgICBiYXNoU2V0dGluZ1NvdXJjZXMubGVuZ3RoID4gMCB8fCBoYXNTbGFzaENvbW1hbmRCYXNoIHx8IGhhc1NraWxsc0Jhc2hcblxuICBjb25zdCBoYXNUcnVzdERpYWxvZ0FjY2VwdGVkID0gY2hlY2tIYXNUcnVzdERpYWxvZ0FjY2VwdGVkKClcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGlzSG9tZURpciA9IGhvbWVkaXIoKSA9PT0gZ2V0Q3dkKClcbiAgICBsb2dFdmVudCgndGVuZ3VfdHJ1c3RfZGlhbG9nX3Nob3duJywge1xuICAgICAgaXNIb21lRGlyLFxuICAgICAgaGFzTWNwU2VydmVycyxcbiAgICAgIGhhc0hvb2tzLFxuICAgICAgaGFzQmFzaEV4ZWN1dGlvbjogaGFzQW55QmFzaEV4ZWN1dGlvbixcbiAgICAgIGhhc0FwaUtleUhlbHBlcixcbiAgICAgIGhhc0F3c0NvbW1hbmRzLFxuICAgICAgaGFzR2NwQ29tbWFuZHMsXG4gICAgICBoYXNPdGVsSGVhZGVyc0hlbHBlcixcbiAgICAgIGhhc0Rhbmdlcm91c0VudlZhcnMsXG4gICAgfSlcbiAgfSwgW1xuICAgIGhhc01jcFNlcnZlcnMsXG4gICAgaGFzSG9va3MsXG4gICAgaGFzQW55QmFzaEV4ZWN1dGlvbixcbiAgICBoYXNBcGlLZXlIZWxwZXIsXG4gICAgaGFzQXdzQ29tbWFuZHMsXG4gICAgaGFzR2NwQ29tbWFuZHMsXG4gICAgaGFzT3RlbEhlYWRlcnNIZWxwZXIsXG4gICAgaGFzRGFuZ2Vyb3VzRW52VmFycyxcbiAgXSlcblxuICBmdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZTogJ2VuYWJsZV9hbGwnIHwgJ2V4aXQnKSB7XG4gICAgaWYgKHZhbHVlID09PSAnZXhpdCcpIHtcbiAgICAgIGdyYWNlZnVsU2h1dGRvd25TeW5jKDEpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc0hvbWVEaXIgPSBob21lZGlyKCkgPT09IGdldEN3ZCgpXG5cbiAgICBsb2dFdmVudCgndGVuZ3VfdHJ1c3RfZGlhbG9nX2FjY2VwdCcsIHtcbiAgICAgIGlzSG9tZURpcixcbiAgICAgIGhhc01jcFNlcnZlcnMsXG4gICAgICBoYXNIb29rcyxcbiAgICAgIGhhc0Jhc2hFeGVjdXRpb246IGhhc0FueUJhc2hFeGVjdXRpb24sXG4gICAgICBoYXNBcGlLZXlIZWxwZXIsXG4gICAgICBoYXNBd3NDb21tYW5kcyxcbiAgICAgIGhhc0djcENvbW1hbmRzLFxuICAgICAgaGFzT3RlbEhlYWRlcnNIZWxwZXIsXG4gICAgICBoYXNEYW5nZXJvdXNFbnZWYXJzLFxuICAgIH0pXG5cbiAgICBpZiAoaXNIb21lRGlyKSB7XG4gICAgICAvLyBGb3IgaG9tZSBkaXJlY3RvcnksIHN0b3JlIHRydXN0IGluIHNlc3Npb24gbWVtb3J5IG9ubHkgKG5vdCBwZXJzaXN0ZWQgdG8gZGlzaylcbiAgICAgIC8vIFRoaXMgYWxsb3dzIGhvb2tzIGFuZCBvdGhlciB0cnVzdC1yZXF1aXJpbmcgZmVhdHVyZXMgdG8gd29yayBkdXJpbmcgdGhpcyBzZXNzaW9uXG4gICAgICAvLyB3aGlsZSBwcmVzZXJ2aW5nIHRoZSBzZWN1cml0eSBpbnRlbnQgb2Ygbm90IHBlcm1hbmVudGx5IHRydXN0aW5nIGhvbWUgZGlyXG4gICAgICBzZXRTZXNzaW9uVHJ1c3RBY2NlcHRlZCh0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBzYXZlQ3VycmVudFByb2plY3RDb25maWcoY3VycmVudCA9PiAoe1xuICAgICAgICAuLi5jdXJyZW50LFxuICAgICAgICBoYXNUcnVzdERpYWxvZ0FjY2VwdGVkOiB0cnVlLFxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgLy8gRG8gTk9UIHdyaXRlIE1DUCBzZXJ2ZXIgc2V0dGluZ3MgaGVyZS4gaGFuZGxlTWNwanNvblNlcnZlckFwcHJvdmFscyBpblxuICAgIC8vIGludGVyYWN0aXZlSGVscGVycy50c3ggcnVucyByaWdodCBhZnRlciB0aGlzIGRpYWxvZyBhbmQgc2hvd3MgdGhlIHBlci1zZXJ2ZXIgYXBwcm92YWxcbiAgICAvLyBVSS4gV3JpdGluZyBlbmFibGVkTWNwanNvblNlcnZlcnMvZW5hYmxlQWxsUHJvamVjdE1jcFNlcnZlcnMgaGVyZSB3b3VsZFxuICAgIC8vIG1hcmsgZXZlcnkgc2VydmVyICdhcHByb3ZlZCcgYW5kIHNpbGVudGx5IHNraXAgdGhhdCBkaWFsb2cuIFNlZSAjMTU1NTguXG5cbiAgICBvbkRvbmUoKVxuICB9XG5cbiAgLy8gRGVmYXVsdCBvbkV4aXQgaXMgdXNlQXBwKCkuZXhpdCgpIOKGkiBJbmsudW5tb3VudCgpLCB3aGljaCB0ZWFycyBkb3duIHRoZVxuICAvLyBSZWFjdCB0cmVlIGJ1dCBuZXZlciBjYWxscyBvbkRvbmUoKS4gc2hvd1NldHVwU2NyZWVucygpIGluXG4gIC8vIGludGVyYWN0aXZlSGVscGVycy50c3ggYXdhaXRzIGEgUHJvbWlzZSB0aGF0IG9ubHkgcmVzb2x2ZXMgdmlhIG9uRG9uZSxcbiAgLy8gc28gdGhlIGRlZmF1bHQgd291bGQgaGFuZyB0aGUgYXdhaXQgZm9yZXZlci4gV2l0aCBrZXliaW5kaW5nXG4gIC8vIGN1c3RvbWl6YXRpb24gZW5hYmxlZCwgdGhlIGNob2tpZGFyIHdhdGNoZXIgKHBlcnNpc3RlbnQ6IHRydWUpIGtlZXBzIHRoZVxuICAvLyBldmVudCBsb29wIGFsaXZlIGFuZCB0aGUgcHJvY2VzcyBmcmVlemVzLiBFeHBsaWNpdGx5IGV4aXQgMSBsaWtlIFwiTm9cIi5cbiAgY29uc3QgZXhpdFN0YXRlID0gdXNlRXhpdE9uQ3RybENEV2l0aEtleWJpbmRpbmdzKCgpID0+XG4gICAgZ3JhY2VmdWxTaHV0ZG93blN5bmMoMSksXG4gIClcblxuICAvLyBVc2UgY29uZmlndXJhYmxlIGtleWJpbmRpbmcgZm9yIEVTQyB0byBjYW5jZWwvZXhpdFxuICB1c2VLZXliaW5kaW5nKFxuICAgICdjb25maXJtOm5vJyxcbiAgICAoKSA9PiB7XG4gICAgICBncmFjZWZ1bFNodXRkb3duU3luYygwKVxuICAgIH0sXG4gICAgeyBjb250ZXh0OiAnQ29uZmlybWF0aW9uJyB9LFxuICApXG5cbiAgLy8gQXV0b21hdGljYWxseSByZXNvbHZlIHRoZSB0cnVzdCBkaWFsb2cgaWYgdGhlcmUgaXMgbm90aGluZyB0byBiZSBzaG93bi5cbiAgaWYgKGhhc1RydXN0RGlhbG9nQWNjZXB0ZWQpIHtcbiAgICBzZXRUaW1lb3V0KG9uRG9uZSlcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UGVybWlzc2lvbkRpYWxvZ1xuICAgICAgY29sb3I9XCJ3YXJuaW5nXCJcbiAgICAgIHRpdGxlQ29sb3I9XCJ3YXJuaW5nXCJcbiAgICAgIHRpdGxlPVwiQWNjZXNzaW5nIHdvcmtzcGFjZTpcIlxuICAgID5cbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGdhcD17MX0gcGFkZGluZ1RvcD17MX0+XG4gICAgICAgIDxUZXh0IGJvbGQ+e2dldEZzSW1wbGVtZW50YXRpb24oKS5jd2QoKX08L1RleHQ+XG5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgUXVpY2sgc2FmZXR5IGNoZWNrOiBJcyB0aGlzIGEgcHJvamVjdCB5b3UgY3JlYXRlZCBvciBvbmUgeW91IHRydXN0P1xuICAgICAgICAgIChMaWtlIHlvdXIgb3duIGNvZGUsIGEgd2VsbC1rbm93biBvcGVuIHNvdXJjZSBwcm9qZWN0LCBvciB3b3JrIGZyb21cbiAgICAgICAgICB5b3VyIHRlYW0pLiBJZiBub3QsIHRha2UgYSBtb21lbnQgdG8gcmV2aWV3IHdoYXR7XCInXCJ9cyBpbiB0aGlzIGZvbGRlclxuICAgICAgICAgIGZpcnN0LlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIENsYXVkZSBDb2Rle1wiJ1wifWxsIGJlIGFibGUgdG8gcmVhZCwgZWRpdCwgYW5kIGV4ZWN1dGUgZmlsZXMgaGVyZS5cbiAgICAgICAgPC9UZXh0PlxuXG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgIDxMaW5rIHVybD1cImh0dHBzOi8vY29kZS5jbGF1ZGUuY29tL2RvY3MvZW4vc2VjdXJpdHlcIj5cbiAgICAgICAgICAgIFNlY3VyaXR5IGd1aWRlXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L1RleHQ+XG5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAgIHsgbGFiZWw6ICdZZXMsIEkgdHJ1c3QgdGhpcyBmb2xkZXInLCB2YWx1ZTogJ2VuYWJsZV9hbGwnIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiAnTm8sIGV4aXQnLCB2YWx1ZTogJ2V4aXQnIH0sXG4gICAgICAgICAgXX1cbiAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gb25DaGFuZ2UodmFsdWUgYXMgJ2VuYWJsZV9hbGwnIHwgJ2V4aXQnKX1cbiAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gb25DaGFuZ2UoJ2V4aXQnKX1cbiAgICAgICAgLz5cblxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICB7ZXhpdFN0YXRlLnBlbmRpbmcgPyAoXG4gICAgICAgICAgICA8PlByZXNzIHtleGl0U3RhdGUua2V5TmFtZX0gYWdhaW4gdG8gZXhpdDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8PkVudGVyIHRvIGNvbmZpcm0gwrcgRXNjIHRvIGNhbmNlbDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIDwvUGVybWlzc2lvbkRpYWxvZz5cbiAgKVxufVxuIiwgImltcG9ydCB0eXBlIHsgUGVybWlzc2lvblJ1bGUgfSBmcm9tICdzcmMvdXRpbHMvcGVybWlzc2lvbnMvUGVybWlzc2lvblJ1bGUuanMnXG5pbXBvcnQgeyBnZXRTZXR0aW5nc0ZvclNvdXJjZSB9IGZyb20gJ3NyYy91dGlscy9zZXR0aW5ncy9zZXR0aW5ncy5qcydcbmltcG9ydCB0eXBlIHsgU2V0dGluZ3NKc29uIH0gZnJvbSAnc3JjL3V0aWxzL3NldHRpbmdzL3R5cGVzLmpzJ1xuaW1wb3J0IHsgQkFTSF9UT09MX05BTUUgfSBmcm9tICcuLi8uLi90b29scy9CYXNoVG9vbC90b29sTmFtZS5qcydcbmltcG9ydCB7IFNBRkVfRU5WX1ZBUlMgfSBmcm9tICcuLi8uLi91dGlscy9tYW5hZ2VkRW52Q29uc3RhbnRzLmpzJ1xuaW1wb3J0IHsgZ2V0UGVybWlzc2lvblJ1bGVzRm9yU291cmNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcGVybWlzc2lvbnMvcGVybWlzc2lvbnNMb2FkZXIuanMnXG5cbmZ1bmN0aW9uIGhhc0hvb2tzKHNldHRpbmdzOiBTZXR0aW5nc0pzb24gfCBudWxsKTogYm9vbGVhbiB7XG4gIGlmIChzZXR0aW5ncyA9PT0gbnVsbCB8fCBzZXR0aW5ncy5kaXNhYmxlQWxsSG9va3MpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBpZiAoc2V0dGluZ3Muc3RhdHVzTGluZSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgaWYgKHNldHRpbmdzLmZpbGVTdWdnZXN0aW9uKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICBpZiAoIXNldHRpbmdzLmhvb2tzKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgZm9yIChjb25zdCBob29rQ29uZmlnIG9mIE9iamVjdC52YWx1ZXMoc2V0dGluZ3MuaG9va3MpKSB7XG4gICAgaWYgKGhvb2tDb25maWcubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRIb29rc1NvdXJjZXMoKTogc3RyaW5nW10ge1xuICBjb25zdCBzb3VyY2VzOiBzdHJpbmdbXSA9IFtdXG5cbiAgY29uc3QgcHJvamVjdFNldHRpbmdzID0gZ2V0U2V0dGluZ3NGb3JTb3VyY2UoJ3Byb2plY3RTZXR0aW5ncycpXG4gIGlmIChoYXNIb29rcyhwcm9qZWN0U2V0dGluZ3MpKSB7XG4gICAgc291cmNlcy5wdXNoKCcuY2xhdWRlL3NldHRpbmdzLmpzb24nKVxuICB9XG5cbiAgY29uc3QgbG9jYWxTZXR0aW5ncyA9IGdldFNldHRpbmdzRm9yU291cmNlKCdsb2NhbFNldHRpbmdzJylcbiAgaWYgKGhhc0hvb2tzKGxvY2FsU2V0dGluZ3MpKSB7XG4gICAgc291cmNlcy5wdXNoKCcuY2xhdWRlL3NldHRpbmdzLmxvY2FsLmpzb24nKVxuICB9XG5cbiAgcmV0dXJuIHNvdXJjZXNcbn1cblxuZnVuY3Rpb24gaGFzQmFzaFBlcm1pc3Npb24ocnVsZXM6IFBlcm1pc3Npb25SdWxlW10pOiBib29sZWFuIHtcbiAgcmV0dXJuIHJ1bGVzLnNvbWUoXG4gICAgcnVsZSA9PlxuICAgICAgcnVsZS5ydWxlQmVoYXZpb3IgPT09ICdhbGxvdycgJiZcbiAgICAgIChydWxlLnJ1bGVWYWx1ZS50b29sTmFtZSA9PT0gQkFTSF9UT09MX05BTUUgfHxcbiAgICAgICAgcnVsZS5ydWxlVmFsdWUudG9vbE5hbWUuc3RhcnRzV2l0aChCQVNIX1RPT0xfTkFNRSArICcoJykpLFxuICApXG59XG5cbi8qKlxuICogR2V0IHdoaWNoIHNldHRpbmcgc291cmNlcyBoYXZlIGJhc2ggYWxsb3cgcnVsZXMuXG4gKiBSZXR1cm5zIGFuIGFycmF5IG9mIGZpbGUgcGF0aHMgdGhhdCBoYXZlIGJhc2ggcGVybWlzc2lvbnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRCYXNoUGVybWlzc2lvblNvdXJjZXMoKTogc3RyaW5nW10ge1xuICBjb25zdCBzb3VyY2VzOiBzdHJpbmdbXSA9IFtdXG5cbiAgY29uc3QgcHJvamVjdFJ1bGVzID0gZ2V0UGVybWlzc2lvblJ1bGVzRm9yU291cmNlKCdwcm9qZWN0U2V0dGluZ3MnKVxuICBpZiAoaGFzQmFzaFBlcm1pc3Npb24ocHJvamVjdFJ1bGVzKSkge1xuICAgIHNvdXJjZXMucHVzaCgnLmNsYXVkZS9zZXR0aW5ncy5qc29uJylcbiAgfVxuXG4gIGNvbnN0IGxvY2FsUnVsZXMgPSBnZXRQZXJtaXNzaW9uUnVsZXNGb3JTb3VyY2UoJ2xvY2FsU2V0dGluZ3MnKVxuICBpZiAoaGFzQmFzaFBlcm1pc3Npb24obG9jYWxSdWxlcykpIHtcbiAgICBzb3VyY2VzLnB1c2goJy5jbGF1ZGUvc2V0dGluZ3MubG9jYWwuanNvbicpXG4gIH1cblxuICByZXR1cm4gc291cmNlc1xufVxuXG4vKipcbiAqIEZvcm1hdCBhIGxpc3Qgb2YgaXRlbXMgd2l0aCBwcm9wZXIgXCJhbmRcIiBjb25qdW5jdGlvbi5cbiAqIEBwYXJhbSBpdGVtcyAtIEFycmF5IG9mIGl0ZW1zIHRvIGZvcm1hdFxuICogQHBhcmFtIGxpbWl0IC0gT3B0aW9uYWwgbGltaXQgZm9yIGhvdyBtYW55IGl0ZW1zIHRvIHNob3cgYmVmb3JlIHN1bW1hcml6aW5nIChpZ25vcmVkIGlmIDApXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRMaXN0V2l0aEFuZChpdGVtczogc3RyaW5nW10sIGxpbWl0PzogbnVtYmVyKTogc3RyaW5nIHtcbiAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcnXG5cbiAgLy8gSWdub3JlIGxpbWl0IGlmIGl0J3MgMFxuICBjb25zdCBlZmZlY3RpdmVMaW1pdCA9IGxpbWl0ID09PSAwID8gdW5kZWZpbmVkIDogbGltaXRcblxuICAvLyBJZiBubyBsaW1pdCBvciBpdGVtcyBhcmUgd2l0aGluIGxpbWl0LCB1c2Ugbm9ybWFsIGZvcm1hdHRpbmdcbiAgaWYgKCFlZmZlY3RpdmVMaW1pdCB8fCBpdGVtcy5sZW5ndGggPD0gZWZmZWN0aXZlTGltaXQpIHtcbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAxKSByZXR1cm4gaXRlbXNbMF0hXG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMikgcmV0dXJuIGAke2l0ZW1zWzBdfSBhbmQgJHtpdGVtc1sxXX1gXG5cbiAgICBjb25zdCBsYXN0SXRlbSA9IGl0ZW1zW2l0ZW1zLmxlbmd0aCAtIDFdIVxuICAgIGNvbnN0IGFsbEJ1dExhc3QgPSBpdGVtcy5zbGljZSgwLCAtMSlcbiAgICByZXR1cm4gYCR7YWxsQnV0TGFzdC5qb2luKCcsICcpfSwgYW5kICR7bGFzdEl0ZW19YFxuICB9XG5cbiAgLy8gSWYgd2UgaGF2ZSBtb3JlIGl0ZW1zIHRoYW4gdGhlIGxpbWl0LCBzaG93IGZpcnN0IGZldyBhbmQgY291bnQgdGhlIHJlc3RcbiAgY29uc3Qgc2hvd24gPSBpdGVtcy5zbGljZSgwLCBlZmZlY3RpdmVMaW1pdClcbiAgY29uc3QgcmVtYWluaW5nID0gaXRlbXMubGVuZ3RoIC0gZWZmZWN0aXZlTGltaXRcblxuICBpZiAoc2hvd24ubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGAke3Nob3duWzBdfSBhbmQgJHtyZW1haW5pbmd9IG1vcmVgXG4gIH1cblxuICByZXR1cm4gYCR7c2hvd24uam9pbignLCAnKX0sIGFuZCAke3JlbWFpbmluZ30gbW9yZWBcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBzZXR0aW5ncyBoYXZlIG90ZWxIZWFkZXJzSGVscGVyIGNvbmZpZ3VyZWRcbiAqL1xuZnVuY3Rpb24gaGFzT3RlbEhlYWRlcnNIZWxwZXIoc2V0dGluZ3M6IFNldHRpbmdzSnNvbiB8IG51bGwpOiBib29sZWFuIHtcbiAgcmV0dXJuICEhc2V0dGluZ3M/Lm90ZWxIZWFkZXJzSGVscGVyXG59XG5cbi8qKlxuICogR2V0IHdoaWNoIHNldHRpbmcgc291cmNlcyBoYXZlIG90ZWxIZWFkZXJzSGVscGVyIGNvbmZpZ3VyZWQuXG4gKiBSZXR1cm5zIGFuIGFycmF5IG9mIGZpbGUgcGF0aHMgdGhhdCBoYXZlIG90ZWxIZWFkZXJzSGVscGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3RlbEhlYWRlcnNIZWxwZXJTb3VyY2VzKCk6IHN0cmluZ1tdIHtcbiAgY29uc3Qgc291cmNlczogc3RyaW5nW10gPSBbXVxuXG4gIGNvbnN0IHByb2plY3RTZXR0aW5ncyA9IGdldFNldHRpbmdzRm9yU291cmNlKCdwcm9qZWN0U2V0dGluZ3MnKVxuICBpZiAoaGFzT3RlbEhlYWRlcnNIZWxwZXIocHJvamVjdFNldHRpbmdzKSkge1xuICAgIHNvdXJjZXMucHVzaCgnLmNsYXVkZS9zZXR0aW5ncy5qc29uJylcbiAgfVxuXG4gIGNvbnN0IGxvY2FsU2V0dGluZ3MgPSBnZXRTZXR0aW5nc0ZvclNvdXJjZSgnbG9jYWxTZXR0aW5ncycpXG4gIGlmIChoYXNPdGVsSGVhZGVyc0hlbHBlcihsb2NhbFNldHRpbmdzKSkge1xuICAgIHNvdXJjZXMucHVzaCgnLmNsYXVkZS9zZXR0aW5ncy5sb2NhbC5qc29uJylcbiAgfVxuXG4gIHJldHVybiBzb3VyY2VzXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgc2V0dGluZ3MgaGF2ZSBhcGlLZXlIZWxwZXIgY29uZmlndXJlZFxuICovXG5mdW5jdGlvbiBoYXNBcGlLZXlIZWxwZXIoc2V0dGluZ3M6IFNldHRpbmdzSnNvbiB8IG51bGwpOiBib29sZWFuIHtcbiAgcmV0dXJuICEhc2V0dGluZ3M/LmFwaUtleUhlbHBlclxufVxuXG4vKipcbiAqIEdldCB3aGljaCBzZXR0aW5nIHNvdXJjZXMgaGF2ZSBhcGlLZXlIZWxwZXIgY29uZmlndXJlZC5cbiAqIFJldHVybnMgYW4gYXJyYXkgb2YgZmlsZSBwYXRocyB0aGF0IGhhdmUgYXBpS2V5SGVscGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXBpS2V5SGVscGVyU291cmNlcygpOiBzdHJpbmdbXSB7XG4gIGNvbnN0IHNvdXJjZXM6IHN0cmluZ1tdID0gW11cblxuICBjb25zdCBwcm9qZWN0U2V0dGluZ3MgPSBnZXRTZXR0aW5nc0ZvclNvdXJjZSgncHJvamVjdFNldHRpbmdzJylcbiAgaWYgKGhhc0FwaUtleUhlbHBlcihwcm9qZWN0U2V0dGluZ3MpKSB7XG4gICAgc291cmNlcy5wdXNoKCcuY2xhdWRlL3NldHRpbmdzLmpzb24nKVxuICB9XG5cbiAgY29uc3QgbG9jYWxTZXR0aW5ncyA9IGdldFNldHRpbmdzRm9yU291cmNlKCdsb2NhbFNldHRpbmdzJylcbiAgaWYgKGhhc0FwaUtleUhlbHBlcihsb2NhbFNldHRpbmdzKSkge1xuICAgIHNvdXJjZXMucHVzaCgnLmNsYXVkZS9zZXR0aW5ncy5sb2NhbC5qc29uJylcbiAgfVxuXG4gIHJldHVybiBzb3VyY2VzXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgc2V0dGluZ3MgaGF2ZSBBV1MgY29tbWFuZHMgY29uZmlndXJlZFxuICovXG5mdW5jdGlvbiBoYXNBd3NDb21tYW5kcyhzZXR0aW5nczogU2V0dGluZ3NKc29uIHwgbnVsbCk6IGJvb2xlYW4ge1xuICByZXR1cm4gISEoc2V0dGluZ3M/LmF3c0F1dGhSZWZyZXNoIHx8IHNldHRpbmdzPy5hd3NDcmVkZW50aWFsRXhwb3J0KVxufVxuXG4vKipcbiAqIEdldCB3aGljaCBzZXR0aW5nIHNvdXJjZXMgaGF2ZSBBV1MgY29tbWFuZHMgY29uZmlndXJlZC5cbiAqIFJldHVybnMgYW4gYXJyYXkgb2YgZmlsZSBwYXRocyB0aGF0IGhhdmUgYXdzQXV0aFJlZnJlc2ggb3IgYXdzQ3JlZGVudGlhbEV4cG9ydC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEF3c0NvbW1hbmRzU291cmNlcygpOiBzdHJpbmdbXSB7XG4gIGNvbnN0IHNvdXJjZXM6IHN0cmluZ1tdID0gW11cblxuICBjb25zdCBwcm9qZWN0U2V0dGluZ3MgPSBnZXRTZXR0aW5nc0ZvclNvdXJjZSgncHJvamVjdFNldHRpbmdzJylcbiAgaWYgKGhhc0F3c0NvbW1hbmRzKHByb2plY3RTZXR0aW5ncykpIHtcbiAgICBzb3VyY2VzLnB1c2goJy5jbGF1ZGUvc2V0dGluZ3MuanNvbicpXG4gIH1cblxuICBjb25zdCBsb2NhbFNldHRpbmdzID0gZ2V0U2V0dGluZ3NGb3JTb3VyY2UoJ2xvY2FsU2V0dGluZ3MnKVxuICBpZiAoaGFzQXdzQ29tbWFuZHMobG9jYWxTZXR0aW5ncykpIHtcbiAgICBzb3VyY2VzLnB1c2goJy5jbGF1ZGUvc2V0dGluZ3MubG9jYWwuanNvbicpXG4gIH1cblxuICByZXR1cm4gc291cmNlc1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHNldHRpbmdzIGhhdmUgR0NQIGNvbW1hbmRzIGNvbmZpZ3VyZWRcbiAqL1xuZnVuY3Rpb24gaGFzR2NwQ29tbWFuZHMoc2V0dGluZ3M6IFNldHRpbmdzSnNvbiB8IG51bGwpOiBib29sZWFuIHtcbiAgcmV0dXJuICEhc2V0dGluZ3M/LmdjcEF1dGhSZWZyZXNoXG59XG5cbi8qKlxuICogR2V0IHdoaWNoIHNldHRpbmcgc291cmNlcyBoYXZlIEdDUCBjb21tYW5kcyBjb25maWd1cmVkLlxuICogUmV0dXJucyBhbiBhcnJheSBvZiBmaWxlIHBhdGhzIHRoYXQgaGF2ZSBnY3BBdXRoUmVmcmVzaC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEdjcENvbW1hbmRzU291cmNlcygpOiBzdHJpbmdbXSB7XG4gIGNvbnN0IHNvdXJjZXM6IHN0cmluZ1tdID0gW11cblxuICBjb25zdCBwcm9qZWN0U2V0dGluZ3MgPSBnZXRTZXR0aW5nc0ZvclNvdXJjZSgncHJvamVjdFNldHRpbmdzJylcbiAgaWYgKGhhc0djcENvbW1hbmRzKHByb2plY3RTZXR0aW5ncykpIHtcbiAgICBzb3VyY2VzLnB1c2goJy5jbGF1ZGUvc2V0dGluZ3MuanNvbicpXG4gIH1cblxuICBjb25zdCBsb2NhbFNldHRpbmdzID0gZ2V0U2V0dGluZ3NGb3JTb3VyY2UoJ2xvY2FsU2V0dGluZ3MnKVxuICBpZiAoaGFzR2NwQ29tbWFuZHMobG9jYWxTZXR0aW5ncykpIHtcbiAgICBzb3VyY2VzLnB1c2goJy5jbGF1ZGUvc2V0dGluZ3MubG9jYWwuanNvbicpXG4gIH1cblxuICByZXR1cm4gc291cmNlc1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHNldHRpbmdzIGhhdmUgZGFuZ2Vyb3VzIGVudmlyb25tZW50IHZhcmlhYmxlcyBjb25maWd1cmVkLlxuICogQW55IGVudiB2YXIgTk9UIGluIFNBRkVfRU5WX1ZBUlMgaXMgY29uc2lkZXJlZCBkYW5nZXJvdXMuXG4gKi9cbmZ1bmN0aW9uIGhhc0Rhbmdlcm91c0VudlZhcnMoc2V0dGluZ3M6IFNldHRpbmdzSnNvbiB8IG51bGwpOiBib29sZWFuIHtcbiAgaWYgKCFzZXR0aW5ncz8uZW52KSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIE9iamVjdC5rZXlzKHNldHRpbmdzLmVudikuc29tZShcbiAgICBrZXkgPT4gIVNBRkVfRU5WX1ZBUlMuaGFzKGtleS50b1VwcGVyQ2FzZSgpKSxcbiAgKVxufVxuXG4vKipcbiAqIEdldCB3aGljaCBzZXR0aW5nIHNvdXJjZXMgaGF2ZSBkYW5nZXJvdXMgZW52aXJvbm1lbnQgdmFyaWFibGVzIGNvbmZpZ3VyZWQuXG4gKiBSZXR1cm5zIGFuIGFycmF5IG9mIGZpbGUgcGF0aHMgdGhhdCBoYXZlIGVudiB2YXJzIG5vdCBpbiBTQUZFX0VOVl9WQVJTLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGFuZ2Vyb3VzRW52VmFyc1NvdXJjZXMoKTogc3RyaW5nW10ge1xuICBjb25zdCBzb3VyY2VzOiBzdHJpbmdbXSA9IFtdXG5cbiAgY29uc3QgcHJvamVjdFNldHRpbmdzID0gZ2V0U2V0dGluZ3NGb3JTb3VyY2UoJ3Byb2plY3RTZXR0aW5ncycpXG4gIGlmIChoYXNEYW5nZXJvdXNFbnZWYXJzKHByb2plY3RTZXR0aW5ncykpIHtcbiAgICBzb3VyY2VzLnB1c2goJy5jbGF1ZGUvc2V0dGluZ3MuanNvbicpXG4gIH1cblxuICBjb25zdCBsb2NhbFNldHRpbmdzID0gZ2V0U2V0dGluZ3NGb3JTb3VyY2UoJ2xvY2FsU2V0dGluZ3MnKVxuICBpZiAoaGFzRGFuZ2Vyb3VzRW52VmFycyhsb2NhbFNldHRpbmdzKSkge1xuICAgIHNvdXJjZXMucHVzaCgnLmNsYXVkZS9zZXR0aW5ncy5sb2NhbC5qc29uJylcbiAgfVxuXG4gIHJldHVybiBzb3VyY2VzXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBLFNBQVNDLGVBQWU7OztBQ0N4QjtBQUVBO0FBQ0E7QUFDQTtBQUVBLFNBQVMsU0FBUyxVQUF3QztBQUN4RCxNQUFJLGFBQWEsUUFBUSxTQUFTLGlCQUFpQjtBQUNqRCxXQUFPO0FBQUEsRUFDVDtBQUNBLE1BQUksU0FBUyxZQUFZO0FBQ3ZCLFdBQU87QUFBQSxFQUNUO0FBQ0EsTUFBSSxTQUFTLGdCQUFnQjtBQUMzQixXQUFPO0FBQUEsRUFDVDtBQUNBLE1BQUksQ0FBQyxTQUFTLE9BQU87QUFDbkIsV0FBTztBQUFBLEVBQ1Q7QUFDQSxhQUFXLGNBQWMsT0FBTyxPQUFPLFNBQVMsS0FBSyxHQUFHO0FBQ3RELFFBQUksV0FBVyxTQUFTLEdBQUc7QUFDekIsYUFBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQ0EsU0FBTztBQUNUO0FBRU8sU0FBUyxrQkFBNEI7QUFDMUMsUUFBTSxVQUFvQixDQUFDO0FBRTNCLFFBQU0sa0JBQWtCLHFCQUFxQixpQkFBaUI7QUFD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RixDQUNGO0FBQW1CdkYsTUFBQSxFQUFBLElBQUFxRjtBQUFBckYsTUFBQSxFQUFBLElBQUF1RjtBQUFBdkYsTUFBQSxFQUFBLElBQUEwRjtFQUFBLE9BQUE7QUFBQUEsVUFBQTFGLEVBQUEsRUFBQTtFQUFBO0FBQUEsU0F6Q25CMEY7QUF5Q21CO0FBak1oQixTQUFBZixTQUFBO0FBNElEWCx1QkFBcUIsQ0FBQztBQUFDO0FBNUl0QixTQUFBTyxTQUFBO0FBQUEsU0FxSUhQLHFCQUFxQixDQUFDO0FBQUM7QUFySXBCLFNBQUFJLE9BQUF1QixTQUFBO0FBQUEsU0FnSG9DO0lBQUEsR0FDaENBO0lBQU96Qyx3QkFDYztFQUMxQjtBQUFDO0FBbkhBLFNBQUFILE9BQUE2QyxXQUFBO0FBQUEsU0E4Q0NDLFVBQU9DLFNBQVUsYUFDaEJELFVBQU9FLGVBQWdCLFlBQVlGLFVBQU9FLGVBQWdCLGNBQzFERixVQUFPRyxXQUFZLHFCQUNsQkgsVUFBT0csV0FBWSxtQkFDbkJILFVBQU9HLFdBQVksYUFDckJILFVBQU9JLGNBQW1CdEQsS0FDeEJ1RCxNQUVGO0FBQUM7QUF0REYsU0FBQUEsT0FBQUMsUUFBQTtBQUFBLFNBcURLQyxXQUFTQyxrQkFBa0JELE9BQUlFLFdBQVlELGlCQUFpQixHQUFHO0FBQUM7QUFyRHJFLFNBQUF6RCxPQUFBaUQsU0FBQTtBQUFBLFNBaUNDQSxRQUFPQyxTQUFVLFlBQ2pCRCxRQUFPRSxlQUFnQiwwQkFDdEJGLFFBQU9HLFdBQVkscUJBQ2xCSCxRQUFPRyxXQUFZLG9CQUNyQkgsUUFBT0ksY0FBbUJ0RCxLQUN4QjRELEtBRUY7QUFBQztBQXhDRixTQUFBQSxNQUFBSCxNQUFBO0FBQUEsU0F1Q0tBLFNBQVNDLGtCQUFrQkQsS0FBSUUsV0FBWUQsaUJBQWlCLEdBQUc7QUFBQzsiLAogICJuYW1lcyI6IFsiaW5pdF9jb25maWciLCAiaG9tZWRpciIsICJUcnVzdERpYWxvZyIsICJ0MCIsICIkIiwgIl9jIiwgIm9uRG9uZSIsICJjb21tYW5kcyIsICJ0MSIsICJTeW1ib2wiLCAiZm9yIiwgImdldE1jcENvbmZpZ3NCeVNjb3BlIiwgInNlcnZlcnMiLCAicHJvamVjdFNlcnZlcnMiLCAidDIiLCAiT2JqZWN0IiwgImtleXMiLCAiaGFzTWNwU2VydmVycyIsICJsZW5ndGgiLCAidDMiLCAiZ2V0SG9va3NTb3VyY2VzIiwgImhvb2tzU2V0dGluZ1NvdXJjZXMiLCAiaGFzSG9va3MiLCAidDQiLCAiZ2V0QmFzaFBlcm1pc3Npb25Tb3VyY2VzIiwgImJhc2hTZXR0aW5nU291cmNlcyIsICJ0NSIsICJnZXRBcGlLZXlIZWxwZXJTb3VyY2VzIiwgImFwaUtleUhlbHBlclNvdXJjZXMiLCAiaGFzQXBpS2V5SGVscGVyIiwgInQ2IiwgImdldEF3c0NvbW1hbmRzU291cmNlcyIsICJhd3NDb21tYW5kc1NvdXJjZXMiLCAiaGFzQXdzQ29tbWFuZHMiLCAidDciLCAiZ2V0R2NwQ29tbWFuZHNTb3VyY2VzIiwgImdjcENvbW1hbmRzU291cmNlcyIsICJoYXNHY3BDb21tYW5kcyIsICJ0OCIsICJnZXRPdGVsSGVhZGVyc0hlbHBlclNvdXJjZXMiLCAib3RlbEhlYWRlcnNIZWxwZXJTb3VyY2VzIiwgImhhc090ZWxIZWFkZXJzSGVscGVyIiwgInQ5IiwgImdldERhbmdlcm91c0VudlZhcnNTb3VyY2VzIiwgImRhbmdlcm91c0VudlZhcnNTb3VyY2VzIiwgImhhc0Rhbmdlcm91c0VudlZhcnMiLCAidDEwIiwgInNvbWUiLCAiX3RlbXAyIiwgImhhc1NsYXNoQ29tbWFuZEJhc2giLCAidDExIiwgIl90ZW1wNCIsICJoYXNTa2lsbHNCYXNoIiwgImhhc0FueUJhc2hFeGVjdXRpb24iLCAiaGFzVHJ1c3REaWFsb2dBY2NlcHRlZCIsICJjaGVja0hhc1RydXN0RGlhbG9nQWNjZXB0ZWQiLCAidDEyIiwgInQxMyIsICJpc0hvbWVEaXIiLCAiaG9tZWRpciIsICJnZXRDd2QiLCAibG9nRXZlbnQiLCAiaGFzQmFzaEV4ZWN1dGlvbiIsICJSZWFjdCIsICJ1c2VFZmZlY3QiLCAidDE0IiwgIm9uQ2hhbmdlIiwgInZhbHVlIiwgImdyYWNlZnVsU2h1dGRvd25TeW5jIiwgImlzSG9tZURpcl8wIiwgInNldFNlc3Npb25UcnVzdEFjY2VwdGVkIiwgInNhdmVDdXJyZW50UHJvamVjdENvbmZpZyIsICJfdGVtcDUiLCAiZXhpdFN0YXRlIiwgInVzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncyIsICJfdGVtcDYiLCAidDE1IiwgImNvbnRleHQiLCAidXNlS2V5YmluZGluZyIsICJfdGVtcDciLCAic2V0VGltZW91dCIsICJ0MTYiLCAidDE3IiwgInQxOCIsICJnZXRGc0ltcGxlbWVudGF0aW9uIiwgImN3ZCIsICJ0MTkiLCAidDIwIiwgImxhYmVsIiwgInQyMSIsICJ2YWx1ZV8wIiwgInQyMiIsICJrZXlOYW1lIiwgInBlbmRpbmciLCAidDIzIiwgImN1cnJlbnQiLCAiY29tbWFuZF8wIiwgImNvbW1hbmQiLCAidHlwZSIsICJsb2FkZWRGcm9tIiwgInNvdXJjZSIsICJhbGxvd2VkVG9vbHMiLCAiX3RlbXAzIiwgInRvb2xfMCIsICJ0b29sIiwgIkJBU0hfVE9PTF9OQU1FIiwgInN0YXJ0c1dpdGgiLCAiX3RlbXAiXQp9Cg==
