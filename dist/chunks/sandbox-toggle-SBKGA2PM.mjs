#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  Tab,
  Tabs,
  init_Tabs,
  useTabHeaderFocus
} from "./chunk-4UI52COE.mjs";
import "./chunk-W3RVSZTP.mjs";
import {
  SandboxManager,
  Select,
  addToExcludedCommands,
  init_sandbox_adapter,
  init_select,
  shouldAllowManagedSandboxDomainsOnly
} from "./chunk-BQ2W5UUK.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-UPQJMBLU.mjs";
import "./chunk-JWBPLKI2.mjs";
import "./chunk-B5LIYBEU.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-IVRFWWJD.mjs";
import "./chunk-WFZ47W7F.mjs";
import "./chunk-3MNWUNDS.mjs";
import {
  Pane,
  init_Pane,
  init_useKeybinding,
  useKeybindings
} from "./chunk-36ZVP56J.mjs";
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
  Link,
  ThemedBox_default,
  ThemedText,
  c,
  color,
  init_ink,
  init_react_compiler_runtime,
  useTheme
} from "./chunk-ZFJCSCYD.mjs";
import {
  createElement,
  init_react,
  react_default
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-H3V45RZC.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  getSettingsFilePathForSource,
  getSettings_DEPRECATED,
  init_settings2 as init_settings
} from "./chunk-JQ55XPLZ.mjs";
import "./chunk-LNPDZCDV.mjs";
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
import "./chunk-M5NTYAY2.mjs";
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
import "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import "./chunk-OU3SZVVB.mjs";
import {
  getCwdState,
  init_state
} from "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/components/sandbox/SandboxConfigTab.tsx
function SandboxConfigTab() {
  const $ = c(3);
  const isEnabled = SandboxManager.isSandboxingEnabled();
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    const depCheck = SandboxManager.checkDependencies();
    t0 = depCheck.warnings.length > 0 ? /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1, flexDirection: "column" }, depCheck.warnings.map(_temp)) : null;
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  const warningsNote = t0;
  if (!isEnabled) {
    let t12;
    if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t12 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", paddingY: 1 }, /* @__PURE__ */ createElement(ThemedText, { color: "subtle" }, "Sandbox is not enabled"), warningsNote);
      $[1] = t12;
    } else {
      t12 = $[1];
    }
    return t12;
  }
  let t1;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    const fsReadConfig = SandboxManager.getFsReadConfig();
    const fsWriteConfig = SandboxManager.getFsWriteConfig();
    const networkConfig = SandboxManager.getNetworkRestrictionConfig();
    const allowUnixSockets = SandboxManager.getAllowUnixSockets();
    const excludedCommands = SandboxManager.getExcludedCommands();
    const globPatternWarnings = SandboxManager.getLinuxGlobPatternWarnings();
    t1 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", paddingY: 1 }, /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, { bold: true, color: "permission" }, "Excluded Commands:"), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, excludedCommands.length > 0 ? excludedCommands.join(", ") : "None")), fsReadConfig.denyOnly.length > 0 && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1, flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, { bold: true, color: "permission" }, "Filesystem Read Restrictions:"), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Denied: ", fsReadConfig.denyOnly.join(", ")), fsReadConfig.allowWithinDeny && fsReadConfig.allowWithinDeny.length > 0 && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Allowed within denied: ", fsReadConfig.allowWithinDeny.join(", "))), fsWriteConfig.allowOnly.length > 0 && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1, flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, { bold: true, color: "permission" }, "Filesystem Write Restrictions:"), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Allowed: ", fsWriteConfig.allowOnly.join(", ")), fsWriteConfig.denyWithinAllow.length > 0 && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Denied within allowed: ", fsWriteConfig.denyWithinAllow.join(", "))), (networkConfig.allowedHosts && networkConfig.allowedHosts.length > 0 || networkConfig.deniedHosts && networkConfig.deniedHosts.length > 0) && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1, flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, { bold: true, color: "permission" }, "Network Restrictions", shouldAllowManagedSandboxDomainsOnly() ? " (Managed)" : "", ":"), networkConfig.allowedHosts && networkConfig.allowedHosts.length > 0 && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Allowed: ", networkConfig.allowedHosts.join(", ")), networkConfig.deniedHosts && networkConfig.deniedHosts.length > 0 && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Denied: ", networkConfig.deniedHosts.join(", "))), allowUnixSockets && allowUnixSockets.length > 0 && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1, flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, { bold: true, color: "permission" }, "Allowed Unix Sockets:"), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, allowUnixSockets.join(", "))), globPatternWarnings.length > 0 && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1, flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, { bold: true, color: "warning" }, "\u26A0 Warning: Glob patterns not fully supported on Linux"), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "The following patterns will be ignored:", " ", globPatternWarnings.slice(0, 3).join(", "), globPatternWarnings.length > 3 && ` (${globPatternWarnings.length - 3} more)`)), warningsNote);
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  return t1;
}
function _temp(w, i) {
  return /* @__PURE__ */ createElement(ThemedText, { key: i, dimColor: true }, w);
}
var init_SandboxConfigTab = __esm({
  "src/components/sandbox/SandboxConfigTab.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_sandbox_adapter();
  }
});

// src/components/sandbox/SandboxDependenciesTab.tsx
function SandboxDependenciesTab(t0) {
  const $ = c(24);
  const {
    depCheck
  } = t0;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = getPlatform();
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const platform = t1;
  const isMac = platform === "macos";
  let t2;
  if ($[1] !== depCheck.errors) {
    t2 = depCheck.errors.some(_temp6);
    $[1] = depCheck.errors;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  const rgMissing = t2;
  let t3;
  if ($[3] !== depCheck.errors) {
    t3 = depCheck.errors.some(_temp2);
    $[3] = depCheck.errors;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  const bwrapMissing = t3;
  let t4;
  if ($[5] !== depCheck.errors) {
    t4 = depCheck.errors.some(_temp3);
    $[5] = depCheck.errors;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  const socatMissing = t4;
  const seccompMissing = depCheck.warnings.length > 0;
  let t5;
  if ($[7] !== bwrapMissing || $[8] !== depCheck.errors || $[9] !== rgMissing || $[10] !== seccompMissing || $[11] !== socatMissing) {
    const otherErrors = depCheck.errors.filter(_temp4);
    const rgInstallHint = isMac ? "brew install ripgrep" : "apt install ripgrep";
    let t6;
    if ($[13] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t6 = isMac && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, null, "seatbelt: ", /* @__PURE__ */ react_default.createElement(ThemedText, { color: "success" }, "built-in (macOS)")));
      $[13] = t6;
    } else {
      t6 = $[13];
    }
    let t7;
    let t8;
    if ($[14] !== rgMissing) {
      t7 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "ripgrep (rg):", " ", rgMissing ? /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, "not found") : /* @__PURE__ */ react_default.createElement(ThemedText, { color: "success" }, "found"));
      t8 = rgMissing && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "  ", "\xB7 ", rgInstallHint);
      $[14] = rgMissing;
      $[15] = t7;
      $[16] = t8;
    } else {
      t7 = $[15];
      t8 = $[16];
    }
    let t9;
    if ($[17] !== t7 || $[18] !== t8) {
      t9 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, t7, t8);
      $[17] = t7;
      $[18] = t8;
      $[19] = t9;
    } else {
      t9 = $[19];
    }
    let t10;
    if ($[20] !== bwrapMissing || $[21] !== seccompMissing || $[22] !== socatMissing) {
      t10 = !isMac && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, null, "bubblewrap (bwrap):", " ", bwrapMissing ? /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, "not installed") : /* @__PURE__ */ react_default.createElement(ThemedText, { color: "success" }, "installed")), bwrapMissing && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "  ", "\xB7 apt install bubblewrap")), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, null, "socat:", " ", socatMissing ? /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, "not installed") : /* @__PURE__ */ react_default.createElement(ThemedText, { color: "success" }, "installed")), socatMissing && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "  ", "\xB7 apt install socat")), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, null, "seccomp filter:", " ", seccompMissing ? /* @__PURE__ */ react_default.createElement(ThemedText, { color: "warning" }, "not installed") : /* @__PURE__ */ react_default.createElement(ThemedText, { color: "success" }, "installed"), seccompMissing && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, " (required to block unix domain sockets)")), seccompMissing && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "  ", "\xB7 npm install -g @anthropic-ai/sandbox-runtime"), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "  ", "\xB7 or copy vendor/seccomp/* from sandbox-runtime and set"), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "    ", "sandbox.seccomp.bpfPath and applyPath in settings.json"))));
      $[20] = bwrapMissing;
      $[21] = seccompMissing;
      $[22] = socatMissing;
      $[23] = t10;
    } else {
      t10 = $[23];
    }
    t5 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", paddingY: 1, gap: 1 }, t6, t9, t10, otherErrors.map(_temp5));
    $[7] = bwrapMissing;
    $[8] = depCheck.errors;
    $[9] = rgMissing;
    $[10] = seccompMissing;
    $[11] = socatMissing;
    $[12] = t5;
  } else {
    t5 = $[12];
  }
  return t5;
}
function _temp5(err) {
  return /* @__PURE__ */ react_default.createElement(ThemedText, { key: err, color: "error" }, err);
}
function _temp4(e_2) {
  return !e_2.includes("ripgrep") && !e_2.includes("bwrap") && !e_2.includes("socat");
}
function _temp3(e_1) {
  return e_1.includes("socat");
}
function _temp2(e_0) {
  return e_0.includes("bwrap");
}
function _temp6(e) {
  return e.includes("ripgrep");
}
var init_SandboxDependenciesTab = __esm({
  "src/components/sandbox/SandboxDependenciesTab.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_platform();
  }
});

