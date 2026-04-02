#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_exportRenderer,
  renderMessagesToPlainText
} from "./chunk-EK32SNNZ.mjs";
import "./chunk-7EOL2RUY.mjs";
import "./chunk-7XWSOXGK.mjs";
import "./chunk-3CKXPEPP.mjs";
import "./chunk-OL5S76VS.mjs";
import "./chunk-5VAWKU3E.mjs";
import "./chunk-WAF5SCY7.mjs";
import "./chunk-CK237OUO.mjs";
import "./chunk-6DOUMYB2.mjs";
import "./chunk-CMU6H2E2.mjs";
import "./chunk-U2LTAULA.mjs";
import "./chunk-QHAFY3TI.mjs";
import "./chunk-NSUS22JB.mjs";
import {
  Select,
  TextInput,
  init_TextInput,
  init_select
} from "./chunk-FMU4URRE.mjs";
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
} from "./chunk-PEMK4FQH.mjs";
import "./chunk-SQ6KOOZS.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-Y2PD6CVC.mjs";
import "./chunk-S5Z6SZDA.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import {
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
  ThemedBox_default,
  ThemedText,
  init_ink,
  init_osc,
  setClipboard
} from "./chunk-HWTXKBLR.mjs";
import {
  init_react,
  react_default,
  useCallback,
  useState
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
import {
  getCwd,
  init_cwd
} from "./chunk-TZFTPSMG.mjs";
import "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-IPMELYAB.mjs";
import "./chunk-F5ODCUJD.mjs";
import "./chunk-ZAYB3WZV.mjs";
import {
  init_slowOperations,
  writeFileSync_DEPRECATED
} from "./chunk-L2VTD674.mjs";
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

// src/components/ExportDialog.tsx
import { join } from "path";
function ExportDialog({
  content,
  defaultFilename,
  onDone
}) {
  const [, setSelectedOption] = useState(null);
  const [filename, setFilename] = useState(defaultFilename);
  const [cursorOffset, setCursorOffset] = useState(defaultFilename.length);
  const [showFilenameInput, setShowFilenameInput] = useState(false);
  const {
    columns
  } = useTerminalSize();
  const handleGoBack = useCallback(() => {
    setShowFilenameInput(false);
    setSelectedOption(null);
  }, []);
  const handleSelectOption = async (value) => {
    if (value === "clipboard") {
      const raw = await setClipboard(content);
      if (raw) process.stdout.write(raw);
      onDone({
        success: true,
        message: "Conversation copied to clipboard"
      });
    } else if (value === "file") {
      setSelectedOption("file");
      setShowFilenameInput(true);
    }
  };
  const handleFilenameSubmit = () => {
    const finalFilename = filename.endsWith(".txt") ? filename : filename.replace(/\.[^.]+$/, "") + ".txt";
    const filepath = join(getCwd(), finalFilename);
    try {
      writeFileSync_DEPRECATED(filepath, content, {
        encoding: "utf-8",
        flush: true
      });
      onDone({
        success: true,
        message: `Conversation exported to: ${filepath}`
      });
    } catch (error) {
      onDone({
        success: false,
        message: `Failed to export conversation: ${error instanceof Error ? error.message : "Unknown error"}`
      });
    }
  };
  const handleCancel = useCallback(() => {
    if (showFilenameInput) {
      handleGoBack();
    } else {
      onDone({
        success: false,
        message: "Export cancelled"
      });
    }
  }, [showFilenameInput, handleGoBack, onDone]);
  const options = [{
    label: "Copy to clipboard",
    value: "clipboard",
    description: "Copy the conversation to your system clipboard"
  }, {
    label: "Save to file",
    value: "file",
    description: "Save the conversation to a file in the current directory"
  }];
  function renderInputGuide(exitState) {
    if (showFilenameInput) {
      return /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "save" }), /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "go back" }));
    }
    if (exitState.pending) {
      return /* @__PURE__ */ react_default.createElement(ThemedText, null, "Press ", exitState.keyName, " again to exit");
    }
    return /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "cancel" });
  }
  useKeybinding("confirm:no", handleCancel, {
    context: "Settings",
    isActive: showFilenameInput
  });
  return /* @__PURE__ */ react_default.createElement(Dialog, { title: "Export Conversation", subtitle: "Select export method:", color: "permission", onCancel: handleCancel, inputGuide: renderInputGuide, isCancelActive: !showFilenameInput }, !showFilenameInput ? /* @__PURE__ */ react_default.createElement(Select, { options, onChange: handleSelectOption, onCancel: handleCancel }) : /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, null, "Enter filename:"), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "row", gap: 1, marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, null, ">"), /* @__PURE__ */ react_default.createElement(TextInput, { value: filename, onChange: setFilename, onSubmit: handleFilenameSubmit, focus: true, showCursor: true, columns, cursorOffset, onChangeCursorOffset: setCursorOffset }))));
}
var init_ExportDialog = __esm({
  "src/components/ExportDialog.tsx"() {
    init_react();
    init_useTerminalSize();
    init_osc();
    init_ink();
    init_useKeybinding();
    init_cwd();
    init_slowOperations();
    init_ConfigurableShortcutHint();
    init_select();
    init_Byline();
    init_Dialog();
    init_KeyboardShortcutHint();
    init_TextInput();
  }
});

