#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  StructuredDiff,
  fetchGitDiff,
  fetchGitDiffHunks,
  init_StructuredDiff,
  init_gitDiff,
  init_overlayContext,
  useRegisterOverlay
} from "./chunk-PWGYNHQM.mjs";
import "./chunk-PJK4KGGT.mjs";
import {
  Byline,
  Dialog,
  init_Byline,
  init_Dialog,
  init_useShortcutDisplay,
  useShortcutDisplay
} from "./chunk-2ONWBUQT.mjs";
import "./chunk-SQ6KOOZS.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-Y2PD6CVC.mjs";
import "./chunk-TBOD624P.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import {
  Divider,
  init_Divider,
  init_useKeybinding,
  init_useTerminalSize,
  useKeybindings,
  useTerminalSize
} from "./chunk-SY3WEZL4.mjs";
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
  init_react,
  react_default,
  useEffect,
  useMemo,
  useRef,
  useState
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  init_file,
  init_stringUtils,
  plural,
  readFileSafe
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
  init_format,
  truncateStartToWidth
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
import {
  getCwd,
  init_cwd
} from "./chunk-TZFTPSMG.mjs";
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
import "./chunk-OU3SZVVB.mjs";
import "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/hooks/useDiffData.ts
function useDiffData() {
  const [diffResult, setDiffResult] = useState(null);
  const [hunks, setHunks] = useState(
    /* @__PURE__ */ new Map()
  );
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let cancelled = false;
    async function loadDiffData() {
      try {
        const [statsResult, hunksResult] = await Promise.all([
          fetchGitDiff(),
          fetchGitDiffHunks()
        ]);
        if (!cancelled) {
          setDiffResult(statsResult);
          setHunks(hunksResult);
          setLoading(false);
        }
      } catch (_error) {
        if (!cancelled) {
          setDiffResult(null);
          setHunks(/* @__PURE__ */ new Map());
          setLoading(false);
        }
      }
    }
    void loadDiffData();
    return () => {
      cancelled = true;
    };
  }, []);
  return useMemo(() => {
    if (!diffResult) {
      return { stats: null, files: [], hunks: /* @__PURE__ */ new Map(), loading };
    }
    const { stats, perFileStats } = diffResult;
    const files = [];
    for (const [path, fileStats] of perFileStats) {
      const fileHunks = hunks.get(path);
      const isUntracked = fileStats.isUntracked ?? false;
      const isLargeFile = !fileStats.isBinary && !isUntracked && !fileHunks;
      const totalLines = fileStats.added + fileStats.removed;
      const isTruncated = !isLargeFile && !fileStats.isBinary && totalLines > MAX_LINES_PER_FILE;
      files.push({
        path,
        linesAdded: fileStats.added,
        linesRemoved: fileStats.removed,
        isBinary: fileStats.isBinary,
        isLargeFile,
        isTruncated,
        isUntracked
      });
    }
    files.sort((a, b) => a.path.localeCompare(b.path));
    return { stats, files, hunks, loading: false };
  }, [diffResult, hunks, loading]);
}
var MAX_LINES_PER_FILE;
var init_useDiffData = __esm({
  "src/hooks/useDiffData.ts"() {
    init_react();
    init_gitDiff();
    MAX_LINES_PER_FILE = 400;
  }
});

// src/hooks/useTurnDiffs.ts
function isFileEditResult(result) {
  if (!result || typeof result !== "object") return false;
  const r = result;
  const hasFilePath = typeof r.filePath === "string";
  const hasStructuredPatch = Array.isArray(r.structuredPatch) && r.structuredPatch.length > 0;
  const isNewFile = r.type === "create" && typeof r.content === "string";
  return hasFilePath && (hasStructuredPatch || isNewFile);
}
function isFileWriteOutput(result) {
  return "type" in result && (result.type === "create" || result.type === "update");
}
function countHunkLines(hunks) {
  let added = 0;
  let removed = 0;
  for (const hunk of hunks) {
    for (const line of hunk.lines) {
      if (line.startsWith("+")) added++;
      else if (line.startsWith("-")) removed++;
    }
  }
  return { added, removed };
}
function getUserPromptPreview(message) {
  if (message.type !== "user") return "";
  const content = message.message.content;
  const text = typeof content === "string" ? content : "";
  if (text.length <= 30) return text;
  return text.slice(0, 29) + "\u2026";
}
function computeTurnStats(turn) {
  let totalAdded = 0;
  let totalRemoved = 0;
  for (const file of turn.files.values()) {
    totalAdded += file.linesAdded;
    totalRemoved += file.linesRemoved;
  }
  turn.stats = {
    filesChanged: turn.files.size,
    linesAdded: totalAdded,
    linesRemoved: totalRemoved
  };
}
function useTurnDiffs(messages) {
  const cache = useRef({
    completedTurns: [],
    currentTurn: null,
    lastProcessedIndex: 0,
    lastTurnIndex: 0
  });
  return useMemo(() => {
    const c2 = cache.current;
    if (messages.length < c2.lastProcessedIndex) {
      c2.completedTurns = [];
      c2.currentTurn = null;
      c2.lastProcessedIndex = 0;
      c2.lastTurnIndex = 0;
    }
    for (let i = c2.lastProcessedIndex; i < messages.length; i++) {
      const message = messages[i];
      if (!message || message.type !== "user") continue;
      const isToolResult = message.toolUseResult || Array.isArray(message.message.content) && message.message.content[0]?.type === "tool_result";
      if (!isToolResult && !message.isMeta) {
        if (c2.currentTurn && c2.currentTurn.files.size > 0) {
          computeTurnStats(c2.currentTurn);
          c2.completedTurns.push(c2.currentTurn);
        }
        c2.lastTurnIndex++;
        c2.currentTurn = {
          turnIndex: c2.lastTurnIndex,
          userPromptPreview: getUserPromptPreview(message),
          timestamp: message.timestamp,
          files: /* @__PURE__ */ new Map(),
          stats: { filesChanged: 0, linesAdded: 0, linesRemoved: 0 }
        };
      } else if (c2.currentTurn && message.toolUseResult) {
        const result2 = message.toolUseResult;
        if (isFileEditResult(result2)) {
          const { filePath, structuredPatch } = result2;
          const isNewFile = "type" in result2 && result2.type === "create";
          let fileEntry = c2.currentTurn.files.get(filePath);
          if (!fileEntry) {
            fileEntry = {
              filePath,
              hunks: [],
              isNewFile,
              linesAdded: 0,
              linesRemoved: 0
            };
            c2.currentTurn.files.set(filePath, fileEntry);
          }
          if (isNewFile && structuredPatch.length === 0 && isFileWriteOutput(result2)) {
            const content = result2.content;
            const lines = content.split("\n");
            const syntheticHunk = {
              oldStart: 0,
              oldLines: 0,
              newStart: 1,
              newLines: lines.length,
              lines: lines.map((l) => "+" + l)
            };
            fileEntry.hunks.push(syntheticHunk);
            fileEntry.linesAdded += lines.length;
          } else {
            fileEntry.hunks.push(...structuredPatch);
            const { added, removed } = countHunkLines(structuredPatch);
            fileEntry.linesAdded += added;
            fileEntry.linesRemoved += removed;
          }
          if (isNewFile) {
            fileEntry.isNewFile = true;
          }
        }
      }
    }
    c2.lastProcessedIndex = messages.length;
    const result = [...c2.completedTurns];
    if (c2.currentTurn && c2.currentTurn.files.size > 0) {
      computeTurnStats(c2.currentTurn);
      result.push(c2.currentTurn);
    }
    return result.reverse();
  }, [messages]);
}
var init_useTurnDiffs = __esm({
  "src/hooks/useTurnDiffs.ts"() {
    init_react();
  }
});

// src/components/diff/DiffDetailView.tsx
import { resolve } from "path";
function DiffDetailView(t0) {
  const $ = c(53);
  const {
    filePath,
    hunks,
    isLargeFile,
    isBinary,
    isTruncated,
    isUntracked
  } = t0;
  const {
    columns
  } = useTerminalSize();
  let t1;
  bb0: {
    if (!filePath) {
      let t23;
      if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t23 = {
          firstLine: null,
          fileContent: void 0
        };
        $[0] = t23;
      } else {
        t23 = $[0];
      }
      t1 = t23;
      break bb0;
    }
    let content;
    let t22;
    if ($[1] !== filePath) {
      const fullPath = resolve(getCwd(), filePath);
      content = readFileSafe(fullPath);
      t22 = content?.split("\n")[0] ?? null;
      $[1] = filePath;
      $[2] = content;
      $[3] = t22;
    } else {
      content = $[2];
      t22 = $[3];
    }
    const t32 = content ?? void 0;
    let t42;
    if ($[4] !== t22 || $[5] !== t32) {
      t42 = {
        firstLine: t22,
        fileContent: t32
      };
      $[4] = t22;
      $[5] = t32;
      $[6] = t42;
    } else {
      t42 = $[6];
    }
    t1 = t42;
  }
  const {
    firstLine,
    fileContent
  } = t1;
  if (isUntracked) {
    let t22;
    if ($[7] !== filePath) {
      t22 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, filePath);
      $[7] = filePath;
      $[8] = t22;
    } else {
      t22 = $[8];
    }
    let t32;
    if ($[9] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t32 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, " (untracked)");
      $[9] = t32;
    } else {
      t32 = $[9];
    }
    let t42;
    if ($[10] !== t22) {
      t42 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, t22, t32);
      $[10] = t22;
      $[11] = t42;
    } else {
      t42 = $[11];
    }
    let t52;
    if ($[12] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t52 = /* @__PURE__ */ react_default.createElement(Divider, { padding: 4 });
      $[12] = t52;
    } else {
      t52 = $[12];
    }
    let t62;
    if ($[13] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t62 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true, italic: true }, "New file not yet staged.");
      $[13] = t62;
    } else {
      t62 = $[13];
    }
    let t72;
    if ($[14] !== filePath) {
      t72 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, t62, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true, italic: true }, "Run `git add ", filePath, "` to see line counts."));
      $[14] = filePath;
      $[15] = t72;
    } else {
      t72 = $[15];
    }
    let t82;
    if ($[16] !== t42 || $[17] !== t72) {
      t82 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", width: "100%" }, t42, t52, t72);
      $[16] = t42;
      $[17] = t72;
      $[18] = t82;
    } else {
      t82 = $[18];
    }
    return t82;
  }
  if (isBinary) {
    let t22;
    if ($[19] !== filePath) {
      t22 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, filePath));
      $[19] = filePath;
      $[20] = t22;
    } else {
      t22 = $[20];
    }
    let t32;
    if ($[21] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t32 = /* @__PURE__ */ react_default.createElement(Divider, { padding: 4 });
      $[21] = t32;
    } else {
      t32 = $[21];
    }
    let t42;
    if ($[22] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t42 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true, italic: true }, "Binary file - cannot display diff"));
      $[22] = t42;
    } else {
      t42 = $[22];
    }
    let t52;
    if ($[23] !== t22) {
      t52 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", width: "100%" }, t22, t32, t42);
      $[23] = t22;
      $[24] = t52;
    } else {
      t52 = $[24];
    }
    return t52;
  }
  if (isLargeFile) {
    let t22;
    if ($[25] !== filePath) {
      t22 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, filePath));
      $[25] = filePath;
      $[26] = t22;
    } else {
      t22 = $[26];
    }
    let t32;
    if ($[27] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t32 = /* @__PURE__ */ react_default.createElement(Divider, { padding: 4 });
      $[27] = t32;
    } else {
      t32 = $[27];
    }
    let t42;
    if ($[28] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t42 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true, italic: true }, "Large file - diff exceeds 1 MB limit"));
      $[28] = t42;
    } else {
      t42 = $[28];
    }
    let t52;
    if ($[29] !== t22) {
      t52 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", width: "100%" }, t22, t32, t42);
      $[29] = t22;
      $[30] = t52;
    } else {
      t52 = $[30];
    }
    return t52;
  }
  let t2;
  if ($[31] !== filePath) {
    t2 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, filePath);
    $[31] = filePath;
    $[32] = t2;
  } else {
    t2 = $[32];
  }
  let t3;
  if ($[33] !== isTruncated) {
    t3 = isTruncated && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, " (truncated)");
    $[33] = isTruncated;
    $[34] = t3;
  } else {
    t3 = $[34];
  }
  let t4;
  if ($[35] !== t2 || $[36] !== t3) {
    t4 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, t2, t3);
    $[35] = t2;
    $[36] = t3;
    $[37] = t4;
  } else {
    t4 = $[37];
  }
  let t5;
  if ($[38] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ react_default.createElement(Divider, { padding: 4 });
    $[38] = t5;
  } else {
    t5 = $[38];
  }
  let t6;
  if ($[39] !== columns || $[40] !== fileContent || $[41] !== filePath || $[42] !== firstLine || $[43] !== hunks) {
    t6 = hunks.length === 0 ? /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "No diff content") : hunks.map((hunk, index) => /* @__PURE__ */ react_default.createElement(StructuredDiff, { key: index, patch: hunk, filePath, firstLine, fileContent, dim: false, width: columns - 2 - 2 }));
    $[39] = columns;
    $[40] = fileContent;
    $[41] = filePath;
    $[42] = firstLine;
    $[43] = hunks;
    $[44] = t6;
  } else {
    t6 = $[44];
  }
  let t7;
  if ($[45] !== t6) {
    t7 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, t6);
    $[45] = t6;
    $[46] = t7;
  } else {
    t7 = $[46];
  }
  let t8;
  if ($[47] !== isTruncated) {
    t8 = isTruncated && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true, italic: true }, "\u2026 diff truncated (exceeded 400 line limit)");
    $[47] = isTruncated;
    $[48] = t8;
  } else {
    t8 = $[48];
  }
  let t9;
  if ($[49] !== t4 || $[50] !== t7 || $[51] !== t8) {
    t9 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", width: "100%" }, t4, t5, t7, t8);
    $[49] = t4;
    $[50] = t7;
    $[51] = t8;
    $[52] = t9;
  } else {
    t9 = $[52];
  }
  return t9;
}
var init_DiffDetailView = __esm({
  "src/components/diff/DiffDetailView.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_useTerminalSize();
    init_ink();
    init_cwd();
    init_file();
    init_Divider();
    init_StructuredDiff();
  }
});

