#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  getAutoModeDenials,
  init_autoModeDenials
} from "./chunk-7KN36EV3.mjs";
import {
  StatusIcon,
  init_StatusIcon
} from "./chunk-LCTAJSHP.mjs";
import {
  detectUnreachableRules,
  init_shadowedRuleDetection
} from "./chunk-4TWPQVWD.mjs";
import {
  SearchBox,
  init_SearchBox,
  init_useSearchInput,
  useSearchInput
} from "./chunk-E4A3HE5T.mjs";
import {
  Tab,
  Tabs,
  init_Tabs,
  useTabHeaderFocus,
  useTabsWidth
} from "./chunk-6TYKXPLL.mjs";
import {
  AddWorkspaceDirectory,
  init_AddWorkspaceDirectory
} from "./chunk-IPUMUST7.mjs";
import "./chunk-O4YARGMF.mjs";
import "./chunk-CMU6H2E2.mjs";
import "./chunk-U2LTAULA.mjs";
import {
  BashTool,
  SandboxManager,
  Select,
  TextInput,
  WebFetchTool,
  applyPermissionUpdate,
  createPermissionRetryMessage,
  deletePermissionRule,
  getAllowRules,
  getAskRules,
  getDenyRules,
  init_AppState,
  init_BashTool,
  init_PermissionUpdate,
  init_TextInput,
  init_WebFetchTool,
  init_messages2 as init_messages,
  init_permissions,
  init_sandbox_adapter,
  init_select,
  permissionRuleSourceDisplayString,
  persistPermissionUpdate,
  useAppState,
  useSetAppState
} from "./chunk-FMU4URRE.mjs";
import "./chunk-PJK4KGGT.mjs";
import {
  Dialog,
  init_Dialog
} from "./chunk-PEMK4FQH.mjs";
import "./chunk-SQ6KOOZS.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-Y2PD6CVC.mjs";
import {
  init_useExitOnCtrlCDWithKeybindings,
  useExitOnCtrlCDWithKeybindings
} from "./chunk-S5Z6SZDA.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import {
  Pane,
  init_Pane,
  init_useKeybinding,
  init_useTerminalSize,
  useKeybinding,
  useTerminalSize
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
import "./chunk-IIPAGI5R.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-HUEORIXP.mjs";
import "./chunk-H6COQF52.mjs";
import "./chunk-IQJUSPBJ.mjs";
import "./chunk-R326WRGL.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import {
  Newline,
  ThemedBox_default,
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime,
  useTerminalFocus,
  use_input_default
} from "./chunk-HWTXKBLR.mjs";
import {
  Fragment,
  createElement,
  init_react,
  useEffect,
  useRef,
  useState
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  SOURCES,
  getRelativeSettingsFilePathForSource,
  init_constants,
  init_permissionRuleParser,
  init_settings2 as init_settings,
  init_source,
  init_stringUtils,
  permissionRuleValueFromString,
  permissionRuleValueToString,
  plural,
  source_default
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
  init_slowOperations,
  jsonStringify
} from "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import "./chunk-OU3SZVVB.mjs";
import {
  getOriginalCwd,
  init_state
} from "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/components/permissions/rules/PermissionRuleDescription.tsx
function PermissionRuleDescription(t0) {
  const $ = c(9);
  const {
    ruleValue
  } = t0;
  switch (ruleValue.toolName) {
    case BashTool.name: {
      if (ruleValue.ruleContent) {
        if (ruleValue.ruleContent.endsWith(":*")) {
          let t1;
          if ($[0] !== ruleValue.ruleContent) {
            t1 = ruleValue.ruleContent.slice(0, -2);
            $[0] = ruleValue.ruleContent;
            $[1] = t1;
          } else {
            t1 = $[1];
          }
          let t2;
          if ($[2] !== t1) {
            t2 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Any Bash command starting with", " ", /* @__PURE__ */ createElement(ThemedText, { bold: true }, t1));
            $[2] = t1;
            $[3] = t2;
          } else {
            t2 = $[3];
          }
          return t2;
        } else {
          let t1;
          if ($[4] !== ruleValue.ruleContent) {
            t1 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "The Bash command ", /* @__PURE__ */ createElement(ThemedText, { bold: true }, ruleValue.ruleContent));
            $[4] = ruleValue.ruleContent;
            $[5] = t1;
          } else {
            t1 = $[5];
          }
          return t1;
        }
      } else {
        let t1;
        if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
          t1 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Any Bash command");
          $[6] = t1;
        } else {
          t1 = $[6];
        }
        return t1;
      }
    }
    default: {
      if (!ruleValue.ruleContent) {
        let t1;
        if ($[7] !== ruleValue.toolName) {
          t1 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Any use of the ", /* @__PURE__ */ createElement(ThemedText, { bold: true }, ruleValue.toolName), " tool");
          $[7] = ruleValue.toolName;
          $[8] = t1;
        } else {
          t1 = $[8];
        }
        return t1;
      } else {
        return null;
      }
    }
  }
}
var init_PermissionRuleDescription = __esm({
  "src/components/permissions/rules/PermissionRuleDescription.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_BashTool();
  }
});

// src/components/permissions/rules/AddPermissionRules.tsx
function optionForPermissionSaveDestination(saveDestination) {
  switch (saveDestination) {
    case "localSettings":
      return {
        label: "Project settings (local)",
        description: `Saved in ${getRelativeSettingsFilePathForSource("localSettings")}`,
        value: saveDestination
      };
    case "projectSettings":
      return {
        label: "Project settings",
        description: `Checked in at ${getRelativeSettingsFilePathForSource("projectSettings")}`,
        value: saveDestination
      };
    case "userSettings":
      return {
        label: "User settings",
        description: `Saved in at ~/.claude/settings.json`,
        value: saveDestination
      };
  }
}
function AddPermissionRules(t0) {
  const $ = c(26);
  const {
    onAddRules,
    onCancel,
    ruleValues,
    ruleBehavior,
    initialContext,
    setToolPermissionContext
  } = t0;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = SOURCES.map(optionForPermissionSaveDestination);
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const allOptions = t1;
  let t2;
  if ($[1] !== initialContext || $[2] !== onAddRules || $[3] !== onCancel || $[4] !== ruleBehavior || $[5] !== ruleValues || $[6] !== setToolPermissionContext) {
    t2 = (selectedValue) => {
      if (selectedValue === "cancel") {
        onCancel();
        return;
      } else {
        if (SOURCES.includes(selectedValue)) {
          const destination = selectedValue;
          const updatedContext = applyPermissionUpdate(initialContext, {
            type: "addRules",
            rules: ruleValues,
            behavior: ruleBehavior,
            destination
          });
          persistPermissionUpdate({
            type: "addRules",
            rules: ruleValues,
            behavior: ruleBehavior,
            destination
          });
          setToolPermissionContext(updatedContext);
          const rules = ruleValues.map((ruleValue) => ({
            ruleValue,
            ruleBehavior,
            source: destination
          }));
          const sandboxAutoAllowEnabled = SandboxManager.isSandboxingEnabled() && SandboxManager.isAutoAllowBashIfSandboxedEnabled();
          const allUnreachable = detectUnreachableRules(updatedContext, {
            sandboxAutoAllowEnabled
          });
          const newUnreachable = allUnreachable.filter((u) => ruleValues.some((rv) => rv.toolName === u.rule.ruleValue.toolName && rv.ruleContent === u.rule.ruleValue.ruleContent));
          onAddRules(rules, newUnreachable.length > 0 ? newUnreachable : void 0);
        }
      }
    };
    $[1] = initialContext;
    $[2] = onAddRules;
    $[3] = onCancel;
    $[4] = ruleBehavior;
    $[5] = ruleValues;
    $[6] = setToolPermissionContext;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  const onSelect = t2;
  let t3;
  if ($[8] !== ruleValues.length) {
    t3 = plural(ruleValues.length, "rule");
    $[8] = ruleValues.length;
    $[9] = t3;
  } else {
    t3 = $[9];
  }
  const title = `Add ${ruleBehavior} permission ${t3}`;
  let t4;
  if ($[10] !== ruleValues) {
    t4 = ruleValues.map(_temp);
    $[10] = ruleValues;
    $[11] = t4;
  } else {
    t4 = $[11];
  }
  let t5;
  if ($[12] !== t4) {
    t5 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", paddingX: 2 }, t4);
    $[12] = t4;
    $[13] = t5;
  } else {
    t5 = $[13];
  }
  const t6 = ruleValues.length === 1 ? "Where should this rule be saved?" : "Where should these rules be saved?";
  let t7;
  if ($[14] !== t6) {
    t7 = /* @__PURE__ */ createElement(ThemedText, null, t6);
    $[14] = t6;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  let t8;
  if ($[16] !== onSelect) {
    t8 = /* @__PURE__ */ createElement(Select, { options: allOptions, onChange: onSelect });
    $[16] = onSelect;
    $[17] = t8;
  } else {
    t8 = $[17];
  }
  let t9;
  if ($[18] !== t7 || $[19] !== t8) {
    t9 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", marginY: 1 }, t7, t8);
    $[18] = t7;
    $[19] = t8;
    $[20] = t9;
  } else {
    t9 = $[20];
  }
  let t10;
  if ($[21] !== onCancel || $[22] !== t5 || $[23] !== t9 || $[24] !== title) {
    t10 = /* @__PURE__ */ createElement(Dialog, { title, onCancel, color: "permission" }, t5, t9);
    $[21] = onCancel;
    $[22] = t5;
    $[23] = t9;
    $[24] = title;
    $[25] = t10;
  } else {
    t10 = $[25];
  }
  return t10;
}
function _temp(ruleValue_0) {
  return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", key: permissionRuleValueToString(ruleValue_0) }, /* @__PURE__ */ createElement(ThemedText, { bold: true }, permissionRuleValueToString(ruleValue_0)), /* @__PURE__ */ createElement(PermissionRuleDescription, { ruleValue: ruleValue_0 }));
}
var init_AddPermissionRules = __esm({
  "src/components/permissions/rules/AddPermissionRules.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_select();
    init_ink();
    init_PermissionUpdate();
    init_permissionRuleParser();
    init_shadowedRuleDetection();
    init_sandbox_adapter();
    init_constants();
    init_settings();
    init_stringUtils();
    init_Dialog();
    init_PermissionRuleDescription();
  }
});

// src/components/permissions/rules/PermissionRuleInput.tsx
function PermissionRuleInput(t0) {
  const $ = c(24);
  const {
    onCancel,
    onSubmit,
    ruleBehavior
  } = t0;
  const [inputValue, setInputValue] = useState("");
  const [cursorOffset, setCursorOffset] = useState(0);
  const exitState = useExitOnCtrlCDWithKeybindings();
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = {
      context: "Settings"
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  useKeybinding("confirm:no", onCancel, t1);
  const {
    columns
  } = useTerminalSize();
  const textInputColumns = columns - 6;
  let t2;
  if ($[1] !== onSubmit || $[2] !== ruleBehavior) {
    t2 = (value) => {
      const trimmedValue = value.trim();
      if (trimmedValue.length === 0) {
        return;
      }
      const ruleValue = permissionRuleValueFromString(trimmedValue);
      onSubmit(ruleValue, ruleBehavior);
    };
    $[1] = onSubmit;
    $[2] = ruleBehavior;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  const handleSubmit = t2;
  let t3;
  if ($[4] !== ruleBehavior) {
    t3 = /* @__PURE__ */ createElement(ThemedText, { bold: true, color: "permission" }, "Add ", ruleBehavior, " permission rule");
    $[4] = ruleBehavior;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ createElement(Newline, null);
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  let t6;
  if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ createElement(ThemedText, { bold: true }, permissionRuleValueToString({
      toolName: WebFetchTool.name
    }));
    t6 = /* @__PURE__ */ createElement(ThemedText, { bold: false }, " or ");
    $[7] = t5;
    $[8] = t6;
  } else {
    t5 = $[7];
    t6 = $[8];
  }
  let t7;
  if ($[9] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ createElement(ThemedText, null, "Permission rules are a tool name, optionally followed by a specifier in parentheses.", t4, "e.g.,", " ", t5, t6, /* @__PURE__ */ createElement(ThemedText, { bold: true }, permissionRuleValueToString({
      toolName: BashTool.name,
      ruleContent: "ls:*"
    })));
    $[9] = t7;
  } else {
    t7 = $[9];
  }
  let t8;
  if ($[10] !== cursorOffset || $[11] !== handleSubmit || $[12] !== inputValue || $[13] !== textInputColumns) {
    t8 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, t7, /* @__PURE__ */ createElement(ThemedBox_default, { borderDimColor: true, borderStyle: "round", marginY: 1, paddingLeft: 1 }, /* @__PURE__ */ createElement(TextInput, { showCursor: true, value: inputValue, onChange: setInputValue, onSubmit: handleSubmit, placeholder: `Enter permission rule${figures_default.ellipsis}`, columns: textInputColumns, cursorOffset, onChangeCursorOffset: setCursorOffset })));
    $[10] = cursorOffset;
    $[11] = handleSubmit;
    $[12] = inputValue;
    $[13] = textInputColumns;
    $[14] = t8;
  } else {
    t8 = $[14];
  }
  let t9;
  if ($[15] !== t3 || $[16] !== t8) {
    t9 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", gap: 1, borderStyle: "round", paddingLeft: 1, paddingRight: 1, borderColor: "permission" }, t3, t8);
    $[15] = t3;
    $[16] = t8;
    $[17] = t9;
  } else {
    t9 = $[17];
  }
  let t10;
  if ($[18] !== exitState.keyName || $[19] !== exitState.pending) {
    t10 = /* @__PURE__ */ createElement(ThemedBox_default, { marginLeft: 3 }, exitState.pending ? /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Press ", exitState.keyName, " again to exit") : /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Enter to submit \xB7 Esc to cancel"));
    $[18] = exitState.keyName;
    $[19] = exitState.pending;
    $[20] = t10;
  } else {
    t10 = $[20];
  }
  let t11;
  if ($[21] !== t10 || $[22] !== t9) {
    t11 = /* @__PURE__ */ createElement(Fragment, null, t9, t10);
    $[21] = t10;
    $[22] = t9;
    $[23] = t11;
  } else {
    t11 = $[23];
  }
  return t11;
}
var init_PermissionRuleInput = __esm({
  "src/components/permissions/rules/PermissionRuleInput.tsx"() {
    init_react_compiler_runtime();
    init_figures();
    init_react();
    init_react();
    init_TextInput();
    init_useExitOnCtrlCDWithKeybindings();
    init_useTerminalSize();
    init_ink();
    init_useKeybinding();
    init_BashTool();
    init_WebFetchTool();
    init_permissionRuleParser();
  }
});

// src/components/permissions/rules/RecentDenialsTab.tsx
function RecentDenialsTab(t0) {
  const $ = c(30);
  const {
    onHeaderFocusChange,
    onStateChange
  } = t0;
  const {
    headerFocused,
    focusHeader
  } = useTabHeaderFocus();
  let t1;
  let t2;
  if ($[0] !== headerFocused || $[1] !== onHeaderFocusChange) {
    t1 = () => {
      onHeaderFocusChange?.(headerFocused);
    };
    t2 = [headerFocused, onHeaderFocusChange];
    $[0] = headerFocused;
    $[1] = onHeaderFocusChange;
    $[2] = t1;
    $[3] = t2;
  } else {
    t1 = $[2];
    t2 = $[3];
  }
  useEffect(t1, t2);
  const [denials] = useState(_temp4);
  const [approved, setApproved] = useState(_temp2);
  const [retry, setRetry] = useState(_temp3);
  const [focusedIdx, setFocusedIdx] = useState(0);
  let t3;
  let t4;
  if ($[4] !== approved || $[5] !== denials || $[6] !== onStateChange || $[7] !== retry) {
    t3 = () => {
      onStateChange({
        approved,
        retry,
        denials
      });
    };
    t4 = [approved, retry, denials, onStateChange];
    $[4] = approved;
    $[5] = denials;
    $[6] = onStateChange;
    $[7] = retry;
    $[8] = t3;
    $[9] = t4;
  } else {
    t3 = $[8];
    t4 = $[9];
  }
  useEffect(t3, t4);
  let t5;
  if ($[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = (value) => {
      const idx = Number(value);
      setApproved((prev) => {
        const next = new Set(prev);
        if (next.has(idx)) {
          next.delete(idx);
        } else {
          next.add(idx);
        }
        return next;
      });
    };
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  const handleSelect = t5;
  let t6;
  if ($[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = (value_0) => {
      setFocusedIdx(Number(value_0));
    };
    $[11] = t6;
  } else {
    t6 = $[11];
  }
  const handleFocus = t6;
  let t7;
  if ($[12] !== focusedIdx) {
    t7 = (input, _key) => {
      if (input === "r") {
        setRetry((prev_0) => {
          const next_0 = new Set(prev_0);
          if (next_0.has(focusedIdx)) {
            next_0.delete(focusedIdx);
          } else {
            next_0.add(focusedIdx);
          }
          return next_0;
        });
        setApproved((prev_1) => {
          if (prev_1.has(focusedIdx)) {
            return prev_1;
          }
          const next_1 = new Set(prev_1);
          next_1.add(focusedIdx);
          return next_1;
        });
      }
    };
    $[12] = focusedIdx;
    $[13] = t7;
  } else {
    t7 = $[13];
  }
  const t8 = denials.length > 0;
  let t9;
  if ($[14] !== t8) {
    t9 = {
      isActive: t8
    };
    $[14] = t8;
    $[15] = t9;
  } else {
    t9 = $[15];
  }
  use_input_default(t7, t9);
  if (denials.length === 0) {
    let t102;
    if ($[16] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t102 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "No recent denials. Commands denied by the auto mode classifier will appear here.");
      $[16] = t102;
    } else {
      t102 = $[16];
    }
    return t102;
  }
  let t10;
  if ($[17] !== approved || $[18] !== denials || $[19] !== retry) {
    let t112;
    if ($[21] !== approved || $[22] !== retry) {
      t112 = (d, idx_0) => {
        const isApproved = approved.has(idx_0);
        const suffix = retry.has(idx_0) ? " (retry)" : "";
        return {
          label: /* @__PURE__ */ createElement(ThemedText, null, /* @__PURE__ */ createElement(StatusIcon, { status: isApproved ? "success" : "error", withSpace: true }), d.display, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, suffix)),
          value: String(idx_0)
        };
      };
      $[21] = approved;
      $[22] = retry;
      $[23] = t112;
    } else {
      t112 = $[23];
    }
    t10 = denials.map(t112);
    $[17] = approved;
    $[18] = denials;
    $[19] = retry;
    $[20] = t10;
  } else {
    t10 = $[20];
  }
  const options = t10;
  let t11;
  if ($[24] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t11 = /* @__PURE__ */ createElement(ThemedText, null, "Commands recently denied by the auto mode classifier.");
    $[24] = t11;
  } else {
    t11 = $[24];
  }
  const t12 = Math.min(10, options.length);
  let t13;
  if ($[25] !== focusHeader || $[26] !== headerFocused || $[27] !== options || $[28] !== t12) {
    t13 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, t11, /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(Select, { options, onChange: handleSelect, onFocus: handleFocus, visibleOptionCount: t12, isDisabled: headerFocused, onUpFromFirstItem: focusHeader })));
    $[25] = focusHeader;
    $[26] = headerFocused;
    $[27] = options;
    $[28] = t12;
    $[29] = t13;
  } else {
    t13 = $[29];
  }
  return t13;
}
function _temp3() {
  return /* @__PURE__ */ new Set();
}
function _temp2() {
  return /* @__PURE__ */ new Set();
}
function _temp4() {
  return getAutoModeDenials();
}
var init_RecentDenialsTab = __esm({
  "src/components/permissions/rules/RecentDenialsTab.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_react();
    init_ink();
    init_autoModeDenials();
    init_select();
    init_StatusIcon();
    init_Tabs();
  }
});

