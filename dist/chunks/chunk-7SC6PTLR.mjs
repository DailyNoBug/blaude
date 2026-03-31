#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_memoize as init_memoize2,
  memoizeWithLRU
} from "./chunk-NT7W7YWD.mjs";
import {
  execFileNoThrow,
  init_execFileNoThrow
} from "./chunk-VNIROYYL.mjs";
import {
  getCwd,
  init_cwd
} from "./chunk-TZFTPSMG.mjs";
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import {
  init_which,
  whichSync
} from "./chunk-IPMELYAB.mjs";
import {
  getFsImplementation,
  init_cleanupRegistry,
  init_debug,
  init_fsOperations,
  init_slowOperations,
  jsonStringify,
  logForDebugging,
  registerCleanup
} from "./chunk-L2VTD674.mjs";
import {
  init_state,
  waitForScrollIdle
} from "./chunk-NGSB34MB.mjs";
import {
  init_memoize,
  memoize_default
} from "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/constants/files.ts
function hasBinaryExtension(filePath) {
  const ext = filePath.slice(filePath.lastIndexOf(".")).toLowerCase();
  return BINARY_EXTENSIONS.has(ext);
}
function isBinaryContent(buffer) {
  const checkSize = Math.min(buffer.length, BINARY_CHECK_SIZE);
  let nonPrintable = 0;
  for (let i = 0; i < checkSize; i++) {
    const byte = buffer[i];
    if (byte === 0) {
      return true;
    }
    if (byte < 32 && byte !== 9 && // tab
    byte !== 10 && // newline
    byte !== 13) {
      nonPrintable++;
    }
  }
  return nonPrintable / checkSize > 0.1;
}
var BINARY_EXTENSIONS, BINARY_CHECK_SIZE;
var init_files = __esm({
  "src/constants/files.ts"() {
    BINARY_EXTENSIONS = /* @__PURE__ */ new Set([
      // Images
      ".png",
      ".jpg",
      ".jpeg",
      ".gif",
      ".bmp",
      ".ico",
      ".webp",
      ".tiff",
      ".tif",
      // Videos
      ".mp4",
      ".mov",
      ".avi",
      ".mkv",
      ".webm",
      ".wmv",
      ".flv",
      ".m4v",
      ".mpeg",
      ".mpg",
      // Audio
      ".mp3",
      ".wav",
      ".ogg",
      ".flac",
      ".aac",
      ".m4a",
      ".wma",
      ".aiff",
      ".opus",
      // Archives
      ".zip",
      ".tar",
      ".gz",
      ".bz2",
      ".7z",
      ".rar",
      ".xz",
      ".z",
      ".tgz",
      ".iso",
      // Executables/binaries
      ".exe",
      ".dll",
      ".so",
      ".dylib",
      ".bin",
      ".o",
      ".a",
      ".obj",
      ".lib",
      ".app",
      ".msi",
      ".deb",
      ".rpm",
      // Documents (PDF is here; FileReadTool excludes it at the call site)
      ".pdf",
      ".doc",
      ".docx",
      ".xls",
      ".xlsx",
      ".ppt",
      ".pptx",
      ".odt",
      ".ods",
      ".odp",
      // Fonts
      ".ttf",
      ".otf",
      ".woff",
      ".woff2",
      ".eot",
      // Bytecode / VM artifacts
      ".pyc",
      ".pyo",
      ".class",
      ".jar",
      ".war",
      ".ear",
      ".node",
      ".wasm",
      ".rlib",
      // Database files
      ".sqlite",
      ".sqlite3",
      ".db",
      ".mdb",
      ".idx",
      // Design / 3D
      ".psd",
      ".ai",
      ".eps",
      ".sketch",
      ".fig",
      ".xd",
      ".blend",
      ".3ds",
      ".max",
      // Flash
      ".swf",
      ".fla",
      // Lock/profiling data
      ".lockb",
      ".dat",
      ".data"
    ]);
    BINARY_CHECK_SIZE = 8192;
  }
});

// src/utils/diagLogs.ts
import { dirname } from "path";
function logForDiagnosticsNoPII(level, event, data) {
  const logFile = getDiagnosticLogFile();
  if (!logFile) {
    return;
  }
  const entry = {
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level,
    event,
    data: data ?? {}
  };
  const fs = getFsImplementation();
  const line = jsonStringify(entry) + "\n";
  try {
    fs.appendFileSync(logFile, line);
  } catch {
    try {
      fs.mkdirSync(dirname(logFile));
      fs.appendFileSync(logFile, line);
    } catch {
    }
  }
}
function getDiagnosticLogFile() {
  return process.env.CLAUDE_CODE_DIAGNOSTICS_FILE;
}
async function withDiagnosticsTiming(event, fn, getData) {
  const startTime = Date.now();
  logForDiagnosticsNoPII("info", `${event}_started`);
  try {
    const result = await fn();
    const additionalData = getData ? getData(result) : {};
    logForDiagnosticsNoPII("info", `${event}_completed`, {
      duration_ms: Date.now() - startTime,
      ...additionalData
    });
    return result;
  } catch (error) {
    logForDiagnosticsNoPII("error", `${event}_failed`, {
      duration_ms: Date.now() - startTime
    });
    throw error;
  }
}
var init_diagLogs = __esm({
  "src/utils/diagLogs.ts"() {
    init_fsOperations();
    init_slowOperations();
  }
});

// src/utils/git/gitConfigParser.ts
import { readFile } from "fs/promises";
import { join } from "path";
async function parseGitConfigValue(gitDir, section, subsection, key) {
  try {
    const config = await readFile(join(gitDir, "config"), "utf-8");
    return parseConfigString(config, section, subsection, key);
  } catch {
    return null;
  }
}
function parseConfigString(config, section, subsection, key) {
  const lines = config.split("\n");
  const sectionLower = section.toLowerCase();
  const keyLower = key.toLowerCase();
  let inSection = false;
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.length === 0 || trimmed[0] === "#" || trimmed[0] === ";") {
      continue;
    }
    if (trimmed[0] === "[") {
      inSection = matchesSectionHeader(trimmed, sectionLower, subsection);
      continue;
    }
    if (!inSection) {
      continue;
    }
    const parsed = parseKeyValue(trimmed);
    if (parsed && parsed.key.toLowerCase() === keyLower) {
      return parsed.value;
    }
  }
  return null;
}
function parseKeyValue(line) {
  let i = 0;
  while (i < line.length && isKeyChar(line[i])) {
    i++;
  }
  if (i === 0) {
    return null;
  }
  const key = line.slice(0, i);
  while (i < line.length && (line[i] === " " || line[i] === "	")) {
    i++;
  }
  if (i >= line.length || line[i] !== "=") {
    return null;
  }
  i++;
  while (i < line.length && (line[i] === " " || line[i] === "	")) {
    i++;
  }
  const value = parseValue(line, i);
  return { key, value };
}
function parseValue(line, start) {
  let result = "";
  let inQuote = false;
  let i = start;
  while (i < line.length) {
    const ch = line[i];
    if (!inQuote && (ch === "#" || ch === ";")) {
      break;
    }
    if (ch === '"') {
      inQuote = !inQuote;
      i++;
      continue;
    }
    if (ch === "\\" && i + 1 < line.length) {
      const next = line[i + 1];
      if (inQuote) {
        switch (next) {
          case "n":
            result += "\n";
            break;
          case "t":
            result += "	";
            break;
          case "b":
            result += "\b";
            break;
          case '"':
            result += '"';
            break;
          case "\\":
            result += "\\";
            break;
          default:
            result += next;
            break;
        }
        i += 2;
        continue;
      }
      if (next === "\\") {
        result += "\\";
        i += 2;
        continue;
      }
    }
    result += ch;
    i++;
  }
  if (!inQuote) {
    result = trimTrailingWhitespace(result);
  }
  return result;
}
function trimTrailingWhitespace(s) {
  let end = s.length;
  while (end > 0 && (s[end - 1] === " " || s[end - 1] === "	")) {
    end--;
  }
  return s.slice(0, end);
}
function matchesSectionHeader(line, sectionLower, subsection) {
  let i = 1;
  while (i < line.length && line[i] !== "]" && line[i] !== " " && line[i] !== "	" && line[i] !== '"') {
    i++;
  }
  const foundSection = line.slice(1, i).toLowerCase();
  if (foundSection !== sectionLower) {
    return false;
  }
  if (subsection === null) {
    return i < line.length && line[i] === "]";
  }
  while (i < line.length && (line[i] === " " || line[i] === "	")) {
    i++;
  }
  if (i >= line.length || line[i] !== '"') {
    return false;
  }
  i++;
  let foundSubsection = "";
  while (i < line.length && line[i] !== '"') {
    if (line[i] === "\\" && i + 1 < line.length) {
      const next = line[i + 1];
      if (next === "\\" || next === '"') {
        foundSubsection += next;
        i += 2;
        continue;
      }
      foundSubsection += next;
      i += 2;
      continue;
    }
    foundSubsection += line[i];
    i++;
  }
  if (i >= line.length || line[i] !== '"') {
    return false;
  }
  i++;
  if (i >= line.length || line[i] !== "]") {
    return false;
  }
  return foundSubsection === subsection;
}
function isKeyChar(ch) {
  return ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z" || ch >= "0" && ch <= "9" || ch === "-";
}
var init_gitConfigParser = __esm({
  "src/utils/git/gitConfigParser.ts"() {
  }
});

// src/utils/git/gitFilesystem.ts
import { unwatchFile, watchFile } from "fs";
import { readdir, readFile as readFile2, stat } from "fs/promises";
import { join as join2, resolve } from "path";
function clearResolveGitDirCache() {
  resolveGitDirCache.clear();
}
async function resolveGitDir(startPath) {
  const cwd = resolve(startPath ?? getCwd());
  const cached = resolveGitDirCache.get(cwd);
  if (cached !== void 0) {
    return cached;
  }
  const root = findGitRoot(cwd);
  if (!root) {
    resolveGitDirCache.set(cwd, null);
    return null;
  }
  const gitPath = join2(root, ".git");
  try {
    const st = await stat(gitPath);
    if (st.isFile()) {
      const content = (await readFile2(gitPath, "utf-8")).trim();
      if (content.startsWith("gitdir:")) {
        const rawDir = content.slice("gitdir:".length).trim();
        const resolved = resolve(root, rawDir);
        resolveGitDirCache.set(cwd, resolved);
        return resolved;
      }
    }
    resolveGitDirCache.set(cwd, gitPath);
    return gitPath;
  } catch {
    resolveGitDirCache.set(cwd, null);
    return null;
  }
}
function isSafeRefName(name) {
  if (!name || name.startsWith("-") || name.startsWith("/")) {
    return false;
  }
  if (name.includes("..")) {
    return false;
  }
  if (name.split("/").some((c) => c === "." || c === "")) {
    return false;
  }
  if (!/^[a-zA-Z0-9/._+@-]+$/.test(name)) {
    return false;
  }
  return true;
}
function isValidGitSha(s) {
  return /^[0-9a-f]{40}$/.test(s) || /^[0-9a-f]{64}$/.test(s);
}
async function readGitHead(gitDir) {
  try {
    const content = (await readFile2(join2(gitDir, "HEAD"), "utf-8")).trim();
    if (content.startsWith("ref:")) {
      const ref = content.slice("ref:".length).trim();
      if (ref.startsWith("refs/heads/")) {
        const name = ref.slice("refs/heads/".length);
        if (!isSafeRefName(name)) {
          return null;
        }
        return { type: "branch", name };
      }
      if (!isSafeRefName(ref)) {
        return null;
      }
      const sha = await resolveRef(gitDir, ref);
      return sha ? { type: "detached", sha } : { type: "detached", sha: "" };
    }
    if (!isValidGitSha(content)) {
      return null;
    }
    return { type: "detached", sha: content };
  } catch {
    return null;
  }
}
async function resolveRef(gitDir, ref) {
  const result = await resolveRefInDir(gitDir, ref);
  if (result) {
    return result;
  }
  const commonDir = await getCommonDir(gitDir);
  if (commonDir && commonDir !== gitDir) {
    return resolveRefInDir(commonDir, ref);
  }
  return null;
}
async function resolveRefInDir(dir, ref) {
  try {
    const content = (await readFile2(join2(dir, ref), "utf-8")).trim();
    if (content.startsWith("ref:")) {
      const target = content.slice("ref:".length).trim();
      if (!isSafeRefName(target)) {
        return null;
      }
      return resolveRef(dir, target);
    }
    if (!isValidGitSha(content)) {
      return null;
    }
    return content;
  } catch {
  }
  try {
    const packed = await readFile2(join2(dir, "packed-refs"), "utf-8");
    for (const line of packed.split("\n")) {
      if (line.startsWith("#") || line.startsWith("^")) {
        continue;
      }
      const spaceIdx = line.indexOf(" ");
      if (spaceIdx === -1) {
        continue;
      }
      if (line.slice(spaceIdx + 1) === ref) {
        const sha = line.slice(0, spaceIdx);
        return isValidGitSha(sha) ? sha : null;
      }
    }
  } catch {
  }
  return null;
}
async function getCommonDir(gitDir) {
  try {
    const content = (await readFile2(join2(gitDir, "commondir"), "utf-8")).trim();
    return resolve(gitDir, content);
  } catch {
    return null;
  }
}
async function readRawSymref(gitDir, refPath, branchPrefix) {
  try {
    const content = (await readFile2(join2(gitDir, refPath), "utf-8")).trim();
    if (content.startsWith("ref:")) {
      const target = content.slice("ref:".length).trim();
      if (target.startsWith(branchPrefix)) {
        const name = target.slice(branchPrefix.length);
        if (!isSafeRefName(name)) {
          return null;
        }
        return name;
      }
    }
  } catch {
  }
  return null;
}
async function computeBranch() {
  const gitDir = await resolveGitDir();
  if (!gitDir) {
    return "HEAD";
  }
  const head = await readGitHead(gitDir);
  if (!head) {
    return "HEAD";
  }
  return head.type === "branch" ? head.name : "HEAD";
}
async function computeHead() {
  const gitDir = await resolveGitDir();
  if (!gitDir) {
    return "";
  }
  const head = await readGitHead(gitDir);
  if (!head) {
    return "";
  }
  if (head.type === "branch") {
    return await resolveRef(gitDir, `refs/heads/${head.name}`) ?? "";
  }
  return head.sha;
}
async function computeRemoteUrl() {
  const gitDir = await resolveGitDir();
  if (!gitDir) {
    return null;
  }
  const url = await parseGitConfigValue(gitDir, "remote", "origin", "url");
  if (url) {
    return url;
  }
  const commonDir = await getCommonDir(gitDir);
  if (commonDir && commonDir !== gitDir) {
    return parseGitConfigValue(commonDir, "remote", "origin", "url");
  }
  return null;
}
async function computeDefaultBranch() {
  const gitDir = await resolveGitDir();
  if (!gitDir) {
    return "main";
  }
  const commonDir = await getCommonDir(gitDir) ?? gitDir;
  const branchFromSymref = await readRawSymref(
    commonDir,
    "refs/remotes/origin/HEAD",
    "refs/remotes/origin/"
  );
  if (branchFromSymref) {
    return branchFromSymref;
  }
  for (const candidate of ["main", "master"]) {
    const sha = await resolveRef(commonDir, `refs/remotes/origin/${candidate}`);
    if (sha) {
      return candidate;
    }
  }
  return "main";
}
function getCachedBranch() {
  return gitWatcher.get("branch", computeBranch);
}
function getCachedHead() {
  return gitWatcher.get("head", computeHead);
}
function getCachedRemoteUrl() {
  return gitWatcher.get("remoteUrl", computeRemoteUrl);
}
function getCachedDefaultBranch() {
  return gitWatcher.get("defaultBranch", computeDefaultBranch);
}
async function getHeadForDir(cwd) {
  const gitDir = await resolveGitDir(cwd);
  if (!gitDir) {
    return null;
  }
  const head = await readGitHead(gitDir);
  if (!head) {
    return null;
  }
  if (head.type === "branch") {
    return resolveRef(gitDir, `refs/heads/${head.name}`);
  }
  return head.sha;
}
async function readWorktreeHeadSha(worktreePath) {
  let gitDir;
  try {
    const ptr = (await readFile2(join2(worktreePath, ".git"), "utf-8")).trim();
    if (!ptr.startsWith("gitdir:")) {
      return null;
    }
    gitDir = resolve(worktreePath, ptr.slice("gitdir:".length).trim());
  } catch {
    return null;
  }
  const head = await readGitHead(gitDir);
  if (!head) {
    return null;
  }
  if (head.type === "branch") {
    return resolveRef(gitDir, `refs/heads/${head.name}`);
  }
  return head.sha;
}
async function getRemoteUrlForDir(cwd) {
  const gitDir = await resolveGitDir(cwd);
  if (!gitDir) {
    return null;
  }
  const url = await parseGitConfigValue(gitDir, "remote", "origin", "url");
  if (url) {
    return url;
  }
  const commonDir = await getCommonDir(gitDir);
  if (commonDir && commonDir !== gitDir) {
    return parseGitConfigValue(commonDir, "remote", "origin", "url");
  }
  return null;
}
async function isShallowClone() {
  const gitDir = await resolveGitDir();
  if (!gitDir) {
    return false;
  }
  const commonDir = await getCommonDir(gitDir) ?? gitDir;
  try {
    await stat(join2(commonDir, "shallow"));
    return true;
  } catch {
    return false;
  }
}
async function getWorktreeCountFromFs() {
  try {
    const gitDir = await resolveGitDir();
    if (!gitDir) {
      return 0;
    }
    const commonDir = await getCommonDir(gitDir) ?? gitDir;
    const entries = await readdir(join2(commonDir, "worktrees"));
    return entries.length + 1;
  } catch {
    return 1;
  }
}
var resolveGitDirCache, WATCH_INTERVAL_MS, GitFileWatcher, gitWatcher;
var init_gitFilesystem = __esm({
  "src/utils/git/gitFilesystem.ts"() {
    init_state();
    init_cleanupRegistry();
    init_cwd();
    init_git();
    init_gitConfigParser();
    resolveGitDirCache = /* @__PURE__ */ new Map();
    WATCH_INTERVAL_MS = process.env.NODE_ENV === "test" ? 10 : 1e3;
    GitFileWatcher = class {
      gitDir = null;
      commonDir = null;
      initialized = false;
      initPromise = null;
      watchedPaths = [];
      branchRefPath = null;
      cache = /* @__PURE__ */ new Map();
      async ensureStarted() {
        if (this.initialized) {
          return;
        }
        if (this.initPromise) {
          return this.initPromise;
        }
        this.initPromise = this.start();
        return this.initPromise;
      }
      async start() {
        this.gitDir = await resolveGitDir();
        this.initialized = true;
        if (!this.gitDir) {
          return;
        }
        this.commonDir = await getCommonDir(this.gitDir);
        this.watchPath(join2(this.gitDir, "HEAD"), () => {
          void this.onHeadChanged();
        });
        this.watchPath(join2(this.commonDir ?? this.gitDir, "config"), () => {
          this.invalidate();
        });
        await this.watchCurrentBranchRef();
        registerCleanup(async () => {
          this.stopWatching();
        });
      }
      watchPath(path, callback) {
        this.watchedPaths.push(path);
        watchFile(path, { interval: WATCH_INTERVAL_MS }, callback);
      }
      /**
       * Watch the loose ref file for the current branch.
       * Called on startup and whenever HEAD changes (branch switch).
       */
      async watchCurrentBranchRef() {
        if (!this.gitDir) {
          return;
        }
        const head = await readGitHead(this.gitDir);
        const refsDir = this.commonDir ?? this.gitDir;
        const refPath = head?.type === "branch" ? join2(refsDir, "refs", "heads", head.name) : null;
        if (refPath === this.branchRefPath) {
          return;
        }
        if (this.branchRefPath) {
          unwatchFile(this.branchRefPath);
          this.watchedPaths = this.watchedPaths.filter(
            (p) => p !== this.branchRefPath
          );
        }
        this.branchRefPath = refPath;
        if (!refPath) {
          return;
        }
        this.watchPath(refPath, () => {
          this.invalidate();
        });
      }
      async onHeadChanged() {
        this.invalidate();
        await waitForScrollIdle();
        await this.watchCurrentBranchRef();
      }
      invalidate() {
        for (const entry of this.cache.values()) {
          entry.dirty = true;
        }
      }
      stopWatching() {
        for (const path of this.watchedPaths) {
          unwatchFile(path);
        }
        this.watchedPaths = [];
        this.branchRefPath = null;
      }
      /**
       * Get a cached value by key. On first call for a key, computes and caches it.
       * Subsequent calls return the cached value until a watched file changes,
       * which marks the entry dirty. The next get() re-computes from disk.
       *
       * Race condition handling: dirty is cleared BEFORE the async compute starts.
       * If a file change arrives during compute, it re-sets dirty, so the next
       * get() will re-read again rather than serving a stale value.
       */
      async get(key, compute) {
        await this.ensureStarted();
        const existing = this.cache.get(key);
        if (existing && !existing.dirty) {
          return existing.value;
        }
        if (existing) {
          existing.dirty = false;
        }
        const value = await compute();
        const entry = this.cache.get(key);
        if (entry && !entry.dirty) {
          entry.value = value;
        }
        if (!entry) {
          this.cache.set(key, { value, dirty: false, compute });
        }
        return value;
      }
      /** Reset all state. Stops file watchers. For testing only. */
      reset() {
        this.stopWatching();
        this.cache.clear();
        this.initialized = false;
        this.initPromise = null;
        this.gitDir = null;
        this.commonDir = null;
      }
    };
    gitWatcher = new GitFileWatcher();
  }
});

