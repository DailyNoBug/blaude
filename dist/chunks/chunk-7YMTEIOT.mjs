#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  CLAUDE_CONFIG_DIRECTORIES,
  createBaseHookInput,
  executeFileSuggestionCommand,
  init_hooks2 as init_hooks,
  init_markdownConfigLoader,
  init_ripgrep,
  loadMarkdownFilesForSubdir,
  require_ignore,
  ripGrep
} from "./chunk-5INIV6TQ.mjs";
import {
  getGlobalConfig,
  getInitialSettings,
  init_config,
  init_settings2 as init_settings
} from "./chunk-JQ55XPLZ.mjs";
import {
  expandPath,
  init_path
} from "./chunk-5EA44JDA.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-M5NTYAY2.mjs";
import {
  findGitRoot,
  gitExe,
  init_git
} from "./chunk-SF3TOBTZ.mjs";
import {
  execFileNoThrowWithCwd,
  init_execFileNoThrow
} from "./chunk-IVTTVOOG.mjs";
import {
  getCwd,
  init_cwd
} from "./chunk-TZFTPSMG.mjs";
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import {
  errorMessage,
  getFsImplementation,
  init_debug,
  init_errors,
  init_fsOperations,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import {
  createSignal,
  init_signal
} from "./chunk-NGSB34MB.mjs";
import {
  __esm,
  __toESM
} from "./chunk-O5PZ3G6I.mjs";

// src/native-ts/file-index/index.ts
function scoreBonusAt(path2, pos, first) {
  if (pos === 0) return first ? BONUS_FIRST_CHAR : 0;
  const prevCh = path2.charCodeAt(pos - 1);
  if (isBoundary(prevCh)) return BONUS_BOUNDARY;
  if (isLower(prevCh) && isUpper(path2.charCodeAt(pos))) return BONUS_CAMEL;
  return 0;
}
function isBoundary(code) {
  return code === 47 || // /
  code === 92 || // \
  code === 45 || // -
  code === 95 || // _
  code === 46 || // .
  code === 32;
}
function isLower(code) {
  return code >= 97 && code <= 122;
}
function isUpper(code) {
  return code >= 65 && code <= 90;
}
function yieldToEventLoop() {
  return new Promise((resolve) => setImmediate(resolve));
}
function computeTopLevelEntries(paths, limit) {
  const topLevel = /* @__PURE__ */ new Set();
  for (const p of paths) {
    let end = p.length;
    for (let i = 0; i < p.length; i++) {
      const c = p.charCodeAt(i);
      if (c === 47 || c === 92) {
        end = i;
        break;
      }
    }
    const segment = p.slice(0, end);
    if (segment.length > 0) {
      topLevel.add(segment);
      if (topLevel.size >= limit) break;
    }
  }
  const sorted = Array.from(topLevel);
  sorted.sort((a, b) => {
    const lenDiff = a.length - b.length;
    if (lenDiff !== 0) return lenDiff;
    return a < b ? -1 : a > b ? 1 : 0;
  });
  return sorted.slice(0, limit).map((path2) => ({ path: path2, score: 0 }));
}
var SCORE_MATCH, BONUS_BOUNDARY, BONUS_CAMEL, BONUS_CONSECUTIVE, BONUS_FIRST_CHAR, PENALTY_GAP_START, PENALTY_GAP_EXTENSION, TOP_LEVEL_CACHE_LIMIT, MAX_QUERY_LEN, CHUNK_MS, posBuf, FileIndex;
var init_file_index = __esm({
  "src/native-ts/file-index/index.ts"() {
    SCORE_MATCH = 16;
    BONUS_BOUNDARY = 8;
    BONUS_CAMEL = 6;
    BONUS_CONSECUTIVE = 4;
    BONUS_FIRST_CHAR = 8;
    PENALTY_GAP_START = 3;
    PENALTY_GAP_EXTENSION = 1;
    TOP_LEVEL_CACHE_LIMIT = 100;
    MAX_QUERY_LEN = 64;
    CHUNK_MS = 4;
    posBuf = new Int32Array(MAX_QUERY_LEN);
    FileIndex = class {
      paths = [];
      lowerPaths = [];
      charBits = new Int32Array(0);
      pathLens = new Uint16Array(0);
      topLevelCache = null;
      // During async build, tracks how many paths have bitmap/lowerPath filled.
      // search() uses this to search the ready prefix while build continues.
      readyCount = 0;
      /**
       * Load paths from an array of strings.
       * This is the main way to populate the index — ripgrep collects files, we just search them.
       * Automatically deduplicates paths.
       */
      loadFromFileList(fileList) {
        const seen = /* @__PURE__ */ new Set();
        const paths = [];
        for (const line of fileList) {
          if (line.length > 0 && !seen.has(line)) {
            seen.add(line);
            paths.push(line);
          }
        }
        this.buildIndex(paths);
      }
      /**
       * Async variant: yields to the event loop every ~8–12k paths so large
       * indexes (270k+ files) don't block the main thread for >10ms at a time.
       * Identical result to loadFromFileList.
       *
       * Returns { queryable, done }:
       *   - queryable: resolves as soon as the first chunk is indexed (search
       *     returns partial results). For a 270k-path list this is ~5–10ms of
       *     sync work after the paths array is available.
       *   - done: resolves when the entire index is built.
       */
      loadFromFileListAsync(fileList) {
        let markQueryable = () => {
        };
        const queryable = new Promise((resolve) => {
          markQueryable = resolve;
        });
        const done = this.buildAsync(fileList, markQueryable);
        return { queryable, done };
      }
      async buildAsync(fileList, markQueryable) {
        const seen = /* @__PURE__ */ new Set();
        const paths = [];
        let chunkStart = performance.now();
        for (let i = 0; i < fileList.length; i++) {
          const line = fileList[i];
          if (line.length > 0 && !seen.has(line)) {
            seen.add(line);
            paths.push(line);
          }
          if ((i & 255) === 255 && performance.now() - chunkStart > CHUNK_MS) {
            await yieldToEventLoop();
            chunkStart = performance.now();
          }
        }
        this.resetArrays(paths);
        chunkStart = performance.now();
        let firstChunk = true;
        for (let i = 0; i < paths.length; i++) {
          this.indexPath(i);
          if ((i & 255) === 255 && performance.now() - chunkStart > CHUNK_MS) {
            this.readyCount = i + 1;
            if (firstChunk) {
              markQueryable();
              firstChunk = false;
            }
            await yieldToEventLoop();
            chunkStart = performance.now();
          }
        }
        this.readyCount = paths.length;
        markQueryable();
      }
      buildIndex(paths) {
        this.resetArrays(paths);
        for (let i = 0; i < paths.length; i++) {
          this.indexPath(i);
        }
        this.readyCount = paths.length;
      }
      resetArrays(paths) {
        const n = paths.length;
        this.paths = paths;
        this.lowerPaths = new Array(n);
        this.charBits = new Int32Array(n);
        this.pathLens = new Uint16Array(n);
        this.readyCount = 0;
        this.topLevelCache = computeTopLevelEntries(paths, TOP_LEVEL_CACHE_LIMIT);
      }
      // Precompute: lowercase, a–z bitmap, length. Bitmap gives O(1) rejection
      // of paths missing any needle letter (89% survival for broad queries like
      // "test" → still a 10%+ free win; 90%+ rejection for rare chars).
      indexPath(i) {
        const lp = this.paths[i].toLowerCase();
        this.lowerPaths[i] = lp;
        const len = lp.length;
        this.pathLens[i] = len;
        let bits = 0;
        for (let j = 0; j < len; j++) {
          const c = lp.charCodeAt(j);
          if (c >= 97 && c <= 122) bits |= 1 << c - 97;
        }
        this.charBits[i] = bits;
      }
      /**
       * Search for files matching the query using fuzzy matching.
       * Returns top N results sorted by match score.
       */
      search(query, limit) {
        if (limit <= 0) return [];
        if (query.length === 0) {
          if (this.topLevelCache) {
            return this.topLevelCache.slice(0, limit);
          }
          return [];
        }
        const caseSensitive = query !== query.toLowerCase();
        const needle = caseSensitive ? query : query.toLowerCase();
        const nLen = Math.min(needle.length, MAX_QUERY_LEN);
        const needleChars = new Array(nLen);
        let needleBitmap = 0;
        for (let j = 0; j < nLen; j++) {
          const ch = needle.charAt(j);
          needleChars[j] = ch;
          const cc = ch.charCodeAt(0);
          if (cc >= 97 && cc <= 122) needleBitmap |= 1 << cc - 97;
        }
        const scoreCeiling = nLen * (SCORE_MATCH + BONUS_BOUNDARY) + BONUS_FIRST_CHAR + 32;
        const topK = [];
        let threshold = -Infinity;
        const { paths, lowerPaths, charBits, pathLens, readyCount } = this;
        outer: for (let i = 0; i < readyCount; i++) {
          if ((charBits[i] & needleBitmap) !== needleBitmap) continue;
          const haystack = caseSensitive ? paths[i] : lowerPaths[i];
          let pos = haystack.indexOf(needleChars[0]);
          if (pos === -1) continue;
          posBuf[0] = pos;
          let gapPenalty = 0;
          let consecBonus = 0;
          let prev = pos;
          for (let j = 1; j < nLen; j++) {
            pos = haystack.indexOf(needleChars[j], prev + 1);
            if (pos === -1) continue outer;
            posBuf[j] = pos;
            const gap = pos - prev - 1;
            if (gap === 0) consecBonus += BONUS_CONSECUTIVE;
            else gapPenalty += PENALTY_GAP_START + gap * PENALTY_GAP_EXTENSION;
            prev = pos;
          }
          if (topK.length === limit && scoreCeiling + consecBonus - gapPenalty <= threshold) {
            continue;
          }
          const path2 = paths[i];
          const hLen = pathLens[i];
          let score = nLen * SCORE_MATCH + consecBonus - gapPenalty;
          score += scoreBonusAt(path2, posBuf[0], true);
          for (let j = 1; j < nLen; j++) {
            score += scoreBonusAt(path2, posBuf[j], false);
          }
          score += Math.max(0, 32 - (hLen >> 2));
          if (topK.length < limit) {
            topK.push({ path: path2, fuzzScore: score });
            if (topK.length === limit) {
              topK.sort((a, b) => a.fuzzScore - b.fuzzScore);
              threshold = topK[0].fuzzScore;
            }
          } else if (score > threshold) {
            let lo = 0;
            let hi = topK.length;
            while (lo < hi) {
              const mid = lo + hi >> 1;
              if (topK[mid].fuzzScore < score) lo = mid + 1;
              else hi = mid;
            }
            topK.splice(lo, 0, { path: path2, fuzzScore: score });
            topK.shift();
            threshold = topK[0].fuzzScore;
          }
        }
        topK.sort((a, b) => b.fuzzScore - a.fuzzScore);
        const matchCount = topK.length;
        const denom = Math.max(matchCount, 1);
        const results = new Array(matchCount);
        for (let i = 0; i < matchCount; i++) {
          const path2 = topK[i].path;
          const positionScore = i / denom;
          const finalScore = path2.includes("test") ? Math.min(positionScore * 1.05, 1) : positionScore;
          results[i] = { path: path2, score: finalScore };
        }
        return results;
      }
    };
  }
});

// src/hooks/fileSuggestions.ts
import { statSync } from "fs";
import * as path from "path";
function getFileIndex() {
  if (!fileIndex) {
    fileIndex = new FileIndex();
  }
  return fileIndex;
}
function clearFileSuggestionCaches() {
  fileIndex = null;
  fileListRefreshPromise = null;
  cacheGeneration++;
  untrackedFetchPromise = null;
  cachedTrackedFiles = [];
  cachedConfigFiles = [];
  cachedTrackedDirs = [];
  indexBuildComplete.clear();
  ignorePatternsCache = null;
  ignorePatternsCacheKey = null;
  lastRefreshMs = 0;
  lastGitIndexMtime = null;
  loadedTrackedSignature = null;
  loadedMergedSignature = null;
}
function pathListSignature(paths) {
  const n = paths.length;
  const stride = Math.max(1, Math.floor(n / 500));
  let h = 2166136261 | 0;
  for (let i = 0; i < n; i += stride) {
    const p = paths[i];
    for (let j = 0; j < p.length; j++) {
      h = (h ^ p.charCodeAt(j)) * 16777619 | 0;
    }
    h = h * 16777619 | 0;
  }
  if (n > 0) {
    const last = paths[n - 1];
    for (let j = 0; j < last.length; j++) {
      h = (h ^ last.charCodeAt(j)) * 16777619 | 0;
    }
  }
  return `${n}:${(h >>> 0).toString(16)}`;
}
function getGitIndexMtime() {
  const repoRoot = findGitRoot(getCwd());
  if (!repoRoot) return null;
  try {
    return statSync(path.join(repoRoot, ".git", "index")).mtimeMs;
  } catch {
    return null;
  }
}
function normalizeGitPaths(files, repoRoot, originalCwd) {
  if (originalCwd === repoRoot) {
    return files;
  }
  return files.map((f) => {
    const absolutePath = path.join(repoRoot, f);
    return path.relative(originalCwd, absolutePath);
  });
}
async function mergeUntrackedIntoNormalizedCache(normalizedUntracked) {
  if (normalizedUntracked.length === 0) return;
  if (!fileIndex || cachedTrackedFiles.length === 0) return;
  const untrackedDirs = await getDirectoryNamesAsync(normalizedUntracked);
  const allPaths = [
    ...cachedTrackedFiles,
    ...cachedConfigFiles,
    ...cachedTrackedDirs,
    ...normalizedUntracked,
    ...untrackedDirs
  ];
  const sig = pathListSignature(allPaths);
  if (sig === loadedMergedSignature) {
    logForDebugging(
      `[FileIndex] skipped index rebuild \u2014 merged paths unchanged`
    );
    return;
  }
  await fileIndex.loadFromFileListAsync(allPaths).done;
  loadedMergedSignature = sig;
  logForDebugging(
    `[FileIndex] rebuilt index with ${cachedTrackedFiles.length} tracked + ${normalizedUntracked.length} untracked files`
  );
}
async function loadRipgrepIgnorePatterns(repoRoot, cwd) {
  const cacheKey = `${repoRoot}:${cwd}`;
  if (ignorePatternsCacheKey === cacheKey) {
    return ignorePatternsCache;
  }
  const fs = getFsImplementation();
  const ignoreFiles = [".ignore", ".rgignore"];
  const directories = [.../* @__PURE__ */ new Set([repoRoot, cwd])];
  const ig = (0, import_ignore.default)();
  let hasPatterns = false;
  const paths = directories.flatMap(
    (dir) => ignoreFiles.map((f) => path.join(dir, f))
  );
  const contents = await Promise.all(
    paths.map((p) => fs.readFile(p, { encoding: "utf8" }).catch(() => null))
  );
  for (const [i, content] of contents.entries()) {
    if (content === null) continue;
    ig.add(content);
    hasPatterns = true;
    logForDebugging(`[FileIndex] loaded ignore patterns from ${paths[i]}`);
  }
  const result = hasPatterns ? ig : null;
  ignorePatternsCache = result;
  ignorePatternsCacheKey = cacheKey;
  return result;
}
async function getFilesUsingGit(abortSignal, respectGitignore) {
  const startTime = Date.now();
  logForDebugging(`[FileIndex] getFilesUsingGit called`);
  const repoRoot = findGitRoot(getCwd());
  if (!repoRoot) {
    logForDebugging(`[FileIndex] not a git repo, returning null`);
    return null;
  }
  try {
    const cwd = getCwd();
    const lsFilesStart = Date.now();
    const trackedResult = await execFileNoThrowWithCwd(
      gitExe(),
      ["-c", "core.quotepath=false", "ls-files", "--recurse-submodules"],
      { timeout: 5e3, abortSignal, cwd: repoRoot }
    );
    logForDebugging(
      `[FileIndex] git ls-files (tracked) took ${Date.now() - lsFilesStart}ms`
    );
    if (trackedResult.code !== 0) {
      logForDebugging(
        `[FileIndex] git ls-files failed (code=${trackedResult.code}, stderr=${trackedResult.stderr}), falling back to ripgrep`
      );
      return null;
    }
    const trackedFiles = trackedResult.stdout.trim().split("\n").filter(Boolean);
    let normalizedTracked = normalizeGitPaths(trackedFiles, repoRoot, cwd);
    const ignorePatterns = await loadRipgrepIgnorePatterns(repoRoot, cwd);
    if (ignorePatterns) {
      const beforeCount = normalizedTracked.length;
      normalizedTracked = ignorePatterns.filter(normalizedTracked);
      logForDebugging(
        `[FileIndex] applied ignore patterns: ${beforeCount} -> ${normalizedTracked.length} files`
      );
    }
    cachedTrackedFiles = normalizedTracked;
    const duration = Date.now() - startTime;
    logForDebugging(
      `[FileIndex] git ls-files: ${normalizedTracked.length} tracked files in ${duration}ms`
    );
    logEvent("tengu_file_suggestions_git_ls_files", {
      file_count: normalizedTracked.length,
      tracked_count: normalizedTracked.length,
      untracked_count: 0,
      duration_ms: duration
    });
    if (!untrackedFetchPromise) {
      const untrackedArgs = respectGitignore ? [
        "-c",
        "core.quotepath=false",
        "ls-files",
        "--others",
        "--exclude-standard"
      ] : ["-c", "core.quotepath=false", "ls-files", "--others"];
      const generation = cacheGeneration;
      untrackedFetchPromise = execFileNoThrowWithCwd(gitExe(), untrackedArgs, {
        timeout: 1e4,
        cwd: repoRoot
      }).then(async (untrackedResult) => {
        if (generation !== cacheGeneration) {
          return;
        }
        if (untrackedResult.code === 0) {
          const rawUntrackedFiles = untrackedResult.stdout.trim().split("\n").filter(Boolean);
          let normalizedUntracked = normalizeGitPaths(
            rawUntrackedFiles,
            repoRoot,
            cwd
          );
          const ignorePatterns2 = await loadRipgrepIgnorePatterns(
            repoRoot,
            cwd
          );
          if (ignorePatterns2 && normalizedUntracked.length > 0) {
            const beforeCount = normalizedUntracked.length;
            normalizedUntracked = ignorePatterns2.filter(normalizedUntracked);
            logForDebugging(
              `[FileIndex] applied ignore patterns to untracked: ${beforeCount} -> ${normalizedUntracked.length} files`
            );
          }
          logForDebugging(
            `[FileIndex] background untracked fetch: ${normalizedUntracked.length} files`
          );
          void mergeUntrackedIntoNormalizedCache(normalizedUntracked);
        }
      }).catch((error) => {
        logForDebugging(
          `[FileIndex] background untracked fetch failed: ${error}`
        );
      }).finally(() => {
        untrackedFetchPromise = null;
      });
    }
    return normalizedTracked;
  } catch (error) {
    logForDebugging(`[FileIndex] git ls-files error: ${errorMessage(error)}`);
    return null;
  }
}
async function getDirectoryNamesAsync(files) {
  const directoryNames = /* @__PURE__ */ new Set();
  let chunkStart = performance.now();
  for (let i = 0; i < files.length; i++) {
    collectDirectoryNames(files, i, i + 1, directoryNames);
    if ((i & 255) === 255 && performance.now() - chunkStart > CHUNK_MS) {
      await yieldToEventLoop();
      chunkStart = performance.now();
    }
  }
  return [...directoryNames].map((d) => d + path.sep);
}
function collectDirectoryNames(files, start, end, out) {
  for (let i = start; i < end; i++) {
    let currentDir = path.dirname(files[i]);
    while (currentDir !== "." && !out.has(currentDir)) {
      const parent = path.dirname(currentDir);
      if (parent === currentDir) break;
      out.add(currentDir);
      currentDir = parent;
    }
  }
}
async function getClaudeConfigFiles(cwd) {
  const markdownFileArrays = await Promise.all(
    CLAUDE_CONFIG_DIRECTORIES.map(
      (subdir) => loadMarkdownFilesForSubdir(subdir, cwd)
    )
  );
  return markdownFileArrays.flatMap(
    (markdownFiles) => markdownFiles.map((f) => f.filePath)
  );
}
async function getProjectFiles(abortSignal, respectGitignore) {
  logForDebugging(
    `[FileIndex] getProjectFiles called, respectGitignore=${respectGitignore}`
  );
  const gitFiles = await getFilesUsingGit(abortSignal, respectGitignore);
  if (gitFiles !== null) {
    logForDebugging(
      `[FileIndex] using git ls-files result (${gitFiles.length} files)`
    );
    return gitFiles;
  }
  logForDebugging(
    `[FileIndex] git ls-files returned null, falling back to ripgrep`
  );
  const startTime = Date.now();
  const rgArgs = [
    "--files",
    "--follow",
    "--hidden",
    "--glob",
    "!.git/",
    "--glob",
    "!.svn/",
    "--glob",
    "!.hg/",
    "--glob",
    "!.bzr/",
    "--glob",
    "!.jj/",
    "--glob",
    "!.sl/"
  ];
  if (!respectGitignore) {
    rgArgs.push("--no-ignore-vcs");
  }
  const files = await ripGrep(rgArgs, ".", abortSignal);
  const relativePaths = files.map((f) => path.relative(getCwd(), f));
  const duration = Date.now() - startTime;
  logForDebugging(
    `[FileIndex] ripgrep: ${relativePaths.length} files in ${duration}ms`
  );
  logEvent("tengu_file_suggestions_ripgrep", {
    file_count: relativePaths.length,
    duration_ms: duration
  });
  return relativePaths;
}
async function getPathsForSuggestions() {
  const signal = AbortSignal.timeout(1e4);
  const index = getFileIndex();
  try {
    const projectSettings = getInitialSettings();
    const globalConfig = getGlobalConfig();
    const respectGitignore = projectSettings.respectGitignore ?? globalConfig.respectGitignore ?? true;
    const cwd = getCwd();
    const [projectFiles, configFiles] = await Promise.all([
      getProjectFiles(signal, respectGitignore),
      getClaudeConfigFiles(cwd)
    ]);
    cachedConfigFiles = configFiles;
    const allFiles = [...projectFiles, ...configFiles];
    const directories = await getDirectoryNamesAsync(allFiles);
    cachedTrackedDirs = directories;
    const allPathsList = [...directories, ...allFiles];
    const sig = pathListSignature(allPathsList);
    if (sig !== loadedTrackedSignature) {
      await index.loadFromFileListAsync(allPathsList).done;
      loadedTrackedSignature = sig;
      loadedMergedSignature = null;
    } else {
      logForDebugging(
        `[FileIndex] skipped index rebuild \u2014 tracked paths unchanged`
      );
    }
  } catch (error) {
    logError(error);
  }
  return index;
}
function findCommonPrefix(a, b) {
  const minLength = Math.min(a.length, b.length);
  let i = 0;
  while (i < minLength && a[i] === b[i]) {
    i++;
  }
  return a.substring(0, i);
}
function findLongestCommonPrefix(suggestions) {
  if (suggestions.length === 0) return "";
  const strings = suggestions.map((item) => item.displayText);
  let prefix = strings[0];
  for (let i = 1; i < strings.length; i++) {
    const currentString = strings[i];
    prefix = findCommonPrefix(prefix, currentString);
    if (prefix === "") return "";
  }
  return prefix;
}
function createFileSuggestionItem(filePath, score) {
  return {
    id: `file-${filePath}`,
    displayText: filePath,
    metadata: score !== void 0 ? { score } : void 0
  };
}
function findMatchingFiles(fileIndex2, partialPath) {
  const results = fileIndex2.search(partialPath, MAX_SUGGESTIONS);
  return results.map(
    (result) => createFileSuggestionItem(result.path, result.score)
  );
}
function startBackgroundCacheRefresh() {
  if (fileListRefreshPromise) return;
  const indexMtime = getGitIndexMtime();
  if (fileIndex) {
    const gitStateChanged = indexMtime !== null && indexMtime !== lastGitIndexMtime;
    if (!gitStateChanged && Date.now() - lastRefreshMs < REFRESH_THROTTLE_MS) {
      return;
    }
  }
  const generation = cacheGeneration;
  const refreshStart = Date.now();
  getFileIndex();
  fileListRefreshPromise = getPathsForSuggestions().then((result) => {
    if (generation !== cacheGeneration) {
      return result;
    }
    fileListRefreshPromise = null;
    indexBuildComplete.emit();
    lastGitIndexMtime = indexMtime;
    lastRefreshMs = Date.now();
    logForDebugging(
      `[FileIndex] cache refresh completed in ${Date.now() - refreshStart}ms`
    );
    return result;
  }).catch((error) => {
    logForDebugging(
      `[FileIndex] Cache refresh failed: ${errorMessage(error)}`
    );
    logError(error);
    if (generation === cacheGeneration) {
      fileListRefreshPromise = null;
    }
    return getFileIndex();
  });
}
async function getTopLevelPaths() {
  const fs = getFsImplementation();
  const cwd = getCwd();
  try {
    const entries = await fs.readdir(cwd);
    return entries.map((entry) => {
      const fullPath = path.join(cwd, entry.name);
      const relativePath = path.relative(cwd, fullPath);
      return entry.isDirectory() ? relativePath + path.sep : relativePath;
    });
  } catch (error) {
    logError(error);
    return [];
  }
}
async function generateFileSuggestions(partialPath, showOnEmpty = false) {
  if (!partialPath && !showOnEmpty) {
    return [];
  }
  if (getInitialSettings().fileSuggestion?.type === "command") {
    const input = {
      ...createBaseHookInput(),
      query: partialPath
    };
    const results = await executeFileSuggestionCommand(input);
    return results.slice(0, MAX_SUGGESTIONS).map(createFileSuggestionItem);
  }
  if (partialPath === "" || partialPath === "." || partialPath === "./") {
    const topLevelPaths = await getTopLevelPaths();
    startBackgroundCacheRefresh();
    return topLevelPaths.slice(0, MAX_SUGGESTIONS).map(createFileSuggestionItem);
  }
  const startTime = Date.now();
  try {
    const wasBuilding = fileListRefreshPromise !== null;
    startBackgroundCacheRefresh();
    let normalizedPath = partialPath;
    const currentDirPrefix = "." + path.sep;
    if (partialPath.startsWith(currentDirPrefix)) {
      normalizedPath = partialPath.substring(2);
    }
    if (normalizedPath.startsWith("~")) {
      normalizedPath = expandPath(normalizedPath);
    }
    const matches = fileIndex ? findMatchingFiles(fileIndex, normalizedPath) : [];
    const duration = Date.now() - startTime;
    logForDebugging(
      `[FileIndex] generateFileSuggestions: ${matches.length} results in ${duration}ms (${wasBuilding ? "partial" : "full"} index)`
    );
    logEvent("tengu_file_suggestions_query", {
      duration_ms: duration,
      cache_hit: !wasBuilding,
      result_count: matches.length,
      query_length: partialPath.length
    });
    return matches;
  } catch (error) {
    logError(error);
    return [];
  }
}
function applyFileSuggestion(suggestion, input, partialPath, startPos, onInputChange, setCursorOffset) {
  const suggestionText = typeof suggestion === "string" ? suggestion : suggestion.displayText;
  const newInput = input.substring(0, startPos) + suggestionText + input.substring(startPos + partialPath.length);
  onInputChange(newInput);
  const newCursorPos = startPos + suggestionText.length;
  setCursorOffset(newCursorPos);
}
var import_ignore, fileIndex, fileListRefreshPromise, indexBuildComplete, onIndexBuildComplete, cacheGeneration, untrackedFetchPromise, cachedTrackedFiles, cachedConfigFiles, cachedTrackedDirs, ignorePatternsCache, ignorePatternsCacheKey, lastRefreshMs, lastGitIndexMtime, loadedTrackedSignature, loadedMergedSignature, MAX_SUGGESTIONS, REFRESH_THROTTLE_MS;
var init_fileSuggestions = __esm({
  "src/hooks/fileSuggestions.ts"() {
    import_ignore = __toESM(require_ignore());
    init_markdownConfigLoader();
    init_file_index();
    init_analytics();
    init_config();
    init_cwd();
    init_debug();
    init_errors();
    init_execFileNoThrow();
    init_fsOperations();
    init_git();
    init_hooks();
    init_log();
    init_path();
    init_ripgrep();
    init_settings();
    init_signal();
    fileIndex = null;
    fileListRefreshPromise = null;
    indexBuildComplete = createSignal();
    onIndexBuildComplete = indexBuildComplete.subscribe;
    cacheGeneration = 0;
    untrackedFetchPromise = null;
    cachedTrackedFiles = [];
    cachedConfigFiles = [];
    cachedTrackedDirs = [];
    ignorePatternsCache = null;
    ignorePatternsCacheKey = null;
    lastRefreshMs = 0;
    lastGitIndexMtime = null;
    loadedTrackedSignature = null;
    loadedMergedSignature = null;
    MAX_SUGGESTIONS = 15;
    REFRESH_THROTTLE_MS = 5e3;
  }
});

export {
  onIndexBuildComplete,
  clearFileSuggestionCaches,
  findLongestCommonPrefix,
  startBackgroundCacheRefresh,
  generateFileSuggestions,
  applyFileSuggestion,
  init_fileSuggestions
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL25hdGl2ZS10cy9maWxlLWluZGV4L2luZGV4LnRzIiwgIi4uLy4uL3NyYy9ob29rcy9maWxlU3VnZ2VzdGlvbnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogUHVyZS1UeXBlU2NyaXB0IHBvcnQgb2YgdmVuZG9yL2ZpbGUtaW5kZXgtc3JjIChSdXN0IE5BUEkgbW9kdWxlKS5cbiAqXG4gKiBUaGUgbmF0aXZlIG1vZHVsZSB3cmFwcyBudWNsZW8gKGh0dHBzOi8vZ2l0aHViLmNvbS9oZWxpeC1lZGl0b3IvbnVjbGVvKSBmb3JcbiAqIGhpZ2gtcGVyZm9ybWFuY2UgZnV6enkgZmlsZSBzZWFyY2hpbmcuIFRoaXMgcG9ydCByZWltcGxlbWVudHMgdGhlIHNhbWUgQVBJXG4gKiBhbmQgc2NvcmluZyBiZWhhdmlvciB3aXRob3V0IG5hdGl2ZSBkZXBlbmRlbmNpZXMuXG4gKlxuICogS2V5IEFQSTpcbiAqICAgbmV3IEZpbGVJbmRleCgpXG4gKiAgIC5sb2FkRnJvbUZpbGVMaXN0KGZpbGVMaXN0OiBzdHJpbmdbXSk6IHZvaWQgICBcdTIwMTQgZGVkdXBlICsgaW5kZXggcGF0aHNcbiAqICAgLnNlYXJjaChxdWVyeTogc3RyaW5nLCBsaW1pdDogbnVtYmVyKTogU2VhcmNoUmVzdWx0W11cbiAqXG4gKiBTY29yZSBzZW1hbnRpY3M6IGxvd2VyID0gYmV0dGVyLiBTY29yZSBpcyBwb3NpdGlvbi1pbi1yZXN1bHRzIC8gcmVzdWx0LWNvdW50LFxuICogc28gdGhlIGJlc3QgbWF0Y2ggaXMgMC4wLiBQYXRocyBjb250YWluaW5nIFwidGVzdFwiIGdldCBhIDEuMDVcdTAwRDcgcGVuYWx0eSAoY2FwcGVkXG4gKiBhdCAxLjApIHNvIG5vbi10ZXN0IGZpbGVzIHJhbmsgc2xpZ2h0bHkgaGlnaGVyLlxuICovXG5cbmV4cG9ydCB0eXBlIFNlYXJjaFJlc3VsdCA9IHtcbiAgcGF0aDogc3RyaW5nXG4gIHNjb3JlOiBudW1iZXJcbn1cblxuLy8gbnVjbGVvLXN0eWxlIHNjb3JpbmcgY29uc3RhbnRzIChhcHByb3hpbWF0aW5nIGZ6Zi12MiAvIG51Y2xlbyBib251c2VzKVxuY29uc3QgU0NPUkVfTUFUQ0ggPSAxNlxuY29uc3QgQk9OVVNfQk9VTkRBUlkgPSA4XG5jb25zdCBCT05VU19DQU1FTCA9IDZcbmNvbnN0IEJPTlVTX0NPTlNFQ1VUSVZFID0gNFxuY29uc3QgQk9OVVNfRklSU1RfQ0hBUiA9IDhcbmNvbnN0IFBFTkFMVFlfR0FQX1NUQVJUID0gM1xuY29uc3QgUEVOQUxUWV9HQVBfRVhURU5TSU9OID0gMVxuXG5jb25zdCBUT1BfTEVWRUxfQ0FDSEVfTElNSVQgPSAxMDBcbmNvbnN0IE1BWF9RVUVSWV9MRU4gPSA2NFxuLy8gWWllbGQgdG8gZXZlbnQgbG9vcCBhZnRlciB0aGlzIG1hbnkgbXMgb2Ygc3luYyB3b3JrLiBDaHVuayBzaXplcyBhcmVcbi8vIHRpbWUtYmFzZWQgKG5vdCBjb3VudC1iYXNlZCkgc28gc2xvdyBtYWNoaW5lcyBnZXQgc21hbGxlciBjaHVua3MgYW5kXG4vLyBzdGF5IHJlc3BvbnNpdmUgXHUyMDE0IDVrIHBhdGhzIGlzIH4ybXMgb24gTS1zZXJpZXMgYnV0IGNvdWxkIGJlIDE1bXMrIG9uXG4vLyBvbGRlciBXaW5kb3dzIGhhcmR3YXJlLlxuY29uc3QgQ0hVTktfTVMgPSA0XG5cbi8vIFJldXNhYmxlIGJ1ZmZlcjogcmVjb3JkcyB3aGVyZSBlYWNoIG5lZWRsZSBjaGFyIG1hdGNoZWQgZHVyaW5nIHRoZSBpbmRleE9mIHNjYW5cbmNvbnN0IHBvc0J1ZiA9IG5ldyBJbnQzMkFycmF5KE1BWF9RVUVSWV9MRU4pXG5cbmV4cG9ydCBjbGFzcyBGaWxlSW5kZXgge1xuICBwcml2YXRlIHBhdGhzOiBzdHJpbmdbXSA9IFtdXG4gIHByaXZhdGUgbG93ZXJQYXRoczogc3RyaW5nW10gPSBbXVxuICBwcml2YXRlIGNoYXJCaXRzOiBJbnQzMkFycmF5ID0gbmV3IEludDMyQXJyYXkoMClcbiAgcHJpdmF0ZSBwYXRoTGVuczogVWludDE2QXJyYXkgPSBuZXcgVWludDE2QXJyYXkoMClcbiAgcHJpdmF0ZSB0b3BMZXZlbENhY2hlOiBTZWFyY2hSZXN1bHRbXSB8IG51bGwgPSBudWxsXG4gIC8vIER1cmluZyBhc3luYyBidWlsZCwgdHJhY2tzIGhvdyBtYW55IHBhdGhzIGhhdmUgYml0bWFwL2xvd2VyUGF0aCBmaWxsZWQuXG4gIC8vIHNlYXJjaCgpIHVzZXMgdGhpcyB0byBzZWFyY2ggdGhlIHJlYWR5IHByZWZpeCB3aGlsZSBidWlsZCBjb250aW51ZXMuXG4gIHByaXZhdGUgcmVhZHlDb3VudCA9IDBcblxuICAvKipcbiAgICogTG9hZCBwYXRocyBmcm9tIGFuIGFycmF5IG9mIHN0cmluZ3MuXG4gICAqIFRoaXMgaXMgdGhlIG1haW4gd2F5IHRvIHBvcHVsYXRlIHRoZSBpbmRleCBcdTIwMTQgcmlwZ3JlcCBjb2xsZWN0cyBmaWxlcywgd2UganVzdCBzZWFyY2ggdGhlbS5cbiAgICogQXV0b21hdGljYWxseSBkZWR1cGxpY2F0ZXMgcGF0aHMuXG4gICAqL1xuICBsb2FkRnJvbUZpbGVMaXN0KGZpbGVMaXN0OiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIC8vIERlZHVwbGljYXRlIGFuZCBmaWx0ZXIgZW1wdHkgc3RyaW5ncyAobWF0Y2hlcyBSdXN0IEhhc2hTZXQgYmVoYXZpb3IpXG4gICAgY29uc3Qgc2VlbiA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gICAgY29uc3QgcGF0aHM6IHN0cmluZ1tdID0gW11cbiAgICBmb3IgKGNvbnN0IGxpbmUgb2YgZmlsZUxpc3QpIHtcbiAgICAgIGlmIChsaW5lLmxlbmd0aCA+IDAgJiYgIXNlZW4uaGFzKGxpbmUpKSB7XG4gICAgICAgIHNlZW4uYWRkKGxpbmUpXG4gICAgICAgIHBhdGhzLnB1c2gobGluZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmJ1aWxkSW5kZXgocGF0aHMpXG4gIH1cblxuICAvKipcbiAgICogQXN5bmMgdmFyaWFudDogeWllbGRzIHRvIHRoZSBldmVudCBsb29wIGV2ZXJ5IH44XHUyMDEzMTJrIHBhdGhzIHNvIGxhcmdlXG4gICAqIGluZGV4ZXMgKDI3MGsrIGZpbGVzKSBkb24ndCBibG9jayB0aGUgbWFpbiB0aHJlYWQgZm9yID4xMG1zIGF0IGEgdGltZS5cbiAgICogSWRlbnRpY2FsIHJlc3VsdCB0byBsb2FkRnJvbUZpbGVMaXN0LlxuICAgKlxuICAgKiBSZXR1cm5zIHsgcXVlcnlhYmxlLCBkb25lIH06XG4gICAqICAgLSBxdWVyeWFibGU6IHJlc29sdmVzIGFzIHNvb24gYXMgdGhlIGZpcnN0IGNodW5rIGlzIGluZGV4ZWQgKHNlYXJjaFxuICAgKiAgICAgcmV0dXJucyBwYXJ0aWFsIHJlc3VsdHMpLiBGb3IgYSAyNzBrLXBhdGggbGlzdCB0aGlzIGlzIH41XHUyMDEzMTBtcyBvZlxuICAgKiAgICAgc3luYyB3b3JrIGFmdGVyIHRoZSBwYXRocyBhcnJheSBpcyBhdmFpbGFibGUuXG4gICAqICAgLSBkb25lOiByZXNvbHZlcyB3aGVuIHRoZSBlbnRpcmUgaW5kZXggaXMgYnVpbHQuXG4gICAqL1xuICBsb2FkRnJvbUZpbGVMaXN0QXN5bmMoZmlsZUxpc3Q6IHN0cmluZ1tdKToge1xuICAgIHF1ZXJ5YWJsZTogUHJvbWlzZTx2b2lkPlxuICAgIGRvbmU6IFByb21pc2U8dm9pZD5cbiAgfSB7XG4gICAgbGV0IG1hcmtRdWVyeWFibGU6ICgpID0+IHZvaWQgPSAoKSA9PiB7fVxuICAgIGNvbnN0IHF1ZXJ5YWJsZSA9IG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4ge1xuICAgICAgbWFya1F1ZXJ5YWJsZSA9IHJlc29sdmVcbiAgICB9KVxuICAgIGNvbnN0IGRvbmUgPSB0aGlzLmJ1aWxkQXN5bmMoZmlsZUxpc3QsIG1hcmtRdWVyeWFibGUpXG4gICAgcmV0dXJuIHsgcXVlcnlhYmxlLCBkb25lIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgYnVpbGRBc3luYyhcbiAgICBmaWxlTGlzdDogc3RyaW5nW10sXG4gICAgbWFya1F1ZXJ5YWJsZTogKCkgPT4gdm9pZCxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3Qgc2VlbiA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gICAgY29uc3QgcGF0aHM6IHN0cmluZ1tdID0gW11cbiAgICBsZXQgY2h1bmtTdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbGluZSA9IGZpbGVMaXN0W2ldIVxuICAgICAgaWYgKGxpbmUubGVuZ3RoID4gMCAmJiAhc2Vlbi5oYXMobGluZSkpIHtcbiAgICAgICAgc2Vlbi5hZGQobGluZSlcbiAgICAgICAgcGF0aHMucHVzaChsaW5lKVxuICAgICAgfVxuICAgICAgLy8gQ2hlY2sgZXZlcnkgMjU2IGl0ZXJhdGlvbnMgdG8gYW1vcnRpemUgcGVyZm9ybWFuY2Uubm93KCkgb3ZlcmhlYWRcbiAgICAgIGlmICgoaSAmIDB4ZmYpID09PSAweGZmICYmIHBlcmZvcm1hbmNlLm5vdygpIC0gY2h1bmtTdGFydCA+IENIVU5LX01TKSB7XG4gICAgICAgIGF3YWl0IHlpZWxkVG9FdmVudExvb3AoKVxuICAgICAgICBjaHVua1N0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnJlc2V0QXJyYXlzKHBhdGhzKVxuXG4gICAgY2h1bmtTdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpXG4gICAgbGV0IGZpcnN0Q2h1bmsgPSB0cnVlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRocy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5pbmRleFBhdGgoaSlcbiAgICAgIGlmICgoaSAmIDB4ZmYpID09PSAweGZmICYmIHBlcmZvcm1hbmNlLm5vdygpIC0gY2h1bmtTdGFydCA+IENIVU5LX01TKSB7XG4gICAgICAgIHRoaXMucmVhZHlDb3VudCA9IGkgKyAxXG4gICAgICAgIGlmIChmaXJzdENodW5rKSB7XG4gICAgICAgICAgbWFya1F1ZXJ5YWJsZSgpXG4gICAgICAgICAgZmlyc3RDaHVuayA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgeWllbGRUb0V2ZW50TG9vcCgpXG4gICAgICAgIGNodW5rU3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlYWR5Q291bnQgPSBwYXRocy5sZW5ndGhcbiAgICBtYXJrUXVlcnlhYmxlKClcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRJbmRleChwYXRoczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICB0aGlzLnJlc2V0QXJyYXlzKHBhdGhzKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuaW5kZXhQYXRoKGkpXG4gICAgfVxuICAgIHRoaXMucmVhZHlDb3VudCA9IHBhdGhzLmxlbmd0aFxuICB9XG5cbiAgcHJpdmF0ZSByZXNldEFycmF5cyhwYXRoczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICBjb25zdCBuID0gcGF0aHMubGVuZ3RoXG4gICAgdGhpcy5wYXRocyA9IHBhdGhzXG4gICAgdGhpcy5sb3dlclBhdGhzID0gbmV3IEFycmF5KG4pXG4gICAgdGhpcy5jaGFyQml0cyA9IG5ldyBJbnQzMkFycmF5KG4pXG4gICAgdGhpcy5wYXRoTGVucyA9IG5ldyBVaW50MTZBcnJheShuKVxuICAgIHRoaXMucmVhZHlDb3VudCA9IDBcbiAgICB0aGlzLnRvcExldmVsQ2FjaGUgPSBjb21wdXRlVG9wTGV2ZWxFbnRyaWVzKHBhdGhzLCBUT1BfTEVWRUxfQ0FDSEVfTElNSVQpXG4gIH1cblxuICAvLyBQcmVjb21wdXRlOiBsb3dlcmNhc2UsIGFcdTIwMTN6IGJpdG1hcCwgbGVuZ3RoLiBCaXRtYXAgZ2l2ZXMgTygxKSByZWplY3Rpb25cbiAgLy8gb2YgcGF0aHMgbWlzc2luZyBhbnkgbmVlZGxlIGxldHRlciAoODklIHN1cnZpdmFsIGZvciBicm9hZCBxdWVyaWVzIGxpa2VcbiAgLy8gXCJ0ZXN0XCIgXHUyMTkyIHN0aWxsIGEgMTAlKyBmcmVlIHdpbjsgOTAlKyByZWplY3Rpb24gZm9yIHJhcmUgY2hhcnMpLlxuICBwcml2YXRlIGluZGV4UGF0aChpOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBscCA9IHRoaXMucGF0aHNbaV0hLnRvTG93ZXJDYXNlKClcbiAgICB0aGlzLmxvd2VyUGF0aHNbaV0gPSBscFxuICAgIGNvbnN0IGxlbiA9IGxwLmxlbmd0aFxuICAgIHRoaXMucGF0aExlbnNbaV0gPSBsZW5cbiAgICBsZXQgYml0cyA9IDBcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICBjb25zdCBjID0gbHAuY2hhckNvZGVBdChqKVxuICAgICAgaWYgKGMgPj0gOTcgJiYgYyA8PSAxMjIpIGJpdHMgfD0gMSA8PCAoYyAtIDk3KVxuICAgIH1cbiAgICB0aGlzLmNoYXJCaXRzW2ldID0gYml0c1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBmb3IgZmlsZXMgbWF0Y2hpbmcgdGhlIHF1ZXJ5IHVzaW5nIGZ1enp5IG1hdGNoaW5nLlxuICAgKiBSZXR1cm5zIHRvcCBOIHJlc3VsdHMgc29ydGVkIGJ5IG1hdGNoIHNjb3JlLlxuICAgKi9cbiAgc2VhcmNoKHF1ZXJ5OiBzdHJpbmcsIGxpbWl0OiBudW1iZXIpOiBTZWFyY2hSZXN1bHRbXSB7XG4gICAgaWYgKGxpbWl0IDw9IDApIHJldHVybiBbXVxuICAgIGlmIChxdWVyeS5sZW5ndGggPT09IDApIHtcbiAgICAgIGlmICh0aGlzLnRvcExldmVsQ2FjaGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9wTGV2ZWxDYWNoZS5zbGljZSgwLCBsaW1pdClcbiAgICAgIH1cbiAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIC8vIFNtYXJ0IGNhc2U6IGxvd2VyY2FzZSBxdWVyeSBcdTIxOTIgY2FzZS1pbnNlbnNpdGl2ZTsgYW55IHVwcGVyY2FzZSBcdTIxOTIgY2FzZS1zZW5zaXRpdmVcbiAgICBjb25zdCBjYXNlU2Vuc2l0aXZlID0gcXVlcnkgIT09IHF1ZXJ5LnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBuZWVkbGUgPSBjYXNlU2Vuc2l0aXZlID8gcXVlcnkgOiBxdWVyeS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgbkxlbiA9IE1hdGgubWluKG5lZWRsZS5sZW5ndGgsIE1BWF9RVUVSWV9MRU4pXG4gICAgY29uc3QgbmVlZGxlQ2hhcnM6IHN0cmluZ1tdID0gbmV3IEFycmF5KG5MZW4pXG4gICAgbGV0IG5lZWRsZUJpdG1hcCA9IDBcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5MZW47IGorKykge1xuICAgICAgY29uc3QgY2ggPSBuZWVkbGUuY2hhckF0KGopXG4gICAgICBuZWVkbGVDaGFyc1tqXSA9IGNoXG4gICAgICBjb25zdCBjYyA9IGNoLmNoYXJDb2RlQXQoMClcbiAgICAgIGlmIChjYyA+PSA5NyAmJiBjYyA8PSAxMjIpIG5lZWRsZUJpdG1hcCB8PSAxIDw8IChjYyAtIDk3KVxuICAgIH1cblxuICAgIC8vIFVwcGVyIGJvdW5kIG9uIHNjb3JlIGFzc3VtaW5nIGV2ZXJ5IG1hdGNoIGdldHMgdGhlIG1heCBib3VuZGFyeSBib251cy5cbiAgICAvLyBVc2VkIHRvIHJlamVjdCBwYXRocyB3aG9zZSBnYXAgcGVuYWx0aWVzIGFsb25lIG1ha2UgdGhlbSB1bmFibGUgdG8gYmVhdFxuICAgIC8vIHRoZSBjdXJyZW50IHRvcC1rIHRocmVzaG9sZCwgYmVmb3JlIHRoZSBjaGFyQ29kZUF0LWhlYXZ5IGJvdW5kYXJ5IHBhc3MuXG4gICAgY29uc3Qgc2NvcmVDZWlsaW5nID1cbiAgICAgIG5MZW4gKiAoU0NPUkVfTUFUQ0ggKyBCT05VU19CT1VOREFSWSkgKyBCT05VU19GSVJTVF9DSEFSICsgMzJcblxuICAgIC8vIFRvcC1rOiBtYWludGFpbiBhIHNvcnRlZC1hc2NlbmRpbmcgYXJyYXkgb2YgdGhlIGJlc3QgYGxpbWl0YCBtYXRjaGVzLlxuICAgIC8vIEF2b2lkcyBPKG4gbG9nIG4pIHNvcnQgb2YgYWxsIG1hdGNoZXMgd2hlbiB3ZSBvbmx5IG5lZWQgYGxpbWl0YCBvZiB0aGVtLlxuICAgIGNvbnN0IHRvcEs6IHsgcGF0aDogc3RyaW5nOyBmdXp6U2NvcmU6IG51bWJlciB9W10gPSBbXVxuICAgIGxldCB0aHJlc2hvbGQgPSAtSW5maW5pdHlcblxuICAgIGNvbnN0IHsgcGF0aHMsIGxvd2VyUGF0aHMsIGNoYXJCaXRzLCBwYXRoTGVucywgcmVhZHlDb3VudCB9ID0gdGhpc1xuXG4gICAgb3V0ZXI6IGZvciAobGV0IGkgPSAwOyBpIDwgcmVhZHlDb3VudDsgaSsrKSB7XG4gICAgICAvLyBPKDEpIGJpdG1hcCByZWplY3Q6IHBhdGggbXVzdCBjb250YWluIGV2ZXJ5IGxldHRlciBpbiB0aGUgbmVlZGxlXG4gICAgICBpZiAoKGNoYXJCaXRzW2ldISAmIG5lZWRsZUJpdG1hcCkgIT09IG5lZWRsZUJpdG1hcCkgY29udGludWVcblxuICAgICAgY29uc3QgaGF5c3RhY2sgPSBjYXNlU2Vuc2l0aXZlID8gcGF0aHNbaV0hIDogbG93ZXJQYXRoc1tpXSFcblxuICAgICAgLy8gRnVzZWQgaW5kZXhPZiBzY2FuOiBmaW5kIHBvc2l0aW9ucyAoU0lNRC1hY2NlbGVyYXRlZCBpbiBKU0MvVjgpIEFORFxuICAgICAgLy8gYWNjdW11bGF0ZSBnYXAvY29uc2VjdXRpdmUgdGVybXMgaW5saW5lLiBUaGUgZ3JlZWR5LWVhcmxpZXN0IHBvc2l0aW9uc1xuICAgICAgLy8gZm91bmQgaGVyZSBhcmUgaWRlbnRpY2FsIHRvIHdoYXQgdGhlIGNoYXJDb2RlQXQgc2NvcmVyIHdvdWxkIGZpbmQsIHNvXG4gICAgICAvLyB3ZSBzY29yZSBkaXJlY3RseSBmcm9tIHRoZW0gXHUyMDE0IG5vIHNlY29uZCBzY2FuLlxuICAgICAgbGV0IHBvcyA9IGhheXN0YWNrLmluZGV4T2YobmVlZGxlQ2hhcnNbMF0hKVxuICAgICAgaWYgKHBvcyA9PT0gLTEpIGNvbnRpbnVlXG4gICAgICBwb3NCdWZbMF0gPSBwb3NcbiAgICAgIGxldCBnYXBQZW5hbHR5ID0gMFxuICAgICAgbGV0IGNvbnNlY0JvbnVzID0gMFxuICAgICAgbGV0IHByZXYgPSBwb3NcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgbkxlbjsgaisrKSB7XG4gICAgICAgIHBvcyA9IGhheXN0YWNrLmluZGV4T2YobmVlZGxlQ2hhcnNbal0hLCBwcmV2ICsgMSlcbiAgICAgICAgaWYgKHBvcyA9PT0gLTEpIGNvbnRpbnVlIG91dGVyXG4gICAgICAgIHBvc0J1ZltqXSA9IHBvc1xuICAgICAgICBjb25zdCBnYXAgPSBwb3MgLSBwcmV2IC0gMVxuICAgICAgICBpZiAoZ2FwID09PSAwKSBjb25zZWNCb251cyArPSBCT05VU19DT05TRUNVVElWRVxuICAgICAgICBlbHNlIGdhcFBlbmFsdHkgKz0gUEVOQUxUWV9HQVBfU1RBUlQgKyBnYXAgKiBQRU5BTFRZX0dBUF9FWFRFTlNJT05cbiAgICAgICAgcHJldiA9IHBvc1xuICAgICAgfVxuXG4gICAgICAvLyBHYXAtYm91bmQgcmVqZWN0OiBpZiB0aGUgYmVzdC1jYXNlIHNjb3JlIChhbGwgYm91bmRhcnkgYm9udXNlcykgbWludXNcbiAgICAgIC8vIGtub3duIGdhcCBwZW5hbHRpZXMgY2FuJ3QgYmVhdCB0aHJlc2hvbGQsIHNraXAgdGhlIGJvdW5kYXJ5IHBhc3MuXG4gICAgICBpZiAoXG4gICAgICAgIHRvcEsubGVuZ3RoID09PSBsaW1pdCAmJlxuICAgICAgICBzY29yZUNlaWxpbmcgKyBjb25zZWNCb251cyAtIGdhcFBlbmFsdHkgPD0gdGhyZXNob2xkXG4gICAgICApIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gQm91bmRhcnkvY2FtZWxDYXNlIHNjb3Jpbmc6IGNoZWNrIHRoZSBjaGFyIGJlZm9yZSBlYWNoIG1hdGNoIHBvc2l0aW9uLlxuICAgICAgY29uc3QgcGF0aCA9IHBhdGhzW2ldIVxuICAgICAgY29uc3QgaExlbiA9IHBhdGhMZW5zW2ldIVxuICAgICAgbGV0IHNjb3JlID0gbkxlbiAqIFNDT1JFX01BVENIICsgY29uc2VjQm9udXMgLSBnYXBQZW5hbHR5XG4gICAgICBzY29yZSArPSBzY29yZUJvbnVzQXQocGF0aCwgcG9zQnVmWzBdISwgdHJ1ZSlcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgbkxlbjsgaisrKSB7XG4gICAgICAgIHNjb3JlICs9IHNjb3JlQm9udXNBdChwYXRoLCBwb3NCdWZbal0hLCBmYWxzZSlcbiAgICAgIH1cbiAgICAgIHNjb3JlICs9IE1hdGgubWF4KDAsIDMyIC0gKGhMZW4gPj4gMikpXG5cbiAgICAgIGlmICh0b3BLLmxlbmd0aCA8IGxpbWl0KSB7XG4gICAgICAgIHRvcEsucHVzaCh7IHBhdGgsIGZ1enpTY29yZTogc2NvcmUgfSlcbiAgICAgICAgaWYgKHRvcEsubGVuZ3RoID09PSBsaW1pdCkge1xuICAgICAgICAgIHRvcEsuc29ydCgoYSwgYikgPT4gYS5mdXp6U2NvcmUgLSBiLmZ1enpTY29yZSlcbiAgICAgICAgICB0aHJlc2hvbGQgPSB0b3BLWzBdIS5mdXp6U2NvcmVcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzY29yZSA+IHRocmVzaG9sZCkge1xuICAgICAgICBsZXQgbG8gPSAwXG4gICAgICAgIGxldCBoaSA9IHRvcEsubGVuZ3RoXG4gICAgICAgIHdoaWxlIChsbyA8IGhpKSB7XG4gICAgICAgICAgY29uc3QgbWlkID0gKGxvICsgaGkpID4+IDFcbiAgICAgICAgICBpZiAodG9wS1ttaWRdIS5mdXp6U2NvcmUgPCBzY29yZSkgbG8gPSBtaWQgKyAxXG4gICAgICAgICAgZWxzZSBoaSA9IG1pZFxuICAgICAgICB9XG4gICAgICAgIHRvcEsuc3BsaWNlKGxvLCAwLCB7IHBhdGgsIGZ1enpTY29yZTogc2NvcmUgfSlcbiAgICAgICAgdG9wSy5zaGlmdCgpXG4gICAgICAgIHRocmVzaG9sZCA9IHRvcEtbMF0hLmZ1enpTY29yZVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRvcEsgaXMgYXNjZW5kaW5nOyByZXZlcnNlIHRvIGRlc2NlbmRpbmcgKGJlc3QgZmlyc3QpXG4gICAgdG9wSy5zb3J0KChhLCBiKSA9PiBiLmZ1enpTY29yZSAtIGEuZnV6elNjb3JlKVxuXG4gICAgY29uc3QgbWF0Y2hDb3VudCA9IHRvcEsubGVuZ3RoXG4gICAgY29uc3QgZGVub20gPSBNYXRoLm1heChtYXRjaENvdW50LCAxKVxuICAgIGNvbnN0IHJlc3VsdHM6IFNlYXJjaFJlc3VsdFtdID0gbmV3IEFycmF5KG1hdGNoQ291bnQpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdGNoQ291bnQ7IGkrKykge1xuICAgICAgY29uc3QgcGF0aCA9IHRvcEtbaV0hLnBhdGhcbiAgICAgIGNvbnN0IHBvc2l0aW9uU2NvcmUgPSBpIC8gZGVub21cbiAgICAgIGNvbnN0IGZpbmFsU2NvcmUgPSBwYXRoLmluY2x1ZGVzKCd0ZXN0JylcbiAgICAgICAgPyBNYXRoLm1pbihwb3NpdGlvblNjb3JlICogMS4wNSwgMS4wKVxuICAgICAgICA6IHBvc2l0aW9uU2NvcmVcbiAgICAgIHJlc3VsdHNbaV0gPSB7IHBhdGgsIHNjb3JlOiBmaW5hbFNjb3JlIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG59XG5cbi8qKlxuICogQm91bmRhcnkvY2FtZWxDYXNlIGJvbnVzIGZvciBhIG1hdGNoIGF0IHBvc2l0aW9uIGBwb3NgIGluIHRoZSBvcmlnaW5hbC1jYXNlXG4gKiBwYXRoLiBgZmlyc3RgIGVuYWJsZXMgdGhlIHN0YXJ0LW9mLXN0cmluZyBib251cyAob25seSBmb3IgbmVlZGxlWzBdKS5cbiAqL1xuZnVuY3Rpb24gc2NvcmVCb251c0F0KHBhdGg6IHN0cmluZywgcG9zOiBudW1iZXIsIGZpcnN0OiBib29sZWFuKTogbnVtYmVyIHtcbiAgaWYgKHBvcyA9PT0gMCkgcmV0dXJuIGZpcnN0ID8gQk9OVVNfRklSU1RfQ0hBUiA6IDBcbiAgY29uc3QgcHJldkNoID0gcGF0aC5jaGFyQ29kZUF0KHBvcyAtIDEpXG4gIGlmIChpc0JvdW5kYXJ5KHByZXZDaCkpIHJldHVybiBCT05VU19CT1VOREFSWVxuICBpZiAoaXNMb3dlcihwcmV2Q2gpICYmIGlzVXBwZXIocGF0aC5jaGFyQ29kZUF0KHBvcykpKSByZXR1cm4gQk9OVVNfQ0FNRUxcbiAgcmV0dXJuIDBcbn1cblxuZnVuY3Rpb24gaXNCb3VuZGFyeShjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgLy8gLyBcXCAtIF8gLiBzcGFjZVxuICByZXR1cm4gKFxuICAgIGNvZGUgPT09IDQ3IHx8IC8vIC9cbiAgICBjb2RlID09PSA5MiB8fCAvLyBcXFxuICAgIGNvZGUgPT09IDQ1IHx8IC8vIC1cbiAgICBjb2RlID09PSA5NSB8fCAvLyBfXG4gICAgY29kZSA9PT0gNDYgfHwgLy8gLlxuICAgIGNvZGUgPT09IDMyIC8vIHNwYWNlXG4gIClcbn1cblxuZnVuY3Rpb24gaXNMb3dlcihjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjJcbn1cblxuZnVuY3Rpb24gaXNVcHBlcihjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MFxufVxuXG5leHBvcnQgZnVuY3Rpb24geWllbGRUb0V2ZW50TG9vcCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0SW1tZWRpYXRlKHJlc29sdmUpKVxufVxuXG5leHBvcnQgeyBDSFVOS19NUyB9XG5cbi8qKlxuICogRXh0cmFjdCB1bmlxdWUgdG9wLWxldmVsIHBhdGggc2VnbWVudHMsIHNvcnRlZCBieSAobGVuZ3RoIGFzYywgdGhlbiBhbHBoYSBhc2MpLlxuICogSGFuZGxlcyBib3RoIFVuaXggKC8pIGFuZCBXaW5kb3dzIChcXCkgcGF0aCBzZXBhcmF0b3JzLlxuICogTWlycm9ycyBGaWxlSW5kZXg6OmNvbXB1dGVfdG9wX2xldmVsX2VudHJpZXMgaW4gbGliLnJzLlxuICovXG5mdW5jdGlvbiBjb21wdXRlVG9wTGV2ZWxFbnRyaWVzKFxuICBwYXRoczogc3RyaW5nW10sXG4gIGxpbWl0OiBudW1iZXIsXG4pOiBTZWFyY2hSZXN1bHRbXSB7XG4gIGNvbnN0IHRvcExldmVsID0gbmV3IFNldDxzdHJpbmc+KClcblxuICBmb3IgKGNvbnN0IHAgb2YgcGF0aHMpIHtcbiAgICAvLyBTcGxpdCBvbiBmaXJzdCAvIG9yIFxcIHNlcGFyYXRvclxuICAgIGxldCBlbmQgPSBwLmxlbmd0aFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYyA9IHAuY2hhckNvZGVBdChpKVxuICAgICAgaWYgKGMgPT09IDQ3IHx8IGMgPT09IDkyKSB7XG4gICAgICAgIGVuZCA9IGlcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc2VnbWVudCA9IHAuc2xpY2UoMCwgZW5kKVxuICAgIGlmIChzZWdtZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgIHRvcExldmVsLmFkZChzZWdtZW50KVxuICAgICAgaWYgKHRvcExldmVsLnNpemUgPj0gbGltaXQpIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc29ydGVkID0gQXJyYXkuZnJvbSh0b3BMZXZlbClcbiAgc29ydGVkLnNvcnQoKGEsIGIpID0+IHtcbiAgICBjb25zdCBsZW5EaWZmID0gYS5sZW5ndGggLSBiLmxlbmd0aFxuICAgIGlmIChsZW5EaWZmICE9PSAwKSByZXR1cm4gbGVuRGlmZlxuICAgIHJldHVybiBhIDwgYiA/IC0xIDogYSA+IGIgPyAxIDogMFxuICB9KVxuXG4gIHJldHVybiBzb3J0ZWQuc2xpY2UoMCwgbGltaXQpLm1hcChwYXRoID0+ICh7IHBhdGgsIHNjb3JlOiAwLjAgfSkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVJbmRleFxuZXhwb3J0IHR5cGUgeyBGaWxlSW5kZXggYXMgRmlsZUluZGV4VHlwZSB9XG4iLCAiaW1wb3J0IHsgc3RhdFN5bmMgfSBmcm9tICdmcydcbmltcG9ydCBpZ25vcmUgZnJvbSAnaWdub3JlJ1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHtcbiAgQ0xBVURFX0NPTkZJR19ESVJFQ1RPUklFUyxcbiAgbG9hZE1hcmtkb3duRmlsZXNGb3JTdWJkaXIsXG59IGZyb20gJ3NyYy91dGlscy9tYXJrZG93bkNvbmZpZ0xvYWRlci5qcydcbmltcG9ydCB0eXBlIHsgU3VnZ2VzdGlvbkl0ZW0gfSBmcm9tICcuLi9jb21wb25lbnRzL1Byb21wdElucHV0L1Byb21wdElucHV0Rm9vdGVyU3VnZ2VzdGlvbnMuanMnXG5pbXBvcnQge1xuICBDSFVOS19NUyxcbiAgRmlsZUluZGV4LFxuICB5aWVsZFRvRXZlbnRMb29wLFxufSBmcm9tICcuLi9uYXRpdmUtdHMvZmlsZS1pbmRleC9pbmRleC5qcydcbmltcG9ydCB7IGxvZ0V2ZW50IH0gZnJvbSAnLi4vc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHR5cGUgeyBGaWxlU3VnZ2VzdGlvbkNvbW1hbmRJbnB1dCB9IGZyb20gJy4uL3R5cGVzL2ZpbGVTdWdnZXN0aW9uLmpzJ1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vdXRpbHMvY29uZmlnLmpzJ1xuaW1wb3J0IHsgZ2V0Q3dkIH0gZnJvbSAnLi4vdXRpbHMvY3dkLmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi4vdXRpbHMvZGVidWcuanMnXG5pbXBvcnQgeyBlcnJvck1lc3NhZ2UgfSBmcm9tICcuLi91dGlscy9lcnJvcnMuanMnXG5pbXBvcnQgeyBleGVjRmlsZU5vVGhyb3dXaXRoQ3dkIH0gZnJvbSAnLi4vdXRpbHMvZXhlY0ZpbGVOb1Rocm93LmpzJ1xuaW1wb3J0IHsgZ2V0RnNJbXBsZW1lbnRhdGlvbiB9IGZyb20gJy4uL3V0aWxzL2ZzT3BlcmF0aW9ucy5qcydcbmltcG9ydCB7IGZpbmRHaXRSb290LCBnaXRFeGUgfSBmcm9tICcuLi91dGlscy9naXQuanMnXG5pbXBvcnQge1xuICBjcmVhdGVCYXNlSG9va0lucHV0LFxuICBleGVjdXRlRmlsZVN1Z2dlc3Rpb25Db21tYW5kLFxufSBmcm9tICcuLi91dGlscy9ob29rcy5qcydcbmltcG9ydCB7IGxvZ0Vycm9yIH0gZnJvbSAnLi4vdXRpbHMvbG9nLmpzJ1xuaW1wb3J0IHsgZXhwYW5kUGF0aCB9IGZyb20gJy4uL3V0aWxzL3BhdGguanMnXG5pbXBvcnQgeyByaXBHcmVwIH0gZnJvbSAnLi4vdXRpbHMvcmlwZ3JlcC5qcydcbmltcG9ydCB7IGdldEluaXRpYWxTZXR0aW5ncyB9IGZyb20gJy4uL3V0aWxzL3NldHRpbmdzL3NldHRpbmdzLmpzJ1xuaW1wb3J0IHsgY3JlYXRlU2lnbmFsIH0gZnJvbSAnLi4vdXRpbHMvc2lnbmFsLmpzJ1xuXG4vLyBMYXppbHkgY29uc3RydWN0ZWQgc2luZ2xldG9uXG5sZXQgZmlsZUluZGV4OiBGaWxlSW5kZXggfCBudWxsID0gbnVsbFxuXG5mdW5jdGlvbiBnZXRGaWxlSW5kZXgoKTogRmlsZUluZGV4IHtcbiAgaWYgKCFmaWxlSW5kZXgpIHtcbiAgICBmaWxlSW5kZXggPSBuZXcgRmlsZUluZGV4KClcbiAgfVxuICByZXR1cm4gZmlsZUluZGV4XG59XG5cbmxldCBmaWxlTGlzdFJlZnJlc2hQcm9taXNlOiBQcm9taXNlPEZpbGVJbmRleD4gfCBudWxsID0gbnVsbFxuLy8gU2lnbmFsIGZpcmVkIHdoZW4gYW4gaW4tcHJvZ3Jlc3MgaW5kZXggYnVpbGQgY29tcGxldGVzLiBMZXRzIHRoZVxuLy8gdHlwZWFoZWFkIFVJIHJlLXJ1biBpdHMgbGFzdCBzZWFyY2ggc28gcGFydGlhbCByZXN1bHRzIHVwZ3JhZGUgdG8gZnVsbC5cbmNvbnN0IGluZGV4QnVpbGRDb21wbGV0ZSA9IGNyZWF0ZVNpZ25hbCgpXG5leHBvcnQgY29uc3Qgb25JbmRleEJ1aWxkQ29tcGxldGUgPSBpbmRleEJ1aWxkQ29tcGxldGUuc3Vic2NyaWJlXG5sZXQgY2FjaGVHZW5lcmF0aW9uID0gMFxuXG4vLyBCYWNrZ3JvdW5kIGZldGNoIGZvciB1bnRyYWNrZWQgZmlsZXNcbmxldCB1bnRyYWNrZWRGZXRjaFByb21pc2U6IFByb21pc2U8dm9pZD4gfCBudWxsID0gbnVsbFxuXG4vLyBTdG9yZSB0cmFja2VkIGZpbGVzIHNvIHdlIGNhbiByZWJ1aWxkIGluZGV4IHdpdGggdW50cmFja2VkXG5sZXQgY2FjaGVkVHJhY2tlZEZpbGVzOiBzdHJpbmdbXSA9IFtdXG4vLyBTdG9yZSBjb25maWcgZmlsZXMgc28gbWVyZ2VVbnRyYWNrZWRJbnRvTm9ybWFsaXplZENhY2hlIHByZXNlcnZlcyB0aGVtXG5sZXQgY2FjaGVkQ29uZmlnRmlsZXM6IHN0cmluZ1tdID0gW11cbi8vIFN0b3JlIHRyYWNrZWQgZGlyZWN0b3JpZXMgc28gbWVyZ2VVbnRyYWNrZWRJbnRvTm9ybWFsaXplZENhY2hlIGRvZXNuJ3Rcbi8vIHJlY29tcHV0ZSB+MjcwayBwYXRoLmRpcm5hbWUoKSBjYWxscyBvbiBlYWNoIG1lcmdlXG5sZXQgY2FjaGVkVHJhY2tlZERpcnM6IHN0cmluZ1tdID0gW11cblxuLy8gQ2FjaGUgZm9yIC5pZ25vcmUvLnJnaWdub3JlIHBhdHRlcm5zIChrZXllZCBieSByZXBvUm9vdDpjd2QpXG5sZXQgaWdub3JlUGF0dGVybnNDYWNoZTogUmV0dXJuVHlwZTx0eXBlb2YgaWdub3JlPiB8IG51bGwgPSBudWxsXG5sZXQgaWdub3JlUGF0dGVybnNDYWNoZUtleTogc3RyaW5nIHwgbnVsbCA9IG51bGxcblxuLy8gVGhyb3R0bGUgc3RhdGUgZm9yIGJhY2tncm91bmQgcmVmcmVzaC4gLmdpdC9pbmRleCBtdGltZSB0cmlnZ2VycyBhblxuLy8gaW1tZWRpYXRlIHJlZnJlc2ggd2hlbiB0cmFja2VkIGZpbGVzIGNoYW5nZSAoYWRkL2NoZWNrb3V0L2NvbW1pdC9ybSkuXG4vLyBUaGUgdGltZSBmbG9vciBzdGlsbCByZWZyZXNoZXMgZXZlcnkgNXMgdG8gcGljayB1cCB1bnRyYWNrZWQgZmlsZXMsXG4vLyB3aGljaCBkb24ndCBidW1wIHRoZSBpbmRleC5cbmxldCBsYXN0UmVmcmVzaE1zID0gMFxubGV0IGxhc3RHaXRJbmRleE10aW1lOiBudW1iZXIgfCBudWxsID0gbnVsbFxuXG4vLyBTaWduYXR1cmVzIG9mIHRoZSBwYXRoIGxpc3RzIGxvYWRlZCBpbnRvIHRoZSBSdXN0IGluZGV4LiBUd28gc2VwYXJhdGVcbi8vIHNpZ25hdHVyZXMgYmVjYXVzZSB0aGUgdHdvIGxvYWRGcm9tRmlsZUxpc3QgY2FsbCBzaXRlcyB1c2UgZGlmZmVyZW50bHlcbi8vIHN0cnVjdHVyZWQgYXJyYXlzIFx1MjAxNCBhIHNoYXJlZCBzaWduYXR1cmUgd291bGQgcGluZy1wb25nIGFuZCBuZXZlciBtYXRjaC5cbi8vIFNraXBzIG51Y2xlby5yZXN0YXJ0KCkgd2hlbiBnaXQgbHMtZmlsZXMgcmV0dXJucyBhbiB1bmNoYW5nZWQgbGlzdFxuLy8gKGUuZy4gYGdpdCBhZGRgIG9mIGFuIGFscmVhZHktdHJhY2tlZCBmaWxlIGJ1bXBzIGluZGV4IG10aW1lIGJ1dCBub3QgdGhlIGxpc3QpLlxubGV0IGxvYWRlZFRyYWNrZWRTaWduYXR1cmU6IHN0cmluZyB8IG51bGwgPSBudWxsXG5sZXQgbG9hZGVkTWVyZ2VkU2lnbmF0dXJlOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuXG4vKipcbiAqIENsZWFyIGFsbCBmaWxlIHN1Z2dlc3Rpb24gY2FjaGVzLlxuICogQ2FsbCB0aGlzIHdoZW4gcmVzdW1pbmcgYSBzZXNzaW9uIHRvIGVuc3VyZSBmcmVzaCBmaWxlIGRpc2NvdmVyeS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyRmlsZVN1Z2dlc3Rpb25DYWNoZXMoKTogdm9pZCB7XG4gIGZpbGVJbmRleCA9IG51bGxcbiAgZmlsZUxpc3RSZWZyZXNoUHJvbWlzZSA9IG51bGxcbiAgY2FjaGVHZW5lcmF0aW9uKytcbiAgdW50cmFja2VkRmV0Y2hQcm9taXNlID0gbnVsbFxuICBjYWNoZWRUcmFja2VkRmlsZXMgPSBbXVxuICBjYWNoZWRDb25maWdGaWxlcyA9IFtdXG4gIGNhY2hlZFRyYWNrZWREaXJzID0gW11cbiAgaW5kZXhCdWlsZENvbXBsZXRlLmNsZWFyKClcbiAgaWdub3JlUGF0dGVybnNDYWNoZSA9IG51bGxcbiAgaWdub3JlUGF0dGVybnNDYWNoZUtleSA9IG51bGxcbiAgbGFzdFJlZnJlc2hNcyA9IDBcbiAgbGFzdEdpdEluZGV4TXRpbWUgPSBudWxsXG4gIGxvYWRlZFRyYWNrZWRTaWduYXR1cmUgPSBudWxsXG4gIGxvYWRlZE1lcmdlZFNpZ25hdHVyZSA9IG51bGxcbn1cblxuLyoqXG4gKiBDb250ZW50IGhhc2ggb2YgYSBwYXRoIGxpc3QuIEEgbGVuZ3RofGZpcnN0fGxhc3Qgc2FtcGxlIG1pc3NlcyByZW5hbWVzIG9mXG4gKiBtaWRkbGUgZmlsZXMgKHNhbWUgbGVuZ3RoLCBzYW1lIGVuZHBvaW50cyBcdTIxOTIgc3RhbGUgZW50cnkgc3R1Y2sgaW4gbnVjbGVvKS5cbiAqXG4gKiBTYW1wbGVzIGV2ZXJ5IE50aCBwYXRoIChwbHVzIGxlbmd0aCkuIE9uIGEgMzQ2ay1wYXRoIGxpc3QgdGhpcyBoYXNoZXMgfjcwMFxuICogcGF0aHMgaW5zdGVhZCBvZiAxNE1CIFx1MjAxNCBlbm91Z2ggdG8gY2F0Y2ggZ2l0IG9wZXJhdGlvbnMgKGNoZWNrb3V0LCByZWJhc2UsXG4gKiBhZGQvcm0pIHdoaWxlIHJ1bm5pbmcgaW4gPDFtcy4gQSBzaW5nbGUgbWlkLWxpc3QgcmVuYW1lIHRoYXQgaGFwcGVucyB0b1xuICogZmFsbCBiZXR3ZWVuIHNhbXBsZXMgd2lsbCBtaXNzIHRoZSByZWJ1aWxkLCBidXQgdGhlIDVzIHJlZnJlc2ggZmxvb3IgcGlja3NcbiAqIGl0IHVwIG9uIHRoZSBuZXh0IGN5Y2xlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGF0aExpc3RTaWduYXR1cmUocGF0aHM6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgY29uc3QgbiA9IHBhdGhzLmxlbmd0aFxuICBjb25zdCBzdHJpZGUgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKG4gLyA1MDApKVxuICBsZXQgaCA9IDB4ODExYzlkYzUgfCAwXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSArPSBzdHJpZGUpIHtcbiAgICBjb25zdCBwID0gcGF0aHNbaV0hXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBwLmxlbmd0aDsgaisrKSB7XG4gICAgICBoID0gKChoIF4gcC5jaGFyQ29kZUF0KGopKSAqIDB4MDEwMDAxOTMpIHwgMFxuICAgIH1cbiAgICBoID0gKGggKiAweDAxMDAwMTkzKSB8IDBcbiAgfVxuICAvLyBTdHJpZGUgc3RhcnRzIGF0IDAgKGZpcnN0IHBhdGggYWx3YXlzIGhhc2hlZCk7IGV4cGxpY2l0bHkgaW5jbHVkZSBsYXN0XG4gIC8vIHNvIHNpbmdsZS1maWxlIGFkZC9ybSBhdCB0aGUgdGFpbCBpcyBjYXVnaHRcbiAgaWYgKG4gPiAwKSB7XG4gICAgY29uc3QgbGFzdCA9IHBhdGhzW24gLSAxXSFcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxhc3QubGVuZ3RoOyBqKyspIHtcbiAgICAgIGggPSAoKGggXiBsYXN0LmNoYXJDb2RlQXQoaikpICogMHgwMTAwMDE5MykgfCAwXG4gICAgfVxuICB9XG4gIHJldHVybiBgJHtufTokeyhoID4+PiAwKS50b1N0cmluZygxNil9YFxufVxuXG4vKipcbiAqIFN0YXQgLmdpdC9pbmRleCB0byBkZXRlY3QgZ2l0IHN0YXRlIGNoYW5nZXMgd2l0aG91dCBzcGF3bmluZyBnaXQgbHMtZmlsZXMuXG4gKiBSZXR1cm5zIG51bGwgZm9yIHdvcmt0cmVlcyAoLmdpdCBpcyBhIGZpbGUgXHUyMTkyIEVOT1RESVIpLCBmcmVzaCByZXBvcyB3aXRoIG5vXG4gKiBpbmRleCB5ZXQgKEVOT0VOVCksIGFuZCBub24tZ2l0IGRpcnMgXHUyMDE0IGNhbGxlciBmYWxscyBiYWNrIHRvIHRpbWUgdGhyb3R0bGUuXG4gKi9cbmZ1bmN0aW9uIGdldEdpdEluZGV4TXRpbWUoKTogbnVtYmVyIHwgbnVsbCB7XG4gIGNvbnN0IHJlcG9Sb290ID0gZmluZEdpdFJvb3QoZ2V0Q3dkKCkpXG4gIGlmICghcmVwb1Jvb3QpIHJldHVybiBudWxsXG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGN1c3RvbS1ydWxlcy9uby1zeW5jLWZzIC0tIG10aW1lTXMgaXMgdGhlIG9wZXJhdGlvbiBoZXJlLCBub3QgYSBwcmUtY2hlY2suIGZpbmRHaXRSb290IGFib3ZlIGFscmVhZHkgc3RhdC13YWxrcyBzeW5jaHJvbm91c2x5OyBvbmUgbW9yZSBzdGF0IGlzIG1hcmdpbmFsIHZzIHNwYXduaW5nIGdpdCBscy1maWxlcyBvbiBldmVyeSBrZXlzdHJva2UuIEFzeW5jIHdvdWxkIGZvcmNlIHN0YXJ0QmFja2dyb3VuZENhY2hlUmVmcmVzaCB0byBiZWNvbWUgYXN5bmMsIGJyZWFraW5nIHRoZSBzeW5jaHJvbm91cyBmaWxlTGlzdFJlZnJlc2hQcm9taXNlIGNvbnRyYWN0IGF0IHRoZSBjb2xkLXN0YXJ0IGF3YWl0IHNpdGUuXG4gICAgcmV0dXJuIHN0YXRTeW5jKHBhdGguam9pbihyZXBvUm9vdCwgJy5naXQnLCAnaW5kZXgnKSkubXRpbWVNc1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbi8qKlxuICogTm9ybWFsaXplIGdpdCBwYXRocyByZWxhdGl2ZSB0byBvcmlnaW5hbEN3ZFxuICovXG5mdW5jdGlvbiBub3JtYWxpemVHaXRQYXRocyhcbiAgZmlsZXM6IHN0cmluZ1tdLFxuICByZXBvUm9vdDogc3RyaW5nLFxuICBvcmlnaW5hbEN3ZDogc3RyaW5nLFxuKTogc3RyaW5nW10ge1xuICBpZiAob3JpZ2luYWxDd2QgPT09IHJlcG9Sb290KSB7XG4gICAgcmV0dXJuIGZpbGVzXG4gIH1cbiAgcmV0dXJuIGZpbGVzLm1hcChmID0+IHtcbiAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBwYXRoLmpvaW4ocmVwb1Jvb3QsIGYpXG4gICAgcmV0dXJuIHBhdGgucmVsYXRpdmUob3JpZ2luYWxDd2QsIGFic29sdXRlUGF0aClcbiAgfSlcbn1cblxuLyoqXG4gKiBNZXJnZSBhbHJlYWR5LW5vcm1hbGl6ZWQgdW50cmFja2VkIGZpbGVzIGludG8gdGhlIGNhY2hlXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIG1lcmdlVW50cmFja2VkSW50b05vcm1hbGl6ZWRDYWNoZShcbiAgbm9ybWFsaXplZFVudHJhY2tlZDogc3RyaW5nW10sXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgaWYgKG5vcm1hbGl6ZWRVbnRyYWNrZWQubGVuZ3RoID09PSAwKSByZXR1cm5cbiAgaWYgKCFmaWxlSW5kZXggfHwgY2FjaGVkVHJhY2tlZEZpbGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgY29uc3QgdW50cmFja2VkRGlycyA9IGF3YWl0IGdldERpcmVjdG9yeU5hbWVzQXN5bmMobm9ybWFsaXplZFVudHJhY2tlZClcbiAgY29uc3QgYWxsUGF0aHMgPSBbXG4gICAgLi4uY2FjaGVkVHJhY2tlZEZpbGVzLFxuICAgIC4uLmNhY2hlZENvbmZpZ0ZpbGVzLFxuICAgIC4uLmNhY2hlZFRyYWNrZWREaXJzLFxuICAgIC4uLm5vcm1hbGl6ZWRVbnRyYWNrZWQsXG4gICAgLi4udW50cmFja2VkRGlycyxcbiAgXVxuICBjb25zdCBzaWcgPSBwYXRoTGlzdFNpZ25hdHVyZShhbGxQYXRocylcbiAgaWYgKHNpZyA9PT0gbG9hZGVkTWVyZ2VkU2lnbmF0dXJlKSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFtGaWxlSW5kZXhdIHNraXBwZWQgaW5kZXggcmVidWlsZCBcdTIwMTQgbWVyZ2VkIHBhdGhzIHVuY2hhbmdlZGAsXG4gICAgKVxuICAgIHJldHVyblxuICB9XG4gIGF3YWl0IGZpbGVJbmRleC5sb2FkRnJvbUZpbGVMaXN0QXN5bmMoYWxsUGF0aHMpLmRvbmVcbiAgbG9hZGVkTWVyZ2VkU2lnbmF0dXJlID0gc2lnXG4gIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICBgW0ZpbGVJbmRleF0gcmVidWlsdCBpbmRleCB3aXRoICR7Y2FjaGVkVHJhY2tlZEZpbGVzLmxlbmd0aH0gdHJhY2tlZCArICR7bm9ybWFsaXplZFVudHJhY2tlZC5sZW5ndGh9IHVudHJhY2tlZCBmaWxlc2AsXG4gIClcbn1cblxuLyoqXG4gKiBMb2FkIHJpcGdyZXAtc3BlY2lmaWMgaWdub3JlIHBhdHRlcm5zIGZyb20gLmlnbm9yZSBvciAucmdpZ25vcmUgZmlsZXNcbiAqIFJldHVybnMgYW4gaWdub3JlIGluc3RhbmNlIGlmIHBhdHRlcm5zIHdlcmUgZm91bmQsIG51bGwgb3RoZXJ3aXNlXG4gKiBSZXN1bHRzIGFyZSBjYWNoZWQgcGVyIHJlcG9Sb290OmN3ZCBjb21iaW5hdGlvblxuICovXG5hc3luYyBmdW5jdGlvbiBsb2FkUmlwZ3JlcElnbm9yZVBhdHRlcm5zKFxuICByZXBvUm9vdDogc3RyaW5nLFxuICBjd2Q6IHN0cmluZyxcbik6IFByb21pc2U8UmV0dXJuVHlwZTx0eXBlb2YgaWdub3JlPiB8IG51bGw+IHtcbiAgY29uc3QgY2FjaGVLZXkgPSBgJHtyZXBvUm9vdH06JHtjd2R9YFxuXG4gIC8vIFJldHVybiBjYWNoZWQgcmVzdWx0IGlmIGF2YWlsYWJsZVxuICBpZiAoaWdub3JlUGF0dGVybnNDYWNoZUtleSA9PT0gY2FjaGVLZXkpIHtcbiAgICByZXR1cm4gaWdub3JlUGF0dGVybnNDYWNoZVxuICB9XG5cbiAgY29uc3QgZnMgPSBnZXRGc0ltcGxlbWVudGF0aW9uKClcbiAgY29uc3QgaWdub3JlRmlsZXMgPSBbJy5pZ25vcmUnLCAnLnJnaWdub3JlJ11cbiAgY29uc3QgZGlyZWN0b3JpZXMgPSBbLi4ubmV3IFNldChbcmVwb1Jvb3QsIGN3ZF0pXVxuXG4gIGNvbnN0IGlnID0gaWdub3JlKClcbiAgbGV0IGhhc1BhdHRlcm5zID0gZmFsc2VcblxuICBjb25zdCBwYXRocyA9IGRpcmVjdG9yaWVzLmZsYXRNYXAoZGlyID0+XG4gICAgaWdub3JlRmlsZXMubWFwKGYgPT4gcGF0aC5qb2luKGRpciwgZikpLFxuICApXG4gIGNvbnN0IGNvbnRlbnRzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgcGF0aHMubWFwKHAgPT4gZnMucmVhZEZpbGUocCwgeyBlbmNvZGluZzogJ3V0ZjgnIH0pLmNhdGNoKCgpID0+IG51bGwpKSxcbiAgKVxuICBmb3IgKGNvbnN0IFtpLCBjb250ZW50XSBvZiBjb250ZW50cy5lbnRyaWVzKCkpIHtcbiAgICBpZiAoY29udGVudCA9PT0gbnVsbCkgY29udGludWVcbiAgICBpZy5hZGQoY29udGVudClcbiAgICBoYXNQYXR0ZXJucyA9IHRydWVcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoYFtGaWxlSW5kZXhdIGxvYWRlZCBpZ25vcmUgcGF0dGVybnMgZnJvbSAke3BhdGhzW2ldfWApXG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBoYXNQYXR0ZXJucyA/IGlnIDogbnVsbFxuICBpZ25vcmVQYXR0ZXJuc0NhY2hlID0gcmVzdWx0XG4gIGlnbm9yZVBhdHRlcm5zQ2FjaGVLZXkgPSBjYWNoZUtleVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBHZXQgZmlsZXMgdXNpbmcgZ2l0IGxzLWZpbGVzIChtdWNoIGZhc3RlciB0aGFuIHJpcGdyZXAgZm9yIGdpdCByZXBvcylcbiAqIFJldHVybnMgdHJhY2tlZCBmaWxlcyBpbW1lZGlhdGVseSwgZmV0Y2hlcyB1bnRyYWNrZWQgaW4gYmFja2dyb3VuZFxuICogQHBhcmFtIHJlc3BlY3RHaXRpZ25vcmUgSWYgdHJ1ZSwgZXhjbHVkZXMgZ2l0aWdub3JlZCBmaWxlcyBmcm9tIHVudHJhY2tlZCByZXN1bHRzXG4gKlxuICogTm90ZTogVW5saWtlIHJpcGdyZXAgLS1mb2xsb3csIGdpdCBscy1maWxlcyBkb2Vzbid0IGZvbGxvdyBzeW1saW5rcy5cbiAqIFRoaXMgaXMgaW50ZW50aW9uYWwgYXMgZ2l0IHRyYWNrcyBzeW1saW5rcyBhcyBzeW1saW5rcy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2V0RmlsZXNVc2luZ0dpdChcbiAgYWJvcnRTaWduYWw6IEFib3J0U2lnbmFsLFxuICByZXNwZWN0R2l0aWdub3JlOiBib29sZWFuLFxuKTogUHJvbWlzZTxzdHJpbmdbXSB8IG51bGw+IHtcbiAgY29uc3Qgc3RhcnRUaW1lID0gRGF0ZS5ub3coKVxuICBsb2dGb3JEZWJ1Z2dpbmcoYFtGaWxlSW5kZXhdIGdldEZpbGVzVXNpbmdHaXQgY2FsbGVkYClcblxuICAvLyBDaGVjayBpZiB3ZSdyZSBpbiBhIGdpdCByZXBvLiBmaW5kR2l0Um9vdCBpcyBMUlUtbWVtb2l6ZWQgcGVyIHBhdGguXG4gIGNvbnN0IHJlcG9Sb290ID0gZmluZEdpdFJvb3QoZ2V0Q3dkKCkpXG4gIGlmICghcmVwb1Jvb3QpIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoYFtGaWxlSW5kZXhdIG5vdCBhIGdpdCByZXBvLCByZXR1cm5pbmcgbnVsbGApXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgY3dkID0gZ2V0Q3dkKClcblxuICAgIC8vIEdldCB0cmFja2VkIGZpbGVzIChmYXN0IC0gcmVhZHMgZnJvbSBnaXQgaW5kZXgpXG4gICAgLy8gUnVuIGZyb20gcmVwb1Jvb3Qgc28gcGF0aHMgYXJlIHJlbGF0aXZlIHRvIHJlcG8gcm9vdCwgbm90IENXRFxuICAgIGNvbnN0IGxzRmlsZXNTdGFydCA9IERhdGUubm93KClcbiAgICBjb25zdCB0cmFja2VkUmVzdWx0ID0gYXdhaXQgZXhlY0ZpbGVOb1Rocm93V2l0aEN3ZChcbiAgICAgIGdpdEV4ZSgpLFxuICAgICAgWyctYycsICdjb3JlLnF1b3RlcGF0aD1mYWxzZScsICdscy1maWxlcycsICctLXJlY3Vyc2Utc3VibW9kdWxlcyddLFxuICAgICAgeyB0aW1lb3V0OiA1MDAwLCBhYm9ydFNpZ25hbCwgY3dkOiByZXBvUm9vdCB9LFxuICAgIClcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgW0ZpbGVJbmRleF0gZ2l0IGxzLWZpbGVzICh0cmFja2VkKSB0b29rICR7RGF0ZS5ub3coKSAtIGxzRmlsZXNTdGFydH1tc2AsXG4gICAgKVxuXG4gICAgaWYgKHRyYWNrZWRSZXN1bHQuY29kZSAhPT0gMCkge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgW0ZpbGVJbmRleF0gZ2l0IGxzLWZpbGVzIGZhaWxlZCAoY29kZT0ke3RyYWNrZWRSZXN1bHQuY29kZX0sIHN0ZGVycj0ke3RyYWNrZWRSZXN1bHQuc3RkZXJyfSksIGZhbGxpbmcgYmFjayB0byByaXBncmVwYCxcbiAgICAgIClcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgdHJhY2tlZEZpbGVzID0gdHJhY2tlZFJlc3VsdC5zdGRvdXQudHJpbSgpLnNwbGl0KCdcXG4nKS5maWx0ZXIoQm9vbGVhbilcblxuICAgIC8vIE5vcm1hbGl6ZSBwYXRocyByZWxhdGl2ZSB0byB0aGUgY3VycmVudCB3b3JraW5nIGRpcmVjdG9yeVxuICAgIGxldCBub3JtYWxpemVkVHJhY2tlZCA9IG5vcm1hbGl6ZUdpdFBhdGhzKHRyYWNrZWRGaWxlcywgcmVwb1Jvb3QsIGN3ZClcblxuICAgIC8vIEFwcGx5IC5pZ25vcmUvLnJnaWdub3JlIHBhdHRlcm5zIGlmIHByZXNlbnQgKGZhc3RlciB0aGFuIGZhbGxpbmcgYmFjayB0byByaXBncmVwKVxuICAgIGNvbnN0IGlnbm9yZVBhdHRlcm5zID0gYXdhaXQgbG9hZFJpcGdyZXBJZ25vcmVQYXR0ZXJucyhyZXBvUm9vdCwgY3dkKVxuICAgIGlmIChpZ25vcmVQYXR0ZXJucykge1xuICAgICAgY29uc3QgYmVmb3JlQ291bnQgPSBub3JtYWxpemVkVHJhY2tlZC5sZW5ndGhcbiAgICAgIG5vcm1hbGl6ZWRUcmFja2VkID0gaWdub3JlUGF0dGVybnMuZmlsdGVyKG5vcm1hbGl6ZWRUcmFja2VkKVxuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgW0ZpbGVJbmRleF0gYXBwbGllZCBpZ25vcmUgcGF0dGVybnM6ICR7YmVmb3JlQ291bnR9IC0+ICR7bm9ybWFsaXplZFRyYWNrZWQubGVuZ3RofSBmaWxlc2AsXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gQ2FjaGUgdHJhY2tlZCBmaWxlcyBmb3IgbGF0ZXIgbWVyZ2Ugd2l0aCB1bnRyYWNrZWRcbiAgICBjYWNoZWRUcmFja2VkRmlsZXMgPSBub3JtYWxpemVkVHJhY2tlZFxuXG4gICAgY29uc3QgZHVyYXRpb24gPSBEYXRlLm5vdygpIC0gc3RhcnRUaW1lXG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFtGaWxlSW5kZXhdIGdpdCBscy1maWxlczogJHtub3JtYWxpemVkVHJhY2tlZC5sZW5ndGh9IHRyYWNrZWQgZmlsZXMgaW4gJHtkdXJhdGlvbn1tc2AsXG4gICAgKVxuXG4gICAgbG9nRXZlbnQoJ3Rlbmd1X2ZpbGVfc3VnZ2VzdGlvbnNfZ2l0X2xzX2ZpbGVzJywge1xuICAgICAgZmlsZV9jb3VudDogbm9ybWFsaXplZFRyYWNrZWQubGVuZ3RoLFxuICAgICAgdHJhY2tlZF9jb3VudDogbm9ybWFsaXplZFRyYWNrZWQubGVuZ3RoLFxuICAgICAgdW50cmFja2VkX2NvdW50OiAwLFxuICAgICAgZHVyYXRpb25fbXM6IGR1cmF0aW9uLFxuICAgIH0pXG5cbiAgICAvLyBTdGFydCBiYWNrZ3JvdW5kIGZldGNoIGZvciB1bnRyYWNrZWQgZmlsZXMgKGRvbid0IGF3YWl0KVxuICAgIGlmICghdW50cmFja2VkRmV0Y2hQcm9taXNlKSB7XG4gICAgICBjb25zdCB1bnRyYWNrZWRBcmdzID0gcmVzcGVjdEdpdGlnbm9yZVxuICAgICAgICA/IFtcbiAgICAgICAgICAgICctYycsXG4gICAgICAgICAgICAnY29yZS5xdW90ZXBhdGg9ZmFsc2UnLFxuICAgICAgICAgICAgJ2xzLWZpbGVzJyxcbiAgICAgICAgICAgICctLW90aGVycycsXG4gICAgICAgICAgICAnLS1leGNsdWRlLXN0YW5kYXJkJyxcbiAgICAgICAgICBdXG4gICAgICAgIDogWyctYycsICdjb3JlLnF1b3RlcGF0aD1mYWxzZScsICdscy1maWxlcycsICctLW90aGVycyddXG5cbiAgICAgIGNvbnN0IGdlbmVyYXRpb24gPSBjYWNoZUdlbmVyYXRpb25cbiAgICAgIHVudHJhY2tlZEZldGNoUHJvbWlzZSA9IGV4ZWNGaWxlTm9UaHJvd1dpdGhDd2QoZ2l0RXhlKCksIHVudHJhY2tlZEFyZ3MsIHtcbiAgICAgICAgdGltZW91dDogMTAwMDAsXG4gICAgICAgIGN3ZDogcmVwb1Jvb3QsXG4gICAgICB9KVxuICAgICAgICAudGhlbihhc3luYyB1bnRyYWNrZWRSZXN1bHQgPT4ge1xuICAgICAgICAgIGlmIChnZW5lcmF0aW9uICE9PSBjYWNoZUdlbmVyYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiAvLyBDYWNoZSB3YXMgY2xlYXJlZDsgZG9uJ3QgbWVyZ2Ugc3RhbGUgdW50cmFja2VkIGZpbGVzXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh1bnRyYWNrZWRSZXN1bHQuY29kZSA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgcmF3VW50cmFja2VkRmlsZXMgPSB1bnRyYWNrZWRSZXN1bHQuc3Rkb3V0XG4gICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgLnNwbGl0KCdcXG4nKVxuICAgICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG5cbiAgICAgICAgICAgIC8vIE5vcm1hbGl6ZSBwYXRocyBCRUZPUkUgYXBwbHlpbmcgaWdub3JlIHBhdHRlcm5zIChjb25zaXN0ZW50IHdpdGggdHJhY2tlZCBmaWxlcylcbiAgICAgICAgICAgIGxldCBub3JtYWxpemVkVW50cmFja2VkID0gbm9ybWFsaXplR2l0UGF0aHMoXG4gICAgICAgICAgICAgIHJhd1VudHJhY2tlZEZpbGVzLFxuICAgICAgICAgICAgICByZXBvUm9vdCxcbiAgICAgICAgICAgICAgY3dkLFxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAvLyBBcHBseSAuaWdub3JlLy5yZ2lnbm9yZSBwYXR0ZXJucyB0byBub3JtYWxpemVkIHVudHJhY2tlZCBmaWxlc1xuICAgICAgICAgICAgY29uc3QgaWdub3JlUGF0dGVybnMgPSBhd2FpdCBsb2FkUmlwZ3JlcElnbm9yZVBhdHRlcm5zKFxuICAgICAgICAgICAgICByZXBvUm9vdCxcbiAgICAgICAgICAgICAgY3dkLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKGlnbm9yZVBhdHRlcm5zICYmIG5vcm1hbGl6ZWRVbnRyYWNrZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICBjb25zdCBiZWZvcmVDb3VudCA9IG5vcm1hbGl6ZWRVbnRyYWNrZWQubGVuZ3RoXG4gICAgICAgICAgICAgIG5vcm1hbGl6ZWRVbnRyYWNrZWQgPSBpZ25vcmVQYXR0ZXJucy5maWx0ZXIobm9ybWFsaXplZFVudHJhY2tlZClcbiAgICAgICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgICAgIGBbRmlsZUluZGV4XSBhcHBsaWVkIGlnbm9yZSBwYXR0ZXJucyB0byB1bnRyYWNrZWQ6ICR7YmVmb3JlQ291bnR9IC0+ICR7bm9ybWFsaXplZFVudHJhY2tlZC5sZW5ndGh9IGZpbGVzYCxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICAgIGBbRmlsZUluZGV4XSBiYWNrZ3JvdW5kIHVudHJhY2tlZCBmZXRjaDogJHtub3JtYWxpemVkVW50cmFja2VkLmxlbmd0aH0gZmlsZXNgLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLy8gUGFzcyBhbHJlYWR5LW5vcm1hbGl6ZWQgZmlsZXMgZGlyZWN0bHkgdG8gbWVyZ2UgZnVuY3Rpb25cbiAgICAgICAgICAgIHZvaWQgbWVyZ2VVbnRyYWNrZWRJbnRvTm9ybWFsaXplZENhY2hlKG5vcm1hbGl6ZWRVbnRyYWNrZWQpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgIGBbRmlsZUluZGV4XSBiYWNrZ3JvdW5kIHVudHJhY2tlZCBmZXRjaCBmYWlsZWQ6ICR7ZXJyb3J9YCxcbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICB1bnRyYWNrZWRGZXRjaFByb21pc2UgPSBudWxsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vcm1hbGl6ZWRUcmFja2VkXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKGBbRmlsZUluZGV4XSBnaXQgbHMtZmlsZXMgZXJyb3I6ICR7ZXJyb3JNZXNzYWdlKGVycm9yKX1gKVxuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNvbGxlY3RzIGFsbCBwYXJlbnQgZGlyZWN0b3JpZXMgZm9yIGVhY2ggZmlsZSBwYXRoXG4gKiBhbmQgcmV0dXJucyBhIGxpc3Qgb2YgdW5pcXVlIGRpcmVjdG9yeSBuYW1lcyB3aXRoIGEgdHJhaWxpbmcgc2VwYXJhdG9yLlxuICogRm9yIGV4YW1wbGUsIGlmIHRoZSBpbnB1dCBpcyBbJ3NyYy9pbmRleC5qcycsICdzcmMvdXRpbHMvaGVscGVycy5qcyddLFxuICogdGhlIG91dHB1dCB3aWxsIGJlIFsnc3JjLycsICdzcmMvdXRpbHMvJ10uXG4gKiBAcGFyYW0gZmlsZXMgQW4gYXJyYXkgb2YgZmlsZSBwYXRoc1xuICogQHJldHVybnMgQW4gYXJyYXkgb2YgdW5pcXVlIGRpcmVjdG9yeSBuYW1lcyB3aXRoIGEgdHJhaWxpbmcgc2VwYXJhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXJlY3RvcnlOYW1lcyhmaWxlczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gIGNvbnN0IGRpcmVjdG9yeU5hbWVzID0gbmV3IFNldDxzdHJpbmc+KClcbiAgY29sbGVjdERpcmVjdG9yeU5hbWVzKGZpbGVzLCAwLCBmaWxlcy5sZW5ndGgsIGRpcmVjdG9yeU5hbWVzKVxuICByZXR1cm4gWy4uLmRpcmVjdG9yeU5hbWVzXS5tYXAoZCA9PiBkICsgcGF0aC5zZXApXG59XG5cbi8qKlxuICogQXN5bmMgdmFyaWFudDogeWllbGRzIGV2ZXJ5IH4xMGsgZmlsZXMgc28gMjcwaysgZmlsZSBsaXN0cyBkb24ndCBibG9ja1xuICogdGhlIG1haW4gdGhyZWFkIGZvciA+MTBtcyBhdCBhIHRpbWUuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREaXJlY3RvcnlOYW1lc0FzeW5jKFxuICBmaWxlczogc3RyaW5nW10sXG4pOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gIGNvbnN0IGRpcmVjdG9yeU5hbWVzID0gbmV3IFNldDxzdHJpbmc+KClcbiAgLy8gVGltZS1iYXNlZCBjaHVua2luZzogeWllbGQgYWZ0ZXIgQ0hVTktfTVMgb2Ygd29yayBzbyBzbG93IG1hY2hpbmVzIGdldFxuICAvLyBzbWFsbGVyIGNodW5rcyBhbmQgc3RheSByZXNwb25zaXZlLlxuICBsZXQgY2h1bmtTdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb2xsZWN0RGlyZWN0b3J5TmFtZXMoZmlsZXMsIGksIGkgKyAxLCBkaXJlY3RvcnlOYW1lcylcbiAgICBpZiAoKGkgJiAweGZmKSA9PT0gMHhmZiAmJiBwZXJmb3JtYW5jZS5ub3coKSAtIGNodW5rU3RhcnQgPiBDSFVOS19NUykge1xuICAgICAgYXdhaXQgeWllbGRUb0V2ZW50TG9vcCgpXG4gICAgICBjaHVua1N0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFsuLi5kaXJlY3RvcnlOYW1lc10ubWFwKGQgPT4gZCArIHBhdGguc2VwKVxufVxuXG5mdW5jdGlvbiBjb2xsZWN0RGlyZWN0b3J5TmFtZXMoXG4gIGZpbGVzOiBzdHJpbmdbXSxcbiAgc3RhcnQ6IG51bWJlcixcbiAgZW5kOiBudW1iZXIsXG4gIG91dDogU2V0PHN0cmluZz4sXG4pOiB2b2lkIHtcbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBsZXQgY3VycmVudERpciA9IHBhdGguZGlybmFtZShmaWxlc1tpXSEpXG4gICAgLy8gRWFybHkgZXhpdCBpZiB3ZSd2ZSBhbHJlYWR5IHByb2Nlc3NlZCB0aGlzIGRpcmVjdG9yeSBhbmQgYWxsIGl0cyBwYXJlbnRzLlxuICAgIC8vIFJvb3QgZGV0ZWN0aW9uOiBwYXRoLmRpcm5hbWUgcmV0dXJucyBpdHMgaW5wdXQgYXQgdGhlIHJvb3QgKGZpeGVkIHBvaW50KSxcbiAgICAvLyBzbyB3ZSBzdG9wIHdoZW4gZGlybmFtZSBzdG9wcyBjaGFuZ2luZy4gQ2hlY2tpbmcgdGhpcyBiZWZvcmUgYWRkKCkga2VlcHNcbiAgICAvLyB0aGUgcm9vdCBvdXQgb2YgdGhlIHJlc3VsdCBzZXQgKG1hdGNoaW5nIHRoZSBvbGQgcGF0aC5wYXJzZSgpLnJvb3QgZ3VhcmQpLlxuICAgIC8vIFRoaXMgYXZvaWRzIHBhdGgucGFyc2UoKSB3aGljaCBhbGxvY2F0ZXMgYSA1LWZpZWxkIG9iamVjdCBwZXIgZmlsZS5cbiAgICB3aGlsZSAoY3VycmVudERpciAhPT0gJy4nICYmICFvdXQuaGFzKGN1cnJlbnREaXIpKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSBwYXRoLmRpcm5hbWUoY3VycmVudERpcilcbiAgICAgIGlmIChwYXJlbnQgPT09IGN1cnJlbnREaXIpIGJyZWFrXG4gICAgICBvdXQuYWRkKGN1cnJlbnREaXIpXG4gICAgICBjdXJyZW50RGlyID0gcGFyZW50XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogR2V0cyBhZGRpdGlvbmFsIGZpbGVzIGZyb20gQ2xhdWRlIGNvbmZpZyBkaXJlY3Rvcmllc1xuICovXG5hc3luYyBmdW5jdGlvbiBnZXRDbGF1ZGVDb25maWdGaWxlcyhjd2Q6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgY29uc3QgbWFya2Rvd25GaWxlQXJyYXlzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgQ0xBVURFX0NPTkZJR19ESVJFQ1RPUklFUy5tYXAoc3ViZGlyID0+XG4gICAgICBsb2FkTWFya2Rvd25GaWxlc0ZvclN1YmRpcihzdWJkaXIsIGN3ZCksXG4gICAgKSxcbiAgKVxuICByZXR1cm4gbWFya2Rvd25GaWxlQXJyYXlzLmZsYXRNYXAobWFya2Rvd25GaWxlcyA9PlxuICAgIG1hcmtkb3duRmlsZXMubWFwKGYgPT4gZi5maWxlUGF0aCksXG4gIClcbn1cblxuLyoqXG4gKiBHZXRzIHByb2plY3QgZmlsZXMgdXNpbmcgZ2l0IGxzLWZpbGVzIChmYXN0KSBvciByaXBncmVwIChmYWxsYmFjaylcbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2V0UHJvamVjdEZpbGVzKFxuICBhYm9ydFNpZ25hbDogQWJvcnRTaWduYWwsXG4gIHJlc3BlY3RHaXRpZ25vcmU6IGJvb2xlYW4sXG4pOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICBgW0ZpbGVJbmRleF0gZ2V0UHJvamVjdEZpbGVzIGNhbGxlZCwgcmVzcGVjdEdpdGlnbm9yZT0ke3Jlc3BlY3RHaXRpZ25vcmV9YCxcbiAgKVxuXG4gIC8vIFRyeSBnaXQgbHMtZmlsZXMgZmlyc3QgKG11Y2ggZmFzdGVyIGZvciBnaXQgcmVwb3MpXG4gIGNvbnN0IGdpdEZpbGVzID0gYXdhaXQgZ2V0RmlsZXNVc2luZ0dpdChhYm9ydFNpZ25hbCwgcmVzcGVjdEdpdGlnbm9yZSlcbiAgaWYgKGdpdEZpbGVzICE9PSBudWxsKSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFtGaWxlSW5kZXhdIHVzaW5nIGdpdCBscy1maWxlcyByZXN1bHQgKCR7Z2l0RmlsZXMubGVuZ3RofSBmaWxlcylgLFxuICAgIClcbiAgICByZXR1cm4gZ2l0RmlsZXNcbiAgfVxuXG4gIC8vIEZhbGwgYmFjayB0byByaXBncmVwXG4gIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICBgW0ZpbGVJbmRleF0gZ2l0IGxzLWZpbGVzIHJldHVybmVkIG51bGwsIGZhbGxpbmcgYmFjayB0byByaXBncmVwYCxcbiAgKVxuICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpXG4gIGNvbnN0IHJnQXJncyA9IFtcbiAgICAnLS1maWxlcycsXG4gICAgJy0tZm9sbG93JyxcbiAgICAnLS1oaWRkZW4nLFxuICAgICctLWdsb2InLFxuICAgICchLmdpdC8nLFxuICAgICctLWdsb2InLFxuICAgICchLnN2bi8nLFxuICAgICctLWdsb2InLFxuICAgICchLmhnLycsXG4gICAgJy0tZ2xvYicsXG4gICAgJyEuYnpyLycsXG4gICAgJy0tZ2xvYicsXG4gICAgJyEuamovJyxcbiAgICAnLS1nbG9iJyxcbiAgICAnIS5zbC8nLFxuICBdXG4gIGlmICghcmVzcGVjdEdpdGlnbm9yZSkge1xuICAgIHJnQXJncy5wdXNoKCctLW5vLWlnbm9yZS12Y3MnKVxuICB9XG5cbiAgY29uc3QgZmlsZXMgPSBhd2FpdCByaXBHcmVwKHJnQXJncywgJy4nLCBhYm9ydFNpZ25hbClcbiAgY29uc3QgcmVsYXRpdmVQYXRocyA9IGZpbGVzLm1hcChmID0+IHBhdGgucmVsYXRpdmUoZ2V0Q3dkKCksIGYpKVxuXG4gIGNvbnN0IGR1cmF0aW9uID0gRGF0ZS5ub3coKSAtIHN0YXJ0VGltZVxuICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgYFtGaWxlSW5kZXhdIHJpcGdyZXA6ICR7cmVsYXRpdmVQYXRocy5sZW5ndGh9IGZpbGVzIGluICR7ZHVyYXRpb259bXNgLFxuICApXG5cbiAgbG9nRXZlbnQoJ3Rlbmd1X2ZpbGVfc3VnZ2VzdGlvbnNfcmlwZ3JlcCcsIHtcbiAgICBmaWxlX2NvdW50OiByZWxhdGl2ZVBhdGhzLmxlbmd0aCxcbiAgICBkdXJhdGlvbl9tczogZHVyYXRpb24sXG4gIH0pXG5cbiAgcmV0dXJuIHJlbGF0aXZlUGF0aHNcbn1cblxuLyoqXG4gKiBHZXRzIGJvdGggZmlsZXMgYW5kIHRoZWlyIGRpcmVjdG9yeSBwYXRocyBmb3IgcHJvdmlkaW5nIHBhdGggc3VnZ2VzdGlvbnNcbiAqIFVzZXMgZ2l0IGxzLWZpbGVzIGZvciBnaXQgcmVwb3MgKGZhc3QpIG9yIHJpcGdyZXAgYXMgZmFsbGJhY2tcbiAqIFJldHVybnMgYSBGaWxlSW5kZXggcG9wdWxhdGVkIGZvciBmYXN0IGZ1enp5IHNlYXJjaFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGF0aHNGb3JTdWdnZXN0aW9ucygpOiBQcm9taXNlPEZpbGVJbmRleD4ge1xuICBjb25zdCBzaWduYWwgPSBBYm9ydFNpZ25hbC50aW1lb3V0KDEwXzAwMClcbiAgY29uc3QgaW5kZXggPSBnZXRGaWxlSW5kZXgoKVxuXG4gIHRyeSB7XG4gICAgLy8gQ2hlY2sgcHJvamVjdCBzZXR0aW5ncyBmaXJzdCwgdGhlbiBmYWxsIGJhY2sgdG8gZ2xvYmFsIGNvbmZpZ1xuICAgIGNvbnN0IHByb2plY3RTZXR0aW5ncyA9IGdldEluaXRpYWxTZXR0aW5ncygpXG4gICAgY29uc3QgZ2xvYmFsQ29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKClcbiAgICBjb25zdCByZXNwZWN0R2l0aWdub3JlID1cbiAgICAgIHByb2plY3RTZXR0aW5ncy5yZXNwZWN0R2l0aWdub3JlID8/IGdsb2JhbENvbmZpZy5yZXNwZWN0R2l0aWdub3JlID8/IHRydWVcblxuICAgIGNvbnN0IGN3ZCA9IGdldEN3ZCgpXG4gICAgY29uc3QgW3Byb2plY3RGaWxlcywgY29uZmlnRmlsZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgZ2V0UHJvamVjdEZpbGVzKHNpZ25hbCwgcmVzcGVjdEdpdGlnbm9yZSksXG4gICAgICBnZXRDbGF1ZGVDb25maWdGaWxlcyhjd2QpLFxuICAgIF0pXG5cbiAgICAvLyBDYWNoZSBmb3IgbWVyZ2VVbnRyYWNrZWRJbnRvTm9ybWFsaXplZENhY2hlXG4gICAgY2FjaGVkQ29uZmlnRmlsZXMgPSBjb25maWdGaWxlc1xuXG4gICAgY29uc3QgYWxsRmlsZXMgPSBbLi4ucHJvamVjdEZpbGVzLCAuLi5jb25maWdGaWxlc11cbiAgICBjb25zdCBkaXJlY3RvcmllcyA9IGF3YWl0IGdldERpcmVjdG9yeU5hbWVzQXN5bmMoYWxsRmlsZXMpXG4gICAgY2FjaGVkVHJhY2tlZERpcnMgPSBkaXJlY3Rvcmllc1xuICAgIGNvbnN0IGFsbFBhdGhzTGlzdCA9IFsuLi5kaXJlY3RvcmllcywgLi4uYWxsRmlsZXNdXG5cbiAgICAvLyBTa2lwIHJlYnVpbGQgd2hlbiB0aGUgbGlzdCBpcyB1bmNoYW5nZWQuIFRoaXMgaXMgdGhlIGNvbW1vbiBjYXNlXG4gICAgLy8gZHVyaW5nIGEgdHlwaW5nIHNlc3Npb24gXHUyMDE0IGdpdCBscy1maWxlcyByZXR1cm5zIHRoZSBzYW1lIG91dHB1dC5cbiAgICBjb25zdCBzaWcgPSBwYXRoTGlzdFNpZ25hdHVyZShhbGxQYXRoc0xpc3QpXG4gICAgaWYgKHNpZyAhPT0gbG9hZGVkVHJhY2tlZFNpZ25hdHVyZSkge1xuICAgICAgLy8gQXdhaXQgdGhlIGZ1bGwgYnVpbGQgc28gY29sZC1zdGFydCByZXR1cm5zIGNvbXBsZXRlIHJlc3VsdHMuIFRoZVxuICAgICAgLy8gYnVpbGQgeWllbGRzIGV2ZXJ5IH40bXMgc28gdGhlIFVJIHN0YXlzIHJlc3BvbnNpdmUgXHUyMDE0IHVzZXIgY2FuIGtlZXBcbiAgICAgIC8vIHR5cGluZyBkdXJpbmcgdGhlIH4xMjBtcyB3YWl0IHdpdGhvdXQgaW5wdXQgbGFnLlxuICAgICAgYXdhaXQgaW5kZXgubG9hZEZyb21GaWxlTGlzdEFzeW5jKGFsbFBhdGhzTGlzdCkuZG9uZVxuICAgICAgbG9hZGVkVHJhY2tlZFNpZ25hdHVyZSA9IHNpZ1xuICAgICAgLy8gV2UganVzdCByZXBsYWNlZCB0aGUgbWVyZ2VkIGluZGV4IHdpdGggdHJhY2tlZC1vbmx5IGRhdGEuIEZvcmNlXG4gICAgICAvLyB0aGUgbmV4dCB1bnRyYWNrZWQgbWVyZ2UgdG8gcmVidWlsZCBldmVuIGlmIGl0cyBvd24gc2lnIG1hdGNoZXMuXG4gICAgICBsb2FkZWRNZXJnZWRTaWduYXR1cmUgPSBudWxsXG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFtGaWxlSW5kZXhdIHNraXBwZWQgaW5kZXggcmVidWlsZCBcdTIwMTQgdHJhY2tlZCBwYXRocyB1bmNoYW5nZWRgLFxuICAgICAgKVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2dFcnJvcihlcnJvcilcbiAgfVxuXG4gIHJldHVybiBpbmRleFxufVxuXG4vKipcbiAqIEZpbmRzIHRoZSBjb21tb24gcHJlZml4IGJldHdlZW4gdHdvIHN0cmluZ3NcbiAqL1xuZnVuY3Rpb24gZmluZENvbW1vblByZWZpeChhOiBzdHJpbmcsIGI6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IG1pbkxlbmd0aCA9IE1hdGgubWluKGEubGVuZ3RoLCBiLmxlbmd0aClcbiAgbGV0IGkgPSAwXG4gIHdoaWxlIChpIDwgbWluTGVuZ3RoICYmIGFbaV0gPT09IGJbaV0pIHtcbiAgICBpKytcbiAgfVxuICByZXR1cm4gYS5zdWJzdHJpbmcoMCwgaSlcbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgbG9uZ2VzdCBjb21tb24gcHJlZml4IGFtb25nIGFuIGFycmF5IG9mIHN1Z2dlc3Rpb24gaXRlbXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRMb25nZXN0Q29tbW9uUHJlZml4KHN1Z2dlc3Rpb25zOiBTdWdnZXN0aW9uSXRlbVtdKTogc3RyaW5nIHtcbiAgaWYgKHN1Z2dlc3Rpb25zLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcnXG5cbiAgY29uc3Qgc3RyaW5ncyA9IHN1Z2dlc3Rpb25zLm1hcChpdGVtID0+IGl0ZW0uZGlzcGxheVRleHQpXG4gIGxldCBwcmVmaXggPSBzdHJpbmdzWzBdIVxuICBmb3IgKGxldCBpID0gMTsgaSA8IHN0cmluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjdXJyZW50U3RyaW5nID0gc3RyaW5nc1tpXSFcbiAgICBwcmVmaXggPSBmaW5kQ29tbW9uUHJlZml4KHByZWZpeCwgY3VycmVudFN0cmluZylcbiAgICBpZiAocHJlZml4ID09PSAnJykgcmV0dXJuICcnXG4gIH1cbiAgcmV0dXJuIHByZWZpeFxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBmaWxlIHN1Z2dlc3Rpb24gaXRlbVxuICovXG5mdW5jdGlvbiBjcmVhdGVGaWxlU3VnZ2VzdGlvbkl0ZW0oXG4gIGZpbGVQYXRoOiBzdHJpbmcsXG4gIHNjb3JlPzogbnVtYmVyLFxuKTogU3VnZ2VzdGlvbkl0ZW0ge1xuICByZXR1cm4ge1xuICAgIGlkOiBgZmlsZS0ke2ZpbGVQYXRofWAsXG4gICAgZGlzcGxheVRleHQ6IGZpbGVQYXRoLFxuICAgIG1ldGFkYXRhOiBzY29yZSAhPT0gdW5kZWZpbmVkID8geyBzY29yZSB9IDogdW5kZWZpbmVkLFxuICB9XG59XG5cbi8qKlxuICogRmluZCBtYXRjaGluZyBmaWxlcyBhbmQgZm9sZGVycyBmb3IgYSBnaXZlbiBxdWVyeSB1c2luZyB0aGUgVFMgZmlsZSBpbmRleFxuICovXG5jb25zdCBNQVhfU1VHR0VTVElPTlMgPSAxNVxuZnVuY3Rpb24gZmluZE1hdGNoaW5nRmlsZXMoXG4gIGZpbGVJbmRleDogRmlsZUluZGV4LFxuICBwYXJ0aWFsUGF0aDogc3RyaW5nLFxuKTogU3VnZ2VzdGlvbkl0ZW1bXSB7XG4gIGNvbnN0IHJlc3VsdHMgPSBmaWxlSW5kZXguc2VhcmNoKHBhcnRpYWxQYXRoLCBNQVhfU1VHR0VTVElPTlMpXG4gIHJldHVybiByZXN1bHRzLm1hcChyZXN1bHQgPT5cbiAgICBjcmVhdGVGaWxlU3VnZ2VzdGlvbkl0ZW0ocmVzdWx0LnBhdGgsIHJlc3VsdC5zY29yZSksXG4gIClcbn1cblxuLyoqXG4gKiBTdGFydHMgYSBiYWNrZ3JvdW5kIHJlZnJlc2ggb2YgdGhlIGZpbGUgaW5kZXggY2FjaGUgaWYgbm90IGFscmVhZHkgaW4gcHJvZ3Jlc3MuXG4gKlxuICogVGhyb3R0bGVkOiB3aGVuIGEgY2FjaGUgYWxyZWFkeSBleGlzdHMsIHdlIHNraXAgdGhlIHJlZnJlc2ggdW5sZXNzIGdpdCBzdGF0ZVxuICogaGFzIGFjdHVhbGx5IGNoYW5nZWQuIFRoaXMgcHJldmVudHMgZXZlcnkga2V5c3Ryb2tlIGZyb20gc3Bhd25pbmcgZ2l0IGxzLWZpbGVzXG4gKiBhbmQgcmVidWlsZGluZyB0aGUgbnVjbGVvIGluZGV4LlxuICovXG5jb25zdCBSRUZSRVNIX1RIUk9UVExFX01TID0gNV8wMDBcbmV4cG9ydCBmdW5jdGlvbiBzdGFydEJhY2tncm91bmRDYWNoZVJlZnJlc2goKTogdm9pZCB7XG4gIGlmIChmaWxlTGlzdFJlZnJlc2hQcm9taXNlKSByZXR1cm5cblxuICAvLyBUaHJvdHRsZSBvbmx5IHdoZW4gYSBjYWNoZSBleGlzdHMgXHUyMDE0IGNvbGQgc3RhcnQgbXVzdCBhbHdheXMgcG9wdWxhdGUuXG4gIC8vIFJlZnJlc2ggaW1tZWRpYXRlbHkgd2hlbiAuZ2l0L2luZGV4IG10aW1lIGNoYW5nZWQgKHRyYWNrZWQgZmlsZXMpLlxuICAvLyBPdGhlcndpc2UgcmVmcmVzaCBhdCBtb3N0IG9uY2UgcGVyIDVzIFx1MjAxNCB0aGlzIGZsb29yIHBpY2tzIHVwIG5ldyBVTlRSQUNLRURcbiAgLy8gZmlsZXMsIHdoaWNoIGRvbid0IGJ1bXAgLmdpdC9pbmRleC4gVGhlIHNpZ25hdHVyZSBjaGVja3MgZG93bnN0cmVhbSBza2lwXG4gIC8vIHRoZSByZWJ1aWxkIHdoZW4gdGhlIDVzIHJlZnJlc2ggZmluZHMgbm90aGluZyBhY3R1YWxseSBjaGFuZ2VkLlxuICBjb25zdCBpbmRleE10aW1lID0gZ2V0R2l0SW5kZXhNdGltZSgpXG4gIGlmIChmaWxlSW5kZXgpIHtcbiAgICBjb25zdCBnaXRTdGF0ZUNoYW5nZWQgPVxuICAgICAgaW5kZXhNdGltZSAhPT0gbnVsbCAmJiBpbmRleE10aW1lICE9PSBsYXN0R2l0SW5kZXhNdGltZVxuICAgIGlmICghZ2l0U3RhdGVDaGFuZ2VkICYmIERhdGUubm93KCkgLSBsYXN0UmVmcmVzaE1zIDwgUkVGUkVTSF9USFJPVFRMRV9NUykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2VuZXJhdGlvbiA9IGNhY2hlR2VuZXJhdGlvblxuICBjb25zdCByZWZyZXNoU3RhcnQgPSBEYXRlLm5vdygpXG4gIC8vIEVuc3VyZSB0aGUgRmlsZUluZGV4IHNpbmdsZXRvbiBleGlzdHMgXHUyMDE0IGl0J3MgcHJvZ3Jlc3NpdmVseSBxdWVyeWFibGVcbiAgLy8gdmlhIHJlYWR5Q291bnQgd2hpbGUgdGhlIGJ1aWxkIHJ1bnMuIENhbGxlcnMgc2VhcmNoaW5nIGVhcmx5IGdldCBwYXJ0aWFsXG4gIC8vIHJlc3VsdHM7IGluZGV4QnVpbGRDb21wbGV0ZSBmaXJlcyBhZnRlciAuZG9uZSBzbyB0aGV5IGNhbiByZS1zZWFyY2guXG4gIGdldEZpbGVJbmRleCgpXG4gIGZpbGVMaXN0UmVmcmVzaFByb21pc2UgPSBnZXRQYXRoc0ZvclN1Z2dlc3Rpb25zKClcbiAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgaWYgKGdlbmVyYXRpb24gIT09IGNhY2hlR2VuZXJhdGlvbikge1xuICAgICAgICByZXR1cm4gcmVzdWx0IC8vIENhY2hlIHdhcyBjbGVhcmVkOyBkb24ndCBvdmVyd3JpdGUgd2l0aCBzdGFsZSBkYXRhXG4gICAgICB9XG4gICAgICBmaWxlTGlzdFJlZnJlc2hQcm9taXNlID0gbnVsbFxuICAgICAgaW5kZXhCdWlsZENvbXBsZXRlLmVtaXQoKVxuICAgICAgLy8gQ29tbWl0IHRoZSBzdGFydC10aW1lIG10aW1lIG9ic2VydmF0aW9uIG9uIHN1Y2Nlc3MuIElmIGdpdCBzdGF0ZVxuICAgICAgLy8gY2hhbmdlZCBtaWQtcmVmcmVzaCwgdGhlIG5leHQgY2FsbCB3aWxsIHNlZSB0aGUgbmV3ZXIgbXRpbWUgYW5kXG4gICAgICAvLyBjb3JyZWN0bHkgcmVmcmVzaCBhZ2Fpbi5cbiAgICAgIGxhc3RHaXRJbmRleE10aW1lID0gaW5kZXhNdGltZVxuICAgICAgbGFzdFJlZnJlc2hNcyA9IERhdGUubm93KClcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFtGaWxlSW5kZXhdIGNhY2hlIHJlZnJlc2ggY29tcGxldGVkIGluICR7RGF0ZS5ub3coKSAtIHJlZnJlc2hTdGFydH1tc2AsXG4gICAgICApXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgW0ZpbGVJbmRleF0gQ2FjaGUgcmVmcmVzaCBmYWlsZWQ6ICR7ZXJyb3JNZXNzYWdlKGVycm9yKX1gLFxuICAgICAgKVxuICAgICAgbG9nRXJyb3IoZXJyb3IpXG4gICAgICBpZiAoZ2VuZXJhdGlvbiA9PT0gY2FjaGVHZW5lcmF0aW9uKSB7XG4gICAgICAgIGZpbGVMaXN0UmVmcmVzaFByb21pc2UgPSBudWxsIC8vIEFsbG93IHJldHJ5IG9uIG5leHQgY2FsbFxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVJbmRleCgpXG4gICAgfSlcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSB0b3AtbGV2ZWwgZmlsZXMgYW5kIGRpcmVjdG9yaWVzIGluIHRoZSBjdXJyZW50IHdvcmtpbmcgZGlyZWN0b3J5XG4gKiBAcmV0dXJucyBBcnJheSBvZiBmaWxlL2RpcmVjdG9yeSBwYXRocyBpbiB0aGUgY3VycmVudCBkaXJlY3RvcnlcbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2V0VG9wTGV2ZWxQYXRocygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gIGNvbnN0IGZzID0gZ2V0RnNJbXBsZW1lbnRhdGlvbigpXG4gIGNvbnN0IGN3ZCA9IGdldEN3ZCgpXG5cbiAgdHJ5IHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgZnMucmVhZGRpcihjd2QpXG4gICAgcmV0dXJuIGVudHJpZXMubWFwKGVudHJ5ID0+IHtcbiAgICAgIGNvbnN0IGZ1bGxQYXRoID0gcGF0aC5qb2luKGN3ZCwgZW50cnkubmFtZSlcbiAgICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IHBhdGgucmVsYXRpdmUoY3dkLCBmdWxsUGF0aClcbiAgICAgIC8vIEFkZCB0cmFpbGluZyBzZXBhcmF0b3IgZm9yIGRpcmVjdG9yaWVzXG4gICAgICByZXR1cm4gZW50cnkuaXNEaXJlY3RvcnkoKSA/IHJlbGF0aXZlUGF0aCArIHBhdGguc2VwIDogcmVsYXRpdmVQYXRoXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2dFcnJvcihlcnJvciBhcyBFcnJvcilcbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG4vKipcbiAqIEdlbmVyYXRlIGZpbGUgc3VnZ2VzdGlvbnMgZm9yIHRoZSBjdXJyZW50IGlucHV0IGFuZCBjdXJzb3IgcG9zaXRpb25cbiAqIEBwYXJhbSBwYXJ0aWFsUGF0aCBUaGUgcGFydGlhbCBmaWxlIHBhdGggdG8gbWF0Y2hcbiAqIEBwYXJhbSBzaG93T25FbXB0eSBXaGV0aGVyIHRvIHNob3cgc3VnZ2VzdGlvbnMgZXZlbiBpZiBwYXJ0aWFsUGF0aCBpcyBlbXB0eSAodXNlZCBmb3IgQCBzeW1ib2wpXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZUZpbGVTdWdnZXN0aW9ucyhcbiAgcGFydGlhbFBhdGg6IHN0cmluZyxcbiAgc2hvd09uRW1wdHkgPSBmYWxzZSxcbik6IFByb21pc2U8U3VnZ2VzdGlvbkl0ZW1bXT4ge1xuICAvLyBJZiBpbnB1dCBpcyBlbXB0eSBhbmQgd2UgZG9uJ3Qgd2FudCB0byBzaG93IHN1Z2dlc3Rpb25zIG9uIGVtcHR5LCByZXR1cm4gbm90aGluZ1xuICBpZiAoIXBhcnRpYWxQYXRoICYmICFzaG93T25FbXB0eSkge1xuICAgIHJldHVybiBbXVxuICB9XG5cbiAgLy8gVXNlIGN1c3RvbSBjb21tYW5kIGRpcmVjdGx5IGlmIGNvbmZpZ3VyZWQuIFdlIGRvbid0IG1peCBpbiBvdXIgY29uZmlnIGZpbGVzXG4gIC8vIGJlY2F1c2UgdGhlIGNvbW1hbmQgcmV0dXJucyBwcmUtcmFua2VkIHJlc3VsdHMgdXNpbmcgaXRzIG93biBzZWFyY2ggbG9naWMuXG4gIGlmIChnZXRJbml0aWFsU2V0dGluZ3MoKS5maWxlU3VnZ2VzdGlvbj8udHlwZSA9PT0gJ2NvbW1hbmQnKSB7XG4gICAgY29uc3QgaW5wdXQ6IEZpbGVTdWdnZXN0aW9uQ29tbWFuZElucHV0ID0ge1xuICAgICAgLi4uY3JlYXRlQmFzZUhvb2tJbnB1dCgpLFxuICAgICAgcXVlcnk6IHBhcnRpYWxQYXRoLFxuICAgIH1cbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgZXhlY3V0ZUZpbGVTdWdnZXN0aW9uQ29tbWFuZChpbnB1dClcbiAgICByZXR1cm4gcmVzdWx0cy5zbGljZSgwLCBNQVhfU1VHR0VTVElPTlMpLm1hcChjcmVhdGVGaWxlU3VnZ2VzdGlvbkl0ZW0pXG4gIH1cblxuICAvLyBJZiB0aGUgcGFydGlhbCBwYXRoIGlzIGVtcHR5IG9yIGp1c3QgYSBkb3QsIHJldHVybiBjdXJyZW50IGRpcmVjdG9yeSBzdWdnZXN0aW9uc1xuICBpZiAocGFydGlhbFBhdGggPT09ICcnIHx8IHBhcnRpYWxQYXRoID09PSAnLicgfHwgcGFydGlhbFBhdGggPT09ICcuLycpIHtcbiAgICBjb25zdCB0b3BMZXZlbFBhdGhzID0gYXdhaXQgZ2V0VG9wTGV2ZWxQYXRocygpXG4gICAgc3RhcnRCYWNrZ3JvdW5kQ2FjaGVSZWZyZXNoKClcbiAgICByZXR1cm4gdG9wTGV2ZWxQYXRocy5zbGljZSgwLCBNQVhfU1VHR0VTVElPTlMpLm1hcChjcmVhdGVGaWxlU3VnZ2VzdGlvbkl0ZW0pXG4gIH1cblxuICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpXG5cbiAgdHJ5IHtcbiAgICAvLyBLaWNrIGEgYmFja2dyb3VuZCByZWZyZXNoLiBUaGUgaW5kZXggaXMgcHJvZ3Jlc3NpdmVseSBxdWVyeWFibGUgXHUyMDE0XG4gICAgLy8gc2VhcmNoZXMgZHVyaW5nIGJ1aWxkIHJldHVybiBwYXJ0aWFsIHJlc3VsdHMgZnJvbSByZWFkeSBjaHVua3MsIGFuZFxuICAgIC8vIHRoZSB0eXBlYWhlYWQgY2FsbGJhY2sgKHNldE9uSW5kZXhCdWlsZENvbXBsZXRlKSByZS1maXJlcyB0aGUgc2VhcmNoXG4gICAgLy8gd2hlbiB0aGUgYnVpbGQgZmluaXNoZXMgdG8gdXBncmFkZSBwYXJ0aWFsIFx1MjE5MiBmdWxsLlxuICAgIGNvbnN0IHdhc0J1aWxkaW5nID0gZmlsZUxpc3RSZWZyZXNoUHJvbWlzZSAhPT0gbnVsbFxuICAgIHN0YXJ0QmFja2dyb3VuZENhY2hlUmVmcmVzaCgpXG5cbiAgICAvLyBIYW5kbGUgYm90aCAnLi8nIGFuZCAnLlxcJ1xuICAgIGxldCBub3JtYWxpemVkUGF0aCA9IHBhcnRpYWxQYXRoXG4gICAgY29uc3QgY3VycmVudERpclByZWZpeCA9ICcuJyArIHBhdGguc2VwXG4gICAgaWYgKHBhcnRpYWxQYXRoLnN0YXJ0c1dpdGgoY3VycmVudERpclByZWZpeCkpIHtcbiAgICAgIG5vcm1hbGl6ZWRQYXRoID0gcGFydGlhbFBhdGguc3Vic3RyaW5nKDIpXG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHRpbGRlIGV4cGFuc2lvbiBmb3IgaG9tZSBkaXJlY3RvcnlcbiAgICBpZiAobm9ybWFsaXplZFBhdGguc3RhcnRzV2l0aCgnficpKSB7XG4gICAgICBub3JtYWxpemVkUGF0aCA9IGV4cGFuZFBhdGgobm9ybWFsaXplZFBhdGgpXG4gICAgfVxuXG4gICAgY29uc3QgbWF0Y2hlcyA9IGZpbGVJbmRleFxuICAgICAgPyBmaW5kTWF0Y2hpbmdGaWxlcyhmaWxlSW5kZXgsIG5vcm1hbGl6ZWRQYXRoKVxuICAgICAgOiBbXVxuXG4gICAgY29uc3QgZHVyYXRpb24gPSBEYXRlLm5vdygpIC0gc3RhcnRUaW1lXG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFtGaWxlSW5kZXhdIGdlbmVyYXRlRmlsZVN1Z2dlc3Rpb25zOiAke21hdGNoZXMubGVuZ3RofSByZXN1bHRzIGluICR7ZHVyYXRpb259bXMgKCR7d2FzQnVpbGRpbmcgPyAncGFydGlhbCcgOiAnZnVsbCd9IGluZGV4KWAsXG4gICAgKVxuICAgIGxvZ0V2ZW50KCd0ZW5ndV9maWxlX3N1Z2dlc3Rpb25zX3F1ZXJ5Jywge1xuICAgICAgZHVyYXRpb25fbXM6IGR1cmF0aW9uLFxuICAgICAgY2FjaGVfaGl0OiAhd2FzQnVpbGRpbmcsXG4gICAgICByZXN1bHRfY291bnQ6IG1hdGNoZXMubGVuZ3RoLFxuICAgICAgcXVlcnlfbGVuZ3RoOiBwYXJ0aWFsUGF0aC5sZW5ndGgsXG4gICAgfSlcblxuICAgIHJldHVybiBtYXRjaGVzXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nRXJyb3IoZXJyb3IpXG4gICAgcmV0dXJuIFtdXG4gIH1cbn1cblxuLyoqXG4gKiBBcHBseSBhIGZpbGUgc3VnZ2VzdGlvbiB0byB0aGUgaW5wdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5RmlsZVN1Z2dlc3Rpb24oXG4gIHN1Z2dlc3Rpb246IHN0cmluZyB8IFN1Z2dlc3Rpb25JdGVtLFxuICBpbnB1dDogc3RyaW5nLFxuICBwYXJ0aWFsUGF0aDogc3RyaW5nLFxuICBzdGFydFBvczogbnVtYmVyLFxuICBvbklucHV0Q2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCxcbiAgc2V0Q3Vyc29yT2Zmc2V0OiAob2Zmc2V0OiBudW1iZXIpID0+IHZvaWQsXG4pOiB2b2lkIHtcbiAgLy8gRXh0cmFjdCBzdWdnZXN0aW9uIHRleHQgZnJvbSBzdHJpbmcgb3IgU3VnZ2VzdGlvbkl0ZW1cbiAgY29uc3Qgc3VnZ2VzdGlvblRleHQgPVxuICAgIHR5cGVvZiBzdWdnZXN0aW9uID09PSAnc3RyaW5nJyA/IHN1Z2dlc3Rpb24gOiBzdWdnZXN0aW9uLmRpc3BsYXlUZXh0XG5cbiAgLy8gUmVwbGFjZSB0aGUgcGFydGlhbCBwYXRoIHdpdGggdGhlIHNlbGVjdGVkIGZpbGUgcGF0aFxuICBjb25zdCBuZXdJbnB1dCA9XG4gICAgaW5wdXQuc3Vic3RyaW5nKDAsIHN0YXJ0UG9zKSArXG4gICAgc3VnZ2VzdGlvblRleHQgK1xuICAgIGlucHV0LnN1YnN0cmluZyhzdGFydFBvcyArIHBhcnRpYWxQYXRoLmxlbmd0aClcbiAgb25JbnB1dENoYW5nZShuZXdJbnB1dClcblxuICAvLyBNb3ZlIGN1cnNvciB0byBlbmQgb2YgdGhlIGZpbGUgcGF0aFxuICBjb25zdCBuZXdDdXJzb3JQb3MgPSBzdGFydFBvcyArIHN1Z2dlc3Rpb25UZXh0Lmxlbmd0aFxuICBzZXRDdXJzb3JPZmZzZXQobmV3Q3Vyc29yUG9zKVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd1NBLFNBQVMsYUFBYUEsT0FBYyxLQUFhLE9BQXdCO0FBQ3ZFLE1BQUksUUFBUSxFQUFHLFFBQU8sUUFBUSxtQkFBbUI7QUFDakQsUUFBTSxTQUFTQSxNQUFLLFdBQVcsTUFBTSxDQUFDO0FBQ3RDLE1BQUksV0FBVyxNQUFNLEVBQUcsUUFBTztBQUMvQixNQUFJLFFBQVEsTUFBTSxLQUFLLFFBQVFBLE1BQUssV0FBVyxHQUFHLENBQUMsRUFBRyxRQUFPO0FBQzdELFNBQU87QUFDVDtBQUVBLFNBQVMsV0FBVyxNQUF1QjtBQUV6QyxTQUNFLFNBQVM7QUFBQSxFQUNULFNBQVM7QUFBQSxFQUNULFNBQVM7QUFBQSxFQUNULFNBQVM7QUFBQSxFQUNULFNBQVM7QUFBQSxFQUNULFNBQVM7QUFFYjtBQUVBLFNBQVMsUUFBUSxNQUF1QjtBQUN0QyxTQUFPLFFBQVEsTUFBTSxRQUFRO0FBQy9CO0FBRUEsU0FBUyxRQUFRLE1BQXVCO0FBQ3RDLFNBQU8sUUFBUSxNQUFNLFFBQVE7QUFDL0I7QUFFTyxTQUFTLG1CQUFrQztBQUNoRCxTQUFPLElBQUksUUFBUSxhQUFXLGFBQWEsT0FBTyxDQUFDO0FBQ3JEO0FBU0EsU0FBUyx1QkFDUCxPQUNBLE9BQ2dCO0FBQ2hCLFFBQU0sV0FBVyxvQkFBSSxJQUFZO0FBRWpDLGFBQVcsS0FBSyxPQUFPO0FBRXJCLFFBQUksTUFBTSxFQUFFO0FBQ1osYUFBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsS0FBSztBQUNqQyxZQUFNLElBQUksRUFBRSxXQUFXLENBQUM7QUFDeEIsVUFBSSxNQUFNLE1BQU0sTUFBTSxJQUFJO0FBQ3hCLGNBQU07QUFDTjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQ0EsVUFBTSxVQUFV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