// src/components/diff/DiffFileList.tsx
function DiffFileList(t0) {
  const $ = c(36);
  const {
    files,
    selectedIndex
  } = t0;
  const {
    columns
  } = useTerminalSize();
  let t1;
  bb0: {
    if (files.length === 0 || files.length <= MAX_VISIBLE_FILES) {
      let t23;
      if ($[0] !== files.length) {
        t23 = {
          startIndex: 0,
          endIndex: files.length
        };
        $[0] = files.length;
        $[1] = t23;
      } else {
        t23 = $[1];
      }
      t1 = t23;
      break bb0;
    }
    let start = Math.max(0, selectedIndex - Math.floor(MAX_VISIBLE_FILES / 2));
    let end = start + MAX_VISIBLE_FILES;
    if (end > files.length) {
      end = files.length;
      start = Math.max(0, end - MAX_VISIBLE_FILES);
    }
    let t22;
    if ($[2] !== end || $[3] !== start) {
      t22 = {
        startIndex: start,
        endIndex: end
      };
      $[2] = end;
      $[3] = start;
      $[4] = t22;
    } else {
      t22 = $[4];
    }
    t1 = t22;
  }
  const {
    startIndex,
    endIndex
  } = t1;
  if (files.length === 0) {
    let t22;
    if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t22 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "No changed files");
      $[5] = t22;
    } else {
      t22 = $[5];
    }
    return t22;
  }
  let T0;
  let hasMoreBelow;
  let needsPagination;
  let t2;
  let t3;
  let t4;
  if ($[6] !== columns || $[7] !== endIndex || $[8] !== files || $[9] !== selectedIndex || $[10] !== startIndex) {
    const visibleFiles = files.slice(startIndex, endIndex);
    const hasMoreAbove = startIndex > 0;
    hasMoreBelow = endIndex < files.length;
    needsPagination = files.length > MAX_VISIBLE_FILES;
    const maxPathWidth = Math.max(20, columns - 16 - 3 - 4);
    T0 = ThemedBox_default;
    t2 = "column";
    if ($[17] !== hasMoreAbove || $[18] !== needsPagination || $[19] !== startIndex) {
      t3 = needsPagination && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, hasMoreAbove ? ` \u2191 ${startIndex} more ${plural(startIndex, "file")}` : " ");
      $[17] = hasMoreAbove;
      $[18] = needsPagination;
      $[19] = startIndex;
      $[20] = t3;
    } else {
      t3 = $[20];
    }
    let t52;
    if ($[21] !== maxPathWidth || $[22] !== selectedIndex || $[23] !== startIndex) {
      t52 = (file, index) => /* @__PURE__ */ react_default.createElement(FileItem, { key: file.path, file, isSelected: startIndex + index === selectedIndex, maxPathWidth });
      $[21] = maxPathWidth;
      $[22] = selectedIndex;
      $[23] = startIndex;
      $[24] = t52;
    } else {
      t52 = $[24];
    }
    t4 = visibleFiles.map(t52);
    $[6] = columns;
    $[7] = endIndex;
    $[8] = files;
    $[9] = selectedIndex;
    $[10] = startIndex;
    $[11] = T0;
    $[12] = hasMoreBelow;
    $[13] = needsPagination;
    $[14] = t2;
    $[15] = t3;
    $[16] = t4;
  } else {
    T0 = $[11];
    hasMoreBelow = $[12];
    needsPagination = $[13];
    t2 = $[14];
    t3 = $[15];
    t4 = $[16];
  }
  let t5;
  if ($[25] !== endIndex || $[26] !== files.length || $[27] !== hasMoreBelow || $[28] !== needsPagination) {
    t5 = needsPagination && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, hasMoreBelow ? ` \u2193 ${files.length - endIndex} more ${plural(files.length - endIndex, "file")}` : " ");
    $[25] = endIndex;
    $[26] = files.length;
    $[27] = hasMoreBelow;
    $[28] = needsPagination;
    $[29] = t5;
  } else {
    t5 = $[29];
  }
  let t6;
  if ($[30] !== T0 || $[31] !== t2 || $[32] !== t3 || $[33] !== t4 || $[34] !== t5) {
    t6 = /* @__PURE__ */ react_default.createElement(T0, { flexDirection: t2 }, t3, t4, t5);
    $[30] = T0;
    $[31] = t2;
    $[32] = t3;
    $[33] = t4;
    $[34] = t5;
    $[35] = t6;
  } else {
    t6 = $[35];
  }
  return t6;
}
function FileItem(t0) {
  const $ = c(14);
  const {
    file,
    isSelected,
    maxPathWidth
  } = t0;
  let t1;
  if ($[0] !== file.path || $[1] !== maxPathWidth) {
    t1 = truncateStartToWidth(file.path, maxPathWidth);
    $[0] = file.path;
    $[1] = maxPathWidth;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const displayPath = t1;
  const pointer = isSelected ? figures_default.pointer + " " : "  ";
  const line = `${pointer}${displayPath}`;
  const t2 = isSelected ? "background" : void 0;
  let t3;
  if ($[3] !== isSelected || $[4] !== line || $[5] !== t2) {
    t3 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: isSelected, color: t2, inverse: isSelected }, line);
    $[3] = isSelected;
    $[4] = line;
    $[5] = t2;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  let t4;
  if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexGrow: 1 });
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  let t5;
  if ($[8] !== file || $[9] !== isSelected) {
    t5 = /* @__PURE__ */ react_default.createElement(FileStats, { file, isSelected });
    $[8] = file;
    $[9] = isSelected;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  let t6;
  if ($[11] !== t3 || $[12] !== t5) {
    t6 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "row" }, t3, t4, t5);
    $[11] = t3;
    $[12] = t5;
    $[13] = t6;
  } else {
    t6 = $[13];
  }
  return t6;
}
function FileStats(t0) {
  const $ = c(20);
  const {
    file,
    isSelected
  } = t0;
  if (file.isUntracked) {
    const t12 = !isSelected;
    let t22;
    if ($[0] !== t12) {
      t22 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: t12, italic: true }, "untracked");
      $[0] = t12;
      $[1] = t22;
    } else {
      t22 = $[1];
    }
    return t22;
  }
  if (file.isBinary) {
    const t12 = !isSelected;
    let t22;
    if ($[2] !== t12) {
      t22 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: t12, italic: true }, "Binary file");
      $[2] = t12;
      $[3] = t22;
    } else {
      t22 = $[3];
    }
    return t22;
  }
  if (file.isLargeFile) {
    const t12 = !isSelected;
    let t22;
    if ($[4] !== t12) {
      t22 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: t12, italic: true }, "Large file modified");
      $[4] = t12;
      $[5] = t22;
    } else {
      t22 = $[5];
    }
    return t22;
  }
  let t1;
  if ($[6] !== file.linesAdded || $[7] !== isSelected) {
    t1 = file.linesAdded > 0 && /* @__PURE__ */ react_default.createElement(ThemedText, { color: "diffAddedWord", bold: isSelected }, "+", file.linesAdded);
    $[6] = file.linesAdded;
    $[7] = isSelected;
    $[8] = t1;
  } else {
    t1 = $[8];
  }
  const t2 = file.linesAdded > 0 && file.linesRemoved > 0 && " ";
  let t3;
  if ($[9] !== file.linesRemoved || $[10] !== isSelected) {
    t3 = file.linesRemoved > 0 && /* @__PURE__ */ react_default.createElement(ThemedText, { color: "diffRemovedWord", bold: isSelected }, "-", file.linesRemoved);
    $[9] = file.linesRemoved;
    $[10] = isSelected;
    $[11] = t3;
  } else {
    t3 = $[11];
  }
  let t4;
  if ($[12] !== file.isTruncated || $[13] !== isSelected) {
    t4 = file.isTruncated && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: !isSelected }, " (truncated)");
    $[12] = file.isTruncated;
    $[13] = isSelected;
    $[14] = t4;
  } else {
    t4 = $[14];
  }
  let t5;
  if ($[15] !== t1 || $[16] !== t2 || $[17] !== t3 || $[18] !== t4) {
    t5 = /* @__PURE__ */ react_default.createElement(ThemedText, null, t1, t2, t3, t4);
    $[15] = t1;
    $[16] = t2;
    $[17] = t3;
    $[18] = t4;
    $[19] = t5;
  } else {
    t5 = $[19];
  }
  return t5;
}
var MAX_VISIBLE_FILES;
var init_DiffFileList = __esm({
  "src/components/diff/DiffFileList.tsx"() {
    init_react_compiler_runtime();
    init_figures();
    init_react();
    init_useTerminalSize();
    init_ink();
    init_format();
    init_stringUtils();
    MAX_VISIBLE_FILES = 5;
  }
});