// src/components/permissions/rules/RemoveWorkspaceDirectory.tsx
function RemoveWorkspaceDirectory(t0) {
  const $ = c(19);
  const {
    directoryPath,
    onRemove,
    onCancel,
    permissionContext,
    setPermissionContext
  } = t0;
  let t1;
  if ($[0] !== directoryPath || $[1] !== onRemove || $[2] !== permissionContext || $[3] !== setPermissionContext) {
    t1 = () => {
      const updatedContext = applyPermissionUpdate(permissionContext, {
        type: "removeDirectories",
        directories: [directoryPath],
        destination: "session"
      });
      setPermissionContext(updatedContext);
      onRemove();
    };
    $[0] = directoryPath;
    $[1] = onRemove;
    $[2] = permissionContext;
    $[3] = setPermissionContext;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  const handleRemove = t1;
  let t2;
  if ($[5] !== handleRemove || $[6] !== onCancel) {
    t2 = (value) => {
      if (value === "yes") {
        handleRemove();
      } else {
        onCancel();
      }
    };
    $[5] = handleRemove;
    $[6] = onCancel;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  const handleSelect = t2;
  let t3;
  if ($[8] !== directoryPath) {
    t3 = /* @__PURE__ */ createElement(ThemedBox_default, { marginX: 2, flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, { bold: true }, directoryPath));
    $[8] = directoryPath;
    $[9] = t3;
  } else {
    t3 = $[9];
  }
  let t4;
  if ($[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ createElement(ThemedText, null, "Blaude will no longer have access to files in this directory.");
    $[10] = t4;
  } else {
    t4 = $[10];
  }
  let t5;
  if ($[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = [{
      label: "Yes",
      value: "yes"
    }, {
      label: "No",
      value: "no"
    }];
    $[11] = t5;
  } else {
    t5 = $[11];
  }
  let t6;
  if ($[12] !== handleSelect || $[13] !== onCancel) {
    t6 = /* @__PURE__ */ createElement(Select, { onChange: handleSelect, onCancel, options: t5 });
    $[12] = handleSelect;
    $[13] = onCancel;
    $[14] = t6;
  } else {
    t6 = $[14];
  }
  let t7;
  if ($[15] !== onCancel || $[16] !== t3 || $[17] !== t6) {
    t7 = /* @__PURE__ */ createElement(Dialog, { title: "Remove directory from workspace?", onCancel, color: "error" }, t3, t4, t6);
    $[15] = onCancel;
    $[16] = t3;
    $[17] = t6;
    $[18] = t7;
  } else {
    t7 = $[18];
  }
  return t7;
}
var init_RemoveWorkspaceDirectory = __esm({
  "src/components/permissions/rules/RemoveWorkspaceDirectory.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_select();
    init_ink();
    init_PermissionUpdate();
    init_Dialog();
  }
});

// src/components/permissions/rules/WorkspaceTab.tsx
function WorkspaceTab(t0) {
  const $ = c(23);
  const {
    onExit,
    toolPermissionContext,
    onRequestAddDirectory,
    onRequestRemoveDirectory,
    onHeaderFocusChange
  } = t0;
  const {
    headerFocused,
    focusHeader
  } = useTabHeaderFocus();
  let t1;
  let t2;
  if ($[0] !== headerFocused || $[1] !== onHeaderFocusChange) {
    t1 = () => {
      onHeaderFocusChange?.(headerFocused);
    };
    t2 = [headerFocused, onHeaderFocusChange];
    $[0] = headerFocused;
    $[1] = onHeaderFocusChange;
    $[2] = t1;
    $[3] = t2;
  } else {
    t1 = $[2];
    t2 = $[3];
  }
  useEffect(t1, t2);
  let t3;
  if ($[4] !== toolPermissionContext.additionalWorkingDirectories) {
    t3 = Array.from(toolPermissionContext.additionalWorkingDirectories.keys()).map(_temp5);
    $[4] = toolPermissionContext.additionalWorkingDirectories;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  const additionalDirectories = t3;
  let t4;
  if ($[6] !== additionalDirectories || $[7] !== onRequestAddDirectory || $[8] !== onRequestRemoveDirectory) {
    t4 = (selectedValue) => {
      if (selectedValue === "add-directory") {
        onRequestAddDirectory();
        return;
      }
      const directory = additionalDirectories.find((d) => d.path === selectedValue);
      if (directory && directory.isDeletable) {
        onRequestRemoveDirectory(directory.path);
      }
    };
    $[6] = additionalDirectories;
    $[7] = onRequestAddDirectory;
    $[8] = onRequestRemoveDirectory;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  const handleDirectorySelect = t4;
  let t5;
  if ($[10] !== onExit) {
    t5 = () => onExit("Workspace dialog dismissed", {
      display: "system"
    });
    $[10] = onExit;
    $[11] = t5;
  } else {
    t5 = $[11];
  }
  const handleCancel = t5;
  let opts;
  if ($[12] !== additionalDirectories) {
    opts = additionalDirectories.map(_temp22);
    let t62;
    if ($[14] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t62 = {
        label: `Add directory${figures_default.ellipsis}`,
        value: "add-directory"
      };
      $[14] = t62;
    } else {
      t62 = $[14];
    }
    opts.push(t62);
    $[12] = additionalDirectories;
    $[13] = opts;
  } else {
    opts = $[13];
  }
  const options = opts;
  let t6;
  if ($[15] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "row", marginTop: 1, marginLeft: 2, gap: 1 }, /* @__PURE__ */ createElement(ThemedText, null, `-  ${getOriginalCwd()}`), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "(Original working directory)"));
    $[15] = t6;
  } else {
    t6 = $[15];
  }
  const t7 = Math.min(10, options.length);
  let t8;
  if ($[16] !== focusHeader || $[17] !== handleCancel || $[18] !== handleDirectorySelect || $[19] !== headerFocused || $[20] !== options || $[21] !== t7) {
    t8 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", marginBottom: 1 }, t6, /* @__PURE__ */ createElement(Select, { options, onChange: handleDirectorySelect, onCancel: handleCancel, visibleOptionCount: t7, onUpFromFirstItem: focusHeader, isDisabled: headerFocused }));
    $[16] = focusHeader;
    $[17] = handleCancel;
    $[18] = handleDirectorySelect;
    $[19] = headerFocused;
    $[20] = options;
    $[21] = t7;
    $[22] = t8;
  } else {
    t8 = $[22];
  }
  return t8;
}
function _temp22(dir) {
  return {
    label: dir.path,
    value: dir.path
  };
}
function _temp5(path) {
  return {
    path,
    isCurrent: false,
    isDeletable: true
  };
}
var init_WorkspaceTab = __esm({
  "src/components/permissions/rules/WorkspaceTab.tsx"() {
    init_react_compiler_runtime();
    init_figures();
    init_react();
    init_react();
    init_state();
    init_select();
    init_ink();
    init_Tabs();
  }
});

// src/components/permissions/rules/PermissionRuleList.tsx
function RuleSourceText(t0) {
  const $ = c(4);
  const {
    rule
  } = t0;
  let t1;
  if ($[0] !== rule.source) {
    t1 = permissionRuleSourceDisplayString(rule.source);
    $[0] = rule.source;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const t2 = `From ${t1}`;
  let t3;
  if ($[2] !== t2) {
    t3 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, t2);
    $[2] = t2;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  return t3;
}
function getRuleBehaviorLabel(ruleBehavior) {
  switch (ruleBehavior) {
    case "allow":
      return "allowed";
    case "deny":
      return "denied";
    case "ask":
      return "ask";
  }
}
function RuleDetails(t0) {
  const $ = c(42);
  const {
    rule,
    onDelete,
    onCancel
  } = t0;
  const exitState = useExitOnCtrlCDWithKeybindings();
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = {
      context: "Confirmation"
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  useKeybinding("confirm:no", onCancel, t1);
  let t2;
  if ($[1] !== rule.ruleValue) {
    t2 = permissionRuleValueToString(rule.ruleValue);
    $[1] = rule.ruleValue;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] !== t2) {
    t3 = /* @__PURE__ */ createElement(ThemedText, { bold: true }, t2);
    $[3] = t2;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] !== rule.ruleValue) {
    t4 = /* @__PURE__ */ createElement(PermissionRuleDescription, { ruleValue: rule.ruleValue });
    $[5] = rule.ruleValue;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] !== rule) {
    t5 = /* @__PURE__ */ createElement(RuleSourceText, { rule });
    $[7] = rule;
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  let t6;
  if ($[9] !== t3 || $[10] !== t4 || $[11] !== t5) {
    t6 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", marginX: 2 }, t3, t4, t5);
    $[9] = t3;
    $[10] = t4;
    $[11] = t5;
    $[12] = t6;
  } else {
    t6 = $[12];
  }
  const ruleDescription = t6;
  let t7;
  if ($[13] !== exitState.keyName || $[14] !== exitState.pending) {
    t7 = /* @__PURE__ */ createElement(ThemedBox_default, { marginLeft: 3 }, exitState.pending ? /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Press ", exitState.keyName, " again to exit") : /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Esc to cancel"));
    $[13] = exitState.keyName;
    $[14] = exitState.pending;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  const footer = t7;
  if (rule.source === "policySettings") {
    let t82;
    if ($[16] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t82 = /* @__PURE__ */ createElement(ThemedText, { bold: true, color: "permission" }, "Rule details");
      $[16] = t82;
    } else {
      t82 = $[16];
    }
    let t92;
    if ($[17] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t92 = /* @__PURE__ */ createElement(ThemedText, { italic: true }, "This rule is configured by managed settings and cannot be modified.", "\n", "Contact your system administrator for more information.");
      $[17] = t92;
    } else {
      t92 = $[17];
    }
    let t102;
    if ($[18] !== ruleDescription) {
      t102 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", gap: 1, borderStyle: "round", paddingLeft: 1, paddingRight: 1, borderColor: "permission" }, t82, ruleDescription, t92);
      $[18] = ruleDescription;
      $[19] = t102;
    } else {
      t102 = $[19];
    }
    let t112;
    if ($[20] !== footer || $[21] !== t102) {
      t112 = /* @__PURE__ */ createElement(Fragment, null, t102, footer);
      $[20] = footer;
      $[21] = t102;
      $[22] = t112;
    } else {
      t112 = $[22];
    }
    return t112;
  }
  let t8;
  if ($[23] !== rule.ruleBehavior) {
    t8 = getRuleBehaviorLabel(rule.ruleBehavior);
    $[23] = rule.ruleBehavior;
    $[24] = t8;
  } else {
    t8 = $[24];
  }
  let t9;
  if ($[25] !== t8) {
    t9 = /* @__PURE__ */ createElement(ThemedText, { bold: true, color: "error" }, "Delete ", t8, " tool?");
    $[25] = t8;
    $[26] = t9;
  } else {
    t9 = $[26];
  }
  let t10;
  if ($[27] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t10 = /* @__PURE__ */ createElement(ThemedText, null, "Are you sure you want to delete this permission rule?");
    $[27] = t10;
  } else {
    t10 = $[27];
  }
  let t11;
  if ($[28] !== onCancel || $[29] !== onDelete) {
    t11 = (_) => _ === "yes" ? onDelete() : onCancel();
    $[28] = onCancel;
    $[29] = onDelete;
    $[30] = t11;
  } else {
    t11 = $[30];
  }
  let t12;
  if ($[31] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t12 = [{
      label: "Yes",
      value: "yes"
    }, {
      label: "No",
      value: "no"
    }];
    $[31] = t12;
  } else {
    t12 = $[31];
  }
  let t13;
  if ($[32] !== onCancel || $[33] !== t11) {
    t13 = /* @__PURE__ */ createElement(Select, { onChange: t11, onCancel, options: t12 });
    $[32] = onCancel;
    $[33] = t11;
    $[34] = t13;
  } else {
    t13 = $[34];
  }
  let t14;
  if ($[35] !== ruleDescription || $[36] !== t13 || $[37] !== t9) {
    t14 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", gap: 1, borderStyle: "round", paddingLeft: 1, paddingRight: 1, borderColor: "error" }, t9, ruleDescription, t10, t13);
    $[35] = ruleDescription;
    $[36] = t13;
    $[37] = t9;
    $[38] = t14;
  } else {
    t14 = $[38];
  }
  let t15;
  if ($[39] !== footer || $[40] !== t14) {
    t15 = /* @__PURE__ */ createElement(Fragment, null, t14, footer);
    $[39] = footer;
    $[40] = t14;
    $[41] = t15;
  } else {
    t15 = $[41];
  }
  return t15;
}
function RulesTabContent(props) {
  const $ = c(26);
  const {
    options,
    searchQuery,
    isSearchMode,
    isFocused,
    onSelect,
    onCancel,
    lastFocusedRuleKey,
    cursorOffset,
    onHeaderFocusChange
  } = props;
  const tabWidth = useTabsWidth();
  const {
    headerFocused,
    focusHeader,
    blurHeader
  } = useTabHeaderFocus();
  let t0;
  let t1;
  if ($[0] !== blurHeader || $[1] !== headerFocused || $[2] !== isSearchMode) {
    t0 = () => {
      if (isSearchMode && headerFocused) {
        blurHeader();
      }
    };
    t1 = [isSearchMode, headerFocused, blurHeader];
    $[0] = blurHeader;
    $[1] = headerFocused;
    $[2] = isSearchMode;
    $[3] = t0;
    $[4] = t1;
  } else {
    t0 = $[3];
    t1 = $[4];
  }
  useEffect(t0, t1);
  let t2;
  let t3;
  if ($[5] !== headerFocused || $[6] !== onHeaderFocusChange) {
    t2 = () => {
      onHeaderFocusChange?.(headerFocused);
    };
    t3 = [headerFocused, onHeaderFocusChange];
    $[5] = headerFocused;
    $[6] = onHeaderFocusChange;
    $[7] = t2;
    $[8] = t3;
  } else {
    t2 = $[7];
    t3 = $[8];
  }
  useEffect(t2, t3);
  const t4 = isSearchMode && !headerFocused;
  let t5;
  if ($[9] !== cursorOffset || $[10] !== isFocused || $[11] !== searchQuery || $[12] !== t4 || $[13] !== tabWidth) {
    t5 = /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1, flexDirection: "column" }, /* @__PURE__ */ createElement(SearchBox, { query: searchQuery, isFocused: t4, isTerminalFocused: isFocused, width: tabWidth, cursorOffset }));
    $[9] = cursorOffset;
    $[10] = isFocused;
    $[11] = searchQuery;
    $[12] = t4;
    $[13] = tabWidth;
    $[14] = t5;
  } else {
    t5 = $[14];
  }
  const t6 = Math.min(10, options.length);
  const t7 = isSearchMode || headerFocused;
  let t8;
  if ($[15] !== focusHeader || $[16] !== lastFocusedRuleKey || $[17] !== onCancel || $[18] !== onSelect || $[19] !== options || $[20] !== t6 || $[21] !== t7) {
    t8 = /* @__PURE__ */ createElement(Select, { options, onChange: onSelect, onCancel, visibleOptionCount: t6, isDisabled: t7, defaultFocusValue: lastFocusedRuleKey, onUpFromFirstItem: focusHeader });
    $[15] = focusHeader;
    $[16] = lastFocusedRuleKey;
    $[17] = onCancel;
    $[18] = onSelect;
    $[19] = options;
    $[20] = t6;
    $[21] = t7;
    $[22] = t8;
  } else {
    t8 = $[22];
  }
  let t9;
  if ($[23] !== t5 || $[24] !== t8) {
    t9 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, t5, t8);
    $[23] = t5;
    $[24] = t8;
    $[25] = t9;
  } else {
    t9 = $[25];
  }
  return t9;
}
function PermissionRulesTab(t0) {
  const $ = c(27);
  let T0;
  let T1;
  let handleToolSelect;
  let rulesProps;
  let t1;
  let t2;
  let t3;
  let t4;
  let tab;
  if ($[0] !== t0) {
    const {
      tab: t52,
      getRulesOptions,
      handleToolSelect: t62,
      ...t72
    } = t0;
    tab = t52;
    handleToolSelect = t62;
    rulesProps = t72;
    T1 = ThemedBox_default;
    t2 = "column";
    t3 = tab === "allow" ? 0 : void 0;
    let t8;
    if ($[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t8 = {
        allow: "Blaude won't ask before using allowed tools.",
        ask: "Blaude will always ask for confirmation before using these tools.",
        deny: "Blaude will always reject requests to use denied tools."
      };
      $[10] = t8;
    } else {
      t8 = $[10];
    }
    const t9 = t8[tab];
    if ($[11] !== t9) {
      t4 = /* @__PURE__ */ createElement(ThemedText, null, t9);
      $[11] = t9;
      $[12] = t4;
    } else {
      t4 = $[12];
    }
    T0 = RulesTabContent;
    t1 = getRulesOptions(tab, rulesProps.searchQuery);
    $[0] = t0;
    $[1] = T0;
    $[2] = T1;
    $[3] = handleToolSelect;
    $[4] = rulesProps;
    $[5] = t1;
    $[6] = t2;
    $[7] = t3;
    $[8] = t4;
    $[9] = tab;
  } else {
    T0 = $[1];
    T1 = $[2];
    handleToolSelect = $[3];
    rulesProps = $[4];
    t1 = $[5];
    t2 = $[6];
    t3 = $[7];
    t4 = $[8];
    tab = $[9];
  }
  let t5;
  if ($[13] !== handleToolSelect || $[14] !== tab) {
    t5 = (v) => handleToolSelect(v, tab);
    $[13] = handleToolSelect;
    $[14] = tab;
    $[15] = t5;
  } else {
    t5 = $[15];
  }
  let t6;
  if ($[16] !== T0 || $[17] !== rulesProps || $[18] !== t1.options || $[19] !== t5) {
    t6 = /* @__PURE__ */ createElement(T0, { options: t1.options, onSelect: t5, ...rulesProps });
    $[16] = T0;
    $[17] = rulesProps;
    $[18] = t1.options;
    $[19] = t5;
    $[20] = t6;
  } else {
    t6 = $[20];
  }
  let t7;
  if ($[21] !== T1 || $[22] !== t2 || $[23] !== t3 || $[24] !== t4 || $[25] !== t6) {
    t7 = /* @__PURE__ */ createElement(T1, { flexDirection: t2, flexShrink: t3 }, t4, t6);
    $[21] = T1;
    $[22] = t2;
    $[23] = t3;
    $[24] = t4;
    $[25] = t6;
    $[26] = t7;
  } else {
    t7 = $[26];
  }
  return t7;
}
function PermissionRuleList(t0) {
  const $ = c(113);
  const {
    onExit,
    initialTab,
    onRetryDenials
  } = t0;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = getAutoModeDenials();
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const hasDenials = t1.length > 0;
  const defaultTab = initialTab ?? (hasDenials ? "recent" : "allow");
  let t2;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = [];
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const [changes, setChanges] = useState(t2);
  const toolPermissionContext = useAppState(_temp7);
  const setAppState = useSetAppState();
  const isTerminalFocused = useTerminalFocus();
  let t3;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = {
      approved: /* @__PURE__ */ new Set(),
      retry: /* @__PURE__ */ new Set(),
      denials: []
    };
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  const denialStateRef = useRef(t3);
  let t4;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = (s_0) => {
      denialStateRef.current = s_0;
    };
    $[3] = t4;
  } else {
    t4 = $[3];
  }
  const handleDenialStateChange = t4;
  const [selectedRule, setSelectedRule] = useState();
  const [lastFocusedRuleKey, setLastFocusedRuleKey] = useState();
  const [addingRuleToTab, setAddingRuleToTab] = useState(null);
  const [validatedRule, setValidatedRule] = useState(null);
  const [isAddingWorkspaceDirectory, setIsAddingWorkspaceDirectory] = useState(false);
  const [removingDirectory, setRemovingDirectory] = useState(null);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [headerFocused, setHeaderFocused] = useState(true);
  let t5;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = (focused) => {
      setHeaderFocused(focused);
    };
    $[4] = t5;
  } else {
    t5 = $[4];
  }
  const handleHeaderFocusChange = t5;
  let map;
  if ($[5] !== toolPermissionContext) {
    map = /* @__PURE__ */ new Map();
    getAllowRules(toolPermissionContext).forEach((rule) => {
      map.set(jsonStringify(rule), rule);
    });
    $[5] = toolPermissionContext;
    $[6] = map;
  } else {
    map = $[6];
  }
  const allowRulesByKey = map;
  let map_0;
  if ($[7] !== toolPermissionContext) {
    map_0 = /* @__PURE__ */ new Map();
    getDenyRules(toolPermissionContext).forEach((rule_0) => {
      map_0.set(jsonStringify(rule_0), rule_0);
    });
    $[7] = toolPermissionContext;
    $[8] = map_0;
  } else {
    map_0 = $[8];
  }
  const denyRulesByKey = map_0;
  let map_1;
  if ($[9] !== toolPermissionContext) {
    map_1 = /* @__PURE__ */ new Map();
    getAskRules(toolPermissionContext).forEach((rule_1) => {
      map_1.set(jsonStringify(rule_1), rule_1);
    });
    $[9] = toolPermissionContext;
    $[10] = map_1;
  } else {
    map_1 = $[10];
  }
  const askRulesByKey = map_1;
  let t6;
  if ($[11] !== allowRulesByKey || $[12] !== askRulesByKey || $[13] !== denyRulesByKey) {
    t6 = (tab, t72) => {
      const query = t72 === void 0 ? "" : t72;
      const rulesByKey = (() => {
        switch (tab) {
          case "allow": {
            return allowRulesByKey;
          }
          case "deny": {
            return denyRulesByKey;
          }
          case "ask": {
            return askRulesByKey;
          }
          case "workspace":
          case "recent": {
            return /* @__PURE__ */ new Map();
          }
        }
      })();
      const options = [];
      if (tab !== "workspace" && tab !== "recent" && !query) {
        options.push({
          label: `Add a new rule${figures_default.ellipsis}`,
          value: "add-new-rule"
        });
      }
      const sortedRuleKeys = Array.from(rulesByKey.keys()).sort((a, b) => {
        const ruleA = rulesByKey.get(a);
        const ruleB = rulesByKey.get(b);
        if (ruleA && ruleB) {
          const ruleAString = permissionRuleValueToString(ruleA.ruleValue).toLowerCase();
          const ruleBString = permissionRuleValueToString(ruleB.ruleValue).toLowerCase();
          return ruleAString.localeCompare(ruleBString);
        }
        return 0;
      });
      const lowerQuery = query.toLowerCase();
      for (const ruleKey of sortedRuleKeys) {
        const rule_2 = rulesByKey.get(ruleKey);
        if (rule_2) {
          const ruleString = permissionRuleValueToString(rule_2.ruleValue);
          if (query && !ruleString.toLowerCase().includes(lowerQuery)) {
            continue;
          }
          options.push({
            label: ruleString,
            value: ruleKey
          });
        }
      }
      return {
        options,
        rulesByKey
      };
    };
    $[11] = allowRulesByKey;
    $[12] = askRulesByKey;
    $[13] = denyRulesByKey;
    $[14] = t6;
  } else {
    t6 = $[14];
  }
  const getRulesOptions = t6;
  const exitState = useExitOnCtrlCDWithKeybindings();
  const isSearchModeActive = !selectedRule && !addingRuleToTab && !validatedRule && !isAddingWorkspaceDirectory && !removingDirectory;
  const t7 = isSearchModeActive && isSearchMode;
  let t8;
  if ($[15] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t8 = () => {
      setIsSearchMode(false);
    };
    $[15] = t8;
  } else {
    t8 = $[15];
  }
  let t9;
  if ($[16] !== t7) {
    t9 = {
      isActive: t7,
      onExit: t8
    };
    $[16] = t7;
    $[17] = t9;
  } else {
    t9 = $[17];
  }
  const {
    query: searchQuery,
    setQuery: setSearchQuery,
    cursorOffset: searchCursorOffset
  } = useSearchInput(t9);
  let t10;
  if ($[18] !== isSearchMode || $[19] !== isSearchModeActive || $[20] !== setSearchQuery) {
    t10 = (e) => {
      if (!isSearchModeActive) {
        return;
      }
      if (isSearchMode) {
        return;
      }
      if (e.ctrl || e.meta) {
        return;
      }
      if (e.key === "/") {
        e.preventDefault();
        setIsSearchMode(true);
        setSearchQuery("");
      } else {
        if (e.key.length === 1 && e.key !== "j" && e.key !== "k" && e.key !== "m" && e.key !== "i" && e.key !== "r" && e.key !== " ") {
          e.preventDefault();
          setIsSearchMode(true);
          setSearchQuery(e.key);
        }
      }
    };
    $[18] = isSearchMode;
    $[19] = isSearchModeActive;
    $[20] = setSearchQuery;
    $[21] = t10;
  } else {
    t10 = $[21];
  }
  const handleKeyDown = t10;
  let t11;
  if ($[22] !== getRulesOptions) {
    t11 = (selectedValue, tab_0) => {
      const {
        rulesByKey: rulesByKey_0
      } = getRulesOptions(tab_0);
      if (selectedValue === "add-new-rule") {
        setAddingRuleToTab(tab_0);
        return;
      } else {
        setSelectedRule(rulesByKey_0.get(selectedValue));
        return;
      }
    };
    $[22] = getRulesOptions;
    $[23] = t11;
  } else {
    t11 = $[23];
  }
  const handleToolSelect = t11;
  let t12;
  if ($[24] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t12 = () => {
      setAddingRuleToTab(null);
    };
    $[24] = t12;
  } else {
    t12 = $[24];
  }
  const handleRuleInputCancel = t12;
  let t13;
  if ($[25] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t13 = (ruleValue, ruleBehavior) => {
      setValidatedRule({
        ruleValue,
        ruleBehavior
      });
      setAddingRuleToTab(null);
    };
    $[25] = t13;
  } else {
    t13 = $[25];
  }
  const handleRuleInputSubmit = t13;
  let t14;
  if ($[26] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t14 = (rules, unreachable) => {
      setValidatedRule(null);
      for (const rule_3 of rules) {
        setChanges((prev) => [...prev, `Added ${rule_3.ruleBehavior} rule ${source_default.bold(permissionRuleValueToString(rule_3.ruleValue))}`]);
      }
      if (unreachable && unreachable.length > 0) {
        for (const u of unreachable) {
          const severity = u.shadowType === "deny" ? "blocked" : "shadowed";
          setChanges((prev_0) => [...prev_0, source_default.yellow(`${figures_default.warning} Warning: ${permissionRuleValueToString(u.rule.ruleValue)} is ${severity}`), source_default.dim(`  ${u.reason}`), source_default.dim(`  Fix: ${u.fix}`)]);
        }
      }
    };
    $[26] = t14;
  } else {
    t14 = $[26];
  }
  const handleAddRulesSuccess = t14;
  let t15;
  if ($[27] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t15 = () => {
      setValidatedRule(null);
    };
    $[27] = t15;
  } else {
    t15 = $[27];
  }
  const handleAddRuleCancel = t15;
  let t16;
  if ($[28] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t16 = () => setIsAddingWorkspaceDirectory(true);
    $[28] = t16;
  } else {
    t16 = $[28];
  }
  const handleRequestAddDirectory = t16;
  let t17;
  if ($[29] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t17 = (path) => setRemovingDirectory(path);
    $[29] = t17;
  } else {
    t17 = $[29];
  }
  const handleRequestRemoveDirectory = t17;
  let t18;
  if ($[30] !== changes || $[31] !== onExit || $[32] !== onRetryDenials) {
    t18 = () => {
      const s_1 = denialStateRef.current;
      const denialsFor = (set) => Array.from(set).map((idx) => s_1.denials[idx]).filter(_temp23);
      const retryDenials = denialsFor(s_1.retry);
      if (retryDenials.length > 0) {
        const commands = retryDenials.map(_temp32);
        onRetryDenials?.(commands);
        onExit(void 0, {
          shouldQuery: true,
          metaMessages: [`Permission granted for: ${commands.join(", ")}. You may now retry ${commands.length === 1 ? "this command" : "these commands"} if you would like.`]
        });
        return;
      }
      const approvedDenials = denialsFor(s_1.approved);
      if (approvedDenials.length > 0 || changes.length > 0) {
        const approvedMsg = approvedDenials.length > 0 ? [`Approved ${approvedDenials.map(_temp42).join(", ")}`] : [];
        onExit([...approvedMsg, ...changes].join("\n"));
      } else {
        onExit("Permissions dialog dismissed", {
          display: "system"
        });
      }
    };
    $[30] = changes;
    $[31] = onExit;
    $[32] = onRetryDenials;
    $[33] = t18;
  } else {
    t18 = $[33];
  }
  const handleRulesCancel = t18;
  const t19 = isSearchModeActive && !isSearchMode;
  let t20;
  if ($[34] !== t19) {
    t20 = {
      context: "Settings",
      isActive: t19
    };
    $[34] = t19;
    $[35] = t20;
  } else {
    t20 = $[35];
  }
  useKeybinding("confirm:no", handleRulesCancel, t20);
  let t21;
  if ($[36] !== getRulesOptions || $[37] !== selectedRule || $[38] !== setAppState || $[39] !== toolPermissionContext) {
    t21 = () => {
      if (!selectedRule) {
        return;
      }
      const {
        options: options_0
      } = getRulesOptions(selectedRule.ruleBehavior);
      const selectedKey = jsonStringify(selectedRule);
      const ruleKeys = options_0.filter(_temp52).map(_temp6);
      const currentIndex = ruleKeys.indexOf(selectedKey);
      let nextFocusKey;
      if (currentIndex !== -1) {
        if (currentIndex < ruleKeys.length - 1) {
          nextFocusKey = ruleKeys[currentIndex + 1];
        } else {
          if (currentIndex > 0) {
            nextFocusKey = ruleKeys[currentIndex - 1];
          }
        }
      }
      setLastFocusedRuleKey(nextFocusKey);
      deletePermissionRule({
        rule: selectedRule,
        initialContext: toolPermissionContext,
        setToolPermissionContext(toolPermissionContext_0) {
          setAppState((prev_1) => ({
            ...prev_1,
            toolPermissionContext: toolPermissionContext_0
          }));
        }
      });
      setChanges((prev_2) => [...prev_2, `Deleted ${selectedRule.ruleBehavior} rule ${source_default.bold(permissionRuleValueToString(selectedRule.ruleValue))}`]);
      setSelectedRule(void 0);
    };
    $[36] = getRulesOptions;
    $[37] = selectedRule;
    $[38] = setAppState;
    $[39] = toolPermissionContext;
    $[40] = t21;
  } else {
    t21 = $[40];
  }
  const handleDeleteRule = t21;
  if (selectedRule) {
    let t222;
    if ($[41] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t222 = () => setSelectedRule(void 0);
      $[41] = t222;
    } else {
      t222 = $[41];
    }
    let t232;
    if ($[42] !== handleDeleteRule || $[43] !== selectedRule) {
      t232 = /* @__PURE__ */ createElement(RuleDetails, { rule: selectedRule, onDelete: handleDeleteRule, onCancel: t222 });
      $[42] = handleDeleteRule;
      $[43] = selectedRule;
      $[44] = t232;
    } else {
      t232 = $[44];
    }
    return t232;
  }
  if (addingRuleToTab && addingRuleToTab !== "workspace" && addingRuleToTab !== "recent") {
    let t222;
    if ($[45] !== addingRuleToTab) {
      t222 = /* @__PURE__ */ createElement(PermissionRuleInput, { onCancel: handleRuleInputCancel, onSubmit: handleRuleInputSubmit, ruleBehavior: addingRuleToTab });
      $[45] = addingRuleToTab;
      $[46] = t222;
    } else {
      t222 = $[46];
    }
    return t222;
  }
  if (validatedRule) {
    let t222;
    if ($[47] !== validatedRule.ruleValue) {
      t222 = [validatedRule.ruleValue];
      $[47] = validatedRule.ruleValue;
      $[48] = t222;
    } else {
      t222 = $[48];
    }
    let t232;
    if ($[49] !== setAppState) {
      t232 = (toolPermissionContext_1) => {
        setAppState((prev_3) => ({
          ...prev_3,
          toolPermissionContext: toolPermissionContext_1
        }));
      };
      $[49] = setAppState;
      $[50] = t232;
    } else {
      t232 = $[50];
    }
    let t242;
    if ($[51] !== t222 || $[52] !== t232 || $[53] !== toolPermissionContext || $[54] !== validatedRule.ruleBehavior) {
      t242 = /* @__PURE__ */ createElement(AddPermissionRules, { onAddRules: handleAddRulesSuccess, onCancel: handleAddRuleCancel, ruleValues: t222, ruleBehavior: validatedRule.ruleBehavior, initialContext: toolPermissionContext, setToolPermissionContext: t232 });
      $[51] = t222;
      $[52] = t232;
      $[53] = toolPermissionContext;
      $[54] = validatedRule.ruleBehavior;
      $[55] = t242;
    } else {
      t242 = $[55];
    }
    return t242;
  }
  if (isAddingWorkspaceDirectory) {
    let t222;
    if ($[56] !== setAppState || $[57] !== toolPermissionContext) {
      t222 = (path_0, remember) => {
        const destination = remember ? "localSettings" : "session";
        const permissionUpdate = {
          type: "addDirectories",
          directories: [path_0],
          destination
        };
        const updatedContext = applyPermissionUpdate(toolPermissionContext, permissionUpdate);
        setAppState((prev_4) => ({
          ...prev_4,
          toolPermissionContext: updatedContext
        }));
        if (remember) {
          persistPermissionUpdate(permissionUpdate);
        }
        setChanges((prev_5) => [...prev_5, `Added directory ${source_default.bold(path_0)} to workspace${remember ? " and saved to local settings" : " for this session"}`]);
        setIsAddingWorkspaceDirectory(false);
      };
      $[56] = setAppState;
      $[57] = toolPermissionContext;
      $[58] = t222;
    } else {
      t222 = $[58];
    }
    let t232;
    if ($[59] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t232 = () => setIsAddingWorkspaceDirectory(false);
      $[59] = t232;
    } else {
      t232 = $[59];
    }
    let t242;
    if ($[60] !== t222 || $[61] !== toolPermissionContext) {
      t242 = /* @__PURE__ */ createElement(AddWorkspaceDirectory, { onAddDirectory: t222, onCancel: t232, permissionContext: toolPermissionContext });
      $[60] = t222;
      $[61] = toolPermissionContext;
      $[62] = t242;
    } else {
      t242 = $[62];
    }
    return t242;
  }
  if (removingDirectory) {
    let t222;
    if ($[63] !== removingDirectory) {
      t222 = () => {
        setChanges((prev_6) => [...prev_6, `Removed directory ${source_default.bold(removingDirectory)} from workspace`]);
        setRemovingDirectory(null);
      };
      $[63] = removingDirectory;
      $[64] = t222;
    } else {
      t222 = $[64];
    }
    let t232;
    if ($[65] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t232 = () => setRemovingDirectory(null);
      $[65] = t232;
    } else {
      t232 = $[65];
    }
    let t242;
    if ($[66] !== setAppState) {
      t242 = (toolPermissionContext_2) => {
        setAppState((prev_7) => ({
          ...prev_7,
          toolPermissionContext: toolPermissionContext_2
        }));
      };
      $[66] = setAppState;
      $[67] = t242;
    } else {
      t242 = $[67];
    }
    let t252;
    if ($[68] !== removingDirectory || $[69] !== t222 || $[70] !== t242 || $[71] !== toolPermissionContext) {
      t252 = /* @__PURE__ */ createElement(RemoveWorkspaceDirectory, { directoryPath: removingDirectory, onRemove: t222, onCancel: t232, permissionContext: toolPermissionContext, setPermissionContext: t242 });
      $[68] = removingDirectory;
      $[69] = t222;
      $[70] = t242;
      $[71] = toolPermissionContext;
      $[72] = t252;
    } else {
      t252 = $[72];
    }
    return t252;
  }
  let t22;
  if ($[73] !== getRulesOptions || $[74] !== handleRulesCancel || $[75] !== handleToolSelect || $[76] !== isSearchMode || $[77] !== isTerminalFocused || $[78] !== lastFocusedRuleKey || $[79] !== searchCursorOffset || $[80] !== searchQuery) {
    t22 = {
      searchQuery,
      isSearchMode,
      isFocused: isTerminalFocused,
      onCancel: handleRulesCancel,
      lastFocusedRuleKey,
      cursorOffset: searchCursorOffset,
      getRulesOptions,
      handleToolSelect,
      onHeaderFocusChange: handleHeaderFocusChange
    };
    $[73] = getRulesOptions;
    $[74] = handleRulesCancel;
    $[75] = handleToolSelect;
    $[76] = isSearchMode;
    $[77] = isTerminalFocused;
    $[78] = lastFocusedRuleKey;
    $[79] = searchCursorOffset;
    $[80] = searchQuery;
    $[81] = t22;
  } else {
    t22 = $[81];
  }
  const sharedRulesProps = t22;
  const isHidden = !!selectedRule || !!addingRuleToTab || !!validatedRule || isAddingWorkspaceDirectory || !!removingDirectory;
  const t23 = !isSearchMode;
  let t24;
  if ($[82] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t24 = /* @__PURE__ */ createElement(Tab, { id: "recent", title: "Recently denied" }, /* @__PURE__ */ createElement(RecentDenialsTab, { onHeaderFocusChange: handleHeaderFocusChange, onStateChange: handleDenialStateChange }));
    $[82] = t24;
  } else {
    t24 = $[82];
  }
  let t25;
  if ($[83] !== sharedRulesProps) {
    t25 = /* @__PURE__ */ createElement(Tab, { id: "allow", title: "Allow" }, /* @__PURE__ */ createElement(PermissionRulesTab, { tab: "allow", ...sharedRulesProps }));
    $[83] = sharedRulesProps;
    $[84] = t25;
  } else {
    t25 = $[84];
  }
  let t26;
  if ($[85] !== sharedRulesProps) {
    t26 = /* @__PURE__ */ createElement(Tab, { id: "ask", title: "Ask" }, /* @__PURE__ */ createElement(PermissionRulesTab, { tab: "ask", ...sharedRulesProps }));
    $[85] = sharedRulesProps;
    $[86] = t26;
  } else {
    t26 = $[86];
  }
  let t27;
  if ($[87] !== sharedRulesProps) {
    t27 = /* @__PURE__ */ createElement(Tab, { id: "deny", title: "Deny" }, /* @__PURE__ */ createElement(PermissionRulesTab, { tab: "deny", ...sharedRulesProps }));
    $[87] = sharedRulesProps;
    $[88] = t27;
  } else {
    t27 = $[88];
  }
  let t28;
  if ($[89] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t28 = /* @__PURE__ */ createElement(ThemedText, null, "Blaude can read files in the workspace, and make edits when auto-accept edits is on.");
    $[89] = t28;
  } else {
    t28 = $[89];
  }
  let t29;
  if ($[90] !== onExit || $[91] !== toolPermissionContext) {
    t29 = /* @__PURE__ */ createElement(Tab, { id: "workspace", title: "Workspace" }, /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, t28, /* @__PURE__ */ createElement(WorkspaceTab, { onExit, toolPermissionContext, onRequestAddDirectory: handleRequestAddDirectory, onRequestRemoveDirectory: handleRequestRemoveDirectory, onHeaderFocusChange: handleHeaderFocusChange })));
    $[90] = onExit;
    $[91] = toolPermissionContext;
    $[92] = t29;
  } else {
    t29 = $[92];
  }
  let t30;
  if ($[93] !== defaultTab || $[94] !== isHidden || $[95] !== t23 || $[96] !== t25 || $[97] !== t26 || $[98] !== t27 || $[99] !== t29) {
    t30 = /* @__PURE__ */ createElement(Tabs, { title: "Permissions:", color: "permission", defaultTab, hidden: isHidden, initialHeaderFocused: !hasDenials, navFromContent: t23 }, t24, t25, t26, t27, t29);
    $[93] = defaultTab;
    $[94] = isHidden;
    $[95] = t23;
    $[96] = t25;
    $[97] = t26;
    $[98] = t27;
    $[99] = t29;
    $[100] = t30;
  } else {
    t30 = $[100];
  }
  let t31;
  if ($[101] !== defaultTab || $[102] !== exitState.keyName || $[103] !== exitState.pending || $[104] !== headerFocused || $[105] !== isSearchMode) {
    t31 = /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1, paddingLeft: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, exitState.pending ? /* @__PURE__ */ createElement(Fragment, null, "Press ", exitState.keyName, " again to exit") : headerFocused ? /* @__PURE__ */ createElement(Fragment, null, "\u2190/\u2192 tab switch \xB7 \u2193 return \xB7 Esc cancel") : isSearchMode ? /* @__PURE__ */ createElement(Fragment, null, "Type to filter \xB7 Enter/\u2193 select \xB7 \u2191 tabs \xB7 Esc clear") : hasDenials && defaultTab === "recent" ? /* @__PURE__ */ createElement(Fragment, null, "Enter approve \xB7 r retry \xB7 \u2191\u2193 navigate \xB7 \u2190/\u2192 switch \xB7 Esc cancel") : /* @__PURE__ */ createElement(Fragment, null, "\u2191\u2193 navigate \xB7 Enter select \xB7 Type to search \xB7 \u2190/\u2192 switch \xB7 Esc cancel")));
    $[101] = defaultTab;
    $[102] = exitState.keyName;
    $[103] = exitState.pending;
    $[104] = headerFocused;
    $[105] = isSearchMode;
    $[106] = t31;
  } else {
    t31 = $[106];
  }
  let t32;
  if ($[107] !== t30 || $[108] !== t31) {
    t32 = /* @__PURE__ */ createElement(Pane, { color: "permission" }, t30, t31);
    $[107] = t30;
    $[108] = t31;
    $[109] = t32;
  } else {
    t32 = $[109];
  }
  let t33;
  if ($[110] !== handleKeyDown || $[111] !== t32) {
    t33 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", onKeyDown: handleKeyDown }, t32);
    $[110] = handleKeyDown;
    $[111] = t32;
    $[112] = t33;
  } else {
    t33 = $[112];
  }
  return t33;
}
function _temp6(opt_0) {
  return opt_0.value;
}
function _temp52(opt) {
  return opt.value !== "add-new-rule";
}
function _temp42(d_1) {
  return source_default.bold(d_1.display);
}
function _temp32(d_0) {
  return d_0.display;
}
function _temp23(d) {
  return d !== void 0;
}
function _temp7(s) {
  return s.toolPermissionContext;
}
var init_PermissionRuleList = __esm({
  "src/components/permissions/rules/PermissionRuleList.tsx"() {
    init_react_compiler_runtime();
    init_source();
    init_figures();
    init_react();
    init_react();
    init_AppState();
    init_PermissionUpdate();
    init_select();
    init_useExitOnCtrlCDWithKeybindings();
    init_useSearchInput();
    init_ink();
    init_useKeybinding();
    init_autoModeDenials();
    init_permissionRuleParser();
    init_permissions();
    init_slowOperations();
    init_Pane();
    init_Tabs();
    init_SearchBox();
    init_AddPermissionRules();
    init_AddWorkspaceDirectory();
    init_PermissionRuleDescription();
    init_PermissionRuleInput();
    init_RecentDenialsTab();
    init_RemoveWorkspaceDirectory();
    init_WorkspaceTab();
  }
});

