#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  Select,
  extractTextContent,
  init_marked,
  init_messages2 as init_messages,
  init_select,
  marked,
  stripPromptXMLTags
} from "./chunk-OPLSBIOC.mjs";
import "./chunk-PJK4KGGT.mjs";
import {
  Byline,
  KeyboardShortcutHint,
  init_Byline,
  init_KeyboardShortcutHint
} from "./chunk-SR5JKAMQ.mjs";
import "./chunk-RUHH7ZNU.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-P2O4HXJJ.mjs";
import "./chunk-ADZQUMT7.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-M22WMPMZ.mjs";
import "./chunk-66JTK2MJ.mjs";
import {
  Pane,
  init_Pane
} from "./chunk-2LTMY2QU.mjs";
import "./chunk-WJKMR27I.mjs";
import "./chunk-EATKTAOV.mjs";
import "./chunk-AB7U5P7O.mjs";
import "./chunk-SEJU7JU7.mjs";
import "./chunk-ABRSTIS2.mjs";
import "./chunk-L22EUB4Z.mjs";
import "./chunk-NE3WJ556.mjs";
import "./chunk-4BEDQUYS.mjs";
import "./chunk-I4JSDM2A.mjs";
import "./chunk-GQIWFVMV.mjs";
import "./chunk-R2NMUWG6.mjs";
import "./chunk-XTFZIHQR.mjs";
import "./chunk-X6KULBXG.mjs";
import "./chunk-ORS2TTME.mjs";
import "./chunk-IAEMXMG4.mjs";
import "./chunk-WZXBZQWR.mjs";
import "./chunk-J7TDGLE4.mjs";
import "./chunk-HUHT3U2I.mjs";
import "./chunk-MPXK3SNP.mjs";
import "./chunk-C5B5VR2F.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-L4LQXE4X.mjs";
import "./chunk-H6COQF52.mjs";
import "./chunk-5DUAEYU5.mjs";
import "./chunk-4HSGHMYS.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import {
  ThemedBox_default,
  ThemedText,
  c,
  init_ink,
  init_osc,
  init_react_compiler_runtime,
  setClipboard
} from "./chunk-IVRGECFY.mjs";
import {
  init_react,
  react_default,
  useRef
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  countCharInString,
  getGlobalConfig,
  init_config2 as init_config,
  init_stringUtils,
  saveGlobalConfig
} from "./chunk-Z6CSO4BY.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-Q64VCQQA.mjs";
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
  init_stringWidth,
  stringWidth
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