// src/components/diff/DiffDialog.tsx
function turnDiffToDiffData(turn) {
  const files = Array.from(turn.files.values()).map((f) => ({
    path: f.filePath,
    linesAdded: f.linesAdded,
    linesRemoved: f.linesRemoved,
    isBinary: false,
    isLargeFile: false,
    isTruncated: false,
    isNewFile: f.isNewFile
  })).sort((a, b) => a.path.localeCompare(b.path));
  const hunks = /* @__PURE__ */ new Map();
  for (const f of turn.files.values()) {
    hunks.set(f.filePath, f.hunks);
  }
  return {
    stats: {
      filesCount: turn.stats.filesChanged,
      linesAdded: turn.stats.linesAdded,
      linesRemoved: turn.stats.linesRemoved
    },
    files,
    hunks,
    loading: false
  };
}
function DiffDialog(t0) {
  const $ = c(73);
  const {
    messages,
    onDone
  } = t0;
  const gitDiffData = useDiffData();
  const turnDiffs = useTurnDiffs(messages);
  const [viewMode, setViewMode] = useState("list");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sourceIndex, setSourceIndex] = useState(0);
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = {
      type: "current"
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== turnDiffs) {
    t2 = [t1, ...turnDiffs.map(_temp)];
    $[1] = turnDiffs;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  const sources = t2;
  const currentSource = sources[sourceIndex];
  const currentTurn = currentSource?.type === "turn" ? currentSource.turn : null;
  let t3;
  if ($[3] !== currentTurn || $[4] !== gitDiffData) {
    t3 = currentTurn ? turnDiffToDiffData(currentTurn) : gitDiffData;
    $[3] = currentTurn;
    $[4] = gitDiffData;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  const diffData = t3;
  const selectedFile = diffData.files[selectedIndex];
  let t4;
  if ($[6] !== diffData.hunks || $[7] !== selectedFile) {
    t4 = selectedFile ? diffData.hunks.get(selectedFile.path) || [] : [];
    $[6] = diffData.hunks;
    $[7] = selectedFile;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  const selectedHunks = t4;
  let t5;
  let t6;
  if ($[9] !== sourceIndex || $[10] !== sources.length) {
    t5 = () => {
      if (sourceIndex >= sources.length) {
        setSourceIndex(Math.max(0, sources.length - 1));
      }
    };
    t6 = [sources.length, sourceIndex];
    $[9] = sourceIndex;
    $[10] = sources.length;
    $[11] = t5;
    $[12] = t6;
  } else {
    t5 = $[11];
    t6 = $[12];
  }
  useEffect(t5, t6);
  const prevSourceIndex = useRef(sourceIndex);
  let t7;
  let t8;
  if ($[13] !== sourceIndex) {
    t7 = () => {
      if (prevSourceIndex.current !== sourceIndex) {
        setSelectedIndex(0);
        prevSourceIndex.current = sourceIndex;
      }
    };
    t8 = [sourceIndex];
    $[13] = sourceIndex;
    $[14] = t7;
    $[15] = t8;
  } else {
    t7 = $[14];
    t8 = $[15];
  }
  useEffect(t7, t8);
  useRegisterOverlay("diff-dialog");
  let t10;
  let t9;
  if ($[16] !== sources.length || $[17] !== viewMode) {
    t9 = () => {
      if (viewMode === "detail") {
        setViewMode("list");
      } else {
        if (viewMode === "list" && sources.length > 1) {
          setSourceIndex(_temp2);
        }
      }
    };
    t10 = () => {
      if (viewMode === "list" && sources.length > 1) {
        setSourceIndex((prev_0) => Math.min(sources.length - 1, prev_0 + 1));
      }
    };
    $[16] = sources.length;
    $[17] = viewMode;
    $[18] = t10;
    $[19] = t9;
  } else {
    t10 = $[18];
    t9 = $[19];
  }
  let t11;
  if ($[20] !== viewMode) {
    t11 = () => {
      if (viewMode === "detail") {
        setViewMode("list");
      }
    };
    $[20] = viewMode;
    $[21] = t11;
  } else {
    t11 = $[21];
  }
  let t12;
  if ($[22] !== selectedFile || $[23] !== viewMode) {
    t12 = () => {
      if (viewMode === "list" && selectedFile) {
        setViewMode("detail");
      }
    };
    $[22] = selectedFile;
    $[23] = viewMode;
    $[24] = t12;
  } else {
    t12 = $[24];
  }
  let t13;
  if ($[25] !== viewMode) {
    t13 = () => {
      if (viewMode === "list") {
        setSelectedIndex(_temp3);
      }
    };
    $[25] = viewMode;
    $[26] = t13;
  } else {
    t13 = $[26];
  }
  let t14;
  if ($[27] !== diffData.files.length || $[28] !== viewMode) {
    t14 = () => {
      if (viewMode === "list") {
        setSelectedIndex((prev_2) => Math.min(diffData.files.length - 1, prev_2 + 1));
      }
    };
    $[27] = diffData.files.length;
    $[28] = viewMode;
    $[29] = t14;
  } else {
    t14 = $[29];
  }
  let t15;
  if ($[30] !== t10 || $[31] !== t11 || $[32] !== t12 || $[33] !== t13 || $[34] !== t14 || $[35] !== t9) {
    t15 = {
      "diff:previousSource": t9,
      "diff:nextSource": t10,
      "diff:back": t11,
      "diff:viewDetails": t12,
      "diff:previousFile": t13,
      "diff:nextFile": t14
    };
    $[30] = t10;
    $[31] = t11;
    $[32] = t12;
    $[33] = t13;
    $[34] = t14;
    $[35] = t9;
    $[36] = t15;
  } else {
    t15 = $[36];
  }
  let t16;
  if ($[37] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t16 = {
      context: "DiffDialog"
    };
    $[37] = t16;
  } else {
    t16 = $[37];
  }
  useKeybindings(t15, t16);
  let t17;
  if ($[38] !== diffData.stats) {
    t17 = diffData.stats ? /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, diffData.stats.filesCount, " ", plural(diffData.stats.filesCount, "file"), " ", "changed", diffData.stats.linesAdded > 0 && /* @__PURE__ */ react_default.createElement(ThemedText, { color: "diffAddedWord" }, " +", diffData.stats.linesAdded), diffData.stats.linesRemoved > 0 && /* @__PURE__ */ react_default.createElement(ThemedText, { color: "diffRemovedWord" }, " -", diffData.stats.linesRemoved)) : null;
    $[38] = diffData.stats;
    $[39] = t17;
  } else {
    t17 = $[39];
  }
  const subtitle = t17;
  const headerTitle = currentTurn ? `Turn ${currentTurn.turnIndex}` : "Uncommitted changes";
  const headerSubtitle = currentTurn ? currentTurn.userPromptPreview ? `"${currentTurn.userPromptPreview}"` : "" : "(git diff HEAD)";
  let t18;
  if ($[40] !== sourceIndex || $[41] !== sources) {
    t18 = sources.length > 1 ? /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, sourceIndex > 0 && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "\u25C0 "), sources.map((source, i) => {
      const isSelected = i === sourceIndex;
      const label = source.type === "current" ? "Current" : `T${source.turn.turnIndex}`;
      return /* @__PURE__ */ react_default.createElement(ThemedText, { key: i, dimColor: !isSelected, bold: isSelected }, i > 0 ? " \xB7 " : "", label);
    }), sourceIndex < sources.length - 1 && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, " \u25B6")) : null;
    $[40] = sourceIndex;
    $[41] = sources;
    $[42] = t18;
  } else {
    t18 = $[42];
  }
  const sourceSelector = t18;
  const dismissShortcut = useShortcutDisplay("diff:dismiss", "DiffDialog", "esc");
  let t19;
  bb0: {
    if (diffData.loading) {
      t19 = "Loading diff\u2026";
      break bb0;
    }
    if (currentTurn) {
      t19 = "No file changes in this turn";
      break bb0;
    }
    if (diffData.stats && diffData.stats.filesCount > 0 && diffData.files.length === 0) {
      t19 = "Too many files to display details";
      break bb0;
    }
    t19 = "Working tree is clean";
  }
  const emptyMessage = t19;
  let t20;
  if ($[43] !== headerSubtitle) {
    t20 = headerSubtitle && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, " ", headerSubtitle);
    $[43] = headerSubtitle;
    $[44] = t20;
  } else {
    t20 = $[44];
  }
  let t21;
  if ($[45] !== headerTitle || $[46] !== t20) {
    t21 = /* @__PURE__ */ react_default.createElement(ThemedText, null, headerTitle, t20);
    $[45] = headerTitle;
    $[46] = t20;
    $[47] = t21;
  } else {
    t21 = $[47];
  }
  const title = t21;
  let t22;
  if ($[48] !== onDone || $[49] !== viewMode) {
    t22 = function handleCancel2() {
      if (viewMode === "detail") {
        setViewMode("list");
      } else {
        onDone("Diff dialog dismissed", {
          display: "system"
        });
      }
    };
    $[48] = onDone;
    $[49] = viewMode;
    $[50] = t22;
  } else {
    t22 = $[50];
  }
  const handleCancel = t22;
  let t23;
  if ($[51] !== dismissShortcut || $[52] !== sources.length || $[53] !== viewMode) {
    t23 = (exitState) => exitState.pending ? /* @__PURE__ */ react_default.createElement(ThemedText, null, "Press ", exitState.keyName, " again to exit") : viewMode === "list" ? /* @__PURE__ */ react_default.createElement(Byline, null, sources.length > 1 && /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2190/\u2192 source"), /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2191/\u2193 select"), /* @__PURE__ */ react_default.createElement(ThemedText, null, "Enter view"), /* @__PURE__ */ react_default.createElement(ThemedText, null, dismissShortcut, " close")) : /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2190 back"), /* @__PURE__ */ react_default.createElement(ThemedText, null, dismissShortcut, " close"));
    $[51] = dismissShortcut;
    $[52] = sources.length;
    $[53] = viewMode;
    $[54] = t23;
  } else {
    t23 = $[54];
  }
  let t24;
  if ($[55] !== diffData.files || $[56] !== emptyMessage || $[57] !== selectedFile?.isBinary || $[58] !== selectedFile?.isLargeFile || $[59] !== selectedFile?.isTruncated || $[60] !== selectedFile?.isUntracked || $[61] !== selectedFile?.path || $[62] !== selectedHunks || $[63] !== selectedIndex || $[64] !== viewMode) {
    t24 = diffData.files.length === 0 ? /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, emptyMessage)) : viewMode === "list" ? /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginTop: 1 }, /* @__PURE__ */ react_default.createElement(DiffFileList, { files: diffData.files, selectedIndex })) : /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginTop: 1 }, /* @__PURE__ */ react_default.createElement(DiffDetailView, { filePath: selectedFile?.path || "", hunks: selectedHunks, isLargeFile: selectedFile?.isLargeFile, isBinary: selectedFile?.isBinary, isTruncated: selectedFile?.isTruncated, isUntracked: selectedFile?.isUntracked }));
    $[55] = diffData.files;
    $[56] = emptyMessage;
    $[57] = selectedFile?.isBinary;
    $[58] = selectedFile?.isLargeFile;
    $[59] = selectedFile?.isTruncated;
    $[60] = selectedFile?.isUntracked;
    $[61] = selectedFile?.path;
    $[62] = selectedHunks;
    $[63] = selectedIndex;
    $[64] = viewMode;
    $[65] = t24;
  } else {
    t24 = $[65];
  }
  let t25;
  if ($[66] !== handleCancel || $[67] !== sourceSelector || $[68] !== subtitle || $[69] !== t23 || $[70] !== t24 || $[71] !== title) {
    t25 = /* @__PURE__ */ react_default.createElement(Dialog, { title, onCancel: handleCancel, color: "background", inputGuide: t23 }, sourceSelector, subtitle, t24);
    $[66] = handleCancel;
    $[67] = sourceSelector;
    $[68] = subtitle;
    $[69] = t23;
    $[70] = t24;
    $[71] = title;
    $[72] = t25;
  } else {
    t25 = $[72];
  }
  return t25;
}
function _temp3(prev_1) {
  return Math.max(0, prev_1 - 1);
}
function _temp2(prev) {
  return Math.max(0, prev - 1);
}
function _temp(turn) {
  return {
    type: "turn",
    turn
  };
}
var init_DiffDialog = __esm({
  "src/components/diff/DiffDialog.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_overlayContext();
    init_useDiffData();
    init_useTurnDiffs();
    init_ink();
    init_useKeybinding();
    init_useShortcutDisplay();
    init_stringUtils();
    init_Byline();
    init_Dialog();
    init_DiffDetailView();
    init_DiffFileList();
  }
});
init_DiffDialog();
export {
  DiffDialog
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2hvb2tzL3VzZURpZmZEYXRhLnRzIiwgIi4uLy4uL3NyYy9ob29rcy91c2VUdXJuRGlmZnMudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvZGlmZi9EaWZmRGV0YWlsVmlldy50c3giLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvZGlmZi9EaWZmRmlsZUxpc3QudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL2RpZmYvRGlmZkRpYWxvZy50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB0eXBlIHsgU3RydWN0dXJlZFBhdGNoSHVuayB9IGZyb20gJ2RpZmYnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBmZXRjaEdpdERpZmYsXG4gIGZldGNoR2l0RGlmZkh1bmtzLFxuICB0eXBlIEdpdERpZmZSZXN1bHQsXG4gIHR5cGUgR2l0RGlmZlN0YXRzLFxufSBmcm9tICcuLi91dGlscy9naXREaWZmLmpzJ1xuXG5jb25zdCBNQVhfTElORVNfUEVSX0ZJTEUgPSA0MDBcblxuZXhwb3J0IHR5cGUgRGlmZkZpbGUgPSB7XG4gIHBhdGg6IHN0cmluZ1xuICBsaW5lc0FkZGVkOiBudW1iZXJcbiAgbGluZXNSZW1vdmVkOiBudW1iZXJcbiAgaXNCaW5hcnk6IGJvb2xlYW5cbiAgaXNMYXJnZUZpbGU6IGJvb2xlYW5cbiAgaXNUcnVuY2F0ZWQ6IGJvb2xlYW5cbiAgaXNOZXdGaWxlPzogYm9vbGVhblxuICBpc1VudHJhY2tlZD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRGlmZkRhdGEgPSB7XG4gIHN0YXRzOiBHaXREaWZmU3RhdHMgfCBudWxsXG4gIGZpbGVzOiBEaWZmRmlsZVtdXG4gIGh1bmtzOiBNYXA8c3RyaW5nLCBTdHJ1Y3R1cmVkUGF0Y2hIdW5rW10+XG4gIGxvYWRpbmc6IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBIb29rIHRvIGZldGNoIGN1cnJlbnQgZ2l0IGRpZmYgZGF0YSBvbiBkZW1hbmQuXG4gKiBGZXRjaGVzIGJvdGggc3RhdHMgYW5kIGh1bmtzIHdoZW4gY29tcG9uZW50IG1vdW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZURpZmZEYXRhKCk6IERpZmZEYXRhIHtcbiAgY29uc3QgW2RpZmZSZXN1bHQsIHNldERpZmZSZXN1bHRdID0gdXNlU3RhdGU8R2l0RGlmZlJlc3VsdCB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtodW5rcywgc2V0SHVua3NdID0gdXNlU3RhdGU8TWFwPHN0cmluZywgU3RydWN0dXJlZFBhdGNoSHVua1tdPj4oXG4gICAgbmV3IE1hcCgpLFxuICApXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgLy8gRmV0Y2ggZGlmZiBkYXRhIG9uIG1vdW50XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG5cbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkRGlmZkRhdGEoKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBGZXRjaCBib3RoIHN0YXRzIGFuZCBodW5rc1xuICAgICAgICBjb25zdCBbc3RhdHNSZXN1bHQsIGh1bmtzUmVzdWx0XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICBmZXRjaEdpdERpZmYoKSxcbiAgICAgICAgICBmZXRjaEdpdERpZmZIdW5rcygpLFxuICAgICAgICBdKVxuXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgc2V0RGlmZlJlc3VsdChzdGF0c1Jlc3VsdClcbiAgICAgICAgICBzZXRIdW5rcyhodW5rc1Jlc3VsdClcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChfZXJyb3IpIHtcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICBzZXREaWZmUmVzdWx0KG51bGwpXG4gICAgICAgICAgc2V0SHVua3MobmV3IE1hcCgpKVxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2b2lkIGxvYWREaWZmRGF0YSgpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICghZGlmZlJlc3VsdCkge1xuICAgICAgcmV0dXJuIHsgc3RhdHM6IG51bGwsIGZpbGVzOiBbXSwgaHVua3M6IG5ldyBNYXAoKSwgbG9hZGluZyB9XG4gICAgfVxuXG4gICAgY29uc3QgeyBzdGF0cywgcGVyRmlsZVN0YXRzIH0gPSBkaWZmUmVzdWx0XG4gICAgY29uc3QgZmlsZXM6IERpZmZGaWxlW10gPSBbXVxuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIHBlckZpbGVTdGF0cyB0byBnZXQgYWxsIGZpbGVzIGluY2x1ZGluZyBsYXJnZS9za2lwcGVkIG9uZXNcbiAgICBmb3IgKGNvbnN0IFtwYXRoLCBmaWxlU3RhdHNdIG9mIHBlckZpbGVTdGF0cykge1xuICAgICAgY29uc3QgZmlsZUh1bmtzID0gaHVua3MuZ2V0KHBhdGgpXG4gICAgICBjb25zdCBpc1VudHJhY2tlZCA9IGZpbGVTdGF0cy5pc1VudHJhY2tlZCA/PyBmYWxzZVxuXG4gICAgICAvLyBEZXRlY3QgbGFyZ2UgZmlsZSAoaW4gcGVyRmlsZVN0YXRzIGJ1dCBub3QgaW4gaHVua3MsIGFuZCBub3QgYmluYXJ5L3VudHJhY2tlZClcbiAgICAgIGNvbnN0IGlzTGFyZ2VGaWxlID0gIWZpbGVTdGF0cy5pc0JpbmFyeSAmJiAhaXNVbnRyYWNrZWQgJiYgIWZpbGVIdW5rc1xuXG4gICAgICAvLyBEZXRlY3QgdHJ1bmNhdGVkIGZpbGUgKHRvdGFsID4gbGltaXQgbWVhbnMgd2UgdHJ1bmNhdGVkKVxuICAgICAgY29uc3QgdG90YWxMaW5lcyA9IGZpbGVTdGF0cy5hZGRlZCArIGZpbGVTdGF0cy5yZW1vdmVkXG4gICAgICBjb25zdCBpc1RydW5jYXRlZCA9XG4gICAgICAgICFpc0xhcmdlRmlsZSAmJiAhZmlsZVN0YXRzLmlzQmluYXJ5ICYmIHRvdGFsTGluZXMgPiBNQVhfTElORVNfUEVSX0ZJTEVcblxuICAgICAgZmlsZXMucHVzaCh7XG4gICAgICAgIHBhdGgsXG4gICAgICAgIGxpbmVzQWRkZWQ6IGZpbGVTdGF0cy5hZGRlZCxcbiAgICAgICAgbGluZXNSZW1vdmVkOiBmaWxlU3RhdHMucmVtb3ZlZCxcbiAgICAgICAgaXNCaW5hcnk6IGZpbGVTdGF0cy5pc0JpbmFyeSxcbiAgICAgICAgaXNMYXJnZUZpbGUsXG4gICAgICAgIGlzVHJ1bmNhdGVkLFxuICAgICAgICBpc1VudHJhY2tlZCxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZmlsZXMuc29ydCgoYSwgYikgPT4gYS5wYXRoLmxvY2FsZUNvbXBhcmUoYi5wYXRoKSlcblxuICAgIHJldHVybiB7IHN0YXRzLCBmaWxlcywgaHVua3MsIGxvYWRpbmc6IGZhbHNlIH1cbiAgfSwgW2RpZmZSZXN1bHQsIGh1bmtzLCBsb2FkaW5nXSlcbn1cbiIsICJpbXBvcnQgdHlwZSB7IFN0cnVjdHVyZWRQYXRjaEh1bmsgfSBmcm9tICdkaWZmJ1xuaW1wb3J0IHsgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IEZpbGVFZGl0T3V0cHV0IH0gZnJvbSAnLi4vdG9vbHMvRmlsZUVkaXRUb29sL3R5cGVzLmpzJ1xuaW1wb3J0IHR5cGUgeyBPdXRwdXQgYXMgRmlsZVdyaXRlT3V0cHV0IH0gZnJvbSAnLi4vdG9vbHMvRmlsZVdyaXRlVG9vbC9GaWxlV3JpdGVUb29sLmpzJ1xuaW1wb3J0IHR5cGUgeyBNZXNzYWdlIH0gZnJvbSAnLi4vdHlwZXMvbWVzc2FnZS5qcydcblxuZXhwb3J0IHR5cGUgVHVybkZpbGVEaWZmID0ge1xuICBmaWxlUGF0aDogc3RyaW5nXG4gIGh1bmtzOiBTdHJ1Y3R1cmVkUGF0Y2hIdW5rW11cbiAgaXNOZXdGaWxlOiBib29sZWFuXG4gIGxpbmVzQWRkZWQ6IG51bWJlclxuICBsaW5lc1JlbW92ZWQ6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBUdXJuRGlmZiA9IHtcbiAgdHVybkluZGV4OiBudW1iZXJcbiAgdXNlclByb21wdFByZXZpZXc6IHN0cmluZ1xuICB0aW1lc3RhbXA6IHN0cmluZ1xuICBmaWxlczogTWFwPHN0cmluZywgVHVybkZpbGVEaWZmPlxuICBzdGF0czoge1xuICAgIGZpbGVzQ2hhbmdlZDogbnVtYmVyXG4gICAgbGluZXNBZGRlZDogbnVtYmVyXG4gICAgbGluZXNSZW1vdmVkOiBudW1iZXJcbiAgfVxufVxuXG50eXBlIEZpbGVFZGl0UmVzdWx0ID0gRmlsZUVkaXRPdXRwdXQgfCBGaWxlV3JpdGVPdXRwdXRcblxudHlwZSBUdXJuRGlmZkNhY2hlID0ge1xuICBjb21wbGV0ZWRUdXJuczogVHVybkRpZmZbXVxuICBjdXJyZW50VHVybjogVHVybkRpZmYgfCBudWxsXG4gIGxhc3RQcm9jZXNzZWRJbmRleDogbnVtYmVyXG4gIGxhc3RUdXJuSW5kZXg6IG51bWJlclxufVxuXG5mdW5jdGlvbiBpc0ZpbGVFZGl0UmVzdWx0KHJlc3VsdDogdW5rbm93bik6IHJlc3VsdCBpcyBGaWxlRWRpdFJlc3VsdCB7XG4gIGlmICghcmVzdWx0IHx8IHR5cGVvZiByZXN1bHQgIT09ICdvYmplY3QnKSByZXR1cm4gZmFsc2VcbiAgY29uc3QgciA9IHJlc3VsdCBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAvLyBGaWxlRWRpdFRvb2w6IGhhcyBzdHJ1Y3R1cmVkUGF0Y2ggd2l0aCBjb250ZW50XG4gIC8vIEZpbGVXcml0ZVRvb2wgKHVwZGF0ZSk6IGhhcyBzdHJ1Y3R1cmVkUGF0Y2ggd2l0aCBjb250ZW50XG4gIC8vIEZpbGVXcml0ZVRvb2wgKGNyZWF0ZSk6IGhhcyB0eXBlPSdjcmVhdGUnIGFuZCBjb250ZW50IChzdHJ1Y3R1cmVkUGF0Y2ggaXMgZW1wdHkpXG4gIGNvbnN0IGhhc0ZpbGVQYXRoID0gdHlwZW9mIHIuZmlsZVBhdGggPT09ICdzdHJpbmcnXG4gIGNvbnN0IGhhc1N0cnVjdHVyZWRQYXRjaCA9XG4gICAgQXJyYXkuaXNBcnJheShyLnN0cnVjdHVyZWRQYXRjaCkgJiYgci5zdHJ1Y3R1cmVkUGF0Y2gubGVuZ3RoID4gMFxuICBjb25zdCBpc05ld0ZpbGUgPSByLnR5cGUgPT09ICdjcmVhdGUnICYmIHR5cGVvZiByLmNvbnRlbnQgPT09ICdzdHJpbmcnXG4gIHJldHVybiBoYXNGaWxlUGF0aCAmJiAoaGFzU3RydWN0dXJlZFBhdGNoIHx8IGlzTmV3RmlsZSlcbn1cblxuZnVuY3Rpb24gaXNGaWxlV3JpdGVPdXRwdXQocmVzdWx0OiBGaWxlRWRpdFJlc3VsdCk6IHJlc3VsdCBpcyBGaWxlV3JpdGVPdXRwdXQge1xuICByZXR1cm4gKFxuICAgICd0eXBlJyBpbiByZXN1bHQgJiYgKHJlc3VsdC50eXBlID09PSAnY3JlYXRlJyB8fCByZXN1bHQudHlwZSA9PT0gJ3VwZGF0ZScpXG4gIClcbn1cblxuZnVuY3Rpb24gY291bnRIdW5rTGluZXMoaHVua3M6IFN0cnVjdHVyZWRQYXRjaEh1bmtbXSk6IHtcbiAgYWRkZWQ6IG51bWJlclxuICByZW1vdmVkOiBudW1iZXJcbn0ge1xuICBsZXQgYWRkZWQgPSAwXG4gIGxldCByZW1vdmVkID0gMFxuICBmb3IgKGNvbnN0IGh1bmsgb2YgaHVua3MpIHtcbiAgICBmb3IgKGNvbnN0IGxpbmUgb2YgaHVuay5saW5lcykge1xuICAgICAgaWYgKGxpbmUuc3RhcnRzV2l0aCgnKycpKSBhZGRlZCsrXG4gICAgICBlbHNlIGlmIChsaW5lLnN0YXJ0c1dpdGgoJy0nKSkgcmVtb3ZlZCsrXG4gICAgfVxuICB9XG4gIHJldHVybiB7IGFkZGVkLCByZW1vdmVkIH1cbn1cblxuZnVuY3Rpb24gZ2V0VXNlclByb21wdFByZXZpZXcobWVzc2FnZTogTWVzc2FnZSk6IHN0cmluZyB7XG4gIGlmIChtZXNzYWdlLnR5cGUgIT09ICd1c2VyJykgcmV0dXJuICcnXG4gIGNvbnN0IGNvbnRlbnQgPSBtZXNzYWdlLm1lc3NhZ2UuY29udGVudFxuICBjb25zdCB0ZXh0ID0gdHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnID8gY29udGVudCA6ICcnXG4gIC8vIFRydW5jYXRlIHRvIH4zMCBjaGFyc1xuICBpZiAodGV4dC5sZW5ndGggPD0gMzApIHJldHVybiB0ZXh0XG4gIHJldHVybiB0ZXh0LnNsaWNlKDAsIDI5KSArICdcdTIwMjYnXG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVUdXJuU3RhdHModHVybjogVHVybkRpZmYpOiB2b2lkIHtcbiAgbGV0IHRvdGFsQWRkZWQgPSAwXG4gIGxldCB0b3RhbFJlbW92ZWQgPSAwXG4gIGZvciAoY29uc3QgZmlsZSBvZiB0dXJuLmZpbGVzLnZhbHVlcygpKSB7XG4gICAgdG90YWxBZGRlZCArPSBmaWxlLmxpbmVzQWRkZWRcbiAgICB0b3RhbFJlbW92ZWQgKz0gZmlsZS5saW5lc1JlbW92ZWRcbiAgfVxuICB0dXJuLnN0YXRzID0ge1xuICAgIGZpbGVzQ2hhbmdlZDogdHVybi5maWxlcy5zaXplLFxuICAgIGxpbmVzQWRkZWQ6IHRvdGFsQWRkZWQsXG4gICAgbGluZXNSZW1vdmVkOiB0b3RhbFJlbW92ZWQsXG4gIH1cbn1cblxuLyoqXG4gKiBFeHRyYWN0IHR1cm4tYmFzZWQgZGlmZnMgZnJvbSBtZXNzYWdlcy5cbiAqIEEgdHVybiBpcyBkZWZpbmVkIGFzIGEgdXNlciBwcm9tcHQgZm9sbG93ZWQgYnkgYXNzaXN0YW50IHJlc3BvbnNlcyBhbmQgdG9vbCByZXN1bHRzLlxuICogRWFjaCB0dXJuIHdpdGggZmlsZSBlZGl0cyBpcyBpbmNsdWRlZCBpbiB0aGUgcmVzdWx0LlxuICpcbiAqIFVzZXMgaW5jcmVtZW50YWwgYWNjdW11bGF0aW9uIC0gb25seSBwcm9jZXNzZXMgbmV3IG1lc3NhZ2VzIHNpbmNlIGxhc3QgcmVuZGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlVHVybkRpZmZzKG1lc3NhZ2VzOiBNZXNzYWdlW10pOiBUdXJuRGlmZltdIHtcbiAgY29uc3QgY2FjaGUgPSB1c2VSZWY8VHVybkRpZmZDYWNoZT4oe1xuICAgIGNvbXBsZXRlZFR1cm5zOiBbXSxcbiAgICBjdXJyZW50VHVybjogbnVsbCxcbiAgICBsYXN0UHJvY2Vzc2VkSW5kZXg6IDAsXG4gICAgbGFzdFR1cm5JbmRleDogMCxcbiAgfSlcblxuICByZXR1cm4gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgYyA9IGNhY2hlLmN1cnJlbnRcblxuICAgIC8vIFJlc2V0IGlmIG1lc3NhZ2VzIHNocnVuayAodXNlciByZXdvdW5kIGNvbnZlcnNhdGlvbilcbiAgICBpZiAobWVzc2FnZXMubGVuZ3RoIDwgYy5sYXN0UHJvY2Vzc2VkSW5kZXgpIHtcbiAgICAgIGMuY29tcGxldGVkVHVybnMgPSBbXVxuICAgICAgYy5jdXJyZW50VHVybiA9IG51bGxcbiAgICAgIGMubGFzdFByb2Nlc3NlZEluZGV4ID0gMFxuICAgICAgYy5sYXN0VHVybkluZGV4ID0gMFxuICAgIH1cblxuICAgIC8vIFByb2Nlc3Mgb25seSBuZXcgbWVzc2FnZXNcbiAgICBmb3IgKGxldCBpID0gYy5sYXN0UHJvY2Vzc2VkSW5kZXg7IGkgPCBtZXNzYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IG1lc3NhZ2VzW2ldXG4gICAgICBpZiAoIW1lc3NhZ2UgfHwgbWVzc2FnZS50eXBlICE9PSAndXNlcicpIGNvbnRpbnVlXG5cbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgaXMgYSB1c2VyIHByb21wdCAobm90IGEgdG9vbCByZXN1bHQpXG4gICAgICBjb25zdCBpc1Rvb2xSZXN1bHQgPVxuICAgICAgICBtZXNzYWdlLnRvb2xVc2VSZXN1bHQgfHxcbiAgICAgICAgKEFycmF5LmlzQXJyYXkobWVzc2FnZS5tZXNzYWdlLmNvbnRlbnQpICYmXG4gICAgICAgICAgbWVzc2FnZS5tZXNzYWdlLmNvbnRlbnRbMF0/LnR5cGUgPT09ICd0b29sX3Jlc3VsdCcpXG5cbiAgICAgIGlmICghaXNUb29sUmVzdWx0ICYmICFtZXNzYWdlLmlzTWV0YSkge1xuICAgICAgICAvLyBTdGFydCBhIG5ldyB0dXJuIG9uIHVzZXIgcHJvbXB0XG4gICAgICAgIGlmIChjLmN1cnJlbnRUdXJuICYmIGMuY3VycmVudFR1cm4uZmlsZXMuc2l6ZSA+IDApIHtcbiAgICAgICAgICBjb21wdXRlVHVyblN0YXRzKGMuY3VycmVudFR1cm4pXG4gICAgICAgICAgYy5jb21wbGV0ZWRUdXJucy5wdXNoKGMuY3VycmVudFR1cm4pXG4gICAgICAgIH1cblxuICAgICAgICBjLmxhc3RUdXJuSW5kZXgrK1xuICAgICAgICBjLmN1cnJlbnRUdXJuID0ge1xuICAgICAgICAgIHR1cm5JbmRleDogYy5sYXN0VHVybkluZGV4LFxuICAgICAgICAgIHVzZXJQcm9tcHRQcmV2aWV3OiBnZXRVc2VyUHJvbXB0UHJldmlldyhtZXNzYWdlKSxcbiAgICAgICAgICB0aW1lc3RhbXA6IG1lc3NhZ2UudGltZXN0YW1wLFxuICAgICAgICAgIGZpbGVzOiBuZXcgTWFwKCksXG4gICAgICAgICAgc3RhdHM6IHsgZmlsZXNDaGFuZ2VkOiAwLCBsaW5lc0FkZGVkOiAwLCBsaW5lc1JlbW92ZWQ6IDAgfSxcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjLmN1cnJlbnRUdXJuICYmIG1lc3NhZ2UudG9vbFVzZVJlc3VsdCkge1xuICAgICAgICAvLyBDb2xsZWN0IGZpbGUgZWRpdHMgZnJvbSB0b29sIHJlc3VsdHNcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbWVzc2FnZS50b29sVXNlUmVzdWx0XG4gICAgICAgIGlmIChpc0ZpbGVFZGl0UmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgICAgICBjb25zdCB7IGZpbGVQYXRoLCBzdHJ1Y3R1cmVkUGF0Y2ggfSA9IHJlc3VsdFxuICAgICAgICAgIGNvbnN0IGlzTmV3RmlsZSA9ICd0eXBlJyBpbiByZXN1bHQgJiYgcmVzdWx0LnR5cGUgPT09ICdjcmVhdGUnXG5cbiAgICAgICAgICAvLyBHZXQgb3IgY3JlYXRlIGZpbGUgZW50cnlcbiAgICAgICAgICBsZXQgZmlsZUVudHJ5ID0gYy5jdXJyZW50VHVybi5maWxlcy5nZXQoZmlsZVBhdGgpXG4gICAgICAgICAgaWYgKCFmaWxlRW50cnkpIHtcbiAgICAgICAgICAgIGZpbGVFbnRyeSA9IHtcbiAgICAgICAgICAgICAgZmlsZVBhdGgsXG4gICAgICAgICAgICAgIGh1bmtzOiBbXSxcbiAgICAgICAgICAgICAgaXNOZXdGaWxlLFxuICAgICAgICAgICAgICBsaW5lc0FkZGVkOiAwLFxuICAgICAgICAgICAgICBsaW5lc1JlbW92ZWQ6IDAsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjLmN1cnJlbnRUdXJuLmZpbGVzLnNldChmaWxlUGF0aCwgZmlsZUVudHJ5KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEZvciBuZXcgZmlsZXMsIGdlbmVyYXRlIHN5bnRoZXRpYyBodW5rIGZyb20gY29udGVudFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGlzTmV3RmlsZSAmJlxuICAgICAgICAgICAgc3RydWN0dXJlZFBhdGNoLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgICAgICAgaXNGaWxlV3JpdGVPdXRwdXQocmVzdWx0KVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHJlc3VsdC5jb250ZW50XG4gICAgICAgICAgICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoJ1xcbicpXG4gICAgICAgICAgICBjb25zdCBzeW50aGV0aWNIdW5rOiBTdHJ1Y3R1cmVkUGF0Y2hIdW5rID0ge1xuICAgICAgICAgICAgICBvbGRTdGFydDogMCxcbiAgICAgICAgICAgICAgb2xkTGluZXM6IDAsXG4gICAgICAgICAgICAgIG5ld1N0YXJ0OiAxLFxuICAgICAgICAgICAgICBuZXdMaW5lczogbGluZXMubGVuZ3RoLFxuICAgICAgICAgICAgICBsaW5lczogbGluZXMubWFwKGwgPT4gJysnICsgbCksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaWxlRW50cnkuaHVua3MucHVzaChzeW50aGV0aWNIdW5rKVxuICAgICAgICAgICAgZmlsZUVudHJ5LmxpbmVzQWRkZWQgKz0gbGluZXMubGVuZ3RoXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEFwcGVuZCBodW5rcyAoc2FtZSBmaWxlIG1heSBiZSBlZGl0ZWQgbXVsdGlwbGUgdGltZXMgaW4gYSB0dXJuKVxuICAgICAgICAgICAgZmlsZUVudHJ5Lmh1bmtzLnB1c2goLi4uc3RydWN0dXJlZFBhdGNoKVxuXG4gICAgICAgICAgICAvLyBVcGRhdGUgbGluZSBjb3VudHNcbiAgICAgICAgICAgIGNvbnN0IHsgYWRkZWQsIHJlbW92ZWQgfSA9IGNvdW50SHVua0xpbmVzKHN0cnVjdHVyZWRQYXRjaClcbiAgICAgICAgICAgIGZpbGVFbnRyeS5saW5lc0FkZGVkICs9IGFkZGVkXG4gICAgICAgICAgICBmaWxlRW50cnkubGluZXNSZW1vdmVkICs9IHJlbW92ZWRcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBJZiBmaWxlIHdhcyBjcmVhdGVkIGFuZCB0aGVuIGVkaXRlZCwgaXQncyBzdGlsbCBhIG5ldyBmaWxlXG4gICAgICAgICAgaWYgKGlzTmV3RmlsZSkge1xuICAgICAgICAgICAgZmlsZUVudHJ5LmlzTmV3RmlsZSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjLmxhc3RQcm9jZXNzZWRJbmRleCA9IG1lc3NhZ2VzLmxlbmd0aFxuXG4gICAgLy8gQnVpbGQgcmVzdWx0OiBjb21wbGV0ZWQgdHVybnMgKyBjdXJyZW50IHR1cm4gaWYgaXQgaGFzIGZpbGVzXG4gICAgY29uc3QgcmVzdWx0ID0gWy4uLmMuY29tcGxldGVkVHVybnNdXG4gICAgaWYgKGMuY3VycmVudFR1cm4gJiYgYy5jdXJyZW50VHVybi5maWxlcy5zaXplID4gMCkge1xuICAgICAgLy8gQ29tcHV0ZSBzdGF0cyBmb3IgY3VycmVudCB0dXJuIGJlZm9yZSBpbmNsdWRpbmdcbiAgICAgIGNvbXB1dGVUdXJuU3RhdHMoYy5jdXJyZW50VHVybilcbiAgICAgIHJlc3VsdC5wdXNoKGMuY3VycmVudFR1cm4pXG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGluIHJldmVyc2Ugb3JkZXIgKG1vc3QgcmVjZW50IGZpcnN0KVxuICAgIHJldHVybiByZXN1bHQucmV2ZXJzZSgpXG4gIH0sIFttZXNzYWdlc10pXG59XG4iLCAiaW1wb3J0IHR5cGUgeyBTdHJ1Y3R1cmVkUGF0Y2hIdW5rIH0gZnJvbSAnZGlmZidcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRlcm1pbmFsU2l6ZSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVRlcm1pbmFsU2l6ZS5qcydcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7IGdldEN3ZCB9IGZyb20gJy4uLy4uL3V0aWxzL2N3ZC5qcydcbmltcG9ydCB7IHJlYWRGaWxlU2FmZSB9IGZyb20gJy4uLy4uL3V0aWxzL2ZpbGUuanMnXG5pbXBvcnQgeyBEaXZpZGVyIH0gZnJvbSAnLi4vZGVzaWduLXN5c3RlbS9EaXZpZGVyLmpzJ1xuaW1wb3J0IHsgU3RydWN0dXJlZERpZmYgfSBmcm9tICcuLi9TdHJ1Y3R1cmVkRGlmZi5qcydcblxudHlwZSBQcm9wcyA9IHtcbiAgZmlsZVBhdGg6IHN0cmluZ1xuICBodW5rczogU3RydWN0dXJlZFBhdGNoSHVua1tdXG4gIGlzTGFyZ2VGaWxlPzogYm9vbGVhblxuICBpc0JpbmFyeT86IGJvb2xlYW5cbiAgaXNUcnVuY2F0ZWQ/OiBib29sZWFuXG4gIGlzVW50cmFja2VkPzogYm9vbGVhblxufVxuXG4vKipcbiAqIERpc3BsYXlzIHRoZSBkaWZmIGNvbnRlbnQgZm9yIGEgc2luZ2xlIGZpbGUuXG4gKiBVc2VzIFN0cnVjdHVyZWREaWZmIGZvciB3b3JkLWxldmVsIGRpZmZpbmcgYW5kIHN5bnRheCBoaWdobGlnaHRpbmcuXG4gKiBObyBzY3JvbGxpbmcgLSByZW5kZXJzIGFsbCBsaW5lcyAobWF4IDQwMCBkdWUgdG8gcGFyc2luZyBsaW1pdHMpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gRGlmZkRldGFpbFZpZXcoe1xuICBmaWxlUGF0aCxcbiAgaHVua3MsXG4gIGlzTGFyZ2VGaWxlLFxuICBpc0JpbmFyeSxcbiAgaXNUcnVuY2F0ZWQsXG4gIGlzVW50cmFja2VkLFxufTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCB7IGNvbHVtbnMgfSA9IHVzZVRlcm1pbmFsU2l6ZSgpXG5cbiAgLy8gUmVhZCBmaWxlIGNvbnRlbnQgZm9yIHN5bnRheCBkZXRlY3Rpb24gYW5kIG11bHRpbGluZSBjb25zdHJ1Y3QgaGFuZGxpbmcuXG4gIC8vIE9ubHkgY29tcHV0ZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZCAoZGV0YWlsIHZpZXcgbW9kZSkuXG4gIGNvbnN0IHsgZmlyc3RMaW5lLCBmaWxlQ29udGVudCB9ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKCFmaWxlUGF0aCkge1xuICAgICAgcmV0dXJuIHsgZmlyc3RMaW5lOiBudWxsLCBmaWxlQ29udGVudDogdW5kZWZpbmVkIH1cbiAgICB9XG4gICAgY29uc3QgZnVsbFBhdGggPSByZXNvbHZlKGdldEN3ZCgpLCBmaWxlUGF0aClcbiAgICBjb25zdCBjb250ZW50ID0gcmVhZEZpbGVTYWZlKGZ1bGxQYXRoKVxuICAgIHJldHVybiB7XG4gICAgICBmaXJzdExpbmU6IGNvbnRlbnQ/LnNwbGl0KCdcXG4nKVswXSA/PyBudWxsLFxuICAgICAgZmlsZUNvbnRlbnQ6IGNvbnRlbnQgPz8gdW5kZWZpbmVkLFxuICAgIH1cbiAgfSwgW2ZpbGVQYXRoXSlcblxuICAvLyBIYW5kbGUgdW50cmFja2VkIGZpbGVzXG4gIGlmIChpc1VudHJhY2tlZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8VGV4dCBib2xkPntmaWxlUGF0aH08L1RleHQ+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+ICh1bnRyYWNrZWQpPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPERpdmlkZXIgcGFkZGluZz17NH0gLz5cbiAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3IgaXRhbGljPlxuICAgICAgICAgICAgTmV3IGZpbGUgbm90IHlldCBzdGFnZWQuXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yIGl0YWxpYz5cbiAgICAgICAgICAgIFJ1biBgZ2l0IGFkZCB7ZmlsZVBhdGh9YCB0byBzZWUgbGluZSBjb3VudHMuXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxuXG4gIC8vIEhhbmRsZSBiaW5hcnkgZmlsZXNcbiAgaWYgKGlzQmluYXJ5KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxUZXh0IGJvbGQ+e2ZpbGVQYXRofTwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxEaXZpZGVyIHBhZGRpbmc9ezR9IC8+XG4gICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yIGl0YWxpYz5cbiAgICAgICAgICAgIEJpbmFyeSBmaWxlIC0gY2Fubm90IGRpc3BsYXkgZGlmZlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICAvLyBIYW5kbGUgbGFyZ2UgZmlsZXNcbiAgaWYgKGlzTGFyZ2VGaWxlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxUZXh0IGJvbGQ+e2ZpbGVQYXRofTwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxEaXZpZGVyIHBhZGRpbmc9ezR9IC8+XG4gICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yIGl0YWxpYz5cbiAgICAgICAgICAgIExhcmdlIGZpbGUgLSBkaWZmIGV4Y2VlZHMgMSBNQiBsaW1pdFxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICBjb25zdCBvdXRlclBhZGRpbmdYID0gMVxuICBjb25zdCBvdXRlckJvcmRlcldpZHRoID0gMVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICA8Qm94PlxuICAgICAgICA8VGV4dCBib2xkPntmaWxlUGF0aH08L1RleHQ+XG4gICAgICAgIHtpc1RydW5jYXRlZCAmJiA8VGV4dCBkaW1Db2xvcj4gKHRydW5jYXRlZCk8L1RleHQ+fVxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxEaXZpZGVyIHBhZGRpbmc9ezR9IC8+XG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAge2h1bmtzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5ObyBkaWZmIGNvbnRlbnQ8L1RleHQ+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgaHVua3MubWFwKChodW5rLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFN0cnVjdHVyZWREaWZmXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIHBhdGNoPXtodW5rfVxuICAgICAgICAgICAgICBmaWxlUGF0aD17ZmlsZVBhdGh9XG4gICAgICAgICAgICAgIGZpcnN0TGluZT17Zmlyc3RMaW5lfVxuICAgICAgICAgICAgICBmaWxlQ29udGVudD17ZmlsZUNvbnRlbnR9XG4gICAgICAgICAgICAgIGRpbT17ZmFsc2V9XG4gICAgICAgICAgICAgIHdpZHRoPXtjb2x1bW5zIC0gMiAqIG91dGVyUGFkZGluZ1ggLSAyICogb3V0ZXJCb3JkZXJXaWR0aH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSlcbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuXG4gICAgICB7aXNUcnVuY2F0ZWQgJiYgKFxuICAgICAgICA8VGV4dCBkaW1Db2xvciBpdGFsaWM+XG4gICAgICAgICAg4oCmIGRpZmYgdHJ1bmNhdGVkIChleGNlZWRlZCA0MDAgbGluZSBsaW1pdClcbiAgICAgICAgPC9UZXh0PlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKVxufVxuIiwgImltcG9ydCBmaWd1cmVzIGZyb20gJ2ZpZ3VyZXMnXG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBEaWZmRmlsZSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZURpZmZEYXRhLmpzJ1xuaW1wb3J0IHsgdXNlVGVybWluYWxTaXplIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlVGVybWluYWxTaXplLmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdHJ1bmNhdGVTdGFydFRvV2lkdGggfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQuanMnXG5pbXBvcnQgeyBwbHVyYWwgfSBmcm9tICcuLi8uLi91dGlscy9zdHJpbmdVdGlscy5qcydcblxuY29uc3QgTUFYX1ZJU0lCTEVfRklMRVMgPSA1XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGZpbGVzOiBEaWZmRmlsZVtdXG4gIHNlbGVjdGVkSW5kZXg6IG51bWJlclxufVxuXG5leHBvcnQgZnVuY3Rpb24gRGlmZkZpbGVMaXN0KHsgZmlsZXMsIHNlbGVjdGVkSW5kZXggfTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCB7IGNvbHVtbnMgfSA9IHVzZVRlcm1pbmFsU2l6ZSgpXG5cbiAgLy8gQ2FsY3VsYXRlIHNjcm9sbCB3aW5kb3cgLSBtdXN0IGJlIGJlZm9yZSBlYXJseSByZXR1cm4gZm9yIGhvb2tzIHJ1bGVzXG4gIGNvbnN0IHsgc3RhcnRJbmRleCwgZW5kSW5kZXggfSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChmaWxlcy5sZW5ndGggPT09IDAgfHwgZmlsZXMubGVuZ3RoIDw9IE1BWF9WSVNJQkxFX0ZJTEVTKSB7XG4gICAgICByZXR1cm4geyBzdGFydEluZGV4OiAwLCBlbmRJbmRleDogZmlsZXMubGVuZ3RoIH1cbiAgICB9XG5cbiAgICAvLyBLZWVwIHNlbGVjdGVkIGl0ZW0gcm91Z2hseSBpbiB0aGUgbWlkZGxlXG4gICAgbGV0IHN0YXJ0ID0gTWF0aC5tYXgoMCwgc2VsZWN0ZWRJbmRleCAtIE1hdGguZmxvb3IoTUFYX1ZJU0lCTEVfRklMRVMgLyAyKSlcbiAgICBsZXQgZW5kID0gc3RhcnQgKyBNQVhfVklTSUJMRV9GSUxFU1xuXG4gICAgLy8gQWRqdXN0IGlmIHdlJ3JlIGF0IHRoZSBlbmRcbiAgICBpZiAoZW5kID4gZmlsZXMubGVuZ3RoKSB7XG4gICAgICBlbmQgPSBmaWxlcy5sZW5ndGhcbiAgICAgIHN0YXJ0ID0gTWF0aC5tYXgoMCwgZW5kIC0gTUFYX1ZJU0lCTEVfRklMRVMpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3RhcnRJbmRleDogc3RhcnQsIGVuZEluZGV4OiBlbmQgfVxuICB9LCBbZmlsZXMubGVuZ3RoLCBzZWxlY3RlZEluZGV4XSlcblxuICBpZiAoZmlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIDxUZXh0IGRpbUNvbG9yPk5vIGNoYW5nZWQgZmlsZXM8L1RleHQ+XG4gIH1cblxuICBjb25zdCB2aXNpYmxlRmlsZXMgPSBmaWxlcy5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleClcbiAgY29uc3QgaGFzTW9yZUFib3ZlID0gc3RhcnRJbmRleCA+IDBcbiAgY29uc3QgaGFzTW9yZUJlbG93ID0gZW5kSW5kZXggPCBmaWxlcy5sZW5ndGhcbiAgY29uc3QgbmVlZHNQYWdpbmF0aW9uID0gZmlsZXMubGVuZ3RoID4gTUFYX1ZJU0lCTEVfRklMRVNcblxuICBjb25zdCBzdGF0c1dpZHRoID0gMTZcbiAgY29uc3QgcG9pbnRlcldpZHRoID0gM1xuICBjb25zdCBtYXhQYXRoV2lkdGggPSBNYXRoLm1heCgyMCwgY29sdW1ucyAtIHN0YXRzV2lkdGggLSBwb2ludGVyV2lkdGggLSA0KVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICB7bmVlZHNQYWdpbmF0aW9uICYmIChcbiAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAge2hhc01vcmVBYm92ZVxuICAgICAgICAgICAgPyBgIOKGkSAke3N0YXJ0SW5kZXh9IG1vcmUgJHtwbHVyYWwoc3RhcnRJbmRleCwgJ2ZpbGUnKX1gXG4gICAgICAgICAgICA6ICcgJ31cbiAgICAgICAgPC9UZXh0PlxuICAgICAgKX1cbiAgICAgIHt2aXNpYmxlRmlsZXMubWFwKChmaWxlLCBpbmRleCkgPT4gKFxuICAgICAgICA8RmlsZUl0ZW1cbiAgICAgICAgICBrZXk9e2ZpbGUucGF0aH1cbiAgICAgICAgICBmaWxlPXtmaWxlfVxuICAgICAgICAgIGlzU2VsZWN0ZWQ9e3N0YXJ0SW5kZXggKyBpbmRleCA9PT0gc2VsZWN0ZWRJbmRleH1cbiAgICAgICAgICBtYXhQYXRoV2lkdGg9e21heFBhdGhXaWR0aH1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgICAge25lZWRzUGFnaW5hdGlvbiAmJiAoXG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgIHtoYXNNb3JlQmVsb3dcbiAgICAgICAgICAgID8gYCDihpMgJHtmaWxlcy5sZW5ndGggLSBlbmRJbmRleH0gbW9yZSAke3BsdXJhbChmaWxlcy5sZW5ndGggLSBlbmRJbmRleCwgJ2ZpbGUnKX1gXG4gICAgICAgICAgICA6ICcgJ31cbiAgICAgICAgPC9UZXh0PlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKVxufVxuXG5mdW5jdGlvbiBGaWxlSXRlbSh7XG4gIGZpbGUsXG4gIGlzU2VsZWN0ZWQsXG4gIG1heFBhdGhXaWR0aCxcbn06IHtcbiAgZmlsZTogRGlmZkZpbGVcbiAgaXNTZWxlY3RlZDogYm9vbGVhblxuICBtYXhQYXRoV2lkdGg6IG51bWJlclxufSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IGRpc3BsYXlQYXRoID0gdHJ1bmNhdGVTdGFydFRvV2lkdGgoZmlsZS5wYXRoLCBtYXhQYXRoV2lkdGgpXG5cbiAgY29uc3QgcG9pbnRlciA9IGlzU2VsZWN0ZWQgPyBmaWd1cmVzLnBvaW50ZXIgKyAnICcgOiAnICAnXG4gIGNvbnN0IGxpbmUgPSBgJHtwb2ludGVyfSR7ZGlzcGxheVBhdGh9YFxuXG4gIHJldHVybiAoXG4gICAgPEJveCBmbGV4RGlyZWN0aW9uPVwicm93XCI+XG4gICAgICA8VGV4dFxuICAgICAgICBib2xkPXtpc1NlbGVjdGVkfVxuICAgICAgICBjb2xvcj17aXNTZWxlY3RlZCA/ICdiYWNrZ3JvdW5kJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgaW52ZXJzZT17aXNTZWxlY3RlZH1cbiAgICAgID5cbiAgICAgICAge2xpbmV9XG4gICAgICA8L1RleHQ+XG4gICAgICA8Qm94IGZsZXhHcm93PXsxfSAvPlxuICAgICAgPEZpbGVTdGF0cyBmaWxlPXtmaWxlfSBpc1NlbGVjdGVkPXtpc1NlbGVjdGVkfSAvPlxuICAgIDwvQm94PlxuICApXG59XG5cbmZ1bmN0aW9uIEZpbGVTdGF0cyh7XG4gIGZpbGUsXG4gIGlzU2VsZWN0ZWQsXG59OiB7XG4gIGZpbGU6IERpZmZGaWxlXG4gIGlzU2VsZWN0ZWQ6IGJvb2xlYW5cbn0pOiBSZWFjdC5SZWFjdE5vZGUge1xuICBpZiAoZmlsZS5pc1VudHJhY2tlZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8VGV4dCBkaW1Db2xvcj17IWlzU2VsZWN0ZWR9IGl0YWxpYz5cbiAgICAgICAgdW50cmFja2VkXG4gICAgICA8L1RleHQ+XG4gICAgKVxuICB9XG4gIGlmIChmaWxlLmlzQmluYXJ5KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXh0IGRpbUNvbG9yPXshaXNTZWxlY3RlZH0gaXRhbGljPlxuICAgICAgICBCaW5hcnkgZmlsZVxuICAgICAgPC9UZXh0PlxuICAgIClcbiAgfVxuICBpZiAoZmlsZS5pc0xhcmdlRmlsZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8VGV4dCBkaW1Db2xvcj17IWlzU2VsZWN0ZWR9IGl0YWxpYz5cbiAgICAgICAgTGFyZ2UgZmlsZSBtb2RpZmllZFxuICAgICAgPC9UZXh0PlxuICAgIClcbiAgfVxuICAvLyBOb3JtYWwgb3IgdHJ1bmNhdGVkIGZpbGUgLSBzaG93IGxpbmUgY291bnRzXG4gIHJldHVybiAoXG4gICAgPFRleHQ+XG4gICAgICB7ZmlsZS5saW5lc0FkZGVkID4gMCAmJiAoXG4gICAgICAgIDxUZXh0IGNvbG9yPVwiZGlmZkFkZGVkV29yZFwiIGJvbGQ9e2lzU2VsZWN0ZWR9PlxuICAgICAgICAgICt7ZmlsZS5saW5lc0FkZGVkfVxuICAgICAgICA8L1RleHQ+XG4gICAgICApfVxuICAgICAge2ZpbGUubGluZXNBZGRlZCA+IDAgJiYgZmlsZS5saW5lc1JlbW92ZWQgPiAwICYmICcgJ31cbiAgICAgIHtmaWxlLmxpbmVzUmVtb3ZlZCA+IDAgJiYgKFxuICAgICAgICA8VGV4dCBjb2xvcj1cImRpZmZSZW1vdmVkV29yZFwiIGJvbGQ9e2lzU2VsZWN0ZWR9PlxuICAgICAgICAgIC17ZmlsZS5saW5lc1JlbW92ZWR9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICl9XG4gICAgICB7ZmlsZS5pc1RydW5jYXRlZCAmJiA8VGV4dCBkaW1Db2xvcj17IWlzU2VsZWN0ZWR9PiAodHJ1bmNhdGVkKTwvVGV4dD59XG4gICAgPC9UZXh0PlxuICApXG59XG4iLCAiaW1wb3J0IHR5cGUgeyBTdHJ1Y3R1cmVkUGF0Y2hIdW5rIH0gZnJvbSAnZGlmZidcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgQ29tbWFuZFJlc3VsdERpc3BsYXkgfSBmcm9tICcuLi8uLi9jb21tYW5kcy5qcydcbmltcG9ydCB7IHVzZVJlZ2lzdGVyT3ZlcmxheSB9IGZyb20gJy4uLy4uL2NvbnRleHQvb3ZlcmxheUNvbnRleHQuanMnXG5pbXBvcnQgeyB0eXBlIERpZmZEYXRhLCB1c2VEaWZmRGF0YSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZURpZmZEYXRhLmpzJ1xuaW1wb3J0IHsgdHlwZSBUdXJuRGlmZiwgdXNlVHVybkRpZmZzIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlVHVybkRpZmZzLmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdXNlS2V5YmluZGluZ3MgfSBmcm9tICcuLi8uLi9rZXliaW5kaW5ncy91c2VLZXliaW5kaW5nLmpzJ1xuaW1wb3J0IHsgdXNlU2hvcnRjdXREaXNwbGF5IH0gZnJvbSAnLi4vLi4va2V5YmluZGluZ3MvdXNlU2hvcnRjdXREaXNwbGF5LmpzJ1xuaW1wb3J0IHR5cGUgeyBNZXNzYWdlIH0gZnJvbSAnLi4vLi4vdHlwZXMvbWVzc2FnZS5qcydcbmltcG9ydCB7IHBsdXJhbCB9IGZyb20gJy4uLy4uL3V0aWxzL3N0cmluZ1V0aWxzLmpzJ1xuaW1wb3J0IHsgQnlsaW5lIH0gZnJvbSAnLi4vZGVzaWduLXN5c3RlbS9CeWxpbmUuanMnXG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICcuLi9kZXNpZ24tc3lzdGVtL0RpYWxvZy5qcydcbmltcG9ydCB7IERpZmZEZXRhaWxWaWV3IH0gZnJvbSAnLi9EaWZmRGV0YWlsVmlldy5qcydcbmltcG9ydCB7IERpZmZGaWxlTGlzdCB9IGZyb20gJy4vRGlmZkZpbGVMaXN0LmpzJ1xuXG50eXBlIFByb3BzID0ge1xuICBtZXNzYWdlczogTWVzc2FnZVtdXG4gIG9uRG9uZTogKFxuICAgIHJlc3VsdD86IHN0cmluZyxcbiAgICBvcHRpb25zPzogeyBkaXNwbGF5PzogQ29tbWFuZFJlc3VsdERpc3BsYXkgfSxcbiAgKSA9PiB2b2lkXG59XG5cbnR5cGUgVmlld01vZGUgPSAnbGlzdCcgfCAnZGV0YWlsJ1xuXG50eXBlIERpZmZTb3VyY2UgPSB7IHR5cGU6ICdjdXJyZW50JyB9IHwgeyB0eXBlOiAndHVybic7IHR1cm46IFR1cm5EaWZmIH1cblxuZnVuY3Rpb24gdHVybkRpZmZUb0RpZmZEYXRhKHR1cm46IFR1cm5EaWZmKTogRGlmZkRhdGEge1xuICBjb25zdCBmaWxlcyA9IEFycmF5LmZyb20odHVybi5maWxlcy52YWx1ZXMoKSlcbiAgICAubWFwKGYgPT4gKHtcbiAgICAgIHBhdGg6IGYuZmlsZVBhdGgsXG4gICAgICBsaW5lc0FkZGVkOiBmLmxpbmVzQWRkZWQsXG4gICAgICBsaW5lc1JlbW92ZWQ6IGYubGluZXNSZW1vdmVkLFxuICAgICAgaXNCaW5hcnk6IGZhbHNlLFxuICAgICAgaXNMYXJnZUZpbGU6IGZhbHNlLFxuICAgICAgaXNUcnVuY2F0ZWQ6IGZhbHNlLFxuICAgICAgaXNOZXdGaWxlOiBmLmlzTmV3RmlsZSxcbiAgICB9KSlcbiAgICAuc29ydCgoYSwgYikgPT4gYS5wYXRoLmxvY2FsZUNvbXBhcmUoYi5wYXRoKSlcblxuICBjb25zdCBodW5rcyA9IG5ldyBNYXA8c3RyaW5nLCBTdHJ1Y3R1cmVkUGF0Y2hIdW5rW10+KClcbiAgZm9yIChjb25zdCBmIG9mIHR1cm4uZmlsZXMudmFsdWVzKCkpIHtcbiAgICBodW5rcy5zZXQoZi5maWxlUGF0aCwgZi5odW5rcylcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3RhdHM6IHtcbiAgICAgIGZpbGVzQ291bnQ6IHR1cm4uc3RhdHMuZmlsZXNDaGFuZ2VkLFxuICAgICAgbGluZXNBZGRlZDogdHVybi5zdGF0cy5saW5lc0FkZGVkLFxuICAgICAgbGluZXNSZW1vdmVkOiB0dXJuLnN0YXRzLmxpbmVzUmVtb3ZlZCxcbiAgICB9LFxuICAgIGZpbGVzLFxuICAgIGh1bmtzLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBEaWZmRGlhbG9nKHsgbWVzc2FnZXMsIG9uRG9uZSB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IGdpdERpZmZEYXRhID0gdXNlRGlmZkRhdGEoKVxuICBjb25zdCB0dXJuRGlmZnMgPSB1c2VUdXJuRGlmZnMobWVzc2FnZXMpXG5cbiAgY29uc3QgW3ZpZXdNb2RlLCBzZXRWaWV3TW9kZV0gPSB1c2VTdGF0ZTxWaWV3TW9kZT4oJ2xpc3QnKVxuICBjb25zdCBbc2VsZWN0ZWRJbmRleCwgc2V0U2VsZWN0ZWRJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXG4gIGNvbnN0IFtzb3VyY2VJbmRleCwgc2V0U291cmNlSW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPigwKVxuXG4gIGNvbnN0IHNvdXJjZXM6IERpZmZTb3VyY2VbXSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gW1xuICAgICAgeyB0eXBlOiAnY3VycmVudCcgfSxcbiAgICAgIC4uLnR1cm5EaWZmcy5tYXAoKHR1cm4pOiBEaWZmU291cmNlID0+ICh7IHR5cGU6ICd0dXJuJywgdHVybiB9KSksXG4gICAgXSxcbiAgICBbdHVybkRpZmZzXSxcbiAgKVxuXG4gIGNvbnN0IGN1cnJlbnRTb3VyY2UgPSBzb3VyY2VzW3NvdXJjZUluZGV4XVxuICBjb25zdCBjdXJyZW50VHVybiA9IGN1cnJlbnRTb3VyY2U/LnR5cGUgPT09ICd0dXJuJyA/IGN1cnJlbnRTb3VyY2UudHVybiA6IG51bGxcblxuICBjb25zdCBkaWZmRGF0YSA9IHVzZU1lbW8oKCk6IERpZmZEYXRhID0+IHtcbiAgICByZXR1cm4gY3VycmVudFR1cm4gPyB0dXJuRGlmZlRvRGlmZkRhdGEoY3VycmVudFR1cm4pIDogZ2l0RGlmZkRhdGFcbiAgfSwgW2N1cnJlbnRUdXJuLCBnaXREaWZmRGF0YV0pXG5cbiAgY29uc3Qgc2VsZWN0ZWRGaWxlID0gZGlmZkRhdGEuZmlsZXNbc2VsZWN0ZWRJbmRleF1cbiAgY29uc3Qgc2VsZWN0ZWRIdW5rcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBzZWxlY3RlZEZpbGUgPyBkaWZmRGF0YS5odW5rcy5nZXQoc2VsZWN0ZWRGaWxlLnBhdGgpIHx8IFtdIDogW11cbiAgfSwgW3NlbGVjdGVkRmlsZSwgZGlmZkRhdGEuaHVua3NdKVxuXG4gIC8vIENsYW1wIHNvdXJjZUluZGV4IHdoZW4gc291cmNlcyBzaHJpbmsgKGUuZy4sIGNvbnZlcnNhdGlvbiByZXdpbmQpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNvdXJjZUluZGV4ID49IHNvdXJjZXMubGVuZ3RoKSB7XG4gICAgICBzZXRTb3VyY2VJbmRleChNYXRoLm1heCgwLCBzb3VyY2VzLmxlbmd0aCAtIDEpKVxuICAgIH1cbiAgfSwgW3NvdXJjZXMubGVuZ3RoLCBzb3VyY2VJbmRleF0pXG5cbiAgLy8gUmVzZXQgZmlsZSBzZWxlY3Rpb24gd2hlbiBzb3VyY2UgY2hhbmdlc1xuICBjb25zdCBwcmV2U291cmNlSW5kZXggPSB1c2VSZWYoc291cmNlSW5kZXgpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByZXZTb3VyY2VJbmRleC5jdXJyZW50ICE9PSBzb3VyY2VJbmRleCkge1xuICAgICAgc2V0U2VsZWN0ZWRJbmRleCgwKVxuICAgICAgcHJldlNvdXJjZUluZGV4LmN1cnJlbnQgPSBzb3VyY2VJbmRleFxuICAgIH1cbiAgfSwgW3NvdXJjZUluZGV4XSlcblxuICAvLyBSZWdpc3RlciBhcyBtb2RhbCBvdmVybGF5IHNvIENoYXQga2V5YmluZGluZ3MgYW5kIENhbmNlbFJlcXVlc3RIYW5kbGVyXG4gIC8vIGFyZSBkaXNhYmxlZCB3aGlsZSBEaWZmRGlhbG9nIGlzIHNob3dpbmdcbiAgdXNlUmVnaXN0ZXJPdmVybGF5KCdkaWZmLWRpYWxvZycpXG5cbiAgLy8gRGlmZiBkaWFsb2cgbmF2aWdhdGlvbiBrZXliaW5kaW5nc1xuICAvLyBWaWV3LW1vZGUgZGVwZW5kZW50OiBsZWZ0L3JpZ2h0IGFycm93cyBoYXZlIGRpZmZlcmVudCBiZWhhdmlvciBiYXNlZCBvbiBtb2RlXG4gIC8vIChzb3VyY2UgdGFiIHN3aXRjaGluZyB2cyBiYWNrIG5hdmlnYXRpb24pLCBhbmQgdXAvZG93bi9lbnRlciBhcmVcbiAgLy8gY29udGV4dC1zZW5zaXRpdmUgdG8gdmlld01vZGVcbiAgLy9cbiAgLy8gTm90ZTogRXNjYXBlIGhhbmRsaW5nIChkaWZmOmRpc21pc3MpIGlzIE5PVCByZWdpc3RlcmVkIGhlcmUgYmVjYXVzZSBEaWFsb2cnc1xuICAvLyBidWlsdC1pbiB1c2VLZXliaW5kaW5nKCdjb25maXJtOm5vJywgaGFuZGxlQ2FuY2VsKSBhbHJlYWR5IGhhbmRsZXMgaXQuXG4gIC8vIEhhdmluZyBib3RoIHdvdWxkIGJlIGRlYWQgY29kZSBzaW5jZSBEaWFsb2cncyBjaGlsZCBlZmZlY3QgcmVnaXN0ZXJzIGZpcnN0XG4gIC8vIGFuZCBjYWxscyBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKS4gVGhlIGRpZmY6ZGlzbWlzcyBiaW5kaW5nIGluXG4gIC8vIGRlZmF1bHRCaW5kaW5ncy50cyBpcyBrZXB0IGZvciB1c2VTaG9ydGN1dERpc3BsYXkgdG8gc2hvdyB0aGUgXCJlc2MgY2xvc2VcIiBoaW50LlxuICB1c2VLZXliaW5kaW5ncyhcbiAgICB7XG4gICAgICAvLyBMZWZ0IGFycm93OiBpbiBkZXRhaWwgbW9kZSBnb2VzIGJhY2ssIGluIGxpc3QgbW9kZSBzd2l0Y2hlcyBzb3VyY2VcbiAgICAgICdkaWZmOnByZXZpb3VzU291cmNlJzogKCkgPT4ge1xuICAgICAgICBpZiAodmlld01vZGUgPT09ICdkZXRhaWwnKSB7XG4gICAgICAgICAgc2V0Vmlld01vZGUoJ2xpc3QnKVxuICAgICAgICB9IGVsc2UgaWYgKHZpZXdNb2RlID09PSAnbGlzdCcgJiYgc291cmNlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgc2V0U291cmNlSW5kZXgocHJldiA9PiBNYXRoLm1heCgwLCBwcmV2IC0gMSkpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnZGlmZjpuZXh0U291cmNlJzogKCkgPT4ge1xuICAgICAgICBpZiAodmlld01vZGUgPT09ICdsaXN0JyAmJiBzb3VyY2VzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBzZXRTb3VyY2VJbmRleChwcmV2ID0+IE1hdGgubWluKHNvdXJjZXMubGVuZ3RoIC0gMSwgcHJldiArIDEpKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJ2RpZmY6YmFjayc6ICgpID0+IHtcbiAgICAgICAgaWYgKHZpZXdNb2RlID09PSAnZGV0YWlsJykge1xuICAgICAgICAgIHNldFZpZXdNb2RlKCdsaXN0JylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICdkaWZmOnZpZXdEZXRhaWxzJzogKCkgPT4ge1xuICAgICAgICBpZiAodmlld01vZGUgPT09ICdsaXN0JyAmJiBzZWxlY3RlZEZpbGUpIHtcbiAgICAgICAgICBzZXRWaWV3TW9kZSgnZGV0YWlsJylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICdkaWZmOnByZXZpb3VzRmlsZSc6ICgpID0+IHtcbiAgICAgICAgaWYgKHZpZXdNb2RlID09PSAnbGlzdCcpIHtcbiAgICAgICAgICBzZXRTZWxlY3RlZEluZGV4KHByZXYgPT4gTWF0aC5tYXgoMCwgcHJldiAtIDEpKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJ2RpZmY6bmV4dEZpbGUnOiAoKSA9PiB7XG4gICAgICAgIGlmICh2aWV3TW9kZSA9PT0gJ2xpc3QnKSB7XG4gICAgICAgICAgc2V0U2VsZWN0ZWRJbmRleChwcmV2ID0+XG4gICAgICAgICAgICBNYXRoLm1pbihkaWZmRGF0YS5maWxlcy5sZW5ndGggLSAxLCBwcmV2ICsgMSksXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gICAgeyBjb250ZXh0OiAnRGlmZkRpYWxvZycgfSxcbiAgKVxuXG4gIGNvbnN0IHN1YnRpdGxlID0gZGlmZkRhdGEuc3RhdHMgPyAoXG4gICAgPFRleHQgZGltQ29sb3I+XG4gICAgICB7ZGlmZkRhdGEuc3RhdHMuZmlsZXNDb3VudH0ge3BsdXJhbChkaWZmRGF0YS5zdGF0cy5maWxlc0NvdW50LCAnZmlsZScpfXsnICd9XG4gICAgICBjaGFuZ2VkXG4gICAgICB7ZGlmZkRhdGEuc3RhdHMubGluZXNBZGRlZCA+IDAgJiYgKFxuICAgICAgICA8VGV4dCBjb2xvcj1cImRpZmZBZGRlZFdvcmRcIj4gK3tkaWZmRGF0YS5zdGF0cy5saW5lc0FkZGVkfTwvVGV4dD5cbiAgICAgICl9XG4gICAgICB7ZGlmZkRhdGEuc3RhdHMubGluZXNSZW1vdmVkID4gMCAmJiAoXG4gICAgICAgIDxUZXh0IGNvbG9yPVwiZGlmZlJlbW92ZWRXb3JkXCI+IC17ZGlmZkRhdGEuc3RhdHMubGluZXNSZW1vdmVkfTwvVGV4dD5cbiAgICAgICl9XG4gICAgPC9UZXh0PlxuICApIDogbnVsbFxuXG4gIC8vIEJ1aWxkIGhlYWRlciBiYXNlZCBvbiBjdXJyZW50IHNvdXJjZVxuICBjb25zdCBoZWFkZXJUaXRsZSA9IGN1cnJlbnRUdXJuXG4gICAgPyBgVHVybiAke2N1cnJlbnRUdXJuLnR1cm5JbmRleH1gXG4gICAgOiAnVW5jb21taXR0ZWQgY2hhbmdlcydcbiAgY29uc3QgaGVhZGVyU3VidGl0bGUgPSBjdXJyZW50VHVyblxuICAgID8gY3VycmVudFR1cm4udXNlclByb21wdFByZXZpZXdcbiAgICAgID8gYFwiJHtjdXJyZW50VHVybi51c2VyUHJvbXB0UHJldmlld31cImBcbiAgICAgIDogJydcbiAgICA6ICcoZ2l0IGRpZmYgSEVBRCknXG5cbiAgLy8gU291cmNlIHNlbGVjdG9yIHBpbGxzXG4gIGNvbnN0IHNvdXJjZVNlbGVjdG9yID1cbiAgICBzb3VyY2VzLmxlbmd0aCA+IDEgPyAoXG4gICAgICA8Qm94PlxuICAgICAgICB7c291cmNlSW5kZXggPiAwICYmIDxUZXh0IGRpbUNvbG9yPuKXgCA8L1RleHQ+fVxuICAgICAgICB7c291cmNlcy5tYXAoKHNvdXJjZSwgaSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBpID09PSBzb3VyY2VJbmRleFxuICAgICAgICAgIGNvbnN0IGxhYmVsID1cbiAgICAgICAgICAgIHNvdXJjZS50eXBlID09PSAnY3VycmVudCcgPyAnQ3VycmVudCcgOiBgVCR7c291cmNlLnR1cm4udHVybkluZGV4fWBcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRleHQga2V5PXtpfSBkaW1Db2xvcj17IWlzU2VsZWN0ZWR9IGJvbGQ9e2lzU2VsZWN0ZWR9PlxuICAgICAgICAgICAgICB7aSA+IDAgPyAnIMK3ICcgOiAnJ31cbiAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICAgIHtzb3VyY2VJbmRleCA8IHNvdXJjZXMubGVuZ3RoIC0gMSAmJiA8VGV4dCBkaW1Db2xvcj4g4pa2PC9UZXh0Pn1cbiAgICAgIDwvQm94PlxuICAgICkgOiBudWxsXG5cbiAgY29uc3QgZGlzbWlzc1Nob3J0Y3V0ID0gdXNlU2hvcnRjdXREaXNwbGF5KFxuICAgICdkaWZmOmRpc21pc3MnLFxuICAgICdEaWZmRGlhbG9nJyxcbiAgICAnZXNjJyxcbiAgKVxuICAvLyBEZXRlcm1pbmUgdGhlIGFwcHJvcHJpYXRlIG1lc3NhZ2Ugd2hlbiBubyBmaWxlcyBhcmUgc2hvd25cbiAgY29uc3QgZW1wdHlNZXNzYWdlID0gKCgpID0+IHtcbiAgICBpZiAoZGlmZkRhdGEubG9hZGluZykge1xuICAgICAgcmV0dXJuICdMb2FkaW5nIGRpZmbigKYnXG4gICAgfVxuICAgIGlmIChjdXJyZW50VHVybikge1xuICAgICAgcmV0dXJuICdObyBmaWxlIGNoYW5nZXMgaW4gdGhpcyB0dXJuJ1xuICAgIH1cbiAgICAvLyBDaGVjayBpZiB3ZSBoYXZlIHN0YXRzIGJ1dCBubyBmaWxlcyAodG9vIG1hbnkgZmlsZXMgY2FzZSlcbiAgICBpZiAoXG4gICAgICBkaWZmRGF0YS5zdGF0cyAmJlxuICAgICAgZGlmZkRhdGEuc3RhdHMuZmlsZXNDb3VudCA+IDAgJiZcbiAgICAgIGRpZmZEYXRhLmZpbGVzLmxlbmd0aCA9PT0gMFxuICAgICkge1xuICAgICAgcmV0dXJuICdUb28gbWFueSBmaWxlcyB0byBkaXNwbGF5IGRldGFpbHMnXG4gICAgfVxuICAgIHJldHVybiAnV29ya2luZyB0cmVlIGlzIGNsZWFuJ1xuICB9KSgpXG5cbiAgLy8gQnVpbGQgdGl0bGUgd2l0aCBoZWFkZXIgc3VidGl0bGUgaW5saW5lXG4gIGNvbnN0IHRpdGxlID0gKFxuICAgIDxUZXh0PlxuICAgICAge2hlYWRlclRpdGxlfVxuICAgICAge2hlYWRlclN1YnRpdGxlICYmIDxUZXh0IGRpbUNvbG9yPiB7aGVhZGVyU3VidGl0bGV9PC9UZXh0Pn1cbiAgICA8L1RleHQ+XG4gIClcblxuICAvLyBIYW5kbGUgY2FuY2VsL2Rpc21pc3MgLSBpbiBkZXRhaWwgbW9kZSBnb2VzIGJhY2ssIGluIGxpc3QgbW9kZSBkaXNtaXNzZXNcbiAgZnVuY3Rpb24gaGFuZGxlQ2FuY2VsKCk6IHZvaWQge1xuICAgIGlmICh2aWV3TW9kZSA9PT0gJ2RldGFpbCcpIHtcbiAgICAgIHNldFZpZXdNb2RlKCdsaXN0JylcbiAgICB9IGVsc2Uge1xuICAgICAgb25Eb25lKCdEaWZmIGRpYWxvZyBkaXNtaXNzZWQnLCB7IGRpc3BsYXk6ICdzeXN0ZW0nIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nXG4gICAgICB0aXRsZT17dGl0bGV9XG4gICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfVxuICAgICAgY29sb3I9XCJiYWNrZ3JvdW5kXCJcbiAgICAgIGlucHV0R3VpZGU9e2V4aXRTdGF0ZSA9PlxuICAgICAgICBleGl0U3RhdGUucGVuZGluZyA/IChcbiAgICAgICAgICA8VGV4dD5QcmVzcyB7ZXhpdFN0YXRlLmtleU5hbWV9IGFnYWluIHRvIGV4aXQ8L1RleHQ+XG4gICAgICAgICkgOiB2aWV3TW9kZSA9PT0gJ2xpc3QnID8gKFxuICAgICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAgICB7c291cmNlcy5sZW5ndGggPiAxICYmIDxUZXh0PuKGkC/ihpIgc291cmNlPC9UZXh0Pn1cbiAgICAgICAgICAgIDxUZXh0PuKGkS/ihpMgc2VsZWN0PC9UZXh0PlxuICAgICAgICAgICAgPFRleHQ+RW50ZXIgdmlldzwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0PntkaXNtaXNzU2hvcnRjdXR9IGNsb3NlPC9UZXh0PlxuICAgICAgICAgIDwvQnlsaW5lPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAgICA8VGV4dD7ihpAgYmFjazwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0PntkaXNtaXNzU2hvcnRjdXR9IGNsb3NlPC9UZXh0PlxuICAgICAgICAgIDwvQnlsaW5lPlxuICAgICAgICApXG4gICAgICB9XG4gICAgPlxuICAgICAge3NvdXJjZVNlbGVjdG9yfVxuICAgICAge3N1YnRpdGxlfVxuICAgICAge2RpZmZEYXRhLmZpbGVzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPntlbXB0eU1lc3NhZ2V9PC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICkgOiB2aWV3TW9kZSA9PT0gJ2xpc3QnID8gKFxuICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgIDxEaWZmRmlsZUxpc3QgZmlsZXM9e2RpZmZEYXRhLmZpbGVzfSBzZWxlY3RlZEluZGV4PXtzZWxlY3RlZEluZGV4fSAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgPERpZmZEZXRhaWxWaWV3XG4gICAgICAgICAgICBmaWxlUGF0aD17c2VsZWN0ZWRGaWxlPy5wYXRoIHx8ICcnfVxuICAgICAgICAgICAgaHVua3M9e3NlbGVjdGVkSHVua3N9XG4gICAgICAgICAgICBpc0xhcmdlRmlsZT17c2VsZWN0ZWRGaWxlPy5pc0xhcmdlRmlsZX1cbiAgICAgICAgICAgIGlzQmluYXJ5PXtzZWxlY3RlZEZpbGU/LmlzQmluYXJ5fVxuICAgICAgICAgICAgaXNUcnVuY2F0ZWQ9e3NlbGVjdGVkRmlsZT8uaXNUcnVuY2F0ZWR9XG4gICAgICAgICAgICBpc1VudHJhY2tlZD17c2VsZWN0ZWRGaWxlPy5pc1VudHJhY2tlZH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG4gICAgPC9EaWFsb2c+XG4gIClcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDTyxTQUFTLGNBQXdCO0FBQ3RDLFFBQU0sQ0FBQyxZQUFZLGFBQWEsSUFBSSxTQUErQixJQUFJO0FBQ3ZFLFFBQU0sQ0FBQyxPQUFPLFFBQVEsSUFBSTtBQUFBLElBQ3hCLG9CQUFJLElBQUk7QUFBQSxFQUNWO0FBQ0EsUUFBTSxDQUFDLFNBQVMsVUFBVSxJQUFJLFNBQVMsSUFBSTtBQUczQyxZQUFVLE1BQU07QUFDZCxRQUFJLFlBQVk7QUFFaEIsbUJBQWUsZUFBZTtBQUM1QixVQUFJO0FBRUYs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O0FBcEVwRTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OzsiLAogICJuYW1lcyI6IFsiYyIsICJyZXN1bHQiLCAicmVzb2x2ZSIsICJEaWZmRGV0YWlsVmlldyIsICJ0MCIsICIkIiwgIl9jIiwgImZpbGVQYXRoIiwgImh1bmtzIiwgImlzTGFyZ2VGaWxlIiwgImlzQmluYXJ5IiwgImlzVHJ1bmNhdGVkIiwgImlzVW50cmFja2VkIiwgImNvbHVtbnMiLCAidXNlVGVybWluYWxTaXplIiwgInQxIiwgImJiMCIsICJ0MiIsICJTeW1ib2wiLCAiZm9yIiwgImZpcnN0TGluZSIsICJmaWxlQ29udGVudCIsICJ1bmRlZmluZWQiLCAiY29udGVudCIsICJmdWxsUGF0aCIsICJnZXRDd2QiLCAicmVhZEZpbGVTYWZlIiwgInNwbGl0IiwgInQzIiwgInQ0IiwgInQ1IiwgInQ2IiwgInQ3IiwgInQ4IiwgImxlbmd0aCIsICJtYXAiLCAiaHVuayIsICJpbmRleCIsICJ0OSIsICJEaWZmRmlsZUxpc3QiLCAidDAiLCAiJCIsICJfYyIsICJmaWxlcyIsICJzZWxlY3RlZEluZGV4IiwgImNvbHVtbnMiLCAidXNlVGVybWluYWxTaXplIiwgInQxIiwgImJiMCIsICJsZW5ndGgiLCAiTUFYX1ZJU0lCTEVfRklMRVMiLCAidDIiLCAic3RhcnRJbmRleCIsICJlbmRJbmRleCIsICJzdGFydCIsICJNYXRoIiwgIm1heCIsICJmbG9vciIsICJlbmQiLCAiU3ltYm9sIiwgImZvciIsICJUMCIsICJoYXNNb3JlQmVsb3ciLCAibmVlZHNQYWdpbmF0aW9uIiwgInQzIiwgInQ0IiwgInZpc2libGVGaWxlcyIsICJzbGljZSIsICJoYXNNb3JlQWJvdmUiLCAibWF4UGF0aFdpZHRoIiwgIkJveCIsICJwbHVyYWwiLCAidDUiLCAiZmlsZSIsICJpbmRleCIsICJwYXRoIiwgIm1hcCIsICJ0NiIsICJGaWxlSXRlbSIsICJpc1NlbGVjdGVkIiwgInRydW5jYXRlU3RhcnRUb1dpZHRoIiwgImRpc3BsYXlQYXRoIiwgInBvaW50ZXIiLCAiZmlndXJlcyIsICJsaW5lIiwgInVuZGVmaW5lZCIsICJGaWxlU3RhdHMiLCAiaXNVbnRyYWNrZWQiLCAiaXNCaW5hcnkiLCAiaXNMYXJnZUZpbGUiLCAibGluZXNBZGRlZCIsICJsaW5lc1JlbW92ZWQiLCAiaXNUcnVuY2F0ZWQiLCAidHVybkRpZmZUb0RpZmZEYXRhIiwgInR1cm4iLCAiZmlsZXMiLCAiQXJyYXkiLCAiZnJvbSIsICJ2YWx1ZXMiLCAibWFwIiwgImYiLCAicGF0aCIsICJmaWxlUGF0aCIsICJsaW5lc0FkZGVkIiwgImxpbmVzUmVtb3ZlZCIsICJpc0JpbmFyeSIsICJpc0xhcmdlRmlsZSIsICJpc1RydW5jYXRlZCIsICJpc05ld0ZpbGUiLCAic29ydCIsICJhIiwgImIiLCAibG9jYWxlQ29tcGFyZSIsICJodW5rcyIsICJNYXAiLCAic2V0IiwgInN0YXRzIiwgImZpbGVzQ291bnQiLCAiZmlsZXNDaGFuZ2VkIiwgImxvYWRpbmciLCAiRGlmZkRpYWxvZyIsICJ0MCIsICIkIiwgIl9jIiwgIm1lc3NhZ2VzIiwgIm9uRG9uZSIsICJnaXREaWZmRGF0YSIsICJ1c2VEaWZmRGF0YSIsICJ0dXJuRGlmZnMiLCAidXNlVHVybkRpZmZzIiwgInZpZXdNb2RlIiwgInNldFZpZXdNb2RlIiwgInVzZVN0YXRlIiwgInNlbGVjdGVkSW5kZXgiLCAic2V0U2VsZWN0ZWRJbmRleCIsICJzb3VyY2VJbmRleCIsICJzZXRTb3VyY2VJbmRleCIsICJ0MSIsICJTeW1ib2wiLCAiZm9yIiwgInR5cGUiLCAidDIiLCAiX3RlbXAiLCAic291cmNlcyIsICJjdXJyZW50U291cmNlIiwgImN1cnJlbnRUdXJuIiwgInQzIiwgImRpZmZEYXRhIiwgInNlbGVjdGVkRmlsZSIsICJ0NCIsICJnZXQiLCAic2VsZWN0ZWRIdW5rcyIsICJ0NSIsICJ0NiIsICJsZW5ndGgiLCAiTWF0aCIsICJtYXgiLCAidXNlRWZmZWN0IiwgInByZXZTb3VyY2VJbmRleCIsICJ1c2VSZWYiLCAidDciLCAidDgiLCAiY3VycmVudCIsICJ1c2VSZWdpc3Rlck92ZXJsYXkiLCAidDEwIiwgInQ5IiwgIl90ZW1wMiIsICJwcmV2XzAiLCAibWluIiwgInByZXYiLCAidDExIiwgInQxMiIsICJ0MTMiLCAiX3RlbXAzIiwgInQxNCIsICJwcmV2XzIiLCAidDE1IiwgInQxNiIsICJjb250ZXh0IiwgInVzZUtleWJpbmRpbmdzIiwgInQxNyIsICJwbHVyYWwiLCAic3VidGl0bGUiLCAiaGVhZGVyVGl0bGUiLCAidHVybkluZGV4IiwgImhlYWRlclN1YnRpdGxlIiwgInVzZXJQcm9tcHRQcmV2aWV3IiwgInQxOCIsICJzb3VyY2UiLCAiaSIsICJpc1NlbGVjdGVkIiwgImxhYmVsIiwgInNvdXJjZVNlbGVjdG9yIiwgImRpc21pc3NTaG9ydGN1dCIsICJ1c2VTaG9ydGN1dERpc3BsYXkiLCAidDE5IiwgImJiMCIsICJlbXB0eU1lc3NhZ2UiLCAidDIwIiwgInQyMSIsICJ0aXRsZSIsICJ0MjIiLCAiaGFuZGxlQ2FuY2VsIiwgImRpc3BsYXkiLCAidDIzIiwgImV4aXRTdGF0ZSIsICJwZW5kaW5nIiwgImtleU5hbWUiLCAidDI0IiwgImlzVW50cmFja2VkIiwgInQyNSIsICJwcmV2XzEiXQp9Cg==
