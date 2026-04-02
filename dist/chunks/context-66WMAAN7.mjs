#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  StatusIcon,
  init_StatusIcon
} from "./chunk-4YDESQGE.mjs";
import {
  init_staticRender,
  renderToAnsiString
} from "./chunk-355GKKQT.mjs";
import {
  init_operations,
  operations_exports
} from "./chunk-P42WH56V.mjs";
import {
  BASH_TOOL_NAME,
  FILE_READ_TOOL_NAME,
  GREP_TOOL_NAME,
  WEB_FETCH_TOOL_NAME,
  analyzeContextUsage,
  contextCollapse_exports,
  getMessagesAfterCompactBoundary,
  init_analyzeContext,
  init_contextCollapse,
  init_messages2 as init_messages,
  init_microCompact,
  init_prompt,
  init_prompt2,
  init_prompt5 as init_prompt3,
  init_toolName,
  microcompactMessages
} from "./chunk-PWGYNHQM.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-2ONWBUQT.mjs";
import "./chunk-SQ6KOOZS.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-Y2PD6CVC.mjs";
import "./chunk-TBOD624P.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-SY3WEZL4.mjs";
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
import "./chunk-IAEMXMG4.mjs";
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
  ThemedBox_default,
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime
} from "./chunk-KMJXN3MK.mjs";
import {
  Fragment,
  createElement,
  init_react
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  getDisplayPath,
  getSourceDisplayName,
  init_constants,
  init_file,
  init_stringUtils,
  plural
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
  formatTokens,
  init_format
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
import {
  figures_default,
  init_figures
} from "./chunk-ZAYB3WZV.mjs";
import "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import {
  feature,
  init_bun_bundle
} from "./chunk-OU3SZVVB.mjs";
import "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __esm,
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/contextSuggestions.ts
function generateContextSuggestions(data) {
  const suggestions = [];
  checkNearCapacity(data, suggestions);
  checkLargeToolResults(data, suggestions);
  checkReadResultBloat(data, suggestions);
  checkMemoryBloat(data, suggestions);
  checkAutoCompactDisabled(data, suggestions);
  suggestions.sort((a, b) => {
    if (a.severity !== b.severity) {
      return a.severity === "warning" ? -1 : 1;
    }
    return (b.savingsTokens ?? 0) - (a.savingsTokens ?? 0);
  });
  return suggestions;
}
function checkNearCapacity(data, suggestions) {
  if (data.percentage >= NEAR_CAPACITY_PERCENT) {
    suggestions.push({
      severity: "warning",
      title: `Context is ${data.percentage}% full`,
      detail: data.isAutoCompactEnabled ? "Autocompact will trigger soon, which discards older messages. Use /compact now to control what gets kept." : "Autocompact is disabled. Use /compact to free space, or enable autocompact in /config."
    });
  }
}
function checkLargeToolResults(data, suggestions) {
  if (!data.messageBreakdown) return;
  for (const tool of data.messageBreakdown.toolCallsByType) {
    const totalToolTokens = tool.callTokens + tool.resultTokens;
    const percent = totalToolTokens / data.rawMaxTokens * 100;
    if (percent < LARGE_TOOL_RESULT_PERCENT || totalToolTokens < LARGE_TOOL_RESULT_TOKENS) {
      continue;
    }
    const suggestion = getLargeToolSuggestion(
      tool.name,
      totalToolTokens,
      percent
    );
    if (suggestion) {
      suggestions.push(suggestion);
    }
  }
}
function getLargeToolSuggestion(toolName, tokens, percent) {
  const tokenStr = formatTokens(tokens);
  switch (toolName) {
    case BASH_TOOL_NAME:
      return {
        severity: "warning",
        title: `Bash results using ${tokenStr} tokens (${percent.toFixed(0)}%)`,
        detail: "Pipe output through head, tail, or grep to reduce result size. Avoid cat on large files \u2014 use Read with offset/limit instead.",
        savingsTokens: Math.floor(tokens * 0.5)
      };
    case FILE_READ_TOOL_NAME:
      return {
        severity: "info",
        title: `Read results using ${tokenStr} tokens (${percent.toFixed(0)}%)`,
        detail: "Use offset and limit parameters to read only the sections you need. Avoid re-reading entire files when you only need a few lines.",
        savingsTokens: Math.floor(tokens * 0.3)
      };
    case GREP_TOOL_NAME:
      return {
        severity: "info",
        title: `Grep results using ${tokenStr} tokens (${percent.toFixed(0)}%)`,
        detail: "Add more specific patterns or use the glob or type parameter to narrow file types. Consider Glob for file discovery instead of Grep.",
        savingsTokens: Math.floor(tokens * 0.3)
      };
    case WEB_FETCH_TOOL_NAME:
      return {
        severity: "info",
        title: `WebFetch results using ${tokenStr} tokens (${percent.toFixed(0)}%)`,
        detail: "Web page content can be very large. Consider extracting only the specific information needed.",
        savingsTokens: Math.floor(tokens * 0.4)
      };
    default:
      if (percent >= 20) {
        return {
          severity: "info",
          title: `${toolName} using ${tokenStr} tokens (${percent.toFixed(0)}%)`,
          detail: `This tool is consuming a significant portion of context.`,
          savingsTokens: Math.floor(tokens * 0.2)
        };
      }
      return null;
  }
}
function checkReadResultBloat(data, suggestions) {
  if (!data.messageBreakdown) return;
  const callsByType = data.messageBreakdown.toolCallsByType;
  const readTool = callsByType.find((t) => t.name === FILE_READ_TOOL_NAME);
  if (!readTool) return;
  const totalReadTokens = readTool.callTokens + readTool.resultTokens;
  const totalReadPercent = totalReadTokens / data.rawMaxTokens * 100;
  const readPercent = readTool.resultTokens / data.rawMaxTokens * 100;
  if (totalReadPercent >= LARGE_TOOL_RESULT_PERCENT && totalReadTokens >= LARGE_TOOL_RESULT_TOKENS) {
    return;
  }
  if (readPercent >= READ_BLOAT_PERCENT && readTool.resultTokens >= LARGE_TOOL_RESULT_TOKENS) {
    suggestions.push({
      severity: "info",
      title: `File reads using ${formatTokens(readTool.resultTokens)} tokens (${readPercent.toFixed(0)}%)`,
      detail: "If you are re-reading files, consider referencing earlier reads. Use offset/limit for large files.",
      savingsTokens: Math.floor(readTool.resultTokens * 0.3)
    });
  }
}
function checkMemoryBloat(data, suggestions) {
  const totalMemoryTokens = data.memoryFiles.reduce(
    (sum, f) => sum + f.tokens,
    0
  );
  const memoryPercent = totalMemoryTokens / data.rawMaxTokens * 100;
  if (memoryPercent >= MEMORY_HIGH_PERCENT && totalMemoryTokens >= MEMORY_HIGH_TOKENS) {
    const largestFiles = [...data.memoryFiles].sort((a, b) => b.tokens - a.tokens).slice(0, 3).map((f) => {
      const name = getDisplayPath(f.path);
      return `${name} (${formatTokens(f.tokens)})`;
    }).join(", ");
    suggestions.push({
      severity: "info",
      title: `Memory files using ${formatTokens(totalMemoryTokens)} tokens (${memoryPercent.toFixed(0)}%)`,
      detail: `Largest: ${largestFiles}. Use /memory to review and prune stale entries.`,
      savingsTokens: Math.floor(totalMemoryTokens * 0.3)
    });
  }
}
function checkAutoCompactDisabled(data, suggestions) {
  if (!data.isAutoCompactEnabled && data.percentage >= 50 && data.percentage < NEAR_CAPACITY_PERCENT) {
    suggestions.push({
      severity: "info",
      title: "Autocompact is disabled",
      detail: "Without autocompact, you will hit context limits and lose the conversation. Enable it in /config or use /compact manually."
    });
  }
}
var LARGE_TOOL_RESULT_PERCENT, LARGE_TOOL_RESULT_TOKENS, READ_BLOAT_PERCENT, NEAR_CAPACITY_PERCENT, MEMORY_HIGH_PERCENT, MEMORY_HIGH_TOKENS;
var init_contextSuggestions = __esm({
  "src/utils/contextSuggestions.ts"() {
    init_toolName();
    init_prompt2();
    init_prompt();
    init_prompt3();
    init_file();
    init_format();
    LARGE_TOOL_RESULT_PERCENT = 15;
    LARGE_TOOL_RESULT_TOKENS = 1e4;
    READ_BLOAT_PERCENT = 5;
    NEAR_CAPACITY_PERCENT = 80;
    MEMORY_HIGH_PERCENT = 5;
    MEMORY_HIGH_TOKENS = 5e3;
  }
});

// src/components/ContextSuggestions.tsx
function ContextSuggestions(t0) {
  const $ = c(5);
  const {
    suggestions
  } = t0;
  if (suggestions.length === 0) {
    return null;
  }
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Suggestions");
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== suggestions) {
    t2 = suggestions.map(_temp);
    $[1] = suggestions;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] !== t2) {
    t3 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", marginTop: 1 }, t1, t2);
    $[3] = t2;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  return t3;
}
function _temp(suggestion, i) {
  return /* @__PURE__ */ createElement(ThemedBox_default, { key: i, flexDirection: "column", marginTop: i === 0 ? 0 : 1 }, /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(StatusIcon, { status: suggestion.severity, withSpace: true }), /* @__PURE__ */ createElement(ThemedText, { bold: true }, suggestion.title), suggestion.savingsTokens ? /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " ", figures_default.arrowRight, " save ~", formatTokens(suggestion.savingsTokens)) : null), /* @__PURE__ */ createElement(ThemedBox_default, { marginLeft: 2 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, suggestion.detail)));
}
var init_ContextSuggestions = __esm({
  "src/components/ContextSuggestions.tsx"() {
    init_react_compiler_runtime();
    init_figures();
    init_react();
    init_ink();
    init_format();
    init_StatusIcon();
  }
});