// src/components/sandbox/SandboxOverridesTab.tsx
function SandboxOverridesTab(t0) {
  const $ = c(5);
  const {
    onComplete
  } = t0;
  const isEnabled = SandboxManager.isSandboxingEnabled();
  const isLocked = SandboxManager.areSandboxSettingsLockedByPolicy();
  const currentAllowUnsandboxed = SandboxManager.areUnsandboxedCommandsAllowed();
  if (!isEnabled) {
    let t12;
    if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t12 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", paddingY: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "subtle" }, "Sandbox is not enabled. Enable sandbox to configure override settings."));
      $[0] = t12;
    } else {
      t12 = $[0];
    }
    return t12;
  }
  if (isLocked) {
    let t12;
    if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t12 = /* @__PURE__ */ react_default.createElement(ThemedText, { color: "subtle" }, "Override settings are managed by a higher-priority configuration and cannot be changed locally.");
      $[1] = t12;
    } else {
      t12 = $[1];
    }
    let t2;
    if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t2 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", paddingY: 1 }, t12, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Current setting:", " ", currentAllowUnsandboxed ? "Allow unsandboxed fallback" : "Strict sandbox mode")));
      $[2] = t2;
    } else {
      t2 = $[2];
    }
    return t2;
  }
  let t1;
  if ($[3] !== onComplete) {
    t1 = /* @__PURE__ */ react_default.createElement(OverridesSelect, { onComplete, currentMode: currentAllowUnsandboxed ? "open" : "closed" });
    $[3] = onComplete;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  return t1;
}
function OverridesSelect(t0) {
  const $ = c(25);
  const {
    onComplete,
    currentMode
  } = t0;
  const [theme] = useTheme();
  const {
    headerFocused,
    focusHeader
  } = useTabHeaderFocus();
  let t1;
  if ($[0] !== theme) {
    t1 = color("success", theme)("(current)");
    $[0] = theme;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const currentIndicator = t1;
  const t2 = currentMode === "open" ? `Allow unsandboxed fallback ${currentIndicator}` : "Allow unsandboxed fallback";
  let t3;
  if ($[2] !== t2) {
    t3 = {
      label: t2,
      value: "open"
    };
    $[2] = t2;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  const t4 = currentMode === "closed" ? `Strict sandbox mode ${currentIndicator}` : "Strict sandbox mode";
  let t5;
  if ($[4] !== t4) {
    t5 = {
      label: t4,
      value: "closed"
    };
    $[4] = t4;
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  let t6;
  if ($[6] !== t3 || $[7] !== t5) {
    t6 = [t3, t5];
    $[6] = t3;
    $[7] = t5;
    $[8] = t6;
  } else {
    t6 = $[8];
  }
  const options = t6;
  let t7;
  if ($[9] !== onComplete) {
    t7 = async function handleSelect2(value) {
      const mode = value;
      await SandboxManager.setSandboxSettings({
        allowUnsandboxedCommands: mode === "open"
      });
      const message = mode === "open" ? "\u2713 Unsandboxed fallback allowed - commands can run outside sandbox when necessary" : "\u2713 Strict sandbox mode - all commands must run in sandbox or be excluded via the `excludedCommands` option";
      onComplete(message);
    };
    $[9] = onComplete;
    $[10] = t7;
  } else {
    t7 = $[10];
  }
  const handleSelect = t7;
  let t8;
  if ($[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Configure Overrides:"));
    $[11] = t8;
  } else {
    t8 = $[11];
  }
  let t9;
  if ($[12] !== onComplete) {
    t9 = () => onComplete(void 0, {
      display: "skip"
    });
    $[12] = onComplete;
    $[13] = t9;
  } else {
    t9 = $[13];
  }
  let t10;
  if ($[14] !== focusHeader || $[15] !== handleSelect || $[16] !== headerFocused || $[17] !== options || $[18] !== t9) {
    t10 = /* @__PURE__ */ react_default.createElement(Select, { options, onChange: handleSelect, onCancel: t9, onUpFromFirstItem: focusHeader, isDisabled: headerFocused });
    $[14] = focusHeader;
    $[15] = handleSelect;
    $[16] = headerFocused;
    $[17] = options;
    $[18] = t9;
    $[19] = t10;
  } else {
    t10 = $[19];
  }
  let t11;
  if ($[20] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t11 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true, dimColor: true }, "Allow unsandboxed fallback:"), " ", "When a command fails due to sandbox restrictions, Claude can retry with dangerouslyDisableSandbox to run outside the sandbox (falling back to default permissions).");
    $[20] = t11;
  } else {
    t11 = $[20];
  }
  let t12;
  if ($[21] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t12 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true, dimColor: true }, "Strict sandbox mode:"), " ", "All bash commands invoked by the model must run in the sandbox unless they are explicitly listed in excludedCommands.");
    $[21] = t12;
  } else {
    t12 = $[21];
  }
  let t13;
  if ($[22] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t13 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginTop: 1, gap: 1 }, t11, t12, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Learn more:", " ", /* @__PURE__ */ react_default.createElement(Link, { url: "https://code.claude.com/docs/en/sandboxing#configure-sandboxing" }, "code.claude.com/docs/en/sandboxing#configure-sandboxing")));
    $[22] = t13;
  } else {
    t13 = $[22];
  }
  let t14;
  if ($[23] !== t10) {
    t14 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", paddingY: 1 }, t8, t10, t13);
    $[23] = t10;
    $[24] = t14;
  } else {
    t14 = $[24];
  }
  return t14;
}
var init_SandboxOverridesTab = __esm({
  "src/components/sandbox/SandboxOverridesTab.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_sandbox_adapter();
    init_select();
    init_Tabs();
  }
});

// src/components/sandbox/SandboxSettings.tsx
function SandboxSettings(t0) {
  const $ = c(34);
  const {
    onComplete,
    depCheck
  } = t0;
  const [theme] = useTheme();
  const currentEnabled = SandboxManager.isSandboxingEnabled();
  const currentAutoAllow = SandboxManager.isAutoAllowBashIfSandboxedEnabled();
  const hasWarnings = depCheck.warnings.length > 0;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = getSettings_DEPRECATED();
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const settings = t1;
  const allowAllUnixSockets = settings.sandbox?.network?.allowAllUnixSockets;
  const showSocketWarning = hasWarnings && !allowAllUnixSockets;
  const getCurrentMode = () => {
    if (!currentEnabled) {
      return "disabled";
    }
    if (currentAutoAllow) {
      return "auto-allow";
    }
    return "regular";
  };
  const currentMode = getCurrentMode();
  let t2;
  if ($[1] !== theme) {
    t2 = color("success", theme)("(current)");
    $[1] = theme;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  const currentIndicator = t2;
  const t3 = currentMode === "auto-allow" ? `Sandbox BashTool, with auto-allow ${currentIndicator}` : "Sandbox BashTool, with auto-allow";
  let t4;
  if ($[3] !== t3) {
    t4 = {
      label: t3,
      value: "auto-allow"
    };
    $[3] = t3;
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  const t5 = currentMode === "regular" ? `Sandbox BashTool, with regular permissions ${currentIndicator}` : "Sandbox BashTool, with regular permissions";
  let t6;
  if ($[5] !== t5) {
    t6 = {
      label: t5,
      value: "regular"
    };
    $[5] = t5;
    $[6] = t6;
  } else {
    t6 = $[6];
  }
  const t7 = currentMode === "disabled" ? `No Sandbox ${currentIndicator}` : "No Sandbox";
  let t8;
  if ($[7] !== t7) {
    t8 = {
      label: t7,
      value: "disabled"
    };
    $[7] = t7;
    $[8] = t8;
  } else {
    t8 = $[8];
  }
  let t9;
  if ($[9] !== t4 || $[10] !== t6 || $[11] !== t8) {
    t9 = [t4, t6, t8];
    $[9] = t4;
    $[10] = t6;
    $[11] = t8;
    $[12] = t9;
  } else {
    t9 = $[12];
  }
  const options = t9;
  let t10;
  if ($[13] !== onComplete) {
    t10 = async function handleSelect2(value) {
      const mode = value;
      bb33: switch (mode) {
        case "auto-allow": {
          await SandboxManager.setSandboxSettings({
            enabled: true,
            autoAllowBashIfSandboxed: true
          });
          onComplete("\u2713 Sandbox enabled with auto-allow for bash commands");
          break bb33;
        }
        case "regular": {
          await SandboxManager.setSandboxSettings({
            enabled: true,
            autoAllowBashIfSandboxed: false
          });
          onComplete("\u2713 Sandbox enabled with regular bash permissions");
          break bb33;
        }
        case "disabled": {
          await SandboxManager.setSandboxSettings({
            enabled: false,
            autoAllowBashIfSandboxed: false
          });
          onComplete("\u25CB Sandbox disabled");
        }
      }
    };
    $[13] = onComplete;
    $[14] = t10;
  } else {
    t10 = $[14];
  }
  const handleSelect = t10;
  let t11;
  if ($[15] !== onComplete) {
    t11 = {
      "confirm:no": () => onComplete(void 0, {
        display: "skip"
      })
    };
    $[15] = onComplete;
    $[16] = t11;
  } else {
    t11 = $[16];
  }
  let t12;
  if ($[17] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t12 = {
      context: "Settings"
    };
    $[17] = t12;
  } else {
    t12 = $[17];
  }
  useKeybindings(t11, t12);
  let t13;
  if ($[18] !== handleSelect || $[19] !== onComplete || $[20] !== options || $[21] !== showSocketWarning) {
    t13 = /* @__PURE__ */ react_default.createElement(Tab, { key: "mode", title: "Mode" }, /* @__PURE__ */ react_default.createElement(SandboxModeTab, { showSocketWarning, options, onSelect: handleSelect, onComplete }));
    $[18] = handleSelect;
    $[19] = onComplete;
    $[20] = options;
    $[21] = showSocketWarning;
    $[22] = t13;
  } else {
    t13 = $[22];
  }
  const modeTab = t13;
  let t14;
  if ($[23] !== onComplete) {
    t14 = /* @__PURE__ */ react_default.createElement(Tab, { key: "overrides", title: "Overrides" }, /* @__PURE__ */ react_default.createElement(SandboxOverridesTab, { onComplete }));
    $[23] = onComplete;
    $[24] = t14;
  } else {
    t14 = $[24];
  }
  const overridesTab = t14;
  let t15;
  if ($[25] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t15 = /* @__PURE__ */ react_default.createElement(Tab, { key: "config", title: "Config" }, /* @__PURE__ */ react_default.createElement(SandboxConfigTab, null));
    $[25] = t15;
  } else {
    t15 = $[25];
  }
  const configTab = t15;
  const hasErrors = depCheck.errors.length > 0;
  let t16;
  if ($[26] !== depCheck || $[27] !== hasErrors || $[28] !== hasWarnings || $[29] !== modeTab || $[30] !== overridesTab) {
    t16 = hasErrors ? [/* @__PURE__ */ react_default.createElement(Tab, { key: "dependencies", title: "Dependencies" }, /* @__PURE__ */ react_default.createElement(SandboxDependenciesTab, { depCheck }))] : [modeTab, ...hasWarnings ? [/* @__PURE__ */ react_default.createElement(Tab, { key: "dependencies", title: "Dependencies" }, /* @__PURE__ */ react_default.createElement(SandboxDependenciesTab, { depCheck }))] : [], overridesTab, configTab];
    $[26] = depCheck;
    $[27] = hasErrors;
    $[28] = hasWarnings;
    $[29] = modeTab;
    $[30] = overridesTab;
    $[31] = t16;
  } else {
    t16 = $[31];
  }
  const tabs = t16;
  let t17;
  if ($[32] !== tabs) {
    t17 = /* @__PURE__ */ react_default.createElement(Pane, { color: "permission" }, /* @__PURE__ */ react_default.createElement(Tabs, { title: "Sandbox:", color: "permission", defaultTab: "Mode" }, tabs));
    $[32] = tabs;
    $[33] = t17;
  } else {
    t17 = $[33];
  }
  return t17;
}
function SandboxModeTab(t0) {
  const $ = c(16);
  const {
    showSocketWarning,
    options,
    onSelect,
    onComplete
  } = t0;
  const {
    headerFocused,
    focusHeader
  } = useTabHeaderFocus();
  let t1;
  if ($[0] !== showSocketWarning) {
    t1 = showSocketWarning && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "warning" }, "Cannot block unix domain sockets (see Dependencies tab)"));
    $[0] = showSocketWarning;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Configure Mode:"));
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] !== onComplete) {
    t3 = () => onComplete(void 0, {
      display: "skip"
    });
    $[3] = onComplete;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] !== focusHeader || $[6] !== headerFocused || $[7] !== onSelect || $[8] !== options || $[9] !== t3) {
    t4 = /* @__PURE__ */ react_default.createElement(Select, { options, onChange: onSelect, onCancel: t3, onUpFromFirstItem: focusHeader, isDisabled: headerFocused });
    $[5] = focusHeader;
    $[6] = headerFocused;
    $[7] = onSelect;
    $[8] = options;
    $[9] = t3;
    $[10] = t4;
  } else {
    t4 = $[10];
  }
  let t5;
  if ($[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true, dimColor: true }, "Auto-allow mode:"), " ", "Commands will try to run in the sandbox automatically, and attempts to run outside of the sandbox fallback to regular permissions. Explicit ask/deny rules are always respected.");
    $[11] = t5;
  } else {
    t5 = $[11];
  }
  let t6;
  if ($[12] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginTop: 1, gap: 1 }, t5, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Learn more:", " ", /* @__PURE__ */ react_default.createElement(Link, { url: "https://code.claude.com/docs/en/sandboxing" }, "code.claude.com/docs/en/sandboxing")));
    $[12] = t6;
  } else {
    t6 = $[12];
  }
  let t7;
  if ($[13] !== t1 || $[14] !== t4) {
    t7 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", paddingY: 1 }, t1, t2, t4, t6);
    $[13] = t1;
    $[14] = t4;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  return t7;
}
var init_SandboxSettings = __esm({
  "src/components/sandbox/SandboxSettings.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_useKeybinding();
    init_sandbox_adapter();
    init_settings();
    init_select();
    init_Pane();
    init_Tabs();
    init_SandboxConfigTab();
    init_SandboxDependenciesTab();
    init_SandboxOverridesTab();
  }
});

