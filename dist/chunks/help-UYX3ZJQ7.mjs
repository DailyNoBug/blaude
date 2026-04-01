#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  PromptInputHelpMenu,
  init_PromptInputHelpMenu
} from "./chunk-63EENAGG.mjs";
import {
  Tab,
  Tabs,
  init_Tabs,
  useTabHeaderFocus
} from "./chunk-6TYKXPLL.mjs";
import "./chunk-U2LTAULA.mjs";
import {
  Select,
  builtInCommandNames,
  formatDescriptionWithSource,
  init_commands2 as init_commands,
  init_select
} from "./chunk-OTDPNGFK.mjs";
import "./chunk-PJK4KGGT.mjs";
import {
  init_useShortcutDisplay,
  useShortcutDisplay
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
  init_modalContext,
  init_useKeybinding,
  init_useTerminalSize,
  useIsInsideModal,
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
import "./chunk-4GJVIJWN.mjs";
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
} from "./chunk-HWTXKBLR.mjs";
import {
  Fragment,
  createElement,
  init_react
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import "./chunk-NKGQGSP5.mjs";
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
  init_format,
  truncate
} from "./chunk-OGGCTXYU.mjs";
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
import "./chunk-ZAYB3WZV.mjs";
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

// src/components/HelpV2/Commands.tsx
function Commands(t0) {
  const $ = c(14);
  const {
    commands,
    maxHeight,
    columns,
    title,
    onCancel,
    emptyMessage
  } = t0;
  const {
    headerFocused,
    focusHeader
  } = useTabHeaderFocus();
  const maxWidth = Math.max(1, columns - 10);
  const visibleCount = Math.max(1, Math.floor((maxHeight - 10) / 2));
  let t1;
  if ($[0] !== commands || $[1] !== maxWidth) {
    const seen = /* @__PURE__ */ new Set();
    let t22;
    if ($[3] !== maxWidth) {
      t22 = (cmd_0) => ({
        label: `/${cmd_0.name}`,
        value: cmd_0.name,
        description: truncate(formatDescriptionWithSource(cmd_0), maxWidth, true)
      });
      $[3] = maxWidth;
      $[4] = t22;
    } else {
      t22 = $[4];
    }
    t1 = commands.filter((cmd) => {
      if (seen.has(cmd.name)) {
        return false;
      }
      seen.add(cmd.name);
      return true;
    }).sort(_temp).map(t22);
    $[0] = commands;
    $[1] = maxWidth;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const options = t1;
  let t2;
  if ($[5] !== commands.length || $[6] !== emptyMessage || $[7] !== focusHeader || $[8] !== headerFocused || $[9] !== onCancel || $[10] !== options || $[11] !== title || $[12] !== visibleCount) {
    t2 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", paddingY: 1 }, commands.length === 0 && emptyMessage ? /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, emptyMessage) : /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(ThemedText, null, title), /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(Select, { options, visibleOptionCount: visibleCount, onCancel, disableSelection: true, hideIndexes: true, layout: "compact-vertical", onUpFromFirstItem: focusHeader, isDisabled: headerFocused }))));
    $[5] = commands.length;
    $[6] = emptyMessage;
    $[7] = focusHeader;
    $[8] = headerFocused;
    $[9] = onCancel;
    $[10] = options;
    $[11] = title;
    $[12] = visibleCount;
    $[13] = t2;
  } else {
    t2 = $[13];
  }
  return t2;
}
function _temp(a, b) {
  return a.name.localeCompare(b.name);
}
var init_Commands = __esm({
  "src/components/HelpV2/Commands.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_commands();
    init_ink();
    init_format();
    init_select();
    init_Tabs();
  }
});

// src/components/HelpV2/General.tsx
function General() {
  const $ = c(2);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(ThemedText, null, "Claude understands your codebase, makes edits with your permission, and executes commands \u2014 right from your terminal."));
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", paddingY: 1, gap: 1 }, t0, /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Shortcuts")), /* @__PURE__ */ createElement(PromptInputHelpMenu, { gap: 2, fixedWidth: true })));
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  return t1;
}
var init_General = __esm({
  "src/components/HelpV2/General.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_PromptInputHelpMenu();
  }
});

