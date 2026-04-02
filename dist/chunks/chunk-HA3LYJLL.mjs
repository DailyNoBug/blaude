#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  PressEnterToContinue,
  init_PressEnterToContinue
} from "./chunk-X6MTQX2F.mjs";
import {
  ValidationErrorsList,
  init_ValidationErrorsList
} from "./chunk-MHHYF4HJ.mjs";
import {
  init_useSettingsErrors,
  useSettingsErrors
} from "./chunk-HW73BUJX.mjs";
import {
  detectUnreachableRules,
  init_shadowedRuleDetection
} from "./chunk-4IKTVG5B.mjs";
import {
  McpParsingWarnings,
  init_McpParsingWarnings
} from "./chunk-TIGDBWKL.mjs";
import {
  AGENT_DESCRIPTIONS_THRESHOLD,
  getAgentDescriptionsTotalTokens,
  init_statusNoticeHelpers
} from "./chunk-KIQGQSDO.mjs";
import {
  BASH_MAX_OUTPUT_DEFAULT,
  BASH_MAX_OUTPUT_UPPER_LIMIT,
  MAX_MEMORY_CHARACTER_COUNT,
  SandboxManager,
  TASK_MAX_OUTPUT_DEFAULT,
  TASK_MAX_OUTPUT_UPPER_LIMIT,
  cleanupStaleLocks,
  countMcpToolTokens,
  getAllLockInfo,
  getCachedKeybindingWarnings,
  getDoctorDiagnostic,
  getGcsDistTags,
  getKeybindingsPath,
  getLargeMemoryFiles,
  getMemoryFiles,
  getNpmDistTags,
  getPluginErrorMessage,
  init_AppState,
  init_analyzeContext,
  init_autoUpdater,
  init_claudemd,
  init_doctorDiagnostic,
  init_envValidation,
  init_loadUserBindings,
  init_outputFormatting,
  init_outputLimits,
  init_pidLock,
  init_plugin,
  init_sandbox_adapter,
  init_tokenEstimation,
  isKeybindingCustomizationEnabled,
  isPidBasedLockingEnabled,
  roughTokenCountEstimation,
  useAppState,
  validateBoundedIntEnvVar
} from "./chunk-5INIV6TQ.mjs";
import {
  getXDGStateHome,
  init_xdg
} from "./chunk-PJK4KGGT.mjs";
import {
  init_useExitOnCtrlCDWithKeybindings,
  useExitOnCtrlCDWithKeybindings
} from "./chunk-WFZ47W7F.mjs";
import {
  Pane,
  init_Pane,
  init_useKeybinding,
  useKeybindings
} from "./chunk-36ZVP56J.mjs";
import {
  ThemedBox_default,
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime
} from "./chunk-ZFJCSCYD.mjs";
import {
  Suspense,
  init_react,
  react_default,
  use,
  useEffect,
  useState
} from "./chunk-TEJH3H3H.mjs";
import {
  getInitialSettings,
  getMainLoopModel,
  getModelMaxOutputTokens,
  init_context,
  init_file,
  init_model,
  init_permissionRuleParser,
  init_settings2 as init_settings,
  init_stringUtils,
  pathExists,
  permissionRuleValueToString,
  plural
} from "./chunk-JQ55XPLZ.mjs";
import {
  figures_default,
  init_figures
} from "./chunk-ZAYB3WZV.mjs";
import {
  getOriginalCwd,
  init_state
} from "./chunk-NGSB34MB.mjs";
import {
  getClaudeConfigHomeDir,
  init_envUtils
} from "./chunk-6NQGQQQI.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/components/KeybindingWarnings.tsx
function KeybindingWarnings() {
  const $ = c(2);
  if (!isKeybindingCustomizationEnabled()) {
    return null;
  }
  let t0;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ Symbol.for("react.early_return_sentinel");
    bb0: {
      const warnings = getCachedKeybindingWarnings();
      if (warnings.length === 0) {
        t1 = null;
        break bb0;
      }
      const errors = warnings.filter(_temp);
      const warns = warnings.filter(_temp2);
      t0 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginTop: 1, marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true, color: errors.length > 0 ? "error" : "warning" }, "Keybinding Configuration Issues"), /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Location: "), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, getKeybindingsPath())), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginLeft: 1, flexDirection: "column", marginTop: 1 }, errors.map(_temp3), warns.map(_temp4)));
    }
    $[0] = t0;
    $[1] = t1;
  } else {
    t0 = $[0];
    t1 = $[1];
  }
  if (t1 !== /* @__PURE__ */ Symbol.for("react.early_return_sentinel")) {
    return t1;
  }
  return t0;
}
function _temp4(warning, i_0) {
  return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { key: `warning-${i_0}`, flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "\u2514 "), /* @__PURE__ */ react_default.createElement(ThemedText, { color: "warning" }, "[Warning]"), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, " ", warning.message)), warning.suggestion && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginLeft: 3 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "\u2192 ", warning.suggestion)));
}
function _temp3(error, i) {
  return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { key: `error-${i}`, flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "\u2514 "), /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, "[Error]"), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, " ", error.message)), error.suggestion && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginLeft: 3 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "\u2192 ", error.suggestion)));
}
function _temp2(w_0) {
  return w_0.severity === "warning";
}
function _temp(w) {
  return w.severity === "error";
}
var init_KeybindingWarnings = __esm({
  "src/components/KeybindingWarnings.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_loadUserBindings();
  }
});

// src/components/sandbox/SandboxDoctorSection.tsx
function SandboxDoctorSection() {
  const $ = c(2);
  if (!SandboxManager.isSupportedPlatform()) {
    return null;
  }
  if (!SandboxManager.isSandboxEnabledInSettings()) {
    return null;
  }
  let t0;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ Symbol.for("react.early_return_sentinel");
    bb0: {
      const depCheck = SandboxManager.checkDependencies();
      const hasErrors = depCheck.errors.length > 0;
      const hasWarnings = depCheck.warnings.length > 0;
      if (!hasErrors && !hasWarnings) {
        t1 = null;
        break bb0;
      }
      const statusColor = hasErrors ? "error" : "warning";
      const statusText = hasErrors ? "Missing dependencies" : "Available (with warnings)";
      t0 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Sandbox"), /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2514 Status: ", /* @__PURE__ */ react_default.createElement(ThemedText, { color: statusColor }, statusText)), depCheck.errors.map(_temp5), depCheck.warnings.map(_temp22), hasErrors && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "\u2514 Run /sandbox for install instructions"));
    }
    $[0] = t0;
    $[1] = t1;
  } else {
    t0 = $[0];
    t1 = $[1];
  }
  if (t1 !== /* @__PURE__ */ Symbol.for("react.early_return_sentinel")) {
    return t1;
  }
  return t0;
}
function _temp22(w, i_0) {
  return /* @__PURE__ */ react_default.createElement(ThemedText, { key: i_0, color: "warning" }, "\u2514 ", w);
}
function _temp5(e, i) {
  return /* @__PURE__ */ react_default.createElement(ThemedText, { key: i, color: "error" }, "\u2514 ", e);
}
var init_SandboxDoctorSection = __esm({
  "src/components/sandbox/SandboxDoctorSection.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_sandbox_adapter();
  }
});

// src/utils/doctorContextWarnings.ts
async function checkClaudeMdFiles() {
  const largeFiles = getLargeMemoryFiles(await getMemoryFiles());
  if (largeFiles.length === 0) {
    return null;
  }
  const details = largeFiles.sort((a, b) => b.content.length - a.content.length).map((file) => `${file.path}: ${file.content.length.toLocaleString()} chars`);
  const message = largeFiles.length === 1 ? `Large CLAUDE.md file detected (${largeFiles[0].content.length.toLocaleString()} chars > ${MAX_MEMORY_CHARACTER_COUNT.toLocaleString()})` : `${largeFiles.length} large CLAUDE.md files detected (each > ${MAX_MEMORY_CHARACTER_COUNT.toLocaleString()} chars)`;
  return {
    type: "claudemd_files",
    severity: "warning",
    message,
    details,
    currentValue: largeFiles.length,
    // Number of files exceeding threshold
    threshold: MAX_MEMORY_CHARACTER_COUNT
  };
}
async function checkAgentDescriptions(agentInfo) {
  if (!agentInfo) {
    return null;
  }
  const totalTokens = getAgentDescriptionsTotalTokens(agentInfo);
  if (totalTokens <= AGENT_DESCRIPTIONS_THRESHOLD) {
    return null;
  }
  const agentTokens = agentInfo.activeAgents.filter((a) => a.source !== "built-in").map((agent) => {
    const description = `${agent.agentType}: ${agent.whenToUse}`;
    return {
      name: agent.agentType,
      tokens: roughTokenCountEstimation(description)
    };
  }).sort((a, b) => b.tokens - a.tokens);
  const details = agentTokens.slice(0, 5).map((agent) => `${agent.name}: ~${agent.tokens.toLocaleString()} tokens`);
  if (agentTokens.length > 5) {
    details.push(`(${agentTokens.length - 5} more custom agents)`);
  }
  return {
    type: "agent_descriptions",
    severity: "warning",
    message: `Large agent descriptions (~${totalTokens.toLocaleString()} tokens > ${AGENT_DESCRIPTIONS_THRESHOLD.toLocaleString()})`,
    details,
    currentValue: totalTokens,
    threshold: AGENT_DESCRIPTIONS_THRESHOLD
  };
}
async function checkMcpTools(tools, getToolPermissionContext, agentInfo) {
  const mcpTools = tools.filter((tool) => tool.isMcp);
  if (mcpTools.length === 0) {
    return null;
  }
  try {
    const model = getMainLoopModel();
    const { mcpToolTokens, mcpToolDetails } = await countMcpToolTokens(
      tools,
      getToolPermissionContext,
      agentInfo,
      model
    );
    if (mcpToolTokens <= MCP_TOOLS_THRESHOLD) {
      return null;
    }
    const toolsByServer = /* @__PURE__ */ new Map();
    for (const tool of mcpToolDetails) {
      const parts = tool.name.split("__");
      const serverName = parts[1] || "unknown";
      const current = toolsByServer.get(serverName) || { count: 0, tokens: 0 };
      toolsByServer.set(serverName, {
        count: current.count + 1,
        tokens: current.tokens + tool.tokens
      });
    }
    const sortedServers = Array.from(toolsByServer.entries()).sort(
      (a, b) => b[1].tokens - a[1].tokens
    );
    const details = sortedServers.slice(0, 5).map(
      ([name, info]) => `${name}: ${info.count} tools (~${info.tokens.toLocaleString()} tokens)`
    );
    if (sortedServers.length > 5) {
      details.push(`(${sortedServers.length - 5} more servers)`);
    }
    return {
      type: "mcp_tools",
      severity: "warning",
      message: `Large MCP tools context (~${mcpToolTokens.toLocaleString()} tokens > ${MCP_TOOLS_THRESHOLD.toLocaleString()})`,
      details,
      currentValue: mcpToolTokens,
      threshold: MCP_TOOLS_THRESHOLD
    };
  } catch (_error) {
    const estimatedTokens = mcpTools.reduce((total, tool) => {
      const chars = (tool.name?.length || 0) + tool.description.length;
      return total + roughTokenCountEstimation(chars.toString());
    }, 0);
    if (estimatedTokens <= MCP_TOOLS_THRESHOLD) {
      return null;
    }
    return {
      type: "mcp_tools",
      severity: "warning",
      message: `Large MCP tools context (~${estimatedTokens.toLocaleString()} tokens estimated > ${MCP_TOOLS_THRESHOLD.toLocaleString()})`,
      details: [
        `${mcpTools.length} MCP tools detected (token count estimated)`
      ],
      currentValue: estimatedTokens,
      threshold: MCP_TOOLS_THRESHOLD
    };
  }
}
async function checkUnreachableRules(getToolPermissionContext) {
  const context = await getToolPermissionContext();
  const sandboxAutoAllowEnabled = SandboxManager.isSandboxingEnabled() && SandboxManager.isAutoAllowBashIfSandboxedEnabled();
  const unreachable = detectUnreachableRules(context, {
    sandboxAutoAllowEnabled
  });
  if (unreachable.length === 0) {
    return null;
  }
  const details = unreachable.flatMap((r) => [
    `${permissionRuleValueToString(r.rule.ruleValue)}: ${r.reason}`,
    `  Fix: ${r.fix}`
  ]);
  return {
    type: "unreachable_rules",
    severity: "warning",
    message: `${unreachable.length} ${plural(unreachable.length, "unreachable permission rule")} detected`,
    details,
    currentValue: unreachable.length,
    threshold: 0
  };
}
async function checkContextWarnings(tools, agentInfo, getToolPermissionContext) {
  const [claudeMdWarning, agentWarning, mcpWarning, unreachableRulesWarning] = await Promise.all([
    checkClaudeMdFiles(),
    checkAgentDescriptions(agentInfo),
    checkMcpTools(tools, getToolPermissionContext, agentInfo),
    checkUnreachableRules(getToolPermissionContext)
  ]);
  return {
    claudeMdWarning,
    agentWarning,
    mcpWarning,
    unreachableRulesWarning
  };
}
var MCP_TOOLS_THRESHOLD;
var init_doctorContextWarnings = __esm({
  "src/utils/doctorContextWarnings.ts"() {
    init_tokenEstimation();
    init_analyzeContext();
    init_claudemd();
    init_model();
    init_permissionRuleParser();
    init_shadowedRuleDetection();
    init_sandbox_adapter();
    init_statusNoticeHelpers();
    init_stringUtils();
    MCP_TOOLS_THRESHOLD = 25e3;
  }
});