// src/commands/export/export.tsx
import { join as join2 } from "path";
function formatTimestamp(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day}-${hours}${minutes}${seconds}`;
}
function extractFirstPrompt(messages) {
  const firstUserMessage = messages.find((msg) => msg.type === "user");
  if (!firstUserMessage || firstUserMessage.type !== "user") {
    return "";
  }
  const content = firstUserMessage.message?.content;
  let result = "";
  if (typeof content === "string") {
    result = content.trim();
  } else if (Array.isArray(content)) {
    const textContent = content.find((item) => item.type === "text");
    if (textContent && "text" in textContent) {
      result = textContent.text.trim();
    }
  }
  result = result.split("\n")[0] || "";
  if (result.length > 50) {
    result = result.substring(0, 49) + "\u2026";
  }
  return result;
}
function sanitizeFilename(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}
async function exportWithReactRenderer(context) {
  const tools = context.options.tools || [];
  return renderMessagesToPlainText(context.messages, tools);
}
async function call(onDone, context, args) {
  const content = await exportWithReactRenderer(context);
  const filename = args.trim();
  if (filename) {
    const finalFilename = filename.endsWith(".txt") ? filename : filename.replace(/\.[^.]+$/, "") + ".txt";
    const filepath = join2(getCwd(), finalFilename);
    try {
      writeFileSync_DEPRECATED(filepath, content, {
        encoding: "utf-8",
        flush: true
      });
      onDone(`Conversation exported to: ${filepath}`);
      return null;
    } catch (error) {
      onDone(`Failed to export conversation: ${error instanceof Error ? error.message : "Unknown error"}`);
      return null;
    }
  }
  const firstPrompt = extractFirstPrompt(context.messages);
  const timestamp = formatTimestamp(/* @__PURE__ */ new Date());
  let defaultFilename;
  if (firstPrompt) {
    const sanitized = sanitizeFilename(firstPrompt);
    defaultFilename = sanitized ? `${timestamp}-${sanitized}.txt` : `conversation-${timestamp}.txt`;
  } else {
    defaultFilename = `conversation-${timestamp}.txt`;
  }
  return /* @__PURE__ */ react_default.createElement(ExportDialog, { content, defaultFilename, onDone: (result) => {
    onDone(result.message);
  } });
}
var init_export = __esm({
  "src/commands/export/export.tsx"() {
    init_react();
    init_ExportDialog();
    init_cwd();
    init_exportRenderer();
    init_slowOperations();
  }
});
init_export();
export {
  call,
  extractFirstPrompt,
  sanitizeFilename
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvRXhwb3J0RGlhbG9nLnRzeCIsICIuLi8uLi9zcmMvY29tbWFuZHMvZXhwb3J0L2V4cG9ydC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBFeGl0U3RhdGUgfSBmcm9tICcuLi9ob29rcy91c2VFeGl0T25DdHJsQ0RXaXRoS2V5YmluZGluZ3MuanMnXG5pbXBvcnQgeyB1c2VUZXJtaW5hbFNpemUgfSBmcm9tICcuLi9ob29rcy91c2VUZXJtaW5hbFNpemUuanMnXG5pbXBvcnQgeyBzZXRDbGlwYm9hcmQgfSBmcm9tICcuLi9pbmsvdGVybWlvL29zYy5qcydcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uL2luay5qcydcbmltcG9ydCB7IHVzZUtleWJpbmRpbmcgfSBmcm9tICcuLi9rZXliaW5kaW5ncy91c2VLZXliaW5kaW5nLmpzJ1xuaW1wb3J0IHsgZ2V0Q3dkIH0gZnJvbSAnLi4vdXRpbHMvY3dkLmpzJ1xuaW1wb3J0IHsgd3JpdGVGaWxlU3luY19ERVBSRUNBVEVEIH0gZnJvbSAnLi4vdXRpbHMvc2xvd09wZXJhdGlvbnMuanMnXG5pbXBvcnQgeyBDb25maWd1cmFibGVTaG9ydGN1dEhpbnQgfSBmcm9tICcuL0NvbmZpZ3VyYWJsZVNob3J0Y3V0SGludC5qcydcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJy4vQ3VzdG9tU2VsZWN0L3NlbGVjdC5qcydcbmltcG9ydCB7IEJ5bGluZSB9IGZyb20gJy4vZGVzaWduLXN5c3RlbS9CeWxpbmUuanMnXG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICcuL2Rlc2lnbi1zeXN0ZW0vRGlhbG9nLmpzJ1xuaW1wb3J0IHsgS2V5Ym9hcmRTaG9ydGN1dEhpbnQgfSBmcm9tICcuL2Rlc2lnbi1zeXN0ZW0vS2V5Ym9hcmRTaG9ydGN1dEhpbnQuanMnXG5pbXBvcnQgVGV4dElucHV0IGZyb20gJy4vVGV4dElucHV0LmpzJ1xuXG50eXBlIEV4cG9ydERpYWxvZ1Byb3BzID0ge1xuICBjb250ZW50OiBzdHJpbmdcbiAgZGVmYXVsdEZpbGVuYW1lOiBzdHJpbmdcbiAgb25Eb25lOiAocmVzdWx0OiB7IHN1Y2Nlc3M6IGJvb2xlYW47IG1lc3NhZ2U6IHN0cmluZyB9KSA9PiB2b2lkXG59XG5cbnR5cGUgRXhwb3J0T3B0aW9uID0gJ2NsaXBib2FyZCcgfCAnZmlsZSdcblxuZXhwb3J0IGZ1bmN0aW9uIEV4cG9ydERpYWxvZyh7XG4gIGNvbnRlbnQsXG4gIGRlZmF1bHRGaWxlbmFtZSxcbiAgb25Eb25lLFxufTogRXhwb3J0RGlhbG9nUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBbLCBzZXRTZWxlY3RlZE9wdGlvbl0gPSB1c2VTdGF0ZTxFeHBvcnRPcHRpb24gfCBudWxsPihudWxsKVxuICBjb25zdCBbZmlsZW5hbWUsIHNldEZpbGVuYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oZGVmYXVsdEZpbGVuYW1lKVxuICBjb25zdCBbY3Vyc29yT2Zmc2V0LCBzZXRDdXJzb3JPZmZzZXRdID0gdXNlU3RhdGU8bnVtYmVyPihcbiAgICBkZWZhdWx0RmlsZW5hbWUubGVuZ3RoLFxuICApXG4gIGNvbnN0IFtzaG93RmlsZW5hbWVJbnB1dCwgc2V0U2hvd0ZpbGVuYW1lSW5wdXRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHsgY29sdW1ucyB9ID0gdXNlVGVybWluYWxTaXplKClcblxuICAvLyBIYW5kbGUgZ29pbmcgYmFjayBmcm9tIGZpbGVuYW1lIGlucHV0IHRvIG9wdGlvbiBzZWxlY3Rpb25cbiAgY29uc3QgaGFuZGxlR29CYWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNob3dGaWxlbmFtZUlucHV0KGZhbHNlKVxuICAgIHNldFNlbGVjdGVkT3B0aW9uKG51bGwpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdE9wdGlvbiA9IGFzeW5jICh2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgaWYgKHZhbHVlID09PSAnY2xpcGJvYXJkJykge1xuICAgICAgLy8gQ29weSB0byBjbGlwYm9hcmQgaW1tZWRpYXRlbHlcbiAgICAgIGNvbnN0IHJhdyA9IGF3YWl0IHNldENsaXBib2FyZChjb250ZW50KVxuICAgICAgaWYgKHJhdykgcHJvY2Vzcy5zdGRvdXQud3JpdGUocmF3KVxuICAgICAgb25Eb25lKHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ0NvbnZlcnNhdGlvbiBjb3BpZWQgdG8gY2xpcGJvYXJkJyB9KVxuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdmaWxlJykge1xuICAgICAgc2V0U2VsZWN0ZWRPcHRpb24oJ2ZpbGUnKVxuICAgICAgc2V0U2hvd0ZpbGVuYW1lSW5wdXQodHJ1ZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVGaWxlbmFtZVN1Ym1pdCA9ICgpID0+IHtcbiAgICBjb25zdCBmaW5hbEZpbGVuYW1lID0gZmlsZW5hbWUuZW5kc1dpdGgoJy50eHQnKVxuICAgICAgPyBmaWxlbmFtZVxuICAgICAgOiBmaWxlbmFtZS5yZXBsYWNlKC9cXC5bXi5dKyQvLCAnJykgKyAnLnR4dCdcbiAgICBjb25zdCBmaWxlcGF0aCA9IGpvaW4oZ2V0Q3dkKCksIGZpbmFsRmlsZW5hbWUpXG5cbiAgICB0cnkge1xuICAgICAgd3JpdGVGaWxlU3luY19ERVBSRUNBVEVEKGZpbGVwYXRoLCBjb250ZW50LCB7XG4gICAgICAgIGVuY29kaW5nOiAndXRmLTgnLFxuICAgICAgICBmbHVzaDogdHJ1ZSxcbiAgICAgIH0pXG4gICAgICBvbkRvbmUoe1xuICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICBtZXNzYWdlOiBgQ29udmVyc2F0aW9uIGV4cG9ydGVkIHRvOiAke2ZpbGVwYXRofWAsXG4gICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBvbkRvbmUoe1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogYEZhaWxlZCB0byBleHBvcnQgY29udmVyc2F0aW9uOiAke2Vycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ1Vua25vd24gZXJyb3InfWAsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIERpYWxvZyBjYWxscyBvbkNhbmNlbCB3aGVuIEVzY2FwZSBpcyBwcmVzc2VkLiBJZiB3ZSBhcmUgaW4gdGhlIGZpbGVuYW1lXG4gIC8vIGlucHV0IHN1Yi1zY3JlZW4sIGdvIGJhY2sgdG8gdGhlIG9wdGlvbiBsaXN0IGluc3RlYWQgb2YgY2xvc2luZyBlbnRpcmVseS5cbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChzaG93RmlsZW5hbWVJbnB1dCkge1xuICAgICAgaGFuZGxlR29CYWNrKClcbiAgICB9IGVsc2Uge1xuICAgICAgb25Eb25lKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdFeHBvcnQgY2FuY2VsbGVkJyB9KVxuICAgIH1cbiAgfSwgW3Nob3dGaWxlbmFtZUlucHV0LCBoYW5kbGVHb0JhY2ssIG9uRG9uZV0pXG5cbiAgY29uc3Qgb3B0aW9ucyA9IFtcbiAgICB7XG4gICAgICBsYWJlbDogJ0NvcHkgdG8gY2xpcGJvYXJkJyxcbiAgICAgIHZhbHVlOiAnY2xpcGJvYXJkJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ29weSB0aGUgY29udmVyc2F0aW9uIHRvIHlvdXIgc3lzdGVtIGNsaXBib2FyZCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogJ1NhdmUgdG8gZmlsZScsXG4gICAgICB2YWx1ZTogJ2ZpbGUnLFxuICAgICAgZGVzY3JpcHRpb246ICdTYXZlIHRoZSBjb252ZXJzYXRpb24gdG8gYSBmaWxlIGluIHRoZSBjdXJyZW50IGRpcmVjdG9yeScsXG4gICAgfSxcbiAgXVxuXG4gIC8vIEN1c3RvbSBpbnB1dCBndWlkZSB0aGF0IGNoYW5nZXMgYmFzZWQgb24gZGlhbG9nIHN0YXRlXG4gIGZ1bmN0aW9uIHJlbmRlcklucHV0R3VpZGUoZXhpdFN0YXRlOiBFeGl0U3RhdGUpOiBSZWFjdC5SZWFjdE5vZGUge1xuICAgIGlmIChzaG93RmlsZW5hbWVJbnB1dCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEJ5bGluZT5cbiAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCJFbnRlclwiIGFjdGlvbj1cInNhdmVcIiAvPlxuICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgIGFjdGlvbj1cImNvbmZpcm06bm9cIlxuICAgICAgICAgICAgY29udGV4dD1cIkNvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICBmYWxsYmFjaz1cIkVzY1wiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cImdvIGJhY2tcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQnlsaW5lPlxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChleGl0U3RhdGUucGVuZGluZykge1xuICAgICAgcmV0dXJuIDxUZXh0PlByZXNzIHtleGl0U3RhdGUua2V5TmFtZX0gYWdhaW4gdG8gZXhpdDwvVGV4dD5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbmZpZ3VyYWJsZVNob3J0Y3V0SGludFxuICAgICAgICBhY3Rpb249XCJjb25maXJtOm5vXCJcbiAgICAgICAgY29udGV4dD1cIkNvbmZpcm1hdGlvblwiXG4gICAgICAgIGZhbGxiYWNrPVwiRXNjXCJcbiAgICAgICAgZGVzY3JpcHRpb249XCJjYW5jZWxcIlxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICAvLyBVc2UgU2V0dGluZ3MgY29udGV4dCBzbyAnbicga2V5IGRvZXNuJ3QgY2FuY2VsIChhbGxvd3MgdHlwaW5nICduJyBpbiBmaWxlbmFtZSBpbnB1dClcbiAgdXNlS2V5YmluZGluZygnY29uZmlybTpubycsIGhhbmRsZUNhbmNlbCwge1xuICAgIGNvbnRleHQ6ICdTZXR0aW5ncycsXG4gICAgaXNBY3RpdmU6IHNob3dGaWxlbmFtZUlucHV0LFxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPERpYWxvZ1xuICAgICAgdGl0bGU9XCJFeHBvcnQgQ29udmVyc2F0aW9uXCJcbiAgICAgIHN1YnRpdGxlPVwiU2VsZWN0IGV4cG9ydCBtZXRob2Q6XCJcbiAgICAgIGNvbG9yPVwicGVybWlzc2lvblwiXG4gICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfVxuICAgICAgaW5wdXRHdWlkZT17cmVuZGVySW5wdXRHdWlkZX1cbiAgICAgIGlzQ2FuY2VsQWN0aXZlPXshc2hvd0ZpbGVuYW1lSW5wdXR9XG4gICAgPlxuICAgICAgeyFzaG93RmlsZW5hbWVJbnB1dCA/IChcbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdE9wdGlvbn1cbiAgICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfVxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgPFRleHQ+RW50ZXIgZmlsZW5hbWU6PC9UZXh0PlxuICAgICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cInJvd1wiIGdhcD17MX0gbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICAgIDxUZXh0PiZndDs8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgIHZhbHVlPXtmaWxlbmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldEZpbGVuYW1lfVxuICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlRmlsZW5hbWVTdWJtaXR9XG4gICAgICAgICAgICAgIGZvY3VzPXt0cnVlfVxuICAgICAgICAgICAgICBzaG93Q3Vyc29yPXt0cnVlfVxuICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgICBjdXJzb3JPZmZzZXQ9e2N1cnNvck9mZnNldH1cbiAgICAgICAgICAgICAgb25DaGFuZ2VDdXJzb3JPZmZzZXQ9e3NldEN1cnNvck9mZnNldH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICA8L0RpYWxvZz5cbiAgKVxufVxuIiwgImltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRXhwb3J0RGlhbG9nIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9FeHBvcnREaWFsb2cuanMnXG5pbXBvcnQgdHlwZSB7IFRvb2xVc2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vVG9vbC5qcydcbmltcG9ydCB0eXBlIHsgTG9jYWxKU1hDb21tYW5kT25Eb25lIH0gZnJvbSAnLi4vLi4vdHlwZXMvY29tbWFuZC5qcydcbmltcG9ydCB0eXBlIHsgTWVzc2FnZSB9IGZyb20gJy4uLy4uL3R5cGVzL21lc3NhZ2UuanMnXG5pbXBvcnQgeyBnZXRDd2QgfSBmcm9tICcuLi8uLi91dGlscy9jd2QuanMnXG5pbXBvcnQgeyByZW5kZXJNZXNzYWdlc1RvUGxhaW5UZXh0IH0gZnJvbSAnLi4vLi4vdXRpbHMvZXhwb3J0UmVuZGVyZXIuanMnXG5pbXBvcnQgeyB3cml0ZUZpbGVTeW5jX0RFUFJFQ0FURUQgfSBmcm9tICcuLi8uLi91dGlscy9zbG93T3BlcmF0aW9ucy5qcydcblxuZnVuY3Rpb24gZm9ybWF0VGltZXN0YW1wKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gIGNvbnN0IG1vbnRoID0gU3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJylcbiAgY29uc3QgZGF5ID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpXG4gIGNvbnN0IGhvdXJzID0gU3RyaW5nKGRhdGUuZ2V0SG91cnMoKSkucGFkU3RhcnQoMiwgJzAnKVxuICBjb25zdCBtaW51dGVzID0gU3RyaW5nKGRhdGUuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCAnMCcpXG4gIGNvbnN0IHNlY29uZHMgPSBTdHJpbmcoZGF0ZS5nZXRTZWNvbmRzKCkpLnBhZFN0YXJ0KDIsICcwJylcbiAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fS0ke2hvdXJzfSR7bWludXRlc30ke3NlY29uZHN9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEZpcnN0UHJvbXB0KG1lc3NhZ2VzOiBNZXNzYWdlW10pOiBzdHJpbmcge1xuICBjb25zdCBmaXJzdFVzZXJNZXNzYWdlID0gbWVzc2FnZXMuZmluZChtc2cgPT4gbXNnLnR5cGUgPT09ICd1c2VyJylcblxuICBpZiAoIWZpcnN0VXNlck1lc3NhZ2UgfHwgZmlyc3RVc2VyTWVzc2FnZS50eXBlICE9PSAndXNlcicpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGNvbnN0IGNvbnRlbnQgPSBmaXJzdFVzZXJNZXNzYWdlLm1lc3NhZ2U/LmNvbnRlbnRcbiAgbGV0IHJlc3VsdCA9ICcnXG5cbiAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IGNvbnRlbnQudHJpbSgpXG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjb250ZW50KSkge1xuICAgIGNvbnN0IHRleHRDb250ZW50ID0gY29udGVudC5maW5kKGl0ZW0gPT4gaXRlbS50eXBlID09PSAndGV4dCcpXG4gICAgaWYgKHRleHRDb250ZW50ICYmICd0ZXh0JyBpbiB0ZXh0Q29udGVudCkge1xuICAgICAgcmVzdWx0ID0gdGV4dENvbnRlbnQudGV4dC50cmltKClcbiAgICB9XG4gIH1cblxuICAvLyBUYWtlIGZpcnN0IGxpbmUgb25seSBhbmQgbGltaXQgbGVuZ3RoXG4gIHJlc3VsdCA9IHJlc3VsdC5zcGxpdCgnXFxuJylbMF0gfHwgJydcbiAgaWYgKHJlc3VsdC5sZW5ndGggPiA1MCkge1xuICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHJpbmcoMCwgNDkpICsgJ+KApidcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplRmlsZW5hbWUodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gUmVwbGFjZSBzcGVjaWFsIGNoYXJhY3RlcnMgd2l0aCBoeXBoZW5zXG4gIHJldHVybiB0ZXh0XG4gICAgLnRvTG93ZXJDYXNlKClcbiAgICAucmVwbGFjZSgvW15hLXowLTlcXHMtXS9nLCAnJykgLy8gUmVtb3ZlIHNwZWNpYWwgY2hhcnNcbiAgICAucmVwbGFjZSgvXFxzKy9nLCAnLScpIC8vIFJlcGxhY2Ugc3BhY2VzIHdpdGggaHlwaGVuc1xuICAgIC5yZXBsYWNlKC8tKy9nLCAnLScpIC8vIFJlcGxhY2UgbXVsdGlwbGUgaHlwaGVucyB3aXRoIHNpbmdsZVxuICAgIC5yZXBsYWNlKC9eLXwtJC9nLCAnJykgLy8gUmVtb3ZlIGxlYWRpbmcvdHJhaWxpbmcgaHlwaGVuc1xufVxuXG5hc3luYyBmdW5jdGlvbiBleHBvcnRXaXRoUmVhY3RSZW5kZXJlcihcbiAgY29udGV4dDogVG9vbFVzZUNvbnRleHQsXG4pOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCB0b29scyA9IGNvbnRleHQub3B0aW9ucy50b29scyB8fCBbXVxuICByZXR1cm4gcmVuZGVyTWVzc2FnZXNUb1BsYWluVGV4dChjb250ZXh0Lm1lc3NhZ2VzLCB0b29scylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGwoXG4gIG9uRG9uZTogTG9jYWxKU1hDb21tYW5kT25Eb25lLFxuICBjb250ZXh0OiBUb29sVXNlQ29udGV4dCxcbiAgYXJnczogc3RyaW5nLFxuKTogUHJvbWlzZTxSZWFjdC5SZWFjdE5vZGU+IHtcbiAgLy8gUmVuZGVyIHRoZSBjb252ZXJzYXRpb24gY29udGVudFxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgZXhwb3J0V2l0aFJlYWN0UmVuZGVyZXIoY29udGV4dClcblxuICAvLyBJZiBhcmdzIGFyZSBwcm92aWRlZCwgd3JpdGUgZGlyZWN0bHkgdG8gZmlsZSBhbmQgc2tpcCBkaWFsb2dcbiAgY29uc3QgZmlsZW5hbWUgPSBhcmdzLnRyaW0oKVxuICBpZiAoZmlsZW5hbWUpIHtcbiAgICBjb25zdCBmaW5hbEZpbGVuYW1lID0gZmlsZW5hbWUuZW5kc1dpdGgoJy50eHQnKVxuICAgICAgPyBmaWxlbmFtZVxuICAgICAgOiBmaWxlbmFtZS5yZXBsYWNlKC9cXC5bXi5dKyQvLCAnJykgKyAnLnR4dCdcbiAgICBjb25zdCBmaWxlcGF0aCA9IGpvaW4oZ2V0Q3dkKCksIGZpbmFsRmlsZW5hbWUpXG5cbiAgICB0cnkge1xuICAgICAgd3JpdGVGaWxlU3luY19ERVBSRUNBVEVEKGZpbGVwYXRoLCBjb250ZW50LCB7XG4gICAgICAgIGVuY29kaW5nOiAndXRmLTgnLFxuICAgICAgICBmbHVzaDogdHJ1ZSxcbiAgICAgIH0pXG4gICAgICBvbkRvbmUoYENvbnZlcnNhdGlvbiBleHBvcnRlZCB0bzogJHtmaWxlcGF0aH1gKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgb25Eb25lKFxuICAgICAgICBgRmFpbGVkIHRvIGV4cG9ydCBjb252ZXJzYXRpb246ICR7ZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnVW5rbm93biBlcnJvcid9YCxcbiAgICAgIClcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgLy8gR2VuZXJhdGUgZGVmYXVsdCBmaWxlbmFtZSBmcm9tIGZpcnN0IHByb21wdCBvciB0aW1lc3RhbXBcbiAgY29uc3QgZmlyc3RQcm9tcHQgPSBleHRyYWN0Rmlyc3RQcm9tcHQoY29udGV4dC5tZXNzYWdlcylcbiAgY29uc3QgdGltZXN0YW1wID0gZm9ybWF0VGltZXN0YW1wKG5ldyBEYXRlKCkpXG5cbiAgbGV0IGRlZmF1bHRGaWxlbmFtZTogc3RyaW5nXG4gIGlmIChmaXJzdFByb21wdCkge1xuICAgIGNvbnN0IHNhbml0aXplZCA9IHNhbml0aXplRmlsZW5hbWUoZmlyc3RQcm9tcHQpXG4gICAgZGVmYXVsdEZpbGVuYW1lID0gc2FuaXRpemVkXG4gICAgICA/IGAke3RpbWVzdGFtcH0tJHtzYW5pdGl6ZWR9LnR4dGBcbiAgICAgIDogYGNvbnZlcnNhdGlvbi0ke3RpbWVzdGFtcH0udHh0YFxuICB9IGVsc2Uge1xuICAgIGRlZmF1bHRGaWxlbmFtZSA9IGBjb252ZXJzYXRpb24tJHt0aW1lc3RhbXB9LnR4dGBcbiAgfVxuXG4gIC8vIFJldHVybiB0aGUgZGlhbG9nIGNvbXBvbmVudCB3aGVuIG5vIGFyZ3MgcHJvdmlkZWRcbiAgcmV0dXJuIChcbiAgICA8RXhwb3J0RGlhbG9nXG4gICAgICBjb250ZW50PXtjb250ZW50fVxuICAgICAgZGVmYXVsdEZpbGVuYW1lPXtkZWZhdWx0RmlsZW5hbWV9XG4gICAgICBvbkRvbmU9e3Jlc3VsdCA9PiB7XG4gICAgICAgIG9uRG9uZShyZXN1bHQubWVzc2FnZSlcbiAgICAgIH19XG4gICAgLz5cbiAgKVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsWUFBWTtBQXdCZCxTQUFTQyxhQUFhO0VBQzNCQztFQUNBQztFQUNBQztBQUNpQixHQUFvQjtBQUNyQyxRQUFNLENBQUEsRUFBR0MsaUJBQWlCLElBQUlDLFNBQThCLElBQUk7QUFDaEUsUUFBTSxDQUFDQyxVQUFVQyxXQUFXLElBQUlGLFNBQWlCSCxlQUFlO0FBQ2hFLFFBQU0sQ0FBQ00sY0FBY0MsZUFB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O0FBQ0EsYUFBTztJQUNUO0VBQ0Y7QUFHQSxRQUFNZ0MsY0FBY3ZDLG1CQUFtQnNCLFFBQVFyQixRQUFRO0FBQ3ZELFFBQU11QyxZQUFZeEQsZ0JBQWdCLG9CQUFJeUQsS0FBSyxDQUFDO0FBRTVDLE1BQUlDO0FBQ0osTUFBSUgsYUFBYTtBQUNmLFVBQU1JLFlBQVl6QixpQkFBaUJxQixXQUFXO0FBQzlDRyxzQkFBa0JDLFlBQ2QsR0FBR0gsU0FBUyxJQUFJRyxTQUFTLFNBQ3pCLGdCQUFnQkgsU0FBUztFQUMvQixPQUFPO0FBQ0xFLHNCQUFrQixnQkFBZ0JGLFNBQVM7RUFDN0M7QUFHQSxTQUNFLDRDQUFDLGdCQUNDLFNBQ0EsaUJBQ0EsUUFBUWhDLFlBQVU7QUFDaEJtQixXQUFPbkIsT0FBT0QsT0FBTztFQUN2QixHQUFFO0FBR1I7QUF4SEE7O0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7OyIsCiAgIm5hbWVzIjogWyJqb2luIiwgIkV4cG9ydERpYWxvZyIsICJjb250ZW50IiwgImRlZmF1bHRGaWxlbmFtZSIsICJvbkRvbmUiLCAic2V0U2VsZWN0ZWRPcHRpb24iLCAidXNlU3RhdGUiLCAiZmlsZW5hbWUiLCAic2V0RmlsZW5hbWUiLCAiY3Vyc29yT2Zmc2V0IiwgInNldEN1cnNvck9mZnNldCIsICJsZW5ndGgiLCAic2hvd0ZpbGVuYW1lSW5wdXQiLCAic2V0U2hvd0ZpbGVuYW1lSW5wdXQiLCAiY29sdW1ucyIsICJ1c2VUZXJtaW5hbFNpemUiLCAiaGFuZGxlR29CYWNrIiwgInVzZUNhbGxiYWNrIiwgImhhbmRsZVNlbGVjdE9wdGlvbiIsICJ2YWx1ZSIsICJyYXciLCAic2V0Q2xpcGJvYXJkIiwgInByb2Nlc3MiLCAic3Rkb3V0IiwgIndyaXRlIiwgInN1Y2Nlc3MiLCAibWVzc2FnZSIsICJoYW5kbGVGaWxlbmFtZVN1Ym1pdCIsICJmaW5hbEZpbGVuYW1lIiwgImVuZHNXaXRoIiwgInJlcGxhY2UiLCAiZmlsZXBhdGgiLCAiZ2V0Q3dkIiwgIndyaXRlRmlsZVN5bmNfREVQUkVDQVRFRCIsICJlbmNvZGluZyIsICJmbHVzaCIsICJlcnJvciIsICJFcnJvciIsICJoYW5kbGVDYW5jZWwiLCAib3B0aW9ucyIsICJsYWJlbCIsICJkZXNjcmlwdGlvbiIsICJyZW5kZXJJbnB1dEd1aWRlIiwgImV4aXRTdGF0ZSIsICJwZW5kaW5nIiwgImtleU5hbWUiLCAidXNlS2V5YmluZGluZyIsICJjb250ZXh0IiwgImlzQWN0aXZlIiwgImpvaW4iLCAiZm9ybWF0VGltZXN0YW1wIiwgImRhdGUiLCAieWVhciIsICJnZXRGdWxsWWVhciIsICJtb250aCIsICJTdHJpbmciLCAiZ2V0TW9udGgiLCAicGFkU3RhcnQiLCAiZGF5IiwgImdldERhdGUiLCAiaG91cnMiLCAiZ2V0SG91cnMiLCAibWludXRlcyIsICJnZXRNaW51dGVzIiwgInNlY29uZHMiLCAiZ2V0U2Vjb25kcyIsICJleHRyYWN0Rmlyc3RQcm9tcHQiLCAibWVzc2FnZXMiLCAiZmlyc3RVc2VyTWVzc2FnZSIsICJmaW5kIiwgIm1zZyIsICJ0eXBlIiwgImNvbnRlbnQiLCAibWVzc2FnZSIsICJyZXN1bHQiLCAidHJpbSIsICJBcnJheSIsICJpc0FycmF5IiwgInRleHRDb250ZW50IiwgIml0ZW0iLCAidGV4dCIsICJzcGxpdCIsICJsZW5ndGgiLCAic3Vic3RyaW5nIiwgInNhbml0aXplRmlsZW5hbWUiLCAidG9Mb3dlckNhc2UiLCAicmVwbGFjZSIsICJleHBvcnRXaXRoUmVhY3RSZW5kZXJlciIsICJjb250ZXh0IiwgInRvb2xzIiwgIm9wdGlvbnMiLCAicmVuZGVyTWVzc2FnZXNUb1BsYWluVGV4dCIsICJjYWxsIiwgIm9uRG9uZSIsICJhcmdzIiwgImZpbGVuYW1lIiwgImZpbmFsRmlsZW5hbWUiLCAiZW5kc1dpdGgiLCAiZmlsZXBhdGgiLCAiZ2V0Q3dkIiwgIndyaXRlRmlsZVN5bmNfREVQUkVDQVRFRCIsICJlbmNvZGluZyIsICJmbHVzaCIsICJlcnJvciIsICJFcnJvciIsICJmaXJzdFByb21wdCIsICJ0aW1lc3RhbXAiLCAiRGF0ZSIsICJkZWZhdWx0RmlsZW5hbWUiLCAic2FuaXRpemVkIl0KfQo=
