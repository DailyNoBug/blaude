#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_setup,
  isChromeExtensionInstalled
} from "./chunk-BP275YJQ.mjs";
import "./chunk-7DA2PBIX.mjs";
import {
  Select,
  init_AppState,
  init_select,
  useAppState
} from "./chunk-BQ2W5UUK.mjs";
import "./chunk-PJK4KGGT.mjs";
import {
  Dialog,
  init_Dialog
} from "./chunk-UPQJMBLU.mjs";
import "./chunk-JWBPLKI2.mjs";
import {
  CLAUDE_IN_CHROME_MCP_SERVER_NAME,
  init_common,
  openInChrome
} from "./chunk-B5LIYBEU.mjs";
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
import {
  init_browser,
  openBrowser
} from "./chunk-EL6ZMCGB.mjs";
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
  useState
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-H3V45RZC.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  getGlobalConfig,
  init_auth,
  init_config,
  isClaudeAISubscriber,
  saveGlobalConfig
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
import {
  env,
  init_env
} from "./chunk-TR6BOGPZ.mjs";
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
import "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import {
  init_envUtils
} from "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/commands/chrome/chrome.tsx
function ClaudeInChromeMenu(t0) {
  const $ = c(41);
  const {
    onDone,
    isExtensionInstalled: installed,
    configEnabled,
    isClaudeAISubscriber: isClaudeAISubscriber2,
    isWSL
  } = t0;
  const mcpClients = useAppState(_temp);
  const [selectKey, setSelectKey] = useState(0);
  const [enabledByDefault, setEnabledByDefault] = useState(configEnabled ?? false);
  const [showInstallHint, setShowInstallHint] = useState(false);
  const [isExtensionInstalled, setIsExtensionInstalled] = useState(installed);
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = false;
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const isHomespace = t1;
  let t2;
  if ($[1] !== mcpClients) {
    t2 = mcpClients.find(_temp2);
    $[1] = mcpClients;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  const chromeClient = t2;
  const isConnected = chromeClient?.type === "connected";
  let t3;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = function openUrl2(url) {
      if (isHomespace) {
        openBrowser(url);
      } else {
        openInChrome(url);
      }
    };
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  const openUrl = t3;
  let t4;
  if ($[4] !== enabledByDefault) {
    t4 = function handleAction2(action) {
      bb22: switch (action) {
        case "install-extension": {
          setSelectKey(_temp3);
          setShowInstallHint(true);
          openUrl(CHROME_EXTENSION_URL);
          break bb22;
        }
        case "reconnect": {
          setSelectKey(_temp4);
          isChromeExtensionInstalled().then((installed_0) => {
            setIsExtensionInstalled(installed_0);
            if (installed_0) {
              setShowInstallHint(false);
            }
          });
          openUrl(CHROME_RECONNECT_URL);
          break bb22;
        }
        case "manage-permissions": {
          setSelectKey(_temp5);
          openUrl(CHROME_PERMISSIONS_URL);
          break bb22;
        }
        case "toggle-default": {
          const newValue = !enabledByDefault;
          saveGlobalConfig((current) => ({
            ...current,
            claudeInChromeDefaultEnabled: newValue
          }));
          setEnabledByDefault(newValue);
        }
      }
    };
    $[4] = enabledByDefault;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  const handleAction = t4;
  let options;
  if ($[6] !== enabledByDefault || $[7] !== isExtensionInstalled) {
    options = [];
    const requiresExtensionSuffix = isExtensionInstalled ? "" : " (requires extension)";
    if (!isExtensionInstalled && !isHomespace) {
      let t53;
      if ($[9] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t53 = {
          label: "Install Chrome extension",
          value: "install-extension"
        };
        $[9] = t53;
      } else {
        t53 = $[9];
      }
      options.push(t53);
    }
    let t52;
    if ($[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t52 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "Manage permissions");
      $[10] = t52;
    } else {
      t52 = $[10];
    }
    let t62;
    if ($[11] !== requiresExtensionSuffix) {
      t62 = {
        label: /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, t52, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, requiresExtensionSuffix)),
        value: "manage-permissions"
      };
      $[11] = requiresExtensionSuffix;
      $[12] = t62;
    } else {
      t62 = $[12];
    }
    let t72;
    if ($[13] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t72 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "Reconnect extension");
      $[13] = t72;
    } else {
      t72 = $[13];
    }
    let t82;
    if ($[14] !== requiresExtensionSuffix) {
      t82 = {
        label: /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, t72, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, requiresExtensionSuffix)),
        value: "reconnect"
      };
      $[14] = requiresExtensionSuffix;
      $[15] = t82;
    } else {
      t82 = $[15];
    }
    const t92 = `Enabled by default: ${enabledByDefault ? "Yes" : "No"}`;
    let t102;
    if ($[16] !== t92) {
      t102 = {
        label: t92,
        value: "toggle-default"
      };
      $[16] = t92;
      $[17] = t102;
    } else {
      t102 = $[17];
    }
    options.push(t62, t82, t102);
    $[6] = enabledByDefault;
    $[7] = isExtensionInstalled;
    $[8] = options;
  } else {
    options = $[8];
  }
  const isDisabled = isWSL || !isClaudeAISubscriber2;
  let t5;
  if ($[18] !== onDone) {
    t5 = () => onDone();
    $[18] = onDone;
    $[19] = t5;
  } else {
    t5 = $[19];
  }
  let t6;
  if ($[20] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "Blaude in Chrome works with the Chrome extension to let you control your browser directly from Blaude. Navigate websites, fill forms, capture screenshots, record GIFs, and debug with console logs and network requests.");
    $[20] = t6;
  } else {
    t6 = $[20];
  }
  let t7;
  if ($[21] !== isWSL) {
    t7 = isWSL && /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, "Blaude in Chrome is not supported in WSL at this time.");
    $[21] = isWSL;
    $[22] = t7;
  } else {
    t7 = $[22];
  }
  let t8;
  if ($[23] !== isClaudeAISubscriber2) {
    t8 = !isClaudeAISubscriber2 && /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, "Blaude in Chrome requires a claude.ai subscription.");
    $[23] = isClaudeAISubscriber2;
    $[24] = t8;
  } else {
    t8 = $[24];
  }
  let t9;
  if ($[25] !== handleAction || $[26] !== isConnected || $[27] !== isDisabled || $[28] !== isExtensionInstalled || $[29] !== options || $[30] !== selectKey || $[31] !== showInstallHint) {
    t9 = !isDisabled && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, !isHomespace && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, null, "Status:", " ", isConnected ? /* @__PURE__ */ react_default.createElement(ThemedText, { color: "success" }, "Enabled") : /* @__PURE__ */ react_default.createElement(ThemedText, { color: "inactive" }, "Disabled")), /* @__PURE__ */ react_default.createElement(ThemedText, null, "Extension:", " ", isExtensionInstalled ? /* @__PURE__ */ react_default.createElement(ThemedText, { color: "success" }, "Installed") : /* @__PURE__ */ react_default.createElement(ThemedText, { color: "warning" }, "Not detected"))), /* @__PURE__ */ react_default.createElement(Select, { key: selectKey, options, onChange: handleAction, hideIndexes: true }), showInstallHint && /* @__PURE__ */ react_default.createElement(ThemedText, { color: "warning" }, "Once installed, select ", '"Reconnect extension"', " to connect."), /* @__PURE__ */ react_default.createElement(ThemedText, null, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Usage: "), /* @__PURE__ */ react_default.createElement(ThemedText, null, "blaude --chrome"), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, " or "), /* @__PURE__ */ react_default.createElement(ThemedText, null, "blaude --no-chrome")), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Site-level permissions are inherited from the Chrome extension. Manage permissions in the Chrome extension settings to control which sites Blaude can browse, click, and type on."));
    $[25] = handleAction;
    $[26] = isConnected;
    $[27] = isDisabled;
    $[28] = isExtensionInstalled;
    $[29] = options;
    $[30] = selectKey;
    $[31] = showInstallHint;
    $[32] = t9;
  } else {
    t9 = $[32];
  }
  let t10;
  if ($[33] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t10 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Learn more: https://code.claude.com/docs/en/chrome");
    $[33] = t10;
  } else {
    t10 = $[33];
  }
  let t11;
  if ($[34] !== t7 || $[35] !== t8 || $[36] !== t9) {
    t11 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, t6, t7, t8, t9, t10);
    $[34] = t7;
    $[35] = t8;
    $[36] = t9;
    $[37] = t11;
  } else {
    t11 = $[37];
  }
  let t12;
  if ($[38] !== t11 || $[39] !== t5) {
    t12 = /* @__PURE__ */ react_default.createElement(Dialog, { title: "Blaude in Chrome (Beta)", onCancel: t5, color: "chromeYellow" }, t11);
    $[38] = t11;
    $[39] = t5;
    $[40] = t12;
  } else {
    t12 = $[40];
  }
  return t12;
}
function _temp5(k) {
  return k + 1;
}
function _temp4(k_0) {
  return k_0 + 1;
}
function _temp3(k_1) {
  return k_1 + 1;
}
function _temp2(c2) {
  return c2.name === CLAUDE_IN_CHROME_MCP_SERVER_NAME;
}
function _temp(s) {
  return s.mcp.clients;
}
var CHROME_EXTENSION_URL, CHROME_PERMISSIONS_URL, CHROME_RECONNECT_URL, call;
var init_chrome = __esm({
  "src/commands/chrome/chrome.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_select();
    init_Dialog();
    init_ink();
    init_AppState();
    init_auth();
    init_browser();
    init_common();
    init_setup();
    init_config();
    init_env();
    init_envUtils();
    CHROME_EXTENSION_URL = "https://claude.ai/chrome";
    CHROME_PERMISSIONS_URL = "https://clau.de/chrome/permissions";
    CHROME_RECONNECT_URL = "https://clau.de/chrome/reconnect";
    call = async function(onDone) {
      const isExtensionInstalled = await isChromeExtensionInstalled();
      const config = getGlobalConfig();
      const isSubscriber = isClaudeAISubscriber();
      const isWSL = env.isWslEnvironment();
      return /* @__PURE__ */ react_default.createElement(ClaudeInChromeMenu, { onDone, isExtensionInstalled, configEnabled: config.claudeInChromeDefaultEnabled, isClaudeAISubscriber: isSubscriber, isWSL });
    };
  }
});
init_chrome();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL2Nocm9tZS9jaHJvbWUudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHR5cGUgT3B0aW9uV2l0aERlc2NyaXB0aW9uLFxuICBTZWxlY3QsXG59IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ3VzdG9tU2VsZWN0L3NlbGVjdC5qcydcbmltcG9ydCB7IERpYWxvZyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGVzaWduLXN5c3RlbS9EaWFsb2cuanMnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQgeyB1c2VBcHBTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlL0FwcFN0YXRlLmpzJ1xuaW1wb3J0IHsgaXNDbGF1ZGVBSVN1YnNjcmliZXIgfSBmcm9tICcuLi8uLi91dGlscy9hdXRoLmpzJ1xuaW1wb3J0IHsgb3BlbkJyb3dzZXIgfSBmcm9tICcuLi8uLi91dGlscy9icm93c2VyLmpzJ1xuaW1wb3J0IHtcbiAgQ0xBVURFX0lOX0NIUk9NRV9NQ1BfU0VSVkVSX05BTUUsXG4gIG9wZW5JbkNocm9tZSxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvY2xhdWRlSW5DaHJvbWUvY29tbW9uLmpzJ1xuaW1wb3J0IHsgaXNDaHJvbWVFeHRlbnNpb25JbnN0YWxsZWQgfSBmcm9tICcuLi8uLi91dGlscy9jbGF1ZGVJbkNocm9tZS9zZXR1cC5qcydcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZywgc2F2ZUdsb2JhbENvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbmZpZy5qcydcbmltcG9ydCB7IGVudiB9IGZyb20gJy4uLy4uL3V0aWxzL2Vudi5qcydcbmltcG9ydCB7IGlzUnVubmluZ09uSG9tZXNwYWNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZW52VXRpbHMuanMnXG5cbmNvbnN0IENIUk9NRV9FWFRFTlNJT05fVVJMID0gJ2h0dHBzOi8vY2xhdWRlLmFpL2Nocm9tZSdcbmNvbnN0IENIUk9NRV9QRVJNSVNTSU9OU19VUkwgPSAnaHR0cHM6Ly9jbGF1LmRlL2Nocm9tZS9wZXJtaXNzaW9ucydcbmNvbnN0IENIUk9NRV9SRUNPTk5FQ1RfVVJMID0gJ2h0dHBzOi8vY2xhdS5kZS9jaHJvbWUvcmVjb25uZWN0J1xuXG50eXBlIE1lbnVBY3Rpb24gPVxuICB8ICdpbnN0YWxsLWV4dGVuc2lvbidcbiAgfCAncmVjb25uZWN0J1xuICB8ICdtYW5hZ2UtcGVybWlzc2lvbnMnXG4gIHwgJ3RvZ2dsZS1kZWZhdWx0J1xuXG50eXBlIFByb3BzID0ge1xuICBvbkRvbmU6IChyZXN1bHQ/OiBzdHJpbmcpID0+IHZvaWRcbiAgaXNFeHRlbnNpb25JbnN0YWxsZWQ6IGJvb2xlYW5cbiAgY29uZmlnRW5hYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZFxuICBpc0NsYXVkZUFJU3Vic2NyaWJlcjogYm9vbGVhblxuICBpc1dTTDogYm9vbGVhblxufVxuXG5mdW5jdGlvbiBDbGF1ZGVJbkNocm9tZU1lbnUoe1xuICBvbkRvbmUsXG4gIGlzRXh0ZW5zaW9uSW5zdGFsbGVkOiBpbnN0YWxsZWQsXG4gIGNvbmZpZ0VuYWJsZWQsXG4gIGlzQ2xhdWRlQUlTdWJzY3JpYmVyLFxuICBpc1dTTCxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgbWNwQ2xpZW50cyA9IHVzZUFwcFN0YXRlKHMgPT4gcy5tY3AuY2xpZW50cylcbiAgY29uc3QgW3NlbGVjdEtleSwgc2V0U2VsZWN0S2V5XSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtlbmFibGVkQnlEZWZhdWx0LCBzZXRFbmFibGVkQnlEZWZhdWx0XSA9IHVzZVN0YXRlKFxuICAgIGNvbmZpZ0VuYWJsZWQgPz8gZmFsc2UsXG4gIClcbiAgY29uc3QgW3Nob3dJbnN0YWxsSGludCwgc2V0U2hvd0luc3RhbGxIaW50XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbaXNFeHRlbnNpb25JbnN0YWxsZWQsIHNldElzRXh0ZW5zaW9uSW5zdGFsbGVkXSA9IHVzZVN0YXRlKGluc3RhbGxlZClcblxuICBjb25zdCBpc0hvbWVzcGFjZSA9IFwiZXh0ZXJuYWxcIiA9PT0gJ2FudCcgJiYgaXNSdW5uaW5nT25Ib21lc3BhY2UoKVxuXG4gIGNvbnN0IGNocm9tZUNsaWVudCA9IG1jcENsaWVudHMuZmluZChcbiAgICBjID0+IGMubmFtZSA9PT0gQ0xBVURFX0lOX0NIUk9NRV9NQ1BfU0VSVkVSX05BTUUsXG4gIClcbiAgY29uc3QgaXNDb25uZWN0ZWQgPSBjaHJvbWVDbGllbnQ/LnR5cGUgPT09ICdjb25uZWN0ZWQnXG5cbiAgZnVuY3Rpb24gb3BlblVybCh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChpc0hvbWVzcGFjZSkge1xuICAgICAgdm9pZCBvcGVuQnJvd3Nlcih1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHZvaWQgb3BlbkluQ2hyb21lKHVybClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVBY3Rpb24oYWN0aW9uOiBNZW51QWN0aW9uKTogdm9pZCB7XG4gICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2luc3RhbGwtZXh0ZW5zaW9uJzpcbiAgICAgICAgc2V0U2VsZWN0S2V5KGsgPT4gayArIDEpXG4gICAgICAgIHNldFNob3dJbnN0YWxsSGludCh0cnVlKVxuICAgICAgICBvcGVuVXJsKENIUk9NRV9FWFRFTlNJT05fVVJMKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncmVjb25uZWN0JzpcbiAgICAgICAgc2V0U2VsZWN0S2V5KGsgPT4gayArIDEpXG4gICAgICAgIHZvaWQgaXNDaHJvbWVFeHRlbnNpb25JbnN0YWxsZWQoKS50aGVuKGluc3RhbGxlZCA9PiB7XG4gICAgICAgICAgc2V0SXNFeHRlbnNpb25JbnN0YWxsZWQoaW5zdGFsbGVkKVxuICAgICAgICAgIGlmIChpbnN0YWxsZWQpIHtcbiAgICAgICAgICAgIHNldFNob3dJbnN0YWxsSGludChmYWxzZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIG9wZW5VcmwoQ0hST01FX1JFQ09OTkVDVF9VUkwpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdtYW5hZ2UtcGVybWlzc2lvbnMnOlxuICAgICAgICBzZXRTZWxlY3RLZXkoayA9PiBrICsgMSlcbiAgICAgICAgb3BlblVybChDSFJPTUVfUEVSTUlTU0lPTlNfVVJMKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAndG9nZ2xlLWRlZmF1bHQnOiB7XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gIWVuYWJsZWRCeURlZmF1bHRcbiAgICAgICAgc2F2ZUdsb2JhbENvbmZpZyhjdXJyZW50ID0+ICh7XG4gICAgICAgICAgLi4uY3VycmVudCxcbiAgICAgICAgICBjbGF1ZGVJbkNocm9tZURlZmF1bHRFbmFibGVkOiBuZXdWYWx1ZSxcbiAgICAgICAgfSkpXG4gICAgICAgIHNldEVuYWJsZWRCeURlZmF1bHQobmV3VmFsdWUpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb3B0aW9uczogT3B0aW9uV2l0aERlc2NyaXB0aW9uPE1lbnVBY3Rpb24+W10gPSBbXVxuICBjb25zdCByZXF1aXJlc0V4dGVuc2lvblN1ZmZpeCA9IGlzRXh0ZW5zaW9uSW5zdGFsbGVkXG4gICAgPyAnJ1xuICAgIDogJyAocmVxdWlyZXMgZXh0ZW5zaW9uKSdcblxuICBpZiAoIWlzRXh0ZW5zaW9uSW5zdGFsbGVkICYmICFpc0hvbWVzcGFjZSkge1xuICAgIG9wdGlvbnMucHVzaCh7XG4gICAgICBsYWJlbDogJ0luc3RhbGwgQ2hyb21lIGV4dGVuc2lvbicsXG4gICAgICB2YWx1ZTogJ2luc3RhbGwtZXh0ZW5zaW9uJyxcbiAgICB9KVxuICB9XG5cbiAgb3B0aW9ucy5wdXNoKFxuICAgIHtcbiAgICAgIGxhYmVsOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFRleHQ+TWFuYWdlIHBlcm1pc3Npb25zPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPntyZXF1aXJlc0V4dGVuc2lvblN1ZmZpeH08L1RleHQ+XG4gICAgICAgIDwvPlxuICAgICAgKSxcbiAgICAgIHZhbHVlOiAnbWFuYWdlLXBlcm1pc3Npb25zJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFRleHQ+UmVjb25uZWN0IGV4dGVuc2lvbjwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj57cmVxdWlyZXNFeHRlbnNpb25TdWZmaXh9PC9UZXh0PlxuICAgICAgICA8Lz5cbiAgICAgICksXG4gICAgICB2YWx1ZTogJ3JlY29ubmVjdCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogYEVuYWJsZWQgYnkgZGVmYXVsdDogJHtlbmFibGVkQnlEZWZhdWx0ID8gJ1llcycgOiAnTm8nfWAsXG4gICAgICB2YWx1ZTogJ3RvZ2dsZS1kZWZhdWx0JyxcbiAgICB9LFxuICApXG5cbiAgY29uc3QgaXNEaXNhYmxlZCA9XG4gICAgaXNXU0wgfHwgKFwiZXh0ZXJuYWxcIiAhPT0gJ2FudCcgJiYgIWlzQ2xhdWRlQUlTdWJzY3JpYmVyKVxuXG4gIHJldHVybiAoXG4gICAgPERpYWxvZ1xuICAgICAgdGl0bGU9XCJDbGF1ZGUgaW4gQ2hyb21lIChCZXRhKVwiXG4gICAgICBvbkNhbmNlbD17KCkgPT4gb25Eb25lKCl9XG4gICAgICBjb2xvcj1cImNocm9tZVllbGxvd1wiXG4gICAgPlxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXsxfT5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgQ2xhdWRlIGluIENocm9tZSB3b3JrcyB3aXRoIHRoZSBDaHJvbWUgZXh0ZW5zaW9uIHRvIGxldCB5b3UgY29udHJvbFxuICAgICAgICAgIHlvdXIgYnJvd3NlciBkaXJlY3RseSBmcm9tIENsYXVkZSBDb2RlLiBOYXZpZ2F0ZSB3ZWJzaXRlcywgZmlsbCBmb3JtcyxcbiAgICAgICAgICBjYXB0dXJlIHNjcmVlbnNob3RzLCByZWNvcmQgR0lGcywgYW5kIGRlYnVnIHdpdGggY29uc29sZSBsb2dzIGFuZFxuICAgICAgICAgIG5ldHdvcmsgcmVxdWVzdHMuXG4gICAgICAgIDwvVGV4dD5cblxuICAgICAgICB7aXNXU0wgJiYgKFxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZXJyb3JcIj5cbiAgICAgICAgICAgIENsYXVkZSBpbiBDaHJvbWUgaXMgbm90IHN1cHBvcnRlZCBpbiBXU0wgYXQgdGhpcyB0aW1lLlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgKX1cblxuXG4gICAgICAgIHtcImV4dGVybmFsXCIgIT09ICdhbnQnICYmICFpc0NsYXVkZUFJU3Vic2NyaWJlciAmJiAoXG4gICAgICAgICAgPFRleHQgY29sb3I9XCJlcnJvclwiPlxuICAgICAgICAgICAgQ2xhdWRlIGluIENocm9tZSByZXF1aXJlcyBhIGNsYXVkZS5haSBzdWJzY3JpcHRpb24uXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICApfVxuXG4gICAgICAgIHshaXNEaXNhYmxlZCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHshaXNIb21lc3BhY2UgJiYgKFxuICAgICAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgIFN0YXR1czp7JyAnfVxuICAgICAgICAgICAgICAgICAge2lzQ29ubmVjdGVkID8gKFxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cInN1Y2Nlc3NcIj5FbmFibGVkPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJpbmFjdGl2ZVwiPkRpc2FibGVkPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICBFeHRlbnNpb246eycgJ31cbiAgICAgICAgICAgICAgICAgIHtpc0V4dGVuc2lvbkluc3RhbGxlZCA/IChcbiAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJzdWNjZXNzXCI+SW5zdGFsbGVkPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJ3YXJuaW5nXCI+Tm90IGRldGVjdGVkPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAga2V5PXtzZWxlY3RLZXl9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBY3Rpb259XG4gICAgICAgICAgICAgIGhpZGVJbmRleGVzXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICB7c2hvd0luc3RhbGxIaW50ICYmIChcbiAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJ3YXJuaW5nXCI+XG4gICAgICAgICAgICAgICAgT25jZSBpbnN0YWxsZWQsIHNlbGVjdCB7J1wiUmVjb25uZWN0IGV4dGVuc2lvblwiJ30gdG8gY29ubmVjdC5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlVzYWdlOiA8L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0PmNsYXVkZSAtLWNocm9tZTwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+IG9yIDwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHQ+Y2xhdWRlIC0tbm8tY2hyb21lPC9UZXh0PlxuICAgICAgICAgICAgPC9UZXh0PlxuXG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgU2l0ZS1sZXZlbCBwZXJtaXNzaW9ucyBhcmUgaW5oZXJpdGVkIGZyb20gdGhlIENocm9tZSBleHRlbnNpb24uXG4gICAgICAgICAgICAgIE1hbmFnZSBwZXJtaXNzaW9ucyBpbiB0aGUgQ2hyb21lIGV4dGVuc2lvbiBzZXR0aW5ncyB0byBjb250cm9sXG4gICAgICAgICAgICAgIHdoaWNoIHNpdGVzIENsYXVkZSBjYW4gYnJvd3NlLCBjbGljaywgYW5kIHR5cGUgb24uXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPkxlYXJuIG1vcmU6IGh0dHBzOi8vY29kZS5jbGF1ZGUuY29tL2RvY3MvZW4vY2hyb21lPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgPC9EaWFsb2c+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGNhbGwgPSBhc3luYyBmdW5jdGlvbiAoXG4gIG9uRG9uZTogKHJlc3VsdD86IHN0cmluZykgPT4gdm9pZCxcbik6IFByb21pc2U8UmVhY3QuUmVhY3ROb2RlPiB7XG4gIGNvbnN0IGlzRXh0ZW5zaW9uSW5zdGFsbGVkID0gYXdhaXQgaXNDaHJvbWVFeHRlbnNpb25JbnN0YWxsZWQoKVxuICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKVxuICBjb25zdCBpc1N1YnNjcmliZXIgPSBpc0NsYXVkZUFJU3Vic2NyaWJlcigpXG4gIGNvbnN0IGlzV1NMID0gZW52LmlzV3NsRW52aXJvbm1lbnQoKVxuXG4gIHJldHVybiAoXG4gICAgPENsYXVkZUluQ2hyb21lTWVudVxuICAgICAgb25Eb25lPXtvbkRvbmV9XG4gICAgICBpc0V4dGVuc2lvbkluc3RhbGxlZD17aXNFeHRlbnNpb25JbnN0YWxsZWR9XG4gICAgICBjb25maWdFbmFibGVkPXtjb25maWcuY2xhdWRlSW5DaHJvbWVEZWZhdWx0RW5hYmxlZH1cbiAgICAgIGlzQ2xhdWRlQUlTdWJzY3JpYmVyPXtpc1N1YnNjcmliZXJ9XG4gICAgICBpc1dTTD17aXNXU0x9XG4gICAgLz5cbiAgKVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFDQSxTQUFBQSxtQkFBQUMsSUFBQTtBQUFBLFFBQUFDLElBQUFDLEVBQUEsRUFBQTtBQUE0QixRQUFBO0lBQUFDO0lBQUFDLHNCQUFBQztJQUFBQztJQUFBQyxzQkFBQUE7SUFBQUM7RUFBQSxJQUFBUjtBQU8xQixRQUFBUyxhQUFtQkMsWUFBWUMsS0FBa0I7QUFDakQsUUFBQSxDQUFBQyxXQUFBQyxZQUFBLElBQWtDQyxTQUFTLENBQUM7QUFDNUMsUUFBQSxDQUFBQyxrQkFBQUMsbUJBQUEsSUFBZ0RGLFNBQzlDUixpQkFBQSxLQUNGO0FBQ0EsUUFBQSxDQUFBVyxpQkFBQUMsa0JBQUEsSUFBOENKLFNBQVMsS0FBSztBQUM1RCxRQUFBLENBQUFWLHNCQUFBZSx1QkFBQSxJQUF3REwsU0FBU1QsU0FBUztBQUFDLE1BQUFlO0FBQUEsTUFBQW5CLEVBQUEsQ0FBQSxNQUFBb0IsdUJBQUFDLElBQUEsMkJBQUEsR0FBQTtBQUV2REYsU0FBQTtBQUE4Q25CLE1BQUEsQ0FBQSxJQUFBbUI7RUFBQSxPQUFBO0FBQUFBLFNBQUFuQixFQUFBLENBQUE7RUFBQTtBQUFsRSxRQUFBc0IsY0FBb0JIO0FBQThDLE1BQUFJO0FBQUEsTUFBQXZCLEVBQUEsQ0FBQSxNQUFBUSxZQUFBO0FBRTdDZSxTQUFBZixXQUFVZ0IsS0FDN0JDLE1BQ0Y7QUFBQ3pCLE1BQUEsQ0FBQSxJQUFBUTtBQUFBUixNQUFBLENBQUEsSUFBQXVCO0VBQUEsT0FBQTtBQUFBQSxTQUFBdkIsRUFBQSxDQUFBO0VBQUE7QUFGRCxRQUFBMEIsZUFBcUJIO0FBR3JCLFFBQUFJLGNBQW9CRCxjQUFZRSxTQUFXO0FBQVcsTUFBQUM7QUFBQSxNQUFBN0IsRUFBQSxDQUFBLE1BQUFvQix1QkFBQUMsSUFBQSwyQkFBQSxHQUFBO0FBRXREUSxTQUFBLFNBQUFDLFNBQUFDLEtBQUE7QUFDRSxVQUFJVCxhQUFXO0FBQ1JVLG9CQUFZRCxHQUFHO01BQUMsT0FBQTtBQUVoQkUscUJBQWFGLEdBQUc7TUFBQztJQUN2QjtBQUNGL0IsTUFBQSxDQUFBLElBQUE2QjtFQUFBLE9BQUE7QUFBQUEsU0FBQTdCLEVBQUEsQ0FBQTtFQUFBO0FBTkQsUUFBQThCLFVBQUFEO0FBTUMsTUFBQUs7QUFBQSxNQUFBbEMsRUFBQSxDQUFBLE1BQUFjLGtCQUFBO0FBRURvQixTQUFBLFNBQUFDLGNBQUFDLFFBQUE7QUFBQUMsV0FDRSxTQUFRRCxRQUFNO1FBQUEsS0FDUCxxQkFBbUI7QUFDdEJ4Qix1QkFBYTBCLE1BQVU7QUFDdkJyQiw2QkFBbUIsSUFBSTtBQUN2QmEsa0JBQVFTLG9CQUFvQjtBQUM1QixnQkFBQUY7UUFBSztRQUFBLEtBQ0YsYUFBVztBQUNkekIsdUJBQWE0QixNQUFVO0FBQ2xCQyxxQ0FBMkIsRUFBQ0MsS0FBTUMsaUJBQUE7QUFDckN6QixvQ0FBd0JkLFdBQVM7QUFDakMsZ0JBQUlBLGFBQVM7QUFDWGEsaUNBQW1CLEtBQUs7WUFBQztVQUMxQixDQUNGO0FBQ0RhLGtCQUFRYyxvQkFBb0I7QUFDNUIsZ0JBQUFQO1FBQUs7UUFBQSxLQUNGLHNCQUFvQjtBQUN2QnpCLHVCQUFhaUMsTUFBVTtBQUN2QmYsa0JBQVFnQixzQkFBc0I7QUFDOUIsZ0JBQUFUO1FBQUs7UUFBQSxLQUNGLGtCQUFnQjtBQUNuQixnQkFBQVUsV0FBaUIsQ0FBQ2pDO0FBQ2xCa0MsMkJBQWlCQyxjQUFZO1lBQUEsR0FDeEJBO1lBQU9DLDhCQUNvQkg7VUFDaEMsRUFBRTtBQUNGaEMsOEJBQW9CZ0MsUUFBUTtRQUFDO01BR2pDO0lBQUM7QUFDRi9DLE1BQUEsQ0FBQSxJQUFBYztBQUFBZCxNQUFBLENBQUEsSUFBQWtDO0VBQUEsT0FBQTtBQUFBQSxTQUFBbEMsRUFBQSxDQUFBO0VBQUE7QUEvQkQsUUFBQW1DLGVBQUFEO0FBK0JDLE1BQUFpQjtBQUFBLE1BQUFuRCxFQUFBLENBQUEsTUFBQWMsb0JBQUFkLEVBQUEsQ0FBQSxNQUFBRyxzQkFBQTtBQUVEZ0QsY0FBcUQsQ0FBQTtBQUNyRCxVQUFBQywwQkFBZ0NqRCx1QkFBQSxLQUFBO0FBSWhDLFFBQUksQ0FBQ0Esd0JBQUQsQ0FBMEJtQixhQUFXO0FBQUEsVUFBQStCO0FBQUEsVUFBQXJELEVBQUEsQ0FBQSxNQUFBb0IsdUJBQUFDLElBQUEsMkJBQUEsR0FBQTtBQUMxQmdDLFFBQUFBLE1BQUE7VUFBQUMsT0FDSjtVQUEwQkMsT0FDMUI7UUFDVDtBQUFDdkQsVUFBQSxDQUFBLElBQUFxRDtNQUFBLE9BQUE7QUFBQUEsUUFBQUEsTUFBQXJELEVBQUEsQ0FBQTtNQUFBO0FBSERtRCxjQUFPSyxLQUFNSCxHQUdaO0lBQUM7QUFDSCxRQUFBQTtBQUFBLFFBQUFyRCxFQUFBLEVBQUEsTUFBQW9CLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFNT2dDLE1BQUFBLE1BQUEsNENBQUMsa0JBQUssb0JBQWtCO0FBQU9yRCxRQUFBLEVBQUEsSUFBQXFEO0lBQUEsT0FBQTtBQUFBQSxNQUFBQSxNQUFBckQsRUFBQSxFQUFBO0lBQUE7QUFBQSxRQUFBeUQ7QUFBQSxRQUFBekQsRUFBQSxFQUFBLE1BQUFvRCx5QkFBQTtBQUhyQ0ssTUFBQUEsTUFBQTtRQUFBSCxPQUVJLDBFQUNFRCxLQUNBLDRDQUFDLGNBQUssVUFBQSxRQUFVRCx1QkFBd0IsQ0FBTztRQUM5Q0csT0FFRTtNQUNUO0FBQUN2RCxRQUFBLEVBQUEsSUFBQW9EO0FBQUFwRCxRQUFBLEVBQUEsSUFBQXlEO0lBQUEsT0FBQTtBQUFBQSxNQUFBQSxNQUFBekQsRUFBQSxFQUFBO0lBQUE7QUFBQSxRQUFBMEQ7QUFBQSxRQUFBMUQsRUFBQSxFQUFBLE1BQUFvQix1QkFBQUMsSUFBQSwyQkFBQSxHQUFBO0FBSUtxQyxNQUFBQSxNQUFBLDRDQUFDLGtCQUFLLHFCQUFtQjtBQUFPMUQsUUFBQSxFQUFBLElBQUEwRDtJQUFBLE9BQUE7QUFBQUEsTUFBQUEsTUFBQTFELEVBQUEsRUFBQTtJQUFBO0FBQUEsUUFBQTJEO0FBQUEsUUFBQTNELEVBQUEsRUFBQSxNQUFBb0QseUJBQUE7QUFIdENPLE1BQUFBLE1BQUE7UUFBQUwsT0FFSSwwRUFDRUksS0FDQSw0Q0FBQyxjQUFLLFVBQUEsUUFBVU4sdUJBQXdCLENBQU87UUFDOUNHLE9BRUU7TUFDVDtBQUFDdkQsUUFBQSxFQUFBLElBQUFvRDtBQUFBcEQsUUFBQSxFQUFBLElBQUEyRDtJQUFBLE9BQUE7QUFBQUEsTUFBQUEsTUFBQTNELEVBQUEsRUFBQTtJQUFBO0FBRVEsVUFBQTRELE1BQUEsdUJBQXVCOUMsbUJBQUEsUUFBQSxJQUErQjtBQUFFLFFBQUErQztBQUFBLFFBQUE3RCxFQUFBLEVBQUEsTUFBQTRELEtBQUE7QUFEakVDLE1BQUFBLE9BQUE7UUFBQVAsT0FDU007UUFBd0RMLE9BQ3hEO01BQ1Q7QUFBQ3ZELFFBQUEsRUFBQSxJQUFBNEQ7QUFBQTVELFFBQUEsRUFBQSxJQUFBNkQ7SUFBQSxPQUFBO0FBQUFBLE1BQUFBLE9BQUE3RCxFQUFBLEVBQUE7SUFBQTtBQXRCSG1ELFlBQU9LLEtBQ0xDLEtBU0FFLEtBU0FFLElBSUY7QUFBQzdELE1BQUEsQ0FBQSxJQUFBYztBQUFBZCxNQUFBLENBQUEsSUFBQUc7QUFBQUgsTUFBQSxDQUFBLElBQUFtRDtFQUFBLE9BQUE7QUFBQUEsY0FBQW5ELEVBQUEsQ0FBQTtFQUFBO0FBRUQsUUFBQThELGFBQ0V2RCxTQUFVLENBQXlCRDtBQUFxQixNQUFBK0M7QUFBQSxNQUFBckQsRUFBQSxFQUFBLE1BQUFFLFFBQUE7QUFLNUNtRCxTQUFBQSxNQUFNbkQsT0FBTztBQUFDRixNQUFBLEVBQUEsSUFBQUU7QUFBQUYsTUFBQSxFQUFBLElBQUFxRDtFQUFBLE9BQUE7QUFBQUEsU0FBQXJELEVBQUEsRUFBQTtFQUFBO0FBQUEsTUFBQXlEO0FBQUEsTUFBQXpELEVBQUEsRUFBQSxNQUFBb0IsdUJBQUFDLElBQUEsMkJBQUEsR0FBQTtBQUl0Qm9DLFNBQUEsNENBQUMsa0JBQUssMk5BQUE7QUFLQ3pELE1BQUEsRUFBQSxJQUFBeUQ7RUFBQSxPQUFBO0FBQUFBLFNBQUF6RCxFQUFBLEVBQUE7RUFBQTtBQUFBLE1BQUEwRDtBQUFBLE1BQUExRCxFQUFBLEVBQUEsTUFBQU8sT0FBQTtBQUVObUQsU0FBQW5ELFNBQ0MsNENBQUMsY0FBVyxPQUFBLFdBQVEsd0RBRXBCO0FBQ0RQLE1BQUEsRUFBQSxJQUFBTztBQUFBUCxNQUFBLEVBQUEsSUFBQTBEO0VBQUEsT0FBQTtBQUFBQSxTQUFBMUQsRUFBQSxFQUFBO0VBQUE7QUFBQSxNQUFBMkQ7QUFBQSxNQUFBM0QsRUFBQSxFQUFBLE1BQUFNLHVCQUFBO0FBR0FxRCxTQUFBLENBQXlCckQseUJBQ3hCLDRDQUFDLGNBQVcsT0FBQSxXQUFRLHFEQUVwQjtBQUNETixNQUFBLEVBQUEsSUFBQU07QUFBQU4sTUFBQSxFQUFBLElBQUEyRDtFQUFBLE9BQUE7QUFBQUEsU0FBQTNELEVBQUEsRUFBQTtFQUFBO0FBQUEsTUFBQTREO0FBQUEsTUFBQTVELEVBQUEsRUFBQSxNQUFBbUMsZ0JBQUFuQyxFQUFBLEVBQUEsTUFBQTJCLGVBQUEzQixFQUFBLEVBQUEsTUFBQThELGNBQUE5RCxFQUFBLEVBQUEsTUFBQUcsd0JBQUFILEVBQUEsRUFBQSxNQUFBbUQsV0FBQW5ELEVBQUEsRUFBQSxNQUFBVyxhQUFBWCxFQUFBLEVBQUEsTUFBQWdCLGlCQUFBO0FBRUE0QyxTQUFBLENBQUNFLGNBQUQsMEVBRUksQ0FBQ3hDLGVBQ0EsNENBQUMscUJBQWtCLGVBQUEsWUFDakIsNENBQUMsa0JBQUssV0FDSSxLQUNQSyxjQUNDLDRDQUFDLGNBQVcsT0FBQSxhQUFVLFNBQU8sSUFFN0IsNENBQUMsY0FBVyxPQUFBLGNBQVcsVUFBUSxDQUVuQyxHQUNBLDRDQUFDLGtCQUFLLGNBQ08sS0FDVnhCLHVCQUNDLDRDQUFDLGNBQVcsT0FBQSxhQUFVLFdBQVMsSUFFL0IsNENBQUMsY0FBVyxPQUFBLGFBQVUsY0FBWSxDQUV0QyxDQUNGLEdBRUYsNENBQUMsVUFDTVEsS0FBQUEsV0FDSXdDLFNBQ0NoQixVQUFBQSxjQUNWLGFBQUEsTUFBVyxHQUdabkIsbUJBQ0MsNENBQUMsY0FBVyxPQUFBLGFBQVUsMkJBQ0kseUJBQXdCLGNBQ2xELEdBR0YsNENBQUMsa0JBQ0MsNENBQUMsY0FBSyxVQUFBLFFBQVMsU0FBTyxHQUN0Qiw0Q0FBQyxrQkFBSyxpQkFBZSxHQUNyQiw0Q0FBQyxjQUFLLFVBQUEsUUFBUyxNQUFJLEdBQ25CLDRDQUFDLGtCQUFLLG9CQUFrQixDQUMxQixHQUVBLDRDQUFDLGNBQUssVUFBQSxRQUFTLG1MQUlmLENBQU87QUFFVmhCLE1BQUEsRUFBQSxJQUFBbUM7QUFBQW5DLE1BQUEsRUFBQSxJQUFBMkI7QUFBQTNCLE1BQUEsRUFBQSxJQUFBOEQ7QUFBQTlELE1BQUEsRUFBQSxJQUFBRztBQUFBSCxNQUFBLEVBQUEsSUFBQW1EO0FBQUFuRCxNQUFBLEVBQUEsSUFBQVc7QUFBQVgsTUFBQSxFQUFBLElBQUFnQjtBQUFBaEIsTUFBQSxFQUFBLElBQUE0RDtFQUFBLE9BQUE7QUFBQUEsU0FBQTVELEVBQUEsRUFBQTtFQUFBO0FBQUEsTUFBQTZEO0FBQUEsTUFBQTdELEVBQUEsRUFBQSxNQUFBb0IsdUJBQUFDLElBQUEsMkJBQUEsR0FBQTtBQUNEd0MsVUFBQSw0Q0FBQyxjQUFLLFVBQUEsUUFBUyxvREFBa0Q7QUFBTzdELE1BQUEsRUFBQSxJQUFBNkQ7RUFBQSxPQUFBO0FBQUFBLFVBQUE3RCxFQUFBLEVBQUE7RUFBQTtBQUFBLE1BQUErRDtBQUFBLE1BQUEvRCxFQUFBLEVBQUEsTUFBQTBELE1BQUExRCxFQUFBLEVBQUEsTUFBQTJELE1BQUEzRCxFQUFBLEVBQUEsTUFBQTRELElBQUE7QUF0RTFFRyxVQUFBLDRDQUFDLHFCQUFrQixlQUFBLFVBQWMsS0FBQSxLQUMvQk4sSUFPQ0MsSUFPQUMsSUFNQUMsSUFpRERDLEdBQ0Y7QUFBTTdELE1BQUEsRUFBQSxJQUFBMEQ7QUFBQTFELE1BQUEsRUFBQSxJQUFBMkQ7QUFBQTNELE1BQUEsRUFBQSxJQUFBNEQ7QUFBQTVELE1BQUEsRUFBQSxJQUFBK0Q7RUFBQSxPQUFBO0FBQUFBLFVBQUEvRCxFQUFBLEVBQUE7RUFBQTtBQUFBLE1BQUFnRTtBQUFBLE1BQUFoRSxFQUFBLEVBQUEsTUFBQStELE9BQUEvRCxFQUFBLEVBQUEsTUFBQXFELElBQUE7QUE1RVJXLFVBQUEsNENBQUMsVUFDTyxPQUFBLDJCQUNJLFVBQUFYLElBQ0osT0FBQSxrQkFFTlUsR0F3RUY7QUFBUy9ELE1BQUEsRUFBQSxJQUFBK0Q7QUFBQS9ELE1BQUEsRUFBQSxJQUFBcUQ7QUFBQXJELE1BQUEsRUFBQSxJQUFBZ0U7RUFBQSxPQUFBO0FBQUFBLFVBQUFoRSxFQUFBLEVBQUE7RUFBQTtBQUFBLFNBN0VUZ0U7QUE2RVM7QUFyTGIsU0FBQW5CLE9BQUFvQixHQUFBO0FBQUEsU0FnRDBCQSxJQUFJO0FBQUM7QUFoRC9CLFNBQUF6QixPQUFBMEIsS0FBQTtBQUFBLFNBc0MwQkQsTUFBSTtBQUFDO0FBdEMvQixTQUFBM0IsT0FBQTZCLEtBQUE7QUFBQSxTQWlDMEJGLE1BQUk7QUFBQztBQWpDL0IsU0FBQXhDLE9BQUEyQyxJQUFBO0FBQUEsU0FrQlNBLEdBQUNDLFNBQVVDO0FBQWdDO0FBbEJwRCxTQUFBNUQsTUFBQTZELEdBQUE7QUFBQSxTQU9zQ0EsRUFBQ0MsSUFBSUM7QUFBUTtJQXpCN0NsQyxzQkFDQU8sd0JBQ0FGLHNCQXlNTzhCOzs7O0FBOU5iO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1uQyx1QkFBdUI7QUFDN0IsSUFBTU8seUJBQXlCO0FBQy9CLElBQU1GLHVCQUF1QjtBQXlNdEIsSUFBTThCLE9BQU8sZUFDbEJ4RSxRQUMwQjtBQUMxQixZQUFNQyx1QkFBdUIsTUFBTXNDLDJCQUEyQjtBQUM5RCxZQUFNa0MsU0FBU0MsZ0JBQWdCO0FBQy9CLFlBQU1DLGVBQWV2RSxxQkFBcUI7QUFDMUMsWUFBTUMsUUFBUXVFLElBQUlDLGlCQUFpQjtBQUVuQyxhQUNFLDRDQUFDLHNCQUNDLFFBQ0Esc0JBQ0EsZUFBZUosT0FBT3pCLDhCQUN0QixzQkFBc0IyQixjQUN0QixPQUFhO0lBR25COzs7IiwKICAibmFtZXMiOiBbIkNsYXVkZUluQ2hyb21lTWVudSIsICJ0MCIsICIkIiwgIl9jIiwgIm9uRG9uZSIsICJpc0V4dGVuc2lvbkluc3RhbGxlZCIsICJpbnN0YWxsZWQiLCAiY29uZmlnRW5hYmxlZCIsICJpc0NsYXVkZUFJU3Vic2NyaWJlciIsICJpc1dTTCIsICJtY3BDbGllbnRzIiwgInVzZUFwcFN0YXRlIiwgIl90ZW1wIiwgInNlbGVjdEtleSIsICJzZXRTZWxlY3RLZXkiLCAidXNlU3RhdGUiLCAiZW5hYmxlZEJ5RGVmYXVsdCIsICJzZXRFbmFibGVkQnlEZWZhdWx0IiwgInNob3dJbnN0YWxsSGludCIsICJzZXRTaG93SW5zdGFsbEhpbnQiLCAic2V0SXNFeHRlbnNpb25JbnN0YWxsZWQiLCAidDEiLCAiU3ltYm9sIiwgImZvciIsICJpc0hvbWVzcGFjZSIsICJ0MiIsICJmaW5kIiwgIl90ZW1wMiIsICJjaHJvbWVDbGllbnQiLCAiaXNDb25uZWN0ZWQiLCAidHlwZSIsICJ0MyIsICJvcGVuVXJsIiwgInVybCIsICJvcGVuQnJvd3NlciIsICJvcGVuSW5DaHJvbWUiLCAidDQiLCAiaGFuZGxlQWN0aW9uIiwgImFjdGlvbiIsICJiYjIyIiwgIl90ZW1wMyIsICJDSFJPTUVfRVhURU5TSU9OX1VSTCIsICJfdGVtcDQiLCAiaXNDaHJvbWVFeHRlbnNpb25JbnN0YWxsZWQiLCAidGhlbiIsICJpbnN0YWxsZWRfMCIsICJDSFJPTUVfUkVDT05ORUNUX1VSTCIsICJfdGVtcDUiLCAiQ0hST01FX1BFUk1JU1NJT05TX1VSTCIsICJuZXdWYWx1ZSIsICJzYXZlR2xvYmFsQ29uZmlnIiwgImN1cnJlbnQiLCAiY2xhdWRlSW5DaHJvbWVEZWZhdWx0RW5hYmxlZCIsICJvcHRpb25zIiwgInJlcXVpcmVzRXh0ZW5zaW9uU3VmZml4IiwgInQ1IiwgImxhYmVsIiwgInZhbHVlIiwgInB1c2giLCAidDYiLCAidDciLCAidDgiLCAidDkiLCAidDEwIiwgImlzRGlzYWJsZWQiLCAidDExIiwgInQxMiIsICJrIiwgImtfMCIsICJrXzEiLCAiYyIsICJuYW1lIiwgIkNMQVVERV9JTl9DSFJPTUVfTUNQX1NFUlZFUl9OQU1FIiwgInMiLCAibWNwIiwgImNsaWVudHMiLCAiY2FsbCIsICJjb25maWciLCAiZ2V0R2xvYmFsQ29uZmlnIiwgImlzU3Vic2NyaWJlciIsICJlbnYiLCAiaXNXc2xFbnZpcm9ubWVudCJdCn0K