// src/commands/permissions/permissions.tsx
var call;
var init_permissions2 = __esm({
  "src/commands/permissions/permissions.tsx"() {
    init_react();
    init_PermissionRuleList();
    init_messages();
    call = async (onDone, context) => {
      return /* @__PURE__ */ createElement(PermissionRuleList, { onExit: onDone, onRetryDenials: (commands) => {
        context.setMessages((prev) => [...prev, createPermissionRetryMessage(commands)]);
      } });
    };
  }
});
init_permissions2();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvcGVybWlzc2lvbnMvcnVsZXMvUGVybWlzc2lvblJ1bGVEZXNjcmlwdGlvbi50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvcGVybWlzc2lvbnMvcnVsZXMvQWRkUGVybWlzc2lvblJ1bGVzLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9wZXJtaXNzaW9ucy9ydWxlcy9QZXJtaXNzaW9uUnVsZUlucHV0LnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9wZXJtaXNzaW9ucy9ydWxlcy9SZWNlbnREZW5pYWxzVGFiLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9wZXJtaXNzaW9ucy9ydWxlcy9SZW1vdmVXb3Jrc3BhY2VEaXJlY3RvcnkudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL3Blcm1pc3Npb25zL3J1bGVzL1dvcmtzcGFjZVRhYi50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvcGVybWlzc2lvbnMvcnVsZXMvUGVybWlzc2lvblJ1bGVMaXN0LnRzeCIsICIuLi8uLi9zcmMvY29tbWFuZHMvcGVybWlzc2lvbnMvcGVybWlzc2lvbnMudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi8uLi9pbmsuanMnXG5pbXBvcnQgeyBCYXNoVG9vbCB9IGZyb20gJy4uLy4uLy4uL3Rvb2xzL0Jhc2hUb29sL0Jhc2hUb29sLmpzJ1xuaW1wb3J0IHR5cGUgeyBQZXJtaXNzaW9uUnVsZVZhbHVlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvcGVybWlzc2lvbnMvUGVybWlzc2lvblJ1bGUuanMnXG5cbnR5cGUgUnVsZVN1YnRpdGxlUHJvcHMgPSB7XG4gIHJ1bGVWYWx1ZTogUGVybWlzc2lvblJ1bGVWYWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gUGVybWlzc2lvblJ1bGVEZXNjcmlwdGlvbih7XG4gIHJ1bGVWYWx1ZSxcbn06IFJ1bGVTdWJ0aXRsZVByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgc3dpdGNoIChydWxlVmFsdWUudG9vbE5hbWUpIHtcbiAgICBjYXNlIEJhc2hUb29sLm5hbWU6IHtcbiAgICAgIGlmIChydWxlVmFsdWUucnVsZUNvbnRlbnQpIHtcbiAgICAgICAgaWYgKHJ1bGVWYWx1ZS5ydWxlQ29udGVudC5lbmRzV2l0aCgnOionKSkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgQW55IEJhc2ggY29tbWFuZCBzdGFydGluZyB3aXRoeycgJ31cbiAgICAgICAgICAgICAgPFRleHQgYm9sZD57cnVsZVZhbHVlLnJ1bGVDb250ZW50LnNsaWNlKDAsIC0yKX08L1RleHQ+XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgVGhlIEJhc2ggY29tbWFuZCA8VGV4dCBib2xkPntydWxlVmFsdWUucnVsZUNvbnRlbnR9PC9UZXh0PlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDxUZXh0IGRpbUNvbG9yPkFueSBCYXNoIGNvbW1hbmQ8L1RleHQ+XG4gICAgICB9XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGlmICghcnVsZVZhbHVlLnJ1bGVDb250ZW50KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICBBbnkgdXNlIG9mIHRoZSA8VGV4dCBib2xkPntydWxlVmFsdWUudG9vbE5hbWV9PC9UZXh0PiB0b29sXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvQ3VzdG9tU2VsZWN0L3NlbGVjdC5qcydcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uLy4uL2luay5qcydcbmltcG9ydCB0eXBlIHsgVG9vbFBlcm1pc3Npb25Db250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vVG9vbC5qcydcbmltcG9ydCB0eXBlIHtcbiAgUGVybWlzc2lvbkJlaGF2aW9yLFxuICBQZXJtaXNzaW9uUnVsZSxcbiAgUGVybWlzc2lvblJ1bGVWYWx1ZSxcbn0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvcGVybWlzc2lvbnMvUGVybWlzc2lvblJ1bGUuanMnXG5pbXBvcnQge1xuICBhcHBseVBlcm1pc3Npb25VcGRhdGUsXG4gIHBlcnNpc3RQZXJtaXNzaW9uVXBkYXRlLFxufSBmcm9tICcuLi8uLi8uLi91dGlscy9wZXJtaXNzaW9ucy9QZXJtaXNzaW9uVXBkYXRlLmpzJ1xuaW1wb3J0IHsgcGVybWlzc2lvblJ1bGVWYWx1ZVRvU3RyaW5nIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvcGVybWlzc2lvbnMvcGVybWlzc2lvblJ1bGVQYXJzZXIuanMnXG5pbXBvcnQge1xuICBkZXRlY3RVbnJlYWNoYWJsZVJ1bGVzLFxuICB0eXBlIFVucmVhY2hhYmxlUnVsZSxcbn0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvcGVybWlzc2lvbnMvc2hhZG93ZWRSdWxlRGV0ZWN0aW9uLmpzJ1xuaW1wb3J0IHsgU2FuZGJveE1hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi91dGlscy9zYW5kYm94L3NhbmRib3gtYWRhcHRlci5qcydcbmltcG9ydCB7XG4gIHR5cGUgRWRpdGFibGVTZXR0aW5nU291cmNlLFxuICBTT1VSQ0VTLFxufSBmcm9tICcuLi8uLi8uLi91dGlscy9zZXR0aW5ncy9jb25zdGFudHMuanMnXG5pbXBvcnQgeyBnZXRSZWxhdGl2ZVNldHRpbmdzRmlsZVBhdGhGb3JTb3VyY2UgfSBmcm9tICcuLi8uLi8uLi91dGlscy9zZXR0aW5ncy9zZXR0aW5ncy5qcydcbmltcG9ydCB7IHBsdXJhbCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3N0cmluZ1V0aWxzLmpzJ1xuaW1wb3J0IHR5cGUgeyBPcHRpb25XaXRoRGVzY3JpcHRpb24gfSBmcm9tICcuLi8uLi9DdXN0b21TZWxlY3Qvc2VsZWN0LmpzJ1xuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi4vLi4vZGVzaWduLXN5c3RlbS9EaWFsb2cuanMnXG5pbXBvcnQgeyBQZXJtaXNzaW9uUnVsZURlc2NyaXB0aW9uIH0gZnJvbSAnLi9QZXJtaXNzaW9uUnVsZURlc2NyaXB0aW9uLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gb3B0aW9uRm9yUGVybWlzc2lvblNhdmVEZXN0aW5hdGlvbihcbiAgc2F2ZURlc3RpbmF0aW9uOiBFZGl0YWJsZVNldHRpbmdTb3VyY2UsXG4pOiBPcHRpb25XaXRoRGVzY3JpcHRpb24ge1xuICBzd2l0Y2ggKHNhdmVEZXN0aW5hdGlvbikge1xuICAgIGNhc2UgJ2xvY2FsU2V0dGluZ3MnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGFiZWw6ICdQcm9qZWN0IHNldHRpbmdzIChsb2NhbCknLFxuICAgICAgICBkZXNjcmlwdGlvbjogYFNhdmVkIGluICR7Z2V0UmVsYXRpdmVTZXR0aW5nc0ZpbGVQYXRoRm9yU291cmNlKCdsb2NhbFNldHRpbmdzJyl9YCxcbiAgICAgICAgdmFsdWU6IHNhdmVEZXN0aW5hdGlvbixcbiAgICAgIH1cbiAgICBjYXNlICdwcm9qZWN0U2V0dGluZ3MnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGFiZWw6ICdQcm9qZWN0IHNldHRpbmdzJyxcbiAgICAgICAgZGVzY3JpcHRpb246IGBDaGVja2VkIGluIGF0ICR7Z2V0UmVsYXRpdmVTZXR0aW5nc0ZpbGVQYXRoRm9yU291cmNlKCdwcm9qZWN0U2V0dGluZ3MnKX1gLFxuICAgICAgICB2YWx1ZTogc2F2ZURlc3RpbmF0aW9uLFxuICAgICAgfVxuICAgIGNhc2UgJ3VzZXJTZXR0aW5ncyc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsYWJlbDogJ1VzZXIgc2V0dGluZ3MnLFxuICAgICAgICBkZXNjcmlwdGlvbjogYFNhdmVkIGluIGF0IH4vLmNsYXVkZS9zZXR0aW5ncy5qc29uYCxcbiAgICAgICAgdmFsdWU6IHNhdmVEZXN0aW5hdGlvbixcbiAgICAgIH1cbiAgfVxufVxuXG50eXBlIFByb3BzID0ge1xuICBvbkFkZFJ1bGVzOiAocnVsZXM6IFBlcm1pc3Npb25SdWxlW10sIHVucmVhY2hhYmxlPzogVW5yZWFjaGFibGVSdWxlW10pID0+IHZvaWRcbiAgb25DYW5jZWw6ICgpID0+IHZvaWRcbiAgcnVsZVZhbHVlczogUGVybWlzc2lvblJ1bGVWYWx1ZVtdXG4gIHJ1bGVCZWhhdmlvcjogUGVybWlzc2lvbkJlaGF2aW9yXG4gIGluaXRpYWxDb250ZXh0OiBUb29sUGVybWlzc2lvbkNvbnRleHRcbiAgc2V0VG9vbFBlcm1pc3Npb25Db250ZXh0OiAobmV3Q29udGV4dDogVG9vbFBlcm1pc3Npb25Db250ZXh0KSA9PiB2b2lkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBZGRQZXJtaXNzaW9uUnVsZXMoe1xuICBvbkFkZFJ1bGVzLFxuICBvbkNhbmNlbCxcbiAgcnVsZVZhbHVlcyxcbiAgcnVsZUJlaGF2aW9yLFxuICBpbml0aWFsQ29udGV4dCxcbiAgc2V0VG9vbFBlcm1pc3Npb25Db250ZXh0LFxufTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBhbGxPcHRpb25zID0gU09VUkNFUy5tYXAob3B0aW9uRm9yUGVybWlzc2lvblNhdmVEZXN0aW5hdGlvbilcblxuICBjb25zdCBvblNlbGVjdCA9IHVzZUNhbGxiYWNrKFxuICAgIChzZWxlY3RlZFZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChzZWxlY3RlZFZhbHVlID09PSAnY2FuY2VsJykge1xuICAgICAgICBvbkNhbmNlbCgpXG4gICAgICAgIHJldHVyblxuICAgICAgfSBlbHNlIGlmICgoU09VUkNFUyBhcyByZWFkb25seSBzdHJpbmdbXSkuaW5jbHVkZXMoc2VsZWN0ZWRWYWx1ZSkpIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSBzZWxlY3RlZFZhbHVlIGFzIEVkaXRhYmxlU2V0dGluZ1NvdXJjZVxuXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRDb250ZXh0ID0gYXBwbHlQZXJtaXNzaW9uVXBkYXRlKGluaXRpYWxDb250ZXh0LCB7XG4gICAgICAgICAgdHlwZTogJ2FkZFJ1bGVzJyxcbiAgICAgICAgICBydWxlczogcnVsZVZhbHVlcyxcbiAgICAgICAgICBiZWhhdmlvcjogcnVsZUJlaGF2aW9yLFxuICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIFBlcnNpc3QgdG8gc2V0dGluZ3NcbiAgICAgICAgcGVyc2lzdFBlcm1pc3Npb25VcGRhdGUoe1xuICAgICAgICAgIHR5cGU6ICdhZGRSdWxlcycsXG4gICAgICAgICAgcnVsZXM6IHJ1bGVWYWx1ZXMsXG4gICAgICAgICAgYmVoYXZpb3I6IHJ1bGVCZWhhdmlvcixcbiAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgfSlcblxuICAgICAgICBzZXRUb29sUGVybWlzc2lvbkNvbnRleHQodXBkYXRlZENvbnRleHQpXG5cbiAgICAgICAgY29uc3QgcnVsZXM6IFBlcm1pc3Npb25SdWxlW10gPSBydWxlVmFsdWVzLm1hcChydWxlVmFsdWUgPT4gKHtcbiAgICAgICAgICBydWxlVmFsdWUsXG4gICAgICAgICAgcnVsZUJlaGF2aW9yLFxuICAgICAgICAgIHNvdXJjZTogZGVzdGluYXRpb24sXG4gICAgICAgIH0pKVxuXG4gICAgICAgIC8vIENoZWNrIGZvciB1bnJlYWNoYWJsZSBydWxlcyBhbW9uZyB0aGUgb25lcyB3ZSBqdXN0IGFkZGVkXG4gICAgICAgIGNvbnN0IHNhbmRib3hBdXRvQWxsb3dFbmFibGVkID1cbiAgICAgICAgICBTYW5kYm94TWFuYWdlci5pc1NhbmRib3hpbmdFbmFibGVkKCkgJiZcbiAgICAgICAgICBTYW5kYm94TWFuYWdlci5pc0F1dG9BbGxvd0Jhc2hJZlNhbmRib3hlZEVuYWJsZWQoKVxuICAgICAgICBjb25zdCBhbGxVbnJlYWNoYWJsZSA9IGRldGVjdFVucmVhY2hhYmxlUnVsZXModXBkYXRlZENvbnRleHQsIHtcbiAgICAgICAgICBzYW5kYm94QXV0b0FsbG93RW5hYmxlZCxcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBGaWx0ZXIgdG8gb25seSBydWxlcyB3ZSBqdXN0IGFkZGVkXG4gICAgICAgIGNvbnN0IG5ld1VucmVhY2hhYmxlID0gYWxsVW5yZWFjaGFibGUuZmlsdGVyKHUgPT5cbiAgICAgICAgICBydWxlVmFsdWVzLnNvbWUoXG4gICAgICAgICAgICBydiA9PlxuICAgICAgICAgICAgICBydi50b29sTmFtZSA9PT0gdS5ydWxlLnJ1bGVWYWx1ZS50b29sTmFtZSAmJlxuICAgICAgICAgICAgICBydi5ydWxlQ29udGVudCA9PT0gdS5ydWxlLnJ1bGVWYWx1ZS5ydWxlQ29udGVudCxcbiAgICAgICAgICApLFxuICAgICAgICApXG5cbiAgICAgICAgb25BZGRSdWxlcyhcbiAgICAgICAgICBydWxlcyxcbiAgICAgICAgICBuZXdVbnJlYWNoYWJsZS5sZW5ndGggPiAwID8gbmV3VW5yZWFjaGFibGUgOiB1bmRlZmluZWQsXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIG9uQWRkUnVsZXMsXG4gICAgICBvbkNhbmNlbCxcbiAgICAgIHJ1bGVWYWx1ZXMsXG4gICAgICBydWxlQmVoYXZpb3IsXG4gICAgICBpbml0aWFsQ29udGV4dCxcbiAgICAgIHNldFRvb2xQZXJtaXNzaW9uQ29udGV4dCxcbiAgICBdLFxuICApXG5cbiAgY29uc3QgdGl0bGUgPSBgQWRkICR7cnVsZUJlaGF2aW9yfSBwZXJtaXNzaW9uICR7cGx1cmFsKHJ1bGVWYWx1ZXMubGVuZ3RoLCAncnVsZScpfWBcblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2cgdGl0bGU9e3RpdGxlfSBvbkNhbmNlbD17b25DYW5jZWx9IGNvbG9yPVwicGVybWlzc2lvblwiPlxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgcGFkZGluZ1g9ezJ9PlxuICAgICAgICB7cnVsZVZhbHVlcy5tYXAocnVsZVZhbHVlID0+IChcbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgIGtleT17cGVybWlzc2lvblJ1bGVWYWx1ZVRvU3RyaW5nKHJ1bGVWYWx1ZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRleHQgYm9sZD57cGVybWlzc2lvblJ1bGVWYWx1ZVRvU3RyaW5nKHJ1bGVWYWx1ZSl9PC9UZXh0PlxuICAgICAgICAgICAgPFBlcm1pc3Npb25SdWxlRGVzY3JpcHRpb24gcnVsZVZhbHVlPXtydWxlVmFsdWV9IC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICkpfVxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpblk9ezF9PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICB7cnVsZVZhbHVlcy5sZW5ndGggPT09IDFcbiAgICAgICAgICAgID8gJ1doZXJlIHNob3VsZCB0aGlzIHJ1bGUgYmUgc2F2ZWQ/J1xuICAgICAgICAgICAgOiAnV2hlcmUgc2hvdWxkIHRoZXNlIHJ1bGVzIGJlIHNhdmVkPyd9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFNlbGVjdCBvcHRpb25zPXthbGxPcHRpb25zfSBvbkNoYW5nZT17b25TZWxlY3R9IC8+XG4gICAgICA8L0JveD5cbiAgICA8L0RpYWxvZz5cbiAgKVxufVxuIiwgImltcG9ydCBmaWd1cmVzIGZyb20gJ2ZpZ3VyZXMnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgVGV4dElucHV0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvVGV4dElucHV0LmpzJ1xuaW1wb3J0IHsgdXNlRXhpdE9uQ3RybENEV2l0aEtleWJpbmRpbmdzIH0gZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlRXhpdE9uQ3RybENEV2l0aEtleWJpbmRpbmdzLmpzJ1xuaW1wb3J0IHsgdXNlVGVybWluYWxTaXplIH0gZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlVGVybWluYWxTaXplLmpzJ1xuaW1wb3J0IHsgQm94LCBOZXdsaW5lLCBUZXh0IH0gZnJvbSAnLi4vLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdXNlS2V5YmluZGluZyB9IGZyb20gJy4uLy4uLy4uL2tleWJpbmRpbmdzL3VzZUtleWJpbmRpbmcuanMnXG5pbXBvcnQgeyBCYXNoVG9vbCB9IGZyb20gJy4uLy4uLy4uL3Rvb2xzL0Jhc2hUb29sL0Jhc2hUb29sLmpzJ1xuaW1wb3J0IHsgV2ViRmV0Y2hUb29sIH0gZnJvbSAnLi4vLi4vLi4vdG9vbHMvV2ViRmV0Y2hUb29sL1dlYkZldGNoVG9vbC5qcydcbmltcG9ydCB0eXBlIHtcbiAgUGVybWlzc2lvbkJlaGF2aW9yLFxuICBQZXJtaXNzaW9uUnVsZVZhbHVlLFxufSBmcm9tICcuLi8uLi8uLi91dGlscy9wZXJtaXNzaW9ucy9QZXJtaXNzaW9uUnVsZS5qcydcbmltcG9ydCB7XG4gIHBlcm1pc3Npb25SdWxlVmFsdWVGcm9tU3RyaW5nLFxuICBwZXJtaXNzaW9uUnVsZVZhbHVlVG9TdHJpbmcsXG59IGZyb20gJy4uLy4uLy4uL3V0aWxzL3Blcm1pc3Npb25zL3Blcm1pc3Npb25SdWxlUGFyc2VyLmpzJ1xuXG5leHBvcnQgdHlwZSBQZXJtaXNzaW9uUnVsZUlucHV0UHJvcHMgPSB7XG4gIG9uQ2FuY2VsOiAoKSA9PiB2b2lkXG4gIG9uU3VibWl0OiAoXG4gICAgcnVsZVZhbHVlOiBQZXJtaXNzaW9uUnVsZVZhbHVlLFxuICAgIHJ1bGVCZWhhdmlvcjogUGVybWlzc2lvbkJlaGF2aW9yLFxuICApID0+IHZvaWRcbiAgcnVsZUJlaGF2aW9yOiBQZXJtaXNzaW9uQmVoYXZpb3Jcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBlcm1pc3Npb25SdWxlSW5wdXQoe1xuICBvbkNhbmNlbCxcbiAgb25TdWJtaXQsXG4gIHJ1bGVCZWhhdmlvcixcbn06IFBlcm1pc3Npb25SdWxlSW5wdXRQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbY3Vyc29yT2Zmc2V0LCBzZXRDdXJzb3JPZmZzZXRdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgZXhpdFN0YXRlID0gdXNlRXhpdE9uQ3RybENEV2l0aEtleWJpbmRpbmdzKClcblxuICAvLyBVc2UgY29uZmlndXJhYmxlIGtleWJpbmRpbmcgZm9yIEVTQyB0byBjYW5jZWxcbiAgLy8gVXNlIFNldHRpbmdzIGNvbnRleHQgc28gJ24nIGtleSBkb2Vzbid0IGNhbmNlbCAoYWxsb3dzIHR5cGluZyAnbicgaW4gaW5wdXQpXG4gIHVzZUtleWJpbmRpbmcoJ2NvbmZpcm06bm8nLCBvbkNhbmNlbCwgeyBjb250ZXh0OiAnU2V0dGluZ3MnIH0pXG5cbiAgY29uc3QgeyBjb2x1bW5zIH0gPSB1c2VUZXJtaW5hbFNpemUoKVxuICBjb25zdCB0ZXh0SW5wdXRDb2x1bW5zID0gY29sdW1ucyAtIDZcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHRyaW1tZWRWYWx1ZSA9IHZhbHVlLnRyaW0oKVxuICAgIGlmICh0cmltbWVkVmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgcnVsZVZhbHVlID0gcGVybWlzc2lvblJ1bGVWYWx1ZUZyb21TdHJpbmcodHJpbW1lZFZhbHVlKVxuICAgIG9uU3VibWl0KHJ1bGVWYWx1ZSwgcnVsZUJlaGF2aW9yKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveFxuICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgZ2FwPXsxfVxuICAgICAgICBib3JkZXJTdHlsZT1cInJvdW5kXCJcbiAgICAgICAgcGFkZGluZ0xlZnQ9ezF9XG4gICAgICAgIHBhZGRpbmdSaWdodD17MX1cbiAgICAgICAgYm9yZGVyQ29sb3I9XCJwZXJtaXNzaW9uXCJcbiAgICAgID5cbiAgICAgICAgPFRleHQgYm9sZCBjb2xvcj1cInBlcm1pc3Npb25cIj5cbiAgICAgICAgICBBZGQge3J1bGVCZWhhdmlvcn0gcGVybWlzc2lvbiBydWxlXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICBQZXJtaXNzaW9uIHJ1bGVzIGFyZSBhIHRvb2wgbmFtZSwgb3B0aW9uYWxseSBmb2xsb3dlZCBieSBhIHNwZWNpZmllclxuICAgICAgICAgICAgaW4gcGFyZW50aGVzZXMuXG4gICAgICAgICAgICA8TmV3bGluZSAvPlxuICAgICAgICAgICAgZS5nLix7JyAnfVxuICAgICAgICAgICAgPFRleHQgYm9sZD5cbiAgICAgICAgICAgICAge3Blcm1pc3Npb25SdWxlVmFsdWVUb1N0cmluZyh7IHRvb2xOYW1lOiBXZWJGZXRjaFRvb2wubmFtZSB9KX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IGJvbGQ9e2ZhbHNlfT4gb3IgPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgYm9sZD5cbiAgICAgICAgICAgICAge3Blcm1pc3Npb25SdWxlVmFsdWVUb1N0cmluZyh7XG4gICAgICAgICAgICAgICAgdG9vbE5hbWU6IEJhc2hUb29sLm5hbWUsXG4gICAgICAgICAgICAgICAgcnVsZUNvbnRlbnQ6ICdsczoqJyxcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxCb3ggYm9yZGVyRGltQ29sb3IgYm9yZGVyU3R5bGU9XCJyb3VuZFwiIG1hcmdpblk9ezF9IHBhZGRpbmdMZWZ0PXsxfT5cbiAgICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgICAgc2hvd0N1cnNvclxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldElucHV0VmFsdWV9XG4gICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgRW50ZXIgcGVybWlzc2lvbiBydWxlJHtmaWd1cmVzLmVsbGlwc2lzfWB9XG4gICAgICAgICAgICAgIGNvbHVtbnM9e3RleHRJbnB1dENvbHVtbnN9XG4gICAgICAgICAgICAgIGN1cnNvck9mZnNldD17Y3Vyc29yT2Zmc2V0fVxuICAgICAgICAgICAgICBvbkNoYW5nZUN1cnNvck9mZnNldD17c2V0Q3Vyc29yT2Zmc2V0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3ggbWFyZ2luTGVmdD17M30+XG4gICAgICAgIHtleGl0U3RhdGUucGVuZGluZyA/IChcbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5QcmVzcyB7ZXhpdFN0YXRlLmtleU5hbWV9IGFnYWluIHRvIGV4aXQ8L1RleHQ+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+RW50ZXIgdG8gc3VibWl0IMK3IEVzYyB0byBjYW5jZWw8L1RleHQ+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICA8Lz5cbiAgKVxufVxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjdXN0b20tcnVsZXMvcHJlZmVyLXVzZS1rZXliaW5kaW5ncyAtLSAncicgaXMgYSB2aWV3LXNwZWNpZmljIGtleSwgbm90IGEgZ2xvYmFsIGtleWJpbmRpbmdcbmltcG9ydCB7IEJveCwgVGV4dCwgdXNlSW5wdXQgfSBmcm9tICcuLi8uLi8uLi9pbmsuanMnXG5pbXBvcnQge1xuICB0eXBlIEF1dG9Nb2RlRGVuaWFsLFxuICBnZXRBdXRvTW9kZURlbmlhbHMsXG59IGZyb20gJy4uLy4uLy4uL3V0aWxzL2F1dG9Nb2RlRGVuaWFscy5qcydcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJy4uLy4uL0N1c3RvbVNlbGVjdC9zZWxlY3QuanMnXG5pbXBvcnQgeyBTdGF0dXNJY29uIH0gZnJvbSAnLi4vLi4vZGVzaWduLXN5c3RlbS9TdGF0dXNJY29uLmpzJ1xuaW1wb3J0IHsgdXNlVGFiSGVhZGVyRm9jdXMgfSBmcm9tICcuLi8uLi9kZXNpZ24tc3lzdGVtL1RhYnMuanMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9uSGVhZGVyRm9jdXNDaGFuZ2U/OiAoZm9jdXNlZDogYm9vbGVhbikgPT4gdm9pZFxuICAvKiogQ2FsbGVkIHdoZW4gYXBwcm92ZWQvcmV0cnkgc3RhdGUgY2hhbmdlcyBzbyBwYXJlbnQgY2FuIGFjdCBvbiBleGl0ICovXG4gIG9uU3RhdGVDaGFuZ2U6IChzdGF0ZToge1xuICAgIGFwcHJvdmVkOiBTZXQ8bnVtYmVyPlxuICAgIHJldHJ5OiBTZXQ8bnVtYmVyPlxuICAgIGRlbmlhbHM6IHJlYWRvbmx5IEF1dG9Nb2RlRGVuaWFsW11cbiAgfSkgPT4gdm9pZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gUmVjZW50RGVuaWFsc1RhYih7XG4gIG9uSGVhZGVyRm9jdXNDaGFuZ2UsXG4gIG9uU3RhdGVDaGFuZ2UsXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IHsgaGVhZGVyRm9jdXNlZCwgZm9jdXNIZWFkZXIgfSA9IHVzZVRhYkhlYWRlckZvY3VzKClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBvbkhlYWRlckZvY3VzQ2hhbmdlPy4oaGVhZGVyRm9jdXNlZClcbiAgfSwgW2hlYWRlckZvY3VzZWQsIG9uSGVhZGVyRm9jdXNDaGFuZ2VdKVxuXG4gIC8vIFNuYXBzaG90IG9uIG1vdW50IOKAlCBhcHByb3ZlZC9yZXRyeSBTZXRzIGtleSBieSBpbmRleCwgYW5kIHRoZSBsaXZlIHN0b3JlXG4gIC8vIHByZXBlbmRzLiBBIGNvbmN1cnJlbnQgZGVuaWFsIHdvdWxkIHNoaWZ0IGFsbCBpbmRpY2VzIG1pZC1lZGl0LlxuICBjb25zdCBbZGVuaWFsc10gPSB1c2VTdGF0ZSgoKSA9PiBnZXRBdXRvTW9kZURlbmlhbHMoKSlcblxuICBjb25zdCBbYXBwcm92ZWQsIHNldEFwcHJvdmVkXSA9IHVzZVN0YXRlPFNldDxudW1iZXI+PigoKSA9PiBuZXcgU2V0KCkpXG4gIGNvbnN0IFtyZXRyeSwgc2V0UmV0cnldID0gdXNlU3RhdGU8U2V0PG51bWJlcj4+KCgpID0+IG5ldyBTZXQoKSlcbiAgY29uc3QgW2ZvY3VzZWRJZHgsIHNldEZvY3VzZWRJZHhdID0gdXNlU3RhdGUoMClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG9uU3RhdGVDaGFuZ2UoeyBhcHByb3ZlZCwgcmV0cnksIGRlbmlhbHMgfSlcbiAgfSwgW2FwcHJvdmVkLCByZXRyeSwgZGVuaWFscywgb25TdGF0ZUNoYW5nZV0pXG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gdXNlQ2FsbGJhY2soKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBpZHggPSBOdW1iZXIodmFsdWUpXG4gICAgc2V0QXBwcm92ZWQocHJldiA9PiB7XG4gICAgICBjb25zdCBuZXh0ID0gbmV3IFNldChwcmV2KVxuICAgICAgaWYgKG5leHQuaGFzKGlkeCkpIG5leHQuZGVsZXRlKGlkeClcbiAgICAgIGVsc2UgbmV4dC5hZGQoaWR4KVxuICAgICAgcmV0dXJuIG5leHRcbiAgICB9KVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVGb2N1cyA9IHVzZUNhbGxiYWNrKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0Rm9jdXNlZElkeChOdW1iZXIodmFsdWUpKVxuICB9LCBbXSlcblxuICB1c2VJbnB1dChcbiAgICAoaW5wdXQsIF9rZXkpID0+IHtcbiAgICAgIGlmIChpbnB1dCA9PT0gJ3InKSB7XG4gICAgICAgIHNldFJldHJ5KHByZXYgPT4ge1xuICAgICAgICAgIGNvbnN0IG5leHQgPSBuZXcgU2V0KHByZXYpXG4gICAgICAgICAgaWYgKG5leHQuaGFzKGZvY3VzZWRJZHgpKSBuZXh0LmRlbGV0ZShmb2N1c2VkSWR4KVxuICAgICAgICAgIGVsc2UgbmV4dC5hZGQoZm9jdXNlZElkeClcbiAgICAgICAgICByZXR1cm4gbmV4dFxuICAgICAgICB9KVxuICAgICAgICAvLyBSZXRyeSBpbXBsaWVzIGFwcHJvdmVcbiAgICAgICAgc2V0QXBwcm92ZWQocHJldiA9PiB7XG4gICAgICAgICAgaWYgKHByZXYuaGFzKGZvY3VzZWRJZHgpKSByZXR1cm4gcHJldlxuICAgICAgICAgIGNvbnN0IG5leHQgPSBuZXcgU2V0KHByZXYpXG4gICAgICAgICAgbmV4dC5hZGQoZm9jdXNlZElkeClcbiAgICAgICAgICByZXR1cm4gbmV4dFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgeyBpc0FjdGl2ZTogZGVuaWFscy5sZW5ndGggPiAwIH0sXG4gIClcblxuICBpZiAoZGVuaWFscy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgIE5vIHJlY2VudCBkZW5pYWxzLiBDb21tYW5kcyBkZW5pZWQgYnkgdGhlIGF1dG8gbW9kZSBjbGFzc2lmaWVyIHdpbGxcbiAgICAgICAgYXBwZWFyIGhlcmUuXG4gICAgICA8L1RleHQ+XG4gICAgKVxuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IGRlbmlhbHMubWFwKChkLCBpZHgpID0+IHtcbiAgICBjb25zdCBpc0FwcHJvdmVkID0gYXBwcm92ZWQuaGFzKGlkeClcbiAgICBjb25zdCBzdWZmaXggPSByZXRyeS5oYXMoaWR4KSA/ICcgKHJldHJ5KScgOiAnJ1xuICAgIHJldHVybiB7XG4gICAgICBsYWJlbDogKFxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8U3RhdHVzSWNvbiBzdGF0dXM9e2lzQXBwcm92ZWQgPyAnc3VjY2VzcycgOiAnZXJyb3InfSB3aXRoU3BhY2UgLz5cbiAgICAgICAgICB7ZC5kaXNwbGF5fVxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPntzdWZmaXh9PC9UZXh0PlxuICAgICAgICA8L1RleHQ+XG4gICAgICApLFxuICAgICAgdmFsdWU6IFN0cmluZyhpZHgpLFxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgPFRleHQ+Q29tbWFuZHMgcmVjZW50bHkgZGVuaWVkIGJ5IHRoZSBhdXRvIG1vZGUgY2xhc3NpZmllci48L1RleHQ+XG4gICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3R9XG4gICAgICAgICAgb25Gb2N1cz17aGFuZGxlRm9jdXN9XG4gICAgICAgICAgdmlzaWJsZU9wdGlvbkNvdW50PXtNYXRoLm1pbigxMCwgb3B0aW9ucy5sZW5ndGgpfVxuICAgICAgICAgIGlzRGlzYWJsZWQ9e2hlYWRlckZvY3VzZWR9XG4gICAgICAgICAgb25VcEZyb21GaXJzdEl0ZW09e2ZvY3VzSGVhZGVyfVxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gIClcbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0N1c3RvbVNlbGVjdC9zZWxlY3QuanMnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi8uLi8uLi9pbmsuanMnXG5pbXBvcnQgdHlwZSB7IFRvb2xQZXJtaXNzaW9uQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL1Rvb2wuanMnXG5pbXBvcnQgeyBhcHBseVBlcm1pc3Npb25VcGRhdGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy9wZXJtaXNzaW9ucy9QZXJtaXNzaW9uVXBkYXRlLmpzJ1xuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi4vLi4vZGVzaWduLXN5c3RlbS9EaWFsb2cuanMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGRpcmVjdG9yeVBhdGg6IHN0cmluZ1xuICBvblJlbW92ZTogKCkgPT4gdm9pZFxuICBvbkNhbmNlbDogKCkgPT4gdm9pZFxuICBwZXJtaXNzaW9uQ29udGV4dDogVG9vbFBlcm1pc3Npb25Db250ZXh0XG4gIHNldFBlcm1pc3Npb25Db250ZXh0OiAoY29udGV4dDogVG9vbFBlcm1pc3Npb25Db250ZXh0KSA9PiB2b2lkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSZW1vdmVXb3Jrc3BhY2VEaXJlY3Rvcnkoe1xuICBkaXJlY3RvcnlQYXRoLFxuICBvblJlbW92ZSxcbiAgb25DYW5jZWwsXG4gIHBlcm1pc3Npb25Db250ZXh0LFxuICBzZXRQZXJtaXNzaW9uQ29udGV4dCxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgaGFuZGxlUmVtb3ZlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRDb250ZXh0ID0gYXBwbHlQZXJtaXNzaW9uVXBkYXRlKHBlcm1pc3Npb25Db250ZXh0LCB7XG4gICAgICB0eXBlOiAncmVtb3ZlRGlyZWN0b3JpZXMnLFxuICAgICAgZGlyZWN0b3JpZXM6IFtkaXJlY3RvcnlQYXRoXSxcbiAgICAgIGRlc3RpbmF0aW9uOiAnc2Vzc2lvbicsXG4gICAgfSlcblxuICAgIHNldFBlcm1pc3Npb25Db250ZXh0KHVwZGF0ZWRDb250ZXh0KVxuICAgIG9uUmVtb3ZlKClcbiAgfSwgW2RpcmVjdG9yeVBhdGgsIHBlcm1pc3Npb25Db250ZXh0LCBzZXRQZXJtaXNzaW9uQ29udGV4dCwgb25SZW1vdmVdKVxuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdCA9IHVzZUNhbGxiYWNrKFxuICAgICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAodmFsdWUgPT09ICd5ZXMnKSB7XG4gICAgICAgIGhhbmRsZVJlbW92ZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbkNhbmNlbCgpXG4gICAgICB9XG4gICAgfSxcbiAgICBbaGFuZGxlUmVtb3ZlLCBvbkNhbmNlbF0sXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2dcbiAgICAgIHRpdGxlPVwiUmVtb3ZlIGRpcmVjdG9yeSBmcm9tIHdvcmtzcGFjZT9cIlxuICAgICAgb25DYW5jZWw9e29uQ2FuY2VsfVxuICAgICAgY29sb3I9XCJlcnJvclwiXG4gICAgPlxuICAgICAgPEJveCBtYXJnaW5YPXsyfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIDxUZXh0IGJvbGQ+e2RpcmVjdG9yeVBhdGh9PC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgICA8VGV4dD5cbiAgICAgICAgQ2xhdWRlIENvZGUgd2lsbCBubyBsb25nZXIgaGF2ZSBhY2Nlc3MgdG8gZmlsZXMgaW4gdGhpcyBkaXJlY3RvcnkuXG4gICAgICA8L1RleHQ+XG4gICAgICA8U2VsZWN0XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3R9XG4gICAgICAgIG9uQ2FuY2VsPXtvbkNhbmNlbH1cbiAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgIHsgbGFiZWw6ICdZZXMnLCB2YWx1ZTogJ3llcycgfSxcbiAgICAgICAgICB7IGxhYmVsOiAnTm8nLCB2YWx1ZTogJ25vJyB9LFxuICAgICAgICBdfVxuICAgICAgLz5cbiAgICA8L0RpYWxvZz5cbiAgKVxufVxuIiwgImltcG9ydCBmaWd1cmVzIGZyb20gJ2ZpZ3VyZXMnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldE9yaWdpbmFsQ3dkIH0gZnJvbSAnLi4vLi4vLi4vYm9vdHN0cmFwL3N0YXRlLmpzJ1xuaW1wb3J0IHR5cGUgeyBDb21tYW5kUmVzdWx0RGlzcGxheSB9IGZyb20gJy4uLy4uLy4uL2NvbW1hbmRzLmpzJ1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9DdXN0b21TZWxlY3Qvc2VsZWN0LmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHR5cGUgeyBUb29sUGVybWlzc2lvbkNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9Ub29sLmpzJ1xuaW1wb3J0IHsgdXNlVGFiSGVhZGVyRm9jdXMgfSBmcm9tICcuLi8uLi9kZXNpZ24tc3lzdGVtL1RhYnMuanMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9uRXhpdDogKFxuICAgIHJlc3VsdD86IHN0cmluZyxcbiAgICBvcHRpb25zPzogeyBkaXNwbGF5PzogQ29tbWFuZFJlc3VsdERpc3BsYXkgfSxcbiAgKSA9PiB2b2lkXG4gIHRvb2xQZXJtaXNzaW9uQ29udGV4dDogVG9vbFBlcm1pc3Npb25Db250ZXh0XG4gIG9uUmVxdWVzdEFkZERpcmVjdG9yeTogKCkgPT4gdm9pZFxuICBvblJlcXVlc3RSZW1vdmVEaXJlY3Rvcnk6IChwYXRoOiBzdHJpbmcpID0+IHZvaWRcbiAgb25IZWFkZXJGb2N1c0NoYW5nZT86IChmb2N1c2VkOiBib29sZWFuKSA9PiB2b2lkXG59XG5cbnR5cGUgRGlyZWN0b3J5SXRlbSA9IHtcbiAgcGF0aDogc3RyaW5nXG4gIGlzQ3VycmVudDogYm9vbGVhblxuICBpc0RlbGV0YWJsZTogYm9vbGVhblxufVxuXG5leHBvcnQgZnVuY3Rpb24gV29ya3NwYWNlVGFiKHtcbiAgb25FeGl0LFxuICB0b29sUGVybWlzc2lvbkNvbnRleHQsXG4gIG9uUmVxdWVzdEFkZERpcmVjdG9yeSxcbiAgb25SZXF1ZXN0UmVtb3ZlRGlyZWN0b3J5LFxuICBvbkhlYWRlckZvY3VzQ2hhbmdlLFxufTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCB7IGhlYWRlckZvY3VzZWQsIGZvY3VzSGVhZGVyIH0gPSB1c2VUYWJIZWFkZXJGb2N1cygpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgb25IZWFkZXJGb2N1c0NoYW5nZT8uKGhlYWRlckZvY3VzZWQpXG4gIH0sIFtoZWFkZXJGb2N1c2VkLCBvbkhlYWRlckZvY3VzQ2hhbmdlXSlcbiAgLy8gR2V0IG9ubHkgYWRkaXRpb25hbCB3b3Jrc3BhY2UgZGlyZWN0b3JpZXMgKG5vdCB0aGUgY3VycmVudCB3b3JraW5nIGRpcmVjdG9yeSlcbiAgY29uc3QgYWRkaXRpb25hbERpcmVjdG9yaWVzID0gUmVhY3QudXNlTWVtbygoKTogRGlyZWN0b3J5SXRlbVtdID0+IHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShcbiAgICAgIHRvb2xQZXJtaXNzaW9uQ29udGV4dC5hZGRpdGlvbmFsV29ya2luZ0RpcmVjdG9yaWVzLmtleXMoKSxcbiAgICApLm1hcChwYXRoID0+ICh7XG4gICAgICBwYXRoLFxuICAgICAgaXNDdXJyZW50OiBmYWxzZSxcbiAgICAgIGlzRGVsZXRhYmxlOiB0cnVlLFxuICAgIH0pKVxuICB9LCBbdG9vbFBlcm1pc3Npb25Db250ZXh0LmFkZGl0aW9uYWxXb3JraW5nRGlyZWN0b3JpZXNdKVxuXG4gIGNvbnN0IGhhbmRsZURpcmVjdG9yeVNlbGVjdCA9IHVzZUNhbGxiYWNrKFxuICAgIChzZWxlY3RlZFZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChzZWxlY3RlZFZhbHVlID09PSAnYWRkLWRpcmVjdG9yeScpIHtcbiAgICAgICAgb25SZXF1ZXN0QWRkRGlyZWN0b3J5KClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRpcmVjdG9yeSA9IGFkZGl0aW9uYWxEaXJlY3Rvcmllcy5maW5kKFxuICAgICAgICBkID0+IGQucGF0aCA9PT0gc2VsZWN0ZWRWYWx1ZSxcbiAgICAgIClcbiAgICAgIGlmIChkaXJlY3RvcnkgJiYgZGlyZWN0b3J5LmlzRGVsZXRhYmxlKSB7XG4gICAgICAgIG9uUmVxdWVzdFJlbW92ZURpcmVjdG9yeShkaXJlY3RvcnkucGF0aClcbiAgICAgIH1cbiAgICB9LFxuICAgIFthZGRpdGlvbmFsRGlyZWN0b3JpZXMsIG9uUmVxdWVzdEFkZERpcmVjdG9yeSwgb25SZXF1ZXN0UmVtb3ZlRGlyZWN0b3J5XSxcbiAgKVxuXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9IHVzZUNhbGxiYWNrKFxuICAgICgpID0+IG9uRXhpdCgnV29ya3NwYWNlIGRpYWxvZyBkaXNtaXNzZWQnLCB7IGRpc3BsYXk6ICdzeXN0ZW0nIH0pLFxuICAgIFtvbkV4aXRdLFxuICApXG5cbiAgLy8gTWFpbiBsaXN0IHZpZXcgb3B0aW9uc1xuICBjb25zdCBvcHRpb25zID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3Qgb3B0cyA9IGFkZGl0aW9uYWxEaXJlY3Rvcmllcy5tYXAoZGlyID0+ICh7XG4gICAgICBsYWJlbDogZGlyLnBhdGgsXG4gICAgICB2YWx1ZTogZGlyLnBhdGgsXG4gICAgfSkpXG5cbiAgICBvcHRzLnB1c2goe1xuICAgICAgbGFiZWw6IGBBZGQgZGlyZWN0b3J5JHtmaWd1cmVzLmVsbGlwc2lzfWAsXG4gICAgICB2YWx1ZTogJ2FkZC1kaXJlY3RvcnknLFxuICAgIH0pXG5cbiAgICByZXR1cm4gb3B0c1xuICB9LCBbYWRkaXRpb25hbERpcmVjdG9yaWVzXSlcblxuICAvLyBNYWluIGxpc3Qgdmlld1xuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpbkJvdHRvbT17MX0+XG4gICAgICB7LyogQ3VycmVudCB3b3JraW5nIGRpcmVjdG9yeSBzZWN0aW9uICovfVxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwicm93XCIgbWFyZ2luVG9wPXsxfSBtYXJnaW5MZWZ0PXsyfSBnYXA9ezF9PlxuICAgICAgICA8VGV4dD57YC0gICR7Z2V0T3JpZ2luYWxDd2QoKX1gfTwvVGV4dD5cbiAgICAgICAgPFRleHQgZGltQ29sb3I+KE9yaWdpbmFsIHdvcmtpbmcgZGlyZWN0b3J5KTwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgICAgPFNlbGVjdFxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlRGlyZWN0b3J5U2VsZWN0fVxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfVxuICAgICAgICB2aXNpYmxlT3B0aW9uQ291bnQ9e01hdGgubWluKDEwLCBvcHRpb25zLmxlbmd0aCl9XG4gICAgICAgIG9uVXBGcm9tRmlyc3RJdGVtPXtmb2N1c0hlYWRlcn1cbiAgICAgICAgaXNEaXNhYmxlZD17aGVhZGVyRm9jdXNlZH1cbiAgICAgIC8+XG4gICAgPC9Cb3g+XG4gIClcbn1cbiIsICJpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnXG5pbXBvcnQgZmlndXJlcyBmcm9tICdmaWd1cmVzJ1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VBcHBTdGF0ZSwgdXNlU2V0QXBwU3RhdGUgfSBmcm9tICdzcmMvc3RhdGUvQXBwU3RhdGUuanMnXG5pbXBvcnQge1xuICBhcHBseVBlcm1pc3Npb25VcGRhdGUsXG4gIHBlcnNpc3RQZXJtaXNzaW9uVXBkYXRlLFxufSBmcm9tICdzcmMvdXRpbHMvcGVybWlzc2lvbnMvUGVybWlzc2lvblVwZGF0ZS5qcydcbmltcG9ydCB0eXBlIHsgUGVybWlzc2lvblVwZGF0ZURlc3RpbmF0aW9uIH0gZnJvbSAnc3JjL3V0aWxzL3Blcm1pc3Npb25zL1Blcm1pc3Npb25VcGRhdGVTY2hlbWEuanMnXG5pbXBvcnQgdHlwZSB7IENvbW1hbmRSZXN1bHREaXNwbGF5IH0gZnJvbSAnLi4vLi4vLi4vY29tbWFuZHMuanMnXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0N1c3RvbVNlbGVjdC9zZWxlY3QuanMnXG5pbXBvcnQgeyB1c2VFeGl0T25DdHJsQ0RXaXRoS2V5YmluZGluZ3MgfSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VFeGl0T25DdHJsQ0RXaXRoS2V5YmluZGluZ3MuanMnXG5pbXBvcnQgeyB1c2VTZWFyY2hJbnB1dCB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVNlYXJjaElucHV0LmpzJ1xuaW1wb3J0IHR5cGUgeyBLZXlib2FyZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vaW5rL2V2ZW50cy9rZXlib2FyZC1ldmVudC5qcydcbmltcG9ydCB7IEJveCwgVGV4dCwgdXNlVGVybWluYWxGb2N1cyB9IGZyb20gJy4uLy4uLy4uL2luay5qcydcbmltcG9ydCB7IHVzZUtleWJpbmRpbmcgfSBmcm9tICcuLi8uLi8uLi9rZXliaW5kaW5ncy91c2VLZXliaW5kaW5nLmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBBdXRvTW9kZURlbmlhbCxcbiAgZ2V0QXV0b01vZGVEZW5pYWxzLFxufSBmcm9tICcuLi8uLi8uLi91dGlscy9hdXRvTW9kZURlbmlhbHMuanMnXG5pbXBvcnQgdHlwZSB7XG4gIFBlcm1pc3Npb25CZWhhdmlvcixcbiAgUGVybWlzc2lvblJ1bGUsXG4gIFBlcm1pc3Npb25SdWxlVmFsdWUsXG59IGZyb20gJy4uLy4uLy4uL3V0aWxzL3Blcm1pc3Npb25zL1Blcm1pc3Npb25SdWxlLmpzJ1xuaW1wb3J0IHsgcGVybWlzc2lvblJ1bGVWYWx1ZVRvU3RyaW5nIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvcGVybWlzc2lvbnMvcGVybWlzc2lvblJ1bGVQYXJzZXIuanMnXG5pbXBvcnQge1xuICBkZWxldGVQZXJtaXNzaW9uUnVsZSxcbiAgZ2V0QWxsb3dSdWxlcyxcbiAgZ2V0QXNrUnVsZXMsXG4gIGdldERlbnlSdWxlcyxcbiAgcGVybWlzc2lvblJ1bGVTb3VyY2VEaXNwbGF5U3RyaW5nLFxufSBmcm9tICcuLi8uLi8uLi91dGlscy9wZXJtaXNzaW9ucy9wZXJtaXNzaW9ucy5qcydcbmltcG9ydCB0eXBlIHsgVW5yZWFjaGFibGVSdWxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvcGVybWlzc2lvbnMvc2hhZG93ZWRSdWxlRGV0ZWN0aW9uLmpzJ1xuaW1wb3J0IHsganNvblN0cmluZ2lmeSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3Nsb3dPcGVyYXRpb25zLmpzJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2Rlc2lnbi1zeXN0ZW0vUGFuZS5qcydcbmltcG9ydCB7XG4gIFRhYixcbiAgVGFicyxcbiAgdXNlVGFiSGVhZGVyRm9jdXMsXG4gIHVzZVRhYnNXaWR0aCxcbn0gZnJvbSAnLi4vLi4vZGVzaWduLXN5c3RlbS9UYWJzLmpzJ1xuaW1wb3J0IHsgU2VhcmNoQm94IH0gZnJvbSAnLi4vLi4vU2VhcmNoQm94LmpzJ1xuaW1wb3J0IHR5cGUgeyBPcHRpb24gfSBmcm9tICcuLi8uLi91aS9vcHRpb24uanMnXG5pbXBvcnQgeyBBZGRQZXJtaXNzaW9uUnVsZXMgfSBmcm9tICcuL0FkZFBlcm1pc3Npb25SdWxlcy5qcydcbmltcG9ydCB7IEFkZFdvcmtzcGFjZURpcmVjdG9yeSB9IGZyb20gJy4vQWRkV29ya3NwYWNlRGlyZWN0b3J5LmpzJ1xuaW1wb3J0IHsgUGVybWlzc2lvblJ1bGVEZXNjcmlwdGlvbiB9IGZyb20gJy4vUGVybWlzc2lvblJ1bGVEZXNjcmlwdGlvbi5qcydcbmltcG9ydCB7IFBlcm1pc3Npb25SdWxlSW5wdXQgfSBmcm9tICcuL1Blcm1pc3Npb25SdWxlSW5wdXQuanMnXG5pbXBvcnQgeyBSZWNlbnREZW5pYWxzVGFiIH0gZnJvbSAnLi9SZWNlbnREZW5pYWxzVGFiLmpzJ1xuaW1wb3J0IHsgUmVtb3ZlV29ya3NwYWNlRGlyZWN0b3J5IH0gZnJvbSAnLi9SZW1vdmVXb3Jrc3BhY2VEaXJlY3RvcnkuanMnXG5pbXBvcnQgeyBXb3Jrc3BhY2VUYWIgfSBmcm9tICcuL1dvcmtzcGFjZVRhYi5qcydcblxudHlwZSBUYWJUeXBlID0gJ3JlY2VudCcgfCAnYWxsb3cnIHwgJ2FzaycgfCAnZGVueScgfCAnd29ya3NwYWNlJ1xuXG50eXBlIFJ1bGVTb3VyY2VUZXh0UHJvcHMgPSB7XG4gIHJ1bGU6IFBlcm1pc3Npb25SdWxlXG59XG5mdW5jdGlvbiBSdWxlU291cmNlVGV4dCh7IHJ1bGUgfTogUnVsZVNvdXJjZVRleHRQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIHJldHVybiAoXG4gICAgPFRleHRcbiAgICAgIGRpbUNvbG9yXG4gICAgPntgRnJvbSAke3Blcm1pc3Npb25SdWxlU291cmNlRGlzcGxheVN0cmluZyhydWxlLnNvdXJjZSl9YH08L1RleHQ+XG4gIClcbn1cblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGdldCB0aGUgYXBwcm9wcmlhdGUgbGFiZWwgZm9yIHJ1bGUgYmVoYXZpb3JcbmZ1bmN0aW9uIGdldFJ1bGVCZWhhdmlvckxhYmVsKHJ1bGVCZWhhdmlvcjogUGVybWlzc2lvbkJlaGF2aW9yKTogc3RyaW5nIHtcbiAgc3dpdGNoIChydWxlQmVoYXZpb3IpIHtcbiAgICBjYXNlICdhbGxvdyc6XG4gICAgICByZXR1cm4gJ2FsbG93ZWQnXG4gICAgY2FzZSAnZGVueSc6XG4gICAgICByZXR1cm4gJ2RlbmllZCdcbiAgICBjYXNlICdhc2snOlxuICAgICAgcmV0dXJuICdhc2snXG4gIH1cbn1cblxuLy8gQ29tcG9uZW50IGZvciBzaG93aW5nIHRvb2wgZGV0YWlscyBhbmQgbWFuYWdpbmcgdGhlIGludGVyYWN0aXZlIGRlbGV0aW9uIHdvcmtmbG93XG5mdW5jdGlvbiBSdWxlRGV0YWlscyh7XG4gIHJ1bGUsXG4gIG9uRGVsZXRlLFxuICBvbkNhbmNlbCxcbn06IHtcbiAgcnVsZTogUGVybWlzc2lvblJ1bGVcbiAgb25EZWxldGU6ICgpID0+IHZvaWRcbiAgb25DYW5jZWw6ICgpID0+IHZvaWRcbn0pOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBleGl0U3RhdGUgPSB1c2VFeGl0T25DdHJsQ0RXaXRoS2V5YmluZGluZ3MoKVxuICAvLyBVc2UgY29uZmlndXJhYmxlIGtleWJpbmRpbmcgZm9yIEVTQyB0byBjYW5jZWxcbiAgdXNlS2V5YmluZGluZygnY29uZmlybTpubycsIG9uQ2FuY2VsLCB7IGNvbnRleHQ6ICdDb25maXJtYXRpb24nIH0pXG5cbiAgY29uc3QgcnVsZURlc2NyaXB0aW9uID0gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpblg9ezJ9PlxuICAgICAgPFRleHQgYm9sZD57cGVybWlzc2lvblJ1bGVWYWx1ZVRvU3RyaW5nKHJ1bGUucnVsZVZhbHVlKX08L1RleHQ+XG4gICAgICA8UGVybWlzc2lvblJ1bGVEZXNjcmlwdGlvbiBydWxlVmFsdWU9e3J1bGUucnVsZVZhbHVlfSAvPlxuICAgICAgPFJ1bGVTb3VyY2VUZXh0IHJ1bGU9e3J1bGV9IC8+XG4gICAgPC9Cb3g+XG4gIClcblxuICBjb25zdCBmb290ZXIgPSAoXG4gICAgPEJveCBtYXJnaW5MZWZ0PXszfT5cbiAgICAgIHtleGl0U3RhdGUucGVuZGluZyA/IChcbiAgICAgICAgPFRleHQgZGltQ29sb3I+UHJlc3Mge2V4aXRTdGF0ZS5rZXlOYW1lfSBhZ2FpbiB0byBleGl0PC9UZXh0PlxuICAgICAgKSA6IChcbiAgICAgICAgPFRleHQgZGltQ29sb3I+RXNjIHRvIGNhbmNlbDwvVGV4dD5cbiAgICAgICl9XG4gICAgPC9Cb3g+XG4gIClcblxuICAvLyBNYW5hZ2VkIHNldHRpbmdzIGNhbid0IGJlIGVkaXRlZFxuICBpZiAocnVsZS5zb3VyY2UgPT09ICdwb2xpY3lTZXR0aW5ncycpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgIGdhcD17MX1cbiAgICAgICAgICBib3JkZXJTdHlsZT1cInJvdW5kXCJcbiAgICAgICAgICBwYWRkaW5nTGVmdD17MX1cbiAgICAgICAgICBwYWRkaW5nUmlnaHQ9ezF9XG4gICAgICAgICAgYm9yZGVyQ29sb3I9XCJwZXJtaXNzaW9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxUZXh0IGJvbGQgY29sb3I9XCJwZXJtaXNzaW9uXCI+XG4gICAgICAgICAgICBSdWxlIGRldGFpbHNcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAge3J1bGVEZXNjcmlwdGlvbn1cbiAgICAgICAgICA8VGV4dCBpdGFsaWM+XG4gICAgICAgICAgICBUaGlzIHJ1bGUgaXMgY29uZmlndXJlZCBieSBtYW5hZ2VkIHNldHRpbmdzIGFuZCBjYW5ub3QgYmUgbW9kaWZpZWQuXG4gICAgICAgICAgICB7J1xcbid9XG4gICAgICAgICAgICBDb250YWN0IHlvdXIgc3lzdGVtIGFkbWluaXN0cmF0b3IgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICAge2Zvb3Rlcn1cbiAgICAgIDwvPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3hcbiAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgIGdhcD17MX1cbiAgICAgICAgYm9yZGVyU3R5bGU9XCJyb3VuZFwiXG4gICAgICAgIHBhZGRpbmdMZWZ0PXsxfVxuICAgICAgICBwYWRkaW5nUmlnaHQ9ezF9XG4gICAgICAgIGJvcmRlckNvbG9yPVwiZXJyb3JcIlxuICAgICAgPlxuICAgICAgICA8VGV4dCBib2xkIGNvbG9yPVwiZXJyb3JcIj5cbiAgICAgICAgICBEZWxldGUge2dldFJ1bGVCZWhhdmlvckxhYmVsKHJ1bGUucnVsZUJlaGF2aW9yKX0gdG9vbD9cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICB7cnVsZURlc2NyaXB0aW9ufVxuICAgICAgICA8VGV4dD5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcGVybWlzc2lvbiBydWxlPzwvVGV4dD5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIG9uQ2hhbmdlPXtfID0+IChfID09PSAneWVzJyA/IG9uRGVsZXRlKCkgOiBvbkNhbmNlbCgpKX1cbiAgICAgICAgICBvbkNhbmNlbD17b25DYW5jZWx9XG4gICAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgICAgeyBsYWJlbDogJ1llcycsIHZhbHVlOiAneWVzJyB9LFxuICAgICAgICAgICAgeyBsYWJlbDogJ05vJywgdmFsdWU6ICdubycgfSxcbiAgICAgICAgICBdfVxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgICB7Zm9vdGVyfVxuICAgIDwvPlxuICApXG59XG5cbnR5cGUgUnVsZXNUYWJDb250ZW50UHJvcHMgPSB7XG4gIG9wdGlvbnM6IE9wdGlvbltdXG4gIHNlYXJjaFF1ZXJ5OiBzdHJpbmdcbiAgaXNTZWFyY2hNb2RlOiBib29sZWFuXG4gIGlzRm9jdXNlZDogYm9vbGVhblxuICBvblNlbGVjdDogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWRcbiAgb25DYW5jZWw6ICgpID0+IHZvaWRcbiAgbGFzdEZvY3VzZWRSdWxlS2V5OiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgY3Vyc29yT2Zmc2V0PzogbnVtYmVyXG4gIG9uSGVhZGVyRm9jdXNDaGFuZ2U/OiAoZm9jdXNlZDogYm9vbGVhbikgPT4gdm9pZFxufVxuXG4vLyBDb21wb25lbnQgZm9yIHJlbmRlcmluZyBydWxlcyB0YWIgY29udGVudCB3aXRoIGZ1bGwgd2lkdGggc3VwcG9ydFxuZnVuY3Rpb24gUnVsZXNUYWJDb250ZW50KHByb3BzOiBSdWxlc1RhYkNvbnRlbnRQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IHtcbiAgICBvcHRpb25zLFxuICAgIHNlYXJjaFF1ZXJ5LFxuICAgIGlzU2VhcmNoTW9kZSxcbiAgICBpc0ZvY3VzZWQsXG4gICAgb25TZWxlY3QsXG4gICAgb25DYW5jZWwsXG4gICAgbGFzdEZvY3VzZWRSdWxlS2V5LFxuICAgIGN1cnNvck9mZnNldCxcbiAgICBvbkhlYWRlckZvY3VzQ2hhbmdlLFxuICB9ID0gcHJvcHNcbiAgY29uc3QgdGFiV2lkdGggPSB1c2VUYWJzV2lkdGgoKVxuICBjb25zdCB7IGhlYWRlckZvY3VzZWQsIGZvY3VzSGVhZGVyLCBibHVySGVhZGVyIH0gPSB1c2VUYWJIZWFkZXJGb2N1cygpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzU2VhcmNoTW9kZSAmJiBoZWFkZXJGb2N1c2VkKSBibHVySGVhZGVyKClcbiAgfSwgW2lzU2VhcmNoTW9kZSwgaGVhZGVyRm9jdXNlZCwgYmx1ckhlYWRlcl0pXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgb25IZWFkZXJGb2N1c0NoYW5nZT8uKGhlYWRlckZvY3VzZWQpXG4gIH0sIFtoZWFkZXJGb2N1c2VkLCBvbkhlYWRlckZvY3VzQ2hhbmdlXSlcbiAgcmV0dXJuIChcbiAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgIDxCb3ggbWFyZ2luQm90dG9tPXsxfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIDxTZWFyY2hCb3hcbiAgICAgICAgICBxdWVyeT17c2VhcmNoUXVlcnl9XG4gICAgICAgICAgaXNGb2N1c2VkPXtpc1NlYXJjaE1vZGUgJiYgIWhlYWRlckZvY3VzZWR9XG4gICAgICAgICAgaXNUZXJtaW5hbEZvY3VzZWQ9e2lzRm9jdXNlZH1cbiAgICAgICAgICB3aWR0aD17dGFiV2lkdGh9XG4gICAgICAgICAgY3Vyc29yT2Zmc2V0PXtjdXJzb3JPZmZzZXR9XG4gICAgICAgIC8+XG4gICAgICA8L0JveD5cbiAgICAgIDxTZWxlY3RcbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgb25DaGFuZ2U9e29uU2VsZWN0fVxuICAgICAgICBvbkNhbmNlbD17b25DYW5jZWx9XG4gICAgICAgIHZpc2libGVPcHRpb25Db3VudD17TWF0aC5taW4oMTAsIG9wdGlvbnMubGVuZ3RoKX1cbiAgICAgICAgaXNEaXNhYmxlZD17aXNTZWFyY2hNb2RlIHx8IGhlYWRlckZvY3VzZWR9XG4gICAgICAgIGRlZmF1bHRGb2N1c1ZhbHVlPXtsYXN0Rm9jdXNlZFJ1bGVLZXl9XG4gICAgICAgIG9uVXBGcm9tRmlyc3RJdGVtPXtmb2N1c0hlYWRlcn1cbiAgICAgIC8+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuLy8gQ29tcG9zZXMgdGhlIHN1YnRpdGxlICsgc2VhcmNoICsgU2VsZWN0IGZvciBhIHNpbmdsZSBhbGxvdy9hc2svZGVueSB0YWIuXG5mdW5jdGlvbiBQZXJtaXNzaW9uUnVsZXNUYWIoe1xuICB0YWIsXG4gIGdldFJ1bGVzT3B0aW9ucyxcbiAgaGFuZGxlVG9vbFNlbGVjdCxcbiAgLi4ucnVsZXNQcm9wc1xufToge1xuICB0YWI6ICdhbGxvdycgfCAnYXNrJyB8ICdkZW55J1xuICBnZXRSdWxlc09wdGlvbnM6ICh0YWI6IFRhYlR5cGUsIHF1ZXJ5Pzogc3RyaW5nKSA9PiB7IG9wdGlvbnM6IE9wdGlvbltdIH1cbiAgaGFuZGxlVG9vbFNlbGVjdDogKHZhbHVlOiBzdHJpbmcsIHRhYjogVGFiVHlwZSkgPT4gdm9pZFxufSAmIE9taXQ8UnVsZXNUYWJDb250ZW50UHJvcHMsICdvcHRpb25zJyB8ICdvblNlbGVjdCc+KTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBmbGV4U2hyaW5rPXt0YWIgPT09ICdhbGxvdycgPyAwIDogdW5kZWZpbmVkfT5cbiAgICAgIDxUZXh0PlxuICAgICAgICB7XG4gICAgICAgICAge1xuICAgICAgICAgICAgYWxsb3c6IFwiQ2xhdWRlIENvZGUgd29uJ3QgYXNrIGJlZm9yZSB1c2luZyBhbGxvd2VkIHRvb2xzLlwiLFxuICAgICAgICAgICAgYXNrOiAnQ2xhdWRlIENvZGUgd2lsbCBhbHdheXMgYXNrIGZvciBjb25maXJtYXRpb24gYmVmb3JlIHVzaW5nIHRoZXNlIHRvb2xzLicsXG4gICAgICAgICAgICBkZW55OiAnQ2xhdWRlIENvZGUgd2lsbCBhbHdheXMgcmVqZWN0IHJlcXVlc3RzIHRvIHVzZSBkZW5pZWQgdG9vbHMuJyxcbiAgICAgICAgICB9W3RhYl1cbiAgICAgICAgfVxuICAgICAgPC9UZXh0PlxuICAgICAgPFJ1bGVzVGFiQ29udGVudFxuICAgICAgICBvcHRpb25zPXtnZXRSdWxlc09wdGlvbnModGFiLCBydWxlc1Byb3BzLnNlYXJjaFF1ZXJ5KS5vcHRpb25zfVxuICAgICAgICBvblNlbGVjdD17diA9PiBoYW5kbGVUb29sU2VsZWN0KHYsIHRhYil9XG4gICAgICAgIHsuLi5ydWxlc1Byb3BzfVxuICAgICAgLz5cbiAgICA8L0JveD5cbiAgKVxufVxuXG50eXBlIFByb3BzID0ge1xuICBvbkV4aXQ6IChcbiAgICByZXN1bHQ/OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGRpc3BsYXk/OiBDb21tYW5kUmVzdWx0RGlzcGxheVxuICAgICAgc2hvdWxkUXVlcnk/OiBib29sZWFuXG4gICAgICBtZXRhTWVzc2FnZXM/OiBzdHJpbmdbXVxuICAgIH0sXG4gICkgPT4gdm9pZFxuICBpbml0aWFsVGFiPzogVGFiVHlwZVxuICBvblJldHJ5RGVuaWFscz86IChjb21tYW5kczogc3RyaW5nW10pID0+IHZvaWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBlcm1pc3Npb25SdWxlTGlzdCh7XG4gIG9uRXhpdCxcbiAgaW5pdGlhbFRhYixcbiAgb25SZXRyeURlbmlhbHMsXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IGhhc0RlbmlhbHMgPSBnZXRBdXRvTW9kZURlbmlhbHMoKS5sZW5ndGggPiAwXG4gIGNvbnN0IGRlZmF1bHRUYWI6IFRhYlR5cGUgPSBpbml0aWFsVGFiID8/IChoYXNEZW5pYWxzID8gJ3JlY2VudCcgOiAnYWxsb3cnKVxuICBjb25zdCBbY2hhbmdlcywgc2V0Q2hhbmdlc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pXG4gIGNvbnN0IHRvb2xQZXJtaXNzaW9uQ29udGV4dCA9IHVzZUFwcFN0YXRlKHMgPT4gcy50b29sUGVybWlzc2lvbkNvbnRleHQpXG4gIGNvbnN0IHNldEFwcFN0YXRlID0gdXNlU2V0QXBwU3RhdGUoKVxuICBjb25zdCBpc1Rlcm1pbmFsRm9jdXNlZCA9IHVzZVRlcm1pbmFsRm9jdXMoKVxuXG4gIC8vIFJlZiBub3Qgc3RhdGU6IFJlY2VudERlbmlhbHNUYWIgdXBkYXRlcyBkb24ndCBuZWVkIHRvIHRyaWdnZXIgcGFyZW50XG4gIC8vIHJlLXJlbmRlciAob25seSByZWFkIG9uIGV4aXQpLCBhbmQgcmUtcmVuZGVycyB0cmlwIHRoZSBtb2RhbCBTY3JvbGxCb3hcbiAgLy8gY29sbGFwc2UgYnVnIGZyb20gIzIzNTkyIGluIGZ1bGxzY3JlZW4uXG4gIGNvbnN0IGRlbmlhbFN0YXRlUmVmID0gdXNlUmVmPHtcbiAgICBhcHByb3ZlZDogU2V0PG51bWJlcj5cbiAgICByZXRyeTogU2V0PG51bWJlcj5cbiAgICBkZW5pYWxzOiByZWFkb25seSBBdXRvTW9kZURlbmlhbFtdXG4gIH0+KHsgYXBwcm92ZWQ6IG5ldyBTZXQoKSwgcmV0cnk6IG5ldyBTZXQoKSwgZGVuaWFsczogW10gfSlcbiAgY29uc3QgaGFuZGxlRGVuaWFsU3RhdGVDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAoczogdHlwZW9mIGRlbmlhbFN0YXRlUmVmLmN1cnJlbnQpID0+IHtcbiAgICAgIGRlbmlhbFN0YXRlUmVmLmN1cnJlbnQgPSBzXG4gICAgfSxcbiAgICBbXSxcbiAgKVxuXG4gIGNvbnN0IFtzZWxlY3RlZFJ1bGUsIHNldFNlbGVjdGVkUnVsZV0gPSB1c2VTdGF0ZTxQZXJtaXNzaW9uUnVsZSB8IHVuZGVmaW5lZD4oKVxuICAvLyBUcmFjayB0aGUga2V5IG9mIHRoZSBsYXN0IGZvY3VzZWQgcnVsZSB0byByZXN0b3JlIHBvc2l0aW9uIGFmdGVyIGRlbGV0aW9uXG4gIGNvbnN0IFtsYXN0Rm9jdXNlZFJ1bGVLZXksIHNldExhc3RGb2N1c2VkUnVsZUtleV0gPSB1c2VTdGF0ZTxcbiAgICBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPigpXG4gIGNvbnN0IFthZGRpbmdSdWxlVG9UYWIsIHNldEFkZGluZ1J1bGVUb1RhYl0gPSB1c2VTdGF0ZTxUYWJUeXBlIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW3ZhbGlkYXRlZFJ1bGUsIHNldFZhbGlkYXRlZFJ1bGVdID0gdXNlU3RhdGU8e1xuICAgIHJ1bGVCZWhhdmlvcjogUGVybWlzc2lvbkJlaGF2aW9yXG4gICAgcnVsZVZhbHVlOiBQZXJtaXNzaW9uUnVsZVZhbHVlXG4gIH0gfCBudWxsPihudWxsKVxuICBjb25zdCBbaXNBZGRpbmdXb3Jrc3BhY2VEaXJlY3RvcnksIHNldElzQWRkaW5nV29ya3NwYWNlRGlyZWN0b3J5XSA9XG4gICAgdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtyZW1vdmluZ0RpcmVjdG9yeSwgc2V0UmVtb3ZpbmdEaXJlY3RvcnldID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4oXG4gICAgbnVsbCxcbiAgKVxuICBjb25zdCBbaXNTZWFyY2hNb2RlLCBzZXRJc1NlYXJjaE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtoZWFkZXJGb2N1c2VkLCBzZXRIZWFkZXJGb2N1c2VkXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IGhhbmRsZUhlYWRlckZvY3VzQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGZvY3VzZWQ6IGJvb2xlYW4pID0+IHtcbiAgICBzZXRIZWFkZXJGb2N1c2VkKGZvY3VzZWQpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGFsbG93UnVsZXNCeUtleSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IG1hcCA9IG5ldyBNYXA8c3RyaW5nLCBQZXJtaXNzaW9uUnVsZT4oKVxuICAgIGdldEFsbG93UnVsZXModG9vbFBlcm1pc3Npb25Db250ZXh0KS5mb3JFYWNoKHJ1bGUgPT4ge1xuICAgICAgbWFwLnNldChqc29uU3RyaW5naWZ5KHJ1bGUpLCBydWxlKVxuICAgIH0pXG4gICAgcmV0dXJuIG1hcFxuICB9LCBbdG9vbFBlcm1pc3Npb25Db250ZXh0XSlcblxuICBjb25zdCBkZW55UnVsZXNCeUtleSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IG1hcCA9IG5ldyBNYXA8c3RyaW5nLCBQZXJtaXNzaW9uUnVsZT4oKVxuICAgIGdldERlbnlSdWxlcyh0b29sUGVybWlzc2lvbkNvbnRleHQpLmZvckVhY2gocnVsZSA9PiB7XG4gICAgICBtYXAuc2V0KGpzb25TdHJpbmdpZnkocnVsZSksIHJ1bGUpXG4gICAgfSlcbiAgICByZXR1cm4gbWFwXG4gIH0sIFt0b29sUGVybWlzc2lvbkNvbnRleHRdKVxuXG4gIGNvbnN0IGFza1J1bGVzQnlLZXkgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBtYXAgPSBuZXcgTWFwPHN0cmluZywgUGVybWlzc2lvblJ1bGU+KClcbiAgICBnZXRBc2tSdWxlcyh0b29sUGVybWlzc2lvbkNvbnRleHQpLmZvckVhY2gocnVsZSA9PiB7XG4gICAgICBtYXAuc2V0KGpzb25TdHJpbmdpZnkocnVsZSksIHJ1bGUpXG4gICAgfSlcbiAgICByZXR1cm4gbWFwXG4gIH0sIFt0b29sUGVybWlzc2lvbkNvbnRleHRdKVxuXG4gIGNvbnN0IGdldFJ1bGVzT3B0aW9ucyA9IHVzZUNhbGxiYWNrKFxuICAgICh0YWI6IFRhYlR5cGUsIHF1ZXJ5OiBzdHJpbmcgPSAnJykgPT4ge1xuICAgICAgY29uc3QgcnVsZXNCeUtleSA9ICgoKSA9PiB7XG4gICAgICAgIHN3aXRjaCAodGFiKSB7XG4gICAgICAgICAgY2FzZSAnYWxsb3cnOlxuICAgICAgICAgICAgcmV0dXJuIGFsbG93UnVsZXNCeUtleVxuICAgICAgICAgIGNhc2UgJ2RlbnknOlxuICAgICAgICAgICAgcmV0dXJuIGRlbnlSdWxlc0J5S2V5XG4gICAgICAgICAgY2FzZSAnYXNrJzpcbiAgICAgICAgICAgIHJldHVybiBhc2tSdWxlc0J5S2V5XG4gICAgICAgICAgY2FzZSAnd29ya3NwYWNlJzpcbiAgICAgICAgICBjYXNlICdyZWNlbnQnOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXA8c3RyaW5nLCBQZXJtaXNzaW9uUnVsZT4oKVxuICAgICAgICB9XG4gICAgICB9KSgpXG5cbiAgICAgIGNvbnN0IG9wdGlvbnM6IE9wdGlvbltdID0gW11cblxuICAgICAgLy8gT25seSBzaG93IFwiQWRkIGEgbmV3IHJ1bGVcIiBmb3IgYWxsb3cgYW5kIGRlbnkgdGFicyAoYW5kIG5vdCB3aGVuIHNlYXJjaGluZylcbiAgICAgIGlmICh0YWIgIT09ICd3b3Jrc3BhY2UnICYmIHRhYiAhPT0gJ3JlY2VudCcgJiYgIXF1ZXJ5KSB7XG4gICAgICAgIG9wdGlvbnMucHVzaCh7XG4gICAgICAgICAgbGFiZWw6IGBBZGQgYSBuZXcgcnVsZSR7ZmlndXJlcy5lbGxpcHNpc31gLFxuICAgICAgICAgIHZhbHVlOiAnYWRkLW5ldy1ydWxlJyxcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgLy8gR2V0IGFsbCBydWxlIGtleXMgYW5kIHNvcnQgdGhlbSBhbHBoYWJldGljYWxseSBiYXNlZCBvbiBydWxlJ3MgZm9ybWF0dGVkIHZhbHVlXG4gICAgICBjb25zdCBzb3J0ZWRSdWxlS2V5cyA9IEFycmF5LmZyb20ocnVsZXNCeUtleS5rZXlzKCkpLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgcnVsZUEgPSBydWxlc0J5S2V5LmdldChhKVxuICAgICAgICBjb25zdCBydWxlQiA9IHJ1bGVzQnlLZXkuZ2V0KGIpXG4gICAgICAgIGlmIChydWxlQSAmJiBydWxlQikge1xuICAgICAgICAgIGNvbnN0IHJ1bGVBU3RyaW5nID0gcGVybWlzc2lvblJ1bGVWYWx1ZVRvU3RyaW5nKFxuICAgICAgICAgICAgcnVsZUEucnVsZVZhbHVlLFxuICAgICAgICAgICkudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIGNvbnN0IHJ1bGVCU3RyaW5nID0gcGVybWlzc2lvblJ1bGVWYWx1ZVRvU3RyaW5nKFxuICAgICAgICAgICAgcnVsZUIucnVsZVZhbHVlLFxuICAgICAgICAgICkudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIHJldHVybiBydWxlQVN0cmluZy5sb2NhbGVDb21wYXJlKHJ1bGVCU3RyaW5nKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9KVxuXG4gICAgICAvLyBCdWlsZCBvcHRpb25zIGZyb20gc29ydGVkIGtleXMsIGZpbHRlcmluZyBieSBzZWFyY2ggcXVlcnlcbiAgICAgIGNvbnN0IGxvd2VyUXVlcnkgPSBxdWVyeS50b0xvd2VyQ2FzZSgpXG4gICAgICBmb3IgKGNvbnN0IHJ1bGVLZXkgb2Ygc29ydGVkUnVsZUtleXMpIHtcbiAgICAgICAgY29uc3QgcnVsZSA9IHJ1bGVzQnlLZXkuZ2V0KHJ1bGVLZXkpXG4gICAgICAgIGlmIChydWxlKSB7XG4gICAgICAgICAgY29uc3QgcnVsZVN0cmluZyA9IHBlcm1pc3Npb25SdWxlVmFsdWVUb1N0cmluZyhydWxlLnJ1bGVWYWx1ZSlcbiAgICAgICAgICAvLyBGaWx0ZXIgYnkgc2VhcmNoIHF1ZXJ5IGlmIHByb3ZpZGVkXG4gICAgICAgICAgaWYgKHF1ZXJ5ICYmICFydWxlU3RyaW5nLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobG93ZXJRdWVyeSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIG9wdGlvbnMucHVzaCh7XG4gICAgICAgICAgICBsYWJlbDogcnVsZVN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiBydWxlS2V5LFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgb3B0aW9ucywgcnVsZXNCeUtleSB9XG4gICAgfSxcbiAgICBbYWxsb3dSdWxlc0J5S2V5LCBkZW55UnVsZXNCeUtleSwgYXNrUnVsZXNCeUtleV0sXG4gIClcblxuICBjb25zdCBleGl0U3RhdGUgPSB1c2VFeGl0T25DdHJsQ0RXaXRoS2V5YmluZGluZ3MoKVxuXG4gIGNvbnN0IGlzU2VhcmNoTW9kZUFjdGl2ZSA9XG4gICAgIXNlbGVjdGVkUnVsZSAmJlxuICAgICFhZGRpbmdSdWxlVG9UYWIgJiZcbiAgICAhdmFsaWRhdGVkUnVsZSAmJlxuICAgICFpc0FkZGluZ1dvcmtzcGFjZURpcmVjdG9yeSAmJlxuICAgICFyZW1vdmluZ0RpcmVjdG9yeVxuXG4gIGNvbnN0IHtcbiAgICBxdWVyeTogc2VhcmNoUXVlcnksXG4gICAgc2V0UXVlcnk6IHNldFNlYXJjaFF1ZXJ5LFxuICAgIGN1cnNvck9mZnNldDogc2VhcmNoQ3Vyc29yT2Zmc2V0LFxuICB9ID0gdXNlU2VhcmNoSW5wdXQoe1xuICAgIGlzQWN0aXZlOiBpc1NlYXJjaE1vZGVBY3RpdmUgJiYgaXNTZWFyY2hNb2RlLFxuICAgIG9uRXhpdDogKCkgPT4ge1xuICAgICAgc2V0SXNTZWFyY2hNb2RlKGZhbHNlKVxuICAgIH0sXG4gIH0pXG5cbiAgLy8gSGFuZGxlIGVudGVyaW5nIHNlYXJjaCBtb2RlXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSB1c2VDYWxsYmFjayhcbiAgICAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc1NlYXJjaE1vZGVBY3RpdmUpIHJldHVyblxuICAgICAgaWYgKGlzU2VhcmNoTW9kZSkgcmV0dXJuXG4gICAgICBpZiAoZS5jdHJsIHx8IGUubWV0YSkgcmV0dXJuXG5cbiAgICAgIC8vIEVudGVyIHNlYXJjaCBtb2RlIHdpdGggJy8nIG9yIGFueSBwcmludGFibGUgY2hhcmFjdGVyLlxuICAgICAgLy8gZS5rZXkubGVuZ3RoID09PSAxIGZpbHRlcnMgb3V0IHNwZWNpYWwga2V5cyAoZG93biwgcmV0dXJuLCBlc2NhcGUsXG4gICAgICAvLyBldGMuKSDigJQgcHJldmlvdXNseSB0aGUgcmF3IGVzY2FwZSBzZXF1ZW5jZSBsZWFrZWQgdGhyb3VnaCBhbmRcbiAgICAgIC8vIHRyaWdnZXJlZCBzZWFyY2ggbW9kZSB3aXRoIGdhcmJhZ2Ugb24gYXJyb3cta2V5IHByZXNzLlxuICAgICAgaWYgKGUua2V5ID09PSAnLycpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHNldElzU2VhcmNoTW9kZSh0cnVlKVxuICAgICAgICBzZXRTZWFyY2hRdWVyeSgnJylcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGUua2V5Lmxlbmd0aCA9PT0gMSAmJlxuICAgICAgICAvLyBEb24ndCBlbnRlciBzZWFyY2ggbW9kZSBmb3IgdmltLW5hdiAvIHNwYWNlIC8gcmV0cnkga2V5XG4gICAgICAgIGUua2V5ICE9PSAnaicgJiZcbiAgICAgICAgZS5rZXkgIT09ICdrJyAmJlxuICAgICAgICBlLmtleSAhPT0gJ20nICYmXG4gICAgICAgIGUua2V5ICE9PSAnaScgJiZcbiAgICAgICAgZS5rZXkgIT09ICdyJyAmJlxuICAgICAgICBlLmtleSAhPT0gJyAnXG4gICAgICApIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHNldElzU2VhcmNoTW9kZSh0cnVlKVxuICAgICAgICBzZXRTZWFyY2hRdWVyeShlLmtleSlcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc1NlYXJjaE1vZGVBY3RpdmUsIGlzU2VhcmNoTW9kZSwgc2V0U2VhcmNoUXVlcnldLFxuICApXG5cbiAgY29uc3QgaGFuZGxlVG9vbFNlbGVjdCA9IHVzZUNhbGxiYWNrKFxuICAgIChzZWxlY3RlZFZhbHVlOiBzdHJpbmcsIHRhYjogVGFiVHlwZSkgPT4ge1xuICAgICAgY29uc3QgeyBydWxlc0J5S2V5IH0gPSBnZXRSdWxlc09wdGlvbnModGFiKVxuICAgICAgaWYgKHNlbGVjdGVkVmFsdWUgPT09ICdhZGQtbmV3LXJ1bGUnKSB7XG4gICAgICAgIHNldEFkZGluZ1J1bGVUb1RhYih0YWIpXG4gICAgICAgIHJldHVyblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0U2VsZWN0ZWRSdWxlKHJ1bGVzQnlLZXkuZ2V0KHNlbGVjdGVkVmFsdWUpKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9LFxuICAgIFtnZXRSdWxlc09wdGlvbnNdLFxuICApXG5cbiAgY29uc3QgaGFuZGxlUnVsZUlucHV0Q2FuY2VsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldEFkZGluZ1J1bGVUb1RhYihudWxsKVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVSdWxlSW5wdXRTdWJtaXQgPSB1c2VDYWxsYmFjayhcbiAgICAocnVsZVZhbHVlOiBQZXJtaXNzaW9uUnVsZVZhbHVlLCBydWxlQmVoYXZpb3I6IFBlcm1pc3Npb25CZWhhdmlvcikgPT4ge1xuICAgICAgc2V0VmFsaWRhdGVkUnVsZSh7IHJ1bGVWYWx1ZSwgcnVsZUJlaGF2aW9yIH0pXG4gICAgICBzZXRBZGRpbmdSdWxlVG9UYWIobnVsbClcbiAgICB9LFxuICAgIFtdLFxuICApXG5cbiAgY29uc3QgaGFuZGxlQWRkUnVsZXNTdWNjZXNzID0gdXNlQ2FsbGJhY2soXG4gICAgKHJ1bGVzOiBQZXJtaXNzaW9uUnVsZVtdLCB1bnJlYWNoYWJsZT86IFVucmVhY2hhYmxlUnVsZVtdKSA9PiB7XG4gICAgICBzZXRWYWxpZGF0ZWRSdWxlKG51bGwpXG4gICAgICBmb3IgKGNvbnN0IHJ1bGUgb2YgcnVsZXMpIHtcbiAgICAgICAgc2V0Q2hhbmdlcyhwcmV2ID0+IFtcbiAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgIGBBZGRlZCAke3J1bGUucnVsZUJlaGF2aW9yfSBydWxlICR7Y2hhbGsuYm9sZChwZXJtaXNzaW9uUnVsZVZhbHVlVG9TdHJpbmcocnVsZS5ydWxlVmFsdWUpKX1gLFxuICAgICAgICBdKVxuICAgICAgfVxuXG4gICAgICAvLyBTaG93IHdhcm5pbmdzIGZvciBhbnkgdW5yZWFjaGFibGUgcnVsZXMgd2UganVzdCBhZGRlZFxuICAgICAgaWYgKHVucmVhY2hhYmxlICYmIHVucmVhY2hhYmxlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChjb25zdCB1IG9mIHVucmVhY2hhYmxlKSB7XG4gICAgICAgICAgY29uc3Qgc2V2ZXJpdHkgPSB1LnNoYWRvd1R5cGUgPT09ICdkZW55JyA/ICdibG9ja2VkJyA6ICdzaGFkb3dlZCdcbiAgICAgICAgICBzZXRDaGFuZ2VzKHByZXYgPT4gW1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIGNoYWxrLnllbGxvdyhcbiAgICAgICAgICAgICAgYCR7ZmlndXJlcy53YXJuaW5nfSBXYXJuaW5nOiAke3Blcm1pc3Npb25SdWxlVmFsdWVUb1N0cmluZyh1LnJ1bGUucnVsZVZhbHVlKX0gaXMgJHtzZXZlcml0eX1gLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNoYWxrLmRpbShgICAke3UucmVhc29ufWApLFxuICAgICAgICAgICAgY2hhbGsuZGltKGAgIEZpeDogJHt1LmZpeH1gKSxcbiAgICAgICAgICBdKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbXSxcbiAgKVxuXG4gIGNvbnN0IGhhbmRsZUFkZFJ1bGVDYW5jZWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0VmFsaWRhdGVkUnVsZShudWxsKVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVSZXF1ZXN0QWRkRGlyZWN0b3J5ID0gdXNlQ2FsbGJhY2soXG4gICAgKCkgPT4gc2V0SXNBZGRpbmdXb3Jrc3BhY2VEaXJlY3RvcnkodHJ1ZSksXG4gICAgW10sXG4gIClcbiAgY29uc3QgaGFuZGxlUmVxdWVzdFJlbW92ZURpcmVjdG9yeSA9IHVzZUNhbGxiYWNrKFxuICAgIChwYXRoOiBzdHJpbmcpID0+IHNldFJlbW92aW5nRGlyZWN0b3J5KHBhdGgpLFxuICAgIFtdLFxuICApXG4gIGNvbnN0IGhhbmRsZVJ1bGVzQ2FuY2VsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHMgPSBkZW5pYWxTdGF0ZVJlZi5jdXJyZW50XG4gICAgY29uc3QgZGVuaWFsc0ZvciA9IChzZXQ6IFNldDxudW1iZXI+KSA9PlxuICAgICAgQXJyYXkuZnJvbShzZXQpXG4gICAgICAgIC5tYXAoaWR4ID0+IHMuZGVuaWFsc1tpZHhdKVxuICAgICAgICAuZmlsdGVyKChkKTogZCBpcyBBdXRvTW9kZURlbmlhbCA9PiBkICE9PSB1bmRlZmluZWQpXG5cbiAgICBjb25zdCByZXRyeURlbmlhbHMgPSBkZW5pYWxzRm9yKHMucmV0cnkpXG4gICAgaWYgKHJldHJ5RGVuaWFscy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjb21tYW5kcyA9IHJldHJ5RGVuaWFscy5tYXAoZCA9PiBkLmRpc3BsYXkpXG4gICAgICBvblJldHJ5RGVuaWFscz8uKGNvbW1hbmRzKVxuICAgICAgb25FeGl0KHVuZGVmaW5lZCwge1xuICAgICAgICBzaG91bGRRdWVyeTogdHJ1ZSxcbiAgICAgICAgbWV0YU1lc3NhZ2VzOiBbXG4gICAgICAgICAgYFBlcm1pc3Npb24gZ3JhbnRlZCBmb3I6ICR7Y29tbWFuZHMuam9pbignLCAnKX0uIFlvdSBtYXkgbm93IHJldHJ5ICR7Y29tbWFuZHMubGVuZ3RoID09PSAxID8gJ3RoaXMgY29tbWFuZCcgOiAndGhlc2UgY29tbWFuZHMnfSBpZiB5b3Ugd291bGQgbGlrZS5gLFxuICAgICAgICBdLFxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGFwcHJvdmVkRGVuaWFscyA9IGRlbmlhbHNGb3Iocy5hcHByb3ZlZClcbiAgICBpZiAoYXBwcm92ZWREZW5pYWxzLmxlbmd0aCA+IDAgfHwgY2hhbmdlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBhcHByb3ZlZE1zZyA9XG4gICAgICAgIGFwcHJvdmVkRGVuaWFscy5sZW5ndGggPiAwXG4gICAgICAgICAgPyBbXG4gICAgICAgICAgICAgIGBBcHByb3ZlZCAke2FwcHJvdmVkRGVuaWFscy5tYXAoZCA9PiBjaGFsay5ib2xkKGQuZGlzcGxheSkpLmpvaW4oJywgJyl9YCxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICA6IFtdXG4gICAgICBvbkV4aXQoWy4uLmFwcHJvdmVkTXNnLCAuLi5jaGFuZ2VzXS5qb2luKCdcXG4nKSlcbiAgICB9IGVsc2Uge1xuICAgICAgb25FeGl0KCdQZXJtaXNzaW9ucyBkaWFsb2cgZGlzbWlzc2VkJywge1xuICAgICAgICBkaXNwbGF5OiAnc3lzdGVtJyxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbY2hhbmdlcywgb25FeGl0LCBvblJldHJ5RGVuaWFsc10pXG5cbiAgLy8gSGFuZGxlIEVzY2FwZSBhdCB0aGUgdG9wIGxldmVsIHNvIGl0IHdvcmtzIGV2ZW4gd2hlbiBoZWFkZXIgaXMgZm9jdXNlZFxuICAvLyAod2hpY2ggZGlzYWJsZXMgdGhlIFNlbGVjdCBjb21wb25lbnQgYW5kIGl0cyBzZWxlY3Q6Y2FuY2VsIGtleWJpbmRpbmcpLlxuICAvLyBNaXJyb3JzIHRoZSBwYXR0ZXJuIGluIFNldHRpbmdzLnRzeC5cbiAgdXNlS2V5YmluZGluZygnY29uZmlybTpubycsIGhhbmRsZVJ1bGVzQ2FuY2VsLCB7XG4gICAgY29udGV4dDogJ1NldHRpbmdzJyxcbiAgICBpc0FjdGl2ZTogaXNTZWFyY2hNb2RlQWN0aXZlICYmICFpc1NlYXJjaE1vZGUsXG4gIH0pXG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlUnVsZSA9ICgpID0+IHtcbiAgICBpZiAoIXNlbGVjdGVkUnVsZSkgcmV0dXJuXG5cbiAgICAvLyBGaW5kIHRoZSBhZGphY2VudCBydWxlIHRvIGZvY3VzIG9uIGFmdGVyIGRlbGV0aW9uXG4gICAgY29uc3QgeyBvcHRpb25zIH0gPSBnZXRSdWxlc09wdGlvbnMoc2VsZWN0ZWRSdWxlLnJ1bGVCZWhhdmlvciBhcyBUYWJUeXBlKVxuICAgIGNvbnN0IHNlbGVjdGVkS2V5ID0ganNvblN0cmluZ2lmeShzZWxlY3RlZFJ1bGUpXG4gICAgY29uc3QgcnVsZUtleXMgPSBvcHRpb25zXG4gICAgICAuZmlsdGVyKG9wdCA9PiBvcHQudmFsdWUgIT09ICdhZGQtbmV3LXJ1bGUnKVxuICAgICAgLm1hcChvcHQgPT4gb3B0LnZhbHVlKVxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHJ1bGVLZXlzLmluZGV4T2Yoc2VsZWN0ZWRLZXkpXG5cbiAgICAvLyBUcnkgdG8gZm9jdXMgb24gdGhlIG5leHQgcnVsZSwgb3IgdGhlIHByZXZpb3VzIGlmIGRlbGV0aW5nIHRoZSBsYXN0IG9uZVxuICAgIGxldCBuZXh0Rm9jdXNLZXk6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAgIGlmIChjdXJyZW50SW5kZXggIT09IC0xKSB7XG4gICAgICBpZiAoY3VycmVudEluZGV4IDwgcnVsZUtleXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAvLyBGb2N1cyBvbiB0aGUgbmV4dCBydWxlXG4gICAgICAgIG5leHRGb2N1c0tleSA9IHJ1bGVLZXlzW2N1cnJlbnRJbmRleCArIDFdXG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnRJbmRleCA+IDApIHtcbiAgICAgICAgLy8gRm9jdXMgb24gdGhlIHByZXZpb3VzIHJ1bGUgKHdlJ3JlIGRlbGV0aW5nIHRoZSBsYXN0IG9uZSlcbiAgICAgICAgbmV4dEZvY3VzS2V5ID0gcnVsZUtleXNbY3VycmVudEluZGV4IC0gMV1cbiAgICAgIH1cbiAgICB9XG4gICAgc2V0TGFzdEZvY3VzZWRSdWxlS2V5KG5leHRGb2N1c0tleSlcblxuICAgIHZvaWQgZGVsZXRlUGVybWlzc2lvblJ1bGUoe1xuICAgICAgcnVsZTogc2VsZWN0ZWRSdWxlLFxuICAgICAgaW5pdGlhbENvbnRleHQ6IHRvb2xQZXJtaXNzaW9uQ29udGV4dCxcbiAgICAgIHNldFRvb2xQZXJtaXNzaW9uQ29udGV4dCh0b29sUGVybWlzc2lvbkNvbnRleHQpIHtcbiAgICAgICAgc2V0QXBwU3RhdGUocHJldiA9PiAoe1xuICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgdG9vbFBlcm1pc3Npb25Db250ZXh0LFxuICAgICAgICB9KSlcbiAgICAgIH0sXG4gICAgfSlcblxuICAgIHNldENoYW5nZXMocHJldiA9PiBbXG4gICAgICAuLi5wcmV2LFxuICAgICAgYERlbGV0ZWQgJHtzZWxlY3RlZFJ1bGUucnVsZUJlaGF2aW9yfSBydWxlICR7Y2hhbGsuYm9sZChwZXJtaXNzaW9uUnVsZVZhbHVlVG9TdHJpbmcoc2VsZWN0ZWRSdWxlLnJ1bGVWYWx1ZSkpfWAsXG4gICAgXSlcbiAgICBzZXRTZWxlY3RlZFJ1bGUodW5kZWZpbmVkKVxuICB9XG5cbiAgaWYgKHNlbGVjdGVkUnVsZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8UnVsZURldGFpbHNcbiAgICAgICAgcnVsZT17c2VsZWN0ZWRSdWxlfVxuICAgICAgICBvbkRlbGV0ZT17aGFuZGxlRGVsZXRlUnVsZX1cbiAgICAgICAgb25DYW5jZWw9eygpID0+IHNldFNlbGVjdGVkUnVsZSh1bmRlZmluZWQpfVxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICBpZiAoXG4gICAgYWRkaW5nUnVsZVRvVGFiICYmXG4gICAgYWRkaW5nUnVsZVRvVGFiICE9PSAnd29ya3NwYWNlJyAmJlxuICAgIGFkZGluZ1J1bGVUb1RhYiAhPT0gJ3JlY2VudCdcbiAgKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQZXJtaXNzaW9uUnVsZUlucHV0XG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVSdWxlSW5wdXRDYW5jZWx9XG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVSdWxlSW5wdXRTdWJtaXR9XG4gICAgICAgIHJ1bGVCZWhhdmlvcj17YWRkaW5nUnVsZVRvVGFifVxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICBpZiAodmFsaWRhdGVkUnVsZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8QWRkUGVybWlzc2lvblJ1bGVzXG4gICAgICAgIG9uQWRkUnVsZXM9e2hhbmRsZUFkZFJ1bGVzU3VjY2Vzc31cbiAgICAgICAgb25DYW5jZWw9e2hhbmRsZUFkZFJ1bGVDYW5jZWx9XG4gICAgICAgIHJ1bGVWYWx1ZXM9e1t2YWxpZGF0ZWRSdWxlLnJ1bGVWYWx1ZV19XG4gICAgICAgIHJ1bGVCZWhhdmlvcj17dmFsaWRhdGVkUnVsZS5ydWxlQmVoYXZpb3J9XG4gICAgICAgIGluaXRpYWxDb250ZXh0PXt0b29sUGVybWlzc2lvbkNvbnRleHR9XG4gICAgICAgIHNldFRvb2xQZXJtaXNzaW9uQ29udGV4dD17dG9vbFBlcm1pc3Npb25Db250ZXh0ID0+IHtcbiAgICAgICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgdG9vbFBlcm1pc3Npb25Db250ZXh0LFxuICAgICAgICAgIH0pKVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICBpZiAoaXNBZGRpbmdXb3Jrc3BhY2VEaXJlY3RvcnkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFkZFdvcmtzcGFjZURpcmVjdG9yeVxuICAgICAgICBvbkFkZERpcmVjdG9yeT17KHBhdGgsIHJlbWVtYmVyKSA9PiB7XG4gICAgICAgICAgLy8gQXBwbHkgdGhlIHBlcm1pc3Npb24gdXBkYXRlIHRvIGFkZCB0aGUgZGlyZWN0b3J5XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb246IFBlcm1pc3Npb25VcGRhdGVEZXN0aW5hdGlvbiA9IHJlbWVtYmVyXG4gICAgICAgICAgICA/ICdsb2NhbFNldHRpbmdzJ1xuICAgICAgICAgICAgOiAnc2Vzc2lvbidcblxuICAgICAgICAgIGNvbnN0IHBlcm1pc3Npb25VcGRhdGUgPSB7XG4gICAgICAgICAgICB0eXBlOiAnYWRkRGlyZWN0b3JpZXMnIGFzIGNvbnN0LFxuICAgICAgICAgICAgZGlyZWN0b3JpZXM6IFtwYXRoXSxcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDb250ZXh0ID0gYXBwbHlQZXJtaXNzaW9uVXBkYXRlKFxuICAgICAgICAgICAgdG9vbFBlcm1pc3Npb25Db250ZXh0LFxuICAgICAgICAgICAgcGVybWlzc2lvblVwZGF0ZSxcbiAgICAgICAgICApXG4gICAgICAgICAgc2V0QXBwU3RhdGUocHJldiA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIHRvb2xQZXJtaXNzaW9uQ29udGV4dDogdXBkYXRlZENvbnRleHQsXG4gICAgICAgICAgfSkpXG5cbiAgICAgICAgICAvLyBQZXJzaXN0IGlmIHJlbWVtYmVyIGlzIHRydWVcbiAgICAgICAgICBpZiAocmVtZW1iZXIpIHtcbiAgICAgICAgICAgIHBlcnNpc3RQZXJtaXNzaW9uVXBkYXRlKHBlcm1pc3Npb25VcGRhdGUpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2V0Q2hhbmdlcyhwcmV2ID0+IFtcbiAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICBgQWRkZWQgZGlyZWN0b3J5ICR7Y2hhbGsuYm9sZChwYXRoKX0gdG8gd29ya3NwYWNlJHtyZW1lbWJlciA/ICcgYW5kIHNhdmVkIHRvIGxvY2FsIHNldHRpbmdzJyA6ICcgZm9yIHRoaXMgc2Vzc2lvbid9YCxcbiAgICAgICAgICBdKVxuICAgICAgICAgIHNldElzQWRkaW5nV29ya3NwYWNlRGlyZWN0b3J5KGZhbHNlKVxuICAgICAgICB9fVxuICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0SXNBZGRpbmdXb3Jrc3BhY2VEaXJlY3RvcnkoZmFsc2UpfVxuICAgICAgICBwZXJtaXNzaW9uQ29udGV4dD17dG9vbFBlcm1pc3Npb25Db250ZXh0fVxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICBpZiAocmVtb3ZpbmdEaXJlY3RvcnkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlbW92ZVdvcmtzcGFjZURpcmVjdG9yeVxuICAgICAgICBkaXJlY3RvcnlQYXRoPXtyZW1vdmluZ0RpcmVjdG9yeX1cbiAgICAgICAgb25SZW1vdmU9eygpID0+IHtcbiAgICAgICAgICBzZXRDaGFuZ2VzKHByZXYgPT4gW1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIGBSZW1vdmVkIGRpcmVjdG9yeSAke2NoYWxrLmJvbGQocmVtb3ZpbmdEaXJlY3RvcnkpfSBmcm9tIHdvcmtzcGFjZWAsXG4gICAgICAgICAgXSlcbiAgICAgICAgICBzZXRSZW1vdmluZ0RpcmVjdG9yeShudWxsKVxuICAgICAgICB9fVxuICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0UmVtb3ZpbmdEaXJlY3RvcnkobnVsbCl9XG4gICAgICAgIHBlcm1pc3Npb25Db250ZXh0PXt0b29sUGVybWlzc2lvbkNvbnRleHR9XG4gICAgICAgIHNldFBlcm1pc3Npb25Db250ZXh0PXt0b29sUGVybWlzc2lvbkNvbnRleHQgPT4ge1xuICAgICAgICAgIHNldEFwcFN0YXRlKHByZXYgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICB0b29sUGVybWlzc2lvbkNvbnRleHQsXG4gICAgICAgICAgfSkpXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIClcbiAgfVxuXG4gIGNvbnN0IHNoYXJlZFJ1bGVzUHJvcHMgPSB7XG4gICAgc2VhcmNoUXVlcnksXG4gICAgaXNTZWFyY2hNb2RlLFxuICAgIGlzRm9jdXNlZDogaXNUZXJtaW5hbEZvY3VzZWQsXG4gICAgb25DYW5jZWw6IGhhbmRsZVJ1bGVzQ2FuY2VsLFxuICAgIGxhc3RGb2N1c2VkUnVsZUtleSxcbiAgICBjdXJzb3JPZmZzZXQ6IHNlYXJjaEN1cnNvck9mZnNldCxcbiAgICBnZXRSdWxlc09wdGlvbnMsXG4gICAgaGFuZGxlVG9vbFNlbGVjdCxcbiAgICBvbkhlYWRlckZvY3VzQ2hhbmdlOiBoYW5kbGVIZWFkZXJGb2N1c0NoYW5nZSxcbiAgfVxuXG4gIGNvbnN0IGlzSGlkZGVuID1cbiAgICAhIXNlbGVjdGVkUnVsZSB8fFxuICAgICEhYWRkaW5nUnVsZVRvVGFiIHx8XG4gICAgISF2YWxpZGF0ZWRSdWxlIHx8XG4gICAgaXNBZGRpbmdXb3Jrc3BhY2VEaXJlY3RvcnkgfHxcbiAgICAhIXJlbW92aW5nRGlyZWN0b3J5XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBvbktleURvd249e2hhbmRsZUtleURvd259PlxuICAgICAgPFBhbmUgY29sb3I9XCJwZXJtaXNzaW9uXCI+XG4gICAgICAgIDxUYWJzXG4gICAgICAgICAgdGl0bGU9XCJQZXJtaXNzaW9uczpcIlxuICAgICAgICAgIGNvbG9yPVwicGVybWlzc2lvblwiXG4gICAgICAgICAgZGVmYXVsdFRhYj17ZGVmYXVsdFRhYn1cbiAgICAgICAgICBoaWRkZW49e2lzSGlkZGVufVxuICAgICAgICAgIGluaXRpYWxIZWFkZXJGb2N1c2VkPXshaGFzRGVuaWFsc31cbiAgICAgICAgICBuYXZGcm9tQ29udGVudD17IWlzU2VhcmNoTW9kZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUYWIgaWQ9XCJyZWNlbnRcIiB0aXRsZT1cIlJlY2VudGx5IGRlbmllZFwiPlxuICAgICAgICAgICAgPFJlY2VudERlbmlhbHNUYWJcbiAgICAgICAgICAgICAgb25IZWFkZXJGb2N1c0NoYW5nZT17aGFuZGxlSGVhZGVyRm9jdXNDaGFuZ2V9XG4gICAgICAgICAgICAgIG9uU3RhdGVDaGFuZ2U9e2hhbmRsZURlbmlhbFN0YXRlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICA8VGFiIGlkPVwiYWxsb3dcIiB0aXRsZT1cIkFsbG93XCI+XG4gICAgICAgICAgICA8UGVybWlzc2lvblJ1bGVzVGFiIHRhYj1cImFsbG93XCIgey4uLnNoYXJlZFJ1bGVzUHJvcHN9IC8+XG4gICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgPFRhYiBpZD1cImFza1wiIHRpdGxlPVwiQXNrXCI+XG4gICAgICAgICAgICA8UGVybWlzc2lvblJ1bGVzVGFiIHRhYj1cImFza1wiIHsuLi5zaGFyZWRSdWxlc1Byb3BzfSAvPlxuICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgIDxUYWIgaWQ9XCJkZW55XCIgdGl0bGU9XCJEZW55XCI+XG4gICAgICAgICAgICA8UGVybWlzc2lvblJ1bGVzVGFiIHRhYj1cImRlbnlcIiB7Li4uc2hhcmVkUnVsZXNQcm9wc30gLz5cbiAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICA8VGFiIGlkPVwid29ya3NwYWNlXCIgdGl0bGU9XCJXb3Jrc3BhY2VcIj5cbiAgICAgICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICBDbGF1ZGUgQ29kZSBjYW4gcmVhZCBmaWxlcyBpbiB0aGUgd29ya3NwYWNlLCBhbmQgbWFrZSBlZGl0cyB3aGVuXG4gICAgICAgICAgICAgICAgYXV0by1hY2NlcHQgZWRpdHMgaXMgb24uXG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPFdvcmtzcGFjZVRhYlxuICAgICAgICAgICAgICAgIG9uRXhpdD17b25FeGl0fVxuICAgICAgICAgICAgICAgIHRvb2xQZXJtaXNzaW9uQ29udGV4dD17dG9vbFBlcm1pc3Npb25Db250ZXh0fVxuICAgICAgICAgICAgICAgIG9uUmVxdWVzdEFkZERpcmVjdG9yeT17aGFuZGxlUmVxdWVzdEFkZERpcmVjdG9yeX1cbiAgICAgICAgICAgICAgICBvblJlcXVlc3RSZW1vdmVEaXJlY3Rvcnk9e2hhbmRsZVJlcXVlc3RSZW1vdmVEaXJlY3Rvcnl9XG4gICAgICAgICAgICAgICAgb25IZWFkZXJGb2N1c0NoYW5nZT17aGFuZGxlSGVhZGVyRm9jdXNDaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L1RhYj5cbiAgICAgICAgPC9UYWJzPlxuICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0gcGFkZGluZ0xlZnQ9ezF9PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAge2V4aXRTdGF0ZS5wZW5kaW5nID8gKFxuICAgICAgICAgICAgICA8PlByZXNzIHtleGl0U3RhdGUua2V5TmFtZX0gYWdhaW4gdG8gZXhpdDwvPlxuICAgICAgICAgICAgKSA6IGhlYWRlckZvY3VzZWQgPyAoXG4gICAgICAgICAgICAgIDw+4oaQL+KGkiB0YWIgc3dpdGNoIMK3IOKGkyByZXR1cm4gwrcgRXNjIGNhbmNlbDwvPlxuICAgICAgICAgICAgKSA6IGlzU2VhcmNoTW9kZSA/IChcbiAgICAgICAgICAgICAgPD5UeXBlIHRvIGZpbHRlciDCtyBFbnRlci/ihpMgc2VsZWN0IMK3IOKGkSB0YWJzIMK3IEVzYyBjbGVhcjwvPlxuICAgICAgICAgICAgKSA6IGhhc0RlbmlhbHMgJiYgZGVmYXVsdFRhYiA9PT0gJ3JlY2VudCcgPyAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgRW50ZXIgYXBwcm92ZSDCtyByIHJldHJ5IMK3IOKGkeKGkyBuYXZpZ2F0ZSDCtyDihpAv4oaSIHN3aXRjaCDCtyBFc2MgY2FuY2VsXG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICDihpHihpMgbmF2aWdhdGUgwrcgRW50ZXIgc2VsZWN0IMK3IFR5cGUgdG8gc2VhcmNoIMK3IOKGkC/ihpIgc3dpdGNoIMK3IEVzY1xuICAgICAgICAgICAgICAgIGNhbmNlbFxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvUGFuZT5cbiAgICA8L0JveD5cbiAgKVxufVxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUGVybWlzc2lvblJ1bGVMaXN0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wZXJtaXNzaW9ucy9ydWxlcy9QZXJtaXNzaW9uUnVsZUxpc3QuanMnXG5pbXBvcnQgdHlwZSB7IExvY2FsSlNYQ29tbWFuZENhbGwgfSBmcm9tICcuLi8uLi90eXBlcy9jb21tYW5kLmpzJ1xuaW1wb3J0IHsgY3JlYXRlUGVybWlzc2lvblJldHJ5TWVzc2FnZSB9IGZyb20gJy4uLy4uL3V0aWxzL21lc3NhZ2VzLmpzJ1xuXG5leHBvcnQgY29uc3QgY2FsbDogTG9jYWxKU1hDb21tYW5kQ2FsbCA9IGFzeW5jIChvbkRvbmUsIGNvbnRleHQpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UGVybWlzc2lvblJ1bGVMaXN0XG4gICAgICBvbkV4aXQ9e29uRG9uZX1cbiAgICAgIG9uUmV0cnlEZW5pYWxzPXtjb21tYW5kcyA9PiB7XG4gICAgICAgIGNvbnRleHQuc2V0TWVzc2FnZXMocHJldiA9PiBbXG4gICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICBjcmVhdGVQZXJtaXNzaW9uUmV0cnlNZXNzYWdlKGNvbW1hbmRzKSxcbiAgICAgICAgXSlcbiAgICAgIH19XG4gICAgLz5cbiAgKVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNPLFNBQUFBLDBCQUFBQyxJQUFBO0FBQUEsUUFBQUMsSUFBQUMsRUFBQSxDQUFBO0FBQW1DLFFBQUE7SUFBQUM7RUFBQSxJQUFBSDtBQUd4QyxVQUFRRyxVQUFTQyxVQUFTO0lBQUEsS0FDbkJDLFNBQVFDLE1BQUs7QUFDaEIsVUFBSUgsVUFBU0ksYUFBWTtBQUN2QixZQUFJSixVQUFTSSxZQUFZQyxTQUFVLElBQUksR0FBQztBQUFBLGNBQUFDO0FBQUEsY0FB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QUFRLENBQUMsQ0FDdkM7TUFDSCxHQUFFO0lBR1I7OzsiLAogICJuYW1lcyI6IFsiUGVybWlzc2lvblJ1bGVEZXNjcmlwdGlvbiIsICJ0MCIsICIkIiwgIl9jIiwgInJ1bGVWYWx1ZSIsICJ0b29sTmFtZSIsICJCYXNoVG9vbCIsICJuYW1lIiwgInJ1bGVDb250ZW50IiwgImVuZHNXaXRoIiwgInQxIiwgInNsaWNlIiwgInQyIiwgIlN5bWJvbCIsICJmb3IiLCAib3B0aW9uRm9yUGVybWlzc2lvblNhdmVEZXN0aW5hdGlvbiIsICJzYXZlRGVzdGluYXRpb24iLCAibGFiZWwiLCAiZGVzY3JpcHRpb24iLCAiZ2V0UmVsYXRpdmVTZXR0aW5nc0ZpbGVQYXRoRm9yU291cmNlIiwgInZhbHVlIiwgIkFkZFBlcm1pc3Npb25SdWxlcyIsICJ0MCIsICIkIiwgIl9jIiwgIm9uQWRkUnVsZXMiLCAib25DYW5jZWwiLCAicnVsZVZhbHVlcyIsICJydWxlQmVoYXZpb3IiLCAiaW5pdGlhbENvbnRleHQiLCAic2V0VG9vbFBlcm1pc3Npb25Db250ZXh0IiwgInQxIiwgIlN5bWJvbCIsICJmb3IiLCAiU09VUkNFUyIsICJtYXAiLCAiYWxsT3B0aW9ucyIsICJ0MiIsICJzZWxlY3RlZFZhbHVlIiwgImluY2x1ZGVzIiwgImRlc3RpbmF0aW9uIiwgInVwZGF0ZWRDb250ZXh0IiwgImFwcGx5UGVybWlzc2lvblVwZGF0ZSIsICJ0eXBlIiwgInJ1bGVzIiwgImJlaGF2aW9yIiwgInBlcnNpc3RQZXJtaXNzaW9uVXBkYXRlIiwgInJ1bGVWYWx1ZSIsICJzb3VyY2UiLCAic2FuZGJveEF1dG9BbGxvd0VuYWJsZWQiLCAiU2FuZGJveE1hbmFnZXIiLCAiaXNTYW5kYm94aW5nRW5hYmxlZCIsICJpc0F1dG9BbGxvd0Jhc2hJZlNhbmRib3hlZEVuYWJsZWQiLCAiYWxsVW5yZWFjaGFibGUiLCAiZGV0ZWN0VW5yZWFjaGFibGVSdWxlcyIsICJuZXdVbnJlYWNoYWJsZSIsICJmaWx0ZXIiLCAidSIsICJzb21lIiwgInJ2IiwgInRvb2xOYW1lIiwgInJ1bGUiLCAicnVsZUNvbnRlbnQiLCAibGVuZ3RoIiwgInVuZGVmaW5lZCIsICJvblNlbGVjdCIsICJ0MyIsICJwbHVyYWwiLCAidGl0bGUiLCAidDQiLCAiX3RlbXAiLCAidDUiLCAidDYiLCAidDciLCAidDgiLCAidDkiLCAidDEwIiwgInJ1bGVWYWx1ZV8wIiwgInBlcm1pc3Npb25SdWxlVmFsdWVUb1N0cmluZyIsICJQZXJtaXNzaW9uUnVsZUlucHV0IiwgInQwIiwgIiQiLCAiX2MiLCAib25DYW5jZWwiLCAib25TdWJtaXQiLCAicnVsZUJlaGF2aW9yIiwgImlucHV0VmFsdWUiLCAic2V0SW5wdXRWYWx1ZSIsICJ1c2VTdGF0ZSIsICJjdXJzb3JPZmZzZXQiLCAic2V0Q3Vyc29yT2Zmc2V0IiwgImV4aXRTdGF0ZSIsICJ1c2VFeGl0T25DdHJsQ0RXaXRoS2V5YmluZGluZ3MiLCAidDEiLCAiU3ltYm9sIiwgImZvciIsICJjb250ZXh0IiwgInVzZUtleWJpbmRpbmciLCAiY29sdW1ucyIsICJ1c2VUZXJtaW5hbFNpemUiLCAidGV4dElucHV0Q29sdW1ucyIsICJ0MiIsICJ2YWx1ZSIsICJ0cmltbWVkVmFsdWUiLCAidHJpbSIsICJsZW5ndGgiLCAicnVsZVZhbHVlIiwgInBlcm1pc3Npb25SdWxlVmFsdWVGcm9tU3RyaW5nIiwgImhhbmRsZVN1Ym1pdCIsICJ0MyIsICJ0NCIsICJ0NSIsICJ0NiIsICJwZXJtaXNzaW9uUnVsZVZhbHVlVG9TdHJpbmciLCAidG9vbE5hbWUiLCAiV2ViRmV0Y2hUb29sIiwgIm5hbWUiLCAidDciLCAiQmFzaFRvb2wiLCAicnVsZUNvbnRlbnQiLCAidDgiLCAiZmlndXJlcyIsICJlbGxpcHNpcyIsICJ0OSIsICJ0MTAiLCAia2V5TmFtZSIsICJwZW5kaW5nIiwgInQxMSIsICJSZWNlbnREZW5pYWxzVGFiIiwgInQwIiwgIiQiLCAiX2MiLCAib25IZWFkZXJGb2N1c0NoYW5nZSIsICJvblN0YXRlQ2hhbmdlIiwgImhlYWRlckZvY3VzZWQiLCAiZm9jdXNIZWFkZXIiLCAidXNlVGFiSGVhZGVyRm9jdXMiLCAidDEiLCAidDIiLCAidXNlRWZmZWN0IiwgImRlbmlhbHMiLCAidXNlU3RhdGUiLCAiX3RlbXAiLCAiYXBwcm92ZWQiLCAic2V0QXBwcm92ZWQiLCAiX3RlbXAyIiwgInJldHJ5IiwgInNldFJldHJ5IiwgIl90ZW1wMyIsICJmb2N1c2VkSWR4IiwgInNldEZvY3VzZWRJZHgiLCAidDMiLCAidDQiLCAidDUiLCAiU3ltYm9sIiwgImZvciIsICJ2YWx1ZSIsICJpZHgiLCAiTnVtYmVyIiwgInByZXYiLCAibmV4dCIsICJTZXQiLCAiaGFzIiwgImRlbGV0ZSIsICJhZGQiLCAiaGFuZGxlU2VsZWN0IiwgInQ2IiwgInZhbHVlXzAiLCAiaGFuZGxlRm9jdXMiLCAidDciLCAiaW5wdXQiLCAiX2tleSIsICJwcmV2XzAiLCAibmV4dF8wIiwgInByZXZfMSIsICJuZXh0XzEiLCAidDgiLCAibGVuZ3RoIiwgInQ5IiwgImlzQWN0aXZlIiwgInVzZUlucHV0IiwgInQxMCIsICJ0MTEiLCAiZCIsICJpZHhfMCIsICJpc0FwcHJvdmVkIiwgInN1ZmZpeCIsICJsYWJlbCIsICJkaXNwbGF5IiwgIlN0cmluZyIsICJtYXAiLCAib3B0aW9ucyIsICJ0MTIiLCAiTWF0aCIsICJtaW4iLCAidDEzIiwgImdldEF1dG9Nb2RlRGVuaWFscyIsICJSZW1vdmVXb3Jrc3BhY2VEaXJlY3RvcnkiLCAidDAiLCAiJCIsICJfYyIsICJkaXJlY3RvcnlQYXRoIiwgIm9uUmVtb3ZlIiwgIm9uQ2FuY2VsIiwgInBlcm1pc3Npb25Db250ZXh0IiwgInNldFBlcm1pc3Npb25Db250ZXh0IiwgInQxIiwgInVwZGF0ZWRDb250ZXh0IiwgImFwcGx5UGVybWlzc2lvblVwZGF0ZSIsICJ0eXBlIiwgImRpcmVjdG9yaWVzIiwgImRlc3RpbmF0aW9uIiwgImhhbmRsZVJlbW92ZSIsICJ0MiIsICJ2YWx1ZSIsICJoYW5kbGVTZWxlY3QiLCAidDMiLCAidDQiLCAiU3ltYm9sIiwgImZvciIsICJ0NSIsICJsYWJlbCIsICJ0NiIsICJ0NyIsICJXb3Jrc3BhY2VUYWIiLCAidDAiLCAiJCIsICJfYyIsICJvbkV4aXQiLCAidG9vbFBlcm1pc3Npb25Db250ZXh0IiwgIm9uUmVxdWVzdEFkZERpcmVjdG9yeSIsICJvblJlcXVlc3RSZW1vdmVEaXJlY3RvcnkiLCAib25IZWFkZXJGb2N1c0NoYW5nZSIsICJoZWFkZXJGb2N1c2VkIiwgImZvY3VzSGVhZGVyIiwgInVzZVRhYkhlYWRlckZvY3VzIiwgInQxIiwgInQyIiwgInVzZUVmZmVjdCIsICJ0MyIsICJhZGRpdGlvbmFsV29ya2luZ0RpcmVjdG9yaWVzIiwgIkFycmF5IiwgImZyb20iLCAia2V5cyIsICJtYXAiLCAiX3RlbXAiLCAiYWRkaXRpb25hbERpcmVjdG9yaWVzIiwgInQ0IiwgInNlbGVjdGVkVmFsdWUiLCAiZGlyZWN0b3J5IiwgImZpbmQiLCAiZCIsICJwYXRoIiwgImlzRGVsZXRhYmxlIiwgImhhbmRsZURpcmVjdG9yeVNlbGVjdCIsICJ0NSIsICJkaXNwbGF5IiwgImhhbmRsZUNhbmNlbCIsICJvcHRzIiwgIl90ZW1wMiIsICJ0NiIsICJTeW1ib2wiLCAiZm9yIiwgImxhYmVsIiwgImZpZ3VyZXMiLCAiZWxsaXBzaXMiLCAidmFsdWUiLCAicHVzaCIsICJvcHRpb25zIiwgImdldE9yaWdpbmFsQ3dkIiwgInQ3IiwgIk1hdGgiLCAibWluIiwgImxlbmd0aCIsICJ0OCIsICJkaXIiLCAiaXNDdXJyZW50IiwgIlJ1bGVTb3VyY2VUZXh0IiwgInQwIiwgIiQiLCAiX2MiLCAicnVsZSIsICJ0MSIsICJzb3VyY2UiLCAicGVybWlzc2lvblJ1bGVTb3VyY2VEaXNwbGF5U3RyaW5nIiwgInQyIiwgInQzIiwgImdldFJ1bGVCZWhhdmlvckxhYmVsIiwgInJ1bGVCZWhhdmlvciIsICJSdWxlRGV0YWlscyIsICJvbkRlbGV0ZSIsICJvbkNhbmNlbCIsICJleGl0U3RhdGUiLCAidXNlRXhpdE9uQ3RybENEV2l0aEtleWJpbmRpbmdzIiwgIlN5bWJvbCIsICJmb3IiLCAiY29udGV4dCIsICJ1c2VLZXliaW5kaW5nIiwgInJ1bGVWYWx1ZSIsICJwZXJtaXNzaW9uUnVsZVZhbHVlVG9TdHJpbmciLCAidDQiLCAidDUiLCAidDYiLCAicnVsZURlc2NyaXB0aW9uIiwgInQ3IiwgImtleU5hbWUiLCAicGVuZGluZyIsICJmb290ZXIiLCAidDgiLCAidDkiLCAidDEwIiwgInQxMSIsICJfIiwgInQxMiIsICJsYWJlbCIsICJ2YWx1ZSIsICJ0MTMiLCAidDE0IiwgInQxNSIsICJSdWxlc1RhYkNvbnRlbnQiLCAicHJvcHMiLCAib3B0aW9ucyIsICJzZWFyY2hRdWVyeSIsICJpc1NlYXJjaE1vZGUiLCAiaXNGb2N1c2VkIiwgIm9uU2VsZWN0IiwgImxhc3RGb2N1c2VkUnVsZUtleSIsICJjdXJzb3JPZmZzZXQiLCAib25IZWFkZXJGb2N1c0NoYW5nZSIsICJ0YWJXaWR0aCIsICJ1c2VUYWJzV2lkdGgiLCAiaGVhZGVyRm9jdXNlZCIsICJmb2N1c0hlYWRlciIsICJibHVySGVhZGVyIiwgInVzZVRhYkhlYWRlckZvY3VzIiwgInVzZUVmZmVjdCIsICJNYXRoIiwgIm1pbiIsICJsZW5ndGgiLCAiUGVybWlzc2lvblJ1bGVzVGFiIiwgIlQwIiwgIlQxIiwgImhhbmRsZVRvb2xTZWxlY3QiLCAicnVsZXNQcm9wcyIsICJ0YWIiLCAiZ2V0UnVsZXNPcHRpb25zIiwgIkJveCIsICJ1bmRlZmluZWQiLCAiYWxsb3ciLCAiYXNrIiwgImRlbnkiLCAidiIsICJQZXJtaXNzaW9uUnVsZUxpc3QiLCAib25FeGl0IiwgImluaXRpYWxUYWIiLCAib25SZXRyeURlbmlhbHMiLCAiZ2V0QXV0b01vZGVEZW5pYWxzIiwgImhhc0RlbmlhbHMiLCAiZGVmYXVsdFRhYiIsICJjaGFuZ2VzIiwgInNldENoYW5nZXMiLCAidXNlU3RhdGUiLCAidG9vbFBlcm1pc3Npb25Db250ZXh0IiwgInVzZUFwcFN0YXRlIiwgIl90ZW1wIiwgInNldEFwcFN0YXRlIiwgInVzZVNldEFwcFN0YXRlIiwgImlzVGVybWluYWxGb2N1c2VkIiwgInVzZVRlcm1pbmFsRm9jdXMiLCAiYXBwcm92ZWQiLCAiU2V0IiwgInJldHJ5IiwgImRlbmlhbHMiLCAiZGVuaWFsU3RhdGVSZWYiLCAidXNlUmVmIiwgInNfMCIsICJjdXJyZW50IiwgInMiLCAiaGFuZGxlRGVuaWFsU3RhdGVDaGFuZ2UiLCAic2VsZWN0ZWRSdWxlIiwgInNldFNlbGVjdGVkUnVsZSIsICJzZXRMYXN0Rm9jdXNlZFJ1bGVLZXkiLCAiYWRkaW5nUnVsZVRvVGFiIiwgInNldEFkZGluZ1J1bGVUb1RhYiIsICJ2YWxpZGF0ZWRSdWxlIiwgInNldFZhbGlkYXRlZFJ1bGUiLCAiaXNBZGRpbmdXb3Jrc3BhY2VEaXJlY3RvcnkiLCAic2V0SXNBZGRpbmdXb3Jrc3BhY2VEaXJlY3RvcnkiLCAicmVtb3ZpbmdEaXJlY3RvcnkiLCAic2V0UmVtb3ZpbmdEaXJlY3RvcnkiLCAic2V0SXNTZWFyY2hNb2RlIiwgInNldEhlYWRlckZvY3VzZWQiLCAiZm9jdXNlZCIsICJoYW5kbGVIZWFkZXJGb2N1c0NoYW5nZSIsICJtYXAiLCAiTWFwIiwgImdldEFsbG93UnVsZXMiLCAiZm9yRWFjaCIsICJzZXQiLCAianNvblN0cmluZ2lmeSIsICJhbGxvd1J1bGVzQnlLZXkiLCAibWFwXzAiLCAiZ2V0RGVueVJ1bGVzIiwgInJ1bGVfMCIsICJkZW55UnVsZXNCeUtleSIsICJtYXBfMSIsICJnZXRBc2tSdWxlcyIsICJydWxlXzEiLCAiYXNrUnVsZXNCeUtleSIsICJxdWVyeSIsICJydWxlc0J5S2V5IiwgInB1c2giLCAiZmlndXJlcyIsICJlbGxpcHNpcyIsICJzb3J0ZWRSdWxlS2V5cyIsICJBcnJheSIsICJmcm9tIiwgImtleXMiLCAic29ydCIsICJhIiwgImIiLCAicnVsZUEiLCAiZ2V0IiwgInJ1bGVCIiwgInJ1bGVBU3RyaW5nIiwgInRvTG93ZXJDYXNlIiwgInJ1bGVCU3RyaW5nIiwgImxvY2FsZUNvbXBhcmUiLCAibG93ZXJRdWVyeSIsICJydWxlS2V5IiwgInJ1bGVfMiIsICJydWxlU3RyaW5nIiwgImluY2x1ZGVzIiwgImlzU2VhcmNoTW9kZUFjdGl2ZSIsICJpc0FjdGl2ZSIsICJzZXRRdWVyeSIsICJzZXRTZWFyY2hRdWVyeSIsICJzZWFyY2hDdXJzb3JPZmZzZXQiLCAidXNlU2VhcmNoSW5wdXQiLCAiZSIsICJjdHJsIiwgIm1ldGEiLCAia2V5IiwgInByZXZlbnREZWZhdWx0IiwgImhhbmRsZUtleURvd24iLCAic2VsZWN0ZWRWYWx1ZSIsICJ0YWJfMCIsICJydWxlc0J5S2V5XzAiLCAiaGFuZGxlUnVsZUlucHV0Q2FuY2VsIiwgImhhbmRsZVJ1bGVJbnB1dFN1Ym1pdCIsICJydWxlcyIsICJ1bnJlYWNoYWJsZSIsICJydWxlXzMiLCAicHJldiIsICJjaGFsayIsICJib2xkIiwgInUiLCAic2V2ZXJpdHkiLCAic2hhZG93VHlwZSIsICJwcmV2XzAiLCAieWVsbG93IiwgIndhcm5pbmciLCAiZGltIiwgInJlYXNvbiIsICJmaXgiLCAiaGFuZGxlQWRkUnVsZXNTdWNjZXNzIiwgImhhbmRsZUFkZFJ1bGVDYW5jZWwiLCAidDE2IiwgImhhbmRsZVJlcXVlc3RBZGREaXJlY3RvcnkiLCAidDE3IiwgInBhdGgiLCAiaGFuZGxlUmVxdWVzdFJlbW92ZURpcmVjdG9yeSIsICJ0MTgiLCAic18xIiwgImRlbmlhbHNGb3IiLCAiaWR4IiwgImZpbHRlciIsICJfdGVtcDIiLCAicmV0cnlEZW5pYWxzIiwgImNvbW1hbmRzIiwgIl90ZW1wMyIsICJzaG91bGRRdWVyeSIsICJtZXRhTWVzc2FnZXMiLCAiam9pbiIsICJhcHByb3ZlZERlbmlhbHMiLCAiYXBwcm92ZWRNc2ciLCAiX3RlbXA0IiwgImRpc3BsYXkiLCAiaGFuZGxlUnVsZXNDYW5jZWwiLCAidDE5IiwgInQyMCIsICJ0MjEiLCAib3B0aW9uc18wIiwgInNlbGVjdGVkS2V5IiwgInJ1bGVLZXlzIiwgIl90ZW1wNSIsICJfdGVtcDYiLCAiY3VycmVudEluZGV4IiwgImluZGV4T2YiLCAibmV4dEZvY3VzS2V5IiwgImRlbGV0ZVBlcm1pc3Npb25SdWxlIiwgImluaXRpYWxDb250ZXh0IiwgInNldFRvb2xQZXJtaXNzaW9uQ29udGV4dCIsICJ0b29sUGVybWlzc2lvbkNvbnRleHRfMCIsICJwcmV2XzEiLCAicHJldl8yIiwgImhhbmRsZURlbGV0ZVJ1bGUiLCAidDIyIiwgInQyMyIsICJ0b29sUGVybWlzc2lvbkNvbnRleHRfMSIsICJwcmV2XzMiLCAidDI0IiwgInBhdGhfMCIsICJyZW1lbWJlciIsICJkZXN0aW5hdGlvbiIsICJwZXJtaXNzaW9uVXBkYXRlIiwgInR5cGUiLCAiZGlyZWN0b3JpZXMiLCAidXBkYXRlZENvbnRleHQiLCAiYXBwbHlQZXJtaXNzaW9uVXBkYXRlIiwgInByZXZfNCIsICJwZXJzaXN0UGVybWlzc2lvblVwZGF0ZSIsICJwcmV2XzUiLCAicHJldl82IiwgInRvb2xQZXJtaXNzaW9uQ29udGV4dF8yIiwgInByZXZfNyIsICJ0MjUiLCAic2hhcmVkUnVsZXNQcm9wcyIsICJpc0hpZGRlbiIsICJ0MjYiLCAidDI3IiwgInQyOCIsICJ0MjkiLCAidDMwIiwgInQzMSIsICJ0MzIiLCAidDMzIiwgIm9wdF8wIiwgIm9wdCIsICJkXzEiLCAiZCIsICJkXzAiLCAiY2FsbCIsICJpbml0X3Blcm1pc3Npb25zIiwgIm9uRG9uZSIsICJjb250ZXh0IiwgImNvbW1hbmRzIiwgInNldE1lc3NhZ2VzIiwgInByZXYiLCAiY3JlYXRlUGVybWlzc2lvblJldHJ5TWVzc2FnZSJdCn0K