// src/components/HelpV2/HelpV2.tsx
function HelpV2(t0) {
  const $ = c(44);
  const {
    onClose,
    commands
  } = t0;
  const {
    rows,
    columns
  } = useTerminalSize();
  const maxHeight = Math.floor(rows / 2);
  const insideModal = useIsInsideModal();
  let t1;
  if ($[0] !== onClose) {
    t1 = () => onClose("Help dialog dismissed", {
      display: "system"
    });
    $[0] = onClose;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const close = t1;
  let t2;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = {
      context: "Help"
    };
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  useKeybinding("help:dismiss", close, t2);
  const exitState = useExitOnCtrlCDWithKeybindings(close);
  const dismissShortcut = useShortcutDisplay("help:dismiss", "Help", "esc");
  let antOnlyCommands;
  let builtinCommands;
  let t3;
  if ($[3] !== commands) {
    const builtinNames = builtInCommandNames();
    builtinCommands = commands.filter((cmd) => builtinNames.has(cmd.name) && !cmd.isHidden);
    let t42;
    if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t42 = [];
      $[7] = t42;
    } else {
      t42 = $[7];
    }
    antOnlyCommands = t42;
    t3 = commands.filter((cmd_2) => !builtinNames.has(cmd_2.name) && !cmd_2.isHidden);
    $[3] = commands;
    $[4] = antOnlyCommands;
    $[5] = builtinCommands;
    $[6] = t3;
  } else {
    antOnlyCommands = $[4];
    builtinCommands = $[5];
    t3 = $[6];
  }
  const customCommands = t3;
  let t4;
  if ($[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ createElement(Tab, { key: "general", title: "general" }, /* @__PURE__ */ createElement(General, null));
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  let tabs;
  if ($[9] !== antOnlyCommands || $[10] !== builtinCommands || $[11] !== close || $[12] !== columns || $[13] !== customCommands || $[14] !== maxHeight) {
    tabs = [t4];
    let t52;
    if ($[16] !== builtinCommands || $[17] !== close || $[18] !== columns || $[19] !== maxHeight) {
      t52 = /* @__PURE__ */ createElement(Tab, { key: "commands", title: "commands" }, /* @__PURE__ */ createElement(Commands, { commands: builtinCommands, maxHeight, columns, title: "Browse default commands:", onCancel: close }));
      $[16] = builtinCommands;
      $[17] = close;
      $[18] = columns;
      $[19] = maxHeight;
      $[20] = t52;
    } else {
      t52 = $[20];
    }
    tabs.push(t52);
    let t62;
    if ($[21] !== close || $[22] !== columns || $[23] !== customCommands || $[24] !== maxHeight) {
      t62 = /* @__PURE__ */ createElement(Tab, { key: "custom", title: "custom-commands" }, /* @__PURE__ */ createElement(Commands, { commands: customCommands, maxHeight, columns, title: "Browse custom commands:", emptyMessage: "No custom commands found", onCancel: close }));
      $[21] = close;
      $[22] = columns;
      $[23] = customCommands;
      $[24] = maxHeight;
      $[25] = t62;
    } else {
      t62 = $[25];
    }
    tabs.push(t62);
    if (false) {
      let t72;
      if ($[26] !== antOnlyCommands || $[27] !== close || $[28] !== columns || $[29] !== maxHeight) {
        t72 = /* @__PURE__ */ createElement(Tab, { key: "ant-only", title: "[ant-only]" }, /* @__PURE__ */ createElement(Commands, { commands: antOnlyCommands, maxHeight, columns, title: "Browse ant-only commands:", onCancel: close }));
        $[26] = antOnlyCommands;
        $[27] = close;
        $[28] = columns;
        $[29] = maxHeight;
        $[30] = t72;
      } else {
        t72 = $[30];
      }
      tabs.push(t72);
    }
    $[9] = antOnlyCommands;
    $[10] = builtinCommands;
    $[11] = close;
    $[12] = columns;
    $[13] = customCommands;
    $[14] = maxHeight;
    $[15] = tabs;
  } else {
    tabs = $[15];
  }
  const t5 = insideModal ? void 0 : maxHeight;
  let t6;
  if ($[31] !== tabs) {
    t6 = /* @__PURE__ */ createElement(Tabs, { title: false ? "/help" : `Blaude v${MACRO.VERSION}`, color: "professionalBlue", defaultTab: "general" }, tabs);
    $[31] = tabs;
    $[32] = t6;
  } else {
    t6 = $[32];
  }
  let t7;
  if ($[33] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, null, "For more help:", " ", /* @__PURE__ */ createElement(Link, { url: "https://code.claude.com/docs/en/overview" })));
    $[33] = t7;
  } else {
    t7 = $[33];
  }
  let t8;
  if ($[34] !== dismissShortcut || $[35] !== exitState.keyName || $[36] !== exitState.pending) {
    t8 = /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, exitState.pending ? /* @__PURE__ */ createElement(Fragment, null, "Press ", exitState.keyName, " again to exit") : /* @__PURE__ */ createElement(ThemedText, { italic: true }, dismissShortcut, " to cancel")));
    $[34] = dismissShortcut;
    $[35] = exitState.keyName;
    $[36] = exitState.pending;
    $[37] = t8;
  } else {
    t8 = $[37];
  }
  let t9;
  if ($[38] !== t6 || $[39] !== t8) {
    t9 = /* @__PURE__ */ createElement(Pane, { color: "professionalBlue" }, t6, t7, t8);
    $[38] = t6;
    $[39] = t8;
    $[40] = t9;
  } else {
    t9 = $[40];
  }
  let t10;
  if ($[41] !== t5 || $[42] !== t9) {
    t10 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", height: t5 }, t9);
    $[41] = t5;
    $[42] = t9;
    $[43] = t10;
  } else {
    t10 = $[43];
  }
  return t10;
}
var init_HelpV2 = __esm({
  "src/components/HelpV2/HelpV2.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_useExitOnCtrlCDWithKeybindings();
    init_useShortcutDisplay();
    init_commands();
    init_modalContext();
    init_useTerminalSize();
    init_ink();
    init_useKeybinding();
    init_Pane();
    init_Tabs();
    init_Commands();
    init_General();
  }
});

