#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  formatInstallCount,
  getInstallCounts,
  init_installCounts,
  init_parseMarketplaceInput,
  init_validatePlugin,
  parseMarketplaceInput,
  validateManifest
} from "./chunk-4ALOYVV6.mjs";
import {
  init_MCPConnectionManager,
  useMcpReconnect,
  useMcpToggleEnabled
} from "./chunk-G7GD7K34.mjs";
import {
  getFlaggedPlugins,
  init_pluginFlagging,
  markFlaggedPluginsSeen,
  removeFlaggedPlugin
} from "./chunk-USK6WK3P.mjs";
import {
  init_pluginAutoupdate,
  updatePluginsForMarketplaces
} from "./chunk-QEBNTS4F.mjs";
import {
  disablePluginOp,
  enablePluginOp,
  getPluginInstallationFromV2,
  init_pluginOperations,
  isInstallableScope,
  isPluginEnabledAtProjectScope,
  uninstallPluginOp,
  updatePluginOp
} from "./chunk-Z4SJV6S3.mjs";
import {
  getPluginEditableScopes,
  init_pluginStartupCheck
} from "./chunk-PTYHZPYV.mjs";
import {
  SearchBox,
  init_SearchBox,
  init_useSearchInput,
  useSearchInput
} from "./chunk-EOFNYHIQ.mjs";
import {
  Tab,
  Tabs,
  init_Tabs
} from "./chunk-6TYKXPLL.mjs";
import {
  AuthenticationCancelledError,
  OFFICIAL_MARKETPLACE_NAME,
  Select,
  Spinner,
  TextInput,
  addMarketplaceSource,
  clearAllCaches,
  clearServerCache,
  createPluginId,
  describeMcpConfigFilePath,
  detectEmptyMarketplaceReason,
  excludeCommandsByServer,
  excludeResourcesByServer,
  excludeToolsByServer,
  filterMcpPromptsByServer,
  filterToolsByServer,
  formatFailureDetails,
  formatMarketplaceLoadingErrors,
  getBuiltinPluginDefinition,
  getMarketplace,
  getMarketplaceSourceDisplay,
  getMcpConfigByName,
  getPluginDataDirSize,
  getPluginErrorMessage,
  getPluginTrustMessage,
  getUnconfiguredChannels,
  getUnconfiguredOptions,
  init_AppState,
  init_CustomSelect,
  init_Spinner,
  init_TextInput,
  init_auth2,
  init_builtinPlugins,
  init_cacheUtils,
  init_client,
  init_config as init_config2,
  init_installedPluginsManager,
  init_marketplaceHelpers,
  init_marketplaceManager,
  init_mcpPluginIntegration,
  init_mcpbHandler,
  init_officialMarketplace,
  init_plugin,
  init_pluginDirectories,
  init_pluginInstallationHelpers,
  init_pluginLoader,
  init_pluginOptionsStorage,
  init_pluginPolicy,
  init_utils,
  installPluginFromMarketplace,
  isMcpbSource,
  isPluginBlockedByPolicy,
  isPluginGloballyInstalled,
  isPluginInstalled,
  loadAllPlugins,
  loadInstalledPluginsV2,
  loadKnownMarketplacesConfig,
  loadMarketplacesWithGracefulDegradation,
  loadMcpServerUserConfig,
  loadMcpbFile,
  loadPluginOptions,
  performMCPOAuthFlow,
  pluginDataDirPath,
  refreshMarketplace,
  removeMarketplaceSource,
  revokeServerTokens,
  saveMarketplaceToSettings,
  saveMcpServerUserConfig,
  savePluginOptions,
  setMarketplaceAutoUpdate,
  useAppState,
  useSetAppState
} from "./chunk-OTDPNGFK.mjs";
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
  init_useExitOnCtrlCDWithKeybindings,
  useExitOnCtrlCDWithKeybindings
} from "./chunk-S5Z6SZDA.mjs";
import {
  Pane,
  init_Pane,
  init_useKeybinding,
  init_useTerminalSize,
  useKeybinding,
  useKeybindings,
  useTerminalSize
} from "./chunk-HO5F7BV3.mjs";
import {
  init_pluginIdentifier,
  parsePluginIdentifier
} from "./chunk-4WEGPCYF.mjs";
import {
  init_browser,
  openBrowser
} from "./chunk-IAEMXMG4.mjs";
import {
  Link,
  ThemedBox_default,
  ThemedText,
  c,
  color,
  init_ink,
  init_osc,
  init_react_compiler_runtime,
  setClipboard,
  useTerminalFocus,
  useTheme,
  use_input_default
} from "./chunk-HWTXKBLR.mjs";
import {
  Fragment,
  createElement,
  init_react,
  react_default,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "./chunk-TEJH3H3H.mjs";
import {
  capitalize,
  extractMcpToolDisplayName,
  getMcpDisplayName,
  getOauthAccountInfo,
  getSettingsForSource,
  getSettings_DEPRECATED,
  init_auth,
  init_config2 as init_config,
  init_mcpStringUtils,
  init_schemas,
  init_settings2 as init_settings,
  init_stringUtils,
  isMarketplaceAutoUpdate,
  plural,
  shouldSkipPluginAutoupdate,
  updateSettingsForSource
} from "./chunk-NKGQGSP5.mjs";
import {
  count,
  init_array
} from "./chunk-GC6TKYZ3.mjs";
import {
  init_stringWidth,
  init_truncate,
  stringWidth,
  truncateToWidth
} from "./chunk-OGGCTXYU.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-MDXHK5AD.mjs";
import {
  getOauthConfig,
  init_oauth
} from "./chunk-JXCG2JDO.mjs";
import {
  init_log,
  logError,
  logMCPDebug
} from "./chunk-KCFW5MKY.mjs";
import {
  figures_default,
  init_figures
} from "./chunk-ZAYB3WZV.mjs";
import {
  errorMessage,
  init_debug,
  init_errors,
  init_slowOperations,
  jsonParse,
  logForDebugging,
  toError
} from "./chunk-L2VTD674.mjs";
import {
  init_envUtils,
  isEnvTruthy
} from "./chunk-6NQGQQQI.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/commands/plugin/AddMarketplace.tsx
function AddMarketplace({
  inputValue,
  setInputValue,
  cursorOffset,
  setCursorOffset,
  error,
  setError,
  result,
  setResult,
  setViewState,
  onAddComplete,
  cliMode = false
}) {
  const hasAttemptedAutoAdd = useRef(false);
  const [isLoading, setLoading] = useState(false);
  const [progressMessage, setProgressMessage] = useState("");
  const handleAdd = async () => {
    const input = inputValue.trim();
    if (!input) {
      setError("Please enter a marketplace source");
      return;
    }
    const parsed = await parseMarketplaceInput(input);
    if (!parsed) {
      setError("Invalid marketplace source format. Try: owner/repo, https://..., or ./path");
      return;
    }
    if ("error" in parsed) {
      setError(parsed.error);
      return;
    }
    setError(null);
    try {
      setLoading(true);
      setProgressMessage("");
      const {
        name,
        resolvedSource
      } = await addMarketplaceSource(parsed, (message) => {
        setProgressMessage(message);
      });
      saveMarketplaceToSettings(name, {
        source: resolvedSource
      });
      clearAllCaches();
      let sourceType = parsed.source;
      if (parsed.source === "github") {
        sourceType = parsed.repo;
      }
      logEvent("tengu_marketplace_added", {
        source_type: sourceType
      });
      if (onAddComplete) {
        await onAddComplete();
      }
      setProgressMessage("");
      setLoading(false);
      if (cliMode) {
        setResult(`Successfully added marketplace: ${name}`);
      } else {
        setViewState({
          type: "browse-marketplace",
          targetMarketplace: name
        });
      }
    } catch (err) {
      const error2 = toError(err);
      logError(error2);
      setError(error2.message);
      setProgressMessage("");
      setLoading(false);
      if (cliMode) {
        setResult(`Error: ${error2.message}`);
      } else {
        setResult(null);
      }
    }
  };
  useEffect(() => {
    if (inputValue && !hasAttemptedAutoAdd.current && !error && !result) {
      hasAttemptedAutoAdd.current = true;
      void handleAdd();
    }
  }, []);
  return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", paddingX: 1, borderStyle: "round" }, /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Add Marketplace")), /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, null, "Enter marketplace source:"), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Examples:"), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " \xB7 owner/repo (GitHub)"), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " \xB7 git@github.com:owner/repo.git (SSH)"), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " \xB7 https://example.com/marketplace.json"), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " \xB7 ./path/to/marketplace"), /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(TextInput, { value: inputValue, onChange: setInputValue, onSubmit: handleAdd, columns: 80, cursorOffset, onChangeCursorOffset: setCursorOffset, focus: true, showCursor: true }))), isLoading && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(Spinner, null), /* @__PURE__ */ createElement(ThemedText, null, progressMessage || "Adding marketplace to configuration\u2026")), error && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { color: "error" }, error)), result && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, null, result))), /* @__PURE__ */ createElement(ThemedBox_default, { marginLeft: 3 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, /* @__PURE__ */ createElement(Byline, null, /* @__PURE__ */ createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "add" }), /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Settings", fallback: "Esc", description: "cancel" })))));
}
var init_AddMarketplace = __esm({
  "src/commands/plugin/AddMarketplace.tsx"() {
    init_react();
    init_react();
    init_analytics();
    init_ConfigurableShortcutHint();
    init_Byline();
    init_KeyboardShortcutHint();
    init_Spinner();
    init_TextInput();
    init_ink();
    init_errors();
    init_log();
    init_cacheUtils();
    init_marketplaceManager();
    init_parseMarketplaceInput();
  }
});

// src/commands/plugin/PluginOptionsDialog.tsx
function buildFinalValues(fields, collected, configSchema, initialValues) {
  const finalValues = {};
  for (const fieldKey of fields) {
    const schema = configSchema[fieldKey];
    const value = collected[fieldKey] ?? "";
    if (schema?.sensitive === true && value === "" && initialValues?.[fieldKey] !== void 0) {
      continue;
    }
    if (schema?.type === "number") {
      if (value.trim() === "") continue;
      const num = Number(value);
      finalValues[fieldKey] = Number.isNaN(num) ? value : num;
    } else if (schema?.type === "boolean") {
      finalValues[fieldKey] = isEnvTruthy(value);
    } else {
      finalValues[fieldKey] = value;
    }
  }
  return finalValues;
}
function PluginOptionsDialog(t0) {
  const $ = c(70);
  const {
    title,
    subtitle,
    configSchema,
    initialValues,
    onSave,
    onCancel
  } = t0;
  let t1;
  if ($[0] !== configSchema) {
    t1 = Object.keys(configSchema);
    $[0] = configSchema;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const fields = t1;
  let t2;
  if ($[2] !== configSchema || $[3] !== initialValues) {
    t2 = (key) => {
      if (configSchema[key]?.sensitive === true) {
        return "";
      }
      const v = initialValues?.[key];
      return v === void 0 ? "" : String(v);
    };
    $[2] = configSchema;
    $[3] = initialValues;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  const initialFor = t2;
  const [currentFieldIndex, setCurrentFieldIndex] = useState(0);
  let t3;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = {};
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  const [values, setValues] = useState(t3);
  let t4;
  if ($[6] !== fields[0] || $[7] !== initialFor) {
    t4 = () => fields[0] ? initialFor(fields[0]) : "";
    $[6] = fields[0];
    $[7] = initialFor;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  const [currentInput, setCurrentInput] = useState(t4);
  const currentField = fields[currentFieldIndex];
  const fieldSchema = currentField ? configSchema[currentField] : null;
  let t5;
  if ($[9] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = {
      context: "Settings"
    };
    $[9] = t5;
  } else {
    t5 = $[9];
  }
  useKeybinding("confirm:no", onCancel, t5);
  let t6;
  if ($[10] !== currentField || $[11] !== currentFieldIndex || $[12] !== currentInput || $[13] !== fields || $[14] !== initialFor) {
    t6 = () => {
      if (currentFieldIndex < fields.length - 1 && currentField) {
        setValues((prev) => ({
          ...prev,
          [currentField]: currentInput
        }));
        setCurrentFieldIndex(_temp);
        const nextKey = fields[currentFieldIndex + 1];
        setCurrentInput(nextKey ? initialFor(nextKey) : "");
      }
    };
    $[10] = currentField;
    $[11] = currentFieldIndex;
    $[12] = currentInput;
    $[13] = fields;
    $[14] = initialFor;
    $[15] = t6;
  } else {
    t6 = $[15];
  }
  const handleNextField = t6;
  let t7;
  if ($[16] !== configSchema || $[17] !== currentField || $[18] !== currentFieldIndex || $[19] !== currentInput || $[20] !== fields || $[21] !== initialFor || $[22] !== initialValues || $[23] !== onSave || $[24] !== values) {
    t7 = () => {
      if (!currentField) {
        return;
      }
      const newValues = {
        ...values,
        [currentField]: currentInput
      };
      if (currentFieldIndex === fields.length - 1) {
        onSave(buildFinalValues(fields, newValues, configSchema, initialValues));
      } else {
        setValues(newValues);
        setCurrentFieldIndex(_temp2);
        const nextKey_0 = fields[currentFieldIndex + 1];
        setCurrentInput(nextKey_0 ? initialFor(nextKey_0) : "");
      }
    };
    $[16] = configSchema;
    $[17] = currentField;
    $[18] = currentFieldIndex;
    $[19] = currentInput;
    $[20] = fields;
    $[21] = initialFor;
    $[22] = initialValues;
    $[23] = onSave;
    $[24] = values;
    $[25] = t7;
  } else {
    t7 = $[25];
  }
  const handleConfirm = t7;
  let t8;
  if ($[26] !== handleConfirm || $[27] !== handleNextField) {
    t8 = {
      "confirm:nextField": handleNextField,
      "confirm:yes": handleConfirm
    };
    $[26] = handleConfirm;
    $[27] = handleNextField;
    $[28] = t8;
  } else {
    t8 = $[28];
  }
  let t9;
  if ($[29] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t9 = {
      context: "Confirmation"
    };
    $[29] = t9;
  } else {
    t9 = $[29];
  }
  useKeybindings(t8, t9);
  let t10;
  if ($[30] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t10 = (char, key_0) => {
      if (key_0.backspace || key_0.delete) {
        setCurrentInput(_temp3);
        return;
      }
      if (char && !key_0.ctrl && !key_0.meta && !key_0.tab && !key_0.return) {
        setCurrentInput((prev_3) => prev_3 + char);
      }
    };
    $[30] = t10;
  } else {
    t10 = $[30];
  }
  use_input_default(t10);
  if (!fieldSchema || !currentField) {
    return null;
  }
  const isSensitive = fieldSchema.sensitive === true;
  const isRequired = fieldSchema.required === true;
  let t11;
  if ($[31] !== currentInput || $[32] !== isSensitive) {
    t11 = isSensitive ? "*".repeat(stringWidth(currentInput)) : currentInput;
    $[31] = currentInput;
    $[32] = isSensitive;
    $[33] = t11;
  } else {
    t11 = $[33];
  }
  const displayValue = t11;
  const t12 = fieldSchema.title || currentField;
  let t13;
  if ($[34] !== isRequired) {
    t13 = isRequired && /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, " *");
    $[34] = isRequired;
    $[35] = t13;
  } else {
    t13 = $[35];
  }
  let t14;
  if ($[36] !== t12 || $[37] !== t13) {
    t14 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, t12, t13);
    $[36] = t12;
    $[37] = t13;
    $[38] = t14;
  } else {
    t14 = $[38];
  }
  let t15;
  if ($[39] !== fieldSchema.description) {
    t15 = fieldSchema.description && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, fieldSchema.description);
    $[39] = fieldSchema.description;
    $[40] = t15;
  } else {
    t15 = $[40];
  }
  let t16;
  if ($[41] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t16 = /* @__PURE__ */ react_default.createElement(ThemedText, null, figures_default.pointerSmall, " ");
    $[41] = t16;
  } else {
    t16 = $[41];
  }
  let t17;
  if ($[42] !== displayValue) {
    t17 = /* @__PURE__ */ react_default.createElement(ThemedText, null, displayValue);
    $[42] = displayValue;
    $[43] = t17;
  } else {
    t17 = $[43];
  }
  let t18;
  if ($[44] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t18 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2588");
    $[44] = t18;
  } else {
    t18 = $[44];
  }
  let t19;
  if ($[45] !== t17) {
    t19 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, t16, t17, t18);
    $[45] = t17;
    $[46] = t19;
  } else {
    t19 = $[46];
  }
  let t20;
  if ($[47] !== t14 || $[48] !== t15 || $[49] !== t19) {
    t20 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, t14, t15, t19);
    $[47] = t14;
    $[48] = t15;
    $[49] = t19;
    $[50] = t20;
  } else {
    t20 = $[50];
  }
  const t21 = currentFieldIndex + 1;
  let t22;
  if ($[51] !== fields.length || $[52] !== t21) {
    t22 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Field ", t21, " of ", fields.length);
    $[51] = fields.length;
    $[52] = t21;
    $[53] = t22;
  } else {
    t22 = $[53];
  }
  let t23;
  if ($[54] !== currentFieldIndex || $[55] !== fields.length) {
    t23 = currentFieldIndex < fields.length - 1 && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Tab: Next field \xB7 Enter: Save and continue");
    $[54] = currentFieldIndex;
    $[55] = fields.length;
    $[56] = t23;
  } else {
    t23 = $[56];
  }
  let t24;
  if ($[57] !== currentFieldIndex || $[58] !== fields.length) {
    t24 = currentFieldIndex === fields.length - 1 && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Enter: Save configuration");
    $[57] = currentFieldIndex;
    $[58] = fields.length;
    $[59] = t24;
  } else {
    t24 = $[59];
  }
  let t25;
  if ($[60] !== t22 || $[61] !== t23 || $[62] !== t24) {
    t25 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, t22, t23, t24);
    $[60] = t22;
    $[61] = t23;
    $[62] = t24;
    $[63] = t25;
  } else {
    t25 = $[63];
  }
  let t26;
  if ($[64] !== onCancel || $[65] !== subtitle || $[66] !== t20 || $[67] !== t25 || $[68] !== title) {
    t26 = /* @__PURE__ */ react_default.createElement(Dialog, { title, subtitle, onCancel, isCancelActive: false }, t20, t25);
    $[64] = onCancel;
    $[65] = subtitle;
    $[66] = t20;
    $[67] = t25;
    $[68] = title;
    $[69] = t26;
  } else {
    t26 = $[69];
  }
  return t26;
}
function _temp3(prev_2) {
  return prev_2.slice(0, -1);
}
function _temp2(prev_1) {
  return prev_1 + 1;
}
function _temp(prev_0) {
  return prev_0 + 1;
}
var init_PluginOptionsDialog = __esm({
  "src/commands/plugin/PluginOptionsDialog.tsx"() {
    init_react_compiler_runtime();
    init_figures();
    init_react();
    init_Dialog();
    init_stringWidth();
    init_ink();
    init_useKeybinding();
    init_envUtils();
  }
});

// src/commands/plugin/PluginOptionsFlow.tsx
async function findPluginOptionsTarget(pluginId) {
  const {
    enabled,
    disabled
  } = await loadAllPlugins();
  return [...enabled, ...disabled].find((p) => p.repository === pluginId || p.source === pluginId);
}
function PluginOptionsFlow({
  plugin,
  pluginId,
  onDone
}) {
  const [steps] = useState(() => {
    const result = [];
    const unconfigured = getUnconfiguredOptions(plugin);
    if (Object.keys(unconfigured).length > 0) {
      result.push({
        key: "top-level",
        title: `Configure ${plugin.name}`,
        subtitle: "Plugin options",
        schema: unconfigured,
        load: () => loadPluginOptions(pluginId),
        save: (values) => savePluginOptions(pluginId, values, plugin.manifest.userConfig)
      });
    }
    const channels = getUnconfiguredChannels(plugin);
    for (const channel of channels) {
      result.push({
        key: `channel:${channel.server}`,
        title: `Configure ${channel.displayName}`,
        subtitle: `Plugin: ${plugin.name}`,
        schema: channel.configSchema,
        load: () => loadMcpServerUserConfig(pluginId, channel.server) ?? void 0,
        save: (values_0) => saveMcpServerUserConfig(pluginId, channel.server, values_0, channel.configSchema)
      });
    }
    return result;
  });
  const [index, setIndex] = useState(0);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;
  useEffect(() => {
    if (steps.length === 0) {
      onDoneRef.current("skipped");
    }
  }, [steps.length]);
  if (steps.length === 0) {
    return null;
  }
  const current = steps[index];
  function handleSave(values_1) {
    try {
      current.save(values_1);
    } catch (err) {
      onDone("error", errorMessage(err));
      return;
    }
    const next = index + 1;
    if (next < steps.length) {
      setIndex(next);
    } else {
      onDone("configured");
    }
  }
  return /* @__PURE__ */ createElement(PluginOptionsDialog, { key: current.key, title: current.title, subtitle: current.subtitle, configSchema: current.schema, initialValues: current.load(), onSave: handleSave, onCancel: () => onDone("skipped") });
}
var init_PluginOptionsFlow = __esm({
  "src/commands/plugin/PluginOptionsFlow.tsx"() {
    init_react();
    init_errors();
    init_mcpbHandler();
    init_mcpPluginIntegration();
    init_pluginLoader();
    init_pluginOptionsStorage();
    init_PluginOptionsDialog();
  }
});

// src/commands/plugin/PluginTrustWarning.tsx
function PluginTrustWarning() {
  const $ = c(3);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = getPluginTrustMessage();
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  const customMessage = t0;
  let t1;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ createElement(ThemedText, { color: "claude" }, figures_default.warning, " ");
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, t1, /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, "Make sure you trust a plugin before installing, updating, or using it. Anthropic does not control what MCP servers, files, or other software are included in plugins and cannot verify that they will work as intended or that they won't change. See each plugin's homepage for more information.", customMessage ? ` ${customMessage}` : ""));
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  return t2;
}
var init_PluginTrustWarning = __esm({
  "src/commands/plugin/PluginTrustWarning.tsx"() {
    init_react_compiler_runtime();
    init_figures();
    init_react();
    init_ink();
    init_marketplaceHelpers();
  }
});

// src/commands/plugin/pluginDetailsHelpers.tsx
function extractGitHubRepo(plugin) {
  const isGitHub = plugin.entry.source && typeof plugin.entry.source === "object" && "source" in plugin.entry.source && plugin.entry.source.source === "github";
  if (isGitHub && typeof plugin.entry.source === "object" && "repo" in plugin.entry.source) {
    return plugin.entry.source.repo;
  }
  return null;
}
function buildPluginDetailsMenuOptions(hasHomepage, githubRepo) {
  const options = [{
    label: "Install for you (user scope)",
    action: "install-user"
  }, {
    label: "Install for all collaborators on this repository (project scope)",
    action: "install-project"
  }, {
    label: "Install for you, in this repo only (local scope)",
    action: "install-local"
  }];
  if (hasHomepage) {
    options.push({
      label: "Open homepage",
      action: "homepage"
    });
  }
  if (githubRepo) {
    options.push({
      label: "View on GitHub",
      action: "github"
    });
  }
  options.push({
    label: "Back to plugin list",
    action: "back"
  });
  return options;
}
function PluginSelectionKeyHint(t0) {
  const $ = c(7);
  const {
    hasSelection
  } = t0;
  let t1;
  if ($[0] !== hasSelection) {
    t1 = hasSelection && /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "plugin:install", context: "Plugin", fallback: "i", description: "install", bold: true });
    $[0] = hasSelection;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  let t3;
  let t4;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "plugin:toggle", context: "Plugin", fallback: "Space", description: "toggle" });
    t3 = /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "select:accept", context: "Select", fallback: "Enter", description: "details" });
    t4 = /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "back" });
    $[2] = t2;
    $[3] = t3;
    $[4] = t4;
  } else {
    t2 = $[2];
    t3 = $[3];
    t4 = $[4];
  }
  let t5;
  if ($[5] !== t1) {
    t5 = /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, /* @__PURE__ */ createElement(Byline, null, t1, t2, t3, t4)));
    $[5] = t1;
    $[6] = t5;
  } else {
    t5 = $[6];
  }
  return t5;
}
var init_pluginDetailsHelpers = __esm({
  "src/commands/plugin/pluginDetailsHelpers.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ConfigurableShortcutHint();
    init_Byline();
    init_ink();
  }
});

// src/commands/plugin/usePagination.ts
function usePagination({
  totalItems,
  maxVisible = DEFAULT_MAX_VISIBLE,
  selectedIndex = 0
}) {
  const needsPagination = totalItems > maxVisible;
  const scrollOffsetRef = useRef(0);
  const scrollOffset = useMemo(() => {
    if (!needsPagination) return 0;
    const prevOffset = scrollOffsetRef.current;
    if (selectedIndex < prevOffset) {
      scrollOffsetRef.current = selectedIndex;
      return selectedIndex;
    }
    if (selectedIndex >= prevOffset + maxVisible) {
      const newOffset = selectedIndex - maxVisible + 1;
      scrollOffsetRef.current = newOffset;
      return newOffset;
    }
    const maxOffset = Math.max(0, totalItems - maxVisible);
    const clampedOffset = Math.min(prevOffset, maxOffset);
    scrollOffsetRef.current = clampedOffset;
    return clampedOffset;
  }, [selectedIndex, maxVisible, needsPagination, totalItems]);
  const startIndex = scrollOffset;
  const endIndex = Math.min(scrollOffset + maxVisible, totalItems);
  const getVisibleItems = useCallback(
    (items) => {
      if (!needsPagination) return items;
      return items.slice(startIndex, endIndex);
    },
    [needsPagination, startIndex, endIndex]
  );
  const toActualIndex = useCallback(
    (visibleIndex) => {
      return startIndex + visibleIndex;
    },
    [startIndex]
  );
  const isOnCurrentPage = useCallback(
    (actualIndex) => {
      return actualIndex >= startIndex && actualIndex < endIndex;
    },
    [startIndex, endIndex]
  );
  const goToPage = useCallback((_page) => {
  }, []);
  const nextPage = useCallback(() => {
  }, []);
  const prevPage = useCallback(() => {
  }, []);
  const handleSelectionChange = useCallback(
    (newIndex, setSelectedIndex) => {
      const clampedIndex = Math.max(0, Math.min(newIndex, totalItems - 1));
      setSelectedIndex(clampedIndex);
    },
    [totalItems]
  );
  const handlePageNavigation = useCallback(
    (_direction, _setSelectedIndex) => {
      return false;
    },
    []
  );
  const totalPages = Math.max(1, Math.ceil(totalItems / maxVisible));
  const currentPage = Math.floor(scrollOffset / maxVisible);
  return {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    needsPagination,
    pageSize: maxVisible,
    getVisibleItems,
    toActualIndex,
    isOnCurrentPage,
    goToPage,
    nextPage,
    prevPage,
    handleSelectionChange,
    handlePageNavigation,
    scrollPosition: {
      current: selectedIndex + 1,
      total: totalItems,
      canScrollUp: scrollOffset > 0,
      canScrollDown: scrollOffset + maxVisible < totalItems
    }
  };
}
var DEFAULT_MAX_VISIBLE;
var init_usePagination = __esm({
  "src/commands/plugin/usePagination.ts"() {
    init_react();
    DEFAULT_MAX_VISIBLE = 5;
  }
});

// src/commands/plugin/BrowseMarketplace.tsx
function BrowseMarketplace({
  error,
  setError,
  result: _result,
  setResult,
  setViewState: setParentViewState,
  onInstallComplete,
  targetMarketplace,
  targetPlugin
}) {
  const [viewState, setViewState] = useState("marketplace-list");
  const [selectedMarketplace, setSelectedMarketplace] = useState(null);
  const [selectedPlugin, setSelectedPlugin] = useState(null);
  const [marketplaces, setMarketplaces] = useState([]);
  const [availablePlugins, setAvailablePlugins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [installCounts, setInstallCounts] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedForInstall, setSelectedForInstall] = useState(/* @__PURE__ */ new Set());
  const [installingPlugins, setInstallingPlugins] = useState(/* @__PURE__ */ new Set());
  const pagination = usePagination({
    totalItems: availablePlugins.length,
    selectedIndex
  });
  const [detailsMenuIndex, setDetailsMenuIndex] = useState(0);
  const [isInstalling, setIsInstalling] = useState(false);
  const [installError, setInstallError] = useState(null);
  const [warning, setWarning] = useState(null);
  const handleBack = useCallback(() => {
    if (viewState === "plugin-list") {
      if (targetMarketplace) {
        setParentViewState({
          type: "manage-marketplaces",
          targetMarketplace
        });
      } else if (marketplaces.length === 1) {
        setParentViewState({
          type: "menu"
        });
      } else {
        setViewState("marketplace-list");
        setSelectedMarketplace(null);
        setSelectedForInstall(/* @__PURE__ */ new Set());
      }
    } else if (viewState === "plugin-details") {
      setViewState("plugin-list");
      setSelectedPlugin(null);
    } else {
      setParentViewState({
        type: "menu"
      });
    }
  }, [viewState, targetMarketplace, setParentViewState, marketplaces.length]);
  useKeybinding("confirm:no", handleBack, {
    context: "Confirmation"
  });
  useEffect(() => {
    async function loadMarketplaceData() {
      try {
        const config = await loadKnownMarketplacesConfig();
        const {
          marketplaces: marketplaces_0,
          failures
        } = await loadMarketplacesWithGracefulDegradation(config);
        const marketplaceInfos = [];
        for (const {
          name,
          config: marketplaceConfig,
          data: marketplace
        } of marketplaces_0) {
          if (marketplace) {
            const installedFromThisMarketplace = count(marketplace.plugins, (plugin) => isPluginInstalled(createPluginId(plugin.name, name)));
            marketplaceInfos.push({
              name,
              totalPlugins: marketplace.plugins.length,
              installedCount: installedFromThisMarketplace,
              source: getMarketplaceSourceDisplay(marketplaceConfig.source)
            });
          }
        }
        marketplaceInfos.sort((a, b) => {
          if (a.name === "claude-plugin-directory") return -1;
          if (b.name === "claude-plugin-directory") return 1;
          return 0;
        });
        setMarketplaces(marketplaceInfos);
        const successCount = count(marketplaces_0, (m) => m.data !== null);
        const errorResult = formatMarketplaceLoadingErrors(failures, successCount);
        if (errorResult) {
          if (errorResult.type === "warning") {
            setWarning(errorResult.message + ". Showing available marketplaces.");
          } else {
            throw new Error(errorResult.message);
          }
        }
        if (marketplaceInfos.length === 1 && !targetMarketplace && !targetPlugin) {
          const singleMarketplace = marketplaceInfos[0];
          if (singleMarketplace) {
            setSelectedMarketplace(singleMarketplace.name);
            setViewState("plugin-list");
          }
        }
        if (targetPlugin) {
          let foundPlugin = null;
          let foundMarketplace = null;
          for (const [name_0] of Object.entries(config)) {
            const marketplace_0 = await getMarketplace(name_0);
            if (marketplace_0) {
              const plugin_0 = marketplace_0.plugins.find((p) => p.name === targetPlugin);
              if (plugin_0) {
                const pluginId = createPluginId(plugin_0.name, name_0);
                foundPlugin = {
                  entry: plugin_0,
                  marketplaceName: name_0,
                  pluginId,
                  // isPluginGloballyInstalled: only block when user/managed scope
                  // exists (nothing to add). Project/local-scope installs don't
                  // block — user may want to promote to user scope (gh-29997).
                  isInstalled: isPluginGloballyInstalled(pluginId)
                };
                foundMarketplace = name_0;
                break;
              }
            }
          }
          if (foundPlugin && foundMarketplace) {
            const pluginId_0 = foundPlugin.pluginId;
            const globallyInstalled = isPluginGloballyInstalled(pluginId_0);
            if (globallyInstalled) {
              setError(`Plugin '${pluginId_0}' is already installed globally. Use '/plugin' to manage existing plugins.`);
            } else {
              setSelectedMarketplace(foundMarketplace);
              setSelectedPlugin(foundPlugin);
              setViewState("plugin-details");
            }
          } else {
            setError(`Plugin "${targetPlugin}" not found in any marketplace`);
          }
        } else if (targetMarketplace) {
          const marketplaceExists = marketplaceInfos.some((m_0) => m_0.name === targetMarketplace);
          if (marketplaceExists) {
            setSelectedMarketplace(targetMarketplace);
            setViewState("plugin-list");
          } else {
            setError(`Marketplace "${targetMarketplace}" not found`);
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load marketplaces");
      } finally {
        setLoading(false);
      }
    }
    void loadMarketplaceData();
  }, [setError, targetMarketplace, targetPlugin]);
  useEffect(() => {
    if (!selectedMarketplace) return;
    let cancelled = false;
    async function loadPluginsForMarketplace(marketplaceName) {
      setLoading(true);
      try {
        const marketplace_1 = await getMarketplace(marketplaceName);
        if (cancelled) return;
        if (!marketplace_1) {
          throw new Error(`Failed to load marketplace: ${marketplaceName}`);
        }
        const installablePlugins = [];
        for (const entry of marketplace_1.plugins) {
          const pluginId_1 = createPluginId(entry.name, marketplaceName);
          if (isPluginBlockedByPolicy(pluginId_1)) continue;
          installablePlugins.push({
            entry,
            marketplaceName,
            pluginId: pluginId_1,
            // Only mark as "installed" when globally scoped (user/managed).
            // Project/local installs don't block — user can add user scope
            // via the plugin-details view (gh-29997).
            isInstalled: isPluginGloballyInstalled(pluginId_1)
          });
        }
        try {
          const counts = await getInstallCounts();
          if (cancelled) return;
          setInstallCounts(counts);
          if (counts) {
            installablePlugins.sort((a_1, b_1) => {
              const countA = counts.get(a_1.pluginId) ?? 0;
              const countB = counts.get(b_1.pluginId) ?? 0;
              if (countA !== countB) return countB - countA;
              return a_1.entry.name.localeCompare(b_1.entry.name);
            });
          } else {
            installablePlugins.sort((a_2, b_2) => a_2.entry.name.localeCompare(b_2.entry.name));
          }
        } catch (error_0) {
          if (cancelled) return;
          logForDebugging(`Failed to fetch install counts: ${errorMessage(error_0)}`);
          installablePlugins.sort((a_0, b_0) => a_0.entry.name.localeCompare(b_0.entry.name));
        }
        setAvailablePlugins(installablePlugins);
        setSelectedIndex(0);
        setSelectedForInstall(/* @__PURE__ */ new Set());
      } catch (err_0) {
        if (cancelled) return;
        setError(err_0 instanceof Error ? err_0.message : "Failed to load plugins");
      } finally {
        setLoading(false);
      }
    }
    void loadPluginsForMarketplace(selectedMarketplace);
    return () => {
      cancelled = true;
    };
  }, [selectedMarketplace, setError]);
  const installSelectedPlugins = async () => {
    if (selectedForInstall.size === 0) return;
    const pluginsToInstall = availablePlugins.filter((p_0) => selectedForInstall.has(p_0.pluginId));
    setInstallingPlugins(new Set(pluginsToInstall.map((p_1) => p_1.pluginId)));
    let successCount_0 = 0;
    let failureCount = 0;
    const newFailedPlugins = [];
    for (const plugin_1 of pluginsToInstall) {
      const result = await installPluginFromMarketplace({
        pluginId: plugin_1.pluginId,
        entry: plugin_1.entry,
        marketplaceName: plugin_1.marketplaceName,
        scope: "user"
      });
      if (result.success) {
        successCount_0++;
      } else {
        failureCount++;
        newFailedPlugins.push({
          name: plugin_1.entry.name,
          reason: result.error
        });
      }
    }
    setInstallingPlugins(/* @__PURE__ */ new Set());
    setSelectedForInstall(/* @__PURE__ */ new Set());
    clearAllCaches();
    if (failureCount === 0) {
      const message = `\u2713 Installed ${successCount_0} ${plural(successCount_0, "plugin")}. Run /reload-plugins to activate.`;
      setResult(message);
    } else if (successCount_0 === 0) {
      setError(`Failed to install: ${formatFailureDetails(newFailedPlugins, true)}`);
    } else {
      const message_0 = `\u2713 Installed ${successCount_0} of ${successCount_0 + failureCount} plugins. Failed: ${formatFailureDetails(newFailedPlugins, false)}. Run /reload-plugins to activate successfully installed plugins.`;
      setResult(message_0);
    }
    if (successCount_0 > 0) {
      if (onInstallComplete) {
        await onInstallComplete();
      }
    }
    setParentViewState({
      type: "menu"
    });
  };
  const handleSinglePluginInstall = async (plugin_2, scope = "user") => {
    setIsInstalling(true);
    setInstallError(null);
    const result_0 = await installPluginFromMarketplace({
      pluginId: plugin_2.pluginId,
      entry: plugin_2.entry,
      marketplaceName: plugin_2.marketplaceName,
      scope
    });
    if (result_0.success) {
      const loaded = await findPluginOptionsTarget(plugin_2.pluginId);
      if (loaded) {
        setIsInstalling(false);
        setViewState({
          type: "plugin-options",
          plugin: loaded,
          pluginId: plugin_2.pluginId
        });
        return;
      }
      setResult(result_0.message);
      if (onInstallComplete) {
        await onInstallComplete();
      }
      setParentViewState({
        type: "menu"
      });
    } else {
      setIsInstalling(false);
      setInstallError(result_0.error);
    }
  };
  useEffect(() => {
    if (error) {
      setResult(error);
    }
  }, [error, setResult]);
  useKeybindings({
    "select:previous": () => {
      if (selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1);
      }
    },
    "select:next": () => {
      if (selectedIndex < marketplaces.length - 1) {
        setSelectedIndex(selectedIndex + 1);
      }
    },
    "select:accept": () => {
      const marketplace_2 = marketplaces[selectedIndex];
      if (marketplace_2) {
        setSelectedMarketplace(marketplace_2.name);
        setViewState("plugin-list");
      }
    }
  }, {
    context: "Select",
    isActive: viewState === "marketplace-list"
  });
  useKeybindings({
    "select:previous": () => {
      if (selectedIndex > 0) {
        pagination.handleSelectionChange(selectedIndex - 1, setSelectedIndex);
      }
    },
    "select:next": () => {
      if (selectedIndex < availablePlugins.length - 1) {
        pagination.handleSelectionChange(selectedIndex + 1, setSelectedIndex);
      }
    },
    "select:accept": () => {
      if (selectedIndex === availablePlugins.length && selectedForInstall.size > 0) {
        void installSelectedPlugins();
      } else if (selectedIndex < availablePlugins.length) {
        const plugin_3 = availablePlugins[selectedIndex];
        if (plugin_3) {
          if (plugin_3.isInstalled) {
            setParentViewState({
              type: "manage-plugins",
              targetPlugin: plugin_3.entry.name,
              targetMarketplace: plugin_3.marketplaceName
            });
          } else {
            setSelectedPlugin(plugin_3);
            setViewState("plugin-details");
            setDetailsMenuIndex(0);
            setInstallError(null);
          }
        }
      }
    }
  }, {
    context: "Select",
    isActive: viewState === "plugin-list"
  });
  useKeybindings({
    "plugin:toggle": () => {
      if (selectedIndex < availablePlugins.length) {
        const plugin_4 = availablePlugins[selectedIndex];
        if (plugin_4 && !plugin_4.isInstalled) {
          const newSelection = new Set(selectedForInstall);
          if (newSelection.has(plugin_4.pluginId)) {
            newSelection.delete(plugin_4.pluginId);
          } else {
            newSelection.add(plugin_4.pluginId);
          }
          setSelectedForInstall(newSelection);
        }
      }
    },
    "plugin:install": () => {
      if (selectedForInstall.size > 0) {
        void installSelectedPlugins();
      }
    }
  }, {
    context: "Plugin",
    isActive: viewState === "plugin-list"
  });
  const detailsMenuOptions = useMemo(() => {
    if (!selectedPlugin) return [];
    const hasHomepage = selectedPlugin.entry.homepage;
    const githubRepo = extractGitHubRepo(selectedPlugin);
    return buildPluginDetailsMenuOptions(hasHomepage, githubRepo);
  }, [selectedPlugin]);
  useKeybindings({
    "select:previous": () => {
      if (detailsMenuIndex > 0) {
        setDetailsMenuIndex(detailsMenuIndex - 1);
      }
    },
    "select:next": () => {
      if (detailsMenuIndex < detailsMenuOptions.length - 1) {
        setDetailsMenuIndex(detailsMenuIndex + 1);
      }
    },
    "select:accept": () => {
      if (!selectedPlugin) return;
      const action = detailsMenuOptions[detailsMenuIndex]?.action;
      const hasHomepage_0 = selectedPlugin.entry.homepage;
      const githubRepo_0 = extractGitHubRepo(selectedPlugin);
      if (action === "install-user") {
        void handleSinglePluginInstall(selectedPlugin, "user");
      } else if (action === "install-project") {
        void handleSinglePluginInstall(selectedPlugin, "project");
      } else if (action === "install-local") {
        void handleSinglePluginInstall(selectedPlugin, "local");
      } else if (action === "homepage" && hasHomepage_0) {
        void openBrowser(hasHomepage_0);
      } else if (action === "github" && githubRepo_0) {
        void openBrowser(`https://github.com/${githubRepo_0}`);
      } else if (action === "back") {
        setViewState("plugin-list");
        setSelectedPlugin(null);
      }
    }
  }, {
    context: "Select",
    isActive: viewState === "plugin-details" && !!selectedPlugin
  });
  if (typeof viewState === "object" && viewState.type === "plugin-options") {
    let finish = function(msg) {
      setResult(msg);
      if (onInstallComplete) {
        void onInstallComplete();
      }
      setParentViewState({
        type: "menu"
      });
    };
    const {
      plugin: plugin_5,
      pluginId: pluginId_2
    } = viewState;
    return /* @__PURE__ */ createElement(PluginOptionsFlow, { plugin: plugin_5, pluginId: pluginId_2, onDone: (outcome, detail) => {
      switch (outcome) {
        case "configured":
          finish(`\u2713 Installed and configured ${plugin_5.name}. Run /reload-plugins to apply.`);
          break;
        case "skipped":
          finish(`\u2713 Installed ${plugin_5.name}. Run /reload-plugins to apply.`);
          break;
        case "error":
          finish(`Installed but failed to save config: ${detail}`);
          break;
      }
    } });
  }
  if (loading) {
    return /* @__PURE__ */ createElement(ThemedText, null, "Loading\u2026");
  }
  if (error) {
    return /* @__PURE__ */ createElement(ThemedText, { color: "error" }, error);
  }
  if (viewState === "marketplace-list") {
    if (marketplaces.length === 0) {
      return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Select marketplace")), /* @__PURE__ */ createElement(ThemedText, null, "No marketplaces configured."), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Add a marketplace first using ", "'Add marketplace'", "."), /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1, paddingLeft: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "go back" }))));
    }
    return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Select marketplace")), warning && /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1, flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, { color: "warning" }, figures_default.warning, " ", warning)), marketplaces.map((marketplace_3, index) => /* @__PURE__ */ createElement(ThemedBox_default, { key: marketplace_3.name, flexDirection: "column", marginBottom: index < marketplaces.length - 1 ? 1 : 0 }, /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(ThemedText, { color: selectedIndex === index ? "suggestion" : void 0 }, selectedIndex === index ? figures_default.pointer : " ", " ", marketplace_3.name)), /* @__PURE__ */ createElement(ThemedBox_default, { marginLeft: 2 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, marketplace_3.totalPlugins, " ", plural(marketplace_3.totalPlugins, "plugin"), " available", marketplace_3.installedCount > 0 && ` \xB7 ${marketplace_3.installedCount} already installed`, marketplace_3.source && ` \xB7 ${marketplace_3.source}`)))), /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, /* @__PURE__ */ createElement(Byline, null, /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "select:accept", context: "Select", fallback: "Enter", description: "select" }), /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "go back" })))));
  }
  if (viewState === "plugin-details" && selectedPlugin) {
    const hasHomepage_1 = selectedPlugin.entry.homepage;
    const githubRepo_1 = extractGitHubRepo(selectedPlugin);
    const menuOptions = buildPluginDetailsMenuOptions(hasHomepage_1, githubRepo_1);
    return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Plugin Details")), /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { bold: true }, selectedPlugin.entry.name), selectedPlugin.entry.version && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Version: ", selectedPlugin.entry.version), selectedPlugin.entry.description && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, null, selectedPlugin.entry.description)), selectedPlugin.entry.author && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "By:", " ", typeof selectedPlugin.entry.author === "string" ? selectedPlugin.entry.author : selectedPlugin.entry.author.name))), /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Will install:"), selectedPlugin.entry.commands && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "\xB7 Commands:", " ", Array.isArray(selectedPlugin.entry.commands) ? selectedPlugin.entry.commands.join(", ") : Object.keys(selectedPlugin.entry.commands).join(", ")), selectedPlugin.entry.agents && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "\xB7 Agents:", " ", Array.isArray(selectedPlugin.entry.agents) ? selectedPlugin.entry.agents.join(", ") : Object.keys(selectedPlugin.entry.agents).join(", ")), selectedPlugin.entry.hooks && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "\xB7 Hooks: ", Object.keys(selectedPlugin.entry.hooks).join(", ")), selectedPlugin.entry.mcpServers && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "\xB7 MCP Servers:", " ", Array.isArray(selectedPlugin.entry.mcpServers) ? selectedPlugin.entry.mcpServers.join(", ") : typeof selectedPlugin.entry.mcpServers === "object" ? Object.keys(selectedPlugin.entry.mcpServers).join(", ") : "configured"), !selectedPlugin.entry.commands && !selectedPlugin.entry.agents && !selectedPlugin.entry.hooks && !selectedPlugin.entry.mcpServers && /* @__PURE__ */ createElement(Fragment, null, typeof selectedPlugin.entry.source === "object" && "source" in selectedPlugin.entry.source && (selectedPlugin.entry.source.source === "github" || selectedPlugin.entry.source.source === "url" || selectedPlugin.entry.source.source === "npm" || selectedPlugin.entry.source.source === "pip") ? /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "\xB7 Component summary not available for remote plugin") : (
      // TODO: Actually scan local plugin directories to show real components
      // This would require accessing the filesystem to check for:
      // - commands/ directory and list files
      // - agents/ directory and list files
      // - hooks/ directory and list files
      // - .mcp.json or mcp-servers.json files
      /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "\xB7 Components will be discovered at installation")
    ))), /* @__PURE__ */ createElement(PluginTrustWarning, null), installError && /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { color: "error" }, "Error: ", installError)), /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, menuOptions.map((option, index_0) => /* @__PURE__ */ createElement(ThemedBox_default, { key: option.action }, detailsMenuIndex === index_0 && /* @__PURE__ */ createElement(ThemedText, null, "> "), detailsMenuIndex !== index_0 && /* @__PURE__ */ createElement(ThemedText, null, "  "), /* @__PURE__ */ createElement(ThemedText, { bold: detailsMenuIndex === index_0 }, isInstalling && option.action === "install" ? "Installing\u2026" : option.label)))), /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1, paddingLeft: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ createElement(Byline, null, /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "select:accept", context: "Select", fallback: "Enter", description: "select" }), /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "back" })))));
  }
  if (availablePlugins.length === 0) {
    return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Install plugins")), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "No new plugins available to install."), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "All plugins from this marketplace are already installed."), /* @__PURE__ */ createElement(ThemedBox_default, { marginLeft: 3 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "go back" }))));
  }
  const visiblePlugins = pagination.getVisibleItems(availablePlugins);
  return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Install Plugins")), pagination.scrollPosition.canScrollUp && /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " ", figures_default.arrowUp, " more above")), visiblePlugins.map((plugin_6, visibleIndex) => {
    const actualIndex = pagination.toActualIndex(visibleIndex);
    const isSelected = selectedIndex === actualIndex;
    const isSelectedForInstall = selectedForInstall.has(plugin_6.pluginId);
    const isInstalling_0 = installingPlugins.has(plugin_6.pluginId);
    const isLast = visibleIndex === visiblePlugins.length - 1;
    return /* @__PURE__ */ createElement(ThemedBox_default, { key: plugin_6.pluginId, flexDirection: "column", marginBottom: isLast && !error ? 0 : 1 }, /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(ThemedText, { color: isSelected ? "suggestion" : void 0 }, isSelected ? figures_default.pointer : " ", " "), /* @__PURE__ */ createElement(ThemedText, { color: plugin_6.isInstalled ? "success" : void 0 }, plugin_6.isInstalled ? figures_default.tick : isInstalling_0 ? figures_default.ellipsis : isSelectedForInstall ? figures_default.radioOn : figures_default.radioOff, " ", plugin_6.entry.name, plugin_6.entry.category && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " [", plugin_6.entry.category, "]"), plugin_6.entry.tags?.includes("community-managed") && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " [Community Managed]"), plugin_6.isInstalled && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " (installed)"), installCounts && selectedMarketplace === OFFICIAL_MARKETPLACE_NAME && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " \xB7 ", formatInstallCount(installCounts.get(plugin_6.pluginId) ?? 0), " ", "installs"))), plugin_6.entry.description && /* @__PURE__ */ createElement(ThemedBox_default, { marginLeft: 4 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, truncateToWidth(plugin_6.entry.description, 60)), plugin_6.entry.version && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " \xB7 v", plugin_6.entry.version)));
  }), pagination.scrollPosition.canScrollDown && /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " ", figures_default.arrowDown, " more below")), error && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { color: "error" }, figures_default.cross, " ", error)), /* @__PURE__ */ createElement(PluginSelectionKeyHint, { hasSelection: selectedForInstall.size > 0 }));
}
var init_BrowseMarketplace = __esm({
  "src/commands/plugin/BrowseMarketplace.tsx"() {
    init_figures();
    init_react();
    init_react();
    init_ConfigurableShortcutHint();
    init_Byline();
    init_ink();
    init_useKeybinding();
    init_array();
    init_browser();
    init_debug();
    init_errors();
    init_cacheUtils();
    init_installCounts();
    init_installedPluginsManager();
    init_marketplaceHelpers();
    init_marketplaceManager();
    init_officialMarketplace();
    init_pluginInstallationHelpers();
    init_pluginPolicy();
    init_stringUtils();
    init_truncate();
    init_PluginOptionsFlow();
    init_PluginTrustWarning();
    init_pluginDetailsHelpers();
    init_usePagination();
  }
});

// src/commands/plugin/DiscoverPlugins.tsx
function DiscoverPlugins({
  error,
  setError,
  result: _result,
  setResult,
  setViewState: setParentViewState,
  onInstallComplete,
  onSearchModeChange,
  targetPlugin
}) {
  const [viewState, setViewState] = useState("plugin-list");
  const [selectedPlugin, setSelectedPlugin] = useState(null);
  const [availablePlugins, setAvailablePlugins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [installCounts, setInstallCounts] = useState(null);
  const [isSearchMode, setIsSearchModeRaw] = useState(false);
  const setIsSearchMode = useCallback((active) => {
    setIsSearchModeRaw(active);
    onSearchModeChange?.(active);
  }, [onSearchModeChange]);
  const {
    query: searchQuery,
    setQuery: setSearchQuery,
    cursorOffset: searchCursorOffset
  } = useSearchInput({
    isActive: viewState === "plugin-list" && isSearchMode && !loading,
    onExit: () => {
      setIsSearchMode(false);
    }
  });
  const isTerminalFocused = useTerminalFocus();
  const {
    columns: terminalWidth
  } = useTerminalSize();
  const filteredPlugins = useMemo(() => {
    if (!searchQuery) return availablePlugins;
    const lowerQuery = searchQuery.toLowerCase();
    return availablePlugins.filter((plugin) => plugin.entry.name.toLowerCase().includes(lowerQuery) || plugin.entry.description?.toLowerCase().includes(lowerQuery) || plugin.marketplaceName.toLowerCase().includes(lowerQuery));
  }, [availablePlugins, searchQuery]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedForInstall, setSelectedForInstall] = useState(/* @__PURE__ */ new Set());
  const [installingPlugins, setInstallingPlugins] = useState(/* @__PURE__ */ new Set());
  const pagination = usePagination({
    totalItems: filteredPlugins.length,
    selectedIndex
  });
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);
  const [detailsMenuIndex, setDetailsMenuIndex] = useState(0);
  const [isInstalling, setIsInstalling] = useState(false);
  const [installError, setInstallError] = useState(null);
  const [warning, setWarning] = useState(null);
  const [emptyReason, setEmptyReason] = useState(null);
  useEffect(() => {
    async function loadAllPlugins2() {
      try {
        const config = await loadKnownMarketplacesConfig();
        const {
          marketplaces,
          failures
        } = await loadMarketplacesWithGracefulDegradation(config);
        const allPlugins = [];
        for (const {
          name,
          data: marketplace
        } of marketplaces) {
          if (marketplace) {
            for (const entry of marketplace.plugins) {
              const pluginId = createPluginId(entry.name, name);
              allPlugins.push({
                entry,
                marketplaceName: name,
                pluginId,
                // Only block when globally installed (user/managed scope).
                // Project/local-scope installs don't block — user may want to
                // promote to user scope so it's available everywhere (gh-29997).
                isInstalled: isPluginGloballyInstalled(pluginId)
              });
            }
          }
        }
        const uninstalledPlugins = allPlugins.filter((p) => !p.isInstalled && !isPluginBlockedByPolicy(p.pluginId));
        try {
          const counts = await getInstallCounts();
          setInstallCounts(counts);
          if (counts) {
            uninstalledPlugins.sort((a_0, b_0) => {
              const countA = counts.get(a_0.pluginId) ?? 0;
              const countB = counts.get(b_0.pluginId) ?? 0;
              if (countA !== countB) return countB - countA;
              return a_0.entry.name.localeCompare(b_0.entry.name);
            });
          } else {
            uninstalledPlugins.sort((a_1, b_1) => a_1.entry.name.localeCompare(b_1.entry.name));
          }
        } catch (error_0) {
          logForDebugging(`Failed to fetch install counts: ${errorMessage(error_0)}`);
          uninstalledPlugins.sort((a, b) => a.entry.name.localeCompare(b.entry.name));
        }
        setAvailablePlugins(uninstalledPlugins);
        const configuredCount = Object.keys(config).length;
        if (uninstalledPlugins.length === 0) {
          const reason = await detectEmptyMarketplaceReason({
            configuredMarketplaceCount: configuredCount,
            failedMarketplaceCount: failures.length
          });
          setEmptyReason(reason);
        }
        const successCount = count(marketplaces, (m) => m.data !== null);
        const errorResult = formatMarketplaceLoadingErrors(failures, successCount);
        if (errorResult) {
          if (errorResult.type === "warning") {
            setWarning(errorResult.message + ". Showing available plugins.");
          } else {
            throw new Error(errorResult.message);
          }
        }
        if (targetPlugin) {
          const foundPlugin = allPlugins.find((p_0) => p_0.entry.name === targetPlugin);
          if (foundPlugin) {
            if (foundPlugin.isInstalled) {
              setError(`Plugin '${foundPlugin.pluginId}' is already installed. Use '/plugin' to manage existing plugins.`);
            } else {
              setSelectedPlugin(foundPlugin);
              setViewState("plugin-details");
            }
          } else {
            setError(`Plugin "${targetPlugin}" not found in any marketplace`);
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load plugins");
      } finally {
        setLoading(false);
      }
    }
    void loadAllPlugins2();
  }, [setError, targetPlugin]);
  const installSelectedPlugins = async () => {
    if (selectedForInstall.size === 0) return;
    const pluginsToInstall = availablePlugins.filter((p_1) => selectedForInstall.has(p_1.pluginId));
    setInstallingPlugins(new Set(pluginsToInstall.map((p_2) => p_2.pluginId)));
    let successCount_0 = 0;
    let failureCount = 0;
    const newFailedPlugins = [];
    for (const plugin_0 of pluginsToInstall) {
      const result = await installPluginFromMarketplace({
        pluginId: plugin_0.pluginId,
        entry: plugin_0.entry,
        marketplaceName: plugin_0.marketplaceName,
        scope: "user"
      });
      if (result.success) {
        successCount_0++;
      } else {
        failureCount++;
        newFailedPlugins.push({
          name: plugin_0.entry.name,
          reason: result.error
        });
      }
    }
    setInstallingPlugins(/* @__PURE__ */ new Set());
    setSelectedForInstall(/* @__PURE__ */ new Set());
    clearAllCaches();
    if (failureCount === 0) {
      const message = `\u2713 Installed ${successCount_0} ${plural(successCount_0, "plugin")}. Run /reload-plugins to activate.`;
      setResult(message);
    } else if (successCount_0 === 0) {
      setError(`Failed to install: ${formatFailureDetails(newFailedPlugins, true)}`);
    } else {
      const message_0 = `\u2713 Installed ${successCount_0} of ${successCount_0 + failureCount} plugins. Failed: ${formatFailureDetails(newFailedPlugins, false)}. Run /reload-plugins to activate successfully installed plugins.`;
      setResult(message_0);
    }
    if (successCount_0 > 0) {
      if (onInstallComplete) {
        await onInstallComplete();
      }
    }
    setParentViewState({
      type: "menu"
    });
  };
  const handleSinglePluginInstall = async (plugin_1, scope = "user") => {
    setIsInstalling(true);
    setInstallError(null);
    const result_0 = await installPluginFromMarketplace({
      pluginId: plugin_1.pluginId,
      entry: plugin_1.entry,
      marketplaceName: plugin_1.marketplaceName,
      scope
    });
    if (result_0.success) {
      const loaded = await findPluginOptionsTarget(plugin_1.pluginId);
      if (loaded) {
        setIsInstalling(false);
        setViewState({
          type: "plugin-options",
          plugin: loaded,
          pluginId: plugin_1.pluginId
        });
        return;
      }
      setResult(result_0.message);
      if (onInstallComplete) {
        await onInstallComplete();
      }
      setParentViewState({
        type: "menu"
      });
    } else {
      setIsInstalling(false);
      setInstallError(result_0.error);
    }
  };
  useEffect(() => {
    if (error) {
      setResult(error);
    }
  }, [error, setResult]);
  useKeybinding("confirm:no", () => {
    setViewState("plugin-list");
    setSelectedPlugin(null);
  }, {
    context: "Confirmation",
    isActive: viewState === "plugin-details"
  });
  useKeybinding("confirm:no", () => {
    setParentViewState({
      type: "menu"
    });
  }, {
    context: "Confirmation",
    isActive: viewState === "plugin-list" && !isSearchMode
  });
  use_input_default((input, _key) => {
    const keyIsNotCtrlOrMeta = !_key.ctrl && !_key.meta;
    if (!isSearchMode) {
      if (input === "/" && keyIsNotCtrlOrMeta) {
        setIsSearchMode(true);
        setSearchQuery("");
      } else if (keyIsNotCtrlOrMeta && input.length > 0 && !/^\s+$/.test(input) && // Don't enter search mode for navigation keys
      input !== "j" && input !== "k" && input !== "i") {
        setIsSearchMode(true);
        setSearchQuery(input);
      }
    }
  }, {
    isActive: viewState === "plugin-list" && !loading
  });
  useKeybindings({
    "select:previous": () => {
      if (selectedIndex === 0) {
        setIsSearchMode(true);
      } else {
        pagination.handleSelectionChange(selectedIndex - 1, setSelectedIndex);
      }
    },
    "select:next": () => {
      if (selectedIndex < filteredPlugins.length - 1) {
        pagination.handleSelectionChange(selectedIndex + 1, setSelectedIndex);
      }
    },
    "select:accept": () => {
      if (selectedIndex === filteredPlugins.length && selectedForInstall.size > 0) {
        void installSelectedPlugins();
      } else if (selectedIndex < filteredPlugins.length) {
        const plugin_2 = filteredPlugins[selectedIndex];
        if (plugin_2) {
          if (plugin_2.isInstalled) {
            setParentViewState({
              type: "manage-plugins",
              targetPlugin: plugin_2.entry.name,
              targetMarketplace: plugin_2.marketplaceName
            });
          } else {
            setSelectedPlugin(plugin_2);
            setViewState("plugin-details");
            setDetailsMenuIndex(0);
            setInstallError(null);
          }
        }
      }
    }
  }, {
    context: "Select",
    isActive: viewState === "plugin-list" && !isSearchMode
  });
  useKeybindings({
    "plugin:toggle": () => {
      if (selectedIndex < filteredPlugins.length) {
        const plugin_3 = filteredPlugins[selectedIndex];
        if (plugin_3 && !plugin_3.isInstalled) {
          const newSelection = new Set(selectedForInstall);
          if (newSelection.has(plugin_3.pluginId)) {
            newSelection.delete(plugin_3.pluginId);
          } else {
            newSelection.add(plugin_3.pluginId);
          }
          setSelectedForInstall(newSelection);
        }
      }
    },
    "plugin:install": () => {
      if (selectedForInstall.size > 0) {
        void installSelectedPlugins();
      }
    }
  }, {
    context: "Plugin",
    isActive: viewState === "plugin-list" && !isSearchMode
  });
  const detailsMenuOptions = useMemo(() => {
    if (!selectedPlugin) return [];
    const hasHomepage = selectedPlugin.entry.homepage;
    const githubRepo = extractGitHubRepo(selectedPlugin);
    return buildPluginDetailsMenuOptions(hasHomepage, githubRepo);
  }, [selectedPlugin]);
  useKeybindings({
    "select:previous": () => {
      if (detailsMenuIndex > 0) {
        setDetailsMenuIndex(detailsMenuIndex - 1);
      }
    },
    "select:next": () => {
      if (detailsMenuIndex < detailsMenuOptions.length - 1) {
        setDetailsMenuIndex(detailsMenuIndex + 1);
      }
    },
    "select:accept": () => {
      if (!selectedPlugin) return;
      const action = detailsMenuOptions[detailsMenuIndex]?.action;
      const hasHomepage_0 = selectedPlugin.entry.homepage;
      const githubRepo_0 = extractGitHubRepo(selectedPlugin);
      if (action === "install-user") {
        void handleSinglePluginInstall(selectedPlugin, "user");
      } else if (action === "install-project") {
        void handleSinglePluginInstall(selectedPlugin, "project");
      } else if (action === "install-local") {
        void handleSinglePluginInstall(selectedPlugin, "local");
      } else if (action === "homepage" && hasHomepage_0) {
        void openBrowser(hasHomepage_0);
      } else if (action === "github" && githubRepo_0) {
        void openBrowser(`https://github.com/${githubRepo_0}`);
      } else if (action === "back") {
        setViewState("plugin-list");
        setSelectedPlugin(null);
      }
    }
  }, {
    context: "Select",
    isActive: viewState === "plugin-details" && !!selectedPlugin
  });
  if (typeof viewState === "object" && viewState.type === "plugin-options") {
    let finish = function(msg) {
      setResult(msg);
      if (onInstallComplete) {
        void onInstallComplete();
      }
      setParentViewState({
        type: "menu"
      });
    };
    const {
      plugin: plugin_4,
      pluginId: pluginId_0
    } = viewState;
    return /* @__PURE__ */ createElement(PluginOptionsFlow, { plugin: plugin_4, pluginId: pluginId_0, onDone: (outcome, detail) => {
      switch (outcome) {
        case "configured":
          finish(`\u2713 Installed and configured ${plugin_4.name}. Run /reload-plugins to apply.`);
          break;
        case "skipped":
          finish(`\u2713 Installed ${plugin_4.name}. Run /reload-plugins to apply.`);
          break;
        case "error":
          finish(`Installed but failed to save config: ${detail}`);
          break;
      }
    } });
  }
  if (loading) {
    return /* @__PURE__ */ createElement(ThemedText, null, "Loading\u2026");
  }
  if (error) {
    return /* @__PURE__ */ createElement(ThemedText, { color: "error" }, error);
  }
  if (viewState === "plugin-details" && selectedPlugin) {
    const hasHomepage_1 = selectedPlugin.entry.homepage;
    const githubRepo_1 = extractGitHubRepo(selectedPlugin);
    const menuOptions = buildPluginDetailsMenuOptions(hasHomepage_1, githubRepo_1);
    return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Plugin details")), /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { bold: true }, selectedPlugin.entry.name), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "from ", selectedPlugin.marketplaceName), selectedPlugin.entry.version && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Version: ", selectedPlugin.entry.version), selectedPlugin.entry.description && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, null, selectedPlugin.entry.description)), selectedPlugin.entry.author && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "By:", " ", typeof selectedPlugin.entry.author === "string" ? selectedPlugin.entry.author : selectedPlugin.entry.author.name))), /* @__PURE__ */ createElement(PluginTrustWarning, null), installError && /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { color: "error" }, "Error: ", installError)), /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, menuOptions.map((option, index) => /* @__PURE__ */ createElement(ThemedBox_default, { key: option.action }, detailsMenuIndex === index && /* @__PURE__ */ createElement(ThemedText, null, "> "), detailsMenuIndex !== index && /* @__PURE__ */ createElement(ThemedText, null, "  "), /* @__PURE__ */ createElement(ThemedText, { bold: detailsMenuIndex === index }, isInstalling && option.action.startsWith("install-") ? "Installing\u2026" : option.label)))), /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ createElement(Byline, null, /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "select:accept", context: "Select", fallback: "Enter", description: "select" }), /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "back" })))));
  }
  if (availablePlugins.length === 0) {
    return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Discover plugins")), /* @__PURE__ */ createElement(EmptyStateMessage, { reason: emptyReason }), /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, "Esc to go back")));
  }
  const visiblePlugins = pagination.getVisibleItems(filteredPlugins);
  return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Discover plugins"), pagination.needsPagination && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " ", "(", pagination.scrollPosition.current, "/", pagination.scrollPosition.total, ")")), /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ createElement(SearchBox, { query: searchQuery, isFocused: isSearchMode, isTerminalFocused, width: terminalWidth - 4, cursorOffset: searchCursorOffset })), warning && /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { color: "warning" }, figures_default.warning, " ", warning)), filteredPlugins.length === 0 && searchQuery && /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, 'No plugins match "', searchQuery, '"')), pagination.scrollPosition.canScrollUp && /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " ", figures_default.arrowUp, " more above")), visiblePlugins.map((plugin_5, visibleIndex) => {
    const actualIndex = pagination.toActualIndex(visibleIndex);
    const isSelected = selectedIndex === actualIndex;
    const isSelectedForInstall = selectedForInstall.has(plugin_5.pluginId);
    const isInstallingThis = installingPlugins.has(plugin_5.pluginId);
    const isLast = visibleIndex === visiblePlugins.length - 1;
    return /* @__PURE__ */ createElement(ThemedBox_default, { key: `${pagination.startIndex}-${plugin_5.pluginId}`, flexDirection: "column", marginBottom: isLast && !error ? 0 : 1 }, /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(ThemedText, { color: isSelected && !isSearchMode ? "suggestion" : void 0 }, isSelected && !isSearchMode ? figures_default.pointer : " ", " "), /* @__PURE__ */ createElement(ThemedText, null, isInstallingThis ? figures_default.ellipsis : isSelectedForInstall ? figures_default.radioOn : figures_default.radioOff, " ", plugin_5.entry.name, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " \xB7 ", plugin_5.marketplaceName), plugin_5.entry.tags?.includes("community-managed") && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " [Community Managed]"), installCounts && plugin_5.marketplaceName === OFFICIAL_MARKETPLACE_NAME && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " \xB7 ", formatInstallCount(installCounts.get(plugin_5.pluginId) ?? 0), " ", "installs"))), plugin_5.entry.description && /* @__PURE__ */ createElement(ThemedBox_default, { marginLeft: 4 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, truncateToWidth(plugin_5.entry.description, 60))));
  }), pagination.scrollPosition.canScrollDown && /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " ", figures_default.arrowDown, " more below")), error && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { color: "error" }, figures_default.cross, " ", error)), /* @__PURE__ */ createElement(DiscoverPluginsKeyHint, { hasSelection: selectedForInstall.size > 0, canToggle: selectedIndex < filteredPlugins.length && !filteredPlugins[selectedIndex]?.isInstalled }));
}
function DiscoverPluginsKeyHint(t0) {
  const $ = c(10);
  const {
    hasSelection,
    canToggle
  } = t0;
  let t1;
  if ($[0] !== hasSelection) {
    t1 = hasSelection && /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "plugin:install", context: "Plugin", fallback: "i", description: "install", bold: true });
    $[0] = hasSelection;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ createElement(ThemedText, null, "type to search");
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] !== canToggle) {
    t3 = canToggle && /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "plugin:toggle", context: "Plugin", fallback: "Space", description: "toggle" });
    $[3] = canToggle;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  let t5;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "select:accept", context: "Select", fallback: "Enter", description: "details" });
    t5 = /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "back" });
    $[5] = t4;
    $[6] = t5;
  } else {
    t4 = $[5];
    t5 = $[6];
  }
  let t6;
  if ($[7] !== t1 || $[8] !== t3) {
    t6 = /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, /* @__PURE__ */ createElement(Byline, null, t1, t2, t3, t4, t5)));
    $[7] = t1;
    $[8] = t3;
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  return t6;
}
function EmptyStateMessage(t0) {
  const $ = c(6);
  const {
    reason
  } = t0;
  switch (reason) {
    case "git-not-installed": {
      let t1;
      if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t1 = /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Git is required to install marketplaces."), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Please install git and restart Blaude."));
        $[0] = t1;
      } else {
        t1 = $[0];
      }
      return t1;
    }
    case "all-blocked-by-policy": {
      let t1;
      if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t1 = /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Your organization policy does not allow any external marketplaces."), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Contact your administrator."));
        $[1] = t1;
      } else {
        t1 = $[1];
      }
      return t1;
    }
    case "policy-restricts-sources": {
      let t1;
      if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t1 = /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Your organization restricts which marketplaces can be added."), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Switch to the Marketplaces tab to view allowed sources."));
        $[2] = t1;
      } else {
        t1 = $[2];
      }
      return t1;
    }
    case "all-marketplaces-failed": {
      let t1;
      if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t1 = /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Failed to load marketplace data."), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Check your network connection."));
        $[3] = t1;
      } else {
        t1 = $[3];
      }
      return t1;
    }
    case "all-plugins-installed": {
      let t1;
      if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t1 = /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "All available plugins are already installed."), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Check for new plugins later or add more marketplaces."));
        $[4] = t1;
      } else {
        t1 = $[4];
      }
      return t1;
    }
    case "no-marketplaces-configured":
    default: {
      let t1;
      if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t1 = /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "No plugins available."), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Add a marketplace first using the Marketplaces tab."));
        $[5] = t1;
      } else {
        t1 = $[5];
      }
      return t1;
    }
  }
}
var init_DiscoverPlugins = __esm({
  "src/commands/plugin/DiscoverPlugins.tsx"() {
    init_react_compiler_runtime();
    init_figures();
    init_react();
    init_react();
    init_ConfigurableShortcutHint();
    init_Byline();
    init_SearchBox();
    init_useSearchInput();
    init_useTerminalSize();
    init_ink();
    init_useKeybinding();
    init_array();
    init_browser();
    init_debug();
    init_errors();
    init_cacheUtils();
    init_installCounts();
    init_installedPluginsManager();
    init_marketplaceHelpers();
    init_marketplaceManager();
    init_officialMarketplace();
    init_pluginInstallationHelpers();
    init_pluginPolicy();
    init_stringUtils();
    init_truncate();
    init_PluginOptionsFlow();
    init_PluginTrustWarning();
    init_pluginDetailsHelpers();
    init_usePagination();
  }
});

// src/commands/plugin/ManageMarketplaces.tsx
function ManageMarketplaces({
  setViewState,
  error,
  setError,
  setResult,
  exitState,
  onManageComplete,
  targetMarketplace,
  action
}) {
  const [marketplaceStates, setMarketplaceStates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processError, setProcessError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [progressMessage, setProgressMessage] = useState(null);
  const [internalView, setInternalView] = useState("list");
  const [selectedMarketplace, setSelectedMarketplace] = useState(null);
  const [detailsMenuIndex, setDetailsMenuIndex] = useState(0);
  const hasAttemptedAutoAction = useRef(false);
  useEffect(() => {
    async function loadMarketplaces() {
      try {
        const config = await loadKnownMarketplacesConfig();
        const {
          enabled,
          disabled
        } = await loadAllPlugins();
        const allPlugins = [...enabled, ...disabled];
        const {
          marketplaces,
          failures
        } = await loadMarketplacesWithGracefulDegradation(config);
        const states = [];
        for (const {
          name,
          config: entry,
          data: marketplace
        } of marketplaces) {
          const installedFromMarketplace = allPlugins.filter((plugin) => plugin.source.endsWith(`@${name}`));
          states.push({
            name,
            source: getMarketplaceSourceDisplay(entry.source),
            lastUpdated: entry.lastUpdated,
            pluginCount: marketplace?.plugins.length,
            installedPlugins: installedFromMarketplace,
            pendingUpdate: false,
            pendingRemove: false,
            autoUpdate: isMarketplaceAutoUpdate(name, entry)
          });
        }
        states.sort((a, b) => {
          if (a.name === "claude-plugin-directory") return -1;
          if (b.name === "claude-plugin-directory") return 1;
          return a.name.localeCompare(b.name);
        });
        setMarketplaceStates(states);
        const successCount = count(marketplaces, (m) => m.data !== null);
        const errorResult = formatMarketplaceLoadingErrors(failures, successCount);
        if (errorResult) {
          if (errorResult.type === "warning") {
            setProcessError(errorResult.message);
          } else {
            throw new Error(errorResult.message);
          }
        }
        if (targetMarketplace && !hasAttemptedAutoAction.current && !error) {
          hasAttemptedAutoAction.current = true;
          const targetIndex = states.findIndex((s) => s.name === targetMarketplace);
          if (targetIndex >= 0) {
            const targetState = states[targetIndex];
            if (action) {
              setSelectedIndex(targetIndex + 1);
              const newStates = [...states];
              if (action === "update") {
                newStates[targetIndex].pendingUpdate = true;
              } else if (action === "remove") {
                newStates[targetIndex].pendingRemove = true;
              }
              setMarketplaceStates(newStates);
              setTimeout(applyChanges, 100, newStates);
            } else if (targetState) {
              setSelectedIndex(targetIndex + 1);
              setSelectedMarketplace(targetState);
              setInternalView("details");
            }
          } else if (setError) {
            setError(`Marketplace not found: ${targetMarketplace}`);
          }
        }
      } catch (err) {
        if (setError) {
          setError(err instanceof Error ? err.message : "Failed to load marketplaces");
        }
        setProcessError(err instanceof Error ? err.message : "Failed to load marketplaces");
      } finally {
        setLoading(false);
      }
    }
    void loadMarketplaces();
  }, [targetMarketplace, action, error]);
  const hasPendingChanges = () => {
    return marketplaceStates.some((state) => state.pendingUpdate || state.pendingRemove);
  };
  const getPendingCounts = () => {
    const updateCount2 = count(marketplaceStates, (s) => s.pendingUpdate);
    const removeCount2 = count(marketplaceStates, (s) => s.pendingRemove);
    return {
      updateCount: updateCount2,
      removeCount: removeCount2
    };
  };
  const applyChanges = async (states) => {
    const statesToProcess = states || marketplaceStates;
    const wasInDetailsView = internalView === "details";
    setIsProcessing(true);
    setProcessError(null);
    setSuccessMessage(null);
    setProgressMessage(null);
    try {
      const settings = getSettingsForSource("userSettings");
      let updatedCount = 0;
      let removedCount = 0;
      const refreshedMarketplaces = /* @__PURE__ */ new Set();
      for (const state of statesToProcess) {
        if (state.pendingRemove) {
          if (state.installedPlugins && state.installedPlugins.length > 0) {
            const newEnabledPlugins = {
              ...settings?.enabledPlugins
            };
            for (const plugin of state.installedPlugins) {
              const pluginId = createPluginId(plugin.name, state.name);
              newEnabledPlugins[pluginId] = false;
            }
            updateSettingsForSource("userSettings", {
              enabledPlugins: newEnabledPlugins
            });
          }
          await removeMarketplaceSource(state.name);
          removedCount++;
          logEvent("tengu_marketplace_removed", {
            marketplace_name: state.name,
            plugins_uninstalled: state.installedPlugins?.length || 0
          });
          continue;
        }
        if (state.pendingUpdate) {
          await refreshMarketplace(state.name, (message) => {
            setProgressMessage(message);
          });
          updatedCount++;
          refreshedMarketplaces.add(state.name.toLowerCase());
          logEvent("tengu_marketplace_updated", {
            marketplace_name: state.name
          });
        }
      }
      let updatedPluginCount = 0;
      if (refreshedMarketplaces.size > 0) {
        const updatedPluginIds = await updatePluginsForMarketplaces(refreshedMarketplaces);
        updatedPluginCount = updatedPluginIds.length;
      }
      clearAllCaches();
      if (onManageComplete) {
        await onManageComplete();
      }
      const config = await loadKnownMarketplacesConfig();
      const {
        enabled,
        disabled
      } = await loadAllPlugins();
      const allPlugins = [...enabled, ...disabled];
      const {
        marketplaces
      } = await loadMarketplacesWithGracefulDegradation(config);
      const newStates = [];
      for (const {
        name,
        config: entry,
        data: marketplace
      } of marketplaces) {
        const installedFromMarketplace = allPlugins.filter((plugin) => plugin.source.endsWith(`@${name}`));
        newStates.push({
          name,
          source: getMarketplaceSourceDisplay(entry.source),
          lastUpdated: entry.lastUpdated,
          pluginCount: marketplace?.plugins.length,
          installedPlugins: installedFromMarketplace,
          pendingUpdate: false,
          pendingRemove: false,
          autoUpdate: isMarketplaceAutoUpdate(name, entry)
        });
      }
      newStates.sort((a, b) => {
        if (a.name === "claude-plugin-directory") return -1;
        if (b.name === "claude-plugin-directory") return 1;
        return a.name.localeCompare(b.name);
      });
      setMarketplaceStates(newStates);
      if (wasInDetailsView && selectedMarketplace) {
        const updatedMarketplace = newStates.find((s) => s.name === selectedMarketplace.name);
        if (updatedMarketplace) {
          setSelectedMarketplace(updatedMarketplace);
        }
      }
      const actions = [];
      if (updatedCount > 0) {
        const pluginPart = updatedPluginCount > 0 ? ` (${updatedPluginCount} ${plural(updatedPluginCount, "plugin")} bumped)` : "";
        actions.push(`Updated ${updatedCount} ${plural(updatedCount, "marketplace")}${pluginPart}`);
      }
      if (removedCount > 0) {
        actions.push(`Removed ${removedCount} ${plural(removedCount, "marketplace")}`);
      }
      if (actions.length > 0) {
        const successMsg = `${figures_default.tick} ${actions.join(", ")}`;
        if (wasInDetailsView) {
          setSuccessMessage(successMsg);
        } else {
          setResult(successMsg);
          setTimeout(setViewState, 2e3, {
            type: "menu"
          });
        }
      } else if (!wasInDetailsView) {
        setViewState({
          type: "menu"
        });
      }
    } catch (err) {
      const errorMsg = errorMessage(err);
      setProcessError(errorMsg);
      if (setError) {
        setError(errorMsg);
      }
    } finally {
      setIsProcessing(false);
      setProgressMessage(null);
    }
  };
  const confirmRemove = async () => {
    if (!selectedMarketplace) return;
    const newStates = marketplaceStates.map((state) => state.name === selectedMarketplace.name ? {
      ...state,
      pendingRemove: true
    } : state);
    setMarketplaceStates(newStates);
    await applyChanges(newStates);
  };
  const buildDetailsMenuOptions = (marketplace) => {
    if (!marketplace) return [];
    const options = [{
      label: `Browse plugins (${marketplace.pluginCount ?? 0})`,
      value: "browse"
    }, {
      label: "Update marketplace",
      secondaryLabel: marketplace.lastUpdated ? `(last updated ${new Date(marketplace.lastUpdated).toLocaleDateString()})` : void 0,
      value: "update"
    }];
    if (!shouldSkipPluginAutoupdate()) {
      options.push({
        label: marketplace.autoUpdate ? "Disable auto-update" : "Enable auto-update",
        value: "toggle-auto-update"
      });
    }
    options.push({
      label: "Remove marketplace",
      value: "remove"
    });
    return options;
  };
  const handleToggleAutoUpdate = async (marketplace) => {
    const newAutoUpdate = !marketplace.autoUpdate;
    try {
      await setMarketplaceAutoUpdate(marketplace.name, newAutoUpdate);
      setMarketplaceStates((prev) => prev.map((state) => state.name === marketplace.name ? {
        ...state,
        autoUpdate: newAutoUpdate
      } : state));
      setSelectedMarketplace((prev) => prev ? {
        ...prev,
        autoUpdate: newAutoUpdate
      } : prev);
    } catch (err) {
      setProcessError(err instanceof Error ? err.message : "Failed to update setting");
    }
  };
  useKeybinding("confirm:no", () => {
    setInternalView("list");
    setDetailsMenuIndex(0);
  }, {
    context: "Confirmation",
    isActive: !isProcessing && (internalView === "details" || internalView === "confirm-remove")
  });
  useKeybinding("confirm:no", () => {
    setMarketplaceStates((prev) => prev.map((state) => ({
      ...state,
      pendingUpdate: false,
      pendingRemove: false
    })));
    setSelectedIndex(0);
  }, {
    context: "Confirmation",
    isActive: !isProcessing && internalView === "list" && hasPendingChanges()
  });
  useKeybinding("confirm:no", () => {
    setViewState({
      type: "menu"
    });
  }, {
    context: "Confirmation",
    isActive: !isProcessing && internalView === "list" && !hasPendingChanges()
  });
  useKeybindings({
    "select:previous": () => setSelectedIndex((prev) => Math.max(0, prev - 1)),
    "select:next": () => {
      const totalItems = marketplaceStates.length + 1;
      setSelectedIndex((prev) => Math.min(totalItems - 1, prev + 1));
    },
    "select:accept": () => {
      const marketplaceIndex = selectedIndex - 1;
      if (selectedIndex === 0) {
        setViewState({
          type: "add-marketplace"
        });
      } else if (hasPendingChanges()) {
        void applyChanges();
      } else {
        const marketplace = marketplaceStates[marketplaceIndex];
        if (marketplace) {
          setSelectedMarketplace(marketplace);
          setInternalView("details");
          setDetailsMenuIndex(0);
        }
      }
    }
  }, {
    context: "Select",
    isActive: !isProcessing && internalView === "list"
  });
  use_input_default((input) => {
    const marketplaceIndex = selectedIndex - 1;
    if ((input === "u" || input === "U") && marketplaceIndex >= 0) {
      setMarketplaceStates((prev) => prev.map((state, idx) => idx === marketplaceIndex ? {
        ...state,
        pendingUpdate: !state.pendingUpdate,
        pendingRemove: state.pendingUpdate ? state.pendingRemove : false
      } : state));
    } else if ((input === "r" || input === "R") && marketplaceIndex >= 0) {
      const marketplace = marketplaceStates[marketplaceIndex];
      if (marketplace) {
        setSelectedMarketplace(marketplace);
        setInternalView("confirm-remove");
      }
    }
  }, {
    isActive: !isProcessing && internalView === "list"
  });
  useKeybindings({
    "select:previous": () => setDetailsMenuIndex((prev) => Math.max(0, prev - 1)),
    "select:next": () => {
      const menuOptions = buildDetailsMenuOptions(selectedMarketplace);
      setDetailsMenuIndex((prev) => Math.min(menuOptions.length - 1, prev + 1));
    },
    "select:accept": () => {
      if (!selectedMarketplace) return;
      const menuOptions = buildDetailsMenuOptions(selectedMarketplace);
      const selectedOption = menuOptions[detailsMenuIndex];
      if (selectedOption?.value === "browse") {
        setViewState({
          type: "browse-marketplace",
          targetMarketplace: selectedMarketplace.name
        });
      } else if (selectedOption?.value === "update") {
        const newStates = marketplaceStates.map((state) => state.name === selectedMarketplace.name ? {
          ...state,
          pendingUpdate: true
        } : state);
        setMarketplaceStates(newStates);
        void applyChanges(newStates);
      } else if (selectedOption?.value === "toggle-auto-update") {
        void handleToggleAutoUpdate(selectedMarketplace);
      } else if (selectedOption?.value === "remove") {
        setInternalView("confirm-remove");
      }
    }
  }, {
    context: "Select",
    isActive: !isProcessing && internalView === "details"
  });
  use_input_default((input) => {
    if (input === "y" || input === "Y") {
      void confirmRemove();
    } else if (input === "n" || input === "N") {
      setInternalView("list");
      setSelectedMarketplace(null);
    }
  }, {
    isActive: !isProcessing && internalView === "confirm-remove"
  });
  if (loading) {
    return /* @__PURE__ */ createElement(ThemedText, null, "Loading marketplaces\u2026");
  }
  if (marketplaceStates.length === 0) {
    return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Manage marketplaces")), /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "row", gap: 1 }, /* @__PURE__ */ createElement(ThemedText, { color: "suggestion" }, figures_default.pointer, " +"), /* @__PURE__ */ createElement(ThemedText, { bold: true, color: "suggestion" }, "Add Marketplace")), /* @__PURE__ */ createElement(ThemedBox_default, { marginLeft: 3 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, exitState.pending ? /* @__PURE__ */ createElement(Fragment, null, "Press ", exitState.keyName, " again to go back") : /* @__PURE__ */ createElement(Byline, null, /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "select:accept", context: "Select", fallback: "Enter", description: "select" }), /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "go back" })))));
  }
  if (internalView === "confirm-remove" && selectedMarketplace) {
    const pluginCount = selectedMarketplace.installedPlugins?.length || 0;
    return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, { bold: true, color: "warning" }, "Remove marketplace ", /* @__PURE__ */ createElement(ThemedText, { italic: true }, selectedMarketplace.name), "?"), /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, pluginCount > 0 && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { color: "warning" }, "This will also uninstall ", pluginCount, " ", plural(pluginCount, "plugin"), " from this marketplace:")), selectedMarketplace.installedPlugins && selectedMarketplace.installedPlugins.length > 0 && /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", marginTop: 1, marginLeft: 2 }, selectedMarketplace.installedPlugins.map((plugin) => /* @__PURE__ */ createElement(ThemedText, { key: plugin.name, dimColor: true }, "\u2022 ", plugin.name))), /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, null, "Press ", /* @__PURE__ */ createElement(ThemedText, { bold: true }, "y"), " to confirm or ", /* @__PURE__ */ createElement(ThemedText, { bold: true }, "n"), " to cancel"))));
  }
  if (internalView === "details" && selectedMarketplace) {
    const isUpdating = selectedMarketplace.pendingUpdate || isProcessing;
    const menuOptions = buildDetailsMenuOptions(selectedMarketplace);
    return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, { bold: true }, selectedMarketplace.name), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, selectedMarketplace.source), /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, null, selectedMarketplace.pluginCount || 0, " available", " ", plural(selectedMarketplace.pluginCount || 0, "plugin"))), selectedMarketplace.installedPlugins && selectedMarketplace.installedPlugins.length > 0 && /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Installed plugins (", selectedMarketplace.installedPlugins.length, "):"), /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", marginLeft: 1 }, selectedMarketplace.installedPlugins.map((plugin) => /* @__PURE__ */ createElement(ThemedBox_default, { key: plugin.name, flexDirection: "row", gap: 1 }, /* @__PURE__ */ createElement(ThemedText, null, figures_default.bullet), /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, null, plugin.name), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, plugin.manifest.description)))))), isUpdating && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1, flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, { color: "claude" }, "Updating marketplace\u2026"), progressMessage && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, progressMessage)), !isUpdating && successMessage && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { color: "claude" }, successMessage)), !isUpdating && processError && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { color: "error" }, processError)), !isUpdating && /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", marginTop: 1 }, menuOptions.map((option, idx) => {
      if (!option) return null;
      const isSelected = idx === detailsMenuIndex;
      return /* @__PURE__ */ createElement(ThemedBox_default, { key: option.value }, /* @__PURE__ */ createElement(ThemedText, { color: isSelected ? "suggestion" : void 0 }, isSelected ? figures_default.pointer : " ", " ", option.label), option.secondaryLabel && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " ", option.secondaryLabel));
    })), !isUpdating && !shouldSkipPluginAutoupdate() && selectedMarketplace.autoUpdate && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Auto-update enabled. Blaude will automatically update this marketplace and its installed plugins.")), /* @__PURE__ */ createElement(ThemedBox_default, { marginLeft: 3 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, isUpdating ? /* @__PURE__ */ createElement(Fragment, null, "Please wait\u2026") : /* @__PURE__ */ createElement(Byline, null, /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "select:accept", context: "Select", fallback: "Enter", description: "select" }), /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "go back" })))));
  }
  const {
    updateCount,
    removeCount
  } = getPendingCounts();
  return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Manage marketplaces")), /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "row", gap: 1, marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { color: selectedIndex === 0 ? "suggestion" : void 0 }, selectedIndex === 0 ? figures_default.pointer : " ", " +"), /* @__PURE__ */ createElement(ThemedText, { bold: true, color: selectedIndex === 0 ? "suggestion" : void 0 }, "Add Marketplace")), /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, marketplaceStates.map((state, idx) => {
    const isSelected = idx + 1 === selectedIndex;
    const indicators = [];
    if (state.pendingUpdate) indicators.push("UPDATE");
    if (state.pendingRemove) indicators.push("REMOVE");
    return /* @__PURE__ */ createElement(ThemedBox_default, { key: state.name, flexDirection: "row", gap: 1, marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { color: isSelected ? "suggestion" : void 0 }, isSelected ? figures_default.pointer : " ", " ", state.pendingRemove ? figures_default.cross : figures_default.bullet), /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", flexGrow: 1 }, /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "row", gap: 1 }, /* @__PURE__ */ createElement(ThemedText, { bold: true, strikethrough: state.pendingRemove, dimColor: state.pendingRemove }, state.name === "claude-plugins-official" && /* @__PURE__ */ createElement(ThemedText, { color: "claude" }, "\u273B "), state.name, state.name === "claude-plugins-official" && /* @__PURE__ */ createElement(ThemedText, { color: "claude" }, " \u273B")), indicators.length > 0 && /* @__PURE__ */ createElement(ThemedText, { color: "warning" }, "[", indicators.join(", "), "]")), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, state.source), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, state.pluginCount !== void 0 && /* @__PURE__ */ createElement(Fragment, null, state.pluginCount, " available"), state.installedPlugins && state.installedPlugins.length > 0 && /* @__PURE__ */ createElement(Fragment, null, " \u2022 ", state.installedPlugins.length, " installed"), state.lastUpdated && /* @__PURE__ */ createElement(Fragment, null, " ", "\u2022 Updated", " ", new Date(state.lastUpdated).toLocaleDateString()))));
  })), hasPendingChanges() && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1, flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, null, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Pending changes:"), " ", /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Enter to apply")), updateCount > 0 && /* @__PURE__ */ createElement(ThemedText, null, "\u2022 Update ", updateCount, " ", plural(updateCount, "marketplace")), removeCount > 0 && /* @__PURE__ */ createElement(ThemedText, { color: "warning" }, "\u2022 Remove ", removeCount, " ", plural(removeCount, "marketplace"))), isProcessing && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { color: "claude" }, "Processing changes\u2026")), processError && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { color: "error" }, processError)), /* @__PURE__ */ createElement(ManageMarketplacesKeyHints, { exitState, hasPendingActions: hasPendingChanges() }));
}
function ManageMarketplacesKeyHints(t0) {
  const $ = c(18);
  const {
    exitState,
    hasPendingActions
  } = t0;
  if (exitState.pending) {
    let t12;
    if ($[0] !== exitState.keyName) {
      t12 = /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, "Press ", exitState.keyName, " again to go back"));
      $[0] = exitState.keyName;
      $[1] = t12;
    } else {
      t12 = $[1];
    }
    return t12;
  }
  let t1;
  if ($[2] !== hasPendingActions) {
    t1 = hasPendingActions && /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "select:accept", context: "Select", fallback: "Enter", description: "apply changes" });
    $[2] = hasPendingActions;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  let t2;
  if ($[4] !== hasPendingActions) {
    t2 = !hasPendingActions && /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "select:accept", context: "Select", fallback: "Enter", description: "select" });
    $[4] = hasPendingActions;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[6] !== hasPendingActions) {
    t3 = !hasPendingActions && /* @__PURE__ */ createElement(KeyboardShortcutHint, { shortcut: "u", action: "update" });
    $[6] = hasPendingActions;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  let t4;
  if ($[8] !== hasPendingActions) {
    t4 = !hasPendingActions && /* @__PURE__ */ createElement(KeyboardShortcutHint, { shortcut: "r", action: "remove" });
    $[8] = hasPendingActions;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  const t5 = hasPendingActions ? "cancel" : "go back";
  let t6;
  if ($[10] !== t5) {
    t6 = /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: t5 });
    $[10] = t5;
    $[11] = t6;
  } else {
    t6 = $[11];
  }
  let t7;
  if ($[12] !== t1 || $[13] !== t2 || $[14] !== t3 || $[15] !== t4 || $[16] !== t6) {
    t7 = /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, /* @__PURE__ */ createElement(Byline, null, t1, t2, t3, t4, t6)));
    $[12] = t1;
    $[13] = t2;
    $[14] = t3;
    $[15] = t4;
    $[16] = t6;
    $[17] = t7;
  } else {
    t7 = $[17];
  }
  return t7;
}
var init_ManageMarketplaces = __esm({
  "src/commands/plugin/ManageMarketplaces.tsx"() {
    init_react_compiler_runtime();
    init_figures();
    init_react();
    init_react();
    init_analytics();
    init_ConfigurableShortcutHint();
    init_Byline();
    init_KeyboardShortcutHint();
    init_ink();
    init_useKeybinding();
    init_array();
    init_config();
    init_errors();
    init_cacheUtils();
    init_marketplaceHelpers();
    init_marketplaceManager();
    init_pluginAutoupdate();
    init_pluginLoader();
    init_schemas();
    init_settings();
    init_stringUtils();
  }
});

// src/components/mcp/CapabilitiesSection.tsx
function CapabilitiesSection(t0) {
  const $ = c(9);
  const {
    serverToolsCount,
    serverPromptsCount,
    serverResourcesCount
  } = t0;
  let capabilities;
  if ($[0] !== serverPromptsCount || $[1] !== serverResourcesCount || $[2] !== serverToolsCount) {
    capabilities = [];
    if (serverToolsCount > 0) {
      capabilities.push("tools");
    }
    if (serverResourcesCount > 0) {
      capabilities.push("resources");
    }
    if (serverPromptsCount > 0) {
      capabilities.push("prompts");
    }
    $[0] = serverPromptsCount;
    $[1] = serverResourcesCount;
    $[2] = serverToolsCount;
    $[3] = capabilities;
  } else {
    capabilities = $[3];
  }
  let t1;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Capabilities: ");
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== capabilities) {
    t2 = capabilities.length > 0 ? /* @__PURE__ */ react_default.createElement(Byline, null, capabilities) : "none";
    $[5] = capabilities;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  let t3;
  if ($[7] !== t2) {
    t3 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, t1, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "text" }, t2));
    $[7] = t2;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  return t3;
}
var init_CapabilitiesSection = __esm({
  "src/components/mcp/CapabilitiesSection.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_Byline();
  }
});

// src/components/mcp/utils/reconnectHelpers.tsx
function handleReconnectResult(result, serverName) {
  switch (result.client.type) {
    case "connected":
      return {
        message: `Reconnected to ${serverName}.`,
        success: true
      };
    case "needs-auth":
      return {
        message: `${serverName} requires authentication. Use the 'Authenticate' option.`,
        success: false
      };
    case "failed":
      return {
        message: `Failed to reconnect to ${serverName}.`,
        success: false
      };
    default:
      return {
        message: `Unknown result when reconnecting to ${serverName}.`,
        success: false
      };
  }
}
function handleReconnectError(error, serverName) {
  const errorMessage2 = error instanceof Error ? error.message : String(error);
  return `Error reconnecting to ${serverName}: ${errorMessage2}`;
}
var init_reconnectHelpers = __esm({
  "src/components/mcp/utils/reconnectHelpers.tsx"() {
  }
});

// src/components/mcp/MCPRemoteServerMenu.tsx
function MCPRemoteServerMenu({
  server,
  serverToolsCount,
  onViewTools,
  onCancel,
  onComplete,
  borderless = false
}) {
  const [theme] = useTheme();
  const exitState = useExitOnCtrlCDWithKeybindings();
  const {
    columns: terminalColumns
  } = useTerminalSize();
  const [isAuthenticating, setIsAuthenticating] = react_default.useState(false);
  const [error, setError] = react_default.useState(null);
  const mcp = useAppState((s) => s.mcp);
  const setAppState = useSetAppState();
  const [authorizationUrl, setAuthorizationUrl] = react_default.useState(null);
  const [isReconnecting, setIsReconnecting] = useState(false);
  const authAbortControllerRef = useRef(null);
  const [isClaudeAIAuthenticating, setIsClaudeAIAuthenticating] = useState(false);
  const [claudeAIAuthUrl, setClaudeAIAuthUrl] = useState(null);
  const [isClaudeAIClearingAuth, setIsClaudeAIClearingAuth] = useState(false);
  const [claudeAIClearAuthUrl, setClaudeAIClearAuthUrl] = useState(null);
  const [claudeAIClearAuthBrowserOpened, setClaudeAIClearAuthBrowserOpened] = useState(false);
  const [urlCopied, setUrlCopied] = useState(false);
  const copyTimeoutRef = useRef(void 0);
  const unmountedRef = useRef(false);
  const [callbackUrlInput, setCallbackUrlInput] = useState("");
  const [callbackUrlCursorOffset, setCallbackUrlCursorOffset] = useState(0);
  const [manualCallbackSubmit, setManualCallbackSubmit] = useState(null);
  useEffect(() => () => {
    unmountedRef.current = true;
    authAbortControllerRef.current?.abort();
    if (copyTimeoutRef.current !== void 0) {
      clearTimeout(copyTimeoutRef.current);
    }
  }, []);
  const isEffectivelyAuthenticated = server.isAuthenticated || server.client.type === "connected" && serverToolsCount > 0;
  const reconnectMcpServer = useMcpReconnect();
  const handleClaudeAIAuthComplete = react_default.useCallback(async () => {
    setIsClaudeAIAuthenticating(false);
    setClaudeAIAuthUrl(null);
    setIsReconnecting(true);
    try {
      const result = await reconnectMcpServer(server.name);
      const success = result.client.type === "connected";
      logEvent("tengu_claudeai_mcp_auth_completed", {
        success
      });
      if (success) {
        onComplete?.(`Authentication successful. Connected to ${server.name}.`);
      } else if (result.client.type === "needs-auth") {
        onComplete?.("Authentication successful, but server still requires authentication. You may need to manually restart Blaude.");
      } else {
        onComplete?.("Authentication successful, but server reconnection failed. You may need to manually restart Blaude for the changes to take effect.");
      }
    } catch (err) {
      logEvent("tengu_claudeai_mcp_auth_completed", {
        success: false
      });
      onComplete?.(handleReconnectError(err, server.name));
    } finally {
      setIsReconnecting(false);
    }
  }, [reconnectMcpServer, server.name, onComplete]);
  const handleClaudeAIClearAuthComplete = react_default.useCallback(async () => {
    await clearServerCache(server.name, {
      ...server.config,
      scope: server.scope
    });
    setAppState((prev) => {
      const newClients = prev.mcp.clients.map((c2) => c2.name === server.name ? {
        ...c2,
        type: "needs-auth"
      } : c2);
      const newTools = excludeToolsByServer(prev.mcp.tools, server.name);
      const newCommands = excludeCommandsByServer(prev.mcp.commands, server.name);
      const newResources = excludeResourcesByServer(prev.mcp.resources, server.name);
      return {
        ...prev,
        mcp: {
          ...prev.mcp,
          clients: newClients,
          tools: newTools,
          commands: newCommands,
          resources: newResources
        }
      };
    });
    logEvent("tengu_claudeai_mcp_clear_auth_completed", {});
    onComplete?.(`Disconnected from ${server.name}.`);
    setIsClaudeAIClearingAuth(false);
    setClaudeAIClearAuthUrl(null);
    setClaudeAIClearAuthBrowserOpened(false);
  }, [server.name, server.config, server.scope, setAppState, onComplete]);
  useKeybinding("confirm:no", () => {
    authAbortControllerRef.current?.abort();
    authAbortControllerRef.current = null;
    setIsAuthenticating(false);
    setAuthorizationUrl(null);
  }, {
    context: "Confirmation",
    isActive: isAuthenticating
  });
  useKeybinding("confirm:no", () => {
    setIsClaudeAIAuthenticating(false);
    setClaudeAIAuthUrl(null);
  }, {
    context: "Confirmation",
    isActive: isClaudeAIAuthenticating
  });
  useKeybinding("confirm:no", () => {
    setIsClaudeAIClearingAuth(false);
    setClaudeAIClearAuthUrl(null);
    setClaudeAIClearAuthBrowserOpened(false);
  }, {
    context: "Confirmation",
    isActive: isClaudeAIClearingAuth
  });
  use_input_default((input, key) => {
    if (key.return && isClaudeAIAuthenticating) {
      void handleClaudeAIAuthComplete();
    }
    if (key.return && isClaudeAIClearingAuth) {
      if (claudeAIClearAuthBrowserOpened) {
        void handleClaudeAIClearAuthComplete();
      } else {
        const connectorsUrl = `${getOauthConfig().CLAUDE_AI_ORIGIN}/settings/connectors`;
        setClaudeAIClearAuthUrl(connectorsUrl);
        setClaudeAIClearAuthBrowserOpened(true);
        void openBrowser(connectorsUrl);
      }
    }
    if (input === "c" && !urlCopied) {
      const urlToCopy = authorizationUrl || claudeAIAuthUrl || claudeAIClearAuthUrl;
      if (urlToCopy) {
        void setClipboard(urlToCopy).then((raw) => {
          if (unmountedRef.current) return;
          if (raw) process.stdout.write(raw);
          setUrlCopied(true);
          if (copyTimeoutRef.current !== void 0) {
            clearTimeout(copyTimeoutRef.current);
          }
          copyTimeoutRef.current = setTimeout(setUrlCopied, 2e3, false);
        });
      }
    }
  });
  const capitalizedServerName = capitalize(String(server.name));
  const serverCommandsCount = filterMcpPromptsByServer(mcp.commands, server.name).length;
  const toggleMcpServer = useMcpToggleEnabled();
  const handleClaudeAIAuth = react_default.useCallback(async () => {
    const claudeAiBaseUrl = getOauthConfig().CLAUDE_AI_ORIGIN;
    const accountInfo = getOauthAccountInfo();
    const orgUuid = accountInfo?.organizationUuid;
    let authUrl;
    if (orgUuid && server.config.type === "claudeai-proxy" && server.config.id) {
      const serverId = server.config.id.startsWith("mcprs") ? "mcpsrv" + server.config.id.slice(5) : server.config.id;
      const productSurface = encodeURIComponent(process.env.CLAUDE_CODE_ENTRYPOINT || "cli");
      authUrl = `${claudeAiBaseUrl}/api/organizations/${orgUuid}/mcp/start-auth/${serverId}?product_surface=${productSurface}`;
    } else {
      authUrl = `${claudeAiBaseUrl}/settings/connectors`;
    }
    setClaudeAIAuthUrl(authUrl);
    setIsClaudeAIAuthenticating(true);
    logEvent("tengu_claudeai_mcp_auth_started", {});
    await openBrowser(authUrl);
  }, [server.config]);
  const handleClaudeAIClearAuth = react_default.useCallback(() => {
    setIsClaudeAIClearingAuth(true);
    logEvent("tengu_claudeai_mcp_clear_auth_started", {});
  }, []);
  const handleToggleEnabled = react_default.useCallback(async () => {
    const wasEnabled = server.client.type !== "disabled";
    try {
      await toggleMcpServer(server.name);
      if (server.config.type === "claudeai-proxy") {
        logEvent("tengu_claudeai_mcp_toggle", {
          new_state: wasEnabled ? "disabled" : "enabled"
        });
      }
      onCancel();
    } catch (err_0) {
      const action = wasEnabled ? "disable" : "enable";
      onComplete?.(`Failed to ${action} MCP server '${server.name}': ${errorMessage(err_0)}`);
    }
  }, [server.client.type, server.config.type, server.name, toggleMcpServer, onCancel, onComplete]);
  const handleAuthenticate = react_default.useCallback(async () => {
    if (server.config.type === "claudeai-proxy") return;
    setIsAuthenticating(true);
    setError(null);
    const controller = new AbortController();
    authAbortControllerRef.current = controller;
    try {
      if (server.isAuthenticated && server.config) {
        await revokeServerTokens(server.name, server.config, {
          preserveStepUpState: true
        });
      }
      if (server.config) {
        await performMCPOAuthFlow(server.name, server.config, setAuthorizationUrl, controller.signal, {
          onWaitingForCallback: (submit) => {
            setManualCallbackSubmit(() => submit);
          }
        });
        logEvent("tengu_mcp_auth_config_authenticate", {
          wasAuthenticated: server.isAuthenticated
        });
        const result_0 = await reconnectMcpServer(server.name);
        if (result_0.client.type === "connected") {
          const message = isEffectivelyAuthenticated ? `Authentication successful. Reconnected to ${server.name}.` : `Authentication successful. Connected to ${server.name}.`;
          onComplete?.(message);
        } else if (result_0.client.type === "needs-auth") {
          onComplete?.("Authentication successful, but server still requires authentication. You may need to manually restart Blaude.");
        } else {
          logMCPDebug(server.name, `Reconnection failed after authentication`);
          onComplete?.("Authentication successful, but server reconnection failed. You may need to manually restart Blaude for the changes to take effect.");
        }
      }
    } catch (err_1) {
      if (err_1 instanceof Error && !(err_1 instanceof AuthenticationCancelledError)) {
        setError(err_1.message);
      }
    } finally {
      setIsAuthenticating(false);
      authAbortControllerRef.current = null;
      setManualCallbackSubmit(null);
      setCallbackUrlInput("");
    }
  }, [server.isAuthenticated, server.config, server.name, onComplete, reconnectMcpServer, isEffectivelyAuthenticated]);
  const handleClearAuth = async () => {
    if (server.config.type === "claudeai-proxy") return;
    if (server.config) {
      await revokeServerTokens(server.name, server.config);
      logEvent("tengu_mcp_auth_config_clear", {});
      await clearServerCache(server.name, {
        ...server.config,
        scope: server.scope
      });
      setAppState((prev_0) => {
        const newClients_0 = prev_0.mcp.clients.map((c_0) => (
          // 'failed' is a misnomer here, but we don't really differentiate between "not connected" and "failed" at the moment
          c_0.name === server.name ? {
            ...c_0,
            type: "failed"
          } : c_0
        ));
        const newTools_0 = excludeToolsByServer(prev_0.mcp.tools, server.name);
        const newCommands_0 = excludeCommandsByServer(prev_0.mcp.commands, server.name);
        const newResources_0 = excludeResourcesByServer(prev_0.mcp.resources, server.name);
        return {
          ...prev_0,
          mcp: {
            ...prev_0.mcp,
            clients: newClients_0,
            tools: newTools_0,
            commands: newCommands_0,
            resources: newResources_0
          }
        };
      });
      onComplete?.(`Authentication cleared for ${server.name}.`);
    }
  };
  if (isAuthenticating) {
    const authCopy = server.config.type !== "claudeai-proxy" && server.config.oauth?.xaa ? " Authenticating via your identity provider" : " A browser window will open for authentication";
    return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1, padding: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "claude" }, "Authenticating with ", server.name, "\u2026"), /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(Spinner, null), /* @__PURE__ */ react_default.createElement(ThemedText, null, authCopy)), authorizationUrl && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "If your browser doesn't open automatically, copy this URL manually", " "), urlCopied ? /* @__PURE__ */ react_default.createElement(ThemedText, { color: "success" }, "(Copied!)") : /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "c", action: "copy", parens: true }))), /* @__PURE__ */ react_default.createElement(Link, { url: authorizationUrl })), isAuthenticating && authorizationUrl && manualCallbackSubmit && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "If the redirect page shows a connection error, paste the URL from your browser's address bar:"), /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "URL ", ">", " "), /* @__PURE__ */ react_default.createElement(TextInput, { value: callbackUrlInput, onChange: setCallbackUrlInput, onSubmit: (value) => {
      manualCallbackSubmit(value.trim());
      setCallbackUrlInput("");
    }, cursorOffset: callbackUrlCursorOffset, onChangeCursorOffset: setCallbackUrlCursorOffset, columns: terminalColumns - 8 }))), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginLeft: 3 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Return here after authenticating in your browser. Press Esc to go back.")));
  }
  if (isClaudeAIAuthenticating) {
    return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1, padding: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "claude" }, "Authenticating with ", server.name, "\u2026"), /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(Spinner, null), /* @__PURE__ */ react_default.createElement(ThemedText, null, " A browser window will open for authentication")), claudeAIAuthUrl && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "If your browser doesn't open automatically, copy this URL manually", " "), urlCopied ? /* @__PURE__ */ react_default.createElement(ThemedText, { color: "success" }, "(Copied!)") : /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "c", action: "copy", parens: true }))), /* @__PURE__ */ react_default.createElement(Link, { url: claudeAIAuthUrl })), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginLeft: 3, flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "permission" }, "Press ", /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Enter"), " after authenticating in your browser."), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true, italic: true }, /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "back" }))));
  }
  if (isClaudeAIClearingAuth) {
    return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1, padding: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "claude" }, "Clear authentication for ", server.name), claudeAIClearAuthBrowserOpened ? /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement(ThemedText, null, 'Find the MCP server in the browser and click "Disconnect".'), claudeAIClearAuthUrl && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "If your browser didn't open automatically, copy this URL manually", " "), urlCopied ? /* @__PURE__ */ react_default.createElement(ThemedText, { color: "success" }, "(Copied!)") : /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "c", action: "copy", parens: true }))), /* @__PURE__ */ react_default.createElement(Link, { url: claudeAIClearAuthUrl })), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginLeft: 3, flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "permission" }, "Press ", /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Enter"), " when done."), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true, italic: true }, /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "back" })))) : /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement(ThemedText, null, 'This will open claude.ai in the browser. Find the MCP server in the list and click "Disconnect".'), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginLeft: 3, flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "permission" }, "Press ", /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Enter"), " to open the browser."), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true, italic: true }, /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "back" })))));
  }
  if (isReconnecting) {
    return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1, padding: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "text" }, "Connecting to ", /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, server.name), "\u2026"), /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(Spinner, null), /* @__PURE__ */ react_default.createElement(ThemedText, null, " Establishing connection to MCP server")), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "This may take a few moments."));
  }
  const menuOptions = [];
  if (server.client.type === "disabled") {
    menuOptions.push({
      label: "Enable",
      value: "toggle-enabled"
    });
  }
  if (server.client.type === "connected" && serverToolsCount > 0) {
    menuOptions.push({
      label: "View tools",
      value: "tools"
    });
  }
  if (server.config.type === "claudeai-proxy") {
    if (server.client.type === "connected") {
      menuOptions.push({
        label: "Clear authentication",
        value: "claudeai-clear-auth"
      });
    } else if (server.client.type !== "disabled") {
      menuOptions.push({
        label: "Authenticate",
        value: "claudeai-auth"
      });
    }
  } else {
    if (isEffectivelyAuthenticated) {
      menuOptions.push({
        label: "Re-authenticate",
        value: "reauth"
      });
      menuOptions.push({
        label: "Clear authentication",
        value: "clear-auth"
      });
    }
    if (!isEffectivelyAuthenticated) {
      menuOptions.push({
        label: "Authenticate",
        value: "auth"
      });
    }
  }
  if (server.client.type !== "disabled") {
    if (server.client.type !== "needs-auth") {
      menuOptions.push({
        label: "Reconnect",
        value: "reconnectMcpServer"
      });
    }
    menuOptions.push({
      label: "Disable",
      value: "toggle-enabled"
    });
  }
  if (menuOptions.length === 0) {
    menuOptions.push({
      label: "Back",
      value: "back"
    });
  }
  return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", paddingX: 1, borderStyle: borderless ? void 0 : "round" }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, capitalizedServerName, " MCP Server")), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 0 }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Status: "), server.client.type === "disabled" ? /* @__PURE__ */ react_default.createElement(ThemedText, null, color("inactive", theme)(figures_default.radioOff), " disabled") : server.client.type === "connected" ? /* @__PURE__ */ react_default.createElement(ThemedText, null, color("success", theme)(figures_default.tick), " connected") : server.client.type === "pending" ? /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, figures_default.radioOff), /* @__PURE__ */ react_default.createElement(ThemedText, null, " connecting\u2026")) : server.client.type === "needs-auth" ? /* @__PURE__ */ react_default.createElement(ThemedText, null, color("warning", theme)(figures_default.triangleUpOutline), " needs authentication") : /* @__PURE__ */ react_default.createElement(ThemedText, null, color("error", theme)(figures_default.cross), " failed")), server.transport !== "claudeai-proxy" && /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Auth: "), isEffectivelyAuthenticated ? /* @__PURE__ */ react_default.createElement(ThemedText, null, color("success", theme)(figures_default.tick), " authenticated") : /* @__PURE__ */ react_default.createElement(ThemedText, null, color("error", theme)(figures_default.cross), " not authenticated")), /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "URL: "), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, server.config.url)), /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Config location: "), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, describeMcpConfigFilePath(server.scope))), server.client.type === "connected" && /* @__PURE__ */ react_default.createElement(CapabilitiesSection, { serverToolsCount, serverPromptsCount: serverCommandsCount, serverResourcesCount: mcp.resources[server.name]?.length || 0 }), server.client.type === "connected" && serverToolsCount > 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Tools: "), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, serverToolsCount, " tools"))), error && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, "Error: ", error)), menuOptions.length > 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(Select, { options: menuOptions, onChange: async (value_0) => {
    switch (value_0) {
      case "tools":
        onViewTools();
        break;
      case "auth":
      case "reauth":
        await handleAuthenticate();
        break;
      case "clear-auth":
        await handleClearAuth();
        break;
      case "claudeai-auth":
        await handleClaudeAIAuth();
        break;
      case "claudeai-clear-auth":
        handleClaudeAIClearAuth();
        break;
      case "reconnectMcpServer":
        setIsReconnecting(true);
        try {
          const result_1 = await reconnectMcpServer(server.name);
          if (server.config.type === "claudeai-proxy") {
            logEvent("tengu_claudeai_mcp_reconnect", {
              success: result_1.client.type === "connected"
            });
          }
          const {
            message: message_0
          } = handleReconnectResult(result_1, server.name);
          onComplete?.(message_0);
        } catch (err_2) {
          if (server.config.type === "claudeai-proxy") {
            logEvent("tengu_claudeai_mcp_reconnect", {
              success: false
            });
          }
          onComplete?.(handleReconnectError(err_2, server.name));
        } finally {
          setIsReconnecting(false);
        }
        break;
      case "toggle-enabled":
        await handleToggleEnabled();
        break;
      case "back":
        onCancel();
        break;
    }
  }, onCancel }))), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true, italic: true }, exitState.pending ? /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, "Press ", exitState.keyName, " again to exit") : /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "\u2191\u2193", action: "navigate" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "select" }), /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "back" })))));
}
var init_MCPRemoteServerMenu = __esm({
  "src/components/mcp/MCPRemoteServerMenu.tsx"() {
    init_figures();
    init_react();
    init_analytics();
    init_oauth();
    init_useExitOnCtrlCDWithKeybindings();
    init_useTerminalSize();
    init_osc();
    init_ink();
    init_useKeybinding();
    init_auth2();
    init_client();
    init_MCPConnectionManager();
    init_utils();
    init_AppState();
    init_auth();
    init_browser();
    init_errors();
    init_log();
    init_stringUtils();
    init_ConfigurableShortcutHint();
    init_CustomSelect();
    init_Byline();
    init_KeyboardShortcutHint();
    init_Spinner();
    init_TextInput();
    init_CapabilitiesSection();
    init_reconnectHelpers();
  }
});

// src/components/mcp/MCPStdioServerMenu.tsx
function MCPStdioServerMenu({
  server,
  serverToolsCount,
  onViewTools,
  onCancel,
  onComplete,
  borderless = false
}) {
  const [theme] = useTheme();
  const exitState = useExitOnCtrlCDWithKeybindings();
  const mcp = useAppState((s) => s.mcp);
  const reconnectMcpServer = useMcpReconnect();
  const toggleMcpServer = useMcpToggleEnabled();
  const [isReconnecting, setIsReconnecting] = useState(false);
  const handleToggleEnabled = react_default.useCallback(async () => {
    const wasEnabled = server.client.type !== "disabled";
    try {
      await toggleMcpServer(server.name);
      onCancel();
    } catch (err) {
      const action = wasEnabled ? "disable" : "enable";
      onComplete(`Failed to ${action} MCP server '${server.name}': ${errorMessage(err)}`);
    }
  }, [server.client.type, server.name, toggleMcpServer, onCancel, onComplete]);
  const capitalizedServerName = capitalize(String(server.name));
  const serverCommandsCount = filterMcpPromptsByServer(mcp.commands, server.name).length;
  const menuOptions = [];
  if (server.client.type !== "disabled" && serverToolsCount > 0) {
    menuOptions.push({
      label: "View tools",
      value: "tools"
    });
  }
  if (server.client.type !== "disabled") {
    menuOptions.push({
      label: "Reconnect",
      value: "reconnectMcpServer"
    });
  }
  menuOptions.push({
    label: server.client.type !== "disabled" ? "Disable" : "Enable",
    value: "toggle-enabled"
  });
  if (menuOptions.length === 0) {
    menuOptions.push({
      label: "Back",
      value: "back"
    });
  }
  if (isReconnecting) {
    return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1, padding: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "text" }, "Reconnecting to ", /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, server.name)), /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(Spinner, null), /* @__PURE__ */ react_default.createElement(ThemedText, null, " Restarting MCP server process")), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "This may take a few moments."));
  }
  return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", paddingX: 1, borderStyle: borderless ? void 0 : "round" }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, capitalizedServerName, " MCP Server")), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 0 }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Status: "), server.client.type === "disabled" ? /* @__PURE__ */ react_default.createElement(ThemedText, null, color("inactive", theme)(figures_default.radioOff), " disabled") : server.client.type === "connected" ? /* @__PURE__ */ react_default.createElement(ThemedText, null, color("success", theme)(figures_default.tick), " connected") : server.client.type === "pending" ? /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, figures_default.radioOff), /* @__PURE__ */ react_default.createElement(ThemedText, null, " connecting\u2026")) : /* @__PURE__ */ react_default.createElement(ThemedText, null, color("error", theme)(figures_default.cross), " failed")), /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Command: "), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, server.config.command)), server.config.args && server.config.args.length > 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Args: "), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, server.config.args.join(" "))), /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Config location: "), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, describeMcpConfigFilePath(getMcpConfigByName(server.name)?.scope ?? "dynamic"))), server.client.type === "connected" && /* @__PURE__ */ react_default.createElement(CapabilitiesSection, { serverToolsCount, serverPromptsCount: serverCommandsCount, serverResourcesCount: mcp.resources[server.name]?.length || 0 }), server.client.type === "connected" && serverToolsCount > 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Tools: "), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, serverToolsCount, " tools"))), menuOptions.length > 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(Select, { options: menuOptions, onChange: async (value) => {
    if (value === "tools") {
      onViewTools();
    } else if (value === "reconnectMcpServer") {
      setIsReconnecting(true);
      try {
        const result = await reconnectMcpServer(server.name);
        const {
          message
        } = handleReconnectResult(result, server.name);
        onComplete?.(message);
      } catch (err_0) {
        onComplete?.(handleReconnectError(err_0, server.name));
      } finally {
        setIsReconnecting(false);
      }
    } else if (value === "toggle-enabled") {
      await handleToggleEnabled();
    } else if (value === "back") {
      onCancel();
    }
  }, onCancel }))), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true, italic: true }, exitState.pending ? /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, "Press ", exitState.keyName, " again to exit") : /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "\u2191\u2193", action: "navigate" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "select" }), /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "back" })))));
}
var init_MCPStdioServerMenu = __esm({
  "src/components/mcp/MCPStdioServerMenu.tsx"() {
    init_figures();
    init_react();
    init_useExitOnCtrlCDWithKeybindings();
    init_ink();
    init_config2();
    init_MCPConnectionManager();
    init_utils();
    init_AppState();
    init_errors();
    init_stringUtils();
    init_ConfigurableShortcutHint();
    init_CustomSelect();
    init_Byline();
    init_KeyboardShortcutHint();
    init_Spinner();
    init_CapabilitiesSection();
    init_reconnectHelpers();
  }
});

// src/components/mcp/MCPToolDetailView.tsx
function MCPToolDetailView(t0) {
  const $ = c(44);
  const {
    tool,
    server,
    onBack
  } = t0;
  const [toolDescription, setToolDescription] = react_default.useState("");
  let t1;
  let toolName;
  if ($[0] !== server.name || $[1] !== tool) {
    toolName = getMcpDisplayName(tool.name, server.name);
    const fullDisplayName = tool.userFacingName ? tool.userFacingName({}) : toolName;
    t1 = extractMcpToolDisplayName(fullDisplayName);
    $[0] = server.name;
    $[1] = tool;
    $[2] = t1;
    $[3] = toolName;
  } else {
    t1 = $[2];
    toolName = $[3];
  }
  const displayName = t1;
  let t2;
  if ($[4] !== tool) {
    t2 = tool.isReadOnly?.({}) ?? false;
    $[4] = tool;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  const isReadOnly = t2;
  let t3;
  if ($[6] !== tool) {
    t3 = tool.isDestructive?.({}) ?? false;
    $[6] = tool;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  const isDestructive = t3;
  let t4;
  if ($[8] !== tool) {
    t4 = tool.isOpenWorld?.({}) ?? false;
    $[8] = tool;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  const isOpenWorld = t4;
  let t5;
  let t6;
  if ($[10] !== tool) {
    t5 = () => {
      const loadDescription = async function loadDescription2() {
        try {
          const desc = await tool.description({}, {
            isNonInteractiveSession: false,
            toolPermissionContext: {
              mode: "default",
              additionalWorkingDirectories: /* @__PURE__ */ new Map(),
              alwaysAllowRules: {},
              alwaysDenyRules: {},
              alwaysAskRules: {},
              isBypassPermissionsModeAvailable: false
            },
            tools: []
          });
          setToolDescription(desc);
        } catch {
          setToolDescription("Failed to load description");
        }
      };
      loadDescription();
    };
    t6 = [tool];
    $[10] = tool;
    $[11] = t5;
    $[12] = t6;
  } else {
    t5 = $[11];
    t6 = $[12];
  }
  react_default.useEffect(t5, t6);
  let t7;
  if ($[13] !== isReadOnly) {
    t7 = isReadOnly && /* @__PURE__ */ react_default.createElement(ThemedText, { color: "success" }, " [read-only]");
    $[13] = isReadOnly;
    $[14] = t7;
  } else {
    t7 = $[14];
  }
  let t8;
  if ($[15] !== isDestructive) {
    t8 = isDestructive && /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, " [destructive]");
    $[15] = isDestructive;
    $[16] = t8;
  } else {
    t8 = $[16];
  }
  let t9;
  if ($[17] !== isOpenWorld) {
    t9 = isOpenWorld && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, " [open-world]");
    $[17] = isOpenWorld;
    $[18] = t9;
  } else {
    t9 = $[18];
  }
  let t10;
  if ($[19] !== displayName || $[20] !== t7 || $[21] !== t8 || $[22] !== t9) {
    t10 = /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, displayName, t7, t8, t9);
    $[19] = displayName;
    $[20] = t7;
    $[21] = t8;
    $[22] = t9;
    $[23] = t10;
  } else {
    t10 = $[23];
  }
  const titleContent = t10;
  let t11;
  if ($[24] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t11 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Tool name: ");
    $[24] = t11;
  } else {
    t11 = $[24];
  }
  let t12;
  if ($[25] !== toolName) {
    t12 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, t11, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, toolName));
    $[25] = toolName;
    $[26] = t12;
  } else {
    t12 = $[26];
  }
  let t13;
  if ($[27] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t13 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Full name: ");
    $[27] = t13;
  } else {
    t13 = $[27];
  }
  let t14;
  if ($[28] !== tool.name) {
    t14 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, t13, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, tool.name));
    $[28] = tool.name;
    $[29] = t14;
  } else {
    t14 = $[29];
  }
  let t15;
  if ($[30] !== toolDescription) {
    t15 = toolDescription && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Description:"), /* @__PURE__ */ react_default.createElement(ThemedText, { wrap: "wrap" }, toolDescription));
    $[30] = toolDescription;
    $[31] = t15;
  } else {
    t15 = $[31];
  }
  let t16;
  if ($[32] !== tool.inputJSONSchema) {
    t16 = tool.inputJSONSchema && tool.inputJSONSchema.properties && Object.keys(tool.inputJSONSchema.properties).length > 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Parameters:"), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginLeft: 2, flexDirection: "column" }, Object.entries(tool.inputJSONSchema.properties).map((t172) => {
      const [key, value] = t172;
      const required = tool.inputJSONSchema?.required;
      const isRequired = required?.includes(key);
      return /* @__PURE__ */ react_default.createElement(ThemedText, { key }, "\u2022 ", key, isRequired && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, " (required)"), ":", " ", /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, typeof value === "object" && value && "type" in value ? String(value.type) : "unknown"), typeof value === "object" && value && "description" in value && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, " - ", String(value.description)));
    })));
    $[32] = tool.inputJSONSchema;
    $[33] = t16;
  } else {
    t16 = $[33];
  }
  let t17;
  if ($[34] !== t12 || $[35] !== t14 || $[36] !== t15 || $[37] !== t16) {
    t17 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, t12, t14, t15, t16);
    $[34] = t12;
    $[35] = t14;
    $[36] = t15;
    $[37] = t16;
    $[38] = t17;
  } else {
    t17 = $[38];
  }
  let t18;
  if ($[39] !== onBack || $[40] !== server.name || $[41] !== t17 || $[42] !== titleContent) {
    t18 = /* @__PURE__ */ react_default.createElement(Dialog, { title: titleContent, subtitle: server.name, onCancel: onBack, inputGuide: _temp4 }, t17);
    $[39] = onBack;
    $[40] = server.name;
    $[41] = t17;
    $[42] = titleContent;
    $[43] = t18;
  } else {
    t18 = $[43];
  }
  return t18;
}
function _temp4(exitState) {
  return exitState.pending ? /* @__PURE__ */ react_default.createElement(ThemedText, null, "Press ", exitState.keyName, " again to exit") : /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "go back" });
}
var init_MCPToolDetailView = __esm({
  "src/components/mcp/MCPToolDetailView.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_mcpStringUtils();
    init_ConfigurableShortcutHint();
    init_Dialog();
  }
});

// src/components/mcp/MCPToolListView.tsx
function MCPToolListView(t0) {
  const $ = c(21);
  const {
    server,
    onSelectTool,
    onBack
  } = t0;
  const mcpTools = useAppState(_temp5);
  let t1;
  bb0: {
    if (server.client.type !== "connected") {
      let t23;
      if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t23 = [];
        $[0] = t23;
      } else {
        t23 = $[0];
      }
      t1 = t23;
      break bb0;
    }
    let t22;
    if ($[1] !== mcpTools || $[2] !== server.name) {
      t22 = filterToolsByServer(mcpTools, server.name);
      $[1] = mcpTools;
      $[2] = server.name;
      $[3] = t22;
    } else {
      t22 = $[3];
    }
    t1 = t22;
  }
  const serverTools = t1;
  let t2;
  if ($[4] !== server.name || $[5] !== serverTools) {
    let t32;
    if ($[7] !== server.name) {
      t32 = (tool, index) => {
        const toolName = getMcpDisplayName(tool.name, server.name);
        const fullDisplayName = tool.userFacingName ? tool.userFacingName({}) : toolName;
        const displayName = extractMcpToolDisplayName(fullDisplayName);
        const isReadOnly = tool.isReadOnly?.({}) ?? false;
        const isDestructive = tool.isDestructive?.({}) ?? false;
        const isOpenWorld = tool.isOpenWorld?.({}) ?? false;
        const annotations = [];
        if (isReadOnly) {
          annotations.push("read-only");
        }
        if (isDestructive) {
          annotations.push("destructive");
        }
        if (isOpenWorld) {
          annotations.push("open-world");
        }
        return {
          label: displayName,
          value: index.toString(),
          description: annotations.length > 0 ? annotations.join(", ") : void 0,
          descriptionColor: isDestructive ? "error" : isReadOnly ? "success" : void 0
        };
      };
      $[7] = server.name;
      $[8] = t32;
    } else {
      t32 = $[8];
    }
    t2 = serverTools.map(t32);
    $[4] = server.name;
    $[5] = serverTools;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  const toolOptions = t2;
  const t3 = `Tools for ${server.name}`;
  const t4 = serverTools.length;
  let t5;
  if ($[9] !== serverTools.length) {
    t5 = plural(serverTools.length, "tool");
    $[9] = serverTools.length;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  const t6 = `${t4} ${t5}`;
  let t7;
  if ($[11] !== onBack || $[12] !== onSelectTool || $[13] !== serverTools || $[14] !== toolOptions) {
    t7 = serverTools.length === 0 ? /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "No tools available") : /* @__PURE__ */ react_default.createElement(Select, { options: toolOptions, onChange: (value) => {
      const index_0 = parseInt(value);
      const tool_0 = serverTools[index_0];
      if (tool_0) {
        onSelectTool(tool_0, index_0);
      }
    }, onCancel: onBack });
    $[11] = onBack;
    $[12] = onSelectTool;
    $[13] = serverTools;
    $[14] = toolOptions;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  let t8;
  if ($[16] !== onBack || $[17] !== t3 || $[18] !== t6 || $[19] !== t7) {
    t8 = /* @__PURE__ */ react_default.createElement(Dialog, { title: t3, subtitle: t6, onCancel: onBack, inputGuide: _temp22 }, t7);
    $[16] = onBack;
    $[17] = t3;
    $[18] = t6;
    $[19] = t7;
    $[20] = t8;
  } else {
    t8 = $[20];
  }
  return t8;
}
function _temp22(exitState) {
  return exitState.pending ? /* @__PURE__ */ react_default.createElement(ThemedText, null, "Press ", exitState.keyName, " again to exit") : /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "\u2191\u2193", action: "navigate" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "select" }), /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "back" }));
}
function _temp5(s) {
  return s.mcp.tools;
}
var init_MCPToolListView = __esm({
  "src/components/mcp/MCPToolListView.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_mcpStringUtils();
    init_utils();
    init_AppState();
    init_stringUtils();
    init_ConfigurableShortcutHint();
    init_CustomSelect();
    init_Byline();
    init_Dialog();
    init_KeyboardShortcutHint();
  }
});

// src/commands/plugin/PluginErrors.tsx
function formatErrorMessage(error) {
  switch (error.type) {
    case "path-not-found":
      return `${error.component} path not found: ${error.path}`;
    case "git-auth-failed":
      return `Git ${error.authType.toUpperCase()} authentication failed for ${error.gitUrl}`;
    case "git-timeout":
      return `Git ${error.operation} timed out for ${error.gitUrl}`;
    case "network-error":
      return `Network error accessing ${error.url}${error.details ? `: ${error.details}` : ""}`;
    case "manifest-parse-error":
      return `Failed to parse manifest at ${error.manifestPath}: ${error.parseError}`;
    case "manifest-validation-error":
      return `Invalid manifest at ${error.manifestPath}: ${error.validationErrors.join(", ")}`;
    case "plugin-not-found":
      return `Plugin "${error.pluginId}" not found in marketplace "${error.marketplace}"`;
    case "marketplace-not-found":
      return `Marketplace "${error.marketplace}" not found`;
    case "marketplace-load-failed":
      return `Failed to load marketplace "${error.marketplace}": ${error.reason}`;
    case "mcp-config-invalid":
      return `Invalid MCP server config for "${error.serverName}": ${error.validationError}`;
    case "mcp-server-suppressed-duplicate": {
      const dup = error.duplicateOf.startsWith("plugin:") ? `server provided by plugin "${error.duplicateOf.split(":")[1] ?? "?"}"` : `already-configured "${error.duplicateOf}"`;
      return `MCP server "${error.serverName}" skipped \u2014 same command/URL as ${dup}`;
    }
    case "hook-load-failed":
      return `Failed to load hooks from ${error.hookPath}: ${error.reason}`;
    case "component-load-failed":
      return `Failed to load ${error.component} from ${error.path}: ${error.reason}`;
    case "mcpb-download-failed":
      return `Failed to download MCPB from ${error.url}: ${error.reason}`;
    case "mcpb-extract-failed":
      return `Failed to extract MCPB ${error.mcpbPath}: ${error.reason}`;
    case "mcpb-invalid-manifest":
      return `MCPB manifest invalid at ${error.mcpbPath}: ${error.validationError}`;
    case "marketplace-blocked-by-policy":
      return error.blockedByBlocklist ? `Marketplace "${error.marketplace}" is blocked by enterprise policy` : `Marketplace "${error.marketplace}" is not in the allowed marketplace list`;
    case "dependency-unsatisfied":
      return error.reason === "not-enabled" ? `Dependency "${error.dependency}" is disabled` : `Dependency "${error.dependency}" is not installed`;
    case "lsp-config-invalid":
      return `Invalid LSP server config for "${error.serverName}": ${error.validationError}`;
    case "lsp-server-start-failed":
      return `LSP server "${error.serverName}" failed to start: ${error.reason}`;
    case "lsp-server-crashed":
      return error.signal ? `LSP server "${error.serverName}" crashed with signal ${error.signal}` : `LSP server "${error.serverName}" crashed with exit code ${error.exitCode ?? "unknown"}`;
    case "lsp-request-timeout":
      return `LSP server "${error.serverName}" timed out on ${error.method} after ${error.timeoutMs}ms`;
    case "lsp-request-failed":
      return `LSP server "${error.serverName}" ${error.method} failed: ${error.error}`;
    case "plugin-cache-miss":
      return `Plugin "${error.plugin}" not cached at ${error.installPath}`;
    case "generic-error":
      return error.error;
  }
  const _exhaustive = error;
  return getPluginErrorMessage(_exhaustive);
}
function getErrorGuidance(error) {
  switch (error.type) {
    case "path-not-found":
      return "Check that the path in your manifest or marketplace config is correct";
    case "git-auth-failed":
      return error.authType === "ssh" ? "Configure SSH keys or use HTTPS URL instead" : "Configure credentials or use SSH URL instead";
    case "git-timeout":
    case "network-error":
      return "Check your internet connection and try again";
    case "manifest-parse-error":
      return "Check manifest file syntax in the plugin directory";
    case "manifest-validation-error":
      return "Check manifest file follows the required schema";
    case "plugin-not-found":
      return `Plugin may not exist in marketplace "${error.marketplace}"`;
    case "marketplace-not-found":
      return error.availableMarketplaces.length > 0 ? `Available marketplaces: ${error.availableMarketplaces.join(", ")}` : "Add the marketplace first using /plugin marketplace add";
    case "mcp-config-invalid":
      return "Check MCP server configuration in .mcp.json or manifest";
    case "mcp-server-suppressed-duplicate": {
      if (error.duplicateOf.startsWith("plugin:")) {
        const winningPlugin = error.duplicateOf.split(":")[1] ?? "the other plugin";
        return `Disable plugin "${winningPlugin}" if you want this plugin's version instead`;
      }
      return `Remove "${error.duplicateOf}" from your MCP config if you want the plugin's version instead`;
    }
    case "hook-load-failed":
      return "Check hooks.json file syntax and structure";
    case "component-load-failed":
      return `Check ${error.component} directory structure and file permissions`;
    case "mcpb-download-failed":
      return "Check your internet connection and URL accessibility";
    case "mcpb-extract-failed":
      return "Verify the MCPB file is valid and not corrupted";
    case "mcpb-invalid-manifest":
      return "Contact the plugin author about the invalid manifest";
    case "marketplace-blocked-by-policy":
      if (error.blockedByBlocklist) {
        return "This marketplace source is explicitly blocked by your administrator";
      }
      return error.allowedSources.length > 0 ? `Allowed sources: ${error.allowedSources.join(", ")}` : "Contact your administrator to configure allowed marketplace sources";
    case "dependency-unsatisfied":
      return error.reason === "not-enabled" ? `Enable "${error.dependency}" or uninstall "${error.plugin}"` : `Install "${error.dependency}" or uninstall "${error.plugin}"`;
    case "lsp-config-invalid":
      return "Check LSP server configuration in the plugin manifest";
    case "lsp-server-start-failed":
    case "lsp-server-crashed":
    case "lsp-request-timeout":
    case "lsp-request-failed":
      return "Check LSP server logs with --debug for details";
    case "plugin-cache-miss":
      return "Run /plugins to refresh the plugin cache";
    case "marketplace-load-failed":
    case "generic-error":
      return null;
  }
  const _exhaustive = error;
  return null;
}
var init_PluginErrors = __esm({
  "src/commands/plugin/PluginErrors.tsx"() {
    init_plugin();
  }
});

// src/commands/plugin/UnifiedInstalledCell.tsx
function UnifiedInstalledCell(t0) {
  const $ = c(142);
  const {
    item,
    isSelected
  } = t0;
  const [theme] = useTheme();
  if (item.type === "plugin") {
    let statusIcon;
    let statusText;
    if (item.pendingToggle) {
      let t15;
      if ($[0] !== theme) {
        t15 = color("suggestion", theme)(figures_default.arrowRight);
        $[0] = theme;
        $[1] = t15;
      } else {
        t15 = $[1];
      }
      statusIcon = t15;
      statusText = item.pendingToggle === "will-enable" ? "will enable" : "will disable";
    } else {
      if (item.errorCount > 0) {
        let t15;
        if ($[2] !== theme) {
          t15 = color("error", theme)(figures_default.cross);
          $[2] = theme;
          $[3] = t15;
        } else {
          t15 = $[3];
        }
        statusIcon = t15;
        const t23 = item.errorCount;
        let t33;
        if ($[4] !== item.errorCount) {
          t33 = plural(item.errorCount, "error");
          $[4] = item.errorCount;
          $[5] = t33;
        } else {
          t33 = $[5];
        }
        statusText = `${t23} ${t33}`;
      } else {
        if (!item.isEnabled) {
          let t15;
          if ($[6] !== theme) {
            t15 = color("inactive", theme)(figures_default.radioOff);
            $[6] = theme;
            $[7] = t15;
          } else {
            t15 = $[7];
          }
          statusIcon = t15;
          statusText = "disabled";
        } else {
          let t15;
          if ($[8] !== theme) {
            t15 = color("success", theme)(figures_default.tick);
            $[8] = theme;
            $[9] = t15;
          } else {
            t15 = $[9];
          }
          statusIcon = t15;
          statusText = "enabled";
        }
      }
    }
    const t14 = isSelected ? "suggestion" : void 0;
    const t22 = isSelected ? `${figures_default.pointer} ` : "  ";
    let t32;
    if ($[10] !== t14 || $[11] !== t22) {
      t32 = /* @__PURE__ */ createElement(ThemedText, { color: t14 }, t22);
      $[10] = t14;
      $[11] = t22;
      $[12] = t32;
    } else {
      t32 = $[12];
    }
    const t42 = isSelected ? "suggestion" : void 0;
    let t52;
    if ($[13] !== item.name || $[14] !== t42) {
      t52 = /* @__PURE__ */ createElement(ThemedText, { color: t42 }, item.name);
      $[13] = item.name;
      $[14] = t42;
      $[15] = t52;
    } else {
      t52 = $[15];
    }
    const t62 = !isSelected;
    let t72;
    if ($[16] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t72 = /* @__PURE__ */ createElement(ThemedText, { backgroundColor: "userMessageBackground" }, "Plugin");
      $[16] = t72;
    } else {
      t72 = $[16];
    }
    let t82;
    if ($[17] !== t62) {
      t82 = /* @__PURE__ */ createElement(ThemedText, { dimColor: t62 }, " ", t72);
      $[17] = t62;
      $[18] = t82;
    } else {
      t82 = $[18];
    }
    let t92;
    if ($[19] !== item.marketplace) {
      t92 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " \xB7 ", item.marketplace);
      $[19] = item.marketplace;
      $[20] = t92;
    } else {
      t92 = $[20];
    }
    const t102 = !isSelected;
    let t112;
    if ($[21] !== statusIcon || $[22] !== t102) {
      t112 = /* @__PURE__ */ createElement(ThemedText, { dimColor: t102 }, " \xB7 ", statusIcon, " ");
      $[21] = statusIcon;
      $[22] = t102;
      $[23] = t112;
    } else {
      t112 = $[23];
    }
    const t122 = !isSelected;
    let t132;
    if ($[24] !== statusText || $[25] !== t122) {
      t132 = /* @__PURE__ */ createElement(ThemedText, { dimColor: t122 }, statusText);
      $[24] = statusText;
      $[25] = t122;
      $[26] = t132;
    } else {
      t132 = $[26];
    }
    let t142;
    if ($[27] !== t112 || $[28] !== t132 || $[29] !== t32 || $[30] !== t52 || $[31] !== t82 || $[32] !== t92) {
      t142 = /* @__PURE__ */ createElement(ThemedBox_default, null, t32, t52, t82, t92, t112, t132);
      $[27] = t112;
      $[28] = t132;
      $[29] = t32;
      $[30] = t52;
      $[31] = t82;
      $[32] = t92;
      $[33] = t142;
    } else {
      t142 = $[33];
    }
    return t142;
  }
  if (item.type === "flagged-plugin") {
    let t14;
    if ($[34] !== theme) {
      t14 = color("warning", theme)(figures_default.warning);
      $[34] = theme;
      $[35] = t14;
    } else {
      t14 = $[35];
    }
    const statusIcon_0 = t14;
    const t22 = isSelected ? "suggestion" : void 0;
    const t32 = isSelected ? `${figures_default.pointer} ` : "  ";
    let t42;
    if ($[36] !== t22 || $[37] !== t32) {
      t42 = /* @__PURE__ */ createElement(ThemedText, { color: t22 }, t32);
      $[36] = t22;
      $[37] = t32;
      $[38] = t42;
    } else {
      t42 = $[38];
    }
    const t52 = isSelected ? "suggestion" : void 0;
    let t62;
    if ($[39] !== item.name || $[40] !== t52) {
      t62 = /* @__PURE__ */ createElement(ThemedText, { color: t52 }, item.name);
      $[39] = item.name;
      $[40] = t52;
      $[41] = t62;
    } else {
      t62 = $[41];
    }
    const t72 = !isSelected;
    let t82;
    if ($[42] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t82 = /* @__PURE__ */ createElement(ThemedText, { backgroundColor: "userMessageBackground" }, "Plugin");
      $[42] = t82;
    } else {
      t82 = $[42];
    }
    let t92;
    if ($[43] !== t72) {
      t92 = /* @__PURE__ */ createElement(ThemedText, { dimColor: t72 }, " ", t82);
      $[43] = t72;
      $[44] = t92;
    } else {
      t92 = $[44];
    }
    let t102;
    if ($[45] !== item.marketplace) {
      t102 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " \xB7 ", item.marketplace);
      $[45] = item.marketplace;
      $[46] = t102;
    } else {
      t102 = $[46];
    }
    const t112 = !isSelected;
    let t122;
    if ($[47] !== statusIcon_0 || $[48] !== t112) {
      t122 = /* @__PURE__ */ createElement(ThemedText, { dimColor: t112 }, " \xB7 ", statusIcon_0, " ");
      $[47] = statusIcon_0;
      $[48] = t112;
      $[49] = t122;
    } else {
      t122 = $[49];
    }
    const t132 = !isSelected;
    let t142;
    if ($[50] !== t132) {
      t142 = /* @__PURE__ */ createElement(ThemedText, { dimColor: t132 }, "removed");
      $[50] = t132;
      $[51] = t142;
    } else {
      t142 = $[51];
    }
    let t15;
    if ($[52] !== t102 || $[53] !== t122 || $[54] !== t142 || $[55] !== t42 || $[56] !== t62 || $[57] !== t92) {
      t15 = /* @__PURE__ */ createElement(ThemedBox_default, null, t42, t62, t92, t102, t122, t142);
      $[52] = t102;
      $[53] = t122;
      $[54] = t142;
      $[55] = t42;
      $[56] = t62;
      $[57] = t92;
      $[58] = t15;
    } else {
      t15 = $[58];
    }
    return t15;
  }
  if (item.type === "failed-plugin") {
    let t14;
    if ($[59] !== theme) {
      t14 = color("error", theme)(figures_default.cross);
      $[59] = theme;
      $[60] = t14;
    } else {
      t14 = $[60];
    }
    const statusIcon_1 = t14;
    const t22 = item.errorCount;
    let t32;
    if ($[61] !== item.errorCount) {
      t32 = plural(item.errorCount, "error");
      $[61] = item.errorCount;
      $[62] = t32;
    } else {
      t32 = $[62];
    }
    const statusText_0 = `failed to load \xB7 ${t22} ${t32}`;
    const t42 = isSelected ? "suggestion" : void 0;
    const t52 = isSelected ? `${figures_default.pointer} ` : "  ";
    let t62;
    if ($[63] !== t42 || $[64] !== t52) {
      t62 = /* @__PURE__ */ createElement(ThemedText, { color: t42 }, t52);
      $[63] = t42;
      $[64] = t52;
      $[65] = t62;
    } else {
      t62 = $[65];
    }
    const t72 = isSelected ? "suggestion" : void 0;
    let t82;
    if ($[66] !== item.name || $[67] !== t72) {
      t82 = /* @__PURE__ */ createElement(ThemedText, { color: t72 }, item.name);
      $[66] = item.name;
      $[67] = t72;
      $[68] = t82;
    } else {
      t82 = $[68];
    }
    const t92 = !isSelected;
    let t102;
    if ($[69] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t102 = /* @__PURE__ */ createElement(ThemedText, { backgroundColor: "userMessageBackground" }, "Plugin");
      $[69] = t102;
    } else {
      t102 = $[69];
    }
    let t112;
    if ($[70] !== t92) {
      t112 = /* @__PURE__ */ createElement(ThemedText, { dimColor: t92 }, " ", t102);
      $[70] = t92;
      $[71] = t112;
    } else {
      t112 = $[71];
    }
    let t122;
    if ($[72] !== item.marketplace) {
      t122 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " \xB7 ", item.marketplace);
      $[72] = item.marketplace;
      $[73] = t122;
    } else {
      t122 = $[73];
    }
    const t132 = !isSelected;
    let t142;
    if ($[74] !== statusIcon_1 || $[75] !== t132) {
      t142 = /* @__PURE__ */ createElement(ThemedText, { dimColor: t132 }, " \xB7 ", statusIcon_1, " ");
      $[74] = statusIcon_1;
      $[75] = t132;
      $[76] = t142;
    } else {
      t142 = $[76];
    }
    const t15 = !isSelected;
    let t16;
    if ($[77] !== statusText_0 || $[78] !== t15) {
      t16 = /* @__PURE__ */ createElement(ThemedText, { dimColor: t15 }, statusText_0);
      $[77] = statusText_0;
      $[78] = t15;
      $[79] = t16;
    } else {
      t16 = $[79];
    }
    let t17;
    if ($[80] !== t112 || $[81] !== t122 || $[82] !== t142 || $[83] !== t16 || $[84] !== t62 || $[85] !== t82) {
      t17 = /* @__PURE__ */ createElement(ThemedBox_default, null, t62, t82, t112, t122, t142, t16);
      $[80] = t112;
      $[81] = t122;
      $[82] = t142;
      $[83] = t16;
      $[84] = t62;
      $[85] = t82;
      $[86] = t17;
    } else {
      t17 = $[86];
    }
    return t17;
  }
  let statusIcon_2;
  let statusText_1;
  if (item.status === "connected") {
    let t14;
    if ($[87] !== theme) {
      t14 = color("success", theme)(figures_default.tick);
      $[87] = theme;
      $[88] = t14;
    } else {
      t14 = $[88];
    }
    statusIcon_2 = t14;
    statusText_1 = "connected";
  } else {
    if (item.status === "disabled") {
      let t14;
      if ($[89] !== theme) {
        t14 = color("inactive", theme)(figures_default.radioOff);
        $[89] = theme;
        $[90] = t14;
      } else {
        t14 = $[90];
      }
      statusIcon_2 = t14;
      statusText_1 = "disabled";
    } else {
      if (item.status === "pending") {
        let t14;
        if ($[91] !== theme) {
          t14 = color("inactive", theme)(figures_default.radioOff);
          $[91] = theme;
          $[92] = t14;
        } else {
          t14 = $[92];
        }
        statusIcon_2 = t14;
        statusText_1 = "connecting\u2026";
      } else {
        if (item.status === "needs-auth") {
          let t14;
          if ($[93] !== theme) {
            t14 = color("warning", theme)(figures_default.triangleUpOutline);
            $[93] = theme;
            $[94] = t14;
          } else {
            t14 = $[94];
          }
          statusIcon_2 = t14;
          statusText_1 = "Enter to auth";
        } else {
          let t14;
          if ($[95] !== theme) {
            t14 = color("error", theme)(figures_default.cross);
            $[95] = theme;
            $[96] = t14;
          } else {
            t14 = $[96];
          }
          statusIcon_2 = t14;
          statusText_1 = "failed";
        }
      }
    }
  }
  if (item.indented) {
    const t14 = isSelected ? "suggestion" : void 0;
    const t22 = isSelected ? `${figures_default.pointer} ` : "  ";
    let t32;
    if ($[97] !== t14 || $[98] !== t22) {
      t32 = /* @__PURE__ */ createElement(ThemedText, { color: t14 }, t22);
      $[97] = t14;
      $[98] = t22;
      $[99] = t32;
    } else {
      t32 = $[99];
    }
    const t42 = !isSelected;
    let t52;
    if ($[100] !== t42) {
      t52 = /* @__PURE__ */ createElement(ThemedText, { dimColor: t42 }, "\u2514 ");
      $[100] = t42;
      $[101] = t52;
    } else {
      t52 = $[101];
    }
    const t62 = isSelected ? "suggestion" : void 0;
    let t72;
    if ($[102] !== item.name || $[103] !== t62) {
      t72 = /* @__PURE__ */ createElement(ThemedText, { color: t62 }, item.name);
      $[102] = item.name;
      $[103] = t62;
      $[104] = t72;
    } else {
      t72 = $[104];
    }
    const t82 = !isSelected;
    let t92;
    if ($[105] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t92 = /* @__PURE__ */ createElement(ThemedText, { backgroundColor: "userMessageBackground" }, "MCP");
      $[105] = t92;
    } else {
      t92 = $[105];
    }
    let t102;
    if ($[106] !== t82) {
      t102 = /* @__PURE__ */ createElement(ThemedText, { dimColor: t82 }, " ", t92);
      $[106] = t82;
      $[107] = t102;
    } else {
      t102 = $[107];
    }
    const t112 = !isSelected;
    let t122;
    if ($[108] !== statusIcon_2 || $[109] !== t112) {
      t122 = /* @__PURE__ */ createElement(ThemedText, { dimColor: t112 }, " \xB7 ", statusIcon_2, " ");
      $[108] = statusIcon_2;
      $[109] = t112;
      $[110] = t122;
    } else {
      t122 = $[110];
    }
    const t132 = !isSelected;
    let t142;
    if ($[111] !== statusText_1 || $[112] !== t132) {
      t142 = /* @__PURE__ */ createElement(ThemedText, { dimColor: t132 }, statusText_1);
      $[111] = statusText_1;
      $[112] = t132;
      $[113] = t142;
    } else {
      t142 = $[113];
    }
    let t15;
    if ($[114] !== t102 || $[115] !== t122 || $[116] !== t142 || $[117] !== t32 || $[118] !== t52 || $[119] !== t72) {
      t15 = /* @__PURE__ */ createElement(ThemedBox_default, null, t32, t52, t72, t102, t122, t142);
      $[114] = t102;
      $[115] = t122;
      $[116] = t142;
      $[117] = t32;
      $[118] = t52;
      $[119] = t72;
      $[120] = t15;
    } else {
      t15 = $[120];
    }
    return t15;
  }
  const t1 = isSelected ? "suggestion" : void 0;
  const t2 = isSelected ? `${figures_default.pointer} ` : "  ";
  let t3;
  if ($[121] !== t1 || $[122] !== t2) {
    t3 = /* @__PURE__ */ createElement(ThemedText, { color: t1 }, t2);
    $[121] = t1;
    $[122] = t2;
    $[123] = t3;
  } else {
    t3 = $[123];
  }
  const t4 = isSelected ? "suggestion" : void 0;
  let t5;
  if ($[124] !== item.name || $[125] !== t4) {
    t5 = /* @__PURE__ */ createElement(ThemedText, { color: t4 }, item.name);
    $[124] = item.name;
    $[125] = t4;
    $[126] = t5;
  } else {
    t5 = $[126];
  }
  const t6 = !isSelected;
  let t7;
  if ($[127] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ createElement(ThemedText, { backgroundColor: "userMessageBackground" }, "MCP");
    $[127] = t7;
  } else {
    t7 = $[127];
  }
  let t8;
  if ($[128] !== t6) {
    t8 = /* @__PURE__ */ createElement(ThemedText, { dimColor: t6 }, " ", t7);
    $[128] = t6;
    $[129] = t8;
  } else {
    t8 = $[129];
  }
  const t9 = !isSelected;
  let t10;
  if ($[130] !== statusIcon_2 || $[131] !== t9) {
    t10 = /* @__PURE__ */ createElement(ThemedText, { dimColor: t9 }, " \xB7 ", statusIcon_2, " ");
    $[130] = statusIcon_2;
    $[131] = t9;
    $[132] = t10;
  } else {
    t10 = $[132];
  }
  const t11 = !isSelected;
  let t12;
  if ($[133] !== statusText_1 || $[134] !== t11) {
    t12 = /* @__PURE__ */ createElement(ThemedText, { dimColor: t11 }, statusText_1);
    $[133] = statusText_1;
    $[134] = t11;
    $[135] = t12;
  } else {
    t12 = $[135];
  }
  let t13;
  if ($[136] !== t10 || $[137] !== t12 || $[138] !== t3 || $[139] !== t5 || $[140] !== t8) {
    t13 = /* @__PURE__ */ createElement(ThemedBox_default, null, t3, t5, t8, t10, t12);
    $[136] = t10;
    $[137] = t12;
    $[138] = t3;
    $[139] = t5;
    $[140] = t8;
    $[141] = t13;
  } else {
    t13 = $[141];
  }
  return t13;
}
var init_UnifiedInstalledCell = __esm({
  "src/commands/plugin/UnifiedInstalledCell.tsx"() {
    init_react_compiler_runtime();
    init_figures();
    init_react();
    init_ink();
    init_stringUtils();
  }
});

// src/commands/plugin/ManagePlugins.tsx
import * as fs from "fs/promises";
import * as path from "path";
async function getBaseFileNames(dirPath) {
  try {
    const entries = await fs.readdir(dirPath, {
      withFileTypes: true
    });
    return entries.filter((entry) => entry.isFile() && entry.name.endsWith(".md")).map((entry) => {
      const baseName = path.basename(entry.name, ".md");
      return baseName;
    });
  } catch (error) {
    const errorMsg = errorMessage(error);
    logForDebugging(`Failed to read plugin components from ${dirPath}: ${errorMsg}`, {
      level: "error"
    });
    logError(toError(error));
    return [];
  }
}
async function getSkillDirNames(dirPath) {
  try {
    const entries = await fs.readdir(dirPath, {
      withFileTypes: true
    });
    const skillNames = [];
    for (const entry of entries) {
      if (entry.isDirectory() || entry.isSymbolicLink()) {
        const skillFilePath = path.join(dirPath, entry.name, "SKILL.md");
        try {
          const st = await fs.stat(skillFilePath);
          if (st.isFile()) {
            skillNames.push(entry.name);
          }
        } catch {
        }
      }
    }
    return skillNames;
  } catch (error) {
    const errorMsg = errorMessage(error);
    logForDebugging(`Failed to read skill directories from ${dirPath}: ${errorMsg}`, {
      level: "error"
    });
    logError(toError(error));
    return [];
  }
}
function PluginComponentsDisplay({
  plugin,
  marketplace
}) {
  const [components, setComponents] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function loadComponents() {
      try {
        if (marketplace === "builtin") {
          const builtinDef = getBuiltinPluginDefinition(plugin.name);
          if (builtinDef) {
            const skillNames = builtinDef.skills?.map((s) => s.name) ?? [];
            const hookEvents = builtinDef.hooks ? Object.keys(builtinDef.hooks) : [];
            const mcpServerNames = builtinDef.mcpServers ? Object.keys(builtinDef.mcpServers) : [];
            setComponents({
              commands: null,
              agents: null,
              skills: skillNames.length > 0 ? skillNames : null,
              hooks: hookEvents.length > 0 ? hookEvents : null,
              mcpServers: mcpServerNames.length > 0 ? mcpServerNames : null
            });
          } else {
            setError(`Built-in plugin ${plugin.name} not found`);
          }
          setLoading(false);
          return;
        }
        const marketplaceData = await getMarketplace(marketplace);
        const pluginEntry = marketplaceData.plugins.find((p) => p.name === plugin.name);
        if (pluginEntry) {
          const commandPathList = [];
          if (plugin.commandsPath) {
            commandPathList.push(plugin.commandsPath);
          }
          if (plugin.commandsPaths) {
            commandPathList.push(...plugin.commandsPaths);
          }
          const commandList = [];
          for (const commandPath of commandPathList) {
            if (typeof commandPath === "string") {
              const baseNames = await getBaseFileNames(commandPath);
              commandList.push(...baseNames);
            }
          }
          const agentPathList = [];
          if (plugin.agentsPath) {
            agentPathList.push(plugin.agentsPath);
          }
          if (plugin.agentsPaths) {
            agentPathList.push(...plugin.agentsPaths);
          }
          const agentList = [];
          for (const agentPath of agentPathList) {
            if (typeof agentPath === "string") {
              const baseNames_0 = await getBaseFileNames(agentPath);
              agentList.push(...baseNames_0);
            }
          }
          const skillPathList = [];
          if (plugin.skillsPath) {
            skillPathList.push(plugin.skillsPath);
          }
          if (plugin.skillsPaths) {
            skillPathList.push(...plugin.skillsPaths);
          }
          const skillList = [];
          for (const skillPath of skillPathList) {
            if (typeof skillPath === "string") {
              const skillDirNames = await getSkillDirNames(skillPath);
              skillList.push(...skillDirNames);
            }
          }
          const hooksList = [];
          if (plugin.hooksConfig) {
            hooksList.push(Object.keys(plugin.hooksConfig));
          }
          if (pluginEntry.hooks) {
            hooksList.push(pluginEntry.hooks);
          }
          const mcpServersList = [];
          if (plugin.mcpServers) {
            mcpServersList.push(Object.keys(plugin.mcpServers));
          }
          if (pluginEntry.mcpServers) {
            mcpServersList.push(pluginEntry.mcpServers);
          }
          setComponents({
            commands: commandList.length > 0 ? commandList : null,
            agents: agentList.length > 0 ? agentList : null,
            skills: skillList.length > 0 ? skillList : null,
            hooks: hooksList.length > 0 ? hooksList : null,
            mcpServers: mcpServersList.length > 0 ? mcpServersList : null
          });
        } else {
          setError(`Plugin ${plugin.name} not found in marketplace`);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load components");
      } finally {
        setLoading(false);
      }
    }
    void loadComponents();
  }, [plugin.name, plugin.commandsPath, plugin.commandsPaths, plugin.agentsPath, plugin.agentsPaths, plugin.skillsPath, plugin.skillsPaths, plugin.hooksConfig, plugin.mcpServers, marketplace]);
  if (loading) {
    return null;
  }
  if (error) {
    return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Components:"), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Error: ", error));
  }
  if (!components) {
    return null;
  }
  const hasComponents = components.commands || components.agents || components.skills || components.hooks || components.mcpServers;
  if (!hasComponents) {
    return null;
  }
  return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Installed components:"), components.commands ? /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "\u2022 Commands:", " ", typeof components.commands === "string" ? components.commands : Array.isArray(components.commands) ? components.commands.join(", ") : Object.keys(components.commands).join(", ")) : null, components.agents ? /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "\u2022 Agents:", " ", typeof components.agents === "string" ? components.agents : Array.isArray(components.agents) ? components.agents.join(", ") : Object.keys(components.agents).join(", ")) : null, components.skills ? /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "\u2022 Skills:", " ", typeof components.skills === "string" ? components.skills : Array.isArray(components.skills) ? components.skills.join(", ") : Object.keys(components.skills).join(", ")) : null, components.hooks ? /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "\u2022 Hooks:", " ", typeof components.hooks === "string" ? components.hooks : Array.isArray(components.hooks) ? components.hooks.map(String).join(", ") : typeof components.hooks === "object" && components.hooks !== null ? Object.keys(components.hooks).join(", ") : String(components.hooks)) : null, components.mcpServers ? /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "\u2022 MCP Servers:", " ", typeof components.mcpServers === "string" ? components.mcpServers : Array.isArray(components.mcpServers) ? components.mcpServers.map(String).join(", ") : typeof components.mcpServers === "object" && components.mcpServers !== null ? Object.keys(components.mcpServers).join(", ") : String(components.mcpServers)) : null);
}
async function checkIfLocalPlugin(pluginName, marketplaceName) {
  const marketplace = await getMarketplace(marketplaceName);
  const entry = marketplace?.plugins.find((p) => p.name === pluginName);
  if (entry && typeof entry.source === "string") {
    return `Local plugins cannot be updated remotely. To update, modify the source at: ${entry.source}`;
  }
  return null;
}
function filterManagedDisabledPlugins(plugins) {
  return plugins.filter((plugin) => {
    const marketplace = plugin.source.split("@")[1] || "local";
    return !isPluginBlockedByPolicy(`${plugin.name}@${marketplace}`);
  });
}
function ManagePlugins({
  setViewState: setParentViewState,
  setResult,
  onManageComplete,
  onSearchModeChange,
  targetPlugin,
  targetMarketplace,
  action
}) {
  const mcpClients = useAppState((s) => s.mcp.clients);
  const mcpTools = useAppState((s_0) => s_0.mcp.tools);
  const pluginErrors = useAppState((s_1) => s_1.plugins.errors);
  const flaggedPlugins = getFlaggedPlugins();
  const [isSearchMode, setIsSearchModeRaw] = useState(false);
  const setIsSearchMode = useCallback((active) => {
    setIsSearchModeRaw(active);
    onSearchModeChange?.(active);
  }, [onSearchModeChange]);
  const isTerminalFocused = useTerminalFocus();
  const {
    columns: terminalWidth
  } = useTerminalSize();
  const [viewState, setViewState] = useState("plugin-list");
  const {
    query: searchQuery,
    setQuery: setSearchQuery,
    cursorOffset: searchCursorOffset
  } = useSearchInput({
    isActive: viewState === "plugin-list" && isSearchMode,
    onExit: () => {
      setIsSearchMode(false);
    }
  });
  const [selectedPlugin, setSelectedPlugin] = useState(null);
  const [marketplaces, setMarketplaces] = useState([]);
  const [pluginStates, setPluginStates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pendingToggles, setPendingToggles] = useState(/* @__PURE__ */ new Map());
  const hasAutoNavigated = useRef(false);
  const pendingAutoActionRef = useRef(void 0);
  const toggleMcpServer = useMcpToggleEnabled();
  const handleBack = useCallback(() => {
    if (viewState === "plugin-details") {
      setViewState("plugin-list");
      setSelectedPlugin(null);
      setProcessError(null);
    } else if (typeof viewState === "object" && viewState.type === "failed-plugin-details") {
      setViewState("plugin-list");
      setProcessError(null);
    } else if (viewState === "configuring") {
      setViewState("plugin-details");
      setConfigNeeded(null);
    } else if (typeof viewState === "object" && (viewState.type === "plugin-options" || viewState.type === "configuring-options")) {
      setViewState("plugin-list");
      setSelectedPlugin(null);
      setResult("Plugin enabled. Configuration skipped \u2014 run /reload-plugins to apply.");
      if (onManageComplete) {
        void onManageComplete();
      }
    } else if (typeof viewState === "object" && viewState.type === "flagged-detail") {
      setViewState("plugin-list");
      setProcessError(null);
    } else if (typeof viewState === "object" && viewState.type === "mcp-detail") {
      setViewState("plugin-list");
      setProcessError(null);
    } else if (typeof viewState === "object" && viewState.type === "mcp-tools") {
      setViewState({
        type: "mcp-detail",
        client: viewState.client
      });
    } else if (typeof viewState === "object" && viewState.type === "mcp-tool-detail") {
      setViewState({
        type: "mcp-tools",
        client: viewState.client
      });
    } else {
      if (pendingToggles.size > 0) {
        setResult("Run /reload-plugins to apply plugin changes.");
        return;
      }
      setParentViewState({
        type: "menu"
      });
    }
  }, [viewState, setParentViewState, pendingToggles, setResult]);
  useKeybinding("confirm:no", handleBack, {
    context: "Confirmation",
    isActive: (viewState !== "plugin-list" || !isSearchMode) && viewState !== "confirm-project-uninstall" && !(typeof viewState === "object" && viewState.type === "confirm-data-cleanup")
  });
  const getMcpStatus = (client) => {
    if (client.type === "connected") return "connected";
    if (client.type === "disabled") return "disabled";
    if (client.type === "pending") return "pending";
    if (client.type === "needs-auth") return "needs-auth";
    return "failed";
  };
  const unifiedItems = useMemo(() => {
    const mergedSettings = getSettings_DEPRECATED();
    const pluginMcpMap = /* @__PURE__ */ new Map();
    for (const client_0 of mcpClients) {
      if (client_0.name.startsWith("plugin:")) {
        const parts = client_0.name.split(":");
        if (parts.length >= 3) {
          const pluginName = parts[1];
          const serverName = parts.slice(2).join(":");
          const existing = pluginMcpMap.get(pluginName) || [];
          existing.push({
            displayName: serverName,
            client: client_0
          });
          pluginMcpMap.set(pluginName, existing);
        }
      }
    }
    const pluginsWithChildren = [];
    for (const state of pluginStates) {
      const pluginId = `${state.plugin.name}@${state.marketplace}`;
      const isEnabled = mergedSettings?.enabledPlugins?.[pluginId] !== false;
      const errors = pluginErrors.filter((e) => "plugin" in e && e.plugin === state.plugin.name || e.source === pluginId || e.source.startsWith(`${state.plugin.name}@`));
      const originalScope = state.plugin.isBuiltin ? "builtin" : state.scope || "user";
      pluginsWithChildren.push({
        item: {
          type: "plugin",
          id: pluginId,
          name: state.plugin.name,
          description: state.plugin.manifest.description,
          marketplace: state.marketplace,
          scope: originalScope,
          isEnabled,
          errorCount: errors.length,
          errors,
          plugin: state.plugin,
          pendingEnable: state.pendingEnable,
          pendingUpdate: state.pendingUpdate,
          pendingToggle: pendingToggles.get(pluginId)
        },
        originalScope,
        childMcps: pluginMcpMap.get(state.plugin.name) || []
      });
    }
    const matchedPluginIds = new Set(pluginsWithChildren.map(({
      item
    }) => item.id));
    const matchedPluginNames = new Set(pluginsWithChildren.map(({
      item: item_0
    }) => item_0.name));
    const orphanErrorsBySource = /* @__PURE__ */ new Map();
    for (const error of pluginErrors) {
      if (matchedPluginIds.has(error.source) || "plugin" in error && typeof error.plugin === "string" && matchedPluginNames.has(error.plugin)) {
        continue;
      }
      const existing_0 = orphanErrorsBySource.get(error.source) || [];
      existing_0.push(error);
      orphanErrorsBySource.set(error.source, existing_0);
    }
    const pluginScopes = getPluginEditableScopes();
    const failedPluginItems = [];
    for (const [pluginId_0, errors_0] of orphanErrorsBySource) {
      if (pluginId_0 in flaggedPlugins) continue;
      const parsed = parsePluginIdentifier(pluginId_0);
      const pluginName_0 = parsed.name || pluginId_0;
      const marketplace = parsed.marketplace || "unknown";
      const rawScope = pluginScopes.get(pluginId_0);
      const scope = rawScope === "flag" || rawScope === void 0 ? "user" : rawScope;
      failedPluginItems.push({
        type: "failed-plugin",
        id: pluginId_0,
        name: pluginName_0,
        marketplace,
        scope,
        errorCount: errors_0.length,
        errors: errors_0
      });
    }
    const standaloneMcps = [];
    for (const client_1 of mcpClients) {
      if (client_1.name === "ide") continue;
      if (client_1.name.startsWith("plugin:")) continue;
      standaloneMcps.push({
        type: "mcp",
        id: `mcp:${client_1.name}`,
        name: client_1.name,
        description: void 0,
        scope: client_1.config.scope,
        status: getMcpStatus(client_1),
        client: client_1
      });
    }
    const scopeOrder = {
      flagged: -1,
      project: 0,
      local: 1,
      user: 2,
      enterprise: 3,
      managed: 4,
      dynamic: 5,
      builtin: 6
    };
    const unified = [];
    const itemsByScope = /* @__PURE__ */ new Map();
    for (const {
      item: item_1,
      originalScope: originalScope_0,
      childMcps
    } of pluginsWithChildren) {
      const scope_0 = item_1.scope;
      if (!itemsByScope.has(scope_0)) {
        itemsByScope.set(scope_0, []);
      }
      itemsByScope.get(scope_0).push(item_1);
      for (const {
        displayName,
        client: client_2
      } of childMcps) {
        const displayScope = originalScope_0 === "builtin" ? "user" : originalScope_0;
        if (!itemsByScope.has(displayScope)) {
          itemsByScope.set(displayScope, []);
        }
        itemsByScope.get(displayScope).push({
          type: "mcp",
          id: `mcp:${client_2.name}`,
          name: displayName,
          description: void 0,
          scope: displayScope,
          status: getMcpStatus(client_2),
          client: client_2,
          indented: true
        });
      }
    }
    for (const mcp of standaloneMcps) {
      const scope_1 = mcp.scope;
      if (!itemsByScope.has(scope_1)) {
        itemsByScope.set(scope_1, []);
      }
      itemsByScope.get(scope_1).push(mcp);
    }
    for (const failedPlugin of failedPluginItems) {
      const scope_2 = failedPlugin.scope;
      if (!itemsByScope.has(scope_2)) {
        itemsByScope.set(scope_2, []);
      }
      itemsByScope.get(scope_2).push(failedPlugin);
    }
    for (const [pluginId_1, entry] of Object.entries(flaggedPlugins)) {
      const parsed_0 = parsePluginIdentifier(pluginId_1);
      const pluginName_1 = parsed_0.name || pluginId_1;
      const marketplace_0 = parsed_0.marketplace || "unknown";
      if (!itemsByScope.has("flagged")) {
        itemsByScope.set("flagged", []);
      }
      itemsByScope.get("flagged").push({
        type: "flagged-plugin",
        id: pluginId_1,
        name: pluginName_1,
        marketplace: marketplace_0,
        scope: "flagged",
        reason: "delisted",
        text: "Removed from marketplace",
        flaggedAt: entry.flaggedAt
      });
    }
    const sortedScopes = [...itemsByScope.keys()].sort((a, b) => (scopeOrder[a] ?? 99) - (scopeOrder[b] ?? 99));
    for (const scope_3 of sortedScopes) {
      const items = itemsByScope.get(scope_3);
      const pluginGroups = [];
      const standaloneMcpsInScope = [];
      let i = 0;
      while (i < items.length) {
        const item_2 = items[i];
        if (item_2.type === "plugin" || item_2.type === "failed-plugin" || item_2.type === "flagged-plugin") {
          const group = [item_2];
          i++;
          let nextItem = items[i];
          while (nextItem?.type === "mcp" && nextItem.indented) {
            group.push(nextItem);
            i++;
            nextItem = items[i];
          }
          pluginGroups.push(group);
        } else if (item_2.type === "mcp" && !item_2.indented) {
          standaloneMcpsInScope.push(item_2);
          i++;
        } else {
          i++;
        }
      }
      pluginGroups.sort((a_0, b_0) => a_0[0].name.localeCompare(b_0[0].name));
      standaloneMcpsInScope.sort((a_1, b_1) => a_1.name.localeCompare(b_1.name));
      for (const group_0 of pluginGroups) {
        unified.push(...group_0);
      }
      unified.push(...standaloneMcpsInScope);
    }
    return unified;
  }, [pluginStates, mcpClients, pluginErrors, pendingToggles, flaggedPlugins]);
  const flaggedIds = useMemo(() => unifiedItems.filter((item_3) => item_3.type === "flagged-plugin").map((item_4) => item_4.id), [unifiedItems]);
  useEffect(() => {
    if (flaggedIds.length > 0) {
      void markFlaggedPluginsSeen(flaggedIds);
    }
  }, [flaggedIds]);
  const filteredItems = useMemo(() => {
    if (!searchQuery) return unifiedItems;
    const lowerQuery = searchQuery.toLowerCase();
    return unifiedItems.filter((item_5) => item_5.name.toLowerCase().includes(lowerQuery) || "description" in item_5 && item_5.description?.toLowerCase().includes(lowerQuery));
  }, [unifiedItems, searchQuery]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const pagination = usePagination({
    totalItems: filteredItems.length,
    selectedIndex,
    maxVisible: 8
  });
  const [detailsMenuIndex, setDetailsMenuIndex] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processError, setProcessError] = useState(null);
  const [configNeeded, setConfigNeeded] = useState(null);
  const [_isLoadingConfig, setIsLoadingConfig] = useState(false);
  const [selectedPluginHasMcpb, setSelectedPluginHasMcpb] = useState(false);
  useEffect(() => {
    if (!selectedPlugin) {
      setSelectedPluginHasMcpb(false);
      return;
    }
    async function detectMcpb() {
      const mcpServersSpec = selectedPlugin.plugin.manifest.mcpServers;
      let hasMcpb = false;
      if (mcpServersSpec) {
        hasMcpb = typeof mcpServersSpec === "string" && isMcpbSource(mcpServersSpec) || Array.isArray(mcpServersSpec) && mcpServersSpec.some((s_2) => typeof s_2 === "string" && isMcpbSource(s_2));
      }
      if (!hasMcpb) {
        try {
          const marketplaceDir = path.join(selectedPlugin.plugin.path, "..");
          const marketplaceJsonPath = path.join(marketplaceDir, ".claude-plugin", "marketplace.json");
          const content = await fs.readFile(marketplaceJsonPath, "utf-8");
          const marketplace_1 = jsonParse(content);
          const entry_0 = marketplace_1.plugins?.find((p) => p.name === selectedPlugin.plugin.name);
          if (entry_0?.mcpServers) {
            const spec = entry_0.mcpServers;
            hasMcpb = typeof spec === "string" && isMcpbSource(spec) || Array.isArray(spec) && spec.some((s_3) => typeof s_3 === "string" && isMcpbSource(s_3));
          }
        } catch (err) {
          logForDebugging(`Failed to read raw marketplace.json: ${err}`);
        }
      }
      setSelectedPluginHasMcpb(hasMcpb);
    }
    void detectMcpb();
  }, [selectedPlugin]);
  useEffect(() => {
    async function loadInstalledPlugins() {
      setLoading(true);
      try {
        const {
          enabled,
          disabled
        } = await loadAllPlugins();
        const mergedSettings = getSettings_DEPRECATED();
        const allPlugins = filterManagedDisabledPlugins([...enabled, ...disabled]);
        const pluginsByMarketplace = {};
        for (const plugin of allPlugins) {
          const marketplace = plugin.source.split("@")[1] || "local";
          if (!pluginsByMarketplace[marketplace]) {
            pluginsByMarketplace[marketplace] = [];
          }
          pluginsByMarketplace[marketplace].push(plugin);
        }
        const marketplaceInfos = [];
        for (const [name, plugins] of Object.entries(pluginsByMarketplace)) {
          const enabledCount = count(plugins, (p) => {
            const pluginId = `${p.name}@${name}`;
            return mergedSettings?.enabledPlugins?.[pluginId] !== false;
          });
          const disabledCount = plugins.length - enabledCount;
          marketplaceInfos.push({
            name,
            installedPlugins: plugins,
            enabledCount,
            disabledCount
          });
        }
        marketplaceInfos.sort((a, b) => {
          if (a.name === "claude-plugin-directory") return -1;
          if (b.name === "claude-plugin-directory") return 1;
          return a.name.localeCompare(b.name);
        });
        setMarketplaces(marketplaceInfos);
        const allStates = [];
        for (const marketplace of marketplaceInfos) {
          for (const plugin of marketplace.installedPlugins) {
            const pluginId = `${plugin.name}@${marketplace.name}`;
            const scope = plugin.isBuiltin ? "builtin" : getPluginInstallationFromV2(pluginId).scope;
            allStates.push({
              plugin,
              marketplace: marketplace.name,
              scope,
              pendingEnable: void 0,
              pendingUpdate: false
            });
          }
        }
        setPluginStates(allStates);
        setSelectedIndex(0);
      } finally {
        setLoading(false);
      }
    }
    void loadInstalledPlugins();
  }, []);
  useEffect(() => {
    if (hasAutoNavigated.current) return;
    if (targetPlugin && marketplaces.length > 0 && !loading) {
      const {
        name: targetName,
        marketplace: targetMktFromId
      } = parsePluginIdentifier(targetPlugin);
      const effectiveTargetMarketplace = targetMarketplace ?? targetMktFromId;
      const marketplacesToSearch = effectiveTargetMarketplace ? marketplaces.filter((m) => m.name === effectiveTargetMarketplace) : marketplaces;
      for (const marketplace_2 of marketplacesToSearch) {
        const plugin = marketplace_2.installedPlugins.find((p_0) => p_0.name === targetName);
        if (plugin) {
          const pluginId_2 = `${plugin.name}@${marketplace_2.name}`;
          const {
            scope: scope_4
          } = getPluginInstallationFromV2(pluginId_2);
          const pluginState = {
            plugin,
            marketplace: marketplace_2.name,
            scope: scope_4,
            pendingEnable: void 0,
            pendingUpdate: false
          };
          setSelectedPlugin(pluginState);
          setViewState("plugin-details");
          pendingAutoActionRef.current = action;
          hasAutoNavigated.current = true;
          return;
        }
      }
      const failedItem = unifiedItems.find((item_6) => item_6.type === "failed-plugin" && item_6.name === targetName);
      if (failedItem && failedItem.type === "failed-plugin") {
        setViewState({
          type: "failed-plugin-details",
          plugin: {
            id: failedItem.id,
            name: failedItem.name,
            marketplace: failedItem.marketplace,
            errors: failedItem.errors,
            scope: failedItem.scope
          }
        });
        hasAutoNavigated.current = true;
      }
      if (!hasAutoNavigated.current && action) {
        hasAutoNavigated.current = true;
        setResult(`Plugin "${targetPlugin}" is not installed in this project`);
      }
    }
  }, [targetPlugin, targetMarketplace, marketplaces, loading, unifiedItems, action, setResult]);
  const handleSingleOperation = async (operation) => {
    if (!selectedPlugin) return;
    const pluginScope = selectedPlugin.scope || "user";
    const isBuiltin = pluginScope === "builtin";
    if (isBuiltin && (operation === "update" || operation === "uninstall")) {
      setProcessError("Built-in plugins cannot be updated or uninstalled.");
      return;
    }
    if (!isBuiltin && !isInstallableScope(pluginScope) && operation !== "update") {
      setProcessError("This plugin is managed by your organization. Contact your admin to disable it.");
      return;
    }
    setIsProcessing(true);
    setProcessError(null);
    try {
      const pluginId_3 = `${selectedPlugin.plugin.name}@${selectedPlugin.marketplace}`;
      let reverseDependents;
      switch (operation) {
        case "enable": {
          const enableResult = await enablePluginOp(pluginId_3);
          if (!enableResult.success) {
            throw new Error(enableResult.message);
          }
          break;
        }
        case "disable": {
          const disableResult = await disablePluginOp(pluginId_3);
          if (!disableResult.success) {
            throw new Error(disableResult.message);
          }
          reverseDependents = disableResult.reverseDependents;
          break;
        }
        case "uninstall": {
          if (isBuiltin) break;
          if (!isInstallableScope(pluginScope)) break;
          if (isPluginEnabledAtProjectScope(pluginId_3)) {
            setIsProcessing(false);
            setViewState("confirm-project-uninstall");
            return;
          }
          const installs = loadInstalledPluginsV2().plugins[pluginId_3];
          const isLastScope = !installs || installs.length <= 1;
          const dataSize = isLastScope ? await getPluginDataDirSize(pluginId_3) : null;
          if (dataSize) {
            setIsProcessing(false);
            setViewState({
              type: "confirm-data-cleanup",
              size: dataSize
            });
            return;
          }
          const result_0 = await uninstallPluginOp(pluginId_3, pluginScope);
          if (!result_0.success) {
            throw new Error(result_0.message);
          }
          reverseDependents = result_0.reverseDependents;
          break;
        }
        case "update": {
          if (isBuiltin) break;
          const result = await updatePluginOp(pluginId_3, pluginScope);
          if (!result.success) {
            throw new Error(result.message);
          }
          if (result.alreadyUpToDate) {
            setResult(`${selectedPlugin.plugin.name} is already at the latest version (${result.newVersion}).`);
            if (onManageComplete) {
              await onManageComplete();
            }
            setParentViewState({
              type: "menu"
            });
            return;
          }
          break;
        }
      }
      clearAllCaches();
      const pluginIdNow = `${selectedPlugin.plugin.name}@${selectedPlugin.marketplace}`;
      const settingsAfter = getSettings_DEPRECATED();
      const enabledAfter = settingsAfter?.enabledPlugins?.[pluginIdNow] !== false;
      if (enabledAfter) {
        setIsProcessing(false);
        setViewState({
          type: "plugin-options"
        });
        return;
      }
      const operationName = operation === "enable" ? "Enabled" : operation === "disable" ? "Disabled" : operation === "update" ? "Updated" : "Uninstalled";
      const depWarn = reverseDependents && reverseDependents.length > 0 ? ` \xB7 required by ${reverseDependents.join(", ")}` : "";
      const message = `\u2713 ${operationName} ${selectedPlugin.plugin.name}${depWarn}. Run /reload-plugins to apply.`;
      setResult(message);
      if (onManageComplete) {
        await onManageComplete();
      }
      setParentViewState({
        type: "menu"
      });
    } catch (error_0) {
      setIsProcessing(false);
      const errorMessage2 = error_0 instanceof Error ? error_0.message : String(error_0);
      setProcessError(`Failed to ${operation}: ${errorMessage2}`);
      logError(toError(error_0));
    }
  };
  const handleSingleOperationRef = useRef(handleSingleOperation);
  handleSingleOperationRef.current = handleSingleOperation;
  useEffect(() => {
    if (viewState === "plugin-details" && selectedPlugin && pendingAutoActionRef.current) {
      const pending = pendingAutoActionRef.current;
      pendingAutoActionRef.current = void 0;
      void handleSingleOperationRef.current(pending);
    }
  }, [viewState, selectedPlugin]);
  const handleToggle = useCallback(() => {
    if (selectedIndex >= filteredItems.length) return;
    const item_7 = filteredItems[selectedIndex];
    if (item_7?.type === "flagged-plugin") return;
    if (item_7?.type === "plugin") {
      const pluginId_4 = `${item_7.plugin.name}@${item_7.marketplace}`;
      const mergedSettings_0 = getSettings_DEPRECATED();
      const currentPending = pendingToggles.get(pluginId_4);
      const isEnabled_0 = mergedSettings_0?.enabledPlugins?.[pluginId_4] !== false;
      const pluginScope_0 = item_7.scope;
      const isBuiltin_0 = pluginScope_0 === "builtin";
      if (isBuiltin_0 || isInstallableScope(pluginScope_0)) {
        const newPending = new Map(pendingToggles);
        if (currentPending) {
          newPending.delete(pluginId_4);
          void (async () => {
            try {
              if (currentPending === "will-disable") {
                await enablePluginOp(pluginId_4);
              } else {
                await disablePluginOp(pluginId_4);
              }
              clearAllCaches();
            } catch (err_0) {
              logError(err_0);
            }
          })();
        } else {
          newPending.set(pluginId_4, isEnabled_0 ? "will-disable" : "will-enable");
          void (async () => {
            try {
              if (isEnabled_0) {
                await disablePluginOp(pluginId_4);
              } else {
                await enablePluginOp(pluginId_4);
              }
              clearAllCaches();
            } catch (err_1) {
              logError(err_1);
            }
          })();
        }
        setPendingToggles(newPending);
      }
    } else if (item_7?.type === "mcp") {
      void toggleMcpServer(item_7.client.name);
    }
  }, [selectedIndex, filteredItems, pendingToggles, pluginStates, toggleMcpServer]);
  const handleAccept = useCallback(() => {
    if (selectedIndex >= filteredItems.length) return;
    const item_8 = filteredItems[selectedIndex];
    if (item_8?.type === "plugin") {
      const state_0 = pluginStates.find((s_4) => s_4.plugin.name === item_8.plugin.name && s_4.marketplace === item_8.marketplace);
      if (state_0) {
        setSelectedPlugin(state_0);
        setViewState("plugin-details");
        setDetailsMenuIndex(0);
        setProcessError(null);
      }
    } else if (item_8?.type === "flagged-plugin") {
      setViewState({
        type: "flagged-detail",
        plugin: {
          id: item_8.id,
          name: item_8.name,
          marketplace: item_8.marketplace,
          reason: item_8.reason,
          text: item_8.text,
          flaggedAt: item_8.flaggedAt
        }
      });
      setProcessError(null);
    } else if (item_8?.type === "failed-plugin") {
      setViewState({
        type: "failed-plugin-details",
        plugin: {
          id: item_8.id,
          name: item_8.name,
          marketplace: item_8.marketplace,
          errors: item_8.errors,
          scope: item_8.scope
        }
      });
      setDetailsMenuIndex(0);
      setProcessError(null);
    } else if (item_8?.type === "mcp") {
      setViewState({
        type: "mcp-detail",
        client: item_8.client
      });
      setProcessError(null);
    }
  }, [selectedIndex, filteredItems, pluginStates]);
  useKeybindings({
    "select:previous": () => {
      if (selectedIndex === 0) {
        setIsSearchMode(true);
      } else {
        pagination.handleSelectionChange(selectedIndex - 1, setSelectedIndex);
      }
    },
    "select:next": () => {
      if (selectedIndex < filteredItems.length - 1) {
        pagination.handleSelectionChange(selectedIndex + 1, setSelectedIndex);
      }
    },
    "select:accept": handleAccept
  }, {
    context: "Select",
    isActive: viewState === "plugin-list" && !isSearchMode
  });
  useKeybindings({
    "plugin:toggle": handleToggle
  }, {
    context: "Plugin",
    isActive: viewState === "plugin-list" && !isSearchMode
  });
  const handleFlaggedDismiss = useCallback(() => {
    if (typeof viewState !== "object" || viewState.type !== "flagged-detail") return;
    void removeFlaggedPlugin(viewState.plugin.id);
    setViewState("plugin-list");
  }, [viewState]);
  useKeybindings({
    "select:accept": handleFlaggedDismiss
  }, {
    context: "Select",
    isActive: typeof viewState === "object" && viewState.type === "flagged-detail"
  });
  const detailsMenuItems = useMemo(() => {
    if (viewState !== "plugin-details" || !selectedPlugin) return [];
    const mergedSettings_1 = getSettings_DEPRECATED();
    const pluginId_5 = `${selectedPlugin.plugin.name}@${selectedPlugin.marketplace}`;
    const isEnabled_1 = mergedSettings_1?.enabledPlugins?.[pluginId_5] !== false;
    const isBuiltin_1 = selectedPlugin.marketplace === "builtin";
    const menuItems = [];
    menuItems.push({
      label: isEnabled_1 ? "Disable plugin" : "Enable plugin",
      action: () => void handleSingleOperation(isEnabled_1 ? "disable" : "enable")
    });
    if (!isBuiltin_1) {
      menuItems.push({
        label: selectedPlugin.pendingUpdate ? "Unmark for update" : "Mark for update",
        action: async () => {
          try {
            const localError = await checkIfLocalPlugin(selectedPlugin.plugin.name, selectedPlugin.marketplace);
            if (localError) {
              setProcessError(localError);
              return;
            }
            const newStates = [...pluginStates];
            const index = newStates.findIndex((s_5) => s_5.plugin.name === selectedPlugin.plugin.name && s_5.marketplace === selectedPlugin.marketplace);
            if (index !== -1) {
              newStates[index].pendingUpdate = !selectedPlugin.pendingUpdate;
              setPluginStates(newStates);
              setSelectedPlugin({
                ...selectedPlugin,
                pendingUpdate: !selectedPlugin.pendingUpdate
              });
            }
          } catch (error_1) {
            setProcessError(error_1 instanceof Error ? error_1.message : "Failed to check plugin update availability");
          }
        }
      });
      if (selectedPluginHasMcpb) {
        menuItems.push({
          label: "Configure",
          action: async () => {
            setIsLoadingConfig(true);
            try {
              const mcpServersSpec_0 = selectedPlugin.plugin.manifest.mcpServers;
              let mcpbPath = null;
              if (typeof mcpServersSpec_0 === "string" && isMcpbSource(mcpServersSpec_0)) {
                mcpbPath = mcpServersSpec_0;
              } else if (Array.isArray(mcpServersSpec_0)) {
                for (const spec_0 of mcpServersSpec_0) {
                  if (typeof spec_0 === "string" && isMcpbSource(spec_0)) {
                    mcpbPath = spec_0;
                    break;
                  }
                }
              }
              if (!mcpbPath) {
                setProcessError("No MCPB file found in plugin");
                setIsLoadingConfig(false);
                return;
              }
              const pluginId_6 = `${selectedPlugin.plugin.name}@${selectedPlugin.marketplace}`;
              const result_1 = await loadMcpbFile(mcpbPath, selectedPlugin.plugin.path, pluginId_6, void 0, void 0, true);
              if ("status" in result_1 && result_1.status === "needs-config") {
                setConfigNeeded(result_1);
                setViewState("configuring");
              } else {
                setProcessError("Failed to load MCPB for configuration");
              }
            } catch (err_2) {
              const errorMsg = errorMessage(err_2);
              setProcessError(`Failed to load configuration: ${errorMsg}`);
            } finally {
              setIsLoadingConfig(false);
            }
          }
        });
      }
      if (selectedPlugin.plugin.manifest.userConfig && Object.keys(selectedPlugin.plugin.manifest.userConfig).length > 0) {
        menuItems.push({
          label: "Configure options",
          action: () => {
            setViewState({
              type: "configuring-options",
              schema: selectedPlugin.plugin.manifest.userConfig
            });
          }
        });
      }
      menuItems.push({
        label: "Update now",
        action: () => void handleSingleOperation("update")
      });
      menuItems.push({
        label: "Uninstall",
        action: () => void handleSingleOperation("uninstall")
      });
    }
    if (selectedPlugin.plugin.manifest.homepage) {
      menuItems.push({
        label: "Open homepage",
        action: () => void openBrowser(selectedPlugin.plugin.manifest.homepage)
      });
    }
    if (selectedPlugin.plugin.manifest.repository) {
      menuItems.push({
        // Generic label — manifest.repository can be GitLab, Bitbucket,
        // Azure DevOps, etc. (gh-31598). pluginDetailsHelpers.tsx:74 keeps
        // 'View on GitHub' because that path has an explicit isGitHub check.
        label: "View repository",
        action: () => void openBrowser(selectedPlugin.plugin.manifest.repository)
      });
    }
    menuItems.push({
      label: "Back to plugin list",
      action: () => {
        setViewState("plugin-list");
        setSelectedPlugin(null);
        setProcessError(null);
      }
    });
    return menuItems;
  }, [viewState, selectedPlugin, selectedPluginHasMcpb, pluginStates]);
  useKeybindings({
    "select:previous": () => {
      if (detailsMenuIndex > 0) {
        setDetailsMenuIndex(detailsMenuIndex - 1);
      }
    },
    "select:next": () => {
      if (detailsMenuIndex < detailsMenuItems.length - 1) {
        setDetailsMenuIndex(detailsMenuIndex + 1);
      }
    },
    "select:accept": () => {
      if (detailsMenuItems[detailsMenuIndex]) {
        detailsMenuItems[detailsMenuIndex].action();
      }
    }
  }, {
    context: "Select",
    isActive: viewState === "plugin-details" && !!selectedPlugin
  });
  useKeybindings({
    "select:accept": () => {
      if (typeof viewState === "object" && viewState.type === "failed-plugin-details") {
        void (async () => {
          setIsProcessing(true);
          setProcessError(null);
          const pluginId_7 = viewState.plugin.id;
          const pluginScope_1 = viewState.plugin.scope;
          const result_2 = isInstallableScope(pluginScope_1) ? await uninstallPluginOp(pluginId_7, pluginScope_1, false) : await uninstallPluginOp(pluginId_7, "user", false);
          let success = result_2.success;
          if (!success) {
            const editableSources = ["userSettings", "projectSettings", "localSettings"];
            for (const source of editableSources) {
              const settings = getSettingsForSource(source);
              if (settings?.enabledPlugins?.[pluginId_7] !== void 0) {
                updateSettingsForSource(source, {
                  enabledPlugins: {
                    ...settings.enabledPlugins,
                    [pluginId_7]: void 0
                  }
                });
                success = true;
              }
            }
            clearAllCaches();
          }
          if (success) {
            if (onManageComplete) {
              await onManageComplete();
            }
            setIsProcessing(false);
            setViewState("plugin-list");
          } else {
            setIsProcessing(false);
            setProcessError(result_2.message);
          }
        })();
      }
    }
  }, {
    context: "Select",
    isActive: typeof viewState === "object" && viewState.type === "failed-plugin-details" && viewState.plugin.scope !== "managed"
  });
  useKeybindings({
    "confirm:yes": () => {
      if (!selectedPlugin) return;
      setIsProcessing(true);
      setProcessError(null);
      const pluginId_8 = `${selectedPlugin.plugin.name}@${selectedPlugin.marketplace}`;
      const {
        error: error_2
      } = updateSettingsForSource("localSettings", {
        enabledPlugins: {
          ...getSettingsForSource("localSettings")?.enabledPlugins,
          [pluginId_8]: false
        }
      });
      if (error_2) {
        setIsProcessing(false);
        setProcessError(`Failed to write settings: ${error_2.message}`);
        return;
      }
      clearAllCaches();
      setResult(`\u2713 Disabled ${selectedPlugin.plugin.name} in .claude/settings.local.json. Run /reload-plugins to apply.`);
      if (onManageComplete) void onManageComplete();
      setParentViewState({
        type: "menu"
      });
    },
    "confirm:no": () => {
      setViewState("plugin-details");
      setProcessError(null);
    }
  }, {
    context: "Confirmation",
    isActive: viewState === "confirm-project-uninstall" && !!selectedPlugin && !isProcessing
  });
  use_input_default((input, key) => {
    if (!selectedPlugin) return;
    const pluginId_9 = `${selectedPlugin.plugin.name}@${selectedPlugin.marketplace}`;
    const pluginScope_2 = selectedPlugin.scope;
    if (!pluginScope_2 || pluginScope_2 === "builtin" || !isInstallableScope(pluginScope_2)) return;
    const doUninstall = async (deleteDataDir) => {
      setIsProcessing(true);
      setProcessError(null);
      try {
        const result_3 = await uninstallPluginOp(pluginId_9, pluginScope_2, deleteDataDir);
        if (!result_3.success) throw new Error(result_3.message);
        clearAllCaches();
        const suffix = deleteDataDir ? "" : " \xB7 data preserved";
        setResult(`${figures_default.tick} ${result_3.message}${suffix}`);
        if (onManageComplete) void onManageComplete();
        setParentViewState({
          type: "menu"
        });
      } catch (e_0) {
        setIsProcessing(false);
        setProcessError(e_0 instanceof Error ? e_0.message : String(e_0));
      }
    };
    if (input === "y" || input === "Y") {
      void doUninstall(true);
    } else if (input === "n" || input === "N") {
      void doUninstall(false);
    } else if (key.escape) {
      setViewState("plugin-details");
      setProcessError(null);
    }
  }, {
    isActive: typeof viewState === "object" && viewState.type === "confirm-data-cleanup" && !!selectedPlugin && !isProcessing
  });
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);
  use_input_default((input_0, key_0) => {
    const keyIsNotCtrlOrMeta = !key_0.ctrl && !key_0.meta;
    if (isSearchMode) {
      return;
    }
    if (input_0 === "/" && keyIsNotCtrlOrMeta) {
      setIsSearchMode(true);
      setSearchQuery("");
      setSelectedIndex(0);
    } else if (keyIsNotCtrlOrMeta && input_0.length > 0 && !/^\s+$/.test(input_0) && input_0 !== "j" && input_0 !== "k" && input_0 !== " ") {
      setIsSearchMode(true);
      setSearchQuery(input_0);
      setSelectedIndex(0);
    }
  }, {
    isActive: viewState === "plugin-list"
  });
  if (loading) {
    return /* @__PURE__ */ createElement(ThemedText, null, "Loading installed plugins\u2026");
  }
  if (unifiedItems.length === 0) {
    return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Manage plugins")), /* @__PURE__ */ createElement(ThemedText, null, "No plugins or MCP servers installed."), /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Esc to go back")));
  }
  if (typeof viewState === "object" && viewState.type === "plugin-options" && selectedPlugin) {
    let finish = function(msg) {
      setResult(msg);
      if (onManageComplete) {
        void onManageComplete();
      }
      setParentViewState({
        type: "menu"
      });
    };
    const pluginId_10 = `${selectedPlugin.plugin.name}@${selectedPlugin.marketplace}`;
    return /* @__PURE__ */ createElement(PluginOptionsFlow, { plugin: selectedPlugin.plugin, pluginId: pluginId_10, onDone: (outcome, detail) => {
      switch (outcome) {
        case "configured":
          finish(`\u2713 Enabled and configured ${selectedPlugin.plugin.name}. Run /reload-plugins to apply.`);
          break;
        case "skipped":
          finish(`\u2713 Enabled ${selectedPlugin.plugin.name}. Run /reload-plugins to apply.`);
          break;
        case "error":
          finish(`Failed to save configuration: ${detail}`);
          break;
      }
    } });
  }
  if (typeof viewState === "object" && viewState.type === "configuring-options" && selectedPlugin) {
    const pluginId_11 = `${selectedPlugin.plugin.name}@${selectedPlugin.marketplace}`;
    return /* @__PURE__ */ createElement(PluginOptionsDialog, { title: `Configure ${selectedPlugin.plugin.name}`, subtitle: "Plugin options", configSchema: viewState.schema, initialValues: loadPluginOptions(pluginId_11), onSave: (values) => {
      try {
        savePluginOptions(pluginId_11, values, viewState.schema);
        clearAllCaches();
        setResult("Configuration saved. Run /reload-plugins for changes to take effect.");
      } catch (err_3) {
        setProcessError(`Failed to save configuration: ${errorMessage(err_3)}`);
      }
      setViewState("plugin-details");
    }, onCancel: () => setViewState("plugin-details") });
  }
  if (viewState === "configuring" && configNeeded && selectedPlugin) {
    let handleCancel = function() {
      setConfigNeeded(null);
      setViewState("plugin-details");
    };
    const pluginId_12 = `${selectedPlugin.plugin.name}@${selectedPlugin.marketplace}`;
    async function handleSave(config) {
      if (!configNeeded || !selectedPlugin) return;
      try {
        const mcpServersSpec_1 = selectedPlugin.plugin.manifest.mcpServers;
        let mcpbPath_0 = null;
        if (typeof mcpServersSpec_1 === "string" && isMcpbSource(mcpServersSpec_1)) {
          mcpbPath_0 = mcpServersSpec_1;
        } else if (Array.isArray(mcpServersSpec_1)) {
          for (const spec_1 of mcpServersSpec_1) {
            if (typeof spec_1 === "string" && isMcpbSource(spec_1)) {
              mcpbPath_0 = spec_1;
              break;
            }
          }
        }
        if (!mcpbPath_0) {
          setProcessError("No MCPB file found");
          setViewState("plugin-details");
          return;
        }
        await loadMcpbFile(mcpbPath_0, selectedPlugin.plugin.path, pluginId_12, void 0, config);
        setProcessError(null);
        setConfigNeeded(null);
        setViewState("plugin-details");
        setResult("Configuration saved. Run /reload-plugins for changes to take effect.");
      } catch (err_4) {
        const errorMsg_0 = errorMessage(err_4);
        setProcessError(`Failed to save configuration: ${errorMsg_0}`);
        setViewState("plugin-details");
      }
    }
    return /* @__PURE__ */ createElement(PluginOptionsDialog, { title: `Configure ${configNeeded.manifest.name}`, subtitle: `Plugin: ${selectedPlugin.plugin.name}`, configSchema: configNeeded.configSchema, initialValues: configNeeded.existingConfig, onSave: handleSave, onCancel: handleCancel });
  }
  if (typeof viewState === "object" && viewState.type === "flagged-detail") {
    const fp = viewState.plugin;
    return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(ThemedText, { bold: true }, fp.name, " @ ", fp.marketplace)), /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Status: "), /* @__PURE__ */ createElement(ThemedText, { color: "error" }, "Removed")), /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1, flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, { color: "error" }, "Removed from marketplace \xB7 reason: ", fp.reason), /* @__PURE__ */ createElement(ThemedText, null, fp.text), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Flagged on ", new Date(fp.flaggedAt).toLocaleDateString())), /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1, flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(ThemedText, null, figures_default.pointer, " "), /* @__PURE__ */ createElement(ThemedText, { color: "suggestion" }, "Dismiss"))), /* @__PURE__ */ createElement(Byline, null, /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "select:accept", context: "Select", fallback: "Enter", description: "dismiss" }), /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "back" })));
  }
  if (viewState === "confirm-project-uninstall" && selectedPlugin) {
    return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, { bold: true, color: "warning" }, selectedPlugin.plugin.name, " is enabled in .claude/settings.json (shared with your team)"), /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1, flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, null, "Disable it just for you in .claude/settings.local.json?"), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "This has the same effect as uninstalling, without affecting other contributors.")), processError && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { color: "error" }, processError)), /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, isProcessing ? /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Disabling\u2026") : /* @__PURE__ */ createElement(Byline, null, /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:yes", context: "Confirmation", fallback: "y", description: "disable" }), /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "cancel" }))));
  }
  if (typeof viewState === "object" && viewState.type === "confirm-data-cleanup" && selectedPlugin) {
    return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, { bold: true }, selectedPlugin.plugin.name, " has ", viewState.size.human, " of persistent data"), /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1, flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, null, "Delete it along with the plugin?"), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, pluginDataDirPath(`${selectedPlugin.plugin.name}@${selectedPlugin.marketplace}`))), processError && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { color: "error" }, processError)), /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, isProcessing ? /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Uninstalling\u2026") : /* @__PURE__ */ createElement(ThemedText, null, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "y"), " to delete \xB7 ", /* @__PURE__ */ createElement(ThemedText, { bold: true }, "n"), " to keep \xB7", " ", /* @__PURE__ */ createElement(ThemedText, { bold: true }, "esc"), " to cancel")));
  }
  if (viewState === "plugin-details" && selectedPlugin) {
    const mergedSettings_2 = getSettings_DEPRECATED();
    const pluginId_13 = `${selectedPlugin.plugin.name}@${selectedPlugin.marketplace}`;
    const isEnabled_2 = mergedSettings_2?.enabledPlugins?.[pluginId_13] !== false;
    const filteredPluginErrors = pluginErrors.filter((e_1) => "plugin" in e_1 && e_1.plugin === selectedPlugin.plugin.name || e_1.source === pluginId_13 || e_1.source.startsWith(`${selectedPlugin.plugin.name}@`));
    const pluginErrorsSection = filteredPluginErrors.length === 0 ? null : /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { bold: true, color: "error" }, filteredPluginErrors.length, " ", plural(filteredPluginErrors.length, "error"), ":"), filteredPluginErrors.map((error_3, i_0) => {
      const guidance = getErrorGuidance(error_3);
      return /* @__PURE__ */ createElement(ThemedBox_default, { key: i_0, flexDirection: "column", marginLeft: 2 }, /* @__PURE__ */ createElement(ThemedText, { color: "error" }, formatErrorMessage(error_3)), guidance && /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, figures_default.arrowRight, " ", guidance));
    }));
    return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(ThemedText, { bold: true }, selectedPlugin.plugin.name, " @ ", selectedPlugin.marketplace)), /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Scope: "), /* @__PURE__ */ createElement(ThemedText, null, selectedPlugin.scope || "user")), selectedPlugin.plugin.manifest.version && /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Version: "), /* @__PURE__ */ createElement(ThemedText, null, selectedPlugin.plugin.manifest.version)), selectedPlugin.plugin.manifest.description && /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, null, selectedPlugin.plugin.manifest.description)), selectedPlugin.plugin.manifest.author && /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Author: "), /* @__PURE__ */ createElement(ThemedText, null, selectedPlugin.plugin.manifest.author.name)), /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Status: "), /* @__PURE__ */ createElement(ThemedText, { color: isEnabled_2 ? "success" : "warning" }, isEnabled_2 ? "Enabled" : "Disabled"), selectedPlugin.pendingUpdate && /* @__PURE__ */ createElement(ThemedText, { color: "suggestion" }, " \xB7 Marked for update")), /* @__PURE__ */ createElement(PluginComponentsDisplay, { plugin: selectedPlugin.plugin, marketplace: selectedPlugin.marketplace }), pluginErrorsSection, /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1, flexDirection: "column" }, detailsMenuItems.map((item_9, index_0) => {
      const isSelected = index_0 === detailsMenuIndex;
      return /* @__PURE__ */ createElement(ThemedBox_default, { key: index_0 }, isSelected && /* @__PURE__ */ createElement(ThemedText, null, figures_default.pointer, " "), !isSelected && /* @__PURE__ */ createElement(ThemedText, null, "  "), /* @__PURE__ */ createElement(ThemedText, { bold: isSelected, color: item_9.label.includes("Uninstall") ? "error" : item_9.label.includes("Update") ? "suggestion" : void 0 }, item_9.label));
    })), isProcessing && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, null, "Processing\u2026")), processError && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { color: "error" }, processError)), /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, /* @__PURE__ */ createElement(Byline, null, /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "select:previous", context: "Select", fallback: "\u2191", description: "navigate" }), /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "select:accept", context: "Select", fallback: "Enter", description: "select" }), /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "back" })))));
  }
  if (typeof viewState === "object" && viewState.type === "failed-plugin-details") {
    const failedPlugin_0 = viewState.plugin;
    const firstError = failedPlugin_0.errors[0];
    const errorMessage_0 = firstError ? formatErrorMessage(firstError) : "Failed to load";
    return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, null, /* @__PURE__ */ createElement(ThemedText, { bold: true }, failedPlugin_0.name), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " @ ", failedPlugin_0.marketplace), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " (", failedPlugin_0.scope, ")")), /* @__PURE__ */ createElement(ThemedText, { color: "error" }, errorMessage_0), failedPlugin_0.scope === "managed" ? /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Managed by your organization \u2014 contact your admin")) : /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { color: "suggestion" }, figures_default.pointer, " "), /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Remove")), isProcessing && /* @__PURE__ */ createElement(ThemedText, null, "Processing\u2026"), processError && /* @__PURE__ */ createElement(ThemedText, { color: "error" }, processError), /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, /* @__PURE__ */ createElement(Byline, null, failedPlugin_0.scope !== "managed" && /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "select:accept", context: "Select", fallback: "Enter", description: "remove" }), /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "back" })))));
  }
  if (typeof viewState === "object" && viewState.type === "mcp-detail") {
    const client_3 = viewState.client;
    const serverToolsCount = filterToolsByServer(mcpTools, client_3.name).length;
    const handleMcpViewTools = () => {
      setViewState({
        type: "mcp-tools",
        client: client_3
      });
    };
    const handleMcpCancel = () => {
      setViewState("plugin-list");
    };
    const handleMcpComplete = (result_4) => {
      if (result_4) {
        setResult(result_4);
      }
      setViewState("plugin-list");
    };
    const scope_5 = client_3.config.scope;
    const configType = client_3.config.type;
    if (configType === "stdio") {
      const server = {
        name: client_3.name,
        client: client_3,
        scope: scope_5,
        transport: "stdio",
        config: client_3.config
      };
      return /* @__PURE__ */ createElement(MCPStdioServerMenu, { server, serverToolsCount, onViewTools: handleMcpViewTools, onCancel: handleMcpCancel, onComplete: handleMcpComplete, borderless: true });
    } else if (configType === "sse") {
      const server_0 = {
        name: client_3.name,
        client: client_3,
        scope: scope_5,
        transport: "sse",
        isAuthenticated: void 0,
        config: client_3.config
      };
      return /* @__PURE__ */ createElement(MCPRemoteServerMenu, { server: server_0, serverToolsCount, onViewTools: handleMcpViewTools, onCancel: handleMcpCancel, onComplete: handleMcpComplete, borderless: true });
    } else if (configType === "http") {
      const server_1 = {
        name: client_3.name,
        client: client_3,
        scope: scope_5,
        transport: "http",
        isAuthenticated: void 0,
        config: client_3.config
      };
      return /* @__PURE__ */ createElement(MCPRemoteServerMenu, { server: server_1, serverToolsCount, onViewTools: handleMcpViewTools, onCancel: handleMcpCancel, onComplete: handleMcpComplete, borderless: true });
    } else if (configType === "claudeai-proxy") {
      const server_2 = {
        name: client_3.name,
        client: client_3,
        scope: scope_5,
        transport: "claudeai-proxy",
        isAuthenticated: void 0,
        config: client_3.config
      };
      return /* @__PURE__ */ createElement(MCPRemoteServerMenu, { server: server_2, serverToolsCount, onViewTools: handleMcpViewTools, onCancel: handleMcpCancel, onComplete: handleMcpComplete, borderless: true });
    }
    setViewState("plugin-list");
    return null;
  }
  if (typeof viewState === "object" && viewState.type === "mcp-tools") {
    const client_4 = viewState.client;
    const scope_6 = client_4.config.scope;
    const configType_0 = client_4.config.type;
    let server_3;
    if (configType_0 === "stdio") {
      server_3 = {
        name: client_4.name,
        client: client_4,
        scope: scope_6,
        transport: "stdio",
        config: client_4.config
      };
    } else if (configType_0 === "sse") {
      server_3 = {
        name: client_4.name,
        client: client_4,
        scope: scope_6,
        transport: "sse",
        isAuthenticated: void 0,
        config: client_4.config
      };
    } else if (configType_0 === "http") {
      server_3 = {
        name: client_4.name,
        client: client_4,
        scope: scope_6,
        transport: "http",
        isAuthenticated: void 0,
        config: client_4.config
      };
    } else {
      server_3 = {
        name: client_4.name,
        client: client_4,
        scope: scope_6,
        transport: "claudeai-proxy",
        isAuthenticated: void 0,
        config: client_4.config
      };
    }
    return /* @__PURE__ */ createElement(MCPToolListView, { server: server_3, onSelectTool: (tool) => {
      setViewState({
        type: "mcp-tool-detail",
        client: client_4,
        tool
      });
    }, onBack: () => setViewState({
      type: "mcp-detail",
      client: client_4
    }) });
  }
  if (typeof viewState === "object" && viewState.type === "mcp-tool-detail") {
    const {
      client: client_5,
      tool: tool_0
    } = viewState;
    const scope_7 = client_5.config.scope;
    const configType_1 = client_5.config.type;
    let server_4;
    if (configType_1 === "stdio") {
      server_4 = {
        name: client_5.name,
        client: client_5,
        scope: scope_7,
        transport: "stdio",
        config: client_5.config
      };
    } else if (configType_1 === "sse") {
      server_4 = {
        name: client_5.name,
        client: client_5,
        scope: scope_7,
        transport: "sse",
        isAuthenticated: void 0,
        config: client_5.config
      };
    } else if (configType_1 === "http") {
      server_4 = {
        name: client_5.name,
        client: client_5,
        scope: scope_7,
        transport: "http",
        isAuthenticated: void 0,
        config: client_5.config
      };
    } else {
      server_4 = {
        name: client_5.name,
        client: client_5,
        scope: scope_7,
        transport: "claudeai-proxy",
        isAuthenticated: void 0,
        config: client_5.config
      };
    }
    return /* @__PURE__ */ createElement(MCPToolDetailView, { tool: tool_0, server: server_4, onBack: () => setViewState({
      type: "mcp-tools",
      client: client_5
    }) });
  }
  const visibleItems = pagination.getVisibleItems(filteredItems);
  return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ createElement(SearchBox, { query: searchQuery, isFocused: isSearchMode, isTerminalFocused, width: terminalWidth - 4, cursorOffset: searchCursorOffset })), filteredItems.length === 0 && searchQuery && /* @__PURE__ */ createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, 'No items match "', searchQuery, '"')), pagination.scrollPosition.canScrollUp && /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " ", figures_default.arrowUp, " more above")), visibleItems.map((item_10, visibleIndex) => {
    const actualIndex = pagination.toActualIndex(visibleIndex);
    const isSelected_0 = actualIndex === selectedIndex && !isSearchMode;
    const prevItem = visibleIndex > 0 ? visibleItems[visibleIndex - 1] : null;
    const showScopeHeader = !prevItem || prevItem.scope !== item_10.scope;
    const getScopeLabel = (scope_8) => {
      switch (scope_8) {
        case "flagged":
          return "Flagged";
        case "project":
          return "Project";
        case "local":
          return "Local";
        case "user":
          return "User";
        case "enterprise":
          return "Enterprise";
        case "managed":
          return "Managed";
        case "builtin":
          return "Built-in";
        case "dynamic":
          return "Built-in";
        default:
          return scope_8;
      }
    };
    return /* @__PURE__ */ createElement(Fragment, { key: item_10.id }, showScopeHeader && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: visibleIndex > 0 ? 1 : 0, paddingLeft: 2 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: item_10.scope !== "flagged", color: item_10.scope === "flagged" ? "warning" : void 0, bold: item_10.scope === "flagged" }, getScopeLabel(item_10.scope))), /* @__PURE__ */ createElement(UnifiedInstalledCell, { item: item_10, isSelected: isSelected_0 }));
  }), pagination.scrollPosition.canScrollDown && /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " ", figures_default.arrowDown, " more below")), /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1, marginLeft: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, /* @__PURE__ */ createElement(Byline, null, /* @__PURE__ */ createElement(ThemedText, null, "type to search"), /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "plugin:toggle", context: "Plugin", fallback: "Space", description: "toggle" }), /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "select:accept", context: "Select", fallback: "Enter", description: "details" }), /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "back" })))), pendingToggles.size > 0 && /* @__PURE__ */ createElement(ThemedBox_default, { marginLeft: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, "Run /reload-plugins to apply changes")));
}
var init_ManagePlugins = __esm({
  "src/commands/plugin/ManagePlugins.tsx"() {
    init_figures();
    init_react();
    init_react();
    init_ConfigurableShortcutHint();
    init_Byline();
    init_MCPRemoteServerMenu();
    init_MCPStdioServerMenu();
    init_MCPToolDetailView();
    init_MCPToolListView();
    init_SearchBox();
    init_useSearchInput();
    init_useTerminalSize();
    init_ink();
    init_useKeybinding();
    init_builtinPlugins();
    init_MCPConnectionManager();
    init_utils();
    init_pluginOperations();
    init_AppState();
    init_array();
    init_browser();
    init_debug();
    init_errors();
    init_log();
    init_cacheUtils();
    init_installedPluginsManager();
    init_marketplaceManager();
    init_mcpbHandler();
    init_pluginDirectories();
    init_pluginFlagging();
    init_pluginIdentifier();
    init_pluginLoader();
    init_pluginOptionsStorage();
    init_pluginPolicy();
    init_pluginStartupCheck();
    init_settings();
    init_slowOperations();
    init_stringUtils();
    init_PluginErrors();
    init_PluginOptionsDialog();
    init_PluginOptionsFlow();
    init_UnifiedInstalledCell();
    init_usePagination();
  }
});

// src/commands/plugin/parseArgs.ts
function parsePluginArgs(args) {
  if (!args) {
    return { type: "menu" };
  }
  const parts = args.trim().split(/\s+/);
  const command = parts[0]?.toLowerCase();
  switch (command) {
    case "help":
    case "--help":
    case "-h":
      return { type: "help" };
    case "install":
    case "i": {
      const target = parts[1];
      if (!target) {
        return { type: "install" };
      }
      if (target.includes("@")) {
        const [plugin, marketplace] = target.split("@");
        return { type: "install", plugin, marketplace };
      }
      const isMarketplace = target.startsWith("http://") || target.startsWith("https://") || target.startsWith("file://") || target.includes("/") || target.includes("\\");
      if (isMarketplace) {
        return { type: "install", marketplace: target };
      }
      return { type: "install", plugin: target };
    }
    case "manage":
      return { type: "manage" };
    case "uninstall":
      return { type: "uninstall", plugin: parts[1] };
    case "enable":
      return { type: "enable", plugin: parts[1] };
    case "disable":
      return { type: "disable", plugin: parts[1] };
    case "validate": {
      const target = parts.slice(1).join(" ").trim();
      return { type: "validate", path: target || void 0 };
    }
    case "marketplace":
    case "market": {
      const action = parts[1]?.toLowerCase();
      const target = parts.slice(2).join(" ");
      switch (action) {
        case "add":
          return { type: "marketplace", action: "add", target };
        case "remove":
        case "rm":
          return { type: "marketplace", action: "remove", target };
        case "update":
          return { type: "marketplace", action: "update", target };
        case "list":
          return { type: "marketplace", action: "list" };
        default:
          return { type: "marketplace" };
      }
    }
    default:
      return { type: "menu" };
  }
}
var init_parseArgs = __esm({
  "src/commands/plugin/parseArgs.ts"() {
  }
});

// src/commands/plugin/ValidatePlugin.tsx
function ValidatePlugin(t0) {
  const $ = c(5);
  const {
    onComplete,
    path: path2
  } = t0;
  let t1;
  let t2;
  if ($[0] !== onComplete || $[1] !== path2) {
    t1 = () => {
      const runValidation = async function runValidation2() {
        if (!path2) {
          onComplete("Usage: /plugin validate <path>\n\nValidate a plugin or marketplace manifest file or directory.\n\nExamples:\n  /plugin validate .claude-plugin/plugin.json\n  /plugin validate /path/to/plugin-directory\n  /plugin validate .\n\nWhen given a directory, automatically validates .claude-plugin/marketplace.json\nor .claude-plugin/plugin.json (prefers marketplace if both exist).\n\nOr from the command line:\n  blaude plugin validate <path>");
          return;
        }
        ;
        try {
          const result = await validateManifest(path2);
          let output = "";
          output = output + `Validating ${result.fileType} manifest: ${result.filePath}

`;
          output;
          if (result.errors.length > 0) {
            output = output + `${figures_default.cross} Found ${result.errors.length} ${plural(result.errors.length, "error")}:

`;
            output;
            result.errors.forEach((error_0) => {
              output = output + `  ${figures_default.pointer} ${error_0.path}: ${error_0.message}
`;
              output;
            });
            output = output + "\n";
            output;
          }
          if (result.warnings.length > 0) {
            output = output + `${figures_default.warning} Found ${result.warnings.length} ${plural(result.warnings.length, "warning")}:

`;
            output;
            result.warnings.forEach((warning) => {
              output = output + `  ${figures_default.pointer} ${warning.path}: ${warning.message}
`;
              output;
            });
            output = output + "\n";
            output;
          }
          if (result.success) {
            if (result.warnings.length > 0) {
              output = output + `${figures_default.tick} Validation passed with warnings
`;
              output;
            } else {
              output = output + `${figures_default.tick} Validation passed
`;
              output;
            }
            process.exitCode = 0;
          } else {
            output = output + `${figures_default.cross} Validation failed
`;
            output;
            process.exitCode = 1;
          }
          onComplete(output);
        } catch (t32) {
          const error = t32;
          process.exitCode = 2;
          logError(error);
          onComplete(`${figures_default.cross} Unexpected error during validation: ${errorMessage(error)}`);
        }
      };
      runValidation();
    };
    t2 = [onComplete, path2];
    $[0] = onComplete;
    $[1] = path2;
    $[2] = t1;
    $[3] = t2;
  } else {
    t1 = $[2];
    t2 = $[3];
  }
  useEffect(t1, t2);
  let t3;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, null, "Running validation..."));
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  return t3;
}
var init_ValidatePlugin = __esm({
  "src/commands/plugin/ValidatePlugin.tsx"() {
    init_react_compiler_runtime();
    init_figures();
    init_react();
    init_react();
    init_ink();
    init_errors();
    init_log();
    init_validatePlugin();
    init_stringUtils();
  }
});

// src/commands/plugin/PluginSettings.tsx
function MarketplaceList(t0) {
  const $ = c(4);
  const {
    onComplete
  } = t0;
  let t1;
  let t2;
  if ($[0] !== onComplete) {
    t1 = () => {
      const loadList = async function loadList2() {
        ;
        try {
          const config = await loadKnownMarketplacesConfig();
          const names = Object.keys(config);
          if (names.length === 0) {
            onComplete("No marketplaces configured");
          } else {
            onComplete(`Configured marketplaces:
${names.map(_temp6).join("\n")}`);
          }
        } catch (t32) {
          const err = t32;
          onComplete(`Error loading marketplaces: ${errorMessage(err)}`);
        }
      };
      loadList();
    };
    t2 = [onComplete];
    $[0] = onComplete;
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  useEffect(t1, t2);
  let t3;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ createElement(ThemedText, null, "Loading marketplaces...");
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  return t3;
}
function _temp6(n) {
  return `  \u2022 ${n}`;
}
function McpRedirectBanner() {
  return null;
}
function getExtraMarketplaceSourceInfo(name) {
  const editableSources = [];
  const sourcesToCheck = [{
    source: "userSettings",
    scope: "user"
  }, {
    source: "projectSettings",
    scope: "project"
  }, {
    source: "localSettings",
    scope: "local"
  }];
  for (const {
    source,
    scope
  } of sourcesToCheck) {
    const settings = getSettingsForSource(source);
    if (settings?.extraKnownMarketplaces?.[name]) {
      editableSources.push({
        source,
        scope
      });
    }
  }
  const policySettings = getSettingsForSource("policySettings");
  const isInPolicy = Boolean(policySettings?.extraKnownMarketplaces?.[name]);
  return {
    editableSources,
    isInPolicy
  };
}
function buildMarketplaceAction(name) {
  const {
    editableSources,
    isInPolicy
  } = getExtraMarketplaceSourceInfo(name);
  if (editableSources.length > 0) {
    return {
      kind: "remove-extra-marketplace",
      name,
      sources: editableSources
    };
  }
  if (isInPolicy) {
    return {
      kind: "managed-only",
      name
    };
  }
  return {
    kind: "navigate",
    tab: "marketplaces",
    viewState: {
      type: "manage-marketplaces",
      targetMarketplace: name,
      action: "remove"
    }
  };
}
function buildPluginAction(pluginName) {
  return {
    kind: "navigate",
    tab: "installed",
    viewState: {
      type: "manage-plugins",
      targetPlugin: pluginName,
      action: "uninstall"
    }
  };
}
function isTransientError(error) {
  return TRANSIENT_ERROR_TYPES.has(error.type);
}
function getPluginNameFromError(error) {
  if ("pluginId" in error && error.pluginId) return error.pluginId;
  if ("plugin" in error && error.plugin) return error.plugin;
  if (error.source.includes("@")) return error.source.split("@")[0];
  return void 0;
}
function buildErrorRows(failedMarketplaces, extraMarketplaceErrors, pluginLoadingErrors, otherErrors, brokenInstalledMarketplaces, transientErrors, pluginScopes) {
  const rows = [];
  for (const error of transientErrors) {
    const pluginName = "pluginId" in error ? error.pluginId : "plugin" in error ? error.plugin : void 0;
    rows.push({
      label: pluginName ?? error.source,
      message: formatErrorMessage(error),
      guidance: "Restart to retry loading plugins",
      action: {
        kind: "none"
      }
    });
  }
  const shownMarketplaceNames = /* @__PURE__ */ new Set();
  for (const m of failedMarketplaces) {
    shownMarketplaceNames.add(m.name);
    const action = buildMarketplaceAction(m.name);
    const sourceInfo = getExtraMarketplaceSourceInfo(m.name);
    const scope = sourceInfo.isInPolicy ? "managed" : sourceInfo.editableSources[0]?.scope;
    rows.push({
      label: m.name,
      message: m.error ?? "Installation failed",
      guidance: action.kind === "managed-only" ? "Managed by your organization \u2014 contact your admin" : void 0,
      action,
      scope
    });
  }
  for (const e of extraMarketplaceErrors) {
    const marketplace = "marketplace" in e ? e.marketplace : e.source;
    if (shownMarketplaceNames.has(marketplace)) continue;
    shownMarketplaceNames.add(marketplace);
    const action = buildMarketplaceAction(marketplace);
    const sourceInfo = getExtraMarketplaceSourceInfo(marketplace);
    const scope = sourceInfo.isInPolicy ? "managed" : sourceInfo.editableSources[0]?.scope;
    rows.push({
      label: marketplace,
      message: formatErrorMessage(e),
      guidance: action.kind === "managed-only" ? "Managed by your organization \u2014 contact your admin" : getErrorGuidance(e),
      action,
      scope
    });
  }
  for (const m of brokenInstalledMarketplaces) {
    if (shownMarketplaceNames.has(m.name)) continue;
    shownMarketplaceNames.add(m.name);
    rows.push({
      label: m.name,
      message: m.error,
      action: {
        kind: "remove-installed-marketplace",
        name: m.name
      }
    });
  }
  const shownPluginNames = /* @__PURE__ */ new Set();
  for (const error of pluginLoadingErrors) {
    const pluginName = getPluginNameFromError(error);
    if (pluginName && shownPluginNames.has(pluginName)) continue;
    if (pluginName) shownPluginNames.add(pluginName);
    const marketplace = "marketplace" in error ? error.marketplace : void 0;
    const scope = pluginName ? pluginScopes.get(error.source) ?? pluginScopes.get(pluginName) : void 0;
    rows.push({
      label: pluginName ? marketplace ? `${pluginName} @ ${marketplace}` : pluginName : error.source,
      message: formatErrorMessage(error),
      guidance: getErrorGuidance(error),
      action: pluginName ? buildPluginAction(pluginName) : {
        kind: "none"
      },
      scope
    });
  }
  for (const error of otherErrors) {
    rows.push({
      label: error.source,
      message: formatErrorMessage(error),
      guidance: getErrorGuidance(error),
      action: {
        kind: "none"
      }
    });
  }
  return rows;
}
function removeExtraMarketplace(name, sources) {
  for (const {
    source
  } of sources) {
    const settings = getSettingsForSource(source);
    if (!settings) continue;
    const updates = {};
    if (settings.extraKnownMarketplaces?.[name]) {
      updates.extraKnownMarketplaces = {
        ...settings.extraKnownMarketplaces,
        [name]: void 0
      };
    }
    if (settings.enabledPlugins) {
      const suffix = `@${name}`;
      let removedPlugins = false;
      const updatedPlugins = {
        ...settings.enabledPlugins
      };
      for (const pluginId in updatedPlugins) {
        if (pluginId.endsWith(suffix)) {
          updatedPlugins[pluginId] = void 0;
          removedPlugins = true;
        }
      }
      if (removedPlugins) {
        updates.enabledPlugins = updatedPlugins;
      }
    }
    if (Object.keys(updates).length > 0) {
      updateSettingsForSource(source, updates);
    }
  }
}
function ErrorsTabContent(t0) {
  const $ = c(26);
  const {
    setViewState,
    setActiveTab,
    markPluginsChanged
  } = t0;
  const errors = useAppState(_temp23);
  const installationStatus = useAppState(_temp32);
  const setAppState = useSetAppState();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [actionMessage, setActionMessage] = useState(null);
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = [];
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const [marketplaceLoadFailures, setMarketplaceLoadFailures] = useState(t1);
  let t2;
  let t3;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = () => {
      (async () => {
        try {
          const config = await loadKnownMarketplacesConfig();
          const {
            failures
          } = await loadMarketplacesWithGracefulDegradation(config);
          setMarketplaceLoadFailures(failures);
        } catch {
        }
      })();
    };
    t3 = [];
    $[1] = t2;
    $[2] = t3;
  } else {
    t2 = $[1];
    t3 = $[2];
  }
  useEffect(t2, t3);
  const failedMarketplaces = installationStatus.marketplaces.filter(_temp42);
  const failedMarketplaceNames = new Set(failedMarketplaces.map(_temp52));
  const transientErrors = errors.filter(isTransientError);
  const extraMarketplaceErrors = errors.filter((e) => (e.type === "marketplace-not-found" || e.type === "marketplace-load-failed" || e.type === "marketplace-blocked-by-policy") && !failedMarketplaceNames.has(e.marketplace));
  const pluginLoadingErrors = errors.filter(_temp62);
  const otherErrors = errors.filter(_temp7);
  const pluginScopes = getPluginEditableScopes();
  const rows = buildErrorRows(failedMarketplaces, extraMarketplaceErrors, pluginLoadingErrors, otherErrors, marketplaceLoadFailures, transientErrors, pluginScopes);
  let t4;
  if ($[3] !== setViewState) {
    t4 = () => {
      setViewState({
        type: "menu"
      });
    };
    $[3] = setViewState;
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = {
      context: "Confirmation"
    };
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  useKeybinding("confirm:no", t4, t5);
  const handleSelect = () => {
    const row = rows[selectedIndex];
    if (!row) {
      return;
    }
    const {
      action
    } = row;
    bb77: switch (action.kind) {
      case "navigate": {
        setActiveTab(action.tab);
        setViewState(action.viewState);
        break bb77;
      }
      case "remove-extra-marketplace": {
        const scopes = action.sources.map(_temp8).join(", ");
        removeExtraMarketplace(action.name, action.sources);
        clearAllCaches();
        setAppState((prev_0) => ({
          ...prev_0,
          plugins: {
            ...prev_0.plugins,
            errors: prev_0.plugins.errors.filter((e_2) => !("marketplace" in e_2 && e_2.marketplace === action.name)),
            installationStatus: {
              ...prev_0.plugins.installationStatus,
              marketplaces: prev_0.plugins.installationStatus.marketplaces.filter((m_1) => m_1.name !== action.name)
            }
          }
        }));
        setActionMessage(`${figures_default.tick} Removed "${action.name}" from ${scopes} settings`);
        markPluginsChanged();
        break bb77;
      }
      case "remove-installed-marketplace": {
        (async () => {
          ;
          try {
            await removeMarketplaceSource(action.name);
            clearAllCaches();
            setMarketplaceLoadFailures((prev) => prev.filter((f) => f.name !== action.name));
            setActionMessage(`${figures_default.tick} Removed marketplace "${action.name}"`);
            markPluginsChanged();
          } catch (t6) {
            const err = t6;
            setActionMessage(`Failed to remove "${action.name}": ${err instanceof Error ? err.message : String(err)}`);
          }
        })();
        break bb77;
      }
      case "managed-only": {
        break bb77;
      }
      case "none":
    }
  };
  let t7;
  if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = () => setSelectedIndex(_temp9);
    $[6] = t7;
  } else {
    t7 = $[6];
  }
  const t8 = rows.length > 0;
  let t9;
  if ($[7] !== t8) {
    t9 = {
      context: "Select",
      isActive: t8
    };
    $[7] = t8;
    $[8] = t9;
  } else {
    t9 = $[8];
  }
  useKeybindings({
    "select:previous": t7,
    "select:next": () => setSelectedIndex((prev_2) => Math.min(rows.length - 1, prev_2 + 1)),
    "select:accept": handleSelect
  }, t9);
  const clampedIndex = Math.min(selectedIndex, Math.max(0, rows.length - 1));
  if (clampedIndex !== selectedIndex) {
    setSelectedIndex(clampedIndex);
  }
  const selectedAction = rows[clampedIndex]?.action;
  const hasAction = selectedAction && selectedAction.kind !== "none" && selectedAction.kind !== "managed-only";
  if (rows.length === 0) {
    let t102;
    if ($[9] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t102 = /* @__PURE__ */ createElement(ThemedBox_default, { marginLeft: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "No plugin errors"));
      $[9] = t102;
    } else {
      t102 = $[9];
    }
    let t112;
    if ($[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t112 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, t102, /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "back" }))));
      $[10] = t112;
    } else {
      t112 = $[10];
    }
    return t112;
  }
  const T0 = ThemedBox_default;
  const t10 = "column";
  let t11;
  if ($[11] !== clampedIndex) {
    t11 = (row_0, idx) => {
      const isSelected = idx === clampedIndex;
      return /* @__PURE__ */ createElement(ThemedBox_default, { key: idx, marginLeft: 1, flexDirection: "column", marginBottom: 1 }, /* @__PURE__ */ createElement(ThemedText, null, /* @__PURE__ */ createElement(ThemedText, { color: isSelected ? "suggestion" : "error" }, isSelected ? figures_default.pointer : figures_default.cross, " "), /* @__PURE__ */ createElement(ThemedText, { bold: isSelected }, row_0.label), row_0.scope && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " (", row_0.scope, ")")), /* @__PURE__ */ createElement(ThemedBox_default, { marginLeft: 3 }, /* @__PURE__ */ createElement(ThemedText, { color: "error" }, row_0.message)), row_0.guidance && /* @__PURE__ */ createElement(ThemedBox_default, { marginLeft: 3 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, row_0.guidance)));
    };
    $[11] = clampedIndex;
    $[12] = t11;
  } else {
    t11 = $[12];
  }
  const t12 = rows.map(t11);
  let t13;
  if ($[13] !== actionMessage) {
    t13 = actionMessage && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1, marginLeft: 1 }, /* @__PURE__ */ createElement(ThemedText, { color: "claude" }, actionMessage));
    $[13] = actionMessage;
    $[14] = t13;
  } else {
    t13 = $[14];
  }
  let t14;
  if ($[15] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t14 = /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "select:previous", context: "Select", fallback: "\u2191", description: "navigate" });
    $[15] = t14;
  } else {
    t14 = $[15];
  }
  let t15;
  if ($[16] !== hasAction) {
    t15 = hasAction && /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "select:accept", context: "Select", fallback: "Enter", description: "resolve" });
    $[16] = hasAction;
    $[17] = t15;
  } else {
    t15 = $[17];
  }
  let t16;
  if ($[18] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t16 = /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "back" });
    $[18] = t16;
  } else {
    t16 = $[18];
  }
  let t17;
  if ($[19] !== t15) {
    t17 = /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, /* @__PURE__ */ createElement(Byline, null, t14, t15, t16)));
    $[19] = t15;
    $[20] = t17;
  } else {
    t17 = $[20];
  }
  let t18;
  if ($[21] !== T0 || $[22] !== t12 || $[23] !== t13 || $[24] !== t17) {
    t18 = /* @__PURE__ */ createElement(T0, { flexDirection: t10 }, t12, t13, t17);
    $[21] = T0;
    $[22] = t12;
    $[23] = t13;
    $[24] = t17;
    $[25] = t18;
  } else {
    t18 = $[25];
  }
  return t18;
}
function _temp9(prev_1) {
  return Math.max(0, prev_1 - 1);
}
function _temp8(s_1) {
  return s_1.scope;
}
function _temp7(e_1) {
  if (isTransientError(e_1)) {
    return false;
  }
  if (e_1.type === "marketplace-not-found" || e_1.type === "marketplace-load-failed" || e_1.type === "marketplace-blocked-by-policy") {
    return false;
  }
  return getPluginNameFromError(e_1) === void 0;
}
function _temp62(e_0) {
  if (isTransientError(e_0)) {
    return false;
  }
  if (e_0.type === "marketplace-not-found" || e_0.type === "marketplace-load-failed" || e_0.type === "marketplace-blocked-by-policy") {
    return false;
  }
  return getPluginNameFromError(e_0) !== void 0;
}
function _temp52(m_0) {
  return m_0.name;
}
function _temp42(m) {
  return m.status === "failed";
}
function _temp32(s_0) {
  return s_0.plugins.installationStatus;
}
function _temp23(s) {
  return s.plugins.errors;
}
function getInitialViewState(parsedCommand) {
  switch (parsedCommand.type) {
    case "help":
      return {
        type: "help"
      };
    case "validate":
      return {
        type: "validate",
        path: parsedCommand.path
      };
    case "install":
      if (parsedCommand.marketplace) {
        return {
          type: "browse-marketplace",
          targetMarketplace: parsedCommand.marketplace,
          targetPlugin: parsedCommand.plugin
        };
      }
      if (parsedCommand.plugin) {
        return {
          type: "discover-plugins",
          targetPlugin: parsedCommand.plugin
        };
      }
      return {
        type: "discover-plugins"
      };
    case "manage":
      return {
        type: "manage-plugins"
      };
    case "uninstall":
      return {
        type: "manage-plugins",
        targetPlugin: parsedCommand.plugin,
        action: "uninstall"
      };
    case "enable":
      return {
        type: "manage-plugins",
        targetPlugin: parsedCommand.plugin,
        action: "enable"
      };
    case "disable":
      return {
        type: "manage-plugins",
        targetPlugin: parsedCommand.plugin,
        action: "disable"
      };
    case "marketplace":
      if (parsedCommand.action === "list") {
        return {
          type: "marketplace-list"
        };
      }
      if (parsedCommand.action === "add") {
        return {
          type: "add-marketplace",
          initialValue: parsedCommand.target
        };
      }
      if (parsedCommand.action === "remove") {
        return {
          type: "manage-marketplaces",
          targetMarketplace: parsedCommand.target,
          action: "remove"
        };
      }
      if (parsedCommand.action === "update") {
        return {
          type: "manage-marketplaces",
          targetMarketplace: parsedCommand.target,
          action: "update"
        };
      }
      return {
        type: "marketplace-menu"
      };
    case "menu":
    default:
      return {
        type: "discover-plugins"
      };
  }
}
function getInitialTab(viewState) {
  if (viewState.type === "manage-plugins") return "installed";
  if (viewState.type === "manage-marketplaces") return "marketplaces";
  return "discover";
}
function PluginSettings(t0) {
  const $ = c(75);
  const {
    onComplete,
    args,
    showMcpRedirectMessage
  } = t0;
  let parsedCommand;
  let t1;
  if ($[0] !== args) {
    parsedCommand = parsePluginArgs(args);
    t1 = getInitialViewState(parsedCommand);
    $[0] = args;
    $[1] = parsedCommand;
    $[2] = t1;
  } else {
    parsedCommand = $[1];
    t1 = $[2];
  }
  const initialViewState = t1;
  const [viewState, setViewState] = useState(initialViewState);
  let t2;
  if ($[3] !== initialViewState) {
    t2 = getInitialTab(initialViewState);
    $[3] = initialViewState;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  const [activeTab, setActiveTab] = useState(t2);
  const [inputValue, setInputValue] = useState(viewState.type === "add-marketplace" ? viewState.initialValue || "" : "");
  const [cursorOffset, setCursorOffset] = useState(0);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const [childSearchActive, setChildSearchActive] = useState(false);
  const setAppState = useSetAppState();
  const pluginErrorCount = useAppState(_temp0);
  const errorsTabTitle = pluginErrorCount > 0 ? `Errors (${pluginErrorCount})` : "Errors";
  const exitState = useExitOnCtrlCDWithKeybindings();
  const cliMode = parsedCommand.type === "marketplace" && parsedCommand.action === "add" && parsedCommand.target !== void 0;
  let t3;
  if ($[5] !== setAppState) {
    t3 = () => {
      setAppState(_temp1);
    };
    $[5] = setAppState;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  const markPluginsChanged = t3;
  let t4;
  if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = (tabId) => {
      const tab = tabId;
      setActiveTab(tab);
      setError(null);
      bb37: switch (tab) {
        case "discover": {
          setViewState({
            type: "discover-plugins"
          });
          break bb37;
        }
        case "installed": {
          setViewState({
            type: "manage-plugins"
          });
          break bb37;
        }
        case "marketplaces": {
          setViewState({
            type: "manage-marketplaces"
          });
          break bb37;
        }
        case "errors":
      }
    };
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  const handleTabChange = t4;
  let t5;
  let t6;
  if ($[8] !== onComplete || $[9] !== result || $[10] !== viewState.type) {
    t5 = () => {
      if (viewState.type === "menu" && !result) {
        onComplete();
      }
    };
    t6 = [viewState.type, result, onComplete];
    $[8] = onComplete;
    $[9] = result;
    $[10] = viewState.type;
    $[11] = t5;
    $[12] = t6;
  } else {
    t5 = $[11];
    t6 = $[12];
  }
  useEffect(t5, t6);
  let t7;
  let t8;
  if ($[13] !== activeTab || $[14] !== viewState.type) {
    t7 = () => {
      if (viewState.type === "browse-marketplace" && activeTab !== "discover") {
        setActiveTab("discover");
      }
    };
    t8 = [viewState.type, activeTab];
    $[13] = activeTab;
    $[14] = viewState.type;
    $[15] = t7;
    $[16] = t8;
  } else {
    t7 = $[15];
    t8 = $[16];
  }
  useEffect(t7, t8);
  let t9;
  if ($[17] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t9 = () => {
      setActiveTab("marketplaces");
      setViewState({
        type: "manage-marketplaces"
      });
      setInputValue("");
      setError(null);
    };
    $[17] = t9;
  } else {
    t9 = $[17];
  }
  const handleAddMarketplaceEscape = t9;
  const t10 = viewState.type === "add-marketplace";
  let t11;
  if ($[18] !== t10) {
    t11 = {
      context: "Settings",
      isActive: t10
    };
    $[18] = t10;
    $[19] = t11;
  } else {
    t11 = $[19];
  }
  useKeybinding("confirm:no", handleAddMarketplaceEscape, t11);
  let t12;
  let t13;
  if ($[20] !== onComplete || $[21] !== result) {
    t12 = () => {
      if (result) {
        onComplete(result);
      }
    };
    t13 = [result, onComplete];
    $[20] = onComplete;
    $[21] = result;
    $[22] = t12;
    $[23] = t13;
  } else {
    t12 = $[22];
    t13 = $[23];
  }
  useEffect(t12, t13);
  let t14;
  let t15;
  if ($[24] !== onComplete || $[25] !== viewState.type) {
    t14 = () => {
      if (viewState.type === "help") {
        onComplete();
      }
    };
    t15 = [viewState.type, onComplete];
    $[24] = onComplete;
    $[25] = viewState.type;
    $[26] = t14;
    $[27] = t15;
  } else {
    t14 = $[26];
    t15 = $[27];
  }
  useEffect(t14, t15);
  if (viewState.type === "help") {
    let t162;
    if ($[28] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t162 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Plugin Command Usage:"), /* @__PURE__ */ createElement(ThemedText, null, " "), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Installation:"), /* @__PURE__ */ createElement(ThemedText, null, " /plugin install - Browse and install plugins"), /* @__PURE__ */ createElement(ThemedText, null, " ", "/plugin install <marketplace> - Install from specific marketplace"), /* @__PURE__ */ createElement(ThemedText, null, " /plugin install <plugin> - Install specific plugin"), /* @__PURE__ */ createElement(ThemedText, null, " ", "/plugin install <plugin>@<market> - Install plugin from marketplace"), /* @__PURE__ */ createElement(ThemedText, null, " "), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Management:"), /* @__PURE__ */ createElement(ThemedText, null, " /plugin manage - Manage installed plugins"), /* @__PURE__ */ createElement(ThemedText, null, " /plugin enable <plugin> - Enable a plugin"), /* @__PURE__ */ createElement(ThemedText, null, " /plugin disable <plugin> - Disable a plugin"), /* @__PURE__ */ createElement(ThemedText, null, " /plugin uninstall <plugin> - Uninstall a plugin"), /* @__PURE__ */ createElement(ThemedText, null, " "), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Marketplaces:"), /* @__PURE__ */ createElement(ThemedText, null, " /plugin marketplace - Marketplace management menu"), /* @__PURE__ */ createElement(ThemedText, null, " /plugin marketplace add - Add a marketplace"), /* @__PURE__ */ createElement(ThemedText, null, " ", "/plugin marketplace add <path/url> - Add marketplace directly"), /* @__PURE__ */ createElement(ThemedText, null, " /plugin marketplace update - Update marketplaces"), /* @__PURE__ */ createElement(ThemedText, null, " ", "/plugin marketplace update <name> - Update specific marketplace"), /* @__PURE__ */ createElement(ThemedText, null, " /plugin marketplace remove - Remove a marketplace"), /* @__PURE__ */ createElement(ThemedText, null, " ", "/plugin marketplace remove <name> - Remove specific marketplace"), /* @__PURE__ */ createElement(ThemedText, null, " /plugin marketplace list - List all marketplaces"), /* @__PURE__ */ createElement(ThemedText, null, " "), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Validation:"), /* @__PURE__ */ createElement(ThemedText, null, " ", "/plugin validate <path> - Validate a manifest file or directory"), /* @__PURE__ */ createElement(ThemedText, null, " "), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Other:"), /* @__PURE__ */ createElement(ThemedText, null, " /plugin - Main plugin menu"), /* @__PURE__ */ createElement(ThemedText, null, " /plugin help - Show this help"), /* @__PURE__ */ createElement(ThemedText, null, " /plugins - Alias for /plugin"));
      $[28] = t162;
    } else {
      t162 = $[28];
    }
    return t162;
  }
  if (viewState.type === "validate") {
    let t162;
    if ($[29] !== onComplete || $[30] !== viewState.path) {
      t162 = /* @__PURE__ */ createElement(ValidatePlugin, { onComplete, path: viewState.path });
      $[29] = onComplete;
      $[30] = viewState.path;
      $[31] = t162;
    } else {
      t162 = $[31];
    }
    return t162;
  }
  if (viewState.type === "marketplace-menu") {
    setViewState({
      type: "menu"
    });
    return null;
  }
  if (viewState.type === "marketplace-list") {
    let t162;
    if ($[32] !== onComplete) {
      t162 = /* @__PURE__ */ createElement(MarketplaceList, { onComplete });
      $[32] = onComplete;
      $[33] = t162;
    } else {
      t162 = $[33];
    }
    return t162;
  }
  if (viewState.type === "add-marketplace") {
    let t162;
    if ($[34] !== cliMode || $[35] !== cursorOffset || $[36] !== error || $[37] !== inputValue || $[38] !== markPluginsChanged || $[39] !== result) {
      t162 = /* @__PURE__ */ createElement(AddMarketplace, { inputValue, setInputValue, cursorOffset, setCursorOffset, error, setError, result, setResult, setViewState, onAddComplete: markPluginsChanged, cliMode });
      $[34] = cliMode;
      $[35] = cursorOffset;
      $[36] = error;
      $[37] = inputValue;
      $[38] = markPluginsChanged;
      $[39] = result;
      $[40] = t162;
    } else {
      t162 = $[40];
    }
    return t162;
  }
  let t16;
  if ($[41] !== activeTab || $[42] !== showMcpRedirectMessage) {
    t16 = showMcpRedirectMessage && activeTab === "installed" ? /* @__PURE__ */ createElement(McpRedirectBanner, null) : void 0;
    $[41] = activeTab;
    $[42] = showMcpRedirectMessage;
    $[43] = t16;
  } else {
    t16 = $[43];
  }
  let t17;
  if ($[44] !== error || $[45] !== markPluginsChanged || $[46] !== result || $[47] !== viewState.targetMarketplace || $[48] !== viewState.targetPlugin || $[49] !== viewState.type) {
    t17 = /* @__PURE__ */ createElement(Tab, { id: "discover", title: "Discover" }, viewState.type === "browse-marketplace" ? /* @__PURE__ */ createElement(BrowseMarketplace, { error, setError, result, setResult, setViewState, onInstallComplete: markPluginsChanged, targetMarketplace: viewState.targetMarketplace, targetPlugin: viewState.targetPlugin }) : /* @__PURE__ */ createElement(DiscoverPlugins, { error, setError, result, setResult, setViewState, onInstallComplete: markPluginsChanged, onSearchModeChange: setChildSearchActive, targetPlugin: viewState.type === "discover-plugins" ? viewState.targetPlugin : void 0 }));
    $[44] = error;
    $[45] = markPluginsChanged;
    $[46] = result;
    $[47] = viewState.targetMarketplace;
    $[48] = viewState.targetPlugin;
    $[49] = viewState.type;
    $[50] = t17;
  } else {
    t17 = $[50];
  }
  const t18 = viewState.type === "manage-plugins" ? viewState.targetPlugin : void 0;
  const t19 = viewState.type === "manage-plugins" ? viewState.targetMarketplace : void 0;
  const t20 = viewState.type === "manage-plugins" ? viewState.action : void 0;
  let t21;
  if ($[51] !== markPluginsChanged || $[52] !== t18 || $[53] !== t19 || $[54] !== t20) {
    t21 = /* @__PURE__ */ createElement(Tab, { id: "installed", title: "Installed" }, /* @__PURE__ */ createElement(ManagePlugins, { setViewState, setResult, onManageComplete: markPluginsChanged, onSearchModeChange: setChildSearchActive, targetPlugin: t18, targetMarketplace: t19, action: t20 }));
    $[51] = markPluginsChanged;
    $[52] = t18;
    $[53] = t19;
    $[54] = t20;
    $[55] = t21;
  } else {
    t21 = $[55];
  }
  const t22 = viewState.type === "manage-marketplaces" ? viewState.targetMarketplace : void 0;
  const t23 = viewState.type === "manage-marketplaces" ? viewState.action : void 0;
  let t24;
  if ($[56] !== error || $[57] !== exitState || $[58] !== markPluginsChanged || $[59] !== t22 || $[60] !== t23) {
    t24 = /* @__PURE__ */ createElement(Tab, { id: "marketplaces", title: "Marketplaces" }, /* @__PURE__ */ createElement(ManageMarketplaces, { setViewState, error, setError, setResult, exitState, onManageComplete: markPluginsChanged, targetMarketplace: t22, action: t23 }));
    $[56] = error;
    $[57] = exitState;
    $[58] = markPluginsChanged;
    $[59] = t22;
    $[60] = t23;
    $[61] = t24;
  } else {
    t24 = $[61];
  }
  let t25;
  if ($[62] !== markPluginsChanged) {
    t25 = /* @__PURE__ */ createElement(ErrorsTabContent, { setViewState, setActiveTab, markPluginsChanged });
    $[62] = markPluginsChanged;
    $[63] = t25;
  } else {
    t25 = $[63];
  }
  let t26;
  if ($[64] !== errorsTabTitle || $[65] !== t25) {
    t26 = /* @__PURE__ */ createElement(Tab, { id: "errors", title: errorsTabTitle }, t25);
    $[64] = errorsTabTitle;
    $[65] = t25;
    $[66] = t26;
  } else {
    t26 = $[66];
  }
  let t27;
  if ($[67] !== activeTab || $[68] !== childSearchActive || $[69] !== t16 || $[70] !== t17 || $[71] !== t21 || $[72] !== t24 || $[73] !== t26) {
    t27 = /* @__PURE__ */ createElement(Pane, { color: "suggestion" }, /* @__PURE__ */ createElement(Tabs, { title: "Plugins", selectedTab: activeTab, onTabChange: handleTabChange, color: "suggestion", disableNavigation: childSearchActive, banner: t16 }, t17, t21, t24, t26));
    $[67] = activeTab;
    $[68] = childSearchActive;
    $[69] = t16;
    $[70] = t17;
    $[71] = t21;
    $[72] = t24;
    $[73] = t26;
    $[74] = t27;
  } else {
    t27 = $[74];
  }
  return t27;
}
function _temp1(prev) {
  return prev.plugins.needsRefresh ? prev : {
    ...prev,
    plugins: {
      ...prev.plugins,
      needsRefresh: true
    }
  };
}
function _temp0(s) {
  let count2 = s.plugins.errors.length;
  for (const m of s.plugins.installationStatus.marketplaces) {
    if (m.status === "failed") {
      count2++;
    }
  }
  return count2;
}
var TRANSIENT_ERROR_TYPES;
var init_PluginSettings = __esm({
  "src/commands/plugin/PluginSettings.tsx"() {
    init_react_compiler_runtime();
    init_figures();
    init_react();
    init_react();
    init_ConfigurableShortcutHint();
    init_Byline();
    init_Pane();
    init_Tabs();
    init_useExitOnCtrlCDWithKeybindings();
    init_ink();
    init_useKeybinding();
    init_AppState();
    init_errors();
    init_cacheUtils();
    init_marketplaceHelpers();
    init_marketplaceManager();
    init_pluginStartupCheck();
    init_settings();
    init_AddMarketplace();
    init_BrowseMarketplace();
    init_DiscoverPlugins();
    init_ManageMarketplaces();
    init_ManagePlugins();
    init_PluginErrors();
    init_parseArgs();
    init_ValidatePlugin();
    TRANSIENT_ERROR_TYPES = /* @__PURE__ */ new Set(["git-auth-failed", "git-timeout", "network-error"]);
  }
});

export {
  MCPRemoteServerMenu,
  init_MCPRemoteServerMenu,
  MCPStdioServerMenu,
  init_MCPStdioServerMenu,
  MCPToolDetailView,
  init_MCPToolDetailView,
  MCPToolListView,
  init_MCPToolListView,
  PluginSettings,
  init_PluginSettings
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL3BsdWdpbi9BZGRNYXJrZXRwbGFjZS50c3giLCAiLi4vLi4vc3JjL2NvbW1hbmRzL3BsdWdpbi9QbHVnaW5PcHRpb25zRGlhbG9nLnRzeCIsICIuLi8uLi9zcmMvY29tbWFuZHMvcGx1Z2luL1BsdWdpbk9wdGlvbnNGbG93LnRzeCIsICIuLi8uLi9zcmMvY29tbWFuZHMvcGx1Z2luL1BsdWdpblRydXN0V2FybmluZy50c3giLCAiLi4vLi4vc3JjL2NvbW1hbmRzL3BsdWdpbi9wbHVnaW5EZXRhaWxzSGVscGVycy50c3giLCAiLi4vLi4vc3JjL2NvbW1hbmRzL3BsdWdpbi91c2VQYWdpbmF0aW9uLnRzIiwgIi4uLy4uL3NyYy9jb21tYW5kcy9wbHVnaW4vQnJvd3NlTWFya2V0cGxhY2UudHN4IiwgIi4uLy4uL3NyYy9jb21tYW5kcy9wbHVnaW4vRGlzY292ZXJQbHVnaW5zLnRzeCIsICIuLi8uLi9zcmMvY29tbWFuZHMvcGx1Z2luL01hbmFnZU1hcmtldHBsYWNlcy50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvbWNwL0NhcGFiaWxpdGllc1NlY3Rpb24udHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL21jcC91dGlscy9yZWNvbm5lY3RIZWxwZXJzLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9tY3AvTUNQUmVtb3RlU2VydmVyTWVudS50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvbWNwL01DUFN0ZGlvU2VydmVyTWVudS50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvbWNwL01DUFRvb2xEZXRhaWxWaWV3LnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9tY3AvTUNQVG9vbExpc3RWaWV3LnRzeCIsICIuLi8uLi9zcmMvY29tbWFuZHMvcGx1Z2luL1BsdWdpbkVycm9ycy50c3giLCAiLi4vLi4vc3JjL2NvbW1hbmRzL3BsdWdpbi9VbmlmaWVkSW5zdGFsbGVkQ2VsbC50c3giLCAiLi4vLi4vc3JjL2NvbW1hbmRzL3BsdWdpbi9NYW5hZ2VQbHVnaW5zLnRzeCIsICIuLi8uLi9zcmMvY29tbWFuZHMvcGx1Z2luL3BhcnNlQXJncy50cyIsICIuLi8uLi9zcmMvY29tbWFuZHMvcGx1Z2luL1ZhbGlkYXRlUGx1Z2luLnRzeCIsICIuLi8uLi9zcmMvY29tbWFuZHMvcGx1Z2luL1BsdWdpblNldHRpbmdzLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHR5cGUgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgbG9nRXZlbnQsXG59IGZyb20gJ3NyYy9zZXJ2aWNlcy9hbmFseXRpY3MvaW5kZXguanMnXG5pbXBvcnQgeyBDb25maWd1cmFibGVTaG9ydGN1dEhpbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbmZpZ3VyYWJsZVNob3J0Y3V0SGludC5qcydcbmltcG9ydCB7IEJ5bGluZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGVzaWduLXN5c3RlbS9CeWxpbmUuanMnXG5pbXBvcnQgeyBLZXlib2FyZFNob3J0Y3V0SGludCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGVzaWduLXN5c3RlbS9LZXlib2FyZFNob3J0Y3V0SGludC5qcydcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NwaW5uZXIuanMnXG5pbXBvcnQgVGV4dElucHV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVGV4dElucHV0LmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdG9FcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzL2Vycm9ycy5qcydcbmltcG9ydCB7IGxvZ0Vycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nLmpzJ1xuaW1wb3J0IHsgY2xlYXJBbGxDYWNoZXMgfSBmcm9tICcuLi8uLi91dGlscy9wbHVnaW5zL2NhY2hlVXRpbHMuanMnXG5pbXBvcnQge1xuICBhZGRNYXJrZXRwbGFjZVNvdXJjZSxcbiAgc2F2ZU1hcmtldHBsYWNlVG9TZXR0aW5ncyxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvcGx1Z2lucy9tYXJrZXRwbGFjZU1hbmFnZXIuanMnXG5pbXBvcnQgeyBwYXJzZU1hcmtldHBsYWNlSW5wdXQgfSBmcm9tICcuLi8uLi91dGlscy9wbHVnaW5zL3BhcnNlTWFya2V0cGxhY2VJbnB1dC5qcydcbmltcG9ydCB0eXBlIHsgVmlld1N0YXRlIH0gZnJvbSAnLi90eXBlcy5qcydcblxudHlwZSBQcm9wcyA9IHtcbiAgaW5wdXRWYWx1ZTogc3RyaW5nXG4gIHNldElucHV0VmFsdWU6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG4gIGN1cnNvck9mZnNldDogbnVtYmVyXG4gIHNldEN1cnNvck9mZnNldDogKG9mZnNldDogbnVtYmVyKSA9PiB2b2lkXG4gIGVycm9yOiBzdHJpbmcgfCBudWxsXG4gIHNldEVycm9yOiAoZXJyb3I6IHN0cmluZyB8IG51bGwpID0+IHZvaWRcbiAgcmVzdWx0OiBzdHJpbmcgfCBudWxsXG4gIHNldFJlc3VsdDogKHJlc3VsdDogc3RyaW5nIHwgbnVsbCkgPT4gdm9pZFxuICBzZXRWaWV3U3RhdGU6IChzdGF0ZTogVmlld1N0YXRlKSA9PiB2b2lkXG4gIG9uQWRkQ29tcGxldGU/OiAoKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuICBjbGlNb2RlPzogYm9vbGVhblxufVxuXG5leHBvcnQgZnVuY3Rpb24gQWRkTWFya2V0cGxhY2Uoe1xuICBpbnB1dFZhbHVlLFxuICBzZXRJbnB1dFZhbHVlLFxuICBjdXJzb3JPZmZzZXQsXG4gIHNldEN1cnNvck9mZnNldCxcbiAgZXJyb3IsXG4gIHNldEVycm9yLFxuICByZXN1bHQsXG4gIHNldFJlc3VsdCxcbiAgc2V0Vmlld1N0YXRlLFxuICBvbkFkZENvbXBsZXRlLFxuICBjbGlNb2RlID0gZmFsc2UsXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IGhhc0F0dGVtcHRlZEF1dG9BZGQgPSB1c2VSZWYoZmFsc2UpXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtwcm9ncmVzc01lc3NhZ2UsIHNldFByb2dyZXNzTWVzc2FnZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKVxuXG4gIGNvbnN0IGhhbmRsZUFkZCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGlucHV0VmFsdWUudHJpbSgpXG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgc2V0RXJyb3IoJ1BsZWFzZSBlbnRlciBhIG1hcmtldHBsYWNlIHNvdXJjZScpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBwYXJzZWQgPSBhd2FpdCBwYXJzZU1hcmtldHBsYWNlSW5wdXQoaW5wdXQpXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIHNldEVycm9yKFxuICAgICAgICAnSW52YWxpZCBtYXJrZXRwbGFjZSBzb3VyY2UgZm9ybWF0LiBUcnk6IG93bmVyL3JlcG8sIGh0dHBzOi8vLi4uLCBvciAuL3BhdGgnLFxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgcGFyc2VNYXJrZXRwbGFjZUlucHV0IHJldHVybmVkIGFuIGVycm9yXG4gICAgaWYgKCdlcnJvcicgaW4gcGFyc2VkKSB7XG4gICAgICBzZXRFcnJvcihwYXJzZWQuZXJyb3IpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzZXRFcnJvcihudWxsKVxuXG4gICAgdHJ5IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgIHNldFByb2dyZXNzTWVzc2FnZSgnJylcbiAgICAgIGNvbnN0IHsgbmFtZSwgcmVzb2x2ZWRTb3VyY2UgfSA9IGF3YWl0IGFkZE1hcmtldHBsYWNlU291cmNlKFxuICAgICAgICBwYXJzZWQsXG4gICAgICAgIG1lc3NhZ2UgPT4ge1xuICAgICAgICAgIHNldFByb2dyZXNzTWVzc2FnZShtZXNzYWdlKVxuICAgICAgICB9LFxuICAgICAgKVxuICAgICAgc2F2ZU1hcmtldHBsYWNlVG9TZXR0aW5ncyhuYW1lLCB7IHNvdXJjZTogcmVzb2x2ZWRTb3VyY2UgfSlcbiAgICAgIGNsZWFyQWxsQ2FjaGVzKClcblxuICAgICAgbGV0IHNvdXJjZVR5cGUgPSBwYXJzZWQuc291cmNlXG4gICAgICBpZiAocGFyc2VkLnNvdXJjZSA9PT0gJ2dpdGh1YicpIHtcbiAgICAgICAgc291cmNlVHlwZSA9XG4gICAgICAgICAgcGFyc2VkLnJlcG8gYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIU1xuICAgICAgfVxuXG4gICAgICBsb2dFdmVudCgndGVuZ3VfbWFya2V0cGxhY2VfYWRkZWQnLCB7XG4gICAgICAgIHNvdXJjZV90eXBlOlxuICAgICAgICAgIHNvdXJjZVR5cGUgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgIH0pXG5cbiAgICAgIGlmIChvbkFkZENvbXBsZXRlKSB7XG4gICAgICAgIGF3YWl0IG9uQWRkQ29tcGxldGUoKVxuICAgICAgfVxuXG4gICAgICBzZXRQcm9ncmVzc01lc3NhZ2UoJycpXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuXG4gICAgICBpZiAoY2xpTW9kZSkge1xuICAgICAgICAvLyBJbiBDTEkgbW9kZSwgc2V0IHJlc3VsdCB0byB0cmlnZ2VyIGNvbXBsZXRpb25cbiAgICAgICAgc2V0UmVzdWx0KGBTdWNjZXNzZnVsbHkgYWRkZWQgbWFya2V0cGxhY2U6ICR7bmFtZX1gKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSW4gaW50ZXJhY3RpdmUgbW9kZSwgc3dpdGNoIHRvIGJyb3dzZSB2aWV3XG4gICAgICAgIHNldFZpZXdTdGF0ZSh7IHR5cGU6ICdicm93c2UtbWFya2V0cGxhY2UnLCB0YXJnZXRNYXJrZXRwbGFjZTogbmFtZSB9KVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc3QgZXJyb3IgPSB0b0Vycm9yKGVycilcbiAgICAgIGxvZ0Vycm9yKGVycm9yKVxuICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICAgIHNldFByb2dyZXNzTWVzc2FnZSgnJylcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG5cbiAgICAgIGlmIChjbGlNb2RlKSB7XG4gICAgICAgIC8vIEluIENMSSBtb2RlLCBzZXQgcmVzdWx0IHdpdGggZXJyb3IgdG8gdHJpZ2dlciBjb21wbGV0aW9uXG4gICAgICAgIHNldFJlc3VsdChgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0UmVzdWx0KG51bGwpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQXV0by1hZGQgaWYgaW5wdXRWYWx1ZSBpcyBwcm92aWRlZFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbnB1dFZhbHVlICYmICFoYXNBdHRlbXB0ZWRBdXRvQWRkLmN1cnJlbnQgJiYgIWVycm9yICYmICFyZXN1bHQpIHtcbiAgICAgIGhhc0F0dGVtcHRlZEF1dG9BZGQuY3VycmVudCA9IHRydWVcbiAgICAgIHZvaWQgaGFuZGxlQWRkKClcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L2NvcnJlY3RuZXNzL3VzZUV4aGF1c3RpdmVEZXBlbmRlbmNpZXM6IGludGVudGlvbmFsXG4gIH0sIFtdKSAvLyBPbmx5IHJ1biBvbmNlIG9uIG1vdW50XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIHBhZGRpbmdYPXsxfSBib3JkZXJTdHlsZT1cInJvdW5kXCI+XG4gICAgICAgIDxCb3ggbWFyZ2luQm90dG9tPXsxfT5cbiAgICAgICAgICA8VGV4dCBib2xkPkFkZCBNYXJrZXRwbGFjZTwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgIDxUZXh0PkVudGVyIG1hcmtldHBsYWNlIHNvdXJjZTo8L1RleHQ+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+RXhhbXBsZXM6PC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPiDCtyBvd25lci9yZXBvIChHaXRIdWIpPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPiDCtyBnaXRAZ2l0aHViLmNvbTpvd25lci9yZXBvLmdpdCAoU1NIKTwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj4gwrcgaHR0cHM6Ly9leGFtcGxlLmNvbS9tYXJrZXRwbGFjZS5qc29uPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPiDCtyAuL3BhdGgvdG8vbWFya2V0cGxhY2U8L1RleHQ+XG4gICAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldElucHV0VmFsdWV9XG4gICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVBZGR9XG4gICAgICAgICAgICAgIGNvbHVtbnM9ezgwfVxuICAgICAgICAgICAgICBjdXJzb3JPZmZzZXQ9e2N1cnNvck9mZnNldH1cbiAgICAgICAgICAgICAgb25DaGFuZ2VDdXJzb3JPZmZzZXQ9e3NldEN1cnNvck9mZnNldH1cbiAgICAgICAgICAgICAgZm9jdXNcbiAgICAgICAgICAgICAgc2hvd0N1cnNvclxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIHtpc0xvYWRpbmcgJiYgKFxuICAgICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAge3Byb2dyZXNzTWVzc2FnZSB8fCAnQWRkaW5nIG1hcmtldHBsYWNlIHRvIGNvbmZpZ3VyYXRpb27igKYnfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgICB7ZXJyb3IgJiYgKFxuICAgICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZXJyb3JcIj57ZXJyb3J9PC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgICB7cmVzdWx0ICYmIChcbiAgICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgICA8VGV4dD57cmVzdWx0fTwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgICAgPEJveCBtYXJnaW5MZWZ0PXszfT5cbiAgICAgICAgPFRleHQgZGltQ29sb3IgaXRhbGljPlxuICAgICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCJFbnRlclwiIGFjdGlvbj1cImFkZFwiIC8+XG4gICAgICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgICAgIGFjdGlvbj1cImNvbmZpcm06bm9cIlxuICAgICAgICAgICAgICBjb250ZXh0PVwiU2V0dGluZ3NcIlxuICAgICAgICAgICAgICBmYWxsYmFjaz1cIkVzY1wiXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiY2FuY2VsXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9CeWxpbmU+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApXG59XG4iLCAiaW1wb3J0IGZpZ3VyZXMgZnJvbSAnZmlndXJlcydcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IERpYWxvZyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGVzaWduLXN5c3RlbS9EaWFsb2cuanMnXG5pbXBvcnQgeyBzdHJpbmdXaWR0aCB9IGZyb20gJy4uLy4uL2luay9zdHJpbmdXaWR0aC5qcydcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjdXN0b20tcnVsZXMvcHJlZmVyLXVzZS1rZXliaW5kaW5ncyAtLSByYXcgdGV4dCBpbnB1dCBmb3IgY29uZmlnIGRpYWxvZ1xuaW1wb3J0IHsgQm94LCBUZXh0LCB1c2VJbnB1dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7XG4gIHVzZUtleWJpbmRpbmcsXG4gIHVzZUtleWJpbmRpbmdzLFxufSBmcm9tICcuLi8uLi9rZXliaW5kaW5ncy91c2VLZXliaW5kaW5nLmpzJ1xuaW1wb3J0IHsgaXNFbnZUcnV0aHkgfSBmcm9tICcuLi8uLi91dGlscy9lbnZVdGlscy5qcydcbmltcG9ydCB0eXBlIHtcbiAgUGx1Z2luT3B0aW9uU2NoZW1hLFxuICBQbHVnaW5PcHRpb25WYWx1ZXMsXG59IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvcGx1Z2luT3B0aW9uc1N0b3JhZ2UuanMnXG5cbi8qKlxuICogQnVpbGQgdGhlIG9uU2F2ZSBwYXlsb2FkIGZyb20gY29sbGVjdGVkIHN0cmluZyBpbnB1dHMuXG4gKlxuICogU2Vuc2l0aXZlIGZpZWxkcyBhcmUgbmV2ZXIgcHJlcG9wdWxhdGVkIGluIHRoZSB0ZXh0IGJ1ZmZlciAoc2VjdXJpdHkpLCBzb1xuICogYnkgdGhlIHRpbWUgdGhlIHVzZXIgcmVhY2hlcyB0aGUgbGFzdCBmaWVsZCBldmVyeSBzZW5zaXRpdmUgZmllbGQgdGhleVxuICogc3RlcHBlZCB0aHJvdWdoIGNvbnRhaW5zICcnIGluIGNvbGxlY3RlZC4gVG8gYXZvaWQgc2lsZW50bHkgd2lwaW5nIHNhdmVkXG4gKiBzZWNyZXRzIG9uIHJlY29uZmlndXJlOiBpZiBhIHNlbnNpdGl2ZSBmaWVsZCBpcyAnJyBBTkQgaW5pdGlhbFZhbHVlcyBoYXNcbiAqIGEgdmFsdWUgZm9yIGl0LCBPTUlUIHRoZSBrZXkgZW50aXJlbHkuIHNhdmVQbHVnaW5PcHRpb25zIG9ubHkgd3JpdGVzIGtleXNcbiAqIGl0IHJlY2VpdmVzLCBzbyBvbWl0dGluZyA9IGtlZXAgZXhpc3RpbmcuXG4gKlxuICogRXhwb3J0ZWQgZm9yIHVuaXQgdGVzdGluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRmluYWxWYWx1ZXMoXG4gIGZpZWxkczogc3RyaW5nW10sXG4gIGNvbGxlY3RlZDogUmVjb3JkPHN0cmluZywgc3RyaW5nPixcbiAgY29uZmlnU2NoZW1hOiBQbHVnaW5PcHRpb25TY2hlbWEsXG4gIGluaXRpYWxWYWx1ZXM6IFBsdWdpbk9wdGlvblZhbHVlcyB8IHVuZGVmaW5lZCxcbik6IFBsdWdpbk9wdGlvblZhbHVlcyB7XG4gIGNvbnN0IGZpbmFsVmFsdWVzOiBQbHVnaW5PcHRpb25WYWx1ZXMgPSB7fVxuICBmb3IgKGNvbnN0IGZpZWxkS2V5IG9mIGZpZWxkcykge1xuICAgIGNvbnN0IHNjaGVtYSA9IGNvbmZpZ1NjaGVtYVtmaWVsZEtleV1cbiAgICBjb25zdCB2YWx1ZSA9IGNvbGxlY3RlZFtmaWVsZEtleV0gPz8gJydcblxuICAgIGlmIChcbiAgICAgIHNjaGVtYT8uc2Vuc2l0aXZlID09PSB0cnVlICYmXG4gICAgICB2YWx1ZSA9PT0gJycgJiZcbiAgICAgIGluaXRpYWxWYWx1ZXM/LltmaWVsZEtleV0gIT09IHVuZGVmaW5lZFxuICAgICkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hPy50eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgLy8gTnVtYmVyKCcnKSByZXR1cm5zIDAsIG5vdCBOYU4g4oCUIG9taXQgYmxhbmsgbnVtYmVyIGlucHV0cyBzb1xuICAgICAgLy8gdmFsaWRhdGVVc2VyQ29uZmlnJ3MgcmVxdWlyZWQgY2hlY2sgYWN0dWFsbHkgY2F0Y2hlcyB0aGVtLlxuICAgICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gJycpIGNvbnRpbnVlXG4gICAgICBjb25zdCBudW0gPSBOdW1iZXIodmFsdWUpXG4gICAgICBmaW5hbFZhbHVlc1tmaWVsZEtleV0gPSBOdW1iZXIuaXNOYU4obnVtKSA/IHZhbHVlIDogbnVtXG4gICAgfSBlbHNlIGlmIChzY2hlbWE/LnR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgZmluYWxWYWx1ZXNbZmllbGRLZXldID0gaXNFbnZUcnV0aHkodmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbmFsVmFsdWVzW2ZpZWxkS2V5XSA9IHZhbHVlXG4gICAgfVxuICB9XG4gIHJldHVybiBmaW5hbFZhbHVlc1xufVxuXG50eXBlIFByb3BzID0ge1xuICB0aXRsZTogc3RyaW5nXG4gIHN1YnRpdGxlOiBzdHJpbmdcbiAgY29uZmlnU2NoZW1hOiBQbHVnaW5PcHRpb25TY2hlbWFcbiAgLyoqIFByZS1maWxsIGZpZWxkcyB3aGVuIHJlY29uZmlndXJpbmcuIFNlbnNpdGl2ZSBmaWVsZHMgYXJlIG5vdCBwcmVwb3B1bGF0ZWQuICovXG4gIGluaXRpYWxWYWx1ZXM/OiBQbHVnaW5PcHRpb25WYWx1ZXNcbiAgb25TYXZlOiAoY29uZmlnOiBQbHVnaW5PcHRpb25WYWx1ZXMpID0+IHZvaWRcbiAgb25DYW5jZWw6ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBsdWdpbk9wdGlvbnNEaWFsb2coe1xuICB0aXRsZSxcbiAgc3VidGl0bGUsXG4gIGNvbmZpZ1NjaGVtYSxcbiAgaW5pdGlhbFZhbHVlcyxcbiAgb25TYXZlLFxuICBvbkNhbmNlbCxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgZmllbGRzID0gT2JqZWN0LmtleXMoY29uZmlnU2NoZW1hKVxuXG4gIC8vIFByZXBvcHVsYXRlIGZyb20gaW5pdGlhbFZhbHVlcyBidXQgc2tpcCBzZW5zaXRpdmUgZmllbGRzIOKAlCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGVjaG8gc2VjcmV0cyBiYWNrIGludG8gdGhlIHRleHQgYnVmZmVyLlxuICBjb25zdCBpbml0aWFsRm9yID0gdXNlQ2FsbGJhY2soXG4gICAgKGtleTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmIChjb25maWdTY2hlbWFba2V5XT8uc2Vuc2l0aXZlID09PSB0cnVlKSByZXR1cm4gJydcbiAgICAgIGNvbnN0IHYgPSBpbml0aWFsVmFsdWVzPy5ba2V5XVxuICAgICAgcmV0dXJuIHYgPT09IHVuZGVmaW5lZCA/ICcnIDogU3RyaW5nKHYpXG4gICAgfSxcbiAgICBbY29uZmlnU2NoZW1hLCBpbml0aWFsVmFsdWVzXSxcbiAgKVxuXG4gIGNvbnN0IFtjdXJyZW50RmllbGRJbmRleCwgc2V0Q3VycmVudEZpZWxkSW5kZXhdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlPFJlY29yZDxzdHJpbmcsIHN0cmluZz4+KHt9KVxuICBjb25zdCBbY3VycmVudElucHV0LCBzZXRDdXJyZW50SW5wdXRdID0gdXNlU3RhdGUoKCkgPT5cbiAgICBmaWVsZHNbMF0gPyBpbml0aWFsRm9yKGZpZWxkc1swXSkgOiAnJyxcbiAgKVxuXG4gIGNvbnN0IGN1cnJlbnRGaWVsZCA9IGZpZWxkc1tjdXJyZW50RmllbGRJbmRleF1cbiAgY29uc3QgZmllbGRTY2hlbWEgPSBjdXJyZW50RmllbGQgPyBjb25maWdTY2hlbWFbY3VycmVudEZpZWxkXSA6IG51bGxcblxuICAvLyBVc2UgU2V0dGluZ3MgY29udGV4dCBzbyAnbicga2V5IGRvZXNuJ3QgY2FuY2VsIChhbGxvd3MgdHlwaW5nICduJyBpbiBpbnB1dCkuXG4gIC8vIGlzQ2FuY2VsQWN0aXZlPXtmYWxzZX0gb24gRGlhbG9nIGtlZXBzIGl0cyBvd24gY29uZmlybTpubyBvdXQgb2YgdGhlIHdheS5cbiAgdXNlS2V5YmluZGluZygnY29uZmlybTpubycsIG9uQ2FuY2VsLCB7IGNvbnRleHQ6ICdTZXR0aW5ncycgfSlcblxuICAvLyBUYWIgdG8gbmV4dCBmaWVsZFxuICBjb25zdCBoYW5kbGVOZXh0RmllbGQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRGaWVsZEluZGV4IDwgZmllbGRzLmxlbmd0aCAtIDEgJiYgY3VycmVudEZpZWxkKSB7XG4gICAgICBzZXRWYWx1ZXMocHJldiA9PiAoeyAuLi5wcmV2LCBbY3VycmVudEZpZWxkXTogY3VycmVudElucHV0IH0pKVxuICAgICAgc2V0Q3VycmVudEZpZWxkSW5kZXgocHJldiA9PiBwcmV2ICsgMSlcbiAgICAgIGNvbnN0IG5leHRLZXkgPSBmaWVsZHNbY3VycmVudEZpZWxkSW5kZXggKyAxXVxuICAgICAgc2V0Q3VycmVudElucHV0KG5leHRLZXkgPyBpbml0aWFsRm9yKG5leHRLZXkpIDogJycpXG4gICAgfVxuICB9LCBbY3VycmVudEZpZWxkSW5kZXgsIGZpZWxkcywgY3VycmVudEZpZWxkLCBjdXJyZW50SW5wdXQsIGluaXRpYWxGb3JdKVxuXG4gIC8vIEVudGVyIHRvIHNhdmUgY3VycmVudCBmaWVsZCBhbmQgbW92ZSB0byBuZXh0LCBvciBzYXZlIGFsbCBpZiBsYXN0XG4gIGNvbnN0IGhhbmRsZUNvbmZpcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFjdXJyZW50RmllbGQpIHJldHVyblxuXG4gICAgY29uc3QgbmV3VmFsdWVzID0geyAuLi52YWx1ZXMsIFtjdXJyZW50RmllbGRdOiBjdXJyZW50SW5wdXQgfVxuXG4gICAgaWYgKGN1cnJlbnRGaWVsZEluZGV4ID09PSBmaWVsZHMubGVuZ3RoIC0gMSkge1xuICAgICAgb25TYXZlKGJ1aWxkRmluYWxWYWx1ZXMoZmllbGRzLCBuZXdWYWx1ZXMsIGNvbmZpZ1NjaGVtYSwgaW5pdGlhbFZhbHVlcykpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE1vdmUgdG8gbmV4dCBmaWVsZFxuICAgICAgc2V0VmFsdWVzKG5ld1ZhbHVlcylcbiAgICAgIHNldEN1cnJlbnRGaWVsZEluZGV4KHByZXYgPT4gcHJldiArIDEpXG4gICAgICBjb25zdCBuZXh0S2V5ID0gZmllbGRzW2N1cnJlbnRGaWVsZEluZGV4ICsgMV1cbiAgICAgIHNldEN1cnJlbnRJbnB1dChuZXh0S2V5ID8gaW5pdGlhbEZvcihuZXh0S2V5KSA6ICcnKVxuICAgIH1cbiAgfSwgW1xuICAgIGN1cnJlbnRGaWVsZCxcbiAgICB2YWx1ZXMsXG4gICAgY3VycmVudElucHV0LFxuICAgIGN1cnJlbnRGaWVsZEluZGV4LFxuICAgIGZpZWxkcyxcbiAgICBjb25maWdTY2hlbWEsXG4gICAgb25TYXZlLFxuICAgIGluaXRpYWxGb3IsXG4gICAgaW5pdGlhbFZhbHVlcyxcbiAgXSlcblxuICB1c2VLZXliaW5kaW5ncyhcbiAgICB7XG4gICAgICAnY29uZmlybTpuZXh0RmllbGQnOiBoYW5kbGVOZXh0RmllbGQsXG4gICAgICAnY29uZmlybTp5ZXMnOiBoYW5kbGVDb25maXJtLFxuICAgIH0sXG4gICAgeyBjb250ZXh0OiAnQ29uZmlybWF0aW9uJyB9LFxuICApXG5cbiAgLy8gQ2hhcmFjdGVyIGlucHV0IGhhbmRsaW5nIChiYWNrc3BhY2UsIHR5cGluZylcbiAgdXNlSW5wdXQoKGNoYXIsIGtleSkgPT4ge1xuICAgIC8vIEJhY2tzcGFjZVxuICAgIGlmIChrZXkuYmFja3NwYWNlIHx8IGtleS5kZWxldGUpIHtcbiAgICAgIHNldEN1cnJlbnRJbnB1dChwcmV2ID0+IHByZXYuc2xpY2UoMCwgLTEpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gUmVndWxhciBjaGFyYWN0ZXIgaW5wdXRcbiAgICBpZiAoY2hhciAmJiAha2V5LmN0cmwgJiYgIWtleS5tZXRhICYmICFrZXkudGFiICYmICFrZXkucmV0dXJuKSB7XG4gICAgICBzZXRDdXJyZW50SW5wdXQocHJldiA9PiBwcmV2ICsgY2hhcilcbiAgICB9XG4gIH0pXG5cbiAgaWYgKCFmaWVsZFNjaGVtYSB8fCAhY3VycmVudEZpZWxkKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IGlzU2Vuc2l0aXZlID0gZmllbGRTY2hlbWEuc2Vuc2l0aXZlID09PSB0cnVlXG4gIGNvbnN0IGlzUmVxdWlyZWQgPSBmaWVsZFNjaGVtYS5yZXF1aXJlZCA9PT0gdHJ1ZVxuICBjb25zdCBkaXNwbGF5VmFsdWUgPSBpc1NlbnNpdGl2ZVxuICAgID8gJyonLnJlcGVhdChzdHJpbmdXaWR0aChjdXJyZW50SW5wdXQpKVxuICAgIDogY3VycmVudElucHV0XG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nXG4gICAgICB0aXRsZT17dGl0bGV9XG4gICAgICBzdWJ0aXRsZT17c3VidGl0bGV9XG4gICAgICBvbkNhbmNlbD17b25DYW5jZWx9XG4gICAgICBpc0NhbmNlbEFjdGl2ZT17ZmFsc2V9XG4gICAgPlxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIDxUZXh0IGJvbGQ9e3RydWV9PlxuICAgICAgICAgIHtmaWVsZFNjaGVtYS50aXRsZSB8fCBjdXJyZW50RmllbGR9XG4gICAgICAgICAge2lzUmVxdWlyZWQgJiYgPFRleHQgY29sb3I9XCJlcnJvclwiPiAqPC9UZXh0Pn1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICB7ZmllbGRTY2hlbWEuZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPXt0cnVlfT57ZmllbGRTY2hlbWEuZGVzY3JpcHRpb259PC9UZXh0PlxuICAgICAgICApfVxuXG4gICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICA8VGV4dD57ZmlndXJlcy5wb2ludGVyU21hbGx9IDwvVGV4dD5cbiAgICAgICAgICA8VGV4dD57ZGlzcGxheVZhbHVlfTwvVGV4dD5cbiAgICAgICAgICA8VGV4dD7ilog8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj17dHJ1ZX0+XG4gICAgICAgICAgRmllbGQge2N1cnJlbnRGaWVsZEluZGV4ICsgMX0gb2Yge2ZpZWxkcy5sZW5ndGh9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAge2N1cnJlbnRGaWVsZEluZGV4IDwgZmllbGRzLmxlbmd0aCAtIDEgJiYgKFxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPXt0cnVlfT5cbiAgICAgICAgICAgIFRhYjogTmV4dCBmaWVsZCDCtyBFbnRlcjogU2F2ZSBhbmQgY29udGludWVcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICl9XG4gICAgICAgIHtjdXJyZW50RmllbGRJbmRleCA9PT0gZmllbGRzLmxlbmd0aCAtIDEgJiYgKFxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPXt0cnVlfT5FbnRlcjogU2F2ZSBjb25maWd1cmF0aW9uPC9UZXh0PlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgPC9EaWFsb2c+XG4gIClcbn1cbiIsICIvKipcbiAqIFBvc3QtaW5zdGFsbC9wb3N0LWVuYWJsZSBjb25maWcgcHJvbXB0LlxuICpcbiAqIEdpdmVuIGEgTG9hZGVkUGx1Z2luLCBjaGVja3MgYm90aCB0aGUgdG9wLWxldmVsIG1hbmlmZXN0LnVzZXJDb25maWcgYW5kIHRoZVxuICogY2hhbm5lbC1zcGVjaWZpYyB1c2VyQ29uZmlnLiBXYWxrcyBQbHVnaW5PcHRpb25zRGlhbG9nIHRocm91Z2ggZWFjaFxuICogdW5jb25maWd1cmVkIGl0ZW0sIHNhdmluZyB2aWEgdGhlIGFwcHJvcHJpYXRlIHN0b3JhZ2UgZnVuY3Rpb24uIENhbGxzXG4gKiBvbkRvbmUoJ3NraXBwZWQnKSBpbW1lZGlhdGVseSBpZiBub3RoaW5nIG5lZWRzIGZpbGxpbmcuXG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IExvYWRlZFBsdWdpbiB9IGZyb20gJy4uLy4uL3R5cGVzL3BsdWdpbi5qcydcbmltcG9ydCB7IGVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Vycm9ycy5qcydcbmltcG9ydCB7XG4gIGxvYWRNY3BTZXJ2ZXJVc2VyQ29uZmlnLFxuICBzYXZlTWNwU2VydmVyVXNlckNvbmZpZyxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvcGx1Z2lucy9tY3BiSGFuZGxlci5qcydcbmltcG9ydCB7XG4gIGdldFVuY29uZmlndXJlZENoYW5uZWxzLFxuICB0eXBlIFVuY29uZmlndXJlZENoYW5uZWwsXG59IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvbWNwUGx1Z2luSW50ZWdyYXRpb24uanMnXG5pbXBvcnQgeyBsb2FkQWxsUGx1Z2lucyB9IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvcGx1Z2luTG9hZGVyLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0VW5jb25maWd1cmVkT3B0aW9ucyxcbiAgbG9hZFBsdWdpbk9wdGlvbnMsXG4gIHR5cGUgUGx1Z2luT3B0aW9uU2NoZW1hLFxuICB0eXBlIFBsdWdpbk9wdGlvblZhbHVlcyxcbiAgc2F2ZVBsdWdpbk9wdGlvbnMsXG59IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvcGx1Z2luT3B0aW9uc1N0b3JhZ2UuanMnXG5pbXBvcnQgeyBQbHVnaW5PcHRpb25zRGlhbG9nIH0gZnJvbSAnLi9QbHVnaW5PcHRpb25zRGlhbG9nLmpzJ1xuXG4vKipcbiAqIFBvc3QtaW5zdGFsbCBsb29rdXA6IHJldHVybiB0aGUgTG9hZGVkUGx1Z2luIGZvciB0aGUganVzdC1pbnN0YWxsZWRcbiAqIHBsdWdpbklkIHNvIHRoZSBjYWxsZXIgY2FuIGRpdmVydCB0byBQbHVnaW5PcHRpb25zRmxvdy4gUmV0dXJucyB1bmRlZmluZWRcbiAqIGlmIHRoZSBwbHVnaW4gc29tZWhvdyBkaWRuJ3QgbWFrZSBpdCBpbnRvIHRoZSBmcmVzaCBsb2FkIOKAlCBjYWxsZXJzIHRyZWF0XG4gKiB1bmRlZmluZWQgYXMgXCJjYXJyeSBvbiBjbG9zaW5nLlwiXG4gKlxuICogSW5zdGFsbCBzaG91bGQgaGF2ZSBjbGVhcmVkIGNhY2hlcyBhbHJlYWR5OyBsb2FkQWxsUGx1Z2lucyByZWFkcyBmcmVzaC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmRQbHVnaW5PcHRpb25zVGFyZ2V0KFxuICBwbHVnaW5JZDogc3RyaW5nLFxuKTogUHJvbWlzZTxMb2FkZWRQbHVnaW4gfCB1bmRlZmluZWQ+IHtcbiAgY29uc3QgeyBlbmFibGVkLCBkaXNhYmxlZCB9ID0gYXdhaXQgbG9hZEFsbFBsdWdpbnMoKVxuICByZXR1cm4gWy4uLmVuYWJsZWQsIC4uLmRpc2FibGVkXS5maW5kKFxuICAgIHAgPT4gcC5yZXBvc2l0b3J5ID09PSBwbHVnaW5JZCB8fCBwLnNvdXJjZSA9PT0gcGx1Z2luSWQsXG4gIClcbn1cblxuLyoqXG4gKiBBIHNpbmdsZSBkaWFsb2cgc3RlcCBpbiB0aGUgd2Fsay4gVG9wLWxldmVsIG9wdGlvbnMgYW5kIGNoYW5uZWxzIGJvdGhcbiAqIGNvbGxhcHNlIHRvIHRoaXMgc2hhcGUg4oCUIHRoZSBvbmx5IGRpZmZlcmVuY2UgaXMgd2hpY2ggc2F2ZSBmdW5jdGlvbiBydW5zLlxuICovXG50eXBlIENvbmZpZ1N0ZXAgPSB7XG4gIGtleTogc3RyaW5nXG4gIHRpdGxlOiBzdHJpbmdcbiAgc3VidGl0bGU6IHN0cmluZ1xuICBzY2hlbWE6IFBsdWdpbk9wdGlvblNjaGVtYVxuICAvKiogUmV0dXJucyBhbnkgYWxyZWFkeS1zYXZlZCB2YWx1ZXMgc28gUGx1Z2luT3B0aW9uc0RpYWxvZyBjYW4gcHJlLWZpbGwgYW5kXG4gICAqICBza2lwIHVuY2hhbmdlZCBzZW5zaXRpdmUgZmllbGRzIG9uIHJlY29uZmlndXJlLiAqL1xuICBsb2FkOiAoKSA9PiBQbHVnaW5PcHRpb25WYWx1ZXMgfCB1bmRlZmluZWRcbiAgc2F2ZTogKHZhbHVlczogUGx1Z2luT3B0aW9uVmFsdWVzKSA9PiB2b2lkXG59XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBsdWdpbjogTG9hZGVkUGx1Z2luXG4gIC8qKiBgbmFtZUBtYXJrZXRwbGFjZWAg4oCUIHRoZSBzYXZlUGx1Z2luT3B0aW9ucyAvIHNhdmVNY3BTZXJ2ZXJVc2VyQ29uZmlnIGtleS4gKi9cbiAgcGx1Z2luSWQ6IHN0cmluZ1xuICAvKipcbiAgICogYGNvbmZpZ3VyZWRgID0gdXNlciBmaWxsZWQgYWxsIGZpZWxkcy4gYHNraXBwZWRgID0gbm90aGluZyBuZWVkZWRcbiAgICogY29uZmlndXJpbmcsIG9yIHVzZXIgaGl0IGNhbmNlbC4gYGVycm9yYCA9IHNhdmUgdGhyZXcuXG4gICAqL1xuICBvbkRvbmU6IChvdXRjb21lOiAnY29uZmlndXJlZCcgfCAnc2tpcHBlZCcgfCAnZXJyb3InLCBkZXRhaWw/OiBzdHJpbmcpID0+IHZvaWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBsdWdpbk9wdGlvbnNGbG93KHtcbiAgcGx1Z2luLFxuICBwbHVnaW5JZCxcbiAgb25Eb25lLFxufTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICAvLyBCdWlsZCB0aGUgc3RlcCBsaXN0IG9uY2UgYXQgbW91bnQuIFJlLWNhbGxpbmcgYWZ0ZXIgYSBzYXZlIHdvdWxkIGRyb3AgdGhlXG4gIC8vIGl0ZW0gd2UganVzdCBjb25maWd1cmVkLlxuICBjb25zdCBbc3RlcHNdID0gUmVhY3QudXNlU3RhdGU8Q29uZmlnU3RlcFtdPigoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0OiBDb25maWdTdGVwW10gPSBbXVxuXG4gICAgLy8gVG9wLWxldmVsIG1hbmlmZXN0LnVzZXJDb25maWdcbiAgICBjb25zdCB1bmNvbmZpZ3VyZWQgPSBnZXRVbmNvbmZpZ3VyZWRPcHRpb25zKHBsdWdpbilcbiAgICBpZiAoT2JqZWN0LmtleXModW5jb25maWd1cmVkKS5sZW5ndGggPiAwKSB7XG4gICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgIGtleTogJ3RvcC1sZXZlbCcsXG4gICAgICAgIHRpdGxlOiBgQ29uZmlndXJlICR7cGx1Z2luLm5hbWV9YCxcbiAgICAgICAgc3VidGl0bGU6ICdQbHVnaW4gb3B0aW9ucycsXG4gICAgICAgIHNjaGVtYTogdW5jb25maWd1cmVkLFxuICAgICAgICBsb2FkOiAoKSA9PiBsb2FkUGx1Z2luT3B0aW9ucyhwbHVnaW5JZCksXG4gICAgICAgIHNhdmU6IHZhbHVlcyA9PlxuICAgICAgICAgIHNhdmVQbHVnaW5PcHRpb25zKHBsdWdpbklkLCB2YWx1ZXMsIHBsdWdpbi5tYW5pZmVzdC51c2VyQ29uZmlnISksXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIFBlci1jaGFubmVsIHVzZXJDb25maWcgKGFzc2lzdGFudC1tb2RlIGNoYW5uZWxzKVxuICAgIGNvbnN0IGNoYW5uZWxzOiBVbmNvbmZpZ3VyZWRDaGFubmVsW10gPSBnZXRVbmNvbmZpZ3VyZWRDaGFubmVscyhwbHVnaW4pXG4gICAgZm9yIChjb25zdCBjaGFubmVsIG9mIGNoYW5uZWxzKSB7XG4gICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgIGtleTogYGNoYW5uZWw6JHtjaGFubmVsLnNlcnZlcn1gLFxuICAgICAgICB0aXRsZTogYENvbmZpZ3VyZSAke2NoYW5uZWwuZGlzcGxheU5hbWV9YCxcbiAgICAgICAgc3VidGl0bGU6IGBQbHVnaW46ICR7cGx1Z2luLm5hbWV9YCxcbiAgICAgICAgc2NoZW1hOiBjaGFubmVsLmNvbmZpZ1NjaGVtYSxcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBsb2FkTWNwU2VydmVyVXNlckNvbmZpZyhwbHVnaW5JZCwgY2hhbm5lbC5zZXJ2ZXIpID8/IHVuZGVmaW5lZCxcbiAgICAgICAgc2F2ZTogdmFsdWVzID0+XG4gICAgICAgICAgc2F2ZU1jcFNlcnZlclVzZXJDb25maWcoXG4gICAgICAgICAgICBwbHVnaW5JZCxcbiAgICAgICAgICAgIGNoYW5uZWwuc2VydmVyLFxuICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgY2hhbm5lbC5jb25maWdTY2hlbWEsXG4gICAgICAgICAgKSxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KVxuXG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gUmVhY3QudXNlU3RhdGUoMClcblxuICAvLyBMYXRlc3QtcmVmOiBsZXRzIHRoZSBlZmZlY3QgY2xvc2Ugb3ZlciB0aGUgY3VycmVudCBvbkRvbmUgd2l0aG91dFxuICAvLyByZS1ydW5uaW5nIHdoZW4gdGhlIHBhcmVudCByZS1yZW5kZXJzLlxuICBjb25zdCBvbkRvbmVSZWYgPSBSZWFjdC51c2VSZWYob25Eb25lKVxuICBvbkRvbmVSZWYuY3VycmVudCA9IG9uRG9uZVxuXG4gIC8vIE5vdGhpbmcgdG8gY29uZmlndXJlIOKGkiB0ZWxsIHRoZSBjYWxsZXIgYW5kIHJlbmRlciBub3RoaW5nLiBFZmZlY3QsXG4gIC8vIG5vdCBpbmxpbmUgY2FsbDogY2FsbGluZyBzZXRTdGF0ZSBpbiB0aGUgcGFyZW50IGR1cmluZyBvdXIgcmVuZGVyXG4gIC8vIGlzIGEgUmVhY3QgcnVsZXMtb2YtaG9va3MgdmlvbGF0aW9uLlxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzdGVwcy5sZW5ndGggPT09IDApIHtcbiAgICAgIG9uRG9uZVJlZi5jdXJyZW50KCdza2lwcGVkJylcbiAgICB9XG4gIH0sIFtzdGVwcy5sZW5ndGhdKVxuXG4gIGlmIChzdGVwcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgY3VycmVudCA9IHN0ZXBzW2luZGV4XSFcblxuICBmdW5jdGlvbiBoYW5kbGVTYXZlKHZhbHVlczogUGx1Z2luT3B0aW9uVmFsdWVzKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGN1cnJlbnQuc2F2ZSh2YWx1ZXMpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBvbkRvbmUoJ2Vycm9yJywgZXJyb3JNZXNzYWdlKGVycikpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgbmV4dCA9IGluZGV4ICsgMVxuICAgIGlmIChuZXh0IDwgc3RlcHMubGVuZ3RoKSB7XG4gICAgICBzZXRJbmRleChuZXh0KVxuICAgIH0gZWxzZSB7XG4gICAgICBvbkRvbmUoJ2NvbmZpZ3VyZWQnKVxuICAgIH1cbiAgfVxuXG4gIC8vIGtleSBmb3JjZXMgYSByZW1vdW50IHdoZW4gYWR2YW5jaW5nIHRvIHRoZSBuZXh0IHN0ZXAg4oCUIFJlYWN0IHdvdWxkXG4gIC8vIG90aGVyd2lzZSByZXVzZSB0aGUgaW5zdGFuY2UgYW5kIGNhcnJ5IFBsdWdpbk9wdGlvbnNEaWFsb2cnc1xuICAvLyBpbnRlcm5hbCB1c2VTdGF0ZSAoZmllbGQgaW5kZXgsIHR5cGVkIHZhbHVlcykgb3Zlci5cbiAgcmV0dXJuIChcbiAgICA8UGx1Z2luT3B0aW9uc0RpYWxvZ1xuICAgICAga2V5PXtjdXJyZW50LmtleX1cbiAgICAgIHRpdGxlPXtjdXJyZW50LnRpdGxlfVxuICAgICAgc3VidGl0bGU9e2N1cnJlbnQuc3VidGl0bGV9XG4gICAgICBjb25maWdTY2hlbWE9e2N1cnJlbnQuc2NoZW1hfVxuICAgICAgaW5pdGlhbFZhbHVlcz17Y3VycmVudC5sb2FkKCl9XG4gICAgICBvblNhdmU9e2hhbmRsZVNhdmV9XG4gICAgICBvbkNhbmNlbD17KCkgPT4gb25Eb25lKCdza2lwcGVkJyl9XG4gICAgLz5cbiAgKVxufVxuIiwgImltcG9ydCBmaWd1cmVzIGZyb20gJ2ZpZ3VyZXMnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7IGdldFBsdWdpblRydXN0TWVzc2FnZSB9IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvbWFya2V0cGxhY2VIZWxwZXJzLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gUGx1Z2luVHJ1c3RXYXJuaW5nKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IGN1c3RvbU1lc3NhZ2UgPSBnZXRQbHVnaW5UcnVzdE1lc3NhZ2UoKVxuICByZXR1cm4gKFxuICAgIDxCb3ggbWFyZ2luQm90dG9tPXsxfT5cbiAgICAgIDxUZXh0IGNvbG9yPVwiY2xhdWRlXCI+e2ZpZ3VyZXMud2FybmluZ30gPC9UZXh0PlxuICAgICAgPFRleHQgZGltQ29sb3IgaXRhbGljPlxuICAgICAgICBNYWtlIHN1cmUgeW91IHRydXN0IGEgcGx1Z2luIGJlZm9yZSBpbnN0YWxsaW5nLCB1cGRhdGluZywgb3IgdXNpbmcgaXQuXG4gICAgICAgIEFudGhyb3BpYyBkb2VzIG5vdCBjb250cm9sIHdoYXQgTUNQIHNlcnZlcnMsIGZpbGVzLCBvciBvdGhlciBzb2Z0d2FyZVxuICAgICAgICBhcmUgaW5jbHVkZWQgaW4gcGx1Z2lucyBhbmQgY2Fubm90IHZlcmlmeSB0aGF0IHRoZXkgd2lsbCB3b3JrIGFzXG4gICAgICAgIGludGVuZGVkIG9yIHRoYXQgdGhleSB3b24mYXBvczt0IGNoYW5nZS4gU2VlIGVhY2ggcGx1Z2luJmFwb3M7cyBob21lcGFnZVxuICAgICAgICBmb3IgbW9yZSBpbmZvcm1hdGlvbi57Y3VzdG9tTWVzc2FnZSA/IGAgJHtjdXN0b21NZXNzYWdlfWAgOiAnJ31cbiAgICAgIDwvVGV4dD5cbiAgICA8L0JveD5cbiAgKVxufVxuIiwgIi8qKlxuICogU2hhcmVkIGhlbHBlciBmdW5jdGlvbnMgYW5kIHR5cGVzIGZvciBwbHVnaW4gZGV0YWlscyB2aWV3c1xuICpcbiAqIFVzZWQgYnkgYm90aCBEaXNjb3ZlclBsdWdpbnMgYW5kIEJyb3dzZU1hcmtldHBsYWNlIGNvbXBvbmVudHMuXG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb25maWd1cmFibGVTaG9ydGN1dEhpbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbmZpZ3VyYWJsZVNob3J0Y3V0SGludC5qcydcbmltcG9ydCB7IEJ5bGluZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGVzaWduLXN5c3RlbS9CeWxpbmUuanMnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQgdHlwZSB7IFBsdWdpbk1hcmtldHBsYWNlRW50cnkgfSBmcm9tICcuLi8uLi91dGlscy9wbHVnaW5zL3NjaGVtYXMuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHBsdWdpbiBhdmFpbGFibGUgZm9yIGluc3RhbGxhdGlvbiBmcm9tIGEgbWFya2V0cGxhY2VcbiAqL1xuZXhwb3J0IHR5cGUgSW5zdGFsbGFibGVQbHVnaW4gPSB7XG4gIGVudHJ5OiBQbHVnaW5NYXJrZXRwbGFjZUVudHJ5XG4gIG1hcmtldHBsYWNlTmFtZTogc3RyaW5nXG4gIHBsdWdpbklkOiBzdHJpbmdcbiAgaXNJbnN0YWxsZWQ6IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBNZW51IG9wdGlvbiBmb3IgcGx1Z2luIGRldGFpbHMgdmlld1xuICovXG5leHBvcnQgdHlwZSBQbHVnaW5EZXRhaWxzTWVudU9wdGlvbiA9IHtcbiAgbGFiZWw6IHN0cmluZ1xuICBhY3Rpb246IHN0cmluZ1xufVxuXG4vKipcbiAqIEV4dHJhY3QgR2l0SHViIHJlcG8gaW5mbyBmcm9tIGEgcGx1Z2luJ3Mgc291cmNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0R2l0SHViUmVwbyhwbHVnaW46IEluc3RhbGxhYmxlUGx1Z2luKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IGlzR2l0SHViID1cbiAgICBwbHVnaW4uZW50cnkuc291cmNlICYmXG4gICAgdHlwZW9mIHBsdWdpbi5lbnRyeS5zb3VyY2UgPT09ICdvYmplY3QnICYmXG4gICAgJ3NvdXJjZScgaW4gcGx1Z2luLmVudHJ5LnNvdXJjZSAmJlxuICAgIHBsdWdpbi5lbnRyeS5zb3VyY2Uuc291cmNlID09PSAnZ2l0aHViJ1xuXG4gIGlmIChcbiAgICBpc0dpdEh1YiAmJlxuICAgIHR5cGVvZiBwbHVnaW4uZW50cnkuc291cmNlID09PSAnb2JqZWN0JyAmJlxuICAgICdyZXBvJyBpbiBwbHVnaW4uZW50cnkuc291cmNlXG4gICkge1xuICAgIHJldHVybiBwbHVnaW4uZW50cnkuc291cmNlLnJlcG9cbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbi8qKlxuICogQnVpbGQgbWVudSBvcHRpb25zIGZvciBwbHVnaW4gZGV0YWlscyB2aWV3IHdpdGggc2NvcGVkIGluc3RhbGxhdGlvbiBvcHRpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFBsdWdpbkRldGFpbHNNZW51T3B0aW9ucyhcbiAgaGFzSG9tZXBhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgZ2l0aHViUmVwbzogc3RyaW5nIHwgbnVsbCxcbik6IFBsdWdpbkRldGFpbHNNZW51T3B0aW9uW10ge1xuICBjb25zdCBvcHRpb25zOiBQbHVnaW5EZXRhaWxzTWVudU9wdGlvbltdID0gW1xuICAgIHsgbGFiZWw6ICdJbnN0YWxsIGZvciB5b3UgKHVzZXIgc2NvcGUpJywgYWN0aW9uOiAnaW5zdGFsbC11c2VyJyB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnSW5zdGFsbCBmb3IgYWxsIGNvbGxhYm9yYXRvcnMgb24gdGhpcyByZXBvc2l0b3J5IChwcm9qZWN0IHNjb3BlKScsXG4gICAgICBhY3Rpb246ICdpbnN0YWxsLXByb2plY3QnLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdJbnN0YWxsIGZvciB5b3UsIGluIHRoaXMgcmVwbyBvbmx5IChsb2NhbCBzY29wZSknLFxuICAgICAgYWN0aW9uOiAnaW5zdGFsbC1sb2NhbCcsXG4gICAgfSxcbiAgXVxuICBpZiAoaGFzSG9tZXBhZ2UpIHtcbiAgICBvcHRpb25zLnB1c2goeyBsYWJlbDogJ09wZW4gaG9tZXBhZ2UnLCBhY3Rpb246ICdob21lcGFnZScgfSlcbiAgfVxuICBpZiAoZ2l0aHViUmVwbykge1xuICAgIG9wdGlvbnMucHVzaCh7IGxhYmVsOiAnVmlldyBvbiBHaXRIdWInLCBhY3Rpb246ICdnaXRodWInIH0pXG4gIH1cbiAgb3B0aW9ucy5wdXNoKHsgbGFiZWw6ICdCYWNrIHRvIHBsdWdpbiBsaXN0JywgYWN0aW9uOiAnYmFjaycgfSlcbiAgcmV0dXJuIG9wdGlvbnNcbn1cblxuLyoqXG4gKiBLZXkgaGludCBjb21wb25lbnQgZm9yIHBsdWdpbiBzZWxlY3Rpb24gc2NyZWVuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gUGx1Z2luU2VsZWN0aW9uS2V5SGludCh7XG4gIGhhc1NlbGVjdGlvbixcbn06IHtcbiAgaGFzU2VsZWN0aW9uOiBib29sZWFuXG59KTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICA8VGV4dCBkaW1Db2xvciBpdGFsaWM+XG4gICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAge2hhc1NlbGVjdGlvbiAmJiAoXG4gICAgICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgICAgIGFjdGlvbj1cInBsdWdpbjppbnN0YWxsXCJcbiAgICAgICAgICAgICAgY29udGV4dD1cIlBsdWdpblwiXG4gICAgICAgICAgICAgIGZhbGxiYWNrPVwiaVwiXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiaW5zdGFsbFwiXG4gICAgICAgICAgICAgIGJvbGRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgICBhY3Rpb249XCJwbHVnaW46dG9nZ2xlXCJcbiAgICAgICAgICAgIGNvbnRleHQ9XCJQbHVnaW5cIlxuICAgICAgICAgICAgZmFsbGJhY2s9XCJTcGFjZVwiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cInRvZ2dsZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgICBhY3Rpb249XCJzZWxlY3Q6YWNjZXB0XCJcbiAgICAgICAgICAgIGNvbnRleHQ9XCJTZWxlY3RcIlxuICAgICAgICAgICAgZmFsbGJhY2s9XCJFbnRlclwiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cImRldGFpbHNcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludFxuICAgICAgICAgICAgYWN0aW9uPVwiY29uZmlybTpub1wiXG4gICAgICAgICAgICBjb250ZXh0PVwiQ29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgIGZhbGxiYWNrPVwiRXNjXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiYmFja1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9CeWxpbmU+XG4gICAgICA8L1RleHQ+XG4gICAgPC9Cb3g+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IERFRkFVTFRfTUFYX1ZJU0lCTEUgPSA1XG5cbnR5cGUgVXNlUGFnaW5hdGlvbk9wdGlvbnMgPSB7XG4gIHRvdGFsSXRlbXM6IG51bWJlclxuICBtYXhWaXNpYmxlPzogbnVtYmVyXG4gIHNlbGVjdGVkSW5kZXg/OiBudW1iZXJcbn1cblxudHlwZSBVc2VQYWdpbmF0aW9uUmVzdWx0PFQ+ID0ge1xuICAvLyBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCBwYWdlLWJhc2VkIHRlcm1pbm9sb2d5XG4gIGN1cnJlbnRQYWdlOiBudW1iZXJcbiAgdG90YWxQYWdlczogbnVtYmVyXG4gIHN0YXJ0SW5kZXg6IG51bWJlclxuICBlbmRJbmRleDogbnVtYmVyXG4gIG5lZWRzUGFnaW5hdGlvbjogYm9vbGVhblxuICBwYWdlU2l6ZTogbnVtYmVyXG4gIC8vIEdldCB2aXNpYmxlIHNsaWNlIG9mIGl0ZW1zXG4gIGdldFZpc2libGVJdGVtczogKGl0ZW1zOiBUW10pID0+IFRbXVxuICAvLyBDb252ZXJ0IHZpc2libGUgaW5kZXggdG8gYWN0dWFsIGluZGV4XG4gIHRvQWN0dWFsSW5kZXg6ICh2aXNpYmxlSW5kZXg6IG51bWJlcikgPT4gbnVtYmVyXG4gIC8vIENoZWNrIGlmIGFjdHVhbCBpbmRleCBpcyB2aXNpYmxlXG4gIGlzT25DdXJyZW50UGFnZTogKGFjdHVhbEluZGV4OiBudW1iZXIpID0+IGJvb2xlYW5cbiAgLy8gTmF2aWdhdGlvbiAoa2VwdCBmb3IgQVBJIGNvbXBhdGliaWxpdHkpXG4gIGdvVG9QYWdlOiAocGFnZTogbnVtYmVyKSA9PiB2b2lkXG4gIG5leHRQYWdlOiAoKSA9PiB2b2lkXG4gIHByZXZQYWdlOiAoKSA9PiB2b2lkXG4gIC8vIEhhbmRsZSBzZWxlY3Rpb24gLSBqdXN0IHVwZGF0ZXMgdGhlIGluZGV4LCBzY3JvbGxpbmcgaXMgYXV0b21hdGljXG4gIGhhbmRsZVNlbGVjdGlvbkNoYW5nZTogKFxuICAgIG5ld0luZGV4OiBudW1iZXIsXG4gICAgc2V0U2VsZWN0ZWRJbmRleDogKGluZGV4OiBudW1iZXIpID0+IHZvaWQsXG4gICkgPT4gdm9pZFxuICAvLyBQYWdlIG5hdmlnYXRpb24gLSByZXR1cm5zIGZhbHNlIGZvciBjb250aW51b3VzIHNjcm9sbGluZyAobm90IG5lZWRlZClcbiAgaGFuZGxlUGFnZU5hdmlnYXRpb246IChcbiAgICBkaXJlY3Rpb246ICdsZWZ0JyB8ICdyaWdodCcsXG4gICAgc2V0U2VsZWN0ZWRJbmRleDogKGluZGV4OiBudW1iZXIpID0+IHZvaWQsXG4gICkgPT4gYm9vbGVhblxuICAvLyBTY3JvbGwgcG9zaXRpb24gaW5mbyBmb3IgVUkgZGlzcGxheVxuICBzY3JvbGxQb3NpdGlvbjoge1xuICAgIGN1cnJlbnQ6IG51bWJlclxuICAgIHRvdGFsOiBudW1iZXJcbiAgICBjYW5TY3JvbGxVcDogYm9vbGVhblxuICAgIGNhblNjcm9sbERvd246IGJvb2xlYW5cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlUGFnaW5hdGlvbjxUPih7XG4gIHRvdGFsSXRlbXMsXG4gIG1heFZpc2libGUgPSBERUZBVUxUX01BWF9WSVNJQkxFLFxuICBzZWxlY3RlZEluZGV4ID0gMCxcbn06IFVzZVBhZ2luYXRpb25PcHRpb25zKTogVXNlUGFnaW5hdGlvblJlc3VsdDxUPiB7XG4gIGNvbnN0IG5lZWRzUGFnaW5hdGlvbiA9IHRvdGFsSXRlbXMgPiBtYXhWaXNpYmxlXG5cbiAgLy8gVXNlIGEgcmVmIHRvIHRyYWNrIHRoZSBwcmV2aW91cyBzY3JvbGwgb2Zmc2V0IGZvciBzbW9vdGggc2Nyb2xsaW5nXG4gIGNvbnN0IHNjcm9sbE9mZnNldFJlZiA9IHVzZVJlZigwKVxuXG4gIC8vIENvbXB1dGUgdGhlIHNjcm9sbCBvZmZzZXQgYmFzZWQgb24gc2VsZWN0ZWRJbmRleFxuICAvLyBUaGlzIGVuc3VyZXMgdGhlIHNlbGVjdGVkIGl0ZW0gaXMgYWx3YXlzIHZpc2libGVcbiAgY29uc3Qgc2Nyb2xsT2Zmc2V0ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKCFuZWVkc1BhZ2luYXRpb24pIHJldHVybiAwXG5cbiAgICBjb25zdCBwcmV2T2Zmc2V0ID0gc2Nyb2xsT2Zmc2V0UmVmLmN1cnJlbnRcblxuICAgIC8vIElmIHNlbGVjdGVkIGl0ZW0gaXMgYWJvdmUgdGhlIHZpc2libGUgd2luZG93LCBzY3JvbGwgdXBcbiAgICBpZiAoc2VsZWN0ZWRJbmRleCA8IHByZXZPZmZzZXQpIHtcbiAgICAgIHNjcm9sbE9mZnNldFJlZi5jdXJyZW50ID0gc2VsZWN0ZWRJbmRleFxuICAgICAgcmV0dXJuIHNlbGVjdGVkSW5kZXhcbiAgICB9XG5cbiAgICAvLyBJZiBzZWxlY3RlZCBpdGVtIGlzIGJlbG93IHRoZSB2aXNpYmxlIHdpbmRvdywgc2Nyb2xsIGRvd25cbiAgICBpZiAoc2VsZWN0ZWRJbmRleCA+PSBwcmV2T2Zmc2V0ICsgbWF4VmlzaWJsZSkge1xuICAgICAgY29uc3QgbmV3T2Zmc2V0ID0gc2VsZWN0ZWRJbmRleCAtIG1heFZpc2libGUgKyAxXG4gICAgICBzY3JvbGxPZmZzZXRSZWYuY3VycmVudCA9IG5ld09mZnNldFxuICAgICAgcmV0dXJuIG5ld09mZnNldFxuICAgIH1cblxuICAgIC8vIFNlbGVjdGVkIGl0ZW0gaXMgd2l0aGluIHZpc2libGUgd2luZG93LCBrZWVwIGN1cnJlbnQgb2Zmc2V0XG4gICAgLy8gQnV0IGVuc3VyZSBvZmZzZXQgaXMgc3RpbGwgdmFsaWRcbiAgICBjb25zdCBtYXhPZmZzZXQgPSBNYXRoLm1heCgwLCB0b3RhbEl0ZW1zIC0gbWF4VmlzaWJsZSlcbiAgICBjb25zdCBjbGFtcGVkT2Zmc2V0ID0gTWF0aC5taW4ocHJldk9mZnNldCwgbWF4T2Zmc2V0KVxuICAgIHNjcm9sbE9mZnNldFJlZi5jdXJyZW50ID0gY2xhbXBlZE9mZnNldFxuICAgIHJldHVybiBjbGFtcGVkT2Zmc2V0XG4gIH0sIFtzZWxlY3RlZEluZGV4LCBtYXhWaXNpYmxlLCBuZWVkc1BhZ2luYXRpb24sIHRvdGFsSXRlbXNdKVxuXG4gIGNvbnN0IHN0YXJ0SW5kZXggPSBzY3JvbGxPZmZzZXRcbiAgY29uc3QgZW5kSW5kZXggPSBNYXRoLm1pbihzY3JvbGxPZmZzZXQgKyBtYXhWaXNpYmxlLCB0b3RhbEl0ZW1zKVxuXG4gIGNvbnN0IGdldFZpc2libGVJdGVtcyA9IHVzZUNhbGxiYWNrKFxuICAgIChpdGVtczogVFtdKTogVFtdID0+IHtcbiAgICAgIGlmICghbmVlZHNQYWdpbmF0aW9uKSByZXR1cm4gaXRlbXNcbiAgICAgIHJldHVybiBpdGVtcy5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleClcbiAgICB9LFxuICAgIFtuZWVkc1BhZ2luYXRpb24sIHN0YXJ0SW5kZXgsIGVuZEluZGV4XSxcbiAgKVxuXG4gIGNvbnN0IHRvQWN0dWFsSW5kZXggPSB1c2VDYWxsYmFjayhcbiAgICAodmlzaWJsZUluZGV4OiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICAgICAgcmV0dXJuIHN0YXJ0SW5kZXggKyB2aXNpYmxlSW5kZXhcbiAgICB9LFxuICAgIFtzdGFydEluZGV4XSxcbiAgKVxuXG4gIGNvbnN0IGlzT25DdXJyZW50UGFnZSA9IHVzZUNhbGxiYWNrKFxuICAgIChhY3R1YWxJbmRleDogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG4gICAgICByZXR1cm4gYWN0dWFsSW5kZXggPj0gc3RhcnRJbmRleCAmJiBhY3R1YWxJbmRleCA8IGVuZEluZGV4XG4gICAgfSxcbiAgICBbc3RhcnRJbmRleCwgZW5kSW5kZXhdLFxuICApXG5cbiAgLy8gVGhlc2UgYXJlIG1vc3RseSBuby1vcHMgZm9yIGNvbnRpbnVvdXMgc2Nyb2xsaW5nIGJ1dCBrZXB0IGZvciBBUEkgY29tcGF0aWJpbGl0eVxuICBjb25zdCBnb1RvUGFnZSA9IHVzZUNhbGxiYWNrKChfcGFnZTogbnVtYmVyKSA9PiB7XG4gICAgLy8gTm8tb3AgLSBzY3JvbGxpbmcgaXMgY29udHJvbGxlZCBieSBzZWxlY3RlZEluZGV4XG4gIH0sIFtdKVxuXG4gIGNvbnN0IG5leHRQYWdlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIC8vIE5vLW9wIC0gc2Nyb2xsaW5nIGlzIGNvbnRyb2xsZWQgYnkgc2VsZWN0ZWRJbmRleFxuICB9LCBbXSlcblxuICBjb25zdCBwcmV2UGFnZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAvLyBOby1vcCAtIHNjcm9sbGluZyBpcyBjb250cm9sbGVkIGJ5IHNlbGVjdGVkSW5kZXhcbiAgfSwgW10pXG5cbiAgLy8gU2ltcGxlIHNlbGVjdGlvbiBoYW5kbGVyIC0ganVzdCB1cGRhdGVzIHRoZSBpbmRleFxuICAvLyBTY3JvbGxpbmcgaGFwcGVucyBhdXRvbWF0aWNhbGx5IHZpYSB0aGUgdXNlTWVtbyBhYm92ZVxuICBjb25zdCBoYW5kbGVTZWxlY3Rpb25DaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAobmV3SW5kZXg6IG51bWJlciwgc2V0U2VsZWN0ZWRJbmRleDogKGluZGV4OiBudW1iZXIpID0+IHZvaWQpID0+IHtcbiAgICAgIGNvbnN0IGNsYW1wZWRJbmRleCA9IE1hdGgubWF4KDAsIE1hdGgubWluKG5ld0luZGV4LCB0b3RhbEl0ZW1zIC0gMSkpXG4gICAgICBzZXRTZWxlY3RlZEluZGV4KGNsYW1wZWRJbmRleClcbiAgICB9LFxuICAgIFt0b3RhbEl0ZW1zXSxcbiAgKVxuXG4gIC8vIFBhZ2UgbmF2aWdhdGlvbiAtIGRpc2FibGVkIGZvciBjb250aW51b3VzIHNjcm9sbGluZ1xuICBjb25zdCBoYW5kbGVQYWdlTmF2aWdhdGlvbiA9IHVzZUNhbGxiYWNrKFxuICAgIChcbiAgICAgIF9kaXJlY3Rpb246ICdsZWZ0JyB8ICdyaWdodCcsXG4gICAgICBfc2V0U2VsZWN0ZWRJbmRleDogKGluZGV4OiBudW1iZXIpID0+IHZvaWQsXG4gICAgKTogYm9vbGVhbiA9PiB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9LFxuICAgIFtdLFxuICApXG5cbiAgLy8gQ2FsY3VsYXRlIHBhZ2UtbGlrZSB2YWx1ZXMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gIGNvbnN0IHRvdGFsUGFnZXMgPSBNYXRoLm1heCgxLCBNYXRoLmNlaWwodG90YWxJdGVtcyAvIG1heFZpc2libGUpKVxuICBjb25zdCBjdXJyZW50UGFnZSA9IE1hdGguZmxvb3Ioc2Nyb2xsT2Zmc2V0IC8gbWF4VmlzaWJsZSlcblxuICByZXR1cm4ge1xuICAgIGN1cnJlbnRQYWdlLFxuICAgIHRvdGFsUGFnZXMsXG4gICAgc3RhcnRJbmRleCxcbiAgICBlbmRJbmRleCxcbiAgICBuZWVkc1BhZ2luYXRpb24sXG4gICAgcGFnZVNpemU6IG1heFZpc2libGUsXG4gICAgZ2V0VmlzaWJsZUl0ZW1zLFxuICAgIHRvQWN0dWFsSW5kZXgsXG4gICAgaXNPbkN1cnJlbnRQYWdlLFxuICAgIGdvVG9QYWdlLFxuICAgIG5leHRQYWdlLFxuICAgIHByZXZQYWdlLFxuICAgIGhhbmRsZVNlbGVjdGlvbkNoYW5nZSxcbiAgICBoYW5kbGVQYWdlTmF2aWdhdGlvbixcbiAgICBzY3JvbGxQb3NpdGlvbjoge1xuICAgICAgY3VycmVudDogc2VsZWN0ZWRJbmRleCArIDEsXG4gICAgICB0b3RhbDogdG90YWxJdGVtcyxcbiAgICAgIGNhblNjcm9sbFVwOiBzY3JvbGxPZmZzZXQgPiAwLFxuICAgICAgY2FuU2Nyb2xsRG93bjogc2Nyb2xsT2Zmc2V0ICsgbWF4VmlzaWJsZSA8IHRvdGFsSXRlbXMsXG4gICAgfSxcbiAgfVxufVxuIiwgImltcG9ydCBmaWd1cmVzIGZyb20gJ2ZpZ3VyZXMnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29uZmlndXJhYmxlU2hvcnRjdXRIaW50LmpzJ1xuaW1wb3J0IHsgQnlsaW5lIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kZXNpZ24tc3lzdGVtL0J5bGluZS5qcydcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7XG4gIHVzZUtleWJpbmRpbmcsXG4gIHVzZUtleWJpbmRpbmdzLFxufSBmcm9tICcuLi8uLi9rZXliaW5kaW5ncy91c2VLZXliaW5kaW5nLmpzJ1xuaW1wb3J0IHR5cGUgeyBMb2FkZWRQbHVnaW4gfSBmcm9tICcuLi8uLi90eXBlcy9wbHVnaW4uanMnXG5pbXBvcnQgeyBjb3VudCB9IGZyb20gJy4uLy4uL3V0aWxzL2FycmF5LmpzJ1xuaW1wb3J0IHsgb3BlbkJyb3dzZXIgfSBmcm9tICcuLi8uLi91dGlscy9icm93c2VyLmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGVidWcuanMnXG5pbXBvcnQgeyBlcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi91dGlscy9lcnJvcnMuanMnXG5pbXBvcnQgeyBjbGVhckFsbENhY2hlcyB9IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvY2FjaGVVdGlscy5qcydcbmltcG9ydCB7XG4gIGZvcm1hdEluc3RhbGxDb3VudCxcbiAgZ2V0SW5zdGFsbENvdW50cyxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvcGx1Z2lucy9pbnN0YWxsQ291bnRzLmpzJ1xuaW1wb3J0IHtcbiAgaXNQbHVnaW5HbG9iYWxseUluc3RhbGxlZCxcbiAgaXNQbHVnaW5JbnN0YWxsZWQsXG59IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvaW5zdGFsbGVkUGx1Z2luc01hbmFnZXIuanMnXG5pbXBvcnQge1xuICBjcmVhdGVQbHVnaW5JZCxcbiAgZm9ybWF0RmFpbHVyZURldGFpbHMsXG4gIGZvcm1hdE1hcmtldHBsYWNlTG9hZGluZ0Vycm9ycyxcbiAgZ2V0TWFya2V0cGxhY2VTb3VyY2VEaXNwbGF5LFxuICBsb2FkTWFya2V0cGxhY2VzV2l0aEdyYWNlZnVsRGVncmFkYXRpb24sXG59IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvbWFya2V0cGxhY2VIZWxwZXJzLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0TWFya2V0cGxhY2UsXG4gIGxvYWRLbm93bk1hcmtldHBsYWNlc0NvbmZpZyxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvcGx1Z2lucy9tYXJrZXRwbGFjZU1hbmFnZXIuanMnXG5pbXBvcnQgeyBPRkZJQ0lBTF9NQVJLRVRQTEFDRV9OQU1FIH0gZnJvbSAnLi4vLi4vdXRpbHMvcGx1Z2lucy9vZmZpY2lhbE1hcmtldHBsYWNlLmpzJ1xuaW1wb3J0IHsgaW5zdGFsbFBsdWdpbkZyb21NYXJrZXRwbGFjZSB9IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvcGx1Z2luSW5zdGFsbGF0aW9uSGVscGVycy5qcydcbmltcG9ydCB7IGlzUGx1Z2luQmxvY2tlZEJ5UG9saWN5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcGx1Z2lucy9wbHVnaW5Qb2xpY3kuanMnXG5pbXBvcnQgeyBwbHVyYWwgfSBmcm9tICcuLi8uLi91dGlscy9zdHJpbmdVdGlscy5qcydcbmltcG9ydCB7IHRydW5jYXRlVG9XaWR0aCB9IGZyb20gJy4uLy4uL3V0aWxzL3RydW5jYXRlLmpzJ1xuaW1wb3J0IHtcbiAgZmluZFBsdWdpbk9wdGlvbnNUYXJnZXQsXG4gIFBsdWdpbk9wdGlvbnNGbG93LFxufSBmcm9tICcuL1BsdWdpbk9wdGlvbnNGbG93LmpzJ1xuaW1wb3J0IHsgUGx1Z2luVHJ1c3RXYXJuaW5nIH0gZnJvbSAnLi9QbHVnaW5UcnVzdFdhcm5pbmcuanMnXG5pbXBvcnQge1xuICBidWlsZFBsdWdpbkRldGFpbHNNZW51T3B0aW9ucyxcbiAgZXh0cmFjdEdpdEh1YlJlcG8sXG4gIHR5cGUgSW5zdGFsbGFibGVQbHVnaW4sXG4gIFBsdWdpblNlbGVjdGlvbktleUhpbnQsXG59IGZyb20gJy4vcGx1Z2luRGV0YWlsc0hlbHBlcnMuanMnXG5pbXBvcnQgdHlwZSB7IFZpZXdTdGF0ZSBhcyBQYXJlbnRWaWV3U3RhdGUgfSBmcm9tICcuL3R5cGVzLmpzJ1xuaW1wb3J0IHsgdXNlUGFnaW5hdGlvbiB9IGZyb20gJy4vdXNlUGFnaW5hdGlvbi5qcydcblxudHlwZSBQcm9wcyA9IHtcbiAgZXJyb3I6IHN0cmluZyB8IG51bGxcbiAgc2V0RXJyb3I6IChlcnJvcjogc3RyaW5nIHwgbnVsbCkgPT4gdm9pZFxuICByZXN1bHQ6IHN0cmluZyB8IG51bGxcbiAgc2V0UmVzdWx0OiAocmVzdWx0OiBzdHJpbmcgfCBudWxsKSA9PiB2b2lkXG4gIHNldFZpZXdTdGF0ZTogKHN0YXRlOiBQYXJlbnRWaWV3U3RhdGUpID0+IHZvaWRcbiAgb25JbnN0YWxsQ29tcGxldGU/OiAoKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuICB0YXJnZXRNYXJrZXRwbGFjZT86IHN0cmluZ1xuICB0YXJnZXRQbHVnaW4/OiBzdHJpbmdcbn1cblxudHlwZSBWaWV3U3RhdGUgPVxuICB8ICdtYXJrZXRwbGFjZS1saXN0J1xuICB8ICdwbHVnaW4tbGlzdCdcbiAgfCAncGx1Z2luLWRldGFpbHMnXG4gIHwgeyB0eXBlOiAncGx1Z2luLW9wdGlvbnMnOyBwbHVnaW46IExvYWRlZFBsdWdpbjsgcGx1Z2luSWQ6IHN0cmluZyB9XG5cbnR5cGUgTWFya2V0cGxhY2VJbmZvID0ge1xuICBuYW1lOiBzdHJpbmdcbiAgdG90YWxQbHVnaW5zOiBudW1iZXJcbiAgaW5zdGFsbGVkQ291bnQ6IG51bWJlclxuICBzb3VyY2U/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJyb3dzZU1hcmtldHBsYWNlKHtcbiAgZXJyb3IsXG4gIHNldEVycm9yLFxuICByZXN1bHQ6IF9yZXN1bHQsXG4gIHNldFJlc3VsdCxcbiAgc2V0Vmlld1N0YXRlOiBzZXRQYXJlbnRWaWV3U3RhdGUsXG4gIG9uSW5zdGFsbENvbXBsZXRlLFxuICB0YXJnZXRNYXJrZXRwbGFjZSxcbiAgdGFyZ2V0UGx1Z2luLFxufTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICAvLyBWaWV3IHN0YXRlXG4gIGNvbnN0IFt2aWV3U3RhdGUsIHNldFZpZXdTdGF0ZV0gPSB1c2VTdGF0ZTxWaWV3U3RhdGU+KCdtYXJrZXRwbGFjZS1saXN0JylcbiAgY29uc3QgW3NlbGVjdGVkTWFya2V0cGxhY2UsIHNldFNlbGVjdGVkTWFya2V0cGxhY2VdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4oXG4gICAgbnVsbCxcbiAgKVxuICBjb25zdCBbc2VsZWN0ZWRQbHVnaW4sIHNldFNlbGVjdGVkUGx1Z2luXSA9XG4gICAgdXNlU3RhdGU8SW5zdGFsbGFibGVQbHVnaW4gfCBudWxsPihudWxsKVxuXG4gIC8vIERhdGEgc3RhdGVcbiAgY29uc3QgW21hcmtldHBsYWNlcywgc2V0TWFya2V0cGxhY2VzXSA9IHVzZVN0YXRlPE1hcmtldHBsYWNlSW5mb1tdPihbXSlcbiAgY29uc3QgW2F2YWlsYWJsZVBsdWdpbnMsIHNldEF2YWlsYWJsZVBsdWdpbnNdID0gdXNlU3RhdGU8SW5zdGFsbGFibGVQbHVnaW5bXT4oXG4gICAgW10sXG4gIClcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW2luc3RhbGxDb3VudHMsIHNldEluc3RhbGxDb3VudHNdID0gdXNlU3RhdGU8TWFwPFxuICAgIHN0cmluZyxcbiAgICBudW1iZXJcbiAgPiB8IG51bGw+KG51bGwpXG5cbiAgLy8gU2VsZWN0aW9uIHN0YXRlXG4gIGNvbnN0IFtzZWxlY3RlZEluZGV4LCBzZXRTZWxlY3RlZEluZGV4XSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtzZWxlY3RlZEZvckluc3RhbGwsIHNldFNlbGVjdGVkRm9ySW5zdGFsbF0gPSB1c2VTdGF0ZTxTZXQ8c3RyaW5nPj4oXG4gICAgbmV3IFNldCgpLFxuICApXG4gIGNvbnN0IFtpbnN0YWxsaW5nUGx1Z2lucywgc2V0SW5zdGFsbGluZ1BsdWdpbnNdID0gdXNlU3RhdGU8U2V0PHN0cmluZz4+KFxuICAgIG5ldyBTZXQoKSxcbiAgKVxuXG4gIC8vIFBhZ2luYXRpb24gZm9yIHBsdWdpbiBsaXN0IChjb250aW51b3VzIHNjcm9sbGluZylcbiAgY29uc3QgcGFnaW5hdGlvbiA9IHVzZVBhZ2luYXRpb248SW5zdGFsbGFibGVQbHVnaW4+KHtcbiAgICB0b3RhbEl0ZW1zOiBhdmFpbGFibGVQbHVnaW5zLmxlbmd0aCxcbiAgICBzZWxlY3RlZEluZGV4LFxuICB9KVxuXG4gIC8vIERldGFpbHMgdmlldyBzdGF0ZVxuICBjb25zdCBbZGV0YWlsc01lbnVJbmRleCwgc2V0RGV0YWlsc01lbnVJbmRleF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbaXNJbnN0YWxsaW5nLCBzZXRJc0luc3RhbGxpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpbnN0YWxsRXJyb3IsIHNldEluc3RhbGxFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuXG4gIC8vIFdhcm5pbmcgc3RhdGUgZm9yIG5vbi1jcml0aWNhbCBlcnJvcnMgKGUuZy4sIHNvbWUgbWFya2V0cGxhY2VzIGZhaWxlZCB0byBsb2FkKVxuICBjb25zdCBbd2FybmluZywgc2V0V2FybmluZ10gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuXG4gIC8vIEhhbmRsZSBlc2NhcGUgdG8gZ28gYmFjayAtIHZpZXdTdGF0ZS1kZXBlbmRlbnQgbmF2aWdhdGlvblxuICBjb25zdCBoYW5kbGVCYWNrID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICh2aWV3U3RhdGUgPT09ICdwbHVnaW4tbGlzdCcpIHtcbiAgICAgIC8vIElmIG5hdmlnYXRlZCBkaXJlY3RseSB0byBhIHNwZWNpZmljIG1hcmtldHBsYWNlIHZpYSB0YXJnZXRNYXJrZXRwbGFjZSxcbiAgICAgIC8vIGdvIGJhY2sgdG8gbWFuYWdlLW1hcmtldHBsYWNlcyBzaG93aW5nIHRoYXQgbWFya2V0cGxhY2UncyBkZXRhaWxzXG4gICAgICBpZiAodGFyZ2V0TWFya2V0cGxhY2UpIHtcbiAgICAgICAgc2V0UGFyZW50Vmlld1N0YXRlKHtcbiAgICAgICAgICB0eXBlOiAnbWFuYWdlLW1hcmtldHBsYWNlcycsXG4gICAgICAgICAgdGFyZ2V0TWFya2V0cGxhY2UsXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKG1hcmtldHBsYWNlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgLy8gSWYgdGhlcmUncyBvbmx5IG9uZSBtYXJrZXRwbGFjZSwgc2tpcCB0aGUgbWFya2V0cGxhY2UtbGlzdCB2aWV3XG4gICAgICAgIC8vIHNpbmNlIHdlIGF1dG8tbmF2aWdhdGVkIHBhc3QgaXQgb24gbG9hZFxuICAgICAgICBzZXRQYXJlbnRWaWV3U3RhdGUoeyB0eXBlOiAnbWVudScgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFZpZXdTdGF0ZSgnbWFya2V0cGxhY2UtbGlzdCcpXG4gICAgICAgIHNldFNlbGVjdGVkTWFya2V0cGxhY2UobnVsbClcbiAgICAgICAgc2V0U2VsZWN0ZWRGb3JJbnN0YWxsKG5ldyBTZXQoKSlcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZpZXdTdGF0ZSA9PT0gJ3BsdWdpbi1kZXRhaWxzJykge1xuICAgICAgc2V0Vmlld1N0YXRlKCdwbHVnaW4tbGlzdCcpXG4gICAgICBzZXRTZWxlY3RlZFBsdWdpbihudWxsKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBdCByb290IGxldmVsIChtYXJrZXRwbGFjZS1saXN0KSwgZXhpdCB0aGUgcGx1Z2luIG1lbnVcbiAgICAgIHNldFBhcmVudFZpZXdTdGF0ZSh7IHR5cGU6ICdtZW51JyB9KVxuICAgIH1cbiAgfSwgW3ZpZXdTdGF0ZSwgdGFyZ2V0TWFya2V0cGxhY2UsIHNldFBhcmVudFZpZXdTdGF0ZSwgbWFya2V0cGxhY2VzLmxlbmd0aF0pXG5cbiAgdXNlS2V5YmluZGluZygnY29uZmlybTpubycsIGhhbmRsZUJhY2ssIHsgY29udGV4dDogJ0NvbmZpcm1hdGlvbicgfSlcblxuICAvLyBMb2FkIG1hcmtldHBsYWNlcyBhbmQgY291bnQgaW5zdGFsbGVkIHBsdWdpbnNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkTWFya2V0cGxhY2VEYXRhKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gYXdhaXQgbG9hZEtub3duTWFya2V0cGxhY2VzQ29uZmlnKClcblxuICAgICAgICAvLyBMb2FkIG1hcmtldHBsYWNlcyB3aXRoIGdyYWNlZnVsIGRlZ3JhZGF0aW9uXG4gICAgICAgIGNvbnN0IHsgbWFya2V0cGxhY2VzLCBmYWlsdXJlcyB9ID1cbiAgICAgICAgICBhd2FpdCBsb2FkTWFya2V0cGxhY2VzV2l0aEdyYWNlZnVsRGVncmFkYXRpb24oY29uZmlnKVxuXG4gICAgICAgIGNvbnN0IG1hcmtldHBsYWNlSW5mb3M6IE1hcmtldHBsYWNlSW5mb1tdID0gW11cbiAgICAgICAgZm9yIChjb25zdCB7XG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgICBjb25maWc6IG1hcmtldHBsYWNlQ29uZmlnLFxuICAgICAgICAgIGRhdGE6IG1hcmtldHBsYWNlLFxuICAgICAgICB9IG9mIG1hcmtldHBsYWNlcykge1xuICAgICAgICAgIGlmIChtYXJrZXRwbGFjZSkge1xuICAgICAgICAgICAgLy8gQ291bnQgaG93IG1hbnkgcGx1Z2lucyBmcm9tIHRoaXMgbWFya2V0cGxhY2UgYXJlIGluc3RhbGxlZFxuICAgICAgICAgICAgY29uc3QgaW5zdGFsbGVkRnJvbVRoaXNNYXJrZXRwbGFjZSA9IGNvdW50KFxuICAgICAgICAgICAgICBtYXJrZXRwbGFjZS5wbHVnaW5zLFxuICAgICAgICAgICAgICBwbHVnaW4gPT4gaXNQbHVnaW5JbnN0YWxsZWQoY3JlYXRlUGx1Z2luSWQocGx1Z2luLm5hbWUsIG5hbWUpKSxcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgbWFya2V0cGxhY2VJbmZvcy5wdXNoKHtcbiAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgdG90YWxQbHVnaW5zOiBtYXJrZXRwbGFjZS5wbHVnaW5zLmxlbmd0aCxcbiAgICAgICAgICAgICAgaW5zdGFsbGVkQ291bnQ6IGluc3RhbGxlZEZyb21UaGlzTWFya2V0cGxhY2UsXG4gICAgICAgICAgICAgIHNvdXJjZTogZ2V0TWFya2V0cGxhY2VTb3VyY2VEaXNwbGF5KG1hcmtldHBsYWNlQ29uZmlnLnNvdXJjZSksXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNvcnQgc28gY2xhdWRlLXBsdWdpbi1kaXJlY3RvcnkgaXMgYWx3YXlzIGZpcnN0XG4gICAgICAgIG1hcmtldHBsYWNlSW5mb3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgIGlmIChhLm5hbWUgPT09ICdjbGF1ZGUtcGx1Z2luLWRpcmVjdG9yeScpIHJldHVybiAtMVxuICAgICAgICAgIGlmIChiLm5hbWUgPT09ICdjbGF1ZGUtcGx1Z2luLWRpcmVjdG9yeScpIHJldHVybiAxXG4gICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfSlcblxuICAgICAgICBzZXRNYXJrZXRwbGFjZXMobWFya2V0cGxhY2VJbmZvcylcblxuICAgICAgICAvLyBIYW5kbGUgbWFya2V0cGxhY2UgbG9hZGluZyBlcnJvcnMvd2FybmluZ3NcbiAgICAgICAgY29uc3Qgc3VjY2Vzc0NvdW50ID0gY291bnQobWFya2V0cGxhY2VzLCBtID0+IG0uZGF0YSAhPT0gbnVsbClcbiAgICAgICAgY29uc3QgZXJyb3JSZXN1bHQgPSBmb3JtYXRNYXJrZXRwbGFjZUxvYWRpbmdFcnJvcnMoXG4gICAgICAgICAgZmFpbHVyZXMsXG4gICAgICAgICAgc3VjY2Vzc0NvdW50LFxuICAgICAgICApXG4gICAgICAgIGlmIChlcnJvclJlc3VsdCkge1xuICAgICAgICAgIGlmIChlcnJvclJlc3VsdC50eXBlID09PSAnd2FybmluZycpIHtcbiAgICAgICAgICAgIHNldFdhcm5pbmcoXG4gICAgICAgICAgICAgIGVycm9yUmVzdWx0Lm1lc3NhZ2UgKyAnLiBTaG93aW5nIGF2YWlsYWJsZSBtYXJrZXRwbGFjZXMuJyxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yUmVzdWx0Lm1lc3NhZ2UpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2tpcCBtYXJrZXRwbGFjZSBzZWxlY3Rpb24gaWYgdGhlcmUncyBvbmx5IG9uZSBtYXJrZXRwbGFjZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgbWFya2V0cGxhY2VJbmZvcy5sZW5ndGggPT09IDEgJiZcbiAgICAgICAgICAhdGFyZ2V0TWFya2V0cGxhY2UgJiZcbiAgICAgICAgICAhdGFyZ2V0UGx1Z2luXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IHNpbmdsZU1hcmtldHBsYWNlID0gbWFya2V0cGxhY2VJbmZvc1swXVxuICAgICAgICAgIGlmIChzaW5nbGVNYXJrZXRwbGFjZSkge1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWRNYXJrZXRwbGFjZShzaW5nbGVNYXJrZXRwbGFjZS5uYW1lKVxuICAgICAgICAgICAgc2V0Vmlld1N0YXRlKCdwbHVnaW4tbGlzdCcpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGFuZGxlIHRhcmdldE1hcmtldHBsYWNlIGFuZCB0YXJnZXRQbHVnaW4gYWZ0ZXIgbWFya2V0cGxhY2VzIGFyZSBsb2FkZWRcbiAgICAgICAgaWYgKHRhcmdldFBsdWdpbikge1xuICAgICAgICAgIC8vIFNlYXJjaCBmb3IgdGhlIHBsdWdpbiBhY3Jvc3MgYWxsIG1hcmtldHBsYWNlc1xuICAgICAgICAgIGxldCBmb3VuZFBsdWdpbjogSW5zdGFsbGFibGVQbHVnaW4gfCBudWxsID0gbnVsbFxuICAgICAgICAgIGxldCBmb3VuZE1hcmtldHBsYWNlOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuXG4gICAgICAgICAgZm9yIChjb25zdCBbbmFtZV0gb2YgT2JqZWN0LmVudHJpZXMoY29uZmlnKSkge1xuICAgICAgICAgICAgY29uc3QgbWFya2V0cGxhY2UgPSBhd2FpdCBnZXRNYXJrZXRwbGFjZShuYW1lKVxuICAgICAgICAgICAgaWYgKG1hcmtldHBsYWNlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBsdWdpbiA9IG1hcmtldHBsYWNlLnBsdWdpbnMuZmluZChcbiAgICAgICAgICAgICAgICBwID0+IHAubmFtZSA9PT0gdGFyZ2V0UGx1Z2luLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGlmIChwbHVnaW4pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwbHVnaW5JZCA9IGNyZWF0ZVBsdWdpbklkKHBsdWdpbi5uYW1lLCBuYW1lKVxuICAgICAgICAgICAgICAgIGZvdW5kUGx1Z2luID0ge1xuICAgICAgICAgICAgICAgICAgZW50cnk6IHBsdWdpbixcbiAgICAgICAgICAgICAgICAgIG1hcmtldHBsYWNlTmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgIHBsdWdpbklkLFxuICAgICAgICAgICAgICAgICAgLy8gaXNQbHVnaW5HbG9iYWxseUluc3RhbGxlZDogb25seSBibG9jayB3aGVuIHVzZXIvbWFuYWdlZCBzY29wZVxuICAgICAgICAgICAgICAgICAgLy8gZXhpc3RzIChub3RoaW5nIHRvIGFkZCkuIFByb2plY3QvbG9jYWwtc2NvcGUgaW5zdGFsbHMgZG9uJ3RcbiAgICAgICAgICAgICAgICAgIC8vIGJsb2NrIOKAlCB1c2VyIG1heSB3YW50IHRvIHByb21vdGUgdG8gdXNlciBzY29wZSAoZ2gtMjk5OTcpLlxuICAgICAgICAgICAgICAgICAgaXNJbnN0YWxsZWQ6IGlzUGx1Z2luR2xvYmFsbHlJbnN0YWxsZWQocGx1Z2luSWQpLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3VuZE1hcmtldHBsYWNlID0gbmFtZVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZm91bmRQbHVnaW4gJiYgZm91bmRNYXJrZXRwbGFjZSkge1xuICAgICAgICAgICAgLy8gQmxvY2sgb25seSBvbiBnbG9iYWwgKHVzZXIvbWFuYWdlZCkgaW5zdGFsbCDigJQgcHJvamVjdC9sb2NhbCBzY29wZVxuICAgICAgICAgICAgLy8gbWVhbnMgdGhlIHVzZXIgbWlnaHQgc3RpbGwgd2FudCB0byBhZGQgYSB1c2VyLXNjb3BlIGVudHJ5IHNvIHRoZVxuICAgICAgICAgICAgLy8gcGx1Z2luIGlzIGF2YWlsYWJsZSBpbiBvdGhlciBwcm9qZWN0cyAoZ2gtMjk5OTcsIGdoLTI5MjQwLCBnaC0yOTM5MikuXG4gICAgICAgICAgICAvLyBUaGUgcGx1Z2luLWRldGFpbHMgdmlldyBvZmZlcnMgYWxsIHRocmVlIHNjb3BlIG9wdGlvbnM7IHRoZSBiYWNrZW5kXG4gICAgICAgICAgICAvLyAoaW5zdGFsbFBsdWdpbk9wIOKGkiBhZGRJbnN0YWxsZWRQbHVnaW4pIGFscmVhZHkgc3VwcG9ydHMgbXVsdGlwbGVcbiAgICAgICAgICAgIC8vIHNjb3BlIGVudHJpZXMgcGVyIHBsdWdpbi5cbiAgICAgICAgICAgIGNvbnN0IHBsdWdpbklkID0gZm91bmRQbHVnaW4ucGx1Z2luSWRcbiAgICAgICAgICAgIGNvbnN0IGdsb2JhbGx5SW5zdGFsbGVkID0gaXNQbHVnaW5HbG9iYWxseUluc3RhbGxlZChwbHVnaW5JZClcblxuICAgICAgICAgICAgaWYgKGdsb2JhbGx5SW5zdGFsbGVkKSB7XG4gICAgICAgICAgICAgIHNldEVycm9yKFxuICAgICAgICAgICAgICAgIGBQbHVnaW4gJyR7cGx1Z2luSWR9JyBpcyBhbHJlYWR5IGluc3RhbGxlZCBnbG9iYWxseS4gVXNlICcvcGx1Z2luJyB0byBtYW5hZ2UgZXhpc3RpbmcgcGx1Z2lucy5gLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBOYXZpZ2F0ZSB0byB0aGUgcGx1Z2luIGRldGFpbHMgdmlld1xuICAgICAgICAgICAgICBzZXRTZWxlY3RlZE1hcmtldHBsYWNlKGZvdW5kTWFya2V0cGxhY2UpXG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkUGx1Z2luKGZvdW5kUGx1Z2luKVxuICAgICAgICAgICAgICBzZXRWaWV3U3RhdGUoJ3BsdWdpbi1kZXRhaWxzJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0RXJyb3IoYFBsdWdpbiBcIiR7dGFyZ2V0UGx1Z2lufVwiIG5vdCBmb3VuZCBpbiBhbnkgbWFya2V0cGxhY2VgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRNYXJrZXRwbGFjZSkge1xuICAgICAgICAgIC8vIE5hdmlnYXRlIGRpcmVjdGx5IHRvIHRoZSBzcGVjaWZpZWQgbWFya2V0cGxhY2VcbiAgICAgICAgICBjb25zdCBtYXJrZXRwbGFjZUV4aXN0cyA9IG1hcmtldHBsYWNlSW5mb3Muc29tZShcbiAgICAgICAgICAgIG0gPT4gbS5uYW1lID09PSB0YXJnZXRNYXJrZXRwbGFjZSxcbiAgICAgICAgICApXG4gICAgICAgICAgaWYgKG1hcmtldHBsYWNlRXhpc3RzKSB7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZE1hcmtldHBsYWNlKHRhcmdldE1hcmtldHBsYWNlKVxuICAgICAgICAgICAgc2V0Vmlld1N0YXRlKCdwbHVnaW4tbGlzdCcpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEVycm9yKGBNYXJrZXRwbGFjZSBcIiR7dGFyZ2V0TWFya2V0cGxhY2V9XCIgbm90IGZvdW5kYClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBzZXRFcnJvcihcbiAgICAgICAgICBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBsb2FkIG1hcmtldHBsYWNlcycsXG4gICAgICAgIClcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICB9XG4gICAgfVxuICAgIHZvaWQgbG9hZE1hcmtldHBsYWNlRGF0YSgpXG4gIH0sIFtzZXRFcnJvciwgdGFyZ2V0TWFya2V0cGxhY2UsIHRhcmdldFBsdWdpbl0pXG5cbiAgLy8gTG9hZCBwbHVnaW5zIHdoZW4gYSBtYXJrZXRwbGFjZSBpcyBzZWxlY3RlZFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc2VsZWN0ZWRNYXJrZXRwbGFjZSkgcmV0dXJuXG5cbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRQbHVnaW5zRm9yTWFya2V0cGxhY2UobWFya2V0cGxhY2VOYW1lOiBzdHJpbmcpIHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG1hcmtldHBsYWNlID0gYXdhaXQgZ2V0TWFya2V0cGxhY2UobWFya2V0cGxhY2VOYW1lKVxuICAgICAgICBpZiAoY2FuY2VsbGVkKSByZXR1cm5cbiAgICAgICAgaWYgKCFtYXJrZXRwbGFjZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgbWFya2V0cGxhY2U6ICR7bWFya2V0cGxhY2VOYW1lfWApXG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaWx0ZXIgb3V0IGFscmVhZHkgaW5zdGFsbGVkIHBsdWdpbnNcbiAgICAgICAgY29uc3QgaW5zdGFsbGFibGVQbHVnaW5zOiBJbnN0YWxsYWJsZVBsdWdpbltdID0gW11cbiAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBtYXJrZXRwbGFjZS5wbHVnaW5zKSB7XG4gICAgICAgICAgY29uc3QgcGx1Z2luSWQgPSBjcmVhdGVQbHVnaW5JZChlbnRyeS5uYW1lLCBtYXJrZXRwbGFjZU5hbWUpXG4gICAgICAgICAgaWYgKGlzUGx1Z2luQmxvY2tlZEJ5UG9saWN5KHBsdWdpbklkKSkgY29udGludWVcbiAgICAgICAgICBpbnN0YWxsYWJsZVBsdWdpbnMucHVzaCh7XG4gICAgICAgICAgICBlbnRyeSxcbiAgICAgICAgICAgIG1hcmtldHBsYWNlTmFtZTogbWFya2V0cGxhY2VOYW1lLFxuICAgICAgICAgICAgcGx1Z2luSWQsXG4gICAgICAgICAgICAvLyBPbmx5IG1hcmsgYXMgXCJpbnN0YWxsZWRcIiB3aGVuIGdsb2JhbGx5IHNjb3BlZCAodXNlci9tYW5hZ2VkKS5cbiAgICAgICAgICAgIC8vIFByb2plY3QvbG9jYWwgaW5zdGFsbHMgZG9uJ3QgYmxvY2sg4oCUIHVzZXIgY2FuIGFkZCB1c2VyIHNjb3BlXG4gICAgICAgICAgICAvLyB2aWEgdGhlIHBsdWdpbi1kZXRhaWxzIHZpZXcgKGdoLTI5OTk3KS5cbiAgICAgICAgICAgIGlzSW5zdGFsbGVkOiBpc1BsdWdpbkdsb2JhbGx5SW5zdGFsbGVkKHBsdWdpbklkKSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmV0Y2ggaW5zdGFsbCBjb3VudHMgYW5kIHNvcnQgYnkgcG9wdWxhcml0eVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGNvdW50cyA9IGF3YWl0IGdldEluc3RhbGxDb3VudHMoKVxuICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHJldHVyblxuICAgICAgICAgIHNldEluc3RhbGxDb3VudHMoY291bnRzKVxuXG4gICAgICAgICAgaWYgKGNvdW50cykge1xuICAgICAgICAgICAgLy8gU29ydCBieSBpbnN0YWxsIGNvdW50IChkZXNjZW5kaW5nKSwgdGhlbiBhbHBoYWJldGljYWxseVxuICAgICAgICAgICAgaW5zdGFsbGFibGVQbHVnaW5zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY291bnRBID0gY291bnRzLmdldChhLnBsdWdpbklkKSA/PyAwXG4gICAgICAgICAgICAgIGNvbnN0IGNvdW50QiA9IGNvdW50cy5nZXQoYi5wbHVnaW5JZCkgPz8gMFxuICAgICAgICAgICAgICBpZiAoY291bnRBICE9PSBjb3VudEIpIHJldHVybiBjb3VudEIgLSBjb3VudEFcbiAgICAgICAgICAgICAgcmV0dXJuIGEuZW50cnkubmFtZS5sb2NhbGVDb21wYXJlKGIuZW50cnkubmFtZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE5vIGNvdW50cyBhdmFpbGFibGUgLSBzb3J0IGFscGhhYmV0aWNhbGx5XG4gICAgICAgICAgICBpbnN0YWxsYWJsZVBsdWdpbnMuc29ydCgoYSwgYikgPT5cbiAgICAgICAgICAgICAgYS5lbnRyeS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5lbnRyeS5uYW1lKSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgaWYgKGNhbmNlbGxlZCkgcmV0dXJuXG4gICAgICAgICAgLy8gTG9nIHRoZSBlcnJvciwgdGhlbiBncmFjZWZ1bGx5IGRlZ3JhZGUgdG8gYWxwaGFiZXRpY2FsIHNvcnRcbiAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICBgRmFpbGVkIHRvIGZldGNoIGluc3RhbGwgY291bnRzOiAke2Vycm9yTWVzc2FnZShlcnJvcil9YCxcbiAgICAgICAgICApXG4gICAgICAgICAgaW5zdGFsbGFibGVQbHVnaW5zLnNvcnQoKGEsIGIpID0+XG4gICAgICAgICAgICBhLmVudHJ5Lm5hbWUubG9jYWxlQ29tcGFyZShiLmVudHJ5Lm5hbWUpLFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHNldEF2YWlsYWJsZVBsdWdpbnMoaW5zdGFsbGFibGVQbHVnaW5zKVxuICAgICAgICBzZXRTZWxlY3RlZEluZGV4KDApXG4gICAgICAgIHNldFNlbGVjdGVkRm9ySW5zdGFsbChuZXcgU2V0KCkpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkgcmV0dXJuXG4gICAgICAgIHNldEVycm9yKGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGxvYWQgcGx1Z2lucycpXG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHZvaWQgbG9hZFBsdWdpbnNGb3JNYXJrZXRwbGFjZShzZWxlY3RlZE1hcmtldHBsYWNlKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICB9LCBbc2VsZWN0ZWRNYXJrZXRwbGFjZSwgc2V0RXJyb3JdKVxuXG4gIC8vIEluc3RhbGwgc2VsZWN0ZWQgcGx1Z2luc1xuICBjb25zdCBpbnN0YWxsU2VsZWN0ZWRQbHVnaW5zID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZEZvckluc3RhbGwuc2l6ZSA9PT0gMCkgcmV0dXJuXG5cbiAgICBjb25zdCBwbHVnaW5zVG9JbnN0YWxsID0gYXZhaWxhYmxlUGx1Z2lucy5maWx0ZXIocCA9PlxuICAgICAgc2VsZWN0ZWRGb3JJbnN0YWxsLmhhcyhwLnBsdWdpbklkKSxcbiAgICApXG5cbiAgICBzZXRJbnN0YWxsaW5nUGx1Z2lucyhuZXcgU2V0KHBsdWdpbnNUb0luc3RhbGwubWFwKHAgPT4gcC5wbHVnaW5JZCkpKVxuXG4gICAgbGV0IHN1Y2Nlc3NDb3VudCA9IDBcbiAgICBsZXQgZmFpbHVyZUNvdW50ID0gMFxuICAgIGNvbnN0IG5ld0ZhaWxlZFBsdWdpbnM6IEFycmF5PHsgbmFtZTogc3RyaW5nOyByZWFzb246IHN0cmluZyB9PiA9IFtdXG5cbiAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiBwbHVnaW5zVG9JbnN0YWxsKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBpbnN0YWxsUGx1Z2luRnJvbU1hcmtldHBsYWNlKHtcbiAgICAgICAgcGx1Z2luSWQ6IHBsdWdpbi5wbHVnaW5JZCxcbiAgICAgICAgZW50cnk6IHBsdWdpbi5lbnRyeSxcbiAgICAgICAgbWFya2V0cGxhY2VOYW1lOiBwbHVnaW4ubWFya2V0cGxhY2VOYW1lLFxuICAgICAgICBzY29wZTogJ3VzZXInLFxuICAgICAgfSlcblxuICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgIHN1Y2Nlc3NDb3VudCsrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmYWlsdXJlQ291bnQrK1xuICAgICAgICBuZXdGYWlsZWRQbHVnaW5zLnB1c2goe1xuICAgICAgICAgIG5hbWU6IHBsdWdpbi5lbnRyeS5uYW1lLFxuICAgICAgICAgIHJlYXNvbjogcmVzdWx0LmVycm9yLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHNldEluc3RhbGxpbmdQbHVnaW5zKG5ldyBTZXQoKSlcbiAgICBzZXRTZWxlY3RlZEZvckluc3RhbGwobmV3IFNldCgpKVxuICAgIGNsZWFyQWxsQ2FjaGVzKClcblxuICAgIC8vIEhhbmRsZSBpbnN0YWxsYXRpb24gcmVzdWx0c1xuICAgIGlmIChmYWlsdXJlQ291bnQgPT09IDApIHtcbiAgICAgIC8vIEFsbCBzdWNjZWVkZWRcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgICBg4pyTIEluc3RhbGxlZCAke3N1Y2Nlc3NDb3VudH0gJHtwbHVyYWwoc3VjY2Vzc0NvdW50LCAncGx1Z2luJyl9LiBgICtcbiAgICAgICAgYFJ1biAvcmVsb2FkLXBsdWdpbnMgdG8gYWN0aXZhdGUuYFxuXG4gICAgICBzZXRSZXN1bHQobWVzc2FnZSlcbiAgICB9IGVsc2UgaWYgKHN1Y2Nlc3NDb3VudCA9PT0gMCkge1xuICAgICAgLy8gQWxsIGZhaWxlZCAtIHNob3cgZXJyb3Igd2l0aCByZWFzb25zXG4gICAgICBzZXRFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBpbnN0YWxsOiAke2Zvcm1hdEZhaWx1cmVEZXRhaWxzKG5ld0ZhaWxlZFBsdWdpbnMsIHRydWUpfWAsXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE1peGVkIHJlc3VsdHMgLSBzaG93IHBhcnRpYWwgc3VjY2Vzc1xuICAgICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAgIGDinJMgSW5zdGFsbGVkICR7c3VjY2Vzc0NvdW50fSBvZiAke3N1Y2Nlc3NDb3VudCArIGZhaWx1cmVDb3VudH0gcGx1Z2lucy4gYCArXG4gICAgICAgIGBGYWlsZWQ6ICR7Zm9ybWF0RmFpbHVyZURldGFpbHMobmV3RmFpbGVkUGx1Z2lucywgZmFsc2UpfS4gYCArXG4gICAgICAgIGBSdW4gL3JlbG9hZC1wbHVnaW5zIHRvIGFjdGl2YXRlIHN1Y2Nlc3NmdWxseSBpbnN0YWxsZWQgcGx1Z2lucy5gXG5cbiAgICAgIHNldFJlc3VsdChtZXNzYWdlKVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBjb21wbGV0aW9uIGNhbGxiYWNrIGFuZCBuYXZpZ2F0aW9uXG4gICAgaWYgKHN1Y2Nlc3NDb3VudCA+IDApIHtcbiAgICAgIGlmIChvbkluc3RhbGxDb21wbGV0ZSkge1xuICAgICAgICBhd2FpdCBvbkluc3RhbGxDb21wbGV0ZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0UGFyZW50Vmlld1N0YXRlKHsgdHlwZTogJ21lbnUnIH0pXG4gIH1cblxuICAvLyBJbnN0YWxsIHNpbmdsZSBwbHVnaW4gZnJvbSBkZXRhaWxzIHZpZXdcbiAgY29uc3QgaGFuZGxlU2luZ2xlUGx1Z2luSW5zdGFsbCA9IGFzeW5jIChcbiAgICBwbHVnaW46IEluc3RhbGxhYmxlUGx1Z2luLFxuICAgIHNjb3BlOiAndXNlcicgfCAncHJvamVjdCcgfCAnbG9jYWwnID0gJ3VzZXInLFxuICApID0+IHtcbiAgICBzZXRJc0luc3RhbGxpbmcodHJ1ZSlcbiAgICBzZXRJbnN0YWxsRXJyb3IobnVsbClcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGluc3RhbGxQbHVnaW5Gcm9tTWFya2V0cGxhY2Uoe1xuICAgICAgcGx1Z2luSWQ6IHBsdWdpbi5wbHVnaW5JZCxcbiAgICAgIGVudHJ5OiBwbHVnaW4uZW50cnksXG4gICAgICBtYXJrZXRwbGFjZU5hbWU6IHBsdWdpbi5tYXJrZXRwbGFjZU5hbWUsXG4gICAgICBzY29wZSxcbiAgICB9KVxuXG4gICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICBjb25zdCBsb2FkZWQgPSBhd2FpdCBmaW5kUGx1Z2luT3B0aW9uc1RhcmdldChwbHVnaW4ucGx1Z2luSWQpXG4gICAgICBpZiAobG9hZGVkKSB7XG4gICAgICAgIHNldElzSW5zdGFsbGluZyhmYWxzZSlcbiAgICAgICAgc2V0Vmlld1N0YXRlKHtcbiAgICAgICAgICB0eXBlOiAncGx1Z2luLW9wdGlvbnMnLFxuICAgICAgICAgIHBsdWdpbjogbG9hZGVkLFxuICAgICAgICAgIHBsdWdpbklkOiBwbHVnaW4ucGx1Z2luSWQsXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgc2V0UmVzdWx0KHJlc3VsdC5tZXNzYWdlKVxuICAgICAgaWYgKG9uSW5zdGFsbENvbXBsZXRlKSB7XG4gICAgICAgIGF3YWl0IG9uSW5zdGFsbENvbXBsZXRlKClcbiAgICAgIH1cbiAgICAgIHNldFBhcmVudFZpZXdTdGF0ZSh7IHR5cGU6ICdtZW51JyB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRJc0luc3RhbGxpbmcoZmFsc2UpXG4gICAgICBzZXRJbnN0YWxsRXJyb3IocmVzdWx0LmVycm9yKVxuICAgIH1cbiAgfVxuXG4gIC8vIEhhbmRsZSBlcnJvciBzdGF0ZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgc2V0UmVzdWx0KGVycm9yKVxuICAgIH1cbiAgfSwgW2Vycm9yLCBzZXRSZXN1bHRdKVxuXG4gIC8vIE1hcmtldHBsYWNlLWxpc3QgbmF2aWdhdGlvblxuICB1c2VLZXliaW5kaW5ncyhcbiAgICB7XG4gICAgICAnc2VsZWN0OnByZXZpb3VzJzogKCkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCA+IDApIHtcbiAgICAgICAgICBzZXRTZWxlY3RlZEluZGV4KHNlbGVjdGVkSW5kZXggLSAxKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJ3NlbGVjdDpuZXh0JzogKCkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCA8IG1hcmtldHBsYWNlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgc2V0U2VsZWN0ZWRJbmRleChzZWxlY3RlZEluZGV4ICsgMSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICdzZWxlY3Q6YWNjZXB0JzogKCkgPT4ge1xuICAgICAgICBjb25zdCBtYXJrZXRwbGFjZSA9IG1hcmtldHBsYWNlc1tzZWxlY3RlZEluZGV4XVxuICAgICAgICBpZiAobWFya2V0cGxhY2UpIHtcbiAgICAgICAgICBzZXRTZWxlY3RlZE1hcmtldHBsYWNlKG1hcmtldHBsYWNlLm5hbWUpXG4gICAgICAgICAgc2V0Vmlld1N0YXRlKCdwbHVnaW4tbGlzdCcpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgICB7IGNvbnRleHQ6ICdTZWxlY3QnLCBpc0FjdGl2ZTogdmlld1N0YXRlID09PSAnbWFya2V0cGxhY2UtbGlzdCcgfSxcbiAgKVxuXG4gIC8vIFBsdWdpbi1saXN0IG5hdmlnYXRpb25cbiAgdXNlS2V5YmluZGluZ3MoXG4gICAge1xuICAgICAgJ3NlbGVjdDpwcmV2aW91cyc6ICgpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggPiAwKSB7XG4gICAgICAgICAgcGFnaW5hdGlvbi5oYW5kbGVTZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0ZWRJbmRleCAtIDEsIHNldFNlbGVjdGVkSW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnc2VsZWN0Om5leHQnOiAoKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZEluZGV4IDwgYXZhaWxhYmxlUGx1Z2lucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgcGFnaW5hdGlvbi5oYW5kbGVTZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0ZWRJbmRleCArIDEsIHNldFNlbGVjdGVkSW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnc2VsZWN0OmFjY2VwdCc6ICgpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHNlbGVjdGVkSW5kZXggPT09IGF2YWlsYWJsZVBsdWdpbnMubGVuZ3RoICYmXG4gICAgICAgICAgc2VsZWN0ZWRGb3JJbnN0YWxsLnNpemUgPiAwXG4gICAgICAgICkge1xuICAgICAgICAgIHZvaWQgaW5zdGFsbFNlbGVjdGVkUGx1Z2lucygpXG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRJbmRleCA8IGF2YWlsYWJsZVBsdWdpbnMubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgcGx1Z2luID0gYXZhaWxhYmxlUGx1Z2luc1tzZWxlY3RlZEluZGV4XVxuICAgICAgICAgIGlmIChwbHVnaW4pIHtcbiAgICAgICAgICAgIGlmIChwbHVnaW4uaXNJbnN0YWxsZWQpIHtcbiAgICAgICAgICAgICAgc2V0UGFyZW50Vmlld1N0YXRlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnbWFuYWdlLXBsdWdpbnMnLFxuICAgICAgICAgICAgICAgIHRhcmdldFBsdWdpbjogcGx1Z2luLmVudHJ5Lm5hbWUsXG4gICAgICAgICAgICAgICAgdGFyZ2V0TWFya2V0cGxhY2U6IHBsdWdpbi5tYXJrZXRwbGFjZU5hbWUsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZXRTZWxlY3RlZFBsdWdpbihwbHVnaW4pXG4gICAgICAgICAgICAgIHNldFZpZXdTdGF0ZSgncGx1Z2luLWRldGFpbHMnKVxuICAgICAgICAgICAgICBzZXREZXRhaWxzTWVudUluZGV4KDApXG4gICAgICAgICAgICAgIHNldEluc3RhbGxFcnJvcihudWxsKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICAgIHsgY29udGV4dDogJ1NlbGVjdCcsIGlzQWN0aXZlOiB2aWV3U3RhdGUgPT09ICdwbHVnaW4tbGlzdCcgfSxcbiAgKVxuXG4gIHVzZUtleWJpbmRpbmdzKFxuICAgIHtcbiAgICAgICdwbHVnaW46dG9nZ2xlJzogKCkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCA8IGF2YWlsYWJsZVBsdWdpbnMubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgcGx1Z2luID0gYXZhaWxhYmxlUGx1Z2luc1tzZWxlY3RlZEluZGV4XVxuICAgICAgICAgIGlmIChwbHVnaW4gJiYgIXBsdWdpbi5pc0luc3RhbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgbmV3U2VsZWN0aW9uID0gbmV3IFNldChzZWxlY3RlZEZvckluc3RhbGwpXG4gICAgICAgICAgICBpZiAobmV3U2VsZWN0aW9uLmhhcyhwbHVnaW4ucGx1Z2luSWQpKSB7XG4gICAgICAgICAgICAgIG5ld1NlbGVjdGlvbi5kZWxldGUocGx1Z2luLnBsdWdpbklkKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbmV3U2VsZWN0aW9uLmFkZChwbHVnaW4ucGx1Z2luSWQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRTZWxlY3RlZEZvckluc3RhbGwobmV3U2VsZWN0aW9uKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICdwbHVnaW46aW5zdGFsbCc6ICgpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkRm9ySW5zdGFsbC5zaXplID4gMCkge1xuICAgICAgICAgIHZvaWQgaW5zdGFsbFNlbGVjdGVkUGx1Z2lucygpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgICB7IGNvbnRleHQ6ICdQbHVnaW4nLCBpc0FjdGl2ZTogdmlld1N0YXRlID09PSAncGx1Z2luLWxpc3QnIH0sXG4gIClcblxuICAvLyBQbHVnaW4tZGV0YWlscyBuYXZpZ2F0aW9uXG4gIGNvbnN0IGRldGFpbHNNZW51T3B0aW9ucyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICghc2VsZWN0ZWRQbHVnaW4pIHJldHVybiBbXVxuICAgIGNvbnN0IGhhc0hvbWVwYWdlID0gc2VsZWN0ZWRQbHVnaW4uZW50cnkuaG9tZXBhZ2VcbiAgICBjb25zdCBnaXRodWJSZXBvID0gZXh0cmFjdEdpdEh1YlJlcG8oc2VsZWN0ZWRQbHVnaW4pXG4gICAgcmV0dXJuIGJ1aWxkUGx1Z2luRGV0YWlsc01lbnVPcHRpb25zKGhhc0hvbWVwYWdlLCBnaXRodWJSZXBvKVxuICB9LCBbc2VsZWN0ZWRQbHVnaW5dKVxuXG4gIHVzZUtleWJpbmRpbmdzKFxuICAgIHtcbiAgICAgICdzZWxlY3Q6cHJldmlvdXMnOiAoKSA9PiB7XG4gICAgICAgIGlmIChkZXRhaWxzTWVudUluZGV4ID4gMCkge1xuICAgICAgICAgIHNldERldGFpbHNNZW51SW5kZXgoZGV0YWlsc01lbnVJbmRleCAtIDEpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnc2VsZWN0Om5leHQnOiAoKSA9PiB7XG4gICAgICAgIGlmIChkZXRhaWxzTWVudUluZGV4IDwgZGV0YWlsc01lbnVPcHRpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBzZXREZXRhaWxzTWVudUluZGV4KGRldGFpbHNNZW51SW5kZXggKyAxKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJ3NlbGVjdDphY2NlcHQnOiAoKSA9PiB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRQbHVnaW4pIHJldHVyblxuICAgICAgICBjb25zdCBhY3Rpb24gPSBkZXRhaWxzTWVudU9wdGlvbnNbZGV0YWlsc01lbnVJbmRleF0/LmFjdGlvblxuICAgICAgICBjb25zdCBoYXNIb21lcGFnZSA9IHNlbGVjdGVkUGx1Z2luLmVudHJ5LmhvbWVwYWdlXG4gICAgICAgIGNvbnN0IGdpdGh1YlJlcG8gPSBleHRyYWN0R2l0SHViUmVwbyhzZWxlY3RlZFBsdWdpbilcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ2luc3RhbGwtdXNlcicpIHtcbiAgICAgICAgICB2b2lkIGhhbmRsZVNpbmdsZVBsdWdpbkluc3RhbGwoc2VsZWN0ZWRQbHVnaW4sICd1c2VyJylcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICdpbnN0YWxsLXByb2plY3QnKSB7XG4gICAgICAgICAgdm9pZCBoYW5kbGVTaW5nbGVQbHVnaW5JbnN0YWxsKHNlbGVjdGVkUGx1Z2luLCAncHJvamVjdCcpXG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSAnaW5zdGFsbC1sb2NhbCcpIHtcbiAgICAgICAgICB2b2lkIGhhbmRsZVNpbmdsZVBsdWdpbkluc3RhbGwoc2VsZWN0ZWRQbHVnaW4sICdsb2NhbCcpXG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSAnaG9tZXBhZ2UnICYmIGhhc0hvbWVwYWdlKSB7XG4gICAgICAgICAgdm9pZCBvcGVuQnJvd3NlcihoYXNIb21lcGFnZSlcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICdnaXRodWInICYmIGdpdGh1YlJlcG8pIHtcbiAgICAgICAgICB2b2lkIG9wZW5Ccm93c2VyKGBodHRwczovL2dpdGh1Yi5jb20vJHtnaXRodWJSZXBvfWApXG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSAnYmFjaycpIHtcbiAgICAgICAgICBzZXRWaWV3U3RhdGUoJ3BsdWdpbi1saXN0JylcbiAgICAgICAgICBzZXRTZWxlY3RlZFBsdWdpbihudWxsKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgY29udGV4dDogJ1NlbGVjdCcsXG4gICAgICBpc0FjdGl2ZTogdmlld1N0YXRlID09PSAncGx1Z2luLWRldGFpbHMnICYmICEhc2VsZWN0ZWRQbHVnaW4sXG4gICAgfSxcbiAgKVxuXG4gIGlmICh0eXBlb2Ygdmlld1N0YXRlID09PSAnb2JqZWN0JyAmJiB2aWV3U3RhdGUudHlwZSA9PT0gJ3BsdWdpbi1vcHRpb25zJykge1xuICAgIGNvbnN0IHsgcGx1Z2luLCBwbHVnaW5JZCB9ID0gdmlld1N0YXRlXG4gICAgZnVuY3Rpb24gZmluaXNoKG1zZzogc3RyaW5nKTogdm9pZCB7XG4gICAgICBzZXRSZXN1bHQobXNnKVxuICAgICAgaWYgKG9uSW5zdGFsbENvbXBsZXRlKSB7XG4gICAgICAgIHZvaWQgb25JbnN0YWxsQ29tcGxldGUoKVxuICAgICAgfVxuICAgICAgc2V0UGFyZW50Vmlld1N0YXRlKHsgdHlwZTogJ21lbnUnIH0pXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8UGx1Z2luT3B0aW9uc0Zsb3dcbiAgICAgICAgcGx1Z2luPXtwbHVnaW59XG4gICAgICAgIHBsdWdpbklkPXtwbHVnaW5JZH1cbiAgICAgICAgb25Eb25lPXsob3V0Y29tZSwgZGV0YWlsKSA9PiB7XG4gICAgICAgICAgc3dpdGNoIChvdXRjb21lKSB7XG4gICAgICAgICAgICBjYXNlICdjb25maWd1cmVkJzpcbiAgICAgICAgICAgICAgZmluaXNoKFxuICAgICAgICAgICAgICAgIGDinJMgSW5zdGFsbGVkIGFuZCBjb25maWd1cmVkICR7cGx1Z2luLm5hbWV9LiBSdW4gL3JlbG9hZC1wbHVnaW5zIHRvIGFwcGx5LmAsXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ3NraXBwZWQnOlxuICAgICAgICAgICAgICBmaW5pc2goXG4gICAgICAgICAgICAgICAgYOKckyBJbnN0YWxsZWQgJHtwbHVnaW4ubmFtZX0uIFJ1biAvcmVsb2FkLXBsdWdpbnMgdG8gYXBwbHkuYCxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgICBmaW5pc2goYEluc3RhbGxlZCBidXQgZmFpbGVkIHRvIHNhdmUgY29uZmlnOiAke2RldGFpbH1gKVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKVxuICB9XG5cbiAgLy8gTG9hZGluZyBzdGF0ZVxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8VGV4dD5Mb2FkaW5n4oCmPC9UZXh0PlxuICB9XG5cbiAgLy8gRXJyb3Igc3RhdGVcbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxUZXh0IGNvbG9yPVwiZXJyb3JcIj57ZXJyb3J9PC9UZXh0PlxuICB9XG5cbiAgLy8gTWFya2V0cGxhY2Ugc2VsZWN0aW9uIHZpZXdcbiAgaWYgKHZpZXdTdGF0ZSA9PT0gJ21hcmtldHBsYWNlLWxpc3QnKSB7XG4gICAgaWYgKG1hcmtldHBsYWNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgIDxCb3ggbWFyZ2luQm90dG9tPXsxfT5cbiAgICAgICAgICAgIDxUZXh0IGJvbGQ+U2VsZWN0IG1hcmtldHBsYWNlPC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxUZXh0Pk5vIG1hcmtldHBsYWNlcyBjb25maWd1cmVkLjwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgIEFkZCBhIG1hcmtldHBsYWNlIGZpcnN0IHVzaW5nIHtcIidBZGQgbWFya2V0cGxhY2UnXCJ9LlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0gcGFkZGluZ0xlZnQ9ezF9PlxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgICAgICBhY3Rpb249XCJjb25maXJtOm5vXCJcbiAgICAgICAgICAgICAgICBjb250ZXh0PVwiQ29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgICBmYWxsYmFjaz1cIkVzY1wiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJnbyBiYWNrXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICA8Qm94IG1hcmdpbkJvdHRvbT17MX0+XG4gICAgICAgICAgPFRleHQgYm9sZD5TZWxlY3QgbWFya2V0cGxhY2U8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIHsvKiBXYXJuaW5nIGJhbm5lciBmb3IgbWFya2V0cGxhY2UgbG9hZCBmYWlsdXJlcyAqL31cbiAgICAgICAge3dhcm5pbmcgJiYgKFxuICAgICAgICAgIDxCb3ggbWFyZ2luQm90dG9tPXsxfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIj5cbiAgICAgICAgICAgICAge2ZpZ3VyZXMud2FybmluZ30ge3dhcm5pbmd9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICAgIHttYXJrZXRwbGFjZXMubWFwKChtYXJrZXRwbGFjZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBrZXk9e21hcmtldHBsYWNlLm5hbWV9XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbT17aW5kZXggPCBtYXJrZXRwbGFjZXMubGVuZ3RoIC0gMSA/IDEgOiAwfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxUZXh0IGNvbG9yPXtzZWxlY3RlZEluZGV4ID09PSBpbmRleCA/ICdzdWdnZXN0aW9uJyA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAgICAgICAge3NlbGVjdGVkSW5kZXggPT09IGluZGV4ID8gZmlndXJlcy5wb2ludGVyIDogJyAnfXsnICd9XG4gICAgICAgICAgICAgICAge21hcmtldHBsYWNlLm5hbWV9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveCBtYXJnaW5MZWZ0PXsyfT5cbiAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgICAge21hcmtldHBsYWNlLnRvdGFsUGx1Z2luc317JyAnfVxuICAgICAgICAgICAgICAgIHtwbHVyYWwobWFya2V0cGxhY2UudG90YWxQbHVnaW5zLCAncGx1Z2luJyl9IGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgIHttYXJrZXRwbGFjZS5pbnN0YWxsZWRDb3VudCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgIGAgwrcgJHttYXJrZXRwbGFjZS5pbnN0YWxsZWRDb3VudH0gYWxyZWFkeSBpbnN0YWxsZWRgfVxuICAgICAgICAgICAgICAgIHttYXJrZXRwbGFjZS5zb3VyY2UgJiYgYCDCtyAke21hcmtldHBsYWNlLnNvdXJjZX1gfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKSl9XG5cbiAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yIGl0YWxpYz5cbiAgICAgICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgICAgICBhY3Rpb249XCJzZWxlY3Q6YWNjZXB0XCJcbiAgICAgICAgICAgICAgICBjb250ZXh0PVwiU2VsZWN0XCJcbiAgICAgICAgICAgICAgICBmYWxsYmFjaz1cIkVudGVyXCJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cInNlbGVjdFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgICAgICBhY3Rpb249XCJjb25maXJtOm5vXCJcbiAgICAgICAgICAgICAgICBjb250ZXh0PVwiQ29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgICBmYWxsYmFjaz1cIkVzY1wiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJnbyBiYWNrXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQnlsaW5lPlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICAvLyBQbHVnaW4gZGV0YWlscyB2aWV3XG4gIGlmICh2aWV3U3RhdGUgPT09ICdwbHVnaW4tZGV0YWlscycgJiYgc2VsZWN0ZWRQbHVnaW4pIHtcbiAgICBjb25zdCBoYXNIb21lcGFnZSA9IHNlbGVjdGVkUGx1Z2luLmVudHJ5LmhvbWVwYWdlXG4gICAgY29uc3QgZ2l0aHViUmVwbyA9IGV4dHJhY3RHaXRIdWJSZXBvKHNlbGVjdGVkUGx1Z2luKVxuXG4gICAgY29uc3QgbWVudU9wdGlvbnMgPSBidWlsZFBsdWdpbkRldGFpbHNNZW51T3B0aW9ucyhoYXNIb21lcGFnZSwgZ2l0aHViUmVwbylcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgPEJveCBtYXJnaW5Cb3R0b209ezF9PlxuICAgICAgICAgIDxUZXh0IGJvbGQ+UGx1Z2luIERldGFpbHM8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIHsvKiBQbHVnaW4gbWV0YWRhdGEgKi99XG4gICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpbkJvdHRvbT17MX0+XG4gICAgICAgICAgPFRleHQgYm9sZD57c2VsZWN0ZWRQbHVnaW4uZW50cnkubmFtZX08L1RleHQ+XG4gICAgICAgICAge3NlbGVjdGVkUGx1Z2luLmVudHJ5LnZlcnNpb24gJiYgKFxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+VmVyc2lvbjoge3NlbGVjdGVkUGx1Z2luLmVudHJ5LnZlcnNpb259PC9UZXh0PlxuICAgICAgICAgICl9XG4gICAgICAgICAge3NlbGVjdGVkUGx1Z2luLmVudHJ5LmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICAgICAgPFRleHQ+e3NlbGVjdGVkUGx1Z2luLmVudHJ5LmRlc2NyaXB0aW9ufTwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICl9XG4gICAgICAgICAge3NlbGVjdGVkUGx1Z2luLmVudHJ5LmF1dGhvciAmJiAoXG4gICAgICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICAgIEJ5OnsnICd9XG4gICAgICAgICAgICAgICAge3R5cGVvZiBzZWxlY3RlZFBsdWdpbi5lbnRyeS5hdXRob3IgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICA/IHNlbGVjdGVkUGx1Z2luLmVudHJ5LmF1dGhvclxuICAgICAgICAgICAgICAgICAgOiBzZWxlY3RlZFBsdWdpbi5lbnRyeS5hdXRob3IubmFtZX1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgey8qIFdoYXQgd2lsbCBiZSBpbnN0YWxsZWQgKi99XG4gICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpbkJvdHRvbT17MX0+XG4gICAgICAgICAgPFRleHQgYm9sZD5XaWxsIGluc3RhbGw6PC9UZXh0PlxuICAgICAgICAgIHtzZWxlY3RlZFBsdWdpbi5lbnRyeS5jb21tYW5kcyAmJiAoXG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgwrcgQ29tbWFuZHM6eycgJ31cbiAgICAgICAgICAgICAge0FycmF5LmlzQXJyYXkoc2VsZWN0ZWRQbHVnaW4uZW50cnkuY29tbWFuZHMpXG4gICAgICAgICAgICAgICAgPyBzZWxlY3RlZFBsdWdpbi5lbnRyeS5jb21tYW5kcy5qb2luKCcsICcpXG4gICAgICAgICAgICAgICAgOiBPYmplY3Qua2V5cyhzZWxlY3RlZFBsdWdpbi5lbnRyeS5jb21tYW5kcykuam9pbignLCAnKX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtzZWxlY3RlZFBsdWdpbi5lbnRyeS5hZ2VudHMgJiYgKFxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgIMK3IEFnZW50czp7JyAnfVxuICAgICAgICAgICAgICB7QXJyYXkuaXNBcnJheShzZWxlY3RlZFBsdWdpbi5lbnRyeS5hZ2VudHMpXG4gICAgICAgICAgICAgICAgPyBzZWxlY3RlZFBsdWdpbi5lbnRyeS5hZ2VudHMuam9pbignLCAnKVxuICAgICAgICAgICAgICAgIDogT2JqZWN0LmtleXMoc2VsZWN0ZWRQbHVnaW4uZW50cnkuYWdlbnRzKS5qb2luKCcsICcpfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICl9XG4gICAgICAgICAge3NlbGVjdGVkUGx1Z2luLmVudHJ5Lmhvb2tzICYmIChcbiAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICDCtyBIb29rczoge09iamVjdC5rZXlzKHNlbGVjdGVkUGx1Z2luLmVudHJ5Lmhvb2tzKS5qb2luKCcsICcpfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICl9XG4gICAgICAgICAge3NlbGVjdGVkUGx1Z2luLmVudHJ5Lm1jcFNlcnZlcnMgJiYgKFxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgIMK3IE1DUCBTZXJ2ZXJzOnsnICd9XG4gICAgICAgICAgICAgIHtBcnJheS5pc0FycmF5KHNlbGVjdGVkUGx1Z2luLmVudHJ5Lm1jcFNlcnZlcnMpXG4gICAgICAgICAgICAgICAgPyBzZWxlY3RlZFBsdWdpbi5lbnRyeS5tY3BTZXJ2ZXJzLmpvaW4oJywgJylcbiAgICAgICAgICAgICAgICA6IHR5cGVvZiBzZWxlY3RlZFBsdWdpbi5lbnRyeS5tY3BTZXJ2ZXJzID09PSAnb2JqZWN0J1xuICAgICAgICAgICAgICAgICAgPyBPYmplY3Qua2V5cyhzZWxlY3RlZFBsdWdpbi5lbnRyeS5tY3BTZXJ2ZXJzKS5qb2luKCcsICcpXG4gICAgICAgICAgICAgICAgICA6ICdjb25maWd1cmVkJ31cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHshc2VsZWN0ZWRQbHVnaW4uZW50cnkuY29tbWFuZHMgJiZcbiAgICAgICAgICAgICFzZWxlY3RlZFBsdWdpbi5lbnRyeS5hZ2VudHMgJiZcbiAgICAgICAgICAgICFzZWxlY3RlZFBsdWdpbi5lbnRyeS5ob29rcyAmJlxuICAgICAgICAgICAgIXNlbGVjdGVkUGx1Z2luLmVudHJ5Lm1jcFNlcnZlcnMgJiYgKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIHt0eXBlb2Ygc2VsZWN0ZWRQbHVnaW4uZW50cnkuc291cmNlID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICAgICAgICdzb3VyY2UnIGluIHNlbGVjdGVkUGx1Z2luLmVudHJ5LnNvdXJjZSAmJlxuICAgICAgICAgICAgICAgIChzZWxlY3RlZFBsdWdpbi5lbnRyeS5zb3VyY2Uuc291cmNlID09PSAnZ2l0aHViJyB8fFxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQbHVnaW4uZW50cnkuc291cmNlLnNvdXJjZSA9PT0gJ3VybCcgfHxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUGx1Z2luLmVudHJ5LnNvdXJjZS5zb3VyY2UgPT09ICducG0nIHx8XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZFBsdWdpbi5lbnRyeS5zb3VyY2Uuc291cmNlID09PSAncGlwJykgPyAoXG4gICAgICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgICAgICAgwrcgQ29tcG9uZW50IHN1bW1hcnkgbm90IGF2YWlsYWJsZSBmb3IgcmVtb3RlIHBsdWdpblxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAvLyBUT0RPOiBBY3R1YWxseSBzY2FuIGxvY2FsIHBsdWdpbiBkaXJlY3RvcmllcyB0byBzaG93IHJlYWwgY29tcG9uZW50c1xuICAgICAgICAgICAgICAgICAgLy8gVGhpcyB3b3VsZCByZXF1aXJlIGFjY2Vzc2luZyB0aGUgZmlsZXN5c3RlbSB0byBjaGVjayBmb3I6XG4gICAgICAgICAgICAgICAgICAvLyAtIGNvbW1hbmRzLyBkaXJlY3RvcnkgYW5kIGxpc3QgZmlsZXNcbiAgICAgICAgICAgICAgICAgIC8vIC0gYWdlbnRzLyBkaXJlY3RvcnkgYW5kIGxpc3QgZmlsZXNcbiAgICAgICAgICAgICAgICAgIC8vIC0gaG9va3MvIGRpcmVjdG9yeSBhbmQgbGlzdCBmaWxlc1xuICAgICAgICAgICAgICAgICAgLy8gLSAubWNwLmpzb24gb3IgbWNwLXNlcnZlcnMuanNvbiBmaWxlc1xuICAgICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgICAgICAgIMK3IENvbXBvbmVudHMgd2lsbCBiZSBkaXNjb3ZlcmVkIGF0IGluc3RhbGxhdGlvblxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgPFBsdWdpblRydXN0V2FybmluZyAvPlxuXG4gICAgICAgIHsvKiBFcnJvciBtZXNzYWdlICovfVxuICAgICAgICB7aW5zdGFsbEVycm9yICYmIChcbiAgICAgICAgICA8Qm94IG1hcmdpbkJvdHRvbT17MX0+XG4gICAgICAgICAgICA8VGV4dCBjb2xvcj1cImVycm9yXCI+RXJyb3I6IHtpbnN0YWxsRXJyb3J9PC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBNZW51IG9wdGlvbnMgKi99XG4gICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgIHttZW51T3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxCb3gga2V5PXtvcHRpb24uYWN0aW9ufT5cbiAgICAgICAgICAgICAge2RldGFpbHNNZW51SW5kZXggPT09IGluZGV4ICYmIDxUZXh0PnsnPiAnfTwvVGV4dD59XG4gICAgICAgICAgICAgIHtkZXRhaWxzTWVudUluZGV4ICE9PSBpbmRleCAmJiA8VGV4dD57JyAgJ308L1RleHQ+fVxuICAgICAgICAgICAgICA8VGV4dCBib2xkPXtkZXRhaWxzTWVudUluZGV4ID09PSBpbmRleH0+XG4gICAgICAgICAgICAgICAge2lzSW5zdGFsbGluZyAmJiBvcHRpb24uYWN0aW9uID09PSAnaW5zdGFsbCdcbiAgICAgICAgICAgICAgICAgID8gJ0luc3RhbGxpbmfigKYnXG4gICAgICAgICAgICAgICAgICA6IG9wdGlvbi5sYWJlbH1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfSBwYWRkaW5nTGVmdD17MX0+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICA8QnlsaW5lPlxuICAgICAgICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgICAgICAgYWN0aW9uPVwic2VsZWN0OmFjY2VwdFwiXG4gICAgICAgICAgICAgICAgY29udGV4dD1cIlNlbGVjdFwiXG4gICAgICAgICAgICAgICAgZmFsbGJhY2s9XCJFbnRlclwiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJzZWxlY3RcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgICAgICAgYWN0aW9uPVwiY29uZmlybTpub1wiXG4gICAgICAgICAgICAgICAgY29udGV4dD1cIkNvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICAgICAgZmFsbGJhY2s9XCJFc2NcIlxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiYmFja1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0J5bGluZT5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgLy8gUGx1Z2luIGluc3RhbGxhdGlvbiB2aWV3XG4gIGlmIChhdmFpbGFibGVQbHVnaW5zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgPEJveCBtYXJnaW5Cb3R0b209ezF9PlxuICAgICAgICAgIDxUZXh0IGJvbGQ+SW5zdGFsbCBwbHVnaW5zPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPFRleHQgZGltQ29sb3I+Tm8gbmV3IHBsdWdpbnMgYXZhaWxhYmxlIHRvIGluc3RhbGwuPC9UZXh0PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICBBbGwgcGx1Z2lucyBmcm9tIHRoaXMgbWFya2V0cGxhY2UgYXJlIGFscmVhZHkgaW5zdGFsbGVkLlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxCb3ggbWFyZ2luTGVmdD17M30+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3IgaXRhbGljPlxuICAgICAgICAgICAgPENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludFxuICAgICAgICAgICAgICBhY3Rpb249XCJjb25maXJtOm5vXCJcbiAgICAgICAgICAgICAgY29udGV4dD1cIkNvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICAgIGZhbGxiYWNrPVwiRXNjXCJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJnbyBiYWNrXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxuXG4gIC8vIEdldCB2aXNpYmxlIHBsdWdpbnMgZnJvbSBwYWdpbmF0aW9uXG4gIGNvbnN0IHZpc2libGVQbHVnaW5zID0gcGFnaW5hdGlvbi5nZXRWaXNpYmxlSXRlbXMoYXZhaWxhYmxlUGx1Z2lucylcblxuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgPEJveCBtYXJnaW5Cb3R0b209ezF9PlxuICAgICAgICA8VGV4dCBib2xkPkluc3RhbGwgUGx1Z2luczwvVGV4dD5cbiAgICAgIDwvQm94PlxuXG4gICAgICB7LyogU2Nyb2xsIHVwIGluZGljYXRvciAqL31cbiAgICAgIHtwYWdpbmF0aW9uLnNjcm9sbFBvc2l0aW9uLmNhblNjcm9sbFVwICYmIChcbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj4ge2ZpZ3VyZXMuYXJyb3dVcH0gbW9yZSBhYm92ZTwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuXG4gICAgICB7LyogUGx1Z2luIGxpc3QgKi99XG4gICAgICB7dmlzaWJsZVBsdWdpbnMubWFwKChwbHVnaW4sIHZpc2libGVJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBhY3R1YWxJbmRleCA9IHBhZ2luYXRpb24udG9BY3R1YWxJbmRleCh2aXNpYmxlSW5kZXgpXG4gICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZEluZGV4ID09PSBhY3R1YWxJbmRleFxuICAgICAgICBjb25zdCBpc1NlbGVjdGVkRm9ySW5zdGFsbCA9IHNlbGVjdGVkRm9ySW5zdGFsbC5oYXMocGx1Z2luLnBsdWdpbklkKVxuICAgICAgICBjb25zdCBpc0luc3RhbGxpbmcgPSBpbnN0YWxsaW5nUGx1Z2lucy5oYXMocGx1Z2luLnBsdWdpbklkKVxuICAgICAgICBjb25zdCBpc0xhc3QgPSB2aXNpYmxlSW5kZXggPT09IHZpc2libGVQbHVnaW5zLmxlbmd0aCAtIDFcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGtleT17cGx1Z2luLnBsdWdpbklkfVxuICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b209e2lzTGFzdCAmJiAhZXJyb3IgPyAwIDogMX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8VGV4dCBjb2xvcj17aXNTZWxlY3RlZCA/ICdzdWdnZXN0aW9uJyA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAgICAgICAge2lzU2VsZWN0ZWQgPyBmaWd1cmVzLnBvaW50ZXIgOiAnICd9eycgJ31cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dCBjb2xvcj17cGx1Z2luLmlzSW5zdGFsbGVkID8gJ3N1Y2Nlc3MnIDogdW5kZWZpbmVkfT5cbiAgICAgICAgICAgICAgICB7cGx1Z2luLmlzSW5zdGFsbGVkXG4gICAgICAgICAgICAgICAgICA/IGZpZ3VyZXMudGlja1xuICAgICAgICAgICAgICAgICAgOiBpc0luc3RhbGxpbmdcbiAgICAgICAgICAgICAgICAgICAgPyBmaWd1cmVzLmVsbGlwc2lzXG4gICAgICAgICAgICAgICAgICAgIDogaXNTZWxlY3RlZEZvckluc3RhbGxcbiAgICAgICAgICAgICAgICAgICAgICA/IGZpZ3VyZXMucmFkaW9PblxuICAgICAgICAgICAgICAgICAgICAgIDogZmlndXJlcy5yYWRpb09mZn17JyAnfVxuICAgICAgICAgICAgICAgIHtwbHVnaW4uZW50cnkubmFtZX1cbiAgICAgICAgICAgICAgICB7cGx1Z2luLmVudHJ5LmNhdGVnb3J5ICYmIChcbiAgICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPiBbe3BsdWdpbi5lbnRyeS5jYXRlZ29yeX1dPC9UZXh0PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge3BsdWdpbi5lbnRyeS50YWdzPy5pbmNsdWRlcygnY29tbXVuaXR5LW1hbmFnZWQnKSAmJiAoXG4gICAgICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj4gW0NvbW11bml0eSBNYW5hZ2VkXTwvVGV4dD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtwbHVnaW4uaXNJbnN0YWxsZWQgJiYgPFRleHQgZGltQ29sb3I+IChpbnN0YWxsZWQpPC9UZXh0Pn1cbiAgICAgICAgICAgICAgICB7aW5zdGFsbENvdW50cyAmJlxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRNYXJrZXRwbGFjZSA9PT0gT0ZGSUNJQUxfTUFSS0VUUExBQ0VfTkFNRSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICAgICAgICAgIHsnIMK3ICd9XG4gICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdEluc3RhbGxDb3VudChcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbGxDb3VudHMuZ2V0KHBsdWdpbi5wbHVnaW5JZCkgPz8gMCxcbiAgICAgICAgICAgICAgICAgICAgICApfXsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgaW5zdGFsbHNcbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICB7cGx1Z2luLmVudHJ5LmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgICAgPEJveCBtYXJnaW5MZWZ0PXs0fT5cbiAgICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgICAgIHt0cnVuY2F0ZVRvV2lkdGgocGx1Z2luLmVudHJ5LmRlc2NyaXB0aW9uLCA2MCl9XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIHtwbHVnaW4uZW50cnkudmVyc2lvbiAmJiAoXG4gICAgICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj4gwrcgdntwbHVnaW4uZW50cnkudmVyc2lvbn08L1RleHQ+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApXG4gICAgICB9KX1cblxuICAgICAgey8qIFNjcm9sbCBkb3duIGluZGljYXRvciAqL31cbiAgICAgIHtwYWdpbmF0aW9uLnNjcm9sbFBvc2l0aW9uLmNhblNjcm9sbERvd24gJiYgKFxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPiB7ZmlndXJlcy5hcnJvd0Rvd259IG1vcmUgYmVsb3c8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cblxuICAgICAgey8qIEVycm9yIG1lc3NhZ2VzIHNob3duIGluIHRoZSBVSSAqL31cbiAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICA8VGV4dCBjb2xvcj1cImVycm9yXCI+XG4gICAgICAgICAgICB7ZmlndXJlcy5jcm9zc30ge2Vycm9yfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuXG4gICAgICA8UGx1Z2luU2VsZWN0aW9uS2V5SGludCBoYXNTZWxlY3Rpb249e3NlbGVjdGVkRm9ySW5zdGFsbC5zaXplID4gMH0gLz5cbiAgICA8L0JveD5cbiAgKVxufVxuIiwgImltcG9ydCBmaWd1cmVzIGZyb20gJ2ZpZ3VyZXMnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb25maWd1cmFibGVTaG9ydGN1dEhpbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbmZpZ3VyYWJsZVNob3J0Y3V0SGludC5qcydcbmltcG9ydCB7IEJ5bGluZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGVzaWduLXN5c3RlbS9CeWxpbmUuanMnXG5pbXBvcnQgeyBTZWFyY2hCb3ggfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlYXJjaEJveC5qcydcbmltcG9ydCB7IHVzZVNlYXJjaElucHV0IH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlU2VhcmNoSW5wdXQuanMnXG5pbXBvcnQgeyB1c2VUZXJtaW5hbFNpemUgfSBmcm9tICcuLi8uLi9ob29rcy91c2VUZXJtaW5hbFNpemUuanMnXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3VzdG9tLXJ1bGVzL3ByZWZlci11c2Uta2V5YmluZGluZ3MgLS0gdXNlSW5wdXQgbmVlZGVkIGZvciByYXcgc2VhcmNoIG1vZGUgdGV4dCBpbnB1dFxuaW1wb3J0IHsgQm94LCBUZXh0LCB1c2VJbnB1dCwgdXNlVGVybWluYWxGb2N1cyB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7XG4gIHVzZUtleWJpbmRpbmcsXG4gIHVzZUtleWJpbmRpbmdzLFxufSBmcm9tICcuLi8uLi9rZXliaW5kaW5ncy91c2VLZXliaW5kaW5nLmpzJ1xuaW1wb3J0IHR5cGUgeyBMb2FkZWRQbHVnaW4gfSBmcm9tICcuLi8uLi90eXBlcy9wbHVnaW4uanMnXG5pbXBvcnQgeyBjb3VudCB9IGZyb20gJy4uLy4uL3V0aWxzL2FycmF5LmpzJ1xuaW1wb3J0IHsgb3BlbkJyb3dzZXIgfSBmcm9tICcuLi8uLi91dGlscy9icm93c2VyLmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGVidWcuanMnXG5pbXBvcnQgeyBlcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi91dGlscy9lcnJvcnMuanMnXG5pbXBvcnQgeyBjbGVhckFsbENhY2hlcyB9IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvY2FjaGVVdGlscy5qcydcbmltcG9ydCB7XG4gIGZvcm1hdEluc3RhbGxDb3VudCxcbiAgZ2V0SW5zdGFsbENvdW50cyxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvcGx1Z2lucy9pbnN0YWxsQ291bnRzLmpzJ1xuaW1wb3J0IHsgaXNQbHVnaW5HbG9iYWxseUluc3RhbGxlZCB9IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvaW5zdGFsbGVkUGx1Z2luc01hbmFnZXIuanMnXG5pbXBvcnQge1xuICBjcmVhdGVQbHVnaW5JZCxcbiAgZGV0ZWN0RW1wdHlNYXJrZXRwbGFjZVJlYXNvbixcbiAgdHlwZSBFbXB0eU1hcmtldHBsYWNlUmVhc29uLFxuICBmb3JtYXRGYWlsdXJlRGV0YWlscyxcbiAgZm9ybWF0TWFya2V0cGxhY2VMb2FkaW5nRXJyb3JzLFxuICBsb2FkTWFya2V0cGxhY2VzV2l0aEdyYWNlZnVsRGVncmFkYXRpb24sXG59IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvbWFya2V0cGxhY2VIZWxwZXJzLmpzJ1xuaW1wb3J0IHsgbG9hZEtub3duTWFya2V0cGxhY2VzQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbHMvcGx1Z2lucy9tYXJrZXRwbGFjZU1hbmFnZXIuanMnXG5pbXBvcnQgeyBPRkZJQ0lBTF9NQVJLRVRQTEFDRV9OQU1FIH0gZnJvbSAnLi4vLi4vdXRpbHMvcGx1Z2lucy9vZmZpY2lhbE1hcmtldHBsYWNlLmpzJ1xuaW1wb3J0IHsgaW5zdGFsbFBsdWdpbkZyb21NYXJrZXRwbGFjZSB9IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvcGx1Z2luSW5zdGFsbGF0aW9uSGVscGVycy5qcydcbmltcG9ydCB7IGlzUGx1Z2luQmxvY2tlZEJ5UG9saWN5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcGx1Z2lucy9wbHVnaW5Qb2xpY3kuanMnXG5pbXBvcnQgeyBwbHVyYWwgfSBmcm9tICcuLi8uLi91dGlscy9zdHJpbmdVdGlscy5qcydcbmltcG9ydCB7IHRydW5jYXRlVG9XaWR0aCB9IGZyb20gJy4uLy4uL3V0aWxzL3RydW5jYXRlLmpzJ1xuaW1wb3J0IHtcbiAgZmluZFBsdWdpbk9wdGlvbnNUYXJnZXQsXG4gIFBsdWdpbk9wdGlvbnNGbG93LFxufSBmcm9tICcuL1BsdWdpbk9wdGlvbnNGbG93LmpzJ1xuaW1wb3J0IHsgUGx1Z2luVHJ1c3RXYXJuaW5nIH0gZnJvbSAnLi9QbHVnaW5UcnVzdFdhcm5pbmcuanMnXG5pbXBvcnQge1xuICBidWlsZFBsdWdpbkRldGFpbHNNZW51T3B0aW9ucyxcbiAgZXh0cmFjdEdpdEh1YlJlcG8sXG4gIHR5cGUgSW5zdGFsbGFibGVQbHVnaW4sXG59IGZyb20gJy4vcGx1Z2luRGV0YWlsc0hlbHBlcnMuanMnXG5pbXBvcnQgdHlwZSB7IFZpZXdTdGF0ZSBhcyBQYXJlbnRWaWV3U3RhdGUgfSBmcm9tICcuL3R5cGVzLmpzJ1xuaW1wb3J0IHsgdXNlUGFnaW5hdGlvbiB9IGZyb20gJy4vdXNlUGFnaW5hdGlvbi5qcydcblxudHlwZSBQcm9wcyA9IHtcbiAgZXJyb3I6IHN0cmluZyB8IG51bGxcbiAgc2V0RXJyb3I6IChlcnJvcjogc3RyaW5nIHwgbnVsbCkgPT4gdm9pZFxuICByZXN1bHQ6IHN0cmluZyB8IG51bGxcbiAgc2V0UmVzdWx0OiAocmVzdWx0OiBzdHJpbmcgfCBudWxsKSA9PiB2b2lkXG4gIHNldFZpZXdTdGF0ZTogKHN0YXRlOiBQYXJlbnRWaWV3U3RhdGUpID0+IHZvaWRcbiAgb25JbnN0YWxsQ29tcGxldGU/OiAoKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuICBvblNlYXJjaE1vZGVDaGFuZ2U/OiAoaXNBY3RpdmU6IGJvb2xlYW4pID0+IHZvaWRcbiAgdGFyZ2V0UGx1Z2luPzogc3RyaW5nXG59XG5cbnR5cGUgVmlld1N0YXRlID1cbiAgfCAncGx1Z2luLWxpc3QnXG4gIHwgJ3BsdWdpbi1kZXRhaWxzJ1xuICB8IHsgdHlwZTogJ3BsdWdpbi1vcHRpb25zJzsgcGx1Z2luOiBMb2FkZWRQbHVnaW47IHBsdWdpbklkOiBzdHJpbmcgfVxuXG5leHBvcnQgZnVuY3Rpb24gRGlzY292ZXJQbHVnaW5zKHtcbiAgZXJyb3IsXG4gIHNldEVycm9yLFxuICByZXN1bHQ6IF9yZXN1bHQsXG4gIHNldFJlc3VsdCxcbiAgc2V0Vmlld1N0YXRlOiBzZXRQYXJlbnRWaWV3U3RhdGUsXG4gIG9uSW5zdGFsbENvbXBsZXRlLFxuICBvblNlYXJjaE1vZGVDaGFuZ2UsXG4gIHRhcmdldFBsdWdpbixcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgLy8gVmlldyBzdGF0ZVxuICBjb25zdCBbdmlld1N0YXRlLCBzZXRWaWV3U3RhdGVdID0gdXNlU3RhdGU8Vmlld1N0YXRlPigncGx1Z2luLWxpc3QnKVxuICBjb25zdCBbc2VsZWN0ZWRQbHVnaW4sIHNldFNlbGVjdGVkUGx1Z2luXSA9XG4gICAgdXNlU3RhdGU8SW5zdGFsbGFibGVQbHVnaW4gfCBudWxsPihudWxsKVxuXG4gIC8vIERhdGEgc3RhdGVcbiAgY29uc3QgW2F2YWlsYWJsZVBsdWdpbnMsIHNldEF2YWlsYWJsZVBsdWdpbnNdID0gdXNlU3RhdGU8SW5zdGFsbGFibGVQbHVnaW5bXT4oXG4gICAgW10sXG4gIClcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW2luc3RhbGxDb3VudHMsIHNldEluc3RhbGxDb3VudHNdID0gdXNlU3RhdGU8TWFwPFxuICAgIHN0cmluZyxcbiAgICBudW1iZXJcbiAgPiB8IG51bGw+KG51bGwpXG5cbiAgLy8gU2VhcmNoIHN0YXRlXG4gIGNvbnN0IFtpc1NlYXJjaE1vZGUsIHNldElzU2VhcmNoTW9kZVJhd10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3Qgc2V0SXNTZWFyY2hNb2RlID0gdXNlQ2FsbGJhY2soXG4gICAgKGFjdGl2ZTogYm9vbGVhbikgPT4ge1xuICAgICAgc2V0SXNTZWFyY2hNb2RlUmF3KGFjdGl2ZSlcbiAgICAgIG9uU2VhcmNoTW9kZUNoYW5nZT8uKGFjdGl2ZSlcbiAgICB9LFxuICAgIFtvblNlYXJjaE1vZGVDaGFuZ2VdLFxuICApXG4gIGNvbnN0IHtcbiAgICBxdWVyeTogc2VhcmNoUXVlcnksXG4gICAgc2V0UXVlcnk6IHNldFNlYXJjaFF1ZXJ5LFxuICAgIGN1cnNvck9mZnNldDogc2VhcmNoQ3Vyc29yT2Zmc2V0LFxuICB9ID0gdXNlU2VhcmNoSW5wdXQoe1xuICAgIGlzQWN0aXZlOiB2aWV3U3RhdGUgPT09ICdwbHVnaW4tbGlzdCcgJiYgaXNTZWFyY2hNb2RlICYmICFsb2FkaW5nLFxuICAgIG9uRXhpdDogKCkgPT4ge1xuICAgICAgc2V0SXNTZWFyY2hNb2RlKGZhbHNlKVxuICAgIH0sXG4gIH0pXG4gIGNvbnN0IGlzVGVybWluYWxGb2N1c2VkID0gdXNlVGVybWluYWxGb2N1cygpXG4gIGNvbnN0IHsgY29sdW1uczogdGVybWluYWxXaWR0aCB9ID0gdXNlVGVybWluYWxTaXplKClcblxuICAvLyBGaWx0ZXIgcGx1Z2lucyBiYXNlZCBvbiBzZWFyY2ggcXVlcnlcbiAgY29uc3QgZmlsdGVyZWRQbHVnaW5zID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKCFzZWFyY2hRdWVyeSkgcmV0dXJuIGF2YWlsYWJsZVBsdWdpbnNcbiAgICBjb25zdCBsb3dlclF1ZXJ5ID0gc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKVxuICAgIHJldHVybiBhdmFpbGFibGVQbHVnaW5zLmZpbHRlcihcbiAgICAgIHBsdWdpbiA9PlxuICAgICAgICBwbHVnaW4uZW50cnkubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyUXVlcnkpIHx8XG4gICAgICAgIHBsdWdpbi5lbnRyeS5kZXNjcmlwdGlvbj8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlclF1ZXJ5KSB8fFxuICAgICAgICBwbHVnaW4ubWFya2V0cGxhY2VOYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobG93ZXJRdWVyeSksXG4gICAgKVxuICB9LCBbYXZhaWxhYmxlUGx1Z2lucywgc2VhcmNoUXVlcnldKVxuXG4gIC8vIFNlbGVjdGlvbiBzdGF0ZVxuICBjb25zdCBbc2VsZWN0ZWRJbmRleCwgc2V0U2VsZWN0ZWRJbmRleF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbc2VsZWN0ZWRGb3JJbnN0YWxsLCBzZXRTZWxlY3RlZEZvckluc3RhbGxdID0gdXNlU3RhdGU8U2V0PHN0cmluZz4+KFxuICAgIG5ldyBTZXQoKSxcbiAgKVxuICBjb25zdCBbaW5zdGFsbGluZ1BsdWdpbnMsIHNldEluc3RhbGxpbmdQbHVnaW5zXSA9IHVzZVN0YXRlPFNldDxzdHJpbmc+PihcbiAgICBuZXcgU2V0KCksXG4gIClcblxuICAvLyBQYWdpbmF0aW9uIGZvciBwbHVnaW4gbGlzdCAoY29udGludW91cyBzY3JvbGxpbmcpXG4gIGNvbnN0IHBhZ2luYXRpb24gPSB1c2VQYWdpbmF0aW9uPEluc3RhbGxhYmxlUGx1Z2luPih7XG4gICAgdG90YWxJdGVtczogZmlsdGVyZWRQbHVnaW5zLmxlbmd0aCxcbiAgICBzZWxlY3RlZEluZGV4LFxuICB9KVxuXG4gIC8vIFJlc2V0IHNlbGVjdGlvbiB3aGVuIHNlYXJjaCBxdWVyeSBjaGFuZ2VzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRJbmRleCgwKVxuICB9LCBbc2VhcmNoUXVlcnldKVxuXG4gIC8vIERldGFpbHMgdmlldyBzdGF0ZVxuICBjb25zdCBbZGV0YWlsc01lbnVJbmRleCwgc2V0RGV0YWlsc01lbnVJbmRleF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbaXNJbnN0YWxsaW5nLCBzZXRJc0luc3RhbGxpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpbnN0YWxsRXJyb3IsIHNldEluc3RhbGxFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuXG4gIC8vIFdhcm5pbmcgc3RhdGUgZm9yIG5vbi1jcml0aWNhbCBlcnJvcnNcbiAgY29uc3QgW3dhcm5pbmcsIHNldFdhcm5pbmddID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcblxuICAvLyBFbXB0eSBzdGF0ZSByZWFzb25cbiAgY29uc3QgW2VtcHR5UmVhc29uLCBzZXRFbXB0eVJlYXNvbl0gPSB1c2VTdGF0ZTxFbXB0eU1hcmtldHBsYWNlUmVhc29uIHwgbnVsbD4oXG4gICAgbnVsbCxcbiAgKVxuXG4gIC8vIExvYWQgYWxsIHBsdWdpbnMgZnJvbSBhbGwgbWFya2V0cGxhY2VzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZEFsbFBsdWdpbnMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBjb25maWcgPSBhd2FpdCBsb2FkS25vd25NYXJrZXRwbGFjZXNDb25maWcoKVxuXG4gICAgICAgIC8vIExvYWQgbWFya2V0cGxhY2VzIHdpdGggZ3JhY2VmdWwgZGVncmFkYXRpb25cbiAgICAgICAgY29uc3QgeyBtYXJrZXRwbGFjZXMsIGZhaWx1cmVzIH0gPVxuICAgICAgICAgIGF3YWl0IGxvYWRNYXJrZXRwbGFjZXNXaXRoR3JhY2VmdWxEZWdyYWRhdGlvbihjb25maWcpXG5cbiAgICAgICAgLy8gQ29sbGVjdCBhbGwgcGx1Z2lucyBmcm9tIGFsbCBtYXJrZXRwbGFjZXNcbiAgICAgICAgY29uc3QgYWxsUGx1Z2luczogSW5zdGFsbGFibGVQbHVnaW5bXSA9IFtdXG5cbiAgICAgICAgZm9yIChjb25zdCB7IG5hbWUsIGRhdGE6IG1hcmtldHBsYWNlIH0gb2YgbWFya2V0cGxhY2VzKSB7XG4gICAgICAgICAgaWYgKG1hcmtldHBsYWNlKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIG1hcmtldHBsYWNlLnBsdWdpbnMpIHtcbiAgICAgICAgICAgICAgY29uc3QgcGx1Z2luSWQgPSBjcmVhdGVQbHVnaW5JZChlbnRyeS5uYW1lLCBuYW1lKVxuICAgICAgICAgICAgICBhbGxQbHVnaW5zLnB1c2goe1xuICAgICAgICAgICAgICAgIGVudHJ5LFxuICAgICAgICAgICAgICAgIG1hcmtldHBsYWNlTmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBwbHVnaW5JZCxcbiAgICAgICAgICAgICAgICAvLyBPbmx5IGJsb2NrIHdoZW4gZ2xvYmFsbHkgaW5zdGFsbGVkICh1c2VyL21hbmFnZWQgc2NvcGUpLlxuICAgICAgICAgICAgICAgIC8vIFByb2plY3QvbG9jYWwtc2NvcGUgaW5zdGFsbHMgZG9uJ3QgYmxvY2sg4oCUIHVzZXIgbWF5IHdhbnQgdG9cbiAgICAgICAgICAgICAgICAvLyBwcm9tb3RlIHRvIHVzZXIgc2NvcGUgc28gaXQncyBhdmFpbGFibGUgZXZlcnl3aGVyZSAoZ2gtMjk5OTcpLlxuICAgICAgICAgICAgICAgIGlzSW5zdGFsbGVkOiBpc1BsdWdpbkdsb2JhbGx5SW5zdGFsbGVkKHBsdWdpbklkKSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaWx0ZXIgb3V0IGluc3RhbGxlZCBhbmQgcG9saWN5LWJsb2NrZWQgcGx1Z2luc1xuICAgICAgICBjb25zdCB1bmluc3RhbGxlZFBsdWdpbnMgPSBhbGxQbHVnaW5zLmZpbHRlcihcbiAgICAgICAgICBwID0+ICFwLmlzSW5zdGFsbGVkICYmICFpc1BsdWdpbkJsb2NrZWRCeVBvbGljeShwLnBsdWdpbklkKSxcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIEZldGNoIGluc3RhbGwgY291bnRzIGFuZCBzb3J0IGJ5IHBvcHVsYXJpdHlcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBjb3VudHMgPSBhd2FpdCBnZXRJbnN0YWxsQ291bnRzKClcbiAgICAgICAgICBzZXRJbnN0YWxsQ291bnRzKGNvdW50cylcblxuICAgICAgICAgIGlmIChjb3VudHMpIHtcbiAgICAgICAgICAgIC8vIFNvcnQgYnkgaW5zdGFsbCBjb3VudCAoZGVzY2VuZGluZyksIHRoZW4gYWxwaGFiZXRpY2FsbHlcbiAgICAgICAgICAgIHVuaW5zdGFsbGVkUGx1Z2lucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvdW50QSA9IGNvdW50cy5nZXQoYS5wbHVnaW5JZCkgPz8gMFxuICAgICAgICAgICAgICBjb25zdCBjb3VudEIgPSBjb3VudHMuZ2V0KGIucGx1Z2luSWQpID8/IDBcbiAgICAgICAgICAgICAgaWYgKGNvdW50QSAhPT0gY291bnRCKSByZXR1cm4gY291bnRCIC0gY291bnRBXG4gICAgICAgICAgICAgIHJldHVybiBhLmVudHJ5Lm5hbWUubG9jYWxlQ29tcGFyZShiLmVudHJ5Lm5hbWUpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBObyBjb3VudHMgYXZhaWxhYmxlIC0gc29ydCBhbHBoYWJldGljYWxseVxuICAgICAgICAgICAgdW5pbnN0YWxsZWRQbHVnaW5zLnNvcnQoKGEsIGIpID0+XG4gICAgICAgICAgICAgIGEuZW50cnkubmFtZS5sb2NhbGVDb21wYXJlKGIuZW50cnkubmFtZSksXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIC8vIExvZyB0aGUgZXJyb3IsIHRoZW4gZ3JhY2VmdWxseSBkZWdyYWRlIHRvIGFscGhhYmV0aWNhbCBzb3J0XG4gICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgYEZhaWxlZCB0byBmZXRjaCBpbnN0YWxsIGNvdW50czogJHtlcnJvck1lc3NhZ2UoZXJyb3IpfWAsXG4gICAgICAgICAgKVxuICAgICAgICAgIHVuaW5zdGFsbGVkUGx1Z2lucy5zb3J0KChhLCBiKSA9PlxuICAgICAgICAgICAgYS5lbnRyeS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5lbnRyeS5uYW1lKSxcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBzZXRBdmFpbGFibGVQbHVnaW5zKHVuaW5zdGFsbGVkUGx1Z2lucylcblxuICAgICAgICAvLyBEZXRlY3QgZW1wdHkgcmVhc29uIGlmIG5vIHBsdWdpbnMgYXZhaWxhYmxlXG4gICAgICAgIGNvbnN0IGNvbmZpZ3VyZWRDb3VudCA9IE9iamVjdC5rZXlzKGNvbmZpZykubGVuZ3RoXG4gICAgICAgIGlmICh1bmluc3RhbGxlZFBsdWdpbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgY29uc3QgcmVhc29uID0gYXdhaXQgZGV0ZWN0RW1wdHlNYXJrZXRwbGFjZVJlYXNvbih7XG4gICAgICAgICAgICBjb25maWd1cmVkTWFya2V0cGxhY2VDb3VudDogY29uZmlndXJlZENvdW50LFxuICAgICAgICAgICAgZmFpbGVkTWFya2V0cGxhY2VDb3VudDogZmFpbHVyZXMubGVuZ3RoLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgc2V0RW1wdHlSZWFzb24ocmVhc29uKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGFuZGxlIG1hcmtldHBsYWNlIGxvYWRpbmcgZXJyb3JzL3dhcm5pbmdzXG4gICAgICAgIGNvbnN0IHN1Y2Nlc3NDb3VudCA9IGNvdW50KG1hcmtldHBsYWNlcywgbSA9PiBtLmRhdGEgIT09IG51bGwpXG4gICAgICAgIGNvbnN0IGVycm9yUmVzdWx0ID0gZm9ybWF0TWFya2V0cGxhY2VMb2FkaW5nRXJyb3JzKFxuICAgICAgICAgIGZhaWx1cmVzLFxuICAgICAgICAgIHN1Y2Nlc3NDb3VudCxcbiAgICAgICAgKVxuICAgICAgICBpZiAoZXJyb3JSZXN1bHQpIHtcbiAgICAgICAgICBpZiAoZXJyb3JSZXN1bHQudHlwZSA9PT0gJ3dhcm5pbmcnKSB7XG4gICAgICAgICAgICBzZXRXYXJuaW5nKGVycm9yUmVzdWx0Lm1lc3NhZ2UgKyAnLiBTaG93aW5nIGF2YWlsYWJsZSBwbHVnaW5zLicpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvclJlc3VsdC5tZXNzYWdlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhhbmRsZSB0YXJnZXRQbHVnaW4gLSBuYXZpZ2F0ZSBkaXJlY3RseSB0byBwbHVnaW4gZGV0YWlsc1xuICAgICAgICAvLyBTZWFyY2ggaW4gYWxsUGx1Z2lucyAoYmVmb3JlIGZpbHRlcmluZykgdG8gaGFuZGxlIGluc3RhbGxlZCBwbHVnaW5zIGdyYWNlZnVsbHlcbiAgICAgICAgaWYgKHRhcmdldFBsdWdpbikge1xuICAgICAgICAgIGNvbnN0IGZvdW5kUGx1Z2luID0gYWxsUGx1Z2lucy5maW5kKFxuICAgICAgICAgICAgcCA9PiBwLmVudHJ5Lm5hbWUgPT09IHRhcmdldFBsdWdpbixcbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAoZm91bmRQbHVnaW4pIHtcbiAgICAgICAgICAgIGlmIChmb3VuZFBsdWdpbi5pc0luc3RhbGxlZCkge1xuICAgICAgICAgICAgICBzZXRFcnJvcihcbiAgICAgICAgICAgICAgICBgUGx1Z2luICcke2ZvdW5kUGx1Z2luLnBsdWdpbklkfScgaXMgYWxyZWFkeSBpbnN0YWxsZWQuIFVzZSAnL3BsdWdpbicgdG8gbWFuYWdlIGV4aXN0aW5nIHBsdWdpbnMuYCxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRQbHVnaW4oZm91bmRQbHVnaW4pXG4gICAgICAgICAgICAgIHNldFZpZXdTdGF0ZSgncGx1Z2luLWRldGFpbHMnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRFcnJvcihgUGx1Z2luIFwiJHt0YXJnZXRQbHVnaW59XCIgbm90IGZvdW5kIGluIGFueSBtYXJrZXRwbGFjZWApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgc2V0RXJyb3IoZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6ICdGYWlsZWQgdG8gbG9hZCBwbHVnaW5zJylcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICB9XG4gICAgfVxuICAgIHZvaWQgbG9hZEFsbFBsdWdpbnMoKVxuICB9LCBbc2V0RXJyb3IsIHRhcmdldFBsdWdpbl0pXG5cbiAgLy8gSW5zdGFsbCBzZWxlY3RlZCBwbHVnaW5zXG4gIGNvbnN0IGluc3RhbGxTZWxlY3RlZFBsdWdpbnMgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkRm9ySW5zdGFsbC5zaXplID09PSAwKSByZXR1cm5cblxuICAgIGNvbnN0IHBsdWdpbnNUb0luc3RhbGwgPSBhdmFpbGFibGVQbHVnaW5zLmZpbHRlcihwID0+XG4gICAgICBzZWxlY3RlZEZvckluc3RhbGwuaGFzKHAucGx1Z2luSWQpLFxuICAgIClcblxuICAgIHNldEluc3RhbGxpbmdQbHVnaW5zKG5ldyBTZXQocGx1Z2luc1RvSW5zdGFsbC5tYXAocCA9PiBwLnBsdWdpbklkKSkpXG5cbiAgICBsZXQgc3VjY2Vzc0NvdW50ID0gMFxuICAgIGxldCBmYWlsdXJlQ291bnQgPSAwXG4gICAgY29uc3QgbmV3RmFpbGVkUGx1Z2luczogQXJyYXk8eyBuYW1lOiBzdHJpbmc7IHJlYXNvbjogc3RyaW5nIH0+ID0gW11cblxuICAgIGZvciAoY29uc3QgcGx1Z2luIG9mIHBsdWdpbnNUb0luc3RhbGwpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGluc3RhbGxQbHVnaW5Gcm9tTWFya2V0cGxhY2Uoe1xuICAgICAgICBwbHVnaW5JZDogcGx1Z2luLnBsdWdpbklkLFxuICAgICAgICBlbnRyeTogcGx1Z2luLmVudHJ5LFxuICAgICAgICBtYXJrZXRwbGFjZU5hbWU6IHBsdWdpbi5tYXJrZXRwbGFjZU5hbWUsXG4gICAgICAgIHNjb3BlOiAndXNlcicsXG4gICAgICB9KVxuXG4gICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgc3VjY2Vzc0NvdW50KytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZhaWx1cmVDb3VudCsrXG4gICAgICAgIG5ld0ZhaWxlZFBsdWdpbnMucHVzaCh7XG4gICAgICAgICAgbmFtZTogcGx1Z2luLmVudHJ5Lm5hbWUsXG4gICAgICAgICAgcmVhc29uOiByZXN1bHQuZXJyb3IsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0SW5zdGFsbGluZ1BsdWdpbnMobmV3IFNldCgpKVxuICAgIHNldFNlbGVjdGVkRm9ySW5zdGFsbChuZXcgU2V0KCkpXG4gICAgY2xlYXJBbGxDYWNoZXMoKVxuXG4gICAgLy8gSGFuZGxlIGluc3RhbGxhdGlvbiByZXN1bHRzXG4gICAgaWYgKGZhaWx1cmVDb3VudCA9PT0gMCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAgIGDinJMgSW5zdGFsbGVkICR7c3VjY2Vzc0NvdW50fSAke3BsdXJhbChzdWNjZXNzQ291bnQsICdwbHVnaW4nKX0uIGAgK1xuICAgICAgICBgUnVuIC9yZWxvYWQtcGx1Z2lucyB0byBhY3RpdmF0ZS5gXG4gICAgICBzZXRSZXN1bHQobWVzc2FnZSlcbiAgICB9IGVsc2UgaWYgKHN1Y2Nlc3NDb3VudCA9PT0gMCkge1xuICAgICAgc2V0RXJyb3IoXG4gICAgICAgIGBGYWlsZWQgdG8gaW5zdGFsbDogJHtmb3JtYXRGYWlsdXJlRGV0YWlscyhuZXdGYWlsZWRQbHVnaW5zLCB0cnVlKX1gLFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICAgYOKckyBJbnN0YWxsZWQgJHtzdWNjZXNzQ291bnR9IG9mICR7c3VjY2Vzc0NvdW50ICsgZmFpbHVyZUNvdW50fSBwbHVnaW5zLiBgICtcbiAgICAgICAgYEZhaWxlZDogJHtmb3JtYXRGYWlsdXJlRGV0YWlscyhuZXdGYWlsZWRQbHVnaW5zLCBmYWxzZSl9LiBgICtcbiAgICAgICAgYFJ1biAvcmVsb2FkLXBsdWdpbnMgdG8gYWN0aXZhdGUgc3VjY2Vzc2Z1bGx5IGluc3RhbGxlZCBwbHVnaW5zLmBcbiAgICAgIHNldFJlc3VsdChtZXNzYWdlKVxuICAgIH1cblxuICAgIGlmIChzdWNjZXNzQ291bnQgPiAwKSB7XG4gICAgICBpZiAob25JbnN0YWxsQ29tcGxldGUpIHtcbiAgICAgICAgYXdhaXQgb25JbnN0YWxsQ29tcGxldGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIHNldFBhcmVudFZpZXdTdGF0ZSh7IHR5cGU6ICdtZW51JyB9KVxuICB9XG5cbiAgLy8gSW5zdGFsbCBzaW5nbGUgcGx1Z2luIGZyb20gZGV0YWlscyB2aWV3XG4gIGNvbnN0IGhhbmRsZVNpbmdsZVBsdWdpbkluc3RhbGwgPSBhc3luYyAoXG4gICAgcGx1Z2luOiBJbnN0YWxsYWJsZVBsdWdpbixcbiAgICBzY29wZTogJ3VzZXInIHwgJ3Byb2plY3QnIHwgJ2xvY2FsJyA9ICd1c2VyJyxcbiAgKSA9PiB7XG4gICAgc2V0SXNJbnN0YWxsaW5nKHRydWUpXG4gICAgc2V0SW5zdGFsbEVycm9yKG51bGwpXG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBpbnN0YWxsUGx1Z2luRnJvbU1hcmtldHBsYWNlKHtcbiAgICAgIHBsdWdpbklkOiBwbHVnaW4ucGx1Z2luSWQsXG4gICAgICBlbnRyeTogcGx1Z2luLmVudHJ5LFxuICAgICAgbWFya2V0cGxhY2VOYW1lOiBwbHVnaW4ubWFya2V0cGxhY2VOYW1lLFxuICAgICAgc2NvcGUsXG4gICAgfSlcblxuICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgY29uc3QgbG9hZGVkID0gYXdhaXQgZmluZFBsdWdpbk9wdGlvbnNUYXJnZXQocGx1Z2luLnBsdWdpbklkKVxuICAgICAgaWYgKGxvYWRlZCkge1xuICAgICAgICBzZXRJc0luc3RhbGxpbmcoZmFsc2UpXG4gICAgICAgIHNldFZpZXdTdGF0ZSh7XG4gICAgICAgICAgdHlwZTogJ3BsdWdpbi1vcHRpb25zJyxcbiAgICAgICAgICBwbHVnaW46IGxvYWRlZCxcbiAgICAgICAgICBwbHVnaW5JZDogcGx1Z2luLnBsdWdpbklkLFxuICAgICAgICB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHNldFJlc3VsdChyZXN1bHQubWVzc2FnZSlcbiAgICAgIGlmIChvbkluc3RhbGxDb21wbGV0ZSkge1xuICAgICAgICBhd2FpdCBvbkluc3RhbGxDb21wbGV0ZSgpXG4gICAgICB9XG4gICAgICBzZXRQYXJlbnRWaWV3U3RhdGUoeyB0eXBlOiAnbWVudScgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0SXNJbnN0YWxsaW5nKGZhbHNlKVxuICAgICAgc2V0SW5zdGFsbEVycm9yKHJlc3VsdC5lcnJvcilcbiAgICB9XG4gIH1cblxuICAvLyBIYW5kbGUgZXJyb3Igc3RhdGVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHNldFJlc3VsdChlcnJvcilcbiAgICB9XG4gIH0sIFtlcnJvciwgc2V0UmVzdWx0XSlcblxuICAvLyBFc2NhcGUgaW4gcGx1Z2luLWRldGFpbHMgdmlldyAtIGdvIGJhY2sgdG8gcGx1Z2luLWxpc3RcbiAgdXNlS2V5YmluZGluZyhcbiAgICAnY29uZmlybTpubycsXG4gICAgKCkgPT4ge1xuICAgICAgc2V0Vmlld1N0YXRlKCdwbHVnaW4tbGlzdCcpXG4gICAgICBzZXRTZWxlY3RlZFBsdWdpbihudWxsKVxuICAgIH0sXG4gICAge1xuICAgICAgY29udGV4dDogJ0NvbmZpcm1hdGlvbicsXG4gICAgICBpc0FjdGl2ZTogdmlld1N0YXRlID09PSAncGx1Z2luLWRldGFpbHMnLFxuICAgIH0sXG4gIClcblxuICAvLyBFc2NhcGUgaW4gcGx1Z2luLWxpc3QgdmlldyAobm90IHNlYXJjaCBtb2RlKSAtIGV4aXQgdG8gcGFyZW50IG1lbnVcbiAgdXNlS2V5YmluZGluZyhcbiAgICAnY29uZmlybTpubycsXG4gICAgKCkgPT4ge1xuICAgICAgc2V0UGFyZW50Vmlld1N0YXRlKHsgdHlwZTogJ21lbnUnIH0pXG4gICAgfSxcbiAgICB7XG4gICAgICBjb250ZXh0OiAnQ29uZmlybWF0aW9uJyxcbiAgICAgIGlzQWN0aXZlOiB2aWV3U3RhdGUgPT09ICdwbHVnaW4tbGlzdCcgJiYgIWlzU2VhcmNoTW9kZSxcbiAgICB9LFxuICApXG5cbiAgLy8gSGFuZGxlIGVudGVyaW5nIHNlYXJjaCBtb2RlIChub24tZXNjYXBlIGtleXMpXG4gIHVzZUlucHV0KFxuICAgIChpbnB1dCwgX2tleSkgPT4ge1xuICAgICAgY29uc3Qga2V5SXNOb3RDdHJsT3JNZXRhID0gIV9rZXkuY3RybCAmJiAhX2tleS5tZXRhXG4gICAgICBpZiAoIWlzU2VhcmNoTW9kZSkge1xuICAgICAgICAvLyBFbnRlciBzZWFyY2ggbW9kZSB3aXRoICcvJyBvciBhbnkgcHJpbnRhYmxlIGNoYXJhY3RlclxuICAgICAgICBpZiAoaW5wdXQgPT09ICcvJyAmJiBrZXlJc05vdEN0cmxPck1ldGEpIHtcbiAgICAgICAgICBzZXRJc1NlYXJjaE1vZGUodHJ1ZSlcbiAgICAgICAgICBzZXRTZWFyY2hRdWVyeSgnJylcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBrZXlJc05vdEN0cmxPck1ldGEgJiZcbiAgICAgICAgICBpbnB1dC5sZW5ndGggPiAwICYmXG4gICAgICAgICAgIS9eXFxzKyQvLnRlc3QoaW5wdXQpICYmXG4gICAgICAgICAgLy8gRG9uJ3QgZW50ZXIgc2VhcmNoIG1vZGUgZm9yIG5hdmlnYXRpb24ga2V5c1xuICAgICAgICAgIGlucHV0ICE9PSAnaicgJiZcbiAgICAgICAgICBpbnB1dCAhPT0gJ2snICYmXG4gICAgICAgICAgaW5wdXQgIT09ICdpJ1xuICAgICAgICApIHtcbiAgICAgICAgICBzZXRJc1NlYXJjaE1vZGUodHJ1ZSlcbiAgICAgICAgICBzZXRTZWFyY2hRdWVyeShpbnB1dClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgeyBpc0FjdGl2ZTogdmlld1N0YXRlID09PSAncGx1Z2luLWxpc3QnICYmICFsb2FkaW5nIH0sXG4gIClcblxuICAvLyBQbHVnaW4tbGlzdCBuYXZpZ2F0aW9uIChub24tc2VhcmNoIG1vZGUpXG4gIHVzZUtleWJpbmRpbmdzKFxuICAgIHtcbiAgICAgICdzZWxlY3Q6cHJldmlvdXMnOiAoKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgc2V0SXNTZWFyY2hNb2RlKHRydWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFnaW5hdGlvbi5oYW5kbGVTZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0ZWRJbmRleCAtIDEsIHNldFNlbGVjdGVkSW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnc2VsZWN0Om5leHQnOiAoKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZEluZGV4IDwgZmlsdGVyZWRQbHVnaW5zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBwYWdpbmF0aW9uLmhhbmRsZVNlbGVjdGlvbkNoYW5nZShzZWxlY3RlZEluZGV4ICsgMSwgc2V0U2VsZWN0ZWRJbmRleClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICdzZWxlY3Q6YWNjZXB0JzogKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgc2VsZWN0ZWRJbmRleCA9PT0gZmlsdGVyZWRQbHVnaW5zLmxlbmd0aCAmJlxuICAgICAgICAgIHNlbGVjdGVkRm9ySW5zdGFsbC5zaXplID4gMFxuICAgICAgICApIHtcbiAgICAgICAgICB2b2lkIGluc3RhbGxTZWxlY3RlZFBsdWdpbnMoKVxuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkSW5kZXggPCBmaWx0ZXJlZFBsdWdpbnMubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgcGx1Z2luID0gZmlsdGVyZWRQbHVnaW5zW3NlbGVjdGVkSW5kZXhdXG4gICAgICAgICAgaWYgKHBsdWdpbikge1xuICAgICAgICAgICAgaWYgKHBsdWdpbi5pc0luc3RhbGxlZCkge1xuICAgICAgICAgICAgICBzZXRQYXJlbnRWaWV3U3RhdGUoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdtYW5hZ2UtcGx1Z2lucycsXG4gICAgICAgICAgICAgICAgdGFyZ2V0UGx1Z2luOiBwbHVnaW4uZW50cnkubmFtZSxcbiAgICAgICAgICAgICAgICB0YXJnZXRNYXJrZXRwbGFjZTogcGx1Z2luLm1hcmtldHBsYWNlTmFtZSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkUGx1Z2luKHBsdWdpbilcbiAgICAgICAgICAgICAgc2V0Vmlld1N0YXRlKCdwbHVnaW4tZGV0YWlscycpXG4gICAgICAgICAgICAgIHNldERldGFpbHNNZW51SW5kZXgoMClcbiAgICAgICAgICAgICAgc2V0SW5zdGFsbEVycm9yKG51bGwpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgY29udGV4dDogJ1NlbGVjdCcsXG4gICAgICBpc0FjdGl2ZTogdmlld1N0YXRlID09PSAncGx1Z2luLWxpc3QnICYmICFpc1NlYXJjaE1vZGUsXG4gICAgfSxcbiAgKVxuXG4gIHVzZUtleWJpbmRpbmdzKFxuICAgIHtcbiAgICAgICdwbHVnaW46dG9nZ2xlJzogKCkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCA8IGZpbHRlcmVkUGx1Z2lucy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBwbHVnaW4gPSBmaWx0ZXJlZFBsdWdpbnNbc2VsZWN0ZWRJbmRleF1cbiAgICAgICAgICBpZiAocGx1Z2luICYmICFwbHVnaW4uaXNJbnN0YWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1NlbGVjdGlvbiA9IG5ldyBTZXQoc2VsZWN0ZWRGb3JJbnN0YWxsKVxuICAgICAgICAgICAgaWYgKG5ld1NlbGVjdGlvbi5oYXMocGx1Z2luLnBsdWdpbklkKSkge1xuICAgICAgICAgICAgICBuZXdTZWxlY3Rpb24uZGVsZXRlKHBsdWdpbi5wbHVnaW5JZClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5ld1NlbGVjdGlvbi5hZGQocGx1Z2luLnBsdWdpbklkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRGb3JJbnN0YWxsKG5ld1NlbGVjdGlvbilcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAncGx1Z2luOmluc3RhbGwnOiAoKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZEZvckluc3RhbGwuc2l6ZSA+IDApIHtcbiAgICAgICAgICB2b2lkIGluc3RhbGxTZWxlY3RlZFBsdWdpbnMoKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgY29udGV4dDogJ1BsdWdpbicsXG4gICAgICBpc0FjdGl2ZTogdmlld1N0YXRlID09PSAncGx1Z2luLWxpc3QnICYmICFpc1NlYXJjaE1vZGUsXG4gICAgfSxcbiAgKVxuXG4gIC8vIFBsdWdpbi1kZXRhaWxzIG5hdmlnYXRpb25cbiAgY29uc3QgZGV0YWlsc01lbnVPcHRpb25zID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKCFzZWxlY3RlZFBsdWdpbikgcmV0dXJuIFtdXG4gICAgY29uc3QgaGFzSG9tZXBhZ2UgPSBzZWxlY3RlZFBsdWdpbi5lbnRyeS5ob21lcGFnZVxuICAgIGNvbnN0IGdpdGh1YlJlcG8gPSBleHRyYWN0R2l0SHViUmVwbyhzZWxlY3RlZFBsdWdpbilcbiAgICByZXR1cm4gYnVpbGRQbHVnaW5EZXRhaWxzTWVudU9wdGlvbnMoaGFzSG9tZXBhZ2UsIGdpdGh1YlJlcG8pXG4gIH0sIFtzZWxlY3RlZFBsdWdpbl0pXG5cbiAgdXNlS2V5YmluZGluZ3MoXG4gICAge1xuICAgICAgJ3NlbGVjdDpwcmV2aW91cyc6ICgpID0+IHtcbiAgICAgICAgaWYgKGRldGFpbHNNZW51SW5kZXggPiAwKSB7XG4gICAgICAgICAgc2V0RGV0YWlsc01lbnVJbmRleChkZXRhaWxzTWVudUluZGV4IC0gMSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICdzZWxlY3Q6bmV4dCc6ICgpID0+IHtcbiAgICAgICAgaWYgKGRldGFpbHNNZW51SW5kZXggPCBkZXRhaWxzTWVudU9wdGlvbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHNldERldGFpbHNNZW51SW5kZXgoZGV0YWlsc01lbnVJbmRleCArIDEpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnc2VsZWN0OmFjY2VwdCc6ICgpID0+IHtcbiAgICAgICAgaWYgKCFzZWxlY3RlZFBsdWdpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGRldGFpbHNNZW51T3B0aW9uc1tkZXRhaWxzTWVudUluZGV4XT8uYWN0aW9uXG4gICAgICAgIGNvbnN0IGhhc0hvbWVwYWdlID0gc2VsZWN0ZWRQbHVnaW4uZW50cnkuaG9tZXBhZ2VcbiAgICAgICAgY29uc3QgZ2l0aHViUmVwbyA9IGV4dHJhY3RHaXRIdWJSZXBvKHNlbGVjdGVkUGx1Z2luKVxuICAgICAgICBpZiAoYWN0aW9uID09PSAnaW5zdGFsbC11c2VyJykge1xuICAgICAgICAgIHZvaWQgaGFuZGxlU2luZ2xlUGx1Z2luSW5zdGFsbChzZWxlY3RlZFBsdWdpbiwgJ3VzZXInKVxuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gJ2luc3RhbGwtcHJvamVjdCcpIHtcbiAgICAgICAgICB2b2lkIGhhbmRsZVNpbmdsZVBsdWdpbkluc3RhbGwoc2VsZWN0ZWRQbHVnaW4sICdwcm9qZWN0JylcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICdpbnN0YWxsLWxvY2FsJykge1xuICAgICAgICAgIHZvaWQgaGFuZGxlU2luZ2xlUGx1Z2luSW5zdGFsbChzZWxlY3RlZFBsdWdpbiwgJ2xvY2FsJylcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICdob21lcGFnZScgJiYgaGFzSG9tZXBhZ2UpIHtcbiAgICAgICAgICB2b2lkIG9wZW5Ccm93c2VyKGhhc0hvbWVwYWdlKVxuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gJ2dpdGh1YicgJiYgZ2l0aHViUmVwbykge1xuICAgICAgICAgIHZvaWQgb3BlbkJyb3dzZXIoYGh0dHBzOi8vZ2l0aHViLmNvbS8ke2dpdGh1YlJlcG99YClcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICdiYWNrJykge1xuICAgICAgICAgIHNldFZpZXdTdGF0ZSgncGx1Z2luLWxpc3QnKVxuICAgICAgICAgIHNldFNlbGVjdGVkUGx1Z2luKG51bGwpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBjb250ZXh0OiAnU2VsZWN0JyxcbiAgICAgIGlzQWN0aXZlOiB2aWV3U3RhdGUgPT09ICdwbHVnaW4tZGV0YWlscycgJiYgISFzZWxlY3RlZFBsdWdpbixcbiAgICB9LFxuICApXG5cbiAgaWYgKHR5cGVvZiB2aWV3U3RhdGUgPT09ICdvYmplY3QnICYmIHZpZXdTdGF0ZS50eXBlID09PSAncGx1Z2luLW9wdGlvbnMnKSB7XG4gICAgY29uc3QgeyBwbHVnaW4sIHBsdWdpbklkIH0gPSB2aWV3U3RhdGVcbiAgICBmdW5jdGlvbiBmaW5pc2gobXNnOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHNldFJlc3VsdChtc2cpXG4gICAgICBpZiAob25JbnN0YWxsQ29tcGxldGUpIHtcbiAgICAgICAgdm9pZCBvbkluc3RhbGxDb21wbGV0ZSgpXG4gICAgICB9XG4gICAgICBzZXRQYXJlbnRWaWV3U3RhdGUoeyB0eXBlOiAnbWVudScgfSlcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxQbHVnaW5PcHRpb25zRmxvd1xuICAgICAgICBwbHVnaW49e3BsdWdpbn1cbiAgICAgICAgcGx1Z2luSWQ9e3BsdWdpbklkfVxuICAgICAgICBvbkRvbmU9eyhvdXRjb21lLCBkZXRhaWwpID0+IHtcbiAgICAgICAgICBzd2l0Y2ggKG91dGNvbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2NvbmZpZ3VyZWQnOlxuICAgICAgICAgICAgICBmaW5pc2goXG4gICAgICAgICAgICAgICAgYOKckyBJbnN0YWxsZWQgYW5kIGNvbmZpZ3VyZWQgJHtwbHVnaW4ubmFtZX0uIFJ1biAvcmVsb2FkLXBsdWdpbnMgdG8gYXBwbHkuYCxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnc2tpcHBlZCc6XG4gICAgICAgICAgICAgIGZpbmlzaChcbiAgICAgICAgICAgICAgICBg4pyTIEluc3RhbGxlZCAke3BsdWdpbi5uYW1lfS4gUnVuIC9yZWxvYWQtcGx1Z2lucyB0byBhcHBseS5gLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgICAgIGZpbmlzaChgSW5zdGFsbGVkIGJ1dCBmYWlsZWQgdG8gc2F2ZSBjb25maWc6ICR7ZGV0YWlsfWApXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICAvLyBMb2FkaW5nIHN0YXRlXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxUZXh0PkxvYWRpbmfigKY8L1RleHQ+XG4gIH1cblxuICAvLyBFcnJvciBzdGF0ZVxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPFRleHQgY29sb3I9XCJlcnJvclwiPntlcnJvcn08L1RleHQ+XG4gIH1cblxuICAvLyBQbHVnaW4gZGV0YWlscyB2aWV3XG4gIGlmICh2aWV3U3RhdGUgPT09ICdwbHVnaW4tZGV0YWlscycgJiYgc2VsZWN0ZWRQbHVnaW4pIHtcbiAgICBjb25zdCBoYXNIb21lcGFnZSA9IHNlbGVjdGVkUGx1Z2luLmVudHJ5LmhvbWVwYWdlXG4gICAgY29uc3QgZ2l0aHViUmVwbyA9IGV4dHJhY3RHaXRIdWJSZXBvKHNlbGVjdGVkUGx1Z2luKVxuXG4gICAgY29uc3QgbWVudU9wdGlvbnMgPSBidWlsZFBsdWdpbkRldGFpbHNNZW51T3B0aW9ucyhoYXNIb21lcGFnZSwgZ2l0aHViUmVwbylcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgPEJveCBtYXJnaW5Cb3R0b209ezF9PlxuICAgICAgICAgIDxUZXh0IGJvbGQ+UGx1Z2luIGRldGFpbHM8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpbkJvdHRvbT17MX0+XG4gICAgICAgICAgPFRleHQgYm9sZD57c2VsZWN0ZWRQbHVnaW4uZW50cnkubmFtZX08L1RleHQ+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+ZnJvbSB7c2VsZWN0ZWRQbHVnaW4ubWFya2V0cGxhY2VOYW1lfTwvVGV4dD5cbiAgICAgICAgICB7c2VsZWN0ZWRQbHVnaW4uZW50cnkudmVyc2lvbiAmJiAoXG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5WZXJzaW9uOiB7c2VsZWN0ZWRQbHVnaW4uZW50cnkudmVyc2lvbn08L1RleHQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7c2VsZWN0ZWRQbHVnaW4uZW50cnkuZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgICAgICA8VGV4dD57c2VsZWN0ZWRQbHVnaW4uZW50cnkuZGVzY3JpcHRpb259PC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7c2VsZWN0ZWRQbHVnaW4uZW50cnkuYXV0aG9yICYmIChcbiAgICAgICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgICAgQnk6eycgJ31cbiAgICAgICAgICAgICAgICB7dHlwZW9mIHNlbGVjdGVkUGx1Z2luLmVudHJ5LmF1dGhvciA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgID8gc2VsZWN0ZWRQbHVnaW4uZW50cnkuYXV0aG9yXG4gICAgICAgICAgICAgICAgICA6IHNlbGVjdGVkUGx1Z2luLmVudHJ5LmF1dGhvci5uYW1lfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApfVxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8UGx1Z2luVHJ1c3RXYXJuaW5nIC8+XG5cbiAgICAgICAge2luc3RhbGxFcnJvciAmJiAoXG4gICAgICAgICAgPEJveCBtYXJnaW5Cb3R0b209ezF9PlxuICAgICAgICAgICAgPFRleHQgY29sb3I9XCJlcnJvclwiPkVycm9yOiB7aW5zdGFsbEVycm9yfTwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cblxuICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICB7bWVudU9wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8Qm94IGtleT17b3B0aW9uLmFjdGlvbn0+XG4gICAgICAgICAgICAgIHtkZXRhaWxzTWVudUluZGV4ID09PSBpbmRleCAmJiA8VGV4dD57Jz4gJ308L1RleHQ+fVxuICAgICAgICAgICAgICB7ZGV0YWlsc01lbnVJbmRleCAhPT0gaW5kZXggJiYgPFRleHQ+eycgICd9PC9UZXh0Pn1cbiAgICAgICAgICAgICAgPFRleHQgYm9sZD17ZGV0YWlsc01lbnVJbmRleCA9PT0gaW5kZXh9PlxuICAgICAgICAgICAgICAgIHtpc0luc3RhbGxpbmcgJiYgb3B0aW9uLmFjdGlvbi5zdGFydHNXaXRoKCdpbnN0YWxsLScpXG4gICAgICAgICAgICAgICAgICA/ICdJbnN0YWxsaW5n4oCmJ1xuICAgICAgICAgICAgICAgICAgOiBvcHRpb24ubGFiZWx9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICA8QnlsaW5lPlxuICAgICAgICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgICAgICAgYWN0aW9uPVwic2VsZWN0OmFjY2VwdFwiXG4gICAgICAgICAgICAgICAgY29udGV4dD1cIlNlbGVjdFwiXG4gICAgICAgICAgICAgICAgZmFsbGJhY2s9XCJFbnRlclwiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJzZWxlY3RcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgICAgICAgYWN0aW9uPVwiY29uZmlybTpub1wiXG4gICAgICAgICAgICAgICAgY29udGV4dD1cIkNvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICAgICAgZmFsbGJhY2s9XCJFc2NcIlxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiYmFja1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0J5bGluZT5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgLy8gRW1wdHkgc3RhdGVcbiAgaWYgKGF2YWlsYWJsZVBsdWdpbnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICA8Qm94IG1hcmdpbkJvdHRvbT17MX0+XG4gICAgICAgICAgPFRleHQgYm9sZD5EaXNjb3ZlciBwbHVnaW5zPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEVtcHR5U3RhdGVNZXNzYWdlIHJlYXNvbj17ZW1wdHlSZWFzb259IC8+XG4gICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvciBpdGFsaWM+XG4gICAgICAgICAgICBFc2MgdG8gZ28gYmFja1xuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICAvLyBHZXQgdmlzaWJsZSBwbHVnaW5zIGZyb20gcGFnaW5hdGlvblxuICBjb25zdCB2aXNpYmxlUGx1Z2lucyA9IHBhZ2luYXRpb24uZ2V0VmlzaWJsZUl0ZW1zKGZpbHRlcmVkUGx1Z2lucylcblxuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgPEJveD5cbiAgICAgICAgPFRleHQgYm9sZD5EaXNjb3ZlciBwbHVnaW5zPC9UZXh0PlxuICAgICAgICB7cGFnaW5hdGlvbi5uZWVkc1BhZ2luYXRpb24gJiYgKFxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICh7cGFnaW5hdGlvbi5zY3JvbGxQb3NpdGlvbi5jdXJyZW50fS9cbiAgICAgICAgICAgIHtwYWdpbmF0aW9uLnNjcm9sbFBvc2l0aW9uLnRvdGFsfSlcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cblxuICAgICAgey8qIFNlYXJjaCBib3ggKi99XG4gICAgICA8Qm94IG1hcmdpbkJvdHRvbT17MX0+XG4gICAgICAgIDxTZWFyY2hCb3hcbiAgICAgICAgICBxdWVyeT17c2VhcmNoUXVlcnl9XG4gICAgICAgICAgaXNGb2N1c2VkPXtpc1NlYXJjaE1vZGV9XG4gICAgICAgICAgaXNUZXJtaW5hbEZvY3VzZWQ9e2lzVGVybWluYWxGb2N1c2VkfVxuICAgICAgICAgIHdpZHRoPXt0ZXJtaW5hbFdpZHRoIC0gNH1cbiAgICAgICAgICBjdXJzb3JPZmZzZXQ9e3NlYXJjaEN1cnNvck9mZnNldH1cbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuXG4gICAgICB7LyogV2FybmluZyBiYW5uZXIgKi99XG4gICAgICB7d2FybmluZyAmJiAoXG4gICAgICAgIDxCb3ggbWFyZ2luQm90dG9tPXsxfT5cbiAgICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIj5cbiAgICAgICAgICAgIHtmaWd1cmVzLndhcm5pbmd9IHt3YXJuaW5nfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuXG4gICAgICB7LyogTm8gc2VhcmNoIHJlc3VsdHMgKi99XG4gICAgICB7ZmlsdGVyZWRQbHVnaW5zLmxlbmd0aCA9PT0gMCAmJiBzZWFyY2hRdWVyeSAmJiAoXG4gICAgICAgIDxCb3ggbWFyZ2luQm90dG9tPXsxfT5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5ObyBwbHVnaW5zIG1hdGNoICZxdW90O3tzZWFyY2hRdWVyeX0mcXVvdDs8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cblxuICAgICAgey8qIFNjcm9sbCB1cCBpbmRpY2F0b3IgKi99XG4gICAgICB7cGFnaW5hdGlvbi5zY3JvbGxQb3NpdGlvbi5jYW5TY3JvbGxVcCAmJiAoXG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+IHtmaWd1cmVzLmFycm93VXB9IG1vcmUgYWJvdmU8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cblxuICAgICAgey8qIFBsdWdpbiBsaXN0IC0gdXNlIHN0YXJ0SW5kZXggaW4ga2V5IHRvIGZvcmNlIHJlLXJlbmRlciBvbiBzY3JvbGwgKi99XG4gICAgICB7dmlzaWJsZVBsdWdpbnMubWFwKChwbHVnaW4sIHZpc2libGVJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBhY3R1YWxJbmRleCA9IHBhZ2luYXRpb24udG9BY3R1YWxJbmRleCh2aXNpYmxlSW5kZXgpXG4gICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZEluZGV4ID09PSBhY3R1YWxJbmRleFxuICAgICAgICBjb25zdCBpc1NlbGVjdGVkRm9ySW5zdGFsbCA9IHNlbGVjdGVkRm9ySW5zdGFsbC5oYXMocGx1Z2luLnBsdWdpbklkKVxuICAgICAgICBjb25zdCBpc0luc3RhbGxpbmdUaGlzID0gaW5zdGFsbGluZ1BsdWdpbnMuaGFzKHBsdWdpbi5wbHVnaW5JZClcbiAgICAgICAgY29uc3QgaXNMYXN0ID0gdmlzaWJsZUluZGV4ID09PSB2aXNpYmxlUGx1Z2lucy5sZW5ndGggLSAxXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBrZXk9e2Ake3BhZ2luYXRpb24uc3RhcnRJbmRleH0tJHtwbHVnaW4ucGx1Z2luSWR9YH1cbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgbWFyZ2luQm90dG9tPXtpc0xhc3QgJiYgIWVycm9yID8gMCA6IDF9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICBjb2xvcj17aXNTZWxlY3RlZCAmJiAhaXNTZWFyY2hNb2RlID8gJ3N1Z2dlc3Rpb24nIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2lzU2VsZWN0ZWQgJiYgIWlzU2VhcmNoTW9kZSA/IGZpZ3VyZXMucG9pbnRlciA6ICcgJ317JyAnfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgIHtpc0luc3RhbGxpbmdUaGlzXG4gICAgICAgICAgICAgICAgICA/IGZpZ3VyZXMuZWxsaXBzaXNcbiAgICAgICAgICAgICAgICAgIDogaXNTZWxlY3RlZEZvckluc3RhbGxcbiAgICAgICAgICAgICAgICAgICAgPyBmaWd1cmVzLnJhZGlvT25cbiAgICAgICAgICAgICAgICAgICAgOiBmaWd1cmVzLnJhZGlvT2ZmfXsnICd9XG4gICAgICAgICAgICAgICAge3BsdWdpbi5lbnRyeS5uYW1lfVxuICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPiDCtyB7cGx1Z2luLm1hcmtldHBsYWNlTmFtZX08L1RleHQ+XG4gICAgICAgICAgICAgICAge3BsdWdpbi5lbnRyeS50YWdzPy5pbmNsdWRlcygnY29tbXVuaXR5LW1hbmFnZWQnKSAmJiAoXG4gICAgICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj4gW0NvbW11bml0eSBNYW5hZ2VkXTwvVGV4dD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtpbnN0YWxsQ291bnRzICYmXG4gICAgICAgICAgICAgICAgICBwbHVnaW4ubWFya2V0cGxhY2VOYW1lID09PSBPRkZJQ0lBTF9NQVJLRVRQTEFDRV9OQU1FICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgICAgICAgICAgeycgwrcgJ31cbiAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0SW5zdGFsbENvdW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFsbENvdW50cy5nZXQocGx1Z2luLnBsdWdpbklkKSA/PyAwLFxuICAgICAgICAgICAgICAgICAgICAgICl9eycgJ31cbiAgICAgICAgICAgICAgICAgICAgICBpbnN0YWxsc1xuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIHtwbHVnaW4uZW50cnkuZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgICAgICA8Qm94IG1hcmdpbkxlZnQ9ezR9PlxuICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICAgICAge3RydW5jYXRlVG9XaWR0aChwbHVnaW4uZW50cnkuZGVzY3JpcHRpb24sIDYwKX1cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKVxuICAgICAgfSl9XG5cbiAgICAgIHsvKiBTY3JvbGwgZG93biBpbmRpY2F0b3IgKi99XG4gICAgICB7cGFnaW5hdGlvbi5zY3JvbGxQb3NpdGlvbi5jYW5TY3JvbGxEb3duICYmIChcbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj4ge2ZpZ3VyZXMuYXJyb3dEb3dufSBtb3JlIGJlbG93PC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBFcnJvciBtZXNzYWdlcyAqL31cbiAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICA8VGV4dCBjb2xvcj1cImVycm9yXCI+XG4gICAgICAgICAgICB7ZmlndXJlcy5jcm9zc30ge2Vycm9yfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuXG4gICAgICA8RGlzY292ZXJQbHVnaW5zS2V5SGludFxuICAgICAgICBoYXNTZWxlY3Rpb249e3NlbGVjdGVkRm9ySW5zdGFsbC5zaXplID4gMH1cbiAgICAgICAgY2FuVG9nZ2xlPXtcbiAgICAgICAgICBzZWxlY3RlZEluZGV4IDwgZmlsdGVyZWRQbHVnaW5zLmxlbmd0aCAmJlxuICAgICAgICAgICFmaWx0ZXJlZFBsdWdpbnNbc2VsZWN0ZWRJbmRleF0/LmlzSW5zdGFsbGVkXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZnVuY3Rpb24gRGlzY292ZXJQbHVnaW5zS2V5SGludCh7XG4gIGhhc1NlbGVjdGlvbixcbiAgY2FuVG9nZ2xlLFxufToge1xuICBoYXNTZWxlY3Rpb246IGJvb2xlYW5cbiAgY2FuVG9nZ2xlOiBib29sZWFuXG59KTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICA8VGV4dCBkaW1Db2xvciBpdGFsaWM+XG4gICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAge2hhc1NlbGVjdGlvbiAmJiAoXG4gICAgICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgICAgIGFjdGlvbj1cInBsdWdpbjppbnN0YWxsXCJcbiAgICAgICAgICAgICAgY29udGV4dD1cIlBsdWdpblwiXG4gICAgICAgICAgICAgIGZhbGxiYWNrPVwiaVwiXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiaW5zdGFsbFwiXG4gICAgICAgICAgICAgIGJvbGRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8VGV4dD50eXBlIHRvIHNlYXJjaDwvVGV4dD5cbiAgICAgICAgICB7Y2FuVG9nZ2xlICYmIChcbiAgICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgICAgYWN0aW9uPVwicGx1Z2luOnRvZ2dsZVwiXG4gICAgICAgICAgICAgIGNvbnRleHQ9XCJQbHVnaW5cIlxuICAgICAgICAgICAgICBmYWxsYmFjaz1cIlNwYWNlXCJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJ0b2dnbGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgIGFjdGlvbj1cInNlbGVjdDphY2NlcHRcIlxuICAgICAgICAgICAgY29udGV4dD1cIlNlbGVjdFwiXG4gICAgICAgICAgICBmYWxsYmFjaz1cIkVudGVyXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiZGV0YWlsc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgICBhY3Rpb249XCJjb25maXJtOm5vXCJcbiAgICAgICAgICAgIGNvbnRleHQ9XCJDb25maXJtYXRpb25cIlxuICAgICAgICAgICAgZmFsbGJhY2s9XCJFc2NcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJiYWNrXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0J5bGluZT5cbiAgICAgIDwvVGV4dD5cbiAgICA8L0JveD5cbiAgKVxufVxuXG4vKipcbiAqIENvbnRleHQtYXdhcmUgZW1wdHkgc3RhdGUgbWVzc2FnZSBmb3IgdGhlIERpc2NvdmVyIHNjcmVlblxuICovXG5mdW5jdGlvbiBFbXB0eVN0YXRlTWVzc2FnZSh7XG4gIHJlYXNvbixcbn06IHtcbiAgcmVhc29uOiBFbXB0eU1hcmtldHBsYWNlUmVhc29uIHwgbnVsbFxufSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIHN3aXRjaCAocmVhc29uKSB7XG4gICAgY2FzZSAnZ2l0LW5vdC1pbnN0YWxsZWQnOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5HaXQgaXMgcmVxdWlyZWQgdG8gaW5zdGFsbCBtYXJrZXRwbGFjZXMuPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlBsZWFzZSBpbnN0YWxsIGdpdCBhbmQgcmVzdGFydCBDbGF1ZGUgQ29kZS48L1RleHQ+XG4gICAgICAgIDwvPlxuICAgICAgKVxuICAgIGNhc2UgJ2FsbC1ibG9ja2VkLWJ5LXBvbGljeSc6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgWW91ciBvcmdhbml6YXRpb24gcG9saWN5IGRvZXMgbm90IGFsbG93IGFueSBleHRlcm5hbCBtYXJrZXRwbGFjZXMuXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPkNvbnRhY3QgeW91ciBhZG1pbmlzdHJhdG9yLjwvVGV4dD5cbiAgICAgICAgPC8+XG4gICAgICApXG4gICAgY2FzZSAncG9saWN5LXJlc3RyaWN0cy1zb3VyY2VzJzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICBZb3VyIG9yZ2FuaXphdGlvbiByZXN0cmljdHMgd2hpY2ggbWFya2V0cGxhY2VzIGNhbiBiZSBhZGRlZC5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICBTd2l0Y2ggdG8gdGhlIE1hcmtldHBsYWNlcyB0YWIgdG8gdmlldyBhbGxvd2VkIHNvdXJjZXMuXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8Lz5cbiAgICAgIClcbiAgICBjYXNlICdhbGwtbWFya2V0cGxhY2VzLWZhaWxlZCc6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPkZhaWxlZCB0byBsb2FkIG1hcmtldHBsYWNlIGRhdGEuPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPkNoZWNrIHlvdXIgbmV0d29yayBjb25uZWN0aW9uLjwvVGV4dD5cbiAgICAgICAgPC8+XG4gICAgICApXG4gICAgY2FzZSAnYWxsLXBsdWdpbnMtaW5zdGFsbGVkJzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+QWxsIGF2YWlsYWJsZSBwbHVnaW5zIGFyZSBhbHJlYWR5IGluc3RhbGxlZC48L1RleHQ+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICBDaGVjayBmb3IgbmV3IHBsdWdpbnMgbGF0ZXIgb3IgYWRkIG1vcmUgbWFya2V0cGxhY2VzLlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC8+XG4gICAgICApXG4gICAgY2FzZSAnbm8tbWFya2V0cGxhY2VzLWNvbmZpZ3VyZWQnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPk5vIHBsdWdpbnMgYXZhaWxhYmxlLjwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgIEFkZCBhIG1hcmtldHBsYWNlIGZpcnN0IHVzaW5nIHRoZSBNYXJrZXRwbGFjZXMgdGFiLlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC8+XG4gICAgICApXG4gIH1cbn1cbiIsICJpbXBvcnQgZmlndXJlcyBmcm9tICdmaWd1cmVzJ1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHR5cGUgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgbG9nRXZlbnQsXG59IGZyb20gJ3NyYy9zZXJ2aWNlcy9hbmFseXRpY3MvaW5kZXguanMnXG5pbXBvcnQgeyBDb25maWd1cmFibGVTaG9ydGN1dEhpbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbmZpZ3VyYWJsZVNob3J0Y3V0SGludC5qcydcbmltcG9ydCB7IEJ5bGluZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGVzaWduLXN5c3RlbS9CeWxpbmUuanMnXG5pbXBvcnQgeyBLZXlib2FyZFNob3J0Y3V0SGludCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGVzaWduLXN5c3RlbS9LZXlib2FyZFNob3J0Y3V0SGludC5qcydcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjdXN0b20tcnVsZXMvcHJlZmVyLXVzZS1rZXliaW5kaW5ncyAtLSB1c2VJbnB1dCBuZWVkZWQgZm9yIG1hcmtldHBsYWNlLXNwZWNpZmljIHUvciBzaG9ydGN1dHMgYW5kIHkvbiBjb25maXJtYXRpb24gbm90IGluIGtleWJpbmRpbmcgc2NoZW1hXG5pbXBvcnQgeyBCb3gsIFRleHQsIHVzZUlucHV0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHtcbiAgdXNlS2V5YmluZGluZyxcbiAgdXNlS2V5YmluZGluZ3MsXG59IGZyb20gJy4uLy4uL2tleWJpbmRpbmdzL3VzZUtleWJpbmRpbmcuanMnXG5pbXBvcnQgdHlwZSB7IExvYWRlZFBsdWdpbiB9IGZyb20gJy4uLy4uL3R5cGVzL3BsdWdpbi5qcydcbmltcG9ydCB7IGNvdW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvYXJyYXkuanMnXG5pbXBvcnQgeyBzaG91bGRTa2lwUGx1Z2luQXV0b3VwZGF0ZSB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbmZpZy5qcydcbmltcG9ydCB7IGVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Vycm9ycy5qcydcbmltcG9ydCB7IGNsZWFyQWxsQ2FjaGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcGx1Z2lucy9jYWNoZVV0aWxzLmpzJ1xuaW1wb3J0IHtcbiAgY3JlYXRlUGx1Z2luSWQsXG4gIGZvcm1hdE1hcmtldHBsYWNlTG9hZGluZ0Vycm9ycyxcbiAgZ2V0TWFya2V0cGxhY2VTb3VyY2VEaXNwbGF5LFxuICBsb2FkTWFya2V0cGxhY2VzV2l0aEdyYWNlZnVsRGVncmFkYXRpb24sXG59IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvbWFya2V0cGxhY2VIZWxwZXJzLmpzJ1xuaW1wb3J0IHtcbiAgbG9hZEtub3duTWFya2V0cGxhY2VzQ29uZmlnLFxuICByZWZyZXNoTWFya2V0cGxhY2UsXG4gIHJlbW92ZU1hcmtldHBsYWNlU291cmNlLFxuICBzZXRNYXJrZXRwbGFjZUF1dG9VcGRhdGUsXG59IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvbWFya2V0cGxhY2VNYW5hZ2VyLmpzJ1xuaW1wb3J0IHsgdXBkYXRlUGx1Z2luc0Zvck1hcmtldHBsYWNlcyB9IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvcGx1Z2luQXV0b3VwZGF0ZS5qcydcbmltcG9ydCB7IGxvYWRBbGxQbHVnaW5zIH0gZnJvbSAnLi4vLi4vdXRpbHMvcGx1Z2lucy9wbHVnaW5Mb2FkZXIuanMnXG5pbXBvcnQgeyBpc01hcmtldHBsYWNlQXV0b1VwZGF0ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvc2NoZW1hcy5qcydcbmltcG9ydCB7XG4gIGdldFNldHRpbmdzRm9yU291cmNlLFxuICB1cGRhdGVTZXR0aW5nc0ZvclNvdXJjZSxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvc2V0dGluZ3Mvc2V0dGluZ3MuanMnXG5pbXBvcnQgeyBwbHVyYWwgfSBmcm9tICcuLi8uLi91dGlscy9zdHJpbmdVdGlscy5qcydcbmltcG9ydCB0eXBlIHsgVmlld1N0YXRlIH0gZnJvbSAnLi90eXBlcy5qcydcblxudHlwZSBQcm9wcyA9IHtcbiAgc2V0Vmlld1N0YXRlOiAoc3RhdGU6IFZpZXdTdGF0ZSkgPT4gdm9pZFxuICBlcnJvcj86IHN0cmluZyB8IG51bGxcbiAgc2V0RXJyb3I/OiAoZXJyb3I6IHN0cmluZyB8IG51bGwpID0+IHZvaWRcbiAgc2V0UmVzdWx0OiAocmVzdWx0OiBzdHJpbmcgfCBudWxsKSA9PiB2b2lkXG4gIGV4aXRTdGF0ZToge1xuICAgIHBlbmRpbmc6IGJvb2xlYW5cbiAgICBrZXlOYW1lOiAnQ3RybC1DJyB8ICdDdHJsLUQnIHwgbnVsbFxuICB9XG4gIG9uTWFuYWdlQ29tcGxldGU/OiAoKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuICB0YXJnZXRNYXJrZXRwbGFjZT86IHN0cmluZ1xuICBhY3Rpb24/OiAndXBkYXRlJyB8ICdyZW1vdmUnXG59XG5cbnR5cGUgTWFya2V0cGxhY2VTdGF0ZSA9IHtcbiAgbmFtZTogc3RyaW5nXG4gIHNvdXJjZTogc3RyaW5nXG4gIGxhc3RVcGRhdGVkPzogc3RyaW5nXG4gIHBsdWdpbkNvdW50PzogbnVtYmVyXG4gIGluc3RhbGxlZFBsdWdpbnM/OiBMb2FkZWRQbHVnaW5bXVxuICBwZW5kaW5nVXBkYXRlPzogYm9vbGVhblxuICBwZW5kaW5nUmVtb3ZlPzogYm9vbGVhblxuICBhdXRvVXBkYXRlPzogYm9vbGVhblxufVxuXG50eXBlIEludGVybmFsVmlld1N0YXRlID0gJ2xpc3QnIHwgJ2RldGFpbHMnIHwgJ2NvbmZpcm0tcmVtb3ZlJ1xuXG5leHBvcnQgZnVuY3Rpb24gTWFuYWdlTWFya2V0cGxhY2VzKHtcbiAgc2V0Vmlld1N0YXRlLFxuICBlcnJvcixcbiAgc2V0RXJyb3IsXG4gIHNldFJlc3VsdCxcbiAgZXhpdFN0YXRlLFxuICBvbk1hbmFnZUNvbXBsZXRlLFxuICB0YXJnZXRNYXJrZXRwbGFjZSxcbiAgYWN0aW9uLFxufTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBbbWFya2V0cGxhY2VTdGF0ZXMsIHNldE1hcmtldHBsYWNlU3RhdGVzXSA9IHVzZVN0YXRlPFxuICAgIE1hcmtldHBsYWNlU3RhdGVbXVxuICA+KFtdKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbc2VsZWN0ZWRJbmRleCwgc2V0U2VsZWN0ZWRJbmRleF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbaXNQcm9jZXNzaW5nLCBzZXRJc1Byb2Nlc3NpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtwcm9jZXNzRXJyb3IsIHNldFByb2Nlc3NFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuICBjb25zdCBbc3VjY2Vzc01lc3NhZ2UsIHNldFN1Y2Nlc3NNZXNzYWdlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtwcm9ncmVzc01lc3NhZ2UsIHNldFByb2dyZXNzTWVzc2FnZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuICBjb25zdCBbaW50ZXJuYWxWaWV3LCBzZXRJbnRlcm5hbFZpZXddID0gdXNlU3RhdGU8SW50ZXJuYWxWaWV3U3RhdGU+KCdsaXN0JylcbiAgY29uc3QgW3NlbGVjdGVkTWFya2V0cGxhY2UsIHNldFNlbGVjdGVkTWFya2V0cGxhY2VdID1cbiAgICB1c2VTdGF0ZTxNYXJrZXRwbGFjZVN0YXRlIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2RldGFpbHNNZW51SW5kZXgsIHNldERldGFpbHNNZW51SW5kZXhdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgaGFzQXR0ZW1wdGVkQXV0b0FjdGlvbiA9IHVzZVJlZihmYWxzZSlcblxuICAvLyBMb2FkIG1hcmtldHBsYWNlcyBhbmQgdGhlaXIgaW5zdGFsbGVkIHBsdWdpbnNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkTWFya2V0cGxhY2VzKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gYXdhaXQgbG9hZEtub3duTWFya2V0cGxhY2VzQ29uZmlnKClcbiAgICAgICAgY29uc3QgeyBlbmFibGVkLCBkaXNhYmxlZCB9ID0gYXdhaXQgbG9hZEFsbFBsdWdpbnMoKVxuICAgICAgICBjb25zdCBhbGxQbHVnaW5zID0gWy4uLmVuYWJsZWQsIC4uLmRpc2FibGVkXVxuXG4gICAgICAgIC8vIExvYWQgbWFya2V0cGxhY2VzIHdpdGggZ3JhY2VmdWwgZGVncmFkYXRpb25cbiAgICAgICAgY29uc3QgeyBtYXJrZXRwbGFjZXMsIGZhaWx1cmVzIH0gPVxuICAgICAgICAgIGF3YWl0IGxvYWRNYXJrZXRwbGFjZXNXaXRoR3JhY2VmdWxEZWdyYWRhdGlvbihjb25maWcpXG5cbiAgICAgICAgY29uc3Qgc3RhdGVzOiBNYXJrZXRwbGFjZVN0YXRlW10gPSBbXVxuICAgICAgICBmb3IgKGNvbnN0IHsgbmFtZSwgY29uZmlnOiBlbnRyeSwgZGF0YTogbWFya2V0cGxhY2UgfSBvZiBtYXJrZXRwbGFjZXMpIHtcbiAgICAgICAgICAvLyBHZXQgYWxsIHBsdWdpbnMgaW5zdGFsbGVkIGZyb20gdGhpcyBtYXJrZXRwbGFjZVxuICAgICAgICAgIGNvbnN0IGluc3RhbGxlZEZyb21NYXJrZXRwbGFjZSA9IGFsbFBsdWdpbnMuZmlsdGVyKHBsdWdpbiA9PlxuICAgICAgICAgICAgcGx1Z2luLnNvdXJjZS5lbmRzV2l0aChgQCR7bmFtZX1gKSxcbiAgICAgICAgICApXG5cbiAgICAgICAgICBzdGF0ZXMucHVzaCh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc291cmNlOiBnZXRNYXJrZXRwbGFjZVNvdXJjZURpc3BsYXkoZW50cnkuc291cmNlKSxcbiAgICAgICAgICAgIGxhc3RVcGRhdGVkOiBlbnRyeS5sYXN0VXBkYXRlZCxcbiAgICAgICAgICAgIHBsdWdpbkNvdW50OiBtYXJrZXRwbGFjZT8ucGx1Z2lucy5sZW5ndGgsXG4gICAgICAgICAgICBpbnN0YWxsZWRQbHVnaW5zOiBpbnN0YWxsZWRGcm9tTWFya2V0cGxhY2UsXG4gICAgICAgICAgICBwZW5kaW5nVXBkYXRlOiBmYWxzZSxcbiAgICAgICAgICAgIHBlbmRpbmdSZW1vdmU6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b1VwZGF0ZTogaXNNYXJrZXRwbGFjZUF1dG9VcGRhdGUobmFtZSwgZW50cnkpLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBTb3J0OiBjbGF1ZGUtcGx1Z2luLWRpcmVjdG9yeSBmaXJzdCwgdGhlbiBhbHBoYWJldGljYWxseVxuICAgICAgICBzdGF0ZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgIGlmIChhLm5hbWUgPT09ICdjbGF1ZGUtcGx1Z2luLWRpcmVjdG9yeScpIHJldHVybiAtMVxuICAgICAgICAgIGlmIChiLm5hbWUgPT09ICdjbGF1ZGUtcGx1Z2luLWRpcmVjdG9yeScpIHJldHVybiAxXG4gICAgICAgICAgcmV0dXJuIGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSlcbiAgICAgICAgfSlcbiAgICAgICAgc2V0TWFya2V0cGxhY2VTdGF0ZXMoc3RhdGVzKVxuXG4gICAgICAgIC8vIEhhbmRsZSBtYXJrZXRwbGFjZSBsb2FkaW5nIGVycm9ycy93YXJuaW5nc1xuICAgICAgICBjb25zdCBzdWNjZXNzQ291bnQgPSBjb3VudChtYXJrZXRwbGFjZXMsIG0gPT4gbS5kYXRhICE9PSBudWxsKVxuICAgICAgICBjb25zdCBlcnJvclJlc3VsdCA9IGZvcm1hdE1hcmtldHBsYWNlTG9hZGluZ0Vycm9ycyhcbiAgICAgICAgICBmYWlsdXJlcyxcbiAgICAgICAgICBzdWNjZXNzQ291bnQsXG4gICAgICAgIClcbiAgICAgICAgaWYgKGVycm9yUmVzdWx0KSB7XG4gICAgICAgICAgaWYgKGVycm9yUmVzdWx0LnR5cGUgPT09ICd3YXJuaW5nJykge1xuICAgICAgICAgICAgc2V0UHJvY2Vzc0Vycm9yKGVycm9yUmVzdWx0Lm1lc3NhZ2UpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvclJlc3VsdC5tZXNzYWdlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEF1dG8tZXhlY3V0ZSBpZiB0YXJnZXQgYW5kIGFjdGlvbiBwcm92aWRlZFxuICAgICAgICBpZiAodGFyZ2V0TWFya2V0cGxhY2UgJiYgIWhhc0F0dGVtcHRlZEF1dG9BY3Rpb24uY3VycmVudCAmJiAhZXJyb3IpIHtcbiAgICAgICAgICBoYXNBdHRlbXB0ZWRBdXRvQWN0aW9uLmN1cnJlbnQgPSB0cnVlXG4gICAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBzdGF0ZXMuZmluZEluZGV4KFxuICAgICAgICAgICAgcyA9PiBzLm5hbWUgPT09IHRhcmdldE1hcmtldHBsYWNlLFxuICAgICAgICAgIClcbiAgICAgICAgICBpZiAodGFyZ2V0SW5kZXggPj0gMCkge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0U3RhdGUgPSBzdGF0ZXNbdGFyZ2V0SW5kZXhdXG4gICAgICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgIC8vIE1hcmsgdGhlIGFjdGlvbiBhcyBwZW5kaW5nIGFuZCBleGVjdXRlXG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkSW5kZXgodGFyZ2V0SW5kZXggKyAxKSAvLyArMSBiZWNhdXNlIFwiQWRkIE1hcmtldHBsYWNlXCIgaXMgYXQgaW5kZXggMFxuICAgICAgICAgICAgICBjb25zdCBuZXdTdGF0ZXMgPSBbLi4uc3RhdGVzXVxuICAgICAgICAgICAgICBpZiAoYWN0aW9uID09PSAndXBkYXRlJykge1xuICAgICAgICAgICAgICAgIG5ld1N0YXRlc1t0YXJnZXRJbmRleF0hLnBlbmRpbmdVcGRhdGUgPSB0cnVlXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSAncmVtb3ZlJykge1xuICAgICAgICAgICAgICAgIG5ld1N0YXRlc1t0YXJnZXRJbmRleF0hLnBlbmRpbmdSZW1vdmUgPSB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2V0TWFya2V0cGxhY2VTdGF0ZXMobmV3U3RhdGVzKVxuICAgICAgICAgICAgICAvLyBBcHBseSB0aGUgY2hhbmdlIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoYXBwbHlDaGFuZ2VzLCAxMDAsIG5ld1N0YXRlcylcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0U3RhdGUpIHtcbiAgICAgICAgICAgICAgLy8gTm8gYWN0aW9uIC0ganVzdCBzaG93IHRoZSBkZXRhaWxzIHZpZXcgZm9yIHRoaXMgbWFya2V0cGxhY2VcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJbmRleCh0YXJnZXRJbmRleCArIDEpIC8vICsxIGJlY2F1c2UgXCJBZGQgTWFya2V0cGxhY2VcIiBpcyBhdCBpbmRleCAwXG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkTWFya2V0cGxhY2UodGFyZ2V0U3RhdGUpXG4gICAgICAgICAgICAgIHNldEludGVybmFsVmlldygnZGV0YWlscycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChzZXRFcnJvcikge1xuICAgICAgICAgICAgc2V0RXJyb3IoYE1hcmtldHBsYWNlIG5vdCBmb3VuZDogJHt0YXJnZXRNYXJrZXRwbGFjZX1gKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmIChzZXRFcnJvcikge1xuICAgICAgICAgIHNldEVycm9yKFxuICAgICAgICAgICAgZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6ICdGYWlsZWQgdG8gbG9hZCBtYXJrZXRwbGFjZXMnLFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBzZXRQcm9jZXNzRXJyb3IoXG4gICAgICAgICAgZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6ICdGYWlsZWQgdG8gbG9hZCBtYXJrZXRwbGFjZXMnLFxuICAgICAgICApXG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgfVxuICAgIH1cbiAgICB2b2lkIGxvYWRNYXJrZXRwbGFjZXMoKVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9jb3JyZWN0bmVzcy91c2VFeGhhdXN0aXZlRGVwZW5kZW5jaWVzOiBpbnRlbnRpb25hbFxuICB9LCBbdGFyZ2V0TWFya2V0cGxhY2UsIGFjdGlvbiwgZXJyb3JdKVxuXG4gIC8vIENoZWNrIGlmIHRoZXJlIGFyZSBhbnkgcGVuZGluZyBjaGFuZ2VzXG4gIGNvbnN0IGhhc1BlbmRpbmdDaGFuZ2VzID0gKCkgPT4ge1xuICAgIHJldHVybiBtYXJrZXRwbGFjZVN0YXRlcy5zb21lKFxuICAgICAgc3RhdGUgPT4gc3RhdGUucGVuZGluZ1VwZGF0ZSB8fCBzdGF0ZS5wZW5kaW5nUmVtb3ZlLFxuICAgIClcbiAgfVxuXG4gIC8vIEdldCBjb3VudCBvZiBwZW5kaW5nIG9wZXJhdGlvbnNcbiAgY29uc3QgZ2V0UGVuZGluZ0NvdW50cyA9ICgpID0+IHtcbiAgICBjb25zdCB1cGRhdGVDb3VudCA9IGNvdW50KG1hcmtldHBsYWNlU3RhdGVzLCBzID0+IHMucGVuZGluZ1VwZGF0ZSlcbiAgICBjb25zdCByZW1vdmVDb3VudCA9IGNvdW50KG1hcmtldHBsYWNlU3RhdGVzLCBzID0+IHMucGVuZGluZ1JlbW92ZSlcbiAgICByZXR1cm4geyB1cGRhdGVDb3VudCwgcmVtb3ZlQ291bnQgfVxuICB9XG5cbiAgLy8gQXBwbHkgYWxsIHBlbmRpbmcgY2hhbmdlc1xuICBjb25zdCBhcHBseUNoYW5nZXMgPSBhc3luYyAoc3RhdGVzPzogTWFya2V0cGxhY2VTdGF0ZVtdKSA9PiB7XG4gICAgY29uc3Qgc3RhdGVzVG9Qcm9jZXNzID0gc3RhdGVzIHx8IG1hcmtldHBsYWNlU3RhdGVzXG4gICAgY29uc3Qgd2FzSW5EZXRhaWxzVmlldyA9IGludGVybmFsVmlldyA9PT0gJ2RldGFpbHMnXG4gICAgc2V0SXNQcm9jZXNzaW5nKHRydWUpXG4gICAgc2V0UHJvY2Vzc0Vycm9yKG51bGwpXG4gICAgc2V0U3VjY2Vzc01lc3NhZ2UobnVsbClcbiAgICBzZXRQcm9ncmVzc01lc3NhZ2UobnVsbClcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBzZXR0aW5ncyA9IGdldFNldHRpbmdzRm9yU291cmNlKCd1c2VyU2V0dGluZ3MnKVxuICAgICAgbGV0IHVwZGF0ZWRDb3VudCA9IDBcbiAgICAgIGxldCByZW1vdmVkQ291bnQgPSAwXG4gICAgICBjb25zdCByZWZyZXNoZWRNYXJrZXRwbGFjZXMgPSBuZXcgU2V0PHN0cmluZz4oKVxuXG4gICAgICBmb3IgKGNvbnN0IHN0YXRlIG9mIHN0YXRlc1RvUHJvY2Vzcykge1xuICAgICAgICAvLyBIYW5kbGUgcmVtb3ZlXG4gICAgICAgIGlmIChzdGF0ZS5wZW5kaW5nUmVtb3ZlKSB7XG4gICAgICAgICAgLy8gRmlyc3QgdW5pbnN0YWxsIGFsbCBwbHVnaW5zIGZyb20gdGhpcyBtYXJrZXRwbGFjZVxuICAgICAgICAgIGlmIChzdGF0ZS5pbnN0YWxsZWRQbHVnaW5zICYmIHN0YXRlLmluc3RhbGxlZFBsdWdpbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgbmV3RW5hYmxlZFBsdWdpbnMgPSB7IC4uLnNldHRpbmdzPy5lbmFibGVkUGx1Z2lucyB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiBzdGF0ZS5pbnN0YWxsZWRQbHVnaW5zKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBsdWdpbklkID0gY3JlYXRlUGx1Z2luSWQocGx1Z2luLm5hbWUsIHN0YXRlLm5hbWUpXG4gICAgICAgICAgICAgIC8vIE1hcmsgYXMgZGlzYWJsZWQvdW5pbnN0YWxsZWRcbiAgICAgICAgICAgICAgbmV3RW5hYmxlZFBsdWdpbnNbcGx1Z2luSWRdID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVwZGF0ZVNldHRpbmdzRm9yU291cmNlKCd1c2VyU2V0dGluZ3MnLCB7XG4gICAgICAgICAgICAgIGVuYWJsZWRQbHVnaW5zOiBuZXdFbmFibGVkUGx1Z2lucyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gVGhlbiByZW1vdmUgdGhlIG1hcmtldHBsYWNlXG4gICAgICAgICAgYXdhaXQgcmVtb3ZlTWFya2V0cGxhY2VTb3VyY2Uoc3RhdGUubmFtZSlcbiAgICAgICAgICByZW1vdmVkQ291bnQrK1xuXG4gICAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X21hcmtldHBsYWNlX3JlbW92ZWQnLCB7XG4gICAgICAgICAgICBtYXJrZXRwbGFjZV9uYW1lOlxuICAgICAgICAgICAgICBzdGF0ZS5uYW1lIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgICAgICBwbHVnaW5zX3VuaW5zdGFsbGVkOiBzdGF0ZS5pbnN0YWxsZWRQbHVnaW5zPy5sZW5ndGggfHwgMCxcbiAgICAgICAgICB9KVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBIYW5kbGUgdXBkYXRlXG4gICAgICAgIGlmIChzdGF0ZS5wZW5kaW5nVXBkYXRlKSB7XG4gICAgICAgICAgLy8gUmVmcmVzaCBpbmRpdmlkdWFsIG1hcmtldHBsYWNlIGZvciBlZmZpY2llbmN5IHdpdGggcHJvZ3Jlc3MgcmVwb3J0aW5nXG4gICAgICAgICAgYXdhaXQgcmVmcmVzaE1hcmtldHBsYWNlKHN0YXRlLm5hbWUsIChtZXNzYWdlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIHNldFByb2dyZXNzTWVzc2FnZShtZXNzYWdlKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgdXBkYXRlZENvdW50KytcbiAgICAgICAgICByZWZyZXNoZWRNYXJrZXRwbGFjZXMuYWRkKHN0YXRlLm5hbWUudG9Mb3dlckNhc2UoKSlcblxuICAgICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9tYXJrZXRwbGFjZV91cGRhdGVkJywge1xuICAgICAgICAgICAgbWFya2V0cGxhY2VfbmFtZTpcbiAgICAgICAgICAgICAgc3RhdGUubmFtZSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQWZ0ZXIgbWFya2V0cGxhY2UgY2xvbmVzIGFyZSByZWZyZXNoZWQsIGJ1bXAgaW5zdGFsbGVkIHBsdWdpbnMgZnJvbVxuICAgICAgLy8gdGhvc2UgbWFya2V0cGxhY2VzIHRvIHRoZSBuZXcgdmVyc2lvbi4gV2l0aG91dCB0aGlzLCB0aGUgbG9hZGVyJ3NcbiAgICAgIC8vIGNhY2hlLW9uLW1pc3MgKGNvcHlQbHVnaW5Ub1ZlcnNpb25lZENhY2hlKSBjcmVhdGVzIHRoZSBuZXcgdmVyc2lvblxuICAgICAgLy8gZGlyIG9uIHRoZSBuZXh0IGxvYWRBbGxQbHVnaW5zKCkgY2FsbCwgYnV0IGluc3RhbGxlZF9wbHVnaW5zLmpzb25cbiAgICAgIC8vIHN0YXlzIG9uIHRoZSBvbGQgdmVyc2lvbiDigJQgc28gY2xlYW51cE9ycGhhbmVkUGx1Z2luVmVyc2lvbnNJbkJhY2tncm91bmRcbiAgICAgIC8vIHN0YW1wcyB0aGUgTkVXIGRpciB3aXRoIC5vcnBoYW5lZF9hdCBvbiB0aGUgbmV4dCBzdGFydHVwLiBTZWUgIzI5NTEyLlxuICAgICAgLy8gdXBkYXRlUGx1Z2luT3AgKGNhbGxlZCBpbnNpZGUgdGhlIGhlbHBlcikgaXMgd2hhdCBhY3R1YWxseSB3cml0ZXNcbiAgICAgIC8vIGluc3RhbGxlZF9wbHVnaW5zLmpzb24gdmlhIHVwZGF0ZUluc3RhbGxhdGlvblBhdGhPbkRpc2suXG4gICAgICBsZXQgdXBkYXRlZFBsdWdpbkNvdW50ID0gMFxuICAgICAgaWYgKHJlZnJlc2hlZE1hcmtldHBsYWNlcy5zaXplID4gMCkge1xuICAgICAgICBjb25zdCB1cGRhdGVkUGx1Z2luSWRzID0gYXdhaXQgdXBkYXRlUGx1Z2luc0Zvck1hcmtldHBsYWNlcyhcbiAgICAgICAgICByZWZyZXNoZWRNYXJrZXRwbGFjZXMsXG4gICAgICAgIClcbiAgICAgICAgdXBkYXRlZFBsdWdpbkNvdW50ID0gdXBkYXRlZFBsdWdpbklkcy5sZW5ndGhcbiAgICAgIH1cblxuICAgICAgLy8gQ2xlYXIgY2FjaGVzIGFmdGVyIGNoYW5nZXNcbiAgICAgIGNsZWFyQWxsQ2FjaGVzKClcblxuICAgICAgLy8gQ2FsbCBjb21wbGV0aW9uIGNhbGxiYWNrXG4gICAgICBpZiAob25NYW5hZ2VDb21wbGV0ZSkge1xuICAgICAgICBhd2FpdCBvbk1hbmFnZUNvbXBsZXRlKClcbiAgICAgIH1cblxuICAgICAgLy8gUmVsb2FkIG1hcmtldHBsYWNlIGRhdGEgdG8gc2hvdyB1cGRhdGVkIHRpbWVzdGFtcHNcbiAgICAgIGNvbnN0IGNvbmZpZyA9IGF3YWl0IGxvYWRLbm93bk1hcmtldHBsYWNlc0NvbmZpZygpXG4gICAgICBjb25zdCB7IGVuYWJsZWQsIGRpc2FibGVkIH0gPSBhd2FpdCBsb2FkQWxsUGx1Z2lucygpXG4gICAgICBjb25zdCBhbGxQbHVnaW5zID0gWy4uLmVuYWJsZWQsIC4uLmRpc2FibGVkXVxuXG4gICAgICBjb25zdCB7IG1hcmtldHBsYWNlcyB9ID1cbiAgICAgICAgYXdhaXQgbG9hZE1hcmtldHBsYWNlc1dpdGhHcmFjZWZ1bERlZ3JhZGF0aW9uKGNvbmZpZylcblxuICAgICAgY29uc3QgbmV3U3RhdGVzOiBNYXJrZXRwbGFjZVN0YXRlW10gPSBbXVxuICAgICAgZm9yIChjb25zdCB7IG5hbWUsIGNvbmZpZzogZW50cnksIGRhdGE6IG1hcmtldHBsYWNlIH0gb2YgbWFya2V0cGxhY2VzKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbGxlZEZyb21NYXJrZXRwbGFjZSA9IGFsbFBsdWdpbnMuZmlsdGVyKHBsdWdpbiA9PlxuICAgICAgICAgIHBsdWdpbi5zb3VyY2UuZW5kc1dpdGgoYEAke25hbWV9YCksXG4gICAgICAgIClcblxuICAgICAgICBuZXdTdGF0ZXMucHVzaCh7XG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgICBzb3VyY2U6IGdldE1hcmtldHBsYWNlU291cmNlRGlzcGxheShlbnRyeS5zb3VyY2UpLFxuICAgICAgICAgIGxhc3RVcGRhdGVkOiBlbnRyeS5sYXN0VXBkYXRlZCxcbiAgICAgICAgICBwbHVnaW5Db3VudDogbWFya2V0cGxhY2U/LnBsdWdpbnMubGVuZ3RoLFxuICAgICAgICAgIGluc3RhbGxlZFBsdWdpbnM6IGluc3RhbGxlZEZyb21NYXJrZXRwbGFjZSxcbiAgICAgICAgICBwZW5kaW5nVXBkYXRlOiBmYWxzZSxcbiAgICAgICAgICBwZW5kaW5nUmVtb3ZlOiBmYWxzZSxcbiAgICAgICAgICBhdXRvVXBkYXRlOiBpc01hcmtldHBsYWNlQXV0b1VwZGF0ZShuYW1lLCBlbnRyeSksXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIC8vIFNvcnQ6IGNsYXVkZS1wbHVnaW4tZGlyZWN0b3J5IGZpcnN0LCB0aGVuIGFscGhhYmV0aWNhbGx5XG4gICAgICBuZXdTdGF0ZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBpZiAoYS5uYW1lID09PSAnY2xhdWRlLXBsdWdpbi1kaXJlY3RvcnknKSByZXR1cm4gLTFcbiAgICAgICAgaWYgKGIubmFtZSA9PT0gJ2NsYXVkZS1wbHVnaW4tZGlyZWN0b3J5JykgcmV0dXJuIDFcbiAgICAgICAgcmV0dXJuIGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSlcbiAgICAgIH0pXG4gICAgICBzZXRNYXJrZXRwbGFjZVN0YXRlcyhuZXdTdGF0ZXMpXG5cbiAgICAgIC8vIFVwZGF0ZSBzZWxlY3RlZCBtYXJrZXRwbGFjZSByZWZlcmVuY2Ugd2l0aCBmcmVzaCBkYXRhXG4gICAgICBpZiAod2FzSW5EZXRhaWxzVmlldyAmJiBzZWxlY3RlZE1hcmtldHBsYWNlKSB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRNYXJrZXRwbGFjZSA9IG5ld1N0YXRlcy5maW5kKFxuICAgICAgICAgIHMgPT4gcy5uYW1lID09PSBzZWxlY3RlZE1hcmtldHBsYWNlLm5hbWUsXG4gICAgICAgIClcbiAgICAgICAgaWYgKHVwZGF0ZWRNYXJrZXRwbGFjZSkge1xuICAgICAgICAgIHNldFNlbGVjdGVkTWFya2V0cGxhY2UodXBkYXRlZE1hcmtldHBsYWNlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEJ1aWxkIHN1Y2Nlc3MgbWVzc2FnZVxuICAgICAgY29uc3QgYWN0aW9uczogc3RyaW5nW10gPSBbXVxuICAgICAgaWYgKHVwZGF0ZWRDb3VudCA+IDApIHtcbiAgICAgICAgY29uc3QgcGx1Z2luUGFydCA9XG4gICAgICAgICAgdXBkYXRlZFBsdWdpbkNvdW50ID4gMFxuICAgICAgICAgICAgPyBgICgke3VwZGF0ZWRQbHVnaW5Db3VudH0gJHtwbHVyYWwodXBkYXRlZFBsdWdpbkNvdW50LCAncGx1Z2luJyl9IGJ1bXBlZClgXG4gICAgICAgICAgICA6ICcnXG4gICAgICAgIGFjdGlvbnMucHVzaChcbiAgICAgICAgICBgVXBkYXRlZCAke3VwZGF0ZWRDb3VudH0gJHtwbHVyYWwodXBkYXRlZENvdW50LCAnbWFya2V0cGxhY2UnKX0ke3BsdWdpblBhcnR9YCxcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgaWYgKHJlbW92ZWRDb3VudCA+IDApIHtcbiAgICAgICAgYWN0aW9ucy5wdXNoKFxuICAgICAgICAgIGBSZW1vdmVkICR7cmVtb3ZlZENvdW50fSAke3BsdXJhbChyZW1vdmVkQ291bnQsICdtYXJrZXRwbGFjZScpfWAsXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBzdWNjZXNzTXNnID0gYCR7ZmlndXJlcy50aWNrfSAke2FjdGlvbnMuam9pbignLCAnKX1gXG4gICAgICAgIC8vIElmIHdlIHdlcmUgaW4gZGV0YWlscyB2aWV3LCBzdGF5IHRoZXJlIGFuZCBzaG93IHN1Y2Nlc3NcbiAgICAgICAgaWYgKHdhc0luRGV0YWlsc1ZpZXcpIHtcbiAgICAgICAgICBzZXRTdWNjZXNzTWVzc2FnZShzdWNjZXNzTXNnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBzaG93IHJlc3VsdCBhbmQgZXhpdCB0byBtZW51XG4gICAgICAgICAgc2V0UmVzdWx0KHN1Y2Nlc3NNc2cpXG4gICAgICAgICAgc2V0VGltZW91dChzZXRWaWV3U3RhdGUsIDIwMDAsIHsgdHlwZTogJ21lbnUnIGFzIGNvbnN0IH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIXdhc0luRGV0YWlsc1ZpZXcpIHtcbiAgICAgICAgc2V0Vmlld1N0YXRlKHsgdHlwZTogJ21lbnUnIH0pXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zdCBlcnJvck1zZyA9IGVycm9yTWVzc2FnZShlcnIpXG4gICAgICBzZXRQcm9jZXNzRXJyb3IoZXJyb3JNc2cpXG4gICAgICBpZiAoc2V0RXJyb3IpIHtcbiAgICAgICAgc2V0RXJyb3IoZXJyb3JNc2cpXG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzUHJvY2Vzc2luZyhmYWxzZSlcbiAgICAgIHNldFByb2dyZXNzTWVzc2FnZShudWxsKVxuICAgIH1cbiAgfVxuXG4gIC8vIEhhbmRsZSBjb25maXJtaW5nIG1hcmtldHBsYWNlIHJlbW92YWxcbiAgY29uc3QgY29uZmlybVJlbW92ZSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXNlbGVjdGVkTWFya2V0cGxhY2UpIHJldHVyblxuXG4gICAgLy8gTWFyayBmb3IgcmVtb3ZhbCBhbmQgYXBwbHlcbiAgICBjb25zdCBuZXdTdGF0ZXMgPSBtYXJrZXRwbGFjZVN0YXRlcy5tYXAoc3RhdGUgPT5cbiAgICAgIHN0YXRlLm5hbWUgPT09IHNlbGVjdGVkTWFya2V0cGxhY2UubmFtZVxuICAgICAgICA/IHsgLi4uc3RhdGUsIHBlbmRpbmdSZW1vdmU6IHRydWUgfVxuICAgICAgICA6IHN0YXRlLFxuICAgIClcbiAgICBzZXRNYXJrZXRwbGFjZVN0YXRlcyhuZXdTdGF0ZXMpXG4gICAgYXdhaXQgYXBwbHlDaGFuZ2VzKG5ld1N0YXRlcylcbiAgfVxuXG4gIC8vIEJ1aWxkIG1lbnUgb3B0aW9ucyBmb3IgZGV0YWlscyB2aWV3XG4gIGNvbnN0IGJ1aWxkRGV0YWlsc01lbnVPcHRpb25zID0gKFxuICAgIG1hcmtldHBsYWNlOiBNYXJrZXRwbGFjZVN0YXRlIHwgbnVsbCxcbiAgKTogQXJyYXk8eyBsYWJlbDogc3RyaW5nOyBzZWNvbmRhcnlMYWJlbD86IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9PiA9PiB7XG4gICAgaWYgKCFtYXJrZXRwbGFjZSkgcmV0dXJuIFtdXG5cbiAgICBjb25zdCBvcHRpb25zOiBBcnJheTx7XG4gICAgICBsYWJlbDogc3RyaW5nXG4gICAgICBzZWNvbmRhcnlMYWJlbD86IHN0cmluZ1xuICAgICAgdmFsdWU6IHN0cmluZ1xuICAgIH0+ID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogYEJyb3dzZSBwbHVnaW5zICgke21hcmtldHBsYWNlLnBsdWdpbkNvdW50ID8/IDB9KWAsXG4gICAgICAgIHZhbHVlOiAnYnJvd3NlJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnVXBkYXRlIG1hcmtldHBsYWNlJyxcbiAgICAgICAgc2Vjb25kYXJ5TGFiZWw6IG1hcmtldHBsYWNlLmxhc3RVcGRhdGVkXG4gICAgICAgICAgPyBgKGxhc3QgdXBkYXRlZCAke25ldyBEYXRlKG1hcmtldHBsYWNlLmxhc3RVcGRhdGVkKS50b0xvY2FsZURhdGVTdHJpbmcoKX0pYFxuICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICB2YWx1ZTogJ3VwZGF0ZScsXG4gICAgICB9LFxuICAgIF1cblxuICAgIC8vIE9ubHkgc2hvdyBhdXRvLXVwZGF0ZSB0b2dnbGUgaWYgYXV0by11cGRhdGVyIGlzIG5vdCBnbG9iYWxseSBkaXNhYmxlZFxuICAgIGlmICghc2hvdWxkU2tpcFBsdWdpbkF1dG91cGRhdGUoKSkge1xuICAgICAgb3B0aW9ucy5wdXNoKHtcbiAgICAgICAgbGFiZWw6IG1hcmtldHBsYWNlLmF1dG9VcGRhdGVcbiAgICAgICAgICA/ICdEaXNhYmxlIGF1dG8tdXBkYXRlJ1xuICAgICAgICAgIDogJ0VuYWJsZSBhdXRvLXVwZGF0ZScsXG4gICAgICAgIHZhbHVlOiAndG9nZ2xlLWF1dG8tdXBkYXRlJyxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgb3B0aW9ucy5wdXNoKHsgbGFiZWw6ICdSZW1vdmUgbWFya2V0cGxhY2UnLCB2YWx1ZTogJ3JlbW92ZScgfSlcblxuICAgIHJldHVybiBvcHRpb25zXG4gIH1cblxuICAvLyBIYW5kbGUgdG9nZ2xpbmcgYXV0by11cGRhdGUgZm9yIGEgbWFya2V0cGxhY2VcbiAgY29uc3QgaGFuZGxlVG9nZ2xlQXV0b1VwZGF0ZSA9IGFzeW5jIChtYXJrZXRwbGFjZTogTWFya2V0cGxhY2VTdGF0ZSkgPT4ge1xuICAgIGNvbnN0IG5ld0F1dG9VcGRhdGUgPSAhbWFya2V0cGxhY2UuYXV0b1VwZGF0ZVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzZXRNYXJrZXRwbGFjZUF1dG9VcGRhdGUobWFya2V0cGxhY2UubmFtZSwgbmV3QXV0b1VwZGF0ZSlcblxuICAgICAgLy8gVXBkYXRlIGxvY2FsIHN0YXRlXG4gICAgICBzZXRNYXJrZXRwbGFjZVN0YXRlcyhwcmV2ID0+XG4gICAgICAgIHByZXYubWFwKHN0YXRlID0+XG4gICAgICAgICAgc3RhdGUubmFtZSA9PT0gbWFya2V0cGxhY2UubmFtZVxuICAgICAgICAgICAgPyB7IC4uLnN0YXRlLCBhdXRvVXBkYXRlOiBuZXdBdXRvVXBkYXRlIH1cbiAgICAgICAgICAgIDogc3RhdGUsXG4gICAgICAgICksXG4gICAgICApXG5cbiAgICAgIC8vIFVwZGF0ZSBzZWxlY3RlZCBtYXJrZXRwbGFjZSByZWZlcmVuY2VcbiAgICAgIHNldFNlbGVjdGVkTWFya2V0cGxhY2UocHJldiA9PlxuICAgICAgICBwcmV2ID8geyAuLi5wcmV2LCBhdXRvVXBkYXRlOiBuZXdBdXRvVXBkYXRlIH0gOiBwcmV2LFxuICAgICAgKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0UHJvY2Vzc0Vycm9yKFxuICAgICAgICBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogJ0ZhaWxlZCB0byB1cGRhdGUgc2V0dGluZycsXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgLy8gRXNjYXBlIGluIGRldGFpbHMgb3IgY29uZmlybS1yZW1vdmUgdmlldyAtIGdvIGJhY2sgdG8gbGlzdFxuICB1c2VLZXliaW5kaW5nKFxuICAgICdjb25maXJtOm5vJyxcbiAgICAoKSA9PiB7XG4gICAgICBzZXRJbnRlcm5hbFZpZXcoJ2xpc3QnKVxuICAgICAgc2V0RGV0YWlsc01lbnVJbmRleCgwKVxuICAgIH0sXG4gICAge1xuICAgICAgY29udGV4dDogJ0NvbmZpcm1hdGlvbicsXG4gICAgICBpc0FjdGl2ZTpcbiAgICAgICAgIWlzUHJvY2Vzc2luZyAmJlxuICAgICAgICAoaW50ZXJuYWxWaWV3ID09PSAnZGV0YWlscycgfHwgaW50ZXJuYWxWaWV3ID09PSAnY29uZmlybS1yZW1vdmUnKSxcbiAgICB9LFxuICApXG5cbiAgLy8gRXNjYXBlIGluIGxpc3QgdmlldyB3aXRoIHBlbmRpbmcgY2hhbmdlcyAtIGNsZWFyIHBlbmRpbmcgY2hhbmdlc1xuICB1c2VLZXliaW5kaW5nKFxuICAgICdjb25maXJtOm5vJyxcbiAgICAoKSA9PiB7XG4gICAgICBzZXRNYXJrZXRwbGFjZVN0YXRlcyhwcmV2ID0+XG4gICAgICAgIHByZXYubWFwKHN0YXRlID0+ICh7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgcGVuZGluZ1VwZGF0ZTogZmFsc2UsXG4gICAgICAgICAgcGVuZGluZ1JlbW92ZTogZmFsc2UsXG4gICAgICAgIH0pKSxcbiAgICAgIClcbiAgICAgIHNldFNlbGVjdGVkSW5kZXgoMClcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbnRleHQ6ICdDb25maXJtYXRpb24nLFxuICAgICAgaXNBY3RpdmU6ICFpc1Byb2Nlc3NpbmcgJiYgaW50ZXJuYWxWaWV3ID09PSAnbGlzdCcgJiYgaGFzUGVuZGluZ0NoYW5nZXMoKSxcbiAgICB9LFxuICApXG5cbiAgLy8gRXNjYXBlIGluIGxpc3QgdmlldyB3aXRob3V0IHBlbmRpbmcgY2hhbmdlcyAtIGV4aXQgdG8gcGFyZW50IG1lbnVcbiAgdXNlS2V5YmluZGluZyhcbiAgICAnY29uZmlybTpubycsXG4gICAgKCkgPT4ge1xuICAgICAgc2V0Vmlld1N0YXRlKHsgdHlwZTogJ21lbnUnIH0pXG4gICAgfSxcbiAgICB7XG4gICAgICBjb250ZXh0OiAnQ29uZmlybWF0aW9uJyxcbiAgICAgIGlzQWN0aXZlOlxuICAgICAgICAhaXNQcm9jZXNzaW5nICYmIGludGVybmFsVmlldyA9PT0gJ2xpc3QnICYmICFoYXNQZW5kaW5nQ2hhbmdlcygpLFxuICAgIH0sXG4gIClcblxuICAvLyBMaXN0IHZpZXcg4oCUIG5hdmlnYXRpb24gKHVwL2Rvd24vZW50ZXIgdmlhIGNvbmZpZ3VyYWJsZSBrZXliaW5kaW5ncylcbiAgdXNlS2V5YmluZGluZ3MoXG4gICAge1xuICAgICAgJ3NlbGVjdDpwcmV2aW91cyc6ICgpID0+IHNldFNlbGVjdGVkSW5kZXgocHJldiA9PiBNYXRoLm1heCgwLCBwcmV2IC0gMSkpLFxuICAgICAgJ3NlbGVjdDpuZXh0JzogKCkgPT4ge1xuICAgICAgICBjb25zdCB0b3RhbEl0ZW1zID0gbWFya2V0cGxhY2VTdGF0ZXMubGVuZ3RoICsgMVxuICAgICAgICBzZXRTZWxlY3RlZEluZGV4KHByZXYgPT4gTWF0aC5taW4odG90YWxJdGVtcyAtIDEsIHByZXYgKyAxKSlcbiAgICAgIH0sXG4gICAgICAnc2VsZWN0OmFjY2VwdCc6ICgpID0+IHtcbiAgICAgICAgY29uc3QgbWFya2V0cGxhY2VJbmRleCA9IHNlbGVjdGVkSW5kZXggLSAxXG4gICAgICAgIGlmIChzZWxlY3RlZEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgc2V0Vmlld1N0YXRlKHsgdHlwZTogJ2FkZC1tYXJrZXRwbGFjZScgfSlcbiAgICAgICAgfSBlbHNlIGlmIChoYXNQZW5kaW5nQ2hhbmdlcygpKSB7XG4gICAgICAgICAgdm9pZCBhcHBseUNoYW5nZXMoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG1hcmtldHBsYWNlID0gbWFya2V0cGxhY2VTdGF0ZXNbbWFya2V0cGxhY2VJbmRleF1cbiAgICAgICAgICBpZiAobWFya2V0cGxhY2UpIHtcbiAgICAgICAgICAgIHNldFNlbGVjdGVkTWFya2V0cGxhY2UobWFya2V0cGxhY2UpXG4gICAgICAgICAgICBzZXRJbnRlcm5hbFZpZXcoJ2RldGFpbHMnKVxuICAgICAgICAgICAgc2V0RGV0YWlsc01lbnVJbmRleCgwKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICAgIHsgY29udGV4dDogJ1NlbGVjdCcsIGlzQWN0aXZlOiAhaXNQcm9jZXNzaW5nICYmIGludGVybmFsVmlldyA9PT0gJ2xpc3QnIH0sXG4gIClcblxuICAvLyBMaXN0IHZpZXcg4oCUIG1hcmtldHBsYWNlLXNwZWNpZmljIGFjdGlvbnMgKHUvciBzaG9ydGN1dHMpXG4gIHVzZUlucHV0KFxuICAgIGlucHV0ID0+IHtcbiAgICAgIGNvbnN0IG1hcmtldHBsYWNlSW5kZXggPSBzZWxlY3RlZEluZGV4IC0gMVxuICAgICAgaWYgKChpbnB1dCA9PT0gJ3UnIHx8IGlucHV0ID09PSAnVScpICYmIG1hcmtldHBsYWNlSW5kZXggPj0gMCkge1xuICAgICAgICBzZXRNYXJrZXRwbGFjZVN0YXRlcyhwcmV2ID0+XG4gICAgICAgICAgcHJldi5tYXAoKHN0YXRlLCBpZHgpID0+XG4gICAgICAgICAgICBpZHggPT09IG1hcmtldHBsYWNlSW5kZXhcbiAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgIHBlbmRpbmdVcGRhdGU6ICFzdGF0ZS5wZW5kaW5nVXBkYXRlLFxuICAgICAgICAgICAgICAgICAgcGVuZGluZ1JlbW92ZTogc3RhdGUucGVuZGluZ1VwZGF0ZVxuICAgICAgICAgICAgICAgICAgICA/IHN0YXRlLnBlbmRpbmdSZW1vdmVcbiAgICAgICAgICAgICAgICAgICAgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDogc3RhdGUsXG4gICAgICAgICAgKSxcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIGlmICgoaW5wdXQgPT09ICdyJyB8fCBpbnB1dCA9PT0gJ1InKSAmJiBtYXJrZXRwbGFjZUluZGV4ID49IDApIHtcbiAgICAgICAgY29uc3QgbWFya2V0cGxhY2UgPSBtYXJrZXRwbGFjZVN0YXRlc1ttYXJrZXRwbGFjZUluZGV4XVxuICAgICAgICBpZiAobWFya2V0cGxhY2UpIHtcbiAgICAgICAgICBzZXRTZWxlY3RlZE1hcmtldHBsYWNlKG1hcmtldHBsYWNlKVxuICAgICAgICAgIHNldEludGVybmFsVmlldygnY29uZmlybS1yZW1vdmUnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB7IGlzQWN0aXZlOiAhaXNQcm9jZXNzaW5nICYmIGludGVybmFsVmlldyA9PT0gJ2xpc3QnIH0sXG4gIClcblxuICAvLyBEZXRhaWxzIHZpZXcg4oCUIG5hdmlnYXRpb25cbiAgdXNlS2V5YmluZGluZ3MoXG4gICAge1xuICAgICAgJ3NlbGVjdDpwcmV2aW91cyc6ICgpID0+XG4gICAgICAgIHNldERldGFpbHNNZW51SW5kZXgocHJldiA9PiBNYXRoLm1heCgwLCBwcmV2IC0gMSkpLFxuICAgICAgJ3NlbGVjdDpuZXh0JzogKCkgPT4ge1xuICAgICAgICBjb25zdCBtZW51T3B0aW9ucyA9IGJ1aWxkRGV0YWlsc01lbnVPcHRpb25zKHNlbGVjdGVkTWFya2V0cGxhY2UpXG4gICAgICAgIHNldERldGFpbHNNZW51SW5kZXgocHJldiA9PiBNYXRoLm1pbihtZW51T3B0aW9ucy5sZW5ndGggLSAxLCBwcmV2ICsgMSkpXG4gICAgICB9LFxuICAgICAgJ3NlbGVjdDphY2NlcHQnOiAoKSA9PiB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRNYXJrZXRwbGFjZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IG1lbnVPcHRpb25zID0gYnVpbGREZXRhaWxzTWVudU9wdGlvbnMoc2VsZWN0ZWRNYXJrZXRwbGFjZSlcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBtZW51T3B0aW9uc1tkZXRhaWxzTWVudUluZGV4XVxuICAgICAgICBpZiAoc2VsZWN0ZWRPcHRpb24/LnZhbHVlID09PSAnYnJvd3NlJykge1xuICAgICAgICAgIHNldFZpZXdTdGF0ZSh7XG4gICAgICAgICAgICB0eXBlOiAnYnJvd3NlLW1hcmtldHBsYWNlJyxcbiAgICAgICAgICAgIHRhcmdldE1hcmtldHBsYWNlOiBzZWxlY3RlZE1hcmtldHBsYWNlLm5hbWUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZE9wdGlvbj8udmFsdWUgPT09ICd1cGRhdGUnKSB7XG4gICAgICAgICAgY29uc3QgbmV3U3RhdGVzID0gbWFya2V0cGxhY2VTdGF0ZXMubWFwKHN0YXRlID0+XG4gICAgICAgICAgICBzdGF0ZS5uYW1lID09PSBzZWxlY3RlZE1hcmtldHBsYWNlLm5hbWVcbiAgICAgICAgICAgICAgPyB7IC4uLnN0YXRlLCBwZW5kaW5nVXBkYXRlOiB0cnVlIH1cbiAgICAgICAgICAgICAgOiBzdGF0ZSxcbiAgICAgICAgICApXG4gICAgICAgICAgc2V0TWFya2V0cGxhY2VTdGF0ZXMobmV3U3RhdGVzKVxuICAgICAgICAgIHZvaWQgYXBwbHlDaGFuZ2VzKG5ld1N0YXRlcylcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZE9wdGlvbj8udmFsdWUgPT09ICd0b2dnbGUtYXV0by11cGRhdGUnKSB7XG4gICAgICAgICAgdm9pZCBoYW5kbGVUb2dnbGVBdXRvVXBkYXRlKHNlbGVjdGVkTWFya2V0cGxhY2UpXG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRPcHRpb24/LnZhbHVlID09PSAncmVtb3ZlJykge1xuICAgICAgICAgIHNldEludGVybmFsVmlldygnY29uZmlybS1yZW1vdmUnKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgY29udGV4dDogJ1NlbGVjdCcsXG4gICAgICBpc0FjdGl2ZTogIWlzUHJvY2Vzc2luZyAmJiBpbnRlcm5hbFZpZXcgPT09ICdkZXRhaWxzJyxcbiAgICB9LFxuICApXG5cbiAgLy8gQ29uZmlybS1yZW1vdmUgdmlldyDigJQgeS9uIGlucHV0XG4gIHVzZUlucHV0KFxuICAgIGlucHV0ID0+IHtcbiAgICAgIGlmIChpbnB1dCA9PT0gJ3knIHx8IGlucHV0ID09PSAnWScpIHtcbiAgICAgICAgdm9pZCBjb25maXJtUmVtb3ZlKClcbiAgICAgIH0gZWxzZSBpZiAoaW5wdXQgPT09ICduJyB8fCBpbnB1dCA9PT0gJ04nKSB7XG4gICAgICAgIHNldEludGVybmFsVmlldygnbGlzdCcpXG4gICAgICAgIHNldFNlbGVjdGVkTWFya2V0cGxhY2UobnVsbClcbiAgICAgIH1cbiAgICB9LFxuICAgIHsgaXNBY3RpdmU6ICFpc1Byb2Nlc3NpbmcgJiYgaW50ZXJuYWxWaWV3ID09PSAnY29uZmlybS1yZW1vdmUnIH0sXG4gIClcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8VGV4dD5Mb2FkaW5nIG1hcmtldHBsYWNlc+KApjwvVGV4dD5cbiAgfVxuXG4gIGlmIChtYXJrZXRwbGFjZVN0YXRlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIDxCb3ggbWFyZ2luQm90dG9tPXsxfT5cbiAgICAgICAgICA8VGV4dCBib2xkPk1hbmFnZSBtYXJrZXRwbGFjZXM8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIHsvKiBBZGQgTWFya2V0cGxhY2Ugb3B0aW9uICovfVxuICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJyb3dcIiBnYXA9ezF9PlxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwic3VnZ2VzdGlvblwiPntmaWd1cmVzLnBvaW50ZXJ9ICs8L1RleHQ+XG4gICAgICAgICAgPFRleHQgYm9sZCBjb2xvcj1cInN1Z2dlc3Rpb25cIj5cbiAgICAgICAgICAgIEFkZCBNYXJrZXRwbGFjZVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgPEJveCBtYXJnaW5MZWZ0PXszfT5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvciBpdGFsaWM+XG4gICAgICAgICAgICB7ZXhpdFN0YXRlLnBlbmRpbmcgPyAoXG4gICAgICAgICAgICAgIDw+UHJlc3Mge2V4aXRTdGF0ZS5rZXlOYW1lfSBhZ2FpbiB0byBnbyBiYWNrPC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8QnlsaW5lPlxuICAgICAgICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgICAgICAgIGFjdGlvbj1cInNlbGVjdDphY2NlcHRcIlxuICAgICAgICAgICAgICAgICAgY29udGV4dD1cIlNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICBmYWxsYmFjaz1cIkVudGVyXCJcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwic2VsZWN0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgICAgICAgIGFjdGlvbj1cImNvbmZpcm06bm9cIlxuICAgICAgICAgICAgICAgICAgY29udGV4dD1cIkNvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICAgICAgICBmYWxsYmFjaz1cIkVzY1wiXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cImdvIGJhY2tcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvQnlsaW5lPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgLy8gU2hvdyBjb25maXJtYXRpb24gZGlhbG9nXG4gIGlmIChpbnRlcm5hbFZpZXcgPT09ICdjb25maXJtLXJlbW92ZScgJiYgc2VsZWN0ZWRNYXJrZXRwbGFjZSkge1xuICAgIGNvbnN0IHBsdWdpbkNvdW50ID0gc2VsZWN0ZWRNYXJrZXRwbGFjZS5pbnN0YWxsZWRQbHVnaW5zPy5sZW5ndGggfHwgMFxuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgPFRleHQgYm9sZCBjb2xvcj1cIndhcm5pbmdcIj5cbiAgICAgICAgICBSZW1vdmUgbWFya2V0cGxhY2UgPFRleHQgaXRhbGljPntzZWxlY3RlZE1hcmtldHBsYWNlLm5hbWV9PC9UZXh0Pj9cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICB7cGx1Z2luQ291bnQgPiAwICYmIChcbiAgICAgICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJ3YXJuaW5nXCI+XG4gICAgICAgICAgICAgICAgVGhpcyB3aWxsIGFsc28gdW5pbnN0YWxsIHtwbHVnaW5Db3VudH17JyAnfVxuICAgICAgICAgICAgICAgIHtwbHVyYWwocGx1Z2luQ291bnQsICdwbHVnaW4nKX0gZnJvbSB0aGlzIG1hcmtldHBsYWNlOlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtzZWxlY3RlZE1hcmtldHBsYWNlLmluc3RhbGxlZFBsdWdpbnMgJiZcbiAgICAgICAgICAgIHNlbGVjdGVkTWFya2V0cGxhY2UuaW5zdGFsbGVkUGx1Z2lucy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbWFyZ2luVG9wPXsxfSBtYXJnaW5MZWZ0PXsyfT5cbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRNYXJrZXRwbGFjZS5pbnN0YWxsZWRQbHVnaW5zLm1hcChwbHVnaW4gPT4gKFxuICAgICAgICAgICAgICAgICAgPFRleHQga2V5PXtwbHVnaW4ubmFtZX0gZGltQ29sb3I+XG4gICAgICAgICAgICAgICAgICAgIOKAoiB7cGx1Z2luLm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgUHJlc3MgPFRleHQgYm9sZD55PC9UZXh0PiB0byBjb25maXJtIG9yIDxUZXh0IGJvbGQ+bjwvVGV4dD4gdG9cbiAgICAgICAgICAgICAgY2FuY2VsXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgLy8gU2hvdyBtYXJrZXRwbGFjZSBkZXRhaWxzXG4gIGlmIChpbnRlcm5hbFZpZXcgPT09ICdkZXRhaWxzJyAmJiBzZWxlY3RlZE1hcmtldHBsYWNlKSB7XG4gICAgLy8gQ2hlY2sgaWYgdGhpcyBtYXJrZXRwbGFjZSBpcyBjdXJyZW50bHkgYmVpbmcgcHJvY2Vzc2VkXG4gICAgLy8gQ2hlY2sgcGVuZGluZ1VwZGF0ZSBmaXJzdCBzbyB3ZSBzaG93IHVwZGF0aW5nIHN0YXRlIGltbWVkaWF0ZWx5IHdoZW4gdXNlciBwcmVzc2VzIEVudGVyXG4gICAgY29uc3QgaXNVcGRhdGluZyA9IHNlbGVjdGVkTWFya2V0cGxhY2UucGVuZGluZ1VwZGF0ZSB8fCBpc1Byb2Nlc3NpbmdcblxuICAgIGNvbnN0IG1lbnVPcHRpb25zID0gYnVpbGREZXRhaWxzTWVudU9wdGlvbnMoc2VsZWN0ZWRNYXJrZXRwbGFjZSlcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgPFRleHQgYm9sZD57c2VsZWN0ZWRNYXJrZXRwbGFjZS5uYW1lfTwvVGV4dD5cbiAgICAgICAgPFRleHQgZGltQ29sb3I+e3NlbGVjdGVkTWFya2V0cGxhY2Uuc291cmNlfTwvVGV4dD5cbiAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAge3NlbGVjdGVkTWFya2V0cGxhY2UucGx1Z2luQ291bnQgfHwgMH0gYXZhaWxhYmxleycgJ31cbiAgICAgICAgICAgIHtwbHVyYWwoc2VsZWN0ZWRNYXJrZXRwbGFjZS5wbHVnaW5Db3VudCB8fCAwLCAncGx1Z2luJyl9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cblxuICAgICAgICB7LyogSW5zdGFsbGVkIHBsdWdpbnMgc2VjdGlvbiAqL31cbiAgICAgICAge3NlbGVjdGVkTWFya2V0cGxhY2UuaW5zdGFsbGVkUGx1Z2lucyAmJlxuICAgICAgICAgIHNlbGVjdGVkTWFya2V0cGxhY2UuaW5zdGFsbGVkUGx1Z2lucy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgICAgIDxUZXh0IGJvbGQ+XG4gICAgICAgICAgICAgICAgSW5zdGFsbGVkIHBsdWdpbnMgKHtzZWxlY3RlZE1hcmtldHBsYWNlLmluc3RhbGxlZFBsdWdpbnMubGVuZ3RofVxuICAgICAgICAgICAgICAgICk6XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbWFyZ2luTGVmdD17MX0+XG4gICAgICAgICAgICAgICAge3NlbGVjdGVkTWFya2V0cGxhY2UuaW5zdGFsbGVkUGx1Z2lucy5tYXAocGx1Z2luID0+IChcbiAgICAgICAgICAgICAgICAgIDxCb3gga2V5PXtwbHVnaW4ubmFtZX0gZmxleERpcmVjdGlvbj1cInJvd1wiIGdhcD17MX0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0PntmaWd1cmVzLmJ1bGxldH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PntwbHVnaW4ubmFtZX08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+e3BsdWdpbi5tYW5pZmVzdC5kZXNjcmlwdGlvbn08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKX1cblxuICAgICAgICB7LyogUHJvY2Vzc2luZyBpbmRpY2F0b3IgKi99XG4gICAgICAgIHtpc1VwZGF0aW5nICYmIChcbiAgICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0gZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgPFRleHQgY29sb3I9XCJjbGF1ZGVcIj5VcGRhdGluZyBtYXJrZXRwbGFjZeKApjwvVGV4dD5cbiAgICAgICAgICAgIHtwcm9ncmVzc01lc3NhZ2UgJiYgPFRleHQgZGltQ29sb3I+e3Byb2dyZXNzTWVzc2FnZX08L1RleHQ+fVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBTdWNjZXNzIG1lc3NhZ2UgKi99XG4gICAgICAgIHshaXNVcGRhdGluZyAmJiBzdWNjZXNzTWVzc2FnZSAmJiAoXG4gICAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgICAgPFRleHQgY29sb3I9XCJjbGF1ZGVcIj57c3VjY2Vzc01lc3NhZ2V9PC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBFcnJvciBtZXNzYWdlICovfVxuICAgICAgICB7IWlzVXBkYXRpbmcgJiYgcHJvY2Vzc0Vycm9yICYmIChcbiAgICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgICA8VGV4dCBjb2xvcj1cImVycm9yXCI+e3Byb2Nlc3NFcnJvcn08L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIE1lbnUgb3B0aW9ucyAqL31cbiAgICAgICAgeyFpc1VwZGF0aW5nICYmIChcbiAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgICAge21lbnVPcHRpb25zLm1hcCgob3B0aW9uLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFvcHRpb24pIHJldHVybiBudWxsXG4gICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBpZHggPT09IGRldGFpbHNNZW51SW5kZXhcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Qm94IGtleT17b3B0aW9uLnZhbHVlfT5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPXtpc1NlbGVjdGVkID8gJ3N1Z2dlc3Rpb24nIDogdW5kZWZpbmVkfT5cbiAgICAgICAgICAgICAgICAgICAge2lzU2VsZWN0ZWQgPyBmaWd1cmVzLnBvaW50ZXIgOiAnICd9IHtvcHRpb24ubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICB7b3B0aW9uLnNlY29uZGFyeUxhYmVsICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+IHtvcHRpb24uc2Vjb25kYXJ5TGFiZWx9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIFNob3cgZXhwbGFuYXRvcnkgdGV4dCBhdCB0aGUgYm90dG9tIHdoZW4gYXV0by11cGRhdGUgaXMgZW5hYmxlZCAqL31cbiAgICAgICAgeyFpc1VwZGF0aW5nICYmXG4gICAgICAgICAgIXNob3VsZFNraXBQbHVnaW5BdXRvdXBkYXRlKCkgJiZcbiAgICAgICAgICBzZWxlY3RlZE1hcmtldHBsYWNlLmF1dG9VcGRhdGUgJiYgKFxuICAgICAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgICBBdXRvLXVwZGF0ZSBlbmFibGVkLiBDbGF1ZGUgQ29kZSB3aWxsIGF1dG9tYXRpY2FsbHkgdXBkYXRlIHRoaXNcbiAgICAgICAgICAgICAgICBtYXJrZXRwbGFjZSBhbmQgaXRzIGluc3RhbGxlZCBwbHVnaW5zLlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApfVxuXG4gICAgICAgIDxCb3ggbWFyZ2luTGVmdD17M30+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3IgaXRhbGljPlxuICAgICAgICAgICAge2lzVXBkYXRpbmcgPyAoXG4gICAgICAgICAgICAgIDw+UGxlYXNlIHdhaXTigKY8Lz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAgICAgICAgPENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludFxuICAgICAgICAgICAgICAgICAgYWN0aW9uPVwic2VsZWN0OmFjY2VwdFwiXG4gICAgICAgICAgICAgICAgICBjb250ZXh0PVwiU2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgIGZhbGxiYWNrPVwiRW50ZXJcIlxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJzZWxlY3RcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludFxuICAgICAgICAgICAgICAgICAgYWN0aW9uPVwiY29uZmlybTpub1wiXG4gICAgICAgICAgICAgICAgICBjb250ZXh0PVwiQ29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgICAgIGZhbGxiYWNrPVwiRXNjXCJcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiZ28gYmFja1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9CeWxpbmU+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICAvLyBTaG93IG1hcmtldHBsYWNlIGxpc3RcbiAgY29uc3QgeyB1cGRhdGVDb3VudCwgcmVtb3ZlQ291bnQgfSA9IGdldFBlbmRpbmdDb3VudHMoKVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICA8Qm94IG1hcmdpbkJvdHRvbT17MX0+XG4gICAgICAgIDxUZXh0IGJvbGQ+TWFuYWdlIG1hcmtldHBsYWNlczwvVGV4dD5cbiAgICAgIDwvQm94PlxuXG4gICAgICB7LyogQWRkIE1hcmtldHBsYWNlIG9wdGlvbiAqL31cbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cInJvd1wiIGdhcD17MX0gbWFyZ2luQm90dG9tPXsxfT5cbiAgICAgICAgPFRleHQgY29sb3I9e3NlbGVjdGVkSW5kZXggPT09IDAgPyAnc3VnZ2VzdGlvbicgOiB1bmRlZmluZWR9PlxuICAgICAgICAgIHtzZWxlY3RlZEluZGV4ID09PSAwID8gZmlndXJlcy5wb2ludGVyIDogJyAnfSArXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQgYm9sZCBjb2xvcj17c2VsZWN0ZWRJbmRleCA9PT0gMCA/ICdzdWdnZXN0aW9uJyA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAgQWRkIE1hcmtldHBsYWNlXG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuXG4gICAgICB7LyogTWFya2V0cGxhY2UgbGlzdCAqL31cbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICB7bWFya2V0cGxhY2VTdGF0ZXMubWFwKChzdGF0ZSwgaWR4KSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IGlkeCArIDEgPT09IHNlbGVjdGVkSW5kZXggLy8gKzEgYmVjYXVzZSBBZGQgTWFya2V0cGxhY2UgaXMgYXQgaW5kZXggMFxuXG4gICAgICAgICAgLy8gQnVpbGQgc3RhdHVzIGluZGljYXRvcnNcbiAgICAgICAgICBjb25zdCBpbmRpY2F0b3JzOiBzdHJpbmdbXSA9IFtdXG4gICAgICAgICAgaWYgKHN0YXRlLnBlbmRpbmdVcGRhdGUpIGluZGljYXRvcnMucHVzaCgnVVBEQVRFJylcbiAgICAgICAgICBpZiAoc3RhdGUucGVuZGluZ1JlbW92ZSkgaW5kaWNhdG9ycy5wdXNoKCdSRU1PVkUnKVxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCb3gga2V5PXtzdGF0ZS5uYW1lfSBmbGV4RGlyZWN0aW9uPVwicm93XCIgZ2FwPXsxfSBtYXJnaW5Cb3R0b209ezF9PlxuICAgICAgICAgICAgICA8VGV4dCBjb2xvcj17aXNTZWxlY3RlZCA/ICdzdWdnZXN0aW9uJyA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAgICAgICAge2lzU2VsZWN0ZWQgPyBmaWd1cmVzLnBvaW50ZXIgOiAnICd9eycgJ31cbiAgICAgICAgICAgICAgICB7c3RhdGUucGVuZGluZ1JlbW92ZSA/IGZpZ3VyZXMuY3Jvc3MgOiBmaWd1cmVzLmJ1bGxldH1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBmbGV4R3Jvdz17MX0+XG4gICAgICAgICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwicm93XCIgZ2FwPXsxfT5cbiAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgIGJvbGRcbiAgICAgICAgICAgICAgICAgICAgc3RyaWtldGhyb3VnaD17c3RhdGUucGVuZGluZ1JlbW92ZX1cbiAgICAgICAgICAgICAgICAgICAgZGltQ29sb3I9e3N0YXRlLnBlbmRpbmdSZW1vdmV9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5uYW1lID09PSAnY2xhdWRlLXBsdWdpbnMtb2ZmaWNpYWwnICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cImNsYXVkZVwiPuKcuyA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICB7c3RhdGUubmFtZSA9PT0gJ2NsYXVkZS1wbHVnaW5zLW9mZmljaWFsJyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJjbGF1ZGVcIj4g4py7PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAge2luZGljYXRvcnMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2FybmluZ1wiPlt7aW5kaWNhdG9ycy5qb2luKCcsICcpfV08L1RleHQ+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPntzdGF0ZS5zb3VyY2V9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICAgICAge3N0YXRlLnBsdWdpbkNvdW50ICE9PSB1bmRlZmluZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8PntzdGF0ZS5wbHVnaW5Db3VudH0gYXZhaWxhYmxlPC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAge3N0YXRlLmluc3RhbGxlZFBsdWdpbnMgJiZcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuaW5zdGFsbGVkUGx1Z2lucy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8PiDigKIge3N0YXRlLmluc3RhbGxlZFBsdWdpbnMubGVuZ3RofSBpbnN0YWxsZWQ8Lz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIHtzdGF0ZS5sYXN0VXBkYXRlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgICAgICDigKIgVXBkYXRlZHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKHN0YXRlLmxhc3RVcGRhdGVkKS50b0xvY2FsZURhdGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9Cb3g+XG5cbiAgICAgIHsvKiBQZW5kaW5nIGNoYW5nZXMgc3VtbWFyeSAqL31cbiAgICAgIHtoYXNQZW5kaW5nQ2hhbmdlcygpICYmIChcbiAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgIDxUZXh0IGJvbGQ+UGVuZGluZyBjaGFuZ2VzOjwvVGV4dD57JyAnfVxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+RW50ZXIgdG8gYXBwbHk8L1RleHQ+XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIHt1cGRhdGVDb3VudCA+IDAgJiYgKFxuICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIOKAoiBVcGRhdGUge3VwZGF0ZUNvdW50fSB7cGx1cmFsKHVwZGF0ZUNvdW50LCAnbWFya2V0cGxhY2UnKX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtyZW1vdmVDb3VudCA+IDAgJiYgKFxuICAgICAgICAgICAgPFRleHQgY29sb3I9XCJ3YXJuaW5nXCI+XG4gICAgICAgICAgICAgIOKAoiBSZW1vdmUge3JlbW92ZUNvdW50fSB7cGx1cmFsKHJlbW92ZUNvdW50LCAnbWFya2V0cGxhY2UnKX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApfVxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBQcm9jZXNzaW5nIGluZGljYXRvciAqL31cbiAgICAgIHtpc1Byb2Nlc3NpbmcgJiYgKFxuICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgPFRleHQgY29sb3I9XCJjbGF1ZGVcIj5Qcm9jZXNzaW5nIGNoYW5nZXPigKY8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cblxuICAgICAgey8qIEVycm9yIGRpc3BsYXkgKi99XG4gICAgICB7cHJvY2Vzc0Vycm9yICYmIChcbiAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZXJyb3JcIj57cHJvY2Vzc0Vycm9yfTwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuXG4gICAgICA8TWFuYWdlTWFya2V0cGxhY2VzS2V5SGludHNcbiAgICAgICAgZXhpdFN0YXRlPXtleGl0U3RhdGV9XG4gICAgICAgIGhhc1BlbmRpbmdBY3Rpb25zPXtoYXNQZW5kaW5nQ2hhbmdlcygpfVxuICAgICAgLz5cbiAgICA8L0JveD5cbiAgKVxufVxuXG50eXBlIE1hbmFnZU1hcmtldHBsYWNlc0tleUhpbnRzUHJvcHMgPSB7XG4gIGV4aXRTdGF0ZTogUHJvcHNbJ2V4aXRTdGF0ZSddXG4gIGhhc1BlbmRpbmdBY3Rpb25zOiBib29sZWFuXG59XG5cbmZ1bmN0aW9uIE1hbmFnZU1hcmtldHBsYWNlc0tleUhpbnRzKHtcbiAgZXhpdFN0YXRlLFxuICBoYXNQZW5kaW5nQWN0aW9ucyxcbn06IE1hbmFnZU1hcmtldHBsYWNlc0tleUhpbnRzUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBpZiAoZXhpdFN0YXRlLnBlbmRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICA8VGV4dCBkaW1Db2xvciBpdGFsaWM+XG4gICAgICAgICAgUHJlc3Mge2V4aXRTdGF0ZS5rZXlOYW1lfSBhZ2FpbiB0byBnbyBiYWNrXG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBtYXJnaW5Ub3A9ezF9PlxuICAgICAgPFRleHQgZGltQ29sb3IgaXRhbGljPlxuICAgICAgICA8QnlsaW5lPlxuICAgICAgICAgIHtoYXNQZW5kaW5nQWN0aW9ucyAmJiAoXG4gICAgICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgICAgIGFjdGlvbj1cInNlbGVjdDphY2NlcHRcIlxuICAgICAgICAgICAgICBjb250ZXh0PVwiU2VsZWN0XCJcbiAgICAgICAgICAgICAgZmFsbGJhY2s9XCJFbnRlclwiXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiYXBwbHkgY2hhbmdlc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgeyFoYXNQZW5kaW5nQWN0aW9ucyAmJiAoXG4gICAgICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgICAgIGFjdGlvbj1cInNlbGVjdDphY2NlcHRcIlxuICAgICAgICAgICAgICBjb250ZXh0PVwiU2VsZWN0XCJcbiAgICAgICAgICAgICAgZmFsbGJhY2s9XCJFbnRlclwiXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwic2VsZWN0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7IWhhc1BlbmRpbmdBY3Rpb25zICYmIChcbiAgICAgICAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cInVcIiBhY3Rpb249XCJ1cGRhdGVcIiAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgeyFoYXNQZW5kaW5nQWN0aW9ucyAmJiAoXG4gICAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCJyXCIgYWN0aW9uPVwicmVtb3ZlXCIgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgIGFjdGlvbj1cImNvbmZpcm06bm9cIlxuICAgICAgICAgICAgY29udGV4dD1cIkNvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICBmYWxsYmFjaz1cIkVzY1wiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17aGFzUGVuZGluZ0FjdGlvbnMgPyAnY2FuY2VsJyA6ICdnbyBiYWNrJ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0J5bGluZT5cbiAgICAgIDwvVGV4dD5cbiAgICA8L0JveD5cbiAgKVxufVxuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7IEJ5bGluZSB9IGZyb20gJy4uL2Rlc2lnbi1zeXN0ZW0vQnlsaW5lLmpzJ1xuXG50eXBlIFByb3BzID0ge1xuICBzZXJ2ZXJUb29sc0NvdW50OiBudW1iZXJcbiAgc2VydmVyUHJvbXB0c0NvdW50OiBudW1iZXJcbiAgc2VydmVyUmVzb3VyY2VzQ291bnQ6IG51bWJlclxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2FwYWJpbGl0aWVzU2VjdGlvbih7XG4gIHNlcnZlclRvb2xzQ291bnQsXG4gIHNlcnZlclByb21wdHNDb3VudCxcbiAgc2VydmVyUmVzb3VyY2VzQ291bnQsXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IGNhcGFiaWxpdGllcyA9IFtdXG4gIGlmIChzZXJ2ZXJUb29sc0NvdW50ID4gMCkge1xuICAgIGNhcGFiaWxpdGllcy5wdXNoKCd0b29scycpXG4gIH1cbiAgaWYgKHNlcnZlclJlc291cmNlc0NvdW50ID4gMCkge1xuICAgIGNhcGFiaWxpdGllcy5wdXNoKCdyZXNvdXJjZXMnKVxuICB9XG4gIGlmIChzZXJ2ZXJQcm9tcHRzQ291bnQgPiAwKSB7XG4gICAgY2FwYWJpbGl0aWVzLnB1c2goJ3Byb21wdHMnKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAgPFRleHQgYm9sZD5DYXBhYmlsaXRpZXM6IDwvVGV4dD5cbiAgICAgIDxUZXh0IGNvbG9yPVwidGV4dFwiPlxuICAgICAgICB7Y2FwYWJpbGl0aWVzLmxlbmd0aCA+IDAgPyA8QnlsaW5lPntjYXBhYmlsaXRpZXN9PC9CeWxpbmU+IDogJ25vbmUnfVxuICAgICAgPC9UZXh0PlxuICAgIDwvQm94PlxuICApXG59XG4iLCAiaW1wb3J0IHR5cGUgeyBDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vY29tbWFuZHMuanMnXG5pbXBvcnQgdHlwZSB7XG4gIE1DUFNlcnZlckNvbm5lY3Rpb24sXG4gIFNlcnZlclJlc291cmNlLFxufSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tY3AvdHlwZXMuanMnXG5pbXBvcnQgdHlwZSB7IFRvb2wgfSBmcm9tICcuLi8uLi8uLi9Ub29sLmpzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlY29ubmVjdFJlc3VsdCB7XG4gIG1lc3NhZ2U6IHN0cmluZ1xuICBzdWNjZXNzOiBib29sZWFuXG59XG5cbi8qKlxuICogSGFuZGxlcyB0aGUgcmVzdWx0IG9mIGEgcmVjb25uZWN0IGF0dGVtcHQgYW5kIHJldHVybnMgYW4gYXBwcm9wcmlhdGUgdXNlciBtZXNzYWdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVSZWNvbm5lY3RSZXN1bHQoXG4gIHJlc3VsdDoge1xuICAgIGNsaWVudDogTUNQU2VydmVyQ29ubmVjdGlvblxuICAgIHRvb2xzOiBUb29sW11cbiAgICBjb21tYW5kczogQ29tbWFuZFtdXG4gICAgcmVzb3VyY2VzPzogU2VydmVyUmVzb3VyY2VbXVxuICB9LFxuICBzZXJ2ZXJOYW1lOiBzdHJpbmcsXG4pOiBSZWNvbm5lY3RSZXN1bHQge1xuICBzd2l0Y2ggKHJlc3VsdC5jbGllbnQudHlwZSkge1xuICAgIGNhc2UgJ2Nvbm5lY3RlZCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZXNzYWdlOiBgUmVjb25uZWN0ZWQgdG8gJHtzZXJ2ZXJOYW1lfS5gLFxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgfVxuXG4gICAgY2FzZSAnbmVlZHMtYXV0aCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZXNzYWdlOiBgJHtzZXJ2ZXJOYW1lfSByZXF1aXJlcyBhdXRoZW50aWNhdGlvbi4gVXNlIHRoZSAnQXV0aGVudGljYXRlJyBvcHRpb24uYCxcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICB9XG5cbiAgICBjYXNlICdmYWlsZWQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZTogYEZhaWxlZCB0byByZWNvbm5lY3QgdG8gJHtzZXJ2ZXJOYW1lfS5gLFxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZXNzYWdlOiBgVW5rbm93biByZXN1bHQgd2hlbiByZWNvbm5lY3RpbmcgdG8gJHtzZXJ2ZXJOYW1lfS5gLFxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEhhbmRsZXMgZXJyb3JzIGZyb20gcmVjb25uZWN0IGF0dGVtcHRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVSZWNvbm5lY3RFcnJvcihcbiAgZXJyb3I6IHVua25vd24sXG4gIHNlcnZlck5hbWU6IHN0cmluZyxcbik6IHN0cmluZyB7XG4gIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogU3RyaW5nKGVycm9yKVxuICByZXR1cm4gYEVycm9yIHJlY29ubmVjdGluZyB0byAke3NlcnZlck5hbWV9OiAke2Vycm9yTWVzc2FnZX1gXG59XG4iLCAiaW1wb3J0IGZpZ3VyZXMgZnJvbSAnZmlndXJlcydcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHR5cGUgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgbG9nRXZlbnQsXG59IGZyb20gJ3NyYy9zZXJ2aWNlcy9hbmFseXRpY3MvaW5kZXguanMnXG5pbXBvcnQgdHlwZSB7IENvbW1hbmRSZXN1bHREaXNwbGF5IH0gZnJvbSAnLi4vLi4vY29tbWFuZHMuanMnXG5pbXBvcnQgeyBnZXRPYXV0aENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9vYXV0aC5qcydcbmltcG9ydCB7IHVzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncyB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncy5qcydcbmltcG9ydCB7IHVzZVRlcm1pbmFsU2l6ZSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVRlcm1pbmFsU2l6ZS5qcydcbmltcG9ydCB7IHNldENsaXBib2FyZCB9IGZyb20gJy4uLy4uL2luay90ZXJtaW8vb3NjLmpzJ1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGN1c3RvbS1ydWxlcy9wcmVmZXItdXNlLWtleWJpbmRpbmdzIC0tIHJhdyBqL2svYXJyb3cgbWVudSBuYXZpZ2F0aW9uXG5pbXBvcnQgeyBCb3gsIGNvbG9yLCBMaW5rLCBUZXh0LCB1c2VJbnB1dCwgdXNlVGhlbWUgfSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQgeyB1c2VLZXliaW5kaW5nIH0gZnJvbSAnLi4vLi4va2V5YmluZGluZ3MvdXNlS2V5YmluZGluZy5qcydcbmltcG9ydCB7XG4gIEF1dGhlbnRpY2F0aW9uQ2FuY2VsbGVkRXJyb3IsXG4gIHBlcmZvcm1NQ1BPQXV0aEZsb3csXG4gIHJldm9rZVNlcnZlclRva2Vucyxcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWNwL2F1dGguanMnXG5pbXBvcnQgeyBjbGVhclNlcnZlckNhY2hlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWNwL2NsaWVudC5qcydcbmltcG9ydCB7XG4gIHVzZU1jcFJlY29ubmVjdCxcbiAgdXNlTWNwVG9nZ2xlRW5hYmxlZCxcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWNwL01DUENvbm5lY3Rpb25NYW5hZ2VyLmpzJ1xuaW1wb3J0IHtcbiAgZGVzY3JpYmVNY3BDb25maWdGaWxlUGF0aCxcbiAgZXhjbHVkZUNvbW1hbmRzQnlTZXJ2ZXIsXG4gIGV4Y2x1ZGVSZXNvdXJjZXNCeVNlcnZlcixcbiAgZXhjbHVkZVRvb2xzQnlTZXJ2ZXIsXG4gIGZpbHRlck1jcFByb21wdHNCeVNlcnZlcixcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWNwL3V0aWxzLmpzJ1xuaW1wb3J0IHsgdXNlQXBwU3RhdGUsIHVzZVNldEFwcFN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUvQXBwU3RhdGUuanMnXG5pbXBvcnQgeyBnZXRPYXV0aEFjY291bnRJbmZvIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXV0aC5qcydcbmltcG9ydCB7IG9wZW5Ccm93c2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvYnJvd3Nlci5qcydcbmltcG9ydCB7IGVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Vycm9ycy5qcydcbmltcG9ydCB7IGxvZ01DUERlYnVnIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nLmpzJ1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3N0cmluZ1V0aWxzLmpzJ1xuaW1wb3J0IHsgQ29uZmlndXJhYmxlU2hvcnRjdXRIaW50IH0gZnJvbSAnLi4vQ29uZmlndXJhYmxlU2hvcnRjdXRIaW50LmpzJ1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnLi4vQ3VzdG9tU2VsZWN0L2luZGV4LmpzJ1xuaW1wb3J0IHsgQnlsaW5lIH0gZnJvbSAnLi4vZGVzaWduLXN5c3RlbS9CeWxpbmUuanMnXG5pbXBvcnQgeyBLZXlib2FyZFNob3J0Y3V0SGludCB9IGZyb20gJy4uL2Rlc2lnbi1zeXN0ZW0vS2V5Ym9hcmRTaG9ydGN1dEhpbnQuanMnXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnLi4vU3Bpbm5lci5qcydcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSAnLi4vVGV4dElucHV0LmpzJ1xuaW1wb3J0IHsgQ2FwYWJpbGl0aWVzU2VjdGlvbiB9IGZyb20gJy4vQ2FwYWJpbGl0aWVzU2VjdGlvbi5qcydcbmltcG9ydCB0eXBlIHtcbiAgQ2xhdWRlQUlTZXJ2ZXJJbmZvLFxuICBIVFRQU2VydmVySW5mbyxcbiAgU1NFU2VydmVySW5mbyxcbn0gZnJvbSAnLi90eXBlcy5qcydcbmltcG9ydCB7XG4gIGhhbmRsZVJlY29ubmVjdEVycm9yLFxuICBoYW5kbGVSZWNvbm5lY3RSZXN1bHQsXG59IGZyb20gJy4vdXRpbHMvcmVjb25uZWN0SGVscGVycy5qcydcblxudHlwZSBQcm9wcyA9IHtcbiAgc2VydmVyOiBTU0VTZXJ2ZXJJbmZvIHwgSFRUUFNlcnZlckluZm8gfCBDbGF1ZGVBSVNlcnZlckluZm9cbiAgc2VydmVyVG9vbHNDb3VudDogbnVtYmVyXG4gIG9uVmlld1Rvb2xzOiAoKSA9PiB2b2lkXG4gIG9uQ2FuY2VsOiAoKSA9PiB2b2lkXG4gIG9uQ29tcGxldGU/OiAoXG4gICAgcmVzdWx0Pzogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7IGRpc3BsYXk/OiBDb21tYW5kUmVzdWx0RGlzcGxheSB9LFxuICApID0+IHZvaWRcbiAgYm9yZGVybGVzcz86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1DUFJlbW90ZVNlcnZlck1lbnUoe1xuICBzZXJ2ZXIsXG4gIHNlcnZlclRvb2xzQ291bnQsXG4gIG9uVmlld1Rvb2xzLFxuICBvbkNhbmNlbCxcbiAgb25Db21wbGV0ZSxcbiAgYm9yZGVybGVzcyA9IGZhbHNlLFxufTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBbdGhlbWVdID0gdXNlVGhlbWUoKVxuICBjb25zdCBleGl0U3RhdGUgPSB1c2VFeGl0T25DdHJsQ0RXaXRoS2V5YmluZGluZ3MoKVxuICBjb25zdCB7IGNvbHVtbnM6IHRlcm1pbmFsQ29sdW1ucyB9ID0gdXNlVGVybWluYWxTaXplKClcbiAgY29uc3QgW2lzQXV0aGVudGljYXRpbmcsIHNldElzQXV0aGVudGljYXRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgbWNwID0gdXNlQXBwU3RhdGUocyA9PiBzLm1jcClcbiAgY29uc3Qgc2V0QXBwU3RhdGUgPSB1c2VTZXRBcHBTdGF0ZSgpXG4gIGNvbnN0IFthdXRob3JpemF0aW9uVXJsLCBzZXRBdXRob3JpemF0aW9uVXJsXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZyB8IG51bGw+KFxuICAgIG51bGwsXG4gIClcbiAgY29uc3QgW2lzUmVjb25uZWN0aW5nLCBzZXRJc1JlY29ubmVjdGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgYXV0aEFib3J0Q29udHJvbGxlclJlZiA9IHVzZVJlZjxBYm9ydENvbnRyb2xsZXIgfCBudWxsPihudWxsKVxuICBjb25zdCBbaXNDbGF1ZGVBSUF1dGhlbnRpY2F0aW5nLCBzZXRJc0NsYXVkZUFJQXV0aGVudGljYXRpbmddID1cbiAgICB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2NsYXVkZUFJQXV0aFVybCwgc2V0Q2xhdWRlQUlBdXRoVXJsXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtpc0NsYXVkZUFJQ2xlYXJpbmdBdXRoLCBzZXRJc0NsYXVkZUFJQ2xlYXJpbmdBdXRoXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbY2xhdWRlQUlDbGVhckF1dGhVcmwsIHNldENsYXVkZUFJQ2xlYXJBdXRoVXJsXSA9IHVzZVN0YXRlPFxuICAgIHN0cmluZyB8IG51bGxcbiAgPihudWxsKVxuICBjb25zdCBbY2xhdWRlQUlDbGVhckF1dGhCcm93c2VyT3BlbmVkLCBzZXRDbGF1ZGVBSUNsZWFyQXV0aEJyb3dzZXJPcGVuZWRdID1cbiAgICB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3VybENvcGllZCwgc2V0VXJsQ29waWVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBjb3B5VGltZW91dFJlZiA9IHVzZVJlZjxSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IHVuZGVmaW5lZD4oXG4gICAgdW5kZWZpbmVkLFxuICApXG4gIGNvbnN0IHVubW91bnRlZFJlZiA9IHVzZVJlZihmYWxzZSlcbiAgY29uc3QgW2NhbGxiYWNrVXJsSW5wdXQsIHNldENhbGxiYWNrVXJsSW5wdXRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtjYWxsYmFja1VybEN1cnNvck9mZnNldCwgc2V0Q2FsbGJhY2tVcmxDdXJzb3JPZmZzZXRdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW21hbnVhbENhbGxiYWNrU3VibWl0LCBzZXRNYW51YWxDYWxsYmFja1N1Ym1pdF0gPSB1c2VTdGF0ZTxcbiAgICAoKHVybDogc3RyaW5nKSA9PiB2b2lkKSB8IG51bGxcbiAgPihudWxsKVxuXG4gIC8vIElmIHRoZSBjb21wb25lbnQgdW5tb3VudHMgbWlkLWF1dGggKGUuZy4gYSBwYXJlbnQgY29tcG9uZW50J3MgRXNjIGhhbmRsZXJcbiAgLy8gbmF2aWdhdGVzIGF3YXkgYmVmb3JlIG91cnMgZmlyZXMpLCBhYm9ydCB0aGUgT0F1dGggZmxvdyBzbyB0aGUgY2FsbGJhY2tcbiAgLy8gc2VydmVyIGlzIGNsb3NlZC4gV2l0aG91dCB0aGlzLCB0aGUgc2VydmVyIHN0YXlzIGJvdW5kIGFuZCB0aGUgcHJvY2Vzc1xuICAvLyBjYW4gb3V0bGl2ZSB0aGUgdGVybWluYWwuIEFsc28gY2xlYXIgdGhlIGNvcHktZmVlZGJhY2sgdGltZXIgYW5kIG1hcmtcbiAgLy8gdW5tb3VudGVkIHNvIHRoZSBhc3luYyBzZXRDbGlwYm9hcmQgY2FsbGJhY2sgZG9lc24ndCBzZXRVcmxDb3BpZWQgL1xuICAvLyBzY2hlZHVsZSBhIG5ldyB0aW1lciBhZnRlciB1bm1vdW50LlxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4gKCkgPT4ge1xuICAgICAgdW5tb3VudGVkUmVmLmN1cnJlbnQgPSB0cnVlXG4gICAgICBhdXRoQWJvcnRDb250cm9sbGVyUmVmLmN1cnJlbnQ/LmFib3J0KClcbiAgICAgIGlmIChjb3B5VGltZW91dFJlZi5jdXJyZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGNvcHlUaW1lb3V0UmVmLmN1cnJlbnQpXG4gICAgICB9XG4gICAgfSxcbiAgICBbXSxcbiAgKVxuXG4gIC8vIEEgc2VydmVyIGlzIGVmZmVjdGl2ZWx5IGF1dGhlbnRpY2F0ZWQgaWY6XG4gIC8vIDEuIEl0IGhhcyBPQXV0aCB0b2tlbnMgKHNlcnZlci5pc0F1dGhlbnRpY2F0ZWQpLCBPUlxuICAvLyAyLiBJdCdzIGNvbm5lY3RlZCBhbmQgaGFzIHRvb2xzIChtZWFuaW5nIGl0J3Mgd29ya2luZyB2aWEgc29tZSBhdXRoIG1lY2hhbmlzbSlcbiAgY29uc3QgaXNFZmZlY3RpdmVseUF1dGhlbnRpY2F0ZWQgPVxuICAgIHNlcnZlci5pc0F1dGhlbnRpY2F0ZWQgfHxcbiAgICAoc2VydmVyLmNsaWVudC50eXBlID09PSAnY29ubmVjdGVkJyAmJiBzZXJ2ZXJUb29sc0NvdW50ID4gMClcblxuICBjb25zdCByZWNvbm5lY3RNY3BTZXJ2ZXIgPSB1c2VNY3BSZWNvbm5lY3QoKVxuXG4gIGNvbnN0IGhhbmRsZUNsYXVkZUFJQXV0aENvbXBsZXRlID0gUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIHNldElzQ2xhdWRlQUlBdXRoZW50aWNhdGluZyhmYWxzZSlcbiAgICBzZXRDbGF1ZGVBSUF1dGhVcmwobnVsbClcbiAgICBzZXRJc1JlY29ubmVjdGluZyh0cnVlKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZWNvbm5lY3RNY3BTZXJ2ZXIoc2VydmVyLm5hbWUpXG4gICAgICBjb25zdCBzdWNjZXNzID0gcmVzdWx0LmNsaWVudC50eXBlID09PSAnY29ubmVjdGVkJ1xuICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2NsYXVkZWFpX21jcF9hdXRoX2NvbXBsZXRlZCcsIHsgc3VjY2VzcyB9KVxuICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgb25Db21wbGV0ZT8uKGBBdXRoZW50aWNhdGlvbiBzdWNjZXNzZnVsLiBDb25uZWN0ZWQgdG8gJHtzZXJ2ZXIubmFtZX0uYClcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNsaWVudC50eXBlID09PSAnbmVlZHMtYXV0aCcpIHtcbiAgICAgICAgb25Db21wbGV0ZT8uKFxuICAgICAgICAgICdBdXRoZW50aWNhdGlvbiBzdWNjZXNzZnVsLCBidXQgc2VydmVyIHN0aWxsIHJlcXVpcmVzIGF1dGhlbnRpY2F0aW9uLiBZb3UgbWF5IG5lZWQgdG8gbWFudWFsbHkgcmVzdGFydCBDbGF1ZGUgQ29kZS4nLFxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbkNvbXBsZXRlPy4oXG4gICAgICAgICAgJ0F1dGhlbnRpY2F0aW9uIHN1Y2Nlc3NmdWwsIGJ1dCBzZXJ2ZXIgcmVjb25uZWN0aW9uIGZhaWxlZC4gWW91IG1heSBuZWVkIHRvIG1hbnVhbGx5IHJlc3RhcnQgQ2xhdWRlIENvZGUgZm9yIHRoZSBjaGFuZ2VzIHRvIHRha2UgZWZmZWN0LicsXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9jbGF1ZGVhaV9tY3BfYXV0aF9jb21wbGV0ZWQnLCB7IHN1Y2Nlc3M6IGZhbHNlIH0pXG4gICAgICBvbkNvbXBsZXRlPy4oaGFuZGxlUmVjb25uZWN0RXJyb3IoZXJyLCBzZXJ2ZXIubmFtZSkpXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzUmVjb25uZWN0aW5nKGZhbHNlKVxuICAgIH1cbiAgfSwgW3JlY29ubmVjdE1jcFNlcnZlciwgc2VydmVyLm5hbWUsIG9uQ29tcGxldGVdKVxuXG4gIGNvbnN0IGhhbmRsZUNsYXVkZUFJQ2xlYXJBdXRoQ29tcGxldGUgPSBSZWFjdC51c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgY2xlYXJTZXJ2ZXJDYWNoZShzZXJ2ZXIubmFtZSwge1xuICAgICAgLi4uc2VydmVyLmNvbmZpZyxcbiAgICAgIHNjb3BlOiBzZXJ2ZXIuc2NvcGUsXG4gICAgfSlcblxuICAgIHNldEFwcFN0YXRlKHByZXYgPT4ge1xuICAgICAgY29uc3QgbmV3Q2xpZW50cyA9IHByZXYubWNwLmNsaWVudHMubWFwKGMgPT5cbiAgICAgICAgYy5uYW1lID09PSBzZXJ2ZXIubmFtZSA/IHsgLi4uYywgdHlwZTogJ25lZWRzLWF1dGgnIGFzIGNvbnN0IH0gOiBjLFxuICAgICAgKVxuICAgICAgY29uc3QgbmV3VG9vbHMgPSBleGNsdWRlVG9vbHNCeVNlcnZlcihwcmV2Lm1jcC50b29scywgc2VydmVyLm5hbWUpXG4gICAgICBjb25zdCBuZXdDb21tYW5kcyA9IGV4Y2x1ZGVDb21tYW5kc0J5U2VydmVyKFxuICAgICAgICBwcmV2Lm1jcC5jb21tYW5kcyxcbiAgICAgICAgc2VydmVyLm5hbWUsXG4gICAgICApXG4gICAgICBjb25zdCBuZXdSZXNvdXJjZXMgPSBleGNsdWRlUmVzb3VyY2VzQnlTZXJ2ZXIoXG4gICAgICAgIHByZXYubWNwLnJlc291cmNlcyxcbiAgICAgICAgc2VydmVyLm5hbWUsXG4gICAgICApXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXYsXG4gICAgICAgIG1jcDoge1xuICAgICAgICAgIC4uLnByZXYubWNwLFxuICAgICAgICAgIGNsaWVudHM6IG5ld0NsaWVudHMsXG4gICAgICAgICAgdG9vbHM6IG5ld1Rvb2xzLFxuICAgICAgICAgIGNvbW1hbmRzOiBuZXdDb21tYW5kcyxcbiAgICAgICAgICByZXNvdXJjZXM6IG5ld1Jlc291cmNlcyxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgbG9nRXZlbnQoJ3Rlbmd1X2NsYXVkZWFpX21jcF9jbGVhcl9hdXRoX2NvbXBsZXRlZCcsIHt9KVxuICAgIG9uQ29tcGxldGU/LihgRGlzY29ubmVjdGVkIGZyb20gJHtzZXJ2ZXIubmFtZX0uYClcbiAgICBzZXRJc0NsYXVkZUFJQ2xlYXJpbmdBdXRoKGZhbHNlKVxuICAgIHNldENsYXVkZUFJQ2xlYXJBdXRoVXJsKG51bGwpXG4gICAgc2V0Q2xhdWRlQUlDbGVhckF1dGhCcm93c2VyT3BlbmVkKGZhbHNlKVxuICB9LCBbc2VydmVyLm5hbWUsIHNlcnZlci5jb25maWcsIHNlcnZlci5zY29wZSwgc2V0QXBwU3RhdGUsIG9uQ29tcGxldGVdKVxuXG4gIC8vIEVzY2FwZSB0byBjYW5jZWwgYXV0aGVudGljYXRpb24gZmxvd1xuICB1c2VLZXliaW5kaW5nKFxuICAgICdjb25maXJtOm5vJyxcbiAgICAoKSA9PiB7XG4gICAgICBhdXRoQWJvcnRDb250cm9sbGVyUmVmLmN1cnJlbnQ/LmFib3J0KClcbiAgICAgIGF1dGhBYm9ydENvbnRyb2xsZXJSZWYuY3VycmVudCA9IG51bGxcbiAgICAgIHNldElzQXV0aGVudGljYXRpbmcoZmFsc2UpXG4gICAgICBzZXRBdXRob3JpemF0aW9uVXJsKG51bGwpXG4gICAgfSxcbiAgICB7XG4gICAgICBjb250ZXh0OiAnQ29uZmlybWF0aW9uJyxcbiAgICAgIGlzQWN0aXZlOiBpc0F1dGhlbnRpY2F0aW5nLFxuICAgIH0sXG4gIClcblxuICAvLyBFc2NhcGUgdG8gY2FuY2VsIENsYXVkZSBBSSBhdXRoZW50aWNhdGlvblxuICB1c2VLZXliaW5kaW5nKFxuICAgICdjb25maXJtOm5vJyxcbiAgICAoKSA9PiB7XG4gICAgICBzZXRJc0NsYXVkZUFJQXV0aGVudGljYXRpbmcoZmFsc2UpXG4gICAgICBzZXRDbGF1ZGVBSUF1dGhVcmwobnVsbClcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbnRleHQ6ICdDb25maXJtYXRpb24nLFxuICAgICAgaXNBY3RpdmU6IGlzQ2xhdWRlQUlBdXRoZW50aWNhdGluZyxcbiAgICB9LFxuICApXG5cbiAgLy8gRXNjYXBlIHRvIGNhbmNlbCBDbGF1ZGUgQUkgY2xlYXIgYXV0aFxuICB1c2VLZXliaW5kaW5nKFxuICAgICdjb25maXJtOm5vJyxcbiAgICAoKSA9PiB7XG4gICAgICBzZXRJc0NsYXVkZUFJQ2xlYXJpbmdBdXRoKGZhbHNlKVxuICAgICAgc2V0Q2xhdWRlQUlDbGVhckF1dGhVcmwobnVsbClcbiAgICAgIHNldENsYXVkZUFJQ2xlYXJBdXRoQnJvd3Nlck9wZW5lZChmYWxzZSlcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbnRleHQ6ICdDb25maXJtYXRpb24nLFxuICAgICAgaXNBY3RpdmU6IGlzQ2xhdWRlQUlDbGVhcmluZ0F1dGgsXG4gICAgfSxcbiAgKVxuXG4gIC8vIFJldHVybiBrZXkgaGFuZGxpbmcgZm9yIGF1dGhlbnRpY2F0aW9uIGZsb3dzIGFuZCAnYycgdG8gY29weSBVUkxcbiAgdXNlSW5wdXQoKGlucHV0LCBrZXkpID0+IHtcbiAgICBpZiAoa2V5LnJldHVybiAmJiBpc0NsYXVkZUFJQXV0aGVudGljYXRpbmcpIHtcbiAgICAgIHZvaWQgaGFuZGxlQ2xhdWRlQUlBdXRoQ29tcGxldGUoKVxuICAgIH1cbiAgICBpZiAoa2V5LnJldHVybiAmJiBpc0NsYXVkZUFJQ2xlYXJpbmdBdXRoKSB7XG4gICAgICBpZiAoY2xhdWRlQUlDbGVhckF1dGhCcm93c2VyT3BlbmVkKSB7XG4gICAgICAgIHZvaWQgaGFuZGxlQ2xhdWRlQUlDbGVhckF1dGhDb21wbGV0ZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGaXJzdCBFbnRlcjogb3BlbiB0aGUgYnJvd3NlclxuICAgICAgICBjb25zdCBjb25uZWN0b3JzVXJsID0gYCR7Z2V0T2F1dGhDb25maWcoKS5DTEFVREVfQUlfT1JJR0lOfS9zZXR0aW5ncy9jb25uZWN0b3JzYFxuICAgICAgICBzZXRDbGF1ZGVBSUNsZWFyQXV0aFVybChjb25uZWN0b3JzVXJsKVxuICAgICAgICBzZXRDbGF1ZGVBSUNsZWFyQXV0aEJyb3dzZXJPcGVuZWQodHJ1ZSlcbiAgICAgICAgdm9pZCBvcGVuQnJvd3Nlcihjb25uZWN0b3JzVXJsKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaW5wdXQgPT09ICdjJyAmJiAhdXJsQ29waWVkKSB7XG4gICAgICBjb25zdCB1cmxUb0NvcHkgPVxuICAgICAgICBhdXRob3JpemF0aW9uVXJsIHx8IGNsYXVkZUFJQXV0aFVybCB8fCBjbGF1ZGVBSUNsZWFyQXV0aFVybFxuICAgICAgaWYgKHVybFRvQ29weSkge1xuICAgICAgICB2b2lkIHNldENsaXBib2FyZCh1cmxUb0NvcHkpLnRoZW4ocmF3ID0+IHtcbiAgICAgICAgICBpZiAodW5tb3VudGVkUmVmLmN1cnJlbnQpIHJldHVyblxuICAgICAgICAgIGlmIChyYXcpIHByb2Nlc3Muc3Rkb3V0LndyaXRlKHJhdylcbiAgICAgICAgICBzZXRVcmxDb3BpZWQodHJ1ZSlcbiAgICAgICAgICBpZiAoY29weVRpbWVvdXRSZWYuY3VycmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoY29weVRpbWVvdXRSZWYuY3VycmVudClcbiAgICAgICAgICB9XG4gICAgICAgICAgY29weVRpbWVvdXRSZWYuY3VycmVudCA9IHNldFRpbWVvdXQoc2V0VXJsQ29waWVkLCAyMDAwLCBmYWxzZSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgY2FwaXRhbGl6ZWRTZXJ2ZXJOYW1lID0gY2FwaXRhbGl6ZShTdHJpbmcoc2VydmVyLm5hbWUpKVxuXG4gIC8vIENvdW50IE1DUCBwcm9tcHRzIGZvciB0aGlzIHNlcnZlciAoc2tpbGxzIGFyZSBzaG93biBpbiAvc2tpbGxzLCBub3QgaGVyZSlcbiAgY29uc3Qgc2VydmVyQ29tbWFuZHNDb3VudCA9IGZpbHRlck1jcFByb21wdHNCeVNlcnZlcihcbiAgICBtY3AuY29tbWFuZHMsXG4gICAgc2VydmVyLm5hbWUsXG4gICkubGVuZ3RoXG5cbiAgY29uc3QgdG9nZ2xlTWNwU2VydmVyID0gdXNlTWNwVG9nZ2xlRW5hYmxlZCgpXG5cbiAgY29uc3QgaGFuZGxlQ2xhdWRlQUlBdXRoID0gUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGNsYXVkZUFpQmFzZVVybCA9IGdldE9hdXRoQ29uZmlnKCkuQ0xBVURFX0FJX09SSUdJTlxuICAgIGNvbnN0IGFjY291bnRJbmZvID0gZ2V0T2F1dGhBY2NvdW50SW5mbygpXG4gICAgY29uc3Qgb3JnVXVpZCA9IGFjY291bnRJbmZvPy5vcmdhbml6YXRpb25VdWlkXG5cbiAgICBsZXQgYXV0aFVybDogc3RyaW5nXG4gICAgaWYgKFxuICAgICAgb3JnVXVpZCAmJlxuICAgICAgc2VydmVyLmNvbmZpZy50eXBlID09PSAnY2xhdWRlYWktcHJveHknICYmXG4gICAgICBzZXJ2ZXIuY29uZmlnLmlkXG4gICAgKSB7XG4gICAgICAvLyBVc2UgdGhlIGRpcmVjdCBhdXRoIFVSTCB3aXRoIG9yZyBhbmQgc2VydmVyIElEc1xuICAgICAgLy8gUmVwbGFjZSAnbWNwcnMnIHByZWZpeCB3aXRoICdtY3BzcnYnIGlmIHByZXNlbnRcbiAgICAgIGNvbnN0IHNlcnZlcklkID0gc2VydmVyLmNvbmZpZy5pZC5zdGFydHNXaXRoKCdtY3BycycpXG4gICAgICAgID8gJ21jcHNydicgKyBzZXJ2ZXIuY29uZmlnLmlkLnNsaWNlKDUpXG4gICAgICAgIDogc2VydmVyLmNvbmZpZy5pZFxuICAgICAgY29uc3QgcHJvZHVjdFN1cmZhY2UgPSBlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgIHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX0VOVFJZUE9JTlQgfHwgJ2NsaScsXG4gICAgICApXG4gICAgICBhdXRoVXJsID0gYCR7Y2xhdWRlQWlCYXNlVXJsfS9hcGkvb3JnYW5pemF0aW9ucy8ke29yZ1V1aWR9L21jcC9zdGFydC1hdXRoLyR7c2VydmVySWR9P3Byb2R1Y3Rfc3VyZmFjZT0ke3Byb2R1Y3RTdXJmYWNlfWBcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRmFsbCBiYWNrIHRvIHNldHRpbmdzL2Nvbm5lY3RvcnMgaWYgd2UgZG9uJ3QgaGF2ZSB0aGUgcmVxdWlyZWQgSURzXG4gICAgICBhdXRoVXJsID0gYCR7Y2xhdWRlQWlCYXNlVXJsfS9zZXR0aW5ncy9jb25uZWN0b3JzYFxuICAgIH1cblxuICAgIHNldENsYXVkZUFJQXV0aFVybChhdXRoVXJsKVxuICAgIHNldElzQ2xhdWRlQUlBdXRoZW50aWNhdGluZyh0cnVlKVxuICAgIGxvZ0V2ZW50KCd0ZW5ndV9jbGF1ZGVhaV9tY3BfYXV0aF9zdGFydGVkJywge30pXG4gICAgYXdhaXQgb3BlbkJyb3dzZXIoYXV0aFVybClcbiAgfSwgW3NlcnZlci5jb25maWddKVxuXG4gIGNvbnN0IGhhbmRsZUNsYXVkZUFJQ2xlYXJBdXRoID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldElzQ2xhdWRlQUlDbGVhcmluZ0F1dGgodHJ1ZSlcbiAgICBsb2dFdmVudCgndGVuZ3VfY2xhdWRlYWlfbWNwX2NsZWFyX2F1dGhfc3RhcnRlZCcsIHt9KVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVUb2dnbGVFbmFibGVkID0gUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHdhc0VuYWJsZWQgPSBzZXJ2ZXIuY2xpZW50LnR5cGUgIT09ICdkaXNhYmxlZCdcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0b2dnbGVNY3BTZXJ2ZXIoc2VydmVyLm5hbWUpXG5cbiAgICAgIGlmIChzZXJ2ZXIuY29uZmlnLnR5cGUgPT09ICdjbGF1ZGVhaS1wcm94eScpIHtcbiAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2NsYXVkZWFpX21jcF90b2dnbGUnLCB7XG4gICAgICAgICAgbmV3X3N0YXRlOiAod2FzRW5hYmxlZFxuICAgICAgICAgICAgPyAnZGlzYWJsZWQnXG4gICAgICAgICAgICA6ICdlbmFibGVkJykgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgLy8gUmV0dXJuIHRvIHRoZSBzZXJ2ZXIgbGlzdCBzbyB1c2VyIGNhbiBjb250aW51ZSBtYW5hZ2luZyBvdGhlciBzZXJ2ZXJzXG4gICAgICBvbkNhbmNlbCgpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zdCBhY3Rpb24gPSB3YXNFbmFibGVkID8gJ2Rpc2FibGUnIDogJ2VuYWJsZSdcbiAgICAgIG9uQ29tcGxldGU/LihcbiAgICAgICAgYEZhaWxlZCB0byAke2FjdGlvbn0gTUNQIHNlcnZlciAnJHtzZXJ2ZXIubmFtZX0nOiAke2Vycm9yTWVzc2FnZShlcnIpfWAsXG4gICAgICApXG4gICAgfVxuICB9LCBbXG4gICAgc2VydmVyLmNsaWVudC50eXBlLFxuICAgIHNlcnZlci5jb25maWcudHlwZSxcbiAgICBzZXJ2ZXIubmFtZSxcbiAgICB0b2dnbGVNY3BTZXJ2ZXIsXG4gICAgb25DYW5jZWwsXG4gICAgb25Db21wbGV0ZSxcbiAgXSlcblxuICBjb25zdCBoYW5kbGVBdXRoZW50aWNhdGUgPSBSZWFjdC51c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgaWYgKHNlcnZlci5jb25maWcudHlwZSA9PT0gJ2NsYXVkZWFpLXByb3h5JykgcmV0dXJuXG5cbiAgICBzZXRJc0F1dGhlbnRpY2F0aW5nKHRydWUpXG4gICAgc2V0RXJyb3IobnVsbClcblxuICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgICBhdXRoQWJvcnRDb250cm9sbGVyUmVmLmN1cnJlbnQgPSBjb250cm9sbGVyXG5cbiAgICB0cnkge1xuICAgICAgLy8gUmV2b2tlIGV4aXN0aW5nIHRva2VucyBpZiByZS1hdXRoZW50aWNhdGluZywgYnV0IHByZXNlcnZlIHN0ZXAtdXBcbiAgICAgIC8vIGF1dGggc3RhdGUgc28gdGhlIG5leHQgT0F1dGggZmxvdyBjYW4gcmV1c2UgY2FjaGVkIHNjb3BlL2Rpc2NvdmVyeS5cbiAgICAgIGlmIChzZXJ2ZXIuaXNBdXRoZW50aWNhdGVkICYmIHNlcnZlci5jb25maWcpIHtcbiAgICAgICAgYXdhaXQgcmV2b2tlU2VydmVyVG9rZW5zKHNlcnZlci5uYW1lLCBzZXJ2ZXIuY29uZmlnLCB7XG4gICAgICAgICAgcHJlc2VydmVTdGVwVXBTdGF0ZTogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHNlcnZlci5jb25maWcpIHtcbiAgICAgICAgYXdhaXQgcGVyZm9ybU1DUE9BdXRoRmxvdyhcbiAgICAgICAgICBzZXJ2ZXIubmFtZSxcbiAgICAgICAgICBzZXJ2ZXIuY29uZmlnLFxuICAgICAgICAgIHNldEF1dGhvcml6YXRpb25VcmwsXG4gICAgICAgICAgY29udHJvbGxlci5zaWduYWwsXG4gICAgICAgICAge1xuICAgICAgICAgICAgb25XYWl0aW5nRm9yQ2FsbGJhY2s6IHN1Ym1pdCA9PiB7XG4gICAgICAgICAgICAgIHNldE1hbnVhbENhbGxiYWNrU3VibWl0KCgpID0+IHN1Ym1pdClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgKVxuXG4gICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9tY3BfYXV0aF9jb25maWdfYXV0aGVudGljYXRlJywge1xuICAgICAgICAgIHdhc0F1dGhlbnRpY2F0ZWQ6IHNlcnZlci5pc0F1dGhlbnRpY2F0ZWQsXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVjb25uZWN0TWNwU2VydmVyKHNlcnZlci5uYW1lKVxuXG4gICAgICAgIGlmIChyZXN1bHQuY2xpZW50LnR5cGUgPT09ICdjb25uZWN0ZWQnKSB7XG4gICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGlzRWZmZWN0aXZlbHlBdXRoZW50aWNhdGVkXG4gICAgICAgICAgICA/IGBBdXRoZW50aWNhdGlvbiBzdWNjZXNzZnVsLiBSZWNvbm5lY3RlZCB0byAke3NlcnZlci5uYW1lfS5gXG4gICAgICAgICAgICA6IGBBdXRoZW50aWNhdGlvbiBzdWNjZXNzZnVsLiBDb25uZWN0ZWQgdG8gJHtzZXJ2ZXIubmFtZX0uYFxuICAgICAgICAgIG9uQ29tcGxldGU/LihtZXNzYWdlKVxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jbGllbnQudHlwZSA9PT0gJ25lZWRzLWF1dGgnKSB7XG4gICAgICAgICAgb25Db21wbGV0ZT8uKFxuICAgICAgICAgICAgJ0F1dGhlbnRpY2F0aW9uIHN1Y2Nlc3NmdWwsIGJ1dCBzZXJ2ZXIgc3RpbGwgcmVxdWlyZXMgYXV0aGVudGljYXRpb24uIFlvdSBtYXkgbmVlZCB0byBtYW51YWxseSByZXN0YXJ0IENsYXVkZSBDb2RlLicsXG4gICAgICAgICAgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHJlc3VsdC5jbGllbnQudHlwZSA9PT0gJ2ZhaWxlZCdcbiAgICAgICAgICBsb2dNQ1BEZWJ1ZyhzZXJ2ZXIubmFtZSwgYFJlY29ubmVjdGlvbiBmYWlsZWQgYWZ0ZXIgYXV0aGVudGljYXRpb25gKVxuICAgICAgICAgIG9uQ29tcGxldGU/LihcbiAgICAgICAgICAgICdBdXRoZW50aWNhdGlvbiBzdWNjZXNzZnVsLCBidXQgc2VydmVyIHJlY29ubmVjdGlvbiBmYWlsZWQuIFlvdSBtYXkgbmVlZCB0byBtYW51YWxseSByZXN0YXJ0IENsYXVkZSBDb2RlIGZvciB0aGUgY2hhbmdlcyB0byB0YWtlIGVmZmVjdC4nLFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gRG9uJ3Qgc2hvdyBlcnJvciBpZiBpdCB3YXMgYSBjYW5jZWxsYXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgZXJyIGluc3RhbmNlb2YgRXJyb3IgJiZcbiAgICAgICAgIShlcnIgaW5zdGFuY2VvZiBBdXRoZW50aWNhdGlvbkNhbmNlbGxlZEVycm9yKVxuICAgICAgKSB7XG4gICAgICAgIHNldEVycm9yKGVyci5tZXNzYWdlKVxuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc0F1dGhlbnRpY2F0aW5nKGZhbHNlKVxuICAgICAgYXV0aEFib3J0Q29udHJvbGxlclJlZi5jdXJyZW50ID0gbnVsbFxuICAgICAgc2V0TWFudWFsQ2FsbGJhY2tTdWJtaXQobnVsbClcbiAgICAgIHNldENhbGxiYWNrVXJsSW5wdXQoJycpXG4gICAgfVxuICB9LCBbXG4gICAgc2VydmVyLmlzQXV0aGVudGljYXRlZCxcbiAgICBzZXJ2ZXIuY29uZmlnLFxuICAgIHNlcnZlci5uYW1lLFxuICAgIG9uQ29tcGxldGUsXG4gICAgcmVjb25uZWN0TWNwU2VydmVyLFxuICAgIGlzRWZmZWN0aXZlbHlBdXRoZW50aWNhdGVkLFxuICBdKVxuXG4gIGNvbnN0IGhhbmRsZUNsZWFyQXV0aCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoc2VydmVyLmNvbmZpZy50eXBlID09PSAnY2xhdWRlYWktcHJveHknKSByZXR1cm5cblxuICAgIGlmIChzZXJ2ZXIuY29uZmlnKSB7XG4gICAgICAvLyBGaXJzdCByZXZva2UgdGhlIGF1dGhlbnRpY2F0aW9uIHRva2VucyBhbmQgY2xlYXIgYWxsIGF1dGggc3RhdGVcbiAgICAgIGF3YWl0IHJldm9rZVNlcnZlclRva2VucyhzZXJ2ZXIubmFtZSwgc2VydmVyLmNvbmZpZylcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9tY3BfYXV0aF9jb25maWdfY2xlYXInLCB7fSlcblxuICAgICAgLy8gRGlzY29ubmVjdCB0aGUgY2xpZW50IGFuZCBjbGVhciB0aGUgY2FjaGVcbiAgICAgIGF3YWl0IGNsZWFyU2VydmVyQ2FjaGUoc2VydmVyLm5hbWUsIHtcbiAgICAgICAgLi4uc2VydmVyLmNvbmZpZyxcbiAgICAgICAgc2NvcGU6IHNlcnZlci5zY29wZSxcbiAgICAgIH0pXG5cbiAgICAgIC8vIFVwZGF0ZSBhcHAgc3RhdGUgdG8gcmVtb3ZlIHRoZSBkaXNjb25uZWN0ZWQgc2VydmVyJ3MgdG9vbHMsIGNvbW1hbmRzLCBhbmQgcmVzb3VyY2VzXG4gICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+IHtcbiAgICAgICAgY29uc3QgbmV3Q2xpZW50cyA9IHByZXYubWNwLmNsaWVudHMubWFwKGMgPT5cbiAgICAgICAgICAvLyAnZmFpbGVkJyBpcyBhIG1pc25vbWVyIGhlcmUsIGJ1dCB3ZSBkb24ndCByZWFsbHkgZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIFwibm90IGNvbm5lY3RlZFwiIGFuZCBcImZhaWxlZFwiIGF0IHRoZSBtb21lbnRcbiAgICAgICAgICBjLm5hbWUgPT09IHNlcnZlci5uYW1lID8geyAuLi5jLCB0eXBlOiAnZmFpbGVkJyBhcyBjb25zdCB9IDogYyxcbiAgICAgICAgKVxuICAgICAgICBjb25zdCBuZXdUb29scyA9IGV4Y2x1ZGVUb29sc0J5U2VydmVyKHByZXYubWNwLnRvb2xzLCBzZXJ2ZXIubmFtZSlcbiAgICAgICAgY29uc3QgbmV3Q29tbWFuZHMgPSBleGNsdWRlQ29tbWFuZHNCeVNlcnZlcihcbiAgICAgICAgICBwcmV2Lm1jcC5jb21tYW5kcyxcbiAgICAgICAgICBzZXJ2ZXIubmFtZSxcbiAgICAgICAgKVxuICAgICAgICBjb25zdCBuZXdSZXNvdXJjZXMgPSBleGNsdWRlUmVzb3VyY2VzQnlTZXJ2ZXIoXG4gICAgICAgICAgcHJldi5tY3AucmVzb3VyY2VzLFxuICAgICAgICAgIHNlcnZlci5uYW1lLFxuICAgICAgICApXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgIG1jcDoge1xuICAgICAgICAgICAgLi4ucHJldi5tY3AsXG4gICAgICAgICAgICBjbGllbnRzOiBuZXdDbGllbnRzLFxuICAgICAgICAgICAgdG9vbHM6IG5ld1Rvb2xzLFxuICAgICAgICAgICAgY29tbWFuZHM6IG5ld0NvbW1hbmRzLFxuICAgICAgICAgICAgcmVzb3VyY2VzOiBuZXdSZXNvdXJjZXMsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgb25Db21wbGV0ZT8uKGBBdXRoZW50aWNhdGlvbiBjbGVhcmVkIGZvciAke3NlcnZlci5uYW1lfS5gKVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc0F1dGhlbnRpY2F0aW5nKSB7XG4gICAgLy8gWEFBOiBzaWxlbnQgZXhjaGFuZ2UgKGNhY2hlZCBpZF90b2tlbiDihpIgbm8gYnJvd3NlciksIHNvIGRvbid0IGNsYWltXG4gICAgLy8gb25lIHdpbGwgb3Blbi4gSWYgSWRQIGxvZ2luIElTIG5lZWRlZCwgYXV0aG9yaXphdGlvblVybCBwb3B1bGF0ZXMgYW5kXG4gICAgLy8gdGhlIFVSTCBmYWxsYmFjayBibG9jayBiZWxvdyBzdGlsbCByZW5kZXJzLlxuICAgIGNvbnN0IGF1dGhDb3B5ID1cbiAgICAgIHNlcnZlci5jb25maWcudHlwZSAhPT0gJ2NsYXVkZWFpLXByb3h5JyAmJiBzZXJ2ZXIuY29uZmlnLm9hdXRoPy54YWFcbiAgICAgICAgPyAnIEF1dGhlbnRpY2F0aW5nIHZpYSB5b3VyIGlkZW50aXR5IHByb3ZpZGVyJ1xuICAgICAgICA6ICcgQSBicm93c2VyIHdpbmRvdyB3aWxsIG9wZW4gZm9yIGF1dGhlbnRpY2F0aW9uJ1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9ezF9IHBhZGRpbmc9ezF9PlxuICAgICAgICA8VGV4dCBjb2xvcj1cImNsYXVkZVwiPkF1dGhlbnRpY2F0aW5nIHdpdGgge3NlcnZlci5uYW1lfeKApjwvVGV4dD5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICAgIDxUZXh0PnthdXRoQ29weX08L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICB7YXV0aG9yaXphdGlvblVybCAmJiAoXG4gICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgICBJZiB5b3VyIGJyb3dzZXIgZG9lc24mYXBvczt0IG9wZW4gYXV0b21hdGljYWxseSwgY29weSB0aGlzIFVSTFxuICAgICAgICAgICAgICAgIG1hbnVhbGx5eycgJ31cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICB7dXJsQ29waWVkID8gKFxuICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwic3VjY2Vzc1wiPihDb3BpZWQhKTwvVGV4dD5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cImNcIiBhY3Rpb249XCJjb3B5XCIgcGFyZW5zIC8+XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8TGluayB1cmw9e2F1dGhvcml6YXRpb25Vcmx9IC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICAgIHtpc0F1dGhlbnRpY2F0aW5nICYmIGF1dGhvcml6YXRpb25VcmwgJiYgbWFudWFsQ2FsbGJhY2tTdWJtaXQgJiYgKFxuICAgICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgSWYgdGhlIHJlZGlyZWN0IHBhZ2Ugc2hvd3MgYSBjb25uZWN0aW9uIGVycm9yLCBwYXN0ZSB0aGUgVVJMIGZyb21cbiAgICAgICAgICAgICAgeW91ciBicm93c2VyJmFwb3M7cyBhZGRyZXNzIGJhcjpcbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlVSTCB7Jz4nfSA8L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y2FsbGJhY2tVcmxJbnB1dH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0Q2FsbGJhY2tVcmxJbnB1dH1cbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17KHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgIG1hbnVhbENhbGxiYWNrU3VibWl0KHZhbHVlLnRyaW0oKSlcbiAgICAgICAgICAgICAgICAgIHNldENhbGxiYWNrVXJsSW5wdXQoJycpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjdXJzb3JPZmZzZXQ9e2NhbGxiYWNrVXJsQ3Vyc29yT2Zmc2V0fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlQ3Vyc29yT2Zmc2V0PXtzZXRDYWxsYmFja1VybEN1cnNvck9mZnNldH1cbiAgICAgICAgICAgICAgICBjb2x1bW5zPXt0ZXJtaW5hbENvbHVtbnMgLSA4fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICAgIDxCb3ggbWFyZ2luTGVmdD17M30+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICBSZXR1cm4gaGVyZSBhZnRlciBhdXRoZW50aWNhdGluZyBpbiB5b3VyIGJyb3dzZXIuIFByZXNzIEVzYyB0byBnb1xuICAgICAgICAgICAgYmFjay5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgaWYgKGlzQ2xhdWRlQUlBdXRoZW50aWNhdGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9ezF9IHBhZGRpbmc9ezF9PlxuICAgICAgICA8VGV4dCBjb2xvcj1cImNsYXVkZVwiPkF1dGhlbnRpY2F0aW5nIHdpdGgge3NlcnZlci5uYW1lfeKApjwvVGV4dD5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICAgIDxUZXh0PiBBIGJyb3dzZXIgd2luZG93IHdpbGwgb3BlbiBmb3IgYXV0aGVudGljYXRpb248L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICB7Y2xhdWRlQUlBdXRoVXJsICYmIChcbiAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICAgIElmIHlvdXIgYnJvd3NlciBkb2VzbiZhcG9zO3Qgb3BlbiBhdXRvbWF0aWNhbGx5LCBjb3B5IHRoaXMgVVJMXG4gICAgICAgICAgICAgICAgbWFudWFsbHl7JyAnfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIHt1cmxDb3BpZWQgPyAoXG4gICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJzdWNjZXNzXCI+KENvcGllZCEpPC9UZXh0PlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICAgICAgPEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwiY1wiIGFjdGlvbj1cImNvcHlcIiBwYXJlbnMgLz5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxMaW5rIHVybD17Y2xhdWRlQUlBdXRoVXJsfSAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgICA8Qm94IG1hcmdpbkxlZnQ9ezN9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICA8VGV4dCBjb2xvcj1cInBlcm1pc3Npb25cIj5cbiAgICAgICAgICAgIFByZXNzIDxUZXh0IGJvbGQ+RW50ZXI8L1RleHQ+IGFmdGVyIGF1dGhlbnRpY2F0aW5nIGluIHlvdXIgYnJvd3Nlci5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3IgaXRhbGljPlxuICAgICAgICAgICAgPENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludFxuICAgICAgICAgICAgICBhY3Rpb249XCJjb25maXJtOm5vXCJcbiAgICAgICAgICAgICAgY29udGV4dD1cIkNvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICAgIGZhbGxiYWNrPVwiRXNjXCJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJiYWNrXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxuXG4gIGlmIChpc0NsYXVkZUFJQ2xlYXJpbmdBdXRoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGdhcD17MX0gcGFkZGluZz17MX0+XG4gICAgICAgIDxUZXh0IGNvbG9yPVwiY2xhdWRlXCI+Q2xlYXIgYXV0aGVudGljYXRpb24gZm9yIHtzZXJ2ZXIubmFtZX08L1RleHQ+XG4gICAgICAgIHtjbGF1ZGVBSUNsZWFyQXV0aEJyb3dzZXJPcGVuZWQgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICBGaW5kIHRoZSBNQ1Agc2VydmVyIGluIHRoZSBicm93c2VyIGFuZCBjbGlja1xuICAgICAgICAgICAgICAmcXVvdDtEaXNjb25uZWN0JnF1b3Q7LlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAge2NsYXVkZUFJQ2xlYXJBdXRoVXJsICYmIChcbiAgICAgICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICAgICAgICBJZiB5b3VyIGJyb3dzZXIgZGlkbiZhcG9zO3Qgb3BlbiBhdXRvbWF0aWNhbGx5LCBjb3B5IHRoaXNcbiAgICAgICAgICAgICAgICAgICAgVVJMIG1hbnVhbGx5eycgJ31cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIHt1cmxDb3BpZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwic3VjY2Vzc1wiPihDb3BpZWQhKTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICAgICAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cImNcIiBhY3Rpb249XCJjb3B5XCIgcGFyZW5zIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPExpbmsgdXJsPXtjbGF1ZGVBSUNsZWFyQXV0aFVybH0gLz5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPEJveCBtYXJnaW5MZWZ0PXszfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwicGVybWlzc2lvblwiPlxuICAgICAgICAgICAgICAgIFByZXNzIDxUZXh0IGJvbGQ+RW50ZXI8L1RleHQ+IHdoZW4gZG9uZS5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvciBpdGFsaWM+XG4gICAgICAgICAgICAgICAgPENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludFxuICAgICAgICAgICAgICAgICAgYWN0aW9uPVwiY29uZmlybTpub1wiXG4gICAgICAgICAgICAgICAgICBjb250ZXh0PVwiQ29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgICAgIGZhbGxiYWNrPVwiRXNjXCJcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiYmFja1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICBUaGlzIHdpbGwgb3BlbiBjbGF1ZGUuYWkgaW4gdGhlIGJyb3dzZXIuIEZpbmQgdGhlIE1DUCBzZXJ2ZXIgaW5cbiAgICAgICAgICAgICAgdGhlIGxpc3QgYW5kIGNsaWNrICZxdW90O0Rpc2Nvbm5lY3QmcXVvdDsuXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8Qm94IG1hcmdpbkxlZnQ9ezN9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJwZXJtaXNzaW9uXCI+XG4gICAgICAgICAgICAgICAgUHJlc3MgPFRleHQgYm9sZD5FbnRlcjwvVGV4dD4gdG8gb3BlbiB0aGUgYnJvd3Nlci5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvciBpdGFsaWM+XG4gICAgICAgICAgICAgICAgPENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludFxuICAgICAgICAgICAgICAgICAgYWN0aW9uPVwiY29uZmlybTpub1wiXG4gICAgICAgICAgICAgICAgICBjb250ZXh0PVwiQ29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgICAgIGZhbGxiYWNrPVwiRXNjXCJcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiYmFja1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICBpZiAoaXNSZWNvbm5lY3RpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXsxfSBwYWRkaW5nPXsxfT5cbiAgICAgICAgPFRleHQgY29sb3I9XCJ0ZXh0XCI+XG4gICAgICAgICAgQ29ubmVjdGluZyB0byA8VGV4dCBib2xkPntzZXJ2ZXIubmFtZX08L1RleHQ+4oCmXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICAgIDxUZXh0PiBFc3RhYmxpc2hpbmcgY29ubmVjdGlvbiB0byBNQ1Agc2VydmVyPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPFRleHQgZGltQ29sb3I+VGhpcyBtYXkgdGFrZSBhIGZldyBtb21lbnRzLjwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxuXG4gIGNvbnN0IG1lbnVPcHRpb25zID0gW11cblxuICAvLyBJZiBzZXJ2ZXIgaXMgZGlzYWJsZWQsIHNob3cgRW5hYmxlIGZpcnN0IGFzIHRoZSBwcmltYXJ5IGFjdGlvblxuICBpZiAoc2VydmVyLmNsaWVudC50eXBlID09PSAnZGlzYWJsZWQnKSB7XG4gICAgbWVudU9wdGlvbnMucHVzaCh7XG4gICAgICBsYWJlbDogJ0VuYWJsZScsXG4gICAgICB2YWx1ZTogJ3RvZ2dsZS1lbmFibGVkJyxcbiAgICB9KVxuICB9XG5cbiAgaWYgKHNlcnZlci5jbGllbnQudHlwZSA9PT0gJ2Nvbm5lY3RlZCcgJiYgc2VydmVyVG9vbHNDb3VudCA+IDApIHtcbiAgICBtZW51T3B0aW9ucy5wdXNoKHtcbiAgICAgIGxhYmVsOiAnVmlldyB0b29scycsXG4gICAgICB2YWx1ZTogJ3Rvb2xzJyxcbiAgICB9KVxuICB9XG5cbiAgaWYgKHNlcnZlci5jb25maWcudHlwZSA9PT0gJ2NsYXVkZWFpLXByb3h5Jykge1xuICAgIGlmIChzZXJ2ZXIuY2xpZW50LnR5cGUgPT09ICdjb25uZWN0ZWQnKSB7XG4gICAgICBtZW51T3B0aW9ucy5wdXNoKHtcbiAgICAgICAgbGFiZWw6ICdDbGVhciBhdXRoZW50aWNhdGlvbicsXG4gICAgICAgIHZhbHVlOiAnY2xhdWRlYWktY2xlYXItYXV0aCcsXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAoc2VydmVyLmNsaWVudC50eXBlICE9PSAnZGlzYWJsZWQnKSB7XG4gICAgICBtZW51T3B0aW9ucy5wdXNoKHtcbiAgICAgICAgbGFiZWw6ICdBdXRoZW50aWNhdGUnLFxuICAgICAgICB2YWx1ZTogJ2NsYXVkZWFpLWF1dGgnLFxuICAgICAgfSlcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGlzRWZmZWN0aXZlbHlBdXRoZW50aWNhdGVkKSB7XG4gICAgICBtZW51T3B0aW9ucy5wdXNoKHtcbiAgICAgICAgbGFiZWw6ICdSZS1hdXRoZW50aWNhdGUnLFxuICAgICAgICB2YWx1ZTogJ3JlYXV0aCcsXG4gICAgICB9KVxuICAgICAgbWVudU9wdGlvbnMucHVzaCh7XG4gICAgICAgIGxhYmVsOiAnQ2xlYXIgYXV0aGVudGljYXRpb24nLFxuICAgICAgICB2YWx1ZTogJ2NsZWFyLWF1dGgnLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoIWlzRWZmZWN0aXZlbHlBdXRoZW50aWNhdGVkKSB7XG4gICAgICBtZW51T3B0aW9ucy5wdXNoKHtcbiAgICAgICAgbGFiZWw6ICdBdXRoZW50aWNhdGUnLFxuICAgICAgICB2YWx1ZTogJ2F1dGgnLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBpZiAoc2VydmVyLmNsaWVudC50eXBlICE9PSAnZGlzYWJsZWQnKSB7XG4gICAgaWYgKHNlcnZlci5jbGllbnQudHlwZSAhPT0gJ25lZWRzLWF1dGgnKSB7XG4gICAgICBtZW51T3B0aW9ucy5wdXNoKHtcbiAgICAgICAgbGFiZWw6ICdSZWNvbm5lY3QnLFxuICAgICAgICB2YWx1ZTogJ3JlY29ubmVjdE1jcFNlcnZlcicsXG4gICAgICB9KVxuICAgIH1cbiAgICBtZW51T3B0aW9ucy5wdXNoKHtcbiAgICAgIGxhYmVsOiAnRGlzYWJsZScsXG4gICAgICB2YWx1ZTogJ3RvZ2dsZS1lbmFibGVkJyxcbiAgICB9KVxuICB9XG5cbiAgLy8gSWYgdGhlcmUgYXJlIG5vIG90aGVyIG9wdGlvbnMsIGFkZCBhIGJhY2sgb3B0aW9uIHNvIFNlbGVjdCBoYW5kbGVzIGVzY2FwZVxuICBpZiAobWVudU9wdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgbWVudU9wdGlvbnMucHVzaCh7XG4gICAgICBsYWJlbDogJ0JhY2snLFxuICAgICAgdmFsdWU6ICdiYWNrJyxcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgIDxCb3hcbiAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgIHBhZGRpbmdYPXsxfVxuICAgICAgICBib3JkZXJTdHlsZT17Ym9yZGVybGVzcyA/IHVuZGVmaW5lZCA6ICdyb3VuZCd9XG4gICAgICA+XG4gICAgICAgIDxCb3ggbWFyZ2luQm90dG9tPXsxfT5cbiAgICAgICAgICA8VGV4dCBib2xkPntjYXBpdGFsaXplZFNlcnZlck5hbWV9IE1DUCBTZXJ2ZXI8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGdhcD17MH0+XG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxUZXh0IGJvbGQ+U3RhdHVzOiA8L1RleHQ+XG4gICAgICAgICAgICB7c2VydmVyLmNsaWVudC50eXBlID09PSAnZGlzYWJsZWQnID8gKFxuICAgICAgICAgICAgICA8VGV4dD57Y29sb3IoJ2luYWN0aXZlJywgdGhlbWUpKGZpZ3VyZXMucmFkaW9PZmYpfSBkaXNhYmxlZDwvVGV4dD5cbiAgICAgICAgICAgICkgOiBzZXJ2ZXIuY2xpZW50LnR5cGUgPT09ICdjb25uZWN0ZWQnID8gKFxuICAgICAgICAgICAgICA8VGV4dD57Y29sb3IoJ3N1Y2Nlc3MnLCB0aGVtZSkoZmlndXJlcy50aWNrKX0gY29ubmVjdGVkPC9UZXh0PlxuICAgICAgICAgICAgKSA6IHNlcnZlci5jbGllbnQudHlwZSA9PT0gJ3BlbmRpbmcnID8gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPntmaWd1cmVzLnJhZGlvT2ZmfTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VGV4dD4gY29ubmVjdGluZ+KApjwvVGV4dD5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIDogc2VydmVyLmNsaWVudC50eXBlID09PSAnbmVlZHMtYXV0aCcgPyAoXG4gICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgIHtjb2xvcignd2FybmluZycsIHRoZW1lKShmaWd1cmVzLnRyaWFuZ2xlVXBPdXRsaW5lKX0gbmVlZHNcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8VGV4dD57Y29sb3IoJ2Vycm9yJywgdGhlbWUpKGZpZ3VyZXMuY3Jvc3MpfSBmYWlsZWQ8L1RleHQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAge3NlcnZlci50cmFuc3BvcnQgIT09ICdjbGF1ZGVhaS1wcm94eScgJiYgKFxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPFRleHQgYm9sZD5BdXRoOiA8L1RleHQ+XG4gICAgICAgICAgICAgIHtpc0VmZmVjdGl2ZWx5QXV0aGVudGljYXRlZCA/IChcbiAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgIHtjb2xvcignc3VjY2VzcycsIHRoZW1lKShmaWd1cmVzLnRpY2spfSBhdXRoZW50aWNhdGVkXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAge2NvbG9yKCdlcnJvcicsIHRoZW1lKShmaWd1cmVzLmNyb3NzKX0gbm90IGF1dGhlbnRpY2F0ZWRcbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxUZXh0IGJvbGQ+VVJMOiA8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj57c2VydmVyLmNvbmZpZy51cmx9PC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxUZXh0IGJvbGQ+Q29uZmlnIGxvY2F0aW9uOiA8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj57ZGVzY3JpYmVNY3BDb25maWdGaWxlUGF0aChzZXJ2ZXIuc2NvcGUpfTwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgIHtzZXJ2ZXIuY2xpZW50LnR5cGUgPT09ICdjb25uZWN0ZWQnICYmIChcbiAgICAgICAgICAgIDxDYXBhYmlsaXRpZXNTZWN0aW9uXG4gICAgICAgICAgICAgIHNlcnZlclRvb2xzQ291bnQ9e3NlcnZlclRvb2xzQ291bnR9XG4gICAgICAgICAgICAgIHNlcnZlclByb21wdHNDb3VudD17c2VydmVyQ29tbWFuZHNDb3VudH1cbiAgICAgICAgICAgICAgc2VydmVyUmVzb3VyY2VzQ291bnQ9e21jcC5yZXNvdXJjZXNbc2VydmVyLm5hbWVdPy5sZW5ndGggfHwgMH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHtzZXJ2ZXIuY2xpZW50LnR5cGUgPT09ICdjb25uZWN0ZWQnICYmIHNlcnZlclRvb2xzQ291bnQgPiAwICYmIChcbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxUZXh0IGJvbGQ+VG9vbHM6IDwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+e3NlcnZlclRvb2xzQ291bnR9IHRvb2xzPC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAge2Vycm9yICYmIChcbiAgICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgICA8VGV4dCBjb2xvcj1cImVycm9yXCI+RXJyb3I6IHtlcnJvcn08L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG5cbiAgICAgICAge21lbnVPcHRpb25zLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgb3B0aW9ucz17bWVudU9wdGlvbnN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXthc3luYyB2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSAndG9vbHMnOlxuICAgICAgICAgICAgICAgICAgICBvblZpZXdUb29scygpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICBjYXNlICdhdXRoJzpcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlYXV0aCc6XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGhhbmRsZUF1dGhlbnRpY2F0ZSgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICBjYXNlICdjbGVhci1hdXRoJzpcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgaGFuZGxlQ2xlYXJBdXRoKClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ2NsYXVkZWFpLWF1dGgnOlxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBoYW5kbGVDbGF1ZGVBSUF1dGgoKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgY2FzZSAnY2xhdWRlYWktY2xlYXItYXV0aCc6XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUNsYXVkZUFJQ2xlYXJBdXRoKClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlY29ubmVjdE1jcFNlcnZlcic6XG4gICAgICAgICAgICAgICAgICAgIHNldElzUmVjb25uZWN0aW5nKHRydWUpXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVjb25uZWN0TWNwU2VydmVyKHNlcnZlci5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgIGlmIChzZXJ2ZXIuY29uZmlnLnR5cGUgPT09ICdjbGF1ZGVhaS1wcm94eScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9jbGF1ZGVhaV9tY3BfcmVjb25uZWN0Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXN1bHQuY2xpZW50LnR5cGUgPT09ICdjb25uZWN0ZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBtZXNzYWdlIH0gPSBoYW5kbGVSZWNvbm5lY3RSZXN1bHQoXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2ZXIubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZT8uKG1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChzZXJ2ZXIuY29uZmlnLnR5cGUgPT09ICdjbGF1ZGVhaS1wcm94eScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9jbGF1ZGVhaV9tY3BfcmVjb25uZWN0Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGU/LihoYW5kbGVSZWNvbm5lY3RFcnJvcihlcnIsIHNlcnZlci5uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRJc1JlY29ubmVjdGluZyhmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgY2FzZSAndG9nZ2xlLWVuYWJsZWQnOlxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBoYW5kbGVUb2dnbGVFbmFibGVkKClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ2JhY2snOlxuICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbCgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvbkNhbmNlbD17b25DYW5jZWx9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgPFRleHQgZGltQ29sb3IgaXRhbGljPlxuICAgICAgICAgIHtleGl0U3RhdGUucGVuZGluZyA/IChcbiAgICAgICAgICAgIDw+UHJlc3Mge2V4aXRTdGF0ZS5rZXlOYW1lfSBhZ2FpbiB0byBleGl0PC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cIuKGkeKGk1wiIGFjdGlvbj1cIm5hdmlnYXRlXCIgLz5cbiAgICAgICAgICAgICAgPEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwiRW50ZXJcIiBhY3Rpb249XCJzZWxlY3RcIiAvPlxuICAgICAgICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgICAgICAgYWN0aW9uPVwiY29uZmlybTpub1wiXG4gICAgICAgICAgICAgICAgY29udGV4dD1cIkNvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICAgICAgZmFsbGJhY2s9XCJFc2NcIlxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiYmFja1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0J5bGluZT5cbiAgICAgICAgICApfVxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKVxufVxuIiwgImltcG9ydCBmaWd1cmVzIGZyb20gJ2ZpZ3VyZXMnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgQ29tbWFuZFJlc3VsdERpc3BsYXkgfSBmcm9tICcuLi8uLi9jb21tYW5kcy5qcydcbmltcG9ydCB7IHVzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncyB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncy5qcydcbmltcG9ydCB7IEJveCwgY29sb3IsIFRleHQsIHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgZ2V0TWNwQ29uZmlnQnlOYW1lIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWNwL2NvbmZpZy5qcydcbmltcG9ydCB7XG4gIHVzZU1jcFJlY29ubmVjdCxcbiAgdXNlTWNwVG9nZ2xlRW5hYmxlZCxcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWNwL01DUENvbm5lY3Rpb25NYW5hZ2VyLmpzJ1xuaW1wb3J0IHtcbiAgZGVzY3JpYmVNY3BDb25maWdGaWxlUGF0aCxcbiAgZmlsdGVyTWNwUHJvbXB0c0J5U2VydmVyLFxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tY3AvdXRpbHMuanMnXG5pbXBvcnQgeyB1c2VBcHBTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlL0FwcFN0YXRlLmpzJ1xuaW1wb3J0IHsgZXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXJyb3JzLmpzJ1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3N0cmluZ1V0aWxzLmpzJ1xuaW1wb3J0IHsgQ29uZmlndXJhYmxlU2hvcnRjdXRIaW50IH0gZnJvbSAnLi4vQ29uZmlndXJhYmxlU2hvcnRjdXRIaW50LmpzJ1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnLi4vQ3VzdG9tU2VsZWN0L2luZGV4LmpzJ1xuaW1wb3J0IHsgQnlsaW5lIH0gZnJvbSAnLi4vZGVzaWduLXN5c3RlbS9CeWxpbmUuanMnXG5pbXBvcnQgeyBLZXlib2FyZFNob3J0Y3V0SGludCB9IGZyb20gJy4uL2Rlc2lnbi1zeXN0ZW0vS2V5Ym9hcmRTaG9ydGN1dEhpbnQuanMnXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnLi4vU3Bpbm5lci5qcydcbmltcG9ydCB7IENhcGFiaWxpdGllc1NlY3Rpb24gfSBmcm9tICcuL0NhcGFiaWxpdGllc1NlY3Rpb24uanMnXG5pbXBvcnQgdHlwZSB7IFN0ZGlvU2VydmVySW5mbyB9IGZyb20gJy4vdHlwZXMuanMnXG5pbXBvcnQge1xuICBoYW5kbGVSZWNvbm5lY3RFcnJvcixcbiAgaGFuZGxlUmVjb25uZWN0UmVzdWx0LFxufSBmcm9tICcuL3V0aWxzL3JlY29ubmVjdEhlbHBlcnMuanMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIHNlcnZlcjogU3RkaW9TZXJ2ZXJJbmZvXG4gIHNlcnZlclRvb2xzQ291bnQ6IG51bWJlclxuICBvblZpZXdUb29sczogKCkgPT4gdm9pZFxuICBvbkNhbmNlbDogKCkgPT4gdm9pZFxuICBvbkNvbXBsZXRlOiAoXG4gICAgcmVzdWx0Pzogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7IGRpc3BsYXk/OiBDb21tYW5kUmVzdWx0RGlzcGxheSB9LFxuICApID0+IHZvaWRcbiAgYm9yZGVybGVzcz86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1DUFN0ZGlvU2VydmVyTWVudSh7XG4gIHNlcnZlcixcbiAgc2VydmVyVG9vbHNDb3VudCxcbiAgb25WaWV3VG9vbHMsXG4gIG9uQ2FuY2VsLFxuICBvbkNvbXBsZXRlLFxuICBib3JkZXJsZXNzID0gZmFsc2UsXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IFt0aGVtZV0gPSB1c2VUaGVtZSgpXG4gIGNvbnN0IGV4aXRTdGF0ZSA9IHVzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncygpXG4gIGNvbnN0IG1jcCA9IHVzZUFwcFN0YXRlKHMgPT4gcy5tY3ApXG4gIGNvbnN0IHJlY29ubmVjdE1jcFNlcnZlciA9IHVzZU1jcFJlY29ubmVjdCgpXG4gIGNvbnN0IHRvZ2dsZU1jcFNlcnZlciA9IHVzZU1jcFRvZ2dsZUVuYWJsZWQoKVxuICBjb25zdCBbaXNSZWNvbm5lY3RpbmcsIHNldElzUmVjb25uZWN0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZUVuYWJsZWQgPSBSZWFjdC51c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgd2FzRW5hYmxlZCA9IHNlcnZlci5jbGllbnQudHlwZSAhPT0gJ2Rpc2FibGVkJ1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRvZ2dsZU1jcFNlcnZlcihzZXJ2ZXIubmFtZSlcbiAgICAgIC8vIFJldHVybiB0byB0aGUgc2VydmVyIGxpc3Qgc28gdXNlciBjYW4gY29udGludWUgbWFuYWdpbmcgb3RoZXIgc2VydmVyc1xuICAgICAgb25DYW5jZWwoKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc3QgYWN0aW9uID0gd2FzRW5hYmxlZCA/ICdkaXNhYmxlJyA6ICdlbmFibGUnXG4gICAgICBvbkNvbXBsZXRlKFxuICAgICAgICBgRmFpbGVkIHRvICR7YWN0aW9ufSBNQ1Agc2VydmVyICcke3NlcnZlci5uYW1lfSc6ICR7ZXJyb3JNZXNzYWdlKGVycil9YCxcbiAgICAgIClcbiAgICB9XG4gIH0sIFtzZXJ2ZXIuY2xpZW50LnR5cGUsIHNlcnZlci5uYW1lLCB0b2dnbGVNY3BTZXJ2ZXIsIG9uQ2FuY2VsLCBvbkNvbXBsZXRlXSlcblxuICBjb25zdCBjYXBpdGFsaXplZFNlcnZlck5hbWUgPSBjYXBpdGFsaXplKFN0cmluZyhzZXJ2ZXIubmFtZSkpXG5cbiAgLy8gQ291bnQgTUNQIHByb21wdHMgZm9yIHRoaXMgc2VydmVyIChza2lsbHMgYXJlIHNob3duIGluIC9za2lsbHMsIG5vdCBoZXJlKVxuICBjb25zdCBzZXJ2ZXJDb21tYW5kc0NvdW50ID0gZmlsdGVyTWNwUHJvbXB0c0J5U2VydmVyKFxuICAgIG1jcC5jb21tYW5kcyxcbiAgICBzZXJ2ZXIubmFtZSxcbiAgKS5sZW5ndGhcblxuICBjb25zdCBtZW51T3B0aW9ucyA9IFtdXG5cbiAgLy8gT25seSBzaG93IFwiVmlldyB0b29sc1wiIGlmIHNlcnZlciBpcyBub3QgZGlzYWJsZWQgYW5kIGhhcyB0b29sc1xuICBpZiAoc2VydmVyLmNsaWVudC50eXBlICE9PSAnZGlzYWJsZWQnICYmIHNlcnZlclRvb2xzQ291bnQgPiAwKSB7XG4gICAgbWVudU9wdGlvbnMucHVzaCh7XG4gICAgICBsYWJlbDogJ1ZpZXcgdG9vbHMnLFxuICAgICAgdmFsdWU6ICd0b29scycsXG4gICAgfSlcbiAgfVxuXG4gIC8vIE9ubHkgc2hvdyByZWNvbm5lY3Qgb3B0aW9uIGlmIHRoZSBzZXJ2ZXIgaXMgbm90IGRpc2FibGVkXG4gIGlmIChzZXJ2ZXIuY2xpZW50LnR5cGUgIT09ICdkaXNhYmxlZCcpIHtcbiAgICBtZW51T3B0aW9ucy5wdXNoKHtcbiAgICAgIGxhYmVsOiAnUmVjb25uZWN0JyxcbiAgICAgIHZhbHVlOiAncmVjb25uZWN0TWNwU2VydmVyJyxcbiAgICB9KVxuICB9XG5cbiAgbWVudU9wdGlvbnMucHVzaCh7XG4gICAgbGFiZWw6IHNlcnZlci5jbGllbnQudHlwZSAhPT0gJ2Rpc2FibGVkJyA/ICdEaXNhYmxlJyA6ICdFbmFibGUnLFxuICAgIHZhbHVlOiAndG9nZ2xlLWVuYWJsZWQnLFxuICB9KVxuXG4gIC8vIElmIHRoZXJlIGFyZSBubyBvdGhlciBvcHRpb25zLCBhZGQgYSBiYWNrIG9wdGlvbiBzbyBTZWxlY3QgaGFuZGxlcyBlc2NhcGVcbiAgaWYgKG1lbnVPcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgIG1lbnVPcHRpb25zLnB1c2goe1xuICAgICAgbGFiZWw6ICdCYWNrJyxcbiAgICAgIHZhbHVlOiAnYmFjaycsXG4gICAgfSlcbiAgfVxuXG4gIGlmIChpc1JlY29ubmVjdGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9ezF9IHBhZGRpbmc9ezF9PlxuICAgICAgICA8VGV4dCBjb2xvcj1cInRleHRcIj5cbiAgICAgICAgICBSZWNvbm5lY3RpbmcgdG8gPFRleHQgYm9sZD57c2VydmVyLm5hbWV9PC9UZXh0PlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgICA8VGV4dD4gUmVzdGFydGluZyBNQ1Agc2VydmVyIHByb2Nlc3M8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5UaGlzIG1heSB0YWtlIGEgZmV3IG1vbWVudHMuPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgIDxCb3hcbiAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgIHBhZGRpbmdYPXsxfVxuICAgICAgICBib3JkZXJTdHlsZT17Ym9yZGVybGVzcyA/IHVuZGVmaW5lZCA6ICdyb3VuZCd9XG4gICAgICA+XG4gICAgICAgIDxCb3ggbWFyZ2luQm90dG9tPXsxfT5cbiAgICAgICAgICA8VGV4dCBib2xkPntjYXBpdGFsaXplZFNlcnZlck5hbWV9IE1DUCBTZXJ2ZXI8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGdhcD17MH0+XG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxUZXh0IGJvbGQ+U3RhdHVzOiA8L1RleHQ+XG4gICAgICAgICAgICB7c2VydmVyLmNsaWVudC50eXBlID09PSAnZGlzYWJsZWQnID8gKFxuICAgICAgICAgICAgICA8VGV4dD57Y29sb3IoJ2luYWN0aXZlJywgdGhlbWUpKGZpZ3VyZXMucmFkaW9PZmYpfSBkaXNhYmxlZDwvVGV4dD5cbiAgICAgICAgICAgICkgOiBzZXJ2ZXIuY2xpZW50LnR5cGUgPT09ICdjb25uZWN0ZWQnID8gKFxuICAgICAgICAgICAgICA8VGV4dD57Y29sb3IoJ3N1Y2Nlc3MnLCB0aGVtZSkoZmlndXJlcy50aWNrKX0gY29ubmVjdGVkPC9UZXh0PlxuICAgICAgICAgICAgKSA6IHNlcnZlci5jbGllbnQudHlwZSA9PT0gJ3BlbmRpbmcnID8gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPntmaWd1cmVzLnJhZGlvT2ZmfTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VGV4dD4gY29ubmVjdGluZ+KApjwvVGV4dD5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8VGV4dD57Y29sb3IoJ2Vycm9yJywgdGhlbWUpKGZpZ3VyZXMuY3Jvc3MpfSBmYWlsZWQ8L1RleHQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxUZXh0IGJvbGQ+Q29tbWFuZDogPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+e3NlcnZlci5jb25maWcuY29tbWFuZH08L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICB7c2VydmVyLmNvbmZpZy5hcmdzICYmIHNlcnZlci5jb25maWcuYXJncy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxUZXh0IGJvbGQ+QXJnczogPC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj57c2VydmVyLmNvbmZpZy5hcmdzLmpvaW4oJyAnKX08L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxUZXh0IGJvbGQ+Q29uZmlnIGxvY2F0aW9uOiA8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAge2Rlc2NyaWJlTWNwQ29uZmlnRmlsZVBhdGgoXG4gICAgICAgICAgICAgICAgZ2V0TWNwQ29uZmlnQnlOYW1lKHNlcnZlci5uYW1lKT8uc2NvcGUgPz8gJ2R5bmFtaWMnLFxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAge3NlcnZlci5jbGllbnQudHlwZSA9PT0gJ2Nvbm5lY3RlZCcgJiYgKFxuICAgICAgICAgICAgPENhcGFiaWxpdGllc1NlY3Rpb25cbiAgICAgICAgICAgICAgc2VydmVyVG9vbHNDb3VudD17c2VydmVyVG9vbHNDb3VudH1cbiAgICAgICAgICAgICAgc2VydmVyUHJvbXB0c0NvdW50PXtzZXJ2ZXJDb21tYW5kc0NvdW50fVxuICAgICAgICAgICAgICBzZXJ2ZXJSZXNvdXJjZXNDb3VudD17bWNwLnJlc291cmNlc1tzZXJ2ZXIubmFtZV0/Lmxlbmd0aCB8fCAwfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge3NlcnZlci5jbGllbnQudHlwZSA9PT0gJ2Nvbm5lY3RlZCcgJiYgc2VydmVyVG9vbHNDb3VudCA+IDAgJiYgKFxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPFRleHQgYm9sZD5Ub29sczogPC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj57c2VydmVyVG9vbHNDb3VudH0gdG9vbHM8L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApfVxuICAgICAgICA8L0JveD5cblxuICAgICAgICB7bWVudU9wdGlvbnMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICBvcHRpb25zPXttZW51T3B0aW9uc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2FzeW5jIHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09ICd0b29scycpIHtcbiAgICAgICAgICAgICAgICAgIG9uVmlld1Rvb2xzKClcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAncmVjb25uZWN0TWNwU2VydmVyJykge1xuICAgICAgICAgICAgICAgICAgc2V0SXNSZWNvbm5lY3RpbmcodHJ1ZSlcbiAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlY29ubmVjdE1jcFNlcnZlcihzZXJ2ZXIubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBtZXNzYWdlIH0gPSBoYW5kbGVSZWNvbm5lY3RSZXN1bHQoXG4gICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgIHNlcnZlci5uYW1lLFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGU/LihtZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGU/LihoYW5kbGVSZWNvbm5lY3RFcnJvcihlcnIsIHNlcnZlci5uYW1lKSlcbiAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHNldElzUmVjb25uZWN0aW5nKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICd0b2dnbGUtZW5hYmxlZCcpIHtcbiAgICAgICAgICAgICAgICAgIGF3YWl0IGhhbmRsZVRvZ2dsZUVuYWJsZWQoKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdiYWNrJykge1xuICAgICAgICAgICAgICAgICAgb25DYW5jZWwoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25DYW5jZWw9e29uQ2FuY2VsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yIGl0YWxpYz5cbiAgICAgICAgICB7ZXhpdFN0YXRlLnBlbmRpbmcgPyAoXG4gICAgICAgICAgICA8PlByZXNzIHtleGl0U3RhdGUua2V5TmFtZX0gYWdhaW4gdG8gZXhpdDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8QnlsaW5lPlxuICAgICAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCLihpHihpNcIiBhY3Rpb249XCJuYXZpZ2F0ZVwiIC8+XG4gICAgICAgICAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cIkVudGVyXCIgYWN0aW9uPVwic2VsZWN0XCIgLz5cbiAgICAgICAgICAgICAgPENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludFxuICAgICAgICAgICAgICAgIGFjdGlvbj1cImNvbmZpcm06bm9cIlxuICAgICAgICAgICAgICAgIGNvbnRleHQ9XCJDb25maXJtYXRpb25cIlxuICAgICAgICAgICAgICAgIGZhbGxiYWNrPVwiRXNjXCJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cImJhY2tcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9CeWxpbmU+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gIClcbn1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQge1xuICBleHRyYWN0TWNwVG9vbERpc3BsYXlOYW1lLFxuICBnZXRNY3BEaXNwbGF5TmFtZSxcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWNwL21jcFN0cmluZ1V0aWxzLmpzJ1xuaW1wb3J0IHR5cGUgeyBUb29sIH0gZnJvbSAnLi4vLi4vVG9vbC5qcydcbmltcG9ydCB7IENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludCB9IGZyb20gJy4uL0NvbmZpZ3VyYWJsZVNob3J0Y3V0SGludC5qcydcbmltcG9ydCB7IERpYWxvZyB9IGZyb20gJy4uL2Rlc2lnbi1zeXN0ZW0vRGlhbG9nLmpzJ1xuaW1wb3J0IHR5cGUgeyBTZXJ2ZXJJbmZvIH0gZnJvbSAnLi90eXBlcy5qcydcblxudHlwZSBQcm9wcyA9IHtcbiAgdG9vbDogVG9vbFxuICBzZXJ2ZXI6IFNlcnZlckluZm9cbiAgb25CYWNrOiAoKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBNQ1BUb29sRGV0YWlsVmlldyh7XG4gIHRvb2wsXG4gIHNlcnZlcixcbiAgb25CYWNrLFxufTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBbdG9vbERlc2NyaXB0aW9uLCBzZXRUb29sRGVzY3JpcHRpb25dID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJylcblxuICBjb25zdCB0b29sTmFtZSA9IGdldE1jcERpc3BsYXlOYW1lKHRvb2wubmFtZSwgc2VydmVyLm5hbWUpXG4gIGNvbnN0IGZ1bGxEaXNwbGF5TmFtZSA9IHRvb2wudXNlckZhY2luZ05hbWVcbiAgICA/IHRvb2wudXNlckZhY2luZ05hbWUoe30pXG4gICAgOiB0b29sTmFtZVxuICBjb25zdCBkaXNwbGF5TmFtZSA9IGV4dHJhY3RNY3BUb29sRGlzcGxheU5hbWUoZnVsbERpc3BsYXlOYW1lKVxuXG4gIGNvbnN0IGlzUmVhZE9ubHkgPSB0b29sLmlzUmVhZE9ubHk/Lih7fSkgPz8gZmFsc2VcbiAgY29uc3QgaXNEZXN0cnVjdGl2ZSA9IHRvb2wuaXNEZXN0cnVjdGl2ZT8uKHt9KSA/PyBmYWxzZVxuICBjb25zdCBpc09wZW5Xb3JsZCA9IHRvb2wuaXNPcGVuV29ybGQ/Lih7fSkgPz8gZmFsc2VcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWREZXNjcmlwdGlvbigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBhd2FpdCB0b29sLmRlc2NyaXB0aW9uKFxuICAgICAgICAgIHt9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlzTm9uSW50ZXJhY3RpdmVTZXNzaW9uOiBmYWxzZSxcbiAgICAgICAgICAgIHRvb2xQZXJtaXNzaW9uQ29udGV4dDoge1xuICAgICAgICAgICAgICBtb2RlOiAnZGVmYXVsdCcgYXMgY29uc3QsXG4gICAgICAgICAgICAgIGFkZGl0aW9uYWxXb3JraW5nRGlyZWN0b3JpZXM6IG5ldyBNYXAoKSxcbiAgICAgICAgICAgICAgYWx3YXlzQWxsb3dSdWxlczoge30sXG4gICAgICAgICAgICAgIGFsd2F5c0RlbnlSdWxlczoge30sXG4gICAgICAgICAgICAgIGFsd2F5c0Fza1J1bGVzOiB7fSxcbiAgICAgICAgICAgICAgaXNCeXBhc3NQZXJtaXNzaW9uc01vZGVBdmFpbGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2xzOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICApXG4gICAgICAgIHNldFRvb2xEZXNjcmlwdGlvbihkZXNjKVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHNldFRvb2xEZXNjcmlwdGlvbignRmFpbGVkIHRvIGxvYWQgZGVzY3JpcHRpb24nKVxuICAgICAgfVxuICAgIH1cbiAgICB2b2lkIGxvYWREZXNjcmlwdGlvbigpXG4gIH0sIFt0b29sXSlcblxuICBjb25zdCB0aXRsZUNvbnRlbnQgPSAoXG4gICAgPD5cbiAgICAgIHtkaXNwbGF5TmFtZX1cbiAgICAgIHtpc1JlYWRPbmx5ICYmIDxUZXh0IGNvbG9yPVwic3VjY2Vzc1wiPiBbcmVhZC1vbmx5XTwvVGV4dD59XG4gICAgICB7aXNEZXN0cnVjdGl2ZSAmJiA8VGV4dCBjb2xvcj1cImVycm9yXCI+IFtkZXN0cnVjdGl2ZV08L1RleHQ+fVxuICAgICAge2lzT3BlbldvcmxkICYmIDxUZXh0IGRpbUNvbG9yPiBbb3Blbi13b3JsZF08L1RleHQ+fVxuICAgIDwvPlxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nXG4gICAgICB0aXRsZT17dGl0bGVDb250ZW50fVxuICAgICAgc3VidGl0bGU9e3NlcnZlci5uYW1lfVxuICAgICAgb25DYW5jZWw9e29uQmFja31cbiAgICAgIGlucHV0R3VpZGU9e2V4aXRTdGF0ZSA9PlxuICAgICAgICBleGl0U3RhdGUucGVuZGluZyA/IChcbiAgICAgICAgICA8VGV4dD5QcmVzcyB7ZXhpdFN0YXRlLmtleU5hbWV9IGFnYWluIHRvIGV4aXQ8L1RleHQ+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludFxuICAgICAgICAgICAgYWN0aW9uPVwiY29uZmlybTpub1wiXG4gICAgICAgICAgICBjb250ZXh0PVwiQ29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgIGZhbGxiYWNrPVwiRXNjXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiZ28gYmFja1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfVxuICAgID5cbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxUZXh0IGJvbGQ+VG9vbCBuYW1lOiA8L1RleHQ+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+e3Rvb2xOYW1lfTwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8VGV4dCBib2xkPkZ1bGwgbmFtZTogPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPnt0b29sLm5hbWV9PC9UZXh0PlxuICAgICAgICA8L0JveD5cblxuICAgICAgICB7dG9vbERlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgICAgPFRleHQgYm9sZD5EZXNjcmlwdGlvbjo8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCB3cmFwPVwid3JhcFwiPnt0b29sRGVzY3JpcHRpb259PC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuXG4gICAgICAgIHt0b29sLmlucHV0SlNPTlNjaGVtYSAmJlxuICAgICAgICAgIHRvb2wuaW5wdXRKU09OU2NoZW1hLnByb3BlcnRpZXMgJiZcbiAgICAgICAgICBPYmplY3Qua2V5cyh0b29sLmlucHV0SlNPTlNjaGVtYS5wcm9wZXJ0aWVzKS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgICAgIDxUZXh0IGJvbGQ+UGFyYW1ldGVyczo8L1RleHQ+XG4gICAgICAgICAgICAgIDxCb3ggbWFyZ2luTGVmdD17Mn0gZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyh0b29sLmlucHV0SlNPTlNjaGVtYS5wcm9wZXJ0aWVzKS5tYXAoXG4gICAgICAgICAgICAgICAgICAoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVpcmVkID0gdG9vbC5pbnB1dEpTT05TY2hlbWE/LnJlcXVpcmVkIGFzXG4gICAgICAgICAgICAgICAgICAgICAgfCBzdHJpbmdbXVxuICAgICAgICAgICAgICAgICAgICAgIHwgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzUmVxdWlyZWQgPSByZXF1aXJlZD8uaW5jbHVkZXMoa2V5KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIOKAoiB7a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAge2lzUmVxdWlyZWQgJiYgPFRleHQgZGltQ29sb3I+IChyZXF1aXJlZCk8L1RleHQ+fTp7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmICd0eXBlJyBpbiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gU3RyaW5nKHZhbHVlLnR5cGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAndW5rbm93bid9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nIGluIHZhbHVlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj4gLSB7U3RyaW5nKHZhbHVlLmRlc2NyaXB0aW9uKX08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIDwvRGlhbG9nPlxuICApXG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7XG4gIGV4dHJhY3RNY3BUb29sRGlzcGxheU5hbWUsXG4gIGdldE1jcERpc3BsYXlOYW1lLFxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tY3AvbWNwU3RyaW5nVXRpbHMuanMnXG5pbXBvcnQgeyBmaWx0ZXJUb29sc0J5U2VydmVyIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWNwL3V0aWxzLmpzJ1xuaW1wb3J0IHsgdXNlQXBwU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9BcHBTdGF0ZS5qcydcbmltcG9ydCB0eXBlIHsgVG9vbCB9IGZyb20gJy4uLy4uL1Rvb2wuanMnXG5pbXBvcnQgeyBwbHVyYWwgfSBmcm9tICcuLi8uLi91dGlscy9zdHJpbmdVdGlscy5qcydcbmltcG9ydCB7IENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludCB9IGZyb20gJy4uL0NvbmZpZ3VyYWJsZVNob3J0Y3V0SGludC5qcydcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJy4uL0N1c3RvbVNlbGVjdC9pbmRleC5qcydcbmltcG9ydCB7IEJ5bGluZSB9IGZyb20gJy4uL2Rlc2lnbi1zeXN0ZW0vQnlsaW5lLmpzJ1xuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi4vZGVzaWduLXN5c3RlbS9EaWFsb2cuanMnXG5pbXBvcnQgeyBLZXlib2FyZFNob3J0Y3V0SGludCB9IGZyb20gJy4uL2Rlc2lnbi1zeXN0ZW0vS2V5Ym9hcmRTaG9ydGN1dEhpbnQuanMnXG5pbXBvcnQgdHlwZSB7IFNlcnZlckluZm8gfSBmcm9tICcuL3R5cGVzLmpzJ1xuXG50eXBlIFByb3BzID0ge1xuICBzZXJ2ZXI6IFNlcnZlckluZm9cbiAgb25TZWxlY3RUb29sOiAodG9vbDogVG9vbCwgaW5kZXg6IG51bWJlcikgPT4gdm9pZFxuICBvbkJhY2s6ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1DUFRvb2xMaXN0Vmlldyh7XG4gIHNlcnZlcixcbiAgb25TZWxlY3RUb29sLFxuICBvbkJhY2ssXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IG1jcFRvb2xzID0gdXNlQXBwU3RhdGUocyA9PiBzLm1jcC50b29scylcblxuICBjb25zdCBzZXJ2ZXJUb29scyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChzZXJ2ZXIuY2xpZW50LnR5cGUgIT09ICdjb25uZWN0ZWQnKSByZXR1cm4gW11cbiAgICByZXR1cm4gZmlsdGVyVG9vbHNCeVNlcnZlcihtY3BUb29scywgc2VydmVyLm5hbWUpXG4gIH0sIFtzZXJ2ZXIsIG1jcFRvb2xzXSlcblxuICBjb25zdCB0b29sT3B0aW9ucyA9IHNlcnZlclRvb2xzLm1hcCgodG9vbCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCB0b29sTmFtZSA9IGdldE1jcERpc3BsYXlOYW1lKHRvb2wubmFtZSwgc2VydmVyLm5hbWUpXG4gICAgY29uc3QgZnVsbERpc3BsYXlOYW1lID0gdG9vbC51c2VyRmFjaW5nTmFtZVxuICAgICAgPyB0b29sLnVzZXJGYWNpbmdOYW1lKHt9KVxuICAgICAgOiB0b29sTmFtZVxuICAgIC8vIEV4dHJhY3QganVzdCB0aGUgdG9vbCBkaXNwbGF5IG5hbWUgd2l0aG91dCBzZXJ2ZXIgcHJlZml4XG4gICAgY29uc3QgZGlzcGxheU5hbWUgPSBleHRyYWN0TWNwVG9vbERpc3BsYXlOYW1lKGZ1bGxEaXNwbGF5TmFtZSlcblxuICAgIGNvbnN0IGlzUmVhZE9ubHkgPSB0b29sLmlzUmVhZE9ubHk/Lih7fSkgPz8gZmFsc2VcbiAgICBjb25zdCBpc0Rlc3RydWN0aXZlID0gdG9vbC5pc0Rlc3RydWN0aXZlPy4oe30pID8/IGZhbHNlXG4gICAgY29uc3QgaXNPcGVuV29ybGQgPSB0b29sLmlzT3BlbldvcmxkPy4oe30pID8/IGZhbHNlXG5cbiAgICBjb25zdCBhbm5vdGF0aW9ucyA9IFtdXG4gICAgaWYgKGlzUmVhZE9ubHkpIGFubm90YXRpb25zLnB1c2goJ3JlYWQtb25seScpXG4gICAgaWYgKGlzRGVzdHJ1Y3RpdmUpIGFubm90YXRpb25zLnB1c2goJ2Rlc3RydWN0aXZlJylcbiAgICBpZiAoaXNPcGVuV29ybGQpIGFubm90YXRpb25zLnB1c2goJ29wZW4td29ybGQnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGxhYmVsOiBkaXNwbGF5TmFtZSxcbiAgICAgIHZhbHVlOiBpbmRleC50b1N0cmluZygpLFxuICAgICAgZGVzY3JpcHRpb246IGFubm90YXRpb25zLmxlbmd0aCA+IDAgPyBhbm5vdGF0aW9ucy5qb2luKCcsICcpIDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb25Db2xvcjogaXNEZXN0cnVjdGl2ZVxuICAgICAgICA/ICdlcnJvcidcbiAgICAgICAgOiBpc1JlYWRPbmx5XG4gICAgICAgICAgPyAnc3VjY2VzcydcbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nXG4gICAgICB0aXRsZT17YFRvb2xzIGZvciAke3NlcnZlci5uYW1lfWB9XG4gICAgICBzdWJ0aXRsZT17YCR7c2VydmVyVG9vbHMubGVuZ3RofSAke3BsdXJhbChzZXJ2ZXJUb29scy5sZW5ndGgsICd0b29sJyl9YH1cbiAgICAgIG9uQ2FuY2VsPXtvbkJhY2t9XG4gICAgICBpbnB1dEd1aWRlPXtleGl0U3RhdGUgPT5cbiAgICAgICAgZXhpdFN0YXRlLnBlbmRpbmcgPyAoXG4gICAgICAgICAgPFRleHQ+UHJlc3Mge2V4aXRTdGF0ZS5rZXlOYW1lfSBhZ2FpbiB0byBleGl0PC9UZXh0PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCLihpHihpNcIiBhY3Rpb249XCJuYXZpZ2F0ZVwiIC8+XG4gICAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCJFbnRlclwiIGFjdGlvbj1cInNlbGVjdFwiIC8+XG4gICAgICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgICAgIGFjdGlvbj1cImNvbmZpcm06bm9cIlxuICAgICAgICAgICAgICBjb250ZXh0PVwiQ29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgZmFsbGJhY2s9XCJFc2NcIlxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cImJhY2tcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0J5bGluZT5cbiAgICAgICAgKVxuICAgICAgfVxuICAgID5cbiAgICAgIHtzZXJ2ZXJUb29scy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPk5vIHRvb2xzIGF2YWlsYWJsZTwvVGV4dD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBvcHRpb25zPXt0b29sT3B0aW9uc31cbiAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludCh2YWx1ZSlcbiAgICAgICAgICAgIGNvbnN0IHRvb2wgPSBzZXJ2ZXJUb29sc1tpbmRleF1cbiAgICAgICAgICAgIGlmICh0b29sKSB7XG4gICAgICAgICAgICAgIG9uU2VsZWN0VG9vbCh0b29sLCBpbmRleClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ2FuY2VsPXtvbkJhY2t9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvRGlhbG9nPlxuICApXG59XG4iLCAiaW1wb3J0IHsgZ2V0UGx1Z2luRXJyb3JNZXNzYWdlLCB0eXBlIFBsdWdpbkVycm9yIH0gZnJvbSAnLi4vLi4vdHlwZXMvcGx1Z2luLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RXJyb3JNZXNzYWdlKGVycm9yOiBQbHVnaW5FcnJvcik6IHN0cmluZyB7XG4gIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgIGNhc2UgJ3BhdGgtbm90LWZvdW5kJzpcbiAgICAgIHJldHVybiBgJHtlcnJvci5jb21wb25lbnR9IHBhdGggbm90IGZvdW5kOiAke2Vycm9yLnBhdGh9YFxuICAgIGNhc2UgJ2dpdC1hdXRoLWZhaWxlZCc6XG4gICAgICByZXR1cm4gYEdpdCAke2Vycm9yLmF1dGhUeXBlLnRvVXBwZXJDYXNlKCl9IGF1dGhlbnRpY2F0aW9uIGZhaWxlZCBmb3IgJHtlcnJvci5naXRVcmx9YFxuICAgIGNhc2UgJ2dpdC10aW1lb3V0JzpcbiAgICAgIHJldHVybiBgR2l0ICR7ZXJyb3Iub3BlcmF0aW9ufSB0aW1lZCBvdXQgZm9yICR7ZXJyb3IuZ2l0VXJsfWBcbiAgICBjYXNlICduZXR3b3JrLWVycm9yJzpcbiAgICAgIHJldHVybiBgTmV0d29yayBlcnJvciBhY2Nlc3NpbmcgJHtlcnJvci51cmx9JHtlcnJvci5kZXRhaWxzID8gYDogJHtlcnJvci5kZXRhaWxzfWAgOiAnJ31gXG4gICAgY2FzZSAnbWFuaWZlc3QtcGFyc2UtZXJyb3InOlxuICAgICAgcmV0dXJuIGBGYWlsZWQgdG8gcGFyc2UgbWFuaWZlc3QgYXQgJHtlcnJvci5tYW5pZmVzdFBhdGh9OiAke2Vycm9yLnBhcnNlRXJyb3J9YFxuICAgIGNhc2UgJ21hbmlmZXN0LXZhbGlkYXRpb24tZXJyb3InOlxuICAgICAgcmV0dXJuIGBJbnZhbGlkIG1hbmlmZXN0IGF0ICR7ZXJyb3IubWFuaWZlc3RQYXRofTogJHtlcnJvci52YWxpZGF0aW9uRXJyb3JzLmpvaW4oJywgJyl9YFxuICAgIGNhc2UgJ3BsdWdpbi1ub3QtZm91bmQnOlxuICAgICAgcmV0dXJuIGBQbHVnaW4gXCIke2Vycm9yLnBsdWdpbklkfVwiIG5vdCBmb3VuZCBpbiBtYXJrZXRwbGFjZSBcIiR7ZXJyb3IubWFya2V0cGxhY2V9XCJgXG4gICAgY2FzZSAnbWFya2V0cGxhY2Utbm90LWZvdW5kJzpcbiAgICAgIHJldHVybiBgTWFya2V0cGxhY2UgXCIke2Vycm9yLm1hcmtldHBsYWNlfVwiIG5vdCBmb3VuZGBcbiAgICBjYXNlICdtYXJrZXRwbGFjZS1sb2FkLWZhaWxlZCc6XG4gICAgICByZXR1cm4gYEZhaWxlZCB0byBsb2FkIG1hcmtldHBsYWNlIFwiJHtlcnJvci5tYXJrZXRwbGFjZX1cIjogJHtlcnJvci5yZWFzb259YFxuICAgIGNhc2UgJ21jcC1jb25maWctaW52YWxpZCc6XG4gICAgICByZXR1cm4gYEludmFsaWQgTUNQIHNlcnZlciBjb25maWcgZm9yIFwiJHtlcnJvci5zZXJ2ZXJOYW1lfVwiOiAke2Vycm9yLnZhbGlkYXRpb25FcnJvcn1gXG4gICAgY2FzZSAnbWNwLXNlcnZlci1zdXBwcmVzc2VkLWR1cGxpY2F0ZSc6IHtcbiAgICAgIGNvbnN0IGR1cCA9IGVycm9yLmR1cGxpY2F0ZU9mLnN0YXJ0c1dpdGgoJ3BsdWdpbjonKVxuICAgICAgICA/IGBzZXJ2ZXIgcHJvdmlkZWQgYnkgcGx1Z2luIFwiJHtlcnJvci5kdXBsaWNhdGVPZi5zcGxpdCgnOicpWzFdID8/ICc/J31cImBcbiAgICAgICAgOiBgYWxyZWFkeS1jb25maWd1cmVkIFwiJHtlcnJvci5kdXBsaWNhdGVPZn1cImBcbiAgICAgIHJldHVybiBgTUNQIHNlcnZlciBcIiR7ZXJyb3Iuc2VydmVyTmFtZX1cIiBza2lwcGVkIOKAlCBzYW1lIGNvbW1hbmQvVVJMIGFzICR7ZHVwfWBcbiAgICB9XG4gICAgY2FzZSAnaG9vay1sb2FkLWZhaWxlZCc6XG4gICAgICByZXR1cm4gYEZhaWxlZCB0byBsb2FkIGhvb2tzIGZyb20gJHtlcnJvci5ob29rUGF0aH06ICR7ZXJyb3IucmVhc29ufWBcbiAgICBjYXNlICdjb21wb25lbnQtbG9hZC1mYWlsZWQnOlxuICAgICAgcmV0dXJuIGBGYWlsZWQgdG8gbG9hZCAke2Vycm9yLmNvbXBvbmVudH0gZnJvbSAke2Vycm9yLnBhdGh9OiAke2Vycm9yLnJlYXNvbn1gXG4gICAgY2FzZSAnbWNwYi1kb3dubG9hZC1mYWlsZWQnOlxuICAgICAgcmV0dXJuIGBGYWlsZWQgdG8gZG93bmxvYWQgTUNQQiBmcm9tICR7ZXJyb3IudXJsfTogJHtlcnJvci5yZWFzb259YFxuICAgIGNhc2UgJ21jcGItZXh0cmFjdC1mYWlsZWQnOlxuICAgICAgcmV0dXJuIGBGYWlsZWQgdG8gZXh0cmFjdCBNQ1BCICR7ZXJyb3IubWNwYlBhdGh9OiAke2Vycm9yLnJlYXNvbn1gXG4gICAgY2FzZSAnbWNwYi1pbnZhbGlkLW1hbmlmZXN0JzpcbiAgICAgIHJldHVybiBgTUNQQiBtYW5pZmVzdCBpbnZhbGlkIGF0ICR7ZXJyb3IubWNwYlBhdGh9OiAke2Vycm9yLnZhbGlkYXRpb25FcnJvcn1gXG4gICAgY2FzZSAnbWFya2V0cGxhY2UtYmxvY2tlZC1ieS1wb2xpY3knOlxuICAgICAgcmV0dXJuIGVycm9yLmJsb2NrZWRCeUJsb2NrbGlzdFxuICAgICAgICA/IGBNYXJrZXRwbGFjZSBcIiR7ZXJyb3IubWFya2V0cGxhY2V9XCIgaXMgYmxvY2tlZCBieSBlbnRlcnByaXNlIHBvbGljeWBcbiAgICAgICAgOiBgTWFya2V0cGxhY2UgXCIke2Vycm9yLm1hcmtldHBsYWNlfVwiIGlzIG5vdCBpbiB0aGUgYWxsb3dlZCBtYXJrZXRwbGFjZSBsaXN0YFxuICAgIGNhc2UgJ2RlcGVuZGVuY3ktdW5zYXRpc2ZpZWQnOlxuICAgICAgcmV0dXJuIGVycm9yLnJlYXNvbiA9PT0gJ25vdC1lbmFibGVkJ1xuICAgICAgICA/IGBEZXBlbmRlbmN5IFwiJHtlcnJvci5kZXBlbmRlbmN5fVwiIGlzIGRpc2FibGVkYFxuICAgICAgICA6IGBEZXBlbmRlbmN5IFwiJHtlcnJvci5kZXBlbmRlbmN5fVwiIGlzIG5vdCBpbnN0YWxsZWRgXG4gICAgY2FzZSAnbHNwLWNvbmZpZy1pbnZhbGlkJzpcbiAgICAgIHJldHVybiBgSW52YWxpZCBMU1Agc2VydmVyIGNvbmZpZyBmb3IgXCIke2Vycm9yLnNlcnZlck5hbWV9XCI6ICR7ZXJyb3IudmFsaWRhdGlvbkVycm9yfWBcbiAgICBjYXNlICdsc3Atc2VydmVyLXN0YXJ0LWZhaWxlZCc6XG4gICAgICByZXR1cm4gYExTUCBzZXJ2ZXIgXCIke2Vycm9yLnNlcnZlck5hbWV9XCIgZmFpbGVkIHRvIHN0YXJ0OiAke2Vycm9yLnJlYXNvbn1gXG4gICAgY2FzZSAnbHNwLXNlcnZlci1jcmFzaGVkJzpcbiAgICAgIHJldHVybiBlcnJvci5zaWduYWxcbiAgICAgICAgPyBgTFNQIHNlcnZlciBcIiR7ZXJyb3Iuc2VydmVyTmFtZX1cIiBjcmFzaGVkIHdpdGggc2lnbmFsICR7ZXJyb3Iuc2lnbmFsfWBcbiAgICAgICAgOiBgTFNQIHNlcnZlciBcIiR7ZXJyb3Iuc2VydmVyTmFtZX1cIiBjcmFzaGVkIHdpdGggZXhpdCBjb2RlICR7ZXJyb3IuZXhpdENvZGUgPz8gJ3Vua25vd24nfWBcbiAgICBjYXNlICdsc3AtcmVxdWVzdC10aW1lb3V0JzpcbiAgICAgIHJldHVybiBgTFNQIHNlcnZlciBcIiR7ZXJyb3Iuc2VydmVyTmFtZX1cIiB0aW1lZCBvdXQgb24gJHtlcnJvci5tZXRob2R9IGFmdGVyICR7ZXJyb3IudGltZW91dE1zfW1zYFxuICAgIGNhc2UgJ2xzcC1yZXF1ZXN0LWZhaWxlZCc6XG4gICAgICByZXR1cm4gYExTUCBzZXJ2ZXIgXCIke2Vycm9yLnNlcnZlck5hbWV9XCIgJHtlcnJvci5tZXRob2R9IGZhaWxlZDogJHtlcnJvci5lcnJvcn1gXG4gICAgY2FzZSAncGx1Z2luLWNhY2hlLW1pc3MnOlxuICAgICAgcmV0dXJuIGBQbHVnaW4gXCIke2Vycm9yLnBsdWdpbn1cIiBub3QgY2FjaGVkIGF0ICR7ZXJyb3IuaW5zdGFsbFBhdGh9YFxuICAgIGNhc2UgJ2dlbmVyaWMtZXJyb3InOlxuICAgICAgcmV0dXJuIGVycm9yLmVycm9yXG4gIH1cbiAgY29uc3QgX2V4aGF1c3RpdmU6IG5ldmVyID0gZXJyb3JcbiAgcmV0dXJuIGdldFBsdWdpbkVycm9yTWVzc2FnZShfZXhoYXVzdGl2ZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVycm9yR3VpZGFuY2UoZXJyb3I6IFBsdWdpbkVycm9yKTogc3RyaW5nIHwgbnVsbCB7XG4gIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgIGNhc2UgJ3BhdGgtbm90LWZvdW5kJzpcbiAgICAgIHJldHVybiAnQ2hlY2sgdGhhdCB0aGUgcGF0aCBpbiB5b3VyIG1hbmlmZXN0IG9yIG1hcmtldHBsYWNlIGNvbmZpZyBpcyBjb3JyZWN0J1xuICAgIGNhc2UgJ2dpdC1hdXRoLWZhaWxlZCc6XG4gICAgICByZXR1cm4gZXJyb3IuYXV0aFR5cGUgPT09ICdzc2gnXG4gICAgICAgID8gJ0NvbmZpZ3VyZSBTU0gga2V5cyBvciB1c2UgSFRUUFMgVVJMIGluc3RlYWQnXG4gICAgICAgIDogJ0NvbmZpZ3VyZSBjcmVkZW50aWFscyBvciB1c2UgU1NIIFVSTCBpbnN0ZWFkJ1xuICAgIGNhc2UgJ2dpdC10aW1lb3V0JzpcbiAgICBjYXNlICduZXR3b3JrLWVycm9yJzpcbiAgICAgIHJldHVybiAnQ2hlY2sgeW91ciBpbnRlcm5ldCBjb25uZWN0aW9uIGFuZCB0cnkgYWdhaW4nXG4gICAgY2FzZSAnbWFuaWZlc3QtcGFyc2UtZXJyb3InOlxuICAgICAgcmV0dXJuICdDaGVjayBtYW5pZmVzdCBmaWxlIHN5bnRheCBpbiB0aGUgcGx1Z2luIGRpcmVjdG9yeSdcbiAgICBjYXNlICdtYW5pZmVzdC12YWxpZGF0aW9uLWVycm9yJzpcbiAgICAgIHJldHVybiAnQ2hlY2sgbWFuaWZlc3QgZmlsZSBmb2xsb3dzIHRoZSByZXF1aXJlZCBzY2hlbWEnXG4gICAgY2FzZSAncGx1Z2luLW5vdC1mb3VuZCc6XG4gICAgICByZXR1cm4gYFBsdWdpbiBtYXkgbm90IGV4aXN0IGluIG1hcmtldHBsYWNlIFwiJHtlcnJvci5tYXJrZXRwbGFjZX1cImBcbiAgICBjYXNlICdtYXJrZXRwbGFjZS1ub3QtZm91bmQnOlxuICAgICAgcmV0dXJuIGVycm9yLmF2YWlsYWJsZU1hcmtldHBsYWNlcy5sZW5ndGggPiAwXG4gICAgICAgID8gYEF2YWlsYWJsZSBtYXJrZXRwbGFjZXM6ICR7ZXJyb3IuYXZhaWxhYmxlTWFya2V0cGxhY2VzLmpvaW4oJywgJyl9YFxuICAgICAgICA6ICdBZGQgdGhlIG1hcmtldHBsYWNlIGZpcnN0IHVzaW5nIC9wbHVnaW4gbWFya2V0cGxhY2UgYWRkJ1xuICAgIGNhc2UgJ21jcC1jb25maWctaW52YWxpZCc6XG4gICAgICByZXR1cm4gJ0NoZWNrIE1DUCBzZXJ2ZXIgY29uZmlndXJhdGlvbiBpbiAubWNwLmpzb24gb3IgbWFuaWZlc3QnXG4gICAgY2FzZSAnbWNwLXNlcnZlci1zdXBwcmVzc2VkLWR1cGxpY2F0ZSc6IHtcbiAgICAgIC8vIGR1cGxpY2F0ZU9mIGlzIFwicGx1Z2luOm5hbWU6c3J2XCIgd2hlbiBhbm90aGVyIHBsdWdpbiB3b24gZGVkdXAg4oCUXG4gICAgICAvLyB1c2VycyBjYW4ndCByZW1vdmUgcGx1Z2luLXByb3ZpZGVkIHNlcnZlcnMgZnJvbSB0aGVpciBNQ1AgY29uZmlnLFxuICAgICAgLy8gc28gcG9pbnQgdGhlbSBhdCB0aGUgd2lubmluZyBwbHVnaW4gaW5zdGVhZC5cbiAgICAgIGlmIChlcnJvci5kdXBsaWNhdGVPZi5zdGFydHNXaXRoKCdwbHVnaW46JykpIHtcbiAgICAgICAgY29uc3Qgd2lubmluZ1BsdWdpbiA9XG4gICAgICAgICAgZXJyb3IuZHVwbGljYXRlT2Yuc3BsaXQoJzonKVsxXSA/PyAndGhlIG90aGVyIHBsdWdpbidcbiAgICAgICAgcmV0dXJuIGBEaXNhYmxlIHBsdWdpbiBcIiR7d2lubmluZ1BsdWdpbn1cIiBpZiB5b3Ugd2FudCB0aGlzIHBsdWdpbidzIHZlcnNpb24gaW5zdGVhZGBcbiAgICAgIH1cbiAgICAgIHJldHVybiBgUmVtb3ZlIFwiJHtlcnJvci5kdXBsaWNhdGVPZn1cIiBmcm9tIHlvdXIgTUNQIGNvbmZpZyBpZiB5b3Ugd2FudCB0aGUgcGx1Z2luJ3MgdmVyc2lvbiBpbnN0ZWFkYFxuICAgIH1cbiAgICBjYXNlICdob29rLWxvYWQtZmFpbGVkJzpcbiAgICAgIHJldHVybiAnQ2hlY2sgaG9va3MuanNvbiBmaWxlIHN5bnRheCBhbmQgc3RydWN0dXJlJ1xuICAgIGNhc2UgJ2NvbXBvbmVudC1sb2FkLWZhaWxlZCc6XG4gICAgICByZXR1cm4gYENoZWNrICR7ZXJyb3IuY29tcG9uZW50fSBkaXJlY3Rvcnkgc3RydWN0dXJlIGFuZCBmaWxlIHBlcm1pc3Npb25zYFxuICAgIGNhc2UgJ21jcGItZG93bmxvYWQtZmFpbGVkJzpcbiAgICAgIHJldHVybiAnQ2hlY2sgeW91ciBpbnRlcm5ldCBjb25uZWN0aW9uIGFuZCBVUkwgYWNjZXNzaWJpbGl0eSdcbiAgICBjYXNlICdtY3BiLWV4dHJhY3QtZmFpbGVkJzpcbiAgICAgIHJldHVybiAnVmVyaWZ5IHRoZSBNQ1BCIGZpbGUgaXMgdmFsaWQgYW5kIG5vdCBjb3JydXB0ZWQnXG4gICAgY2FzZSAnbWNwYi1pbnZhbGlkLW1hbmlmZXN0JzpcbiAgICAgIHJldHVybiAnQ29udGFjdCB0aGUgcGx1Z2luIGF1dGhvciBhYm91dCB0aGUgaW52YWxpZCBtYW5pZmVzdCdcbiAgICBjYXNlICdtYXJrZXRwbGFjZS1ibG9ja2VkLWJ5LXBvbGljeSc6XG4gICAgICBpZiAoZXJyb3IuYmxvY2tlZEJ5QmxvY2tsaXN0KSB7XG4gICAgICAgIHJldHVybiAnVGhpcyBtYXJrZXRwbGFjZSBzb3VyY2UgaXMgZXhwbGljaXRseSBibG9ja2VkIGJ5IHlvdXIgYWRtaW5pc3RyYXRvcidcbiAgICAgIH1cbiAgICAgIHJldHVybiBlcnJvci5hbGxvd2VkU291cmNlcy5sZW5ndGggPiAwXG4gICAgICAgID8gYEFsbG93ZWQgc291cmNlczogJHtlcnJvci5hbGxvd2VkU291cmNlcy5qb2luKCcsICcpfWBcbiAgICAgICAgOiAnQ29udGFjdCB5b3VyIGFkbWluaXN0cmF0b3IgdG8gY29uZmlndXJlIGFsbG93ZWQgbWFya2V0cGxhY2Ugc291cmNlcydcbiAgICBjYXNlICdkZXBlbmRlbmN5LXVuc2F0aXNmaWVkJzpcbiAgICAgIHJldHVybiBlcnJvci5yZWFzb24gPT09ICdub3QtZW5hYmxlZCdcbiAgICAgICAgPyBgRW5hYmxlIFwiJHtlcnJvci5kZXBlbmRlbmN5fVwiIG9yIHVuaW5zdGFsbCBcIiR7ZXJyb3IucGx1Z2lufVwiYFxuICAgICAgICA6IGBJbnN0YWxsIFwiJHtlcnJvci5kZXBlbmRlbmN5fVwiIG9yIHVuaW5zdGFsbCBcIiR7ZXJyb3IucGx1Z2lufVwiYFxuICAgIGNhc2UgJ2xzcC1jb25maWctaW52YWxpZCc6XG4gICAgICByZXR1cm4gJ0NoZWNrIExTUCBzZXJ2ZXIgY29uZmlndXJhdGlvbiBpbiB0aGUgcGx1Z2luIG1hbmlmZXN0J1xuICAgIGNhc2UgJ2xzcC1zZXJ2ZXItc3RhcnQtZmFpbGVkJzpcbiAgICBjYXNlICdsc3Atc2VydmVyLWNyYXNoZWQnOlxuICAgIGNhc2UgJ2xzcC1yZXF1ZXN0LXRpbWVvdXQnOlxuICAgIGNhc2UgJ2xzcC1yZXF1ZXN0LWZhaWxlZCc6XG4gICAgICByZXR1cm4gJ0NoZWNrIExTUCBzZXJ2ZXIgbG9ncyB3aXRoIC0tZGVidWcgZm9yIGRldGFpbHMnXG4gICAgY2FzZSAncGx1Z2luLWNhY2hlLW1pc3MnOlxuICAgICAgcmV0dXJuICdSdW4gL3BsdWdpbnMgdG8gcmVmcmVzaCB0aGUgcGx1Z2luIGNhY2hlJ1xuICAgIGNhc2UgJ21hcmtldHBsYWNlLWxvYWQtZmFpbGVkJzpcbiAgICBjYXNlICdnZW5lcmljLWVycm9yJzpcbiAgICAgIHJldHVybiBudWxsXG4gIH1cbiAgY29uc3QgX2V4aGF1c3RpdmU6IG5ldmVyID0gZXJyb3JcbiAgcmV0dXJuIG51bGxcbn1cbiIsICJpbXBvcnQgZmlndXJlcyBmcm9tICdmaWd1cmVzJ1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3gsIGNvbG9yLCBUZXh0LCB1c2VUaGVtZSB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7IHBsdXJhbCB9IGZyb20gJy4uLy4uL3V0aWxzL3N0cmluZ1V0aWxzLmpzJ1xuaW1wb3J0IHR5cGUgeyBVbmlmaWVkSW5zdGFsbGVkSXRlbSB9IGZyb20gJy4vdW5pZmllZFR5cGVzLmpzJ1xuXG50eXBlIFByb3BzID0ge1xuICBpdGVtOiBVbmlmaWVkSW5zdGFsbGVkSXRlbVxuICBpc1NlbGVjdGVkOiBib29sZWFuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBVbmlmaWVkSW5zdGFsbGVkQ2VsbCh7XG4gIGl0ZW0sXG4gIGlzU2VsZWN0ZWQsXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IFt0aGVtZV0gPSB1c2VUaGVtZSgpXG5cbiAgaWYgKGl0ZW0udHlwZSA9PT0gJ3BsdWdpbicpIHtcbiAgICAvLyBTdGF0dXMgaWNvbiBhbmQgdGV4dFxuICAgIGxldCBzdGF0dXNJY29uOiBzdHJpbmdcbiAgICBsZXQgc3RhdHVzVGV4dDogc3RyaW5nXG5cbiAgICAvLyBTaG93IHBlbmRpbmcgdG9nZ2xlIHN0YXR1cyBpZiBzZXQsIG90aGVyd2lzZSBzaG93IGN1cnJlbnQgc3RhdHVzXG4gICAgaWYgKGl0ZW0ucGVuZGluZ1RvZ2dsZSkge1xuICAgICAgc3RhdHVzSWNvbiA9IGNvbG9yKCdzdWdnZXN0aW9uJywgdGhlbWUpKGZpZ3VyZXMuYXJyb3dSaWdodClcbiAgICAgIHN0YXR1c1RleHQgPVxuICAgICAgICBpdGVtLnBlbmRpbmdUb2dnbGUgPT09ICd3aWxsLWVuYWJsZScgPyAnd2lsbCBlbmFibGUnIDogJ3dpbGwgZGlzYWJsZSdcbiAgICB9IGVsc2UgaWYgKGl0ZW0uZXJyb3JDb3VudCA+IDApIHtcbiAgICAgIHN0YXR1c0ljb24gPSBjb2xvcignZXJyb3InLCB0aGVtZSkoZmlndXJlcy5jcm9zcylcbiAgICAgIHN0YXR1c1RleHQgPSBgJHtpdGVtLmVycm9yQ291bnR9ICR7cGx1cmFsKGl0ZW0uZXJyb3JDb3VudCwgJ2Vycm9yJyl9YFxuICAgIH0gZWxzZSBpZiAoIWl0ZW0uaXNFbmFibGVkKSB7XG4gICAgICBzdGF0dXNJY29uID0gY29sb3IoJ2luYWN0aXZlJywgdGhlbWUpKGZpZ3VyZXMucmFkaW9PZmYpXG4gICAgICBzdGF0dXNUZXh0ID0gJ2Rpc2FibGVkJ1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0dXNJY29uID0gY29sb3IoJ3N1Y2Nlc3MnLCB0aGVtZSkoZmlndXJlcy50aWNrKVxuICAgICAgc3RhdHVzVGV4dCA9ICdlbmFibGVkJ1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94PlxuICAgICAgICA8VGV4dCBjb2xvcj17aXNTZWxlY3RlZCA/ICdzdWdnZXN0aW9uJyA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAge2lzU2VsZWN0ZWQgPyBgJHtmaWd1cmVzLnBvaW50ZXJ9IGAgOiAnICAnfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0IGNvbG9yPXtpc1NlbGVjdGVkID8gJ3N1Z2dlc3Rpb24nIDogdW5kZWZpbmVkfT57aXRlbS5uYW1lfTwvVGV4dD5cbiAgICAgICAgPFRleHQgZGltQ29sb3I9eyFpc1NlbGVjdGVkfT5cbiAgICAgICAgICB7JyAnfVxuICAgICAgICAgIDxUZXh0IGJhY2tncm91bmRDb2xvcj1cInVzZXJNZXNzYWdlQmFja2dyb3VuZFwiPlBsdWdpbjwvVGV4dD5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj4gwrcge2l0ZW0ubWFya2V0cGxhY2V9PC9UZXh0PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj17IWlzU2VsZWN0ZWR9PiDCtyB7c3RhdHVzSWNvbn0gPC9UZXh0PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj17IWlzU2VsZWN0ZWR9PntzdGF0dXNUZXh0fTwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxuXG4gIGlmIChpdGVtLnR5cGUgPT09ICdmbGFnZ2VkLXBsdWdpbicpIHtcbiAgICBjb25zdCBzdGF0dXNJY29uID0gY29sb3IoJ3dhcm5pbmcnLCB0aGVtZSkoZmlndXJlcy53YXJuaW5nKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3g+XG4gICAgICAgIDxUZXh0IGNvbG9yPXtpc1NlbGVjdGVkID8gJ3N1Z2dlc3Rpb24nIDogdW5kZWZpbmVkfT5cbiAgICAgICAgICB7aXNTZWxlY3RlZCA/IGAke2ZpZ3VyZXMucG9pbnRlcn0gYCA6ICcgICd9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQgY29sb3I9e2lzU2VsZWN0ZWQgPyAnc3VnZ2VzdGlvbicgOiB1bmRlZmluZWR9PntpdGVtLm5hbWV9PC9UZXh0PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj17IWlzU2VsZWN0ZWR9PlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgPFRleHQgYmFja2dyb3VuZENvbG9yPVwidXNlck1lc3NhZ2VCYWNrZ3JvdW5kXCI+UGx1Z2luPC9UZXh0PlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPiDCtyB7aXRlbS5tYXJrZXRwbGFjZX08L1RleHQ+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPXshaXNTZWxlY3RlZH0+IMK3IHtzdGF0dXNJY29ufSA8L1RleHQ+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPXshaXNTZWxlY3RlZH0+cmVtb3ZlZDwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxuXG4gIGlmIChpdGVtLnR5cGUgPT09ICdmYWlsZWQtcGx1Z2luJykge1xuICAgIGNvbnN0IHN0YXR1c0ljb24gPSBjb2xvcignZXJyb3InLCB0aGVtZSkoZmlndXJlcy5jcm9zcylcbiAgICBjb25zdCBzdGF0dXNUZXh0ID0gYGZhaWxlZCB0byBsb2FkIMK3ICR7aXRlbS5lcnJvckNvdW50fSAke3BsdXJhbChpdGVtLmVycm9yQ291bnQsICdlcnJvcicpfWBcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94PlxuICAgICAgICA8VGV4dCBjb2xvcj17aXNTZWxlY3RlZCA/ICdzdWdnZXN0aW9uJyA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAge2lzU2VsZWN0ZWQgPyBgJHtmaWd1cmVzLnBvaW50ZXJ9IGAgOiAnICAnfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0IGNvbG9yPXtpc1NlbGVjdGVkID8gJ3N1Z2dlc3Rpb24nIDogdW5kZWZpbmVkfT57aXRlbS5uYW1lfTwvVGV4dD5cbiAgICAgICAgPFRleHQgZGltQ29sb3I9eyFpc1NlbGVjdGVkfT5cbiAgICAgICAgICB7JyAnfVxuICAgICAgICAgIDxUZXh0IGJhY2tncm91bmRDb2xvcj1cInVzZXJNZXNzYWdlQmFja2dyb3VuZFwiPlBsdWdpbjwvVGV4dD5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj4gwrcge2l0ZW0ubWFya2V0cGxhY2V9PC9UZXh0PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj17IWlzU2VsZWN0ZWR9PiDCtyB7c3RhdHVzSWNvbn0gPC9UZXh0PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj17IWlzU2VsZWN0ZWR9PntzdGF0dXNUZXh0fTwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxuXG4gIC8vIE1DUCBzZXJ2ZXJcbiAgbGV0IHN0YXR1c0ljb246IHN0cmluZ1xuICBsZXQgc3RhdHVzVGV4dDogc3RyaW5nXG5cbiAgaWYgKGl0ZW0uc3RhdHVzID09PSAnY29ubmVjdGVkJykge1xuICAgIHN0YXR1c0ljb24gPSBjb2xvcignc3VjY2VzcycsIHRoZW1lKShmaWd1cmVzLnRpY2spXG4gICAgc3RhdHVzVGV4dCA9ICdjb25uZWN0ZWQnXG4gIH0gZWxzZSBpZiAoaXRlbS5zdGF0dXMgPT09ICdkaXNhYmxlZCcpIHtcbiAgICBzdGF0dXNJY29uID0gY29sb3IoJ2luYWN0aXZlJywgdGhlbWUpKGZpZ3VyZXMucmFkaW9PZmYpXG4gICAgc3RhdHVzVGV4dCA9ICdkaXNhYmxlZCdcbiAgfSBlbHNlIGlmIChpdGVtLnN0YXR1cyA9PT0gJ3BlbmRpbmcnKSB7XG4gICAgc3RhdHVzSWNvbiA9IGNvbG9yKCdpbmFjdGl2ZScsIHRoZW1lKShmaWd1cmVzLnJhZGlvT2ZmKVxuICAgIHN0YXR1c1RleHQgPSAnY29ubmVjdGluZ+KApidcbiAgfSBlbHNlIGlmIChpdGVtLnN0YXR1cyA9PT0gJ25lZWRzLWF1dGgnKSB7XG4gICAgc3RhdHVzSWNvbiA9IGNvbG9yKCd3YXJuaW5nJywgdGhlbWUpKGZpZ3VyZXMudHJpYW5nbGVVcE91dGxpbmUpXG4gICAgc3RhdHVzVGV4dCA9ICdFbnRlciB0byBhdXRoJ1xuICB9IGVsc2Uge1xuICAgIHN0YXR1c0ljb24gPSBjb2xvcignZXJyb3InLCB0aGVtZSkoZmlndXJlcy5jcm9zcylcbiAgICBzdGF0dXNUZXh0ID0gJ2ZhaWxlZCdcbiAgfVxuXG4gIC8vIEluZGVudGVkIE1DUHMgKGNoaWxkIG9mIGEgcGx1Z2luKVxuICBpZiAoaXRlbS5pbmRlbnRlZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94PlxuICAgICAgICA8VGV4dCBjb2xvcj17aXNTZWxlY3RlZCA/ICdzdWdnZXN0aW9uJyA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAge2lzU2VsZWN0ZWQgPyBgJHtmaWd1cmVzLnBvaW50ZXJ9IGAgOiAnICAnfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPXshaXNTZWxlY3RlZH0+4pSUIDwvVGV4dD5cbiAgICAgICAgPFRleHQgY29sb3I9e2lzU2VsZWN0ZWQgPyAnc3VnZ2VzdGlvbicgOiB1bmRlZmluZWR9PntpdGVtLm5hbWV9PC9UZXh0PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj17IWlzU2VsZWN0ZWR9PlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgPFRleHQgYmFja2dyb3VuZENvbG9yPVwidXNlck1lc3NhZ2VCYWNrZ3JvdW5kXCI+TUNQPC9UZXh0PlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPXshaXNTZWxlY3RlZH0+IMK3IHtzdGF0dXNJY29ufSA8L1RleHQ+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPXshaXNTZWxlY3RlZH0+e3N0YXR1c1RleHR9PC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAgPFRleHQgY29sb3I9e2lzU2VsZWN0ZWQgPyAnc3VnZ2VzdGlvbicgOiB1bmRlZmluZWR9PlxuICAgICAgICB7aXNTZWxlY3RlZCA/IGAke2ZpZ3VyZXMucG9pbnRlcn0gYCA6ICcgICd9XG4gICAgICA8L1RleHQ+XG4gICAgICA8VGV4dCBjb2xvcj17aXNTZWxlY3RlZCA/ICdzdWdnZXN0aW9uJyA6IHVuZGVmaW5lZH0+e2l0ZW0ubmFtZX08L1RleHQ+XG4gICAgICA8VGV4dCBkaW1Db2xvcj17IWlzU2VsZWN0ZWR9PlxuICAgICAgICB7JyAnfVxuICAgICAgICA8VGV4dCBiYWNrZ3JvdW5kQ29sb3I9XCJ1c2VyTWVzc2FnZUJhY2tncm91bmRcIj5NQ1A8L1RleHQ+XG4gICAgICA8L1RleHQ+XG4gICAgICA8VGV4dCBkaW1Db2xvcj17IWlzU2VsZWN0ZWR9PiDCtyB7c3RhdHVzSWNvbn0gPC9UZXh0PlxuICAgICAgPFRleHQgZGltQ29sb3I9eyFpc1NlbGVjdGVkfT57c3RhdHVzVGV4dH08L1RleHQ+XG4gICAgPC9Cb3g+XG4gIClcbn1cbiIsICJpbXBvcnQgZmlndXJlcyBmcm9tICdmaWd1cmVzJ1xuaW1wb3J0IHR5cGUgeyBEaXJlbnQgfSBmcm9tICdmcydcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzL3Byb21pc2VzJ1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb25maWd1cmFibGVTaG9ydGN1dEhpbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbmZpZ3VyYWJsZVNob3J0Y3V0SGludC5qcydcbmltcG9ydCB7IEJ5bGluZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGVzaWduLXN5c3RlbS9CeWxpbmUuanMnXG5pbXBvcnQgeyBNQ1BSZW1vdGVTZXJ2ZXJNZW51IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tY3AvTUNQUmVtb3RlU2VydmVyTWVudS5qcydcbmltcG9ydCB7IE1DUFN0ZGlvU2VydmVyTWVudSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWNwL01DUFN0ZGlvU2VydmVyTWVudS5qcydcbmltcG9ydCB7IE1DUFRvb2xEZXRhaWxWaWV3IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tY3AvTUNQVG9vbERldGFpbFZpZXcuanMnXG5pbXBvcnQgeyBNQ1BUb29sTGlzdFZpZXcgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL21jcC9NQ1BUb29sTGlzdFZpZXcuanMnXG5pbXBvcnQgdHlwZSB7XG4gIENsYXVkZUFJU2VydmVySW5mbyxcbiAgSFRUUFNlcnZlckluZm8sXG4gIFNTRVNlcnZlckluZm8sXG4gIFN0ZGlvU2VydmVySW5mbyxcbn0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tY3AvdHlwZXMuanMnXG5pbXBvcnQgeyBTZWFyY2hCb3ggfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlYXJjaEJveC5qcydcbmltcG9ydCB7IHVzZVNlYXJjaElucHV0IH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlU2VhcmNoSW5wdXQuanMnXG5pbXBvcnQgeyB1c2VUZXJtaW5hbFNpemUgfSBmcm9tICcuLi8uLi9ob29rcy91c2VUZXJtaW5hbFNpemUuanMnXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3VzdG9tLXJ1bGVzL3ByZWZlci11c2Uta2V5YmluZGluZ3MgLS0gdXNlSW5wdXQgbmVlZGVkIGZvciByYXcgc2VhcmNoIG1vZGUgdGV4dCBpbnB1dFxuaW1wb3J0IHsgQm94LCBUZXh0LCB1c2VJbnB1dCwgdXNlVGVybWluYWxGb2N1cyB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7XG4gIHVzZUtleWJpbmRpbmcsXG4gIHVzZUtleWJpbmRpbmdzLFxufSBmcm9tICcuLi8uLi9rZXliaW5kaW5ncy91c2VLZXliaW5kaW5nLmpzJ1xuaW1wb3J0IHsgZ2V0QnVpbHRpblBsdWdpbkRlZmluaXRpb24gfSBmcm9tICcuLi8uLi9wbHVnaW5zL2J1aWx0aW5QbHVnaW5zLmpzJ1xuaW1wb3J0IHsgdXNlTWNwVG9nZ2xlRW5hYmxlZCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21jcC9NQ1BDb25uZWN0aW9uTWFuYWdlci5qcydcbmltcG9ydCB0eXBlIHtcbiAgTUNQU2VydmVyQ29ubmVjdGlvbixcbiAgTWNwQ2xhdWRlQUlQcm94eVNlcnZlckNvbmZpZyxcbiAgTWNwSFRUUFNlcnZlckNvbmZpZyxcbiAgTWNwU1NFU2VydmVyQ29uZmlnLFxuICBNY3BTdGRpb1NlcnZlckNvbmZpZyxcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWNwL3R5cGVzLmpzJ1xuaW1wb3J0IHsgZmlsdGVyVG9vbHNCeVNlcnZlciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21jcC91dGlscy5qcydcbmltcG9ydCB7XG4gIGRpc2FibGVQbHVnaW5PcCxcbiAgZW5hYmxlUGx1Z2luT3AsXG4gIGdldFBsdWdpbkluc3RhbGxhdGlvbkZyb21WMixcbiAgaXNJbnN0YWxsYWJsZVNjb3BlLFxuICBpc1BsdWdpbkVuYWJsZWRBdFByb2plY3RTY29wZSxcbiAgdW5pbnN0YWxsUGx1Z2luT3AsXG4gIHVwZGF0ZVBsdWdpbk9wLFxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wbHVnaW5zL3BsdWdpbk9wZXJhdGlvbnMuanMnXG5pbXBvcnQgeyB1c2VBcHBTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlL0FwcFN0YXRlLmpzJ1xuaW1wb3J0IHR5cGUgeyBUb29sIH0gZnJvbSAnLi4vLi4vVG9vbC5qcydcbmltcG9ydCB0eXBlIHsgTG9hZGVkUGx1Z2luLCBQbHVnaW5FcnJvciB9IGZyb20gJy4uLy4uL3R5cGVzL3BsdWdpbi5qcydcbmltcG9ydCB7IGNvdW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvYXJyYXkuanMnXG5pbXBvcnQgeyBvcGVuQnJvd3NlciB9IGZyb20gJy4uLy4uL3V0aWxzL2Jyb3dzZXIuanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuLi8uLi91dGlscy9kZWJ1Zy5qcydcbmltcG9ydCB7IGVycm9yTWVzc2FnZSwgdG9FcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzL2Vycm9ycy5qcydcbmltcG9ydCB7IGxvZ0Vycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nLmpzJ1xuaW1wb3J0IHsgY2xlYXJBbGxDYWNoZXMgfSBmcm9tICcuLi8uLi91dGlscy9wbHVnaW5zL2NhY2hlVXRpbHMuanMnXG5pbXBvcnQgeyBsb2FkSW5zdGFsbGVkUGx1Z2luc1YyIH0gZnJvbSAnLi4vLi4vdXRpbHMvcGx1Z2lucy9pbnN0YWxsZWRQbHVnaW5zTWFuYWdlci5qcydcbmltcG9ydCB7IGdldE1hcmtldHBsYWNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcGx1Z2lucy9tYXJrZXRwbGFjZU1hbmFnZXIuanMnXG5pbXBvcnQge1xuICBpc01jcGJTb3VyY2UsXG4gIGxvYWRNY3BiRmlsZSxcbiAgdHlwZSBNY3BiTmVlZHNDb25maWdSZXN1bHQsXG4gIHR5cGUgVXNlckNvbmZpZ1ZhbHVlcyxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvcGx1Z2lucy9tY3BiSGFuZGxlci5qcydcbmltcG9ydCB7XG4gIGdldFBsdWdpbkRhdGFEaXJTaXplLFxuICBwbHVnaW5EYXRhRGlyUGF0aCxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvcGx1Z2lucy9wbHVnaW5EaXJlY3Rvcmllcy5qcydcbmltcG9ydCB7XG4gIGdldEZsYWdnZWRQbHVnaW5zLFxuICBtYXJrRmxhZ2dlZFBsdWdpbnNTZWVuLFxuICByZW1vdmVGbGFnZ2VkUGx1Z2luLFxufSBmcm9tICcuLi8uLi91dGlscy9wbHVnaW5zL3BsdWdpbkZsYWdnaW5nLmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBQZXJzaXN0YWJsZVBsdWdpblNjb3BlLFxuICBwYXJzZVBsdWdpbklkZW50aWZpZXIsXG59IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvcGx1Z2luSWRlbnRpZmllci5qcydcbmltcG9ydCB7IGxvYWRBbGxQbHVnaW5zIH0gZnJvbSAnLi4vLi4vdXRpbHMvcGx1Z2lucy9wbHVnaW5Mb2FkZXIuanMnXG5pbXBvcnQge1xuICBsb2FkUGx1Z2luT3B0aW9ucyxcbiAgdHlwZSBQbHVnaW5PcHRpb25TY2hlbWEsXG4gIHNhdmVQbHVnaW5PcHRpb25zLFxufSBmcm9tICcuLi8uLi91dGlscy9wbHVnaW5zL3BsdWdpbk9wdGlvbnNTdG9yYWdlLmpzJ1xuaW1wb3J0IHsgaXNQbHVnaW5CbG9ja2VkQnlQb2xpY3kgfSBmcm9tICcuLi8uLi91dGlscy9wbHVnaW5zL3BsdWdpblBvbGljeS5qcydcbmltcG9ydCB7IGdldFBsdWdpbkVkaXRhYmxlU2NvcGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcGx1Z2lucy9wbHVnaW5TdGFydHVwQ2hlY2suanMnXG5pbXBvcnQge1xuICBnZXRTZXR0aW5nc19ERVBSRUNBVEVELFxuICBnZXRTZXR0aW5nc0ZvclNvdXJjZSxcbiAgdXBkYXRlU2V0dGluZ3NGb3JTb3VyY2UsXG59IGZyb20gJy4uLy4uL3V0aWxzL3NldHRpbmdzL3NldHRpbmdzLmpzJ1xuaW1wb3J0IHsganNvblBhcnNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2xvd09wZXJhdGlvbnMuanMnXG5pbXBvcnQgeyBwbHVyYWwgfSBmcm9tICcuLi8uLi91dGlscy9zdHJpbmdVdGlscy5qcydcbmltcG9ydCB7IGZvcm1hdEVycm9yTWVzc2FnZSwgZ2V0RXJyb3JHdWlkYW5jZSB9IGZyb20gJy4vUGx1Z2luRXJyb3JzLmpzJ1xuaW1wb3J0IHsgUGx1Z2luT3B0aW9uc0RpYWxvZyB9IGZyb20gJy4vUGx1Z2luT3B0aW9uc0RpYWxvZy5qcydcbmltcG9ydCB7IFBsdWdpbk9wdGlvbnNGbG93IH0gZnJvbSAnLi9QbHVnaW5PcHRpb25zRmxvdy5qcydcbmltcG9ydCB0eXBlIHsgVmlld1N0YXRlIGFzIFBhcmVudFZpZXdTdGF0ZSB9IGZyb20gJy4vdHlwZXMuanMnXG5pbXBvcnQgeyBVbmlmaWVkSW5zdGFsbGVkQ2VsbCB9IGZyb20gJy4vVW5pZmllZEluc3RhbGxlZENlbGwuanMnXG5pbXBvcnQgdHlwZSB7IFVuaWZpZWRJbnN0YWxsZWRJdGVtIH0gZnJvbSAnLi91bmlmaWVkVHlwZXMuanMnXG5pbXBvcnQgeyB1c2VQYWdpbmF0aW9uIH0gZnJvbSAnLi91c2VQYWdpbmF0aW9uLmpzJ1xuXG50eXBlIFByb3BzID0ge1xuICBzZXRWaWV3U3RhdGU6IChzdGF0ZTogUGFyZW50Vmlld1N0YXRlKSA9PiB2b2lkXG4gIHNldFJlc3VsdDogKHJlc3VsdDogc3RyaW5nIHwgbnVsbCkgPT4gdm9pZFxuICBvbk1hbmFnZUNvbXBsZXRlPzogKCkgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cbiAgb25TZWFyY2hNb2RlQ2hhbmdlPzogKGlzQWN0aXZlOiBib29sZWFuKSA9PiB2b2lkXG4gIHRhcmdldFBsdWdpbj86IHN0cmluZ1xuICB0YXJnZXRNYXJrZXRwbGFjZT86IHN0cmluZ1xuICBhY3Rpb24/OiAnZW5hYmxlJyB8ICdkaXNhYmxlJyB8ICd1bmluc3RhbGwnXG59XG5cbnR5cGUgRmxhZ2dlZFBsdWdpbkluZm8gPSB7XG4gIGlkOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIG1hcmtldHBsYWNlOiBzdHJpbmdcbiAgcmVhc29uOiBzdHJpbmdcbiAgdGV4dDogc3RyaW5nXG4gIGZsYWdnZWRBdDogc3RyaW5nXG59XG5cbnR5cGUgRmFpbGVkUGx1Z2luSW5mbyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgbWFya2V0cGxhY2U6IHN0cmluZ1xuICBlcnJvcnM6IFBsdWdpbkVycm9yW11cbiAgc2NvcGU6IFBlcnNpc3RhYmxlUGx1Z2luU2NvcGVcbn1cblxudHlwZSBWaWV3U3RhdGUgPVxuICB8ICdwbHVnaW4tbGlzdCdcbiAgfCAncGx1Z2luLWRldGFpbHMnXG4gIHwgJ2NvbmZpZ3VyaW5nJ1xuICB8IHsgdHlwZTogJ3BsdWdpbi1vcHRpb25zJyB9XG4gIHwgeyB0eXBlOiAnY29uZmlndXJpbmctb3B0aW9ucyc7IHNjaGVtYTogUGx1Z2luT3B0aW9uU2NoZW1hIH1cbiAgfCAnY29uZmlybS1wcm9qZWN0LXVuaW5zdGFsbCdcbiAgfCB7IHR5cGU6ICdjb25maXJtLWRhdGEtY2xlYW51cCc7IHNpemU6IHsgYnl0ZXM6IG51bWJlcjsgaHVtYW46IHN0cmluZyB9IH1cbiAgfCB7IHR5cGU6ICdmbGFnZ2VkLWRldGFpbCc7IHBsdWdpbjogRmxhZ2dlZFBsdWdpbkluZm8gfVxuICB8IHsgdHlwZTogJ2ZhaWxlZC1wbHVnaW4tZGV0YWlscyc7IHBsdWdpbjogRmFpbGVkUGx1Z2luSW5mbyB9XG4gIHwgeyB0eXBlOiAnbWNwLWRldGFpbCc7IGNsaWVudDogTUNQU2VydmVyQ29ubmVjdGlvbiB9XG4gIHwgeyB0eXBlOiAnbWNwLXRvb2xzJzsgY2xpZW50OiBNQ1BTZXJ2ZXJDb25uZWN0aW9uIH1cbiAgfCB7IHR5cGU6ICdtY3AtdG9vbC1kZXRhaWwnOyBjbGllbnQ6IE1DUFNlcnZlckNvbm5lY3Rpb247IHRvb2w6IFRvb2wgfVxuXG50eXBlIE1hcmtldHBsYWNlSW5mbyA9IHtcbiAgbmFtZTogc3RyaW5nXG4gIGluc3RhbGxlZFBsdWdpbnM6IExvYWRlZFBsdWdpbltdXG4gIGVuYWJsZWRDb3VudD86IG51bWJlclxuICBkaXNhYmxlZENvdW50PzogbnVtYmVyXG59XG5cbnR5cGUgUGx1Z2luU3RhdGUgPSB7XG4gIHBsdWdpbjogTG9hZGVkUGx1Z2luXG4gIG1hcmtldHBsYWNlOiBzdHJpbmdcbiAgc2NvcGU/OiAndXNlcicgfCAncHJvamVjdCcgfCAnbG9jYWwnIHwgJ21hbmFnZWQnIHwgJ2J1aWx0aW4nXG4gIHBlbmRpbmdFbmFibGU/OiBib29sZWFuIC8vIFRvZ2dsZSBlbmFibGUvZGlzYWJsZVxuICBwZW5kaW5nVXBkYXRlPzogYm9vbGVhbiAvLyBNYXJrZWQgZm9yIHVwZGF0ZVxufVxuXG4vKipcbiAqIEdldCBsaXN0IG9mIGJhc2UgZmlsZSBuYW1lcyAod2l0aG91dCAubWQgZXh0ZW5zaW9uKSBmcm9tIGEgZGlyZWN0b3J5XG4gKiBAcGFyYW0gZGlyUGF0aCBUaGUgZGlyZWN0b3J5IHBhdGggdG8gbGlzdCBmaWxlcyBmcm9tXG4gKiBAcmV0dXJucyBBcnJheSBvZiBiYXNlIGZpbGUgbmFtZXMgd2l0aG91dCAubWQgZXh0ZW5zaW9uXG4gKiBAZXhhbXBsZVxuICogLy8gR2l2ZW4gZGlyZWN0b3J5IGNvbnRhaW5zOiBhZ2VudC1zZGstdmVyaWZpZXItcHkubWQsIGFnZW50LXNkay12ZXJpZmllci10cy5tZCwgUkVBRE1FLnR4dFxuICogYXdhaXQgZ2V0QmFzZUZpbGVOYW1lcygnL3BhdGgvdG8vYWdlbnRzJylcbiAqIC8vIFJldHVybnM6IFsnYWdlbnQtc2RrLXZlcmlmaWVyLXB5JywgJ2FnZW50LXNkay12ZXJpZmllci10cyddXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldEJhc2VGaWxlTmFtZXMoZGlyUGF0aDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCBmcy5yZWFkZGlyKGRpclBhdGgsIHsgd2l0aEZpbGVUeXBlczogdHJ1ZSB9KVxuICAgIHJldHVybiBlbnRyaWVzXG4gICAgICAuZmlsdGVyKChlbnRyeTogRGlyZW50KSA9PiBlbnRyeS5pc0ZpbGUoKSAmJiBlbnRyeS5uYW1lLmVuZHNXaXRoKCcubWQnKSlcbiAgICAgIC5tYXAoKGVudHJ5OiBEaXJlbnQpID0+IHtcbiAgICAgICAgLy8gUmVtb3ZlIC5tZCBleHRlbnNpb24gc3BlY2lmaWNhbGx5XG4gICAgICAgIGNvbnN0IGJhc2VOYW1lID0gcGF0aC5iYXNlbmFtZShlbnRyeS5uYW1lLCAnLm1kJylcbiAgICAgICAgcmV0dXJuIGJhc2VOYW1lXG4gICAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IGVycm9yTXNnID0gZXJyb3JNZXNzYWdlKGVycm9yKVxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBGYWlsZWQgdG8gcmVhZCBwbHVnaW4gY29tcG9uZW50cyBmcm9tICR7ZGlyUGF0aH06ICR7ZXJyb3JNc2d9YCxcbiAgICAgIHsgbGV2ZWw6ICdlcnJvcicgfSxcbiAgICApXG4gICAgbG9nRXJyb3IodG9FcnJvcihlcnJvcikpXG4gICAgLy8gUmV0dXJuIGVtcHR5IGFycmF5IHRvIGFsbG93IGdyYWNlZnVsIGRlZ3JhZGF0aW9uIC0gcGx1Z2luIGRldGFpbHMgY2FuIHN0aWxsIGJlIHNob3duXG4gICAgcmV0dXJuIFtdXG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgbGlzdCBvZiBza2lsbCBkaXJlY3RvcnkgbmFtZXMgZnJvbSBhIHNraWxscyBkaXJlY3RvcnlcbiAqIFNraWxscyBhcmUgZGlyZWN0b3JpZXMgY29udGFpbmluZyBhIFNLSUxMLm1kIGZpbGVcbiAqIEBwYXJhbSBkaXJQYXRoIFRoZSBza2lsbHMgZGlyZWN0b3J5IHBhdGggdG8gc2NhblxuICogQHJldHVybnMgQXJyYXkgb2Ygc2tpbGwgZGlyZWN0b3J5IG5hbWVzIHRoYXQgY29udGFpbiBTS0lMTC5tZFxuICogQGV4YW1wbGVcbiAqIC8vIEdpdmVuIGRpcmVjdG9yeSBjb250YWluczogbXktc2tpbGwvU0tJTEwubWQsIGFub3RoZXItc2tpbGwvU0tJTEwubWQsIFJFQURNRS50eHRcbiAqIGF3YWl0IGdldFNraWxsRGlyTmFtZXMoJy9wYXRoL3RvL3NraWxscycpXG4gKiAvLyBSZXR1cm5zOiBbJ215LXNraWxsJywgJ2Fub3RoZXItc2tpbGwnXVxuICovXG5hc3luYyBmdW5jdGlvbiBnZXRTa2lsbERpck5hbWVzKGRpclBhdGg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgZnMucmVhZGRpcihkaXJQYXRoLCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSlcbiAgICBjb25zdCBza2lsbE5hbWVzOiBzdHJpbmdbXSA9IFtdXG5cbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgIC8vIENoZWNrIGlmIGl0J3MgYSBkaXJlY3Rvcnkgb3Igc3ltbGluayAoc3ltbGlua3MgbWF5IHBvaW50IHRvIHNraWxsIGRpcmVjdG9yaWVzKVxuICAgICAgaWYgKGVudHJ5LmlzRGlyZWN0b3J5KCkgfHwgZW50cnkuaXNTeW1ib2xpY0xpbmsoKSkge1xuICAgICAgICAvLyBDaGVjayBpZiB0aGlzIGRpcmVjdG9yeSBjb250YWlucyBhIFNLSUxMLm1kIGZpbGVcbiAgICAgICAgY29uc3Qgc2tpbGxGaWxlUGF0aCA9IHBhdGguam9pbihkaXJQYXRoLCBlbnRyeS5uYW1lLCAnU0tJTEwubWQnKVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHN0ID0gYXdhaXQgZnMuc3RhdChza2lsbEZpbGVQYXRoKVxuICAgICAgICAgIGlmIChzdC5pc0ZpbGUoKSkge1xuICAgICAgICAgICAgc2tpbGxOYW1lcy5wdXNoKGVudHJ5Lm5hbWUpXG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAvLyBObyBTS0lMTC5tZCBmaWxlIGluIHRoaXMgZGlyZWN0b3J5LCBza2lwIGl0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2tpbGxOYW1lc1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IGVycm9yTXNnID0gZXJyb3JNZXNzYWdlKGVycm9yKVxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBGYWlsZWQgdG8gcmVhZCBza2lsbCBkaXJlY3RvcmllcyBmcm9tICR7ZGlyUGF0aH06ICR7ZXJyb3JNc2d9YCxcbiAgICAgIHsgbGV2ZWw6ICdlcnJvcicgfSxcbiAgICApXG4gICAgbG9nRXJyb3IodG9FcnJvcihlcnJvcikpXG4gICAgLy8gUmV0dXJuIGVtcHR5IGFycmF5IHRvIGFsbG93IGdyYWNlZnVsIGRlZ3JhZGF0aW9uIC0gcGx1Z2luIGRldGFpbHMgY2FuIHN0aWxsIGJlIHNob3duXG4gICAgcmV0dXJuIFtdXG4gIH1cbn1cblxuLy8gQ29tcG9uZW50IHRvIGRpc3BsYXkgaW5zdGFsbGVkIHBsdWdpbiBjb21wb25lbnRzXG5mdW5jdGlvbiBQbHVnaW5Db21wb25lbnRzRGlzcGxheSh7XG4gIHBsdWdpbixcbiAgbWFya2V0cGxhY2UsXG59OiB7XG4gIHBsdWdpbjogTG9hZGVkUGx1Z2luXG4gIG1hcmtldHBsYWNlOiBzdHJpbmdcbn0pOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBbY29tcG9uZW50cywgc2V0Q29tcG9uZW50c10gPSB1c2VTdGF0ZTx7XG4gICAgY29tbWFuZHM/OiBzdHJpbmcgfCBzdHJpbmdbXSB8IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgbnVsbFxuICAgIGFnZW50cz86IHN0cmluZyB8IHN0cmluZ1tdIHwgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBudWxsXG4gICAgc2tpbGxzPzogc3RyaW5nIHwgc3RyaW5nW10gfCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IG51bGxcbiAgICBob29rcz86IHVua25vd25cbiAgICBtY3BTZXJ2ZXJzPzogdW5rbm93blxuICB9IHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZENvbXBvbmVudHMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBCdWlsdC1pbiBwbHVnaW5zIGRvbid0IGhhdmUgYSBtYXJrZXRwbGFjZSBlbnRyeSDigJQgcmVhZCBmcm9tIHRoZVxuICAgICAgICAvLyByZWdpc3RlcmVkIGRlZmluaXRpb24gZGlyZWN0bHkuXG4gICAgICAgIGlmIChtYXJrZXRwbGFjZSA9PT0gJ2J1aWx0aW4nKSB7XG4gICAgICAgICAgY29uc3QgYnVpbHRpbkRlZiA9IGdldEJ1aWx0aW5QbHVnaW5EZWZpbml0aW9uKHBsdWdpbi5uYW1lKVxuICAgICAgICAgIGlmIChidWlsdGluRGVmKSB7XG4gICAgICAgICAgICBjb25zdCBza2lsbE5hbWVzID0gYnVpbHRpbkRlZi5za2lsbHM/Lm1hcChzID0+IHMubmFtZSkgPz8gW11cbiAgICAgICAgICAgIGNvbnN0IGhvb2tFdmVudHMgPSBidWlsdGluRGVmLmhvb2tzXG4gICAgICAgICAgICAgID8gT2JqZWN0LmtleXMoYnVpbHRpbkRlZi5ob29rcylcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgICAgY29uc3QgbWNwU2VydmVyTmFtZXMgPSBidWlsdGluRGVmLm1jcFNlcnZlcnNcbiAgICAgICAgICAgICAgPyBPYmplY3Qua2V5cyhidWlsdGluRGVmLm1jcFNlcnZlcnMpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICAgIHNldENvbXBvbmVudHMoe1xuICAgICAgICAgICAgICBjb21tYW5kczogbnVsbCxcbiAgICAgICAgICAgICAgYWdlbnRzOiBudWxsLFxuICAgICAgICAgICAgICBza2lsbHM6IHNraWxsTmFtZXMubGVuZ3RoID4gMCA/IHNraWxsTmFtZXMgOiBudWxsLFxuICAgICAgICAgICAgICBob29rczogaG9va0V2ZW50cy5sZW5ndGggPiAwID8gaG9va0V2ZW50cyA6IG51bGwsXG4gICAgICAgICAgICAgIG1jcFNlcnZlcnM6IG1jcFNlcnZlck5hbWVzLmxlbmd0aCA+IDAgPyBtY3BTZXJ2ZXJOYW1lcyA6IG51bGwsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRFcnJvcihgQnVpbHQtaW4gcGx1Z2luICR7cGx1Z2luLm5hbWV9IG5vdCBmb3VuZGApXG4gICAgICAgICAgfVxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtYXJrZXRwbGFjZURhdGEgPSBhd2FpdCBnZXRNYXJrZXRwbGFjZShtYXJrZXRwbGFjZSlcbiAgICAgICAgLy8gRmluZCB0aGUgcGx1Z2luIGVudHJ5IGluIHRoZSBhcnJheVxuICAgICAgICBjb25zdCBwbHVnaW5FbnRyeSA9IG1hcmtldHBsYWNlRGF0YS5wbHVnaW5zLmZpbmQoXG4gICAgICAgICAgcCA9PiBwLm5hbWUgPT09IHBsdWdpbi5uYW1lLFxuICAgICAgICApXG4gICAgICAgIGlmIChwbHVnaW5FbnRyeSkge1xuICAgICAgICAgIC8vIENvbWJpbmUgY29tbWFuZHMgZnJvbSBib3RoIHNvdXJjZXNcbiAgICAgICAgICBjb25zdCBjb21tYW5kUGF0aExpc3QgPSBbXVxuICAgICAgICAgIGlmIChwbHVnaW4uY29tbWFuZHNQYXRoKSB7XG4gICAgICAgICAgICBjb21tYW5kUGF0aExpc3QucHVzaChwbHVnaW4uY29tbWFuZHNQYXRoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocGx1Z2luLmNvbW1hbmRzUGF0aHMpIHtcbiAgICAgICAgICAgIGNvbW1hbmRQYXRoTGlzdC5wdXNoKC4uLnBsdWdpbi5jb21tYW5kc1BhdGhzKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEdldCBiYXNlIGZpbGUgbmFtZXMgZnJvbSBhbGwgY29tbWFuZCBwYXRoc1xuICAgICAgICAgIGNvbnN0IGNvbW1hbmRMaXN0OiBzdHJpbmdbXSA9IFtdXG4gICAgICAgICAgZm9yIChjb25zdCBjb21tYW5kUGF0aCBvZiBjb21tYW5kUGF0aExpc3QpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29tbWFuZFBhdGggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIC8vIGNvbW1hbmRQYXRoIGlzIGFscmVhZHkgYSBmdWxsIHBhdGhcbiAgICAgICAgICAgICAgY29uc3QgYmFzZU5hbWVzID0gYXdhaXQgZ2V0QmFzZUZpbGVOYW1lcyhjb21tYW5kUGF0aClcbiAgICAgICAgICAgICAgY29tbWFuZExpc3QucHVzaCguLi5iYXNlTmFtZXMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ29tYmluZSBhZ2VudHMgZnJvbSBib3RoIHNvdXJjZXNcbiAgICAgICAgICBjb25zdCBhZ2VudFBhdGhMaXN0ID0gW11cbiAgICAgICAgICBpZiAocGx1Z2luLmFnZW50c1BhdGgpIHtcbiAgICAgICAgICAgIGFnZW50UGF0aExpc3QucHVzaChwbHVnaW4uYWdlbnRzUGF0aClcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHBsdWdpbi5hZ2VudHNQYXRocykge1xuICAgICAgICAgICAgYWdlbnRQYXRoTGlzdC5wdXNoKC4uLnBsdWdpbi5hZ2VudHNQYXRocylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBHZXQgYmFzZSBmaWxlIG5hbWVzIGZyb20gYWxsIGFnZW50IHBhdGhzXG4gICAgICAgICAgY29uc3QgYWdlbnRMaXN0OiBzdHJpbmdbXSA9IFtdXG4gICAgICAgICAgZm9yIChjb25zdCBhZ2VudFBhdGggb2YgYWdlbnRQYXRoTGlzdCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhZ2VudFBhdGggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIC8vIGFnZW50UGF0aCBpcyBhbHJlYWR5IGEgZnVsbCBwYXRoXG4gICAgICAgICAgICAgIGNvbnN0IGJhc2VOYW1lcyA9IGF3YWl0IGdldEJhc2VGaWxlTmFtZXMoYWdlbnRQYXRoKVxuICAgICAgICAgICAgICBhZ2VudExpc3QucHVzaCguLi5iYXNlTmFtZXMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ29tYmluZSBza2lsbHMgZnJvbSBib3RoIHNvdXJjZXNcbiAgICAgICAgICBjb25zdCBza2lsbFBhdGhMaXN0ID0gW11cbiAgICAgICAgICBpZiAocGx1Z2luLnNraWxsc1BhdGgpIHtcbiAgICAgICAgICAgIHNraWxsUGF0aExpc3QucHVzaChwbHVnaW4uc2tpbGxzUGF0aClcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHBsdWdpbi5za2lsbHNQYXRocykge1xuICAgICAgICAgICAgc2tpbGxQYXRoTGlzdC5wdXNoKC4uLnBsdWdpbi5za2lsbHNQYXRocylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBHZXQgc2tpbGwgZGlyZWN0b3J5IG5hbWVzIGZyb20gYWxsIHNraWxsIHBhdGhzXG4gICAgICAgICAgLy8gU2tpbGxzIGFyZSBkaXJlY3RvcmllcyBjb250YWluaW5nIFNLSUxMLm1kIGZpbGVzXG4gICAgICAgICAgY29uc3Qgc2tpbGxMaXN0OiBzdHJpbmdbXSA9IFtdXG4gICAgICAgICAgZm9yIChjb25zdCBza2lsbFBhdGggb2Ygc2tpbGxQYXRoTGlzdCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBza2lsbFBhdGggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIC8vIHNraWxsUGF0aCBpcyBhbHJlYWR5IGEgZnVsbCBwYXRoIHRvIGEgc2tpbGxzIGRpcmVjdG9yeVxuICAgICAgICAgICAgICBjb25zdCBza2lsbERpck5hbWVzID0gYXdhaXQgZ2V0U2tpbGxEaXJOYW1lcyhza2lsbFBhdGgpXG4gICAgICAgICAgICAgIHNraWxsTGlzdC5wdXNoKC4uLnNraWxsRGlyTmFtZXMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ29tYmluZSBob29rcyBmcm9tIGJvdGggc291cmNlc1xuICAgICAgICAgIGNvbnN0IGhvb2tzTGlzdCA9IFtdXG4gICAgICAgICAgaWYgKHBsdWdpbi5ob29rc0NvbmZpZykge1xuICAgICAgICAgICAgaG9va3NMaXN0LnB1c2goT2JqZWN0LmtleXMocGx1Z2luLmhvb2tzQ29uZmlnKSlcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHBsdWdpbkVudHJ5Lmhvb2tzKSB7XG4gICAgICAgICAgICBob29rc0xpc3QucHVzaChwbHVnaW5FbnRyeS5ob29rcylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDb21iaW5lIE1DUCBzZXJ2ZXJzIGZyb20gYm90aCBzb3VyY2VzXG4gICAgICAgICAgY29uc3QgbWNwU2VydmVyc0xpc3QgPSBbXVxuICAgICAgICAgIGlmIChwbHVnaW4ubWNwU2VydmVycykge1xuICAgICAgICAgICAgbWNwU2VydmVyc0xpc3QucHVzaChPYmplY3Qua2V5cyhwbHVnaW4ubWNwU2VydmVycykpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwbHVnaW5FbnRyeS5tY3BTZXJ2ZXJzKSB7XG4gICAgICAgICAgICBtY3BTZXJ2ZXJzTGlzdC5wdXNoKHBsdWdpbkVudHJ5Lm1jcFNlcnZlcnMpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2V0Q29tcG9uZW50cyh7XG4gICAgICAgICAgICBjb21tYW5kczogY29tbWFuZExpc3QubGVuZ3RoID4gMCA/IGNvbW1hbmRMaXN0IDogbnVsbCxcbiAgICAgICAgICAgIGFnZW50czogYWdlbnRMaXN0Lmxlbmd0aCA+IDAgPyBhZ2VudExpc3QgOiBudWxsLFxuICAgICAgICAgICAgc2tpbGxzOiBza2lsbExpc3QubGVuZ3RoID4gMCA/IHNraWxsTGlzdCA6IG51bGwsXG4gICAgICAgICAgICBob29rczogaG9va3NMaXN0Lmxlbmd0aCA+IDAgPyBob29rc0xpc3QgOiBudWxsLFxuICAgICAgICAgICAgbWNwU2VydmVyczogbWNwU2VydmVyc0xpc3QubGVuZ3RoID4gMCA/IG1jcFNlcnZlcnNMaXN0IDogbnVsbCxcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldEVycm9yKGBQbHVnaW4gJHtwbHVnaW4ubmFtZX0gbm90IGZvdW5kIGluIG1hcmtldHBsYWNlYClcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHNldEVycm9yKFxuICAgICAgICAgIGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGxvYWQgY29tcG9uZW50cycsXG4gICAgICAgIClcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICB9XG4gICAgfVxuICAgIHZvaWQgbG9hZENvbXBvbmVudHMoKVxuICB9LCBbXG4gICAgcGx1Z2luLm5hbWUsXG4gICAgcGx1Z2luLmNvbW1hbmRzUGF0aCxcbiAgICBwbHVnaW4uY29tbWFuZHNQYXRocyxcbiAgICBwbHVnaW4uYWdlbnRzUGF0aCxcbiAgICBwbHVnaW4uYWdlbnRzUGF0aHMsXG4gICAgcGx1Z2luLnNraWxsc1BhdGgsXG4gICAgcGx1Z2luLnNraWxsc1BhdGhzLFxuICAgIHBsdWdpbi5ob29rc0NvbmZpZyxcbiAgICBwbHVnaW4ubWNwU2VydmVycyxcbiAgICBtYXJrZXRwbGFjZSxcbiAgXSlcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiBudWxsIC8vIERvbid0IHNob3cgbG9hZGluZyBzdGF0ZSBmb3IgY2xlYW5lciBVSVxuICB9XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpbkJvdHRvbT17MX0+XG4gICAgICAgIDxUZXh0IGJvbGQ+Q29tcG9uZW50czo8L1RleHQ+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPkVycm9yOiB7ZXJyb3J9PC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgaWYgKCFjb21wb25lbnRzKSB7XG4gICAgcmV0dXJuIG51bGwgLy8gTm8gY29tcG9uZW50cyBpbmZvIGF2YWlsYWJsZVxuICB9XG5cbiAgY29uc3QgaGFzQ29tcG9uZW50cyA9XG4gICAgY29tcG9uZW50cy5jb21tYW5kcyB8fFxuICAgIGNvbXBvbmVudHMuYWdlbnRzIHx8XG4gICAgY29tcG9uZW50cy5za2lsbHMgfHxcbiAgICBjb21wb25lbnRzLmhvb2tzIHx8XG4gICAgY29tcG9uZW50cy5tY3BTZXJ2ZXJzXG5cbiAgaWYgKCFoYXNDb21wb25lbnRzKSB7XG4gICAgcmV0dXJuIG51bGwgLy8gTm8gY29tcG9uZW50cyBkZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpbkJvdHRvbT17MX0+XG4gICAgICA8VGV4dCBib2xkPkluc3RhbGxlZCBjb21wb25lbnRzOjwvVGV4dD5cbiAgICAgIHtjb21wb25lbnRzLmNvbW1hbmRzID8gKFxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICDigKIgQ29tbWFuZHM6eycgJ31cbiAgICAgICAgICB7dHlwZW9mIGNvbXBvbmVudHMuY29tbWFuZHMgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICA/IGNvbXBvbmVudHMuY29tbWFuZHNcbiAgICAgICAgICAgIDogQXJyYXkuaXNBcnJheShjb21wb25lbnRzLmNvbW1hbmRzKVxuICAgICAgICAgICAgICA/IGNvbXBvbmVudHMuY29tbWFuZHMuam9pbignLCAnKVxuICAgICAgICAgICAgICA6IE9iamVjdC5rZXlzKGNvbXBvbmVudHMuY29tbWFuZHMpLmpvaW4oJywgJyl9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICkgOiBudWxsfVxuICAgICAge2NvbXBvbmVudHMuYWdlbnRzID8gKFxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICDigKIgQWdlbnRzOnsnICd9XG4gICAgICAgICAge3R5cGVvZiBjb21wb25lbnRzLmFnZW50cyA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgID8gY29tcG9uZW50cy5hZ2VudHNcbiAgICAgICAgICAgIDogQXJyYXkuaXNBcnJheShjb21wb25lbnRzLmFnZW50cylcbiAgICAgICAgICAgICAgPyBjb21wb25lbnRzLmFnZW50cy5qb2luKCcsICcpXG4gICAgICAgICAgICAgIDogT2JqZWN0LmtleXMoY29tcG9uZW50cy5hZ2VudHMpLmpvaW4oJywgJyl9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICkgOiBudWxsfVxuICAgICAge2NvbXBvbmVudHMuc2tpbGxzID8gKFxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICDigKIgU2tpbGxzOnsnICd9XG4gICAgICAgICAge3R5cGVvZiBjb21wb25lbnRzLnNraWxscyA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgID8gY29tcG9uZW50cy5za2lsbHNcbiAgICAgICAgICAgIDogQXJyYXkuaXNBcnJheShjb21wb25lbnRzLnNraWxscylcbiAgICAgICAgICAgICAgPyBjb21wb25lbnRzLnNraWxscy5qb2luKCcsICcpXG4gICAgICAgICAgICAgIDogT2JqZWN0LmtleXMoY29tcG9uZW50cy5za2lsbHMpLmpvaW4oJywgJyl9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICkgOiBudWxsfVxuICAgICAge2NvbXBvbmVudHMuaG9va3MgPyAoXG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgIOKAoiBIb29rczp7JyAnfVxuICAgICAgICAgIHt0eXBlb2YgY29tcG9uZW50cy5ob29rcyA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgID8gY29tcG9uZW50cy5ob29rc1xuICAgICAgICAgICAgOiBBcnJheS5pc0FycmF5KGNvbXBvbmVudHMuaG9va3MpXG4gICAgICAgICAgICAgID8gY29tcG9uZW50cy5ob29rcy5tYXAoU3RyaW5nKS5qb2luKCcsICcpXG4gICAgICAgICAgICAgIDogdHlwZW9mIGNvbXBvbmVudHMuaG9va3MgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmhvb2tzICE9PSBudWxsXG4gICAgICAgICAgICAgICAgPyBPYmplY3Qua2V5cyhjb21wb25lbnRzLmhvb2tzKS5qb2luKCcsICcpXG4gICAgICAgICAgICAgICAgOiBTdHJpbmcoY29tcG9uZW50cy5ob29rcyl9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICkgOiBudWxsfVxuICAgICAge2NvbXBvbmVudHMubWNwU2VydmVycyA/IChcbiAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAg4oCiIE1DUCBTZXJ2ZXJzOnsnICd9XG4gICAgICAgICAge3R5cGVvZiBjb21wb25lbnRzLm1jcFNlcnZlcnMgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICA/IGNvbXBvbmVudHMubWNwU2VydmVyc1xuICAgICAgICAgICAgOiBBcnJheS5pc0FycmF5KGNvbXBvbmVudHMubWNwU2VydmVycylcbiAgICAgICAgICAgICAgPyBjb21wb25lbnRzLm1jcFNlcnZlcnMubWFwKFN0cmluZykuam9pbignLCAnKVxuICAgICAgICAgICAgICA6IHR5cGVvZiBjb21wb25lbnRzLm1jcFNlcnZlcnMgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnRzLm1jcFNlcnZlcnMgIT09IG51bGxcbiAgICAgICAgICAgICAgICA/IE9iamVjdC5rZXlzKGNvbXBvbmVudHMubWNwU2VydmVycykuam9pbignLCAnKVxuICAgICAgICAgICAgICAgIDogU3RyaW5nKGNvbXBvbmVudHMubWNwU2VydmVycyl9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvQm94PlxuICApXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBwbHVnaW4gaXMgZnJvbSBhIGxvY2FsIHNvdXJjZSBhbmQgY2Fubm90IGJlIHJlbW90ZWx5IHVwZGF0ZWRcbiAqIEByZXR1cm5zIEVycm9yIG1lc3NhZ2UgaWYgbG9jYWwsIG51bGwgaWYgcmVtb3RlL3VwZGF0YWJsZVxuICovXG5hc3luYyBmdW5jdGlvbiBjaGVja0lmTG9jYWxQbHVnaW4oXG4gIHBsdWdpbk5hbWU6IHN0cmluZyxcbiAgbWFya2V0cGxhY2VOYW1lOiBzdHJpbmcsXG4pOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgY29uc3QgbWFya2V0cGxhY2UgPSBhd2FpdCBnZXRNYXJrZXRwbGFjZShtYXJrZXRwbGFjZU5hbWUpXG4gIGNvbnN0IGVudHJ5ID0gbWFya2V0cGxhY2U/LnBsdWdpbnMuZmluZChwID0+IHAubmFtZSA9PT0gcGx1Z2luTmFtZSlcblxuICBpZiAoZW50cnkgJiYgdHlwZW9mIGVudHJ5LnNvdXJjZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gYExvY2FsIHBsdWdpbnMgY2Fubm90IGJlIHVwZGF0ZWQgcmVtb3RlbHkuIFRvIHVwZGF0ZSwgbW9kaWZ5IHRoZSBzb3VyY2UgYXQ6ICR7ZW50cnkuc291cmNlfWBcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbi8qKlxuICogRmlsdGVyIG91dCBwbHVnaW5zIHRoYXQgYXJlIGZvcmNlLWRpc2FibGVkIGJ5IG9yZyBwb2xpY3kgKHBvbGljeVNldHRpbmdzKS5cbiAqIFRoZXNlIGFyZSBibG9ja2VkIGJ5IHRoZSBvcmdhbml6YXRpb24gYW5kIGNhbm5vdCBiZSByZS1lbmFibGVkIGJ5IHRoZSB1c2VyLlxuICogQ2hlY2tzIHBvbGljeVNldHRpbmdzIGRpcmVjdGx5IHJhdGhlciB0aGFuIGluc3RhbGxhdGlvbiBzY29wZSwgc2luY2UgbWFuYWdlZFxuICogc2V0dGluZ3MgZG9uJ3QgY3JlYXRlIGluc3RhbGxhdGlvbiByZWNvcmRzIHdpdGggc2NvcGUgJ21hbmFnZWQnLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyTWFuYWdlZERpc2FibGVkUGx1Z2lucyhcbiAgcGx1Z2luczogTG9hZGVkUGx1Z2luW10sXG4pOiBMb2FkZWRQbHVnaW5bXSB7XG4gIHJldHVybiBwbHVnaW5zLmZpbHRlcihwbHVnaW4gPT4ge1xuICAgIGNvbnN0IG1hcmtldHBsYWNlID0gcGx1Z2luLnNvdXJjZS5zcGxpdCgnQCcpWzFdIHx8ICdsb2NhbCdcbiAgICByZXR1cm4gIWlzUGx1Z2luQmxvY2tlZEJ5UG9saWN5KGAke3BsdWdpbi5uYW1lfUAke21hcmtldHBsYWNlfWApXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBNYW5hZ2VQbHVnaW5zKHtcbiAgc2V0Vmlld1N0YXRlOiBzZXRQYXJlbnRWaWV3U3RhdGUsXG4gIHNldFJlc3VsdCxcbiAgb25NYW5hZ2VDb21wbGV0ZSxcbiAgb25TZWFyY2hNb2RlQ2hhbmdlLFxuICB0YXJnZXRQbHVnaW4sXG4gIHRhcmdldE1hcmtldHBsYWNlLFxuICBhY3Rpb24sXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIC8vIEFwcCBzdGF0ZSBmb3IgTUNQIGFjY2Vzc1xuICBjb25zdCBtY3BDbGllbnRzID0gdXNlQXBwU3RhdGUocyA9PiBzLm1jcC5jbGllbnRzKVxuICBjb25zdCBtY3BUb29scyA9IHVzZUFwcFN0YXRlKHMgPT4gcy5tY3AudG9vbHMpXG4gIGNvbnN0IHBsdWdpbkVycm9ycyA9IHVzZUFwcFN0YXRlKHMgPT4gcy5wbHVnaW5zLmVycm9ycylcbiAgY29uc3QgZmxhZ2dlZFBsdWdpbnMgPSBnZXRGbGFnZ2VkUGx1Z2lucygpXG5cbiAgLy8gU2VhcmNoIHN0YXRlXG4gIGNvbnN0IFtpc1NlYXJjaE1vZGUsIHNldElzU2VhcmNoTW9kZVJhd10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3Qgc2V0SXNTZWFyY2hNb2RlID0gdXNlQ2FsbGJhY2soXG4gICAgKGFjdGl2ZTogYm9vbGVhbikgPT4ge1xuICAgICAgc2V0SXNTZWFyY2hNb2RlUmF3KGFjdGl2ZSlcbiAgICAgIG9uU2VhcmNoTW9kZUNoYW5nZT8uKGFjdGl2ZSlcbiAgICB9LFxuICAgIFtvblNlYXJjaE1vZGVDaGFuZ2VdLFxuICApXG4gIGNvbnN0IGlzVGVybWluYWxGb2N1c2VkID0gdXNlVGVybWluYWxGb2N1cygpXG4gIGNvbnN0IHsgY29sdW1uczogdGVybWluYWxXaWR0aCB9ID0gdXNlVGVybWluYWxTaXplKClcblxuICAvLyBWaWV3IHN0YXRlXG4gIGNvbnN0IFt2aWV3U3RhdGUsIHNldFZpZXdTdGF0ZV0gPSB1c2VTdGF0ZTxWaWV3U3RhdGU+KCdwbHVnaW4tbGlzdCcpXG5cbiAgY29uc3Qge1xuICAgIHF1ZXJ5OiBzZWFyY2hRdWVyeSxcbiAgICBzZXRRdWVyeTogc2V0U2VhcmNoUXVlcnksXG4gICAgY3Vyc29yT2Zmc2V0OiBzZWFyY2hDdXJzb3JPZmZzZXQsXG4gIH0gPSB1c2VTZWFyY2hJbnB1dCh7XG4gICAgaXNBY3RpdmU6IHZpZXdTdGF0ZSA9PT0gJ3BsdWdpbi1saXN0JyAmJiBpc1NlYXJjaE1vZGUsXG4gICAgb25FeGl0OiAoKSA9PiB7XG4gICAgICBzZXRJc1NlYXJjaE1vZGUoZmFsc2UpXG4gICAgfSxcbiAgfSlcbiAgY29uc3QgW3NlbGVjdGVkUGx1Z2luLCBzZXRTZWxlY3RlZFBsdWdpbl0gPSB1c2VTdGF0ZTxQbHVnaW5TdGF0ZSB8IG51bGw+KG51bGwpXG5cbiAgLy8gRGF0YSBzdGF0ZVxuICBjb25zdCBbbWFya2V0cGxhY2VzLCBzZXRNYXJrZXRwbGFjZXNdID0gdXNlU3RhdGU8TWFya2V0cGxhY2VJbmZvW10+KFtdKVxuICBjb25zdCBbcGx1Z2luU3RhdGVzLCBzZXRQbHVnaW5TdGF0ZXNdID0gdXNlU3RhdGU8UGx1Z2luU3RhdGVbXT4oW10pXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtwZW5kaW5nVG9nZ2xlcywgc2V0UGVuZGluZ1RvZ2dsZXNdID0gdXNlU3RhdGU8XG4gICAgTWFwPHN0cmluZywgJ3dpbGwtZW5hYmxlJyB8ICd3aWxsLWRpc2FibGUnPlxuICA+KG5ldyBNYXAoKSlcblxuICAvLyBHdWFyZCB0byBwcmV2ZW50IGF1dG8tbmF2aWdhdGlvbiBmcm9tIHJlLXRyaWdnZXJpbmcgYWZ0ZXIgdGhlIHVzZXJcbiAgLy8gbmF2aWdhdGVzIGF3YXkgKHRhcmdldFBsdWdpbiBpcyBuZXZlciBjbGVhcmVkIGJ5IHRoZSBwYXJlbnQpLlxuICBjb25zdCBoYXNBdXRvTmF2aWdhdGVkID0gdXNlUmVmKGZhbHNlKVxuICAvLyBBdXRvLWFjdGlvbiAoZW5hYmxlL2Rpc2FibGUvdW5pbnN0YWxsKSB0byBmaXJlIGFmdGVyIGF1dG8tbmF2aWdhdGlvbiBsYW5kcy5cbiAgLy8gUmVmLCBub3Qgc3RhdGU6IGl0J3MgY29uc3VtZWQgYnkgYSBvbmUtc2hvdCBlZmZlY3QgdGhhdCBhbHJlYWR5IHJlLXJ1bnMgb25cbiAgLy8gdmlld1N0YXRlL3NlbGVjdGVkUGx1Z2luLCBzbyBhIHJlbmRlci10cmlnZ2VyaW5nIHN0YXRlIHZhciB3b3VsZCBiZSByZWR1bmRhbnQuXG4gIGNvbnN0IHBlbmRpbmdBdXRvQWN0aW9uUmVmID0gdXNlUmVmPFxuICAgICdlbmFibGUnIHwgJ2Rpc2FibGUnIHwgJ3VuaW5zdGFsbCcgfCB1bmRlZmluZWRcbiAgPih1bmRlZmluZWQpXG5cbiAgLy8gTUNQIHRvZ2dsZSBob29rXG4gIGNvbnN0IHRvZ2dsZU1jcFNlcnZlciA9IHVzZU1jcFRvZ2dsZUVuYWJsZWQoKVxuXG4gIC8vIEhhbmRsZSBlc2NhcGUgdG8gZ28gYmFjayAtIHZpZXdTdGF0ZS1kZXBlbmRlbnQgbmF2aWdhdGlvblxuICBjb25zdCBoYW5kbGVCYWNrID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICh2aWV3U3RhdGUgPT09ICdwbHVnaW4tZGV0YWlscycpIHtcbiAgICAgIHNldFZpZXdTdGF0ZSgncGx1Z2luLWxpc3QnKVxuICAgICAgc2V0U2VsZWN0ZWRQbHVnaW4obnVsbClcbiAgICAgIHNldFByb2Nlc3NFcnJvcihudWxsKVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0eXBlb2Ygdmlld1N0YXRlID09PSAnb2JqZWN0JyAmJlxuICAgICAgdmlld1N0YXRlLnR5cGUgPT09ICdmYWlsZWQtcGx1Z2luLWRldGFpbHMnXG4gICAgKSB7XG4gICAgICBzZXRWaWV3U3RhdGUoJ3BsdWdpbi1saXN0JylcbiAgICAgIHNldFByb2Nlc3NFcnJvcihudWxsKVxuICAgIH0gZWxzZSBpZiAodmlld1N0YXRlID09PSAnY29uZmlndXJpbmcnKSB7XG4gICAgICBzZXRWaWV3U3RhdGUoJ3BsdWdpbi1kZXRhaWxzJylcbiAgICAgIHNldENvbmZpZ05lZWRlZChudWxsKVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0eXBlb2Ygdmlld1N0YXRlID09PSAnb2JqZWN0JyAmJlxuICAgICAgKHZpZXdTdGF0ZS50eXBlID09PSAncGx1Z2luLW9wdGlvbnMnIHx8XG4gICAgICAgIHZpZXdTdGF0ZS50eXBlID09PSAnY29uZmlndXJpbmctb3B0aW9ucycpXG4gICAgKSB7XG4gICAgICAvLyBDYW5jZWwgbWlkLXNlcXVlbmNlIOKAlCBwbHVnaW4gaXMgYWxyZWFkeSBlbmFibGVkLCBqdXN0IGJhaWwgdG8gbGlzdC5cbiAgICAgIC8vIFVzZXIgY2FuIGNvbmZpZ3VyZSBsYXRlciB2aWEgdGhlIENvbmZpZ3VyZSBvcHRpb25zIG1lbnUgaWYgdGhleSB3YW50LlxuICAgICAgc2V0Vmlld1N0YXRlKCdwbHVnaW4tbGlzdCcpXG4gICAgICBzZXRTZWxlY3RlZFBsdWdpbihudWxsKVxuICAgICAgc2V0UmVzdWx0KFxuICAgICAgICAnUGx1Z2luIGVuYWJsZWQuIENvbmZpZ3VyYXRpb24gc2tpcHBlZCDigJQgcnVuIC9yZWxvYWQtcGx1Z2lucyB0byBhcHBseS4nLFxuICAgICAgKVxuICAgICAgaWYgKG9uTWFuYWdlQ29tcGxldGUpIHtcbiAgICAgICAgdm9pZCBvbk1hbmFnZUNvbXBsZXRlKClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdHlwZW9mIHZpZXdTdGF0ZSA9PT0gJ29iamVjdCcgJiZcbiAgICAgIHZpZXdTdGF0ZS50eXBlID09PSAnZmxhZ2dlZC1kZXRhaWwnXG4gICAgKSB7XG4gICAgICBzZXRWaWV3U3RhdGUoJ3BsdWdpbi1saXN0JylcbiAgICAgIHNldFByb2Nlc3NFcnJvcihudWxsKVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0eXBlb2Ygdmlld1N0YXRlID09PSAnb2JqZWN0JyAmJlxuICAgICAgdmlld1N0YXRlLnR5cGUgPT09ICdtY3AtZGV0YWlsJ1xuICAgICkge1xuICAgICAgc2V0Vmlld1N0YXRlKCdwbHVnaW4tbGlzdCcpXG4gICAgICBzZXRQcm9jZXNzRXJyb3IobnVsbClcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdHlwZW9mIHZpZXdTdGF0ZSA9PT0gJ29iamVjdCcgJiZcbiAgICAgIHZpZXdTdGF0ZS50eXBlID09PSAnbWNwLXRvb2xzJ1xuICAgICkge1xuICAgICAgc2V0Vmlld1N0YXRlKHsgdHlwZTogJ21jcC1kZXRhaWwnLCBjbGllbnQ6IHZpZXdTdGF0ZS5jbGllbnQgfSlcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdHlwZW9mIHZpZXdTdGF0ZSA9PT0gJ29iamVjdCcgJiZcbiAgICAgIHZpZXdTdGF0ZS50eXBlID09PSAnbWNwLXRvb2wtZGV0YWlsJ1xuICAgICkge1xuICAgICAgc2V0Vmlld1N0YXRlKHsgdHlwZTogJ21jcC10b29scycsIGNsaWVudDogdmlld1N0YXRlLmNsaWVudCB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocGVuZGluZ1RvZ2dsZXMuc2l6ZSA+IDApIHtcbiAgICAgICAgc2V0UmVzdWx0KCdSdW4gL3JlbG9hZC1wbHVnaW5zIHRvIGFwcGx5IHBsdWdpbiBjaGFuZ2VzLicpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgc2V0UGFyZW50Vmlld1N0YXRlKHsgdHlwZTogJ21lbnUnIH0pXG4gICAgfVxuICB9LCBbdmlld1N0YXRlLCBzZXRQYXJlbnRWaWV3U3RhdGUsIHBlbmRpbmdUb2dnbGVzLCBzZXRSZXN1bHRdKVxuXG4gIC8vIEVzY2FwZSB3aGVuIG5vdCBpbiBzZWFyY2ggbW9kZSAtIGdvIGJhY2suXG4gIC8vIEV4Y2x1ZGVzIGNvbmZpcm0tcHJvamVjdC11bmluc3RhbGwgKGhhcyBpdHMgb3duIGNvbmZpcm06bm8gaGFuZGxlciBpblxuICAvLyBDb25maXJtYXRpb24gY29udGV4dCDigJQgbGV0dGluZyB0aGlzIGZpcmUgd291bGQgY3JlYXRlIGNvbXBldGluZyBoYW5kbGVycylcbiAgLy8gYW5kIGNvbmZpcm0tZGF0YS1jbGVhbnVwICh1c2VzIHJhdyB1c2VJbnB1dCB3aGVyZSBuIGFuZCBlc2NhcGUgYXJlXG4gIC8vIERJRkZFUkVOVCBhY3Rpb25zOiBrZWVwLWRhdGEgdnMgY2FuY2VsKS5cbiAgdXNlS2V5YmluZGluZygnY29uZmlybTpubycsIGhhbmRsZUJhY2ssIHtcbiAgICBjb250ZXh0OiAnQ29uZmlybWF0aW9uJyxcbiAgICBpc0FjdGl2ZTpcbiAgICAgICh2aWV3U3RhdGUgIT09ICdwbHVnaW4tbGlzdCcgfHwgIWlzU2VhcmNoTW9kZSkgJiZcbiAgICAgIHZpZXdTdGF0ZSAhPT0gJ2NvbmZpcm0tcHJvamVjdC11bmluc3RhbGwnICYmXG4gICAgICAhKFxuICAgICAgICB0eXBlb2Ygdmlld1N0YXRlID09PSAnb2JqZWN0JyAmJlxuICAgICAgICB2aWV3U3RhdGUudHlwZSA9PT0gJ2NvbmZpcm0tZGF0YS1jbGVhbnVwJ1xuICAgICAgKSxcbiAgfSlcblxuICAvLyBIZWxwZXIgdG8gZ2V0IE1DUCBzdGF0dXNcbiAgY29uc3QgZ2V0TWNwU3RhdHVzID0gKFxuICAgIGNsaWVudDogTUNQU2VydmVyQ29ubmVjdGlvbixcbiAgKTogJ2Nvbm5lY3RlZCcgfCAnZGlzYWJsZWQnIHwgJ3BlbmRpbmcnIHwgJ25lZWRzLWF1dGgnIHwgJ2ZhaWxlZCcgPT4ge1xuICAgIGlmIChjbGllbnQudHlwZSA9PT0gJ2Nvbm5lY3RlZCcpIHJldHVybiAnY29ubmVjdGVkJ1xuICAgIGlmIChjbGllbnQudHlwZSA9PT0gJ2Rpc2FibGVkJykgcmV0dXJuICdkaXNhYmxlZCdcbiAgICBpZiAoY2xpZW50LnR5cGUgPT09ICdwZW5kaW5nJykgcmV0dXJuICdwZW5kaW5nJ1xuICAgIGlmIChjbGllbnQudHlwZSA9PT0gJ25lZWRzLWF1dGgnKSByZXR1cm4gJ25lZWRzLWF1dGgnXG4gICAgcmV0dXJuICdmYWlsZWQnXG4gIH1cblxuICAvLyBEZXJpdmUgdW5pZmllZCBpdGVtcyBmcm9tIHBsdWdpbnMgYW5kIE1DUCBzZXJ2ZXJzXG4gIGNvbnN0IHVuaWZpZWRJdGVtcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IG1lcmdlZFNldHRpbmdzID0gZ2V0U2V0dGluZ3NfREVQUkVDQVRFRCgpXG5cbiAgICAvLyBCdWlsZCBtYXAgb2YgcGx1Z2luIG5hbWUgLT4gY2hpbGQgTUNQc1xuICAgIC8vIFBsdWdpbiBNQ1BzIGhhdmUgbmFtZXMgbGlrZSBcInBsdWdpbjpwbHVnaW5OYW1lOnNlcnZlck5hbWVcIlxuICAgIGNvbnN0IHBsdWdpbk1jcE1hcCA9IG5ldyBNYXA8XG4gICAgICBzdHJpbmcsXG4gICAgICBBcnJheTx7IGRpc3BsYXlOYW1lOiBzdHJpbmc7IGNsaWVudDogTUNQU2VydmVyQ29ubmVjdGlvbiB9PlxuICAgID4oKVxuICAgIGZvciAoY29uc3QgY2xpZW50IG9mIG1jcENsaWVudHMpIHtcbiAgICAgIGlmIChjbGllbnQubmFtZS5zdGFydHNXaXRoKCdwbHVnaW46JykpIHtcbiAgICAgICAgY29uc3QgcGFydHMgPSBjbGllbnQubmFtZS5zcGxpdCgnOicpXG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPj0gMykge1xuICAgICAgICAgIGNvbnN0IHBsdWdpbk5hbWUgPSBwYXJ0c1sxXSFcbiAgICAgICAgICBjb25zdCBzZXJ2ZXJOYW1lID0gcGFydHMuc2xpY2UoMikuam9pbignOicpXG4gICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBwbHVnaW5NY3BNYXAuZ2V0KHBsdWdpbk5hbWUpIHx8IFtdXG4gICAgICAgICAgZXhpc3RpbmcucHVzaCh7IGRpc3BsYXlOYW1lOiBzZXJ2ZXJOYW1lLCBjbGllbnQgfSlcbiAgICAgICAgICBwbHVnaW5NY3BNYXAuc2V0KHBsdWdpbk5hbWUsIGV4aXN0aW5nKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQnVpbGQgcGx1Z2luIGl0ZW1zICh1bnNvcnRlZCBmb3Igbm93KVxuICAgIHR5cGUgUGx1Z2luV2l0aENoaWxkcmVuID0ge1xuICAgICAgaXRlbTogVW5pZmllZEluc3RhbGxlZEl0ZW0gJiB7IHR5cGU6ICdwbHVnaW4nIH1cbiAgICAgIG9yaWdpbmFsU2NvcGU6ICd1c2VyJyB8ICdwcm9qZWN0JyB8ICdsb2NhbCcgfCAnbWFuYWdlZCcgfCAnYnVpbHRpbidcbiAgICAgIGNoaWxkTWNwczogQXJyYXk8eyBkaXNwbGF5TmFtZTogc3RyaW5nOyBjbGllbnQ6IE1DUFNlcnZlckNvbm5lY3Rpb24gfT5cbiAgICB9XG4gICAgY29uc3QgcGx1Z2luc1dpdGhDaGlsZHJlbjogUGx1Z2luV2l0aENoaWxkcmVuW10gPSBbXVxuXG4gICAgZm9yIChjb25zdCBzdGF0ZSBvZiBwbHVnaW5TdGF0ZXMpIHtcbiAgICAgIGNvbnN0IHBsdWdpbklkID0gYCR7c3RhdGUucGx1Z2luLm5hbWV9QCR7c3RhdGUubWFya2V0cGxhY2V9YFxuICAgICAgY29uc3QgaXNFbmFibGVkID0gbWVyZ2VkU2V0dGluZ3M/LmVuYWJsZWRQbHVnaW5zPy5bcGx1Z2luSWRdICE9PSBmYWxzZVxuICAgICAgY29uc3QgZXJyb3JzID0gcGx1Z2luRXJyb3JzLmZpbHRlcihcbiAgICAgICAgZSA9PlxuICAgICAgICAgICgncGx1Z2luJyBpbiBlICYmIGUucGx1Z2luID09PSBzdGF0ZS5wbHVnaW4ubmFtZSkgfHxcbiAgICAgICAgICBlLnNvdXJjZSA9PT0gcGx1Z2luSWQgfHxcbiAgICAgICAgICBlLnNvdXJjZS5zdGFydHNXaXRoKGAke3N0YXRlLnBsdWdpbi5uYW1lfUBgKSxcbiAgICAgIClcblxuICAgICAgLy8gQnVpbHQtaW4gcGx1Z2lucyB1c2UgJ2J1aWx0aW4nIHNjb3BlOyBvdGhlcnMgbG9vayB1cCBmcm9tIFYyIGRhdGEuXG4gICAgICBjb25zdCBvcmlnaW5hbFNjb3BlID0gc3RhdGUucGx1Z2luLmlzQnVpbHRpblxuICAgICAgICA/ICdidWlsdGluJ1xuICAgICAgICA6IHN0YXRlLnNjb3BlIHx8ICd1c2VyJ1xuXG4gICAgICBwbHVnaW5zV2l0aENoaWxkcmVuLnB1c2goe1xuICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgdHlwZTogJ3BsdWdpbicsXG4gICAgICAgICAgaWQ6IHBsdWdpbklkLFxuICAgICAgICAgIG5hbWU6IHN0YXRlLnBsdWdpbi5uYW1lLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBzdGF0ZS5wbHVnaW4ubWFuaWZlc3QuZGVzY3JpcHRpb24sXG4gICAgICAgICAgbWFya2V0cGxhY2U6IHN0YXRlLm1hcmtldHBsYWNlLFxuICAgICAgICAgIHNjb3BlOiBvcmlnaW5hbFNjb3BlLFxuICAgICAgICAgIGlzRW5hYmxlZCxcbiAgICAgICAgICBlcnJvckNvdW50OiBlcnJvcnMubGVuZ3RoLFxuICAgICAgICAgIGVycm9ycyxcbiAgICAgICAgICBwbHVnaW46IHN0YXRlLnBsdWdpbixcbiAgICAgICAgICBwZW5kaW5nRW5hYmxlOiBzdGF0ZS5wZW5kaW5nRW5hYmxlLFxuICAgICAgICAgIHBlbmRpbmdVcGRhdGU6IHN0YXRlLnBlbmRpbmdVcGRhdGUsXG4gICAgICAgICAgcGVuZGluZ1RvZ2dsZTogcGVuZGluZ1RvZ2dsZXMuZ2V0KHBsdWdpbklkKSxcbiAgICAgICAgfSxcbiAgICAgICAgb3JpZ2luYWxTY29wZSxcbiAgICAgICAgY2hpbGRNY3BzOiBwbHVnaW5NY3BNYXAuZ2V0KHN0YXRlLnBsdWdpbi5uYW1lKSB8fCBbXSxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gRmluZCBvcnBoYW4gZXJyb3JzIChlcnJvcnMgZm9yIHBsdWdpbnMgdGhhdCBmYWlsZWQgdG8gbG9hZCBlbnRpcmVseSlcbiAgICBjb25zdCBtYXRjaGVkUGx1Z2luSWRzID0gbmV3IFNldChcbiAgICAgIHBsdWdpbnNXaXRoQ2hpbGRyZW4ubWFwKCh7IGl0ZW0gfSkgPT4gaXRlbS5pZCksXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZWRQbHVnaW5OYW1lcyA9IG5ldyBTZXQoXG4gICAgICBwbHVnaW5zV2l0aENoaWxkcmVuLm1hcCgoeyBpdGVtIH0pID0+IGl0ZW0ubmFtZSksXG4gICAgKVxuICAgIGNvbnN0IG9ycGhhbkVycm9yc0J5U291cmNlID0gbmV3IE1hcDxzdHJpbmcsIHR5cGVvZiBwbHVnaW5FcnJvcnM+KClcbiAgICBmb3IgKGNvbnN0IGVycm9yIG9mIHBsdWdpbkVycm9ycykge1xuICAgICAgaWYgKFxuICAgICAgICBtYXRjaGVkUGx1Z2luSWRzLmhhcyhlcnJvci5zb3VyY2UpIHx8XG4gICAgICAgICgncGx1Z2luJyBpbiBlcnJvciAmJlxuICAgICAgICAgIHR5cGVvZiBlcnJvci5wbHVnaW4gPT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgbWF0Y2hlZFBsdWdpbk5hbWVzLmhhcyhlcnJvci5wbHVnaW4pKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBjb25zdCBleGlzdGluZyA9IG9ycGhhbkVycm9yc0J5U291cmNlLmdldChlcnJvci5zb3VyY2UpIHx8IFtdXG4gICAgICBleGlzdGluZy5wdXNoKGVycm9yKVxuICAgICAgb3JwaGFuRXJyb3JzQnlTb3VyY2Uuc2V0KGVycm9yLnNvdXJjZSwgZXhpc3RpbmcpXG4gICAgfVxuICAgIGNvbnN0IHBsdWdpblNjb3BlcyA9IGdldFBsdWdpbkVkaXRhYmxlU2NvcGVzKClcbiAgICBjb25zdCBmYWlsZWRQbHVnaW5JdGVtczogVW5pZmllZEluc3RhbGxlZEl0ZW1bXSA9IFtdXG4gICAgZm9yIChjb25zdCBbcGx1Z2luSWQsIGVycm9yc10gb2Ygb3JwaGFuRXJyb3JzQnlTb3VyY2UpIHtcbiAgICAgIC8vIFNraXAgcGx1Z2lucyB0aGF0IGFyZSBhbHJlYWR5IHNob3duIGluIHRoZSBmbGFnZ2VkIHNlY3Rpb25cbiAgICAgIGlmIChwbHVnaW5JZCBpbiBmbGFnZ2VkUGx1Z2lucykgY29udGludWVcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlUGx1Z2luSWRlbnRpZmllcihwbHVnaW5JZClcbiAgICAgIGNvbnN0IHBsdWdpbk5hbWUgPSBwYXJzZWQubmFtZSB8fCBwbHVnaW5JZFxuICAgICAgY29uc3QgbWFya2V0cGxhY2UgPSBwYXJzZWQubWFya2V0cGxhY2UgfHwgJ3Vua25vd24nXG4gICAgICBjb25zdCByYXdTY29wZSA9IHBsdWdpblNjb3Blcy5nZXQocGx1Z2luSWQpXG4gICAgICAvLyAnZmxhZycgaXMgc2Vzc2lvbi1vbmx5IChmcm9tIC0tcGx1Z2luLWRpciAvIGZsYWdTZXR0aW5ncykgYW5kIHVuZGVmaW5lZFxuICAgICAgLy8gbWVhbnMgdGhlIHBsdWdpbiBpc24ndCBpbiBhbnkgc2V0dGluZ3Mgc291cmNlLiBEZWZhdWx0IGJvdGggdG8gJ3VzZXInXG4gICAgICAvLyBzaW5jZSBVbmlmaWVkSW5zdGFsbGVkSXRlbSBkb2Vzbid0IGhhdmUgYSAnZmxhZycgc2NvcGUgdmFyaWFudC5cbiAgICAgIGNvbnN0IHNjb3BlID1cbiAgICAgICAgcmF3U2NvcGUgPT09ICdmbGFnJyB8fCByYXdTY29wZSA9PT0gdW5kZWZpbmVkID8gJ3VzZXInIDogcmF3U2NvcGVcbiAgICAgIGZhaWxlZFBsdWdpbkl0ZW1zLnB1c2goe1xuICAgICAgICB0eXBlOiAnZmFpbGVkLXBsdWdpbicsXG4gICAgICAgIGlkOiBwbHVnaW5JZCxcbiAgICAgICAgbmFtZTogcGx1Z2luTmFtZSxcbiAgICAgICAgbWFya2V0cGxhY2UsXG4gICAgICAgIHNjb3BlLFxuICAgICAgICBlcnJvckNvdW50OiBlcnJvcnMubGVuZ3RoLFxuICAgICAgICBlcnJvcnMsXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIEJ1aWxkIHN0YW5kYWxvbmUgTUNQIGl0ZW1zXG4gICAgY29uc3Qgc3RhbmRhbG9uZU1jcHM6IFVuaWZpZWRJbnN0YWxsZWRJdGVtW10gPSBbXVxuICAgIGZvciAoY29uc3QgY2xpZW50IG9mIG1jcENsaWVudHMpIHtcbiAgICAgIGlmIChjbGllbnQubmFtZSA9PT0gJ2lkZScpIGNvbnRpbnVlXG4gICAgICBpZiAoY2xpZW50Lm5hbWUuc3RhcnRzV2l0aCgncGx1Z2luOicpKSBjb250aW51ZVxuXG4gICAgICBzdGFuZGFsb25lTWNwcy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ21jcCcsXG4gICAgICAgIGlkOiBgbWNwOiR7Y2xpZW50Lm5hbWV9YCxcbiAgICAgICAgbmFtZTogY2xpZW50Lm5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgIHNjb3BlOiBjbGllbnQuY29uZmlnLnNjb3BlLFxuICAgICAgICBzdGF0dXM6IGdldE1jcFN0YXR1cyhjbGllbnQpLFxuICAgICAgICBjbGllbnQsXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIERlZmluZSBzY29wZSBvcmRlciBmb3IgZGlzcGxheVxuICAgIGNvbnN0IHNjb3BlT3JkZXI6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7XG4gICAgICBmbGFnZ2VkOiAtMSxcbiAgICAgIHByb2plY3Q6IDAsXG4gICAgICBsb2NhbDogMSxcbiAgICAgIHVzZXI6IDIsXG4gICAgICBlbnRlcnByaXNlOiAzLFxuICAgICAgbWFuYWdlZDogNCxcbiAgICAgIGR5bmFtaWM6IDUsXG4gICAgICBidWlsdGluOiA2LFxuICAgIH1cblxuICAgIC8vIEJ1aWxkIGZpbmFsIGxpc3QgYnkgbWVyZ2luZyBwbHVnaW5zICh3aXRoIHRoZWlyIGNoaWxkIE1DUHMpIGFuZCBzdGFuZGFsb25lIE1DUHNcbiAgICAvLyBHcm91cCBieSBzY29wZSB0byBhdm9pZCBkdXBsaWNhdGUgc2NvcGUgaGVhZGVyc1xuICAgIGNvbnN0IHVuaWZpZWQ6IFVuaWZpZWRJbnN0YWxsZWRJdGVtW10gPSBbXVxuXG4gICAgLy8gQ3JlYXRlIGEgbWFwIG9mIHNjb3BlIC0+IGl0ZW1zIGZvciBwcm9wZXIgbWVyZ2luZ1xuICAgIGNvbnN0IGl0ZW1zQnlTY29wZSA9IG5ldyBNYXA8c3RyaW5nLCBVbmlmaWVkSW5zdGFsbGVkSXRlbVtdPigpXG5cbiAgICAvLyBBZGQgcGx1Z2lucyB3aXRoIHRoZWlyIGNoaWxkIE1DUHNcbiAgICBmb3IgKGNvbnN0IHsgaXRlbSwgb3JpZ2luYWxTY29wZSwgY2hpbGRNY3BzIH0gb2YgcGx1Z2luc1dpdGhDaGlsZHJlbikge1xuICAgICAgY29uc3Qgc2NvcGUgPSBpdGVtLnNjb3BlXG4gICAgICBpZiAoIWl0ZW1zQnlTY29wZS5oYXMoc2NvcGUpKSB7XG4gICAgICAgIGl0ZW1zQnlTY29wZS5zZXQoc2NvcGUsIFtdKVxuICAgICAgfVxuICAgICAgaXRlbXNCeVNjb3BlLmdldChzY29wZSkhLnB1c2goaXRlbSlcbiAgICAgIC8vIEFkZCBjaGlsZCBNQ1BzIHJpZ2h0IGFmdGVyIHRoZSBwbHVnaW4sIGluZGVudGVkICh1c2Ugb3JpZ2luYWwgc2NvcGUsIG5vdCAnZmxhZ2dlZCcpLlxuICAgICAgLy8gQnVpbHQtaW4gcGx1Z2lucyBtYXAgdG8gJ3VzZXInIGZvciBkaXNwbGF5IHNpbmNlIE1DUCBDb25maWdTY29wZSBkb2Vzbid0IGluY2x1ZGUgJ2J1aWx0aW4nLlxuICAgICAgZm9yIChjb25zdCB7IGRpc3BsYXlOYW1lLCBjbGllbnQgfSBvZiBjaGlsZE1jcHMpIHtcbiAgICAgICAgY29uc3QgZGlzcGxheVNjb3BlID1cbiAgICAgICAgICBvcmlnaW5hbFNjb3BlID09PSAnYnVpbHRpbicgPyAndXNlcicgOiBvcmlnaW5hbFNjb3BlXG4gICAgICAgIGlmICghaXRlbXNCeVNjb3BlLmhhcyhkaXNwbGF5U2NvcGUpKSB7XG4gICAgICAgICAgaXRlbXNCeVNjb3BlLnNldChkaXNwbGF5U2NvcGUsIFtdKVxuICAgICAgICB9XG4gICAgICAgIGl0ZW1zQnlTY29wZS5nZXQoZGlzcGxheVNjb3BlKSEucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ21jcCcsXG4gICAgICAgICAgaWQ6IGBtY3A6JHtjbGllbnQubmFtZX1gLFxuICAgICAgICAgIG5hbWU6IGRpc3BsYXlOYW1lLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgICAgc2NvcGU6IGRpc3BsYXlTY29wZSxcbiAgICAgICAgICBzdGF0dXM6IGdldE1jcFN0YXR1cyhjbGllbnQpLFxuICAgICAgICAgIGNsaWVudCxcbiAgICAgICAgICBpbmRlbnRlZDogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgc3RhbmRhbG9uZSBNQ1BzIHRvIHRoZWlyIHJlc3BlY3RpdmUgc2NvcGUgZ3JvdXBzXG4gICAgZm9yIChjb25zdCBtY3Agb2Ygc3RhbmRhbG9uZU1jcHMpIHtcbiAgICAgIGNvbnN0IHNjb3BlID0gbWNwLnNjb3BlXG4gICAgICBpZiAoIWl0ZW1zQnlTY29wZS5oYXMoc2NvcGUpKSB7XG4gICAgICAgIGl0ZW1zQnlTY29wZS5zZXQoc2NvcGUsIFtdKVxuICAgICAgfVxuICAgICAgaXRlbXNCeVNjb3BlLmdldChzY29wZSkhLnB1c2gobWNwKVxuICAgIH1cblxuICAgIC8vIEFkZCBmYWlsZWQgcGx1Z2lucyB0byB0aGVpciByZXNwZWN0aXZlIHNjb3BlIGdyb3Vwc1xuICAgIGZvciAoY29uc3QgZmFpbGVkUGx1Z2luIG9mIGZhaWxlZFBsdWdpbkl0ZW1zKSB7XG4gICAgICBjb25zdCBzY29wZSA9IGZhaWxlZFBsdWdpbi5zY29wZVxuICAgICAgaWYgKCFpdGVtc0J5U2NvcGUuaGFzKHNjb3BlKSkge1xuICAgICAgICBpdGVtc0J5U2NvcGUuc2V0KHNjb3BlLCBbXSlcbiAgICAgIH1cbiAgICAgIGl0ZW1zQnlTY29wZS5nZXQoc2NvcGUpIS5wdXNoKGZhaWxlZFBsdWdpbilcbiAgICB9XG5cbiAgICAvLyBBZGQgZmxhZ2dlZCAoZGVsaXN0ZWQpIHBsdWdpbnMgZnJvbSB1c2VyIHNldHRpbmdzLlxuICAgIC8vIFJlYXNvbi90ZXh0IGFyZSBsb29rZWQgdXAgZnJvbSB0aGUgY2FjaGVkIHNlY3VyaXR5IG1lc3NhZ2VzIGZpbGUuXG4gICAgZm9yIChjb25zdCBbcGx1Z2luSWQsIGVudHJ5XSBvZiBPYmplY3QuZW50cmllcyhmbGFnZ2VkUGx1Z2lucykpIHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlUGx1Z2luSWRlbnRpZmllcihwbHVnaW5JZClcbiAgICAgIGNvbnN0IHBsdWdpbk5hbWUgPSBwYXJzZWQubmFtZSB8fCBwbHVnaW5JZFxuICAgICAgY29uc3QgbWFya2V0cGxhY2UgPSBwYXJzZWQubWFya2V0cGxhY2UgfHwgJ3Vua25vd24nXG4gICAgICBpZiAoIWl0ZW1zQnlTY29wZS5oYXMoJ2ZsYWdnZWQnKSkge1xuICAgICAgICBpdGVtc0J5U2NvcGUuc2V0KCdmbGFnZ2VkJywgW10pXG4gICAgICB9XG4gICAgICBpdGVtc0J5U2NvcGUuZ2V0KCdmbGFnZ2VkJykhLnB1c2goe1xuICAgICAgICB0eXBlOiAnZmxhZ2dlZC1wbHVnaW4nLFxuICAgICAgICBpZDogcGx1Z2luSWQsXG4gICAgICAgIG5hbWU6IHBsdWdpbk5hbWUsXG4gICAgICAgIG1hcmtldHBsYWNlLFxuICAgICAgICBzY29wZTogJ2ZsYWdnZWQnLFxuICAgICAgICByZWFzb246ICdkZWxpc3RlZCcsXG4gICAgICAgIHRleHQ6ICdSZW1vdmVkIGZyb20gbWFya2V0cGxhY2UnLFxuICAgICAgICBmbGFnZ2VkQXQ6IGVudHJ5LmZsYWdnZWRBdCxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gU29ydCBzY29wZXMgYW5kIGJ1aWxkIGZpbmFsIGxpc3RcbiAgICBjb25zdCBzb3J0ZWRTY29wZXMgPSBbLi4uaXRlbXNCeVNjb3BlLmtleXMoKV0uc29ydChcbiAgICAgIChhLCBiKSA9PiAoc2NvcGVPcmRlclthXSA/PyA5OSkgLSAoc2NvcGVPcmRlcltiXSA/PyA5OSksXG4gICAgKVxuXG4gICAgZm9yIChjb25zdCBzY29wZSBvZiBzb3J0ZWRTY29wZXMpIHtcbiAgICAgIGNvbnN0IGl0ZW1zID0gaXRlbXNCeVNjb3BlLmdldChzY29wZSkhXG5cbiAgICAgIC8vIFNlcGFyYXRlIGl0ZW1zIGludG8gcGx1Z2luIGdyb3VwcyAod2l0aCB0aGVpciBjaGlsZCBNQ1BzKSBhbmQgc3RhbmRhbG9uZSBNQ1BzXG4gICAgICAvLyBUaGlzIHByZXNlcnZlcyBwYXJlbnQtY2hpbGQgcmVsYXRpb25zaGlwcyB0aGF0IHdvdWxkIGJlIGJyb2tlbiBieSBuYWl2ZSBzb3J0aW5nXG4gICAgICBjb25zdCBwbHVnaW5Hcm91cHM6IFVuaWZpZWRJbnN0YWxsZWRJdGVtW11bXSA9IFtdXG4gICAgICBjb25zdCBzdGFuZGFsb25lTWNwc0luU2NvcGU6IFVuaWZpZWRJbnN0YWxsZWRJdGVtW10gPSBbXVxuXG4gICAgICBsZXQgaSA9IDBcbiAgICAgIHdoaWxlIChpIDwgaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tpXSFcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGl0ZW0udHlwZSA9PT0gJ3BsdWdpbicgfHxcbiAgICAgICAgICBpdGVtLnR5cGUgPT09ICdmYWlsZWQtcGx1Z2luJyB8fFxuICAgICAgICAgIGl0ZW0udHlwZSA9PT0gJ2ZsYWdnZWQtcGx1Z2luJ1xuICAgICAgICApIHtcbiAgICAgICAgICAvLyBDb2xsZWN0IHRoZSBwbHVnaW4gYW5kIGl0cyBjaGlsZCBNQ1BzIGFzIGEgZ3JvdXBcbiAgICAgICAgICBjb25zdCBncm91cDogVW5pZmllZEluc3RhbGxlZEl0ZW1bXSA9IFtpdGVtXVxuICAgICAgICAgIGkrK1xuICAgICAgICAgIC8vIExvb2sgYWhlYWQgZm9yIGluZGVudGVkIGNoaWxkIE1DUHNcbiAgICAgICAgICBsZXQgbmV4dEl0ZW0gPSBpdGVtc1tpXVxuICAgICAgICAgIHdoaWxlIChuZXh0SXRlbT8udHlwZSA9PT0gJ21jcCcgJiYgbmV4dEl0ZW0uaW5kZW50ZWQpIHtcbiAgICAgICAgICAgIGdyb3VwLnB1c2gobmV4dEl0ZW0pXG4gICAgICAgICAgICBpKytcbiAgICAgICAgICAgIG5leHRJdGVtID0gaXRlbXNbaV1cbiAgICAgICAgICB9XG4gICAgICAgICAgcGx1Z2luR3JvdXBzLnB1c2goZ3JvdXApXG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSAnbWNwJyAmJiAhaXRlbS5pbmRlbnRlZCkge1xuICAgICAgICAgIC8vIFN0YW5kYWxvbmUgTUNQIChub3QgYSBjaGlsZCBvZiBhIHBsdWdpbilcbiAgICAgICAgICBzdGFuZGFsb25lTWNwc0luU2NvcGUucHVzaChpdGVtKVxuICAgICAgICAgIGkrK1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFNraXAgb3JwaGFuZWQgaW5kZW50ZWQgTUNQcyAoc2hvdWxkbid0IGhhcHBlbilcbiAgICAgICAgICBpKytcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBTb3J0IHBsdWdpbiBncm91cHMgYnkgdGhlIHBsdWdpbiBuYW1lIChmaXJzdCBpdGVtIGluIGVhY2ggZ3JvdXApXG4gICAgICBwbHVnaW5Hcm91cHMuc29ydCgoYSwgYikgPT4gYVswXSEubmFtZS5sb2NhbGVDb21wYXJlKGJbMF0hLm5hbWUpKVxuXG4gICAgICAvLyBTb3J0IHN0YW5kYWxvbmUgTUNQcyBieSBuYW1lXG4gICAgICBzdGFuZGFsb25lTWNwc0luU2NvcGUuc29ydCgoYSwgYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSlcblxuICAgICAgLy8gQnVpbGQgZmluYWwgbGlzdDogcGx1Z2lucyAod2l0aCB0aGVpciBjaGlsZHJlbikgZmlyc3QsIHRoZW4gc3RhbmRhbG9uZSBNQ1BzXG4gICAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIHBsdWdpbkdyb3Vwcykge1xuICAgICAgICB1bmlmaWVkLnB1c2goLi4uZ3JvdXApXG4gICAgICB9XG4gICAgICB1bmlmaWVkLnB1c2goLi4uc3RhbmRhbG9uZU1jcHNJblNjb3BlKVxuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkXG4gIH0sIFtwbHVnaW5TdGF0ZXMsIG1jcENsaWVudHMsIHBsdWdpbkVycm9ycywgcGVuZGluZ1RvZ2dsZXMsIGZsYWdnZWRQbHVnaW5zXSlcblxuICAvLyBNYXJrIGZsYWdnZWQgcGx1Z2lucyBhcyBzZWVuIHdoZW4gdGhlIEluc3RhbGxlZCB2aWV3IHJlbmRlcnMgdGhlbS5cbiAgLy8gQWZ0ZXIgNDggaG91cnMgZnJvbSBzZWVuQXQsIHRoZXkgYXV0by1jbGVhciBvbiBuZXh0IGxvYWQuXG4gIGNvbnN0IGZsYWdnZWRJZHMgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICB1bmlmaWVkSXRlbXNcbiAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0udHlwZSA9PT0gJ2ZsYWdnZWQtcGx1Z2luJylcbiAgICAgICAgLm1hcChpdGVtID0+IGl0ZW0uaWQpLFxuICAgIFt1bmlmaWVkSXRlbXNdLFxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGZsYWdnZWRJZHMubGVuZ3RoID4gMCkge1xuICAgICAgdm9pZCBtYXJrRmxhZ2dlZFBsdWdpbnNTZWVuKGZsYWdnZWRJZHMpXG4gICAgfVxuICB9LCBbZmxhZ2dlZElkc10pXG5cbiAgLy8gRmlsdGVyIGl0ZW1zIGJhc2VkIG9uIHNlYXJjaCBxdWVyeSAobWF0Y2hlcyBuYW1lIG9yIGRlc2NyaXB0aW9uKVxuICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKCFzZWFyY2hRdWVyeSkgcmV0dXJuIHVuaWZpZWRJdGVtc1xuICAgIGNvbnN0IGxvd2VyUXVlcnkgPSBzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpXG4gICAgcmV0dXJuIHVuaWZpZWRJdGVtcy5maWx0ZXIoXG4gICAgICBpdGVtID0+XG4gICAgICAgIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyUXVlcnkpIHx8XG4gICAgICAgICgnZGVzY3JpcHRpb24nIGluIGl0ZW0gJiZcbiAgICAgICAgICBpdGVtLmRlc2NyaXB0aW9uPy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyUXVlcnkpKSxcbiAgICApXG4gIH0sIFt1bmlmaWVkSXRlbXMsIHNlYXJjaFF1ZXJ5XSlcblxuICAvLyBTZWxlY3Rpb24gc3RhdGVcbiAgY29uc3QgW3NlbGVjdGVkSW5kZXgsIHNldFNlbGVjdGVkSW5kZXhdID0gdXNlU3RhdGUoMClcblxuICAvLyBQYWdpbmF0aW9uIGZvciB1bmlmaWVkIGxpc3QgKGNvbnRpbnVvdXMgc2Nyb2xsaW5nKVxuICBjb25zdCBwYWdpbmF0aW9uID0gdXNlUGFnaW5hdGlvbjxVbmlmaWVkSW5zdGFsbGVkSXRlbT4oe1xuICAgIHRvdGFsSXRlbXM6IGZpbHRlcmVkSXRlbXMubGVuZ3RoLFxuICAgIHNlbGVjdGVkSW5kZXgsXG4gICAgbWF4VmlzaWJsZTogOCxcbiAgfSlcblxuICAvLyBEZXRhaWxzIHZpZXcgc3RhdGVcbiAgY29uc3QgW2RldGFpbHNNZW51SW5kZXgsIHNldERldGFpbHNNZW51SW5kZXhdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2lzUHJvY2Vzc2luZywgc2V0SXNQcm9jZXNzaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbcHJvY2Vzc0Vycm9yLCBzZXRQcm9jZXNzRXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcblxuICAvLyBDb25maWd1cmF0aW9uIHN0YXRlXG4gIGNvbnN0IFtjb25maWdOZWVkZWQsIHNldENvbmZpZ05lZWRlZF0gPVxuICAgIHVzZVN0YXRlPE1jcGJOZWVkc0NvbmZpZ1Jlc3VsdCB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtfaXNMb2FkaW5nQ29uZmlnLCBzZXRJc0xvYWRpbmdDb25maWddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzZWxlY3RlZFBsdWdpbkhhc01jcGIsIHNldFNlbGVjdGVkUGx1Z2luSGFzTWNwYl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAvLyBEZXRlY3QgaWYgc2VsZWN0ZWQgcGx1Z2luIGhhcyBNQ1BCXG4gIC8vIFJlYWRzIHJhdyBtYXJrZXRwbGFjZS5qc29uIHRvIHdvcmsgd2l0aCBvbGQgY2FjaGVkIG1hcmtldHBsYWNlc1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc2VsZWN0ZWRQbHVnaW4pIHtcbiAgICAgIHNldFNlbGVjdGVkUGx1Z2luSGFzTWNwYihmYWxzZSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGRldGVjdE1jcGIoKSB7XG4gICAgICAvLyBDaGVjayBwbHVnaW4gbWFuaWZlc3QgZmlyc3RcbiAgICAgIGNvbnN0IG1jcFNlcnZlcnNTcGVjID0gc2VsZWN0ZWRQbHVnaW4hLnBsdWdpbi5tYW5pZmVzdC5tY3BTZXJ2ZXJzXG4gICAgICBsZXQgaGFzTWNwYiA9IGZhbHNlXG5cbiAgICAgIGlmIChtY3BTZXJ2ZXJzU3BlYykge1xuICAgICAgICBoYXNNY3BiID1cbiAgICAgICAgICAodHlwZW9mIG1jcFNlcnZlcnNTcGVjID09PSAnc3RyaW5nJyAmJlxuICAgICAgICAgICAgaXNNY3BiU291cmNlKG1jcFNlcnZlcnNTcGVjKSkgfHxcbiAgICAgICAgICAoQXJyYXkuaXNBcnJheShtY3BTZXJ2ZXJzU3BlYykgJiZcbiAgICAgICAgICAgIG1jcFNlcnZlcnNTcGVjLnNvbWUocyA9PiB0eXBlb2YgcyA9PT0gJ3N0cmluZycgJiYgaXNNY3BiU291cmNlKHMpKSlcbiAgICAgIH1cblxuICAgICAgLy8gSWYgbm90IGluIG1hbmlmZXN0LCByZWFkIHJhdyBtYXJrZXRwbGFjZS5qc29uIGRpcmVjdGx5IChieXBhc3Npbmcgc2NoZW1hIHZhbGlkYXRpb24pXG4gICAgICAvLyBUaGlzIHdvcmtzIGV2ZW4gd2l0aCBvbGQgY2FjaGVkIG1hcmtldHBsYWNlcyBmcm9tIGJlZm9yZSBNQ1BCIHN1cHBvcnRcbiAgICAgIGlmICghaGFzTWNwYikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IG1hcmtldHBsYWNlRGlyID0gcGF0aC5qb2luKHNlbGVjdGVkUGx1Z2luIS5wbHVnaW4ucGF0aCwgJy4uJylcbiAgICAgICAgICBjb25zdCBtYXJrZXRwbGFjZUpzb25QYXRoID0gcGF0aC5qb2luKFxuICAgICAgICAgICAgbWFya2V0cGxhY2VEaXIsXG4gICAgICAgICAgICAnLmNsYXVkZS1wbHVnaW4nLFxuICAgICAgICAgICAgJ21hcmtldHBsYWNlLmpzb24nLFxuICAgICAgICAgIClcblxuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBmcy5yZWFkRmlsZShtYXJrZXRwbGFjZUpzb25QYXRoLCAndXRmLTgnKVxuICAgICAgICAgIGNvbnN0IG1hcmtldHBsYWNlID0ganNvblBhcnNlKGNvbnRlbnQpXG5cbiAgICAgICAgICBjb25zdCBlbnRyeSA9IG1hcmtldHBsYWNlLnBsdWdpbnM/LmZpbmQoXG4gICAgICAgICAgICAocDogeyBuYW1lOiBzdHJpbmcgfSkgPT4gcC5uYW1lID09PSBzZWxlY3RlZFBsdWdpbiEucGx1Z2luLm5hbWUsXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaWYgKGVudHJ5Py5tY3BTZXJ2ZXJzKSB7XG4gICAgICAgICAgICBjb25zdCBzcGVjID0gZW50cnkubWNwU2VydmVyc1xuICAgICAgICAgICAgaGFzTWNwYiA9XG4gICAgICAgICAgICAgICh0eXBlb2Ygc3BlYyA9PT0gJ3N0cmluZycgJiYgaXNNY3BiU291cmNlKHNwZWMpKSB8fFxuICAgICAgICAgICAgICAoQXJyYXkuaXNBcnJheShzcGVjKSAmJlxuICAgICAgICAgICAgICAgIHNwZWMuc29tZShcbiAgICAgICAgICAgICAgICAgIChzOiB1bmtub3duKSA9PiB0eXBlb2YgcyA9PT0gJ3N0cmluZycgJiYgaXNNY3BiU291cmNlKHMpLFxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoYEZhaWxlZCB0byByZWFkIHJhdyBtYXJrZXRwbGFjZS5qc29uOiAke2Vycn1gKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNldFNlbGVjdGVkUGx1Z2luSGFzTWNwYihoYXNNY3BiKVxuICAgIH1cblxuICAgIHZvaWQgZGV0ZWN0TWNwYigpXG4gIH0sIFtzZWxlY3RlZFBsdWdpbl0pXG5cbiAgLy8gTG9hZCBpbnN0YWxsZWQgcGx1Z2lucyBncm91cGVkIGJ5IG1hcmtldHBsYWNlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZEluc3RhbGxlZFBsdWdpbnMoKSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGVuYWJsZWQsIGRpc2FibGVkIH0gPSBhd2FpdCBsb2FkQWxsUGx1Z2lucygpXG4gICAgICAgIGNvbnN0IG1lcmdlZFNldHRpbmdzID0gZ2V0U2V0dGluZ3NfREVQUkVDQVRFRCgpIC8vIFVzZSBtZXJnZWQgc2V0dGluZ3MgdG8gcmVzcGVjdCBhbGwgbGF5ZXJzXG5cbiAgICAgICAgY29uc3QgYWxsUGx1Z2lucyA9IGZpbHRlck1hbmFnZWREaXNhYmxlZFBsdWdpbnMoW1xuICAgICAgICAgIC4uLmVuYWJsZWQsXG4gICAgICAgICAgLi4uZGlzYWJsZWQsXG4gICAgICAgIF0pXG5cbiAgICAgICAgLy8gR3JvdXAgcGx1Z2lucyBieSBtYXJrZXRwbGFjZVxuICAgICAgICBjb25zdCBwbHVnaW5zQnlNYXJrZXRwbGFjZTogUmVjb3JkPHN0cmluZywgTG9hZGVkUGx1Z2luW10+ID0ge31cbiAgICAgICAgZm9yIChjb25zdCBwbHVnaW4gb2YgYWxsUGx1Z2lucykge1xuICAgICAgICAgIGNvbnN0IG1hcmtldHBsYWNlID0gcGx1Z2luLnNvdXJjZS5zcGxpdCgnQCcpWzFdIHx8ICdsb2NhbCdcbiAgICAgICAgICBpZiAoIXBsdWdpbnNCeU1hcmtldHBsYWNlW21hcmtldHBsYWNlXSkge1xuICAgICAgICAgICAgcGx1Z2luc0J5TWFya2V0cGxhY2VbbWFya2V0cGxhY2VdID0gW11cbiAgICAgICAgICB9XG4gICAgICAgICAgcGx1Z2luc0J5TWFya2V0cGxhY2VbbWFya2V0cGxhY2VdIS5wdXNoKHBsdWdpbilcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBtYXJrZXRwbGFjZSBpbmZvIGFycmF5IHdpdGggZW5hYmxlZC9kaXNhYmxlZCBjb3VudHNcbiAgICAgICAgY29uc3QgbWFya2V0cGxhY2VJbmZvczogTWFya2V0cGxhY2VJbmZvW10gPSBbXVxuICAgICAgICBmb3IgKGNvbnN0IFtuYW1lLCBwbHVnaW5zXSBvZiBPYmplY3QuZW50cmllcyhwbHVnaW5zQnlNYXJrZXRwbGFjZSkpIHtcbiAgICAgICAgICBjb25zdCBlbmFibGVkQ291bnQgPSBjb3VudChwbHVnaW5zLCBwID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBsdWdpbklkID0gYCR7cC5uYW1lfUAke25hbWV9YFxuICAgICAgICAgICAgcmV0dXJuIG1lcmdlZFNldHRpbmdzPy5lbmFibGVkUGx1Z2lucz8uW3BsdWdpbklkXSAhPT0gZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICAgIGNvbnN0IGRpc2FibGVkQ291bnQgPSBwbHVnaW5zLmxlbmd0aCAtIGVuYWJsZWRDb3VudFxuXG4gICAgICAgICAgbWFya2V0cGxhY2VJbmZvcy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBpbnN0YWxsZWRQbHVnaW5zOiBwbHVnaW5zLFxuICAgICAgICAgICAgZW5hYmxlZENvdW50LFxuICAgICAgICAgICAgZGlzYWJsZWRDb3VudCxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU29ydCBtYXJrZXRwbGFjZXM6IGNsYXVkZS1wbHVnaW4tZGlyZWN0b3J5IGZpcnN0LCB0aGVuIGFscGhhYmV0aWNhbGx5XG4gICAgICAgIG1hcmtldHBsYWNlSW5mb3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgIGlmIChhLm5hbWUgPT09ICdjbGF1ZGUtcGx1Z2luLWRpcmVjdG9yeScpIHJldHVybiAtMVxuICAgICAgICAgIGlmIChiLm5hbWUgPT09ICdjbGF1ZGUtcGx1Z2luLWRpcmVjdG9yeScpIHJldHVybiAxXG4gICAgICAgICAgcmV0dXJuIGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSlcbiAgICAgICAgfSlcblxuICAgICAgICBzZXRNYXJrZXRwbGFjZXMobWFya2V0cGxhY2VJbmZvcylcblxuICAgICAgICAvLyBCdWlsZCBmbGF0IGxpc3Qgb2YgYWxsIHBsdWdpbiBzdGF0ZXNcbiAgICAgICAgY29uc3QgYWxsU3RhdGVzOiBQbHVnaW5TdGF0ZVtdID0gW11cbiAgICAgICAgZm9yIChjb25zdCBtYXJrZXRwbGFjZSBvZiBtYXJrZXRwbGFjZUluZm9zKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBwbHVnaW4gb2YgbWFya2V0cGxhY2UuaW5zdGFsbGVkUGx1Z2lucykge1xuICAgICAgICAgICAgY29uc3QgcGx1Z2luSWQgPSBgJHtwbHVnaW4ubmFtZX1AJHttYXJrZXRwbGFjZS5uYW1lfWBcbiAgICAgICAgICAgIC8vIEJ1aWx0LWluIHBsdWdpbnMgZG9uJ3QgaGF2ZSBWMiBpbnN0YWxsIGVudHJpZXMg4oCUIHNraXAgdGhlIGxvb2t1cC5cbiAgICAgICAgICAgIGNvbnN0IHNjb3BlID0gcGx1Z2luLmlzQnVpbHRpblxuICAgICAgICAgICAgICA/ICdidWlsdGluJ1xuICAgICAgICAgICAgICA6IGdldFBsdWdpbkluc3RhbGxhdGlvbkZyb21WMihwbHVnaW5JZCkuc2NvcGVcblxuICAgICAgICAgICAgYWxsU3RhdGVzLnB1c2goe1xuICAgICAgICAgICAgICBwbHVnaW4sXG4gICAgICAgICAgICAgIG1hcmtldHBsYWNlOiBtYXJrZXRwbGFjZS5uYW1lLFxuICAgICAgICAgICAgICBzY29wZSxcbiAgICAgICAgICAgICAgcGVuZGluZ0VuYWJsZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBwZW5kaW5nVXBkYXRlOiBmYWxzZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNldFBsdWdpblN0YXRlcyhhbGxTdGF0ZXMpXG4gICAgICAgIHNldFNlbGVjdGVkSW5kZXgoMClcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdm9pZCBsb2FkSW5zdGFsbGVkUGx1Z2lucygpXG4gIH0sIFtdKVxuXG4gIC8vIEF1dG8tbmF2aWdhdGUgdG8gdGFyZ2V0IHBsdWdpbiBpZiBzcGVjaWZpZWQgKG9uY2Ugb25seSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaGFzQXV0b05hdmlnYXRlZC5jdXJyZW50KSByZXR1cm5cbiAgICBpZiAodGFyZ2V0UGx1Z2luICYmIG1hcmtldHBsYWNlcy5sZW5ndGggPiAwICYmICFsb2FkaW5nKSB7XG4gICAgICAvLyB0YXJnZXRQbHVnaW4gbWF5IGJlIGBuYW1lYCBvciBgbmFtZUBtYXJrZXRwbGFjZWAgKHBhcnNlQXJncyBwYXNzZXMgdGhlXG4gICAgICAvLyByYXcgYXJnIHRocm91Z2gpLiBQYXJzZSBpdCBzbyBwLm5hbWUgbWF0Y2hpbmcgd29ya3MgZWl0aGVyIHdheS5cbiAgICAgIGNvbnN0IHsgbmFtZTogdGFyZ2V0TmFtZSwgbWFya2V0cGxhY2U6IHRhcmdldE1rdEZyb21JZCB9ID1cbiAgICAgICAgcGFyc2VQbHVnaW5JZGVudGlmaWVyKHRhcmdldFBsdWdpbilcbiAgICAgIGNvbnN0IGVmZmVjdGl2ZVRhcmdldE1hcmtldHBsYWNlID0gdGFyZ2V0TWFya2V0cGxhY2UgPz8gdGFyZ2V0TWt0RnJvbUlkXG5cbiAgICAgIC8vIFVzZSB0YXJnZXRNYXJrZXRwbGFjZSBpZiBwcm92aWRlZCwgb3RoZXJ3aXNlIHNlYXJjaCBhbGxcbiAgICAgIGNvbnN0IG1hcmtldHBsYWNlc1RvU2VhcmNoID0gZWZmZWN0aXZlVGFyZ2V0TWFya2V0cGxhY2VcbiAgICAgICAgPyBtYXJrZXRwbGFjZXMuZmlsdGVyKG0gPT4gbS5uYW1lID09PSBlZmZlY3RpdmVUYXJnZXRNYXJrZXRwbGFjZSlcbiAgICAgICAgOiBtYXJrZXRwbGFjZXNcblxuICAgICAgLy8gRmlyc3QgY2hlY2sgc3VjY2Vzc2Z1bGx5IGxvYWRlZCBwbHVnaW5zXG4gICAgICBmb3IgKGNvbnN0IG1hcmtldHBsYWNlIG9mIG1hcmtldHBsYWNlc1RvU2VhcmNoKSB7XG4gICAgICAgIGNvbnN0IHBsdWdpbiA9IG1hcmtldHBsYWNlLmluc3RhbGxlZFBsdWdpbnMuZmluZChcbiAgICAgICAgICBwID0+IHAubmFtZSA9PT0gdGFyZ2V0TmFtZSxcbiAgICAgICAgKVxuICAgICAgICBpZiAocGx1Z2luKSB7XG4gICAgICAgICAgLy8gR2V0IHNjb3BlIGZyb20gVjIgZGF0YSBmb3IgcHJvcGVyIG9wZXJhdGlvbiBoYW5kbGluZ1xuICAgICAgICAgIGNvbnN0IHBsdWdpbklkID0gYCR7cGx1Z2luLm5hbWV9QCR7bWFya2V0cGxhY2UubmFtZX1gXG4gICAgICAgICAgY29uc3QgeyBzY29wZSB9ID0gZ2V0UGx1Z2luSW5zdGFsbGF0aW9uRnJvbVYyKHBsdWdpbklkKVxuXG4gICAgICAgICAgY29uc3QgcGx1Z2luU3RhdGU6IFBsdWdpblN0YXRlID0ge1xuICAgICAgICAgICAgcGx1Z2luLFxuICAgICAgICAgICAgbWFya2V0cGxhY2U6IG1hcmtldHBsYWNlLm5hbWUsXG4gICAgICAgICAgICBzY29wZSxcbiAgICAgICAgICAgIHBlbmRpbmdFbmFibGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHBlbmRpbmdVcGRhdGU6IGZhbHNlLFxuICAgICAgICAgIH1cbiAgICAgICAgICBzZXRTZWxlY3RlZFBsdWdpbihwbHVnaW5TdGF0ZSlcbiAgICAgICAgICBzZXRWaWV3U3RhdGUoJ3BsdWdpbi1kZXRhaWxzJylcbiAgICAgICAgICBwZW5kaW5nQXV0b0FjdGlvblJlZi5jdXJyZW50ID0gYWN0aW9uXG4gICAgICAgICAgaGFzQXV0b05hdmlnYXRlZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEZhbGwgYmFjayB0byBmYWlsZWQgcGx1Z2lucyAodGhvc2Ugd2l0aCBlcnJvcnMgYnV0IG5vdCBsb2FkZWQpXG4gICAgICBjb25zdCBmYWlsZWRJdGVtID0gdW5pZmllZEl0ZW1zLmZpbmQoXG4gICAgICAgIGl0ZW0gPT4gaXRlbS50eXBlID09PSAnZmFpbGVkLXBsdWdpbicgJiYgaXRlbS5uYW1lID09PSB0YXJnZXROYW1lLFxuICAgICAgKVxuICAgICAgaWYgKGZhaWxlZEl0ZW0gJiYgZmFpbGVkSXRlbS50eXBlID09PSAnZmFpbGVkLXBsdWdpbicpIHtcbiAgICAgICAgc2V0Vmlld1N0YXRlKHtcbiAgICAgICAgICB0eXBlOiAnZmFpbGVkLXBsdWdpbi1kZXRhaWxzJyxcbiAgICAgICAgICBwbHVnaW46IHtcbiAgICAgICAgICAgIGlkOiBmYWlsZWRJdGVtLmlkLFxuICAgICAgICAgICAgbmFtZTogZmFpbGVkSXRlbS5uYW1lLFxuICAgICAgICAgICAgbWFya2V0cGxhY2U6IGZhaWxlZEl0ZW0ubWFya2V0cGxhY2UsXG4gICAgICAgICAgICBlcnJvcnM6IGZhaWxlZEl0ZW0uZXJyb3JzLFxuICAgICAgICAgICAgc2NvcGU6IGZhaWxlZEl0ZW0uc2NvcGUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgaGFzQXV0b05hdmlnYXRlZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICAvLyBObyBtYXRjaCBpbiBsb2FkZWQgT1IgZmFpbGVkIHBsdWdpbnMg4oCUIGNsb3NlIHRoZSBkaWFsb2cgd2l0aCBhXG4gICAgICAvLyBtZXNzYWdlIHJhdGhlciB0aGFuIHNpbGVudGx5IGxhbmRpbmcgb24gdGhlIHBsdWdpbiBsaXN0LiBPbmx5IGRvXG4gICAgICAvLyB0aGlzIHdoZW4gYW4gYWN0aW9uIHdhcyByZXF1ZXN0ZWQgKGUuZy4gL3BsdWdpbiB1bmluc3RhbGwgWCk7XG4gICAgICAvLyBwbGFpbiBuYXZpZ2F0aW9uICgvcGx1Z2luIG1hbmFnZSkgc2hvdWxkIHN0aWxsIGp1c3Qgc2hvdyB0aGUgbGlzdC5cbiAgICAgIGlmICghaGFzQXV0b05hdmlnYXRlZC5jdXJyZW50ICYmIGFjdGlvbikge1xuICAgICAgICBoYXNBdXRvTmF2aWdhdGVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICAgIHNldFJlc3VsdChgUGx1Z2luIFwiJHt0YXJnZXRQbHVnaW59XCIgaXMgbm90IGluc3RhbGxlZCBpbiB0aGlzIHByb2plY3RgKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW1xuICAgIHRhcmdldFBsdWdpbixcbiAgICB0YXJnZXRNYXJrZXRwbGFjZSxcbiAgICBtYXJrZXRwbGFjZXMsXG4gICAgbG9hZGluZyxcbiAgICB1bmlmaWVkSXRlbXMsXG4gICAgYWN0aW9uLFxuICAgIHNldFJlc3VsdCxcbiAgXSlcblxuICAvLyBIYW5kbGUgc2luZ2xlIHBsdWdpbiBvcGVyYXRpb25zIGZyb20gZGV0YWlscyB2aWV3XG4gIGNvbnN0IGhhbmRsZVNpbmdsZU9wZXJhdGlvbiA9IGFzeW5jIChcbiAgICBvcGVyYXRpb246ICdlbmFibGUnIHwgJ2Rpc2FibGUnIHwgJ3VwZGF0ZScgfCAndW5pbnN0YWxsJyxcbiAgKSA9PiB7XG4gICAgaWYgKCFzZWxlY3RlZFBsdWdpbikgcmV0dXJuXG5cbiAgICBjb25zdCBwbHVnaW5TY29wZSA9IHNlbGVjdGVkUGx1Z2luLnNjb3BlIHx8ICd1c2VyJ1xuICAgIGNvbnN0IGlzQnVpbHRpbiA9IHBsdWdpblNjb3BlID09PSAnYnVpbHRpbidcblxuICAgIC8vIEJ1aWx0LWluIHBsdWdpbnMgY2FuIG9ubHkgYmUgZW5hYmxlZC9kaXNhYmxlZCwgbm90IHVwZGF0ZWQvdW5pbnN0YWxsZWQuXG4gICAgaWYgKGlzQnVpbHRpbiAmJiAob3BlcmF0aW9uID09PSAndXBkYXRlJyB8fCBvcGVyYXRpb24gPT09ICd1bmluc3RhbGwnKSkge1xuICAgICAgc2V0UHJvY2Vzc0Vycm9yKCdCdWlsdC1pbiBwbHVnaW5zIGNhbm5vdCBiZSB1cGRhdGVkIG9yIHVuaW5zdGFsbGVkLicpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBNYW5hZ2VkIHNjb3BlIHBsdWdpbnMgY2FuIG9ubHkgYmUgdXBkYXRlZCwgbm90IGVuYWJsZWQvZGlzYWJsZWQvdW5pbnN0YWxsZWRcbiAgICBpZiAoXG4gICAgICAhaXNCdWlsdGluICYmXG4gICAgICAhaXNJbnN0YWxsYWJsZVNjb3BlKHBsdWdpblNjb3BlKSAmJlxuICAgICAgb3BlcmF0aW9uICE9PSAndXBkYXRlJ1xuICAgICkge1xuICAgICAgc2V0UHJvY2Vzc0Vycm9yKFxuICAgICAgICAnVGhpcyBwbHVnaW4gaXMgbWFuYWdlZCBieSB5b3VyIG9yZ2FuaXphdGlvbi4gQ29udGFjdCB5b3VyIGFkbWluIHRvIGRpc2FibGUgaXQuJyxcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHNldElzUHJvY2Vzc2luZyh0cnVlKVxuICAgIHNldFByb2Nlc3NFcnJvcihudWxsKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBsdWdpbklkID0gYCR7c2VsZWN0ZWRQbHVnaW4ucGx1Z2luLm5hbWV9QCR7c2VsZWN0ZWRQbHVnaW4ubWFya2V0cGxhY2V9YFxuICAgICAgbGV0IHJldmVyc2VEZXBlbmRlbnRzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZFxuXG4gICAgICAvLyBlbmFibGUvZGlzYWJsZSBvbWl0IHNjb3BlIOKAlCBwbHVnaW5TY29wZSBpcyB0aGUgaW5zdGFsbCBzY29wZSBmcm9tXG4gICAgICAvLyBpbnN0YWxsZWRfcGx1Z2lucy5qc29uICh3aGVyZSBmaWxlcyBhcmUgY2FjaGVkKSwgd2hpY2ggY2FuIGRpdmVyZ2VcbiAgICAgIC8vIGZyb20gdGhlIHNldHRpbmdzIHNjb3BlICh3aGVyZSBlbmFibGVtZW50IGxpdmVzKS4gUGFzc2luZyBpdCB0cmlwc1xuICAgICAgLy8gdGhlIGNyb3NzLXNjb3BlIGd1YXJkLiBBdXRvLWRldGVjdCBmaW5kcyB0aGUgcmlnaHQgc2NvcGUuICMzODA4NFxuICAgICAgc3dpdGNoIChvcGVyYXRpb24pIHtcbiAgICAgICAgY2FzZSAnZW5hYmxlJzoge1xuICAgICAgICAgIGNvbnN0IGVuYWJsZVJlc3VsdCA9IGF3YWl0IGVuYWJsZVBsdWdpbk9wKHBsdWdpbklkKVxuICAgICAgICAgIGlmICghZW5hYmxlUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlbmFibGVSZXN1bHQubWVzc2FnZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdkaXNhYmxlJzoge1xuICAgICAgICAgIGNvbnN0IGRpc2FibGVSZXN1bHQgPSBhd2FpdCBkaXNhYmxlUGx1Z2luT3AocGx1Z2luSWQpXG4gICAgICAgICAgaWYgKCFkaXNhYmxlUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihkaXNhYmxlUmVzdWx0Lm1lc3NhZ2UpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldmVyc2VEZXBlbmRlbnRzID0gZGlzYWJsZVJlc3VsdC5yZXZlcnNlRGVwZW5kZW50c1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAndW5pbnN0YWxsJzoge1xuICAgICAgICAgIGlmIChpc0J1aWx0aW4pIGJyZWFrIC8vIGd1YXJkZWQgYWJvdmU7IG5hcnJvd3MgcGx1Z2luU2NvcGVcbiAgICAgICAgICBpZiAoIWlzSW5zdGFsbGFibGVTY29wZShwbHVnaW5TY29wZSkpIGJyZWFrXG4gICAgICAgICAgLy8gSWYgdGhlIHBsdWdpbiBpcyBlbmFibGVkIGluIC5jbGF1ZGUvc2V0dGluZ3MuanNvbiAoc2hhcmVkIHdpdGggdGhlXG4gICAgICAgICAgLy8gdGVhbSksIGRpdmVydCB0byBhIGNvbmZpcm1hdGlvbiBkaWFsb2cgdGhhdCBvZmZlcnMgdG8gZGlzYWJsZSBpblxuICAgICAgICAgIC8vIHNldHRpbmdzLmxvY2FsLmpzb24gaW5zdGVhZC4gQ2hlY2sgdGhlIHNldHRpbmdzIGZpbGUgZGlyZWN0bHkg4oCUXG4gICAgICAgICAgLy8gYHBsdWdpblNjb3BlYCAoZnJvbSBpbnN0YWxsZWRfcGx1Z2lucy5qc29uKSBjYW4gYmUgJ3VzZXInIGV2ZW4gd2hlblxuICAgICAgICAgIC8vIHRoZSBwbHVnaW4gaXMgQUxTTyBwcm9qZWN0LWVuYWJsZWQsIGFuZCB1bmluc3RhbGxpbmcgdGhlIHVzZXItc2NvcGVcbiAgICAgICAgICAvLyBpbnN0YWxsIHdvdWxkIGxlYXZlIHRoZSBwcm9qZWN0IGVuYWJsZW1lbnQgYWN0aXZlLlxuICAgICAgICAgIGlmIChpc1BsdWdpbkVuYWJsZWRBdFByb2plY3RTY29wZShwbHVnaW5JZCkpIHtcbiAgICAgICAgICAgIHNldElzUHJvY2Vzc2luZyhmYWxzZSlcbiAgICAgICAgICAgIHNldFZpZXdTdGF0ZSgnY29uZmlybS1wcm9qZWN0LXVuaW5zdGFsbCcpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gSWYgdGhlIHBsdWdpbiBoYXMgcGVyc2lzdGVudCBkYXRhICgke0NMQVVERV9QTFVHSU5fREFUQX0pIEFORCB0aGlzXG4gICAgICAgICAgLy8gaXMgdGhlIGxhc3Qgc2NvcGUsIHByb21wdCBiZWZvcmUgZGVsZXRpbmcgaXQuIEZvciBtdWx0aS1zY29wZVxuICAgICAgICAgIC8vIGluc3RhbGxzLCB0aGUgb3AncyBpc0xhc3RTY29wZSBjaGVjayB3b24ndCBkZWxldGUgcmVnYXJkbGVzcyBvZlxuICAgICAgICAgIC8vIHRoZSB1c2VyJ3MgeS9uIOKAlCBzaG93aW5nIHRoZSBkaWFsb2cgd291bGQgbWlzbGVhZCAoXCJ5XCIg4oaSIG5vdGhpbmdcbiAgICAgICAgICAvLyBoYXBwZW5zKS4gTGVuZ3RoIGNoZWNrIG1pcnJvcnMgcGx1Z2luT3BlcmF0aW9ucy50czo1MTMuXG4gICAgICAgICAgY29uc3QgaW5zdGFsbHMgPSBsb2FkSW5zdGFsbGVkUGx1Z2luc1YyKCkucGx1Z2luc1twbHVnaW5JZF1cbiAgICAgICAgICBjb25zdCBpc0xhc3RTY29wZSA9ICFpbnN0YWxscyB8fCBpbnN0YWxscy5sZW5ndGggPD0gMVxuICAgICAgICAgIGNvbnN0IGRhdGFTaXplID0gaXNMYXN0U2NvcGVcbiAgICAgICAgICAgID8gYXdhaXQgZ2V0UGx1Z2luRGF0YURpclNpemUocGx1Z2luSWQpXG4gICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICBpZiAoZGF0YVNpemUpIHtcbiAgICAgICAgICAgIHNldElzUHJvY2Vzc2luZyhmYWxzZSlcbiAgICAgICAgICAgIHNldFZpZXdTdGF0ZSh7IHR5cGU6ICdjb25maXJtLWRhdGEtY2xlYW51cCcsIHNpemU6IGRhdGFTaXplIH0pXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdW5pbnN0YWxsUGx1Z2luT3AocGx1Z2luSWQsIHBsdWdpblNjb3BlKVxuICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXN1bHQubWVzc2FnZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV2ZXJzZURlcGVuZGVudHMgPSByZXN1bHQucmV2ZXJzZURlcGVuZGVudHNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ3VwZGF0ZSc6IHtcbiAgICAgICAgICBpZiAoaXNCdWlsdGluKSBicmVhayAvLyBndWFyZGVkIGFib3ZlOyBuYXJyb3dzIHBsdWdpblNjb3BlXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdXBkYXRlUGx1Z2luT3AocGx1Z2luSWQsIHBsdWdpblNjb3BlKVxuICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXN1bHQubWVzc2FnZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gSWYgYWxyZWFkeSB1cCB0byBkYXRlLCBzaG93IG1lc3NhZ2UgYW5kIGV4aXRcbiAgICAgICAgICBpZiAocmVzdWx0LmFscmVhZHlVcFRvRGF0ZSkge1xuICAgICAgICAgICAgc2V0UmVzdWx0KFxuICAgICAgICAgICAgICBgJHtzZWxlY3RlZFBsdWdpbi5wbHVnaW4ubmFtZX0gaXMgYWxyZWFkeSBhdCB0aGUgbGF0ZXN0IHZlcnNpb24gKCR7cmVzdWx0Lm5ld1ZlcnNpb259KS5gLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKG9uTWFuYWdlQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgYXdhaXQgb25NYW5hZ2VDb21wbGV0ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRQYXJlbnRWaWV3U3RhdGUoeyB0eXBlOiAnbWVudScgfSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBTdWNjZXNzIC0gd2lsbCBzaG93IHN0YW5kYXJkIG1lc3NhZ2UgYmVsb3dcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE9wZXJhdGlvbnMgKGVuYWJsZSwgZGlzYWJsZSwgdW5pbnN0YWxsLCB1cGRhdGUpIG5vdyB1c2UgY2VudHJhbGl6ZWQgZnVuY3Rpb25zXG4gICAgICAvLyB0aGF0IGhhbmRsZSB0aGVpciBvd24gc2V0dGluZ3MgdXBkYXRlcywgc28gd2Ugb25seSBuZWVkIHRvIGNsZWFyIGNhY2hlcyBoZXJlXG4gICAgICBjbGVhckFsbENhY2hlcygpXG5cbiAgICAgIC8vIFByb21wdCBmb3IgbWFuaWZlc3QudXNlckNvbmZpZyArIGNoYW5uZWwgdXNlckNvbmZpZyBpZiB0aGUgcGx1Z2luIGVuZHNcbiAgICAgIC8vIHVwIGVuYWJsZWQuIFJlLXJlYWQgc2V0dGluZ3MgcmF0aGVyIHRoYW4ga2V5aW5nIG9uIGBvcGVyYXRpb24gPT09XG4gICAgICAvLyAnZW5hYmxlJ2A6IGluc3RhbGwgZW5hYmxlcyBvbiBpbnN0YWxsLCBzbyB0aGUgbWVudSBzaG93cyBcIkRpc2FibGVcIlxuICAgICAgLy8gZmlyc3QuIFBsdWdpbk9wdGlvbnNGbG93IGl0c2VsZiBjaGVja3MgZ2V0VW5jb25maWd1cmVkT3B0aW9ucyDigJQgaWZcbiAgICAgIC8vIG5vdGhpbmcgbmVlZHMgZmlsbGluZywgaXQgY2FsbHMgb25Eb25lKCdza2lwcGVkJykgaW1tZWRpYXRlbHkuXG4gICAgICBjb25zdCBwbHVnaW5JZE5vdyA9IGAke3NlbGVjdGVkUGx1Z2luLnBsdWdpbi5uYW1lfUAke3NlbGVjdGVkUGx1Z2luLm1hcmtldHBsYWNlfWBcbiAgICAgIGNvbnN0IHNldHRpbmdzQWZ0ZXIgPSBnZXRTZXR0aW5nc19ERVBSRUNBVEVEKClcbiAgICAgIGNvbnN0IGVuYWJsZWRBZnRlciA9XG4gICAgICAgIHNldHRpbmdzQWZ0ZXI/LmVuYWJsZWRQbHVnaW5zPy5bcGx1Z2luSWROb3ddICE9PSBmYWxzZVxuICAgICAgaWYgKGVuYWJsZWRBZnRlcikge1xuICAgICAgICBzZXRJc1Byb2Nlc3NpbmcoZmFsc2UpXG4gICAgICAgIHNldFZpZXdTdGF0ZSh7IHR5cGU6ICdwbHVnaW4tb3B0aW9ucycgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9wZXJhdGlvbk5hbWUgPVxuICAgICAgICBvcGVyYXRpb24gPT09ICdlbmFibGUnXG4gICAgICAgICAgPyAnRW5hYmxlZCdcbiAgICAgICAgICA6IG9wZXJhdGlvbiA9PT0gJ2Rpc2FibGUnXG4gICAgICAgICAgICA/ICdEaXNhYmxlZCdcbiAgICAgICAgICAgIDogb3BlcmF0aW9uID09PSAndXBkYXRlJ1xuICAgICAgICAgICAgICA/ICdVcGRhdGVkJ1xuICAgICAgICAgICAgICA6ICdVbmluc3RhbGxlZCdcblxuICAgICAgLy8gU2luZ2xlLWxpbmUgd2FybmluZyDigJQgbm90aWZpY2F0aW9uIHRpbWVvdXQgaXMgfjhzLCBtdWx0aS1saW5lIHdvdWxkIHNjcm9sbCBvZmYuXG4gICAgICAvLyBUaGUgcGVyc2lzdGVudCByZWNvcmQgaXMgaW4gdGhlIEVycm9ycyB0YWIgKGRlcGVuZGVuY3ktdW5zYXRpc2ZpZWQgYWZ0ZXIgcmVsb2FkKS5cbiAgICAgIGNvbnN0IGRlcFdhcm4gPVxuICAgICAgICByZXZlcnNlRGVwZW5kZW50cyAmJiByZXZlcnNlRGVwZW5kZW50cy5sZW5ndGggPiAwXG4gICAgICAgICAgPyBgIMK3IHJlcXVpcmVkIGJ5ICR7cmV2ZXJzZURlcGVuZGVudHMuam9pbignLCAnKX1gXG4gICAgICAgICAgOiAnJ1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGDinJMgJHtvcGVyYXRpb25OYW1lfSAke3NlbGVjdGVkUGx1Z2luLnBsdWdpbi5uYW1lfSR7ZGVwV2Fybn0uIFJ1biAvcmVsb2FkLXBsdWdpbnMgdG8gYXBwbHkuYFxuICAgICAgc2V0UmVzdWx0KG1lc3NhZ2UpXG5cbiAgICAgIGlmIChvbk1hbmFnZUNvbXBsZXRlKSB7XG4gICAgICAgIGF3YWl0IG9uTWFuYWdlQ29tcGxldGUoKVxuICAgICAgfVxuXG4gICAgICBzZXRQYXJlbnRWaWV3U3RhdGUoeyB0eXBlOiAnbWVudScgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0SXNQcm9jZXNzaW5nKGZhbHNlKVxuICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID1cbiAgICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBTdHJpbmcoZXJyb3IpXG4gICAgICBzZXRQcm9jZXNzRXJyb3IoYEZhaWxlZCB0byAke29wZXJhdGlvbn06ICR7ZXJyb3JNZXNzYWdlfWApXG4gICAgICBsb2dFcnJvcih0b0Vycm9yKGVycm9yKSlcbiAgICB9XG4gIH1cblxuICAvLyBMYXRlc3QtcmVmOiBsZXRzIHRoZSBhdXRvLWFjdGlvbiBlZmZlY3QgY2FsbCB0aGUgY3VycmVudCBjbG9zdXJlIHdpdGhvdXRcbiAgLy8gYWRkaW5nIGhhbmRsZVNpbmdsZU9wZXJhdGlvbiAocmVjcmVhdGVkIGV2ZXJ5IHJlbmRlcikgdG8gaXRzIGRlcHMuXG4gIGNvbnN0IGhhbmRsZVNpbmdsZU9wZXJhdGlvblJlZiA9IHVzZVJlZihoYW5kbGVTaW5nbGVPcGVyYXRpb24pXG4gIGhhbmRsZVNpbmdsZU9wZXJhdGlvblJlZi5jdXJyZW50ID0gaGFuZGxlU2luZ2xlT3BlcmF0aW9uXG5cbiAgLy8gQXV0by1leGVjdXRlIHRoZSBhY3Rpb24gcHJvcCAoL3BsdWdpbiB1bmluc3RhbGwgWCwgL3BsdWdpbiBlbmFibGUgWCwgZXRjLilcbiAgLy8gb25jZSBhdXRvLW5hdmlnYXRpb24gaGFzIGxhbmRlZCBvbiBwbHVnaW4tZGV0YWlscy5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICB2aWV3U3RhdGUgPT09ICdwbHVnaW4tZGV0YWlscycgJiZcbiAgICAgIHNlbGVjdGVkUGx1Z2luICYmXG4gICAgICBwZW5kaW5nQXV0b0FjdGlvblJlZi5jdXJyZW50XG4gICAgKSB7XG4gICAgICBjb25zdCBwZW5kaW5nID0gcGVuZGluZ0F1dG9BY3Rpb25SZWYuY3VycmVudFxuICAgICAgcGVuZGluZ0F1dG9BY3Rpb25SZWYuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgdm9pZCBoYW5kbGVTaW5nbGVPcGVyYXRpb25SZWYuY3VycmVudChwZW5kaW5nKVxuICAgIH1cbiAgfSwgW3ZpZXdTdGF0ZSwgc2VsZWN0ZWRQbHVnaW5dKVxuXG4gIC8vIEhhbmRsZSB0b2dnbGUgZW5hYmxlL2Rpc2FibGVcbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZEluZGV4ID49IGZpbHRlcmVkSXRlbXMubGVuZ3RoKSByZXR1cm5cbiAgICBjb25zdCBpdGVtID0gZmlsdGVyZWRJdGVtc1tzZWxlY3RlZEluZGV4XVxuICAgIGlmIChpdGVtPy50eXBlID09PSAnZmxhZ2dlZC1wbHVnaW4nKSByZXR1cm5cbiAgICBpZiAoaXRlbT8udHlwZSA9PT0gJ3BsdWdpbicpIHtcbiAgICAgIGNvbnN0IHBsdWdpbklkID0gYCR7aXRlbS5wbHVnaW4ubmFtZX1AJHtpdGVtLm1hcmtldHBsYWNlfWBcbiAgICAgIGNvbnN0IG1lcmdlZFNldHRpbmdzID0gZ2V0U2V0dGluZ3NfREVQUkVDQVRFRCgpXG4gICAgICBjb25zdCBjdXJyZW50UGVuZGluZyA9IHBlbmRpbmdUb2dnbGVzLmdldChwbHVnaW5JZClcbiAgICAgIGNvbnN0IGlzRW5hYmxlZCA9IG1lcmdlZFNldHRpbmdzPy5lbmFibGVkUGx1Z2lucz8uW3BsdWdpbklkXSAhPT0gZmFsc2VcbiAgICAgIGNvbnN0IHBsdWdpblNjb3BlID0gaXRlbS5zY29wZVxuICAgICAgY29uc3QgaXNCdWlsdGluID0gcGx1Z2luU2NvcGUgPT09ICdidWlsdGluJ1xuICAgICAgaWYgKGlzQnVpbHRpbiB8fCBpc0luc3RhbGxhYmxlU2NvcGUocGx1Z2luU2NvcGUpKSB7XG4gICAgICAgIGNvbnN0IG5ld1BlbmRpbmcgPSBuZXcgTWFwKHBlbmRpbmdUb2dnbGVzKVxuICAgICAgICAvLyBPbWl0IHNjb3BlIOKAlCBzZWUgaGFuZGxlU2luZ2xlT3BlcmF0aW9uJ3MgZW5hYmxlL2Rpc2FibGUgY29tbWVudC5cbiAgICAgICAgaWYgKGN1cnJlbnRQZW5kaW5nKSB7XG4gICAgICAgICAgLy8gQ2FuY2VsOiByZXZlcnNlIHRoZSBvcGVyYXRpb24gYmFjayB0byB0aGUgb3JpZ2luYWwgc3RhdGVcbiAgICAgICAgICBuZXdQZW5kaW5nLmRlbGV0ZShwbHVnaW5JZClcbiAgICAgICAgICB2b2lkIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBpZiAoY3VycmVudFBlbmRpbmcgPT09ICd3aWxsLWRpc2FibGUnKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgZW5hYmxlUGx1Z2luT3AocGx1Z2luSWQpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgZGlzYWJsZVBsdWdpbk9wKHBsdWdpbklkKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNsZWFyQWxsQ2FjaGVzKClcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICBsb2dFcnJvcihlcnIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1BlbmRpbmcuc2V0KHBsdWdpbklkLCBpc0VuYWJsZWQgPyAnd2lsbC1kaXNhYmxlJyA6ICd3aWxsLWVuYWJsZScpXG4gICAgICAgICAgdm9pZCAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgaWYgKGlzRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGRpc2FibGVQbHVnaW5PcChwbHVnaW5JZClcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBlbmFibGVQbHVnaW5PcChwbHVnaW5JZClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjbGVhckFsbENhY2hlcygpXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgbG9nRXJyb3IoZXJyKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKClcbiAgICAgICAgfVxuICAgICAgICBzZXRQZW5kaW5nVG9nZ2xlcyhuZXdQZW5kaW5nKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXRlbT8udHlwZSA9PT0gJ21jcCcpIHtcbiAgICAgIHZvaWQgdG9nZ2xlTWNwU2VydmVyKGl0ZW0uY2xpZW50Lm5hbWUpXG4gICAgfVxuICB9LCBbXG4gICAgc2VsZWN0ZWRJbmRleCxcbiAgICBmaWx0ZXJlZEl0ZW1zLFxuICAgIHBlbmRpbmdUb2dnbGVzLFxuICAgIHBsdWdpblN0YXRlcyxcbiAgICB0b2dnbGVNY3BTZXJ2ZXIsXG4gIF0pXG5cbiAgLy8gSGFuZGxlIGFjY2VwdCAoRW50ZXIpIGluIHBsdWdpbi1saXN0XG4gIGNvbnN0IGhhbmRsZUFjY2VwdCA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRJbmRleCA+PSBmaWx0ZXJlZEl0ZW1zLmxlbmd0aCkgcmV0dXJuXG4gICAgY29uc3QgaXRlbSA9IGZpbHRlcmVkSXRlbXNbc2VsZWN0ZWRJbmRleF1cbiAgICBpZiAoaXRlbT8udHlwZSA9PT0gJ3BsdWdpbicpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gcGx1Z2luU3RhdGVzLmZpbmQoXG4gICAgICAgIHMgPT5cbiAgICAgICAgICBzLnBsdWdpbi5uYW1lID09PSBpdGVtLnBsdWdpbi5uYW1lICYmXG4gICAgICAgICAgcy5tYXJrZXRwbGFjZSA9PT0gaXRlbS5tYXJrZXRwbGFjZSxcbiAgICAgIClcbiAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICBzZXRTZWxlY3RlZFBsdWdpbihzdGF0ZSlcbiAgICAgICAgc2V0Vmlld1N0YXRlKCdwbHVnaW4tZGV0YWlscycpXG4gICAgICAgIHNldERldGFpbHNNZW51SW5kZXgoMClcbiAgICAgICAgc2V0UHJvY2Vzc0Vycm9yKG51bGwpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpdGVtPy50eXBlID09PSAnZmxhZ2dlZC1wbHVnaW4nKSB7XG4gICAgICBzZXRWaWV3U3RhdGUoe1xuICAgICAgICB0eXBlOiAnZmxhZ2dlZC1kZXRhaWwnLFxuICAgICAgICBwbHVnaW46IHtcbiAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgbWFya2V0cGxhY2U6IGl0ZW0ubWFya2V0cGxhY2UsXG4gICAgICAgICAgcmVhc29uOiBpdGVtLnJlYXNvbixcbiAgICAgICAgICB0ZXh0OiBpdGVtLnRleHQsXG4gICAgICAgICAgZmxhZ2dlZEF0OiBpdGVtLmZsYWdnZWRBdCxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICBzZXRQcm9jZXNzRXJyb3IobnVsbClcbiAgICB9IGVsc2UgaWYgKGl0ZW0/LnR5cGUgPT09ICdmYWlsZWQtcGx1Z2luJykge1xuICAgICAgc2V0Vmlld1N0YXRlKHtcbiAgICAgICAgdHlwZTogJ2ZhaWxlZC1wbHVnaW4tZGV0YWlscycsXG4gICAgICAgIHBsdWdpbjoge1xuICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICBtYXJrZXRwbGFjZTogaXRlbS5tYXJrZXRwbGFjZSxcbiAgICAgICAgICBlcnJvcnM6IGl0ZW0uZXJyb3JzLFxuICAgICAgICAgIHNjb3BlOiBpdGVtLnNjb3BlLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIHNldERldGFpbHNNZW51SW5kZXgoMClcbiAgICAgIHNldFByb2Nlc3NFcnJvcihudWxsKVxuICAgIH0gZWxzZSBpZiAoaXRlbT8udHlwZSA9PT0gJ21jcCcpIHtcbiAgICAgIHNldFZpZXdTdGF0ZSh7IHR5cGU6ICdtY3AtZGV0YWlsJywgY2xpZW50OiBpdGVtLmNsaWVudCB9KVxuICAgICAgc2V0UHJvY2Vzc0Vycm9yKG51bGwpXG4gICAgfVxuICB9LCBbc2VsZWN0ZWRJbmRleCwgZmlsdGVyZWRJdGVtcywgcGx1Z2luU3RhdGVzXSlcblxuICAvLyBQbHVnaW4tbGlzdCBuYXZpZ2F0aW9uIChub24tc2VhcmNoIG1vZGUpXG4gIHVzZUtleWJpbmRpbmdzKFxuICAgIHtcbiAgICAgICdzZWxlY3Q6cHJldmlvdXMnOiAoKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgc2V0SXNTZWFyY2hNb2RlKHRydWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFnaW5hdGlvbi5oYW5kbGVTZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0ZWRJbmRleCAtIDEsIHNldFNlbGVjdGVkSW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnc2VsZWN0Om5leHQnOiAoKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZEluZGV4IDwgZmlsdGVyZWRJdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgcGFnaW5hdGlvbi5oYW5kbGVTZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0ZWRJbmRleCArIDEsIHNldFNlbGVjdGVkSW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnc2VsZWN0OmFjY2VwdCc6IGhhbmRsZUFjY2VwdCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbnRleHQ6ICdTZWxlY3QnLFxuICAgICAgaXNBY3RpdmU6IHZpZXdTdGF0ZSA9PT0gJ3BsdWdpbi1saXN0JyAmJiAhaXNTZWFyY2hNb2RlLFxuICAgIH0sXG4gIClcblxuICB1c2VLZXliaW5kaW5ncyhcbiAgICB7ICdwbHVnaW46dG9nZ2xlJzogaGFuZGxlVG9nZ2xlIH0sXG4gICAge1xuICAgICAgY29udGV4dDogJ1BsdWdpbicsXG4gICAgICBpc0FjdGl2ZTogdmlld1N0YXRlID09PSAncGx1Z2luLWxpc3QnICYmICFpc1NlYXJjaE1vZGUsXG4gICAgfSxcbiAgKVxuXG4gIC8vIEhhbmRsZSBkaXNtaXNzIGFjdGlvbiBpbiBmbGFnZ2VkLWRldGFpbCB2aWV3XG4gIGNvbnN0IGhhbmRsZUZsYWdnZWREaXNtaXNzID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygdmlld1N0YXRlICE9PSAnb2JqZWN0JyB8fCB2aWV3U3RhdGUudHlwZSAhPT0gJ2ZsYWdnZWQtZGV0YWlsJylcbiAgICAgIHJldHVyblxuICAgIHZvaWQgcmVtb3ZlRmxhZ2dlZFBsdWdpbih2aWV3U3RhdGUucGx1Z2luLmlkKVxuICAgIHNldFZpZXdTdGF0ZSgncGx1Z2luLWxpc3QnKVxuICB9LCBbdmlld1N0YXRlXSlcblxuICB1c2VLZXliaW5kaW5ncyhcbiAgICB7ICdzZWxlY3Q6YWNjZXB0JzogaGFuZGxlRmxhZ2dlZERpc21pc3MgfSxcbiAgICB7XG4gICAgICBjb250ZXh0OiAnU2VsZWN0JyxcbiAgICAgIGlzQWN0aXZlOlxuICAgICAgICB0eXBlb2Ygdmlld1N0YXRlID09PSAnb2JqZWN0JyAmJiB2aWV3U3RhdGUudHlwZSA9PT0gJ2ZsYWdnZWQtZGV0YWlsJyxcbiAgICB9LFxuICApXG5cbiAgLy8gQnVpbGQgZGV0YWlscyBtZW51IGl0ZW1zIChuZWVkZWQgZm9yIG5hdmlnYXRpb24pXG4gIGNvbnN0IGRldGFpbHNNZW51SXRlbXMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBpZiAodmlld1N0YXRlICE9PSAncGx1Z2luLWRldGFpbHMnIHx8ICFzZWxlY3RlZFBsdWdpbikgcmV0dXJuIFtdXG5cbiAgICBjb25zdCBtZXJnZWRTZXR0aW5ncyA9IGdldFNldHRpbmdzX0RFUFJFQ0FURUQoKVxuICAgIGNvbnN0IHBsdWdpbklkID0gYCR7c2VsZWN0ZWRQbHVnaW4ucGx1Z2luLm5hbWV9QCR7c2VsZWN0ZWRQbHVnaW4ubWFya2V0cGxhY2V9YFxuICAgIGNvbnN0IGlzRW5hYmxlZCA9IG1lcmdlZFNldHRpbmdzPy5lbmFibGVkUGx1Z2lucz8uW3BsdWdpbklkXSAhPT0gZmFsc2VcbiAgICBjb25zdCBpc0J1aWx0aW4gPSBzZWxlY3RlZFBsdWdpbi5tYXJrZXRwbGFjZSA9PT0gJ2J1aWx0aW4nXG5cbiAgICBjb25zdCBtZW51SXRlbXM6IEFycmF5PHsgbGFiZWw6IHN0cmluZzsgYWN0aW9uOiAoKSA9PiB2b2lkIH0+ID0gW11cblxuICAgIG1lbnVJdGVtcy5wdXNoKHtcbiAgICAgIGxhYmVsOiBpc0VuYWJsZWQgPyAnRGlzYWJsZSBwbHVnaW4nIDogJ0VuYWJsZSBwbHVnaW4nLFxuICAgICAgYWN0aW9uOiAoKSA9PlxuICAgICAgICB2b2lkIGhhbmRsZVNpbmdsZU9wZXJhdGlvbihpc0VuYWJsZWQgPyAnZGlzYWJsZScgOiAnZW5hYmxlJyksXG4gICAgfSlcblxuICAgIC8vIFVwZGF0ZS9Vbmluc3RhbGwgb3B0aW9ucyDigJQgbm90IGF2YWlsYWJsZSBmb3IgYnVpbHQtaW4gcGx1Z2luc1xuICAgIGlmICghaXNCdWlsdGluKSB7XG4gICAgICBtZW51SXRlbXMucHVzaCh7XG4gICAgICAgIGxhYmVsOiBzZWxlY3RlZFBsdWdpbi5wZW5kaW5nVXBkYXRlXG4gICAgICAgICAgPyAnVW5tYXJrIGZvciB1cGRhdGUnXG4gICAgICAgICAgOiAnTWFyayBmb3IgdXBkYXRlJyxcbiAgICAgICAgYWN0aW9uOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsRXJyb3IgPSBhd2FpdCBjaGVja0lmTG9jYWxQbHVnaW4oXG4gICAgICAgICAgICAgIHNlbGVjdGVkUGx1Z2luLnBsdWdpbi5uYW1lLFxuICAgICAgICAgICAgICBzZWxlY3RlZFBsdWdpbi5tYXJrZXRwbGFjZSxcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgaWYgKGxvY2FsRXJyb3IpIHtcbiAgICAgICAgICAgICAgc2V0UHJvY2Vzc0Vycm9yKGxvY2FsRXJyb3IpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBuZXdTdGF0ZXMgPSBbLi4ucGx1Z2luU3RhdGVzXVxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBuZXdTdGF0ZXMuZmluZEluZGV4KFxuICAgICAgICAgICAgICBzID0+XG4gICAgICAgICAgICAgICAgcy5wbHVnaW4ubmFtZSA9PT0gc2VsZWN0ZWRQbHVnaW4ucGx1Z2luLm5hbWUgJiZcbiAgICAgICAgICAgICAgICBzLm1hcmtldHBsYWNlID09PSBzZWxlY3RlZFBsdWdpbi5tYXJrZXRwbGFjZSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgbmV3U3RhdGVzW2luZGV4XSEucGVuZGluZ1VwZGF0ZSA9ICFzZWxlY3RlZFBsdWdpbi5wZW5kaW5nVXBkYXRlXG4gICAgICAgICAgICAgIHNldFBsdWdpblN0YXRlcyhuZXdTdGF0ZXMpXG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkUGx1Z2luKHtcbiAgICAgICAgICAgICAgICAuLi5zZWxlY3RlZFBsdWdpbixcbiAgICAgICAgICAgICAgICBwZW5kaW5nVXBkYXRlOiAhc2VsZWN0ZWRQbHVnaW4ucGVuZGluZ1VwZGF0ZSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgc2V0UHJvY2Vzc0Vycm9yKFxuICAgICAgICAgICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yXG4gICAgICAgICAgICAgICAgPyBlcnJvci5tZXNzYWdlXG4gICAgICAgICAgICAgICAgOiAnRmFpbGVkIHRvIGNoZWNrIHBsdWdpbiB1cGRhdGUgYXZhaWxhYmlsaXR5JyxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9KVxuXG4gICAgICBpZiAoc2VsZWN0ZWRQbHVnaW5IYXNNY3BiKSB7XG4gICAgICAgIG1lbnVJdGVtcy5wdXNoKHtcbiAgICAgICAgICBsYWJlbDogJ0NvbmZpZ3VyZScsXG4gICAgICAgICAgYWN0aW9uOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBzZXRJc0xvYWRpbmdDb25maWcodHJ1ZSlcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGNvbnN0IG1jcFNlcnZlcnNTcGVjID0gc2VsZWN0ZWRQbHVnaW4ucGx1Z2luLm1hbmlmZXN0Lm1jcFNlcnZlcnNcblxuICAgICAgICAgICAgICBsZXQgbWNwYlBhdGg6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0eXBlb2YgbWNwU2VydmVyc1NwZWMgPT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgICAgICAgaXNNY3BiU291cmNlKG1jcFNlcnZlcnNTcGVjKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBtY3BiUGF0aCA9IG1jcFNlcnZlcnNTcGVjXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShtY3BTZXJ2ZXJzU3BlYykpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNwZWMgb2YgbWNwU2VydmVyc1NwZWMpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc3BlYyA9PT0gJ3N0cmluZycgJiYgaXNNY3BiU291cmNlKHNwZWMpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1jcGJQYXRoID0gc3BlY1xuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghbWNwYlBhdGgpIHtcbiAgICAgICAgICAgICAgICBzZXRQcm9jZXNzRXJyb3IoJ05vIE1DUEIgZmlsZSBmb3VuZCBpbiBwbHVnaW4nKVxuICAgICAgICAgICAgICAgIHNldElzTG9hZGluZ0NvbmZpZyhmYWxzZSlcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbnN0IHBsdWdpbklkID0gYCR7c2VsZWN0ZWRQbHVnaW4ucGx1Z2luLm5hbWV9QCR7c2VsZWN0ZWRQbHVnaW4ubWFya2V0cGxhY2V9YFxuICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBsb2FkTWNwYkZpbGUoXG4gICAgICAgICAgICAgICAgbWNwYlBhdGgsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRQbHVnaW4ucGx1Z2luLnBhdGgsXG4gICAgICAgICAgICAgICAgcGx1Z2luSWQsXG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgaWYgKCdzdGF0dXMnIGluIHJlc3VsdCAmJiByZXN1bHQuc3RhdHVzID09PSAnbmVlZHMtY29uZmlnJykge1xuICAgICAgICAgICAgICAgIHNldENvbmZpZ05lZWRlZChyZXN1bHQpXG4gICAgICAgICAgICAgICAgc2V0Vmlld1N0YXRlKCdjb25maWd1cmluZycpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0UHJvY2Vzc0Vycm9yKCdGYWlsZWQgdG8gbG9hZCBNQ1BCIGZvciBjb25maWd1cmF0aW9uJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGVycm9yTXNnID0gZXJyb3JNZXNzYWdlKGVycilcbiAgICAgICAgICAgICAgc2V0UHJvY2Vzc0Vycm9yKGBGYWlsZWQgdG8gbG9hZCBjb25maWd1cmF0aW9uOiAke2Vycm9yTXNnfWApXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICBzZXRJc0xvYWRpbmdDb25maWcoZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBzZWxlY3RlZFBsdWdpbi5wbHVnaW4ubWFuaWZlc3QudXNlckNvbmZpZyAmJlxuICAgICAgICBPYmplY3Qua2V5cyhzZWxlY3RlZFBsdWdpbi5wbHVnaW4ubWFuaWZlc3QudXNlckNvbmZpZykubGVuZ3RoID4gMFxuICAgICAgKSB7XG4gICAgICAgIG1lbnVJdGVtcy5wdXNoKHtcbiAgICAgICAgICBsYWJlbDogJ0NvbmZpZ3VyZSBvcHRpb25zJyxcbiAgICAgICAgICBhY3Rpb246ICgpID0+IHtcbiAgICAgICAgICAgIHNldFZpZXdTdGF0ZSh7XG4gICAgICAgICAgICAgIHR5cGU6ICdjb25maWd1cmluZy1vcHRpb25zJyxcbiAgICAgICAgICAgICAgc2NoZW1hOiBzZWxlY3RlZFBsdWdpbi5wbHVnaW4ubWFuaWZlc3QudXNlckNvbmZpZyEsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIG1lbnVJdGVtcy5wdXNoKHtcbiAgICAgICAgbGFiZWw6ICdVcGRhdGUgbm93JyxcbiAgICAgICAgYWN0aW9uOiAoKSA9PiB2b2lkIGhhbmRsZVNpbmdsZU9wZXJhdGlvbigndXBkYXRlJyksXG4gICAgICB9KVxuXG4gICAgICBtZW51SXRlbXMucHVzaCh7XG4gICAgICAgIGxhYmVsOiAnVW5pbnN0YWxsJyxcbiAgICAgICAgYWN0aW9uOiAoKSA9PiB2b2lkIGhhbmRsZVNpbmdsZU9wZXJhdGlvbigndW5pbnN0YWxsJyksXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChzZWxlY3RlZFBsdWdpbi5wbHVnaW4ubWFuaWZlc3QuaG9tZXBhZ2UpIHtcbiAgICAgIG1lbnVJdGVtcy5wdXNoKHtcbiAgICAgICAgbGFiZWw6ICdPcGVuIGhvbWVwYWdlJyxcbiAgICAgICAgYWN0aW9uOiAoKSA9PlxuICAgICAgICAgIHZvaWQgb3BlbkJyb3dzZXIoc2VsZWN0ZWRQbHVnaW4ucGx1Z2luLm1hbmlmZXN0LmhvbWVwYWdlISksXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChzZWxlY3RlZFBsdWdpbi5wbHVnaW4ubWFuaWZlc3QucmVwb3NpdG9yeSkge1xuICAgICAgbWVudUl0ZW1zLnB1c2goe1xuICAgICAgICAvLyBHZW5lcmljIGxhYmVsIOKAlCBtYW5pZmVzdC5yZXBvc2l0b3J5IGNhbiBiZSBHaXRMYWIsIEJpdGJ1Y2tldCxcbiAgICAgICAgLy8gQXp1cmUgRGV2T3BzLCBldGMuIChnaC0zMTU5OCkuIHBsdWdpbkRldGFpbHNIZWxwZXJzLnRzeDo3NCBrZWVwc1xuICAgICAgICAvLyAnVmlldyBvbiBHaXRIdWInIGJlY2F1c2UgdGhhdCBwYXRoIGhhcyBhbiBleHBsaWNpdCBpc0dpdEh1YiBjaGVjay5cbiAgICAgICAgbGFiZWw6ICdWaWV3IHJlcG9zaXRvcnknLFxuICAgICAgICBhY3Rpb246ICgpID0+XG4gICAgICAgICAgdm9pZCBvcGVuQnJvd3NlcihzZWxlY3RlZFBsdWdpbi5wbHVnaW4ubWFuaWZlc3QucmVwb3NpdG9yeSEpLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBtZW51SXRlbXMucHVzaCh7XG4gICAgICBsYWJlbDogJ0JhY2sgdG8gcGx1Z2luIGxpc3QnLFxuICAgICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICAgIHNldFZpZXdTdGF0ZSgncGx1Z2luLWxpc3QnKVxuICAgICAgICBzZXRTZWxlY3RlZFBsdWdpbihudWxsKVxuICAgICAgICBzZXRQcm9jZXNzRXJyb3IobnVsbClcbiAgICAgIH0sXG4gICAgfSlcblxuICAgIHJldHVybiBtZW51SXRlbXNcbiAgfSwgW3ZpZXdTdGF0ZSwgc2VsZWN0ZWRQbHVnaW4sIHNlbGVjdGVkUGx1Z2luSGFzTWNwYiwgcGx1Z2luU3RhdGVzXSlcblxuICAvLyBQbHVnaW4tZGV0YWlscyBuYXZpZ2F0aW9uXG4gIHVzZUtleWJpbmRpbmdzKFxuICAgIHtcbiAgICAgICdzZWxlY3Q6cHJldmlvdXMnOiAoKSA9PiB7XG4gICAgICAgIGlmIChkZXRhaWxzTWVudUluZGV4ID4gMCkge1xuICAgICAgICAgIHNldERldGFpbHNNZW51SW5kZXgoZGV0YWlsc01lbnVJbmRleCAtIDEpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnc2VsZWN0Om5leHQnOiAoKSA9PiB7XG4gICAgICAgIGlmIChkZXRhaWxzTWVudUluZGV4IDwgZGV0YWlsc01lbnVJdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgc2V0RGV0YWlsc01lbnVJbmRleChkZXRhaWxzTWVudUluZGV4ICsgMSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICdzZWxlY3Q6YWNjZXB0JzogKCkgPT4ge1xuICAgICAgICBpZiAoZGV0YWlsc01lbnVJdGVtc1tkZXRhaWxzTWVudUluZGV4XSkge1xuICAgICAgICAgIGRldGFpbHNNZW51SXRlbXNbZGV0YWlsc01lbnVJbmRleF0hLmFjdGlvbigpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBjb250ZXh0OiAnU2VsZWN0JyxcbiAgICAgIGlzQWN0aXZlOiB2aWV3U3RhdGUgPT09ICdwbHVnaW4tZGV0YWlscycgJiYgISFzZWxlY3RlZFBsdWdpbixcbiAgICB9LFxuICApXG5cbiAgLy8gRmFpbGVkLXBsdWdpbi1kZXRhaWxzOiBvbmx5IFwiVW5pbnN0YWxsXCIgb3B0aW9uLCBoYW5kbGUgRW50ZXJcbiAgdXNlS2V5YmluZGluZ3MoXG4gICAge1xuICAgICAgJ3NlbGVjdDphY2NlcHQnOiAoKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0eXBlb2Ygdmlld1N0YXRlID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgIHZpZXdTdGF0ZS50eXBlID09PSAnZmFpbGVkLXBsdWdpbi1kZXRhaWxzJ1xuICAgICAgICApIHtcbiAgICAgICAgICB2b2lkIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBzZXRJc1Byb2Nlc3NpbmcodHJ1ZSlcbiAgICAgICAgICAgIHNldFByb2Nlc3NFcnJvcihudWxsKVxuICAgICAgICAgICAgY29uc3QgcGx1Z2luSWQgPSB2aWV3U3RhdGUucGx1Z2luLmlkXG4gICAgICAgICAgICBjb25zdCBwbHVnaW5TY29wZSA9IHZpZXdTdGF0ZS5wbHVnaW4uc2NvcGVcbiAgICAgICAgICAgIC8vIFBhc3Mgc2NvcGUgdG8gdW5pbnN0YWxsUGx1Z2luT3Agc28gaXQgY2FuIGZpbmQgdGhlIGNvcnJlY3QgVjJcbiAgICAgICAgICAgIC8vIGluc3RhbGxhdGlvbiByZWNvcmQgYW5kIGNsZWFuIHVwIG9uLWRpc2sgZmlsZXMuIEZhbGwgYmFjayB0b1xuICAgICAgICAgICAgLy8gZGVmYXVsdCBzY29wZSBpZiBub3QgaW5zdGFsbGFibGUgKGUuZy4gJ21hbmFnZWQnLCB0aG91Z2ggdGhhdFxuICAgICAgICAgICAgLy8gY2FzZSBpcyBndWFyZGVkIGJ5IGlzQWN0aXZlIGJlbG93KS4gZGVsZXRlRGF0YURpcj1mYWxzZTogdGhpc1xuICAgICAgICAgICAgLy8gaXMgYSByZWNvdmVyeSBwYXRoIGZvciBhIHBsdWdpbiB0aGF0IGZhaWxlZCB0byBsb2FkIOKAlCBpdCBtYXlcbiAgICAgICAgICAgIC8vIGJlIHJlaW5zdGFsbGFibGUsIHNvIGRvbid0IG51a2UgJHtDTEFVREVfUExVR0lOX0RBVEF9IHNpbGVudGx5LlxuICAgICAgICAgICAgLy8gVGhlIG5vcm1hbCB1bmluc3RhbGwgcGF0aCBwcm9tcHRzOyB0aGlzIG9uZSBwcmVzZXJ2ZXMuXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBpc0luc3RhbGxhYmxlU2NvcGUocGx1Z2luU2NvcGUpXG4gICAgICAgICAgICAgID8gYXdhaXQgdW5pbnN0YWxsUGx1Z2luT3AocGx1Z2luSWQsIHBsdWdpblNjb3BlLCBmYWxzZSlcbiAgICAgICAgICAgICAgOiBhd2FpdCB1bmluc3RhbGxQbHVnaW5PcChwbHVnaW5JZCwgJ3VzZXInLCBmYWxzZSlcbiAgICAgICAgICAgIGxldCBzdWNjZXNzID0gcmVzdWx0LnN1Y2Nlc3NcbiAgICAgICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgICAgICAvLyBQbHVnaW4gd2FzIG5ldmVyIGluc3RhbGxlZCAob25seSBpbiBlbmFibGVkUGx1Z2lucyBzZXR0aW5ncykuXG4gICAgICAgICAgICAgIC8vIFJlbW92ZSBkaXJlY3RseSBmcm9tIGFsbCBlZGl0YWJsZSBzZXR0aW5ncyBzb3VyY2VzLlxuICAgICAgICAgICAgICBjb25zdCBlZGl0YWJsZVNvdXJjZXMgPSBbXG4gICAgICAgICAgICAgICAgJ3VzZXJTZXR0aW5ncycgYXMgY29uc3QsXG4gICAgICAgICAgICAgICAgJ3Byb2plY3RTZXR0aW5ncycgYXMgY29uc3QsXG4gICAgICAgICAgICAgICAgJ2xvY2FsU2V0dGluZ3MnIGFzIGNvbnN0LFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIGZvciAoY29uc3Qgc291cmNlIG9mIGVkaXRhYmxlU291cmNlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gZ2V0U2V0dGluZ3NGb3JTb3VyY2Uoc291cmNlKVxuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncz8uZW5hYmxlZFBsdWdpbnM/LltwbHVnaW5JZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgdXBkYXRlU2V0dGluZ3NGb3JTb3VyY2Uoc291cmNlLCB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWRQbHVnaW5zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uc2V0dGluZ3MuZW5hYmxlZFBsdWdpbnMsXG4gICAgICAgICAgICAgICAgICAgICAgW3BsdWdpbklkXTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIENsZWFyIG1lbW9pemVkIGNhY2hlcyBzbyBuZXh0IGxvYWRBbGxQbHVnaW5zKCkgcGlja3MgdXAgc2V0dGluZ3MgY2hhbmdlc1xuICAgICAgICAgICAgICBjbGVhckFsbENhY2hlcygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgICBpZiAob25NYW5hZ2VDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IG9uTWFuYWdlQ29tcGxldGUoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNldElzUHJvY2Vzc2luZyhmYWxzZSlcbiAgICAgICAgICAgICAgLy8gUmV0dXJuIHRvIGxpc3QgKGRvbid0IHNldFJlc3VsdCDigJQgdGhhdCBjbG9zZXMgdGhlIHdob2xlIGRpYWxvZylcbiAgICAgICAgICAgICAgc2V0Vmlld1N0YXRlKCdwbHVnaW4tbGlzdCcpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZXRJc1Byb2Nlc3NpbmcoZmFsc2UpXG4gICAgICAgICAgICAgIHNldFByb2Nlc3NFcnJvcihyZXN1bHQubWVzc2FnZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSgpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBjb250ZXh0OiAnU2VsZWN0JyxcbiAgICAgIGlzQWN0aXZlOlxuICAgICAgICB0eXBlb2Ygdmlld1N0YXRlID09PSAnb2JqZWN0JyAmJlxuICAgICAgICB2aWV3U3RhdGUudHlwZSA9PT0gJ2ZhaWxlZC1wbHVnaW4tZGV0YWlscycgJiZcbiAgICAgICAgdmlld1N0YXRlLnBsdWdpbi5zY29wZSAhPT0gJ21hbmFnZWQnLFxuICAgIH0sXG4gIClcblxuICAvLyBDb25maXJtLXByb2plY3QtdW5pbnN0YWxsOiB5L2VudGVyIGRpc2FibGVzIGluIHNldHRpbmdzLmxvY2FsLmpzb24sIG4vZXNjYXBlIGNhbmNlbHNcbiAgdXNlS2V5YmluZGluZ3MoXG4gICAge1xuICAgICAgJ2NvbmZpcm06eWVzJzogKCkgPT4ge1xuICAgICAgICBpZiAoIXNlbGVjdGVkUGx1Z2luKSByZXR1cm5cbiAgICAgICAgc2V0SXNQcm9jZXNzaW5nKHRydWUpXG4gICAgICAgIHNldFByb2Nlc3NFcnJvcihudWxsKVxuICAgICAgICBjb25zdCBwbHVnaW5JZCA9IGAke3NlbGVjdGVkUGx1Z2luLnBsdWdpbi5uYW1lfUAke3NlbGVjdGVkUGx1Z2luLm1hcmtldHBsYWNlfWBcbiAgICAgICAgLy8gV3JpdGUgYGZhbHNlYCBkaXJlY3RseSDigJQgZGlzYWJsZVBsdWdpbk9wJ3MgY3Jvc3Mtc2NvcGUgZ3VhcmQgd291bGRcbiAgICAgICAgLy8gcmVqZWN0IHRoaXMgKHBsdWdpbiBpc24ndCBpbiBsb2NhbFNldHRpbmdzIHlldDsgdGhlIG92ZXJyaWRlIElTIHRoZVxuICAgICAgICAvLyBwb2ludCkuXG4gICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHVwZGF0ZVNldHRpbmdzRm9yU291cmNlKCdsb2NhbFNldHRpbmdzJywge1xuICAgICAgICAgIGVuYWJsZWRQbHVnaW5zOiB7XG4gICAgICAgICAgICAuLi5nZXRTZXR0aW5nc0ZvclNvdXJjZSgnbG9jYWxTZXR0aW5ncycpPy5lbmFibGVkUGx1Z2lucyxcbiAgICAgICAgICAgIFtwbHVnaW5JZF06IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHNldElzUHJvY2Vzc2luZyhmYWxzZSlcbiAgICAgICAgICBzZXRQcm9jZXNzRXJyb3IoYEZhaWxlZCB0byB3cml0ZSBzZXR0aW5nczogJHtlcnJvci5tZXNzYWdlfWApXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJBbGxDYWNoZXMoKVxuICAgICAgICBzZXRSZXN1bHQoXG4gICAgICAgICAgYOKckyBEaXNhYmxlZCAke3NlbGVjdGVkUGx1Z2luLnBsdWdpbi5uYW1lfSBpbiAuY2xhdWRlL3NldHRpbmdzLmxvY2FsLmpzb24uIFJ1biAvcmVsb2FkLXBsdWdpbnMgdG8gYXBwbHkuYCxcbiAgICAgICAgKVxuICAgICAgICBpZiAob25NYW5hZ2VDb21wbGV0ZSkgdm9pZCBvbk1hbmFnZUNvbXBsZXRlKClcbiAgICAgICAgc2V0UGFyZW50Vmlld1N0YXRlKHsgdHlwZTogJ21lbnUnIH0pXG4gICAgICB9LFxuICAgICAgJ2NvbmZpcm06bm8nOiAoKSA9PiB7XG4gICAgICAgIHNldFZpZXdTdGF0ZSgncGx1Z2luLWRldGFpbHMnKVxuICAgICAgICBzZXRQcm9jZXNzRXJyb3IobnVsbClcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBjb250ZXh0OiAnQ29uZmlybWF0aW9uJyxcbiAgICAgIGlzQWN0aXZlOlxuICAgICAgICB2aWV3U3RhdGUgPT09ICdjb25maXJtLXByb2plY3QtdW5pbnN0YWxsJyAmJlxuICAgICAgICAhIXNlbGVjdGVkUGx1Z2luICYmXG4gICAgICAgICFpc1Byb2Nlc3NpbmcsXG4gICAgfSxcbiAgKVxuXG4gIC8vIENvbmZpcm0tZGF0YS1jbGVhbnVwOiB5IHVuaW5zdGFsbHMgKyBkZWxldGVzIGRhdGEgZGlyLCBuIHVuaW5zdGFsbHMgKyBrZWVwcyxcbiAgLy8gZXNjIGNhbmNlbHMuIFJhdyB1c2VJbnB1dCBiZWNhdXNlOiAoMSkgdGhlIENvbmZpcm1hdGlvbiBjb250ZXh0IG1hcHNcbiAgLy8gZW50ZXLihpJjb25maXJtOnllcywgd2hpY2ggd291bGQgbWFrZSBFbnRlciBkZWxldGUgdGhlIGRhdGEgZGlyZWN0b3J5IOKAlCBhXG4gIC8vIGRlc3RydWN0aXZlIGRlZmF1bHQgdGhlIFVJIHRleHQgKFwieSB0byBkZWxldGUgwrcgbiB0byBrZWVwXCIpIGRvZXNuJ3RcbiAgLy8gYWR2ZXJ0aXNlOyAoMikgdW5saWtlIGNvbmZpcm0tcHJvamVjdC11bmluc3RhbGwgKHdoaWNoIHVzZXMgdXNlS2V5YmluZGluZ3NcbiAgLy8gd2hlcmUgbiBhbmQgZXNjYXBlIGJvdGggbWFwIHRvIGNvbmZpcm06bm8pLCBoZXJlIG4gYW5kIGVzY2FwZSBhcmUgRElGRkVSRU5UXG4gIC8vIGFjdGlvbnMgKGtlZXAtZGF0YSB2cyBjYW5jZWwpLCBzbyB0aGlzIGRlbGliZXJhdGVseSBzdGF5cyBvbiByYXcgdXNlSW5wdXQuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjdXN0b20tcnVsZXMvcHJlZmVyLXVzZS1rZXliaW5kaW5ncyAtLSByYXcgeS9uL2VzYzsgRW50ZXIgbXVzdCBub3QgdHJpZ2dlciBkZXN0cnVjdGl2ZSBkZWxldGVcbiAgdXNlSW5wdXQoXG4gICAgKGlucHV0LCBrZXkpID0+IHtcbiAgICAgIGlmICghc2VsZWN0ZWRQbHVnaW4pIHJldHVyblxuICAgICAgY29uc3QgcGx1Z2luSWQgPSBgJHtzZWxlY3RlZFBsdWdpbi5wbHVnaW4ubmFtZX1AJHtzZWxlY3RlZFBsdWdpbi5tYXJrZXRwbGFjZX1gXG4gICAgICBjb25zdCBwbHVnaW5TY29wZSA9IHNlbGVjdGVkUGx1Z2luLnNjb3BlXG4gICAgICAvLyBEaWFsb2cgaXMgb25seSByZWFjaGFibGUgZnJvbSB0aGUgdW5pbnN0YWxsIGNhc2UgKHdoaWNoIGd1YXJkcyBvblxuICAgICAgLy8gaXNCdWlsdGluKSwgYnV0IFRTIGNhbid0IHRyYWNrIHRoYXQgYWNyb3NzIHZpZXdTdGF0ZSB0cmFuc2l0aW9ucy5cbiAgICAgIGlmIChcbiAgICAgICAgIXBsdWdpblNjb3BlIHx8XG4gICAgICAgIHBsdWdpblNjb3BlID09PSAnYnVpbHRpbicgfHxcbiAgICAgICAgIWlzSW5zdGFsbGFibGVTY29wZShwbHVnaW5TY29wZSlcbiAgICAgIClcbiAgICAgICAgcmV0dXJuXG4gICAgICBjb25zdCBkb1VuaW5zdGFsbCA9IGFzeW5jIChkZWxldGVEYXRhRGlyOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHNldElzUHJvY2Vzc2luZyh0cnVlKVxuICAgICAgICBzZXRQcm9jZXNzRXJyb3IobnVsbClcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1bmluc3RhbGxQbHVnaW5PcChcbiAgICAgICAgICAgIHBsdWdpbklkLFxuICAgICAgICAgICAgcGx1Z2luU2NvcGUsXG4gICAgICAgICAgICBkZWxldGVEYXRhRGlyLFxuICAgICAgICAgIClcbiAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKSB0aHJvdyBuZXcgRXJyb3IocmVzdWx0Lm1lc3NhZ2UpXG4gICAgICAgICAgY2xlYXJBbGxDYWNoZXMoKVxuICAgICAgICAgIGNvbnN0IHN1ZmZpeCA9IGRlbGV0ZURhdGFEaXIgPyAnJyA6ICcgwrcgZGF0YSBwcmVzZXJ2ZWQnXG4gICAgICAgICAgc2V0UmVzdWx0KGAke2ZpZ3VyZXMudGlja30gJHtyZXN1bHQubWVzc2FnZX0ke3N1ZmZpeH1gKVxuICAgICAgICAgIGlmIChvbk1hbmFnZUNvbXBsZXRlKSB2b2lkIG9uTWFuYWdlQ29tcGxldGUoKVxuICAgICAgICAgIHNldFBhcmVudFZpZXdTdGF0ZSh7IHR5cGU6ICdtZW51JyB9KVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgc2V0SXNQcm9jZXNzaW5nKGZhbHNlKVxuICAgICAgICAgIHNldFByb2Nlc3NFcnJvcihlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiBTdHJpbmcoZSkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpbnB1dCA9PT0gJ3knIHx8IGlucHV0ID09PSAnWScpIHtcbiAgICAgICAgdm9pZCBkb1VuaW5zdGFsbCh0cnVlKVxuICAgICAgfSBlbHNlIGlmIChpbnB1dCA9PT0gJ24nIHx8IGlucHV0ID09PSAnTicpIHtcbiAgICAgICAgdm9pZCBkb1VuaW5zdGFsbChmYWxzZSlcbiAgICAgIH0gZWxzZSBpZiAoa2V5LmVzY2FwZSkge1xuICAgICAgICBzZXRWaWV3U3RhdGUoJ3BsdWdpbi1kZXRhaWxzJylcbiAgICAgICAgc2V0UHJvY2Vzc0Vycm9yKG51bGwpXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBpc0FjdGl2ZTpcbiAgICAgICAgdHlwZW9mIHZpZXdTdGF0ZSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgdmlld1N0YXRlLnR5cGUgPT09ICdjb25maXJtLWRhdGEtY2xlYW51cCcgJiZcbiAgICAgICAgISFzZWxlY3RlZFBsdWdpbiAmJlxuICAgICAgICAhaXNQcm9jZXNzaW5nLFxuICAgIH0sXG4gIClcblxuICAvLyBSZXNldCBzZWxlY3Rpb24gd2hlbiBzZWFyY2ggcXVlcnkgY2hhbmdlc1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNlbGVjdGVkSW5kZXgoMClcbiAgfSwgW3NlYXJjaFF1ZXJ5XSlcblxuICAvLyBIYW5kbGUgaW5wdXQgZm9yIGVudGVyaW5nIHNlYXJjaCBtb2RlICh0ZXh0IGlucHV0IGhhbmRsZWQgYnkgdXNlU2VhcmNoSW5wdXQgaG9vaylcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGN1c3RvbS1ydWxlcy9wcmVmZXItdXNlLWtleWJpbmRpbmdzIC0tIHVzZUlucHV0IG5lZWRlZCBmb3IgcmF3IHNlYXJjaCBtb2RlIHRleHQgaW5wdXRcbiAgdXNlSW5wdXQoXG4gICAgKGlucHV0LCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IGtleUlzTm90Q3RybE9yTWV0YSA9ICFrZXkuY3RybCAmJiAha2V5Lm1ldGFcbiAgICAgIGlmIChpc1NlYXJjaE1vZGUpIHtcbiAgICAgICAgLy8gVGV4dCBpbnB1dCBpcyBoYW5kbGVkIGJ5IHVzZVNlYXJjaElucHV0IGhvb2tcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIEVudGVyIHNlYXJjaCBtb2RlIHdpdGggJy8nIG9yIGFueSBwcmludGFibGUgY2hhcmFjdGVyIChleGNlcHQgbmF2aWdhdGlvbiBrZXlzKVxuICAgICAgaWYgKGlucHV0ID09PSAnLycgJiYga2V5SXNOb3RDdHJsT3JNZXRhKSB7XG4gICAgICAgIHNldElzU2VhcmNoTW9kZSh0cnVlKVxuICAgICAgICBzZXRTZWFyY2hRdWVyeSgnJylcbiAgICAgICAgc2V0U2VsZWN0ZWRJbmRleCgwKVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5SXNOb3RDdHJsT3JNZXRhICYmXG4gICAgICAgIGlucHV0Lmxlbmd0aCA+IDAgJiZcbiAgICAgICAgIS9eXFxzKyQvLnRlc3QoaW5wdXQpICYmXG4gICAgICAgIGlucHV0ICE9PSAnaicgJiZcbiAgICAgICAgaW5wdXQgIT09ICdrJyAmJlxuICAgICAgICBpbnB1dCAhPT0gJyAnXG4gICAgICApIHtcbiAgICAgICAgc2V0SXNTZWFyY2hNb2RlKHRydWUpXG4gICAgICAgIHNldFNlYXJjaFF1ZXJ5KGlucHV0KVxuICAgICAgICBzZXRTZWxlY3RlZEluZGV4KDApXG4gICAgICB9XG4gICAgfSxcbiAgICB7IGlzQWN0aXZlOiB2aWV3U3RhdGUgPT09ICdwbHVnaW4tbGlzdCcgfSxcbiAgKVxuXG4gIC8vIExvYWRpbmcgc3RhdGVcbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPFRleHQ+TG9hZGluZyBpbnN0YWxsZWQgcGx1Z2luc+KApjwvVGV4dD5cbiAgfVxuXG4gIC8vIE5vIHBsdWdpbnMgb3IgTUNQcyBpbnN0YWxsZWRcbiAgaWYgKHVuaWZpZWRJdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIDxCb3ggbWFyZ2luQm90dG9tPXsxfT5cbiAgICAgICAgICA8VGV4dCBib2xkPk1hbmFnZSBwbHVnaW5zPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPFRleHQ+Tm8gcGx1Z2lucyBvciBNQ1Agc2VydmVycyBpbnN0YWxsZWQuPC9UZXh0PlxuICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+RXNjIHRvIGdvIGJhY2s8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgaWYgKFxuICAgIHR5cGVvZiB2aWV3U3RhdGUgPT09ICdvYmplY3QnICYmXG4gICAgdmlld1N0YXRlLnR5cGUgPT09ICdwbHVnaW4tb3B0aW9ucycgJiZcbiAgICBzZWxlY3RlZFBsdWdpblxuICApIHtcbiAgICBjb25zdCBwbHVnaW5JZCA9IGAke3NlbGVjdGVkUGx1Z2luLnBsdWdpbi5uYW1lfUAke3NlbGVjdGVkUGx1Z2luLm1hcmtldHBsYWNlfWBcbiAgICBmdW5jdGlvbiBmaW5pc2gobXNnOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHNldFJlc3VsdChtc2cpXG4gICAgICAvLyBQbHVnaW4gaXMgZW5hYmxlZCByZWdhcmRsZXNzIG9mIHdoZXRoZXIgY29uZmlnIHdhcyBzYXZlZCBvclxuICAgICAgLy8gc2tpcHBlZCDigJQgb25NYW5hZ2VDb21wbGV0ZSDihpIgbWFya1BsdWdpbnNDaGFuZ2VkIOKGkiB0aGVcbiAgICAgIC8vIHBlcnNpc3RlbnQgXCJydW4gL3JlbG9hZC1wbHVnaW5zXCIgbm90aWNlLlxuICAgICAgaWYgKG9uTWFuYWdlQ29tcGxldGUpIHtcbiAgICAgICAgdm9pZCBvbk1hbmFnZUNvbXBsZXRlKClcbiAgICAgIH1cbiAgICAgIHNldFBhcmVudFZpZXdTdGF0ZSh7IHR5cGU6ICdtZW51JyB9KVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPFBsdWdpbk9wdGlvbnNGbG93XG4gICAgICAgIHBsdWdpbj17c2VsZWN0ZWRQbHVnaW4ucGx1Z2lufVxuICAgICAgICBwbHVnaW5JZD17cGx1Z2luSWR9XG4gICAgICAgIG9uRG9uZT17KG91dGNvbWUsIGRldGFpbCkgPT4ge1xuICAgICAgICAgIHN3aXRjaCAob3V0Y29tZSkge1xuICAgICAgICAgICAgY2FzZSAnY29uZmlndXJlZCc6XG4gICAgICAgICAgICAgIGZpbmlzaChcbiAgICAgICAgICAgICAgICBg4pyTIEVuYWJsZWQgYW5kIGNvbmZpZ3VyZWQgJHtzZWxlY3RlZFBsdWdpbi5wbHVnaW4ubmFtZX0uIFJ1biAvcmVsb2FkLXBsdWdpbnMgdG8gYXBwbHkuYCxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnc2tpcHBlZCc6XG4gICAgICAgICAgICAgIGZpbmlzaChcbiAgICAgICAgICAgICAgICBg4pyTIEVuYWJsZWQgJHtzZWxlY3RlZFBsdWdpbi5wbHVnaW4ubmFtZX0uIFJ1biAvcmVsb2FkLXBsdWdpbnMgdG8gYXBwbHkuYCxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgICBmaW5pc2goYEZhaWxlZCB0byBzYXZlIGNvbmZpZ3VyYXRpb246ICR7ZGV0YWlsfWApXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICAvLyBDb25maWd1cmUgb3B0aW9ucyAoZnJvbSB0aGUgTWFuYWdlIG1lbnUpXG4gIGlmIChcbiAgICB0eXBlb2Ygdmlld1N0YXRlID09PSAnb2JqZWN0JyAmJlxuICAgIHZpZXdTdGF0ZS50eXBlID09PSAnY29uZmlndXJpbmctb3B0aW9ucycgJiZcbiAgICBzZWxlY3RlZFBsdWdpblxuICApIHtcbiAgICBjb25zdCBwbHVnaW5JZCA9IGAke3NlbGVjdGVkUGx1Z2luLnBsdWdpbi5uYW1lfUAke3NlbGVjdGVkUGx1Z2luLm1hcmtldHBsYWNlfWBcbiAgICByZXR1cm4gKFxuICAgICAgPFBsdWdpbk9wdGlvbnNEaWFsb2dcbiAgICAgICAgdGl0bGU9e2BDb25maWd1cmUgJHtzZWxlY3RlZFBsdWdpbi5wbHVnaW4ubmFtZX1gfVxuICAgICAgICBzdWJ0aXRsZT1cIlBsdWdpbiBvcHRpb25zXCJcbiAgICAgICAgY29uZmlnU2NoZW1hPXt2aWV3U3RhdGUuc2NoZW1hfVxuICAgICAgICBpbml0aWFsVmFsdWVzPXtsb2FkUGx1Z2luT3B0aW9ucyhwbHVnaW5JZCl9XG4gICAgICAgIG9uU2F2ZT17dmFsdWVzID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2F2ZVBsdWdpbk9wdGlvbnMocGx1Z2luSWQsIHZhbHVlcywgdmlld1N0YXRlLnNjaGVtYSlcbiAgICAgICAgICAgIGNsZWFyQWxsQ2FjaGVzKClcbiAgICAgICAgICAgIHNldFJlc3VsdChcbiAgICAgICAgICAgICAgJ0NvbmZpZ3VyYXRpb24gc2F2ZWQuIFJ1biAvcmVsb2FkLXBsdWdpbnMgZm9yIGNoYW5nZXMgdG8gdGFrZSBlZmZlY3QuJyxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHNldFByb2Nlc3NFcnJvcihcbiAgICAgICAgICAgICAgYEZhaWxlZCB0byBzYXZlIGNvbmZpZ3VyYXRpb246ICR7ZXJyb3JNZXNzYWdlKGVycil9YCxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0Vmlld1N0YXRlKCdwbHVnaW4tZGV0YWlscycpXG4gICAgICAgIH19XG4gICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBzZXRWaWV3U3RhdGUoJ3BsdWdpbi1kZXRhaWxzJyl9XG4gICAgICAvPlxuICAgIClcbiAgfVxuXG4gIC8vIENvbmZpZ3VyYXRpb24gdmlld1xuICBpZiAodmlld1N0YXRlID09PSAnY29uZmlndXJpbmcnICYmIGNvbmZpZ05lZWRlZCAmJiBzZWxlY3RlZFBsdWdpbikge1xuICAgIGNvbnN0IHBsdWdpbklkID0gYCR7c2VsZWN0ZWRQbHVnaW4ucGx1Z2luLm5hbWV9QCR7c2VsZWN0ZWRQbHVnaW4ubWFya2V0cGxhY2V9YFxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU2F2ZShjb25maWc6IFVzZXJDb25maWdWYWx1ZXMpIHtcbiAgICAgIGlmICghY29uZmlnTmVlZGVkIHx8ICFzZWxlY3RlZFBsdWdpbikgcmV0dXJuXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIEZpbmQgTUNQQiBwYXRoIGFnYWluXG4gICAgICAgIGNvbnN0IG1jcFNlcnZlcnNTcGVjID0gc2VsZWN0ZWRQbHVnaW4ucGx1Z2luLm1hbmlmZXN0Lm1jcFNlcnZlcnNcbiAgICAgICAgbGV0IG1jcGJQYXRoOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICB0eXBlb2YgbWNwU2VydmVyc1NwZWMgPT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgaXNNY3BiU291cmNlKG1jcFNlcnZlcnNTcGVjKVxuICAgICAgICApIHtcbiAgICAgICAgICBtY3BiUGF0aCA9IG1jcFNlcnZlcnNTcGVjXG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShtY3BTZXJ2ZXJzU3BlYykpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHNwZWMgb2YgbWNwU2VydmVyc1NwZWMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3BlYyA9PT0gJ3N0cmluZycgJiYgaXNNY3BiU291cmNlKHNwZWMpKSB7XG4gICAgICAgICAgICAgIG1jcGJQYXRoID0gc3BlY1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbWNwYlBhdGgpIHtcbiAgICAgICAgICBzZXRQcm9jZXNzRXJyb3IoJ05vIE1DUEIgZmlsZSBmb3VuZCcpXG4gICAgICAgICAgc2V0Vmlld1N0YXRlKCdwbHVnaW4tZGV0YWlscycpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZWxvYWQgd2l0aCBwcm92aWRlZCBjb25maWdcbiAgICAgICAgYXdhaXQgbG9hZE1jcGJGaWxlKFxuICAgICAgICAgIG1jcGJQYXRoLFxuICAgICAgICAgIHNlbGVjdGVkUGx1Z2luLnBsdWdpbi5wYXRoLFxuICAgICAgICAgIHBsdWdpbklkLFxuICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICBjb25maWcsXG4gICAgICAgIClcblxuICAgICAgICAvLyBTdWNjZXNzIC0gZ28gYmFjayB0byBkZXRhaWxzXG4gICAgICAgIHNldFByb2Nlc3NFcnJvcihudWxsKVxuICAgICAgICBzZXRDb25maWdOZWVkZWQobnVsbClcbiAgICAgICAgc2V0Vmlld1N0YXRlKCdwbHVnaW4tZGV0YWlscycpXG4gICAgICAgIHNldFJlc3VsdChcbiAgICAgICAgICAnQ29uZmlndXJhdGlvbiBzYXZlZC4gUnVuIC9yZWxvYWQtcGx1Z2lucyBmb3IgY2hhbmdlcyB0byB0YWtlIGVmZmVjdC4nLFxuICAgICAgICApXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNc2cgPSBlcnJvck1lc3NhZ2UoZXJyKVxuICAgICAgICBzZXRQcm9jZXNzRXJyb3IoYEZhaWxlZCB0byBzYXZlIGNvbmZpZ3VyYXRpb246ICR7ZXJyb3JNc2d9YClcbiAgICAgICAgc2V0Vmlld1N0YXRlKCdwbHVnaW4tZGV0YWlscycpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2FuY2VsKCkge1xuICAgICAgc2V0Q29uZmlnTmVlZGVkKG51bGwpXG4gICAgICBzZXRWaWV3U3RhdGUoJ3BsdWdpbi1kZXRhaWxzJylcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBsdWdpbk9wdGlvbnNEaWFsb2dcbiAgICAgICAgdGl0bGU9e2BDb25maWd1cmUgJHtjb25maWdOZWVkZWQubWFuaWZlc3QubmFtZX1gfVxuICAgICAgICBzdWJ0aXRsZT17YFBsdWdpbjogJHtzZWxlY3RlZFBsdWdpbi5wbHVnaW4ubmFtZX1gfVxuICAgICAgICBjb25maWdTY2hlbWE9e2NvbmZpZ05lZWRlZC5jb25maWdTY2hlbWF9XG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e2NvbmZpZ05lZWRlZC5leGlzdGluZ0NvbmZpZ31cbiAgICAgICAgb25TYXZlPXtoYW5kbGVTYXZlfVxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfVxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICAvLyBGbGFnZ2VkIHBsdWdpbiBkZXRhaWwgdmlld1xuICBpZiAodHlwZW9mIHZpZXdTdGF0ZSA9PT0gJ29iamVjdCcgJiYgdmlld1N0YXRlLnR5cGUgPT09ICdmbGFnZ2VkLWRldGFpbCcpIHtcbiAgICBjb25zdCBmcCA9IHZpZXdTdGF0ZS5wbHVnaW5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPFRleHQgYm9sZD5cbiAgICAgICAgICAgIHtmcC5uYW1lfSBAIHtmcC5tYXJrZXRwbGFjZX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIDxCb3ggbWFyZ2luQm90dG9tPXsxfT5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5TdGF0dXM6IDwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBjb2xvcj1cImVycm9yXCI+UmVtb3ZlZDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgPEJveCBtYXJnaW5Cb3R0b209ezF9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICA8VGV4dCBjb2xvcj1cImVycm9yXCI+XG4gICAgICAgICAgICBSZW1vdmVkIGZyb20gbWFya2V0cGxhY2UgwrcgcmVhc29uOiB7ZnAucmVhc29ufVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dD57ZnAudGV4dH08L1RleHQ+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICBGbGFnZ2VkIG9uIHtuZXcgRGF0ZShmcC5mbGFnZ2VkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPFRleHQ+e2ZpZ3VyZXMucG9pbnRlcn0gPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgY29sb3I9XCJzdWdnZXN0aW9uXCI+RGlzbWlzczwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgPEJ5bGluZT5cbiAgICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgICBhY3Rpb249XCJzZWxlY3Q6YWNjZXB0XCJcbiAgICAgICAgICAgIGNvbnRleHQ9XCJTZWxlY3RcIlxuICAgICAgICAgICAgZmFsbGJhY2s9XCJFbnRlclwiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cImRpc21pc3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludFxuICAgICAgICAgICAgYWN0aW9uPVwiY29uZmlybTpub1wiXG4gICAgICAgICAgICBjb250ZXh0PVwiQ29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgIGZhbGxiYWNrPVwiRXNjXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiYmFja1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9CeWxpbmU+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICAvLyBDb25maXJtLXByb2plY3QtdW5pbnN0YWxsOiB3YXJuIGFib3V0IHNoYXJlZCAuY2xhdWRlL3NldHRpbmdzLmpzb24sXG4gIC8vIG9mZmVyIHRvIGRpc2FibGUgaW4gc2V0dGluZ3MubG9jYWwuanNvbiBpbnN0ZWFkLlxuICBpZiAodmlld1N0YXRlID09PSAnY29uZmlybS1wcm9qZWN0LXVuaW5zdGFsbCcgJiYgc2VsZWN0ZWRQbHVnaW4pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIDxUZXh0IGJvbGQgY29sb3I9XCJ3YXJuaW5nXCI+XG4gICAgICAgICAge3NlbGVjdGVkUGx1Z2luLnBsdWdpbi5uYW1lfSBpcyBlbmFibGVkIGluIC5jbGF1ZGUvc2V0dGluZ3MuanNvblxuICAgICAgICAgIChzaGFyZWQgd2l0aCB5b3VyIHRlYW0pXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICA8VGV4dD5EaXNhYmxlIGl0IGp1c3QgZm9yIHlvdSBpbiAuY2xhdWRlL3NldHRpbmdzLmxvY2FsLmpzb24/PC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgVGhpcyBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzIHVuaW5zdGFsbGluZywgd2l0aG91dCBhZmZlY3Rpbmcgb3RoZXJcbiAgICAgICAgICAgIGNvbnRyaWJ1dG9ycy5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICB7cHJvY2Vzc0Vycm9yICYmIChcbiAgICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgICA8VGV4dCBjb2xvcj1cImVycm9yXCI+e3Byb2Nlc3NFcnJvcn08L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICB7aXNQcm9jZXNzaW5nID8gKFxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+RGlzYWJsaW5n4oCmPC9UZXh0PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8QnlsaW5lPlxuICAgICAgICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgICAgICAgYWN0aW9uPVwiY29uZmlybTp5ZXNcIlxuICAgICAgICAgICAgICAgIGNvbnRleHQ9XCJDb25maXJtYXRpb25cIlxuICAgICAgICAgICAgICAgIGZhbGxiYWNrPVwieVwiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJkaXNhYmxlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludFxuICAgICAgICAgICAgICAgIGFjdGlvbj1cImNvbmZpcm06bm9cIlxuICAgICAgICAgICAgICAgIGNvbnRleHQ9XCJDb25maXJtYXRpb25cIlxuICAgICAgICAgICAgICAgIGZhbGxiYWNrPVwiRXNjXCJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cImNhbmNlbFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0J5bGluZT5cbiAgICAgICAgICApfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxuXG4gIC8vIENvbmZpcm0tZGF0YS1jbGVhbnVwOiBwcm9tcHQgYmVmb3JlIGRlbGV0aW5nICR7Q0xBVURFX1BMVUdJTl9EQVRBfSBkaXJcbiAgaWYgKFxuICAgIHR5cGVvZiB2aWV3U3RhdGUgPT09ICdvYmplY3QnICYmXG4gICAgdmlld1N0YXRlLnR5cGUgPT09ICdjb25maXJtLWRhdGEtY2xlYW51cCcgJiZcbiAgICBzZWxlY3RlZFBsdWdpblxuICApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIDxUZXh0IGJvbGQ+XG4gICAgICAgICAge3NlbGVjdGVkUGx1Z2luLnBsdWdpbi5uYW1lfSBoYXMge3ZpZXdTdGF0ZS5zaXplLmh1bWFufSBvZiBwZXJzaXN0ZW50XG4gICAgICAgICAgZGF0YVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgPFRleHQ+RGVsZXRlIGl0IGFsb25nIHdpdGggdGhlIHBsdWdpbj88L1RleHQ+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICB7cGx1Z2luRGF0YURpclBhdGgoXG4gICAgICAgICAgICAgIGAke3NlbGVjdGVkUGx1Z2luLnBsdWdpbi5uYW1lfUAke3NlbGVjdGVkUGx1Z2luLm1hcmtldHBsYWNlfWAsXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIHtwcm9jZXNzRXJyb3IgJiYgKFxuICAgICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZXJyb3JcIj57cHJvY2Vzc0Vycm9yfTwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgIHtpc1Byb2Nlc3NpbmcgPyAoXG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5Vbmluc3RhbGxpbmfigKY8L1RleHQ+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8VGV4dCBib2xkPnk8L1RleHQ+IHRvIGRlbGV0ZSDCtyA8VGV4dCBib2xkPm48L1RleHQ+IHRvIGtlZXAgwrd7JyAnfVxuICAgICAgICAgICAgICA8VGV4dCBib2xkPmVzYzwvVGV4dD4gdG8gY2FuY2VsXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICAvLyBQbHVnaW4gZGV0YWlscyB2aWV3XG4gIGlmICh2aWV3U3RhdGUgPT09ICdwbHVnaW4tZGV0YWlscycgJiYgc2VsZWN0ZWRQbHVnaW4pIHtcbiAgICBjb25zdCBtZXJnZWRTZXR0aW5ncyA9IGdldFNldHRpbmdzX0RFUFJFQ0FURUQoKSAvLyBVc2UgbWVyZ2VkIHNldHRpbmdzIHRvIHJlc3BlY3QgYWxsIGxheWVyc1xuICAgIGNvbnN0IHBsdWdpbklkID0gYCR7c2VsZWN0ZWRQbHVnaW4ucGx1Z2luLm5hbWV9QCR7c2VsZWN0ZWRQbHVnaW4ubWFya2V0cGxhY2V9YFxuICAgIGNvbnN0IGlzRW5hYmxlZCA9IG1lcmdlZFNldHRpbmdzPy5lbmFibGVkUGx1Z2lucz8uW3BsdWdpbklkXSAhPT0gZmFsc2VcblxuICAgIC8vIENvbXB1dGUgcGx1Z2luIGVycm9ycyBzZWN0aW9uXG4gICAgY29uc3QgZmlsdGVyZWRQbHVnaW5FcnJvcnMgPSBwbHVnaW5FcnJvcnMuZmlsdGVyKFxuICAgICAgZSA9PlxuICAgICAgICAoJ3BsdWdpbicgaW4gZSAmJiBlLnBsdWdpbiA9PT0gc2VsZWN0ZWRQbHVnaW4ucGx1Z2luLm5hbWUpIHx8XG4gICAgICAgIGUuc291cmNlID09PSBwbHVnaW5JZCB8fFxuICAgICAgICBlLnNvdXJjZS5zdGFydHNXaXRoKGAke3NlbGVjdGVkUGx1Z2luLnBsdWdpbi5uYW1lfUBgKSxcbiAgICApXG4gICAgY29uc3QgcGx1Z2luRXJyb3JzU2VjdGlvbiA9XG4gICAgICBmaWx0ZXJlZFBsdWdpbkVycm9ycy5sZW5ndGggPT09IDAgPyBudWxsIDogKFxuICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBtYXJnaW5Cb3R0b209ezF9PlxuICAgICAgICAgIDxUZXh0IGJvbGQgY29sb3I9XCJlcnJvclwiPlxuICAgICAgICAgICAge2ZpbHRlcmVkUGx1Z2luRXJyb3JzLmxlbmd0aH17JyAnfVxuICAgICAgICAgICAge3BsdXJhbChmaWx0ZXJlZFBsdWdpbkVycm9ycy5sZW5ndGgsICdlcnJvcicpfTpcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAge2ZpbHRlcmVkUGx1Z2luRXJyb3JzLm1hcCgoZXJyb3IsIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGd1aWRhbmNlID0gZ2V0RXJyb3JHdWlkYW5jZShlcnJvcilcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxCb3gga2V5PXtpfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbWFyZ2luTGVmdD17Mn0+XG4gICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJlcnJvclwiPntmb3JtYXRFcnJvck1lc3NhZ2UoZXJyb3IpfTwvVGV4dD5cbiAgICAgICAgICAgICAgICB7Z3VpZGFuY2UgJiYgKFxuICAgICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3IgaXRhbGljPlxuICAgICAgICAgICAgICAgICAgICB7ZmlndXJlcy5hcnJvd1JpZ2h0fSB7Z3VpZGFuY2V9XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvQm94PlxuICAgICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxUZXh0IGJvbGQ+XG4gICAgICAgICAgICB7c2VsZWN0ZWRQbHVnaW4ucGx1Z2luLm5hbWV9IEAge3NlbGVjdGVkUGx1Z2luLm1hcmtldHBsYWNlfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgey8qIFNjb3BlICovfVxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlNjb3BlOiA8L1RleHQ+XG4gICAgICAgICAgPFRleHQ+e3NlbGVjdGVkUGx1Z2luLnNjb3BlIHx8ICd1c2VyJ308L1RleHQ+XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIHsvKiBQbHVnaW4gZGV0YWlscyAqL31cbiAgICAgICAge3NlbGVjdGVkUGx1Z2luLnBsdWdpbi5tYW5pZmVzdC52ZXJzaW9uICYmIChcbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+VmVyc2lvbjogPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQ+e3NlbGVjdGVkUGx1Z2luLnBsdWdpbi5tYW5pZmVzdC52ZXJzaW9ufTwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cblxuICAgICAgICB7c2VsZWN0ZWRQbHVnaW4ucGx1Z2luLm1hbmlmZXN0LmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICA8Qm94IG1hcmdpbkJvdHRvbT17MX0+XG4gICAgICAgICAgICA8VGV4dD57c2VsZWN0ZWRQbHVnaW4ucGx1Z2luLm1hbmlmZXN0LmRlc2NyaXB0aW9ufTwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cblxuICAgICAgICB7c2VsZWN0ZWRQbHVnaW4ucGx1Z2luLm1hbmlmZXN0LmF1dGhvciAmJiAoXG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPkF1dGhvcjogPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQ+e3NlbGVjdGVkUGx1Z2luLnBsdWdpbi5tYW5pZmVzdC5hdXRob3IubmFtZX08L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIEN1cnJlbnQgc3RhdHVzICovfVxuICAgICAgICA8Qm94IG1hcmdpbkJvdHRvbT17MX0+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+U3RhdHVzOiA8L1RleHQ+XG4gICAgICAgICAgPFRleHQgY29sb3I9e2lzRW5hYmxlZCA/ICdzdWNjZXNzJyA6ICd3YXJuaW5nJ30+XG4gICAgICAgICAgICB7aXNFbmFibGVkID8gJ0VuYWJsZWQnIDogJ0Rpc2FibGVkJ31cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAge3NlbGVjdGVkUGx1Z2luLnBlbmRpbmdVcGRhdGUgJiYgKFxuICAgICAgICAgICAgPFRleHQgY29sb3I9XCJzdWdnZXN0aW9uXCI+IMK3IE1hcmtlZCBmb3IgdXBkYXRlPC9UZXh0PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIHsvKiBJbnN0YWxsZWQgY29tcG9uZW50cyAqL31cbiAgICAgICAgPFBsdWdpbkNvbXBvbmVudHNEaXNwbGF5XG4gICAgICAgICAgcGx1Z2luPXtzZWxlY3RlZFBsdWdpbi5wbHVnaW59XG4gICAgICAgICAgbWFya2V0cGxhY2U9e3NlbGVjdGVkUGx1Z2luLm1hcmtldHBsYWNlfVxuICAgICAgICAvPlxuXG4gICAgICAgIHsvKiBQbHVnaW4gZXJyb3JzICovfVxuICAgICAgICB7cGx1Z2luRXJyb3JzU2VjdGlvbn1cblxuICAgICAgICB7LyogTWVudSAqL31cbiAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICB7ZGV0YWlsc01lbnVJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gaW5kZXggPT09IGRldGFpbHNNZW51SW5kZXhcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPEJveCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICB7aXNTZWxlY3RlZCAmJiA8VGV4dD57ZmlndXJlcy5wb2ludGVyfSA8L1RleHQ+fVxuICAgICAgICAgICAgICAgIHshaXNTZWxlY3RlZCAmJiA8VGV4dD57JyAgJ308L1RleHQ+fVxuICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICBib2xkPXtpc1NlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgY29sb3I9e1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmxhYmVsLmluY2x1ZGVzKCdVbmluc3RhbGwnKVxuICAgICAgICAgICAgICAgICAgICAgID8gJ2Vycm9yJ1xuICAgICAgICAgICAgICAgICAgICAgIDogaXRlbS5sYWJlbC5pbmNsdWRlcygnVXBkYXRlJylcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ3N1Z2dlc3Rpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIHsvKiBQcm9jZXNzaW5nIHN0YXRlICovfVxuICAgICAgICB7aXNQcm9jZXNzaW5nICYmIChcbiAgICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgICA8VGV4dD5Qcm9jZXNzaW5n4oCmPC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBFcnJvciBtZXNzYWdlICovfVxuICAgICAgICB7cHJvY2Vzc0Vycm9yICYmIChcbiAgICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgICA8VGV4dCBjb2xvcj1cImVycm9yXCI+e3Byb2Nlc3NFcnJvcn08L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG5cbiAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yIGl0YWxpYz5cbiAgICAgICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgICAgICBhY3Rpb249XCJzZWxlY3Q6cHJldmlvdXNcIlxuICAgICAgICAgICAgICAgIGNvbnRleHQ9XCJTZWxlY3RcIlxuICAgICAgICAgICAgICAgIGZhbGxiYWNrPVwi4oaRXCJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIm5hdmlnYXRlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludFxuICAgICAgICAgICAgICAgIGFjdGlvbj1cInNlbGVjdDphY2NlcHRcIlxuICAgICAgICAgICAgICAgIGNvbnRleHQ9XCJTZWxlY3RcIlxuICAgICAgICAgICAgICAgIGZhbGxiYWNrPVwiRW50ZXJcIlxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwic2VsZWN0XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludFxuICAgICAgICAgICAgICAgIGFjdGlvbj1cImNvbmZpcm06bm9cIlxuICAgICAgICAgICAgICAgIGNvbnRleHQ9XCJDb25maXJtYXRpb25cIlxuICAgICAgICAgICAgICAgIGZhbGxiYWNrPVwiRXNjXCJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cImJhY2tcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9CeWxpbmU+XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxuXG4gIC8vIEZhaWxlZCBwbHVnaW4gZGV0YWlsIHZpZXdcbiAgaWYgKFxuICAgIHR5cGVvZiB2aWV3U3RhdGUgPT09ICdvYmplY3QnICYmXG4gICAgdmlld1N0YXRlLnR5cGUgPT09ICdmYWlsZWQtcGx1Z2luLWRldGFpbHMnXG4gICkge1xuICAgIGNvbnN0IGZhaWxlZFBsdWdpbiA9IHZpZXdTdGF0ZS5wbHVnaW5cblxuICAgIGNvbnN0IGZpcnN0RXJyb3IgPSBmYWlsZWRQbHVnaW4uZXJyb3JzWzBdXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZmlyc3RFcnJvclxuICAgICAgPyBmb3JtYXRFcnJvck1lc3NhZ2UoZmlyc3RFcnJvcilcbiAgICAgIDogJ0ZhaWxlZCB0byBsb2FkJ1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VGV4dCBib2xkPntmYWlsZWRQbHVnaW4ubmFtZX08L1RleHQ+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+IEAge2ZhaWxlZFBsdWdpbi5tYXJrZXRwbGFjZX08L1RleHQ+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+ICh7ZmFpbGVkUGx1Z2luLnNjb3BlfSk8L1RleHQ+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQgY29sb3I9XCJlcnJvclwiPntlcnJvck1lc3NhZ2V9PC9UZXh0PlxuXG4gICAgICAgIHtmYWlsZWRQbHVnaW4uc2NvcGUgPT09ICdtYW5hZ2VkJyA/IChcbiAgICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgTWFuYWdlZCBieSB5b3VyIG9yZ2FuaXphdGlvbiDigJQgY29udGFjdCB5b3VyIGFkbWluXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgICAgPFRleHQgY29sb3I9XCJzdWdnZXN0aW9uXCI+e2ZpZ3VyZXMucG9pbnRlcn0gPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgYm9sZD5SZW1vdmU8L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG5cbiAgICAgICAge2lzUHJvY2Vzc2luZyAmJiA8VGV4dD5Qcm9jZXNzaW5n4oCmPC9UZXh0Pn1cbiAgICAgICAge3Byb2Nlc3NFcnJvciAmJiA8VGV4dCBjb2xvcj1cImVycm9yXCI+e3Byb2Nlc3NFcnJvcn08L1RleHQ+fVxuXG4gICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvciBpdGFsaWM+XG4gICAgICAgICAgICA8QnlsaW5lPlxuICAgICAgICAgICAgICB7ZmFpbGVkUGx1Z2luLnNjb3BlICE9PSAnbWFuYWdlZCcgJiYgKFxuICAgICAgICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgICAgICAgIGFjdGlvbj1cInNlbGVjdDphY2NlcHRcIlxuICAgICAgICAgICAgICAgICAgY29udGV4dD1cIlNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICBmYWxsYmFjaz1cIkVudGVyXCJcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwicmVtb3ZlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgICAgICAgYWN0aW9uPVwiY29uZmlybTpub1wiXG4gICAgICAgICAgICAgICAgY29udGV4dD1cIkNvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICAgICAgZmFsbGJhY2s9XCJFc2NcIlxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiYmFja1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0J5bGluZT5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgLy8gTUNQIGRldGFpbCB2aWV3XG4gIGlmICh0eXBlb2Ygdmlld1N0YXRlID09PSAnb2JqZWN0JyAmJiB2aWV3U3RhdGUudHlwZSA9PT0gJ21jcC1kZXRhaWwnKSB7XG4gICAgY29uc3QgY2xpZW50ID0gdmlld1N0YXRlLmNsaWVudFxuICAgIGNvbnN0IHNlcnZlclRvb2xzQ291bnQgPSBmaWx0ZXJUb29sc0J5U2VydmVyKG1jcFRvb2xzLCBjbGllbnQubmFtZSkubGVuZ3RoXG5cbiAgICAvLyBDb21tb24gaGFuZGxlcnMgZm9yIE1DUCBtZW51c1xuICAgIGNvbnN0IGhhbmRsZU1jcFZpZXdUb29scyA9ICgpID0+IHtcbiAgICAgIHNldFZpZXdTdGF0ZSh7IHR5cGU6ICdtY3AtdG9vbHMnLCBjbGllbnQgfSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVNY3BDYW5jZWwgPSAoKSA9PiB7XG4gICAgICBzZXRWaWV3U3RhdGUoJ3BsdWdpbi1saXN0JylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVNY3BDb21wbGV0ZSA9IChyZXN1bHQ/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgc2V0UmVzdWx0KHJlc3VsdClcbiAgICAgIH1cbiAgICAgIHNldFZpZXdTdGF0ZSgncGx1Z2luLWxpc3QnKVxuICAgIH1cblxuICAgIC8vIFRyYW5zZm9ybSBNQ1BTZXJ2ZXJDb25uZWN0aW9uIHRvIGFwcHJvcHJpYXRlIFNlcnZlckluZm8gdHlwZVxuICAgIGNvbnN0IHNjb3BlID0gY2xpZW50LmNvbmZpZy5zY29wZVxuICAgIGNvbnN0IGNvbmZpZ1R5cGUgPSBjbGllbnQuY29uZmlnLnR5cGVcblxuICAgIGlmIChjb25maWdUeXBlID09PSAnc3RkaW8nKSB7XG4gICAgICBjb25zdCBzZXJ2ZXI6IFN0ZGlvU2VydmVySW5mbyA9IHtcbiAgICAgICAgbmFtZTogY2xpZW50Lm5hbWUsXG4gICAgICAgIGNsaWVudCxcbiAgICAgICAgc2NvcGUsXG4gICAgICAgIHRyYW5zcG9ydDogJ3N0ZGlvJyxcbiAgICAgICAgY29uZmlnOiBjbGllbnQuY29uZmlnIGFzIE1jcFN0ZGlvU2VydmVyQ29uZmlnLFxuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPE1DUFN0ZGlvU2VydmVyTWVudVxuICAgICAgICAgIHNlcnZlcj17c2VydmVyfVxuICAgICAgICAgIHNlcnZlclRvb2xzQ291bnQ9e3NlcnZlclRvb2xzQ291bnR9XG4gICAgICAgICAgb25WaWV3VG9vbHM9e2hhbmRsZU1jcFZpZXdUb29sc31cbiAgICAgICAgICBvbkNhbmNlbD17aGFuZGxlTWNwQ2FuY2VsfVxuICAgICAgICAgIG9uQ29tcGxldGU9e2hhbmRsZU1jcENvbXBsZXRlfVxuICAgICAgICAgIGJvcmRlcmxlc3NcbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvbmZpZ1R5cGUgPT09ICdzc2UnKSB7XG4gICAgICBjb25zdCBzZXJ2ZXI6IFNTRVNlcnZlckluZm8gPSB7XG4gICAgICAgIG5hbWU6IGNsaWVudC5uYW1lLFxuICAgICAgICBjbGllbnQsXG4gICAgICAgIHNjb3BlLFxuICAgICAgICB0cmFuc3BvcnQ6ICdzc2UnLFxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgY29uZmlnOiBjbGllbnQuY29uZmlnIGFzIE1jcFNTRVNlcnZlckNvbmZpZyxcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxNQ1BSZW1vdGVTZXJ2ZXJNZW51XG4gICAgICAgICAgc2VydmVyPXtzZXJ2ZXJ9XG4gICAgICAgICAgc2VydmVyVG9vbHNDb3VudD17c2VydmVyVG9vbHNDb3VudH1cbiAgICAgICAgICBvblZpZXdUb29scz17aGFuZGxlTWNwVmlld1Rvb2xzfVxuICAgICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVNY3BDYW5jZWx9XG4gICAgICAgICAgb25Db21wbGV0ZT17aGFuZGxlTWNwQ29tcGxldGV9XG4gICAgICAgICAgYm9yZGVybGVzc1xuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29uZmlnVHlwZSA9PT0gJ2h0dHAnKSB7XG4gICAgICBjb25zdCBzZXJ2ZXI6IEhUVFBTZXJ2ZXJJbmZvID0ge1xuICAgICAgICBuYW1lOiBjbGllbnQubmFtZSxcbiAgICAgICAgY2xpZW50LFxuICAgICAgICBzY29wZSxcbiAgICAgICAgdHJhbnNwb3J0OiAnaHR0cCcsXG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogdW5kZWZpbmVkLFxuICAgICAgICBjb25maWc6IGNsaWVudC5jb25maWcgYXMgTWNwSFRUUFNlcnZlckNvbmZpZyxcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxNQ1BSZW1vdGVTZXJ2ZXJNZW51XG4gICAgICAgICAgc2VydmVyPXtzZXJ2ZXJ9XG4gICAgICAgICAgc2VydmVyVG9vbHNDb3VudD17c2VydmVyVG9vbHNDb3VudH1cbiAgICAgICAgICBvblZpZXdUb29scz17aGFuZGxlTWNwVmlld1Rvb2xzfVxuICAgICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVNY3BDYW5jZWx9XG4gICAgICAgICAgb25Db21wbGV0ZT17aGFuZGxlTWNwQ29tcGxldGV9XG4gICAgICAgICAgYm9yZGVybGVzc1xuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29uZmlnVHlwZSA9PT0gJ2NsYXVkZWFpLXByb3h5Jykge1xuICAgICAgY29uc3Qgc2VydmVyOiBDbGF1ZGVBSVNlcnZlckluZm8gPSB7XG4gICAgICAgIG5hbWU6IGNsaWVudC5uYW1lLFxuICAgICAgICBjbGllbnQsXG4gICAgICAgIHNjb3BlLFxuICAgICAgICB0cmFuc3BvcnQ6ICdjbGF1ZGVhaS1wcm94eScsXG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogdW5kZWZpbmVkLFxuICAgICAgICBjb25maWc6IGNsaWVudC5jb25maWcgYXMgTWNwQ2xhdWRlQUlQcm94eVNlcnZlckNvbmZpZyxcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxNQ1BSZW1vdGVTZXJ2ZXJNZW51XG4gICAgICAgICAgc2VydmVyPXtzZXJ2ZXJ9XG4gICAgICAgICAgc2VydmVyVG9vbHNDb3VudD17c2VydmVyVG9vbHNDb3VudH1cbiAgICAgICAgICBvblZpZXdUb29scz17aGFuZGxlTWNwVmlld1Rvb2xzfVxuICAgICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVNY3BDYW5jZWx9XG4gICAgICAgICAgb25Db21wbGV0ZT17aGFuZGxlTWNwQ29tcGxldGV9XG4gICAgICAgICAgYm9yZGVybGVzc1xuICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIC0gc2hvdWxkbid0IGhhcHBlbiBidXQgaGFuZGxlIGdyYWNlZnVsbHlcbiAgICBzZXRWaWV3U3RhdGUoJ3BsdWdpbi1saXN0JylcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLy8gTUNQIHRvb2xzIHZpZXdcbiAgaWYgKHR5cGVvZiB2aWV3U3RhdGUgPT09ICdvYmplY3QnICYmIHZpZXdTdGF0ZS50eXBlID09PSAnbWNwLXRvb2xzJykge1xuICAgIGNvbnN0IGNsaWVudCA9IHZpZXdTdGF0ZS5jbGllbnRcbiAgICBjb25zdCBzY29wZSA9IGNsaWVudC5jb25maWcuc2NvcGVcbiAgICBjb25zdCBjb25maWdUeXBlID0gY2xpZW50LmNvbmZpZy50eXBlXG5cbiAgICAvLyBCdWlsZCBTZXJ2ZXJJbmZvIGZvciBNQ1BUb29sTGlzdFZpZXdcbiAgICBsZXQgc2VydmVyOlxuICAgICAgfCBTdGRpb1NlcnZlckluZm9cbiAgICAgIHwgU1NFU2VydmVySW5mb1xuICAgICAgfCBIVFRQU2VydmVySW5mb1xuICAgICAgfCBDbGF1ZGVBSVNlcnZlckluZm9cbiAgICBpZiAoY29uZmlnVHlwZSA9PT0gJ3N0ZGlvJykge1xuICAgICAgc2VydmVyID0ge1xuICAgICAgICBuYW1lOiBjbGllbnQubmFtZSxcbiAgICAgICAgY2xpZW50LFxuICAgICAgICBzY29wZSxcbiAgICAgICAgdHJhbnNwb3J0OiAnc3RkaW8nLFxuICAgICAgICBjb25maWc6IGNsaWVudC5jb25maWcgYXMgTWNwU3RkaW9TZXJ2ZXJDb25maWcsXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb25maWdUeXBlID09PSAnc3NlJykge1xuICAgICAgc2VydmVyID0ge1xuICAgICAgICBuYW1lOiBjbGllbnQubmFtZSxcbiAgICAgICAgY2xpZW50LFxuICAgICAgICBzY29wZSxcbiAgICAgICAgdHJhbnNwb3J0OiAnc3NlJyxcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiB1bmRlZmluZWQsXG4gICAgICAgIGNvbmZpZzogY2xpZW50LmNvbmZpZyBhcyBNY3BTU0VTZXJ2ZXJDb25maWcsXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb25maWdUeXBlID09PSAnaHR0cCcpIHtcbiAgICAgIHNlcnZlciA9IHtcbiAgICAgICAgbmFtZTogY2xpZW50Lm5hbWUsXG4gICAgICAgIGNsaWVudCxcbiAgICAgICAgc2NvcGUsXG4gICAgICAgIHRyYW5zcG9ydDogJ2h0dHAnLFxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgY29uZmlnOiBjbGllbnQuY29uZmlnIGFzIE1jcEhUVFBTZXJ2ZXJDb25maWcsXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlcnZlciA9IHtcbiAgICAgICAgbmFtZTogY2xpZW50Lm5hbWUsXG4gICAgICAgIGNsaWVudCxcbiAgICAgICAgc2NvcGUsXG4gICAgICAgIHRyYW5zcG9ydDogJ2NsYXVkZWFpLXByb3h5JyxcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiB1bmRlZmluZWQsXG4gICAgICAgIGNvbmZpZzogY2xpZW50LmNvbmZpZyBhcyBNY3BDbGF1ZGVBSVByb3h5U2VydmVyQ29uZmlnLFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8TUNQVG9vbExpc3RWaWV3XG4gICAgICAgIHNlcnZlcj17c2VydmVyfVxuICAgICAgICBvblNlbGVjdFRvb2w9eyh0b29sOiBUb29sKSA9PiB7XG4gICAgICAgICAgc2V0Vmlld1N0YXRlKHsgdHlwZTogJ21jcC10b29sLWRldGFpbCcsIGNsaWVudCwgdG9vbCB9KVxuICAgICAgICB9fVxuICAgICAgICBvbkJhY2s9eygpID0+IHNldFZpZXdTdGF0ZSh7IHR5cGU6ICdtY3AtZGV0YWlsJywgY2xpZW50IH0pfVxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICAvLyBNQ1AgdG9vbCBkZXRhaWwgdmlld1xuICBpZiAodHlwZW9mIHZpZXdTdGF0ZSA9PT0gJ29iamVjdCcgJiYgdmlld1N0YXRlLnR5cGUgPT09ICdtY3AtdG9vbC1kZXRhaWwnKSB7XG4gICAgY29uc3QgeyBjbGllbnQsIHRvb2wgfSA9IHZpZXdTdGF0ZVxuICAgIGNvbnN0IHNjb3BlID0gY2xpZW50LmNvbmZpZy5zY29wZVxuICAgIGNvbnN0IGNvbmZpZ1R5cGUgPSBjbGllbnQuY29uZmlnLnR5cGVcblxuICAgIC8vIEJ1aWxkIFNlcnZlckluZm8gZm9yIE1DUFRvb2xEZXRhaWxWaWV3XG4gICAgbGV0IHNlcnZlcjpcbiAgICAgIHwgU3RkaW9TZXJ2ZXJJbmZvXG4gICAgICB8IFNTRVNlcnZlckluZm9cbiAgICAgIHwgSFRUUFNlcnZlckluZm9cbiAgICAgIHwgQ2xhdWRlQUlTZXJ2ZXJJbmZvXG4gICAgaWYgKGNvbmZpZ1R5cGUgPT09ICdzdGRpbycpIHtcbiAgICAgIHNlcnZlciA9IHtcbiAgICAgICAgbmFtZTogY2xpZW50Lm5hbWUsXG4gICAgICAgIGNsaWVudCxcbiAgICAgICAgc2NvcGUsXG4gICAgICAgIHRyYW5zcG9ydDogJ3N0ZGlvJyxcbiAgICAgICAgY29uZmlnOiBjbGllbnQuY29uZmlnIGFzIE1jcFN0ZGlvU2VydmVyQ29uZmlnLFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29uZmlnVHlwZSA9PT0gJ3NzZScpIHtcbiAgICAgIHNlcnZlciA9IHtcbiAgICAgICAgbmFtZTogY2xpZW50Lm5hbWUsXG4gICAgICAgIGNsaWVudCxcbiAgICAgICAgc2NvcGUsXG4gICAgICAgIHRyYW5zcG9ydDogJ3NzZScsXG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogdW5kZWZpbmVkLFxuICAgICAgICBjb25maWc6IGNsaWVudC5jb25maWcgYXMgTWNwU1NFU2VydmVyQ29uZmlnLFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29uZmlnVHlwZSA9PT0gJ2h0dHAnKSB7XG4gICAgICBzZXJ2ZXIgPSB7XG4gICAgICAgIG5hbWU6IGNsaWVudC5uYW1lLFxuICAgICAgICBjbGllbnQsXG4gICAgICAgIHNjb3BlLFxuICAgICAgICB0cmFuc3BvcnQ6ICdodHRwJyxcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiB1bmRlZmluZWQsXG4gICAgICAgIGNvbmZpZzogY2xpZW50LmNvbmZpZyBhcyBNY3BIVFRQU2VydmVyQ29uZmlnLFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXJ2ZXIgPSB7XG4gICAgICAgIG5hbWU6IGNsaWVudC5uYW1lLFxuICAgICAgICBjbGllbnQsXG4gICAgICAgIHNjb3BlLFxuICAgICAgICB0cmFuc3BvcnQ6ICdjbGF1ZGVhaS1wcm94eScsXG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogdW5kZWZpbmVkLFxuICAgICAgICBjb25maWc6IGNsaWVudC5jb25maWcgYXMgTWNwQ2xhdWRlQUlQcm94eVNlcnZlckNvbmZpZyxcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPE1DUFRvb2xEZXRhaWxWaWV3XG4gICAgICAgIHRvb2w9e3Rvb2x9XG4gICAgICAgIHNlcnZlcj17c2VydmVyfVxuICAgICAgICBvbkJhY2s9eygpID0+IHNldFZpZXdTdGF0ZSh7IHR5cGU6ICdtY3AtdG9vbHMnLCBjbGllbnQgfSl9XG4gICAgICAvPlxuICAgIClcbiAgfVxuXG4gIC8vIFBsdWdpbiBsaXN0IHZpZXcgKG1haW4gbWFuYWdlbWVudCBpbnRlcmZhY2UpXG4gIGNvbnN0IHZpc2libGVJdGVtcyA9IHBhZ2luYXRpb24uZ2V0VmlzaWJsZUl0ZW1zKGZpbHRlcmVkSXRlbXMpXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgIHsvKiBTZWFyY2ggYm94ICovfVxuICAgICAgPEJveCBtYXJnaW5Cb3R0b209ezF9PlxuICAgICAgICA8U2VhcmNoQm94XG4gICAgICAgICAgcXVlcnk9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICAgIGlzRm9jdXNlZD17aXNTZWFyY2hNb2RlfVxuICAgICAgICAgIGlzVGVybWluYWxGb2N1c2VkPXtpc1Rlcm1pbmFsRm9jdXNlZH1cbiAgICAgICAgICB3aWR0aD17dGVybWluYWxXaWR0aCAtIDR9XG4gICAgICAgICAgY3Vyc29yT2Zmc2V0PXtzZWFyY2hDdXJzb3JPZmZzZXR9XG4gICAgICAgIC8+XG4gICAgICA8L0JveD5cblxuICAgICAgey8qIE5vIHNlYXJjaCByZXN1bHRzICovfVxuICAgICAge2ZpbHRlcmVkSXRlbXMubGVuZ3RoID09PSAwICYmIHNlYXJjaFF1ZXJ5ICYmIChcbiAgICAgICAgPEJveCBtYXJnaW5Cb3R0b209ezF9PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPk5vIGl0ZW1zIG1hdGNoICZxdW90O3tzZWFyY2hRdWVyeX0mcXVvdDs8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cblxuICAgICAgey8qIFNjcm9sbCB1cCBpbmRpY2F0b3IgKi99XG4gICAgICB7cGFnaW5hdGlvbi5zY3JvbGxQb3NpdGlvbi5jYW5TY3JvbGxVcCAmJiAoXG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+IHtmaWd1cmVzLmFycm93VXB9IG1vcmUgYWJvdmU8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cblxuICAgICAgey8qIFVuaWZpZWQgbGlzdCBvZiBwbHVnaW5zIGFuZCBNQ1BzIGdyb3VwZWQgYnkgc2NvcGUgKi99XG4gICAgICB7dmlzaWJsZUl0ZW1zLm1hcCgoaXRlbSwgdmlzaWJsZUluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdHVhbEluZGV4ID0gcGFnaW5hdGlvbi50b0FjdHVhbEluZGV4KHZpc2libGVJbmRleClcbiAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IGFjdHVhbEluZGV4ID09PSBzZWxlY3RlZEluZGV4ICYmICFpc1NlYXJjaE1vZGVcblxuICAgICAgICAvLyBDaGVjayBpZiB3ZSBuZWVkIHRvIHNob3cgYSBzY29wZSBoZWFkZXJcbiAgICAgICAgY29uc3QgcHJldkl0ZW0gPVxuICAgICAgICAgIHZpc2libGVJbmRleCA+IDAgPyB2aXNpYmxlSXRlbXNbdmlzaWJsZUluZGV4IC0gMV0gOiBudWxsXG4gICAgICAgIGNvbnN0IHNob3dTY29wZUhlYWRlciA9ICFwcmV2SXRlbSB8fCBwcmV2SXRlbS5zY29wZSAhPT0gaXRlbS5zY29wZVxuXG4gICAgICAgIC8vIEdldCBzY29wZSBsYWJlbFxuICAgICAgICBjb25zdCBnZXRTY29wZUxhYmVsID0gKHNjb3BlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgICAgIHN3aXRjaCAoc2NvcGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2ZsYWdnZWQnOlxuICAgICAgICAgICAgICByZXR1cm4gJ0ZsYWdnZWQnXG4gICAgICAgICAgICBjYXNlICdwcm9qZWN0JzpcbiAgICAgICAgICAgICAgcmV0dXJuICdQcm9qZWN0J1xuICAgICAgICAgICAgY2FzZSAnbG9jYWwnOlxuICAgICAgICAgICAgICByZXR1cm4gJ0xvY2FsJ1xuICAgICAgICAgICAgY2FzZSAndXNlcic6XG4gICAgICAgICAgICAgIHJldHVybiAnVXNlcidcbiAgICAgICAgICAgIGNhc2UgJ2VudGVycHJpc2UnOlxuICAgICAgICAgICAgICByZXR1cm4gJ0VudGVycHJpc2UnXG4gICAgICAgICAgICBjYXNlICdtYW5hZ2VkJzpcbiAgICAgICAgICAgICAgcmV0dXJuICdNYW5hZ2VkJ1xuICAgICAgICAgICAgY2FzZSAnYnVpbHRpbic6XG4gICAgICAgICAgICAgIHJldHVybiAnQnVpbHQtaW4nXG4gICAgICAgICAgICBjYXNlICdkeW5hbWljJzpcbiAgICAgICAgICAgICAgcmV0dXJuICdCdWlsdC1pbidcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiBzY29wZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICB7c2hvd1Njb3BlSGVhZGVyICYmIChcbiAgICAgICAgICAgICAgPEJveCBtYXJnaW5Ub3A9e3Zpc2libGVJbmRleCA+IDAgPyAxIDogMH0gcGFkZGluZ0xlZnQ9ezJ9PlxuICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICBkaW1Db2xvcj17aXRlbS5zY29wZSAhPT0gJ2ZsYWdnZWQnfVxuICAgICAgICAgICAgICAgICAgY29sb3I9e2l0ZW0uc2NvcGUgPT09ICdmbGFnZ2VkJyA/ICd3YXJuaW5nJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgIGJvbGQ9e2l0ZW0uc2NvcGUgPT09ICdmbGFnZ2VkJ31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Z2V0U2NvcGVMYWJlbChpdGVtLnNjb3BlKX1cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxVbmlmaWVkSW5zdGFsbGVkQ2VsbCBpdGVtPXtpdGVtfSBpc1NlbGVjdGVkPXtpc1NlbGVjdGVkfSAvPlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIClcbiAgICAgIH0pfVxuXG4gICAgICB7LyogU2Nyb2xsIGRvd24gaW5kaWNhdG9yICovfVxuICAgICAge3BhZ2luYXRpb24uc2Nyb2xsUG9zaXRpb24uY2FuU2Nyb2xsRG93biAmJiAoXG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+IHtmaWd1cmVzLmFycm93RG93bn0gbW9yZSBiZWxvdzwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuXG4gICAgICB7LyogSGVscCB0ZXh0ICovfVxuICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9IG1hcmdpbkxlZnQ9ezF9PlxuICAgICAgICA8VGV4dCBkaW1Db2xvciBpdGFsaWM+XG4gICAgICAgICAgPEJ5bGluZT5cbiAgICAgICAgICAgIDxUZXh0PnR5cGUgdG8gc2VhcmNoPC9UZXh0PlxuICAgICAgICAgICAgPENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludFxuICAgICAgICAgICAgICBhY3Rpb249XCJwbHVnaW46dG9nZ2xlXCJcbiAgICAgICAgICAgICAgY29udGV4dD1cIlBsdWdpblwiXG4gICAgICAgICAgICAgIGZhbGxiYWNrPVwiU3BhY2VcIlxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cInRvZ2dsZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludFxuICAgICAgICAgICAgICBhY3Rpb249XCJzZWxlY3Q6YWNjZXB0XCJcbiAgICAgICAgICAgICAgY29udGV4dD1cIlNlbGVjdFwiXG4gICAgICAgICAgICAgIGZhbGxiYWNrPVwiRW50ZXJcIlxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cImRldGFpbHNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgICAgYWN0aW9uPVwiY29uZmlybTpub1wiXG4gICAgICAgICAgICAgIGNvbnRleHQ9XCJDb25maXJtYXRpb25cIlxuICAgICAgICAgICAgICBmYWxsYmFjaz1cIkVzY1wiXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiYmFja1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQnlsaW5lPlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cblxuICAgICAgey8qIFJlbG9hZCBkaXNjbGFpbWVyIGZvciBwbHVnaW4gY2hhbmdlcyAqL31cbiAgICAgIHtwZW5kaW5nVG9nZ2xlcy5zaXplID4gMCAmJiAoXG4gICAgICAgIDxCb3ggbWFyZ2luTGVmdD17MX0+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3IgaXRhbGljPlxuICAgICAgICAgICAgUnVuIC9yZWxvYWQtcGx1Z2lucyB0byBhcHBseSBjaGFuZ2VzXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG4gICAgPC9Cb3g+XG4gIClcbn1cbiIsICIvLyBQYXJzZSBwbHVnaW4gc3ViY29tbWFuZCBhcmd1bWVudHMgaW50byBzdHJ1Y3R1cmVkIGNvbW1hbmRzXG5leHBvcnQgdHlwZSBQYXJzZWRDb21tYW5kID1cbiAgfCB7IHR5cGU6ICdtZW51JyB9XG4gIHwgeyB0eXBlOiAnaGVscCcgfVxuICB8IHsgdHlwZTogJ2luc3RhbGwnOyBtYXJrZXRwbGFjZT86IHN0cmluZzsgcGx1Z2luPzogc3RyaW5nIH1cbiAgfCB7IHR5cGU6ICdtYW5hZ2UnIH1cbiAgfCB7IHR5cGU6ICd1bmluc3RhbGwnOyBwbHVnaW4/OiBzdHJpbmcgfVxuICB8IHsgdHlwZTogJ2VuYWJsZSc7IHBsdWdpbj86IHN0cmluZyB9XG4gIHwgeyB0eXBlOiAnZGlzYWJsZSc7IHBsdWdpbj86IHN0cmluZyB9XG4gIHwgeyB0eXBlOiAndmFsaWRhdGUnOyBwYXRoPzogc3RyaW5nIH1cbiAgfCB7XG4gICAgICB0eXBlOiAnbWFya2V0cGxhY2UnXG4gICAgICBhY3Rpb24/OiAnYWRkJyB8ICdyZW1vdmUnIHwgJ3VwZGF0ZScgfCAnbGlzdCdcbiAgICAgIHRhcmdldD86IHN0cmluZ1xuICAgIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGx1Z2luQXJncyhhcmdzPzogc3RyaW5nKTogUGFyc2VkQ29tbWFuZCB7XG4gIGlmICghYXJncykge1xuICAgIHJldHVybiB7IHR5cGU6ICdtZW51JyB9XG4gIH1cblxuICBjb25zdCBwYXJ0cyA9IGFyZ3MudHJpbSgpLnNwbGl0KC9cXHMrLylcbiAgY29uc3QgY29tbWFuZCA9IHBhcnRzWzBdPy50b0xvd2VyQ2FzZSgpXG5cbiAgc3dpdGNoIChjb21tYW5kKSB7XG4gICAgY2FzZSAnaGVscCc6XG4gICAgY2FzZSAnLS1oZWxwJzpcbiAgICBjYXNlICctaCc6XG4gICAgICByZXR1cm4geyB0eXBlOiAnaGVscCcgfVxuXG4gICAgY2FzZSAnaW5zdGFsbCc6XG4gICAgY2FzZSAnaSc6IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHBhcnRzWzFdXG4gICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICByZXR1cm4geyB0eXBlOiAnaW5zdGFsbCcgfVxuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBpZiBpdCdzIGluIGZvcm1hdCBwbHVnaW5AbWFya2V0cGxhY2VcbiAgICAgIGlmICh0YXJnZXQuaW5jbHVkZXMoJ0AnKSkge1xuICAgICAgICBjb25zdCBbcGx1Z2luLCBtYXJrZXRwbGFjZV0gPSB0YXJnZXQuc3BsaXQoJ0AnKVxuICAgICAgICByZXR1cm4geyB0eXBlOiAnaW5zdGFsbCcsIHBsdWdpbiwgbWFya2V0cGxhY2UgfVxuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBpZiB0aGUgdGFyZ2V0IGxvb2tzIGxpa2UgYSBtYXJrZXRwbGFjZSAoVVJMIG9yIHBhdGgpXG4gICAgICBjb25zdCBpc01hcmtldHBsYWNlID1cbiAgICAgICAgdGFyZ2V0LnN0YXJ0c1dpdGgoJ2h0dHA6Ly8nKSB8fFxuICAgICAgICB0YXJnZXQuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKSB8fFxuICAgICAgICB0YXJnZXQuc3RhcnRzV2l0aCgnZmlsZTovLycpIHx8XG4gICAgICAgIHRhcmdldC5pbmNsdWRlcygnLycpIHx8XG4gICAgICAgIHRhcmdldC5pbmNsdWRlcygnXFxcXCcpXG5cbiAgICAgIGlmIChpc01hcmtldHBsYWNlKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgYSBtYXJrZXRwbGFjZSBVUkwvcGF0aCwgbm8gcGx1Z2luIHNwZWNpZmllZFxuICAgICAgICByZXR1cm4geyB0eXBlOiAnaW5zdGFsbCcsIG1hcmtldHBsYWNlOiB0YXJnZXQgfVxuICAgICAgfVxuXG4gICAgICAvLyBPdGhlcndpc2UgdHJlYXQgaXQgYXMgYSBwbHVnaW4gbmFtZVxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2luc3RhbGwnLCBwbHVnaW46IHRhcmdldCB9XG4gICAgfVxuXG4gICAgY2FzZSAnbWFuYWdlJzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdtYW5hZ2UnIH1cblxuICAgIGNhc2UgJ3VuaW5zdGFsbCc6XG4gICAgICByZXR1cm4geyB0eXBlOiAndW5pbnN0YWxsJywgcGx1Z2luOiBwYXJ0c1sxXSB9XG5cbiAgICBjYXNlICdlbmFibGUnOlxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2VuYWJsZScsIHBsdWdpbjogcGFydHNbMV0gfVxuXG4gICAgY2FzZSAnZGlzYWJsZSc6XG4gICAgICByZXR1cm4geyB0eXBlOiAnZGlzYWJsZScsIHBsdWdpbjogcGFydHNbMV0gfVxuXG4gICAgY2FzZSAndmFsaWRhdGUnOiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBwYXJ0cy5zbGljZSgxKS5qb2luKCcgJykudHJpbSgpXG4gICAgICByZXR1cm4geyB0eXBlOiAndmFsaWRhdGUnLCBwYXRoOiB0YXJnZXQgfHwgdW5kZWZpbmVkIH1cbiAgICB9XG5cbiAgICBjYXNlICdtYXJrZXRwbGFjZSc6XG4gICAgY2FzZSAnbWFya2V0Jzoge1xuICAgICAgY29uc3QgYWN0aW9uID0gcGFydHNbMV0/LnRvTG93ZXJDYXNlKClcbiAgICAgIGNvbnN0IHRhcmdldCA9IHBhcnRzLnNsaWNlKDIpLmpvaW4oJyAnKVxuXG4gICAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICBjYXNlICdhZGQnOlxuICAgICAgICAgIHJldHVybiB7IHR5cGU6ICdtYXJrZXRwbGFjZScsIGFjdGlvbjogJ2FkZCcsIHRhcmdldCB9XG4gICAgICAgIGNhc2UgJ3JlbW92ZSc6XG4gICAgICAgIGNhc2UgJ3JtJzpcbiAgICAgICAgICByZXR1cm4geyB0eXBlOiAnbWFya2V0cGxhY2UnLCBhY3Rpb246ICdyZW1vdmUnLCB0YXJnZXQgfVxuICAgICAgICBjYXNlICd1cGRhdGUnOlxuICAgICAgICAgIHJldHVybiB7IHR5cGU6ICdtYXJrZXRwbGFjZScsIGFjdGlvbjogJ3VwZGF0ZScsIHRhcmdldCB9XG4gICAgICAgIGNhc2UgJ2xpc3QnOlxuICAgICAgICAgIHJldHVybiB7IHR5cGU6ICdtYXJrZXRwbGFjZScsIGFjdGlvbjogJ2xpc3QnIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAvLyBObyBhY3Rpb24gc3BlY2lmaWVkLCBzaG93IG1hcmtldHBsYWNlIG1lbnVcbiAgICAgICAgICByZXR1cm4geyB0eXBlOiAnbWFya2V0cGxhY2UnIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgLy8gVW5rbm93biBjb21tYW5kLCBzaG93IG1lbnVcbiAgICAgIHJldHVybiB7IHR5cGU6ICdtZW51JyB9XG4gIH1cbn1cbiIsICJpbXBvcnQgZmlndXJlcyBmcm9tICdmaWd1cmVzJ1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7IGVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Vycm9ycy5qcydcbmltcG9ydCB7IGxvZ0Vycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nLmpzJ1xuaW1wb3J0IHsgdmFsaWRhdGVNYW5pZmVzdCB9IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvdmFsaWRhdGVQbHVnaW4uanMnXG5pbXBvcnQgeyBwbHVyYWwgfSBmcm9tICcuLi8uLi91dGlscy9zdHJpbmdVdGlscy5qcydcblxudHlwZSBQcm9wcyA9IHtcbiAgb25Db21wbGV0ZTogKHJlc3VsdD86IHN0cmluZykgPT4gdm9pZFxuICBwYXRoPzogc3RyaW5nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZVBsdWdpbih7IG9uQ29tcGxldGUsIHBhdGggfTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIHJ1blZhbGlkYXRpb24oKSB7XG4gICAgICAvLyBJZiBubyBwYXRoIHByb3ZpZGVkLCBzaG93IHVzYWdlXG4gICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgb25Db21wbGV0ZShcbiAgICAgICAgICAnVXNhZ2U6IC9wbHVnaW4gdmFsaWRhdGUgPHBhdGg+XFxuXFxuJyArXG4gICAgICAgICAgICAnVmFsaWRhdGUgYSBwbHVnaW4gb3IgbWFya2V0cGxhY2UgbWFuaWZlc3QgZmlsZSBvciBkaXJlY3RvcnkuXFxuXFxuJyArXG4gICAgICAgICAgICAnRXhhbXBsZXM6XFxuJyArXG4gICAgICAgICAgICAnICAvcGx1Z2luIHZhbGlkYXRlIC5jbGF1ZGUtcGx1Z2luL3BsdWdpbi5qc29uXFxuJyArXG4gICAgICAgICAgICAnICAvcGx1Z2luIHZhbGlkYXRlIC9wYXRoL3RvL3BsdWdpbi1kaXJlY3RvcnlcXG4nICtcbiAgICAgICAgICAgICcgIC9wbHVnaW4gdmFsaWRhdGUgLlxcblxcbicgK1xuICAgICAgICAgICAgJ1doZW4gZ2l2ZW4gYSBkaXJlY3RvcnksIGF1dG9tYXRpY2FsbHkgdmFsaWRhdGVzIC5jbGF1ZGUtcGx1Z2luL21hcmtldHBsYWNlLmpzb25cXG4nICtcbiAgICAgICAgICAgICdvciAuY2xhdWRlLXBsdWdpbi9wbHVnaW4uanNvbiAocHJlZmVycyBtYXJrZXRwbGFjZSBpZiBib3RoIGV4aXN0KS5cXG5cXG4nICtcbiAgICAgICAgICAgICdPciBmcm9tIHRoZSBjb21tYW5kIGxpbmU6XFxuJyArXG4gICAgICAgICAgICAnICBjbGF1ZGUgcGx1Z2luIHZhbGlkYXRlIDxwYXRoPicsXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHZhbGlkYXRlTWFuaWZlc3QocGF0aClcblxuICAgICAgICBsZXQgb3V0cHV0ID0gJydcblxuICAgICAgICAvLyBBZGQgaGVhZGVyXG4gICAgICAgIG91dHB1dCArPSBgVmFsaWRhdGluZyAke3Jlc3VsdC5maWxlVHlwZX0gbWFuaWZlc3Q6ICR7cmVzdWx0LmZpbGVQYXRofVxcblxcbmBcblxuICAgICAgICAvLyBTaG93IGVycm9yc1xuICAgICAgICBpZiAocmVzdWx0LmVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgb3V0cHV0ICs9IGAke2ZpZ3VyZXMuY3Jvc3N9IEZvdW5kICR7cmVzdWx0LmVycm9ycy5sZW5ndGh9ICR7cGx1cmFsKHJlc3VsdC5lcnJvcnMubGVuZ3RoLCAnZXJyb3InKX06XFxuXFxuYFxuXG4gICAgICAgICAgcmVzdWx0LmVycm9ycy5mb3JFYWNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIG91dHB1dCArPSBgICAke2ZpZ3VyZXMucG9pbnRlcn0gJHtlcnJvci5wYXRofTogJHtlcnJvci5tZXNzYWdlfVxcbmBcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgb3V0cHV0ICs9ICdcXG4nXG4gICAgICAgIH1cblxuICAgICAgICAvLyBTaG93IHdhcm5pbmdzXG4gICAgICAgIGlmIChyZXN1bHQud2FybmluZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgIG91dHB1dCArPSBgJHtmaWd1cmVzLndhcm5pbmd9IEZvdW5kICR7cmVzdWx0Lndhcm5pbmdzLmxlbmd0aH0gJHtwbHVyYWwocmVzdWx0Lndhcm5pbmdzLmxlbmd0aCwgJ3dhcm5pbmcnKX06XFxuXFxuYFxuXG4gICAgICAgICAgcmVzdWx0Lndhcm5pbmdzLmZvckVhY2god2FybmluZyA9PiB7XG4gICAgICAgICAgICBvdXRwdXQgKz0gYCAgJHtmaWd1cmVzLnBvaW50ZXJ9ICR7d2FybmluZy5wYXRofTogJHt3YXJuaW5nLm1lc3NhZ2V9XFxuYFxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBvdXRwdXQgKz0gJ1xcbidcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNob3cgc3VjY2VzcyBvciBmYWlsdXJlXG4gICAgICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICAgIGlmIChyZXN1bHQud2FybmluZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgb3V0cHV0ICs9IGAke2ZpZ3VyZXMudGlja30gVmFsaWRhdGlvbiBwYXNzZWQgd2l0aCB3YXJuaW5nc1xcbmBcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3V0cHV0ICs9IGAke2ZpZ3VyZXMudGlja30gVmFsaWRhdGlvbiBwYXNzZWRcXG5gXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRXhpdCB3aXRoIGNvZGUgMCAoc3VjY2VzcylcbiAgICAgICAgICBwcm9jZXNzLmV4aXRDb2RlID0gMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG91dHB1dCArPSBgJHtmaWd1cmVzLmNyb3NzfSBWYWxpZGF0aW9uIGZhaWxlZFxcbmBcblxuICAgICAgICAgIC8vIEV4aXQgd2l0aCBjb2RlIDEgKHZhbGlkYXRpb24gZmFpbHVyZSlcbiAgICAgICAgICBwcm9jZXNzLmV4aXRDb2RlID0gMVxuICAgICAgICB9XG5cbiAgICAgICAgb25Db21wbGV0ZShvdXRwdXQpXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBFeGl0IHdpdGggY29kZSAyICh1bmV4cGVjdGVkIGVycm9yKVxuICAgICAgICBwcm9jZXNzLmV4aXRDb2RlID0gMlxuXG4gICAgICAgIGxvZ0Vycm9yKGVycm9yKVxuXG4gICAgICAgIG9uQ29tcGxldGUoXG4gICAgICAgICAgYCR7ZmlndXJlcy5jcm9zc30gVW5leHBlY3RlZCBlcnJvciBkdXJpbmcgdmFsaWRhdGlvbjogJHtlcnJvck1lc3NhZ2UoZXJyb3IpfWAsXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2b2lkIHJ1blZhbGlkYXRpb24oKVxuICB9LCBbb25Db21wbGV0ZSwgcGF0aF0pXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgIDxUZXh0PlJ1bm5pbmcgdmFsaWRhdGlvbi4uLjwvVGV4dD5cbiAgICA8L0JveD5cbiAgKVxufVxuIiwgImltcG9ydCBmaWd1cmVzIGZyb20gJ2ZpZ3VyZXMnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb25maWd1cmFibGVTaG9ydGN1dEhpbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbmZpZ3VyYWJsZVNob3J0Y3V0SGludC5qcydcbmltcG9ydCB7IEJ5bGluZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGVzaWduLXN5c3RlbS9CeWxpbmUuanMnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kZXNpZ24tc3lzdGVtL1BhbmUuanMnXG5pbXBvcnQgeyBUYWIsIFRhYnMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Rlc2lnbi1zeXN0ZW0vVGFicy5qcydcbmltcG9ydCB7IHVzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncyB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncy5qcydcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7XG4gIHVzZUtleWJpbmRpbmcsXG4gIHVzZUtleWJpbmRpbmdzLFxufSBmcm9tICcuLi8uLi9rZXliaW5kaW5ncy91c2VLZXliaW5kaW5nLmpzJ1xuaW1wb3J0IHsgdXNlQXBwU3RhdGUsIHVzZVNldEFwcFN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUvQXBwU3RhdGUuanMnXG5pbXBvcnQgdHlwZSB7IFBsdWdpbkVycm9yIH0gZnJvbSAnLi4vLi4vdHlwZXMvcGx1Z2luLmpzJ1xuaW1wb3J0IHsgZXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXJyb3JzLmpzJ1xuaW1wb3J0IHsgY2xlYXJBbGxDYWNoZXMgfSBmcm9tICcuLi8uLi91dGlscy9wbHVnaW5zL2NhY2hlVXRpbHMuanMnXG5pbXBvcnQgeyBsb2FkTWFya2V0cGxhY2VzV2l0aEdyYWNlZnVsRGVncmFkYXRpb24gfSBmcm9tICcuLi8uLi91dGlscy9wbHVnaW5zL21hcmtldHBsYWNlSGVscGVycy5qcydcbmltcG9ydCB7XG4gIGxvYWRLbm93bk1hcmtldHBsYWNlc0NvbmZpZyxcbiAgcmVtb3ZlTWFya2V0cGxhY2VTb3VyY2UsXG59IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvbWFya2V0cGxhY2VNYW5hZ2VyLmpzJ1xuaW1wb3J0IHsgZ2V0UGx1Z2luRWRpdGFibGVTY29wZXMgfSBmcm9tICcuLi8uLi91dGlscy9wbHVnaW5zL3BsdWdpblN0YXJ0dXBDaGVjay5qcydcbmltcG9ydCB0eXBlIHsgRWRpdGFibGVTZXR0aW5nU291cmNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2V0dGluZ3MvY29uc3RhbnRzLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0U2V0dGluZ3NGb3JTb3VyY2UsXG4gIHVwZGF0ZVNldHRpbmdzRm9yU291cmNlLFxufSBmcm9tICcuLi8uLi91dGlscy9zZXR0aW5ncy9zZXR0aW5ncy5qcydcbmltcG9ydCB7IEFkZE1hcmtldHBsYWNlIH0gZnJvbSAnLi9BZGRNYXJrZXRwbGFjZS5qcydcbmltcG9ydCB7IEJyb3dzZU1hcmtldHBsYWNlIH0gZnJvbSAnLi9Ccm93c2VNYXJrZXRwbGFjZS5qcydcbmltcG9ydCB7IERpc2NvdmVyUGx1Z2lucyB9IGZyb20gJy4vRGlzY292ZXJQbHVnaW5zLmpzJ1xuaW1wb3J0IHsgTWFuYWdlTWFya2V0cGxhY2VzIH0gZnJvbSAnLi9NYW5hZ2VNYXJrZXRwbGFjZXMuanMnXG5pbXBvcnQgeyBNYW5hZ2VQbHVnaW5zIH0gZnJvbSAnLi9NYW5hZ2VQbHVnaW5zLmpzJ1xuaW1wb3J0IHsgZm9ybWF0RXJyb3JNZXNzYWdlLCBnZXRFcnJvckd1aWRhbmNlIH0gZnJvbSAnLi9QbHVnaW5FcnJvcnMuanMnXG5pbXBvcnQgeyB0eXBlIFBhcnNlZENvbW1hbmQsIHBhcnNlUGx1Z2luQXJncyB9IGZyb20gJy4vcGFyc2VBcmdzLmpzJ1xuaW1wb3J0IHR5cGUgeyBQbHVnaW5TZXR0aW5nc1Byb3BzLCBWaWV3U3RhdGUgfSBmcm9tICcuL3R5cGVzLmpzJ1xuaW1wb3J0IHsgVmFsaWRhdGVQbHVnaW4gfSBmcm9tICcuL1ZhbGlkYXRlUGx1Z2luLmpzJ1xuXG50eXBlIFRhYklkID0gJ2Rpc2NvdmVyJyB8ICdpbnN0YWxsZWQnIHwgJ21hcmtldHBsYWNlcycgfCAnZXJyb3JzJ1xuXG5mdW5jdGlvbiBNYXJrZXRwbGFjZUxpc3Qoe1xuICBvbkNvbXBsZXRlLFxufToge1xuICBvbkNvbXBsZXRlOiAocmVzdWx0Pzogc3RyaW5nKSA9PiB2b2lkXG59KTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkTGlzdCgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IGF3YWl0IGxvYWRLbm93bk1hcmtldHBsYWNlc0NvbmZpZygpXG4gICAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY29uZmlnKVxuXG4gICAgICAgIGlmIChuYW1lcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBvbkNvbXBsZXRlKCdObyBtYXJrZXRwbGFjZXMgY29uZmlndXJlZCcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb25Db21wbGV0ZShcbiAgICAgICAgICAgIGBDb25maWd1cmVkIG1hcmtldHBsYWNlczpcXG4ke25hbWVzLm1hcChuID0+IGAgIOKAoiAke259YCkuam9pbignXFxuJyl9YCxcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBvbkNvbXBsZXRlKGBFcnJvciBsb2FkaW5nIG1hcmtldHBsYWNlczogJHtlcnJvck1lc3NhZ2UoZXJyKX1gKVxuICAgICAgfVxuICAgIH1cblxuICAgIHZvaWQgbG9hZExpc3QoKVxuICB9LCBbb25Db21wbGV0ZV0pXG5cbiAgcmV0dXJuIDxUZXh0PkxvYWRpbmcgbWFya2V0cGxhY2VzLi4uPC9UZXh0PlxufVxuXG5mdW5jdGlvbiBNY3BSZWRpcmVjdEJhbm5lcigpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBpZiAoXCJleHRlcm5hbFwiICE9PSAnYW50Jykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxuICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxuICAgICAgcGFkZGluZ0xlZnQ9ezF9XG4gICAgICBtYXJnaW5Ub3A9ezF9XG4gICAgICBib3JkZXJMZWZ0XG4gICAgICBib3JkZXJSaWdodD17ZmFsc2V9XG4gICAgICBib3JkZXJUb3A9e2ZhbHNlfVxuICAgICAgYm9yZGVyQm90dG9tPXtmYWxzZX1cbiAgICAgIGJvcmRlckNvbG9yPVwicGVybWlzc2lvblwiXG4gICAgICBib3JkZXJTdHlsZT1cInNpbmdsZVwiXG4gICAgPlxuICAgICAgPEJveCBmbGV4U2hyaW5rPXswfT5cbiAgICAgICAgPFRleHQgYm9sZCBpdGFsaWMgY29sb3I9XCJwZXJtaXNzaW9uXCI+XG4gICAgICAgICAgaXsnICd9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgICAgPFRleHQ+XG4gICAgICAgIFtBTlQtT05MWV0gTUNQIHNlcnZlcnMgYXJlIG5vdyBtYW5hZ2VkIGluIC9wbHVnaW5zLiBVc2UgL21jcCBuby1yZWRpcmVjdFxuICAgICAgICB0byB0ZXN0IG9sZCBVSVxuICAgICAgPC9UZXh0PlxuICAgIDwvQm94PlxuICApXG59XG5cbnR5cGUgRXJyb3JSb3dBY3Rpb24gPVxuICB8IHsga2luZDogJ25hdmlnYXRlJzsgdGFiOiBUYWJJZDsgdmlld1N0YXRlOiBWaWV3U3RhdGUgfVxuICB8IHtcbiAgICAgIGtpbmQ6ICdyZW1vdmUtZXh0cmEtbWFya2V0cGxhY2UnXG4gICAgICBuYW1lOiBzdHJpbmdcbiAgICAgIHNvdXJjZXM6IEFycmF5PHsgc291cmNlOiBFZGl0YWJsZVNldHRpbmdTb3VyY2U7IHNjb3BlOiBzdHJpbmcgfT5cbiAgICB9XG4gIHwgeyBraW5kOiAncmVtb3ZlLWluc3RhbGxlZC1tYXJrZXRwbGFjZSc7IG5hbWU6IHN0cmluZyB9XG4gIHwgeyBraW5kOiAnbWFuYWdlZC1vbmx5JzsgbmFtZTogc3RyaW5nIH1cbiAgfCB7IGtpbmQ6ICdub25lJyB9XG5cbnR5cGUgRXJyb3JSb3cgPSB7XG4gIGxhYmVsOiBzdHJpbmdcbiAgbWVzc2FnZTogc3RyaW5nXG4gIGd1aWRhbmNlPzogc3RyaW5nIHwgbnVsbFxuICBhY3Rpb246IEVycm9yUm93QWN0aW9uXG4gIHNjb3BlPzogc3RyaW5nXG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoaWNoIHNldHRpbmdzIHNvdXJjZXMgZGVmaW5lIGFuIGV4dHJhS25vd25NYXJrZXRwbGFjZSBlbnRyeS5cbiAqIFJldHVybnMgdGhlIGVkaXRhYmxlIHNvdXJjZXMgKHVzZXIvcHJvamVjdC9sb2NhbCkgYW5kIHdoZXRoZXIgcG9saWN5IGFsc28gaGFzIGl0LlxuICovXG5mdW5jdGlvbiBnZXRFeHRyYU1hcmtldHBsYWNlU291cmNlSW5mbyhuYW1lOiBzdHJpbmcpOiB7XG4gIGVkaXRhYmxlU291cmNlczogQXJyYXk8eyBzb3VyY2U6IEVkaXRhYmxlU2V0dGluZ1NvdXJjZTsgc2NvcGU6IHN0cmluZyB9PlxuICBpc0luUG9saWN5OiBib29sZWFuXG59IHtcbiAgY29uc3QgZWRpdGFibGVTb3VyY2VzOiBBcnJheTx7XG4gICAgc291cmNlOiBFZGl0YWJsZVNldHRpbmdTb3VyY2VcbiAgICBzY29wZTogc3RyaW5nXG4gIH0+ID0gW11cblxuICBjb25zdCBzb3VyY2VzVG9DaGVjayA9IFtcbiAgICB7IHNvdXJjZTogJ3VzZXJTZXR0aW5ncycgYXMgY29uc3QsIHNjb3BlOiAndXNlcicgfSxcbiAgICB7IHNvdXJjZTogJ3Byb2plY3RTZXR0aW5ncycgYXMgY29uc3QsIHNjb3BlOiAncHJvamVjdCcgfSxcbiAgICB7IHNvdXJjZTogJ2xvY2FsU2V0dGluZ3MnIGFzIGNvbnN0LCBzY29wZTogJ2xvY2FsJyB9LFxuICBdXG5cbiAgZm9yIChjb25zdCB7IHNvdXJjZSwgc2NvcGUgfSBvZiBzb3VyY2VzVG9DaGVjaykge1xuICAgIGNvbnN0IHNldHRpbmdzID0gZ2V0U2V0dGluZ3NGb3JTb3VyY2Uoc291cmNlKVxuICAgIGlmIChzZXR0aW5ncz8uZXh0cmFLbm93bk1hcmtldHBsYWNlcz8uW25hbWVdKSB7XG4gICAgICBlZGl0YWJsZVNvdXJjZXMucHVzaCh7IHNvdXJjZSwgc2NvcGUgfSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBwb2xpY3lTZXR0aW5ncyA9IGdldFNldHRpbmdzRm9yU291cmNlKCdwb2xpY3lTZXR0aW5ncycpXG4gIGNvbnN0IGlzSW5Qb2xpY3kgPSBCb29sZWFuKHBvbGljeVNldHRpbmdzPy5leHRyYUtub3duTWFya2V0cGxhY2VzPy5bbmFtZV0pXG5cbiAgcmV0dXJuIHsgZWRpdGFibGVTb3VyY2VzLCBpc0luUG9saWN5IH1cbn1cblxuZnVuY3Rpb24gYnVpbGRNYXJrZXRwbGFjZUFjdGlvbihuYW1lOiBzdHJpbmcpOiBFcnJvclJvd0FjdGlvbiB7XG4gIGNvbnN0IHsgZWRpdGFibGVTb3VyY2VzLCBpc0luUG9saWN5IH0gPSBnZXRFeHRyYU1hcmtldHBsYWNlU291cmNlSW5mbyhuYW1lKVxuXG4gIGlmIChlZGl0YWJsZVNvdXJjZXMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiAncmVtb3ZlLWV4dHJhLW1hcmtldHBsYWNlJyxcbiAgICAgIG5hbWUsXG4gICAgICBzb3VyY2VzOiBlZGl0YWJsZVNvdXJjZXMsXG4gICAgfVxuICB9XG5cbiAgaWYgKGlzSW5Qb2xpY3kpIHtcbiAgICByZXR1cm4geyBraW5kOiAnbWFuYWdlZC1vbmx5JywgbmFtZSB9XG4gIH1cblxuICAvLyBNYXJrZXRwbGFjZSBpcyBpbiBrbm93bl9tYXJrZXRwbGFjZXMuanNvbiBidXQgbm90IGluIGV4dHJhS25vd25NYXJrZXRwbGFjZXNcbiAgLy8gKGUuZy4gcHJldmlvdXNseSBpbnN0YWxsZWQgbWFudWFsbHkpIOKAlCByb3V0ZSB0byBNYW5hZ2VNYXJrZXRwbGFjZXNcbiAgcmV0dXJuIHtcbiAgICBraW5kOiAnbmF2aWdhdGUnLFxuICAgIHRhYjogJ21hcmtldHBsYWNlcycsXG4gICAgdmlld1N0YXRlOiB7XG4gICAgICB0eXBlOiAnbWFuYWdlLW1hcmtldHBsYWNlcycsXG4gICAgICB0YXJnZXRNYXJrZXRwbGFjZTogbmFtZSxcbiAgICAgIGFjdGlvbjogJ3JlbW92ZScsXG4gICAgfSxcbiAgfVxufVxuXG5mdW5jdGlvbiBidWlsZFBsdWdpbkFjdGlvbihwbHVnaW5OYW1lOiBzdHJpbmcpOiBFcnJvclJvd0FjdGlvbiB7XG4gIHJldHVybiB7XG4gICAga2luZDogJ25hdmlnYXRlJyxcbiAgICB0YWI6ICdpbnN0YWxsZWQnLFxuICAgIHZpZXdTdGF0ZToge1xuICAgICAgdHlwZTogJ21hbmFnZS1wbHVnaW5zJyxcbiAgICAgIHRhcmdldFBsdWdpbjogcGx1Z2luTmFtZSxcbiAgICAgIGFjdGlvbjogJ3VuaW5zdGFsbCcsXG4gICAgfSxcbiAgfVxufVxuXG5jb25zdCBUUkFOU0lFTlRfRVJST1JfVFlQRVMgPSBuZXcgU2V0KFtcbiAgJ2dpdC1hdXRoLWZhaWxlZCcsXG4gICdnaXQtdGltZW91dCcsXG4gICduZXR3b3JrLWVycm9yJyxcbl0pXG5cbmZ1bmN0aW9uIGlzVHJhbnNpZW50RXJyb3IoZXJyb3I6IFBsdWdpbkVycm9yKTogYm9vbGVhbiB7XG4gIHJldHVybiBUUkFOU0lFTlRfRVJST1JfVFlQRVMuaGFzKGVycm9yLnR5cGUpXG59XG5cbi8qKlxuICogRXh0cmFjdCB0aGUgcGx1Z2luIG5hbWUgZnJvbSBhIFBsdWdpbkVycm9yLCBjaGVja2luZyBleHBsaWNpdCBmaWVsZHMgZmlyc3QsXG4gKiB0aGVuIGZhbGxpbmcgYmFjayB0byB0aGUgc291cmNlIGZpZWxkIChmb3JtYXQ6IFwicGx1Z2luTmFtZUBtYXJrZXRwbGFjZVwiKS5cbiAqL1xuZnVuY3Rpb24gZ2V0UGx1Z2luTmFtZUZyb21FcnJvcihlcnJvcjogUGx1Z2luRXJyb3IpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICBpZiAoJ3BsdWdpbklkJyBpbiBlcnJvciAmJiBlcnJvci5wbHVnaW5JZCkgcmV0dXJuIGVycm9yLnBsdWdpbklkXG4gIGlmICgncGx1Z2luJyBpbiBlcnJvciAmJiBlcnJvci5wbHVnaW4pIHJldHVybiBlcnJvci5wbHVnaW5cbiAgLy8gRmFsbGJhY2s6IHNvdXJjZSBvZnRlbiBjb250YWlucyBcInBsdWdpbk5hbWVAbWFya2V0cGxhY2VcIlxuICBpZiAoZXJyb3Iuc291cmNlLmluY2x1ZGVzKCdAJykpIHJldHVybiBlcnJvci5zb3VyY2Uuc3BsaXQoJ0AnKVswXVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGJ1aWxkRXJyb3JSb3dzKFxuICBmYWlsZWRNYXJrZXRwbGFjZXM6IEFycmF5PHsgbmFtZTogc3RyaW5nOyBlcnJvcj86IHN0cmluZyB9PixcbiAgZXh0cmFNYXJrZXRwbGFjZUVycm9yczogUGx1Z2luRXJyb3JbXSxcbiAgcGx1Z2luTG9hZGluZ0Vycm9yczogUGx1Z2luRXJyb3JbXSxcbiAgb3RoZXJFcnJvcnM6IFBsdWdpbkVycm9yW10sXG4gIGJyb2tlbkluc3RhbGxlZE1hcmtldHBsYWNlczogQXJyYXk8eyBuYW1lOiBzdHJpbmc7IGVycm9yOiBzdHJpbmcgfT4sXG4gIHRyYW5zaWVudEVycm9yczogUGx1Z2luRXJyb3JbXSxcbiAgcGx1Z2luU2NvcGVzOiBNYXA8c3RyaW5nLCBzdHJpbmc+LFxuKTogRXJyb3JSb3dbXSB7XG4gIGNvbnN0IHJvd3M6IEVycm9yUm93W10gPSBbXVxuXG4gIC8vIC0tLSBUcmFuc2llbnQgZXJyb3JzIGF0IHRoZSB0b3AgKHJlc3RhcnQgdG8gcmV0cnkpIC0tLVxuICBmb3IgKGNvbnN0IGVycm9yIG9mIHRyYW5zaWVudEVycm9ycykge1xuICAgIGNvbnN0IHBsdWdpbk5hbWUgPVxuICAgICAgJ3BsdWdpbklkJyBpbiBlcnJvclxuICAgICAgICA/IGVycm9yLnBsdWdpbklkXG4gICAgICAgIDogJ3BsdWdpbicgaW4gZXJyb3JcbiAgICAgICAgICA/IGVycm9yLnBsdWdpblxuICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgcm93cy5wdXNoKHtcbiAgICAgIGxhYmVsOiBwbHVnaW5OYW1lID8/IGVycm9yLnNvdXJjZSxcbiAgICAgIG1lc3NhZ2U6IGZvcm1hdEVycm9yTWVzc2FnZShlcnJvciksXG4gICAgICBndWlkYW5jZTogJ1Jlc3RhcnQgdG8gcmV0cnkgbG9hZGluZyBwbHVnaW5zJyxcbiAgICAgIGFjdGlvbjogeyBraW5kOiAnbm9uZScgfSxcbiAgICB9KVxuICB9XG5cbiAgLy8gLS0tIE1hcmtldHBsYWNlIGVycm9ycyAtLS1cbiAgLy8gVHJhY2sgc2hvd24gbWFya2V0cGxhY2UgbmFtZXMgdG8gYXZvaWQgZHVwbGljYXRlcyBhY3Jvc3Mgc291cmNlc1xuICBjb25zdCBzaG93bk1hcmtldHBsYWNlTmFtZXMgPSBuZXcgU2V0PHN0cmluZz4oKVxuXG4gIGZvciAoY29uc3QgbSBvZiBmYWlsZWRNYXJrZXRwbGFjZXMpIHtcbiAgICBzaG93bk1hcmtldHBsYWNlTmFtZXMuYWRkKG0ubmFtZSlcbiAgICBjb25zdCBhY3Rpb24gPSBidWlsZE1hcmtldHBsYWNlQWN0aW9uKG0ubmFtZSlcbiAgICBjb25zdCBzb3VyY2VJbmZvID0gZ2V0RXh0cmFNYXJrZXRwbGFjZVNvdXJjZUluZm8obS5uYW1lKVxuICAgIGNvbnN0IHNjb3BlID0gc291cmNlSW5mby5pc0luUG9saWN5XG4gICAgICA/ICdtYW5hZ2VkJ1xuICAgICAgOiBzb3VyY2VJbmZvLmVkaXRhYmxlU291cmNlc1swXT8uc2NvcGVcbiAgICByb3dzLnB1c2goe1xuICAgICAgbGFiZWw6IG0ubmFtZSxcbiAgICAgIG1lc3NhZ2U6IG0uZXJyb3IgPz8gJ0luc3RhbGxhdGlvbiBmYWlsZWQnLFxuICAgICAgZ3VpZGFuY2U6XG4gICAgICAgIGFjdGlvbi5raW5kID09PSAnbWFuYWdlZC1vbmx5J1xuICAgICAgICAgID8gJ01hbmFnZWQgYnkgeW91ciBvcmdhbml6YXRpb24g4oCUIGNvbnRhY3QgeW91ciBhZG1pbidcbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIGFjdGlvbixcbiAgICAgIHNjb3BlLFxuICAgIH0pXG4gIH1cblxuICBmb3IgKGNvbnN0IGUgb2YgZXh0cmFNYXJrZXRwbGFjZUVycm9ycykge1xuICAgIGNvbnN0IG1hcmtldHBsYWNlID0gJ21hcmtldHBsYWNlJyBpbiBlID8gZS5tYXJrZXRwbGFjZSA6IGUuc291cmNlXG4gICAgaWYgKHNob3duTWFya2V0cGxhY2VOYW1lcy5oYXMobWFya2V0cGxhY2UpKSBjb250aW51ZVxuICAgIHNob3duTWFya2V0cGxhY2VOYW1lcy5hZGQobWFya2V0cGxhY2UpXG4gICAgY29uc3QgYWN0aW9uID0gYnVpbGRNYXJrZXRwbGFjZUFjdGlvbihtYXJrZXRwbGFjZSlcbiAgICBjb25zdCBzb3VyY2VJbmZvID0gZ2V0RXh0cmFNYXJrZXRwbGFjZVNvdXJjZUluZm8obWFya2V0cGxhY2UpXG4gICAgY29uc3Qgc2NvcGUgPSBzb3VyY2VJbmZvLmlzSW5Qb2xpY3lcbiAgICAgID8gJ21hbmFnZWQnXG4gICAgICA6IHNvdXJjZUluZm8uZWRpdGFibGVTb3VyY2VzWzBdPy5zY29wZVxuICAgIHJvd3MucHVzaCh7XG4gICAgICBsYWJlbDogbWFya2V0cGxhY2UsXG4gICAgICBtZXNzYWdlOiBmb3JtYXRFcnJvck1lc3NhZ2UoZSksXG4gICAgICBndWlkYW5jZTpcbiAgICAgICAgYWN0aW9uLmtpbmQgPT09ICdtYW5hZ2VkLW9ubHknXG4gICAgICAgICAgPyAnTWFuYWdlZCBieSB5b3VyIG9yZ2FuaXphdGlvbiDigJQgY29udGFjdCB5b3VyIGFkbWluJ1xuICAgICAgICAgIDogZ2V0RXJyb3JHdWlkYW5jZShlKSxcbiAgICAgIGFjdGlvbixcbiAgICAgIHNjb3BlLFxuICAgIH0pXG4gIH1cblxuICAvLyBJbnN0YWxsZWQgbWFya2V0cGxhY2VzIHRoYXQgZmFpbCB0byBsb2FkIGRhdGEgKGZyb20ga25vd25fbWFya2V0cGxhY2VzLmpzb24pXG4gIGZvciAoY29uc3QgbSBvZiBicm9rZW5JbnN0YWxsZWRNYXJrZXRwbGFjZXMpIHtcbiAgICBpZiAoc2hvd25NYXJrZXRwbGFjZU5hbWVzLmhhcyhtLm5hbWUpKSBjb250aW51ZVxuICAgIHNob3duTWFya2V0cGxhY2VOYW1lcy5hZGQobS5uYW1lKVxuICAgIHJvd3MucHVzaCh7XG4gICAgICBsYWJlbDogbS5uYW1lLFxuICAgICAgbWVzc2FnZTogbS5lcnJvcixcbiAgICAgIGFjdGlvbjogeyBraW5kOiAncmVtb3ZlLWluc3RhbGxlZC1tYXJrZXRwbGFjZScsIG5hbWU6IG0ubmFtZSB9LFxuICAgIH0pXG4gIH1cblxuICAvLyAtLS0gUGx1Z2luIGVycm9ycyAtLS1cbiAgY29uc3Qgc2hvd25QbHVnaW5OYW1lcyA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIGZvciAoY29uc3QgZXJyb3Igb2YgcGx1Z2luTG9hZGluZ0Vycm9ycykge1xuICAgIGNvbnN0IHBsdWdpbk5hbWUgPSBnZXRQbHVnaW5OYW1lRnJvbUVycm9yKGVycm9yKVxuICAgIGlmIChwbHVnaW5OYW1lICYmIHNob3duUGx1Z2luTmFtZXMuaGFzKHBsdWdpbk5hbWUpKSBjb250aW51ZVxuICAgIGlmIChwbHVnaW5OYW1lKSBzaG93blBsdWdpbk5hbWVzLmFkZChwbHVnaW5OYW1lKVxuXG4gICAgY29uc3QgbWFya2V0cGxhY2UgPSAnbWFya2V0cGxhY2UnIGluIGVycm9yID8gZXJyb3IubWFya2V0cGxhY2UgOiB1bmRlZmluZWRcbiAgICAvLyBUcnkgcGx1Z2luSWRAbWFya2V0cGxhY2UgZm9ybWF0IGZpcnN0LCB0aGVuIGp1c3QgcGx1Z2luTmFtZVxuICAgIGNvbnN0IHNjb3BlID0gcGx1Z2luTmFtZVxuICAgICAgPyAocGx1Z2luU2NvcGVzLmdldChlcnJvci5zb3VyY2UpID8/IHBsdWdpblNjb3Blcy5nZXQocGx1Z2luTmFtZSkpXG4gICAgICA6IHVuZGVmaW5lZFxuICAgIHJvd3MucHVzaCh7XG4gICAgICBsYWJlbDogcGx1Z2luTmFtZVxuICAgICAgICA/IG1hcmtldHBsYWNlXG4gICAgICAgICAgPyBgJHtwbHVnaW5OYW1lfSBAICR7bWFya2V0cGxhY2V9YFxuICAgICAgICAgIDogcGx1Z2luTmFtZVxuICAgICAgICA6IGVycm9yLnNvdXJjZSxcbiAgICAgIG1lc3NhZ2U6IGZvcm1hdEVycm9yTWVzc2FnZShlcnJvciksXG4gICAgICBndWlkYW5jZTogZ2V0RXJyb3JHdWlkYW5jZShlcnJvciksXG4gICAgICBhY3Rpb246IHBsdWdpbk5hbWUgPyBidWlsZFBsdWdpbkFjdGlvbihwbHVnaW5OYW1lKSA6IHsga2luZDogJ25vbmUnIH0sXG4gICAgICBzY29wZSxcbiAgICB9KVxuICB9XG5cbiAgLy8gLS0tIE90aGVyIGVycm9ycyAobm9uLW1hcmtldHBsYWNlLCBub24tcGx1Z2luLXNwZWNpZmljKSAtLS1cbiAgZm9yIChjb25zdCBlcnJvciBvZiBvdGhlckVycm9ycykge1xuICAgIHJvd3MucHVzaCh7XG4gICAgICBsYWJlbDogZXJyb3Iuc291cmNlLFxuICAgICAgbWVzc2FnZTogZm9ybWF0RXJyb3JNZXNzYWdlKGVycm9yKSxcbiAgICAgIGd1aWRhbmNlOiBnZXRFcnJvckd1aWRhbmNlKGVycm9yKSxcbiAgICAgIGFjdGlvbjogeyBraW5kOiAnbm9uZScgfSxcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHJvd3Ncbn1cblxuLyoqXG4gKiBSZW1vdmUgYSBtYXJrZXRwbGFjZSBmcm9tIGV4dHJhS25vd25NYXJrZXRwbGFjZXMgaW4gdGhlIGdpdmVuIHNldHRpbmdzIHNvdXJjZXMsXG4gKiBhbmQgYWxzbyByZW1vdmUgYW55IGFzc29jaWF0ZWQgZW5hYmxlZCBwbHVnaW5zLlxuICovXG5mdW5jdGlvbiByZW1vdmVFeHRyYU1hcmtldHBsYWNlKFxuICBuYW1lOiBzdHJpbmcsXG4gIHNvdXJjZXM6IEFycmF5PHsgc291cmNlOiBFZGl0YWJsZVNldHRpbmdTb3VyY2UgfT4sXG4pOiB2b2lkIHtcbiAgZm9yIChjb25zdCB7IHNvdXJjZSB9IG9mIHNvdXJjZXMpIHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IGdldFNldHRpbmdzRm9yU291cmNlKHNvdXJjZSlcbiAgICBpZiAoIXNldHRpbmdzKSBjb250aW51ZVxuXG4gICAgY29uc3QgdXBkYXRlczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fVxuXG4gICAgLy8gUmVtb3ZlIGZyb20gZXh0cmFLbm93bk1hcmtldHBsYWNlc1xuICAgIGlmIChzZXR0aW5ncy5leHRyYUtub3duTWFya2V0cGxhY2VzPy5bbmFtZV0pIHtcbiAgICAgIHVwZGF0ZXMuZXh0cmFLbm93bk1hcmtldHBsYWNlcyA9IHtcbiAgICAgICAgLi4uc2V0dGluZ3MuZXh0cmFLbm93bk1hcmtldHBsYWNlcyxcbiAgICAgICAgW25hbWVdOiB1bmRlZmluZWQsXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGFzc29jaWF0ZWQgZW5hYmxlZCBwbHVnaW5zIChmb3JtYXQ6IFwicGx1Z2luQG1hcmtldHBsYWNlXCIpXG4gICAgaWYgKHNldHRpbmdzLmVuYWJsZWRQbHVnaW5zKSB7XG4gICAgICBjb25zdCBzdWZmaXggPSBgQCR7bmFtZX1gXG4gICAgICBsZXQgcmVtb3ZlZFBsdWdpbnMgPSBmYWxzZVxuICAgICAgY29uc3QgdXBkYXRlZFBsdWdpbnMgPSB7IC4uLnNldHRpbmdzLmVuYWJsZWRQbHVnaW5zIH1cbiAgICAgIGZvciAoY29uc3QgcGx1Z2luSWQgaW4gdXBkYXRlZFBsdWdpbnMpIHtcbiAgICAgICAgaWYgKHBsdWdpbklkLmVuZHNXaXRoKHN1ZmZpeCkpIHtcbiAgICAgICAgICB1cGRhdGVkUGx1Z2luc1twbHVnaW5JZF0gPSB1bmRlZmluZWRcbiAgICAgICAgICByZW1vdmVkUGx1Z2lucyA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHJlbW92ZWRQbHVnaW5zKSB7XG4gICAgICAgIHVwZGF0ZXMuZW5hYmxlZFBsdWdpbnMgPSB1cGRhdGVkUGx1Z2luc1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChPYmplY3Qua2V5cyh1cGRhdGVzKS5sZW5ndGggPiAwKSB7XG4gICAgICB1cGRhdGVTZXR0aW5nc0ZvclNvdXJjZShzb3VyY2UsIHVwZGF0ZXMpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIEVycm9yc1RhYkNvbnRlbnQoe1xuICBzZXRWaWV3U3RhdGUsXG4gIHNldEFjdGl2ZVRhYixcbiAgbWFya1BsdWdpbnNDaGFuZ2VkLFxufToge1xuICBzZXRWaWV3U3RhdGU6IChzdGF0ZTogVmlld1N0YXRlKSA9PiB2b2lkXG4gIHNldEFjdGl2ZVRhYjogKHRhYjogVGFiSWQpID0+IHZvaWRcbiAgbWFya1BsdWdpbnNDaGFuZ2VkOiAoKSA9PiB2b2lkXG59KTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgZXJyb3JzID0gdXNlQXBwU3RhdGUocyA9PiBzLnBsdWdpbnMuZXJyb3JzKVxuICBjb25zdCBpbnN0YWxsYXRpb25TdGF0dXMgPSB1c2VBcHBTdGF0ZShzID0+IHMucGx1Z2lucy5pbnN0YWxsYXRpb25TdGF0dXMpXG4gIGNvbnN0IHNldEFwcFN0YXRlID0gdXNlU2V0QXBwU3RhdGUoKVxuICBjb25zdCBbc2VsZWN0ZWRJbmRleCwgc2V0U2VsZWN0ZWRJbmRleF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbYWN0aW9uTWVzc2FnZSwgc2V0QWN0aW9uTWVzc2FnZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuICBjb25zdCBbbWFya2V0cGxhY2VMb2FkRmFpbHVyZXMsIHNldE1hcmtldHBsYWNlTG9hZEZhaWx1cmVzXSA9IHVzZVN0YXRlPFxuICAgIEFycmF5PHsgbmFtZTogc3RyaW5nOyBlcnJvcjogc3RyaW5nIH0+XG4gID4oW10pXG5cbiAgLy8gRGV0ZWN0IG1hcmtldHBsYWNlcyB0aGF0IGFyZSBpbnN0YWxsZWQgYnV0IGZhaWwgdG8gbG9hZCB0aGVpciBkYXRhXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdm9pZCAoYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gYXdhaXQgbG9hZEtub3duTWFya2V0cGxhY2VzQ29uZmlnKClcbiAgICAgICAgY29uc3QgeyBmYWlsdXJlcyB9ID1cbiAgICAgICAgICBhd2FpdCBsb2FkTWFya2V0cGxhY2VzV2l0aEdyYWNlZnVsRGVncmFkYXRpb24oY29uZmlnKVxuICAgICAgICBzZXRNYXJrZXRwbGFjZUxvYWRGYWlsdXJlcyhmYWlsdXJlcylcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyBJZ25vcmUg4oCUIGlmIHdlIGNhbid0IGxvYWQgY29uZmlnLCBvdGhlciB0YWJzIGhhbmRsZSBpdFxuICAgICAgfVxuICAgIH0pKClcbiAgfSwgW10pXG5cbiAgY29uc3QgZmFpbGVkTWFya2V0cGxhY2VzID0gaW5zdGFsbGF0aW9uU3RhdHVzLm1hcmtldHBsYWNlcy5maWx0ZXIoXG4gICAgbSA9PiBtLnN0YXR1cyA9PT0gJ2ZhaWxlZCcsXG4gIClcbiAgY29uc3QgZmFpbGVkTWFya2V0cGxhY2VOYW1lcyA9IG5ldyBTZXQoZmFpbGVkTWFya2V0cGxhY2VzLm1hcChtID0+IG0ubmFtZSkpXG5cbiAgLy8gVHJhbnNpZW50IGVycm9ycyAoZ2l0L25ldHdvcmspIOKAlCBzaG93IGF0IHRvcCB3aXRoIFwicmVzdGFydCB0byByZXRyeVwiXG4gIGNvbnN0IHRyYW5zaWVudEVycm9ycyA9IGVycm9ycy5maWx0ZXIoaXNUcmFuc2llbnRFcnJvcilcblxuICAvLyBNYXJrZXRwbGFjZS1yZWxhdGVkIGxvYWRpbmcgZXJyb3JzIG5vdCBhbHJlYWR5IGNvdmVyZWQgYnkgaW5zdGFsbCBmYWlsdXJlc1xuICBjb25zdCBleHRyYU1hcmtldHBsYWNlRXJyb3JzID0gZXJyb3JzLmZpbHRlcihcbiAgICBlID0+XG4gICAgICAoZS50eXBlID09PSAnbWFya2V0cGxhY2Utbm90LWZvdW5kJyB8fFxuICAgICAgICBlLnR5cGUgPT09ICdtYXJrZXRwbGFjZS1sb2FkLWZhaWxlZCcgfHxcbiAgICAgICAgZS50eXBlID09PSAnbWFya2V0cGxhY2UtYmxvY2tlZC1ieS1wb2xpY3knKSAmJlxuICAgICAgIWZhaWxlZE1hcmtldHBsYWNlTmFtZXMuaGFzKGUubWFya2V0cGxhY2UpLFxuICApXG5cbiAgLy8gUGx1Z2luLXNwZWNpZmljIGxvYWRpbmcgZXJyb3JzXG4gIGNvbnN0IHBsdWdpbkxvYWRpbmdFcnJvcnMgPSBlcnJvcnMuZmlsdGVyKGUgPT4ge1xuICAgIGlmIChpc1RyYW5zaWVudEVycm9yKGUpKSByZXR1cm4gZmFsc2VcbiAgICBpZiAoXG4gICAgICBlLnR5cGUgPT09ICdtYXJrZXRwbGFjZS1ub3QtZm91bmQnIHx8XG4gICAgICBlLnR5cGUgPT09ICdtYXJrZXRwbGFjZS1sb2FkLWZhaWxlZCcgfHxcbiAgICAgIGUudHlwZSA9PT0gJ21hcmtldHBsYWNlLWJsb2NrZWQtYnktcG9saWN5J1xuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiBnZXRQbHVnaW5OYW1lRnJvbUVycm9yKGUpICE9PSB1bmRlZmluZWRcbiAgfSlcblxuICAvLyBSZW1haW5pbmcgZXJyb3JzIHdpdGggbm8gcGx1Z2luIGFzc29jaWF0aW9uXG4gIGNvbnN0IG90aGVyRXJyb3JzID0gZXJyb3JzLmZpbHRlcihlID0+IHtcbiAgICBpZiAoaXNUcmFuc2llbnRFcnJvcihlKSkgcmV0dXJuIGZhbHNlXG4gICAgaWYgKFxuICAgICAgZS50eXBlID09PSAnbWFya2V0cGxhY2Utbm90LWZvdW5kJyB8fFxuICAgICAgZS50eXBlID09PSAnbWFya2V0cGxhY2UtbG9hZC1mYWlsZWQnIHx8XG4gICAgICBlLnR5cGUgPT09ICdtYXJrZXRwbGFjZS1ibG9ja2VkLWJ5LXBvbGljeSdcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gZ2V0UGx1Z2luTmFtZUZyb21FcnJvcihlKSA9PT0gdW5kZWZpbmVkXG4gIH0pXG5cbiAgY29uc3QgcGx1Z2luU2NvcGVzID0gZ2V0UGx1Z2luRWRpdGFibGVTY29wZXMoKVxuICBjb25zdCByb3dzID0gYnVpbGRFcnJvclJvd3MoXG4gICAgZmFpbGVkTWFya2V0cGxhY2VzLFxuICAgIGV4dHJhTWFya2V0cGxhY2VFcnJvcnMsXG4gICAgcGx1Z2luTG9hZGluZ0Vycm9ycyxcbiAgICBvdGhlckVycm9ycyxcbiAgICBtYXJrZXRwbGFjZUxvYWRGYWlsdXJlcyxcbiAgICB0cmFuc2llbnRFcnJvcnMsXG4gICAgcGx1Z2luU2NvcGVzLFxuICApXG5cbiAgLy8gSGFuZGxlIGVzY2FwZSB0byBleGl0IHRoZSBwbHVnaW4gbWVudVxuICB1c2VLZXliaW5kaW5nKFxuICAgICdjb25maXJtOm5vJyxcbiAgICAoKSA9PiB7XG4gICAgICBzZXRWaWV3U3RhdGUoeyB0eXBlOiAnbWVudScgfSlcbiAgICB9LFxuICAgIHsgY29udGV4dDogJ0NvbmZpcm1hdGlvbicgfSxcbiAgKVxuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdCA9ICgpID0+IHtcbiAgICBjb25zdCByb3cgPSByb3dzW3NlbGVjdGVkSW5kZXhdXG4gICAgaWYgKCFyb3cpIHJldHVyblxuICAgIGNvbnN0IHsgYWN0aW9uIH0gPSByb3dcbiAgICBzd2l0Y2ggKGFjdGlvbi5raW5kKSB7XG4gICAgICBjYXNlICduYXZpZ2F0ZSc6XG4gICAgICAgIHNldEFjdGl2ZVRhYihhY3Rpb24udGFiKVxuICAgICAgICBzZXRWaWV3U3RhdGUoYWN0aW9uLnZpZXdTdGF0ZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3JlbW92ZS1leHRyYS1tYXJrZXRwbGFjZSc6IHtcbiAgICAgICAgY29uc3Qgc2NvcGVzID0gYWN0aW9uLnNvdXJjZXMubWFwKHMgPT4gcy5zY29wZSkuam9pbignLCAnKVxuICAgICAgICByZW1vdmVFeHRyYU1hcmtldHBsYWNlKGFjdGlvbi5uYW1lLCBhY3Rpb24uc291cmNlcylcbiAgICAgICAgY2xlYXJBbGxDYWNoZXMoKVxuICAgICAgICAvLyBTeW5jaHJvbm91c2x5IGNsZWFyIGFsbCBzdGFsZSBzdGF0ZSBmb3IgdGhpcyBtYXJrZXRwbGFjZSBzbyB0aGUgVUlcbiAgICAgICAgLy8gdXBkYXRlcyBnbGl0Y2gtZnJlZS4gbWFya1BsdWdpbnNDaGFuZ2VkIG9ubHkgc2V0cyBuZWVkc1JlZnJlc2gg4oCUXG4gICAgICAgIC8vIGl0IGRvZXMgbm90IHJlZnJlc2ggcGx1Z2lucy5lcnJvcnMsIHNvIHRoaXMgaXMgdGhlIGF1dGhvcml0YXRpdmVcbiAgICAgICAgLy8gY2xlYW51cCB1bnRpbCB0aGUgdXNlciBydW5zIC9yZWxvYWQtcGx1Z2lucy5cbiAgICAgICAgc2V0QXBwU3RhdGUocHJldiA9PiAoe1xuICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgICAgLi4ucHJldi5wbHVnaW5zLFxuICAgICAgICAgICAgZXJyb3JzOiBwcmV2LnBsdWdpbnMuZXJyb3JzLmZpbHRlcihcbiAgICAgICAgICAgICAgZSA9PiAhKCdtYXJrZXRwbGFjZScgaW4gZSAmJiBlLm1hcmtldHBsYWNlID09PSBhY3Rpb24ubmFtZSksXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgaW5zdGFsbGF0aW9uU3RhdHVzOiB7XG4gICAgICAgICAgICAgIC4uLnByZXYucGx1Z2lucy5pbnN0YWxsYXRpb25TdGF0dXMsXG4gICAgICAgICAgICAgIG1hcmtldHBsYWNlczogcHJldi5wbHVnaW5zLmluc3RhbGxhdGlvblN0YXR1cy5tYXJrZXRwbGFjZXMuZmlsdGVyKFxuICAgICAgICAgICAgICAgIG0gPT4gbS5uYW1lICE9PSBhY3Rpb24ubmFtZSxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSkpXG4gICAgICAgIHNldEFjdGlvbk1lc3NhZ2UoXG4gICAgICAgICAgYCR7ZmlndXJlcy50aWNrfSBSZW1vdmVkIFwiJHthY3Rpb24ubmFtZX1cIiBmcm9tICR7c2NvcGVzfSBzZXR0aW5nc2AsXG4gICAgICAgIClcbiAgICAgICAgbWFya1BsdWdpbnNDaGFuZ2VkKClcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3JlbW92ZS1pbnN0YWxsZWQtbWFya2V0cGxhY2UnOiB7XG4gICAgICAgIHZvaWQgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgcmVtb3ZlTWFya2V0cGxhY2VTb3VyY2UoYWN0aW9uLm5hbWUpXG4gICAgICAgICAgICBjbGVhckFsbENhY2hlcygpXG4gICAgICAgICAgICBzZXRNYXJrZXRwbGFjZUxvYWRGYWlsdXJlcyhwcmV2ID0+XG4gICAgICAgICAgICAgIHByZXYuZmlsdGVyKGYgPT4gZi5uYW1lICE9PSBhY3Rpb24ubmFtZSksXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlKFxuICAgICAgICAgICAgICBgJHtmaWd1cmVzLnRpY2t9IFJlbW92ZWQgbWFya2V0cGxhY2UgXCIke2FjdGlvbi5uYW1lfVwiYCxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIG1hcmtQbHVnaW5zQ2hhbmdlZCgpXG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlKFxuICAgICAgICAgICAgICBgRmFpbGVkIHRvIHJlbW92ZSBcIiR7YWN0aW9uLm5hbWV9XCI6ICR7ZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFN0cmluZyhlcnIpfWAsXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9KSgpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlICdtYW5hZ2VkLW9ubHknOlxuICAgICAgICAvLyBObyBhY3Rpb24gYXZhaWxhYmxlIOKAlCBndWlkYW5jZSB0ZXh0IGFscmVhZHkgc2hvd25cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ25vbmUnOlxuICAgICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIHVzZUtleWJpbmRpbmdzKFxuICAgIHtcbiAgICAgICdzZWxlY3Q6cHJldmlvdXMnOiAoKSA9PiBzZXRTZWxlY3RlZEluZGV4KHByZXYgPT4gTWF0aC5tYXgoMCwgcHJldiAtIDEpKSxcbiAgICAgICdzZWxlY3Q6bmV4dCc6ICgpID0+XG4gICAgICAgIHNldFNlbGVjdGVkSW5kZXgocHJldiA9PiBNYXRoLm1pbihyb3dzLmxlbmd0aCAtIDEsIHByZXYgKyAxKSksXG4gICAgICAnc2VsZWN0OmFjY2VwdCc6IGhhbmRsZVNlbGVjdCxcbiAgICB9LFxuICAgIHsgY29udGV4dDogJ1NlbGVjdCcsIGlzQWN0aXZlOiByb3dzLmxlbmd0aCA+IDAgfSxcbiAgKVxuXG4gIC8vIENsYW1wIHNlbGVjdGVkSW5kZXggd2hlbiByb3dzIHNocmluayAoZS5nLiBhZnRlciByZW1vdmFsKVxuICBjb25zdCBjbGFtcGVkSW5kZXggPSBNYXRoLm1pbihzZWxlY3RlZEluZGV4LCBNYXRoLm1heCgwLCByb3dzLmxlbmd0aCAtIDEpKVxuICBpZiAoY2xhbXBlZEluZGV4ICE9PSBzZWxlY3RlZEluZGV4KSB7XG4gICAgc2V0U2VsZWN0ZWRJbmRleChjbGFtcGVkSW5kZXgpXG4gIH1cblxuICBjb25zdCBzZWxlY3RlZEFjdGlvbiA9IHJvd3NbY2xhbXBlZEluZGV4XT8uYWN0aW9uXG4gIGNvbnN0IGhhc0FjdGlvbiA9XG4gICAgc2VsZWN0ZWRBY3Rpb24gJiZcbiAgICBzZWxlY3RlZEFjdGlvbi5raW5kICE9PSAnbm9uZScgJiZcbiAgICBzZWxlY3RlZEFjdGlvbi5raW5kICE9PSAnbWFuYWdlZC1vbmx5J1xuXG4gIGlmIChyb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgPEJveCBtYXJnaW5MZWZ0PXsxfT5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5ObyBwbHVnaW4gZXJyb3JzPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yIGl0YWxpYz5cbiAgICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgICAgYWN0aW9uPVwiY29uZmlybTpub1wiXG4gICAgICAgICAgICAgIGNvbnRleHQ9XCJDb25maXJtYXRpb25cIlxuICAgICAgICAgICAgICBmYWxsYmFjaz1cIkVzY1wiXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiYmFja1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAge3Jvd3MubWFwKChyb3csIGlkeCkgPT4ge1xuICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gaWR4ID09PSBjbGFtcGVkSW5kZXhcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Qm94IGtleT17aWR4fSBtYXJnaW5MZWZ0PXsxfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbWFyZ2luQm90dG9tPXsxfT5cbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8VGV4dCBjb2xvcj17aXNTZWxlY3RlZCA/ICdzdWdnZXN0aW9uJyA6ICdlcnJvcid9PlxuICAgICAgICAgICAgICAgIHtpc1NlbGVjdGVkID8gZmlndXJlcy5wb2ludGVyIDogZmlndXJlcy5jcm9zc317JyAnfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0IGJvbGQ9e2lzU2VsZWN0ZWR9Pntyb3cubGFiZWx9PC9UZXh0PlxuICAgICAgICAgICAgICB7cm93LnNjb3BlICYmIDxUZXh0IGRpbUNvbG9yPiAoe3Jvdy5zY29wZX0pPC9UZXh0Pn1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxCb3ggbWFyZ2luTGVmdD17M30+XG4gICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZXJyb3JcIj57cm93Lm1lc3NhZ2V9PC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICB7cm93Lmd1aWRhbmNlICYmIChcbiAgICAgICAgICAgICAgPEJveCBtYXJnaW5MZWZ0PXszfT5cbiAgICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvciBpdGFsaWM+XG4gICAgICAgICAgICAgICAgICB7cm93Lmd1aWRhbmNlfVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApXG4gICAgICB9KX1cblxuICAgICAge2FjdGlvbk1lc3NhZ2UgJiYgKFxuICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0gbWFyZ2luTGVmdD17MX0+XG4gICAgICAgICAgPFRleHQgY29sb3I9XCJjbGF1ZGVcIj57YWN0aW9uTWVzc2FnZX08L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cblxuICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICA8VGV4dCBkaW1Db2xvciBpdGFsaWM+XG4gICAgICAgICAgPEJ5bGluZT5cbiAgICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgICAgYWN0aW9uPVwic2VsZWN0OnByZXZpb3VzXCJcbiAgICAgICAgICAgICAgY29udGV4dD1cIlNlbGVjdFwiXG4gICAgICAgICAgICAgIGZhbGxiYWNrPVwi4oaRXCJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJuYXZpZ2F0ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2hhc0FjdGlvbiAmJiAoXG4gICAgICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgICAgICBhY3Rpb249XCJzZWxlY3Q6YWNjZXB0XCJcbiAgICAgICAgICAgICAgICBjb250ZXh0PVwiU2VsZWN0XCJcbiAgICAgICAgICAgICAgICBmYWxsYmFjaz1cIkVudGVyXCJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cInJlc29sdmVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgICAgYWN0aW9uPVwiY29uZmlybTpub1wiXG4gICAgICAgICAgICAgIGNvbnRleHQ9XCJDb25maXJtYXRpb25cIlxuICAgICAgICAgICAgICBmYWxsYmFjaz1cIkVzY1wiXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiYmFja1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQnlsaW5lPlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5mdW5jdGlvbiBnZXRJbml0aWFsVmlld1N0YXRlKHBhcnNlZENvbW1hbmQ6IFBhcnNlZENvbW1hbmQpOiBWaWV3U3RhdGUge1xuICBzd2l0Y2ggKHBhcnNlZENvbW1hbmQudHlwZSkge1xuICAgIGNhc2UgJ2hlbHAnOlxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2hlbHAnIH1cbiAgICBjYXNlICd2YWxpZGF0ZSc6XG4gICAgICByZXR1cm4geyB0eXBlOiAndmFsaWRhdGUnLCBwYXRoOiBwYXJzZWRDb21tYW5kLnBhdGggfVxuICAgIGNhc2UgJ2luc3RhbGwnOlxuICAgICAgaWYgKHBhcnNlZENvbW1hbmQubWFya2V0cGxhY2UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiAnYnJvd3NlLW1hcmtldHBsYWNlJyxcbiAgICAgICAgICB0YXJnZXRNYXJrZXRwbGFjZTogcGFyc2VkQ29tbWFuZC5tYXJrZXRwbGFjZSxcbiAgICAgICAgICB0YXJnZXRQbHVnaW46IHBhcnNlZENvbW1hbmQucGx1Z2luLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocGFyc2VkQ29tbWFuZC5wbHVnaW4pIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiAnZGlzY292ZXItcGx1Z2lucycsXG4gICAgICAgICAgdGFyZ2V0UGx1Z2luOiBwYXJzZWRDb21tYW5kLnBsdWdpbixcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2Rpc2NvdmVyLXBsdWdpbnMnIH1cbiAgICBjYXNlICdtYW5hZ2UnOlxuICAgICAgcmV0dXJuIHsgdHlwZTogJ21hbmFnZS1wbHVnaW5zJyB9XG4gICAgY2FzZSAndW5pbnN0YWxsJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdtYW5hZ2UtcGx1Z2lucycsXG4gICAgICAgIHRhcmdldFBsdWdpbjogcGFyc2VkQ29tbWFuZC5wbHVnaW4sXG4gICAgICAgIGFjdGlvbjogJ3VuaW5zdGFsbCcsXG4gICAgICB9XG4gICAgY2FzZSAnZW5hYmxlJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdtYW5hZ2UtcGx1Z2lucycsXG4gICAgICAgIHRhcmdldFBsdWdpbjogcGFyc2VkQ29tbWFuZC5wbHVnaW4sXG4gICAgICAgIGFjdGlvbjogJ2VuYWJsZScsXG4gICAgICB9XG4gICAgY2FzZSAnZGlzYWJsZSc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnbWFuYWdlLXBsdWdpbnMnLFxuICAgICAgICB0YXJnZXRQbHVnaW46IHBhcnNlZENvbW1hbmQucGx1Z2luLFxuICAgICAgICBhY3Rpb246ICdkaXNhYmxlJyxcbiAgICAgIH1cbiAgICBjYXNlICdtYXJrZXRwbGFjZSc6XG4gICAgICBpZiAocGFyc2VkQ29tbWFuZC5hY3Rpb24gPT09ICdsaXN0Jykge1xuICAgICAgICByZXR1cm4geyB0eXBlOiAnbWFya2V0cGxhY2UtbGlzdCcgfVxuICAgICAgfVxuICAgICAgaWYgKHBhcnNlZENvbW1hbmQuYWN0aW9uID09PSAnYWRkJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR5cGU6ICdhZGQtbWFya2V0cGxhY2UnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogcGFyc2VkQ29tbWFuZC50YXJnZXQsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwYXJzZWRDb21tYW5kLmFjdGlvbiA9PT0gJ3JlbW92ZScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiAnbWFuYWdlLW1hcmtldHBsYWNlcycsXG4gICAgICAgICAgdGFyZ2V0TWFya2V0cGxhY2U6IHBhcnNlZENvbW1hbmQudGFyZ2V0LFxuICAgICAgICAgIGFjdGlvbjogJ3JlbW92ZScsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwYXJzZWRDb21tYW5kLmFjdGlvbiA9PT0gJ3VwZGF0ZScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiAnbWFuYWdlLW1hcmtldHBsYWNlcycsXG4gICAgICAgICAgdGFyZ2V0TWFya2V0cGxhY2U6IHBhcnNlZENvbW1hbmQudGFyZ2V0LFxuICAgICAgICAgIGFjdGlvbjogJ3VwZGF0ZScsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7IHR5cGU6ICdtYXJrZXRwbGFjZS1tZW51JyB9XG4gICAgY2FzZSAnbWVudSc6XG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIERlZmF1bHQgdG8gZGlzY292ZXIgdmlldyBzaG93aW5nIGFsbCBwbHVnaW5zXG4gICAgICByZXR1cm4geyB0eXBlOiAnZGlzY292ZXItcGx1Z2lucycgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEluaXRpYWxUYWIodmlld1N0YXRlOiBWaWV3U3RhdGUpOiBUYWJJZCB7XG4gIGlmICh2aWV3U3RhdGUudHlwZSA9PT0gJ21hbmFnZS1wbHVnaW5zJykgcmV0dXJuICdpbnN0YWxsZWQnXG4gIGlmICh2aWV3U3RhdGUudHlwZSA9PT0gJ21hbmFnZS1tYXJrZXRwbGFjZXMnKSByZXR1cm4gJ21hcmtldHBsYWNlcydcbiAgcmV0dXJuICdkaXNjb3Zlcidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBsdWdpblNldHRpbmdzKHtcbiAgb25Db21wbGV0ZSxcbiAgYXJncyxcbiAgc2hvd01jcFJlZGlyZWN0TWVzc2FnZSxcbn06IFBsdWdpblNldHRpbmdzUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBwYXJzZWRDb21tYW5kID0gcGFyc2VQbHVnaW5BcmdzKGFyZ3MpXG4gIGNvbnN0IGluaXRpYWxWaWV3U3RhdGUgPSBnZXRJbml0aWFsVmlld1N0YXRlKHBhcnNlZENvbW1hbmQpXG4gIGNvbnN0IFt2aWV3U3RhdGUsIHNldFZpZXdTdGF0ZV0gPSB1c2VTdGF0ZTxWaWV3U3RhdGU+KGluaXRpYWxWaWV3U3RhdGUpXG4gIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZTxUYWJJZD4oXG4gICAgZ2V0SW5pdGlhbFRhYihpbml0aWFsVmlld1N0YXRlKSxcbiAgKVxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZShcbiAgICB2aWV3U3RhdGUudHlwZSA9PT0gJ2FkZC1tYXJrZXRwbGFjZScgPyB2aWV3U3RhdGUuaW5pdGlhbFZhbHVlIHx8ICcnIDogJycsXG4gIClcbiAgY29uc3QgW2N1cnNvck9mZnNldCwgc2V0Q3Vyc29yT2Zmc2V0XSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtjaGlsZFNlYXJjaEFjdGl2ZSwgc2V0Q2hpbGRTZWFyY2hBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHNldEFwcFN0YXRlID0gdXNlU2V0QXBwU3RhdGUoKVxuXG4gIC8vIEVycm9yIGNvdW50IGZvciB0aGUgRXJyb3JzIHRhYiBiYWRnZSDigJQgY291bnRzIGxvYWRlciBlcnJvcnMgKyBiYWNrZ3JvdW5kXG4gIC8vIG1hcmtldHBsYWNlIGluc3RhbGwgZmFpbHVyZXMuIERvZXMgTk9UIGNvdW50IG1hcmtldHBsYWNlLW9uLWRpc2sgbG9hZFxuICAvLyBmYWlsdXJlcyAodGhvc2UgcmVxdWlyZSBJL08gYW5kIGFyZSBkaXNjb3ZlcmVkIGxhemlseSB3aGVuIHRoZSB0YWIgb3BlbnMpLlxuICAvLyBNYXkgc2xpZ2h0bHkgb3ZlcmNvdW50IHZzLiBkaXNwbGF5ZWQgcm93cyB3aGVuIGEgbWFya2V0cGxhY2UgaGFzIGJvdGggYVxuICAvLyBsb2FkZXIgZXJyb3IgYW5kIGEgZmFpbGVkIGluc3RhbGwgc3RhdHVzIChidWlsZEVycm9yUm93cyBkZWR1cGxpY2F0ZXMpLlxuICBjb25zdCBwbHVnaW5FcnJvckNvdW50ID0gdXNlQXBwU3RhdGUocyA9PiB7XG4gICAgbGV0IGNvdW50ID0gcy5wbHVnaW5zLmVycm9ycy5sZW5ndGhcbiAgICBmb3IgKGNvbnN0IG0gb2Ygcy5wbHVnaW5zLmluc3RhbGxhdGlvblN0YXR1cy5tYXJrZXRwbGFjZXMpIHtcbiAgICAgIGlmIChtLnN0YXR1cyA9PT0gJ2ZhaWxlZCcpIGNvdW50KytcbiAgICB9XG4gICAgcmV0dXJuIGNvdW50XG4gIH0pXG4gIGNvbnN0IGVycm9yc1RhYlRpdGxlID1cbiAgICBwbHVnaW5FcnJvckNvdW50ID4gMCA/IGBFcnJvcnMgKCR7cGx1Z2luRXJyb3JDb3VudH0pYCA6ICdFcnJvcnMnXG5cbiAgY29uc3QgZXhpdFN0YXRlID0gdXNlRXhpdE9uQ3RybENEV2l0aEtleWJpbmRpbmdzKClcblxuICAvKipcbiAgICogQ0xJIG1vZGUgaXMgYWN0aXZlIHdoZW4gdGhlIHVzZXIgcHJvdmlkZXMgYSBjb21wbGV0ZSBjb21tYW5kIHdpdGggYWxsIHJlcXVpcmVkIGFyZ3VtZW50cy5cbiAgICogSW4gdGhpcyBtb2RlLCB0aGUgb3BlcmF0aW9uIGV4ZWN1dGVzIGltbWVkaWF0ZWx5IHdpdGhvdXQgaW50ZXJhY3RpdmUgcHJvbXB0cy5cbiAgICogSW50ZXJhY3RpdmUgbW9kZSBpcyB1c2VkIHdoZW4gYXJndW1lbnRzIGFyZSBtaXNzaW5nLCBhbGxvd2luZyB0aGUgdXNlciB0byBpbnB1dCB0aGVtLlxuICAgKi9cbiAgY29uc3QgY2xpTW9kZSA9XG4gICAgcGFyc2VkQ29tbWFuZC50eXBlID09PSAnbWFya2V0cGxhY2UnICYmXG4gICAgcGFyc2VkQ29tbWFuZC5hY3Rpb24gPT09ICdhZGQnICYmXG4gICAgcGFyc2VkQ29tbWFuZC50YXJnZXQgIT09IHVuZGVmaW5lZFxuXG4gIC8vIFNpZ25hbCB0aGF0IHBsdWdpbiBzdGF0ZSBoYXMgY2hhbmdlZCBvbiBkaXNrIChMYXllciAyKSBhbmQgYWN0aXZlXG4gIC8vIGNvbXBvbmVudHMgKExheWVyIDMpIGFyZSBzdGFsZS4gVXNlciBydW5zIC9yZWxvYWQtcGx1Z2lucyB0byBhcHBseS5cbiAgLy8gUHJldmlvdXNseSB0aGlzIHdhcyB1cGRhdGVQbHVnaW5TdGF0ZSgpIHdoaWNoIGRpZCBhIHBhcnRpYWwgcmVmcmVzaFxuICAvLyAoY29tbWFuZHMgb25seSDigJQgYWdlbnRzL2hvb2tzL01DUCB3ZXJlIHNpbGVudGx5IHNraXBwZWQpLiBOb3cgYWxsXG4gIC8vIExheWVyLTMgcmVmcmVzaCBmbG93cyB0aHJvdWdoIHRoZSB1bmlmaWVkIHJlZnJlc2hBY3RpdmVQbHVnaW5zKClcbiAgLy8gcHJpbWl0aXZlIHZpYSAvcmVsb2FkLXBsdWdpbnMsIGdpdmluZyBvbmUgY29uc2lzdGVudCBtZW50YWwgbW9kZWw6XG4gIC8vIHBsdWdpbiBjaGFuZ2VzIHJlcXVpcmUgL3JlbG9hZC1wbHVnaW5zLlxuICBjb25zdCBtYXJrUGx1Z2luc0NoYW5nZWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0QXBwU3RhdGUocHJldiA9PlxuICAgICAgcHJldi5wbHVnaW5zLm5lZWRzUmVmcmVzaFxuICAgICAgICA/IHByZXZcbiAgICAgICAgOiB7IC4uLnByZXYsIHBsdWdpbnM6IHsgLi4ucHJldi5wbHVnaW5zLCBuZWVkc1JlZnJlc2g6IHRydWUgfSB9LFxuICAgIClcbiAgfSwgW3NldEFwcFN0YXRlXSlcblxuICAvLyBIYW5kbGUgdGFiIHN3aXRjaGluZyAoY2FsbGVkIGJ5IFRhYnMgY29tcG9uZW50KVxuICBjb25zdCBoYW5kbGVUYWJDaGFuZ2UgPSB1c2VDYWxsYmFjaygodGFiSWQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHRhYiA9IHRhYklkIGFzIFRhYklkXG4gICAgc2V0QWN0aXZlVGFiKHRhYilcbiAgICBzZXRFcnJvcihudWxsKVxuICAgIHN3aXRjaCAodGFiKSB7XG4gICAgICBjYXNlICdkaXNjb3Zlcic6XG4gICAgICAgIHNldFZpZXdTdGF0ZSh7IHR5cGU6ICdkaXNjb3Zlci1wbHVnaW5zJyB9KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnaW5zdGFsbGVkJzpcbiAgICAgICAgc2V0Vmlld1N0YXRlKHsgdHlwZTogJ21hbmFnZS1wbHVnaW5zJyB9KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbWFya2V0cGxhY2VzJzpcbiAgICAgICAgc2V0Vmlld1N0YXRlKHsgdHlwZTogJ21hbmFnZS1tYXJrZXRwbGFjZXMnIH0pXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdlcnJvcnMnOlxuICAgICAgICAvLyBObyB2aWV3U3RhdGUgY2hhbmdlIG5lZWRlZCDigJQgRXJyb3JzVGFiQ29udGVudCByZW5kZXJzIGluc2lkZSA8VGFiIGlkPVwiZXJyb3JzXCI+XG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9LCBbXSlcblxuICAvLyBIYW5kbGUgZXhpdGluZyB3aGVuIGNoaWxkIGNvbXBvbmVudHMgc2V0IHZpZXdTdGF0ZSB0byAnbWVudScuXG4gIC8vIENoaWxkIGNvbXBvbmVudHMgdHlwaWNhbGx5IHNldCBCT1RIIHNldFJlc3VsdChtc2cpIGFuZCBzZXRQYXJlbnRWaWV3U3RhdGVcbiAgLy8gKHt0eXBlOidtZW51J30pIOKAlCBib3RoIGVmZmVjdHMgZmlyZSBvbiB0aGUgc2FtZSByZW5kZXIuIE9ubHkgY2xvc2UgdmlhIHRoaXNcbiAgLy8gcGF0aCB3aGVuIHRoZXJlJ3Mgbm8gcmVzdWx0LCBvdGhlcndpc2UgdGhlIHJlc3VsdCBlZmZlY3QgKGJlbG93KSBoYW5kbGVzXG4gIC8vIHRoZSBjbG9zZSBBTkQgZGVsaXZlcnMgdGhlIG1lc3NhZ2UgdG8gdGhlIHRyYW5zY3JpcHQuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZpZXdTdGF0ZS50eXBlID09PSAnbWVudScgJiYgIXJlc3VsdCkge1xuICAgICAgb25Db21wbGV0ZSgpXG4gICAgfVxuICB9LCBbdmlld1N0YXRlLnR5cGUsIHJlc3VsdCwgb25Db21wbGV0ZV0pXG5cbiAgLy8gU3luYyBhY3RpdmVUYWIgd2hlbiB2aWV3U3RhdGUgY2hhbmdlcyB0byBhIGRpZmZlcmVudCB0YWIncyBjb250ZW50XG4gIC8vIFRoaXMgaGFuZGxlcyBjYXNlcyBsaWtlIEFkZE1hcmtldHBsYWNlIG5hdmlnYXRpbmcgdG8gYnJvd3NlLW1hcmtldHBsYWNlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZpZXdTdGF0ZS50eXBlID09PSAnYnJvd3NlLW1hcmtldHBsYWNlJyAmJiBhY3RpdmVUYWIgIT09ICdkaXNjb3ZlcicpIHtcbiAgICAgIHNldEFjdGl2ZVRhYignZGlzY292ZXInKVxuICAgIH1cbiAgfSwgW3ZpZXdTdGF0ZS50eXBlLCBhY3RpdmVUYWJdKVxuXG4gIC8vIEhhbmRsZSBlc2NhcGUga2V5IGZvciBhZGQtbWFya2V0cGxhY2UgbW9kZSBvbmx5XG4gIC8vIE90aGVyIHRhYmJlZCB2aWV3cyBoYW5kbGUgZXNjYXBlIGluIHRoZWlyIG93biBjb21wb25lbnRzXG4gIGNvbnN0IGhhbmRsZUFkZE1hcmtldHBsYWNlRXNjYXBlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldEFjdGl2ZVRhYignbWFya2V0cGxhY2VzJylcbiAgICBzZXRWaWV3U3RhdGUoeyB0eXBlOiAnbWFuYWdlLW1hcmtldHBsYWNlcycgfSlcbiAgICBzZXRJbnB1dFZhbHVlKCcnKVxuICAgIHNldEVycm9yKG51bGwpXG4gIH0sIFtdKVxuXG4gIHVzZUtleWJpbmRpbmcoJ2NvbmZpcm06bm8nLCBoYW5kbGVBZGRNYXJrZXRwbGFjZUVzY2FwZSwge1xuICAgIGNvbnRleHQ6ICdTZXR0aW5ncycsXG4gICAgaXNBY3RpdmU6IHZpZXdTdGF0ZS50eXBlID09PSAnYWRkLW1hcmtldHBsYWNlJyxcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIG9uQ29tcGxldGUocmVzdWx0KVxuICAgIH1cbiAgfSwgW3Jlc3VsdCwgb25Db21wbGV0ZV0pXG5cbiAgLy8gSGFuZGxlIGhlbHAgdmlldyBjb21wbGV0aW9uXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZpZXdTdGF0ZS50eXBlID09PSAnaGVscCcpIHtcbiAgICAgIG9uQ29tcGxldGUoKVxuICAgIH1cbiAgfSwgW3ZpZXdTdGF0ZS50eXBlLCBvbkNvbXBsZXRlXSlcblxuICAvLyBSZW5kZXIgZGlmZmVyZW50IHZpZXdzIGJhc2VkIG9uIHN0YXRlXG4gIGlmICh2aWV3U3RhdGUudHlwZSA9PT0gJ2hlbHAnKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICA8VGV4dCBib2xkPlBsdWdpbiBDb21tYW5kIFVzYWdlOjwvVGV4dD5cbiAgICAgICAgPFRleHQ+IDwvVGV4dD5cbiAgICAgICAgPFRleHQgZGltQ29sb3I+SW5zdGFsbGF0aW9uOjwvVGV4dD5cbiAgICAgICAgPFRleHQ+IC9wbHVnaW4gaW5zdGFsbCAtIEJyb3dzZSBhbmQgaW5zdGFsbCBwbHVnaW5zPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICB7JyAnfVxuICAgICAgICAgIC9wbHVnaW4gaW5zdGFsbCAmbHQ7bWFya2V0cGxhY2UmZ3Q7IC0gSW5zdGFsbCBmcm9tIHNwZWNpZmljXG4gICAgICAgICAgbWFya2V0cGxhY2VcbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD4gL3BsdWdpbiBpbnN0YWxsICZsdDtwbHVnaW4mZ3Q7IC0gSW5zdGFsbCBzcGVjaWZpYyBwbHVnaW48L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgL3BsdWdpbiBpbnN0YWxsICZsdDtwbHVnaW4mZ3Q7QCZsdDttYXJrZXQmZ3Q7IC0gSW5zdGFsbCBwbHVnaW4gZnJvbVxuICAgICAgICAgIG1hcmtldHBsYWNlXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+IDwvVGV4dD5cbiAgICAgICAgPFRleHQgZGltQ29sb3I+TWFuYWdlbWVudDo8L1RleHQ+XG4gICAgICAgIDxUZXh0PiAvcGx1Z2luIG1hbmFnZSAtIE1hbmFnZSBpbnN0YWxsZWQgcGx1Z2luczwvVGV4dD5cbiAgICAgICAgPFRleHQ+IC9wbHVnaW4gZW5hYmxlICZsdDtwbHVnaW4mZ3Q7IC0gRW5hYmxlIGEgcGx1Z2luPC9UZXh0PlxuICAgICAgICA8VGV4dD4gL3BsdWdpbiBkaXNhYmxlICZsdDtwbHVnaW4mZ3Q7IC0gRGlzYWJsZSBhIHBsdWdpbjwvVGV4dD5cbiAgICAgICAgPFRleHQ+IC9wbHVnaW4gdW5pbnN0YWxsICZsdDtwbHVnaW4mZ3Q7IC0gVW5pbnN0YWxsIGEgcGx1Z2luPC9UZXh0PlxuICAgICAgICA8VGV4dD4gPC9UZXh0PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5NYXJrZXRwbGFjZXM6PC9UZXh0PlxuICAgICAgICA8VGV4dD4gL3BsdWdpbiBtYXJrZXRwbGFjZSAtIE1hcmtldHBsYWNlIG1hbmFnZW1lbnQgbWVudTwvVGV4dD5cbiAgICAgICAgPFRleHQ+IC9wbHVnaW4gbWFya2V0cGxhY2UgYWRkIC0gQWRkIGEgbWFya2V0cGxhY2U8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgL3BsdWdpbiBtYXJrZXRwbGFjZSBhZGQgJmx0O3BhdGgvdXJsJmd0OyAtIEFkZCBtYXJrZXRwbGFjZSBkaXJlY3RseVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PiAvcGx1Z2luIG1hcmtldHBsYWNlIHVwZGF0ZSAtIFVwZGF0ZSBtYXJrZXRwbGFjZXM8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgL3BsdWdpbiBtYXJrZXRwbGFjZSB1cGRhdGUgJmx0O25hbWUmZ3Q7IC0gVXBkYXRlIHNwZWNpZmljIG1hcmtldHBsYWNlXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+IC9wbHVnaW4gbWFya2V0cGxhY2UgcmVtb3ZlIC0gUmVtb3ZlIGEgbWFya2V0cGxhY2U8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgL3BsdWdpbiBtYXJrZXRwbGFjZSByZW1vdmUgJmx0O25hbWUmZ3Q7IC0gUmVtb3ZlIHNwZWNpZmljIG1hcmtldHBsYWNlXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+IC9wbHVnaW4gbWFya2V0cGxhY2UgbGlzdCAtIExpc3QgYWxsIG1hcmtldHBsYWNlczwvVGV4dD5cbiAgICAgICAgPFRleHQ+IDwvVGV4dD5cbiAgICAgICAgPFRleHQgZGltQ29sb3I+VmFsaWRhdGlvbjo8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgL3BsdWdpbiB2YWxpZGF0ZSAmbHQ7cGF0aCZndDsgLSBWYWxpZGF0ZSBhIG1hbmlmZXN0IGZpbGUgb3IgZGlyZWN0b3J5XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+IDwvVGV4dD5cbiAgICAgICAgPFRleHQgZGltQ29sb3I+T3RoZXI6PC9UZXh0PlxuICAgICAgICA8VGV4dD4gL3BsdWdpbiAtIE1haW4gcGx1Z2luIG1lbnU8L1RleHQ+XG4gICAgICAgIDxUZXh0PiAvcGx1Z2luIGhlbHAgLSBTaG93IHRoaXMgaGVscDwvVGV4dD5cbiAgICAgICAgPFRleHQ+IC9wbHVnaW5zIC0gQWxpYXMgZm9yIC9wbHVnaW48L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICBpZiAodmlld1N0YXRlLnR5cGUgPT09ICd2YWxpZGF0ZScpIHtcbiAgICByZXR1cm4gPFZhbGlkYXRlUGx1Z2luIG9uQ29tcGxldGU9e29uQ29tcGxldGV9IHBhdGg9e3ZpZXdTdGF0ZS5wYXRofSAvPlxuICB9XG5cbiAgaWYgKHZpZXdTdGF0ZS50eXBlID09PSAnbWFya2V0cGxhY2UtbWVudScpIHtcbiAgICAvLyBTaG93IGEgc2ltcGxlIG1lbnUgZm9yIG1hcmtldHBsYWNlIG9wZXJhdGlvbnNcbiAgICBzZXRWaWV3U3RhdGUoeyB0eXBlOiAnbWVudScgfSlcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgaWYgKHZpZXdTdGF0ZS50eXBlID09PSAnbWFya2V0cGxhY2UtbGlzdCcpIHtcbiAgICByZXR1cm4gPE1hcmtldHBsYWNlTGlzdCBvbkNvbXBsZXRlPXtvbkNvbXBsZXRlfSAvPlxuICB9XG5cbiAgaWYgKHZpZXdTdGF0ZS50eXBlID09PSAnYWRkLW1hcmtldHBsYWNlJykge1xuICAgIHJldHVybiAoXG4gICAgICA8QWRkTWFya2V0cGxhY2VcbiAgICAgICAgaW5wdXRWYWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgc2V0SW5wdXRWYWx1ZT17c2V0SW5wdXRWYWx1ZX1cbiAgICAgICAgY3Vyc29yT2Zmc2V0PXtjdXJzb3JPZmZzZXR9XG4gICAgICAgIHNldEN1cnNvck9mZnNldD17c2V0Q3Vyc29yT2Zmc2V0fVxuICAgICAgICBlcnJvcj17ZXJyb3J9XG4gICAgICAgIHNldEVycm9yPXtzZXRFcnJvcn1cbiAgICAgICAgcmVzdWx0PXtyZXN1bHR9XG4gICAgICAgIHNldFJlc3VsdD17c2V0UmVzdWx0fVxuICAgICAgICBzZXRWaWV3U3RhdGU9e3NldFZpZXdTdGF0ZX1cbiAgICAgICAgb25BZGRDb21wbGV0ZT17bWFya1BsdWdpbnNDaGFuZ2VkfVxuICAgICAgICBjbGlNb2RlPXtjbGlNb2RlfVxuICAgICAgLz5cbiAgICApXG4gIH1cbiAgLy8gUmVuZGVyIHRhYmJlZCBpbnRlcmZhY2UgdXNpbmcgdGhlIGRlc2lnbiBzeXN0ZW0gVGFicyBjb21wb25lbnRcbiAgcmV0dXJuIChcbiAgICA8UGFuZSBjb2xvcj1cInN1Z2dlc3Rpb25cIj5cbiAgICAgIDxUYWJzXG4gICAgICAgIHRpdGxlPVwiUGx1Z2luc1wiXG4gICAgICAgIHNlbGVjdGVkVGFiPXthY3RpdmVUYWJ9XG4gICAgICAgIG9uVGFiQ2hhbmdlPXtoYW5kbGVUYWJDaGFuZ2V9XG4gICAgICAgIGNvbG9yPVwic3VnZ2VzdGlvblwiXG4gICAgICAgIGRpc2FibGVOYXZpZ2F0aW9uPXtjaGlsZFNlYXJjaEFjdGl2ZX1cbiAgICAgICAgYmFubmVyPXtcbiAgICAgICAgICBzaG93TWNwUmVkaXJlY3RNZXNzYWdlICYmIGFjdGl2ZVRhYiA9PT0gJ2luc3RhbGxlZCcgPyAoXG4gICAgICAgICAgICA8TWNwUmVkaXJlY3RCYW5uZXIgLz5cbiAgICAgICAgICApIDogdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgPFRhYiBpZD1cImRpc2NvdmVyXCIgdGl0bGU9XCJEaXNjb3ZlclwiPlxuICAgICAgICAgIHt2aWV3U3RhdGUudHlwZSA9PT0gJ2Jyb3dzZS1tYXJrZXRwbGFjZScgPyAoXG4gICAgICAgICAgICA8QnJvd3NlTWFya2V0cGxhY2VcbiAgICAgICAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICAgICAgICBzZXRFcnJvcj17c2V0RXJyb3J9XG4gICAgICAgICAgICAgIHJlc3VsdD17cmVzdWx0fVxuICAgICAgICAgICAgICBzZXRSZXN1bHQ9e3NldFJlc3VsdH1cbiAgICAgICAgICAgICAgc2V0Vmlld1N0YXRlPXtzZXRWaWV3U3RhdGV9XG4gICAgICAgICAgICAgIG9uSW5zdGFsbENvbXBsZXRlPXttYXJrUGx1Z2luc0NoYW5nZWR9XG4gICAgICAgICAgICAgIHRhcmdldE1hcmtldHBsYWNlPXt2aWV3U3RhdGUudGFyZ2V0TWFya2V0cGxhY2V9XG4gICAgICAgICAgICAgIHRhcmdldFBsdWdpbj17dmlld1N0YXRlLnRhcmdldFBsdWdpbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxEaXNjb3ZlclBsdWdpbnNcbiAgICAgICAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICAgICAgICBzZXRFcnJvcj17c2V0RXJyb3J9XG4gICAgICAgICAgICAgIHJlc3VsdD17cmVzdWx0fVxuICAgICAgICAgICAgICBzZXRSZXN1bHQ9e3NldFJlc3VsdH1cbiAgICAgICAgICAgICAgc2V0Vmlld1N0YXRlPXtzZXRWaWV3U3RhdGV9XG4gICAgICAgICAgICAgIG9uSW5zdGFsbENvbXBsZXRlPXttYXJrUGx1Z2luc0NoYW5nZWR9XG4gICAgICAgICAgICAgIG9uU2VhcmNoTW9kZUNoYW5nZT17c2V0Q2hpbGRTZWFyY2hBY3RpdmV9XG4gICAgICAgICAgICAgIHRhcmdldFBsdWdpbj17XG4gICAgICAgICAgICAgICAgdmlld1N0YXRlLnR5cGUgPT09ICdkaXNjb3Zlci1wbHVnaW5zJ1xuICAgICAgICAgICAgICAgICAgPyB2aWV3U3RhdGUudGFyZ2V0UGx1Z2luXG4gICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvVGFiPlxuICAgICAgICA8VGFiIGlkPVwiaW5zdGFsbGVkXCIgdGl0bGU9XCJJbnN0YWxsZWRcIj5cbiAgICAgICAgICA8TWFuYWdlUGx1Z2luc1xuICAgICAgICAgICAgc2V0Vmlld1N0YXRlPXtzZXRWaWV3U3RhdGV9XG4gICAgICAgICAgICBzZXRSZXN1bHQ9e3NldFJlc3VsdH1cbiAgICAgICAgICAgIG9uTWFuYWdlQ29tcGxldGU9e21hcmtQbHVnaW5zQ2hhbmdlZH1cbiAgICAgICAgICAgIG9uU2VhcmNoTW9kZUNoYW5nZT17c2V0Q2hpbGRTZWFyY2hBY3RpdmV9XG4gICAgICAgICAgICB0YXJnZXRQbHVnaW49e1xuICAgICAgICAgICAgICB2aWV3U3RhdGUudHlwZSA9PT0gJ21hbmFnZS1wbHVnaW5zJ1xuICAgICAgICAgICAgICAgID8gdmlld1N0YXRlLnRhcmdldFBsdWdpblxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXRNYXJrZXRwbGFjZT17XG4gICAgICAgICAgICAgIHZpZXdTdGF0ZS50eXBlID09PSAnbWFuYWdlLXBsdWdpbnMnXG4gICAgICAgICAgICAgICAgPyB2aWV3U3RhdGUudGFyZ2V0TWFya2V0cGxhY2VcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWN0aW9uPXtcbiAgICAgICAgICAgICAgdmlld1N0YXRlLnR5cGUgPT09ICdtYW5hZ2UtcGx1Z2lucycgPyB2aWV3U3RhdGUuYWN0aW9uIDogdW5kZWZpbmVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9UYWI+XG4gICAgICAgIDxUYWIgaWQ9XCJtYXJrZXRwbGFjZXNcIiB0aXRsZT1cIk1hcmtldHBsYWNlc1wiPlxuICAgICAgICAgIDxNYW5hZ2VNYXJrZXRwbGFjZXNcbiAgICAgICAgICAgIHNldFZpZXdTdGF0ZT17c2V0Vmlld1N0YXRlfVxuICAgICAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICAgICAgc2V0RXJyb3I9e3NldEVycm9yfVxuICAgICAgICAgICAgc2V0UmVzdWx0PXtzZXRSZXN1bHR9XG4gICAgICAgICAgICBleGl0U3RhdGU9e2V4aXRTdGF0ZX1cbiAgICAgICAgICAgIG9uTWFuYWdlQ29tcGxldGU9e21hcmtQbHVnaW5zQ2hhbmdlZH1cbiAgICAgICAgICAgIHRhcmdldE1hcmtldHBsYWNlPXtcbiAgICAgICAgICAgICAgdmlld1N0YXRlLnR5cGUgPT09ICdtYW5hZ2UtbWFya2V0cGxhY2VzJ1xuICAgICAgICAgICAgICAgID8gdmlld1N0YXRlLnRhcmdldE1hcmtldHBsYWNlXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjdGlvbj17XG4gICAgICAgICAgICAgIHZpZXdTdGF0ZS50eXBlID09PSAnbWFuYWdlLW1hcmtldHBsYWNlcydcbiAgICAgICAgICAgICAgICA/IHZpZXdTdGF0ZS5hY3Rpb25cbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvVGFiPlxuICAgICAgICA8VGFiIGlkPVwiZXJyb3JzXCIgdGl0bGU9e2Vycm9yc1RhYlRpdGxlfT5cbiAgICAgICAgICA8RXJyb3JzVGFiQ29udGVudFxuICAgICAgICAgICAgc2V0Vmlld1N0YXRlPXtzZXRWaWV3U3RhdGV9XG4gICAgICAgICAgICBzZXRBY3RpdmVUYWI9e3NldEFjdGl2ZVRhYn1cbiAgICAgICAgICAgIG1hcmtQbHVnaW5zQ2hhbmdlZD17bWFya1BsdWdpbnNDaGFuZ2VkfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvVGFiPlxuICAgICAgPC9UYWJzPlxuICAgIDwvUGFuZT5cbiAgKVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQ08sU0FBU0EsZUFBZTtFQUM3QkM7RUFDQUM7RUFDQUM7RUFDQUM7RUFDQUM7RUFDQUM7RUFDQUM7RUFDQUM7RUFDQUM7RUFDQUM7RUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBMkpBLElBQU1BLHdCQUF3QixvQkFBSXNCLElBQUksQ0FDcEMsbUJBQ0EsZUFDQSxlQUFlLENBQ2hCOzs7IiwKICAibmFtZXMiOiBbIkFkZE1hcmtldHBsYWNlIiwgImlucHV0VmFsdWUiLCAic2V0SW5wdXRWYWx1ZSIsICJjdXJzb3JPZmZzZXQiLCAic2V0Q3Vyc29yT2Zmc2V0IiwgImVycm9yIiwgInNldEVycm9yIiwgInJlc3VsdCIsICJzZXRSZXN1bHQiLCAic2V0Vmlld1N0YXRlIiwgIm9uQWRkQ29tcGxldGUiLCAiY2xpTW9kZSIsICJoYXNBdHRlbXB0ZWRBdXRvQWRkIiwgInVzZVJlZiIsICJpc0xvYWRpbmciLCAic2V0TG9hZGluZyIsICJ1c2VTdGF0ZSIsICJwcm9ncmVzc01lc3NhZ2UiLCAic2V0UHJvZ3Jlc3NNZXNzYWdlIiwgImhhbmRsZUFkZCIsICJpbnB1dCIsICJ0cmltIiwgInBhcnNlZCIsICJwYXJzZU1hcmtldHBsYWNlSW5wdXQiLCAibmFtZSIsICJyZXNvbHZlZFNvdXJjZSIsICJhZGRNYXJrZXRwbGFjZVNvdXJjZSIsICJtZXNzYWdlIiwgInNhdmVNYXJrZXRwbGFjZVRvU2V0dGluZ3MiLCAic291cmNlIiwgImNsZWFyQWxsQ2FjaGVzIiwgInNvdXJjZVR5cGUiLCAicmVwbyIsICJsb2dFdmVudCIsICJzb3VyY2VfdHlwZSIsICJ0eXBlIiwgInRhcmdldE1hcmtldHBsYWNlIiwgImVyciIsICJ0b0Vycm9yIiwgImxvZ0Vycm9yIiwgInVzZUVmZmVjdCIsICJjdXJyZW50IiwgImJ1aWxkRmluYWxWYWx1ZXMiLCAiZmllbGRzIiwgImNvbGxlY3RlZCIsICJjb25maWdTY2hlbWEiLCAiaW5pdGlhbFZhbHVlcyIsICJmaW5hbFZhbHVlcyIsICJmaWVsZEtleSIsICJzY2hlbWEiLCAidmFsdWUiLCAic2Vuc2l0aXZlIiwgInVuZGVmaW5lZCIsICJ0eXBlIiwgInRyaW0iLCAibnVtIiwgIk51bWJlciIsICJpc05hTiIsICJpc0VudlRydXRoeSIsICJQbHVnaW5PcHRpb25zRGlhbG9nIiwgInQwIiwgIiQiLCAiX2MiLCAidGl0bGUiLCAic3VidGl0bGUiLCAib25TYXZlIiwgIm9uQ2FuY2VsIiwgInQxIiwgIk9iamVjdCIsICJrZXlzIiwgInQyIiwgImtleSIsICJ2IiwgIlN0cmluZyIsICJpbml0aWFsRm9yIiwgImN1cnJlbnRGaWVsZEluZGV4IiwgInNldEN1cnJlbnRGaWVsZEluZGV4IiwgInVzZVN0YXRlIiwgInQzIiwgIlN5bWJvbCIsICJmb3IiLCAidmFsdWVzIiwgInNldFZhbHVlcyIsICJ0NCIsICJjdXJyZW50SW5wdXQiLCAic2V0Q3VycmVudElucHV0IiwgImN1cnJlbnRGaWVsZCIsICJmaWVsZFNjaGVtYSIsICJ0NSIsICJjb250ZXh0IiwgInVzZUtleWJpbmRpbmciLCAidDYiLCAibGVuZ3RoIiwgInByZXYiLCAiX3RlbXAiLCAibmV4dEtleSIsICJoYW5kbGVOZXh0RmllbGQiLCAidDciLCAibmV3VmFsdWVzIiwgIl90ZW1wMiIsICJuZXh0S2V5XzAiLCAiaGFuZGxlQ29uZmlybSIsICJ0OCIsICJ0OSIsICJ1c2VLZXliaW5kaW5ncyIsICJ0MTAiLCAiY2hhciIsICJrZXlfMCIsICJiYWNrc3BhY2UiLCAiZGVsZXRlIiwgIl90ZW1wMyIsICJjdHJsIiwgIm1ldGEiLCAidGFiIiwgInJldHVybiIsICJwcmV2XzMiLCAidXNlSW5wdXQiLCAiaXNTZW5zaXRpdmUiLCAiaXNSZXF1aXJlZCIsICJyZXF1aXJlZCIsICJ0MTEiLCAicmVwZWF0IiwgInN0cmluZ1dpZHRoIiwgImRpc3BsYXlWYWx1ZSIsICJ0MTIiLCAidDEzIiwgInQxNCIsICJ0MTUiLCAiZGVzY3JpcHRpb24iLCAidDE2IiwgImZpZ3VyZXMiLCAicG9pbnRlclNtYWxsIiwgInQxNyIsICJ0MTgiLCAidDE5IiwgInQyMCIsICJ0MjEiLCAidDIyIiwgInQyMyIsICJ0MjQiLCAidDI1IiwgInQyNiIsICJwcmV2XzIiLCAic2xpY2UiLCAicHJldl8xIiwgInByZXZfMCIsICJmaW5kUGx1Z2luT3B0aW9uc1RhcmdldCIsICJwbHVnaW5JZCIsICJlbmFibGVkIiwgImRpc2FibGVkIiwgImxvYWRBbGxQbHVnaW5zIiwgImZpbmQiLCAicCIsICJyZXBvc2l0b3J5IiwgInNvdXJjZSIsICJQbHVnaW5PcHRpb25zRmxvdyIsICJwbHVnaW4iLCAib25Eb25lIiwgInN0ZXBzIiwgInVzZVN0YXRlIiwgInJlc3VsdCIsICJ1bmNvbmZpZ3VyZWQiLCAiZ2V0VW5jb25maWd1cmVkT3B0aW9ucyIsICJPYmplY3QiLCAia2V5cyIsICJsZW5ndGgiLCAicHVzaCIsICJrZXkiLCAidGl0bGUiLCAibmFtZSIsICJzdWJ0aXRsZSIsICJzY2hlbWEiLCAibG9hZCIsICJsb2FkUGx1Z2luT3B0aW9ucyIsICJzYXZlIiwgInZhbHVlcyIsICJzYXZlUGx1Z2luT3B0aW9ucyIsICJtYW5pZmVzdCIsICJ1c2VyQ29uZmlnIiwgImNoYW5uZWxzIiwgImdldFVuY29uZmlndXJlZENoYW5uZWxzIiwgImNoYW5uZWwiLCAic2VydmVyIiwgImRpc3BsYXlOYW1lIiwgImNvbmZpZ1NjaGVtYSIsICJsb2FkTWNwU2VydmVyVXNlckNvbmZpZyIsICJ1bmRlZmluZWQiLCAic2F2ZU1jcFNlcnZlclVzZXJDb25maWciLCAiaW5kZXgiLCAic2V0SW5kZXgiLCAib25Eb25lUmVmIiwgInVzZVJlZiIsICJjdXJyZW50IiwgIlJlYWN0IiwgInVzZUVmZmVjdCIsICJoYW5kbGVTYXZlIiwgImVyciIsICJlcnJvck1lc3NhZ2UiLCAibmV4dCIsICJQbHVnaW5UcnVzdFdhcm5pbmciLCAiJCIsICJfYyIsICJ0MCIsICJTeW1ib2wiLCAiZm9yIiwgImdldFBsdWdpblRydXN0TWVzc2FnZSIsICJjdXN0b21NZXNzYWdlIiwgInQxIiwgImZpZ3VyZXMiLCAid2FybmluZyIsICJ0MiIsICJleHRyYWN0R2l0SHViUmVwbyIsICJwbHVnaW4iLCAiaXNHaXRIdWIiLCAiZW50cnkiLCAic291cmNlIiwgInJlcG8iLCAiYnVpbGRQbHVnaW5EZXRhaWxzTWVudU9wdGlvbnMiLCAiaGFzSG9tZXBhZ2UiLCAiZ2l0aHViUmVwbyIsICJvcHRpb25zIiwgImxhYmVsIiwgImFjdGlvbiIsICJwdXNoIiwgIlBsdWdpblNlbGVjdGlvbktleUhpbnQiLCAidDAiLCAiJCIsICJfYyIsICJoYXNTZWxlY3Rpb24iLCAidDEiLCAidDIiLCAidDMiLCAidDQiLCAiU3ltYm9sIiwgImZvciIsICJ0NSIsICJCcm93c2VNYXJrZXRwbGFjZSIsICJlcnJvciIsICJzZXRFcnJvciIsICJyZXN1bHQiLCAiX3Jlc3VsdCIsICJzZXRSZXN1bHQiLCAic2V0Vmlld1N0YXRlIiwgInNldFBhcmVudFZpZXdTdGF0ZSIsICJvbkluc3RhbGxDb21wbGV0ZSIsICJ0YXJnZXRNYXJrZXRwbGFjZSIsICJ0YXJnZXRQbHVnaW4iLCAidmlld1N0YXRlIiwgInVzZVN0YXRlIiwgInNlbGVjdGVkTWFya2V0cGxhY2UiLCAic2V0U2VsZWN0ZWRNYXJrZXRwbGFjZSIsICJzZWxlY3RlZFBsdWdpbiIsICJzZXRTZWxlY3RlZFBsdWdpbiIsICJtYXJrZXRwbGFjZXMiLCAic2V0TWFya2V0cGxhY2VzIiwgImF2YWlsYWJsZVBsdWdpbnMiLCAic2V0QXZhaWxhYmxlUGx1Z2lucyIsICJsb2FkaW5nIiwgInNldExvYWRpbmciLCAiaW5zdGFsbENvdW50cyIsICJzZXRJbnN0YWxsQ291bnRzIiwgInNlbGVjdGVkSW5kZXgiLCAic2V0U2VsZWN0ZWRJbmRleCIsICJzZWxlY3RlZEZvckluc3RhbGwiLCAic2V0U2VsZWN0ZWRGb3JJbnN0YWxsIiwgIlNldCIsICJpbnN0YWxsaW5nUGx1Z2lucyIsICJzZXRJbnN0YWxsaW5nUGx1Z2lucyIsICJwYWdpbmF0aW9uIiwgInVzZVBhZ2luYXRpb24iLCAidG90YWxJdGVtcyIsICJsZW5ndGgiLCAiZGV0YWlsc01lbnVJbmRleCIsICJzZXREZXRhaWxzTWVudUluZGV4IiwgImlzSW5zdGFsbGluZyIsICJzZXRJc0luc3RhbGxpbmciLCAiaW5zdGFsbEVycm9yIiwgInNldEluc3RhbGxFcnJvciIsICJ3YXJuaW5nIiwgInNldFdhcm5pbmciLCAiaGFuZGxlQmFjayIsICJ1c2VDYWxsYmFjayIsICJ0eXBlIiwgInVzZUtleWJpbmRpbmciLCAiY29udGV4dCIsICJ1c2VFZmZlY3QiLCAibG9hZE1hcmtldHBsYWNlRGF0YSIsICJjb25maWciLCAibG9hZEtub3duTWFya2V0cGxhY2VzQ29uZmlnIiwgImZhaWx1cmVzIiwgImxvYWRNYXJrZXRwbGFjZXNXaXRoR3JhY2VmdWxEZWdyYWRhdGlvbiIsICJtYXJrZXRwbGFjZUluZm9zIiwgIm5hbWUiLCAibWFya2V0cGxhY2VDb25maWciLCAiZGF0YSIsICJtYXJrZXRwbGFjZSIsICJpbnN0YWxsZWRGcm9tVGhpc01hcmtldHBsYWNlIiwgImNvdW50IiwgInBsdWdpbnMiLCAicGx1Z2luIiwgImlzUGx1Z2luSW5zdGFsbGVkIiwgImNyZWF0ZVBsdWdpbklkIiwgInB1c2giLCAidG90YWxQbHVnaW5zIiwgImluc3RhbGxlZENvdW50IiwgInNvdXJjZSIsICJnZXRNYXJrZXRwbGFjZVNvdXJjZURpc3BsYXkiLCAic29ydCIsICJhIiwgImIiLCAic3VjY2Vzc0NvdW50IiwgIm0iLCAiZXJyb3JSZXN1bHQiLCAiZm9ybWF0TWFya2V0cGxhY2VMb2FkaW5nRXJyb3JzIiwgIm1lc3NhZ2UiLCAiRXJyb3IiLCAic2luZ2xlTWFya2V0cGxhY2UiLCAiZm91bmRQbHVnaW4iLCAiZm91bmRNYXJrZXRwbGFjZSIsICJPYmplY3QiLCAiZW50cmllcyIsICJnZXRNYXJrZXRwbGFjZSIsICJmaW5kIiwgInAiLCAicGx1Z2luSWQiLCAiZW50cnkiLCAibWFya2V0cGxhY2VOYW1lIiwgImlzSW5zdGFsbGVkIiwgImlzUGx1Z2luR2xvYmFsbHlJbnN0YWxsZWQiLCAiZ2xvYmFsbHlJbnN0YWxsZWQiLCAibWFya2V0cGxhY2VFeGlzdHMiLCAic29tZSIsICJlcnIiLCAiY2FuY2VsbGVkIiwgImxvYWRQbHVnaW5zRm9yTWFya2V0cGxhY2UiLCAiaW5zdGFsbGFibGVQbHVnaW5zIiwgImlzUGx1Z2luQmxvY2tlZEJ5UG9saWN5IiwgImNvdW50cyIsICJnZXRJbnN0YWxsQ291bnRzIiwgImNvdW50QSIsICJnZXQiLCAiY291bnRCIiwgImxvY2FsZUNvbXBhcmUiLCAibG9nRm9yRGVidWdnaW5nIiwgImVycm9yTWVzc2FnZSIsICJpbnN0YWxsU2VsZWN0ZWRQbHVnaW5zIiwgInNpemUiLCAicGx1Z2luc1RvSW5zdGFsbCIsICJmaWx0ZXIiLCAiaGFzIiwgIm1hcCIsICJmYWlsdXJlQ291bnQiLCAibmV3RmFpbGVkUGx1Z2lucyIsICJpbnN0YWxsUGx1Z2luRnJvbU1hcmtldHBsYWNlIiwgInNjb3BlIiwgInN1Y2Nlc3MiLCAicmVhc29uIiwgImNsZWFyQWxsQ2FjaGVzIiwgInBsdXJhbCIsICJmb3JtYXRGYWlsdXJlRGV0YWlscyIsICJoYW5kbGVTaW5nbGVQbHVnaW5JbnN0YWxsIiwgImxvYWRlZCIsICJmaW5kUGx1Z2luT3B0aW9uc1RhcmdldCIsICJ1c2VLZXliaW5kaW5ncyIsICJzZWxlY3Q6cHJldmlvdXMiLCAic2VsZWN0Om5leHQiLCAic2VsZWN0OmFjY2VwdCIsICJpc0FjdGl2ZSIsICJoYW5kbGVTZWxlY3Rpb25DaGFuZ2UiLCAicGx1Z2luOnRvZ2dsZSIsICJuZXdTZWxlY3Rpb24iLCAiZGVsZXRlIiwgImFkZCIsICJwbHVnaW46aW5zdGFsbCIsICJkZXRhaWxzTWVudU9wdGlvbnMiLCAidXNlTWVtbyIsICJoYXNIb21lcGFnZSIsICJob21lcGFnZSIsICJnaXRodWJSZXBvIiwgImV4dHJhY3RHaXRIdWJSZXBvIiwgImJ1aWxkUGx1Z2luRGV0YWlsc01lbnVPcHRpb25zIiwgImFjdGlvbiIsICJvcGVuQnJvd3NlciIsICJmaW5pc2giLCAibXNnIiwgIm91dGNvbWUiLCAiZGV0YWlsIiwgImZpZ3VyZXMiLCAiaW5kZXgiLCAidW5kZWZpbmVkIiwgInBvaW50ZXIiLCAibWVudU9wdGlvbnMiLCAidmVyc2lvbiIsICJkZXNjcmlwdGlvbiIsICJhdXRob3IiLCAiY29tbWFuZHMiLCAiQXJyYXkiLCAiaXNBcnJheSIsICJqb2luIiwgImtleXMiLCAiYWdlbnRzIiwgImhvb2tzIiwgIm1jcFNlcnZlcnMiLCAib3B0aW9uIiwgImxhYmVsIiwgInZpc2libGVQbHVnaW5zIiwgImdldFZpc2libGVJdGVtcyIsICJzY3JvbGxQb3NpdGlvbiIsICJjYW5TY3JvbGxVcCIsICJhcnJvd1VwIiwgInZpc2libGVJbmRleCIsICJhY3R1YWxJbmRleCIsICJ0b0FjdHVhbEluZGV4IiwgImlzU2VsZWN0ZWQiLCAiaXNTZWxlY3RlZEZvckluc3RhbGwiLCAiaXNMYXN0IiwgInRpY2siLCAiZWxsaXBzaXMiLCAicmFkaW9PbiIsICJyYWRpb09mZiIsICJjYXRlZ29yeSIsICJ0YWdzIiwgImluY2x1ZGVzIiwgIk9GRklDSUFMX01BUktFVFBMQUNFX05BTUUiLCAiZm9ybWF0SW5zdGFsbENvdW50IiwgInRydW5jYXRlVG9XaWR0aCIsICJjYW5TY3JvbGxEb3duIiwgImFycm93RG93biIsICJjcm9zcyIsICJEaXNjb3ZlclBsdWdpbnMiLCAiZXJyb3IiLCAic2V0RXJyb3IiLCAicmVzdWx0IiwgIl9yZXN1bHQiLCAic2V0UmVzdWx0IiwgInNldFZpZXdTdGF0ZSIsICJzZXRQYXJlbnRWaWV3U3RhdGUiLCAib25JbnN0YWxsQ29tcGxldGUiLCAib25TZWFyY2hNb2RlQ2hhbmdlIiwgInRhcmdldFBsdWdpbiIsICJ2aWV3U3RhdGUiLCAidXNlU3RhdGUiLCAic2VsZWN0ZWRQbHVnaW4iLCAic2V0U2VsZWN0ZWRQbHVnaW4iLCAiYXZhaWxhYmxlUGx1Z2lucyIsICJzZXRBdmFpbGFibGVQbHVnaW5zIiwgImxvYWRpbmciLCAic2V0TG9hZGluZyIsICJpbnN0YWxsQ291bnRzIiwgInNldEluc3RhbGxDb3VudHMiLCAiaXNTZWFyY2hNb2RlIiwgInNldElzU2VhcmNoTW9kZVJhdyIsICJzZXRJc1NlYXJjaE1vZGUiLCAidXNlQ2FsbGJhY2siLCAiYWN0aXZlIiwgInF1ZXJ5IiwgInNlYXJjaFF1ZXJ5IiwgInNldFF1ZXJ5IiwgInNldFNlYXJjaFF1ZXJ5IiwgImN1cnNvck9mZnNldCIsICJzZWFyY2hDdXJzb3JPZmZzZXQiLCAidXNlU2VhcmNoSW5wdXQiLCAiaXNBY3RpdmUiLCAib25FeGl0IiwgImlzVGVybWluYWxGb2N1c2VkIiwgInVzZVRlcm1pbmFsRm9jdXMiLCAiY29sdW1ucyIsICJ0ZXJtaW5hbFdpZHRoIiwgInVzZVRlcm1pbmFsU2l6ZSIsICJmaWx0ZXJlZFBsdWdpbnMiLCAidXNlTWVtbyIsICJsb3dlclF1ZXJ5IiwgInRvTG93ZXJDYXNlIiwgImZpbHRlciIsICJwbHVnaW4iLCAiZW50cnkiLCAibmFtZSIsICJpbmNsdWRlcyIsICJkZXNjcmlwdGlvbiIsICJtYXJrZXRwbGFjZU5hbWUiLCAic2VsZWN0ZWRJbmRleCIsICJzZXRTZWxlY3RlZEluZGV4IiwgInNlbGVjdGVkRm9ySW5zdGFsbCIsICJzZXRTZWxlY3RlZEZvckluc3RhbGwiLCAiU2V0IiwgImluc3RhbGxpbmdQbHVnaW5zIiwgInNldEluc3RhbGxpbmdQbHVnaW5zIiwgInBhZ2luYXRpb24iLCAidXNlUGFnaW5hdGlvbiIsICJ0b3RhbEl0ZW1zIiwgImxlbmd0aCIsICJ1c2VFZmZlY3QiLCAiZGV0YWlsc01lbnVJbmRleCIsICJzZXREZXRhaWxzTWVudUluZGV4IiwgImlzSW5zdGFsbGluZyIsICJzZXRJc0luc3RhbGxpbmciLCAiaW5zdGFsbEVycm9yIiwgInNldEluc3RhbGxFcnJvciIsICJ3YXJuaW5nIiwgInNldFdhcm5pbmciLCAiZW1wdHlSZWFzb24iLCAic2V0RW1wdHlSZWFzb24iLCAibG9hZEFsbFBsdWdpbnMiLCAiY29uZmlnIiwgImxvYWRLbm93bk1hcmtldHBsYWNlc0NvbmZpZyIsICJtYXJrZXRwbGFjZXMiLCAiZmFpbHVyZXMiLCAibG9hZE1hcmtldHBsYWNlc1dpdGhHcmFjZWZ1bERlZ3JhZGF0aW9uIiwgImFsbFBsdWdpbnMiLCAiZGF0YSIsICJtYXJrZXRwbGFjZSIsICJwbHVnaW5zIiwgInBsdWdpbklkIiwgImNyZWF0ZVBsdWdpbklkIiwgInB1c2giLCAiaXNJbnN0YWxsZWQiLCAiaXNQbHVnaW5HbG9iYWxseUluc3RhbGxlZCIsICJ1bmluc3RhbGxlZFBsdWdpbnMiLCAicCIsICJpc1BsdWdpbkJsb2NrZWRCeVBvbGljeSIsICJjb3VudHMiLCAiZ2V0SW5zdGFsbENvdW50cyIsICJzb3J0IiwgImEiLCAiYiIsICJjb3VudEEiLCAiZ2V0IiwgImNvdW50QiIsICJsb2NhbGVDb21wYXJlIiwgImxvZ0ZvckRlYnVnZ2luZyIsICJlcnJvck1lc3NhZ2UiLCAiY29uZmlndXJlZENvdW50IiwgIk9iamVjdCIsICJrZXlzIiwgInJlYXNvbiIsICJkZXRlY3RFbXB0eU1hcmtldHBsYWNlUmVhc29uIiwgImNvbmZpZ3VyZWRNYXJrZXRwbGFjZUNvdW50IiwgImZhaWxlZE1hcmtldHBsYWNlQ291bnQiLCAic3VjY2Vzc0NvdW50IiwgImNvdW50IiwgIm0iLCAiZXJyb3JSZXN1bHQiLCAiZm9ybWF0TWFya2V0cGxhY2VMb2FkaW5nRXJyb3JzIiwgInR5cGUiLCAibWVzc2FnZSIsICJFcnJvciIsICJmb3VuZFBsdWdpbiIsICJmaW5kIiwgImVyciIsICJpbnN0YWxsU2VsZWN0ZWRQbHVnaW5zIiwgInNpemUiLCAicGx1Z2luc1RvSW5zdGFsbCIsICJoYXMiLCAibWFwIiwgImZhaWx1cmVDb3VudCIsICJuZXdGYWlsZWRQbHVnaW5zIiwgImluc3RhbGxQbHVnaW5Gcm9tTWFya2V0cGxhY2UiLCAic2NvcGUiLCAic3VjY2VzcyIsICJjbGVhckFsbENhY2hlcyIsICJwbHVyYWwiLCAiZm9ybWF0RmFpbHVyZURldGFpbHMiLCAiaGFuZGxlU2luZ2xlUGx1Z2luSW5zdGFsbCIsICJsb2FkZWQiLCAiZmluZFBsdWdpbk9wdGlvbnNUYXJnZXQiLCAidXNlS2V5YmluZGluZyIsICJjb250ZXh0IiwgInVzZUlucHV0IiwgImlucHV0IiwgIl9rZXkiLCAia2V5SXNOb3RDdHJsT3JNZXRhIiwgImN0cmwiLCAibWV0YSIsICJ0ZXN0IiwgInVzZUtleWJpbmRpbmdzIiwgInNlbGVjdDpwcmV2aW91cyIsICJoYW5kbGVTZWxlY3Rpb25DaGFuZ2UiLCAic2VsZWN0Om5leHQiLCAic2VsZWN0OmFjY2VwdCIsICJ0YXJnZXRNYXJrZXRwbGFjZSIsICJwbHVnaW46dG9nZ2xlIiwgIm5ld1NlbGVjdGlvbiIsICJkZWxldGUiLCAiYWRkIiwgInBsdWdpbjppbnN0YWxsIiwgImRldGFpbHNNZW51T3B0aW9ucyIsICJoYXNIb21lcGFnZSIsICJob21lcGFnZSIsICJnaXRodWJSZXBvIiwgImV4dHJhY3RHaXRIdWJSZXBvIiwgImJ1aWxkUGx1Z2luRGV0YWlsc01lbnVPcHRpb25zIiwgImFjdGlvbiIsICJvcGVuQnJvd3NlciIsICJmaW5pc2giLCAibXNnIiwgIm91dGNvbWUiLCAiZGV0YWlsIiwgIm1lbnVPcHRpb25zIiwgInZlcnNpb24iLCAiYXV0aG9yIiwgIm9wdGlvbiIsICJpbmRleCIsICJzdGFydHNXaXRoIiwgImxhYmVsIiwgInZpc2libGVQbHVnaW5zIiwgImdldFZpc2libGVJdGVtcyIsICJuZWVkc1BhZ2luYXRpb24iLCAic2Nyb2xsUG9zaXRpb24iLCAiY3VycmVudCIsICJ0b3RhbCIsICJmaWd1cmVzIiwgImNhblNjcm9sbFVwIiwgImFycm93VXAiLCAidmlzaWJsZUluZGV4IiwgImFjdHVhbEluZGV4IiwgInRvQWN0dWFsSW5kZXgiLCAiaXNTZWxlY3RlZCIsICJpc1NlbGVjdGVkRm9ySW5zdGFsbCIsICJpc0luc3RhbGxpbmdUaGlzIiwgImlzTGFzdCIsICJzdGFydEluZGV4IiwgInVuZGVmaW5lZCIsICJwb2ludGVyIiwgImVsbGlwc2lzIiwgInJhZGlvT24iLCAicmFkaW9PZmYiLCAidGFncyIsICJPRkZJQ0lBTF9NQVJLRVRQTEFDRV9OQU1FIiwgImZvcm1hdEluc3RhbGxDb3VudCIsICJ0cnVuY2F0ZVRvV2lkdGgiLCAiY2FuU2Nyb2xsRG93biIsICJhcnJvd0Rvd24iLCAiY3Jvc3MiLCAiRGlzY292ZXJQbHVnaW5zS2V5SGludCIsICJ0MCIsICIkIiwgIl9jIiwgImhhc1NlbGVjdGlvbiIsICJjYW5Ub2dnbGUiLCAidDEiLCAidDIiLCAiU3ltYm9sIiwgImZvciIsICJ0MyIsICJ0NCIsICJ0NSIsICJ0NiIsICJFbXB0eVN0YXRlTWVzc2FnZSIsICJNYW5hZ2VNYXJrZXRwbGFjZXMiLCAic2V0Vmlld1N0YXRlIiwgImVycm9yIiwgInNldEVycm9yIiwgInNldFJlc3VsdCIsICJleGl0U3RhdGUiLCAib25NYW5hZ2VDb21wbGV0ZSIsICJ0YXJnZXRNYXJrZXRwbGFjZSIsICJhY3Rpb24iLCAibWFya2V0cGxhY2VTdGF0ZXMiLCAic2V0TWFya2V0cGxhY2VTdGF0ZXMiLCAidXNlU3RhdGUiLCAibG9hZGluZyIsICJzZXRMb2FkaW5nIiwgInNlbGVjdGVkSW5kZXgiLCAic2V0U2VsZWN0ZWRJbmRleCIsICJpc1Byb2Nlc3NpbmciLCAic2V0SXNQcm9jZXNzaW5nIiwgInByb2Nlc3NFcnJvciIsICJzZXRQcm9jZXNzRXJyb3IiLCAic3VjY2Vzc01lc3NhZ2UiLCAic2V0U3VjY2Vzc01lc3NhZ2UiLCAicHJvZ3Jlc3NNZXNzYWdlIiwgInNldFByb2dyZXNzTWVzc2FnZSIsICJpbnRlcm5hbFZpZXciLCAic2V0SW50ZXJuYWxWaWV3IiwgInNlbGVjdGVkTWFya2V0cGxhY2UiLCAic2V0U2VsZWN0ZWRNYXJrZXRwbGFjZSIsICJkZXRhaWxzTWVudUluZGV4IiwgInNldERldGFpbHNNZW51SW5kZXgiLCAiaGFzQXR0ZW1wdGVkQXV0b0FjdGlvbiIsICJ1c2VSZWYiLCAidXNlRWZmZWN0IiwgImxvYWRNYXJrZXRwbGFjZXMiLCAiY29uZmlnIiwgImxvYWRLbm93bk1hcmtldHBsYWNlc0NvbmZpZyIsICJlbmFibGVkIiwgImRpc2FibGVkIiwgImxvYWRBbGxQbHVnaW5zIiwgImFsbFBsdWdpbnMiLCAibWFya2V0cGxhY2VzIiwgImZhaWx1cmVzIiwgImxvYWRNYXJrZXRwbGFjZXNXaXRoR3JhY2VmdWxEZWdyYWRhdGlvbiIsICJzdGF0ZXMiLCAibmFtZSIsICJlbnRyeSIsICJkYXRhIiwgIm1hcmtldHBsYWNlIiwgImluc3RhbGxlZEZyb21NYXJrZXRwbGFjZSIsICJmaWx0ZXIiLCAicGx1Z2luIiwgInNvdXJjZSIsICJlbmRzV2l0aCIsICJwdXNoIiwgImdldE1hcmtldHBsYWNlU291cmNlRGlzcGxheSIsICJsYXN0VXBkYXRlZCIsICJwbHVnaW5Db3VudCIsICJwbHVnaW5zIiwgImxlbmd0aCIsICJpbnN0YWxsZWRQbHVnaW5zIiwgInBlbmRpbmdVcGRhdGUiLCAicGVuZGluZ1JlbW92ZSIsICJhdXRvVXBkYXRlIiwgImlzTWFya2V0cGxhY2VBdXRvVXBkYXRlIiwgInNvcnQiLCAiYSIsICJiIiwgImxvY2FsZUNvbXBhcmUiLCAic3VjY2Vzc0NvdW50IiwgImNvdW50IiwgIm0iLCAiZXJyb3JSZXN1bHQiLCAiZm9ybWF0TWFya2V0cGxhY2VMb2FkaW5nRXJyb3JzIiwgInR5cGUiLCAibWVzc2FnZSIsICJFcnJvciIsICJjdXJyZW50IiwgInRhcmdldEluZGV4IiwgImZpbmRJbmRleCIsICJzIiwgInRhcmdldFN0YXRlIiwgIm5ld1N0YXRlcyIsICJzZXRUaW1lb3V0IiwgImFwcGx5Q2hhbmdlcyIsICJlcnIiLCAiaGFzUGVuZGluZ0NoYW5nZXMiLCAic29tZSIsICJzdGF0ZSIsICJnZXRQZW5kaW5nQ291bnRzIiwgInVwZGF0ZUNvdW50IiwgInJlbW92ZUNvdW50IiwgInN0YXRlc1RvUHJvY2VzcyIsICJ3YXNJbkRldGFpbHNWaWV3IiwgInNldHRpbmdzIiwgImdldFNldHRpbmdzRm9yU291cmNlIiwgInVwZGF0ZWRDb3VudCIsICJyZW1vdmVkQ291bnQiLCAicmVmcmVzaGVkTWFya2V0cGxhY2VzIiwgIlNldCIsICJuZXdFbmFibGVkUGx1Z2lucyIsICJlbmFibGVkUGx1Z2lucyIsICJwbHVnaW5JZCIsICJjcmVhdGVQbHVnaW5JZCIsICJ1cGRhdGVTZXR0aW5nc0ZvclNvdXJjZSIsICJyZW1vdmVNYXJrZXRwbGFjZVNvdXJjZSIsICJsb2dFdmVudCIsICJtYXJrZXRwbGFjZV9uYW1lIiwgInBsdWdpbnNfdW5pbnN0YWxsZWQiLCAicmVmcmVzaE1hcmtldHBsYWNlIiwgImFkZCIsICJ0b0xvd2VyQ2FzZSIsICJ1cGRhdGVkUGx1Z2luQ291bnQiLCAic2l6ZSIsICJ1cGRhdGVkUGx1Z2luSWRzIiwgInVwZGF0ZVBsdWdpbnNGb3JNYXJrZXRwbGFjZXMiLCAiY2xlYXJBbGxDYWNoZXMiLCAidXBkYXRlZE1hcmtldHBsYWNlIiwgImZpbmQiLCAiYWN0aW9ucyIsICJwbHVnaW5QYXJ0IiwgInBsdXJhbCIsICJzdWNjZXNzTXNnIiwgImZpZ3VyZXMiLCAidGljayIsICJqb2luIiwgImVycm9yTXNnIiwgImVycm9yTWVzc2FnZSIsICJjb25maXJtUmVtb3ZlIiwgIm1hcCIsICJidWlsZERldGFpbHNNZW51T3B0aW9ucyIsICJvcHRpb25zIiwgImxhYmVsIiwgInZhbHVlIiwgInNlY29uZGFyeUxhYmVsIiwgIkRhdGUiLCAidG9Mb2NhbGVEYXRlU3RyaW5nIiwgInVuZGVmaW5lZCIsICJzaG91bGRTa2lwUGx1Z2luQXV0b3VwZGF0ZSIsICJoYW5kbGVUb2dnbGVBdXRvVXBkYXRlIiwgIm5ld0F1dG9VcGRhdGUiLCAic2V0TWFya2V0cGxhY2VBdXRvVXBkYXRlIiwgInByZXYiLCAidXNlS2V5YmluZGluZyIsICJjb250ZXh0IiwgImlzQWN0aXZlIiwgInVzZUtleWJpbmRpbmdzIiwgInNlbGVjdDpwcmV2aW91cyIsICJNYXRoIiwgIm1heCIsICJzZWxlY3Q6bmV4dCIsICJ0b3RhbEl0ZW1zIiwgIm1pbiIsICJzZWxlY3Q6YWNjZXB0IiwgIm1hcmtldHBsYWNlSW5kZXgiLCAidXNlSW5wdXQiLCAiaW5wdXQiLCAiaWR4IiwgIm1lbnVPcHRpb25zIiwgInNlbGVjdGVkT3B0aW9uIiwgInBvaW50ZXIiLCAicGVuZGluZyIsICJrZXlOYW1lIiwgImlzVXBkYXRpbmciLCAiYnVsbGV0IiwgIm1hbmlmZXN0IiwgImRlc2NyaXB0aW9uIiwgIm9wdGlvbiIsICJpc1NlbGVjdGVkIiwgImluZGljYXRvcnMiLCAiY3Jvc3MiLCAiTWFuYWdlTWFya2V0cGxhY2VzS2V5SGludHMiLCAidDAiLCAiJCIsICJfYyIsICJoYXNQZW5kaW5nQWN0aW9ucyIsICJ0MSIsICJ0MiIsICJ0MyIsICJ0NCIsICJ0NSIsICJ0NiIsICJ0NyIsICJDYXBhYmlsaXRpZXNTZWN0aW9uIiwgInQwIiwgIiQiLCAiX2MiLCAic2VydmVyVG9vbHNDb3VudCIsICJzZXJ2ZXJQcm9tcHRzQ291bnQiLCAic2VydmVyUmVzb3VyY2VzQ291bnQiLCAiY2FwYWJpbGl0aWVzIiwgInB1c2giLCAidDEiLCAiU3ltYm9sIiwgImZvciIsICJ0MiIsICJsZW5ndGgiLCAidDMiLCAiaGFuZGxlUmVjb25uZWN0UmVzdWx0IiwgInJlc3VsdCIsICJzZXJ2ZXJOYW1lIiwgImNsaWVudCIsICJ0eXBlIiwgIm1lc3NhZ2UiLCAic3VjY2VzcyIsICJoYW5kbGVSZWNvbm5lY3RFcnJvciIsICJlcnJvciIsICJlcnJvck1lc3NhZ2UiLCAiRXJyb3IiLCAiU3RyaW5nIiwgIk1DUFJlbW90ZVNlcnZlck1lbnUiLCAic2VydmVyIiwgInNlcnZlclRvb2xzQ291bnQiLCAib25WaWV3VG9vbHMiLCAib25DYW5jZWwiLCAib25Db21wbGV0ZSIsICJib3JkZXJsZXNzIiwgInRoZW1lIiwgInVzZVRoZW1lIiwgImV4aXRTdGF0ZSIsICJ1c2VFeGl0T25DdHJsQ0RXaXRoS2V5YmluZGluZ3MiLCAiY29sdW1ucyIsICJ0ZXJtaW5hbENvbHVtbnMiLCAidXNlVGVybWluYWxTaXplIiwgImlzQXV0aGVudGljYXRpbmciLCAic2V0SXNBdXRoZW50aWNhdGluZyIsICJSZWFjdCIsICJ1c2VTdGF0ZSIsICJlcnJvciIsICJzZXRFcnJvciIsICJtY3AiLCAidXNlQXBwU3RhdGUiLCAicyIsICJzZXRBcHBTdGF0ZSIsICJ1c2VTZXRBcHBTdGF0ZSIsICJhdXRob3JpemF0aW9uVXJsIiwgInNldEF1dGhvcml6YXRpb25VcmwiLCAiaXNSZWNvbm5lY3RpbmciLCAic2V0SXNSZWNvbm5lY3RpbmciLCAiYXV0aEFib3J0Q29udHJvbGxlclJlZiIsICJ1c2VSZWYiLCAiaXNDbGF1ZGVBSUF1dGhlbnRpY2F0aW5nIiwgInNldElzQ2xhdWRlQUlBdXRoZW50aWNhdGluZyIsICJjbGF1ZGVBSUF1dGhVcmwiLCAic2V0Q2xhdWRlQUlBdXRoVXJsIiwgImlzQ2xhdWRlQUlDbGVhcmluZ0F1dGgiLCAic2V0SXNDbGF1ZGVBSUNsZWFyaW5nQXV0aCIsICJjbGF1ZGVBSUNsZWFyQXV0aFVybCIsICJzZXRDbGF1ZGVBSUNsZWFyQXV0aFVybCIsICJjbGF1ZGVBSUNsZWFyQXV0aEJyb3dzZXJPcGVuZWQiLCAic2V0Q2xhdWRlQUlDbGVhckF1dGhCcm93c2VyT3BlbmVkIiwgInVybENvcGllZCIsICJzZXRVcmxDb3BpZWQiLCAiY29weVRpbWVvdXRSZWYiLCAidW5kZWZpbmVkIiwgInVubW91bnRlZFJlZiIsICJjYWxsYmFja1VybElucHV0IiwgInNldENhbGxiYWNrVXJsSW5wdXQiLCAiY2FsbGJhY2tVcmxDdXJzb3JPZmZzZXQiLCAic2V0Q2FsbGJhY2tVcmxDdXJzb3JPZmZzZXQiLCAibWFudWFsQ2FsbGJhY2tTdWJtaXQiLCAic2V0TWFudWFsQ2FsbGJhY2tTdWJtaXQiLCAidXNlRWZmZWN0IiwgImN1cnJlbnQiLCAiYWJvcnQiLCAiY2xlYXJUaW1lb3V0IiwgImlzRWZmZWN0aXZlbHlBdXRoZW50aWNhdGVkIiwgImlzQXV0aGVudGljYXRlZCIsICJjbGllbnQiLCAidHlwZSIsICJyZWNvbm5lY3RNY3BTZXJ2ZXIiLCAidXNlTWNwUmVjb25uZWN0IiwgImhhbmRsZUNsYXVkZUFJQXV0aENvbXBsZXRlIiwgInVzZUNhbGxiYWNrIiwgInJlc3VsdCIsICJuYW1lIiwgInN1Y2Nlc3MiLCAibG9nRXZlbnQiLCAiZXJyIiwgImhhbmRsZVJlY29ubmVjdEVycm9yIiwgImhhbmRsZUNsYXVkZUFJQ2xlYXJBdXRoQ29tcGxldGUiLCAiY2xlYXJTZXJ2ZXJDYWNoZSIsICJjb25maWciLCAic2NvcGUiLCAicHJldiIsICJuZXdDbGllbnRzIiwgImNsaWVudHMiLCAibWFwIiwgImMiLCAibmV3VG9vbHMiLCAiZXhjbHVkZVRvb2xzQnlTZXJ2ZXIiLCAidG9vbHMiLCAibmV3Q29tbWFuZHMiLCAiZXhjbHVkZUNvbW1hbmRzQnlTZXJ2ZXIiLCAiY29tbWFuZHMiLCAibmV3UmVzb3VyY2VzIiwgImV4Y2x1ZGVSZXNvdXJjZXNCeVNlcnZlciIsICJyZXNvdXJjZXMiLCAidXNlS2V5YmluZGluZyIsICJjb250ZXh0IiwgImlzQWN0aXZlIiwgInVzZUlucHV0IiwgImlucHV0IiwgImtleSIsICJyZXR1cm4iLCAiY29ubmVjdG9yc1VybCIsICJnZXRPYXV0aENvbmZpZyIsICJDTEFVREVfQUlfT1JJR0lOIiwgIm9wZW5Ccm93c2VyIiwgInVybFRvQ29weSIsICJzZXRDbGlwYm9hcmQiLCAidGhlbiIsICJyYXciLCAicHJvY2VzcyIsICJzdGRvdXQiLCAid3JpdGUiLCAic2V0VGltZW91dCIsICJjYXBpdGFsaXplZFNlcnZlck5hbWUiLCAiY2FwaXRhbGl6ZSIsICJTdHJpbmciLCAic2VydmVyQ29tbWFuZHNDb3VudCIsICJmaWx0ZXJNY3BQcm9tcHRzQnlTZXJ2ZXIiLCAibGVuZ3RoIiwgInRvZ2dsZU1jcFNlcnZlciIsICJ1c2VNY3BUb2dnbGVFbmFibGVkIiwgImhhbmRsZUNsYXVkZUFJQXV0aCIsICJjbGF1ZGVBaUJhc2VVcmwiLCAiYWNjb3VudEluZm8iLCAiZ2V0T2F1dGhBY2NvdW50SW5mbyIsICJvcmdVdWlkIiwgIm9yZ2FuaXphdGlvblV1aWQiLCAiYXV0aFVybCIsICJpZCIsICJzZXJ2ZXJJZCIsICJzdGFydHNXaXRoIiwgInNsaWNlIiwgInByb2R1Y3RTdXJmYWNlIiwgImVuY29kZVVSSUNvbXBvbmVudCIsICJlbnYiLCAiQ0xBVURFX0NPREVfRU5UUllQT0lOVCIsICJoYW5kbGVDbGF1ZGVBSUNsZWFyQXV0aCIsICJoYW5kbGVUb2dnbGVFbmFibGVkIiwgIndhc0VuYWJsZWQiLCAibmV3X3N0YXRlIiwgImFjdGlvbiIsICJlcnJvck1lc3NhZ2UiLCAiaGFuZGxlQXV0aGVudGljYXRlIiwgImNvbnRyb2xsZXIiLCAiQWJvcnRDb250cm9sbGVyIiwgInJldm9rZVNlcnZlclRva2VucyIsICJwcmVzZXJ2ZVN0ZXBVcFN0YXRlIiwgInBlcmZvcm1NQ1BPQXV0aEZsb3ciLCAic2lnbmFsIiwgIm9uV2FpdGluZ0ZvckNhbGxiYWNrIiwgInN1Ym1pdCIsICJ3YXNBdXRoZW50aWNhdGVkIiwgIm1lc3NhZ2UiLCAibG9nTUNQRGVidWciLCAiRXJyb3IiLCAiQXV0aGVudGljYXRpb25DYW5jZWxsZWRFcnJvciIsICJoYW5kbGVDbGVhckF1dGgiLCAiYXV0aENvcHkiLCAib2F1dGgiLCAieGFhIiwgInZhbHVlIiwgInRyaW0iLCAibWVudU9wdGlvbnMiLCAicHVzaCIsICJsYWJlbCIsICJjb2xvciIsICJmaWd1cmVzIiwgInJhZGlvT2ZmIiwgInRpY2siLCAidHJpYW5nbGVVcE91dGxpbmUiLCAiY3Jvc3MiLCAidHJhbnNwb3J0IiwgInVybCIsICJkZXNjcmliZU1jcENvbmZpZ0ZpbGVQYXRoIiwgImhhbmRsZVJlY29ubmVjdFJlc3VsdCIsICJwZW5kaW5nIiwgImtleU5hbWUiLCAiaW5pdF9hdXRoIiwgIk1DUFN0ZGlvU2VydmVyTWVudSIsICJzZXJ2ZXIiLCAic2VydmVyVG9vbHNDb3VudCIsICJvblZpZXdUb29scyIsICJvbkNhbmNlbCIsICJvbkNvbXBsZXRlIiwgImJvcmRlcmxlc3MiLCAidGhlbWUiLCAidXNlVGhlbWUiLCAiZXhpdFN0YXRlIiwgInVzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncyIsICJtY3AiLCAidXNlQXBwU3RhdGUiLCAicyIsICJyZWNvbm5lY3RNY3BTZXJ2ZXIiLCAidXNlTWNwUmVjb25uZWN0IiwgInRvZ2dsZU1jcFNlcnZlciIsICJ1c2VNY3BUb2dnbGVFbmFibGVkIiwgImlzUmVjb25uZWN0aW5nIiwgInNldElzUmVjb25uZWN0aW5nIiwgInVzZVN0YXRlIiwgImhhbmRsZVRvZ2dsZUVuYWJsZWQiLCAiUmVhY3QiLCAidXNlQ2FsbGJhY2siLCAid2FzRW5hYmxlZCIsICJjbGllbnQiLCAidHlwZSIsICJuYW1lIiwgImVyciIsICJhY3Rpb24iLCAiZXJyb3JNZXNzYWdlIiwgImNhcGl0YWxpemVkU2VydmVyTmFtZSIsICJjYXBpdGFsaXplIiwgIlN0cmluZyIsICJzZXJ2ZXJDb21tYW5kc0NvdW50IiwgImZpbHRlck1jcFByb21wdHNCeVNlcnZlciIsICJjb21tYW5kcyIsICJsZW5ndGgiLCAibWVudU9wdGlvbnMiLCAicHVzaCIsICJsYWJlbCIsICJ2YWx1ZSIsICJ1bmRlZmluZWQiLCAiY29sb3IiLCAiZmlndXJlcyIsICJyYWRpb09mZiIsICJ0aWNrIiwgImNyb3NzIiwgImNvbmZpZyIsICJjb21tYW5kIiwgImFyZ3MiLCAiam9pbiIsICJkZXNjcmliZU1jcENvbmZpZ0ZpbGVQYXRoIiwgImdldE1jcENvbmZpZ0J5TmFtZSIsICJzY29wZSIsICJyZXNvdXJjZXMiLCAicmVzdWx0IiwgIm1lc3NhZ2UiLCAiaGFuZGxlUmVjb25uZWN0UmVzdWx0IiwgImhhbmRsZVJlY29ubmVjdEVycm9yIiwgInBlbmRpbmciLCAia2V5TmFtZSIsICJpbml0X2NvbmZpZyIsICJNQ1BUb29sRGV0YWlsVmlldyIsICJ0MCIsICIkIiwgIl9jIiwgInRvb2wiLCAic2VydmVyIiwgIm9uQmFjayIsICJ0b29sRGVzY3JpcHRpb24iLCAic2V0VG9vbERlc2NyaXB0aW9uIiwgIlJlYWN0IiwgInVzZVN0YXRlIiwgInQxIiwgInRvb2xOYW1lIiwgIm5hbWUiLCAiZ2V0TWNwRGlzcGxheU5hbWUiLCAiZnVsbERpc3BsYXlOYW1lIiwgInVzZXJGYWNpbmdOYW1lIiwgImV4dHJhY3RNY3BUb29sRGlzcGxheU5hbWUiLCAiZGlzcGxheU5hbWUiLCAidDIiLCAiaXNSZWFkT25seSIsICJ0MyIsICJpc0Rlc3RydWN0aXZlIiwgInQ0IiwgImlzT3BlbldvcmxkIiwgInQ1IiwgInQ2IiwgImxvYWREZXNjcmlwdGlvbiIsICJkZXNjIiwgImRlc2NyaXB0aW9uIiwgImlzTm9uSW50ZXJhY3RpdmVTZXNzaW9uIiwgInRvb2xQZXJtaXNzaW9uQ29udGV4dCIsICJtb2RlIiwgImFkZGl0aW9uYWxXb3JraW5nRGlyZWN0b3JpZXMiLCAiTWFwIiwgImFsd2F5c0FsbG93UnVsZXMiLCAiYWx3YXlzRGVueVJ1bGVzIiwgImFsd2F5c0Fza1J1bGVzIiwgImlzQnlwYXNzUGVybWlzc2lvbnNNb2RlQXZhaWxhYmxlIiwgInRvb2xzIiwgInVzZUVmZmVjdCIsICJ0NyIsICJ0OCIsICJ0OSIsICJ0MTAiLCAidGl0bGVDb250ZW50IiwgInQxMSIsICJTeW1ib2wiLCAiZm9yIiwgInQxMiIsICJ0MTMiLCAidDE0IiwgInQxNSIsICJ0MTYiLCAiaW5wdXRKU09OU2NoZW1hIiwgInByb3BlcnRpZXMiLCAiT2JqZWN0IiwgImtleXMiLCAibGVuZ3RoIiwgImVudHJpZXMiLCAibWFwIiwgInQxNyIsICJrZXkiLCAidmFsdWUiLCAicmVxdWlyZWQiLCAiaXNSZXF1aXJlZCIsICJpbmNsdWRlcyIsICJTdHJpbmciLCAidHlwZSIsICJ0MTgiLCAiX3RlbXAiLCAiZXhpdFN0YXRlIiwgInBlbmRpbmciLCAia2V5TmFtZSIsICJNQ1BUb29sTGlzdFZpZXciLCAidDAiLCAiJCIsICJfYyIsICJzZXJ2ZXIiLCAib25TZWxlY3RUb29sIiwgIm9uQmFjayIsICJtY3BUb29scyIsICJ1c2VBcHBTdGF0ZSIsICJfdGVtcCIsICJ0MSIsICJiYjAiLCAiY2xpZW50IiwgInR5cGUiLCAidDIiLCAiU3ltYm9sIiwgImZvciIsICJuYW1lIiwgImZpbHRlclRvb2xzQnlTZXJ2ZXIiLCAic2VydmVyVG9vbHMiLCAidDMiLCAidG9vbCIsICJpbmRleCIsICJ0b29sTmFtZSIsICJnZXRNY3BEaXNwbGF5TmFtZSIsICJmdWxsRGlzcGxheU5hbWUiLCAidXNlckZhY2luZ05hbWUiLCAiZGlzcGxheU5hbWUiLCAiZXh0cmFjdE1jcFRvb2xEaXNwbGF5TmFtZSIsICJpc1JlYWRPbmx5IiwgImlzRGVzdHJ1Y3RpdmUiLCAiaXNPcGVuV29ybGQiLCAiYW5ub3RhdGlvbnMiLCAicHVzaCIsICJsYWJlbCIsICJ2YWx1ZSIsICJ0b1N0cmluZyIsICJkZXNjcmlwdGlvbiIsICJsZW5ndGgiLCAiam9pbiIsICJ1bmRlZmluZWQiLCAiZGVzY3JpcHRpb25Db2xvciIsICJtYXAiLCAidG9vbE9wdGlvbnMiLCAidDQiLCAidDUiLCAicGx1cmFsIiwgInQ2IiwgInQ3IiwgImluZGV4XzAiLCAicGFyc2VJbnQiLCAidG9vbF8wIiwgInQ4IiwgIl90ZW1wMiIsICJleGl0U3RhdGUiLCAicGVuZGluZyIsICJrZXlOYW1lIiwgInMiLCAibWNwIiwgInRvb2xzIiwgImZvcm1hdEVycm9yTWVzc2FnZSIsICJlcnJvciIsICJ0eXBlIiwgImNvbXBvbmVudCIsICJwYXRoIiwgImF1dGhUeXBlIiwgInRvVXBwZXJDYXNlIiwgImdpdFVybCIsICJvcGVyYXRpb24iLCAidXJsIiwgImRldGFpbHMiLCAibWFuaWZlc3RQYXRoIiwgInBhcnNlRXJyb3IiLCAidmFsaWRhdGlvbkVycm9ycyIsICJqb2luIiwgInBsdWdpbklkIiwgIm1hcmtldHBsYWNlIiwgInJlYXNvbiIsICJzZXJ2ZXJOYW1lIiwgInZhbGlkYXRpb25FcnJvciIsICJkdXAiLCAiZHVwbGljYXRlT2YiLCAic3RhcnRzV2l0aCIsICJzcGxpdCIsICJob29rUGF0aCIsICJtY3BiUGF0aCIsICJibG9ja2VkQnlCbG9ja2xpc3QiLCAiZGVwZW5kZW5jeSIsICJzaWduYWwiLCAiZXhpdENvZGUiLCAibWV0aG9kIiwgInRpbWVvdXRNcyIsICJwbHVnaW4iLCAiaW5zdGFsbFBhdGgiLCAiX2V4aGF1c3RpdmUiLCAiZ2V0UGx1Z2luRXJyb3JNZXNzYWdlIiwgImdldEVycm9yR3VpZGFuY2UiLCAiYXZhaWxhYmxlTWFya2V0cGxhY2VzIiwgImxlbmd0aCIsICJ3aW5uaW5nUGx1Z2luIiwgImFsbG93ZWRTb3VyY2VzIiwgIlVuaWZpZWRJbnN0YWxsZWRDZWxsIiwgInQwIiwgIiQiLCAiX2MiLCAiaXRlbSIsICJpc1NlbGVjdGVkIiwgInRoZW1lIiwgInVzZVRoZW1lIiwgInR5cGUiLCAic3RhdHVzSWNvbiIsICJzdGF0dXNUZXh0IiwgInBlbmRpbmdUb2dnbGUiLCAidDEiLCAiY29sb3IiLCAiZmlndXJlcyIsICJhcnJvd1JpZ2h0IiwgImVycm9yQ291bnQiLCAiY3Jvc3MiLCAidDIiLCAidDMiLCAicGx1cmFsIiwgImlzRW5hYmxlZCIsICJyYWRpb09mZiIsICJ0aWNrIiwgInVuZGVmaW5lZCIsICJwb2ludGVyIiwgInQ0IiwgInQ1IiwgIm5hbWUiLCAidDYiLCAidDciLCAiU3ltYm9sIiwgImZvciIsICJ0OCIsICJ0OSIsICJtYXJrZXRwbGFjZSIsICJ0MTAiLCAidDExIiwgInQxMiIsICJ0MTMiLCAidDE0IiwgIndhcm5pbmciLCAic3RhdHVzSWNvbl8wIiwgInQxNSIsICJzdGF0dXNJY29uXzEiLCAic3RhdHVzVGV4dF8wIiwgInQxNiIsICJ0MTciLCAic3RhdHVzIiwgInRyaWFuZ2xlVXBPdXRsaW5lIiwgImluZGVudGVkIiwgInN0YXR1c0ljb25fMiIsICJzdGF0dXNUZXh0XzEiLCAiZnMiLCAicGF0aCIsICJnZXRCYXNlRmlsZU5hbWVzIiwgImRpclBhdGgiLCAiZW50cmllcyIsICJyZWFkZGlyIiwgIndpdGhGaWxlVHlwZXMiLCAiZmlsdGVyIiwgImVudHJ5IiwgImlzRmlsZSIsICJuYW1lIiwgImVuZHNXaXRoIiwgIm1hcCIsICJiYXNlTmFtZSIsICJiYXNlbmFtZSIsICJlcnJvciIsICJlcnJvck1zZyIsICJlcnJvck1lc3NhZ2UiLCAibG9nRm9yRGVidWdnaW5nIiwgImxldmVsIiwgImxvZ0Vycm9yIiwgInRvRXJyb3IiLCAiZ2V0U2tpbGxEaXJOYW1lcyIsICJza2lsbE5hbWVzIiwgImlzRGlyZWN0b3J5IiwgImlzU3ltYm9saWNMaW5rIiwgInNraWxsRmlsZVBhdGgiLCAiam9pbiIsICJzdCIsICJzdGF0IiwgInB1c2giLCAiUGx1Z2luQ29tcG9uZW50c0Rpc3BsYXkiLCAicGx1Z2luIiwgIm1hcmtldHBsYWNlIiwgImNvbXBvbmVudHMiLCAic2V0Q29tcG9uZW50cyIsICJ1c2VTdGF0ZSIsICJsb2FkaW5nIiwgInNldExvYWRpbmciLCAic2V0RXJyb3IiLCAidXNlRWZmZWN0IiwgImxvYWRDb21wb25lbnRzIiwgImJ1aWx0aW5EZWYiLCAiZ2V0QnVpbHRpblBsdWdpbkRlZmluaXRpb24iLCAic2tpbGxzIiwgInMiLCAiaG9va0V2ZW50cyIsICJob29rcyIsICJPYmplY3QiLCAia2V5cyIsICJtY3BTZXJ2ZXJOYW1lcyIsICJtY3BTZXJ2ZXJzIiwgImNvbW1hbmRzIiwgImFnZW50cyIsICJsZW5ndGgiLCAibWFya2V0cGxhY2VEYXRhIiwgImdldE1hcmtldHBsYWNlIiwgInBsdWdpbkVudHJ5IiwgInBsdWdpbnMiLCAiZmluZCIsICJwIiwgImNvbW1hbmRQYXRoTGlzdCIsICJjb21tYW5kc1BhdGgiLCAiY29tbWFuZHNQYXRocyIsICJjb21tYW5kTGlzdCIsICJjb21tYW5kUGF0aCIsICJiYXNlTmFtZXMiLCAiYWdlbnRQYXRoTGlzdCIsICJhZ2VudHNQYXRoIiwgImFnZW50c1BhdGhzIiwgImFnZW50TGlzdCIsICJhZ2VudFBhdGgiLCAic2tpbGxQYXRoTGlzdCIsICJza2lsbHNQYXRoIiwgInNraWxsc1BhdGhzIiwgInNraWxsTGlzdCIsICJza2lsbFBhdGgiLCAic2tpbGxEaXJOYW1lcyIsICJob29rc0xpc3QiLCAiaG9va3NDb25maWciLCAibWNwU2VydmVyc0xpc3QiLCAiZXJyIiwgIkVycm9yIiwgIm1lc3NhZ2UiLCAiaGFzQ29tcG9uZW50cyIsICJBcnJheSIsICJpc0FycmF5IiwgIlN0cmluZyIsICJjaGVja0lmTG9jYWxQbHVnaW4iLCAicGx1Z2luTmFtZSIsICJtYXJrZXRwbGFjZU5hbWUiLCAic291cmNlIiwgImZpbHRlck1hbmFnZWREaXNhYmxlZFBsdWdpbnMiLCAic3BsaXQiLCAiaXNQbHVnaW5CbG9ja2VkQnlQb2xpY3kiLCAiTWFuYWdlUGx1Z2lucyIsICJzZXRWaWV3U3RhdGUiLCAic2V0UGFyZW50Vmlld1N0YXRlIiwgInNldFJlc3VsdCIsICJvbk1hbmFnZUNvbXBsZXRlIiwgIm9uU2VhcmNoTW9kZUNoYW5nZSIsICJ0YXJnZXRQbHVnaW4iLCAidGFyZ2V0TWFya2V0cGxhY2UiLCAiYWN0aW9uIiwgIm1jcENsaWVudHMiLCAidXNlQXBwU3RhdGUiLCAibWNwIiwgImNsaWVudHMiLCAibWNwVG9vbHMiLCAidG9vbHMiLCAicGx1Z2luRXJyb3JzIiwgImVycm9ycyIsICJmbGFnZ2VkUGx1Z2lucyIsICJnZXRGbGFnZ2VkUGx1Z2lucyIsICJpc1NlYXJjaE1vZGUiLCAic2V0SXNTZWFyY2hNb2RlUmF3IiwgInNldElzU2VhcmNoTW9kZSIsICJ1c2VDYWxsYmFjayIsICJhY3RpdmUiLCAiaXNUZXJtaW5hbEZvY3VzZWQiLCAidXNlVGVybWluYWxGb2N1cyIsICJjb2x1bW5zIiwgInRlcm1pbmFsV2lkdGgiLCAidXNlVGVybWluYWxTaXplIiwgInZpZXdTdGF0ZSIsICJxdWVyeSIsICJzZWFyY2hRdWVyeSIsICJzZXRRdWVyeSIsICJzZXRTZWFyY2hRdWVyeSIsICJjdXJzb3JPZmZzZXQiLCAic2VhcmNoQ3Vyc29yT2Zmc2V0IiwgInVzZVNlYXJjaElucHV0IiwgImlzQWN0aXZlIiwgIm9uRXhpdCIsICJzZWxlY3RlZFBsdWdpbiIsICJzZXRTZWxlY3RlZFBsdWdpbiIsICJtYXJrZXRwbGFjZXMiLCAic2V0TWFya2V0cGxhY2VzIiwgInBsdWdpblN0YXRlcyIsICJzZXRQbHVnaW5TdGF0ZXMiLCAicGVuZGluZ1RvZ2dsZXMiLCAic2V0UGVuZGluZ1RvZ2dsZXMiLCAiTWFwIiwgImhhc0F1dG9OYXZpZ2F0ZWQiLCAidXNlUmVmIiwgInBlbmRpbmdBdXRvQWN0aW9uUmVmIiwgInVuZGVmaW5lZCIsICJ0b2dnbGVNY3BTZXJ2ZXIiLCAidXNlTWNwVG9nZ2xlRW5hYmxlZCIsICJoYW5kbGVCYWNrIiwgInNldFByb2Nlc3NFcnJvciIsICJ0eXBlIiwgInNldENvbmZpZ05lZWRlZCIsICJjbGllbnQiLCAic2l6ZSIsICJ1c2VLZXliaW5kaW5nIiwgImNvbnRleHQiLCAiZ2V0TWNwU3RhdHVzIiwgInVuaWZpZWRJdGVtcyIsICJ1c2VNZW1vIiwgIm1lcmdlZFNldHRpbmdzIiwgImdldFNldHRpbmdzX0RFUFJFQ0FURUQiLCAicGx1Z2luTWNwTWFwIiwgInN0YXJ0c1dpdGgiLCAicGFydHMiLCAic2VydmVyTmFtZSIsICJzbGljZSIsICJleGlzdGluZyIsICJnZXQiLCAiZGlzcGxheU5hbWUiLCAic2V0IiwgInBsdWdpbnNXaXRoQ2hpbGRyZW4iLCAic3RhdGUiLCAicGx1Z2luSWQiLCAiaXNFbmFibGVkIiwgImVuYWJsZWRQbHVnaW5zIiwgImUiLCAib3JpZ2luYWxTY29wZSIsICJpc0J1aWx0aW4iLCAic2NvcGUiLCAiaXRlbSIsICJpZCIsICJkZXNjcmlwdGlvbiIsICJtYW5pZmVzdCIsICJlcnJvckNvdW50IiwgInBlbmRpbmdFbmFibGUiLCAicGVuZGluZ1VwZGF0ZSIsICJwZW5kaW5nVG9nZ2xlIiwgImNoaWxkTWNwcyIsICJtYXRjaGVkUGx1Z2luSWRzIiwgIlNldCIsICJtYXRjaGVkUGx1Z2luTmFtZXMiLCAib3JwaGFuRXJyb3JzQnlTb3VyY2UiLCAiaGFzIiwgInBsdWdpblNjb3BlcyIsICJnZXRQbHVnaW5FZGl0YWJsZVNjb3BlcyIsICJmYWlsZWRQbHVnaW5JdGVtcyIsICJwYXJzZWQiLCAicGFyc2VQbHVnaW5JZGVudGlmaWVyIiwgInJhd1Njb3BlIiwgInN0YW5kYWxvbmVNY3BzIiwgImNvbmZpZyIsICJzdGF0dXMiLCAic2NvcGVPcmRlciIsICJmbGFnZ2VkIiwgInByb2plY3QiLCAibG9jYWwiLCAidXNlciIsICJlbnRlcnByaXNlIiwgIm1hbmFnZWQiLCAiZHluYW1pYyIsICJidWlsdGluIiwgInVuaWZpZWQiLCAiaXRlbXNCeVNjb3BlIiwgImRpc3BsYXlTY29wZSIsICJpbmRlbnRlZCIsICJmYWlsZWRQbHVnaW4iLCAicmVhc29uIiwgInRleHQiLCAiZmxhZ2dlZEF0IiwgInNvcnRlZFNjb3BlcyIsICJzb3J0IiwgImEiLCAiYiIsICJpdGVtcyIsICJwbHVnaW5Hcm91cHMiLCAic3RhbmRhbG9uZU1jcHNJblNjb3BlIiwgImkiLCAiZ3JvdXAiLCAibmV4dEl0ZW0iLCAibG9jYWxlQ29tcGFyZSIsICJmbGFnZ2VkSWRzIiwgIm1hcmtGbGFnZ2VkUGx1Z2luc1NlZW4iLCAiZmlsdGVyZWRJdGVtcyIsICJsb3dlclF1ZXJ5IiwgInRvTG93ZXJDYXNlIiwgImluY2x1ZGVzIiwgInNlbGVjdGVkSW5kZXgiLCAic2V0U2VsZWN0ZWRJbmRleCIsICJwYWdpbmF0aW9uIiwgInVzZVBhZ2luYXRpb24iLCAidG90YWxJdGVtcyIsICJtYXhWaXNpYmxlIiwgImRldGFpbHNNZW51SW5kZXgiLCAic2V0RGV0YWlsc01lbnVJbmRleCIsICJpc1Byb2Nlc3NpbmciLCAic2V0SXNQcm9jZXNzaW5nIiwgInByb2Nlc3NFcnJvciIsICJjb25maWdOZWVkZWQiLCAiX2lzTG9hZGluZ0NvbmZpZyIsICJzZXRJc0xvYWRpbmdDb25maWciLCAic2VsZWN0ZWRQbHVnaW5IYXNNY3BiIiwgInNldFNlbGVjdGVkUGx1Z2luSGFzTWNwYiIsICJkZXRlY3RNY3BiIiwgIm1jcFNlcnZlcnNTcGVjIiwgImhhc01jcGIiLCAiaXNNY3BiU291cmNlIiwgInNvbWUiLCAibWFya2V0cGxhY2VEaXIiLCAibWFya2V0cGxhY2VKc29uUGF0aCIsICJjb250ZW50IiwgInJlYWRGaWxlIiwgImpzb25QYXJzZSIsICJzcGVjIiwgImxvYWRJbnN0YWxsZWRQbHVnaW5zIiwgImVuYWJsZWQiLCAiZGlzYWJsZWQiLCAibG9hZEFsbFBsdWdpbnMiLCAiYWxsUGx1Z2lucyIsICJwbHVnaW5zQnlNYXJrZXRwbGFjZSIsICJtYXJrZXRwbGFjZUluZm9zIiwgImVuYWJsZWRDb3VudCIsICJjb3VudCIsICJkaXNhYmxlZENvdW50IiwgImluc3RhbGxlZFBsdWdpbnMiLCAiYWxsU3RhdGVzIiwgImdldFBsdWdpbkluc3RhbGxhdGlvbkZyb21WMiIsICJjdXJyZW50IiwgInRhcmdldE5hbWUiLCAidGFyZ2V0TWt0RnJvbUlkIiwgImVmZmVjdGl2ZVRhcmdldE1hcmtldHBsYWNlIiwgIm1hcmtldHBsYWNlc1RvU2VhcmNoIiwgIm0iLCAicGx1Z2luU3RhdGUiLCAiZmFpbGVkSXRlbSIsICJoYW5kbGVTaW5nbGVPcGVyYXRpb24iLCAib3BlcmF0aW9uIiwgInBsdWdpblNjb3BlIiwgImlzSW5zdGFsbGFibGVTY29wZSIsICJyZXZlcnNlRGVwZW5kZW50cyIsICJlbmFibGVSZXN1bHQiLCAiZW5hYmxlUGx1Z2luT3AiLCAic3VjY2VzcyIsICJkaXNhYmxlUmVzdWx0IiwgImRpc2FibGVQbHVnaW5PcCIsICJpc1BsdWdpbkVuYWJsZWRBdFByb2plY3RTY29wZSIsICJpbnN0YWxscyIsICJsb2FkSW5zdGFsbGVkUGx1Z2luc1YyIiwgImlzTGFzdFNjb3BlIiwgImRhdGFTaXplIiwgImdldFBsdWdpbkRhdGFEaXJTaXplIiwgInJlc3VsdCIsICJ1bmluc3RhbGxQbHVnaW5PcCIsICJ1cGRhdGVQbHVnaW5PcCIsICJhbHJlYWR5VXBUb0RhdGUiLCAibmV3VmVyc2lvbiIsICJjbGVhckFsbENhY2hlcyIsICJwbHVnaW5JZE5vdyIsICJzZXR0aW5nc0FmdGVyIiwgImVuYWJsZWRBZnRlciIsICJvcGVyYXRpb25OYW1lIiwgImRlcFdhcm4iLCAiaGFuZGxlU2luZ2xlT3BlcmF0aW9uUmVmIiwgInBlbmRpbmciLCAiaGFuZGxlVG9nZ2xlIiwgImN1cnJlbnRQZW5kaW5nIiwgIm5ld1BlbmRpbmciLCAiZGVsZXRlIiwgImhhbmRsZUFjY2VwdCIsICJ1c2VLZXliaW5kaW5ncyIsICJzZWxlY3Q6cHJldmlvdXMiLCAiaGFuZGxlU2VsZWN0aW9uQ2hhbmdlIiwgInNlbGVjdDpuZXh0IiwgImhhbmRsZUZsYWdnZWREaXNtaXNzIiwgInJlbW92ZUZsYWdnZWRQbHVnaW4iLCAiZGV0YWlsc01lbnVJdGVtcyIsICJtZW51SXRlbXMiLCAibGFiZWwiLCAibG9jYWxFcnJvciIsICJuZXdTdGF0ZXMiLCAiaW5kZXgiLCAiZmluZEluZGV4IiwgIm1jcGJQYXRoIiwgImxvYWRNY3BiRmlsZSIsICJ1c2VyQ29uZmlnIiwgInNjaGVtYSIsICJob21lcGFnZSIsICJvcGVuQnJvd3NlciIsICJyZXBvc2l0b3J5IiwgInNlbGVjdDphY2NlcHQiLCAiZWRpdGFibGVTb3VyY2VzIiwgInNldHRpbmdzIiwgImdldFNldHRpbmdzRm9yU291cmNlIiwgInVwZGF0ZVNldHRpbmdzRm9yU291cmNlIiwgImNvbmZpcm06eWVzIiwgImNvbmZpcm06bm8iLCAidXNlSW5wdXQiLCAiaW5wdXQiLCAia2V5IiwgImRvVW5pbnN0YWxsIiwgImRlbGV0ZURhdGFEaXIiLCAic3VmZml4IiwgImZpZ3VyZXMiLCAidGljayIsICJlc2NhcGUiLCAiUmVhY3QiLCAia2V5SXNOb3RDdHJsT3JNZXRhIiwgImN0cmwiLCAibWV0YSIsICJ0ZXN0IiwgImZpbmlzaCIsICJtc2ciLCAib3V0Y29tZSIsICJkZXRhaWwiLCAibG9hZFBsdWdpbk9wdGlvbnMiLCAidmFsdWVzIiwgInNhdmVQbHVnaW5PcHRpb25zIiwgImhhbmRsZUNhbmNlbCIsICJoYW5kbGVTYXZlIiwgImNvbmZpZ1NjaGVtYSIsICJleGlzdGluZ0NvbmZpZyIsICJmcCIsICJEYXRlIiwgInRvTG9jYWxlRGF0ZVN0cmluZyIsICJwb2ludGVyIiwgImh1bWFuIiwgInBsdWdpbkRhdGFEaXJQYXRoIiwgImZpbHRlcmVkUGx1Z2luRXJyb3JzIiwgInBsdWdpbkVycm9yc1NlY3Rpb24iLCAicGx1cmFsIiwgImd1aWRhbmNlIiwgImdldEVycm9yR3VpZGFuY2UiLCAiZm9ybWF0RXJyb3JNZXNzYWdlIiwgImFycm93UmlnaHQiLCAidmVyc2lvbiIsICJhdXRob3IiLCAiaXNTZWxlY3RlZCIsICJmaXJzdEVycm9yIiwgInNlcnZlclRvb2xzQ291bnQiLCAiZmlsdGVyVG9vbHNCeVNlcnZlciIsICJoYW5kbGVNY3BWaWV3VG9vbHMiLCAiaGFuZGxlTWNwQ2FuY2VsIiwgImhhbmRsZU1jcENvbXBsZXRlIiwgImNvbmZpZ1R5cGUiLCAic2VydmVyIiwgInRyYW5zcG9ydCIsICJpc0F1dGhlbnRpY2F0ZWQiLCAidG9vbCIsICJ2aXNpYmxlSXRlbXMiLCAiZ2V0VmlzaWJsZUl0ZW1zIiwgInNjcm9sbFBvc2l0aW9uIiwgImNhblNjcm9sbFVwIiwgImFycm93VXAiLCAidmlzaWJsZUluZGV4IiwgImFjdHVhbEluZGV4IiwgInRvQWN0dWFsSW5kZXgiLCAicHJldkl0ZW0iLCAic2hvd1Njb3BlSGVhZGVyIiwgImdldFNjb3BlTGFiZWwiLCAiY2FuU2Nyb2xsRG93biIsICJhcnJvd0Rvd24iLCAiVmFsaWRhdGVQbHVnaW4iLCAidDAiLCAiJCIsICJfYyIsICJvbkNvbXBsZXRlIiwgInBhdGgiLCAidDEiLCAidDIiLCAicnVuVmFsaWRhdGlvbiIsICJyZXN1bHQiLCAidmFsaWRhdGVNYW5pZmVzdCIsICJvdXRwdXQiLCAiZmlsZVR5cGUiLCAiZmlsZVBhdGgiLCAiZXJyb3JzIiwgImxlbmd0aCIsICJmaWd1cmVzIiwgImNyb3NzIiwgInBsdXJhbCIsICJmb3JFYWNoIiwgImVycm9yXzAiLCAicG9pbnRlciIsICJlcnJvciIsICJtZXNzYWdlIiwgIndhcm5pbmdzIiwgIndhcm5pbmciLCAic3VjY2VzcyIsICJ0aWNrIiwgInByb2Nlc3MiLCAiZXhpdENvZGUiLCAidDMiLCAibG9nRXJyb3IiLCAiZXJyb3JNZXNzYWdlIiwgInVzZUVmZmVjdCIsICJTeW1ib2wiLCAiZm9yIiwgIk1hcmtldHBsYWNlTGlzdCIsICJ0MCIsICIkIiwgIl9jIiwgIm9uQ29tcGxldGUiLCAidDEiLCAidDIiLCAibG9hZExpc3QiLCAiY29uZmlnIiwgImxvYWRLbm93bk1hcmtldHBsYWNlc0NvbmZpZyIsICJuYW1lcyIsICJPYmplY3QiLCAia2V5cyIsICJsZW5ndGgiLCAibWFwIiwgIl90ZW1wIiwgImpvaW4iLCAidDMiLCAiZXJyIiwgImVycm9yTWVzc2FnZSIsICJ1c2VFZmZlY3QiLCAiU3ltYm9sIiwgImZvciIsICJuIiwgIk1jcFJlZGlyZWN0QmFubmVyIiwgImdldEV4dHJhTWFya2V0cGxhY2VTb3VyY2VJbmZvIiwgIm5hbWUiLCAiZWRpdGFibGVTb3VyY2VzIiwgInNvdXJjZXNUb0NoZWNrIiwgInNvdXJjZSIsICJzY29wZSIsICJzZXR0aW5ncyIsICJnZXRTZXR0aW5nc0ZvclNvdXJjZSIsICJleHRyYUtub3duTWFya2V0cGxhY2VzIiwgInB1c2giLCAicG9saWN5U2V0dGluZ3MiLCAiaXNJblBvbGljeSIsICJCb29sZWFuIiwgImJ1aWxkTWFya2V0cGxhY2VBY3Rpb24iLCAia2luZCIsICJzb3VyY2VzIiwgInRhYiIsICJ2aWV3U3RhdGUiLCAidHlwZSIsICJ0YXJnZXRNYXJrZXRwbGFjZSIsICJhY3Rpb24iLCAiYnVpbGRQbHVnaW5BY3Rpb24iLCAicGx1Z2luTmFtZSIsICJ0YXJnZXRQbHVnaW4iLCAiaXNUcmFuc2llbnRFcnJvciIsICJlcnJvciIsICJUUkFOU0lFTlRfRVJST1JfVFlQRVMiLCAiaGFzIiwgImdldFBsdWdpbk5hbWVGcm9tRXJyb3IiLCAicGx1Z2luSWQiLCAicGx1Z2luIiwgImluY2x1ZGVzIiwgInNwbGl0IiwgInVuZGVmaW5lZCIsICJidWlsZEVycm9yUm93cyIsICJmYWlsZWRNYXJrZXRwbGFjZXMiLCAiZXh0cmFNYXJrZXRwbGFjZUVycm9ycyIsICJwbHVnaW5Mb2FkaW5nRXJyb3JzIiwgIm90aGVyRXJyb3JzIiwgImJyb2tlbkluc3RhbGxlZE1hcmtldHBsYWNlcyIsICJ0cmFuc2llbnRFcnJvcnMiLCAicGx1Z2luU2NvcGVzIiwgInJvd3MiLCAibGFiZWwiLCAibWVzc2FnZSIsICJmb3JtYXRFcnJvck1lc3NhZ2UiLCAiZ3VpZGFuY2UiLCAic2hvd25NYXJrZXRwbGFjZU5hbWVzIiwgIlNldCIsICJtIiwgImFkZCIsICJzb3VyY2VJbmZvIiwgImUiLCAibWFya2V0cGxhY2UiLCAiZ2V0RXJyb3JHdWlkYW5jZSIsICJzaG93blBsdWdpbk5hbWVzIiwgImdldCIsICJyZW1vdmVFeHRyYU1hcmtldHBsYWNlIiwgInVwZGF0ZXMiLCAiZW5hYmxlZFBsdWdpbnMiLCAic3VmZml4IiwgInJlbW92ZWRQbHVnaW5zIiwgInVwZGF0ZWRQbHVnaW5zIiwgImVuZHNXaXRoIiwgInVwZGF0ZVNldHRpbmdzRm9yU291cmNlIiwgIkVycm9yc1RhYkNvbnRlbnQiLCAic2V0Vmlld1N0YXRlIiwgInNldEFjdGl2ZVRhYiIsICJtYXJrUGx1Z2luc0NoYW5nZWQiLCAiZXJyb3JzIiwgInVzZUFwcFN0YXRlIiwgIl90ZW1wMiIsICJpbnN0YWxsYXRpb25TdGF0dXMiLCAiX3RlbXAzIiwgInNldEFwcFN0YXRlIiwgInVzZVNldEFwcFN0YXRlIiwgInNlbGVjdGVkSW5kZXgiLCAic2V0U2VsZWN0ZWRJbmRleCIsICJ1c2VTdGF0ZSIsICJhY3Rpb25NZXNzYWdlIiwgInNldEFjdGlvbk1lc3NhZ2UiLCAibWFya2V0cGxhY2VMb2FkRmFpbHVyZXMiLCAic2V0TWFya2V0cGxhY2VMb2FkRmFpbHVyZXMiLCAiZmFpbHVyZXMiLCAibG9hZE1hcmtldHBsYWNlc1dpdGhHcmFjZWZ1bERlZ3JhZGF0aW9uIiwgIm1hcmtldHBsYWNlcyIsICJmaWx0ZXIiLCAiX3RlbXA0IiwgImZhaWxlZE1hcmtldHBsYWNlTmFtZXMiLCAiX3RlbXA1IiwgIl90ZW1wNiIsICJfdGVtcDciLCAiZ2V0UGx1Z2luRWRpdGFibGVTY29wZXMiLCAidDQiLCAidDUiLCAiY29udGV4dCIsICJ1c2VLZXliaW5kaW5nIiwgImhhbmRsZVNlbGVjdCIsICJyb3ciLCAiYmI3NyIsICJzY29wZXMiLCAiX3RlbXA4IiwgImNsZWFyQWxsQ2FjaGVzIiwgInByZXZfMCIsICJwcmV2IiwgInBsdWdpbnMiLCAiZV8yIiwgIm1fMSIsICJmaWd1cmVzIiwgInRpY2siLCAicmVtb3ZlTWFya2V0cGxhY2VTb3VyY2UiLCAiZiIsICJ0NiIsICJFcnJvciIsICJTdHJpbmciLCAidDciLCAiX3RlbXA5IiwgInQ4IiwgInQ5IiwgImlzQWN0aXZlIiwgInVzZUtleWJpbmRpbmdzIiwgInNlbGVjdDpuZXh0IiwgInByZXZfMiIsICJNYXRoIiwgIm1pbiIsICJjbGFtcGVkSW5kZXgiLCAibWF4IiwgInNlbGVjdGVkQWN0aW9uIiwgImhhc0FjdGlvbiIsICJ0MTAiLCAidDExIiwgIlQwIiwgIkJveCIsICJyb3dfMCIsICJpZHgiLCAiaXNTZWxlY3RlZCIsICJwb2ludGVyIiwgImNyb3NzIiwgInQxMiIsICJ0MTMiLCAidDE0IiwgInQxNSIsICJ0MTYiLCAidDE3IiwgInQxOCIsICJwcmV2XzEiLCAic18xIiwgInMiLCAiZV8xIiwgImVfMCIsICJtXzAiLCAic3RhdHVzIiwgInNfMCIsICJnZXRJbml0aWFsVmlld1N0YXRlIiwgInBhcnNlZENvbW1hbmQiLCAicGF0aCIsICJpbml0aWFsVmFsdWUiLCAidGFyZ2V0IiwgImdldEluaXRpYWxUYWIiLCAiUGx1Z2luU2V0dGluZ3MiLCAiYXJncyIsICJzaG93TWNwUmVkaXJlY3RNZXNzYWdlIiwgInBhcnNlUGx1Z2luQXJncyIsICJpbml0aWFsVmlld1N0YXRlIiwgImFjdGl2ZVRhYiIsICJpbnB1dFZhbHVlIiwgInNldElucHV0VmFsdWUiLCAiY3Vyc29yT2Zmc2V0IiwgInNldEN1cnNvck9mZnNldCIsICJzZXRFcnJvciIsICJyZXN1bHQiLCAic2V0UmVzdWx0IiwgImNoaWxkU2VhcmNoQWN0aXZlIiwgInNldENoaWxkU2VhcmNoQWN0aXZlIiwgInBsdWdpbkVycm9yQ291bnQiLCAiX3RlbXAwIiwgImVycm9yc1RhYlRpdGxlIiwgImV4aXRTdGF0ZSIsICJ1c2VFeGl0T25DdHJsQ0RXaXRoS2V5YmluZGluZ3MiLCAiY2xpTW9kZSIsICJfdGVtcDEiLCAidGFiSWQiLCAiYmIzNyIsICJoYW5kbGVUYWJDaGFuZ2UiLCAiaGFuZGxlQWRkTWFya2V0cGxhY2VFc2NhcGUiLCAidDE5IiwgInQyMCIsICJ0MjEiLCAidDIyIiwgInQyMyIsICJ0MjQiLCAidDI1IiwgInQyNiIsICJ0MjciLCAibmVlZHNSZWZyZXNoIiwgImNvdW50Il0KfQo=
