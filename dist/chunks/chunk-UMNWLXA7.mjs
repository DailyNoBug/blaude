#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  ModelPicker,
  init_ModelPicker,
  init_extraUsage,
  isBilledAsExtraUsage
} from "./chunk-OXDIAV6O.mjs";
import {
  ThemePicker,
  init_ThemePicker
} from "./chunk-L3AKOYGV.mjs";
import {
  OverageCreditUpsell,
  init_OverageCreditUpsell,
  isEligibleForOverageCreditGrant
} from "./chunk-YO4OQA5U.mjs";
import {
  SearchBox,
  init_SearchBox,
  init_useSearchInput,
  useSearchInput
} from "./chunk-EUDJO4ZU.mjs";
import {
  Tab,
  Tabs,
  init_Tabs,
  useTabHeaderFocus
} from "./chunk-BJ6ITGWS.mjs";
import {
  ClaudeMdExternalIncludesDialog,
  init_ClaudeMdExternalIncludesDialog
} from "./chunk-PTZMBSS2.mjs";
import {
  fetchUtilization,
  init_usage
} from "./chunk-WX55776A.mjs";
import {
  BriefTool_exports,
  DEFAULT_OUTPUT_STYLE_NAME,
  OUTPUT_STYLE_CONFIG,
  ProgressBar,
  Select,
  TextInput,
  buildAPIProviderProperties,
  buildAccountProperties,
  buildIDEProperties,
  buildInstallationDiagnostics,
  buildInstallationHealthDiagnostics,
  buildMcpProperties,
  buildMemoryDiagnostics,
  buildSandboxProperties,
  buildSettingSourcesProperties,
  extraUsage,
  formatCost,
  getAllOutputStyles,
  getAutoModeEnabledState,
  getCurrentSessionTitle,
  getExternalClaudeMdIncludes,
  getHardcodedTeammateModelFallback,
  getMemoryFiles,
  getModelDisplayLabel,
  hasAccessToIDEExtensionDiffFeature,
  hasAutoModeOptInAnySource,
  hasExternalClaudeMdIncludes,
  init_AppState,
  init_BriefTool,
  init_CustomSelect,
  init_ProgressBar,
  init_TextInput,
  init_claudemd,
  init_cost_tracker,
  init_extra_usage,
  init_ide,
  init_outputStyles,
  init_permissionSetup,
  init_select,
  init_sessionStorage,
  init_status,
  init_teammateModel,
  isSupportedTerminal,
  transitionPlanAutoMode,
  useAppState,
  useAppStateStore,
  useSetAppState
} from "./chunk-OPLSBIOC.mjs";
import {
  Byline,
  ConfigurableShortcutHint,
  Dialog,
  KeyboardShortcutHint,
  init_Byline,
  init_ConfigurableShortcutHint,
  init_Dialog,
  init_KeyboardShortcutHint
} from "./chunk-SR5JKAMQ.mjs";
import {
  init_useExitOnCtrlCDWithKeybindings,
  useExitOnCtrlCDWithKeybindings
} from "./chunk-ADZQUMT7.mjs";
import {
  Pane,
  init_Pane,
  init_modalContext,
  init_useKeybinding,
  init_useTerminalSize,
  useIsInsideModal,
  useKeybinding,
  useKeybindings,
  useModalOrTerminalSize,
  useTerminalSize
} from "./chunk-2LTMY2QU.mjs";
import {
  clearCliTeammateModeOverride,
  getCliTeammateModeOverride,
  init_teammateModeSnapshot
} from "./chunk-MPXK3SNP.mjs";
import {
  ThemedBox_default,
  ThemedText,
  c,
  init_fullscreen,
  init_ink,
  init_react_compiler_runtime,
  isFullscreenEnvEnabled,
  useTerminalFocus,
  useTheme,
  useThemeSetting
} from "./chunk-IVRGECFY.mjs";
import {
  Fragment,
  Suspense,
  createElement,
  init_react,
  react_default,
  use,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "./chunk-TEJH3H3H.mjs";
import {
  FAST_MODE_MODEL_DISPLAY,
  clearFastModeCooldown,
  formatAutoUpdaterDisabledReason,
  getAutoUpdaterDisabledReason,
  getCurrentProjectConfig,
  getFastModeModel,
  getFeatureValue_CACHED_MAY_BE_STALE,
  getGlobalConfig,
  getInitialSettings,
  getRemoteControlAtStartup,
  getSettingsForSource,
  getSubscriptionType,
  init_PermissionMode,
  init_agentSwarmsEnabled,
  init_auth,
  init_authPortable,
  init_bridgeEnabled,
  init_config2 as init_config,
  init_fastMode,
  init_growthbook,
  init_model,
  init_settings2 as init_settings,
  init_source,
  isAgentSwarmsEnabled,
  isBridgeEnabled,
  isExternalPermissionMode,
  isFastModeAvailable,
  isFastModeEnabled,
  isFastModeSupportedByModel,
  isOpus1mMergeEnabled,
  modelDisplayString,
  normalizeApiKeyForConfig,
  permissionModeFromString,
  permissionModeTitle,
  saveGlobalConfig,
  source_default,
  toExternalPermissionMode,
  updateSettingsForSource
} from "./chunk-Z6CSO4BY.mjs";
import {
  EXTERNAL_PERMISSION_MODES,
  PERMISSION_MODES
} from "./chunk-QFFW7MQ2.mjs";
import {
  formatResetText,
  init_format
} from "./chunk-OGGCTXYU.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-MDXHK5AD.mjs";
import {
  getCwd,
  init_cwd
} from "./chunk-TZFTPSMG.mjs";
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import {
  figures_default,
  init_figures
} from "./chunk-ZAYB3WZV.mjs";
import {
  init_slowOperations,
  jsonStringify
} from "./chunk-L2VTD674.mjs";
import {
  feature,
  init_bun_bundle
} from "./chunk-OU3SZVVB.mjs";
import {
  getSessionId,
  getUserMsgOptIn,
  init_state,
  setUserMsgOptIn
} from "./chunk-NGSB34MB.mjs";
import {
  init_envUtils,
  isEnvTruthy,
  isRunningOnHomespace
} from "./chunk-6NQGQQQI.mjs";
import {
  __esm,
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// src/components/Settings/Status.tsx
function buildPrimarySection() {
  const sessionId = getSessionId();
  const customTitle = getCurrentSessionTitle(sessionId);
  const nameValue = customTitle ?? /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "/rename to add a name");
  return [{
    label: "Version",
    value: MACRO.VERSION
  }, {
    label: "Session name",
    value: nameValue
  }, {
    label: "Session ID",
    value: sessionId
  }, {
    label: "cwd",
    value: getCwd()
  }, ...buildAccountProperties(), ...buildAPIProviderProperties()];
}
function buildSecondarySection({
  mainLoopModel,
  mcp,
  theme,
  context
}) {
  const modelLabel = getModelDisplayLabel(mainLoopModel);
  return [{
    label: "Model",
    value: modelLabel
  }, ...buildIDEProperties(mcp.clients, context.options.ideInstallationStatus, theme), ...buildMcpProperties(mcp.clients, theme), ...buildSandboxProperties(), ...buildSettingSourcesProperties()];
}
async function buildDiagnostics() {
  return [...await buildInstallationDiagnostics(), ...await buildInstallationHealthDiagnostics(), ...await buildMemoryDiagnostics()];
}
function PropertyValue(t0) {
  const $ = c(8);
  const {
    value
  } = t0;
  if (Array.isArray(value)) {
    let t1;
    if ($[0] !== value) {
      let t22;
      if ($[2] !== value.length) {
        t22 = (item, i) => /* @__PURE__ */ createElement(ThemedText, { key: i }, item, i < value.length - 1 ? "," : "");
        $[2] = value.length;
        $[3] = t22;
      } else {
        t22 = $[3];
      }
      t1 = value.map(t22);
      $[0] = value;
      $[1] = t1;
    } else {
      t1 = $[1];
    }
    let t2;
    if ($[4] !== t1) {
      t2 = /* @__PURE__ */ createElement(ThemedBox_default, { flexWrap: "wrap", columnGap: 1, flexShrink: 99 }, t1);
      $[4] = t1;
      $[5] = t2;
    } else {
      t2 = $[5];
    }
    return t2;
  }
  if (typeof value === "string") {
    let t1;
    if ($[6] !== value) {
      t1 = /* @__PURE__ */ createElement(ThemedText, null, value);
      $[6] = value;
      $[7] = t1;
    } else {
      t1 = $[7];
    }
    return t1;
  }
  return value;
}
function Status(t0) {
  const $ = c(20);
  const {
    context,
    diagnosticsPromise
  } = t0;
  const mainLoopModel = useAppState(_temp);
  const mcp = useAppState(_temp2);
  const [theme] = useTheme();
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = buildPrimarySection();
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== context || $[2] !== mainLoopModel || $[3] !== mcp || $[4] !== theme) {
    t2 = buildSecondarySection({
      mainLoopModel,
      mcp,
      theme,
      context
    });
    $[1] = context;
    $[2] = mainLoopModel;
    $[3] = mcp;
    $[4] = theme;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[6] !== t2) {
    t3 = [t1, t2];
    $[6] = t2;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  const sections = t3;
  const grow = useIsInsideModal() ? 1 : void 0;
  let t4;
  if ($[8] !== sections) {
    t4 = sections.map(_temp4);
    $[8] = sections;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  let t5;
  if ($[10] !== diagnosticsPromise) {
    t5 = /* @__PURE__ */ createElement(Suspense, { fallback: null }, /* @__PURE__ */ createElement(Diagnostics, { promise: diagnosticsPromise }));
    $[10] = diagnosticsPromise;
    $[11] = t5;
  } else {
    t5 = $[11];
  }
  let t6;
  if ($[12] !== grow || $[13] !== t4 || $[14] !== t5) {
    t6 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", gap: 1, flexGrow: grow }, t4, t5);
    $[12] = grow;
    $[13] = t4;
    $[14] = t5;
    $[15] = t6;
  } else {
    t6 = $[15];
  }
  let t7;
  if ($[16] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Settings", fallback: "Esc", description: "cancel" }));
    $[16] = t7;
  } else {
    t7 = $[16];
  }
  let t8;
  if ($[17] !== grow || $[18] !== t6) {
    t8 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", flexGrow: grow }, t6, t7);
    $[17] = grow;
    $[18] = t6;
    $[19] = t8;
  } else {
    t8 = $[19];
  }
  return t8;
}
function _temp4(properties, i) {
  return properties.length > 0 && /* @__PURE__ */ createElement(ThemedBox_default, { key: i, flexDirection: "column" }, properties.map(_temp3));
}
function _temp3(t0, j) {
  const {
    label,
    value
  } = t0;
  return /* @__PURE__ */ createElement(ThemedBox_default, { key: j, flexDirection: "row", gap: 1, flexShrink: 0 }, label !== void 0 && /* @__PURE__ */ createElement(ThemedText, { bold: true }, label, ":"), /* @__PURE__ */ createElement(PropertyValue, { value }));
}
function _temp2(s_0) {
  return s_0.mcp;
}
function _temp(s) {
  return s.mainLoopModel;
}
function Diagnostics(t0) {
  const $ = c(5);
  const {
    promise
  } = t0;
  const diagnostics = use(promise);
  if (diagnostics.length === 0) {
    return null;
  }
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ createElement(ThemedText, { bold: true }, "System Diagnostics");
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== diagnostics) {
    t2 = diagnostics.map(_temp5);
    $[1] = diagnostics;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] !== t2) {
    t3 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", paddingBottom: 1 }, t1, t2);
    $[3] = t2;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  return t3;
}
function _temp5(diagnostic, i) {
  return /* @__PURE__ */ createElement(ThemedBox_default, { key: i, flexDirection: "row", gap: 1, paddingX: 1 }, /* @__PURE__ */ createElement(ThemedText, { color: "error" }, figures_default.warning), typeof diagnostic === "string" ? /* @__PURE__ */ createElement(ThemedText, { wrap: "wrap" }, diagnostic) : diagnostic);
}
var init_Status = __esm({
  "src/components/Settings/Status.tsx"() {
    init_react_compiler_runtime();
    init_figures();
    init_react();
    init_react();
    init_state();
    init_modalContext();
    init_ink();
    init_AppState();
    init_cwd();
    init_sessionStorage();
    init_status();
    init_ConfigurableShortcutHint();
  }
});

// src/components/ChannelDowngradeDialog.tsx
function ChannelDowngradeDialog(t0) {
  const $ = c(17);
  const {
    currentVersion,
    onChoice
  } = t0;
  let t1;
  if ($[0] !== onChoice) {
    t1 = function handleSelect2(value) {
      onChoice(value);
    };
    $[0] = onChoice;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const handleSelect = t1;
  let t2;
  if ($[2] !== onChoice) {
    t2 = function handleCancel2() {
      onChoice("cancel");
    };
    $[2] = onChoice;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  const handleCancel = t2;
  let t3;
  if ($[4] !== currentVersion) {
    t3 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "The stable channel may have an older version than what you're currently running (", currentVersion, ").");
    $[4] = currentVersion;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "How would you like to handle this?");
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = {
      label: "Allow possible downgrade to stable version",
      value: "downgrade"
    };
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  const t6 = `Stay on current version (${currentVersion}) until stable catches up`;
  let t7;
  if ($[8] !== t6) {
    t7 = [t5, {
      label: t6,
      value: "stay"
    }];
    $[8] = t6;
    $[9] = t7;
  } else {
    t7 = $[9];
  }
  let t8;
  if ($[10] !== handleSelect || $[11] !== t7) {
    t8 = /* @__PURE__ */ react_default.createElement(Select, { options: t7, onChange: handleSelect });
    $[10] = handleSelect;
    $[11] = t7;
    $[12] = t8;
  } else {
    t8 = $[12];
  }
  let t9;
  if ($[13] !== handleCancel || $[14] !== t3 || $[15] !== t8) {
    t9 = /* @__PURE__ */ react_default.createElement(Dialog, { title: "Switch to Stable Channel", onCancel: handleCancel, color: "permission", hideBorder: true, hideInputGuide: true }, t3, t4, t8);
    $[13] = handleCancel;
    $[14] = t3;
    $[15] = t8;
    $[16] = t9;
  } else {
    t9 = $[16];
  }
  return t9;
}
var init_ChannelDowngradeDialog = __esm({
  "src/components/ChannelDowngradeDialog.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_CustomSelect();
    init_Dialog();
  }
});

// src/components/OutputStylePicker.tsx
function mapConfigsToOptions(styles) {
  return Object.entries(styles).map(([style, config]) => ({
    label: config?.name ?? DEFAULT_OUTPUT_STYLE_LABEL,
    value: style,
    description: config?.description ?? DEFAULT_OUTPUT_STYLE_DESCRIPTION
  }));
}
function OutputStylePicker(t0) {
  const $ = c(16);
  const {
    initialStyle,
    onComplete,
    onCancel,
    isStandaloneCommand
  } = t0;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = [];
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const [styleOptions, setStyleOptions] = useState(t1);
  const [isLoading, setIsLoading] = useState(true);
  let t2;
  let t3;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = () => {
      getAllOutputStyles(getCwd()).then((allStyles) => {
        const options = mapConfigsToOptions(allStyles);
        setStyleOptions(options);
        setIsLoading(false);
      }).catch(() => {
        const builtInOptions = mapConfigsToOptions(OUTPUT_STYLE_CONFIG);
        setStyleOptions(builtInOptions);
        setIsLoading(false);
      });
    };
    t3 = [];
    $[1] = t2;
    $[2] = t3;
  } else {
    t2 = $[1];
    t3 = $[2];
  }
  useEffect(t2, t3);
  let t4;
  if ($[3] !== onComplete) {
    t4 = (style) => {
      const outputStyle = style;
      onComplete(outputStyle);
    };
    $[3] = onComplete;
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  const handleStyleSelect = t4;
  const t5 = !isStandaloneCommand;
  const t6 = !isStandaloneCommand;
  let t7;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "This changes how Claude Code communicates with you"));
    $[5] = t7;
  } else {
    t7 = $[5];
  }
  let t8;
  if ($[6] !== handleStyleSelect || $[7] !== initialStyle || $[8] !== isLoading || $[9] !== styleOptions) {
    t8 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, t7, isLoading ? /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Loading output styles\u2026") : /* @__PURE__ */ createElement(Select, { options: styleOptions, onChange: handleStyleSelect, visibleOptionCount: 10, defaultValue: initialStyle }));
    $[6] = handleStyleSelect;
    $[7] = initialStyle;
    $[8] = isLoading;
    $[9] = styleOptions;
    $[10] = t8;
  } else {
    t8 = $[10];
  }
  let t9;
  if ($[11] !== onCancel || $[12] !== t5 || $[13] !== t6 || $[14] !== t8) {
    t9 = /* @__PURE__ */ createElement(Dialog, { title: "Preferred output style", onCancel, hideInputGuide: t5, hideBorder: t6 }, t8);
    $[11] = onCancel;
    $[12] = t5;
    $[13] = t6;
    $[14] = t8;
    $[15] = t9;
  } else {
    t9 = $[15];
  }
  return t9;
}
var DEFAULT_OUTPUT_STYLE_LABEL, DEFAULT_OUTPUT_STYLE_DESCRIPTION;
var init_OutputStylePicker = __esm({
  "src/components/OutputStylePicker.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_react();
    init_outputStyles();
    init_ink();
    init_cwd();
    init_select();
    init_Dialog();
    DEFAULT_OUTPUT_STYLE_LABEL = "Default";
    DEFAULT_OUTPUT_STYLE_DESCRIPTION = "Claude completes coding tasks efficiently and provides concise responses";
  }
});

// src/components/LanguagePicker.tsx
function LanguagePicker(t0) {
  const $ = c(13);
  const {
    initialLanguage,
    onComplete,
    onCancel
  } = t0;
  const [language, setLanguage] = useState(initialLanguage);
  const [cursorOffset, setCursorOffset] = useState((initialLanguage ?? "").length);
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
  let t2;
  if ($[1] !== language || $[2] !== onComplete) {
    t2 = function handleSubmit2() {
      const trimmed = language?.trim();
      onComplete(trimmed || void 0);
    };
    $[1] = language;
    $[2] = onComplete;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  const handleSubmit = t2;
  let t3;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "Enter your preferred response and voice language:");
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ react_default.createElement(ThemedText, null, figures_default.pointer);
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  const t5 = language ?? "";
  let t6;
  if ($[6] !== cursorOffset || $[7] !== handleSubmit || $[8] !== t5) {
    t6 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "row", gap: 1 }, t4, /* @__PURE__ */ react_default.createElement(TextInput, { value: t5, onChange: setLanguage, onSubmit: handleSubmit, focus: true, showCursor: true, placeholder: `e.g., Japanese, \u65E5\u672C\u8A9E, Espa\xF1ol${figures_default.ellipsis}`, columns: 60, cursorOffset, onChangeCursorOffset: setCursorOffset }));
    $[6] = cursorOffset;
    $[7] = handleSubmit;
    $[8] = t5;
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  let t7;
  if ($[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Leave empty for default (English)");
    $[10] = t7;
  } else {
    t7 = $[10];
  }
  let t8;
  if ($[11] !== t6) {
    t8 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, t3, t6, t7);
    $[11] = t6;
    $[12] = t8;
  } else {
    t8 = $[12];
  }
  return t8;
}
var init_LanguagePicker = __esm({
  "src/components/LanguagePicker.tsx"() {
    init_react_compiler_runtime();
    init_figures();
    init_react();
    init_ink();
    init_useKeybinding();
    init_TextInput();
  }
});

// src/components/Settings/Config.tsx
function Config({
  onClose,
  context,
  setTabsHidden,
  onIsSearchModeChange,
  contentHeight
}) {
  const {
    headerFocused,
    focusHeader
  } = useTabHeaderFocus();
  const insideModal = useIsInsideModal();
  const [, setTheme] = useTheme();
  const themeSetting = useThemeSetting();
  const [globalConfig, setGlobalConfig] = useState(getGlobalConfig());
  const initialConfig = useRef(getGlobalConfig());
  const [settingsData, setSettingsData] = useState(getInitialSettings());
  const initialSettingsData = useRef(getInitialSettings());
  const [currentOutputStyle, setCurrentOutputStyle] = useState(settingsData?.outputStyle || DEFAULT_OUTPUT_STYLE_NAME);
  const initialOutputStyle = useRef(currentOutputStyle);
  const [currentLanguage, setCurrentLanguage] = useState(settingsData?.language);
  const initialLanguage = useRef(currentLanguage);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isSearchMode, setIsSearchMode] = useState(true);
  const isTerminalFocused = useTerminalFocus();
  const {
    rows
  } = useTerminalSize();
  const paneCap = contentHeight ?? Math.min(Math.floor(rows * 0.8), 30);
  const maxVisible = Math.max(5, paneCap - 10);
  const mainLoopModel = useAppState((s) => s.mainLoopModel);
  const verbose = useAppState((s_0) => s_0.verbose);
  const thinkingEnabled = useAppState((s_1) => s_1.thinkingEnabled);
  const isFastMode = useAppState((s_2) => isFastModeEnabled() ? s_2.fastMode : false);
  const promptSuggestionEnabled = useAppState((s_3) => s_3.promptSuggestionEnabled);
  const showAutoInDefaultModePicker = feature("TRANSCRIPT_CLASSIFIER") ? hasAutoModeOptInAnySource() || getAutoModeEnabledState() === "enabled" : false;
  const showDefaultViewPicker = feature("KAIROS") || feature("KAIROS_BRIEF") ? (init_BriefTool(), __toCommonJS(BriefTool_exports)).isBriefEntitled() : false;
  const setAppState = useSetAppState();
  const [changes, setChanges] = useState({});
  const initialThinkingEnabled = useRef(thinkingEnabled);
  const [initialLocalSettings] = useState(() => getSettingsForSource("localSettings"));
  const [initialUserSettings] = useState(() => getSettingsForSource("userSettings"));
  const initialThemeSetting = useRef(themeSetting);
  const store = useAppStateStore();
  const [initialAppState] = useState(() => {
    const s_4 = store.getState();
    return {
      mainLoopModel: s_4.mainLoopModel,
      mainLoopModelForSession: s_4.mainLoopModelForSession,
      verbose: s_4.verbose,
      thinkingEnabled: s_4.thinkingEnabled,
      fastMode: s_4.fastMode,
      promptSuggestionEnabled: s_4.promptSuggestionEnabled,
      isBriefOnly: s_4.isBriefOnly,
      replBridgeEnabled: s_4.replBridgeEnabled,
      replBridgeOutboundOnly: s_4.replBridgeOutboundOnly,
      settings: s_4.settings
    };
  });
  const [initialUserMsgOptIn] = useState(() => getUserMsgOptIn());
  const isDirty = useRef(false);
  const [showThinkingWarning, setShowThinkingWarning] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(null);
  const {
    query: searchQuery,
    setQuery: setSearchQuery,
    cursorOffset: searchCursorOffset
  } = useSearchInput({
    isActive: isSearchMode && showSubmenu === null && !headerFocused,
    onExit: () => setIsSearchMode(false),
    onExitUp: focusHeader,
    // Ctrl+C/D must reach Settings' useExitOnCtrlCD; 'd' also avoids
    // double-action (delete-char + exit-pending).
    passthroughCtrlKeys: ["c", "d"]
  });
  const ownsEsc = isSearchMode && !headerFocused;
  useEffect(() => {
    onIsSearchModeChange?.(ownsEsc);
  }, [ownsEsc, onIsSearchModeChange]);
  const isConnectedToIde = hasAccessToIDEExtensionDiffFeature(context.options.mcpClients);
  const isFileCheckpointingAvailable = !isEnvTruthy(process.env.CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING);
  const memoryFiles = use(getMemoryFiles(true));
  const shouldShowExternalIncludesToggle = hasExternalClaudeMdIncludes(memoryFiles);
  const autoUpdaterDisabledReason = getAutoUpdaterDisabledReason();
  function onChangeMainModelConfig(value) {
    const previousModel = mainLoopModel;
    logEvent("tengu_config_model_changed", {
      from_model: previousModel,
      to_model: value
    });
    setAppState((prev) => ({
      ...prev,
      mainLoopModel: value,
      mainLoopModelForSession: null
    }));
    setChanges((prev_0) => {
      const valStr = modelDisplayString(value) + (isBilledAsExtraUsage(value, false, isOpus1mMergeEnabled()) ? " \xB7 Billed as extra usage" : "");
      if ("model" in prev_0) {
        const {
          model,
          ...rest
        } = prev_0;
        return {
          ...rest,
          model: valStr
        };
      }
      return {
        ...prev_0,
        model: valStr
      };
    });
  }
  function onChangeVerbose(value_0) {
    saveGlobalConfig((current) => ({
      ...current,
      verbose: value_0
    }));
    setGlobalConfig({
      ...getGlobalConfig(),
      verbose: value_0
    });
    setAppState((prev_1) => ({
      ...prev_1,
      verbose: value_0
    }));
    setChanges((prev_2) => {
      if ("verbose" in prev_2) {
        const {
          verbose: verbose_0,
          ...rest_0
        } = prev_2;
        return rest_0;
      }
      return {
        ...prev_2,
        verbose: value_0
      };
    });
  }
  const settingsItems = [
    // Global settings
    {
      id: "autoCompactEnabled",
      label: "Auto-compact",
      value: globalConfig.autoCompactEnabled,
      type: "boolean",
      onChange(autoCompactEnabled) {
        saveGlobalConfig((current_0) => ({
          ...current_0,
          autoCompactEnabled
        }));
        setGlobalConfig({
          ...getGlobalConfig(),
          autoCompactEnabled
        });
        logEvent("tengu_auto_compact_setting_changed", {
          enabled: autoCompactEnabled
        });
      }
    },
    {
      id: "spinnerTipsEnabled",
      label: "Show tips",
      value: settingsData?.spinnerTipsEnabled ?? true,
      type: "boolean",
      onChange(spinnerTipsEnabled) {
        updateSettingsForSource("localSettings", {
          spinnerTipsEnabled
        });
        setSettingsData((prev_3) => ({
          ...prev_3,
          spinnerTipsEnabled
        }));
        logEvent("tengu_tips_setting_changed", {
          enabled: spinnerTipsEnabled
        });
      }
    },
    {
      id: "prefersReducedMotion",
      label: "Reduce motion",
      value: settingsData?.prefersReducedMotion ?? false,
      type: "boolean",
      onChange(prefersReducedMotion) {
        updateSettingsForSource("localSettings", {
          prefersReducedMotion
        });
        setSettingsData((prev_4) => ({
          ...prev_4,
          prefersReducedMotion
        }));
        setAppState((prev_5) => ({
          ...prev_5,
          settings: {
            ...prev_5.settings,
            prefersReducedMotion
          }
        }));
        logEvent("tengu_reduce_motion_setting_changed", {
          enabled: prefersReducedMotion
        });
      }
    },
    {
      id: "thinkingEnabled",
      label: "Thinking mode",
      value: thinkingEnabled ?? true,
      type: "boolean",
      onChange(enabled) {
        setAppState((prev_6) => ({
          ...prev_6,
          thinkingEnabled: enabled
        }));
        updateSettingsForSource("userSettings", {
          alwaysThinkingEnabled: enabled ? void 0 : false
        });
        logEvent("tengu_thinking_toggled", {
          enabled
        });
      }
    },
    // Fast mode toggle (ant-only, eliminated from external builds)
    ...isFastModeEnabled() && isFastModeAvailable() ? [{
      id: "fastMode",
      label: `Fast mode (${FAST_MODE_MODEL_DISPLAY} only)`,
      value: !!isFastMode,
      type: "boolean",
      onChange(enabled_0) {
        clearFastModeCooldown();
        updateSettingsForSource("userSettings", {
          fastMode: enabled_0 ? true : void 0
        });
        if (enabled_0) {
          setAppState((prev_7) => ({
            ...prev_7,
            mainLoopModel: getFastModeModel(),
            mainLoopModelForSession: null,
            fastMode: true
          }));
          setChanges((prev_8) => ({
            ...prev_8,
            model: getFastModeModel(),
            "Fast mode": "ON"
          }));
        } else {
          setAppState((prev_9) => ({
            ...prev_9,
            fastMode: false
          }));
          setChanges((prev_10) => ({
            ...prev_10,
            "Fast mode": "OFF"
          }));
        }
      }
    }] : [],
    ...getFeatureValue_CACHED_MAY_BE_STALE("tengu_chomp_inflection", false) ? [{
      id: "promptSuggestionEnabled",
      label: "Prompt suggestions",
      value: promptSuggestionEnabled,
      type: "boolean",
      onChange(enabled_1) {
        setAppState((prev_11) => ({
          ...prev_11,
          promptSuggestionEnabled: enabled_1
        }));
        updateSettingsForSource("userSettings", {
          promptSuggestionEnabled: enabled_1 ? void 0 : false
        });
      }
    }] : [],
    // Speculation toggle (ant-only)
    ...false ? [{
      id: "speculationEnabled",
      label: "Speculative execution",
      value: globalConfig.speculationEnabled ?? true,
      type: "boolean",
      onChange(enabled_2) {
        saveGlobalConfig((current_1) => {
          if (current_1.speculationEnabled === enabled_2) return current_1;
          return {
            ...current_1,
            speculationEnabled: enabled_2
          };
        });
        setGlobalConfig({
          ...getGlobalConfig(),
          speculationEnabled: enabled_2
        });
        logEvent("tengu_speculation_setting_changed", {
          enabled: enabled_2
        });
      }
    }] : [],
    ...isFileCheckpointingAvailable ? [{
      id: "fileCheckpointingEnabled",
      label: "Rewind code (checkpoints)",
      value: globalConfig.fileCheckpointingEnabled,
      type: "boolean",
      onChange(enabled_3) {
        saveGlobalConfig((current_2) => ({
          ...current_2,
          fileCheckpointingEnabled: enabled_3
        }));
        setGlobalConfig({
          ...getGlobalConfig(),
          fileCheckpointingEnabled: enabled_3
        });
        logEvent("tengu_file_history_snapshots_setting_changed", {
          enabled: enabled_3
        });
      }
    }] : [],
    {
      id: "verbose",
      label: "Verbose output",
      value: verbose,
      type: "boolean",
      onChange: onChangeVerbose
    },
    {
      id: "terminalProgressBarEnabled",
      label: "Terminal progress bar",
      value: globalConfig.terminalProgressBarEnabled,
      type: "boolean",
      onChange(terminalProgressBarEnabled) {
        saveGlobalConfig((current_3) => ({
          ...current_3,
          terminalProgressBarEnabled
        }));
        setGlobalConfig({
          ...getGlobalConfig(),
          terminalProgressBarEnabled
        });
        logEvent("tengu_terminal_progress_bar_setting_changed", {
          enabled: terminalProgressBarEnabled
        });
      }
    },
    ...getFeatureValue_CACHED_MAY_BE_STALE("tengu_terminal_sidebar", false) ? [{
      id: "showStatusInTerminalTab",
      label: "Show status in terminal tab",
      value: globalConfig.showStatusInTerminalTab ?? false,
      type: "boolean",
      onChange(showStatusInTerminalTab) {
        saveGlobalConfig((current_4) => ({
          ...current_4,
          showStatusInTerminalTab
        }));
        setGlobalConfig({
          ...getGlobalConfig(),
          showStatusInTerminalTab
        });
        logEvent("tengu_terminal_tab_status_setting_changed", {
          enabled: showStatusInTerminalTab
        });
      }
    }] : [],
    {
      id: "showTurnDuration",
      label: "Show turn duration",
      value: globalConfig.showTurnDuration,
      type: "boolean",
      onChange(showTurnDuration) {
        saveGlobalConfig((current_5) => ({
          ...current_5,
          showTurnDuration
        }));
        setGlobalConfig({
          ...getGlobalConfig(),
          showTurnDuration
        });
        logEvent("tengu_show_turn_duration_setting_changed", {
          enabled: showTurnDuration
        });
      }
    },
    {
      id: "defaultPermissionMode",
      label: "Default permission mode",
      value: settingsData?.permissions?.defaultMode || "default",
      options: (() => {
        const priorityOrder = ["default", "plan"];
        const allModes = feature("TRANSCRIPT_CLASSIFIER") ? PERMISSION_MODES : EXTERNAL_PERMISSION_MODES;
        const excluded = ["bypassPermissions"];
        if (feature("TRANSCRIPT_CLASSIFIER") && !showAutoInDefaultModePicker) {
          excluded.push("auto");
        }
        return [...priorityOrder, ...allModes.filter((m) => !priorityOrder.includes(m) && !excluded.includes(m))];
      })(),
      type: "enum",
      onChange(mode) {
        const parsedMode = permissionModeFromString(mode);
        const validatedMode = isExternalPermissionMode(parsedMode) ? toExternalPermissionMode(parsedMode) : parsedMode;
        const result = updateSettingsForSource("userSettings", {
          permissions: {
            ...settingsData?.permissions,
            defaultMode: validatedMode
          }
        });
        if (result.error) {
          logError(result.error);
          return;
        }
        setSettingsData((prev_12) => ({
          ...prev_12,
          permissions: {
            ...prev_12?.permissions,
            defaultMode: validatedMode
          }
        }));
        setChanges((prev_13) => ({
          ...prev_13,
          defaultPermissionMode: mode
        }));
        logEvent("tengu_config_changed", {
          setting: "defaultPermissionMode",
          value: mode
        });
      }
    },
    ...feature("TRANSCRIPT_CLASSIFIER") && showAutoInDefaultModePicker ? [{
      id: "useAutoModeDuringPlan",
      label: "Use auto mode during plan",
      value: settingsData?.useAutoModeDuringPlan ?? true,
      type: "boolean",
      onChange(useAutoModeDuringPlan) {
        updateSettingsForSource("userSettings", {
          useAutoModeDuringPlan
        });
        setSettingsData((prev_14) => ({
          ...prev_14,
          useAutoModeDuringPlan
        }));
        setAppState((prev_15) => {
          const next = transitionPlanAutoMode(prev_15.toolPermissionContext);
          if (next === prev_15.toolPermissionContext) return prev_15;
          return {
            ...prev_15,
            toolPermissionContext: next
          };
        });
        setChanges((prev_16) => ({
          ...prev_16,
          "Use auto mode during plan": useAutoModeDuringPlan
        }));
      }
    }] : [],
    {
      id: "respectGitignore",
      label: "Respect .gitignore in file picker",
      value: globalConfig.respectGitignore,
      type: "boolean",
      onChange(respectGitignore) {
        saveGlobalConfig((current_6) => ({
          ...current_6,
          respectGitignore
        }));
        setGlobalConfig({
          ...getGlobalConfig(),
          respectGitignore
        });
        logEvent("tengu_respect_gitignore_setting_changed", {
          enabled: respectGitignore
        });
      }
    },
    {
      id: "copyFullResponse",
      label: "Always copy full response (skip /copy picker)",
      value: globalConfig.copyFullResponse,
      type: "boolean",
      onChange(copyFullResponse) {
        saveGlobalConfig((current_7) => ({
          ...current_7,
          copyFullResponse
        }));
        setGlobalConfig({
          ...getGlobalConfig(),
          copyFullResponse
        });
        logEvent("tengu_config_changed", {
          setting: "copyFullResponse",
          value: String(copyFullResponse)
        });
      }
    },
    // Copy-on-select is only meaningful with in-app selection (fullscreen
    // alt-screen mode). In inline mode the terminal emulator owns selection.
    ...isFullscreenEnvEnabled() ? [{
      id: "copyOnSelect",
      label: "Copy on select",
      value: globalConfig.copyOnSelect ?? true,
      type: "boolean",
      onChange(copyOnSelect) {
        saveGlobalConfig((current_8) => ({
          ...current_8,
          copyOnSelect
        }));
        setGlobalConfig({
          ...getGlobalConfig(),
          copyOnSelect
        });
        logEvent("tengu_config_changed", {
          setting: "copyOnSelect",
          value: String(copyOnSelect)
        });
      }
    }] : [],
    // autoUpdates setting is hidden - use DISABLE_AUTOUPDATER env var to control
    autoUpdaterDisabledReason ? {
      id: "autoUpdatesChannel",
      label: "Auto-update channel",
      value: "disabled",
      type: "managedEnum",
      onChange() {
      }
    } : {
      id: "autoUpdatesChannel",
      label: "Auto-update channel",
      value: settingsData?.autoUpdatesChannel ?? "latest",
      type: "managedEnum",
      onChange() {
      }
    },
    {
      id: "theme",
      label: "Theme",
      value: themeSetting,
      type: "managedEnum",
      onChange: setTheme
    },
    {
      id: "notifChannel",
      label: feature("KAIROS") || feature("KAIROS_PUSH_NOTIFICATION") ? "Local notifications" : "Notifications",
      value: globalConfig.preferredNotifChannel,
      options: ["auto", "iterm2", "terminal_bell", "iterm2_with_bell", "kitty", "ghostty", "notifications_disabled"],
      type: "enum",
      onChange(notifChannel) {
        saveGlobalConfig((current_9) => ({
          ...current_9,
          preferredNotifChannel: notifChannel
        }));
        setGlobalConfig({
          ...getGlobalConfig(),
          preferredNotifChannel: notifChannel
        });
      }
    },
    ...feature("KAIROS") || feature("KAIROS_PUSH_NOTIFICATION") ? [{
      id: "taskCompleteNotifEnabled",
      label: "Push when idle",
      value: globalConfig.taskCompleteNotifEnabled ?? false,
      type: "boolean",
      onChange(taskCompleteNotifEnabled) {
        saveGlobalConfig((current_10) => ({
          ...current_10,
          taskCompleteNotifEnabled
        }));
        setGlobalConfig({
          ...getGlobalConfig(),
          taskCompleteNotifEnabled
        });
      }
    }, {
      id: "inputNeededNotifEnabled",
      label: "Push when input needed",
      value: globalConfig.inputNeededNotifEnabled ?? false,
      type: "boolean",
      onChange(inputNeededNotifEnabled) {
        saveGlobalConfig((current_11) => ({
          ...current_11,
          inputNeededNotifEnabled
        }));
        setGlobalConfig({
          ...getGlobalConfig(),
          inputNeededNotifEnabled
        });
      }
    }, {
      id: "agentPushNotifEnabled",
      label: "Push when Claude decides",
      value: globalConfig.agentPushNotifEnabled ?? false,
      type: "boolean",
      onChange(agentPushNotifEnabled) {
        saveGlobalConfig((current_12) => ({
          ...current_12,
          agentPushNotifEnabled
        }));
        setGlobalConfig({
          ...getGlobalConfig(),
          agentPushNotifEnabled
        });
      }
    }] : [],
    {
      id: "outputStyle",
      label: "Output style",
      value: currentOutputStyle,
      type: "managedEnum",
      onChange: () => {
      }
      // handled by OutputStylePicker submenu
    },
    ...showDefaultViewPicker ? [{
      id: "defaultView",
      label: "What you see by default",
      // 'default' means the setting is unset — currently resolves to
      // transcript (main.tsx falls through when defaultView !== 'chat').
      // String() narrows the conditional-schema-spread union to string.
      value: settingsData?.defaultView === void 0 ? "default" : String(settingsData.defaultView),
      options: ["transcript", "chat", "default"],
      type: "enum",
      onChange(selected) {
        const defaultView = selected === "default" ? void 0 : selected;
        updateSettingsForSource("localSettings", {
          defaultView
        });
        setSettingsData((prev_17) => ({
          ...prev_17,
          defaultView
        }));
        const nextBrief = defaultView === "chat";
        setAppState((prev_18) => {
          if (prev_18.isBriefOnly === nextBrief) return prev_18;
          return {
            ...prev_18,
            isBriefOnly: nextBrief
          };
        });
        setUserMsgOptIn(nextBrief);
        setChanges((prev_19) => ({
          ...prev_19,
          "Default view": selected
        }));
        logEvent("tengu_default_view_setting_changed", {
          value: defaultView ?? "unset"
        });
      }
    }] : [],
    {
      id: "language",
      label: "Language",
      value: currentLanguage ?? "Default (English)",
      type: "managedEnum",
      onChange: () => {
      }
      // handled by LanguagePicker submenu
    },
    {
      id: "editorMode",
      label: "Editor mode",
      // Convert 'emacs' to 'normal' for backward compatibility
      value: globalConfig.editorMode === "emacs" ? "normal" : globalConfig.editorMode || "normal",
      options: ["normal", "vim"],
      type: "enum",
      onChange(value_1) {
        saveGlobalConfig((current_13) => ({
          ...current_13,
          editorMode: value_1
        }));
        setGlobalConfig({
          ...getGlobalConfig(),
          editorMode: value_1
        });
        logEvent("tengu_editor_mode_changed", {
          mode: value_1,
          source: "config_panel"
        });
      }
    },
    {
      id: "prStatusFooterEnabled",
      label: "Show PR status footer",
      value: globalConfig.prStatusFooterEnabled ?? true,
      type: "boolean",
      onChange(enabled_4) {
        saveGlobalConfig((current_14) => {
          if (current_14.prStatusFooterEnabled === enabled_4) return current_14;
          return {
            ...current_14,
            prStatusFooterEnabled: enabled_4
          };
        });
        setGlobalConfig({
          ...getGlobalConfig(),
          prStatusFooterEnabled: enabled_4
        });
        logEvent("tengu_pr_status_footer_setting_changed", {
          enabled: enabled_4
        });
      }
    },
    {
      id: "model",
      label: "Model",
      value: mainLoopModel === null ? "Default (recommended)" : mainLoopModel,
      type: "managedEnum",
      onChange: onChangeMainModelConfig
    },
    ...isConnectedToIde ? [{
      id: "diffTool",
      label: "Diff tool",
      value: globalConfig.diffTool ?? "auto",
      options: ["terminal", "auto"],
      type: "enum",
      onChange(diffTool) {
        saveGlobalConfig((current_15) => ({
          ...current_15,
          diffTool
        }));
        setGlobalConfig({
          ...getGlobalConfig(),
          diffTool
        });
        logEvent("tengu_diff_tool_changed", {
          tool: diffTool,
          source: "config_panel"
        });
      }
    }] : [],
    ...!isSupportedTerminal() ? [{
      id: "autoConnectIde",
      label: "Auto-connect to IDE (external terminal)",
      value: globalConfig.autoConnectIde ?? false,
      type: "boolean",
      onChange(autoConnectIde) {
        saveGlobalConfig((current_16) => ({
          ...current_16,
          autoConnectIde
        }));
        setGlobalConfig({
          ...getGlobalConfig(),
          autoConnectIde
        });
        logEvent("tengu_auto_connect_ide_changed", {
          enabled: autoConnectIde,
          source: "config_panel"
        });
      }
    }] : [],
    ...isSupportedTerminal() ? [{
      id: "autoInstallIdeExtension",
      label: "Auto-install IDE extension",
      value: globalConfig.autoInstallIdeExtension ?? true,
      type: "boolean",
      onChange(autoInstallIdeExtension) {
        saveGlobalConfig((current_17) => ({
          ...current_17,
          autoInstallIdeExtension
        }));
        setGlobalConfig({
          ...getGlobalConfig(),
          autoInstallIdeExtension
        });
        logEvent("tengu_auto_install_ide_extension_changed", {
          enabled: autoInstallIdeExtension,
          source: "config_panel"
        });
      }
    }] : [],
    {
      id: "claudeInChromeDefaultEnabled",
      label: "Claude in Chrome enabled by default",
      value: globalConfig.claudeInChromeDefaultEnabled ?? true,
      type: "boolean",
      onChange(enabled_5) {
        saveGlobalConfig((current_18) => ({
          ...current_18,
          claudeInChromeDefaultEnabled: enabled_5
        }));
        setGlobalConfig({
          ...getGlobalConfig(),
          claudeInChromeDefaultEnabled: enabled_5
        });
        logEvent("tengu_claude_in_chrome_setting_changed", {
          enabled: enabled_5
        });
      }
    },
    // Teammate mode (only shown when agent swarms are enabled)
    ...isAgentSwarmsEnabled() ? (() => {
      const cliOverride = getCliTeammateModeOverride();
      const label = cliOverride ? `Teammate mode [overridden: ${cliOverride}]` : "Teammate mode";
      return [{
        id: "teammateMode",
        label,
        value: globalConfig.teammateMode ?? "auto",
        options: ["auto", "tmux", "in-process"],
        type: "enum",
        onChange(mode_0) {
          if (mode_0 !== "auto" && mode_0 !== "tmux" && mode_0 !== "in-process") {
            return;
          }
          clearCliTeammateModeOverride(mode_0);
          saveGlobalConfig((current_19) => ({
            ...current_19,
            teammateMode: mode_0
          }));
          setGlobalConfig({
            ...getGlobalConfig(),
            teammateMode: mode_0
          });
          logEvent("tengu_teammate_mode_changed", {
            mode: mode_0
          });
        }
      }, {
        id: "teammateDefaultModel",
        label: "Default teammate model",
        value: teammateModelDisplayString(globalConfig.teammateDefaultModel),
        type: "managedEnum",
        onChange() {
        }
      }];
    })() : [],
    // Remote at startup toggle — gated on build flag + GrowthBook + policy
    ...feature("BRIDGE_MODE") && isBridgeEnabled() ? [{
      id: "remoteControlAtStartup",
      label: "Enable Remote Control for all sessions",
      value: globalConfig.remoteControlAtStartup === void 0 ? "default" : String(globalConfig.remoteControlAtStartup),
      options: ["true", "false", "default"],
      type: "enum",
      onChange(selected_0) {
        if (selected_0 === "default") {
          saveGlobalConfig((current_20) => {
            if (current_20.remoteControlAtStartup === void 0) return current_20;
            const next_0 = {
              ...current_20
            };
            delete next_0.remoteControlAtStartup;
            return next_0;
          });
          setGlobalConfig({
            ...getGlobalConfig(),
            remoteControlAtStartup: void 0
          });
        } else {
          const enabled_6 = selected_0 === "true";
          saveGlobalConfig((current_21) => {
            if (current_21.remoteControlAtStartup === enabled_6) return current_21;
            return {
              ...current_21,
              remoteControlAtStartup: enabled_6
            };
          });
          setGlobalConfig({
            ...getGlobalConfig(),
            remoteControlAtStartup: enabled_6
          });
        }
        const resolved = getRemoteControlAtStartup();
        setAppState((prev_20) => {
          if (prev_20.replBridgeEnabled === resolved && !prev_20.replBridgeOutboundOnly) return prev_20;
          return {
            ...prev_20,
            replBridgeEnabled: resolved,
            replBridgeOutboundOnly: false
          };
        });
      }
    }] : [],
    ...shouldShowExternalIncludesToggle ? [{
      id: "showExternalIncludesDialog",
      label: "External CLAUDE.md includes",
      value: (() => {
        const projectConfig = getCurrentProjectConfig();
        if (projectConfig.hasClaudeMdExternalIncludesApproved) {
          return "true";
        } else {
          return "false";
        }
      })(),
      type: "managedEnum",
      onChange() {
      }
    }] : [],
    ...process.env.ANTHROPIC_API_KEY && !isRunningOnHomespace() ? [{
      id: "apiKey",
      label: /* @__PURE__ */ createElement(ThemedText, null, "Use custom API key:", " ", /* @__PURE__ */ createElement(ThemedText, { bold: true }, normalizeApiKeyForConfig(process.env.ANTHROPIC_API_KEY))),
      searchText: "Use custom API key",
      value: Boolean(process.env.ANTHROPIC_API_KEY && globalConfig.customApiKeyResponses?.approved?.includes(normalizeApiKeyForConfig(process.env.ANTHROPIC_API_KEY))),
      type: "boolean",
      onChange(useCustomKey) {
        saveGlobalConfig((current_22) => {
          const updated = {
            ...current_22
          };
          if (!updated.customApiKeyResponses) {
            updated.customApiKeyResponses = {
              approved: [],
              rejected: []
            };
          }
          if (!updated.customApiKeyResponses.approved) {
            updated.customApiKeyResponses = {
              ...updated.customApiKeyResponses,
              approved: []
            };
          }
          if (!updated.customApiKeyResponses.rejected) {
            updated.customApiKeyResponses = {
              ...updated.customApiKeyResponses,
              rejected: []
            };
          }
          if (process.env.ANTHROPIC_API_KEY) {
            const truncatedKey = normalizeApiKeyForConfig(process.env.ANTHROPIC_API_KEY);
            if (useCustomKey) {
              updated.customApiKeyResponses = {
                ...updated.customApiKeyResponses,
                approved: [...(updated.customApiKeyResponses.approved ?? []).filter((k) => k !== truncatedKey), truncatedKey],
                rejected: (updated.customApiKeyResponses.rejected ?? []).filter((k_0) => k_0 !== truncatedKey)
              };
            } else {
              updated.customApiKeyResponses = {
                ...updated.customApiKeyResponses,
                approved: (updated.customApiKeyResponses.approved ?? []).filter((k_1) => k_1 !== truncatedKey),
                rejected: [...(updated.customApiKeyResponses.rejected ?? []).filter((k_2) => k_2 !== truncatedKey), truncatedKey]
              };
            }
          }
          return updated;
        });
        setGlobalConfig(getGlobalConfig());
      }
    }] : []
  ];
  const filteredSettingsItems = useMemo(() => {
    if (!searchQuery) return settingsItems;
    const lowerQuery = searchQuery.toLowerCase();
    return settingsItems.filter((setting) => {
      if (setting.id.toLowerCase().includes(lowerQuery)) return true;
      const searchableText = "searchText" in setting ? setting.searchText : setting.label;
      return searchableText.toLowerCase().includes(lowerQuery);
    });
  }, [settingsItems, searchQuery]);
  useEffect(() => {
    if (selectedIndex >= filteredSettingsItems.length) {
      const newIndex = Math.max(0, filteredSettingsItems.length - 1);
      setSelectedIndex(newIndex);
      setScrollOffset(Math.max(0, newIndex - maxVisible + 1));
      return;
    }
    setScrollOffset((prev_21) => {
      if (selectedIndex < prev_21) return selectedIndex;
      if (selectedIndex >= prev_21 + maxVisible) return selectedIndex - maxVisible + 1;
      return prev_21;
    });
  }, [filteredSettingsItems.length, selectedIndex, maxVisible]);
  const adjustScrollOffset = useCallback((newIndex_0) => {
    setScrollOffset((prev_22) => {
      if (newIndex_0 < prev_22) return newIndex_0;
      if (newIndex_0 >= prev_22 + maxVisible) return newIndex_0 - maxVisible + 1;
      return prev_22;
    });
  }, [maxVisible]);
  const handleSaveAndClose = useCallback(() => {
    if (showSubmenu !== null) {
      return;
    }
    const formattedChanges = Object.entries(changes).map(([key, value_2]) => {
      logEvent("tengu_config_changed", {
        key,
        value: value_2
      });
      return `Set ${key} to ${source_default.bold(value_2)}`;
    });
    const effectiveApiKey = isRunningOnHomespace() ? void 0 : process.env.ANTHROPIC_API_KEY;
    const initialUsingCustomKey = Boolean(effectiveApiKey && initialConfig.current.customApiKeyResponses?.approved?.includes(normalizeApiKeyForConfig(effectiveApiKey)));
    const currentUsingCustomKey = Boolean(effectiveApiKey && globalConfig.customApiKeyResponses?.approved?.includes(normalizeApiKeyForConfig(effectiveApiKey)));
    if (initialUsingCustomKey !== currentUsingCustomKey) {
      formattedChanges.push(`${currentUsingCustomKey ? "Enabled" : "Disabled"} custom API key`);
      logEvent("tengu_config_changed", {
        key: "env.ANTHROPIC_API_KEY",
        value: currentUsingCustomKey
      });
    }
    if (globalConfig.theme !== initialConfig.current.theme) {
      formattedChanges.push(`Set theme to ${source_default.bold(globalConfig.theme)}`);
    }
    if (globalConfig.preferredNotifChannel !== initialConfig.current.preferredNotifChannel) {
      formattedChanges.push(`Set notifications to ${source_default.bold(globalConfig.preferredNotifChannel)}`);
    }
    if (currentOutputStyle !== initialOutputStyle.current) {
      formattedChanges.push(`Set output style to ${source_default.bold(currentOutputStyle)}`);
    }
    if (currentLanguage !== initialLanguage.current) {
      formattedChanges.push(`Set response language to ${source_default.bold(currentLanguage ?? "Default (English)")}`);
    }
    if (globalConfig.editorMode !== initialConfig.current.editorMode) {
      formattedChanges.push(`Set editor mode to ${source_default.bold(globalConfig.editorMode || "emacs")}`);
    }
    if (globalConfig.diffTool !== initialConfig.current.diffTool) {
      formattedChanges.push(`Set diff tool to ${source_default.bold(globalConfig.diffTool)}`);
    }
    if (globalConfig.autoConnectIde !== initialConfig.current.autoConnectIde) {
      formattedChanges.push(`${globalConfig.autoConnectIde ? "Enabled" : "Disabled"} auto-connect to IDE`);
    }
    if (globalConfig.autoInstallIdeExtension !== initialConfig.current.autoInstallIdeExtension) {
      formattedChanges.push(`${globalConfig.autoInstallIdeExtension ? "Enabled" : "Disabled"} auto-install IDE extension`);
    }
    if (globalConfig.autoCompactEnabled !== initialConfig.current.autoCompactEnabled) {
      formattedChanges.push(`${globalConfig.autoCompactEnabled ? "Enabled" : "Disabled"} auto-compact`);
    }
    if (globalConfig.respectGitignore !== initialConfig.current.respectGitignore) {
      formattedChanges.push(`${globalConfig.respectGitignore ? "Enabled" : "Disabled"} respect .gitignore in file picker`);
    }
    if (globalConfig.copyFullResponse !== initialConfig.current.copyFullResponse) {
      formattedChanges.push(`${globalConfig.copyFullResponse ? "Enabled" : "Disabled"} always copy full response`);
    }
    if (globalConfig.copyOnSelect !== initialConfig.current.copyOnSelect) {
      formattedChanges.push(`${globalConfig.copyOnSelect ? "Enabled" : "Disabled"} copy on select`);
    }
    if (globalConfig.terminalProgressBarEnabled !== initialConfig.current.terminalProgressBarEnabled) {
      formattedChanges.push(`${globalConfig.terminalProgressBarEnabled ? "Enabled" : "Disabled"} terminal progress bar`);
    }
    if (globalConfig.showStatusInTerminalTab !== initialConfig.current.showStatusInTerminalTab) {
      formattedChanges.push(`${globalConfig.showStatusInTerminalTab ? "Enabled" : "Disabled"} terminal tab status`);
    }
    if (globalConfig.showTurnDuration !== initialConfig.current.showTurnDuration) {
      formattedChanges.push(`${globalConfig.showTurnDuration ? "Enabled" : "Disabled"} turn duration`);
    }
    if (globalConfig.remoteControlAtStartup !== initialConfig.current.remoteControlAtStartup) {
      const remoteLabel = globalConfig.remoteControlAtStartup === void 0 ? "Reset Remote Control to default" : `${globalConfig.remoteControlAtStartup ? "Enabled" : "Disabled"} Remote Control for all sessions`;
      formattedChanges.push(remoteLabel);
    }
    if (settingsData?.autoUpdatesChannel !== initialSettingsData.current?.autoUpdatesChannel) {
      formattedChanges.push(`Set auto-update channel to ${source_default.bold(settingsData?.autoUpdatesChannel ?? "latest")}`);
    }
    if (formattedChanges.length > 0) {
      onClose(formattedChanges.join("\n"));
    } else {
      onClose("Config dialog dismissed", {
        display: "system"
      });
    }
  }, [showSubmenu, changes, globalConfig, mainLoopModel, currentOutputStyle, currentLanguage, settingsData?.autoUpdatesChannel, isFastModeEnabled() ? settingsData?.fastMode : void 0, onClose]);
  const revertChanges = useCallback(() => {
    if (themeSetting !== initialThemeSetting.current) {
      setTheme(initialThemeSetting.current);
    }
    saveGlobalConfig(() => initialConfig.current);
    const il = initialLocalSettings;
    updateSettingsForSource("localSettings", {
      spinnerTipsEnabled: il?.spinnerTipsEnabled,
      prefersReducedMotion: il?.prefersReducedMotion,
      defaultView: il?.defaultView,
      outputStyle: il?.outputStyle
    });
    const iu = initialUserSettings;
    updateSettingsForSource("userSettings", {
      alwaysThinkingEnabled: iu?.alwaysThinkingEnabled,
      fastMode: iu?.fastMode,
      promptSuggestionEnabled: iu?.promptSuggestionEnabled,
      autoUpdatesChannel: iu?.autoUpdatesChannel,
      minimumVersion: iu?.minimumVersion,
      language: iu?.language,
      ...feature("TRANSCRIPT_CLASSIFIER") ? {
        useAutoModeDuringPlan: iu?.useAutoModeDuringPlan
      } : {},
      // ThemePicker's Ctrl+T writes this key directly — include it so the
      // disk state reverts along with the in-memory AppState.settings restore.
      syntaxHighlightingDisabled: iu?.syntaxHighlightingDisabled,
      // permissions: the defaultMode onChange (above) spreads the MERGED
      // settingsData.permissions into userSettings — project/policy allow/deny
      // arrays can leak to disk. Spread the full initial snapshot so the
      // mergeWith array-customizer (settings.ts:375) replaces leaked arrays.
      // Explicitly include defaultMode so undefined triggers the customizer's
      // delete path even when iu.permissions lacks that key.
      permissions: iu?.permissions === void 0 ? void 0 : {
        ...iu.permissions,
        defaultMode: iu.permissions.defaultMode
      }
    });
    const ia = initialAppState;
    setAppState((prev_23) => ({
      ...prev_23,
      mainLoopModel: ia.mainLoopModel,
      mainLoopModelForSession: ia.mainLoopModelForSession,
      verbose: ia.verbose,
      thinkingEnabled: ia.thinkingEnabled,
      fastMode: ia.fastMode,
      promptSuggestionEnabled: ia.promptSuggestionEnabled,
      isBriefOnly: ia.isBriefOnly,
      replBridgeEnabled: ia.replBridgeEnabled,
      replBridgeOutboundOnly: ia.replBridgeOutboundOnly,
      settings: ia.settings,
      // Reconcile auto-mode state after useAutoModeDuringPlan revert above —
      // the onChange handler may have activated/deactivated auto mid-plan.
      toolPermissionContext: transitionPlanAutoMode(prev_23.toolPermissionContext)
    }));
    if (getUserMsgOptIn() !== initialUserMsgOptIn) {
      setUserMsgOptIn(initialUserMsgOptIn);
    }
  }, [themeSetting, setTheme, initialLocalSettings, initialUserSettings, initialAppState, initialUserMsgOptIn, setAppState]);
  const handleEscape = useCallback(() => {
    if (showSubmenu !== null) {
      return;
    }
    if (isDirty.current) {
      revertChanges();
    }
    onClose("Config dialog dismissed", {
      display: "system"
    });
  }, [showSubmenu, revertChanges, onClose]);
  useKeybinding("confirm:no", handleEscape, {
    context: "Settings",
    isActive: showSubmenu === null && !isSearchMode && !headerFocused
  });
  useKeybinding("settings:close", handleSaveAndClose, {
    context: "Settings",
    isActive: showSubmenu === null && !isSearchMode && !headerFocused
  });
  const toggleSetting = useCallback(() => {
    const setting_0 = filteredSettingsItems[selectedIndex];
    if (!setting_0 || !setting_0.onChange) {
      return;
    }
    if (setting_0.type === "boolean") {
      isDirty.current = true;
      setting_0.onChange(!setting_0.value);
      if (setting_0.id === "thinkingEnabled") {
        const newValue = !setting_0.value;
        const backToInitial = newValue === initialThinkingEnabled.current;
        if (backToInitial) {
          setShowThinkingWarning(false);
        } else if (context.messages.some((m_0) => m_0.type === "assistant")) {
          setShowThinkingWarning(true);
        }
      }
      return;
    }
    if (setting_0.id === "theme" || setting_0.id === "model" || setting_0.id === "teammateDefaultModel" || setting_0.id === "showExternalIncludesDialog" || setting_0.id === "outputStyle" || setting_0.id === "language") {
      switch (setting_0.id) {
        case "theme":
          setShowSubmenu("Theme");
          setTabsHidden(true);
          return;
        case "model":
          setShowSubmenu("Model");
          setTabsHidden(true);
          return;
        case "teammateDefaultModel":
          setShowSubmenu("TeammateModel");
          setTabsHidden(true);
          return;
        case "showExternalIncludesDialog":
          setShowSubmenu("ExternalIncludes");
          setTabsHidden(true);
          return;
        case "outputStyle":
          setShowSubmenu("OutputStyle");
          setTabsHidden(true);
          return;
        case "language":
          setShowSubmenu("Language");
          setTabsHidden(true);
          return;
      }
    }
    if (setting_0.id === "autoUpdatesChannel") {
      if (autoUpdaterDisabledReason) {
        setShowSubmenu("EnableAutoUpdates");
        setTabsHidden(true);
        return;
      }
      const currentChannel = settingsData?.autoUpdatesChannel ?? "latest";
      if (currentChannel === "latest") {
        setShowSubmenu("ChannelDowngrade");
        setTabsHidden(true);
      } else {
        isDirty.current = true;
        updateSettingsForSource("userSettings", {
          autoUpdatesChannel: "latest",
          minimumVersion: void 0
        });
        setSettingsData((prev_24) => ({
          ...prev_24,
          autoUpdatesChannel: "latest",
          minimumVersion: void 0
        }));
        logEvent("tengu_autoupdate_channel_changed", {
          channel: "latest"
        });
      }
      return;
    }
    if (setting_0.type === "enum") {
      isDirty.current = true;
      const currentIndex = setting_0.options.indexOf(setting_0.value);
      const nextIndex = (currentIndex + 1) % setting_0.options.length;
      setting_0.onChange(setting_0.options[nextIndex]);
      return;
    }
  }, [autoUpdaterDisabledReason, filteredSettingsItems, selectedIndex, settingsData?.autoUpdatesChannel, setTabsHidden]);
  const moveSelection = (delta) => {
    setShowThinkingWarning(false);
    const newIndex_1 = Math.max(0, Math.min(filteredSettingsItems.length - 1, selectedIndex + delta));
    setSelectedIndex(newIndex_1);
    adjustScrollOffset(newIndex_1);
  };
  useKeybindings({
    "select:previous": () => {
      if (selectedIndex === 0) {
        setShowThinkingWarning(false);
        setIsSearchMode(true);
        setScrollOffset(0);
      } else {
        moveSelection(-1);
      }
    },
    "select:next": () => moveSelection(1),
    // Wheel. ScrollKeybindingHandler's scroll:line* returns false (not
    // consumed) when the ScrollBox content fits — which it always does
    // here because the list is paginated (slice). The event falls through
    // to this handler which navigates the list, clamping at boundaries.
    "scroll:lineUp": () => moveSelection(-1),
    "scroll:lineDown": () => moveSelection(1),
    "select:accept": toggleSetting,
    "settings:search": () => {
      setIsSearchMode(true);
      setSearchQuery("");
    }
  }, {
    context: "Settings",
    isActive: showSubmenu === null && !isSearchMode && !headerFocused
  });
  const handleKeyDown = useCallback((e) => {
    if (showSubmenu !== null) return;
    if (headerFocused) return;
    if (isSearchMode) {
      if (e.key === "escape") {
        e.preventDefault();
        if (searchQuery.length > 0) {
          setSearchQuery("");
        } else {
          setIsSearchMode(false);
        }
        return;
      }
      if (e.key === "return" || e.key === "down" || e.key === "wheeldown") {
        e.preventDefault();
        setIsSearchMode(false);
        setSelectedIndex(0);
        setScrollOffset(0);
      }
      return;
    }
    if (e.key === "left" || e.key === "right" || e.key === "tab") {
      e.preventDefault();
      toggleSetting();
      return;
    }
    if (e.ctrl || e.meta) return;
    if (e.key === "j" || e.key === "k" || e.key === "/") return;
    if (e.key.length === 1 && e.key !== " ") {
      e.preventDefault();
      setIsSearchMode(true);
      setSearchQuery(e.key);
    }
  }, [showSubmenu, headerFocused, isSearchMode, searchQuery, setSearchQuery, toggleSetting]);
  return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", width: "100%", tabIndex: 0, autoFocus: true, onKeyDown: handleKeyDown }, showSubmenu === "Theme" ? /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(
    ThemePicker,
    {
      onThemeSelect: (setting_1) => {
        isDirty.current = true;
        setTheme(setting_1);
        setShowSubmenu(null);
        setTabsHidden(false);
      },
      onCancel: () => {
        setShowSubmenu(null);
        setTabsHidden(false);
      },
      hideEscToCancel: true,
      skipExitHandling: true
    }
  ), /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, /* @__PURE__ */ createElement(Byline, null, /* @__PURE__ */ createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "select" }), /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "cancel" }))))) : showSubmenu === "Model" ? /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(ModelPicker, { initial: mainLoopModel, onSelect: (model_0, _effort) => {
    isDirty.current = true;
    onChangeMainModelConfig(model_0);
    setShowSubmenu(null);
    setTabsHidden(false);
  }, onCancel: () => {
    setShowSubmenu(null);
    setTabsHidden(false);
  }, showFastModeNotice: isFastModeEnabled() ? isFastMode && isFastModeSupportedByModel(mainLoopModel) && isFastModeAvailable() : false }), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ createElement(Byline, null, /* @__PURE__ */ createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "confirm" }), /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "cancel" })))) : showSubmenu === "TeammateModel" ? /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(ModelPicker, { initial: globalConfig.teammateDefaultModel ?? null, skipSettingsWrite: true, headerText: "Default model for newly spawned teammates. The leader can override via the tool call's model parameter.", onSelect: (model_1, _effort_0) => {
    setShowSubmenu(null);
    setTabsHidden(false);
    if (globalConfig.teammateDefaultModel === void 0 && model_1 === null) {
      return;
    }
    isDirty.current = true;
    saveGlobalConfig((current_23) => current_23.teammateDefaultModel === model_1 ? current_23 : {
      ...current_23,
      teammateDefaultModel: model_1
    });
    setGlobalConfig({
      ...getGlobalConfig(),
      teammateDefaultModel: model_1
    });
    setChanges((prev_25) => ({
      ...prev_25,
      teammateDefaultModel: teammateModelDisplayString(model_1)
    }));
    logEvent("tengu_teammate_default_model_changed", {
      model: model_1
    });
  }, onCancel: () => {
    setShowSubmenu(null);
    setTabsHidden(false);
  } }), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ createElement(Byline, null, /* @__PURE__ */ createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "confirm" }), /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "cancel" })))) : showSubmenu === "ExternalIncludes" ? /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(ClaudeMdExternalIncludesDialog, { onDone: () => {
    setShowSubmenu(null);
    setTabsHidden(false);
  }, externalIncludes: getExternalClaudeMdIncludes(memoryFiles) }), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ createElement(Byline, null, /* @__PURE__ */ createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "confirm" }), /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "disable external includes" })))) : showSubmenu === "OutputStyle" ? /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(OutputStylePicker, { initialStyle: currentOutputStyle, onComplete: (style) => {
    isDirty.current = true;
    setCurrentOutputStyle(style ?? DEFAULT_OUTPUT_STYLE_NAME);
    setShowSubmenu(null);
    setTabsHidden(false);
    updateSettingsForSource("localSettings", {
      outputStyle: style
    });
    void logEvent("tengu_output_style_changed", {
      style: style ?? DEFAULT_OUTPUT_STYLE_NAME,
      source: "config_panel",
      settings_source: "localSettings"
    });
  }, onCancel: () => {
    setShowSubmenu(null);
    setTabsHidden(false);
  } }), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ createElement(Byline, null, /* @__PURE__ */ createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "confirm" }), /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "cancel" })))) : showSubmenu === "Language" ? /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(LanguagePicker, { initialLanguage: currentLanguage, onComplete: (language) => {
    isDirty.current = true;
    setCurrentLanguage(language);
    setShowSubmenu(null);
    setTabsHidden(false);
    updateSettingsForSource("userSettings", {
      language
    });
    void logEvent("tengu_language_changed", {
      language: language ?? "default",
      source: "config_panel"
    });
  }, onCancel: () => {
    setShowSubmenu(null);
    setTabsHidden(false);
  } }), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ createElement(Byline, null, /* @__PURE__ */ createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "confirm" }), /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Settings", fallback: "Esc", description: "cancel" })))) : showSubmenu === "EnableAutoUpdates" ? /* @__PURE__ */ createElement(Dialog, { title: "Enable Auto-Updates", onCancel: () => {
    setShowSubmenu(null);
    setTabsHidden(false);
  }, hideBorder: true, hideInputGuide: true }, autoUpdaterDisabledReason?.type !== "config" ? /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(ThemedText, null, autoUpdaterDisabledReason?.type === "env" ? "Auto-updates are controlled by an environment variable and cannot be changed here." : "Auto-updates are disabled in development builds."), autoUpdaterDisabledReason?.type === "env" && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Unset ", autoUpdaterDisabledReason.envVar, " to re-enable auto-updates.")) : /* @__PURE__ */ createElement(Select, { options: [{
    label: "Enable with latest channel",
    value: "latest"
  }, {
    label: "Enable with stable channel",
    value: "stable"
  }], onChange: (channel) => {
    isDirty.current = true;
    setShowSubmenu(null);
    setTabsHidden(false);
    saveGlobalConfig((current_24) => ({
      ...current_24,
      autoUpdates: true
    }));
    setGlobalConfig({
      ...getGlobalConfig(),
      autoUpdates: true
    });
    updateSettingsForSource("userSettings", {
      autoUpdatesChannel: channel,
      minimumVersion: void 0
    });
    setSettingsData((prev_26) => ({
      ...prev_26,
      autoUpdatesChannel: channel,
      minimumVersion: void 0
    }));
    logEvent("tengu_autoupdate_enabled", {
      channel
    });
  } })) : showSubmenu === "ChannelDowngrade" ? /* @__PURE__ */ createElement(ChannelDowngradeDialog, { currentVersion: MACRO.VERSION, onChoice: (choice) => {
    setShowSubmenu(null);
    setTabsHidden(false);
    if (choice === "cancel") {
      return;
    }
    isDirty.current = true;
    const newSettings = {
      autoUpdatesChannel: "stable"
    };
    if (choice === "stay") {
      newSettings.minimumVersion = MACRO.VERSION;
    }
    updateSettingsForSource("userSettings", newSettings);
    setSettingsData((prev_27) => ({
      ...prev_27,
      ...newSettings
    }));
    logEvent("tengu_autoupdate_channel_changed", {
      channel: "stable",
      minimum_version_set: choice === "stay"
    });
  } }) : /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", gap: 1, marginY: insideModal ? void 0 : 1 }, /* @__PURE__ */ createElement(SearchBox, { query: searchQuery, isFocused: isSearchMode && !headerFocused, isTerminalFocused, cursorOffset: searchCursorOffset, placeholder: "Search settings\u2026" }), /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, filteredSettingsItems.length === 0 ? /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, 'No settings match "', searchQuery, '"') : /* @__PURE__ */ createElement(Fragment, null, scrollOffset > 0 && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, figures_default.arrowUp, " ", scrollOffset, " more above"), filteredSettingsItems.slice(scrollOffset, scrollOffset + maxVisible).map((setting_2, i) => {
    const actualIndex = scrollOffset + i;
    const isSelected = actualIndex === selectedIndex && !headerFocused && !isSearchMode;
    return /* @__PURE__ */ createElement(Fragment, { key: setting_2.id }, /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(ThemedBox_default, { width: 44 }, /* @__PURE__ */ createElement(ThemedText, { color: isSelected ? "suggestion" : void 0 }, isSelected ? figures_default.pointer : " ", " ", setting_2.label)), /* @__PURE__ */ createElement(ThemedBox_default, { key: isSelected ? "selected" : "unselected" }, setting_2.type === "boolean" ? /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(ThemedText, { color: isSelected ? "suggestion" : void 0 }, setting_2.value.toString()), showThinkingWarning && setting_2.id === "thinkingEnabled" && /* @__PURE__ */ createElement(ThemedText, { color: "warning" }, " ", "Changing thinking mode mid-conversation will increase latency and may reduce quality.")) : setting_2.id === "theme" ? /* @__PURE__ */ createElement(ThemedText, { color: isSelected ? "suggestion" : void 0 }, THEME_LABELS[setting_2.value.toString()] ?? setting_2.value.toString()) : setting_2.id === "notifChannel" ? /* @__PURE__ */ createElement(ThemedText, { color: isSelected ? "suggestion" : void 0 }, /* @__PURE__ */ createElement(NotifChannelLabel, { value: setting_2.value.toString() })) : setting_2.id === "defaultPermissionMode" ? /* @__PURE__ */ createElement(ThemedText, { color: isSelected ? "suggestion" : void 0 }, permissionModeTitle(setting_2.value)) : setting_2.id === "autoUpdatesChannel" && autoUpdaterDisabledReason ? /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, { color: isSelected ? "suggestion" : void 0 }, "disabled"), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "(", formatAutoUpdaterDisabledReason(autoUpdaterDisabledReason), ")")) : /* @__PURE__ */ createElement(ThemedText, { color: isSelected ? "suggestion" : void 0 }, setting_2.value.toString()))));
  }), scrollOffset + maxVisible < filteredSettingsItems.length && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, figures_default.arrowDown, " ", filteredSettingsItems.length - scrollOffset - maxVisible, " ", "more below"))), headerFocused ? /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ createElement(Byline, null, /* @__PURE__ */ createElement(KeyboardShortcutHint, { shortcut: "\u2190/\u2192 tab", action: "switch" }), /* @__PURE__ */ createElement(KeyboardShortcutHint, { shortcut: "\u2193", action: "return" }), /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Settings", fallback: "Esc", description: "close" }))) : isSearchMode ? /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ createElement(Byline, null, /* @__PURE__ */ createElement(ThemedText, null, "Type to filter"), /* @__PURE__ */ createElement(KeyboardShortcutHint, { shortcut: "Enter/\u2193", action: "select" }), /* @__PURE__ */ createElement(KeyboardShortcutHint, { shortcut: "\u2191", action: "tabs" }), /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Settings", fallback: "Esc", description: "clear" }))) : /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ createElement(Byline, null, /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "select:accept", context: "Settings", fallback: "Space", description: "change" }), /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "settings:close", context: "Settings", fallback: "Enter", description: "save" }), /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "settings:search", context: "Settings", fallback: "/", description: "search" }), /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Settings", fallback: "Esc", description: "cancel" })))));
}
function teammateModelDisplayString(value) {
  if (value === void 0) {
    return modelDisplayString(getHardcodedTeammateModelFallback());
  }
  if (value === null) return "Default (leader's model)";
  return modelDisplayString(value);
}
function NotifChannelLabel(t0) {
  const $ = c(4);
  const {
    value
  } = t0;
  switch (value) {
    case "auto": {
      return "Auto";
    }
    case "iterm2": {
      let t1;
      if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t1 = /* @__PURE__ */ createElement(ThemedText, null, "iTerm2 ", /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "(OSC 9)"));
        $[0] = t1;
      } else {
        t1 = $[0];
      }
      return t1;
    }
    case "terminal_bell": {
      let t1;
      if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t1 = /* @__PURE__ */ createElement(ThemedText, null, "Terminal Bell ", /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "(\\a)"));
        $[1] = t1;
      } else {
        t1 = $[1];
      }
      return t1;
    }
    case "kitty": {
      let t1;
      if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t1 = /* @__PURE__ */ createElement(ThemedText, null, "Kitty ", /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "(OSC 99)"));
        $[2] = t1;
      } else {
        t1 = $[2];
      }
      return t1;
    }
    case "ghostty": {
      let t1;
      if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t1 = /* @__PURE__ */ createElement(ThemedText, null, "Ghostty ", /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "(OSC 777)"));
        $[3] = t1;
      } else {
        t1 = $[3];
      }
      return t1;
    }
    case "iterm2_with_bell": {
      return "iTerm2 w/ Bell";
    }
    case "notifications_disabled": {
      return "Disabled";
    }
    default: {
      return value;
    }
  }
}
var THEME_LABELS;
var init_Config = __esm({
  "src/components/Settings/Config.tsx"() {
    init_react_compiler_runtime();
    init_bun_bundle();
    init_ink();
    init_react();
    init_react();
    init_useKeybinding();
    init_figures();
    init_config();
    init_authPortable();
    init_config();
    init_source();
    init_PermissionMode();
    init_permissionSetup();
    init_log();
    init_analytics();
    init_bridgeEnabled();
    init_ThemePicker();
    init_AppState();
    init_ModelPicker();
    init_model();
    init_extraUsage();
    init_ClaudeMdExternalIncludesDialog();
    init_ChannelDowngradeDialog();
    init_Dialog();
    init_CustomSelect();
    init_OutputStylePicker();
    init_LanguagePicker();
    init_claudemd();
    init_KeyboardShortcutHint();
    init_ConfigurableShortcutHint();
    init_Byline();
    init_Tabs();
    init_modalContext();
    init_SearchBox();
    init_ide();
    init_settings();
    init_state();
    init_outputStyles();
    init_envUtils();
    init_growthbook();
    init_agentSwarmsEnabled();
    init_teammateModeSnapshot();
    init_teammateModel();
    init_useSearchInput();
    init_useTerminalSize();
    init_fastMode();
    init_fullscreen();
    THEME_LABELS = {
      auto: "Auto (match terminal)",
      dark: "Dark mode",
      light: "Light mode",
      "dark-daltonized": "Dark mode (colorblind-friendly)",
      "light-daltonized": "Light mode (colorblind-friendly)",
      "dark-ansi": "Dark mode (ANSI colors only)",
      "light-ansi": "Light mode (ANSI colors only)"
    };
  }
});

// src/components/Settings/Usage.tsx
function LimitBar(t0) {
  const $ = c(34);
  const {
    title,
    limit,
    maxWidth,
    showTimeInReset: t1,
    extraSubtext
  } = t0;
  const showTimeInReset = t1 === void 0 ? true : t1;
  const {
    utilization,
    resets_at
  } = limit;
  if (utilization === null) {
    return null;
  }
  const usedText = `${Math.floor(utilization)}% used`;
  let subtext;
  if (resets_at) {
    let t2;
    if ($[0] !== resets_at || $[1] !== showTimeInReset) {
      t2 = formatResetText(resets_at, true, showTimeInReset);
      $[0] = resets_at;
      $[1] = showTimeInReset;
      $[2] = t2;
    } else {
      t2 = $[2];
    }
    subtext = `Resets ${t2}`;
  }
  if (extraSubtext) {
    if (subtext) {
      subtext = `${extraSubtext} \xB7 ${subtext}`;
    } else {
      subtext = extraSubtext;
    }
  }
  if (maxWidth >= 62) {
    let t2;
    if ($[3] !== title) {
      t2 = /* @__PURE__ */ createElement(ThemedText, { bold: true }, title);
      $[3] = title;
      $[4] = t2;
    } else {
      t2 = $[4];
    }
    const t3 = utilization / 100;
    let t4;
    if ($[5] !== t3) {
      t4 = /* @__PURE__ */ createElement(ProgressBar, { ratio: t3, width: 50, fillColor: "rate_limit_fill", emptyColor: "rate_limit_empty" });
      $[5] = t3;
      $[6] = t4;
    } else {
      t4 = $[6];
    }
    let t5;
    if ($[7] !== usedText) {
      t5 = /* @__PURE__ */ createElement(ThemedText, null, usedText);
      $[7] = usedText;
      $[8] = t5;
    } else {
      t5 = $[8];
    }
    let t6;
    if ($[9] !== t4 || $[10] !== t5) {
      t6 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "row", gap: 1 }, t4, t5);
      $[9] = t4;
      $[10] = t5;
      $[11] = t6;
    } else {
      t6 = $[11];
    }
    let t7;
    if ($[12] !== subtext) {
      t7 = subtext && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, subtext);
      $[12] = subtext;
      $[13] = t7;
    } else {
      t7 = $[13];
    }
    let t8;
    if ($[14] !== t2 || $[15] !== t6 || $[16] !== t7) {
      t8 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, t2, t6, t7);
      $[14] = t2;
      $[15] = t6;
      $[16] = t7;
      $[17] = t8;
    } else {
      t8 = $[17];
    }
    return t8;
  } else {
    let t2;
    if ($[18] !== title) {
      t2 = /* @__PURE__ */ createElement(ThemedText, { bold: true }, title);
      $[18] = title;
      $[19] = t2;
    } else {
      t2 = $[19];
    }
    let t3;
    if ($[20] !== subtext) {
      t3 = subtext && /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(ThemedText, null, " "), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "\xB7 ", subtext));
      $[20] = subtext;
      $[21] = t3;
    } else {
      t3 = $[21];
    }
    let t4;
    if ($[22] !== t2 || $[23] !== t3) {
      t4 = /* @__PURE__ */ createElement(ThemedText, null, t2, t3);
      $[22] = t2;
      $[23] = t3;
      $[24] = t4;
    } else {
      t4 = $[24];
    }
    const t5 = utilization / 100;
    let t6;
    if ($[25] !== maxWidth || $[26] !== t5) {
      t6 = /* @__PURE__ */ createElement(ProgressBar, { ratio: t5, width: maxWidth, fillColor: "rate_limit_fill", emptyColor: "rate_limit_empty" });
      $[25] = maxWidth;
      $[26] = t5;
      $[27] = t6;
    } else {
      t6 = $[27];
    }
    let t7;
    if ($[28] !== usedText) {
      t7 = /* @__PURE__ */ createElement(ThemedText, null, usedText);
      $[28] = usedText;
      $[29] = t7;
    } else {
      t7 = $[29];
    }
    let t8;
    if ($[30] !== t4 || $[31] !== t6 || $[32] !== t7) {
      t8 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, t4, t6, t7);
      $[30] = t4;
      $[31] = t6;
      $[32] = t7;
      $[33] = t8;
    } else {
      t8 = $[33];
    }
    return t8;
  }
}
function Usage() {
  const [utilization, setUtilization] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const {
    columns
  } = useTerminalSize();
  const availableWidth = columns - 2;
  const maxWidth = Math.min(availableWidth, 80);
  const loadUtilization = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchUtilization();
      setUtilization(data);
    } catch (err) {
      logError(err);
      const axiosError = err;
      const responseBody = axiosError.response?.data ? jsonStringify(axiosError.response.data) : void 0;
      setError(responseBody ? `Failed to load usage data: ${responseBody}` : "Failed to load usage data");
    } finally {
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    void loadUtilization();
  }, [loadUtilization]);
  useKeybinding("settings:retry", () => {
    void loadUtilization();
  }, {
    context: "Settings",
    isActive: !!error && !isLoading
  });
  if (error) {
    return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, /* @__PURE__ */ createElement(ThemedText, { color: "error" }, "Error: ", error), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ createElement(Byline, null, /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "settings:retry", context: "Settings", fallback: "r", description: "retry" }), /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Settings", fallback: "Esc", description: "cancel" }))));
  }
  if (!utilization) {
    return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Loading usage data\u2026"), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Settings", fallback: "Esc", description: "cancel" })));
  }
  const subscriptionType = getSubscriptionType();
  const showSonnetBar = subscriptionType === "max" || subscriptionType === "team" || subscriptionType === null;
  const limits = [{
    title: "Current session",
    limit: utilization.five_hour
  }, {
    title: "Current week (all models)",
    limit: utilization.seven_day
  }, ...showSonnetBar ? [{
    title: "Current week (Sonnet only)",
    limit: utilization.seven_day_sonnet
  }] : []];
  return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", gap: 1, width: "100%" }, limits.some(({
    limit
  }) => limit) || /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "/usage is only available for subscription plans."), limits.map(({
    title,
    limit: limit_0
  }) => limit_0 && /* @__PURE__ */ createElement(LimitBar, { key: title, title, limit: limit_0, maxWidth })), utilization.extra_usage && /* @__PURE__ */ createElement(ExtraUsageSection, { extraUsage: utilization.extra_usage, maxWidth }), isEligibleForOverageCreditGrant() && /* @__PURE__ */ createElement(OverageCreditUpsell, { maxWidth }), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Settings", fallback: "Esc", description: "cancel" })));
}
function ExtraUsageSection(t0) {
  const $ = c(20);
  const {
    extraUsage: extraUsage2,
    maxWidth
  } = t0;
  const subscriptionType = getSubscriptionType();
  const isProOrMax = subscriptionType === "pro" || subscriptionType === "max";
  if (!isProOrMax) {
    return false;
  }
  if (!extraUsage2.is_enabled) {
    if (extraUsage.isEnabled()) {
      let t12;
      if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t12 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, { bold: true }, EXTRA_USAGE_SECTION_TITLE), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Extra usage not enabled \xB7 /extra-usage to enable"));
        $[0] = t12;
      } else {
        t12 = $[0];
      }
      return t12;
    }
    return null;
  }
  if (extraUsage2.monthly_limit === null) {
    let t12;
    if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t12 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, { bold: true }, EXTRA_USAGE_SECTION_TITLE), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Unlimited"));
      $[1] = t12;
    } else {
      t12 = $[1];
    }
    return t12;
  }
  if (typeof extraUsage2.used_credits !== "number" || typeof extraUsage2.utilization !== "number") {
    return null;
  }
  const t1 = extraUsage2.used_credits / 100;
  let t2;
  if ($[2] !== t1) {
    t2 = formatCost(t1, 2);
    $[2] = t1;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  const formattedUsedCredits = t2;
  const t3 = extraUsage2.monthly_limit / 100;
  let t4;
  if ($[4] !== t3) {
    t4 = formatCost(t3, 2);
    $[4] = t3;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  const formattedMonthlyLimit = t4;
  let T0;
  let t5;
  let t6;
  let t7;
  if ($[6] !== extraUsage2.utilization) {
    const now = /* @__PURE__ */ new Date();
    const oneMonthReset = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    T0 = LimitBar;
    t7 = EXTRA_USAGE_SECTION_TITLE;
    t5 = extraUsage2.utilization;
    t6 = oneMonthReset.toISOString();
    $[6] = extraUsage2.utilization;
    $[7] = T0;
    $[8] = t5;
    $[9] = t6;
    $[10] = t7;
  } else {
    T0 = $[7];
    t5 = $[8];
    t6 = $[9];
    t7 = $[10];
  }
  let t8;
  if ($[11] !== t5 || $[12] !== t6) {
    t8 = {
      utilization: t5,
      resets_at: t6
    };
    $[11] = t5;
    $[12] = t6;
    $[13] = t8;
  } else {
    t8 = $[13];
  }
  const t9 = `${formattedUsedCredits} / ${formattedMonthlyLimit} spent`;
  let t10;
  if ($[14] !== T0 || $[15] !== maxWidth || $[16] !== t7 || $[17] !== t8 || $[18] !== t9) {
    t10 = /* @__PURE__ */ createElement(T0, { title: t7, limit: t8, showTimeInReset: false, extraSubtext: t9, maxWidth });
    $[14] = T0;
    $[15] = maxWidth;
    $[16] = t7;
    $[17] = t8;
    $[18] = t9;
    $[19] = t10;
  } else {
    t10 = $[19];
  }
  return t10;
}
var EXTRA_USAGE_SECTION_TITLE;
var init_Usage = __esm({
  "src/components/Settings/Usage.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_react();
    init_extra_usage();
    init_cost_tracker();
    init_auth();
    init_useTerminalSize();
    init_ink();
    init_useKeybinding();
    init_usage();
    init_format();
    init_log();
    init_slowOperations();
    init_ConfigurableShortcutHint();
    init_Byline();
    init_ProgressBar();
    init_OverageCreditUpsell();
    EXTRA_USAGE_SECTION_TITLE = "Extra usage";
  }
});

// src/components/Settings/Settings.tsx
function Settings(t0) {
  const $ = c(25);
  const {
    onClose,
    context,
    defaultTab
  } = t0;
  const [selectedTab, setSelectedTab] = useState(defaultTab);
  const [tabsHidden, setTabsHidden] = useState(false);
  const [configOwnsEsc, setConfigOwnsEsc] = useState(false);
  const [gatesOwnsEsc, setGatesOwnsEsc] = useState(false);
  const insideModal = useIsInsideModal();
  const {
    rows
  } = useModalOrTerminalSize(useTerminalSize());
  const contentHeight = insideModal ? rows + 1 : Math.max(15, Math.min(Math.floor(rows * 0.8), 30));
  const [diagnosticsPromise] = useState(_temp22);
  useExitOnCtrlCDWithKeybindings();
  let t1;
  if ($[0] !== onClose || $[1] !== tabsHidden) {
    t1 = () => {
      if (tabsHidden) {
        return;
      }
      onClose("Status dialog dismissed", {
        display: "system"
      });
    };
    $[0] = onClose;
    $[1] = tabsHidden;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const handleEscape = t1;
  const t2 = !tabsHidden && !(selectedTab === "Config" && configOwnsEsc) && !(selectedTab === "Gates" && gatesOwnsEsc);
  let t3;
  if ($[3] !== t2) {
    t3 = {
      context: "Settings",
      isActive: t2
    };
    $[3] = t2;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  useKeybinding("confirm:no", handleEscape, t3);
  let t4;
  if ($[5] !== context || $[6] !== diagnosticsPromise) {
    t4 = /* @__PURE__ */ createElement(Tab, { key: "status", title: "Status" }, /* @__PURE__ */ createElement(Status, { context, diagnosticsPromise }));
    $[5] = context;
    $[6] = diagnosticsPromise;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  let t5;
  if ($[8] !== contentHeight || $[9] !== context || $[10] !== onClose) {
    t5 = /* @__PURE__ */ createElement(Tab, { key: "config", title: "Config" }, /* @__PURE__ */ createElement(Suspense, { fallback: null }, /* @__PURE__ */ createElement(Config, { context, onClose, setTabsHidden, onIsSearchModeChange: setConfigOwnsEsc, contentHeight })));
    $[8] = contentHeight;
    $[9] = context;
    $[10] = onClose;
    $[11] = t5;
  } else {
    t5 = $[11];
  }
  let t6;
  if ($[12] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ createElement(Tab, { key: "usage", title: "Usage" }, /* @__PURE__ */ createElement(Usage, null));
    $[12] = t6;
  } else {
    t6 = $[12];
  }
  let t7;
  if ($[13] !== contentHeight) {
    t7 = false ? [/* @__PURE__ */ createElement(Tab, { key: "gates", title: "Gates" }, /* @__PURE__ */ createElement(Gates, { onOwnsEscChange: setGatesOwnsEsc, contentHeight }))] : [];
    $[13] = contentHeight;
    $[14] = t7;
  } else {
    t7 = $[14];
  }
  let t8;
  if ($[15] !== t4 || $[16] !== t5 || $[17] !== t7) {
    t8 = [t4, t5, t6, ...t7];
    $[15] = t4;
    $[16] = t5;
    $[17] = t7;
    $[18] = t8;
  } else {
    t8 = $[18];
  }
  const tabs = t8;
  const t9 = defaultTab !== "Config" && defaultTab !== "Gates";
  const t10 = tabsHidden || insideModal ? void 0 : contentHeight;
  let t11;
  if ($[19] !== selectedTab || $[20] !== t10 || $[21] !== t9 || $[22] !== tabs || $[23] !== tabsHidden) {
    t11 = /* @__PURE__ */ createElement(Pane, { color: "permission" }, /* @__PURE__ */ createElement(Tabs, { color: "permission", selectedTab, onTabChange: setSelectedTab, hidden: tabsHidden, initialHeaderFocused: t9, contentHeight: t10 }, tabs));
    $[19] = selectedTab;
    $[20] = t10;
    $[21] = t9;
    $[22] = tabs;
    $[23] = tabsHidden;
    $[24] = t11;
  } else {
    t11 = $[24];
  }
  return t11;
}
function _temp22() {
  return buildDiagnostics().catch(_temp6);
}
function _temp6() {
  return [];
}
var init_Settings = __esm({
  "src/components/Settings/Settings.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_react();
    init_useKeybinding();
    init_useExitOnCtrlCDWithKeybindings();
    init_useTerminalSize();
    init_modalContext();
    init_Pane();
    init_Tabs();
    init_Status();
    init_Config();
    init_Usage();
  }
});

export {
  Settings,
  init_Settings
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3MvU3RhdHVzLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9DaGFubmVsRG93bmdyYWRlRGlhbG9nLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9PdXRwdXRTdHlsZVBpY2tlci50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvTGFuZ3VhZ2VQaWNrZXIudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL1NldHRpbmdzL0NvbmZpZy50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3MvVXNhZ2UudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL1NldHRpbmdzL1NldHRpbmdzLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IGZpZ3VyZXMgZnJvbSAnZmlndXJlcydcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU3VzcGVuc2UsIHVzZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbklkIH0gZnJvbSAnLi4vLi4vYm9vdHN0cmFwL3N0YXRlLmpzJ1xuaW1wb3J0IHR5cGUgeyBMb2NhbEpTWENvbW1hbmRDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29tbWFuZHMuanMnXG5pbXBvcnQgeyB1c2VJc0luc2lkZU1vZGFsIH0gZnJvbSAnLi4vLi4vY29udGV4dC9tb2RhbENvbnRleHQuanMnXG5pbXBvcnQgeyBCb3gsIFRleHQsIHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdHlwZSBBcHBTdGF0ZSwgdXNlQXBwU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9BcHBTdGF0ZS5qcydcbmltcG9ydCB7IGdldEN3ZCB9IGZyb20gJy4uLy4uL3V0aWxzL2N3ZC5qcydcbmltcG9ydCB7IGdldEN1cnJlbnRTZXNzaW9uVGl0bGUgfSBmcm9tICcuLi8uLi91dGlscy9zZXNzaW9uU3RvcmFnZS5qcydcbmltcG9ydCB7XG4gIGJ1aWxkQWNjb3VudFByb3BlcnRpZXMsXG4gIGJ1aWxkQVBJUHJvdmlkZXJQcm9wZXJ0aWVzLFxuICBidWlsZElERVByb3BlcnRpZXMsXG4gIGJ1aWxkSW5zdGFsbGF0aW9uRGlhZ25vc3RpY3MsXG4gIGJ1aWxkSW5zdGFsbGF0aW9uSGVhbHRoRGlhZ25vc3RpY3MsXG4gIGJ1aWxkTWNwUHJvcGVydGllcyxcbiAgYnVpbGRNZW1vcnlEaWFnbm9zdGljcyxcbiAgYnVpbGRTYW5kYm94UHJvcGVydGllcyxcbiAgYnVpbGRTZXR0aW5nU291cmNlc1Byb3BlcnRpZXMsXG4gIHR5cGUgRGlhZ25vc3RpYyxcbiAgZ2V0TW9kZWxEaXNwbGF5TGFiZWwsXG4gIHR5cGUgUHJvcGVydHksXG59IGZyb20gJy4uLy4uL3V0aWxzL3N0YXR1cy5qcydcbmltcG9ydCB0eXBlIHsgVGhlbWVOYW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMvdGhlbWUuanMnXG5pbXBvcnQgeyBDb25maWd1cmFibGVTaG9ydGN1dEhpbnQgfSBmcm9tICcuLi9Db25maWd1cmFibGVTaG9ydGN1dEhpbnQuanMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNvbnRleHQ6IExvY2FsSlNYQ29tbWFuZENvbnRleHRcbiAgZGlhZ25vc3RpY3NQcm9taXNlOiBQcm9taXNlPERpYWdub3N0aWNbXT5cbn1cblxuZnVuY3Rpb24gYnVpbGRQcmltYXJ5U2VjdGlvbigpOiBQcm9wZXJ0eVtdIHtcbiAgY29uc3Qgc2Vzc2lvbklkID0gZ2V0U2Vzc2lvbklkKClcbiAgY29uc3QgY3VzdG9tVGl0bGUgPSBnZXRDdXJyZW50U2Vzc2lvblRpdGxlKHNlc3Npb25JZClcbiAgY29uc3QgbmFtZVZhbHVlID0gY3VzdG9tVGl0bGUgPz8gPFRleHQgZGltQ29sb3I+L3JlbmFtZSB0byBhZGQgYSBuYW1lPC9UZXh0PlxuXG4gIHJldHVybiBbXG4gICAgeyBsYWJlbDogJ1ZlcnNpb24nLCB2YWx1ZTogTUFDUk8uVkVSU0lPTiB9LFxuICAgIHsgbGFiZWw6ICdTZXNzaW9uIG5hbWUnLCB2YWx1ZTogbmFtZVZhbHVlIH0sXG4gICAgeyBsYWJlbDogJ1Nlc3Npb24gSUQnLCB2YWx1ZTogc2Vzc2lvbklkIH0sXG4gICAgeyBsYWJlbDogJ2N3ZCcsIHZhbHVlOiBnZXRDd2QoKSB9LFxuICAgIC4uLmJ1aWxkQWNjb3VudFByb3BlcnRpZXMoKSxcbiAgICAuLi5idWlsZEFQSVByb3ZpZGVyUHJvcGVydGllcygpLFxuICBdXG59XG5cbmZ1bmN0aW9uIGJ1aWxkU2Vjb25kYXJ5U2VjdGlvbih7XG4gIG1haW5Mb29wTW9kZWwsXG4gIG1jcCxcbiAgdGhlbWUsXG4gIGNvbnRleHQsXG59OiB7XG4gIG1haW5Mb29wTW9kZWw6IEFwcFN0YXRlWydtYWluTG9vcE1vZGVsJ11cbiAgbWNwOiBBcHBTdGF0ZVsnbWNwJ11cbiAgdGhlbWU6IFRoZW1lTmFtZVxuICBjb250ZXh0OiBMb2NhbEpTWENvbW1hbmRDb250ZXh0XG59KTogUHJvcGVydHlbXSB7XG4gIGNvbnN0IG1vZGVsTGFiZWwgPSBnZXRNb2RlbERpc3BsYXlMYWJlbChtYWluTG9vcE1vZGVsKVxuXG4gIHJldHVybiBbXG4gICAgeyBsYWJlbDogJ01vZGVsJywgdmFsdWU6IG1vZGVsTGFiZWwgfSxcbiAgICAuLi5idWlsZElERVByb3BlcnRpZXMoXG4gICAgICBtY3AuY2xpZW50cyxcbiAgICAgIGNvbnRleHQub3B0aW9ucy5pZGVJbnN0YWxsYXRpb25TdGF0dXMsXG4gICAgICB0aGVtZSxcbiAgICApLFxuICAgIC4uLmJ1aWxkTWNwUHJvcGVydGllcyhtY3AuY2xpZW50cywgdGhlbWUpLFxuICAgIC4uLmJ1aWxkU2FuZGJveFByb3BlcnRpZXMoKSxcbiAgICAuLi5idWlsZFNldHRpbmdTb3VyY2VzUHJvcGVydGllcygpLFxuICBdXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWlsZERpYWdub3N0aWNzKCk6IFByb21pc2U8RGlhZ25vc3RpY1tdPiB7XG4gIHJldHVybiBbXG4gICAgLi4uKGF3YWl0IGJ1aWxkSW5zdGFsbGF0aW9uRGlhZ25vc3RpY3MoKSksXG4gICAgLi4uKGF3YWl0IGJ1aWxkSW5zdGFsbGF0aW9uSGVhbHRoRGlhZ25vc3RpY3MoKSksXG4gICAgLi4uKGF3YWl0IGJ1aWxkTWVtb3J5RGlhZ25vc3RpY3MoKSksXG4gIF1cbn1cblxuZnVuY3Rpb24gUHJvcGVydHlWYWx1ZSh7XG4gIHZhbHVlLFxufToge1xuICB2YWx1ZTogUHJvcGVydHlbJ3ZhbHVlJ11cbn0pOiBSZWFjdC5SZWFjdE5vZGUge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBmbGV4V3JhcD1cIndyYXBcIiBjb2x1bW5HYXA9ezF9IGZsZXhTaHJpbms9ezk5fT5cbiAgICAgICAge3ZhbHVlLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGV4dCBrZXk9e2l9PlxuICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAge2kgPCB2YWx1ZS5sZW5ndGggLSAxID8gJywnIDogJyd9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIDxUZXh0Pnt2YWx1ZX08L1RleHQ+XG4gIH1cblxuICByZXR1cm4gdmFsdWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFN0YXR1cyh7XG4gIGNvbnRleHQsXG4gIGRpYWdub3N0aWNzUHJvbWlzZSxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgbWFpbkxvb3BNb2RlbCA9IHVzZUFwcFN0YXRlKHMgPT4gcy5tYWluTG9vcE1vZGVsKVxuICBjb25zdCBtY3AgPSB1c2VBcHBTdGF0ZShzID0+IHMubWNwKVxuICBjb25zdCBbdGhlbWVdID0gdXNlVGhlbWUoKVxuXG4gIC8vIFNlY3Rpb25zIGFyZSBzeW5jaHJvbm91cyDigJQgY29tcHV0ZSBpbiByZW5kZXIgc28gdGhleSdyZSBuZXZlciBlbXB0eS5cbiAgLy8gZGlhZ25vc3RpY3NQcm9taXNlIGlzIGNyZWF0ZWQgb25jZSBpbiBTZXR0aW5ncy50c3ggc28gaXQgcmVzb2x2ZXMgb25jZVxuICAvLyBwZXIgcGFuZSBpbnZvY2F0aW9uIGluc3RlYWQgb2YgcmUtZmV0Y2hpbmcgb24gZXZlcnkgdGFiIHN3aXRjaCAoVGFiXG4gIC8vIHVubW91bnRzIGNoaWxkcmVuIHdoZW4gbm90IHNlbGVjdGVkLCB3aGljaCB3YXMgY2F1c2luZyB0aGUgZmxhc2gpLlxuICBjb25zdCBzZWN0aW9ucyA9IFJlYWN0LnVzZU1lbW8oXG4gICAgKCkgPT4gW1xuICAgICAgYnVpbGRQcmltYXJ5U2VjdGlvbigpLFxuICAgICAgYnVpbGRTZWNvbmRhcnlTZWN0aW9uKHsgbWFpbkxvb3BNb2RlbCwgbWNwLCB0aGVtZSwgY29udGV4dCB9KSxcbiAgICBdLFxuICAgIFttYWluTG9vcE1vZGVsLCBtY3AsIHRoZW1lLCBjb250ZXh0XSxcbiAgKVxuXG4gIC8vIGZsZXhHcm93IHNvIHRoZSBcIkVzYyB0byBjYW5jZWxcIiBmb290ZXIgcGlucyB0byB0aGUgYm90dG9tIG9mIHRoZVxuICAvLyBNb2RhbCdzIGlubmVyIFNjcm9sbEJveCB3aGVuIGNvbnRlbnQgaXMgc2hvcnQuIFRoZSBTY3JvbGxCb3ggY29udGVudFxuICAvLyB3cmFwcGVyIGhhcyBmbGV4R3JvdzoxIChmaWxscyBhdCBsZWFzdCB0aGUgdmlld3BvcnQpLCBzbyB0aGlzIHN0cmV0Y2hlc1xuICAvLyB0byBtYXRjaC4gV2l0aG91dCBpdCwgc2hvcnQgU3RhdHVzIGNvbnRlbnQgZmxvYXRzIGF0IHRoZSB0b3AgYW5kIHRoZVxuICAvLyBmb290ZXIgc2l0cyBtaWQtbW9kYWwgd2l0aCAyLTMgdHJhaWxpbmcgYmxhbmsgcm93cyBiZWxvdy4gT3V0c2lkZSBhXG4gIC8vIE1vZGFsIChub24tZnVsbHNjcmVlbiksIGxlYXZlIGxheW91dCBhbG9uZSDigJQgbm8gU2Nyb2xsQm94IHRvIGZpbGwuXG4gIGNvbnN0IGdyb3cgPSB1c2VJc0luc2lkZU1vZGFsKCkgPyAxIDogdW5kZWZpbmVkXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBmbGV4R3Jvdz17Z3Jvd30+XG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9ezF9IGZsZXhHcm93PXtncm93fT5cbiAgICAgICAge3NlY3Rpb25zLm1hcChcbiAgICAgICAgICAocHJvcGVydGllcywgaSkgPT5cbiAgICAgICAgICAgIHByb3BlcnRpZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgIDxCb3gga2V5PXtpfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAge3Byb3BlcnRpZXMubWFwKCh7IGxhYmVsLCB2YWx1ZSB9LCBqKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8Qm94IGtleT17an0gZmxleERpcmVjdGlvbj1cInJvd1wiIGdhcD17MX0gZmxleFNocmluaz17MH0+XG4gICAgICAgICAgICAgICAgICAgIHtsYWJlbCAhPT0gdW5kZWZpbmVkICYmIDxUZXh0IGJvbGQ+e2xhYmVsfTo8L1RleHQ+fVxuICAgICAgICAgICAgICAgICAgICA8UHJvcGVydHlWYWx1ZSB2YWx1ZT17dmFsdWV9IC8+XG4gICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApLFxuICAgICAgICApfVxuXG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17bnVsbH0+XG4gICAgICAgICAgPERpYWdub3N0aWNzIHByb21pc2U9e2RpYWdub3N0aWNzUHJvbWlzZX0gLz5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgIDwvQm94PlxuICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICBhY3Rpb249XCJjb25maXJtOm5vXCJcbiAgICAgICAgICBjb250ZXh0PVwiU2V0dGluZ3NcIlxuICAgICAgICAgIGZhbGxiYWNrPVwiRXNjXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cImNhbmNlbFwiXG4gICAgICAgIC8+XG4gICAgICA8L1RleHQ+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZnVuY3Rpb24gRGlhZ25vc3RpY3Moe1xuICBwcm9taXNlLFxufToge1xuICBwcm9taXNlOiBQcm9taXNlPERpYWdub3N0aWNbXT5cbn0pOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBkaWFnbm9zdGljcyA9IHVzZShwcm9taXNlKVxuICBpZiAoZGlhZ25vc3RpY3MubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbFxuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIHBhZGRpbmdCb3R0b209ezF9PlxuICAgICAgPFRleHQgYm9sZD5TeXN0ZW0gRGlhZ25vc3RpY3M8L1RleHQ+XG4gICAgICB7ZGlhZ25vc3RpY3MubWFwKChkaWFnbm9zdGljLCBpKSA9PiAoXG4gICAgICAgIDxCb3gga2V5PXtpfSBmbGV4RGlyZWN0aW9uPVwicm93XCIgZ2FwPXsxfSBwYWRkaW5nWD17MX0+XG4gICAgICAgICAgPFRleHQgY29sb3I9XCJlcnJvclwiPntmaWd1cmVzLndhcm5pbmd9PC9UZXh0PlxuICAgICAgICAgIHt0eXBlb2YgZGlhZ25vc3RpYyA9PT0gJ3N0cmluZycgPyAoXG4gICAgICAgICAgICA8VGV4dCB3cmFwPVwid3JhcFwiPntkaWFnbm9zdGljfTwvVGV4dD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgZGlhZ25vc3RpY1xuICAgICAgICAgICl9XG4gICAgICAgIDwvQm94PlxuICAgICAgKSl9XG4gICAgPC9Cb3g+XG4gIClcbn1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vaW5rLmpzJ1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnLi9DdXN0b21TZWxlY3QvaW5kZXguanMnXG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICcuL2Rlc2lnbi1zeXN0ZW0vRGlhbG9nLmpzJ1xuXG5leHBvcnQgdHlwZSBDaGFubmVsRG93bmdyYWRlQ2hvaWNlID0gJ2Rvd25ncmFkZScgfCAnc3RheScgfCAnY2FuY2VsJ1xuXG50eXBlIFByb3BzID0ge1xuICBjdXJyZW50VmVyc2lvbjogc3RyaW5nXG4gIG9uQ2hvaWNlOiAoY2hvaWNlOiBDaGFubmVsRG93bmdyYWRlQ2hvaWNlKSA9PiB2b2lkXG59XG5cbi8qKlxuICogRGlhbG9nIHNob3duIHdoZW4gc3dpdGNoaW5nIGZyb20gbGF0ZXN0IHRvIHN0YWJsZSBjaGFubmVsLlxuICogQWxsb3dzIHVzZXIgdG8gY2hvb3NlIHdoZXRoZXIgdG8gZG93bmdyYWRlIG9yIHN0YXkgb24gY3VycmVudCB2ZXJzaW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gQ2hhbm5lbERvd25ncmFkZURpYWxvZyh7XG4gIGN1cnJlbnRWZXJzaW9uLFxuICBvbkNob2ljZSxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0KHZhbHVlOiBDaGFubmVsRG93bmdyYWRlQ2hvaWNlKTogdm9pZCB7XG4gICAgb25DaG9pY2UodmFsdWUpXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDYW5jZWwoKTogdm9pZCB7XG4gICAgb25DaG9pY2UoJ2NhbmNlbCcpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2dcbiAgICAgIHRpdGxlPVwiU3dpdGNoIHRvIFN0YWJsZSBDaGFubmVsXCJcbiAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9XG4gICAgICBjb2xvcj1cInBlcm1pc3Npb25cIlxuICAgICAgaGlkZUJvcmRlclxuICAgICAgaGlkZUlucHV0R3VpZGVcbiAgICA+XG4gICAgICA8VGV4dD5cbiAgICAgICAgVGhlIHN0YWJsZSBjaGFubmVsIG1heSBoYXZlIGFuIG9sZGVyIHZlcnNpb24gdGhhbiB3aGF0IHlvdSZhcG9zO3JlXG4gICAgICAgIGN1cnJlbnRseSBydW5uaW5nICh7Y3VycmVudFZlcnNpb259KS5cbiAgICAgIDwvVGV4dD5cbiAgICAgIDxUZXh0IGRpbUNvbG9yPkhvdyB3b3VsZCB5b3UgbGlrZSB0byBoYW5kbGUgdGhpcz88L1RleHQ+XG4gICAgICA8U2VsZWN0XG4gICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0FsbG93IHBvc3NpYmxlIGRvd25ncmFkZSB0byBzdGFibGUgdmVyc2lvbicsXG4gICAgICAgICAgICB2YWx1ZTogJ2Rvd25ncmFkZScgYXMgQ2hhbm5lbERvd25ncmFkZUNob2ljZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBgU3RheSBvbiBjdXJyZW50IHZlcnNpb24gKCR7Y3VycmVudFZlcnNpb259KSB1bnRpbCBzdGFibGUgY2F0Y2hlcyB1cGAsXG4gICAgICAgICAgICB2YWx1ZTogJ3N0YXknIGFzIENoYW5uZWxEb3duZ3JhZGVDaG9pY2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdH1cbiAgICAgIC8+XG4gICAgPC9EaWFsb2c+XG4gIClcbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBnZXRBbGxPdXRwdXRTdHlsZXMsXG4gIE9VVFBVVF9TVFlMRV9DT05GSUcsXG4gIHR5cGUgT3V0cHV0U3R5bGVDb25maWcsXG59IGZyb20gJy4uL2NvbnN0YW50cy9vdXRwdXRTdHlsZXMuanMnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi9pbmsuanMnXG5pbXBvcnQgdHlwZSB7IE91dHB1dFN0eWxlIH0gZnJvbSAnLi4vdXRpbHMvY29uZmlnLmpzJ1xuaW1wb3J0IHsgZ2V0Q3dkIH0gZnJvbSAnLi4vdXRpbHMvY3dkLmpzJ1xuaW1wb3J0IHR5cGUgeyBPcHRpb25XaXRoRGVzY3JpcHRpb24gfSBmcm9tICcuL0N1c3RvbVNlbGVjdC9zZWxlY3QuanMnXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICcuL0N1c3RvbVNlbGVjdC9zZWxlY3QuanMnXG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICcuL2Rlc2lnbi1zeXN0ZW0vRGlhbG9nLmpzJ1xuXG5jb25zdCBERUZBVUxUX09VVFBVVF9TVFlMRV9MQUJFTCA9ICdEZWZhdWx0J1xuY29uc3QgREVGQVVMVF9PVVRQVVRfU1RZTEVfREVTQ1JJUFRJT04gPVxuICAnQ2xhdWRlIGNvbXBsZXRlcyBjb2RpbmcgdGFza3MgZWZmaWNpZW50bHkgYW5kIHByb3ZpZGVzIGNvbmNpc2UgcmVzcG9uc2VzJ1xuXG5mdW5jdGlvbiBtYXBDb25maWdzVG9PcHRpb25zKHN0eWxlczoge1xuICBbc3R5bGVOYW1lOiBzdHJpbmddOiBPdXRwdXRTdHlsZUNvbmZpZyB8IG51bGxcbn0pOiBPcHRpb25XaXRoRGVzY3JpcHRpb25bXSB7XG4gIHJldHVybiBPYmplY3QuZW50cmllcyhzdHlsZXMpLm1hcCgoW3N0eWxlLCBjb25maWddKSA9PiAoe1xuICAgIGxhYmVsOiBjb25maWc/Lm5hbWUgPz8gREVGQVVMVF9PVVRQVVRfU1RZTEVfTEFCRUwsXG4gICAgdmFsdWU6IHN0eWxlLFxuICAgIGRlc2NyaXB0aW9uOiBjb25maWc/LmRlc2NyaXB0aW9uID8/IERFRkFVTFRfT1VUUFVUX1NUWUxFX0RFU0NSSVBUSU9OLFxuICB9KSlcbn1cblxuZXhwb3J0IHR5cGUgT3V0cHV0U3R5bGVQaWNrZXJQcm9wcyA9IHtcbiAgaW5pdGlhbFN0eWxlOiBPdXRwdXRTdHlsZVxuICBvbkNvbXBsZXRlOiAoc3R5bGU6IE91dHB1dFN0eWxlKSA9PiB2b2lkXG4gIG9uQ2FuY2VsOiAoKSA9PiB2b2lkXG4gIGlzU3RhbmRhbG9uZUNvbW1hbmQ/OiBib29sZWFuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBPdXRwdXRTdHlsZVBpY2tlcih7XG4gIGluaXRpYWxTdHlsZSxcbiAgb25Db21wbGV0ZSxcbiAgb25DYW5jZWwsXG4gIGlzU3RhbmRhbG9uZUNvbW1hbmQsXG59OiBPdXRwdXRTdHlsZVBpY2tlclByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgW3N0eWxlT3B0aW9ucywgc2V0U3R5bGVPcHRpb25zXSA9IHVzZVN0YXRlPE9wdGlvbldpdGhEZXNjcmlwdGlvbltdPihbXSlcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBMb2FkIGFsbCBvdXRwdXQgc3R5bGVzIGluY2x1ZGluZyBjdXN0b20gb25lc1xuICAgIGdldEFsbE91dHB1dFN0eWxlcyhnZXRDd2QoKSlcbiAgICAgIC50aGVuKGFsbFN0eWxlcyA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBtYXBDb25maWdzVG9PcHRpb25zKGFsbFN0eWxlcylcbiAgICAgICAgc2V0U3R5bGVPcHRpb25zKG9wdGlvbnMpXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAvLyBPbiBlcnJvciwgZmFsbCBiYWNrIHRvIGJ1aWx0LWluIHN0eWxlcyBvbmx5XG4gICAgICAgIGNvbnN0IGJ1aWx0SW5PcHRpb25zID0gbWFwQ29uZmlnc1RvT3B0aW9ucyhPVVRQVVRfU1RZTEVfQ09ORklHKVxuICAgICAgICBzZXRTdHlsZU9wdGlvbnMoYnVpbHRJbk9wdGlvbnMpXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICAgIH0pXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGhhbmRsZVN0eWxlU2VsZWN0ID0gdXNlQ2FsbGJhY2soXG4gICAgKHN0eWxlOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IG91dHB1dFN0eWxlID0gc3R5bGUgYXMgT3V0cHV0U3R5bGVcbiAgICAgIG9uQ29tcGxldGUob3V0cHV0U3R5bGUpXG4gICAgfSxcbiAgICBbb25Db21wbGV0ZV0sXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2dcbiAgICAgIHRpdGxlPVwiUHJlZmVycmVkIG91dHB1dCBzdHlsZVwiXG4gICAgICBvbkNhbmNlbD17b25DYW5jZWx9XG4gICAgICBoaWRlSW5wdXRHdWlkZT17IWlzU3RhbmRhbG9uZUNvbW1hbmR9XG4gICAgICBoaWRlQm9yZGVyPXshaXNTdGFuZGFsb25lQ29tbWFuZH1cbiAgICA+XG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9ezF9PlxuICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICBUaGlzIGNoYW5nZXMgaG93IENsYXVkZSBDb2RlIGNvbW11bmljYXRlcyB3aXRoIHlvdVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+TG9hZGluZyBvdXRwdXQgc3R5bGVz4oCmPC9UZXh0PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIG9wdGlvbnM9e3N0eWxlT3B0aW9uc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTdHlsZVNlbGVjdH1cbiAgICAgICAgICAgIHZpc2libGVPcHRpb25Db3VudD17MTB9XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2luaXRpYWxTdHlsZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgPC9EaWFsb2c+XG4gIClcbn1cbiIsICJpbXBvcnQgZmlndXJlcyBmcm9tICdmaWd1cmVzJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi9pbmsuanMnXG5pbXBvcnQgeyB1c2VLZXliaW5kaW5nIH0gZnJvbSAnLi4va2V5YmluZGluZ3MvdXNlS2V5YmluZGluZy5qcydcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSAnLi9UZXh0SW5wdXQuanMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGluaXRpYWxMYW5ndWFnZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIG9uQ29tcGxldGU6IChsYW5ndWFnZTogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB2b2lkXG4gIG9uQ2FuY2VsOiAoKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMYW5ndWFnZVBpY2tlcih7XG4gIGluaXRpYWxMYW5ndWFnZSxcbiAgb25Db21wbGV0ZSxcbiAgb25DYW5jZWwsXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IFtsYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gdXNlU3RhdGUoaW5pdGlhbExhbmd1YWdlKVxuICBjb25zdCBbY3Vyc29yT2Zmc2V0LCBzZXRDdXJzb3JPZmZzZXRdID0gdXNlU3RhdGUoXG4gICAgKGluaXRpYWxMYW5ndWFnZSA/PyAnJykubGVuZ3RoLFxuICApXG5cbiAgLy8gVXNlIGNvbmZpZ3VyYWJsZSBrZXliaW5kaW5nIGZvciBFU0MgdG8gY2FuY2VsXG4gIC8vIFVzZSBTZXR0aW5ncyBjb250ZXh0IHNvICduJyBrZXkgZG9lc24ndCB0cmlnZ2VyIGNhbmNlbCAoYWxsb3dzIHR5cGluZyAnbicgaW4gaW5wdXQpXG4gIHVzZUtleWJpbmRpbmcoJ2NvbmZpcm06bm8nLCBvbkNhbmNlbCwgeyBjb250ZXh0OiAnU2V0dGluZ3MnIH0pXG5cbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCk6IHZvaWQge1xuICAgIGNvbnN0IHRyaW1tZWQgPSBsYW5ndWFnZT8udHJpbSgpXG4gICAgb25Db21wbGV0ZSh0cmltbWVkIHx8IHVuZGVmaW5lZClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXsxfT5cbiAgICAgIDxUZXh0PkVudGVyIHlvdXIgcHJlZmVycmVkIHJlc3BvbnNlIGFuZCB2b2ljZSBsYW5ndWFnZTo8L1RleHQ+XG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJyb3dcIiBnYXA9ezF9PlxuICAgICAgICA8VGV4dD57ZmlndXJlcy5wb2ludGVyfTwvVGV4dD5cbiAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgIHZhbHVlPXtsYW5ndWFnZSA/PyAnJ31cbiAgICAgICAgICBvbkNoYW5nZT17c2V0TGFuZ3VhZ2V9XG4gICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICBmb2N1cz17dHJ1ZX1cbiAgICAgICAgICBzaG93Q3Vyc29yPXt0cnVlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtgZS5nLiwgSmFwYW5lc2UsIOaXpeacrOiqniwgRXNwYcOxb2wke2ZpZ3VyZXMuZWxsaXBzaXN9YH1cbiAgICAgICAgICBjb2x1bW5zPXs2MH1cbiAgICAgICAgICBjdXJzb3JPZmZzZXQ9e2N1cnNvck9mZnNldH1cbiAgICAgICAgICBvbkNoYW5nZUN1cnNvck9mZnNldD17c2V0Q3Vyc29yT2Zmc2V0fVxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgICA8VGV4dCBkaW1Db2xvcj5MZWF2ZSBlbXB0eSBmb3IgZGVmYXVsdCAoRW5nbGlzaCk8L1RleHQ+XG4gICAgPC9Cb3g+XG4gIClcbn1cbiIsICIvLyBiaW9tZS1pZ25vcmUtYWxsIGFzc2lzdC9zb3VyY2Uvb3JnYW5pemVJbXBvcnRzOiBBTlQtT05MWSBpbXBvcnQgbWFya2VycyBtdXN0IG5vdCBiZSByZW9yZGVyZWRcbmltcG9ydCB7IGZlYXR1cmUgfSBmcm9tICdidW46YnVuZGxlJ1xuaW1wb3J0IHtcbiAgQm94LFxuICBUZXh0LFxuICB1c2VUaGVtZSxcbiAgdXNlVGhlbWVTZXR0aW5nLFxuICB1c2VUZXJtaW5hbEZvY3VzLFxufSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQgdHlwZSB7IEtleWJvYXJkRXZlbnQgfSBmcm9tICcuLi8uLi9pbmsvZXZlbnRzL2tleWJvYXJkLWV2ZW50LmpzJ1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHVzZUtleWJpbmRpbmcsXG4gIHVzZUtleWJpbmRpbmdzLFxufSBmcm9tICcuLi8uLi9rZXliaW5kaW5ncy91c2VLZXliaW5kaW5nLmpzJ1xuaW1wb3J0IGZpZ3VyZXMgZnJvbSAnZmlndXJlcydcbmltcG9ydCB7XG4gIHR5cGUgR2xvYmFsQ29uZmlnLFxuICBzYXZlR2xvYmFsQ29uZmlnLFxuICBnZXRDdXJyZW50UHJvamVjdENvbmZpZyxcbiAgdHlwZSBPdXRwdXRTdHlsZSxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvY29uZmlnLmpzJ1xuaW1wb3J0IHsgbm9ybWFsaXplQXBpS2V5Rm9yQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXV0aFBvcnRhYmxlLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0R2xvYmFsQ29uZmlnLFxuICBnZXRBdXRvVXBkYXRlckRpc2FibGVkUmVhc29uLFxuICBmb3JtYXRBdXRvVXBkYXRlckRpc2FibGVkUmVhc29uLFxuICBnZXRSZW1vdGVDb250cm9sQXRTdGFydHVwLFxufSBmcm9tICcuLi8uLi91dGlscy9jb25maWcuanMnXG5pbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnXG5pbXBvcnQge1xuICBwZXJtaXNzaW9uTW9kZVRpdGxlLFxuICBwZXJtaXNzaW9uTW9kZUZyb21TdHJpbmcsXG4gIHRvRXh0ZXJuYWxQZXJtaXNzaW9uTW9kZSxcbiAgaXNFeHRlcm5hbFBlcm1pc3Npb25Nb2RlLFxuICBFWFRFUk5BTF9QRVJNSVNTSU9OX01PREVTLFxuICBQRVJNSVNTSU9OX01PREVTLFxuICB0eXBlIEV4dGVybmFsUGVybWlzc2lvbk1vZGUsXG4gIHR5cGUgUGVybWlzc2lvbk1vZGUsXG59IGZyb20gJy4uLy4uL3V0aWxzL3Blcm1pc3Npb25zL1Blcm1pc3Npb25Nb2RlLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0QXV0b01vZGVFbmFibGVkU3RhdGUsXG4gIGhhc0F1dG9Nb2RlT3B0SW5BbnlTb3VyY2UsXG4gIHRyYW5zaXRpb25QbGFuQXV0b01vZGUsXG59IGZyb20gJy4uLy4uL3V0aWxzL3Blcm1pc3Npb25zL3Blcm1pc3Npb25TZXR1cC5qcydcbmltcG9ydCB7IGxvZ0Vycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nLmpzJ1xuaW1wb3J0IHtcbiAgbG9nRXZlbnQsXG4gIHR5cGUgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbn0gZnJvbSAnc3JjL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB7IGlzQnJpZGdlRW5hYmxlZCB9IGZyb20gJy4uLy4uL2JyaWRnZS9icmlkZ2VFbmFibGVkLmpzJ1xuaW1wb3J0IHsgVGhlbWVQaWNrZXIgfSBmcm9tICcuLi9UaGVtZVBpY2tlci5qcydcbmltcG9ydCB7XG4gIHVzZUFwcFN0YXRlLFxuICB1c2VTZXRBcHBTdGF0ZSxcbiAgdXNlQXBwU3RhdGVTdG9yZSxcbn0gZnJvbSAnLi4vLi4vc3RhdGUvQXBwU3RhdGUuanMnXG5pbXBvcnQgeyBNb2RlbFBpY2tlciB9IGZyb20gJy4uL01vZGVsUGlja2VyLmpzJ1xuaW1wb3J0IHtcbiAgbW9kZWxEaXNwbGF5U3RyaW5nLFxuICBpc09wdXMxbU1lcmdlRW5hYmxlZCxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvbW9kZWwvbW9kZWwuanMnXG5pbXBvcnQgeyBpc0JpbGxlZEFzRXh0cmFVc2FnZSB9IGZyb20gJy4uLy4uL3V0aWxzL2V4dHJhVXNhZ2UuanMnXG5pbXBvcnQgeyBDbGF1ZGVNZEV4dGVybmFsSW5jbHVkZXNEaWFsb2cgfSBmcm9tICcuLi9DbGF1ZGVNZEV4dGVybmFsSW5jbHVkZXNEaWFsb2cuanMnXG5pbXBvcnQge1xuICBDaGFubmVsRG93bmdyYWRlRGlhbG9nLFxuICB0eXBlIENoYW5uZWxEb3duZ3JhZGVDaG9pY2UsXG59IGZyb20gJy4uL0NoYW5uZWxEb3duZ3JhZGVEaWFsb2cuanMnXG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICcuLi9kZXNpZ24tc3lzdGVtL0RpYWxvZy5qcydcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJy4uL0N1c3RvbVNlbGVjdC9pbmRleC5qcydcbmltcG9ydCB7IE91dHB1dFN0eWxlUGlja2VyIH0gZnJvbSAnLi4vT3V0cHV0U3R5bGVQaWNrZXIuanMnXG5pbXBvcnQgeyBMYW5ndWFnZVBpY2tlciB9IGZyb20gJy4uL0xhbmd1YWdlUGlja2VyLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0RXh0ZXJuYWxDbGF1ZGVNZEluY2x1ZGVzLFxuICBnZXRNZW1vcnlGaWxlcyxcbiAgaGFzRXh0ZXJuYWxDbGF1ZGVNZEluY2x1ZGVzLFxufSBmcm9tICdzcmMvdXRpbHMvY2xhdWRlbWQuanMnXG5pbXBvcnQgeyBLZXlib2FyZFNob3J0Y3V0SGludCB9IGZyb20gJy4uL2Rlc2lnbi1zeXN0ZW0vS2V5Ym9hcmRTaG9ydGN1dEhpbnQuanMnXG5pbXBvcnQgeyBDb25maWd1cmFibGVTaG9ydGN1dEhpbnQgfSBmcm9tICcuLi9Db25maWd1cmFibGVTaG9ydGN1dEhpbnQuanMnXG5pbXBvcnQgeyBCeWxpbmUgfSBmcm9tICcuLi9kZXNpZ24tc3lzdGVtL0J5bGluZS5qcydcbmltcG9ydCB7IHVzZVRhYkhlYWRlckZvY3VzIH0gZnJvbSAnLi4vZGVzaWduLXN5c3RlbS9UYWJzLmpzJ1xuaW1wb3J0IHsgdXNlSXNJbnNpZGVNb2RhbCB9IGZyb20gJy4uLy4uL2NvbnRleHQvbW9kYWxDb250ZXh0LmpzJ1xuaW1wb3J0IHsgU2VhcmNoQm94IH0gZnJvbSAnLi4vU2VhcmNoQm94LmpzJ1xuaW1wb3J0IHtcbiAgaXNTdXBwb3J0ZWRUZXJtaW5hbCxcbiAgaGFzQWNjZXNzVG9JREVFeHRlbnNpb25EaWZmRmVhdHVyZSxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvaWRlLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0SW5pdGlhbFNldHRpbmdzLFxuICBnZXRTZXR0aW5nc0ZvclNvdXJjZSxcbiAgdXBkYXRlU2V0dGluZ3NGb3JTb3VyY2UsXG59IGZyb20gJy4uLy4uL3V0aWxzL3NldHRpbmdzL3NldHRpbmdzLmpzJ1xuaW1wb3J0IHsgZ2V0VXNlck1zZ09wdEluLCBzZXRVc2VyTXNnT3B0SW4gfSBmcm9tICcuLi8uLi9ib290c3RyYXAvc3RhdGUuanMnXG5pbXBvcnQgeyBERUZBVUxUX09VVFBVVF9TVFlMRV9OQU1FIH0gZnJvbSAnc3JjL2NvbnN0YW50cy9vdXRwdXRTdHlsZXMuanMnXG5pbXBvcnQgeyBpc0VudlRydXRoeSwgaXNSdW5uaW5nT25Ib21lc3BhY2UgfSBmcm9tICdzcmMvdXRpbHMvZW52VXRpbHMuanMnXG5pbXBvcnQgdHlwZSB7XG4gIExvY2FsSlNYQ29tbWFuZENvbnRleHQsXG4gIENvbW1hbmRSZXN1bHREaXNwbGF5LFxufSBmcm9tICcuLi8uLi9jb21tYW5kcy5qcydcbmltcG9ydCB7IGdldEZlYXR1cmVWYWx1ZV9DQUNIRURfTUFZX0JFX1NUQUxFIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5hbHl0aWNzL2dyb3d0aGJvb2suanMnXG5pbXBvcnQgeyBpc0FnZW50U3dhcm1zRW5hYmxlZCB9IGZyb20gJy4uLy4uL3V0aWxzL2FnZW50U3dhcm1zRW5hYmxlZC5qcydcbmltcG9ydCB7XG4gIGdldENsaVRlYW1tYXRlTW9kZU92ZXJyaWRlLFxuICBjbGVhckNsaVRlYW1tYXRlTW9kZU92ZXJyaWRlLFxufSBmcm9tICcuLi8uLi91dGlscy9zd2FybS9iYWNrZW5kcy90ZWFtbWF0ZU1vZGVTbmFwc2hvdC5qcydcbmltcG9ydCB7IGdldEhhcmRjb2RlZFRlYW1tYXRlTW9kZWxGYWxsYmFjayB9IGZyb20gJy4uLy4uL3V0aWxzL3N3YXJtL3RlYW1tYXRlTW9kZWwuanMnXG5pbXBvcnQgeyB1c2VTZWFyY2hJbnB1dCB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVNlYXJjaElucHV0LmpzJ1xuaW1wb3J0IHsgdXNlVGVybWluYWxTaXplIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlVGVybWluYWxTaXplLmpzJ1xuaW1wb3J0IHtcbiAgY2xlYXJGYXN0TW9kZUNvb2xkb3duLFxuICBGQVNUX01PREVfTU9ERUxfRElTUExBWSxcbiAgaXNGYXN0TW9kZUF2YWlsYWJsZSxcbiAgaXNGYXN0TW9kZUVuYWJsZWQsXG4gIGdldEZhc3RNb2RlTW9kZWwsXG4gIGlzRmFzdE1vZGVTdXBwb3J0ZWRCeU1vZGVsLFxufSBmcm9tICcuLi8uLi91dGlscy9mYXN0TW9kZS5qcydcbmltcG9ydCB7IGlzRnVsbHNjcmVlbkVudkVuYWJsZWQgfSBmcm9tICcuLi8uLi91dGlscy9mdWxsc2NyZWVuLmpzJ1xuXG50eXBlIFByb3BzID0ge1xuICBvbkNsb3NlOiAoXG4gICAgcmVzdWx0Pzogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7IGRpc3BsYXk/OiBDb21tYW5kUmVzdWx0RGlzcGxheSB9LFxuICApID0+IHZvaWRcbiAgY29udGV4dDogTG9jYWxKU1hDb21tYW5kQ29udGV4dFxuICBzZXRUYWJzSGlkZGVuOiAoaGlkZGVuOiBib29sZWFuKSA9PiB2b2lkXG4gIG9uSXNTZWFyY2hNb2RlQ2hhbmdlPzogKGluU2VhcmNoTW9kZTogYm9vbGVhbikgPT4gdm9pZFxuICBjb250ZW50SGVpZ2h0PzogbnVtYmVyXG59XG5cbnR5cGUgU2V0dGluZ0Jhc2UgPVxuICB8IHtcbiAgICAgIGlkOiBzdHJpbmdcbiAgICAgIGxhYmVsOiBzdHJpbmdcbiAgICB9XG4gIHwge1xuICAgICAgaWQ6IHN0cmluZ1xuICAgICAgbGFiZWw6IFJlYWN0LlJlYWN0Tm9kZVxuICAgICAgc2VhcmNoVGV4dDogc3RyaW5nXG4gICAgfVxuXG50eXBlIFNldHRpbmcgPVxuICB8IChTZXR0aW5nQmFzZSAmIHtcbiAgICAgIHZhbHVlOiBib29sZWFuXG4gICAgICBvbkNoYW5nZSh2YWx1ZTogYm9vbGVhbik6IHZvaWRcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgIH0pXG4gIHwgKFNldHRpbmdCYXNlICYge1xuICAgICAgdmFsdWU6IHN0cmluZ1xuICAgICAgb3B0aW9uczogc3RyaW5nW11cbiAgICAgIG9uQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkXG4gICAgICB0eXBlOiAnZW51bSdcbiAgICB9KVxuICB8IChTZXR0aW5nQmFzZSAmIHtcbiAgICAgIC8vIEZvciBlbnVtcyB0aGF0IGFyZSBzZXQgYnkgYSBjdXN0b20gY29tcG9uZW50LCB3ZSBkb24ndCBuZWVkIHRvIHBhc3Mgb3B0aW9ucyxcbiAgICAgIC8vIGJ1dCB3ZSBzdGlsbCBuZWVkIGEgdmFsdWUgdG8gZGlzcGxheSBpbiB0aGUgdG9wLWxldmVsIGNvbmZpZyBtZW51XG4gICAgICB2YWx1ZTogc3RyaW5nXG4gICAgICBvbkNoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZFxuICAgICAgdHlwZTogJ21hbmFnZWRFbnVtJ1xuICAgIH0pXG5cbnR5cGUgU3ViTWVudSA9XG4gIHwgJ1RoZW1lJ1xuICB8ICdNb2RlbCdcbiAgfCAnVGVhbW1hdGVNb2RlbCdcbiAgfCAnRXh0ZXJuYWxJbmNsdWRlcydcbiAgfCAnT3V0cHV0U3R5bGUnXG4gIHwgJ0NoYW5uZWxEb3duZ3JhZGUnXG4gIHwgJ0xhbmd1YWdlJ1xuICB8ICdFbmFibGVBdXRvVXBkYXRlcydcbmV4cG9ydCBmdW5jdGlvbiBDb25maWcoe1xuICBvbkNsb3NlLFxuICBjb250ZXh0LFxuICBzZXRUYWJzSGlkZGVuLFxuICBvbklzU2VhcmNoTW9kZUNoYW5nZSxcbiAgY29udGVudEhlaWdodCxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgeyBoZWFkZXJGb2N1c2VkLCBmb2N1c0hlYWRlciB9ID0gdXNlVGFiSGVhZGVyRm9jdXMoKVxuICBjb25zdCBpbnNpZGVNb2RhbCA9IHVzZUlzSW5zaWRlTW9kYWwoKVxuICBjb25zdCBbLCBzZXRUaGVtZV0gPSB1c2VUaGVtZSgpXG4gIGNvbnN0IHRoZW1lU2V0dGluZyA9IHVzZVRoZW1lU2V0dGluZygpXG4gIGNvbnN0IFtnbG9iYWxDb25maWcsIHNldEdsb2JhbENvbmZpZ10gPSB1c2VTdGF0ZShnZXRHbG9iYWxDb25maWcoKSlcbiAgY29uc3QgaW5pdGlhbENvbmZpZyA9IFJlYWN0LnVzZVJlZihnZXRHbG9iYWxDb25maWcoKSlcbiAgY29uc3QgW3NldHRpbmdzRGF0YSwgc2V0U2V0dGluZ3NEYXRhXSA9IHVzZVN0YXRlKGdldEluaXRpYWxTZXR0aW5ncygpKVxuICBjb25zdCBpbml0aWFsU2V0dGluZ3NEYXRhID0gUmVhY3QudXNlUmVmKGdldEluaXRpYWxTZXR0aW5ncygpKVxuICBjb25zdCBbY3VycmVudE91dHB1dFN0eWxlLCBzZXRDdXJyZW50T3V0cHV0U3R5bGVdID0gdXNlU3RhdGU8T3V0cHV0U3R5bGU+KFxuICAgIHNldHRpbmdzRGF0YT8ub3V0cHV0U3R5bGUgfHwgREVGQVVMVF9PVVRQVVRfU1RZTEVfTkFNRSxcbiAgKVxuICBjb25zdCBpbml0aWFsT3V0cHV0U3R5bGUgPSBSZWFjdC51c2VSZWYoY3VycmVudE91dHB1dFN0eWxlKVxuICBjb25zdCBbY3VycmVudExhbmd1YWdlLCBzZXRDdXJyZW50TGFuZ3VhZ2VdID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPihcbiAgICBzZXR0aW5nc0RhdGE/Lmxhbmd1YWdlLFxuICApXG4gIGNvbnN0IGluaXRpYWxMYW5ndWFnZSA9IFJlYWN0LnVzZVJlZihjdXJyZW50TGFuZ3VhZ2UpXG4gIGNvbnN0IFtzZWxlY3RlZEluZGV4LCBzZXRTZWxlY3RlZEluZGV4XSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtzY3JvbGxPZmZzZXQsIHNldFNjcm9sbE9mZnNldF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbaXNTZWFyY2hNb2RlLCBzZXRJc1NlYXJjaE1vZGVdID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgaXNUZXJtaW5hbEZvY3VzZWQgPSB1c2VUZXJtaW5hbEZvY3VzKClcbiAgY29uc3QgeyByb3dzIH0gPSB1c2VUZXJtaW5hbFNpemUoKVxuICAvLyBjb250ZW50SGVpZ2h0IGlzIHNldCBieSBTZXR0aW5ncy50c3ggKHNhbWUgdmFsdWUgcGFzc2VkIHRvIFRhYnMgdG8gZml4XG4gIC8vIHBhbmUgaGVpZ2h0IGFjcm9zcyBhbGwgdGFicyDigJQgcHJldmVudHMgbGF5b3V0IGphbmsgd2hlbiBzd2l0Y2hpbmcpLlxuICAvLyBSZXNlcnZlIH4xMCByb3dzIGZvciBjaHJvbWUgKHNlYXJjaCBib3gsIGdhcHMsIGZvb3Rlciwgc2Nyb2xsIGhpbnRzKS5cbiAgLy8gRmFsbGJhY2sgY2FsYyBmb3Igc3RhbmRhbG9uZSByZW5kZXJpbmcgKHRlc3RzKS5cbiAgY29uc3QgcGFuZUNhcCA9IGNvbnRlbnRIZWlnaHQgPz8gTWF0aC5taW4oTWF0aC5mbG9vcihyb3dzICogMC44KSwgMzApXG4gIGNvbnN0IG1heFZpc2libGUgPSBNYXRoLm1heCg1LCBwYW5lQ2FwIC0gMTApXG4gIGNvbnN0IG1haW5Mb29wTW9kZWwgPSB1c2VBcHBTdGF0ZShzID0+IHMubWFpbkxvb3BNb2RlbClcbiAgY29uc3QgdmVyYm9zZSA9IHVzZUFwcFN0YXRlKHMgPT4gcy52ZXJib3NlKVxuICBjb25zdCB0aGlua2luZ0VuYWJsZWQgPSB1c2VBcHBTdGF0ZShzID0+IHMudGhpbmtpbmdFbmFibGVkKVxuICBjb25zdCBpc0Zhc3RNb2RlID0gdXNlQXBwU3RhdGUocyA9PlxuICAgIGlzRmFzdE1vZGVFbmFibGVkKCkgPyBzLmZhc3RNb2RlIDogZmFsc2UsXG4gIClcbiAgY29uc3QgcHJvbXB0U3VnZ2VzdGlvbkVuYWJsZWQgPSB1c2VBcHBTdGF0ZShzID0+IHMucHJvbXB0U3VnZ2VzdGlvbkVuYWJsZWQpXG4gIC8vIFNob3cgYXV0byBpbiB0aGUgZGVmYXVsdC1tb2RlIGRyb3Bkb3duIHdoZW4gdGhlIHVzZXIgaGFzIG9wdGVkIGluIE9SIHRoZVxuICAvLyBjb25maWcgaXMgZnVsbHkgJ2VuYWJsZWQnIOKAlCBldmVuIGlmIGN1cnJlbnRseSBjaXJjdWl0LWJyb2tlbiAoJ2Rpc2FibGVkJyksXG4gIC8vIGFuIG9wdGVkLWluIHVzZXIgc2hvdWxkIHN0aWxsIHNlZSBpdCBpbiBzZXR0aW5ncyAoaXQncyBhIHRlbXBvcmFyeSBzdGF0ZSkuXG4gIGNvbnN0IHNob3dBdXRvSW5EZWZhdWx0TW9kZVBpY2tlciA9IGZlYXR1cmUoJ1RSQU5TQ1JJUFRfQ0xBU1NJRklFUicpXG4gICAgPyBoYXNBdXRvTW9kZU9wdEluQW55U291cmNlKCkgfHwgZ2V0QXV0b01vZGVFbmFibGVkU3RhdGUoKSA9PT0gJ2VuYWJsZWQnXG4gICAgOiBmYWxzZVxuICAvLyBDaGF0L1RyYW5zY3JpcHQgdmlldyBwaWNrZXIgaXMgdmlzaWJsZSB0byBlbnRpdGxlZCB1c2VycyAocGFzcyB0aGUgR0JcbiAgLy8gZ2F0ZSkgZXZlbiBpZiB0aGV5IGhhdmVuJ3Qgb3B0ZWQgaW4gdGhpcyBzZXNzaW9uIOKAlCBpdCBJUyB0aGUgcGVyc2lzdGVudFxuICAvLyBvcHQtaW4uICdjaGF0JyB3cml0dGVuIGhlcmUgaXMgcmVhZCBhdCBuZXh0IHN0YXJ0dXAgYnkgbWFpbi50c3ggd2hpY2hcbiAgLy8gc2V0cyB1c2VyTXNnT3B0SW4gaWYgc3RpbGwgZW50aXRsZWQuXG4gIC8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHMgKi9cbiAgY29uc3Qgc2hvd0RlZmF1bHRWaWV3UGlja2VyID1cbiAgICBmZWF0dXJlKCdLQUlST1MnKSB8fCBmZWF0dXJlKCdLQUlST1NfQlJJRUYnKVxuICAgICAgPyAoXG4gICAgICAgICAgcmVxdWlyZSgnLi4vLi4vdG9vbHMvQnJpZWZUb29sL0JyaWVmVG9vbC5qcycpIGFzIHR5cGVvZiBpbXBvcnQoJy4uLy4uL3Rvb2xzL0JyaWVmVG9vbC9CcmllZlRvb2wuanMnKVxuICAgICAgICApLmlzQnJpZWZFbnRpdGxlZCgpXG4gICAgICA6IGZhbHNlXG4gIC8qIGVzbGludC1lbmFibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyAqL1xuICBjb25zdCBzZXRBcHBTdGF0ZSA9IHVzZVNldEFwcFN0YXRlKClcbiAgY29uc3QgW2NoYW5nZXMsIHNldENoYW5nZXNdID0gdXNlU3RhdGU8eyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0+KHt9KVxuICBjb25zdCBpbml0aWFsVGhpbmtpbmdFbmFibGVkID0gUmVhY3QudXNlUmVmKHRoaW5raW5nRW5hYmxlZClcbiAgLy8gUGVyLXNvdXJjZSBzZXR0aW5ncyBzbmFwc2hvdHMgZm9yIHJldmVydC1vbi1lc2NhcGUuIGdldEluaXRpYWxTZXR0aW5ncygpXG4gIC8vIHJldHVybnMgbWVyZ2VkLWFjcm9zcy1zb3VyY2VzIHdoaWNoIGNhbid0IHRlbGwgdXMgd2hhdCB0byBkZWxldGUgdnNcbiAgLy8gcmVzdG9yZTsgcGVyLXNvdXJjZSBzbmFwc2hvdHMgKyB1cGRhdGVTZXR0aW5nc0ZvclNvdXJjZSdzXG4gIC8vIHVuZGVmaW5lZC1kZWxldGVzLWtleSBzZW1hbnRpY3MgY2FuLiBMYXp5LWluaXQgdmlhIHVzZVN0YXRlIChubyBzZXR0ZXIpIHRvXG4gIC8vIGF2b2lkIHJlYWRpbmcgc2V0dGluZ3MgZmlsZXMgb24gZXZlcnkgcmVuZGVyIOKAlCB1c2VSZWYgZXZhbHVhdGVzIGl0cyBhcmdcbiAgLy8gZWFnZXJseSBldmVuIHRob3VnaCBvbmx5IHRoZSBmaXJzdCByZXN1bHQgaXMga2VwdC5cbiAgY29uc3QgW2luaXRpYWxMb2NhbFNldHRpbmdzXSA9IHVzZVN0YXRlKCgpID0+XG4gICAgZ2V0U2V0dGluZ3NGb3JTb3VyY2UoJ2xvY2FsU2V0dGluZ3MnKSxcbiAgKVxuICBjb25zdCBbaW5pdGlhbFVzZXJTZXR0aW5nc10gPSB1c2VTdGF0ZSgoKSA9PlxuICAgIGdldFNldHRpbmdzRm9yU291cmNlKCd1c2VyU2V0dGluZ3MnKSxcbiAgKVxuICBjb25zdCBpbml0aWFsVGhlbWVTZXR0aW5nID0gUmVhY3QudXNlUmVmKHRoZW1lU2V0dGluZylcbiAgLy8gQXBwU3RhdGUgZmllbGRzIENvbmZpZyBtYXkgbW9kaWZ5IOKAlCBzbmFwc2hvdCBvbmNlIGF0IG1vdW50LlxuICBjb25zdCBzdG9yZSA9IHVzZUFwcFN0YXRlU3RvcmUoKVxuICBjb25zdCBbaW5pdGlhbEFwcFN0YXRlXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICBjb25zdCBzID0gc3RvcmUuZ2V0U3RhdGUoKVxuICAgIHJldHVybiB7XG4gICAgICBtYWluTG9vcE1vZGVsOiBzLm1haW5Mb29wTW9kZWwsXG4gICAgICBtYWluTG9vcE1vZGVsRm9yU2Vzc2lvbjogcy5tYWluTG9vcE1vZGVsRm9yU2Vzc2lvbixcbiAgICAgIHZlcmJvc2U6IHMudmVyYm9zZSxcbiAgICAgIHRoaW5raW5nRW5hYmxlZDogcy50aGlua2luZ0VuYWJsZWQsXG4gICAgICBmYXN0TW9kZTogcy5mYXN0TW9kZSxcbiAgICAgIHByb21wdFN1Z2dlc3Rpb25FbmFibGVkOiBzLnByb21wdFN1Z2dlc3Rpb25FbmFibGVkLFxuICAgICAgaXNCcmllZk9ubHk6IHMuaXNCcmllZk9ubHksXG4gICAgICByZXBsQnJpZGdlRW5hYmxlZDogcy5yZXBsQnJpZGdlRW5hYmxlZCxcbiAgICAgIHJlcGxCcmlkZ2VPdXRib3VuZE9ubHk6IHMucmVwbEJyaWRnZU91dGJvdW5kT25seSxcbiAgICAgIHNldHRpbmdzOiBzLnNldHRpbmdzLFxuICAgIH1cbiAgfSlcbiAgLy8gQm9vdHN0cmFwIHN0YXRlIHNuYXBzaG90IOKAlCB1c2VyTXNnT3B0SW4gaXMgb3V0c2lkZSBBcHBTdGF0ZSwgc29cbiAgLy8gcmV2ZXJ0Q2hhbmdlcyBuZWVkcyB0byByZXN0b3JlIGl0IHNlcGFyYXRlbHkuIFdpdGhvdXQgdGhpcywgY3ljbGluZ1xuICAvLyBkZWZhdWx0VmlldyB0byAnY2hhdCcgdGhlbiBFc2NhcGUgbGVhdmVzIHRoZSB0b29sIGFjdGl2ZSB3aGlsZSB0aGVcbiAgLy8gZGlzcGxheSBmaWx0ZXIgcmV2ZXJ0cyDigJQgdGhlIGV4YWN0IGFtYmllbnQtYWN0aXZhdGlvbiBiZWhhdmlvciB0aGlzXG4gIC8vIFBSJ3MgZW50aXRsZW1lbnQvb3B0LWluIHNwbGl0IGlzIG1lYW50IHRvIHByZXZlbnQuXG4gIGNvbnN0IFtpbml0aWFsVXNlck1zZ09wdEluXSA9IHVzZVN0YXRlKCgpID0+IGdldFVzZXJNc2dPcHRJbigpKVxuICAvLyBTZXQgb24gZmlyc3QgdXNlci12aXNpYmxlIGNoYW5nZTsgZ2F0ZXMgcmV2ZXJ0Q2hhbmdlcygpIG9uIEVzY2FwZSBzb1xuICAvLyBvcGVuaW5nLXRoZW4tY2xvc2luZyBkb2Vzbid0IHRyaWdnZXIgcmVkdW5kYW50IGRpc2sgd3JpdGVzLlxuICBjb25zdCBpc0RpcnR5ID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICBjb25zdCBbc2hvd1RoaW5raW5nV2FybmluZywgc2V0U2hvd1RoaW5raW5nV2FybmluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3Nob3dTdWJtZW51LCBzZXRTaG93U3VibWVudV0gPSB1c2VTdGF0ZTxTdWJNZW51IHwgbnVsbD4obnVsbClcbiAgY29uc3Qge1xuICAgIHF1ZXJ5OiBzZWFyY2hRdWVyeSxcbiAgICBzZXRRdWVyeTogc2V0U2VhcmNoUXVlcnksXG4gICAgY3Vyc29yT2Zmc2V0OiBzZWFyY2hDdXJzb3JPZmZzZXQsXG4gIH0gPSB1c2VTZWFyY2hJbnB1dCh7XG4gICAgaXNBY3RpdmU6IGlzU2VhcmNoTW9kZSAmJiBzaG93U3VibWVudSA9PT0gbnVsbCAmJiAhaGVhZGVyRm9jdXNlZCxcbiAgICBvbkV4aXQ6ICgpID0+IHNldElzU2VhcmNoTW9kZShmYWxzZSksXG4gICAgb25FeGl0VXA6IGZvY3VzSGVhZGVyLFxuICAgIC8vIEN0cmwrQy9EIG11c3QgcmVhY2ggU2V0dGluZ3MnIHVzZUV4aXRPbkN0cmxDRDsgJ2QnIGFsc28gYXZvaWRzXG4gICAgLy8gZG91YmxlLWFjdGlvbiAoZGVsZXRlLWNoYXIgKyBleGl0LXBlbmRpbmcpLlxuICAgIHBhc3N0aHJvdWdoQ3RybEtleXM6IFsnYycsICdkJ10sXG4gIH0pXG5cbiAgLy8gVGVsbCB0aGUgcGFyZW50IHdoZW4gQ29uZmlnJ3Mgb3duIEVzYyBoYW5kbGVyIGlzIGFjdGl2ZSBzbyBTZXR0aW5ncyBjZWRlc1xuICAvLyBjb25maXJtOm5vLiBPbmx5IHRydWUgd2hlbiBzZWFyY2ggbW9kZSBvd25zIHRoZSBrZXlib2FyZCDigJQgbm90IHdoZW4gdGhlXG4gIC8vIHRhYiBoZWFkZXIgaXMgZm9jdXNlZCAodGhlbiBTZXR0aW5ncyBtdXN0IGhhbmRsZSBFc2MtdG8tY2xvc2UpLlxuICBjb25zdCBvd25zRXNjID0gaXNTZWFyY2hNb2RlICYmICFoZWFkZXJGb2N1c2VkXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgb25Jc1NlYXJjaE1vZGVDaGFuZ2U/Lihvd25zRXNjKVxuICB9LCBbb3duc0VzYywgb25Jc1NlYXJjaE1vZGVDaGFuZ2VdKVxuXG4gIGNvbnN0IGlzQ29ubmVjdGVkVG9JZGUgPSBoYXNBY2Nlc3NUb0lERUV4dGVuc2lvbkRpZmZGZWF0dXJlKFxuICAgIGNvbnRleHQub3B0aW9ucy5tY3BDbGllbnRzLFxuICApXG5cbiAgY29uc3QgaXNGaWxlQ2hlY2twb2ludGluZ0F2YWlsYWJsZSA9ICFpc0VudlRydXRoeShcbiAgICBwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9ESVNBQkxFX0ZJTEVfQ0hFQ0tQT0lOVElORyxcbiAgKVxuXG4gIGNvbnN0IG1lbW9yeUZpbGVzID0gUmVhY3QudXNlKGdldE1lbW9yeUZpbGVzKHRydWUpKVxuICBjb25zdCBzaG91bGRTaG93RXh0ZXJuYWxJbmNsdWRlc1RvZ2dsZSA9XG4gICAgaGFzRXh0ZXJuYWxDbGF1ZGVNZEluY2x1ZGVzKG1lbW9yeUZpbGVzKVxuXG4gIGNvbnN0IGF1dG9VcGRhdGVyRGlzYWJsZWRSZWFzb24gPSBnZXRBdXRvVXBkYXRlckRpc2FibGVkUmVhc29uKClcblxuICBmdW5jdGlvbiBvbkNoYW5nZU1haW5Nb2RlbENvbmZpZyh2YWx1ZTogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xuICAgIGNvbnN0IHByZXZpb3VzTW9kZWwgPSBtYWluTG9vcE1vZGVsXG4gICAgbG9nRXZlbnQoJ3Rlbmd1X2NvbmZpZ19tb2RlbF9jaGFuZ2VkJywge1xuICAgICAgZnJvbV9tb2RlbDpcbiAgICAgICAgcHJldmlvdXNNb2RlbCBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgdG9fbW9kZWw6XG4gICAgICAgIHZhbHVlIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgfSlcbiAgICBzZXRBcHBTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAuLi5wcmV2LFxuICAgICAgbWFpbkxvb3BNb2RlbDogdmFsdWUsXG4gICAgICBtYWluTG9vcE1vZGVsRm9yU2Vzc2lvbjogbnVsbCxcbiAgICB9KSlcbiAgICBzZXRDaGFuZ2VzKHByZXYgPT4ge1xuICAgICAgY29uc3QgdmFsU3RyID1cbiAgICAgICAgbW9kZWxEaXNwbGF5U3RyaW5nKHZhbHVlKSArXG4gICAgICAgIChpc0JpbGxlZEFzRXh0cmFVc2FnZSh2YWx1ZSwgZmFsc2UsIGlzT3B1czFtTWVyZ2VFbmFibGVkKCkpXG4gICAgICAgICAgPyAnIMK3IEJpbGxlZCBhcyBleHRyYSB1c2FnZSdcbiAgICAgICAgICA6ICcnKVxuICAgICAgaWYgKCdtb2RlbCcgaW4gcHJldikge1xuICAgICAgICBjb25zdCB7IG1vZGVsLCAuLi5yZXN0IH0gPSBwcmV2XG4gICAgICAgIHJldHVybiB7IC4uLnJlc3QsIG1vZGVsOiB2YWxTdHIgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHsgLi4ucHJldiwgbW9kZWw6IHZhbFN0ciB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlVmVyYm9zZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIC8vIFVwZGF0ZSB0aGUgZ2xvYmFsIGNvbmZpZyB0byBwZXJzaXN0IHRoZSBzZXR0aW5nXG4gICAgc2F2ZUdsb2JhbENvbmZpZyhjdXJyZW50ID0+ICh7IC4uLmN1cnJlbnQsIHZlcmJvc2U6IHZhbHVlIH0pKVxuICAgIHNldEdsb2JhbENvbmZpZyh7IC4uLmdldEdsb2JhbENvbmZpZygpLCB2ZXJib3NlOiB2YWx1ZSB9KVxuXG4gICAgLy8gVXBkYXRlIHRoZSBhcHAgc3RhdGUgZm9yIGltbWVkaWF0ZSBVSSBmZWVkYmFja1xuICAgIHNldEFwcFN0YXRlKHByZXYgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICB2ZXJib3NlOiB2YWx1ZSxcbiAgICB9KSlcbiAgICBzZXRDaGFuZ2VzKHByZXYgPT4ge1xuICAgICAgaWYgKCd2ZXJib3NlJyBpbiBwcmV2KSB7XG4gICAgICAgIGNvbnN0IHsgdmVyYm9zZSwgLi4ucmVzdCB9ID0gcHJldlxuICAgICAgICByZXR1cm4gcmVzdFxuICAgICAgfVxuICAgICAgcmV0dXJuIHsgLi4ucHJldiwgdmVyYm9zZTogdmFsdWUgfVxuICAgIH0pXG4gIH1cblxuICAvLyBUT0RPOiBBZGQgTUNQIHNlcnZlcnNcbiAgY29uc3Qgc2V0dGluZ3NJdGVtczogU2V0dGluZ1tdID0gW1xuICAgIC8vIEdsb2JhbCBzZXR0aW5nc1xuICAgIHtcbiAgICAgIGlkOiAnYXV0b0NvbXBhY3RFbmFibGVkJyxcbiAgICAgIGxhYmVsOiAnQXV0by1jb21wYWN0JyxcbiAgICAgIHZhbHVlOiBnbG9iYWxDb25maWcuYXV0b0NvbXBhY3RFbmFibGVkLFxuICAgICAgdHlwZTogJ2Jvb2xlYW4nIGFzIGNvbnN0LFxuICAgICAgb25DaGFuZ2UoYXV0b0NvbXBhY3RFbmFibGVkOiBib29sZWFuKSB7XG4gICAgICAgIHNhdmVHbG9iYWxDb25maWcoY3VycmVudCA9PiAoeyAuLi5jdXJyZW50LCBhdXRvQ29tcGFjdEVuYWJsZWQgfSkpXG4gICAgICAgIHNldEdsb2JhbENvbmZpZyh7IC4uLmdldEdsb2JhbENvbmZpZygpLCBhdXRvQ29tcGFjdEVuYWJsZWQgfSlcbiAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2F1dG9fY29tcGFjdF9zZXR0aW5nX2NoYW5nZWQnLCB7XG4gICAgICAgICAgZW5hYmxlZDogYXV0b0NvbXBhY3RFbmFibGVkLFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnc3Bpbm5lclRpcHNFbmFibGVkJyxcbiAgICAgIGxhYmVsOiAnU2hvdyB0aXBzJyxcbiAgICAgIHZhbHVlOiBzZXR0aW5nc0RhdGE/LnNwaW5uZXJUaXBzRW5hYmxlZCA/PyB0cnVlLFxuICAgICAgdHlwZTogJ2Jvb2xlYW4nIGFzIGNvbnN0LFxuICAgICAgb25DaGFuZ2Uoc3Bpbm5lclRpcHNFbmFibGVkOiBib29sZWFuKSB7XG4gICAgICAgIHVwZGF0ZVNldHRpbmdzRm9yU291cmNlKCdsb2NhbFNldHRpbmdzJywge1xuICAgICAgICAgIHNwaW5uZXJUaXBzRW5hYmxlZCxcbiAgICAgICAgfSlcbiAgICAgICAgLy8gVXBkYXRlIGxvY2FsIHN0YXRlIHRvIHJlZmxlY3QgdGhlIGNoYW5nZSBpbW1lZGlhdGVseVxuICAgICAgICBzZXRTZXR0aW5nc0RhdGEocHJldiA9PiAoe1xuICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgc3Bpbm5lclRpcHNFbmFibGVkLFxuICAgICAgICB9KSlcbiAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X3RpcHNfc2V0dGluZ19jaGFuZ2VkJywge1xuICAgICAgICAgIGVuYWJsZWQ6IHNwaW5uZXJUaXBzRW5hYmxlZCxcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3ByZWZlcnNSZWR1Y2VkTW90aW9uJyxcbiAgICAgIGxhYmVsOiAnUmVkdWNlIG1vdGlvbicsXG4gICAgICB2YWx1ZTogc2V0dGluZ3NEYXRhPy5wcmVmZXJzUmVkdWNlZE1vdGlvbiA/PyBmYWxzZSxcbiAgICAgIHR5cGU6ICdib29sZWFuJyBhcyBjb25zdCxcbiAgICAgIG9uQ2hhbmdlKHByZWZlcnNSZWR1Y2VkTW90aW9uOiBib29sZWFuKSB7XG4gICAgICAgIHVwZGF0ZVNldHRpbmdzRm9yU291cmNlKCdsb2NhbFNldHRpbmdzJywge1xuICAgICAgICAgIHByZWZlcnNSZWR1Y2VkTW90aW9uLFxuICAgICAgICB9KVxuICAgICAgICBzZXRTZXR0aW5nc0RhdGEocHJldiA9PiAoe1xuICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgcHJlZmVyc1JlZHVjZWRNb3Rpb24sXG4gICAgICAgIH0pKVxuICAgICAgICAvLyBTeW5jIHRvIEFwcFN0YXRlIHNvIGNvbXBvbmVudHMgcmVhY3QgaW1tZWRpYXRlbHlcbiAgICAgICAgc2V0QXBwU3RhdGUocHJldiA9PiAoe1xuICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgc2V0dGluZ3M6IHsgLi4ucHJldi5zZXR0aW5ncywgcHJlZmVyc1JlZHVjZWRNb3Rpb24gfSxcbiAgICAgICAgfSkpXG4gICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9yZWR1Y2VfbW90aW9uX3NldHRpbmdfY2hhbmdlZCcsIHtcbiAgICAgICAgICBlbmFibGVkOiBwcmVmZXJzUmVkdWNlZE1vdGlvbixcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3RoaW5raW5nRW5hYmxlZCcsXG4gICAgICBsYWJlbDogJ1RoaW5raW5nIG1vZGUnLFxuICAgICAgdmFsdWU6IHRoaW5raW5nRW5hYmxlZCA/PyB0cnVlLFxuICAgICAgdHlwZTogJ2Jvb2xlYW4nIGFzIGNvbnN0LFxuICAgICAgb25DaGFuZ2UoZW5hYmxlZDogYm9vbGVhbikge1xuICAgICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+ICh7IC4uLnByZXYsIHRoaW5raW5nRW5hYmxlZDogZW5hYmxlZCB9KSlcbiAgICAgICAgdXBkYXRlU2V0dGluZ3NGb3JTb3VyY2UoJ3VzZXJTZXR0aW5ncycsIHtcbiAgICAgICAgICBhbHdheXNUaGlua2luZ0VuYWJsZWQ6IGVuYWJsZWQgPyB1bmRlZmluZWQgOiBmYWxzZSxcbiAgICAgICAgfSlcbiAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X3RoaW5raW5nX3RvZ2dsZWQnLCB7IGVuYWJsZWQgfSlcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBGYXN0IG1vZGUgdG9nZ2xlIChhbnQtb25seSwgZWxpbWluYXRlZCBmcm9tIGV4dGVybmFsIGJ1aWxkcylcbiAgICAuLi4oaXNGYXN0TW9kZUVuYWJsZWQoKSAmJiBpc0Zhc3RNb2RlQXZhaWxhYmxlKClcbiAgICAgID8gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnZmFzdE1vZGUnLFxuICAgICAgICAgICAgbGFiZWw6IGBGYXN0IG1vZGUgKCR7RkFTVF9NT0RFX01PREVMX0RJU1BMQVl9IG9ubHkpYCxcbiAgICAgICAgICAgIHZhbHVlOiAhIWlzRmFzdE1vZGUsXG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicgYXMgY29uc3QsXG4gICAgICAgICAgICBvbkNoYW5nZShlbmFibGVkOiBib29sZWFuKSB7XG4gICAgICAgICAgICAgIGNsZWFyRmFzdE1vZGVDb29sZG93bigpXG4gICAgICAgICAgICAgIHVwZGF0ZVNldHRpbmdzRm9yU291cmNlKCd1c2VyU2V0dGluZ3MnLCB7XG4gICAgICAgICAgICAgICAgZmFzdE1vZGU6IGVuYWJsZWQgPyB0cnVlIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBpZiAoZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIHNldEFwcFN0YXRlKHByZXYgPT4gKHtcbiAgICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgICBtYWluTG9vcE1vZGVsOiBnZXRGYXN0TW9kZU1vZGVsKCksXG4gICAgICAgICAgICAgICAgICBtYWluTG9vcE1vZGVsRm9yU2Vzc2lvbjogbnVsbCxcbiAgICAgICAgICAgICAgICAgIGZhc3RNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgIHNldENoYW5nZXMocHJldiA9PiAoe1xuICAgICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiBnZXRGYXN0TW9kZU1vZGVsKCksXG4gICAgICAgICAgICAgICAgICAnRmFzdCBtb2RlJzogJ09OJyxcbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgICAgZmFzdE1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgIHNldENoYW5nZXMocHJldiA9PiAoeyAuLi5wcmV2LCAnRmFzdCBtb2RlJzogJ09GRicgfSkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgICAgOiBbXSksXG4gICAgLi4uKGdldEZlYXR1cmVWYWx1ZV9DQUNIRURfTUFZX0JFX1NUQUxFKCd0ZW5ndV9jaG9tcF9pbmZsZWN0aW9uJywgZmFsc2UpXG4gICAgICA/IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ3Byb21wdFN1Z2dlc3Rpb25FbmFibGVkJyxcbiAgICAgICAgICAgIGxhYmVsOiAnUHJvbXB0IHN1Z2dlc3Rpb25zJyxcbiAgICAgICAgICAgIHZhbHVlOiBwcm9tcHRTdWdnZXN0aW9uRW5hYmxlZCxcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyBhcyBjb25zdCxcbiAgICAgICAgICAgIG9uQ2hhbmdlKGVuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICAgICAgICAgICAgc2V0QXBwU3RhdGUocHJldiA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgcHJvbXB0U3VnZ2VzdGlvbkVuYWJsZWQ6IGVuYWJsZWQsXG4gICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICB1cGRhdGVTZXR0aW5nc0ZvclNvdXJjZSgndXNlclNldHRpbmdzJywge1xuICAgICAgICAgICAgICAgIHByb21wdFN1Z2dlc3Rpb25FbmFibGVkOiBlbmFibGVkID8gdW5kZWZpbmVkIDogZmFsc2UsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICAgIDogW10pLFxuICAgIC8vIFNwZWN1bGF0aW9uIHRvZ2dsZSAoYW50LW9ubHkpXG4gICAgLi4uKFwiZXh0ZXJuYWxcIiA9PT0gJ2FudCdcbiAgICAgID8gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnc3BlY3VsYXRpb25FbmFibGVkJyxcbiAgICAgICAgICAgIGxhYmVsOiAnU3BlY3VsYXRpdmUgZXhlY3V0aW9uJyxcbiAgICAgICAgICAgIHZhbHVlOiBnbG9iYWxDb25maWcuc3BlY3VsYXRpb25FbmFibGVkID8/IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicgYXMgY29uc3QsXG4gICAgICAgICAgICBvbkNoYW5nZShlbmFibGVkOiBib29sZWFuKSB7XG4gICAgICAgICAgICAgIHNhdmVHbG9iYWxDb25maWcoY3VycmVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuc3BlY3VsYXRpb25FbmFibGVkID09PSBlbmFibGVkKSByZXR1cm4gY3VycmVudFxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAuLi5jdXJyZW50LFxuICAgICAgICAgICAgICAgICAgc3BlY3VsYXRpb25FbmFibGVkOiBlbmFibGVkLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgc2V0R2xvYmFsQ29uZmlnKHtcbiAgICAgICAgICAgICAgICAuLi5nZXRHbG9iYWxDb25maWcoKSxcbiAgICAgICAgICAgICAgICBzcGVjdWxhdGlvbkVuYWJsZWQ6IGVuYWJsZWQsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9zcGVjdWxhdGlvbl9zZXR0aW5nX2NoYW5nZWQnLCB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgICAgOiBbXSksXG4gICAgLi4uKGlzRmlsZUNoZWNrcG9pbnRpbmdBdmFpbGFibGVcbiAgICAgID8gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnZmlsZUNoZWNrcG9pbnRpbmdFbmFibGVkJyxcbiAgICAgICAgICAgIGxhYmVsOiAnUmV3aW5kIGNvZGUgKGNoZWNrcG9pbnRzKScsXG4gICAgICAgICAgICB2YWx1ZTogZ2xvYmFsQ29uZmlnLmZpbGVDaGVja3BvaW50aW5nRW5hYmxlZCxcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyBhcyBjb25zdCxcbiAgICAgICAgICAgIG9uQ2hhbmdlKGVuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICAgICAgICAgICAgc2F2ZUdsb2JhbENvbmZpZyhjdXJyZW50ID0+ICh7XG4gICAgICAgICAgICAgICAgLi4uY3VycmVudCxcbiAgICAgICAgICAgICAgICBmaWxlQ2hlY2twb2ludGluZ0VuYWJsZWQ6IGVuYWJsZWQsXG4gICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICBzZXRHbG9iYWxDb25maWcoe1xuICAgICAgICAgICAgICAgIC4uLmdldEdsb2JhbENvbmZpZygpLFxuICAgICAgICAgICAgICAgIGZpbGVDaGVja3BvaW50aW5nRW5hYmxlZDogZW5hYmxlZCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2ZpbGVfaGlzdG9yeV9zbmFwc2hvdHNfc2V0dGluZ19jaGFuZ2VkJywge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGVuYWJsZWQsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICAgIDogW10pLFxuICAgIHtcbiAgICAgIGlkOiAndmVyYm9zZScsXG4gICAgICBsYWJlbDogJ1ZlcmJvc2Ugb3V0cHV0JyxcbiAgICAgIHZhbHVlOiB2ZXJib3NlLFxuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgb25DaGFuZ2U6IG9uQ2hhbmdlVmVyYm9zZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAndGVybWluYWxQcm9ncmVzc0JhckVuYWJsZWQnLFxuICAgICAgbGFiZWw6ICdUZXJtaW5hbCBwcm9ncmVzcyBiYXInLFxuICAgICAgdmFsdWU6IGdsb2JhbENvbmZpZy50ZXJtaW5hbFByb2dyZXNzQmFyRW5hYmxlZCxcbiAgICAgIHR5cGU6ICdib29sZWFuJyBhcyBjb25zdCxcbiAgICAgIG9uQ2hhbmdlKHRlcm1pbmFsUHJvZ3Jlc3NCYXJFbmFibGVkOiBib29sZWFuKSB7XG4gICAgICAgIHNhdmVHbG9iYWxDb25maWcoY3VycmVudCA9PiAoe1xuICAgICAgICAgIC4uLmN1cnJlbnQsXG4gICAgICAgICAgdGVybWluYWxQcm9ncmVzc0JhckVuYWJsZWQsXG4gICAgICAgIH0pKVxuICAgICAgICBzZXRHbG9iYWxDb25maWcoeyAuLi5nZXRHbG9iYWxDb25maWcoKSwgdGVybWluYWxQcm9ncmVzc0JhckVuYWJsZWQgfSlcbiAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X3Rlcm1pbmFsX3Byb2dyZXNzX2Jhcl9zZXR0aW5nX2NoYW5nZWQnLCB7XG4gICAgICAgICAgZW5hYmxlZDogdGVybWluYWxQcm9ncmVzc0JhckVuYWJsZWQsXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgIH0sXG4gICAgLi4uKGdldEZlYXR1cmVWYWx1ZV9DQUNIRURfTUFZX0JFX1NUQUxFKCd0ZW5ndV90ZXJtaW5hbF9zaWRlYmFyJywgZmFsc2UpXG4gICAgICA/IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ3Nob3dTdGF0dXNJblRlcm1pbmFsVGFiJyxcbiAgICAgICAgICAgIGxhYmVsOiAnU2hvdyBzdGF0dXMgaW4gdGVybWluYWwgdGFiJyxcbiAgICAgICAgICAgIHZhbHVlOiBnbG9iYWxDb25maWcuc2hvd1N0YXR1c0luVGVybWluYWxUYWIgPz8gZmFsc2UsXG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicgYXMgY29uc3QsXG4gICAgICAgICAgICBvbkNoYW5nZShzaG93U3RhdHVzSW5UZXJtaW5hbFRhYjogYm9vbGVhbikge1xuICAgICAgICAgICAgICBzYXZlR2xvYmFsQ29uZmlnKGN1cnJlbnQgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50LFxuICAgICAgICAgICAgICAgIHNob3dTdGF0dXNJblRlcm1pbmFsVGFiLFxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgc2V0R2xvYmFsQ29uZmlnKHtcbiAgICAgICAgICAgICAgICAuLi5nZXRHbG9iYWxDb25maWcoKSxcbiAgICAgICAgICAgICAgICBzaG93U3RhdHVzSW5UZXJtaW5hbFRhYixcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X3Rlcm1pbmFsX3RhYl9zdGF0dXNfc2V0dGluZ19jaGFuZ2VkJywge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHNob3dTdGF0dXNJblRlcm1pbmFsVGFiLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgICA6IFtdKSxcbiAgICB7XG4gICAgICBpZDogJ3Nob3dUdXJuRHVyYXRpb24nLFxuICAgICAgbGFiZWw6ICdTaG93IHR1cm4gZHVyYXRpb24nLFxuICAgICAgdmFsdWU6IGdsb2JhbENvbmZpZy5zaG93VHVybkR1cmF0aW9uLFxuICAgICAgdHlwZTogJ2Jvb2xlYW4nIGFzIGNvbnN0LFxuICAgICAgb25DaGFuZ2Uoc2hvd1R1cm5EdXJhdGlvbjogYm9vbGVhbikge1xuICAgICAgICBzYXZlR2xvYmFsQ29uZmlnKGN1cnJlbnQgPT4gKHsgLi4uY3VycmVudCwgc2hvd1R1cm5EdXJhdGlvbiB9KSlcbiAgICAgICAgc2V0R2xvYmFsQ29uZmlnKHsgLi4uZ2V0R2xvYmFsQ29uZmlnKCksIHNob3dUdXJuRHVyYXRpb24gfSlcbiAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X3Nob3dfdHVybl9kdXJhdGlvbl9zZXR0aW5nX2NoYW5nZWQnLCB7XG4gICAgICAgICAgZW5hYmxlZDogc2hvd1R1cm5EdXJhdGlvbixcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2RlZmF1bHRQZXJtaXNzaW9uTW9kZScsXG4gICAgICBsYWJlbDogJ0RlZmF1bHQgcGVybWlzc2lvbiBtb2RlJyxcbiAgICAgIHZhbHVlOiBzZXR0aW5nc0RhdGE/LnBlcm1pc3Npb25zPy5kZWZhdWx0TW9kZSB8fCAnZGVmYXVsdCcsXG4gICAgICBvcHRpb25zOiAoKCkgPT4ge1xuICAgICAgICBjb25zdCBwcmlvcml0eU9yZGVyOiBQZXJtaXNzaW9uTW9kZVtdID0gWydkZWZhdWx0JywgJ3BsYW4nXVxuICAgICAgICBjb25zdCBhbGxNb2RlczogcmVhZG9ubHkgUGVybWlzc2lvbk1vZGVbXSA9IGZlYXR1cmUoXG4gICAgICAgICAgJ1RSQU5TQ1JJUFRfQ0xBU1NJRklFUicsXG4gICAgICAgIClcbiAgICAgICAgICA/IFBFUk1JU1NJT05fTU9ERVNcbiAgICAgICAgICA6IEVYVEVSTkFMX1BFUk1JU1NJT05fTU9ERVNcbiAgICAgICAgY29uc3QgZXhjbHVkZWQ6IFBlcm1pc3Npb25Nb2RlW10gPSBbJ2J5cGFzc1Blcm1pc3Npb25zJ11cbiAgICAgICAgaWYgKGZlYXR1cmUoJ1RSQU5TQ1JJUFRfQ0xBU1NJRklFUicpICYmICFzaG93QXV0b0luRGVmYXVsdE1vZGVQaWNrZXIpIHtcbiAgICAgICAgICBleGNsdWRlZC5wdXNoKCdhdXRvJylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIC4uLnByaW9yaXR5T3JkZXIsXG4gICAgICAgICAgLi4uYWxsTW9kZXMuZmlsdGVyKFxuICAgICAgICAgICAgbSA9PiAhcHJpb3JpdHlPcmRlci5pbmNsdWRlcyhtKSAmJiAhZXhjbHVkZWQuaW5jbHVkZXMobSksXG4gICAgICAgICAgKSxcbiAgICAgICAgXVxuICAgICAgfSkoKSxcbiAgICAgIHR5cGU6ICdlbnVtJyBhcyBjb25zdCxcbiAgICAgIG9uQ2hhbmdlKG1vZGU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBwYXJzZWRNb2RlID0gcGVybWlzc2lvbk1vZGVGcm9tU3RyaW5nKG1vZGUpXG4gICAgICAgIC8vIEludGVybmFsIG1vZGVzIChlLmcuIGF1dG8pIGFyZSBzdG9yZWQgZGlyZWN0bHlcbiAgICAgICAgY29uc3QgdmFsaWRhdGVkTW9kZSA9IGlzRXh0ZXJuYWxQZXJtaXNzaW9uTW9kZShwYXJzZWRNb2RlKVxuICAgICAgICAgID8gdG9FeHRlcm5hbFBlcm1pc3Npb25Nb2RlKHBhcnNlZE1vZGUpXG4gICAgICAgICAgOiBwYXJzZWRNb2RlXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHVwZGF0ZVNldHRpbmdzRm9yU291cmNlKCd1c2VyU2V0dGluZ3MnLCB7XG4gICAgICAgICAgcGVybWlzc2lvbnM6IHtcbiAgICAgICAgICAgIC4uLnNldHRpbmdzRGF0YT8ucGVybWlzc2lvbnMsXG4gICAgICAgICAgICBkZWZhdWx0TW9kZTogdmFsaWRhdGVkTW9kZSBhcyBFeHRlcm5hbFBlcm1pc3Npb25Nb2RlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgICAgIGxvZ0Vycm9yKHJlc3VsdC5lcnJvcilcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBsb2NhbCBzdGF0ZSB0byByZWZsZWN0IHRoZSBjaGFuZ2UgaW1tZWRpYXRlbHkuXG4gICAgICAgIC8vIHZhbGlkYXRlZE1vZGUgaXMgdHlwZWQgYXMgdGhlIHdpZGUgUGVybWlzc2lvbk1vZGUgdW5pb24gYnV0IGF0XG4gICAgICAgIC8vIHJ1bnRpbWUgaXMgYWx3YXlzIGEgUEVSTUlTU0lPTl9NT0RFUyBtZW1iZXIgKHRoZSBvcHRpb25zIGRyb3Bkb3duXG4gICAgICAgIC8vIGlzIGJ1aWx0IGZyb20gdGhhdCBhcnJheSBhYm92ZSksIHNvIHRoaXMgbmFycm93aW5nIGlzIHNvdW5kLlxuICAgICAgICBzZXRTZXR0aW5nc0RhdGEocHJldiA9PiAoe1xuICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgcGVybWlzc2lvbnM6IHtcbiAgICAgICAgICAgIC4uLnByZXY/LnBlcm1pc3Npb25zLFxuICAgICAgICAgICAgZGVmYXVsdE1vZGU6IHZhbGlkYXRlZE1vZGUgYXMgKHR5cGVvZiBQRVJNSVNTSU9OX01PREVTKVtudW1iZXJdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pKVxuICAgICAgICAvLyBUcmFjayBjaGFuZ2VzXG4gICAgICAgIHNldENoYW5nZXMocHJldiA9PiAoeyAuLi5wcmV2LCBkZWZhdWx0UGVybWlzc2lvbk1vZGU6IG1vZGUgfSkpXG4gICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9jb25maWdfY2hhbmdlZCcsIHtcbiAgICAgICAgICBzZXR0aW5nOlxuICAgICAgICAgICAgJ2RlZmF1bHRQZXJtaXNzaW9uTW9kZScgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgIG1vZGUgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgfSxcbiAgICAuLi4oZmVhdHVyZSgnVFJBTlNDUklQVF9DTEFTU0lGSUVSJykgJiYgc2hvd0F1dG9JbkRlZmF1bHRNb2RlUGlja2VyXG4gICAgICA/IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ3VzZUF1dG9Nb2RlRHVyaW5nUGxhbicsXG4gICAgICAgICAgICBsYWJlbDogJ1VzZSBhdXRvIG1vZGUgZHVyaW5nIHBsYW4nLFxuICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgIChzZXR0aW5nc0RhdGEgYXMgeyB1c2VBdXRvTW9kZUR1cmluZ1BsYW4/OiBib29sZWFuIH0gfCB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgPy51c2VBdXRvTW9kZUR1cmluZ1BsYW4gPz8gdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyBhcyBjb25zdCxcbiAgICAgICAgICAgIG9uQ2hhbmdlKHVzZUF1dG9Nb2RlRHVyaW5nUGxhbjogYm9vbGVhbikge1xuICAgICAgICAgICAgICB1cGRhdGVTZXR0aW5nc0ZvclNvdXJjZSgndXNlclNldHRpbmdzJywge1xuICAgICAgICAgICAgICAgIHVzZUF1dG9Nb2RlRHVyaW5nUGxhbixcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgc2V0U2V0dGluZ3NEYXRhKHByZXYgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIHVzZUF1dG9Nb2RlRHVyaW5nUGxhbixcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgIC8vIEludGVybmFsIHdyaXRlcyBzdXBwcmVzcyB0aGUgZmlsZSB3YXRjaGVyLCBzb1xuICAgICAgICAgICAgICAvLyBhcHBseVNldHRpbmdzQ2hhbmdlIHdvbid0IGZpcmUuIFJlY29uY2lsZSBkaXJlY3RseSBzb1xuICAgICAgICAgICAgICAvLyBtaWQtcGxhbiB0b2dnbGVzIHRha2UgZWZmZWN0IGltbWVkaWF0ZWx5LlxuICAgICAgICAgICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0ID0gdHJhbnNpdGlvblBsYW5BdXRvTW9kZShwcmV2LnRvb2xQZXJtaXNzaW9uQ29udGV4dClcbiAgICAgICAgICAgICAgICBpZiAobmV4dCA9PT0gcHJldi50b29sUGVybWlzc2lvbkNvbnRleHQpIHJldHVybiBwcmV2XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldiwgdG9vbFBlcm1pc3Npb25Db250ZXh0OiBuZXh0IH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgc2V0Q2hhbmdlcyhwcmV2ID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICAnVXNlIGF1dG8gbW9kZSBkdXJpbmcgcGxhbic6IHVzZUF1dG9Nb2RlRHVyaW5nUGxhbixcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICAgIDogW10pLFxuICAgIHtcbiAgICAgIGlkOiAncmVzcGVjdEdpdGlnbm9yZScsXG4gICAgICBsYWJlbDogJ1Jlc3BlY3QgLmdpdGlnbm9yZSBpbiBmaWxlIHBpY2tlcicsXG4gICAgICB2YWx1ZTogZ2xvYmFsQ29uZmlnLnJlc3BlY3RHaXRpZ25vcmUsXG4gICAgICB0eXBlOiAnYm9vbGVhbicgYXMgY29uc3QsXG4gICAgICBvbkNoYW5nZShyZXNwZWN0R2l0aWdub3JlOiBib29sZWFuKSB7XG4gICAgICAgIHNhdmVHbG9iYWxDb25maWcoY3VycmVudCA9PiAoeyAuLi5jdXJyZW50LCByZXNwZWN0R2l0aWdub3JlIH0pKVxuICAgICAgICBzZXRHbG9iYWxDb25maWcoeyAuLi5nZXRHbG9iYWxDb25maWcoKSwgcmVzcGVjdEdpdGlnbm9yZSB9KVxuICAgICAgICBsb2dFdmVudCgndGVuZ3VfcmVzcGVjdF9naXRpZ25vcmVfc2V0dGluZ19jaGFuZ2VkJywge1xuICAgICAgICAgIGVuYWJsZWQ6IHJlc3BlY3RHaXRpZ25vcmUsXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdjb3B5RnVsbFJlc3BvbnNlJyxcbiAgICAgIGxhYmVsOiAnQWx3YXlzIGNvcHkgZnVsbCByZXNwb25zZSAoc2tpcCAvY29weSBwaWNrZXIpJyxcbiAgICAgIHZhbHVlOiBnbG9iYWxDb25maWcuY29weUZ1bGxSZXNwb25zZSxcbiAgICAgIHR5cGU6ICdib29sZWFuJyBhcyBjb25zdCxcbiAgICAgIG9uQ2hhbmdlKGNvcHlGdWxsUmVzcG9uc2U6IGJvb2xlYW4pIHtcbiAgICAgICAgc2F2ZUdsb2JhbENvbmZpZyhjdXJyZW50ID0+ICh7IC4uLmN1cnJlbnQsIGNvcHlGdWxsUmVzcG9uc2UgfSkpXG4gICAgICAgIHNldEdsb2JhbENvbmZpZyh7IC4uLmdldEdsb2JhbENvbmZpZygpLCBjb3B5RnVsbFJlc3BvbnNlIH0pXG4gICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9jb25maWdfY2hhbmdlZCcsIHtcbiAgICAgICAgICBzZXR0aW5nOlxuICAgICAgICAgICAgJ2NvcHlGdWxsUmVzcG9uc2UnIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgICAgdmFsdWU6IFN0cmluZyhcbiAgICAgICAgICAgIGNvcHlGdWxsUmVzcG9uc2UsXG4gICAgICAgICAgKSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIENvcHktb24tc2VsZWN0IGlzIG9ubHkgbWVhbmluZ2Z1bCB3aXRoIGluLWFwcCBzZWxlY3Rpb24gKGZ1bGxzY3JlZW5cbiAgICAvLyBhbHQtc2NyZWVuIG1vZGUpLiBJbiBpbmxpbmUgbW9kZSB0aGUgdGVybWluYWwgZW11bGF0b3Igb3ducyBzZWxlY3Rpb24uXG4gICAgLi4uKGlzRnVsbHNjcmVlbkVudkVuYWJsZWQoKVxuICAgICAgPyBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICdjb3B5T25TZWxlY3QnLFxuICAgICAgICAgICAgbGFiZWw6ICdDb3B5IG9uIHNlbGVjdCcsXG4gICAgICAgICAgICB2YWx1ZTogZ2xvYmFsQ29uZmlnLmNvcHlPblNlbGVjdCA/PyB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nIGFzIGNvbnN0LFxuICAgICAgICAgICAgb25DaGFuZ2UoY29weU9uU2VsZWN0OiBib29sZWFuKSB7XG4gICAgICAgICAgICAgIHNhdmVHbG9iYWxDb25maWcoY3VycmVudCA9PiAoeyAuLi5jdXJyZW50LCBjb3B5T25TZWxlY3QgfSkpXG4gICAgICAgICAgICAgIHNldEdsb2JhbENvbmZpZyh7IC4uLmdldEdsb2JhbENvbmZpZygpLCBjb3B5T25TZWxlY3QgfSlcbiAgICAgICAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2NvbmZpZ19jaGFuZ2VkJywge1xuICAgICAgICAgICAgICAgIHNldHRpbmc6XG4gICAgICAgICAgICAgICAgICAnY29weU9uU2VsZWN0JyBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBTdHJpbmcoXG4gICAgICAgICAgICAgICAgICBjb3B5T25TZWxlY3QsXG4gICAgICAgICAgICAgICAgKSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgICA6IFtdKSxcbiAgICAvLyBhdXRvVXBkYXRlcyBzZXR0aW5nIGlzIGhpZGRlbiAtIHVzZSBESVNBQkxFX0FVVE9VUERBVEVSIGVudiB2YXIgdG8gY29udHJvbFxuICAgIGF1dG9VcGRhdGVyRGlzYWJsZWRSZWFzb25cbiAgICAgID8ge1xuICAgICAgICAgIGlkOiAnYXV0b1VwZGF0ZXNDaGFubmVsJyxcbiAgICAgICAgICBsYWJlbDogJ0F1dG8tdXBkYXRlIGNoYW5uZWwnLFxuICAgICAgICAgIHZhbHVlOiAnZGlzYWJsZWQnLFxuICAgICAgICAgIHR5cGU6ICdtYW5hZ2VkRW51bScgYXMgY29uc3QsXG4gICAgICAgICAgb25DaGFuZ2UoKSB7fSxcbiAgICAgICAgfVxuICAgICAgOiB7XG4gICAgICAgICAgaWQ6ICdhdXRvVXBkYXRlc0NoYW5uZWwnLFxuICAgICAgICAgIGxhYmVsOiAnQXV0by11cGRhdGUgY2hhbm5lbCcsXG4gICAgICAgICAgdmFsdWU6IHNldHRpbmdzRGF0YT8uYXV0b1VwZGF0ZXNDaGFubmVsID8/ICdsYXRlc3QnLFxuICAgICAgICAgIHR5cGU6ICdtYW5hZ2VkRW51bScgYXMgY29uc3QsXG4gICAgICAgICAgb25DaGFuZ2UoKSB7XG4gICAgICAgICAgICAvLyBIYW5kbGVkIHZpYSB0b2dnbGVTZXR0aW5nIC0+ICdDaGFubmVsRG93bmdyYWRlJ1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICd0aGVtZScsXG4gICAgICBsYWJlbDogJ1RoZW1lJyxcbiAgICAgIHZhbHVlOiB0aGVtZVNldHRpbmcsXG4gICAgICB0eXBlOiAnbWFuYWdlZEVudW0nLFxuICAgICAgb25DaGFuZ2U6IHNldFRoZW1lLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdub3RpZkNoYW5uZWwnLFxuICAgICAgbGFiZWw6XG4gICAgICAgIGZlYXR1cmUoJ0tBSVJPUycpIHx8IGZlYXR1cmUoJ0tBSVJPU19QVVNIX05PVElGSUNBVElPTicpXG4gICAgICAgICAgPyAnTG9jYWwgbm90aWZpY2F0aW9ucydcbiAgICAgICAgICA6ICdOb3RpZmljYXRpb25zJyxcbiAgICAgIHZhbHVlOiBnbG9iYWxDb25maWcucHJlZmVycmVkTm90aWZDaGFubmVsLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICAnYXV0bycsXG4gICAgICAgICdpdGVybTInLFxuICAgICAgICAndGVybWluYWxfYmVsbCcsXG4gICAgICAgICdpdGVybTJfd2l0aF9iZWxsJyxcbiAgICAgICAgJ2tpdHR5JyxcbiAgICAgICAgJ2dob3N0dHknLFxuICAgICAgICAnbm90aWZpY2F0aW9uc19kaXNhYmxlZCcsXG4gICAgICBdLFxuICAgICAgdHlwZTogJ2VudW0nLFxuICAgICAgb25DaGFuZ2Uobm90aWZDaGFubmVsOiBHbG9iYWxDb25maWdbJ3ByZWZlcnJlZE5vdGlmQ2hhbm5lbCddKSB7XG4gICAgICAgIHNhdmVHbG9iYWxDb25maWcoY3VycmVudCA9PiAoe1xuICAgICAgICAgIC4uLmN1cnJlbnQsXG4gICAgICAgICAgcHJlZmVycmVkTm90aWZDaGFubmVsOiBub3RpZkNoYW5uZWwsXG4gICAgICAgIH0pKVxuICAgICAgICBzZXRHbG9iYWxDb25maWcoe1xuICAgICAgICAgIC4uLmdldEdsb2JhbENvbmZpZygpLFxuICAgICAgICAgIHByZWZlcnJlZE5vdGlmQ2hhbm5lbDogbm90aWZDaGFubmVsLFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICB9LFxuICAgIC4uLihmZWF0dXJlKCdLQUlST1MnKSB8fCBmZWF0dXJlKCdLQUlST1NfUFVTSF9OT1RJRklDQVRJT04nKVxuICAgICAgPyBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICd0YXNrQ29tcGxldGVOb3RpZkVuYWJsZWQnLFxuICAgICAgICAgICAgbGFiZWw6ICdQdXNoIHdoZW4gaWRsZScsXG4gICAgICAgICAgICB2YWx1ZTogZ2xvYmFsQ29uZmlnLnRhc2tDb21wbGV0ZU5vdGlmRW5hYmxlZCA/PyBmYWxzZSxcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyBhcyBjb25zdCxcbiAgICAgICAgICAgIG9uQ2hhbmdlKHRhc2tDb21wbGV0ZU5vdGlmRW5hYmxlZDogYm9vbGVhbikge1xuICAgICAgICAgICAgICBzYXZlR2xvYmFsQ29uZmlnKGN1cnJlbnQgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50LFxuICAgICAgICAgICAgICAgIHRhc2tDb21wbGV0ZU5vdGlmRW5hYmxlZCxcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgIHNldEdsb2JhbENvbmZpZyh7XG4gICAgICAgICAgICAgICAgLi4uZ2V0R2xvYmFsQ29uZmlnKCksXG4gICAgICAgICAgICAgICAgdGFza0NvbXBsZXRlTm90aWZFbmFibGVkLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnaW5wdXROZWVkZWROb3RpZkVuYWJsZWQnLFxuICAgICAgICAgICAgbGFiZWw6ICdQdXNoIHdoZW4gaW5wdXQgbmVlZGVkJyxcbiAgICAgICAgICAgIHZhbHVlOiBnbG9iYWxDb25maWcuaW5wdXROZWVkZWROb3RpZkVuYWJsZWQgPz8gZmFsc2UsXG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicgYXMgY29uc3QsXG4gICAgICAgICAgICBvbkNoYW5nZShpbnB1dE5lZWRlZE5vdGlmRW5hYmxlZDogYm9vbGVhbikge1xuICAgICAgICAgICAgICBzYXZlR2xvYmFsQ29uZmlnKGN1cnJlbnQgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50LFxuICAgICAgICAgICAgICAgIGlucHV0TmVlZGVkTm90aWZFbmFibGVkLFxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgc2V0R2xvYmFsQ29uZmlnKHtcbiAgICAgICAgICAgICAgICAuLi5nZXRHbG9iYWxDb25maWcoKSxcbiAgICAgICAgICAgICAgICBpbnB1dE5lZWRlZE5vdGlmRW5hYmxlZCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ2FnZW50UHVzaE5vdGlmRW5hYmxlZCcsXG4gICAgICAgICAgICBsYWJlbDogJ1B1c2ggd2hlbiBDbGF1ZGUgZGVjaWRlcycsXG4gICAgICAgICAgICB2YWx1ZTogZ2xvYmFsQ29uZmlnLmFnZW50UHVzaE5vdGlmRW5hYmxlZCA/PyBmYWxzZSxcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyBhcyBjb25zdCxcbiAgICAgICAgICAgIG9uQ2hhbmdlKGFnZW50UHVzaE5vdGlmRW5hYmxlZDogYm9vbGVhbikge1xuICAgICAgICAgICAgICBzYXZlR2xvYmFsQ29uZmlnKGN1cnJlbnQgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50LFxuICAgICAgICAgICAgICAgIGFnZW50UHVzaE5vdGlmRW5hYmxlZCxcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgIHNldEdsb2JhbENvbmZpZyh7XG4gICAgICAgICAgICAgICAgLi4uZ2V0R2xvYmFsQ29uZmlnKCksXG4gICAgICAgICAgICAgICAgYWdlbnRQdXNoTm90aWZFbmFibGVkLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgICA6IFtdKSxcbiAgICB7XG4gICAgICBpZDogJ291dHB1dFN0eWxlJyxcbiAgICAgIGxhYmVsOiAnT3V0cHV0IHN0eWxlJyxcbiAgICAgIHZhbHVlOiBjdXJyZW50T3V0cHV0U3R5bGUsXG4gICAgICB0eXBlOiAnbWFuYWdlZEVudW0nIGFzIGNvbnN0LFxuICAgICAgb25DaGFuZ2U6ICgpID0+IHt9LCAvLyBoYW5kbGVkIGJ5IE91dHB1dFN0eWxlUGlja2VyIHN1Ym1lbnVcbiAgICB9LFxuICAgIC4uLihzaG93RGVmYXVsdFZpZXdQaWNrZXJcbiAgICAgID8gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnZGVmYXVsdFZpZXcnLFxuICAgICAgICAgICAgbGFiZWw6ICdXaGF0IHlvdSBzZWUgYnkgZGVmYXVsdCcsXG4gICAgICAgICAgICAvLyAnZGVmYXVsdCcgbWVhbnMgdGhlIHNldHRpbmcgaXMgdW5zZXQg4oCUIGN1cnJlbnRseSByZXNvbHZlcyB0b1xuICAgICAgICAgICAgLy8gdHJhbnNjcmlwdCAobWFpbi50c3ggZmFsbHMgdGhyb3VnaCB3aGVuIGRlZmF1bHRWaWV3ICE9PSAnY2hhdCcpLlxuICAgICAgICAgICAgLy8gU3RyaW5nKCkgbmFycm93cyB0aGUgY29uZGl0aW9uYWwtc2NoZW1hLXNwcmVhZCB1bmlvbiB0byBzdHJpbmcuXG4gICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgc2V0dGluZ3NEYXRhPy5kZWZhdWx0VmlldyA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyAnZGVmYXVsdCdcbiAgICAgICAgICAgICAgICA6IFN0cmluZyhzZXR0aW5nc0RhdGEuZGVmYXVsdFZpZXcpLFxuICAgICAgICAgICAgb3B0aW9uczogWyd0cmFuc2NyaXB0JywgJ2NoYXQnLCAnZGVmYXVsdCddLFxuICAgICAgICAgICAgdHlwZTogJ2VudW0nIGFzIGNvbnN0LFxuICAgICAgICAgICAgb25DaGFuZ2Uoc2VsZWN0ZWQ6IHN0cmluZykge1xuICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0VmlldyA9XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQgPT09ICdkZWZhdWx0J1xuICAgICAgICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgIDogKHNlbGVjdGVkIGFzICdjaGF0JyB8ICd0cmFuc2NyaXB0JylcbiAgICAgICAgICAgICAgdXBkYXRlU2V0dGluZ3NGb3JTb3VyY2UoJ2xvY2FsU2V0dGluZ3MnLCB7IGRlZmF1bHRWaWV3IH0pXG4gICAgICAgICAgICAgIHNldFNldHRpbmdzRGF0YShwcmV2ID0+ICh7IC4uLnByZXYsIGRlZmF1bHRWaWV3IH0pKVxuICAgICAgICAgICAgICBjb25zdCBuZXh0QnJpZWYgPSBkZWZhdWx0VmlldyA9PT0gJ2NoYXQnXG4gICAgICAgICAgICAgIHNldEFwcFN0YXRlKHByZXYgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwcmV2LmlzQnJpZWZPbmx5ID09PSBuZXh0QnJpZWYpIHJldHVybiBwcmV2XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldiwgaXNCcmllZk9ubHk6IG5leHRCcmllZiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC8vIEtlZXAgdXNlck1zZ09wdEluIGluIHN5bmMgc28gdGhlIHRvb2wgbGlzdCBmb2xsb3dzIHRoZSB2aWV3LlxuICAgICAgICAgICAgICAvLyBUd28td2F5IG5vdyAoc2FtZSBhcyAvYnJpZWYpIOKAlCBhY2NlcHRpbmcgYSBjYWNoZSBpbnZhbGlkYXRpb25cbiAgICAgICAgICAgICAgLy8gaXMgYmV0dGVyIHRoYW4gbGVhdmluZyB0aGUgdG9vbCBvbiBhZnRlciBzd2l0Y2hpbmcgYXdheS5cbiAgICAgICAgICAgICAgLy8gUmV2ZXJ0ZWQgb24gRXNjYXBlIHZpYSBpbml0aWFsVXNlck1zZ09wdEluIHNuYXBzaG90LlxuICAgICAgICAgICAgICBzZXRVc2VyTXNnT3B0SW4obmV4dEJyaWVmKVxuICAgICAgICAgICAgICBzZXRDaGFuZ2VzKHByZXYgPT4gKHsgLi4ucHJldiwgJ0RlZmF1bHQgdmlldyc6IHNlbGVjdGVkIH0pKVxuICAgICAgICAgICAgICBsb2dFdmVudCgndGVuZ3VfZGVmYXVsdF92aWV3X3NldHRpbmdfY2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogKGRlZmF1bHRWaWV3ID8/XG4gICAgICAgICAgICAgICAgICAndW5zZXQnKSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgICA6IFtdKSxcbiAgICB7XG4gICAgICBpZDogJ2xhbmd1YWdlJyxcbiAgICAgIGxhYmVsOiAnTGFuZ3VhZ2UnLFxuICAgICAgdmFsdWU6IGN1cnJlbnRMYW5ndWFnZSA/PyAnRGVmYXVsdCAoRW5nbGlzaCknLFxuICAgICAgdHlwZTogJ21hbmFnZWRFbnVtJyBhcyBjb25zdCxcbiAgICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSwgLy8gaGFuZGxlZCBieSBMYW5ndWFnZVBpY2tlciBzdWJtZW51XG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2VkaXRvck1vZGUnLFxuICAgICAgbGFiZWw6ICdFZGl0b3IgbW9kZScsXG4gICAgICAvLyBDb252ZXJ0ICdlbWFjcycgdG8gJ25vcm1hbCcgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICAgIHZhbHVlOlxuICAgICAgICBnbG9iYWxDb25maWcuZWRpdG9yTW9kZSA9PT0gJ2VtYWNzJ1xuICAgICAgICAgID8gJ25vcm1hbCdcbiAgICAgICAgICA6IGdsb2JhbENvbmZpZy5lZGl0b3JNb2RlIHx8ICdub3JtYWwnLFxuICAgICAgb3B0aW9uczogWydub3JtYWwnLCAndmltJ10sXG4gICAgICB0eXBlOiAnZW51bScsXG4gICAgICBvbkNoYW5nZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHNhdmVHbG9iYWxDb25maWcoY3VycmVudCA9PiAoe1xuICAgICAgICAgIC4uLmN1cnJlbnQsXG4gICAgICAgICAgZWRpdG9yTW9kZTogdmFsdWUgYXMgR2xvYmFsQ29uZmlnWydlZGl0b3JNb2RlJ10sXG4gICAgICAgIH0pKVxuICAgICAgICBzZXRHbG9iYWxDb25maWcoe1xuICAgICAgICAgIC4uLmdldEdsb2JhbENvbmZpZygpLFxuICAgICAgICAgIGVkaXRvck1vZGU6IHZhbHVlIGFzIEdsb2JhbENvbmZpZ1snZWRpdG9yTW9kZSddLFxuICAgICAgICB9KVxuXG4gICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9lZGl0b3JfbW9kZV9jaGFuZ2VkJywge1xuICAgICAgICAgIG1vZGU6IHZhbHVlIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgICAgc291cmNlOlxuICAgICAgICAgICAgJ2NvbmZpZ19wYW5lbCcgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3ByU3RhdHVzRm9vdGVyRW5hYmxlZCcsXG4gICAgICBsYWJlbDogJ1Nob3cgUFIgc3RhdHVzIGZvb3RlcicsXG4gICAgICB2YWx1ZTogZ2xvYmFsQ29uZmlnLnByU3RhdHVzRm9vdGVyRW5hYmxlZCA/PyB0cnVlLFxuICAgICAgdHlwZTogJ2Jvb2xlYW4nIGFzIGNvbnN0LFxuICAgICAgb25DaGFuZ2UoZW5hYmxlZDogYm9vbGVhbikge1xuICAgICAgICBzYXZlR2xvYmFsQ29uZmlnKGN1cnJlbnQgPT4ge1xuICAgICAgICAgIGlmIChjdXJyZW50LnByU3RhdHVzRm9vdGVyRW5hYmxlZCA9PT0gZW5hYmxlZCkgcmV0dXJuIGN1cnJlbnRcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uY3VycmVudCxcbiAgICAgICAgICAgIHByU3RhdHVzRm9vdGVyRW5hYmxlZDogZW5hYmxlZCxcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHNldEdsb2JhbENvbmZpZyh7XG4gICAgICAgICAgLi4uZ2V0R2xvYmFsQ29uZmlnKCksXG4gICAgICAgICAgcHJTdGF0dXNGb290ZXJFbmFibGVkOiBlbmFibGVkLFxuICAgICAgICB9KVxuICAgICAgICBsb2dFdmVudCgndGVuZ3VfcHJfc3RhdHVzX2Zvb3Rlcl9zZXR0aW5nX2NoYW5nZWQnLCB7XG4gICAgICAgICAgZW5hYmxlZCxcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ21vZGVsJyxcbiAgICAgIGxhYmVsOiAnTW9kZWwnLFxuICAgICAgdmFsdWU6IG1haW5Mb29wTW9kZWwgPT09IG51bGwgPyAnRGVmYXVsdCAocmVjb21tZW5kZWQpJyA6IG1haW5Mb29wTW9kZWwsXG4gICAgICB0eXBlOiAnbWFuYWdlZEVudW0nIGFzIGNvbnN0LFxuICAgICAgb25DaGFuZ2U6IG9uQ2hhbmdlTWFpbk1vZGVsQ29uZmlnLFxuICAgIH0sXG4gICAgLi4uKGlzQ29ubmVjdGVkVG9JZGVcbiAgICAgID8gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnZGlmZlRvb2wnLFxuICAgICAgICAgICAgbGFiZWw6ICdEaWZmIHRvb2wnLFxuICAgICAgICAgICAgdmFsdWU6IGdsb2JhbENvbmZpZy5kaWZmVG9vbCA/PyAnYXV0bycsXG4gICAgICAgICAgICBvcHRpb25zOiBbJ3Rlcm1pbmFsJywgJ2F1dG8nXSxcbiAgICAgICAgICAgIHR5cGU6ICdlbnVtJyBhcyBjb25zdCxcbiAgICAgICAgICAgIG9uQ2hhbmdlKGRpZmZUb29sOiBzdHJpbmcpIHtcbiAgICAgICAgICAgICAgc2F2ZUdsb2JhbENvbmZpZyhjdXJyZW50ID0+ICh7XG4gICAgICAgICAgICAgICAgLi4uY3VycmVudCxcbiAgICAgICAgICAgICAgICBkaWZmVG9vbDogZGlmZlRvb2wgYXMgR2xvYmFsQ29uZmlnWydkaWZmVG9vbCddLFxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgc2V0R2xvYmFsQ29uZmlnKHtcbiAgICAgICAgICAgICAgICAuLi5nZXRHbG9iYWxDb25maWcoKSxcbiAgICAgICAgICAgICAgICBkaWZmVG9vbDogZGlmZlRvb2wgYXMgR2xvYmFsQ29uZmlnWydkaWZmVG9vbCddLFxuICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9kaWZmX3Rvb2xfY2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgICB0b29sOiBkaWZmVG9vbCBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgICAgICAgICAgIHNvdXJjZTpcbiAgICAgICAgICAgICAgICAgICdjb25maWdfcGFuZWwnIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICAgIDogW10pLFxuICAgIC4uLighaXNTdXBwb3J0ZWRUZXJtaW5hbCgpXG4gICAgICA/IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ2F1dG9Db25uZWN0SWRlJyxcbiAgICAgICAgICAgIGxhYmVsOiAnQXV0by1jb25uZWN0IHRvIElERSAoZXh0ZXJuYWwgdGVybWluYWwpJyxcbiAgICAgICAgICAgIHZhbHVlOiBnbG9iYWxDb25maWcuYXV0b0Nvbm5lY3RJZGUgPz8gZmFsc2UsXG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicgYXMgY29uc3QsXG4gICAgICAgICAgICBvbkNoYW5nZShhdXRvQ29ubmVjdElkZTogYm9vbGVhbikge1xuICAgICAgICAgICAgICBzYXZlR2xvYmFsQ29uZmlnKGN1cnJlbnQgPT4gKHsgLi4uY3VycmVudCwgYXV0b0Nvbm5lY3RJZGUgfSkpXG4gICAgICAgICAgICAgIHNldEdsb2JhbENvbmZpZyh7IC4uLmdldEdsb2JhbENvbmZpZygpLCBhdXRvQ29ubmVjdElkZSB9KVxuXG4gICAgICAgICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9hdXRvX2Nvbm5lY3RfaWRlX2NoYW5nZWQnLCB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogYXV0b0Nvbm5lY3RJZGUsXG4gICAgICAgICAgICAgICAgc291cmNlOlxuICAgICAgICAgICAgICAgICAgJ2NvbmZpZ19wYW5lbCcgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgICAgOiBbXSksXG4gICAgLi4uKGlzU3VwcG9ydGVkVGVybWluYWwoKVxuICAgICAgPyBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICdhdXRvSW5zdGFsbElkZUV4dGVuc2lvbicsXG4gICAgICAgICAgICBsYWJlbDogJ0F1dG8taW5zdGFsbCBJREUgZXh0ZW5zaW9uJyxcbiAgICAgICAgICAgIHZhbHVlOiBnbG9iYWxDb25maWcuYXV0b0luc3RhbGxJZGVFeHRlbnNpb24gPz8gdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyBhcyBjb25zdCxcbiAgICAgICAgICAgIG9uQ2hhbmdlKGF1dG9JbnN0YWxsSWRlRXh0ZW5zaW9uOiBib29sZWFuKSB7XG4gICAgICAgICAgICAgIHNhdmVHbG9iYWxDb25maWcoY3VycmVudCA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLmN1cnJlbnQsXG4gICAgICAgICAgICAgICAgYXV0b0luc3RhbGxJZGVFeHRlbnNpb24sXG4gICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICBzZXRHbG9iYWxDb25maWcoeyAuLi5nZXRHbG9iYWxDb25maWcoKSwgYXV0b0luc3RhbGxJZGVFeHRlbnNpb24gfSlcblxuICAgICAgICAgICAgICBsb2dFdmVudCgndGVuZ3VfYXV0b19pbnN0YWxsX2lkZV9leHRlbnNpb25fY2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBhdXRvSW5zdGFsbElkZUV4dGVuc2lvbixcbiAgICAgICAgICAgICAgICBzb3VyY2U6XG4gICAgICAgICAgICAgICAgICAnY29uZmlnX3BhbmVsJyBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgICA6IFtdKSxcbiAgICB7XG4gICAgICBpZDogJ2NsYXVkZUluQ2hyb21lRGVmYXVsdEVuYWJsZWQnLFxuICAgICAgbGFiZWw6ICdDbGF1ZGUgaW4gQ2hyb21lIGVuYWJsZWQgYnkgZGVmYXVsdCcsXG4gICAgICB2YWx1ZTogZ2xvYmFsQ29uZmlnLmNsYXVkZUluQ2hyb21lRGVmYXVsdEVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIHR5cGU6ICdib29sZWFuJyBhcyBjb25zdCxcbiAgICAgIG9uQ2hhbmdlKGVuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc2F2ZUdsb2JhbENvbmZpZyhjdXJyZW50ID0+ICh7XG4gICAgICAgICAgLi4uY3VycmVudCxcbiAgICAgICAgICBjbGF1ZGVJbkNocm9tZURlZmF1bHRFbmFibGVkOiBlbmFibGVkLFxuICAgICAgICB9KSlcbiAgICAgICAgc2V0R2xvYmFsQ29uZmlnKHtcbiAgICAgICAgICAuLi5nZXRHbG9iYWxDb25maWcoKSxcbiAgICAgICAgICBjbGF1ZGVJbkNocm9tZURlZmF1bHRFbmFibGVkOiBlbmFibGVkLFxuICAgICAgICB9KVxuICAgICAgICBsb2dFdmVudCgndGVuZ3VfY2xhdWRlX2luX2Nocm9tZV9zZXR0aW5nX2NoYW5nZWQnLCB7XG4gICAgICAgICAgZW5hYmxlZCxcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBUZWFtbWF0ZSBtb2RlIChvbmx5IHNob3duIHdoZW4gYWdlbnQgc3dhcm1zIGFyZSBlbmFibGVkKVxuICAgIC4uLihpc0FnZW50U3dhcm1zRW5hYmxlZCgpXG4gICAgICA/ICgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2xpT3ZlcnJpZGUgPSBnZXRDbGlUZWFtbWF0ZU1vZGVPdmVycmlkZSgpXG4gICAgICAgICAgY29uc3QgbGFiZWwgPSBjbGlPdmVycmlkZVxuICAgICAgICAgICAgPyBgVGVhbW1hdGUgbW9kZSBbb3ZlcnJpZGRlbjogJHtjbGlPdmVycmlkZX1dYFxuICAgICAgICAgICAgOiAnVGVhbW1hdGUgbW9kZSdcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ3RlYW1tYXRlTW9kZScsXG4gICAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgICB2YWx1ZTogZ2xvYmFsQ29uZmlnLnRlYW1tYXRlTW9kZSA/PyAnYXV0bycsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IFsnYXV0bycsICd0bXV4JywgJ2luLXByb2Nlc3MnXSxcbiAgICAgICAgICAgICAgdHlwZTogJ2VudW0nIGFzIGNvbnN0LFxuICAgICAgICAgICAgICBvbkNoYW5nZShtb2RlOiBzdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBtb2RlICE9PSAnYXV0bycgJiZcbiAgICAgICAgICAgICAgICAgIG1vZGUgIT09ICd0bXV4JyAmJlxuICAgICAgICAgICAgICAgICAgbW9kZSAhPT0gJ2luLXByb2Nlc3MnXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQ2xlYXIgQ0xJIG92ZXJyaWRlIGFuZCBzZXQgbmV3IG1vZGUgKHBhc3MgbW9kZSB0byBhdm9pZCByYWNlIGNvbmRpdGlvbilcbiAgICAgICAgICAgICAgICBjbGVhckNsaVRlYW1tYXRlTW9kZU92ZXJyaWRlKG1vZGUpXG4gICAgICAgICAgICAgICAgc2F2ZUdsb2JhbENvbmZpZyhjdXJyZW50ID0+ICh7XG4gICAgICAgICAgICAgICAgICAuLi5jdXJyZW50LFxuICAgICAgICAgICAgICAgICAgdGVhbW1hdGVNb2RlOiBtb2RlLFxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgIHNldEdsb2JhbENvbmZpZyh7XG4gICAgICAgICAgICAgICAgICAuLi5nZXRHbG9iYWxDb25maWcoKSxcbiAgICAgICAgICAgICAgICAgIHRlYW1tYXRlTW9kZTogbW9kZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV90ZWFtbWF0ZV9tb2RlX2NoYW5nZWQnLCB7XG4gICAgICAgICAgICAgICAgICBtb2RlOiBtb2RlIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAndGVhbW1hdGVEZWZhdWx0TW9kZWwnLFxuICAgICAgICAgICAgICBsYWJlbDogJ0RlZmF1bHQgdGVhbW1hdGUgbW9kZWwnLFxuICAgICAgICAgICAgICB2YWx1ZTogdGVhbW1hdGVNb2RlbERpc3BsYXlTdHJpbmcoXG4gICAgICAgICAgICAgICAgZ2xvYmFsQ29uZmlnLnRlYW1tYXRlRGVmYXVsdE1vZGVsLFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICB0eXBlOiAnbWFuYWdlZEVudW0nIGFzIGNvbnN0LFxuICAgICAgICAgICAgICBvbkNoYW5nZSgpIHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdXG4gICAgICAgIH0pKClcbiAgICAgIDogW10pLFxuICAgIC8vIFJlbW90ZSBhdCBzdGFydHVwIHRvZ2dsZSDigJQgZ2F0ZWQgb24gYnVpbGQgZmxhZyArIEdyb3d0aEJvb2sgKyBwb2xpY3lcbiAgICAuLi4oZmVhdHVyZSgnQlJJREdFX01PREUnKSAmJiBpc0JyaWRnZUVuYWJsZWQoKVxuICAgICAgPyBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICdyZW1vdGVDb250cm9sQXRTdGFydHVwJyxcbiAgICAgICAgICAgIGxhYmVsOiAnRW5hYmxlIFJlbW90ZSBDb250cm9sIGZvciBhbGwgc2Vzc2lvbnMnLFxuICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgIGdsb2JhbENvbmZpZy5yZW1vdGVDb250cm9sQXRTdGFydHVwID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA/ICdkZWZhdWx0J1xuICAgICAgICAgICAgICAgIDogU3RyaW5nKGdsb2JhbENvbmZpZy5yZW1vdGVDb250cm9sQXRTdGFydHVwKSxcbiAgICAgICAgICAgIG9wdGlvbnM6IFsndHJ1ZScsICdmYWxzZScsICdkZWZhdWx0J10sXG4gICAgICAgICAgICB0eXBlOiAnZW51bScgYXMgY29uc3QsXG4gICAgICAgICAgICBvbkNoYW5nZShzZWxlY3RlZDogc3RyaW5nKSB7XG4gICAgICAgICAgICAgIGlmIChzZWxlY3RlZCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICAgICAgLy8gVW5zZXQgdGhlIGNvbmZpZyBrZXkgc28gaXQgZmFsbHMgYmFjayB0byB0aGUgcGxhdGZvcm0gZGVmYXVsdFxuICAgICAgICAgICAgICAgIHNhdmVHbG9iYWxDb25maWcoY3VycmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5yZW1vdGVDb250cm9sQXRTdGFydHVwID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50XG4gICAgICAgICAgICAgICAgICBjb25zdCBuZXh0ID0geyAuLi5jdXJyZW50IH1cbiAgICAgICAgICAgICAgICAgIGRlbGV0ZSBuZXh0LnJlbW90ZUNvbnRyb2xBdFN0YXJ0dXBcbiAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBzZXRHbG9iYWxDb25maWcoe1xuICAgICAgICAgICAgICAgICAgLi4uZ2V0R2xvYmFsQ29uZmlnKCksXG4gICAgICAgICAgICAgICAgICByZW1vdGVDb250cm9sQXRTdGFydHVwOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmFibGVkID0gc2VsZWN0ZWQgPT09ICd0cnVlJ1xuICAgICAgICAgICAgICAgIHNhdmVHbG9iYWxDb25maWcoY3VycmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5yZW1vdGVDb250cm9sQXRTdGFydHVwID09PSBlbmFibGVkKSByZXR1cm4gY3VycmVudFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uY3VycmVudCwgcmVtb3RlQ29udHJvbEF0U3RhcnR1cDogZW5hYmxlZCB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBzZXRHbG9iYWxDb25maWcoe1xuICAgICAgICAgICAgICAgICAgLi4uZ2V0R2xvYmFsQ29uZmlnKCksXG4gICAgICAgICAgICAgICAgICByZW1vdGVDb250cm9sQXRTdGFydHVwOiBlbmFibGVkLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gU3luYyB0byBBcHBTdGF0ZSBzbyB1c2VSZXBsQnJpZGdlIHJlYWN0cyBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICBjb25zdCByZXNvbHZlZCA9IGdldFJlbW90ZUNvbnRyb2xBdFN0YXJ0dXAoKVxuICAgICAgICAgICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBwcmV2LnJlcGxCcmlkZ2VFbmFibGVkID09PSByZXNvbHZlZCAmJlxuICAgICAgICAgICAgICAgICAgIXByZXYucmVwbEJyaWRnZU91dGJvdW5kT25seVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgICByZXBsQnJpZGdlRW5hYmxlZDogcmVzb2x2ZWQsXG4gICAgICAgICAgICAgICAgICByZXBsQnJpZGdlT3V0Ym91bmRPbmx5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICAgIDogW10pLFxuICAgIC4uLihzaG91bGRTaG93RXh0ZXJuYWxJbmNsdWRlc1RvZ2dsZVxuICAgICAgPyBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICdzaG93RXh0ZXJuYWxJbmNsdWRlc0RpYWxvZycsXG4gICAgICAgICAgICBsYWJlbDogJ0V4dGVybmFsIENMQVVERS5tZCBpbmNsdWRlcycsXG4gICAgICAgICAgICB2YWx1ZTogKCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcHJvamVjdENvbmZpZyA9IGdldEN1cnJlbnRQcm9qZWN0Q29uZmlnKClcbiAgICAgICAgICAgICAgaWYgKHByb2plY3RDb25maWcuaGFzQ2xhdWRlTWRFeHRlcm5hbEluY2x1ZGVzQXBwcm92ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3RydWUnXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdmYWxzZSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkoKSxcbiAgICAgICAgICAgIHR5cGU6ICdtYW5hZ2VkRW51bScgYXMgY29uc3QsXG4gICAgICAgICAgICBvbkNoYW5nZSgpIHtcbiAgICAgICAgICAgICAgLy8gV2lsbCBiZSBoYW5kbGVkIGJ5IHRvZ2dsZVNldHRpbmcgZnVuY3Rpb25cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgICAgOiBbXSksXG4gICAgLi4uKHByb2Nlc3MuZW52LkFOVEhST1BJQ19BUElfS0VZICYmICFpc1J1bm5pbmdPbkhvbWVzcGFjZSgpXG4gICAgICA/IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ2FwaUtleScsXG4gICAgICAgICAgICBsYWJlbDogKFxuICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICBVc2UgY3VzdG9tIEFQSSBrZXk6eycgJ31cbiAgICAgICAgICAgICAgICA8VGV4dCBib2xkPlxuICAgICAgICAgICAgICAgICAge25vcm1hbGl6ZUFwaUtleUZvckNvbmZpZyhwcm9jZXNzLmVudi5BTlRIUk9QSUNfQVBJX0tFWSl9XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgc2VhcmNoVGV4dDogJ1VzZSBjdXN0b20gQVBJIGtleScsXG4gICAgICAgICAgICB2YWx1ZTogQm9vbGVhbihcbiAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuQU5USFJPUElDX0FQSV9LRVkgJiZcbiAgICAgICAgICAgICAgICBnbG9iYWxDb25maWcuY3VzdG9tQXBpS2V5UmVzcG9uc2VzPy5hcHByb3ZlZD8uaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICBub3JtYWxpemVBcGlLZXlGb3JDb25maWcocHJvY2Vzcy5lbnYuQU5USFJPUElDX0FQSV9LRVkpLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nIGFzIGNvbnN0LFxuICAgICAgICAgICAgb25DaGFuZ2UodXNlQ3VzdG9tS2V5OiBib29sZWFuKSB7XG4gICAgICAgICAgICAgIHNhdmVHbG9iYWxDb25maWcoY3VycmVudCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZCA9IHsgLi4uY3VycmVudCB9XG4gICAgICAgICAgICAgICAgaWYgKCF1cGRhdGVkLmN1c3RvbUFwaUtleVJlc3BvbnNlcykge1xuICAgICAgICAgICAgICAgICAgdXBkYXRlZC5jdXN0b21BcGlLZXlSZXNwb25zZXMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGFwcHJvdmVkOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0ZWQ6IFtdLFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXVwZGF0ZWQuY3VzdG9tQXBpS2V5UmVzcG9uc2VzLmFwcHJvdmVkKSB7XG4gICAgICAgICAgICAgICAgICB1cGRhdGVkLmN1c3RvbUFwaUtleVJlc3BvbnNlcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4udXBkYXRlZC5jdXN0b21BcGlLZXlSZXNwb25zZXMsXG4gICAgICAgICAgICAgICAgICAgIGFwcHJvdmVkOiBbXSxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCF1cGRhdGVkLmN1c3RvbUFwaUtleVJlc3BvbnNlcy5yZWplY3RlZCkge1xuICAgICAgICAgICAgICAgICAgdXBkYXRlZC5jdXN0b21BcGlLZXlSZXNwb25zZXMgPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnVwZGF0ZWQuY3VzdG9tQXBpS2V5UmVzcG9uc2VzLFxuICAgICAgICAgICAgICAgICAgICByZWplY3RlZDogW10sXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5BTlRIUk9QSUNfQVBJX0tFWSkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdHJ1bmNhdGVkS2V5ID0gbm9ybWFsaXplQXBpS2V5Rm9yQ29uZmlnKFxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5BTlRIUk9QSUNfQVBJX0tFWSxcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGlmICh1c2VDdXN0b21LZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZC5jdXN0b21BcGlLZXlSZXNwb25zZXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4udXBkYXRlZC5jdXN0b21BcGlLZXlSZXNwb25zZXMsXG4gICAgICAgICAgICAgICAgICAgICAgYXBwcm92ZWQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZC5jdXN0b21BcGlLZXlSZXNwb25zZXMuYXBwcm92ZWQgPz8gW11cbiAgICAgICAgICAgICAgICAgICAgICAgICkuZmlsdGVyKGsgPT4gayAhPT0gdHJ1bmNhdGVkS2V5KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRydW5jYXRlZEtleSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHJlamVjdGVkOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkLmN1c3RvbUFwaUtleVJlc3BvbnNlcy5yZWplY3RlZCA/PyBbXVxuICAgICAgICAgICAgICAgICAgICAgICkuZmlsdGVyKGsgPT4gayAhPT0gdHJ1bmNhdGVkS2V5KSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZC5jdXN0b21BcGlLZXlSZXNwb25zZXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4udXBkYXRlZC5jdXN0b21BcGlLZXlSZXNwb25zZXMsXG4gICAgICAgICAgICAgICAgICAgICAgYXBwcm92ZWQ6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQuY3VzdG9tQXBpS2V5UmVzcG9uc2VzLmFwcHJvdmVkID8/IFtdXG4gICAgICAgICAgICAgICAgICAgICAgKS5maWx0ZXIoayA9PiBrICE9PSB0cnVuY2F0ZWRLZXkpLFxuICAgICAgICAgICAgICAgICAgICAgIHJlamVjdGVkOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQuY3VzdG9tQXBpS2V5UmVzcG9uc2VzLnJlamVjdGVkID8/IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICApLmZpbHRlcihrID0+IGsgIT09IHRydW5jYXRlZEtleSksXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnVuY2F0ZWRLZXksXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlZFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBzZXRHbG9iYWxDb25maWcoZ2V0R2xvYmFsQ29uZmlnKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICAgIDogW10pLFxuICBdXG5cbiAgLy8gRmlsdGVyIHNldHRpbmdzIGJhc2VkIG9uIHNlYXJjaCBxdWVyeVxuICBjb25zdCBmaWx0ZXJlZFNldHRpbmdzSXRlbXMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIXNlYXJjaFF1ZXJ5KSByZXR1cm4gc2V0dGluZ3NJdGVtc1xuICAgIGNvbnN0IGxvd2VyUXVlcnkgPSBzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpXG4gICAgcmV0dXJuIHNldHRpbmdzSXRlbXMuZmlsdGVyKHNldHRpbmcgPT4ge1xuICAgICAgaWYgKHNldHRpbmcuaWQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlclF1ZXJ5KSkgcmV0dXJuIHRydWVcbiAgICAgIGNvbnN0IHNlYXJjaGFibGVUZXh0ID1cbiAgICAgICAgJ3NlYXJjaFRleHQnIGluIHNldHRpbmcgPyBzZXR0aW5nLnNlYXJjaFRleHQgOiBzZXR0aW5nLmxhYmVsXG4gICAgICByZXR1cm4gc2VhcmNoYWJsZVRleHQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlclF1ZXJ5KVxuICAgIH0pXG4gIH0sIFtzZXR0aW5nc0l0ZW1zLCBzZWFyY2hRdWVyeV0pXG5cbiAgLy8gQWRqdXN0IHNlbGVjdGVkIGluZGV4IHdoZW4gZmlsdGVyZWQgbGlzdCBzaHJpbmtzLCBhbmQga2VlcCB0aGUgc2VsZWN0ZWRcbiAgLy8gaXRlbSB2aXNpYmxlIHdoZW4gbWF4VmlzaWJsZSBjaGFuZ2VzIChlLmcuLCB0ZXJtaW5hbCByZXNpemUpLlxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZEluZGV4ID49IGZpbHRlcmVkU2V0dGluZ3NJdGVtcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IG5ld0luZGV4ID0gTWF0aC5tYXgoMCwgZmlsdGVyZWRTZXR0aW5nc0l0ZW1zLmxlbmd0aCAtIDEpXG4gICAgICBzZXRTZWxlY3RlZEluZGV4KG5ld0luZGV4KVxuICAgICAgc2V0U2Nyb2xsT2Zmc2V0KE1hdGgubWF4KDAsIG5ld0luZGV4IC0gbWF4VmlzaWJsZSArIDEpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNldFNjcm9sbE9mZnNldChwcmV2ID0+IHtcbiAgICAgIGlmIChzZWxlY3RlZEluZGV4IDwgcHJldikgcmV0dXJuIHNlbGVjdGVkSW5kZXhcbiAgICAgIGlmIChzZWxlY3RlZEluZGV4ID49IHByZXYgKyBtYXhWaXNpYmxlKVxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRJbmRleCAtIG1heFZpc2libGUgKyAxXG4gICAgICByZXR1cm4gcHJldlxuICAgIH0pXG4gIH0sIFtmaWx0ZXJlZFNldHRpbmdzSXRlbXMubGVuZ3RoLCBzZWxlY3RlZEluZGV4LCBtYXhWaXNpYmxlXSlcblxuICAvLyBLZWVwIHRoZSBzZWxlY3RlZCBpdGVtIHZpc2libGUgd2l0aGluIHRoZSBzY3JvbGwgd2luZG93LlxuICAvLyBDYWxsZWQgc3luY2hyb25vdXNseSBmcm9tIG5hdmlnYXRpb24gaGFuZGxlcnMgdG8gYXZvaWQgYSByZW5kZXIgZnJhbWVcbiAgLy8gd2hlcmUgdGhlIHNlbGVjdGVkIGl0ZW0gZmFsbHMgb3V0c2lkZSB0aGUgdmlzaWJsZSB3aW5kb3cuXG4gIGNvbnN0IGFkanVzdFNjcm9sbE9mZnNldCA9IHVzZUNhbGxiYWNrKFxuICAgIChuZXdJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBzZXRTY3JvbGxPZmZzZXQocHJldiA9PiB7XG4gICAgICAgIGlmIChuZXdJbmRleCA8IHByZXYpIHJldHVybiBuZXdJbmRleFxuICAgICAgICBpZiAobmV3SW5kZXggPj0gcHJldiArIG1heFZpc2libGUpIHJldHVybiBuZXdJbmRleCAtIG1heFZpc2libGUgKyAxXG4gICAgICAgIHJldHVybiBwcmV2XG4gICAgICB9KVxuICAgIH0sXG4gICAgW21heFZpc2libGVdLFxuICApXG5cbiAgLy8gRW50ZXI6IGtlZXAgYWxsIGNoYW5nZXMgKGFscmVhZHkgcGVyc2lzdGVkIGJ5IG9uQ2hhbmdlIGhhbmRsZXJzKSwgY2xvc2VcbiAgLy8gd2l0aCBhIHN1bW1hcnkgb2Ygd2hhdCBjaGFuZ2VkLlxuICBjb25zdCBoYW5kbGVTYXZlQW5kQ2xvc2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgLy8gU3VibWVudSBoYW5kbGluZzogZWFjaCBzdWJtZW51IGhhcyBpdHMgb3duIEVudGVyL0VzYyDigJQgZG9uJ3QgY2xvc2VcbiAgICAvLyB0aGUgd2hvbGUgcGFuZWwgd2hpbGUgb25lIGlzIG9wZW4uXG4gICAgaWYgKHNob3dTdWJtZW51ICE9PSBudWxsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gTG9nIGFueSBjaGFuZ2VzIHRoYXQgd2VyZSBtYWRlXG4gICAgLy8gVE9ETzogTWFrZSB0aGVzZSBwcm9wZXIgbWVzc2FnZXNcbiAgICBjb25zdCBmb3JtYXR0ZWRDaGFuZ2VzOiBzdHJpbmdbXSA9IE9iamVjdC5lbnRyaWVzKGNoYW5nZXMpLm1hcChcbiAgICAgIChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2NvbmZpZ19jaGFuZ2VkJywge1xuICAgICAgICAgIGtleToga2V5IGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICB2YWx1ZSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gYFNldCAke2tleX0gdG8gJHtjaGFsay5ib2xkKHZhbHVlKX1gXG4gICAgICB9LFxuICAgIClcbiAgICAvLyBDaGVjayBmb3IgQVBJIGtleSBjaGFuZ2VzXG4gICAgLy8gT24gaG9tZXNwYWNlLCBBTlRIUk9QSUNfQVBJX0tFWSBpcyBwcmVzZXJ2ZWQgaW4gcHJvY2Vzcy5lbnYgZm9yIGNoaWxkXG4gICAgLy8gcHJvY2Vzc2VzIGJ1dCBpZ25vcmVkIGJ5IENsYXVkZSBDb2RlIGl0c2VsZiAoc2VlIGF1dGgudHMpLlxuICAgIGNvbnN0IGVmZmVjdGl2ZUFwaUtleSA9IGlzUnVubmluZ09uSG9tZXNwYWNlKClcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IHByb2Nlc3MuZW52LkFOVEhST1BJQ19BUElfS0VZXG4gICAgY29uc3QgaW5pdGlhbFVzaW5nQ3VzdG9tS2V5ID0gQm9vbGVhbihcbiAgICAgIGVmZmVjdGl2ZUFwaUtleSAmJlxuICAgICAgICBpbml0aWFsQ29uZmlnLmN1cnJlbnQuY3VzdG9tQXBpS2V5UmVzcG9uc2VzPy5hcHByb3ZlZD8uaW5jbHVkZXMoXG4gICAgICAgICAgbm9ybWFsaXplQXBpS2V5Rm9yQ29uZmlnKGVmZmVjdGl2ZUFwaUtleSksXG4gICAgICAgICksXG4gICAgKVxuICAgIGNvbnN0IGN1cnJlbnRVc2luZ0N1c3RvbUtleSA9IEJvb2xlYW4oXG4gICAgICBlZmZlY3RpdmVBcGlLZXkgJiZcbiAgICAgICAgZ2xvYmFsQ29uZmlnLmN1c3RvbUFwaUtleVJlc3BvbnNlcz8uYXBwcm92ZWQ/LmluY2x1ZGVzKFxuICAgICAgICAgIG5vcm1hbGl6ZUFwaUtleUZvckNvbmZpZyhlZmZlY3RpdmVBcGlLZXkpLFxuICAgICAgICApLFxuICAgIClcbiAgICBpZiAoaW5pdGlhbFVzaW5nQ3VzdG9tS2V5ICE9PSBjdXJyZW50VXNpbmdDdXN0b21LZXkpIHtcbiAgICAgIGZvcm1hdHRlZENoYW5nZXMucHVzaChcbiAgICAgICAgYCR7Y3VycmVudFVzaW5nQ3VzdG9tS2V5ID8gJ0VuYWJsZWQnIDogJ0Rpc2FibGVkJ30gY3VzdG9tIEFQSSBrZXlgLFxuICAgICAgKVxuICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2NvbmZpZ19jaGFuZ2VkJywge1xuICAgICAgICBrZXk6ICdlbnYuQU5USFJPUElDX0FQSV9LRVknIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgIHZhbHVlOlxuICAgICAgICAgIGN1cnJlbnRVc2luZ0N1c3RvbUtleSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKGdsb2JhbENvbmZpZy50aGVtZSAhPT0gaW5pdGlhbENvbmZpZy5jdXJyZW50LnRoZW1lKSB7XG4gICAgICBmb3JtYXR0ZWRDaGFuZ2VzLnB1c2goYFNldCB0aGVtZSB0byAke2NoYWxrLmJvbGQoZ2xvYmFsQ29uZmlnLnRoZW1lKX1gKVxuICAgIH1cbiAgICBpZiAoXG4gICAgICBnbG9iYWxDb25maWcucHJlZmVycmVkTm90aWZDaGFubmVsICE9PVxuICAgICAgaW5pdGlhbENvbmZpZy5jdXJyZW50LnByZWZlcnJlZE5vdGlmQ2hhbm5lbFxuICAgICkge1xuICAgICAgZm9ybWF0dGVkQ2hhbmdlcy5wdXNoKFxuICAgICAgICBgU2V0IG5vdGlmaWNhdGlvbnMgdG8gJHtjaGFsay5ib2xkKGdsb2JhbENvbmZpZy5wcmVmZXJyZWROb3RpZkNoYW5uZWwpfWAsXG4gICAgICApXG4gICAgfVxuICAgIGlmIChjdXJyZW50T3V0cHV0U3R5bGUgIT09IGluaXRpYWxPdXRwdXRTdHlsZS5jdXJyZW50KSB7XG4gICAgICBmb3JtYXR0ZWRDaGFuZ2VzLnB1c2goXG4gICAgICAgIGBTZXQgb3V0cHV0IHN0eWxlIHRvICR7Y2hhbGsuYm9sZChjdXJyZW50T3V0cHV0U3R5bGUpfWAsXG4gICAgICApXG4gICAgfVxuICAgIGlmIChjdXJyZW50TGFuZ3VhZ2UgIT09IGluaXRpYWxMYW5ndWFnZS5jdXJyZW50KSB7XG4gICAgICBmb3JtYXR0ZWRDaGFuZ2VzLnB1c2goXG4gICAgICAgIGBTZXQgcmVzcG9uc2UgbGFuZ3VhZ2UgdG8gJHtjaGFsay5ib2xkKGN1cnJlbnRMYW5ndWFnZSA/PyAnRGVmYXVsdCAoRW5nbGlzaCknKX1gLFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoZ2xvYmFsQ29uZmlnLmVkaXRvck1vZGUgIT09IGluaXRpYWxDb25maWcuY3VycmVudC5lZGl0b3JNb2RlKSB7XG4gICAgICBmb3JtYXR0ZWRDaGFuZ2VzLnB1c2goXG4gICAgICAgIGBTZXQgZWRpdG9yIG1vZGUgdG8gJHtjaGFsay5ib2xkKGdsb2JhbENvbmZpZy5lZGl0b3JNb2RlIHx8ICdlbWFjcycpfWAsXG4gICAgICApXG4gICAgfVxuICAgIGlmIChnbG9iYWxDb25maWcuZGlmZlRvb2wgIT09IGluaXRpYWxDb25maWcuY3VycmVudC5kaWZmVG9vbCkge1xuICAgICAgZm9ybWF0dGVkQ2hhbmdlcy5wdXNoKFxuICAgICAgICBgU2V0IGRpZmYgdG9vbCB0byAke2NoYWxrLmJvbGQoZ2xvYmFsQ29uZmlnLmRpZmZUb29sKX1gLFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoZ2xvYmFsQ29uZmlnLmF1dG9Db25uZWN0SWRlICE9PSBpbml0aWFsQ29uZmlnLmN1cnJlbnQuYXV0b0Nvbm5lY3RJZGUpIHtcbiAgICAgIGZvcm1hdHRlZENoYW5nZXMucHVzaChcbiAgICAgICAgYCR7Z2xvYmFsQ29uZmlnLmF1dG9Db25uZWN0SWRlID8gJ0VuYWJsZWQnIDogJ0Rpc2FibGVkJ30gYXV0by1jb25uZWN0IHRvIElERWAsXG4gICAgICApXG4gICAgfVxuICAgIGlmIChcbiAgICAgIGdsb2JhbENvbmZpZy5hdXRvSW5zdGFsbElkZUV4dGVuc2lvbiAhPT1cbiAgICAgIGluaXRpYWxDb25maWcuY3VycmVudC5hdXRvSW5zdGFsbElkZUV4dGVuc2lvblxuICAgICkge1xuICAgICAgZm9ybWF0dGVkQ2hhbmdlcy5wdXNoKFxuICAgICAgICBgJHtnbG9iYWxDb25maWcuYXV0b0luc3RhbGxJZGVFeHRlbnNpb24gPyAnRW5hYmxlZCcgOiAnRGlzYWJsZWQnfSBhdXRvLWluc3RhbGwgSURFIGV4dGVuc2lvbmAsXG4gICAgICApXG4gICAgfVxuICAgIGlmIChcbiAgICAgIGdsb2JhbENvbmZpZy5hdXRvQ29tcGFjdEVuYWJsZWQgIT09XG4gICAgICBpbml0aWFsQ29uZmlnLmN1cnJlbnQuYXV0b0NvbXBhY3RFbmFibGVkXG4gICAgKSB7XG4gICAgICBmb3JtYXR0ZWRDaGFuZ2VzLnB1c2goXG4gICAgICAgIGAke2dsb2JhbENvbmZpZy5hdXRvQ29tcGFjdEVuYWJsZWQgPyAnRW5hYmxlZCcgOiAnRGlzYWJsZWQnfSBhdXRvLWNvbXBhY3RgLFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoXG4gICAgICBnbG9iYWxDb25maWcucmVzcGVjdEdpdGlnbm9yZSAhPT0gaW5pdGlhbENvbmZpZy5jdXJyZW50LnJlc3BlY3RHaXRpZ25vcmVcbiAgICApIHtcbiAgICAgIGZvcm1hdHRlZENoYW5nZXMucHVzaChcbiAgICAgICAgYCR7Z2xvYmFsQ29uZmlnLnJlc3BlY3RHaXRpZ25vcmUgPyAnRW5hYmxlZCcgOiAnRGlzYWJsZWQnfSByZXNwZWN0IC5naXRpZ25vcmUgaW4gZmlsZSBwaWNrZXJgLFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoXG4gICAgICBnbG9iYWxDb25maWcuY29weUZ1bGxSZXNwb25zZSAhPT0gaW5pdGlhbENvbmZpZy5jdXJyZW50LmNvcHlGdWxsUmVzcG9uc2VcbiAgICApIHtcbiAgICAgIGZvcm1hdHRlZENoYW5nZXMucHVzaChcbiAgICAgICAgYCR7Z2xvYmFsQ29uZmlnLmNvcHlGdWxsUmVzcG9uc2UgPyAnRW5hYmxlZCcgOiAnRGlzYWJsZWQnfSBhbHdheXMgY29weSBmdWxsIHJlc3BvbnNlYCxcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKGdsb2JhbENvbmZpZy5jb3B5T25TZWxlY3QgIT09IGluaXRpYWxDb25maWcuY3VycmVudC5jb3B5T25TZWxlY3QpIHtcbiAgICAgIGZvcm1hdHRlZENoYW5nZXMucHVzaChcbiAgICAgICAgYCR7Z2xvYmFsQ29uZmlnLmNvcHlPblNlbGVjdCA/ICdFbmFibGVkJyA6ICdEaXNhYmxlZCd9IGNvcHkgb24gc2VsZWN0YCxcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKFxuICAgICAgZ2xvYmFsQ29uZmlnLnRlcm1pbmFsUHJvZ3Jlc3NCYXJFbmFibGVkICE9PVxuICAgICAgaW5pdGlhbENvbmZpZy5jdXJyZW50LnRlcm1pbmFsUHJvZ3Jlc3NCYXJFbmFibGVkXG4gICAgKSB7XG4gICAgICBmb3JtYXR0ZWRDaGFuZ2VzLnB1c2goXG4gICAgICAgIGAke2dsb2JhbENvbmZpZy50ZXJtaW5hbFByb2dyZXNzQmFyRW5hYmxlZCA/ICdFbmFibGVkJyA6ICdEaXNhYmxlZCd9IHRlcm1pbmFsIHByb2dyZXNzIGJhcmAsXG4gICAgICApXG4gICAgfVxuICAgIGlmIChcbiAgICAgIGdsb2JhbENvbmZpZy5zaG93U3RhdHVzSW5UZXJtaW5hbFRhYiAhPT1cbiAgICAgIGluaXRpYWxDb25maWcuY3VycmVudC5zaG93U3RhdHVzSW5UZXJtaW5hbFRhYlxuICAgICkge1xuICAgICAgZm9ybWF0dGVkQ2hhbmdlcy5wdXNoKFxuICAgICAgICBgJHtnbG9iYWxDb25maWcuc2hvd1N0YXR1c0luVGVybWluYWxUYWIgPyAnRW5hYmxlZCcgOiAnRGlzYWJsZWQnfSB0ZXJtaW5hbCB0YWIgc3RhdHVzYCxcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKFxuICAgICAgZ2xvYmFsQ29uZmlnLnNob3dUdXJuRHVyYXRpb24gIT09IGluaXRpYWxDb25maWcuY3VycmVudC5zaG93VHVybkR1cmF0aW9uXG4gICAgKSB7XG4gICAgICBmb3JtYXR0ZWRDaGFuZ2VzLnB1c2goXG4gICAgICAgIGAke2dsb2JhbENvbmZpZy5zaG93VHVybkR1cmF0aW9uID8gJ0VuYWJsZWQnIDogJ0Rpc2FibGVkJ30gdHVybiBkdXJhdGlvbmAsXG4gICAgICApXG4gICAgfVxuICAgIGlmIChcbiAgICAgIGdsb2JhbENvbmZpZy5yZW1vdGVDb250cm9sQXRTdGFydHVwICE9PVxuICAgICAgaW5pdGlhbENvbmZpZy5jdXJyZW50LnJlbW90ZUNvbnRyb2xBdFN0YXJ0dXBcbiAgICApIHtcbiAgICAgIGNvbnN0IHJlbW90ZUxhYmVsID1cbiAgICAgICAgZ2xvYmFsQ29uZmlnLnJlbW90ZUNvbnRyb2xBdFN0YXJ0dXAgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gJ1Jlc2V0IFJlbW90ZSBDb250cm9sIHRvIGRlZmF1bHQnXG4gICAgICAgICAgOiBgJHtnbG9iYWxDb25maWcucmVtb3RlQ29udHJvbEF0U3RhcnR1cCA/ICdFbmFibGVkJyA6ICdEaXNhYmxlZCd9IFJlbW90ZSBDb250cm9sIGZvciBhbGwgc2Vzc2lvbnNgXG4gICAgICBmb3JtYXR0ZWRDaGFuZ2VzLnB1c2gocmVtb3RlTGFiZWwpXG4gICAgfVxuICAgIGlmIChcbiAgICAgIHNldHRpbmdzRGF0YT8uYXV0b1VwZGF0ZXNDaGFubmVsICE9PVxuICAgICAgaW5pdGlhbFNldHRpbmdzRGF0YS5jdXJyZW50Py5hdXRvVXBkYXRlc0NoYW5uZWxcbiAgICApIHtcbiAgICAgIGZvcm1hdHRlZENoYW5nZXMucHVzaChcbiAgICAgICAgYFNldCBhdXRvLXVwZGF0ZSBjaGFubmVsIHRvICR7Y2hhbGsuYm9sZChzZXR0aW5nc0RhdGE/LmF1dG9VcGRhdGVzQ2hhbm5lbCA/PyAnbGF0ZXN0Jyl9YCxcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKGZvcm1hdHRlZENoYW5nZXMubGVuZ3RoID4gMCkge1xuICAgICAgb25DbG9zZShmb3JtYXR0ZWRDaGFuZ2VzLmpvaW4oJ1xcbicpKVxuICAgIH0gZWxzZSB7XG4gICAgICBvbkNsb3NlKCdDb25maWcgZGlhbG9nIGRpc21pc3NlZCcsIHsgZGlzcGxheTogJ3N5c3RlbScgfSlcbiAgICB9XG4gIH0sIFtcbiAgICBzaG93U3VibWVudSxcbiAgICBjaGFuZ2VzLFxuICAgIGdsb2JhbENvbmZpZyxcbiAgICBtYWluTG9vcE1vZGVsLFxuICAgIGN1cnJlbnRPdXRwdXRTdHlsZSxcbiAgICBjdXJyZW50TGFuZ3VhZ2UsXG4gICAgc2V0dGluZ3NEYXRhPy5hdXRvVXBkYXRlc0NoYW5uZWwsXG4gICAgaXNGYXN0TW9kZUVuYWJsZWQoKVxuICAgICAgPyAoc2V0dGluZ3NEYXRhIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5kZWZpbmVkKT8uZmFzdE1vZGVcbiAgICAgIDogdW5kZWZpbmVkLFxuICAgIG9uQ2xvc2UsXG4gIF0pXG5cbiAgLy8gUmVzdG9yZSBhbGwgc3RhdGUgc3RvcmVzIHRvIHRoZWlyIG1vdW50LXRpbWUgc25hcHNob3RzLiBDaGFuZ2VzIGFyZVxuICAvLyBhcHBsaWVkIHRvIGRpc2svQXBwU3RhdGUgaW1tZWRpYXRlbHkgb24gdG9nZ2xlLCBzbyBcImNhbmNlbFwiIG1lYW5zXG4gIC8vIGFjdGl2ZWx5IHdyaXRpbmcgdGhlIG9sZCB2YWx1ZXMgYmFjay5cbiAgY29uc3QgcmV2ZXJ0Q2hhbmdlcyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAvLyBUaGVtZTogcmVzdG9yZXMgVGhlbWVQcm92aWRlciBSZWFjdCBzdGF0ZS4gTXVzdCBydW4gYmVmb3JlIHRoZSBnbG9iYWxcbiAgICAvLyBjb25maWcgb3ZlcndyaXRlIHNpbmNlIHNldFRoZW1lIGludGVybmFsbHkgY2FsbHMgc2F2ZUdsb2JhbENvbmZpZyB3aXRoXG4gICAgLy8gYSBwYXJ0aWFsIHVwZGF0ZSDigJQgd2Ugd2FudCB0aGUgZnVsbCBzbmFwc2hvdCB0byBiZSB0aGUgbGFzdCB3cml0ZS5cbiAgICBpZiAodGhlbWVTZXR0aW5nICE9PSBpbml0aWFsVGhlbWVTZXR0aW5nLmN1cnJlbnQpIHtcbiAgICAgIHNldFRoZW1lKGluaXRpYWxUaGVtZVNldHRpbmcuY3VycmVudClcbiAgICB9XG4gICAgLy8gR2xvYmFsIGNvbmZpZzogZnVsbCBvdmVyd3JpdGUgZnJvbSBzbmFwc2hvdC4gc2F2ZUdsb2JhbENvbmZpZyBza2lwcyBpZlxuICAgIC8vIHRoZSByZXR1cm5lZCByZWYgZXF1YWxzIGN1cnJlbnQgKHRlc3QgbW9kZSBjaGVja3MgcmVmOyBwcm9kIHdyaXRlcyB0b1xuICAgIC8vIGRpc2sgYnV0IGNvbnRlbnQgaXMgaWRlbnRpY2FsKS5cbiAgICBzYXZlR2xvYmFsQ29uZmlnKCgpID0+IGluaXRpYWxDb25maWcuY3VycmVudClcbiAgICAvLyBTZXR0aW5ncyBmaWxlczogcmVzdG9yZSBlYWNoIGtleSBDb25maWcgbWF5IGhhdmUgdG91Y2hlZC4gdW5kZWZpbmVkXG4gICAgLy8gZGVsZXRlcyB0aGUga2V5ICh1cGRhdGVTZXR0aW5nc0ZvclNvdXJjZSBjdXN0b21pemVyIGF0IHNldHRpbmdzLnRzOjM2OCkuXG4gICAgY29uc3QgaWwgPSBpbml0aWFsTG9jYWxTZXR0aW5nc1xuICAgIHVwZGF0ZVNldHRpbmdzRm9yU291cmNlKCdsb2NhbFNldHRpbmdzJywge1xuICAgICAgc3Bpbm5lclRpcHNFbmFibGVkOiBpbD8uc3Bpbm5lclRpcHNFbmFibGVkLFxuICAgICAgcHJlZmVyc1JlZHVjZWRNb3Rpb246IGlsPy5wcmVmZXJzUmVkdWNlZE1vdGlvbixcbiAgICAgIGRlZmF1bHRWaWV3OiBpbD8uZGVmYXVsdFZpZXcsXG4gICAgICBvdXRwdXRTdHlsZTogaWw/Lm91dHB1dFN0eWxlLFxuICAgIH0pXG4gICAgY29uc3QgaXUgPSBpbml0aWFsVXNlclNldHRpbmdzXG4gICAgdXBkYXRlU2V0dGluZ3NGb3JTb3VyY2UoJ3VzZXJTZXR0aW5ncycsIHtcbiAgICAgIGFsd2F5c1RoaW5raW5nRW5hYmxlZDogaXU/LmFsd2F5c1RoaW5raW5nRW5hYmxlZCxcbiAgICAgIGZhc3RNb2RlOiBpdT8uZmFzdE1vZGUsXG4gICAgICBwcm9tcHRTdWdnZXN0aW9uRW5hYmxlZDogaXU/LnByb21wdFN1Z2dlc3Rpb25FbmFibGVkLFxuICAgICAgYXV0b1VwZGF0ZXNDaGFubmVsOiBpdT8uYXV0b1VwZGF0ZXNDaGFubmVsLFxuICAgICAgbWluaW11bVZlcnNpb246IGl1Py5taW5pbXVtVmVyc2lvbixcbiAgICAgIGxhbmd1YWdlOiBpdT8ubGFuZ3VhZ2UsXG4gICAgICAuLi4oZmVhdHVyZSgnVFJBTlNDUklQVF9DTEFTU0lGSUVSJylcbiAgICAgICAgPyB7XG4gICAgICAgICAgICB1c2VBdXRvTW9kZUR1cmluZ1BsYW46IChcbiAgICAgICAgICAgICAgaXUgYXMgeyB1c2VBdXRvTW9kZUR1cmluZ1BsYW4/OiBib29sZWFuIH0gfCB1bmRlZmluZWRcbiAgICAgICAgICAgICk/LnVzZUF1dG9Nb2RlRHVyaW5nUGxhbixcbiAgICAgICAgICB9XG4gICAgICAgIDoge30pLFxuICAgICAgLy8gVGhlbWVQaWNrZXIncyBDdHJsK1Qgd3JpdGVzIHRoaXMga2V5IGRpcmVjdGx5IOKAlCBpbmNsdWRlIGl0IHNvIHRoZVxuICAgICAgLy8gZGlzayBzdGF0ZSByZXZlcnRzIGFsb25nIHdpdGggdGhlIGluLW1lbW9yeSBBcHBTdGF0ZS5zZXR0aW5ncyByZXN0b3JlLlxuICAgICAgc3ludGF4SGlnaGxpZ2h0aW5nRGlzYWJsZWQ6IGl1Py5zeW50YXhIaWdobGlnaHRpbmdEaXNhYmxlZCxcbiAgICAgIC8vIHBlcm1pc3Npb25zOiB0aGUgZGVmYXVsdE1vZGUgb25DaGFuZ2UgKGFib3ZlKSBzcHJlYWRzIHRoZSBNRVJHRURcbiAgICAgIC8vIHNldHRpbmdzRGF0YS5wZXJtaXNzaW9ucyBpbnRvIHVzZXJTZXR0aW5ncyDigJQgcHJvamVjdC9wb2xpY3kgYWxsb3cvZGVueVxuICAgICAgLy8gYXJyYXlzIGNhbiBsZWFrIHRvIGRpc2suIFNwcmVhZCB0aGUgZnVsbCBpbml0aWFsIHNuYXBzaG90IHNvIHRoZVxuICAgICAgLy8gbWVyZ2VXaXRoIGFycmF5LWN1c3RvbWl6ZXIgKHNldHRpbmdzLnRzOjM3NSkgcmVwbGFjZXMgbGVha2VkIGFycmF5cy5cbiAgICAgIC8vIEV4cGxpY2l0bHkgaW5jbHVkZSBkZWZhdWx0TW9kZSBzbyB1bmRlZmluZWQgdHJpZ2dlcnMgdGhlIGN1c3RvbWl6ZXInc1xuICAgICAgLy8gZGVsZXRlIHBhdGggZXZlbiB3aGVuIGl1LnBlcm1pc3Npb25zIGxhY2tzIHRoYXQga2V5LlxuICAgICAgcGVybWlzc2lvbnM6XG4gICAgICAgIGl1Py5wZXJtaXNzaW9ucyA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IHsgLi4uaXUucGVybWlzc2lvbnMsIGRlZmF1bHRNb2RlOiBpdS5wZXJtaXNzaW9ucy5kZWZhdWx0TW9kZSB9LFxuICAgIH0pXG4gICAgLy8gQXBwU3RhdGU6IGJhdGNoLXJlc3RvcmUgYWxsIHBvc3NpYmx5LXRvdWNoZWQgZmllbGRzLlxuICAgIGNvbnN0IGlhID0gaW5pdGlhbEFwcFN0YXRlXG4gICAgc2V0QXBwU3RhdGUocHJldiA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIG1haW5Mb29wTW9kZWw6IGlhLm1haW5Mb29wTW9kZWwsXG4gICAgICBtYWluTG9vcE1vZGVsRm9yU2Vzc2lvbjogaWEubWFpbkxvb3BNb2RlbEZvclNlc3Npb24sXG4gICAgICB2ZXJib3NlOiBpYS52ZXJib3NlLFxuICAgICAgdGhpbmtpbmdFbmFibGVkOiBpYS50aGlua2luZ0VuYWJsZWQsXG4gICAgICBmYXN0TW9kZTogaWEuZmFzdE1vZGUsXG4gICAgICBwcm9tcHRTdWdnZXN0aW9uRW5hYmxlZDogaWEucHJvbXB0U3VnZ2VzdGlvbkVuYWJsZWQsXG4gICAgICBpc0JyaWVmT25seTogaWEuaXNCcmllZk9ubHksXG4gICAgICByZXBsQnJpZGdlRW5hYmxlZDogaWEucmVwbEJyaWRnZUVuYWJsZWQsXG4gICAgICByZXBsQnJpZGdlT3V0Ym91bmRPbmx5OiBpYS5yZXBsQnJpZGdlT3V0Ym91bmRPbmx5LFxuICAgICAgc2V0dGluZ3M6IGlhLnNldHRpbmdzLFxuICAgICAgLy8gUmVjb25jaWxlIGF1dG8tbW9kZSBzdGF0ZSBhZnRlciB1c2VBdXRvTW9kZUR1cmluZ1BsYW4gcmV2ZXJ0IGFib3ZlIOKAlFxuICAgICAgLy8gdGhlIG9uQ2hhbmdlIGhhbmRsZXIgbWF5IGhhdmUgYWN0aXZhdGVkL2RlYWN0aXZhdGVkIGF1dG8gbWlkLXBsYW4uXG4gICAgICB0b29sUGVybWlzc2lvbkNvbnRleHQ6IHRyYW5zaXRpb25QbGFuQXV0b01vZGUocHJldi50b29sUGVybWlzc2lvbkNvbnRleHQpLFxuICAgIH0pKVxuICAgIC8vIEJvb3RzdHJhcCBzdGF0ZTogcmVzdG9yZSB1c2VyTXNnT3B0SW4uIE9ubHkgdG91Y2hlZCBieSB0aGUgZGVmYXVsdFZpZXdcbiAgICAvLyBvbkNoYW5nZSBhYm92ZSwgc28gbm8gZmVhdHVyZSgpIGd1YXJkIG5lZWRlZCBoZXJlICh0aGF0IHBhdGggb25seVxuICAgIC8vIGV4aXN0cyB3aGVuIHNob3dEZWZhdWx0Vmlld1BpY2tlciBpcyB0cnVlKS5cbiAgICBpZiAoZ2V0VXNlck1zZ09wdEluKCkgIT09IGluaXRpYWxVc2VyTXNnT3B0SW4pIHtcbiAgICAgIHNldFVzZXJNc2dPcHRJbihpbml0aWFsVXNlck1zZ09wdEluKVxuICAgIH1cbiAgfSwgW1xuICAgIHRoZW1lU2V0dGluZyxcbiAgICBzZXRUaGVtZSxcbiAgICBpbml0aWFsTG9jYWxTZXR0aW5ncyxcbiAgICBpbml0aWFsVXNlclNldHRpbmdzLFxuICAgIGluaXRpYWxBcHBTdGF0ZSxcbiAgICBpbml0aWFsVXNlck1zZ09wdEluLFxuICAgIHNldEFwcFN0YXRlLFxuICBdKVxuXG4gIC8vIEVzY2FwZTogcmV2ZXJ0IGFsbCBjaGFuZ2VzIChpZiBhbnkpIGFuZCBjbG9zZS5cbiAgY29uc3QgaGFuZGxlRXNjYXBlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChzaG93U3VibWVudSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChpc0RpcnR5LmN1cnJlbnQpIHtcbiAgICAgIHJldmVydENoYW5nZXMoKVxuICAgIH1cbiAgICBvbkNsb3NlKCdDb25maWcgZGlhbG9nIGRpc21pc3NlZCcsIHsgZGlzcGxheTogJ3N5c3RlbScgfSlcbiAgfSwgW3Nob3dTdWJtZW51LCByZXZlcnRDaGFuZ2VzLCBvbkNsb3NlXSlcblxuICAvLyBEaXNhYmxlIHdoZW4gc3VibWVudSBpcyBvcGVuIHNvIHRoZSBzdWJtZW51J3MgRGlhbG9nIGhhbmRsZXMgRVNDLCBhbmQgaW5cbiAgLy8gc2VhcmNoIG1vZGUgc28gdGhlIG9uS2V5RG93biBoYW5kbGVyICh3aGljaCBjbGVhcnMtdGhlbi1leGl0cyBzZWFyY2gpXG4gIC8vIHdpbnMg4oCUIG90aGVyd2lzZSBFc2NhcGUgaW4gc2VhcmNoIHdvdWxkIGp1bXAgc3RyYWlnaHQgdG8gcmV2ZXJ0K2Nsb3NlLlxuICB1c2VLZXliaW5kaW5nKCdjb25maXJtOm5vJywgaGFuZGxlRXNjYXBlLCB7XG4gICAgY29udGV4dDogJ1NldHRpbmdzJyxcbiAgICBpc0FjdGl2ZTogc2hvd1N1Ym1lbnUgPT09IG51bGwgJiYgIWlzU2VhcmNoTW9kZSAmJiAhaGVhZGVyRm9jdXNlZCxcbiAgfSlcbiAgLy8gU2F2ZS1hbmQtY2xvc2UgZmlyZXMgb24gRW50ZXIgb25seSB3aGVuIG5vdCBpbiBzZWFyY2ggbW9kZSAoRW50ZXIgdGhlcmVcbiAgLy8gZXhpdHMgc2VhcmNoIHRvIHRoZSBsaXN0IOKAlCBzZWUgdGhlIGlzU2VhcmNoTW9kZSBicmFuY2ggaW4gaGFuZGxlS2V5RG93bikuXG4gIHVzZUtleWJpbmRpbmcoJ3NldHRpbmdzOmNsb3NlJywgaGFuZGxlU2F2ZUFuZENsb3NlLCB7XG4gICAgY29udGV4dDogJ1NldHRpbmdzJyxcbiAgICBpc0FjdGl2ZTogc2hvd1N1Ym1lbnUgPT09IG51bGwgJiYgIWlzU2VhcmNoTW9kZSAmJiAhaGVhZGVyRm9jdXNlZCxcbiAgfSlcblxuICAvLyBTZXR0aW5ncyBuYXZpZ2F0aW9uIGFuZCB0b2dnbGUgYWN0aW9ucyB2aWEgY29uZmlndXJhYmxlIGtleWJpbmRpbmdzLlxuICAvLyBPbmx5IGFjdGl2ZSB3aGVuIG5vdCBpbiBzZWFyY2ggbW9kZSBhbmQgbm8gc3VibWVudSBpcyBvcGVuLlxuICBjb25zdCB0b2dnbGVTZXR0aW5nID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHNldHRpbmcgPSBmaWx0ZXJlZFNldHRpbmdzSXRlbXNbc2VsZWN0ZWRJbmRleF1cbiAgICBpZiAoIXNldHRpbmcgfHwgIXNldHRpbmcub25DaGFuZ2UpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChzZXR0aW5nLnR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgaXNEaXJ0eS5jdXJyZW50ID0gdHJ1ZVxuICAgICAgc2V0dGluZy5vbkNoYW5nZSghc2V0dGluZy52YWx1ZSlcbiAgICAgIGlmIChzZXR0aW5nLmlkID09PSAndGhpbmtpbmdFbmFibGVkJykge1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9ICFzZXR0aW5nLnZhbHVlXG4gICAgICAgIGNvbnN0IGJhY2tUb0luaXRpYWwgPSBuZXdWYWx1ZSA9PT0gaW5pdGlhbFRoaW5raW5nRW5hYmxlZC5jdXJyZW50XG4gICAgICAgIGlmIChiYWNrVG9Jbml0aWFsKSB7XG4gICAgICAgICAgc2V0U2hvd1RoaW5raW5nV2FybmluZyhmYWxzZSlcbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1lc3NhZ2VzLnNvbWUobSA9PiBtLnR5cGUgPT09ICdhc3Npc3RhbnQnKSkge1xuICAgICAgICAgIHNldFNob3dUaGlua2luZ1dhcm5pbmcodHJ1ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgc2V0dGluZy5pZCA9PT0gJ3RoZW1lJyB8fFxuICAgICAgc2V0dGluZy5pZCA9PT0gJ21vZGVsJyB8fFxuICAgICAgc2V0dGluZy5pZCA9PT0gJ3RlYW1tYXRlRGVmYXVsdE1vZGVsJyB8fFxuICAgICAgc2V0dGluZy5pZCA9PT0gJ3Nob3dFeHRlcm5hbEluY2x1ZGVzRGlhbG9nJyB8fFxuICAgICAgc2V0dGluZy5pZCA9PT0gJ291dHB1dFN0eWxlJyB8fFxuICAgICAgc2V0dGluZy5pZCA9PT0gJ2xhbmd1YWdlJ1xuICAgICkge1xuICAgICAgLy8gbWFuYWdlZEVudW0gaXRlbXMgb3BlbiBhIHN1Ym1lbnUg4oCUIGlzRGlydHkgaXMgc2V0IGJ5IHRoZSBzdWJtZW51J3NcbiAgICAgIC8vIGNvbXBsZXRpb24gY2FsbGJhY2ssIG5vdCBoZXJlIChzdWJtZW51IG1heSBiZSBjYW5jZWxsZWQpLlxuICAgICAgc3dpdGNoIChzZXR0aW5nLmlkKSB7XG4gICAgICAgIGNhc2UgJ3RoZW1lJzpcbiAgICAgICAgICBzZXRTaG93U3VibWVudSgnVGhlbWUnKVxuICAgICAgICAgIHNldFRhYnNIaWRkZW4odHJ1ZSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgY2FzZSAnbW9kZWwnOlxuICAgICAgICAgIHNldFNob3dTdWJtZW51KCdNb2RlbCcpXG4gICAgICAgICAgc2V0VGFic0hpZGRlbih0cnVlKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICBjYXNlICd0ZWFtbWF0ZURlZmF1bHRNb2RlbCc6XG4gICAgICAgICAgc2V0U2hvd1N1Ym1lbnUoJ1RlYW1tYXRlTW9kZWwnKVxuICAgICAgICAgIHNldFRhYnNIaWRkZW4odHJ1ZSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgY2FzZSAnc2hvd0V4dGVybmFsSW5jbHVkZXNEaWFsb2cnOlxuICAgICAgICAgIHNldFNob3dTdWJtZW51KCdFeHRlcm5hbEluY2x1ZGVzJylcbiAgICAgICAgICBzZXRUYWJzSGlkZGVuKHRydWUpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIGNhc2UgJ291dHB1dFN0eWxlJzpcbiAgICAgICAgICBzZXRTaG93U3VibWVudSgnT3V0cHV0U3R5bGUnKVxuICAgICAgICAgIHNldFRhYnNIaWRkZW4odHJ1ZSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgY2FzZSAnbGFuZ3VhZ2UnOlxuICAgICAgICAgIHNldFNob3dTdWJtZW51KCdMYW5ndWFnZScpXG4gICAgICAgICAgc2V0VGFic0hpZGRlbih0cnVlKVxuICAgICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzZXR0aW5nLmlkID09PSAnYXV0b1VwZGF0ZXNDaGFubmVsJykge1xuICAgICAgaWYgKGF1dG9VcGRhdGVyRGlzYWJsZWRSZWFzb24pIHtcbiAgICAgICAgLy8gQXV0by11cGRhdGVzIGFyZSBkaXNhYmxlZCAtIHNob3cgZW5hYmxlIGRpYWxvZyBpbnN0ZWFkXG4gICAgICAgIHNldFNob3dTdWJtZW51KCdFbmFibGVBdXRvVXBkYXRlcycpXG4gICAgICAgIHNldFRhYnNIaWRkZW4odHJ1ZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCBjdXJyZW50Q2hhbm5lbCA9IHNldHRpbmdzRGF0YT8uYXV0b1VwZGF0ZXNDaGFubmVsID8/ICdsYXRlc3QnXG4gICAgICBpZiAoY3VycmVudENoYW5uZWwgPT09ICdsYXRlc3QnKSB7XG4gICAgICAgIC8vIFN3aXRjaGluZyB0byBzdGFibGUgLSBzaG93IGRvd25ncmFkZSBkaWFsb2dcbiAgICAgICAgc2V0U2hvd1N1Ym1lbnUoJ0NoYW5uZWxEb3duZ3JhZGUnKVxuICAgICAgICBzZXRUYWJzSGlkZGVuKHRydWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTd2l0Y2hpbmcgdG8gbGF0ZXN0IC0ganVzdCBkbyBpdCBhbmQgY2xlYXIgbWluaW11bVZlcnNpb25cbiAgICAgICAgaXNEaXJ0eS5jdXJyZW50ID0gdHJ1ZVxuICAgICAgICB1cGRhdGVTZXR0aW5nc0ZvclNvdXJjZSgndXNlclNldHRpbmdzJywge1xuICAgICAgICAgIGF1dG9VcGRhdGVzQ2hhbm5lbDogJ2xhdGVzdCcsXG4gICAgICAgICAgbWluaW11bVZlcnNpb246IHVuZGVmaW5lZCxcbiAgICAgICAgfSlcbiAgICAgICAgc2V0U2V0dGluZ3NEYXRhKHByZXYgPT4gKHtcbiAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgIGF1dG9VcGRhdGVzQ2hhbm5lbDogJ2xhdGVzdCcsXG4gICAgICAgICAgbWluaW11bVZlcnNpb246IHVuZGVmaW5lZCxcbiAgICAgICAgfSkpXG4gICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9hdXRvdXBkYXRlX2NoYW5uZWxfY2hhbmdlZCcsIHtcbiAgICAgICAgICBjaGFubmVsOlxuICAgICAgICAgICAgJ2xhdGVzdCcgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChzZXR0aW5nLnR5cGUgPT09ICdlbnVtJykge1xuICAgICAgaXNEaXJ0eS5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gc2V0dGluZy5vcHRpb25zLmluZGV4T2Yoc2V0dGluZy52YWx1ZSlcbiAgICAgIGNvbnN0IG5leHRJbmRleCA9IChjdXJyZW50SW5kZXggKyAxKSAlIHNldHRpbmcub3B0aW9ucy5sZW5ndGhcbiAgICAgIHNldHRpbmcub25DaGFuZ2Uoc2V0dGluZy5vcHRpb25zW25leHRJbmRleF0hKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICB9LCBbXG4gICAgYXV0b1VwZGF0ZXJEaXNhYmxlZFJlYXNvbixcbiAgICBmaWx0ZXJlZFNldHRpbmdzSXRlbXMsXG4gICAgc2VsZWN0ZWRJbmRleCxcbiAgICBzZXR0aW5nc0RhdGE/LmF1dG9VcGRhdGVzQ2hhbm5lbCxcbiAgICBzZXRUYWJzSGlkZGVuLFxuICBdKVxuXG4gIGNvbnN0IG1vdmVTZWxlY3Rpb24gPSAoZGVsdGE6IC0xIHwgMSk6IHZvaWQgPT4ge1xuICAgIHNldFNob3dUaGlua2luZ1dhcm5pbmcoZmFsc2UpXG4gICAgY29uc3QgbmV3SW5kZXggPSBNYXRoLm1heChcbiAgICAgIDAsXG4gICAgICBNYXRoLm1pbihmaWx0ZXJlZFNldHRpbmdzSXRlbXMubGVuZ3RoIC0gMSwgc2VsZWN0ZWRJbmRleCArIGRlbHRhKSxcbiAgICApXG4gICAgc2V0U2VsZWN0ZWRJbmRleChuZXdJbmRleClcbiAgICBhZGp1c3RTY3JvbGxPZmZzZXQobmV3SW5kZXgpXG4gIH1cblxuICB1c2VLZXliaW5kaW5ncyhcbiAgICB7XG4gICAgICAnc2VsZWN0OnByZXZpb3VzJzogKCkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCA9PT0gMCkge1xuICAgICAgICAgIC8vIOKGkSBhdCB0b3AgZW50ZXJzIHNlYXJjaCBtb2RlIHNvIHVzZXJzIGNhbiB0eXBlLXRvLWZpbHRlciBhZnRlclxuICAgICAgICAgIC8vIHJlYWNoaW5nIHRoZSBsaXN0IGJvdW5kYXJ5LiBXaGVlbC11cCAoc2Nyb2xsOmxpbmVVcCkgY2xhbXBzXG4gICAgICAgICAgLy8gaW5zdGVhZCDigJQgb3ZlcnNob290IHNob3VsZG4ndCBtb3ZlIGZvY3VzIGF3YXkgZnJvbSB0aGUgbGlzdC5cbiAgICAgICAgICBzZXRTaG93VGhpbmtpbmdXYXJuaW5nKGZhbHNlKVxuICAgICAgICAgIHNldElzU2VhcmNoTW9kZSh0cnVlKVxuICAgICAgICAgIHNldFNjcm9sbE9mZnNldCgwKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vdmVTZWxlY3Rpb24oLTEpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnc2VsZWN0Om5leHQnOiAoKSA9PiBtb3ZlU2VsZWN0aW9uKDEpLFxuICAgICAgLy8gV2hlZWwuIFNjcm9sbEtleWJpbmRpbmdIYW5kbGVyJ3Mgc2Nyb2xsOmxpbmUqIHJldHVybnMgZmFsc2UgKG5vdFxuICAgICAgLy8gY29uc3VtZWQpIHdoZW4gdGhlIFNjcm9sbEJveCBjb250ZW50IGZpdHMg4oCUIHdoaWNoIGl0IGFsd2F5cyBkb2VzXG4gICAgICAvLyBoZXJlIGJlY2F1c2UgdGhlIGxpc3QgaXMgcGFnaW5hdGVkIChzbGljZSkuIFRoZSBldmVudCBmYWxscyB0aHJvdWdoXG4gICAgICAvLyB0byB0aGlzIGhhbmRsZXIgd2hpY2ggbmF2aWdhdGVzIHRoZSBsaXN0LCBjbGFtcGluZyBhdCBib3VuZGFyaWVzLlxuICAgICAgJ3Njcm9sbDpsaW5lVXAnOiAoKSA9PiBtb3ZlU2VsZWN0aW9uKC0xKSxcbiAgICAgICdzY3JvbGw6bGluZURvd24nOiAoKSA9PiBtb3ZlU2VsZWN0aW9uKDEpLFxuICAgICAgJ3NlbGVjdDphY2NlcHQnOiB0b2dnbGVTZXR0aW5nLFxuICAgICAgJ3NldHRpbmdzOnNlYXJjaCc6ICgpID0+IHtcbiAgICAgICAgc2V0SXNTZWFyY2hNb2RlKHRydWUpXG4gICAgICAgIHNldFNlYXJjaFF1ZXJ5KCcnKVxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbnRleHQ6ICdTZXR0aW5ncycsXG4gICAgICBpc0FjdGl2ZTogc2hvd1N1Ym1lbnUgPT09IG51bGwgJiYgIWlzU2VhcmNoTW9kZSAmJiAhaGVhZGVyRm9jdXNlZCxcbiAgICB9LFxuICApXG5cbiAgLy8gQ29tYmluZWQga2V5IGhhbmRsaW5nIGFjcm9zcyBzZWFyY2gvbGlzdCBtb2Rlcy4gQnJhbmNoIG9yZGVyIG1pcnJvcnNcbiAgLy8gdGhlIG9yaWdpbmFsIHVzZUlucHV0IGdhdGUgcHJpb3JpdHk6IHN1Ym1lbnUgYW5kIGhlYWRlciBzaG9ydC1jaXJjdWl0XG4gIC8vIGZpcnN0ICh0aGVpciBvd24gaGFuZGxlcnMgb3duIGlucHV0KSwgdGhlbiBzZWFyY2ggdnMuIGxpc3QuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSB1c2VDYWxsYmFjayhcbiAgICAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgaWYgKHNob3dTdWJtZW51ICE9PSBudWxsKSByZXR1cm5cbiAgICAgIGlmIChoZWFkZXJGb2N1c2VkKSByZXR1cm5cbiAgICAgIC8vIFNlYXJjaCBtb2RlOiBFc2MgY2xlYXJzIHRoZW4gZXhpdHMsIEVudGVyL+KGkyBtb3ZlcyB0byB0aGUgbGlzdC5cbiAgICAgIGlmIChpc1NlYXJjaE1vZGUpIHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnZXNjYXBlJykge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlmIChzZWFyY2hRdWVyeS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZXRTZWFyY2hRdWVyeSgnJylcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0SXNTZWFyY2hNb2RlKGZhbHNlKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAoZS5rZXkgPT09ICdyZXR1cm4nIHx8IGUua2V5ID09PSAnZG93bicgfHwgZS5rZXkgPT09ICd3aGVlbGRvd24nKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgc2V0SXNTZWFyY2hNb2RlKGZhbHNlKVxuICAgICAgICAgIHNldFNlbGVjdGVkSW5kZXgoMClcbiAgICAgICAgICBzZXRTY3JvbGxPZmZzZXQoMClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIC8vIExpc3QgbW9kZTogbGVmdC9yaWdodC90YWIgY3ljbGUgdGhlIHNlbGVjdGVkIG9wdGlvbidzIHZhbHVlLiBUaGVzZVxuICAgICAgLy8ga2V5cyB1c2VkIHRvIHN3aXRjaCB0YWJzOyBub3cgdGhleSBvbmx5IGRvIHNvIHdoZW4gdGhlIHRhYiByb3cgaXNcbiAgICAgIC8vIGV4cGxpY2l0bHkgZm9jdXNlZCAoc2VlIGhlYWRlckZvY3VzZWQgaW4gU2V0dGluZ3MudHN4KS5cbiAgICAgIGlmIChlLmtleSA9PT0gJ2xlZnQnIHx8IGUua2V5ID09PSAncmlnaHQnIHx8IGUua2V5ID09PSAndGFiJykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgdG9nZ2xlU2V0dGluZygpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgLy8gRmFsbGJhY2s6IHByaW50YWJsZSBjaGFyYWN0ZXJzIChvdGhlciB0aGFuIHRob3NlIGJvdW5kIHRvIGFjdGlvbnMpXG4gICAgICAvLyBlbnRlciBzZWFyY2ggbW9kZS4gQ2FydmUgb3V0IGovay8vIOKAlCB1c2VLZXliaW5kaW5ncyAoc3RpbGwgb24gdGhlXG4gICAgICAvLyB1c2VJbnB1dCBwYXRoKSBjb25zdW1lcyB0aGVzZSB2aWEgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uLCBidXRcbiAgICAgIC8vIG9uS2V5RG93biBkaXNwYXRjaGVzIGluZGVwZW5kZW50bHkgc28gd2UgbXVzdCBza2lwIHRoZW0gZXhwbGljaXRseS5cbiAgICAgIGlmIChlLmN0cmwgfHwgZS5tZXRhKSByZXR1cm5cbiAgICAgIGlmIChlLmtleSA9PT0gJ2onIHx8IGUua2V5ID09PSAnaycgfHwgZS5rZXkgPT09ICcvJykgcmV0dXJuXG4gICAgICBpZiAoZS5rZXkubGVuZ3RoID09PSAxICYmIGUua2V5ICE9PSAnICcpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHNldElzU2VhcmNoTW9kZSh0cnVlKVxuICAgICAgICBzZXRTZWFyY2hRdWVyeShlLmtleSlcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIHNob3dTdWJtZW51LFxuICAgICAgaGVhZGVyRm9jdXNlZCxcbiAgICAgIGlzU2VhcmNoTW9kZSxcbiAgICAgIHNlYXJjaFF1ZXJ5LFxuICAgICAgc2V0U2VhcmNoUXVlcnksXG4gICAgICB0b2dnbGVTZXR0aW5nLFxuICAgIF0sXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgIHRhYkluZGV4PXswfVxuICAgICAgYXV0b0ZvY3VzXG4gICAgICBvbktleURvd249e2hhbmRsZUtleURvd259XG4gICAgPlxuICAgICAge3Nob3dTdWJtZW51ID09PSAnVGhlbWUnID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxUaGVtZVBpY2tlclxuICAgICAgICAgICAgb25UaGVtZVNlbGVjdD17c2V0dGluZyA9PiB7XG4gICAgICAgICAgICAgIGlzRGlydHkuY3VycmVudCA9IHRydWVcbiAgICAgICAgICAgICAgc2V0VGhlbWUoc2V0dGluZylcbiAgICAgICAgICAgICAgc2V0U2hvd1N1Ym1lbnUobnVsbClcbiAgICAgICAgICAgICAgc2V0VGFic0hpZGRlbihmYWxzZSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRTaG93U3VibWVudShudWxsKVxuICAgICAgICAgICAgICBzZXRUYWJzSGlkZGVuKGZhbHNlKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGhpZGVFc2NUb0NhbmNlbFxuICAgICAgICAgICAgc2tpcEV4aXRIYW5kbGluZz17dHJ1ZX0gLy8gU2tpcCBleGl0IGhhbmRsaW5nIGFzIENvbmZpZyBhbHJlYWR5IGhhbmRsZXMgaXRcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvciBpdGFsaWM+XG4gICAgICAgICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAgICAgICAgPEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwiRW50ZXJcIiBhY3Rpb249XCJzZWxlY3RcIiAvPlxuICAgICAgICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgICAgICAgIGFjdGlvbj1cImNvbmZpcm06bm9cIlxuICAgICAgICAgICAgICAgICAgY29udGV4dD1cIkNvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICAgICAgICBmYWxsYmFjaz1cIkVzY1wiXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cImNhbmNlbFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9CeWxpbmU+XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IHNob3dTdWJtZW51ID09PSAnTW9kZWwnID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxNb2RlbFBpY2tlclxuICAgICAgICAgICAgaW5pdGlhbD17bWFpbkxvb3BNb2RlbH1cbiAgICAgICAgICAgIG9uU2VsZWN0PXsobW9kZWwsIF9lZmZvcnQpID0+IHtcbiAgICAgICAgICAgICAgaXNEaXJ0eS5jdXJyZW50ID0gdHJ1ZVxuICAgICAgICAgICAgICBvbkNoYW5nZU1haW5Nb2RlbENvbmZpZyhtb2RlbClcbiAgICAgICAgICAgICAgc2V0U2hvd1N1Ym1lbnUobnVsbClcbiAgICAgICAgICAgICAgc2V0VGFic0hpZGRlbihmYWxzZSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRTaG93U3VibWVudShudWxsKVxuICAgICAgICAgICAgICBzZXRUYWJzSGlkZGVuKGZhbHNlKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHNob3dGYXN0TW9kZU5vdGljZT17XG4gICAgICAgICAgICAgIGlzRmFzdE1vZGVFbmFibGVkKClcbiAgICAgICAgICAgICAgICA/IGlzRmFzdE1vZGUgJiZcbiAgICAgICAgICAgICAgICAgIGlzRmFzdE1vZGVTdXBwb3J0ZWRCeU1vZGVsKG1haW5Mb29wTW9kZWwpICYmXG4gICAgICAgICAgICAgICAgICBpc0Zhc3RNb2RlQXZhaWxhYmxlKClcbiAgICAgICAgICAgICAgICA6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cIkVudGVyXCIgYWN0aW9uPVwiY29uZmlybVwiIC8+XG4gICAgICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgICAgICBhY3Rpb249XCJjb25maXJtOm5vXCJcbiAgICAgICAgICAgICAgICBjb250ZXh0PVwiQ29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgICBmYWxsYmFjaz1cIkVzY1wiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJjYW5jZWxcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9CeWxpbmU+XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8Lz5cbiAgICAgICkgOiBzaG93U3VibWVudSA9PT0gJ1RlYW1tYXRlTW9kZWwnID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxNb2RlbFBpY2tlclxuICAgICAgICAgICAgaW5pdGlhbD17Z2xvYmFsQ29uZmlnLnRlYW1tYXRlRGVmYXVsdE1vZGVsID8/IG51bGx9XG4gICAgICAgICAgICBza2lwU2V0dGluZ3NXcml0ZVxuICAgICAgICAgICAgaGVhZGVyVGV4dD1cIkRlZmF1bHQgbW9kZWwgZm9yIG5ld2x5IHNwYXduZWQgdGVhbW1hdGVzLiBUaGUgbGVhZGVyIGNhbiBvdmVycmlkZSB2aWEgdGhlIHRvb2wgY2FsbCdzIG1vZGVsIHBhcmFtZXRlci5cIlxuICAgICAgICAgICAgb25TZWxlY3Q9eyhtb2RlbCwgX2VmZm9ydCkgPT4ge1xuICAgICAgICAgICAgICBzZXRTaG93U3VibWVudShudWxsKVxuICAgICAgICAgICAgICBzZXRUYWJzSGlkZGVuKGZhbHNlKVxuICAgICAgICAgICAgICAvLyBGaXJzdC1vcGVuLXRoZW4tRW50ZXIgZnJvbSB1bnNldDogcGlja2VyIGhpZ2hsaWdodHMgXCJEZWZhdWx0XCJcbiAgICAgICAgICAgICAgLy8gKGluaXRpYWw9bnVsbCkgYW5kIGNvbmZpcm1pbmcgd291bGQgd3JpdGUgbnVsbCwgc2lsZW50bHlcbiAgICAgICAgICAgICAgLy8gc3dpdGNoaW5nIE9wdXMtZmFsbGJhY2sg4oaSIGZvbGxvdy1sZWFkZXIuIFRyZWF0IGFzIG5vLW9wLlxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZ2xvYmFsQ29uZmlnLnRlYW1tYXRlRGVmYXVsdE1vZGVsID09PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICBtb2RlbCA9PT0gbnVsbFxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpc0RpcnR5LmN1cnJlbnQgPSB0cnVlXG4gICAgICAgICAgICAgIHNhdmVHbG9iYWxDb25maWcoY3VycmVudCA9PlxuICAgICAgICAgICAgICAgIGN1cnJlbnQudGVhbW1hdGVEZWZhdWx0TW9kZWwgPT09IG1vZGVsXG4gICAgICAgICAgICAgICAgICA/IGN1cnJlbnRcbiAgICAgICAgICAgICAgICAgIDogeyAuLi5jdXJyZW50LCB0ZWFtbWF0ZURlZmF1bHRNb2RlbDogbW9kZWwgfSxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBzZXRHbG9iYWxDb25maWcoe1xuICAgICAgICAgICAgICAgIC4uLmdldEdsb2JhbENvbmZpZygpLFxuICAgICAgICAgICAgICAgIHRlYW1tYXRlRGVmYXVsdE1vZGVsOiBtb2RlbCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgc2V0Q2hhbmdlcyhwcmV2ID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICB0ZWFtbWF0ZURlZmF1bHRNb2RlbDogdGVhbW1hdGVNb2RlbERpc3BsYXlTdHJpbmcobW9kZWwpLFxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X3RlYW1tYXRlX2RlZmF1bHRfbW9kZWxfY2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgICBtb2RlbDpcbiAgICAgICAgICAgICAgICAgIG1vZGVsIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0U2hvd1N1Ym1lbnUobnVsbClcbiAgICAgICAgICAgICAgc2V0VGFic0hpZGRlbihmYWxzZSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cIkVudGVyXCIgYWN0aW9uPVwiY29uZmlybVwiIC8+XG4gICAgICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgICAgICBhY3Rpb249XCJjb25maXJtOm5vXCJcbiAgICAgICAgICAgICAgICBjb250ZXh0PVwiQ29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgICBmYWxsYmFjaz1cIkVzY1wiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJjYW5jZWxcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9CeWxpbmU+XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8Lz5cbiAgICAgICkgOiBzaG93U3VibWVudSA9PT0gJ0V4dGVybmFsSW5jbHVkZXMnID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxDbGF1ZGVNZEV4dGVybmFsSW5jbHVkZXNEaWFsb2dcbiAgICAgICAgICAgIG9uRG9uZT17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRTaG93U3VibWVudShudWxsKVxuICAgICAgICAgICAgICBzZXRUYWJzSGlkZGVuKGZhbHNlKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGV4dGVybmFsSW5jbHVkZXM9e2dldEV4dGVybmFsQ2xhdWRlTWRJbmNsdWRlcyhtZW1vcnlGaWxlcyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cIkVudGVyXCIgYWN0aW9uPVwiY29uZmlybVwiIC8+XG4gICAgICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgICAgICBhY3Rpb249XCJjb25maXJtOm5vXCJcbiAgICAgICAgICAgICAgICBjb250ZXh0PVwiQ29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgICBmYWxsYmFjaz1cIkVzY1wiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJkaXNhYmxlIGV4dGVybmFsIGluY2x1ZGVzXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQnlsaW5lPlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC8+XG4gICAgICApIDogc2hvd1N1Ym1lbnUgPT09ICdPdXRwdXRTdHlsZScgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPE91dHB1dFN0eWxlUGlja2VyXG4gICAgICAgICAgICBpbml0aWFsU3R5bGU9e2N1cnJlbnRPdXRwdXRTdHlsZX1cbiAgICAgICAgICAgIG9uQ29tcGxldGU9e3N0eWxlID0+IHtcbiAgICAgICAgICAgICAgaXNEaXJ0eS5jdXJyZW50ID0gdHJ1ZVxuICAgICAgICAgICAgICBzZXRDdXJyZW50T3V0cHV0U3R5bGUoc3R5bGUgPz8gREVGQVVMVF9PVVRQVVRfU1RZTEVfTkFNRSlcbiAgICAgICAgICAgICAgc2V0U2hvd1N1Ym1lbnUobnVsbClcbiAgICAgICAgICAgICAgc2V0VGFic0hpZGRlbihmYWxzZSlcblxuICAgICAgICAgICAgICAvLyBTYXZlIHRvIGxvY2FsIHNldHRpbmdzXG4gICAgICAgICAgICAgIHVwZGF0ZVNldHRpbmdzRm9yU291cmNlKCdsb2NhbFNldHRpbmdzJywge1xuICAgICAgICAgICAgICAgIG91dHB1dFN0eWxlOiBzdHlsZSxcbiAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICB2b2lkIGxvZ0V2ZW50KCd0ZW5ndV9vdXRwdXRfc3R5bGVfY2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgICBzdHlsZTogKHN0eWxlID8/XG4gICAgICAgICAgICAgICAgICBERUZBVUxUX09VVFBVVF9TVFlMRV9OQU1FKSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgICAgICAgICAgIHNvdXJjZTpcbiAgICAgICAgICAgICAgICAgICdjb25maWdfcGFuZWwnIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3Nfc291cmNlOlxuICAgICAgICAgICAgICAgICAgJ2xvY2FsU2V0dGluZ3MnIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0U2hvd1N1Ym1lbnUobnVsbClcbiAgICAgICAgICAgICAgc2V0VGFic0hpZGRlbihmYWxzZSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cIkVudGVyXCIgYWN0aW9uPVwiY29uZmlybVwiIC8+XG4gICAgICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgICAgICBhY3Rpb249XCJjb25maXJtOm5vXCJcbiAgICAgICAgICAgICAgICBjb250ZXh0PVwiQ29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgICBmYWxsYmFjaz1cIkVzY1wiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJjYW5jZWxcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9CeWxpbmU+XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8Lz5cbiAgICAgICkgOiBzaG93U3VibWVudSA9PT0gJ0xhbmd1YWdlJyA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8TGFuZ3VhZ2VQaWNrZXJcbiAgICAgICAgICAgIGluaXRpYWxMYW5ndWFnZT17Y3VycmVudExhbmd1YWdlfVxuICAgICAgICAgICAgb25Db21wbGV0ZT17bGFuZ3VhZ2UgPT4ge1xuICAgICAgICAgICAgICBpc0RpcnR5LmN1cnJlbnQgPSB0cnVlXG4gICAgICAgICAgICAgIHNldEN1cnJlbnRMYW5ndWFnZShsYW5ndWFnZSlcbiAgICAgICAgICAgICAgc2V0U2hvd1N1Ym1lbnUobnVsbClcbiAgICAgICAgICAgICAgc2V0VGFic0hpZGRlbihmYWxzZSlcblxuICAgICAgICAgICAgICAvLyBTYXZlIHRvIHVzZXIgc2V0dGluZ3NcbiAgICAgICAgICAgICAgdXBkYXRlU2V0dGluZ3NGb3JTb3VyY2UoJ3VzZXJTZXR0aW5ncycsIHtcbiAgICAgICAgICAgICAgICBsYW5ndWFnZSxcbiAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICB2b2lkIGxvZ0V2ZW50KCd0ZW5ndV9sYW5ndWFnZV9jaGFuZ2VkJywge1xuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAobGFuZ3VhZ2UgPz9cbiAgICAgICAgICAgICAgICAgICdkZWZhdWx0JykgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgICAgICAgICBzb3VyY2U6XG4gICAgICAgICAgICAgICAgICAnY29uZmlnX3BhbmVsJyBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFNob3dTdWJtZW51KG51bGwpXG4gICAgICAgICAgICAgIHNldFRhYnNIaWRkZW4oZmFsc2UpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICA8QnlsaW5lPlxuICAgICAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCJFbnRlclwiIGFjdGlvbj1cImNvbmZpcm1cIiAvPlxuICAgICAgICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgICAgICAgYWN0aW9uPVwiY29uZmlybTpub1wiXG4gICAgICAgICAgICAgICAgY29udGV4dD1cIlNldHRpbmdzXCJcbiAgICAgICAgICAgICAgICBmYWxsYmFjaz1cIkVzY1wiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJjYW5jZWxcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9CeWxpbmU+XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8Lz5cbiAgICAgICkgOiBzaG93U3VibWVudSA9PT0gJ0VuYWJsZUF1dG9VcGRhdGVzJyA/IChcbiAgICAgICAgPERpYWxvZ1xuICAgICAgICAgIHRpdGxlPVwiRW5hYmxlIEF1dG8tVXBkYXRlc1wiXG4gICAgICAgICAgb25DYW5jZWw9eygpID0+IHtcbiAgICAgICAgICAgIHNldFNob3dTdWJtZW51KG51bGwpXG4gICAgICAgICAgICBzZXRUYWJzSGlkZGVuKGZhbHNlKVxuICAgICAgICAgIH19XG4gICAgICAgICAgaGlkZUJvcmRlclxuICAgICAgICAgIGhpZGVJbnB1dEd1aWRlXG4gICAgICAgID5cbiAgICAgICAgICB7YXV0b1VwZGF0ZXJEaXNhYmxlZFJlYXNvbj8udHlwZSAhPT0gJ2NvbmZpZycgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICB7YXV0b1VwZGF0ZXJEaXNhYmxlZFJlYXNvbj8udHlwZSA9PT0gJ2VudidcbiAgICAgICAgICAgICAgICAgID8gJ0F1dG8tdXBkYXRlcyBhcmUgY29udHJvbGxlZCBieSBhbiBlbnZpcm9ubWVudCB2YXJpYWJsZSBhbmQgY2Fubm90IGJlIGNoYW5nZWQgaGVyZS4nXG4gICAgICAgICAgICAgICAgICA6ICdBdXRvLXVwZGF0ZXMgYXJlIGRpc2FibGVkIGluIGRldmVsb3BtZW50IGJ1aWxkcy4nfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIHthdXRvVXBkYXRlckRpc2FibGVkUmVhc29uPy50eXBlID09PSAnZW52JyAmJiAoXG4gICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgICAgICBVbnNldCB7YXV0b1VwZGF0ZXJEaXNhYmxlZFJlYXNvbi5lbnZWYXJ9IHRvIHJlLWVuYWJsZVxuICAgICAgICAgICAgICAgICAgYXV0by11cGRhdGVzLlxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBsYWJlbDogJ0VuYWJsZSB3aXRoIGxhdGVzdCBjaGFubmVsJyxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiAnbGF0ZXN0JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRW5hYmxlIHdpdGggc3RhYmxlIGNoYW5uZWwnLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6ICdzdGFibGUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoY2hhbm5lbDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgaXNEaXJ0eS5jdXJyZW50ID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHNldFNob3dTdWJtZW51KG51bGwpXG4gICAgICAgICAgICAgICAgc2V0VGFic0hpZGRlbihmYWxzZSlcblxuICAgICAgICAgICAgICAgIHNhdmVHbG9iYWxDb25maWcoY3VycmVudCA9PiAoe1xuICAgICAgICAgICAgICAgICAgLi4uY3VycmVudCxcbiAgICAgICAgICAgICAgICAgIGF1dG9VcGRhdGVzOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgIHNldEdsb2JhbENvbmZpZyh7IC4uLmdldEdsb2JhbENvbmZpZygpLCBhdXRvVXBkYXRlczogdHJ1ZSB9KVxuXG4gICAgICAgICAgICAgICAgdXBkYXRlU2V0dGluZ3NGb3JTb3VyY2UoJ3VzZXJTZXR0aW5ncycsIHtcbiAgICAgICAgICAgICAgICAgIGF1dG9VcGRhdGVzQ2hhbm5lbDogY2hhbm5lbCBhcyAnbGF0ZXN0JyB8ICdzdGFibGUnLFxuICAgICAgICAgICAgICAgICAgbWluaW11bVZlcnNpb246IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHNldFNldHRpbmdzRGF0YShwcmV2ID0+ICh7XG4gICAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgICAgYXV0b1VwZGF0ZXNDaGFubmVsOiBjaGFubmVsIGFzICdsYXRlc3QnIHwgJ3N0YWJsZScsXG4gICAgICAgICAgICAgICAgICBtaW5pbXVtVmVyc2lvbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9hdXRvdXBkYXRlX2VuYWJsZWQnLCB7XG4gICAgICAgICAgICAgICAgICBjaGFubmVsOlxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9EaWFsb2c+XG4gICAgICApIDogc2hvd1N1Ym1lbnUgPT09ICdDaGFubmVsRG93bmdyYWRlJyA/IChcbiAgICAgICAgPENoYW5uZWxEb3duZ3JhZGVEaWFsb2dcbiAgICAgICAgICBjdXJyZW50VmVyc2lvbj17TUFDUk8uVkVSU0lPTn1cbiAgICAgICAgICBvbkNob2ljZT17KGNob2ljZTogQ2hhbm5lbERvd25ncmFkZUNob2ljZSkgPT4ge1xuICAgICAgICAgICAgc2V0U2hvd1N1Ym1lbnUobnVsbClcbiAgICAgICAgICAgIHNldFRhYnNIaWRkZW4oZmFsc2UpXG5cbiAgICAgICAgICAgIGlmIChjaG9pY2UgPT09ICdjYW5jZWwnKSB7XG4gICAgICAgICAgICAgIC8vIFVzZXIgY2FuY2VsbGVkIC0gZG9uJ3QgY2hhbmdlIGFueXRoaW5nXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpc0RpcnR5LmN1cnJlbnQgPSB0cnVlXG4gICAgICAgICAgICAvLyBTd2l0Y2ggdG8gc3RhYmxlIGNoYW5uZWxcbiAgICAgICAgICAgIGNvbnN0IG5ld1NldHRpbmdzOiB7XG4gICAgICAgICAgICAgIGF1dG9VcGRhdGVzQ2hhbm5lbDogJ3N0YWJsZSdcbiAgICAgICAgICAgICAgbWluaW11bVZlcnNpb24/OiBzdHJpbmdcbiAgICAgICAgICAgIH0gPSB7XG4gICAgICAgICAgICAgIGF1dG9VcGRhdGVzQ2hhbm5lbDogJ3N0YWJsZScsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjaG9pY2UgPT09ICdzdGF5Jykge1xuICAgICAgICAgICAgICAvLyBVc2VyIHdhbnRzIHRvIHN0YXkgb24gY3VycmVudCB2ZXJzaW9uIHVudGlsIHN0YWJsZSBjYXRjaGVzIHVwXG4gICAgICAgICAgICAgIG5ld1NldHRpbmdzLm1pbmltdW1WZXJzaW9uID0gTUFDUk8uVkVSU0lPTlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cGRhdGVTZXR0aW5nc0ZvclNvdXJjZSgndXNlclNldHRpbmdzJywgbmV3U2V0dGluZ3MpXG4gICAgICAgICAgICBzZXRTZXR0aW5nc0RhdGEocHJldiA9PiAoe1xuICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAuLi5uZXdTZXR0aW5ncyxcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2F1dG91cGRhdGVfY2hhbm5lbF9jaGFuZ2VkJywge1xuICAgICAgICAgICAgICBjaGFubmVsOlxuICAgICAgICAgICAgICAgICdzdGFibGUnIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgICAgICAgIG1pbmltdW1fdmVyc2lvbl9zZXQ6IGNob2ljZSA9PT0gJ3N0YXknLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPEJveFxuICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgIGdhcD17MX1cbiAgICAgICAgICBtYXJnaW5ZPXtpbnNpZGVNb2RhbCA/IHVuZGVmaW5lZCA6IDF9XG4gICAgICAgID5cbiAgICAgICAgICA8U2VhcmNoQm94XG4gICAgICAgICAgICBxdWVyeT17c2VhcmNoUXVlcnl9XG4gICAgICAgICAgICBpc0ZvY3VzZWQ9e2lzU2VhcmNoTW9kZSAmJiAhaGVhZGVyRm9jdXNlZH1cbiAgICAgICAgICAgIGlzVGVybWluYWxGb2N1c2VkPXtpc1Rlcm1pbmFsRm9jdXNlZH1cbiAgICAgICAgICAgIGN1cnNvck9mZnNldD17c2VhcmNoQ3Vyc29yT2Zmc2V0fVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggc2V0dGluZ3PigKZcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICB7ZmlsdGVyZWRTZXR0aW5nc0l0ZW1zLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3IgaXRhbGljPlxuICAgICAgICAgICAgICAgIE5vIHNldHRpbmdzIG1hdGNoICZxdW90O3tzZWFyY2hRdWVyeX0mcXVvdDtcbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7c2Nyb2xsT2Zmc2V0ID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgICAgICAge2ZpZ3VyZXMuYXJyb3dVcH0ge3Njcm9sbE9mZnNldH0gbW9yZSBhYm92ZVxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2ZpbHRlcmVkU2V0dGluZ3NJdGVtc1xuICAgICAgICAgICAgICAgICAgLnNsaWNlKHNjcm9sbE9mZnNldCwgc2Nyb2xsT2Zmc2V0ICsgbWF4VmlzaWJsZSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoKHNldHRpbmcsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN0dWFsSW5kZXggPSBzY3JvbGxPZmZzZXQgKyBpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPVxuICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbEluZGV4ID09PSBzZWxlY3RlZEluZGV4ICYmXG4gICAgICAgICAgICAgICAgICAgICAgIWhlYWRlckZvY3VzZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAhaXNTZWFyY2hNb2RlXG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtzZXR0aW5nLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9ezQ0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj17aXNTZWxlY3RlZCA/ICdzdWdnZXN0aW9uJyA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNTZWxlY3RlZCA/IGZpZ3VyZXMucG9pbnRlciA6ICcgJ317JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NldHRpbmcubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBrZXk9e2lzU2VsZWN0ZWQgPyAnc2VsZWN0ZWQnIDogJ3Vuc2VsZWN0ZWQnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2V0dGluZy50eXBlID09PSAnYm9vbGVhbicgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtpc1NlbGVjdGVkID8gJ3N1Z2dlc3Rpb24nIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NldHRpbmcudmFsdWUudG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd1RoaW5raW5nV2FybmluZyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmcuaWQgPT09ICd0aGlua2luZ0VuYWJsZWQnICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2FybmluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGFuZ2luZyB0aGlua2luZyBtb2RlIG1pZC1jb252ZXJzYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lsbCBpbmNyZWFzZSBsYXRlbmN5IGFuZCBtYXkgcmVkdWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YWxpdHkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBzZXR0aW5nLmlkID09PSAndGhlbWUnID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2lzU2VsZWN0ZWQgPyAnc3VnZ2VzdGlvbicgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtUSEVNRV9MQUJFTFNbc2V0dGluZy52YWx1ZS50b1N0cmluZygpXSA/P1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmcudmFsdWUudG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogc2V0dGluZy5pZCA9PT0gJ25vdGlmQ2hhbm5lbCcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17aXNTZWxlY3RlZCA/ICdzdWdnZXN0aW9uJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5vdGlmQ2hhbm5lbExhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NldHRpbmcudmFsdWUudG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogc2V0dGluZy5pZCA9PT0gJ2RlZmF1bHRQZXJtaXNzaW9uTW9kZScgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17aXNTZWxlY3RlZCA/ICdzdWdnZXN0aW9uJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Blcm1pc3Npb25Nb2RlVGl0bGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZy52YWx1ZSBhcyBQZXJtaXNzaW9uTW9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogc2V0dGluZy5pZCA9PT0gJ2F1dG9VcGRhdGVzQ2hhbm5lbCcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9VcGRhdGVyRGlzYWJsZWRSZWFzb24gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17aXNTZWxlY3RlZCA/ICdzdWdnZXN0aW9uJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXRBdXRvVXBkYXRlckRpc2FibGVkUmVhc29uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b1VwZGF0ZXJEaXNhYmxlZFJlYXNvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtpc1NlbGVjdGVkID8gJ3N1Z2dlc3Rpb24nIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2V0dGluZy52YWx1ZS50b1N0cmluZygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAge3Njcm9sbE9mZnNldCArIG1heFZpc2libGUgPCBmaWx0ZXJlZFNldHRpbmdzSXRlbXMubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICAgICAgICB7ZmlndXJlcy5hcnJvd0Rvd259eycgJ31cbiAgICAgICAgICAgICAgICAgICAge2ZpbHRlcmVkU2V0dGluZ3NJdGVtcy5sZW5ndGggLSBzY3JvbGxPZmZzZXQgLSBtYXhWaXNpYmxlfXsnICd9XG4gICAgICAgICAgICAgICAgICAgIG1vcmUgYmVsb3dcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAge2hlYWRlckZvY3VzZWQgPyAoXG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgPEJ5bGluZT5cbiAgICAgICAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCLihpAv4oaSIHRhYlwiIGFjdGlvbj1cInN3aXRjaFwiIC8+XG4gICAgICAgICAgICAgICAgPEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwi4oaTXCIgYWN0aW9uPVwicmV0dXJuXCIgLz5cbiAgICAgICAgICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgICAgICAgICBhY3Rpb249XCJjb25maXJtOm5vXCJcbiAgICAgICAgICAgICAgICAgIGNvbnRleHQ9XCJTZXR0aW5nc1wiXG4gICAgICAgICAgICAgICAgICBmYWxsYmFjaz1cIkVzY1wiXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0J5bGluZT5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApIDogaXNTZWFyY2hNb2RlID8gKFxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAgICAgICAgPFRleHQ+VHlwZSB0byBmaWx0ZXI8L1RleHQ+XG4gICAgICAgICAgICAgICAgPEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwiRW50ZXIv4oaTXCIgYWN0aW9uPVwic2VsZWN0XCIgLz5cbiAgICAgICAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCLihpFcIiBhY3Rpb249XCJ0YWJzXCIgLz5cbiAgICAgICAgICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgICAgICAgICBhY3Rpb249XCJjb25maXJtOm5vXCJcbiAgICAgICAgICAgICAgICAgIGNvbnRleHQ9XCJTZXR0aW5nc1wiXG4gICAgICAgICAgICAgICAgICBmYWxsYmFjaz1cIkVzY1wiXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cImNsZWFyXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0J5bGluZT5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAgICAgICAgPENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludFxuICAgICAgICAgICAgICAgICAgYWN0aW9uPVwic2VsZWN0OmFjY2VwdFwiXG4gICAgICAgICAgICAgICAgICBjb250ZXh0PVwiU2V0dGluZ3NcIlxuICAgICAgICAgICAgICAgICAgZmFsbGJhY2s9XCJTcGFjZVwiXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cImNoYW5nZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgICAgICAgICBhY3Rpb249XCJzZXR0aW5nczpjbG9zZVwiXG4gICAgICAgICAgICAgICAgICBjb250ZXh0PVwiU2V0dGluZ3NcIlxuICAgICAgICAgICAgICAgICAgZmFsbGJhY2s9XCJFbnRlclwiXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cInNhdmVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludFxuICAgICAgICAgICAgICAgICAgYWN0aW9uPVwic2V0dGluZ3M6c2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgIGNvbnRleHQ9XCJTZXR0aW5nc1wiXG4gICAgICAgICAgICAgICAgICBmYWxsYmFjaz1cIi9cIlxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludFxuICAgICAgICAgICAgICAgICAgYWN0aW9uPVwiY29uZmlybTpub1wiXG4gICAgICAgICAgICAgICAgICBjb250ZXh0PVwiU2V0dGluZ3NcIlxuICAgICAgICAgICAgICAgICAgZmFsbGJhY2s9XCJFc2NcIlxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJjYW5jZWxcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvQnlsaW5lPlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKVxufVxuXG5mdW5jdGlvbiB0ZWFtbWF0ZU1vZGVsRGlzcGxheVN0cmluZyh2YWx1ZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG1vZGVsRGlzcGxheVN0cmluZyhnZXRIYXJkY29kZWRUZWFtbWF0ZU1vZGVsRmFsbGJhY2soKSlcbiAgfVxuICBpZiAodmFsdWUgPT09IG51bGwpIHJldHVybiBcIkRlZmF1bHQgKGxlYWRlcidzIG1vZGVsKVwiXG4gIHJldHVybiBtb2RlbERpc3BsYXlTdHJpbmcodmFsdWUpXG59XG5cbmNvbnN0IFRIRU1FX0xBQkVMUzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgYXV0bzogJ0F1dG8gKG1hdGNoIHRlcm1pbmFsKScsXG4gIGRhcms6ICdEYXJrIG1vZGUnLFxuICBsaWdodDogJ0xpZ2h0IG1vZGUnLFxuICAnZGFyay1kYWx0b25pemVkJzogJ0RhcmsgbW9kZSAoY29sb3JibGluZC1mcmllbmRseSknLFxuICAnbGlnaHQtZGFsdG9uaXplZCc6ICdMaWdodCBtb2RlIChjb2xvcmJsaW5kLWZyaWVuZGx5KScsXG4gICdkYXJrLWFuc2knOiAnRGFyayBtb2RlIChBTlNJIGNvbG9ycyBvbmx5KScsXG4gICdsaWdodC1hbnNpJzogJ0xpZ2h0IG1vZGUgKEFOU0kgY29sb3JzIG9ubHkpJyxcbn1cblxuZnVuY3Rpb24gTm90aWZDaGFubmVsTGFiZWwoeyB2YWx1ZSB9OiB7IHZhbHVlOiBzdHJpbmcgfSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIHN3aXRjaCAodmFsdWUpIHtcbiAgICBjYXNlICdhdXRvJzpcbiAgICAgIHJldHVybiAnQXV0bydcbiAgICBjYXNlICdpdGVybTInOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgaVRlcm0yIDxUZXh0IGRpbUNvbG9yPihPU0MgOSk8L1RleHQ+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIClcbiAgICBjYXNlICd0ZXJtaW5hbF9iZWxsJzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIFRlcm1pbmFsIEJlbGwgPFRleHQgZGltQ29sb3I+KFxcYSk8L1RleHQ+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIClcbiAgICBjYXNlICdraXR0eSc6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICBLaXR0eSA8VGV4dCBkaW1Db2xvcj4oT1NDIDk5KTwvVGV4dD5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgKVxuICAgIGNhc2UgJ2dob3N0dHknOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgR2hvc3R0eSA8VGV4dCBkaW1Db2xvcj4oT1NDIDc3Nyk8L1RleHQ+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIClcbiAgICBjYXNlICdpdGVybTJfd2l0aF9iZWxsJzpcbiAgICAgIHJldHVybiAnaVRlcm0yIHcvIEJlbGwnXG4gICAgY2FzZSAnbm90aWZpY2F0aW9uc19kaXNhYmxlZCc6XG4gICAgICByZXR1cm4gJ0Rpc2FibGVkJ1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdmFsdWVcbiAgfVxufVxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZXh0cmFVc2FnZSBhcyBleHRyYVVzYWdlQ29tbWFuZCB9IGZyb20gJ3NyYy9jb21tYW5kcy9leHRyYS11c2FnZS9pbmRleC5qcydcbmltcG9ydCB7IGZvcm1hdENvc3QgfSBmcm9tICdzcmMvY29zdC10cmFja2VyLmpzJ1xuaW1wb3J0IHsgZ2V0U3Vic2NyaXB0aW9uVHlwZSB9IGZyb20gJ3NyYy91dGlscy9hdXRoLmpzJ1xuaW1wb3J0IHsgdXNlVGVybWluYWxTaXplIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlVGVybWluYWxTaXplLmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdXNlS2V5YmluZGluZyB9IGZyb20gJy4uLy4uL2tleWJpbmRpbmdzL3VzZUtleWJpbmRpbmcuanMnXG5pbXBvcnQge1xuICB0eXBlIEV4dHJhVXNhZ2UsXG4gIGZldGNoVXRpbGl6YXRpb24sXG4gIHR5cGUgUmF0ZUxpbWl0LFxuICB0eXBlIFV0aWxpemF0aW9uLFxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkvdXNhZ2UuanMnXG5pbXBvcnQgeyBmb3JtYXRSZXNldFRleHQgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQuanMnXG5pbXBvcnQgeyBsb2dFcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZy5qcydcbmltcG9ydCB7IGpzb25TdHJpbmdpZnkgfSBmcm9tICcuLi8uLi91dGlscy9zbG93T3BlcmF0aW9ucy5qcydcbmltcG9ydCB7IENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludCB9IGZyb20gJy4uL0NvbmZpZ3VyYWJsZVNob3J0Y3V0SGludC5qcydcbmltcG9ydCB7IEJ5bGluZSB9IGZyb20gJy4uL2Rlc2lnbi1zeXN0ZW0vQnlsaW5lLmpzJ1xuaW1wb3J0IHsgUHJvZ3Jlc3NCYXIgfSBmcm9tICcuLi9kZXNpZ24tc3lzdGVtL1Byb2dyZXNzQmFyLmpzJ1xuaW1wb3J0IHtcbiAgaXNFbGlnaWJsZUZvck92ZXJhZ2VDcmVkaXRHcmFudCxcbiAgT3ZlcmFnZUNyZWRpdFVwc2VsbCxcbn0gZnJvbSAnLi4vTG9nb1YyL092ZXJhZ2VDcmVkaXRVcHNlbGwuanMnXG5cbnR5cGUgTGltaXRCYXJQcm9wcyA9IHtcbiAgdGl0bGU6IHN0cmluZ1xuICBsaW1pdDogUmF0ZUxpbWl0XG4gIG1heFdpZHRoOiBudW1iZXJcbiAgc2hvd1RpbWVJblJlc2V0PzogYm9vbGVhblxuICBleHRyYVN1YnRleHQ/OiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gTGltaXRCYXIoe1xuICB0aXRsZSxcbiAgbGltaXQsXG4gIG1heFdpZHRoLFxuICBzaG93VGltZUluUmVzZXQgPSB0cnVlLFxuICBleHRyYVN1YnRleHQsXG59OiBMaW1pdEJhclByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgeyB1dGlsaXphdGlvbiwgcmVzZXRzX2F0IH0gPSBsaW1pdFxuICBpZiAodXRpbGl6YXRpb24gPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLy8gQ2FsY3VsYXRlIHVzYWdlIHBlcmNlbnRhZ2VcbiAgY29uc3QgdXNlZFRleHQgPSBgJHtNYXRoLmZsb29yKHV0aWxpemF0aW9uKX0lIHVzZWRgXG5cbiAgbGV0IHN1YnRleHQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBpZiAocmVzZXRzX2F0KSB7XG4gICAgc3VidGV4dCA9IGBSZXNldHMgJHtmb3JtYXRSZXNldFRleHQocmVzZXRzX2F0LCB0cnVlLCBzaG93VGltZUluUmVzZXQpfWBcbiAgfVxuXG4gIGlmIChleHRyYVN1YnRleHQpIHtcbiAgICBpZiAoc3VidGV4dCkge1xuICAgICAgc3VidGV4dCA9IGAke2V4dHJhU3VidGV4dH0gwrcgJHtzdWJ0ZXh0fWBcbiAgICB9IGVsc2Uge1xuICAgICAgc3VidGV4dCA9IGV4dHJhU3VidGV4dFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1heEJhcldpZHRoID0gNTBcbiAgY29uc3QgdXNlZExhYmVsU3BhY2UgPSAxMlxuICBpZiAobWF4V2lkdGggPj0gbWF4QmFyV2lkdGggKyB1c2VkTGFiZWxTcGFjZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgPFRleHQgYm9sZD57dGl0bGV9PC9UZXh0PlxuICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJyb3dcIiBnYXA9ezF9PlxuICAgICAgICAgIDxQcm9ncmVzc0JhclxuICAgICAgICAgICAgcmF0aW89e3V0aWxpemF0aW9uIC8gMTAwfVxuICAgICAgICAgICAgd2lkdGg9e21heEJhcldpZHRofVxuICAgICAgICAgICAgZmlsbENvbG9yPVwicmF0ZV9saW1pdF9maWxsXCJcbiAgICAgICAgICAgIGVtcHR5Q29sb3I9XCJyYXRlX2xpbWl0X2VtcHR5XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0Pnt1c2VkVGV4dH08L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICB7c3VidGV4dCAmJiA8VGV4dCBkaW1Db2xvcj57c3VidGV4dH08L1RleHQ+fVxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRleHQgYm9sZD57dGl0bGV9PC9UZXh0PlxuICAgICAgICAgIHtzdWJ0ZXh0ICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxUZXh0PiA8L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPsK3IHtzdWJ0ZXh0fTwvVGV4dD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFByb2dyZXNzQmFyXG4gICAgICAgICAgcmF0aW89e3V0aWxpemF0aW9uIC8gMTAwfVxuICAgICAgICAgIHdpZHRoPXttYXhXaWR0aH1cbiAgICAgICAgICBmaWxsQ29sb3I9XCJyYXRlX2xpbWl0X2ZpbGxcIlxuICAgICAgICAgIGVtcHR5Q29sb3I9XCJyYXRlX2xpbWl0X2VtcHR5XCJcbiAgICAgICAgLz5cbiAgICAgICAgPFRleHQ+e3VzZWRUZXh0fTwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVXNhZ2UoKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgW3V0aWxpemF0aW9uLCBzZXRVdGlsaXphdGlvbl0gPSB1c2VTdGF0ZTxVdGlsaXphdGlvbiB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IHsgY29sdW1ucyB9ID0gdXNlVGVybWluYWxTaXplKClcblxuICBjb25zdCBhdmFpbGFibGVXaWR0aCA9IGNvbHVtbnMgLSAyIC8vIDIgZm9yIHNjcmVlbiBwYWRkaW5nXG4gIGNvbnN0IG1heFdpZHRoID0gTWF0aC5taW4oYXZhaWxhYmxlV2lkdGgsIDgwKVxuXG4gIGNvbnN0IGxvYWRVdGlsaXphdGlvbiA9IFJlYWN0LnVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcbiAgICBzZXRFcnJvcihudWxsKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hVdGlsaXphdGlvbigpXG4gICAgICBzZXRVdGlsaXphdGlvbihkYXRhKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgbG9nRXJyb3IoZXJyIGFzIEVycm9yKVxuICAgICAgY29uc3QgYXhpb3NFcnJvciA9IGVyciBhcyB7IHJlc3BvbnNlPzogeyBkYXRhPzogdW5rbm93biB9IH1cbiAgICAgIGNvbnN0IHJlc3BvbnNlQm9keSA9IGF4aW9zRXJyb3IucmVzcG9uc2U/LmRhdGFcbiAgICAgICAgPyBqc29uU3RyaW5naWZ5KGF4aW9zRXJyb3IucmVzcG9uc2UuZGF0YSlcbiAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgIHNldEVycm9yKFxuICAgICAgICByZXNwb25zZUJvZHlcbiAgICAgICAgICA/IGBGYWlsZWQgdG8gbG9hZCB1c2FnZSBkYXRhOiAke3Jlc3BvbnNlQm9keX1gXG4gICAgICAgICAgOiAnRmFpbGVkIHRvIGxvYWQgdXNhZ2UgZGF0YScsXG4gICAgICApXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdm9pZCBsb2FkVXRpbGl6YXRpb24oKVxuICB9LCBbbG9hZFV0aWxpemF0aW9uXSlcblxuICB1c2VLZXliaW5kaW5nKFxuICAgICdzZXR0aW5nczpyZXRyeScsXG4gICAgKCkgPT4ge1xuICAgICAgdm9pZCBsb2FkVXRpbGl6YXRpb24oKVxuICAgIH0sXG4gICAgeyBjb250ZXh0OiAnU2V0dGluZ3MnLCBpc0FjdGl2ZTogISFlcnJvciAmJiAhaXNMb2FkaW5nIH0sXG4gIClcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXsxfT5cbiAgICAgICAgPFRleHQgY29sb3I9XCJlcnJvclwiPkVycm9yOiB7ZXJyb3J9PC9UZXh0PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICA8QnlsaW5lPlxuICAgICAgICAgICAgPENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludFxuICAgICAgICAgICAgICBhY3Rpb249XCJzZXR0aW5nczpyZXRyeVwiXG4gICAgICAgICAgICAgIGNvbnRleHQ9XCJTZXR0aW5nc1wiXG4gICAgICAgICAgICAgIGZhbGxiYWNrPVwiclwiXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwicmV0cnlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgICAgYWN0aW9uPVwiY29uZmlybTpub1wiXG4gICAgICAgICAgICAgIGNvbnRleHQ9XCJTZXR0aW5nc1wiXG4gICAgICAgICAgICAgIGZhbGxiYWNrPVwiRXNjXCJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJjYW5jZWxcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0J5bGluZT5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgaWYgKCF1dGlsaXphdGlvbikge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9ezF9PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5Mb2FkaW5nIHVzYWdlIGRhdGHigKY8L1RleHQ+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgIGFjdGlvbj1cImNvbmZpcm06bm9cIlxuICAgICAgICAgICAgY29udGV4dD1cIlNldHRpbmdzXCJcbiAgICAgICAgICAgIGZhbGxiYWNrPVwiRXNjXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiY2FuY2VsXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICAvLyBPbmx5IE1heCBhbmQgVGVhbSBwbGFucyBoYXZlIGEgU29ubmV0IGxpbWl0IHRoYXQgZGlmZmVycyBmcm9tIHRoZSB3ZWVrbHlcbiAgLy8gbGltaXQgKHNlZSByYXRlTGltaXRNZXNzYWdlcy50cykuIEZvciBvdGhlciBwbGFucyB0aGUgYmFyIGlzIHJlZHVuZGFudC5cbiAgLy8gU2hvdyBmb3IgbnVsbCAodW5rbm93biBwbGFuKSB0byBzdGF5IGNvbnNpc3RlbnQgd2l0aCByYXRlTGltaXRNZXNzYWdlcy50cyxcbiAgLy8gd2hpY2ggbGFiZWxzIGl0IFwiU29ubmV0IGxpbWl0XCIgaW4gdGhhdCBjYXNlLlxuICBjb25zdCBzdWJzY3JpcHRpb25UeXBlID0gZ2V0U3Vic2NyaXB0aW9uVHlwZSgpXG4gIGNvbnN0IHNob3dTb25uZXRCYXIgPVxuICAgIHN1YnNjcmlwdGlvblR5cGUgPT09ICdtYXgnIHx8XG4gICAgc3Vic2NyaXB0aW9uVHlwZSA9PT0gJ3RlYW0nIHx8XG4gICAgc3Vic2NyaXB0aW9uVHlwZSA9PT0gbnVsbFxuXG4gIGNvbnN0IGxpbWl0cyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogJ0N1cnJlbnQgc2Vzc2lvbicsXG4gICAgICBsaW1pdDogdXRpbGl6YXRpb24uZml2ZV9ob3VyLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdDdXJyZW50IHdlZWsgKGFsbCBtb2RlbHMpJyxcbiAgICAgIGxpbWl0OiB1dGlsaXphdGlvbi5zZXZlbl9kYXksXG4gICAgfSxcbiAgICAuLi4oc2hvd1Nvbm5ldEJhclxuICAgICAgPyBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdDdXJyZW50IHdlZWsgKFNvbm5ldCBvbmx5KScsXG4gICAgICAgICAgICBsaW1pdDogdXRpbGl6YXRpb24uc2V2ZW5fZGF5X3Nvbm5ldCxcbiAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgICA6IFtdKSxcbiAgXVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXsxfSB3aWR0aD1cIjEwMCVcIj5cbiAgICAgIHtsaW1pdHMuc29tZSgoeyBsaW1pdCB9KSA9PiBsaW1pdCkgfHwgKFxuICAgICAgICA8VGV4dCBkaW1Db2xvcj4vdXNhZ2UgaXMgb25seSBhdmFpbGFibGUgZm9yIHN1YnNjcmlwdGlvbiBwbGFucy48L1RleHQ+XG4gICAgICApfVxuXG4gICAgICB7bGltaXRzLm1hcChcbiAgICAgICAgKHsgdGl0bGUsIGxpbWl0IH0pID0+XG4gICAgICAgICAgbGltaXQgJiYgKFxuICAgICAgICAgICAgPExpbWl0QmFyXG4gICAgICAgICAgICAgIGtleT17dGl0bGV9XG4gICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgbGltaXQ9e2xpbWl0fVxuICAgICAgICAgICAgICBtYXhXaWR0aD17bWF4V2lkdGh9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICksXG4gICAgICApfVxuXG4gICAgICB7dXRpbGl6YXRpb24uZXh0cmFfdXNhZ2UgJiYgKFxuICAgICAgICA8RXh0cmFVc2FnZVNlY3Rpb25cbiAgICAgICAgICBleHRyYVVzYWdlPXt1dGlsaXphdGlvbi5leHRyYV91c2FnZX1cbiAgICAgICAgICBtYXhXaWR0aD17bWF4V2lkdGh9XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICB7aXNFbGlnaWJsZUZvck92ZXJhZ2VDcmVkaXRHcmFudCgpICYmIChcbiAgICAgICAgPE92ZXJhZ2VDcmVkaXRVcHNlbGwgbWF4V2lkdGg9e21heFdpZHRofSAvPlxuICAgICAgKX1cblxuICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICBhY3Rpb249XCJjb25maXJtOm5vXCJcbiAgICAgICAgICBjb250ZXh0PVwiU2V0dGluZ3NcIlxuICAgICAgICAgIGZhbGxiYWNrPVwiRXNjXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cImNhbmNlbFwiXG4gICAgICAgIC8+XG4gICAgICA8L1RleHQ+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxudHlwZSBFeHRyYVVzYWdlU2VjdGlvblByb3BzID0ge1xuICBleHRyYVVzYWdlOiBFeHRyYVVzYWdlXG4gIG1heFdpZHRoOiBudW1iZXJcbn1cblxuY29uc3QgRVhUUkFfVVNBR0VfU0VDVElPTl9USVRMRSA9ICdFeHRyYSB1c2FnZSdcblxuZnVuY3Rpb24gRXh0cmFVc2FnZVNlY3Rpb24oe1xuICBleHRyYVVzYWdlLFxuICBtYXhXaWR0aCxcbn06IEV4dHJhVXNhZ2VTZWN0aW9uUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBzdWJzY3JpcHRpb25UeXBlID0gZ2V0U3Vic2NyaXB0aW9uVHlwZSgpXG4gIGNvbnN0IGlzUHJvT3JNYXggPSBzdWJzY3JpcHRpb25UeXBlID09PSAncHJvJyB8fCBzdWJzY3JpcHRpb25UeXBlID09PSAnbWF4J1xuICBpZiAoIWlzUHJvT3JNYXgpIHtcbiAgICAvLyBPbmx5IHNob3cgdG8gUHJvIGFuZCBNYXgsIGNvbnNpc3RlbnQgd2l0aCBjbGF1ZGUuYWkgbm9uLWFkbWluIHVzYWdlIHNldHRpbmdzXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBpZiAoIWV4dHJhVXNhZ2UuaXNfZW5hYmxlZCkge1xuICAgIGlmIChleHRyYVVzYWdlQ29tbWFuZC5pc0VuYWJsZWQoKSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgPFRleHQgYm9sZD57RVhUUkFfVVNBR0VfU0VDVElPTl9USVRMRX08L1RleHQ+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+RXh0cmEgdXNhZ2Ugbm90IGVuYWJsZWQgwrcgL2V4dHJhLXVzYWdlIHRvIGVuYWJsZTwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGlmIChleHRyYVVzYWdlLm1vbnRobHlfbGltaXQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIDxUZXh0IGJvbGQ+e0VYVFJBX1VTQUdFX1NFQ1RJT05fVElUTEV9PC9UZXh0PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5VbmxpbWl0ZWQ8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICBpZiAoXG4gICAgdHlwZW9mIGV4dHJhVXNhZ2UudXNlZF9jcmVkaXRzICE9PSAnbnVtYmVyJyB8fFxuICAgIHR5cGVvZiBleHRyYVVzYWdlLnV0aWxpemF0aW9uICE9PSAnbnVtYmVyJ1xuICApIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgZm9ybWF0dGVkVXNlZENyZWRpdHMgPSBmb3JtYXRDb3N0KGV4dHJhVXNhZ2UudXNlZF9jcmVkaXRzIC8gMTAwLCAyKVxuICBjb25zdCBmb3JtYXR0ZWRNb250aGx5TGltaXQgPSBmb3JtYXRDb3N0KGV4dHJhVXNhZ2UubW9udGhseV9saW1pdCAvIDEwMCwgMilcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKVxuICBjb25zdCBvbmVNb250aFJlc2V0ID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpICsgMSwgMSlcblxuICByZXR1cm4gKFxuICAgIDxMaW1pdEJhclxuICAgICAgdGl0bGU9e0VYVFJBX1VTQUdFX1NFQ1RJT05fVElUTEV9XG4gICAgICBsaW1pdD17e1xuICAgICAgICB1dGlsaXphdGlvbjogZXh0cmFVc2FnZS51dGlsaXphdGlvbixcbiAgICAgICAgLy8gTm90IGFwcGxpY2FibGUgZm9yIGVudGVycHJpc2VzLCBidXQgZm9yIG5vdyB3ZSBkb24ndCByZW5kZXIgdGhpcyBmb3IgdGhlbVxuICAgICAgICByZXNldHNfYXQ6IG9uZU1vbnRoUmVzZXQudG9JU09TdHJpbmcoKSxcbiAgICAgIH19XG4gICAgICBzaG93VGltZUluUmVzZXQ9e2ZhbHNlfVxuICAgICAgZXh0cmFTdWJ0ZXh0PXtgJHtmb3JtYXR0ZWRVc2VkQ3JlZGl0c30gLyAke2Zvcm1hdHRlZE1vbnRobHlMaW1pdH0gc3BlbnRgfVxuICAgICAgbWF4V2lkdGg9e21heFdpZHRofVxuICAgIC8+XG4gIClcbn1cbiIsICIvLyBiaW9tZS1pZ25vcmUtYWxsIGFzc2lzdC9zb3VyY2Uvb3JnYW5pemVJbXBvcnRzOiBBTlQtT05MWSBpbXBvcnQgbWFya2VycyBtdXN0IG5vdCBiZSByZW9yZGVyZWRcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU3VzcGVuc2UsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VLZXliaW5kaW5nIH0gZnJvbSAnLi4vLi4va2V5YmluZGluZ3MvdXNlS2V5YmluZGluZy5qcydcbmltcG9ydCB7IHVzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncyB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncy5qcydcbmltcG9ydCB7IHVzZVRlcm1pbmFsU2l6ZSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVRlcm1pbmFsU2l6ZS5qcydcbmltcG9ydCB7XG4gIHVzZUlzSW5zaWRlTW9kYWwsXG4gIHVzZU1vZGFsT3JUZXJtaW5hbFNpemUsXG59IGZyb20gJy4uLy4uL2NvbnRleHQvbW9kYWxDb250ZXh0LmpzJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uL2Rlc2lnbi1zeXN0ZW0vUGFuZS5qcydcbmltcG9ydCB7IFRhYnMsIFRhYiB9IGZyb20gJy4uL2Rlc2lnbi1zeXN0ZW0vVGFicy5qcydcbmltcG9ydCB7IFN0YXR1cywgYnVpbGREaWFnbm9zdGljcyB9IGZyb20gJy4vU3RhdHVzLmpzJ1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi9Db25maWcuanMnXG5pbXBvcnQgeyBVc2FnZSB9IGZyb20gJy4vVXNhZ2UuanMnXG5pbXBvcnQgdHlwZSB7XG4gIExvY2FsSlNYQ29tbWFuZENvbnRleHQsXG4gIENvbW1hbmRSZXN1bHREaXNwbGF5LFxufSBmcm9tICcuLi8uLi9jb21tYW5kcy5qcydcblxudHlwZSBQcm9wcyA9IHtcbiAgb25DbG9zZTogKFxuICAgIHJlc3VsdD86IHN0cmluZyxcbiAgICBvcHRpb25zPzogeyBkaXNwbGF5PzogQ29tbWFuZFJlc3VsdERpc3BsYXkgfSxcbiAgKSA9PiB2b2lkXG4gIGNvbnRleHQ6IExvY2FsSlNYQ29tbWFuZENvbnRleHRcbiAgZGVmYXVsdFRhYjogJ1N0YXR1cycgfCAnQ29uZmlnJyB8ICdVc2FnZScgfCAnR2F0ZXMnXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTZXR0aW5ncyh7XG4gIG9uQ2xvc2UsXG4gIGNvbnRleHQsXG4gIGRlZmF1bHRUYWIsXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IFtzZWxlY3RlZFRhYiwgc2V0U2VsZWN0ZWRUYWJdID0gdXNlU3RhdGU8c3RyaW5nPihkZWZhdWx0VGFiKVxuICBjb25zdCBbdGFic0hpZGRlbiwgc2V0VGFic0hpZGRlbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgLy8gVHJ1ZSB3aGlsZSBDb25maWcncyBvd24gRXNjIGhhbmRsZXIgaXMgYWN0aXZlIChzZWFyY2ggbW9kZSB3aXRoIGNvbnRlbnRcbiAgLy8gZm9jdXNlZCkuIFNldHRpbmdzIG11c3QgY2VkZSBFc2Mgc28gc2VhcmNoIGNhbiBjbGVhci9leGl0IGZpcnN0LlxuICBjb25zdCBbY29uZmlnT3duc0VzYywgc2V0Q29uZmlnT3duc0VzY10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2dhdGVzT3duc0VzYywgc2V0R2F0ZXNPd25zRXNjXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAvLyBGaXhlZCBjb250ZW50IGhlaWdodCBzbyBzd2l0Y2hpbmcgdGFicyBkb2Vzbid0IHNoaWZ0IHRoZSBwYW5lIGhlaWdodC5cbiAgLy8gT3V0c2lkZSBtb2RhbHMgY2FwIGF0IG1pbig4MCUgdmlld3BvcnQsIDMwKS4gSW5zaWRlIGEgTW9kYWwgdGhlIG1vZGFsJ3NcbiAgLy8gaW5uZXJTaXplLnJvd3MgSVMgdGhlIFNjcm9sbEJveCB2aWV3cG9ydCDigJQgdGhlIDAuOCBtdWx0aXBsaWVyIG92ZXItXG4gIC8vIHNocmlua3MsIGxlYXZpbmcgZW1wdHkgcm93cyB3aGlsZSBDb25maWcgc2hvd3MgXCLihpMgTiBtb3JlIGJlbG93XCIuXG4gIC8vXG4gIC8vIEluc2lkZS1tb2RhbCBtYXRoOiBDb25maWcncyBwYW5lQ2FwLTEwIGNocm9tZSBlc3RpbWF0ZSB3YXMgdHVuZWQgZm9yXG4gIC8vIG1hcmdpblk9ezF9ICgyIHJvd3MpIHdoaWNoIGlzIHN0cmlwcGVkIGluc2lkZSBtb2RhbHMg4oaSICsyIHRvIHJlY292ZXIuXG4gIC8vIFRoZW4gLTIgZm9yIFRhYnMnIGhlYWRlciByb3cgKyBpdHMgbWFyZ2luVG9wPTEuIFBsdXMgKzEgb2JzZXJ2ZWQgZ2FwXG4gIC8vIGZyb20gdGhlIHBhbmVDYXAtMTAgZXN0aW1hdGUgYmVpbmcgc2xpZ2h0bHkgZ2VuZXJvdXMuIE5ldDogcm93cyArIDEuXG4gIGNvbnN0IGluc2lkZU1vZGFsID0gdXNlSXNJbnNpZGVNb2RhbCgpXG4gIGNvbnN0IHsgcm93cyB9ID0gdXNlTW9kYWxPclRlcm1pbmFsU2l6ZSh1c2VUZXJtaW5hbFNpemUoKSlcbiAgY29uc3QgY29udGVudEhlaWdodCA9IGluc2lkZU1vZGFsXG4gICAgPyByb3dzICsgMVxuICAgIDogTWF0aC5tYXgoMTUsIE1hdGgubWluKE1hdGguZmxvb3Iocm93cyAqIDAuOCksIDMwKSlcbiAgLy8gS2ljayBvZmYgZGlhZ25vc3RpY3Mgb25jZSB3aGVuIHRoZSBwYW5lIG9wZW5zLiBTdGF0dXMgdXNlKClzIHRoaXMgc29cbiAgLy8gaXQgcmVzb2x2ZXMgb25jZSBwZXIgL2NvbmZpZyBpbnZvY2F0aW9uIOKAlCBubyByZS1mZXRjaCBmbGFzaCB3aGVuXG4gIC8vIHRhYmJpbmcgYmFjayB0byBTdGF0dXMgKFRhYiB1bm1vdW50cyBjaGlsZHJlbiB3aGVuIG5vdCBzZWxlY3RlZCkuXG4gIGNvbnN0IFtkaWFnbm9zdGljc1Byb21pc2VdID0gdXNlU3RhdGUoKCkgPT5cbiAgICBidWlsZERpYWdub3N0aWNzKCkuY2F0Y2goKCkgPT4gW10pLFxuICApXG5cbiAgdXNlRXhpdE9uQ3RybENEV2l0aEtleWJpbmRpbmdzKClcblxuICAvLyBIYW5kbGUgZXNjYXBlIHZpYSBrZXliaW5kaW5nIC0gb25seSB3aGVuIG5vdCBpbiBzdWJtZW51XG4gIGNvbnN0IGhhbmRsZUVzY2FwZSA9ICgpID0+IHtcbiAgICAvLyBEb24ndCBoYW5kbGUgZXNjYXBlIHdoZW4gYSBzdWJtZW51IGlzIHNob3dpbmcgKHRhYnNIaWRkZW4gbWVhbnMgc3VibWVudSBpcyBvcGVuKVxuICAgIC8vIExldCB0aGUgc3VibWVudSBoYW5kbGUgZXNjYXBlIHRvIHJldHVybiB0byB0aGUgbWFpbiBtZW51XG4gICAgaWYgKHRhYnNIaWRkZW4pIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBUT0RPOiBVcGRhdGUgdG8gXCJTZXR0aW5nc1wiIGRpYWxvZyBvbmNlIHdlIGRlZmluZSAnL3NldHRpbmdzJy5cbiAgICBvbkNsb3NlKCdTdGF0dXMgZGlhbG9nIGRpc21pc3NlZCcsIHsgZGlzcGxheTogJ3N5c3RlbScgfSlcbiAgfVxuXG4gIC8vIERpc2FibGUgd2hlbiBzdWJtZW51IGlzIG9wZW4gc28gdGhlIHN1Ym1lbnUncyBEaWFsb2cgY2FuIGhhbmRsZSBFU0MsXG4gIC8vIGFuZCB3aGVuIENvbmZpZydzIHNlYXJjaCBtb2RlIGlzIGFjdGl2ZSBzbyBpdHMgdXNlSW5wdXQgaGFuZGxlclxuICAvLyAoY2xlYXIgcXVlcnkg4oaSIGV4aXQgc2VhcmNoKSBwcm9jZXNzZXMgRXNjYXBlIGZpcnN0LlxuICB1c2VLZXliaW5kaW5nKCdjb25maXJtOm5vJywgaGFuZGxlRXNjYXBlLCB7XG4gICAgY29udGV4dDogJ1NldHRpbmdzJyxcbiAgICBpc0FjdGl2ZTpcbiAgICAgICF0YWJzSGlkZGVuICYmXG4gICAgICAhKHNlbGVjdGVkVGFiID09PSAnQ29uZmlnJyAmJiBjb25maWdPd25zRXNjKSAmJlxuICAgICAgIShzZWxlY3RlZFRhYiA9PT0gJ0dhdGVzJyAmJiBnYXRlc093bnNFc2MpLFxuICB9KVxuXG4gIGNvbnN0IHRhYnMgPSBbXG4gICAgPFRhYiBrZXk9XCJzdGF0dXNcIiB0aXRsZT1cIlN0YXR1c1wiPlxuICAgICAgPFN0YXR1cyBjb250ZXh0PXtjb250ZXh0fSBkaWFnbm9zdGljc1Byb21pc2U9e2RpYWdub3N0aWNzUHJvbWlzZX0gLz5cbiAgICA8L1RhYj4sXG4gICAgPFRhYiBrZXk9XCJjb25maWdcIiB0aXRsZT1cIkNvbmZpZ1wiPlxuICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXtudWxsfT5cbiAgICAgICAgPENvbmZpZ1xuICAgICAgICAgIGNvbnRleHQ9e2NvbnRleHR9XG4gICAgICAgICAgb25DbG9zZT17b25DbG9zZX1cbiAgICAgICAgICBzZXRUYWJzSGlkZGVuPXtzZXRUYWJzSGlkZGVufVxuICAgICAgICAgIG9uSXNTZWFyY2hNb2RlQ2hhbmdlPXtzZXRDb25maWdPd25zRXNjfVxuICAgICAgICAgIGNvbnRlbnRIZWlnaHQ9e2NvbnRlbnRIZWlnaHR9XG4gICAgICAgIC8+XG4gICAgICA8L1N1c3BlbnNlPlxuICAgIDwvVGFiPixcbiAgICA8VGFiIGtleT1cInVzYWdlXCIgdGl0bGU9XCJVc2FnZVwiPlxuICAgICAgPFVzYWdlIC8+XG4gICAgPC9UYWI+LFxuICAgIC4uLihcImV4dGVybmFsXCIgPT09ICdhbnQnXG4gICAgICA/IFtcbiAgICAgICAgICA8VGFiIGtleT1cImdhdGVzXCIgdGl0bGU9XCJHYXRlc1wiPlxuICAgICAgICAgICAgPEdhdGVzXG4gICAgICAgICAgICAgIG9uT3duc0VzY0NoYW5nZT17c2V0R2F0ZXNPd25zRXNjfVxuICAgICAgICAgICAgICBjb250ZW50SGVpZ2h0PXtjb250ZW50SGVpZ2h0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1RhYj4sXG4gICAgICAgIF1cbiAgICAgIDogW10pLFxuICBdXG5cbiAgcmV0dXJuIChcbiAgICA8UGFuZSBjb2xvcj1cInBlcm1pc3Npb25cIj5cbiAgICAgIDxUYWJzXG4gICAgICAgIGNvbG9yPVwicGVybWlzc2lvblwiXG4gICAgICAgIHNlbGVjdGVkVGFiPXtzZWxlY3RlZFRhYn1cbiAgICAgICAgb25UYWJDaGFuZ2U9e3NldFNlbGVjdGVkVGFifVxuICAgICAgICBoaWRkZW49e3RhYnNIaWRkZW59XG4gICAgICAgIC8vIENvbmZpZyBoYXMgaW50ZXJhY3RpdmUgY29udGVudCDigJQgc3RhcnQgd2l0aCBoZWFkZXIgdW5mb2N1c2VkIHNvXG4gICAgICAgIC8vIGxlZnQvcmlnaHQvdGFiIGN5Y2xlIG9wdGlvbiB2YWx1ZXMgaW5zdGVhZCBvZiBzd2l0Y2hpbmcgdGFicy5cbiAgICAgICAgaW5pdGlhbEhlYWRlckZvY3VzZWQ9e2RlZmF1bHRUYWIgIT09ICdDb25maWcnICYmIGRlZmF1bHRUYWIgIT09ICdHYXRlcyd9XG4gICAgICAgIC8vIEluc2lkZSBhIE1vZGFsLCBza2lwIHRoZSBUYWJzLWxldmVsIGNhcCBzbyB0YWxsIHRhYnMgKFN0YXR1cydzXG4gICAgICAgIC8vIE1DUCBsaXN0KSBmbG93IHRvIHRoZWlyIG5hdHVyYWwgaGVpZ2h0IGZvciB0aGUgTW9kYWwncyBTY3JvbGxCb3hcbiAgICAgICAgLy8gdG8gc2Nyb2xsLiBDb25maWcvR2F0ZXMgc3RpbGwgZ2V0IGNvbnRlbnRIZWlnaHQgYWJvdmUg4oCUIHRoZXlcbiAgICAgICAgLy8gcGFnaW5hdGUgaW50ZXJuYWxseSBzbyB0aGlzIG9ubHkgYWZmZWN0cyBTdGF0dXMvVXNhZ2UuXG4gICAgICAgIGNvbnRlbnRIZWlnaHQ9e3RhYnNIaWRkZW4gfHwgaW5zaWRlTW9kYWwgPyB1bmRlZmluZWQgOiBjb250ZW50SGVpZ2h0fVxuICAgICAgPlxuICAgICAgICB7dGFic31cbiAgICAgIDwvVGFicz5cbiAgICA8L1BhbmU+XG4gIClcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ0EsU0FBU0Esc0JBQWtDO0FBQ3pDLFFBQU1DLFlBQVlDLGFBQWE7QUFDL0IsUUFBTUMsY0FBY0MsdUJBQXVCSCxTQUFTO0FBQ3BELFFBQU1JLFlBQVlGLGVBQWUsOEJBQUMsY0FBSyxVQUFRLFFBQUMsdUJBQXFCO0FBRXJFLFNBQU8sQ0FDTDtJQUFFRyxPQUFPO0lBQVdDLE9BQU9DLE1BQU1DO0VBQVEsR0FDekM7SUFBRUgsT0FBTztJQUFnQkMsT0FBT0Y7RUFBVSxHQUMxQztJQUFFQyxPQUFPO0lBQWNDLE9BQU9OO0VBQVUsR0FDeEM7SUFBRUssT0FBTztJQUFPQyxPQUFPRyxPQUFP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cyI6IFsiYnVpbGRQcmltYXJ5U2VjdGlvbiIsICJzZXNzaW9uSWQiLCAiZ2V0U2Vzc2lvbklkIiwgImN1c3RvbVRpdGxlIiwgImdldEN1cnJlbnRTZXNzaW9uVGl0bGUiLCAibmFtZVZhbHVlIiwgImxhYmVsIiwgInZhbHVlIiwgIk1BQ1JPIiwgIlZFUlNJT04iLCAiZ2V0Q3dkIiwgImJ1aWxkQWNjb3VudFByb3BlcnRpZXMiLCAiYnVpbGRBUElQcm92aWRlclByb3BlcnRpZXMiLCAiYnVpbGRTZWNvbmRhcnlTZWN0aW9uIiwgIm1haW5Mb29wTW9kZWwiLCAibWNwIiwgInRoZW1lIiwgImNvbnRleHQiLCAibW9kZWxMYWJlbCIsICJnZXRNb2RlbERpc3BsYXlMYWJlbCIsICJidWlsZElERVByb3BlcnRpZXMiLCAiY2xpZW50cyIsICJvcHRpb25zIiwgImlkZUluc3RhbGxhdGlvblN0YXR1cyIsICJidWlsZE1jcFByb3BlcnRpZXMiLCAiYnVpbGRTYW5kYm94UHJvcGVydGllcyIsICJidWlsZFNldHRpbmdTb3VyY2VzUHJvcGVydGllcyIsICJidWlsZERpYWdub3N0aWNzIiwgImJ1aWxkSW5zdGFsbGF0aW9uRGlhZ25vc3RpY3MiLCAiYnVpbGRJbnN0YWxsYXRpb25IZWFsdGhEaWFnbm9zdGljcyIsICJidWlsZE1lbW9yeURpYWdub3N0aWNzIiwgIlByb3BlcnR5VmFsdWUiLCAidDAiLCAiJCIsICJfYyIsICJBcnJheSIsICJpc0FycmF5IiwgInQxIiwgInQyIiwgImxlbmd0aCIsICJpdGVtIiwgImkiLCAibWFwIiwgIlN0YXR1cyIsICJkaWFnbm9zdGljc1Byb21pc2UiLCAidXNlQXBwU3RhdGUiLCAiX3RlbXAiLCAiX3RlbXAyIiwgInVzZVRoZW1lIiwgIlN5bWJvbCIsICJmb3IiLCAidDMiLCAic2VjdGlvbnMiLCAiZ3JvdyIsICJ1c2VJc0luc2lkZU1vZGFsIiwgInVuZGVmaW5lZCIsICJ0NCIsICJfdGVtcDQiLCAidDUiLCAidDYiLCAidDciLCAidDgiLCAicHJvcGVydGllcyIsICJfdGVtcDMiLCAiaiIsICJzXzAiLCAicyIsICJEaWFnbm9zdGljcyIsICJwcm9taXNlIiwgImRpYWdub3N0aWNzIiwgInVzZSIsICJfdGVtcDUiLCAiZGlhZ25vc3RpYyIsICJmaWd1cmVzIiwgIndhcm5pbmciLCAiQ2hhbm5lbERvd25ncmFkZURpYWxvZyIsICJ0MCIsICIkIiwgIl9jIiwgImN1cnJlbnRWZXJzaW9uIiwgIm9uQ2hvaWNlIiwgInQxIiwgImhhbmRsZVNlbGVjdCIsICJ2YWx1ZSIsICJ0MiIsICJoYW5kbGVDYW5jZWwiLCAidDMiLCAidDQiLCAiU3ltYm9sIiwgImZvciIsICJ0NSIsICJsYWJlbCIsICJ0NiIsICJ0NyIsICJ0OCIsICJ0OSIsICJtYXBDb25maWdzVG9PcHRpb25zIiwgInN0eWxlcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJtYXAiLCAic3R5bGUiLCAiY29uZmlnIiwgImxhYmVsIiwgIm5hbWUiLCAiREVGQVVMVF9PVVRQVVRfU1RZTEVfTEFCRUwiLCAidmFsdWUiLCAiZGVzY3JpcHRpb24iLCAiREVGQVVMVF9PVVRQVVRfU1RZTEVfREVTQ1JJUFRJT04iLCAiT3V0cHV0U3R5bGVQaWNrZXIiLCAidDAiLCAiJCIsICJfYyIsICJpbml0aWFsU3R5bGUiLCAib25Db21wbGV0ZSIsICJvbkNhbmNlbCIsICJpc1N0YW5kYWxvbmVDb21tYW5kIiwgInQxIiwgIlN5bWJvbCIsICJmb3IiLCAic3R5bGVPcHRpb25zIiwgInNldFN0eWxlT3B0aW9ucyIsICJ1c2VTdGF0ZSIsICJpc0xvYWRpbmciLCAic2V0SXNMb2FkaW5nIiwgInQyIiwgInQzIiwgImdldEFsbE91dHB1dFN0eWxlcyIsICJnZXRDd2QiLCAidGhlbiIsICJhbGxTdHlsZXMiLCAib3B0aW9ucyIsICJjYXRjaCIsICJidWlsdEluT3B0aW9ucyIsICJPVVRQVVRfU1RZTEVfQ09ORklHIiwgInVzZUVmZmVjdCIsICJ0NCIsICJvdXRwdXRTdHlsZSIsICJoYW5kbGVTdHlsZVNlbGVjdCIsICJ0NSIsICJ0NiIsICJ0NyIsICJ0OCIsICJ0OSIsICJMYW5ndWFnZVBpY2tlciIsICJ0MCIsICIkIiwgIl9jIiwgImluaXRpYWxMYW5ndWFnZSIsICJvbkNvbXBsZXRlIiwgIm9uQ2FuY2VsIiwgImxhbmd1YWdlIiwgInNldExhbmd1YWdlIiwgInVzZVN0YXRlIiwgImN1cnNvck9mZnNldCIsICJzZXRDdXJzb3JPZmZzZXQiLCAibGVuZ3RoIiwgInQxIiwgIlN5bWJvbCIsICJmb3IiLCAiY29udGV4dCIsICJ1c2VLZXliaW5kaW5nIiwgInQyIiwgImhhbmRsZVN1Ym1pdCIsICJ0cmltbWVkIiwgInRyaW0iLCAidW5kZWZpbmVkIiwgInQzIiwgInQ0IiwgImZpZ3VyZXMiLCAicG9pbnRlciIsICJ0NSIsICJ0NiIsICJlbGxpcHNpcyIsICJ0NyIsICJ0OCIsICJDb25maWciLCAib25DbG9zZSIsICJjb250ZXh0IiwgInNldFRhYnNIaWRkZW4iLCAib25Jc1NlYXJjaE1vZGVDaGFuZ2UiLCAiY29udGVudEhlaWdodCIsICJoZWFkZXJGb2N1c2VkIiwgImZvY3VzSGVhZGVyIiwgInVzZVRhYkhlYWRlckZvY3VzIiwgImluc2lkZU1vZGFsIiwgInVzZUlzSW5zaWRlTW9kYWwiLCAic2V0VGhlbWUiLCAidXNlVGhlbWUiLCAidGhlbWVTZXR0aW5nIiwgInVzZVRoZW1lU2V0dGluZyIsICJnbG9iYWxDb25maWciLCAic2V0R2xvYmFsQ29uZmlnIiwgInVzZVN0YXRlIiwgImdldEdsb2JhbENvbmZpZyIsICJpbml0aWFsQ29uZmlnIiwgInVzZVJlZiIsICJzZXR0aW5nc0RhdGEiLCAic2V0U2V0dGluZ3NEYXRhIiwgImdldEluaXRpYWxTZXR0aW5ncyIsICJpbml0aWFsU2V0dGluZ3NEYXRhIiwgImN1cnJlbnRPdXRwdXRTdHlsZSIsICJzZXRDdXJyZW50T3V0cHV0U3R5bGUiLCAib3V0cHV0U3R5bGUiLCAiREVGQVVMVF9PVVRQVVRfU1RZTEVfTkFNRSIsICJpbml0aWFsT3V0cHV0U3R5bGUiLCAiY3VycmVudExhbmd1YWdlIiwgInNldEN1cnJlbnRMYW5ndWFnZSIsICJsYW5ndWFnZSIsICJpbml0aWFsTGFuZ3VhZ2UiLCAic2VsZWN0ZWRJbmRleCIsICJzZXRTZWxlY3RlZEluZGV4IiwgInNjcm9sbE9mZnNldCIsICJzZXRTY3JvbGxPZmZzZXQiLCAiaXNTZWFyY2hNb2RlIiwgInNldElzU2VhcmNoTW9kZSIsICJpc1Rlcm1pbmFsRm9jdXNlZCIsICJ1c2VUZXJtaW5hbEZvY3VzIiwgInJvd3MiLCAidXNlVGVybWluYWxTaXplIiwgInBhbmVDYXAiLCAiTWF0aCIsICJtaW4iLCAiZmxvb3IiLCAibWF4VmlzaWJsZSIsICJtYXgiLCAibWFpbkxvb3BNb2RlbCIsICJ1c2VBcHBTdGF0ZSIsICJzIiwgInZlcmJvc2UiLCAidGhpbmtpbmdFbmFibGVkIiwgImlzRmFzdE1vZGUiLCAiaXNGYXN0TW9kZUVuYWJsZWQiLCAiZmFzdE1vZGUiLCAicHJvbXB0U3VnZ2VzdGlvbkVuYWJsZWQiLCAic2hvd0F1dG9JbkRlZmF1bHRNb2RlUGlja2VyIiwgImZlYXR1cmUiLCAiaGFzQXV0b01vZGVPcHRJbkFueVNvdXJjZSIsICJnZXRBdXRvTW9kZUVuYWJsZWRTdGF0ZSIsICJzaG93RGVmYXVsdFZpZXdQaWNrZXIiLCAicmVxdWlyZSIsICJpc0JyaWVmRW50aXRsZWQiLCAic2V0QXBwU3RhdGUiLCAidXNlU2V0QXBwU3RhdGUiLCAiY2hhbmdlcyIsICJzZXRDaGFuZ2VzIiwgImluaXRpYWxUaGlua2luZ0VuYWJsZWQiLCAiaW5pdGlhbExvY2FsU2V0dGluZ3MiLCAiZ2V0U2V0dGluZ3NGb3JTb3VyY2UiLCAiaW5pdGlhbFVzZXJTZXR0aW5ncyIsICJpbml0aWFsVGhlbWVTZXR0aW5nIiwgInN0b3JlIiwgInVzZUFwcFN0YXRlU3RvcmUiLCAiaW5pdGlhbEFwcFN0YXRlIiwgImdldFN0YXRlIiwgIm1haW5Mb29wTW9kZWxGb3JTZXNzaW9uIiwgImlzQnJpZWZPbmx5IiwgInJlcGxCcmlkZ2VFbmFibGVkIiwgInJlcGxCcmlkZ2VPdXRib3VuZE9ubHkiLCAic2V0dGluZ3MiLCAiaW5pdGlhbFVzZXJNc2dPcHRJbiIsICJnZXRVc2VyTXNnT3B0SW4iLCAiaXNEaXJ0eSIsICJzaG93VGhpbmtpbmdXYXJuaW5nIiwgInNldFNob3dUaGlua2luZ1dhcm5pbmciLCAic2hvd1N1Ym1lbnUiLCAic2V0U2hvd1N1Ym1lbnUiLCAicXVlcnkiLCAic2VhcmNoUXVlcnkiLCAic2V0UXVlcnkiLCAic2V0U2VhcmNoUXVlcnkiLCAiY3Vyc29yT2Zmc2V0IiwgInNlYXJjaEN1cnNvck9mZnNldCIsICJ1c2VTZWFyY2hJbnB1dCIsICJpc0FjdGl2ZSIsICJvbkV4aXQiLCAib25FeGl0VXAiLCAicGFzc3Rocm91Z2hDdHJsS2V5cyIsICJvd25zRXNjIiwgIlJlYWN0IiwgInVzZUVmZmVjdCIsICJpc0Nvbm5lY3RlZFRvSWRlIiwgImhhc0FjY2Vzc1RvSURFRXh0ZW5zaW9uRGlmZkZlYXR1cmUiLCAib3B0aW9ucyIsICJtY3BDbGllbnRzIiwgImlzRmlsZUNoZWNrcG9pbnRpbmdBdmFpbGFibGUiLCAiaXNFbnZUcnV0aHkiLCAicHJvY2VzcyIsICJlbnYiLCAiQ0xBVURFX0NPREVfRElTQUJMRV9GSUxFX0NIRUNLUE9JTlRJTkciLCAibWVtb3J5RmlsZXMiLCAidXNlIiwgImdldE1lbW9yeUZpbGVzIiwgInNob3VsZFNob3dFeHRlcm5hbEluY2x1ZGVzVG9nZ2xlIiwgImhhc0V4dGVybmFsQ2xhdWRlTWRJbmNsdWRlcyIsICJhdXRvVXBkYXRlckRpc2FibGVkUmVhc29uIiwgImdldEF1dG9VcGRhdGVyRGlzYWJsZWRSZWFzb24iLCAib25DaGFuZ2VNYWluTW9kZWxDb25maWciLCAidmFsdWUiLCAicHJldmlvdXNNb2RlbCIsICJsb2dFdmVudCIsICJmcm9tX21vZGVsIiwgInRvX21vZGVsIiwgInByZXYiLCAidmFsU3RyIiwgIm1vZGVsRGlzcGxheVN0cmluZyIsICJpc0JpbGxlZEFzRXh0cmFVc2FnZSIsICJpc09wdXMxbU1lcmdlRW5hYmxlZCIsICJtb2RlbCIsICJyZXN0IiwgIm9uQ2hhbmdlVmVyYm9zZSIsICJzYXZlR2xvYmFsQ29uZmlnIiwgImN1cnJlbnQiLCAic2V0dGluZ3NJdGVtcyIsICJpZCIsICJsYWJlbCIsICJhdXRvQ29tcGFjdEVuYWJsZWQiLCAidHlwZSIsICJvbkNoYW5nZSIsICJlbmFibGVkIiwgInNwaW5uZXJUaXBzRW5hYmxlZCIsICJ1cGRhdGVTZXR0aW5nc0ZvclNvdXJjZSIsICJwcmVmZXJzUmVkdWNlZE1vdGlvbiIsICJhbHdheXNUaGlua2luZ0VuYWJsZWQiLCAidW5kZWZpbmVkIiwgImlzRmFzdE1vZGVBdmFpbGFibGUiLCAiRkFTVF9NT0RFX01PREVMX0RJU1BMQVkiLCAiY2xlYXJGYXN0TW9kZUNvb2xkb3duIiwgImdldEZhc3RNb2RlTW9kZWwiLCAiZ2V0RmVhdHVyZVZhbHVlX0NBQ0hFRF9NQVlfQkVfU1RBTEUiLCAic3BlY3VsYXRpb25FbmFibGVkIiwgImZpbGVDaGVja3BvaW50aW5nRW5hYmxlZCIsICJ0ZXJtaW5hbFByb2dyZXNzQmFyRW5hYmxlZCIsICJzaG93U3RhdHVzSW5UZXJtaW5hbFRhYiIsICJzaG93VHVybkR1cmF0aW9uIiwgInBlcm1pc3Npb25zIiwgImRlZmF1bHRNb2RlIiwgInByaW9yaXR5T3JkZXIiLCAiYWxsTW9kZXMiLCAiUEVSTUlTU0lPTl9NT0RFUyIsICJFWFRFUk5BTF9QRVJNSVNTSU9OX01PREVTIiwgImV4Y2x1ZGVkIiwgInB1c2giLCAiZmlsdGVyIiwgIm0iLCAiaW5jbHVkZXMiLCAibW9kZSIsICJwYXJzZWRNb2RlIiwgInBlcm1pc3Npb25Nb2RlRnJvbVN0cmluZyIsICJ2YWxpZGF0ZWRNb2RlIiwgImlzRXh0ZXJuYWxQZXJtaXNzaW9uTW9kZSIsICJ0b0V4dGVybmFsUGVybWlzc2lvbk1vZGUiLCAicmVzdWx0IiwgImVycm9yIiwgImxvZ0Vycm9yIiwgImRlZmF1bHRQZXJtaXNzaW9uTW9kZSIsICJzZXR0aW5nIiwgInVzZUF1dG9Nb2RlRHVyaW5nUGxhbiIsICJuZXh0IiwgInRyYW5zaXRpb25QbGFuQXV0b01vZGUiLCAidG9vbFBlcm1pc3Npb25Db250ZXh0IiwgInJlc3BlY3RHaXRpZ25vcmUiLCAiY29weUZ1bGxSZXNwb25zZSIsICJTdHJpbmciLCAiaXNGdWxsc2NyZWVuRW52RW5hYmxlZCIsICJjb3B5T25TZWxlY3QiLCAiYXV0b1VwZGF0ZXNDaGFubmVsIiwgInByZWZlcnJlZE5vdGlmQ2hhbm5lbCIsICJub3RpZkNoYW5uZWwiLCAidGFza0NvbXBsZXRlTm90aWZFbmFibGVkIiwgImlucHV0TmVlZGVkTm90aWZFbmFibGVkIiwgImFnZW50UHVzaE5vdGlmRW5hYmxlZCIsICJkZWZhdWx0VmlldyIsICJzZWxlY3RlZCIsICJuZXh0QnJpZWYiLCAic2V0VXNlck1zZ09wdEluIiwgImVkaXRvck1vZGUiLCAic291cmNlIiwgInByU3RhdHVzRm9vdGVyRW5hYmxlZCIsICJkaWZmVG9vbCIsICJ0b29sIiwgImlzU3VwcG9ydGVkVGVybWluYWwiLCAiYXV0b0Nvbm5lY3RJZGUiLCAiYXV0b0luc3RhbGxJZGVFeHRlbnNpb24iLCAiY2xhdWRlSW5DaHJvbWVEZWZhdWx0RW5hYmxlZCIsICJpc0FnZW50U3dhcm1zRW5hYmxlZCIsICJjbGlPdmVycmlkZSIsICJnZXRDbGlUZWFtbWF0ZU1vZGVPdmVycmlkZSIsICJ0ZWFtbWF0ZU1vZGUiLCAiY2xlYXJDbGlUZWFtbWF0ZU1vZGVPdmVycmlkZSIsICJ0ZWFtbWF0ZU1vZGVsRGlzcGxheVN0cmluZyIsICJ0ZWFtbWF0ZURlZmF1bHRNb2RlbCIsICJpc0JyaWRnZUVuYWJsZWQiLCAicmVtb3RlQ29udHJvbEF0U3RhcnR1cCIsICJyZXNvbHZlZCIsICJnZXRSZW1vdGVDb250cm9sQXRTdGFydHVwIiwgInByb2plY3RDb25maWciLCAiZ2V0Q3VycmVudFByb2plY3RDb25maWciLCAiaGFzQ2xhdWRlTWRFeHRlcm5hbEluY2x1ZGVzQXBwcm92ZWQiLCAiQU5USFJPUElDX0FQSV9LRVkiLCAiaXNSdW5uaW5nT25Ib21lc3BhY2UiLCAibm9ybWFsaXplQXBpS2V5Rm9yQ29uZmlnIiwgInNlYXJjaFRleHQiLCAiQm9vbGVhbiIsICJjdXN0b21BcGlLZXlSZXNwb25zZXMiLCAiYXBwcm92ZWQiLCAidXNlQ3VzdG9tS2V5IiwgInVwZGF0ZWQiLCAicmVqZWN0ZWQiLCAidHJ1bmNhdGVkS2V5IiwgImsiLCAiZmlsdGVyZWRTZXR0aW5nc0l0ZW1zIiwgInVzZU1lbW8iLCAibG93ZXJRdWVyeSIsICJ0b0xvd2VyQ2FzZSIsICJzZWFyY2hhYmxlVGV4dCIsICJsZW5ndGgiLCAibmV3SW5kZXgiLCAiYWRqdXN0U2Nyb2xsT2Zmc2V0IiwgInVzZUNhbGxiYWNrIiwgImhhbmRsZVNhdmVBbmRDbG9zZSIsICJmb3JtYXR0ZWRDaGFuZ2VzIiwgIk9iamVjdCIsICJlbnRyaWVzIiwgIm1hcCIsICJrZXkiLCAiY2hhbGsiLCAiYm9sZCIsICJlZmZlY3RpdmVBcGlLZXkiLCAiaW5pdGlhbFVzaW5nQ3VzdG9tS2V5IiwgImN1cnJlbnRVc2luZ0N1c3RvbUtleSIsICJ0aGVtZSIsICJyZW1vdGVMYWJlbCIsICJqb2luIiwgImRpc3BsYXkiLCAicmV2ZXJ0Q2hhbmdlcyIsICJpbCIsICJpdSIsICJtaW5pbXVtVmVyc2lvbiIsICJzeW50YXhIaWdobGlnaHRpbmdEaXNhYmxlZCIsICJpYSIsICJoYW5kbGVFc2NhcGUiLCAidXNlS2V5YmluZGluZyIsICJ0b2dnbGVTZXR0aW5nIiwgIm5ld1ZhbHVlIiwgImJhY2tUb0luaXRpYWwiLCAibWVzc2FnZXMiLCAic29tZSIsICJjdXJyZW50Q2hhbm5lbCIsICJjaGFubmVsIiwgImN1cnJlbnRJbmRleCIsICJpbmRleE9mIiwgIm5leHRJbmRleCIsICJtb3ZlU2VsZWN0aW9uIiwgImRlbHRhIiwgInVzZUtleWJpbmRpbmdzIiwgInNlbGVjdDpwcmV2aW91cyIsICJzZWxlY3Q6bmV4dCIsICJzY3JvbGw6bGluZVVwIiwgInNjcm9sbDpsaW5lRG93biIsICJzZXR0aW5nczpzZWFyY2giLCAiaGFuZGxlS2V5RG93biIsICJlIiwgInByZXZlbnREZWZhdWx0IiwgImN0cmwiLCAibWV0YSIsICJfZWZmb3J0IiwgImlzRmFzdE1vZGVTdXBwb3J0ZWRCeU1vZGVsIiwgImdldEV4dGVybmFsQ2xhdWRlTWRJbmNsdWRlcyIsICJzdHlsZSIsICJzZXR0aW5nc19zb3VyY2UiLCAiZW52VmFyIiwgImF1dG9VcGRhdGVzIiwgIk1BQ1JPIiwgIlZFUlNJT04iLCAiY2hvaWNlIiwgIm5ld1NldHRpbmdzIiwgIm1pbmltdW1fdmVyc2lvbl9zZXQiLCAiZmlndXJlcyIsICJhcnJvd1VwIiwgInNsaWNlIiwgImkiLCAiYWN0dWFsSW5kZXgiLCAiaXNTZWxlY3RlZCIsICJwb2ludGVyIiwgInRvU3RyaW5nIiwgIlRIRU1FX0xBQkVMUyIsICJwZXJtaXNzaW9uTW9kZVRpdGxlIiwgImZvcm1hdEF1dG9VcGRhdGVyRGlzYWJsZWRSZWFzb24iLCAiYXJyb3dEb3duIiwgImdldEhhcmRjb2RlZFRlYW1tYXRlTW9kZWxGYWxsYmFjayIsICJOb3RpZkNoYW5uZWxMYWJlbCIsICJ0MCIsICIkIiwgIl9jIiwgInQxIiwgIlN5bWJvbCIsICJmb3IiLCAiYXV0byIsICJkYXJrIiwgImxpZ2h0IiwgIkxpbWl0QmFyIiwgInQwIiwgIiQiLCAiX2MiLCAidGl0bGUiLCAibGltaXQiLCAibWF4V2lkdGgiLCAic2hvd1RpbWVJblJlc2V0IiwgInQxIiwgImV4dHJhU3VidGV4dCIsICJ1bmRlZmluZWQiLCAidXRpbGl6YXRpb24iLCAicmVzZXRzX2F0IiwgInVzZWRUZXh0IiwgIk1hdGgiLCAiZmxvb3IiLCAic3VidGV4dCIsICJ0MiIsICJmb3JtYXRSZXNldFRleHQiLCAidDMiLCAidDQiLCAibWF4QmFyV2lkdGgiLCAidDUiLCAidDYiLCAidDciLCAidDgiLCAiVXNhZ2UiLCAic2V0VXRpbGl6YXRpb24iLCAidXNlU3RhdGUiLCAiZXJyb3IiLCAic2V0RXJyb3IiLCAiaXNMb2FkaW5nIiwgInNldElzTG9hZGluZyIsICJjb2x1bW5zIiwgInVzZVRlcm1pbmFsU2l6ZSIsICJhdmFpbGFibGVXaWR0aCIsICJtaW4iLCAibG9hZFV0aWxpemF0aW9uIiwgInVzZUNhbGxiYWNrIiwgImRhdGEiLCAiZmV0Y2hVdGlsaXphdGlvbiIsICJlcnIiLCAibG9nRXJyb3IiLCAiYXhpb3NFcnJvciIsICJyZXNwb25zZUJvZHkiLCAicmVzcG9uc2UiLCAianNvblN0cmluZ2lmeSIsICJ1c2VFZmZlY3QiLCAidXNlS2V5YmluZGluZyIsICJjb250ZXh0IiwgImlzQWN0aXZlIiwgInN1YnNjcmlwdGlvblR5cGUiLCAiZ2V0U3Vic2NyaXB0aW9uVHlwZSIsICJzaG93U29ubmV0QmFyIiwgImxpbWl0cyIsICJmaXZlX2hvdXIiLCAic2V2ZW5fZGF5IiwgInNldmVuX2RheV9zb25uZXQiLCAic29tZSIsICJtYXAiLCAiZXh0cmFfdXNhZ2UiLCAiaXNFbGlnaWJsZUZvck92ZXJhZ2VDcmVkaXRHcmFudCIsICJFeHRyYVVzYWdlU2VjdGlvbiIsICJleHRyYVVzYWdlIiwgImlzUHJvT3JNYXgiLCAiaXNfZW5hYmxlZCIsICJleHRyYVVzYWdlQ29tbWFuZCIsICJpc0VuYWJsZWQiLCAiU3ltYm9sIiwgImZvciIsICJFWFRSQV9VU0FHRV9TRUNUSU9OX1RJVExFIiwgIm1vbnRobHlfbGltaXQiLCAidXNlZF9jcmVkaXRzIiwgImZvcm1hdENvc3QiLCAiZm9ybWF0dGVkVXNlZENyZWRpdHMiLCAiZm9ybWF0dGVkTW9udGhseUxpbWl0IiwgIlQwIiwgIm5vdyIsICJEYXRlIiwgIm9uZU1vbnRoUmVzZXQiLCAiZ2V0RnVsbFllYXIiLCAiZ2V0TW9udGgiLCAidG9JU09TdHJpbmciLCAidDkiLCAidDEwIiwgIlNldHRpbmdzIiwgInQwIiwgIiQiLCAiX2MiLCAib25DbG9zZSIsICJjb250ZXh0IiwgImRlZmF1bHRUYWIiLCAic2VsZWN0ZWRUYWIiLCAic2V0U2VsZWN0ZWRUYWIiLCAidXNlU3RhdGUiLCAidGFic0hpZGRlbiIsICJzZXRUYWJzSGlkZGVuIiwgImNvbmZpZ093bnNFc2MiLCAic2V0Q29uZmlnT3duc0VzYyIsICJnYXRlc093bnNFc2MiLCAic2V0R2F0ZXNPd25zRXNjIiwgImluc2lkZU1vZGFsIiwgInVzZUlzSW5zaWRlTW9kYWwiLCAicm93cyIsICJ1c2VNb2RhbE9yVGVybWluYWxTaXplIiwgInVzZVRlcm1pbmFsU2l6ZSIsICJjb250ZW50SGVpZ2h0IiwgIk1hdGgiLCAibWF4IiwgIm1pbiIsICJmbG9vciIsICJkaWFnbm9zdGljc1Byb21pc2UiLCAiX3RlbXAyIiwgInVzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncyIsICJ0MSIsICJkaXNwbGF5IiwgImhhbmRsZUVzY2FwZSIsICJ0MiIsICJ0MyIsICJpc0FjdGl2ZSIsICJ1c2VLZXliaW5kaW5nIiwgInQ0IiwgInQ1IiwgInQ2IiwgIlN5bWJvbCIsICJmb3IiLCAidDciLCAidDgiLCAidGFicyIsICJ0OSIsICJ0MTAiLCAidW5kZWZpbmVkIiwgInQxMSIsICJidWlsZERpYWdub3N0aWNzIiwgImNhdGNoIiwgIl90ZW1wIl0KfQo=
