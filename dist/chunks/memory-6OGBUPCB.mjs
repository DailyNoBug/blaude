#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  editFileInEditor,
  init_promptEditor
} from "./chunk-452D2LM3.mjs";
import {
  ListItem,
  Select,
  clearMemoryFileCaches,
  getAgentMemoryDir,
  getMemoryFiles,
  init_AppState,
  init_CustomSelect,
  init_ListItem,
  init_agentMemory,
  init_claudemd,
  init_config2 as init_config,
  init_consolidationLock,
  isAutoDreamEnabled,
  readLastConsolidatedAt,
  useAppState
} from "./chunk-PWGYNHQM.mjs";
import "./chunk-PJK4KGGT.mjs";
import {
  Dialog,
  init_Dialog
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
import {
  init_browser,
  openPath
} from "./chunk-IAEMXMG4.mjs";
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
  Suspense,
  createElement,
  init_react,
  use,
  useEffect,
  useState
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  getAutoMemPath,
  getDisplayPath,
  init_file,
  init_paths,
  init_settings2 as init_settings,
  init_source,
  init_teamMemPaths,
  isAutoMemoryEnabled,
  source_default,
  teamMemPaths_exports,
  updateSettingsForSource
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
import {
  formatRelativeTimeAgo,
  init_format
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
import {
  findGitRoot,
  init_git
} from "./chunk-7SC6PTLR.mjs";
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
import "./chunk-ZAYB3WZV.mjs";
import {
  getErrnoCode,
  init_errors
} from "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import {
  feature,
  init_bun_bundle
} from "./chunk-OU3SZVVB.mjs";
import {
  getOriginalCwd,
  init_state
} from "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import {
  getClaudeConfigHomeDir,
  init_envUtils
} from "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __esm,
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/memory/versions.ts
function projectIsInGitRepo(cwd) {
  return findGitRoot(cwd) !== null;
}
var init_versions = __esm({
  "src/utils/memory/versions.ts"() {
    init_git();
  }
});

