#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  djb2Hash,
  init_hash
} from "./chunk-5GKIDOKP.mjs";
import {
  getClaudeConfigHomeDir,
  init_envUtils
} from "./chunk-6NQGQQQI.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/getWorktreePathsPortable.ts
import { execFile as execFileCb } from "child_process";
import { promisify } from "util";
async function getWorktreePathsPortable(cwd) {
  try {
    const { stdout } = await execFileAsync(
      "git",
      ["worktree", "list", "--porcelain"],
      { cwd, timeout: 5e3 }
    );
    if (!stdout) return [];
    return stdout.split("\n").filter((line) => line.startsWith("worktree ")).map((line) => line.slice("worktree ".length).normalize("NFC"));
  } catch {
    return [];
  }
}
var execFileAsync;
var init_getWorktreePathsPortable = __esm({
  "src/utils/getWorktreePathsPortable.ts"() {
    execFileAsync = promisify(execFileCb);
  }
});

// src/utils/sessionStoragePortable.ts
import { open as fsOpen, readdir, realpath, stat } from "fs/promises";
import { join } from "path";
function validateUuid(maybeUuid) {
  if (typeof maybeUuid !== "string") return null;
  return uuidRegex.test(maybeUuid) ? maybeUuid : null;
}
function unescapeJsonString(raw) {
  if (!raw.includes("\\")) return raw;
  try {
    return JSON.parse(`"${raw}"`);
  } catch {
    return raw;
  }
}
function extractJsonStringField(text, key) {
  const patterns = [`"${key}":"`, `"${key}": "`];
  for (const pattern of patterns) {
    const idx = text.indexOf(pattern);
    if (idx < 0) continue;
    const valueStart = idx + pattern.length;
    let i = valueStart;
    while (i < text.length) {
      if (text[i] === "\\") {
        i += 2;
        continue;
      }
      if (text[i] === '"') {
        return unescapeJsonString(text.slice(valueStart, i));
      }
      i++;
    }
  }
  return void 0;
}
function extractLastJsonStringField(text, key) {
  const patterns = [`"${key}":"`, `"${key}": "`];
  let lastValue;
  for (const pattern of patterns) {
    let searchFrom = 0;
    while (true) {
      const idx = text.indexOf(pattern, searchFrom);
      if (idx < 0) break;
      const valueStart = idx + pattern.length;
      let i = valueStart;
      while (i < text.length) {
        if (text[i] === "\\") {
          i += 2;
          continue;
        }
        if (text[i] === '"') {
          lastValue = unescapeJsonString(text.slice(valueStart, i));
          break;
        }
        i++;
      }
      searchFrom = i + 1;
    }
  }
  return lastValue;
}
async function readHeadAndTail(filePath, fileSize, buf) {
  try {
    const fh = await fsOpen(filePath, "r");
    try {
      const headResult = await fh.read(buf, 0, LITE_READ_BUF_SIZE, 0);
      if (headResult.bytesRead === 0) return { head: "", tail: "" };
      const head = buf.toString("utf8", 0, headResult.bytesRead);
      const tailOffset = Math.max(0, fileSize - LITE_READ_BUF_SIZE);
      let tail = head;
      if (tailOffset > 0) {
        const tailResult = await fh.read(buf, 0, LITE_READ_BUF_SIZE, tailOffset);
        tail = buf.toString("utf8", 0, tailResult.bytesRead);
      }
      return { head, tail };
    } finally {
      await fh.close();
    }
  } catch {
    return { head: "", tail: "" };
  }
}
function simpleHash(str) {
  return Math.abs(djb2Hash(str)).toString(36);
}
function sanitizePath(name) {
  const sanitized = name.replace(/[^a-zA-Z0-9]/g, "-");
  if (sanitized.length <= MAX_SANITIZED_LENGTH) {
    return sanitized;
  }
  const hash = typeof Bun !== "undefined" ? Bun.hash(name).toString(36) : simpleHash(name);
  return `${sanitized.slice(0, MAX_SANITIZED_LENGTH)}-${hash}`;
}
function getProjectsDir() {
  return join(getClaudeConfigHomeDir(), "projects");
}
function compactBoundaryMarker() {
  return _compactBoundaryMarker ??= Buffer.from('"compact_boundary"');
}
function parseBoundaryLine(line) {
  try {
    const parsed = JSON.parse(line);
    if (parsed.type !== "system" || parsed.subtype !== "compact_boundary") {
      return null;
    }
    return {
      hasPreservedSegment: Boolean(parsed.compactMetadata?.preservedSegment)
    };
  } catch {
    return null;
  }
}
function sinkWrite(s, src, start, end) {
  const n = end - start;
  if (n <= 0) return;
  if (s.len + n > s.buf.length) {
    const grown = Buffer.allocUnsafe(
      Math.min(Math.max(s.buf.length * 2, s.len + n), s.cap)
    );
    s.buf.copy(grown, 0, 0, s.len);
    s.buf = grown;
  }
  src.copy(s.buf, s.len, start, end);
  s.len += n;
}
function hasPrefix(src, prefix, at, end) {
  return end - at >= prefix.length && src.compare(prefix, 0, prefix.length, at, at + prefix.length) === 0;
}
function processStraddle(s, chunk, bytesRead) {
  s.straddleSnapCarryLen = 0;
  s.straddleSnapTailEnd = 0;
  if (s.carryLen === 0) return 0;
  const cb = s.carryBuf;
  const firstNl = chunk.indexOf(LF);
  if (firstNl === -1 || firstNl >= bytesRead) return 0;
  const tailEnd = firstNl + 1;
  if (hasPrefix(cb, ATTR_SNAP_PREFIX, 0, s.carryLen)) {
    s.straddleSnapCarryLen = s.carryLen;
    s.straddleSnapTailEnd = tailEnd;
    s.lastSnapSrc = null;
  } else if (s.carryLen < ATTR_SNAP_PREFIX.length) {
    return 0;
  } else {
    if (hasPrefix(cb, SYSTEM_PREFIX, 0, s.carryLen)) {
      const hit = parseBoundaryLine(
        cb.toString("utf-8", 0, s.carryLen) + chunk.toString("utf-8", 0, firstNl)
      );
      if (hit?.hasPreservedSegment) {
        s.hasPreservedSegment = true;
      } else if (hit) {
        s.out.len = 0;
        s.boundaryStartOffset = s.bufFileOff;
        s.hasPreservedSegment = false;
        s.lastSnapSrc = null;
      }
    }
    sinkWrite(s.out, cb, 0, s.carryLen);
    sinkWrite(s.out, chunk, 0, tailEnd);
  }
  s.bufFileOff += s.carryLen + tailEnd;
  s.carryLen = 0;
  return tailEnd;
}
function scanChunkLines(s, buf, boundaryMarker) {
  let boundaryAt = buf.indexOf(boundaryMarker);
  let runStart = 0;
  let lineStart = 0;
  let lastSnapStart = -1;
  let lastSnapEnd = -1;
  let nl = buf.indexOf(LF);
  while (nl !== -1) {
    const lineEnd = nl + 1;
    if (boundaryAt !== -1 && boundaryAt < lineStart) {
      boundaryAt = buf.indexOf(boundaryMarker, lineStart);
    }
    if (hasPrefix(buf, ATTR_SNAP_PREFIX, lineStart, lineEnd)) {
      sinkWrite(s.out, buf, runStart, lineStart);
      lastSnapStart = lineStart;
      lastSnapEnd = lineEnd;
      runStart = lineEnd;
    } else if (boundaryAt >= lineStart && boundaryAt < Math.min(lineStart + BOUNDARY_SEARCH_BOUND, lineEnd)) {
      const hit = parseBoundaryLine(buf.toString("utf-8", lineStart, nl));
      if (hit?.hasPreservedSegment) {
        s.hasPreservedSegment = true;
      } else if (hit) {
        s.out.len = 0;
        s.boundaryStartOffset = s.bufFileOff + lineStart;
        s.hasPreservedSegment = false;
        s.lastSnapSrc = null;
        lastSnapStart = -1;
        s.straddleSnapCarryLen = 0;
        runStart = lineStart;
      }
      boundaryAt = buf.indexOf(
        boundaryMarker,
        boundaryAt + boundaryMarker.length
      );
    }
    lineStart = lineEnd;
    nl = buf.indexOf(LF, lineStart);
  }
  sinkWrite(s.out, buf, runStart, lineStart);
  return { lastSnapStart, lastSnapEnd, trailStart: lineStart };
}
function captureSnap(s, buf, chunk, lastSnapStart, lastSnapEnd) {
  if (lastSnapStart !== -1) {
    s.lastSnapLen = lastSnapEnd - lastSnapStart;
    if (s.lastSnapBuf === void 0 || s.lastSnapLen > s.lastSnapBuf.length) {
      s.lastSnapBuf = Buffer.allocUnsafe(s.lastSnapLen);
    }
    buf.copy(s.lastSnapBuf, 0, lastSnapStart, lastSnapEnd);
    s.lastSnapSrc = s.lastSnapBuf;
  } else if (s.straddleSnapCarryLen > 0) {
    s.lastSnapLen = s.straddleSnapCarryLen + s.straddleSnapTailEnd;
    if (s.lastSnapBuf === void 0 || s.lastSnapLen > s.lastSnapBuf.length) {
      s.lastSnapBuf = Buffer.allocUnsafe(s.lastSnapLen);
    }
    s.carryBuf.copy(s.lastSnapBuf, 0, 0, s.straddleSnapCarryLen);
    chunk.copy(s.lastSnapBuf, s.straddleSnapCarryLen, 0, s.straddleSnapTailEnd);
    s.lastSnapSrc = s.lastSnapBuf;
  }
}
function captureCarry(s, buf, trailStart) {
  s.carryLen = buf.length - trailStart;
  if (s.carryLen > 0) {
    if (s.carryBuf === void 0 || s.carryLen > s.carryBuf.length) {
      s.carryBuf = Buffer.allocUnsafe(s.carryLen);
    }
    buf.copy(s.carryBuf, 0, trailStart, buf.length);
  }
}
function finalizeOutput(s) {
  if (s.carryLen > 0) {
    const cb = s.carryBuf;
    if (hasPrefix(cb, ATTR_SNAP_PREFIX, 0, s.carryLen)) {
      s.lastSnapSrc = cb;
      s.lastSnapLen = s.carryLen;
    } else {
      sinkWrite(s.out, cb, 0, s.carryLen);
    }
  }
  if (s.lastSnapSrc) {
    if (s.out.len > 0 && s.out.buf[s.out.len - 1] !== LF) {
      sinkWrite(s.out, LF_BYTE, 0, 1);
    }
    sinkWrite(s.out, s.lastSnapSrc, 0, s.lastSnapLen);
  }
}
async function readTranscriptForLoad(filePath, fileSize) {
  const boundaryMarker = compactBoundaryMarker();
  const CHUNK_SIZE = TRANSCRIPT_READ_CHUNK_SIZE;
  const s = {
    out: {
      // Gated callers enter with fileSize > 5MB, so min(fileSize, 8MB) lands
      // in [5, 8]MB; large boundaryless sessions (24-31MB output) take 2
      // grows. Ungated callers (attribution.ts) pass small files too — the
      // min just right-sizes the initial buf, no grows.
      buf: Buffer.allocUnsafe(Math.min(fileSize, 8 * 1024 * 1024)),
      len: 0,
      // +1: finalizeOutput may insert one LF between a non-LF-terminated
      // carry and the reordered last attr-snap (crash-truncated file).
      cap: fileSize + 1
    },
    boundaryStartOffset: 0,
    hasPreservedSegment: false,
    lastSnapSrc: null,
    lastSnapLen: 0,
    lastSnapBuf: void 0,
    bufFileOff: 0,
    carryLen: 0,
    carryBuf: void 0,
    straddleSnapCarryLen: 0,
    straddleSnapTailEnd: 0
  };
  const chunk = Buffer.allocUnsafe(CHUNK_SIZE);
  const fd = await fsOpen(filePath, "r");
  try {
    let filePos = 0;
    while (filePos < fileSize) {
      const { bytesRead } = await fd.read(
        chunk,
        0,
        Math.min(CHUNK_SIZE, fileSize - filePos),
        filePos
      );
      if (bytesRead === 0) break;
      filePos += bytesRead;
      const chunkOff = processStraddle(s, chunk, bytesRead);
      let buf;
      if (s.carryLen > 0) {
        const bufLen = s.carryLen + (bytesRead - chunkOff);
        buf = Buffer.allocUnsafe(bufLen);
        s.carryBuf.copy(buf, 0, 0, s.carryLen);
        chunk.copy(buf, s.carryLen, chunkOff, bytesRead);
      } else {
        buf = chunk.subarray(chunkOff, bytesRead);
      }
      const r = scanChunkLines(s, buf, boundaryMarker);
      captureSnap(s, buf, chunk, r.lastSnapStart, r.lastSnapEnd);
      captureCarry(s, buf, r.trailStart);
      s.bufFileOff += r.trailStart;
    }
    finalizeOutput(s);
  } finally {
    await fd.close();
  }
  return {
    boundaryStartOffset: s.boundaryStartOffset,
    postBoundaryBuf: s.out.buf.subarray(0, s.out.len),
    hasPreservedSegment: s.hasPreservedSegment
  };
}
var LITE_READ_BUF_SIZE, uuidRegex, MAX_SANITIZED_LENGTH, TRANSCRIPT_READ_CHUNK_SIZE, SKIP_PRECOMPACT_THRESHOLD, _compactBoundaryMarker, ATTR_SNAP_PREFIX, SYSTEM_PREFIX, LF, LF_BYTE, BOUNDARY_SEARCH_BOUND;
var init_sessionStoragePortable = __esm({
  "src/utils/sessionStoragePortable.ts"() {
    init_envUtils();
    init_getWorktreePathsPortable();
    init_hash();
    LITE_READ_BUF_SIZE = 65536;
    uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    MAX_SANITIZED_LENGTH = 200;
    TRANSCRIPT_READ_CHUNK_SIZE = 1024 * 1024;
    SKIP_PRECOMPACT_THRESHOLD = 5 * 1024 * 1024;
    ATTR_SNAP_PREFIX = Buffer.from('{"type":"attribution-snapshot"');
    SYSTEM_PREFIX = Buffer.from('{"type":"system"');
    LF = 10;
    LF_BYTE = Buffer.from([LF]);
    BOUNDARY_SEARCH_BOUND = 256;
  }
});