// src/commands/copy/copy.tsx
import { mkdir, writeFile } from "fs/promises";
import { tmpdir } from "os";
import { join } from "path";
function extractCodeBlocks(markdown) {
  const tokens = marked.lexer(stripPromptXMLTags(markdown));
  const blocks = [];
  for (const token of tokens) {
    if (token.type === "code") {
      const codeToken = token;
      blocks.push({
        code: codeToken.text,
        lang: codeToken.lang
      });
    }
  }
  return blocks;
}
function collectRecentAssistantTexts(messages) {
  const texts = [];
  for (let i = messages.length - 1; i >= 0 && texts.length < MAX_LOOKBACK; i--) {
    const msg = messages[i];
    if (msg?.type !== "assistant" || msg.isApiErrorMessage) continue;
    const content = msg.message.content;
    if (!Array.isArray(content)) continue;
    const text = extractTextContent(content, "\n\n");
    if (text) texts.push(text);
  }
  return texts;
}
function fileExtension(lang) {
  if (lang) {
    const sanitized = lang.replace(/[^a-zA-Z0-9]/g, "");
    if (sanitized && sanitized !== "plaintext") {
      return `.${sanitized}`;
    }
  }
  return ".txt";
}
async function writeToFile(text, filename) {
  const filePath = join(COPY_DIR, filename);
  await mkdir(COPY_DIR, {
    recursive: true
  });
  await writeFile(filePath, text, "utf-8");
  return filePath;
}
async function copyOrWriteToFile(text, filename) {
  const raw = await setClipboard(text);
  if (raw) process.stdout.write(raw);
  const lineCount = countCharInString(text, "\n") + 1;
  const charCount = text.length;
  try {
    const filePath = await writeToFile(text, filename);
    return `Copied to clipboard (${charCount} characters, ${lineCount} lines)
Also written to ${filePath}`;
  } catch {
    return `Copied to clipboard (${charCount} characters, ${lineCount} lines)`;
  }
}
function truncateLine(text, maxLen) {
  const firstLine = text.split("\n")[0] ?? "";
  if (stringWidth(firstLine) <= maxLen) {
    return firstLine;
  }
  let result = "";
  let width = 0;
  const targetWidth = maxLen - 1;
  for (const char of firstLine) {
    const charWidth = stringWidth(char);
    if (width + charWidth > targetWidth) break;
    result += char;
    width += charWidth;
  }
  return result + "\u2026";
}
function CopyPicker(t0) {
  const $ = c(33);
  const {
    fullText,
    codeBlocks,
    messageAge,
    onDone
  } = t0;
  const focusedRef = useRef("full");
  const t1 = `${fullText.length} chars, ${countCharInString(fullText, "\n") + 1} lines`;
  let t2;
  if ($[0] !== t1) {
    t2 = {
      label: "Full response",
      value: "full",
      description: t1
    };
    $[0] = t1;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  let t3;
  if ($[2] !== codeBlocks || $[3] !== t2) {
    let t42;
    if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t42 = {
        label: "Always copy full response",
        value: "always",
        description: "Skip this picker in the future (revert via /config)"
      };
      $[5] = t42;
    } else {
      t42 = $[5];
    }
    t3 = [t2, ...codeBlocks.map(_temp), t42];
    $[2] = codeBlocks;
    $[3] = t2;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  const options = t3;
  let t4;
  if ($[6] !== codeBlocks || $[7] !== fullText) {
    t4 = function getSelectionContent2(selected) {
      if (selected === "full" || selected === "always") {
        return {
          text: fullText,
          filename: RESPONSE_FILENAME
        };
      }
      const block_0 = codeBlocks[selected];
      return {
        text: block_0.code,
        filename: `copy${fileExtension(block_0.lang)}`,
        blockIndex: selected
      };
    };
    $[6] = codeBlocks;
    $[7] = fullText;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  const getSelectionContent = t4;
  let t5;
  if ($[9] !== codeBlocks.length || $[10] !== getSelectionContent || $[11] !== messageAge || $[12] !== onDone) {
    t5 = async function handleSelect2(selected_0) {
      const content = getSelectionContent(selected_0);
      if (selected_0 === "always") {
        if (!getGlobalConfig().copyFullResponse) {
          saveGlobalConfig(_temp2);
        }
        logEvent("tengu_copy", {
          block_count: codeBlocks.length,
          always: true,
          message_age: messageAge
        });
        const result = await copyOrWriteToFile(content.text, content.filename);
        onDone(`${result}
Preference saved. Use /config to change copyFullResponse`);
        return;
      }
      logEvent("tengu_copy", {
        selected_block: content.blockIndex,
        block_count: codeBlocks.length,
        message_age: messageAge
      });
      const result_0 = await copyOrWriteToFile(content.text, content.filename);
      onDone(result_0);
    };
    $[9] = codeBlocks.length;
    $[10] = getSelectionContent;
    $[11] = messageAge;
    $[12] = onDone;
    $[13] = t5;
  } else {
    t5 = $[13];
  }
  const handleSelect = t5;
  let t6;
  if ($[14] !== codeBlocks.length || $[15] !== getSelectionContent || $[16] !== messageAge || $[17] !== onDone) {
    const handleWrite = async function handleWrite2(selected_1) {
      const content_0 = getSelectionContent(selected_1);
      logEvent("tengu_copy", {
        selected_block: content_0.blockIndex,
        block_count: codeBlocks.length,
        message_age: messageAge,
        write_shortcut: true
      });
      ;
      try {
        const filePath = await writeToFile(content_0.text, content_0.filename);
        onDone(`Written to ${filePath}`);
      } catch (t72) {
        const e = t72;
        onDone(`Failed to write file: ${e instanceof Error ? e.message : e}`);
      }
    };
    t6 = function handleKeyDown2(e_0) {
      if (e_0.key === "w") {
        e_0.preventDefault();
        handleWrite(focusedRef.current);
      }
    };
    $[14] = codeBlocks.length;
    $[15] = getSelectionContent;
    $[16] = messageAge;
    $[17] = onDone;
    $[18] = t6;
  } else {
    t6 = $[18];
  }
  const handleKeyDown = t6;
  let t7;
  if ($[19] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Select content to copy:");
    $[19] = t7;
  } else {
    t7 = $[19];
  }
  let t8;
  if ($[20] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t8 = (value) => {
      focusedRef.current = value;
    };
    $[20] = t8;
  } else {
    t8 = $[20];
  }
  let t9;
  if ($[21] !== handleSelect) {
    t9 = (selected_2) => {
      handleSelect(selected_2);
    };
    $[21] = handleSelect;
    $[22] = t9;
  } else {
    t9 = $[22];
  }
  let t10;
  if ($[23] !== onDone) {
    t10 = () => {
      onDone("Copy cancelled", {
        display: "system"
      });
    };
    $[23] = onDone;
    $[24] = t10;
  } else {
    t10 = $[24];
  }
  let t11;
  if ($[25] !== options || $[26] !== t10 || $[27] !== t9) {
    t11 = /* @__PURE__ */ react_default.createElement(Select, { options, hideIndexes: false, onFocus: t8, onChange: t9, onCancel: t10 });
    $[25] = options;
    $[26] = t10;
    $[27] = t9;
    $[28] = t11;
  } else {
    t11 = $[28];
  }
  let t12;
  if ($[29] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t12 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "enter", action: "copy" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "w", action: "write to file" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "esc", action: "cancel" })));
    $[29] = t12;
  } else {
    t12 = $[29];
  }
  let t13;
  if ($[30] !== handleKeyDown || $[31] !== t11) {
    t13 = /* @__PURE__ */ react_default.createElement(Pane, null, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1, tabIndex: 0, autoFocus: true, onKeyDown: handleKeyDown }, t7, t11, t12));
    $[30] = handleKeyDown;
    $[31] = t11;
    $[32] = t13;
  } else {
    t13 = $[32];
  }
  return t13;
}
function _temp2(c2) {
  return {
    ...c2,
    copyFullResponse: true
  };
}
function _temp(block, index) {
  const blockLines = countCharInString(block.code, "\n") + 1;
  return {
    label: truncateLine(block.code, 60),
    value: index,
    description: [block.lang, blockLines > 1 ? `${blockLines} lines` : void 0].filter(Boolean).join(", ") || void 0
  };
}
var COPY_DIR, RESPONSE_FILENAME, MAX_LOOKBACK, call;
var init_copy = __esm({
  "src/commands/copy/copy.tsx"() {
    init_react_compiler_runtime();
    init_marked();
    init_react();
    init_select();
    init_Byline();
    init_KeyboardShortcutHint();
    init_Pane();
    init_stringWidth();
    init_osc();
    init_ink();
    init_analytics();
    init_config();
    init_messages();
    init_stringUtils();
    COPY_DIR = join(tmpdir(), "claude");
    RESPONSE_FILENAME = "response.md";
    MAX_LOOKBACK = 20;
    call = async (onDone, context, args) => {
      const texts = collectRecentAssistantTexts(context.messages);
      if (texts.length === 0) {
        onDone("No assistant message to copy");
        return null;
      }
      let age = 0;
      const arg = args?.trim();
      if (arg) {
        const n = Number(arg);
        if (!Number.isInteger(n) || n < 1) {
          onDone(`Usage: /copy [N] where N is 1 (latest), 2, 3, \u2026 Got: ${arg}`);
          return null;
        }
        if (n > texts.length) {
          onDone(`Only ${texts.length} assistant ${texts.length === 1 ? "message" : "messages"} available to copy`);
          return null;
        }
        age = n - 1;
      }
      const text = texts[age];
      const codeBlocks = extractCodeBlocks(text);
      const config = getGlobalConfig();
      if (codeBlocks.length === 0 || config.copyFullResponse) {
        logEvent("tengu_copy", {
          always: config.copyFullResponse,
          block_count: codeBlocks.length,
          message_age: age
        });
        const result = await copyOrWriteToFile(text, RESPONSE_FILENAME);
        onDone(result);
        return null;
      }
      return /* @__PURE__ */ react_default.createElement(CopyPicker, { fullText: text, codeBlocks, messageAge: age, onDone });
    };
  }
});
init_copy();
export {
  call,
  collectRecentAssistantTexts,
  fileExtension
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL2NvcHkvY29weS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IG1rZGlyLCB3cml0ZUZpbGUgfSBmcm9tICdmcy9wcm9taXNlcydcbmltcG9ydCB7IG1hcmtlZCwgdHlwZSBUb2tlbnMgfSBmcm9tICdtYXJrZWQnXG5pbXBvcnQgeyB0bXBkaXIgfSBmcm9tICdvcydcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBDb21tYW5kUmVzdWx0RGlzcGxheSB9IGZyb20gJy4uLy4uL2NvbW1hbmRzLmpzJ1xuaW1wb3J0IHR5cGUgeyBPcHRpb25XaXRoRGVzY3JpcHRpb24gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0N1c3RvbVNlbGVjdC9zZWxlY3QuanMnXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0N1c3RvbVNlbGVjdC9zZWxlY3QuanMnXG5pbXBvcnQgeyBCeWxpbmUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Rlc2lnbi1zeXN0ZW0vQnlsaW5lLmpzJ1xuaW1wb3J0IHsgS2V5Ym9hcmRTaG9ydGN1dEhpbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Rlc2lnbi1zeXN0ZW0vS2V5Ym9hcmRTaG9ydGN1dEhpbnQuanMnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kZXNpZ24tc3lzdGVtL1BhbmUuanMnXG5pbXBvcnQgdHlwZSB7IEtleWJvYXJkRXZlbnQgfSBmcm9tICcuLi8uLi9pbmsvZXZlbnRzL2tleWJvYXJkLWV2ZW50LmpzJ1xuaW1wb3J0IHsgc3RyaW5nV2lkdGggfSBmcm9tICcuLi8uLi9pbmsvc3RyaW5nV2lkdGguanMnXG5pbXBvcnQgeyBzZXRDbGlwYm9hcmQgfSBmcm9tICcuLi8uLi9pbmsvdGVybWlvL29zYy5qcydcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7IGxvZ0V2ZW50IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHR5cGUgeyBMb2NhbEpTWENvbW1hbmRDYWxsIH0gZnJvbSAnLi4vLi4vdHlwZXMvY29tbWFuZC5qcydcbmltcG9ydCB0eXBlIHsgQXNzaXN0YW50TWVzc2FnZSwgTWVzc2FnZSB9IGZyb20gJy4uLy4uL3R5cGVzL21lc3NhZ2UuanMnXG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcsIHNhdmVHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi91dGlscy9jb25maWcuanMnXG5pbXBvcnQgeyBleHRyYWN0VGV4dENvbnRlbnQsIHN0cmlwUHJvbXB0WE1MVGFncyB9IGZyb20gJy4uLy4uL3V0aWxzL21lc3NhZ2VzLmpzJ1xuaW1wb3J0IHsgY291bnRDaGFySW5TdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscy9zdHJpbmdVdGlscy5qcydcblxuY29uc3QgQ09QWV9ESVIgPSBqb2luKHRtcGRpcigpLCAnY2xhdWRlJylcbmNvbnN0IFJFU1BPTlNFX0ZJTEVOQU1FID0gJ3Jlc3BvbnNlLm1kJ1xuY29uc3QgTUFYX0xPT0tCQUNLID0gMjBcblxudHlwZSBDb2RlQmxvY2sgPSB7XG4gIGNvZGU6IHN0cmluZ1xuICBsYW5nOiBzdHJpbmcgfCB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZXh0cmFjdENvZGVCbG9ja3MobWFya2Rvd246IHN0cmluZyk6IENvZGVCbG9ja1tdIHtcbiAgY29uc3QgdG9rZW5zID0gbWFya2VkLmxleGVyKHN0cmlwUHJvbXB0WE1MVGFncyhtYXJrZG93bikpXG4gIGNvbnN0IGJsb2NrczogQ29kZUJsb2NrW10gPSBbXVxuICBmb3IgKGNvbnN0IHRva2VuIG9mIHRva2Vucykge1xuICAgIGlmICh0b2tlbi50eXBlID09PSAnY29kZScpIHtcbiAgICAgIGNvbnN0IGNvZGVUb2tlbiA9IHRva2VuIGFzIFRva2Vucy5Db2RlXG4gICAgICBibG9ja3MucHVzaCh7IGNvZGU6IGNvZGVUb2tlbi50ZXh0LCBsYW5nOiBjb2RlVG9rZW4ubGFuZyB9KVxuICAgIH1cbiAgfVxuICByZXR1cm4gYmxvY2tzXG59XG5cbi8qKlxuICogV2FsayBtZXNzYWdlcyBuZXdlc3QtZmlyc3QsIHJldHVybmluZyB0ZXh0IGZyb20gYXNzaXN0YW50IG1lc3NhZ2VzIHRoYXRcbiAqIGFjdHVhbGx5IHNhaWQgc29tZXRoaW5nIChza2lwcyB0b29sLXVzZS1vbmx5IHR1cm5zIGFuZCBBUEkgZXJyb3JzKS5cbiAqIEluZGV4IDAgPSBsYXRlc3QsIDEgPSBzZWNvbmQtdG8tbGF0ZXN0LCBldGMuIENhcHMgYXQgTUFYX0xPT0tCQUNLLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29sbGVjdFJlY2VudEFzc2lzdGFudFRleHRzKG1lc3NhZ2VzOiBNZXNzYWdlW10pOiBzdHJpbmdbXSB7XG4gIGNvbnN0IHRleHRzOiBzdHJpbmdbXSA9IFtdXG4gIGZvciAoXG4gICAgbGV0IGkgPSBtZXNzYWdlcy5sZW5ndGggLSAxO1xuICAgIGkgPj0gMCAmJiB0ZXh0cy5sZW5ndGggPCBNQVhfTE9PS0JBQ0s7XG4gICAgaS0tXG4gICkge1xuICAgIGNvbnN0IG1zZyA9IG1lc3NhZ2VzW2ldXG4gICAgaWYgKG1zZz8udHlwZSAhPT0gJ2Fzc2lzdGFudCcgfHwgbXNnLmlzQXBpRXJyb3JNZXNzYWdlKSBjb250aW51ZVxuICAgIGNvbnN0IGNvbnRlbnQgPSAobXNnIGFzIEFzc2lzdGFudE1lc3NhZ2UpLm1lc3NhZ2UuY29udGVudFxuICAgIGlmICghQXJyYXkuaXNBcnJheShjb250ZW50KSkgY29udGludWVcbiAgICBjb25zdCB0ZXh0ID0gZXh0cmFjdFRleHRDb250ZW50KGNvbnRlbnQsICdcXG5cXG4nKVxuICAgIGlmICh0ZXh0KSB0ZXh0cy5wdXNoKHRleHQpXG4gIH1cbiAgcmV0dXJuIHRleHRzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWxlRXh0ZW5zaW9uKGxhbmc6IHN0cmluZyB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XG4gIGlmIChsYW5nKSB7XG4gICAgLy8gU2FuaXRpemUgdG8gcHJldmVudCBwYXRoIHRyYXZlcnNhbCAoZS5nLiBgYGAuLi8uLi9ldGMvcGFzc3dkKVxuICAgIC8vIExhbmd1YWdlIGlkZW50aWZpZXJzIGFyZSBhbHBoYW51bWVyaWM6IHB5dGhvbiwgdHN4LCBqc29uYywgZXRjLlxuICAgIGNvbnN0IHNhbml0aXplZCA9IGxhbmcucmVwbGFjZSgvW15hLXpBLVowLTldL2csICcnKVxuICAgIGlmIChzYW5pdGl6ZWQgJiYgc2FuaXRpemVkICE9PSAncGxhaW50ZXh0Jykge1xuICAgICAgcmV0dXJuIGAuJHtzYW5pdGl6ZWR9YFxuICAgIH1cbiAgfVxuICByZXR1cm4gJy50eHQnXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHdyaXRlVG9GaWxlKHRleHQ6IHN0cmluZywgZmlsZW5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IGZpbGVQYXRoID0gam9pbihDT1BZX0RJUiwgZmlsZW5hbWUpXG4gIGF3YWl0IG1rZGlyKENPUFlfRElSLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KVxuICBhd2FpdCB3cml0ZUZpbGUoZmlsZVBhdGgsIHRleHQsICd1dGYtOCcpXG4gIHJldHVybiBmaWxlUGF0aFxufVxuXG5hc3luYyBmdW5jdGlvbiBjb3B5T3JXcml0ZVRvRmlsZShcbiAgdGV4dDogc3RyaW5nLFxuICBmaWxlbmFtZTogc3RyaW5nLFxuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3QgcmF3ID0gYXdhaXQgc2V0Q2xpcGJvYXJkKHRleHQpXG4gIGlmIChyYXcpIHByb2Nlc3Muc3Rkb3V0LndyaXRlKHJhdylcbiAgY29uc3QgbGluZUNvdW50ID0gY291bnRDaGFySW5TdHJpbmcodGV4dCwgJ1xcbicpICsgMVxuICBjb25zdCBjaGFyQ291bnQgPSB0ZXh0Lmxlbmd0aFxuICAvLyBBbHNvIHdyaXRlIHRvIGEgdGVtcCBmaWxlIOKAlCBjbGlwYm9hcmQgcGF0aHMgYXJlIGJlc3QtZWZmb3J0IChPU0MgNTIgbmVlZHNcbiAgLy8gdGVybWluYWwgc3VwcG9ydCksIHNvIHRoZSBmaWxlIHByb3ZpZGVzIGEgcmVsaWFibGUgZmFsbGJhY2suXG4gIHRyeSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBhd2FpdCB3cml0ZVRvRmlsZSh0ZXh0LCBmaWxlbmFtZSlcbiAgICByZXR1cm4gYENvcGllZCB0byBjbGlwYm9hcmQgKCR7Y2hhckNvdW50fSBjaGFyYWN0ZXJzLCAke2xpbmVDb3VudH0gbGluZXMpXFxuQWxzbyB3cml0dGVuIHRvICR7ZmlsZVBhdGh9YFxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gYENvcGllZCB0byBjbGlwYm9hcmQgKCR7Y2hhckNvdW50fSBjaGFyYWN0ZXJzLCAke2xpbmVDb3VudH0gbGluZXMpYFxuICB9XG59XG5cbmZ1bmN0aW9uIHRydW5jYXRlTGluZSh0ZXh0OiBzdHJpbmcsIG1heExlbjogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3QgZmlyc3RMaW5lID0gdGV4dC5zcGxpdCgnXFxuJylbMF0gPz8gJydcbiAgaWYgKHN0cmluZ1dpZHRoKGZpcnN0TGluZSkgPD0gbWF4TGVuKSB7XG4gICAgcmV0dXJuIGZpcnN0TGluZVxuICB9XG4gIGxldCByZXN1bHQgPSAnJ1xuICBsZXQgd2lkdGggPSAwXG4gIGNvbnN0IHRhcmdldFdpZHRoID0gbWF4TGVuIC0gMVxuICBmb3IgKGNvbnN0IGNoYXIgb2YgZmlyc3RMaW5lKSB7XG4gICAgY29uc3QgY2hhcldpZHRoID0gc3RyaW5nV2lkdGgoY2hhcilcbiAgICBpZiAod2lkdGggKyBjaGFyV2lkdGggPiB0YXJnZXRXaWR0aCkgYnJlYWtcbiAgICByZXN1bHQgKz0gY2hhclxuICAgIHdpZHRoICs9IGNoYXJXaWR0aFxuICB9XG4gIHJldHVybiByZXN1bHQgKyAnXFx1MjAyNidcbn1cblxudHlwZSBQaWNrZXJQcm9wcyA9IHtcbiAgZnVsbFRleHQ6IHN0cmluZ1xuICBjb2RlQmxvY2tzOiBDb2RlQmxvY2tbXVxuICBtZXNzYWdlQWdlOiBudW1iZXJcbiAgb25Eb25lOiAoXG4gICAgcmVzdWx0Pzogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7IGRpc3BsYXk/OiBDb21tYW5kUmVzdWx0RGlzcGxheSB9LFxuICApID0+IHZvaWRcbn1cblxudHlwZSBQaWNrZXJTZWxlY3Rpb24gPSBudW1iZXIgfCAnZnVsbCcgfCAnYWx3YXlzJ1xuXG5mdW5jdGlvbiBDb3B5UGlja2VyKHtcbiAgZnVsbFRleHQsXG4gIGNvZGVCbG9ja3MsXG4gIG1lc3NhZ2VBZ2UsXG4gIG9uRG9uZSxcbn06IFBpY2tlclByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgZm9jdXNlZFJlZiA9IHVzZVJlZjxQaWNrZXJTZWxlY3Rpb24+KCdmdWxsJylcblxuICBjb25zdCBvcHRpb25zOiBPcHRpb25XaXRoRGVzY3JpcHRpb248UGlja2VyU2VsZWN0aW9uPltdID0gW1xuICAgIHtcbiAgICAgIGxhYmVsOiAnRnVsbCByZXNwb25zZScsXG4gICAgICB2YWx1ZTogJ2Z1bGwnIGFzIGNvbnN0LFxuICAgICAgZGVzY3JpcHRpb246IGAke2Z1bGxUZXh0Lmxlbmd0aH0gY2hhcnMsICR7Y291bnRDaGFySW5TdHJpbmcoZnVsbFRleHQsICdcXG4nKSArIDF9IGxpbmVzYCxcbiAgICB9LFxuICAgIC4uLmNvZGVCbG9ja3MubWFwKChibG9jaywgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGJsb2NrTGluZXMgPSBjb3VudENoYXJJblN0cmluZyhibG9jay5jb2RlLCAnXFxuJykgKyAxXG4gICAgICByZXR1cm4ge1xuICAgICAgICBsYWJlbDogdHJ1bmNhdGVMaW5lKGJsb2NrLmNvZGUsIDYwKSxcbiAgICAgICAgdmFsdWU6IGluZGV4LFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBbYmxvY2subGFuZywgYmxvY2tMaW5lcyA+IDEgPyBgJHtibG9ja0xpbmVzfSBsaW5lc2AgOiB1bmRlZmluZWRdXG4gICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgICAgICAuam9pbignLCAnKSB8fCB1bmRlZmluZWQsXG4gICAgICB9XG4gICAgfSksXG4gICAge1xuICAgICAgbGFiZWw6ICdBbHdheXMgY29weSBmdWxsIHJlc3BvbnNlJyxcbiAgICAgIHZhbHVlOiAnYWx3YXlzJyBhcyBjb25zdCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2tpcCB0aGlzIHBpY2tlciBpbiB0aGUgZnV0dXJlIChyZXZlcnQgdmlhIC9jb25maWcpJyxcbiAgICB9LFxuICBdXG5cbiAgZnVuY3Rpb24gZ2V0U2VsZWN0aW9uQ29udGVudChzZWxlY3RlZDogUGlja2VyU2VsZWN0aW9uKToge1xuICAgIHRleHQ6IHN0cmluZ1xuICAgIGZpbGVuYW1lOiBzdHJpbmdcbiAgICBibG9ja0luZGV4PzogbnVtYmVyXG4gIH0ge1xuICAgIGlmIChzZWxlY3RlZCA9PT0gJ2Z1bGwnIHx8IHNlbGVjdGVkID09PSAnYWx3YXlzJykge1xuICAgICAgcmV0dXJuIHsgdGV4dDogZnVsbFRleHQsIGZpbGVuYW1lOiBSRVNQT05TRV9GSUxFTkFNRSB9XG4gICAgfVxuICAgIGNvbnN0IGJsb2NrID0gY29kZUJsb2Nrc1tzZWxlY3RlZF0hXG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IGJsb2NrLmNvZGUsXG4gICAgICBmaWxlbmFtZTogYGNvcHkke2ZpbGVFeHRlbnNpb24oYmxvY2subGFuZyl9YCxcbiAgICAgIGJsb2NrSW5kZXg6IHNlbGVjdGVkLFxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdChzZWxlY3RlZDogUGlja2VyU2VsZWN0aW9uKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgY29udGVudCA9IGdldFNlbGVjdGlvbkNvbnRlbnQoc2VsZWN0ZWQpXG4gICAgaWYgKHNlbGVjdGVkID09PSAnYWx3YXlzJykge1xuICAgICAgaWYgKCFnZXRHbG9iYWxDb25maWcoKS5jb3B5RnVsbFJlc3BvbnNlKSB7XG4gICAgICAgIHNhdmVHbG9iYWxDb25maWcoYyA9PiAoeyAuLi5jLCBjb3B5RnVsbFJlc3BvbnNlOiB0cnVlIH0pKVxuICAgICAgfVxuICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2NvcHknLCB7XG4gICAgICAgIGJsb2NrX2NvdW50OiBjb2RlQmxvY2tzLmxlbmd0aCxcbiAgICAgICAgYWx3YXlzOiB0cnVlLFxuICAgICAgICBtZXNzYWdlX2FnZTogbWVzc2FnZUFnZSxcbiAgICAgIH0pXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb3B5T3JXcml0ZVRvRmlsZShjb250ZW50LnRleHQsIGNvbnRlbnQuZmlsZW5hbWUpXG4gICAgICBvbkRvbmUoXG4gICAgICAgIGAke3Jlc3VsdH1cXG5QcmVmZXJlbmNlIHNhdmVkLiBVc2UgL2NvbmZpZyB0byBjaGFuZ2UgY29weUZ1bGxSZXNwb25zZWAsXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgbG9nRXZlbnQoJ3Rlbmd1X2NvcHknLCB7XG4gICAgICBzZWxlY3RlZF9ibG9jazogY29udGVudC5ibG9ja0luZGV4LFxuICAgICAgYmxvY2tfY291bnQ6IGNvZGVCbG9ja3MubGVuZ3RoLFxuICAgICAgbWVzc2FnZV9hZ2U6IG1lc3NhZ2VBZ2UsXG4gICAgfSlcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb3B5T3JXcml0ZVRvRmlsZShjb250ZW50LnRleHQsIGNvbnRlbnQuZmlsZW5hbWUpXG4gICAgb25Eb25lKHJlc3VsdClcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVdyaXRlKHNlbGVjdGVkOiBQaWNrZXJTZWxlY3Rpb24pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZ2V0U2VsZWN0aW9uQ29udGVudChzZWxlY3RlZClcbiAgICBsb2dFdmVudCgndGVuZ3VfY29weScsIHtcbiAgICAgIHNlbGVjdGVkX2Jsb2NrOiBjb250ZW50LmJsb2NrSW5kZXgsXG4gICAgICBibG9ja19jb3VudDogY29kZUJsb2Nrcy5sZW5ndGgsXG4gICAgICBtZXNzYWdlX2FnZTogbWVzc2FnZUFnZSxcbiAgICAgIHdyaXRlX3Nob3J0Y3V0OiB0cnVlLFxuICAgIH0pXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gYXdhaXQgd3JpdGVUb0ZpbGUoY29udGVudC50ZXh0LCBjb250ZW50LmZpbGVuYW1lKVxuICAgICAgb25Eb25lKGBXcml0dGVuIHRvICR7ZmlsZVBhdGh9YClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvbkRvbmUoYEZhaWxlZCB0byB3cml0ZSBmaWxlOiAke2UgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6IGV9YClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZS5rZXkgPT09ICd3Jykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB2b2lkIGhhbmRsZVdyaXRlKGZvY3VzZWRSZWYuY3VycmVudClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxQYW5lPlxuICAgICAgPEJveFxuICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgZ2FwPXsxfVxuICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICAgID5cbiAgICAgICAgPFRleHQgZGltQ29sb3I+U2VsZWN0IGNvbnRlbnQgdG8gY29weTo8L1RleHQ+XG4gICAgICAgIDxTZWxlY3Q8UGlja2VyU2VsZWN0aW9uPlxuICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgaGlkZUluZGV4ZXM9e2ZhbHNlfVxuICAgICAgICAgIG9uRm9jdXM9e3ZhbHVlID0+IHtcbiAgICAgICAgICAgIGZvY3VzZWRSZWYuY3VycmVudCA9IHZhbHVlXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNoYW5nZT17c2VsZWN0ZWQgPT4ge1xuICAgICAgICAgICAgdm9pZCBoYW5kbGVTZWxlY3Qoc2VsZWN0ZWQpXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xuICAgICAgICAgICAgb25Eb25lKCdDb3B5IGNhbmNlbGxlZCcsIHsgZGlzcGxheTogJ3N5c3RlbScgfSlcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICA8QnlsaW5lPlxuICAgICAgICAgICAgPEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwiZW50ZXJcIiBhY3Rpb249XCJjb3B5XCIgLz5cbiAgICAgICAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cIndcIiBhY3Rpb249XCJ3cml0ZSB0byBmaWxlXCIgLz5cbiAgICAgICAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cImVzY1wiIGFjdGlvbj1cImNhbmNlbFwiIC8+XG4gICAgICAgICAgPC9CeWxpbmU+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIDwvUGFuZT5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgY2FsbDogTG9jYWxKU1hDb21tYW5kQ2FsbCA9IGFzeW5jIChvbkRvbmUsIGNvbnRleHQsIGFyZ3MpID0+IHtcbiAgY29uc3QgdGV4dHMgPSBjb2xsZWN0UmVjZW50QXNzaXN0YW50VGV4dHMoY29udGV4dC5tZXNzYWdlcylcblxuICBpZiAodGV4dHMubGVuZ3RoID09PSAwKSB7XG4gICAgb25Eb25lKCdObyBhc3Npc3RhbnQgbWVzc2FnZSB0byBjb3B5JylcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLy8gL2NvcHkgTiByZWFjaGVzIGJhY2sgTi0xIG1lc3NhZ2VzICgxID0gbGF0ZXN0LCAyID0gc2Vjb25kLXRvLWxhdGVzdCwgLi4uKVxuICBsZXQgYWdlID0gMFxuICBjb25zdCBhcmcgPSBhcmdzPy50cmltKClcbiAgaWYgKGFyZykge1xuICAgIGNvbnN0IG4gPSBOdW1iZXIoYXJnKVxuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihuKSB8fCBuIDwgMSkge1xuICAgICAgb25Eb25lKGBVc2FnZTogL2NvcHkgW05dIHdoZXJlIE4gaXMgMSAobGF0ZXN0KSwgMiwgMywgXFx1MjAyNiBHb3Q6ICR7YXJnfWApXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBpZiAobiA+IHRleHRzLmxlbmd0aCkge1xuICAgICAgb25Eb25lKFxuICAgICAgICBgT25seSAke3RleHRzLmxlbmd0aH0gYXNzaXN0YW50ICR7dGV4dHMubGVuZ3RoID09PSAxID8gJ21lc3NhZ2UnIDogJ21lc3NhZ2VzJ30gYXZhaWxhYmxlIHRvIGNvcHlgLFxuICAgICAgKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgYWdlID0gbiAtIDFcbiAgfVxuXG4gIGNvbnN0IHRleHQgPSB0ZXh0c1thZ2VdIVxuICBjb25zdCBjb2RlQmxvY2tzID0gZXh0cmFjdENvZGVCbG9ja3ModGV4dClcbiAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKClcblxuICBpZiAoY29kZUJsb2Nrcy5sZW5ndGggPT09IDAgfHwgY29uZmlnLmNvcHlGdWxsUmVzcG9uc2UpIHtcbiAgICBsb2dFdmVudCgndGVuZ3VfY29weScsIHtcbiAgICAgIGFsd2F5czogY29uZmlnLmNvcHlGdWxsUmVzcG9uc2UsXG4gICAgICBibG9ja19jb3VudDogY29kZUJsb2Nrcy5sZW5ndGgsXG4gICAgICBtZXNzYWdlX2FnZTogYWdlLFxuICAgIH0pXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29weU9yV3JpdGVUb0ZpbGUodGV4dCwgUkVTUE9OU0VfRklMRU5BTUUpXG4gICAgb25Eb25lKHJlc3VsdClcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29weVBpY2tlclxuICAgICAgZnVsbFRleHQ9e3RleHR9XG4gICAgICBjb2RlQmxvY2tzPXtjb2RlQmxvY2tzfVxuICAgICAgbWVzc2FnZUFnZT17YWdlfVxuICAgICAgb25Eb25lPXtvbkRvbmV9XG4gICAgLz5cbiAgKVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsT0FBT0MsaUJBQWlCO0FBRWpDLFNBQVNDLGNBQWM7QUFDdkIsU0FBU0MsWUFBWTtBQTRCckIsU0FBU0Msa0JBQWtCQyxVQUErQjtBQUN4RCxRQUFNQyxTQUFTQyxPQUFPQyxNQUFNQyxtQkFBbUJKLFFBQVEsQ0FBQztBQUN4RCxRQUFNSyxTQUFzQixDQUFBO0FBQzVCLGFBQVdDLFNBQVNMLFFBQVE7QUFDMUIsUUFBSUssTUFBTUMsU0FBUyxRQUFRO0FBQ3pCLFlBQU1DLFlBQVlGO0FBQ2xCRCxhQUFPSSxLQUFLO1FBQUVDLE1BQU1GLFVBQVVHO1FBQU1DLE1BQU1KLFVBQVVJO01BQUssQ0FBQztJQUM1RDtFQUNGO0FBQ0EsU0FBT1A7QUFDVDtBQU9PLFNBQVNRLDRCQUE0QkMsVUFBK0I7QUFDekUsUUFBTUMsUUFBa0IsQ0FBQTtBQUN4QixXQUNNQyxJQUFJRixTQUFTRyxTQUFTLEdBQzFCRCxLQUFLLEtBQUtELE1BQU1FLFNBQVNDLGNBQ3pCRixLQUNBO0FBQ0EsVUFBTUcsTUFBTUwsU0FBU0UsQ0FBQztBQUN0QixRQUFJRyxLQUFLWixTQUFTLGVBQWVZLElBQUlDLGtCQUFtQjtBQUN4RCxVQUFNQyxVQUFXRixJQUF5QkcsUUFBUUQ7QUFDbEQsUUFBSSxDQUFDRSxNQUFNQyxRQUFRSCxPQUFPLEVBQUc7QUFDN0IsVUFBTVYsT0FBT2MsbUJBQW1CSixTQUFTLE1BQU07QUFDL0MsUUFBSVYsS0FBTUksT0FBTU4sS0FBS0UsSUFBSTtFQUMzQjtB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QUFNRSxNQUFNLGNBQWNGLE1BQU1FLFdBQVcsSUFBSSxZQUFZLFVBQVUsb0JBQy9FO0FBQ0EsaUJBQU87UUFDVDtBQUNBMkcsY0FBTUcsSUFBSTtNQUNaO0FBRUEsWUFBTXBILE9BQU9JLE1BQU02RyxHQUFHO0FBQ3RCLFlBQU1sRSxhQUFhM0Qsa0JBQWtCWSxJQUFJO0FBQ3pDLFlBQU11SCxTQUFTOUMsZ0JBQWdCO0FBRS9CLFVBQUkxQixXQUFXekMsV0FBVyxLQUFLaUgsT0FBTzdDLGtCQUFrQjtBQUN0REcsaUJBQVMsY0FBYztVQUNyQkUsUUFBUXdDLE9BQU83QztVQUNmSSxhQUFhL0IsV0FBV3pDO1VBQ3hCMEUsYUFBYWlDO1FBQ2YsQ0FBQztBQUNELGNBQU01RSxTQUFTLE1BQU1kLGtCQUFrQnZCLE1BQU1rRSxpQkFBaUI7QUFDOURqQixlQUFPWixNQUFNO0FBQ2IsZUFBTztNQUNUO0FBRUEsYUFDRSw0Q0FBQyxjQUNDLFVBQVVyQyxNQUNWLFlBQ0EsWUFBWWlILEtBQ1osUUFBZTtJQUdyQjs7OyIsCiAgIm5hbWVzIjogWyJta2RpciIsICJ3cml0ZUZpbGUiLCAidG1wZGlyIiwgImpvaW4iLCAiZXh0cmFjdENvZGVCbG9ja3MiLCAibWFya2Rvd24iLCAidG9rZW5zIiwgIm1hcmtlZCIsICJsZXhlciIsICJzdHJpcFByb21wdFhNTFRhZ3MiLCAiYmxvY2tzIiwgInRva2VuIiwgInR5cGUiLCAiY29kZVRva2VuIiwgInB1c2giLCAiY29kZSIsICJ0ZXh0IiwgImxhbmciLCAiY29sbGVjdFJlY2VudEFzc2lzdGFudFRleHRzIiwgIm1lc3NhZ2VzIiwgInRleHRzIiwgImkiLCAibGVuZ3RoIiwgIk1BWF9MT09LQkFDSyIsICJtc2ciLCAiaXNBcGlFcnJvck1lc3NhZ2UiLCAiY29udGVudCIsICJtZXNzYWdlIiwgIkFycmF5IiwgImlzQXJyYXkiLCAiZXh0cmFjdFRleHRDb250ZW50IiwgImZpbGVFeHRlbnNpb24iLCAic2FuaXRpemVkIiwgInJlcGxhY2UiLCAid3JpdGVUb0ZpbGUiLCAiZmlsZW5hbWUiLCAiZmlsZVBhdGgiLCAiQ09QWV9ESVIiLCAicmVjdXJzaXZlIiwgImNvcHlPcldyaXRlVG9GaWxlIiwgInJhdyIsICJzZXRDbGlwYm9hcmQiLCAicHJvY2VzcyIsICJzdGRvdXQiLCAid3JpdGUiLCAibGluZUNvdW50IiwgImNvdW50Q2hhckluU3RyaW5nIiwgImNoYXJDb3VudCIsICJ0cnVuY2F0ZUxpbmUiLCAibWF4TGVuIiwgImZpcnN0TGluZSIsICJzcGxpdCIsICJzdHJpbmdXaWR0aCIsICJyZXN1bHQiLCAid2lkdGgiLCAidGFyZ2V0V2lkdGgiLCAiY2hhciIsICJjaGFyV2lkdGgiLCAiQ29weVBpY2tlciIsICJ0MCIsICIkIiwgIl9jIiwgImZ1bGxUZXh0IiwgImNvZGVCbG9ja3MiLCAibWVzc2FnZUFnZSIsICJvbkRvbmUiLCAiZm9jdXNlZFJlZiIsICJ1c2VSZWYiLCAidDEiLCAidDIiLCAibGFiZWwiLCAidmFsdWUiLCAiZGVzY3JpcHRpb24iLCAidDMiLCAidDQiLCAiU3ltYm9sIiwgImZvciIsICJtYXAiLCAiX3RlbXAiLCAib3B0aW9ucyIsICJnZXRTZWxlY3Rpb25Db250ZW50IiwgInNlbGVjdGVkIiwgIlJFU1BPTlNFX0ZJTEVOQU1FIiwgImJsb2NrXzAiLCAiYmxvY2siLCAiYmxvY2tJbmRleCIsICJ0NSIsICJoYW5kbGVTZWxlY3QiLCAic2VsZWN0ZWRfMCIsICJnZXRHbG9iYWxDb25maWciLCAiY29weUZ1bGxSZXNwb25zZSIsICJzYXZlR2xvYmFsQ29uZmlnIiwgIl90ZW1wMiIsICJsb2dFdmVudCIsICJibG9ja19jb3VudCIsICJhbHdheXMiLCAibWVzc2FnZV9hZ2UiLCAic2VsZWN0ZWRfYmxvY2siLCAicmVzdWx0XzAiLCAidDYiLCAiaGFuZGxlV3JpdGUiLCAic2VsZWN0ZWRfMSIsICJjb250ZW50XzAiLCAid3JpdGVfc2hvcnRjdXQiLCAidDciLCAiZSIsICJFcnJvciIsICJoYW5kbGVLZXlEb3duIiwgImVfMCIsICJrZXkiLCAicHJldmVudERlZmF1bHQiLCAiY3VycmVudCIsICJ0OCIsICJ0OSIsICJzZWxlY3RlZF8yIiwgInQxMCIsICJkaXNwbGF5IiwgInQxMSIsICJ0MTIiLCAidDEzIiwgImMiLCAiaW5kZXgiLCAiYmxvY2tMaW5lcyIsICJ1bmRlZmluZWQiLCAiZmlsdGVyIiwgIkJvb2xlYW4iLCAiY2FsbCIsICJjb250ZXh0IiwgImFyZ3MiLCAiYWdlIiwgImFyZyIsICJ0cmltIiwgIm4iLCAiTnVtYmVyIiwgImlzSW50ZWdlciIsICJjb25maWciXQp9Cg==