// src/screens/Doctor.tsx
import { join } from "path";
function DistTagsDisplay(t0) {
  const $ = c(8);
  const {
    promise
  } = t0;
  const distTags = use(promise);
  if (!distTags.latest) {
    let t12;
    if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t12 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "\u2514 Failed to fetch versions");
      $[0] = t12;
    } else {
      t12 = $[0];
    }
    return t12;
  }
  let t1;
  if ($[1] !== distTags.stable) {
    t1 = distTags.stable && /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2514 Stable version: ", distTags.stable);
    $[1] = distTags.stable;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  let t2;
  if ($[3] !== distTags.latest) {
    t2 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2514 Latest version: ", distTags.latest);
    $[3] = distTags.latest;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  let t3;
  if ($[5] !== t1 || $[6] !== t2) {
    t3 = /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, t1, t2);
    $[5] = t1;
    $[6] = t2;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  return t3;
}
function Doctor(t0) {
  const $ = c(84);
  const {
    onDone
  } = t0;
  const agentDefinitions = useAppState(_temp19);
  const mcpTools = useAppState(_temp23);
  const toolPermissionContext = useAppState(_temp32);
  const pluginsErrors = useAppState(_temp42);
  useExitOnCtrlCDWithKeybindings();
  let t1;
  if ($[0] !== mcpTools) {
    t1 = mcpTools || [];
    $[0] = mcpTools;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const tools = t1;
  const [diagnostic, setDiagnostic] = useState(null);
  const [agentInfo, setAgentInfo] = useState(null);
  const [contextWarnings, setContextWarnings] = useState(null);
  const [versionLockInfo, setVersionLockInfo] = useState(null);
  const validationErrors = useSettingsErrors();
  let t2;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = getDoctorDiagnostic().then(_temp6);
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  const distTagsPromise = t2;
  const autoUpdatesChannel = getInitialSettings()?.autoUpdatesChannel ?? "latest";
  let t3;
  if ($[3] !== validationErrors) {
    t3 = validationErrors.filter(_temp7);
    $[3] = validationErrors;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  const errorsExcludingMcp = t3;
  let t4;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    const envVars = [{
      name: "BASH_MAX_OUTPUT_LENGTH",
      default: BASH_MAX_OUTPUT_DEFAULT,
      upperLimit: BASH_MAX_OUTPUT_UPPER_LIMIT
    }, {
      name: "TASK_MAX_OUTPUT_LENGTH",
      default: TASK_MAX_OUTPUT_DEFAULT,
      upperLimit: TASK_MAX_OUTPUT_UPPER_LIMIT
    }, {
      name: "CLAUDE_CODE_MAX_OUTPUT_TOKENS",
      ...getModelMaxOutputTokens("claude-opus-4-6")
    }];
    t4 = envVars.map(_temp8).filter(_temp9);
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  const envValidationErrors = t4;
  let t5;
  let t6;
  if ($[6] !== agentDefinitions || $[7] !== toolPermissionContext || $[8] !== tools) {
    t5 = () => {
      getDoctorDiagnostic().then(setDiagnostic);
      (async () => {
        const userAgentsDir = join(getClaudeConfigHomeDir(), "agents");
        const projectAgentsDir = join(getOriginalCwd(), ".claude", "agents");
        const {
          activeAgents,
          allAgents,
          failedFiles
        } = agentDefinitions;
        const [userDirExists, projectDirExists] = await Promise.all([pathExists(userAgentsDir), pathExists(projectAgentsDir)]);
        const agentInfoData = {
          activeAgents: activeAgents.map(_temp0),
          userAgentsDir,
          projectAgentsDir,
          userDirExists,
          projectDirExists,
          failedFiles
        };
        setAgentInfo(agentInfoData);
        const warnings = await checkContextWarnings(tools, {
          activeAgents,
          allAgents,
          failedFiles
        }, async () => toolPermissionContext);
        setContextWarnings(warnings);
        if (isPidBasedLockingEnabled()) {
          const locksDir = join(getXDGStateHome(), "claude", "locks");
          const staleLocksCleaned = cleanupStaleLocks(locksDir);
          const locks = getAllLockInfo(locksDir);
          setVersionLockInfo({
            enabled: true,
            locks,
            locksDir,
            staleLocksCleaned
          });
        } else {
          setVersionLockInfo({
            enabled: false,
            locks: [],
            locksDir: "",
            staleLocksCleaned: 0
          });
        }
      })();
    };
    t6 = [toolPermissionContext, tools, agentDefinitions];
    $[6] = agentDefinitions;
    $[7] = toolPermissionContext;
    $[8] = tools;
    $[9] = t5;
    $[10] = t6;
  } else {
    t5 = $[9];
    t6 = $[10];
  }
  useEffect(t5, t6);
  let t7;
  if ($[11] !== onDone) {
    t7 = () => {
      onDone("Claude Code diagnostics dismissed", {
        display: "system"
      });
    };
    $[11] = onDone;
    $[12] = t7;
  } else {
    t7 = $[12];
  }
  const handleDismiss = t7;
  let t8;
  if ($[13] !== handleDismiss) {
    t8 = {
      "confirm:yes": handleDismiss,
      "confirm:no": handleDismiss
    };
    $[13] = handleDismiss;
    $[14] = t8;
  } else {
    t8 = $[14];
  }
  let t9;
  if ($[15] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t9 = {
      context: "Confirmation"
    };
    $[15] = t9;
  } else {
    t9 = $[15];
  }
  useKeybindings(t8, t9);
  if (!diagnostic) {
    let t102;
    if ($[16] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t102 = /* @__PURE__ */ react_default.createElement(Pane, null, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Checking installation status\u2026"));
      $[16] = t102;
    } else {
      t102 = $[16];
    }
    return t102;
  }
  let t10;
  if ($[17] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t10 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Diagnostics");
    $[17] = t10;
  } else {
    t10 = $[17];
  }
  let t11;
  if ($[18] !== diagnostic.installationType || $[19] !== diagnostic.version) {
    t11 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2514 Currently running: ", diagnostic.installationType, " (", diagnostic.version, ")");
    $[18] = diagnostic.installationType;
    $[19] = diagnostic.version;
    $[20] = t11;
  } else {
    t11 = $[20];
  }
  let t12;
  if ($[21] !== diagnostic.packageManager) {
    t12 = diagnostic.packageManager && /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2514 Package manager: ", diagnostic.packageManager);
    $[21] = diagnostic.packageManager;
    $[22] = t12;
  } else {
    t12 = $[22];
  }
  let t13;
  if ($[23] !== diagnostic.installationPath) {
    t13 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2514 Path: ", diagnostic.installationPath);
    $[23] = diagnostic.installationPath;
    $[24] = t13;
  } else {
    t13 = $[24];
  }
  let t14;
  if ($[25] !== diagnostic.invokedBinary) {
    t14 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2514 Invoked: ", diagnostic.invokedBinary);
    $[25] = diagnostic.invokedBinary;
    $[26] = t14;
  } else {
    t14 = $[26];
  }
  let t15;
  if ($[27] !== diagnostic.configInstallMethod) {
    t15 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2514 Config install method: ", diagnostic.configInstallMethod);
    $[27] = diagnostic.configInstallMethod;
    $[28] = t15;
  } else {
    t15 = $[28];
  }
  const t16 = diagnostic.ripgrepStatus.working ? "OK" : "Not working";
  const t17 = diagnostic.ripgrepStatus.mode === "embedded" ? "bundled" : diagnostic.ripgrepStatus.mode === "builtin" ? "vendor" : diagnostic.ripgrepStatus.systemPath || "system";
  let t18;
  if ($[29] !== t16 || $[30] !== t17) {
    t18 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2514 Search: ", t16, " (", t17, ")");
    $[29] = t16;
    $[30] = t17;
    $[31] = t18;
  } else {
    t18 = $[31];
  }
  let t19;
  if ($[32] !== diagnostic.recommendation) {
    t19 = diagnostic.recommendation && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement(ThemedText, null), /* @__PURE__ */ react_default.createElement(ThemedText, { color: "warning" }, "Recommendation: ", diagnostic.recommendation.split("\n")[0]), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, diagnostic.recommendation.split("\n")[1]));
    $[32] = diagnostic.recommendation;
    $[33] = t19;
  } else {
    t19 = $[33];
  }
  let t20;
  if ($[34] !== diagnostic.multipleInstallations) {
    t20 = diagnostic.multipleInstallations.length > 1 && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement(ThemedText, null), /* @__PURE__ */ react_default.createElement(ThemedText, { color: "warning" }, "Warning: Multiple installations found"), diagnostic.multipleInstallations.map(_temp1));
    $[34] = diagnostic.multipleInstallations;
    $[35] = t20;
  } else {
    t20 = $[35];
  }
  let t21;
  if ($[36] !== diagnostic.warnings) {
    t21 = diagnostic.warnings.length > 0 && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement(ThemedText, null), diagnostic.warnings.map(_temp10));
    $[36] = diagnostic.warnings;
    $[37] = t21;
  } else {
    t21 = $[37];
  }
  let t22;
  if ($[38] !== errorsExcludingMcp) {
    t22 = errorsExcludingMcp.length > 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginTop: 1, marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Invalid Settings"), /* @__PURE__ */ react_default.createElement(ValidationErrorsList, { errors: errorsExcludingMcp }));
    $[38] = errorsExcludingMcp;
    $[39] = t22;
  } else {
    t22 = $[39];
  }
  let t23;
  if ($[40] !== t11 || $[41] !== t12 || $[42] !== t13 || $[43] !== t14 || $[44] !== t15 || $[45] !== t18 || $[46] !== t19 || $[47] !== t20 || $[48] !== t21 || $[49] !== t22) {
    t23 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, t10, t11, t12, t13, t14, t15, t18, t19, t20, t21, t22);
    $[40] = t11;
    $[41] = t12;
    $[42] = t13;
    $[43] = t14;
    $[44] = t15;
    $[45] = t18;
    $[46] = t19;
    $[47] = t20;
    $[48] = t21;
    $[49] = t22;
    $[50] = t23;
  } else {
    t23 = $[50];
  }
  let t24;
  if ($[51] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t24 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Updates");
    $[51] = t24;
  } else {
    t24 = $[51];
  }
  const t25 = diagnostic.packageManager ? "Managed by package manager" : diagnostic.autoUpdates;
  let t26;
  if ($[52] !== t25) {
    t26 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2514 Auto-updates:", " ", t25);
    $[52] = t25;
    $[53] = t26;
  } else {
    t26 = $[53];
  }
  let t27;
  if ($[54] !== diagnostic.hasUpdatePermissions) {
    t27 = diagnostic.hasUpdatePermissions !== null && /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2514 Update permissions:", " ", diagnostic.hasUpdatePermissions ? "Yes" : "No (requires sudo)");
    $[54] = diagnostic.hasUpdatePermissions;
    $[55] = t27;
  } else {
    t27 = $[55];
  }
  let t28;
  if ($[56] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t28 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2514 Auto-update channel: ", autoUpdatesChannel);
    $[56] = t28;
  } else {
    t28 = $[56];
  }
  let t29;
  if ($[57] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t29 = /* @__PURE__ */ react_default.createElement(Suspense, { fallback: null }, /* @__PURE__ */ react_default.createElement(DistTagsDisplay, { promise: distTagsPromise }));
    $[57] = t29;
  } else {
    t29 = $[57];
  }
  let t30;
  if ($[58] !== t26 || $[59] !== t27) {
    t30 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, t24, t26, t27, t28, t29);
    $[58] = t26;
    $[59] = t27;
    $[60] = t30;
  } else {
    t30 = $[60];
  }
  let t31;
  let t32;
  let t33;
  let t34;
  if ($[61] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t31 = /* @__PURE__ */ react_default.createElement(SandboxDoctorSection, null);
    t32 = /* @__PURE__ */ react_default.createElement(McpParsingWarnings, null);
    t33 = /* @__PURE__ */ react_default.createElement(KeybindingWarnings, null);
    t34 = envValidationErrors.length > 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Environment Variables"), envValidationErrors.map(_temp11));
    $[61] = t31;
    $[62] = t32;
    $[63] = t33;
    $[64] = t34;
  } else {
    t31 = $[61];
    t32 = $[62];
    t33 = $[63];
    t34 = $[64];
  }
  let t35;
  if ($[65] !== versionLockInfo) {
    t35 = versionLockInfo?.enabled && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Version Locks"), versionLockInfo.staleLocksCleaned > 0 && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "\u2514 Cleaned ", versionLockInfo.staleLocksCleaned, " stale lock(s)"), versionLockInfo.locks.length === 0 ? /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "\u2514 No active version locks") : versionLockInfo.locks.map(_temp12));
    $[65] = versionLockInfo;
    $[66] = t35;
  } else {
    t35 = $[66];
  }
  let t36;
  if ($[67] !== agentInfo) {
    t36 = agentInfo?.failedFiles && agentInfo.failedFiles.length > 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true, color: "error" }, "Agent Parse Errors"), /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, "\u2514 Failed to parse ", agentInfo.failedFiles.length, " agent file(s):"), agentInfo.failedFiles.map(_temp13));
    $[67] = agentInfo;
    $[68] = t36;
  } else {
    t36 = $[68];
  }
  let t37;
  if ($[69] !== pluginsErrors) {
    t37 = pluginsErrors.length > 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true, color: "error" }, "Plugin Errors"), /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, "\u2514 ", pluginsErrors.length, " plugin error(s) detected:"), pluginsErrors.map(_temp14));
    $[69] = pluginsErrors;
    $[70] = t37;
  } else {
    t37 = $[70];
  }
  let t38;
  if ($[71] !== contextWarnings) {
    t38 = contextWarnings?.unreachableRulesWarning && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true, color: "warning" }, "Unreachable Permission Rules"), /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2514", " ", /* @__PURE__ */ react_default.createElement(ThemedText, { color: "warning" }, figures_default.warning, " ", contextWarnings.unreachableRulesWarning.message)), contextWarnings.unreachableRulesWarning.details.map(_temp15));
    $[71] = contextWarnings;
    $[72] = t38;
  } else {
    t38 = $[72];
  }
  let t39;
  if ($[73] !== contextWarnings) {
    t39 = contextWarnings && (contextWarnings.claudeMdWarning || contextWarnings.agentWarning || contextWarnings.mcpWarning) && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Context Usage Warnings"), contextWarnings.claudeMdWarning && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2514", " ", /* @__PURE__ */ react_default.createElement(ThemedText, { color: "warning" }, figures_default.warning, " ", contextWarnings.claudeMdWarning.message)), /* @__PURE__ */ react_default.createElement(ThemedText, null, "  ", "\u2514 Files:"), contextWarnings.claudeMdWarning.details.map(_temp16)), contextWarnings.agentWarning && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2514", " ", /* @__PURE__ */ react_default.createElement(ThemedText, { color: "warning" }, figures_default.warning, " ", contextWarnings.agentWarning.message)), /* @__PURE__ */ react_default.createElement(ThemedText, null, "  ", "\u2514 Top contributors:"), contextWarnings.agentWarning.details.map(_temp17)), contextWarnings.mcpWarning && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2514", " ", /* @__PURE__ */ react_default.createElement(ThemedText, { color: "warning" }, figures_default.warning, " ", contextWarnings.mcpWarning.message)), /* @__PURE__ */ react_default.createElement(ThemedText, null, "  ", "\u2514 MCP servers:"), contextWarnings.mcpWarning.details.map(_temp18)));
    $[73] = contextWarnings;
    $[74] = t39;
  } else {
    t39 = $[74];
  }
  let t40;
  if ($[75] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t40 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(PressEnterToContinue, null));
    $[75] = t40;
  } else {
    t40 = $[75];
  }
  let t41;
  if ($[76] !== t23 || $[77] !== t30 || $[78] !== t35 || $[79] !== t36 || $[80] !== t37 || $[81] !== t38 || $[82] !== t39) {
    t41 = /* @__PURE__ */ react_default.createElement(Pane, null, t23, t30, t31, t32, t33, t34, t35, t36, t37, t38, t39, t40);
    $[76] = t23;
    $[77] = t30;
    $[78] = t35;
    $[79] = t36;
    $[80] = t37;
    $[81] = t38;
    $[82] = t39;
    $[83] = t41;
  } else {
    t41 = $[83];
  }
  return t41;
}
function _temp18(detail_2, i_8) {
  return /* @__PURE__ */ react_default.createElement(ThemedText, { key: i_8, dimColor: true }, "    ", "\u2514 ", detail_2);
}
function _temp17(detail_1, i_7) {
  return /* @__PURE__ */ react_default.createElement(ThemedText, { key: i_7, dimColor: true }, "    ", "\u2514 ", detail_1);
}
function _temp16(detail_0, i_6) {
  return /* @__PURE__ */ react_default.createElement(ThemedText, { key: i_6, dimColor: true }, "    ", "\u2514 ", detail_0);
}
function _temp15(detail, i_5) {
  return /* @__PURE__ */ react_default.createElement(ThemedText, { key: i_5, dimColor: true }, "  ", "\u2514 ", detail);
}
function _temp14(error_0, i_4) {
  return /* @__PURE__ */ react_default.createElement(ThemedText, { key: i_4, dimColor: true }, "  ", "\u2514 ", error_0.source || "unknown", "plugin" in error_0 && error_0.plugin ? ` [${error_0.plugin}]` : "", ":", " ", getPluginErrorMessage(error_0));
}
function _temp13(file, i_3) {
  return /* @__PURE__ */ react_default.createElement(ThemedText, { key: i_3, dimColor: true }, "  ", "\u2514 ", file.path, ": ", file.error);
}
function _temp12(lock, i_2) {
  return /* @__PURE__ */ react_default.createElement(ThemedText, { key: i_2 }, "\u2514 ", lock.version, ": PID ", lock.pid, " ", lock.isProcessRunning ? /* @__PURE__ */ react_default.createElement(ThemedText, null, "(running)") : /* @__PURE__ */ react_default.createElement(ThemedText, { color: "warning" }, "(stale)"));
}
function _temp11(validation, i_1) {
  return /* @__PURE__ */ react_default.createElement(ThemedText, { key: i_1 }, "\u2514 ", validation.name, ":", " ", /* @__PURE__ */ react_default.createElement(ThemedText, { color: validation.status === "capped" ? "warning" : "error" }, validation.message));
}
function _temp10(warning, i_0) {
  return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { key: i_0, flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "warning" }, "Warning: ", warning.issue), /* @__PURE__ */ react_default.createElement(ThemedText, null, "Fix: ", warning.fix));
}
function _temp1(install, i) {
  return /* @__PURE__ */ react_default.createElement(ThemedText, { key: i }, "\u2514 ", install.type, " at ", install.path);
}
function _temp0(a) {
  return {
    agentType: a.agentType,
    source: a.source
  };
}
function _temp9(v_0) {
  return v_0.status !== "valid";
}
function _temp8(v) {
  const value = process.env[v.name];
  const result = validateBoundedIntEnvVar(v.name, value, v.default, v.upperLimit);
  return {
    name: v.name,
    ...result
  };
}
function _temp7(error) {
  return error.mcpErrorMetadata === void 0;
}
function _temp6(diag) {
  const fetchDistTags = diag.installationType === "native" ? getGcsDistTags : getNpmDistTags;
  return fetchDistTags().catch(_temp52);
}
function _temp52() {
  return {
    latest: null,
    stable: null
  };
}
function _temp42(s_2) {
  return s_2.plugins.errors;
}
function _temp32(s_1) {
  return s_1.toolPermissionContext;
}
function _temp23(s_0) {
  return s_0.mcp.tools;
}
function _temp19(s) {
  return s.agentDefinitions;
}
var init_Doctor = __esm({
  "src/screens/Doctor.tsx"() {
    init_react_compiler_runtime();
    init_figures();
    init_react();
    init_KeybindingWarnings();
    init_McpParsingWarnings();
    init_context();
    init_envUtils();
    init_state();
    init_Pane();
    init_PressEnterToContinue();
    init_SandboxDoctorSection();
    init_ValidationErrorsList();
    init_useSettingsErrors();
    init_useExitOnCtrlCDWithKeybindings();
    init_ink();
    init_useKeybinding();
    init_AppState();
    init_plugin();
    init_autoUpdater();
    init_doctorContextWarnings();
    init_doctorDiagnostic();
    init_envValidation();
    init_file();
    init_pidLock();
    init_settings();
    init_outputLimits();
    init_outputFormatting();
    init_xdg();
  }
});