// src/commands/help/help.tsx
var call;
var init_help = __esm({
  "src/commands/help/help.tsx"() {
    init_react();
    init_HelpV2();
    call = async (onDone, {
      options: {
        commands
      }
    }) => {
      return /* @__PURE__ */ createElement(HelpV2, { commands, onClose: onDone });
    };
  }
});
init_help();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvSGVscFYyL0NvbW1hbmRzLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9IZWxwVjIvR2VuZXJhbC50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvSGVscFYyL0hlbHBWMi50c3giLCAiLi4vLi4vc3JjL2NvbW1hbmRzL2hlbHAvaGVscC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdHlwZSBDb21tYW5kLCBmb3JtYXREZXNjcmlwdGlvbldpdGhTb3VyY2UgfSBmcm9tICcuLi8uLi9jb21tYW5kcy5qcydcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7IHRydW5jYXRlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnLi4vQ3VzdG9tU2VsZWN0L3NlbGVjdC5qcydcbmltcG9ydCB7IHVzZVRhYkhlYWRlckZvY3VzIH0gZnJvbSAnLi4vZGVzaWduLXN5c3RlbS9UYWJzLmpzJ1xuXG50eXBlIFByb3BzID0ge1xuICBjb21tYW5kczogQ29tbWFuZFtdXG4gIG1heEhlaWdodDogbnVtYmVyXG4gIGNvbHVtbnM6IG51bWJlclxuICB0aXRsZTogc3RyaW5nXG4gIG9uQ2FuY2VsOiAoKSA9PiB2b2lkXG4gIGVtcHR5TWVzc2FnZT86IHN0cmluZ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ29tbWFuZHMoe1xuICBjb21tYW5kcyxcbiAgbWF4SGVpZ2h0LFxuICBjb2x1bW5zLFxuICB0aXRsZSxcbiAgb25DYW5jZWwsXG4gIGVtcHR5TWVzc2FnZSxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgeyBoZWFkZXJGb2N1c2VkLCBmb2N1c0hlYWRlciB9ID0gdXNlVGFiSGVhZGVyRm9jdXMoKVxuICBjb25zdCBtYXhXaWR0aCA9IE1hdGgubWF4KDEsIGNvbHVtbnMgLSAxMClcbiAgY29uc3QgdmlzaWJsZUNvdW50ID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcigobWF4SGVpZ2h0IC0gMTApIC8gMikpXG5cbiAgY29uc3Qgb3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIC8vIEN1c3RvbSBjb21tYW5kcyBjYW4gYXBwZWFyIG1vcmUgdGhhbiBvbmNlIChlLmcuIHNhbWUgbmFtZSBhdCB1c2VyIGFuZFxuICAgIC8vIHByb2plY3Qgc2NvcGUpLiBEZWR1cGUgYnkgbmFtZSB0byBhdm9pZCBSZWFjdCBrZXkgY29sbGlzaW9ucyBpbiBTZWxlY3QuXG4gICAgY29uc3Qgc2VlbiA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gICAgcmV0dXJuIGNvbW1hbmRzXG4gICAgICAuZmlsdGVyKGNtZCA9PiB7XG4gICAgICAgIGlmIChzZWVuLmhhcyhjbWQubmFtZSkpIHJldHVybiBmYWxzZVxuICAgICAgICBzZWVuLmFkZChjbWQubmFtZSlcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0pXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSlcbiAgICAgIC5tYXAoY21kID0+ICh7XG4gICAgICAgIGxhYmVsOiBgLyR7Y21kLm5hbWV9YCxcbiAgICAgICAgdmFsdWU6IGNtZC5uYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbjogdHJ1bmNhdGUoZm9ybWF0RGVzY3JpcHRpb25XaXRoU291cmNlKGNtZCksIG1heFdpZHRoLCB0cnVlKSxcbiAgICAgIH0pKVxuICB9LCBbY29tbWFuZHMsIG1heFdpZHRoXSlcblxuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIHBhZGRpbmdZPXsxfT5cbiAgICAgIHtjb21tYW5kcy5sZW5ndGggPT09IDAgJiYgZW1wdHlNZXNzYWdlID8gKFxuICAgICAgICA8VGV4dCBkaW1Db2xvcj57ZW1wdHlNZXNzYWdlfTwvVGV4dD5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFRleHQ+e3RpdGxlfTwvVGV4dD5cbiAgICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgICAgIHZpc2libGVPcHRpb25Db3VudD17dmlzaWJsZUNvdW50fVxuICAgICAgICAgICAgICBvbkNhbmNlbD17b25DYW5jZWx9XG4gICAgICAgICAgICAgIGRpc2FibGVTZWxlY3Rpb25cbiAgICAgICAgICAgICAgaGlkZUluZGV4ZXNcbiAgICAgICAgICAgICAgbGF5b3V0PVwiY29tcGFjdC12ZXJ0aWNhbFwiXG4gICAgICAgICAgICAgIG9uVXBGcm9tRmlyc3RJdGVtPXtmb2N1c0hlYWRlcn1cbiAgICAgICAgICAgICAgaXNEaXNhYmxlZD17aGVhZGVyRm9jdXNlZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKVxufVxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgUHJvbXB0SW5wdXRIZWxwTWVudSB9IGZyb20gJy4uL1Byb21wdElucHV0L1Byb21wdElucHV0SGVscE1lbnUuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBHZW5lcmFsKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIHJldHVybiAoXG4gICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgcGFkZGluZ1k9ezF9IGdhcD17MX0+XG4gICAgICA8Qm94PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICBDbGF1ZGUgdW5kZXJzdGFuZHMgeW91ciBjb2RlYmFzZSwgbWFrZXMgZWRpdHMgd2l0aCB5b3VyIHBlcm1pc3Npb24sXG4gICAgICAgICAgYW5kIGV4ZWN1dGVzIGNvbW1hbmRzIOKAlCByaWdodCBmcm9tIHlvdXIgdGVybWluYWwuXG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPFRleHQgYm9sZD5TaG9ydGN1dHM8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8UHJvbXB0SW5wdXRIZWxwTWVudSBnYXA9ezJ9IGZpeGVkV2lkdGg9e3RydWV9IC8+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKVxufVxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRXhpdE9uQ3RybENEV2l0aEtleWJpbmRpbmdzIH0gZnJvbSAnc3JjL2hvb2tzL3VzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncy5qcydcbmltcG9ydCB7IHVzZVNob3J0Y3V0RGlzcGxheSB9IGZyb20gJ3NyYy9rZXliaW5kaW5ncy91c2VTaG9ydGN1dERpc3BsYXkuanMnXG5pbXBvcnQge1xuICBidWlsdEluQ29tbWFuZE5hbWVzLFxuICB0eXBlIENvbW1hbmQsXG4gIHR5cGUgQ29tbWFuZFJlc3VsdERpc3BsYXksXG4gIElOVEVSTkFMX09OTFlfQ09NTUFORFMsXG59IGZyb20gJy4uLy4uL2NvbW1hbmRzLmpzJ1xuaW1wb3J0IHsgdXNlSXNJbnNpZGVNb2RhbCB9IGZyb20gJy4uLy4uL2NvbnRleHQvbW9kYWxDb250ZXh0LmpzJ1xuaW1wb3J0IHsgdXNlVGVybWluYWxTaXplIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlVGVybWluYWxTaXplLmpzJ1xuaW1wb3J0IHsgQm94LCBMaW5rLCBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdXNlS2V5YmluZGluZyB9IGZyb20gJy4uLy4uL2tleWJpbmRpbmdzL3VzZUtleWJpbmRpbmcuanMnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vZGVzaWduLXN5c3RlbS9QYW5lLmpzJ1xuaW1wb3J0IHsgVGFiLCBUYWJzIH0gZnJvbSAnLi4vZGVzaWduLXN5c3RlbS9UYWJzLmpzJ1xuaW1wb3J0IHsgQ29tbWFuZHMgfSBmcm9tICcuL0NvbW1hbmRzLmpzJ1xuaW1wb3J0IHsgR2VuZXJhbCB9IGZyb20gJy4vR2VuZXJhbC5qcydcblxudHlwZSBQcm9wcyA9IHtcbiAgb25DbG9zZTogKFxuICAgIHJlc3VsdD86IHN0cmluZyxcbiAgICBvcHRpb25zPzogeyBkaXNwbGF5PzogQ29tbWFuZFJlc3VsdERpc3BsYXkgfSxcbiAgKSA9PiB2b2lkXG4gIGNvbW1hbmRzOiBDb21tYW5kW11cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEhlbHBWMih7IG9uQ2xvc2UsIGNvbW1hbmRzIH06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgeyByb3dzLCBjb2x1bW5zIH0gPSB1c2VUZXJtaW5hbFNpemUoKVxuICBjb25zdCBtYXhIZWlnaHQgPSBNYXRoLmZsb29yKHJvd3MgLyAyKVxuICAvLyBJbnNpZGUgdGhlIG1vZGFsIHNsb3QsIEZ1bGxzY3JlZW5MYXlvdXQgYWxyZWFkeSBjYXBzIGhlaWdodCBhbmQgUGFuZS9UYWJzXG4gIC8vIHVzZSBmbGV4U2hyaW5rPTAgKHNlZSAjMjM1OTIpIOKAlCBvdXIgb3duIGhlaWdodD0gY29uc3RyYWludCB3b3VsZCBjbGlwIHRoZVxuICAvLyBmb290ZXIgc2luY2UgVGFicyB3b24ndCBzaHJpbmsgdG8gZml0LiBMZXQgdGhlIG1vZGFsIHNsb3QgaGFuZGxlIHNpemluZy5cbiAgY29uc3QgaW5zaWRlTW9kYWwgPSB1c2VJc0luc2lkZU1vZGFsKClcblxuICBjb25zdCBjbG9zZSA9ICgpID0+IG9uQ2xvc2UoJ0hlbHAgZGlhbG9nIGRpc21pc3NlZCcsIHsgZGlzcGxheTogJ3N5c3RlbScgfSlcbiAgdXNlS2V5YmluZGluZygnaGVscDpkaXNtaXNzJywgY2xvc2UsIHsgY29udGV4dDogJ0hlbHAnIH0pXG4gIGNvbnN0IGV4aXRTdGF0ZSA9IHVzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncyhjbG9zZSlcbiAgY29uc3QgZGlzbWlzc1Nob3J0Y3V0ID0gdXNlU2hvcnRjdXREaXNwbGF5KCdoZWxwOmRpc21pc3MnLCAnSGVscCcsICdlc2MnKVxuXG4gIGNvbnN0IGJ1aWx0aW5OYW1lcyA9IGJ1aWx0SW5Db21tYW5kTmFtZXMoKVxuICBsZXQgYnVpbHRpbkNvbW1hbmRzID0gY29tbWFuZHMuZmlsdGVyKFxuICAgIGNtZCA9PiBidWlsdGluTmFtZXMuaGFzKGNtZC5uYW1lKSAmJiAhY21kLmlzSGlkZGVuLFxuICApXG4gIGxldCBhbnRPbmx5Q29tbWFuZHM6IENvbW1hbmRbXSA9IFtdXG5cbiAgLy8gV2UgaGF2ZSB0byBkbyB0aGlzIGluIGFuIGBpZmAgdG8gaGVscCB0cmVlc2hha2luZ1xuICBpZiAoXCJleHRlcm5hbFwiID09PSAnYW50Jykge1xuICAgIGNvbnN0IGludGVybmFsT25seU5hbWVzID0gbmV3IFNldChJTlRFUk5BTF9PTkxZX0NPTU1BTkRTLm1hcChfID0+IF8ubmFtZSkpXG4gICAgYnVpbHRpbkNvbW1hbmRzID0gYnVpbHRpbkNvbW1hbmRzLmZpbHRlcihcbiAgICAgIGNtZCA9PiAhaW50ZXJuYWxPbmx5TmFtZXMuaGFzKGNtZC5uYW1lKSxcbiAgICApXG4gICAgYW50T25seUNvbW1hbmRzID0gY29tbWFuZHMuZmlsdGVyKFxuICAgICAgY21kID0+IGludGVybmFsT25seU5hbWVzLmhhcyhjbWQubmFtZSkgJiYgIWNtZC5pc0hpZGRlbixcbiAgICApXG4gIH1cblxuICBjb25zdCBjdXN0b21Db21tYW5kcyA9IGNvbW1hbmRzLmZpbHRlcihcbiAgICBjbWQgPT4gIWJ1aWx0aW5OYW1lcy5oYXMoY21kLm5hbWUpICYmICFjbWQuaXNIaWRkZW4sXG4gIClcblxuICBjb25zdCB0YWJzID0gW1xuICAgIDxUYWIga2V5PVwiZ2VuZXJhbFwiIHRpdGxlPVwiZ2VuZXJhbFwiPlxuICAgICAgPEdlbmVyYWwgLz5cbiAgICA8L1RhYj4sXG4gIF1cblxuICB0YWJzLnB1c2goXG4gICAgPFRhYiBrZXk9XCJjb21tYW5kc1wiIHRpdGxlPVwiY29tbWFuZHNcIj5cbiAgICAgIDxDb21tYW5kc1xuICAgICAgICBjb21tYW5kcz17YnVpbHRpbkNvbW1hbmRzfVxuICAgICAgICBtYXhIZWlnaHQ9e21heEhlaWdodH1cbiAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgdGl0bGU9XCJCcm93c2UgZGVmYXVsdCBjb21tYW5kczpcIlxuICAgICAgICBvbkNhbmNlbD17Y2xvc2V9XG4gICAgICAvPlxuICAgIDwvVGFiPixcbiAgKVxuXG4gIHRhYnMucHVzaChcbiAgICA8VGFiIGtleT1cImN1c3RvbVwiIHRpdGxlPVwiY3VzdG9tLWNvbW1hbmRzXCI+XG4gICAgICA8Q29tbWFuZHNcbiAgICAgICAgY29tbWFuZHM9e2N1c3RvbUNvbW1hbmRzfVxuICAgICAgICBtYXhIZWlnaHQ9e21heEhlaWdodH1cbiAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgdGl0bGU9XCJCcm93c2UgY3VzdG9tIGNvbW1hbmRzOlwiXG4gICAgICAgIGVtcHR5TWVzc2FnZT1cIk5vIGN1c3RvbSBjb21tYW5kcyBmb3VuZFwiXG4gICAgICAgIG9uQ2FuY2VsPXtjbG9zZX1cbiAgICAgIC8+XG4gICAgPC9UYWI+LFxuICApXG5cbiAgaWYgKFwiZXh0ZXJuYWxcIiA9PT0gJ2FudCcgJiYgYW50T25seUNvbW1hbmRzLmxlbmd0aCA+IDApIHtcbiAgICB0YWJzLnB1c2goXG4gICAgICA8VGFiIGtleT1cImFudC1vbmx5XCIgdGl0bGU9XCJbYW50LW9ubHldXCI+XG4gICAgICAgIDxDb21tYW5kc1xuICAgICAgICAgIGNvbW1hbmRzPXthbnRPbmx5Q29tbWFuZHN9XG4gICAgICAgICAgbWF4SGVpZ2h0PXttYXhIZWlnaHR9XG4gICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICB0aXRsZT1cIkJyb3dzZSBhbnQtb25seSBjb21tYW5kczpcIlxuICAgICAgICAgIG9uQ2FuY2VsPXtjbG9zZX1cbiAgICAgICAgLz5cbiAgICAgIDwvVGFiPixcbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGhlaWdodD17aW5zaWRlTW9kYWwgPyB1bmRlZmluZWQgOiBtYXhIZWlnaHR9PlxuICAgICAgPFBhbmUgY29sb3I9XCJwcm9mZXNzaW9uYWxCbHVlXCI+XG4gICAgICAgIDxUYWJzXG4gICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgXCJleHRlcm5hbFwiID09PSAnYW50J1xuICAgICAgICAgICAgICA/ICcvaGVscCdcbiAgICAgICAgICAgICAgOiBgQ2xhdWRlIENvZGUgdiR7TUFDUk8uVkVSU0lPTn1gXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbG9yPVwicHJvZmVzc2lvbmFsQmx1ZVwiXG4gICAgICAgICAgZGVmYXVsdFRhYj1cImdlbmVyYWxcIlxuICAgICAgICA+XG4gICAgICAgICAge3RhYnN9XG4gICAgICAgIDwvVGFicz5cbiAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgRm9yIG1vcmUgaGVscDp7JyAnfVxuICAgICAgICAgICAgPExpbmsgdXJsPVwiaHR0cHM6Ly9jb2RlLmNsYXVkZS5jb20vZG9jcy9lbi9vdmVydmlld1wiIC8+XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAge2V4aXRTdGF0ZS5wZW5kaW5nID8gKFxuICAgICAgICAgICAgICA8PlByZXNzIHtleGl0U3RhdGUua2V5TmFtZX0gYWdhaW4gdG8gZXhpdDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFRleHQgaXRhbGljPntkaXNtaXNzU2hvcnRjdXR9IHRvIGNhbmNlbDwvVGV4dD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvUGFuZT5cbiAgICA8L0JveD5cbiAgKVxufVxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSGVscFYyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWxwVjIvSGVscFYyLmpzJ1xuaW1wb3J0IHR5cGUgeyBMb2NhbEpTWENvbW1hbmRDYWxsIH0gZnJvbSAnLi4vLi4vdHlwZXMvY29tbWFuZC5qcydcblxuZXhwb3J0IGNvbnN0IGNhbGw6IExvY2FsSlNYQ29tbWFuZENhbGwgPSBhc3luYyAoXG4gIG9uRG9uZSxcbiAgeyBvcHRpb25zOiB7IGNvbW1hbmRzIH0gfSxcbikgPT4ge1xuICByZXR1cm4gPEhlbHBWMiBjb21tYW5kcz17Y29tbWFuZHN9IG9uQ2xvc2U9e29uRG9uZX0gLz5cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCTyxTQUFBQSxTQUFBQyxJQUFBO0FBQUEsUUFBQUMsSUFBQUMsRUFBQSxFQUFBO0FBQWtCLFFBQUE7SUFBQUM7SUFBQUM7SUFBQUM7SUFBQUM7SUFBQUM7SUFBQUM7RUFBQSxJQUFBUjtBQVF2QixRQUFBO0lBQUFTO0lBQUFDO0VBQUEsSUFBdUNDLGtCQUFrQjtBQUN6RCxRQUFBQyxXQUFpQkMsS0FBSUMsSUFBSyxHQUFHVCxVQUFVLEVBQUU7QUFDekMsUUFBQVUsZUFBcUJGLEtBQUlDLElBQUssR0FBR0QsS0FBSUcsT0FBUVosWUFBWSxNQUFNLENBQUMsQ0FBQztBQUFDLE1BQUFhO0FBQUEsTUFBQWhCLEVBQUEsQ0FBQSxN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c0MsTUFBQXRDLEVBQUEsRUFBQSxNQUFBZ0QsSUFBQTtBQTVCVEMsVUFBQSw4QkFBQyxxQkFBa0IsZUFBQSxVQUFpQixRQUFBWCxNQUNsQ1UsRUE0QkY7QUFBTWhELE1BQUEsRUFBQSxJQUFBc0M7QUFBQXRDLE1BQUEsRUFBQSxJQUFBZ0Q7QUFBQWhELE1BQUEsRUFBQSxJQUFBaUQ7RUFBQSxPQUFBO0FBQUFBLFVBQUFqRCxFQUFBLEVBQUE7RUFBQTtBQUFBLFNBN0JOaUQ7QUE2Qk07Ozs7QUF2SVY7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ2hCQSxJQUlhQztBQUpiOzs7QUFDQTtBQUdPLElBQU1BLE9BQTRCLE9BQ3ZDQyxRQUNBO01BQUVDLFNBQVM7UUFBRUM7TUFBUztJQUFFLE1BQ3JCO0FBQ0gsYUFBTyw4QkFBQyxVQUFPLFVBQW9CLFNBQVNGLFFBQU87SUFDckQ7OzsiLAogICJuYW1lcyI6IFsiQ29tbWFuZHMiLCAidDAiLCAiJCIsICJfYyIsICJjb21tYW5kcyIsICJtYXhIZWlnaHQiLCAiY29sdW1ucyIsICJ0aXRsZSIsICJvbkNhbmNlbCIsICJlbXB0eU1lc3NhZ2UiLCAiaGVhZGVyRm9jdXNlZCIsICJmb2N1c0hlYWRlciIsICJ1c2VUYWJIZWFkZXJGb2N1cyIsICJtYXhXaWR0aCIsICJNYXRoIiwgIm1heCIsICJ2aXNpYmxlQ291bnQiLCAiZmxvb3IiLCAidDEiLCAic2VlbiIsICJTZXQiLCAidDIiLCAiY21kXzAiLCAibGFiZWwiLCAiY21kIiwgIm5hbWUiLCAidmFsdWUiLCAiZGVzY3JpcHRpb24iLCAidHJ1bmNhdGUiLCAiZm9ybWF0RGVzY3JpcHRpb25XaXRoU291cmNlIiwgImZpbHRlciIsICJoYXMiLCAiYWRkIiwgInNvcnQiLCAiX3RlbXAiLCAibWFwIiwgIm9wdGlvbnMiLCAibGVuZ3RoIiwgImEiLCAiYiIsICJsb2NhbGVDb21wYXJlIiwgIkdlbmVyYWwiLCAiJCIsICJfYyIsICJ0MCIsICJTeW1ib2wiLCAiZm9yIiwgInQxIiwgIkhlbHBWMiIsICJ0MCIsICIkIiwgIl9jIiwgIm9uQ2xvc2UiLCAiY29tbWFuZHMiLCAicm93cyIsICJjb2x1bW5zIiwgInVzZVRlcm1pbmFsU2l6ZSIsICJtYXhIZWlnaHQiLCAiTWF0aCIsICJmbG9vciIsICJpbnNpZGVNb2RhbCIsICJ1c2VJc0luc2lkZU1vZGFsIiwgInQxIiwgImRpc3BsYXkiLCAiY2xvc2UiLCAidDIiLCAiU3ltYm9sIiwgImZvciIsICJjb250ZXh0IiwgInVzZUtleWJpbmRpbmciLCAiZXhpdFN0YXRlIiwgInVzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncyIsICJkaXNtaXNzU2hvcnRjdXQiLCAidXNlU2hvcnRjdXREaXNwbGF5IiwgImFudE9ubHlDb21tYW5kcyIsICJidWlsdGluQ29tbWFuZHMiLCAidDMiLCAiYnVpbHRpbk5hbWVzIiwgImJ1aWx0SW5Db21tYW5kTmFtZXMiLCAiZmlsdGVyIiwgImNtZCIsICJoYXMiLCAibmFtZSIsICJpc0hpZGRlbiIsICJ0NCIsICJjbWRfMiIsICJjdXN0b21Db21tYW5kcyIsICJ0YWJzIiwgInQ1IiwgInB1c2giLCAidDYiLCAidDciLCAidW5kZWZpbmVkIiwgIk1BQ1JPIiwgIlZFUlNJT04iLCAidDgiLCAia2V5TmFtZSIsICJwZW5kaW5nIiwgInQ5IiwgInQxMCIsICJjYWxsIiwgIm9uRG9uZSIsICJvcHRpb25zIiwgImNvbW1hbmRzIl0KfQo=