// src/components/memory/MemoryFileSelector.tsx
import { mkdir } from "fs/promises";
import { join } from "path";
function MemoryFileSelector(t0) {
  const $ = c(58);
  const {
    onSelect,
    onCancel
  } = t0;
  const existingMemoryFiles = use(getMemoryFiles());
  const userMemoryPath = join(getClaudeConfigHomeDir(), "CLAUDE.md");
  const projectMemoryPath = join(getOriginalCwd(), "CLAUDE.md");
  const hasUserMemory = existingMemoryFiles.some((f) => f.path === userMemoryPath);
  const hasProjectMemory = existingMemoryFiles.some((f_0) => f_0.path === projectMemoryPath);
  const allMemoryFiles = [...existingMemoryFiles.filter(_temp).map(_temp2), ...hasUserMemory ? [] : [{
    path: userMemoryPath,
    type: "User",
    content: "",
    exists: false
  }], ...hasProjectMemory ? [] : [{
    path: projectMemoryPath,
    type: "Project",
    content: "",
    exists: false
  }]];
  const depths = /* @__PURE__ */ new Map();
  const memoryOptions = allMemoryFiles.map((file) => {
    const displayPath = getDisplayPath(file.path);
    const existsLabel = file.exists ? "" : " (new)";
    const depth = file.parent ? (depths.get(file.parent) ?? 0) + 1 : 0;
    depths.set(file.path, depth);
    const indent = depth > 0 ? "  ".repeat(depth - 1) : "";
    let label;
    if (file.type === "User" && !file.isNested && file.path === userMemoryPath) {
      label = "User memory";
    } else {
      if (file.type === "Project" && !file.isNested && file.path === projectMemoryPath) {
        label = "Project memory";
      } else {
        if (depth > 0) {
          label = `${indent}L ${displayPath}${existsLabel}`;
        } else {
          label = `${displayPath}`;
        }
      }
    }
    let description;
    const isGit = projectIsInGitRepo(getOriginalCwd());
    if (file.type === "User" && !file.isNested) {
      description = "Saved in ~/.claude/CLAUDE.md";
    } else {
      if (file.type === "Project" && !file.isNested && file.path === projectMemoryPath) {
        description = `${isGit ? "Checked in at" : "Saved in"} ./CLAUDE.md`;
      } else {
        if (file.parent) {
          description = "@-imported";
        } else {
          if (file.isNested) {
            description = "dynamically loaded";
          } else {
            description = "";
          }
        }
      }
    }
    return {
      label,
      value: file.path,
      description
    };
  });
  const folderOptions = [];
  const agentDefinitions = useAppState(_temp3);
  if (isAutoMemoryEnabled()) {
    let t110;
    if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t110 = {
        label: "Open auto-memory folder",
        value: `${OPEN_FOLDER_PREFIX}${getAutoMemPath()}`,
        description: ""
      };
      $[0] = t110;
    } else {
      t110 = $[0];
    }
    folderOptions.push(t110);
    if (feature("TEAMMEM") && teamMemPaths.isTeamMemoryEnabled()) {
      let t24;
      if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t24 = {
          label: "Open team memory folder",
          value: `${OPEN_FOLDER_PREFIX}${teamMemPaths.getTeamMemPath()}`,
          description: ""
        };
        $[1] = t24;
      } else {
        t24 = $[1];
      }
      folderOptions.push(t24);
    }
    for (const agent of agentDefinitions.activeAgents) {
      if (agent.memory) {
        const agentDir = getAgentMemoryDir(agent.agentType, agent.memory);
        folderOptions.push({
          label: `Open ${source_default.bold(agent.agentType)} agent memory`,
          value: `${OPEN_FOLDER_PREFIX}${agentDir}`,
          description: `${agent.memory} scope`
        });
      }
    }
  }
  memoryOptions.push(...folderOptions);
  let t1;
  if ($[2] !== memoryOptions) {
    t1 = lastSelectedPath && memoryOptions.some(_temp4) ? lastSelectedPath : memoryOptions[0]?.value || "";
    $[2] = memoryOptions;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  const initialPath = t1;
  const [autoMemoryOn, setAutoMemoryOn] = useState(isAutoMemoryEnabled);
  const [autoDreamOn, setAutoDreamOn] = useState(isAutoDreamEnabled);
  const [showDreamRow] = useState(isAutoMemoryEnabled);
  const isDreamRunning = useAppState(_temp6);
  const [lastDreamAt, setLastDreamAt] = useState(null);
  let t2;
  if ($[4] !== showDreamRow) {
    t2 = () => {
      if (!showDreamRow) {
        return;
      }
      readLastConsolidatedAt().then(setLastDreamAt);
    };
    $[4] = showDreamRow;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[6] !== isDreamRunning || $[7] !== showDreamRow) {
    t3 = [showDreamRow, isDreamRunning];
    $[6] = isDreamRunning;
    $[7] = showDreamRow;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  useEffect(t2, t3);
  let t4;
  if ($[9] !== isDreamRunning || $[10] !== lastDreamAt) {
    t4 = isDreamRunning ? "running" : lastDreamAt === null ? "" : lastDreamAt === 0 ? "never" : `last ran ${formatRelativeTimeAgo(new Date(lastDreamAt))}`;
    $[9] = isDreamRunning;
    $[10] = lastDreamAt;
    $[11] = t4;
  } else {
    t4 = $[11];
  }
  const dreamStatus = t4;
  const [focusedToggle, setFocusedToggle] = useState(null);
  const toggleFocused = focusedToggle !== null;
  const lastToggleIndex = showDreamRow ? 1 : 0;
  let t5;
  if ($[12] !== autoMemoryOn) {
    t5 = function handleToggleAutoMemory2() {
      const newValue = !autoMemoryOn;
      updateSettingsForSource("userSettings", {
        autoMemoryEnabled: newValue
      });
      setAutoMemoryOn(newValue);
      logEvent("tengu_auto_memory_toggled", {
        enabled: newValue
      });
    };
    $[12] = autoMemoryOn;
    $[13] = t5;
  } else {
    t5 = $[13];
  }
  const handleToggleAutoMemory = t5;
  let t6;
  if ($[14] !== autoDreamOn) {
    t6 = function handleToggleAutoDream2() {
      const newValue_0 = !autoDreamOn;
      updateSettingsForSource("userSettings", {
        autoDreamEnabled: newValue_0
      });
      setAutoDreamOn(newValue_0);
      logEvent("tengu_auto_dream_toggled", {
        enabled: newValue_0
      });
    };
    $[14] = autoDreamOn;
    $[15] = t6;
  } else {
    t6 = $[15];
  }
  const handleToggleAutoDream = t6;
  useExitOnCtrlCDWithKeybindings();
  let t7;
  if ($[16] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = {
      context: "Confirmation"
    };
    $[16] = t7;
  } else {
    t7 = $[16];
  }
  useKeybinding("confirm:no", onCancel, t7);
  let t8;
  if ($[17] !== focusedToggle || $[18] !== handleToggleAutoDream || $[19] !== handleToggleAutoMemory) {
    t8 = () => {
      if (focusedToggle === 0) {
        handleToggleAutoMemory();
      } else {
        if (focusedToggle === 1) {
          handleToggleAutoDream();
        }
      }
    };
    $[17] = focusedToggle;
    $[18] = handleToggleAutoDream;
    $[19] = handleToggleAutoMemory;
    $[20] = t8;
  } else {
    t8 = $[20];
  }
  let t9;
  if ($[21] !== toggleFocused) {
    t9 = {
      context: "Confirmation",
      isActive: toggleFocused
    };
    $[21] = toggleFocused;
    $[22] = t9;
  } else {
    t9 = $[22];
  }
  useKeybinding("confirm:yes", t8, t9);
  let t10;
  if ($[23] !== lastToggleIndex) {
    t10 = () => {
      setFocusedToggle((prev) => prev !== null && prev < lastToggleIndex ? prev + 1 : null);
    };
    $[23] = lastToggleIndex;
    $[24] = t10;
  } else {
    t10 = $[24];
  }
  let t11;
  if ($[25] !== toggleFocused) {
    t11 = {
      context: "Select",
      isActive: toggleFocused
    };
    $[25] = toggleFocused;
    $[26] = t11;
  } else {
    t11 = $[26];
  }
  useKeybinding("select:next", t10, t11);
  let t12;
  if ($[27] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t12 = () => {
      setFocusedToggle(_temp7);
    };
    $[27] = t12;
  } else {
    t12 = $[27];
  }
  let t13;
  if ($[28] !== toggleFocused) {
    t13 = {
      context: "Select",
      isActive: toggleFocused
    };
    $[28] = toggleFocused;
    $[29] = t13;
  } else {
    t13 = $[29];
  }
  useKeybinding("select:previous", t12, t13);
  const t14 = focusedToggle === 0;
  const t15 = autoMemoryOn ? "on" : "off";
  let t16;
  if ($[30] !== t15) {
    t16 = /* @__PURE__ */ createElement(ThemedText, null, "Auto-memory: ", t15);
    $[30] = t15;
    $[31] = t16;
  } else {
    t16 = $[31];
  }
  let t17;
  if ($[32] !== t14 || $[33] !== t16) {
    t17 = /* @__PURE__ */ createElement(ListItem, { isFocused: t14 }, t16);
    $[32] = t14;
    $[33] = t16;
    $[34] = t17;
  } else {
    t17 = $[34];
  }
  let t18;
  if ($[35] !== autoDreamOn || $[36] !== dreamStatus || $[37] !== focusedToggle || $[38] !== isDreamRunning || $[39] !== showDreamRow) {
    t18 = showDreamRow && /* @__PURE__ */ createElement(ListItem, { isFocused: focusedToggle === 1, styled: false }, /* @__PURE__ */ createElement(ThemedText, { color: focusedToggle === 1 ? "suggestion" : void 0 }, "Auto-dream: ", autoDreamOn ? "on" : "off", dreamStatus && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " \xB7 ", dreamStatus), !isDreamRunning && autoDreamOn && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " \xB7 /dream to run")));
    $[35] = autoDreamOn;
    $[36] = dreamStatus;
    $[37] = focusedToggle;
    $[38] = isDreamRunning;
    $[39] = showDreamRow;
    $[40] = t18;
  } else {
    t18 = $[40];
  }
  let t19;
  if ($[41] !== t17 || $[42] !== t18) {
    t19 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", marginBottom: 1 }, t17, t18);
    $[41] = t17;
    $[42] = t18;
    $[43] = t19;
  } else {
    t19 = $[43];
  }
  let t20;
  if ($[44] !== onSelect) {
    t20 = (value) => {
      if (value.startsWith(OPEN_FOLDER_PREFIX)) {
        const folderPath = value.slice(OPEN_FOLDER_PREFIX.length);
        mkdir(folderPath, {
          recursive: true
        }).catch(_temp8).then(() => openPath(folderPath));
        return;
      }
      lastSelectedPath = value;
      onSelect(value);
    };
    $[44] = onSelect;
    $[45] = t20;
  } else {
    t20 = $[45];
  }
  let t21;
  if ($[46] !== lastToggleIndex) {
    t21 = () => setFocusedToggle(lastToggleIndex);
    $[46] = lastToggleIndex;
    $[47] = t21;
  } else {
    t21 = $[47];
  }
  let t22;
  if ($[48] !== initialPath || $[49] !== memoryOptions || $[50] !== onCancel || $[51] !== t20 || $[52] !== t21 || $[53] !== toggleFocused) {
    t22 = /* @__PURE__ */ createElement(Select, { defaultFocusValue: initialPath, options: memoryOptions, isDisabled: toggleFocused, onChange: t20, onCancel, onUpFromFirstItem: t21 });
    $[48] = initialPath;
    $[49] = memoryOptions;
    $[50] = onCancel;
    $[51] = t20;
    $[52] = t21;
    $[53] = toggleFocused;
    $[54] = t22;
  } else {
    t22 = $[54];
  }
  let t23;
  if ($[55] !== t19 || $[56] !== t22) {
    t23 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", width: "100%" }, t19, t22);
    $[55] = t19;
    $[56] = t22;
    $[57] = t23;
  } else {
    t23 = $[57];
  }
  return t23;
}
function _temp8() {
}
function _temp7(prev_0) {
  return prev_0 !== null && prev_0 > 0 ? prev_0 - 1 : prev_0;
}
function _temp6(s_0) {
  return Object.values(s_0.tasks).some(_temp5);
}
function _temp5(t) {
  return t.type === "dream" && t.status === "running";
}
function _temp4(opt) {
  return opt.value === lastSelectedPath;
}
function _temp3(s) {
  return s.agentDefinitions;
}
function _temp2(f_2) {
  return {
    ...f_2,
    exists: true
  };
}
function _temp(f_1) {
  return f_1.type !== "AutoMem" && f_1.type !== "TeamMem";
}
var teamMemPaths, lastSelectedPath, OPEN_FOLDER_PREFIX;
var init_MemoryFileSelector = __esm({
  "src/components/memory/MemoryFileSelector.tsx"() {
    init_react_compiler_runtime();
    init_bun_bundle();
    init_source();
    init_react();
    init_react();
    init_state();
    init_useExitOnCtrlCDWithKeybindings();
    init_ink();
    init_useKeybinding();
    init_paths();
    init_analytics();
    init_config();
    init_consolidationLock();
    init_AppState();
    init_agentMemory();
    init_browser();
    init_claudemd();
    init_envUtils();
    init_file();
    init_format();
    init_versions();
    init_settings();
    init_CustomSelect();
    init_ListItem();
    teamMemPaths = feature("TEAMMEM") ? (init_teamMemPaths(), __toCommonJS(teamMemPaths_exports)) : null;
    OPEN_FOLDER_PREFIX = "__open_folder__";
  }
});

// src/components/memory/MemoryUpdateNotification.tsx
import { homedir } from "os";
import { relative } from "path";
function getRelativeMemoryPath(path) {
  const homeDir = homedir();
  const cwd = getCwd();
  const relativeToHome = path.startsWith(homeDir) ? "~" + path.slice(homeDir.length) : null;
  const relativeToCwd = path.startsWith(cwd) ? "./" + relative(cwd, path) : null;
  if (relativeToHome && relativeToCwd) {
    return relativeToHome.length <= relativeToCwd.length ? relativeToHome : relativeToCwd;
  }
  return relativeToHome || relativeToCwd || path;
}
var init_MemoryUpdateNotification = __esm({
  "src/components/memory/MemoryUpdateNotification.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_cwd();
  }
});