// src/components/ContextVisualization.tsx
function CollapseStatus() {
  const $ = c(2);
  if (feature("CONTEXT_COLLAPSE")) {
    let t0;
    let t1;
    if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t1 = /* @__PURE__ */ Symbol.for("react.early_return_sentinel");
      bb0: {
        const {
          getStats,
          isContextCollapseEnabled
        } = (init_contextCollapse(), __toCommonJS(contextCollapse_exports));
        if (!isContextCollapseEnabled()) {
          t1 = null;
          break bb0;
        }
        const s = getStats();
        const {
          health: h
        } = s;
        const parts = [];
        if (s.collapsedSpans > 0) {
          parts.push(`${s.collapsedSpans} ${plural(s.collapsedSpans, "span")} summarized (${s.collapsedMessages} msgs)`);
        }
        if (s.stagedSpans > 0) {
          parts.push(`${s.stagedSpans} staged`);
        }
        const summary = parts.length > 0 ? parts.join(", ") : h.totalSpawns > 0 ? `${h.totalSpawns} ${plural(h.totalSpawns, "spawn")}, nothing staged yet` : "waiting for first trigger";
        let line2 = null;
        if (h.totalErrors > 0) {
          line2 = /* @__PURE__ */ createElement(ThemedText, { color: "warning" }, "Collapse errors: ", h.totalErrors, "/", h.totalSpawns, " spawns failed", h.lastError ? ` (last: ${h.lastError.slice(0, 60)})` : "");
        } else {
          if (h.emptySpawnWarningEmitted) {
            line2 = /* @__PURE__ */ createElement(ThemedText, { color: "warning" }, "Collapse idle: ", h.totalEmptySpawns, " consecutive empty runs");
          }
        }
        t0 = /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Context strategy: collapse (", summary, ")"), line2);
      }
      $[0] = t0;
      $[1] = t1;
    } else {
      t0 = $[0];
      t1 = $[1];
    }
    if (t1 !== /* @__PURE__ */ Symbol.for("react.early_return_sentinel")) {
      return t1;
    }
    return t0;
  }
  return null;
}
function groupBySource(items) {
  const groups = /* @__PURE__ */ new Map();
  for (const item of items) {
    const key = getSourceDisplayName(item.source);
    const existing = groups.get(key) || [];
    existing.push(item);
    groups.set(key, existing);
  }
  for (const [key, group] of groups.entries()) {
    groups.set(key, group.sort((a, b) => b.tokens - a.tokens));
  }
  const orderedGroups = /* @__PURE__ */ new Map();
  for (const source of SOURCE_DISPLAY_ORDER) {
    const group = groups.get(source);
    if (group) {
      orderedGroups.set(source, group);
    }
  }
  return orderedGroups;
}
function ContextVisualization(t0) {
  const $ = c(87);
  const {
    data
  } = t0;
  const {
    categories,
    totalTokens,
    rawMaxTokens,
    percentage,
    gridRows,
    model,
    memoryFiles,
    mcpTools,
    deferredBuiltinTools: t1,
    systemTools,
    systemPromptSections,
    agents,
    skills,
    messageBreakdown
  } = data;
  let T0;
  let T1;
  let t2;
  let t3;
  let t4;
  let t5;
  let t6;
  let t7;
  let t8;
  let t9;
  if ($[0] !== categories || $[1] !== gridRows || $[2] !== mcpTools || $[3] !== model || $[4] !== percentage || $[5] !== rawMaxTokens || $[6] !== systemTools || $[7] !== t1 || $[8] !== totalTokens) {
    const deferredBuiltinTools = t1 === void 0 ? [] : t1;
    const visibleCategories = categories.filter(_temp14);
    let t102;
    if ($[19] !== categories) {
      t102 = categories.some(_temp2);
      $[19] = categories;
      $[20] = t102;
    } else {
      t102 = $[20];
    }
    const hasDeferredMcpTools = t102;
    const hasDeferredBuiltinTools = deferredBuiltinTools.length > 0;
    const autocompactCategory = categories.find(_temp3);
    T1 = ThemedBox_default;
    t6 = "column";
    t7 = 1;
    if ($[21] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t8 = /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Context Usage");
      $[21] = t8;
    } else {
      t8 = $[21];
    }
    let t112;
    if ($[22] !== gridRows) {
      t112 = gridRows.map(_temp5);
      $[22] = gridRows;
      $[23] = t112;
    } else {
      t112 = $[23];
    }
    let t122;
    if ($[24] !== t112) {
      t122 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", flexShrink: 0 }, t112);
      $[24] = t112;
      $[25] = t122;
    } else {
      t122 = $[25];
    }
    let t132;
    if ($[26] !== totalTokens) {
      t132 = formatTokens(totalTokens);
      $[26] = totalTokens;
      $[27] = t132;
    } else {
      t132 = $[27];
    }
    let t142;
    if ($[28] !== rawMaxTokens) {
      t142 = formatTokens(rawMaxTokens);
      $[28] = rawMaxTokens;
      $[29] = t142;
    } else {
      t142 = $[29];
    }
    let t152;
    if ($[30] !== model || $[31] !== percentage || $[32] !== t132 || $[33] !== t142) {
      t152 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, model, " \xB7 ", t132, "/", t142, " ", "tokens (", percentage, "%)");
      $[30] = model;
      $[31] = percentage;
      $[32] = t132;
      $[33] = t142;
      $[34] = t152;
    } else {
      t152 = $[34];
    }
    let t162;
    let t172;
    let t182;
    if ($[35] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t162 = /* @__PURE__ */ createElement(CollapseStatus, null);
      t172 = /* @__PURE__ */ createElement(ThemedText, null, " ");
      t182 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, "Estimated usage by category");
      $[35] = t162;
      $[36] = t172;
      $[37] = t182;
    } else {
      t162 = $[35];
      t172 = $[36];
      t182 = $[37];
    }
    let t19;
    if ($[38] !== rawMaxTokens) {
      t19 = (cat_2, index) => {
        const tokenDisplay = formatTokens(cat_2.tokens);
        const percentDisplay = cat_2.isDeferred ? "N/A" : `${(cat_2.tokens / rawMaxTokens * 100).toFixed(1)}%`;
        const isReserved = cat_2.name === RESERVED_CATEGORY_NAME;
        const displayName = cat_2.name;
        const symbol = cat_2.isDeferred ? " " : isReserved ? "\u26DD" : "\u26C1";
        return /* @__PURE__ */ createElement(ThemedBox_default, { key: index }, /* @__PURE__ */ createElement(ThemedText, { color: cat_2.color }, symbol), /* @__PURE__ */ createElement(ThemedText, null, " ", displayName, ": "), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, tokenDisplay, " tokens (", percentDisplay, ")"));
      };
      $[38] = rawMaxTokens;
      $[39] = t19;
    } else {
      t19 = $[39];
    }
    const t20 = visibleCategories.map(t19);
    let t21;
    if ($[40] !== categories || $[41] !== rawMaxTokens) {
      t21 = (categories.find(_temp6)?.tokens ?? 0) > 0 && /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "\u26F6"), /* @__PURE__ */ createElement(ThemedText, null, " Free space: "), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, formatTokens(categories.find(_temp7)?.tokens || 0), " ", "(", ((categories.find(_temp8)?.tokens || 0) / rawMaxTokens * 100).toFixed(1), "%)"));
      $[40] = categories;
      $[41] = rawMaxTokens;
      $[42] = t21;
    } else {
      t21 = $[42];
    }
    const t22 = autocompactCategory && autocompactCategory.tokens > 0 && /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(ThemedText, { color: autocompactCategory.color }, "\u26DD"), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " ", autocompactCategory.name, ": "), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, formatTokens(autocompactCategory.tokens), " tokens (", (autocompactCategory.tokens / rawMaxTokens * 100).toFixed(1), "%)"));
    let t23;
    if ($[43] !== t152 || $[44] !== t20 || $[45] !== t21 || $[46] !== t22) {
      t23 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", gap: 0, flexShrink: 0 }, t152, t162, t172, t182, t20, t21, t22);
      $[43] = t152;
      $[44] = t20;
      $[45] = t21;
      $[46] = t22;
      $[47] = t23;
    } else {
      t23 = $[47];
    }
    if ($[48] !== t122 || $[49] !== t23) {
      t9 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "row", gap: 2 }, t122, t23);
      $[48] = t122;
      $[49] = t23;
      $[50] = t9;
    } else {
      t9 = $[50];
    }
    T0 = ThemedBox_default;
    t2 = "column";
    t3 = -1;
    if ($[51] !== hasDeferredMcpTools || $[52] !== mcpTools) {
      t4 = mcpTools.length > 0 && /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", marginTop: 1 }, /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "MCP tools"), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " ", "\xB7 /mcp", hasDeferredMcpTools ? " (loaded on-demand)" : "")), mcpTools.some(_temp9) && /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Loaded"), mcpTools.filter(_temp0).map(_temp1)), hasDeferredMcpTools && mcpTools.some(_temp10) && /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Available"), mcpTools.filter(_temp11).map(_temp12)), !hasDeferredMcpTools && mcpTools.map(_temp13));
      $[51] = hasDeferredMcpTools;
      $[52] = mcpTools;
      $[53] = t4;
    } else {
      t4 = $[53];
    }
    t5 = (systemTools && systemTools.length > 0 || hasDeferredBuiltinTools) && false;
    $[0] = categories;
    $[1] = gridRows;
    $[2] = mcpTools;
    $[3] = model;
    $[4] = percentage;
    $[5] = rawMaxTokens;
    $[6] = systemTools;
    $[7] = t1;
    $[8] = totalTokens;
    $[9] = T0;
    $[10] = T1;
    $[11] = t2;
    $[12] = t3;
    $[13] = t4;
    $[14] = t5;
    $[15] = t6;
    $[16] = t7;
    $[17] = t8;
    $[18] = t9;
  } else {
    T0 = $[9];
    T1 = $[10];
    t2 = $[11];
    t3 = $[12];
    t4 = $[13];
    t5 = $[14];
    t6 = $[15];
    t7 = $[16];
    t8 = $[17];
    t9 = $[18];
  }
  let t10;
  if ($[54] !== systemPromptSections) {
    t10 = systemPromptSections && systemPromptSections.length > 0 && false;
    $[54] = systemPromptSections;
    $[55] = t10;
  } else {
    t10 = $[55];
  }
  let t11;
  if ($[56] !== agents) {
    t11 = agents.length > 0 && /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", marginTop: 1 }, /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Custom agents"), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " \xB7 /agents")), Array.from(groupBySource(agents).entries()).map(_temp22));
    $[56] = agents;
    $[57] = t11;
  } else {
    t11 = $[57];
  }
  let t12;
  if ($[58] !== memoryFiles) {
    t12 = memoryFiles.length > 0 && /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", marginTop: 1 }, /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Memory files"), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " \xB7 /memory")), memoryFiles.map(_temp23));
    $[58] = memoryFiles;
    $[59] = t12;
  } else {
    t12 = $[59];
  }
  let t13;
  if ($[60] !== skills) {
    t13 = skills && skills.tokens > 0 && /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", marginTop: 1 }, /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(ThemedText, { bold: true }, "Skills"), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " \xB7 /skills")), Array.from(groupBySource(skills.skillFrontmatter).entries()).map(_temp25));
    $[60] = skills;
    $[61] = t13;
  } else {
    t13 = $[61];
  }
  let t14;
  if ($[62] !== messageBreakdown) {
    t14 = messageBreakdown && false;
    $[62] = messageBreakdown;
    $[63] = t14;
  } else {
    t14 = $[63];
  }
  let t15;
  if ($[64] !== T0 || $[65] !== t10 || $[66] !== t11 || $[67] !== t12 || $[68] !== t13 || $[69] !== t14 || $[70] !== t2 || $[71] !== t3 || $[72] !== t4 || $[73] !== t5) {
    t15 = /* @__PURE__ */ createElement(T0, { flexDirection: t2, marginLeft: t3 }, t4, t5, t10, t11, t12, t13, t14);
    $[64] = T0;
    $[65] = t10;
    $[66] = t11;
    $[67] = t12;
    $[68] = t13;
    $[69] = t14;
    $[70] = t2;
    $[71] = t3;
    $[72] = t4;
    $[73] = t5;
    $[74] = t15;
  } else {
    t15 = $[74];
  }
  let t16;
  if ($[75] !== data) {
    t16 = generateContextSuggestions(data);
    $[75] = data;
    $[76] = t16;
  } else {
    t16 = $[76];
  }
  let t17;
  if ($[77] !== t16) {
    t17 = /* @__PURE__ */ createElement(ContextSuggestions, { suggestions: t16 });
    $[77] = t16;
    $[78] = t17;
  } else {
    t17 = $[78];
  }
  let t18;
  if ($[79] !== T1 || $[80] !== t15 || $[81] !== t17 || $[82] !== t6 || $[83] !== t7 || $[84] !== t8 || $[85] !== t9) {
    t18 = /* @__PURE__ */ createElement(T1, { flexDirection: t6, paddingLeft: t7 }, t8, t9, t15, t17);
    $[79] = T1;
    $[80] = t15;
    $[81] = t17;
    $[82] = t6;
    $[83] = t7;
    $[84] = t8;
    $[85] = t9;
    $[86] = t18;
  } else {
    t18 = $[86];
  }
  return t18;
}
function _temp25(t0) {
  const [sourceDisplay_0, sourceSkills] = t0;
  return /* @__PURE__ */ createElement(ThemedBox_default, { key: sourceDisplay_0, flexDirection: "column", marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, sourceDisplay_0), sourceSkills.map(_temp24));
}
function _temp24(skill, i_8) {
  return /* @__PURE__ */ createElement(ThemedBox_default, { key: i_8 }, /* @__PURE__ */ createElement(ThemedText, null, "\u2514 ", skill.name, ": "), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, formatTokens(skill.tokens), " tokens"));
}
function _temp23(file, i_7) {
  return /* @__PURE__ */ createElement(ThemedBox_default, { key: i_7 }, /* @__PURE__ */ createElement(ThemedText, null, "\u2514 ", getDisplayPath(file.path), ": "), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, formatTokens(file.tokens), " tokens"));
}
function _temp22(t0) {
  const [sourceDisplay, sourceAgents] = t0;
  return /* @__PURE__ */ createElement(ThemedBox_default, { key: sourceDisplay, flexDirection: "column", marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, sourceDisplay), sourceAgents.map(_temp21));
}
function _temp21(agent, i_6) {
  return /* @__PURE__ */ createElement(ThemedBox_default, { key: i_6 }, /* @__PURE__ */ createElement(ThemedText, null, "\u2514 ", agent.agentType, ": "), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, formatTokens(agent.tokens), " tokens"));
}
function _temp13(tool_1, i_1) {
  return /* @__PURE__ */ createElement(ThemedBox_default, { key: i_1 }, /* @__PURE__ */ createElement(ThemedText, null, "\u2514 ", tool_1.name, ": "), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, formatTokens(tool_1.tokens), " tokens"));
}
function _temp12(tool_0, i_0) {
  return /* @__PURE__ */ createElement(ThemedBox_default, { key: i_0 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "\u2514 ", tool_0.name));
}
function _temp11(t_1) {
  return !t_1.isLoaded;
}
function _temp10(t_2) {
  return !t_2.isLoaded;
}
function _temp1(tool, i) {
  return /* @__PURE__ */ createElement(ThemedBox_default, { key: i }, /* @__PURE__ */ createElement(ThemedText, null, "\u2514 ", tool.name, ": "), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, formatTokens(tool.tokens), " tokens"));
}
function _temp0(t) {
  return t.isLoaded;
}
function _temp9(t_0) {
  return t_0.isLoaded;
}
function _temp8(c_0) {
  return c_0.name === "Free space";
}
function _temp7(c2) {
  return c2.name === "Free space";
}
function _temp6(c_1) {
  return c_1.name === "Free space";
}
function _temp5(row, rowIndex) {
  return /* @__PURE__ */ createElement(ThemedBox_default, { key: rowIndex, flexDirection: "row", marginLeft: -1 }, row.map(_temp4));
}
function _temp4(square, colIndex) {
  if (square.categoryName === "Free space") {
    return /* @__PURE__ */ createElement(ThemedText, { key: colIndex, dimColor: true }, "\u26F6 ");
  }
  if (square.categoryName === RESERVED_CATEGORY_NAME) {
    return /* @__PURE__ */ createElement(ThemedText, { key: colIndex, color: square.color }, "\u26DD ");
  }
  return /* @__PURE__ */ createElement(ThemedText, { key: colIndex, color: square.color }, square.squareFullness >= 0.7 ? "\u26C1 " : "\u26C0 ");
}
function _temp3(cat_1) {
  return cat_1.name === RESERVED_CATEGORY_NAME;
}
function _temp2(cat_0) {
  return cat_0.isDeferred && cat_0.name.includes("MCP");
}
function _temp14(cat) {
  return cat.tokens > 0 && cat.name !== "Free space" && cat.name !== RESERVED_CATEGORY_NAME && !cat.isDeferred;
}
var RESERVED_CATEGORY_NAME, SOURCE_DISPLAY_ORDER;
var init_ContextVisualization = __esm({
  "src/components/ContextVisualization.tsx"() {
    init_react_compiler_runtime();
    init_bun_bundle();
    init_react();
    init_ink();
    init_contextSuggestions();
    init_file();
    init_format();
    init_constants();
    init_stringUtils();
    init_ContextSuggestions();
    RESERVED_CATEGORY_NAME = "Autocompact buffer";
    SOURCE_DISPLAY_ORDER = ["Project", "User", "Managed", "Plugin", "Built-in"];
  }
});

