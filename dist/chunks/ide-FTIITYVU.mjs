#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  Select,
  clearServerCache,
  detectIDEs,
  detectRunningIDEs,
  getCurrentWorktreeSession,
  init_AppState,
  init_CustomSelect,
  init_client,
  init_ide,
  init_worktree,
  isJetBrainsIde,
  isSupportedJetBrainsTerminal,
  isSupportedTerminal,
  toIDEDisplayName,
  useAppState,
  useSetAppState
} from "./chunk-BQ2W5UUK.mjs";
import "./chunk-PJK4KGGT.mjs";
import {
  Dialog,
  init_Dialog
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
import {
  ThemedBox_default,
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime
} from "./chunk-ZFJCSCYD.mjs";
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
import "./chunk-H3V45RZC.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  getGlobalConfig,
  init_config,
  init_source,
  saveGlobalConfig,
  source_default
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
import {
  execFileNoThrow,
  init_execFileNoThrow
} from "./chunk-IVTTVOOG.mjs";
import "./chunk-LNQOFDTT.mjs";
import "./chunk-ZAYB3WZV.mjs";
import "./chunk-NT7W7YWD.mjs";
import "./chunk-4S33EKPF.mjs";
import {
  getCwd,
  init_cwd
} from "./chunk-TZFTPSMG.mjs";
import "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-F5ODCUJD.mjs";
import "./chunk-L2VTD674.mjs";
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

// src/components/IdeAutoConnectDialog.tsx
function IdeAutoConnectDialog(t0) {
  const $ = c(9);
  const {
    onComplete
  } = t0;
  let t1;
  if ($[0] !== onComplete) {
    t1 = async (value) => {
      const autoConnect = value === "yes";
      saveGlobalConfig((current) => ({
        ...current,
        autoConnectIde: autoConnect,
        hasIdeAutoConnectDialogBeenShown: true
      }));
      onComplete();
    };
    $[0] = onComplete;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const handleSelect = t1;
  let t2;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = [{
      label: "Yes",
      value: "yes"
    }, {
      label: "No",
      value: "no"
    }];
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  const options = t2;
  let t3;
  if ($[3] !== handleSelect) {
    t3 = /* @__PURE__ */ react_default.createElement(Select, { options, onChange: handleSelect, defaultValue: "yes" });
    $[3] = handleSelect;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "You can also configure this in /config or with the --ide flag");
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  let t5;
  if ($[6] !== onComplete || $[7] !== t3) {
    t5 = /* @__PURE__ */ react_default.createElement(Dialog, { title: "Do you wish to enable auto-connect to IDE?", color: "ide", onCancel: onComplete }, t3, t4);
    $[6] = onComplete;
    $[7] = t3;
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  return t5;
}
function shouldShowAutoConnectDialog() {
  const config = getGlobalConfig();
  return !isSupportedTerminal() && config.autoConnectIde !== true && config.hasIdeAutoConnectDialogBeenShown !== true;
}
function IdeDisableAutoConnectDialog(t0) {
  const $ = c(10);
  const {
    onComplete
  } = t0;
  let t1;
  if ($[0] !== onComplete) {
    t1 = (value) => {
      const disableAutoConnect = value === "yes";
      if (disableAutoConnect) {
        saveGlobalConfig(_temp);
      }
      onComplete(disableAutoConnect);
    };
    $[0] = onComplete;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const handleSelect = t1;
  let t2;
  if ($[2] !== onComplete) {
    t2 = () => {
      onComplete(false);
    };
    $[2] = onComplete;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  const handleCancel = t2;
  let t3;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = [{
      label: "No",
      value: "no"
    }, {
      label: "Yes",
      value: "yes"
    }];
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  const options = t3;
  let t4;
  if ($[5] !== handleSelect) {
    t4 = /* @__PURE__ */ react_default.createElement(Select, { options, onChange: handleSelect, defaultValue: "no" });
    $[5] = handleSelect;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] !== handleCancel || $[8] !== t4) {
    t5 = /* @__PURE__ */ react_default.createElement(Dialog, { title: "Do you wish to disable auto-connect to IDE?", subtitle: "You can also configure this in /config", onCancel: handleCancel, color: "ide" }, t4);
    $[7] = handleCancel;
    $[8] = t4;
    $[9] = t5;
  } else {
    t5 = $[9];
  }
  return t5;
}
function _temp(current) {
  return {
    ...current,
    autoConnectIde: false
  };
}
function shouldShowDisableAutoConnectDialog() {
  const config = getGlobalConfig();
  return !isSupportedTerminal() && config.autoConnectIde === true;
}
var init_IdeAutoConnectDialog = __esm({
  "src/components/IdeAutoConnectDialog.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_config();
    init_ide();
    init_CustomSelect();
    init_Dialog();
  }
});

// src/commands/ide/ide.tsx
import * as path from "path";
function IDEScreen(t0) {
  const $ = c(39);
  const {
    availableIDEs,
    unavailableIDEs,
    selectedIDE,
    onClose,
    onSelect
  } = t0;
  let t1;
  if ($[0] !== selectedIDE?.port) {
    t1 = selectedIDE?.port?.toString() ?? "None";
    $[0] = selectedIDE?.port;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const [selectedValue, setSelectedValue] = useState(t1);
  const [showAutoConnectDialog, setShowAutoConnectDialog] = useState(false);
  const [showDisableAutoConnectDialog, setShowDisableAutoConnectDialog] = useState(false);
  let t2;
  if ($[2] !== availableIDEs || $[3] !== onSelect) {
    t2 = (value) => {
      if (value !== "None" && shouldShowAutoConnectDialog()) {
        setShowAutoConnectDialog(true);
      } else {
        if (value === "None" && shouldShowDisableAutoConnectDialog()) {
          setShowDisableAutoConnectDialog(true);
        } else {
          onSelect(availableIDEs.find((ide) => ide.port === parseInt(value)));
        }
      }
    };
    $[2] = availableIDEs;
    $[3] = onSelect;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  const handleSelectIDE = t2;
  let t3;
  if ($[5] !== availableIDEs) {
    t3 = availableIDEs.reduce(_temp4, {});
    $[5] = availableIDEs;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  const ideCounts = t3;
  let t4;
  if ($[7] !== availableIDEs || $[8] !== ideCounts) {
    let t52;
    if ($[10] !== ideCounts) {
      t52 = (ide_1) => {
        const hasMultipleInstances = (ideCounts[ide_1.name] || 0) > 1;
        const showWorkspace = hasMultipleInstances && ide_1.workspaceFolders.length > 0;
        return {
          label: ide_1.name,
          value: ide_1.port.toString(),
          description: showWorkspace ? formatWorkspaceFolders(ide_1.workspaceFolders) : void 0
        };
      };
      $[10] = ideCounts;
      $[11] = t52;
    } else {
      t52 = $[11];
    }
    t4 = availableIDEs.map(t52).concat([{
      label: "None",
      value: "None",
      description: void 0
    }]);
    $[7] = availableIDEs;
    $[8] = ideCounts;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  const options = t4;
  if (showAutoConnectDialog) {
    let t52;
    if ($[12] !== handleSelectIDE || $[13] !== selectedValue) {
      t52 = /* @__PURE__ */ react_default.createElement(IdeAutoConnectDialog, { onComplete: () => handleSelectIDE(selectedValue) });
      $[12] = handleSelectIDE;
      $[13] = selectedValue;
      $[14] = t52;
    } else {
      t52 = $[14];
    }
    return t52;
  }
  if (showDisableAutoConnectDialog) {
    let t52;
    if ($[15] !== onSelect) {
      t52 = /* @__PURE__ */ react_default.createElement(IdeDisableAutoConnectDialog, { onComplete: () => {
        onSelect(void 0);
      } });
      $[15] = onSelect;
      $[16] = t52;
    } else {
      t52 = $[16];
    }
    return t52;
  }
  let t5;
  if ($[17] !== availableIDEs.length) {
    t5 = availableIDEs.length === 0 && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, isSupportedJetBrainsTerminal() ? "No available IDEs detected. Please install the plugin and restart your IDE:\nhttps://docs.claude.com/s/claude-code-jetbrains" : "No available IDEs detected. Make sure your IDE has the Blaude extension or plugin installed and is running.");
    $[17] = availableIDEs.length;
    $[18] = t5;
  } else {
    t5 = $[18];
  }
  let t6;
  if ($[19] !== availableIDEs.length || $[20] !== handleSelectIDE || $[21] !== options || $[22] !== selectedValue) {
    t6 = availableIDEs.length !== 0 && /* @__PURE__ */ react_default.createElement(Select, { defaultValue: selectedValue, defaultFocusValue: selectedValue, options, onChange: (value_0) => {
      setSelectedValue(value_0);
      handleSelectIDE(value_0);
    } });
    $[19] = availableIDEs.length;
    $[20] = handleSelectIDE;
    $[21] = options;
    $[22] = selectedValue;
    $[23] = t6;
  } else {
    t6 = $[23];
  }
  let t7;
  if ($[24] !== availableIDEs) {
    t7 = availableIDEs.length !== 0 && availableIDEs.some(_temp2) && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "warning" }, "Note: Only one Blaude instance can be connected to VS Code at a time."));
    $[24] = availableIDEs;
    $[25] = t7;
  } else {
    t7 = $[25];
  }
  let t8;
  if ($[26] !== availableIDEs.length) {
    t8 = availableIDEs.length !== 0 && !isSupportedTerminal() && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Tip: You can enable auto-connect to IDE in /config or with the --ide flag"));
    $[26] = availableIDEs.length;
    $[27] = t8;
  } else {
    t8 = $[27];
  }
  let t9;
  if ($[28] !== unavailableIDEs) {
    t9 = unavailableIDEs.length > 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1, flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Found ", unavailableIDEs.length, " other running IDE(s). However, their workspace/project directories do not match the current cwd."), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1, flexDirection: "column" }, unavailableIDEs.map(_temp3)));
    $[28] = unavailableIDEs;
    $[29] = t9;
  } else {
    t9 = $[29];
  }
  let t10;
  if ($[30] !== t5 || $[31] !== t6 || $[32] !== t7 || $[33] !== t8 || $[34] !== t9) {
    t10 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, t5, t6, t7, t8, t9);
    $[30] = t5;
    $[31] = t6;
    $[32] = t7;
    $[33] = t8;
    $[34] = t9;
    $[35] = t10;
  } else {
    t10 = $[35];
  }
  let t11;
  if ($[36] !== onClose || $[37] !== t10) {
    t11 = /* @__PURE__ */ react_default.createElement(Dialog, { title: "Select IDE", subtitle: "Connect to an IDE for integrated development features.", onCancel: onClose, color: "ide" }, t10);
    $[36] = onClose;
    $[37] = t10;
    $[38] = t11;
  } else {
    t11 = $[38];
  }
  return t11;
}
function _temp3(ide_3, index) {
  return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { key: index, paddingLeft: 3 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "\u2022 ", ide_3.name, ": ", formatWorkspaceFolders(ide_3.workspaceFolders)));
}
function _temp2(ide_2) {
  return ide_2.name === "VS Code" || ide_2.name === "Visual Studio Code";
}
function _temp4(acc, ide_0) {
  acc[ide_0.name] = (acc[ide_0.name] || 0) + 1;
  return acc;
}
async function findCurrentIDE(availableIDEs, dynamicMcpConfig) {
  const currentConfig = dynamicMcpConfig?.ide;
  if (!currentConfig || currentConfig.type !== "sse-ide" && currentConfig.type !== "ws-ide") {
    return null;
  }
  for (const ide of availableIDEs) {
    if (ide.url === currentConfig.url) {
      return ide;
    }
  }
  return null;
}
function IDEOpenSelection(t0) {
  const $ = c(18);
  const {
    availableIDEs,
    onSelectIDE,
    onDone
  } = t0;
  let t1;
  if ($[0] !== availableIDEs[0]?.port) {
    t1 = availableIDEs[0]?.port?.toString() ?? "";
    $[0] = availableIDEs[0]?.port;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const [selectedValue, setSelectedValue] = useState(t1);
  let t2;
  if ($[2] !== availableIDEs || $[3] !== onSelectIDE) {
    t2 = (value) => {
      const selectedIDE = availableIDEs.find((ide) => ide.port === parseInt(value));
      onSelectIDE(selectedIDE);
    };
    $[2] = availableIDEs;
    $[3] = onSelectIDE;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  const handleSelectIDE = t2;
  let t3;
  if ($[5] !== availableIDEs) {
    t3 = availableIDEs.map(_temp42);
    $[5] = availableIDEs;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  const options = t3;
  let t4;
  if ($[7] !== onDone) {
    t4 = function handleCancel2() {
      onDone("IDE selection cancelled", {
        display: "system"
      });
    };
    $[7] = onDone;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  const handleCancel = t4;
  let t5;
  if ($[9] !== handleSelectIDE) {
    t5 = (value_0) => {
      setSelectedValue(value_0);
      handleSelectIDE(value_0);
    };
    $[9] = handleSelectIDE;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  let t6;
  if ($[11] !== options || $[12] !== selectedValue || $[13] !== t5) {
    t6 = /* @__PURE__ */ react_default.createElement(Select, { defaultValue: selectedValue, defaultFocusValue: selectedValue, options, onChange: t5 });
    $[11] = options;
    $[12] = selectedValue;
    $[13] = t5;
    $[14] = t6;
  } else {
    t6 = $[14];
  }
  let t7;
  if ($[15] !== handleCancel || $[16] !== t6) {
    t7 = /* @__PURE__ */ react_default.createElement(Dialog, { title: "Select an IDE to open the project", onCancel: handleCancel, color: "ide" }, t6);
    $[15] = handleCancel;
    $[16] = t6;
    $[17] = t7;
  } else {
    t7 = $[17];
  }
  return t7;
}
function _temp42(ide_0) {
  return {
    label: ide_0.name,
    value: ide_0.port.toString()
  };
}
function RunningIDESelector(t0) {
  const $ = c(15);
  const {
    runningIDEs,
    onSelectIDE,
    onDone
  } = t0;
  const [selectedValue, setSelectedValue] = useState(runningIDEs[0] ?? "");
  let t1;
  if ($[0] !== onSelectIDE) {
    t1 = (value) => {
      onSelectIDE(value);
    };
    $[0] = onSelectIDE;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const handleSelectIDE = t1;
  let t2;
  if ($[2] !== runningIDEs) {
    t2 = runningIDEs.map(_temp5);
    $[2] = runningIDEs;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  const options = t2;
  let t3;
  if ($[4] !== onDone) {
    t3 = function handleCancel2() {
      onDone("IDE selection cancelled", {
        display: "system"
      });
    };
    $[4] = onDone;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  const handleCancel = t3;
  let t4;
  if ($[6] !== handleSelectIDE) {
    t4 = (value_0) => {
      setSelectedValue(value_0);
      handleSelectIDE(value_0);
    };
    $[6] = handleSelectIDE;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  let t5;
  if ($[8] !== options || $[9] !== selectedValue || $[10] !== t4) {
    t5 = /* @__PURE__ */ react_default.createElement(Select, { defaultFocusValue: selectedValue, options, onChange: t4 });
    $[8] = options;
    $[9] = selectedValue;
    $[10] = t4;
    $[11] = t5;
  } else {
    t5 = $[11];
  }
  let t6;
  if ($[12] !== handleCancel || $[13] !== t5) {
    t6 = /* @__PURE__ */ react_default.createElement(Dialog, { title: "Select IDE to install extension", onCancel: handleCancel, color: "ide" }, t5);
    $[12] = handleCancel;
    $[13] = t5;
    $[14] = t6;
  } else {
    t6 = $[14];
  }
  return t6;
}
function _temp5(ide) {
  return {
    label: toIDEDisplayName(ide),
    value: ide
  };
}
function InstallOnMount(t0) {
  const $ = c(4);
  const {
    ide,
    onInstall
  } = t0;
  let t1;
  let t2;
  if ($[0] !== ide || $[1] !== onInstall) {
    t1 = () => {
      onInstall(ide);
    };
    t2 = [ide, onInstall];
    $[0] = ide;
    $[1] = onInstall;
    $[2] = t1;
    $[3] = t2;
  } else {
    t1 = $[2];
    t2 = $[3];
  }
  useEffect(t1, t2);
  return null;
}
async function call(onDone, context, args) {
  logEvent("tengu_ext_ide_command", {});
  const {
    options: {
      dynamicMcpConfig
    },
    onChangeDynamicMcpConfig
  } = context;
  if (args?.trim() === "open") {
    const worktreeSession = getCurrentWorktreeSession();
    const targetPath = worktreeSession ? worktreeSession.worktreePath : getCwd();
    const detectedIDEs2 = await detectIDEs(true);
    const availableIDEs2 = detectedIDEs2.filter((ide) => ide.isValid);
    if (availableIDEs2.length === 0) {
      onDone("No IDEs with Blaude extension detected.");
      return null;
    }
    return /* @__PURE__ */ react_default.createElement(IDEOpenSelection, { availableIDEs: availableIDEs2, onSelectIDE: async (selectedIDE) => {
      if (!selectedIDE) {
        onDone("No IDE selected.");
        return;
      }
      if (selectedIDE.name.toLowerCase().includes("vscode") || selectedIDE.name.toLowerCase().includes("cursor") || selectedIDE.name.toLowerCase().includes("windsurf")) {
        const {
          code
        } = await execFileNoThrow("code", [targetPath]);
        if (code === 0) {
          onDone(`Opened ${worktreeSession ? "worktree" : "project"} in ${source_default.bold(selectedIDE.name)}`);
        } else {
          onDone(`Failed to open in ${selectedIDE.name}. Try opening manually: ${targetPath}`);
        }
      } else if (isSupportedJetBrainsTerminal()) {
        onDone(`Please open the ${worktreeSession ? "worktree" : "project"} manually in ${source_default.bold(selectedIDE.name)}: ${targetPath}`);
      } else {
        onDone(`Please open the ${worktreeSession ? "worktree" : "project"} manually in ${source_default.bold(selectedIDE.name)}: ${targetPath}`);
      }
    }, onDone: () => {
      onDone("Exited without opening IDE", {
        display: "system"
      });
    } });
  }
  const detectedIDEs = await detectIDEs(true);
  if (detectedIDEs.length === 0 && context.onInstallIDEExtension && !isSupportedTerminal()) {
    const runningIDEs = await detectRunningIDEs();
    const onInstall = (ide) => {
      if (context.onInstallIDEExtension) {
        context.onInstallIDEExtension(ide);
        if (isJetBrainsIde(ide)) {
          onDone(`Installed plugin to ${source_default.bold(toIDEDisplayName(ide))}
Please ${source_default.bold("restart your IDE")} completely for it to take effect`);
        } else {
          onDone(`Installed extension to ${source_default.bold(toIDEDisplayName(ide))}`);
        }
      }
    };
    if (runningIDEs.length > 1) {
      return /* @__PURE__ */ react_default.createElement(RunningIDESelector, { runningIDEs, onSelectIDE: onInstall, onDone: () => {
        onDone("No IDE selected.", {
          display: "system"
        });
      } });
    } else if (runningIDEs.length === 1) {
      return /* @__PURE__ */ react_default.createElement(InstallOnMount, { ide: runningIDEs[0], onInstall });
    }
  }
  const availableIDEs = detectedIDEs.filter((ide) => ide.isValid);
  const unavailableIDEs = detectedIDEs.filter((ide) => !ide.isValid);
  const currentIDE = await findCurrentIDE(availableIDEs, dynamicMcpConfig);
  return /* @__PURE__ */ react_default.createElement(IDECommandFlow, { availableIDEs, unavailableIDEs, currentIDE, dynamicMcpConfig, onChangeDynamicMcpConfig, onDone });
}
function IDECommandFlow({
  availableIDEs,
  unavailableIDEs,
  currentIDE,
  dynamicMcpConfig,
  onChangeDynamicMcpConfig,
  onDone
}) {
  const [connectingIDE, setConnectingIDE] = useState(null);
  const ideClient = useAppState((s) => s.mcp.clients.find((c2) => c2.name === "ide"));
  const setAppState = useSetAppState();
  const isFirstCheckRef = useRef(true);
  useEffect(() => {
    if (!connectingIDE) return;
    if (isFirstCheckRef.current) {
      isFirstCheckRef.current = false;
      return;
    }
    if (!ideClient || ideClient.type === "pending") return;
    if (ideClient.type === "connected") {
      onDone(`Connected to ${connectingIDE.name}.`);
    } else if (ideClient.type === "failed") {
      onDone(`Failed to connect to ${connectingIDE.name}.`);
    }
  }, [ideClient, connectingIDE, onDone]);
  useEffect(() => {
    if (!connectingIDE) return;
    const timer = setTimeout(onDone, IDE_CONNECTION_TIMEOUT_MS, `Connection to ${connectingIDE.name} timed out.`);
    return () => clearTimeout(timer);
  }, [connectingIDE, onDone]);
  const handleSelectIDE = useCallback((selectedIDE) => {
    if (!onChangeDynamicMcpConfig) {
      onDone("Error connecting to IDE.");
      return;
    }
    const newConfig = {
      ...dynamicMcpConfig || {}
    };
    if (currentIDE) {
      delete newConfig.ide;
    }
    if (!selectedIDE) {
      if (ideClient && ideClient.type === "connected" && currentIDE) {
        ideClient.client.onclose = () => {
        };
        void clearServerCache("ide", ideClient.config);
        setAppState((prev) => ({
          ...prev,
          mcp: {
            ...prev.mcp,
            clients: prev.mcp.clients.filter((c_0) => c_0.name !== "ide"),
            tools: prev.mcp.tools.filter((t) => !t.name?.startsWith("mcp__ide__")),
            commands: prev.mcp.commands.filter((c_1) => !c_1.name?.startsWith("mcp__ide__"))
          }
        }));
      }
      onChangeDynamicMcpConfig(newConfig);
      onDone(currentIDE ? `Disconnected from ${currentIDE.name}.` : "No IDE selected.");
      return;
    }
    const url = selectedIDE.url;
    newConfig.ide = {
      type: url.startsWith("ws:") ? "ws-ide" : "sse-ide",
      url,
      ideName: selectedIDE.name,
      authToken: selectedIDE.authToken,
      ideRunningInWindows: selectedIDE.ideRunningInWindows,
      scope: "dynamic"
    };
    isFirstCheckRef.current = true;
    setConnectingIDE(selectedIDE);
    onChangeDynamicMcpConfig(newConfig);
  }, [dynamicMcpConfig, currentIDE, ideClient, setAppState, onChangeDynamicMcpConfig, onDone]);
  if (connectingIDE) {
    return /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Connecting to ", connectingIDE.name, "\u2026");
  }
  return /* @__PURE__ */ react_default.createElement(IDEScreen, { availableIDEs, unavailableIDEs, selectedIDE: currentIDE, onClose: () => onDone("IDE selection cancelled", {
    display: "system"
  }), onSelect: handleSelectIDE });
}
function formatWorkspaceFolders(folders, maxLength = 100) {
  if (folders.length === 0) return "";
  const cwd = getCwd();
  const foldersToShow = folders.slice(0, 2);
  const hasMore = folders.length > 2;
  const ellipsisOverhead = hasMore ? 3 : 0;
  const separatorOverhead = (foldersToShow.length - 1) * 2;
  const availableLength = maxLength - separatorOverhead - ellipsisOverhead;
  const maxLengthPerPath = Math.floor(availableLength / foldersToShow.length);
  const cwdNFC = cwd.normalize("NFC");
  const formattedFolders = foldersToShow.map((folder) => {
    const folderNFC = folder.normalize("NFC");
    if (folderNFC.startsWith(cwdNFC + path.sep)) {
      folder = folderNFC.slice(cwdNFC.length + 1);
    }
    if (folder.length <= maxLengthPerPath) {
      return folder;
    }
    return "\u2026" + folder.slice(-(maxLengthPerPath - 1));
  });
  let result = formattedFolders.join(", ");
  if (hasMore) {
    result += ", \u2026";
  }
  return result;
}
var IDE_CONNECTION_TIMEOUT_MS;
var init_ide2 = __esm({
  "src/commands/ide/ide.tsx"() {
    init_react_compiler_runtime();
    init_source();
    init_react();
    init_analytics();
    init_CustomSelect();
    init_Dialog();
    init_IdeAutoConnectDialog();
    init_ink();
    init_client();
    init_AppState();
    init_cwd();
    init_execFileNoThrow();
    init_ide();
    init_worktree();
    IDE_CONNECTION_TIMEOUT_MS = 35e3;
  }
});
init_ide2();
export {
  call,
  formatWorkspaceFolders
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvSWRlQXV0b0Nvbm5lY3REaWFsb2cudHN4IiwgIi4uLy4uL3NyYy9jb21tYW5kcy9pZGUvaWRlLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vaW5rLmpzJ1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnLCBzYXZlR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vdXRpbHMvY29uZmlnLmpzJ1xuaW1wb3J0IHsgaXNTdXBwb3J0ZWRUZXJtaW5hbCB9IGZyb20gJy4uL3V0aWxzL2lkZS5qcydcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJy4vQ3VzdG9tU2VsZWN0L2luZGV4LmpzJ1xuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi9kZXNpZ24tc3lzdGVtL0RpYWxvZy5qcydcblxudHlwZSBJZGVBdXRvQ29ubmVjdERpYWxvZ1Byb3BzID0ge1xuICBvbkNvbXBsZXRlOiAoKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJZGVBdXRvQ29ubmVjdERpYWxvZyh7XG4gIG9uQ29tcGxldGUsXG59OiBJZGVBdXRvQ29ubmVjdERpYWxvZ1Byb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gdXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGF1dG9Db25uZWN0ID0gdmFsdWUgPT09ICd5ZXMnXG5cbiAgICAgIC8vIFNhdmUgdGhlIHByZWZlcmVuY2UgYW5kIG1hcmsgZGlhbG9nIGFzIHNob3duXG4gICAgICBzYXZlR2xvYmFsQ29uZmlnKGN1cnJlbnQgPT4gKHtcbiAgICAgICAgLi4uY3VycmVudCxcbiAgICAgICAgYXV0b0Nvbm5lY3RJZGU6IGF1dG9Db25uZWN0LFxuICAgICAgICBoYXNJZGVBdXRvQ29ubmVjdERpYWxvZ0JlZW5TaG93bjogdHJ1ZSxcbiAgICAgIH0pKVxuXG4gICAgICBvbkNvbXBsZXRlKClcbiAgICB9LFxuICAgIFtvbkNvbXBsZXRlXSxcbiAgKVxuXG4gIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAgeyBsYWJlbDogJ1llcycsIHZhbHVlOiAneWVzJyB9LFxuICAgIHsgbGFiZWw6ICdObycsIHZhbHVlOiAnbm8nIH0sXG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2dcbiAgICAgIHRpdGxlPVwiRG8geW91IHdpc2ggdG8gZW5hYmxlIGF1dG8tY29ubmVjdCB0byBJREU/XCJcbiAgICAgIGNvbG9yPVwiaWRlXCJcbiAgICAgIG9uQ2FuY2VsPXtvbkNvbXBsZXRlfVxuICAgID5cbiAgICAgIDxTZWxlY3Qgb3B0aW9ucz17b3B0aW9uc30gb25DaGFuZ2U9e2hhbmRsZVNlbGVjdH0gZGVmYXVsdFZhbHVlPXsneWVzJ30gLz5cbiAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICBZb3UgY2FuIGFsc28gY29uZmlndXJlIHRoaXMgaW4gL2NvbmZpZyBvciB3aXRoIHRoZSAtLWlkZSBmbGFnXG4gICAgICA8L1RleHQ+XG4gICAgPC9EaWFsb2c+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZFNob3dBdXRvQ29ubmVjdERpYWxvZygpOiBib29sZWFuIHtcbiAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKClcbiAgcmV0dXJuIChcbiAgICAhaXNTdXBwb3J0ZWRUZXJtaW5hbCgpICYmXG4gICAgY29uZmlnLmF1dG9Db25uZWN0SWRlICE9PSB0cnVlICYmXG4gICAgY29uZmlnLmhhc0lkZUF1dG9Db25uZWN0RGlhbG9nQmVlblNob3duICE9PSB0cnVlXG4gIClcbn1cblxudHlwZSBJZGVEaXNhYmxlQXV0b0Nvbm5lY3REaWFsb2dQcm9wcyA9IHtcbiAgb25Db21wbGV0ZTogKGRpc2FibGVBdXRvQ29ubmVjdDogYm9vbGVhbikgPT4gdm9pZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gSWRlRGlzYWJsZUF1dG9Db25uZWN0RGlhbG9nKHtcbiAgb25Db21wbGV0ZSxcbn06IElkZURpc2FibGVBdXRvQ29ubmVjdERpYWxvZ1Byb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gdXNlQ2FsbGJhY2soXG4gICAgKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGRpc2FibGVBdXRvQ29ubmVjdCA9IHZhbHVlID09PSAneWVzJ1xuXG4gICAgICBpZiAoZGlzYWJsZUF1dG9Db25uZWN0KSB7XG4gICAgICAgIHNhdmVHbG9iYWxDb25maWcoY3VycmVudCA9PiAoe1xuICAgICAgICAgIC4uLmN1cnJlbnQsXG4gICAgICAgICAgYXV0b0Nvbm5lY3RJZGU6IGZhbHNlLFxuICAgICAgICB9KSlcbiAgICAgIH1cblxuICAgICAgb25Db21wbGV0ZShkaXNhYmxlQXV0b0Nvbm5lY3QpXG4gICAgfSxcbiAgICBbb25Db21wbGV0ZV0sXG4gIClcblxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgb25Db21wbGV0ZShmYWxzZSlcbiAgfSwgW29uQ29tcGxldGVdKVxuXG4gIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAgeyBsYWJlbDogJ05vJywgdmFsdWU6ICdubycgfSxcbiAgICB7IGxhYmVsOiAnWWVzJywgdmFsdWU6ICd5ZXMnIH0sXG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2dcbiAgICAgIHRpdGxlPVwiRG8geW91IHdpc2ggdG8gZGlzYWJsZSBhdXRvLWNvbm5lY3QgdG8gSURFP1wiXG4gICAgICBzdWJ0aXRsZT1cIllvdSBjYW4gYWxzbyBjb25maWd1cmUgdGhpcyBpbiAvY29uZmlnXCJcbiAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9XG4gICAgICBjb2xvcj1cImlkZVwiXG4gICAgPlxuICAgICAgPFNlbGVjdCBvcHRpb25zPXtvcHRpb25zfSBvbkNoYW5nZT17aGFuZGxlU2VsZWN0fSBkZWZhdWx0VmFsdWU9eydubyd9IC8+XG4gICAgPC9EaWFsb2c+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZFNob3dEaXNhYmxlQXV0b0Nvbm5lY3REaWFsb2coKTogYm9vbGVhbiB7XG4gIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpXG4gIHJldHVybiAhaXNTdXBwb3J0ZWRUZXJtaW5hbCgpICYmIGNvbmZpZy5hdXRvQ29ubmVjdElkZSA9PT0gdHJ1ZVxufVxuIiwgImltcG9ydCBjaGFsayBmcm9tICdjaGFsaydcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBsb2dFdmVudCB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9hbmFseXRpY3MvaW5kZXguanMnXG5pbXBvcnQgdHlwZSB7XG4gIENvbW1hbmRSZXN1bHREaXNwbGF5LFxuICBMb2NhbEpTWENvbW1hbmRDb250ZXh0LFxufSBmcm9tICcuLi8uLi9jb21tYW5kcy5qcydcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ3VzdG9tU2VsZWN0L2luZGV4LmpzJ1xuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kZXNpZ24tc3lzdGVtL0RpYWxvZy5qcydcbmltcG9ydCB7XG4gIElkZUF1dG9Db25uZWN0RGlhbG9nLFxuICBJZGVEaXNhYmxlQXV0b0Nvbm5lY3REaWFsb2csXG4gIHNob3VsZFNob3dBdXRvQ29ubmVjdERpYWxvZyxcbiAgc2hvdWxkU2hvd0Rpc2FibGVBdXRvQ29ubmVjdERpYWxvZyxcbn0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JZGVBdXRvQ29ubmVjdERpYWxvZy5qcydcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7IGNsZWFyU2VydmVyQ2FjaGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tY3AvY2xpZW50LmpzJ1xuaW1wb3J0IHR5cGUgeyBTY29wZWRNY3BTZXJ2ZXJDb25maWcgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tY3AvdHlwZXMuanMnXG5pbXBvcnQgeyB1c2VBcHBTdGF0ZSwgdXNlU2V0QXBwU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9BcHBTdGF0ZS5qcydcbmltcG9ydCB7IGdldEN3ZCB9IGZyb20gJy4uLy4uL3V0aWxzL2N3ZC5qcydcbmltcG9ydCB7IGV4ZWNGaWxlTm9UaHJvdyB9IGZyb20gJy4uLy4uL3V0aWxzL2V4ZWNGaWxlTm9UaHJvdy5qcydcbmltcG9ydCB7XG4gIHR5cGUgRGV0ZWN0ZWRJREVJbmZvLFxuICBkZXRlY3RJREVzLFxuICBkZXRlY3RSdW5uaW5nSURFcyxcbiAgdHlwZSBJZGVUeXBlLFxuICBpc0pldEJyYWluc0lkZSxcbiAgaXNTdXBwb3J0ZWRKZXRCcmFpbnNUZXJtaW5hbCxcbiAgaXNTdXBwb3J0ZWRUZXJtaW5hbCxcbiAgdG9JREVEaXNwbGF5TmFtZSxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvaWRlLmpzJ1xuaW1wb3J0IHsgZ2V0Q3VycmVudFdvcmt0cmVlU2Vzc2lvbiB9IGZyb20gJy4uLy4uL3V0aWxzL3dvcmt0cmVlLmpzJ1xuXG50eXBlIElERVNjcmVlblByb3BzID0ge1xuICBhdmFpbGFibGVJREVzOiBEZXRlY3RlZElERUluZm9bXVxuICB1bmF2YWlsYWJsZUlERXM6IERldGVjdGVkSURFSW5mb1tdXG4gIHNlbGVjdGVkSURFPzogRGV0ZWN0ZWRJREVJbmZvIHwgbnVsbFxuICBvbkNsb3NlOiAoKSA9PiB2b2lkXG4gIG9uU2VsZWN0OiAoaWRlPzogRGV0ZWN0ZWRJREVJbmZvKSA9PiB2b2lkXG59XG5cbmZ1bmN0aW9uIElERVNjcmVlbih7XG4gIGF2YWlsYWJsZUlERXMsXG4gIHVuYXZhaWxhYmxlSURFcyxcbiAgc2VsZWN0ZWRJREUsXG4gIG9uQ2xvc2UsXG4gIG9uU2VsZWN0LFxufTogSURFU2NyZWVuUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBbc2VsZWN0ZWRWYWx1ZSwgc2V0U2VsZWN0ZWRWYWx1ZV0gPSB1c2VTdGF0ZShcbiAgICBzZWxlY3RlZElERT8ucG9ydD8udG9TdHJpbmcoKSA/PyAnTm9uZScsXG4gIClcbiAgY29uc3QgW3Nob3dBdXRvQ29ubmVjdERpYWxvZywgc2V0U2hvd0F1dG9Db25uZWN0RGlhbG9nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbc2hvd0Rpc2FibGVBdXRvQ29ubmVjdERpYWxvZywgc2V0U2hvd0Rpc2FibGVBdXRvQ29ubmVjdERpYWxvZ10gPVxuICAgIHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdElERSA9IHVzZUNhbGxiYWNrKFxuICAgICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAodmFsdWUgIT09ICdOb25lJyAmJiBzaG91bGRTaG93QXV0b0Nvbm5lY3REaWFsb2coKSkge1xuICAgICAgICBzZXRTaG93QXV0b0Nvbm5lY3REaWFsb2codHJ1ZSlcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdOb25lJyAmJiBzaG91bGRTaG93RGlzYWJsZUF1dG9Db25uZWN0RGlhbG9nKCkpIHtcbiAgICAgICAgc2V0U2hvd0Rpc2FibGVBdXRvQ29ubmVjdERpYWxvZyh0cnVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25TZWxlY3QoYXZhaWxhYmxlSURFcy5maW5kKGlkZSA9PiBpZGUucG9ydCA9PT0gcGFyc2VJbnQodmFsdWUpKSlcbiAgICAgIH1cbiAgICB9LFxuICAgIFthdmFpbGFibGVJREVzLCBvblNlbGVjdF0sXG4gIClcblxuICBjb25zdCBpZGVDb3VudHMgPSBhdmFpbGFibGVJREVzLnJlZHVjZTxSZWNvcmQ8c3RyaW5nLCBudW1iZXI+PigoYWNjLCBpZGUpID0+IHtcbiAgICBhY2NbaWRlLm5hbWVdID0gKGFjY1tpZGUubmFtZV0gfHwgMCkgKyAxXG4gICAgcmV0dXJuIGFjY1xuICB9LCB7fSlcblxuICBjb25zdCBvcHRpb25zID0gYXZhaWxhYmxlSURFc1xuICAgIC5tYXAoaWRlID0+IHtcbiAgICAgIGNvbnN0IGhhc011bHRpcGxlSW5zdGFuY2VzID0gKGlkZUNvdW50c1tpZGUubmFtZV0gfHwgMCkgPiAxXG4gICAgICBjb25zdCBzaG93V29ya3NwYWNlID1cbiAgICAgICAgaGFzTXVsdGlwbGVJbnN0YW5jZXMgJiYgaWRlLndvcmtzcGFjZUZvbGRlcnMubGVuZ3RoID4gMFxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBsYWJlbDogaWRlLm5hbWUsXG4gICAgICAgIHZhbHVlOiBpZGUucG9ydC50b1N0cmluZygpLFxuICAgICAgICBkZXNjcmlwdGlvbjogc2hvd1dvcmtzcGFjZVxuICAgICAgICAgID8gZm9ybWF0V29ya3NwYWNlRm9sZGVycyhpZGUud29ya3NwYWNlRm9sZGVycylcbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jb25jYXQoW3sgbGFiZWw6ICdOb25lJywgdmFsdWU6ICdOb25lJywgZGVzY3JpcHRpb246IHVuZGVmaW5lZCB9XSlcblxuICBpZiAoc2hvd0F1dG9Db25uZWN0RGlhbG9nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxJZGVBdXRvQ29ubmVjdERpYWxvZyBvbkNvbXBsZXRlPXsoKSA9PiBoYW5kbGVTZWxlY3RJREUoc2VsZWN0ZWRWYWx1ZSl9IC8+XG4gICAgKVxuICB9XG5cbiAgaWYgKHNob3dEaXNhYmxlQXV0b0Nvbm5lY3REaWFsb2cpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPElkZURpc2FibGVBdXRvQ29ubmVjdERpYWxvZ1xuICAgICAgICBvbkNvbXBsZXRlPXsoKSA9PiB7XG4gICAgICAgICAgLy8gQWx3YXlzIGRpc2Nvbm5lY3Qgd2hlbiB1c2VyIHNlbGVjdHMgXCJOb25lXCIsIHJlZ2FyZGxlc3Mgb2YgdGhlaXJcbiAgICAgICAgICAvLyBjaG9pY2UgYWJvdXQgZGlzYWJsaW5nIGF1dG8tY29ubmVjdFxuICAgICAgICAgIG9uU2VsZWN0KHVuZGVmaW5lZClcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nXG4gICAgICB0aXRsZT1cIlNlbGVjdCBJREVcIlxuICAgICAgc3VidGl0bGU9XCJDb25uZWN0IHRvIGFuIElERSBmb3IgaW50ZWdyYXRlZCBkZXZlbG9wbWVudCBmZWF0dXJlcy5cIlxuICAgICAgb25DYW5jZWw9e29uQ2xvc2V9XG4gICAgICBjb2xvcj1cImlkZVwiXG4gICAgPlxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIHthdmFpbGFibGVJREVzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICB7aXNTdXBwb3J0ZWRKZXRCcmFpbnNUZXJtaW5hbCgpXG4gICAgICAgICAgICAgID8gJ05vIGF2YWlsYWJsZSBJREVzIGRldGVjdGVkLiBQbGVhc2UgaW5zdGFsbCB0aGUgcGx1Z2luIGFuZCByZXN0YXJ0IHlvdXIgSURFOlxcbicgK1xuICAgICAgICAgICAgICAgICdodHRwczovL2RvY3MuY2xhdWRlLmNvbS9zL2NsYXVkZS1jb2RlLWpldGJyYWlucydcbiAgICAgICAgICAgICAgOiAnTm8gYXZhaWxhYmxlIElERXMgZGV0ZWN0ZWQuIE1ha2Ugc3VyZSB5b3VyIElERSBoYXMgdGhlIENsYXVkZSBDb2RlIGV4dGVuc2lvbiBvciBwbHVnaW4gaW5zdGFsbGVkIGFuZCBpcyBydW5uaW5nLid9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICApfVxuXG4gICAgICAgIHthdmFpbGFibGVJREVzLmxlbmd0aCAhPT0gMCAmJiAoXG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzZWxlY3RlZFZhbHVlfVxuICAgICAgICAgICAgZGVmYXVsdEZvY3VzVmFsdWU9e3NlbGVjdGVkVmFsdWV9XG4gICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHtcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRWYWx1ZSh2YWx1ZSlcbiAgICAgICAgICAgICAgaGFuZGxlU2VsZWN0SURFKHZhbHVlKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7YXZhaWxhYmxlSURFcy5sZW5ndGggIT09IDAgJiZcbiAgICAgICAgICBhdmFpbGFibGVJREVzLnNvbWUoXG4gICAgICAgICAgICBpZGUgPT4gaWRlLm5hbWUgPT09ICdWUyBDb2RlJyB8fCBpZGUubmFtZSA9PT0gJ1Zpc3VhbCBTdHVkaW8gQ29kZScsXG4gICAgICAgICAgKSAmJiAoXG4gICAgICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2FybmluZ1wiPlxuICAgICAgICAgICAgICAgIE5vdGU6IE9ubHkgb25lIENsYXVkZSBDb2RlIGluc3RhbmNlIGNhbiBiZSBjb25uZWN0ZWQgdG8gVlMgQ29kZVxuICAgICAgICAgICAgICAgIGF0IGEgdGltZS5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKX1cbiAgICAgICAge2F2YWlsYWJsZUlERXMubGVuZ3RoICE9PSAwICYmICFpc1N1cHBvcnRlZFRlcm1pbmFsKCkgJiYgKFxuICAgICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICBUaXA6IFlvdSBjYW4gZW5hYmxlIGF1dG8tY29ubmVjdCB0byBJREUgaW4gL2NvbmZpZyBvciB3aXRoIHRoZVxuICAgICAgICAgICAgICAtLWlkZSBmbGFnXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG5cbiAgICAgICAge3VuYXZhaWxhYmxlSURFcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0gZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgIEZvdW5kIHt1bmF2YWlsYWJsZUlERXMubGVuZ3RofSBvdGhlciBydW5uaW5nIElERShzKS4gSG93ZXZlcixcbiAgICAgICAgICAgICAgdGhlaXIgd29ya3NwYWNlL3Byb2plY3QgZGlyZWN0b3JpZXMgZG8gbm90IG1hdGNoIHRoZSBjdXJyZW50IGN3ZC5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgIHt1bmF2YWlsYWJsZUlERXMubWFwKChpZGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPEJveCBrZXk9e2luZGV4fSBwYWRkaW5nTGVmdD17M30+XG4gICAgICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgICAgICAg4oCiIHtpZGUubmFtZX06IHtmb3JtYXRXb3Jrc3BhY2VGb2xkZXJzKGlkZS53b3Jrc3BhY2VGb2xkZXJzKX1cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIDwvRGlhbG9nPlxuICApXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZpbmRDdXJyZW50SURFKFxuICBhdmFpbGFibGVJREVzOiBEZXRlY3RlZElERUluZm9bXSxcbiAgZHluYW1pY01jcENvbmZpZz86IFJlY29yZDxzdHJpbmcsIFNjb3BlZE1jcFNlcnZlckNvbmZpZz4sXG4pOiBQcm9taXNlPERldGVjdGVkSURFSW5mbyB8IG51bGw+IHtcbiAgY29uc3QgY3VycmVudENvbmZpZyA9IGR5bmFtaWNNY3BDb25maWc/LmlkZVxuICBpZiAoXG4gICAgIWN1cnJlbnRDb25maWcgfHxcbiAgICAoY3VycmVudENvbmZpZy50eXBlICE9PSAnc3NlLWlkZScgJiYgY3VycmVudENvbmZpZy50eXBlICE9PSAnd3MtaWRlJylcbiAgKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBmb3IgKGNvbnN0IGlkZSBvZiBhdmFpbGFibGVJREVzKSB7XG4gICAgaWYgKGlkZS51cmwgPT09IGN1cnJlbnRDb25maWcudXJsKSB7XG4gICAgICByZXR1cm4gaWRlXG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbnR5cGUgSURFT3BlblNlbGVjdGlvblByb3BzID0ge1xuICBhdmFpbGFibGVJREVzOiBEZXRlY3RlZElERUluZm9bXVxuICBvblNlbGVjdElERTogKGlkZT86IERldGVjdGVkSURFSW5mbykgPT4gdm9pZFxuICBvbkRvbmU6IChcbiAgICByZXN1bHQ/OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHsgZGlzcGxheT86IENvbW1hbmRSZXN1bHREaXNwbGF5IH0sXG4gICkgPT4gdm9pZFxufVxuXG5mdW5jdGlvbiBJREVPcGVuU2VsZWN0aW9uKHtcbiAgYXZhaWxhYmxlSURFcyxcbiAgb25TZWxlY3RJREUsXG4gIG9uRG9uZSxcbn06IElERU9wZW5TZWxlY3Rpb25Qcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IFtzZWxlY3RlZFZhbHVlLCBzZXRTZWxlY3RlZFZhbHVlXSA9IHVzZVN0YXRlKFxuICAgIGF2YWlsYWJsZUlERXNbMF0/LnBvcnQ/LnRvU3RyaW5nKCkgPz8gJycsXG4gIClcblxuICBjb25zdCBoYW5kbGVTZWxlY3RJREUgPSB1c2VDYWxsYmFjayhcbiAgICAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRJREUgPSBhdmFpbGFibGVJREVzLmZpbmQoXG4gICAgICAgIGlkZSA9PiBpZGUucG9ydCA9PT0gcGFyc2VJbnQodmFsdWUpLFxuICAgICAgKVxuICAgICAgb25TZWxlY3RJREUoc2VsZWN0ZWRJREUpXG4gICAgfSxcbiAgICBbYXZhaWxhYmxlSURFcywgb25TZWxlY3RJREVdLFxuICApXG5cbiAgY29uc3Qgb3B0aW9ucyA9IGF2YWlsYWJsZUlERXMubWFwKGlkZSA9PiAoe1xuICAgIGxhYmVsOiBpZGUubmFtZSxcbiAgICB2YWx1ZTogaWRlLnBvcnQudG9TdHJpbmcoKSxcbiAgfSkpXG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2FuY2VsKCk6IHZvaWQge1xuICAgIG9uRG9uZSgnSURFIHNlbGVjdGlvbiBjYW5jZWxsZWQnLCB7IGRpc3BsYXk6ICdzeXN0ZW0nIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2dcbiAgICAgIHRpdGxlPVwiU2VsZWN0IGFuIElERSB0byBvcGVuIHRoZSBwcm9qZWN0XCJcbiAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9XG4gICAgICBjb2xvcj1cImlkZVwiXG4gICAgPlxuICAgICAgPFNlbGVjdFxuICAgICAgICBkZWZhdWx0VmFsdWU9e3NlbGVjdGVkVmFsdWV9XG4gICAgICAgIGRlZmF1bHRGb2N1c1ZhbHVlPXtzZWxlY3RlZFZhbHVlfVxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4ge1xuICAgICAgICAgIHNldFNlbGVjdGVkVmFsdWUodmFsdWUpXG4gICAgICAgICAgaGFuZGxlU2VsZWN0SURFKHZhbHVlKVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L0RpYWxvZz5cbiAgKVxufVxuXG5mdW5jdGlvbiBSdW5uaW5nSURFU2VsZWN0b3Ioe1xuICBydW5uaW5nSURFcyxcbiAgb25TZWxlY3RJREUsXG4gIG9uRG9uZSxcbn06IHtcbiAgcnVubmluZ0lERXM6IElkZVR5cGVbXVxuICBvblNlbGVjdElERTogKGlkZTogSWRlVHlwZSkgPT4gdm9pZFxuICBvbkRvbmU6IChcbiAgICByZXN1bHQ/OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHsgZGlzcGxheT86IENvbW1hbmRSZXN1bHREaXNwbGF5IH0sXG4gICkgPT4gdm9pZFxufSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IFtzZWxlY3RlZFZhbHVlLCBzZXRTZWxlY3RlZFZhbHVlXSA9IHVzZVN0YXRlKHJ1bm5pbmdJREVzWzBdID8/ICcnKVxuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdElERSA9IHVzZUNhbGxiYWNrKFxuICAgICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICBvblNlbGVjdElERSh2YWx1ZSBhcyBJZGVUeXBlKVxuICAgIH0sXG4gICAgW29uU2VsZWN0SURFXSxcbiAgKVxuXG4gIGNvbnN0IG9wdGlvbnMgPSBydW5uaW5nSURFcy5tYXAoaWRlID0+ICh7XG4gICAgbGFiZWw6IHRvSURFRGlzcGxheU5hbWUoaWRlKSxcbiAgICB2YWx1ZTogaWRlLFxuICB9KSlcblxuICBmdW5jdGlvbiBoYW5kbGVDYW5jZWwoKTogdm9pZCB7XG4gICAgb25Eb25lKCdJREUgc2VsZWN0aW9uIGNhbmNlbGxlZCcsIHsgZGlzcGxheTogJ3N5c3RlbScgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPERpYWxvZ1xuICAgICAgdGl0bGU9XCJTZWxlY3QgSURFIHRvIGluc3RhbGwgZXh0ZW5zaW9uXCJcbiAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9XG4gICAgICBjb2xvcj1cImlkZVwiXG4gICAgPlxuICAgICAgPFNlbGVjdFxuICAgICAgICBkZWZhdWx0Rm9jdXNWYWx1ZT17c2VsZWN0ZWRWYWx1ZX1cbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHtcbiAgICAgICAgICBzZXRTZWxlY3RlZFZhbHVlKHZhbHVlKVxuICAgICAgICAgIGhhbmRsZVNlbGVjdElERSh2YWx1ZSlcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9EaWFsb2c+XG4gIClcbn1cblxuZnVuY3Rpb24gSW5zdGFsbE9uTW91bnQoe1xuICBpZGUsXG4gIG9uSW5zdGFsbCxcbn06IHtcbiAgaWRlOiBJZGVUeXBlXG4gIG9uSW5zdGFsbDogKGlkZTogSWRlVHlwZSkgPT4gdm9pZFxufSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgb25JbnN0YWxsKGlkZSlcbiAgfSwgW2lkZSwgb25JbnN0YWxsXSlcbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGwoXG4gIG9uRG9uZTogKFxuICAgIHJlc3VsdD86IHN0cmluZyxcbiAgICBvcHRpb25zPzogeyBkaXNwbGF5PzogQ29tbWFuZFJlc3VsdERpc3BsYXkgfSxcbiAgKSA9PiB2b2lkLFxuICBjb250ZXh0OiBMb2NhbEpTWENvbW1hbmRDb250ZXh0LFxuICBhcmdzOiBzdHJpbmcsXG4pOiBQcm9taXNlPFJlYWN0LlJlYWN0Tm9kZSB8IG51bGw+IHtcbiAgbG9nRXZlbnQoJ3Rlbmd1X2V4dF9pZGVfY29tbWFuZCcsIHt9KVxuICBjb25zdCB7XG4gICAgb3B0aW9uczogeyBkeW5hbWljTWNwQ29uZmlnIH0sXG4gICAgb25DaGFuZ2VEeW5hbWljTWNwQ29uZmlnLFxuICB9ID0gY29udGV4dFxuXG4gIC8vIEhhbmRsZSAnb3BlbicgYXJndW1lbnRcbiAgaWYgKGFyZ3M/LnRyaW0oKSA9PT0gJ29wZW4nKSB7XG4gICAgY29uc3Qgd29ya3RyZWVTZXNzaW9uID0gZ2V0Q3VycmVudFdvcmt0cmVlU2Vzc2lvbigpXG4gICAgY29uc3QgdGFyZ2V0UGF0aCA9IHdvcmt0cmVlU2Vzc2lvbiA/IHdvcmt0cmVlU2Vzc2lvbi53b3JrdHJlZVBhdGggOiBnZXRDd2QoKVxuXG4gICAgLy8gRGV0ZWN0IGF2YWlsYWJsZSBJREVzXG4gICAgY29uc3QgZGV0ZWN0ZWRJREVzID0gYXdhaXQgZGV0ZWN0SURFcyh0cnVlKVxuICAgIGNvbnN0IGF2YWlsYWJsZUlERXMgPSBkZXRlY3RlZElERXMuZmlsdGVyKGlkZSA9PiBpZGUuaXNWYWxpZClcblxuICAgIGlmIChhdmFpbGFibGVJREVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgb25Eb25lKCdObyBJREVzIHdpdGggQ2xhdWRlIENvZGUgZXh0ZW5zaW9uIGRldGVjdGVkLicpXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8vIFJldHVybiBJREUgc2VsZWN0aW9uIGNvbXBvbmVudFxuICAgIHJldHVybiAoXG4gICAgICA8SURFT3BlblNlbGVjdGlvblxuICAgICAgICBhdmFpbGFibGVJREVzPXthdmFpbGFibGVJREVzfVxuICAgICAgICBvblNlbGVjdElERT17YXN5bmMgKHNlbGVjdGVkSURFPzogRGV0ZWN0ZWRJREVJbmZvKSA9PiB7XG4gICAgICAgICAgaWYgKCFzZWxlY3RlZElERSkge1xuICAgICAgICAgICAgb25Eb25lKCdObyBJREUgc2VsZWN0ZWQuJylcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFRyeSB0byBvcGVuIHRoZSBwcm9qZWN0IGluIHRoZSBzZWxlY3RlZCBJREVcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBzZWxlY3RlZElERS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3ZzY29kZScpIHx8XG4gICAgICAgICAgICBzZWxlY3RlZElERS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2N1cnNvcicpIHx8XG4gICAgICAgICAgICBzZWxlY3RlZElERS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3dpbmRzdXJmJylcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIFZTIENvZGUtYmFzZWQgSURFc1xuICAgICAgICAgICAgY29uc3QgeyBjb2RlIH0gPSBhd2FpdCBleGVjRmlsZU5vVGhyb3coJ2NvZGUnLCBbdGFyZ2V0UGF0aF0pXG4gICAgICAgICAgICBpZiAoY29kZSA9PT0gMCkge1xuICAgICAgICAgICAgICBvbkRvbmUoXG4gICAgICAgICAgICAgICAgYE9wZW5lZCAke3dvcmt0cmVlU2Vzc2lvbiA/ICd3b3JrdHJlZScgOiAncHJvamVjdCd9IGluICR7Y2hhbGsuYm9sZChzZWxlY3RlZElERS5uYW1lKX1gLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBvbkRvbmUoXG4gICAgICAgICAgICAgICAgYEZhaWxlZCB0byBvcGVuIGluICR7c2VsZWN0ZWRJREUubmFtZX0uIFRyeSBvcGVuaW5nIG1hbnVhbGx5OiAke3RhcmdldFBhdGh9YCxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNTdXBwb3J0ZWRKZXRCcmFpbnNUZXJtaW5hbCgpKSB7XG4gICAgICAgICAgICAvLyBKZXRCcmFpbnMgSURFcyAtIHRoZXkgdXN1YWxseSBvcGVuIHZpYSB0aGVpciBDTEkgdG9vbHNcbiAgICAgICAgICAgIG9uRG9uZShcbiAgICAgICAgICAgICAgYFBsZWFzZSBvcGVuIHRoZSAke3dvcmt0cmVlU2Vzc2lvbiA/ICd3b3JrdHJlZScgOiAncHJvamVjdCd9IG1hbnVhbGx5IGluICR7Y2hhbGsuYm9sZChzZWxlY3RlZElERS5uYW1lKX06ICR7dGFyZ2V0UGF0aH1gLFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvbkRvbmUoXG4gICAgICAgICAgICAgIGBQbGVhc2Ugb3BlbiB0aGUgJHt3b3JrdHJlZVNlc3Npb24gPyAnd29ya3RyZWUnIDogJ3Byb2plY3QnfSBtYW51YWxseSBpbiAke2NoYWxrLmJvbGQoc2VsZWN0ZWRJREUubmFtZSl9OiAke3RhcmdldFBhdGh9YCxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAgIG9uRG9uZT17KCkgPT4ge1xuICAgICAgICAgIG9uRG9uZSgnRXhpdGVkIHdpdGhvdXQgb3BlbmluZyBJREUnLCB7IGRpc3BsYXk6ICdzeXN0ZW0nIH0pXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIClcbiAgfVxuXG4gIGNvbnN0IGRldGVjdGVkSURFcyA9IGF3YWl0IGRldGVjdElERXModHJ1ZSlcblxuICAvLyBJZiBubyBJREVzIHdpdGggZXh0ZW5zaW9ucyBkZXRlY3RlZCwgY2hlY2sgZm9yIHJ1bm5pbmcgSURFcyBhbmQgb2ZmZXIgdG8gaW5zdGFsbFxuICBpZiAoXG4gICAgZGV0ZWN0ZWRJREVzLmxlbmd0aCA9PT0gMCAmJlxuICAgIGNvbnRleHQub25JbnN0YWxsSURFRXh0ZW5zaW9uICYmXG4gICAgIWlzU3VwcG9ydGVkVGVybWluYWwoKVxuICApIHtcbiAgICBjb25zdCBydW5uaW5nSURFcyA9IGF3YWl0IGRldGVjdFJ1bm5pbmdJREVzKClcblxuICAgIGNvbnN0IG9uSW5zdGFsbCA9IChpZGU6IElkZVR5cGUpID0+IHtcbiAgICAgIGlmIChjb250ZXh0Lm9uSW5zdGFsbElERUV4dGVuc2lvbikge1xuICAgICAgICBjb250ZXh0Lm9uSW5zdGFsbElERUV4dGVuc2lvbihpZGUpXG4gICAgICAgIC8vIFRoZSBjb21wbGV0aW9uIG1lc3NhZ2Ugd2lsbCBiZSBzaG93biBhZnRlciBpbnN0YWxsYXRpb25cbiAgICAgICAgaWYgKGlzSmV0QnJhaW5zSWRlKGlkZSkpIHtcbiAgICAgICAgICBvbkRvbmUoXG4gICAgICAgICAgICBgSW5zdGFsbGVkIHBsdWdpbiB0byAke2NoYWxrLmJvbGQodG9JREVEaXNwbGF5TmFtZShpZGUpKX1cXG5gICtcbiAgICAgICAgICAgICAgYFBsZWFzZSAke2NoYWxrLmJvbGQoJ3Jlc3RhcnQgeW91ciBJREUnKX0gY29tcGxldGVseSBmb3IgaXQgdG8gdGFrZSBlZmZlY3RgLFxuICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvbkRvbmUoYEluc3RhbGxlZCBleHRlbnNpb24gdG8gJHtjaGFsay5ib2xkKHRvSURFRGlzcGxheU5hbWUoaWRlKSl9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChydW5uaW5nSURFcy5sZW5ndGggPiAxKSB7XG4gICAgICAvLyBTaG93IHNlbGVjdG9yIHdoZW4gbXVsdGlwbGUgSURFcyBhcmUgcnVubmluZ1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFJ1bm5pbmdJREVTZWxlY3RvclxuICAgICAgICAgIHJ1bm5pbmdJREVzPXtydW5uaW5nSURFc31cbiAgICAgICAgICBvblNlbGVjdElERT17b25JbnN0YWxsfVxuICAgICAgICAgIG9uRG9uZT17KCkgPT4ge1xuICAgICAgICAgICAgb25Eb25lKCdObyBJREUgc2VsZWN0ZWQuJywgeyBkaXNwbGF5OiAnc3lzdGVtJyB9KVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSBlbHNlIGlmIChydW5uaW5nSURFcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiA8SW5zdGFsbE9uTW91bnQgaWRlPXtydW5uaW5nSURFc1swXSF9IG9uSW5zdGFsbD17b25JbnN0YWxsfSAvPlxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGF2YWlsYWJsZUlERXMgPSBkZXRlY3RlZElERXMuZmlsdGVyKGlkZSA9PiBpZGUuaXNWYWxpZClcbiAgY29uc3QgdW5hdmFpbGFibGVJREVzID0gZGV0ZWN0ZWRJREVzLmZpbHRlcihpZGUgPT4gIWlkZS5pc1ZhbGlkKVxuXG4gIGNvbnN0IGN1cnJlbnRJREUgPSBhd2FpdCBmaW5kQ3VycmVudElERShhdmFpbGFibGVJREVzLCBkeW5hbWljTWNwQ29uZmlnKVxuXG4gIHJldHVybiAoXG4gICAgPElERUNvbW1hbmRGbG93XG4gICAgICBhdmFpbGFibGVJREVzPXthdmFpbGFibGVJREVzfVxuICAgICAgdW5hdmFpbGFibGVJREVzPXt1bmF2YWlsYWJsZUlERXN9XG4gICAgICBjdXJyZW50SURFPXtjdXJyZW50SURFfVxuICAgICAgZHluYW1pY01jcENvbmZpZz17ZHluYW1pY01jcENvbmZpZ31cbiAgICAgIG9uQ2hhbmdlRHluYW1pY01jcENvbmZpZz17b25DaGFuZ2VEeW5hbWljTWNwQ29uZmlnfVxuICAgICAgb25Eb25lPXtvbkRvbmV9XG4gICAgLz5cbiAgKVxufVxuXG4vLyBDb25uZWN0aW9uIHRpbWVvdXQgc2xpZ2h0bHkgbG9uZ2VyIHRoYW4gdGhlIDMwcyBNQ1AgY29ubmVjdGlvbiB0aW1lb3V0XG5jb25zdCBJREVfQ09OTkVDVElPTl9USU1FT1VUX01TID0gMzUwMDBcblxudHlwZSBJREVDb21tYW5kRmxvd1Byb3BzID0ge1xuICBhdmFpbGFibGVJREVzOiBEZXRlY3RlZElERUluZm9bXVxuICB1bmF2YWlsYWJsZUlERXM6IERldGVjdGVkSURFSW5mb1tdXG4gIGN1cnJlbnRJREU6IERldGVjdGVkSURFSW5mbyB8IG51bGxcbiAgZHluYW1pY01jcENvbmZpZz86IFJlY29yZDxzdHJpbmcsIFNjb3BlZE1jcFNlcnZlckNvbmZpZz5cbiAgb25DaGFuZ2VEeW5hbWljTWNwQ29uZmlnPzogKFxuICAgIGNvbmZpZzogUmVjb3JkPHN0cmluZywgU2NvcGVkTWNwU2VydmVyQ29uZmlnPixcbiAgKSA9PiB2b2lkXG4gIG9uRG9uZTogKFxuICAgIHJlc3VsdD86IHN0cmluZyxcbiAgICBvcHRpb25zPzogeyBkaXNwbGF5PzogQ29tbWFuZFJlc3VsdERpc3BsYXkgfSxcbiAgKSA9PiB2b2lkXG59XG5cbmZ1bmN0aW9uIElERUNvbW1hbmRGbG93KHtcbiAgYXZhaWxhYmxlSURFcyxcbiAgdW5hdmFpbGFibGVJREVzLFxuICBjdXJyZW50SURFLFxuICBkeW5hbWljTWNwQ29uZmlnLFxuICBvbkNoYW5nZUR5bmFtaWNNY3BDb25maWcsXG4gIG9uRG9uZSxcbn06IElERUNvbW1hbmRGbG93UHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBbY29ubmVjdGluZ0lERSwgc2V0Q29ubmVjdGluZ0lERV0gPSB1c2VTdGF0ZTxEZXRlY3RlZElERUluZm8gfCBudWxsPihcbiAgICBudWxsLFxuICApXG4gIGNvbnN0IGlkZUNsaWVudCA9IHVzZUFwcFN0YXRlKHMgPT4gcy5tY3AuY2xpZW50cy5maW5kKGMgPT4gYy5uYW1lID09PSAnaWRlJykpXG4gIGNvbnN0IHNldEFwcFN0YXRlID0gdXNlU2V0QXBwU3RhdGUoKVxuICBjb25zdCBpc0ZpcnN0Q2hlY2tSZWYgPSB1c2VSZWYodHJ1ZSlcblxuICAvLyBXYXRjaCBmb3IgY29ubmVjdGlvbiByZXN1bHRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWNvbm5lY3RpbmdJREUpIHJldHVyblxuICAgIC8vIFNraXAgdGhlIGZpcnN0IGNoZWNrIOKAlCBpdCByZWZsZWN0cyBzdGFsZSBzdGF0ZSBmcm9tIGJlZm9yZSB0aGVcbiAgICAvLyBjb25maWcgY2hhbmdlIHdhcyBkaXNwYXRjaGVkXG4gICAgaWYgKGlzRmlyc3RDaGVja1JlZi5jdXJyZW50KSB7XG4gICAgICBpc0ZpcnN0Q2hlY2tSZWYuY3VycmVudCA9IGZhbHNlXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKCFpZGVDbGllbnQgfHwgaWRlQ2xpZW50LnR5cGUgPT09ICdwZW5kaW5nJykgcmV0dXJuXG4gICAgaWYgKGlkZUNsaWVudC50eXBlID09PSAnY29ubmVjdGVkJykge1xuICAgICAgb25Eb25lKGBDb25uZWN0ZWQgdG8gJHtjb25uZWN0aW5nSURFLm5hbWV9LmApXG4gICAgfSBlbHNlIGlmIChpZGVDbGllbnQudHlwZSA9PT0gJ2ZhaWxlZCcpIHtcbiAgICAgIG9uRG9uZShgRmFpbGVkIHRvIGNvbm5lY3QgdG8gJHtjb25uZWN0aW5nSURFLm5hbWV9LmApXG4gICAgfVxuICB9LCBbaWRlQ2xpZW50LCBjb25uZWN0aW5nSURFLCBvbkRvbmVdKVxuXG4gIC8vIFRpbWVvdXQgZmFsbGJhY2tcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWNvbm5lY3RpbmdJREUpIHJldHVyblxuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dChcbiAgICAgIG9uRG9uZSxcbiAgICAgIElERV9DT05ORUNUSU9OX1RJTUVPVVRfTVMsXG4gICAgICBgQ29ubmVjdGlvbiB0byAke2Nvbm5lY3RpbmdJREUubmFtZX0gdGltZWQgb3V0LmAsXG4gICAgKVxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpXG4gIH0sIFtjb25uZWN0aW5nSURFLCBvbkRvbmVdKVxuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdElERSA9IHVzZUNhbGxiYWNrKFxuICAgIChzZWxlY3RlZElERT86IERldGVjdGVkSURFSW5mbykgPT4ge1xuICAgICAgaWYgKCFvbkNoYW5nZUR5bmFtaWNNY3BDb25maWcpIHtcbiAgICAgICAgb25Eb25lKCdFcnJvciBjb25uZWN0aW5nIHRvIElERS4nKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IG5ld0NvbmZpZyA9IHsgLi4uKGR5bmFtaWNNY3BDb25maWcgfHwge30pIH1cbiAgICAgIGlmIChjdXJyZW50SURFKSB7XG4gICAgICAgIGRlbGV0ZSBuZXdDb25maWcuaWRlXG4gICAgICB9XG4gICAgICBpZiAoIXNlbGVjdGVkSURFKSB7XG4gICAgICAgIC8vIENsb3NlIHRoZSBNQ1AgdHJhbnNwb3J0IGFuZCByZW1vdmUgdGhlIGNsaWVudCBmcm9tIHN0YXRlXG4gICAgICAgIGlmIChpZGVDbGllbnQgJiYgaWRlQ2xpZW50LnR5cGUgPT09ICdjb25uZWN0ZWQnICYmIGN1cnJlbnRJREUpIHtcbiAgICAgICAgICAvLyBOdWxsIG91dCBvbmNsb3NlIHRvIHByZXZlbnQgYXV0by1yZWNvbm5lY3Rpb25cbiAgICAgICAgICBpZGVDbGllbnQuY2xpZW50Lm9uY2xvc2UgPSAoKSA9PiB7fVxuICAgICAgICAgIHZvaWQgY2xlYXJTZXJ2ZXJDYWNoZSgnaWRlJywgaWRlQ2xpZW50LmNvbmZpZylcbiAgICAgICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgbWNwOiB7XG4gICAgICAgICAgICAgIC4uLnByZXYubWNwLFxuICAgICAgICAgICAgICBjbGllbnRzOiBwcmV2Lm1jcC5jbGllbnRzLmZpbHRlcihjID0+IGMubmFtZSAhPT0gJ2lkZScpLFxuICAgICAgICAgICAgICB0b29sczogcHJldi5tY3AudG9vbHMuZmlsdGVyKFxuICAgICAgICAgICAgICAgIHQgPT4gIXQubmFtZT8uc3RhcnRzV2l0aCgnbWNwX19pZGVfXycpLFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBjb21tYW5kczogcHJldi5tY3AuY29tbWFuZHMuZmlsdGVyKFxuICAgICAgICAgICAgICAgIGMgPT4gIWMubmFtZT8uc3RhcnRzV2l0aCgnbWNwX19pZGVfXycpLFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSlcbiAgICAgICAgfVxuICAgICAgICBvbkNoYW5nZUR5bmFtaWNNY3BDb25maWcobmV3Q29uZmlnKVxuICAgICAgICBvbkRvbmUoXG4gICAgICAgICAgY3VycmVudElERVxuICAgICAgICAgICAgPyBgRGlzY29ubmVjdGVkIGZyb20gJHtjdXJyZW50SURFLm5hbWV9LmBcbiAgICAgICAgICAgIDogJ05vIElERSBzZWxlY3RlZC4nLFxuICAgICAgICApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3QgdXJsID0gc2VsZWN0ZWRJREUudXJsXG4gICAgICBuZXdDb25maWcuaWRlID0ge1xuICAgICAgICB0eXBlOiB1cmwuc3RhcnRzV2l0aCgnd3M6JykgPyAnd3MtaWRlJyA6ICdzc2UtaWRlJyxcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIGlkZU5hbWU6IHNlbGVjdGVkSURFLm5hbWUsXG4gICAgICAgIGF1dGhUb2tlbjogc2VsZWN0ZWRJREUuYXV0aFRva2VuLFxuICAgICAgICBpZGVSdW5uaW5nSW5XaW5kb3dzOiBzZWxlY3RlZElERS5pZGVSdW5uaW5nSW5XaW5kb3dzLFxuICAgICAgICBzY29wZTogJ2R5bmFtaWMnIGFzIGNvbnN0LFxuICAgICAgfSBhcyBTY29wZWRNY3BTZXJ2ZXJDb25maWdcbiAgICAgIGlzRmlyc3RDaGVja1JlZi5jdXJyZW50ID0gdHJ1ZVxuICAgICAgc2V0Q29ubmVjdGluZ0lERShzZWxlY3RlZElERSlcbiAgICAgIG9uQ2hhbmdlRHluYW1pY01jcENvbmZpZyhuZXdDb25maWcpXG4gICAgfSxcbiAgICBbXG4gICAgICBkeW5hbWljTWNwQ29uZmlnLFxuICAgICAgY3VycmVudElERSxcbiAgICAgIGlkZUNsaWVudCxcbiAgICAgIHNldEFwcFN0YXRlLFxuICAgICAgb25DaGFuZ2VEeW5hbWljTWNwQ29uZmlnLFxuICAgICAgb25Eb25lLFxuICAgIF0sXG4gIClcblxuICBpZiAoY29ubmVjdGluZ0lERSkge1xuICAgIHJldHVybiA8VGV4dCBkaW1Db2xvcj5Db25uZWN0aW5nIHRvIHtjb25uZWN0aW5nSURFLm5hbWV94oCmPC9UZXh0PlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8SURFU2NyZWVuXG4gICAgICBhdmFpbGFibGVJREVzPXthdmFpbGFibGVJREVzfVxuICAgICAgdW5hdmFpbGFibGVJREVzPXt1bmF2YWlsYWJsZUlERXN9XG4gICAgICBzZWxlY3RlZElERT17Y3VycmVudElERX1cbiAgICAgIG9uQ2xvc2U9eygpID0+IG9uRG9uZSgnSURFIHNlbGVjdGlvbiBjYW5jZWxsZWQnLCB7IGRpc3BsYXk6ICdzeXN0ZW0nIH0pfVxuICAgICAgb25TZWxlY3Q9e2hhbmRsZVNlbGVjdElERX1cbiAgICAvPlxuICApXG59XG5cbi8qKlxuICogRm9ybWF0cyB3b3Jrc3BhY2UgZm9sZGVycyBmb3IgZGlzcGxheSwgc3RyaXBwaW5nIGN3ZCBhbmQgc2hvd2luZyB0YWlsIGVuZCBvZiBwYXRoc1xuICogQHBhcmFtIGZvbGRlcnMgQXJyYXkgb2YgZm9sZGVyIHBhdGhzXG4gKiBAcGFyYW0gbWF4TGVuZ3RoIE1heGltdW0gdG90YWwgbGVuZ3RoIG9mIHRoZSBmb3JtYXR0ZWQgc3RyaW5nXG4gKiBAcmV0dXJucyBGb3JtYXR0ZWQgc3RyaW5nIHdpdGggZm9sZGVyIHBhdGhzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXb3Jrc3BhY2VGb2xkZXJzKFxuICBmb2xkZXJzOiBzdHJpbmdbXSxcbiAgbWF4TGVuZ3RoOiBudW1iZXIgPSAxMDAsXG4pOiBzdHJpbmcge1xuICBpZiAoZm9sZGVycy5sZW5ndGggPT09IDApIHJldHVybiAnJ1xuXG4gIGNvbnN0IGN3ZCA9IGdldEN3ZCgpXG5cbiAgLy8gT25seSBzaG93IGZpcnN0IDIgd29ya3NwYWNlc1xuICBjb25zdCBmb2xkZXJzVG9TaG93ID0gZm9sZGVycy5zbGljZSgwLCAyKVxuICBjb25zdCBoYXNNb3JlID0gZm9sZGVycy5sZW5ndGggPiAyXG5cbiAgLy8gQWNjb3VudCBmb3IgXCIsIOKAplwiIGlmIHRoZXJlIGFyZSBtb3JlIGZvbGRlcnNcbiAgY29uc3QgZWxsaXBzaXNPdmVyaGVhZCA9IGhhc01vcmUgPyAzIDogMCAvLyBcIiwg4oCmXCJcblxuICAvLyBBY2NvdW50IGZvciBjb21tYXMgYW5kIHNwYWNlcyBiZXR3ZWVuIHBhdGhzIChcIiwgXCIgPSAyIGNoYXJzIHBlciBzZXBhcmF0b3IpXG4gIGNvbnN0IHNlcGFyYXRvck92ZXJoZWFkID0gKGZvbGRlcnNUb1Nob3cubGVuZ3RoIC0gMSkgKiAyXG4gIGNvbnN0IGF2YWlsYWJsZUxlbmd0aCA9IG1heExlbmd0aCAtIHNlcGFyYXRvck92ZXJoZWFkIC0gZWxsaXBzaXNPdmVyaGVhZFxuXG4gIGNvbnN0IG1heExlbmd0aFBlclBhdGggPSBNYXRoLmZsb29yKGF2YWlsYWJsZUxlbmd0aCAvIGZvbGRlcnNUb1Nob3cubGVuZ3RoKVxuXG4gIGNvbnN0IGN3ZE5GQyA9IGN3ZC5ub3JtYWxpemUoJ05GQycpXG4gIGNvbnN0IGZvcm1hdHRlZEZvbGRlcnMgPSBmb2xkZXJzVG9TaG93Lm1hcChmb2xkZXIgPT4ge1xuICAgIC8vIFN0cmlwIGN3ZCBmcm9tIHRoZSBiZWdpbm5pbmcgaWYgcHJlc2VudFxuICAgIC8vIE5vcm1hbGl6ZSBib3RoIHRvIE5GQyBmb3IgY29uc2lzdGVudCBjb21wYXJpc29uIChtYWNPUyB1c2VzIE5GRCBwYXRocylcbiAgICBjb25zdCBmb2xkZXJORkMgPSBmb2xkZXIubm9ybWFsaXplKCdORkMnKVxuICAgIGlmIChmb2xkZXJORkMuc3RhcnRzV2l0aChjd2RORkMgKyBwYXRoLnNlcCkpIHtcbiAgICAgIGZvbGRlciA9IGZvbGRlck5GQy5zbGljZShjd2RORkMubGVuZ3RoICsgMSlcbiAgICB9XG5cbiAgICBpZiAoZm9sZGVyLmxlbmd0aCA8PSBtYXhMZW5ndGhQZXJQYXRoKSB7XG4gICAgICByZXR1cm4gZm9sZGVyXG4gICAgfVxuICAgIHJldHVybiAn4oCmJyArIGZvbGRlci5zbGljZSgtKG1heExlbmd0aFBlclBhdGggLSAxKSlcbiAgfSlcblxuICBsZXQgcmVzdWx0ID0gZm9ybWF0dGVkRm9sZGVycy5qb2luKCcsICcpXG4gIGlmIChoYXNNb3JlKSB7XG4gICAgcmVzdWx0ICs9ICcsIOKApidcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV08sU0FBQUEscUJBQUFDLElBQUE7QUFBQSxRQUFBQyxJQUFBQyxFQUFBLENBQUE7QUFBOEIsUUFBQTtJQUFBQztFQUFBLElBQUFIO0FBRVQsTUFBQUk7QUFBQSxNQUFBSCxFQUFBLENBQUEsTUFBQUUsWUFBQTtBQUV4QkMsU0FBQSxPQUFBQyxVQUFBO0FBQ0UsWUFBQUMsY0FBb0JELFVBQVU7QUFHOUJFLHVCQUFpQkMsY0FBWTtRQUFBLEdBQ3hCQTtRQUFPQyxnQkFDTUg7UUFBV0ksa0NBQ087TUFDcEMsRUFBRTtBQUVGUCxpQkFBVztJQUFDO0FBQ2JGLE1BQUEsQ0FBQSxJQUFBRTtBQUFBRixNQUFBLENBQUEsSUFBQUc7RUFBQSxPQUFBO0FBQUFB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dUcsTUFBTWxELE9BQU87QUFHbkIsUUFBTW1ELGdCQUFnQkgsUUFBUUksTUFBTSxHQUFHLENBQUM7QUFDeEMsUUFBTUMsVUFBVUwsUUFBUXJHLFNBQVM7QUFHakMsUUFBTTJHLG1CQUFtQkQsVUFBVSxJQUFJO0FBR3ZDLFFBQU1FLHFCQUFxQkosY0FBY3hHLFNBQVMsS0FBSztBQUN2RCxRQUFNNkcsa0JBQWtCUCxZQUFZTSxvQkFBb0JEO0FBRXhELFFBQU1HLG1CQUFtQkMsS0FBS0MsTUFBTUgsa0JBQWtCTCxjQUFjeEcsTUFBTTtBQUUxRSxRQUFNaUgsU0FBU1YsSUFBSVcsVUFBVSxLQUFLO0FBQ2xDLFFBQU1DLG1CQUFtQlgsY0FBY25HLElBQUkrRyxZQUFVO0FBR25ELFVBQU1DLFlBQVlELE9BQU9GLFVBQVUsS0FBSztBQUN4QyxRQUFJRyxVQUFVdEIsV0FBV2tCLFNBQWNLLFFBQUcsR0FBRztBQUMzQ0YsZUFBU0MsVUFBVVosTUFBTVEsT0FBT2pILFNBQVMsQ0FBQztJQUM1QztBQUVBLFFBQUlvSCxPQUFPcEgsVUFBVThHLGtCQUFrQjtBQUNyQyxhQUFPTTtJQUNUO0FBQ0EsV0FBTyxXQUFNQSxPQUFPWCxNQUFNLEVBQUVLLG1CQUFtQixFQUFFO0VBQ25ELENBQUM7QUFFRCxNQUFJUyxTQUFTSixpQkFBaUJLLEtBQUssSUFBSTtBQUN2QyxNQUFJZCxTQUFTO0FBQ1hhLGNBQVU7RUFDWjtBQUVBLFNBQU9BO0FBQ1Q7SUF2TE1uQzs7OztBQTliTjtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQThaQSxJQUFNQSw0QkFBNEI7OzsiLAogICJuYW1lcyI6IFsiSWRlQXV0b0Nvbm5lY3REaWFsb2ciLCAidDAiLCAiJCIsICJfYyIsICJvbkNvbXBsZXRlIiwgInQxIiwgInZhbHVlIiwgImF1dG9Db25uZWN0IiwgInNhdmVHbG9iYWxDb25maWciLCAiY3VycmVudCIsICJhdXRvQ29ubmVjdElkZSIsICJoYXNJZGVBdXRvQ29ubmVjdERpYWxvZ0JlZW5TaG93biIsICJoYW5kbGVTZWxlY3QiLCAidDIiLCAiU3ltYm9sIiwgImZvciIsICJsYWJlbCIsICJvcHRpb25zIiwgInQzIiwgInQ0IiwgInQ1IiwgInNob3VsZFNob3dBdXRvQ29ubmVjdERpYWxvZyIsICJjb25maWciLCAiZ2V0R2xvYmFsQ29uZmlnIiwgImlzU3VwcG9ydGVkVGVybWluYWwiLCAiSWRlRGlzYWJsZUF1dG9Db25uZWN0RGlhbG9nIiwgImRpc2FibGVBdXRvQ29ubmVjdCIsICJfdGVtcCIsICJoYW5kbGVDYW5jZWwiLCAic2hvdWxkU2hvd0Rpc2FibGVBdXRvQ29ubmVjdERpYWxvZyIsICJwYXRoIiwgIklERVNjcmVlbiIsICJ0MCIsICIkIiwgIl9jIiwgImF2YWlsYWJsZUlERXMiLCAidW5hdmFpbGFibGVJREVzIiwgInNlbGVjdGVkSURFIiwgIm9uQ2xvc2UiLCAib25TZWxlY3QiLCAidDEiLCAicG9ydCIsICJ0b1N0cmluZyIsICJzZWxlY3RlZFZhbHVlIiwgInNldFNlbGVjdGVkVmFsdWUiLCAidXNlU3RhdGUiLCAic2hvd0F1dG9Db25uZWN0RGlhbG9nIiwgInNldFNob3dBdXRvQ29ubmVjdERpYWxvZyIsICJzaG93RGlzYWJsZUF1dG9Db25uZWN0RGlhbG9nIiwgInNldFNob3dEaXNhYmxlQXV0b0Nvbm5lY3REaWFsb2ciLCAidDIiLCAidmFsdWUiLCAic2hvdWxkU2hvd0F1dG9Db25uZWN0RGlhbG9nIiwgInNob3VsZFNob3dEaXNhYmxlQXV0b0Nvbm5lY3REaWFsb2ciLCAiZmluZCIsICJpZGUiLCAicGFyc2VJbnQiLCAiaGFuZGxlU2VsZWN0SURFIiwgInQzIiwgInJlZHVjZSIsICJfdGVtcCIsICJpZGVDb3VudHMiLCAidDQiLCAidDUiLCAiaWRlXzEiLCAiaGFzTXVsdGlwbGVJbnN0YW5jZXMiLCAibmFtZSIsICJzaG93V29ya3NwYWNlIiwgIndvcmtzcGFjZUZvbGRlcnMiLCAibGVuZ3RoIiwgImxhYmVsIiwgImRlc2NyaXB0aW9uIiwgImZvcm1hdFdvcmtzcGFjZUZvbGRlcnMiLCAidW5kZWZpbmVkIiwgIm1hcCIsICJjb25jYXQiLCAib3B0aW9ucyIsICJpc1N1cHBvcnRlZEpldEJyYWluc1Rlcm1pbmFsIiwgInQ2IiwgInZhbHVlXzAiLCAidDciLCAic29tZSIsICJfdGVtcDIiLCAidDgiLCAiaXNTdXBwb3J0ZWRUZXJtaW5hbCIsICJ0OSIsICJfdGVtcDMiLCAidDEwIiwgInQxMSIsICJpZGVfMyIsICJpbmRleCIsICJpZGVfMiIsICJhY2MiLCAiaWRlXzAiLCAiZmluZEN1cnJlbnRJREUiLCAiZHluYW1pY01jcENvbmZpZyIsICJjdXJyZW50Q29uZmlnIiwgInR5cGUiLCAidXJsIiwgIklERU9wZW5TZWxlY3Rpb24iLCAib25TZWxlY3RJREUiLCAib25Eb25lIiwgIl90ZW1wNCIsICJoYW5kbGVDYW5jZWwiLCAiZGlzcGxheSIsICJSdW5uaW5nSURFU2VsZWN0b3IiLCAicnVubmluZ0lERXMiLCAiX3RlbXA1IiwgInRvSURFRGlzcGxheU5hbWUiLCAiSW5zdGFsbE9uTW91bnQiLCAib25JbnN0YWxsIiwgInVzZUVmZmVjdCIsICJjYWxsIiwgImNvbnRleHQiLCAiYXJncyIsICJsb2dFdmVudCIsICJvbkNoYW5nZUR5bmFtaWNNY3BDb25maWciLCAidHJpbSIsICJ3b3JrdHJlZVNlc3Npb24iLCAiZ2V0Q3VycmVudFdvcmt0cmVlU2Vzc2lvbiIsICJ0YXJnZXRQYXRoIiwgIndvcmt0cmVlUGF0aCIsICJnZXRDd2QiLCAiZGV0ZWN0ZWRJREVzIiwgImRldGVjdElERXMiLCAiZmlsdGVyIiwgImlzVmFsaWQiLCAidG9Mb3dlckNhc2UiLCAiaW5jbHVkZXMiLCAiY29kZSIsICJleGVjRmlsZU5vVGhyb3ciLCAiY2hhbGsiLCAiYm9sZCIsICJvbkluc3RhbGxJREVFeHRlbnNpb24iLCAiZGV0ZWN0UnVubmluZ0lERXMiLCAiaXNKZXRCcmFpbnNJZGUiLCAiY3VycmVudElERSIsICJJREVDb21tYW5kRmxvdyIsICJjb25uZWN0aW5nSURFIiwgInNldENvbm5lY3RpbmdJREUiLCAiaWRlQ2xpZW50IiwgInVzZUFwcFN0YXRlIiwgInMiLCAibWNwIiwgImNsaWVudHMiLCAiYyIsICJzZXRBcHBTdGF0ZSIsICJ1c2VTZXRBcHBTdGF0ZSIsICJpc0ZpcnN0Q2hlY2tSZWYiLCAidXNlUmVmIiwgImN1cnJlbnQiLCAidGltZXIiLCAic2V0VGltZW91dCIsICJJREVfQ09OTkVDVElPTl9USU1FT1VUX01TIiwgImNsZWFyVGltZW91dCIsICJ1c2VDYWxsYmFjayIsICJuZXdDb25maWciLCAiY2xpZW50IiwgIm9uY2xvc2UiLCAiY2xlYXJTZXJ2ZXJDYWNoZSIsICJjb25maWciLCAicHJldiIsICJ0b29scyIsICJ0IiwgInN0YXJ0c1dpdGgiLCAiY29tbWFuZHMiLCAiaWRlTmFtZSIsICJhdXRoVG9rZW4iLCAiaWRlUnVubmluZ0luV2luZG93cyIsICJzY29wZSIsICJmb2xkZXJzIiwgIm1heExlbmd0aCIsICJjd2QiLCAiZm9sZGVyc1RvU2hvdyIsICJzbGljZSIsICJoYXNNb3JlIiwgImVsbGlwc2lzT3ZlcmhlYWQiLCAic2VwYXJhdG9yT3ZlcmhlYWQiLCAiYXZhaWxhYmxlTGVuZ3RoIiwgIm1heExlbmd0aFBlclBhdGgiLCAiTWF0aCIsICJmbG9vciIsICJjd2RORkMiLCAibm9ybWFsaXplIiwgImZvcm1hdHRlZEZvbGRlcnMiLCAiZm9sZGVyIiwgImZvbGRlck5GQyIsICJzZXAiLCAicmVzdWx0IiwgImpvaW4iXQp9Cg==