export {
  getWorktreePathsPortable,
  init_getWorktreePathsPortable,
  LITE_READ_BUF_SIZE,
  validateUuid,
  extractJsonStringField,
  extractLastJsonStringField,
  readHeadAndTail,
  sanitizePath,
  getProjectsDir,
  SKIP_PRECOMPACT_THRESHOLD,
  readTranscriptForLoad,
  init_sessionStoragePortable
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL2dldFdvcmt0cmVlUGF0aHNQb3J0YWJsZS50cyIsICIuLi8uLi9zcmMvdXRpbHMvc2Vzc2lvblN0b3JhZ2VQb3J0YWJsZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZXhlY0ZpbGUgYXMgZXhlY0ZpbGVDYiB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnXG5pbXBvcnQgeyBwcm9taXNpZnkgfSBmcm9tICd1dGlsJ1xuXG5jb25zdCBleGVjRmlsZUFzeW5jID0gcHJvbWlzaWZ5KGV4ZWNGaWxlQ2IpXG5cbi8qKlxuICogUG9ydGFibGUgd29ya3RyZWUgZGV0ZWN0aW9uIHVzaW5nIG9ubHkgY2hpbGRfcHJvY2VzcyBcdTIwMTQgbm8gYW5hbHl0aWNzLFxuICogbm8gYm9vdHN0cmFwIGRlcHMsIG5vIGV4ZWNhLiBVc2VkIGJ5IGxpc3RTZXNzaW9uc0ltcGwudHMgKFNESykgYW5kXG4gKiBhbnl3aGVyZSB0aGF0IG5lZWRzIHdvcmt0cmVlIHBhdGhzIHdpdGhvdXQgcHVsbGluZyBpbiB0aGUgQ0xJXG4gKiBkZXBlbmRlbmN5IGNoYWluIChleGVjYSBcdTIxOTIgY3Jvc3Mtc3Bhd24gXHUyMTkyIHdoaWNoKS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdvcmt0cmVlUGF0aHNQb3J0YWJsZShjd2Q6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHN0ZG91dCB9ID0gYXdhaXQgZXhlY0ZpbGVBc3luYyhcbiAgICAgICdnaXQnLFxuICAgICAgWyd3b3JrdHJlZScsICdsaXN0JywgJy0tcG9yY2VsYWluJ10sXG4gICAgICB7IGN3ZCwgdGltZW91dDogNTAwMCB9LFxuICAgIClcbiAgICBpZiAoIXN0ZG91dCkgcmV0dXJuIFtdXG4gICAgcmV0dXJuIHN0ZG91dFxuICAgICAgLnNwbGl0KCdcXG4nKVxuICAgICAgLmZpbHRlcihsaW5lID0+IGxpbmUuc3RhcnRzV2l0aCgnd29ya3RyZWUgJykpXG4gICAgICAubWFwKGxpbmUgPT4gbGluZS5zbGljZSgnd29ya3RyZWUgJy5sZW5ndGgpLm5vcm1hbGl6ZSgnTkZDJykpXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBbXVxuICB9XG59XG4iLCAiLyoqXG4gKiBQb3J0YWJsZSBzZXNzaW9uIHN0b3JhZ2UgdXRpbGl0aWVzLlxuICpcbiAqIFB1cmUgTm9kZS5qcyBcdTIwMTQgbm8gaW50ZXJuYWwgZGVwZW5kZW5jaWVzIG9uIGxvZ2dpbmcsIGV4cGVyaW1lbnRzLCBvciBmZWF0dXJlXG4gKiBmbGFncy4gU2hhcmVkIGJldHdlZW4gdGhlIENMSSAoc3JjL3V0aWxzL3Nlc3Npb25TdG9yYWdlLnRzKSBhbmQgdGhlIFZTIENvZGVcbiAqIGV4dGVuc2lvbiAocGFja2FnZXMvY2xhdWRlLXZzY29kZS9zcmMvY29tbW9uLWhvc3Qvc2Vzc2lvblN0b3JhZ2UudHMpLlxuICovXG5cbmltcG9ydCB0eXBlIHsgVVVJRCB9IGZyb20gJ2NyeXB0bydcbmltcG9ydCB7IG9wZW4gYXMgZnNPcGVuLCByZWFkZGlyLCByZWFscGF0aCwgc3RhdCB9IGZyb20gJ2ZzL3Byb21pc2VzJ1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBnZXRDbGF1ZGVDb25maWdIb21lRGlyIH0gZnJvbSAnLi9lbnZVdGlscy5qcydcbmltcG9ydCB7IGdldFdvcmt0cmVlUGF0aHNQb3J0YWJsZSB9IGZyb20gJy4vZ2V0V29ya3RyZWVQYXRoc1BvcnRhYmxlLmpzJ1xuaW1wb3J0IHsgZGpiMkhhc2ggfSBmcm9tICcuL2hhc2guanMnXG5cbi8qKiBTaXplIG9mIHRoZSBoZWFkL3RhaWwgYnVmZmVyIGZvciBsaXRlIG1ldGFkYXRhIHJlYWRzLiAqL1xuZXhwb3J0IGNvbnN0IExJVEVfUkVBRF9CVUZfU0laRSA9IDY1NTM2XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVVVJRCB2YWxpZGF0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgdXVpZFJlZ2V4ID1cbiAgL15bMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMC05YS1mXXs0fS1bMC05YS1mXXs0fS1bMC05YS1mXXsxMn0kL2lcblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlVXVpZChtYXliZVV1aWQ6IHVua25vd24pOiBVVUlEIHwgbnVsbCB7XG4gIGlmICh0eXBlb2YgbWF5YmVVdWlkICE9PSAnc3RyaW5nJykgcmV0dXJuIG51bGxcbiAgcmV0dXJuIHV1aWRSZWdleC50ZXN0KG1heWJlVXVpZCkgPyAobWF5YmVVdWlkIGFzIFVVSUQpIDogbnVsbFxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEpTT04gc3RyaW5nIGZpZWxkIGV4dHJhY3Rpb24gXHUyMDE0IG5vIGZ1bGwgcGFyc2UsIHdvcmtzIG9uIHRydW5jYXRlZCBsaW5lc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogVW5lc2NhcGUgYSBKU09OIHN0cmluZyB2YWx1ZSBleHRyYWN0ZWQgYXMgcmF3IHRleHQuXG4gKiBPbmx5IGFsbG9jYXRlcyBhIG5ldyBzdHJpbmcgd2hlbiBlc2NhcGUgc2VxdWVuY2VzIGFyZSBwcmVzZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5lc2NhcGVKc29uU3RyaW5nKHJhdzogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKCFyYXcuaW5jbHVkZXMoJ1xcXFwnKSkgcmV0dXJuIHJhd1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGBcIiR7cmF3fVwiYClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHJhd1xuICB9XG59XG5cbi8qKlxuICogRXh0cmFjdHMgYSBzaW1wbGUgSlNPTiBzdHJpbmcgZmllbGQgdmFsdWUgZnJvbSByYXcgdGV4dCB3aXRob3V0IGZ1bGwgcGFyc2luZy5cbiAqIExvb2tzIGZvciBgXCJrZXlcIjpcInZhbHVlXCJgIG9yIGBcImtleVwiOiBcInZhbHVlXCJgIHBhdHRlcm5zLlxuICogUmV0dXJucyB0aGUgZmlyc3QgbWF0Y2gsIG9yIHVuZGVmaW5lZCBpZiBub3QgZm91bmQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0SnNvblN0cmluZ0ZpZWxkKFxuICB0ZXh0OiBzdHJpbmcsXG4gIGtleTogc3RyaW5nLFxuKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgY29uc3QgcGF0dGVybnMgPSBbYFwiJHtrZXl9XCI6XCJgLCBgXCIke2tleX1cIjogXCJgXVxuICBmb3IgKGNvbnN0IHBhdHRlcm4gb2YgcGF0dGVybnMpIHtcbiAgICBjb25zdCBpZHggPSB0ZXh0LmluZGV4T2YocGF0dGVybilcbiAgICBpZiAoaWR4IDwgMCkgY29udGludWVcblxuICAgIGNvbnN0IHZhbHVlU3RhcnQgPSBpZHggKyBwYXR0ZXJuLmxlbmd0aFxuICAgIGxldCBpID0gdmFsdWVTdGFydFxuICAgIHdoaWxlIChpIDwgdGV4dC5sZW5ndGgpIHtcbiAgICAgIGlmICh0ZXh0W2ldID09PSAnXFxcXCcpIHtcbiAgICAgICAgaSArPSAyXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBpZiAodGV4dFtpXSA9PT0gJ1wiJykge1xuICAgICAgICByZXR1cm4gdW5lc2NhcGVKc29uU3RyaW5nKHRleHQuc2xpY2UodmFsdWVTdGFydCwgaSkpXG4gICAgICB9XG4gICAgICBpKytcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG4vKipcbiAqIExpa2UgZXh0cmFjdEpzb25TdHJpbmdGaWVsZCBidXQgZmluZHMgdGhlIExBU1Qgb2NjdXJyZW5jZS5cbiAqIFVzZWZ1bCBmb3IgZmllbGRzIHRoYXQgYXJlIGFwcGVuZGVkIChjdXN0b21UaXRsZSwgdGFnLCBldGMuKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RMYXN0SnNvblN0cmluZ0ZpZWxkKFxuICB0ZXh0OiBzdHJpbmcsXG4gIGtleTogc3RyaW5nLFxuKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgY29uc3QgcGF0dGVybnMgPSBbYFwiJHtrZXl9XCI6XCJgLCBgXCIke2tleX1cIjogXCJgXVxuICBsZXQgbGFzdFZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgZm9yIChjb25zdCBwYXR0ZXJuIG9mIHBhdHRlcm5zKSB7XG4gICAgbGV0IHNlYXJjaEZyb20gPSAwXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGNvbnN0IGlkeCA9IHRleHQuaW5kZXhPZihwYXR0ZXJuLCBzZWFyY2hGcm9tKVxuICAgICAgaWYgKGlkeCA8IDApIGJyZWFrXG5cbiAgICAgIGNvbnN0IHZhbHVlU3RhcnQgPSBpZHggKyBwYXR0ZXJuLmxlbmd0aFxuICAgICAgbGV0IGkgPSB2YWx1ZVN0YXJ0XG4gICAgICB3aGlsZSAoaSA8IHRleHQubGVuZ3RoKSB7XG4gICAgICAgIGlmICh0ZXh0W2ldID09PSAnXFxcXCcpIHtcbiAgICAgICAgICBpICs9IDJcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICAgIGlmICh0ZXh0W2ldID09PSAnXCInKSB7XG4gICAgICAgICAgbGFzdFZhbHVlID0gdW5lc2NhcGVKc29uU3RyaW5nKHRleHQuc2xpY2UodmFsdWVTdGFydCwgaSkpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBpKytcbiAgICAgIH1cbiAgICAgIHNlYXJjaEZyb20gPSBpICsgMVxuICAgIH1cbiAgfVxuICByZXR1cm4gbGFzdFZhbHVlXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRmlyc3QgcHJvbXB0IGV4dHJhY3Rpb24gZnJvbSBoZWFkIGNodW5rXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBQYXR0ZXJuIG1hdGNoaW5nIGF1dG8tZ2VuZXJhdGVkIG9yIHN5c3RlbSBtZXNzYWdlcyB0aGF0IHNob3VsZCBiZSBza2lwcGVkXG4gKiB3aGVuIGxvb2tpbmcgZm9yIHRoZSBmaXJzdCBtZWFuaW5nZnVsIHVzZXIgcHJvbXB0LiBNYXRjaGVzIGFueXRoaW5nIHRoYXRcbiAqIHN0YXJ0cyB3aXRoIGEgbG93ZXJjYXNlIFhNTC1saWtlIHRhZyAoSURFIGNvbnRleHQsIGhvb2sgb3V0cHV0LCB0YXNrXG4gKiBub3RpZmljYXRpb25zLCBjaGFubmVsIG1lc3NhZ2VzLCBldGMuKSBvciBhIHN5bnRoZXRpYyBpbnRlcnJ1cHQgbWFya2VyLlxuICovXG5jb25zdCBTS0lQX0ZJUlNUX1BST01QVF9QQVRURVJOID1cbiAgL14oPzpcXHMqPFthLXpdW1xcdy1dKltcXHM+XXxcXFtSZXF1ZXN0IGludGVycnVwdGVkIGJ5IHVzZXJbXlxcXV0qXFxdKS9cblxuY29uc3QgQ09NTUFORF9OQU1FX1JFID0gLzxjb21tYW5kLW5hbWU+KC4qPyk8XFwvY29tbWFuZC1uYW1lPi9cblxuLyoqXG4gKiBFeHRyYWN0cyB0aGUgZmlyc3QgbWVhbmluZ2Z1bCB1c2VyIHByb21wdCBmcm9tIGEgSlNPTkwgaGVhZCBjaHVuay5cbiAqXG4gKiBTa2lwcyB0b29sX3Jlc3VsdCBtZXNzYWdlcywgaXNNZXRhLCBpc0NvbXBhY3RTdW1tYXJ5LCBjb21tYW5kLW5hbWUgbWVzc2FnZXMsXG4gKiBhbmQgYXV0by1nZW5lcmF0ZWQgcGF0dGVybnMgKHNlc3Npb24gaG9va3MsIHRpY2ssIElERSBtZXRhZGF0YSwgZXRjLikuXG4gKiBUcnVuY2F0ZXMgdG8gMjAwIGNoYXJzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEZpcnN0UHJvbXB0RnJvbUhlYWQoaGVhZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IHN0YXJ0ID0gMFxuICBsZXQgY29tbWFuZEZhbGxiYWNrID0gJydcbiAgd2hpbGUgKHN0YXJ0IDwgaGVhZC5sZW5ndGgpIHtcbiAgICBjb25zdCBuZXdsaW5lSWR4ID0gaGVhZC5pbmRleE9mKCdcXG4nLCBzdGFydClcbiAgICBjb25zdCBsaW5lID1cbiAgICAgIG5ld2xpbmVJZHggPj0gMCA/IGhlYWQuc2xpY2Uoc3RhcnQsIG5ld2xpbmVJZHgpIDogaGVhZC5zbGljZShzdGFydClcbiAgICBzdGFydCA9IG5ld2xpbmVJZHggPj0gMCA/IG5ld2xpbmVJZHggKyAxIDogaGVhZC5sZW5ndGhcblxuICAgIGlmICghbGluZS5pbmNsdWRlcygnXCJ0eXBlXCI6XCJ1c2VyXCInKSAmJiAhbGluZS5pbmNsdWRlcygnXCJ0eXBlXCI6IFwidXNlclwiJykpXG4gICAgICBjb250aW51ZVxuICAgIGlmIChsaW5lLmluY2x1ZGVzKCdcInRvb2xfcmVzdWx0XCInKSkgY29udGludWVcbiAgICBpZiAobGluZS5pbmNsdWRlcygnXCJpc01ldGFcIjp0cnVlJykgfHwgbGluZS5pbmNsdWRlcygnXCJpc01ldGFcIjogdHJ1ZScpKVxuICAgICAgY29udGludWVcbiAgICBpZiAoXG4gICAgICBsaW5lLmluY2x1ZGVzKCdcImlzQ29tcGFjdFN1bW1hcnlcIjp0cnVlJykgfHxcbiAgICAgIGxpbmUuaW5jbHVkZXMoJ1wiaXNDb21wYWN0U3VtbWFyeVwiOiB0cnVlJylcbiAgICApXG4gICAgICBjb250aW51ZVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGVudHJ5ID0gSlNPTi5wYXJzZShsaW5lKSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgICAgaWYgKGVudHJ5LnR5cGUgIT09ICd1c2VyJykgY29udGludWVcblxuICAgICAgY29uc3QgbWVzc2FnZSA9IGVudHJ5Lm1lc3NhZ2UgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCB1bmRlZmluZWRcbiAgICAgIGlmICghbWVzc2FnZSkgY29udGludWVcblxuICAgICAgY29uc3QgY29udGVudCA9IG1lc3NhZ2UuY29udGVudFxuICAgICAgY29uc3QgdGV4dHM6IHN0cmluZ1tdID0gW11cbiAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGV4dHMucHVzaChjb250ZW50KVxuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNvbnRlbnQpKSB7XG4gICAgICAgIGZvciAoY29uc3QgYmxvY2sgb2YgY29udGVudCBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdKSB7XG4gICAgICAgICAgaWYgKGJsb2NrLnR5cGUgPT09ICd0ZXh0JyAmJiB0eXBlb2YgYmxvY2sudGV4dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRleHRzLnB1c2goYmxvY2sudGV4dCBhcyBzdHJpbmcpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3QgcmF3IG9mIHRleHRzKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSByYXcucmVwbGFjZSgvXFxuL2csICcgJykudHJpbSgpXG4gICAgICAgIGlmICghcmVzdWx0KSBjb250aW51ZVxuXG4gICAgICAgIC8vIFNraXAgc2xhc2gtY29tbWFuZCBtZXNzYWdlcyBidXQgcmVtZW1iZXIgZmlyc3QgYXMgZmFsbGJhY2tcbiAgICAgICAgY29uc3QgY21kTWF0Y2ggPSBDT01NQU5EX05BTUVfUkUuZXhlYyhyZXN1bHQpXG4gICAgICAgIGlmIChjbWRNYXRjaCkge1xuICAgICAgICAgIGlmICghY29tbWFuZEZhbGxiYWNrKSBjb21tYW5kRmFsbGJhY2sgPSBjbWRNYXRjaFsxXSFcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRm9ybWF0IGJhc2ggaW5wdXQgd2l0aCAhIHByZWZpeCBiZWZvcmUgdGhlIGdlbmVyaWMgWE1MIHNraXBcbiAgICAgICAgY29uc3QgYmFzaE1hdGNoID0gLzxiYXNoLWlucHV0PihbXFxzXFxTXSo/KTxcXC9iYXNoLWlucHV0Pi8uZXhlYyhyZXN1bHQpXG4gICAgICAgIGlmIChiYXNoTWF0Y2gpIHJldHVybiBgISAke2Jhc2hNYXRjaFsxXSEudHJpbSgpfWBcblxuICAgICAgICBpZiAoU0tJUF9GSVJTVF9QUk9NUFRfUEFUVEVSTi50ZXN0KHJlc3VsdCkpIGNvbnRpbnVlXG5cbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAyMDApIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQuc2xpY2UoMCwgMjAwKS50cmltKCkgKyAnXFx1MjAyNidcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG4gICAgfSBjYXRjaCB7XG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgfVxuICBpZiAoY29tbWFuZEZhbGxiYWNrKSByZXR1cm4gY29tbWFuZEZhbGxiYWNrXG4gIHJldHVybiAnJ1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZpbGUgSS9PIFx1MjAxNCByZWFkIGhlYWQgYW5kIHRhaWwgb2YgYSBmaWxlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBSZWFkcyB0aGUgZmlyc3QgYW5kIGxhc3QgTElURV9SRUFEX0JVRl9TSVpFIGJ5dGVzIG9mIGEgZmlsZS5cbiAqXG4gKiBGb3Igc21hbGwgZmlsZXMgd2hlcmUgaGVhZCBjb3ZlcnMgdGFpbCwgYHRhaWwgPT09IGhlYWRgLlxuICogQWNjZXB0cyBhIHNoYXJlZCBCdWZmZXIgdG8gYXZvaWQgcGVyLWZpbGUgYWxsb2NhdGlvbiBvdmVyaGVhZC5cbiAqIFJldHVybnMgYHsgaGVhZDogJycsIHRhaWw6ICcnIH1gIG9uIGFueSBlcnJvci5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlYWRIZWFkQW5kVGFpbChcbiAgZmlsZVBhdGg6IHN0cmluZyxcbiAgZmlsZVNpemU6IG51bWJlcixcbiAgYnVmOiBCdWZmZXIsXG4pOiBQcm9taXNlPHsgaGVhZDogc3RyaW5nOyB0YWlsOiBzdHJpbmcgfT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGZoID0gYXdhaXQgZnNPcGVuKGZpbGVQYXRoLCAncicpXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGhlYWRSZXN1bHQgPSBhd2FpdCBmaC5yZWFkKGJ1ZiwgMCwgTElURV9SRUFEX0JVRl9TSVpFLCAwKVxuICAgICAgaWYgKGhlYWRSZXN1bHQuYnl0ZXNSZWFkID09PSAwKSByZXR1cm4geyBoZWFkOiAnJywgdGFpbDogJycgfVxuXG4gICAgICBjb25zdCBoZWFkID0gYnVmLnRvU3RyaW5nKCd1dGY4JywgMCwgaGVhZFJlc3VsdC5ieXRlc1JlYWQpXG5cbiAgICAgIGNvbnN0IHRhaWxPZmZzZXQgPSBNYXRoLm1heCgwLCBmaWxlU2l6ZSAtIExJVEVfUkVBRF9CVUZfU0laRSlcbiAgICAgIGxldCB0YWlsID0gaGVhZFxuICAgICAgaWYgKHRhaWxPZmZzZXQgPiAwKSB7XG4gICAgICAgIGNvbnN0IHRhaWxSZXN1bHQgPSBhd2FpdCBmaC5yZWFkKGJ1ZiwgMCwgTElURV9SRUFEX0JVRl9TSVpFLCB0YWlsT2Zmc2V0KVxuICAgICAgICB0YWlsID0gYnVmLnRvU3RyaW5nKCd1dGY4JywgMCwgdGFpbFJlc3VsdC5ieXRlc1JlYWQpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IGhlYWQsIHRhaWwgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBhd2FpdCBmaC5jbG9zZSgpXG4gICAgfVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4geyBoZWFkOiAnJywgdGFpbDogJycgfVxuICB9XG59XG5cbmV4cG9ydCB0eXBlIExpdGVTZXNzaW9uRmlsZSA9IHtcbiAgbXRpbWU6IG51bWJlclxuICBzaXplOiBudW1iZXJcbiAgaGVhZDogc3RyaW5nXG4gIHRhaWw6IHN0cmluZ1xufVxuXG4vKipcbiAqIE9wZW5zIGEgc2luZ2xlIHNlc3Npb24gZmlsZSwgc3RhdHMgaXQsIGFuZCByZWFkcyBoZWFkICsgdGFpbCBpbiBvbmUgZmQuXG4gKiBBbGxvY2F0ZXMgaXRzIG93biBidWZmZXIgXHUyMDE0IHNhZmUgZm9yIGNvbmN1cnJlbnQgdXNlIHdpdGggUHJvbWlzZS5hbGwuXG4gKiBSZXR1cm5zIG51bGwgb24gYW55IGVycm9yLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVhZFNlc3Npb25MaXRlKFxuICBmaWxlUGF0aDogc3RyaW5nLFxuKTogUHJvbWlzZTxMaXRlU2Vzc2lvbkZpbGUgfCBudWxsPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZmggPSBhd2FpdCBmc09wZW4oZmlsZVBhdGgsICdyJylcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RhdCA9IGF3YWl0IGZoLnN0YXQoKVxuICAgICAgY29uc3QgYnVmID0gQnVmZmVyLmFsbG9jVW5zYWZlKExJVEVfUkVBRF9CVUZfU0laRSlcbiAgICAgIGNvbnN0IGhlYWRSZXN1bHQgPSBhd2FpdCBmaC5yZWFkKGJ1ZiwgMCwgTElURV9SRUFEX0JVRl9TSVpFLCAwKVxuICAgICAgaWYgKGhlYWRSZXN1bHQuYnl0ZXNSZWFkID09PSAwKSByZXR1cm4gbnVsbFxuXG4gICAgICBjb25zdCBoZWFkID0gYnVmLnRvU3RyaW5nKCd1dGY4JywgMCwgaGVhZFJlc3VsdC5ieXRlc1JlYWQpXG4gICAgICBjb25zdCB0YWlsT2Zmc2V0ID0gTWF0aC5tYXgoMCwgc3RhdC5zaXplIC0gTElURV9SRUFEX0JVRl9TSVpFKVxuICAgICAgbGV0IHRhaWwgPSBoZWFkXG4gICAgICBpZiAodGFpbE9mZnNldCA+IDApIHtcbiAgICAgICAgY29uc3QgdGFpbFJlc3VsdCA9IGF3YWl0IGZoLnJlYWQoYnVmLCAwLCBMSVRFX1JFQURfQlVGX1NJWkUsIHRhaWxPZmZzZXQpXG4gICAgICAgIHRhaWwgPSBidWYudG9TdHJpbmcoJ3V0ZjgnLCAwLCB0YWlsUmVzdWx0LmJ5dGVzUmVhZClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgbXRpbWU6IHN0YXQubXRpbWUuZ2V0VGltZSgpLCBzaXplOiBzdGF0LnNpemUsIGhlYWQsIHRhaWwgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBhd2FpdCBmaC5jbG9zZSgpXG4gICAgfVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUGF0aCBzYW5pdGl6YXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIE1heGltdW0gbGVuZ3RoIGZvciBhIHNpbmdsZSBmaWxlc3lzdGVtIHBhdGggY29tcG9uZW50IChkaXJlY3Rvcnkgb3IgZmlsZSBuYW1lKS5cbiAqIE1vc3QgZmlsZXN5c3RlbXMgKGV4dDQsIEFQRlMsIE5URlMpIGxpbWl0IGluZGl2aWR1YWwgY29tcG9uZW50cyB0byAyNTUgYnl0ZXMuXG4gKiBXZSB1c2UgMjAwIHRvIGxlYXZlIHJvb20gZm9yIHRoZSBoYXNoIHN1ZmZpeCBhbmQgc2VwYXJhdG9yLlxuICovXG5leHBvcnQgY29uc3QgTUFYX1NBTklUSVpFRF9MRU5HVEggPSAyMDBcblxuZnVuY3Rpb24gc2ltcGxlSGFzaChzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBNYXRoLmFicyhkamIySGFzaChzdHIpKS50b1N0cmluZygzNilcbn1cblxuLyoqXG4gKiBNYWtlcyBhIHN0cmluZyBzYWZlIGZvciB1c2UgYXMgYSBkaXJlY3Rvcnkgb3IgZmlsZSBuYW1lLlxuICogUmVwbGFjZXMgYWxsIG5vbi1hbHBoYW51bWVyaWMgY2hhcmFjdGVycyB3aXRoIGh5cGhlbnMuXG4gKiBUaGlzIGVuc3VyZXMgY29tcGF0aWJpbGl0eSBhY3Jvc3MgYWxsIHBsYXRmb3JtcywgaW5jbHVkaW5nIFdpbmRvd3NcbiAqIHdoZXJlIGNoYXJhY3RlcnMgbGlrZSBjb2xvbnMgYXJlIHJlc2VydmVkLlxuICpcbiAqIEZvciBkZWVwbHkgbmVzdGVkIHBhdGhzIHRoYXQgd291bGQgZXhjZWVkIGZpbGVzeXN0ZW0gbGltaXRzICgyNTUgYnl0ZXMpLFxuICogdHJ1bmNhdGVzIGFuZCBhcHBlbmRzIGEgaGFzaCBzdWZmaXggZm9yIHVuaXF1ZW5lc3MuXG4gKlxuICogQHBhcmFtIG5hbWUgLSBUaGUgc3RyaW5nIHRvIG1ha2Ugc2FmZSAoZS5nLiwgJy9Vc2Vycy9mb28vbXktcHJvamVjdCcgb3IgJ3BsdWdpbjpuYW1lOnNlcnZlcicpXG4gKiBAcmV0dXJucyBBIHNhZmUgbmFtZSAoZS5nLiwgJy1Vc2Vycy1mb28tbXktcHJvamVjdCcgb3IgJ3BsdWdpbi1uYW1lLXNlcnZlcicpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZVBhdGgobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3Qgc2FuaXRpemVkID0gbmFtZS5yZXBsYWNlKC9bXmEtekEtWjAtOV0vZywgJy0nKVxuICBpZiAoc2FuaXRpemVkLmxlbmd0aCA8PSBNQVhfU0FOSVRJWkVEX0xFTkdUSCkge1xuICAgIHJldHVybiBzYW5pdGl6ZWRcbiAgfVxuICBjb25zdCBoYXNoID1cbiAgICB0eXBlb2YgQnVuICE9PSAndW5kZWZpbmVkJyA/IEJ1bi5oYXNoKG5hbWUpLnRvU3RyaW5nKDM2KSA6IHNpbXBsZUhhc2gobmFtZSlcbiAgcmV0dXJuIGAke3Nhbml0aXplZC5zbGljZSgwLCBNQVhfU0FOSVRJWkVEX0xFTkdUSCl9LSR7aGFzaH1gXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUHJvamVjdCBkaXJlY3RvcnkgZGlzY292ZXJ5IChzaGFyZWQgYnkgbGlzdFNlc3Npb25zICYgZ2V0U2Vzc2lvbk1lc3NhZ2VzKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0c0RpcigpOiBzdHJpbmcge1xuICByZXR1cm4gam9pbihnZXRDbGF1ZGVDb25maWdIb21lRGlyKCksICdwcm9qZWN0cycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0RGlyKHByb2plY3REaXI6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBqb2luKGdldFByb2plY3RzRGlyKCksIHNhbml0aXplUGF0aChwcm9qZWN0RGlyKSlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGRpcmVjdG9yeSBwYXRoIHRvIGl0cyBjYW5vbmljYWwgZm9ybSB1c2luZyByZWFscGF0aCArIE5GQ1xuICogbm9ybWFsaXphdGlvbi4gRmFsbHMgYmFjayB0byBORkMtb25seSBpZiByZWFscGF0aCBmYWlscyAoZS5nLiwgdGhlXG4gKiBkaXJlY3RvcnkgZG9lc24ndCBleGlzdCB5ZXQpLiBFbnN1cmVzIHN5bWxpbmtlZCBwYXRocyAoZS5nLixcbiAqIC90bXAgXHUyMTkyIC9wcml2YXRlL3RtcCBvbiBtYWNPUykgcmVzb2x2ZSB0byB0aGUgc2FtZSBwcm9qZWN0IGRpcmVjdG9yeS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbm9uaWNhbGl6ZVBhdGgoZGlyOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICB0cnkge1xuICAgIHJldHVybiAoYXdhaXQgcmVhbHBhdGgoZGlyKSkubm9ybWFsaXplKCdORkMnKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZGlyLm5vcm1hbGl6ZSgnTkZDJylcbiAgfVxufVxuXG4vKipcbiAqIEZpbmRzIHRoZSBwcm9qZWN0IGRpcmVjdG9yeSBmb3IgYSBnaXZlbiBwYXRoLCB0b2xlcmF0aW5nIGhhc2ggbWlzbWF0Y2hlc1xuICogZm9yIGxvbmcgcGF0aHMgKD4yMDAgY2hhcnMpLiBUaGUgQ0xJIHVzZXMgQnVuLmhhc2ggd2hpbGUgdGhlIFNESyB1bmRlclxuICogTm9kZS5qcyB1c2VzIHNpbXBsZUhhc2ggXHUyMDE0IGZvciBwYXRocyB0aGF0IGV4Y2VlZCBNQVhfU0FOSVRJWkVEX0xFTkdUSCxcbiAqIHRoZXNlIHByb2R1Y2UgZGlmZmVyZW50IGRpcmVjdG9yeSBzdWZmaXhlcy4gVGhpcyBmdW5jdGlvbiBmYWxscyBiYWNrIHRvXG4gKiBwcmVmaXgtYmFzZWQgc2Nhbm5pbmcgd2hlbiB0aGUgZXhhY3QgbWF0Y2ggZG9lc24ndCBleGlzdC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmRQcm9qZWN0RGlyKFxuICBwcm9qZWN0UGF0aDogc3RyaW5nLFxuKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHtcbiAgY29uc3QgZXhhY3QgPSBnZXRQcm9qZWN0RGlyKHByb2plY3RQYXRoKVxuICB0cnkge1xuICAgIGF3YWl0IHJlYWRkaXIoZXhhY3QpXG4gICAgcmV0dXJuIGV4YWN0XG4gIH0gY2F0Y2gge1xuICAgIC8vIEV4YWN0IG1hdGNoIGZhaWxlZCBcdTIwMTQgZm9yIHNob3J0IHBhdGhzIHRoaXMgbWVhbnMgbm8gc2Vzc2lvbnMgZXhpc3QuXG4gICAgLy8gRm9yIGxvbmcgcGF0aHMsIHRyeSBwcmVmaXggbWF0Y2hpbmcgdG8gaGFuZGxlIGhhc2ggbWlzbWF0Y2hlcy5cbiAgICBjb25zdCBzYW5pdGl6ZWQgPSBzYW5pdGl6ZVBhdGgocHJvamVjdFBhdGgpXG4gICAgaWYgKHNhbml0aXplZC5sZW5ndGggPD0gTUFYX1NBTklUSVpFRF9MRU5HVEgpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG4gICAgY29uc3QgcHJlZml4ID0gc2FuaXRpemVkLnNsaWNlKDAsIE1BWF9TQU5JVElaRURfTEVOR1RIKVxuICAgIGNvbnN0IHByb2plY3RzRGlyID0gZ2V0UHJvamVjdHNEaXIoKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBkaXJlbnRzID0gYXdhaXQgcmVhZGRpcihwcm9qZWN0c0RpciwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pXG4gICAgICBjb25zdCBtYXRjaCA9IGRpcmVudHMuZmluZChcbiAgICAgICAgZCA9PiBkLmlzRGlyZWN0b3J5KCkgJiYgZC5uYW1lLnN0YXJ0c1dpdGgocHJlZml4ICsgJy0nKSxcbiAgICAgIClcbiAgICAgIHJldHVybiBtYXRjaCA/IGpvaW4ocHJvamVjdHNEaXIsIG1hdGNoLm5hbWUpIDogdW5kZWZpbmVkXG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVzb2x2ZSBhIHNlc3Npb25JZCB0byBpdHMgb24tZGlzayBKU09OTCBmaWxlIHBhdGguXG4gKlxuICogV2hlbiBgZGlyYCBpcyBwcm92aWRlZDogY2Fub25pY2FsaXplIGl0LCBsb29rIGluIHRoYXQgcHJvamVjdCdzIGRpcmVjdG9yeVxuICogKHdpdGggZmluZFByb2plY3REaXIgZmFsbGJhY2sgZm9yIEJ1bi9Ob2RlIGhhc2ggbWlzbWF0Y2hlcyksIHRoZW4gZmFsbCBiYWNrXG4gKiB0byBzaWJsaW5nIGdpdCB3b3JrdHJlZXMuIGBwcm9qZWN0UGF0aGAgaW4gdGhlIHJlc3VsdCBpcyB0aGUgY2Fub25pY2FsXG4gKiB1c2VyLWZhY2luZyBkaXJlY3RvcnkgdGhlIGZpbGUgd2FzIGZvdW5kIHVuZGVyLlxuICpcbiAqIFdoZW4gYGRpcmAgaXMgb21pdHRlZDogc2NhbiBhbGwgcHJvamVjdCBkaXJlY3RvcmllcyB1bmRlciB+Ly5jbGF1ZGUvcHJvamVjdHMvLlxuICogYHByb2plY3RQYXRoYCBpcyB1bmRlZmluZWQgaW4gdGhpcyBjYXNlIChubyBtZWFuaW5nZnVsIHByb2plY3QgcGF0aCB0byByZXBvcnQpLlxuICpcbiAqIEV4aXN0ZW5jZSBpcyBjaGVja2VkIGJ5IHN0YXQgKG9wZXJhdGUtdGhlbi1jYXRjaC1FTk9FTlQsIG5vIGV4aXN0c1N5bmMpLlxuICogWmVyby1ieXRlIGZpbGVzIGFyZSB0cmVhdGVkIGFzIG5vdC1mb3VuZCBzbyBjYWxsZXJzIGNvbnRpbnVlIHNlYXJjaGluZyBwYXN0XG4gKiBhIHRydW5jYXRlZCBjb3B5IHRvIGZpbmQgYSB2YWxpZCBvbmUgaW4gYSBzaWJsaW5nIGRpcmVjdG9yeS5cbiAqXG4gKiBgZmlsZVNpemVgIGlzIHJldHVybmVkIHNvIGNhbGxlcnMgKGxvYWRTZXNzaW9uQnVmZmVyKSBkb24ndCBuZWVkIHRvIHJlLXN0YXQuXG4gKlxuICogU2hhcmVkIGJ5IGdldFNlc3Npb25JbmZvSW1wbCBhbmQgZ2V0U2Vzc2lvbk1lc3NhZ2VzSW1wbCBcdTIwMTQgdGhlIGNhbGxlclxuICogaW52b2tlcyBpdHMgb3duIHJlYWRlciAocmVhZFNlc3Npb25MaXRlIC8gbG9hZFNlc3Npb25CdWZmZXIpIG9uIHRoZVxuICogcmVzb2x2ZWQgcGF0aC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc29sdmVTZXNzaW9uRmlsZVBhdGgoXG4gIHNlc3Npb25JZDogc3RyaW5nLFxuICBkaXI/OiBzdHJpbmcsXG4pOiBQcm9taXNlPFxuICB8IHsgZmlsZVBhdGg6IHN0cmluZzsgcHJvamVjdFBhdGg6IHN0cmluZyB8IHVuZGVmaW5lZDsgZmlsZVNpemU6IG51bWJlciB9XG4gIHwgdW5kZWZpbmVkXG4+IHtcbiAgY29uc3QgZmlsZU5hbWUgPSBgJHtzZXNzaW9uSWR9Lmpzb25sYFxuXG4gIGlmIChkaXIpIHtcbiAgICBjb25zdCBjYW5vbmljYWwgPSBhd2FpdCBjYW5vbmljYWxpemVQYXRoKGRpcilcbiAgICBjb25zdCBwcm9qZWN0RGlyID0gYXdhaXQgZmluZFByb2plY3REaXIoY2Fub25pY2FsKVxuICAgIGlmIChwcm9qZWN0RGlyKSB7XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IGpvaW4ocHJvamVjdERpciwgZmlsZU5hbWUpXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBzID0gYXdhaXQgc3RhdChmaWxlUGF0aClcbiAgICAgICAgaWYgKHMuc2l6ZSA+IDApXG4gICAgICAgICAgcmV0dXJuIHsgZmlsZVBhdGgsIHByb2plY3RQYXRoOiBjYW5vbmljYWwsIGZpbGVTaXplOiBzLnNpemUgfVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIEVOT0VOVC9FQUNDRVMgXHUyMDE0IGtlZXAgc2VhcmNoaW5nXG4gICAgICB9XG4gICAgfVxuICAgIC8vIFdvcmt0cmVlIGZhbGxiYWNrIFx1MjAxNCBzZXNzaW9ucyBtYXkgbGl2ZSB1bmRlciBhIGRpZmZlcmVudCB3b3JrdHJlZSByb290XG4gICAgbGV0IHdvcmt0cmVlUGF0aHM6IHN0cmluZ1tdXG4gICAgdHJ5IHtcbiAgICAgIHdvcmt0cmVlUGF0aHMgPSBhd2FpdCBnZXRXb3JrdHJlZVBhdGhzUG9ydGFibGUoY2Fub25pY2FsKVxuICAgIH0gY2F0Y2gge1xuICAgICAgd29ya3RyZWVQYXRocyA9IFtdXG4gICAgfVxuICAgIGZvciAoY29uc3Qgd3Qgb2Ygd29ya3RyZWVQYXRocykge1xuICAgICAgaWYgKHd0ID09PSBjYW5vbmljYWwpIGNvbnRpbnVlXG4gICAgICBjb25zdCB3dFByb2plY3REaXIgPSBhd2FpdCBmaW5kUHJvamVjdERpcih3dClcbiAgICAgIGlmICghd3RQcm9qZWN0RGlyKSBjb250aW51ZVxuICAgICAgY29uc3QgZmlsZVBhdGggPSBqb2luKHd0UHJvamVjdERpciwgZmlsZU5hbWUpXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBzID0gYXdhaXQgc3RhdChmaWxlUGF0aClcbiAgICAgICAgaWYgKHMuc2l6ZSA+IDApIHJldHVybiB7IGZpbGVQYXRoLCBwcm9qZWN0UGF0aDogd3QsIGZpbGVTaXplOiBzLnNpemUgfVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIEVOT0VOVC9FQUNDRVMgXHUyMDE0IGtlZXAgc2VhcmNoaW5nXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIC8vIE5vIGRpciBcdTIwMTQgc2NhbiBhbGwgcHJvamVjdCBkaXJlY3Rvcmllc1xuICBjb25zdCBwcm9qZWN0c0RpciA9IGdldFByb2plY3RzRGlyKClcbiAgbGV0IGRpcmVudHM6IHN0cmluZ1tdXG4gIHRyeSB7XG4gICAgZGlyZW50cyA9IGF3YWl0IHJlYWRkaXIocHJvamVjdHNEaXIpXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuICBmb3IgKGNvbnN0IG5hbWUgb2YgZGlyZW50cykge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gam9pbihwcm9qZWN0c0RpciwgbmFtZSwgZmlsZU5hbWUpXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHMgPSBhd2FpdCBzdGF0KGZpbGVQYXRoKVxuICAgICAgaWYgKHMuc2l6ZSA+IDApXG4gICAgICAgIHJldHVybiB7IGZpbGVQYXRoLCBwcm9qZWN0UGF0aDogdW5kZWZpbmVkLCBmaWxlU2l6ZTogcy5zaXplIH1cbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIEVOT0VOVC9FTk9URElSIFx1MjAxNCBub3QgaW4gdGhpcyBwcm9qZWN0LCBrZWVwIHNjYW5uaW5nXG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDb21wYWN0LWJvdW5kYXJ5IGNodW5rZWQgcmVhZCAoc2hhcmVkIGJ5IGxvYWRUcmFuc2NyaXB0RmlsZSAmIFNESyBnZXRTZXNzaW9uTWVzc2FnZXMpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqIENodW5rIHNpemUgZm9yIHRoZSBmb3J3YXJkIHRyYW5zY3JpcHQgcmVhZGVyLiAxIE1CIGJhbGFuY2VzIEkvTyBjYWxscyB2cyBidWZmZXIgZ3Jvd3RoLiAqL1xuY29uc3QgVFJBTlNDUklQVF9SRUFEX0NIVU5LX1NJWkUgPSAxMDI0ICogMTAyNFxuXG4vKipcbiAqIEZpbGUgc2l6ZSBiZWxvdyB3aGljaCBwcmVjb21wYWN0IGZpbHRlcmluZyBpcyBza2lwcGVkLlxuICogTGFyZ2Ugc2Vzc2lvbnMgKD41IE1CKSBhbG1vc3QgYWx3YXlzIGhhdmUgY29tcGFjdCBib3VuZGFyaWVzIFx1MjAxNCB0aGV5IGdvdCBiaWdcbiAqIGJlY2F1c2Ugb2YgbWFueSB0dXJucyB0cmlnZ2VyaW5nIGF1dG8tY29tcGFjdC5cbiAqL1xuZXhwb3J0IGNvbnN0IFNLSVBfUFJFQ09NUEFDVF9USFJFU0hPTEQgPSA1ICogMTAyNCAqIDEwMjRcblxuLyoqIE1hcmtlciBieXRlcyBzZWFyY2hlZCBmb3Igd2hlbiBsb2NhdGluZyB0aGUgYm91bmRhcnkuIExhenk6IGFsbG9jYXRlZCBvblxuICogZmlyc3QgdXNlLCBub3QgYXQgbW9kdWxlIGxvYWQuIE1vc3Qgc2Vzc2lvbnMgbmV2ZXIgcmVzdW1lLiAqL1xubGV0IF9jb21wYWN0Qm91bmRhcnlNYXJrZXI6IEJ1ZmZlciB8IHVuZGVmaW5lZFxuZnVuY3Rpb24gY29tcGFjdEJvdW5kYXJ5TWFya2VyKCk6IEJ1ZmZlciB7XG4gIHJldHVybiAoX2NvbXBhY3RCb3VuZGFyeU1hcmtlciA/Pz0gQnVmZmVyLmZyb20oJ1wiY29tcGFjdF9ib3VuZGFyeVwiJykpXG59XG5cbi8qKlxuICogQ29uZmlybSBhIGJ5dGUtbWF0Y2hlZCBsaW5lIGlzIGEgcmVhbCBjb21wYWN0X2JvdW5kYXJ5IChtYXJrZXIgY2FuIGFwcGVhclxuICogaW5zaWRlIHVzZXIgY29udGVudCkgYW5kIGNoZWNrIGZvciBwcmVzZXJ2ZWRTZWdtZW50LlxuICovXG5mdW5jdGlvbiBwYXJzZUJvdW5kYXJ5TGluZShcbiAgbGluZTogc3RyaW5nLFxuKTogeyBoYXNQcmVzZXJ2ZWRTZWdtZW50OiBib29sZWFuIH0gfCBudWxsIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKGxpbmUpIGFzIHtcbiAgICAgIHR5cGU/OiBzdHJpbmdcbiAgICAgIHN1YnR5cGU/OiBzdHJpbmdcbiAgICAgIGNvbXBhY3RNZXRhZGF0YT86IHsgcHJlc2VydmVkU2VnbWVudD86IHVua25vd24gfVxuICAgIH1cbiAgICBpZiAocGFyc2VkLnR5cGUgIT09ICdzeXN0ZW0nIHx8IHBhcnNlZC5zdWJ0eXBlICE9PSAnY29tcGFjdF9ib3VuZGFyeScpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBoYXNQcmVzZXJ2ZWRTZWdtZW50OiBCb29sZWFuKHBhcnNlZC5jb21wYWN0TWV0YWRhdGE/LnByZXNlcnZlZFNlZ21lbnQpLFxuICAgIH1cbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG4vKipcbiAqIFNpbmdsZSBmb3J3YXJkIGNodW5rZWQgcmVhZCBmb3IgdGhlIC0tcmVzdW1lIGxvYWQgcGF0aC4gQXR0ci1zbmFwIGxpbmVzXG4gKiBhcmUgc2tpcHBlZCBhdCB0aGUgZmQgbGV2ZWw7IGNvbXBhY3QgYm91bmRhcmllcyB0cnVuY2F0ZSBpbi1zdHJlYW0uIFBlYWtcbiAqIGlzIHRoZSBvdXRwdXQgc2l6ZSwgbm90IHRoZSBmaWxlIHNpemUuXG4gKlxuICogVGhlIHN1cnZpdmluZyAobGFzdCkgYXR0ci1zbmFwIGlzIGFwcGVuZGVkIGF0IEVPRiBpbnN0ZWFkIG9mIGluLXBsYWNlO1xuICogcmVzdG9yZUF0dHJpYnV0aW9uU3RhdGVGcm9tU25hcHNob3RzIG9ubHkgcmVhZHMgW2xlbmd0aC0xXSBzbyBwb3NpdGlvblxuICogZG9lc24ndCBtYXR0ZXIuXG4gKi9cblxudHlwZSBTaW5rID0geyBidWY6IEJ1ZmZlcjsgbGVuOiBudW1iZXI7IGNhcDogbnVtYmVyIH1cblxuZnVuY3Rpb24gc2lua1dyaXRlKHM6IFNpbmssIHNyYzogQnVmZmVyLCBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCBuID0gZW5kIC0gc3RhcnRcbiAgaWYgKG4gPD0gMCkgcmV0dXJuXG4gIGlmIChzLmxlbiArIG4gPiBzLmJ1Zi5sZW5ndGgpIHtcbiAgICBjb25zdCBncm93biA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShcbiAgICAgIE1hdGgubWluKE1hdGgubWF4KHMuYnVmLmxlbmd0aCAqIDIsIHMubGVuICsgbiksIHMuY2FwKSxcbiAgICApXG4gICAgcy5idWYuY29weShncm93biwgMCwgMCwgcy5sZW4pXG4gICAgcy5idWYgPSBncm93blxuICB9XG4gIHNyYy5jb3B5KHMuYnVmLCBzLmxlbiwgc3RhcnQsIGVuZClcbiAgcy5sZW4gKz0gblxufVxuXG5mdW5jdGlvbiBoYXNQcmVmaXgoXG4gIHNyYzogQnVmZmVyLFxuICBwcmVmaXg6IEJ1ZmZlcixcbiAgYXQ6IG51bWJlcixcbiAgZW5kOiBudW1iZXIsXG4pOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBlbmQgLSBhdCA+PSBwcmVmaXgubGVuZ3RoICYmXG4gICAgc3JjLmNvbXBhcmUocHJlZml4LCAwLCBwcmVmaXgubGVuZ3RoLCBhdCwgYXQgKyBwcmVmaXgubGVuZ3RoKSA9PT0gMFxuICApXG59XG5cbmNvbnN0IEFUVFJfU05BUF9QUkVGSVggPSBCdWZmZXIuZnJvbSgne1widHlwZVwiOlwiYXR0cmlidXRpb24tc25hcHNob3RcIicpXG5jb25zdCBTWVNURU1fUFJFRklYID0gQnVmZmVyLmZyb20oJ3tcInR5cGVcIjpcInN5c3RlbVwiJylcbmNvbnN0IExGID0gMHgwYVxuY29uc3QgTEZfQllURSA9IEJ1ZmZlci5mcm9tKFtMRl0pXG5jb25zdCBCT1VOREFSWV9TRUFSQ0hfQk9VTkQgPSAyNTYgLy8gbWFya2VyIHNpdHMgfjI4IGJ5dGVzIGluOyAyNTYgaXMgc2xhY2tcblxudHlwZSBMb2FkU3RhdGUgPSB7XG4gIG91dDogU2lua1xuICBib3VuZGFyeVN0YXJ0T2Zmc2V0OiBudW1iZXJcbiAgaGFzUHJlc2VydmVkU2VnbWVudDogYm9vbGVhblxuICBsYXN0U25hcFNyYzogQnVmZmVyIHwgbnVsbCAvLyBtb3N0LXJlY2VudCBhdHRyLXNuYXAsIGFwcGVuZGVkIGF0IEVPRlxuICBsYXN0U25hcExlbjogbnVtYmVyXG4gIGxhc3RTbmFwQnVmOiBCdWZmZXIgfCB1bmRlZmluZWRcbiAgYnVmRmlsZU9mZjogbnVtYmVyIC8vIGZpbGUgb2Zmc2V0IG9mIGJ1ZlswXVxuICBjYXJyeUxlbjogbnVtYmVyXG4gIGNhcnJ5QnVmOiBCdWZmZXIgfCB1bmRlZmluZWRcbiAgc3RyYWRkbGVTbmFwQ2FycnlMZW46IG51bWJlciAvLyBwZXItY2h1bms7IHJlc2V0IGJ5IHByb2Nlc3NTdHJhZGRsZVxuICBzdHJhZGRsZVNuYXBUYWlsRW5kOiBudW1iZXJcbn1cblxuLy8gTGluZSBzcGFubmluZyB0aGUgY2h1bmsgc2VhbS4gMCA9IGZhbGwgdGhyb3VnaCB0byBjb25jYXQuXG5mdW5jdGlvbiBwcm9jZXNzU3RyYWRkbGUoXG4gIHM6IExvYWRTdGF0ZSxcbiAgY2h1bms6IEJ1ZmZlcixcbiAgYnl0ZXNSZWFkOiBudW1iZXIsXG4pOiBudW1iZXIge1xuICBzLnN0cmFkZGxlU25hcENhcnJ5TGVuID0gMFxuICBzLnN0cmFkZGxlU25hcFRhaWxFbmQgPSAwXG4gIGlmIChzLmNhcnJ5TGVuID09PSAwKSByZXR1cm4gMFxuICBjb25zdCBjYiA9IHMuY2FycnlCdWYhXG4gIGNvbnN0IGZpcnN0TmwgPSBjaHVuay5pbmRleE9mKExGKVxuICBpZiAoZmlyc3RObCA9PT0gLTEgfHwgZmlyc3RObCA+PSBieXRlc1JlYWQpIHJldHVybiAwXG4gIGNvbnN0IHRhaWxFbmQgPSBmaXJzdE5sICsgMVxuICBpZiAoaGFzUHJlZml4KGNiLCBBVFRSX1NOQVBfUFJFRklYLCAwLCBzLmNhcnJ5TGVuKSkge1xuICAgIHMuc3RyYWRkbGVTbmFwQ2FycnlMZW4gPSBzLmNhcnJ5TGVuXG4gICAgcy5zdHJhZGRsZVNuYXBUYWlsRW5kID0gdGFpbEVuZFxuICAgIHMubGFzdFNuYXBTcmMgPSBudWxsXG4gIH0gZWxzZSBpZiAocy5jYXJyeUxlbiA8IEFUVFJfU05BUF9QUkVGSVgubGVuZ3RoKSB7XG4gICAgcmV0dXJuIDAgLy8gdG9vIHNob3J0IHRvIHJ1bGUgb3V0IGF0dHItc25hcFxuICB9IGVsc2Uge1xuICAgIGlmIChoYXNQcmVmaXgoY2IsIFNZU1RFTV9QUkVGSVgsIDAsIHMuY2FycnlMZW4pKSB7XG4gICAgICBjb25zdCBoaXQgPSBwYXJzZUJvdW5kYXJ5TGluZShcbiAgICAgICAgY2IudG9TdHJpbmcoJ3V0Zi04JywgMCwgcy5jYXJyeUxlbikgK1xuICAgICAgICAgIGNodW5rLnRvU3RyaW5nKCd1dGYtOCcsIDAsIGZpcnN0TmwpLFxuICAgICAgKVxuICAgICAgaWYgKGhpdD8uaGFzUHJlc2VydmVkU2VnbWVudCkge1xuICAgICAgICBzLmhhc1ByZXNlcnZlZFNlZ21lbnQgPSB0cnVlXG4gICAgICB9IGVsc2UgaWYgKGhpdCkge1xuICAgICAgICBzLm91dC5sZW4gPSAwXG4gICAgICAgIHMuYm91bmRhcnlTdGFydE9mZnNldCA9IHMuYnVmRmlsZU9mZlxuICAgICAgICBzLmhhc1ByZXNlcnZlZFNlZ21lbnQgPSBmYWxzZVxuICAgICAgICBzLmxhc3RTbmFwU3JjID0gbnVsbFxuICAgICAgfVxuICAgIH1cbiAgICBzaW5rV3JpdGUocy5vdXQsIGNiLCAwLCBzLmNhcnJ5TGVuKVxuICAgIHNpbmtXcml0ZShzLm91dCwgY2h1bmssIDAsIHRhaWxFbmQpXG4gIH1cbiAgcy5idWZGaWxlT2ZmICs9IHMuY2FycnlMZW4gKyB0YWlsRW5kXG4gIHMuY2FycnlMZW4gPSAwXG4gIHJldHVybiB0YWlsRW5kXG59XG5cbi8vIFN0cmlwIGF0dHItc25hcHMsIHRydW5jYXRlIG9uIGJvdW5kYXJpZXMuIEtlcHQgbGluZXMgd3JpdGUgYXMgcnVucy5cbmZ1bmN0aW9uIHNjYW5DaHVua0xpbmVzKFxuICBzOiBMb2FkU3RhdGUsXG4gIGJ1ZjogQnVmZmVyLFxuICBib3VuZGFyeU1hcmtlcjogQnVmZmVyLFxuKTogeyBsYXN0U25hcFN0YXJ0OiBudW1iZXI7IGxhc3RTbmFwRW5kOiBudW1iZXI7IHRyYWlsU3RhcnQ6IG51bWJlciB9IHtcbiAgbGV0IGJvdW5kYXJ5QXQgPSBidWYuaW5kZXhPZihib3VuZGFyeU1hcmtlcilcbiAgbGV0IHJ1blN0YXJ0ID0gMFxuICBsZXQgbGluZVN0YXJ0ID0gMFxuICBsZXQgbGFzdFNuYXBTdGFydCA9IC0xXG4gIGxldCBsYXN0U25hcEVuZCA9IC0xXG4gIGxldCBubCA9IGJ1Zi5pbmRleE9mKExGKVxuICB3aGlsZSAobmwgIT09IC0xKSB7XG4gICAgY29uc3QgbGluZUVuZCA9IG5sICsgMVxuICAgIGlmIChib3VuZGFyeUF0ICE9PSAtMSAmJiBib3VuZGFyeUF0IDwgbGluZVN0YXJ0KSB7XG4gICAgICBib3VuZGFyeUF0ID0gYnVmLmluZGV4T2YoYm91bmRhcnlNYXJrZXIsIGxpbmVTdGFydClcbiAgICB9XG4gICAgaWYgKGhhc1ByZWZpeChidWYsIEFUVFJfU05BUF9QUkVGSVgsIGxpbmVTdGFydCwgbGluZUVuZCkpIHtcbiAgICAgIHNpbmtXcml0ZShzLm91dCwgYnVmLCBydW5TdGFydCwgbGluZVN0YXJ0KVxuICAgICAgbGFzdFNuYXBTdGFydCA9IGxpbmVTdGFydFxuICAgICAgbGFzdFNuYXBFbmQgPSBsaW5lRW5kXG4gICAgICBydW5TdGFydCA9IGxpbmVFbmRcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgYm91bmRhcnlBdCA+PSBsaW5lU3RhcnQgJiZcbiAgICAgIGJvdW5kYXJ5QXQgPCBNYXRoLm1pbihsaW5lU3RhcnQgKyBCT1VOREFSWV9TRUFSQ0hfQk9VTkQsIGxpbmVFbmQpXG4gICAgKSB7XG4gICAgICBjb25zdCBoaXQgPSBwYXJzZUJvdW5kYXJ5TGluZShidWYudG9TdHJpbmcoJ3V0Zi04JywgbGluZVN0YXJ0LCBubCkpXG4gICAgICBpZiAoaGl0Py5oYXNQcmVzZXJ2ZWRTZWdtZW50KSB7XG4gICAgICAgIHMuaGFzUHJlc2VydmVkU2VnbWVudCA9IHRydWUgLy8gZG9uJ3QgdHJ1bmNhdGU7IHByZXNlcnZlZCBtc2dzIGFscmVhZHkgaW4gb3V0cHV0XG4gICAgICB9IGVsc2UgaWYgKGhpdCkge1xuICAgICAgICBzLm91dC5sZW4gPSAwXG4gICAgICAgIHMuYm91bmRhcnlTdGFydE9mZnNldCA9IHMuYnVmRmlsZU9mZiArIGxpbmVTdGFydFxuICAgICAgICBzLmhhc1ByZXNlcnZlZFNlZ21lbnQgPSBmYWxzZVxuICAgICAgICBzLmxhc3RTbmFwU3JjID0gbnVsbFxuICAgICAgICBsYXN0U25hcFN0YXJ0ID0gLTFcbiAgICAgICAgcy5zdHJhZGRsZVNuYXBDYXJyeUxlbiA9IDBcbiAgICAgICAgcnVuU3RhcnQgPSBsaW5lU3RhcnRcbiAgICAgIH1cbiAgICAgIGJvdW5kYXJ5QXQgPSBidWYuaW5kZXhPZihcbiAgICAgICAgYm91bmRhcnlNYXJrZXIsXG4gICAgICAgIGJvdW5kYXJ5QXQgKyBib3VuZGFyeU1hcmtlci5sZW5ndGgsXG4gICAgICApXG4gICAgfVxuICAgIGxpbmVTdGFydCA9IGxpbmVFbmRcbiAgICBubCA9IGJ1Zi5pbmRleE9mKExGLCBsaW5lU3RhcnQpXG4gIH1cbiAgc2lua1dyaXRlKHMub3V0LCBidWYsIHJ1blN0YXJ0LCBsaW5lU3RhcnQpXG4gIHJldHVybiB7IGxhc3RTbmFwU3RhcnQsIGxhc3RTbmFwRW5kLCB0cmFpbFN0YXJ0OiBsaW5lU3RhcnQgfVxufVxuXG4vLyBJbi1idWYgc25hcCB3aW5zIG92ZXIgc3RyYWRkbGUgKGxhdGVyIGluIGZpbGUpLiBjYXJyeUJ1ZiBzdGlsbCB2YWxpZCBoZXJlLlxuZnVuY3Rpb24gY2FwdHVyZVNuYXAoXG4gIHM6IExvYWRTdGF0ZSxcbiAgYnVmOiBCdWZmZXIsXG4gIGNodW5rOiBCdWZmZXIsXG4gIGxhc3RTbmFwU3RhcnQ6IG51bWJlcixcbiAgbGFzdFNuYXBFbmQ6IG51bWJlcixcbik6IHZvaWQge1xuICBpZiAobGFzdFNuYXBTdGFydCAhPT0gLTEpIHtcbiAgICBzLmxhc3RTbmFwTGVuID0gbGFzdFNuYXBFbmQgLSBsYXN0U25hcFN0YXJ0XG4gICAgaWYgKHMubGFzdFNuYXBCdWYgPT09IHVuZGVmaW5lZCB8fCBzLmxhc3RTbmFwTGVuID4gcy5sYXN0U25hcEJ1Zi5sZW5ndGgpIHtcbiAgICAgIHMubGFzdFNuYXBCdWYgPSBCdWZmZXIuYWxsb2NVbnNhZmUocy5sYXN0U25hcExlbilcbiAgICB9XG4gICAgYnVmLmNvcHkocy5sYXN0U25hcEJ1ZiwgMCwgbGFzdFNuYXBTdGFydCwgbGFzdFNuYXBFbmQpXG4gICAgcy5sYXN0U25hcFNyYyA9IHMubGFzdFNuYXBCdWZcbiAgfSBlbHNlIGlmIChzLnN0cmFkZGxlU25hcENhcnJ5TGVuID4gMCkge1xuICAgIHMubGFzdFNuYXBMZW4gPSBzLnN0cmFkZGxlU25hcENhcnJ5TGVuICsgcy5zdHJhZGRsZVNuYXBUYWlsRW5kXG4gICAgaWYgKHMubGFzdFNuYXBCdWYgPT09IHVuZGVmaW5lZCB8fCBzLmxhc3RTbmFwTGVuID4gcy5sYXN0U25hcEJ1Zi5sZW5ndGgpIHtcbiAgICAgIHMubGFzdFNuYXBCdWYgPSBCdWZmZXIuYWxsb2NVbnNhZmUocy5sYXN0U25hcExlbilcbiAgICB9XG4gICAgcy5jYXJyeUJ1ZiEuY29weShzLmxhc3RTbmFwQnVmLCAwLCAwLCBzLnN0cmFkZGxlU25hcENhcnJ5TGVuKVxuICAgIGNodW5rLmNvcHkocy5sYXN0U25hcEJ1Ziwgcy5zdHJhZGRsZVNuYXBDYXJyeUxlbiwgMCwgcy5zdHJhZGRsZVNuYXBUYWlsRW5kKVxuICAgIHMubGFzdFNuYXBTcmMgPSBzLmxhc3RTbmFwQnVmXG4gIH1cbn1cblxuZnVuY3Rpb24gY2FwdHVyZUNhcnJ5KHM6IExvYWRTdGF0ZSwgYnVmOiBCdWZmZXIsIHRyYWlsU3RhcnQ6IG51bWJlcik6IHZvaWQge1xuICBzLmNhcnJ5TGVuID0gYnVmLmxlbmd0aCAtIHRyYWlsU3RhcnRcbiAgaWYgKHMuY2FycnlMZW4gPiAwKSB7XG4gICAgaWYgKHMuY2FycnlCdWYgPT09IHVuZGVmaW5lZCB8fCBzLmNhcnJ5TGVuID4gcy5jYXJyeUJ1Zi5sZW5ndGgpIHtcbiAgICAgIHMuY2FycnlCdWYgPSBCdWZmZXIuYWxsb2NVbnNhZmUocy5jYXJyeUxlbilcbiAgICB9XG4gICAgYnVmLmNvcHkocy5jYXJyeUJ1ZiwgMCwgdHJhaWxTdGFydCwgYnVmLmxlbmd0aClcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5hbGl6ZU91dHB1dChzOiBMb2FkU3RhdGUpOiB2b2lkIHtcbiAgaWYgKHMuY2FycnlMZW4gPiAwKSB7XG4gICAgY29uc3QgY2IgPSBzLmNhcnJ5QnVmIVxuICAgIGlmIChoYXNQcmVmaXgoY2IsIEFUVFJfU05BUF9QUkVGSVgsIDAsIHMuY2FycnlMZW4pKSB7XG4gICAgICBzLmxhc3RTbmFwU3JjID0gY2JcbiAgICAgIHMubGFzdFNuYXBMZW4gPSBzLmNhcnJ5TGVuXG4gICAgfSBlbHNlIHtcbiAgICAgIHNpbmtXcml0ZShzLm91dCwgY2IsIDAsIHMuY2FycnlMZW4pXG4gICAgfVxuICB9XG4gIGlmIChzLmxhc3RTbmFwU3JjKSB7XG4gICAgaWYgKHMub3V0LmxlbiA+IDAgJiYgcy5vdXQuYnVmW3Mub3V0LmxlbiAtIDFdICE9PSBMRikge1xuICAgICAgc2lua1dyaXRlKHMub3V0LCBMRl9CWVRFLCAwLCAxKVxuICAgIH1cbiAgICBzaW5rV3JpdGUocy5vdXQsIHMubGFzdFNuYXBTcmMsIDAsIHMubGFzdFNuYXBMZW4pXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlYWRUcmFuc2NyaXB0Rm9yTG9hZChcbiAgZmlsZVBhdGg6IHN0cmluZyxcbiAgZmlsZVNpemU6IG51bWJlcixcbik6IFByb21pc2U8e1xuICBib3VuZGFyeVN0YXJ0T2Zmc2V0OiBudW1iZXJcbiAgcG9zdEJvdW5kYXJ5QnVmOiBCdWZmZXJcbiAgaGFzUHJlc2VydmVkU2VnbWVudDogYm9vbGVhblxufT4ge1xuICBjb25zdCBib3VuZGFyeU1hcmtlciA9IGNvbXBhY3RCb3VuZGFyeU1hcmtlcigpXG4gIGNvbnN0IENIVU5LX1NJWkUgPSBUUkFOU0NSSVBUX1JFQURfQ0hVTktfU0laRVxuXG4gIGNvbnN0IHM6IExvYWRTdGF0ZSA9IHtcbiAgICBvdXQ6IHtcbiAgICAgIC8vIEdhdGVkIGNhbGxlcnMgZW50ZXIgd2l0aCBmaWxlU2l6ZSA+IDVNQiwgc28gbWluKGZpbGVTaXplLCA4TUIpIGxhbmRzXG4gICAgICAvLyBpbiBbNSwgOF1NQjsgbGFyZ2UgYm91bmRhcnlsZXNzIHNlc3Npb25zICgyNC0zMU1CIG91dHB1dCkgdGFrZSAyXG4gICAgICAvLyBncm93cy4gVW5nYXRlZCBjYWxsZXJzIChhdHRyaWJ1dGlvbi50cykgcGFzcyBzbWFsbCBmaWxlcyB0b28gXHUyMDE0IHRoZVxuICAgICAgLy8gbWluIGp1c3QgcmlnaHQtc2l6ZXMgdGhlIGluaXRpYWwgYnVmLCBubyBncm93cy5cbiAgICAgIGJ1ZjogQnVmZmVyLmFsbG9jVW5zYWZlKE1hdGgubWluKGZpbGVTaXplLCA4ICogMTAyNCAqIDEwMjQpKSxcbiAgICAgIGxlbjogMCxcbiAgICAgIC8vICsxOiBmaW5hbGl6ZU91dHB1dCBtYXkgaW5zZXJ0IG9uZSBMRiBiZXR3ZWVuIGEgbm9uLUxGLXRlcm1pbmF0ZWRcbiAgICAgIC8vIGNhcnJ5IGFuZCB0aGUgcmVvcmRlcmVkIGxhc3QgYXR0ci1zbmFwIChjcmFzaC10cnVuY2F0ZWQgZmlsZSkuXG4gICAgICBjYXA6IGZpbGVTaXplICsgMSxcbiAgICB9LFxuICAgIGJvdW5kYXJ5U3RhcnRPZmZzZXQ6IDAsXG4gICAgaGFzUHJlc2VydmVkU2VnbWVudDogZmFsc2UsXG4gICAgbGFzdFNuYXBTcmM6IG51bGwsXG4gICAgbGFzdFNuYXBMZW46IDAsXG4gICAgbGFzdFNuYXBCdWY6IHVuZGVmaW5lZCxcbiAgICBidWZGaWxlT2ZmOiAwLFxuICAgIGNhcnJ5TGVuOiAwLFxuICAgIGNhcnJ5QnVmOiB1bmRlZmluZWQsXG4gICAgc3RyYWRkbGVTbmFwQ2FycnlMZW46IDAsXG4gICAgc3RyYWRkbGVTbmFwVGFpbEVuZDogMCxcbiAgfVxuXG4gIGNvbnN0IGNodW5rID0gQnVmZmVyLmFsbG9jVW5zYWZlKENIVU5LX1NJWkUpXG4gIGNvbnN0IGZkID0gYXdhaXQgZnNPcGVuKGZpbGVQYXRoLCAncicpXG4gIHRyeSB7XG4gICAgbGV0IGZpbGVQb3MgPSAwXG4gICAgd2hpbGUgKGZpbGVQb3MgPCBmaWxlU2l6ZSkge1xuICAgICAgY29uc3QgeyBieXRlc1JlYWQgfSA9IGF3YWl0IGZkLnJlYWQoXG4gICAgICAgIGNodW5rLFxuICAgICAgICAwLFxuICAgICAgICBNYXRoLm1pbihDSFVOS19TSVpFLCBmaWxlU2l6ZSAtIGZpbGVQb3MpLFxuICAgICAgICBmaWxlUG9zLFxuICAgICAgKVxuICAgICAgaWYgKGJ5dGVzUmVhZCA9PT0gMCkgYnJlYWtcbiAgICAgIGZpbGVQb3MgKz0gYnl0ZXNSZWFkXG5cbiAgICAgIGNvbnN0IGNodW5rT2ZmID0gcHJvY2Vzc1N0cmFkZGxlKHMsIGNodW5rLCBieXRlc1JlYWQpXG5cbiAgICAgIGxldCBidWY6IEJ1ZmZlclxuICAgICAgaWYgKHMuY2FycnlMZW4gPiAwKSB7XG4gICAgICAgIGNvbnN0IGJ1ZkxlbiA9IHMuY2FycnlMZW4gKyAoYnl0ZXNSZWFkIC0gY2h1bmtPZmYpXG4gICAgICAgIGJ1ZiA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShidWZMZW4pXG4gICAgICAgIHMuY2FycnlCdWYhLmNvcHkoYnVmLCAwLCAwLCBzLmNhcnJ5TGVuKVxuICAgICAgICBjaHVuay5jb3B5KGJ1Ziwgcy5jYXJyeUxlbiwgY2h1bmtPZmYsIGJ5dGVzUmVhZClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1ZiA9IGNodW5rLnN1YmFycmF5KGNodW5rT2ZmLCBieXRlc1JlYWQpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHIgPSBzY2FuQ2h1bmtMaW5lcyhzLCBidWYsIGJvdW5kYXJ5TWFya2VyKVxuICAgICAgY2FwdHVyZVNuYXAocywgYnVmLCBjaHVuaywgci5sYXN0U25hcFN0YXJ0LCByLmxhc3RTbmFwRW5kKVxuICAgICAgY2FwdHVyZUNhcnJ5KHMsIGJ1Ziwgci50cmFpbFN0YXJ0KVxuICAgICAgcy5idWZGaWxlT2ZmICs9IHIudHJhaWxTdGFydFxuICAgIH1cbiAgICBmaW5hbGl6ZU91dHB1dChzKVxuICB9IGZpbmFsbHkge1xuICAgIGF3YWl0IGZkLmNsb3NlKClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYm91bmRhcnlTdGFydE9mZnNldDogcy5ib3VuZGFyeVN0YXJ0T2Zmc2V0LFxuICAgIHBvc3RCb3VuZGFyeUJ1Zjogcy5vdXQuYnVmLnN1YmFycmF5KDAsIHMub3V0LmxlbiksXG4gICAgaGFzUHJlc2VydmVkU2VnbWVudDogcy5oYXNQcmVzZXJ2ZWRTZWdtZW50LFxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyxZQUFZLGtCQUFrQjtBQUN2QyxTQUFTLGlCQUFpQjtBQVUxQixlQUFzQix5QkFBeUIsS0FBZ0M7QUFDN0UsTUFBSTtBQUNGLFVBQU0sRUFBRSxPQUFPLElBQUksTUFBTTtBQUFBLE1BQ3ZCO0FBQUEsTUFDQSxDQUFDLFlBQVksUUFBUSxhQUFhO0FBQUEsTUFDbEMsRUFBRSxLQUFLLFNBQVMsSUFBSztBQUFBLElBQ3ZCO0FBQ0EsUUFBSSxDQUFDLE9BQVEsUUFBTyxDQUFDO0FBQ3JCLFdBQU8sT0FDSixNQUFNLElBQUksRUFDVixPQUFPLFVBQVEsS0FBSyxXQUFXLFdBQVcsQ0FBQyxFQUMzQyxJQUFJLFVBQVEsS0FBSyxNQUFNLFlBQVksTUFBTSxFQUFFLFVBQVUsS0FBSyxDQUFDO0FBQUEsRUFDaEUsUUFBUTtBQUNOLFdBQU8sQ0FBQztBQUFBLEVBQ1Y7QUFDRjtBQTFCQSxJQUdNO0FBSE47QUFBQTtBQUdBLElBQU0sZ0JBQWdCLFVBQVUsVUFBVTtBQUFBO0FBQUE7OztBQ00xQyxTQUFTLFFBQVEsUUFBUSxTQUFTLFVBQVUs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