// src/commands/memory/memory.tsx
import { mkdir as mkdir2, writeFile } from "fs/promises";
function MemoryCommand({
  onDone
}) {
  const handleSelectMemoryFile = async (memoryPath) => {
    try {
      if (memoryPath.includes(getClaudeConfigHomeDir())) {
        await mkdir2(getClaudeConfigHomeDir(), {
          recursive: true
        });
      }
      try {
        await writeFile(memoryPath, "", {
          encoding: "utf8",
          flag: "wx"
        });
      } catch (e) {
        if (getErrnoCode(e) !== "EEXIST") {
          throw e;
        }
      }
      await editFileInEditor(memoryPath);
      let editorSource = "default";
      let editorValue = "";
      if (process.env.VISUAL) {
        editorSource = "$VISUAL";
        editorValue = process.env.VISUAL;
      } else if (process.env.EDITOR) {
        editorSource = "$EDITOR";
        editorValue = process.env.EDITOR;
      }
      const editorInfo = editorSource !== "default" ? `Using ${editorSource}="${editorValue}".` : "";
      const editorHint = editorInfo ? `> ${editorInfo} To change editor, set $EDITOR or $VISUAL environment variable.` : `> To use a different editor, set the $EDITOR or $VISUAL environment variable.`;
      onDone(`Opened memory file at ${getRelativeMemoryPath(memoryPath)}

${editorHint}`, {
        display: "system"
      });
    } catch (error) {
      logError(error);
      onDone(`Error opening memory file: ${error}`);
    }
  };
  const handleCancel = () => {
    onDone("Cancelled memory editing", {
      display: "system"
    });
  };
  return /* @__PURE__ */ createElement(Dialog, { title: "Memory", onCancel: handleCancel, color: "remember" }, /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(Suspense, { fallback: null }, /* @__PURE__ */ createElement(MemoryFileSelector, { onSelect: handleSelectMemoryFile, onCancel: handleCancel })), /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Learn more: ", /* @__PURE__ */ createElement(Link, { url: "https://code.claude.com/docs/en/memory" })))));
}
var call;
var init_memory = __esm({
  "src/commands/memory/memory.tsx"() {
    init_react();
    init_Dialog();
    init_MemoryFileSelector();
    init_MemoryUpdateNotification();
    init_ink();
    init_claudemd();
    init_envUtils();
    init_errors();
    init_log();
    init_promptEditor();
    call = async (onDone) => {
      clearMemoryFileCaches();
      await getMemoryFiles();
      return /* @__PURE__ */ createElement(MemoryCommand, { onDone });
    };
  }
});
init_memory();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL21lbW9yeS92ZXJzaW9ucy50cyIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9tZW1vcnkvTWVtb3J5RmlsZVNlbGVjdG9yLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9tZW1vcnkvTWVtb3J5VXBkYXRlTm90aWZpY2F0aW9uLnRzeCIsICIuLi8uLi9zcmMvY29tbWFuZHMvbWVtb3J5L21lbW9yeS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGZpbmRHaXRSb290IH0gZnJvbSAnLi4vZ2l0LmpzJ1xuXG4vLyBOb3RlOiBUaGlzIGlzIHVzZWQgdG8gY2hlY2sgZ2l0IHJlcG8gc3RhdHVzIHN5bmNocm9ub3VzbHlcbi8vIFVzZXMgZmluZEdpdFJvb3Qgd2hpY2ggd2Fsa3MgdGhlIGZpbGVzeXN0ZW0gKG5vIHN1YnByb2Nlc3MpXG4vLyBQcmVmZXIgYGRpcklzSW5HaXRSZXBvKClgIGZvciBhc3luYyBjaGVja3NcbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0SXNJbkdpdFJlcG8oY3dkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIGZpbmRHaXRSb290KGN3ZCkgIT09IG51bGxcbn1cbiIsICJpbXBvcnQgeyBmZWF0dXJlIH0gZnJvbSAnYnVuOmJ1bmRsZSdcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsaydcbmltcG9ydCB7IG1rZGlyIH0gZnJvbSAnZnMvcHJvbWlzZXMnXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCdcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXRPcmlnaW5hbEN3ZCB9IGZyb20gJy4uLy4uL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB7IHVzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncyB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncy5qcydcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7IHVzZUtleWJpbmRpbmcgfSBmcm9tICcuLi8uLi9rZXliaW5kaW5ncy91c2VLZXliaW5kaW5nLmpzJ1xuaW1wb3J0IHsgZ2V0QXV0b01lbVBhdGgsIGlzQXV0b01lbW9yeUVuYWJsZWQgfSBmcm9tICcuLi8uLi9tZW1kaXIvcGF0aHMuanMnXG5pbXBvcnQgeyBsb2dFdmVudCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB7IGlzQXV0b0RyZWFtRW5hYmxlZCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dG9EcmVhbS9jb25maWcuanMnXG5pbXBvcnQgeyByZWFkTGFzdENvbnNvbGlkYXRlZEF0IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0b0RyZWFtL2NvbnNvbGlkYXRpb25Mb2NrLmpzJ1xuaW1wb3J0IHsgdXNlQXBwU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9BcHBTdGF0ZS5qcydcbmltcG9ydCB7IGdldEFnZW50TWVtb3J5RGlyIH0gZnJvbSAnLi4vLi4vdG9vbHMvQWdlbnRUb29sL2FnZW50TWVtb3J5LmpzJ1xuaW1wb3J0IHsgb3BlblBhdGggfSBmcm9tICcuLi8uLi91dGlscy9icm93c2VyLmpzJ1xuaW1wb3J0IHsgZ2V0TWVtb3J5RmlsZXMsIHR5cGUgTWVtb3J5RmlsZUluZm8gfSBmcm9tICcuLi8uLi91dGlscy9jbGF1ZGVtZC5qcydcbmltcG9ydCB7IGdldENsYXVkZUNvbmZpZ0hvbWVEaXIgfSBmcm9tICcuLi8uLi91dGlscy9lbnZVdGlscy5qcydcbmltcG9ydCB7IGdldERpc3BsYXlQYXRoIH0gZnJvbSAnLi4vLi4vdXRpbHMvZmlsZS5qcydcbmltcG9ydCB7IGZvcm1hdFJlbGF0aXZlVGltZUFnbyB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC5qcydcbmltcG9ydCB7IHByb2plY3RJc0luR2l0UmVwbyB9IGZyb20gJy4uLy4uL3V0aWxzL21lbW9yeS92ZXJzaW9ucy5qcydcbmltcG9ydCB7IHVwZGF0ZVNldHRpbmdzRm9yU291cmNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2V0dGluZ3Mvc2V0dGluZ3MuanMnXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICcuLi9DdXN0b21TZWxlY3QvaW5kZXguanMnXG5pbXBvcnQgeyBMaXN0SXRlbSB9IGZyb20gJy4uL2Rlc2lnbi1zeXN0ZW0vTGlzdEl0ZW0uanMnXG5cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHMgKi9cbmNvbnN0IHRlYW1NZW1QYXRocyA9IGZlYXR1cmUoJ1RFQU1NRU0nKVxuICA/IChyZXF1aXJlKCcuLi8uLi9tZW1kaXIvdGVhbU1lbVBhdGhzLmpzJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vLi4vbWVtZGlyL3RlYW1NZW1QYXRocy5qcycpKVxuICA6IG51bGxcbi8qIGVzbGludC1lbmFibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyAqL1xuXG5pbnRlcmZhY2UgRXh0ZW5kZWRNZW1vcnlGaWxlSW5mbyBleHRlbmRzIE1lbW9yeUZpbGVJbmZvIHtcbiAgaXNOZXN0ZWQ/OiBib29sZWFuXG4gIGV4aXN0czogYm9vbGVhblxufVxuXG4vLyBSZW1lbWJlciBsYXN0IHNlbGVjdGVkIHBhdGhcbmxldCBsYXN0U2VsZWN0ZWRQYXRoOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuY29uc3QgT1BFTl9GT0xERVJfUFJFRklYID0gJ19fb3Blbl9mb2xkZXJfXydcblxudHlwZSBQcm9wcyA9IHtcbiAgb25TZWxlY3Q6IChwYXRoOiBzdHJpbmcpID0+IHZvaWRcbiAgb25DYW5jZWw6ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1lbW9yeUZpbGVTZWxlY3Rvcih7XG4gIG9uU2VsZWN0LFxuICBvbkNhbmNlbCxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgZXhpc3RpbmdNZW1vcnlGaWxlcyA9IHVzZShnZXRNZW1vcnlGaWxlcygpKVxuXG4gIC8vIENyZWF0ZSBlbnRyaWVzIGZvciBVc2VyIGFuZCBQcm9qZWN0IENMQVVERS5tZCBldmVuIGlmIHRoZXkgZG9uJ3QgZXhpc3RcbiAgY29uc3QgdXNlck1lbW9yeVBhdGggPSBqb2luKGdldENsYXVkZUNvbmZpZ0hvbWVEaXIoKSwgJ0NMQVVERS5tZCcpXG4gIGNvbnN0IHByb2plY3RNZW1vcnlQYXRoID0gam9pbihnZXRPcmlnaW5hbEN3ZCgpLCAnQ0xBVURFLm1kJylcblxuICAvLyBDaGVjayBpZiB0aGVzZSBhcmUgYWxyZWFkeSBpbiB0aGUgZXhpc3RpbmcgZmlsZXNcbiAgY29uc3QgaGFzVXNlck1lbW9yeSA9IGV4aXN0aW5nTWVtb3J5RmlsZXMuc29tZShmID0+IGYucGF0aCA9PT0gdXNlck1lbW9yeVBhdGgpXG4gIGNvbnN0IGhhc1Byb2plY3RNZW1vcnkgPSBleGlzdGluZ01lbW9yeUZpbGVzLnNvbWUoXG4gICAgZiA9PiBmLnBhdGggPT09IHByb2plY3RNZW1vcnlQYXRoLFxuICApXG5cbiAgLy8gRmlsdGVyIG91dCBBdXRvTWVtL1RlYW1NZW0gZW50cnlwb2ludHM6IHRoZXNlIGFyZSBNRU1PUlkubWQgZmlsZXMsIGFuZFxuICAvLyAvbWVtb3J5IGFscmVhZHkgc3VyZmFjZXMgXCJPcGVuIGF1dG8tbWVtb3J5IGZvbGRlclwiIC8gXCJPcGVuIHRlYW0gbWVtb3J5XG4gIC8vIGZvbGRlclwiIG9wdGlvbnMgYmVsb3cuIExpc3RpbmcgdGhlIGVudHJ5cG9pbnQgZmlsZSBzZXBhcmF0ZWx5IGlzIHJlZHVuZGFudC5cbiAgY29uc3QgYWxsTWVtb3J5RmlsZXM6IEV4dGVuZGVkTWVtb3J5RmlsZUluZm9bXSA9IFtcbiAgICAuLi5leGlzdGluZ01lbW9yeUZpbGVzXG4gICAgICAuZmlsdGVyKGYgPT4gZi50eXBlICE9PSAnQXV0b01lbScgJiYgZi50eXBlICE9PSAnVGVhbU1lbScpXG4gICAgICAubWFwKGYgPT4gKHsgLi4uZiwgZXhpc3RzOiB0cnVlIH0pKSxcbiAgICAvLyBBZGQgVXNlciBtZW1vcnkgaWYgaXQgZG9lc24ndCBleGlzdFxuICAgIC4uLihoYXNVc2VyTWVtb3J5XG4gICAgICA/IFtdXG4gICAgICA6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiB1c2VyTWVtb3J5UGF0aCxcbiAgICAgICAgICAgIHR5cGU6ICdVc2VyJyBhcyBjb25zdCxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnLFxuICAgICAgICAgICAgZXhpc3RzOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICBdKSxcbiAgICAvLyBBZGQgUHJvamVjdCBtZW1vcnkgaWYgaXQgZG9lc24ndCBleGlzdFxuICAgIC4uLihoYXNQcm9qZWN0TWVtb3J5XG4gICAgICA/IFtdXG4gICAgICA6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiBwcm9qZWN0TWVtb3J5UGF0aCxcbiAgICAgICAgICAgIHR5cGU6ICdQcm9qZWN0JyBhcyBjb25zdCxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnLFxuICAgICAgICAgICAgZXhpc3RzOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICBdKSxcbiAgXVxuXG4gIGNvbnN0IGRlcHRocyA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KClcblxuICAvLyBDcmVhdGUgb3B0aW9ucyBmb3IgdGhlIHNlbGVjdCBjb21wb25lbnRcbiAgY29uc3QgbWVtb3J5T3B0aW9ucyA9IGFsbE1lbW9yeUZpbGVzLm1hcChmaWxlID0+IHtcbiAgICBjb25zdCBkaXNwbGF5UGF0aCA9IGdldERpc3BsYXlQYXRoKGZpbGUucGF0aClcbiAgICBjb25zdCBleGlzdHNMYWJlbCA9IGZpbGUuZXhpc3RzID8gJycgOiAnIChuZXcpJ1xuXG4gICAgLy8gQ2FsY3VsYXRlIGRlcHRoIGJhc2VkIG9uIHBhcmVudFxuICAgIGNvbnN0IGRlcHRoID0gZmlsZS5wYXJlbnQgPyAoZGVwdGhzLmdldChmaWxlLnBhcmVudCkgPz8gMCkgKyAxIDogMFxuICAgIGRlcHRocy5zZXQoZmlsZS5wYXRoLCBkZXB0aClcbiAgICBjb25zdCBpbmRlbnQgPSBkZXB0aCA+IDAgPyAnICAnLnJlcGVhdChkZXB0aCAtIDEpIDogJydcblxuICAgIC8vIEZvcm1hdCBsYWJlbCBiYXNlZCBvbiB0eXBlXG4gICAgbGV0IGxhYmVsOiBzdHJpbmdcbiAgICBpZiAoXG4gICAgICBmaWxlLnR5cGUgPT09ICdVc2VyJyAmJlxuICAgICAgIWZpbGUuaXNOZXN0ZWQgJiZcbiAgICAgIGZpbGUucGF0aCA9PT0gdXNlck1lbW9yeVBhdGhcbiAgICApIHtcbiAgICAgIGxhYmVsID0gYFVzZXIgbWVtb3J5YFxuICAgIH0gZWxzZSBpZiAoXG4gICAgICBmaWxlLnR5cGUgPT09ICdQcm9qZWN0JyAmJlxuICAgICAgIWZpbGUuaXNOZXN0ZWQgJiZcbiAgICAgIGZpbGUucGF0aCA9PT0gcHJvamVjdE1lbW9yeVBhdGhcbiAgICApIHtcbiAgICAgIGxhYmVsID0gYFByb2plY3QgbWVtb3J5YFxuICAgIH0gZWxzZSBpZiAoZGVwdGggPiAwKSB7XG4gICAgICAvLyBGb3IgY2hpbGQgbm9kZXMgKGltcG9ydGVkIGZpbGVzKSwgc2hvdyBpbmRlbnRlZCB3aXRoIExcbiAgICAgIGxhYmVsID0gYCR7aW5kZW50fUwgJHtkaXNwbGF5UGF0aH0ke2V4aXN0c0xhYmVsfWBcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRm9yIG90aGVyIG1lbW9yeSBmaWxlcywganVzdCBzaG93IHRoZSBwYXRoXG4gICAgICBsYWJlbCA9IGAke2Rpc3BsYXlQYXRofWBcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgZGVzY3JpcHRpb24gYmFzZWQgb24gdHlwZSAtIGtlZXAgdGhlIG9yaWdpbmFsIGRlc2NyaXB0aW9ucyBmb3IgYnVpbHQtaW4gdHlwZXNcbiAgICBsZXQgZGVzY3JpcHRpb246IHN0cmluZ1xuICAgIGNvbnN0IGlzR2l0ID0gcHJvamVjdElzSW5HaXRSZXBvKGdldE9yaWdpbmFsQ3dkKCkpXG5cbiAgICBpZiAoZmlsZS50eXBlID09PSAnVXNlcicgJiYgIWZpbGUuaXNOZXN0ZWQpIHtcbiAgICAgIGRlc2NyaXB0aW9uID0gJ1NhdmVkIGluIH4vLmNsYXVkZS9DTEFVREUubWQnXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGZpbGUudHlwZSA9PT0gJ1Byb2plY3QnICYmXG4gICAgICAhZmlsZS5pc05lc3RlZCAmJlxuICAgICAgZmlsZS5wYXRoID09PSBwcm9qZWN0TWVtb3J5UGF0aFxuICAgICkge1xuICAgICAgZGVzY3JpcHRpb24gPSBgJHtpc0dpdCA/ICdDaGVja2VkIGluIGF0JyA6ICdTYXZlZCBpbid9IC4vQ0xBVURFLm1kYFxuICAgIH0gZWxzZSBpZiAoZmlsZS5wYXJlbnQpIHtcbiAgICAgIC8vIEZvciBpbXBvcnRlZCBmaWxlcyAod2l0aCBALWltcG9ydClcbiAgICAgIGRlc2NyaXB0aW9uID0gJ0AtaW1wb3J0ZWQnXG4gICAgfSBlbHNlIGlmIChmaWxlLmlzTmVzdGVkKSB7XG4gICAgICAvLyBGb3IgbmVzdGVkIGZpbGVzIChkeW5hbWljYWxseSBsb2FkZWQpXG4gICAgICBkZXNjcmlwdGlvbiA9ICdkeW5hbWljYWxseSBsb2FkZWQnXG4gICAgfSBlbHNlIHtcbiAgICAgIGRlc2NyaXB0aW9uID0gJydcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbGFiZWwsXG4gICAgICB2YWx1ZTogZmlsZS5wYXRoLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgfVxuICB9KVxuXG4gIC8vIEFkZCBcIk9wZW4gZm9sZGVyXCIgb3B0aW9ucyBmb3IgYXV0by1tZW1vcnkgYW5kIGFnZW50IG1lbW9yeSBkaXJlY3Rvcmllc1xuICBjb25zdCBmb2xkZXJPcHRpb25zOiBBcnJheTx7XG4gICAgbGFiZWw6IHN0cmluZ1xuICAgIHZhbHVlOiBzdHJpbmdcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIH0+ID0gW11cblxuICBjb25zdCBhZ2VudERlZmluaXRpb25zID0gdXNlQXBwU3RhdGUocyA9PiBzLmFnZW50RGVmaW5pdGlvbnMpXG4gIGlmIChpc0F1dG9NZW1vcnlFbmFibGVkKCkpIHtcbiAgICAvLyBBbHdheXMgc2hvdyBhdXRvLW1lbW9yeSBmb2xkZXIgb3B0aW9uXG4gICAgZm9sZGVyT3B0aW9ucy5wdXNoKHtcbiAgICAgIGxhYmVsOiAnT3BlbiBhdXRvLW1lbW9yeSBmb2xkZXInLFxuICAgICAgdmFsdWU6IGAke09QRU5fRk9MREVSX1BSRUZJWH0ke2dldEF1dG9NZW1QYXRoKCl9YCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICB9KVxuXG4gICAgLy8gVGVhbSBtZW1vcnkgZGlyZWN0bHkgYmVsb3cgYXV0by1tZW1vcnkgKHRlYW0gZGlyIGlzIGEgc3ViZGlyIG9mIGF1dG8gZGlyKVxuICAgIGlmIChmZWF0dXJlKCdURUFNTUVNJykgJiYgdGVhbU1lbVBhdGhzIS5pc1RlYW1NZW1vcnlFbmFibGVkKCkpIHtcbiAgICAgIGZvbGRlck9wdGlvbnMucHVzaCh7XG4gICAgICAgIGxhYmVsOiAnT3BlbiB0ZWFtIG1lbW9yeSBmb2xkZXInLFxuICAgICAgICB2YWx1ZTogYCR7T1BFTl9GT0xERVJfUFJFRklYfSR7dGVhbU1lbVBhdGhzIS5nZXRUZWFtTWVtUGF0aCgpfWAsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gQWRkIGFnZW50IG1lbW9yeSBmb2xkZXJzIGZvciBhZ2VudHMgdGhhdCBoYXZlIG1lbW9yeSBjb25maWd1cmVkXG4gICAgZm9yIChjb25zdCBhZ2VudCBvZiBhZ2VudERlZmluaXRpb25zLmFjdGl2ZUFnZW50cykge1xuICAgICAgaWYgKGFnZW50Lm1lbW9yeSkge1xuICAgICAgICBjb25zdCBhZ2VudERpciA9IGdldEFnZW50TWVtb3J5RGlyKGFnZW50LmFnZW50VHlwZSwgYWdlbnQubWVtb3J5KVxuICAgICAgICBmb2xkZXJPcHRpb25zLnB1c2goe1xuICAgICAgICAgIGxhYmVsOiBgT3BlbiAke2NoYWxrLmJvbGQoYWdlbnQuYWdlbnRUeXBlKX0gYWdlbnQgbWVtb3J5YCxcbiAgICAgICAgICB2YWx1ZTogYCR7T1BFTl9GT0xERVJfUFJFRklYfSR7YWdlbnREaXJ9YCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogYCR7YWdlbnQubWVtb3J5fSBzY29wZWAsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbWVtb3J5T3B0aW9ucy5wdXNoKC4uLmZvbGRlck9wdGlvbnMpXG5cbiAgLy8gSW5pdGlhbGl6ZSB3aXRoIGxhc3Qgc2VsZWN0ZWQgcGF0aCBpZiBpdCdzIHN0aWxsIGluIHRoZSBvcHRpb25zLCBvdGhlcndpc2UgdXNlIGZpcnN0IG9wdGlvblxuICBjb25zdCBpbml0aWFsUGF0aCA9XG4gICAgbGFzdFNlbGVjdGVkUGF0aCAmJlxuICAgIG1lbW9yeU9wdGlvbnMuc29tZShvcHQgPT4gb3B0LnZhbHVlID09PSBsYXN0U2VsZWN0ZWRQYXRoKVxuICAgICAgPyBsYXN0U2VsZWN0ZWRQYXRoXG4gICAgICA6IG1lbW9yeU9wdGlvbnNbMF0/LnZhbHVlIHx8ICcnXG5cbiAgLy8gVG9nZ2xlIHN0YXRlIChsb2NhbCBjb3B5IG9mIHNldHRpbmdzIHNvIHRoZSBVSSB1cGRhdGVzIGltbWVkaWF0ZWx5KVxuICBjb25zdCBbYXV0b01lbW9yeU9uLCBzZXRBdXRvTWVtb3J5T25dID0gdXNlU3RhdGUoaXNBdXRvTWVtb3J5RW5hYmxlZClcbiAgY29uc3QgW2F1dG9EcmVhbU9uLCBzZXRBdXRvRHJlYW1Pbl0gPSB1c2VTdGF0ZShpc0F1dG9EcmVhbUVuYWJsZWQpXG5cbiAgLy8gRHJlYW0gcm93IGlzIG9ubHkgbWVhbmluZ2Z1bCB3aGVuIGF1dG8tbWVtb3J5IGlzIG9uIChkcmVhbSBjb25zb2xpZGF0ZXNcbiAgLy8gdGhhdCBkaXIpLiBTbmFwc2hvdCBhdCBtb3VudCBzbyB0aGUgcm93IGRvZXNuJ3QgdmFuaXNoIG1pZC1uYXZpZ2F0aW9uXG4gIC8vIGlmIHRoZSB1c2VyIHRvZ2dsZXMgYXV0by1tZW1vcnkgb2ZmLlxuICBjb25zdCBbc2hvd0RyZWFtUm93XSA9IHVzZVN0YXRlKGlzQXV0b01lbW9yeUVuYWJsZWQpXG5cbiAgLy8gRHJlYW0gc3RhdHVzOiBwcmVmZXIgbGl2ZSB0YXNrIHN0YXRlICh0aGlzIHNlc3Npb24gZmlyZWQgaXQpLCBmYWxsIGJhY2tcbiAgLy8gdG8gdGhlIGNyb3NzLXByb2Nlc3MgbG9jayBtdGltZS5cbiAgY29uc3QgaXNEcmVhbVJ1bm5pbmcgPSB1c2VBcHBTdGF0ZShzID0+XG4gICAgT2JqZWN0LnZhbHVlcyhzLnRhc2tzKS5zb21lKFxuICAgICAgdCA9PiB0LnR5cGUgPT09ICdkcmVhbScgJiYgdC5zdGF0dXMgPT09ICdydW5uaW5nJyxcbiAgICApLFxuICApXG4gIGNvbnN0IFtsYXN0RHJlYW1BdCwgc2V0TGFzdERyZWFtQXRdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXNob3dEcmVhbVJvdykgcmV0dXJuXG4gICAgdm9pZCByZWFkTGFzdENvbnNvbGlkYXRlZEF0KCkudGhlbihzZXRMYXN0RHJlYW1BdClcbiAgfSwgW3Nob3dEcmVhbVJvdywgaXNEcmVhbVJ1bm5pbmddKVxuXG4gIGNvbnN0IGRyZWFtU3RhdHVzID0gaXNEcmVhbVJ1bm5pbmdcbiAgICA/ICdydW5uaW5nJ1xuICAgIDogbGFzdERyZWFtQXQgPT09IG51bGxcbiAgICAgID8gJycgLy8gc3RhdCBpbiBmbGlnaHRcbiAgICAgIDogbGFzdERyZWFtQXQgPT09IDBcbiAgICAgICAgPyAnbmV2ZXInXG4gICAgICAgIDogYGxhc3QgcmFuICR7Zm9ybWF0UmVsYXRpdmVUaW1lQWdvKG5ldyBEYXRlKGxhc3REcmVhbUF0KSl9YFxuXG4gIC8vIG51bGwgPSBTZWxlY3QgaGFzIGZvY3VzLCAwID0gYXV0by1tZW1vcnksIDEgPSBhdXRvLWRyZWFtIChpZiBzaG93RHJlYW1Sb3cpXG4gIGNvbnN0IFtmb2N1c2VkVG9nZ2xlLCBzZXRGb2N1c2VkVG9nZ2xlXSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpXG4gIGNvbnN0IHRvZ2dsZUZvY3VzZWQgPSBmb2N1c2VkVG9nZ2xlICE9PSBudWxsXG4gIGNvbnN0IGxhc3RUb2dnbGVJbmRleCA9IHNob3dEcmVhbVJvdyA/IDEgOiAwXG5cbiAgZnVuY3Rpb24gaGFuZGxlVG9nZ2xlQXV0b01lbW9yeSgpOiB2b2lkIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9ICFhdXRvTWVtb3J5T25cbiAgICB1cGRhdGVTZXR0aW5nc0ZvclNvdXJjZSgndXNlclNldHRpbmdzJywgeyBhdXRvTWVtb3J5RW5hYmxlZDogbmV3VmFsdWUgfSlcbiAgICBzZXRBdXRvTWVtb3J5T24obmV3VmFsdWUpXG4gICAgbG9nRXZlbnQoJ3Rlbmd1X2F1dG9fbWVtb3J5X3RvZ2dsZWQnLCB7IGVuYWJsZWQ6IG5ld1ZhbHVlIH0pXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVUb2dnbGVBdXRvRHJlYW0oKTogdm9pZCB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSAhYXV0b0RyZWFtT25cbiAgICB1cGRhdGVTZXR0aW5nc0ZvclNvdXJjZSgndXNlclNldHRpbmdzJywgeyBhdXRvRHJlYW1FbmFibGVkOiBuZXdWYWx1ZSB9KVxuICAgIHNldEF1dG9EcmVhbU9uKG5ld1ZhbHVlKVxuICAgIGxvZ0V2ZW50KCd0ZW5ndV9hdXRvX2RyZWFtX3RvZ2dsZWQnLCB7IGVuYWJsZWQ6IG5ld1ZhbHVlIH0pXG4gIH1cblxuICB1c2VFeGl0T25DdHJsQ0RXaXRoS2V5YmluZGluZ3MoKVxuXG4gIHVzZUtleWJpbmRpbmcoJ2NvbmZpcm06bm8nLCBvbkNhbmNlbCwgeyBjb250ZXh0OiAnQ29uZmlybWF0aW9uJyB9KVxuXG4gIHVzZUtleWJpbmRpbmcoXG4gICAgJ2NvbmZpcm06eWVzJyxcbiAgICAoKSA9PiB7XG4gICAgICBpZiAoZm9jdXNlZFRvZ2dsZSA9PT0gMCkgaGFuZGxlVG9nZ2xlQXV0b01lbW9yeSgpXG4gICAgICBlbHNlIGlmIChmb2N1c2VkVG9nZ2xlID09PSAxKSBoYW5kbGVUb2dnbGVBdXRvRHJlYW0oKVxuICAgIH0sXG4gICAgeyBjb250ZXh0OiAnQ29uZmlybWF0aW9uJywgaXNBY3RpdmU6IHRvZ2dsZUZvY3VzZWQgfSxcbiAgKVxuICB1c2VLZXliaW5kaW5nKFxuICAgICdzZWxlY3Q6bmV4dCcsXG4gICAgKCkgPT4ge1xuICAgICAgc2V0Rm9jdXNlZFRvZ2dsZShwcmV2ID0+XG4gICAgICAgIHByZXYgIT09IG51bGwgJiYgcHJldiA8IGxhc3RUb2dnbGVJbmRleCA/IHByZXYgKyAxIDogbnVsbCxcbiAgICAgIClcbiAgICB9LFxuICAgIHsgY29udGV4dDogJ1NlbGVjdCcsIGlzQWN0aXZlOiB0b2dnbGVGb2N1c2VkIH0sXG4gIClcbiAgdXNlS2V5YmluZGluZyhcbiAgICAnc2VsZWN0OnByZXZpb3VzJyxcbiAgICAoKSA9PiB7XG4gICAgICBzZXRGb2N1c2VkVG9nZ2xlKHByZXYgPT4gKHByZXYgIT09IG51bGwgJiYgcHJldiA+IDAgPyBwcmV2IC0gMSA6IHByZXYpKVxuICAgIH0sXG4gICAgeyBjb250ZXh0OiAnU2VsZWN0JywgaXNBY3RpdmU6IHRvZ2dsZUZvY3VzZWQgfSxcbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBtYXJnaW5Cb3R0b209ezF9PlxuICAgICAgICA8TGlzdEl0ZW0gaXNGb2N1c2VkPXtmb2N1c2VkVG9nZ2xlID09PSAwfT5cbiAgICAgICAgICA8VGV4dD5BdXRvLW1lbW9yeToge2F1dG9NZW1vcnlPbiA/ICdvbicgOiAnb2ZmJ308L1RleHQ+XG4gICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgIHtzaG93RHJlYW1Sb3cgJiYgKFxuICAgICAgICAgIDxMaXN0SXRlbSBpc0ZvY3VzZWQ9e2ZvY3VzZWRUb2dnbGUgPT09IDF9IHN0eWxlZD17ZmFsc2V9PlxuICAgICAgICAgICAgPFRleHQgY29sb3I9e2ZvY3VzZWRUb2dnbGUgPT09IDEgPyAnc3VnZ2VzdGlvbicgOiB1bmRlZmluZWR9PlxuICAgICAgICAgICAgICBBdXRvLWRyZWFtOiB7YXV0b0RyZWFtT24gPyAnb24nIDogJ29mZid9XG4gICAgICAgICAgICAgIHtkcmVhbVN0YXR1cyAmJiA8VGV4dCBkaW1Db2xvcj4gwrcge2RyZWFtU3RhdHVzfTwvVGV4dD59XG4gICAgICAgICAgICAgIHshaXNEcmVhbVJ1bm5pbmcgJiYgYXV0b0RyZWFtT24gJiYgKFxuICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPiDCtyAvZHJlYW0gdG8gcnVuPC9UZXh0PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cblxuICAgICAgPFNlbGVjdFxuICAgICAgICBkZWZhdWx0Rm9jdXNWYWx1ZT17aW5pdGlhbFBhdGh9XG4gICAgICAgIG9wdGlvbnM9e21lbW9yeU9wdGlvbnN9XG4gICAgICAgIGlzRGlzYWJsZWQ9e3RvZ2dsZUZvY3VzZWR9XG4gICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB7XG4gICAgICAgICAgaWYgKHZhbHVlLnN0YXJ0c1dpdGgoT1BFTl9GT0xERVJfUFJFRklYKSkge1xuICAgICAgICAgICAgY29uc3QgZm9sZGVyUGF0aCA9IHZhbHVlLnNsaWNlKE9QRU5fRk9MREVSX1BSRUZJWC5sZW5ndGgpXG4gICAgICAgICAgICAvLyBFbnN1cmUgZm9sZGVyIGV4aXN0cyBiZWZvcmUgb3BlbmluZyAoaWRlbXBvdGVudDsgc3dhbGxvd1xuICAgICAgICAgICAgLy8gcGVybWlzc2lvbiBlcnJvcnMgdG8gbWF0Y2ggcHJldmlvdXMgYmVoYXZpb3IpXG4gICAgICAgICAgICB2b2lkIG1rZGlyKGZvbGRlclBhdGgsIHsgcmVjdXJzaXZlOiB0cnVlIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7fSlcbiAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gb3BlblBhdGgoZm9sZGVyUGF0aCkpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgbGFzdFNlbGVjdGVkUGF0aCA9IHZhbHVlIC8vIFJlbWVtYmVyIHRoZSBzZWxlY3Rpb25cbiAgICAgICAgICBvblNlbGVjdCh2YWx1ZSlcbiAgICAgICAgfX1cbiAgICAgICAgb25DYW5jZWw9e29uQ2FuY2VsfVxuICAgICAgICBvblVwRnJvbUZpcnN0SXRlbT17KCkgPT4gc2V0Rm9jdXNlZFRvZ2dsZShsYXN0VG9nZ2xlSW5kZXgpfVxuICAgICAgLz5cbiAgICA8L0JveD5cbiAgKVxufVxuIiwgImltcG9ydCB7IGhvbWVkaXIgfSBmcm9tICdvcydcbmltcG9ydCB7IHJlbGF0aXZlIH0gZnJvbSAncGF0aCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7IGdldEN3ZCB9IGZyb20gJy4uLy4uL3V0aWxzL2N3ZC5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlbGF0aXZlTWVtb3J5UGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBob21lRGlyID0gaG9tZWRpcigpXG4gIGNvbnN0IGN3ZCA9IGdldEN3ZCgpXG5cbiAgLy8gQ2FsY3VsYXRlIHJlbGF0aXZlIHBhdGhzXG4gIGNvbnN0IHJlbGF0aXZlVG9Ib21lID0gcGF0aC5zdGFydHNXaXRoKGhvbWVEaXIpXG4gICAgPyAnficgKyBwYXRoLnNsaWNlKGhvbWVEaXIubGVuZ3RoKVxuICAgIDogbnVsbFxuXG4gIGNvbnN0IHJlbGF0aXZlVG9Dd2QgPSBwYXRoLnN0YXJ0c1dpdGgoY3dkKSA/ICcuLycgKyByZWxhdGl2ZShjd2QsIHBhdGgpIDogbnVsbFxuXG4gIC8vIFJldHVybiB0aGUgc2hvcnRlciBwYXRoLCBvciBhYnNvbHV0ZSBpZiBuZWl0aGVyIGlzIGFwcGxpY2FibGVcbiAgaWYgKHJlbGF0aXZlVG9Ib21lICYmIHJlbGF0aXZlVG9Dd2QpIHtcbiAgICByZXR1cm4gcmVsYXRpdmVUb0hvbWUubGVuZ3RoIDw9IHJlbGF0aXZlVG9Dd2QubGVuZ3RoXG4gICAgICA/IHJlbGF0aXZlVG9Ib21lXG4gICAgICA6IHJlbGF0aXZlVG9Dd2RcbiAgfVxuXG4gIHJldHVybiByZWxhdGl2ZVRvSG9tZSB8fCByZWxhdGl2ZVRvQ3dkIHx8IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1lbW9yeVVwZGF0ZU5vdGlmaWNhdGlvbih7XG4gIG1lbW9yeVBhdGgsXG59OiB7XG4gIG1lbW9yeVBhdGg6IHN0cmluZ1xufSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IGRpc3BsYXlQYXRoID0gZ2V0UmVsYXRpdmVNZW1vcnlQYXRoKG1lbW9yeVBhdGgpXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBmbGV4R3Jvdz17MX0+XG4gICAgICA8VGV4dCBjb2xvcj1cInRleHRcIj5cbiAgICAgICAgTWVtb3J5IHVwZGF0ZWQgaW4ge2Rpc3BsYXlQYXRofSDCtyAvbWVtb3J5IHRvIGVkaXRcbiAgICAgIDwvVGV4dD5cbiAgICA8L0JveD5cbiAgKVxufVxuIiwgImltcG9ydCB7IG1rZGlyLCB3cml0ZUZpbGUgfSBmcm9tICdmcy9wcm9taXNlcydcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBDb21tYW5kUmVzdWx0RGlzcGxheSB9IGZyb20gJy4uLy4uL2NvbW1hbmRzLmpzJ1xuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kZXNpZ24tc3lzdGVtL0RpYWxvZy5qcydcbmltcG9ydCB7IE1lbW9yeUZpbGVTZWxlY3RvciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWVtb3J5L01lbW9yeUZpbGVTZWxlY3Rvci5qcydcbmltcG9ydCB7IGdldFJlbGF0aXZlTWVtb3J5UGF0aCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWVtb3J5L01lbW9yeVVwZGF0ZU5vdGlmaWNhdGlvbi5qcydcbmltcG9ydCB7IEJveCwgTGluaywgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB0eXBlIHsgTG9jYWxKU1hDb21tYW5kQ2FsbCB9IGZyb20gJy4uLy4uL3R5cGVzL2NvbW1hbmQuanMnXG5pbXBvcnQgeyBjbGVhck1lbW9yeUZpbGVDYWNoZXMsIGdldE1lbW9yeUZpbGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2xhdWRlbWQuanMnXG5pbXBvcnQgeyBnZXRDbGF1ZGVDb25maWdIb21lRGlyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZW52VXRpbHMuanMnXG5pbXBvcnQgeyBnZXRFcnJub0NvZGUgfSBmcm9tICcuLi8uLi91dGlscy9lcnJvcnMuanMnXG5pbXBvcnQgeyBsb2dFcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZy5qcydcbmltcG9ydCB7IGVkaXRGaWxlSW5FZGl0b3IgfSBmcm9tICcuLi8uLi91dGlscy9wcm9tcHRFZGl0b3IuanMnXG5cbmZ1bmN0aW9uIE1lbW9yeUNvbW1hbmQoe1xuICBvbkRvbmUsXG59OiB7XG4gIG9uRG9uZTogKFxuICAgIHJlc3VsdD86IHN0cmluZyxcbiAgICBvcHRpb25zPzogeyBkaXNwbGF5PzogQ29tbWFuZFJlc3VsdERpc3BsYXkgfSxcbiAgKSA9PiB2b2lkXG59KTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgaGFuZGxlU2VsZWN0TWVtb3J5RmlsZSA9IGFzeW5jIChtZW1vcnlQYXRoOiBzdHJpbmcpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gQ3JlYXRlIGNsYXVkZSBkaXJlY3RvcnkgaWYgaXQgZG9lc24ndCBleGlzdCAoaWRlbXBvdGVudCB3aXRoIHJlY3Vyc2l2ZSlcbiAgICAgIGlmIChtZW1vcnlQYXRoLmluY2x1ZGVzKGdldENsYXVkZUNvbmZpZ0hvbWVEaXIoKSkpIHtcbiAgICAgICAgYXdhaXQgbWtkaXIoZ2V0Q2xhdWRlQ29uZmlnSG9tZURpcigpLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KVxuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgZmlsZSBpZiBpdCBkb2Vzbid0IGV4aXN0ICh3eCBmbGFnIGZhaWxzIGlmIGZpbGUgZXhpc3RzLFxuICAgICAgLy8gd2hpY2ggd2UgY2F0Y2ggdG8gcHJlc2VydmUgZXhpc3RpbmcgY29udGVudClcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHdyaXRlRmlsZShtZW1vcnlQYXRoLCAnJywgeyBlbmNvZGluZzogJ3V0ZjgnLCBmbGFnOiAnd3gnIH0pXG4gICAgICB9IGNhdGNoIChlOiB1bmtub3duKSB7XG4gICAgICAgIGlmIChnZXRFcnJub0NvZGUoZSkgIT09ICdFRVhJU1QnKSB7XG4gICAgICAgICAgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGF3YWl0IGVkaXRGaWxlSW5FZGl0b3IobWVtb3J5UGF0aClcblxuICAgICAgLy8gRGV0ZXJtaW5lIHdoaWNoIGVudmlyb25tZW50IHZhcmlhYmxlIGNvbnRyb2xzIHRoZSBlZGl0b3JcbiAgICAgIGxldCBlZGl0b3JTb3VyY2UgPSAnZGVmYXVsdCdcbiAgICAgIGxldCBlZGl0b3JWYWx1ZSA9ICcnXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuVklTVUFMKSB7XG4gICAgICAgIGVkaXRvclNvdXJjZSA9ICckVklTVUFMJ1xuICAgICAgICBlZGl0b3JWYWx1ZSA9IHByb2Nlc3MuZW52LlZJU1VBTFxuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5FRElUT1IpIHtcbiAgICAgICAgZWRpdG9yU291cmNlID0gJyRFRElUT1InXG4gICAgICAgIGVkaXRvclZhbHVlID0gcHJvY2Vzcy5lbnYuRURJVE9SXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVkaXRvckluZm8gPVxuICAgICAgICBlZGl0b3JTb3VyY2UgIT09ICdkZWZhdWx0J1xuICAgICAgICAgID8gYFVzaW5nICR7ZWRpdG9yU291cmNlfT1cIiR7ZWRpdG9yVmFsdWV9XCIuYFxuICAgICAgICAgIDogJydcblxuICAgICAgY29uc3QgZWRpdG9ySGludCA9IGVkaXRvckluZm9cbiAgICAgICAgPyBgPiAke2VkaXRvckluZm99IFRvIGNoYW5nZSBlZGl0b3IsIHNldCAkRURJVE9SIG9yICRWSVNVQUwgZW52aXJvbm1lbnQgdmFyaWFibGUuYFxuICAgICAgICA6IGA+IFRvIHVzZSBhIGRpZmZlcmVudCBlZGl0b3IsIHNldCB0aGUgJEVESVRPUiBvciAkVklTVUFMIGVudmlyb25tZW50IHZhcmlhYmxlLmBcblxuICAgICAgb25Eb25lKFxuICAgICAgICBgT3BlbmVkIG1lbW9yeSBmaWxlIGF0ICR7Z2V0UmVsYXRpdmVNZW1vcnlQYXRoKG1lbW9yeVBhdGgpfVxcblxcbiR7ZWRpdG9ySGludH1gLFxuICAgICAgICB7IGRpc3BsYXk6ICdzeXN0ZW0nIH0sXG4gICAgICApXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZ0Vycm9yKGVycm9yKVxuICAgICAgb25Eb25lKGBFcnJvciBvcGVuaW5nIG1lbW9yeSBmaWxlOiAke2Vycm9yfWApXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xuICAgIG9uRG9uZSgnQ2FuY2VsbGVkIG1lbW9yeSBlZGl0aW5nJywgeyBkaXNwbGF5OiAnc3lzdGVtJyB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nIHRpdGxlPVwiTWVtb3J5XCIgb25DYW5jZWw9e2hhbmRsZUNhbmNlbH0gY29sb3I9XCJyZW1lbWJlclwiPlxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIDxSZWFjdC5TdXNwZW5zZSBmYWxsYmFjaz17bnVsbH0+XG4gICAgICAgICAgPE1lbW9yeUZpbGVTZWxlY3RvclxuICAgICAgICAgICAgb25TZWxlY3Q9e2hhbmRsZVNlbGVjdE1lbW9yeUZpbGV9XG4gICAgICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUmVhY3QuU3VzcGVuc2U+XG5cbiAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgTGVhcm4gbW9yZTogPExpbmsgdXJsPVwiaHR0cHM6Ly9jb2RlLmNsYXVkZS5jb20vZG9jcy9lbi9tZW1vcnlcIiAvPlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L0RpYWxvZz5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgY2FsbDogTG9jYWxKU1hDb21tYW5kQ2FsbCA9IGFzeW5jIG9uRG9uZSA9PiB7XG4gIC8vIENsZWFyICsgcHJpbWUgYmVmb3JlIHJlbmRlcmluZyDigJQgU3VzcGVuc2UgaGFuZGxlcyB0aGUgdW5wcmltZWQgY2FzZSxcbiAgLy8gYnV0IGF3YWl0aW5nIGhlcmUgYXZvaWRzIGEgZmFsbGJhY2sgZmxhc2ggb24gaW5pdGlhbCBvcGVuLlxuICBjbGVhck1lbW9yeUZpbGVDYWNoZXMoKVxuICBhd2FpdCBnZXRNZW1vcnlGaWxlcygpXG4gIHJldHVybiA8TWVtb3J5Q29tbWFuZCBvbkRvbmU9e29uRG9uZX0gLz5cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLTyxTQUFTLG1CQUFtQixLQUFzQjtBQUN2RCxTQUFPLFlBQVksR0FBRyxNQUFNO0FBQzlCO0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDRUEsU0FBU0EsYUFBYTtBQUN0QixTQUFTQyxZQUFZO0FBNENkLFNB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O0FBQ0E7QUFDQTtBQW1GTyxJQUFNQSxPQUE0QixPQUFNeEIsV0FBVTtBQUd2RHlCLDRCQUFzQjtBQUN0QixZQUFNQyxlQUFlO0FBQ3JCLGFBQU8sOEJBQUMsaUJBQWMsUUFBZTtJQUN2Qzs7OyIsCiAgIm5hbWVzIjogWyJta2RpciIsICJqb2luIiwgIk1lbW9yeUZpbGVTZWxlY3RvciIsICJ0MCIsICIkIiwgIl9jIiwgIm9uU2VsZWN0IiwgIm9uQ2FuY2VsIiwgImV4aXN0aW5nTWVtb3J5RmlsZXMiLCAidXNlIiwgImdldE1lbW9yeUZpbGVzIiwgInVzZXJNZW1vcnlQYXRoIiwgImdldENsYXVkZUNvbmZpZ0hvbWVEaXIiLCAicHJvamVjdE1lbW9yeVBhdGgiLCAiZ2V0T3JpZ2luYWxDd2QiLCAiaGFzVXNlck1lbW9yeSIsICJzb21lIiwgImYiLCAicGF0aCIsICJoYXNQcm9qZWN0TWVtb3J5IiwgImZfMCIsICJhbGxNZW1vcnlGaWxlcyIsICJmaWx0ZXIiLCAiX3RlbXAiLCAibWFwIiwgIl90ZW1wMiIsICJ0eXBlIiwgImNvbnRlbnQiLCAiZXhpc3RzIiwgImRlcHRocyIsICJNYXAiLCAibWVtb3J5T3B0aW9ucyIsICJmaWxlIiwgImRpc3BsYXlQYXRoIiwgImdldERpc3BsYXlQYXRoIiwgImV4aXN0c0xhYmVsIiwgImRlcHRoIiwgInBhcmVudCIsICJnZXQiLCAic2V0IiwgImluZGVudCIsICJyZXBlYXQiLCAibGFiZWwiLCAiaXNOZXN0ZWQiLCAiZGVzY3JpcHRpb24iLCAiaXNHaXQiLCAicHJvamVjdElzSW5HaXRSZXBvIiwgInZhbHVlIiwgImZvbGRlck9wdGlvbnMiLCAiYWdlbnREZWZpbml0aW9ucyIsICJ1c2VBcHBTdGF0ZSIsICJfdGVtcDMiLCAiaXNBdXRvTWVtb3J5RW5hYmxlZCIsICJ0MSIsICJTeW1ib2wiLCAiZm9yIiwgIk9QRU5fRk9MREVSX1BSRUZJWCIsICJnZXRBdXRvTWVtUGF0aCIsICJwdXNoIiwgImZlYXR1cmUiLCAidGVhbU1lbVBhdGhzIiwgImlzVGVhbU1lbW9yeUVuYWJsZWQiLCAidDIiLCAiZ2V0VGVhbU1lbVBhdGgiLCAiYWdlbnQiLCAiYWN0aXZlQWdlbnRzIiwgIm1lbW9yeSIsICJhZ2VudERpciIsICJnZXRBZ2VudE1lbW9yeURpciIsICJhZ2VudFR5cGUiLCAiY2hhbGsiLCAiYm9sZCIsICJsYXN0U2VsZWN0ZWRQYXRoIiwgIl90ZW1wNCIsICJpbml0aWFsUGF0aCIsICJhdXRvTWVtb3J5T24iLCAic2V0QXV0b01lbW9yeU9uIiwgInVzZVN0YXRlIiwgImF1dG9EcmVhbU9uIiwgInNldEF1dG9EcmVhbU9uIiwgImlzQXV0b0RyZWFtRW5hYmxlZCIsICJzaG93RHJlYW1Sb3ciLCAiaXNEcmVhbVJ1bm5pbmciLCAiX3RlbXA2IiwgImxhc3REcmVhbUF0IiwgInNldExhc3REcmVhbUF0IiwgInJlYWRMYXN0Q29uc29saWRhdGVkQXQiLCAidGhlbiIsICJ0MyIsICJ1c2VFZmZlY3QiLCAidDQiLCAiZm9ybWF0UmVsYXRpdmVUaW1lQWdvIiwgIkRhdGUiLCAiZHJlYW1TdGF0dXMiLCAiZm9jdXNlZFRvZ2dsZSIsICJzZXRGb2N1c2VkVG9nZ2xlIiwgInRvZ2dsZUZvY3VzZWQiLCAibGFzdFRvZ2dsZUluZGV4IiwgInQ1IiwgImhhbmRsZVRvZ2dsZUF1dG9NZW1vcnkiLCAibmV3VmFsdWUiLCAidXBkYXRlU2V0dGluZ3NGb3JTb3VyY2UiLCAiYXV0b01lbW9yeUVuYWJsZWQiLCAibG9nRXZlbnQiLCAiZW5hYmxlZCIsICJ0NiIsICJoYW5kbGVUb2dnbGVBdXRvRHJlYW0iLCAibmV3VmFsdWVfMCIsICJhdXRvRHJlYW1FbmFibGVkIiwgInVzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncyIsICJ0NyIsICJjb250ZXh0IiwgInVzZUtleWJpbmRpbmciLCAidDgiLCAidDkiLCAiaXNBY3RpdmUiLCAidDEwIiwgInByZXYiLCAidDExIiwgInQxMiIsICJfdGVtcDciLCAidDEzIiwgInQxNCIsICJ0MTUiLCAidDE2IiwgInQxNyIsICJ0MTgiLCAidW5kZWZpbmVkIiwgInQxOSIsICJ0MjAiLCAic3RhcnRzV2l0aCIsICJmb2xkZXJQYXRoIiwgInNsaWNlIiwgImxlbmd0aCIsICJyZWN1cnNpdmUiLCAiY2F0Y2giLCAiX3RlbXA4IiwgIm9wZW5QYXRoIiwgInQyMSIsICJ0MjIiLCAidDIzIiwgInByZXZfMCIsICJzXzAiLCAiT2JqZWN0IiwgInZhbHVlcyIsICJzIiwgInRhc2tzIiwgIl90ZW1wNSIsICJ0IiwgInN0YXR1cyIsICJvcHQiLCAiZl8yIiwgImZfMSIsICJyZXF1aXJlIiwgImhvbWVkaXIiLCAicmVsYXRpdmUiLCAiZ2V0UmVsYXRpdmVNZW1vcnlQYXRoIiwgInBhdGgiLCAiaG9tZURpciIsICJjd2QiLCAiZ2V0Q3dkIiwgInJlbGF0aXZlVG9Ib21lIiwgInN0YXJ0c1dpdGgiLCAic2xpY2UiLCAibGVuZ3RoIiwgInJlbGF0aXZlVG9Dd2QiLCAibWtkaXIiLCAid3JpdGVGaWxlIiwgIk1lbW9yeUNvbW1hbmQiLCAib25Eb25lIiwgImhhbmRsZVNlbGVjdE1lbW9yeUZpbGUiLCAibWVtb3J5UGF0aCIsICJpbmNsdWRlcyIsICJnZXRDbGF1ZGVDb25maWdIb21lRGlyIiwgInJlY3Vyc2l2ZSIsICJlbmNvZGluZyIsICJmbGFnIiwgImUiLCAiZ2V0RXJybm9Db2RlIiwgImVkaXRGaWxlSW5FZGl0b3IiLCAiZWRpdG9yU291cmNlIiwgImVkaXRvclZhbHVlIiwgInByb2Nlc3MiLCAiZW52IiwgIlZJU1VBTCIsICJFRElUT1IiLCAiZWRpdG9ySW5mbyIsICJlZGl0b3JIaW50IiwgImdldFJlbGF0aXZlTWVtb3J5UGF0aCIsICJkaXNwbGF5IiwgImVycm9yIiwgImxvZ0Vycm9yIiwgImhhbmRsZUNhbmNlbCIsICJjYWxsIiwgImNsZWFyTWVtb3J5RmlsZUNhY2hlcyIsICJnZXRNZW1vcnlGaWxlcyJdCn0K