// src/utils/git.ts
import { createHash } from "crypto";
import { readFileSync, realpathSync, statSync } from "fs";
import { open, readFile as readFile3, realpath, stat as stat2 } from "fs/promises";
import { basename, dirname as dirname2, join as join3, resolve as resolve2, sep } from "path";
function createFindGitRoot() {
  function wrapper(startPath) {
    const result = findGitRootImpl(startPath);
    return result === GIT_ROOT_NOT_FOUND ? null : result;
  }
  wrapper.cache = findGitRootImpl.cache;
  return wrapper;
}
function createFindCanonicalGitRoot() {
  function wrapper(startPath) {
    const root = findGitRoot(startPath);
    if (!root) {
      return null;
    }
    return resolveCanonicalRoot(root);
  }
  wrapper.cache = resolveCanonicalRoot.cache;
  return wrapper;
}
function getGitDir(cwd) {
  return resolveGitDir(cwd);
}
async function isAtGitRoot() {
  const cwd = getCwd();
  const gitRoot = findGitRoot(cwd);
  if (!gitRoot) {
    return false;
  }
  try {
    const [resolvedCwd, resolvedGitRoot] = await Promise.all([
      realpath(cwd),
      realpath(gitRoot)
    ]);
    return resolvedCwd === resolvedGitRoot;
  } catch {
    return cwd === gitRoot;
  }
}
function normalizeGitRemoteUrl(url) {
  const trimmed = url.trim();
  if (!trimmed) return null;
  const sshMatch = trimmed.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
  if (sshMatch && sshMatch[1] && sshMatch[2]) {
    return `${sshMatch[1]}/${sshMatch[2]}`.toLowerCase();
  }
  const urlMatch = trimmed.match(
    /^(?:https?|ssh):\/\/(?:[^@]+@)?([^/]+)\/(.+?)(?:\.git)?$/
  );
  if (urlMatch && urlMatch[1] && urlMatch[2]) {
    const host = urlMatch[1];
    const path = urlMatch[2];
    if (isLocalHost(host) && path.startsWith("git/")) {
      const proxyPath = path.slice(4);
      const segments = proxyPath.split("/");
      if (segments.length >= 3 && segments[0].includes(".")) {
        return proxyPath.toLowerCase();
      }
      return `github.com/${proxyPath}`.toLowerCase();
    }
    return `${host}/${path}`.toLowerCase();
  }
  return null;
}
async function getRepoRemoteHash() {
  const remoteUrl = await getRemoteUrl();
  if (!remoteUrl) return null;
  const normalized = normalizeGitRemoteUrl(remoteUrl);
  if (!normalized) return null;
  const hash = createHash("sha256").update(normalized).digest("hex");
  return hash.substring(0, 16);
}
async function getGitState() {
  try {
    const [
      commitHash,
      branchName,
      remoteUrl,
      isHeadOnRemote,
      isClean,
      worktreeCount
    ] = await Promise.all([
      getHead(),
      getBranch(),
      getRemoteUrl(),
      getIsHeadOnRemote(),
      getIsClean(),
      getWorktreeCount()
    ]);
    return {
      commitHash,
      branchName,
      remoteUrl,
      isHeadOnRemote,
      isClean,
      worktreeCount
    };
  } catch (_) {
    return null;
  }
}
async function getGithubRepo() {
  const { parseGitRemote } = await import("./detectRepository-6HDSAE4F.mjs");
  const remoteUrl = await getRemoteUrl();
  if (!remoteUrl) {
    logForDebugging("Local GitHub repo: unknown");
    return null;
  }
  const parsed = parseGitRemote(remoteUrl);
  if (parsed && parsed.host === "github.com") {
    const result = `${parsed.owner}/${parsed.name}`;
    logForDebugging(`Local GitHub repo: ${result}`);
    return result;
  }
  logForDebugging("Local GitHub repo: unknown");
  return null;
}
async function findRemoteBase() {
  const { stdout: trackingBranch, code: trackingCode } = await execFileNoThrow(
    gitExe(),
    ["rev-parse", "--abbrev-ref", "--symbolic-full-name", "@{u}"],
    { preserveOutputOnError: false }
  );
  if (trackingCode === 0 && trackingBranch.trim()) {
    return trackingBranch.trim();
  }
  const { stdout: remoteRefs, code: remoteCode } = await execFileNoThrow(
    gitExe(),
    ["remote", "show", "origin", "--", "HEAD"],
    { preserveOutputOnError: false }
  );
  if (remoteCode === 0) {
    const match = remoteRefs.match(/HEAD branch: (\S+)/);
    if (match && match[1]) {
      return `origin/${match[1]}`;
    }
  }
  const candidates = ["origin/main", "origin/staging", "origin/master"];
  for (const candidate of candidates) {
    const { code } = await execFileNoThrow(
      gitExe(),
      ["rev-parse", "--verify", candidate],
      { preserveOutputOnError: false }
    );
    if (code === 0) {
      return candidate;
    }
  }
  return null;
}
function isShallowClone2() {
  return isShallowClone();
}
async function captureUntrackedFiles() {
  const { stdout, code } = await execFileNoThrow(
    gitExe(),
    ["ls-files", "--others", "--exclude-standard"],
    { preserveOutputOnError: false }
  );
  const trimmed = stdout.trim();
  if (code !== 0 || !trimmed) {
    return [];
  }
  const files = trimmed.split("\n").filter(Boolean);
  const result = [];
  let totalSize = 0;
  for (const filePath of files) {
    if (result.length >= MAX_FILE_COUNT) {
      logForDebugging(
        `Untracked file capture: reached max file count (${MAX_FILE_COUNT})`
      );
      break;
    }
    if (hasBinaryExtension(filePath)) {
      continue;
    }
    try {
      const stats = await stat2(filePath);
      const fileSize = stats.size;
      if (fileSize > MAX_FILE_SIZE_BYTES) {
        logForDebugging(
          `Untracked file capture: skipping ${filePath} (exceeds ${MAX_FILE_SIZE_BYTES} bytes)`
        );
        continue;
      }
      if (totalSize + fileSize > MAX_TOTAL_SIZE_BYTES) {
        logForDebugging(
          `Untracked file capture: reached total size limit (${MAX_TOTAL_SIZE_BYTES} bytes)`
        );
        break;
      }
      if (fileSize === 0) {
        result.push({ path: filePath, content: "" });
        continue;
      }
      const sniffSize = Math.min(SNIFF_BUFFER_SIZE, fileSize);
      const fd = await open(filePath, "r");
      try {
        const sniffBuf = Buffer.alloc(sniffSize);
        const { bytesRead } = await fd.read(sniffBuf, 0, sniffSize, 0);
        const sniff = sniffBuf.subarray(0, bytesRead);
        if (isBinaryContent(sniff)) {
          continue;
        }
        let content;
        if (fileSize <= sniffSize) {
          content = sniff.toString("utf-8");
        } else {
          content = await readFile3(filePath, "utf-8");
        }
        result.push({ path: filePath, content });
        totalSize += fileSize;
      } finally {
        await fd.close();
      }
    } catch (err) {
      logForDebugging(`Failed to read untracked file ${filePath}: ${err}`);
    }
  }
  return result;
}
async function preserveGitStateForIssue() {
  try {
    const isGit = await getIsGit();
    if (!isGit) {
      return null;
    }
    if (await isShallowClone2()) {
      logForDebugging("Shallow clone detected, using HEAD-only mode for issue");
      const [{ stdout: patch2 }, untrackedFiles2] = await Promise.all([
        execFileNoThrow(gitExe(), ["diff", "HEAD"]),
        captureUntrackedFiles()
      ]);
      return {
        remote_base_sha: null,
        remote_base: null,
        patch: patch2 || "",
        untracked_files: untrackedFiles2,
        format_patch: null,
        head_sha: null,
        branch_name: null
      };
    }
    const remoteBase = await findRemoteBase();
    if (!remoteBase) {
      logForDebugging("No remote found, using HEAD-only mode for issue");
      const [{ stdout: patch2 }, untrackedFiles2] = await Promise.all([
        execFileNoThrow(gitExe(), ["diff", "HEAD"]),
        captureUntrackedFiles()
      ]);
      return {
        remote_base_sha: null,
        remote_base: null,
        patch: patch2 || "",
        untracked_files: untrackedFiles2,
        format_patch: null,
        head_sha: null,
        branch_name: null
      };
    }
    const { stdout: mergeBase, code: mergeBaseCode } = await execFileNoThrow(
      gitExe(),
      ["merge-base", "HEAD", remoteBase],
      { preserveOutputOnError: false }
    );
    if (mergeBaseCode !== 0 || !mergeBase.trim()) {
      logForDebugging("Merge-base failed, using HEAD-only mode for issue");
      const [{ stdout: patch2 }, untrackedFiles2] = await Promise.all([
        execFileNoThrow(gitExe(), ["diff", "HEAD"]),
        captureUntrackedFiles()
      ]);
      return {
        remote_base_sha: null,
        remote_base: null,
        patch: patch2 || "",
        untracked_files: untrackedFiles2,
        format_patch: null,
        head_sha: null,
        branch_name: null
      };
    }
    const remoteBaseSha = mergeBase.trim();
    const [
      { stdout: patch },
      untrackedFiles,
      { stdout: formatPatchOut, code: formatPatchCode },
      { stdout: headSha },
      { stdout: branchName }
    ] = await Promise.all([
      // Patch from merge-base to current state (including staged changes)
      execFileNoThrow(gitExe(), ["diff", remoteBaseSha]),
      // Untracked files captured separately
      captureUntrackedFiles(),
      // format-patch for committed changes between merge-base and HEAD.
      // Preserves the actual commit chain (author, date, message) so replay
      // containers can reconstruct the branch with real commits instead of a
      // squashed diff. Uses --stdout to emit all patches as a single text stream.
      execFileNoThrow(gitExe(), [
        "format-patch",
        `${remoteBaseSha}..HEAD`,
        "--stdout"
      ]),
      // HEAD SHA for replay
      execFileNoThrow(gitExe(), ["rev-parse", "HEAD"]),
      // Branch name for replay
      execFileNoThrow(gitExe(), ["rev-parse", "--abbrev-ref", "HEAD"])
    ]);
    let formatPatch = null;
    if (formatPatchCode === 0 && formatPatchOut && formatPatchOut.trim()) {
      formatPatch = formatPatchOut;
    }
    const trimmedBranch = branchName?.trim();
    return {
      remote_base_sha: remoteBaseSha,
      remote_base: remoteBase,
      patch: patch || "",
      untracked_files: untrackedFiles,
      format_patch: formatPatch,
      head_sha: headSha?.trim() || null,
      branch_name: trimmedBranch && trimmedBranch !== "HEAD" ? trimmedBranch : null
    };
  } catch (err) {
    logError(err);
    return null;
  }
}
function isLocalHost(host) {
  const hostWithoutPort = host.split(":")[0] ?? "";
  return hostWithoutPort === "localhost" || /^127\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(hostWithoutPort);
}
function isCurrentDirectoryBareGitRepo() {
  const fs = getFsImplementation();
  const cwd = getCwd();
  const gitPath = join3(cwd, ".git");
  try {
    const stats = fs.statSync(gitPath);
    if (stats.isFile()) {
      return false;
    }
    if (stats.isDirectory()) {
      const gitHeadPath = join3(gitPath, "HEAD");
      try {
        if (fs.statSync(gitHeadPath).isFile()) {
          return false;
        }
      } catch {
      }
    }
  } catch {
  }
  try {
    if (fs.statSync(join3(cwd, "HEAD")).isFile()) return true;
  } catch {
  }
  try {
    if (fs.statSync(join3(cwd, "objects")).isDirectory()) return true;
  } catch {
  }
  try {
    if (fs.statSync(join3(cwd, "refs")).isDirectory()) return true;
  } catch {
  }
  return false;
}
var GIT_ROOT_NOT_FOUND, findGitRootImpl, findGitRoot, resolveCanonicalRoot, findCanonicalGitRoot, gitExe, getIsGit, dirIsInGitRepo, getHead, getBranch, getDefaultBranch, getRemoteUrl, getIsHeadOnRemote, hasUnpushedCommits, getIsClean, getChangedFiles, getFileStatus, getWorktreeCount, stashToCleanState, MAX_FILE_SIZE_BYTES, MAX_TOTAL_SIZE_BYTES, MAX_FILE_COUNT, SNIFF_BUFFER_SIZE;
var init_git = __esm({
  "src/utils/git.ts"() {
    init_memoize();
    init_files();
    init_cwd();
    init_debug();
    init_diagLogs();
    init_execFileNoThrow();
    init_fsOperations();
    init_gitFilesystem();
    init_log();
    init_memoize2();
    init_which();
    GIT_ROOT_NOT_FOUND = /* @__PURE__ */ Symbol("git-root-not-found");
    findGitRootImpl = memoizeWithLRU(
      (startPath) => {
        const startTime = Date.now();
        logForDiagnosticsNoPII("info", "find_git_root_started");
        let current = resolve2(startPath);
        const root = current.substring(0, current.indexOf(sep) + 1) || sep;
        let statCount = 0;
        while (current !== root) {
          try {
            const gitPath = join3(current, ".git");
            statCount++;
            const stat3 = statSync(gitPath);
            if (stat3.isDirectory() || stat3.isFile()) {
              logForDiagnosticsNoPII("info", "find_git_root_completed", {
                duration_ms: Date.now() - startTime,
                stat_count: statCount,
                found: true
              });
              return current.normalize("NFC");
            }
          } catch {
          }
          const parent = dirname2(current);
          if (parent === current) {
            break;
          }
          current = parent;
        }
        try {
          const gitPath = join3(root, ".git");
          statCount++;
          const stat3 = statSync(gitPath);
          if (stat3.isDirectory() || stat3.isFile()) {
            logForDiagnosticsNoPII("info", "find_git_root_completed", {
              duration_ms: Date.now() - startTime,
              stat_count: statCount,
              found: true
            });
            return root.normalize("NFC");
          }
        } catch {
        }
        logForDiagnosticsNoPII("info", "find_git_root_completed", {
          duration_ms: Date.now() - startTime,
          stat_count: statCount,
          found: false
        });
        return GIT_ROOT_NOT_FOUND;
      },
      (path) => path,
      50
    );
    findGitRoot = createFindGitRoot();
    resolveCanonicalRoot = memoizeWithLRU(
      (gitRoot) => {
        try {
          const gitContent = readFileSync(join3(gitRoot, ".git"), "utf-8").trim();
          if (!gitContent.startsWith("gitdir:")) {
            return gitRoot;
          }
          const worktreeGitDir = resolve2(
            gitRoot,
            gitContent.slice("gitdir:".length).trim()
          );
          const commonDir = resolve2(
            worktreeGitDir,
            readFileSync(join3(worktreeGitDir, "commondir"), "utf-8").trim()
          );
          if (resolve2(dirname2(worktreeGitDir)) !== join3(commonDir, "worktrees")) {
            return gitRoot;
          }
          const backlink = realpathSync(
            readFileSync(join3(worktreeGitDir, "gitdir"), "utf-8").trim()
          );
          if (backlink !== join3(realpathSync(gitRoot), ".git")) {
            return gitRoot;
          }
          if (basename(commonDir) !== ".git") {
            return commonDir.normalize("NFC");
          }
          return dirname2(commonDir).normalize("NFC");
        } catch {
          return gitRoot;
        }
      },
      (root) => root,
      50
    );
    findCanonicalGitRoot = createFindCanonicalGitRoot();
    gitExe = memoize_default(() => {
      return whichSync("git") || "git";
    });
    getIsGit = memoize_default(async () => {
      const startTime = Date.now();
      logForDiagnosticsNoPII("info", "is_git_check_started");
      const isGit = findGitRoot(getCwd()) !== null;
      logForDiagnosticsNoPII("info", "is_git_check_completed", {
        duration_ms: Date.now() - startTime,
        is_git: isGit
      });
      return isGit;
    });
    dirIsInGitRepo = async (cwd) => {
      return findGitRoot(cwd) !== null;
    };
    getHead = async () => {
      return getCachedHead();
    };
    getBranch = async () => {
      return getCachedBranch();
    };
    getDefaultBranch = async () => {
      return getCachedDefaultBranch();
    };
    getRemoteUrl = async () => {
      return getCachedRemoteUrl();
    };
    getIsHeadOnRemote = async () => {
      const { code } = await execFileNoThrow(gitExe(), ["rev-parse", "@{u}"], {
        preserveOutputOnError: false
      });
      return code === 0;
    };
    hasUnpushedCommits = async () => {
      const { stdout, code } = await execFileNoThrow(
        gitExe(),
        ["rev-list", "--count", "@{u}..HEAD"],
        { preserveOutputOnError: false }
      );
      return code === 0 && parseInt(stdout.trim(), 10) > 0;
    };
    getIsClean = async (options) => {
      const args = ["--no-optional-locks", "status", "--porcelain"];
      if (options?.ignoreUntracked) {
        args.push("-uno");
      }
      const { stdout } = await execFileNoThrow(gitExe(), args, {
        preserveOutputOnError: false
      });
      return stdout.trim().length === 0;
    };
    getChangedFiles = async () => {
      const { stdout } = await execFileNoThrow(
        gitExe(),
        ["--no-optional-locks", "status", "--porcelain"],
        {
          preserveOutputOnError: false
        }
      );
      return stdout.trim().split("\n").map((line) => line.trim().split(" ", 2)[1]?.trim()).filter((line) => typeof line === "string");
    };
    getFileStatus = async () => {
      const { stdout } = await execFileNoThrow(
        gitExe(),
        ["--no-optional-locks", "status", "--porcelain"],
        {
          preserveOutputOnError: false
        }
      );
      const tracked = [];
      const untracked = [];
      stdout.trim().split("\n").filter((line) => line.length > 0).forEach((line) => {
        const status = line.substring(0, 2);
        const filename = line.substring(2).trim();
        if (status === "??") {
          untracked.push(filename);
        } else if (filename) {
          tracked.push(filename);
        }
      });
      return { tracked, untracked };
    };
    getWorktreeCount = async () => {
      return getWorktreeCountFromFs();
    };
    stashToCleanState = async (message) => {
      try {
        const stashMessage = message || `Claude Code auto-stash - ${(/* @__PURE__ */ new Date()).toISOString()}`;
        const { untracked } = await getFileStatus();
        if (untracked.length > 0) {
          const { code: addCode } = await execFileNoThrow(
            gitExe(),
            ["add", ...untracked],
            { preserveOutputOnError: false }
          );
          if (addCode !== 0) {
            return false;
          }
        }
        const { code } = await execFileNoThrow(
          gitExe(),
          ["stash", "push", "--message", stashMessage],
          { preserveOutputOnError: false }
        );
        return code === 0;
      } catch (_) {
        return false;
      }
    };
    MAX_FILE_SIZE_BYTES = 500 * 1024 * 1024;
    MAX_TOTAL_SIZE_BYTES = 5 * 1024 * 1024 * 1024;
    MAX_FILE_COUNT = 2e4;
    SNIFF_BUFFER_SIZE = 64 * 1024;
  }
});