// src/commands/context/context.tsx
function toApiView(messages) {
  let view = getMessagesAfterCompactBoundary(messages);
  if (feature("CONTEXT_COLLAPSE")) {
    const {
      projectView
    } = (init_operations(), __toCommonJS(operations_exports));
    view = projectView(view);
  }
  return view;
}
async function call(onDone, context) {
  const {
    messages,
    getAppState,
    options: {
      mainLoopModel,
      tools
    }
  } = context;
  const apiView = toApiView(messages);
  const {
    messages: compactedMessages
  } = await microcompactMessages(apiView);
  const terminalWidth = process.stdout.columns || 80;
  const appState = getAppState();
  const data = await analyzeContextUsage(
    compactedMessages,
    mainLoopModel,
    async () => appState.toolPermissionContext,
    tools,
    appState.agentDefinitions,
    terminalWidth,
    context,
    // Pass full context for system prompt calculation
    void 0,
    // mainThreadAgentDefinition
    apiView
    // Original messages for API usage extraction
  );
  const output = await renderToAnsiString(/* @__PURE__ */ createElement(ContextVisualization, { data }));
  onDone(output);
  return null;
}
var init_context = __esm({
  "src/commands/context/context.tsx"() {
    init_bun_bundle();
    init_react();
    init_ContextVisualization();
    init_microCompact();
    init_analyzeContext();
    init_messages();
    init_staticRender();
  }
});
init_context();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL2NvbnRleHRTdWdnZXN0aW9ucy50cyIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9Db250ZXh0U3VnZ2VzdGlvbnMudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL0NvbnRleHRWaXN1YWxpemF0aW9uLnRzeCIsICIuLi8uLi9zcmMvY29tbWFuZHMvY29udGV4dC9jb250ZXh0LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQkFTSF9UT09MX05BTUUgfSBmcm9tICcuLi90b29scy9CYXNoVG9vbC90b29sTmFtZS5qcydcbmltcG9ydCB7IEZJTEVfUkVBRF9UT09MX05BTUUgfSBmcm9tICcuLi90b29scy9GaWxlUmVhZFRvb2wvcHJvbXB0LmpzJ1xuaW1wb3J0IHsgR1JFUF9UT09MX05BTUUgfSBmcm9tICcuLi90b29scy9HcmVwVG9vbC9wcm9tcHQuanMnXG5pbXBvcnQgeyBXRUJfRkVUQ0hfVE9PTF9OQU1FIH0gZnJvbSAnLi4vdG9vbHMvV2ViRmV0Y2hUb29sL3Byb21wdC5qcydcbmltcG9ydCB0eXBlIHsgQ29udGV4dERhdGEgfSBmcm9tICcuL2FuYWx5emVDb250ZXh0LmpzJ1xuaW1wb3J0IHsgZ2V0RGlzcGxheVBhdGggfSBmcm9tICcuL2ZpbGUuanMnXG5pbXBvcnQgeyBmb3JtYXRUb2tlbnMgfSBmcm9tICcuL2Zvcm1hdC5qcydcblxuLy8gLS1cblxuZXhwb3J0IHR5cGUgU3VnZ2VzdGlvblNldmVyaXR5ID0gJ2luZm8nIHwgJ3dhcm5pbmcnXG5cbmV4cG9ydCB0eXBlIENvbnRleHRTdWdnZXN0aW9uID0ge1xuICBzZXZlcml0eTogU3VnZ2VzdGlvblNldmVyaXR5XG4gIHRpdGxlOiBzdHJpbmdcbiAgZGV0YWlsOiBzdHJpbmdcbiAgLyoqIEVzdGltYXRlZCB0b2tlbnMgdGhhdCBjb3VsZCBiZSBzYXZlZCAqL1xuICBzYXZpbmdzVG9rZW5zPzogbnVtYmVyXG59XG5cbi8vIFRocmVzaG9sZHMgZm9yIHRyaWdnZXJpbmcgc3VnZ2VzdGlvbnNcbmNvbnN0IExBUkdFX1RPT0xfUkVTVUxUX1BFUkNFTlQgPSAxNSAvLyB0b29sIHJlc3VsdHMgPiAxNSUgb2YgY29udGV4dFxuY29uc3QgTEFSR0VfVE9PTF9SRVNVTFRfVE9LRU5TID0gMTBfMDAwXG5jb25zdCBSRUFEX0JMT0FUX1BFUkNFTlQgPSA1IC8vIFJlYWQgcmVzdWx0cyA+IDUlIG9mIGNvbnRleHRcbmNvbnN0IE5FQVJfQ0FQQUNJVFlfUEVSQ0VOVCA9IDgwXG5jb25zdCBNRU1PUllfSElHSF9QRVJDRU5UID0gNVxuY29uc3QgTUVNT1JZX0hJR0hfVE9LRU5TID0gNV8wMDBcblxuLy8gLS1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQ29udGV4dFN1Z2dlc3Rpb25zKFxuICBkYXRhOiBDb250ZXh0RGF0YSxcbik6IENvbnRleHRTdWdnZXN0aW9uW10ge1xuICBjb25zdCBzdWdnZXN0aW9uczogQ29udGV4dFN1Z2dlc3Rpb25bXSA9IFtdXG5cbiAgY2hlY2tOZWFyQ2FwYWNpdHkoZGF0YSwgc3VnZ2VzdGlvbnMpXG4gIGNoZWNrTGFyZ2VUb29sUmVzdWx0cyhkYXRhLCBzdWdnZXN0aW9ucylcbiAgY2hlY2tSZWFkUmVzdWx0QmxvYXQoZGF0YSwgc3VnZ2VzdGlvbnMpXG4gIGNoZWNrTWVtb3J5QmxvYXQoZGF0YSwgc3VnZ2VzdGlvbnMpXG4gIGNoZWNrQXV0b0NvbXBhY3REaXNhYmxlZChkYXRhLCBzdWdnZXN0aW9ucylcblxuICAvLyBTb3J0OiB3YXJuaW5ncyBmaXJzdCwgdGhlbiBieSBzYXZpbmdzIGRlc2NlbmRpbmdcbiAgc3VnZ2VzdGlvbnMuc29ydCgoYSwgYikgPT4ge1xuICAgIGlmIChhLnNldmVyaXR5ICE9PSBiLnNldmVyaXR5KSB7XG4gICAgICByZXR1cm4gYS5zZXZlcml0eSA9PT0gJ3dhcm5pbmcnID8gLTEgOiAxXG4gICAgfVxuICAgIHJldHVybiAoYi5zYXZpbmdzVG9rZW5zID8/IDApIC0gKGEuc2F2aW5nc1Rva2VucyA/PyAwKVxuICB9KVxuXG4gIHJldHVybiBzdWdnZXN0aW9uc1xufVxuXG4vLyAtLVxuXG5mdW5jdGlvbiBjaGVja05lYXJDYXBhY2l0eShcbiAgZGF0YTogQ29udGV4dERhdGEsXG4gIHN1Z2dlc3Rpb25zOiBDb250ZXh0U3VnZ2VzdGlvbltdLFxuKTogdm9pZCB7XG4gIGlmIChkYXRhLnBlcmNlbnRhZ2UgPj0gTkVBUl9DQVBBQ0lUWV9QRVJDRU5UKSB7XG4gICAgc3VnZ2VzdGlvbnMucHVzaCh7XG4gICAgICBzZXZlcml0eTogJ3dhcm5pbmcnLFxuICAgICAgdGl0bGU6IGBDb250ZXh0IGlzICR7ZGF0YS5wZXJjZW50YWdlfSUgZnVsbGAsXG4gICAgICBkZXRhaWw6IGRhdGEuaXNBdXRvQ29tcGFjdEVuYWJsZWRcbiAgICAgICAgPyAnQXV0b2NvbXBhY3Qgd2lsbCB0cmlnZ2VyIHNvb24sIHdoaWNoIGRpc2NhcmRzIG9sZGVyIG1lc3NhZ2VzLiBVc2UgL2NvbXBhY3Qgbm93IHRvIGNvbnRyb2wgd2hhdCBnZXRzIGtlcHQuJ1xuICAgICAgICA6ICdBdXRvY29tcGFjdCBpcyBkaXNhYmxlZC4gVXNlIC9jb21wYWN0IHRvIGZyZWUgc3BhY2UsIG9yIGVuYWJsZSBhdXRvY29tcGFjdCBpbiAvY29uZmlnLicsXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0xhcmdlVG9vbFJlc3VsdHMoXG4gIGRhdGE6IENvbnRleHREYXRhLFxuICBzdWdnZXN0aW9uczogQ29udGV4dFN1Z2dlc3Rpb25bXSxcbik6IHZvaWQge1xuICBpZiAoIWRhdGEubWVzc2FnZUJyZWFrZG93bikgcmV0dXJuXG5cbiAgZm9yIChjb25zdCB0b29sIG9mIGRhdGEubWVzc2FnZUJyZWFrZG93bi50b29sQ2FsbHNCeVR5cGUpIHtcbiAgICBjb25zdCB0b3RhbFRvb2xUb2tlbnMgPSB0b29sLmNhbGxUb2tlbnMgKyB0b29sLnJlc3VsdFRva2Vuc1xuICAgIGNvbnN0IHBlcmNlbnQgPSAodG90YWxUb29sVG9rZW5zIC8gZGF0YS5yYXdNYXhUb2tlbnMpICogMTAwXG5cbiAgICBpZiAoXG4gICAgICBwZXJjZW50IDwgTEFSR0VfVE9PTF9SRVNVTFRfUEVSQ0VOVCB8fFxuICAgICAgdG90YWxUb29sVG9rZW5zIDwgTEFSR0VfVE9PTF9SRVNVTFRfVE9LRU5TXG4gICAgKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGNvbnN0IHN1Z2dlc3Rpb24gPSBnZXRMYXJnZVRvb2xTdWdnZXN0aW9uKFxuICAgICAgdG9vbC5uYW1lLFxuICAgICAgdG90YWxUb29sVG9rZW5zLFxuICAgICAgcGVyY2VudCxcbiAgICApXG4gICAgaWYgKHN1Z2dlc3Rpb24pIHtcbiAgICAgIHN1Z2dlc3Rpb25zLnB1c2goc3VnZ2VzdGlvbilcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0TGFyZ2VUb29sU3VnZ2VzdGlvbihcbiAgdG9vbE5hbWU6IHN0cmluZyxcbiAgdG9rZW5zOiBudW1iZXIsXG4gIHBlcmNlbnQ6IG51bWJlcixcbik6IENvbnRleHRTdWdnZXN0aW9uIHwgbnVsbCB7XG4gIGNvbnN0IHRva2VuU3RyID0gZm9ybWF0VG9rZW5zKHRva2VucylcblxuICBzd2l0Y2ggKHRvb2xOYW1lKSB7XG4gICAgY2FzZSBCQVNIX1RPT0xfTkFNRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNldmVyaXR5OiAnd2FybmluZycsXG4gICAgICAgIHRpdGxlOiBgQmFzaCByZXN1bHRzIHVzaW5nICR7dG9rZW5TdHJ9IHRva2VucyAoJHtwZXJjZW50LnRvRml4ZWQoMCl9JSlgLFxuICAgICAgICBkZXRhaWw6XG4gICAgICAgICAgJ1BpcGUgb3V0cHV0IHRocm91Z2ggaGVhZCwgdGFpbCwgb3IgZ3JlcCB0byByZWR1Y2UgcmVzdWx0IHNpemUuIEF2b2lkIGNhdCBvbiBsYXJnZSBmaWxlcyBcXHUyMDE0IHVzZSBSZWFkIHdpdGggb2Zmc2V0L2xpbWl0IGluc3RlYWQuJyxcbiAgICAgICAgc2F2aW5nc1Rva2VuczogTWF0aC5mbG9vcih0b2tlbnMgKiAwLjUpLFxuICAgICAgfVxuICAgIGNhc2UgRklMRV9SRUFEX1RPT0xfTkFNRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNldmVyaXR5OiAnaW5mbycsXG4gICAgICAgIHRpdGxlOiBgUmVhZCByZXN1bHRzIHVzaW5nICR7dG9rZW5TdHJ9IHRva2VucyAoJHtwZXJjZW50LnRvRml4ZWQoMCl9JSlgLFxuICAgICAgICBkZXRhaWw6XG4gICAgICAgICAgJ1VzZSBvZmZzZXQgYW5kIGxpbWl0IHBhcmFtZXRlcnMgdG8gcmVhZCBvbmx5IHRoZSBzZWN0aW9ucyB5b3UgbmVlZC4gQXZvaWQgcmUtcmVhZGluZyBlbnRpcmUgZmlsZXMgd2hlbiB5b3Ugb25seSBuZWVkIGEgZmV3IGxpbmVzLicsXG4gICAgICAgIHNhdmluZ3NUb2tlbnM6IE1hdGguZmxvb3IodG9rZW5zICogMC4zKSxcbiAgICAgIH1cbiAgICBjYXNlIEdSRVBfVE9PTF9OQU1FOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2V2ZXJpdHk6ICdpbmZvJyxcbiAgICAgICAgdGl0bGU6IGBHcmVwIHJlc3VsdHMgdXNpbmcgJHt0b2tlblN0cn0gdG9rZW5zICgke3BlcmNlbnQudG9GaXhlZCgwKX0lKWAsXG4gICAgICAgIGRldGFpbDpcbiAgICAgICAgICAnQWRkIG1vcmUgc3BlY2lmaWMgcGF0dGVybnMgb3IgdXNlIHRoZSBnbG9iIG9yIHR5cGUgcGFyYW1ldGVyIHRvIG5hcnJvdyBmaWxlIHR5cGVzLiBDb25zaWRlciBHbG9iIGZvciBmaWxlIGRpc2NvdmVyeSBpbnN0ZWFkIG9mIEdyZXAuJyxcbiAgICAgICAgc2F2aW5nc1Rva2VuczogTWF0aC5mbG9vcih0b2tlbnMgKiAwLjMpLFxuICAgICAgfVxuICAgIGNhc2UgV0VCX0ZFVENIX1RPT0xfTkFNRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNldmVyaXR5OiAnaW5mbycsXG4gICAgICAgIHRpdGxlOiBgV2ViRmV0Y2ggcmVzdWx0cyB1c2luZyAke3Rva2VuU3RyfSB0b2tlbnMgKCR7cGVyY2VudC50b0ZpeGVkKDApfSUpYCxcbiAgICAgICAgZGV0YWlsOlxuICAgICAgICAgICdXZWIgcGFnZSBjb250ZW50IGNhbiBiZSB2ZXJ5IGxhcmdlLiBDb25zaWRlciBleHRyYWN0aW5nIG9ubHkgdGhlIHNwZWNpZmljIGluZm9ybWF0aW9uIG5lZWRlZC4nLFxuICAgICAgICBzYXZpbmdzVG9rZW5zOiBNYXRoLmZsb29yKHRva2VucyAqIDAuNCksXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIGlmIChwZXJjZW50ID49IDIwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc2V2ZXJpdHk6ICdpbmZvJyxcbiAgICAgICAgICB0aXRsZTogYCR7dG9vbE5hbWV9IHVzaW5nICR7dG9rZW5TdHJ9IHRva2VucyAoJHtwZXJjZW50LnRvRml4ZWQoMCl9JSlgLFxuICAgICAgICAgIGRldGFpbDogYFRoaXMgdG9vbCBpcyBjb25zdW1pbmcgYSBzaWduaWZpY2FudCBwb3J0aW9uIG9mIGNvbnRleHQuYCxcbiAgICAgICAgICBzYXZpbmdzVG9rZW5zOiBNYXRoLmZsb29yKHRva2VucyAqIDAuMiksXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tSZWFkUmVzdWx0QmxvYXQoXG4gIGRhdGE6IENvbnRleHREYXRhLFxuICBzdWdnZXN0aW9uczogQ29udGV4dFN1Z2dlc3Rpb25bXSxcbik6IHZvaWQge1xuICBpZiAoIWRhdGEubWVzc2FnZUJyZWFrZG93bikgcmV0dXJuXG5cbiAgY29uc3QgY2FsbHNCeVR5cGUgPSBkYXRhLm1lc3NhZ2VCcmVha2Rvd24udG9vbENhbGxzQnlUeXBlXG4gIGNvbnN0IHJlYWRUb29sID0gY2FsbHNCeVR5cGUuZmluZCh0ID0+IHQubmFtZSA9PT0gRklMRV9SRUFEX1RPT0xfTkFNRSlcbiAgaWYgKCFyZWFkVG9vbCkgcmV0dXJuXG5cbiAgY29uc3QgdG90YWxSZWFkVG9rZW5zID0gcmVhZFRvb2wuY2FsbFRva2VucyArIHJlYWRUb29sLnJlc3VsdFRva2Vuc1xuICBjb25zdCB0b3RhbFJlYWRQZXJjZW50ID0gKHRvdGFsUmVhZFRva2VucyAvIGRhdGEucmF3TWF4VG9rZW5zKSAqIDEwMFxuICBjb25zdCByZWFkUGVyY2VudCA9IChyZWFkVG9vbC5yZXN1bHRUb2tlbnMgLyBkYXRhLnJhd01heFRva2VucykgKiAxMDBcblxuICAvLyBTa2lwIGlmIGFscmVhZHkgY292ZXJlZCBieSBjaGVja0xhcmdlVG9vbFJlc3VsdHMgKD49IDE1JSBiYW5kKVxuICBpZiAoXG4gICAgdG90YWxSZWFkUGVyY2VudCA+PSBMQVJHRV9UT09MX1JFU1VMVF9QRVJDRU5UICYmXG4gICAgdG90YWxSZWFkVG9rZW5zID49IExBUkdFX1RPT0xfUkVTVUxUX1RPS0VOU1xuICApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChcbiAgICByZWFkUGVyY2VudCA+PSBSRUFEX0JMT0FUX1BFUkNFTlQgJiZcbiAgICByZWFkVG9vbC5yZXN1bHRUb2tlbnMgPj0gTEFSR0VfVE9PTF9SRVNVTFRfVE9LRU5TXG4gICkge1xuICAgIHN1Z2dlc3Rpb25zLnB1c2goe1xuICAgICAgc2V2ZXJpdHk6ICdpbmZvJyxcbiAgICAgIHRpdGxlOiBgRmlsZSByZWFkcyB1c2luZyAke2Zvcm1hdFRva2VucyhyZWFkVG9vbC5yZXN1bHRUb2tlbnMpfSB0b2tlbnMgKCR7cmVhZFBlcmNlbnQudG9GaXhlZCgwKX0lKWAsXG4gICAgICBkZXRhaWw6XG4gICAgICAgICdJZiB5b3UgYXJlIHJlLXJlYWRpbmcgZmlsZXMsIGNvbnNpZGVyIHJlZmVyZW5jaW5nIGVhcmxpZXIgcmVhZHMuIFVzZSBvZmZzZXQvbGltaXQgZm9yIGxhcmdlIGZpbGVzLicsXG4gICAgICBzYXZpbmdzVG9rZW5zOiBNYXRoLmZsb29yKHJlYWRUb29sLnJlc3VsdFRva2VucyAqIDAuMyksXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja01lbW9yeUJsb2F0KFxuICBkYXRhOiBDb250ZXh0RGF0YSxcbiAgc3VnZ2VzdGlvbnM6IENvbnRleHRTdWdnZXN0aW9uW10sXG4pOiB2b2lkIHtcbiAgY29uc3QgdG90YWxNZW1vcnlUb2tlbnMgPSBkYXRhLm1lbW9yeUZpbGVzLnJlZHVjZShcbiAgICAoc3VtLCBmKSA9PiBzdW0gKyBmLnRva2VucyxcbiAgICAwLFxuICApXG4gIGNvbnN0IG1lbW9yeVBlcmNlbnQgPSAodG90YWxNZW1vcnlUb2tlbnMgLyBkYXRhLnJhd01heFRva2VucykgKiAxMDBcblxuICBpZiAoXG4gICAgbWVtb3J5UGVyY2VudCA+PSBNRU1PUllfSElHSF9QRVJDRU5UICYmXG4gICAgdG90YWxNZW1vcnlUb2tlbnMgPj0gTUVNT1JZX0hJR0hfVE9LRU5TXG4gICkge1xuICAgIGNvbnN0IGxhcmdlc3RGaWxlcyA9IFsuLi5kYXRhLm1lbW9yeUZpbGVzXVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIudG9rZW5zIC0gYS50b2tlbnMpXG4gICAgICAuc2xpY2UoMCwgMylcbiAgICAgIC5tYXAoZiA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBnZXREaXNwbGF5UGF0aChmLnBhdGgpXG4gICAgICAgIHJldHVybiBgJHtuYW1lfSAoJHtmb3JtYXRUb2tlbnMoZi50b2tlbnMpfSlgXG4gICAgICB9KVxuICAgICAgLmpvaW4oJywgJylcblxuICAgIHN1Z2dlc3Rpb25zLnB1c2goe1xuICAgICAgc2V2ZXJpdHk6ICdpbmZvJyxcbiAgICAgIHRpdGxlOiBgTWVtb3J5IGZpbGVzIHVzaW5nICR7Zm9ybWF0VG9rZW5zKHRvdGFsTWVtb3J5VG9rZW5zKX0gdG9rZW5zICgke21lbW9yeVBlcmNlbnQudG9GaXhlZCgwKX0lKWAsXG4gICAgICBkZXRhaWw6IGBMYXJnZXN0OiAke2xhcmdlc3RGaWxlc30uIFVzZSAvbWVtb3J5IHRvIHJldmlldyBhbmQgcHJ1bmUgc3RhbGUgZW50cmllcy5gLFxuICAgICAgc2F2aW5nc1Rva2VuczogTWF0aC5mbG9vcih0b3RhbE1lbW9yeVRva2VucyAqIDAuMyksXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0F1dG9Db21wYWN0RGlzYWJsZWQoXG4gIGRhdGE6IENvbnRleHREYXRhLFxuICBzdWdnZXN0aW9uczogQ29udGV4dFN1Z2dlc3Rpb25bXSxcbik6IHZvaWQge1xuICBpZiAoXG4gICAgIWRhdGEuaXNBdXRvQ29tcGFjdEVuYWJsZWQgJiZcbiAgICBkYXRhLnBlcmNlbnRhZ2UgPj0gNTAgJiZcbiAgICBkYXRhLnBlcmNlbnRhZ2UgPCBORUFSX0NBUEFDSVRZX1BFUkNFTlRcbiAgKSB7XG4gICAgc3VnZ2VzdGlvbnMucHVzaCh7XG4gICAgICBzZXZlcml0eTogJ2luZm8nLFxuICAgICAgdGl0bGU6ICdBdXRvY29tcGFjdCBpcyBkaXNhYmxlZCcsXG4gICAgICBkZXRhaWw6XG4gICAgICAgICdXaXRob3V0IGF1dG9jb21wYWN0LCB5b3Ugd2lsbCBoaXQgY29udGV4dCBsaW1pdHMgYW5kIGxvc2UgdGhlIGNvbnZlcnNhdGlvbi4gRW5hYmxlIGl0IGluIC9jb25maWcgb3IgdXNlIC9jb21wYWN0IG1hbnVhbGx5LicsXG4gICAgfSlcbiAgfVxufVxuIiwgImltcG9ydCBmaWd1cmVzIGZyb20gJ2ZpZ3VyZXMnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uL2luay5qcydcbmltcG9ydCB0eXBlIHsgQ29udGV4dFN1Z2dlc3Rpb24gfSBmcm9tICcuLi91dGlscy9jb250ZXh0U3VnZ2VzdGlvbnMuanMnXG5pbXBvcnQgeyBmb3JtYXRUb2tlbnMgfSBmcm9tICcuLi91dGlscy9mb3JtYXQuanMnXG5pbXBvcnQgeyBTdGF0dXNJY29uIH0gZnJvbSAnLi9kZXNpZ24tc3lzdGVtL1N0YXR1c0ljb24uanMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIHN1Z2dlc3Rpb25zOiBDb250ZXh0U3VnZ2VzdGlvbltdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDb250ZXh0U3VnZ2VzdGlvbnMoeyBzdWdnZXN0aW9ucyB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGlmIChzdWdnZXN0aW9ucy5sZW5ndGggPT09IDApIHJldHVybiBudWxsXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBtYXJnaW5Ub3A9ezF9PlxuICAgICAgPFRleHQgYm9sZD5TdWdnZXN0aW9uczwvVGV4dD5cbiAgICAgIHtzdWdnZXN0aW9ucy5tYXAoKHN1Z2dlc3Rpb24sIGkpID0+IChcbiAgICAgICAgPEJveCBrZXk9e2l9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBtYXJnaW5Ub3A9e2kgPT09IDAgPyAwIDogMX0+XG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxTdGF0dXNJY29uIHN0YXR1cz17c3VnZ2VzdGlvbi5zZXZlcml0eX0gd2l0aFNwYWNlIC8+XG4gICAgICAgICAgICA8VGV4dCBib2xkPntzdWdnZXN0aW9uLnRpdGxlfTwvVGV4dD5cbiAgICAgICAgICAgIHtzdWdnZXN0aW9uLnNhdmluZ3NUb2tlbnMgPyAoXG4gICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAge2ZpZ3VyZXMuYXJyb3dSaWdodH0gc2F2ZSB+XG4gICAgICAgICAgICAgICAge2Zvcm1hdFRva2VucyhzdWdnZXN0aW9uLnNhdmluZ3NUb2tlbnMpfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94IG1hcmdpbkxlZnQ9ezJ9PlxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+e3N1Z2dlc3Rpb24uZGV0YWlsfTwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApKX1cbiAgICA8L0JveD5cbiAgKVxufVxuIiwgImltcG9ydCB7IGZlYXR1cmUgfSBmcm9tICdidW46YnVuZGxlJ1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi9pbmsuanMnXG5pbXBvcnQgdHlwZSB7IENvbnRleHREYXRhIH0gZnJvbSAnLi4vdXRpbHMvYW5hbHl6ZUNvbnRleHQuanMnXG5pbXBvcnQgeyBnZW5lcmF0ZUNvbnRleHRTdWdnZXN0aW9ucyB9IGZyb20gJy4uL3V0aWxzL2NvbnRleHRTdWdnZXN0aW9ucy5qcydcbmltcG9ydCB7IGdldERpc3BsYXlQYXRoIH0gZnJvbSAnLi4vdXRpbHMvZmlsZS5qcydcbmltcG9ydCB7IGZvcm1hdFRva2VucyB9IGZyb20gJy4uL3V0aWxzL2Zvcm1hdC5qcydcbmltcG9ydCB7XG4gIGdldFNvdXJjZURpc3BsYXlOYW1lLFxuICB0eXBlIFNldHRpbmdTb3VyY2UsXG59IGZyb20gJy4uL3V0aWxzL3NldHRpbmdzL2NvbnN0YW50cy5qcydcbmltcG9ydCB7IHBsdXJhbCB9IGZyb20gJy4uL3V0aWxzL3N0cmluZ1V0aWxzLmpzJ1xuaW1wb3J0IHsgQ29udGV4dFN1Z2dlc3Rpb25zIH0gZnJvbSAnLi9Db250ZXh0U3VnZ2VzdGlvbnMuanMnXG5cbmNvbnN0IFJFU0VSVkVEX0NBVEVHT1JZX05BTUUgPSAnQXV0b2NvbXBhY3QgYnVmZmVyJ1xuXG4vKipcbiAqIE9uZS1saW5lciBmb3IgdGhlIGxlZ2VuZCBoZWFkZXIgc2hvd2luZyB3aGF0IGNvbnRleHQtY29sbGFwc2UgaGFzIGRvbmUuXG4gKiBSZXR1cm5zIG51bGwgd2hlbiBub3RoaW5nJ3Mgc3VtbWFyaXplZC9zdGFnZWQgc28gd2UgZG9uJ3QgYWRkIHZpc3VhbFxuICogbm9pc2UgaW4gdGhlIGNvbW1vbiBjYXNlLiBUaGlzIGlzIHRoZSBvbmUgcGxhY2UgYSB1c2VyIGNhbiBzZWUgdGhhdFxuICogdGhlaXIgY29udGV4dCB3YXMgcmV3cml0dGVuIOKAlCB0aGUgPGNvbGxhcHNlZD4gcGxhY2Vob2xkZXJzIGFyZSBpc01ldGFcbiAqIGFuZCBkb24ndCBhcHBlYXIgaW4gdGhlIGNvbnZlcnNhdGlvbiB2aWV3LlxuICovXG5mdW5jdGlvbiBDb2xsYXBzZVN0YXR1cygpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBpZiAoZmVhdHVyZSgnQ09OVEVYVF9DT0xMQVBTRScpKSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyAqL1xuICAgIGNvbnN0IHsgZ2V0U3RhdHMsIGlzQ29udGV4dENvbGxhcHNlRW5hYmxlZCB9ID1cbiAgICAgIHJlcXVpcmUoJy4uL3NlcnZpY2VzL2NvbnRleHRDb2xsYXBzZS9pbmRleC5qcycpIGFzIHR5cGVvZiBpbXBvcnQoJy4uL3NlcnZpY2VzL2NvbnRleHRDb2xsYXBzZS9pbmRleC5qcycpXG4gICAgLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG4gICAgaWYgKCFpc0NvbnRleHRDb2xsYXBzZUVuYWJsZWQoKSkgcmV0dXJuIG51bGxcblxuICAgIGNvbnN0IHMgPSBnZXRTdGF0cygpXG4gICAgY29uc3QgeyBoZWFsdGg6IGggfSA9IHNcblxuICAgIGNvbnN0IHBhcnRzOiBzdHJpbmdbXSA9IFtdXG4gICAgaWYgKHMuY29sbGFwc2VkU3BhbnMgPiAwKSB7XG4gICAgICBwYXJ0cy5wdXNoKFxuICAgICAgICBgJHtzLmNvbGxhcHNlZFNwYW5zfSAke3BsdXJhbChzLmNvbGxhcHNlZFNwYW5zLCAnc3BhbicpfSBzdW1tYXJpemVkICgke3MuY29sbGFwc2VkTWVzc2FnZXN9IG1zZ3MpYCxcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHMuc3RhZ2VkU3BhbnMgPiAwKSBwYXJ0cy5wdXNoKGAke3Muc3RhZ2VkU3BhbnN9IHN0YWdlZGApXG4gICAgY29uc3Qgc3VtbWFyeSA9XG4gICAgICBwYXJ0cy5sZW5ndGggPiAwXG4gICAgICAgID8gcGFydHMuam9pbignLCAnKVxuICAgICAgICA6IGgudG90YWxTcGF3bnMgPiAwXG4gICAgICAgICAgPyBgJHtoLnRvdGFsU3Bhd25zfSAke3BsdXJhbChoLnRvdGFsU3Bhd25zLCAnc3Bhd24nKX0sIG5vdGhpbmcgc3RhZ2VkIHlldGBcbiAgICAgICAgICA6ICd3YWl0aW5nIGZvciBmaXJzdCB0cmlnZ2VyJ1xuXG4gICAgbGV0IGxpbmUyOiBSZWFjdC5SZWFjdE5vZGUgPSBudWxsXG4gICAgaWYgKGgudG90YWxFcnJvcnMgPiAwKSB7XG4gICAgICBsaW5lMiA9IChcbiAgICAgICAgPFRleHQgY29sb3I9XCJ3YXJuaW5nXCI+XG4gICAgICAgICAgQ29sbGFwc2UgZXJyb3JzOiB7aC50b3RhbEVycm9yc30ve2gudG90YWxTcGF3bnN9IHNwYXducyBmYWlsZWRcbiAgICAgICAgICB7aC5sYXN0RXJyb3IgPyBgIChsYXN0OiAke2gubGFzdEVycm9yLnNsaWNlKDAsIDYwKX0pYCA6ICcnfVxuICAgICAgICA8L1RleHQ+XG4gICAgICApXG4gICAgfSBlbHNlIGlmIChoLmVtcHR5U3Bhd25XYXJuaW5nRW1pdHRlZCkge1xuICAgICAgbGluZTIgPSAoXG4gICAgICAgIDxUZXh0IGNvbG9yPVwid2FybmluZ1wiPlxuICAgICAgICAgIENvbGxhcHNlIGlkbGU6IHtoLnRvdGFsRW1wdHlTcGF3bnN9IGNvbnNlY3V0aXZlIGVtcHR5IHJ1bnNcbiAgICAgICAgPC9UZXh0PlxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5Db250ZXh0IHN0cmF0ZWd5OiBjb2xsYXBzZSAoe3N1bW1hcnl9KTwvVGV4dD5cbiAgICAgICAge2xpbmUyfVxuICAgICAgPC8+XG4gICAgKVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbi8vIE9yZGVyIGZvciBkaXNwbGF5aW5nIHNvdXJjZSBncm91cHM6IFByb2plY3QgPiBVc2VyID4gTWFuYWdlZCA+IFBsdWdpbiA+IEJ1aWx0LWluXG5jb25zdCBTT1VSQ0VfRElTUExBWV9PUkRFUiA9IFtcbiAgJ1Byb2plY3QnLFxuICAnVXNlcicsXG4gICdNYW5hZ2VkJyxcbiAgJ1BsdWdpbicsXG4gICdCdWlsdC1pbicsXG5dXG5cbi8qKiBHcm91cCBpdGVtcyBieSBzb3VyY2UgdHlwZSBmb3IgZGlzcGxheSwgc29ydGVkIGJ5IHRva2VucyBkZXNjZW5kaW5nIHdpdGhpbiBlYWNoIGdyb3VwICovXG5mdW5jdGlvbiBncm91cEJ5U291cmNlPFxuICBUIGV4dGVuZHMgeyBzb3VyY2U6IFNldHRpbmdTb3VyY2UgfCAncGx1Z2luJyB8ICdidWlsdC1pbic7IHRva2VuczogbnVtYmVyIH0sXG4+KGl0ZW1zOiBUW10pOiBNYXA8c3RyaW5nLCBUW10+IHtcbiAgY29uc3QgZ3JvdXBzID0gbmV3IE1hcDxzdHJpbmcsIFRbXT4oKVxuICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICBjb25zdCBrZXkgPSBnZXRTb3VyY2VEaXNwbGF5TmFtZShpdGVtLnNvdXJjZSlcbiAgICBjb25zdCBleGlzdGluZyA9IGdyb3Vwcy5nZXQoa2V5KSB8fCBbXVxuICAgIGV4aXN0aW5nLnB1c2goaXRlbSlcbiAgICBncm91cHMuc2V0KGtleSwgZXhpc3RpbmcpXG4gIH1cbiAgLy8gU29ydCBlYWNoIGdyb3VwIGJ5IHRva2VucyBkZXNjZW5kaW5nXG4gIGZvciAoY29uc3QgW2tleSwgZ3JvdXBdIG9mIGdyb3Vwcy5lbnRyaWVzKCkpIHtcbiAgICBncm91cHMuc2V0KFxuICAgICAga2V5LFxuICAgICAgZ3JvdXAuc29ydCgoYSwgYikgPT4gYi50b2tlbnMgLSBhLnRva2VucyksXG4gICAgKVxuICB9XG4gIC8vIFJldHVybiBncm91cHMgaW4gY29uc2lzdGVudCBvcmRlclxuICBjb25zdCBvcmRlcmVkR3JvdXBzID0gbmV3IE1hcDxzdHJpbmcsIFRbXT4oKVxuICBmb3IgKGNvbnN0IHNvdXJjZSBvZiBTT1VSQ0VfRElTUExBWV9PUkRFUikge1xuICAgIGNvbnN0IGdyb3VwID0gZ3JvdXBzLmdldChzb3VyY2UpXG4gICAgaWYgKGdyb3VwKSB7XG4gICAgICBvcmRlcmVkR3JvdXBzLnNldChzb3VyY2UsIGdyb3VwKVxuICAgIH1cbiAgfVxuICByZXR1cm4gb3JkZXJlZEdyb3Vwc1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBkYXRhOiBDb250ZXh0RGF0YVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ29udGV4dFZpc3VhbGl6YXRpb24oeyBkYXRhIH06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3Qge1xuICAgIGNhdGVnb3JpZXMsXG4gICAgdG90YWxUb2tlbnMsXG4gICAgcmF3TWF4VG9rZW5zLFxuICAgIHBlcmNlbnRhZ2UsXG4gICAgZ3JpZFJvd3MsXG4gICAgbW9kZWwsXG4gICAgbWVtb3J5RmlsZXMsXG4gICAgbWNwVG9vbHMsXG4gICAgZGVmZXJyZWRCdWlsdGluVG9vbHMgPSBbXSxcbiAgICBzeXN0ZW1Ub29scyxcbiAgICBzeXN0ZW1Qcm9tcHRTZWN0aW9ucyxcbiAgICBhZ2VudHMsXG4gICAgc2tpbGxzLFxuICAgIG1lc3NhZ2VCcmVha2Rvd24sXG4gIH0gPSBkYXRhXG5cbiAgLy8gRmlsdGVyIG91dCBjYXRlZ29yaWVzIHdpdGggMCB0b2tlbnMgZm9yIHRoZSBsZWdlbmQsIGFuZCBleGNsdWRlIEZyZWUgc3BhY2UsIEF1dG9jb21wYWN0IGJ1ZmZlciwgYW5kIGRlZmVycmVkXG4gIGNvbnN0IHZpc2libGVDYXRlZ29yaWVzID0gY2F0ZWdvcmllcy5maWx0ZXIoXG4gICAgY2F0ID0+XG4gICAgICBjYXQudG9rZW5zID4gMCAmJlxuICAgICAgY2F0Lm5hbWUgIT09ICdGcmVlIHNwYWNlJyAmJlxuICAgICAgY2F0Lm5hbWUgIT09IFJFU0VSVkVEX0NBVEVHT1JZX05BTUUgJiZcbiAgICAgICFjYXQuaXNEZWZlcnJlZCxcbiAgKVxuICAvLyBDaGVjayBpZiBNQ1AgdG9vbHMgYXJlIGRlZmVycmVkIChsb2FkZWQgb24tZGVtYW5kIHZpYSB0b29sIHNlYXJjaClcbiAgY29uc3QgaGFzRGVmZXJyZWRNY3BUb29scyA9IGNhdGVnb3JpZXMuc29tZShcbiAgICBjYXQgPT4gY2F0LmlzRGVmZXJyZWQgJiYgY2F0Lm5hbWUuaW5jbHVkZXMoJ01DUCcpLFxuICApXG4gIC8vIENoZWNrIGlmIGJ1aWx0aW4gdG9vbHMgYXJlIGRlZmVycmVkXG4gIGNvbnN0IGhhc0RlZmVycmVkQnVpbHRpblRvb2xzID0gZGVmZXJyZWRCdWlsdGluVG9vbHMubGVuZ3RoID4gMFxuICBjb25zdCBhdXRvY29tcGFjdENhdGVnb3J5ID0gY2F0ZWdvcmllcy5maW5kKFxuICAgIGNhdCA9PiBjYXQubmFtZSA9PT0gUkVTRVJWRURfQ0FURUdPUllfTkFNRSxcbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgcGFkZGluZ0xlZnQ9ezF9PlxuICAgICAgPFRleHQgYm9sZD5Db250ZXh0IFVzYWdlPC9UZXh0PlxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwicm93XCIgZ2FwPXsyfT5cbiAgICAgICAgey8qIEZpeGVkIHNpemUgZ3JpZCAqL31cbiAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZmxleFNocmluaz17MH0+XG4gICAgICAgICAge2dyaWRSb3dzLm1hcCgocm93LCByb3dJbmRleCkgPT4gKFxuICAgICAgICAgICAgPEJveCBrZXk9e3Jvd0luZGV4fSBmbGV4RGlyZWN0aW9uPVwicm93XCIgbWFyZ2luTGVmdD17LTF9PlxuICAgICAgICAgICAgICB7cm93Lm1hcCgoc3F1YXJlLCBjb2xJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzcXVhcmUuY2F0ZWdvcnlOYW1lID09PSAnRnJlZSBzcGFjZScpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGtleT17Y29sSW5kZXh9IGRpbUNvbG9yPlxuICAgICAgICAgICAgICAgICAgICAgIHsn4pu2ICd9XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZS5jYXRlZ29yeU5hbWUgPT09IFJFU0VSVkVEX0NBVEVHT1JZX05BTUUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGtleT17Y29sSW5kZXh9IGNvbG9yPXtzcXVhcmUuY29sb3J9PlxuICAgICAgICAgICAgICAgICAgICAgIHsn4pudICd9XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxUZXh0IGtleT17Y29sSW5kZXh9IGNvbG9yPXtzcXVhcmUuY29sb3J9PlxuICAgICAgICAgICAgICAgICAgICB7c3F1YXJlLnNxdWFyZUZ1bGxuZXNzID49IDAuNyA/ICfim4EgJyA6ICfim4AgJ31cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIHsvKiBMZWdlbmQgdG8gdGhlIHJpZ2h0ICovfVxuICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9ezB9IGZsZXhTaHJpbms9ezB9PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAge21vZGVsfSDCtyB7Zm9ybWF0VG9rZW5zKHRvdGFsVG9rZW5zKX0ve2Zvcm1hdFRva2VucyhyYXdNYXhUb2tlbnMpfXsnICd9XG4gICAgICAgICAgICB0b2tlbnMgKHtwZXJjZW50YWdlfSUpXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxDb2xsYXBzZVN0YXR1cyAvPlxuICAgICAgICAgIDxUZXh0PiA8L1RleHQ+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3IgaXRhbGljPlxuICAgICAgICAgICAgRXN0aW1hdGVkIHVzYWdlIGJ5IGNhdGVnb3J5XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIHt2aXNpYmxlQ2F0ZWdvcmllcy5tYXAoKGNhdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuRGlzcGxheSA9IGZvcm1hdFRva2VucyhjYXQudG9rZW5zKVxuICAgICAgICAgICAgLy8gU2hvdyBcIk4vQVwiIGZvciBkZWZlcnJlZCBjYXRlZ29yaWVzIHNpbmNlIHRoZXkgZG9uJ3QgY291bnQgdG93YXJkIGNvbnRleHRcbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnREaXNwbGF5ID0gY2F0LmlzRGVmZXJyZWRcbiAgICAgICAgICAgICAgPyAnTi9BJ1xuICAgICAgICAgICAgICA6IGAkeygoY2F0LnRva2VucyAvIHJhd01heFRva2VucykgKiAxMDApLnRvRml4ZWQoMSl9JWBcbiAgICAgICAgICAgIGNvbnN0IGlzUmVzZXJ2ZWQgPSBjYXQubmFtZSA9PT0gUkVTRVJWRURfQ0FURUdPUllfTkFNRVxuICAgICAgICAgICAgY29uc3QgZGlzcGxheU5hbWUgPSBjYXQubmFtZVxuICAgICAgICAgICAgLy8gRGVmZXJyZWQgY2F0ZWdvcmllcyBkb24ndCBhcHBlYXIgaW4gZ3JpZCwgc28gc2hvdyBibGFuayBpbnN0ZWFkIG9mIHN5bWJvbFxuICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gY2F0LmlzRGVmZXJyZWQgPyAnICcgOiBpc1Jlc2VydmVkID8gJ+KbnScgOiAn4puBJ1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8Qm94IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPXtjYXQuY29sb3J9PntzeW1ib2x9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDxUZXh0PiB7ZGlzcGxheU5hbWV9OiA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgICAgICB7dG9rZW5EaXNwbGF5fSB0b2tlbnMgKHtwZXJjZW50RGlzcGxheX0pXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgICB7KGNhdGVnb3JpZXMuZmluZChjID0+IGMubmFtZSA9PT0gJ0ZyZWUgc3BhY2UnKT8udG9rZW5zID8/IDApID4gMCAmJiAoXG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj7im7Y8L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0PiBGcmVlIHNwYWNlOiA8L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICAgIHtmb3JtYXRUb2tlbnMoXG4gICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzLmZpbmQoYyA9PiBjLm5hbWUgPT09ICdGcmVlIHNwYWNlJyk/LnRva2VucyB8fCAwLFxuICAgICAgICAgICAgICAgICl9eycgJ31cbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgeyhcbiAgICAgICAgICAgICAgICAgICgoY2F0ZWdvcmllcy5maW5kKGMgPT4gYy5uYW1lID09PSAnRnJlZSBzcGFjZScpPy50b2tlbnMgfHxcbiAgICAgICAgICAgICAgICAgICAgMCkgL1xuICAgICAgICAgICAgICAgICAgICByYXdNYXhUb2tlbnMpICpcbiAgICAgICAgICAgICAgICAgIDEwMFxuICAgICAgICAgICAgICAgICkudG9GaXhlZCgxKX1cbiAgICAgICAgICAgICAgICAlKVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHthdXRvY29tcGFjdENhdGVnb3J5ICYmIGF1dG9jb21wYWN0Q2F0ZWdvcnkudG9rZW5zID4gMCAmJiAoXG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8VGV4dCBjb2xvcj17YXV0b2NvbXBhY3RDYXRlZ29yeS5jb2xvcn0+4pudPC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj4ge2F1dG9jb21wYWN0Q2F0ZWdvcnkubmFtZX06IDwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgICAge2Zvcm1hdFRva2VucyhhdXRvY29tcGFjdENhdGVnb3J5LnRva2Vucyl9IHRva2VucyAoXG4gICAgICAgICAgICAgICAgeygoYXV0b2NvbXBhY3RDYXRlZ29yeS50b2tlbnMgLyByYXdNYXhUb2tlbnMpICogMTAwKS50b0ZpeGVkKDEpfVxuICAgICAgICAgICAgICAgICUpXG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpbkxlZnQ9ey0xfT5cbiAgICAgICAge21jcFRvb2xzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8VGV4dCBib2xkPk1DUCB0b29sczwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICDCtyAvbWNwe2hhc0RlZmVycmVkTWNwVG9vbHMgPyAnIChsb2FkZWQgb24tZGVtYW5kKScgOiAnJ31cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICB7LyogU2hvdyBsb2FkZWQgdG9vbHMgZmlyc3QgKi99XG4gICAgICAgICAgICB7bWNwVG9vbHMuc29tZSh0ID0+IHQuaXNMb2FkZWQpICYmIChcbiAgICAgICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5Mb2FkZWQ8L1RleHQ+XG4gICAgICAgICAgICAgICAge21jcFRvb2xzXG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKHQgPT4gdC5pc0xvYWRlZClcbiAgICAgICAgICAgICAgICAgIC5tYXAoKHRvb2wsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEJveCBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PuKUlCB7dG9vbC5uYW1lfTogPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPntmb3JtYXRUb2tlbnModG9vbC50b2tlbnMpfSB0b2tlbnM8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHsvKiBTaG93IGF2YWlsYWJsZSAoZGVmZXJyZWQpIHRvb2xzICovfVxuICAgICAgICAgICAge2hhc0RlZmVycmVkTWNwVG9vbHMgJiYgbWNwVG9vbHMuc29tZSh0ID0+ICF0LmlzTG9hZGVkKSAmJiAoXG4gICAgICAgICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+QXZhaWxhYmxlPC9UZXh0PlxuICAgICAgICAgICAgICAgIHttY3BUb29sc1xuICAgICAgICAgICAgICAgICAgLmZpbHRlcih0ID0+ICF0LmlzTG9hZGVkKVxuICAgICAgICAgICAgICAgICAgLm1hcCgodG9vbCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Qm94IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+4pSUIHt0b29sLm5hbWV9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7LyogU2hvdyBhbGwgdG9vbHMgbm9ybWFsbHkgd2hlbiBub3QgZGVmZXJyZWQgKi99XG4gICAgICAgICAgICB7IWhhc0RlZmVycmVkTWNwVG9vbHMgJiZcbiAgICAgICAgICAgICAgbWNwVG9vbHMubWFwKCh0b29sLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPEJveCBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgPFRleHQ+4pSUIHt0b29sLm5hbWV9OiA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj57Zm9ybWF0VG9rZW5zKHRvb2wudG9rZW5zKX0gdG9rZW5zPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogU2hvdyBidWlsdGluIHRvb2xzOiBhbHdheXMtbG9hZGVkICsgZGVmZXJyZWQgKGFudC1vbmx5KSAqL31cbiAgICAgICAgeygoc3lzdGVtVG9vbHMgJiYgc3lzdGVtVG9vbHMubGVuZ3RoID4gMCkgfHwgaGFzRGVmZXJyZWRCdWlsdGluVG9vbHMpICYmXG4gICAgICAgICAgXCJleHRlcm5hbFwiID09PSAnYW50JyAmJiAoXG4gICAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgIDxUZXh0IGJvbGQ+W0FOVC1PTkxZXSBTeXN0ZW0gdG9vbHM8L1RleHQ+XG4gICAgICAgICAgICAgICAge2hhc0RlZmVycmVkQnVpbHRpblRvb2xzICYmIChcbiAgICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPiAoc29tZSBsb2FkZWQgb24tZGVtYW5kKTwvVGV4dD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgey8qIEFsd2F5cy1sb2FkZWQgKyBkZWZlcnJlZC1idXQtbG9hZGVkIHRvb2xzICovfVxuICAgICAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPkxvYWRlZDwvVGV4dD5cbiAgICAgICAgICAgICAgICB7c3lzdGVtVG9vbHM/Lm1hcCgodG9vbCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPEJveCBrZXk9e2BzeXMtJHtpfWB9PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dD7ilJQge3Rvb2wubmFtZX06IDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+e2Zvcm1hdFRva2Vucyh0b29sLnRva2Vucyl9IHRva2VuczwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIHtkZWZlcnJlZEJ1aWx0aW5Ub29sc1xuICAgICAgICAgICAgICAgICAgLmZpbHRlcih0ID0+IHQuaXNMb2FkZWQpXG4gICAgICAgICAgICAgICAgICAubWFwKCh0b29sLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxCb3gga2V5PXtgZGVmLSR7aX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dD7ilJQge3Rvb2wubmFtZX06IDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj57Zm9ybWF0VG9rZW5zKHRvb2wudG9rZW5zKX0gdG9rZW5zPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgey8qIERlZmVycmVkIChub3QgeWV0IGxvYWRlZCkgdG9vbHMgKi99XG4gICAgICAgICAgICAgIHtoYXNEZWZlcnJlZEJ1aWx0aW5Ub29scyAmJlxuICAgICAgICAgICAgICAgIGRlZmVycmVkQnVpbHRpblRvb2xzLnNvbWUodCA9PiAhdC5pc0xvYWRlZCkgJiYgKFxuICAgICAgICAgICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+QXZhaWxhYmxlPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICB7ZGVmZXJyZWRCdWlsdGluVG9vbHNcbiAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHQgPT4gIXQuaXNMb2FkZWQpXG4gICAgICAgICAgICAgICAgICAgICAgLm1hcCgodG9vbCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj7ilJQge3Rvb2wubmFtZX08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApfVxuXG4gICAgICAgIHtzeXN0ZW1Qcm9tcHRTZWN0aW9ucyAmJlxuICAgICAgICAgIHN5c3RlbVByb21wdFNlY3Rpb25zLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICBcImV4dGVybmFsXCIgPT09ICdhbnQnICYmIChcbiAgICAgICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgICAgIDxUZXh0IGJvbGQ+W0FOVC1PTkxZXSBTeXN0ZW0gcHJvbXB0IHNlY3Rpb25zPC9UZXh0PlxuICAgICAgICAgICAgICB7c3lzdGVtUHJvbXB0U2VjdGlvbnMubWFwKChzZWN0aW9uLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPEJveCBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgPFRleHQ+4pSUIHtzZWN0aW9uLm5hbWV9OiA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj57Zm9ybWF0VG9rZW5zKHNlY3Rpb24udG9rZW5zKX0gdG9rZW5zPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICl9XG5cbiAgICAgICAge2FnZW50cy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPFRleHQgYm9sZD5DdXN0b20gYWdlbnRzPC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj4gwrcgL2FnZW50czwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAge0FycmF5LmZyb20oZ3JvdXBCeVNvdXJjZShhZ2VudHMpLmVudHJpZXMoKSkubWFwKFxuICAgICAgICAgICAgICAoW3NvdXJjZURpc3BsYXksIHNvdXJjZUFnZW50c10pID0+IChcbiAgICAgICAgICAgICAgICA8Qm94IGtleT17c291cmNlRGlzcGxheX0gZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj57c291cmNlRGlzcGxheX08L1RleHQ+XG4gICAgICAgICAgICAgICAgICB7c291cmNlQWdlbnRzLm1hcCgoYWdlbnQsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEJveCBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PuKUlCB7YWdlbnQuYWdlbnRUeXBlfTogPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPntmb3JtYXRUb2tlbnMoYWdlbnQudG9rZW5zKX0gdG9rZW5zPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cblxuICAgICAgICB7bWVtb3J5RmlsZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxUZXh0IGJvbGQ+TWVtb3J5IGZpbGVzPC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj4gwrcgL21lbW9yeTwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAge21lbW9yeUZpbGVzLm1hcCgoZmlsZSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8Qm94IGtleT17aX0+XG4gICAgICAgICAgICAgICAgPFRleHQ+4pSUIHtnZXREaXNwbGF5UGF0aChmaWxlLnBhdGgpfTogPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPntmb3JtYXRUb2tlbnMoZmlsZS50b2tlbnMpfSB0b2tlbnM8L1RleHQ+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG5cbiAgICAgICAge3NraWxscyAmJiBza2lsbHMudG9rZW5zID4gMCAmJiAoXG4gICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxUZXh0IGJvbGQ+U2tpbGxzPC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj4gwrcgL3NraWxsczwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAge0FycmF5LmZyb20oZ3JvdXBCeVNvdXJjZShza2lsbHMuc2tpbGxGcm9udG1hdHRlcikuZW50cmllcygpKS5tYXAoXG4gICAgICAgICAgICAgIChbc291cmNlRGlzcGxheSwgc291cmNlU2tpbGxzXSkgPT4gKFxuICAgICAgICAgICAgICAgIDxCb3gga2V5PXtzb3VyY2VEaXNwbGF5fSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPntzb3VyY2VEaXNwbGF5fTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIHtzb3VyY2VTa2lsbHMubWFwKChza2lsbCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Qm94IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQ+4pSUIHtza2lsbC5uYW1lfTogPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPntmb3JtYXRUb2tlbnMoc2tpbGwudG9rZW5zKX0gdG9rZW5zPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cblxuICAgICAgICB7bWVzc2FnZUJyZWFrZG93biAmJiBcImV4dGVybmFsXCIgPT09ICdhbnQnICYmIChcbiAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgICAgPFRleHQgYm9sZD5bQU5ULU9OTFldIE1lc3NhZ2UgYnJlYWtkb3duPC9UZXh0PlxuXG4gICAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBtYXJnaW5MZWZ0PXsxfT5cbiAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICA8VGV4dD5Ub29sIGNhbGxzOiA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgICAgICB7Zm9ybWF0VG9rZW5zKG1lc3NhZ2VCcmVha2Rvd24udG9vbENhbGxUb2tlbnMpfSB0b2tlbnNcbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgPFRleHQ+VG9vbCByZXN1bHRzOiA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgICAgICB7Zm9ybWF0VG9rZW5zKG1lc3NhZ2VCcmVha2Rvd24udG9vbFJlc3VsdFRva2Vucyl9IHRva2Vuc1xuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICA8VGV4dD5BdHRhY2htZW50czogPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICAgICAge2Zvcm1hdFRva2VucyhtZXNzYWdlQnJlYWtkb3duLmF0dGFjaG1lbnRUb2tlbnMpfSB0b2tlbnNcbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgPFRleHQ+QXNzaXN0YW50IG1lc3NhZ2VzIChub24tdG9vbCk6IDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgICAgIHtmb3JtYXRUb2tlbnMobWVzc2FnZUJyZWFrZG93bi5hc3Npc3RhbnRNZXNzYWdlVG9rZW5zKX0gdG9rZW5zXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgIDxUZXh0PlVzZXIgbWVzc2FnZXMgKG5vbi10b29sLXJlc3VsdCk6IDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgICAgIHtmb3JtYXRUb2tlbnMobWVzc2FnZUJyZWFrZG93bi51c2VyTWVzc2FnZVRva2Vucyl9IHRva2Vuc1xuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAge21lc3NhZ2VCcmVha2Rvd24udG9vbENhbGxzQnlUeXBlLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgICAgICAgIDxUZXh0IGJvbGQ+W0FOVC1PTkxZXSBUb3AgdG9vbHM8L1RleHQ+XG4gICAgICAgICAgICAgICAge21lc3NhZ2VCcmVha2Rvd24udG9vbENhbGxzQnlUeXBlLnNsaWNlKDAsIDUpLm1hcCgodG9vbCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPEJveCBrZXk9e2l9IG1hcmdpbkxlZnQ9ezF9PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dD7ilJQge3Rvb2wubmFtZX06IDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgICAgICAgICAgY2FsbHMge2Zvcm1hdFRva2Vucyh0b29sLmNhbGxUb2tlbnMpfSwgcmVzdWx0c3snICd9XG4gICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdFRva2Vucyh0b29sLnJlc3VsdFRva2Vucyl9XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHttZXNzYWdlQnJlYWtkb3duLmF0dGFjaG1lbnRzQnlUeXBlLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgICAgICAgIDxUZXh0IGJvbGQ+W0FOVC1PTkxZXSBUb3AgYXR0YWNobWVudHM8L1RleHQ+XG4gICAgICAgICAgICAgICAge21lc3NhZ2VCcmVha2Rvd24uYXR0YWNobWVudHNCeVR5cGVcbiAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCA1KVxuICAgICAgICAgICAgICAgICAgLm1hcCgoYXR0YWNobWVudCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Qm94IGtleT17aX0gbWFyZ2luTGVmdD17MX0+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQ+4pSUIHthdHRhY2htZW50Lm5hbWV9OiA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0VG9rZW5zKGF0dGFjaG1lbnQudG9rZW5zKX0gdG9rZW5zXG4gICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICAgIDxDb250ZXh0U3VnZ2VzdGlvbnMgc3VnZ2VzdGlvbnM9e2dlbmVyYXRlQ29udGV4dFN1Z2dlc3Rpb25zKGRhdGEpfSAvPlxuICAgIDwvQm94PlxuICApXG59XG4iLCAiaW1wb3J0IHsgZmVhdHVyZSB9IGZyb20gJ2J1bjpidW5kbGUnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgTG9jYWxKU1hDb21tYW5kQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbW1hbmRzLmpzJ1xuaW1wb3J0IHsgQ29udGV4dFZpc3VhbGl6YXRpb24gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRleHRWaXN1YWxpemF0aW9uLmpzJ1xuaW1wb3J0IHsgbWljcm9jb21wYWN0TWVzc2FnZXMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb21wYWN0L21pY3JvQ29tcGFjdC5qcydcbmltcG9ydCB0eXBlIHsgTG9jYWxKU1hDb21tYW5kT25Eb25lIH0gZnJvbSAnLi4vLi4vdHlwZXMvY29tbWFuZC5qcydcbmltcG9ydCB0eXBlIHsgTWVzc2FnZSB9IGZyb20gJy4uLy4uL3R5cGVzL21lc3NhZ2UuanMnXG5pbXBvcnQgeyBhbmFseXplQ29udGV4dFVzYWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvYW5hbHl6ZUNvbnRleHQuanMnXG5pbXBvcnQgeyBnZXRNZXNzYWdlc0FmdGVyQ29tcGFjdEJvdW5kYXJ5IH0gZnJvbSAnLi4vLi4vdXRpbHMvbWVzc2FnZXMuanMnXG5pbXBvcnQgeyByZW5kZXJUb0Fuc2lTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscy9zdGF0aWNSZW5kZXIuanMnXG5cbi8qKlxuICogQXBwbHkgdGhlIHNhbWUgY29udGV4dCB0cmFuc2Zvcm1zIHF1ZXJ5LnRzIGRvZXMgYmVmb3JlIHRoZSBBUEkgY2FsbCwgc29cbiAqIC9jb250ZXh0IHNob3dzIHdoYXQgdGhlIG1vZGVsIGFjdHVhbGx5IHNlZXMgcmF0aGVyIHRoYW4gdGhlIFJFUEwncyByYXdcbiAqIGhpc3RvcnkuIFdpdGhvdXQgcHJvamVjdFZpZXcgdGhlIHRva2VuIGNvdW50IG92ZXJjb3VudHMgYnkgaG93ZXZlciBtdWNoXG4gKiB3YXMgY29sbGFwc2VkIOKAlCB1c2VyIHNlZXMgXCIxODBrLCAzIHNwYW5zIGNvbGxhcHNlZFwiIHdoZW4gdGhlIEFQSSBzZWVzIDEyMGsuXG4gKi9cbmZ1bmN0aW9uIHRvQXBpVmlldyhtZXNzYWdlczogTWVzc2FnZVtdKTogTWVzc2FnZVtdIHtcbiAgbGV0IHZpZXcgPSBnZXRNZXNzYWdlc0FmdGVyQ29tcGFjdEJvdW5kYXJ5KG1lc3NhZ2VzKVxuICBpZiAoZmVhdHVyZSgnQ09OVEVYVF9DT0xMQVBTRScpKSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyAqL1xuICAgIGNvbnN0IHsgcHJvamVjdFZpZXcgfSA9XG4gICAgICByZXF1aXJlKCcuLi8uLi9zZXJ2aWNlcy9jb250ZXh0Q29sbGFwc2Uvb3BlcmF0aW9ucy5qcycpIGFzIHR5cGVvZiBpbXBvcnQoJy4uLy4uL3NlcnZpY2VzL2NvbnRleHRDb2xsYXBzZS9vcGVyYXRpb25zLmpzJylcbiAgICAvKiBlc2xpbnQtZW5hYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHMgKi9cbiAgICB2aWV3ID0gcHJvamVjdFZpZXcodmlldylcbiAgfVxuICByZXR1cm4gdmlld1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsbChcbiAgb25Eb25lOiBMb2NhbEpTWENvbW1hbmRPbkRvbmUsXG4gIGNvbnRleHQ6IExvY2FsSlNYQ29tbWFuZENvbnRleHQsXG4pOiBQcm9taXNlPFJlYWN0LlJlYWN0Tm9kZT4ge1xuICBjb25zdCB7XG4gICAgbWVzc2FnZXMsXG4gICAgZ2V0QXBwU3RhdGUsXG4gICAgb3B0aW9uczogeyBtYWluTG9vcE1vZGVsLCB0b29scyB9LFxuICB9ID0gY29udGV4dFxuXG4gIGNvbnN0IGFwaVZpZXcgPSB0b0FwaVZpZXcobWVzc2FnZXMpXG5cbiAgLy8gQXBwbHkgbWljcm9jb21wYWN0IHRvIGdldCBhY2N1cmF0ZSByZXByZXNlbnRhdGlvbiBvZiBtZXNzYWdlcyBzZW50IHRvIEFQSVxuICBjb25zdCB7IG1lc3NhZ2VzOiBjb21wYWN0ZWRNZXNzYWdlcyB9ID0gYXdhaXQgbWljcm9jb21wYWN0TWVzc2FnZXMoYXBpVmlldylcblxuICAvLyBHZXQgdGVybWluYWwgd2lkdGggZm9yIHJlc3BvbnNpdmUgc2l6aW5nXG4gIGNvbnN0IHRlcm1pbmFsV2lkdGggPSBwcm9jZXNzLnN0ZG91dC5jb2x1bW5zIHx8IDgwXG5cbiAgY29uc3QgYXBwU3RhdGUgPSBnZXRBcHBTdGF0ZSgpXG5cbiAgLy8gQW5hbHl6ZSBjb250ZXh0IHdpdGggY29tcGFjdGVkIG1lc3NhZ2VzXG4gIC8vIFBhc3Mgb3JpZ2luYWwgbWVzc2FnZXMgYXMgbGFzdCBwYXJhbWV0ZXIgZm9yIGFjY3VyYXRlIEFQSSB1c2FnZSBleHRyYWN0aW9uXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBhbmFseXplQ29udGV4dFVzYWdlKFxuICAgIGNvbXBhY3RlZE1lc3NhZ2VzLFxuICAgIG1haW5Mb29wTW9kZWwsXG4gICAgYXN5bmMgKCkgPT4gYXBwU3RhdGUudG9vbFBlcm1pc3Npb25Db250ZXh0LFxuICAgIHRvb2xzLFxuICAgIGFwcFN0YXRlLmFnZW50RGVmaW5pdGlvbnMsXG4gICAgdGVybWluYWxXaWR0aCxcbiAgICBjb250ZXh0LCAvLyBQYXNzIGZ1bGwgY29udGV4dCBmb3Igc3lzdGVtIHByb21wdCBjYWxjdWxhdGlvblxuICAgIHVuZGVmaW5lZCwgLy8gbWFpblRocmVhZEFnZW50RGVmaW5pdGlvblxuICAgIGFwaVZpZXcsIC8vIE9yaWdpbmFsIG1lc3NhZ2VzIGZvciBBUEkgdXNhZ2UgZXh0cmFjdGlvblxuICApXG5cbiAgLy8gUmVuZGVyIHRvIEFOU0kgc3RyaW5nIHRvIHByZXNlcnZlIGNvbG9ycyBhbmQgcGFzcyB0byBvbkRvbmUgbGlrZSBsb2NhbCBjb21tYW5kcyBkb1xuICBjb25zdCBvdXRwdXQgPSBhd2FpdCByZW5kZXJUb0Fuc2lTdHJpbmcoPENvbnRleHRWaXN1YWxpemF0aW9uIGRhdGE9e2RhdGF9IC8+KVxuICBvbkRvbmUob3V0cHV0KVxuICByZXR1cm4gbnVsbFxufVxuIl0sCiAg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QztJQUNqQlI7SUFDQUg7SUFDQSxZQUFZUyxTQUFTRztJQUNyQlg7SUFDQVEsU0FBU0k7SUFDVFI7SUFDQVI7O0lBQ0FpQjs7SUFDQVo7O0VBQ0Y7QUFHQSxRQUFNYSxTQUFTLE1BQU1DLG1CQUFtQiw4QkFBQyx3QkFBcUIsTUFBVyxDQUFHO0FBQzVFcEIsU0FBT21CLE1BQU07QUFDYixTQUFPO0FBQ1Q7QUFuRUE7OztBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7OyIsCiAgIm5hbWVzIjogWyJpbml0X3Byb21wdCIsICJDb250ZXh0U3VnZ2VzdGlvbnMiLCAidDAiLCAiJCIsICJfYyIsICJzdWdnZXN0aW9ucyIsICJsZW5ndGgiLCAidDEiLCAiU3ltYm9sIiwgImZvciIsICJ0MiIsICJtYXAiLCAiX3RlbXAiLCAidDMiLCAic3VnZ2VzdGlvbiIsICJpIiwgInNldmVyaXR5IiwgInRpdGxlIiwgInNhdmluZ3NUb2tlbnMiLCAiZmlndXJlcyIsICJhcnJvd1JpZ2h0IiwgImZvcm1hdFRva2VucyIsICJkZXRhaWwiLCAiQ29sbGFwc2VTdGF0dXMiLCAiJCIsICJfYyIsICJmZWF0dXJlIiwgInQwIiwgInQxIiwgIlN5bWJvbCIsICJmb3IiLCAiYmIwIiwgImdldFN0YXRzIiwgImlzQ29udGV4dENvbGxhcHNlRW5hYmxlZCIsICJyZXF1aXJlIiwgInMiLCAiaGVhbHRoIiwgImgiLCAicGFydHMiLCAiY29sbGFwc2VkU3BhbnMiLCAicHVzaCIsICJwbHVyYWwiLCAiY29sbGFwc2VkTWVzc2FnZXMiLCAic3RhZ2VkU3BhbnMiLCAic3VtbWFyeSIsICJsZW5ndGgiLCAiam9pbiIsICJ0b3RhbFNwYXducyIsICJsaW5lMiIsICJ0b3RhbEVycm9ycyIsICJsYXN0RXJyb3IiLCAic2xpY2UiLCAiZW1wdHlTcGF3bldhcm5pbmdFbWl0dGVkIiwgInRvdGFsRW1wdHlTcGF3bnMiLCAiZ3JvdXBCeVNvdXJjZSIsICJpdGVtcyIsICJncm91cHMiLCAiTWFwIiwgIml0ZW0iLCAia2V5IiwgImdldFNvdXJjZURpc3BsYXlOYW1lIiwgInNvdXJjZSIsICJleGlzdGluZyIsICJnZXQiLCAic2V0IiwgImdyb3VwIiwgImVudHJpZXMiLCAic29ydCIsICJhIiwgImIiLCAidG9rZW5zIiwgIm9yZGVyZWRHcm91cHMiLCAiU09VUkNFX0RJU1BMQVlfT1JERVIiLCAiQ29udGV4dFZpc3VhbGl6YXRpb24iLCAiZGF0YSIsICJjYXRlZ29yaWVzIiwgInRvdGFsVG9rZW5zIiwgInJhd01heFRva2VucyIsICJwZXJjZW50YWdlIiwgImdyaWRSb3dzIiwgIm1vZGVsIiwgIm1lbW9yeUZpbGVzIiwgIm1jcFRvb2xzIiwgImRlZmVycmVkQnVpbHRpblRvb2xzIiwgInN5c3RlbVRvb2xzIiwgInN5c3RlbVByb21wdFNlY3Rpb25zIiwgImFnZW50cyIsICJza2lsbHMiLCAibWVzc2FnZUJyZWFrZG93biIsICJUMCIsICJUMSIsICJ0MiIsICJ0MyIsICJ0NCIsICJ0NSIsICJ0NiIsICJ0NyIsICJ0OCIsICJ0OSIsICJ1bmRlZmluZWQiLCAidmlzaWJsZUNhdGVnb3JpZXMiLCAiZmlsdGVyIiwgIl90ZW1wIiwgInQxMCIsICJzb21lIiwgIl90ZW1wMiIsICJoYXNEZWZlcnJlZE1jcFRvb2xzIiwgImhhc0RlZmVycmVkQnVpbHRpblRvb2xzIiwgImF1dG9jb21wYWN0Q2F0ZWdvcnkiLCAiZmluZCIsICJfdGVtcDMiLCAiQm94IiwgInQxMSIsICJtYXAiLCAiX3RlbXA1IiwgInQxMiIsICJ0MTMiLCAiZm9ybWF0VG9rZW5zIiwgInQxNCIsICJ0MTUiLCAidDE2IiwgInQxNyIsICJ0MTgiLCAidDE5IiwgImNhdF8yIiwgImluZGV4IiwgInRva2VuRGlzcGxheSIsICJjYXQiLCAicGVyY2VudERpc3BsYXkiLCAiaXNEZWZlcnJlZCIsICJ0b0ZpeGVkIiwgImlzUmVzZXJ2ZWQiLCAibmFtZSIsICJSRVNFUlZFRF9DQVRFR09SWV9OQU1FIiwgImRpc3BsYXlOYW1lIiwgInN5bWJvbCIsICJjb2xvciIsICJ0MjAiLCAidDIxIiwgIl90ZW1wNiIsICJfdGVtcDciLCAiX3RlbXA4IiwgInQyMiIsICJ0MjMiLCAiX3RlbXA5IiwgIl90ZW1wMCIsICJfdGVtcDEiLCAiX3RlbXAxMCIsICJfdGVtcDExIiwgIl90ZW1wMTIiLCAiX3RlbXAxMyIsICJBcnJheSIsICJmcm9tIiwgIl90ZW1wMjIiLCAiX3RlbXAyMyIsICJza2lsbEZyb250bWF0dGVyIiwgIl90ZW1wMjUiLCAiZ2VuZXJhdGVDb250ZXh0U3VnZ2VzdGlvbnMiLCAic291cmNlRGlzcGxheV8wIiwgInNvdXJjZVNraWxscyIsICJzb3VyY2VEaXNwbGF5IiwgIl90ZW1wMjQiLCAic2tpbGwiLCAiaV84IiwgImkiLCAiZmlsZSIsICJpXzciLCAiZ2V0RGlzcGxheVBhdGgiLCAicGF0aCIsICJzb3VyY2VBZ2VudHMiLCAiX3RlbXAyMSIsICJhZ2VudCIsICJpXzYiLCAiYWdlbnRUeXBlIiwgInRvb2xfMSIsICJpXzEiLCAidG9vbCIsICJ0b29sXzAiLCAiaV8wIiwgInRfMSIsICJ0IiwgImlzTG9hZGVkIiwgInRfMiIsICJ0XzAiLCAiY18wIiwgImMiLCAiY18xIiwgInJvdyIsICJyb3dJbmRleCIsICJfdGVtcDQiLCAic3F1YXJlIiwgImNvbEluZGV4IiwgImNhdGVnb3J5TmFtZSIsICJzcXVhcmVGdWxsbmVzcyIsICJjYXRfMSIsICJjYXRfMCIsICJpbmNsdWRlcyIsICJ0b0FwaVZpZXciLCAibWVzc2FnZXMiLCAidmlldyIsICJnZXRNZXNzYWdlc0FmdGVyQ29tcGFjdEJvdW5kYXJ5IiwgImZlYXR1cmUiLCAicHJvamVjdFZpZXciLCAicmVxdWlyZSIsICJjYWxsIiwgIm9uRG9uZSIsICJjb250ZXh0IiwgImdldEFwcFN0YXRlIiwgIm9wdGlvbnMiLCAibWFpbkxvb3BNb2RlbCIsICJ0b29scyIsICJhcGlWaWV3IiwgImNvbXBhY3RlZE1lc3NhZ2VzIiwgIm1pY3JvY29tcGFjdE1lc3NhZ2VzIiwgInRlcm1pbmFsV2lkdGgiLCAicHJvY2VzcyIsICJzdGRvdXQiLCAiY29sdW1ucyIsICJhcHBTdGF0ZSIsICJkYXRhIiwgImFuYWx5emVDb250ZXh0VXNhZ2UiLCAidG9vbFBlcm1pc3Npb25Db250ZXh0IiwgImFnZW50RGVmaW5pdGlvbnMiLCAidW5kZWZpbmVkIiwgIm91dHB1dCIsICJyZW5kZXJUb0Fuc2lTdHJpbmciXQp9Cg==
