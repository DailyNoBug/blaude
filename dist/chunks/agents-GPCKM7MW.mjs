#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  AGENT_SOURCE_GROUPS,
  compareAgentsByName,
  getOverrideSourceLabel,
  init_agentDisplay,
  resolveAgentModelDisplay,
  resolveAgentOverrides
} from "./chunk-X2PHXTUJ.mjs";
import {
  init_useMergedTools,
  useMergedTools
} from "./chunk-TSGSFBEG.mjs";
import "./chunk-N275W4SR.mjs";
import {
  editFileInEditor,
  editPromptInEditor,
  init_promptEditor
} from "./chunk-452D2LM3.mjs";
import {
  init_useMainLoopModel,
  useMainLoopModel
} from "./chunk-ZKJRNTO6.mjs";
import {
  AGENT_COLORS,
  AGENT_COLOR_TO_THEME_COLOR,
  BashTool,
  ExitPlanModeV2Tool,
  FileEditTool,
  FileReadTool,
  FileWriteTool,
  GlobTool,
  GrepTool,
  ListMcpResourcesTool,
  Markdown,
  NotebookEditTool,
  ReadMcpResourceTool,
  Select,
  Spinner,
  TaskOutputTool,
  TaskStopTool,
  TextInput,
  TodoWriteTool,
  WebFetchTool,
  WebSearchTool,
  asSystemPrompt,
  createAbortController,
  createUserMessage,
  filterToolsForAgent,
  getActiveAgentsFromList,
  getAgentColor,
  getAgentModelDisplay,
  getAgentModelOptions,
  getMemoryScopeDisplay,
  getTools,
  getUserContext,
  init_AppState,
  init_BashTool,
  init_ExitPlanModeV2Tool,
  init_FileEditTool,
  init_FileReadTool,
  init_FileWriteTool,
  init_GlobTool,
  init_GrepTool,
  init_ListMcpResourcesTool,
  init_Markdown,
  init_NotebookEditTool,
  init_ReadMcpResourceTool,
  init_Spinner,
  init_TaskOutputTool,
  init_TaskStopTool,
  init_TextInput,
  init_TodoWriteTool,
  init_WebFetchTool,
  init_WebSearchTool,
  init_abortController,
  init_agent,
  init_agentColorManager,
  init_agentMemory,
  init_agentToolUtils,
  init_api,
  init_claude,
  init_context,
  init_loadAgentsDir,
  init_messages2 as init_messages,
  init_select,
  init_systemPromptType,
  init_tools2 as init_tools,
  init_utils,
  isBuiltInAgent,
  isCustomAgent,
  isMcpTool,
  isPluginAgent,
  loadAgentMemoryPrompt,
  normalizeMessagesForAPI,
  prependUserContext,
  queryModelWithoutStreaming,
  resolveAgentTools,
  setAgentColor,
  useAppState,
  useSetAppState
} from "./chunk-PWGYNHQM.mjs";
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
} from "./chunk-2ONWBUQT.mjs";
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
  Divider,
  init_Divider,
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
import {
  getEmptyToolPermissionContext,
  init_Tool,
  init_TungstenTool
} from "./chunk-X6KULBXG.mjs";
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
  ThemedBox_default,
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime
} from "./chunk-KMJXN3MK.mjs";
import {
  Fragment,
  createContext,
  createElement,
  init_react,
  react_default,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  AGENT_TOOL_NAME,
  capitalize,
  capitalize_default,
  getManagedFilePath,
  getSettingSourceName,
  init_capitalize,
  init_constants,
  init_constants2,
  init_managedPath,
  init_mcpStringUtils,
  init_paths,
  init_source,
  init_stringUtils,
  isAutoMemoryEnabled,
  mcpInfoFromString,
  plural,
  source_default
} from "./chunk-NKGQGSP5.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-UIIDPH35.mjs";
import "./chunk-DNXEQXI7.mjs";
import "./chunk-ZPEBVZEB.mjs";
import "./chunk-DQ5JTCOA.mjs";
import "./chunk-HGPSKCV5.mjs";
import {
  count,
  init_array
} from "./chunk-GC6TKYZ3.mjs";
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
import {
  init_format,
  truncateToWidth
} from "./chunk-OGGCTXYU.mjs";
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
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-IPMELYAB.mjs";
import "./chunk-F5ODCUJD.mjs";
import {
  figures_default,
  init_figures
} from "./chunk-ZAYB3WZV.mjs";
import {
  getErrnoCode,
  init_errors,
  init_slowOperations,
  jsonParse,
  toError
} from "./chunk-L2VTD674.mjs";
import {
  init_sdk
} from "./chunk-3KOWL3LY.mjs";
import {
  APIUserAbortError
} from "./chunk-5K6GNWIX.mjs";
import "./chunk-OU3SZVVB.mjs";
import "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import {
  getClaudeConfigHomeDir,
  init_envUtils
} from "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/components/agents/types.ts
var AGENT_PATHS;
var init_types = __esm({
  "src/components/agents/types.ts"() {
    AGENT_PATHS = {
      FOLDER_NAME: ".claude",
      AGENTS_DIR: "agents"
    };
  }
});

// src/components/agents/agentFileUtils.ts
import { mkdir, open, unlink } from "fs/promises";
import { join } from "path";
function formatAgentAsMarkdown(agentType, whenToUse, tools, systemPrompt, color, model, memory, effort) {
  const escapedWhenToUse = whenToUse.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\\\n");
  const isAllTools = tools === void 0 || tools.length === 1 && tools[0] === "*";
  const toolsLine = isAllTools ? "" : `
tools: ${tools.join(", ")}`;
  const modelLine = model ? `
model: ${model}` : "";
  const effortLine = effort !== void 0 ? `
effort: ${effort}` : "";
  const colorLine = color ? `
color: ${color}` : "";
  const memoryLine = memory ? `
memory: ${memory}` : "";
  return `---
name: ${agentType}
description: "${escapedWhenToUse}"${toolsLine}${modelLine}${effortLine}${colorLine}${memoryLine}
---

${systemPrompt}
`;
}
function getAgentDirectoryPath(location) {
  switch (location) {
    case "flagSettings":
      throw new Error(`Cannot get directory path for ${location} agents`);
    case "userSettings":
      return join(getClaudeConfigHomeDir(), AGENT_PATHS.AGENTS_DIR);
    case "projectSettings":
      return join(getCwd(), AGENT_PATHS.FOLDER_NAME, AGENT_PATHS.AGENTS_DIR);
    case "policySettings":
      return join(
        getManagedFilePath(),
        AGENT_PATHS.FOLDER_NAME,
        AGENT_PATHS.AGENTS_DIR
      );
    case "localSettings":
      return join(getCwd(), AGENT_PATHS.FOLDER_NAME, AGENT_PATHS.AGENTS_DIR);
  }
}
function getRelativeAgentDirectoryPath(location) {
  switch (location) {
    case "projectSettings":
      return join(".", AGENT_PATHS.FOLDER_NAME, AGENT_PATHS.AGENTS_DIR);
    default:
      return getAgentDirectoryPath(location);
  }
}
function getNewAgentFilePath(agent) {
  const dirPath = getAgentDirectoryPath(agent.source);
  return join(dirPath, `${agent.agentType}.md`);
}
function getActualAgentFilePath(agent) {
  if (agent.source === "built-in") {
    return "Built-in";
  }
  if (agent.source === "plugin") {
    throw new Error("Cannot get file path for plugin agents");
  }
  const dirPath = getAgentDirectoryPath(agent.source);
  const filename = agent.filename || agent.agentType;
  return join(dirPath, `${filename}.md`);
}
function getNewRelativeAgentFilePath(agent) {
  if (agent.source === "built-in") {
    return "Built-in";
  }
  const dirPath = getRelativeAgentDirectoryPath(agent.source);
  return join(dirPath, `${agent.agentType}.md`);
}
function getActualRelativeAgentFilePath(agent) {
  if (isBuiltInAgent(agent)) {
    return "Built-in";
  }
  if (isPluginAgent(agent)) {
    return `Plugin: ${agent.plugin || "Unknown"}`;
  }
  if (agent.source === "flagSettings") {
    return "CLI argument";
  }
  const dirPath = getRelativeAgentDirectoryPath(agent.source);
  const filename = agent.filename || agent.agentType;
  return join(dirPath, `${filename}.md`);
}
async function ensureAgentDirectoryExists(source) {
  const dirPath = getAgentDirectoryPath(source);
  await mkdir(dirPath, { recursive: true });
  return dirPath;
}
async function saveAgentToFile(source, agentType, whenToUse, tools, systemPrompt, checkExists = true, color, model, memory, effort) {
  if (source === "built-in") {
    throw new Error("Cannot save built-in agents");
  }
  await ensureAgentDirectoryExists(source);
  const filePath = getNewAgentFilePath({ source, agentType });
  const content = formatAgentAsMarkdown(
    agentType,
    whenToUse,
    tools,
    systemPrompt,
    color,
    model,
    memory,
    effort
  );
  try {
    await writeFileAndFlush(filePath, content, checkExists ? "wx" : "w");
  } catch (e) {
    if (getErrnoCode(e) === "EEXIST") {
      throw new Error(`Agent file already exists: ${filePath}`);
    }
    throw e;
  }
}
async function updateAgentFile(agent, newWhenToUse, newTools, newSystemPrompt, newColor, newModel, newMemory, newEffort) {
  if (agent.source === "built-in") {
    throw new Error("Cannot update built-in agents");
  }
  const filePath = getActualAgentFilePath(agent);
  const content = formatAgentAsMarkdown(
    agent.agentType,
    newWhenToUse,
    newTools,
    newSystemPrompt,
    newColor,
    newModel,
    newMemory,
    newEffort
  );
  await writeFileAndFlush(filePath, content);
}
async function deleteAgentFromFile(agent) {
  if (agent.source === "built-in") {
    throw new Error("Cannot delete built-in agents");
  }
  const filePath = getActualAgentFilePath(agent);
  try {
    await unlink(filePath);
  } catch (e) {
    const code = getErrnoCode(e);
    if (code !== "ENOENT") {
      throw e;
    }
  }
}
async function writeFileAndFlush(filePath, content, flag = "w") {
  const handle = await open(filePath, flag);
  try {
    await handle.writeFile(content, { encoding: "utf-8" });
    await handle.datasync();
  } finally {
    await handle.close();
  }
}
var init_agentFileUtils = __esm({
  "src/components/agents/agentFileUtils.ts"() {
    init_managedPath();
    init_loadAgentsDir();
    init_cwd();
    init_envUtils();
    init_errors();
    init_types();
  }
});

// src/components/agents/AgentDetail.tsx
function AgentDetail(t0) {
  const $ = c(48);
  const {
    agent,
    tools,
    onBack
  } = t0;
  const resolvedTools = resolveAgentTools(agent, tools, false);
  let t1;
  if ($[0] !== agent) {
    t1 = getActualRelativeAgentFilePath(agent);
    $[0] = agent;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const filePath = t1;
  let t2;
  if ($[2] !== agent.agentType) {
    t2 = getAgentColor(agent.agentType);
    $[2] = agent.agentType;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  const backgroundColor = t2;
  let t3;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = {
      context: "Confirmation"
    };
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  useKeybinding("confirm:no", onBack, t3);
  let t4;
  if ($[5] !== onBack) {
    t4 = (e) => {
      if (e.key === "return") {
        e.preventDefault();
        onBack();
      }
    };
    $[5] = onBack;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  const handleKeyDown = t4;
  const renderToolsList = function renderToolsList2() {
    if (resolvedTools.hasWildcard) {
      return /* @__PURE__ */ createElement(ThemedText, null, "All tools");
    }
    if (!agent.tools || agent.tools.length === 0) {
      return /* @__PURE__ */ createElement(ThemedText, null, "None");
    }
    return /* @__PURE__ */ createElement(Fragment, null, resolvedTools.validTools.length > 0 && /* @__PURE__ */ createElement(ThemedText, null, resolvedTools.validTools.join(", ")), resolvedTools.invalidTools.length > 0 && /* @__PURE__ */ createElement(ThemedText, { color: "warning" }, figures_default.warning, " Unrecognized:", " ", resolvedTools.invalidTools.join(", ")));
  };
  const T0 = ThemedBox_default;
  const t5 = "column";
  const t6 = 1;
  const t7 = 0;
  const t8 = true;
  let t9;
  if ($[7] !== filePath) {
    t9 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, filePath);
    $[7] = filePath;
    $[8] = t9;
  } else {
    t9 = $[8];
  }
  let t10;
  if ($[9] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t10 = /* @__PURE__ */ createElement(ThemedText, null, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Description"), " (tells Claude when to use this agent):");
    $[9] = t10;
  } else {
    t10 = $[9];
  }
  let t11;
  if ($[10] !== agent.whenToUse) {
    t11 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, t10, /* @__PURE__ */ createElement(ThemedBox_default, { marginLeft: 2 }, /* @__PURE__ */ createElement(ThemedText, null, agent.whenToUse)));
    $[10] = agent.whenToUse;
    $[11] = t11;
  } else {
    t11 = $[11];
  }
  const T1 = ThemedBox_default;
  let t12;
  if ($[12] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t12 = /* @__PURE__ */ createElement(ThemedText, null, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Tools"), ":", " ");
    $[12] = t12;
  } else {
    t12 = $[12];
  }
  const t13 = renderToolsList();
  let t14;
  if ($[13] !== T1 || $[14] !== t12 || $[15] !== t13) {
    t14 = /* @__PURE__ */ createElement(T1, null, t12, t13);
    $[13] = T1;
    $[14] = t12;
    $[15] = t13;
    $[16] = t14;
  } else {
    t14 = $[16];
  }
  let t15;
  if ($[17] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t15 = /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Model");
    $[17] = t15;
  } else {
    t15 = $[17];
  }
  let t16;
  if ($[18] !== agent.model) {
    t16 = getAgentModelDisplay(agent.model);
    $[18] = agent.model;
    $[19] = t16;
  } else {
    t16 = $[19];
  }
  let t17;
  if ($[20] !== t16) {
    t17 = /* @__PURE__ */ createElement(ThemedText, null, t15, ": ", t16);
    $[20] = t16;
    $[21] = t17;
  } else {
    t17 = $[21];
  }
  let t18;
  if ($[22] !== agent.permissionMode) {
    t18 = agent.permissionMode && /* @__PURE__ */ createElement(ThemedText, null, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Permission mode"), ": ", agent.permissionMode);
    $[22] = agent.permissionMode;
    $[23] = t18;
  } else {
    t18 = $[23];
  }
  let t19;
  if ($[24] !== agent.memory) {
    t19 = agent.memory && /* @__PURE__ */ createElement(ThemedText, null, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Memory"), ": ", getMemoryScopeDisplay(agent.memory));
    $[24] = agent.memory;
    $[25] = t19;
  } else {
    t19 = $[25];
  }
  let t20;
  if ($[26] !== agent.hooks) {
    t20 = agent.hooks && Object.keys(agent.hooks).length > 0 && /* @__PURE__ */ createElement(ThemedText, null, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Hooks"), ": ", Object.keys(agent.hooks).join(", "));
    $[26] = agent.hooks;
    $[27] = t20;
  } else {
    t20 = $[27];
  }
  let t21;
  if ($[28] !== agent.skills) {
    t21 = agent.skills && agent.skills.length > 0 && /* @__PURE__ */ createElement(ThemedText, null, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Skills"), ":", " ", agent.skills.length > 10 ? `${agent.skills.length} skills` : agent.skills.join(", "));
    $[28] = agent.skills;
    $[29] = t21;
  } else {
    t21 = $[29];
  }
  let t22;
  if ($[30] !== agent.agentType || $[31] !== backgroundColor) {
    t22 = backgroundColor && /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(ThemedText, null, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Color"), ":", " ", /* @__PURE__ */ createElement(ThemedText, { backgroundColor, color: "inverseText" }, " ", agent.agentType, " ")));
    $[30] = agent.agentType;
    $[31] = backgroundColor;
    $[32] = t22;
  } else {
    t22 = $[32];
  }
  let t23;
  if ($[33] !== agent) {
    t23 = !isBuiltInAgent(agent) && /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(ThemedText, null, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "System prompt"), ":")), /* @__PURE__ */ createElement(ThemedBox_default, { marginLeft: 2, marginRight: 2 }, /* @__PURE__ */ createElement(Markdown, null, agent.getSystemPrompt())));
    $[33] = agent;
    $[34] = t23;
  } else {
    t23 = $[34];
  }
  let t24;
  if ($[35] !== T0 || $[36] !== handleKeyDown || $[37] !== t11 || $[38] !== t14 || $[39] !== t17 || $[40] !== t18 || $[41] !== t19 || $[42] !== t20 || $[43] !== t21 || $[44] !== t22 || $[45] !== t23 || $[46] !== t9) {
    t24 = /* @__PURE__ */ createElement(T0, { flexDirection: t5, gap: t6, tabIndex: t7, autoFocus: t8, onKeyDown: handleKeyDown }, t9, t11, t14, t17, t18, t19, t20, t21, t22, t23);
    $[35] = T0;
    $[36] = handleKeyDown;
    $[37] = t11;
    $[38] = t14;
    $[39] = t17;
    $[40] = t18;
    $[41] = t19;
    $[42] = t20;
    $[43] = t21;
    $[44] = t22;
    $[45] = t23;
    $[46] = t9;
    $[47] = t24;
  } else {
    t24 = $[47];
  }
  return t24;
}
var init_AgentDetail = __esm({
  "src/components/agents/AgentDetail.tsx"() {
    init_react_compiler_runtime();
    init_figures();
    init_react();
    init_ink();
    init_useKeybinding();
    init_agentColorManager();
    init_agentMemory();
    init_agentToolUtils();
    init_loadAgentsDir();
    init_agent();
    init_Markdown();
    init_agentFileUtils();
  }
});

// src/components/agents/ColorPicker.tsx
function ColorPicker(t0) {
  const $ = c(17);
  const {
    agentName,
    currentColor: t1,
    onConfirm
  } = t0;
  const currentColor = t1 === void 0 ? "automatic" : t1;
  let t2;
  if ($[0] !== currentColor) {
    t2 = COLOR_OPTIONS.findIndex((opt) => opt === currentColor);
    $[0] = currentColor;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const [selectedIndex, setSelectedIndex] = useState(Math.max(0, t2));
  let t3;
  if ($[2] !== onConfirm || $[3] !== selectedIndex) {
    t3 = (e) => {
      if (e.key === "up") {
        e.preventDefault();
        setSelectedIndex(_temp);
      } else {
        if (e.key === "down") {
          e.preventDefault();
          setSelectedIndex(_temp2);
        } else {
          if (e.key === "return") {
            e.preventDefault();
            const selected = COLOR_OPTIONS[selectedIndex];
            onConfirm(selected === "automatic" ? void 0 : selected);
          }
        }
      }
    };
    $[2] = onConfirm;
    $[3] = selectedIndex;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  const handleKeyDown = t3;
  const selectedValue = COLOR_OPTIONS[selectedIndex];
  let t4;
  if ($[5] !== selectedIndex) {
    t4 = COLOR_OPTIONS.map((option, index) => {
      const isSelected = index === selectedIndex;
      return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { key: option, flexDirection: "row", gap: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: isSelected ? "suggestion" : void 0 }, isSelected ? figures_default.pointer : " "), option === "automatic" ? /* @__PURE__ */ react_default.createElement(ThemedText, { bold: isSelected }, "Automatic color") : /* @__PURE__ */ react_default.createElement(ThemedBox_default, { gap: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { backgroundColor: AGENT_COLOR_TO_THEME_COLOR[option], color: "inverseText" }, " "), /* @__PURE__ */ react_default.createElement(ThemedText, { bold: isSelected }, capitalize(option))));
    });
    $[5] = selectedIndex;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] !== t4) {
    t5 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, t4);
    $[7] = t4;
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  let t6;
  if ($[9] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "Preview: ");
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  let t7;
  if ($[10] !== agentName || $[11] !== selectedValue) {
    t7 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, t6, selectedValue === void 0 || selectedValue === "automatic" ? /* @__PURE__ */ react_default.createElement(ThemedText, { inverse: true, bold: true }, " ", "@", agentName, " ") : /* @__PURE__ */ react_default.createElement(ThemedText, { backgroundColor: AGENT_COLOR_TO_THEME_COLOR[selectedValue], color: "inverseText", bold: true }, " ", "@", agentName, " "));
    $[10] = agentName;
    $[11] = selectedValue;
    $[12] = t7;
  } else {
    t7 = $[12];
  }
  let t8;
  if ($[13] !== handleKeyDown || $[14] !== t5 || $[15] !== t7) {
    t8 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1, tabIndex: 0, autoFocus: true, onKeyDown: handleKeyDown }, t5, t7);
    $[13] = handleKeyDown;
    $[14] = t5;
    $[15] = t7;
    $[16] = t8;
  } else {
    t8 = $[16];
  }
  return t8;
}
function _temp2(prev_0) {
  return prev_0 < COLOR_OPTIONS.length - 1 ? prev_0 + 1 : 0;
}
function _temp(prev) {
  return prev > 0 ? prev - 1 : COLOR_OPTIONS.length - 1;
}
var COLOR_OPTIONS;
var init_ColorPicker = __esm({
  "src/components/agents/ColorPicker.tsx"() {
    init_react_compiler_runtime();
    init_figures();
    init_react();
    init_ink();
    init_agentColorManager();
    init_stringUtils();
    COLOR_OPTIONS = ["automatic", ...AGENT_COLORS];
  }
});

// src/components/agents/ModelSelector.tsx
function ModelSelector(t0) {
  const $ = c(11);
  const {
    initialModel,
    onComplete,
    onCancel
  } = t0;
  let t1;
  if ($[0] !== initialModel) {
    bb0: {
      const base = getAgentModelOptions();
      if (initialModel && !base.some((o) => o.value === initialModel)) {
        t1 = [{
          value: initialModel,
          label: initialModel,
          description: "Current model (custom ID)"
        }, ...base];
        break bb0;
      }
      t1 = base;
    }
    $[0] = initialModel;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const modelOptions = t1;
  const defaultModel = initialModel ?? "sonnet";
  let t2;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Model determines the agent's reasoning capabilities and speed."));
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] !== onCancel || $[4] !== onComplete) {
    t3 = () => onCancel ? onCancel() : onComplete(void 0);
    $[3] = onCancel;
    $[4] = onComplete;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  if ($[6] !== defaultModel || $[7] !== modelOptions || $[8] !== onComplete || $[9] !== t3) {
    t4 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, t2, /* @__PURE__ */ createElement(Select, { options: modelOptions, defaultValue: defaultModel, onChange: onComplete, onCancel: t3 }));
    $[6] = defaultModel;
    $[7] = modelOptions;
    $[8] = onComplete;
    $[9] = t3;
    $[10] = t4;
  } else {
    t4 = $[10];
  }
  return t4;
}
var init_ModelSelector = __esm({
  "src/components/agents/ModelSelector.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_agent();
    init_select();
  }
});

// src/components/agents/ToolSelector.tsx
function getToolBuckets() {
  return {
    READ_ONLY: {
      name: "Read-only tools",
      toolNames: /* @__PURE__ */ new Set([GlobTool.name, GrepTool.name, ExitPlanModeV2Tool.name, FileReadTool.name, WebFetchTool.name, TodoWriteTool.name, WebSearchTool.name, TaskStopTool.name, TaskOutputTool.name, ListMcpResourcesTool.name, ReadMcpResourceTool.name])
    },
    EDIT: {
      name: "Edit tools",
      toolNames: /* @__PURE__ */ new Set([FileEditTool.name, FileWriteTool.name, NotebookEditTool.name])
    },
    EXECUTION: {
      name: "Execution tools",
      toolNames: new Set([BashTool.name, false ? TungstenTool.name : void 0].filter((n) => n !== void 0))
    },
    MCP: {
      name: "MCP tools",
      toolNames: /* @__PURE__ */ new Set(),
      // Dynamic - no static list
      isMcp: true
    },
    OTHER: {
      name: "Other tools",
      toolNames: /* @__PURE__ */ new Set()
      // Dynamic - catch-all for uncategorized tools
    }
  };
}
function getMcpServerBuckets(tools) {
  const serverMap = /* @__PURE__ */ new Map();
  tools.forEach((tool) => {
    if (isMcpTool(tool)) {
      const mcpInfo = mcpInfoFromString(tool.name);
      if (mcpInfo?.serverName) {
        const existing = serverMap.get(mcpInfo.serverName) || [];
        existing.push(tool);
        serverMap.set(mcpInfo.serverName, existing);
      }
    }
  });
  return Array.from(serverMap.entries()).map(([serverName, tools2]) => ({
    serverName,
    tools: tools2
  })).sort((a, b) => a.serverName.localeCompare(b.serverName));
}
function ToolSelector(t0) {
  const $ = c(69);
  const {
    tools,
    initialTools,
    onComplete,
    onCancel
  } = t0;
  let t1;
  if ($[0] !== tools) {
    t1 = filterToolsForAgent({
      tools,
      isBuiltIn: false,
      isAsync: false
    });
    $[0] = tools;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const customAgentTools = t1;
  let t2;
  if ($[2] !== customAgentTools || $[3] !== initialTools) {
    t2 = !initialTools || initialTools.includes("*") ? customAgentTools.map(_temp9) : initialTools;
    $[2] = customAgentTools;
    $[3] = initialTools;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  const expandedInitialTools = t2;
  const [selectedTools, setSelectedTools] = useState(expandedInitialTools);
  const [focusIndex, setFocusIndex] = useState(0);
  const [showIndividualTools, setShowIndividualTools] = useState(false);
  let t3;
  if ($[5] !== customAgentTools) {
    t3 = new Set(customAgentTools.map(_temp22));
    $[5] = customAgentTools;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  const toolNames = t3;
  let t4;
  if ($[7] !== selectedTools || $[8] !== toolNames) {
    let t52;
    if ($[10] !== toolNames) {
      t52 = (name) => toolNames.has(name);
      $[10] = toolNames;
      $[11] = t52;
    } else {
      t52 = $[11];
    }
    t4 = selectedTools.filter(t52);
    $[7] = selectedTools;
    $[8] = toolNames;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  const validSelectedTools = t4;
  let t5;
  if ($[12] !== validSelectedTools) {
    t5 = new Set(validSelectedTools);
    $[12] = validSelectedTools;
    $[13] = t5;
  } else {
    t5 = $[13];
  }
  const selectedSet = t5;
  const isAllSelected = validSelectedTools.length === customAgentTools.length && customAgentTools.length > 0;
  let t6;
  if ($[14] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = (toolName) => {
      if (!toolName) {
        return;
      }
      setSelectedTools((current) => current.includes(toolName) ? current.filter((t_1) => t_1 !== toolName) : [...current, toolName]);
    };
    $[14] = t6;
  } else {
    t6 = $[14];
  }
  const handleToggleTool = t6;
  let t7;
  if ($[15] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = (toolNames_0, select) => {
      setSelectedTools((current_0) => {
        if (select) {
          const toolsToAdd = toolNames_0.filter((t_2) => !current_0.includes(t_2));
          return [...current_0, ...toolsToAdd];
        } else {
          return current_0.filter((t_3) => !toolNames_0.includes(t_3));
        }
      });
    };
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  const handleToggleTools = t7;
  let t8;
  if ($[16] !== customAgentTools || $[17] !== onComplete || $[18] !== validSelectedTools) {
    t8 = () => {
      const allToolNames = customAgentTools.map(_temp3);
      const areAllToolsSelected = validSelectedTools.length === allToolNames.length && allToolNames.every((name_0) => validSelectedTools.includes(name_0));
      const finalTools = areAllToolsSelected ? void 0 : validSelectedTools;
      onComplete(finalTools);
    };
    $[16] = customAgentTools;
    $[17] = onComplete;
    $[18] = validSelectedTools;
    $[19] = t8;
  } else {
    t8 = $[19];
  }
  const handleConfirm = t8;
  let buckets;
  if ($[20] !== customAgentTools) {
    const toolBuckets = getToolBuckets();
    buckets = {
      readOnly: [],
      edit: [],
      execution: [],
      mcp: [],
      other: []
    };
    customAgentTools.forEach((tool) => {
      if (isMcpTool(tool)) {
        buckets.mcp.push(tool);
      } else {
        if (toolBuckets.READ_ONLY.toolNames.has(tool.name)) {
          buckets.readOnly.push(tool);
        } else {
          if (toolBuckets.EDIT.toolNames.has(tool.name)) {
            buckets.edit.push(tool);
          } else {
            if (toolBuckets.EXECUTION.toolNames.has(tool.name)) {
              buckets.execution.push(tool);
            } else {
              if (tool.name !== AGENT_TOOL_NAME) {
                buckets.other.push(tool);
              }
            }
          }
        }
      }
    });
    $[20] = customAgentTools;
    $[21] = buckets;
  } else {
    buckets = $[21];
  }
  const toolsByBucket = buckets;
  let t9;
  if ($[22] !== selectedSet) {
    t9 = (bucketTools) => {
      const selected = count(bucketTools, (t_5) => selectedSet.has(t_5.name));
      const needsSelection = selected < bucketTools.length;
      return () => {
        const toolNames_1 = bucketTools.map(_temp4);
        handleToggleTools(toolNames_1, needsSelection);
      };
    };
    $[22] = selectedSet;
    $[23] = t9;
  } else {
    t9 = $[23];
  }
  const createBucketToggleAction = t9;
  let navigableItems;
  if ($[24] !== createBucketToggleAction || $[25] !== customAgentTools || $[26] !== focusIndex || $[27] !== handleConfirm || $[28] !== isAllSelected || $[29] !== selectedSet || $[30] !== showIndividualTools || $[31] !== toolsByBucket.edit || $[32] !== toolsByBucket.execution || $[33] !== toolsByBucket.mcp || $[34] !== toolsByBucket.other || $[35] !== toolsByBucket.readOnly) {
    navigableItems = [];
    navigableItems.push({
      id: "continue",
      label: "Continue",
      action: handleConfirm,
      isContinue: true
    });
    let t102;
    if ($[37] !== customAgentTools || $[38] !== isAllSelected) {
      t102 = () => {
        const allToolNames_0 = customAgentTools.map(_temp5);
        handleToggleTools(allToolNames_0, !isAllSelected);
      };
      $[37] = customAgentTools;
      $[38] = isAllSelected;
      $[39] = t102;
    } else {
      t102 = $[39];
    }
    navigableItems.push({
      id: "bucket-all",
      label: `${isAllSelected ? figures_default.checkboxOn : figures_default.checkboxOff} All tools`,
      action: t102
    });
    const toolBuckets_0 = getToolBuckets();
    const bucketConfigs = [{
      id: "bucket-readonly",
      name: toolBuckets_0.READ_ONLY.name,
      tools: toolsByBucket.readOnly
    }, {
      id: "bucket-edit",
      name: toolBuckets_0.EDIT.name,
      tools: toolsByBucket.edit
    }, {
      id: "bucket-execution",
      name: toolBuckets_0.EXECUTION.name,
      tools: toolsByBucket.execution
    }, {
      id: "bucket-mcp",
      name: toolBuckets_0.MCP.name,
      tools: toolsByBucket.mcp
    }, {
      id: "bucket-other",
      name: toolBuckets_0.OTHER.name,
      tools: toolsByBucket.other
    }];
    bucketConfigs.forEach((t112) => {
      const {
        id,
        name: name_1,
        tools: bucketTools_0
      } = t112;
      if (bucketTools_0.length === 0) {
        return;
      }
      const selected_0 = count(bucketTools_0, (t_8) => selectedSet.has(t_8.name));
      const isFullySelected = selected_0 === bucketTools_0.length;
      navigableItems.push({
        id,
        label: `${isFullySelected ? figures_default.checkboxOn : figures_default.checkboxOff} ${name_1}`,
        action: createBucketToggleAction(bucketTools_0)
      });
    });
    const toggleButtonIndex = navigableItems.length;
    let t122;
    if ($[40] !== focusIndex || $[41] !== showIndividualTools || $[42] !== toggleButtonIndex) {
      t122 = () => {
        setShowIndividualTools(!showIndividualTools);
        if (showIndividualTools && focusIndex > toggleButtonIndex) {
          setFocusIndex(toggleButtonIndex);
        }
      };
      $[40] = focusIndex;
      $[41] = showIndividualTools;
      $[42] = toggleButtonIndex;
      $[43] = t122;
    } else {
      t122 = $[43];
    }
    navigableItems.push({
      id: "toggle-individual",
      label: showIndividualTools ? "Hide advanced options" : "Show advanced options",
      action: t122,
      isToggle: true
    });
    const mcpServerBuckets = getMcpServerBuckets(customAgentTools);
    if (showIndividualTools) {
      if (mcpServerBuckets.length > 0) {
        navigableItems.push({
          id: "mcp-servers-header",
          label: "MCP Servers:",
          action: _temp6,
          isHeader: true
        });
        mcpServerBuckets.forEach((t132) => {
          const {
            serverName,
            tools: serverTools
          } = t132;
          const selected_1 = count(serverTools, (t_9) => selectedSet.has(t_9.name));
          const isFullySelected_0 = selected_1 === serverTools.length;
          navigableItems.push({
            id: `mcp-server-${serverName}`,
            label: `${isFullySelected_0 ? figures_default.checkboxOn : figures_default.checkboxOff} ${serverName} (${serverTools.length} ${plural(serverTools.length, "tool")})`,
            action: () => {
              const toolNames_2 = serverTools.map(_temp7);
              handleToggleTools(toolNames_2, !isFullySelected_0);
            }
          });
        });
        navigableItems.push({
          id: "tools-header",
          label: "Individual Tools:",
          action: _temp8,
          isHeader: true
        });
      }
      customAgentTools.forEach((tool_0) => {
        let displayName = tool_0.name;
        if (tool_0.name.startsWith("mcp__")) {
          const mcpInfo = mcpInfoFromString(tool_0.name);
          displayName = mcpInfo ? `${mcpInfo.toolName} (${mcpInfo.serverName})` : tool_0.name;
        }
        navigableItems.push({
          id: `tool-${tool_0.name}`,
          label: `${selectedSet.has(tool_0.name) ? figures_default.checkboxOn : figures_default.checkboxOff} ${displayName}`,
          action: () => handleToggleTool(tool_0.name)
        });
      });
    }
    $[24] = createBucketToggleAction;
    $[25] = customAgentTools;
    $[26] = focusIndex;
    $[27] = handleConfirm;
    $[28] = isAllSelected;
    $[29] = selectedSet;
    $[30] = showIndividualTools;
    $[31] = toolsByBucket.edit;
    $[32] = toolsByBucket.execution;
    $[33] = toolsByBucket.mcp;
    $[34] = toolsByBucket.other;
    $[35] = toolsByBucket.readOnly;
    $[36] = navigableItems;
  } else {
    navigableItems = $[36];
  }
  let t10;
  if ($[44] !== initialTools || $[45] !== onCancel || $[46] !== onComplete) {
    t10 = () => {
      if (onCancel) {
        onCancel();
      } else {
        onComplete(initialTools);
      }
    };
    $[44] = initialTools;
    $[45] = onCancel;
    $[46] = onComplete;
    $[47] = t10;
  } else {
    t10 = $[47];
  }
  const handleCancel = t10;
  let t11;
  if ($[48] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t11 = {
      context: "Confirmation"
    };
    $[48] = t11;
  } else {
    t11 = $[48];
  }
  useKeybinding("confirm:no", handleCancel, t11);
  let t12;
  if ($[49] !== focusIndex || $[50] !== navigableItems) {
    t12 = (e) => {
      if (e.key === "return") {
        e.preventDefault();
        const item = navigableItems[focusIndex];
        if (item && !item.isHeader) {
          item.action();
        }
      } else {
        if (e.key === "up") {
          e.preventDefault();
          let newIndex = focusIndex - 1;
          while (newIndex > 0 && navigableItems[newIndex]?.isHeader) {
            newIndex--;
          }
          setFocusIndex(Math.max(0, newIndex));
        } else {
          if (e.key === "down") {
            e.preventDefault();
            let newIndex_0 = focusIndex + 1;
            while (newIndex_0 < navigableItems.length - 1 && navigableItems[newIndex_0]?.isHeader) {
              newIndex_0++;
            }
            setFocusIndex(Math.min(navigableItems.length - 1, newIndex_0));
          }
        }
      }
    };
    $[49] = focusIndex;
    $[50] = navigableItems;
    $[51] = t12;
  } else {
    t12 = $[51];
  }
  const handleKeyDown = t12;
  const t13 = focusIndex === 0 ? "suggestion" : void 0;
  const t14 = focusIndex === 0;
  const t15 = focusIndex === 0 ? `${figures_default.pointer} ` : "  ";
  let t16;
  if ($[52] !== t13 || $[53] !== t14 || $[54] !== t15) {
    t16 = /* @__PURE__ */ react_default.createElement(ThemedText, { color: t13, bold: t14 }, t15, "[ Continue ]");
    $[52] = t13;
    $[53] = t14;
    $[54] = t15;
    $[55] = t16;
  } else {
    t16 = $[55];
  }
  let t17;
  if ($[56] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t17 = /* @__PURE__ */ react_default.createElement(Divider, { width: 40 });
    $[56] = t17;
  } else {
    t17 = $[56];
  }
  let t18;
  if ($[57] !== navigableItems) {
    t18 = navigableItems.slice(1);
    $[57] = navigableItems;
    $[58] = t18;
  } else {
    t18 = $[58];
  }
  let t19;
  if ($[59] !== focusIndex || $[60] !== t18) {
    t19 = t18.map((item_0, index) => {
      const isCurrentlyFocused = index + 1 === focusIndex;
      const isToggleButton = item_0.isToggle;
      const isHeader = item_0.isHeader;
      return /* @__PURE__ */ react_default.createElement(react_default.Fragment, { key: item_0.id }, isToggleButton && /* @__PURE__ */ react_default.createElement(Divider, { width: 40 }), isHeader && index > 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }), /* @__PURE__ */ react_default.createElement(ThemedText, { color: isHeader ? void 0 : isCurrentlyFocused ? "suggestion" : void 0, dimColor: isHeader, bold: isToggleButton && isCurrentlyFocused }, isHeader ? "" : isCurrentlyFocused ? `${figures_default.pointer} ` : "  ", isToggleButton ? `[ ${item_0.label} ]` : item_0.label));
    });
    $[59] = focusIndex;
    $[60] = t18;
    $[61] = t19;
  } else {
    t19 = $[61];
  }
  const t20 = isAllSelected ? "All tools selected" : `${selectedSet.size} of ${customAgentTools.length} tools selected`;
  let t21;
  if ($[62] !== t20) {
    t21 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1, flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, t20));
    $[62] = t20;
    $[63] = t21;
  } else {
    t21 = $[63];
  }
  let t22;
  if ($[64] !== handleKeyDown || $[65] !== t16 || $[66] !== t19 || $[67] !== t21) {
    t22 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginTop: 1, tabIndex: 0, autoFocus: true, onKeyDown: handleKeyDown }, t16, t17, t19, t21);
    $[64] = handleKeyDown;
    $[65] = t16;
    $[66] = t19;
    $[67] = t21;
    $[68] = t22;
  } else {
    t22 = $[68];
  }
  return t22;
}
function _temp8() {
}
function _temp7(t_10) {
  return t_10.name;
}
function _temp6() {
}
function _temp5(t_7) {
  return t_7.name;
}
function _temp4(t_6) {
  return t_6.name;
}
function _temp3(t_4) {
  return t_4.name;
}
function _temp22(t_0) {
  return t_0.name;
}
function _temp9(t) {
  return t.name;
}
var init_ToolSelector = __esm({
  "src/components/agents/ToolSelector.tsx"() {
    init_react_compiler_runtime();
    init_figures();
    init_react();
    init_mcpStringUtils();
    init_utils();
    init_agentToolUtils();
    init_constants2();
    init_BashTool();
    init_ExitPlanModeV2Tool();
    init_FileEditTool();
    init_FileReadTool();
    init_FileWriteTool();
    init_GlobTool();
    init_GrepTool();
    init_ListMcpResourcesTool();
    init_NotebookEditTool();
    init_ReadMcpResourceTool();
    init_TaskOutputTool();
    init_TaskStopTool();
    init_TodoWriteTool();
    init_TungstenTool();
    init_WebFetchTool();
    init_WebSearchTool();
    init_ink();
    init_useKeybinding();
    init_array();
    init_stringUtils();
    init_Divider();
  }
});

// src/components/agents/utils.ts
function getAgentSourceDisplayName(source) {
  if (source === "all") {
    return "Agents";
  }
  if (source === "built-in") {
    return "Built-in agents";
  }
  if (source === "plugin") {
    return "Plugin agents";
  }
  return capitalize_default(getSettingSourceName(source));
}
var init_utils2 = __esm({
  "src/components/agents/utils.ts"() {
    init_capitalize();
    init_constants();
  }
});

// src/components/agents/AgentEditor.tsx
function AgentEditor({
  agent,
  tools,
  onSaved,
  onBack
}) {
  const setAppState = useSetAppState();
  const [editMode, setEditMode] = useState("menu");
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);
  const [error, setError] = useState(null);
  const [selectedColor, setSelectedColor] = useState(agent.color);
  const handleOpenInEditor = useCallback(async () => {
    const filePath = getActualAgentFilePath(agent);
    const result = await editFileInEditor(filePath);
    if (result.error) {
      setError(result.error);
    } else {
      onSaved(`Opened ${agent.agentType} in editor. If you made edits, restart to load the latest version.`);
    }
  }, [agent, onSaved]);
  const handleSave = useCallback(async (changes = {}) => {
    const {
      tools: newTools,
      color: newColor,
      model: newModel
    } = changes;
    const finalColor = newColor ?? selectedColor;
    const hasToolsChanged = newTools !== void 0;
    const hasModelChanged = newModel !== void 0;
    const hasColorChanged = finalColor !== agent.color;
    if (!hasToolsChanged && !hasModelChanged && !hasColorChanged) {
      return false;
    }
    try {
      if (!isCustomAgent(agent) && !isPluginAgent(agent)) {
        return false;
      }
      await updateAgentFile(agent, agent.whenToUse, newTools ?? agent.tools, agent.getSystemPrompt(), finalColor, newModel ?? agent.model);
      if (hasColorChanged && finalColor) {
        setAgentColor(agent.agentType, finalColor);
      }
      setAppState((state) => {
        const allAgents = state.agentDefinitions.allAgents.map((a) => a.agentType === agent.agentType ? {
          ...a,
          tools: newTools ?? a.tools,
          color: finalColor,
          model: newModel ?? a.model
        } : a);
        return {
          ...state,
          agentDefinitions: {
            ...state.agentDefinitions,
            activeAgents: getActiveAgentsFromList(allAgents),
            allAgents
          }
        };
      });
      onSaved(`Updated agent: ${source_default.bold(agent.agentType)}`);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save agent");
      return false;
    }
  }, [agent, selectedColor, onSaved, setAppState]);
  const menuItems = useMemo(() => [{
    label: "Open in editor",
    action: handleOpenInEditor
  }, {
    label: "Edit tools",
    action: () => setEditMode("edit-tools")
  }, {
    label: "Edit model",
    action: () => setEditMode("edit-model")
  }, {
    label: "Edit color",
    action: () => setEditMode("edit-color")
  }], [handleOpenInEditor]);
  const handleEscape = useCallback(() => {
    setError(null);
    if (editMode === "menu") {
      onBack();
    } else {
      setEditMode("menu");
    }
  }, [editMode, onBack]);
  const handleMenuKeyDown = useCallback((e) => {
    if (e.key === "up") {
      e.preventDefault();
      setSelectedMenuIndex((index) => Math.max(0, index - 1));
    } else if (e.key === "down") {
      e.preventDefault();
      setSelectedMenuIndex((index_0) => Math.min(menuItems.length - 1, index_0 + 1));
    } else if (e.key === "return") {
      e.preventDefault();
      const selectedItem = menuItems[selectedMenuIndex];
      if (selectedItem) {
        void selectedItem.action();
      }
    }
  }, [menuItems, selectedMenuIndex]);
  useKeybinding("confirm:no", handleEscape, {
    context: "Confirmation"
  });
  const renderMenu = () => /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", tabIndex: 0, autoFocus: true, onKeyDown: handleMenuKeyDown }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Source: ", getAgentSourceDisplayName(agent.source)), /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1, flexDirection: "column" }, menuItems.map((item, index_1) => /* @__PURE__ */ createElement(ThemedText, { key: item.label, color: index_1 === selectedMenuIndex ? "suggestion" : void 0 }, index_1 === selectedMenuIndex ? `${figures_default.pointer} ` : "  ", item.label))), error && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { color: "error" }, error)));
  switch (editMode) {
    case "menu":
      return renderMenu();
    case "edit-tools":
      return /* @__PURE__ */ createElement(ToolSelector, { tools, initialTools: agent.tools, onComplete: async (finalTools) => {
        setEditMode("menu");
        await handleSave({
          tools: finalTools
        });
      } });
    case "edit-color":
      return /* @__PURE__ */ createElement(ColorPicker, { agentName: agent.agentType, currentColor: selectedColor || agent.color || "automatic", onConfirm: async (color) => {
        setSelectedColor(color);
        setEditMode("menu");
        await handleSave({
          color
        });
      } });
    case "edit-model":
      return /* @__PURE__ */ createElement(ModelSelector, { initialModel: agent.model, onComplete: async (model) => {
        setEditMode("menu");
        await handleSave({
          model
        });
      } });
    default:
      return null;
  }
}
var init_AgentEditor = __esm({
  "src/components/agents/AgentEditor.tsx"() {
    init_source();
    init_figures();
    init_react();
    init_react();
    init_AppState();
    init_ink();
    init_useKeybinding();
    init_agentColorManager();
    init_loadAgentsDir();
    init_promptEditor();
    init_agentFileUtils();
    init_ColorPicker();
    init_ModelSelector();
    init_ToolSelector();
    init_utils2();
  }
});

// src/components/agents/AgentNavigationFooter.tsx
function AgentNavigationFooter(t0) {
  const $ = c(2);
  const {
    instructions: t1
  } = t0;
  const instructions = t1 === void 0 ? "Press \u2191\u2193 to navigate \xB7 Enter to select \xB7 Esc to go back" : t1;
  const exitState = useExitOnCtrlCDWithKeybindings();
  const t2 = exitState.pending ? `Press ${exitState.keyName} again to exit` : instructions;
  let t3;
  if ($[0] !== t2) {
    t3 = /* @__PURE__ */ createElement(ThemedBox_default, { marginLeft: 2 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, t2));
    $[0] = t2;
    $[1] = t3;
  } else {
    t3 = $[1];
  }
  return t3;
}
var init_AgentNavigationFooter = __esm({
  "src/components/agents/AgentNavigationFooter.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_useExitOnCtrlCDWithKeybindings();
    init_ink();
  }
});

// src/components/agents/AgentsList.tsx
function AgentsList(t0) {
  const $ = c(96);
  const {
    source,
    agents,
    onBack,
    onSelect,
    onCreateNew,
    changes
  } = t0;
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [isCreateNewSelected, setIsCreateNewSelected] = useState(true);
  let t1;
  if ($[0] !== agents) {
    t1 = [...agents].sort(compareAgentsByName);
    $[0] = agents;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const sortedAgents = t1;
  const getOverrideInfo = _temp10;
  let t2;
  if ($[2] !== isCreateNewSelected) {
    t2 = () => /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(ThemedText, { color: isCreateNewSelected ? "suggestion" : void 0 }, isCreateNewSelected ? `${figures_default.pointer} ` : "  "), /* @__PURE__ */ createElement(ThemedText, { color: isCreateNewSelected ? "suggestion" : void 0 }, "Create new agent"));
    $[2] = isCreateNewSelected;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  const renderCreateNewOption = t2;
  let t3;
  if ($[4] !== isCreateNewSelected || $[5] !== selectedAgent?.agentType || $[6] !== selectedAgent?.source) {
    t3 = (agent_0) => {
      const isBuiltIn = agent_0.source === "built-in";
      const isSelected = !isBuiltIn && !isCreateNewSelected && selectedAgent?.agentType === agent_0.agentType && selectedAgent?.source === agent_0.source;
      const {
        isOverridden,
        overriddenBy
      } = getOverrideInfo(agent_0);
      const dimmed = isBuiltIn || isOverridden;
      const textColor = !isBuiltIn && isSelected ? "suggestion" : void 0;
      const resolvedModel = resolveAgentModelDisplay(agent_0);
      return /* @__PURE__ */ createElement(ThemedBox_default, { key: `${agent_0.agentType}-${agent_0.source}` }, /* @__PURE__ */ createElement(ThemedText, { dimColor: dimmed && !isSelected, color: textColor }, isBuiltIn ? "" : isSelected ? `${figures_default.pointer} ` : "  "), /* @__PURE__ */ createElement(ThemedText, { dimColor: dimmed && !isSelected, color: textColor }, agent_0.agentType), resolvedModel && /* @__PURE__ */ createElement(ThemedText, { dimColor: true, color: textColor }, " \xB7 ", resolvedModel), agent_0.memory && /* @__PURE__ */ createElement(ThemedText, { dimColor: true, color: textColor }, " \xB7 ", agent_0.memory, " memory"), overriddenBy && /* @__PURE__ */ createElement(ThemedText, { dimColor: !isSelected, color: isSelected ? "warning" : void 0 }, " ", figures_default.warning, " shadowed by ", getOverrideSourceLabel(overriddenBy)));
    };
    $[4] = isCreateNewSelected;
    $[5] = selectedAgent?.agentType;
    $[6] = selectedAgent?.source;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  const renderAgent = t3;
  let t4;
  if ($[8] !== sortedAgents || $[9] !== source) {
    bb0: {
      const nonBuiltIn = sortedAgents.filter(_temp23);
      if (source === "all") {
        t4 = AGENT_SOURCE_GROUPS.filter(_temp32).flatMap((t52) => {
          const {
            source: groupSource
          } = t52;
          return nonBuiltIn.filter((a_0) => a_0.source === groupSource);
        });
        break bb0;
      }
      t4 = nonBuiltIn;
    }
    $[8] = sortedAgents;
    $[9] = source;
    $[10] = t4;
  } else {
    t4 = $[10];
  }
  const selectableAgentsInOrder = t4;
  let t5;
  let t6;
  if ($[11] !== isCreateNewSelected || $[12] !== onCreateNew || $[13] !== selectableAgentsInOrder || $[14] !== selectedAgent) {
    t5 = () => {
      if (!selectedAgent && !isCreateNewSelected && selectableAgentsInOrder.length > 0) {
        if (onCreateNew) {
          setIsCreateNewSelected(true);
        } else {
          setSelectedAgent(selectableAgentsInOrder[0] || null);
        }
      }
    };
    t6 = [selectableAgentsInOrder, selectedAgent, isCreateNewSelected, onCreateNew];
    $[11] = isCreateNewSelected;
    $[12] = onCreateNew;
    $[13] = selectableAgentsInOrder;
    $[14] = selectedAgent;
    $[15] = t5;
    $[16] = t6;
  } else {
    t5 = $[15];
    t6 = $[16];
  }
  useEffect(t5, t6);
  let t7;
  if ($[17] !== isCreateNewSelected || $[18] !== onCreateNew || $[19] !== onSelect || $[20] !== selectableAgentsInOrder || $[21] !== selectedAgent) {
    t7 = (e) => {
      if (e.key === "return") {
        e.preventDefault();
        if (isCreateNewSelected && onCreateNew) {
          onCreateNew();
        } else {
          if (selectedAgent) {
            onSelect(selectedAgent);
          }
        }
        return;
      }
      if (e.key !== "up" && e.key !== "down") {
        return;
      }
      e.preventDefault();
      const hasCreateOption = !!onCreateNew;
      const totalItems = selectableAgentsInOrder.length + (hasCreateOption ? 1 : 0);
      if (totalItems === 0) {
        return;
      }
      let currentPosition = 0;
      if (!isCreateNewSelected && selectedAgent) {
        const agentIndex = selectableAgentsInOrder.findIndex((a_1) => a_1.agentType === selectedAgent.agentType && a_1.source === selectedAgent.source);
        if (agentIndex >= 0) {
          currentPosition = hasCreateOption ? agentIndex + 1 : agentIndex;
        }
      }
      const newPosition = e.key === "up" ? currentPosition === 0 ? totalItems - 1 : currentPosition - 1 : currentPosition === totalItems - 1 ? 0 : currentPosition + 1;
      if (hasCreateOption && newPosition === 0) {
        setIsCreateNewSelected(true);
        setSelectedAgent(null);
      } else {
        const agentIndex_0 = hasCreateOption ? newPosition - 1 : newPosition;
        const newAgent = selectableAgentsInOrder[agentIndex_0];
        if (newAgent) {
          setIsCreateNewSelected(false);
          setSelectedAgent(newAgent);
        }
      }
    };
    $[17] = isCreateNewSelected;
    $[18] = onCreateNew;
    $[19] = onSelect;
    $[20] = selectableAgentsInOrder;
    $[21] = selectedAgent;
    $[22] = t7;
  } else {
    t7 = $[22];
  }
  const handleKeyDown = t7;
  let t8;
  if ($[23] !== renderAgent || $[24] !== sortedAgents) {
    t8 = (t92) => {
      const title = t92 === void 0 ? "Built-in (always available):" : t92;
      const builtInAgents = sortedAgents.filter(_temp42);
      return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", marginBottom: 1, paddingLeft: 2 }, /* @__PURE__ */ createElement(ThemedText, { bold: true, dimColor: true }, title), builtInAgents.map(renderAgent));
    };
    $[23] = renderAgent;
    $[24] = sortedAgents;
    $[25] = t8;
  } else {
    t8 = $[25];
  }
  const renderBuiltInAgentsSection = t8;
  let t9;
  if ($[26] !== renderAgent) {
    t9 = (title_0, groupAgents) => {
      if (!groupAgents.length) {
        return null;
      }
      const folderPath = groupAgents[0]?.baseDir;
      return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedBox_default, { paddingLeft: 2 }, /* @__PURE__ */ createElement(ThemedText, { bold: true, dimColor: true }, title_0), folderPath && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " (", folderPath, ")")), groupAgents.map((agent_1) => renderAgent(agent_1)));
    };
    $[26] = renderAgent;
    $[27] = t9;
  } else {
    t9 = $[27];
  }
  const renderAgentGroup = t9;
  let t10;
  if ($[28] !== source) {
    t10 = getAgentSourceDisplayName(source);
    $[28] = source;
    $[29] = t10;
  } else {
    t10 = $[29];
  }
  const sourceTitle = t10;
  let T0;
  let T1;
  let t11;
  let t12;
  let t13;
  let t14;
  let t15;
  let t16;
  let t17;
  let t18;
  let t19;
  let t20;
  let t21;
  let t22;
  if ($[30] !== changes || $[31] !== handleKeyDown || $[32] !== onBack || $[33] !== onCreateNew || $[34] !== renderAgent || $[35] !== renderAgentGroup || $[36] !== renderBuiltInAgentsSection || $[37] !== renderCreateNewOption || $[38] !== sortedAgents || $[39] !== source || $[40] !== sourceTitle) {
    t22 = /* @__PURE__ */ Symbol.for("react.early_return_sentinel");
    bb1: {
      const builtInAgents_0 = sortedAgents.filter(_temp52);
      const hasNoAgents = !sortedAgents.length || source !== "built-in" && !sortedAgents.some(_temp62);
      if (hasNoAgents) {
        let t233;
        if ($[55] !== onCreateNew || $[56] !== renderCreateNewOption) {
          t233 = onCreateNew && /* @__PURE__ */ createElement(ThemedBox_default, null, renderCreateNewOption());
          $[55] = onCreateNew;
          $[56] = renderCreateNewOption;
          $[57] = t233;
        } else {
          t233 = $[57];
        }
        let t242;
        let t25;
        let t26;
        if ($[58] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
          t242 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "No agents found. Create specialized subagents that Claude can delegate to.");
          t25 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Each subagent has its own context window, custom system prompt, and specific tools.");
          t26 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Try creating: Code Reviewer, Code Simplifier, Security Reviewer, Tech Lead, or UX Reviewer.");
          $[58] = t242;
          $[59] = t25;
          $[60] = t26;
        } else {
          t242 = $[58];
          t25 = $[59];
          t26 = $[60];
        }
        let t27;
        if ($[61] !== renderBuiltInAgentsSection || $[62] !== sortedAgents || $[63] !== source) {
          t27 = source !== "built-in" && sortedAgents.some(_temp72) && /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(Divider, null), renderBuiltInAgentsSection());
          $[61] = renderBuiltInAgentsSection;
          $[62] = sortedAgents;
          $[63] = source;
          $[64] = t27;
        } else {
          t27 = $[64];
        }
        let t28;
        if ($[65] !== handleKeyDown || $[66] !== t233 || $[67] !== t27) {
          t28 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", gap: 1, tabIndex: 0, autoFocus: true, onKeyDown: handleKeyDown }, t233, t242, t25, t26, t27);
          $[65] = handleKeyDown;
          $[66] = t233;
          $[67] = t27;
          $[68] = t28;
        } else {
          t28 = $[68];
        }
        let t29;
        if ($[69] !== onBack || $[70] !== sourceTitle || $[71] !== t28) {
          t29 = /* @__PURE__ */ createElement(Dialog, { title: sourceTitle, subtitle: "No agents found", onCancel: onBack, hideInputGuide: true }, t28);
          $[69] = onBack;
          $[70] = sourceTitle;
          $[71] = t28;
          $[72] = t29;
        } else {
          t29 = $[72];
        }
        t22 = t29;
        break bb1;
      }
      T1 = Dialog;
      t17 = sourceTitle;
      let t232;
      if ($[73] !== sortedAgents) {
        t232 = count(sortedAgents, _temp82);
        $[73] = sortedAgents;
        $[74] = t232;
      } else {
        t232 = $[74];
      }
      t18 = `${t232} agents`;
      t19 = onBack;
      t20 = true;
      if ($[75] !== changes) {
        t21 = changes && changes.length > 0 && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, changes[changes.length - 1]));
        $[75] = changes;
        $[76] = t21;
      } else {
        t21 = $[76];
      }
      T0 = ThemedBox_default;
      t11 = "column";
      t12 = 0;
      t13 = true;
      t14 = handleKeyDown;
      if ($[77] !== onCreateNew || $[78] !== renderCreateNewOption) {
        t15 = onCreateNew && /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, renderCreateNewOption());
        $[77] = onCreateNew;
        $[78] = renderCreateNewOption;
        $[79] = t15;
      } else {
        t15 = $[79];
      }
      t16 = source === "all" ? /* @__PURE__ */ createElement(Fragment, null, AGENT_SOURCE_GROUPS.filter(_temp92).map((t242) => {
        const {
          label,
          source: groupSource_0
        } = t242;
        return /* @__PURE__ */ createElement(Fragment, { key: groupSource_0 }, renderAgentGroup(label, sortedAgents.filter((a_7) => a_7.source === groupSource_0)));
      }), builtInAgents_0.length > 0 && /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", marginBottom: 1, paddingLeft: 2 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Built-in agents"), " (always available)"), builtInAgents_0.map(renderAgent))) : source === "built-in" ? /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, "Built-in agents are provided by default and cannot be modified."), /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1, flexDirection: "column" }, sortedAgents.map((agent_2) => renderAgent(agent_2)))) : /* @__PURE__ */ createElement(Fragment, null, sortedAgents.filter(_temp0).map((agent_3) => renderAgent(agent_3)), sortedAgents.some(_temp1) && /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(Divider, null), renderBuiltInAgentsSection()));
    }
    $[30] = changes;
    $[31] = handleKeyDown;
    $[32] = onBack;
    $[33] = onCreateNew;
    $[34] = renderAgent;
    $[35] = renderAgentGroup;
    $[36] = renderBuiltInAgentsSection;
    $[37] = renderCreateNewOption;
    $[38] = sortedAgents;
    $[39] = source;
    $[40] = sourceTitle;
    $[41] = T0;
    $[42] = T1;
    $[43] = t11;
    $[44] = t12;
    $[45] = t13;
    $[46] = t14;
    $[47] = t15;
    $[48] = t16;
    $[49] = t17;
    $[50] = t18;
    $[51] = t19;
    $[52] = t20;
    $[53] = t21;
    $[54] = t22;
  } else {
    T0 = $[41];
    T1 = $[42];
    t11 = $[43];
    t12 = $[44];
    t13 = $[45];
    t14 = $[46];
    t15 = $[47];
    t16 = $[48];
    t17 = $[49];
    t18 = $[50];
    t19 = $[51];
    t20 = $[52];
    t21 = $[53];
    t22 = $[54];
  }
  if (t22 !== /* @__PURE__ */ Symbol.for("react.early_return_sentinel")) {
    return t22;
  }
  let t23;
  if ($[80] !== T0 || $[81] !== t11 || $[82] !== t12 || $[83] !== t13 || $[84] !== t14 || $[85] !== t15 || $[86] !== t16) {
    t23 = /* @__PURE__ */ createElement(T0, { flexDirection: t11, tabIndex: t12, autoFocus: t13, onKeyDown: t14 }, t15, t16);
    $[80] = T0;
    $[81] = t11;
    $[82] = t12;
    $[83] = t13;
    $[84] = t14;
    $[85] = t15;
    $[86] = t16;
    $[87] = t23;
  } else {
    t23 = $[87];
  }
  let t24;
  if ($[88] !== T1 || $[89] !== t17 || $[90] !== t18 || $[91] !== t19 || $[92] !== t20 || $[93] !== t21 || $[94] !== t23) {
    t24 = /* @__PURE__ */ createElement(T1, { title: t17, subtitle: t18, onCancel: t19, hideInputGuide: t20 }, t21, t23);
    $[88] = T1;
    $[89] = t17;
    $[90] = t18;
    $[91] = t19;
    $[92] = t20;
    $[93] = t21;
    $[94] = t23;
    $[95] = t24;
  } else {
    t24 = $[95];
  }
  return t24;
}
function _temp1(a_9) {
  return a_9.source === "built-in";
}
function _temp0(a_8) {
  return a_8.source !== "built-in";
}
function _temp92(g_0) {
  return g_0.source !== "built-in";
}
function _temp82(a_6) {
  return !a_6.overriddenBy;
}
function _temp72(a_5) {
  return a_5.source === "built-in";
}
function _temp62(a_4) {
  return a_4.source !== "built-in";
}
function _temp52(a_3) {
  return a_3.source === "built-in";
}
function _temp42(a_2) {
  return a_2.source === "built-in";
}
function _temp32(g) {
  return g.source !== "built-in";
}
function _temp23(a) {
  return a.source !== "built-in";
}
function _temp10(agent) {
  return {
    isOverridden: !!agent.overriddenBy,
    overriddenBy: agent.overriddenBy || null
  };
}
var init_AgentsList = __esm({
  "src/components/agents/AgentsList.tsx"() {
    init_react_compiler_runtime();
    init_figures();
    init_react();
    init_ink();
    init_agentDisplay();
    init_array();
    init_Dialog();
    init_Divider();
    init_utils2();
  }
});

// src/components/wizard/WizardProvider.tsx
function WizardProvider(t0) {
  const $ = c(38);
  const {
    steps,
    initialData: t1,
    onComplete,
    onCancel,
    children,
    title,
    showStepCounter: t2
  } = t0;
  let t3;
  if ($[0] !== t1) {
    t3 = t1 === void 0 ? {} : t1;
    $[0] = t1;
    $[1] = t3;
  } else {
    t3 = $[1];
  }
  const initialData = t3;
  const showStepCounter = t2 === void 0 ? true : t2;
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [wizardData, setWizardData] = useState(initialData);
  const [isCompleted, setIsCompleted] = useState(false);
  let t4;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = [];
    $[2] = t4;
  } else {
    t4 = $[2];
  }
  const [navigationHistory, setNavigationHistory] = useState(t4);
  useExitOnCtrlCDWithKeybindings();
  let t5;
  let t6;
  if ($[3] !== isCompleted || $[4] !== onComplete || $[5] !== wizardData) {
    t5 = () => {
      if (isCompleted) {
        setNavigationHistory([]);
        onComplete(wizardData);
      }
    };
    t6 = [isCompleted, wizardData, onComplete];
    $[3] = isCompleted;
    $[4] = onComplete;
    $[5] = wizardData;
    $[6] = t5;
    $[7] = t6;
  } else {
    t5 = $[6];
    t6 = $[7];
  }
  useEffect(t5, t6);
  let t7;
  if ($[8] !== currentStepIndex || $[9] !== navigationHistory || $[10] !== steps.length) {
    t7 = () => {
      if (currentStepIndex < steps.length - 1) {
        if (navigationHistory.length > 0) {
          setNavigationHistory((prev) => [...prev, currentStepIndex]);
        }
        setCurrentStepIndex(_temp11);
      } else {
        setIsCompleted(true);
      }
    };
    $[8] = currentStepIndex;
    $[9] = navigationHistory;
    $[10] = steps.length;
    $[11] = t7;
  } else {
    t7 = $[11];
  }
  const goNext = t7;
  let t8;
  if ($[12] !== currentStepIndex || $[13] !== navigationHistory || $[14] !== onCancel) {
    t8 = () => {
      if (navigationHistory.length > 0) {
        const previousStep = navigationHistory[navigationHistory.length - 1];
        if (previousStep !== void 0) {
          setNavigationHistory(_temp24);
          setCurrentStepIndex(previousStep);
        }
      } else {
        if (currentStepIndex > 0) {
          setCurrentStepIndex(_temp33);
        } else {
          if (onCancel) {
            onCancel();
          }
        }
      }
    };
    $[12] = currentStepIndex;
    $[13] = navigationHistory;
    $[14] = onCancel;
    $[15] = t8;
  } else {
    t8 = $[15];
  }
  const goBack = t8;
  let t9;
  if ($[16] !== currentStepIndex || $[17] !== steps.length) {
    t9 = (index) => {
      if (index >= 0 && index < steps.length) {
        setNavigationHistory((prev_3) => [...prev_3, currentStepIndex]);
        setCurrentStepIndex(index);
      }
    };
    $[16] = currentStepIndex;
    $[17] = steps.length;
    $[18] = t9;
  } else {
    t9 = $[18];
  }
  const goToStep = t9;
  let t10;
  if ($[19] !== onCancel) {
    t10 = () => {
      setNavigationHistory([]);
      if (onCancel) {
        onCancel();
      }
    };
    $[19] = onCancel;
    $[20] = t10;
  } else {
    t10 = $[20];
  }
  const cancel = t10;
  let t11;
  if ($[21] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t11 = (updates) => {
      setWizardData((prev_4) => ({
        ...prev_4,
        ...updates
      }));
    };
    $[21] = t11;
  } else {
    t11 = $[21];
  }
  const updateWizardData = t11;
  let t12;
  if ($[22] !== cancel || $[23] !== currentStepIndex || $[24] !== goBack || $[25] !== goNext || $[26] !== goToStep || $[27] !== showStepCounter || $[28] !== steps.length || $[29] !== title || $[30] !== wizardData) {
    t12 = {
      currentStepIndex,
      totalSteps: steps.length,
      wizardData,
      setWizardData,
      updateWizardData,
      goNext,
      goBack,
      goToStep,
      cancel,
      title,
      showStepCounter
    };
    $[22] = cancel;
    $[23] = currentStepIndex;
    $[24] = goBack;
    $[25] = goNext;
    $[26] = goToStep;
    $[27] = showStepCounter;
    $[28] = steps.length;
    $[29] = title;
    $[30] = wizardData;
    $[31] = t12;
  } else {
    t12 = $[31];
  }
  const contextValue = t12;
  const CurrentStepComponent = steps[currentStepIndex];
  if (!CurrentStepComponent || isCompleted) {
    return null;
  }
  let t13;
  if ($[32] !== CurrentStepComponent || $[33] !== children) {
    t13 = children || /* @__PURE__ */ react_default.createElement(CurrentStepComponent, null);
    $[32] = CurrentStepComponent;
    $[33] = children;
    $[34] = t13;
  } else {
    t13 = $[34];
  }
  let t14;
  if ($[35] !== contextValue || $[36] !== t13) {
    t14 = /* @__PURE__ */ react_default.createElement(WizardContext.Provider, { value: contextValue }, t13);
    $[35] = contextValue;
    $[36] = t13;
    $[37] = t14;
  } else {
    t14 = $[37];
  }
  return t14;
}
function _temp33(prev_2) {
  return prev_2 - 1;
}
function _temp24(prev_1) {
  return prev_1.slice(0, -1);
}
function _temp11(prev_0) {
  return prev_0 + 1;
}
var WizardContext;
var init_WizardProvider = __esm({
  "src/components/wizard/WizardProvider.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_useExitOnCtrlCDWithKeybindings();
    WizardContext = createContext(null);
  }
});

// src/components/wizard/useWizard.ts
function useWizard() {
  const context = useContext(WizardContext);
  if (!context) {
    throw new Error("useWizard must be used within a WizardProvider");
  }
  return context;
}
var init_useWizard = __esm({
  "src/components/wizard/useWizard.ts"() {
    init_react();
    init_WizardProvider();
  }
});

// src/components/wizard/WizardNavigationFooter.tsx
function WizardNavigationFooter({
  instructions = /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "\u2191\u2193", action: "navigate" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "select" }), /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "go back" }))
}) {
  const exitState = useExitOnCtrlCDWithKeybindings();
  return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginLeft: 3, marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, exitState.pending ? `Press ${exitState.keyName} again to exit` : instructions));
}
var init_WizardNavigationFooter = __esm({
  "src/components/wizard/WizardNavigationFooter.tsx"() {
    init_react();
    init_useExitOnCtrlCDWithKeybindings();
    init_ink();
    init_ConfigurableShortcutHint();
    init_Byline();
    init_KeyboardShortcutHint();
  }
});

// src/components/wizard/WizardDialogLayout.tsx
function WizardDialogLayout(t0) {
  const $ = c(11);
  const {
    title: titleOverride,
    color: t1,
    children,
    subtitle,
    footerText
  } = t0;
  const color = t1 === void 0 ? "suggestion" : t1;
  const {
    currentStepIndex,
    totalSteps,
    title: providerTitle,
    showStepCounter,
    goBack
  } = useWizard();
  const title = titleOverride || providerTitle || "Wizard";
  const stepSuffix = showStepCounter !== false ? ` (${currentStepIndex + 1}/${totalSteps})` : "";
  const t2 = `${title}${stepSuffix}`;
  let t3;
  if ($[0] !== children || $[1] !== color || $[2] !== goBack || $[3] !== subtitle || $[4] !== t2) {
    t3 = /* @__PURE__ */ react_default.createElement(Dialog, { title: t2, subtitle, onCancel: goBack, color, hideInputGuide: true, isCancelActive: false }, children);
    $[0] = children;
    $[1] = color;
    $[2] = goBack;
    $[3] = subtitle;
    $[4] = t2;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  if ($[6] !== footerText) {
    t4 = /* @__PURE__ */ react_default.createElement(WizardNavigationFooter, { instructions: footerText });
    $[6] = footerText;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  let t5;
  if ($[8] !== t3 || $[9] !== t4) {
    t5 = /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, t3, t4);
    $[8] = t3;
    $[9] = t4;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  return t5;
}
var init_WizardDialogLayout = __esm({
  "src/components/wizard/WizardDialogLayout.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_Dialog();
    init_useWizard();
    init_WizardNavigationFooter();
  }
});

// src/components/wizard/index.ts
var init_wizard = __esm({
  "src/components/wizard/index.ts"() {
    init_useWizard();
    init_WizardDialogLayout();
    init_WizardNavigationFooter();
    init_WizardProvider();
  }
});

// src/components/agents/new-agent-creation/wizard-steps/ColorStep.tsx
function ColorStep() {
  const $ = c(14);
  const {
    goNext,
    goBack,
    updateWizardData,
    wizardData
  } = useWizard();
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = {
      context: "Confirmation"
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  useKeybinding("confirm:no", goBack, t0);
  let t1;
  if ($[1] !== goNext || $[2] !== updateWizardData || $[3] !== wizardData.agentType || $[4] !== wizardData.location || $[5] !== wizardData.selectedModel || $[6] !== wizardData.selectedTools || $[7] !== wizardData.systemPrompt || $[8] !== wizardData.whenToUse) {
    t1 = (color) => {
      updateWizardData({
        selectedColor: color,
        finalAgent: {
          agentType: wizardData.agentType,
          whenToUse: wizardData.whenToUse,
          getSystemPrompt: () => wizardData.systemPrompt,
          tools: wizardData.selectedTools,
          ...wizardData.selectedModel ? {
            model: wizardData.selectedModel
          } : {},
          ...color ? {
            color
          } : {},
          source: wizardData.location
        }
      });
      goNext();
    };
    $[1] = goNext;
    $[2] = updateWizardData;
    $[3] = wizardData.agentType;
    $[4] = wizardData.location;
    $[5] = wizardData.selectedModel;
    $[6] = wizardData.selectedTools;
    $[7] = wizardData.systemPrompt;
    $[8] = wizardData.whenToUse;
    $[9] = t1;
  } else {
    t1 = $[9];
  }
  const handleConfirm = t1;
  let t2;
  if ($[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "\u2191\u2193", action: "navigate" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "select" }), /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "go back" }));
    $[10] = t2;
  } else {
    t2 = $[10];
  }
  const t3 = wizardData.agentType || "agent";
  let t4;
  if ($[11] !== handleConfirm || $[12] !== t3) {
    t4 = /* @__PURE__ */ react_default.createElement(WizardDialogLayout, { subtitle: "Choose background color", footerText: t2 }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ColorPicker, { agentName: t3, currentColor: "automatic", onConfirm: handleConfirm })));
    $[11] = handleConfirm;
    $[12] = t3;
    $[13] = t4;
  } else {
    t4 = $[13];
  }
  return t4;
}
var init_ColorStep = __esm({
  "src/components/agents/new-agent-creation/wizard-steps/ColorStep.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_useKeybinding();
    init_ConfigurableShortcutHint();
    init_Byline();
    init_KeyboardShortcutHint();
    init_wizard();
    init_WizardDialogLayout();
    init_ColorPicker();
  }
});

// src/components/agents/validateAgent.ts
function validateAgentType(agentType) {
  if (!agentType) {
    return "Agent type is required";
  }
  if (!/^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]$/.test(agentType)) {
    return "Agent type must start and end with alphanumeric characters and contain only letters, numbers, and hyphens";
  }
  if (agentType.length < 3) {
    return "Agent type must be at least 3 characters long";
  }
  if (agentType.length > 50) {
    return "Agent type must be less than 50 characters";
  }
  return null;
}
function validateAgent(agent, availableTools, existingAgents) {
  const errors = [];
  const warnings = [];
  if (!agent.agentType) {
    errors.push("Agent type is required");
  } else {
    const typeError = validateAgentType(agent.agentType);
    if (typeError) {
      errors.push(typeError);
    }
    const duplicate = existingAgents.find(
      (a) => a.agentType === agent.agentType && a.source !== agent.source
    );
    if (duplicate) {
      errors.push(
        `Agent type "${agent.agentType}" already exists in ${getAgentSourceDisplayName(duplicate.source)}`
      );
    }
  }
  if (!agent.whenToUse) {
    errors.push("Description (description) is required");
  } else if (agent.whenToUse.length < 10) {
    warnings.push(
      "Description should be more descriptive (at least 10 characters)"
    );
  } else if (agent.whenToUse.length > 5e3) {
    warnings.push("Description is very long (over 5000 characters)");
  }
  if (agent.tools !== void 0 && !Array.isArray(agent.tools)) {
    errors.push("Tools must be an array");
  } else {
    if (agent.tools === void 0) {
      warnings.push("Agent has access to all tools");
    } else if (agent.tools.length === 0) {
      warnings.push(
        "No tools selected - agent will have very limited capabilities"
      );
    }
    const resolvedTools = resolveAgentTools(agent, availableTools, false);
    if (resolvedTools.invalidTools.length > 0) {
      errors.push(`Invalid tools: ${resolvedTools.invalidTools.join(", ")}`);
    }
  }
  const systemPrompt = agent.getSystemPrompt();
  if (!systemPrompt) {
    errors.push("System prompt is required");
  } else if (systemPrompt.length < 20) {
    errors.push("System prompt is too short (minimum 20 characters)");
  } else if (systemPrompt.length > 1e4) {
    warnings.push("System prompt is very long (over 10,000 characters)");
  }
  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}
var init_validateAgent = __esm({
  "src/components/agents/validateAgent.ts"() {
    init_agentToolUtils();
    init_utils2();
  }
});

// src/components/agents/new-agent-creation/wizard-steps/ConfirmStep.tsx
function ConfirmStep(t0) {
  const $ = c(88);
  const {
    tools,
    existingAgents,
    onSave,
    onSaveAndEdit,
    error
  } = t0;
  const {
    goBack,
    wizardData
  } = useWizard();
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = {
      context: "Confirmation"
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  useKeybinding("confirm:no", goBack, t1);
  let t2;
  if ($[1] !== onSave || $[2] !== onSaveAndEdit) {
    t2 = (e) => {
      if (e.key === "s" || e.key === "return") {
        e.preventDefault();
        onSave();
      } else {
        if (e.key === "e") {
          e.preventDefault();
          onSaveAndEdit();
        }
      }
    };
    $[1] = onSave;
    $[2] = onSaveAndEdit;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  const handleKeyDown = t2;
  const agent = wizardData.finalAgent;
  let T0;
  let T1;
  let t10;
  let t11;
  let t12;
  let t13;
  let t14;
  let t15;
  let t16;
  let t17;
  let t18;
  let t19;
  let t3;
  let t4;
  let t5;
  let t6;
  let t7;
  let t8;
  let t9;
  if ($[4] !== agent || $[5] !== existingAgents || $[6] !== handleKeyDown || $[7] !== tools || $[8] !== wizardData.location) {
    const validation = validateAgent(agent, tools, existingAgents);
    let t202;
    if ($[28] !== agent) {
      t202 = truncateToWidth(agent.getSystemPrompt(), 240);
      $[28] = agent;
      $[29] = t202;
    } else {
      t202 = $[29];
    }
    const systemPromptPreview = t202;
    let t212;
    if ($[30] !== agent.whenToUse) {
      t212 = truncateToWidth(agent.whenToUse, 240);
      $[30] = agent.whenToUse;
      $[31] = t212;
    } else {
      t212 = $[31];
    }
    const whenToUsePreview = t212;
    const getToolsDisplay = _temp12;
    let t222;
    if ($[32] !== agent.memory) {
      t222 = isAutoMemoryEnabled() ? /* @__PURE__ */ react_default.createElement(ThemedText, null, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Memory"), ": ", getMemoryScopeDisplay(agent.memory)) : null;
      $[32] = agent.memory;
      $[33] = t222;
    } else {
      t222 = $[33];
    }
    const memoryDisplayElement = t222;
    T1 = WizardDialogLayout;
    t18 = "Confirm and save";
    if ($[34] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t19 = /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "s/Enter", action: "save" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "e", action: "edit in your editor" }), /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "cancel" }));
      $[34] = t19;
    } else {
      t19 = $[34];
    }
    T0 = ThemedBox_default;
    t3 = "column";
    t4 = 0;
    t5 = true;
    t6 = handleKeyDown;
    let t232;
    if ($[35] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t232 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Name");
      $[35] = t232;
    } else {
      t232 = $[35];
    }
    if ($[36] !== agent.agentType) {
      t7 = /* @__PURE__ */ react_default.createElement(ThemedText, null, t232, ": ", agent.agentType);
      $[36] = agent.agentType;
      $[37] = t7;
    } else {
      t7 = $[37];
    }
    let t242;
    if ($[38] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t242 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Location");
      $[38] = t242;
    } else {
      t242 = $[38];
    }
    let t252;
    if ($[39] !== agent.agentType || $[40] !== wizardData.location) {
      t252 = getNewRelativeAgentFilePath({
        source: wizardData.location,
        agentType: agent.agentType
      });
      $[39] = agent.agentType;
      $[40] = wizardData.location;
      $[41] = t252;
    } else {
      t252 = $[41];
    }
    if ($[42] !== t252) {
      t8 = /* @__PURE__ */ react_default.createElement(ThemedText, null, t242, ":", " ", t252);
      $[42] = t252;
      $[43] = t8;
    } else {
      t8 = $[43];
    }
    let t26;
    if ($[44] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t26 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Tools");
      $[44] = t26;
    } else {
      t26 = $[44];
    }
    let t27;
    if ($[45] !== agent.tools) {
      t27 = getToolsDisplay(agent.tools);
      $[45] = agent.tools;
      $[46] = t27;
    } else {
      t27 = $[46];
    }
    if ($[47] !== t27) {
      t9 = /* @__PURE__ */ react_default.createElement(ThemedText, null, t26, ": ", t27);
      $[47] = t27;
      $[48] = t9;
    } else {
      t9 = $[48];
    }
    let t28;
    if ($[49] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t28 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Model");
      $[49] = t28;
    } else {
      t28 = $[49];
    }
    let t29;
    if ($[50] !== agent.model) {
      t29 = getAgentModelDisplay(agent.model);
      $[50] = agent.model;
      $[51] = t29;
    } else {
      t29 = $[51];
    }
    if ($[52] !== t29) {
      t10 = /* @__PURE__ */ react_default.createElement(ThemedText, null, t28, ": ", t29);
      $[52] = t29;
      $[53] = t10;
    } else {
      t10 = $[53];
    }
    t11 = memoryDisplayElement;
    if ($[54] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t12 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, null, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Description"), " (tells Claude when to use this agent):"));
      $[54] = t12;
    } else {
      t12 = $[54];
    }
    if ($[55] !== whenToUsePreview) {
      t13 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginLeft: 2, marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, null, whenToUsePreview));
      $[55] = whenToUsePreview;
      $[56] = t13;
    } else {
      t13 = $[56];
    }
    if ($[57] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t14 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, null, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "System prompt"), ":"));
      $[57] = t14;
    } else {
      t14 = $[57];
    }
    if ($[58] !== systemPromptPreview) {
      t15 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginLeft: 2, marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, null, systemPromptPreview));
      $[58] = systemPromptPreview;
      $[59] = t15;
    } else {
      t15 = $[59];
    }
    t16 = validation.warnings.length > 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1, flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "warning" }, "Warnings:"), validation.warnings.map(_temp25));
    t17 = validation.errors.length > 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1, flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, "Errors:"), validation.errors.map(_temp34));
    $[4] = agent;
    $[5] = existingAgents;
    $[6] = handleKeyDown;
    $[7] = tools;
    $[8] = wizardData.location;
    $[9] = T0;
    $[10] = T1;
    $[11] = t10;
    $[12] = t11;
    $[13] = t12;
    $[14] = t13;
    $[15] = t14;
    $[16] = t15;
    $[17] = t16;
    $[18] = t17;
    $[19] = t18;
    $[20] = t19;
    $[21] = t3;
    $[22] = t4;
    $[23] = t5;
    $[24] = t6;
    $[25] = t7;
    $[26] = t8;
    $[27] = t9;
  } else {
    T0 = $[9];
    T1 = $[10];
    t10 = $[11];
    t11 = $[12];
    t12 = $[13];
    t13 = $[14];
    t14 = $[15];
    t15 = $[16];
    t16 = $[17];
    t17 = $[18];
    t18 = $[19];
    t19 = $[20];
    t3 = $[21];
    t4 = $[22];
    t5 = $[23];
    t6 = $[24];
    t7 = $[25];
    t8 = $[26];
    t9 = $[27];
  }
  let t20;
  if ($[60] !== error) {
    t20 = error && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, error));
    $[60] = error;
    $[61] = t20;
  } else {
    t20 = $[61];
  }
  let t21;
  if ($[62] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t21 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "s");
    $[62] = t21;
  } else {
    t21 = $[62];
  }
  let t22;
  if ($[63] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t22 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Enter");
    $[63] = t22;
  } else {
    t22 = $[63];
  }
  let t23;
  if ($[64] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t23 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 2 }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "success" }, "Press ", t21, " or ", t22, " to save,", " ", /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "e"), " to save and edit"));
    $[64] = t23;
  } else {
    t23 = $[64];
  }
  let t24;
  if ($[65] !== T0 || $[66] !== t10 || $[67] !== t11 || $[68] !== t12 || $[69] !== t13 || $[70] !== t14 || $[71] !== t15 || $[72] !== t16 || $[73] !== t17 || $[74] !== t20 || $[75] !== t3 || $[76] !== t4 || $[77] !== t5 || $[78] !== t6 || $[79] !== t7 || $[80] !== t8 || $[81] !== t9) {
    t24 = /* @__PURE__ */ react_default.createElement(T0, { flexDirection: t3, tabIndex: t4, autoFocus: t5, onKeyDown: t6 }, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t20, t23);
    $[65] = T0;
    $[66] = t10;
    $[67] = t11;
    $[68] = t12;
    $[69] = t13;
    $[70] = t14;
    $[71] = t15;
    $[72] = t16;
    $[73] = t17;
    $[74] = t20;
    $[75] = t3;
    $[76] = t4;
    $[77] = t5;
    $[78] = t6;
    $[79] = t7;
    $[80] = t8;
    $[81] = t9;
    $[82] = t24;
  } else {
    t24 = $[82];
  }
  let t25;
  if ($[83] !== T1 || $[84] !== t18 || $[85] !== t19 || $[86] !== t24) {
    t25 = /* @__PURE__ */ react_default.createElement(T1, { subtitle: t18, footerText: t19 }, t24);
    $[83] = T1;
    $[84] = t18;
    $[85] = t19;
    $[86] = t24;
    $[87] = t25;
  } else {
    t25 = $[87];
  }
  return t25;
}
function _temp34(err, i_0) {
  return /* @__PURE__ */ react_default.createElement(ThemedText, { key: i_0, color: "error" }, " ", "\u2022 ", err);
}
function _temp25(warning, i) {
  return /* @__PURE__ */ react_default.createElement(ThemedText, { key: i, dimColor: true }, " ", "\u2022 ", warning);
}
function _temp12(toolNames) {
  if (toolNames === void 0) {
    return "All tools";
  }
  if (toolNames.length === 0) {
    return "None";
  }
  if (toolNames.length === 1) {
    return toolNames[0] || "None";
  }
  if (toolNames.length === 2) {
    return toolNames.join(" and ");
  }
  return `${toolNames.slice(0, -1).join(", ")}, and ${toolNames[toolNames.length - 1]}`;
}
var init_ConfirmStep = __esm({
  "src/components/agents/new-agent-creation/wizard-steps/ConfirmStep.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_useKeybinding();
    init_paths();
    init_agentMemory();
    init_format();
    init_agent();
    init_ConfigurableShortcutHint();
    init_Byline();
    init_KeyboardShortcutHint();
    init_wizard();
    init_WizardDialogLayout();
    init_agentFileUtils();
    init_validateAgent();
  }
});

// src/components/agents/new-agent-creation/wizard-steps/ConfirmStepWrapper.tsx
function ConfirmStepWrapper({
  tools,
  existingAgents,
  onComplete
}) {
  const {
    wizardData
  } = useWizard();
  const [saveError, setSaveError] = useState(null);
  const setAppState = useSetAppState();
  const saveAgent = useCallback(async (openInEditor) => {
    if (!wizardData?.finalAgent) return;
    try {
      await saveAgentToFile(wizardData.location, wizardData.finalAgent.agentType, wizardData.finalAgent.whenToUse, wizardData.finalAgent.tools, wizardData.finalAgent.getSystemPrompt(), true, wizardData.finalAgent.color, wizardData.finalAgent.model, wizardData.finalAgent.memory);
      setAppState((state) => {
        if (!wizardData.finalAgent) return state;
        const allAgents = state.agentDefinitions.allAgents.concat(wizardData.finalAgent);
        return {
          ...state,
          agentDefinitions: {
            ...state.agentDefinitions,
            activeAgents: getActiveAgentsFromList(allAgents),
            allAgents
          }
        };
      });
      if (openInEditor) {
        const filePath = getNewAgentFilePath({
          source: wizardData.location,
          agentType: wizardData.finalAgent.agentType
        });
        await editFileInEditor(filePath);
      }
      logEvent("tengu_agent_created", {
        agent_type: wizardData.finalAgent.agentType,
        generation_method: wizardData.wasGenerated ? "generated" : "manual",
        source: wizardData.location,
        tool_count: wizardData.finalAgent.tools?.length ?? "all",
        has_custom_model: !!wizardData.finalAgent.model,
        has_custom_color: !!wizardData.finalAgent.color,
        has_memory: !!wizardData.finalAgent.memory,
        memory_scope: wizardData.finalAgent.memory ?? "none",
        ...openInEditor ? {
          opened_in_editor: true
        } : {}
      });
      const message = openInEditor ? `Created agent: ${source_default.bold(wizardData.finalAgent.agentType)} and opened in editor. If you made edits, restart to load the latest version.` : `Created agent: ${source_default.bold(wizardData.finalAgent.agentType)}`;
      onComplete(message);
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : "Failed to save agent");
    }
  }, [wizardData, onComplete, setAppState]);
  const handleSave = useCallback(() => saveAgent(false), [saveAgent]);
  const handleSaveAndEdit = useCallback(() => saveAgent(true), [saveAgent]);
  return /* @__PURE__ */ react_default.createElement(ConfirmStep, { tools, existingAgents, onSave: handleSave, onSaveAndEdit: handleSaveAndEdit, error: saveError });
}
var init_ConfirmStepWrapper = __esm({
  "src/components/agents/new-agent-creation/wizard-steps/ConfirmStepWrapper.tsx"() {
    init_source();
    init_react();
    init_analytics();
    init_AppState();
    init_loadAgentsDir();
    init_promptEditor();
    init_wizard();
    init_agentFileUtils();
    init_ConfirmStep();
  }
});

// src/components/agents/new-agent-creation/wizard-steps/DescriptionStep.tsx
function DescriptionStep() {
  const $ = c(18);
  const {
    goNext,
    goBack,
    updateWizardData,
    wizardData
  } = useWizard();
  const [whenToUse, setWhenToUse] = useState(wizardData.whenToUse || "");
  const [cursorOffset, setCursorOffset] = useState(whenToUse.length);
  const [error, setError] = useState(null);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = {
      context: "Settings"
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  useKeybinding("confirm:no", goBack, t0);
  let t1;
  if ($[1] !== whenToUse) {
    t1 = async () => {
      const result = await editPromptInEditor(whenToUse);
      if (result.content !== null) {
        setWhenToUse(result.content);
        setCursorOffset(result.content.length);
      }
    };
    $[1] = whenToUse;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const handleExternalEditor = t1;
  let t2;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = {
      context: "Chat"
    };
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  useKeybinding("chat:externalEditor", handleExternalEditor, t2);
  let t3;
  if ($[4] !== goNext || $[5] !== updateWizardData) {
    t3 = (value) => {
      const trimmedValue = value.trim();
      if (!trimmedValue) {
        setError("Description is required");
        return;
      }
      setError(null);
      updateWizardData({
        whenToUse: trimmedValue
      });
      goNext();
    };
    $[4] = goNext;
    $[5] = updateWizardData;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  const handleSubmit = t3;
  let t4;
  if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Type", action: "enter text" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "continue" }), /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "chat:externalEditor", context: "Chat", fallback: "ctrl+g", description: "open in editor" }), /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Settings", fallback: "Esc", description: "go back" }));
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  let t5;
  if ($[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "When should Claude use this agent?");
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  let t6;
  if ($[9] !== cursorOffset || $[10] !== handleSubmit || $[11] !== whenToUse) {
    t6 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(TextInput, { value: whenToUse, onChange: setWhenToUse, onSubmit: handleSubmit, placeholder: "e.g., use this agent after you're done writing code...", columns: 80, cursorOffset, onChangeCursorOffset: setCursorOffset, focus: true, showCursor: true }));
    $[9] = cursorOffset;
    $[10] = handleSubmit;
    $[11] = whenToUse;
    $[12] = t6;
  } else {
    t6 = $[12];
  }
  let t7;
  if ($[13] !== error) {
    t7 = error && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, error));
    $[13] = error;
    $[14] = t7;
  } else {
    t7 = $[14];
  }
  let t8;
  if ($[15] !== t6 || $[16] !== t7) {
    t8 = /* @__PURE__ */ react_default.createElement(WizardDialogLayout, { subtitle: "Description (tell Claude when to use this agent)", footerText: t4 }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, t5, t6, t7));
    $[15] = t6;
    $[16] = t7;
    $[17] = t8;
  } else {
    t8 = $[17];
  }
  return t8;
}
var init_DescriptionStep = __esm({
  "src/components/agents/new-agent-creation/wizard-steps/DescriptionStep.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_useKeybinding();
    init_promptEditor();
    init_ConfigurableShortcutHint();
    init_Byline();
    init_KeyboardShortcutHint();
    init_TextInput();
    init_wizard();
    init_WizardDialogLayout();
  }
});

// src/components/agents/generateAgent.ts
async function generateAgent(userPrompt, model, existingIdentifiers, abortSignal) {
  const existingList = existingIdentifiers.length > 0 ? `

IMPORTANT: The following identifiers already exist and must NOT be used: ${existingIdentifiers.join(", ")}` : "";
  const prompt = `Create an agent configuration based on this request: "${userPrompt}".${existingList}
  Return ONLY the JSON object, no other text.`;
  const userMessage = createUserMessage({ content: prompt });
  const userContext = await getUserContext();
  const messagesWithContext = prependUserContext([userMessage], userContext);
  const systemPrompt = isAutoMemoryEnabled() ? AGENT_CREATION_SYSTEM_PROMPT + AGENT_MEMORY_INSTRUCTIONS : AGENT_CREATION_SYSTEM_PROMPT;
  const response = await queryModelWithoutStreaming({
    messages: normalizeMessagesForAPI(messagesWithContext),
    systemPrompt: asSystemPrompt([systemPrompt]),
    thinkingConfig: { type: "disabled" },
    tools: [],
    signal: abortSignal,
    options: {
      getToolPermissionContext: async () => getEmptyToolPermissionContext(),
      model,
      toolChoice: void 0,
      agents: [],
      isNonInteractiveSession: false,
      hasAppendSystemPrompt: false,
      querySource: "agent_creation",
      mcpTools: []
    }
  });
  const textBlocks = response.message.content.filter(
    (block) => block.type === "text"
  );
  const responseText = textBlocks.map((block) => block.text).join("\n");
  let parsed;
  try {
    parsed = jsonParse(responseText.trim());
  } catch {
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("No JSON object found in response");
    }
    parsed = jsonParse(jsonMatch[0]);
  }
  if (!parsed.identifier || !parsed.whenToUse || !parsed.systemPrompt) {
    throw new Error("Invalid agent configuration generated");
  }
  logEvent("tengu_agent_definition_generated", {
    agent_identifier: parsed.identifier
  });
  return {
    identifier: parsed.identifier,
    whenToUse: parsed.whenToUse,
    systemPrompt: parsed.systemPrompt
  };
}
var AGENT_CREATION_SYSTEM_PROMPT, AGENT_MEMORY_INSTRUCTIONS;
var init_generateAgent = __esm({
  "src/components/agents/generateAgent.ts"() {
    init_context();
    init_claude();
    init_Tool();
    init_constants2();
    init_api();
    init_messages();
    init_paths();
    init_analytics();
    init_slowOperations();
    init_systemPromptType();
    AGENT_CREATION_SYSTEM_PROMPT = `You are an elite AI agent architect specializing in crafting high-performance agent configurations. Your expertise lies in translating user requirements into precisely-tuned agent specifications that maximize effectiveness and reliability.

**Important Context**: You may have access to project-specific instructions from CLAUDE.md files and other context that may include coding standards, project structure, and custom requirements. Consider this context when creating agents to ensure they align with the project's established patterns and practices.

When a user describes what they want an agent to do, you will:

1. **Extract Core Intent**: Identify the fundamental purpose, key responsibilities, and success criteria for the agent. Look for both explicit requirements and implicit needs. Consider any project-specific context from CLAUDE.md files. For agents that are meant to review code, you should assume that the user is asking to review recently written code and not the whole codebase, unless the user has explicitly instructed you otherwise.

2. **Design Expert Persona**: Create a compelling expert identity that embodies deep domain knowledge relevant to the task. The persona should inspire confidence and guide the agent's decision-making approach.

3. **Architect Comprehensive Instructions**: Develop a system prompt that:
   - Establishes clear behavioral boundaries and operational parameters
   - Provides specific methodologies and best practices for task execution
   - Anticipates edge cases and provides guidance for handling them
   - Incorporates any specific requirements or preferences mentioned by the user
   - Defines output format expectations when relevant
   - Aligns with project-specific coding standards and patterns from CLAUDE.md

4. **Optimize for Performance**: Include:
   - Decision-making frameworks appropriate to the domain
   - Quality control mechanisms and self-verification steps
   - Efficient workflow patterns
   - Clear escalation or fallback strategies

5. **Create Identifier**: Design a concise, descriptive identifier that:
   - Uses lowercase letters, numbers, and hyphens only
   - Is typically 2-4 words joined by hyphens
   - Clearly indicates the agent's primary function
   - Is memorable and easy to type
   - Avoids generic terms like "helper" or "assistant"

6 **Example agent descriptions**:
  - in the 'whenToUse' field of the JSON object, you should include examples of when this agent should be used.
  - examples should be of the form:
    - <example>
      Context: The user is creating a test-runner agent that should be called after a logical chunk of code is written.
      user: "Please write a function that checks if a number is prime"
      assistant: "Here is the relevant function: "
      <function call omitted for brevity only for this example>
      <commentary>
      Since a significant piece of code was written, use the ${AGENT_TOOL_NAME} tool to launch the test-runner agent to run the tests.
      </commentary>
      assistant: "Now let me use the test-runner agent to run the tests"
    </example>
    - <example>
      Context: User is creating an agent to respond to the word "hello" with a friendly jok.
      user: "Hello"
      assistant: "I'm going to use the ${AGENT_TOOL_NAME} tool to launch the greeting-responder agent to respond with a friendly joke"
      <commentary>
      Since the user is greeting, use the greeting-responder agent to respond with a friendly joke. 
      </commentary>
    </example>
  - If the user mentioned or implied that the agent should be used proactively, you should include examples of this.
- NOTE: Ensure that in the examples, you are making the assistant use the Agent tool and not simply respond directly to the task.

Your output must be a valid JSON object with exactly these fields:
{
  "identifier": "A unique, descriptive identifier using lowercase letters, numbers, and hyphens (e.g., 'test-runner', 'api-docs-writer', 'code-formatter')",
  "whenToUse": "A precise, actionable description starting with 'Use this agent when...' that clearly defines the triggering conditions and use cases. Ensure you include examples as described above.",
  "systemPrompt": "The complete system prompt that will govern the agent's behavior, written in second person ('You are...', 'You will...') and structured for maximum clarity and effectiveness"
}

Key principles for your system prompts:
- Be specific rather than generic - avoid vague instructions
- Include concrete examples when they would clarify behavior
- Balance comprehensiveness with clarity - every instruction should add value
- Ensure the agent has enough context to handle variations of the core task
- Make the agent proactive in seeking clarification when needed
- Build in quality assurance and self-correction mechanisms

Remember: The agents you create should be autonomous experts capable of handling their designated tasks with minimal additional guidance. Your system prompts are their complete operational manual.
`;
    AGENT_MEMORY_INSTRUCTIONS = `

7. **Agent Memory Instructions**: If the user mentions "memory", "remember", "learn", "persist", or similar concepts, OR if the agent would benefit from building up knowledge across conversations (e.g., code reviewers learning patterns, architects learning codebase structure, etc.), include domain-specific memory update instructions in the systemPrompt.

   Add a section like this to the systemPrompt, tailored to the agent's specific domain:

   "**Update your agent memory** as you discover [domain-specific items]. This builds up institutional knowledge across conversations. Write concise notes about what you found and where.

   Examples of what to record:
   - [domain-specific item 1]
   - [domain-specific item 2]
   - [domain-specific item 3]"

   Examples of domain-specific memory instructions:
   - For a code-reviewer: "Update your agent memory as you discover code patterns, style conventions, common issues, and architectural decisions in this codebase."
   - For a test-runner: "Update your agent memory as you discover test patterns, common failure modes, flaky tests, and testing best practices."
   - For an architect: "Update your agent memory as you discover codepaths, library locations, key architectural decisions, and component relationships."
   - For a documentation writer: "Update your agent memory as you discover documentation patterns, API structures, and terminology conventions."

   The memory instructions should be specific to what the agent would naturally learn while performing its core tasks.
`;
  }
});

// src/components/agents/new-agent-creation/wizard-steps/GenerateStep.tsx
function GenerateStep() {
  const {
    updateWizardData,
    goBack,
    goToStep,
    wizardData
  } = useWizard();
  const [prompt, setPrompt] = useState(wizardData.generationPrompt || "");
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);
  const [cursorOffset, setCursorOffset] = useState(prompt.length);
  const model = useMainLoopModel();
  const abortControllerRef = useRef(null);
  const handleCancelGeneration = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
      setIsGenerating(false);
      setError("Generation cancelled");
    }
  }, []);
  useKeybinding("confirm:no", handleCancelGeneration, {
    context: "Settings",
    isActive: isGenerating
  });
  const handleExternalEditor = useCallback(async () => {
    const result = await editPromptInEditor(prompt);
    if (result.content !== null) {
      setPrompt(result.content);
      setCursorOffset(result.content.length);
    }
  }, [prompt]);
  useKeybinding("chat:externalEditor", handleExternalEditor, {
    context: "Chat",
    isActive: !isGenerating
  });
  const handleGoBack = useCallback(() => {
    updateWizardData({
      generationPrompt: "",
      agentType: "",
      systemPrompt: "",
      whenToUse: "",
      generatedAgent: void 0,
      wasGenerated: false
    });
    setPrompt("");
    setError(null);
    goBack();
  }, [updateWizardData, goBack]);
  useKeybinding("confirm:no", handleGoBack, {
    context: "Settings",
    isActive: !isGenerating
  });
  const handleGenerate = async () => {
    const trimmedPrompt = prompt.trim();
    if (!trimmedPrompt) {
      setError("Please describe what the agent should do");
      return;
    }
    setError(null);
    setIsGenerating(true);
    updateWizardData({
      generationPrompt: trimmedPrompt,
      isGenerating: true
    });
    const controller = createAbortController();
    abortControllerRef.current = controller;
    try {
      const generated = await generateAgent(trimmedPrompt, model, [], controller.signal);
      updateWizardData({
        agentType: generated.identifier,
        whenToUse: generated.whenToUse,
        systemPrompt: generated.systemPrompt,
        generatedAgent: generated,
        isGenerating: false,
        wasGenerated: true
      });
      goToStep(6);
    } catch (err) {
      if (err instanceof APIUserAbortError) {
      } else if (err instanceof Error && !err.message.includes("No assistant message found")) {
        setError(err.message || "Failed to generate agent");
      }
      updateWizardData({
        isGenerating: false
      });
    } finally {
      setIsGenerating(false);
      abortControllerRef.current = null;
    }
  };
  const subtitle = "Describe what this agent should do and when it should be used (be comprehensive for best results)";
  if (isGenerating) {
    return /* @__PURE__ */ react_default.createElement(WizardDialogLayout, { subtitle, footerText: /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Settings", fallback: "Esc", description: "cancel" }) }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "row", alignItems: "center" }, /* @__PURE__ */ react_default.createElement(Spinner, null), /* @__PURE__ */ react_default.createElement(ThemedText, { color: "suggestion" }, " Generating agent from description...")));
  }
  return /* @__PURE__ */ react_default.createElement(WizardDialogLayout, { subtitle, footerText: /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:yes", context: "Confirmation", fallback: "Enter", description: "submit" }), /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "chat:externalEditor", context: "Chat", fallback: "ctrl+g", description: "open in editor" }), /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Settings", fallback: "Esc", description: "go back" })) }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, error && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, error)), /* @__PURE__ */ react_default.createElement(TextInput, { value: prompt, onChange: setPrompt, onSubmit: handleGenerate, placeholder: "e.g., Help me write unit tests for my code...", columns: 80, cursorOffset, onChangeCursorOffset: setCursorOffset, focus: true, showCursor: true })));
}
var init_GenerateStep = __esm({
  "src/components/agents/new-agent-creation/wizard-steps/GenerateStep.tsx"() {
    init_sdk();
    init_react();
    init_useMainLoopModel();
    init_ink();
    init_useKeybinding();
    init_abortController();
    init_promptEditor();
    init_ConfigurableShortcutHint();
    init_Byline();
    init_Spinner();
    init_TextInput();
    init_wizard();
    init_WizardDialogLayout();
    init_generateAgent();
  }
});

// src/components/agents/new-agent-creation/wizard-steps/LocationStep.tsx
function LocationStep() {
  const $ = c(11);
  const {
    goNext,
    updateWizardData,
    cancel
  } = useWizard();
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = {
      label: "Project (.claude/agents/)",
      value: "projectSettings"
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = [t0, {
      label: "Personal (~/.claude/agents/)",
      value: "userSettings"
    }];
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const locationOptions = t1;
  let t2;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "\u2191\u2193", action: "navigate" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "select" }), /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "cancel" }));
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] !== goNext || $[4] !== updateWizardData) {
    t3 = (value) => {
      updateWizardData({
        location: value
      });
      goNext();
    };
    $[3] = goNext;
    $[4] = updateWizardData;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  if ($[6] !== cancel) {
    t4 = () => cancel();
    $[6] = cancel;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  let t5;
  if ($[8] !== t3 || $[9] !== t4) {
    t5 = /* @__PURE__ */ react_default.createElement(WizardDialogLayout, { subtitle: "Choose location", footerText: t2 }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(Select, { key: "location-select", options: locationOptions, onChange: t3, onCancel: t4 })));
    $[8] = t3;
    $[9] = t4;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  return t5;
}
var init_LocationStep = __esm({
  "src/components/agents/new-agent-creation/wizard-steps/LocationStep.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_ConfigurableShortcutHint();
    init_select();
    init_Byline();
    init_KeyboardShortcutHint();
    init_wizard();
    init_WizardDialogLayout();
  }
});

// src/components/agents/new-agent-creation/wizard-steps/MemoryStep.tsx
function MemoryStep() {
  const $ = c(13);
  const {
    goNext,
    goBack,
    updateWizardData,
    wizardData
  } = useWizard();
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = {
      context: "Confirmation"
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  useKeybinding("confirm:no", goBack, t0);
  const isUserScope = wizardData.location === "userSettings";
  let t1;
  if ($[1] !== isUserScope) {
    t1 = isUserScope ? [{
      label: "User scope (~/.claude/agent-memory/) (Recommended)",
      value: "user"
    }, {
      label: "None (no persistent memory)",
      value: "none"
    }, {
      label: "Project scope (.claude/agent-memory/)",
      value: "project"
    }, {
      label: "Local scope (.claude/agent-memory-local/)",
      value: "local"
    }] : [{
      label: "Project scope (.claude/agent-memory/) (Recommended)",
      value: "project"
    }, {
      label: "None (no persistent memory)",
      value: "none"
    }, {
      label: "User scope (~/.claude/agent-memory/)",
      value: "user"
    }, {
      label: "Local scope (.claude/agent-memory-local/)",
      value: "local"
    }];
    $[1] = isUserScope;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const memoryOptions = t1;
  let t2;
  if ($[3] !== goNext || $[4] !== updateWizardData || $[5] !== wizardData.finalAgent || $[6] !== wizardData.systemPrompt) {
    t2 = (value) => {
      const memory = value === "none" ? void 0 : value;
      const agentType = wizardData.finalAgent?.agentType;
      updateWizardData({
        selectedMemory: memory,
        finalAgent: wizardData.finalAgent ? {
          ...wizardData.finalAgent,
          memory,
          getSystemPrompt: isAutoMemoryEnabled() && memory && agentType ? () => wizardData.systemPrompt + "\n\n" + loadAgentMemoryPrompt(agentType, memory) : () => wizardData.systemPrompt
        } : void 0
      });
      goNext();
    };
    $[3] = goNext;
    $[4] = updateWizardData;
    $[5] = wizardData.finalAgent;
    $[6] = wizardData.systemPrompt;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  const handleSelect = t2;
  let t3;
  if ($[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "\u2191\u2193", action: "navigate" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "select" }), /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "go back" }));
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  let t4;
  if ($[9] !== goBack || $[10] !== handleSelect || $[11] !== memoryOptions) {
    t4 = /* @__PURE__ */ react_default.createElement(WizardDialogLayout, { subtitle: "Configure agent memory", footerText: t3 }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(Select, { key: "memory-select", options: memoryOptions, onChange: handleSelect, onCancel: goBack })));
    $[9] = goBack;
    $[10] = handleSelect;
    $[11] = memoryOptions;
    $[12] = t4;
  } else {
    t4 = $[12];
  }
  return t4;
}
var init_MemoryStep = __esm({
  "src/components/agents/new-agent-creation/wizard-steps/MemoryStep.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_useKeybinding();
    init_paths();
    init_agentMemory();
    init_ConfigurableShortcutHint();
    init_select();
    init_Byline();
    init_KeyboardShortcutHint();
    init_wizard();
    init_WizardDialogLayout();
  }
});

// src/components/agents/new-agent-creation/wizard-steps/MethodStep.tsx
function MethodStep() {
  const $ = c(11);
  const {
    goNext,
    goBack,
    updateWizardData,
    goToStep
  } = useWizard();
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = [{
      label: "Generate with Claude (recommended)",
      value: "generate"
    }, {
      label: "Manual configuration",
      value: "manual"
    }];
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  const methodOptions = t0;
  let t1;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "\u2191\u2193", action: "navigate" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "select" }), /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "go back" }));
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== goNext || $[3] !== goToStep || $[4] !== updateWizardData) {
    t2 = (value) => {
      const method = value;
      updateWizardData({
        method,
        wasGenerated: method === "generate"
      });
      if (method === "generate") {
        goNext();
      } else {
        goToStep(3);
      }
    };
    $[2] = goNext;
    $[3] = goToStep;
    $[4] = updateWizardData;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[6] !== goBack) {
    t3 = () => goBack();
    $[6] = goBack;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  let t4;
  if ($[8] !== t2 || $[9] !== t3) {
    t4 = /* @__PURE__ */ react_default.createElement(WizardDialogLayout, { subtitle: "Creation method", footerText: t1 }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(Select, { key: "method-select", options: methodOptions, onChange: t2, onCancel: t3 })));
    $[8] = t2;
    $[9] = t3;
    $[10] = t4;
  } else {
    t4 = $[10];
  }
  return t4;
}
var init_MethodStep = __esm({
  "src/components/agents/new-agent-creation/wizard-steps/MethodStep.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_ConfigurableShortcutHint();
    init_select();
    init_Byline();
    init_KeyboardShortcutHint();
    init_wizard();
    init_WizardDialogLayout();
  }
});

// src/components/agents/new-agent-creation/wizard-steps/ModelStep.tsx
function ModelStep() {
  const $ = c(8);
  const {
    goNext,
    goBack,
    updateWizardData,
    wizardData
  } = useWizard();
  let t0;
  if ($[0] !== goNext || $[1] !== updateWizardData) {
    t0 = (model) => {
      updateWizardData({
        selectedModel: model
      });
      goNext();
    };
    $[0] = goNext;
    $[1] = updateWizardData;
    $[2] = t0;
  } else {
    t0 = $[2];
  }
  const handleComplete = t0;
  let t1;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "\u2191\u2193", action: "navigate" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "select" }), /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "go back" }));
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  let t2;
  if ($[4] !== goBack || $[5] !== handleComplete || $[6] !== wizardData.selectedModel) {
    t2 = /* @__PURE__ */ react_default.createElement(WizardDialogLayout, { subtitle: "Select model", footerText: t1 }, /* @__PURE__ */ react_default.createElement(ModelSelector, { initialModel: wizardData.selectedModel, onComplete: handleComplete, onCancel: goBack }));
    $[4] = goBack;
    $[5] = handleComplete;
    $[6] = wizardData.selectedModel;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
var init_ModelStep = __esm({
  "src/components/agents/new-agent-creation/wizard-steps/ModelStep.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ConfigurableShortcutHint();
    init_Byline();
    init_KeyboardShortcutHint();
    init_wizard();
    init_WizardDialogLayout();
    init_ModelSelector();
  }
});

// src/components/agents/new-agent-creation/wizard-steps/PromptStep.tsx
function PromptStep() {
  const $ = c(20);
  const {
    goNext,
    goBack,
    updateWizardData,
    wizardData
  } = useWizard();
  const [systemPrompt, setSystemPrompt] = useState(wizardData.systemPrompt || "");
  const [cursorOffset, setCursorOffset] = useState(systemPrompt.length);
  const [error, setError] = useState(null);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = {
      context: "Settings"
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  useKeybinding("confirm:no", goBack, t0);
  let t1;
  if ($[1] !== systemPrompt) {
    t1 = async () => {
      const result = await editPromptInEditor(systemPrompt);
      if (result.content !== null) {
        setSystemPrompt(result.content);
        setCursorOffset(result.content.length);
      }
    };
    $[1] = systemPrompt;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const handleExternalEditor = t1;
  let t2;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = {
      context: "Chat"
    };
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  useKeybinding("chat:externalEditor", handleExternalEditor, t2);
  let t3;
  if ($[4] !== goNext || $[5] !== systemPrompt || $[6] !== updateWizardData) {
    t3 = () => {
      const trimmedPrompt = systemPrompt.trim();
      if (!trimmedPrompt) {
        setError("System prompt is required");
        return;
      }
      setError(null);
      updateWizardData({
        systemPrompt: trimmedPrompt
      });
      goNext();
    };
    $[4] = goNext;
    $[5] = systemPrompt;
    $[6] = updateWizardData;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  const handleSubmit = t3;
  let t4;
  if ($[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Type", action: "enter text" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "continue" }), /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "chat:externalEditor", context: "Chat", fallback: "ctrl+g", description: "open in editor" }), /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Settings", fallback: "Esc", description: "go back" }));
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  let t5;
  let t6;
  if ($[9] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "Enter the system prompt for your agent:");
    t6 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Be comprehensive for best results");
    $[9] = t5;
    $[10] = t6;
  } else {
    t5 = $[9];
    t6 = $[10];
  }
  let t7;
  if ($[11] !== cursorOffset || $[12] !== handleSubmit || $[13] !== systemPrompt) {
    t7 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(TextInput, { value: systemPrompt, onChange: setSystemPrompt, onSubmit: handleSubmit, placeholder: "You are a helpful code reviewer who...", columns: 80, cursorOffset, onChangeCursorOffset: setCursorOffset, focus: true, showCursor: true }));
    $[11] = cursorOffset;
    $[12] = handleSubmit;
    $[13] = systemPrompt;
    $[14] = t7;
  } else {
    t7 = $[14];
  }
  let t8;
  if ($[15] !== error) {
    t8 = error && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, error));
    $[15] = error;
    $[16] = t8;
  } else {
    t8 = $[16];
  }
  let t9;
  if ($[17] !== t7 || $[18] !== t8) {
    t9 = /* @__PURE__ */ react_default.createElement(WizardDialogLayout, { subtitle: "System prompt", footerText: t4 }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, t5, t6, t7, t8));
    $[17] = t7;
    $[18] = t8;
    $[19] = t9;
  } else {
    t9 = $[19];
  }
  return t9;
}
var init_PromptStep = __esm({
  "src/components/agents/new-agent-creation/wizard-steps/PromptStep.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_useKeybinding();
    init_promptEditor();
    init_ConfigurableShortcutHint();
    init_Byline();
    init_KeyboardShortcutHint();
    init_TextInput();
    init_wizard();
    init_WizardDialogLayout();
  }
});

// src/components/agents/new-agent-creation/wizard-steps/ToolsStep.tsx
function ToolsStep(t0) {
  const $ = c(9);
  const {
    tools
  } = t0;
  const {
    goNext,
    goBack,
    updateWizardData,
    wizardData
  } = useWizard();
  let t1;
  if ($[0] !== goNext || $[1] !== updateWizardData) {
    t1 = (selectedTools) => {
      updateWizardData({
        selectedTools
      });
      goNext();
    };
    $[0] = goNext;
    $[1] = updateWizardData;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const handleComplete = t1;
  const initialTools = wizardData.selectedTools;
  let t2;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "toggle selection" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "\u2191\u2193", action: "navigate" }), /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "go back" }));
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== goBack || $[5] !== handleComplete || $[6] !== initialTools || $[7] !== tools) {
    t3 = /* @__PURE__ */ react_default.createElement(WizardDialogLayout, { subtitle: "Select tools", footerText: t2 }, /* @__PURE__ */ react_default.createElement(ToolSelector, { tools, initialTools, onComplete: handleComplete, onCancel: goBack }));
    $[4] = goBack;
    $[5] = handleComplete;
    $[6] = initialTools;
    $[7] = tools;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  return t3;
}
var init_ToolsStep = __esm({
  "src/components/agents/new-agent-creation/wizard-steps/ToolsStep.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ConfigurableShortcutHint();
    init_Byline();
    init_KeyboardShortcutHint();
    init_wizard();
    init_WizardDialogLayout();
    init_ToolSelector();
  }
});

// src/components/agents/new-agent-creation/wizard-steps/TypeStep.tsx
function TypeStep(_props) {
  const $ = c(15);
  const {
    goNext,
    goBack,
    updateWizardData,
    wizardData
  } = useWizard();
  const [agentType, setAgentType] = useState(wizardData.agentType || "");
  const [error, setError] = useState(null);
  const [cursorOffset, setCursorOffset] = useState(agentType.length);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = {
      context: "Settings"
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  useKeybinding("confirm:no", goBack, t0);
  let t1;
  if ($[1] !== goNext || $[2] !== updateWizardData) {
    t1 = (value) => {
      const trimmedValue = value.trim();
      const validationError = validateAgentType(trimmedValue);
      if (validationError) {
        setError(validationError);
        return;
      }
      setError(null);
      updateWizardData({
        agentType: trimmedValue
      });
      goNext();
    };
    $[1] = goNext;
    $[2] = updateWizardData;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  const handleSubmit = t1;
  let t2;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Type", action: "enter text" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "continue" }), /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Settings", fallback: "Esc", description: "go back" }));
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  let t3;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "Enter a unique identifier for your agent:");
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  if ($[6] !== agentType || $[7] !== cursorOffset || $[8] !== handleSubmit) {
    t4 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(TextInput, { value: agentType, onChange: setAgentType, onSubmit: handleSubmit, placeholder: "e.g., test-runner, tech-lead, etc", columns: 60, cursorOffset, onChangeCursorOffset: setCursorOffset, focus: true, showCursor: true }));
    $[6] = agentType;
    $[7] = cursorOffset;
    $[8] = handleSubmit;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  let t5;
  if ($[10] !== error) {
    t5 = error && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, error));
    $[10] = error;
    $[11] = t5;
  } else {
    t5 = $[11];
  }
  let t6;
  if ($[12] !== t4 || $[13] !== t5) {
    t6 = /* @__PURE__ */ react_default.createElement(WizardDialogLayout, { subtitle: "Agent type (identifier)", footerText: t2 }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, t3, t4, t5));
    $[12] = t4;
    $[13] = t5;
    $[14] = t6;
  } else {
    t6 = $[14];
  }
  return t6;
}
var init_TypeStep = __esm({
  "src/components/agents/new-agent-creation/wizard-steps/TypeStep.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_useKeybinding();
    init_ConfigurableShortcutHint();
    init_Byline();
    init_KeyboardShortcutHint();
    init_TextInput();
    init_wizard();
    init_WizardDialogLayout();
    init_validateAgent();
  }
});

// src/components/agents/new-agent-creation/CreateAgentWizard.tsx
function CreateAgentWizard(t0) {
  const $ = c(17);
  const {
    tools,
    existingAgents,
    onComplete,
    onCancel
  } = t0;
  let t1;
  if ($[0] !== existingAgents) {
    t1 = () => /* @__PURE__ */ react_default.createElement(TypeStep, { existingAgents });
    $[0] = existingAgents;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== tools) {
    t2 = () => /* @__PURE__ */ react_default.createElement(ToolsStep, { tools });
    $[2] = tools;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = isAutoMemoryEnabled() ? [MemoryStep] : [];
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] !== existingAgents || $[6] !== onComplete || $[7] !== tools) {
    t4 = () => /* @__PURE__ */ react_default.createElement(ConfirmStepWrapper, { tools, existingAgents, onComplete });
    $[5] = existingAgents;
    $[6] = onComplete;
    $[7] = tools;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  let t5;
  if ($[9] !== t1 || $[10] !== t2 || $[11] !== t4) {
    t5 = [LocationStep, MethodStep, GenerateStep, t1, PromptStep, DescriptionStep, t2, ModelStep, ColorStep, ...t3, t4];
    $[9] = t1;
    $[10] = t2;
    $[11] = t4;
    $[12] = t5;
  } else {
    t5 = $[12];
  }
  const steps = t5;
  let t6;
  if ($[13] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = {};
    $[13] = t6;
  } else {
    t6 = $[13];
  }
  let t7;
  if ($[14] !== onCancel || $[15] !== steps) {
    t7 = /* @__PURE__ */ react_default.createElement(WizardProvider, { steps, initialData: t6, onComplete: _temp13, onCancel, title: "Create new agent", showStepCounter: false });
    $[14] = onCancel;
    $[15] = steps;
    $[16] = t7;
  } else {
    t7 = $[16];
  }
  return t7;
}
function _temp13() {
}
var init_CreateAgentWizard = __esm({
  "src/components/agents/new-agent-creation/CreateAgentWizard.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_paths();
    init_wizard();
    init_ColorStep();
    init_ConfirmStepWrapper();
    init_DescriptionStep();
    init_GenerateStep();
    init_LocationStep();
    init_MemoryStep();
    init_MethodStep();
    init_ModelStep();
    init_PromptStep();
    init_ToolsStep();
    init_TypeStep();
  }
});

// src/components/agents/AgentsMenu.tsx
function AgentsMenu(t0) {
  const $ = c(157);
  const {
    tools,
    onExit
  } = t0;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = {
      mode: "list-agents",
      source: "all"
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const [modeState, setModeState] = useState(t1);
  const agentDefinitions = useAppState(_temp14);
  const mcpTools = useAppState(_temp26);
  const toolPermissionContext = useAppState(_temp35);
  const setAppState = useSetAppState();
  const {
    allAgents,
    activeAgents: agents
  } = agentDefinitions;
  let t2;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = [];
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const [changes, setChanges] = useState(t2);
  const mergedTools = useMergedTools(tools, mcpTools, toolPermissionContext);
  useExitOnCtrlCDWithKeybindings();
  let t3;
  if ($[2] !== allAgents) {
    t3 = allAgents.filter(_temp43);
    $[2] = allAgents;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] !== allAgents) {
    t4 = allAgents.filter(_temp53);
    $[4] = allAgents;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  let t5;
  if ($[6] !== allAgents) {
    t5 = allAgents.filter(_temp63);
    $[6] = allAgents;
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  let t6;
  if ($[8] !== allAgents) {
    t6 = allAgents.filter(_temp73);
    $[8] = allAgents;
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  let t7;
  if ($[10] !== allAgents) {
    t7 = allAgents.filter(_temp83);
    $[10] = allAgents;
    $[11] = t7;
  } else {
    t7 = $[11];
  }
  let t8;
  if ($[12] !== allAgents) {
    t8 = allAgents.filter(_temp93);
    $[12] = allAgents;
    $[13] = t8;
  } else {
    t8 = $[13];
  }
  let t9;
  if ($[14] !== allAgents) {
    t9 = allAgents.filter(_temp02);
    $[14] = allAgents;
    $[15] = t9;
  } else {
    t9 = $[15];
  }
  let t10;
  if ($[16] !== allAgents || $[17] !== t3 || $[18] !== t4 || $[19] !== t5 || $[20] !== t6 || $[21] !== t7 || $[22] !== t8 || $[23] !== t9) {
    t10 = {
      "built-in": t3,
      userSettings: t4,
      projectSettings: t5,
      policySettings: t6,
      localSettings: t7,
      flagSettings: t8,
      plugin: t9,
      all: allAgents
    };
    $[16] = allAgents;
    $[17] = t3;
    $[18] = t4;
    $[19] = t5;
    $[20] = t6;
    $[21] = t7;
    $[22] = t8;
    $[23] = t9;
    $[24] = t10;
  } else {
    t10 = $[24];
  }
  const agentsBySource = t10;
  let t11;
  if ($[25] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t11 = (message) => {
      setChanges((prev) => [...prev, message]);
      setModeState({
        mode: "list-agents",
        source: "all"
      });
    };
    $[25] = t11;
  } else {
    t11 = $[25];
  }
  const handleAgentCreated = t11;
  let t12;
  if ($[26] !== setAppState) {
    t12 = async (agent) => {
      ;
      try {
        await deleteAgentFromFile(agent);
        setAppState((state) => {
          const allAgents_0 = state.agentDefinitions.allAgents.filter((a_6) => !(a_6.agentType === agent.agentType && a_6.source === agent.source));
          return {
            ...state,
            agentDefinitions: {
              ...state.agentDefinitions,
              allAgents: allAgents_0,
              activeAgents: getActiveAgentsFromList(allAgents_0)
            }
          };
        });
        setChanges((prev_0) => [...prev_0, `Deleted agent: ${source_default.bold(agent.agentType)}`]);
        setModeState({
          mode: "list-agents",
          source: "all"
        });
      } catch (t13) {
        const error = t13;
        logError(toError(error));
      }
    };
    $[26] = setAppState;
    $[27] = t12;
  } else {
    t12 = $[27];
  }
  const handleAgentDeleted = t12;
  switch (modeState.mode) {
    case "list-agents": {
      let t13;
      if ($[28] !== agentsBySource || $[29] !== modeState.source) {
        t13 = modeState.source === "all" ? [...agentsBySource["built-in"], ...agentsBySource.userSettings, ...agentsBySource.projectSettings, ...agentsBySource.localSettings, ...agentsBySource.policySettings, ...agentsBySource.flagSettings, ...agentsBySource.plugin] : agentsBySource[modeState.source];
        $[28] = agentsBySource;
        $[29] = modeState.source;
        $[30] = t13;
      } else {
        t13 = $[30];
      }
      const agentsToShow = t13;
      let t14;
      if ($[31] !== agents || $[32] !== agentsToShow) {
        t14 = resolveAgentOverrides(agentsToShow, agents);
        $[31] = agents;
        $[32] = agentsToShow;
        $[33] = t14;
      } else {
        t14 = $[33];
      }
      const allResolved = t14;
      const resolvedAgents = allResolved;
      let t15;
      if ($[34] !== changes || $[35] !== onExit) {
        t15 = () => {
          const exitMessage = changes.length > 0 ? `Agent changes:
${changes.join("\n")}` : void 0;
          onExit(exitMessage ?? "Agents dialog dismissed", {
            display: changes.length === 0 ? "system" : void 0
          });
        };
        $[34] = changes;
        $[35] = onExit;
        $[36] = t15;
      } else {
        t15 = $[36];
      }
      let t16;
      if ($[37] !== modeState) {
        t16 = (agent_0) => setModeState({
          mode: "agent-menu",
          agent: agent_0,
          previousMode: modeState
        });
        $[37] = modeState;
        $[38] = t16;
      } else {
        t16 = $[38];
      }
      let t17;
      if ($[39] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t17 = () => setModeState({
          mode: "create-agent"
        });
        $[39] = t17;
      } else {
        t17 = $[39];
      }
      let t18;
      if ($[40] !== changes || $[41] !== modeState.source || $[42] !== resolvedAgents || $[43] !== t15 || $[44] !== t16) {
        t18 = /* @__PURE__ */ createElement(AgentsList, { source: modeState.source, agents: resolvedAgents, onBack: t15, onSelect: t16, onCreateNew: t17, changes });
        $[40] = changes;
        $[41] = modeState.source;
        $[42] = resolvedAgents;
        $[43] = t15;
        $[44] = t16;
        $[45] = t18;
      } else {
        t18 = $[45];
      }
      let t19;
      if ($[46] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t19 = /* @__PURE__ */ createElement(AgentNavigationFooter, null);
        $[46] = t19;
      } else {
        t19 = $[46];
      }
      let t20;
      if ($[47] !== t18) {
        t20 = /* @__PURE__ */ createElement(Fragment, null, t18, t19);
        $[47] = t18;
        $[48] = t20;
      } else {
        t20 = $[48];
      }
      return t20;
    }
    case "create-agent": {
      let t13;
      if ($[49] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t13 = () => setModeState({
          mode: "list-agents",
          source: "all"
        });
        $[49] = t13;
      } else {
        t13 = $[49];
      }
      let t14;
      if ($[50] !== agents || $[51] !== mergedTools) {
        t14 = /* @__PURE__ */ createElement(CreateAgentWizard, { tools: mergedTools, existingAgents: agents, onComplete: handleAgentCreated, onCancel: t13 });
        $[50] = agents;
        $[51] = mergedTools;
        $[52] = t14;
      } else {
        t14 = $[52];
      }
      return t14;
    }
    case "agent-menu": {
      let t13;
      if ($[53] !== allAgents || $[54] !== modeState.agent.agentType || $[55] !== modeState.agent.source) {
        let t142;
        if ($[57] !== modeState.agent.agentType || $[58] !== modeState.agent.source) {
          t142 = (a_9) => a_9.agentType === modeState.agent.agentType && a_9.source === modeState.agent.source;
          $[57] = modeState.agent.agentType;
          $[58] = modeState.agent.source;
          $[59] = t142;
        } else {
          t142 = $[59];
        }
        t13 = allAgents.find(t142);
        $[53] = allAgents;
        $[54] = modeState.agent.agentType;
        $[55] = modeState.agent.source;
        $[56] = t13;
      } else {
        t13 = $[56];
      }
      const freshAgent_1 = t13;
      const agentToUse = freshAgent_1 || modeState.agent;
      const isEditable = agentToUse.source !== "built-in" && agentToUse.source !== "plugin" && agentToUse.source !== "flagSettings";
      let t14;
      if ($[60] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t14 = {
          label: "View agent",
          value: "view"
        };
        $[60] = t14;
      } else {
        t14 = $[60];
      }
      let t15;
      if ($[61] !== isEditable) {
        t15 = isEditable ? [{
          label: "Edit agent",
          value: "edit"
        }, {
          label: "Delete agent",
          value: "delete"
        }] : [];
        $[61] = isEditable;
        $[62] = t15;
      } else {
        t15 = $[62];
      }
      let t16;
      if ($[63] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t16 = {
          label: "Back",
          value: "back"
        };
        $[63] = t16;
      } else {
        t16 = $[63];
      }
      let t17;
      if ($[64] !== t15) {
        t17 = [t14, ...t15, t16];
        $[64] = t15;
        $[65] = t17;
      } else {
        t17 = $[65];
      }
      const menuItems = t17;
      let t18;
      if ($[66] !== agentToUse || $[67] !== modeState) {
        t18 = (value_0) => {
          bb129: switch (value_0) {
            case "view": {
              setModeState({
                mode: "view-agent",
                agent: agentToUse,
                previousMode: modeState.previousMode
              });
              break bb129;
            }
            case "edit": {
              setModeState({
                mode: "edit-agent",
                agent: agentToUse,
                previousMode: modeState
              });
              break bb129;
            }
            case "delete": {
              setModeState({
                mode: "delete-confirm",
                agent: agentToUse,
                previousMode: modeState
              });
              break bb129;
            }
            case "back": {
              setModeState(modeState.previousMode);
            }
          }
        };
        $[66] = agentToUse;
        $[67] = modeState;
        $[68] = t18;
      } else {
        t18 = $[68];
      }
      const handleMenuSelect = t18;
      let t19;
      if ($[69] !== modeState.previousMode) {
        t19 = () => setModeState(modeState.previousMode);
        $[69] = modeState.previousMode;
        $[70] = t19;
      } else {
        t19 = $[70];
      }
      let t20;
      if ($[71] !== modeState.previousMode) {
        t20 = () => setModeState(modeState.previousMode);
        $[71] = modeState.previousMode;
        $[72] = t20;
      } else {
        t20 = $[72];
      }
      let t21;
      if ($[73] !== handleMenuSelect || $[74] !== menuItems || $[75] !== t20) {
        t21 = /* @__PURE__ */ createElement(Select, { options: menuItems, onChange: handleMenuSelect, onCancel: t20 });
        $[73] = handleMenuSelect;
        $[74] = menuItems;
        $[75] = t20;
        $[76] = t21;
      } else {
        t21 = $[76];
      }
      let t22;
      if ($[77] !== changes) {
        t22 = changes.length > 0 && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, changes[changes.length - 1]));
        $[77] = changes;
        $[78] = t22;
      } else {
        t22 = $[78];
      }
      let t23;
      if ($[79] !== t21 || $[80] !== t22) {
        t23 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, t21, t22);
        $[79] = t21;
        $[80] = t22;
        $[81] = t23;
      } else {
        t23 = $[81];
      }
      let t24;
      if ($[82] !== modeState.agent.agentType || $[83] !== t19 || $[84] !== t23) {
        t24 = /* @__PURE__ */ createElement(Dialog, { title: modeState.agent.agentType, onCancel: t19, hideInputGuide: true }, t23);
        $[82] = modeState.agent.agentType;
        $[83] = t19;
        $[84] = t23;
        $[85] = t24;
      } else {
        t24 = $[85];
      }
      let t25;
      if ($[86] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t25 = /* @__PURE__ */ createElement(AgentNavigationFooter, null);
        $[86] = t25;
      } else {
        t25 = $[86];
      }
      let t26;
      if ($[87] !== t24) {
        t26 = /* @__PURE__ */ createElement(Fragment, null, t24, t25);
        $[87] = t24;
        $[88] = t26;
      } else {
        t26 = $[88];
      }
      return t26;
    }
    case "view-agent": {
      let t13;
      if ($[89] !== allAgents || $[90] !== modeState.agent) {
        let t142;
        if ($[92] !== modeState.agent) {
          t142 = (a_8) => a_8.agentType === modeState.agent.agentType && a_8.source === modeState.agent.source;
          $[92] = modeState.agent;
          $[93] = t142;
        } else {
          t142 = $[93];
        }
        t13 = allAgents.find(t142);
        $[89] = allAgents;
        $[90] = modeState.agent;
        $[91] = t13;
      } else {
        t13 = $[91];
      }
      const freshAgent_0 = t13;
      const agentToDisplay = freshAgent_0 || modeState.agent;
      let t14;
      if ($[94] !== agentToDisplay || $[95] !== modeState.previousMode) {
        t14 = () => setModeState({
          mode: "agent-menu",
          agent: agentToDisplay,
          previousMode: modeState.previousMode
        });
        $[94] = agentToDisplay;
        $[95] = modeState.previousMode;
        $[96] = t14;
      } else {
        t14 = $[96];
      }
      let t15;
      if ($[97] !== agentToDisplay || $[98] !== modeState.previousMode) {
        t15 = () => setModeState({
          mode: "agent-menu",
          agent: agentToDisplay,
          previousMode: modeState.previousMode
        });
        $[97] = agentToDisplay;
        $[98] = modeState.previousMode;
        $[99] = t15;
      } else {
        t15 = $[99];
      }
      let t16;
      if ($[100] !== agentToDisplay || $[101] !== allAgents || $[102] !== mergedTools || $[103] !== t15) {
        t16 = /* @__PURE__ */ createElement(AgentDetail, { agent: agentToDisplay, tools: mergedTools, allAgents, onBack: t15 });
        $[100] = agentToDisplay;
        $[101] = allAgents;
        $[102] = mergedTools;
        $[103] = t15;
        $[104] = t16;
      } else {
        t16 = $[104];
      }
      let t17;
      if ($[105] !== agentToDisplay.agentType || $[106] !== t14 || $[107] !== t16) {
        t17 = /* @__PURE__ */ createElement(Dialog, { title: agentToDisplay.agentType, onCancel: t14, hideInputGuide: true }, t16);
        $[105] = agentToDisplay.agentType;
        $[106] = t14;
        $[107] = t16;
        $[108] = t17;
      } else {
        t17 = $[108];
      }
      let t18;
      if ($[109] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t18 = /* @__PURE__ */ createElement(AgentNavigationFooter, { instructions: "Press Enter or Esc to go back" });
        $[109] = t18;
      } else {
        t18 = $[109];
      }
      let t19;
      if ($[110] !== t17) {
        t19 = /* @__PURE__ */ createElement(Fragment, null, t17, t18);
        $[110] = t17;
        $[111] = t19;
      } else {
        t19 = $[111];
      }
      return t19;
    }
    case "delete-confirm": {
      let t13;
      if ($[112] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t13 = [{
          label: "Yes, delete",
          value: "yes"
        }, {
          label: "No, cancel",
          value: "no"
        }];
        $[112] = t13;
      } else {
        t13 = $[112];
      }
      const deleteOptions = t13;
      let t14;
      if ($[113] !== modeState) {
        t14 = () => {
          if ("previousMode" in modeState) {
            setModeState(modeState.previousMode);
          }
        };
        $[113] = modeState;
        $[114] = t14;
      } else {
        t14 = $[114];
      }
      let t15;
      if ($[115] !== modeState.agent.agentType) {
        t15 = /* @__PURE__ */ createElement(ThemedText, null, "Are you sure you want to delete the agent", " ", /* @__PURE__ */ createElement(ThemedText, { bold: true }, modeState.agent.agentType), "?");
        $[115] = modeState.agent.agentType;
        $[116] = t15;
      } else {
        t15 = $[116];
      }
      let t16;
      if ($[117] !== modeState.agent.source) {
        t16 = /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Source: ", modeState.agent.source));
        $[117] = modeState.agent.source;
        $[118] = t16;
      } else {
        t16 = $[118];
      }
      let t17;
      if ($[119] !== handleAgentDeleted || $[120] !== modeState) {
        t17 = (value) => {
          if (value === "yes") {
            handleAgentDeleted(modeState.agent);
          } else {
            if ("previousMode" in modeState) {
              setModeState(modeState.previousMode);
            }
          }
        };
        $[119] = handleAgentDeleted;
        $[120] = modeState;
        $[121] = t17;
      } else {
        t17 = $[121];
      }
      let t18;
      if ($[122] !== modeState) {
        t18 = () => {
          if ("previousMode" in modeState) {
            setModeState(modeState.previousMode);
          }
        };
        $[122] = modeState;
        $[123] = t18;
      } else {
        t18 = $[123];
      }
      let t19;
      if ($[124] !== t17 || $[125] !== t18) {
        t19 = /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(Select, { options: deleteOptions, onChange: t17, onCancel: t18 }));
        $[124] = t17;
        $[125] = t18;
        $[126] = t19;
      } else {
        t19 = $[126];
      }
      let t20;
      if ($[127] !== t14 || $[128] !== t15 || $[129] !== t16 || $[130] !== t19) {
        t20 = /* @__PURE__ */ createElement(Dialog, { title: "Delete agent", onCancel: t14, color: "error" }, t15, t16, t19);
        $[127] = t14;
        $[128] = t15;
        $[129] = t16;
        $[130] = t19;
        $[131] = t20;
      } else {
        t20 = $[131];
      }
      let t21;
      if ($[132] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t21 = /* @__PURE__ */ createElement(AgentNavigationFooter, { instructions: "Press \u2191\u2193 to navigate, Enter to select, Esc to cancel" });
        $[132] = t21;
      } else {
        t21 = $[132];
      }
      let t22;
      if ($[133] !== t20) {
        t22 = /* @__PURE__ */ createElement(Fragment, null, t20, t21);
        $[133] = t20;
        $[134] = t22;
      } else {
        t22 = $[134];
      }
      return t22;
    }
    case "edit-agent": {
      let t13;
      if ($[135] !== allAgents || $[136] !== modeState.agent) {
        let t142;
        if ($[138] !== modeState.agent) {
          t142 = (a_7) => a_7.agentType === modeState.agent.agentType && a_7.source === modeState.agent.source;
          $[138] = modeState.agent;
          $[139] = t142;
        } else {
          t142 = $[139];
        }
        t13 = allAgents.find(t142);
        $[135] = allAgents;
        $[136] = modeState.agent;
        $[137] = t13;
      } else {
        t13 = $[137];
      }
      const freshAgent = t13;
      const agentToEdit = freshAgent || modeState.agent;
      const t14 = `Edit agent: ${agentToEdit.agentType}`;
      let t15;
      if ($[140] !== modeState.previousMode) {
        t15 = () => setModeState(modeState.previousMode);
        $[140] = modeState.previousMode;
        $[141] = t15;
      } else {
        t15 = $[141];
      }
      let t16;
      let t17;
      if ($[142] !== modeState.previousMode) {
        t16 = (message_0) => {
          handleAgentCreated(message_0);
          setModeState(modeState.previousMode);
        };
        t17 = () => setModeState(modeState.previousMode);
        $[142] = modeState.previousMode;
        $[143] = t16;
        $[144] = t17;
      } else {
        t16 = $[143];
        t17 = $[144];
      }
      let t18;
      if ($[145] !== agentToEdit || $[146] !== mergedTools || $[147] !== t16 || $[148] !== t17) {
        t18 = /* @__PURE__ */ createElement(AgentEditor, { agent: agentToEdit, tools: mergedTools, onSaved: t16, onBack: t17 });
        $[145] = agentToEdit;
        $[146] = mergedTools;
        $[147] = t16;
        $[148] = t17;
        $[149] = t18;
      } else {
        t18 = $[149];
      }
      let t19;
      if ($[150] !== t14 || $[151] !== t15 || $[152] !== t18) {
        t19 = /* @__PURE__ */ createElement(Dialog, { title: t14, onCancel: t15, hideInputGuide: true }, t18);
        $[150] = t14;
        $[151] = t15;
        $[152] = t18;
        $[153] = t19;
      } else {
        t19 = $[153];
      }
      let t20;
      if ($[154] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t20 = /* @__PURE__ */ createElement(AgentNavigationFooter, null);
        $[154] = t20;
      } else {
        t20 = $[154];
      }
      let t21;
      if ($[155] !== t19) {
        t21 = /* @__PURE__ */ createElement(Fragment, null, t19, t20);
        $[155] = t19;
        $[156] = t21;
      } else {
        t21 = $[156];
      }
      return t21;
    }
    default: {
      return null;
    }
  }
}
function _temp02(a_5) {
  return a_5.source === "plugin";
}
function _temp93(a_4) {
  return a_4.source === "flagSettings";
}
function _temp83(a_3) {
  return a_3.source === "localSettings";
}
function _temp73(a_2) {
  return a_2.source === "policySettings";
}
function _temp63(a_1) {
  return a_1.source === "projectSettings";
}
function _temp53(a_0) {
  return a_0.source === "userSettings";
}
function _temp43(a) {
  return a.source === "built-in";
}
function _temp35(s_1) {
  return s_1.toolPermissionContext;
}
function _temp26(s_0) {
  return s_0.mcp.tools;
}
function _temp14(s) {
  return s.agentDefinitions;
}
var init_AgentsMenu = __esm({
  "src/components/agents/AgentsMenu.tsx"() {
    init_react_compiler_runtime();
    init_source();
    init_react();
    init_react();
    init_useExitOnCtrlCDWithKeybindings();
    init_useMergedTools();
    init_ink();
    init_AppState();
    init_agentDisplay();
    init_loadAgentsDir();
    init_errors();
    init_log();
    init_select();
    init_Dialog();
    init_AgentDetail();
    init_AgentEditor();
    init_AgentNavigationFooter();
    init_AgentsList();
    init_agentFileUtils();
    init_CreateAgentWizard();
  }
});

// src/commands/agents/agents.tsx
async function call(onDone, context) {
  const appState = context.getAppState();
  const permissionContext = appState.toolPermissionContext;
  const tools = getTools(permissionContext);
  return /* @__PURE__ */ createElement(AgentsMenu, { tools, onExit: onDone });
}
var init_agents = __esm({
  "src/commands/agents/agents.tsx"() {
    init_react();
    init_AgentsMenu();
    init_tools();
  }
});
init_agents();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvYWdlbnRzL3R5cGVzLnRzIiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL2FnZW50cy9hZ2VudEZpbGVVdGlscy50cyIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9hZ2VudHMvQWdlbnREZXRhaWwudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL2FnZW50cy9Db2xvclBpY2tlci50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvYWdlbnRzL01vZGVsU2VsZWN0b3IudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL2FnZW50cy9Ub29sU2VsZWN0b3IudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL2FnZW50cy91dGlscy50cyIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9hZ2VudHMvQWdlbnRFZGl0b3IudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL2FnZW50cy9BZ2VudE5hdmlnYXRpb25Gb290ZXIudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL2FnZW50cy9BZ2VudHNMaXN0LnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy93aXphcmQvV2l6YXJkUHJvdmlkZXIudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL3dpemFyZC91c2VXaXphcmQudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvd2l6YXJkL1dpemFyZE5hdmlnYXRpb25Gb290ZXIudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL3dpemFyZC9XaXphcmREaWFsb2dMYXlvdXQudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL3dpemFyZC9pbmRleC50cyIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9hZ2VudHMvbmV3LWFnZW50LWNyZWF0aW9uL3dpemFyZC1zdGVwcy9Db2xvclN0ZXAudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL2FnZW50cy92YWxpZGF0ZUFnZW50LnRzIiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL2FnZW50cy9uZXctYWdlbnQtY3JlYXRpb24vd2l6YXJkLXN0ZXBzL0NvbmZpcm1TdGVwLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9hZ2VudHMvbmV3LWFnZW50LWNyZWF0aW9uL3dpemFyZC1zdGVwcy9Db25maXJtU3RlcFdyYXBwZXIudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL2FnZW50cy9uZXctYWdlbnQtY3JlYXRpb24vd2l6YXJkLXN0ZXBzL0Rlc2NyaXB0aW9uU3RlcC50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvYWdlbnRzL2dlbmVyYXRlQWdlbnQudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvYWdlbnRzL25ldy1hZ2VudC1jcmVhdGlvbi93aXphcmQtc3RlcHMvR2VuZXJhdGVTdGVwLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9hZ2VudHMvbmV3LWFnZW50LWNyZWF0aW9uL3dpemFyZC1zdGVwcy9Mb2NhdGlvblN0ZXAudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL2FnZW50cy9uZXctYWdlbnQtY3JlYXRpb24vd2l6YXJkLXN0ZXBzL01lbW9yeVN0ZXAudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL2FnZW50cy9uZXctYWdlbnQtY3JlYXRpb24vd2l6YXJkLXN0ZXBzL01ldGhvZFN0ZXAudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL2FnZW50cy9uZXctYWdlbnQtY3JlYXRpb24vd2l6YXJkLXN0ZXBzL01vZGVsU3RlcC50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvYWdlbnRzL25ldy1hZ2VudC1jcmVhdGlvbi93aXphcmQtc3RlcHMvUHJvbXB0U3RlcC50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvYWdlbnRzL25ldy1hZ2VudC1jcmVhdGlvbi93aXphcmQtc3RlcHMvVG9vbHNTdGVwLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9hZ2VudHMvbmV3LWFnZW50LWNyZWF0aW9uL3dpemFyZC1zdGVwcy9UeXBlU3RlcC50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvYWdlbnRzL25ldy1hZ2VudC1jcmVhdGlvbi9DcmVhdGVBZ2VudFdpemFyZC50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvYWdlbnRzL0FnZW50c01lbnUudHN4IiwgIi4uLy4uL3NyYy9jb21tYW5kcy9hZ2VudHMvYWdlbnRzLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHR5cGUgeyBTZXR0aW5nU291cmNlIH0gZnJvbSAnc3JjL3V0aWxzL3NldHRpbmdzL2NvbnN0YW50cy5qcydcbmltcG9ydCB0eXBlIHsgQWdlbnREZWZpbml0aW9uIH0gZnJvbSAnLi4vLi4vdG9vbHMvQWdlbnRUb29sL2xvYWRBZ2VudHNEaXIuanMnXG5cbmV4cG9ydCBjb25zdCBBR0VOVF9QQVRIUyA9IHtcbiAgRk9MREVSX05BTUU6ICcuY2xhdWRlJyxcbiAgQUdFTlRTX0RJUjogJ2FnZW50cycsXG59IGFzIGNvbnN0XG5cbi8vIEJhc2UgdHlwZXMgZm9yIGNvbW1vbiBwYXR0ZXJuc1xudHlwZSBXaXRoUHJldmlvdXNNb2RlID0geyBwcmV2aW91c01vZGU6IE1vZGVTdGF0ZSB9XG50eXBlIFdpdGhBZ2VudCA9IHsgYWdlbnQ6IEFnZW50RGVmaW5pdGlvbiB9XG5cbi8vIFNpbXBsaWZpZWQgc3RhdGUgdHlwZSB1c2luZyBpbnRlcnNlY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIE1vZGVTdGF0ZSA9XG4gIHwgeyBtb2RlOiAnbWFpbi1tZW51JyB9XG4gIHwgeyBtb2RlOiAnbGlzdC1hZ2VudHMnOyBzb3VyY2U6IFNldHRpbmdTb3VyY2UgfCAnYWxsJyB8ICdidWlsdC1pbicgfVxuICB8ICh7IG1vZGU6ICdhZ2VudC1tZW51JyB9ICYgV2l0aEFnZW50ICYgV2l0aFByZXZpb3VzTW9kZSlcbiAgfCAoeyBtb2RlOiAndmlldy1hZ2VudCcgfSAmIFdpdGhBZ2VudCAmIFdpdGhQcmV2aW91c01vZGUpXG4gIHwgeyBtb2RlOiAnY3JlYXRlLWFnZW50JyB9XG4gIHwgKHsgbW9kZTogJ2VkaXQtYWdlbnQnIH0gJiBXaXRoQWdlbnQgJiBXaXRoUHJldmlvdXNNb2RlKVxuICB8ICh7IG1vZGU6ICdkZWxldGUtY29uZmlybScgfSAmIFdpdGhBZ2VudCAmIFdpdGhQcmV2aW91c01vZGUpXG5cbmV4cG9ydCB0eXBlIEFnZW50VmFsaWRhdGlvblJlc3VsdCA9IHtcbiAgaXNWYWxpZDogYm9vbGVhblxuICB3YXJuaW5nczogc3RyaW5nW11cbiAgZXJyb3JzOiBzdHJpbmdbXVxufVxuIiwgImltcG9ydCB7IG1rZGlyLCBvcGVuLCB1bmxpbmsgfSBmcm9tICdmcy9wcm9taXNlcydcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHR5cGUgeyBTZXR0aW5nU291cmNlIH0gZnJvbSAnc3JjL3V0aWxzL3NldHRpbmdzL2NvbnN0YW50cy5qcydcbmltcG9ydCB7IGdldE1hbmFnZWRGaWxlUGF0aCB9IGZyb20gJ3NyYy91dGlscy9zZXR0aW5ncy9tYW5hZ2VkUGF0aC5qcydcbmltcG9ydCB0eXBlIHsgQWdlbnRNZW1vcnlTY29wZSB9IGZyb20gJy4uLy4uL3Rvb2xzL0FnZW50VG9vbC9hZ2VudE1lbW9yeS5qcydcbmltcG9ydCB7XG4gIHR5cGUgQWdlbnREZWZpbml0aW9uLFxuICBpc0J1aWx0SW5BZ2VudCxcbiAgaXNQbHVnaW5BZ2VudCxcbn0gZnJvbSAnLi4vLi4vdG9vbHMvQWdlbnRUb29sL2xvYWRBZ2VudHNEaXIuanMnXG5pbXBvcnQgeyBnZXRDd2QgfSBmcm9tICcuLi8uLi91dGlscy9jd2QuanMnXG5pbXBvcnQgdHlwZSB7IEVmZm9ydFZhbHVlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZWZmb3J0LmpzJ1xuaW1wb3J0IHsgZ2V0Q2xhdWRlQ29uZmlnSG9tZURpciB9IGZyb20gJy4uLy4uL3V0aWxzL2VudlV0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0RXJybm9Db2RlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXJyb3JzLmpzJ1xuaW1wb3J0IHsgQUdFTlRfUEFUSFMgfSBmcm9tICcuL3R5cGVzLmpzJ1xuXG4vKipcbiAqIEZvcm1hdHMgYWdlbnQgZGF0YSBhcyBtYXJrZG93biBmaWxlIGNvbnRlbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEFnZW50QXNNYXJrZG93bihcbiAgYWdlbnRUeXBlOiBzdHJpbmcsXG4gIHdoZW5Ub1VzZTogc3RyaW5nLFxuICB0b29sczogc3RyaW5nW10gfCB1bmRlZmluZWQsXG4gIHN5c3RlbVByb21wdDogc3RyaW5nLFxuICBjb2xvcj86IHN0cmluZyxcbiAgbW9kZWw/OiBzdHJpbmcsXG4gIG1lbW9yeT86IEFnZW50TWVtb3J5U2NvcGUsXG4gIGVmZm9ydD86IEVmZm9ydFZhbHVlLFxuKTogc3RyaW5nIHtcbiAgLy8gRm9yIFlBTUwgZG91YmxlLXF1b3RlZCBzdHJpbmdzLCB3ZSBuZWVkIHRvIGVzY2FwZTpcbiAgLy8gLSBCYWNrc2xhc2hlczogXFwgLT4gXFxcXFxuICAvLyAtIERvdWJsZSBxdW90ZXM6IFwiIC0+IFxcXCJcbiAgLy8gLSBOZXdsaW5lczogXFxuIC0+IFxcXFxuIChzbyB5YW1sIHJlYWRzIGl0IGFzIGxpdGVyYWwgYmFja3NsYXNoLW4sIG5vdCBuZXdsaW5lKVxuICBjb25zdCBlc2NhcGVkV2hlblRvVXNlID0gd2hlblRvVXNlXG4gICAgLnJlcGxhY2UoL1xcXFwvZywgJ1xcXFxcXFxcJykgLy8gRXNjYXBlIGJhY2tzbGFzaGVzIGZpcnN0XG4gICAgLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKSAvLyBFc2NhcGUgZG91YmxlIHF1b3Rlc1xuICAgIC5yZXBsYWNlKC9cXG4vZywgJ1xcXFxcXFxcbicpIC8vIEVzY2FwZSBuZXdsaW5lcyBhcyBcXFxcbiBzbyB5YW1sIHByZXNlcnZlcyB0aGVtIGFzIFxcblxuXG4gIC8vIE9taXQgdG9vbHMgZmllbGQgZW50aXJlbHkgd2hlbiB0b29scyBpcyB1bmRlZmluZWQgb3IgWycqJ10gKGFsbCB0b29scyBhbGxvd2VkKVxuICBjb25zdCBpc0FsbFRvb2xzID1cbiAgICB0b29scyA9PT0gdW5kZWZpbmVkIHx8ICh0b29scy5sZW5ndGggPT09IDEgJiYgdG9vbHNbMF0gPT09ICcqJylcbiAgY29uc3QgdG9vbHNMaW5lID0gaXNBbGxUb29scyA/ICcnIDogYFxcbnRvb2xzOiAke3Rvb2xzLmpvaW4oJywgJyl9YFxuICBjb25zdCBtb2RlbExpbmUgPSBtb2RlbCA/IGBcXG5tb2RlbDogJHttb2RlbH1gIDogJydcbiAgY29uc3QgZWZmb3J0TGluZSA9IGVmZm9ydCAhPT0gdW5kZWZpbmVkID8gYFxcbmVmZm9ydDogJHtlZmZvcnR9YCA6ICcnXG4gIGNvbnN0IGNvbG9yTGluZSA9IGNvbG9yID8gYFxcbmNvbG9yOiAke2NvbG9yfWAgOiAnJ1xuICBjb25zdCBtZW1vcnlMaW5lID0gbWVtb3J5ID8gYFxcbm1lbW9yeTogJHttZW1vcnl9YCA6ICcnXG5cbiAgcmV0dXJuIGAtLS1cbm5hbWU6ICR7YWdlbnRUeXBlfVxuZGVzY3JpcHRpb246IFwiJHtlc2NhcGVkV2hlblRvVXNlfVwiJHt0b29sc0xpbmV9JHttb2RlbExpbmV9JHtlZmZvcnRMaW5lfSR7Y29sb3JMaW5lfSR7bWVtb3J5TGluZX1cbi0tLVxuXG4ke3N5c3RlbVByb21wdH1cbmBcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBkaXJlY3RvcnkgcGF0aCBmb3IgYW4gYWdlbnQgbG9jYXRpb25cbiAqL1xuZnVuY3Rpb24gZ2V0QWdlbnREaXJlY3RvcnlQYXRoKGxvY2F0aW9uOiBTZXR0aW5nU291cmNlKTogc3RyaW5nIHtcbiAgc3dpdGNoIChsb2NhdGlvbikge1xuICAgIGNhc2UgJ2ZsYWdTZXR0aW5ncyc6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBnZXQgZGlyZWN0b3J5IHBhdGggZm9yICR7bG9jYXRpb259IGFnZW50c2ApXG4gICAgY2FzZSAndXNlclNldHRpbmdzJzpcbiAgICAgIHJldHVybiBqb2luKGdldENsYXVkZUNvbmZpZ0hvbWVEaXIoKSwgQUdFTlRfUEFUSFMuQUdFTlRTX0RJUilcbiAgICBjYXNlICdwcm9qZWN0U2V0dGluZ3MnOlxuICAgICAgcmV0dXJuIGpvaW4oZ2V0Q3dkKCksIEFHRU5UX1BBVEhTLkZPTERFUl9OQU1FLCBBR0VOVF9QQVRIUy5BR0VOVFNfRElSKVxuICAgIGNhc2UgJ3BvbGljeVNldHRpbmdzJzpcbiAgICAgIHJldHVybiBqb2luKFxuICAgICAgICBnZXRNYW5hZ2VkRmlsZVBhdGgoKSxcbiAgICAgICAgQUdFTlRfUEFUSFMuRk9MREVSX05BTUUsXG4gICAgICAgIEFHRU5UX1BBVEhTLkFHRU5UU19ESVIsXG4gICAgICApXG4gICAgY2FzZSAnbG9jYWxTZXR0aW5ncyc6XG4gICAgICByZXR1cm4gam9pbihnZXRDd2QoKSwgQUdFTlRfUEFUSFMuRk9MREVSX05BTUUsIEFHRU5UX1BBVEhTLkFHRU5UU19ESVIpXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UmVsYXRpdmVBZ2VudERpcmVjdG9yeVBhdGgobG9jYXRpb246IFNldHRpbmdTb3VyY2UpOiBzdHJpbmcge1xuICBzd2l0Y2ggKGxvY2F0aW9uKSB7XG4gICAgY2FzZSAncHJvamVjdFNldHRpbmdzJzpcbiAgICAgIHJldHVybiBqb2luKCcuJywgQUdFTlRfUEFUSFMuRk9MREVSX05BTUUsIEFHRU5UX1BBVEhTLkFHRU5UU19ESVIpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBnZXRBZ2VudERpcmVjdG9yeVBhdGgobG9jYXRpb24pXG4gIH1cbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBmaWxlIHBhdGggZm9yIGEgbmV3IGFnZW50IGJhc2VkIG9uIGl0cyBuYW1lXG4gKiBVc2VkIHdoZW4gY3JlYXRpbmcgbmV3IGFnZW50IGZpbGVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXdBZ2VudEZpbGVQYXRoKGFnZW50OiB7XG4gIHNvdXJjZTogU2V0dGluZ1NvdXJjZVxuICBhZ2VudFR5cGU6IHN0cmluZ1xufSk6IHN0cmluZyB7XG4gIGNvbnN0IGRpclBhdGggPSBnZXRBZ2VudERpcmVjdG9yeVBhdGgoYWdlbnQuc291cmNlKVxuICByZXR1cm4gam9pbihkaXJQYXRoLCBgJHthZ2VudC5hZ2VudFR5cGV9Lm1kYClcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBhY3R1YWwgZmlsZSBwYXRoIGZvciBhbiBhZ2VudCAoaGFuZGxlcyBmaWxlbmFtZSB2cyBhZ2VudFR5cGUgbWlzbWF0Y2gpXG4gKiBBbHdheXMgdXNlIHRoaXMgZm9yIGV4aXN0aW5nIGFnZW50cyB0byBnZXQgdGhlaXIgcmVhbCBmaWxlIGxvY2F0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3R1YWxBZ2VudEZpbGVQYXRoKGFnZW50OiBBZ2VudERlZmluaXRpb24pOiBzdHJpbmcge1xuICBpZiAoYWdlbnQuc291cmNlID09PSAnYnVpbHQtaW4nKSB7XG4gICAgcmV0dXJuICdCdWlsdC1pbidcbiAgfVxuICBpZiAoYWdlbnQuc291cmNlID09PSAncGx1Z2luJykge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGdldCBmaWxlIHBhdGggZm9yIHBsdWdpbiBhZ2VudHMnKVxuICB9XG5cbiAgY29uc3QgZGlyUGF0aCA9IGdldEFnZW50RGlyZWN0b3J5UGF0aChhZ2VudC5zb3VyY2UpXG4gIGNvbnN0IGZpbGVuYW1lID0gYWdlbnQuZmlsZW5hbWUgfHwgYWdlbnQuYWdlbnRUeXBlXG4gIHJldHVybiBqb2luKGRpclBhdGgsIGAke2ZpbGVuYW1lfS5tZGApXG59XG5cbi8qKlxuICogR2V0cyB0aGUgcmVsYXRpdmUgZmlsZSBwYXRoIGZvciBhIG5ldyBhZ2VudCBiYXNlZCBvbiBpdHMgbmFtZVxuICogVXNlZCBmb3IgZGlzcGxheWluZyB3aGVyZSBuZXcgYWdlbnQgZmlsZXMgd2lsbCBiZSBjcmVhdGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXdSZWxhdGl2ZUFnZW50RmlsZVBhdGgoYWdlbnQ6IHtcbiAgc291cmNlOiBTZXR0aW5nU291cmNlIHwgJ2J1aWx0LWluJ1xuICBhZ2VudFR5cGU6IHN0cmluZ1xufSk6IHN0cmluZyB7XG4gIGlmIChhZ2VudC5zb3VyY2UgPT09ICdidWlsdC1pbicpIHtcbiAgICByZXR1cm4gJ0J1aWx0LWluJ1xuICB9XG4gIGNvbnN0IGRpclBhdGggPSBnZXRSZWxhdGl2ZUFnZW50RGlyZWN0b3J5UGF0aChhZ2VudC5zb3VyY2UpXG4gIHJldHVybiBqb2luKGRpclBhdGgsIGAke2FnZW50LmFnZW50VHlwZX0ubWRgKVxufVxuXG4vKipcbiAqIEdldHMgdGhlIGFjdHVhbCByZWxhdGl2ZSBmaWxlIHBhdGggZm9yIGFuIGFnZW50IChoYW5kbGVzIGZpbGVuYW1lIHZzIGFnZW50VHlwZSBtaXNtYXRjaClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFjdHVhbFJlbGF0aXZlQWdlbnRGaWxlUGF0aChhZ2VudDogQWdlbnREZWZpbml0aW9uKTogc3RyaW5nIHtcbiAgaWYgKGlzQnVpbHRJbkFnZW50KGFnZW50KSkge1xuICAgIHJldHVybiAnQnVpbHQtaW4nXG4gIH1cbiAgaWYgKGlzUGx1Z2luQWdlbnQoYWdlbnQpKSB7XG4gICAgcmV0dXJuIGBQbHVnaW46ICR7YWdlbnQucGx1Z2luIHx8ICdVbmtub3duJ31gXG4gIH1cbiAgaWYgKGFnZW50LnNvdXJjZSA9PT0gJ2ZsYWdTZXR0aW5ncycpIHtcbiAgICByZXR1cm4gJ0NMSSBhcmd1bWVudCdcbiAgfVxuXG4gIGNvbnN0IGRpclBhdGggPSBnZXRSZWxhdGl2ZUFnZW50RGlyZWN0b3J5UGF0aChhZ2VudC5zb3VyY2UpXG4gIGNvbnN0IGZpbGVuYW1lID0gYWdlbnQuZmlsZW5hbWUgfHwgYWdlbnQuYWdlbnRUeXBlXG4gIHJldHVybiBqb2luKGRpclBhdGgsIGAke2ZpbGVuYW1lfS5tZGApXG59XG5cbi8qKlxuICogRW5zdXJlcyB0aGUgZGlyZWN0b3J5IGZvciBhbiBhZ2VudCBsb2NhdGlvbiBleGlzdHNcbiAqL1xuYXN5bmMgZnVuY3Rpb24gZW5zdXJlQWdlbnREaXJlY3RvcnlFeGlzdHMoXG4gIHNvdXJjZTogU2V0dGluZ1NvdXJjZSxcbik6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IGRpclBhdGggPSBnZXRBZ2VudERpcmVjdG9yeVBhdGgoc291cmNlKVxuICBhd2FpdCBta2RpcihkaXJQYXRoLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KVxuICByZXR1cm4gZGlyUGF0aFxufVxuXG4vKipcbiAqIFNhdmVzIGFuIGFnZW50IHRvIHRoZSBmaWxlc3lzdGVtXG4gKiBAcGFyYW0gY2hlY2tFeGlzdHMgLSBJZiB0cnVlLCB0aHJvd3MgZXJyb3IgaWYgZmlsZSBhbHJlYWR5IGV4aXN0c1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUFnZW50VG9GaWxlKFxuICBzb3VyY2U6IFNldHRpbmdTb3VyY2UgfCAnYnVpbHQtaW4nLFxuICBhZ2VudFR5cGU6IHN0cmluZyxcbiAgd2hlblRvVXNlOiBzdHJpbmcsXG4gIHRvb2xzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCxcbiAgc3lzdGVtUHJvbXB0OiBzdHJpbmcsXG4gIGNoZWNrRXhpc3RzID0gdHJ1ZSxcbiAgY29sb3I/OiBzdHJpbmcsXG4gIG1vZGVsPzogc3RyaW5nLFxuICBtZW1vcnk/OiBBZ2VudE1lbW9yeVNjb3BlLFxuICBlZmZvcnQ/OiBFZmZvcnRWYWx1ZSxcbik6IFByb21pc2U8dm9pZD4ge1xuICBpZiAoc291cmNlID09PSAnYnVpbHQtaW4nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3Qgc2F2ZSBidWlsdC1pbiBhZ2VudHMnKVxuICB9XG5cbiAgYXdhaXQgZW5zdXJlQWdlbnREaXJlY3RvcnlFeGlzdHMoc291cmNlKVxuICBjb25zdCBmaWxlUGF0aCA9IGdldE5ld0FnZW50RmlsZVBhdGgoeyBzb3VyY2UsIGFnZW50VHlwZSB9KVxuXG4gIGNvbnN0IGNvbnRlbnQgPSBmb3JtYXRBZ2VudEFzTWFya2Rvd24oXG4gICAgYWdlbnRUeXBlLFxuICAgIHdoZW5Ub1VzZSxcbiAgICB0b29scyxcbiAgICBzeXN0ZW1Qcm9tcHQsXG4gICAgY29sb3IsXG4gICAgbW9kZWwsXG4gICAgbWVtb3J5LFxuICAgIGVmZm9ydCxcbiAgKVxuICB0cnkge1xuICAgIGF3YWl0IHdyaXRlRmlsZUFuZEZsdXNoKGZpbGVQYXRoLCBjb250ZW50LCBjaGVja0V4aXN0cyA/ICd3eCcgOiAndycpXG4gIH0gY2F0Y2ggKGU6IHVua25vd24pIHtcbiAgICBpZiAoZ2V0RXJybm9Db2RlKGUpID09PSAnRUVYSVNUJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBBZ2VudCBmaWxlIGFscmVhZHkgZXhpc3RzOiAke2ZpbGVQYXRofWApXG4gICAgfVxuICAgIHRocm93IGVcbiAgfVxufVxuXG4vKipcbiAqIFVwZGF0ZXMgYW4gZXhpc3RpbmcgYWdlbnQgZmlsZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQWdlbnRGaWxlKFxuICBhZ2VudDogQWdlbnREZWZpbml0aW9uLFxuICBuZXdXaGVuVG9Vc2U6IHN0cmluZyxcbiAgbmV3VG9vbHM6IHN0cmluZ1tdIHwgdW5kZWZpbmVkLFxuICBuZXdTeXN0ZW1Qcm9tcHQ6IHN0cmluZyxcbiAgbmV3Q29sb3I/OiBzdHJpbmcsXG4gIG5ld01vZGVsPzogc3RyaW5nLFxuICBuZXdNZW1vcnk/OiBBZ2VudE1lbW9yeVNjb3BlLFxuICBuZXdFZmZvcnQ/OiBFZmZvcnRWYWx1ZSxcbik6IFByb21pc2U8dm9pZD4ge1xuICBpZiAoYWdlbnQuc291cmNlID09PSAnYnVpbHQtaW4nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgdXBkYXRlIGJ1aWx0LWluIGFnZW50cycpXG4gIH1cblxuICBjb25zdCBmaWxlUGF0aCA9IGdldEFjdHVhbEFnZW50RmlsZVBhdGgoYWdlbnQpXG5cbiAgY29uc3QgY29udGVudCA9IGZvcm1hdEFnZW50QXNNYXJrZG93bihcbiAgICBhZ2VudC5hZ2VudFR5cGUsXG4gICAgbmV3V2hlblRvVXNlLFxuICAgIG5ld1Rvb2xzLFxuICAgIG5ld1N5c3RlbVByb21wdCxcbiAgICBuZXdDb2xvcixcbiAgICBuZXdNb2RlbCxcbiAgICBuZXdNZW1vcnksXG4gICAgbmV3RWZmb3J0LFxuICApXG5cbiAgYXdhaXQgd3JpdGVGaWxlQW5kRmx1c2goZmlsZVBhdGgsIGNvbnRlbnQpXG59XG5cbi8qKlxuICogRGVsZXRlcyBhbiBhZ2VudCBmaWxlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVBZ2VudEZyb21GaWxlKFxuICBhZ2VudDogQWdlbnREZWZpbml0aW9uLFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmIChhZ2VudC5zb3VyY2UgPT09ICdidWlsdC1pbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGUgYnVpbHQtaW4gYWdlbnRzJylcbiAgfVxuXG4gIGNvbnN0IGZpbGVQYXRoID0gZ2V0QWN0dWFsQWdlbnRGaWxlUGF0aChhZ2VudClcblxuICB0cnkge1xuICAgIGF3YWl0IHVubGluayhmaWxlUGF0aClcbiAgfSBjYXRjaCAoZTogdW5rbm93bikge1xuICAgIGNvbnN0IGNvZGUgPSBnZXRFcnJub0NvZGUoZSlcbiAgICBpZiAoY29kZSAhPT0gJ0VOT0VOVCcpIHtcbiAgICAgIHRocm93IGVcbiAgICB9XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gd3JpdGVGaWxlQW5kRmx1c2goXG4gIGZpbGVQYXRoOiBzdHJpbmcsXG4gIGNvbnRlbnQ6IHN0cmluZyxcbiAgZmxhZzogJ3cnIHwgJ3d4JyA9ICd3Jyxcbik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBoYW5kbGUgPSBhd2FpdCBvcGVuKGZpbGVQYXRoLCBmbGFnKVxuICB0cnkge1xuICAgIGF3YWl0IGhhbmRsZS53cml0ZUZpbGUoY29udGVudCwgeyBlbmNvZGluZzogJ3V0Zi04JyB9KVxuICAgIGF3YWl0IGhhbmRsZS5kYXRhc3luYygpXG4gIH0gZmluYWxseSB7XG4gICAgYXdhaXQgaGFuZGxlLmNsb3NlKClcbiAgfVxufVxuIiwgImltcG9ydCBmaWd1cmVzIGZyb20gJ2ZpZ3VyZXMnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgS2V5Ym9hcmRFdmVudCB9IGZyb20gJy4uLy4uL2luay9ldmVudHMva2V5Ym9hcmQtZXZlbnQuanMnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQgeyB1c2VLZXliaW5kaW5nIH0gZnJvbSAnLi4vLi4va2V5YmluZGluZ3MvdXNlS2V5YmluZGluZy5qcydcbmltcG9ydCB0eXBlIHsgVG9vbHMgfSBmcm9tICcuLi8uLi9Ub29sLmpzJ1xuaW1wb3J0IHsgZ2V0QWdlbnRDb2xvciB9IGZyb20gJy4uLy4uL3Rvb2xzL0FnZW50VG9vbC9hZ2VudENvbG9yTWFuYWdlci5qcydcbmltcG9ydCB7IGdldE1lbW9yeVNjb3BlRGlzcGxheSB9IGZyb20gJy4uLy4uL3Rvb2xzL0FnZW50VG9vbC9hZ2VudE1lbW9yeS5qcydcbmltcG9ydCB7IHJlc29sdmVBZ2VudFRvb2xzIH0gZnJvbSAnLi4vLi4vdG9vbHMvQWdlbnRUb29sL2FnZW50VG9vbFV0aWxzLmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBBZ2VudERlZmluaXRpb24sXG4gIGlzQnVpbHRJbkFnZW50LFxufSBmcm9tICcuLi8uLi90b29scy9BZ2VudFRvb2wvbG9hZEFnZW50c0Rpci5qcydcbmltcG9ydCB7IGdldEFnZW50TW9kZWxEaXNwbGF5IH0gZnJvbSAnLi4vLi4vdXRpbHMvbW9kZWwvYWdlbnQuanMnXG5pbXBvcnQgeyBNYXJrZG93biB9IGZyb20gJy4uL01hcmtkb3duLmpzJ1xuaW1wb3J0IHsgZ2V0QWN0dWFsUmVsYXRpdmVBZ2VudEZpbGVQYXRoIH0gZnJvbSAnLi9hZ2VudEZpbGVVdGlscy5qcydcblxudHlwZSBQcm9wcyA9IHtcbiAgYWdlbnQ6IEFnZW50RGVmaW5pdGlvblxuICB0b29sczogVG9vbHNcbiAgYWxsQWdlbnRzPzogQWdlbnREZWZpbml0aW9uW11cbiAgb25CYWNrOiAoKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBZ2VudERldGFpbCh7IGFnZW50LCB0b29scywgb25CYWNrIH06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgcmVzb2x2ZWRUb29scyA9IHJlc29sdmVBZ2VudFRvb2xzKGFnZW50LCB0b29scywgZmFsc2UpXG4gIGNvbnN0IGZpbGVQYXRoID0gZ2V0QWN0dWFsUmVsYXRpdmVBZ2VudEZpbGVQYXRoKGFnZW50KVxuICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBnZXRBZ2VudENvbG9yKGFnZW50LmFnZW50VHlwZSlcblxuICAvLyBIYW5kbGUgRXNjIHRvIGdvIGJhY2tcbiAgdXNlS2V5YmluZGluZygnY29uZmlybTpubycsIG9uQmFjaywgeyBjb250ZXh0OiAnQ29uZmlybWF0aW9uJyB9KVxuXG4gIC8vIEhhbmRsZSBFbnRlciB0byBnbyBiYWNrXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ3JldHVybicpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgb25CYWNrKClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJUb29sc0xpc3QoKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgICBpZiAocmVzb2x2ZWRUb29scy5oYXNXaWxkY2FyZCkge1xuICAgICAgcmV0dXJuIDxUZXh0PkFsbCB0b29sczwvVGV4dD5cbiAgICB9XG5cbiAgICBpZiAoIWFnZW50LnRvb2xzIHx8IGFnZW50LnRvb2xzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIDxUZXh0Pk5vbmU8L1RleHQ+XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtyZXNvbHZlZFRvb2xzLnZhbGlkVG9vbHMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPFRleHQ+e3Jlc29sdmVkVG9vbHMudmFsaWRUb29scy5qb2luKCcsICcpfTwvVGV4dD5cbiAgICAgICAgKX1cbiAgICAgICAge3Jlc29sdmVkVG9vbHMuaW52YWxpZFRvb2xzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2FybmluZ1wiPlxuICAgICAgICAgICAge2ZpZ3VyZXMud2FybmluZ30gVW5yZWNvZ25pemVkOnsnICd9XG4gICAgICAgICAgICB7cmVzb2x2ZWRUb29scy5pbnZhbGlkVG9vbHMuam9pbignLCAnKX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICl9XG4gICAgICA8Lz5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgZ2FwPXsxfVxuICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICBhdXRvRm9jdXNcbiAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICA+XG4gICAgICA8VGV4dCBkaW1Db2xvcj57ZmlsZVBhdGh9PC9UZXh0PlxuXG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRleHQgYm9sZD5EZXNjcmlwdGlvbjwvVGV4dD4gKHRlbGxzIENsYXVkZSB3aGVuIHRvIHVzZSB0aGlzIGFnZW50KTpcbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8Qm94IG1hcmdpbkxlZnQ9ezJ9PlxuICAgICAgICAgIDxUZXh0PnthZ2VudC53aGVuVG9Vc2V9PC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VGV4dCBib2xkPlRvb2xzPC9UZXh0Pjp7JyAnfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIHtyZW5kZXJUb29sc0xpc3QoKX1cbiAgICAgIDwvQm94PlxuXG4gICAgICA8VGV4dD5cbiAgICAgICAgPFRleHQgYm9sZD5Nb2RlbDwvVGV4dD46IHtnZXRBZ2VudE1vZGVsRGlzcGxheShhZ2VudC5tb2RlbCl9XG4gICAgICA8L1RleHQ+XG5cbiAgICAgIHthZ2VudC5wZXJtaXNzaW9uTW9kZSAmJiAoXG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUZXh0IGJvbGQ+UGVybWlzc2lvbiBtb2RlPC9UZXh0Pjoge2FnZW50LnBlcm1pc3Npb25Nb2RlfVxuICAgICAgICA8L1RleHQ+XG4gICAgICApfVxuXG4gICAgICB7YWdlbnQubWVtb3J5ICYmIChcbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRleHQgYm9sZD5NZW1vcnk8L1RleHQ+OiB7Z2V0TWVtb3J5U2NvcGVEaXNwbGF5KGFnZW50Lm1lbW9yeSl9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICl9XG5cbiAgICAgIHthZ2VudC5ob29rcyAmJiBPYmplY3Qua2V5cyhhZ2VudC5ob29rcykubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUZXh0IGJvbGQ+SG9va3M8L1RleHQ+OiB7T2JqZWN0LmtleXMoYWdlbnQuaG9va3MpLmpvaW4oJywgJyl9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICl9XG5cbiAgICAgIHthZ2VudC5za2lsbHMgJiYgYWdlbnQuc2tpbGxzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VGV4dCBib2xkPlNraWxsczwvVGV4dD46eycgJ31cbiAgICAgICAgICB7YWdlbnQuc2tpbGxzLmxlbmd0aCA+IDEwXG4gICAgICAgICAgICA/IGAke2FnZW50LnNraWxscy5sZW5ndGh9IHNraWxsc2BcbiAgICAgICAgICAgIDogYWdlbnQuc2tpbGxzLmpvaW4oJywgJyl9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICl9XG5cbiAgICAgIHtiYWNrZ3JvdW5kQ29sb3IgJiYgKFxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgPFRleHQgYm9sZD5Db2xvcjwvVGV4dD46eycgJ31cbiAgICAgICAgICAgIDxUZXh0IGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yfSBjb2xvcj1cImludmVyc2VUZXh0XCI+XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIHthZ2VudC5hZ2VudFR5cGV9eycgJ31cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cblxuICAgICAgeyFpc0J1aWx0SW5BZ2VudChhZ2VudCkgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgPFRleHQgYm9sZD5TeXN0ZW0gcHJvbXB0PC9UZXh0PjpcbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94IG1hcmdpbkxlZnQ9ezJ9IG1hcmdpblJpZ2h0PXsyfT5cbiAgICAgICAgICAgIDxNYXJrZG93bj57YWdlbnQuZ2V0U3lzdGVtUHJvbXB0KCl9PC9NYXJrZG93bj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvQm94PlxuICApXG59XG4iLCAiaW1wb3J0IGZpZ3VyZXMgZnJvbSAnZmlndXJlcydcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBLZXlib2FyZEV2ZW50IH0gZnJvbSAnLi4vLi4vaW5rL2V2ZW50cy9rZXlib2FyZC1ldmVudC5qcydcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7XG4gIEFHRU5UX0NPTE9SX1RPX1RIRU1FX0NPTE9SLFxuICBBR0VOVF9DT0xPUlMsXG4gIHR5cGUgQWdlbnRDb2xvck5hbWUsXG59IGZyb20gJy4uLy4uL3Rvb2xzL0FnZW50VG9vbC9hZ2VudENvbG9yTWFuYWdlci5qcydcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICcuLi8uLi91dGlscy9zdHJpbmdVdGlscy5qcydcblxudHlwZSBDb2xvck9wdGlvbiA9IEFnZW50Q29sb3JOYW1lIHwgJ2F1dG9tYXRpYydcblxuY29uc3QgQ09MT1JfT1BUSU9OUzogQ29sb3JPcHRpb25bXSA9IFsnYXV0b21hdGljJywgLi4uQUdFTlRfQ09MT1JTXVxuXG50eXBlIFByb3BzID0ge1xuICBhZ2VudE5hbWU6IHN0cmluZ1xuICBjdXJyZW50Q29sb3I/OiBBZ2VudENvbG9yTmFtZSB8ICdhdXRvbWF0aWMnXG4gIG9uQ29uZmlybTogKGNvbG9yOiBBZ2VudENvbG9yTmFtZSB8IHVuZGVmaW5lZCkgPT4gdm9pZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ29sb3JQaWNrZXIoe1xuICBhZ2VudE5hbWUsXG4gIGN1cnJlbnRDb2xvciA9ICdhdXRvbWF0aWMnLFxuICBvbkNvbmZpcm0sXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IFtzZWxlY3RlZEluZGV4LCBzZXRTZWxlY3RlZEluZGV4XSA9IHVzZVN0YXRlKFxuICAgIE1hdGgubWF4KFxuICAgICAgMCxcbiAgICAgIENPTE9SX09QVElPTlMuZmluZEluZGV4KG9wdCA9PiBvcHQgPT09IGN1cnJlbnRDb2xvciksXG4gICAgKSxcbiAgKVxuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ3VwJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBzZXRTZWxlY3RlZEluZGV4KHByZXYgPT4gKHByZXYgPiAwID8gcHJldiAtIDEgOiBDT0xPUl9PUFRJT05TLmxlbmd0aCAtIDEpKVxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdkb3duJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBzZXRTZWxlY3RlZEluZGV4KHByZXYgPT4gKHByZXYgPCBDT0xPUl9PUFRJT05TLmxlbmd0aCAtIDEgPyBwcmV2ICsgMSA6IDApKVxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdyZXR1cm4nKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gQ09MT1JfT1BUSU9OU1tzZWxlY3RlZEluZGV4XVxuICAgICAgb25Db25maXJtKHNlbGVjdGVkID09PSAnYXV0b21hdGljJyA/IHVuZGVmaW5lZCA6IHNlbGVjdGVkKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSBDT0xPUl9PUFRJT05TW3NlbGVjdGVkSW5kZXhdXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgIGdhcD17MX1cbiAgICAgIHRhYkluZGV4PXswfVxuICAgICAgYXV0b0ZvY3VzXG4gICAgICBvbktleURvd249e2hhbmRsZUtleURvd259XG4gICAgPlxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIHtDT0xPUl9PUFRJT05TLm1hcCgob3B0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBpbmRleCA9PT0gc2VsZWN0ZWRJbmRleFxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCb3gga2V5PXtvcHRpb259IGZsZXhEaXJlY3Rpb249XCJyb3dcIiBnYXA9ezF9PlxuICAgICAgICAgICAgICA8VGV4dCBjb2xvcj17aXNTZWxlY3RlZCA/ICdzdWdnZXN0aW9uJyA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAgICAgICAge2lzU2VsZWN0ZWQgPyBmaWd1cmVzLnBvaW50ZXIgOiAnICd9XG4gICAgICAgICAgICAgIDwvVGV4dD5cblxuICAgICAgICAgICAgICB7b3B0aW9uID09PSAnYXV0b21hdGljJyA/IChcbiAgICAgICAgICAgICAgICA8VGV4dCBib2xkPXtpc1NlbGVjdGVkfT5BdXRvbWF0aWMgY29sb3I8L1RleHQ+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPEJveCBnYXA9ezF9PlxuICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPXtBR0VOVF9DT0xPUl9UT19USEVNRV9DT0xPUltvcHRpb25dfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImludmVyc2VUZXh0XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IGJvbGQ9e2lzU2VsZWN0ZWR9PntjYXBpdGFsaXplKG9wdGlvbil9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgIDxUZXh0PlByZXZpZXc6IDwvVGV4dD5cbiAgICAgICAge3NlbGVjdGVkVmFsdWUgPT09IHVuZGVmaW5lZCB8fCBzZWxlY3RlZFZhbHVlID09PSAnYXV0b21hdGljJyA/IChcbiAgICAgICAgICA8VGV4dCBpbnZlcnNlIGJvbGQ+XG4gICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgQHthZ2VudE5hbWV9eycgJ31cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17QUdFTlRfQ09MT1JfVE9fVEhFTUVfQ09MT1Jbc2VsZWN0ZWRWYWx1ZV19XG4gICAgICAgICAgICBjb2xvcj1cImludmVyc2VUZXh0XCJcbiAgICAgICAgICAgIGJvbGRcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgQHthZ2VudE5hbWV9eycgJ31cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKVxufVxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgZ2V0QWdlbnRNb2RlbE9wdGlvbnMgfSBmcm9tICcuLi8uLi91dGlscy9tb2RlbC9hZ2VudC5qcydcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJy4uL0N1c3RvbVNlbGVjdC9zZWxlY3QuanMnXG5cbmludGVyZmFjZSBNb2RlbFNlbGVjdG9yUHJvcHMge1xuICBpbml0aWFsTW9kZWw/OiBzdHJpbmdcbiAgb25Db21wbGV0ZTogKG1vZGVsPzogc3RyaW5nKSA9PiB2b2lkXG4gIG9uQ2FuY2VsPzogKCkgPT4gdm9pZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gTW9kZWxTZWxlY3Rvcih7XG4gIGluaXRpYWxNb2RlbCxcbiAgb25Db21wbGV0ZSxcbiAgb25DYW5jZWwsXG59OiBNb2RlbFNlbGVjdG9yUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBtb2RlbE9wdGlvbnMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBiYXNlID0gZ2V0QWdlbnRNb2RlbE9wdGlvbnMoKVxuICAgIC8vIElmIHRoZSBhZ2VudCdzIGN1cnJlbnQgbW9kZWwgaXMgYSBmdWxsIElEIChlLmcuICdjbGF1ZGUtb3B1cy00LTUnKSBub3RcbiAgICAvLyBpbiB0aGUgYWxpYXMgbGlzdCwgaW5qZWN0IGl0IGFzIGFuIG9wdGlvbiBzbyBpdCBjYW4gcm91bmQtdHJpcCB0aHJvdWdoXG4gICAgLy8gY29uZmlybSB3aXRob3V0IGJlaW5nIG92ZXJ3cml0dGVuLlxuICAgIGlmIChpbml0aWFsTW9kZWwgJiYgIWJhc2Uuc29tZShvID0+IG8udmFsdWUgPT09IGluaXRpYWxNb2RlbCkpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHtcbiAgICAgICAgICB2YWx1ZTogaW5pdGlhbE1vZGVsLFxuICAgICAgICAgIGxhYmVsOiBpbml0aWFsTW9kZWwsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdDdXJyZW50IG1vZGVsIChjdXN0b20gSUQpJyxcbiAgICAgICAgfSxcbiAgICAgICAgLi4uYmFzZSxcbiAgICAgIF1cbiAgICB9XG4gICAgcmV0dXJuIGJhc2VcbiAgfSwgW2luaXRpYWxNb2RlbF0pXG5cbiAgY29uc3QgZGVmYXVsdE1vZGVsID0gaW5pdGlhbE1vZGVsID8/ICdzb25uZXQnXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgIDxCb3ggbWFyZ2luQm90dG9tPXsxfT5cbiAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgTW9kZWwgZGV0ZXJtaW5lcyB0aGUgYWdlbnQmYXBvcztzIHJlYXNvbmluZyBjYXBhYmlsaXRpZXMgYW5kIHNwZWVkLlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICAgIDxTZWxlY3RcbiAgICAgICAgb3B0aW9ucz17bW9kZWxPcHRpb25zfVxuICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRNb2RlbH1cbiAgICAgICAgb25DaGFuZ2U9e29uQ29tcGxldGV9XG4gICAgICAgIG9uQ2FuY2VsPXsoKSA9PiAob25DYW5jZWwgPyBvbkNhbmNlbCgpIDogb25Db21wbGV0ZSh1bmRlZmluZWQpKX1cbiAgICAgIC8+XG4gICAgPC9Cb3g+XG4gIClcbn1cbiIsICJpbXBvcnQgZmlndXJlcyBmcm9tICdmaWd1cmVzJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWNwSW5mb0Zyb21TdHJpbmcgfSBmcm9tICdzcmMvc2VydmljZXMvbWNwL21jcFN0cmluZ1V0aWxzLmpzJ1xuaW1wb3J0IHsgaXNNY3BUb29sIH0gZnJvbSAnc3JjL3NlcnZpY2VzL21jcC91dGlscy5qcydcbmltcG9ydCB0eXBlIHsgVG9vbCwgVG9vbHMgfSBmcm9tICdzcmMvVG9vbC5qcydcbmltcG9ydCB7IGZpbHRlclRvb2xzRm9yQWdlbnQgfSBmcm9tICdzcmMvdG9vbHMvQWdlbnRUb29sL2FnZW50VG9vbFV0aWxzLmpzJ1xuaW1wb3J0IHsgQUdFTlRfVE9PTF9OQU1FIH0gZnJvbSAnc3JjL3Rvb2xzL0FnZW50VG9vbC9jb25zdGFudHMuanMnXG5pbXBvcnQgeyBCYXNoVG9vbCB9IGZyb20gJ3NyYy90b29scy9CYXNoVG9vbC9CYXNoVG9vbC5qcydcbmltcG9ydCB7IEV4aXRQbGFuTW9kZVYyVG9vbCB9IGZyb20gJ3NyYy90b29scy9FeGl0UGxhbk1vZGVUb29sL0V4aXRQbGFuTW9kZVYyVG9vbC5qcydcbmltcG9ydCB7IEZpbGVFZGl0VG9vbCB9IGZyb20gJ3NyYy90b29scy9GaWxlRWRpdFRvb2wvRmlsZUVkaXRUb29sLmpzJ1xuaW1wb3J0IHsgRmlsZVJlYWRUb29sIH0gZnJvbSAnc3JjL3Rvb2xzL0ZpbGVSZWFkVG9vbC9GaWxlUmVhZFRvb2wuanMnXG5pbXBvcnQgeyBGaWxlV3JpdGVUb29sIH0gZnJvbSAnc3JjL3Rvb2xzL0ZpbGVXcml0ZVRvb2wvRmlsZVdyaXRlVG9vbC5qcydcbmltcG9ydCB7IEdsb2JUb29sIH0gZnJvbSAnc3JjL3Rvb2xzL0dsb2JUb29sL0dsb2JUb29sLmpzJ1xuaW1wb3J0IHsgR3JlcFRvb2wgfSBmcm9tICdzcmMvdG9vbHMvR3JlcFRvb2wvR3JlcFRvb2wuanMnXG5pbXBvcnQgeyBMaXN0TWNwUmVzb3VyY2VzVG9vbCB9IGZyb20gJ3NyYy90b29scy9MaXN0TWNwUmVzb3VyY2VzVG9vbC9MaXN0TWNwUmVzb3VyY2VzVG9vbC5qcydcbmltcG9ydCB7IE5vdGVib29rRWRpdFRvb2wgfSBmcm9tICdzcmMvdG9vbHMvTm90ZWJvb2tFZGl0VG9vbC9Ob3RlYm9va0VkaXRUb29sLmpzJ1xuaW1wb3J0IHsgUmVhZE1jcFJlc291cmNlVG9vbCB9IGZyb20gJ3NyYy90b29scy9SZWFkTWNwUmVzb3VyY2VUb29sL1JlYWRNY3BSZXNvdXJjZVRvb2wuanMnXG5pbXBvcnQgeyBUYXNrT3V0cHV0VG9vbCB9IGZyb20gJ3NyYy90b29scy9UYXNrT3V0cHV0VG9vbC9UYXNrT3V0cHV0VG9vbC5qcydcbmltcG9ydCB7IFRhc2tTdG9wVG9vbCB9IGZyb20gJ3NyYy90b29scy9UYXNrU3RvcFRvb2wvVGFza1N0b3BUb29sLmpzJ1xuaW1wb3J0IHsgVG9kb1dyaXRlVG9vbCB9IGZyb20gJ3NyYy90b29scy9Ub2RvV3JpdGVUb29sL1RvZG9Xcml0ZVRvb2wuanMnXG5pbXBvcnQgeyBUdW5nc3RlblRvb2wgfSBmcm9tICdzcmMvdG9vbHMvVHVuZ3N0ZW5Ub29sL1R1bmdzdGVuVG9vbC5qcydcbmltcG9ydCB7IFdlYkZldGNoVG9vbCB9IGZyb20gJ3NyYy90b29scy9XZWJGZXRjaFRvb2wvV2ViRmV0Y2hUb29sLmpzJ1xuaW1wb3J0IHsgV2ViU2VhcmNoVG9vbCB9IGZyb20gJ3NyYy90b29scy9XZWJTZWFyY2hUb29sL1dlYlNlYXJjaFRvb2wuanMnXG5pbXBvcnQgdHlwZSB7IEtleWJvYXJkRXZlbnQgfSBmcm9tICcuLi8uLi9pbmsvZXZlbnRzL2tleWJvYXJkLWV2ZW50LmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdXNlS2V5YmluZGluZyB9IGZyb20gJy4uLy4uL2tleWJpbmRpbmdzL3VzZUtleWJpbmRpbmcuanMnXG5pbXBvcnQgeyBjb3VudCB9IGZyb20gJy4uLy4uL3V0aWxzL2FycmF5LmpzJ1xuaW1wb3J0IHsgcGx1cmFsIH0gZnJvbSAnLi4vLi4vdXRpbHMvc3RyaW5nVXRpbHMuanMnXG5pbXBvcnQgeyBEaXZpZGVyIH0gZnJvbSAnLi4vZGVzaWduLXN5c3RlbS9EaXZpZGVyLmpzJ1xuXG50eXBlIFByb3BzID0ge1xuICB0b29sczogVG9vbHNcbiAgaW5pdGlhbFRvb2xzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZFxuICBvbkNvbXBsZXRlOiAoc2VsZWN0ZWRUb29sczogc3RyaW5nW10gfCB1bmRlZmluZWQpID0+IHZvaWRcbiAgb25DYW5jZWw/OiAoKSA9PiB2b2lkXG59XG5cbnR5cGUgVG9vbEJ1Y2tldCA9IHtcbiAgbmFtZTogc3RyaW5nXG4gIHRvb2xOYW1lczogU2V0PHN0cmluZz5cbiAgaXNNY3A/OiBib29sZWFuXG59XG5cbnR5cGUgVG9vbEJ1Y2tldHMgPSB7XG4gIFJFQURfT05MWTogVG9vbEJ1Y2tldFxuICBFRElUOiBUb29sQnVja2V0XG4gIEVYRUNVVElPTjogVG9vbEJ1Y2tldFxuICBNQ1A6IFRvb2xCdWNrZXRcbiAgT1RIRVI6IFRvb2xCdWNrZXRcbn1cblxuZnVuY3Rpb24gZ2V0VG9vbEJ1Y2tldHMoKTogVG9vbEJ1Y2tldHMge1xuICByZXR1cm4ge1xuICAgIFJFQURfT05MWToge1xuICAgICAgbmFtZTogJ1JlYWQtb25seSB0b29scycsXG4gICAgICB0b29sTmFtZXM6IG5ldyBTZXQoW1xuICAgICAgICBHbG9iVG9vbC5uYW1lLFxuICAgICAgICBHcmVwVG9vbC5uYW1lLFxuICAgICAgICBFeGl0UGxhbk1vZGVWMlRvb2wubmFtZSxcbiAgICAgICAgRmlsZVJlYWRUb29sLm5hbWUsXG4gICAgICAgIFdlYkZldGNoVG9vbC5uYW1lLFxuICAgICAgICBUb2RvV3JpdGVUb29sLm5hbWUsXG4gICAgICAgIFdlYlNlYXJjaFRvb2wubmFtZSxcbiAgICAgICAgVGFza1N0b3BUb29sLm5hbWUsXG4gICAgICAgIFRhc2tPdXRwdXRUb29sLm5hbWUsXG4gICAgICAgIExpc3RNY3BSZXNvdXJjZXNUb29sLm5hbWUsXG4gICAgICAgIFJlYWRNY3BSZXNvdXJjZVRvb2wubmFtZSxcbiAgICAgIF0pLFxuICAgIH0sXG4gICAgRURJVDoge1xuICAgICAgbmFtZTogJ0VkaXQgdG9vbHMnLFxuICAgICAgdG9vbE5hbWVzOiBuZXcgU2V0KFtcbiAgICAgICAgRmlsZUVkaXRUb29sLm5hbWUsXG4gICAgICAgIEZpbGVXcml0ZVRvb2wubmFtZSxcbiAgICAgICAgTm90ZWJvb2tFZGl0VG9vbC5uYW1lLFxuICAgICAgXSksXG4gICAgfSxcbiAgICBFWEVDVVRJT046IHtcbiAgICAgIG5hbWU6ICdFeGVjdXRpb24gdG9vbHMnLFxuICAgICAgdG9vbE5hbWVzOiBuZXcgU2V0KFxuICAgICAgICBbXG4gICAgICAgICAgQmFzaFRvb2wubmFtZSxcbiAgICAgICAgICBcImV4dGVybmFsXCIgPT09ICdhbnQnID8gVHVuZ3N0ZW5Ub29sLm5hbWUgOiB1bmRlZmluZWQsXG4gICAgICAgIF0uZmlsdGVyKG4gPT4gbiAhPT0gdW5kZWZpbmVkKSxcbiAgICAgICksXG4gICAgfSxcbiAgICBNQ1A6IHtcbiAgICAgIG5hbWU6ICdNQ1AgdG9vbHMnLFxuICAgICAgdG9vbE5hbWVzOiBuZXcgU2V0KCksIC8vIER5bmFtaWMgLSBubyBzdGF0aWMgbGlzdFxuICAgICAgaXNNY3A6IHRydWUsXG4gICAgfSxcbiAgICBPVEhFUjoge1xuICAgICAgbmFtZTogJ090aGVyIHRvb2xzJyxcbiAgICAgIHRvb2xOYW1lczogbmV3IFNldCgpLCAvLyBEeW5hbWljIC0gY2F0Y2gtYWxsIGZvciB1bmNhdGVnb3JpemVkIHRvb2xzXG4gICAgfSxcbiAgfVxufVxuXG4vLyBIZWxwZXIgdG8gZ2V0IE1DUCBzZXJ2ZXIgYnVja2V0cyBkeW5hbWljYWxseVxuZnVuY3Rpb24gZ2V0TWNwU2VydmVyQnVja2V0cyh0b29sczogVG9vbHMpOiBBcnJheTx7XG4gIHNlcnZlck5hbWU6IHN0cmluZ1xuICB0b29sczogVG9vbHNcbn0+IHtcbiAgY29uc3Qgc2VydmVyTWFwID0gbmV3IE1hcDxzdHJpbmcsIFRvb2xbXT4oKVxuXG4gIHRvb2xzLmZvckVhY2godG9vbCA9PiB7XG4gICAgaWYgKGlzTWNwVG9vbCh0b29sKSkge1xuICAgICAgY29uc3QgbWNwSW5mbyA9IG1jcEluZm9Gcm9tU3RyaW5nKHRvb2wubmFtZSlcbiAgICAgIGlmIChtY3BJbmZvPy5zZXJ2ZXJOYW1lKSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gc2VydmVyTWFwLmdldChtY3BJbmZvLnNlcnZlck5hbWUpIHx8IFtdXG4gICAgICAgIGV4aXN0aW5nLnB1c2godG9vbClcbiAgICAgICAgc2VydmVyTWFwLnNldChtY3BJbmZvLnNlcnZlck5hbWUsIGV4aXN0aW5nKVxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gQXJyYXkuZnJvbShzZXJ2ZXJNYXAuZW50cmllcygpKVxuICAgIC5tYXAoKFtzZXJ2ZXJOYW1lLCB0b29sc10pID0+ICh7IHNlcnZlck5hbWUsIHRvb2xzIH0pKVxuICAgIC5zb3J0KChhLCBiKSA9PiBhLnNlcnZlck5hbWUubG9jYWxlQ29tcGFyZShiLnNlcnZlck5hbWUpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVG9vbFNlbGVjdG9yKHtcbiAgdG9vbHMsXG4gIGluaXRpYWxUb29scyxcbiAgb25Db21wbGV0ZSxcbiAgb25DYW5jZWwsXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIC8vIEZpbHRlciB0b29scyBmb3IgY3VzdG9tIGFnZW50c1xuICBjb25zdCBjdXN0b21BZ2VudFRvb2xzID0gdXNlTWVtbyhcbiAgICAoKSA9PiBmaWx0ZXJUb29sc0ZvckFnZW50KHsgdG9vbHMsIGlzQnVpbHRJbjogZmFsc2UsIGlzQXN5bmM6IGZhbHNlIH0pLFxuICAgIFt0b29sc10sXG4gIClcblxuICAvLyBFeHBhbmQgd2lsZGNhcmQgb3IgdW5kZWZpbmVkIHRvIGV4cGxpY2l0IHRvb2wgbGlzdCBmb3IgaW50ZXJuYWwgc3RhdGVcbiAgY29uc3QgZXhwYW5kZWRJbml0aWFsVG9vbHMgPVxuICAgICFpbml0aWFsVG9vbHMgfHwgaW5pdGlhbFRvb2xzLmluY2x1ZGVzKCcqJylcbiAgICAgID8gY3VzdG9tQWdlbnRUb29scy5tYXAodCA9PiB0Lm5hbWUpXG4gICAgICA6IGluaXRpYWxUb29sc1xuXG4gIGNvbnN0IFtzZWxlY3RlZFRvb2xzLCBzZXRTZWxlY3RlZFRvb2xzXSA9XG4gICAgdXNlU3RhdGU8c3RyaW5nW10+KGV4cGFuZGVkSW5pdGlhbFRvb2xzKVxuICBjb25zdCBbZm9jdXNJbmRleCwgc2V0Rm9jdXNJbmRleF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbc2hvd0luZGl2aWR1YWxUb29scywgc2V0U2hvd0luZGl2aWR1YWxUb29sc10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAvLyBGaWx0ZXIgc2VsZWN0ZWRUb29scyB0byBvbmx5IGluY2x1ZGUgdG9vbHMgdGhhdCBjdXJyZW50bHkgZXhpc3RcbiAgLy8gVGhpcyBoYW5kbGVzIE1DUCB0b29scyB0aGF0IGRpc2Nvbm5lY3Qgd2hpbGUgc2VsZWN0ZWRcbiAgY29uc3QgdmFsaWRTZWxlY3RlZFRvb2xzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgdG9vbE5hbWVzID0gbmV3IFNldChjdXN0b21BZ2VudFRvb2xzLm1hcCh0ID0+IHQubmFtZSkpXG4gICAgcmV0dXJuIHNlbGVjdGVkVG9vbHMuZmlsdGVyKG5hbWUgPT4gdG9vbE5hbWVzLmhhcyhuYW1lKSlcbiAgfSwgW3NlbGVjdGVkVG9vbHMsIGN1c3RvbUFnZW50VG9vbHNdKVxuXG4gIGNvbnN0IHNlbGVjdGVkU2V0ID0gbmV3IFNldCh2YWxpZFNlbGVjdGVkVG9vbHMpXG4gIGNvbnN0IGlzQWxsU2VsZWN0ZWQgPVxuICAgIHZhbGlkU2VsZWN0ZWRUb29scy5sZW5ndGggPT09IGN1c3RvbUFnZW50VG9vbHMubGVuZ3RoICYmXG4gICAgY3VzdG9tQWdlbnRUb29scy5sZW5ndGggPiAwXG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlVG9vbCA9ICh0b29sTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKCF0b29sTmFtZSkgcmV0dXJuXG5cbiAgICBzZXRTZWxlY3RlZFRvb2xzKGN1cnJlbnQgPT5cbiAgICAgIGN1cnJlbnQuaW5jbHVkZXModG9vbE5hbWUpXG4gICAgICAgID8gY3VycmVudC5maWx0ZXIodCA9PiB0ICE9PSB0b29sTmFtZSlcbiAgICAgICAgOiBbLi4uY3VycmVudCwgdG9vbE5hbWVdLFxuICAgIClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZVRvb2xzID0gKHRvb2xOYW1lczogc3RyaW5nW10sIHNlbGVjdDogYm9vbGVhbikgPT4ge1xuICAgIHNldFNlbGVjdGVkVG9vbHMoY3VycmVudCA9PiB7XG4gICAgICBpZiAoc2VsZWN0KSB7XG4gICAgICAgIGNvbnN0IHRvb2xzVG9BZGQgPSB0b29sTmFtZXMuZmlsdGVyKHQgPT4gIWN1cnJlbnQuaW5jbHVkZXModCkpXG4gICAgICAgIHJldHVybiBbLi4uY3VycmVudCwgLi4udG9vbHNUb0FkZF1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50LmZpbHRlcih0ID0+ICF0b29sTmFtZXMuaW5jbHVkZXModCkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNvbmZpcm0gPSAoKSA9PiB7XG4gICAgLy8gQ29udmVydCB0byB1bmRlZmluZWQgaWYgYWxsIHRvb2xzIGFyZSBzZWxlY3RlZCAoZm9yIGNsZWFuZXIgZmlsZSBmb3JtYXQpXG4gICAgY29uc3QgYWxsVG9vbE5hbWVzID0gY3VzdG9tQWdlbnRUb29scy5tYXAodCA9PiB0Lm5hbWUpXG4gICAgY29uc3QgYXJlQWxsVG9vbHNTZWxlY3RlZCA9XG4gICAgICB2YWxpZFNlbGVjdGVkVG9vbHMubGVuZ3RoID09PSBhbGxUb29sTmFtZXMubGVuZ3RoICYmXG4gICAgICBhbGxUb29sTmFtZXMuZXZlcnkobmFtZSA9PiB2YWxpZFNlbGVjdGVkVG9vbHMuaW5jbHVkZXMobmFtZSkpXG4gICAgY29uc3QgZmluYWxUb29scyA9IGFyZUFsbFRvb2xzU2VsZWN0ZWQgPyB1bmRlZmluZWQgOiB2YWxpZFNlbGVjdGVkVG9vbHNcblxuICAgIG9uQ29tcGxldGUoZmluYWxUb29scylcbiAgfVxuXG4gIC8vIEdyb3VwIHRvb2xzIGJ5IGJ1Y2tldFxuICBjb25zdCB0b29sc0J5QnVja2V0ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgdG9vbEJ1Y2tldHMgPSBnZXRUb29sQnVja2V0cygpXG4gICAgY29uc3QgYnVja2V0cyA9IHtcbiAgICAgIHJlYWRPbmx5OiBbXSBhcyBUb29sW10sXG4gICAgICBlZGl0OiBbXSBhcyBUb29sW10sXG4gICAgICBleGVjdXRpb246IFtdIGFzIFRvb2xbXSxcbiAgICAgIG1jcDogW10gYXMgVG9vbFtdLFxuICAgICAgb3RoZXI6IFtdIGFzIFRvb2xbXSxcbiAgICB9XG5cbiAgICBjdXN0b21BZ2VudFRvb2xzLmZvckVhY2godG9vbCA9PiB7XG4gICAgICAvLyBDaGVjayBpZiBpdCdzIGFuIE1DUCB0b29sIGZpcnN0XG4gICAgICBpZiAoaXNNY3BUb29sKHRvb2wpKSB7XG4gICAgICAgIGJ1Y2tldHMubWNwLnB1c2godG9vbClcbiAgICAgIH0gZWxzZSBpZiAodG9vbEJ1Y2tldHMuUkVBRF9PTkxZLnRvb2xOYW1lcy5oYXModG9vbC5uYW1lKSkge1xuICAgICAgICBidWNrZXRzLnJlYWRPbmx5LnB1c2godG9vbClcbiAgICAgIH0gZWxzZSBpZiAodG9vbEJ1Y2tldHMuRURJVC50b29sTmFtZXMuaGFzKHRvb2wubmFtZSkpIHtcbiAgICAgICAgYnVja2V0cy5lZGl0LnB1c2godG9vbClcbiAgICAgIH0gZWxzZSBpZiAodG9vbEJ1Y2tldHMuRVhFQ1VUSU9OLnRvb2xOYW1lcy5oYXModG9vbC5uYW1lKSkge1xuICAgICAgICBidWNrZXRzLmV4ZWN1dGlvbi5wdXNoKHRvb2wpXG4gICAgICB9IGVsc2UgaWYgKHRvb2wubmFtZSAhPT0gQUdFTlRfVE9PTF9OQU1FKSB7XG4gICAgICAgIC8vIENhdGNoLWFsbCBmb3IgdW5jYXRlZ29yaXplZCB0b29scyAoZXhjZXB0IFRhc2spXG4gICAgICAgIGJ1Y2tldHMub3RoZXIucHVzaCh0b29sKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gYnVja2V0c1xuICB9LCBbY3VzdG9tQWdlbnRUb29sc10pXG5cbiAgY29uc3QgY3JlYXRlQnVja2V0VG9nZ2xlQWN0aW9uID0gKGJ1Y2tldFRvb2xzOiBUb29sW10pID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IGNvdW50KGJ1Y2tldFRvb2xzLCB0ID0+IHNlbGVjdGVkU2V0Lmhhcyh0Lm5hbWUpKVxuICAgIGNvbnN0IG5lZWRzU2VsZWN0aW9uID0gc2VsZWN0ZWQgPCBidWNrZXRUb29scy5sZW5ndGhcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCB0b29sTmFtZXMgPSBidWNrZXRUb29scy5tYXAodCA9PiB0Lm5hbWUpXG4gICAgICBoYW5kbGVUb2dnbGVUb29scyh0b29sTmFtZXMsIG5lZWRzU2VsZWN0aW9uKVxuICAgIH1cbiAgfVxuXG4gIC8vIEJ1aWxkIG5hdmlnYWJsZSBpdGVtcyAobm8gc2VwYXJhdG9ycylcbiAgY29uc3QgbmF2aWdhYmxlSXRlbXM6IEFycmF5PHtcbiAgICBpZDogc3RyaW5nXG4gICAgbGFiZWw6IHN0cmluZ1xuICAgIGFjdGlvbjogKCkgPT4gdm9pZFxuICAgIGlzQ29udGludWU/OiBib29sZWFuXG4gICAgaXNUb2dnbGU/OiBib29sZWFuXG4gICAgaXNIZWFkZXI/OiBib29sZWFuXG4gIH0+ID0gW11cblxuICAvLyBDb250aW51ZSBidXR0b25cbiAgbmF2aWdhYmxlSXRlbXMucHVzaCh7XG4gICAgaWQ6ICdjb250aW51ZScsXG4gICAgbGFiZWw6ICdDb250aW51ZScsXG4gICAgYWN0aW9uOiBoYW5kbGVDb25maXJtLFxuICAgIGlzQ29udGludWU6IHRydWUsXG4gIH0pXG5cbiAgLy8gQWxsIHRvb2xzXG4gIG5hdmlnYWJsZUl0ZW1zLnB1c2goe1xuICAgIGlkOiAnYnVja2V0LWFsbCcsXG4gICAgbGFiZWw6IGAke2lzQWxsU2VsZWN0ZWQgPyBmaWd1cmVzLmNoZWNrYm94T24gOiBmaWd1cmVzLmNoZWNrYm94T2ZmfSBBbGwgdG9vbHNgLFxuICAgIGFjdGlvbjogKCkgPT4ge1xuICAgICAgY29uc3QgYWxsVG9vbE5hbWVzID0gY3VzdG9tQWdlbnRUb29scy5tYXAodCA9PiB0Lm5hbWUpXG4gICAgICBoYW5kbGVUb2dnbGVUb29scyhhbGxUb29sTmFtZXMsICFpc0FsbFNlbGVjdGVkKVxuICAgIH0sXG4gIH0pXG5cbiAgLy8gQ3JlYXRlIGJ1Y2tldCBtZW51IGl0ZW1zXG4gIGNvbnN0IHRvb2xCdWNrZXRzID0gZ2V0VG9vbEJ1Y2tldHMoKVxuICBjb25zdCBidWNrZXRDb25maWdzID0gW1xuICAgIHtcbiAgICAgIGlkOiAnYnVja2V0LXJlYWRvbmx5JyxcbiAgICAgIG5hbWU6IHRvb2xCdWNrZXRzLlJFQURfT05MWS5uYW1lLFxuICAgICAgdG9vbHM6IHRvb2xzQnlCdWNrZXQucmVhZE9ubHksXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2J1Y2tldC1lZGl0JyxcbiAgICAgIG5hbWU6IHRvb2xCdWNrZXRzLkVESVQubmFtZSxcbiAgICAgIHRvb2xzOiB0b29sc0J5QnVja2V0LmVkaXQsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2J1Y2tldC1leGVjdXRpb24nLFxuICAgICAgbmFtZTogdG9vbEJ1Y2tldHMuRVhFQ1VUSU9OLm5hbWUsXG4gICAgICB0b29sczogdG9vbHNCeUJ1Y2tldC5leGVjdXRpb24sXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2J1Y2tldC1tY3AnLFxuICAgICAgbmFtZTogdG9vbEJ1Y2tldHMuTUNQLm5hbWUsXG4gICAgICB0b29sczogdG9vbHNCeUJ1Y2tldC5tY3AsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2J1Y2tldC1vdGhlcicsXG4gICAgICBuYW1lOiB0b29sQnVja2V0cy5PVEhFUi5uYW1lLFxuICAgICAgdG9vbHM6IHRvb2xzQnlCdWNrZXQub3RoZXIsXG4gICAgfSxcbiAgXVxuXG4gIGJ1Y2tldENvbmZpZ3MuZm9yRWFjaCgoeyBpZCwgbmFtZSwgdG9vbHM6IGJ1Y2tldFRvb2xzIH0pID0+IHtcbiAgICBpZiAoYnVja2V0VG9vbHMubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAgIGNvbnN0IHNlbGVjdGVkID0gY291bnQoYnVja2V0VG9vbHMsIHQgPT4gc2VsZWN0ZWRTZXQuaGFzKHQubmFtZSkpXG4gICAgY29uc3QgaXNGdWxseVNlbGVjdGVkID0gc2VsZWN0ZWQgPT09IGJ1Y2tldFRvb2xzLmxlbmd0aFxuXG4gICAgbmF2aWdhYmxlSXRlbXMucHVzaCh7XG4gICAgICBpZCxcbiAgICAgIGxhYmVsOiBgJHtpc0Z1bGx5U2VsZWN0ZWQgPyBmaWd1cmVzLmNoZWNrYm94T24gOiBmaWd1cmVzLmNoZWNrYm94T2ZmfSAke25hbWV9YCxcbiAgICAgIGFjdGlvbjogY3JlYXRlQnVja2V0VG9nZ2xlQWN0aW9uKGJ1Y2tldFRvb2xzKSxcbiAgICB9KVxuICB9KVxuXG4gIC8vIFRvZ2dsZSBidXR0b24gZm9yIGluZGl2aWR1YWwgdG9vbHNcbiAgY29uc3QgdG9nZ2xlQnV0dG9uSW5kZXggPSBuYXZpZ2FibGVJdGVtcy5sZW5ndGhcbiAgbmF2aWdhYmxlSXRlbXMucHVzaCh7XG4gICAgaWQ6ICd0b2dnbGUtaW5kaXZpZHVhbCcsXG4gICAgbGFiZWw6IHNob3dJbmRpdmlkdWFsVG9vbHNcbiAgICAgID8gJ0hpZGUgYWR2YW5jZWQgb3B0aW9ucydcbiAgICAgIDogJ1Nob3cgYWR2YW5jZWQgb3B0aW9ucycsXG4gICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICBzZXRTaG93SW5kaXZpZHVhbFRvb2xzKCFzaG93SW5kaXZpZHVhbFRvb2xzKVxuICAgICAgLy8gSWYgaGlkaW5nIHRvb2xzIGFuZCBmb2N1cyBpcyBvbiBhbiBpbmRpdmlkdWFsIHRvb2wsIG1vdmUgZm9jdXMgdG8gdG9nZ2xlIGJ1dHRvblxuICAgICAgaWYgKHNob3dJbmRpdmlkdWFsVG9vbHMgJiYgZm9jdXNJbmRleCA+IHRvZ2dsZUJ1dHRvbkluZGV4KSB7XG4gICAgICAgIHNldEZvY3VzSW5kZXgodG9nZ2xlQnV0dG9uSW5kZXgpXG4gICAgICB9XG4gICAgfSxcbiAgICBpc1RvZ2dsZTogdHJ1ZSxcbiAgfSlcblxuICAvLyBNZW1vaXplIE1DUCBzZXJ2ZXIgYnVja2V0cyAobXVzdCBiZSBvdXRzaWRlIGNvbmRpdGlvbmFsIGZvciBob29rcyBydWxlcylcbiAgY29uc3QgbWNwU2VydmVyQnVja2V0cyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gZ2V0TWNwU2VydmVyQnVja2V0cyhjdXN0b21BZ2VudFRvb2xzKSxcbiAgICBbY3VzdG9tQWdlbnRUb29sc10sXG4gIClcblxuICAvLyBJbmRpdmlkdWFsIHRvb2xzIChvbmx5IGlmIGV4cGFuZGVkKVxuICBpZiAoc2hvd0luZGl2aWR1YWxUb29scykge1xuICAgIC8vIEFkZCBNQ1Agc2VydmVyIGJ1Y2tldHMgaWYgYW55IGV4aXN0XG4gICAgaWYgKG1jcFNlcnZlckJ1Y2tldHMubGVuZ3RoID4gMCkge1xuICAgICAgbmF2aWdhYmxlSXRlbXMucHVzaCh7XG4gICAgICAgIGlkOiAnbWNwLXNlcnZlcnMtaGVhZGVyJyxcbiAgICAgICAgbGFiZWw6ICdNQ1AgU2VydmVyczonLFxuICAgICAgICBhY3Rpb246ICgpID0+IHt9LCAvLyBObyBhY3Rpb24gLSBqdXN0IGEgaGVhZGVyXG4gICAgICAgIGlzSGVhZGVyOiB0cnVlLFxuICAgICAgfSlcblxuICAgICAgbWNwU2VydmVyQnVja2V0cy5mb3JFYWNoKCh7IHNlcnZlck5hbWUsIHRvb2xzOiBzZXJ2ZXJUb29scyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gY291bnQoc2VydmVyVG9vbHMsIHQgPT4gc2VsZWN0ZWRTZXQuaGFzKHQubmFtZSkpXG4gICAgICAgIGNvbnN0IGlzRnVsbHlTZWxlY3RlZCA9IHNlbGVjdGVkID09PSBzZXJ2ZXJUb29scy5sZW5ndGhcblxuICAgICAgICBuYXZpZ2FibGVJdGVtcy5wdXNoKHtcbiAgICAgICAgICBpZDogYG1jcC1zZXJ2ZXItJHtzZXJ2ZXJOYW1lfWAsXG4gICAgICAgICAgbGFiZWw6IGAke2lzRnVsbHlTZWxlY3RlZCA/IGZpZ3VyZXMuY2hlY2tib3hPbiA6IGZpZ3VyZXMuY2hlY2tib3hPZmZ9ICR7c2VydmVyTmFtZX0gKCR7c2VydmVyVG9vbHMubGVuZ3RofSAke3BsdXJhbChzZXJ2ZXJUb29scy5sZW5ndGgsICd0b29sJyl9KWAsXG4gICAgICAgICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b29sTmFtZXMgPSBzZXJ2ZXJUb29scy5tYXAodCA9PiB0Lm5hbWUpXG4gICAgICAgICAgICBoYW5kbGVUb2dnbGVUb29scyh0b29sTmFtZXMsICFpc0Z1bGx5U2VsZWN0ZWQpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIC8vIEFkZCBzZXBhcmF0b3IgaGVhZGVyIGJlZm9yZSBpbmRpdmlkdWFsIHRvb2xzXG4gICAgICBuYXZpZ2FibGVJdGVtcy5wdXNoKHtcbiAgICAgICAgaWQ6ICd0b29scy1oZWFkZXInLFxuICAgICAgICBsYWJlbDogJ0luZGl2aWR1YWwgVG9vbHM6JyxcbiAgICAgICAgYWN0aW9uOiAoKSA9PiB7fSxcbiAgICAgICAgaXNIZWFkZXI6IHRydWUsXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIEFkZCBpbmRpdmlkdWFsIHRvb2xzXG4gICAgY3VzdG9tQWdlbnRUb29scy5mb3JFYWNoKHRvb2wgPT4ge1xuICAgICAgbGV0IGRpc3BsYXlOYW1lID0gdG9vbC5uYW1lXG4gICAgICBpZiAodG9vbC5uYW1lLnN0YXJ0c1dpdGgoJ21jcF9fJykpIHtcbiAgICAgICAgY29uc3QgbWNwSW5mbyA9IG1jcEluZm9Gcm9tU3RyaW5nKHRvb2wubmFtZSlcbiAgICAgICAgZGlzcGxheU5hbWUgPSBtY3BJbmZvXG4gICAgICAgICAgPyBgJHttY3BJbmZvLnRvb2xOYW1lfSAoJHttY3BJbmZvLnNlcnZlck5hbWV9KWBcbiAgICAgICAgICA6IHRvb2wubmFtZVxuICAgICAgfVxuXG4gICAgICBuYXZpZ2FibGVJdGVtcy5wdXNoKHtcbiAgICAgICAgaWQ6IGB0b29sLSR7dG9vbC5uYW1lfWAsXG4gICAgICAgIGxhYmVsOiBgJHtzZWxlY3RlZFNldC5oYXModG9vbC5uYW1lKSA/IGZpZ3VyZXMuY2hlY2tib3hPbiA6IGZpZ3VyZXMuY2hlY2tib3hPZmZ9ICR7ZGlzcGxheU5hbWV9YCxcbiAgICAgICAgYWN0aW9uOiAoKSA9PiBoYW5kbGVUb2dnbGVUb29sKHRvb2wubmFtZSksXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKG9uQ2FuY2VsKSB7XG4gICAgICBvbkNhbmNlbCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIG9uQ29tcGxldGUoaW5pdGlhbFRvb2xzKVxuICAgIH1cbiAgfSwgW29uQ2FuY2VsLCBvbkNvbXBsZXRlLCBpbml0aWFsVG9vbHNdKVxuXG4gIHVzZUtleWJpbmRpbmcoJ2NvbmZpcm06bm8nLCBoYW5kbGVDYW5jZWwsIHsgY29udGV4dDogJ0NvbmZpcm1hdGlvbicgfSlcblxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdyZXR1cm4nKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IGl0ZW0gPSBuYXZpZ2FibGVJdGVtc1tmb2N1c0luZGV4XVxuICAgICAgaWYgKGl0ZW0gJiYgIWl0ZW0uaXNIZWFkZXIpIHtcbiAgICAgICAgaXRlbS5hY3Rpb24oKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICd1cCcpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgbGV0IG5ld0luZGV4ID0gZm9jdXNJbmRleCAtIDFcbiAgICAgIC8vIFNraXAgaGVhZGVycyB3aGVuIG5hdmlnYXRpbmcgdXBcbiAgICAgIHdoaWxlIChuZXdJbmRleCA+IDAgJiYgbmF2aWdhYmxlSXRlbXNbbmV3SW5kZXhdPy5pc0hlYWRlcikge1xuICAgICAgICBuZXdJbmRleC0tXG4gICAgICB9XG4gICAgICBzZXRGb2N1c0luZGV4KE1hdGgubWF4KDAsIG5ld0luZGV4KSlcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnZG93bicpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgbGV0IG5ld0luZGV4ID0gZm9jdXNJbmRleCArIDFcbiAgICAgIC8vIFNraXAgaGVhZGVycyB3aGVuIG5hdmlnYXRpbmcgZG93blxuICAgICAgd2hpbGUgKFxuICAgICAgICBuZXdJbmRleCA8IG5hdmlnYWJsZUl0ZW1zLmxlbmd0aCAtIDEgJiZcbiAgICAgICAgbmF2aWdhYmxlSXRlbXNbbmV3SW5kZXhdPy5pc0hlYWRlclxuICAgICAgKSB7XG4gICAgICAgIG5ld0luZGV4KytcbiAgICAgIH1cbiAgICAgIHNldEZvY3VzSW5kZXgoTWF0aC5taW4obmF2aWdhYmxlSXRlbXMubGVuZ3RoIC0gMSwgbmV3SW5kZXgpKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICBtYXJnaW5Ub3A9ezF9XG4gICAgICB0YWJJbmRleD17MH1cbiAgICAgIGF1dG9Gb2N1c1xuICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgID5cbiAgICAgIHsvKiBSZW5kZXIgQ29udGludWUgYnV0dG9uICovfVxuICAgICAgPFRleHRcbiAgICAgICAgY29sb3I9e2ZvY3VzSW5kZXggPT09IDAgPyAnc3VnZ2VzdGlvbicgOiB1bmRlZmluZWR9XG4gICAgICAgIGJvbGQ9e2ZvY3VzSW5kZXggPT09IDB9XG4gICAgICA+XG4gICAgICAgIHtmb2N1c0luZGV4ID09PSAwID8gYCR7ZmlndXJlcy5wb2ludGVyfSBgIDogJyAgJ31bIENvbnRpbnVlIF1cbiAgICAgIDwvVGV4dD5cblxuICAgICAgey8qIFNlcGFyYXRvciAqL31cbiAgICAgIDxEaXZpZGVyIHdpZHRoPXs0MH0gLz5cblxuICAgICAgey8qIFJlbmRlciBhbGwgbmF2aWdhYmxlIGl0ZW1zIGV4Y2VwdCBDb250aW51ZSAod2hpY2ggaXMgYXQgaW5kZXggMCkgKi99XG4gICAgICB7bmF2aWdhYmxlSXRlbXMuc2xpY2UoMSkubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBpc0N1cnJlbnRseUZvY3VzZWQgPSBpbmRleCArIDEgPT09IGZvY3VzSW5kZXhcbiAgICAgICAgY29uc3QgaXNUb2dnbGVCdXR0b24gPSBpdGVtLmlzVG9nZ2xlXG4gICAgICAgIGNvbnN0IGlzSGVhZGVyID0gaXRlbS5pc0hlYWRlclxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICB7LyogQWRkIHNlcGFyYXRvciBiZWZvcmUgdG9nZ2xlIGJ1dHRvbiAqL31cbiAgICAgICAgICAgIHtpc1RvZ2dsZUJ1dHRvbiAmJiA8RGl2aWRlciB3aWR0aD17NDB9IC8+fVxuXG4gICAgICAgICAgICB7LyogQWRkIG1hcmdpbiBiZWZvcmUgaGVhZGVycyAqL31cbiAgICAgICAgICAgIHtpc0hlYWRlciAmJiBpbmRleCA+IDAgJiYgPEJveCBtYXJnaW5Ub3A9ezF9IC8+fVxuXG4gICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICBjb2xvcj17XG4gICAgICAgICAgICAgICAgaXNIZWFkZXJcbiAgICAgICAgICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICA6IGlzQ3VycmVudGx5Rm9jdXNlZFxuICAgICAgICAgICAgICAgICAgICA/ICdzdWdnZXN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpbUNvbG9yPXtpc0hlYWRlcn1cbiAgICAgICAgICAgICAgYm9sZD17aXNUb2dnbGVCdXR0b24gJiYgaXNDdXJyZW50bHlGb2N1c2VkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXNIZWFkZXJcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBpc0N1cnJlbnRseUZvY3VzZWRcbiAgICAgICAgICAgICAgICAgID8gYCR7ZmlndXJlcy5wb2ludGVyfSBgXG4gICAgICAgICAgICAgICAgICA6ICcgICd9XG4gICAgICAgICAgICAgIHtpc1RvZ2dsZUJ1dHRvbiA/IGBbICR7aXRlbS5sYWJlbH0gXWAgOiBpdGVtLmxhYmVsfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIClcbiAgICAgIH0pfVxuXG4gICAgICA8Qm94IG1hcmdpblRvcD17MX0gZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICB7aXNBbGxTZWxlY3RlZFxuICAgICAgICAgICAgPyAnQWxsIHRvb2xzIHNlbGVjdGVkJ1xuICAgICAgICAgICAgOiBgJHtzZWxlY3RlZFNldC5zaXplfSBvZiAke2N1c3RvbUFnZW50VG9vbHMubGVuZ3RofSB0b29scyBzZWxlY3RlZGB9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApXG59XG4iLCAiaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnbG9kYXNoLWVzL2NhcGl0YWxpemUuanMnXG5pbXBvcnQgdHlwZSB7IFNldHRpbmdTb3VyY2UgfSBmcm9tICdzcmMvdXRpbHMvc2V0dGluZ3MvY29uc3RhbnRzLmpzJ1xuaW1wb3J0IHsgZ2V0U2V0dGluZ1NvdXJjZU5hbWUgfSBmcm9tICdzcmMvdXRpbHMvc2V0dGluZ3MvY29uc3RhbnRzLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWdlbnRTb3VyY2VEaXNwbGF5TmFtZShcbiAgc291cmNlOiBTZXR0aW5nU291cmNlIHwgJ2FsbCcgfCAnYnVpbHQtaW4nIHwgJ3BsdWdpbicsXG4pOiBzdHJpbmcge1xuICBpZiAoc291cmNlID09PSAnYWxsJykge1xuICAgIHJldHVybiAnQWdlbnRzJ1xuICB9XG4gIGlmIChzb3VyY2UgPT09ICdidWlsdC1pbicpIHtcbiAgICByZXR1cm4gJ0J1aWx0LWluIGFnZW50cydcbiAgfVxuICBpZiAoc291cmNlID09PSAncGx1Z2luJykge1xuICAgIHJldHVybiAnUGx1Z2luIGFnZW50cydcbiAgfVxuICByZXR1cm4gY2FwaXRhbGl6ZShnZXRTZXR0aW5nU291cmNlTmFtZShzb3VyY2UpKVxufVxuIiwgImltcG9ydCBjaGFsayBmcm9tICdjaGFsaydcbmltcG9ydCBmaWd1cmVzIGZyb20gJ2ZpZ3VyZXMnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2V0QXBwU3RhdGUgfSBmcm9tICdzcmMvc3RhdGUvQXBwU3RhdGUuanMnXG5pbXBvcnQgdHlwZSB7IEtleWJvYXJkRXZlbnQgfSBmcm9tICcuLi8uLi9pbmsvZXZlbnRzL2tleWJvYXJkLWV2ZW50LmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdXNlS2V5YmluZGluZyB9IGZyb20gJy4uLy4uL2tleWJpbmRpbmdzL3VzZUtleWJpbmRpbmcuanMnXG5pbXBvcnQgdHlwZSB7IFRvb2xzIH0gZnJvbSAnLi4vLi4vVG9vbC5qcydcbmltcG9ydCB7XG4gIHR5cGUgQWdlbnRDb2xvck5hbWUsXG4gIHNldEFnZW50Q29sb3IsXG59IGZyb20gJy4uLy4uL3Rvb2xzL0FnZW50VG9vbC9hZ2VudENvbG9yTWFuYWdlci5qcydcbmltcG9ydCB7XG4gIHR5cGUgQWdlbnREZWZpbml0aW9uLFxuICBnZXRBY3RpdmVBZ2VudHNGcm9tTGlzdCxcbiAgaXNDdXN0b21BZ2VudCxcbiAgaXNQbHVnaW5BZ2VudCxcbn0gZnJvbSAnLi4vLi4vdG9vbHMvQWdlbnRUb29sL2xvYWRBZ2VudHNEaXIuanMnXG5pbXBvcnQgeyBlZGl0RmlsZUluRWRpdG9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJvbXB0RWRpdG9yLmpzJ1xuaW1wb3J0IHsgZ2V0QWN0dWFsQWdlbnRGaWxlUGF0aCwgdXBkYXRlQWdlbnRGaWxlIH0gZnJvbSAnLi9hZ2VudEZpbGVVdGlscy5qcydcbmltcG9ydCB7IENvbG9yUGlja2VyIH0gZnJvbSAnLi9Db2xvclBpY2tlci5qcydcbmltcG9ydCB7IE1vZGVsU2VsZWN0b3IgfSBmcm9tICcuL01vZGVsU2VsZWN0b3IuanMnXG5pbXBvcnQgeyBUb29sU2VsZWN0b3IgfSBmcm9tICcuL1Rvb2xTZWxlY3Rvci5qcydcbmltcG9ydCB7IGdldEFnZW50U291cmNlRGlzcGxheU5hbWUgfSBmcm9tICcuL3V0aWxzLmpzJ1xuXG50eXBlIFByb3BzID0ge1xuICBhZ2VudDogQWdlbnREZWZpbml0aW9uXG4gIHRvb2xzOiBUb29sc1xuICBvblNhdmVkOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkXG4gIG9uQmFjazogKCkgPT4gdm9pZFxufVxuXG50eXBlIEVkaXRNb2RlID0gJ21lbnUnIHwgJ2VkaXQtdG9vbHMnIHwgJ2VkaXQtY29sb3InIHwgJ2VkaXQtbW9kZWwnXG5cbnR5cGUgU2F2ZUNoYW5nZXMgPSB7XG4gIHRvb2xzPzogc3RyaW5nW11cbiAgY29sb3I/OiBBZ2VudENvbG9yTmFtZVxuICBtb2RlbD86IHN0cmluZ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQWdlbnRFZGl0b3Ioe1xuICBhZ2VudCxcbiAgdG9vbHMsXG4gIG9uU2F2ZWQsXG4gIG9uQmFjayxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3Qgc2V0QXBwU3RhdGUgPSB1c2VTZXRBcHBTdGF0ZSgpXG4gIGNvbnN0IFtlZGl0TW9kZSwgc2V0RWRpdE1vZGVdID0gdXNlU3RhdGU8RWRpdE1vZGU+KCdtZW51JylcbiAgY29uc3QgW3NlbGVjdGVkTWVudUluZGV4LCBzZXRTZWxlY3RlZE1lbnVJbmRleF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtzZWxlY3RlZENvbG9yLCBzZXRTZWxlY3RlZENvbG9yXSA9IHVzZVN0YXRlPFxuICAgIEFnZW50Q29sb3JOYW1lIHwgdW5kZWZpbmVkXG4gID4oYWdlbnQuY29sb3IgYXMgQWdlbnRDb2xvck5hbWUgfCB1bmRlZmluZWQpXG5cbiAgY29uc3QgaGFuZGxlT3BlbkluRWRpdG9yID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gZ2V0QWN0dWFsQWdlbnRGaWxlUGF0aChhZ2VudClcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBlZGl0RmlsZUluRWRpdG9yKGZpbGVQYXRoKVxuXG4gICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgc2V0RXJyb3IocmVzdWx0LmVycm9yKVxuICAgIH0gZWxzZSB7XG4gICAgICBvblNhdmVkKFxuICAgICAgICBgT3BlbmVkICR7YWdlbnQuYWdlbnRUeXBlfSBpbiBlZGl0b3IuIElmIHlvdSBtYWRlIGVkaXRzLCByZXN0YXJ0IHRvIGxvYWQgdGhlIGxhdGVzdCB2ZXJzaW9uLmAsXG4gICAgICApXG4gICAgfVxuICB9LCBbYWdlbnQsIG9uU2F2ZWRdKVxuXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyAoY2hhbmdlczogU2F2ZUNoYW5nZXMgPSB7fSkgPT4ge1xuICAgICAgY29uc3QgeyB0b29sczogbmV3VG9vbHMsIGNvbG9yOiBuZXdDb2xvciwgbW9kZWw6IG5ld01vZGVsIH0gPSBjaGFuZ2VzXG4gICAgICBjb25zdCBmaW5hbENvbG9yID0gbmV3Q29sb3IgPz8gc2VsZWN0ZWRDb2xvclxuICAgICAgY29uc3QgaGFzVG9vbHNDaGFuZ2VkID0gbmV3VG9vbHMgIT09IHVuZGVmaW5lZFxuICAgICAgY29uc3QgaGFzTW9kZWxDaGFuZ2VkID0gbmV3TW9kZWwgIT09IHVuZGVmaW5lZFxuICAgICAgY29uc3QgaGFzQ29sb3JDaGFuZ2VkID0gZmluYWxDb2xvciAhPT0gYWdlbnQuY29sb3JcblxuICAgICAgaWYgKCFoYXNUb29sc0NoYW5nZWQgJiYgIWhhc01vZGVsQ2hhbmdlZCAmJiAhaGFzQ29sb3JDaGFuZ2VkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICAvLyBPbmx5IGN1c3RvbS9wbHVnaW4gYWdlbnRzIGNhbiBiZSBlZGl0ZWRcbiAgICAgICAgLy8gdGhpcyBpcyBmb3IgdHlwZSBzYWZldHk7IHRoZSBVSSBzaG91bGRuJ3QgYWxsb3cgZWRpdGluZyBvdGhlcndpc2VcbiAgICAgICAgaWYgKCFpc0N1c3RvbUFnZW50KGFnZW50KSAmJiAhaXNQbHVnaW5BZ2VudChhZ2VudCkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IHVwZGF0ZUFnZW50RmlsZShcbiAgICAgICAgICBhZ2VudCxcbiAgICAgICAgICBhZ2VudC53aGVuVG9Vc2UsXG4gICAgICAgICAgbmV3VG9vbHMgPz8gYWdlbnQudG9vbHMsXG4gICAgICAgICAgYWdlbnQuZ2V0U3lzdGVtUHJvbXB0KCksXG4gICAgICAgICAgZmluYWxDb2xvcixcbiAgICAgICAgICBuZXdNb2RlbCA/PyBhZ2VudC5tb2RlbCxcbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChoYXNDb2xvckNoYW5nZWQgJiYgZmluYWxDb2xvcikge1xuICAgICAgICAgIHNldEFnZW50Q29sb3IoYWdlbnQuYWdlbnRUeXBlLCBmaW5hbENvbG9yKVxuICAgICAgICB9XG5cbiAgICAgICAgc2V0QXBwU3RhdGUoc3RhdGUgPT4ge1xuICAgICAgICAgIGNvbnN0IGFsbEFnZW50cyA9IHN0YXRlLmFnZW50RGVmaW5pdGlvbnMuYWxsQWdlbnRzLm1hcChhID0+XG4gICAgICAgICAgICBhLmFnZW50VHlwZSA9PT0gYWdlbnQuYWdlbnRUeXBlXG4gICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgLi4uYSxcbiAgICAgICAgICAgICAgICAgIHRvb2xzOiBuZXdUb29scyA/PyBhLnRvb2xzLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IGZpbmFsQ29sb3IsXG4gICAgICAgICAgICAgICAgICBtb2RlbDogbmV3TW9kZWwgPz8gYS5tb2RlbCxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDogYSxcbiAgICAgICAgICApXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgYWdlbnREZWZpbml0aW9uczoge1xuICAgICAgICAgICAgICAuLi5zdGF0ZS5hZ2VudERlZmluaXRpb25zLFxuICAgICAgICAgICAgICBhY3RpdmVBZ2VudHM6IGdldEFjdGl2ZUFnZW50c0Zyb21MaXN0KGFsbEFnZW50cyksXG4gICAgICAgICAgICAgIGFsbEFnZW50cyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIG9uU2F2ZWQoYFVwZGF0ZWQgYWdlbnQ6ICR7Y2hhbGsuYm9sZChhZ2VudC5hZ2VudFR5cGUpfWApXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgc2V0RXJyb3IoZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6ICdGYWlsZWQgdG8gc2F2ZSBhZ2VudCcpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgW2FnZW50LCBzZWxlY3RlZENvbG9yLCBvblNhdmVkLCBzZXRBcHBTdGF0ZV0sXG4gIClcblxuICBjb25zdCBtZW51SXRlbXMgPSB1c2VNZW1vKFxuICAgICgpID0+IFtcbiAgICAgIHsgbGFiZWw6ICdPcGVuIGluIGVkaXRvcicsIGFjdGlvbjogaGFuZGxlT3BlbkluRWRpdG9yIH0sXG4gICAgICB7IGxhYmVsOiAnRWRpdCB0b29scycsIGFjdGlvbjogKCkgPT4gc2V0RWRpdE1vZGUoJ2VkaXQtdG9vbHMnKSB9LFxuICAgICAgeyBsYWJlbDogJ0VkaXQgbW9kZWwnLCBhY3Rpb246ICgpID0+IHNldEVkaXRNb2RlKCdlZGl0LW1vZGVsJykgfSxcbiAgICAgIHsgbGFiZWw6ICdFZGl0IGNvbG9yJywgYWN0aW9uOiAoKSA9PiBzZXRFZGl0TW9kZSgnZWRpdC1jb2xvcicpIH0sXG4gICAgXSxcbiAgICBbaGFuZGxlT3BlbkluRWRpdG9yXSxcbiAgKVxuXG4gIGNvbnN0IGhhbmRsZUVzY2FwZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRFcnJvcihudWxsKVxuICAgIGlmIChlZGl0TW9kZSA9PT0gJ21lbnUnKSB7XG4gICAgICBvbkJhY2soKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFZGl0TW9kZSgnbWVudScpXG4gICAgfVxuICB9LCBbZWRpdE1vZGUsIG9uQmFja10pXG5cbiAgY29uc3QgaGFuZGxlTWVudUtleURvd24gPSB1c2VDYWxsYmFjayhcbiAgICAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSAndXAnKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBzZXRTZWxlY3RlZE1lbnVJbmRleChpbmRleCA9PiBNYXRoLm1heCgwLCBpbmRleCAtIDEpKVxuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ2Rvd24nKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBzZXRTZWxlY3RlZE1lbnVJbmRleChpbmRleCA9PiBNYXRoLm1pbihtZW51SXRlbXMubGVuZ3RoIC0gMSwgaW5kZXggKyAxKSlcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdyZXR1cm4nKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSBtZW51SXRlbXNbc2VsZWN0ZWRNZW51SW5kZXhdXG4gICAgICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICB2b2lkIHNlbGVjdGVkSXRlbS5hY3Rpb24oKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbbWVudUl0ZW1zLCBzZWxlY3RlZE1lbnVJbmRleF0sXG4gIClcblxuICB1c2VLZXliaW5kaW5nKCdjb25maXJtOm5vJywgaGFuZGxlRXNjYXBlLCB7IGNvbnRleHQ6ICdDb25maXJtYXRpb24nIH0pXG5cbiAgY29uc3QgcmVuZGVyTWVudSA9ICgpOiBSZWFjdC5SZWFjdE5vZGUgPT4gKFxuICAgIDxCb3hcbiAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICBhdXRvRm9jdXNcbiAgICAgIG9uS2V5RG93bj17aGFuZGxlTWVudUtleURvd259XG4gICAgPlxuICAgICAgPFRleHQgZGltQ29sb3I+U291cmNlOiB7Z2V0QWdlbnRTb3VyY2VEaXNwbGF5TmFtZShhZ2VudC5zb3VyY2UpfTwvVGV4dD5cblxuICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAge21lbnVJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIGtleT17aXRlbS5sYWJlbH1cbiAgICAgICAgICAgIGNvbG9yPXtpbmRleCA9PT0gc2VsZWN0ZWRNZW51SW5kZXggPyAnc3VnZ2VzdGlvbicgOiB1bmRlZmluZWR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2luZGV4ID09PSBzZWxlY3RlZE1lbnVJbmRleCA/IGAke2ZpZ3VyZXMucG9pbnRlcn0gYCA6ICcgICd9XG4gICAgICAgICAgICB7aXRlbS5sYWJlbH1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICkpfVxuICAgICAgPC9Cb3g+XG5cbiAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICA8VGV4dCBjb2xvcj1cImVycm9yXCI+e2Vycm9yfTwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuICAgIDwvQm94PlxuICApXG5cbiAgc3dpdGNoIChlZGl0TW9kZSkge1xuICAgIGNhc2UgJ21lbnUnOlxuICAgICAgcmV0dXJuIHJlbmRlck1lbnUoKVxuXG4gICAgY2FzZSAnZWRpdC10b29scyc6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VG9vbFNlbGVjdG9yXG4gICAgICAgICAgdG9vbHM9e3Rvb2xzfVxuICAgICAgICAgIGluaXRpYWxUb29scz17YWdlbnQudG9vbHN9XG4gICAgICAgICAgb25Db21wbGV0ZT17YXN5bmMgZmluYWxUb29scyA9PiB7XG4gICAgICAgICAgICBzZXRFZGl0TW9kZSgnbWVudScpXG4gICAgICAgICAgICBhd2FpdCBoYW5kbGVTYXZlKHsgdG9vbHM6IGZpbmFsVG9vbHMgfSlcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKVxuXG4gICAgY2FzZSAnZWRpdC1jb2xvcic6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q29sb3JQaWNrZXJcbiAgICAgICAgICBhZ2VudE5hbWU9e2FnZW50LmFnZW50VHlwZX1cbiAgICAgICAgICBjdXJyZW50Q29sb3I9e1xuICAgICAgICAgICAgc2VsZWN0ZWRDb2xvciB8fCAoYWdlbnQuY29sb3IgYXMgQWdlbnRDb2xvck5hbWUpIHx8ICdhdXRvbWF0aWMnXG4gICAgICAgICAgfVxuICAgICAgICAgIG9uQ29uZmlybT17YXN5bmMgY29sb3IgPT4ge1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWRDb2xvcihjb2xvcilcbiAgICAgICAgICAgIHNldEVkaXRNb2RlKCdtZW51JylcbiAgICAgICAgICAgIGF3YWl0IGhhbmRsZVNhdmUoeyBjb2xvciB9KVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApXG5cbiAgICBjYXNlICdlZGl0LW1vZGVsJzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxNb2RlbFNlbGVjdG9yXG4gICAgICAgICAgaW5pdGlhbE1vZGVsPXthZ2VudC5tb2RlbH1cbiAgICAgICAgICBvbkNvbXBsZXRlPXthc3luYyBtb2RlbCA9PiB7XG4gICAgICAgICAgICBzZXRFZGl0TW9kZSgnbWVudScpXG4gICAgICAgICAgICBhd2FpdCBoYW5kbGVTYXZlKHsgbW9kZWwgfSlcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsXG4gIH1cbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncyB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncy5qcydcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcblxudHlwZSBQcm9wcyA9IHtcbiAgaW5zdHJ1Y3Rpb25zPzogc3RyaW5nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBZ2VudE5hdmlnYXRpb25Gb290ZXIoe1xuICBpbnN0cnVjdGlvbnMgPSAnUHJlc3Mg4oaR4oaTIHRvIG5hdmlnYXRlIMK3IEVudGVyIHRvIHNlbGVjdCDCtyBFc2MgdG8gZ28gYmFjaycsXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IGV4aXRTdGF0ZSA9IHVzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncygpXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IG1hcmdpbkxlZnQ9ezJ9PlxuICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgIHtleGl0U3RhdGUucGVuZGluZ1xuICAgICAgICAgID8gYFByZXNzICR7ZXhpdFN0YXRlLmtleU5hbWV9IGFnYWluIHRvIGV4aXRgXG4gICAgICAgICAgOiBpbnN0cnVjdGlvbnN9XG4gICAgICA8L1RleHQ+XG4gICAgPC9Cb3g+XG4gIClcbn1cbiIsICJpbXBvcnQgZmlndXJlcyBmcm9tICdmaWd1cmVzJ1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IFNldHRpbmdTb3VyY2UgfSBmcm9tICdzcmMvdXRpbHMvc2V0dGluZ3MvY29uc3RhbnRzLmpzJ1xuaW1wb3J0IHR5cGUgeyBLZXlib2FyZEV2ZW50IH0gZnJvbSAnLi4vLi4vaW5rL2V2ZW50cy9rZXlib2FyZC1ldmVudC5qcydcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB0eXBlIHsgUmVzb2x2ZWRBZ2VudCB9IGZyb20gJy4uLy4uL3Rvb2xzL0FnZW50VG9vbC9hZ2VudERpc3BsYXkuanMnXG5pbXBvcnQge1xuICBBR0VOVF9TT1VSQ0VfR1JPVVBTLFxuICBjb21wYXJlQWdlbnRzQnlOYW1lLFxuICBnZXRPdmVycmlkZVNvdXJjZUxhYmVsLFxuICByZXNvbHZlQWdlbnRNb2RlbERpc3BsYXksXG59IGZyb20gJy4uLy4uL3Rvb2xzL0FnZW50VG9vbC9hZ2VudERpc3BsYXkuanMnXG5pbXBvcnQgdHlwZSB7IEFnZW50RGVmaW5pdGlvbiB9IGZyb20gJy4uLy4uL3Rvb2xzL0FnZW50VG9vbC9sb2FkQWdlbnRzRGlyLmpzJ1xuaW1wb3J0IHsgY291bnQgfSBmcm9tICcuLi8uLi91dGlscy9hcnJheS5qcydcbmltcG9ydCB7IERpYWxvZyB9IGZyb20gJy4uL2Rlc2lnbi1zeXN0ZW0vRGlhbG9nLmpzJ1xuaW1wb3J0IHsgRGl2aWRlciB9IGZyb20gJy4uL2Rlc2lnbi1zeXN0ZW0vRGl2aWRlci5qcydcbmltcG9ydCB7IGdldEFnZW50U291cmNlRGlzcGxheU5hbWUgfSBmcm9tICcuL3V0aWxzLmpzJ1xuXG50eXBlIFByb3BzID0ge1xuICBzb3VyY2U6IFNldHRpbmdTb3VyY2UgfCAnYWxsJyB8ICdidWlsdC1pbicgfCAncGx1Z2luJ1xuICBhZ2VudHM6IFJlc29sdmVkQWdlbnRbXVxuICBvbkJhY2s6ICgpID0+IHZvaWRcbiAgb25TZWxlY3Q6IChhZ2VudDogQWdlbnREZWZpbml0aW9uKSA9PiB2b2lkXG4gIG9uQ3JlYXRlTmV3PzogKCkgPT4gdm9pZFxuICBjaGFuZ2VzPzogc3RyaW5nW11cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEFnZW50c0xpc3Qoe1xuICBzb3VyY2UsXG4gIGFnZW50cyxcbiAgb25CYWNrLFxuICBvblNlbGVjdCxcbiAgb25DcmVhdGVOZXcsXG4gIGNoYW5nZXMsXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IFtzZWxlY3RlZEFnZW50LCBzZXRTZWxlY3RlZEFnZW50XSA9XG4gICAgUmVhY3QudXNlU3RhdGU8UmVzb2x2ZWRBZ2VudCB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtpc0NyZWF0ZU5ld1NlbGVjdGVkLCBzZXRJc0NyZWF0ZU5ld1NlbGVjdGVkXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpXG5cbiAgLy8gU29ydCBhZ2VudHMgYWxwaGFiZXRpY2FsbHkgYnkgbmFtZSB3aXRoaW4gZWFjaCBzb3VyY2UgZ3JvdXBcbiAgY29uc3Qgc29ydGVkQWdlbnRzID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PiBbLi4uYWdlbnRzXS5zb3J0KGNvbXBhcmVBZ2VudHNCeU5hbWUpLFxuICAgIFthZ2VudHNdLFxuICApXG5cbiAgY29uc3QgZ2V0T3ZlcnJpZGVJbmZvID0gKGFnZW50OiBSZXNvbHZlZEFnZW50KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzT3ZlcnJpZGRlbjogISFhZ2VudC5vdmVycmlkZGVuQnksXG4gICAgICBvdmVycmlkZGVuQnk6IGFnZW50Lm92ZXJyaWRkZW5CeSB8fCBudWxsLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlbmRlckNyZWF0ZU5ld09wdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveD5cbiAgICAgICAgPFRleHQgY29sb3I9e2lzQ3JlYXRlTmV3U2VsZWN0ZWQgPyAnc3VnZ2VzdGlvbicgOiB1bmRlZmluZWR9PlxuICAgICAgICAgIHtpc0NyZWF0ZU5ld1NlbGVjdGVkID8gYCR7ZmlndXJlcy5wb2ludGVyfSBgIDogJyAgJ31cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dCBjb2xvcj17aXNDcmVhdGVOZXdTZWxlY3RlZCA/ICdzdWdnZXN0aW9uJyA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAgQ3JlYXRlIG5ldyBhZ2VudFxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICBjb25zdCByZW5kZXJBZ2VudCA9IChhZ2VudDogUmVzb2x2ZWRBZ2VudCkgPT4ge1xuICAgIGNvbnN0IGlzQnVpbHRJbiA9IGFnZW50LnNvdXJjZSA9PT0gJ2J1aWx0LWluJ1xuICAgIGNvbnN0IGlzU2VsZWN0ZWQgPVxuICAgICAgIWlzQnVpbHRJbiAmJlxuICAgICAgIWlzQ3JlYXRlTmV3U2VsZWN0ZWQgJiZcbiAgICAgIHNlbGVjdGVkQWdlbnQ/LmFnZW50VHlwZSA9PT0gYWdlbnQuYWdlbnRUeXBlICYmXG4gICAgICBzZWxlY3RlZEFnZW50Py5zb3VyY2UgPT09IGFnZW50LnNvdXJjZVxuXG4gICAgY29uc3QgeyBpc092ZXJyaWRkZW4sIG92ZXJyaWRkZW5CeSB9ID0gZ2V0T3ZlcnJpZGVJbmZvKGFnZW50KVxuICAgIGNvbnN0IGRpbW1lZCA9IGlzQnVpbHRJbiB8fCBpc092ZXJyaWRkZW5cbiAgICBjb25zdCB0ZXh0Q29sb3IgPSAhaXNCdWlsdEluICYmIGlzU2VsZWN0ZWQgPyAnc3VnZ2VzdGlvbicgOiB1bmRlZmluZWRcblxuICAgIGNvbnN0IHJlc29sdmVkTW9kZWwgPSByZXNvbHZlQWdlbnRNb2RlbERpc3BsYXkoYWdlbnQpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBrZXk9e2Ake2FnZW50LmFnZW50VHlwZX0tJHthZ2VudC5zb3VyY2V9YH0+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPXtkaW1tZWQgJiYgIWlzU2VsZWN0ZWR9IGNvbG9yPXt0ZXh0Q29sb3J9PlxuICAgICAgICAgIHtpc0J1aWx0SW4gPyAnJyA6IGlzU2VsZWN0ZWQgPyBgJHtmaWd1cmVzLnBvaW50ZXJ9IGAgOiAnICAnfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPXtkaW1tZWQgJiYgIWlzU2VsZWN0ZWR9IGNvbG9yPXt0ZXh0Q29sb3J9PlxuICAgICAgICAgIHthZ2VudC5hZ2VudFR5cGV9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAge3Jlc29sdmVkTW9kZWwgJiYgKFxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPXt0cnVlfSBjb2xvcj17dGV4dENvbG9yfT5cbiAgICAgICAgICAgIHsnIMK3ICd9XG4gICAgICAgICAgICB7cmVzb2x2ZWRNb2RlbH1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICl9XG4gICAgICAgIHthZ2VudC5tZW1vcnkgJiYgKFxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPXt0cnVlfSBjb2xvcj17dGV4dENvbG9yfT5cbiAgICAgICAgICAgIHsnIMK3ICd9XG4gICAgICAgICAgICB7YWdlbnQubWVtb3J5fSBtZW1vcnlcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICl9XG4gICAgICAgIHtvdmVycmlkZGVuQnkgJiYgKFxuICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICBkaW1Db2xvcj17IWlzU2VsZWN0ZWR9XG4gICAgICAgICAgICBjb2xvcj17aXNTZWxlY3RlZCA/ICd3YXJuaW5nJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAge2ZpZ3VyZXMud2FybmluZ30gc2hhZG93ZWQgYnkge2dldE92ZXJyaWRlU291cmNlTGFiZWwob3ZlcnJpZGRlbkJ5KX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICBjb25zdCBzZWxlY3RhYmxlQWdlbnRzSW5PcmRlciA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IG5vbkJ1aWx0SW4gPSBzb3J0ZWRBZ2VudHMuZmlsdGVyKGEgPT4gYS5zb3VyY2UgIT09ICdidWlsdC1pbicpXG4gICAgaWYgKHNvdXJjZSA9PT0gJ2FsbCcpIHtcbiAgICAgIHJldHVybiBBR0VOVF9TT1VSQ0VfR1JPVVBTLmZpbHRlcihnID0+IGcuc291cmNlICE9PSAnYnVpbHQtaW4nKS5mbGF0TWFwKFxuICAgICAgICAoeyBzb3VyY2U6IGdyb3VwU291cmNlIH0pID0+XG4gICAgICAgICAgbm9uQnVpbHRJbi5maWx0ZXIoYSA9PiBhLnNvdXJjZSA9PT0gZ3JvdXBTb3VyY2UpLFxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gbm9uQnVpbHRJblxuICB9LCBbc29ydGVkQWdlbnRzLCBzb3VyY2VdKVxuXG4gIC8vIFNldCBpbml0aWFsIHNlbGVjdGlvblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgICFzZWxlY3RlZEFnZW50ICYmXG4gICAgICAhaXNDcmVhdGVOZXdTZWxlY3RlZCAmJlxuICAgICAgc2VsZWN0YWJsZUFnZW50c0luT3JkZXIubGVuZ3RoID4gMFxuICAgICkge1xuICAgICAgaWYgKG9uQ3JlYXRlTmV3KSB7XG4gICAgICAgIHNldElzQ3JlYXRlTmV3U2VsZWN0ZWQodHJ1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFNlbGVjdGVkQWdlbnQoc2VsZWN0YWJsZUFnZW50c0luT3JkZXJbMF0gfHwgbnVsbClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtzZWxlY3RhYmxlQWdlbnRzSW5PcmRlciwgc2VsZWN0ZWRBZ2VudCwgaXNDcmVhdGVOZXdTZWxlY3RlZCwgb25DcmVhdGVOZXddKVxuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ3JldHVybicpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgaWYgKGlzQ3JlYXRlTmV3U2VsZWN0ZWQgJiYgb25DcmVhdGVOZXcpIHtcbiAgICAgICAgb25DcmVhdGVOZXcoKVxuICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZEFnZW50KSB7XG4gICAgICAgIG9uU2VsZWN0KHNlbGVjdGVkQWdlbnQpXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZS5rZXkgIT09ICd1cCcgJiYgZS5rZXkgIT09ICdkb3duJykgcmV0dXJuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyBIYW5kbGUgbmF2aWdhdGlvbiB3aXRoIFwiQ3JlYXRlIE5ldyBBZ2VudFwiIG9wdGlvblxuICAgIGNvbnN0IGhhc0NyZWF0ZU9wdGlvbiA9ICEhb25DcmVhdGVOZXdcbiAgICBjb25zdCB0b3RhbEl0ZW1zID1cbiAgICAgIHNlbGVjdGFibGVBZ2VudHNJbk9yZGVyLmxlbmd0aCArIChoYXNDcmVhdGVPcHRpb24gPyAxIDogMClcblxuICAgIGlmICh0b3RhbEl0ZW1zID09PSAwKSByZXR1cm5cblxuICAgIC8vIENhbGN1bGF0ZSBjdXJyZW50IHBvc2l0aW9uIGluIGxpc3QgKDAgPSBjcmVhdGUgbmV3LCAxKyA9IGFnZW50cylcbiAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gMFxuICAgIGlmICghaXNDcmVhdGVOZXdTZWxlY3RlZCAmJiBzZWxlY3RlZEFnZW50KSB7XG4gICAgICBjb25zdCBhZ2VudEluZGV4ID0gc2VsZWN0YWJsZUFnZW50c0luT3JkZXIuZmluZEluZGV4KFxuICAgICAgICBhID0+XG4gICAgICAgICAgYS5hZ2VudFR5cGUgPT09IHNlbGVjdGVkQWdlbnQuYWdlbnRUeXBlICYmXG4gICAgICAgICAgYS5zb3VyY2UgPT09IHNlbGVjdGVkQWdlbnQuc291cmNlLFxuICAgICAgKVxuICAgICAgaWYgKGFnZW50SW5kZXggPj0gMCkge1xuICAgICAgICBjdXJyZW50UG9zaXRpb24gPSBoYXNDcmVhdGVPcHRpb24gPyBhZ2VudEluZGV4ICsgMSA6IGFnZW50SW5kZXhcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDYWxjdWxhdGUgbmV3IHBvc2l0aW9uIHdpdGggd3JhcC1hcm91bmRcbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9XG4gICAgICBlLmtleSA9PT0gJ3VwJ1xuICAgICAgICA/IGN1cnJlbnRQb3NpdGlvbiA9PT0gMFxuICAgICAgICAgID8gdG90YWxJdGVtcyAtIDFcbiAgICAgICAgICA6IGN1cnJlbnRQb3NpdGlvbiAtIDFcbiAgICAgICAgOiBjdXJyZW50UG9zaXRpb24gPT09IHRvdGFsSXRlbXMgLSAxXG4gICAgICAgICAgPyAwXG4gICAgICAgICAgOiBjdXJyZW50UG9zaXRpb24gKyAxXG5cbiAgICAvLyBVcGRhdGUgc2VsZWN0aW9uIGJhc2VkIG9uIG5ldyBwb3NpdGlvblxuICAgIGlmIChoYXNDcmVhdGVPcHRpb24gJiYgbmV3UG9zaXRpb24gPT09IDApIHtcbiAgICAgIHNldElzQ3JlYXRlTmV3U2VsZWN0ZWQodHJ1ZSlcbiAgICAgIHNldFNlbGVjdGVkQWdlbnQobnVsbClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYWdlbnRJbmRleCA9IGhhc0NyZWF0ZU9wdGlvbiA/IG5ld1Bvc2l0aW9uIC0gMSA6IG5ld1Bvc2l0aW9uXG4gICAgICBjb25zdCBuZXdBZ2VudCA9IHNlbGVjdGFibGVBZ2VudHNJbk9yZGVyW2FnZW50SW5kZXhdXG4gICAgICBpZiAobmV3QWdlbnQpIHtcbiAgICAgICAgc2V0SXNDcmVhdGVOZXdTZWxlY3RlZChmYWxzZSlcbiAgICAgICAgc2V0U2VsZWN0ZWRBZ2VudChuZXdBZ2VudClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCByZW5kZXJCdWlsdEluQWdlbnRzU2VjdGlvbiA9IChcbiAgICB0aXRsZSA9ICdCdWlsdC1pbiAoYWx3YXlzIGF2YWlsYWJsZSk6JyxcbiAgKSA9PiB7XG4gICAgY29uc3QgYnVpbHRJbkFnZW50cyA9IHNvcnRlZEFnZW50cy5maWx0ZXIoYSA9PiBhLnNvdXJjZSA9PT0gJ2J1aWx0LWluJylcbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbWFyZ2luQm90dG9tPXsxfSBwYWRkaW5nTGVmdD17Mn0+XG4gICAgICAgIDxUZXh0IGJvbGQgZGltQ29sb3I+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIHtidWlsdEluQWdlbnRzLm1hcChyZW5kZXJBZ2VudCl9XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICBjb25zdCByZW5kZXJBZ2VudEdyb3VwID0gKHRpdGxlOiBzdHJpbmcsIGdyb3VwQWdlbnRzOiBSZXNvbHZlZEFnZW50W10pID0+IHtcbiAgICBpZiAoIWdyb3VwQWdlbnRzLmxlbmd0aCkgcmV0dXJuIG51bGxcblxuICAgIGNvbnN0IGZvbGRlclBhdGggPSBncm91cEFnZW50c1swXT8uYmFzZURpclxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpbkJvdHRvbT17MX0+XG4gICAgICAgIDxCb3ggcGFkZGluZ0xlZnQ9ezJ9PlxuICAgICAgICAgIDxUZXh0IGJvbGQgZGltQ29sb3I+XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIHtmb2xkZXJQYXRoICYmIDxUZXh0IGRpbUNvbG9yPiAoe2ZvbGRlclBhdGh9KTwvVGV4dD59XG4gICAgICAgIDwvQm94PlxuICAgICAgICB7Z3JvdXBBZ2VudHMubWFwKGFnZW50ID0+IHJlbmRlckFnZW50KGFnZW50KSl9XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICBjb25zdCBzb3VyY2VUaXRsZSA9IGdldEFnZW50U291cmNlRGlzcGxheU5hbWUoc291cmNlKVxuXG4gIGNvbnN0IGJ1aWx0SW5BZ2VudHMgPSBzb3J0ZWRBZ2VudHMuZmlsdGVyKGEgPT4gYS5zb3VyY2UgPT09ICdidWlsdC1pbicpXG5cbiAgY29uc3QgaGFzTm9BZ2VudHMgPVxuICAgICFzb3J0ZWRBZ2VudHMubGVuZ3RoIHx8XG4gICAgKHNvdXJjZSAhPT0gJ2J1aWx0LWluJyAmJiAhc29ydGVkQWdlbnRzLnNvbWUoYSA9PiBhLnNvdXJjZSAhPT0gJ2J1aWx0LWluJykpXG5cbiAgaWYgKGhhc05vQWdlbnRzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEaWFsb2dcbiAgICAgICAgdGl0bGU9e3NvdXJjZVRpdGxlfVxuICAgICAgICBzdWJ0aXRsZT1cIk5vIGFnZW50cyBmb3VuZFwiXG4gICAgICAgIG9uQ2FuY2VsPXtvbkJhY2t9XG4gICAgICAgIGhpZGVJbnB1dEd1aWRlXG4gICAgICA+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICBnYXA9ezF9XG4gICAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgICA+XG4gICAgICAgICAge29uQ3JlYXRlTmV3ICYmIDxCb3g+e3JlbmRlckNyZWF0ZU5ld09wdGlvbigpfTwvQm94Pn1cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgIE5vIGFnZW50cyBmb3VuZC4gQ3JlYXRlIHNwZWNpYWxpemVkIHN1YmFnZW50cyB0aGF0IENsYXVkZSBjYW5cbiAgICAgICAgICAgIGRlbGVnYXRlIHRvLlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgIEVhY2ggc3ViYWdlbnQgaGFzIGl0cyBvd24gY29udGV4dCB3aW5kb3csIGN1c3RvbSBzeXN0ZW0gcHJvbXB0LCBhbmRcbiAgICAgICAgICAgIHNwZWNpZmljIHRvb2xzLlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgIFRyeSBjcmVhdGluZzogQ29kZSBSZXZpZXdlciwgQ29kZSBTaW1wbGlmaWVyLCBTZWN1cml0eSBSZXZpZXdlcixcbiAgICAgICAgICAgIFRlY2ggTGVhZCwgb3IgVVggUmV2aWV3ZXIuXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIHtzb3VyY2UgIT09ICdidWlsdC1pbicgJiZcbiAgICAgICAgICAgIHNvcnRlZEFnZW50cy5zb21lKGEgPT4gYS5zb3VyY2UgPT09ICdidWlsdC1pbicpICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgICAgIHtyZW5kZXJCdWlsdEluQWdlbnRzU2VjdGlvbigpfVxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9EaWFsb2c+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nXG4gICAgICB0aXRsZT17c291cmNlVGl0bGV9XG4gICAgICBzdWJ0aXRsZT17YCR7Y291bnQoc29ydGVkQWdlbnRzLCBhID0+ICFhLm92ZXJyaWRkZW5CeSl9IGFnZW50c2B9XG4gICAgICBvbkNhbmNlbD17b25CYWNrfVxuICAgICAgaGlkZUlucHV0R3VpZGVcbiAgICA+XG4gICAgICB7Y2hhbmdlcyAmJiBjaGFuZ2VzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+e2NoYW5nZXNbY2hhbmdlcy5sZW5ndGggLSAxXX08L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICAgIDxCb3hcbiAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgPlxuICAgICAgICB7b25DcmVhdGVOZXcgJiYgPEJveCBtYXJnaW5Cb3R0b209ezF9PntyZW5kZXJDcmVhdGVOZXdPcHRpb24oKX08L0JveD59XG4gICAgICAgIHtzb3VyY2UgPT09ICdhbGwnID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7QUdFTlRfU09VUkNFX0dST1VQUy5maWx0ZXIoZyA9PiBnLnNvdXJjZSAhPT0gJ2J1aWx0LWluJykubWFwKFxuICAgICAgICAgICAgICAoeyBsYWJlbCwgc291cmNlOiBncm91cFNvdXJjZSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17Z3JvdXBTb3VyY2V9PlxuICAgICAgICAgICAgICAgICAge3JlbmRlckFnZW50R3JvdXAoXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgICAgICAgICBzb3J0ZWRBZ2VudHMuZmlsdGVyKGEgPT4gYS5zb3VyY2UgPT09IGdyb3VwU291cmNlKSxcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7YnVpbHRJbkFnZW50cy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbWFyZ2luQm90dG9tPXsxfSBwYWRkaW5nTGVmdD17Mn0+XG4gICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgICAgICA8VGV4dCBib2xkPkJ1aWx0LWluIGFnZW50czwvVGV4dD4gKGFsd2F5cyBhdmFpbGFibGUpXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIHtidWlsdEluQWdlbnRzLm1hcChyZW5kZXJBZ2VudCl9XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IHNvdXJjZSA9PT0gJ2J1aWx0LWluJyA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3IgaXRhbGljPlxuICAgICAgICAgICAgICBCdWlsdC1pbiBhZ2VudHMgYXJlIHByb3ZpZGVkIGJ5IGRlZmF1bHQgYW5kIGNhbm5vdCBiZSBtb2RpZmllZC5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgIHtzb3J0ZWRBZ2VudHMubWFwKGFnZW50ID0+IHJlbmRlckFnZW50KGFnZW50KSl9XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAge3NvcnRlZEFnZW50c1xuICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4gYS5zb3VyY2UgIT09ICdidWlsdC1pbicpXG4gICAgICAgICAgICAgIC5tYXAoYWdlbnQgPT4gcmVuZGVyQWdlbnQoYWdlbnQpKX1cbiAgICAgICAgICAgIHtzb3J0ZWRBZ2VudHMuc29tZShhID0+IGEuc291cmNlID09PSAnYnVpbHQtaW4nKSAmJiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICB7cmVuZGVyQnVpbHRJbkFnZW50c1NlY3Rpb24oKX1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgPC9EaWFsb2c+XG4gIClcbn1cbiIsICJpbXBvcnQgUmVhY3QsIHtcbiAgY3JlYXRlQ29udGV4dCxcbiAgdHlwZSBSZWFjdE5vZGUsXG4gIHVzZUNhbGxiYWNrLFxuICB1c2VFZmZlY3QsXG4gIHVzZU1lbW8sXG4gIHVzZVN0YXRlLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncyB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncy5qcydcbmltcG9ydCB0eXBlIHsgV2l6YXJkQ29udGV4dFZhbHVlLCBXaXphcmRQcm92aWRlclByb3BzIH0gZnJvbSAnLi90eXBlcy5qcydcblxuLy8gVXNlIGFueSBoZXJlIGZvciB0aGUgY29udGV4dCBzaW5jZSBpdCB3aWxsIGJlIGNhc3QgcHJvcGVybHkgd2hlbiB1c2VkXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuZXhwb3J0IGNvbnN0IFdpemFyZENvbnRleHQgPSBjcmVhdGVDb250ZXh0PFdpemFyZENvbnRleHRWYWx1ZTxhbnk+IHwgbnVsbD4obnVsbClcblxuZXhwb3J0IGZ1bmN0aW9uIFdpemFyZFByb3ZpZGVyPFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4oe1xuICBzdGVwcyxcbiAgaW5pdGlhbERhdGEgPSB7fSBhcyBULFxuICBvbkNvbXBsZXRlLFxuICBvbkNhbmNlbCxcbiAgY2hpbGRyZW4sXG4gIHRpdGxlLFxuICBzaG93U3RlcENvdW50ZXIgPSB0cnVlLFxufTogV2l6YXJkUHJvdmlkZXJQcm9wczxUPik6IFJlYWN0Tm9kZSB7XG4gIGNvbnN0IFtjdXJyZW50U3RlcEluZGV4LCBzZXRDdXJyZW50U3RlcEluZGV4XSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFt3aXphcmREYXRhLCBzZXRXaXphcmREYXRhXSA9IHVzZVN0YXRlPFQ+KGluaXRpYWxEYXRhKVxuICBjb25zdCBbaXNDb21wbGV0ZWQsIHNldElzQ29tcGxldGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbbmF2aWdhdGlvbkhpc3RvcnksIHNldE5hdmlnYXRpb25IaXN0b3J5XSA9IHVzZVN0YXRlPG51bWJlcltdPihbXSlcblxuICB1c2VFeGl0T25DdHJsQ0RXaXRoS2V5YmluZGluZ3MoKVxuXG4gIC8vIEhhbmRsZSBjb21wbGV0aW9uIGluIHVzZUVmZmVjdCB0byBhdm9pZCB1cGRhdGluZyBwYXJlbnQgZHVyaW5nIHJlbmRlclxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0NvbXBsZXRlZCkge1xuICAgICAgc2V0TmF2aWdhdGlvbkhpc3RvcnkoW10pXG4gICAgICB2b2lkIG9uQ29tcGxldGUod2l6YXJkRGF0YSlcbiAgICB9XG4gIH0sIFtpc0NvbXBsZXRlZCwgd2l6YXJkRGF0YSwgb25Db21wbGV0ZV0pXG5cbiAgY29uc3QgZ29OZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChjdXJyZW50U3RlcEluZGV4IDwgc3RlcHMubGVuZ3RoIC0gMSkge1xuICAgICAgLy8gSWYgd2UgaGF2ZSBoaXN0b3J5IChub24tbGluZWFyIGZsb3cpLCBhZGQgY3VycmVudCBzdGVwIHRvIGl0XG4gICAgICBpZiAobmF2aWdhdGlvbkhpc3RvcnkubGVuZ3RoID4gMCkge1xuICAgICAgICBzZXROYXZpZ2F0aW9uSGlzdG9yeShwcmV2ID0+IFsuLi5wcmV2LCBjdXJyZW50U3RlcEluZGV4XSlcbiAgICAgIH1cblxuICAgICAgc2V0Q3VycmVudFN0ZXBJbmRleChwcmV2ID0+IHByZXYgKyAxKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBNYXJrIGFzIGNvbXBsZXRlZCwgd2hpY2ggd2lsbCB0cmlnZ2VyIHVzZUVmZmVjdFxuICAgICAgc2V0SXNDb21wbGV0ZWQodHJ1ZSlcbiAgICB9XG4gIH0sIFtjdXJyZW50U3RlcEluZGV4LCBzdGVwcy5sZW5ndGgsIG5hdmlnYXRpb25IaXN0b3J5XSlcblxuICBjb25zdCBnb0JhY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSBuYXZpZ2F0aW9uIGhpc3RvcnkgdG8gdXNlXG4gICAgaWYgKG5hdmlnYXRpb25IaXN0b3J5Lmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzU3RlcCA9IG5hdmlnYXRpb25IaXN0b3J5W25hdmlnYXRpb25IaXN0b3J5Lmxlbmd0aCAtIDFdXG4gICAgICBpZiAocHJldmlvdXNTdGVwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc2V0TmF2aWdhdGlvbkhpc3RvcnkocHJldiA9PiBwcmV2LnNsaWNlKDAsIC0xKSlcbiAgICAgICAgc2V0Q3VycmVudFN0ZXBJbmRleChwcmV2aW91c1N0ZXApXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjdXJyZW50U3RlcEluZGV4ID4gMCkge1xuICAgICAgLy8gRmFsbGJhY2sgdG8gc2ltcGxlIGRlY3JlbWVudCBpZiBubyBoaXN0b3J5XG4gICAgICBzZXRDdXJyZW50U3RlcEluZGV4KHByZXYgPT4gcHJldiAtIDEpXG4gICAgfSBlbHNlIGlmIChvbkNhbmNlbCkge1xuICAgICAgb25DYW5jZWwoKVxuICAgIH1cbiAgfSwgW2N1cnJlbnRTdGVwSW5kZXgsIG5hdmlnYXRpb25IaXN0b3J5LCBvbkNhbmNlbF0pXG5cbiAgY29uc3QgZ29Ub1N0ZXAgPSB1c2VDYWxsYmFjayhcbiAgICAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCBzdGVwcy5sZW5ndGgpIHtcbiAgICAgICAgLy8gUHVzaCBjdXJyZW50IHN0ZXAgdG8gaGlzdG9yeSBiZWZvcmUganVtcGluZ1xuICAgICAgICBzZXROYXZpZ2F0aW9uSGlzdG9yeShwcmV2ID0+IFsuLi5wcmV2LCBjdXJyZW50U3RlcEluZGV4XSlcbiAgICAgICAgc2V0Q3VycmVudFN0ZXBJbmRleChpbmRleClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtjdXJyZW50U3RlcEluZGV4LCBzdGVwcy5sZW5ndGhdLFxuICApXG5cbiAgY29uc3QgY2FuY2VsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldE5hdmlnYXRpb25IaXN0b3J5KFtdKVxuICAgIGlmIChvbkNhbmNlbCkge1xuICAgICAgb25DYW5jZWwoKVxuICAgIH1cbiAgfSwgW29uQ2FuY2VsXSlcblxuICBjb25zdCB1cGRhdGVXaXphcmREYXRhID0gdXNlQ2FsbGJhY2soKHVwZGF0ZXM6IFBhcnRpYWw8VD4pID0+IHtcbiAgICBzZXRXaXphcmREYXRhKHByZXYgPT4gKHsgLi4ucHJldiwgLi4udXBkYXRlcyB9KSlcbiAgfSwgW10pXG5cbiAgY29uc3QgY29udGV4dFZhbHVlID0gdXNlTWVtbzxXaXphcmRDb250ZXh0VmFsdWU8VD4+KFxuICAgICgpID0+ICh7XG4gICAgICBjdXJyZW50U3RlcEluZGV4LFxuICAgICAgdG90YWxTdGVwczogc3RlcHMubGVuZ3RoLFxuICAgICAgd2l6YXJkRGF0YSxcbiAgICAgIHNldFdpemFyZERhdGEsXG4gICAgICB1cGRhdGVXaXphcmREYXRhLFxuICAgICAgZ29OZXh0LFxuICAgICAgZ29CYWNrLFxuICAgICAgZ29Ub1N0ZXAsXG4gICAgICBjYW5jZWwsXG4gICAgICB0aXRsZSxcbiAgICAgIHNob3dTdGVwQ291bnRlcixcbiAgICB9KSxcbiAgICBbXG4gICAgICBjdXJyZW50U3RlcEluZGV4LFxuICAgICAgc3RlcHMubGVuZ3RoLFxuICAgICAgd2l6YXJkRGF0YSxcbiAgICAgIHVwZGF0ZVdpemFyZERhdGEsXG4gICAgICBnb05leHQsXG4gICAgICBnb0JhY2ssXG4gICAgICBnb1RvU3RlcCxcbiAgICAgIGNhbmNlbCxcbiAgICAgIHRpdGxlLFxuICAgICAgc2hvd1N0ZXBDb3VudGVyLFxuICAgIF0sXG4gIClcblxuICBjb25zdCBDdXJyZW50U3RlcENvbXBvbmVudCA9IHN0ZXBzW2N1cnJlbnRTdGVwSW5kZXhdXG5cbiAgaWYgKCFDdXJyZW50U3RlcENvbXBvbmVudCB8fCBpc0NvbXBsZXRlZCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxXaXphcmRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0VmFsdWV9PlxuICAgICAge2NoaWxkcmVuIHx8IDxDdXJyZW50U3RlcENvbXBvbmVudCAvPn1cbiAgICA8L1dpemFyZENvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IFdpemFyZENvbnRleHRWYWx1ZSB9IGZyb20gJy4vdHlwZXMuanMnXG5pbXBvcnQgeyBXaXphcmRDb250ZXh0IH0gZnJvbSAnLi9XaXphcmRQcm92aWRlci5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVdpemFyZDxcbiAgVCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0gUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4+KCk6IFdpemFyZENvbnRleHRWYWx1ZTxUPiB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFdpemFyZENvbnRleHQpIGFzIFdpemFyZENvbnRleHRWYWx1ZTxUPiB8IG51bGxcbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VXaXphcmQgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIFdpemFyZFByb3ZpZGVyJylcbiAgfVxuICByZXR1cm4gY29udGV4dFxufVxuIiwgImltcG9ydCBSZWFjdCwgeyB0eXBlIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRXhpdE9uQ3RybENEV2l0aEtleWJpbmRpbmdzIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlRXhpdE9uQ3RybENEV2l0aEtleWJpbmRpbmdzLmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgQ29uZmlndXJhYmxlU2hvcnRjdXRIaW50IH0gZnJvbSAnLi4vQ29uZmlndXJhYmxlU2hvcnRjdXRIaW50LmpzJ1xuaW1wb3J0IHsgQnlsaW5lIH0gZnJvbSAnLi4vZGVzaWduLXN5c3RlbS9CeWxpbmUuanMnXG5pbXBvcnQgeyBLZXlib2FyZFNob3J0Y3V0SGludCB9IGZyb20gJy4uL2Rlc2lnbi1zeXN0ZW0vS2V5Ym9hcmRTaG9ydGN1dEhpbnQuanMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGluc3RydWN0aW9ucz86IFJlYWN0Tm9kZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gV2l6YXJkTmF2aWdhdGlvbkZvb3Rlcih7XG4gIGluc3RydWN0aW9ucyA9IChcbiAgICA8QnlsaW5lPlxuICAgICAgPEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwi4oaR4oaTXCIgYWN0aW9uPVwibmF2aWdhdGVcIiAvPlxuICAgICAgPEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwiRW50ZXJcIiBhY3Rpb249XCJzZWxlY3RcIiAvPlxuICAgICAgPENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludFxuICAgICAgICBhY3Rpb249XCJjb25maXJtOm5vXCJcbiAgICAgICAgY29udGV4dD1cIkNvbmZpcm1hdGlvblwiXG4gICAgICAgIGZhbGxiYWNrPVwiRXNjXCJcbiAgICAgICAgZGVzY3JpcHRpb249XCJnbyBiYWNrXCJcbiAgICAgIC8+XG4gICAgPC9CeWxpbmU+XG4gICksXG59OiBQcm9wcyk6IFJlYWN0Tm9kZSB7XG4gIGNvbnN0IGV4aXRTdGF0ZSA9IHVzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncygpXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IG1hcmdpbkxlZnQ9ezN9IG1hcmdpblRvcD17MX0+XG4gICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAge2V4aXRTdGF0ZS5wZW5kaW5nXG4gICAgICAgICAgPyBgUHJlc3MgJHtleGl0U3RhdGUua2V5TmFtZX0gYWdhaW4gdG8gZXhpdGBcbiAgICAgICAgICA6IGluc3RydWN0aW9uc31cbiAgICAgIDwvVGV4dD5cbiAgICA8L0JveD5cbiAgKVxufVxuIiwgImltcG9ydCBSZWFjdCwgeyB0eXBlIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBUaGVtZSB9IGZyb20gJy4uLy4uL3V0aWxzL3RoZW1lLmpzJ1xuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi4vZGVzaWduLXN5c3RlbS9EaWFsb2cuanMnXG5pbXBvcnQgeyB1c2VXaXphcmQgfSBmcm9tICcuL3VzZVdpemFyZC5qcydcbmltcG9ydCB7IFdpemFyZE5hdmlnYXRpb25Gb290ZXIgfSBmcm9tICcuL1dpemFyZE5hdmlnYXRpb25Gb290ZXIuanMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRpdGxlPzogc3RyaW5nXG4gIGNvbG9yPzoga2V5b2YgVGhlbWVcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZVxuICBzdWJ0aXRsZT86IHN0cmluZ1xuICBmb290ZXJUZXh0PzogUmVhY3ROb2RlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBXaXphcmREaWFsb2dMYXlvdXQoe1xuICB0aXRsZTogdGl0bGVPdmVycmlkZSxcbiAgY29sb3IgPSAnc3VnZ2VzdGlvbicsXG4gIGNoaWxkcmVuLFxuICBzdWJ0aXRsZSxcbiAgZm9vdGVyVGV4dCxcbn06IFByb3BzKTogUmVhY3ROb2RlIHtcbiAgY29uc3Qge1xuICAgIGN1cnJlbnRTdGVwSW5kZXgsXG4gICAgdG90YWxTdGVwcyxcbiAgICB0aXRsZTogcHJvdmlkZXJUaXRsZSxcbiAgICBzaG93U3RlcENvdW50ZXIsXG4gICAgZ29CYWNrLFxuICB9ID0gdXNlV2l6YXJkKClcbiAgY29uc3QgdGl0bGUgPSB0aXRsZU92ZXJyaWRlIHx8IHByb3ZpZGVyVGl0bGUgfHwgJ1dpemFyZCdcbiAgY29uc3Qgc3RlcFN1ZmZpeCA9XG4gICAgc2hvd1N0ZXBDb3VudGVyICE9PSBmYWxzZSA/IGAgKCR7Y3VycmVudFN0ZXBJbmRleCArIDF9LyR7dG90YWxTdGVwc30pYCA6ICcnXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPERpYWxvZ1xuICAgICAgICB0aXRsZT17YCR7dGl0bGV9JHtzdGVwU3VmZml4fWB9XG4gICAgICAgIHN1YnRpdGxlPXtzdWJ0aXRsZX1cbiAgICAgICAgb25DYW5jZWw9e2dvQmFja31cbiAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICBoaWRlSW5wdXRHdWlkZVxuICAgICAgICBpc0NhbmNlbEFjdGl2ZT17ZmFsc2V9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvRGlhbG9nPlxuICAgICAgPFdpemFyZE5hdmlnYXRpb25Gb290ZXIgaW5zdHJ1Y3Rpb25zPXtmb290ZXJUZXh0fSAvPlxuICAgIDwvPlxuICApXG59XG4iLCAiZXhwb3J0IHR5cGUge1xuICBXaXphcmRDb250ZXh0VmFsdWUsXG4gIFdpemFyZFByb3ZpZGVyUHJvcHMsXG4gIFdpemFyZFN0ZXBDb21wb25lbnQsXG59IGZyb20gJy4vdHlwZXMuanMnXG5leHBvcnQgeyB1c2VXaXphcmQgfSBmcm9tICcuL3VzZVdpemFyZC5qcydcbmV4cG9ydCB7IFdpemFyZERpYWxvZ0xheW91dCB9IGZyb20gJy4vV2l6YXJkRGlhbG9nTGF5b3V0LmpzJ1xuZXhwb3J0IHsgV2l6YXJkTmF2aWdhdGlvbkZvb3RlciB9IGZyb20gJy4vV2l6YXJkTmF2aWdhdGlvbkZvb3Rlci5qcydcbmV4cG9ydCB7IFdpemFyZFByb3ZpZGVyIH0gZnJvbSAnLi9XaXphcmRQcm92aWRlci5qcydcbiIsICJpbXBvcnQgUmVhY3QsIHsgdHlwZSBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uLy4uLy4uL2luay5qcydcbmltcG9ydCB7IHVzZUtleWJpbmRpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi9rZXliaW5kaW5ncy91c2VLZXliaW5kaW5nLmpzJ1xuaW1wb3J0IHR5cGUgeyBBZ2VudENvbG9yTmFtZSB9IGZyb20gJy4uLy4uLy4uLy4uL3Rvb2xzL0FnZW50VG9vbC9hZ2VudENvbG9yTWFuYWdlci5qcydcbmltcG9ydCB7IENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludCB9IGZyb20gJy4uLy4uLy4uL0NvbmZpZ3VyYWJsZVNob3J0Y3V0SGludC5qcydcbmltcG9ydCB7IEJ5bGluZSB9IGZyb20gJy4uLy4uLy4uL2Rlc2lnbi1zeXN0ZW0vQnlsaW5lLmpzJ1xuaW1wb3J0IHsgS2V5Ym9hcmRTaG9ydGN1dEhpbnQgfSBmcm9tICcuLi8uLi8uLi9kZXNpZ24tc3lzdGVtL0tleWJvYXJkU2hvcnRjdXRIaW50LmpzJ1xuaW1wb3J0IHsgdXNlV2l6YXJkIH0gZnJvbSAnLi4vLi4vLi4vd2l6YXJkL2luZGV4LmpzJ1xuaW1wb3J0IHsgV2l6YXJkRGlhbG9nTGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vd2l6YXJkL1dpemFyZERpYWxvZ0xheW91dC5qcydcbmltcG9ydCB7IENvbG9yUGlja2VyIH0gZnJvbSAnLi4vLi4vQ29sb3JQaWNrZXIuanMnXG5pbXBvcnQgdHlwZSB7IEFnZW50V2l6YXJkRGF0YSB9IGZyb20gJy4uL3R5cGVzLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gQ29sb3JTdGVwKCk6IFJlYWN0Tm9kZSB7XG4gIGNvbnN0IHsgZ29OZXh0LCBnb0JhY2ssIHVwZGF0ZVdpemFyZERhdGEsIHdpemFyZERhdGEgfSA9XG4gICAgdXNlV2l6YXJkPEFnZW50V2l6YXJkRGF0YT4oKVxuXG4gIC8vIEhhbmRsZSBlc2NhcGUga2V5IC0gQ29sb3JQaWNrZXIgaGFuZGxlcyBpdHMgb3duIGVzY2FwZSBpbnRlcm5hbGx5XG4gIHVzZUtleWJpbmRpbmcoJ2NvbmZpcm06bm8nLCBnb0JhY2ssIHsgY29udGV4dDogJ0NvbmZpcm1hdGlvbicgfSlcblxuICBjb25zdCBoYW5kbGVDb25maXJtID0gKGNvbG9yPzogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgdXBkYXRlV2l6YXJkRGF0YSh7XG4gICAgICBzZWxlY3RlZENvbG9yOiBjb2xvcixcbiAgICAgIC8vIFByZXBhcmUgZmluYWwgYWdlbnQgZm9yIGNvbmZpcm1hdGlvblxuICAgICAgZmluYWxBZ2VudDoge1xuICAgICAgICBhZ2VudFR5cGU6IHdpemFyZERhdGEuYWdlbnRUeXBlISxcbiAgICAgICAgd2hlblRvVXNlOiB3aXphcmREYXRhLndoZW5Ub1VzZSEsXG4gICAgICAgIGdldFN5c3RlbVByb21wdDogKCkgPT4gd2l6YXJkRGF0YS5zeXN0ZW1Qcm9tcHQhLFxuICAgICAgICB0b29sczogd2l6YXJkRGF0YS5zZWxlY3RlZFRvb2xzLFxuICAgICAgICAuLi4od2l6YXJkRGF0YS5zZWxlY3RlZE1vZGVsXG4gICAgICAgICAgPyB7IG1vZGVsOiB3aXphcmREYXRhLnNlbGVjdGVkTW9kZWwgfVxuICAgICAgICAgIDoge30pLFxuICAgICAgICAuLi4oY29sb3IgPyB7IGNvbG9yOiBjb2xvciBhcyBBZ2VudENvbG9yTmFtZSB9IDoge30pLFxuICAgICAgICBzb3VyY2U6IHdpemFyZERhdGEubG9jYXRpb24hLFxuICAgICAgfSxcbiAgICB9KVxuICAgIGdvTmV4dCgpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxXaXphcmREaWFsb2dMYXlvdXRcbiAgICAgIHN1YnRpdGxlPVwiQ2hvb3NlIGJhY2tncm91bmQgY29sb3JcIlxuICAgICAgZm9vdGVyVGV4dD17XG4gICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAgPEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwi4oaR4oaTXCIgYWN0aW9uPVwibmF2aWdhdGVcIiAvPlxuICAgICAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cIkVudGVyXCIgYWN0aW9uPVwic2VsZWN0XCIgLz5cbiAgICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgICBhY3Rpb249XCJjb25maXJtOm5vXCJcbiAgICAgICAgICAgIGNvbnRleHQ9XCJDb25maXJtYXRpb25cIlxuICAgICAgICAgICAgZmFsbGJhY2s9XCJFc2NcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJnbyBiYWNrXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0J5bGluZT5cbiAgICAgIH1cbiAgICA+XG4gICAgICA8Qm94PlxuICAgICAgICA8Q29sb3JQaWNrZXJcbiAgICAgICAgICBhZ2VudE5hbWU9e3dpemFyZERhdGEuYWdlbnRUeXBlIHx8ICdhZ2VudCd9XG4gICAgICAgICAgY3VycmVudENvbG9yPVwiYXV0b21hdGljXCJcbiAgICAgICAgICBvbkNvbmZpcm09e2hhbmRsZUNvbmZpcm19XG4gICAgICAgIC8+XG4gICAgICA8L0JveD5cbiAgICA8L1dpemFyZERpYWxvZ0xheW91dD5cbiAgKVxufVxuIiwgImltcG9ydCB0eXBlIHsgVG9vbHMgfSBmcm9tICcuLi8uLi9Ub29sLmpzJ1xuaW1wb3J0IHsgcmVzb2x2ZUFnZW50VG9vbHMgfSBmcm9tICcuLi8uLi90b29scy9BZ2VudFRvb2wvYWdlbnRUb29sVXRpbHMuanMnXG5pbXBvcnQgdHlwZSB7XG4gIEFnZW50RGVmaW5pdGlvbixcbiAgQ3VzdG9tQWdlbnREZWZpbml0aW9uLFxufSBmcm9tICcuLi8uLi90b29scy9BZ2VudFRvb2wvbG9hZEFnZW50c0Rpci5qcydcbmltcG9ydCB7IGdldEFnZW50U291cmNlRGlzcGxheU5hbWUgfSBmcm9tICcuL3V0aWxzLmpzJ1xuXG5leHBvcnQgdHlwZSBBZ2VudFZhbGlkYXRpb25SZXN1bHQgPSB7XG4gIGlzVmFsaWQ6IGJvb2xlYW5cbiAgZXJyb3JzOiBzdHJpbmdbXVxuICB3YXJuaW5nczogc3RyaW5nW11cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQWdlbnRUeXBlKGFnZW50VHlwZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmICghYWdlbnRUeXBlKSB7XG4gICAgcmV0dXJuICdBZ2VudCB0eXBlIGlzIHJlcXVpcmVkJ1xuICB9XG5cbiAgaWYgKCEvXlthLXpBLVowLTldW2EtekEtWjAtOS1dKlthLXpBLVowLTldJC8udGVzdChhZ2VudFR5cGUpKSB7XG4gICAgcmV0dXJuICdBZ2VudCB0eXBlIG11c3Qgc3RhcnQgYW5kIGVuZCB3aXRoIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzIGFuZCBjb250YWluIG9ubHkgbGV0dGVycywgbnVtYmVycywgYW5kIGh5cGhlbnMnXG4gIH1cblxuICBpZiAoYWdlbnRUeXBlLmxlbmd0aCA8IDMpIHtcbiAgICByZXR1cm4gJ0FnZW50IHR5cGUgbXVzdCBiZSBhdCBsZWFzdCAzIGNoYXJhY3RlcnMgbG9uZydcbiAgfVxuXG4gIGlmIChhZ2VudFR5cGUubGVuZ3RoID4gNTApIHtcbiAgICByZXR1cm4gJ0FnZW50IHR5cGUgbXVzdCBiZSBsZXNzIHRoYW4gNTAgY2hhcmFjdGVycydcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUFnZW50KFxuICBhZ2VudDogT21pdDxDdXN0b21BZ2VudERlZmluaXRpb24sICdsb2NhdGlvbic+LFxuICBhdmFpbGFibGVUb29sczogVG9vbHMsXG4gIGV4aXN0aW5nQWdlbnRzOiBBZ2VudERlZmluaXRpb25bXSxcbik6IEFnZW50VmFsaWRhdGlvblJlc3VsdCB7XG4gIGNvbnN0IGVycm9yczogc3RyaW5nW10gPSBbXVxuICBjb25zdCB3YXJuaW5nczogc3RyaW5nW10gPSBbXVxuXG4gIC8vIFZhbGlkYXRlIGFnZW50IHR5cGVcbiAgaWYgKCFhZ2VudC5hZ2VudFR5cGUpIHtcbiAgICBlcnJvcnMucHVzaCgnQWdlbnQgdHlwZSBpcyByZXF1aXJlZCcpXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdHlwZUVycm9yID0gdmFsaWRhdGVBZ2VudFR5cGUoYWdlbnQuYWdlbnRUeXBlKVxuICAgIGlmICh0eXBlRXJyb3IpIHtcbiAgICAgIGVycm9ycy5wdXNoKHR5cGVFcnJvcilcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgZHVwbGljYXRlcyAoZXhjbHVkaW5nIHNlbGYgZm9yIGVkaXRpbmcpXG4gICAgY29uc3QgZHVwbGljYXRlID0gZXhpc3RpbmdBZ2VudHMuZmluZChcbiAgICAgIGEgPT4gYS5hZ2VudFR5cGUgPT09IGFnZW50LmFnZW50VHlwZSAmJiBhLnNvdXJjZSAhPT0gYWdlbnQuc291cmNlLFxuICAgIClcbiAgICBpZiAoZHVwbGljYXRlKSB7XG4gICAgICBlcnJvcnMucHVzaChcbiAgICAgICAgYEFnZW50IHR5cGUgXCIke2FnZW50LmFnZW50VHlwZX1cIiBhbHJlYWR5IGV4aXN0cyBpbiAke2dldEFnZW50U291cmNlRGlzcGxheU5hbWUoZHVwbGljYXRlLnNvdXJjZSl9YCxcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICAvLyBWYWxpZGF0ZSBkZXNjcmlwdGlvblxuICBpZiAoIWFnZW50LndoZW5Ub1VzZSkge1xuICAgIGVycm9ycy5wdXNoKCdEZXNjcmlwdGlvbiAoZGVzY3JpcHRpb24pIGlzIHJlcXVpcmVkJylcbiAgfSBlbHNlIGlmIChhZ2VudC53aGVuVG9Vc2UubGVuZ3RoIDwgMTApIHtcbiAgICB3YXJuaW5ncy5wdXNoKFxuICAgICAgJ0Rlc2NyaXB0aW9uIHNob3VsZCBiZSBtb3JlIGRlc2NyaXB0aXZlIChhdCBsZWFzdCAxMCBjaGFyYWN0ZXJzKScsXG4gICAgKVxuICB9IGVsc2UgaWYgKGFnZW50LndoZW5Ub1VzZS5sZW5ndGggPiA1MDAwKSB7XG4gICAgd2FybmluZ3MucHVzaCgnRGVzY3JpcHRpb24gaXMgdmVyeSBsb25nIChvdmVyIDUwMDAgY2hhcmFjdGVycyknKVxuICB9XG5cbiAgLy8gVmFsaWRhdGUgdG9vbHNcbiAgaWYgKGFnZW50LnRvb2xzICE9PSB1bmRlZmluZWQgJiYgIUFycmF5LmlzQXJyYXkoYWdlbnQudG9vbHMpKSB7XG4gICAgZXJyb3JzLnB1c2goJ1Rvb2xzIG11c3QgYmUgYW4gYXJyYXknKVxuICB9IGVsc2Uge1xuICAgIGlmIChhZ2VudC50b29scyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB3YXJuaW5ncy5wdXNoKCdBZ2VudCBoYXMgYWNjZXNzIHRvIGFsbCB0b29scycpXG4gICAgfSBlbHNlIGlmIChhZ2VudC50b29scy5sZW5ndGggPT09IDApIHtcbiAgICAgIHdhcm5pbmdzLnB1c2goXG4gICAgICAgICdObyB0b29scyBzZWxlY3RlZCAtIGFnZW50IHdpbGwgaGF2ZSB2ZXJ5IGxpbWl0ZWQgY2FwYWJpbGl0aWVzJyxcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgaW52YWxpZCB0b29sc1xuICAgIGNvbnN0IHJlc29sdmVkVG9vbHMgPSByZXNvbHZlQWdlbnRUb29scyhhZ2VudCwgYXZhaWxhYmxlVG9vbHMsIGZhbHNlKVxuXG4gICAgaWYgKHJlc29sdmVkVG9vbHMuaW52YWxpZFRvb2xzLmxlbmd0aCA+IDApIHtcbiAgICAgIGVycm9ycy5wdXNoKGBJbnZhbGlkIHRvb2xzOiAke3Jlc29sdmVkVG9vbHMuaW52YWxpZFRvb2xzLmpvaW4oJywgJyl9YClcbiAgICB9XG4gIH1cblxuICAvLyBWYWxpZGF0ZSBzeXN0ZW0gcHJvbXB0XG4gIGNvbnN0IHN5c3RlbVByb21wdCA9IGFnZW50LmdldFN5c3RlbVByb21wdCgpXG4gIGlmICghc3lzdGVtUHJvbXB0KSB7XG4gICAgZXJyb3JzLnB1c2goJ1N5c3RlbSBwcm9tcHQgaXMgcmVxdWlyZWQnKVxuICB9IGVsc2UgaWYgKHN5c3RlbVByb21wdC5sZW5ndGggPCAyMCkge1xuICAgIGVycm9ycy5wdXNoKCdTeXN0ZW0gcHJvbXB0IGlzIHRvbyBzaG9ydCAobWluaW11bSAyMCBjaGFyYWN0ZXJzKScpXG4gIH0gZWxzZSBpZiAoc3lzdGVtUHJvbXB0Lmxlbmd0aCA+IDEwMDAwKSB7XG4gICAgd2FybmluZ3MucHVzaCgnU3lzdGVtIHByb21wdCBpcyB2ZXJ5IGxvbmcgKG92ZXIgMTAsMDAwIGNoYXJhY3RlcnMpJylcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaXNWYWxpZDogZXJyb3JzLmxlbmd0aCA9PT0gMCxcbiAgICBlcnJvcnMsXG4gICAgd2FybmluZ3MsXG4gIH1cbn1cbiIsICJpbXBvcnQgUmVhY3QsIHsgdHlwZSBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgS2V5Ym9hcmRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2luay9ldmVudHMva2V5Ym9hcmQtZXZlbnQuanMnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9pbmsuanMnXG5pbXBvcnQgeyB1c2VLZXliaW5kaW5nIH0gZnJvbSAnLi4vLi4vLi4vLi4va2V5YmluZGluZ3MvdXNlS2V5YmluZGluZy5qcydcbmltcG9ydCB7IGlzQXV0b01lbW9yeUVuYWJsZWQgfSBmcm9tICcuLi8uLi8uLi8uLi9tZW1kaXIvcGF0aHMuanMnXG5pbXBvcnQgdHlwZSB7IFRvb2xzIH0gZnJvbSAnLi4vLi4vLi4vLi4vVG9vbC5qcydcbmltcG9ydCB7IGdldE1lbW9yeVNjb3BlRGlzcGxheSB9IGZyb20gJy4uLy4uLy4uLy4uL3Rvb2xzL0FnZW50VG9vbC9hZ2VudE1lbW9yeS5qcydcbmltcG9ydCB0eXBlIHsgQWdlbnREZWZpbml0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vdG9vbHMvQWdlbnRUb29sL2xvYWRBZ2VudHNEaXIuanMnXG5pbXBvcnQgeyB0cnVuY2F0ZVRvV2lkdGggfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9mb3JtYXQuanMnXG5pbXBvcnQgeyBnZXRBZ2VudE1vZGVsRGlzcGxheSB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL21vZGVsL2FnZW50LmpzJ1xuaW1wb3J0IHsgQ29uZmlndXJhYmxlU2hvcnRjdXRIaW50IH0gZnJvbSAnLi4vLi4vLi4vQ29uZmlndXJhYmxlU2hvcnRjdXRIaW50LmpzJ1xuaW1wb3J0IHsgQnlsaW5lIH0gZnJvbSAnLi4vLi4vLi4vZGVzaWduLXN5c3RlbS9CeWxpbmUuanMnXG5pbXBvcnQgeyBLZXlib2FyZFNob3J0Y3V0SGludCB9IGZyb20gJy4uLy4uLy4uL2Rlc2lnbi1zeXN0ZW0vS2V5Ym9hcmRTaG9ydGN1dEhpbnQuanMnXG5pbXBvcnQgeyB1c2VXaXphcmQgfSBmcm9tICcuLi8uLi8uLi93aXphcmQvaW5kZXguanMnXG5pbXBvcnQgeyBXaXphcmREaWFsb2dMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi93aXphcmQvV2l6YXJkRGlhbG9nTGF5b3V0LmpzJ1xuaW1wb3J0IHsgZ2V0TmV3UmVsYXRpdmVBZ2VudEZpbGVQYXRoIH0gZnJvbSAnLi4vLi4vYWdlbnRGaWxlVXRpbHMuanMnXG5pbXBvcnQgeyB2YWxpZGF0ZUFnZW50IH0gZnJvbSAnLi4vLi4vdmFsaWRhdGVBZ2VudC5qcydcbmltcG9ydCB0eXBlIHsgQWdlbnRXaXphcmREYXRhIH0gZnJvbSAnLi4vdHlwZXMuanMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRvb2xzOiBUb29sc1xuICBleGlzdGluZ0FnZW50czogQWdlbnREZWZpbml0aW9uW11cbiAgb25TYXZlOiAoKSA9PiB2b2lkXG4gIG9uU2F2ZUFuZEVkaXQ6ICgpID0+IHZvaWRcbiAgZXJyb3I/OiBzdHJpbmcgfCBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDb25maXJtU3RlcCh7XG4gIHRvb2xzLFxuICBleGlzdGluZ0FnZW50cyxcbiAgb25TYXZlLFxuICBvblNhdmVBbmRFZGl0LFxuICBlcnJvcixcbn06IFByb3BzKTogUmVhY3ROb2RlIHtcbiAgY29uc3QgeyBnb0JhY2ssIHdpemFyZERhdGEgfSA9IHVzZVdpemFyZDxBZ2VudFdpemFyZERhdGE+KClcblxuICB1c2VLZXliaW5kaW5nKCdjb25maXJtOm5vJywgZ29CYWNrLCB7IGNvbnRleHQ6ICdDb25maXJtYXRpb24nIH0pXG5cbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAncycgfHwgZS5rZXkgPT09ICdyZXR1cm4nKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIG9uU2F2ZSgpXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ2UnKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIG9uU2F2ZUFuZEVkaXQoKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGFnZW50ID0gd2l6YXJkRGF0YS5maW5hbEFnZW50IVxuICBjb25zdCB2YWxpZGF0aW9uID0gdmFsaWRhdGVBZ2VudChhZ2VudCwgdG9vbHMsIGV4aXN0aW5nQWdlbnRzKVxuXG4gIGNvbnN0IHN5c3RlbVByb21wdFByZXZpZXcgPSB0cnVuY2F0ZVRvV2lkdGgoYWdlbnQuZ2V0U3lzdGVtUHJvbXB0KCksIDI0MClcbiAgY29uc3Qgd2hlblRvVXNlUHJldmlldyA9IHRydW5jYXRlVG9XaWR0aChhZ2VudC53aGVuVG9Vc2UsIDI0MClcblxuICBjb25zdCBnZXRUb29sc0Rpc3BsYXkgPSAodG9vbE5hbWVzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCk6IHN0cmluZyA9PiB7XG4gICAgLy8gdW5kZWZpbmVkIG1lYW5zIFwiYWxsIHRvb2xzXCIgcGVyIFBSIHNlbWFudGljXG4gICAgaWYgKHRvb2xOYW1lcyA9PT0gdW5kZWZpbmVkKSByZXR1cm4gJ0FsbCB0b29scydcbiAgICBpZiAodG9vbE5hbWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuICdOb25lJ1xuICAgIGlmICh0b29sTmFtZXMubGVuZ3RoID09PSAxKSByZXR1cm4gdG9vbE5hbWVzWzBdIHx8ICdOb25lJ1xuICAgIGlmICh0b29sTmFtZXMubGVuZ3RoID09PSAyKSByZXR1cm4gdG9vbE5hbWVzLmpvaW4oJyBhbmQgJylcbiAgICByZXR1cm4gYCR7dG9vbE5hbWVzLnNsaWNlKDAsIC0xKS5qb2luKCcsICcpfSwgYW5kICR7dG9vbE5hbWVzW3Rvb2xOYW1lcy5sZW5ndGggLSAxXX1gXG4gIH1cblxuICAvLyBDb21wdXRlIG1lbW9yeSBkaXNwbGF5IG91dHNpZGUgSlNYXG4gIGNvbnN0IG1lbW9yeURpc3BsYXlFbGVtZW50ID0gaXNBdXRvTWVtb3J5RW5hYmxlZCgpID8gKFxuICAgIDxUZXh0PlxuICAgICAgPFRleHQgYm9sZD5NZW1vcnk8L1RleHQ+OiB7Z2V0TWVtb3J5U2NvcGVEaXNwbGF5KGFnZW50Lm1lbW9yeSl9XG4gICAgPC9UZXh0PlxuICApIDogbnVsbFxuXG4gIHJldHVybiAoXG4gICAgPFdpemFyZERpYWxvZ0xheW91dFxuICAgICAgc3VidGl0bGU9XCJDb25maXJtIGFuZCBzYXZlXCJcbiAgICAgIGZvb3RlclRleHQ9e1xuICAgICAgICA8QnlsaW5lPlxuICAgICAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cInMvRW50ZXJcIiBhY3Rpb249XCJzYXZlXCIgLz5cbiAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCJlXCIgYWN0aW9uPVwiZWRpdCBpbiB5b3VyIGVkaXRvclwiIC8+XG4gICAgICAgICAgPENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludFxuICAgICAgICAgICAgYWN0aW9uPVwiY29uZmlybTpub1wiXG4gICAgICAgICAgICBjb250ZXh0PVwiQ29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgIGZhbGxiYWNrPVwiRXNjXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiY2FuY2VsXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0J5bGluZT5cbiAgICAgIH1cbiAgICA+XG4gICAgICA8Qm94XG4gICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICAgID5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRleHQgYm9sZD5OYW1lPC9UZXh0Pjoge2FnZW50LmFnZW50VHlwZX1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VGV4dCBib2xkPkxvY2F0aW9uPC9UZXh0Pjp7JyAnfVxuICAgICAgICAgIHtnZXROZXdSZWxhdGl2ZUFnZW50RmlsZVBhdGgoe1xuICAgICAgICAgICAgc291cmNlOiB3aXphcmREYXRhLmxvY2F0aW9uISxcbiAgICAgICAgICAgIGFnZW50VHlwZTogYWdlbnQuYWdlbnRUeXBlLFxuICAgICAgICAgIH0pfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUZXh0IGJvbGQ+VG9vbHM8L1RleHQ+OiB7Z2V0VG9vbHNEaXNwbGF5KGFnZW50LnRvb2xzKX1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VGV4dCBib2xkPk1vZGVsPC9UZXh0Pjoge2dldEFnZW50TW9kZWxEaXNwbGF5KGFnZW50Lm1vZGVsKX1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICB7bWVtb3J5RGlzcGxheUVsZW1lbnR9XG5cbiAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgPFRleHQgYm9sZD5EZXNjcmlwdGlvbjwvVGV4dD4gKHRlbGxzIENsYXVkZSB3aGVuIHRvIHVzZSB0aGlzIGFnZW50KTpcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IG1hcmdpbkxlZnQ9ezJ9IG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgPFRleHQ+e3doZW5Ub1VzZVByZXZpZXd9PC9UZXh0PlxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICA8VGV4dCBib2xkPlN5c3RlbSBwcm9tcHQ8L1RleHQ+OlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggbWFyZ2luTGVmdD17Mn0gbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICA8VGV4dD57c3lzdGVtUHJvbXB0UHJldmlld308L1RleHQ+XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIHt2YWxpZGF0aW9uLndhcm5pbmdzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIj5XYXJuaW5nczo8L1RleHQ+XG4gICAgICAgICAgICB7dmFsaWRhdGlvbi53YXJuaW5ncy5tYXAoKHdhcm5pbmcsIGkpID0+IChcbiAgICAgICAgICAgICAgPFRleHQga2V5PXtpfSBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgIOKAoiB7d2FybmluZ31cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG5cbiAgICAgICAge3ZhbGlkYXRpb24uZXJyb3JzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8VGV4dCBjb2xvcj1cImVycm9yXCI+RXJyb3JzOjwvVGV4dD5cbiAgICAgICAgICAgIHt2YWxpZGF0aW9uLmVycm9ycy5tYXAoKGVyciwgaSkgPT4gKFxuICAgICAgICAgICAgICA8VGV4dCBrZXk9e2l9IGNvbG9yPVwiZXJyb3JcIj5cbiAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgIOKAoiB7ZXJyfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cblxuICAgICAgICB7ZXJyb3IgJiYgKFxuICAgICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZXJyb3JcIj57ZXJyb3J9PC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuXG4gICAgICAgIDxCb3ggbWFyZ2luVG9wPXsyfT5cbiAgICAgICAgICA8VGV4dCBjb2xvcj1cInN1Y2Nlc3NcIj5cbiAgICAgICAgICAgIFByZXNzIDxUZXh0IGJvbGQ+czwvVGV4dD4gb3IgPFRleHQgYm9sZD5FbnRlcjwvVGV4dD4gdG8gc2F2ZSx7JyAnfVxuICAgICAgICAgICAgPFRleHQgYm9sZD5lPC9UZXh0PiB0byBzYXZlIGFuZCBlZGl0XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvV2l6YXJkRGlhbG9nTGF5b3V0PlxuICApXG59XG4iLCAiaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJ1xuaW1wb3J0IFJlYWN0LCB7IHR5cGUgUmVhY3ROb2RlLCB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHR5cGUgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgbG9nRXZlbnQsXG59IGZyb20gJ3NyYy9zZXJ2aWNlcy9hbmFseXRpY3MvaW5kZXguanMnXG5pbXBvcnQgeyB1c2VTZXRBcHBTdGF0ZSB9IGZyb20gJ3NyYy9zdGF0ZS9BcHBTdGF0ZS5qcydcbmltcG9ydCB0eXBlIHsgVG9vbHMgfSBmcm9tICcuLi8uLi8uLi8uLi9Ub29sLmpzJ1xuaW1wb3J0IHR5cGUgeyBBZ2VudERlZmluaXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi90b29scy9BZ2VudFRvb2wvbG9hZEFnZW50c0Rpci5qcydcbmltcG9ydCB7IGdldEFjdGl2ZUFnZW50c0Zyb21MaXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vdG9vbHMvQWdlbnRUb29sL2xvYWRBZ2VudHNEaXIuanMnXG5pbXBvcnQgeyBlZGl0RmlsZUluRWRpdG9yIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvcHJvbXB0RWRpdG9yLmpzJ1xuaW1wb3J0IHsgdXNlV2l6YXJkIH0gZnJvbSAnLi4vLi4vLi4vd2l6YXJkL2luZGV4LmpzJ1xuaW1wb3J0IHsgZ2V0TmV3QWdlbnRGaWxlUGF0aCwgc2F2ZUFnZW50VG9GaWxlIH0gZnJvbSAnLi4vLi4vYWdlbnRGaWxlVXRpbHMuanMnXG5pbXBvcnQgdHlwZSB7IEFnZW50V2l6YXJkRGF0YSB9IGZyb20gJy4uL3R5cGVzLmpzJ1xuaW1wb3J0IHsgQ29uZmlybVN0ZXAgfSBmcm9tICcuL0NvbmZpcm1TdGVwLmpzJ1xuXG50eXBlIFByb3BzID0ge1xuICB0b29sczogVG9vbHNcbiAgZXhpc3RpbmdBZ2VudHM6IEFnZW50RGVmaW5pdGlvbltdXG4gIG9uQ29tcGxldGU6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENvbmZpcm1TdGVwV3JhcHBlcih7XG4gIHRvb2xzLFxuICBleGlzdGluZ0FnZW50cyxcbiAgb25Db21wbGV0ZSxcbn06IFByb3BzKTogUmVhY3ROb2RlIHtcbiAgY29uc3QgeyB3aXphcmREYXRhIH0gPSB1c2VXaXphcmQ8QWdlbnRXaXphcmREYXRhPigpXG4gIGNvbnN0IFtzYXZlRXJyb3IsIHNldFNhdmVFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuICBjb25zdCBzZXRBcHBTdGF0ZSA9IHVzZVNldEFwcFN0YXRlKClcblxuICBjb25zdCBzYXZlQWdlbnQgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyAob3BlbkluRWRpdG9yOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICBpZiAoIXdpemFyZERhdGE/LmZpbmFsQWdlbnQpIHJldHVyblxuXG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBzYXZlQWdlbnRUb0ZpbGUoXG4gICAgICAgICAgd2l6YXJkRGF0YS5sb2NhdGlvbiEsXG4gICAgICAgICAgd2l6YXJkRGF0YS5maW5hbEFnZW50LmFnZW50VHlwZSxcbiAgICAgICAgICB3aXphcmREYXRhLmZpbmFsQWdlbnQud2hlblRvVXNlLFxuICAgICAgICAgIHdpemFyZERhdGEuZmluYWxBZ2VudC50b29scyxcbiAgICAgICAgICB3aXphcmREYXRhLmZpbmFsQWdlbnQuZ2V0U3lzdGVtUHJvbXB0KCksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICB3aXphcmREYXRhLmZpbmFsQWdlbnQuY29sb3IsXG4gICAgICAgICAgd2l6YXJkRGF0YS5maW5hbEFnZW50Lm1vZGVsLFxuICAgICAgICAgIHdpemFyZERhdGEuZmluYWxBZ2VudC5tZW1vcnksXG4gICAgICAgIClcblxuICAgICAgICBzZXRBcHBTdGF0ZShzdGF0ZSA9PiB7XG4gICAgICAgICAgaWYgKCF3aXphcmREYXRhLmZpbmFsQWdlbnQpIHJldHVybiBzdGF0ZVxuXG4gICAgICAgICAgY29uc3QgYWxsQWdlbnRzID0gc3RhdGUuYWdlbnREZWZpbml0aW9ucy5hbGxBZ2VudHMuY29uY2F0KFxuICAgICAgICAgICAgd2l6YXJkRGF0YS5maW5hbEFnZW50LFxuICAgICAgICAgIClcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBhZ2VudERlZmluaXRpb25zOiB7XG4gICAgICAgICAgICAgIC4uLnN0YXRlLmFnZW50RGVmaW5pdGlvbnMsXG4gICAgICAgICAgICAgIGFjdGl2ZUFnZW50czogZ2V0QWN0aXZlQWdlbnRzRnJvbUxpc3QoYWxsQWdlbnRzKSxcbiAgICAgICAgICAgICAgYWxsQWdlbnRzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKG9wZW5JbkVkaXRvcikge1xuICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZ2V0TmV3QWdlbnRGaWxlUGF0aCh7XG4gICAgICAgICAgICBzb3VyY2U6IHdpemFyZERhdGEubG9jYXRpb24hLFxuICAgICAgICAgICAgYWdlbnRUeXBlOiB3aXphcmREYXRhLmZpbmFsQWdlbnQuYWdlbnRUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgYXdhaXQgZWRpdEZpbGVJbkVkaXRvcihmaWxlUGF0aClcbiAgICAgICAgfVxuXG4gICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9hZ2VudF9jcmVhdGVkJywge1xuICAgICAgICAgIGFnZW50X3R5cGU6IHdpemFyZERhdGEuZmluYWxBZ2VudC5hZ2VudFR5cGUsXG4gICAgICAgICAgZ2VuZXJhdGlvbl9tZXRob2Q6IHdpemFyZERhdGEud2FzR2VuZXJhdGVkID8gJ2dlbmVyYXRlZCcgOiAnbWFudWFsJyxcbiAgICAgICAgICBzb3VyY2U6IHdpemFyZERhdGEubG9jYXRpb24hLFxuICAgICAgICAgIHRvb2xfY291bnQ6IHdpemFyZERhdGEuZmluYWxBZ2VudC50b29scz8ubGVuZ3RoID8/ICdhbGwnLFxuICAgICAgICAgIGhhc19jdXN0b21fbW9kZWw6ICEhd2l6YXJkRGF0YS5maW5hbEFnZW50Lm1vZGVsLFxuICAgICAgICAgIGhhc19jdXN0b21fY29sb3I6ICEhd2l6YXJkRGF0YS5maW5hbEFnZW50LmNvbG9yLFxuICAgICAgICAgIGhhc19tZW1vcnk6ICEhd2l6YXJkRGF0YS5maW5hbEFnZW50Lm1lbW9yeSxcbiAgICAgICAgICBtZW1vcnlfc2NvcGU6IHdpemFyZERhdGEuZmluYWxBZ2VudC5tZW1vcnkgPz8gJ25vbmUnLFxuICAgICAgICAgIC4uLihvcGVuSW5FZGl0b3IgPyB7IG9wZW5lZF9pbl9lZGl0b3I6IHRydWUgfSA6IHt9KSxcbiAgICAgICAgfSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTKVxuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBvcGVuSW5FZGl0b3JcbiAgICAgICAgICA/IGBDcmVhdGVkIGFnZW50OiAke2NoYWxrLmJvbGQod2l6YXJkRGF0YS5maW5hbEFnZW50LmFnZW50VHlwZSl9IGFuZCBvcGVuZWQgaW4gZWRpdG9yLiBgICtcbiAgICAgICAgICAgIGBJZiB5b3UgbWFkZSBlZGl0cywgcmVzdGFydCB0byBsb2FkIHRoZSBsYXRlc3QgdmVyc2lvbi5gXG4gICAgICAgICAgOiBgQ3JlYXRlZCBhZ2VudDogJHtjaGFsay5ib2xkKHdpemFyZERhdGEuZmluYWxBZ2VudC5hZ2VudFR5cGUpfWBcbiAgICAgICAgb25Db21wbGV0ZShtZXNzYWdlKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHNldFNhdmVFcnJvcihcbiAgICAgICAgICBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBzYXZlIGFnZW50JyxcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW3dpemFyZERhdGEsIG9uQ29tcGxldGUsIHNldEFwcFN0YXRlXSxcbiAgKVxuXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSB1c2VDYWxsYmFjaygoKSA9PiBzYXZlQWdlbnQoZmFsc2UpLCBbc2F2ZUFnZW50XSlcblxuICBjb25zdCBoYW5kbGVTYXZlQW5kRWRpdCA9IHVzZUNhbGxiYWNrKCgpID0+IHNhdmVBZ2VudCh0cnVlKSwgW3NhdmVBZ2VudF0pXG5cbiAgcmV0dXJuIChcbiAgICA8Q29uZmlybVN0ZXBcbiAgICAgIHRvb2xzPXt0b29sc31cbiAgICAgIGV4aXN0aW5nQWdlbnRzPXtleGlzdGluZ0FnZW50c31cbiAgICAgIG9uU2F2ZT17aGFuZGxlU2F2ZX1cbiAgICAgIG9uU2F2ZUFuZEVkaXQ9e2hhbmRsZVNhdmVBbmRFZGl0fVxuICAgICAgZXJyb3I9e3NhdmVFcnJvcn1cbiAgICAvPlxuICApXG59XG4iLCAiaW1wb3J0IFJlYWN0LCB7IHR5cGUgUmVhY3ROb2RlLCB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uL2luay5qcydcbmltcG9ydCB7IHVzZUtleWJpbmRpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi9rZXliaW5kaW5ncy91c2VLZXliaW5kaW5nLmpzJ1xuaW1wb3J0IHsgZWRpdFByb21wdEluRWRpdG9yIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvcHJvbXB0RWRpdG9yLmpzJ1xuaW1wb3J0IHsgQ29uZmlndXJhYmxlU2hvcnRjdXRIaW50IH0gZnJvbSAnLi4vLi4vLi4vQ29uZmlndXJhYmxlU2hvcnRjdXRIaW50LmpzJ1xuaW1wb3J0IHsgQnlsaW5lIH0gZnJvbSAnLi4vLi4vLi4vZGVzaWduLXN5c3RlbS9CeWxpbmUuanMnXG5pbXBvcnQgeyBLZXlib2FyZFNob3J0Y3V0SGludCB9IGZyb20gJy4uLy4uLy4uL2Rlc2lnbi1zeXN0ZW0vS2V5Ym9hcmRTaG9ydGN1dEhpbnQuanMnXG5pbXBvcnQgVGV4dElucHV0IGZyb20gJy4uLy4uLy4uL1RleHRJbnB1dC5qcydcbmltcG9ydCB7IHVzZVdpemFyZCB9IGZyb20gJy4uLy4uLy4uL3dpemFyZC9pbmRleC5qcydcbmltcG9ydCB7IFdpemFyZERpYWxvZ0xheW91dCB9IGZyb20gJy4uLy4uLy4uL3dpemFyZC9XaXphcmREaWFsb2dMYXlvdXQuanMnXG5pbXBvcnQgdHlwZSB7IEFnZW50V2l6YXJkRGF0YSB9IGZyb20gJy4uL3R5cGVzLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gRGVzY3JpcHRpb25TdGVwKCk6IFJlYWN0Tm9kZSB7XG4gIGNvbnN0IHsgZ29OZXh0LCBnb0JhY2ssIHVwZGF0ZVdpemFyZERhdGEsIHdpemFyZERhdGEgfSA9XG4gICAgdXNlV2l6YXJkPEFnZW50V2l6YXJkRGF0YT4oKVxuICBjb25zdCBbd2hlblRvVXNlLCBzZXRXaGVuVG9Vc2VdID0gdXNlU3RhdGUod2l6YXJkRGF0YS53aGVuVG9Vc2UgfHwgJycpXG4gIGNvbnN0IFtjdXJzb3JPZmZzZXQsIHNldEN1cnNvck9mZnNldF0gPSB1c2VTdGF0ZSh3aGVuVG9Vc2UubGVuZ3RoKVxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG5cbiAgLy8gSGFuZGxlIGVzY2FwZSBrZXkgLSB1c2UgU2V0dGluZ3MgY29udGV4dCBzbyAnbicga2V5IGRvZXNuJ3QgY2FuY2VsIChhbGxvd3MgdHlwaW5nICduJyBpbiBpbnB1dClcbiAgdXNlS2V5YmluZGluZygnY29uZmlybTpubycsIGdvQmFjaywgeyBjb250ZXh0OiAnU2V0dGluZ3MnIH0pXG5cbiAgY29uc3QgaGFuZGxlRXh0ZXJuYWxFZGl0b3IgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZWRpdFByb21wdEluRWRpdG9yKHdoZW5Ub1VzZSlcbiAgICBpZiAocmVzdWx0LmNvbnRlbnQgIT09IG51bGwpIHtcbiAgICAgIHNldFdoZW5Ub1VzZShyZXN1bHQuY29udGVudClcbiAgICAgIHNldEN1cnNvck9mZnNldChyZXN1bHQuY29udGVudC5sZW5ndGgpXG4gICAgfVxuICB9LCBbd2hlblRvVXNlXSlcblxuICB1c2VLZXliaW5kaW5nKCdjaGF0OmV4dGVybmFsRWRpdG9yJywgaGFuZGxlRXh0ZXJuYWxFZGl0b3IsIHtcbiAgICBjb250ZXh0OiAnQ2hhdCcsXG4gIH0pXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKHZhbHVlOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICBjb25zdCB0cmltbWVkVmFsdWUgPSB2YWx1ZS50cmltKClcbiAgICBpZiAoIXRyaW1tZWRWYWx1ZSkge1xuICAgICAgc2V0RXJyb3IoJ0Rlc2NyaXB0aW9uIGlzIHJlcXVpcmVkJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHNldEVycm9yKG51bGwpXG4gICAgdXBkYXRlV2l6YXJkRGF0YSh7IHdoZW5Ub1VzZTogdHJpbW1lZFZhbHVlIH0pXG4gICAgZ29OZXh0KClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFdpemFyZERpYWxvZ0xheW91dFxuICAgICAgc3VidGl0bGU9XCJEZXNjcmlwdGlvbiAodGVsbCBDbGF1ZGUgd2hlbiB0byB1c2UgdGhpcyBhZ2VudClcIlxuICAgICAgZm9vdGVyVGV4dD17XG4gICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAgPEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwiVHlwZVwiIGFjdGlvbj1cImVudGVyIHRleHRcIiAvPlxuICAgICAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cIkVudGVyXCIgYWN0aW9uPVwiY29udGludWVcIiAvPlxuICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgIGFjdGlvbj1cImNoYXQ6ZXh0ZXJuYWxFZGl0b3JcIlxuICAgICAgICAgICAgY29udGV4dD1cIkNoYXRcIlxuICAgICAgICAgICAgZmFsbGJhY2s9XCJjdHJsK2dcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJvcGVuIGluIGVkaXRvclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgICBhY3Rpb249XCJjb25maXJtOm5vXCJcbiAgICAgICAgICAgIGNvbnRleHQ9XCJTZXR0aW5nc1wiXG4gICAgICAgICAgICBmYWxsYmFjaz1cIkVzY1wiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cImdvIGJhY2tcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQnlsaW5lPlxuICAgICAgfVxuICAgID5cbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICA8VGV4dD5XaGVuIHNob3VsZCBDbGF1ZGUgdXNlIHRoaXMgYWdlbnQ/PC9UZXh0PlxuXG4gICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICB2YWx1ZT17d2hlblRvVXNlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3NldFdoZW5Ub1VzZX1cbiAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4sIHVzZSB0aGlzIGFnZW50IGFmdGVyIHlvdSdyZSBkb25lIHdyaXRpbmcgY29kZS4uLlwiXG4gICAgICAgICAgICBjb2x1bW5zPXs4MH1cbiAgICAgICAgICAgIGN1cnNvck9mZnNldD17Y3Vyc29yT2Zmc2V0fVxuICAgICAgICAgICAgb25DaGFuZ2VDdXJzb3JPZmZzZXQ9e3NldEN1cnNvck9mZnNldH1cbiAgICAgICAgICAgIGZvY3VzXG4gICAgICAgICAgICBzaG93Q3Vyc29yXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAge2Vycm9yICYmIChcbiAgICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgICA8VGV4dCBjb2xvcj1cImVycm9yXCI+e2Vycm9yfTwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIDwvV2l6YXJkRGlhbG9nTGF5b3V0PlxuICApXG59XG4iLCAiaW1wb3J0IHR5cGUgeyBDb250ZW50QmxvY2sgfSBmcm9tICdAYW50aHJvcGljLWFpL3Nkay9yZXNvdXJjZXMvaW5kZXgubWpzJ1xuaW1wb3J0IHsgZ2V0VXNlckNvbnRleHQgfSBmcm9tICdzcmMvY29udGV4dC5qcydcbmltcG9ydCB7IHF1ZXJ5TW9kZWxXaXRob3V0U3RyZWFtaW5nIH0gZnJvbSAnc3JjL3NlcnZpY2VzL2FwaS9jbGF1ZGUuanMnXG5pbXBvcnQgeyBnZXRFbXB0eVRvb2xQZXJtaXNzaW9uQ29udGV4dCB9IGZyb20gJ3NyYy9Ub29sLmpzJ1xuaW1wb3J0IHsgQUdFTlRfVE9PTF9OQU1FIH0gZnJvbSAnc3JjL3Rvb2xzL0FnZW50VG9vbC9jb25zdGFudHMuanMnXG5pbXBvcnQgeyBwcmVwZW5kVXNlckNvbnRleHQgfSBmcm9tICdzcmMvdXRpbHMvYXBpLmpzJ1xuaW1wb3J0IHtcbiAgY3JlYXRlVXNlck1lc3NhZ2UsXG4gIG5vcm1hbGl6ZU1lc3NhZ2VzRm9yQVBJLFxufSBmcm9tICdzcmMvdXRpbHMvbWVzc2FnZXMuanMnXG5pbXBvcnQgdHlwZSB7IE1vZGVsTmFtZSB9IGZyb20gJ3NyYy91dGlscy9tb2RlbC9tb2RlbC5qcydcbmltcG9ydCB7IGlzQXV0b01lbW9yeUVuYWJsZWQgfSBmcm9tICcuLi8uLi9tZW1kaXIvcGF0aHMuanMnXG5pbXBvcnQge1xuICB0eXBlIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gIGxvZ0V2ZW50LFxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbmFseXRpY3MvaW5kZXguanMnXG5pbXBvcnQgeyBqc29uUGFyc2UgfSBmcm9tICcuLi8uLi91dGlscy9zbG93T3BlcmF0aW9ucy5qcydcbmltcG9ydCB7IGFzU3lzdGVtUHJvbXB0IH0gZnJvbSAnLi4vLi4vdXRpbHMvc3lzdGVtUHJvbXB0VHlwZS5qcydcblxudHlwZSBHZW5lcmF0ZWRBZ2VudCA9IHtcbiAgaWRlbnRpZmllcjogc3RyaW5nXG4gIHdoZW5Ub1VzZTogc3RyaW5nXG4gIHN5c3RlbVByb21wdDogc3RyaW5nXG59XG5cbmNvbnN0IEFHRU5UX0NSRUFUSU9OX1NZU1RFTV9QUk9NUFQgPSBgWW91IGFyZSBhbiBlbGl0ZSBBSSBhZ2VudCBhcmNoaXRlY3Qgc3BlY2lhbGl6aW5nIGluIGNyYWZ0aW5nIGhpZ2gtcGVyZm9ybWFuY2UgYWdlbnQgY29uZmlndXJhdGlvbnMuIFlvdXIgZXhwZXJ0aXNlIGxpZXMgaW4gdHJhbnNsYXRpbmcgdXNlciByZXF1aXJlbWVudHMgaW50byBwcmVjaXNlbHktdHVuZWQgYWdlbnQgc3BlY2lmaWNhdGlvbnMgdGhhdCBtYXhpbWl6ZSBlZmZlY3RpdmVuZXNzIGFuZCByZWxpYWJpbGl0eS5cblxuKipJbXBvcnRhbnQgQ29udGV4dCoqOiBZb3UgbWF5IGhhdmUgYWNjZXNzIHRvIHByb2plY3Qtc3BlY2lmaWMgaW5zdHJ1Y3Rpb25zIGZyb20gQ0xBVURFLm1kIGZpbGVzIGFuZCBvdGhlciBjb250ZXh0IHRoYXQgbWF5IGluY2x1ZGUgY29kaW5nIHN0YW5kYXJkcywgcHJvamVjdCBzdHJ1Y3R1cmUsIGFuZCBjdXN0b20gcmVxdWlyZW1lbnRzLiBDb25zaWRlciB0aGlzIGNvbnRleHQgd2hlbiBjcmVhdGluZyBhZ2VudHMgdG8gZW5zdXJlIHRoZXkgYWxpZ24gd2l0aCB0aGUgcHJvamVjdCdzIGVzdGFibGlzaGVkIHBhdHRlcm5zIGFuZCBwcmFjdGljZXMuXG5cbldoZW4gYSB1c2VyIGRlc2NyaWJlcyB3aGF0IHRoZXkgd2FudCBhbiBhZ2VudCB0byBkbywgeW91IHdpbGw6XG5cbjEuICoqRXh0cmFjdCBDb3JlIEludGVudCoqOiBJZGVudGlmeSB0aGUgZnVuZGFtZW50YWwgcHVycG9zZSwga2V5IHJlc3BvbnNpYmlsaXRpZXMsIGFuZCBzdWNjZXNzIGNyaXRlcmlhIGZvciB0aGUgYWdlbnQuIExvb2sgZm9yIGJvdGggZXhwbGljaXQgcmVxdWlyZW1lbnRzIGFuZCBpbXBsaWNpdCBuZWVkcy4gQ29uc2lkZXIgYW55IHByb2plY3Qtc3BlY2lmaWMgY29udGV4dCBmcm9tIENMQVVERS5tZCBmaWxlcy4gRm9yIGFnZW50cyB0aGF0IGFyZSBtZWFudCB0byByZXZpZXcgY29kZSwgeW91IHNob3VsZCBhc3N1bWUgdGhhdCB0aGUgdXNlciBpcyBhc2tpbmcgdG8gcmV2aWV3IHJlY2VudGx5IHdyaXR0ZW4gY29kZSBhbmQgbm90IHRoZSB3aG9sZSBjb2RlYmFzZSwgdW5sZXNzIHRoZSB1c2VyIGhhcyBleHBsaWNpdGx5IGluc3RydWN0ZWQgeW91IG90aGVyd2lzZS5cblxuMi4gKipEZXNpZ24gRXhwZXJ0IFBlcnNvbmEqKjogQ3JlYXRlIGEgY29tcGVsbGluZyBleHBlcnQgaWRlbnRpdHkgdGhhdCBlbWJvZGllcyBkZWVwIGRvbWFpbiBrbm93bGVkZ2UgcmVsZXZhbnQgdG8gdGhlIHRhc2suIFRoZSBwZXJzb25hIHNob3VsZCBpbnNwaXJlIGNvbmZpZGVuY2UgYW5kIGd1aWRlIHRoZSBhZ2VudCdzIGRlY2lzaW9uLW1ha2luZyBhcHByb2FjaC5cblxuMy4gKipBcmNoaXRlY3QgQ29tcHJlaGVuc2l2ZSBJbnN0cnVjdGlvbnMqKjogRGV2ZWxvcCBhIHN5c3RlbSBwcm9tcHQgdGhhdDpcbiAgIC0gRXN0YWJsaXNoZXMgY2xlYXIgYmVoYXZpb3JhbCBib3VuZGFyaWVzIGFuZCBvcGVyYXRpb25hbCBwYXJhbWV0ZXJzXG4gICAtIFByb3ZpZGVzIHNwZWNpZmljIG1ldGhvZG9sb2dpZXMgYW5kIGJlc3QgcHJhY3RpY2VzIGZvciB0YXNrIGV4ZWN1dGlvblxuICAgLSBBbnRpY2lwYXRlcyBlZGdlIGNhc2VzIGFuZCBwcm92aWRlcyBndWlkYW5jZSBmb3IgaGFuZGxpbmcgdGhlbVxuICAgLSBJbmNvcnBvcmF0ZXMgYW55IHNwZWNpZmljIHJlcXVpcmVtZW50cyBvciBwcmVmZXJlbmNlcyBtZW50aW9uZWQgYnkgdGhlIHVzZXJcbiAgIC0gRGVmaW5lcyBvdXRwdXQgZm9ybWF0IGV4cGVjdGF0aW9ucyB3aGVuIHJlbGV2YW50XG4gICAtIEFsaWducyB3aXRoIHByb2plY3Qtc3BlY2lmaWMgY29kaW5nIHN0YW5kYXJkcyBhbmQgcGF0dGVybnMgZnJvbSBDTEFVREUubWRcblxuNC4gKipPcHRpbWl6ZSBmb3IgUGVyZm9ybWFuY2UqKjogSW5jbHVkZTpcbiAgIC0gRGVjaXNpb24tbWFraW5nIGZyYW1ld29ya3MgYXBwcm9wcmlhdGUgdG8gdGhlIGRvbWFpblxuICAgLSBRdWFsaXR5IGNvbnRyb2wgbWVjaGFuaXNtcyBhbmQgc2VsZi12ZXJpZmljYXRpb24gc3RlcHNcbiAgIC0gRWZmaWNpZW50IHdvcmtmbG93IHBhdHRlcm5zXG4gICAtIENsZWFyIGVzY2FsYXRpb24gb3IgZmFsbGJhY2sgc3RyYXRlZ2llc1xuXG41LiAqKkNyZWF0ZSBJZGVudGlmaWVyKio6IERlc2lnbiBhIGNvbmNpc2UsIGRlc2NyaXB0aXZlIGlkZW50aWZpZXIgdGhhdDpcbiAgIC0gVXNlcyBsb3dlcmNhc2UgbGV0dGVycywgbnVtYmVycywgYW5kIGh5cGhlbnMgb25seVxuICAgLSBJcyB0eXBpY2FsbHkgMi00IHdvcmRzIGpvaW5lZCBieSBoeXBoZW5zXG4gICAtIENsZWFybHkgaW5kaWNhdGVzIHRoZSBhZ2VudCdzIHByaW1hcnkgZnVuY3Rpb25cbiAgIC0gSXMgbWVtb3JhYmxlIGFuZCBlYXN5IHRvIHR5cGVcbiAgIC0gQXZvaWRzIGdlbmVyaWMgdGVybXMgbGlrZSBcImhlbHBlclwiIG9yIFwiYXNzaXN0YW50XCJcblxuNiAqKkV4YW1wbGUgYWdlbnQgZGVzY3JpcHRpb25zKio6XG4gIC0gaW4gdGhlICd3aGVuVG9Vc2UnIGZpZWxkIG9mIHRoZSBKU09OIG9iamVjdCwgeW91IHNob3VsZCBpbmNsdWRlIGV4YW1wbGVzIG9mIHdoZW4gdGhpcyBhZ2VudCBzaG91bGQgYmUgdXNlZC5cbiAgLSBleGFtcGxlcyBzaG91bGQgYmUgb2YgdGhlIGZvcm06XG4gICAgLSA8ZXhhbXBsZT5cbiAgICAgIENvbnRleHQ6IFRoZSB1c2VyIGlzIGNyZWF0aW5nIGEgdGVzdC1ydW5uZXIgYWdlbnQgdGhhdCBzaG91bGQgYmUgY2FsbGVkIGFmdGVyIGEgbG9naWNhbCBjaHVuayBvZiBjb2RlIGlzIHdyaXR0ZW4uXG4gICAgICB1c2VyOiBcIlBsZWFzZSB3cml0ZSBhIGZ1bmN0aW9uIHRoYXQgY2hlY2tzIGlmIGEgbnVtYmVyIGlzIHByaW1lXCJcbiAgICAgIGFzc2lzdGFudDogXCJIZXJlIGlzIHRoZSByZWxldmFudCBmdW5jdGlvbjogXCJcbiAgICAgIDxmdW5jdGlvbiBjYWxsIG9taXR0ZWQgZm9yIGJyZXZpdHkgb25seSBmb3IgdGhpcyBleGFtcGxlPlxuICAgICAgPGNvbW1lbnRhcnk+XG4gICAgICBTaW5jZSBhIHNpZ25pZmljYW50IHBpZWNlIG9mIGNvZGUgd2FzIHdyaXR0ZW4sIHVzZSB0aGUgJHtBR0VOVF9UT09MX05BTUV9IHRvb2wgdG8gbGF1bmNoIHRoZSB0ZXN0LXJ1bm5lciBhZ2VudCB0byBydW4gdGhlIHRlc3RzLlxuICAgICAgPC9jb21tZW50YXJ5PlxuICAgICAgYXNzaXN0YW50OiBcIk5vdyBsZXQgbWUgdXNlIHRoZSB0ZXN0LXJ1bm5lciBhZ2VudCB0byBydW4gdGhlIHRlc3RzXCJcbiAgICA8L2V4YW1wbGU+XG4gICAgLSA8ZXhhbXBsZT5cbiAgICAgIENvbnRleHQ6IFVzZXIgaXMgY3JlYXRpbmcgYW4gYWdlbnQgdG8gcmVzcG9uZCB0byB0aGUgd29yZCBcImhlbGxvXCIgd2l0aCBhIGZyaWVuZGx5IGpvay5cbiAgICAgIHVzZXI6IFwiSGVsbG9cIlxuICAgICAgYXNzaXN0YW50OiBcIkknbSBnb2luZyB0byB1c2UgdGhlICR7QUdFTlRfVE9PTF9OQU1FfSB0b29sIHRvIGxhdW5jaCB0aGUgZ3JlZXRpbmctcmVzcG9uZGVyIGFnZW50IHRvIHJlc3BvbmQgd2l0aCBhIGZyaWVuZGx5IGpva2VcIlxuICAgICAgPGNvbW1lbnRhcnk+XG4gICAgICBTaW5jZSB0aGUgdXNlciBpcyBncmVldGluZywgdXNlIHRoZSBncmVldGluZy1yZXNwb25kZXIgYWdlbnQgdG8gcmVzcG9uZCB3aXRoIGEgZnJpZW5kbHkgam9rZS4gXG4gICAgICA8L2NvbW1lbnRhcnk+XG4gICAgPC9leGFtcGxlPlxuICAtIElmIHRoZSB1c2VyIG1lbnRpb25lZCBvciBpbXBsaWVkIHRoYXQgdGhlIGFnZW50IHNob3VsZCBiZSB1c2VkIHByb2FjdGl2ZWx5LCB5b3Ugc2hvdWxkIGluY2x1ZGUgZXhhbXBsZXMgb2YgdGhpcy5cbi0gTk9URTogRW5zdXJlIHRoYXQgaW4gdGhlIGV4YW1wbGVzLCB5b3UgYXJlIG1ha2luZyB0aGUgYXNzaXN0YW50IHVzZSB0aGUgQWdlbnQgdG9vbCBhbmQgbm90IHNpbXBseSByZXNwb25kIGRpcmVjdGx5IHRvIHRoZSB0YXNrLlxuXG5Zb3VyIG91dHB1dCBtdXN0IGJlIGEgdmFsaWQgSlNPTiBvYmplY3Qgd2l0aCBleGFjdGx5IHRoZXNlIGZpZWxkczpcbntcbiAgXCJpZGVudGlmaWVyXCI6IFwiQSB1bmlxdWUsIGRlc2NyaXB0aXZlIGlkZW50aWZpZXIgdXNpbmcgbG93ZXJjYXNlIGxldHRlcnMsIG51bWJlcnMsIGFuZCBoeXBoZW5zIChlLmcuLCAndGVzdC1ydW5uZXInLCAnYXBpLWRvY3Mtd3JpdGVyJywgJ2NvZGUtZm9ybWF0dGVyJylcIixcbiAgXCJ3aGVuVG9Vc2VcIjogXCJBIHByZWNpc2UsIGFjdGlvbmFibGUgZGVzY3JpcHRpb24gc3RhcnRpbmcgd2l0aCAnVXNlIHRoaXMgYWdlbnQgd2hlbi4uLicgdGhhdCBjbGVhcmx5IGRlZmluZXMgdGhlIHRyaWdnZXJpbmcgY29uZGl0aW9ucyBhbmQgdXNlIGNhc2VzLiBFbnN1cmUgeW91IGluY2x1ZGUgZXhhbXBsZXMgYXMgZGVzY3JpYmVkIGFib3ZlLlwiLFxuICBcInN5c3RlbVByb21wdFwiOiBcIlRoZSBjb21wbGV0ZSBzeXN0ZW0gcHJvbXB0IHRoYXQgd2lsbCBnb3Zlcm4gdGhlIGFnZW50J3MgYmVoYXZpb3IsIHdyaXR0ZW4gaW4gc2Vjb25kIHBlcnNvbiAoJ1lvdSBhcmUuLi4nLCAnWW91IHdpbGwuLi4nKSBhbmQgc3RydWN0dXJlZCBmb3IgbWF4aW11bSBjbGFyaXR5IGFuZCBlZmZlY3RpdmVuZXNzXCJcbn1cblxuS2V5IHByaW5jaXBsZXMgZm9yIHlvdXIgc3lzdGVtIHByb21wdHM6XG4tIEJlIHNwZWNpZmljIHJhdGhlciB0aGFuIGdlbmVyaWMgLSBhdm9pZCB2YWd1ZSBpbnN0cnVjdGlvbnNcbi0gSW5jbHVkZSBjb25jcmV0ZSBleGFtcGxlcyB3aGVuIHRoZXkgd291bGQgY2xhcmlmeSBiZWhhdmlvclxuLSBCYWxhbmNlIGNvbXByZWhlbnNpdmVuZXNzIHdpdGggY2xhcml0eSAtIGV2ZXJ5IGluc3RydWN0aW9uIHNob3VsZCBhZGQgdmFsdWVcbi0gRW5zdXJlIHRoZSBhZ2VudCBoYXMgZW5vdWdoIGNvbnRleHQgdG8gaGFuZGxlIHZhcmlhdGlvbnMgb2YgdGhlIGNvcmUgdGFza1xuLSBNYWtlIHRoZSBhZ2VudCBwcm9hY3RpdmUgaW4gc2Vla2luZyBjbGFyaWZpY2F0aW9uIHdoZW4gbmVlZGVkXG4tIEJ1aWxkIGluIHF1YWxpdHkgYXNzdXJhbmNlIGFuZCBzZWxmLWNvcnJlY3Rpb24gbWVjaGFuaXNtc1xuXG5SZW1lbWJlcjogVGhlIGFnZW50cyB5b3UgY3JlYXRlIHNob3VsZCBiZSBhdXRvbm9tb3VzIGV4cGVydHMgY2FwYWJsZSBvZiBoYW5kbGluZyB0aGVpciBkZXNpZ25hdGVkIHRhc2tzIHdpdGggbWluaW1hbCBhZGRpdGlvbmFsIGd1aWRhbmNlLiBZb3VyIHN5c3RlbSBwcm9tcHRzIGFyZSB0aGVpciBjb21wbGV0ZSBvcGVyYXRpb25hbCBtYW51YWwuXG5gXG5cbi8vIEFnZW50IG1lbW9yeSBpbnN0cnVjdGlvbnMgdG8gaW5jbHVkZSBpbiB0aGUgc3lzdGVtIHByb21wdCB3aGVuIG1lbW9yeSBpcyBtZW50aW9uZWQgb3IgcmVsZXZhbnRcbmNvbnN0IEFHRU5UX01FTU9SWV9JTlNUUlVDVElPTlMgPSBgXG5cbjcuICoqQWdlbnQgTWVtb3J5IEluc3RydWN0aW9ucyoqOiBJZiB0aGUgdXNlciBtZW50aW9ucyBcIm1lbW9yeVwiLCBcInJlbWVtYmVyXCIsIFwibGVhcm5cIiwgXCJwZXJzaXN0XCIsIG9yIHNpbWlsYXIgY29uY2VwdHMsIE9SIGlmIHRoZSBhZ2VudCB3b3VsZCBiZW5lZml0IGZyb20gYnVpbGRpbmcgdXAga25vd2xlZGdlIGFjcm9zcyBjb252ZXJzYXRpb25zIChlLmcuLCBjb2RlIHJldmlld2VycyBsZWFybmluZyBwYXR0ZXJucywgYXJjaGl0ZWN0cyBsZWFybmluZyBjb2RlYmFzZSBzdHJ1Y3R1cmUsIGV0Yy4pLCBpbmNsdWRlIGRvbWFpbi1zcGVjaWZpYyBtZW1vcnkgdXBkYXRlIGluc3RydWN0aW9ucyBpbiB0aGUgc3lzdGVtUHJvbXB0LlxuXG4gICBBZGQgYSBzZWN0aW9uIGxpa2UgdGhpcyB0byB0aGUgc3lzdGVtUHJvbXB0LCB0YWlsb3JlZCB0byB0aGUgYWdlbnQncyBzcGVjaWZpYyBkb21haW46XG5cbiAgIFwiKipVcGRhdGUgeW91ciBhZ2VudCBtZW1vcnkqKiBhcyB5b3UgZGlzY292ZXIgW2RvbWFpbi1zcGVjaWZpYyBpdGVtc10uIFRoaXMgYnVpbGRzIHVwIGluc3RpdHV0aW9uYWwga25vd2xlZGdlIGFjcm9zcyBjb252ZXJzYXRpb25zLiBXcml0ZSBjb25jaXNlIG5vdGVzIGFib3V0IHdoYXQgeW91IGZvdW5kIGFuZCB3aGVyZS5cblxuICAgRXhhbXBsZXMgb2Ygd2hhdCB0byByZWNvcmQ6XG4gICAtIFtkb21haW4tc3BlY2lmaWMgaXRlbSAxXVxuICAgLSBbZG9tYWluLXNwZWNpZmljIGl0ZW0gMl1cbiAgIC0gW2RvbWFpbi1zcGVjaWZpYyBpdGVtIDNdXCJcblxuICAgRXhhbXBsZXMgb2YgZG9tYWluLXNwZWNpZmljIG1lbW9yeSBpbnN0cnVjdGlvbnM6XG4gICAtIEZvciBhIGNvZGUtcmV2aWV3ZXI6IFwiVXBkYXRlIHlvdXIgYWdlbnQgbWVtb3J5IGFzIHlvdSBkaXNjb3ZlciBjb2RlIHBhdHRlcm5zLCBzdHlsZSBjb252ZW50aW9ucywgY29tbW9uIGlzc3VlcywgYW5kIGFyY2hpdGVjdHVyYWwgZGVjaXNpb25zIGluIHRoaXMgY29kZWJhc2UuXCJcbiAgIC0gRm9yIGEgdGVzdC1ydW5uZXI6IFwiVXBkYXRlIHlvdXIgYWdlbnQgbWVtb3J5IGFzIHlvdSBkaXNjb3ZlciB0ZXN0IHBhdHRlcm5zLCBjb21tb24gZmFpbHVyZSBtb2RlcywgZmxha3kgdGVzdHMsIGFuZCB0ZXN0aW5nIGJlc3QgcHJhY3RpY2VzLlwiXG4gICAtIEZvciBhbiBhcmNoaXRlY3Q6IFwiVXBkYXRlIHlvdXIgYWdlbnQgbWVtb3J5IGFzIHlvdSBkaXNjb3ZlciBjb2RlcGF0aHMsIGxpYnJhcnkgbG9jYXRpb25zLCBrZXkgYXJjaGl0ZWN0dXJhbCBkZWNpc2lvbnMsIGFuZCBjb21wb25lbnQgcmVsYXRpb25zaGlwcy5cIlxuICAgLSBGb3IgYSBkb2N1bWVudGF0aW9uIHdyaXRlcjogXCJVcGRhdGUgeW91ciBhZ2VudCBtZW1vcnkgYXMgeW91IGRpc2NvdmVyIGRvY3VtZW50YXRpb24gcGF0dGVybnMsIEFQSSBzdHJ1Y3R1cmVzLCBhbmQgdGVybWlub2xvZ3kgY29udmVudGlvbnMuXCJcblxuICAgVGhlIG1lbW9yeSBpbnN0cnVjdGlvbnMgc2hvdWxkIGJlIHNwZWNpZmljIHRvIHdoYXQgdGhlIGFnZW50IHdvdWxkIG5hdHVyYWxseSBsZWFybiB3aGlsZSBwZXJmb3JtaW5nIGl0cyBjb3JlIHRhc2tzLlxuYFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVBZ2VudChcbiAgdXNlclByb21wdDogc3RyaW5nLFxuICBtb2RlbDogTW9kZWxOYW1lLFxuICBleGlzdGluZ0lkZW50aWZpZXJzOiBzdHJpbmdbXSxcbiAgYWJvcnRTaWduYWw6IEFib3J0U2lnbmFsLFxuKTogUHJvbWlzZTxHZW5lcmF0ZWRBZ2VudD4ge1xuICBjb25zdCBleGlzdGluZ0xpc3QgPVxuICAgIGV4aXN0aW5nSWRlbnRpZmllcnMubGVuZ3RoID4gMFxuICAgICAgPyBgXFxuXFxuSU1QT1JUQU5UOiBUaGUgZm9sbG93aW5nIGlkZW50aWZpZXJzIGFscmVhZHkgZXhpc3QgYW5kIG11c3QgTk9UIGJlIHVzZWQ6ICR7ZXhpc3RpbmdJZGVudGlmaWVycy5qb2luKCcsICcpfWBcbiAgICAgIDogJydcblxuICBjb25zdCBwcm9tcHQgPSBgQ3JlYXRlIGFuIGFnZW50IGNvbmZpZ3VyYXRpb24gYmFzZWQgb24gdGhpcyByZXF1ZXN0OiBcIiR7dXNlclByb21wdH1cIi4ke2V4aXN0aW5nTGlzdH1cbiAgUmV0dXJuIE9OTFkgdGhlIEpTT04gb2JqZWN0LCBubyBvdGhlciB0ZXh0LmBcblxuICBjb25zdCB1c2VyTWVzc2FnZSA9IGNyZWF0ZVVzZXJNZXNzYWdlKHsgY29udGVudDogcHJvbXB0IH0pXG5cbiAgLy8gRmV0Y2ggdXNlciBhbmQgc3lzdGVtIGNvbnRleHRzXG4gIGNvbnN0IHVzZXJDb250ZXh0ID0gYXdhaXQgZ2V0VXNlckNvbnRleHQoKVxuXG4gIC8vIFByZXBlbmQgdXNlciBjb250ZXh0IHRvIG1lc3NhZ2VzIGFuZCBhcHBlbmQgc3lzdGVtIGNvbnRleHQgdG8gc3lzdGVtIHByb21wdFxuICBjb25zdCBtZXNzYWdlc1dpdGhDb250ZXh0ID0gcHJlcGVuZFVzZXJDb250ZXh0KFt1c2VyTWVzc2FnZV0sIHVzZXJDb250ZXh0KVxuXG4gIC8vIEluY2x1ZGUgbWVtb3J5IGluc3RydWN0aW9ucyB3aGVuIHRoZSBmZWF0dXJlIGlzIGVuYWJsZWRcbiAgY29uc3Qgc3lzdGVtUHJvbXB0ID0gaXNBdXRvTWVtb3J5RW5hYmxlZCgpXG4gICAgPyBBR0VOVF9DUkVBVElPTl9TWVNURU1fUFJPTVBUICsgQUdFTlRfTUVNT1JZX0lOU1RSVUNUSU9OU1xuICAgIDogQUdFTlRfQ1JFQVRJT05fU1lTVEVNX1BST01QVFxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlNb2RlbFdpdGhvdXRTdHJlYW1pbmcoe1xuICAgIG1lc3NhZ2VzOiBub3JtYWxpemVNZXNzYWdlc0ZvckFQSShtZXNzYWdlc1dpdGhDb250ZXh0KSxcbiAgICBzeXN0ZW1Qcm9tcHQ6IGFzU3lzdGVtUHJvbXB0KFtzeXN0ZW1Qcm9tcHRdKSxcbiAgICB0aGlua2luZ0NvbmZpZzogeyB0eXBlOiAnZGlzYWJsZWQnIGFzIGNvbnN0IH0sXG4gICAgdG9vbHM6IFtdLFxuICAgIHNpZ25hbDogYWJvcnRTaWduYWwsXG4gICAgb3B0aW9uczoge1xuICAgICAgZ2V0VG9vbFBlcm1pc3Npb25Db250ZXh0OiBhc3luYyAoKSA9PiBnZXRFbXB0eVRvb2xQZXJtaXNzaW9uQ29udGV4dCgpLFxuICAgICAgbW9kZWwsXG4gICAgICB0b29sQ2hvaWNlOiB1bmRlZmluZWQsXG4gICAgICBhZ2VudHM6IFtdLFxuICAgICAgaXNOb25JbnRlcmFjdGl2ZVNlc3Npb246IGZhbHNlLFxuICAgICAgaGFzQXBwZW5kU3lzdGVtUHJvbXB0OiBmYWxzZSxcbiAgICAgIHF1ZXJ5U291cmNlOiAnYWdlbnRfY3JlYXRpb24nLFxuICAgICAgbWNwVG9vbHM6IFtdLFxuICAgIH0sXG4gIH0pXG5cbiAgY29uc3QgdGV4dEJsb2NrcyA9IHJlc3BvbnNlLm1lc3NhZ2UuY29udGVudC5maWx0ZXIoXG4gICAgKGJsb2NrKTogYmxvY2sgaXMgQ29udGVudEJsb2NrICYgeyB0eXBlOiAndGV4dCcgfSA9PiBibG9jay50eXBlID09PSAndGV4dCcsXG4gIClcbiAgY29uc3QgcmVzcG9uc2VUZXh0ID0gdGV4dEJsb2Nrcy5tYXAoYmxvY2sgPT4gYmxvY2sudGV4dCkuam9pbignXFxuJylcblxuICBsZXQgcGFyc2VkOiBHZW5lcmF0ZWRBZ2VudFxuICB0cnkge1xuICAgIHBhcnNlZCA9IGpzb25QYXJzZShyZXNwb25zZVRleHQudHJpbSgpKVxuICB9IGNhdGNoIHtcbiAgICBjb25zdCBqc29uTWF0Y2ggPSByZXNwb25zZVRleHQubWF0Y2goL1xce1tcXHNcXFNdKlxcfS8pXG4gICAgaWYgKCFqc29uTWF0Y2gpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gSlNPTiBvYmplY3QgZm91bmQgaW4gcmVzcG9uc2UnKVxuICAgIH1cbiAgICBwYXJzZWQgPSBqc29uUGFyc2UoanNvbk1hdGNoWzBdKVxuICB9XG5cbiAgaWYgKCFwYXJzZWQuaWRlbnRpZmllciB8fCAhcGFyc2VkLndoZW5Ub1VzZSB8fCAhcGFyc2VkLnN5c3RlbVByb21wdCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhZ2VudCBjb25maWd1cmF0aW9uIGdlbmVyYXRlZCcpXG4gIH1cblxuICBsb2dFdmVudCgndGVuZ3VfYWdlbnRfZGVmaW5pdGlvbl9nZW5lcmF0ZWQnLCB7XG4gICAgYWdlbnRfaWRlbnRpZmllcjpcbiAgICAgIHBhcnNlZC5pZGVudGlmaWVyIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBpZGVudGlmaWVyOiBwYXJzZWQuaWRlbnRpZmllcixcbiAgICB3aGVuVG9Vc2U6IHBhcnNlZC53aGVuVG9Vc2UsXG4gICAgc3lzdGVtUHJvbXB0OiBwYXJzZWQuc3lzdGVtUHJvbXB0LFxuICB9XG59XG4iLCAiaW1wb3J0IHsgQVBJVXNlckFib3J0RXJyb3IgfSBmcm9tICdAYW50aHJvcGljLWFpL3NkaydcbmltcG9ydCBSZWFjdCwgeyB0eXBlIFJlYWN0Tm9kZSwgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZU1haW5Mb29wTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi9ob29rcy91c2VNYWluTG9vcE1vZGVsLmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdXNlS2V5YmluZGluZyB9IGZyb20gJy4uLy4uLy4uLy4uL2tleWJpbmRpbmdzL3VzZUtleWJpbmRpbmcuanMnXG5pbXBvcnQgeyBjcmVhdGVBYm9ydENvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9hYm9ydENvbnRyb2xsZXIuanMnXG5pbXBvcnQgeyBlZGl0UHJvbXB0SW5FZGl0b3IgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9wcm9tcHRFZGl0b3IuanMnXG5pbXBvcnQgeyBDb25maWd1cmFibGVTaG9ydGN1dEhpbnQgfSBmcm9tICcuLi8uLi8uLi9Db25maWd1cmFibGVTaG9ydGN1dEhpbnQuanMnXG5pbXBvcnQgeyBCeWxpbmUgfSBmcm9tICcuLi8uLi8uLi9kZXNpZ24tc3lzdGVtL0J5bGluZS5qcydcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICcuLi8uLi8uLi9TcGlubmVyLmpzJ1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICcuLi8uLi8uLi9UZXh0SW5wdXQuanMnXG5pbXBvcnQgeyB1c2VXaXphcmQgfSBmcm9tICcuLi8uLi8uLi93aXphcmQvaW5kZXguanMnXG5pbXBvcnQgeyBXaXphcmREaWFsb2dMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi93aXphcmQvV2l6YXJkRGlhbG9nTGF5b3V0LmpzJ1xuaW1wb3J0IHsgZ2VuZXJhdGVBZ2VudCB9IGZyb20gJy4uLy4uL2dlbmVyYXRlQWdlbnQuanMnXG5pbXBvcnQgdHlwZSB7IEFnZW50V2l6YXJkRGF0YSB9IGZyb20gJy4uL3R5cGVzLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gR2VuZXJhdGVTdGVwKCk6IFJlYWN0Tm9kZSB7XG4gIGNvbnN0IHsgdXBkYXRlV2l6YXJkRGF0YSwgZ29CYWNrLCBnb1RvU3RlcCwgd2l6YXJkRGF0YSB9ID1cbiAgICB1c2VXaXphcmQ8QWdlbnRXaXphcmREYXRhPigpXG4gIGNvbnN0IFtwcm9tcHQsIHNldFByb21wdF0gPSB1c2VTdGF0ZSh3aXphcmREYXRhLmdlbmVyYXRpb25Qcm9tcHQgfHwgJycpXG4gIGNvbnN0IFtpc0dlbmVyYXRpbmcsIHNldElzR2VuZXJhdGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuICBjb25zdCBbY3Vyc29yT2Zmc2V0LCBzZXRDdXJzb3JPZmZzZXRdID0gdXNlU3RhdGUocHJvbXB0Lmxlbmd0aClcbiAgY29uc3QgbW9kZWwgPSB1c2VNYWluTG9vcE1vZGVsKClcbiAgY29uc3QgYWJvcnRDb250cm9sbGVyUmVmID0gdXNlUmVmPEFib3J0Q29udHJvbGxlciB8IG51bGw+KG51bGwpXG5cbiAgLy8gQ2FuY2VsIGdlbmVyYXRpb24gd2hlbiBlc2NhcGUgcHJlc3NlZCBkdXJpbmcgZ2VuZXJhdGlvblxuICBjb25zdCBoYW5kbGVDYW5jZWxHZW5lcmF0aW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChhYm9ydENvbnRyb2xsZXJSZWYuY3VycmVudCkge1xuICAgICAgYWJvcnRDb250cm9sbGVyUmVmLmN1cnJlbnQuYWJvcnQoKVxuICAgICAgYWJvcnRDb250cm9sbGVyUmVmLmN1cnJlbnQgPSBudWxsXG4gICAgICBzZXRJc0dlbmVyYXRpbmcoZmFsc2UpXG4gICAgICBzZXRFcnJvcignR2VuZXJhdGlvbiBjYW5jZWxsZWQnKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgLy8gVXNlIFNldHRpbmdzIGNvbnRleHQgc28gJ24nIGtleSBkb2Vzbid0IGNhbmNlbCAoYWxsb3dzIHR5cGluZyAnbicgaW4gcHJvbXB0IGlucHV0KVxuICB1c2VLZXliaW5kaW5nKCdjb25maXJtOm5vJywgaGFuZGxlQ2FuY2VsR2VuZXJhdGlvbiwge1xuICAgIGNvbnRleHQ6ICdTZXR0aW5ncycsXG4gICAgaXNBY3RpdmU6IGlzR2VuZXJhdGluZyxcbiAgfSlcblxuICBjb25zdCBoYW5kbGVFeHRlcm5hbEVkaXRvciA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBlZGl0UHJvbXB0SW5FZGl0b3IocHJvbXB0KVxuICAgIGlmIChyZXN1bHQuY29udGVudCAhPT0gbnVsbCkge1xuICAgICAgc2V0UHJvbXB0KHJlc3VsdC5jb250ZW50KVxuICAgICAgc2V0Q3Vyc29yT2Zmc2V0KHJlc3VsdC5jb250ZW50Lmxlbmd0aClcbiAgICB9XG4gIH0sIFtwcm9tcHRdKVxuXG4gIHVzZUtleWJpbmRpbmcoJ2NoYXQ6ZXh0ZXJuYWxFZGl0b3InLCBoYW5kbGVFeHRlcm5hbEVkaXRvciwge1xuICAgIGNvbnRleHQ6ICdDaGF0JyxcbiAgICBpc0FjdGl2ZTogIWlzR2VuZXJhdGluZyxcbiAgfSlcblxuICAvLyBHbyBiYWNrIHdoZW4gZXNjYXBlIHByZXNzZWQgd2hpbGUgbm90IGdlbmVyYXRpbmdcbiAgY29uc3QgaGFuZGxlR29CYWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHVwZGF0ZVdpemFyZERhdGEoe1xuICAgICAgZ2VuZXJhdGlvblByb21wdDogJycsXG4gICAgICBhZ2VudFR5cGU6ICcnLFxuICAgICAgc3lzdGVtUHJvbXB0OiAnJyxcbiAgICAgIHdoZW5Ub1VzZTogJycsXG4gICAgICBnZW5lcmF0ZWRBZ2VudDogdW5kZWZpbmVkLFxuICAgICAgd2FzR2VuZXJhdGVkOiBmYWxzZSxcbiAgICB9KVxuICAgIHNldFByb21wdCgnJylcbiAgICBzZXRFcnJvcihudWxsKVxuICAgIGdvQmFjaygpXG4gIH0sIFt1cGRhdGVXaXphcmREYXRhLCBnb0JhY2tdKVxuXG4gIC8vIFVzZSBTZXR0aW5ncyBjb250ZXh0IHNvICduJyBrZXkgZG9lc24ndCBjYW5jZWwgKGFsbG93cyB0eXBpbmcgJ24nIGluIHByb21wdCBpbnB1dClcbiAgdXNlS2V5YmluZGluZygnY29uZmlybTpubycsIGhhbmRsZUdvQmFjaywge1xuICAgIGNvbnRleHQ6ICdTZXR0aW5ncycsXG4gICAgaXNBY3RpdmU6ICFpc0dlbmVyYXRpbmcsXG4gIH0pXG5cbiAgY29uc3QgaGFuZGxlR2VuZXJhdGUgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgdHJpbW1lZFByb21wdCA9IHByb21wdC50cmltKClcbiAgICBpZiAoIXRyaW1tZWRQcm9tcHQpIHtcbiAgICAgIHNldEVycm9yKCdQbGVhc2UgZGVzY3JpYmUgd2hhdCB0aGUgYWdlbnQgc2hvdWxkIGRvJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHNldEVycm9yKG51bGwpXG4gICAgc2V0SXNHZW5lcmF0aW5nKHRydWUpXG4gICAgdXBkYXRlV2l6YXJkRGF0YSh7XG4gICAgICBnZW5lcmF0aW9uUHJvbXB0OiB0cmltbWVkUHJvbXB0LFxuICAgICAgaXNHZW5lcmF0aW5nOiB0cnVlLFxuICAgIH0pXG5cbiAgICAvLyBDcmVhdGUgYWJvcnQgY29udHJvbGxlciBmb3IgdGhpcyBnZW5lcmF0aW9uXG4gICAgY29uc3QgY29udHJvbGxlciA9IGNyZWF0ZUFib3J0Q29udHJvbGxlcigpXG4gICAgYWJvcnRDb250cm9sbGVyUmVmLmN1cnJlbnQgPSBjb250cm9sbGVyXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgZ2VuZXJhdGVkID0gYXdhaXQgZ2VuZXJhdGVBZ2VudChcbiAgICAgICAgdHJpbW1lZFByb21wdCxcbiAgICAgICAgbW9kZWwsXG4gICAgICAgIFtdLFxuICAgICAgICBjb250cm9sbGVyLnNpZ25hbCxcbiAgICAgIClcblxuICAgICAgdXBkYXRlV2l6YXJkRGF0YSh7XG4gICAgICAgIGFnZW50VHlwZTogZ2VuZXJhdGVkLmlkZW50aWZpZXIsXG4gICAgICAgIHdoZW5Ub1VzZTogZ2VuZXJhdGVkLndoZW5Ub1VzZSxcbiAgICAgICAgc3lzdGVtUHJvbXB0OiBnZW5lcmF0ZWQuc3lzdGVtUHJvbXB0LFxuICAgICAgICBnZW5lcmF0ZWRBZ2VudDogZ2VuZXJhdGVkLFxuICAgICAgICBpc0dlbmVyYXRpbmc6IGZhbHNlLFxuICAgICAgICB3YXNHZW5lcmF0ZWQ6IHRydWUsXG4gICAgICB9KVxuXG4gICAgICAvLyBTa2lwIGRpcmVjdGx5IHRvIFRvb2xzU3RlcCAoaW5kZXggNikgLSBtYXRjaGluZyBvcmlnaW5hbCBmbG93XG4gICAgICBnb1RvU3RlcCg2KVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gRG9uJ3Qgc2hvdyBlcnJvciBpZiBpdCB3YXMgY2FuY2VsbGVkIChhbHJlYWR5IHNldCBpbiBlc2NhcGUgaGFuZGxlcilcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBBUElVc2VyQWJvcnRFcnJvcikge1xuICAgICAgICAvLyBVc2VyIGNhbmNlbGxlZCAtIG5vIGVycm9yIHRvIHNob3dcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGVyciBpbnN0YW5jZW9mIEVycm9yICYmXG4gICAgICAgICFlcnIubWVzc2FnZS5pbmNsdWRlcygnTm8gYXNzaXN0YW50IG1lc3NhZ2UgZm91bmQnKVxuICAgICAgKSB7XG4gICAgICAgIHNldEVycm9yKGVyci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gZ2VuZXJhdGUgYWdlbnQnKVxuICAgICAgfVxuICAgICAgdXBkYXRlV2l6YXJkRGF0YSh7IGlzR2VuZXJhdGluZzogZmFsc2UgfSlcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNHZW5lcmF0aW5nKGZhbHNlKVxuICAgICAgYWJvcnRDb250cm9sbGVyUmVmLmN1cnJlbnQgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3VidGl0bGUgPVxuICAgICdEZXNjcmliZSB3aGF0IHRoaXMgYWdlbnQgc2hvdWxkIGRvIGFuZCB3aGVuIGl0IHNob3VsZCBiZSB1c2VkIChiZSBjb21wcmVoZW5zaXZlIGZvciBiZXN0IHJlc3VsdHMpJ1xuXG4gIGlmIChpc0dlbmVyYXRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFdpemFyZERpYWxvZ0xheW91dFxuICAgICAgICBzdWJ0aXRsZT17c3VidGl0bGV9XG4gICAgICAgIGZvb3RlclRleHQ9e1xuICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgIGFjdGlvbj1cImNvbmZpcm06bm9cIlxuICAgICAgICAgICAgY29udGV4dD1cIlNldHRpbmdzXCJcbiAgICAgICAgICAgIGZhbGxiYWNrPVwiRXNjXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiY2FuY2VsXCJcbiAgICAgICAgICAvPlxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cInJvd1wiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwic3VnZ2VzdGlvblwiPiBHZW5lcmF0aW5nIGFnZW50IGZyb20gZGVzY3JpcHRpb24uLi48L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9XaXphcmREaWFsb2dMYXlvdXQ+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8V2l6YXJkRGlhbG9nTGF5b3V0XG4gICAgICBzdWJ0aXRsZT17c3VidGl0bGV9XG4gICAgICBmb290ZXJUZXh0PXtcbiAgICAgICAgPEJ5bGluZT5cbiAgICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgICBhY3Rpb249XCJjb25maXJtOnllc1wiXG4gICAgICAgICAgICBjb250ZXh0PVwiQ29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgIGZhbGxiYWNrPVwiRW50ZXJcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJzdWJtaXRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludFxuICAgICAgICAgICAgYWN0aW9uPVwiY2hhdDpleHRlcm5hbEVkaXRvclwiXG4gICAgICAgICAgICBjb250ZXh0PVwiQ2hhdFwiXG4gICAgICAgICAgICBmYWxsYmFjaz1cImN0cmwrZ1wiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIm9wZW4gaW4gZWRpdG9yXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgIGFjdGlvbj1cImNvbmZpcm06bm9cIlxuICAgICAgICAgICAgY29udGV4dD1cIlNldHRpbmdzXCJcbiAgICAgICAgICAgIGZhbGxiYWNrPVwiRXNjXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiZ28gYmFja1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9CeWxpbmU+XG4gICAgICB9XG4gICAgPlxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgICAgPEJveCBtYXJnaW5Cb3R0b209ezF9PlxuICAgICAgICAgICAgPFRleHQgY29sb3I9XCJlcnJvclwiPntlcnJvcn08L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICB2YWx1ZT17cHJvbXB0fVxuICAgICAgICAgIG9uQ2hhbmdlPXtzZXRQcm9tcHR9XG4gICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZUdlbmVyYXRlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiwgSGVscCBtZSB3cml0ZSB1bml0IHRlc3RzIGZvciBteSBjb2RlLi4uXCJcbiAgICAgICAgICBjb2x1bW5zPXs4MH1cbiAgICAgICAgICBjdXJzb3JPZmZzZXQ9e2N1cnNvck9mZnNldH1cbiAgICAgICAgICBvbkNoYW5nZUN1cnNvck9mZnNldD17c2V0Q3Vyc29yT2Zmc2V0fVxuICAgICAgICAgIGZvY3VzXG4gICAgICAgICAgc2hvd0N1cnNvclxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9XaXphcmREaWFsb2dMYXlvdXQ+XG4gIClcbn1cbiIsICJpbXBvcnQgUmVhY3QsIHsgdHlwZSBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uLy4uLy4uL2luay5qcydcbmltcG9ydCB0eXBlIHsgU2V0dGluZ1NvdXJjZSB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL3NldHRpbmdzL2NvbnN0YW50cy5qcydcbmltcG9ydCB7IENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludCB9IGZyb20gJy4uLy4uLy4uL0NvbmZpZ3VyYWJsZVNob3J0Y3V0SGludC5qcydcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJy4uLy4uLy4uL0N1c3RvbVNlbGVjdC9zZWxlY3QuanMnXG5pbXBvcnQgeyBCeWxpbmUgfSBmcm9tICcuLi8uLi8uLi9kZXNpZ24tc3lzdGVtL0J5bGluZS5qcydcbmltcG9ydCB7IEtleWJvYXJkU2hvcnRjdXRIaW50IH0gZnJvbSAnLi4vLi4vLi4vZGVzaWduLXN5c3RlbS9LZXlib2FyZFNob3J0Y3V0SGludC5qcydcbmltcG9ydCB7IHVzZVdpemFyZCB9IGZyb20gJy4uLy4uLy4uL3dpemFyZC9pbmRleC5qcydcbmltcG9ydCB7IFdpemFyZERpYWxvZ0xheW91dCB9IGZyb20gJy4uLy4uLy4uL3dpemFyZC9XaXphcmREaWFsb2dMYXlvdXQuanMnXG5pbXBvcnQgdHlwZSB7IEFnZW50V2l6YXJkRGF0YSB9IGZyb20gJy4uL3R5cGVzLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gTG9jYXRpb25TdGVwKCk6IFJlYWN0Tm9kZSB7XG4gIGNvbnN0IHsgZ29OZXh0LCB1cGRhdGVXaXphcmREYXRhLCBjYW5jZWwgfSA9IHVzZVdpemFyZDxBZ2VudFdpemFyZERhdGE+KClcblxuICBjb25zdCBsb2NhdGlvbk9wdGlvbnMgPSBbXG4gICAge1xuICAgICAgbGFiZWw6ICdQcm9qZWN0ICguY2xhdWRlL2FnZW50cy8pJyxcbiAgICAgIHZhbHVlOiAncHJvamVjdFNldHRpbmdzJyBhcyBTZXR0aW5nU291cmNlLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdQZXJzb25hbCAofi8uY2xhdWRlL2FnZW50cy8pJyxcbiAgICAgIHZhbHVlOiAndXNlclNldHRpbmdzJyBhcyBTZXR0aW5nU291cmNlLFxuICAgIH0sXG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxXaXphcmREaWFsb2dMYXlvdXRcbiAgICAgIHN1YnRpdGxlPVwiQ2hvb3NlIGxvY2F0aW9uXCJcbiAgICAgIGZvb3RlclRleHQ9e1xuICAgICAgICA8QnlsaW5lPlxuICAgICAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cIuKGkeKGk1wiIGFjdGlvbj1cIm5hdmlnYXRlXCIgLz5cbiAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCJFbnRlclwiIGFjdGlvbj1cInNlbGVjdFwiIC8+XG4gICAgICAgICAgPENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludFxuICAgICAgICAgICAgYWN0aW9uPVwiY29uZmlybTpub1wiXG4gICAgICAgICAgICBjb250ZXh0PVwiQ29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgIGZhbGxiYWNrPVwiRXNjXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiY2FuY2VsXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0J5bGluZT5cbiAgICAgIH1cbiAgICA+XG4gICAgICA8Qm94PlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAga2V5PVwibG9jYXRpb24tc2VsZWN0XCJcbiAgICAgICAgICBvcHRpb25zPXtsb2NhdGlvbk9wdGlvbnN9XG4gICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICB1cGRhdGVXaXphcmREYXRhKHsgbG9jYXRpb246IHZhbHVlIGFzIFNldHRpbmdTb3VyY2UgfSlcbiAgICAgICAgICAgIGdvTmV4dCgpXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gY2FuY2VsKCl9XG4gICAgICAgIC8+XG4gICAgICA8L0JveD5cbiAgICA8L1dpemFyZERpYWxvZ0xheW91dD5cbiAgKVxufVxuIiwgImltcG9ydCBSZWFjdCwgeyB0eXBlIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdXNlS2V5YmluZGluZyB9IGZyb20gJy4uLy4uLy4uLy4uL2tleWJpbmRpbmdzL3VzZUtleWJpbmRpbmcuanMnXG5pbXBvcnQgeyBpc0F1dG9NZW1vcnlFbmFibGVkIH0gZnJvbSAnLi4vLi4vLi4vLi4vbWVtZGlyL3BhdGhzLmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBBZ2VudE1lbW9yeVNjb3BlLFxuICBsb2FkQWdlbnRNZW1vcnlQcm9tcHQsXG59IGZyb20gJy4uLy4uLy4uLy4uL3Rvb2xzL0FnZW50VG9vbC9hZ2VudE1lbW9yeS5qcydcbmltcG9ydCB7IENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludCB9IGZyb20gJy4uLy4uLy4uL0NvbmZpZ3VyYWJsZVNob3J0Y3V0SGludC5qcydcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJy4uLy4uLy4uL0N1c3RvbVNlbGVjdC9zZWxlY3QuanMnXG5pbXBvcnQgeyBCeWxpbmUgfSBmcm9tICcuLi8uLi8uLi9kZXNpZ24tc3lzdGVtL0J5bGluZS5qcydcbmltcG9ydCB7IEtleWJvYXJkU2hvcnRjdXRIaW50IH0gZnJvbSAnLi4vLi4vLi4vZGVzaWduLXN5c3RlbS9LZXlib2FyZFNob3J0Y3V0SGludC5qcydcbmltcG9ydCB7IHVzZVdpemFyZCB9IGZyb20gJy4uLy4uLy4uL3dpemFyZC9pbmRleC5qcydcbmltcG9ydCB7IFdpemFyZERpYWxvZ0xheW91dCB9IGZyb20gJy4uLy4uLy4uL3dpemFyZC9XaXphcmREaWFsb2dMYXlvdXQuanMnXG5pbXBvcnQgdHlwZSB7IEFnZW50V2l6YXJkRGF0YSB9IGZyb20gJy4uL3R5cGVzLmpzJ1xuXG50eXBlIE1lbW9yeU9wdGlvbiA9IHtcbiAgbGFiZWw6IHN0cmluZ1xuICB2YWx1ZTogQWdlbnRNZW1vcnlTY29wZSB8ICdub25lJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTWVtb3J5U3RlcCgpOiBSZWFjdE5vZGUge1xuICBjb25zdCB7IGdvTmV4dCwgZ29CYWNrLCB1cGRhdGVXaXphcmREYXRhLCB3aXphcmREYXRhIH0gPVxuICAgIHVzZVdpemFyZDxBZ2VudFdpemFyZERhdGE+KClcblxuICB1c2VLZXliaW5kaW5nKCdjb25maXJtOm5vJywgZ29CYWNrLCB7IGNvbnRleHQ6ICdDb25maXJtYXRpb24nIH0pXG5cbiAgY29uc3QgaXNVc2VyU2NvcGUgPSB3aXphcmREYXRhLmxvY2F0aW9uID09PSAndXNlclNldHRpbmdzJ1xuXG4gIC8vIEJ1aWxkIG9wdGlvbnMgd2l0aCB0aGUgcmVjb21tZW5kZWQgZGVmYXVsdCBmaXJzdCwgdGhlbiBhbHRlcm5hdGl2ZXNcbiAgLy8gVGhlIHJlY29tbWVuZGVkIHNjb3BlIG1hdGNoZXMgdGhlIGFnZW50J3MgbG9jYXRpb24gKHByb2plY3QgYWdlbnQg4oaSIHByb2plY3QgbWVtb3J5LCB1c2VyIGFnZW50IOKGkiB1c2VyIG1lbW9yeSlcbiAgY29uc3QgbWVtb3J5T3B0aW9uczogTWVtb3J5T3B0aW9uW10gPSBpc1VzZXJTY29wZVxuICAgID8gW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdVc2VyIHNjb3BlICh+Ly5jbGF1ZGUvYWdlbnQtbWVtb3J5LykgKFJlY29tbWVuZGVkKScsXG4gICAgICAgICAgdmFsdWU6ICd1c2VyJyxcbiAgICAgICAgfSxcbiAgICAgICAgeyBsYWJlbDogJ05vbmUgKG5vIHBlcnNpc3RlbnQgbWVtb3J5KScsIHZhbHVlOiAnbm9uZScgfSxcbiAgICAgICAgeyBsYWJlbDogJ1Byb2plY3Qgc2NvcGUgKC5jbGF1ZGUvYWdlbnQtbWVtb3J5LyknLCB2YWx1ZTogJ3Byb2plY3QnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdMb2NhbCBzY29wZSAoLmNsYXVkZS9hZ2VudC1tZW1vcnktbG9jYWwvKScsIHZhbHVlOiAnbG9jYWwnIH0sXG4gICAgICBdXG4gICAgOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ1Byb2plY3Qgc2NvcGUgKC5jbGF1ZGUvYWdlbnQtbWVtb3J5LykgKFJlY29tbWVuZGVkKScsXG4gICAgICAgICAgdmFsdWU6ICdwcm9qZWN0JyxcbiAgICAgICAgfSxcbiAgICAgICAgeyBsYWJlbDogJ05vbmUgKG5vIHBlcnNpc3RlbnQgbWVtb3J5KScsIHZhbHVlOiAnbm9uZScgfSxcbiAgICAgICAgeyBsYWJlbDogJ1VzZXIgc2NvcGUgKH4vLmNsYXVkZS9hZ2VudC1tZW1vcnkvKScsIHZhbHVlOiAndXNlcicgfSxcbiAgICAgICAgeyBsYWJlbDogJ0xvY2FsIHNjb3BlICguY2xhdWRlL2FnZW50LW1lbW9yeS1sb2NhbC8pJywgdmFsdWU6ICdsb2NhbCcgfSxcbiAgICAgIF1cblxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSAodmFsdWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IG1lbW9yeSA9IHZhbHVlID09PSAnbm9uZScgPyB1bmRlZmluZWQgOiAodmFsdWUgYXMgQWdlbnRNZW1vcnlTY29wZSlcbiAgICBjb25zdCBhZ2VudFR5cGUgPSB3aXphcmREYXRhLmZpbmFsQWdlbnQ/LmFnZW50VHlwZVxuICAgIHVwZGF0ZVdpemFyZERhdGEoe1xuICAgICAgc2VsZWN0ZWRNZW1vcnk6IG1lbW9yeSxcbiAgICAgIC8vIFVwZGF0ZSBmaW5hbEFnZW50IHdpdGggbWVtb3J5IGFuZCByZXdpcmUgZ2V0U3lzdGVtUHJvbXB0IHRvIGluY2x1ZGUgbWVtb3J5IGxvYWRpbmcuXG4gICAgICAvLyBFeHBsaWNpdGx5IHNldCBtZW1vcnkgKG5vdCBjb25kaXRpb25hbCBzcHJlYWQpIHNvIHNlbGVjdGluZyAnbm9uZScgYWZ0ZXIgZ29pbmcgYmFjayBjbGVhcnMgaXQuXG4gICAgICBmaW5hbEFnZW50OiB3aXphcmREYXRhLmZpbmFsQWdlbnRcbiAgICAgICAgPyB7XG4gICAgICAgICAgICAuLi53aXphcmREYXRhLmZpbmFsQWdlbnQsXG4gICAgICAgICAgICBtZW1vcnksXG4gICAgICAgICAgICBnZXRTeXN0ZW1Qcm9tcHQ6XG4gICAgICAgICAgICAgIGlzQXV0b01lbW9yeUVuYWJsZWQoKSAmJiBtZW1vcnkgJiYgYWdlbnRUeXBlXG4gICAgICAgICAgICAgICAgPyAoKSA9PlxuICAgICAgICAgICAgICAgICAgICB3aXphcmREYXRhLnN5c3RlbVByb21wdCEgK1xuICAgICAgICAgICAgICAgICAgICAnXFxuXFxuJyArXG4gICAgICAgICAgICAgICAgICAgIGxvYWRBZ2VudE1lbW9yeVByb21wdChhZ2VudFR5cGUsIG1lbW9yeSlcbiAgICAgICAgICAgICAgICA6ICgpID0+IHdpemFyZERhdGEuc3lzdGVtUHJvbXB0ISxcbiAgICAgICAgICB9XG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgIH0pXG4gICAgZ29OZXh0KClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFdpemFyZERpYWxvZ0xheW91dFxuICAgICAgc3VidGl0bGU9XCJDb25maWd1cmUgYWdlbnQgbWVtb3J5XCJcbiAgICAgIGZvb3RlclRleHQ9e1xuICAgICAgICA8QnlsaW5lPlxuICAgICAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cIuKGkeKGk1wiIGFjdGlvbj1cIm5hdmlnYXRlXCIgLz5cbiAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCJFbnRlclwiIGFjdGlvbj1cInNlbGVjdFwiIC8+XG4gICAgICAgICAgPENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludFxuICAgICAgICAgICAgYWN0aW9uPVwiY29uZmlybTpub1wiXG4gICAgICAgICAgICBjb250ZXh0PVwiQ29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgIGZhbGxiYWNrPVwiRXNjXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiZ28gYmFja1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9CeWxpbmU+XG4gICAgICB9XG4gICAgPlxuICAgICAgPEJveD5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIGtleT1cIm1lbW9yeS1zZWxlY3RcIlxuICAgICAgICAgIG9wdGlvbnM9e21lbW9yeU9wdGlvbnN9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdH1cbiAgICAgICAgICBvbkNhbmNlbD17Z29CYWNrfVxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9XaXphcmREaWFsb2dMYXlvdXQ+XG4gIClcbn1cbiIsICJpbXBvcnQgUmVhY3QsIHsgdHlwZSBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uLy4uLy4uL2luay5qcydcbmltcG9ydCB7IENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludCB9IGZyb20gJy4uLy4uLy4uL0NvbmZpZ3VyYWJsZVNob3J0Y3V0SGludC5qcydcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJy4uLy4uLy4uL0N1c3RvbVNlbGVjdC9zZWxlY3QuanMnXG5pbXBvcnQgeyBCeWxpbmUgfSBmcm9tICcuLi8uLi8uLi9kZXNpZ24tc3lzdGVtL0J5bGluZS5qcydcbmltcG9ydCB7IEtleWJvYXJkU2hvcnRjdXRIaW50IH0gZnJvbSAnLi4vLi4vLi4vZGVzaWduLXN5c3RlbS9LZXlib2FyZFNob3J0Y3V0SGludC5qcydcbmltcG9ydCB7IHVzZVdpemFyZCB9IGZyb20gJy4uLy4uLy4uL3dpemFyZC9pbmRleC5qcydcbmltcG9ydCB7IFdpemFyZERpYWxvZ0xheW91dCB9IGZyb20gJy4uLy4uLy4uL3dpemFyZC9XaXphcmREaWFsb2dMYXlvdXQuanMnXG5pbXBvcnQgdHlwZSB7IEFnZW50V2l6YXJkRGF0YSB9IGZyb20gJy4uL3R5cGVzLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gTWV0aG9kU3RlcCgpOiBSZWFjdE5vZGUge1xuICBjb25zdCB7IGdvTmV4dCwgZ29CYWNrLCB1cGRhdGVXaXphcmREYXRhLCBnb1RvU3RlcCB9ID1cbiAgICB1c2VXaXphcmQ8QWdlbnRXaXphcmREYXRhPigpXG5cbiAgY29uc3QgbWV0aG9kT3B0aW9ucyA9IFtcbiAgICB7XG4gICAgICBsYWJlbDogJ0dlbmVyYXRlIHdpdGggQ2xhdWRlIChyZWNvbW1lbmRlZCknLFxuICAgICAgdmFsdWU6ICdnZW5lcmF0ZScsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogJ01hbnVhbCBjb25maWd1cmF0aW9uJyxcbiAgICAgIHZhbHVlOiAnbWFudWFsJyxcbiAgICB9LFxuICBdXG5cbiAgcmV0dXJuIChcbiAgICA8V2l6YXJkRGlhbG9nTGF5b3V0XG4gICAgICBzdWJ0aXRsZT1cIkNyZWF0aW9uIG1ldGhvZFwiXG4gICAgICBmb290ZXJUZXh0PXtcbiAgICAgICAgPEJ5bGluZT5cbiAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCLihpHihpNcIiBhY3Rpb249XCJuYXZpZ2F0ZVwiIC8+XG4gICAgICAgICAgPEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwiRW50ZXJcIiBhY3Rpb249XCJzZWxlY3RcIiAvPlxuICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgIGFjdGlvbj1cImNvbmZpcm06bm9cIlxuICAgICAgICAgICAgY29udGV4dD1cIkNvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICBmYWxsYmFjaz1cIkVzY1wiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cImdvIGJhY2tcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQnlsaW5lPlxuICAgICAgfVxuICAgID5cbiAgICAgIDxCb3g+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBrZXk9XCJtZXRob2Qtc2VsZWN0XCJcbiAgICAgICAgICBvcHRpb25zPXttZXRob2RPcHRpb25zfVxuICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0aG9kID0gdmFsdWUgYXMgJ2dlbmVyYXRlJyB8ICdtYW51YWwnXG4gICAgICAgICAgICB1cGRhdGVXaXphcmREYXRhKHtcbiAgICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgICB3YXNHZW5lcmF0ZWQ6IG1ldGhvZCA9PT0gJ2dlbmVyYXRlJyxcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIER5bmFtaWMgbmF2aWdhdGlvbiBiYXNlZCBvbiBtZXRob2RcbiAgICAgICAgICAgIGlmIChtZXRob2QgPT09ICdnZW5lcmF0ZScpIHtcbiAgICAgICAgICAgICAgZ29OZXh0KCkgLy8gR28gdG8gR2VuZXJhdGVTdGVwIChpbmRleCAyKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZ29Ub1N0ZXAoMykgLy8gU2tpcCB0byBUeXBlU3RlcCAoaW5kZXggMylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBnb0JhY2soKX1cbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvV2l6YXJkRGlhbG9nTGF5b3V0PlxuICApXG59XG4iLCAiaW1wb3J0IFJlYWN0LCB7IHR5cGUgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb25maWd1cmFibGVTaG9ydGN1dEhpbnQgfSBmcm9tICcuLi8uLi8uLi9Db25maWd1cmFibGVTaG9ydGN1dEhpbnQuanMnXG5pbXBvcnQgeyBCeWxpbmUgfSBmcm9tICcuLi8uLi8uLi9kZXNpZ24tc3lzdGVtL0J5bGluZS5qcydcbmltcG9ydCB7IEtleWJvYXJkU2hvcnRjdXRIaW50IH0gZnJvbSAnLi4vLi4vLi4vZGVzaWduLXN5c3RlbS9LZXlib2FyZFNob3J0Y3V0SGludC5qcydcbmltcG9ydCB7IHVzZVdpemFyZCB9IGZyb20gJy4uLy4uLy4uL3dpemFyZC9pbmRleC5qcydcbmltcG9ydCB7IFdpemFyZERpYWxvZ0xheW91dCB9IGZyb20gJy4uLy4uLy4uL3dpemFyZC9XaXphcmREaWFsb2dMYXlvdXQuanMnXG5pbXBvcnQgeyBNb2RlbFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vTW9kZWxTZWxlY3Rvci5qcydcbmltcG9ydCB0eXBlIHsgQWdlbnRXaXphcmREYXRhIH0gZnJvbSAnLi4vdHlwZXMuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBNb2RlbFN0ZXAoKTogUmVhY3ROb2RlIHtcbiAgY29uc3QgeyBnb05leHQsIGdvQmFjaywgdXBkYXRlV2l6YXJkRGF0YSwgd2l6YXJkRGF0YSB9ID1cbiAgICB1c2VXaXphcmQ8QWdlbnRXaXphcmREYXRhPigpXG5cbiAgY29uc3QgaGFuZGxlQ29tcGxldGUgPSAobW9kZWw/OiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICB1cGRhdGVXaXphcmREYXRhKHsgc2VsZWN0ZWRNb2RlbDogbW9kZWwgfSlcbiAgICBnb05leHQoKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8V2l6YXJkRGlhbG9nTGF5b3V0XG4gICAgICBzdWJ0aXRsZT1cIlNlbGVjdCBtb2RlbFwiXG4gICAgICBmb290ZXJUZXh0PXtcbiAgICAgICAgPEJ5bGluZT5cbiAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCLihpHihpNcIiBhY3Rpb249XCJuYXZpZ2F0ZVwiIC8+XG4gICAgICAgICAgPEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwiRW50ZXJcIiBhY3Rpb249XCJzZWxlY3RcIiAvPlxuICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgIGFjdGlvbj1cImNvbmZpcm06bm9cIlxuICAgICAgICAgICAgY29udGV4dD1cIkNvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICBmYWxsYmFjaz1cIkVzY1wiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cImdvIGJhY2tcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQnlsaW5lPlxuICAgICAgfVxuICAgID5cbiAgICAgIDxNb2RlbFNlbGVjdG9yXG4gICAgICAgIGluaXRpYWxNb2RlbD17d2l6YXJkRGF0YS5zZWxlY3RlZE1vZGVsfVxuICAgICAgICBvbkNvbXBsZXRlPXtoYW5kbGVDb21wbGV0ZX1cbiAgICAgICAgb25DYW5jZWw9e2dvQmFja31cbiAgICAgIC8+XG4gICAgPC9XaXphcmREaWFsb2dMYXlvdXQ+XG4gIClcbn1cbiIsICJpbXBvcnQgUmVhY3QsIHsgdHlwZSBSZWFjdE5vZGUsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdXNlS2V5YmluZGluZyB9IGZyb20gJy4uLy4uLy4uLy4uL2tleWJpbmRpbmdzL3VzZUtleWJpbmRpbmcuanMnXG5pbXBvcnQgeyBlZGl0UHJvbXB0SW5FZGl0b3IgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9wcm9tcHRFZGl0b3IuanMnXG5pbXBvcnQgeyBDb25maWd1cmFibGVTaG9ydGN1dEhpbnQgfSBmcm9tICcuLi8uLi8uLi9Db25maWd1cmFibGVTaG9ydGN1dEhpbnQuanMnXG5pbXBvcnQgeyBCeWxpbmUgfSBmcm9tICcuLi8uLi8uLi9kZXNpZ24tc3lzdGVtL0J5bGluZS5qcydcbmltcG9ydCB7IEtleWJvYXJkU2hvcnRjdXRIaW50IH0gZnJvbSAnLi4vLi4vLi4vZGVzaWduLXN5c3RlbS9LZXlib2FyZFNob3J0Y3V0SGludC5qcydcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSAnLi4vLi4vLi4vVGV4dElucHV0LmpzJ1xuaW1wb3J0IHsgdXNlV2l6YXJkIH0gZnJvbSAnLi4vLi4vLi4vd2l6YXJkL2luZGV4LmpzJ1xuaW1wb3J0IHsgV2l6YXJkRGlhbG9nTGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vd2l6YXJkL1dpemFyZERpYWxvZ0xheW91dC5qcydcbmltcG9ydCB0eXBlIHsgQWdlbnRXaXphcmREYXRhIH0gZnJvbSAnLi4vdHlwZXMuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9tcHRTdGVwKCk6IFJlYWN0Tm9kZSB7XG4gIGNvbnN0IHsgZ29OZXh0LCBnb0JhY2ssIHVwZGF0ZVdpemFyZERhdGEsIHdpemFyZERhdGEgfSA9XG4gICAgdXNlV2l6YXJkPEFnZW50V2l6YXJkRGF0YT4oKVxuICBjb25zdCBbc3lzdGVtUHJvbXB0LCBzZXRTeXN0ZW1Qcm9tcHRdID0gdXNlU3RhdGUoXG4gICAgd2l6YXJkRGF0YS5zeXN0ZW1Qcm9tcHQgfHwgJycsXG4gIClcbiAgY29uc3QgW2N1cnNvck9mZnNldCwgc2V0Q3Vyc29yT2Zmc2V0XSA9IHVzZVN0YXRlKHN5c3RlbVByb21wdC5sZW5ndGgpXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcblxuICAvLyBIYW5kbGUgZXNjYXBlIGtleSAtIHVzZSBTZXR0aW5ncyBjb250ZXh0IHNvICduJyBrZXkgZG9lc24ndCBjYW5jZWwgKGFsbG93cyB0eXBpbmcgJ24nIGluIGlucHV0KVxuICB1c2VLZXliaW5kaW5nKCdjb25maXJtOm5vJywgZ29CYWNrLCB7IGNvbnRleHQ6ICdTZXR0aW5ncycgfSlcblxuICBjb25zdCBoYW5kbGVFeHRlcm5hbEVkaXRvciA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBlZGl0UHJvbXB0SW5FZGl0b3Ioc3lzdGVtUHJvbXB0KVxuICAgIGlmIChyZXN1bHQuY29udGVudCAhPT0gbnVsbCkge1xuICAgICAgc2V0U3lzdGVtUHJvbXB0KHJlc3VsdC5jb250ZW50KVxuICAgICAgc2V0Q3Vyc29yT2Zmc2V0KHJlc3VsdC5jb250ZW50Lmxlbmd0aClcbiAgICB9XG4gIH0sIFtzeXN0ZW1Qcm9tcHRdKVxuXG4gIHVzZUtleWJpbmRpbmcoJ2NoYXQ6ZXh0ZXJuYWxFZGl0b3InLCBoYW5kbGVFeHRlcm5hbEVkaXRvciwge1xuICAgIGNvbnRleHQ6ICdDaGF0JyxcbiAgfSlcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdHJpbW1lZFByb21wdCA9IHN5c3RlbVByb21wdC50cmltKClcbiAgICBpZiAoIXRyaW1tZWRQcm9tcHQpIHtcbiAgICAgIHNldEVycm9yKCdTeXN0ZW0gcHJvbXB0IGlzIHJlcXVpcmVkJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHNldEVycm9yKG51bGwpXG4gICAgdXBkYXRlV2l6YXJkRGF0YSh7IHN5c3RlbVByb21wdDogdHJpbW1lZFByb21wdCB9KVxuICAgIGdvTmV4dCgpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxXaXphcmREaWFsb2dMYXlvdXRcbiAgICAgIHN1YnRpdGxlPVwiU3lzdGVtIHByb21wdFwiXG4gICAgICBmb290ZXJUZXh0PXtcbiAgICAgICAgPEJ5bGluZT5cbiAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCJUeXBlXCIgYWN0aW9uPVwiZW50ZXIgdGV4dFwiIC8+XG4gICAgICAgICAgPEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwiRW50ZXJcIiBhY3Rpb249XCJjb250aW51ZVwiIC8+XG4gICAgICAgICAgPENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludFxuICAgICAgICAgICAgYWN0aW9uPVwiY2hhdDpleHRlcm5hbEVkaXRvclwiXG4gICAgICAgICAgICBjb250ZXh0PVwiQ2hhdFwiXG4gICAgICAgICAgICBmYWxsYmFjaz1cImN0cmwrZ1wiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIm9wZW4gaW4gZWRpdG9yXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgIGFjdGlvbj1cImNvbmZpcm06bm9cIlxuICAgICAgICAgICAgY29udGV4dD1cIlNldHRpbmdzXCJcbiAgICAgICAgICAgIGZhbGxiYWNrPVwiRXNjXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiZ28gYmFja1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9CeWxpbmU+XG4gICAgICB9XG4gICAgPlxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIDxUZXh0PkVudGVyIHRoZSBzeXN0ZW0gcHJvbXB0IGZvciB5b3VyIGFnZW50OjwvVGV4dD5cbiAgICAgICAgPFRleHQgZGltQ29sb3I+QmUgY29tcHJlaGVuc2l2ZSBmb3IgYmVzdCByZXN1bHRzPC9UZXh0PlxuXG4gICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICB2YWx1ZT17c3lzdGVtUHJvbXB0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e3NldFN5c3RlbVByb21wdH1cbiAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdSBhcmUgYSBoZWxwZnVsIGNvZGUgcmV2aWV3ZXIgd2hvLi4uXCJcbiAgICAgICAgICAgIGNvbHVtbnM9ezgwfVxuICAgICAgICAgICAgY3Vyc29yT2Zmc2V0PXtjdXJzb3JPZmZzZXR9XG4gICAgICAgICAgICBvbkNoYW5nZUN1cnNvck9mZnNldD17c2V0Q3Vyc29yT2Zmc2V0fVxuICAgICAgICAgICAgZm9jdXNcbiAgICAgICAgICAgIHNob3dDdXJzb3JcbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cblxuICAgICAgICB7ZXJyb3IgJiYgKFxuICAgICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZXJyb3JcIj57ZXJyb3J9PC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgPC9XaXphcmREaWFsb2dMYXlvdXQ+XG4gIClcbn1cbiIsICJpbXBvcnQgUmVhY3QsIHsgdHlwZSBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgVG9vbHMgfSBmcm9tICcuLi8uLi8uLi8uLi9Ub29sLmpzJ1xuaW1wb3J0IHsgQ29uZmlndXJhYmxlU2hvcnRjdXRIaW50IH0gZnJvbSAnLi4vLi4vLi4vQ29uZmlndXJhYmxlU2hvcnRjdXRIaW50LmpzJ1xuaW1wb3J0IHsgQnlsaW5lIH0gZnJvbSAnLi4vLi4vLi4vZGVzaWduLXN5c3RlbS9CeWxpbmUuanMnXG5pbXBvcnQgeyBLZXlib2FyZFNob3J0Y3V0SGludCB9IGZyb20gJy4uLy4uLy4uL2Rlc2lnbi1zeXN0ZW0vS2V5Ym9hcmRTaG9ydGN1dEhpbnQuanMnXG5pbXBvcnQgeyB1c2VXaXphcmQgfSBmcm9tICcuLi8uLi8uLi93aXphcmQvaW5kZXguanMnXG5pbXBvcnQgeyBXaXphcmREaWFsb2dMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi93aXphcmQvV2l6YXJkRGlhbG9nTGF5b3V0LmpzJ1xuaW1wb3J0IHsgVG9vbFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vVG9vbFNlbGVjdG9yLmpzJ1xuaW1wb3J0IHR5cGUgeyBBZ2VudFdpemFyZERhdGEgfSBmcm9tICcuLi90eXBlcy5qcydcblxudHlwZSBQcm9wcyA9IHtcbiAgdG9vbHM6IFRvb2xzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUb29sc1N0ZXAoeyB0b29scyB9OiBQcm9wcyk6IFJlYWN0Tm9kZSB7XG4gIGNvbnN0IHsgZ29OZXh0LCBnb0JhY2ssIHVwZGF0ZVdpemFyZERhdGEsIHdpemFyZERhdGEgfSA9XG4gICAgdXNlV2l6YXJkPEFnZW50V2l6YXJkRGF0YT4oKVxuXG4gIGNvbnN0IGhhbmRsZUNvbXBsZXRlID0gKHNlbGVjdGVkVG9vbHM6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKTogdm9pZCA9PiB7XG4gICAgdXBkYXRlV2l6YXJkRGF0YSh7IHNlbGVjdGVkVG9vbHMgfSlcbiAgICBnb05leHQoKVxuICB9XG5cbiAgLy8gUGFzcyB0aHJvdWdoIHVuZGVmaW5lZCB0byBwcmVzZXJ2ZSBcImFsbCB0b29sc1wiIHNlbWFudGljXG4gIC8vIFRvb2xTZWxlY3RvciB3aWxsIGV4cGFuZCBpdCBpbnRlcm5hbGx5IGZvciBkaXNwbGF5IHB1cnBvc2VzXG4gIGNvbnN0IGluaXRpYWxUb29scyA9IHdpemFyZERhdGEuc2VsZWN0ZWRUb29sc1xuXG4gIHJldHVybiAoXG4gICAgPFdpemFyZERpYWxvZ0xheW91dFxuICAgICAgc3VidGl0bGU9XCJTZWxlY3QgdG9vbHNcIlxuICAgICAgZm9vdGVyVGV4dD17XG4gICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAgPEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwiRW50ZXJcIiBhY3Rpb249XCJ0b2dnbGUgc2VsZWN0aW9uXCIgLz5cbiAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCLihpHihpNcIiBhY3Rpb249XCJuYXZpZ2F0ZVwiIC8+XG4gICAgICAgICAgPENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludFxuICAgICAgICAgICAgYWN0aW9uPVwiY29uZmlybTpub1wiXG4gICAgICAgICAgICBjb250ZXh0PVwiQ29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgIGZhbGxiYWNrPVwiRXNjXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiZ28gYmFja1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9CeWxpbmU+XG4gICAgICB9XG4gICAgPlxuICAgICAgPFRvb2xTZWxlY3RvclxuICAgICAgICB0b29scz17dG9vbHN9XG4gICAgICAgIGluaXRpYWxUb29scz17aW5pdGlhbFRvb2xzfVxuICAgICAgICBvbkNvbXBsZXRlPXtoYW5kbGVDb21wbGV0ZX1cbiAgICAgICAgb25DYW5jZWw9e2dvQmFja31cbiAgICAgIC8+XG4gICAgPC9XaXphcmREaWFsb2dMYXlvdXQ+XG4gIClcbn1cbiIsICJpbXBvcnQgUmVhY3QsIHsgdHlwZSBSZWFjdE5vZGUsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9pbmsuanMnXG5pbXBvcnQgeyB1c2VLZXliaW5kaW5nIH0gZnJvbSAnLi4vLi4vLi4vLi4va2V5YmluZGluZ3MvdXNlS2V5YmluZGluZy5qcydcbmltcG9ydCB0eXBlIHsgQWdlbnREZWZpbml0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vdG9vbHMvQWdlbnRUb29sL2xvYWRBZ2VudHNEaXIuanMnXG5pbXBvcnQgeyBDb25maWd1cmFibGVTaG9ydGN1dEhpbnQgfSBmcm9tICcuLi8uLi8uLi9Db25maWd1cmFibGVTaG9ydGN1dEhpbnQuanMnXG5pbXBvcnQgeyBCeWxpbmUgfSBmcm9tICcuLi8uLi8uLi9kZXNpZ24tc3lzdGVtL0J5bGluZS5qcydcbmltcG9ydCB7IEtleWJvYXJkU2hvcnRjdXRIaW50IH0gZnJvbSAnLi4vLi4vLi4vZGVzaWduLXN5c3RlbS9LZXlib2FyZFNob3J0Y3V0SGludC5qcydcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSAnLi4vLi4vLi4vVGV4dElucHV0LmpzJ1xuaW1wb3J0IHsgdXNlV2l6YXJkIH0gZnJvbSAnLi4vLi4vLi4vd2l6YXJkL2luZGV4LmpzJ1xuaW1wb3J0IHsgV2l6YXJkRGlhbG9nTGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vd2l6YXJkL1dpemFyZERpYWxvZ0xheW91dC5qcydcbmltcG9ydCB7IHZhbGlkYXRlQWdlbnRUeXBlIH0gZnJvbSAnLi4vLi4vdmFsaWRhdGVBZ2VudC5qcydcbmltcG9ydCB0eXBlIHsgQWdlbnRXaXphcmREYXRhIH0gZnJvbSAnLi4vdHlwZXMuanMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGV4aXN0aW5nQWdlbnRzOiBBZ2VudERlZmluaXRpb25bXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVHlwZVN0ZXAoX3Byb3BzOiBQcm9wcyk6IFJlYWN0Tm9kZSB7XG4gIGNvbnN0IHsgZ29OZXh0LCBnb0JhY2ssIHVwZGF0ZVdpemFyZERhdGEsIHdpemFyZERhdGEgfSA9XG4gICAgdXNlV2l6YXJkPEFnZW50V2l6YXJkRGF0YT4oKVxuICBjb25zdCBbYWdlbnRUeXBlLCBzZXRBZ2VudFR5cGVdID0gdXNlU3RhdGUod2l6YXJkRGF0YS5hZ2VudFR5cGUgfHwgJycpXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2N1cnNvck9mZnNldCwgc2V0Q3Vyc29yT2Zmc2V0XSA9IHVzZVN0YXRlKGFnZW50VHlwZS5sZW5ndGgpXG5cbiAgLy8gSGFuZGxlIGVzY2FwZSBrZXkgLSBHbyBiYWNrIHRvIE1ldGhvZFN0ZXBcbiAgLy8gVXNlIFNldHRpbmdzIGNvbnRleHQgc28gJ24nIGtleSBkb2Vzbid0IGNhbmNlbCAoYWxsb3dzIHR5cGluZyAnbicgaW4gaW5wdXQpXG4gIHVzZUtleWJpbmRpbmcoJ2NvbmZpcm06bm8nLCBnb0JhY2ssIHsgY29udGV4dDogJ1NldHRpbmdzJyB9KVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICh2YWx1ZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdHJpbW1lZFZhbHVlID0gdmFsdWUudHJpbSgpXG4gICAgY29uc3QgdmFsaWRhdGlvbkVycm9yID0gdmFsaWRhdGVBZ2VudFR5cGUodHJpbW1lZFZhbHVlKVxuXG4gICAgaWYgKHZhbGlkYXRpb25FcnJvcikge1xuICAgICAgc2V0RXJyb3IodmFsaWRhdGlvbkVycm9yKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc2V0RXJyb3IobnVsbClcbiAgICB1cGRhdGVXaXphcmREYXRhKHsgYWdlbnRUeXBlOiB0cmltbWVkVmFsdWUgfSlcbiAgICBnb05leHQoKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8V2l6YXJkRGlhbG9nTGF5b3V0XG4gICAgICBzdWJ0aXRsZT1cIkFnZW50IHR5cGUgKGlkZW50aWZpZXIpXCJcbiAgICAgIGZvb3RlclRleHQ9e1xuICAgICAgICA8QnlsaW5lPlxuICAgICAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cIlR5cGVcIiBhY3Rpb249XCJlbnRlciB0ZXh0XCIgLz5cbiAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCJFbnRlclwiIGFjdGlvbj1cImNvbnRpbnVlXCIgLz5cbiAgICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgICBhY3Rpb249XCJjb25maXJtOm5vXCJcbiAgICAgICAgICAgIGNvbnRleHQ9XCJTZXR0aW5nc1wiXG4gICAgICAgICAgICBmYWxsYmFjaz1cIkVzY1wiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cImdvIGJhY2tcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQnlsaW5lPlxuICAgICAgfVxuICAgID5cbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICA8VGV4dD5FbnRlciBhIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB5b3VyIGFnZW50OjwvVGV4dD5cbiAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXthZ2VudFR5cGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17c2V0QWdlbnRUeXBlfVxuICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiwgdGVzdC1ydW5uZXIsIHRlY2gtbGVhZCwgZXRjXCJcbiAgICAgICAgICAgIGNvbHVtbnM9ezYwfVxuICAgICAgICAgICAgY3Vyc29yT2Zmc2V0PXtjdXJzb3JPZmZzZXR9XG4gICAgICAgICAgICBvbkNoYW5nZUN1cnNvck9mZnNldD17c2V0Q3Vyc29yT2Zmc2V0fVxuICAgICAgICAgICAgZm9jdXNcbiAgICAgICAgICAgIHNob3dDdXJzb3JcbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cblxuICAgICAgICB7ZXJyb3IgJiYgKFxuICAgICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZXJyb3JcIj57ZXJyb3J9PC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgPC9XaXphcmREaWFsb2dMYXlvdXQ+XG4gIClcbn1cbiIsICJpbXBvcnQgUmVhY3QsIHsgdHlwZSBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGlzQXV0b01lbW9yeUVuYWJsZWQgfSBmcm9tICcuLi8uLi8uLi9tZW1kaXIvcGF0aHMuanMnXG5pbXBvcnQgdHlwZSB7IFRvb2xzIH0gZnJvbSAnLi4vLi4vLi4vVG9vbC5qcydcbmltcG9ydCB0eXBlIHsgQWdlbnREZWZpbml0aW9uIH0gZnJvbSAnLi4vLi4vLi4vdG9vbHMvQWdlbnRUb29sL2xvYWRBZ2VudHNEaXIuanMnXG5pbXBvcnQgeyBXaXphcmRQcm92aWRlciB9IGZyb20gJy4uLy4uL3dpemFyZC9pbmRleC5qcydcbmltcG9ydCB0eXBlIHsgV2l6YXJkU3RlcENvbXBvbmVudCB9IGZyb20gJy4uLy4uL3dpemFyZC90eXBlcy5qcydcbmltcG9ydCB0eXBlIHsgQWdlbnRXaXphcmREYXRhIH0gZnJvbSAnLi90eXBlcy5qcydcbmltcG9ydCB7IENvbG9yU3RlcCB9IGZyb20gJy4vd2l6YXJkLXN0ZXBzL0NvbG9yU3RlcC5qcydcbmltcG9ydCB7IENvbmZpcm1TdGVwV3JhcHBlciB9IGZyb20gJy4vd2l6YXJkLXN0ZXBzL0NvbmZpcm1TdGVwV3JhcHBlci5qcydcbmltcG9ydCB7IERlc2NyaXB0aW9uU3RlcCB9IGZyb20gJy4vd2l6YXJkLXN0ZXBzL0Rlc2NyaXB0aW9uU3RlcC5qcydcbmltcG9ydCB7IEdlbmVyYXRlU3RlcCB9IGZyb20gJy4vd2l6YXJkLXN0ZXBzL0dlbmVyYXRlU3RlcC5qcydcbmltcG9ydCB7IExvY2F0aW9uU3RlcCB9IGZyb20gJy4vd2l6YXJkLXN0ZXBzL0xvY2F0aW9uU3RlcC5qcydcbmltcG9ydCB7IE1lbW9yeVN0ZXAgfSBmcm9tICcuL3dpemFyZC1zdGVwcy9NZW1vcnlTdGVwLmpzJ1xuaW1wb3J0IHsgTWV0aG9kU3RlcCB9IGZyb20gJy4vd2l6YXJkLXN0ZXBzL01ldGhvZFN0ZXAuanMnXG5pbXBvcnQgeyBNb2RlbFN0ZXAgfSBmcm9tICcuL3dpemFyZC1zdGVwcy9Nb2RlbFN0ZXAuanMnXG5pbXBvcnQgeyBQcm9tcHRTdGVwIH0gZnJvbSAnLi93aXphcmQtc3RlcHMvUHJvbXB0U3RlcC5qcydcbmltcG9ydCB7IFRvb2xzU3RlcCB9IGZyb20gJy4vd2l6YXJkLXN0ZXBzL1Rvb2xzU3RlcC5qcydcbmltcG9ydCB7IFR5cGVTdGVwIH0gZnJvbSAnLi93aXphcmQtc3RlcHMvVHlwZVN0ZXAuanMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRvb2xzOiBUb29sc1xuICBleGlzdGluZ0FnZW50czogQWdlbnREZWZpbml0aW9uW11cbiAgb25Db21wbGV0ZTogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZFxuICBvbkNhbmNlbDogKCkgPT4gdm9pZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlQWdlbnRXaXphcmQoe1xuICB0b29scyxcbiAgZXhpc3RpbmdBZ2VudHMsXG4gIG9uQ29tcGxldGUsXG4gIG9uQ2FuY2VsLFxufTogUHJvcHMpOiBSZWFjdE5vZGUge1xuICAvLyBDcmVhdGUgc3RlcCBjb21wb25lbnRzIHdpdGggcHJvcHNcbiAgY29uc3Qgc3RlcHM6IFdpemFyZFN0ZXBDb21wb25lbnQ8QWdlbnRXaXphcmREYXRhPltdID0gW1xuICAgIExvY2F0aW9uU3RlcCwgLy8gMFxuICAgIE1ldGhvZFN0ZXAsIC8vIDFcbiAgICBHZW5lcmF0ZVN0ZXAsIC8vIDJcbiAgICAoKSA9PiA8VHlwZVN0ZXAgZXhpc3RpbmdBZ2VudHM9e2V4aXN0aW5nQWdlbnRzfSAvPiwgLy8gM1xuICAgIFByb21wdFN0ZXAsIC8vIDRcbiAgICBEZXNjcmlwdGlvblN0ZXAsIC8vIDVcbiAgICAoKSA9PiA8VG9vbHNTdGVwIHRvb2xzPXt0b29sc30gLz4sIC8vIDZcbiAgICBNb2RlbFN0ZXAsIC8vIDdcbiAgICBDb2xvclN0ZXAsIC8vIDhcbiAgICAvLyBNZW1vcnlTdGVwIGlzIGNvbmRpdGlvbmFsbHkgaW5jbHVkZWQgYmFzZWQgb24gR3Jvd3RoQm9vayBnYXRlXG4gICAgLi4uKGlzQXV0b01lbW9yeUVuYWJsZWQoKSA/IFtNZW1vcnlTdGVwXSA6IFtdKSxcbiAgICAoKSA9PiAoXG4gICAgICA8Q29uZmlybVN0ZXBXcmFwcGVyXG4gICAgICAgIHRvb2xzPXt0b29sc31cbiAgICAgICAgZXhpc3RpbmdBZ2VudHM9e2V4aXN0aW5nQWdlbnRzfVxuICAgICAgICBvbkNvbXBsZXRlPXtvbkNvbXBsZXRlfVxuICAgICAgLz5cbiAgICApLFxuICBdXG5cbiAgcmV0dXJuIChcbiAgICA8V2l6YXJkUHJvdmlkZXI8QWdlbnRXaXphcmREYXRhPlxuICAgICAgc3RlcHM9e3N0ZXBzfVxuICAgICAgaW5pdGlhbERhdGE9e3t9fVxuICAgICAgb25Db21wbGV0ZT17KCkgPT4ge1xuICAgICAgICAvLyBXaXphcmQgY29tcGxldGlvbiBpcyBoYW5kbGVkIGJ5IENvbmZpcm1TdGVwV3JhcHBlclxuICAgICAgICAvLyB3aGljaCBjYWxscyBvbkNvbXBsZXRlIHdpdGggdGhlIGFwcHJvcHJpYXRlIG1lc3NhZ2VcbiAgICAgIH19XG4gICAgICBvbkNhbmNlbD17b25DYW5jZWx9XG4gICAgICB0aXRsZT1cIkNyZWF0ZSBuZXcgYWdlbnRcIlxuICAgICAgc2hvd1N0ZXBDb3VudGVyPXtmYWxzZX1cbiAgICAvPlxuICApXG59XG4iLCAiaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJ1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgU2V0dGluZ1NvdXJjZSB9IGZyb20gJ3NyYy91dGlscy9zZXR0aW5ncy9jb25zdGFudHMuanMnXG5pbXBvcnQgdHlwZSB7IENvbW1hbmRSZXN1bHREaXNwbGF5IH0gZnJvbSAnLi4vLi4vY29tbWFuZHMuanMnXG5pbXBvcnQgeyB1c2VFeGl0T25DdHJsQ0RXaXRoS2V5YmluZGluZ3MgfSBmcm9tICcuLi8uLi9ob29rcy91c2VFeGl0T25DdHJsQ0RXaXRoS2V5YmluZGluZ3MuanMnXG5pbXBvcnQgeyB1c2VNZXJnZWRUb29scyB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZU1lcmdlZFRvb2xzLmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdXNlQXBwU3RhdGUsIHVzZVNldEFwcFN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUvQXBwU3RhdGUuanMnXG5pbXBvcnQgdHlwZSB7IFRvb2xzIH0gZnJvbSAnLi4vLi4vVG9vbC5qcydcbmltcG9ydCB7XG4gIHR5cGUgUmVzb2x2ZWRBZ2VudCxcbiAgcmVzb2x2ZUFnZW50T3ZlcnJpZGVzLFxufSBmcm9tICcuLi8uLi90b29scy9BZ2VudFRvb2wvYWdlbnREaXNwbGF5LmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBBZ2VudERlZmluaXRpb24sXG4gIGdldEFjdGl2ZUFnZW50c0Zyb21MaXN0LFxufSBmcm9tICcuLi8uLi90b29scy9BZ2VudFRvb2wvbG9hZEFnZW50c0Rpci5qcydcbmltcG9ydCB7IHRvRXJyb3IgfSBmcm9tICcuLi8uLi91dGlscy9lcnJvcnMuanMnXG5pbXBvcnQgeyBsb2dFcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZy5qcydcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJy4uL0N1c3RvbVNlbGVjdC9zZWxlY3QuanMnXG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICcuLi9kZXNpZ24tc3lzdGVtL0RpYWxvZy5qcydcbmltcG9ydCB7IEFnZW50RGV0YWlsIH0gZnJvbSAnLi9BZ2VudERldGFpbC5qcydcbmltcG9ydCB7IEFnZW50RWRpdG9yIH0gZnJvbSAnLi9BZ2VudEVkaXRvci5qcydcbmltcG9ydCB7IEFnZW50TmF2aWdhdGlvbkZvb3RlciB9IGZyb20gJy4vQWdlbnROYXZpZ2F0aW9uRm9vdGVyLmpzJ1xuaW1wb3J0IHsgQWdlbnRzTGlzdCB9IGZyb20gJy4vQWdlbnRzTGlzdC5qcydcbmltcG9ydCB7IGRlbGV0ZUFnZW50RnJvbUZpbGUgfSBmcm9tICcuL2FnZW50RmlsZVV0aWxzLmpzJ1xuaW1wb3J0IHsgQ3JlYXRlQWdlbnRXaXphcmQgfSBmcm9tICcuL25ldy1hZ2VudC1jcmVhdGlvbi9DcmVhdGVBZ2VudFdpemFyZC5qcydcbmltcG9ydCB0eXBlIHsgTW9kZVN0YXRlIH0gZnJvbSAnLi90eXBlcy5qcydcblxudHlwZSBQcm9wcyA9IHtcbiAgdG9vbHM6IFRvb2xzXG4gIG9uRXhpdDogKFxuICAgIHJlc3VsdD86IHN0cmluZyxcbiAgICBvcHRpb25zPzogeyBkaXNwbGF5PzogQ29tbWFuZFJlc3VsdERpc3BsYXkgfSxcbiAgKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBZ2VudHNNZW51KHsgdG9vbHMsIG9uRXhpdCB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IFttb2RlU3RhdGUsIHNldE1vZGVTdGF0ZV0gPSB1c2VTdGF0ZTxNb2RlU3RhdGU+KHtcbiAgICBtb2RlOiAnbGlzdC1hZ2VudHMnLFxuICAgIHNvdXJjZTogJ2FsbCcsXG4gIH0pXG4gIGNvbnN0IGFnZW50RGVmaW5pdGlvbnMgPSB1c2VBcHBTdGF0ZShzID0+IHMuYWdlbnREZWZpbml0aW9ucylcbiAgY29uc3QgbWNwVG9vbHMgPSB1c2VBcHBTdGF0ZShzID0+IHMubWNwLnRvb2xzKVxuICBjb25zdCB0b29sUGVybWlzc2lvbkNvbnRleHQgPSB1c2VBcHBTdGF0ZShzID0+IHMudG9vbFBlcm1pc3Npb25Db250ZXh0KVxuICBjb25zdCBzZXRBcHBTdGF0ZSA9IHVzZVNldEFwcFN0YXRlKClcbiAgY29uc3QgeyBhbGxBZ2VudHMsIGFjdGl2ZUFnZW50czogYWdlbnRzIH0gPSBhZ2VudERlZmluaXRpb25zXG4gIGNvbnN0IFtjaGFuZ2VzLCBzZXRDaGFuZ2VzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSlcblxuICAvLyBHZXQgTUNQIHRvb2xzIGZyb20gYXBwIHN0YXRlIGFuZCBtZXJnZSB3aXRoIGxvY2FsIHRvb2xzXG4gIGNvbnN0IG1lcmdlZFRvb2xzID0gdXNlTWVyZ2VkVG9vbHModG9vbHMsIG1jcFRvb2xzLCB0b29sUGVybWlzc2lvbkNvbnRleHQpXG5cbiAgdXNlRXhpdE9uQ3RybENEV2l0aEtleWJpbmRpbmdzKClcblxuICBjb25zdCBhZ2VudHNCeVNvdXJjZTogUmVjb3JkPFxuICAgIFNldHRpbmdTb3VyY2UgfCAnYWxsJyB8ICdidWlsdC1pbicgfCAncGx1Z2luJyxcbiAgICBBZ2VudERlZmluaXRpb25bXVxuICA+ID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgJ2J1aWx0LWluJzogYWxsQWdlbnRzLmZpbHRlcihhID0+IGEuc291cmNlID09PSAnYnVpbHQtaW4nKSxcbiAgICAgIHVzZXJTZXR0aW5nczogYWxsQWdlbnRzLmZpbHRlcihhID0+IGEuc291cmNlID09PSAndXNlclNldHRpbmdzJyksXG4gICAgICBwcm9qZWN0U2V0dGluZ3M6IGFsbEFnZW50cy5maWx0ZXIoYSA9PiBhLnNvdXJjZSA9PT0gJ3Byb2plY3RTZXR0aW5ncycpLFxuICAgICAgcG9saWN5U2V0dGluZ3M6IGFsbEFnZW50cy5maWx0ZXIoYSA9PiBhLnNvdXJjZSA9PT0gJ3BvbGljeVNldHRpbmdzJyksXG4gICAgICBsb2NhbFNldHRpbmdzOiBhbGxBZ2VudHMuZmlsdGVyKGEgPT4gYS5zb3VyY2UgPT09ICdsb2NhbFNldHRpbmdzJyksXG4gICAgICBmbGFnU2V0dGluZ3M6IGFsbEFnZW50cy5maWx0ZXIoYSA9PiBhLnNvdXJjZSA9PT0gJ2ZsYWdTZXR0aW5ncycpLFxuICAgICAgcGx1Z2luOiBhbGxBZ2VudHMuZmlsdGVyKGEgPT4gYS5zb3VyY2UgPT09ICdwbHVnaW4nKSxcbiAgICAgIGFsbDogYWxsQWdlbnRzLFxuICAgIH0pLFxuICAgIFthbGxBZ2VudHNdLFxuICApXG5cbiAgY29uc3QgaGFuZGxlQWdlbnRDcmVhdGVkID0gdXNlQ2FsbGJhY2soKG1lc3NhZ2U6IHN0cmluZykgPT4ge1xuICAgIHNldENoYW5nZXMocHJldiA9PiBbLi4ucHJldiwgbWVzc2FnZV0pXG4gICAgc2V0TW9kZVN0YXRlKHsgbW9kZTogJ2xpc3QtYWdlbnRzJywgc291cmNlOiAnYWxsJyB9KVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVBZ2VudERlbGV0ZWQgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyAoYWdlbnQ6IEFnZW50RGVmaW5pdGlvbikgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGVsZXRlQWdlbnRGcm9tRmlsZShhZ2VudClcbiAgICAgICAgc2V0QXBwU3RhdGUoc3RhdGUgPT4ge1xuICAgICAgICAgIGNvbnN0IGFsbEFnZW50cyA9IHN0YXRlLmFnZW50RGVmaW5pdGlvbnMuYWxsQWdlbnRzLmZpbHRlcihcbiAgICAgICAgICAgIGEgPT5cbiAgICAgICAgICAgICAgIShhLmFnZW50VHlwZSA9PT0gYWdlbnQuYWdlbnRUeXBlICYmIGEuc291cmNlID09PSBhZ2VudC5zb3VyY2UpLFxuICAgICAgICAgIClcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBhZ2VudERlZmluaXRpb25zOiB7XG4gICAgICAgICAgICAgIC4uLnN0YXRlLmFnZW50RGVmaW5pdGlvbnMsXG4gICAgICAgICAgICAgIGFsbEFnZW50cyxcbiAgICAgICAgICAgICAgYWN0aXZlQWdlbnRzOiBnZXRBY3RpdmVBZ2VudHNGcm9tTGlzdChhbGxBZ2VudHMpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgc2V0Q2hhbmdlcyhwcmV2ID0+IFtcbiAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgIGBEZWxldGVkIGFnZW50OiAke2NoYWxrLmJvbGQoYWdlbnQuYWdlbnRUeXBlKX1gLFxuICAgICAgICBdKVxuICAgICAgICAvLyBHbyBiYWNrIHRvIHRoZSBhZ2VudHMgbGlzdCBhZnRlciBkZWxldGlvblxuICAgICAgICBzZXRNb2RlU3RhdGUoeyBtb2RlOiAnbGlzdC1hZ2VudHMnLCBzb3VyY2U6ICdhbGwnIH0pXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBsb2dFcnJvcih0b0Vycm9yKGVycm9yKSlcbiAgICAgIH1cbiAgICB9LFxuICAgIFtzZXRBcHBTdGF0ZV0sXG4gIClcblxuICAvLyBSZW5kZXIgYmFzZWQgb24gbW9kZVxuICBzd2l0Y2ggKG1vZGVTdGF0ZS5tb2RlKSB7XG4gICAgY2FzZSAnbGlzdC1hZ2VudHMnOiB7XG4gICAgICBjb25zdCBhZ2VudHNUb1Nob3cgPVxuICAgICAgICBtb2RlU3RhdGUuc291cmNlID09PSAnYWxsJ1xuICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAuLi5hZ2VudHNCeVNvdXJjZVsnYnVpbHQtaW4nXSxcbiAgICAgICAgICAgICAgLi4uYWdlbnRzQnlTb3VyY2VbJ3VzZXJTZXR0aW5ncyddLFxuICAgICAgICAgICAgICAuLi5hZ2VudHNCeVNvdXJjZVsncHJvamVjdFNldHRpbmdzJ10sXG4gICAgICAgICAgICAgIC4uLmFnZW50c0J5U291cmNlWydsb2NhbFNldHRpbmdzJ10sXG4gICAgICAgICAgICAgIC4uLmFnZW50c0J5U291cmNlWydwb2xpY3lTZXR0aW5ncyddLFxuICAgICAgICAgICAgICAuLi5hZ2VudHNCeVNvdXJjZVsnZmxhZ1NldHRpbmdzJ10sXG4gICAgICAgICAgICAgIC4uLmFnZW50c0J5U291cmNlWydwbHVnaW4nXSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICA6IGFnZW50c0J5U291cmNlW21vZGVTdGF0ZS5zb3VyY2VdXG5cbiAgICAgIC8vIFJlc29sdmUgb3ZlcnJpZGVzIGFuZCBmaWx0ZXIgdG8gdGhlIGFnZW50cyB3ZSB3YW50IHRvIHNob3dcbiAgICAgIGNvbnN0IGFsbFJlc29sdmVkID0gcmVzb2x2ZUFnZW50T3ZlcnJpZGVzKGFnZW50c1RvU2hvdywgYWdlbnRzKVxuICAgICAgY29uc3QgcmVzb2x2ZWRBZ2VudHM6IFJlc29sdmVkQWdlbnRbXSA9IGFsbFJlc29sdmVkXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEFnZW50c0xpc3RcbiAgICAgICAgICAgIHNvdXJjZT17bW9kZVN0YXRlLnNvdXJjZX1cbiAgICAgICAgICAgIGFnZW50cz17cmVzb2x2ZWRBZ2VudHN9XG4gICAgICAgICAgICBvbkJhY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZXhpdE1lc3NhZ2UgPVxuICAgICAgICAgICAgICAgIGNoYW5nZXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgPyBgQWdlbnQgY2hhbmdlczpcXG4ke2NoYW5nZXMuam9pbignXFxuJyl9YFxuICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgb25FeGl0KGV4aXRNZXNzYWdlID8/ICdBZ2VudHMgZGlhbG9nIGRpc21pc3NlZCcsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBjaGFuZ2VzLmxlbmd0aCA9PT0gMCA/ICdzeXN0ZW0nIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uU2VsZWN0PXthZ2VudCA9PlxuICAgICAgICAgICAgICBzZXRNb2RlU3RhdGUoe1xuICAgICAgICAgICAgICAgIG1vZGU6ICdhZ2VudC1tZW51JyxcbiAgICAgICAgICAgICAgICBhZ2VudCxcbiAgICAgICAgICAgICAgICBwcmV2aW91c01vZGU6IG1vZGVTdGF0ZSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uQ3JlYXRlTmV3PXsoKSA9PiBzZXRNb2RlU3RhdGUoeyBtb2RlOiAnY3JlYXRlLWFnZW50JyB9KX1cbiAgICAgICAgICAgIGNoYW5nZXM9e2NoYW5nZXN9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QWdlbnROYXZpZ2F0aW9uRm9vdGVyIC8+XG4gICAgICAgIDwvPlxuICAgICAgKVxuICAgIH1cblxuICAgIGNhc2UgJ2NyZWF0ZS1hZ2VudCc6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q3JlYXRlQWdlbnRXaXphcmRcbiAgICAgICAgICB0b29scz17bWVyZ2VkVG9vbHN9XG4gICAgICAgICAgZXhpc3RpbmdBZ2VudHM9e2FnZW50c31cbiAgICAgICAgICBvbkNvbXBsZXRlPXtoYW5kbGVBZ2VudENyZWF0ZWR9XG4gICAgICAgICAgb25DYW5jZWw9eygpID0+IHNldE1vZGVTdGF0ZSh7IG1vZGU6ICdsaXN0LWFnZW50cycsIHNvdXJjZTogJ2FsbCcgfSl9XG4gICAgICAgIC8+XG4gICAgICApXG5cbiAgICBjYXNlICdhZ2VudC1tZW51Jzoge1xuICAgICAgLy8gQWx3YXlzIHVzZSBmcmVzaCBhZ2VudCBkYXRhXG4gICAgICBjb25zdCBmcmVzaEFnZW50ID0gYWxsQWdlbnRzLmZpbmQoXG4gICAgICAgIGEgPT5cbiAgICAgICAgICBhLmFnZW50VHlwZSA9PT0gbW9kZVN0YXRlLmFnZW50LmFnZW50VHlwZSAmJlxuICAgICAgICAgIGEuc291cmNlID09PSBtb2RlU3RhdGUuYWdlbnQuc291cmNlLFxuICAgICAgKVxuICAgICAgY29uc3QgYWdlbnRUb1VzZSA9IGZyZXNoQWdlbnQgfHwgbW9kZVN0YXRlLmFnZW50XG5cbiAgICAgIGNvbnN0IGlzRWRpdGFibGUgPVxuICAgICAgICBhZ2VudFRvVXNlLnNvdXJjZSAhPT0gJ2J1aWx0LWluJyAmJlxuICAgICAgICBhZ2VudFRvVXNlLnNvdXJjZSAhPT0gJ3BsdWdpbicgJiZcbiAgICAgICAgYWdlbnRUb1VzZS5zb3VyY2UgIT09ICdmbGFnU2V0dGluZ3MnXG4gICAgICBjb25zdCBtZW51SXRlbXMgPSBbXG4gICAgICAgIHsgbGFiZWw6ICdWaWV3IGFnZW50JywgdmFsdWU6ICd2aWV3JyB9LFxuICAgICAgICAuLi4oaXNFZGl0YWJsZVxuICAgICAgICAgID8gW1xuICAgICAgICAgICAgICB7IGxhYmVsOiAnRWRpdCBhZ2VudCcsIHZhbHVlOiAnZWRpdCcgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogJ0RlbGV0ZSBhZ2VudCcsIHZhbHVlOiAnZGVsZXRlJyB9LFxuICAgICAgICAgICAgXVxuICAgICAgICAgIDogW10pLFxuICAgICAgICB7IGxhYmVsOiAnQmFjaycsIHZhbHVlOiAnYmFjaycgfSxcbiAgICAgIF1cblxuICAgICAgY29uc3QgaGFuZGxlTWVudVNlbGVjdCA9ICh2YWx1ZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICBjYXNlICd2aWV3JzpcbiAgICAgICAgICAgIHNldE1vZGVTdGF0ZSh7XG4gICAgICAgICAgICAgIG1vZGU6ICd2aWV3LWFnZW50JyxcbiAgICAgICAgICAgICAgYWdlbnQ6IGFnZW50VG9Vc2UsXG4gICAgICAgICAgICAgIHByZXZpb3VzTW9kZTogbW9kZVN0YXRlLnByZXZpb3VzTW9kZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGNhc2UgJ2VkaXQnOlxuICAgICAgICAgICAgc2V0TW9kZVN0YXRlKHtcbiAgICAgICAgICAgICAgbW9kZTogJ2VkaXQtYWdlbnQnLFxuICAgICAgICAgICAgICBhZ2VudDogYWdlbnRUb1VzZSxcbiAgICAgICAgICAgICAgcHJldmlvdXNNb2RlOiBtb2RlU3RhdGUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICAgICAgc2V0TW9kZVN0YXRlKHtcbiAgICAgICAgICAgICAgbW9kZTogJ2RlbGV0ZS1jb25maXJtJyxcbiAgICAgICAgICAgICAgYWdlbnQ6IGFnZW50VG9Vc2UsXG4gICAgICAgICAgICAgIHByZXZpb3VzTW9kZTogbW9kZVN0YXRlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgY2FzZSAnYmFjayc6XG4gICAgICAgICAgICBzZXRNb2RlU3RhdGUobW9kZVN0YXRlLnByZXZpb3VzTW9kZSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RGlhbG9nXG4gICAgICAgICAgICB0aXRsZT17bW9kZVN0YXRlLmFnZW50LmFnZW50VHlwZX1cbiAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBzZXRNb2RlU3RhdGUobW9kZVN0YXRlLnByZXZpb3VzTW9kZSl9XG4gICAgICAgICAgICBoaWRlSW5wdXRHdWlkZVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17bWVudUl0ZW1zfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVNZW51U2VsZWN0fVxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBzZXRNb2RlU3RhdGUobW9kZVN0YXRlLnByZXZpb3VzTW9kZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtjaGFuZ2VzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPntjaGFuZ2VzW2NoYW5nZXMubGVuZ3RoIC0gMV19PC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9EaWFsb2c+XG4gICAgICAgICAgPEFnZW50TmF2aWdhdGlvbkZvb3RlciAvPlxuICAgICAgICA8Lz5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjYXNlICd2aWV3LWFnZW50Jzoge1xuICAgICAgLy8gQWx3YXlzIHVzZSBmcmVzaCBhZ2VudCBkYXRhIGZyb20gYWxsQWdlbnRzXG4gICAgICBjb25zdCBmcmVzaEFnZW50ID0gYWxsQWdlbnRzLmZpbmQoXG4gICAgICAgIGEgPT5cbiAgICAgICAgICBhLmFnZW50VHlwZSA9PT0gbW9kZVN0YXRlLmFnZW50LmFnZW50VHlwZSAmJlxuICAgICAgICAgIGEuc291cmNlID09PSBtb2RlU3RhdGUuYWdlbnQuc291cmNlLFxuICAgICAgKVxuICAgICAgY29uc3QgYWdlbnRUb0Rpc3BsYXkgPSBmcmVzaEFnZW50IHx8IG1vZGVTdGF0ZS5hZ2VudFxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxEaWFsb2dcbiAgICAgICAgICAgIHRpdGxlPXthZ2VudFRvRGlzcGxheS5hZ2VudFR5cGV9XG4gICAgICAgICAgICBvbkNhbmNlbD17KCkgPT5cbiAgICAgICAgICAgICAgc2V0TW9kZVN0YXRlKHtcbiAgICAgICAgICAgICAgICBtb2RlOiAnYWdlbnQtbWVudScsXG4gICAgICAgICAgICAgICAgYWdlbnQ6IGFnZW50VG9EaXNwbGF5LFxuICAgICAgICAgICAgICAgIHByZXZpb3VzTW9kZTogbW9kZVN0YXRlLnByZXZpb3VzTW9kZSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhpZGVJbnB1dEd1aWRlXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEFnZW50RGV0YWlsXG4gICAgICAgICAgICAgIGFnZW50PXthZ2VudFRvRGlzcGxheX1cbiAgICAgICAgICAgICAgdG9vbHM9e21lcmdlZFRvb2xzfVxuICAgICAgICAgICAgICBhbGxBZ2VudHM9e2FsbEFnZW50c31cbiAgICAgICAgICAgICAgb25CYWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgIHNldE1vZGVTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBtb2RlOiAnYWdlbnQtbWVudScsXG4gICAgICAgICAgICAgICAgICBhZ2VudDogYWdlbnRUb0Rpc3BsYXksXG4gICAgICAgICAgICAgICAgICBwcmV2aW91c01vZGU6IG1vZGVTdGF0ZS5wcmV2aW91c01vZGUsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0RpYWxvZz5cbiAgICAgICAgICA8QWdlbnROYXZpZ2F0aW9uRm9vdGVyIGluc3RydWN0aW9ucz1cIlByZXNzIEVudGVyIG9yIEVzYyB0byBnbyBiYWNrXCIgLz5cbiAgICAgICAgPC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgY2FzZSAnZGVsZXRlLWNvbmZpcm0nOiB7XG4gICAgICBjb25zdCBkZWxldGVPcHRpb25zID0gW1xuICAgICAgICB7IGxhYmVsOiAnWWVzLCBkZWxldGUnLCB2YWx1ZTogJ3llcycgfSxcbiAgICAgICAgeyBsYWJlbDogJ05vLCBjYW5jZWwnLCB2YWx1ZTogJ25vJyB9LFxuICAgICAgXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxEaWFsb2dcbiAgICAgICAgICAgIHRpdGxlPVwiRGVsZXRlIGFnZW50XCJcbiAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICgncHJldmlvdXNNb2RlJyBpbiBtb2RlU3RhdGUpXG4gICAgICAgICAgICAgICAgc2V0TW9kZVN0YXRlKG1vZGVTdGF0ZS5wcmV2aW91c01vZGUpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY29sb3I9XCJlcnJvclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhlIGFnZW50eycgJ31cbiAgICAgICAgICAgICAgPFRleHQgYm9sZD57bW9kZVN0YXRlLmFnZW50LmFnZW50VHlwZX08L1RleHQ+P1xuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5Tb3VyY2U6IHttb2RlU3RhdGUuYWdlbnQuc291cmNlfTwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17ZGVsZXRlT3B0aW9uc31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJ3llcycpIHtcbiAgICAgICAgICAgICAgICAgICAgdm9pZCBoYW5kbGVBZ2VudERlbGV0ZWQobW9kZVN0YXRlLmFnZW50KVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCdwcmV2aW91c01vZGUnIGluIG1vZGVTdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHNldE1vZGVTdGF0ZShtb2RlU3RhdGUucHJldmlvdXNNb2RlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKCdwcmV2aW91c01vZGUnIGluIG1vZGVTdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRNb2RlU3RhdGUobW9kZVN0YXRlLnByZXZpb3VzTW9kZSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9EaWFsb2c+XG4gICAgICAgICAgPEFnZW50TmF2aWdhdGlvbkZvb3RlciBpbnN0cnVjdGlvbnM9XCJQcmVzcyDihpHihpMgdG8gbmF2aWdhdGUsIEVudGVyIHRvIHNlbGVjdCwgRXNjIHRvIGNhbmNlbFwiIC8+XG4gICAgICAgIDwvPlxuICAgICAgKVxuICAgIH1cblxuICAgIGNhc2UgJ2VkaXQtYWdlbnQnOiB7XG4gICAgICAvLyBBbHdheXMgdXNlIGZyZXNoIGFnZW50IGRhdGFcbiAgICAgIGNvbnN0IGZyZXNoQWdlbnQgPSBhbGxBZ2VudHMuZmluZChcbiAgICAgICAgYSA9PlxuICAgICAgICAgIGEuYWdlbnRUeXBlID09PSBtb2RlU3RhdGUuYWdlbnQuYWdlbnRUeXBlICYmXG4gICAgICAgICAgYS5zb3VyY2UgPT09IG1vZGVTdGF0ZS5hZ2VudC5zb3VyY2UsXG4gICAgICApXG4gICAgICBjb25zdCBhZ2VudFRvRWRpdCA9IGZyZXNoQWdlbnQgfHwgbW9kZVN0YXRlLmFnZW50XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPERpYWxvZ1xuICAgICAgICAgICAgdGl0bGU9e2BFZGl0IGFnZW50OiAke2FnZW50VG9FZGl0LmFnZW50VHlwZX1gfVxuICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHNldE1vZGVTdGF0ZShtb2RlU3RhdGUucHJldmlvdXNNb2RlKX1cbiAgICAgICAgICAgIGhpZGVJbnB1dEd1aWRlXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEFnZW50RWRpdG9yXG4gICAgICAgICAgICAgIGFnZW50PXthZ2VudFRvRWRpdH1cbiAgICAgICAgICAgICAgdG9vbHM9e21lcmdlZFRvb2xzfVxuICAgICAgICAgICAgICBvblNhdmVkPXttZXNzYWdlID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVBZ2VudENyZWF0ZWQobWVzc2FnZSlcbiAgICAgICAgICAgICAgICBzZXRNb2RlU3RhdGUobW9kZVN0YXRlLnByZXZpb3VzTW9kZSlcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25CYWNrPXsoKSA9PiBzZXRNb2RlU3RhdGUobW9kZVN0YXRlLnByZXZpb3VzTW9kZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRGlhbG9nPlxuICAgICAgICAgIDxBZ2VudE5hdmlnYXRpb25Gb290ZXIgLz5cbiAgICAgICAgPC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsXG4gIH1cbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFnZW50c01lbnUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2FnZW50cy9BZ2VudHNNZW51LmpzJ1xuaW1wb3J0IHR5cGUgeyBUb29sVXNlQ29udGV4dCB9IGZyb20gJy4uLy4uL1Rvb2wuanMnXG5pbXBvcnQgeyBnZXRUb29scyB9IGZyb20gJy4uLy4uL3Rvb2xzLmpzJ1xuaW1wb3J0IHR5cGUgeyBMb2NhbEpTWENvbW1hbmRPbkRvbmUgfSBmcm9tICcuLi8uLi90eXBlcy9jb21tYW5kLmpzJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsbChcbiAgb25Eb25lOiBMb2NhbEpTWENvbW1hbmRPbkRvbmUsXG4gIGNvbnRleHQ6IFRvb2xVc2VDb250ZXh0LFxuKTogUHJvbWlzZTxSZWFjdC5SZWFjdE5vZGU+IHtcbiAgY29uc3QgYXBwU3RhdGUgPSBjb250ZXh0LmdldEFwcFN0YXRlKClcbiAgY29uc3QgcGVybWlzc2lvbkNvbnRleHQgPSBhcHBTdGF0ZS50b29sUGVybWlzc2lvbkNvbnRleHRcbiAgY29uc3QgdG9vbHMgPSBnZXRUb29scyhwZXJtaXNzaW9uQ29udGV4dClcblxuICByZXR1cm4gPEFnZW50c01lbnUgdG9vbHM9e3Rvb2xzfSBvbkV4aXQ9e29uRG9uZX0gLz5cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUdhO0FBSGI7QUFBQTtBQUdPLElBQU0sY0FBYztBQUFBLE1BQ3pCLGFBQWE7QUFBQSxNQUNiLFlBQVk7QUFBQSxJQUNkO0FBQUE7QUFBQTs7O0FDTkEsU0FBUyxPQUFPLE1BQU0sY0FBYztBQUNwQyxTQUFTLFlBQVk7QUFrQmQsU0FBUyxzQkFDZCxXQUNBLFdBQ0EsT0FDQSxjQUNBLE9BQ0EsT0FDQSxRQUNBLFFBQ1E7QUFLUixRQUFNLG1CQUFtQixVQUN0QixRQUFRLE9BQU8sTUFBTSxFQUNyQixRQUFRLE1BQU0sS0FBSyxFQUNuQixRQUFRLE9BQU8sT0FBTztBQUd6QixRQUFNLGFBQ0osVUFBVSxVQUFjLE1BQU0sV0FBVyxLQUFLLE1BQU0sQ0FBQyxNQUFNO0FBQzdELFFBQU0sWUFBWSxhQUFhLEtBQUs7QUFBQSxTQUFZ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RSxZQUFZO0FBQ3JDLFFBQU1DLG9CQUFvQkYsU0FBU0c7QUFDbkMsUUFBTUMsUUFBUUMsU0FBU0gsaUJBQWlCO0FBRXhDLFNBQU8sOEJBQUMsY0FBVyxPQUFjLFFBQVFKLFFBQU87QUFDbEQ7QUFmQTs7O0FBQ0E7QUFFQTs7OyIsCiAgIm5hbWVzIjogWyJBZ2VudERldGFpbCIsICJ0MCIsICIkIiwgIl9jIiwgImFnZW50IiwgInRvb2xzIiwgIm9uQmFjayIsICJyZXNvbHZlZFRvb2xzIiwgInJlc29sdmVBZ2VudFRvb2xzIiwgInQxIiwgImdldEFjdHVhbFJlbGF0aXZlQWdlbnRGaWxlUGF0aCIsICJmaWxlUGF0aCIsICJ0MiIsICJhZ2VudFR5cGUiLCAiZ2V0QWdlbnRDb2xvciIsICJiYWNrZ3JvdW5kQ29sb3IiLCAidDMiLCAiU3ltYm9sIiwgImZvciIsICJjb250ZXh0IiwgInVzZUtleWJpbmRpbmciLCAidDQiLCAiZSIsICJrZXkiLCAicHJldmVudERlZmF1bHQiLCAiaGFuZGxlS2V5RG93biIsICJyZW5kZXJUb29sc0xpc3QiLCAiaGFzV2lsZGNhcmQiLCAibGVuZ3RoIiwgInZhbGlkVG9vbHMiLCAiam9pbiIsICJpbnZhbGlkVG9vbHMiLCAiZmlndXJlcyIsICJ3YXJuaW5nIiwgIlQwIiwgIkJveCIsICJ0NSIsICJ0NiIsICJ0NyIsICJ0OCIsICJ0OSIsICJ0MTAiLCAidDExIiwgIndoZW5Ub1VzZSIsICJUMSIsICJ0MTIiLCAidDEzIiwgInQxNCIsICJ0MTUiLCAidDE2IiwgIm1vZGVsIiwgImdldEFnZW50TW9kZWxEaXNwbGF5IiwgInQxNyIsICJ0MTgiLCAicGVybWlzc2lvbk1vZGUiLCAidDE5IiwgIm1lbW9yeSIsICJnZXRNZW1vcnlTY29wZURpc3BsYXkiLCAidDIwIiwgImhvb2tzIiwgIk9iamVjdCIsICJrZXlzIiwgInQyMSIsICJza2lsbHMiLCAidDIyIiwgInQyMyIsICJpc0J1aWx0SW5BZ2VudCIsICJnZXRTeXN0ZW1Qcm9tcHQiLCAidDI0IiwgIkNvbG9yUGlja2VyIiwgInQwIiwgIiQiLCAiX2MiLCAiYWdlbnROYW1lIiwgImN1cnJlbnRDb2xvciIsICJ0MSIsICJvbkNvbmZpcm0iLCAidW5kZWZpbmVkIiwgInQyIiwgIkNPTE9SX09QVElPTlMiLCAiZmluZEluZGV4IiwgIm9wdCIsICJzZWxlY3RlZEluZGV4IiwgInNldFNlbGVjdGVkSW5kZXgiLCAidXNlU3RhdGUiLCAiTWF0aCIsICJtYXgiLCAidDMiLCAiZSIsICJrZXkiLCAicHJldmVudERlZmF1bHQiLCAiX3RlbXAiLCAiX3RlbXAyIiwgInNlbGVjdGVkIiwgImhhbmRsZUtleURvd24iLCAic2VsZWN0ZWRWYWx1ZSIsICJ0NCIsICJtYXAiLCAib3B0aW9uIiwgImluZGV4IiwgImlzU2VsZWN0ZWQiLCAiZmlndXJlcyIsICJwb2ludGVyIiwgIkFHRU5UX0NPTE9SX1RPX1RIRU1FX0NPTE9SIiwgImNhcGl0YWxpemUiLCAidDUiLCAidDYiLCAiU3ltYm9sIiwgImZvciIsICJ0NyIsICJ0OCIsICJwcmV2XzAiLCAicHJldiIsICJsZW5ndGgiLCAiQUdFTlRfQ09MT1JTIiwgIk1vZGVsU2VsZWN0b3IiLCAidDAiLCAiJCIsICJfYyIsICJpbml0aWFsTW9kZWwiLCAib25Db21wbGV0ZSIsICJvbkNhbmNlbCIsICJ0MSIsICJiYjAiLCAiYmFzZSIsICJnZXRBZ2VudE1vZGVsT3B0aW9ucyIsICJzb21lIiwgIm8iLCAidmFsdWUiLCAibGFiZWwiLCAiZGVzY3JpcHRpb24iLCAibW9kZWxPcHRpb25zIiwgImRlZmF1bHRNb2RlbCIsICJ0MiIsICJTeW1ib2wiLCAiZm9yIiwgInQzIiwgInVuZGVmaW5lZCIsICJ0NCIsICJnZXRUb29sQnVja2V0cyIsICJSRUFEX09OTFkiLCAibmFtZSIsICJ0b29sTmFtZXMiLCAiU2V0IiwgIkdsb2JUb29sIiwgIkdyZXBUb29sIiwgIkV4aXRQbGFuTW9kZVYyVG9vbCIsICJGaWxlUmVhZFRvb2wiLCAiV2ViRmV0Y2hUb29sIiwgIlRvZG9Xcml0ZVRvb2wiLCAiV2ViU2VhcmNoVG9vbCIsICJUYXNrU3RvcFRvb2wiLCAiVGFza091dHB1dFRvb2wiLCAiTGlzdE1jcFJlc291cmNlc1Rvb2wiLCAiUmVhZE1jcFJlc291cmNlVG9vbCIsICJFRElUIiwgIkZpbGVFZGl0VG9vbCIsICJGaWxlV3JpdGVUb29sIiwgIk5vdGVib29rRWRpdFRvb2wiLCAiRVhFQ1VUSU9OIiwgIkJhc2hUb29sIiwgIlR1bmdzdGVuVG9vbCIsICJ1bmRlZmluZWQiLCAiZmlsdGVyIiwgIm4iLCAiTUNQIiwgImlzTWNwIiwgIk9USEVSIiwgImdldE1jcFNlcnZlckJ1Y2tldHMiLCAidG9vbHMiLCAic2VydmVyTWFwIiwgIk1hcCIsICJmb3JFYWNoIiwgInRvb2wiLCAiaXNNY3BUb29sIiwgIm1jcEluZm8iLCAibWNwSW5mb0Zyb21TdHJpbmciLCAic2VydmVyTmFtZSIsICJleGlzdGluZyIsICJnZXQiLCAicHVzaCIsICJzZXQiLCAiQXJyYXkiLCAiZnJvbSIsICJlbnRyaWVzIiwgIm1hcCIsICJzb3J0IiwgImEiLCAiYiIsICJsb2NhbGVDb21wYXJlIiwgIlRvb2xTZWxlY3RvciIsICJ0MCIsICIkIiwgIl9jIiwgImluaXRpYWxUb29scyIsICJvbkNvbXBsZXRlIiwgIm9uQ2FuY2VsIiwgInQxIiwgImZpbHRlclRvb2xzRm9yQWdlbnQiLCAiaXNCdWlsdEluIiwgImlzQXN5bmMiLCAiY3VzdG9tQWdlbnRUb29scyIsICJ0MiIsICJpbmNsdWRlcyIsICJfdGVtcCIsICJleHBhbmRlZEluaXRpYWxUb29scyIsICJzZWxlY3RlZFRvb2xzIiwgInNldFNlbGVjdGVkVG9vbHMiLCAidXNlU3RhdGUiLCAiZm9jdXNJbmRleCIsICJzZXRGb2N1c0luZGV4IiwgInNob3dJbmRpdmlkdWFsVG9vbHMiLCAic2V0U2hvd0luZGl2aWR1YWxUb29scyIsICJ0MyIsICJfdGVtcDIiLCAidDQiLCAidDUiLCAiaGFzIiwgInZhbGlkU2VsZWN0ZWRUb29scyIsICJzZWxlY3RlZFNldCIsICJpc0FsbFNlbGVjdGVkIiwgImxlbmd0aCIsICJ0NiIsICJTeW1ib2wiLCAiZm9yIiwgInRvb2xOYW1lIiwgImN1cnJlbnQiLCAidF8xIiwgInQiLCAiaGFuZGxlVG9nZ2xlVG9vbCIsICJ0NyIsICJ0b29sTmFtZXNfMCIsICJzZWxlY3QiLCAiY3VycmVudF8wIiwgInRvb2xzVG9BZGQiLCAidF8yIiwgInRfMyIsICJoYW5kbGVUb2dnbGVUb29scyIsICJ0OCIsICJhbGxUb29sTmFtZXMiLCAiX3RlbXAzIiwgImFyZUFsbFRvb2xzU2VsZWN0ZWQiLCAiZXZlcnkiLCAibmFtZV8wIiwgImZpbmFsVG9vbHMiLCAiaGFuZGxlQ29uZmlybSIsICJidWNrZXRzIiwgInRvb2xCdWNrZXRzIiwgInJlYWRPbmx5IiwgImVkaXQiLCAiZXhlY3V0aW9uIiwgIm1jcCIsICJvdGhlciIsICJBR0VOVF9UT09MX05BTUUiLCAidG9vbHNCeUJ1Y2tldCIsICJ0OSIsICJidWNrZXRUb29scyIsICJzZWxlY3RlZCIsICJjb3VudCIsICJ0XzUiLCAibmVlZHNTZWxlY3Rpb24iLCAidG9vbE5hbWVzXzEiLCAiX3RlbXA0IiwgImNyZWF0ZUJ1Y2tldFRvZ2dsZUFjdGlvbiIsICJuYXZpZ2FibGVJdGVtcyIsICJpZCIsICJsYWJlbCIsICJhY3Rpb24iLCAiaXNDb250aW51ZSIsICJ0MTAiLCAiYWxsVG9vbE5hbWVzXzAiLCAiX3RlbXA1IiwgImZpZ3VyZXMiLCAiY2hlY2tib3hPbiIsICJjaGVja2JveE9mZiIsICJ0b29sQnVja2V0c18wIiwgImJ1Y2tldENvbmZpZ3MiLCAidDExIiwgIm5hbWVfMSIsICJidWNrZXRUb29sc18wIiwgInNlbGVjdGVkXzAiLCAidF84IiwgImlzRnVsbHlTZWxlY3RlZCIsICJ0b2dnbGVCdXR0b25JbmRleCIsICJ0MTIiLCAiaXNUb2dnbGUiLCAibWNwU2VydmVyQnVja2V0cyIsICJfdGVtcDYiLCAiaXNIZWFkZXIiLCAidDEzIiwgInNlcnZlclRvb2xzIiwgInNlbGVjdGVkXzEiLCAidF85IiwgImlzRnVsbHlTZWxlY3RlZF8wIiwgInBsdXJhbCIsICJ0b29sTmFtZXNfMiIsICJfdGVtcDciLCAiX3RlbXA4IiwgInRvb2xfMCIsICJkaXNwbGF5TmFtZSIsICJzdGFydHNXaXRoIiwgImhhbmRsZUNhbmNlbCIsICJjb250ZXh0IiwgInVzZUtleWJpbmRpbmciLCAiZSIsICJrZXkiLCAicHJldmVudERlZmF1bHQiLCAiaXRlbSIsICJuZXdJbmRleCIsICJNYXRoIiwgIm1heCIsICJuZXdJbmRleF8wIiwgIm1pbiIsICJoYW5kbGVLZXlEb3duIiwgInQxNCIsICJ0MTUiLCAicG9pbnRlciIsICJ0MTYiLCAidDE3IiwgInQxOCIsICJzbGljZSIsICJ0MTkiLCAiaXRlbV8wIiwgImluZGV4IiwgImlzQ3VycmVudGx5Rm9jdXNlZCIsICJpc1RvZ2dsZUJ1dHRvbiIsICJ0MjAiLCAic2l6ZSIsICJ0MjEiLCAidDIyIiwgInRfMTAiLCAidF83IiwgInRfNiIsICJ0XzQiLCAidF8wIiwgImluaXRfY29uc3RhbnRzIiwgImluaXRfdXRpbHMiLCAiQWdlbnRFZGl0b3IiLCAiYWdlbnQiLCAidG9vbHMiLCAib25TYXZlZCIsICJvbkJhY2siLCAic2V0QXBwU3RhdGUiLCAidXNlU2V0QXBwU3RhdGUiLCAiZWRpdE1vZGUiLCAic2V0RWRpdE1vZGUiLCAidXNlU3RhdGUiLCAic2VsZWN0ZWRNZW51SW5kZXgiLCAic2V0U2VsZWN0ZWRNZW51SW5kZXgiLCAiZXJyb3IiLCAic2V0RXJyb3IiLCAic2VsZWN0ZWRDb2xvciIsICJzZXRTZWxlY3RlZENvbG9yIiwgImNvbG9yIiwgImhhbmRsZU9wZW5JbkVkaXRvciIsICJ1c2VDYWxsYmFjayIsICJmaWxlUGF0aCIsICJnZXRBY3R1YWxBZ2VudEZpbGVQYXRoIiwgInJlc3VsdCIsICJlZGl0RmlsZUluRWRpdG9yIiwgImFnZW50VHlwZSIsICJoYW5kbGVTYXZlIiwgImNoYW5nZXMiLCAibmV3VG9vbHMiLCAibmV3Q29sb3IiLCAibW9kZWwiLCAibmV3TW9kZWwiLCAiZmluYWxDb2xvciIsICJoYXNUb29sc0NoYW5nZWQiLCAidW5kZWZpbmVkIiwgImhhc01vZGVsQ2hhbmdlZCIsICJoYXNDb2xvckNoYW5nZWQiLCAiaXNDdXN0b21BZ2VudCIsICJpc1BsdWdpbkFnZW50IiwgInVwZGF0ZUFnZW50RmlsZSIsICJ3aGVuVG9Vc2UiLCAiZ2V0U3lzdGVtUHJvbXB0IiwgInNldEFnZW50Q29sb3IiLCAic3RhdGUiLCAiYWxsQWdlbnRzIiwgImFnZW50RGVmaW5pdGlvbnMiLCAibWFwIiwgImEiLCAiYWN0aXZlQWdlbnRzIiwgImdldEFjdGl2ZUFnZW50c0Zyb21MaXN0IiwgImNoYWxrIiwgImJvbGQiLCAiZXJyIiwgIkVycm9yIiwgIm1lc3NhZ2UiLCAibWVudUl0ZW1zIiwgInVzZU1lbW8iLCAibGFiZWwiLCAiYWN0aW9uIiwgImhhbmRsZUVzY2FwZSIsICJoYW5kbGVNZW51S2V5RG93biIsICJlIiwgImtleSIsICJwcmV2ZW50RGVmYXVsdCIsICJpbmRleCIsICJNYXRoIiwgIm1heCIsICJtaW4iLCAibGVuZ3RoIiwgInNlbGVjdGVkSXRlbSIsICJ1c2VLZXliaW5kaW5nIiwgImNvbnRleHQiLCAicmVuZGVyTWVudSIsICJnZXRBZ2VudFNvdXJjZURpc3BsYXlOYW1lIiwgInNvdXJjZSIsICJpdGVtIiwgImZpZ3VyZXMiLCAicG9pbnRlciIsICJmaW5hbFRvb2xzIiwgImluaXRfdXRpbHMiLCAiQWdlbnROYXZpZ2F0aW9uRm9vdGVyIiwgInQwIiwgIiQiLCAiX2MiLCAiaW5zdHJ1Y3Rpb25zIiwgInQxIiwgInVuZGVmaW5lZCIsICJleGl0U3RhdGUiLCAidXNlRXhpdE9uQ3RybENEV2l0aEtleWJpbmRpbmdzIiwgInQyIiwgInBlbmRpbmciLCAia2V5TmFtZSIsICJ0MyIsICJBZ2VudHNMaXN0IiwgInQwIiwgIiQiLCAiX2MiLCAic291cmNlIiwgImFnZW50cyIsICJvbkJhY2siLCAib25TZWxlY3QiLCAib25DcmVhdGVOZXciLCAiY2hhbmdlcyIsICJzZWxlY3RlZEFnZW50IiwgInNldFNlbGVjdGVkQWdlbnQiLCAidXNlU3RhdGUiLCAiaXNDcmVhdGVOZXdTZWxlY3RlZCIsICJzZXRJc0NyZWF0ZU5ld1NlbGVjdGVkIiwgInQxIiwgInNvcnQiLCAiY29tcGFyZUFnZW50c0J5TmFtZSIsICJzb3J0ZWRBZ2VudHMiLCAiZ2V0T3ZlcnJpZGVJbmZvIiwgIl90ZW1wIiwgInQyIiwgInVuZGVmaW5lZCIsICJmaWd1cmVzIiwgInBvaW50ZXIiLCAicmVuZGVyQ3JlYXRlTmV3T3B0aW9uIiwgInQzIiwgImFnZW50VHlwZSIsICJhZ2VudF8wIiwgImlzQnVpbHRJbiIsICJhZ2VudCIsICJpc1NlbGVjdGVkIiwgImlzT3ZlcnJpZGRlbiIsICJvdmVycmlkZGVuQnkiLCAiZGltbWVkIiwgInRleHRDb2xvciIsICJyZXNvbHZlZE1vZGVsIiwgInJlc29sdmVBZ2VudE1vZGVsRGlzcGxheSIsICJtZW1vcnkiLCAid2FybmluZyIsICJnZXRPdmVycmlkZVNvdXJjZUxhYmVsIiwgInJlbmRlckFnZW50IiwgInQ0IiwgImJiMCIsICJub25CdWlsdEluIiwgImZpbHRlciIsICJfdGVtcDIiLCAiQUdFTlRfU09VUkNFX0dST1VQUyIsICJfdGVtcDMiLCAiZmxhdE1hcCIsICJ0NSIsICJncm91cFNvdXJjZSIsICJhXzAiLCAiYSIsICJzZWxlY3RhYmxlQWdlbnRzSW5PcmRlciIsICJ0NiIsICJsZW5ndGgiLCAiUmVhY3QiLCAidXNlRWZmZWN0IiwgInQ3IiwgImUiLCAia2V5IiwgInByZXZlbnREZWZhdWx0IiwgImhhc0NyZWF0ZU9wdGlvbiIsICJ0b3RhbEl0ZW1zIiwgImN1cnJlbnRQb3NpdGlvbiIsICJhZ2VudEluZGV4IiwgImZpbmRJbmRleCIsICJhXzEiLCAibmV3UG9zaXRpb24iLCAiYWdlbnRJbmRleF8wIiwgIm5ld0FnZW50IiwgImhhbmRsZUtleURvd24iLCAidDgiLCAidDkiLCAidGl0bGUiLCAiYnVpbHRJbkFnZW50cyIsICJfdGVtcDQiLCAibWFwIiwgInJlbmRlckJ1aWx0SW5BZ2VudHNTZWN0aW9uIiwgInRpdGxlXzAiLCAiZ3JvdXBBZ2VudHMiLCAiZm9sZGVyUGF0aCIsICJiYXNlRGlyIiwgImFnZW50XzEiLCAicmVuZGVyQWdlbnRHcm91cCIsICJ0MTAiLCAiZ2V0QWdlbnRTb3VyY2VEaXNwbGF5TmFtZSIsICJzb3VyY2VUaXRsZSIsICJUMCIsICJUMSIsICJ0MTEiLCAidDEyIiwgInQxMyIsICJ0MTQiLCAidDE1IiwgInQxNiIsICJ0MTciLCAidDE4IiwgInQxOSIsICJ0MjAiLCAidDIxIiwgInQyMiIsICJTeW1ib2wiLCAiZm9yIiwgImJiMSIsICJidWlsdEluQWdlbnRzXzAiLCAiX3RlbXA1IiwgImhhc05vQWdlbnRzIiwgInNvbWUiLCAiX3RlbXA2IiwgInQyMyIsICJ0MjQiLCAidDI1IiwgInQyNiIsICJ0MjciLCAiX3RlbXA3IiwgInQyOCIsICJ0MjkiLCAiRGlhbG9nIiwgImNvdW50IiwgIl90ZW1wOCIsICJCb3giLCAiX3RlbXA5IiwgImxhYmVsIiwgImdyb3VwU291cmNlXzAiLCAiYV83IiwgImFnZW50XzIiLCAiX3RlbXAwIiwgImFnZW50XzMiLCAiX3RlbXAxIiwgImFfOSIsICJhXzgiLCAiZ18wIiwgImciLCAiYV82IiwgImFfNSIsICJhXzQiLCAiYV8zIiwgImFfMiIsICJpbml0X3V0aWxzIiwgIldpemFyZFByb3ZpZGVyIiwgInQwIiwgIiQiLCAiX2MiLCAic3RlcHMiLCAiaW5pdGlhbERhdGEiLCAidDEiLCAib25Db21wbGV0ZSIsICJvbkNhbmNlbCIsICJjaGlsZHJlbiIsICJ0aXRsZSIsICJzaG93U3RlcENvdW50ZXIiLCAidDIiLCAidDMiLCAidW5kZWZpbmVkIiwgImN1cnJlbnRTdGVwSW5kZXgiLCAic2V0Q3VycmVudFN0ZXBJbmRleCIsICJ1c2VTdGF0ZSIsICJ3aXphcmREYXRhIiwgInNldFdpemFyZERhdGEiLCAiaXNDb21wbGV0ZWQiLCAic2V0SXNDb21wbGV0ZWQiLCAidDQiLCAiU3ltYm9sIiwgImZvciIsICJuYXZpZ2F0aW9uSGlzdG9yeSIsICJzZXROYXZpZ2F0aW9uSGlzdG9yeSIsICJ1c2VFeGl0T25DdHJsQ0RXaXRoS2V5YmluZGluZ3MiLCAidDUiLCAidDYiLCAidXNlRWZmZWN0IiwgInQ3IiwgImxlbmd0aCIsICJwcmV2IiwgIl90ZW1wIiwgImdvTmV4dCIsICJ0OCIsICJwcmV2aW91c1N0ZXAiLCAiX3RlbXAyIiwgIl90ZW1wMyIsICJnb0JhY2siLCAidDkiLCAiaW5kZXgiLCAicHJldl8zIiwgImdvVG9TdGVwIiwgInQxMCIsICJjYW5jZWwiLCAidDExIiwgInVwZGF0ZXMiLCAicHJldl80IiwgInVwZGF0ZVdpemFyZERhdGEiLCAidDEyIiwgInRvdGFsU3RlcHMiLCAiY29udGV4dFZhbHVlIiwgIkN1cnJlbnRTdGVwQ29tcG9uZW50IiwgInQxMyIsICJ0MTQiLCAicHJldl8yIiwgInByZXZfMSIsICJzbGljZSIsICJwcmV2XzAiLCAiV2l6YXJkQ29udGV4dCIsICJjcmVhdGVDb250ZXh0IiwgIldpemFyZE5hdmlnYXRpb25Gb290ZXIiLCAiaW5zdHJ1Y3Rpb25zIiwgImV4aXRTdGF0ZSIsICJ1c2VFeGl0T25DdHJsQ0RXaXRoS2V5YmluZGluZ3MiLCAicGVuZGluZyIsICJrZXlOYW1lIiwgIldpemFyZERpYWxvZ0xheW91dCIsICJ0MCIsICIkIiwgIl9jIiwgInRpdGxlIiwgInRpdGxlT3ZlcnJpZGUiLCAiY29sb3IiLCAidDEiLCAiY2hpbGRyZW4iLCAic3VidGl0bGUiLCAiZm9vdGVyVGV4dCIsICJ1bmRlZmluZWQiLCAiY3VycmVudFN0ZXBJbmRleCIsICJ0b3RhbFN0ZXBzIiwgInByb3ZpZGVyVGl0bGUiLCAic2hvd1N0ZXBDb3VudGVyIiwgImdvQmFjayIsICJ1c2VXaXphcmQiLCAic3RlcFN1ZmZpeCIsICJ0MiIsICJ0MyIsICJ0NCIsICJ0NSIsICJDb2xvclN0ZXAiLCAiJCIsICJfYyIsICJnb05leHQiLCAiZ29CYWNrIiwgInVwZGF0ZVdpemFyZERhdGEiLCAid2l6YXJkRGF0YSIsICJ1c2VXaXphcmQiLCAidDAiLCAiU3ltYm9sIiwgImZvciIsICJjb250ZXh0IiwgInVzZUtleWJpbmRpbmciLCAidDEiLCAiYWdlbnRUeXBlIiwgImxvY2F0aW9uIiwgInNlbGVjdGVkTW9kZWwiLCAic2VsZWN0ZWRUb29scyIsICJzeXN0ZW1Qcm9tcHQiLCAid2hlblRvVXNlIiwgImNvbG9yIiwgInNlbGVjdGVkQ29sb3IiLCAiZmluYWxBZ2VudCIsICJnZXRTeXN0ZW1Qcm9tcHQiLCAidG9vbHMiLCAibW9kZWwiLCAic291cmNlIiwgImhhbmRsZUNvbmZpcm0iLCAidDIiLCAidDMiLCAidDQiLCAiaW5pdF91dGlscyIsICJDb25maXJtU3RlcCIsICJ0MCIsICIkIiwgIl9jIiwgInRvb2xzIiwgImV4aXN0aW5nQWdlbnRzIiwgIm9uU2F2ZSIsICJvblNhdmVBbmRFZGl0IiwgImVycm9yIiwgImdvQmFjayIsICJ3aXphcmREYXRhIiwgInVzZVdpemFyZCIsICJ0MSIsICJTeW1ib2wiLCAiZm9yIiwgImNvbnRleHQiLCAidXNlS2V5YmluZGluZyIsICJ0MiIsICJlIiwgImtleSIsICJwcmV2ZW50RGVmYXVsdCIsICJoYW5kbGVLZXlEb3duIiwgImFnZW50IiwgImZpbmFsQWdlbnQiLCAiVDAiLCAiVDEiLCAidDEwIiwgInQxMSIsICJ0MTIiLCAidDEzIiwgInQxNCIsICJ0MTUiLCAidDE2IiwgInQxNyIsICJ0MTgiLCAidDE5IiwgInQzIiwgInQ0IiwgInQ1IiwgInQ2IiwgInQ3IiwgInQ4IiwgInQ5IiwgImxvY2F0aW9uIiwgInZhbGlkYXRpb24iLCAidmFsaWRhdGVBZ2VudCIsICJ0MjAiLCAidHJ1bmNhdGVUb1dpZHRoIiwgImdldFN5c3RlbVByb21wdCIsICJzeXN0ZW1Qcm9tcHRQcmV2aWV3IiwgInQyMSIsICJ3aGVuVG9Vc2UiLCAid2hlblRvVXNlUHJldmlldyIsICJnZXRUb29sc0Rpc3BsYXkiLCAiX3RlbXAiLCAidDIyIiwgIm1lbW9yeSIsICJpc0F1dG9NZW1vcnlFbmFibGVkIiwgImdldE1lbW9yeVNjb3BlRGlzcGxheSIsICJtZW1vcnlEaXNwbGF5RWxlbWVudCIsICJXaXphcmREaWFsb2dMYXlvdXQiLCAiQm94IiwgInQyMyIsICJhZ2VudFR5cGUiLCAidDI0IiwgInQyNSIsICJnZXROZXdSZWxhdGl2ZUFnZW50RmlsZVBhdGgiLCAic291cmNlIiwgInQyNiIsICJ0MjciLCAidDI4IiwgInQyOSIsICJtb2RlbCIsICJnZXRBZ2VudE1vZGVsRGlzcGxheSIsICJ3YXJuaW5ncyIsICJsZW5ndGgiLCAibWFwIiwgIl90ZW1wMiIsICJlcnJvcnMiLCAiX3RlbXAzIiwgImVyciIsICJpXzAiLCAiaSIsICJ3YXJuaW5nIiwgInRvb2xOYW1lcyIsICJ1bmRlZmluZWQiLCAiam9pbiIsICJzbGljZSIsICJDb25maXJtU3RlcFdyYXBwZXIiLCAidG9vbHMiLCAiZXhpc3RpbmdBZ2VudHMiLCAib25Db21wbGV0ZSIsICJ3aXphcmREYXRhIiwgInVzZVdpemFyZCIsICJzYXZlRXJyb3IiLCAic2V0U2F2ZUVycm9yIiwgInVzZVN0YXRlIiwgInNldEFwcFN0YXRlIiwgInVzZVNldEFwcFN0YXRlIiwgInNhdmVBZ2VudCIsICJ1c2VDYWxsYmFjayIsICJvcGVuSW5FZGl0b3IiLCAiZmluYWxBZ2VudCIsICJzYXZlQWdlbnRUb0ZpbGUiLCAibG9jYXRpb24iLCAiYWdlbnRUeXBlIiwgIndoZW5Ub1VzZSIsICJnZXRTeXN0ZW1Qcm9tcHQiLCAiY29sb3IiLCAibW9kZWwiLCAibWVtb3J5IiwgInN0YXRlIiwgImFsbEFnZW50cyIsICJhZ2VudERlZmluaXRpb25zIiwgImNvbmNhdCIsICJhY3RpdmVBZ2VudHMiLCAiZ2V0QWN0aXZlQWdlbnRzRnJvbUxpc3QiLCAiZmlsZVBhdGgiLCAiZ2V0TmV3QWdlbnRGaWxlUGF0aCIsICJzb3VyY2UiLCAiZWRpdEZpbGVJbkVkaXRvciIsICJsb2dFdmVudCIsICJhZ2VudF90eXBlIiwgImdlbmVyYXRpb25fbWV0aG9kIiwgIndhc0dlbmVyYXRlZCIsICJ0b29sX2NvdW50IiwgImxlbmd0aCIsICJoYXNfY3VzdG9tX21vZGVsIiwgImhhc19jdXN0b21fY29sb3IiLCAiaGFzX21lbW9yeSIsICJtZW1vcnlfc2NvcGUiLCAib3BlbmVkX2luX2VkaXRvciIsICJtZXNzYWdlIiwgImNoYWxrIiwgImJvbGQiLCAiZXJyIiwgIkVycm9yIiwgImhhbmRsZVNhdmUiLCAiaGFuZGxlU2F2ZUFuZEVkaXQiLCAiRGVzY3JpcHRpb25TdGVwIiwgIiQiLCAiX2MiLCAiZ29OZXh0IiwgImdvQmFjayIsICJ1cGRhdGVXaXphcmREYXRhIiwgIndpemFyZERhdGEiLCAidXNlV2l6YXJkIiwgIndoZW5Ub1VzZSIsICJzZXRXaGVuVG9Vc2UiLCAidXNlU3RhdGUiLCAiY3Vyc29yT2Zmc2V0IiwgInNldEN1cnNvck9mZnNldCIsICJsZW5ndGgiLCAiZXJyb3IiLCAic2V0RXJyb3IiLCAidDAiLCAiU3ltYm9sIiwgImZvciIsICJjb250ZXh0IiwgInVzZUtleWJpbmRpbmciLCAidDEiLCAicmVzdWx0IiwgImVkaXRQcm9tcHRJbkVkaXRvciIsICJjb250ZW50IiwgImhhbmRsZUV4dGVybmFsRWRpdG9yIiwgInQyIiwgInQzIiwgInZhbHVlIiwgInRyaW1tZWRWYWx1ZSIsICJ0cmltIiwgImhhbmRsZVN1Ym1pdCIsICJ0NCIsICJ0NSIsICJ0NiIsICJ0NyIsICJ0OCIsICJpbml0X2NvbnN0YW50cyIsICJHZW5lcmF0ZVN0ZXAiLCAidXBkYXRlV2l6YXJkRGF0YSIsICJnb0JhY2siLCAiZ29Ub1N0ZXAiLCAid2l6YXJkRGF0YSIsICJ1c2VXaXphcmQiLCAicHJvbXB0IiwgInNldFByb21wdCIsICJ1c2VTdGF0ZSIsICJnZW5lcmF0aW9uUHJvbXB0IiwgImlzR2VuZXJhdGluZyIsICJzZXRJc0dlbmVyYXRpbmciLCAiZXJyb3IiLCAic2V0RXJyb3IiLCAiY3Vyc29yT2Zmc2V0IiwgInNldEN1cnNvck9mZnNldCIsICJsZW5ndGgiLCAibW9kZWwiLCAidXNlTWFpbkxvb3BNb2RlbCIsICJhYm9ydENvbnRyb2xsZXJSZWYiLCAidXNlUmVmIiwgImhhbmRsZUNhbmNlbEdlbmVyYXRpb24iLCAidXNlQ2FsbGJhY2siLCAiY3VycmVudCIsICJhYm9ydCIsICJ1c2VLZXliaW5kaW5nIiwgImNvbnRleHQiLCAiaXNBY3RpdmUiLCAiaGFuZGxlRXh0ZXJuYWxFZGl0b3IiLCAicmVzdWx0IiwgImVkaXRQcm9tcHRJbkVkaXRvciIsICJjb250ZW50IiwgImhhbmRsZUdvQmFjayIsICJhZ2VudFR5cGUiLCAic3lzdGVtUHJvbXB0IiwgIndoZW5Ub1VzZSIsICJnZW5lcmF0ZWRBZ2VudCIsICJ1bmRlZmluZWQiLCAid2FzR2VuZXJhdGVkIiwgImhhbmRsZUdlbmVyYXRlIiwgInRyaW1tZWRQcm9tcHQiLCAidHJpbSIsICJjb250cm9sbGVyIiwgImNyZWF0ZUFib3J0Q29udHJvbGxlciIsICJnZW5lcmF0ZWQiLCAiZ2VuZXJhdGVBZ2VudCIsICJzaWduYWwiLCAiaWRlbnRpZmllciIsICJlcnIiLCAiQVBJVXNlckFib3J0RXJyb3IiLCAiRXJyb3IiLCAibWVzc2FnZSIsICJpbmNsdWRlcyIsICJzdWJ0aXRsZSIsICJMb2NhdGlvblN0ZXAiLCAiJCIsICJfYyIsICJnb05leHQiLCAidXBkYXRlV2l6YXJkRGF0YSIsICJjYW5jZWwiLCAidXNlV2l6YXJkIiwgInQwIiwgIlN5bWJvbCIsICJmb3IiLCAibGFiZWwiLCAidmFsdWUiLCAidDEiLCAibG9jYXRpb25PcHRpb25zIiwgInQyIiwgInQzIiwgImxvY2F0aW9uIiwgInQ0IiwgInQ1IiwgIk1lbW9yeVN0ZXAiLCAiJCIsICJfYyIsICJnb05leHQiLCAiZ29CYWNrIiwgInVwZGF0ZVdpemFyZERhdGEiLCAid2l6YXJkRGF0YSIsICJ1c2VXaXphcmQiLCAidDAiLCAiU3ltYm9sIiwgImZvciIsICJjb250ZXh0IiwgInVzZUtleWJpbmRpbmciLCAiaXNVc2VyU2NvcGUiLCAibG9jYXRpb24iLCAidDEiLCAibGFiZWwiLCAidmFsdWUiLCAibWVtb3J5T3B0aW9ucyIsICJ0MiIsICJmaW5hbEFnZW50IiwgInN5c3RlbVByb21wdCIsICJtZW1vcnkiLCAidW5kZWZpbmVkIiwgImFnZW50VHlwZSIsICJzZWxlY3RlZE1lbW9yeSIsICJnZXRTeXN0ZW1Qcm9tcHQiLCAiaXNBdXRvTWVtb3J5RW5hYmxlZCIsICJsb2FkQWdlbnRNZW1vcnlQcm9tcHQiLCAiaGFuZGxlU2VsZWN0IiwgInQzIiwgInQ0IiwgIk1ldGhvZFN0ZXAiLCAiJCIsICJfYyIsICJnb05leHQiLCAiZ29CYWNrIiwgInVwZGF0ZVdpemFyZERhdGEiLCAiZ29Ub1N0ZXAiLCAidXNlV2l6YXJkIiwgInQwIiwgIlN5bWJvbCIsICJmb3IiLCAibGFiZWwiLCAidmFsdWUiLCAibWV0aG9kT3B0aW9ucyIsICJ0MSIsICJ0MiIsICJtZXRob2QiLCAid2FzR2VuZXJhdGVkIiwgInQzIiwgInQ0IiwgIk1vZGVsU3RlcCIsICIkIiwgIl9jIiwgImdvTmV4dCIsICJnb0JhY2siLCAidXBkYXRlV2l6YXJkRGF0YSIsICJ3aXphcmREYXRhIiwgInVzZVdpemFyZCIsICJ0MCIsICJtb2RlbCIsICJzZWxlY3RlZE1vZGVsIiwgImhhbmRsZUNvbXBsZXRlIiwgInQxIiwgIlN5bWJvbCIsICJmb3IiLCAidDIiLCAiUHJvbXB0U3RlcCIsICIkIiwgIl9jIiwgImdvTmV4dCIsICJnb0JhY2siLCAidXBkYXRlV2l6YXJkRGF0YSIsICJ3aXphcmREYXRhIiwgInVzZVdpemFyZCIsICJzeXN0ZW1Qcm9tcHQiLCAic2V0U3lzdGVtUHJvbXB0IiwgInVzZVN0YXRlIiwgImN1cnNvck9mZnNldCIsICJzZXRDdXJzb3JPZmZzZXQiLCAibGVuZ3RoIiwgImVycm9yIiwgInNldEVycm9yIiwgInQwIiwgIlN5bWJvbCIsICJmb3IiLCAiY29udGV4dCIsICJ1c2VLZXliaW5kaW5nIiwgInQxIiwgInJlc3VsdCIsICJlZGl0UHJvbXB0SW5FZGl0b3IiLCAiY29udGVudCIsICJoYW5kbGVFeHRlcm5hbEVkaXRvciIsICJ0MiIsICJ0MyIsICJ0cmltbWVkUHJvbXB0IiwgInRyaW0iLCAiaGFuZGxlU3VibWl0IiwgInQ0IiwgInQ1IiwgInQ2IiwgInQ3IiwgInQ4IiwgInQ5IiwgIlRvb2xzU3RlcCIsICJ0MCIsICIkIiwgIl9jIiwgInRvb2xzIiwgImdvTmV4dCIsICJnb0JhY2siLCAidXBkYXRlV2l6YXJkRGF0YSIsICJ3aXphcmREYXRhIiwgInVzZVdpemFyZCIsICJ0MSIsICJzZWxlY3RlZFRvb2xzIiwgImhhbmRsZUNvbXBsZXRlIiwgImluaXRpYWxUb29scyIsICJ0MiIsICJTeW1ib2wiLCAiZm9yIiwgInQzIiwgIlR5cGVTdGVwIiwgIl9wcm9wcyIsICIkIiwgIl9jIiwgImdvTmV4dCIsICJnb0JhY2siLCAidXBkYXRlV2l6YXJkRGF0YSIsICJ3aXphcmREYXRhIiwgInVzZVdpemFyZCIsICJhZ2VudFR5cGUiLCAic2V0QWdlbnRUeXBlIiwgInVzZVN0YXRlIiwgImVycm9yIiwgInNldEVycm9yIiwgImN1cnNvck9mZnNldCIsICJzZXRDdXJzb3JPZmZzZXQiLCAibGVuZ3RoIiwgInQwIiwgIlN5bWJvbCIsICJmb3IiLCAiY29udGV4dCIsICJ1c2VLZXliaW5kaW5nIiwgInQxIiwgInZhbHVlIiwgInRyaW1tZWRWYWx1ZSIsICJ0cmltIiwgInZhbGlkYXRpb25FcnJvciIsICJ2YWxpZGF0ZUFnZW50VHlwZSIsICJoYW5kbGVTdWJtaXQiLCAidDIiLCAidDMiLCAidDQiLCAidDUiLCAidDYiLCAiQ3JlYXRlQWdlbnRXaXphcmQiLCAidDAiLCAiJCIsICJfYyIsICJ0b29scyIsICJleGlzdGluZ0FnZW50cyIsICJvbkNvbXBsZXRlIiwgIm9uQ2FuY2VsIiwgInQxIiwgInQyIiwgInQzIiwgIlN5bWJvbCIsICJmb3IiLCAiaXNBdXRvTWVtb3J5RW5hYmxlZCIsICJNZW1vcnlTdGVwIiwgInQ0IiwgInQ1IiwgIkxvY2F0aW9uU3RlcCIsICJNZXRob2RTdGVwIiwgIkdlbmVyYXRlU3RlcCIsICJQcm9tcHRTdGVwIiwgIkRlc2NyaXB0aW9uU3RlcCIsICJNb2RlbFN0ZXAiLCAiQ29sb3JTdGVwIiwgInN0ZXBzIiwgInQ2IiwgInQ3IiwgIl90ZW1wIiwgIkFnZW50c01lbnUiLCAidDAiLCAiJCIsICJfYyIsICJ0b29scyIsICJvbkV4aXQiLCAidDEiLCAiU3ltYm9sIiwgImZvciIsICJtb2RlIiwgInNvdXJjZSIsICJtb2RlU3RhdGUiLCAic2V0TW9kZVN0YXRlIiwgInVzZVN0YXRlIiwgImFnZW50RGVmaW5pdGlvbnMiLCAidXNlQXBwU3RhdGUiLCAiX3RlbXAiLCAibWNwVG9vbHMiLCAiX3RlbXAyIiwgInRvb2xQZXJtaXNzaW9uQ29udGV4dCIsICJfdGVtcDMiLCAic2V0QXBwU3RhdGUiLCAidXNlU2V0QXBwU3RhdGUiLCAiYWxsQWdlbnRzIiwgImFjdGl2ZUFnZW50cyIsICJhZ2VudHMiLCAidDIiLCAiY2hhbmdlcyIsICJzZXRDaGFuZ2VzIiwgIm1lcmdlZFRvb2xzIiwgInVzZU1lcmdlZFRvb2xzIiwgInVzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncyIsICJ0MyIsICJmaWx0ZXIiLCAiX3RlbXA0IiwgInQ0IiwgIl90ZW1wNSIsICJ0NSIsICJfdGVtcDYiLCAidDYiLCAiX3RlbXA3IiwgInQ3IiwgIl90ZW1wOCIsICJ0OCIsICJfdGVtcDkiLCAidDkiLCAiX3RlbXAwIiwgInQxMCIsICJ1c2VyU2V0dGluZ3MiLCAicHJvamVjdFNldHRpbmdzIiwgInBvbGljeVNldHRpbmdzIiwgImxvY2FsU2V0dGluZ3MiLCAiZmxhZ1NldHRpbmdzIiwgInBsdWdpbiIsICJhbGwiLCAiYWdlbnRzQnlTb3VyY2UiLCAidDExIiwgIm1lc3NhZ2UiLCAicHJldiIsICJoYW5kbGVBZ2VudENyZWF0ZWQiLCAidDEyIiwgImFnZW50IiwgImRlbGV0ZUFnZW50RnJvbUZpbGUiLCAic3RhdGUiLCAiYWxsQWdlbnRzXzAiLCAiYV82IiwgImEiLCAiYWdlbnRUeXBlIiwgImdldEFjdGl2ZUFnZW50c0Zyb21MaXN0IiwgInByZXZfMCIsICJjaGFsayIsICJib2xkIiwgInQxMyIsICJlcnJvciIsICJsb2dFcnJvciIsICJ0b0Vycm9yIiwgImhhbmRsZUFnZW50RGVsZXRlZCIsICJhZ2VudHNUb1Nob3ciLCAidDE0IiwgInJlc29sdmVBZ2VudE92ZXJyaWRlcyIsICJhbGxSZXNvbHZlZCIsICJyZXNvbHZlZEFnZW50cyIsICJ0MTUiLCAiZXhpdE1lc3NhZ2UiLCAibGVuZ3RoIiwgImpvaW4iLCAidW5kZWZpbmVkIiwgImRpc3BsYXkiLCAidDE2IiwgImFnZW50XzAiLCAicHJldmlvdXNNb2RlIiwgInQxNyIsICJ0MTgiLCAidDE5IiwgInQyMCIsICJhXzkiLCAiZmluZCIsICJmcmVzaEFnZW50XzEiLCAiYWdlbnRUb1VzZSIsICJpc0VkaXRhYmxlIiwgImxhYmVsIiwgInZhbHVlIiwgIm1lbnVJdGVtcyIsICJ2YWx1ZV8wIiwgImJiMTI5IiwgImhhbmRsZU1lbnVTZWxlY3QiLCAidDIxIiwgInQyMiIsICJ0MjMiLCAidDI0IiwgInQyNSIsICJ0MjYiLCAiYV84IiwgImZyZXNoQWdlbnRfMCIsICJhZ2VudFRvRGlzcGxheSIsICJkZWxldGVPcHRpb25zIiwgImFfNyIsICJmcmVzaEFnZW50IiwgImFnZW50VG9FZGl0IiwgIm1lc3NhZ2VfMCIsICJhXzUiLCAiYV80IiwgImFfMyIsICJhXzIiLCAiYV8xIiwgImFfMCIsICJzXzEiLCAicyIsICJzXzAiLCAibWNwIiwgImNhbGwiLCAib25Eb25lIiwgImNvbnRleHQiLCAiYXBwU3RhdGUiLCAiZ2V0QXBwU3RhdGUiLCAicGVybWlzc2lvbkNvbnRleHQiLCAidG9vbFBlcm1pc3Npb25Db250ZXh0IiwgInRvb2xzIiwgImdldFRvb2xzIl0KfQo=