// src/commands/sandbox-toggle/sandbox-toggle.tsx
import { relative } from "path";
async function call(onDone, _context, args) {
  const settings = getSettings_DEPRECATED();
  const themeName = settings.theme || "light";
  const platform = getPlatform();
  if (!SandboxManager.isSupportedPlatform()) {
    const errorMessage = platform === "wsl" ? "Error: Sandboxing requires WSL2. WSL1 is not supported." : "Error: Sandboxing is currently only supported on macOS, Linux, and WSL2.";
    const message = color("error", themeName)(errorMessage);
    onDone(message);
    return null;
  }
  const depCheck = SandboxManager.checkDependencies();
  if (!SandboxManager.isPlatformInEnabledList()) {
    const message = color("error", themeName)(`Error: Sandboxing is disabled for this platform (${platform}) via the enabledPlatforms setting.`);
    onDone(message);
    return null;
  }
  if (SandboxManager.areSandboxSettingsLockedByPolicy()) {
    const message = color("error", themeName)("Error: Sandbox settings are overridden by a higher-priority configuration and cannot be changed locally.");
    onDone(message);
    return null;
  }
  const trimmedArgs = args?.trim() || "";
  if (!trimmedArgs) {
    return /* @__PURE__ */ react_default.createElement(SandboxSettings, { onComplete: onDone, depCheck });
  }
  if (trimmedArgs) {
    const parts = trimmedArgs.split(" ");
    const subcommand = parts[0];
    if (subcommand === "exclude") {
      const commandPattern = trimmedArgs.slice("exclude ".length).trim();
      if (!commandPattern) {
        const message2 = color("error", themeName)('Error: Please provide a command pattern to exclude (e.g., /sandbox exclude "npm run test:*")');
        onDone(message2);
        return null;
      }
      const cleanPattern = commandPattern.replace(/^["']|["']$/g, "");
      addToExcludedCommands(cleanPattern);
      const localSettingsPath = getSettingsFilePathForSource("localSettings");
      const relativePath = localSettingsPath ? relative(getCwdState(), localSettingsPath) : ".claude/settings.local.json";
      const message = color("success", themeName)(`Added "${cleanPattern}" to excluded commands in ${relativePath}`);
      onDone(message);
      return null;
    } else {
      const message = color("error", themeName)(`Error: Unknown subcommand "${subcommand}". Available subcommand: exclude`);
      onDone(message);
      return null;
    }
  }
  return null;
}
var init_sandbox_toggle = __esm({
  "src/commands/sandbox-toggle/sandbox-toggle.tsx"() {
    init_react();
    init_state();
    init_SandboxSettings();
    init_ink();
    init_platform();
    init_sandbox_adapter();
    init_settings();
  }
});
init_sandbox_toggle();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvc2FuZGJveC9TYW5kYm94Q29uZmlnVGFiLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9zYW5kYm94L1NhbmRib3hEZXBlbmRlbmNpZXNUYWIudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL3NhbmRib3gvU2FuZGJveE92ZXJyaWRlc1RhYi50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvc2FuZGJveC9TYW5kYm94U2V0dGluZ3MudHN4IiwgIi4uLy4uL3NyYy9jb21tYW5kcy9zYW5kYm94LXRvZ2dsZS9zYW5kYm94LXRvZ2dsZS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHtcbiAgU2FuZGJveE1hbmFnZXIsXG4gIHNob3VsZEFsbG93TWFuYWdlZFNhbmRib3hEb21haW5zT25seSxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvc2FuZGJveC9zYW5kYm94LWFkYXB0ZXIuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBTYW5kYm94Q29uZmlnVGFiKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IGlzRW5hYmxlZCA9IFNhbmRib3hNYW5hZ2VyLmlzU2FuZGJveGluZ0VuYWJsZWQoKVxuXG4gIC8vIFNob3cgd2FybmluZ3MgKGUuZy4sIHNlY2NvbXAgbm90IGF2YWlsYWJsZSBvbiBMaW51eClcbiAgY29uc3QgZGVwQ2hlY2sgPSBTYW5kYm94TWFuYWdlci5jaGVja0RlcGVuZGVuY2llcygpXG4gIGNvbnN0IHdhcm5pbmdzTm90ZSA9XG4gICAgZGVwQ2hlY2sud2FybmluZ3MubGVuZ3RoID4gMCA/IChcbiAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIHtkZXBDaGVjay53YXJuaW5ncy5tYXAoKHcsIGkpID0+IChcbiAgICAgICAgICA8VGV4dCBrZXk9e2l9IGRpbUNvbG9yPlxuICAgICAgICAgICAge3d9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICApKX1cbiAgICAgIDwvQm94PlxuICAgICkgOiBudWxsXG5cbiAgaWYgKCFpc0VuYWJsZWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgcGFkZGluZ1k9ezF9PlxuICAgICAgICA8VGV4dCBjb2xvcj1cInN1YnRsZVwiPlNhbmRib3ggaXMgbm90IGVuYWJsZWQ8L1RleHQ+XG4gICAgICAgIHt3YXJuaW5nc05vdGV9XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICBjb25zdCBmc1JlYWRDb25maWcgPSBTYW5kYm94TWFuYWdlci5nZXRGc1JlYWRDb25maWcoKVxuICBjb25zdCBmc1dyaXRlQ29uZmlnID0gU2FuZGJveE1hbmFnZXIuZ2V0RnNXcml0ZUNvbmZpZygpXG4gIGNvbnN0IG5ldHdvcmtDb25maWcgPSBTYW5kYm94TWFuYWdlci5nZXROZXR3b3JrUmVzdHJpY3Rpb25Db25maWcoKVxuICBjb25zdCBhbGxvd1VuaXhTb2NrZXRzID0gU2FuZGJveE1hbmFnZXIuZ2V0QWxsb3dVbml4U29ja2V0cygpXG4gIGNvbnN0IGV4Y2x1ZGVkQ29tbWFuZHMgPSBTYW5kYm94TWFuYWdlci5nZXRFeGNsdWRlZENvbW1hbmRzKClcbiAgY29uc3QgZ2xvYlBhdHRlcm5XYXJuaW5ncyA9IFNhbmRib3hNYW5hZ2VyLmdldExpbnV4R2xvYlBhdHRlcm5XYXJuaW5ncygpXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBwYWRkaW5nWT17MX0+XG4gICAgICB7LyogRXhjbHVkZWQgQ29tbWFuZHMgKi99XG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgPFRleHQgYm9sZCBjb2xvcj1cInBlcm1pc3Npb25cIj5cbiAgICAgICAgICBFeGNsdWRlZCBDb21tYW5kczpcbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICB7ZXhjbHVkZWRDb21tYW5kcy5sZW5ndGggPiAwID8gZXhjbHVkZWRDb21tYW5kcy5qb2luKCcsICcpIDogJ05vbmUnfVxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cblxuICAgICAgey8qIEZpbGVzeXN0ZW0gUmVhZCBSZXN0cmljdGlvbnMgKi99XG4gICAgICB7ZnNSZWFkQ29uZmlnLmRlbnlPbmx5Lmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0gZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgIDxUZXh0IGJvbGQgY29sb3I9XCJwZXJtaXNzaW9uXCI+XG4gICAgICAgICAgICBGaWxlc3lzdGVtIFJlYWQgUmVzdHJpY3Rpb25zOlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5EZW5pZWQ6IHtmc1JlYWRDb25maWcuZGVueU9ubHkuam9pbignLCAnKX08L1RleHQ+XG4gICAgICAgICAge2ZzUmVhZENvbmZpZy5hbGxvd1dpdGhpbkRlbnkgJiZcbiAgICAgICAgICAgIGZzUmVhZENvbmZpZy5hbGxvd1dpdGhpbkRlbnkubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICAgIEFsbG93ZWQgd2l0aGluIGRlbmllZDoge2ZzUmVhZENvbmZpZy5hbGxvd1dpdGhpbkRlbnkuam9pbignLCAnKX1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuXG4gICAgICB7LyogRmlsZXN5c3RlbSBXcml0ZSBSZXN0cmljdGlvbnMgKi99XG4gICAgICB7ZnNXcml0ZUNvbmZpZy5hbGxvd09ubHkubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgPFRleHQgYm9sZCBjb2xvcj1cInBlcm1pc3Npb25cIj5cbiAgICAgICAgICAgIEZpbGVzeXN0ZW0gV3JpdGUgUmVzdHJpY3Rpb25zOlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5BbGxvd2VkOiB7ZnNXcml0ZUNvbmZpZy5hbGxvd09ubHkuam9pbignLCAnKX08L1RleHQ+XG4gICAgICAgICAge2ZzV3JpdGVDb25maWcuZGVueVdpdGhpbkFsbG93Lmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgIERlbmllZCB3aXRoaW4gYWxsb3dlZDoge2ZzV3JpdGVDb25maWcuZGVueVdpdGhpbkFsbG93LmpvaW4oJywgJyl9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuXG4gICAgICB7LyogTmV0d29yayBSZXN0cmljdGlvbnMgKi99XG4gICAgICB7KChuZXR3b3JrQ29uZmlnLmFsbG93ZWRIb3N0cyAmJiBuZXR3b3JrQ29uZmlnLmFsbG93ZWRIb3N0cy5sZW5ndGggPiAwKSB8fFxuICAgICAgICAobmV0d29ya0NvbmZpZy5kZW5pZWRIb3N0cyAmJlxuICAgICAgICAgIG5ldHdvcmtDb25maWcuZGVuaWVkSG9zdHMubGVuZ3RoID4gMCkpICYmIChcbiAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICA8VGV4dCBib2xkIGNvbG9yPVwicGVybWlzc2lvblwiPlxuICAgICAgICAgICAgTmV0d29yayBSZXN0cmljdGlvbnNcbiAgICAgICAgICAgIHtzaG91bGRBbGxvd01hbmFnZWRTYW5kYm94RG9tYWluc09ubHkoKSA/ICcgKE1hbmFnZWQpJyA6ICcnfTpcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAge25ldHdvcmtDb25maWcuYWxsb3dlZEhvc3RzICYmXG4gICAgICAgICAgICBuZXR3b3JrQ29uZmlnLmFsbG93ZWRIb3N0cy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgICAgQWxsb3dlZDoge25ldHdvcmtDb25maWcuYWxsb3dlZEhvc3RzLmpvaW4oJywgJyl9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAge25ldHdvcmtDb25maWcuZGVuaWVkSG9zdHMgJiZcbiAgICAgICAgICAgIG5ldHdvcmtDb25maWcuZGVuaWVkSG9zdHMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICAgIERlbmllZDoge25ldHdvcmtDb25maWcuZGVuaWVkSG9zdHMuam9pbignLCAnKX1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuXG4gICAgICB7LyogVW5peCBTb2NrZXRzICovfVxuICAgICAge2FsbG93VW5peFNvY2tldHMgJiYgYWxsb3dVbml4U29ja2V0cy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICA8VGV4dCBib2xkIGNvbG9yPVwicGVybWlzc2lvblwiPlxuICAgICAgICAgICAgQWxsb3dlZCBVbml4IFNvY2tldHM6XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPnthbGxvd1VuaXhTb2NrZXRzLmpvaW4oJywgJyl9PC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBMaW51eCBHbG9iIFBhdHRlcm4gV2FybmluZyAqL31cbiAgICAgIHtnbG9iUGF0dGVybldhcm5pbmdzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0gZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgIDxUZXh0IGJvbGQgY29sb3I9XCJ3YXJuaW5nXCI+XG4gICAgICAgICAgICDimqAgV2FybmluZzogR2xvYiBwYXR0ZXJucyBub3QgZnVsbHkgc3VwcG9ydGVkIG9uIExpbnV4XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgVGhlIGZvbGxvd2luZyBwYXR0ZXJucyB3aWxsIGJlIGlnbm9yZWQ6eycgJ31cbiAgICAgICAgICAgIHtnbG9iUGF0dGVybldhcm5pbmdzLnNsaWNlKDAsIDMpLmpvaW4oJywgJyl9XG4gICAgICAgICAgICB7Z2xvYlBhdHRlcm5XYXJuaW5ncy5sZW5ndGggPiAzICYmXG4gICAgICAgICAgICAgIGAgKCR7Z2xvYlBhdHRlcm5XYXJuaW5ncy5sZW5ndGggLSAzfSBtb3JlKWB9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG5cbiAgICAgIHt3YXJuaW5nc05vdGV9XG4gICAgPC9Cb3g+XG4gIClcbn1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQgeyBnZXRQbGF0Zm9ybSB9IGZyb20gJy4uLy4uL3V0aWxzL3BsYXRmb3JtLmpzJ1xuaW1wb3J0IHR5cGUgeyBTYW5kYm94RGVwZW5kZW5jeUNoZWNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2FuZGJveC9zYW5kYm94LWFkYXB0ZXIuanMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGRlcENoZWNrOiBTYW5kYm94RGVwZW5kZW5jeUNoZWNrXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTYW5kYm94RGVwZW5kZW5jaWVzVGFiKHsgZGVwQ2hlY2sgfTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBwbGF0Zm9ybSA9IGdldFBsYXRmb3JtKClcbiAgY29uc3QgaXNNYWMgPSBwbGF0Zm9ybSA9PT0gJ21hY29zJ1xuXG4gIC8vIHJpcGdyZXAgaXMgcmVxdWlyZWQgb24gYWxsIHBsYXRmb3JtcyAodXNlZCB0byBzY2FuIGZvciBkYW5nZXJvdXMgZGlycykuXG4gIC8vIE9uIG1hY09TLCBzZWF0YmVsdCBpcyBidWlsdCBpbnRvIHRoZSBPUyDigJQgcmlwZ3JlcCBpcyB0aGUgb25seSBydW50aW1lIGRlcC5cbiAgLy8gT24gTGludXgvV1NMLCBid3JhcCArIHNvY2F0IGFyZSByZXF1aXJlZCwgc2VjY29tcCBpcyBvcHRpb25hbC5cbiAgLy9cbiAgLy8gIzMxODA0OiBwcmV2aW91c2x5IHRoaXMgdGFiIHVuY29uZGl0aW9uYWxseSByZW5kZXJlZCBMaW51eCBkZXBzIChid3JhcCxcbiAgLy8gc29jYXQsIHNlY2NvbXApLiBXaGVuIHJpcGdyZXAgd2FzIG1pc3Npbmcgb24gbWFjT1MsIHVzZXJzIHNhdyBjb25mdXNpbmdcbiAgLy8gTGludXggaW5zdGFsbCBpbnN0cnVjdGlvbnMgYW5kIG5vIG1lbnRpb24gb2YgdGhlIGFjdHVhbCBwcm9ibGVtLlxuICBjb25zdCByZ01pc3NpbmcgPSBkZXBDaGVjay5lcnJvcnMuc29tZShlID0+IGUuaW5jbHVkZXMoJ3JpcGdyZXAnKSlcbiAgY29uc3QgYndyYXBNaXNzaW5nID0gZGVwQ2hlY2suZXJyb3JzLnNvbWUoZSA9PiBlLmluY2x1ZGVzKCdid3JhcCcpKVxuICBjb25zdCBzb2NhdE1pc3NpbmcgPSBkZXBDaGVjay5lcnJvcnMuc29tZShlID0+IGUuaW5jbHVkZXMoJ3NvY2F0JykpXG4gIGNvbnN0IHNlY2NvbXBNaXNzaW5nID0gZGVwQ2hlY2sud2FybmluZ3MubGVuZ3RoID4gMFxuXG4gIC8vIEFueSBlcnJvcnMgd2UgZG9uJ3QgaGF2ZSBhIGRlZGljYXRlZCByb3cgZm9yIOKAlCByZW5kZXIgdmVyYmF0aW0gc28gdGhleVxuICAvLyBhcmVuJ3Qgc2lsZW50bHkgc3dhbGxvd2VkIChlLmcuIFwiVW5zdXBwb3J0ZWQgcGxhdGZvcm1cIiBvciBmdXR1cmUgZGVwcykuXG4gIGNvbnN0IG90aGVyRXJyb3JzID0gZGVwQ2hlY2suZXJyb3JzLmZpbHRlcihcbiAgICBlID0+ICFlLmluY2x1ZGVzKCdyaXBncmVwJykgJiYgIWUuaW5jbHVkZXMoJ2J3cmFwJykgJiYgIWUuaW5jbHVkZXMoJ3NvY2F0JyksXG4gIClcblxuICBjb25zdCByZ0luc3RhbGxIaW50ID0gaXNNYWMgPyAnYnJldyBpbnN0YWxsIHJpcGdyZXAnIDogJ2FwdCBpbnN0YWxsIHJpcGdyZXAnXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBwYWRkaW5nWT17MX0gZ2FwPXsxfT5cbiAgICAgIHtpc01hYyAmJiAoXG4gICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgc2VhdGJlbHQ6IDxUZXh0IGNvbG9yPVwic3VjY2Vzc1wiPmJ1aWx0LWluIChtYWNPUyk8L1RleHQ+XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG5cbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICByaXBncmVwIChyZyk6eycgJ31cbiAgICAgICAgICB7cmdNaXNzaW5nID8gKFxuICAgICAgICAgICAgPFRleHQgY29sb3I9XCJlcnJvclwiPm5vdCBmb3VuZDwvVGV4dD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFRleHQgY29sb3I9XCJzdWNjZXNzXCI+Zm91bmQ8L1RleHQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICB7cmdNaXNzaW5nICYmIChcbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgIHsnICAnfcK3IHtyZ0luc3RhbGxIaW50fVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuXG4gICAgICB7IWlzTWFjICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICBidWJibGV3cmFwIChid3JhcCk6eycgJ31cbiAgICAgICAgICAgICAge2J3cmFwTWlzc2luZyA/IChcbiAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cImVycm9yXCI+bm90IGluc3RhbGxlZDwvVGV4dD5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cInN1Y2Nlc3NcIj5pbnN0YWxsZWQ8L1RleHQ+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICB7YndyYXBNaXNzaW5nICYmIChcbiAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+eycgICd9wrcgYXB0IGluc3RhbGwgYnViYmxld3JhcDwvVGV4dD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICBzb2NhdDp7JyAnfVxuICAgICAgICAgICAgICB7c29jYXRNaXNzaW5nID8gKFxuICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZXJyb3JcIj5ub3QgaW5zdGFsbGVkPC9UZXh0PlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwic3VjY2Vzc1wiPmluc3RhbGxlZDwvVGV4dD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIHtzb2NhdE1pc3NpbmcgJiYgPFRleHQgZGltQ29sb3I+eycgICd9wrcgYXB0IGluc3RhbGwgc29jYXQ8L1RleHQ+fVxuICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgc2VjY29tcCBmaWx0ZXI6eycgJ31cbiAgICAgICAgICAgICAge3NlY2NvbXBNaXNzaW5nID8gKFxuICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2FybmluZ1wiPm5vdCBpbnN0YWxsZWQ8L1RleHQ+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJzdWNjZXNzXCI+aW5zdGFsbGVkPC9UZXh0PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7c2VjY29tcE1pc3NpbmcgJiYgKFxuICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPiAocmVxdWlyZWQgdG8gYmxvY2sgdW5peCBkb21haW4gc29ja2V0cyk8L1RleHQ+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICB7c2VjY29tcE1pc3NpbmcgJiYgKFxuICAgICAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgICAgIHsnICAnfcK3IG5wbSBpbnN0YWxsIC1nIEBhbnRocm9waWMtYWkvc2FuZGJveC1ydW50aW1lXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICAgICAgeycgICd9wrcgb3IgY29weSB2ZW5kb3Ivc2VjY29tcC8qIGZyb20gc2FuZGJveC1ydW50aW1lIGFuZCBzZXRcbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgICAgICB7JyAgICAnfXNhbmRib3guc2VjY29tcC5icGZQYXRoIGFuZCBhcHBseVBhdGggaW4gc2V0dGluZ3MuanNvblxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8Lz5cbiAgICAgICl9XG5cbiAgICAgIHtvdGhlckVycm9ycy5tYXAoZXJyID0+IChcbiAgICAgICAgPFRleHQga2V5PXtlcnJ9IGNvbG9yPVwiZXJyb3JcIj5cbiAgICAgICAgICB7ZXJyfVxuICAgICAgICA8L1RleHQ+XG4gICAgICApKX1cbiAgICA8L0JveD5cbiAgKVxufVxuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgY29sb3IsIExpbmssIFRleHQsIHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHR5cGUgeyBDb21tYW5kUmVzdWx0RGlzcGxheSB9IGZyb20gJy4uLy4uL3R5cGVzL2NvbW1hbmQuanMnXG5pbXBvcnQgeyBTYW5kYm94TWFuYWdlciB9IGZyb20gJy4uLy4uL3V0aWxzL3NhbmRib3gvc2FuZGJveC1hZGFwdGVyLmpzJ1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnLi4vQ3VzdG9tU2VsZWN0L3NlbGVjdC5qcydcbmltcG9ydCB7IHVzZVRhYkhlYWRlckZvY3VzIH0gZnJvbSAnLi4vZGVzaWduLXN5c3RlbS9UYWJzLmpzJ1xuXG50eXBlIFByb3BzID0ge1xuICBvbkNvbXBsZXRlOiAoXG4gICAgcmVzdWx0Pzogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7IGRpc3BsYXk/OiBDb21tYW5kUmVzdWx0RGlzcGxheSB9LFxuICApID0+IHZvaWRcbn1cblxudHlwZSBPdmVycmlkZU1vZGUgPSAnb3BlbicgfCAnY2xvc2VkJ1xuXG5leHBvcnQgZnVuY3Rpb24gU2FuZGJveE92ZXJyaWRlc1RhYih7IG9uQ29tcGxldGUgfTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBpc0VuYWJsZWQgPSBTYW5kYm94TWFuYWdlci5pc1NhbmRib3hpbmdFbmFibGVkKClcbiAgY29uc3QgaXNMb2NrZWQgPSBTYW5kYm94TWFuYWdlci5hcmVTYW5kYm94U2V0dGluZ3NMb2NrZWRCeVBvbGljeSgpXG4gIGNvbnN0IGN1cnJlbnRBbGxvd1Vuc2FuZGJveGVkID0gU2FuZGJveE1hbmFnZXIuYXJlVW5zYW5kYm94ZWRDb21tYW5kc0FsbG93ZWQoKVxuXG4gIGlmICghaXNFbmFibGVkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIHBhZGRpbmdZPXsxfT5cbiAgICAgICAgPFRleHQgY29sb3I9XCJzdWJ0bGVcIj5cbiAgICAgICAgICBTYW5kYm94IGlzIG5vdCBlbmFibGVkLiBFbmFibGUgc2FuZGJveCB0byBjb25maWd1cmUgb3ZlcnJpZGUgc2V0dGluZ3MuXG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxuXG4gIGlmIChpc0xvY2tlZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBwYWRkaW5nWT17MX0+XG4gICAgICAgIDxUZXh0IGNvbG9yPVwic3VidGxlXCI+XG4gICAgICAgICAgT3ZlcnJpZGUgc2V0dGluZ3MgYXJlIG1hbmFnZWQgYnkgYSBoaWdoZXItcHJpb3JpdHkgY29uZmlndXJhdGlvbiBhbmRcbiAgICAgICAgICBjYW5ub3QgYmUgY2hhbmdlZCBsb2NhbGx5LlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgIEN1cnJlbnQgc2V0dGluZzp7JyAnfVxuICAgICAgICAgICAge2N1cnJlbnRBbGxvd1Vuc2FuZGJveGVkXG4gICAgICAgICAgICAgID8gJ0FsbG93IHVuc2FuZGJveGVkIGZhbGxiYWNrJ1xuICAgICAgICAgICAgICA6ICdTdHJpY3Qgc2FuZGJveCBtb2RlJ31cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8T3ZlcnJpZGVzU2VsZWN0XG4gICAgICBvbkNvbXBsZXRlPXtvbkNvbXBsZXRlfVxuICAgICAgY3VycmVudE1vZGU9e2N1cnJlbnRBbGxvd1Vuc2FuZGJveGVkID8gJ29wZW4nIDogJ2Nsb3NlZCd9XG4gICAgLz5cbiAgKVxufVxuXG4vLyBTcGxpdCBzbyB1c2VUYWJIZWFkZXJGb2N1cygpIG9ubHkgcnVucyB3aGVuIHRoZSBTZWxlY3QgcmVuZGVycy4gQ2FsbGluZyBpdFxuLy8gYWJvdmUgdGhlIGVhcmx5IHJldHVybnMgcmVnaXN0ZXJzIGEgZG93bi1hcnJvdyBvcHQtaW4gZXZlbiB3aGVuIHdlIHJldHVyblxuLy8gc3RhdGljIHRleHQg4oCUIHByZXNzaW5nIOKGkyB0aGVuIGJsdXJzIHRoZSBoZWFkZXIgd2l0aCBubyB3YXkgYmFjay5cbmZ1bmN0aW9uIE92ZXJyaWRlc1NlbGVjdCh7XG4gIG9uQ29tcGxldGUsXG4gIGN1cnJlbnRNb2RlLFxufTogUHJvcHMgJiB7IGN1cnJlbnRNb2RlOiBPdmVycmlkZU1vZGUgfSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IFt0aGVtZV0gPSB1c2VUaGVtZSgpXG4gIGNvbnN0IHsgaGVhZGVyRm9jdXNlZCwgZm9jdXNIZWFkZXIgfSA9IHVzZVRhYkhlYWRlckZvY3VzKClcbiAgY29uc3QgY3VycmVudEluZGljYXRvciA9IGNvbG9yKCdzdWNjZXNzJywgdGhlbWUpKGAoY3VycmVudClgKVxuXG4gIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAge1xuICAgICAgbGFiZWw6XG4gICAgICAgIGN1cnJlbnRNb2RlID09PSAnb3BlbidcbiAgICAgICAgICA/IGBBbGxvdyB1bnNhbmRib3hlZCBmYWxsYmFjayAke2N1cnJlbnRJbmRpY2F0b3J9YFxuICAgICAgICAgIDogJ0FsbG93IHVuc2FuZGJveGVkIGZhbGxiYWNrJyxcbiAgICAgIHZhbHVlOiAnb3BlbicsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDpcbiAgICAgICAgY3VycmVudE1vZGUgPT09ICdjbG9zZWQnXG4gICAgICAgICAgPyBgU3RyaWN0IHNhbmRib3ggbW9kZSAke2N1cnJlbnRJbmRpY2F0b3J9YFxuICAgICAgICAgIDogJ1N0cmljdCBzYW5kYm94IG1vZGUnLFxuICAgICAgdmFsdWU6ICdjbG9zZWQnLFxuICAgIH0sXG4gIF1cblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTZWxlY3QodmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IG1vZGUgPSB2YWx1ZSBhcyBPdmVycmlkZU1vZGVcblxuICAgIGF3YWl0IFNhbmRib3hNYW5hZ2VyLnNldFNhbmRib3hTZXR0aW5ncyh7XG4gICAgICBhbGxvd1Vuc2FuZGJveGVkQ29tbWFuZHM6IG1vZGUgPT09ICdvcGVuJyxcbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICBtb2RlID09PSAnb3BlbidcbiAgICAgICAgPyAn4pyTIFVuc2FuZGJveGVkIGZhbGxiYWNrIGFsbG93ZWQgLSBjb21tYW5kcyBjYW4gcnVuIG91dHNpZGUgc2FuZGJveCB3aGVuIG5lY2Vzc2FyeSdcbiAgICAgICAgOiAn4pyTIFN0cmljdCBzYW5kYm94IG1vZGUgLSBhbGwgY29tbWFuZHMgbXVzdCBydW4gaW4gc2FuZGJveCBvciBiZSBleGNsdWRlZCB2aWEgdGhlIGBleGNsdWRlZENvbW1hbmRzYCBvcHRpb24nXG5cbiAgICBvbkNvbXBsZXRlKG1lc3NhZ2UpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIHBhZGRpbmdZPXsxfT5cbiAgICAgIDxCb3ggbWFyZ2luQm90dG9tPXsxfT5cbiAgICAgICAgPFRleHQgYm9sZD5Db25maWd1cmUgT3ZlcnJpZGVzOjwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgICAgPFNlbGVjdFxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VsZWN0fVxuICAgICAgICBvbkNhbmNlbD17KCkgPT4gb25Db21wbGV0ZSh1bmRlZmluZWQsIHsgZGlzcGxheTogJ3NraXAnIH0pfVxuICAgICAgICBvblVwRnJvbUZpcnN0SXRlbT17Zm9jdXNIZWFkZXJ9XG4gICAgICAgIGlzRGlzYWJsZWQ9e2hlYWRlckZvY3VzZWR9XG4gICAgICAvPlxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbWFyZ2luVG9wPXsxfSBnYXA9ezF9PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICA8VGV4dCBib2xkIGRpbUNvbG9yPlxuICAgICAgICAgICAgQWxsb3cgdW5zYW5kYm94ZWQgZmFsbGJhY2s6XG4gICAgICAgICAgPC9UZXh0PnsnICd9XG4gICAgICAgICAgV2hlbiBhIGNvbW1hbmQgZmFpbHMgZHVlIHRvIHNhbmRib3ggcmVzdHJpY3Rpb25zLCBDbGF1ZGUgY2FuIHJldHJ5XG4gICAgICAgICAgd2l0aCBkYW5nZXJvdXNseURpc2FibGVTYW5kYm94IHRvIHJ1biBvdXRzaWRlIHRoZSBzYW5kYm94IChmYWxsaW5nXG4gICAgICAgICAgYmFjayB0byBkZWZhdWx0IHBlcm1pc3Npb25zKS5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICA8VGV4dCBib2xkIGRpbUNvbG9yPlxuICAgICAgICAgICAgU3RyaWN0IHNhbmRib3ggbW9kZTpcbiAgICAgICAgICA8L1RleHQ+eycgJ31cbiAgICAgICAgICBBbGwgYmFzaCBjb21tYW5kcyBpbnZva2VkIGJ5IHRoZSBtb2RlbCBtdXN0IHJ1biBpbiB0aGUgc2FuZGJveCB1bmxlc3NcbiAgICAgICAgICB0aGV5IGFyZSBleHBsaWNpdGx5IGxpc3RlZCBpbiBleGNsdWRlZENvbW1hbmRzLlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgIExlYXJuIG1vcmU6eycgJ31cbiAgICAgICAgICA8TGluayB1cmw9XCJodHRwczovL2NvZGUuY2xhdWRlLmNvbS9kb2NzL2VuL3NhbmRib3hpbmcjY29uZmlndXJlLXNhbmRib3hpbmdcIj5cbiAgICAgICAgICAgIGNvZGUuY2xhdWRlLmNvbS9kb2NzL2VuL3NhbmRib3hpbmcjY29uZmlndXJlLXNhbmRib3hpbmdcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApXG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LCBjb2xvciwgTGluaywgVGV4dCwgdXNlVGhlbWUgfSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQgeyB1c2VLZXliaW5kaW5ncyB9IGZyb20gJy4uLy4uL2tleWJpbmRpbmdzL3VzZUtleWJpbmRpbmcuanMnXG5pbXBvcnQgdHlwZSB7IENvbW1hbmRSZXN1bHREaXNwbGF5IH0gZnJvbSAnLi4vLi4vdHlwZXMvY29tbWFuZC5qcydcbmltcG9ydCB0eXBlIHsgU2FuZGJveERlcGVuZGVuY3lDaGVjayB9IGZyb20gJy4uLy4uL3V0aWxzL3NhbmRib3gvc2FuZGJveC1hZGFwdGVyLmpzJ1xuaW1wb3J0IHsgU2FuZGJveE1hbmFnZXIgfSBmcm9tICcuLi8uLi91dGlscy9zYW5kYm94L3NhbmRib3gtYWRhcHRlci5qcydcbmltcG9ydCB7IGdldFNldHRpbmdzX0RFUFJFQ0FURUQgfSBmcm9tICcuLi8uLi91dGlscy9zZXR0aW5ncy9zZXR0aW5ncy5qcydcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJy4uL0N1c3RvbVNlbGVjdC9zZWxlY3QuanMnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vZGVzaWduLXN5c3RlbS9QYW5lLmpzJ1xuaW1wb3J0IHsgVGFiLCBUYWJzLCB1c2VUYWJIZWFkZXJGb2N1cyB9IGZyb20gJy4uL2Rlc2lnbi1zeXN0ZW0vVGFicy5qcydcbmltcG9ydCB7IFNhbmRib3hDb25maWdUYWIgfSBmcm9tICcuL1NhbmRib3hDb25maWdUYWIuanMnXG5pbXBvcnQgeyBTYW5kYm94RGVwZW5kZW5jaWVzVGFiIH0gZnJvbSAnLi9TYW5kYm94RGVwZW5kZW5jaWVzVGFiLmpzJ1xuaW1wb3J0IHsgU2FuZGJveE92ZXJyaWRlc1RhYiB9IGZyb20gJy4vU2FuZGJveE92ZXJyaWRlc1RhYi5qcydcblxudHlwZSBQcm9wcyA9IHtcbiAgb25Db21wbGV0ZTogKFxuICAgIHJlc3VsdD86IHN0cmluZyxcbiAgICBvcHRpb25zPzogeyBkaXNwbGF5PzogQ29tbWFuZFJlc3VsdERpc3BsYXkgfSxcbiAgKSA9PiB2b2lkXG4gIGRlcENoZWNrOiBTYW5kYm94RGVwZW5kZW5jeUNoZWNrXG59XG5cbnR5cGUgU2FuZGJveE1vZGUgPSAnYXV0by1hbGxvdycgfCAncmVndWxhcicgfCAnZGlzYWJsZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiBTYW5kYm94U2V0dGluZ3Moe1xuICBvbkNvbXBsZXRlLFxuICBkZXBDaGVjayxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgW3RoZW1lXSA9IHVzZVRoZW1lKClcbiAgY29uc3QgY3VycmVudEVuYWJsZWQgPSBTYW5kYm94TWFuYWdlci5pc1NhbmRib3hpbmdFbmFibGVkKClcbiAgY29uc3QgY3VycmVudEF1dG9BbGxvdyA9IFNhbmRib3hNYW5hZ2VyLmlzQXV0b0FsbG93QmFzaElmU2FuZGJveGVkRW5hYmxlZCgpXG4gIGNvbnN0IGhhc1dhcm5pbmdzID0gZGVwQ2hlY2sud2FybmluZ3MubGVuZ3RoID4gMFxuICBjb25zdCBzZXR0aW5ncyA9IGdldFNldHRpbmdzX0RFUFJFQ0FURUQoKVxuICBjb25zdCBhbGxvd0FsbFVuaXhTb2NrZXRzID0gc2V0dGluZ3Muc2FuZGJveD8ubmV0d29yaz8uYWxsb3dBbGxVbml4U29ja2V0c1xuICAvLyBTaG93IHdhcm5pbmcgaWYgc2VjY29tcCBtaXNzaW5nIEFORCB1c2VyIGhhc24ndCBhbGxvd2VkIGFsbCB1bml4IHNvY2tldHNcbiAgY29uc3Qgc2hvd1NvY2tldFdhcm5pbmcgPSBoYXNXYXJuaW5ncyAmJiAhYWxsb3dBbGxVbml4U29ja2V0c1xuXG4gIC8vIERldGVybWluZSBjdXJyZW50IG1vZGVcbiAgY29uc3QgZ2V0Q3VycmVudE1vZGUgPSAoKTogU2FuZGJveE1vZGUgPT4ge1xuICAgIGlmICghY3VycmVudEVuYWJsZWQpIHJldHVybiAnZGlzYWJsZWQnXG4gICAgaWYgKGN1cnJlbnRBdXRvQWxsb3cpIHJldHVybiAnYXV0by1hbGxvdydcbiAgICByZXR1cm4gJ3JlZ3VsYXInXG4gIH1cblxuICBjb25zdCBjdXJyZW50TW9kZSA9IGdldEN1cnJlbnRNb2RlKClcbiAgY29uc3QgY3VycmVudEluZGljYXRvciA9IGNvbG9yKCdzdWNjZXNzJywgdGhlbWUpKGAoY3VycmVudClgKVxuXG4gIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAge1xuICAgICAgbGFiZWw6XG4gICAgICAgIGN1cnJlbnRNb2RlID09PSAnYXV0by1hbGxvdydcbiAgICAgICAgICA/IGBTYW5kYm94IEJhc2hUb29sLCB3aXRoIGF1dG8tYWxsb3cgJHtjdXJyZW50SW5kaWNhdG9yfWBcbiAgICAgICAgICA6ICdTYW5kYm94IEJhc2hUb29sLCB3aXRoIGF1dG8tYWxsb3cnLFxuICAgICAgdmFsdWU6ICdhdXRvLWFsbG93JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOlxuICAgICAgICBjdXJyZW50TW9kZSA9PT0gJ3JlZ3VsYXInXG4gICAgICAgICAgPyBgU2FuZGJveCBCYXNoVG9vbCwgd2l0aCByZWd1bGFyIHBlcm1pc3Npb25zICR7Y3VycmVudEluZGljYXRvcn1gXG4gICAgICAgICAgOiAnU2FuZGJveCBCYXNoVG9vbCwgd2l0aCByZWd1bGFyIHBlcm1pc3Npb25zJyxcbiAgICAgIHZhbHVlOiAncmVndWxhcicsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDpcbiAgICAgICAgY3VycmVudE1vZGUgPT09ICdkaXNhYmxlZCdcbiAgICAgICAgICA/IGBObyBTYW5kYm94ICR7Y3VycmVudEluZGljYXRvcn1gXG4gICAgICAgICAgOiAnTm8gU2FuZGJveCcsXG4gICAgICB2YWx1ZTogJ2Rpc2FibGVkJyxcbiAgICB9LFxuICBdXG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU2VsZWN0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtb2RlID0gdmFsdWUgYXMgU2FuZGJveE1vZGVcblxuICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgY2FzZSAnYXV0by1hbGxvdyc6XG4gICAgICAgIGF3YWl0IFNhbmRib3hNYW5hZ2VyLnNldFNhbmRib3hTZXR0aW5ncyh7XG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICBhdXRvQWxsb3dCYXNoSWZTYW5kYm94ZWQ6IHRydWUsXG4gICAgICAgIH0pXG4gICAgICAgIG9uQ29tcGxldGUoJ+KckyBTYW5kYm94IGVuYWJsZWQgd2l0aCBhdXRvLWFsbG93IGZvciBiYXNoIGNvbW1hbmRzJylcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3JlZ3VsYXInOlxuICAgICAgICBhd2FpdCBTYW5kYm94TWFuYWdlci5zZXRTYW5kYm94U2V0dGluZ3Moe1xuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgYXV0b0FsbG93QmFzaElmU2FuZGJveGVkOiBmYWxzZSxcbiAgICAgICAgfSlcbiAgICAgICAgb25Db21wbGV0ZSgn4pyTIFNhbmRib3ggZW5hYmxlZCB3aXRoIHJlZ3VsYXIgYmFzaCBwZXJtaXNzaW9ucycpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdkaXNhYmxlZCc6XG4gICAgICAgIGF3YWl0IFNhbmRib3hNYW5hZ2VyLnNldFNhbmRib3hTZXR0aW5ncyh7XG4gICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgYXV0b0FsbG93QmFzaElmU2FuZGJveGVkOiBmYWxzZSxcbiAgICAgICAgfSlcbiAgICAgICAgb25Db21wbGV0ZSgn4peLIFNhbmRib3ggZGlzYWJsZWQnKVxuICAgICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIHVzZUtleWJpbmRpbmdzKFxuICAgIHtcbiAgICAgICdjb25maXJtOm5vJzogKCkgPT4gb25Db21wbGV0ZSh1bmRlZmluZWQsIHsgZGlzcGxheTogJ3NraXAnIH0pLFxuICAgIH0sXG4gICAgeyBjb250ZXh0OiAnU2V0dGluZ3MnIH0sXG4gIClcblxuICBjb25zdCBtb2RlVGFiID0gKFxuICAgIDxUYWIga2V5PVwibW9kZVwiIHRpdGxlPVwiTW9kZVwiPlxuICAgICAgPFNhbmRib3hNb2RlVGFiXG4gICAgICAgIHNob3dTb2NrZXRXYXJuaW5nPXtzaG93U29ja2V0V2FybmluZ31cbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgb25TZWxlY3Q9e2hhbmRsZVNlbGVjdH1cbiAgICAgICAgb25Db21wbGV0ZT17b25Db21wbGV0ZX1cbiAgICAgIC8+XG4gICAgPC9UYWI+XG4gIClcblxuICBjb25zdCBvdmVycmlkZXNUYWIgPSAoXG4gICAgPFRhYiBrZXk9XCJvdmVycmlkZXNcIiB0aXRsZT1cIk92ZXJyaWRlc1wiPlxuICAgICAgPFNhbmRib3hPdmVycmlkZXNUYWIgb25Db21wbGV0ZT17b25Db21wbGV0ZX0gLz5cbiAgICA8L1RhYj5cbiAgKVxuXG4gIGNvbnN0IGNvbmZpZ1RhYiA9IChcbiAgICA8VGFiIGtleT1cImNvbmZpZ1wiIHRpdGxlPVwiQ29uZmlnXCI+XG4gICAgICA8U2FuZGJveENvbmZpZ1RhYiAvPlxuICAgIDwvVGFiPlxuICApXG5cbiAgY29uc3QgaGFzRXJyb3JzID0gZGVwQ2hlY2suZXJyb3JzLmxlbmd0aCA+IDBcblxuICAvLyBJZiByZXF1aXJlZCBkZXBzIG1pc3NpbmcsIG9ubHkgc2hvdyBEZXBlbmRlbmNpZXMgdGFiXG4gIC8vIElmIG9ubHkgb3B0aW9uYWwgZGVwcyBtaXNzaW5nLCBzaG93IGFsbCB0YWJzXG4gIGNvbnN0IHRhYnMgPSBoYXNFcnJvcnNcbiAgICA/IFtcbiAgICAgICAgPFRhYiBrZXk9XCJkZXBlbmRlbmNpZXNcIiB0aXRsZT1cIkRlcGVuZGVuY2llc1wiPlxuICAgICAgICAgIDxTYW5kYm94RGVwZW5kZW5jaWVzVGFiIGRlcENoZWNrPXtkZXBDaGVja30gLz5cbiAgICAgICAgPC9UYWI+LFxuICAgICAgXVxuICAgIDogW1xuICAgICAgICBtb2RlVGFiLFxuICAgICAgICAuLi4oaGFzV2FybmluZ3NcbiAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgPFRhYiBrZXk9XCJkZXBlbmRlbmNpZXNcIiB0aXRsZT1cIkRlcGVuZGVuY2llc1wiPlxuICAgICAgICAgICAgICAgIDxTYW5kYm94RGVwZW5kZW5jaWVzVGFiIGRlcENoZWNrPXtkZXBDaGVja30gLz5cbiAgICAgICAgICAgICAgPC9UYWI+LFxuICAgICAgICAgICAgXVxuICAgICAgICAgIDogW10pLFxuICAgICAgICBvdmVycmlkZXNUYWIsXG4gICAgICAgIGNvbmZpZ1RhYixcbiAgICAgIF1cblxuICByZXR1cm4gKFxuICAgIDxQYW5lIGNvbG9yPVwicGVybWlzc2lvblwiPlxuICAgICAgPFRhYnMgdGl0bGU9XCJTYW5kYm94OlwiIGNvbG9yPVwicGVybWlzc2lvblwiIGRlZmF1bHRUYWI9XCJNb2RlXCI+XG4gICAgICAgIHt0YWJzfVxuICAgICAgPC9UYWJzPlxuICAgIDwvUGFuZT5cbiAgKVxufVxuXG5mdW5jdGlvbiBTYW5kYm94TW9kZVRhYih7XG4gIHNob3dTb2NrZXRXYXJuaW5nLFxuICBvcHRpb25zLFxuICBvblNlbGVjdCxcbiAgb25Db21wbGV0ZSxcbn06IHtcbiAgc2hvd1NvY2tldFdhcm5pbmc6IGJvb2xlYW5cbiAgb3B0aW9uczogQXJyYXk8eyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH0+XG4gIG9uU2VsZWN0OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZFxuICBvbkNvbXBsZXRlOiBQcm9wc1snb25Db21wbGV0ZSddXG59KTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgeyBoZWFkZXJGb2N1c2VkLCBmb2N1c0hlYWRlciB9ID0gdXNlVGFiSGVhZGVyRm9jdXMoKVxuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIHBhZGRpbmdZPXsxfT5cbiAgICAgIHtzaG93U29ja2V0V2FybmluZyAmJiAoXG4gICAgICAgIDxCb3ggbWFyZ2luQm90dG9tPXsxfT5cbiAgICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIj5cbiAgICAgICAgICAgIENhbm5vdCBibG9jayB1bml4IGRvbWFpbiBzb2NrZXRzIChzZWUgRGVwZW5kZW5jaWVzIHRhYilcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICAgIDxCb3ggbWFyZ2luQm90dG9tPXsxfT5cbiAgICAgICAgPFRleHQgYm9sZD5Db25maWd1cmUgTW9kZTo8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICAgIDxTZWxlY3RcbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgb25DaGFuZ2U9e29uU2VsZWN0fVxuICAgICAgICBvbkNhbmNlbD17KCkgPT4gb25Db21wbGV0ZSh1bmRlZmluZWQsIHsgZGlzcGxheTogJ3NraXAnIH0pfVxuICAgICAgICBvblVwRnJvbUZpcnN0SXRlbT17Zm9jdXNIZWFkZXJ9XG4gICAgICAgIGlzRGlzYWJsZWQ9e2hlYWRlckZvY3VzZWR9XG4gICAgICAvPlxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbWFyZ2luVG9wPXsxfSBnYXA9ezF9PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICA8VGV4dCBib2xkIGRpbUNvbG9yPlxuICAgICAgICAgICAgQXV0by1hbGxvdyBtb2RlOlxuICAgICAgICAgIDwvVGV4dD57JyAnfVxuICAgICAgICAgIENvbW1hbmRzIHdpbGwgdHJ5IHRvIHJ1biBpbiB0aGUgc2FuZGJveCBhdXRvbWF0aWNhbGx5LCBhbmQgYXR0ZW1wdHMgdG9cbiAgICAgICAgICBydW4gb3V0c2lkZSBvZiB0aGUgc2FuZGJveCBmYWxsYmFjayB0byByZWd1bGFyIHBlcm1pc3Npb25zLiBFeHBsaWNpdFxuICAgICAgICAgIGFzay9kZW55IHJ1bGVzIGFyZSBhbHdheXMgcmVzcGVjdGVkLlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgIExlYXJuIG1vcmU6eycgJ31cbiAgICAgICAgICA8TGluayB1cmw9XCJodHRwczovL2NvZGUuY2xhdWRlLmNvbS9kb2NzL2VuL3NhbmRib3hpbmdcIj5cbiAgICAgICAgICAgIGNvZGUuY2xhdWRlLmNvbS9kb2NzL2VuL3NhbmRib3hpbmdcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApXG59XG4iLCAiaW1wb3J0IHsgcmVsYXRpdmUgfSBmcm9tICdwYXRoJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ2V0Q3dkU3RhdGUgfSBmcm9tICcuLi8uLi9ib290c3RyYXAvc3RhdGUuanMnXG5pbXBvcnQgeyBTYW5kYm94U2V0dGluZ3MgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NhbmRib3gvU2FuZGJveFNldHRpbmdzLmpzJ1xuaW1wb3J0IHsgY29sb3IgfSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQgeyBnZXRQbGF0Zm9ybSB9IGZyb20gJy4uLy4uL3V0aWxzL3BsYXRmb3JtLmpzJ1xuaW1wb3J0IHtcbiAgYWRkVG9FeGNsdWRlZENvbW1hbmRzLFxuICBTYW5kYm94TWFuYWdlcixcbn0gZnJvbSAnLi4vLi4vdXRpbHMvc2FuZGJveC9zYW5kYm94LWFkYXB0ZXIuanMnXG5pbXBvcnQge1xuICBnZXRTZXR0aW5nc19ERVBSRUNBVEVELFxuICBnZXRTZXR0aW5nc0ZpbGVQYXRoRm9yU291cmNlLFxufSBmcm9tICcuLi8uLi91dGlscy9zZXR0aW5ncy9zZXR0aW5ncy5qcydcbmltcG9ydCB0eXBlIHsgVGhlbWVOYW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMvdGhlbWUuanMnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYWxsKFxuICBvbkRvbmU6IChyZXN1bHQ/OiBzdHJpbmcpID0+IHZvaWQsXG4gIF9jb250ZXh0OiB1bmtub3duLFxuICBhcmdzPzogc3RyaW5nLFxuKTogUHJvbWlzZTxSZWFjdC5SZWFjdE5vZGUgfCBudWxsPiB7XG4gIGNvbnN0IHNldHRpbmdzID0gZ2V0U2V0dGluZ3NfREVQUkVDQVRFRCgpXG4gIGNvbnN0IHRoZW1lTmFtZTogVGhlbWVOYW1lID0gKHNldHRpbmdzLnRoZW1lIGFzIFRoZW1lTmFtZSkgfHwgJ2xpZ2h0J1xuXG4gIGNvbnN0IHBsYXRmb3JtID0gZ2V0UGxhdGZvcm0oKVxuXG4gIGlmICghU2FuZGJveE1hbmFnZXIuaXNTdXBwb3J0ZWRQbGF0Zm9ybSgpKSB7XG4gICAgLy8gV1NMMSB1c2VycyB3aWxsIHNlZSB0aGlzIHNpbmNlIGlzU3VwcG9ydGVkUGxhdGZvcm0gcmV0dXJucyBmYWxzZSBmb3IgV1NMMVxuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9XG4gICAgICBwbGF0Zm9ybSA9PT0gJ3dzbCdcbiAgICAgICAgPyAnRXJyb3I6IFNhbmRib3hpbmcgcmVxdWlyZXMgV1NMMi4gV1NMMSBpcyBub3Qgc3VwcG9ydGVkLidcbiAgICAgICAgOiAnRXJyb3I6IFNhbmRib3hpbmcgaXMgY3VycmVudGx5IG9ubHkgc3VwcG9ydGVkIG9uIG1hY09TLCBMaW51eCwgYW5kIFdTTDIuJ1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjb2xvcignZXJyb3InLCB0aGVtZU5hbWUpKGVycm9yTWVzc2FnZSlcbiAgICBvbkRvbmUobWVzc2FnZSlcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLy8gQ2hlY2sgZGVwZW5kZW5jaWVzIC0gZ2V0IHN0cnVjdHVyZWQgcmVzdWx0IHdpdGggZXJyb3JzL3dhcm5pbmdzXG4gIGNvbnN0IGRlcENoZWNrID0gU2FuZGJveE1hbmFnZXIuY2hlY2tEZXBlbmRlbmNpZXMoKVxuXG4gIC8vIENoZWNrIGlmIHBsYXRmb3JtIGlzIGluIGVuYWJsZWRQbGF0Zm9ybXMgbGlzdCAodW5kb2N1bWVudGVkIGVudGVycHJpc2Ugc2V0dGluZylcbiAgaWYgKCFTYW5kYm94TWFuYWdlci5pc1BsYXRmb3JtSW5FbmFibGVkTGlzdCgpKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNvbG9yKFxuICAgICAgJ2Vycm9yJyxcbiAgICAgIHRoZW1lTmFtZSxcbiAgICApKFxuICAgICAgYEVycm9yOiBTYW5kYm94aW5nIGlzIGRpc2FibGVkIGZvciB0aGlzIHBsYXRmb3JtICgke3BsYXRmb3JtfSkgdmlhIHRoZSBlbmFibGVkUGxhdGZvcm1zIHNldHRpbmcuYCxcbiAgICApXG4gICAgb25Eb25lKG1lc3NhZ2UpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8vIENoZWNrIGlmIHNhbmRib3ggc2V0dGluZ3MgYXJlIGxvY2tlZCBieSBoaWdoZXItcHJpb3JpdHkgc2V0dGluZ3NcbiAgaWYgKFNhbmRib3hNYW5hZ2VyLmFyZVNhbmRib3hTZXR0aW5nc0xvY2tlZEJ5UG9saWN5KCkpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY29sb3IoXG4gICAgICAnZXJyb3InLFxuICAgICAgdGhlbWVOYW1lLFxuICAgICkoXG4gICAgICAnRXJyb3I6IFNhbmRib3ggc2V0dGluZ3MgYXJlIG92ZXJyaWRkZW4gYnkgYSBoaWdoZXItcHJpb3JpdHkgY29uZmlndXJhdGlvbiBhbmQgY2Fubm90IGJlIGNoYW5nZWQgbG9jYWxseS4nLFxuICAgIClcbiAgICBvbkRvbmUobWVzc2FnZSlcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLy8gUGFyc2UgdGhlIGFyZ3VtZW50c1xuICBjb25zdCB0cmltbWVkQXJncyA9IGFyZ3M/LnRyaW0oKSB8fCAnJ1xuXG4gIC8vIElmIG5vIGFyZ3MsIHNob3cgdGhlIGludGVyYWN0aXZlIG1lbnVcbiAgaWYgKCF0cmltbWVkQXJncykge1xuICAgIHJldHVybiA8U2FuZGJveFNldHRpbmdzIG9uQ29tcGxldGU9e29uRG9uZX0gZGVwQ2hlY2s9e2RlcENoZWNrfSAvPlxuICB9XG5cbiAgLy8gSGFuZGxlIHN1YmNvbW1hbmRzXG4gIGlmICh0cmltbWVkQXJncykge1xuICAgIGNvbnN0IHBhcnRzID0gdHJpbW1lZEFyZ3Muc3BsaXQoJyAnKVxuICAgIGNvbnN0IHN1YmNvbW1hbmQgPSBwYXJ0c1swXVxuXG4gICAgaWYgKHN1YmNvbW1hbmQgPT09ICdleGNsdWRlJykge1xuICAgICAgLy8gSGFuZGxlIGV4Y2x1ZGUgc3ViY29tbWFuZFxuICAgICAgY29uc3QgY29tbWFuZFBhdHRlcm4gPSB0cmltbWVkQXJncy5zbGljZSgnZXhjbHVkZSAnLmxlbmd0aCkudHJpbSgpXG5cbiAgICAgIGlmICghY29tbWFuZFBhdHRlcm4pIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGNvbG9yKFxuICAgICAgICAgICdlcnJvcicsXG4gICAgICAgICAgdGhlbWVOYW1lLFxuICAgICAgICApKFxuICAgICAgICAgICdFcnJvcjogUGxlYXNlIHByb3ZpZGUgYSBjb21tYW5kIHBhdHRlcm4gdG8gZXhjbHVkZSAoZS5nLiwgL3NhbmRib3ggZXhjbHVkZSBcIm5wbSBydW4gdGVzdDoqXCIpJyxcbiAgICAgICAgKVxuICAgICAgICBvbkRvbmUobWVzc2FnZSlcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cblxuICAgICAgLy8gUmVtb3ZlIHF1b3RlcyBpZiBwcmVzZW50XG4gICAgICBjb25zdCBjbGVhblBhdHRlcm4gPSBjb21tYW5kUGF0dGVybi5yZXBsYWNlKC9eW1wiJ118W1wiJ10kL2csICcnKVxuXG4gICAgICAvLyBBZGQgdG8gZXhjbHVkZWRDb21tYW5kc1xuICAgICAgYWRkVG9FeGNsdWRlZENvbW1hbmRzKGNsZWFuUGF0dGVybilcblxuICAgICAgLy8gR2V0IHRoZSBsb2NhbCBzZXR0aW5ncyBwYXRoIGFuZCBtYWtlIGl0IHJlbGF0aXZlIHRvIGN3ZFxuICAgICAgY29uc3QgbG9jYWxTZXR0aW5nc1BhdGggPSBnZXRTZXR0aW5nc0ZpbGVQYXRoRm9yU291cmNlKCdsb2NhbFNldHRpbmdzJylcbiAgICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IGxvY2FsU2V0dGluZ3NQYXRoXG4gICAgICAgID8gcmVsYXRpdmUoZ2V0Q3dkU3RhdGUoKSwgbG9jYWxTZXR0aW5nc1BhdGgpXG4gICAgICAgIDogJy5jbGF1ZGUvc2V0dGluZ3MubG9jYWwuanNvbidcblxuICAgICAgY29uc3QgbWVzc2FnZSA9IGNvbG9yKFxuICAgICAgICAnc3VjY2VzcycsXG4gICAgICAgIHRoZW1lTmFtZSxcbiAgICAgICkoYEFkZGVkIFwiJHtjbGVhblBhdHRlcm59XCIgdG8gZXhjbHVkZWQgY29tbWFuZHMgaW4gJHtyZWxhdGl2ZVBhdGh9YClcblxuICAgICAgb25Eb25lKG1lc3NhZ2UpXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVbmtub3duIHN1YmNvbW1hbmRcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBjb2xvcihcbiAgICAgICAgJ2Vycm9yJyxcbiAgICAgICAgdGhlbWVOYW1lLFxuICAgICAgKShcbiAgICAgICAgYEVycm9yOiBVbmtub3duIHN1YmNvbW1hbmQgXCIke3N1YmNvbW1hbmR9XCIuIEF2YWlsYWJsZSBzdWJjb21tYW5kOiBleGNsdWRlYCxcbiAgICAgIClcbiAgICAgIG9uRG9uZShtZXNzYWdlKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICAvLyBTaG91bGQgbmV2ZXIgcmVhY2ggaGVyZSBzaW5jZSB3ZSBoYW5kbGUgYWxsIGNhc2VzIGFib3ZlXG4gIHJldHVybiBudWxsXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QVlsQixRQUFRLFVBQW1CO0VBQ2pFO0FBR0EsTUFBSWtCLGFBQWE7QUFDZixVQUFNRSxRQUFRRixZQUFZRyxNQUFNLEdBQUc7QUFDbkMsVUFBTUMsYUFBYUYsTUFBTSxDQUFDO0FBRTFCLFFBQUlFLGVBQWUsV0FBVztBQUU1QixZQUFNQyxpQkFBaUJMLFlBQVlNLE1BQU0sV0FBV0MsTUFBTSxFQUFFTixLQUFLO0FBRWpFLFVBQUksQ0FBQ0ksZ0JBQWdCO0FBQ25CLGNBQU1YLFdBQVVDLE1BQ2QsU0FDQVIsU0FDRixFQUNFLDhGQUNGO0FBQ0FMLGVBQU9ZLFFBQU87QUFDZCxlQUFPO01BQ1Q7QUFHQSxZQUFNYyxlQUFlSCxlQUFlSSxRQUFRLGdCQUFnQixFQUFFO0FBRzlEQyw0QkFBc0JGLFlBQVk7QUFHbEMsWUFBTUcsb0JBQW9CQyw2QkFBNkIsZUFBZTtBQUN0RSxZQUFNQyxlQUFlRixvQkFDakIvQixTQUFTa0MsWUFBWSxHQUFHSCxpQkFBaUIsSUFDekM7QUFFSixZQUFNakIsVUFBVUMsTUFDZCxXQUNBUixTQUNGLEVBQUUsVUFBVXFCLFlBQVksNkJBQTZCSyxZQUFZLEVBQUU7QUFFbkUvQixhQUFPWSxPQUFPO0FBQ2QsYUFBTztJQUNULE9BQU87QUFFTCxZQUFNQSxVQUFVQyxNQUNkLFNBQ0FSLFNBQ0YsRUFDRSw4QkFBOEJpQixVQUFVLGtDQUMxQztBQUNBdEIsYUFBT1ksT0FBTztBQUNkLGFBQU87SUFDVDtFQUNGO0FBR0EsU0FBTztBQUNUO0FBOUhBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOzs7IiwKICAibmFtZXMiOiBbIlNhbmRib3hDb25maWdUYWIiLCAiJCIsICJfYyIsICJpc0VuYWJsZWQiLCAiU2FuZGJveE1hbmFnZXIiLCAiaXNTYW5kYm94aW5nRW5hYmxlZCIsICJ0MCIsICJTeW1ib2wiLCAiZm9yIiwgImRlcENoZWNrIiwgImNoZWNrRGVwZW5kZW5jaWVzIiwgIndhcm5pbmdzIiwgImxlbmd0aCIsICJtYXAiLCAiX3RlbXAiLCAid2FybmluZ3NOb3RlIiwgInQxIiwgImZzUmVhZENvbmZpZyIsICJnZXRGc1JlYWRDb25maWciLCAiZnNXcml0ZUNvbmZpZyIsICJnZXRGc1dyaXRlQ29uZmlnIiwgIm5ldHdvcmtDb25maWciLCAiZ2V0TmV0d29ya1Jlc3RyaWN0aW9uQ29uZmlnIiwgImFsbG93VW5peFNvY2tldHMiLCAiZ2V0QWxsb3dVbml4U29ja2V0cyIsICJleGNsdWRlZENvbW1hbmRzIiwgImdldEV4Y2x1ZGVkQ29tbWFuZHMiLCAiZ2xvYlBhdHRlcm5XYXJuaW5ncyIsICJnZXRMaW51eEdsb2JQYXR0ZXJuV2FybmluZ3MiLCAiam9pbiIsICJkZW55T25seSIsICJhbGxvd1dpdGhpbkRlbnkiLCAiYWxsb3dPbmx5IiwgImRlbnlXaXRoaW5BbGxvdyIsICJhbGxvd2VkSG9zdHMiLCAiZGVuaWVkSG9zdHMiLCAic2hvdWxkQWxsb3dNYW5hZ2VkU2FuZGJveERvbWFpbnNPbmx5IiwgInNsaWNlIiwgInciLCAiaSIsICJTYW5kYm94RGVwZW5kZW5jaWVzVGFiIiwgInQwIiwgIiQiLCAiX2MiLCAiZGVwQ2hlY2siLCAidDEiLCAiU3ltYm9sIiwgImZvciIsICJnZXRQbGF0Zm9ybSIsICJwbGF0Zm9ybSIsICJpc01hYyIsICJ0MiIsICJlcnJvcnMiLCAic29tZSIsICJfdGVtcCIsICJyZ01pc3NpbmciLCAidDMiLCAiX3RlbXAyIiwgImJ3cmFwTWlzc2luZyIsICJ0NCIsICJfdGVtcDMiLCAic29jYXRNaXNzaW5nIiwgInNlY2NvbXBNaXNzaW5nIiwgIndhcm5pbmdzIiwgImxlbmd0aCIsICJ0NSIsICJvdGhlckVycm9ycyIsICJmaWx0ZXIiLCAiX3RlbXA0IiwgInJnSW5zdGFsbEhpbnQiLCAidDYiLCAidDciLCAidDgiLCAidDkiLCAidDEwIiwgIm1hcCIsICJfdGVtcDUiLCAiZXJyIiwgImVfMiIsICJlIiwgImluY2x1ZGVzIiwgImVfMSIsICJlXzAiLCAiU2FuZGJveE92ZXJyaWRlc1RhYiIsICJ0MCIsICIkIiwgIl9jIiwgIm9uQ29tcGxldGUiLCAiaXNFbmFibGVkIiwgIlNhbmRib3hNYW5hZ2VyIiwgImlzU2FuZGJveGluZ0VuYWJsZWQiLCAiaXNMb2NrZWQiLCAiYXJlU2FuZGJveFNldHRpbmdzTG9ja2VkQnlQb2xpY3kiLCAiY3VycmVudEFsbG93VW5zYW5kYm94ZWQiLCAiYXJlVW5zYW5kYm94ZWRDb21tYW5kc0FsbG93ZWQiLCAidDEiLCAiU3ltYm9sIiwgImZvciIsICJ0MiIsICJPdmVycmlkZXNTZWxlY3QiLCAiY3VycmVudE1vZGUiLCAidGhlbWUiLCAidXNlVGhlbWUiLCAiaGVhZGVyRm9jdXNlZCIsICJmb2N1c0hlYWRlciIsICJ1c2VUYWJIZWFkZXJGb2N1cyIsICJjb2xvciIsICJjdXJyZW50SW5kaWNhdG9yIiwgInQzIiwgImxhYmVsIiwgInZhbHVlIiwgInQ0IiwgInQ1IiwgInQ2IiwgIm9wdGlvbnMiLCAidDciLCAiaGFuZGxlU2VsZWN0IiwgIm1vZGUiLCAic2V0U2FuZGJveFNldHRpbmdzIiwgImFsbG93VW5zYW5kYm94ZWRDb21tYW5kcyIsICJtZXNzYWdlIiwgInQ4IiwgInQ5IiwgInVuZGVmaW5lZCIsICJkaXNwbGF5IiwgInQxMCIsICJ0MTEiLCAidDEyIiwgInQxMyIsICJ0MTQiLCAiU2FuZGJveFNldHRpbmdzIiwgInQwIiwgIiQiLCAiX2MiLCAib25Db21wbGV0ZSIsICJkZXBDaGVjayIsICJ0aGVtZSIsICJ1c2VUaGVtZSIsICJjdXJyZW50RW5hYmxlZCIsICJTYW5kYm94TWFuYWdlciIsICJpc1NhbmRib3hpbmdFbmFibGVkIiwgImN1cnJlbnRBdXRvQWxsb3ciLCAiaXNBdXRvQWxsb3dCYXNoSWZTYW5kYm94ZWRFbmFibGVkIiwgImhhc1dhcm5pbmdzIiwgIndhcm5pbmdzIiwgImxlbmd0aCIsICJ0MSIsICJTeW1ib2wiLCAiZm9yIiwgImdldFNldHRpbmdzX0RFUFJFQ0FURUQiLCAic2V0dGluZ3MiLCAiYWxsb3dBbGxVbml4U29ja2V0cyIsICJzYW5kYm94IiwgIm5ldHdvcmsiLCAic2hvd1NvY2tldFdhcm5pbmciLCAiZ2V0Q3VycmVudE1vZGUiLCAiY3VycmVudE1vZGUiLCAidDIiLCAiY29sb3IiLCAiY3VycmVudEluZGljYXRvciIsICJ0MyIsICJ0NCIsICJsYWJlbCIsICJ2YWx1ZSIsICJ0NSIsICJ0NiIsICJ0NyIsICJ0OCIsICJ0OSIsICJvcHRpb25zIiwgInQxMCIsICJoYW5kbGVTZWxlY3QiLCAibW9kZSIsICJiYjMzIiwgInNldFNhbmRib3hTZXR0aW5ncyIsICJlbmFibGVkIiwgImF1dG9BbGxvd0Jhc2hJZlNhbmRib3hlZCIsICJ0MTEiLCAiY29uZmlybTpubyIsICJ1bmRlZmluZWQiLCAiZGlzcGxheSIsICJ0MTIiLCAiY29udGV4dCIsICJ1c2VLZXliaW5kaW5ncyIsICJ0MTMiLCAibW9kZVRhYiIsICJ0MTQiLCAib3ZlcnJpZGVzVGFiIiwgInQxNSIsICJjb25maWdUYWIiLCAiaGFzRXJyb3JzIiwgImVycm9ycyIsICJ0MTYiLCAidGFicyIsICJ0MTciLCAiU2FuZGJveE1vZGVUYWIiLCAib25TZWxlY3QiLCAiaGVhZGVyRm9jdXNlZCIsICJmb2N1c0hlYWRlciIsICJ1c2VUYWJIZWFkZXJGb2N1cyIsICJyZWxhdGl2ZSIsICJjYWxsIiwgIm9uRG9uZSIsICJfY29udGV4dCIsICJhcmdzIiwgInNldHRpbmdzIiwgImdldFNldHRpbmdzX0RFUFJFQ0FURUQiLCAidGhlbWVOYW1lIiwgInRoZW1lIiwgInBsYXRmb3JtIiwgImdldFBsYXRmb3JtIiwgIlNhbmRib3hNYW5hZ2VyIiwgImlzU3VwcG9ydGVkUGxhdGZvcm0iLCAiZXJyb3JNZXNzYWdlIiwgIm1lc3NhZ2UiLCAiY29sb3IiLCAiZGVwQ2hlY2siLCAiY2hlY2tEZXBlbmRlbmNpZXMiLCAiaXNQbGF0Zm9ybUluRW5hYmxlZExpc3QiLCAiYXJlU2FuZGJveFNldHRpbmdzTG9ja2VkQnlQb2xpY3kiLCAidHJpbW1lZEFyZ3MiLCAidHJpbSIsICJwYXJ0cyIsICJzcGxpdCIsICJzdWJjb21tYW5kIiwgImNvbW1hbmRQYXR0ZXJuIiwgInNsaWNlIiwgImxlbmd0aCIsICJjbGVhblBhdHRlcm4iLCAicmVwbGFjZSIsICJhZGRUb0V4Y2x1ZGVkQ29tbWFuZHMiLCAibG9jYWxTZXR0aW5nc1BhdGgiLCAiZ2V0U2V0dGluZ3NGaWxlUGF0aEZvclNvdXJjZSIsICJyZWxhdGl2ZVBhdGgiLCAiZ2V0Q3dkU3RhdGUiXQp9Cg==