export {
  Doctor,
  init_Doctor
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvS2V5YmluZGluZ1dhcm5pbmdzLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9zYW5kYm94L1NhbmRib3hEb2N0b3JTZWN0aW9uLnRzeCIsICIuLi8uLi9zcmMvdXRpbHMvZG9jdG9yQ29udGV4dFdhcm5pbmdzLnRzIiwgIi4uLy4uL3NyYy9zY3JlZW5zL0RvY3Rvci50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uL2luay5qcydcbmltcG9ydCB7XG4gIGdldENhY2hlZEtleWJpbmRpbmdXYXJuaW5ncyxcbiAgZ2V0S2V5YmluZGluZ3NQYXRoLFxuICBpc0tleWJpbmRpbmdDdXN0b21pemF0aW9uRW5hYmxlZCxcbn0gZnJvbSAnLi4va2V5YmluZGluZ3MvbG9hZFVzZXJCaW5kaW5ncy5qcydcblxuLyoqXG4gKiBEaXNwbGF5cyBrZXliaW5kaW5nIHZhbGlkYXRpb24gd2FybmluZ3MgaW4gdGhlIFVJLlxuICogU2ltaWxhciB0byBNY3BQYXJzaW5nV2FybmluZ3MsIHRoaXMgcHJvdmlkZXMgcGVyc2lzdGVudCB2aXNpYmlsaXR5XG4gKiBvZiBjb25maWd1cmF0aW9uIGlzc3Vlcy5cbiAqXG4gKiBPbmx5IHNob3duIHdoZW4ga2V5YmluZGluZyBjdXN0b21pemF0aW9uIGlzIGVuYWJsZWQgKGFudCB1c2VycyArIGZlYXR1cmUgZ2F0ZSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBLZXliaW5kaW5nV2FybmluZ3MoKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgLy8gT25seSBzaG93IHdhcm5pbmdzIHdoZW4ga2V5YmluZGluZyBjdXN0b21pemF0aW9uIGlzIGVuYWJsZWRcbiAgaWYgKCFpc0tleWJpbmRpbmdDdXN0b21pemF0aW9uRW5hYmxlZCgpKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IHdhcm5pbmdzID0gZ2V0Q2FjaGVkS2V5YmluZGluZ1dhcm5pbmdzKClcblxuICBpZiAod2FybmluZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IGVycm9ycyA9IHdhcm5pbmdzLmZpbHRlcih3ID0+IHcuc2V2ZXJpdHkgPT09ICdlcnJvcicpXG4gIGNvbnN0IHdhcm5zID0gd2FybmluZ3MuZmlsdGVyKHcgPT4gdy5zZXZlcml0eSA9PT0gJ3dhcm5pbmcnKVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbWFyZ2luVG9wPXsxfSBtYXJnaW5Cb3R0b209ezF9PlxuICAgICAgPFRleHQgYm9sZCBjb2xvcj17ZXJyb3JzLmxlbmd0aCA+IDAgPyAnZXJyb3InIDogJ3dhcm5pbmcnfT5cbiAgICAgICAgS2V5YmluZGluZyBDb25maWd1cmF0aW9uIElzc3Vlc1xuICAgICAgPC9UZXh0PlxuICAgICAgPEJveD5cbiAgICAgICAgPFRleHQgZGltQ29sb3I+TG9jYXRpb246IDwvVGV4dD5cbiAgICAgICAgPFRleHQgZGltQ29sb3I+e2dldEtleWJpbmRpbmdzUGF0aCgpfTwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgICAgPEJveCBtYXJnaW5MZWZ0PXsxfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbWFyZ2luVG9wPXsxfT5cbiAgICAgICAge2Vycm9ycy5tYXAoKGVycm9yLCBpKSA9PiAoXG4gICAgICAgICAgPEJveCBrZXk9e2BlcnJvci0ke2l9YH0gZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+4pSUIDwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJlcnJvclwiPltFcnJvcl08L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPiB7ZXJyb3IubWVzc2FnZX08L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIHtlcnJvci5zdWdnZXN0aW9uICYmIChcbiAgICAgICAgICAgICAgPEJveCBtYXJnaW5MZWZ0PXszfT5cbiAgICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj7ihpIge2Vycm9yLnN1Z2dlc3Rpb259PC9UZXh0PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICkpfVxuICAgICAgICB7d2FybnMubWFwKCh3YXJuaW5nLCBpKSA9PiAoXG4gICAgICAgICAgPEJveCBrZXk9e2B3YXJuaW5nLSR7aX1gfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj7ilJQgPC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIj5bV2FybmluZ108L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPiB7d2FybmluZy5tZXNzYWdlfTwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAge3dhcm5pbmcuc3VnZ2VzdGlvbiAmJiAoXG4gICAgICAgICAgICAgIDxCb3ggbWFyZ2luTGVmdD17M30+XG4gICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+4oaSIHt3YXJuaW5nLnN1Z2dlc3Rpb259PC9UZXh0PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICkpfVxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gIClcbn1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQgeyBTYW5kYm94TWFuYWdlciB9IGZyb20gJy4uLy4uL3V0aWxzL3NhbmRib3gvc2FuZGJveC1hZGFwdGVyLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gU2FuZGJveERvY3RvclNlY3Rpb24oKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgaWYgKCFTYW5kYm94TWFuYWdlci5pc1N1cHBvcnRlZFBsYXRmb3JtKCkpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgaWYgKCFTYW5kYm94TWFuYWdlci5pc1NhbmRib3hFbmFibGVkSW5TZXR0aW5ncygpKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IGRlcENoZWNrID0gU2FuZGJveE1hbmFnZXIuY2hlY2tEZXBlbmRlbmNpZXMoKVxuICBjb25zdCBoYXNFcnJvcnMgPSBkZXBDaGVjay5lcnJvcnMubGVuZ3RoID4gMFxuICBjb25zdCBoYXNXYXJuaW5ncyA9IGRlcENoZWNrLndhcm5pbmdzLmxlbmd0aCA+IDBcblxuICBpZiAoIWhhc0Vycm9ycyAmJiAhaGFzV2FybmluZ3MpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3Qgc3RhdHVzQ29sb3IgPSBoYXNFcnJvcnMgPyAoJ2Vycm9yJyBhcyBjb25zdCkgOiAoJ3dhcm5pbmcnIGFzIGNvbnN0KVxuICBjb25zdCBzdGF0dXNUZXh0ID0gaGFzRXJyb3JzXG4gICAgPyAnTWlzc2luZyBkZXBlbmRlbmNpZXMnXG4gICAgOiAnQXZhaWxhYmxlICh3aXRoIHdhcm5pbmdzKSdcblxuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgPFRleHQgYm9sZD5TYW5kYm94PC9UZXh0PlxuICAgICAgPFRleHQ+XG4gICAgICAgIOKUlCBTdGF0dXM6IDxUZXh0IGNvbG9yPXtzdGF0dXNDb2xvcn0+e3N0YXR1c1RleHR9PC9UZXh0PlxuICAgICAgPC9UZXh0PlxuICAgICAge2RlcENoZWNrLmVycm9ycy5tYXAoKGUsIGkpID0+IChcbiAgICAgICAgPFRleHQga2V5PXtpfSBjb2xvcj1cImVycm9yXCI+XG4gICAgICAgICAg4pSUIHtlfVxuICAgICAgICA8L1RleHQ+XG4gICAgICApKX1cbiAgICAgIHtkZXBDaGVjay53YXJuaW5ncy5tYXAoKHcsIGkpID0+IChcbiAgICAgICAgPFRleHQga2V5PXtpfSBjb2xvcj1cIndhcm5pbmdcIj5cbiAgICAgICAgICDilJQge3d9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICkpfVxuICAgICAge2hhc0Vycm9ycyAmJiAoXG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPuKUlCBSdW4gL3NhbmRib3ggZm9yIGluc3RhbGwgaW5zdHJ1Y3Rpb25zPC9UZXh0PlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKVxufVxuIiwgImltcG9ydCB7IHJvdWdoVG9rZW5Db3VudEVzdGltYXRpb24gfSBmcm9tICcuLi9zZXJ2aWNlcy90b2tlbkVzdGltYXRpb24uanMnXG5pbXBvcnQgdHlwZSB7IFRvb2wsIFRvb2xQZXJtaXNzaW9uQ29udGV4dCB9IGZyb20gJy4uL1Rvb2wuanMnXG5pbXBvcnQgdHlwZSB7IEFnZW50RGVmaW5pdGlvbnNSZXN1bHQgfSBmcm9tICcuLi90b29scy9BZ2VudFRvb2wvbG9hZEFnZW50c0Rpci5qcydcbmltcG9ydCB7IGNvdW50TWNwVG9vbFRva2VucyB9IGZyb20gJy4vYW5hbHl6ZUNvbnRleHQuanMnXG5pbXBvcnQge1xuICBnZXRMYXJnZU1lbW9yeUZpbGVzLFxuICBnZXRNZW1vcnlGaWxlcyxcbiAgTUFYX01FTU9SWV9DSEFSQUNURVJfQ09VTlQsXG59IGZyb20gJy4vY2xhdWRlbWQuanMnXG5pbXBvcnQgeyBnZXRNYWluTG9vcE1vZGVsIH0gZnJvbSAnLi9tb2RlbC9tb2RlbC5qcydcbmltcG9ydCB7IHBlcm1pc3Npb25SdWxlVmFsdWVUb1N0cmluZyB9IGZyb20gJy4vcGVybWlzc2lvbnMvcGVybWlzc2lvblJ1bGVQYXJzZXIuanMnXG5pbXBvcnQgeyBkZXRlY3RVbnJlYWNoYWJsZVJ1bGVzIH0gZnJvbSAnLi9wZXJtaXNzaW9ucy9zaGFkb3dlZFJ1bGVEZXRlY3Rpb24uanMnXG5pbXBvcnQgeyBTYW5kYm94TWFuYWdlciB9IGZyb20gJy4vc2FuZGJveC9zYW5kYm94LWFkYXB0ZXIuanMnXG5pbXBvcnQge1xuICBBR0VOVF9ERVNDUklQVElPTlNfVEhSRVNIT0xELFxuICBnZXRBZ2VudERlc2NyaXB0aW9uc1RvdGFsVG9rZW5zLFxufSBmcm9tICcuL3N0YXR1c05vdGljZUhlbHBlcnMuanMnXG5pbXBvcnQgeyBwbHVyYWwgfSBmcm9tICcuL3N0cmluZ1V0aWxzLmpzJ1xuXG4vLyBUaHJlc2hvbGRzIChtYXRjaGluZyBzdGF0dXMgbm90aWNlcyBhbmQgZXhpc3RpbmcgcGF0dGVybnMpXG5jb25zdCBNQ1BfVE9PTFNfVEhSRVNIT0xEID0gMjVfMDAwIC8vIDE1ayB0b2tlbnNcblxuZXhwb3J0IHR5cGUgQ29udGV4dFdhcm5pbmcgPSB7XG4gIHR5cGU6XG4gICAgfCAnY2xhdWRlbWRfZmlsZXMnXG4gICAgfCAnYWdlbnRfZGVzY3JpcHRpb25zJ1xuICAgIHwgJ21jcF90b29scydcbiAgICB8ICd1bnJlYWNoYWJsZV9ydWxlcydcbiAgc2V2ZXJpdHk6ICd3YXJuaW5nJyB8ICdlcnJvcidcbiAgbWVzc2FnZTogc3RyaW5nXG4gIGRldGFpbHM6IHN0cmluZ1tdXG4gIGN1cnJlbnRWYWx1ZTogbnVtYmVyXG4gIHRocmVzaG9sZDogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIENvbnRleHRXYXJuaW5ncyA9IHtcbiAgY2xhdWRlTWRXYXJuaW5nOiBDb250ZXh0V2FybmluZyB8IG51bGxcbiAgYWdlbnRXYXJuaW5nOiBDb250ZXh0V2FybmluZyB8IG51bGxcbiAgbWNwV2FybmluZzogQ29udGV4dFdhcm5pbmcgfCBudWxsXG4gIHVucmVhY2hhYmxlUnVsZXNXYXJuaW5nOiBDb250ZXh0V2FybmluZyB8IG51bGxcbn1cblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tDbGF1ZGVNZEZpbGVzKCk6IFByb21pc2U8Q29udGV4dFdhcm5pbmcgfCBudWxsPiB7XG4gIGNvbnN0IGxhcmdlRmlsZXMgPSBnZXRMYXJnZU1lbW9yeUZpbGVzKGF3YWl0IGdldE1lbW9yeUZpbGVzKCkpXG5cbiAgLy8gVGhpcyBhbHJlYWR5IGZpbHRlcnMgZm9yIGZpbGVzID4gNDBrIGNoYXJzIGVhY2hcbiAgaWYgKGxhcmdlRmlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IGRldGFpbHMgPSBsYXJnZUZpbGVzXG4gICAgLnNvcnQoKGEsIGIpID0+IGIuY29udGVudC5sZW5ndGggLSBhLmNvbnRlbnQubGVuZ3RoKVxuICAgIC5tYXAoZmlsZSA9PiBgJHtmaWxlLnBhdGh9OiAke2ZpbGUuY29udGVudC5sZW5ndGgudG9Mb2NhbGVTdHJpbmcoKX0gY2hhcnNgKVxuXG4gIGNvbnN0IG1lc3NhZ2UgPVxuICAgIGxhcmdlRmlsZXMubGVuZ3RoID09PSAxXG4gICAgICA/IGBMYXJnZSBDTEFVREUubWQgZmlsZSBkZXRlY3RlZCAoJHtsYXJnZUZpbGVzWzBdIS5jb250ZW50Lmxlbmd0aC50b0xvY2FsZVN0cmluZygpfSBjaGFycyA+ICR7TUFYX01FTU9SWV9DSEFSQUNURVJfQ09VTlQudG9Mb2NhbGVTdHJpbmcoKX0pYFxuICAgICAgOiBgJHtsYXJnZUZpbGVzLmxlbmd0aH0gbGFyZ2UgQ0xBVURFLm1kIGZpbGVzIGRldGVjdGVkIChlYWNoID4gJHtNQVhfTUVNT1JZX0NIQVJBQ1RFUl9DT1VOVC50b0xvY2FsZVN0cmluZygpfSBjaGFycylgXG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnY2xhdWRlbWRfZmlsZXMnLFxuICAgIHNldmVyaXR5OiAnd2FybmluZycsXG4gICAgbWVzc2FnZSxcbiAgICBkZXRhaWxzLFxuICAgIGN1cnJlbnRWYWx1ZTogbGFyZ2VGaWxlcy5sZW5ndGgsIC8vIE51bWJlciBvZiBmaWxlcyBleGNlZWRpbmcgdGhyZXNob2xkXG4gICAgdGhyZXNob2xkOiBNQVhfTUVNT1JZX0NIQVJBQ1RFUl9DT1VOVCxcbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIGFnZW50IGRlc2NyaXB0aW9ucyB0b2tlbiBjb3VudFxuICovXG5hc3luYyBmdW5jdGlvbiBjaGVja0FnZW50RGVzY3JpcHRpb25zKFxuICBhZ2VudEluZm86IEFnZW50RGVmaW5pdGlvbnNSZXN1bHQgfCBudWxsLFxuKTogUHJvbWlzZTxDb250ZXh0V2FybmluZyB8IG51bGw+IHtcbiAgaWYgKCFhZ2VudEluZm8pIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgdG90YWxUb2tlbnMgPSBnZXRBZ2VudERlc2NyaXB0aW9uc1RvdGFsVG9rZW5zKGFnZW50SW5mbylcblxuICBpZiAodG90YWxUb2tlbnMgPD0gQUdFTlRfREVTQ1JJUFRJT05TX1RIUkVTSE9MRCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyBDYWxjdWxhdGUgdG9rZW5zIGZvciBlYWNoIGFnZW50XG4gIGNvbnN0IGFnZW50VG9rZW5zID0gYWdlbnRJbmZvLmFjdGl2ZUFnZW50c1xuICAgIC5maWx0ZXIoYSA9PiBhLnNvdXJjZSAhPT0gJ2J1aWx0LWluJylcbiAgICAubWFwKGFnZW50ID0+IHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gYCR7YWdlbnQuYWdlbnRUeXBlfTogJHthZ2VudC53aGVuVG9Vc2V9YFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogYWdlbnQuYWdlbnRUeXBlLFxuICAgICAgICB0b2tlbnM6IHJvdWdoVG9rZW5Db3VudEVzdGltYXRpb24oZGVzY3JpcHRpb24pLFxuICAgICAgfVxuICAgIH0pXG4gICAgLnNvcnQoKGEsIGIpID0+IGIudG9rZW5zIC0gYS50b2tlbnMpXG5cbiAgY29uc3QgZGV0YWlscyA9IGFnZW50VG9rZW5zXG4gICAgLnNsaWNlKDAsIDUpXG4gICAgLm1hcChhZ2VudCA9PiBgJHthZ2VudC5uYW1lfTogfiR7YWdlbnQudG9rZW5zLnRvTG9jYWxlU3RyaW5nKCl9IHRva2Vuc2ApXG5cbiAgaWYgKGFnZW50VG9rZW5zLmxlbmd0aCA+IDUpIHtcbiAgICBkZXRhaWxzLnB1c2goYCgke2FnZW50VG9rZW5zLmxlbmd0aCAtIDV9IG1vcmUgY3VzdG9tIGFnZW50cylgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnYWdlbnRfZGVzY3JpcHRpb25zJyxcbiAgICBzZXZlcml0eTogJ3dhcm5pbmcnLFxuICAgIG1lc3NhZ2U6IGBMYXJnZSBhZ2VudCBkZXNjcmlwdGlvbnMgKH4ke3RvdGFsVG9rZW5zLnRvTG9jYWxlU3RyaW5nKCl9IHRva2VucyA+ICR7QUdFTlRfREVTQ1JJUFRJT05TX1RIUkVTSE9MRC50b0xvY2FsZVN0cmluZygpfSlgLFxuICAgIGRldGFpbHMsXG4gICAgY3VycmVudFZhbHVlOiB0b3RhbFRva2VucyxcbiAgICB0aHJlc2hvbGQ6IEFHRU5UX0RFU0NSSVBUSU9OU19USFJFU0hPTEQsXG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayBNQ1AgdG9vbHMgdG9rZW4gY291bnRcbiAqL1xuYXN5bmMgZnVuY3Rpb24gY2hlY2tNY3BUb29scyhcbiAgdG9vbHM6IFRvb2xbXSxcbiAgZ2V0VG9vbFBlcm1pc3Npb25Db250ZXh0OiAoKSA9PiBQcm9taXNlPFRvb2xQZXJtaXNzaW9uQ29udGV4dD4sXG4gIGFnZW50SW5mbzogQWdlbnREZWZpbml0aW9uc1Jlc3VsdCB8IG51bGwsXG4pOiBQcm9taXNlPENvbnRleHRXYXJuaW5nIHwgbnVsbD4ge1xuICBjb25zdCBtY3BUb29scyA9IHRvb2xzLmZpbHRlcih0b29sID0+IHRvb2wuaXNNY3ApXG5cbiAgLy8gTm90ZTogTUNQIHRvb2xzIGFyZSBsb2FkZWQgYXN5bmNocm9ub3VzbHkgYW5kIG1heSBub3QgYmUgYXZhaWxhYmxlXG4gIC8vIHdoZW4gZG9jdG9yIGNvbW1hbmQgcnVucywgYXMgaXQgZXhlY3V0ZXMgYmVmb3JlIE1DUCBjb25uZWN0aW9ucyBhcmUgZXN0YWJsaXNoZWRcbiAgaWYgKG1jcFRvb2xzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICB0cnkge1xuICAgIC8vIFVzZSB0aGUgZXhpc3RpbmcgY291bnRNY3BUb29sVG9rZW5zIGZ1bmN0aW9uIGZyb20gYW5hbHl6ZUNvbnRleHRcbiAgICBjb25zdCBtb2RlbCA9IGdldE1haW5Mb29wTW9kZWwoKVxuICAgIGNvbnN0IHsgbWNwVG9vbFRva2VucywgbWNwVG9vbERldGFpbHMgfSA9IGF3YWl0IGNvdW50TWNwVG9vbFRva2VucyhcbiAgICAgIHRvb2xzLFxuICAgICAgZ2V0VG9vbFBlcm1pc3Npb25Db250ZXh0LFxuICAgICAgYWdlbnRJbmZvLFxuICAgICAgbW9kZWwsXG4gICAgKVxuXG4gICAgaWYgKG1jcFRvb2xUb2tlbnMgPD0gTUNQX1RPT0xTX1RIUkVTSE9MRCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyBHcm91cCB0b29scyBieSBzZXJ2ZXJcbiAgICBjb25zdCB0b29sc0J5U2VydmVyID0gbmV3IE1hcDxzdHJpbmcsIHsgY291bnQ6IG51bWJlcjsgdG9rZW5zOiBudW1iZXIgfT4oKVxuXG4gICAgZm9yIChjb25zdCB0b29sIG9mIG1jcFRvb2xEZXRhaWxzKSB7XG4gICAgICAvLyBFeHRyYWN0IHNlcnZlciBuYW1lIGZyb20gdG9vbCBuYW1lIChmb3JtYXQ6IG1jcF9fc2VydmVybmFtZV9fdG9vbG5hbWUpXG4gICAgICBjb25zdCBwYXJ0cyA9IHRvb2wubmFtZS5zcGxpdCgnX18nKVxuICAgICAgY29uc3Qgc2VydmVyTmFtZSA9IHBhcnRzWzFdIHx8ICd1bmtub3duJ1xuXG4gICAgICBjb25zdCBjdXJyZW50ID0gdG9vbHNCeVNlcnZlci5nZXQoc2VydmVyTmFtZSkgfHwgeyBjb3VudDogMCwgdG9rZW5zOiAwIH1cbiAgICAgIHRvb2xzQnlTZXJ2ZXIuc2V0KHNlcnZlck5hbWUsIHtcbiAgICAgICAgY291bnQ6IGN1cnJlbnQuY291bnQgKyAxLFxuICAgICAgICB0b2tlbnM6IGN1cnJlbnQudG9rZW5zICsgdG9vbC50b2tlbnMsXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIFNvcnQgc2VydmVycyBieSB0b2tlbiBjb3VudFxuICAgIGNvbnN0IHNvcnRlZFNlcnZlcnMgPSBBcnJheS5mcm9tKHRvb2xzQnlTZXJ2ZXIuZW50cmllcygpKS5zb3J0KFxuICAgICAgKGEsIGIpID0+IGJbMV0udG9rZW5zIC0gYVsxXS50b2tlbnMsXG4gICAgKVxuXG4gICAgY29uc3QgZGV0YWlscyA9IHNvcnRlZFNlcnZlcnNcbiAgICAgIC5zbGljZSgwLCA1KVxuICAgICAgLm1hcChcbiAgICAgICAgKFtuYW1lLCBpbmZvXSkgPT5cbiAgICAgICAgICBgJHtuYW1lfTogJHtpbmZvLmNvdW50fSB0b29scyAofiR7aW5mby50b2tlbnMudG9Mb2NhbGVTdHJpbmcoKX0gdG9rZW5zKWAsXG4gICAgICApXG5cbiAgICBpZiAoc29ydGVkU2VydmVycy5sZW5ndGggPiA1KSB7XG4gICAgICBkZXRhaWxzLnB1c2goYCgke3NvcnRlZFNlcnZlcnMubGVuZ3RoIC0gNX0gbW9yZSBzZXJ2ZXJzKWApXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdtY3BfdG9vbHMnLFxuICAgICAgc2V2ZXJpdHk6ICd3YXJuaW5nJyxcbiAgICAgIG1lc3NhZ2U6IGBMYXJnZSBNQ1AgdG9vbHMgY29udGV4dCAofiR7bWNwVG9vbFRva2Vucy50b0xvY2FsZVN0cmluZygpfSB0b2tlbnMgPiAke01DUF9UT09MU19USFJFU0hPTEQudG9Mb2NhbGVTdHJpbmcoKX0pYCxcbiAgICAgIGRldGFpbHMsXG4gICAgICBjdXJyZW50VmFsdWU6IG1jcFRvb2xUb2tlbnMsXG4gICAgICB0aHJlc2hvbGQ6IE1DUF9UT09MU19USFJFU0hPTEQsXG4gICAgfVxuICB9IGNhdGNoIChfZXJyb3IpIHtcbiAgICAvLyBJZiB0b2tlbiBjb3VudGluZyBmYWlscywgZmFsbCBiYWNrIHRvIGNoYXJhY3Rlci1iYXNlZCBlc3RpbWF0aW9uXG4gICAgY29uc3QgZXN0aW1hdGVkVG9rZW5zID0gbWNwVG9vbHMucmVkdWNlKCh0b3RhbCwgdG9vbCkgPT4ge1xuICAgICAgY29uc3QgY2hhcnMgPSAodG9vbC5uYW1lPy5sZW5ndGggfHwgMCkgKyB0b29sLmRlc2NyaXB0aW9uLmxlbmd0aFxuICAgICAgcmV0dXJuIHRvdGFsICsgcm91Z2hUb2tlbkNvdW50RXN0aW1hdGlvbihjaGFycy50b1N0cmluZygpKVxuICAgIH0sIDApXG5cbiAgICBpZiAoZXN0aW1hdGVkVG9rZW5zIDw9IE1DUF9UT09MU19USFJFU0hPTEQpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdtY3BfdG9vbHMnLFxuICAgICAgc2V2ZXJpdHk6ICd3YXJuaW5nJyxcbiAgICAgIG1lc3NhZ2U6IGBMYXJnZSBNQ1AgdG9vbHMgY29udGV4dCAofiR7ZXN0aW1hdGVkVG9rZW5zLnRvTG9jYWxlU3RyaW5nKCl9IHRva2VucyBlc3RpbWF0ZWQgPiAke01DUF9UT09MU19USFJFU0hPTEQudG9Mb2NhbGVTdHJpbmcoKX0pYCxcbiAgICAgIGRldGFpbHM6IFtcbiAgICAgICAgYCR7bWNwVG9vbHMubGVuZ3RofSBNQ1AgdG9vbHMgZGV0ZWN0ZWQgKHRva2VuIGNvdW50IGVzdGltYXRlZClgLFxuICAgICAgXSxcbiAgICAgIGN1cnJlbnRWYWx1ZTogZXN0aW1hdGVkVG9rZW5zLFxuICAgICAgdGhyZXNob2xkOiBNQ1BfVE9PTFNfVEhSRVNIT0xELFxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIGZvciB1bnJlYWNoYWJsZSBwZXJtaXNzaW9uIHJ1bGVzIChlLmcuLCBzcGVjaWZpYyBhbGxvdyBydWxlcyBzaGFkb3dlZCBieSB0b29sLXdpZGUgYXNrIHJ1bGVzKVxuICovXG5hc3luYyBmdW5jdGlvbiBjaGVja1VucmVhY2hhYmxlUnVsZXMoXG4gIGdldFRvb2xQZXJtaXNzaW9uQ29udGV4dDogKCkgPT4gUHJvbWlzZTxUb29sUGVybWlzc2lvbkNvbnRleHQ+LFxuKTogUHJvbWlzZTxDb250ZXh0V2FybmluZyB8IG51bGw+IHtcbiAgY29uc3QgY29udGV4dCA9IGF3YWl0IGdldFRvb2xQZXJtaXNzaW9uQ29udGV4dCgpXG4gIGNvbnN0IHNhbmRib3hBdXRvQWxsb3dFbmFibGVkID1cbiAgICBTYW5kYm94TWFuYWdlci5pc1NhbmRib3hpbmdFbmFibGVkKCkgJiZcbiAgICBTYW5kYm94TWFuYWdlci5pc0F1dG9BbGxvd0Jhc2hJZlNhbmRib3hlZEVuYWJsZWQoKVxuXG4gIGNvbnN0IHVucmVhY2hhYmxlID0gZGV0ZWN0VW5yZWFjaGFibGVSdWxlcyhjb250ZXh0LCB7XG4gICAgc2FuZGJveEF1dG9BbGxvd0VuYWJsZWQsXG4gIH0pXG5cbiAgaWYgKHVucmVhY2hhYmxlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCBkZXRhaWxzID0gdW5yZWFjaGFibGUuZmxhdE1hcChyID0+IFtcbiAgICBgJHtwZXJtaXNzaW9uUnVsZVZhbHVlVG9TdHJpbmcoci5ydWxlLnJ1bGVWYWx1ZSl9OiAke3IucmVhc29ufWAsXG4gICAgYCAgRml4OiAke3IuZml4fWAsXG4gIF0pXG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAndW5yZWFjaGFibGVfcnVsZXMnLFxuICAgIHNldmVyaXR5OiAnd2FybmluZycsXG4gICAgbWVzc2FnZTogYCR7dW5yZWFjaGFibGUubGVuZ3RofSAke3BsdXJhbCh1bnJlYWNoYWJsZS5sZW5ndGgsICd1bnJlYWNoYWJsZSBwZXJtaXNzaW9uIHJ1bGUnKX0gZGV0ZWN0ZWRgLFxuICAgIGRldGFpbHMsXG4gICAgY3VycmVudFZhbHVlOiB1bnJlYWNoYWJsZS5sZW5ndGgsXG4gICAgdGhyZXNob2xkOiAwLFxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgYWxsIGNvbnRleHQgd2FybmluZ3MgZm9yIHRoZSBkb2N0b3IgY29tbWFuZFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tDb250ZXh0V2FybmluZ3MoXG4gIHRvb2xzOiBUb29sW10sXG4gIGFnZW50SW5mbzogQWdlbnREZWZpbml0aW9uc1Jlc3VsdCB8IG51bGwsXG4gIGdldFRvb2xQZXJtaXNzaW9uQ29udGV4dDogKCkgPT4gUHJvbWlzZTxUb29sUGVybWlzc2lvbkNvbnRleHQ+LFxuKTogUHJvbWlzZTxDb250ZXh0V2FybmluZ3M+IHtcbiAgY29uc3QgW2NsYXVkZU1kV2FybmluZywgYWdlbnRXYXJuaW5nLCBtY3BXYXJuaW5nLCB1bnJlYWNoYWJsZVJ1bGVzV2FybmluZ10gPVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIGNoZWNrQ2xhdWRlTWRGaWxlcygpLFxuICAgICAgY2hlY2tBZ2VudERlc2NyaXB0aW9ucyhhZ2VudEluZm8pLFxuICAgICAgY2hlY2tNY3BUb29scyh0b29scywgZ2V0VG9vbFBlcm1pc3Npb25Db250ZXh0LCBhZ2VudEluZm8pLFxuICAgICAgY2hlY2tVbnJlYWNoYWJsZVJ1bGVzKGdldFRvb2xQZXJtaXNzaW9uQ29udGV4dCksXG4gICAgXSlcblxuICByZXR1cm4ge1xuICAgIGNsYXVkZU1kV2FybmluZyxcbiAgICBhZ2VudFdhcm5pbmcsXG4gICAgbWNwV2FybmluZyxcbiAgICB1bnJlYWNoYWJsZVJ1bGVzV2FybmluZyxcbiAgfVxufVxuIiwgImltcG9ydCBmaWd1cmVzIGZyb20gJ2ZpZ3VyZXMnXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCdcbmltcG9ydCBSZWFjdCwge1xuICBTdXNwZW5zZSxcbiAgdXNlLFxuICB1c2VDYWxsYmFjayxcbiAgdXNlRWZmZWN0LFxuICB1c2VNZW1vLFxuICB1c2VTdGF0ZSxcbn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBLZXliaW5kaW5nV2FybmluZ3MgfSBmcm9tICdzcmMvY29tcG9uZW50cy9LZXliaW5kaW5nV2FybmluZ3MuanMnXG5pbXBvcnQgeyBNY3BQYXJzaW5nV2FybmluZ3MgfSBmcm9tICdzcmMvY29tcG9uZW50cy9tY3AvTWNwUGFyc2luZ1dhcm5pbmdzLmpzJ1xuaW1wb3J0IHsgZ2V0TW9kZWxNYXhPdXRwdXRUb2tlbnMgfSBmcm9tICdzcmMvdXRpbHMvY29udGV4dC5qcydcbmltcG9ydCB7IGdldENsYXVkZUNvbmZpZ0hvbWVEaXIgfSBmcm9tICdzcmMvdXRpbHMvZW52VXRpbHMuanMnXG5pbXBvcnQgdHlwZSB7IFNldHRpbmdTb3VyY2UgfSBmcm9tICdzcmMvdXRpbHMvc2V0dGluZ3MvY29uc3RhbnRzLmpzJ1xuaW1wb3J0IHsgZ2V0T3JpZ2luYWxDd2QgfSBmcm9tICcuLi9ib290c3RyYXAvc3RhdGUuanMnXG5pbXBvcnQgdHlwZSB7IENvbW1hbmRSZXN1bHREaXNwbGF5IH0gZnJvbSAnLi4vY29tbWFuZHMuanMnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vY29tcG9uZW50cy9kZXNpZ24tc3lzdGVtL1BhbmUuanMnXG5pbXBvcnQgeyBQcmVzc0VudGVyVG9Db250aW51ZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvUHJlc3NFbnRlclRvQ29udGludWUuanMnXG5pbXBvcnQgeyBTYW5kYm94RG9jdG9yU2VjdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2FuZGJveC9TYW5kYm94RG9jdG9yU2VjdGlvbi5qcydcbmltcG9ydCB7IFZhbGlkYXRpb25FcnJvcnNMaXN0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9WYWxpZGF0aW9uRXJyb3JzTGlzdC5qcydcbmltcG9ydCB7IHVzZVNldHRpbmdzRXJyb3JzIH0gZnJvbSAnLi4vaG9va3Mvbm90aWZzL3VzZVNldHRpbmdzRXJyb3JzLmpzJ1xuaW1wb3J0IHsgdXNlRXhpdE9uQ3RybENEV2l0aEtleWJpbmRpbmdzIH0gZnJvbSAnLi4vaG9va3MvdXNlRXhpdE9uQ3RybENEV2l0aEtleWJpbmRpbmdzLmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdXNlS2V5YmluZGluZ3MgfSBmcm9tICcuLi9rZXliaW5kaW5ncy91c2VLZXliaW5kaW5nLmpzJ1xuaW1wb3J0IHsgdXNlQXBwU3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9BcHBTdGF0ZS5qcydcbmltcG9ydCB7IGdldFBsdWdpbkVycm9yTWVzc2FnZSB9IGZyb20gJy4uL3R5cGVzL3BsdWdpbi5qcydcbmltcG9ydCB7XG4gIGdldEdjc0Rpc3RUYWdzLFxuICBnZXROcG1EaXN0VGFncyxcbiAgdHlwZSBOcG1EaXN0VGFncyxcbn0gZnJvbSAnLi4vdXRpbHMvYXV0b1VwZGF0ZXIuanMnXG5pbXBvcnQge1xuICB0eXBlIENvbnRleHRXYXJuaW5ncyxcbiAgY2hlY2tDb250ZXh0V2FybmluZ3MsXG59IGZyb20gJy4uL3V0aWxzL2RvY3RvckNvbnRleHRXYXJuaW5ncy5qcydcbmltcG9ydCB7XG4gIHR5cGUgRGlhZ25vc3RpY0luZm8sXG4gIGdldERvY3RvckRpYWdub3N0aWMsXG59IGZyb20gJy4uL3V0aWxzL2RvY3RvckRpYWdub3N0aWMuanMnXG5pbXBvcnQgeyB2YWxpZGF0ZUJvdW5kZWRJbnRFbnZWYXIgfSBmcm9tICcuLi91dGlscy9lbnZWYWxpZGF0aW9uLmpzJ1xuaW1wb3J0IHsgcGF0aEV4aXN0cyB9IGZyb20gJy4uL3V0aWxzL2ZpbGUuanMnXG5pbXBvcnQge1xuICBjbGVhbnVwU3RhbGVMb2NrcyxcbiAgZ2V0QWxsTG9ja0luZm8sXG4gIGlzUGlkQmFzZWRMb2NraW5nRW5hYmxlZCxcbiAgdHlwZSBMb2NrSW5mbyxcbn0gZnJvbSAnLi4vdXRpbHMvbmF0aXZlSW5zdGFsbGVyL3BpZExvY2suanMnXG5pbXBvcnQgeyBnZXRJbml0aWFsU2V0dGluZ3MgfSBmcm9tICcuLi91dGlscy9zZXR0aW5ncy9zZXR0aW5ncy5qcydcbmltcG9ydCB7XG4gIEJBU0hfTUFYX09VVFBVVF9ERUZBVUxULFxuICBCQVNIX01BWF9PVVRQVVRfVVBQRVJfTElNSVQsXG59IGZyb20gJy4uL3V0aWxzL3NoZWxsL291dHB1dExpbWl0cy5qcydcbmltcG9ydCB7XG4gIFRBU0tfTUFYX09VVFBVVF9ERUZBVUxULFxuICBUQVNLX01BWF9PVVRQVVRfVVBQRVJfTElNSVQsXG59IGZyb20gJy4uL3V0aWxzL3Rhc2svb3V0cHV0Rm9ybWF0dGluZy5qcydcbmltcG9ydCB7IGdldFhER1N0YXRlSG9tZSB9IGZyb20gJy4uL3V0aWxzL3hkZy5qcydcblxudHlwZSBQcm9wcyA9IHtcbiAgb25Eb25lOiAoXG4gICAgcmVzdWx0Pzogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7IGRpc3BsYXk/OiBDb21tYW5kUmVzdWx0RGlzcGxheSB9LFxuICApID0+IHZvaWRcbn1cblxudHlwZSBBZ2VudEluZm8gPSB7XG4gIGFjdGl2ZUFnZW50czogQXJyYXk8e1xuICAgIGFnZW50VHlwZTogc3RyaW5nXG4gICAgc291cmNlOiBTZXR0aW5nU291cmNlIHwgJ2J1aWx0LWluJyB8ICdwbHVnaW4nXG4gIH0+XG4gIHVzZXJBZ2VudHNEaXI6IHN0cmluZ1xuICBwcm9qZWN0QWdlbnRzRGlyOiBzdHJpbmdcbiAgdXNlckRpckV4aXN0czogYm9vbGVhblxuICBwcm9qZWN0RGlyRXhpc3RzOiBib29sZWFuXG4gIGZhaWxlZEZpbGVzPzogQXJyYXk8eyBwYXRoOiBzdHJpbmc7IGVycm9yOiBzdHJpbmcgfT5cbn1cblxudHlwZSBWZXJzaW9uTG9ja0luZm8gPSB7XG4gIGVuYWJsZWQ6IGJvb2xlYW5cbiAgbG9ja3M6IExvY2tJbmZvW11cbiAgbG9ja3NEaXI6IHN0cmluZ1xuICBzdGFsZUxvY2tzQ2xlYW5lZDogbnVtYmVyXG59XG5cbmZ1bmN0aW9uIERpc3RUYWdzRGlzcGxheSh7XG4gIHByb21pc2UsXG59OiB7XG4gIHByb21pc2U6IFByb21pc2U8TnBtRGlzdFRhZ3M+XG59KTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgZGlzdFRhZ3MgPSB1c2UocHJvbWlzZSlcbiAgaWYgKCFkaXN0VGFncy5sYXRlc3QpIHtcbiAgICByZXR1cm4gPFRleHQgZGltQ29sb3I+4pSUIEZhaWxlZCB0byBmZXRjaCB2ZXJzaW9uczwvVGV4dD5cbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7ZGlzdFRhZ3Muc3RhYmxlICYmIDxUZXh0PuKUlCBTdGFibGUgdmVyc2lvbjoge2Rpc3RUYWdzLnN0YWJsZX08L1RleHQ+fVxuICAgICAgPFRleHQ+4pSUIExhdGVzdCB2ZXJzaW9uOiB7ZGlzdFRhZ3MubGF0ZXN0fTwvVGV4dD5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gRG9jdG9yKHsgb25Eb25lIH06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgYWdlbnREZWZpbml0aW9ucyA9IHVzZUFwcFN0YXRlKHMgPT4gcy5hZ2VudERlZmluaXRpb25zKVxuICBjb25zdCBtY3BUb29scyA9IHVzZUFwcFN0YXRlKHMgPT4gcy5tY3AudG9vbHMpXG4gIGNvbnN0IHRvb2xQZXJtaXNzaW9uQ29udGV4dCA9IHVzZUFwcFN0YXRlKHMgPT4gcy50b29sUGVybWlzc2lvbkNvbnRleHQpXG4gIGNvbnN0IHBsdWdpbnNFcnJvcnMgPSB1c2VBcHBTdGF0ZShzID0+IHMucGx1Z2lucy5lcnJvcnMpXG4gIHVzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncygpXG5cbiAgY29uc3QgdG9vbHMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gbWNwVG9vbHMgfHwgW11cbiAgfSwgW21jcFRvb2xzXSlcblxuICBjb25zdCBbZGlhZ25vc3RpYywgc2V0RGlhZ25vc3RpY10gPSB1c2VTdGF0ZTxEaWFnbm9zdGljSW5mbyB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFthZ2VudEluZm8sIHNldEFnZW50SW5mb10gPSB1c2VTdGF0ZTxBZ2VudEluZm8gfCBudWxsPihudWxsKVxuICBjb25zdCBbY29udGV4dFdhcm5pbmdzLCBzZXRDb250ZXh0V2FybmluZ3NdID1cbiAgICB1c2VTdGF0ZTxDb250ZXh0V2FybmluZ3MgfCBudWxsPihudWxsKVxuICBjb25zdCBbdmVyc2lvbkxvY2tJbmZvLCBzZXRWZXJzaW9uTG9ja0luZm9dID1cbiAgICB1c2VTdGF0ZTxWZXJzaW9uTG9ja0luZm8gfCBudWxsPihudWxsKVxuICBjb25zdCB2YWxpZGF0aW9uRXJyb3JzID0gdXNlU2V0dGluZ3NFcnJvcnMoKVxuXG4gIC8vIENyZWF0ZSBwcm9taXNlIG9uY2UgZm9yIGRpc3QtdGFncyBmZXRjaCAoZGVwZW5kcyBvbiBkaWFnbm9zdGljKVxuICBjb25zdCBkaXN0VGFnc1Byb21pc2UgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBnZXREb2N0b3JEaWFnbm9zdGljKCkudGhlbihkaWFnID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hEaXN0VGFncyA9XG4gICAgICAgICAgZGlhZy5pbnN0YWxsYXRpb25UeXBlID09PSAnbmF0aXZlJyA/IGdldEdjc0Rpc3RUYWdzIDogZ2V0TnBtRGlzdFRhZ3NcbiAgICAgICAgcmV0dXJuIGZldGNoRGlzdFRhZ3MoKS5jYXRjaCgoKSA9PiAoeyBsYXRlc3Q6IG51bGwsIHN0YWJsZTogbnVsbCB9KSlcbiAgICAgIH0pLFxuICAgIFtdLFxuICApXG4gIGNvbnN0IGF1dG9VcGRhdGVzQ2hhbm5lbCA9XG4gICAgZ2V0SW5pdGlhbFNldHRpbmdzKCk/LmF1dG9VcGRhdGVzQ2hhbm5lbCA/PyAnbGF0ZXN0J1xuXG4gIGNvbnN0IGVycm9yc0V4Y2x1ZGluZ01jcCA9IHZhbGlkYXRpb25FcnJvcnMuZmlsdGVyKFxuICAgIGVycm9yID0+IGVycm9yLm1jcEVycm9yTWV0YWRhdGEgPT09IHVuZGVmaW5lZCxcbiAgKVxuXG4gIGNvbnN0IGVudlZhbGlkYXRpb25FcnJvcnMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBlbnZWYXJzID0gW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnQkFTSF9NQVhfT1VUUFVUX0xFTkdUSCcsXG4gICAgICAgIGRlZmF1bHQ6IEJBU0hfTUFYX09VVFBVVF9ERUZBVUxULFxuICAgICAgICB1cHBlckxpbWl0OiBCQVNIX01BWF9PVVRQVVRfVVBQRVJfTElNSVQsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnVEFTS19NQVhfT1VUUFVUX0xFTkdUSCcsXG4gICAgICAgIGRlZmF1bHQ6IFRBU0tfTUFYX09VVFBVVF9ERUZBVUxULFxuICAgICAgICB1cHBlckxpbWl0OiBUQVNLX01BWF9PVVRQVVRfVVBQRVJfTElNSVQsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQ0xBVURFX0NPREVfTUFYX09VVFBVVF9UT0tFTlMnLFxuICAgICAgICAvLyBDaGVjayBmb3IgdmFsdWVzIGFnYWluc3QgdGhlIGxhdGVzdCBzdXBwb3J0ZWQgbW9kZWxcbiAgICAgICAgLi4uZ2V0TW9kZWxNYXhPdXRwdXRUb2tlbnMoJ2NsYXVkZS1vcHVzLTQtNicpLFxuICAgICAgfSxcbiAgICBdXG4gICAgcmV0dXJuIGVudlZhcnNcbiAgICAgIC5tYXAodiA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvY2Vzcy5lbnZbdi5uYW1lXVxuICAgICAgICBjb25zdCByZXN1bHQgPSB2YWxpZGF0ZUJvdW5kZWRJbnRFbnZWYXIoXG4gICAgICAgICAgdi5uYW1lLFxuICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIHYuZGVmYXVsdCxcbiAgICAgICAgICB2LnVwcGVyTGltaXQsXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIHsgbmFtZTogdi5uYW1lLCAuLi5yZXN1bHQgfVxuICAgICAgfSlcbiAgICAgIC5maWx0ZXIodiA9PiB2LnN0YXR1cyAhPT0gJ3ZhbGlkJylcbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2b2lkIGdldERvY3RvckRpYWdub3N0aWMoKS50aGVuKHNldERpYWdub3N0aWMpXG5cbiAgICB2b2lkIChhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB1c2VyQWdlbnRzRGlyID0gam9pbihnZXRDbGF1ZGVDb25maWdIb21lRGlyKCksICdhZ2VudHMnKVxuICAgICAgY29uc3QgcHJvamVjdEFnZW50c0RpciA9IGpvaW4oZ2V0T3JpZ2luYWxDd2QoKSwgJy5jbGF1ZGUnLCAnYWdlbnRzJylcblxuICAgICAgY29uc3QgeyBhY3RpdmVBZ2VudHMsIGFsbEFnZW50cywgZmFpbGVkRmlsZXMgfSA9IGFnZW50RGVmaW5pdGlvbnNcblxuICAgICAgY29uc3QgW3VzZXJEaXJFeGlzdHMsIHByb2plY3REaXJFeGlzdHNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBwYXRoRXhpc3RzKHVzZXJBZ2VudHNEaXIpLFxuICAgICAgICBwYXRoRXhpc3RzKHByb2plY3RBZ2VudHNEaXIpLFxuICAgICAgXSlcblxuICAgICAgY29uc3QgYWdlbnRJbmZvRGF0YSA9IHtcbiAgICAgICAgYWN0aXZlQWdlbnRzOiBhY3RpdmVBZ2VudHMubWFwKGEgPT4gKHtcbiAgICAgICAgICBhZ2VudFR5cGU6IGEuYWdlbnRUeXBlLFxuICAgICAgICAgIHNvdXJjZTogYS5zb3VyY2UsXG4gICAgICAgIH0pKSxcbiAgICAgICAgdXNlckFnZW50c0RpcixcbiAgICAgICAgcHJvamVjdEFnZW50c0RpcixcbiAgICAgICAgdXNlckRpckV4aXN0cyxcbiAgICAgICAgcHJvamVjdERpckV4aXN0cyxcbiAgICAgICAgZmFpbGVkRmlsZXMsXG4gICAgICB9XG4gICAgICBzZXRBZ2VudEluZm8oYWdlbnRJbmZvRGF0YSlcblxuICAgICAgY29uc3Qgd2FybmluZ3MgPSBhd2FpdCBjaGVja0NvbnRleHRXYXJuaW5ncyhcbiAgICAgICAgdG9vbHMsXG4gICAgICAgIHtcbiAgICAgICAgICBhY3RpdmVBZ2VudHMsXG4gICAgICAgICAgYWxsQWdlbnRzLFxuICAgICAgICAgIGZhaWxlZEZpbGVzLFxuICAgICAgICB9LFxuICAgICAgICBhc3luYyAoKSA9PiB0b29sUGVybWlzc2lvbkNvbnRleHQsXG4gICAgICApXG4gICAgICBzZXRDb250ZXh0V2FybmluZ3Mod2FybmluZ3MpXG5cbiAgICAgIC8vIEZldGNoIHZlcnNpb24gbG9jayBpbmZvIGlmIFBJRC1iYXNlZCBsb2NraW5nIGlzIGVuYWJsZWRcbiAgICAgIGlmIChpc1BpZEJhc2VkTG9ja2luZ0VuYWJsZWQoKSkge1xuICAgICAgICBjb25zdCBsb2Nrc0RpciA9IGpvaW4oZ2V0WERHU3RhdGVIb21lKCksICdjbGF1ZGUnLCAnbG9ja3MnKVxuICAgICAgICBjb25zdCBzdGFsZUxvY2tzQ2xlYW5lZCA9IGNsZWFudXBTdGFsZUxvY2tzKGxvY2tzRGlyKVxuICAgICAgICBjb25zdCBsb2NrcyA9IGdldEFsbExvY2tJbmZvKGxvY2tzRGlyKVxuICAgICAgICBzZXRWZXJzaW9uTG9ja0luZm8oe1xuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgbG9ja3MsXG4gICAgICAgICAgbG9ja3NEaXIsXG4gICAgICAgICAgc3RhbGVMb2Nrc0NsZWFuZWQsXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRWZXJzaW9uTG9ja0luZm8oe1xuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIGxvY2tzOiBbXSxcbiAgICAgICAgICBsb2Nrc0RpcjogJycsXG4gICAgICAgICAgc3RhbGVMb2Nrc0NsZWFuZWQ6IDAsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSkoKVxuICB9LCBbdG9vbFBlcm1pc3Npb25Db250ZXh0LCB0b29scywgYWdlbnREZWZpbml0aW9uc10pXG5cbiAgY29uc3QgaGFuZGxlRGlzbWlzcyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBvbkRvbmUoJ0NsYXVkZSBDb2RlIGRpYWdub3N0aWNzIGRpc21pc3NlZCcsIHsgZGlzcGxheTogJ3N5c3RlbScgfSlcbiAgfSwgW29uRG9uZV0pXG5cbiAgLy8gSGFuZGxlIGRpc21pc3MgdmlhIGtleWJpbmRpbmdzIChFbnRlciwgRXNjYXBlLCBvciBDdHJsK0MpXG4gIHVzZUtleWJpbmRpbmdzKFxuICAgIHtcbiAgICAgICdjb25maXJtOnllcyc6IGhhbmRsZURpc21pc3MsXG4gICAgICAnY29uZmlybTpubyc6IGhhbmRsZURpc21pc3MsXG4gICAgfSxcbiAgICB7IGNvbnRleHQ6ICdDb25maXJtYXRpb24nIH0sXG4gIClcblxuICAvLyBMb2FkaW5nIHN0YXRlXG4gIGlmICghZGlhZ25vc3RpYykge1xuICAgIHJldHVybiAoXG4gICAgICA8UGFuZT5cbiAgICAgICAgPFRleHQgZGltQ29sb3I+Q2hlY2tpbmcgaW5zdGFsbGF0aW9uIHN0YXR1c+KApjwvVGV4dD5cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cblxuICAvLyBGb3JtYXQgdGhlIGRpYWdub3N0aWMgb3V0cHV0IGFjY29yZGluZyB0byBzcGVjXG4gIHJldHVybiAoXG4gICAgPFBhbmU+XG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgPFRleHQgYm9sZD5EaWFnbm9zdGljczwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAg4pSUIEN1cnJlbnRseSBydW5uaW5nOiB7ZGlhZ25vc3RpYy5pbnN0YWxsYXRpb25UeXBlfSAoXG4gICAgICAgICAge2RpYWdub3N0aWMudmVyc2lvbn0pXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAge2RpYWdub3N0aWMucGFja2FnZU1hbmFnZXIgJiYgKFxuICAgICAgICAgIDxUZXh0PuKUlCBQYWNrYWdlIG1hbmFnZXI6IHtkaWFnbm9zdGljLnBhY2thZ2VNYW5hZ2VyfTwvVGV4dD5cbiAgICAgICAgKX1cbiAgICAgICAgPFRleHQ+4pSUIFBhdGg6IHtkaWFnbm9zdGljLmluc3RhbGxhdGlvblBhdGh9PC9UZXh0PlxuICAgICAgICA8VGV4dD7ilJQgSW52b2tlZDoge2RpYWdub3N0aWMuaW52b2tlZEJpbmFyeX08L1RleHQ+XG4gICAgICAgIDxUZXh0PuKUlCBDb25maWcgaW5zdGFsbCBtZXRob2Q6IHtkaWFnbm9zdGljLmNvbmZpZ0luc3RhbGxNZXRob2R9PC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICDilJQgU2VhcmNoOiB7ZGlhZ25vc3RpYy5yaXBncmVwU3RhdHVzLndvcmtpbmcgPyAnT0snIDogJ05vdCB3b3JraW5nJ30gKFxuICAgICAgICAgIHtkaWFnbm9zdGljLnJpcGdyZXBTdGF0dXMubW9kZSA9PT0gJ2VtYmVkZGVkJ1xuICAgICAgICAgICAgPyAnYnVuZGxlZCdcbiAgICAgICAgICAgIDogZGlhZ25vc3RpYy5yaXBncmVwU3RhdHVzLm1vZGUgPT09ICdidWlsdGluJ1xuICAgICAgICAgICAgICA/ICd2ZW5kb3InXG4gICAgICAgICAgICAgIDogZGlhZ25vc3RpYy5yaXBncmVwU3RhdHVzLnN5c3RlbVBhdGggfHwgJ3N5c3RlbSd9XG4gICAgICAgICAgKVxuICAgICAgICA8L1RleHQ+XG5cbiAgICAgICAgey8qIFNob3cgcmVjb21tZW5kYXRpb24gaWYgYXV0by11cGRhdGVzIGFyZSBkaXNhYmxlZCAqL31cbiAgICAgICAge2RpYWdub3N0aWMucmVjb21tZW5kYXRpb24gJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8VGV4dD48L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIj5cbiAgICAgICAgICAgICAgUmVjb21tZW5kYXRpb246IHtkaWFnbm9zdGljLnJlY29tbWVuZGF0aW9uLnNwbGl0KCdcXG4nKVswXX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPntkaWFnbm9zdGljLnJlY29tbWVuZGF0aW9uLnNwbGl0KCdcXG4nKVsxXX08L1RleHQ+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIFNob3cgbXVsdGlwbGUgaW5zdGFsbGF0aW9ucyB3YXJuaW5nICovfVxuICAgICAgICB7ZGlhZ25vc3RpYy5tdWx0aXBsZUluc3RhbGxhdGlvbnMubGVuZ3RoID4gMSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxUZXh0PjwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2FybmluZ1wiPldhcm5pbmc6IE11bHRpcGxlIGluc3RhbGxhdGlvbnMgZm91bmQ8L1RleHQ+XG4gICAgICAgICAgICB7ZGlhZ25vc3RpYy5tdWx0aXBsZUluc3RhbGxhdGlvbnMubWFwKChpbnN0YWxsLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxUZXh0IGtleT17aX0+XG4gICAgICAgICAgICAgICAg4pSUIHtpbnN0YWxsLnR5cGV9IGF0IHtpbnN0YWxsLnBhdGh9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBTaG93IGNvbmZpZ3VyYXRpb24gd2FybmluZ3MgKi99XG4gICAgICAgIHtkaWFnbm9zdGljLndhcm5pbmdzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8VGV4dD48L1RleHQ+XG4gICAgICAgICAgICB7ZGlhZ25vc3RpYy53YXJuaW5ncy5tYXAoKHdhcm5pbmcsIGkpID0+IChcbiAgICAgICAgICAgICAgPEJveCBrZXk9e2l9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIj5XYXJuaW5nOiB7d2FybmluZy5pc3N1ZX08L1RleHQ+XG4gICAgICAgICAgICAgICAgPFRleHQ+Rml4OiB7d2FybmluZy5maXh9PC9UZXh0PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBTaG93IGludmFsaWQgc2V0dGluZ3MgZXJyb3JzICovfVxuICAgICAgICB7ZXJyb3JzRXhjbHVkaW5nTWNwLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpblRvcD17MX0gbWFyZ2luQm90dG9tPXsxfT5cbiAgICAgICAgICAgIDxUZXh0IGJvbGQ+SW52YWxpZCBTZXR0aW5nczwvVGV4dD5cbiAgICAgICAgICAgIDxWYWxpZGF0aW9uRXJyb3JzTGlzdCBlcnJvcnM9e2Vycm9yc0V4Y2x1ZGluZ01jcH0gLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuXG4gICAgICB7LyogVXBkYXRlcyBzZWN0aW9uICovfVxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIDxUZXh0IGJvbGQ+VXBkYXRlczwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAg4pSUIEF1dG8tdXBkYXRlczp7JyAnfVxuICAgICAgICAgIHtkaWFnbm9zdGljLnBhY2thZ2VNYW5hZ2VyXG4gICAgICAgICAgICA/ICdNYW5hZ2VkIGJ5IHBhY2thZ2UgbWFuYWdlcidcbiAgICAgICAgICAgIDogZGlhZ25vc3RpYy5hdXRvVXBkYXRlc31cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICB7ZGlhZ25vc3RpYy5oYXNVcGRhdGVQZXJtaXNzaW9ucyAhPT0gbnVsbCAmJiAoXG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICDilJQgVXBkYXRlIHBlcm1pc3Npb25zOnsnICd9XG4gICAgICAgICAgICB7ZGlhZ25vc3RpYy5oYXNVcGRhdGVQZXJtaXNzaW9ucyA/ICdZZXMnIDogJ05vIChyZXF1aXJlcyBzdWRvKSd9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICApfVxuICAgICAgICA8VGV4dD7ilJQgQXV0by11cGRhdGUgY2hhbm5lbDoge2F1dG9VcGRhdGVzQ2hhbm5lbH08L1RleHQ+XG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17bnVsbH0+XG4gICAgICAgICAgPERpc3RUYWdzRGlzcGxheSBwcm9taXNlPXtkaXN0VGFnc1Byb21pc2V9IC8+XG4gICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICA8L0JveD5cblxuICAgICAgPFNhbmRib3hEb2N0b3JTZWN0aW9uIC8+XG5cbiAgICAgIDxNY3BQYXJzaW5nV2FybmluZ3MgLz5cblxuICAgICAgPEtleWJpbmRpbmdXYXJuaW5ncyAvPlxuXG4gICAgICB7LyogRW52aXJvbm1lbnQgVmFyaWFibGVzICovfVxuICAgICAge2VudlZhbGlkYXRpb25FcnJvcnMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgIDxUZXh0IGJvbGQ+RW52aXJvbm1lbnQgVmFyaWFibGVzPC9UZXh0PlxuICAgICAgICAgIHtlbnZWYWxpZGF0aW9uRXJyb3JzLm1hcCgodmFsaWRhdGlvbiwgaSkgPT4gKFxuICAgICAgICAgICAgPFRleHQga2V5PXtpfT5cbiAgICAgICAgICAgICAg4pSUIHt2YWxpZGF0aW9uLm5hbWV9OnsnICd9XG4gICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgY29sb3I9e3ZhbGlkYXRpb24uc3RhdHVzID09PSAnY2FwcGVkJyA/ICd3YXJuaW5nJyA6ICdlcnJvcid9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5tZXNzYWdlfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cblxuICAgICAgey8qIFZlcnNpb24gTG9ja3MgKFBJRC1iYXNlZCBsb2NraW5nKSAqL31cbiAgICAgIHt2ZXJzaW9uTG9ja0luZm8/LmVuYWJsZWQgJiYgKFxuICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICA8VGV4dCBib2xkPlZlcnNpb24gTG9ja3M8L1RleHQ+XG4gICAgICAgICAge3ZlcnNpb25Mb2NrSW5mby5zdGFsZUxvY2tzQ2xlYW5lZCA+IDAgJiYgKFxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgIOKUlCBDbGVhbmVkIHt2ZXJzaW9uTG9ja0luZm8uc3RhbGVMb2Nrc0NsZWFuZWR9IHN0YWxlIGxvY2socylcbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHt2ZXJzaW9uTG9ja0luZm8ubG9ja3MubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+4pSUIE5vIGFjdGl2ZSB2ZXJzaW9uIGxvY2tzPC9UZXh0PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICB2ZXJzaW9uTG9ja0luZm8ubG9ja3MubWFwKChsb2NrLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxUZXh0IGtleT17aX0+XG4gICAgICAgICAgICAgICAg4pSUIHtsb2NrLnZlcnNpb259OiBQSUQge2xvY2sucGlkfXsnICd9XG4gICAgICAgICAgICAgICAge2xvY2suaXNQcm9jZXNzUnVubmluZyA/IChcbiAgICAgICAgICAgICAgICAgIDxUZXh0PihydW5uaW5nKTwvVGV4dD5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJ3YXJuaW5nXCI+KHN0YWxlKTwvVGV4dD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICApKVxuICAgICAgICAgICl9XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cblxuICAgICAge2FnZW50SW5mbz8uZmFpbGVkRmlsZXMgJiYgYWdlbnRJbmZvLmZhaWxlZEZpbGVzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICA8VGV4dCBib2xkIGNvbG9yPVwiZXJyb3JcIj5cbiAgICAgICAgICAgIEFnZW50IFBhcnNlIEVycm9yc1xuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBjb2xvcj1cImVycm9yXCI+XG4gICAgICAgICAgICDilJQgRmFpbGVkIHRvIHBhcnNlIHthZ2VudEluZm8uZmFpbGVkRmlsZXMubGVuZ3RofSBhZ2VudCBmaWxlKHMpOlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICB7YWdlbnRJbmZvLmZhaWxlZEZpbGVzLm1hcCgoZmlsZSwgaSkgPT4gKFxuICAgICAgICAgICAgPFRleHQga2V5PXtpfSBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgeycgICd94pSUIHtmaWxlLnBhdGh9OiB7ZmlsZS5lcnJvcn1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuXG4gICAgICB7LyogUGx1Z2luIEVycm9ycyAqL31cbiAgICAgIHtwbHVnaW5zRXJyb3JzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICA8VGV4dCBib2xkIGNvbG9yPVwiZXJyb3JcIj5cbiAgICAgICAgICAgIFBsdWdpbiBFcnJvcnNcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHQgY29sb3I9XCJlcnJvclwiPlxuICAgICAgICAgICAg4pSUIHtwbHVnaW5zRXJyb3JzLmxlbmd0aH0gcGx1Z2luIGVycm9yKHMpIGRldGVjdGVkOlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICB7cGx1Z2luc0Vycm9ycy5tYXAoKGVycm9yLCBpKSA9PiAoXG4gICAgICAgICAgICA8VGV4dCBrZXk9e2l9IGRpbUNvbG9yPlxuICAgICAgICAgICAgICB7JyAgJ33ilJQge2Vycm9yLnNvdXJjZSB8fCAndW5rbm93bid9XG4gICAgICAgICAgICAgIHsncGx1Z2luJyBpbiBlcnJvciAmJiBlcnJvci5wbHVnaW4gPyBgIFske2Vycm9yLnBsdWdpbn1dYCA6ICcnfTp7JyAnfVxuICAgICAgICAgICAgICB7Z2V0UGx1Z2luRXJyb3JNZXNzYWdlKGVycm9yKX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuXG4gICAgICB7LyogVW5yZWFjaGFibGUgUGVybWlzc2lvbiBSdWxlcyBXYXJuaW5nICovfVxuICAgICAge2NvbnRleHRXYXJuaW5ncz8udW5yZWFjaGFibGVSdWxlc1dhcm5pbmcgJiYgKFxuICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICA8VGV4dCBib2xkIGNvbG9yPVwid2FybmluZ1wiPlxuICAgICAgICAgICAgVW5yZWFjaGFibGUgUGVybWlzc2lvbiBSdWxlc1xuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgIOKUlHsnICd9XG4gICAgICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIj5cbiAgICAgICAgICAgICAge2ZpZ3VyZXMud2FybmluZ317JyAnfVxuICAgICAgICAgICAgICB7Y29udGV4dFdhcm5pbmdzLnVucmVhY2hhYmxlUnVsZXNXYXJuaW5nLm1lc3NhZ2V9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIHtjb250ZXh0V2FybmluZ3MudW5yZWFjaGFibGVSdWxlc1dhcm5pbmcuZGV0YWlscy5tYXAoKGRldGFpbCwgaSkgPT4gKFxuICAgICAgICAgICAgPFRleHQga2V5PXtpfSBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgeycgICd94pSUIHtkZXRhaWx9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cblxuICAgICAgey8qIENvbnRleHQgVXNhZ2UgV2FybmluZ3MgKi99XG4gICAgICB7Y29udGV4dFdhcm5pbmdzICYmXG4gICAgICAgIChjb250ZXh0V2FybmluZ3MuY2xhdWRlTWRXYXJuaW5nIHx8XG4gICAgICAgICAgY29udGV4dFdhcm5pbmdzLmFnZW50V2FybmluZyB8fFxuICAgICAgICAgIGNvbnRleHRXYXJuaW5ncy5tY3BXYXJuaW5nKSAmJiAoXG4gICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8VGV4dCBib2xkPkNvbnRleHQgVXNhZ2UgV2FybmluZ3M8L1RleHQ+XG5cbiAgICAgICAgICAgIHtjb250ZXh0V2FybmluZ3MuY2xhdWRlTWRXYXJuaW5nICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgIOKUlHsnICd9XG4gICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIj5cbiAgICAgICAgICAgICAgICAgICAge2ZpZ3VyZXMud2FybmluZ30ge2NvbnRleHRXYXJuaW5ncy5jbGF1ZGVNZFdhcm5pbmcubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPFRleHQ+eycgICd94pSUIEZpbGVzOjwvVGV4dD5cbiAgICAgICAgICAgICAgICB7Y29udGV4dFdhcm5pbmdzLmNsYXVkZU1kV2FybmluZy5kZXRhaWxzLm1hcCgoZGV0YWlsLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8VGV4dCBrZXk9e2l9IGRpbUNvbG9yPlxuICAgICAgICAgICAgICAgICAgICB7JyAgICAnfeKUlCB7ZGV0YWlsfVxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHtjb250ZXh0V2FybmluZ3MuYWdlbnRXYXJuaW5nICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgIOKUlHsnICd9XG4gICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIj5cbiAgICAgICAgICAgICAgICAgICAge2ZpZ3VyZXMud2FybmluZ30ge2NvbnRleHRXYXJuaW5ncy5hZ2VudFdhcm5pbmcubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPFRleHQ+eycgICd94pSUIFRvcCBjb250cmlidXRvcnM6PC9UZXh0PlxuICAgICAgICAgICAgICAgIHtjb250ZXh0V2FybmluZ3MuYWdlbnRXYXJuaW5nLmRldGFpbHMubWFwKChkZXRhaWwsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxUZXh0IGtleT17aX0gZGltQ29sb3I+XG4gICAgICAgICAgICAgICAgICAgIHsnICAgICd94pSUIHtkZXRhaWx9XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge2NvbnRleHRXYXJuaW5ncy5tY3BXYXJuaW5nICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgIOKUlHsnICd9XG4gICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIj5cbiAgICAgICAgICAgICAgICAgICAge2ZpZ3VyZXMud2FybmluZ30ge2NvbnRleHRXYXJuaW5ncy5tY3BXYXJuaW5nLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxUZXh0PnsnICAnfeKUlCBNQ1Agc2VydmVyczo8L1RleHQ+XG4gICAgICAgICAgICAgICAge2NvbnRleHRXYXJuaW5ncy5tY3BXYXJuaW5nLmRldGFpbHMubWFwKChkZXRhaWwsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxUZXh0IGtleT17aX0gZGltQ29sb3I+XG4gICAgICAgICAgICAgICAgICAgIHsnICAgICd94pSUIHtkZXRhaWx9XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cblxuICAgICAgPEJveD5cbiAgICAgICAgPFByZXNzRW50ZXJUb0NvbnRpbnVlIC8+XG4gICAgICA8L0JveD5cbiAgICA8L1BhbmU+XG4gIClc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LEtBQUE7QUFBQSxTQUU2QkosSUFBQ0ssSUFBSTVMO0FBQU07QUFGeEMsU0FBQVIsUUFBQStMLEdBQUE7QUFBQSxTQUNxQ0EsRUFBQ2pNO0FBQWlCOzs7O0FBdkc5RDtBQUVBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUlBO0FBSUE7OzsiLAogICJuYW1lcyI6IFsiS2V5YmluZGluZ1dhcm5pbmdzIiwgIiQiLCAiX2MiLCAiaXNLZXliaW5kaW5nQ3VzdG9taXphdGlvbkVuYWJsZWQiLCAidDAiLCAidDEiLCAiU3ltYm9sIiwgImZvciIsICJiYjAiLCAid2FybmluZ3MiLCAiZ2V0Q2FjaGVkS2V5YmluZGluZ1dhcm5pbmdzIiwgImxlbmd0aCIsICJlcnJvcnMiLCAiZmlsdGVyIiwgIl90ZW1wIiwgIndhcm5zIiwgIl90ZW1wMiIsICJnZXRLZXliaW5kaW5nc1BhdGgiLCAibWFwIiwgIl90ZW1wMyIsICJfdGVtcDQiLCAid2FybmluZyIsICJpXzAiLCAiaSIsICJtZXNzYWdlIiwgInN1Z2dlc3Rpb24iLCAiZXJyb3IiLCAid18wIiwgInciLCAic2V2ZXJpdHkiLCAiU2FuZGJveERvY3RvclNlY3Rpb24iLCAiJCIsICJfYyIsICJTYW5kYm94TWFuYWdlciIsICJpc1N1cHBvcnRlZFBsYXRmb3JtIiwgImlzU2FuZGJveEVuYWJsZWRJblNldHRpbmdzIiwgInQwIiwgInQxIiwgIlN5bWJvbCIsICJmb3IiLCAiYmIwIiwgImRlcENoZWNrIiwgImNoZWNrRGVwZW5kZW5jaWVzIiwgImhhc0Vycm9ycyIsICJlcnJvcnMiLCAibGVuZ3RoIiwgImhhc1dhcm5pbmdzIiwgIndhcm5pbmdzIiwgInN0YXR1c0NvbG9yIiwgInN0YXR1c1RleHQiLCAibWFwIiwgIl90ZW1wIiwgIl90ZW1wMiIsICJ3IiwgImlfMCIsICJpIiwgImUiLCAiam9pbiIsICJEaXN0VGFnc0Rpc3BsYXkiLCAidDAiLCAiJCIsICJfYyIsICJwcm9taXNlIiwgImRpc3RUYWdzIiwgInVzZSIsICJsYXRlc3QiLCAidDEiLCAiU3ltYm9sIiwgImZvciIsICJzdGFibGUiLCAidDIiLCAidDMiLCAiRG9jdG9yIiwgIm9uRG9uZSIsICJhZ2VudERlZmluaXRpb25zIiwgInVzZUFwcFN0YXRlIiwgIl90ZW1wIiwgIm1jcFRvb2xzIiwgIl90ZW1wMiIsICJ0b29sUGVybWlzc2lvbkNvbnRleHQiLCAiX3RlbXAzIiwgInBsdWdpbnNFcnJvcnMiLCAiX3RlbXA0IiwgInVzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncyIsICJ0b29scyIsICJkaWFnbm9zdGljIiwgInNldERpYWdub3N0aWMiLCAidXNlU3RhdGUiLCAiYWdlbnRJbmZvIiwgInNldEFnZW50SW5mbyIsICJjb250ZXh0V2FybmluZ3MiLCAic2V0Q29udGV4dFdhcm5pbmdzIiwgInZlcnNpb25Mb2NrSW5mbyIsICJzZXRWZXJzaW9uTG9ja0luZm8iLCAidmFsaWRhdGlvbkVycm9ycyIsICJ1c2VTZXR0aW5nc0Vycm9ycyIsICJnZXREb2N0b3JEaWFnbm9zdGljIiwgInRoZW4iLCAiX3RlbXA2IiwgImRpc3RUYWdzUHJvbWlzZSIsICJhdXRvVXBkYXRlc0NoYW5uZWwiLCAiZ2V0SW5pdGlhbFNldHRpbmdzIiwgImZpbHRlciIsICJfdGVtcDciLCAiZXJyb3JzRXhjbHVkaW5nTWNwIiwgInQ0IiwgImVudlZhcnMiLCAibmFtZSIsICJkZWZhdWx0IiwgIkJBU0hfTUFYX09VVFBVVF9ERUZBVUxUIiwgInVwcGVyTGltaXQiLCAiQkFTSF9NQVhfT1VUUFVUX1VQUEVSX0xJTUlUIiwgIlRBU0tfTUFYX09VVFBVVF9ERUZBVUxUIiwgIlRBU0tfTUFYX09VVFBVVF9VUFBFUl9MSU1JVCIsICJnZXRNb2RlbE1heE91dHB1dFRva2VucyIsICJtYXAiLCAiX3RlbXA4IiwgIl90ZW1wOSIsICJlbnZWYWxpZGF0aW9uRXJyb3JzIiwgInQ1IiwgInQ2IiwgInVzZXJBZ2VudHNEaXIiLCAiZ2V0Q2xhdWRlQ29uZmlnSG9tZURpciIsICJwcm9qZWN0QWdlbnRzRGlyIiwgImdldE9yaWdpbmFsQ3dkIiwgImFjdGl2ZUFnZW50cyIsICJhbGxBZ2VudHMiLCAiZmFpbGVkRmlsZXMiLCAidXNlckRpckV4aXN0cyIsICJwcm9qZWN0RGlyRXhpc3RzIiwgIlByb21pc2UiLCAiYWxsIiwgInBhdGhFeGlzdHMiLCAiYWdlbnRJbmZvRGF0YSIsICJfdGVtcDAiLCAid2FybmluZ3MiLCAiY2hlY2tDb250ZXh0V2FybmluZ3MiLCAiaXNQaWRCYXNlZExvY2tpbmdFbmFibGVkIiwgImxvY2tzRGlyIiwgImdldFhER1N0YXRlSG9tZSIsICJzdGFsZUxvY2tzQ2xlYW5lZCIsICJjbGVhbnVwU3RhbGVMb2NrcyIsICJsb2NrcyIsICJnZXRBbGxMb2NrSW5mbyIsICJlbmFibGVkIiwgInVzZUVmZmVjdCIsICJ0NyIsICJkaXNwbGF5IiwgImhhbmRsZURpc21pc3MiLCAidDgiLCAidDkiLCAiY29udGV4dCIsICJ1c2VLZXliaW5kaW5ncyIsICJ0MTAiLCAidDExIiwgImluc3RhbGxhdGlvblR5cGUiLCAidmVyc2lvbiIsICJ0MTIiLCAicGFja2FnZU1hbmFnZXIiLCAidDEzIiwgImluc3RhbGxhdGlvblBhdGgiLCAidDE0IiwgImludm9rZWRCaW5hcnkiLCAidDE1IiwgImNvbmZpZ0luc3RhbGxNZXRob2QiLCAidDE2IiwgInJpcGdyZXBTdGF0dXMiLCAid29ya2luZyIsICJ0MTciLCAibW9kZSIsICJzeXN0ZW1QYXRoIiwgInQxOCIsICJ0MTkiLCAicmVjb21tZW5kYXRpb24iLCAic3BsaXQiLCAidDIwIiwgIm11bHRpcGxlSW5zdGFsbGF0aW9ucyIsICJsZW5ndGgiLCAiX3RlbXAxIiwgInQyMSIsICJfdGVtcDEwIiwgInQyMiIsICJ0MjMiLCAidDI0IiwgInQyNSIsICJhdXRvVXBkYXRlcyIsICJ0MjYiLCAidDI3IiwgImhhc1VwZGF0ZVBlcm1pc3Npb25zIiwgInQyOCIsICJ0MjkiLCAidDMwIiwgInQzMSIsICJ0MzIiLCAidDMzIiwgInQzNCIsICJfdGVtcDExIiwgInQzNSIsICJfdGVtcDEyIiwgInQzNiIsICJfdGVtcDEzIiwgInQzNyIsICJfdGVtcDE0IiwgInQzOCIsICJ1bnJlYWNoYWJsZVJ1bGVzV2FybmluZyIsICJmaWd1cmVzIiwgIndhcm5pbmciLCAibWVzc2FnZSIsICJkZXRhaWxzIiwgIl90ZW1wMTUiLCAidDM5IiwgImNsYXVkZU1kV2FybmluZyIsICJhZ2VudFdhcm5pbmciLCAibWNwV2FybmluZyIsICJfdGVtcDE2IiwgIl90ZW1wMTciLCAiX3RlbXAxOCIsICJ0NDAiLCAidDQxIiwgImRldGFpbF8yIiwgImlfOCIsICJpIiwgImRldGFpbCIsICJkZXRhaWxfMSIsICJpXzciLCAiZGV0YWlsXzAiLCAiaV82IiwgImlfNSIsICJlcnJvcl8wIiwgImlfNCIsICJlcnJvciIsICJzb3VyY2UiLCAicGx1Z2luIiwgImdldFBsdWdpbkVycm9yTWVzc2FnZSIsICJmaWxlIiwgImlfMyIsICJwYXRoIiwgImxvY2siLCAiaV8yIiwgInBpZCIsICJpc1Byb2Nlc3NSdW5uaW5nIiwgInZhbGlkYXRpb24iLCAiaV8xIiwgInN0YXR1cyIsICJpXzAiLCAiaXNzdWUiLCAiZml4IiwgImluc3RhbGwiLCAidHlwZSIsICJhIiwgImFnZW50VHlwZSIsICJ2XzAiLCAidiIsICJ2YWx1ZSIsICJwcm9jZXNzIiwgImVudiIsICJyZXN1bHQiLCAidmFsaWRhdGVCb3VuZGVkSW50RW52VmFyIiwgIm1jcEVycm9yTWV0YWRhdGEiLCAidW5kZWZpbmVkIiwgImRpYWciLCAiZmV0Y2hEaXN0VGFncyIsICJnZXRHY3NEaXN0VGFncyIsICJnZXROcG1EaXN0VGFncyIsICJjYXRjaCIsICJfdGVtcDUiLCAic18yIiwgInMiLCAicGx1Z2lucyIsICJlcnJvcnMiLCAic18xIiwgInNfMCIsICJtY3AiXQp9Cg==