export {
  logForDiagnosticsNoPII,
  withDiagnosticsTiming,
  init_diagLogs,
  hasBinaryExtension,
  init_files,
  parseGitConfigValue,
  init_gitConfigParser,
  clearResolveGitDirCache,
  resolveGitDir,
  resolveRef,
  getCommonDir,
  getHeadForDir,
  readWorktreeHeadSha,
  getRemoteUrlForDir,
  init_gitFilesystem,
  findGitRoot,
  findCanonicalGitRoot,
  gitExe,
  getIsGit,
  getGitDir,
  isAtGitRoot,
  dirIsInGitRepo,
  getHead,
  getBranch,
  getDefaultBranch,
  getRemoteUrl,
  normalizeGitRemoteUrl,
  getRepoRemoteHash,
  getIsHeadOnRemote,
  hasUnpushedCommits,
  getIsClean,
  getChangedFiles,
  getFileStatus,
  getWorktreeCount,
  stashToCleanState,
  getGitState,
  getGithubRepo,
  findRemoteBase,
  preserveGitStateForIssue,
  isCurrentDirectoryBareGitRepo,
  init_git
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbnN0YW50cy9maWxlcy50cyIsICIuLi8uLi9zcmMvdXRpbHMvZGlhZ0xvZ3MudHMiLCAiLi4vLi4vc3JjL3V0aWxzL2dpdC9naXRDb25maWdQYXJzZXIudHMiLCAiLi4vLi4vc3JjL3V0aWxzL2dpdC9naXRGaWxlc3lzdGVtLnRzIiwgIi4uLy4uL3NyYy91dGlscy9naXQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogQmluYXJ5IGZpbGUgZXh0ZW5zaW9ucyB0byBza2lwIGZvciB0ZXh0LWJhc2VkIG9wZXJhdGlvbnMuXG4gKiBUaGVzZSBmaWxlcyBjYW4ndCBiZSBtZWFuaW5nZnVsbHkgY29tcGFyZWQgYXMgdGV4dCBhbmQgYXJlIG9mdGVuIGxhcmdlLlxuICovXG5leHBvcnQgY29uc3QgQklOQVJZX0VYVEVOU0lPTlMgPSBuZXcgU2V0KFtcbiAgLy8gSW1hZ2VzXG4gICcucG5nJyxcbiAgJy5qcGcnLFxuICAnLmpwZWcnLFxuICAnLmdpZicsXG4gICcuYm1wJyxcbiAgJy5pY28nLFxuICAnLndlYnAnLFxuICAnLnRpZmYnLFxuICAnLnRpZicsXG4gIC8vIFZpZGVvc1xuICAnLm1wNCcsXG4gICcubW92JyxcbiAgJy5hdmknLFxuICAnLm1rdicsXG4gICcud2VibScsXG4gICcud212JyxcbiAgJy5mbHYnLFxuICAnLm00dicsXG4gICcubXBlZycsXG4gICcubXBnJyxcbiAgLy8gQXVkaW9cbiAgJy5tcDMnLFxuICAnLndhdicsXG4gICcub2dnJyxcbiAgJy5mbGFjJyxcbiAgJy5hYWMnLFxuICAnLm00YScsXG4gICcud21hJyxcbiAgJy5haWZmJyxcbiAgJy5vcHVzJyxcbiAgLy8gQXJjaGl2ZXNcbiAgJy56aXAnLFxuICAnLnRhcicsXG4gICcuZ3onLFxuICAnLmJ6MicsXG4gICcuN3onLFxuICAnLnJhcicsXG4gICcueHonLFxuICAnLnonLFxuICAnLnRneicsXG4gICcuaXNvJyxcbiAgLy8gRXhlY3V0YWJsZXMvYmluYXJpZXNcbiAgJy5leGUnLFxuICAnLmRsbCcsXG4gICcuc28nLFxuICAnLmR5bGliJyxcbiAgJy5iaW4nLFxuICAnLm8nLFxuICAnLmEnLFxuICAnLm9iaicsXG4gICcubGliJyxcbiAgJy5hcHAnLFxuICAnLm1zaScsXG4gICcuZGViJyxcbiAgJy5ycG0nLFxuICAvLyBEb2N1bWVudHMgKFBERiBpcyBoZXJlOyBGaWxlUmVhZFRvb2wgZXhjbHVkZXMgaXQgYXQgdGhlIGNhbGwgc2l0ZSlcbiAgJy5wZGYnLFxuICAnLmRvYycsXG4gICcuZG9jeCcsXG4gICcueGxzJyxcbiAgJy54bHN4JyxcbiAgJy5wcHQnLFxuICAnLnBwdHgnLFxuICAnLm9kdCcsXG4gICcub2RzJyxcbiAgJy5vZHAnLFxuICAvLyBGb250c1xuICAnLnR0ZicsXG4gICcub3RmJyxcbiAgJy53b2ZmJyxcbiAgJy53b2ZmMicsXG4gICcuZW90JyxcbiAgLy8gQnl0ZWNvZGUgLyBWTSBhcnRpZmFjdHNcbiAgJy5weWMnLFxuICAnLnB5bycsXG4gICcuY2xhc3MnLFxuICAnLmphcicsXG4gICcud2FyJyxcbiAgJy5lYXInLFxuICAnLm5vZGUnLFxuICAnLndhc20nLFxuICAnLnJsaWInLFxuICAvLyBEYXRhYmFzZSBmaWxlc1xuICAnLnNxbGl0ZScsXG4gICcuc3FsaXRlMycsXG4gICcuZGInLFxuICAnLm1kYicsXG4gICcuaWR4JyxcbiAgLy8gRGVzaWduIC8gM0RcbiAgJy5wc2QnLFxuICAnLmFpJyxcbiAgJy5lcHMnLFxuICAnLnNrZXRjaCcsXG4gICcuZmlnJyxcbiAgJy54ZCcsXG4gICcuYmxlbmQnLFxuICAnLjNkcycsXG4gICcubWF4JyxcbiAgLy8gRmxhc2hcbiAgJy5zd2YnLFxuICAnLmZsYScsXG4gIC8vIExvY2svcHJvZmlsaW5nIGRhdGFcbiAgJy5sb2NrYicsXG4gICcuZGF0JyxcbiAgJy5kYXRhJyxcbl0pXG5cbi8qKlxuICogQ2hlY2sgaWYgYSBmaWxlIHBhdGggaGFzIGEgYmluYXJ5IGV4dGVuc2lvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc0JpbmFyeUV4dGVuc2lvbihmaWxlUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IGV4dCA9IGZpbGVQYXRoLnNsaWNlKGZpbGVQYXRoLmxhc3RJbmRleE9mKCcuJykpLnRvTG93ZXJDYXNlKClcbiAgcmV0dXJuIEJJTkFSWV9FWFRFTlNJT05TLmhhcyhleHQpXG59XG5cbi8qKlxuICogTnVtYmVyIG9mIGJ5dGVzIHRvIHJlYWQgZm9yIGJpbmFyeSBjb250ZW50IGRldGVjdGlvbi5cbiAqL1xuY29uc3QgQklOQVJZX0NIRUNLX1NJWkUgPSA4MTkyXG5cbi8qKlxuICogQ2hlY2sgaWYgYSBidWZmZXIgY29udGFpbnMgYmluYXJ5IGNvbnRlbnQgYnkgbG9va2luZyBmb3IgbnVsbCBieXRlc1xuICogb3IgYSBoaWdoIHByb3BvcnRpb24gb2Ygbm9uLXByaW50YWJsZSBjaGFyYWN0ZXJzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNCaW5hcnlDb250ZW50KGJ1ZmZlcjogQnVmZmVyKTogYm9vbGVhbiB7XG4gIC8vIENoZWNrIGZpcnN0IEJJTkFSWV9DSEVDS19TSVpFIGJ5dGVzIChvciBmdWxsIGJ1ZmZlciBpZiBzbWFsbGVyKVxuICBjb25zdCBjaGVja1NpemUgPSBNYXRoLm1pbihidWZmZXIubGVuZ3RoLCBCSU5BUllfQ0hFQ0tfU0laRSlcblxuICBsZXQgbm9uUHJpbnRhYmxlID0gMFxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrU2l6ZTsgaSsrKSB7XG4gICAgY29uc3QgYnl0ZSA9IGJ1ZmZlcltpXSFcbiAgICAvLyBOdWxsIGJ5dGUgaXMgYSBzdHJvbmcgaW5kaWNhdG9yIG9mIGJpbmFyeVxuICAgIGlmIChieXRlID09PSAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICAvLyBDb3VudCBub24tcHJpbnRhYmxlLCBub24td2hpdGVzcGFjZSBieXRlc1xuICAgIC8vIFByaW50YWJsZSBBU0NJSSBpcyAzMi0xMjYsIHBsdXMgY29tbW9uIHdoaXRlc3BhY2UgKDksIDEwLCAxMylcbiAgICBpZiAoXG4gICAgICBieXRlIDwgMzIgJiZcbiAgICAgIGJ5dGUgIT09IDkgJiYgLy8gdGFiXG4gICAgICBieXRlICE9PSAxMCAmJiAvLyBuZXdsaW5lXG4gICAgICBieXRlICE9PSAxMyAvLyBjYXJyaWFnZSByZXR1cm5cbiAgICApIHtcbiAgICAgIG5vblByaW50YWJsZSsrXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgbW9yZSB0aGFuIDEwJSBub24tcHJpbnRhYmxlLCBsaWtlbHkgYmluYXJ5XG4gIHJldHVybiBub25QcmludGFibGUgLyBjaGVja1NpemUgPiAwLjFcbn1cbiIsICJpbXBvcnQgeyBkaXJuYW1lIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IGdldEZzSW1wbGVtZW50YXRpb24gfSBmcm9tICcuL2ZzT3BlcmF0aW9ucy5qcydcbmltcG9ydCB7IGpzb25TdHJpbmdpZnkgfSBmcm9tICcuL3Nsb3dPcGVyYXRpb25zLmpzJ1xuXG50eXBlIERpYWdub3N0aWNMb2dMZXZlbCA9ICdkZWJ1ZycgfCAnaW5mbycgfCAnd2FybicgfCAnZXJyb3InXG5cbnR5cGUgRGlhZ25vc3RpY0xvZ0VudHJ5ID0ge1xuICB0aW1lc3RhbXA6IHN0cmluZ1xuICBsZXZlbDogRGlhZ25vc3RpY0xvZ0xldmVsXG4gIGV2ZW50OiBzdHJpbmdcbiAgZGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbn1cblxuLyoqXG4gKiBMb2dzIGRpYWdub3N0aWMgaW5mb3JtYXRpb24gdG8gYSBsb2dmaWxlLiBUaGlzIGluZm9ybWF0aW9uIGlzIHNlbnRcbiAqIHZpYSB0aGUgZW52aXJvbm1lbnQgbWFuYWdlciB0byBzZXNzaW9uLWluZ3Jlc3MgdG8gbW9uaXRvciBpc3N1ZXMgZnJvbVxuICogd2l0aGluIHRoZSBjb250YWluZXIuXG4gKlxuICogKkltcG9ydGFudCogLSB0aGlzIGZ1bmN0aW9uIE1VU1QgTk9UIGJlIGNhbGxlZCB3aXRoIGFueSBQSUksIGluY2x1ZGluZ1xuICogZmlsZSBwYXRocywgcHJvamVjdCBuYW1lcywgcmVwbyBuYW1lcywgcHJvbXB0cywgZXRjLlxuICpcbiAqIEBwYXJhbSBsZXZlbCAgICBMb2cgbGV2ZWwuIE9ubHkgdXNlZCBmb3IgaW5mb3JtYXRpb24sIG5vdCBmaWx0ZXJpbmdcbiAqIEBwYXJhbSBldmVudCAgICBBIHNwZWNpZmljIGV2ZW50OiBcInN0YXJ0ZWRcIiwgXCJtY3BfY29ubmVjdGVkXCIsIGV0Yy5cbiAqIEBwYXJhbSBkYXRhICAgICBPcHRpb25hbCBhZGRpdGlvbmFsIGRhdGEgdG8gbG9nXG4gKi9cbi8vIHN5bmMgSU86IGNhbGxlZCBmcm9tIHN5bmMgY29udGV4dFxuZXhwb3J0IGZ1bmN0aW9uIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoXG4gIGxldmVsOiBEaWFnbm9zdGljTG9nTGV2ZWwsXG4gIGV2ZW50OiBzdHJpbmcsXG4gIGRhdGE/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbik6IHZvaWQge1xuICBjb25zdCBsb2dGaWxlID0gZ2V0RGlhZ25vc3RpY0xvZ0ZpbGUoKVxuICBpZiAoIWxvZ0ZpbGUpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGVudHJ5OiBEaWFnbm9zdGljTG9nRW50cnkgPSB7XG4gICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgbGV2ZWwsXG4gICAgZXZlbnQsXG4gICAgZGF0YTogZGF0YSA/PyB7fSxcbiAgfVxuXG4gIGNvbnN0IGZzID0gZ2V0RnNJbXBsZW1lbnRhdGlvbigpXG4gIGNvbnN0IGxpbmUgPSBqc29uU3RyaW5naWZ5KGVudHJ5KSArICdcXG4nXG4gIHRyeSB7XG4gICAgZnMuYXBwZW5kRmlsZVN5bmMobG9nRmlsZSwgbGluZSlcbiAgfSBjYXRjaCB7XG4gICAgLy8gSWYgYXBwZW5kIGZhaWxzLCB0cnkgY3JlYXRpbmcgdGhlIGRpcmVjdG9yeSBmaXJzdFxuICAgIHRyeSB7XG4gICAgICBmcy5ta2RpclN5bmMoZGlybmFtZShsb2dGaWxlKSlcbiAgICAgIGZzLmFwcGVuZEZpbGVTeW5jKGxvZ0ZpbGUsIGxpbmUpXG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBTaWxlbnRseSBmYWlsIGlmIGxvZ2dpbmcgaXMgbm90IHBvc3NpYmxlXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldERpYWdub3N0aWNMb2dGaWxlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9ESUFHTk9TVElDU19GSUxFXG59XG5cbi8qKlxuICogV3JhcHMgYW4gYXN5bmMgZnVuY3Rpb24gd2l0aCBkaWFnbm9zdGljIHRpbWluZyBsb2dzLlxuICogTG9ncyBge2V2ZW50fV9zdGFydGVkYCBiZWZvcmUgZXhlY3V0aW9uIGFuZCBge2V2ZW50fV9jb21wbGV0ZWRgIGFmdGVyIHdpdGggZHVyYXRpb25fbXMuXG4gKlxuICogQHBhcmFtIGV2ZW50ICAgRXZlbnQgbmFtZSBwcmVmaXggKGUuZy4sIFwiZ2l0X3N0YXR1c1wiIC0+IGxvZ3MgXCJnaXRfc3RhdHVzX3N0YXJ0ZWRcIiBhbmQgXCJnaXRfc3RhdHVzX2NvbXBsZXRlZFwiKVxuICogQHBhcmFtIGZuICAgICAgQXN5bmMgZnVuY3Rpb24gdG8gZXhlY3V0ZSBhbmQgdGltZVxuICogQHBhcmFtIGdldERhdGEgT3B0aW9uYWwgZnVuY3Rpb24gdG8gZXh0cmFjdCBhZGRpdGlvbmFsIGRhdGEgZnJvbSB0aGUgcmVzdWx0IGZvciB0aGUgY29tcGxldGlvbiBsb2dcbiAqIEByZXR1cm5zICAgICAgIFRoZSByZXN1bHQgb2YgdGhlIHdyYXBwZWQgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdpdGhEaWFnbm9zdGljc1RpbWluZzxUPihcbiAgZXZlbnQ6IHN0cmluZyxcbiAgZm46ICgpID0+IFByb21pc2U8VD4sXG4gIGdldERhdGE/OiAocmVzdWx0OiBUKSA9PiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbik6IFByb21pc2U8VD4ge1xuICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpXG4gIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2luZm8nLCBgJHtldmVudH1fc3RhcnRlZGApXG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmbigpXG4gICAgY29uc3QgYWRkaXRpb25hbERhdGEgPSBnZXREYXRhID8gZ2V0RGF0YShyZXN1bHQpIDoge31cbiAgICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdpbmZvJywgYCR7ZXZlbnR9X2NvbXBsZXRlZGAsIHtcbiAgICAgIGR1cmF0aW9uX21zOiBEYXRlLm5vdygpIC0gc3RhcnRUaW1lLFxuICAgICAgLi4uYWRkaXRpb25hbERhdGEsXG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnZXJyb3InLCBgJHtldmVudH1fZmFpbGVkYCwge1xuICAgICAgZHVyYXRpb25fbXM6IERhdGUubm93KCkgLSBzdGFydFRpbWUsXG4gICAgfSlcbiAgICB0aHJvdyBlcnJvclxuICB9XG59XG4iLCAiLyoqXG4gKiBMaWdodHdlaWdodCBwYXJzZXIgZm9yIC5naXQvY29uZmlnIGZpbGVzLlxuICpcbiAqIFZlcmlmaWVkIGFnYWluc3QgZ2l0J3MgY29uZmlnLmM6XG4gKiAgIC0gU2VjdGlvbiBuYW1lczogY2FzZS1pbnNlbnNpdGl2ZSwgYWxwaGFudW1lcmljICsgaHlwaGVuXG4gKiAgIC0gU3Vic2VjdGlvbiBuYW1lcyAocXVvdGVkKTogY2FzZS1zZW5zaXRpdmUsIGJhY2tzbGFzaCBlc2NhcGVzIChcXFxcIGFuZCBcXFwiKVxuICogICAtIEtleSBuYW1lczogY2FzZS1pbnNlbnNpdGl2ZSwgYWxwaGFudW1lcmljICsgaHlwaGVuXG4gKiAgIC0gVmFsdWVzOiBvcHRpb25hbCBxdW90aW5nLCBpbmxpbmUgY29tbWVudHMgKCMgb3IgOyksIGJhY2tzbGFzaCBlc2NhcGVzXG4gKi9cblxuaW1wb3J0IHsgcmVhZEZpbGUgfSBmcm9tICdmcy9wcm9taXNlcydcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJ1xuXG4vKipcbiAqIFBhcnNlIGEgc2luZ2xlIHZhbHVlIGZyb20gLmdpdC9jb25maWcuXG4gKiBGaW5kcyB0aGUgZmlyc3QgbWF0Y2hpbmcga2V5IHVuZGVyIHRoZSBnaXZlbiBzZWN0aW9uL3N1YnNlY3Rpb24uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwYXJzZUdpdENvbmZpZ1ZhbHVlKFxuICBnaXREaXI6IHN0cmluZyxcbiAgc2VjdGlvbjogc3RyaW5nLFxuICBzdWJzZWN0aW9uOiBzdHJpbmcgfCBudWxsLFxuICBrZXk6IHN0cmluZyxcbik6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICB0cnkge1xuICAgIGNvbnN0IGNvbmZpZyA9IGF3YWl0IHJlYWRGaWxlKGpvaW4oZ2l0RGlyLCAnY29uZmlnJyksICd1dGYtOCcpXG4gICAgcmV0dXJuIHBhcnNlQ29uZmlnU3RyaW5nKGNvbmZpZywgc2VjdGlvbiwgc3Vic2VjdGlvbiwga2V5KVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbi8qKlxuICogUGFyc2UgYSBjb25maWcgdmFsdWUgZnJvbSBhbiBpbi1tZW1vcnkgY29uZmlnIHN0cmluZy5cbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb25maWdTdHJpbmcoXG4gIGNvbmZpZzogc3RyaW5nLFxuICBzZWN0aW9uOiBzdHJpbmcsXG4gIHN1YnNlY3Rpb246IHN0cmluZyB8IG51bGwsXG4gIGtleTogc3RyaW5nLFxuKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IGxpbmVzID0gY29uZmlnLnNwbGl0KCdcXG4nKVxuICBjb25zdCBzZWN0aW9uTG93ZXIgPSBzZWN0aW9uLnRvTG93ZXJDYXNlKClcbiAgY29uc3Qga2V5TG93ZXIgPSBrZXkudG9Mb3dlckNhc2UoKVxuXG4gIGxldCBpblNlY3Rpb24gPSBmYWxzZVxuICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICBjb25zdCB0cmltbWVkID0gbGluZS50cmltKClcblxuICAgIC8vIFNraXAgZW1wdHkgbGluZXMgYW5kIGNvbW1lbnQtb25seSBsaW5lc1xuICAgIGlmICh0cmltbWVkLmxlbmd0aCA9PT0gMCB8fCB0cmltbWVkWzBdID09PSAnIycgfHwgdHJpbW1lZFswXSA9PT0gJzsnKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIC8vIFNlY3Rpb24gaGVhZGVyXG4gICAgaWYgKHRyaW1tZWRbMF0gPT09ICdbJykge1xuICAgICAgaW5TZWN0aW9uID0gbWF0Y2hlc1NlY3Rpb25IZWFkZXIodHJpbW1lZCwgc2VjdGlvbkxvd2VyLCBzdWJzZWN0aW9uKVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAoIWluU2VjdGlvbikge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICAvLyBLZXktdmFsdWUgbGluZTogZmluZCB0aGUga2V5IG5hbWVcbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUtleVZhbHVlKHRyaW1tZWQpXG4gICAgaWYgKHBhcnNlZCAmJiBwYXJzZWQua2V5LnRvTG93ZXJDYXNlKCkgPT09IGtleUxvd2VyKSB7XG4gICAgICByZXR1cm4gcGFyc2VkLnZhbHVlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuLyoqXG4gKiBQYXJzZSBhIGtleSA9IHZhbHVlIGxpbmUuIFJldHVybnMgbnVsbCBpZiB0aGUgbGluZSBkb2Vzbid0IGNvbnRhaW4gYSB2YWxpZCBrZXkuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlS2V5VmFsdWUobGluZTogc3RyaW5nKTogeyBrZXk6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9IHwgbnVsbCB7XG4gIC8vIFJlYWQga2V5OiBhbHBoYW51bWVyaWMgKyBoeXBoZW4sIHN0YXJ0aW5nIHdpdGggYWxwaGFcbiAgbGV0IGkgPSAwXG4gIHdoaWxlIChpIDwgbGluZS5sZW5ndGggJiYgaXNLZXlDaGFyKGxpbmVbaV0hKSkge1xuICAgIGkrK1xuICB9XG4gIGlmIChpID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBjb25zdCBrZXkgPSBsaW5lLnNsaWNlKDAsIGkpXG5cbiAgLy8gU2tpcCB3aGl0ZXNwYWNlXG4gIHdoaWxlIChpIDwgbGluZS5sZW5ndGggJiYgKGxpbmVbaV0gPT09ICcgJyB8fCBsaW5lW2ldID09PSAnXFx0JykpIHtcbiAgICBpKytcbiAgfVxuXG4gIC8vIE11c3QgaGF2ZSAnPSdcbiAgaWYgKGkgPj0gbGluZS5sZW5ndGggfHwgbGluZVtpXSAhPT0gJz0nKSB7XG4gICAgLy8gQm9vbGVhbiBrZXkgd2l0aCBubyB2YWx1ZSBcdTIwMTQgbm90IHJlbGV2YW50IGZvciBvdXIgdXNlIGNhc2VzXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBpKysgLy8gc2tpcCAnPSdcblxuICAvLyBTa2lwIHdoaXRlc3BhY2UgYWZ0ZXIgJz0nXG4gIHdoaWxlIChpIDwgbGluZS5sZW5ndGggJiYgKGxpbmVbaV0gPT09ICcgJyB8fCBsaW5lW2ldID09PSAnXFx0JykpIHtcbiAgICBpKytcbiAgfVxuXG4gIGNvbnN0IHZhbHVlID0gcGFyc2VWYWx1ZShsaW5lLCBpKVxuICByZXR1cm4geyBrZXksIHZhbHVlIH1cbn1cblxuLyoqXG4gKiBQYXJzZSBhIGNvbmZpZyB2YWx1ZSBzdGFydGluZyBhdCBwb3NpdGlvbiBpLlxuICogSGFuZGxlcyBxdW90ZWQgc3RyaW5ncywgZXNjYXBlIHNlcXVlbmNlcywgYW5kIGlubGluZSBjb21tZW50cy5cbiAqL1xuZnVuY3Rpb24gcGFyc2VWYWx1ZShsaW5lOiBzdHJpbmcsIHN0YXJ0OiBudW1iZXIpOiBzdHJpbmcge1xuICBsZXQgcmVzdWx0ID0gJydcbiAgbGV0IGluUXVvdGUgPSBmYWxzZVxuICBsZXQgaSA9IHN0YXJ0XG5cbiAgd2hpbGUgKGkgPCBsaW5lLmxlbmd0aCkge1xuICAgIGNvbnN0IGNoID0gbGluZVtpXSFcblxuICAgIC8vIElubGluZSBjb21tZW50cyBvdXRzaWRlIHF1b3RlcyBlbmQgdGhlIHZhbHVlXG4gICAgaWYgKCFpblF1b3RlICYmIChjaCA9PT0gJyMnIHx8IGNoID09PSAnOycpKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGlmIChjaCA9PT0gJ1wiJykge1xuICAgICAgaW5RdW90ZSA9ICFpblF1b3RlXG4gICAgICBpKytcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKGNoID09PSAnXFxcXCcgJiYgaSArIDEgPCBsaW5lLmxlbmd0aCkge1xuICAgICAgY29uc3QgbmV4dCA9IGxpbmVbaSArIDFdIVxuICAgICAgaWYgKGluUXVvdGUpIHtcbiAgICAgICAgLy8gSW5zaWRlIHF1b3RlczogcmVjb2duaXplIGVzY2FwZSBzZXF1ZW5jZXNcbiAgICAgICAgc3dpdGNoIChuZXh0KSB7XG4gICAgICAgICAgY2FzZSAnbic6XG4gICAgICAgICAgICByZXN1bHQgKz0gJ1xcbidcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgY2FzZSAndCc6XG4gICAgICAgICAgICByZXN1bHQgKz0gJ1xcdCdcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgY2FzZSAnYic6XG4gICAgICAgICAgICByZXN1bHQgKz0gJ1xcYidcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgY2FzZSAnXCInOlxuICAgICAgICAgICAgcmVzdWx0ICs9ICdcIidcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgY2FzZSAnXFxcXCc6XG4gICAgICAgICAgICByZXN1bHQgKz0gJ1xcXFwnXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBHaXQgc2lsZW50bHkgZHJvcHMgdGhlIGJhY2tzbGFzaCBmb3IgdW5rbm93biBlc2NhcGVzXG4gICAgICAgICAgICByZXN1bHQgKz0gbmV4dFxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBpICs9IDJcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIC8vIE91dHNpZGUgcXVvdGVzOiBiYWNrc2xhc2ggYXQgZW5kIG9mIGxpbmUgPSBjb250aW51YXRpb24gKHdlIGRvbid0XG4gICAgICAvLyBoYW5kbGUgbXVsdGktbGluZSBzaW5jZSB3ZSBzcGxpdCBvbiBcXG4sIGJ1dCBoYW5kbGUgXFxcXCBhbmQgb3RoZXJzKVxuICAgICAgaWYgKG5leHQgPT09ICdcXFxcJykge1xuICAgICAgICByZXN1bHQgKz0gJ1xcXFwnXG4gICAgICAgIGkgKz0gMlxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgLy8gRmFsbHRocm91Z2ggXHUyMDE0IHRyZWF0IGJhY2tzbGFzaCBsaXRlcmFsbHkgb3V0c2lkZSBxdW90ZXNcbiAgICB9XG5cbiAgICByZXN1bHQgKz0gY2hcbiAgICBpKytcbiAgfVxuXG4gIC8vIFRyaW0gdHJhaWxpbmcgd2hpdGVzcGFjZSBmcm9tIHVucXVvdGVkIHBvcnRpb25zLlxuICAvLyBHaXQgdHJpbXMgdHJhaWxpbmcgd2hpdGVzcGFjZSB0aGF0IGlzbid0IGluc2lkZSBxdW90ZXMsIGJ1dCBzaW5jZSB3ZVxuICAvLyBwcm9jZXNzIGNoYXItYnktY2hhciBhbmQgcXVvdGVzIHRvZ2dsZSwgdGhlIHNpbXBsZXN0IGNvcnJlY3QgYXBwcm9hY2hcbiAgLy8gZm9yIHNpbmdsZS1saW5lIHZhbHVlcyBpcyB0byB0cmltIHRoZSByZXN1bHQgd2hlbiBub3QgZW5kaW5nIGluIGEgcXVvdGUuXG4gIGlmICghaW5RdW90ZSkge1xuICAgIHJlc3VsdCA9IHRyaW1UcmFpbGluZ1doaXRlc3BhY2UocmVzdWx0KVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiB0cmltVHJhaWxpbmdXaGl0ZXNwYWNlKHM6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBlbmQgPSBzLmxlbmd0aFxuICB3aGlsZSAoZW5kID4gMCAmJiAoc1tlbmQgLSAxXSA9PT0gJyAnIHx8IHNbZW5kIC0gMV0gPT09ICdcXHQnKSkge1xuICAgIGVuZC0tXG4gIH1cbiAgcmV0dXJuIHMuc2xpY2UoMCwgZW5kKVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgY29uZmlnIGxpbmUgbGlrZSBgW3JlbW90ZSBcIm9yaWdpblwiXWAgbWF0Y2hlcyB0aGUgZ2l2ZW4gc2VjdGlvbi9zdWJzZWN0aW9uLlxuICogU2VjdGlvbiBtYXRjaGluZyBpcyBjYXNlLWluc2Vuc2l0aXZlOyBzdWJzZWN0aW9uIG1hdGNoaW5nIGlzIGNhc2Utc2Vuc2l0aXZlLlxuICovXG5mdW5jdGlvbiBtYXRjaGVzU2VjdGlvbkhlYWRlcihcbiAgbGluZTogc3RyaW5nLFxuICBzZWN0aW9uTG93ZXI6IHN0cmluZyxcbiAgc3Vic2VjdGlvbjogc3RyaW5nIHwgbnVsbCxcbik6IGJvb2xlYW4ge1xuICAvLyBsaW5lIHN0YXJ0cyB3aXRoICdbJ1xuICBsZXQgaSA9IDFcblxuICAvLyBSZWFkIHNlY3Rpb24gbmFtZVxuICB3aGlsZSAoXG4gICAgaSA8IGxpbmUubGVuZ3RoICYmXG4gICAgbGluZVtpXSAhPT0gJ10nICYmXG4gICAgbGluZVtpXSAhPT0gJyAnICYmXG4gICAgbGluZVtpXSAhPT0gJ1xcdCcgJiZcbiAgICBsaW5lW2ldICE9PSAnXCInXG4gICkge1xuICAgIGkrK1xuICB9XG4gIGNvbnN0IGZvdW5kU2VjdGlvbiA9IGxpbmUuc2xpY2UoMSwgaSkudG9Mb3dlckNhc2UoKVxuXG4gIGlmIChmb3VuZFNlY3Rpb24gIT09IHNlY3Rpb25Mb3dlcikge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKHN1YnNlY3Rpb24gPT09IG51bGwpIHtcbiAgICAvLyBTaW1wbGUgc2VjdGlvbjogbXVzdCBlbmQgd2l0aCAnXSdcbiAgICByZXR1cm4gaSA8IGxpbmUubGVuZ3RoICYmIGxpbmVbaV0gPT09ICddJ1xuICB9XG5cbiAgLy8gU2tpcCB3aGl0ZXNwYWNlIGJlZm9yZSBzdWJzZWN0aW9uIHF1b3RlXG4gIHdoaWxlIChpIDwgbGluZS5sZW5ndGggJiYgKGxpbmVbaV0gPT09ICcgJyB8fCBsaW5lW2ldID09PSAnXFx0JykpIHtcbiAgICBpKytcbiAgfVxuXG4gIC8vIE11c3QgaGF2ZSBvcGVuaW5nIHF1b3RlXG4gIGlmIChpID49IGxpbmUubGVuZ3RoIHx8IGxpbmVbaV0gIT09ICdcIicpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBpKysgLy8gc2tpcCBvcGVuaW5nIHF1b3RlXG5cbiAgLy8gUmVhZCBzdWJzZWN0aW9uIFx1MjAxNCBjYXNlLXNlbnNpdGl2ZSwgaGFuZGxlIFxcXFwgYW5kIFxcXCIgZXNjYXBlc1xuICBsZXQgZm91bmRTdWJzZWN0aW9uID0gJydcbiAgd2hpbGUgKGkgPCBsaW5lLmxlbmd0aCAmJiBsaW5lW2ldICE9PSAnXCInKSB7XG4gICAgaWYgKGxpbmVbaV0gPT09ICdcXFxcJyAmJiBpICsgMSA8IGxpbmUubGVuZ3RoKSB7XG4gICAgICBjb25zdCBuZXh0ID0gbGluZVtpICsgMV0hXG4gICAgICBpZiAobmV4dCA9PT0gJ1xcXFwnIHx8IG5leHQgPT09ICdcIicpIHtcbiAgICAgICAgZm91bmRTdWJzZWN0aW9uICs9IG5leHRcbiAgICAgICAgaSArPSAyXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICAvLyBHaXQgZHJvcHMgdGhlIGJhY2tzbGFzaCBmb3Igb3RoZXIgZXNjYXBlcyBpbiBzdWJzZWN0aW9uc1xuICAgICAgZm91bmRTdWJzZWN0aW9uICs9IG5leHRcbiAgICAgIGkgKz0gMlxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgZm91bmRTdWJzZWN0aW9uICs9IGxpbmVbaV1cbiAgICBpKytcbiAgfVxuXG4gIC8vIE11c3QgaGF2ZSBjbG9zaW5nIHF1b3RlIGZvbGxvd2VkIGJ5ICddJ1xuICBpZiAoaSA+PSBsaW5lLmxlbmd0aCB8fCBsaW5lW2ldICE9PSAnXCInKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgaSsrIC8vIHNraXAgY2xvc2luZyBxdW90ZVxuXG4gIGlmIChpID49IGxpbmUubGVuZ3RoIHx8IGxpbmVbaV0gIT09ICddJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZvdW5kU3Vic2VjdGlvbiA9PT0gc3Vic2VjdGlvblxufVxuXG5mdW5jdGlvbiBpc0tleUNoYXIoY2g6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIChjaCA+PSAnYScgJiYgY2ggPD0gJ3onKSB8fFxuICAgIChjaCA+PSAnQScgJiYgY2ggPD0gJ1onKSB8fFxuICAgIChjaCA+PSAnMCcgJiYgY2ggPD0gJzknKSB8fFxuICAgIGNoID09PSAnLSdcbiAgKVxufVxuIiwgIi8qKlxuICogRmlsZXN5c3RlbS1iYXNlZCBnaXQgc3RhdGUgcmVhZGluZyBcdTIwMTQgYXZvaWRzIHNwYXduaW5nIGdpdCBzdWJwcm9jZXNzZXMuXG4gKlxuICogQ292ZXJzOiByZXNvbHZpbmcgLmdpdCBkaXJlY3RvcmllcyAoaW5jbHVkaW5nIHdvcmt0cmVlcy9zdWJtb2R1bGVzKSxcbiAqIHBhcnNpbmcgSEVBRCwgcmVzb2x2aW5nIHJlZnMgdmlhIGxvb3NlIGZpbGVzIGFuZCBwYWNrZWQtcmVmcyxcbiAqIGFuZCB0aGUgR2l0SGVhZFdhdGNoZXIgdGhhdCBjYWNoZXMgYnJhbmNoL1NIQSB3aXRoIGZzLndhdGNoRmlsZS5cbiAqXG4gKiBDb3JyZWN0bmVzcyBub3RlcyAodmVyaWZpZWQgYWdhaW5zdCBnaXQgc291cmNlKTpcbiAqICAgLSBIRUFEOiBgcmVmOiByZWZzL2hlYWRzLzxicmFuY2g+XFxuYCBvciByYXcgU0hBIChyZWZzL2ZpbGVzLWJhY2tlbmQuYylcbiAqICAgLSBQYWNrZWQtcmVmczogYDxzaGE+IDxyZWZuYW1lPlxcbmAsIHNraXAgYCNgIGFuZCBgXmAgbGluZXMgKHBhY2tlZC1iYWNrZW5kLmMpXG4gKiAgIC0gLmdpdCBmaWxlICh3b3JrdHJlZSk6IGBnaXRkaXI6IDxwYXRoPlxcbmAgd2l0aCBvcHRpb25hbCByZWxhdGl2ZSBwYXRoIChzZXR1cC5jKVxuICogICAtIFNoYWxsb3c6IG1lcmUgZXhpc3RlbmNlIG9mIGA8Y29tbW9uRGlyPi9zaGFsbG93YCBtZWFucyBzaGFsbG93IChzaGFsbG93LmMpXG4gKi9cblxuaW1wb3J0IHsgdW53YXRjaEZpbGUsIHdhdGNoRmlsZSB9IGZyb20gJ2ZzJ1xuaW1wb3J0IHsgcmVhZGRpciwgcmVhZEZpbGUsIHN0YXQgfSBmcm9tICdmcy9wcm9taXNlcydcbmltcG9ydCB7IGpvaW4sIHJlc29sdmUgfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgd2FpdEZvclNjcm9sbElkbGUgfSBmcm9tICcuLi8uLi9ib290c3RyYXAvc3RhdGUuanMnXG5pbXBvcnQgeyByZWdpc3RlckNsZWFudXAgfSBmcm9tICcuLi9jbGVhbnVwUmVnaXN0cnkuanMnXG5pbXBvcnQgeyBnZXRDd2QgfSBmcm9tICcuLi9jd2QuanMnXG5pbXBvcnQgeyBmaW5kR2l0Um9vdCB9IGZyb20gJy4uL2dpdC5qcydcbmltcG9ydCB7IHBhcnNlR2l0Q29uZmlnVmFsdWUgfSBmcm9tICcuL2dpdENvbmZpZ1BhcnNlci5qcydcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyByZXNvbHZlR2l0RGlyIFx1MjAxNCBmaW5kIHRoZSBhY3R1YWwgLmdpdCBkaXJlY3Rvcnlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCByZXNvbHZlR2l0RGlyQ2FjaGUgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nIHwgbnVsbD4oKVxuXG4vKiogQ2xlYXIgY2FjaGVkIGdpdCBkaXIgcmVzb2x1dGlvbnMuIEV4cG9ydGVkIGZvciB0ZXN0aW5nIG9ubHkuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJSZXNvbHZlR2l0RGlyQ2FjaGUoKTogdm9pZCB7XG4gIHJlc29sdmVHaXREaXJDYWNoZS5jbGVhcigpXG59XG5cbi8qKlxuICogUmVzb2x2ZSB0aGUgYWN0dWFsIC5naXQgZGlyZWN0b3J5IGZvciBhIHJlcG8uXG4gKiBIYW5kbGVzIHdvcmt0cmVlcy9zdWJtb2R1bGVzIHdoZXJlIC5naXQgaXMgYSBmaWxlIGNvbnRhaW5pbmcgYGdpdGRpcjogPHBhdGg+YC5cbiAqIE1lbW9pemVkIHBlciBzdGFydFBhdGguXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXNvbHZlR2l0RGlyKFxuICBzdGFydFBhdGg/OiBzdHJpbmcsXG4pOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgY29uc3QgY3dkID0gcmVzb2x2ZShzdGFydFBhdGggPz8gZ2V0Q3dkKCkpXG4gIGNvbnN0IGNhY2hlZCA9IHJlc29sdmVHaXREaXJDYWNoZS5nZXQoY3dkKVxuICBpZiAoY2FjaGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gY2FjaGVkXG4gIH1cblxuICBjb25zdCByb290ID0gZmluZEdpdFJvb3QoY3dkKVxuICBpZiAoIXJvb3QpIHtcbiAgICByZXNvbHZlR2l0RGlyQ2FjaGUuc2V0KGN3ZCwgbnVsbClcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgZ2l0UGF0aCA9IGpvaW4ocm9vdCwgJy5naXQnKVxuICB0cnkge1xuICAgIGNvbnN0IHN0ID0gYXdhaXQgc3RhdChnaXRQYXRoKVxuICAgIGlmIChzdC5pc0ZpbGUoKSkge1xuICAgICAgLy8gV29ya3RyZWUgb3Igc3VibW9kdWxlOiAuZ2l0IGlzIGEgZmlsZSB3aXRoIGBnaXRkaXI6IDxwYXRoPmBcbiAgICAgIC8vIEdpdCBzdHJpcHMgdHJhaWxpbmcgXFxuIGFuZCBcXHIgKHNldHVwLmMgcmVhZF9naXRmaWxlX2dlbnRseSkuXG4gICAgICBjb25zdCBjb250ZW50ID0gKGF3YWl0IHJlYWRGaWxlKGdpdFBhdGgsICd1dGYtOCcpKS50cmltKClcbiAgICAgIGlmIChjb250ZW50LnN0YXJ0c1dpdGgoJ2dpdGRpcjonKSkge1xuICAgICAgICBjb25zdCByYXdEaXIgPSBjb250ZW50LnNsaWNlKCdnaXRkaXI6Jy5sZW5ndGgpLnRyaW0oKVxuICAgICAgICBjb25zdCByZXNvbHZlZCA9IHJlc29sdmUocm9vdCwgcmF3RGlyKVxuICAgICAgICByZXNvbHZlR2l0RGlyQ2FjaGUuc2V0KGN3ZCwgcmVzb2x2ZWQpXG4gICAgICAgIHJldHVybiByZXNvbHZlZFxuICAgICAgfVxuICAgIH1cbiAgICAvLyBSZWd1bGFyIHJlcG86IC5naXQgaXMgYSBkaXJlY3RvcnlcbiAgICByZXNvbHZlR2l0RGlyQ2FjaGUuc2V0KGN3ZCwgZ2l0UGF0aClcbiAgICByZXR1cm4gZ2l0UGF0aFxuICB9IGNhdGNoIHtcbiAgICByZXNvbHZlR2l0RGlyQ2FjaGUuc2V0KGN3ZCwgbnVsbClcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaXNTYWZlUmVmTmFtZSBcdTIwMTQgdmFsaWRhdGUgcmVmL2JyYW5jaCBuYW1lcyByZWFkIGZyb20gLmdpdC9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIFZhbGlkYXRlIHRoYXQgYSByZWYvYnJhbmNoIG5hbWUgcmVhZCBmcm9tIC5naXQvIGlzIHNhZmUgdG8gdXNlIGluIHBhdGhcbiAqIGpvaW5zLCBhcyBnaXQgcG9zaXRpb25hbCBhcmd1bWVudHMsIGFuZCB3aGVuIGludGVycG9sYXRlZCBpbnRvIHNoZWxsXG4gKiBjb21tYW5kcyAoY29tbWl0LXB1c2gtcHIgc2tpbGwgaW50ZXJwb2xhdGVzIHRoZSBicmFuY2ggaW50byBzaGVsbCkuXG4gKiBBbiBhdHRhY2tlciB3aG8gY29udHJvbHMgLmdpdC9IRUFEIG9yIGEgbG9vc2UgcmVmIGZpbGUgY291bGQgb3RoZXJ3aXNlXG4gKiBlbWJlZCBwYXRoIHRyYXZlcnNhbCAoYC4uYCksIGFyZ3VtZW50IGluamVjdGlvbiAobGVhZGluZyBgLWApLCBvciBzaGVsbFxuICogbWV0YWNoYXJhY3RlcnMgXHUyMDE0IC5naXQvSEVBRCBpcyBhIHBsYWluIHRleHQgZmlsZSB0aGF0IGNhbiBiZSB3cml0dGVuXG4gKiB3aXRob3V0IGdpdCdzIG93biBjaGVjay1yZWYtZm9ybWF0IHZhbGlkYXRpb24uXG4gKlxuICogQWxsb3dsaXN0OiBBU0NJSSBhbHBoYW51bWVyaWNzLCBgL2AsIGAuYCwgYF9gLCBgK2AsIGAtYCwgYEBgIG9ubHkuIFRoaXNcbiAqIGNvdmVycyBhbGwgbGVnaXRpbWF0ZSBnaXQgYnJhbmNoIG5hbWVzIChlLmcuIGBmZWF0dXJlL2Zvb2AsXG4gKiBgcmVsZWFzZS0xLjIuMytidWlsZGAsIGBkZXBlbmRhYm90L25wbV9hbmRfeWFybi9AdHlwZXMvbm9kZS0xOC4wLjBgKVxuICogd2hpbGUgcmVqZWN0aW5nIGV2ZXJ5dGhpbmcgdGhhdCBjb3VsZCBiZSBkYW5nZXJvdXMgaW4gc2hlbGwgY29udGV4dFxuICogKG5ld2xpbmVzLCBiYWNrdGlja3MsIGAkYCwgYDtgLCBgfGAsIGAmYCwgYChgLCBgKWAsIGA8YCwgYD5gLCBzcGFjZXMsXG4gKiB0YWJzLCBxdW90ZXMsIGJhY2tzbGFzaCkgYW5kIHBhdGggdHJhdmVyc2FsIChgLi5gKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FmZVJlZk5hbWUobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICghbmFtZSB8fCBuYW1lLnN0YXJ0c1dpdGgoJy0nKSB8fCBuYW1lLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGlmIChuYW1lLmluY2x1ZGVzKCcuLicpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgLy8gUmVqZWN0IHNpbmdsZS1kb3QgYW5kIGVtcHR5IHBhdGggY29tcG9uZW50cyAoYC5gLCBgZm9vLy4vYmFyYCwgYGZvby8vYmFyYCxcbiAgLy8gYGZvby9gKS4gR2l0LWNoZWNrLXJlZi1mb3JtYXQgcmVqZWN0cyB0aGVzZSwgYW5kIGAuYCBub3JtYWxpemVzIGF3YXkgaW5cbiAgLy8gcGF0aCBqb2lucyBzbyBhIHRhbXBlcmVkIEhFQUQgb2YgYHJlZnMvaGVhZHMvLmAgd291bGQgbWFrZSB1cyB3YXRjaCB0aGVcbiAgLy8gcmVmcy9oZWFkcyBkaXJlY3RvcnkgaXRzZWxmIGluc3RlYWQgb2YgYSBicmFuY2ggZmlsZS5cbiAgaWYgKG5hbWUuc3BsaXQoJy8nKS5zb21lKGMgPT4gYyA9PT0gJy4nIHx8IGMgPT09ICcnKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIC8vIEFsbG93bGlzdC1vbmx5OiBhbHBoYW51bWVyaWNzLCAvLCAuLCBfLCArLCAtLCBALiBSZWplY3RzIGFsbCBzaGVsbFxuICAvLyBtZXRhY2hhcmFjdGVycywgd2hpdGVzcGFjZSwgTlVMLCBhbmQgbm9uLUFTQ0lJLiBHaXQncyBmb3JiaWRkZW4gQHtcbiAgLy8gc2VxdWVuY2UgaXMgYmxvY2tlZCBiZWNhdXNlIHsgaXMgbm90IGluIHRoZSBhbGxvd2xpc3QuXG4gIGlmICghL15bYS16QS1aMC05Ly5fK0AtXSskLy50ZXN0KG5hbWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqXG4gKiBWYWxpZGF0ZSB0aGF0IGEgc3RyaW5nIGlzIGEgZ2l0IFNIQTogNDAgaGV4IGNoYXJzIChTSEEtMSkgb3IgNjQgaGV4IGNoYXJzXG4gKiAoU0hBLTI1NikuIEdpdCBuZXZlciB3cml0ZXMgYWJicmV2aWF0ZWQgU0hBcyB0byBIRUFEIG9yIHJlZiBmaWxlcywgc28gd2VcbiAqIG9ubHkgYWNjZXB0IGZ1bGwtbGVuZ3RoIGhhc2hlcy5cbiAqXG4gKiBBbiBhdHRhY2tlciB3aG8gY29udHJvbHMgLmdpdC9IRUFEIHdoZW4gZGV0YWNoZWQsIG9yIGEgbG9vc2UgcmVmIGZpbGUsXG4gKiBjb3VsZCBvdGhlcndpc2UgcmV0dXJuIGFyYml0cmFyeSBjb250ZW50IHRoYXQgZmxvd3MgaW50byBzaGVsbCBjb250ZXh0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRHaXRTaGEoczogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiAvXlswLTlhLWZdezQwfSQvLnRlc3QocykgfHwgL15bMC05YS1mXXs2NH0kLy50ZXN0KHMpXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gcmVhZEdpdEhlYWQgXHUyMDE0IHBhcnNlIC5naXQvSEVBRFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogUGFyc2UgLmdpdC9IRUFEIHRvIGRldGVybWluZSBjdXJyZW50IGJyYW5jaCBvciBkZXRhY2hlZCBTSEEuXG4gKlxuICogSEVBRCBmb3JtYXQgKHBlciBnaXQgc291cmNlLCByZWZzL2ZpbGVzLWJhY2tlbmQuYyk6XG4gKiAgIC0gYHJlZjogcmVmcy9oZWFkcy88YnJhbmNoPlxcbmAgIFx1MjAxNCBvbiBhIGJyYW5jaFxuICogICAtIGByZWY6IDxvdGhlci1yZWY+XFxuYCAgICAgICAgICBcdTIwMTQgdW51c3VhbCBzeW1yZWYgKGUuZy4gZHVyaW5nIGJpc2VjdClcbiAqICAgLSBgPGhleC1zaGE+XFxuYCAgICAgICAgICAgICAgICAgXHUyMDE0IGRldGFjaGVkIEhFQUQgKGUuZy4gZHVyaW5nIHJlYmFzZSlcbiAqXG4gKiBHaXQgc3RyaXBzIHRyYWlsaW5nIHdoaXRlc3BhY2UgdmlhIHN0cmJ1Zl9ydHJpbTsgLnRyaW0oKSBpcyBlcXVpdmFsZW50LlxuICogR2l0IGFsbG93cyBhbnkgd2hpdGVzcGFjZSBiZXR3ZWVuIFwicmVmOlwiIGFuZCB0aGUgcGF0aDsgd2UgaGFuZGxlXG4gKiB0aGlzIGJ5IHRyaW1taW5nIGFmdGVyIHNsaWNpbmcgcGFzdCBcInJlZjpcIi5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlYWRHaXRIZWFkKFxuICBnaXREaXI6IHN0cmluZyxcbik6IFByb21pc2U8XG4gIHsgdHlwZTogJ2JyYW5jaCc7IG5hbWU6IHN0cmluZyB9IHwgeyB0eXBlOiAnZGV0YWNoZWQnOyBzaGE6IHN0cmluZyB9IHwgbnVsbFxuPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgY29udGVudCA9IChhd2FpdCByZWFkRmlsZShqb2luKGdpdERpciwgJ0hFQUQnKSwgJ3V0Zi04JykpLnRyaW0oKVxuICAgIGlmIChjb250ZW50LnN0YXJ0c1dpdGgoJ3JlZjonKSkge1xuICAgICAgY29uc3QgcmVmID0gY29udGVudC5zbGljZSgncmVmOicubGVuZ3RoKS50cmltKClcbiAgICAgIGlmIChyZWYuc3RhcnRzV2l0aCgncmVmcy9oZWFkcy8nKSkge1xuICAgICAgICBjb25zdCBuYW1lID0gcmVmLnNsaWNlKCdyZWZzL2hlYWRzLycubGVuZ3RoKVxuICAgICAgICAvLyBSZWplY3QgcGF0aCB0cmF2ZXJzYWwgYW5kIGFyZ3VtZW50IGluamVjdGlvbiBmcm9tIGEgdGFtcGVyZWQgSEVBRC5cbiAgICAgICAgaWYgKCFpc1NhZmVSZWZOYW1lKG5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB0eXBlOiAnYnJhbmNoJywgbmFtZSB9XG4gICAgICB9XG4gICAgICAvLyBVbnVzdWFsIHN5bXJlZiAobm90IGEgbG9jYWwgYnJhbmNoKSBcdTIwMTQgcmVzb2x2ZSB0byBTSEFcbiAgICAgIGlmICghaXNTYWZlUmVmTmFtZShyZWYpKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgICBjb25zdCBzaGEgPSBhd2FpdCByZXNvbHZlUmVmKGdpdERpciwgcmVmKVxuICAgICAgcmV0dXJuIHNoYSA/IHsgdHlwZTogJ2RldGFjaGVkJywgc2hhIH0gOiB7IHR5cGU6ICdkZXRhY2hlZCcsIHNoYTogJycgfVxuICAgIH1cbiAgICAvLyBSYXcgU0hBIChkZXRhY2hlZCBIRUFEKS4gVmFsaWRhdGU6IGFuIGF0dGFja2VyLWNvbnRyb2xsZWQgSEVBRCBmaWxlXG4gICAgLy8gY291bGQgY29udGFpbiBzaGVsbCBtZXRhY2hhcmFjdGVycyB0aGF0IGZsb3cgaW50byBkb3duc3RyZWFtIHNoZWxsXG4gICAgLy8gY29udGV4dHMuXG4gICAgaWYgKCFpc1ZhbGlkR2l0U2hhKGNvbnRlbnQpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4geyB0eXBlOiAnZGV0YWNoZWQnLCBzaGE6IGNvbnRlbnQgfVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gcmVzb2x2ZVJlZiBcdTIwMTQgcmVzb2x2ZSBsb29zZS9wYWNrZWQgcmVmcyB0byBTSEFzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBSZXNvbHZlIGEgZ2l0IHJlZiAoZS5nLiBgcmVmcy9oZWFkcy9tYWluYCkgdG8gYSBjb21taXQgU0hBLlxuICogQ2hlY2tzIGxvb3NlIHJlZiBmaWxlcyBmaXJzdCwgdGhlbiBmYWxscyBiYWNrIHRvIHBhY2tlZC1yZWZzLlxuICogRm9sbG93cyBzeW1yZWZzIChlLmcuIGByZWY6IHJlZnMvcmVtb3Rlcy9vcmlnaW4vbWFpbmApLlxuICpcbiAqIEZvciB3b3JrdHJlZXMsIHJlZnMgbGl2ZSBpbiB0aGUgY29tbW9uIGdpdGRpciAocG9pbnRlZCB0byBieSB0aGVcbiAqIGBjb21tb25kaXJgIGZpbGUpLCBub3QgdGhlIHdvcmt0cmVlLXNwZWNpZmljIGdpdGRpci4gV2UgY2hlY2sgdGhlXG4gKiB3b3JrdHJlZSBnaXRkaXIgZmlyc3QsIHRoZW4gZmFsbCBiYWNrIHRvIHRoZSBjb21tb24gZGlyLlxuICpcbiAqIFBhY2tlZC1yZWZzIGZvcm1hdCAocGVyIHBhY2tlZC1iYWNrZW5kLmMpOlxuICogICAtIEhlYWRlcjogYCMgcGFjay1yZWZzIHdpdGg6IDx0cmFpdHM+XFxuYFxuICogICAtIEVudHJpZXM6IGA8NDAtaGV4LXNoYT4gPHJlZm5hbWU+XFxuYFxuICogICAtIFBlZWxlZDogIGBePDQwLWhleC1zaGE+XFxuYCAoYWZ0ZXIgYW5ub3RhdGVkIHRhZyBlbnRyaWVzKVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZVJlZihcbiAgZ2l0RGlyOiBzdHJpbmcsXG4gIHJlZjogc3RyaW5nLFxuKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc29sdmVSZWZJbkRpcihnaXREaXIsIHJlZilcbiAgaWYgKHJlc3VsdCkge1xuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIC8vIEZvciB3b3JrdHJlZXM6IHRyeSB0aGUgY29tbW9uIGdpdGRpciB3aGVyZSBzaGFyZWQgcmVmcyBsaXZlXG4gIGNvbnN0IGNvbW1vbkRpciA9IGF3YWl0IGdldENvbW1vbkRpcihnaXREaXIpXG4gIGlmIChjb21tb25EaXIgJiYgY29tbW9uRGlyICE9PSBnaXREaXIpIHtcbiAgICByZXR1cm4gcmVzb2x2ZVJlZkluRGlyKGNvbW1vbkRpciwgcmVmKVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZVJlZkluRGlyKFxuICBkaXI6IHN0cmluZyxcbiAgcmVmOiBzdHJpbmcsXG4pOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgLy8gVHJ5IGxvb3NlIHJlZiBmaWxlXG4gIHRyeSB7XG4gICAgY29uc3QgY29udGVudCA9IChhd2FpdCByZWFkRmlsZShqb2luKGRpciwgcmVmKSwgJ3V0Zi04JykpLnRyaW0oKVxuICAgIGlmIChjb250ZW50LnN0YXJ0c1dpdGgoJ3JlZjonKSkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gY29udGVudC5zbGljZSgncmVmOicubGVuZ3RoKS50cmltKClcbiAgICAgIC8vIFJlamVjdCBwYXRoIHRyYXZlcnNhbCBpbiBhIHRhbXBlcmVkIHN5bXJlZiBjaGFpbi5cbiAgICAgIGlmICghaXNTYWZlUmVmTmFtZSh0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzb2x2ZVJlZihkaXIsIHRhcmdldClcbiAgICB9XG4gICAgLy8gTG9vc2UgcmVmIGNvbnRlbnQgc2hvdWxkIGJlIGEgcmF3IFNIQS4gVmFsaWRhdGU6IGFuIGF0dGFja2VyLWNvbnRyb2xsZWRcbiAgICAvLyByZWYgZmlsZSBjb3VsZCBjb250YWluIHNoZWxsIG1ldGFjaGFyYWN0ZXJzLlxuICAgIGlmICghaXNWYWxpZEdpdFNoYShjb250ZW50KSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRlbnRcbiAgfSBjYXRjaCB7XG4gICAgLy8gTG9vc2UgcmVmIGRvZXNuJ3QgZXhpc3QsIHRyeSBwYWNrZWQtcmVmc1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBwYWNrZWQgPSBhd2FpdCByZWFkRmlsZShqb2luKGRpciwgJ3BhY2tlZC1yZWZzJyksICd1dGYtOCcpXG4gICAgZm9yIChjb25zdCBsaW5lIG9mIHBhY2tlZC5zcGxpdCgnXFxuJykpIHtcbiAgICAgIGlmIChsaW5lLnN0YXJ0c1dpdGgoJyMnKSB8fCBsaW5lLnN0YXJ0c1dpdGgoJ14nKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgY29uc3Qgc3BhY2VJZHggPSBsaW5lLmluZGV4T2YoJyAnKVxuICAgICAgaWYgKHNwYWNlSWR4ID09PSAtMSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgaWYgKGxpbmUuc2xpY2Uoc3BhY2VJZHggKyAxKSA9PT0gcmVmKSB7XG4gICAgICAgIGNvbnN0IHNoYSA9IGxpbmUuc2xpY2UoMCwgc3BhY2VJZHgpXG4gICAgICAgIHJldHVybiBpc1ZhbGlkR2l0U2hhKHNoYSkgPyBzaGEgOiBudWxsXG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIHtcbiAgICAvLyBObyBwYWNrZWQtcmVmc1xuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuLyoqXG4gKiBSZWFkIHRoZSBgY29tbW9uZGlyYCBmaWxlIHRvIGZpbmQgdGhlIHNoYXJlZCBnaXQgZGlyZWN0b3J5LlxuICogSW4gYSB3b3JrdHJlZSwgdGhpcyBwb2ludHMgdG8gdGhlIG1haW4gcmVwbydzIC5naXQgZGlyLlxuICogUmV0dXJucyBudWxsIGlmIG5vIGNvbW1vbmRpciBmaWxlIGV4aXN0cyAocmVndWxhciByZXBvKS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbW1vbkRpcihnaXREaXI6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICB0cnkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSAoYXdhaXQgcmVhZEZpbGUoam9pbihnaXREaXIsICdjb21tb25kaXInKSwgJ3V0Zi04JykpLnRyaW0oKVxuICAgIHJldHVybiByZXNvbHZlKGdpdERpciwgY29udGVudClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG4vKipcbiAqIFJlYWQgYSByYXcgc3ltcmVmIGZpbGUgYW5kIGV4dHJhY3QgdGhlIGJyYW5jaCBuYW1lIGFmdGVyIGEga25vd24gcHJlZml4LlxuICogUmV0dXJucyBudWxsIGlmIHRoZSByZWYgZG9lc24ndCBleGlzdCwgaXNuJ3QgYSBzeW1yZWYsIG9yIGRvZXNuJ3QgbWF0Y2ggdGhlIHByZWZpeC5cbiAqIENoZWNrcyBsb29zZSBmaWxlIG9ubHkgXHUyMDE0IHBhY2tlZC1yZWZzIGRvZXNuJ3Qgc3RvcmUgc3ltcmVmcy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlYWRSYXdTeW1yZWYoXG4gIGdpdERpcjogc3RyaW5nLFxuICByZWZQYXRoOiBzdHJpbmcsXG4gIGJyYW5jaFByZWZpeDogc3RyaW5nLFxuKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgY29udGVudCA9IChhd2FpdCByZWFkRmlsZShqb2luKGdpdERpciwgcmVmUGF0aCksICd1dGYtOCcpKS50cmltKClcbiAgICBpZiAoY29udGVudC5zdGFydHNXaXRoKCdyZWY6JykpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGNvbnRlbnQuc2xpY2UoJ3JlZjonLmxlbmd0aCkudHJpbSgpXG4gICAgICBpZiAodGFyZ2V0LnN0YXJ0c1dpdGgoYnJhbmNoUHJlZml4KSkge1xuICAgICAgICBjb25zdCBuYW1lID0gdGFyZ2V0LnNsaWNlKGJyYW5jaFByZWZpeC5sZW5ndGgpXG4gICAgICAgIC8vIFJlamVjdCBwYXRoIHRyYXZlcnNhbCBhbmQgYXJndW1lbnQgaW5qZWN0aW9uIGZyb20gYSB0YW1wZXJlZCBzeW1yZWYuXG4gICAgICAgIGlmICghaXNTYWZlUmVmTmFtZShuYW1lKSkge1xuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5hbWVcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2gge1xuICAgIC8vIE5vdCBhIGxvb3NlIHJlZlxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gR2l0RmlsZVdhdGNoZXIgXHUyMDE0IHdhdGNoZXMgZ2l0IGZpbGVzIGFuZCBjYWNoZXMgZGVyaXZlZCB2YWx1ZXMuXG4vLyBMYXppbHkgaW5pdGlhbGl6ZWQgb24gZmlyc3QgY2FjaGUgYWNjZXNzLiBJbnZhbGlkYXRlcyBhbGwgY2FjaGVkXG4vLyB2YWx1ZXMgd2hlbiBhbnkgd2F0Y2hlZCBmaWxlIGNoYW5nZXMuXG4vL1xuLy8gV2F0Y2hlczpcbi8vICAgLmdpdC9IRUFEICAgICAgICAgIFx1MjAxNCBicmFuY2ggc3dpdGNoZXMsIGRldGFjaGVkIEhFQURcbi8vICAgLmdpdC9jb25maWcgICAgICAgIFx1MjAxNCByZW1vdGUgVVJMIGNoYW5nZXNcbi8vICAgLmdpdC9yZWZzL2hlYWRzLzxicmFuY2g+IFx1MjAxNCBuZXcgY29tbWl0cyBvbiB0aGUgY3VycmVudCBicmFuY2hcbi8vXG4vLyBXaGVuIEhFQUQgY2hhbmdlcyAoYnJhbmNoIHN3aXRjaCksIHRoZSBicmFuY2ggcmVmIHdhdGNoZXIgaXMgdXBkYXRlZFxuLy8gdG8gdHJhY2sgdGhlIG5ldyBicmFuY2gncyByZWYgZmlsZS5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG50eXBlIENhY2hlRW50cnk8VD4gPSB7XG4gIHZhbHVlOiBUXG4gIGRpcnR5OiBib29sZWFuXG4gIGNvbXB1dGU6ICgpID0+IFByb21pc2U8VD5cbn1cblxuY29uc3QgV0FUQ0hfSU5URVJWQUxfTVMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnID8gMTAgOiAxMDAwXG5cbmNsYXNzIEdpdEZpbGVXYXRjaGVyIHtcbiAgcHJpdmF0ZSBnaXREaXI6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgY29tbW9uRGlyOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIGluaXRpYWxpemVkID0gZmFsc2VcbiAgcHJpdmF0ZSBpbml0UHJvbWlzZTogUHJvbWlzZTx2b2lkPiB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgd2F0Y2hlZFBhdGhzOiBzdHJpbmdbXSA9IFtdXG4gIHByaXZhdGUgYnJhbmNoUmVmUGF0aDogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgcHJpdmF0ZSBjYWNoZSA9IG5ldyBNYXA8c3RyaW5nLCBDYWNoZUVudHJ5PHVua25vd24+PigpXG5cbiAgYXN5bmMgZW5zdXJlU3RhcnRlZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLmluaXRQcm9taXNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbml0UHJvbWlzZVxuICAgIH1cbiAgICB0aGlzLmluaXRQcm9taXNlID0gdGhpcy5zdGFydCgpXG4gICAgcmV0dXJuIHRoaXMuaW5pdFByb21pc2VcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc3RhcnQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5naXREaXIgPSBhd2FpdCByZXNvbHZlR2l0RGlyKClcbiAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZVxuICAgIGlmICghdGhpcy5naXREaXIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEluIGEgd29ya3RyZWUsIGJyYW5jaCByZWZzIGFuZCB0aGUgbWFpbiBjb25maWcgYXJlIHNoYXJlZCBhbmQgbGl2ZSBpblxuICAgIC8vIGNvbW1vbkRpciwgbm90IHRoZSBwZXItd29ya3RyZWUgZ2l0RGlyLiBSZXNvbHZlIG9uY2Ugc28gd2UgZG9uJ3RcbiAgICAvLyByZS1yZWFkIHRoZSBjb21tb25kaXIgZmlsZSBvbiBldmVyeSBicmFuY2ggc3dpdGNoLlxuICAgIHRoaXMuY29tbW9uRGlyID0gYXdhaXQgZ2V0Q29tbW9uRGlyKHRoaXMuZ2l0RGlyKVxuXG4gICAgLy8gV2F0Y2ggLmdpdC9IRUFEIGFuZCAuZ2l0L2NvbmZpZ1xuICAgIHRoaXMud2F0Y2hQYXRoKGpvaW4odGhpcy5naXREaXIsICdIRUFEJyksICgpID0+IHtcbiAgICAgIHZvaWQgdGhpcy5vbkhlYWRDaGFuZ2VkKClcbiAgICB9KVxuICAgIC8vIENvbmZpZyAocmVtb3RlIFVSTHMpIGxpdmVzIGluIGNvbW1vbkRpciBmb3Igd29ya3RyZWVzXG4gICAgdGhpcy53YXRjaFBhdGgoam9pbih0aGlzLmNvbW1vbkRpciA/PyB0aGlzLmdpdERpciwgJ2NvbmZpZycpLCAoKSA9PiB7XG4gICAgICB0aGlzLmludmFsaWRhdGUoKVxuICAgIH0pXG5cbiAgICAvLyBXYXRjaCB0aGUgY3VycmVudCBicmFuY2gncyByZWYgZmlsZSBmb3IgY29tbWl0IGNoYW5nZXNcbiAgICBhd2FpdCB0aGlzLndhdGNoQ3VycmVudEJyYW5jaFJlZigpXG5cbiAgICByZWdpc3RlckNsZWFudXAoYXN5bmMgKCkgPT4ge1xuICAgICAgdGhpcy5zdG9wV2F0Y2hpbmcoKVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIHdhdGNoUGF0aChwYXRoOiBzdHJpbmcsIGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy53YXRjaGVkUGF0aHMucHVzaChwYXRoKVxuICAgIHdhdGNoRmlsZShwYXRoLCB7IGludGVydmFsOiBXQVRDSF9JTlRFUlZBTF9NUyB9LCBjYWxsYmFjaylcbiAgfVxuXG4gIC8qKlxuICAgKiBXYXRjaCB0aGUgbG9vc2UgcmVmIGZpbGUgZm9yIHRoZSBjdXJyZW50IGJyYW5jaC5cbiAgICogQ2FsbGVkIG9uIHN0YXJ0dXAgYW5kIHdoZW5ldmVyIEhFQUQgY2hhbmdlcyAoYnJhbmNoIHN3aXRjaCkuXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIHdhdGNoQ3VycmVudEJyYW5jaFJlZigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIXRoaXMuZ2l0RGlyKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoZWFkID0gYXdhaXQgcmVhZEdpdEhlYWQodGhpcy5naXREaXIpXG4gICAgLy8gQnJhbmNoIHJlZnMgbGl2ZSBpbiBjb21tb25EaXIgZm9yIHdvcmt0cmVlcyAoZ2l0RGlyIGZvciByZWd1bGFyIHJlcG9zKVxuICAgIGNvbnN0IHJlZnNEaXIgPSB0aGlzLmNvbW1vbkRpciA/PyB0aGlzLmdpdERpclxuICAgIGNvbnN0IHJlZlBhdGggPVxuICAgICAgaGVhZD8udHlwZSA9PT0gJ2JyYW5jaCcgPyBqb2luKHJlZnNEaXIsICdyZWZzJywgJ2hlYWRzJywgaGVhZC5uYW1lKSA6IG51bGxcblxuICAgIC8vIEFscmVhZHkgd2F0Y2hpbmcgdGhpcyByZWYgKG9yIGFscmVhZHkgbm90IHdhdGNoaW5nIGFueXRoaW5nKVxuICAgIGlmIChyZWZQYXRoID09PSB0aGlzLmJyYW5jaFJlZlBhdGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIFN0b3Agd2F0Y2hpbmcgb2xkIGJyYW5jaCByZWYuIFJ1bnMgZm9yIGJyYW5jaFx1MjE5MmJyYW5jaCBBTkRcbiAgICAvLyBicmFuY2hcdTIxOTJkZXRhY2hlZCAoY2hlY2tvdXQgLS1kZXRhY2gsIHJlYmFzZSwgYmlzZWN0KS5cbiAgICBpZiAodGhpcy5icmFuY2hSZWZQYXRoKSB7XG4gICAgICB1bndhdGNoRmlsZSh0aGlzLmJyYW5jaFJlZlBhdGgpXG4gICAgICB0aGlzLndhdGNoZWRQYXRocyA9IHRoaXMud2F0Y2hlZFBhdGhzLmZpbHRlcihcbiAgICAgICAgcCA9PiBwICE9PSB0aGlzLmJyYW5jaFJlZlBhdGgsXG4gICAgICApXG4gICAgfVxuXG4gICAgdGhpcy5icmFuY2hSZWZQYXRoID0gcmVmUGF0aFxuXG4gICAgaWYgKCFyZWZQYXRoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBUaGUgcmVmIGZpbGUgbWF5IG5vdCBleGlzdCB5ZXQgKG5ldyBicmFuY2ggYmVmb3JlIGZpcnN0IGNvbW1pdCkuXG4gICAgLy8gd2F0Y2hGaWxlIHdvcmtzIG9uIG5vbmV4aXN0ZW50IGZpbGVzIFx1MjAxNCBpdCBmaXJlcyB3aGVuIHRoZSBmaWxlIGFwcGVhcnMuXG4gICAgdGhpcy53YXRjaFBhdGgocmVmUGF0aCwgKCkgPT4ge1xuICAgICAgdGhpcy5pbnZhbGlkYXRlKClcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBvbkhlYWRDaGFuZ2VkKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIEhFQUQgY2hhbmdlZCBcdTIwMTQgY291bGQgYmUgYSBicmFuY2ggc3dpdGNoIG9yIGRldGFjaC5cbiAgICAvLyBEZWZlciBmaWxlIEkvTyAocmVhZEdpdEhlYWQsIHdhdGNoRmlsZSBzZXR1cCkgdW50aWwgc2Nyb2xsIHNldHRsZXMgc29cbiAgICAvLyB3YXRjaEZpbGUgY2FsbGJhY2tzIHRoYXQgbGFuZCBtaWQtc2Nyb2xsIGRvbid0IGNvbXBldGUgZm9yIHRoZSBldmVudFxuICAgIC8vIGxvb3AuIGludmFsaWRhdGUoKSBpcyBjaGVhcCAoanVzdCBtYXJrcyBkaXJ0eSkgc28gZG8gaXQgZmlyc3QgXHUyMDE0IHRoZVxuICAgIC8vIGNhY2hlIGNvcnJlY3RseSBzZXJ2ZXMgc3RhbGUtbWFya2VkIHZhbHVlcyB1bnRpbCB0aGUgd2F0Y2hlciB1cGRhdGVzLlxuICAgIHRoaXMuaW52YWxpZGF0ZSgpXG4gICAgYXdhaXQgd2FpdEZvclNjcm9sbElkbGUoKVxuICAgIGF3YWl0IHRoaXMud2F0Y2hDdXJyZW50QnJhbmNoUmVmKClcbiAgfVxuXG4gIHByaXZhdGUgaW52YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuY2FjaGUudmFsdWVzKCkpIHtcbiAgICAgIGVudHJ5LmRpcnR5ID0gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RvcFdhdGNoaW5nKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgcGF0aCBvZiB0aGlzLndhdGNoZWRQYXRocykge1xuICAgICAgdW53YXRjaEZpbGUocGF0aClcbiAgICB9XG4gICAgdGhpcy53YXRjaGVkUGF0aHMgPSBbXVxuICAgIHRoaXMuYnJhbmNoUmVmUGF0aCA9IG51bGxcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBjYWNoZWQgdmFsdWUgYnkga2V5LiBPbiBmaXJzdCBjYWxsIGZvciBhIGtleSwgY29tcHV0ZXMgYW5kIGNhY2hlcyBpdC5cbiAgICogU3Vic2VxdWVudCBjYWxscyByZXR1cm4gdGhlIGNhY2hlZCB2YWx1ZSB1bnRpbCBhIHdhdGNoZWQgZmlsZSBjaGFuZ2VzLFxuICAgKiB3aGljaCBtYXJrcyB0aGUgZW50cnkgZGlydHkuIFRoZSBuZXh0IGdldCgpIHJlLWNvbXB1dGVzIGZyb20gZGlzay5cbiAgICpcbiAgICogUmFjZSBjb25kaXRpb24gaGFuZGxpbmc6IGRpcnR5IGlzIGNsZWFyZWQgQkVGT1JFIHRoZSBhc3luYyBjb21wdXRlIHN0YXJ0cy5cbiAgICogSWYgYSBmaWxlIGNoYW5nZSBhcnJpdmVzIGR1cmluZyBjb21wdXRlLCBpdCByZS1zZXRzIGRpcnR5LCBzbyB0aGUgbmV4dFxuICAgKiBnZXQoKSB3aWxsIHJlLXJlYWQgYWdhaW4gcmF0aGVyIHRoYW4gc2VydmluZyBhIHN0YWxlIHZhbHVlLlxuICAgKi9cbiAgYXN5bmMgZ2V0PFQ+KGtleTogc3RyaW5nLCBjb21wdXRlOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgYXdhaXQgdGhpcy5lbnN1cmVTdGFydGVkKClcbiAgICBjb25zdCBleGlzdGluZyA9IHRoaXMuY2FjaGUuZ2V0KGtleSlcbiAgICBpZiAoZXhpc3RpbmcgJiYgIWV4aXN0aW5nLmRpcnR5KSB7XG4gICAgICByZXR1cm4gZXhpc3RpbmcudmFsdWUgYXMgVFxuICAgIH1cbiAgICAvLyBDbGVhciBkaXJ0eSBiZWZvcmUgY29tcHV0ZSBcdTIwMTQgaWYgdGhlIGZpbGUgY2hhbmdlcyBhZ2FpbiBkdXJpbmcgdGhlXG4gICAgLy8gYXN5bmMgcmVhZCwgaW52YWxpZGF0ZSgpIHdpbGwgcmUtc2V0IGRpcnR5IGFuZCB3ZSdsbCByZS1yZWFkIG9uXG4gICAgLy8gdGhlIG5leHQgZ2V0KCkgY2FsbC5cbiAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgIGV4aXN0aW5nLmRpcnR5ID0gZmFsc2VcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSBhd2FpdCBjb21wdXRlKClcbiAgICAvLyBPbmx5IHVwZGF0ZSB0aGUgY2FjaGVkIHZhbHVlIGlmIG5vIG5ldyBpbnZhbGlkYXRpb24gYXJyaXZlZCBkdXJpbmcgY29tcHV0ZVxuICAgIGNvbnN0IGVudHJ5ID0gdGhpcy5jYWNoZS5nZXQoa2V5KVxuICAgIGlmIChlbnRyeSAmJiAhZW50cnkuZGlydHkpIHtcbiAgICAgIGVudHJ5LnZhbHVlID0gdmFsdWVcbiAgICB9XG4gICAgaWYgKCFlbnRyeSkge1xuICAgICAgdGhpcy5jYWNoZS5zZXQoa2V5LCB7IHZhbHVlLCBkaXJ0eTogZmFsc2UsIGNvbXB1dGUgfSlcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvKiogUmVzZXQgYWxsIHN0YXRlLiBTdG9wcyBmaWxlIHdhdGNoZXJzLiBGb3IgdGVzdGluZyBvbmx5LiAqL1xuICByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3BXYXRjaGluZygpXG4gICAgdGhpcy5jYWNoZS5jbGVhcigpXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlXG4gICAgdGhpcy5pbml0UHJvbWlzZSA9IG51bGxcbiAgICB0aGlzLmdpdERpciA9IG51bGxcbiAgICB0aGlzLmNvbW1vbkRpciA9IG51bGxcbiAgfVxufVxuXG5jb25zdCBnaXRXYXRjaGVyID0gbmV3IEdpdEZpbGVXYXRjaGVyKClcblxuYXN5bmMgZnVuY3Rpb24gY29tcHV0ZUJyYW5jaCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCBnaXREaXIgPSBhd2FpdCByZXNvbHZlR2l0RGlyKClcbiAgaWYgKCFnaXREaXIpIHtcbiAgICByZXR1cm4gJ0hFQUQnXG4gIH1cbiAgY29uc3QgaGVhZCA9IGF3YWl0IHJlYWRHaXRIZWFkKGdpdERpcilcbiAgaWYgKCFoZWFkKSB7XG4gICAgcmV0dXJuICdIRUFEJ1xuICB9XG4gIHJldHVybiBoZWFkLnR5cGUgPT09ICdicmFuY2gnID8gaGVhZC5uYW1lIDogJ0hFQUQnXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbXB1dGVIZWFkKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IGdpdERpciA9IGF3YWl0IHJlc29sdmVHaXREaXIoKVxuICBpZiAoIWdpdERpcikge1xuICAgIHJldHVybiAnJ1xuICB9XG4gIGNvbnN0IGhlYWQgPSBhd2FpdCByZWFkR2l0SGVhZChnaXREaXIpXG4gIGlmICghaGVhZCkge1xuICAgIHJldHVybiAnJ1xuICB9XG4gIGlmIChoZWFkLnR5cGUgPT09ICdicmFuY2gnKSB7XG4gICAgcmV0dXJuIChhd2FpdCByZXNvbHZlUmVmKGdpdERpciwgYHJlZnMvaGVhZHMvJHtoZWFkLm5hbWV9YCkpID8/ICcnXG4gIH1cbiAgcmV0dXJuIGhlYWQuc2hhXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbXB1dGVSZW1vdGVVcmwoKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gIGNvbnN0IGdpdERpciA9IGF3YWl0IHJlc29sdmVHaXREaXIoKVxuICBpZiAoIWdpdERpcikge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgY29uc3QgdXJsID0gYXdhaXQgcGFyc2VHaXRDb25maWdWYWx1ZShnaXREaXIsICdyZW1vdGUnLCAnb3JpZ2luJywgJ3VybCcpXG4gIGlmICh1cmwpIHtcbiAgICByZXR1cm4gdXJsXG4gIH1cbiAgLy8gSW4gd29ya3RyZWVzLCB0aGUgY29uZmlnIHdpdGggcmVtb3RlIFVSTHMgaXMgaW4gdGhlIGNvbW1vbiBkaXJcbiAgY29uc3QgY29tbW9uRGlyID0gYXdhaXQgZ2V0Q29tbW9uRGlyKGdpdERpcilcbiAgaWYgKGNvbW1vbkRpciAmJiBjb21tb25EaXIgIT09IGdpdERpcikge1xuICAgIHJldHVybiBwYXJzZUdpdENvbmZpZ1ZhbHVlKGNvbW1vbkRpciwgJ3JlbW90ZScsICdvcmlnaW4nLCAndXJsJylcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5hc3luYyBmdW5jdGlvbiBjb21wdXRlRGVmYXVsdEJyYW5jaCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCBnaXREaXIgPSBhd2FpdCByZXNvbHZlR2l0RGlyKClcbiAgaWYgKCFnaXREaXIpIHtcbiAgICByZXR1cm4gJ21haW4nXG4gIH1cbiAgLy8gcmVmcy9yZW1vdGVzLyBsaXZlcyBpbiBjb21tb25EaXIsIG5vdCB0aGUgcGVyLXdvcmt0cmVlIGdpdERpclxuICBjb25zdCBjb21tb25EaXIgPSAoYXdhaXQgZ2V0Q29tbW9uRGlyKGdpdERpcikpID8/IGdpdERpclxuICBjb25zdCBicmFuY2hGcm9tU3ltcmVmID0gYXdhaXQgcmVhZFJhd1N5bXJlZihcbiAgICBjb21tb25EaXIsXG4gICAgJ3JlZnMvcmVtb3Rlcy9vcmlnaW4vSEVBRCcsXG4gICAgJ3JlZnMvcmVtb3Rlcy9vcmlnaW4vJyxcbiAgKVxuICBpZiAoYnJhbmNoRnJvbVN5bXJlZikge1xuICAgIHJldHVybiBicmFuY2hGcm9tU3ltcmVmXG4gIH1cbiAgZm9yIChjb25zdCBjYW5kaWRhdGUgb2YgWydtYWluJywgJ21hc3RlciddKSB7XG4gICAgY29uc3Qgc2hhID0gYXdhaXQgcmVzb2x2ZVJlZihjb21tb25EaXIsIGByZWZzL3JlbW90ZXMvb3JpZ2luLyR7Y2FuZGlkYXRlfWApXG4gICAgaWYgKHNoYSkge1xuICAgICAgcmV0dXJuIGNhbmRpZGF0ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gJ21haW4nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDYWNoZWRCcmFuY2goKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgcmV0dXJuIGdpdFdhdGNoZXIuZ2V0KCdicmFuY2gnLCBjb21wdXRlQnJhbmNoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FjaGVkSGVhZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICByZXR1cm4gZ2l0V2F0Y2hlci5nZXQoJ2hlYWQnLCBjb21wdXRlSGVhZClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENhY2hlZFJlbW90ZVVybCgpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgcmV0dXJuIGdpdFdhdGNoZXIuZ2V0KCdyZW1vdGVVcmwnLCBjb21wdXRlUmVtb3RlVXJsKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FjaGVkRGVmYXVsdEJyYW5jaCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICByZXR1cm4gZ2l0V2F0Y2hlci5nZXQoJ2RlZmF1bHRCcmFuY2gnLCBjb21wdXRlRGVmYXVsdEJyYW5jaClcbn1cblxuLyoqIFJlc2V0IHRoZSBnaXQgZmlsZSB3YXRjaGVyIHN0YXRlLiBGb3IgdGVzdGluZyBvbmx5LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0R2l0RmlsZVdhdGNoZXIoKTogdm9pZCB7XG4gIGdpdFdhdGNoZXIucmVzZXQoKVxufVxuXG4vKipcbiAqIFJlYWQgdGhlIEhFQUQgU0hBIGZvciBhbiBhcmJpdHJhcnkgZGlyZWN0b3J5IChub3QgdXNpbmcgdGhlIHdhdGNoZXIpLlxuICogVXNlZCBieSBwbHVnaW5zIHRoYXQgbmVlZCB0aGUgSEVBRCBvZiBhIHNwZWNpZmljIHJlcG8sIG5vdCB0aGUgQ1dEIHJlcG8uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIZWFkRm9yRGlyKGN3ZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gIGNvbnN0IGdpdERpciA9IGF3YWl0IHJlc29sdmVHaXREaXIoY3dkKVxuICBpZiAoIWdpdERpcikge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgY29uc3QgaGVhZCA9IGF3YWl0IHJlYWRHaXRIZWFkKGdpdERpcilcbiAgaWYgKCFoZWFkKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBpZiAoaGVhZC50eXBlID09PSAnYnJhbmNoJykge1xuICAgIHJldHVybiByZXNvbHZlUmVmKGdpdERpciwgYHJlZnMvaGVhZHMvJHtoZWFkLm5hbWV9YClcbiAgfVxuICByZXR1cm4gaGVhZC5zaGFcbn1cblxuLyoqXG4gKiBSZWFkIHRoZSBIRUFEIFNIQSBmb3IgYSBnaXQgd29ya3RyZWUgZGlyZWN0b3J5IChub3QgdGhlIG1haW4gcmVwbykuXG4gKlxuICogVW5saWtlIGBnZXRIZWFkRm9yRGlyYCwgdGhpcyByZWFkcyBgPHdvcmt0cmVlUGF0aD4vLmdpdGAgZGlyZWN0bHkgYXMgYVxuICogYGdpdGRpcjpgIHBvaW50ZXIgZmlsZSwgd2l0aCBubyB1cHdhcmQgd2Fsay4gYGdldEhlYWRGb3JEaXJgIHdhbGtzIHVwd2FyZFxuICogdmlhIGBmaW5kR2l0Um9vdGAgYW5kIHdvdWxkIGZpbmQgdGhlIHBhcmVudCByZXBvJ3MgYC5naXRgIHdoZW4gdGhlXG4gKiB3b3JrdHJlZSBwYXRoIGRvZXNuJ3QgZXhpc3QgXHUyMDE0IG1pc3JlcG9ydGluZyB0aGUgcGFyZW50IEhFQUQgYXMgdGhlIHdvcmt0cmVlJ3MuXG4gKlxuICogUmV0dXJucyBudWxsIGlmIHRoZSB3b3JrdHJlZSBkb2Vzbid0IGV4aXN0IChgLmdpdGAgcG9pbnRlciBFTk9FTlQpIG9yIGlzXG4gKiBtYWxmb3JtZWQuIENhbGxlciBjYW4gdHJlYXQgbnVsbCBhcyBcIm5vdCBhIHZhbGlkIHdvcmt0cmVlXCIuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWFkV29ya3RyZWVIZWFkU2hhKFxuICB3b3JrdHJlZVBhdGg6IHN0cmluZyxcbik6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICBsZXQgZ2l0RGlyOiBzdHJpbmdcbiAgdHJ5IHtcbiAgICBjb25zdCBwdHIgPSAoYXdhaXQgcmVhZEZpbGUoam9pbih3b3JrdHJlZVBhdGgsICcuZ2l0JyksICd1dGYtOCcpKS50cmltKClcbiAgICBpZiAoIXB0ci5zdGFydHNXaXRoKCdnaXRkaXI6JykpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGdpdERpciA9IHJlc29sdmUod29ya3RyZWVQYXRoLCBwdHIuc2xpY2UoJ2dpdGRpcjonLmxlbmd0aCkudHJpbSgpKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIGNvbnN0IGhlYWQgPSBhd2FpdCByZWFkR2l0SGVhZChnaXREaXIpXG4gIGlmICghaGVhZCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgaWYgKGhlYWQudHlwZSA9PT0gJ2JyYW5jaCcpIHtcbiAgICByZXR1cm4gcmVzb2x2ZVJlZihnaXREaXIsIGByZWZzL2hlYWRzLyR7aGVhZC5uYW1lfWApXG4gIH1cbiAgcmV0dXJuIGhlYWQuc2hhXG59XG5cbi8qKlxuICogUmVhZCB0aGUgcmVtb3RlIG9yaWdpbiBVUkwgZm9yIGFuIGFyYml0cmFyeSBkaXJlY3RvcnkgdmlhIC5naXQvY29uZmlnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVtb3RlVXJsRm9yRGlyKGN3ZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gIGNvbnN0IGdpdERpciA9IGF3YWl0IHJlc29sdmVHaXREaXIoY3dkKVxuICBpZiAoIWdpdERpcikge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgY29uc3QgdXJsID0gYXdhaXQgcGFyc2VHaXRDb25maWdWYWx1ZShnaXREaXIsICdyZW1vdGUnLCAnb3JpZ2luJywgJ3VybCcpXG4gIGlmICh1cmwpIHtcbiAgICByZXR1cm4gdXJsXG4gIH1cbiAgLy8gSW4gd29ya3RyZWVzLCB0aGUgY29uZmlnIHdpdGggcmVtb3RlIFVSTHMgaXMgaW4gdGhlIGNvbW1vbiBkaXJcbiAgY29uc3QgY29tbW9uRGlyID0gYXdhaXQgZ2V0Q29tbW9uRGlyKGdpdERpcilcbiAgaWYgKGNvbW1vbkRpciAmJiBjb21tb25EaXIgIT09IGdpdERpcikge1xuICAgIHJldHVybiBwYXJzZUdpdENvbmZpZ1ZhbHVlKGNvbW1vbkRpciwgJ3JlbW90ZScsICdvcmlnaW4nLCAndXJsJylcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG4vKipcbiAqIENoZWNrIGlmIHdlJ3JlIGluIGEgc2hhbGxvdyBjbG9uZSBieSBsb29raW5nIGZvciA8Y29tbW9uRGlyPi9zaGFsbG93LlxuICogUGVyIGdpdCdzIHNoYWxsb3cuYywgbWVyZSBleGlzdGVuY2Ugb2YgdGhlIGZpbGUgbWVhbnMgc2hhbGxvdy5cbiAqIFRoZSBzaGFsbG93IGZpbGUgbGl2ZXMgaW4gY29tbW9uRGlyLCBub3QgdGhlIHBlci13b3JrdHJlZSBnaXREaXIuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc1NoYWxsb3dDbG9uZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgY29uc3QgZ2l0RGlyID0gYXdhaXQgcmVzb2x2ZUdpdERpcigpXG4gIGlmICghZ2l0RGlyKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgY29uc3QgY29tbW9uRGlyID0gKGF3YWl0IGdldENvbW1vbkRpcihnaXREaXIpKSA/PyBnaXREaXJcbiAgdHJ5IHtcbiAgICBhd2FpdCBzdGF0KGpvaW4oY29tbW9uRGlyLCAnc2hhbGxvdycpKVxuICAgIHJldHVybiB0cnVlXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8qKlxuICogQ291bnQgd29ya3RyZWVzIGJ5IHJlYWRpbmcgPGNvbW1vbkRpcj4vd29ya3RyZWVzLyBkaXJlY3RvcnkuXG4gKiBUaGUgd29ya3RyZWVzLyBkaXJlY3RvcnkgbGl2ZXMgaW4gY29tbW9uRGlyLCBub3QgdGhlIHBlci13b3JrdHJlZSBnaXREaXIuXG4gKiBUaGUgbWFpbiB3b3JrdHJlZSBpcyBub3QgbGlzdGVkIHRoZXJlLCBzbyBhZGQgMS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdvcmt0cmVlQ291bnRGcm9tRnMoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBnaXREaXIgPSBhd2FpdCByZXNvbHZlR2l0RGlyKClcbiAgICBpZiAoIWdpdERpcikge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gICAgY29uc3QgY29tbW9uRGlyID0gKGF3YWl0IGdldENvbW1vbkRpcihnaXREaXIpKSA/PyBnaXREaXJcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgcmVhZGRpcihqb2luKGNvbW1vbkRpciwgJ3dvcmt0cmVlcycpKVxuICAgIHJldHVybiBlbnRyaWVzLmxlbmd0aCArIDFcbiAgfSBjYXRjaCB7XG4gICAgLy8gTm8gd29ya3RyZWVzIGRpcmVjdG9yeSBtZWFucyBvbmx5IHRoZSBtYWluIHdvcmt0cmVlXG4gICAgcmV0dXJuIDFcbiAgfVxufVxuIiwgImltcG9ydCB7IGNyZWF0ZUhhc2ggfSBmcm9tICdjcnlwdG8nXG5pbXBvcnQgeyByZWFkRmlsZVN5bmMsIHJlYWxwYXRoU3luYywgc3RhdFN5bmMgfSBmcm9tICdmcydcbmltcG9ydCB7IG9wZW4sIHJlYWRGaWxlLCByZWFscGF0aCwgc3RhdCB9IGZyb20gJ2ZzL3Byb21pc2VzJ1xuaW1wb3J0IG1lbW9pemUgZnJvbSAnbG9kYXNoLWVzL21lbW9pemUuanMnXG5pbXBvcnQgeyBiYXNlbmFtZSwgZGlybmFtZSwgam9pbiwgcmVzb2x2ZSwgc2VwIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IGhhc0JpbmFyeUV4dGVuc2lvbiwgaXNCaW5hcnlDb250ZW50IH0gZnJvbSAnLi4vY29uc3RhbnRzL2ZpbGVzLmpzJ1xuaW1wb3J0IHsgZ2V0Q3dkIH0gZnJvbSAnLi9jd2QuanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuL2RlYnVnLmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSB9IGZyb20gJy4vZGlhZ0xvZ3MuanMnXG5pbXBvcnQgeyBleGVjRmlsZU5vVGhyb3cgfSBmcm9tICcuL2V4ZWNGaWxlTm9UaHJvdy5qcydcbmltcG9ydCB7IGdldEZzSW1wbGVtZW50YXRpb24gfSBmcm9tICcuL2ZzT3BlcmF0aW9ucy5qcydcbmltcG9ydCB7XG4gIGdldENhY2hlZEJyYW5jaCxcbiAgZ2V0Q2FjaGVkRGVmYXVsdEJyYW5jaCxcbiAgZ2V0Q2FjaGVkSGVhZCxcbiAgZ2V0Q2FjaGVkUmVtb3RlVXJsLFxuICBnZXRXb3JrdHJlZUNvdW50RnJvbUZzLFxuICBpc1NoYWxsb3dDbG9uZSBhcyBpc1NoYWxsb3dDbG9uZUZzLFxuICByZXNvbHZlR2l0RGlyLFxufSBmcm9tICcuL2dpdC9naXRGaWxlc3lzdGVtLmpzJ1xuaW1wb3J0IHsgbG9nRXJyb3IgfSBmcm9tICcuL2xvZy5qcydcbmltcG9ydCB7IG1lbW9pemVXaXRoTFJVIH0gZnJvbSAnLi9tZW1vaXplLmpzJ1xuaW1wb3J0IHsgd2hpY2hTeW5jIH0gZnJvbSAnLi93aGljaC5qcydcblxuY29uc3QgR0lUX1JPT1RfTk9UX0ZPVU5EID0gU3ltYm9sKCdnaXQtcm9vdC1ub3QtZm91bmQnKVxuXG5jb25zdCBmaW5kR2l0Um9vdEltcGwgPSBtZW1vaXplV2l0aExSVShcbiAgKHN0YXJ0UGF0aDogc3RyaW5nKTogc3RyaW5nIHwgdHlwZW9mIEdJVF9ST09UX05PVF9GT1VORCA9PiB7XG4gICAgY29uc3Qgc3RhcnRUaW1lID0gRGF0ZS5ub3coKVxuICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2luZm8nLCAnZmluZF9naXRfcm9vdF9zdGFydGVkJylcblxuICAgIGxldCBjdXJyZW50ID0gcmVzb2x2ZShzdGFydFBhdGgpXG4gICAgY29uc3Qgcm9vdCA9IGN1cnJlbnQuc3Vic3RyaW5nKDAsIGN1cnJlbnQuaW5kZXhPZihzZXApICsgMSkgfHwgc2VwXG4gICAgbGV0IHN0YXRDb3VudCA9IDBcblxuICAgIHdoaWxlIChjdXJyZW50ICE9PSByb290KSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBnaXRQYXRoID0gam9pbihjdXJyZW50LCAnLmdpdCcpXG4gICAgICAgIHN0YXRDb3VudCsrXG4gICAgICAgIGNvbnN0IHN0YXQgPSBzdGF0U3luYyhnaXRQYXRoKVxuICAgICAgICAvLyAuZ2l0IGNhbiBiZSBhIGRpcmVjdG9yeSAocmVndWxhciByZXBvKSBvciBmaWxlICh3b3JrdHJlZS9zdWJtb2R1bGUpXG4gICAgICAgIGlmIChzdGF0LmlzRGlyZWN0b3J5KCkgfHwgc3RhdC5pc0ZpbGUoKSkge1xuICAgICAgICAgIGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkoJ2luZm8nLCAnZmluZF9naXRfcm9vdF9jb21wbGV0ZWQnLCB7XG4gICAgICAgICAgICBkdXJhdGlvbl9tczogRGF0ZS5ub3coKSAtIHN0YXJ0VGltZSxcbiAgICAgICAgICAgIHN0YXRfY291bnQ6IHN0YXRDb3VudCxcbiAgICAgICAgICAgIGZvdW5kOiB0cnVlLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIGN1cnJlbnQubm9ybWFsaXplKCdORkMnKVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gLmdpdCBkb2Vzbid0IGV4aXN0IGF0IHRoaXMgbGV2ZWwsIGNvbnRpbnVlIHVwXG4gICAgICB9XG4gICAgICBjb25zdCBwYXJlbnQgPSBkaXJuYW1lKGN1cnJlbnQpXG4gICAgICBpZiAocGFyZW50ID09PSBjdXJyZW50KSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjdXJyZW50ID0gcGFyZW50XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgcm9vdCBkaXJlY3RvcnkgYXMgd2VsbFxuICAgIHRyeSB7XG4gICAgICBjb25zdCBnaXRQYXRoID0gam9pbihyb290LCAnLmdpdCcpXG4gICAgICBzdGF0Q291bnQrK1xuICAgICAgY29uc3Qgc3RhdCA9IHN0YXRTeW5jKGdpdFBhdGgpXG4gICAgICBpZiAoc3RhdC5pc0RpcmVjdG9yeSgpIHx8IHN0YXQuaXNGaWxlKCkpIHtcbiAgICAgICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnaW5mbycsICdmaW5kX2dpdF9yb290X2NvbXBsZXRlZCcsIHtcbiAgICAgICAgICBkdXJhdGlvbl9tczogRGF0ZS5ub3coKSAtIHN0YXJ0VGltZSxcbiAgICAgICAgICBzdGF0X2NvdW50OiBzdGF0Q291bnQsXG4gICAgICAgICAgZm91bmQ6IHRydWUsXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByb290Lm5vcm1hbGl6ZSgnTkZDJylcbiAgICAgIH1cbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIC5naXQgZG9lc24ndCBleGlzdCBhdCByb290XG4gICAgfVxuXG4gICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnaW5mbycsICdmaW5kX2dpdF9yb290X2NvbXBsZXRlZCcsIHtcbiAgICAgIGR1cmF0aW9uX21zOiBEYXRlLm5vdygpIC0gc3RhcnRUaW1lLFxuICAgICAgc3RhdF9jb3VudDogc3RhdENvdW50LFxuICAgICAgZm91bmQ6IGZhbHNlLFxuICAgIH0pXG4gICAgcmV0dXJuIEdJVF9ST09UX05PVF9GT1VORFxuICB9LFxuICBwYXRoID0+IHBhdGgsXG4gIDUwLFxuKVxuXG4vKipcbiAqIEZpbmQgdGhlIGdpdCByb290IGJ5IHdhbGtpbmcgdXAgdGhlIGRpcmVjdG9yeSB0cmVlLlxuICogTG9va3MgZm9yIGEgLmdpdCBkaXJlY3Rvcnkgb3IgZmlsZSAod29ya3RyZWVzL3N1Ym1vZHVsZXMgdXNlIGEgZmlsZSkuXG4gKiBSZXR1cm5zIHRoZSBkaXJlY3RvcnkgY29udGFpbmluZyAuZ2l0LCBvciBudWxsIGlmIG5vdCBmb3VuZC5cbiAqXG4gKiBNZW1vaXplZCBwZXIgc3RhcnRQYXRoIHdpdGggYW4gTFJVIGNhY2hlIChtYXggNTAgZW50cmllcykgdG8gcHJldmVudFxuICogdW5ib3VuZGVkIGdyb3d0aCBcdTIwMTQgZ2l0RGlmZiBjYWxscyB0aGlzIHdpdGggZGlybmFtZShmaWxlKSwgc28gZWRpdGluZyBtYW55XG4gKiBmaWxlcyBhY3Jvc3MgZGlmZmVyZW50IGRpcmVjdG9yaWVzIHdvdWxkIG90aGVyd2lzZSBhY2N1bXVsYXRlIGVudHJpZXMgZm9yZXZlci5cbiAqL1xuZXhwb3J0IGNvbnN0IGZpbmRHaXRSb290ID0gY3JlYXRlRmluZEdpdFJvb3QoKVxuXG5mdW5jdGlvbiBjcmVhdGVGaW5kR2l0Um9vdCgpOiB7XG4gIChzdGFydFBhdGg6IHN0cmluZyk6IHN0cmluZyB8IG51bGxcbiAgY2FjaGU6IHR5cGVvZiBmaW5kR2l0Um9vdEltcGwuY2FjaGVcbn0ge1xuICBmdW5jdGlvbiB3cmFwcGVyKHN0YXJ0UGF0aDogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgY29uc3QgcmVzdWx0ID0gZmluZEdpdFJvb3RJbXBsKHN0YXJ0UGF0aClcbiAgICByZXR1cm4gcmVzdWx0ID09PSBHSVRfUk9PVF9OT1RfRk9VTkQgPyBudWxsIDogcmVzdWx0XG4gIH1cbiAgd3JhcHBlci5jYWNoZSA9IGZpbmRHaXRSb290SW1wbC5jYWNoZVxuICByZXR1cm4gd3JhcHBlclxufVxuXG4vKipcbiAqIFJlc29sdmUgYSBnaXQgcm9vdCB0byB0aGUgY2Fub25pY2FsIG1haW4gcmVwb3NpdG9yeSByb290LlxuICogRm9yIGEgcmVndWxhciByZXBvIHRoaXMgaXMgYSBuby1vcC4gRm9yIGEgd29ya3RyZWUsIGZvbGxvd3MgdGhlXG4gKiBgLmdpdGAgZmlsZSBcdTIxOTIgYGdpdGRpcjpgIFx1MjE5MiBgY29tbW9uZGlyYCBjaGFpbiB0byBmaW5kIHRoZSBtYWluIHJlcG8nc1xuICogd29ya2luZyBkaXJlY3RvcnkuXG4gKlxuICogU3VibW9kdWxlcyAoYC5naXRgIGlzIGEgZmlsZSBidXQgbm8gYGNvbW1vbmRpcmApIGZhbGwgdGhyb3VnaCB0byB0aGVcbiAqIGlucHV0IHJvb3QsIHdoaWNoIGlzIGNvcnJlY3Qgc2luY2Ugc3VibW9kdWxlcyBhcmUgc2VwYXJhdGUgcmVwb3MuXG4gKlxuICogTWVtb2l6ZWQgd2l0aCBhIHNtYWxsIExSVSB0byBhdm9pZCByZXBlYXRlZCBmaWxlIHJlYWRzIG9uIHRoZSBob3RcbiAqIHBhdGggKHBlcm1pc3Npb24gY2hlY2tzLCBwcm9tcHQgYnVpbGRpbmcpLlxuICovXG5jb25zdCByZXNvbHZlQ2Fub25pY2FsUm9vdCA9IG1lbW9pemVXaXRoTFJVKFxuICAoZ2l0Um9vdDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gSW4gYSB3b3JrdHJlZSwgLmdpdCBpcyBhIGZpbGUgY29udGFpbmluZzogZ2l0ZGlyOiA8cGF0aD5cbiAgICAgIC8vIEluIGEgcmVndWxhciByZXBvLCAuZ2l0IGlzIGEgZGlyZWN0b3J5IChyZWFkRmlsZVN5bmMgdGhyb3dzIEVJU0RJUikuXG4gICAgICBjb25zdCBnaXRDb250ZW50ID0gcmVhZEZpbGVTeW5jKGpvaW4oZ2l0Um9vdCwgJy5naXQnKSwgJ3V0Zi04JykudHJpbSgpXG4gICAgICBpZiAoIWdpdENvbnRlbnQuc3RhcnRzV2l0aCgnZ2l0ZGlyOicpKSB7XG4gICAgICAgIHJldHVybiBnaXRSb290XG4gICAgICB9XG4gICAgICBjb25zdCB3b3JrdHJlZUdpdERpciA9IHJlc29sdmUoXG4gICAgICAgIGdpdFJvb3QsXG4gICAgICAgIGdpdENvbnRlbnQuc2xpY2UoJ2dpdGRpcjonLmxlbmd0aCkudHJpbSgpLFxuICAgICAgKVxuICAgICAgLy8gY29tbW9uZGlyIHBvaW50cyB0byB0aGUgc2hhcmVkIC5naXQgZGlyZWN0b3J5IChyZWxhdGl2ZSB0byB3b3JrdHJlZSBnaXRkaXIpLlxuICAgICAgLy8gU3VibW9kdWxlcyBoYXZlIG5vIGNvbW1vbmRpciAocmVhZEZpbGVTeW5jIHRocm93cyBFTk9FTlQpIFx1MjE5MiBmYWxsIHRocm91Z2guXG4gICAgICBjb25zdCBjb21tb25EaXIgPSByZXNvbHZlKFxuICAgICAgICB3b3JrdHJlZUdpdERpcixcbiAgICAgICAgcmVhZEZpbGVTeW5jKGpvaW4od29ya3RyZWVHaXREaXIsICdjb21tb25kaXInKSwgJ3V0Zi04JykudHJpbSgpLFxuICAgICAgKVxuICAgICAgLy8gU0VDVVJJVFk6IFRoZSAuZ2l0IGZpbGUgYW5kIGNvbW1vbmRpciBhcmUgYXR0YWNrZXItY29udHJvbGxlZCBpbiBhXG4gICAgICAvLyBjbG9uZWQvZG93bmxvYWRlZCByZXBvLiBXaXRob3V0IHZhbGlkYXRpb24sIGEgbWFsaWNpb3VzIHJlcG8gY2FuIHBvaW50XG4gICAgICAvLyBjb21tb25kaXIgYXQgYW55IHBhdGggdGhlIHZpY3RpbSBoYXMgdHJ1c3RlZCwgYnlwYXNzaW5nIHRoZSB0cnVzdFxuICAgICAgLy8gZGlhbG9nIGFuZCBleGVjdXRpbmcgaG9va3MgZnJvbSAuY2xhdWRlL3NldHRpbmdzLmpzb24gb24gc3RhcnR1cC5cbiAgICAgIC8vXG4gICAgICAvLyBWYWxpZGF0ZSB0aGUgc3RydWN0dXJlIG1hdGNoZXMgd2hhdCBgZ2l0IHdvcmt0cmVlIGFkZGAgY3JlYXRlczpcbiAgICAgIC8vICAgMS4gd29ya3RyZWVHaXREaXIgaXMgYSBkaXJlY3QgY2hpbGQgb2YgPGNvbW1vbkRpcj4vd29ya3RyZWVzL1xuICAgICAgLy8gICAgICBcdTIxOTIgZW5zdXJlcyB0aGUgY29tbW9uZGlyIGZpbGUgd2UgcmVhZCBsaXZlcyBpbnNpZGUgdGhlIHJlc29sdmVkXG4gICAgICAvLyAgICAgICAgY29tbW9uIGRpciwgbm90IGluc2lkZSB0aGUgYXR0YWNrZXIncyByZXBvXG4gICAgICAvLyAgIDIuIDx3b3JrdHJlZUdpdERpcj4vZ2l0ZGlyIHBvaW50cyBiYWNrIHRvIDxnaXRSb290Pi8uZ2l0XG4gICAgICAvLyAgICAgIFx1MjE5MiBlbnN1cmVzIGFuIGF0dGFja2VyIGNhbid0IGJvcnJvdyBhIHZpY3RpbSdzIGV4aXN0aW5nIHdvcmt0cmVlXG4gICAgICAvLyAgICAgICAgZW50cnkgYnkgZ3Vlc3NpbmcgaXRzIHBhdGhcbiAgICAgIC8vIEJvdGggYXJlIHJlcXVpcmVkOiAoMSkgYWxvbmUgZmFpbHMgaWYgdmljdGltIGhhcyBhIHdvcmt0cmVlIG9mIHRoZVxuICAgICAgLy8gdHJ1c3RlZCByZXBvOyAoMikgYWxvbmUgZmFpbHMgYmVjYXVzZSBhdHRhY2tlciBjb250cm9scyB3b3JrdHJlZUdpdERpci5cbiAgICAgIGlmIChyZXNvbHZlKGRpcm5hbWUod29ya3RyZWVHaXREaXIpKSAhPT0gam9pbihjb21tb25EaXIsICd3b3JrdHJlZXMnKSkge1xuICAgICAgICByZXR1cm4gZ2l0Um9vdFxuICAgICAgfVxuICAgICAgLy8gR2l0IHdyaXRlcyBnaXRkaXIgd2l0aCBzdHJidWZfcmVhbHBhdGgoKSAoc3ltbGlua3MgcmVzb2x2ZWQpLCBidXRcbiAgICAgIC8vIGdpdFJvb3QgZnJvbSBmaW5kR2l0Um9vdCgpIGlzIG9ubHkgbGV4aWNhbGx5IHJlc29sdmVkLiBSZWFscGF0aCBnaXRSb290XG4gICAgICAvLyBzbyBsZWdpdGltYXRlIHdvcmt0cmVlcyBhY2Nlc3NlZCB2aWEgYSBzeW1saW5rZWQgcGF0aCAoZS5nLiBtYWNPU1xuICAgICAgLy8gL3RtcCBcdTIxOTIgL3ByaXZhdGUvdG1wKSBhcmVuJ3QgcmVqZWN0ZWQuIFJlYWxwYXRoIHRoZSBkaXJlY3RvcnkgdGhlbiBqb2luXG4gICAgICAvLyAnLmdpdCcgXHUyMDE0IHJlYWxwYXRoaW5nIHRoZSAuZ2l0IGZpbGUgaXRzZWxmIHdvdWxkIGZvbGxvdyBhIHN5bWxpbmtlZCAuZ2l0XG4gICAgICAvLyBhbmQgbGV0IGFuIGF0dGFja2VyIGJvcnJvdyBhIHZpY3RpbSdzIGJhY2stbGluay5cbiAgICAgIGNvbnN0IGJhY2tsaW5rID0gcmVhbHBhdGhTeW5jKFxuICAgICAgICByZWFkRmlsZVN5bmMoam9pbih3b3JrdHJlZUdpdERpciwgJ2dpdGRpcicpLCAndXRmLTgnKS50cmltKCksXG4gICAgICApXG4gICAgICBpZiAoYmFja2xpbmsgIT09IGpvaW4ocmVhbHBhdGhTeW5jKGdpdFJvb3QpLCAnLmdpdCcpKSB7XG4gICAgICAgIHJldHVybiBnaXRSb290XG4gICAgICB9XG4gICAgICAvLyBCYXJlLXJlcG8gd29ya3RyZWVzOiB0aGUgY29tbW9uIGRpciBpc24ndCBpbnNpZGUgYSB3b3JraW5nIGRpcmVjdG9yeS5cbiAgICAgIC8vIFVzZSB0aGUgY29tbW9uIGRpciBpdHNlbGYgYXMgdGhlIHN0YWJsZSBpZGVudGl0eSAoYW50aHJvcGljcy9jbGF1ZGUtY29kZSMyNzk5NCkuXG4gICAgICBpZiAoYmFzZW5hbWUoY29tbW9uRGlyKSAhPT0gJy5naXQnKSB7XG4gICAgICAgIHJldHVybiBjb21tb25EaXIubm9ybWFsaXplKCdORkMnKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGRpcm5hbWUoY29tbW9uRGlyKS5ub3JtYWxpemUoJ05GQycpXG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm4gZ2l0Um9vdFxuICAgIH1cbiAgfSxcbiAgcm9vdCA9PiByb290LFxuICA1MCxcbilcblxuLyoqXG4gKiBGaW5kIHRoZSBjYW5vbmljYWwgZ2l0IHJlcG9zaXRvcnkgcm9vdCwgcmVzb2x2aW5nIHRocm91Z2ggd29ya3RyZWVzLlxuICpcbiAqIFVubGlrZSBmaW5kR2l0Um9vdCwgd2hpY2ggcmV0dXJucyB0aGUgd29ya3RyZWUgZGlyZWN0b3J5ICh3aGVyZSB0aGUgYC5naXRgXG4gKiBmaWxlIGxpdmVzKSwgdGhpcyByZXR1cm5zIHRoZSBtYWluIHJlcG9zaXRvcnkncyB3b3JraW5nIGRpcmVjdG9yeS4gVGhpc1xuICogZW5zdXJlcyBhbGwgd29ya3RyZWVzIG9mIHRoZSBzYW1lIHJlcG8gbWFwIHRvIHRoZSBzYW1lIHByb2plY3QgaWRlbnRpdHkuXG4gKlxuICogVXNlIHRoaXMgaW5zdGVhZCBvZiBmaW5kR2l0Um9vdCBmb3IgcHJvamVjdC1zY29wZWQgc3RhdGUgKGF1dG8tbWVtb3J5LFxuICogcHJvamVjdCBjb25maWcsIGFnZW50IG1lbW9yeSkgc28gd29ya3RyZWVzIHNoYXJlIHN0YXRlIHdpdGggdGhlIG1haW4gcmVwby5cbiAqL1xuZXhwb3J0IGNvbnN0IGZpbmRDYW5vbmljYWxHaXRSb290ID0gY3JlYXRlRmluZENhbm9uaWNhbEdpdFJvb3QoKVxuXG5mdW5jdGlvbiBjcmVhdGVGaW5kQ2Fub25pY2FsR2l0Um9vdCgpOiB7XG4gIChzdGFydFBhdGg6IHN0cmluZyk6IHN0cmluZyB8IG51bGxcbiAgY2FjaGU6IHR5cGVvZiByZXNvbHZlQ2Fub25pY2FsUm9vdC5jYWNoZVxufSB7XG4gIGZ1bmN0aW9uIHdyYXBwZXIoc3RhcnRQYXRoOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICBjb25zdCByb290ID0gZmluZEdpdFJvb3Qoc3RhcnRQYXRoKVxuICAgIGlmICghcm9vdCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIHJlc29sdmVDYW5vbmljYWxSb290KHJvb3QpXG4gIH1cbiAgd3JhcHBlci5jYWNoZSA9IHJlc29sdmVDYW5vbmljYWxSb290LmNhY2hlXG4gIHJldHVybiB3cmFwcGVyXG59XG5cbmV4cG9ydCBjb25zdCBnaXRFeGUgPSBtZW1vaXplKCgpOiBzdHJpbmcgPT4ge1xuICAvLyBFdmVyeSB0aW1lIHdlIHNwYXduIGEgcHJvY2Vzcywgd2UgaGF2ZSB0byBsb29rdXAgdGhlIHBhdGguXG4gIC8vIExldCdzIGluc3RlYWQgYXZvaWQgdGhhdCBsb29rdXAgc28gd2Ugb25seSBkbyBpdCBvbmNlLlxuICByZXR1cm4gd2hpY2hTeW5jKCdnaXQnKSB8fCAnZ2l0J1xufSlcblxuZXhwb3J0IGNvbnN0IGdldElzR2l0ID0gbWVtb2l6ZShhc3luYyAoKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG4gIGNvbnN0IHN0YXJ0VGltZSA9IERhdGUubm93KClcbiAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnaW5mbycsICdpc19naXRfY2hlY2tfc3RhcnRlZCcpXG5cbiAgY29uc3QgaXNHaXQgPSBmaW5kR2l0Um9vdChnZXRDd2QoKSkgIT09IG51bGxcblxuICBsb2dGb3JEaWFnbm9zdGljc05vUElJKCdpbmZvJywgJ2lzX2dpdF9jaGVja19jb21wbGV0ZWQnLCB7XG4gICAgZHVyYXRpb25fbXM6IERhdGUubm93KCkgLSBzdGFydFRpbWUsXG4gICAgaXNfZ2l0OiBpc0dpdCxcbiAgfSlcbiAgcmV0dXJuIGlzR2l0XG59KVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2l0RGlyKGN3ZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gIHJldHVybiByZXNvbHZlR2l0RGlyKGN3ZClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGlzQXRHaXRSb290KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICBjb25zdCBjd2QgPSBnZXRDd2QoKVxuICBjb25zdCBnaXRSb290ID0gZmluZEdpdFJvb3QoY3dkKVxuICBpZiAoIWdpdFJvb3QpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICAvLyBSZXNvbHZlIHN5bWxpbmtzIGZvciBhY2N1cmF0ZSBjb21wYXJpc29uXG4gIHRyeSB7XG4gICAgY29uc3QgW3Jlc29sdmVkQ3dkLCByZXNvbHZlZEdpdFJvb3RdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgcmVhbHBhdGgoY3dkKSxcbiAgICAgIHJlYWxwYXRoKGdpdFJvb3QpLFxuICAgIF0pXG4gICAgcmV0dXJuIHJlc29sdmVkQ3dkID09PSByZXNvbHZlZEdpdFJvb3RcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGN3ZCA9PT0gZ2l0Um9vdFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkaXJJc0luR2l0UmVwbyA9IGFzeW5jIChjd2Q6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICByZXR1cm4gZmluZEdpdFJvb3QoY3dkKSAhPT0gbnVsbFxufVxuXG5leHBvcnQgY29uc3QgZ2V0SGVhZCA9IGFzeW5jICgpOiBQcm9taXNlPHN0cmluZz4gPT4ge1xuICByZXR1cm4gZ2V0Q2FjaGVkSGVhZCgpXG59XG5cbmV4cG9ydCBjb25zdCBnZXRCcmFuY2ggPSBhc3luYyAoKTogUHJvbWlzZTxzdHJpbmc+ID0+IHtcbiAgcmV0dXJuIGdldENhY2hlZEJyYW5jaCgpXG59XG5cbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0QnJhbmNoID0gYXN5bmMgKCk6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gIHJldHVybiBnZXRDYWNoZWREZWZhdWx0QnJhbmNoKClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFJlbW90ZVVybCA9IGFzeW5jICgpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+ID0+IHtcbiAgcmV0dXJuIGdldENhY2hlZFJlbW90ZVVybCgpXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyBhIGdpdCByZW1vdGUgVVJMIHRvIGEgY2Fub25pY2FsIGZvcm0gZm9yIGhhc2hpbmcuXG4gKiBDb252ZXJ0cyBTU0ggYW5kIEhUVFBTIFVSTHMgdG8gdGhlIHNhbWUgZm9ybWF0OiBob3N0L293bmVyL3JlcG8gKGxvd2VyY2FzZSwgbm8gLmdpdClcbiAqXG4gKiBFeGFtcGxlczpcbiAqIC0gZ2l0QGdpdGh1Yi5jb206b3duZXIvcmVwby5naXQgLT4gZ2l0aHViLmNvbS9vd25lci9yZXBvXG4gKiAtIGh0dHBzOi8vZ2l0aHViLmNvbS9vd25lci9yZXBvLmdpdCAtPiBnaXRodWIuY29tL293bmVyL3JlcG9cbiAqIC0gc3NoOi8vZ2l0QGdpdGh1Yi5jb20vb3duZXIvcmVwbyAtPiBnaXRodWIuY29tL293bmVyL3JlcG9cbiAqIC0gaHR0cDovL2xvY2FsX3Byb3h5QDEyNy4wLjAuMToxNjU4My9naXQvb3duZXIvcmVwbyAtPiBnaXRodWIuY29tL293bmVyL3JlcG9cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUdpdFJlbW90ZVVybCh1cmw6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICBjb25zdCB0cmltbWVkID0gdXJsLnRyaW0oKVxuICBpZiAoIXRyaW1tZWQpIHJldHVybiBudWxsXG5cbiAgLy8gSGFuZGxlIFNTSCBmb3JtYXQ6IGdpdEBob3N0Om93bmVyL3JlcG8uZ2l0XG4gIGNvbnN0IHNzaE1hdGNoID0gdHJpbW1lZC5tYXRjaCgvXmdpdEAoW146XSspOiguKz8pKD86XFwuZ2l0KT8kLylcbiAgaWYgKHNzaE1hdGNoICYmIHNzaE1hdGNoWzFdICYmIHNzaE1hdGNoWzJdKSB7XG4gICAgcmV0dXJuIGAke3NzaE1hdGNoWzFdfS8ke3NzaE1hdGNoWzJdfWAudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgLy8gSGFuZGxlIEhUVFBTL1NTSCBVUkwgZm9ybWF0OiBodHRwczovL2hvc3Qvb3duZXIvcmVwby5naXQgb3Igc3NoOi8vZ2l0QGhvc3Qvb3duZXIvcmVwb1xuICBjb25zdCB1cmxNYXRjaCA9IHRyaW1tZWQubWF0Y2goXG4gICAgL14oPzpodHRwcz98c3NoKTpcXC9cXC8oPzpbXkBdK0ApPyhbXi9dKylcXC8oLis/KSg/OlxcLmdpdCk/JC8sXG4gIClcbiAgaWYgKHVybE1hdGNoICYmIHVybE1hdGNoWzFdICYmIHVybE1hdGNoWzJdKSB7XG4gICAgY29uc3QgaG9zdCA9IHVybE1hdGNoWzFdXG4gICAgY29uc3QgcGF0aCA9IHVybE1hdGNoWzJdXG5cbiAgICAvLyBDQ1IgZ2l0IHByb3h5IFVSTHMgdXNlIGZvcm1hdDpcbiAgICAvLyAgIExlZ2FjeTogIGh0dHA6Ly8uLi5AMTI3LjAuMC4xOlBPUlQvZ2l0L293bmVyL3JlcG8gICAgICAgKGdpdGh1Yi5jb20gYXNzdW1lZClcbiAgICAvLyAgIEdIRTogICAgIGh0dHA6Ly8uLi5AMTI3LjAuMC4xOlBPUlQvZ2l0L2doZS5ob3N0L293bmVyL3JlcG8gKGhvc3QgZW5jb2RlZCBpbiBwYXRoKVxuICAgIC8vIFN0cmlwIHRoZSAvZ2l0LyBwcmVmaXguIElmIHRoZSBmaXJzdCBzZWdtZW50IGNvbnRhaW5zIGEgZG90LCBpdCdzIGFcbiAgICAvLyBob3N0bmFtZSAoR2l0SHViIG9yZyBuYW1lcyBjYW5ub3QgY29udGFpbiBkb3RzKS4gT3RoZXJ3aXNlIGFzc3VtZSBnaXRodWIuY29tLlxuICAgIGlmIChpc0xvY2FsSG9zdChob3N0KSAmJiBwYXRoLnN0YXJ0c1dpdGgoJ2dpdC8nKSkge1xuICAgICAgY29uc3QgcHJveHlQYXRoID0gcGF0aC5zbGljZSg0KSAvLyBSZW1vdmUgXCJnaXQvXCIgcHJlZml4XG4gICAgICBjb25zdCBzZWdtZW50cyA9IHByb3h5UGF0aC5zcGxpdCgnLycpXG4gICAgICAvLyAzKyBzZWdtZW50cyB3aGVyZSBmaXJzdCBjb250YWlucyBhIGRvdCBcdTIxOTIgaG9zdC9vd25lci9yZXBvIChHSEUgZm9ybWF0KVxuICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+PSAzICYmIHNlZ21lbnRzWzBdIS5pbmNsdWRlcygnLicpKSB7XG4gICAgICAgIHJldHVybiBwcm94eVBhdGgudG9Mb3dlckNhc2UoKVxuICAgICAgfVxuICAgICAgLy8gMiBzZWdtZW50cyBcdTIxOTIgb3duZXIvcmVwbyAobGVnYWN5IGZvcm1hdCwgYXNzdW1lIGdpdGh1Yi5jb20pXG4gICAgICByZXR1cm4gYGdpdGh1Yi5jb20vJHtwcm94eVBhdGh9YC50b0xvd2VyQ2FzZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIGAke2hvc3R9LyR7cGF0aH1gLnRvTG93ZXJDYXNlKClcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbi8qKlxuICogUmV0dXJucyBhIFNIQTI1NiBoYXNoIChmaXJzdCAxNiBjaGFycykgb2YgdGhlIG5vcm1hbGl6ZWQgZ2l0IHJlbW90ZSBVUkwuXG4gKiBUaGlzIHByb3ZpZGVzIGEgZ2xvYmFsbHkgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSByZXBvc2l0b3J5IHRoYXQ6XG4gKiAtIElzIHRoZSBzYW1lIHJlZ2FyZGxlc3Mgb2YgU1NIIHZzIEhUVFBTIGNsb25lXG4gKiAtIERvZXMgbm90IGV4cG9zZSB0aGUgYWN0dWFsIHJlcG9zaXRvcnkgbmFtZSBpbiBsb2dzXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvUmVtb3RlSGFzaCgpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgY29uc3QgcmVtb3RlVXJsID0gYXdhaXQgZ2V0UmVtb3RlVXJsKClcbiAgaWYgKCFyZW1vdGVVcmwpIHJldHVybiBudWxsXG5cbiAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZUdpdFJlbW90ZVVybChyZW1vdGVVcmwpXG4gIGlmICghbm9ybWFsaXplZCkgcmV0dXJuIG51bGxcblxuICBjb25zdCBoYXNoID0gY3JlYXRlSGFzaCgnc2hhMjU2JykudXBkYXRlKG5vcm1hbGl6ZWQpLmRpZ2VzdCgnaGV4JylcbiAgcmV0dXJuIGhhc2guc3Vic3RyaW5nKDAsIDE2KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0SXNIZWFkT25SZW1vdGUgPSBhc3luYyAoKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG4gIGNvbnN0IHsgY29kZSB9ID0gYXdhaXQgZXhlY0ZpbGVOb1Rocm93KGdpdEV4ZSgpLCBbJ3Jldi1wYXJzZScsICdAe3V9J10sIHtcbiAgICBwcmVzZXJ2ZU91dHB1dE9uRXJyb3I6IGZhbHNlLFxuICB9KVxuICByZXR1cm4gY29kZSA9PT0gMFxufVxuXG5leHBvcnQgY29uc3QgaGFzVW5wdXNoZWRDb21taXRzID0gYXN5bmMgKCk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICBjb25zdCB7IHN0ZG91dCwgY29kZSB9ID0gYXdhaXQgZXhlY0ZpbGVOb1Rocm93KFxuICAgIGdpdEV4ZSgpLFxuICAgIFsncmV2LWxpc3QnLCAnLS1jb3VudCcsICdAe3V9Li5IRUFEJ10sXG4gICAgeyBwcmVzZXJ2ZU91dHB1dE9uRXJyb3I6IGZhbHNlIH0sXG4gIClcbiAgcmV0dXJuIGNvZGUgPT09IDAgJiYgcGFyc2VJbnQoc3Rkb3V0LnRyaW0oKSwgMTApID4gMFxufVxuXG5leHBvcnQgY29uc3QgZ2V0SXNDbGVhbiA9IGFzeW5jIChvcHRpb25zPzoge1xuICBpZ25vcmVVbnRyYWNrZWQ/OiBib29sZWFuXG59KTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG4gIGNvbnN0IGFyZ3MgPSBbJy0tbm8tb3B0aW9uYWwtbG9ja3MnLCAnc3RhdHVzJywgJy0tcG9yY2VsYWluJ11cbiAgaWYgKG9wdGlvbnM/Lmlnbm9yZVVudHJhY2tlZCkge1xuICAgIGFyZ3MucHVzaCgnLXVubycpXG4gIH1cbiAgY29uc3QgeyBzdGRvdXQgfSA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdyhnaXRFeGUoKSwgYXJncywge1xuICAgIHByZXNlcnZlT3V0cHV0T25FcnJvcjogZmFsc2UsXG4gIH0pXG4gIHJldHVybiBzdGRvdXQudHJpbSgpLmxlbmd0aCA9PT0gMFxufVxuXG5leHBvcnQgY29uc3QgZ2V0Q2hhbmdlZEZpbGVzID0gYXN5bmMgKCk6IFByb21pc2U8c3RyaW5nW10+ID0+IHtcbiAgY29uc3QgeyBzdGRvdXQgfSA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdyhcbiAgICBnaXRFeGUoKSxcbiAgICBbJy0tbm8tb3B0aW9uYWwtbG9ja3MnLCAnc3RhdHVzJywgJy0tcG9yY2VsYWluJ10sXG4gICAge1xuICAgICAgcHJlc2VydmVPdXRwdXRPbkVycm9yOiBmYWxzZSxcbiAgICB9LFxuICApXG4gIHJldHVybiBzdGRvdXRcbiAgICAudHJpbSgpXG4gICAgLnNwbGl0KCdcXG4nKVxuICAgIC5tYXAobGluZSA9PiBsaW5lLnRyaW0oKS5zcGxpdCgnICcsIDIpWzFdPy50cmltKCkpIC8vIFJlbW92ZSBzdGF0dXMgcHJlZml4IChlLmcuLCBcIk0gXCIsIFwiQSBcIiwgXCI/P1wiKVxuICAgIC5maWx0ZXIobGluZSA9PiB0eXBlb2YgbGluZSA9PT0gJ3N0cmluZycpIC8vIFJlbW92ZSBlbXB0eSBlbnRyaWVzXG59XG5cbmV4cG9ydCB0eXBlIEdpdEZpbGVTdGF0dXMgPSB7XG4gIHRyYWNrZWQ6IHN0cmluZ1tdXG4gIHVudHJhY2tlZDogc3RyaW5nW11cbn1cblxuZXhwb3J0IGNvbnN0IGdldEZpbGVTdGF0dXMgPSBhc3luYyAoKTogUHJvbWlzZTxHaXRGaWxlU3RhdHVzPiA9PiB7XG4gIGNvbnN0IHsgc3Rkb3V0IH0gPSBhd2FpdCBleGVjRmlsZU5vVGhyb3coXG4gICAgZ2l0RXhlKCksXG4gICAgWyctLW5vLW9wdGlvbmFsLWxvY2tzJywgJ3N0YXR1cycsICctLXBvcmNlbGFpbiddLFxuICAgIHtcbiAgICAgIHByZXNlcnZlT3V0cHV0T25FcnJvcjogZmFsc2UsXG4gICAgfSxcbiAgKVxuXG4gIGNvbnN0IHRyYWNrZWQ6IHN0cmluZ1tdID0gW11cbiAgY29uc3QgdW50cmFja2VkOiBzdHJpbmdbXSA9IFtdXG5cbiAgc3Rkb3V0XG4gICAgLnRyaW0oKVxuICAgIC5zcGxpdCgnXFxuJylcbiAgICAuZmlsdGVyKGxpbmUgPT4gbGluZS5sZW5ndGggPiAwKVxuICAgIC5mb3JFYWNoKGxpbmUgPT4ge1xuICAgICAgY29uc3Qgc3RhdHVzID0gbGluZS5zdWJzdHJpbmcoMCwgMilcbiAgICAgIGNvbnN0IGZpbGVuYW1lID0gbGluZS5zdWJzdHJpbmcoMikudHJpbSgpXG5cbiAgICAgIGlmIChzdGF0dXMgPT09ICc/PycpIHtcbiAgICAgICAgdW50cmFja2VkLnB1c2goZmlsZW5hbWUpXG4gICAgICB9IGVsc2UgaWYgKGZpbGVuYW1lKSB7XG4gICAgICAgIHRyYWNrZWQucHVzaChmaWxlbmFtZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gIHJldHVybiB7IHRyYWNrZWQsIHVudHJhY2tlZCB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRXb3JrdHJlZUNvdW50ID0gYXN5bmMgKCk6IFByb21pc2U8bnVtYmVyPiA9PiB7XG4gIHJldHVybiBnZXRXb3JrdHJlZUNvdW50RnJvbUZzKClcbn1cblxuLyoqXG4gKiBTdGFzaGVzIGFsbCBjaGFuZ2VzIChpbmNsdWRpbmcgdW50cmFja2VkIGZpbGVzKSB0byByZXR1cm4gZ2l0IHRvIGEgY2xlYW4gcG9yY2VsYWluIHN0YXRlXG4gKiBJbXBvcnRhbnQ6IFRoaXMgZnVuY3Rpb24gc3RhZ2VzIHVudHJhY2tlZCBmaWxlcyBiZWZvcmUgc3Rhc2hpbmcgdG8gcHJldmVudCBkYXRhIGxvc3NcbiAqIEBwYXJhbSBtZXNzYWdlIC0gT3B0aW9uYWwgY3VzdG9tIG1lc3NhZ2UgZm9yIHRoZSBzdGFzaFxuICogQHJldHVybnMgUHJvbWlzZTxib29sZWFuPiAtIHRydWUgaWYgc3Rhc2ggd2FzIHN1Y2Nlc3NmdWwsIGZhbHNlIG90aGVyd2lzZVxuICovXG5leHBvcnQgY29uc3Qgc3Rhc2hUb0NsZWFuU3RhdGUgPSBhc3luYyAobWVzc2FnZT86IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHN0YXNoTWVzc2FnZSA9XG4gICAgICBtZXNzYWdlIHx8IGBDbGF1ZGUgQ29kZSBhdXRvLXN0YXNoIC0gJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCl9YFxuXG4gICAgLy8gRmlyc3QsIGNoZWNrIGlmIHdlIGhhdmUgdW50cmFja2VkIGZpbGVzXG4gICAgY29uc3QgeyB1bnRyYWNrZWQgfSA9IGF3YWl0IGdldEZpbGVTdGF0dXMoKVxuXG4gICAgLy8gSWYgd2UgaGF2ZSB1bnRyYWNrZWQgZmlsZXMsIGFkZCB0aGVtIHRvIHRoZSBpbmRleCBmaXJzdFxuICAgIC8vIFRoaXMgcHJldmVudHMgdGhlbSBmcm9tIGJlaW5nIGRlbGV0ZWRcbiAgICBpZiAodW50cmFja2VkLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHsgY29kZTogYWRkQ29kZSB9ID0gYXdhaXQgZXhlY0ZpbGVOb1Rocm93KFxuICAgICAgICBnaXRFeGUoKSxcbiAgICAgICAgWydhZGQnLCAuLi51bnRyYWNrZWRdLFxuICAgICAgICB7IHByZXNlcnZlT3V0cHV0T25FcnJvcjogZmFsc2UgfSxcbiAgICAgIClcblxuICAgICAgaWYgKGFkZENvZGUgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTm93IHN0YXNoIGV2ZXJ5dGhpbmcgKHN0YWdlZCBhbmQgdW5zdGFnZWQgY2hhbmdlcylcbiAgICBjb25zdCB7IGNvZGUgfSA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdyhcbiAgICAgIGdpdEV4ZSgpLFxuICAgICAgWydzdGFzaCcsICdwdXNoJywgJy0tbWVzc2FnZScsIHN0YXNoTWVzc2FnZV0sXG4gICAgICB7IHByZXNlcnZlT3V0cHV0T25FcnJvcjogZmFsc2UgfSxcbiAgICApXG4gICAgcmV0dXJuIGNvZGUgPT09IDBcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEdpdFJlcG9TdGF0ZSA9IHtcbiAgY29tbWl0SGFzaDogc3RyaW5nXG4gIGJyYW5jaE5hbWU6IHN0cmluZ1xuICByZW1vdGVVcmw6IHN0cmluZyB8IG51bGxcbiAgaXNIZWFkT25SZW1vdGU6IGJvb2xlYW5cbiAgaXNDbGVhbjogYm9vbGVhblxuICB3b3JrdHJlZUNvdW50OiBudW1iZXJcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdpdFN0YXRlKCk6IFByb21pc2U8R2l0UmVwb1N0YXRlIHwgbnVsbD4ge1xuICB0cnkge1xuICAgIGNvbnN0IFtcbiAgICAgIGNvbW1pdEhhc2gsXG4gICAgICBicmFuY2hOYW1lLFxuICAgICAgcmVtb3RlVXJsLFxuICAgICAgaXNIZWFkT25SZW1vdGUsXG4gICAgICBpc0NsZWFuLFxuICAgICAgd29ya3RyZWVDb3VudCxcbiAgICBdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgZ2V0SGVhZCgpLFxuICAgICAgZ2V0QnJhbmNoKCksXG4gICAgICBnZXRSZW1vdGVVcmwoKSxcbiAgICAgIGdldElzSGVhZE9uUmVtb3RlKCksXG4gICAgICBnZXRJc0NsZWFuKCksXG4gICAgICBnZXRXb3JrdHJlZUNvdW50KCksXG4gICAgXSlcblxuICAgIHJldHVybiB7XG4gICAgICBjb21taXRIYXNoLFxuICAgICAgYnJhbmNoTmFtZSxcbiAgICAgIHJlbW90ZVVybCxcbiAgICAgIGlzSGVhZE9uUmVtb3RlLFxuICAgICAgaXNDbGVhbixcbiAgICAgIHdvcmt0cmVlQ291bnQsXG4gICAgfVxuICB9IGNhdGNoIChfKSB7XG4gICAgLy8gRmFpbCBzaWxlbnRseSAtIGdpdCBzdGF0ZSBpcyBiZXN0IGVmZm9ydFxuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdpdGh1YlJlcG8oKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gIGNvbnN0IHsgcGFyc2VHaXRSZW1vdGUgfSA9IGF3YWl0IGltcG9ydCgnLi9kZXRlY3RSZXBvc2l0b3J5LmpzJylcbiAgY29uc3QgcmVtb3RlVXJsID0gYXdhaXQgZ2V0UmVtb3RlVXJsKClcbiAgaWYgKCFyZW1vdGVVcmwpIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoJ0xvY2FsIEdpdEh1YiByZXBvOiB1bmtub3duJylcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIC8vIE9ubHkgcmV0dXJuIHJlc3VsdHMgZm9yIGdpdGh1Yi5jb20gXHUyMDE0IGNhbGxlcnMgKGUuZy4gaXNzdWUgc3VibWlzc2lvbilcbiAgLy8gYXNzdW1lIHRoZSByZXN1bHQgaXMgYSBnaXRodWIuY29tIHJlcG9zaXRvcnkuXG4gIGNvbnN0IHBhcnNlZCA9IHBhcnNlR2l0UmVtb3RlKHJlbW90ZVVybClcbiAgaWYgKHBhcnNlZCAmJiBwYXJzZWQuaG9zdCA9PT0gJ2dpdGh1Yi5jb20nKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYCR7cGFyc2VkLm93bmVyfS8ke3BhcnNlZC5uYW1lfWBcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoYExvY2FsIEdpdEh1YiByZXBvOiAke3Jlc3VsdH1gKVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuICBsb2dGb3JEZWJ1Z2dpbmcoJ0xvY2FsIEdpdEh1YiByZXBvOiB1bmtub3duJylcbiAgcmV0dXJuIG51bGxcbn1cblxuLyoqXG4gKiBQcmVzZXJ2ZWQgZ2l0IHN0YXRlIGZvciBpc3N1ZSBzdWJtaXNzaW9uLlxuICogVXNlcyByZW1vdGUgYmFzZSAoZS5nLiwgb3JpZ2luL21haW4pIHdoaWNoIGlzIHJhcmVseSBmb3JjZS1wdXNoZWQsXG4gKiB1bmxpa2UgbG9jYWwgY29tbWl0cyB0aGF0IGNhbiBiZSBHQydkIGFmdGVyIGZvcmNlIHB1c2guXG4gKi9cbmV4cG9ydCB0eXBlIFByZXNlcnZlZEdpdFN0YXRlID0ge1xuICAvKiogVGhlIFNIQSBvZiB0aGUgbWVyZ2UtYmFzZSB3aXRoIHRoZSByZW1vdGUgYnJhbmNoICovXG4gIHJlbW90ZV9iYXNlX3NoYTogc3RyaW5nIHwgbnVsbFxuICAvKiogVGhlIHJlbW90ZSBicmFuY2ggdXNlZCAoZS5nLiwgXCJvcmlnaW4vbWFpblwiKSAqL1xuICByZW1vdGVfYmFzZTogc3RyaW5nIHwgbnVsbFxuICAvKiogUGF0Y2ggZnJvbSBtZXJnZS1iYXNlIHRvIGN1cnJlbnQgc3RhdGUgKGluY2x1ZGVzIHVuY29tbWl0dGVkIGNoYW5nZXMpICovXG4gIHBhdGNoOiBzdHJpbmdcbiAgLyoqIFVudHJhY2tlZCBmaWxlcyB3aXRoIHRoZWlyIGNvbnRlbnRzICovXG4gIHVudHJhY2tlZF9maWxlczogQXJyYXk8eyBwYXRoOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9PlxuICAvKiogZ2l0IGZvcm1hdC1wYXRjaCBvdXRwdXQgZm9yIGNvbW1pdHRlZCBjaGFuZ2VzIGJldHdlZW4gbWVyZ2UtYmFzZSBhbmQgSEVBRC5cbiAgICogIFVzZWQgdG8gcmVjb25zdHJ1Y3QgdGhlIGFjdHVhbCBjb21taXQgY2hhaW4gKGF1dGhvciwgZGF0ZSwgbWVzc2FnZSkgaW5cbiAgICogIHJlcGxheSBjb250YWluZXJzLiBudWxsIHdoZW4gdGhlcmUgYXJlIG5vIGNvbW1pdHMgYmV0d2VlbiBtZXJnZS1iYXNlIGFuZCBIRUFELiAqL1xuICBmb3JtYXRfcGF0Y2g6IHN0cmluZyB8IG51bGxcbiAgLyoqIFRoZSBjdXJyZW50IEhFQUQgU0hBICh0aXAgb2YgdGhlIGZlYXR1cmUgYnJhbmNoKSAqL1xuICBoZWFkX3NoYTogc3RyaW5nIHwgbnVsbFxuICAvKiogVGhlIGN1cnJlbnQgYnJhbmNoIG5hbWUgKGUuZy4sIFwiZmVhdC9teS1mZWF0dXJlXCIpICovXG4gIGJyYW5jaF9uYW1lOiBzdHJpbmcgfCBudWxsXG59XG5cbi8vIFNpemUgbGltaXRzIGZvciB1bnRyYWNrZWQgZmlsZSBjYXB0dXJlXG5jb25zdCBNQVhfRklMRV9TSVpFX0JZVEVTID0gNTAwICogMTAyNCAqIDEwMjQgLy8gNTAwTUIgcGVyIGZpbGVcbmNvbnN0IE1BWF9UT1RBTF9TSVpFX0JZVEVTID0gNSAqIDEwMjQgKiAxMDI0ICogMTAyNCAvLyA1R0IgdG90YWxcbmNvbnN0IE1BWF9GSUxFX0NPVU5UID0gMjAwMDBcblxuLy8gSW5pdGlhbCByZWFkIGJ1ZmZlciBmb3IgYmluYXJ5IGRldGVjdGlvbiArIGNvbnRlbnQgcmV1c2UuIDY0S0IgY292ZXJzXG4vLyBtb3N0IHNvdXJjZSBmaWxlcyBpbiBhIHNpbmdsZSByZWFkOyBpc0JpbmFyeUNvbnRlbnQoKSBpbnRlcm5hbGx5IHNjYW5zXG4vLyBvbmx5IGl0cyBmaXJzdCA4S0IgZm9yIHRoZSBiaW5hcnkgaGV1cmlzdGljLCBzbyB0aGUgZXh0cmEgYnl0ZXMgYXJlXG4vLyBwdXJlbHkgZm9yIGF2b2lkaW5nIGEgc2Vjb25kIHJlYWQgd2hlbiB0aGUgZmlsZSB0dXJucyBvdXQgdG8gYmUgdGV4dC5cbmNvbnN0IFNOSUZGX0JVRkZFUl9TSVpFID0gNjQgKiAxMDI0XG5cbi8qKlxuICogRmluZCB0aGUgYmVzdCByZW1vdGUgYnJhbmNoIHRvIHVzZSBhcyBhIGJhc2UuXG4gKiBQcmlvcml0eTogdHJhY2tpbmcgYnJhbmNoID4gb3JpZ2luL21haW4gPiBvcmlnaW4vc3RhZ2luZyA+IG9yaWdpbi9tYXN0ZXJcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmRSZW1vdGVCYXNlKCk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICAvLyBGaXJzdCB0cnk6IGdldCB0aGUgdHJhY2tpbmcgYnJhbmNoIGZvciB0aGUgY3VycmVudCBicmFuY2hcbiAgY29uc3QgeyBzdGRvdXQ6IHRyYWNraW5nQnJhbmNoLCBjb2RlOiB0cmFja2luZ0NvZGUgfSA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdyhcbiAgICBnaXRFeGUoKSxcbiAgICBbJ3Jldi1wYXJzZScsICctLWFiYnJldi1yZWYnLCAnLS1zeW1ib2xpYy1mdWxsLW5hbWUnLCAnQHt1fSddLFxuICAgIHsgcHJlc2VydmVPdXRwdXRPbkVycm9yOiBmYWxzZSB9LFxuICApXG5cbiAgaWYgKHRyYWNraW5nQ29kZSA9PT0gMCAmJiB0cmFja2luZ0JyYW5jaC50cmltKCkpIHtcbiAgICByZXR1cm4gdHJhY2tpbmdCcmFuY2gudHJpbSgpXG4gIH1cblxuICAvLyBTZWNvbmQgdHJ5OiBjaGVjayBmb3IgY29tbW9uIGRlZmF1bHQgYnJhbmNoIG5hbWVzIG9uIG9yaWdpblxuICBjb25zdCB7IHN0ZG91dDogcmVtb3RlUmVmcywgY29kZTogcmVtb3RlQ29kZSB9ID0gYXdhaXQgZXhlY0ZpbGVOb1Rocm93KFxuICAgIGdpdEV4ZSgpLFxuICAgIFsncmVtb3RlJywgJ3Nob3cnLCAnb3JpZ2luJywgJy0tJywgJ0hFQUQnXSxcbiAgICB7IHByZXNlcnZlT3V0cHV0T25FcnJvcjogZmFsc2UgfSxcbiAgKVxuXG4gIGlmIChyZW1vdGVDb2RlID09PSAwKSB7XG4gICAgLy8gUGFyc2UgdGhlIGRlZmF1bHQgYnJhbmNoIGZyb20gcmVtb3RlIHNob3cgb3V0cHV0XG4gICAgY29uc3QgbWF0Y2ggPSByZW1vdGVSZWZzLm1hdGNoKC9IRUFEIGJyYW5jaDogKFxcUyspLylcbiAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcbiAgICAgIHJldHVybiBgb3JpZ2luLyR7bWF0Y2hbMV19YFxuICAgIH1cbiAgfVxuXG4gIC8vIFRoaXJkIHRyeTogY2hlY2sgd2hpY2ggY29tbW9uIGJyYW5jaGVzIGV4aXN0XG4gIGNvbnN0IGNhbmRpZGF0ZXMgPSBbJ29yaWdpbi9tYWluJywgJ29yaWdpbi9zdGFnaW5nJywgJ29yaWdpbi9tYXN0ZXInXVxuICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBjYW5kaWRhdGVzKSB7XG4gICAgY29uc3QgeyBjb2RlIH0gPSBhd2FpdCBleGVjRmlsZU5vVGhyb3coXG4gICAgICBnaXRFeGUoKSxcbiAgICAgIFsncmV2LXBhcnNlJywgJy0tdmVyaWZ5JywgY2FuZGlkYXRlXSxcbiAgICAgIHsgcHJlc2VydmVPdXRwdXRPbkVycm9yOiBmYWxzZSB9LFxuICAgIClcbiAgICBpZiAoY29kZSA9PT0gMCkge1xuICAgICAgcmV0dXJuIGNhbmRpZGF0ZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgd2UncmUgaW4gYSBzaGFsbG93IGNsb25lIGJ5IGxvb2tpbmcgZm9yIDxnaXREaXI+L3NoYWxsb3cuXG4gKi9cbmZ1bmN0aW9uIGlzU2hhbGxvd0Nsb25lKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICByZXR1cm4gaXNTaGFsbG93Q2xvbmVGcygpXG59XG5cbi8qKlxuICogQ2FwdHVyZSB1bnRyYWNrZWQgZmlsZXMgKGdpdCBkaWZmIGRvZXNuJ3QgaW5jbHVkZSB0aGVtKS5cbiAqIFJlc3BlY3RzIHNpemUgbGltaXRzIGFuZCBza2lwcyBiaW5hcnkgZmlsZXMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNhcHR1cmVVbnRyYWNrZWRGaWxlcygpOiBQcm9taXNlPFxuICBBcnJheTx7IHBhdGg6IHN0cmluZzsgY29udGVudDogc3RyaW5nIH0+XG4+IHtcbiAgY29uc3QgeyBzdGRvdXQsIGNvZGUgfSA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdyhcbiAgICBnaXRFeGUoKSxcbiAgICBbJ2xzLWZpbGVzJywgJy0tb3RoZXJzJywgJy0tZXhjbHVkZS1zdGFuZGFyZCddLFxuICAgIHsgcHJlc2VydmVPdXRwdXRPbkVycm9yOiBmYWxzZSB9LFxuICApXG5cbiAgY29uc3QgdHJpbW1lZCA9IHN0ZG91dC50cmltKClcbiAgaWYgKGNvZGUgIT09IDAgfHwgIXRyaW1tZWQpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuXG4gIGNvbnN0IGZpbGVzID0gdHJpbW1lZC5zcGxpdCgnXFxuJykuZmlsdGVyKEJvb2xlYW4pXG4gIGNvbnN0IHJlc3VsdDogQXJyYXk8eyBwYXRoOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9PiA9IFtdXG4gIGxldCB0b3RhbFNpemUgPSAwXG5cbiAgZm9yIChjb25zdCBmaWxlUGF0aCBvZiBmaWxlcykge1xuICAgIC8vIENoZWNrIGZpbGUgY291bnQgbGltaXRcbiAgICBpZiAocmVzdWx0Lmxlbmd0aCA+PSBNQVhfRklMRV9DT1VOVCkge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgVW50cmFja2VkIGZpbGUgY2FwdHVyZTogcmVhY2hlZCBtYXggZmlsZSBjb3VudCAoJHtNQVhfRklMRV9DT1VOVH0pYCxcbiAgICAgIClcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgLy8gU2tpcCBiaW5hcnkgZmlsZXMgYnkgZXh0ZW5zaW9uIC0gemVybyBJL09cbiAgICBpZiAoaGFzQmluYXJ5RXh0ZW5zaW9uKGZpbGVQYXRoKSkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RhdHMgPSBhd2FpdCBzdGF0KGZpbGVQYXRoKVxuICAgICAgY29uc3QgZmlsZVNpemUgPSBzdGF0cy5zaXplXG5cbiAgICAgIC8vIFNraXAgZmlsZXMgZXhjZWVkaW5nIHBlci1maWxlIGxpbWl0XG4gICAgICBpZiAoZmlsZVNpemUgPiBNQVhfRklMRV9TSVpFX0JZVEVTKSB7XG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICBgVW50cmFja2VkIGZpbGUgY2FwdHVyZTogc2tpcHBpbmcgJHtmaWxlUGF0aH0gKGV4Y2VlZHMgJHtNQVhfRklMRV9TSVpFX0JZVEVTfSBieXRlcylgLFxuICAgICAgICApXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIHRvdGFsIHNpemUgbGltaXRcbiAgICAgIGlmICh0b3RhbFNpemUgKyBmaWxlU2l6ZSA+IE1BWF9UT1RBTF9TSVpFX0JZVEVTKSB7XG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICBgVW50cmFja2VkIGZpbGUgY2FwdHVyZTogcmVhY2hlZCB0b3RhbCBzaXplIGxpbWl0ICgke01BWF9UT1RBTF9TSVpFX0JZVEVTfSBieXRlcylgLFxuICAgICAgICApXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIC8vIEVtcHR5IGZpbGUgLSBubyBuZWVkIHRvIG9wZW5cbiAgICAgIGlmIChmaWxlU2l6ZSA9PT0gMCkge1xuICAgICAgICByZXN1bHQucHVzaCh7IHBhdGg6IGZpbGVQYXRoLCBjb250ZW50OiAnJyB9KVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyBCaW5hcnkgc25pZmYgb24gdXAgdG8gU05JRkZfQlVGRkVSX1NJWkUgYnl0ZXMuIENhcHMgYmluYXJ5LWZpbGUgcmVhZHNcbiAgICAgIC8vIGF0IFNOSUZGX0JVRkZFUl9TSVpFIGV2ZW4gdGhvdWdoIE1BWF9GSUxFX1NJWkVfQllURVMgYWxsb3dzIHVwIHRvIDUwME1CLlxuICAgICAgLy8gSWYgdGhlIGZpbGUgZml0cyBpbiB0aGUgc25pZmYgYnVmZmVyIHdlIHJldXNlIGl0IGFzIHRoZSBjb250ZW50OyBmb3JcbiAgICAgIC8vIGxhcmdlciB0ZXh0IGZpbGVzIHdlIGZhbGwgYmFjayB0byByZWFkRmlsZSB3aXRoIGVuY29kaW5nIHNvIHRoZSBydW50aW1lXG4gICAgICAvLyBkZWNvZGVzIHRvIGEgc3RyaW5nIHdpdGhvdXQgbWF0ZXJpYWxpemluZyBhIGZ1bGwtc2l6ZSBCdWZmZXIgaW4gSlMuXG4gICAgICBjb25zdCBzbmlmZlNpemUgPSBNYXRoLm1pbihTTklGRl9CVUZGRVJfU0laRSwgZmlsZVNpemUpXG4gICAgICBjb25zdCBmZCA9IGF3YWl0IG9wZW4oZmlsZVBhdGgsICdyJylcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNuaWZmQnVmID0gQnVmZmVyLmFsbG9jKHNuaWZmU2l6ZSlcbiAgICAgICAgY29uc3QgeyBieXRlc1JlYWQgfSA9IGF3YWl0IGZkLnJlYWQoc25pZmZCdWYsIDAsIHNuaWZmU2l6ZSwgMClcbiAgICAgICAgY29uc3Qgc25pZmYgPSBzbmlmZkJ1Zi5zdWJhcnJheSgwLCBieXRlc1JlYWQpXG5cbiAgICAgICAgaWYgKGlzQmluYXJ5Q29udGVudChzbmlmZikpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbnRlbnQ6IHN0cmluZ1xuICAgICAgICBpZiAoZmlsZVNpemUgPD0gc25pZmZTaXplKSB7XG4gICAgICAgICAgLy8gU25pZmYgYWxyZWFkeSBjb3ZlcnMgdGhlIHdob2xlIGZpbGVcbiAgICAgICAgICBjb250ZW50ID0gc25pZmYudG9TdHJpbmcoJ3V0Zi04JylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyByZWFkRmlsZSB3aXRoIGVuY29kaW5nIGRlY29kZXMgdG8gc3RyaW5nIGRpcmVjdGx5LCBhdm9pZGluZyBhXG4gICAgICAgICAgLy8gZnVsbC1zaXplIEJ1ZmZlciBsaXZpbmcgYWxvbmdzaWRlIHRoZSBkZWNvZGVkIHN0cmluZy4gVGhlIGV4dHJhXG4gICAgICAgICAgLy8gb3Blbi9jbG9zZSBpcyBjaGVhcGVyIHRoYW4gZG91YmxpbmcgcGVhayBtZW1vcnkgZm9yIGxhcmdlIGZpbGVzLlxuICAgICAgICAgIGNvbnRlbnQgPSBhd2FpdCByZWFkRmlsZShmaWxlUGF0aCwgJ3V0Zi04JylcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5wdXNoKHsgcGF0aDogZmlsZVBhdGgsIGNvbnRlbnQgfSlcbiAgICAgICAgdG90YWxTaXplICs9IGZpbGVTaXplXG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBhd2FpdCBmZC5jbG9zZSgpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBTa2lwIGZpbGVzIHdlIGNhbid0IHJlYWRcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhgRmFpbGVkIHRvIHJlYWQgdW50cmFja2VkIGZpbGUgJHtmaWxlUGF0aH06ICR7ZXJyfWApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIFByZXNlcnZlIGdpdCBzdGF0ZSBmb3IgaXNzdWUgc3VibWlzc2lvbi5cbiAqIFVzZXMgcmVtb3RlIGJhc2UgZm9yIG1vcmUgc3RhYmxlIHJlcGxheSBjYXBhYmlsaXR5LlxuICpcbiAqIEVkZ2UgY2FzZXMgaGFuZGxlZDpcbiAqIC0gRGV0YWNoZWQgSEVBRDogZmFsbHMgYmFjayB0byBtZXJnZS1iYXNlIHdpdGggZGVmYXVsdCBicmFuY2ggZGlyZWN0bHlcbiAqIC0gTm8gcmVtb3RlOiByZXR1cm5zIG51bGwgZm9yIHJlbW90ZSBmaWVsZHMsIHVzZXMgSEVBRC1vbmx5IG1vZGVcbiAqIC0gU2hhbGxvdyBjbG9uZTogZmFsbHMgYmFjayB0byBIRUFELW9ubHkgbW9kZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlc2VydmVHaXRTdGF0ZUZvcklzc3VlKCk6IFByb21pc2U8UHJlc2VydmVkR2l0U3RhdGUgfCBudWxsPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgaXNHaXQgPSBhd2FpdCBnZXRJc0dpdCgpXG4gICAgaWYgKCFpc0dpdCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3Igc2hhbGxvdyBjbG9uZSAtIGZhbGwgYmFjayB0byBzaW1wbGVyIG1vZGVcbiAgICBpZiAoYXdhaXQgaXNTaGFsbG93Q2xvbmUoKSkge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKCdTaGFsbG93IGNsb25lIGRldGVjdGVkLCB1c2luZyBIRUFELW9ubHkgbW9kZSBmb3IgaXNzdWUnKVxuICAgICAgY29uc3QgW3sgc3Rkb3V0OiBwYXRjaCB9LCB1bnRyYWNrZWRGaWxlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIGV4ZWNGaWxlTm9UaHJvdyhnaXRFeGUoKSwgWydkaWZmJywgJ0hFQUQnXSksXG4gICAgICAgIGNhcHR1cmVVbnRyYWNrZWRGaWxlcygpLFxuICAgICAgXSlcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlbW90ZV9iYXNlX3NoYTogbnVsbCxcbiAgICAgICAgcmVtb3RlX2Jhc2U6IG51bGwsXG4gICAgICAgIHBhdGNoOiBwYXRjaCB8fCAnJyxcbiAgICAgICAgdW50cmFja2VkX2ZpbGVzOiB1bnRyYWNrZWRGaWxlcyxcbiAgICAgICAgZm9ybWF0X3BhdGNoOiBudWxsLFxuICAgICAgICBoZWFkX3NoYTogbnVsbCxcbiAgICAgICAgYnJhbmNoX25hbWU6IG51bGwsXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRmluZCB0aGUgYmVzdCByZW1vdGUgYmFzZVxuICAgIGNvbnN0IHJlbW90ZUJhc2UgPSBhd2FpdCBmaW5kUmVtb3RlQmFzZSgpXG5cbiAgICBpZiAoIXJlbW90ZUJhc2UpIHtcbiAgICAgIC8vIE5vIHJlbW90ZSBmb3VuZCAtIHVzZSBIRUFELW9ubHkgbW9kZVxuICAgICAgbG9nRm9yRGVidWdnaW5nKCdObyByZW1vdGUgZm91bmQsIHVzaW5nIEhFQUQtb25seSBtb2RlIGZvciBpc3N1ZScpXG4gICAgICBjb25zdCBbeyBzdGRvdXQ6IHBhdGNoIH0sIHVudHJhY2tlZEZpbGVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZXhlY0ZpbGVOb1Rocm93KGdpdEV4ZSgpLCBbJ2RpZmYnLCAnSEVBRCddKSxcbiAgICAgICAgY2FwdHVyZVVudHJhY2tlZEZpbGVzKCksXG4gICAgICBdKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVtb3RlX2Jhc2Vfc2hhOiBudWxsLFxuICAgICAgICByZW1vdGVfYmFzZTogbnVsbCxcbiAgICAgICAgcGF0Y2g6IHBhdGNoIHx8ICcnLFxuICAgICAgICB1bnRyYWNrZWRfZmlsZXM6IHVudHJhY2tlZEZpbGVzLFxuICAgICAgICBmb3JtYXRfcGF0Y2g6IG51bGwsXG4gICAgICAgIGhlYWRfc2hhOiBudWxsLFxuICAgICAgICBicmFuY2hfbmFtZTogbnVsbCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZXQgdGhlIG1lcmdlLWJhc2Ugd2l0aCByZW1vdGVcbiAgICBjb25zdCB7IHN0ZG91dDogbWVyZ2VCYXNlLCBjb2RlOiBtZXJnZUJhc2VDb2RlIH0gPSBhd2FpdCBleGVjRmlsZU5vVGhyb3coXG4gICAgICBnaXRFeGUoKSxcbiAgICAgIFsnbWVyZ2UtYmFzZScsICdIRUFEJywgcmVtb3RlQmFzZV0sXG4gICAgICB7IHByZXNlcnZlT3V0cHV0T25FcnJvcjogZmFsc2UgfSxcbiAgICApXG5cbiAgICBpZiAobWVyZ2VCYXNlQ29kZSAhPT0gMCB8fCAhbWVyZ2VCYXNlLnRyaW0oKSkge1xuICAgICAgLy8gTWVyZ2UtYmFzZSBmYWlsZWQgLSBmYWxsIGJhY2sgdG8gSEVBRC1vbmx5XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoJ01lcmdlLWJhc2UgZmFpbGVkLCB1c2luZyBIRUFELW9ubHkgbW9kZSBmb3IgaXNzdWUnKVxuICAgICAgY29uc3QgW3sgc3Rkb3V0OiBwYXRjaCB9LCB1bnRyYWNrZWRGaWxlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIGV4ZWNGaWxlTm9UaHJvdyhnaXRFeGUoKSwgWydkaWZmJywgJ0hFQUQnXSksXG4gICAgICAgIGNhcHR1cmVVbnRyYWNrZWRGaWxlcygpLFxuICAgICAgXSlcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlbW90ZV9iYXNlX3NoYTogbnVsbCxcbiAgICAgICAgcmVtb3RlX2Jhc2U6IG51bGwsXG4gICAgICAgIHBhdGNoOiBwYXRjaCB8fCAnJyxcbiAgICAgICAgdW50cmFja2VkX2ZpbGVzOiB1bnRyYWNrZWRGaWxlcyxcbiAgICAgICAgZm9ybWF0X3BhdGNoOiBudWxsLFxuICAgICAgICBoZWFkX3NoYTogbnVsbCxcbiAgICAgICAgYnJhbmNoX25hbWU6IG51bGwsXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3RlQmFzZVNoYSA9IG1lcmdlQmFzZS50cmltKClcblxuICAgIC8vIEFsbCA1IGNvbW1hbmRzIGJlbG93IGRlcGVuZCBvbmx5IG9uIHJlbW90ZUJhc2VTaGEgXHUyMDE0IHJ1biB0aGVtIGluIHBhcmFsbGVsLlxuICAgIC8vIH41XHUwMEQ3OTBtcyBzZXJpYWwgXHUyMTkyIH45MG1zIHBhcmFsbGVsIG9uIEJ1biBuYXRpdmUgKHVzZWQgYnkgL2lzc3VlIGFuZCAvc2hhcmUpLlxuICAgIGNvbnN0IFtcbiAgICAgIHsgc3Rkb3V0OiBwYXRjaCB9LFxuICAgICAgdW50cmFja2VkRmlsZXMsXG4gICAgICB7IHN0ZG91dDogZm9ybWF0UGF0Y2hPdXQsIGNvZGU6IGZvcm1hdFBhdGNoQ29kZSB9LFxuICAgICAgeyBzdGRvdXQ6IGhlYWRTaGEgfSxcbiAgICAgIHsgc3Rkb3V0OiBicmFuY2hOYW1lIH0sXG4gICAgXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIC8vIFBhdGNoIGZyb20gbWVyZ2UtYmFzZSB0byBjdXJyZW50IHN0YXRlIChpbmNsdWRpbmcgc3RhZ2VkIGNoYW5nZXMpXG4gICAgICBleGVjRmlsZU5vVGhyb3coZ2l0RXhlKCksIFsnZGlmZicsIHJlbW90ZUJhc2VTaGFdKSxcbiAgICAgIC8vIFVudHJhY2tlZCBmaWxlcyBjYXB0dXJlZCBzZXBhcmF0ZWx5XG4gICAgICBjYXB0dXJlVW50cmFja2VkRmlsZXMoKSxcbiAgICAgIC8vIGZvcm1hdC1wYXRjaCBmb3IgY29tbWl0dGVkIGNoYW5nZXMgYmV0d2VlbiBtZXJnZS1iYXNlIGFuZCBIRUFELlxuICAgICAgLy8gUHJlc2VydmVzIHRoZSBhY3R1YWwgY29tbWl0IGNoYWluIChhdXRob3IsIGRhdGUsIG1lc3NhZ2UpIHNvIHJlcGxheVxuICAgICAgLy8gY29udGFpbmVycyBjYW4gcmVjb25zdHJ1Y3QgdGhlIGJyYW5jaCB3aXRoIHJlYWwgY29tbWl0cyBpbnN0ZWFkIG9mIGFcbiAgICAgIC8vIHNxdWFzaGVkIGRpZmYuIFVzZXMgLS1zdGRvdXQgdG8gZW1pdCBhbGwgcGF0Y2hlcyBhcyBhIHNpbmdsZSB0ZXh0IHN0cmVhbS5cbiAgICAgIGV4ZWNGaWxlTm9UaHJvdyhnaXRFeGUoKSwgW1xuICAgICAgICAnZm9ybWF0LXBhdGNoJyxcbiAgICAgICAgYCR7cmVtb3RlQmFzZVNoYX0uLkhFQURgLFxuICAgICAgICAnLS1zdGRvdXQnLFxuICAgICAgXSksXG4gICAgICAvLyBIRUFEIFNIQSBmb3IgcmVwbGF5XG4gICAgICBleGVjRmlsZU5vVGhyb3coZ2l0RXhlKCksIFsncmV2LXBhcnNlJywgJ0hFQUQnXSksXG4gICAgICAvLyBCcmFuY2ggbmFtZSBmb3IgcmVwbGF5XG4gICAgICBleGVjRmlsZU5vVGhyb3coZ2l0RXhlKCksIFsncmV2LXBhcnNlJywgJy0tYWJicmV2LXJlZicsICdIRUFEJ10pLFxuICAgIF0pXG5cbiAgICBsZXQgZm9ybWF0UGF0Y2g6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gICAgaWYgKGZvcm1hdFBhdGNoQ29kZSA9PT0gMCAmJiBmb3JtYXRQYXRjaE91dCAmJiBmb3JtYXRQYXRjaE91dC50cmltKCkpIHtcbiAgICAgIGZvcm1hdFBhdGNoID0gZm9ybWF0UGF0Y2hPdXRcbiAgICB9XG5cbiAgICBjb25zdCB0cmltbWVkQnJhbmNoID0gYnJhbmNoTmFtZT8udHJpbSgpXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlbW90ZV9iYXNlX3NoYTogcmVtb3RlQmFzZVNoYSxcbiAgICAgIHJlbW90ZV9iYXNlOiByZW1vdGVCYXNlLFxuICAgICAgcGF0Y2g6IHBhdGNoIHx8ICcnLFxuICAgICAgdW50cmFja2VkX2ZpbGVzOiB1bnRyYWNrZWRGaWxlcyxcbiAgICAgIGZvcm1hdF9wYXRjaDogZm9ybWF0UGF0Y2gsXG4gICAgICBoZWFkX3NoYTogaGVhZFNoYT8udHJpbSgpIHx8IG51bGwsXG4gICAgICBicmFuY2hfbmFtZTpcbiAgICAgICAgdHJpbW1lZEJyYW5jaCAmJiB0cmltbWVkQnJhbmNoICE9PSAnSEVBRCcgPyB0cmltbWVkQnJhbmNoIDogbnVsbCxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGxvZ0Vycm9yKGVycilcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmZ1bmN0aW9uIGlzTG9jYWxIb3N0KGhvc3Q6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCBob3N0V2l0aG91dFBvcnQgPSBob3N0LnNwbGl0KCc6JylbMF0gPz8gJydcbiAgcmV0dXJuIChcbiAgICBob3N0V2l0aG91dFBvcnQgPT09ICdsb2NhbGhvc3QnIHx8XG4gICAgL14xMjdcXC5cXGR7MSwzfVxcLlxcZHsxLDN9XFwuXFxkezEsM30kLy50ZXN0KGhvc3RXaXRob3V0UG9ydClcbiAgKVxufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgY3VycmVudCB3b3JraW5nIGRpcmVjdG9yeSBhcHBlYXJzIHRvIGJlIGEgYmFyZSBnaXQgcmVwb3NpdG9yeVxuICogb3IgaGFzIGJlZW4gbWFuaXB1bGF0ZWQgdG8gbG9vayBsaWtlIG9uZSAoc2FuZGJveCBlc2NhcGUgYXR0YWNrIHZlY3RvcikuXG4gKlxuICogU0VDVVJJVFk6IEdpdCdzIGlzX2dpdF9kaXJlY3RvcnkoKSBmdW5jdGlvbiAoc2V0dXAuYzo0MTctNDU1KSBjaGVja3MgZm9yOlxuICogMS4gSEVBRCBmaWxlIC0gTXVzdCBiZSBhIHZhbGlkIHJlZlxuICogMi4gb2JqZWN0cy8gZGlyZWN0b3J5IC0gTXVzdCBleGlzdCBhbmQgYmUgYWNjZXNzaWJsZVxuICogMy4gcmVmcy8gZGlyZWN0b3J5IC0gTXVzdCBleGlzdCBhbmQgYmUgYWNjZXNzaWJsZVxuICpcbiAqIElmIGFsbCB0aHJlZSBleGlzdCBpbiB0aGUgY3VycmVudCBkaXJlY3RvcnkgKG5vdCBpbiBhIC5naXQgc3ViZGlyZWN0b3J5KSxcbiAqIEdpdCB0cmVhdHMgdGhlIGN1cnJlbnQgZGlyZWN0b3J5IGFzIGEgYmFyZSByZXBvc2l0b3J5IGFuZCB3aWxsIGV4ZWN1dGVcbiAqIGhvb2tzL3ByZS1jb21taXQgYW5kIG90aGVyIGhvb2sgc2NyaXB0cyBmcm9tIHRoZSBjd2QuXG4gKlxuICogQXR0YWNrIHNjZW5hcmlvOlxuICogMS4gQXR0YWNrZXIgY3JlYXRlcyBIRUFELCBvYmplY3RzLywgcmVmcy8sIGFuZCBob29rcy9wcmUtY29tbWl0IGluIGN3ZFxuICogMi4gQXR0YWNrZXIgZGVsZXRlcyBvciBjb3JydXB0cyAuZ2l0L0hFQUQgdG8gaW52YWxpZGF0ZSB0aGUgbm9ybWFsIGdpdCBkaXJlY3RvcnlcbiAqIDMuIFdoZW4gdXNlciBydW5zICdnaXQgc3RhdHVzJywgR2l0IHRyZWF0cyBjd2QgYXMgdGhlIGdpdCBkaXIgYW5kIHJ1bnMgdGhlIGhvb2tcbiAqXG4gKiBAcmV0dXJucyB0cnVlIGlmIHRoZSBjd2QgbG9va3MgbGlrZSBhIGJhcmUvZXhwbG9pdGVkIGdpdCBkaXJlY3RvcnlcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgY3VzdG9tLXJ1bGVzL25vLXN5bmMtZnMgLS0gc3luYyBwZXJtaXNzaW9uLWV2YWwgY2hlY2sgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0N1cnJlbnREaXJlY3RvcnlCYXJlR2l0UmVwbygpOiBib29sZWFuIHtcbiAgY29uc3QgZnMgPSBnZXRGc0ltcGxlbWVudGF0aW9uKClcbiAgY29uc3QgY3dkID0gZ2V0Q3dkKClcblxuICBjb25zdCBnaXRQYXRoID0gam9pbihjd2QsICcuZ2l0JylcbiAgdHJ5IHtcbiAgICBjb25zdCBzdGF0cyA9IGZzLnN0YXRTeW5jKGdpdFBhdGgpXG4gICAgaWYgKHN0YXRzLmlzRmlsZSgpKSB7XG4gICAgICAvLyB3b3JrdHJlZS9zdWJtb2R1bGUgXHUyMDE0IEdpdCBmb2xsb3dzIHRoZSBnaXRkaXIgcmVmZXJlbmNlXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgaWYgKHN0YXRzLmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgIGNvbnN0IGdpdEhlYWRQYXRoID0gam9pbihnaXRQYXRoLCAnSEVBRCcpXG4gICAgICB0cnkge1xuICAgICAgICAvLyBTRUNVUklUWTogY2hlY2sgaXNGaWxlKCkuIEFuIGF0dGFja2VyIGNyZWF0aW5nIC5naXQvSEVBRCBhcyBhXG4gICAgICAgIC8vIERJUkVDVE9SWSB3b3VsZCBwYXNzIGEgYmFyZSBzdGF0U3luYyBidXQgR2l0J3Mgc2V0dXBfZ2l0X2RpcmVjdG9yeVxuICAgICAgICAvLyByZWplY3RzIGl0IChub3QgYSB2YWxpZCBIRUFEKSBhbmQgZmFsbHMgYmFjayB0byBjd2QgZGlzY292ZXJ5LlxuICAgICAgICBpZiAoZnMuc3RhdFN5bmMoZ2l0SGVhZFBhdGgpLmlzRmlsZSgpKSB7XG4gICAgICAgICAgLy8gbm9ybWFsIHJlcG8gXHUyMDE0IC5naXQvSEVBRCB2YWxpZCwgR2l0IHdvbid0IGZhbGwgYmFjayB0byBjd2RcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICAvLyAuZ2l0L0hFQUQgZXhpc3RzIGJ1dCBpcyBub3QgYSByZWd1bGFyIGZpbGUgXHUyMDE0IGZhbGwgdGhyb3VnaFxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIC5naXQgZXhpc3RzIGJ1dCBubyBIRUFEIFx1MjAxNCBmYWxsIHRocm91Z2ggdG8gYmFyZS1yZXBvIGNoZWNrXG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIHtcbiAgICAvLyBubyAuZ2l0IFx1MjAxNCBmYWxsIHRocm91Z2ggdG8gYmFyZS1yZXBvIGluZGljYXRvciBjaGVja1xuICB9XG5cbiAgLy8gTm8gdmFsaWQgLmdpdC9IRUFEIGZvdW5kLiBDaGVjayBpZiBjd2QgaGFzIGJhcmUgZ2l0IHJlcG8gaW5kaWNhdG9ycy5cbiAgLy8gQmUgY2F1dGlvdXMgXHUyMDE0IGZsYWcgaWYgQU5ZIG9mIHRoZXNlIGV4aXN0IHdpdGhvdXQgYSB2YWxpZCAuZ2l0IHJlZmVyZW5jZS5cbiAgLy8gUGVyLWluZGljYXRvciB0cnkvY2F0Y2ggc28gYW4gZXJyb3Igb24gb25lIGRvZXNuJ3QgbWFzayBhbm90aGVyLlxuICB0cnkge1xuICAgIGlmIChmcy5zdGF0U3luYyhqb2luKGN3ZCwgJ0hFQUQnKSkuaXNGaWxlKCkpIHJldHVybiB0cnVlXG4gIH0gY2F0Y2gge1xuICAgIC8vIG5vIEhFQURcbiAgfVxuICB0cnkge1xuICAgIGlmIChmcy5zdGF0U3luYyhqb2luKGN3ZCwgJ29iamVjdHMnKSkuaXNEaXJlY3RvcnkoKSkgcmV0dXJuIHRydWVcbiAgfSBjYXRjaCB7XG4gICAgLy8gbm8gb2JqZWN0cy9cbiAgfVxuICB0cnkge1xuICAgIGlmIChmcy5zdGF0U3luYyhqb2luKGN3ZCwgJ3JlZnMnKSkuaXNEaXJlY3RvcnkoKSkgcmV0dXJuIHRydWVcbiAgfSBjYXRjaCB7XG4gICAgLy8gbm8gcmVmcy9cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cbi8qIGVzbGludC1lbmFibGUgY3VzdG9tLXJ1bGVzL25vLXN5bmMtZnMgKi9cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvSE8sU0FBUyxtQkFBbUIsVUFBMkI7QUFDNUQsUUFBTSxNQUFNLFNBQVMsTUFBTSxTQUFTLFlBQVksR0FBRyxDQUFDLEVBQUUsWUFBWTtBQUNsRSxTQUFPLGtCQUFrQixJQUFJLEdBQUc7QUFDbEM7QUFXTyxTQUFTLGdCQUFnQixRQUF5QjtBQUV2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QUFBLFFBQ3pCLFdBQVcsVUFBVTtBQUNuQixrQkFBUSxLQUFLLFFBQVE7QUFBQSxRQUN2QjtBQUFBLE1BQ0YsQ0FBQztBQUVILGFBQU8sRUFBRSxTQUFTLFVBQVU7QUFBQSxJQUM5QjtBQUVPLElBQU0sbUJBQW1CLFlBQTZCO0FBQzNELGFBQU8sdUJBQXVCO0FBQUEsSUFDaEM7QUFRTyxJQUFNLG9CQUFvQixPQUFPLFlBQXVDO0FBQzdFLFVBQUk7QUFDRixjQUFNLGVBQ0osV0FBVyw2QkFBNEIsb0JBQUksS0FBSyxHQUFFLFlBQVksQ0FBQztBQUdqRSxjQUFNLEVBQUUsVUFBVSxJQUFJLE1BQU0sY0FBYztBQUkxQyxZQUFJLFVBQVUsU0FBUyxHQUFHO0FBQ3hCLGdCQUFNLEVBQUUsTUFBTSxRQUFRLElBQUksTUFBTTtBQUFBLFlBQzlCLE9BQU87QUFBQSxZQUNQLENBQUMsT0FBTyxHQUFHLFNBQVM7QUFBQSxZQUNwQixFQUFFLHVCQUF1QixNQUFNO0FBQUEsVUFDakM7QUFFQSxjQUFJLFlBQVksR0FBRztBQUNqQixtQkFBTztBQUFBLFVBQ1Q7QUFBQSxRQUNGO0FBR0EsY0FBTSxFQUFFLEtBQUssSUFBSSxNQUFNO0FBQUEsVUFDckIsT0FBTztBQUFBLFVBQ1AsQ0FBQyxTQUFTLFFBQVEsYUFBYSxZQUFZO0FBQUEsVUFDM0MsRUFBRSx1QkFBdUIsTUFBTTtBQUFBLFFBQ2pDO0FBQ0EsZUFBTyxTQUFTO0FBQUEsTUFDbEIsU0FBUyxHQUFHO0FBQ1YsZUFBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBdUZBLElBQU0sc0JBQXNCLE1BQU0sT0FBTztBQUN6QyxJQUFNLHVCQUF1QixJQUFJLE9BQU8sT0FBTztBQUMvQyxJQUFNLGlCQUFpQjtBQU12QixJQUFNLG9CQUFvQixLQUFLO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFsicmVhZEZpbGUiLCAiam9pbiIsICJyZWFkRmlsZSIsICJzdGF0IiwgImRpcm5hbWUiLCAiam9pbiIsICJyZXNvbHZlIiwgImlzU2hhbGxvd0Nsb25lIiwgInBhdGNoIiwgInVudHJhY2tlZEZpbGVzIiwgImluaXRfbWVtb2l6ZSJdCn0K
