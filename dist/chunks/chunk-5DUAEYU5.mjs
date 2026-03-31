#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  getCanonicalName,
  init_model,
  init_sequential,
  sequential
} from "./chunk-Z6CSO4BY.mjs";
import {
  findGitRoot,
  getRemoteUrlForDir,
  gitExe,
  init_git,
  init_gitFilesystem,
  resolveGitDir
} from "./chunk-7SC6PTLR.mjs";
import {
  execFileNoThrowWithCwd,
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
  getFsImplementation,
  init_debug,
  init_fsOperations,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import {
  getOriginalCwd,
  getSessionId,
  init_state
} from "./chunk-NGSB34MB.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/generatedFiles.ts
import { basename, extname, posix, sep } from "path";
function isGeneratedFile(filePath) {
  const normalizedPath = posix.sep + filePath.split(sep).join(posix.sep).replace(/^\/+/, "");
  const fileName = basename(filePath).toLowerCase();
  const ext = extname(filePath).toLowerCase();
  if (EXCLUDED_FILENAMES.has(fileName)) {
    return true;
  }
  if (EXCLUDED_EXTENSIONS.has(ext)) {
    return true;
  }
  const parts = fileName.split(".");
  if (parts.length > 2) {
    const compoundExt = "." + parts.slice(-2).join(".");
    if (EXCLUDED_EXTENSIONS.has(compoundExt)) {
      return true;
    }
  }
  for (const dir of EXCLUDED_DIRECTORIES) {
    if (normalizedPath.includes(dir)) {
      return true;
    }
  }
  for (const pattern of EXCLUDED_FILENAME_PATTERNS) {
    if (pattern.test(fileName)) {
      return true;
    }
  }
  return false;
}
var EXCLUDED_FILENAMES, EXCLUDED_EXTENSIONS, EXCLUDED_DIRECTORIES, EXCLUDED_FILENAME_PATTERNS;
var init_generatedFiles = __esm({
  "src/utils/generatedFiles.ts"() {
    EXCLUDED_FILENAMES = /* @__PURE__ */ new Set([
      "package-lock.json",
      "yarn.lock",
      "pnpm-lock.yaml",
      "bun.lockb",
      "bun.lock",
      "composer.lock",
      "gemfile.lock",
      "cargo.lock",
      "poetry.lock",
      "pipfile.lock",
      "shrinkwrap.json",
      "npm-shrinkwrap.json"
    ]);
    EXCLUDED_EXTENSIONS = /* @__PURE__ */ new Set([
      ".lock",
      ".min.js",
      ".min.css",
      ".min.html",
      ".bundle.js",
      ".bundle.css",
      ".generated.ts",
      ".generated.js",
      ".d.ts"
      // TypeScript declaration files
    ]);
    EXCLUDED_DIRECTORIES = [
      "/dist/",
      "/build/",
      "/out/",
      "/output/",
      "/node_modules/",
      "/vendor/",
      "/vendored/",
      "/third_party/",
      "/third-party/",
      "/external/",
      "/.next/",
      "/.nuxt/",
      "/.svelte-kit/",
      "/coverage/",
      "/__pycache__/",
      "/.tox/",
      "/venv/",
      "/.venv/",
      "/target/release/",
      "/target/debug/"
    ];
    EXCLUDED_FILENAME_PATTERNS = [
      /^.*\.min\.[a-z]+$/i,
      // *.min.*
      /^.*-min\.[a-z]+$/i,
      // *-min.*
      /^.*\.bundle\.[a-z]+$/i,
      // *.bundle.*
      /^.*\.generated\.[a-z]+$/i,
      // *.generated.*
      /^.*\.gen\.[a-z]+$/i,
      // *.gen.*
      /^.*\.auto\.[a-z]+$/i,
      // *.auto.*
      /^.*_generated\.[a-z]+$/i,
      // *_generated.*
      /^.*_gen\.[a-z]+$/i,
      // *_gen.*
      /^.*\.pb\.(go|js|ts|py|rb)$/i,
      // Protocol buffer generated files
      /^.*_pb2?\.py$/i,
      // Python protobuf files
      /^.*\.pb\.h$/i,
      // C++ protobuf headers
      /^.*\.grpc\.[a-z]+$/i,
      // gRPC generated files
      /^.*\.swagger\.[a-z]+$/i,
      // Swagger generated files
      /^.*\.openapi\.[a-z]+$/i
      // OpenAPI generated files
    ];
  }
});

// src/utils/commitAttribution.ts
import { createHash, randomUUID } from "crypto";
import { stat } from "fs/promises";
import { isAbsolute, join, relative, sep as sep2 } from "path";
function getAttributionRepoRoot() {
  const cwd = getCwd();
  return findGitRoot(cwd) ?? getOriginalCwd();
}
function getRepoClassCached() {
  return repoClassCache;
}
function isInternalModelRepoCached() {
  return repoClassCache === "internal";
}
function sanitizeSurfaceKey(surfaceKey) {
  const slashIndex = surfaceKey.lastIndexOf("/");
  if (slashIndex === -1) {
    return surfaceKey;
  }
  const surface = surfaceKey.slice(0, slashIndex);
  const model = surfaceKey.slice(slashIndex + 1);
  const sanitizedModel = sanitizeModelName(model);
  return `${surface}/${sanitizedModel}`;
}
function sanitizeModelName(shortName) {
  if (shortName.includes("opus-4-6")) return "claude-opus-4-6";
  if (shortName.includes("opus-4-5")) return "claude-opus-4-5";
  if (shortName.includes("opus-4-1")) return "claude-opus-4-1";
  if (shortName.includes("opus-4")) return "claude-opus-4";
  if (shortName.includes("sonnet-4-6")) return "claude-sonnet-4-6";
  if (shortName.includes("sonnet-4-5")) return "claude-sonnet-4-5";
  if (shortName.includes("sonnet-4")) return "claude-sonnet-4";
  if (shortName.includes("sonnet-3-7")) return "claude-sonnet-3-7";
  if (shortName.includes("haiku-4-5")) return "claude-haiku-4-5";
  if (shortName.includes("haiku-3-5")) return "claude-haiku-3-5";
  return "claude";
}
function getClientSurface() {
  return process.env.CLAUDE_CODE_ENTRYPOINT ?? "cli";
}
function buildSurfaceKey(surface, model) {
  return `${surface}/${getCanonicalName(model)}`;
}
function computeContentHash(content) {
  return createHash("sha256").update(content).digest("hex");
}
function normalizeFilePath(filePath) {
  const fs = getFsImplementation();
  const cwd = getAttributionRepoRoot();
  if (!isAbsolute(filePath)) {
    return filePath;
  }
  let resolvedPath = filePath;
  let resolvedCwd = cwd;
  try {
    resolvedPath = fs.realpathSync(filePath);
  } catch {
  }
  try {
    resolvedCwd = fs.realpathSync(cwd);
  } catch {
  }
  if (resolvedPath.startsWith(resolvedCwd + sep2) || resolvedPath === resolvedCwd) {
    return relative(resolvedCwd, resolvedPath).replaceAll(sep2, "/");
  }
  if (filePath.startsWith(cwd + sep2) || filePath === cwd) {
    return relative(cwd, filePath).replaceAll(sep2, "/");
  }
  return filePath;
}
function expandFilePath(filePath) {
  if (isAbsolute(filePath)) {
    return filePath;
  }
  return join(getAttributionRepoRoot(), filePath);
}
function createEmptyAttributionState() {
  return {
    fileStates: /* @__PURE__ */ new Map(),
    sessionBaselines: /* @__PURE__ */ new Map(),
    surface: getClientSurface(),
    startingHeadSha: null,
    promptCount: 0,
    promptCountAtLastCommit: 0,
    permissionPromptCount: 0,
    permissionPromptCountAtLastCommit: 0,
    escapeCount: 0,
    escapeCountAtLastCommit: 0
  };
}
function computeFileModificationState(existingFileStates, filePath, oldContent, newContent, mtime) {
  const normalizedPath = normalizeFilePath(filePath);
  try {
    let claudeContribution;
    if (oldContent === "" || newContent === "") {
      claudeContribution = oldContent === "" ? newContent.length : oldContent.length;
    } else {
      const minLen = Math.min(oldContent.length, newContent.length);
      let prefixEnd = 0;
      while (prefixEnd < minLen && oldContent[prefixEnd] === newContent[prefixEnd]) {
        prefixEnd++;
      }
      let suffixLen = 0;
      while (suffixLen < minLen - prefixEnd && oldContent[oldContent.length - 1 - suffixLen] === newContent[newContent.length - 1 - suffixLen]) {
        suffixLen++;
      }
      const oldChangedLen = oldContent.length - prefixEnd - suffixLen;
      const newChangedLen = newContent.length - prefixEnd - suffixLen;
      claudeContribution = Math.max(oldChangedLen, newChangedLen);
    }
    const existingState = existingFileStates.get(normalizedPath);
    const existingContribution = existingState?.claudeContribution ?? 0;
    return {
      contentHash: computeContentHash(newContent),
      claudeContribution: existingContribution + claudeContribution,
      mtime
    };
  } catch (error) {
    logError(error);
    return null;
  }
}
async function getFileMtime(filePath) {
  const normalizedPath = normalizeFilePath(filePath);
  const absPath = expandFilePath(normalizedPath);
  try {
    const stats = await stat(absPath);
    return stats.mtimeMs;
  } catch {
    return Date.now();
  }
}
function trackFileModification(state, filePath, oldContent, newContent, _userModified, mtime = Date.now()) {
  const normalizedPath = normalizeFilePath(filePath);
  const newFileState = computeFileModificationState(
    state.fileStates,
    filePath,
    oldContent,
    newContent,
    mtime
  );
  if (!newFileState) {
    return state;
  }
  const newFileStates = new Map(state.fileStates);
  newFileStates.set(normalizedPath, newFileState);
  logForDebugging(
    `Attribution: Tracked ${newFileState.claudeContribution} chars for ${normalizedPath}`
  );
  return {
    ...state,
    fileStates: newFileStates
  };
}
function trackFileCreation(state, filePath, content, mtime = Date.now()) {
  return trackFileModification(state, filePath, "", content, false, mtime);
}
function trackFileDeletion(state, filePath, oldContent) {
  const normalizedPath = normalizeFilePath(filePath);
  const existingState = state.fileStates.get(normalizedPath);
  const existingContribution = existingState?.claudeContribution ?? 0;
  const deletedChars = oldContent.length;
  const newFileState = {
    contentHash: "",
    // Empty hash for deleted files
    claudeContribution: existingContribution + deletedChars,
    mtime: Date.now()
  };
  const newFileStates = new Map(state.fileStates);
  newFileStates.set(normalizedPath, newFileState);
  logForDebugging(
    `Attribution: Tracked deletion of ${normalizedPath} (${deletedChars} chars removed, total contribution: ${newFileState.claudeContribution})`
  );
  return {
    ...state,
    fileStates: newFileStates
  };
}
function trackBulkFileChanges(state, changes) {
  const newFileStates = new Map(state.fileStates);
  for (const change of changes) {
    const mtime = change.mtime ?? Date.now();
    if (change.type === "deleted") {
      const normalizedPath = normalizeFilePath(change.path);
      const existingState = newFileStates.get(normalizedPath);
      const existingContribution = existingState?.claudeContribution ?? 0;
      const deletedChars = change.oldContent.length;
      newFileStates.set(normalizedPath, {
        contentHash: "",
        claudeContribution: existingContribution + deletedChars,
        mtime
      });
      logForDebugging(
        `Attribution: Tracked deletion of ${normalizedPath} (${deletedChars} chars removed, total contribution: ${existingContribution + deletedChars})`
      );
    } else {
      const newFileState = computeFileModificationState(
        newFileStates,
        change.path,
        change.oldContent,
        change.newContent,
        mtime
      );
      if (newFileState) {
        const normalizedPath = normalizeFilePath(change.path);
        newFileStates.set(normalizedPath, newFileState);
        logForDebugging(
          `Attribution: Tracked ${newFileState.claudeContribution} chars for ${normalizedPath}`
        );
      }
    }
  }
  return {
    ...state,
    fileStates: newFileStates
  };
}
async function calculateCommitAttribution(states, stagedFiles) {
  const cwd = getAttributionRepoRoot();
  const sessionId = getSessionId();
  const files = {};
  const excludedGenerated = [];
  const surfaces = /* @__PURE__ */ new Set();
  const surfaceCounts = {};
  let totalClaudeChars = 0;
  let totalHumanChars = 0;
  const mergedFileStates = /* @__PURE__ */ new Map();
  const mergedBaselines = /* @__PURE__ */ new Map();
  for (const state of states) {
    surfaces.add(state.surface);
    const baselines = state.sessionBaselines instanceof Map ? state.sessionBaselines : new Map(
      Object.entries(
        state.sessionBaselines ?? {}
      )
    );
    for (const [path, baseline] of baselines) {
      if (!mergedBaselines.has(path)) {
        mergedBaselines.set(path, baseline);
      }
    }
    const fileStates = state.fileStates instanceof Map ? state.fileStates : new Map(
      Object.entries(
        state.fileStates ?? {}
      )
    );
    for (const [path, fileState] of fileStates) {
      const existing = mergedFileStates.get(path);
      if (existing) {
        mergedFileStates.set(path, {
          ...fileState,
          claudeContribution: existing.claudeContribution + fileState.claudeContribution
        });
      } else {
        mergedFileStates.set(path, fileState);
      }
    }
  }
  const fileResults = await Promise.all(
    stagedFiles.map(async (file) => {
      if (isGeneratedFile(file)) {
        return { type: "generated", file };
      }
      const absPath = join(cwd, file);
      const fileState = mergedFileStates.get(file);
      const baseline = mergedBaselines.get(file);
      const fileSurface = states[0].surface;
      let claudeChars = 0;
      let humanChars = 0;
      const deleted = await isFileDeleted(file);
      if (deleted) {
        if (fileState) {
          claudeChars = fileState.claudeContribution;
          humanChars = 0;
        } else {
          const diffSize = await getGitDiffSize(file);
          humanChars = diffSize > 0 ? diffSize : 100;
        }
      } else {
        try {
          const stats = await stat(absPath);
          if (fileState) {
            claudeChars = fileState.claudeContribution;
            humanChars = 0;
          } else if (baseline) {
            const diffSize = await getGitDiffSize(file);
            humanChars = diffSize > 0 ? diffSize : stats.size;
          } else {
            humanChars = stats.size;
          }
        } catch {
          return null;
        }
      }
      claudeChars = Math.max(0, claudeChars);
      humanChars = Math.max(0, humanChars);
      const total = claudeChars + humanChars;
      const percent = total > 0 ? Math.round(claudeChars / total * 100) : 0;
      return {
        type: "file",
        file,
        claudeChars,
        humanChars,
        percent,
        surface: fileSurface
      };
    })
  );
  for (const result of fileResults) {
    if (!result) continue;
    if (result.type === "generated") {
      excludedGenerated.push(result.file);
      continue;
    }
    files[result.file] = {
      claudeChars: result.claudeChars,
      humanChars: result.humanChars,
      percent: result.percent,
      surface: result.surface
    };
    totalClaudeChars += result.claudeChars;
    totalHumanChars += result.humanChars;
    surfaceCounts[result.surface] = (surfaceCounts[result.surface] ?? 0) + result.claudeChars;
  }
  const totalChars = totalClaudeChars + totalHumanChars;
  const claudePercent = totalChars > 0 ? Math.round(totalClaudeChars / totalChars * 100) : 0;
  const surfaceBreakdown = {};
  for (const [surface, chars] of Object.entries(surfaceCounts)) {
    const percent = totalChars > 0 ? Math.round(chars / totalChars * 100) : 0;
    surfaceBreakdown[surface] = { claudeChars: chars, percent };
  }
  return {
    version: 1,
    summary: {
      claudePercent,
      claudeChars: totalClaudeChars,
      humanChars: totalHumanChars,
      surfaces: Array.from(surfaces)
    },
    files,
    surfaceBreakdown,
    excludedGenerated,
    sessions: [sessionId]
  };
}
async function getGitDiffSize(filePath) {
  const cwd = getAttributionRepoRoot();
  try {
    const result = await execFileNoThrowWithCwd(
      gitExe(),
      ["diff", "--cached", "--stat", "--", filePath],
      { cwd, timeout: 5e3 }
    );
    if (result.code !== 0 || !result.stdout) {
      return 0;
    }
    const lines = result.stdout.split("\n").filter(Boolean);
    let totalChanges = 0;
    for (const line of lines) {
      if (line.includes("file changed") || line.includes("files changed")) {
        const insertMatch = line.match(/(\d+) insertions?/);
        const deleteMatch = line.match(/(\d+) deletions?/);
        const insertions = insertMatch ? parseInt(insertMatch[1], 10) : 0;
        const deletions = deleteMatch ? parseInt(deleteMatch[1], 10) : 0;
        totalChanges += (insertions + deletions) * 40;
      }
    }
    return totalChanges;
  } catch {
    return 0;
  }
}
async function isFileDeleted(filePath) {
  const cwd = getAttributionRepoRoot();
  try {
    const result = await execFileNoThrowWithCwd(
      gitExe(),
      ["diff", "--cached", "--name-status", "--", filePath],
      { cwd, timeout: 5e3 }
    );
    if (result.code === 0 && result.stdout) {
      return result.stdout.trim().startsWith("D	");
    }
  } catch {
  }
  return false;
}
async function getStagedFiles() {
  const cwd = getAttributionRepoRoot();
  try {
    const result = await execFileNoThrowWithCwd(
      gitExe(),
      ["diff", "--cached", "--name-only"],
      { cwd, timeout: 5e3 }
    );
    if (result.code === 0 && result.stdout) {
      return result.stdout.split("\n").filter(Boolean);
    }
  } catch (error) {
    logError(error);
  }
  return [];
}
async function isGitTransientState() {
  const gitDir = await resolveGitDir(getAttributionRepoRoot());
  if (!gitDir) return false;
  const indicators = [
    "rebase-merge",
    "rebase-apply",
    "MERGE_HEAD",
    "CHERRY_PICK_HEAD",
    "BISECT_LOG"
  ];
  const results = await Promise.all(
    indicators.map(async (indicator) => {
      try {
        await stat(join(gitDir, indicator));
        return true;
      } catch {
        return false;
      }
    })
  );
  return results.some((exists) => exists);
}
function stateToSnapshotMessage(state, messageId) {
  const fileStates = {};
  for (const [path, fileState] of state.fileStates) {
    fileStates[path] = fileState;
  }
  return {
    type: "attribution-snapshot",
    messageId,
    surface: state.surface,
    fileStates,
    promptCount: state.promptCount,
    promptCountAtLastCommit: state.promptCountAtLastCommit,
    permissionPromptCount: state.permissionPromptCount,
    permissionPromptCountAtLastCommit: state.permissionPromptCountAtLastCommit,
    escapeCount: state.escapeCount,
    escapeCountAtLastCommit: state.escapeCountAtLastCommit
  };
}
function restoreAttributionStateFromSnapshots(snapshots) {
  const state = createEmptyAttributionState();
  const lastSnapshot = snapshots[snapshots.length - 1];
  if (!lastSnapshot) {
    return state;
  }
  state.surface = lastSnapshot.surface;
  for (const [path, fileState] of Object.entries(lastSnapshot.fileStates)) {
    state.fileStates.set(path, fileState);
  }
  state.promptCount = lastSnapshot.promptCount ?? 0;
  state.promptCountAtLastCommit = lastSnapshot.promptCountAtLastCommit ?? 0;
  state.permissionPromptCount = lastSnapshot.permissionPromptCount ?? 0;
  state.permissionPromptCountAtLastCommit = lastSnapshot.permissionPromptCountAtLastCommit ?? 0;
  state.escapeCount = lastSnapshot.escapeCount ?? 0;
  state.escapeCountAtLastCommit = lastSnapshot.escapeCountAtLastCommit ?? 0;
  return state;
}
function attributionRestoreStateFromLog(attributionSnapshots, onUpdateState) {
  const state = restoreAttributionStateFromSnapshots(attributionSnapshots);
  onUpdateState(state);
}
function incrementPromptCount(attribution, saveSnapshot) {
  const newAttribution = {
    ...attribution,
    promptCount: attribution.promptCount + 1
  };
  const snapshot = stateToSnapshotMessage(newAttribution, randomUUID());
  saveSnapshot(snapshot);
  return newAttribution;
}
var INTERNAL_MODEL_REPOS, repoClassCache, isInternalModelRepo;
var init_commitAttribution = __esm({
  "src/utils/commitAttribution.ts"() {
    init_state();
    init_cwd();
    init_debug();
    init_execFileNoThrow();
    init_fsOperations();
    init_generatedFiles();
    init_gitFilesystem();
    init_git();
    init_log();
    init_model();
    init_sequential();
    INTERNAL_MODEL_REPOS = [
      "github.com:anthropics/claude-cli-internal",
      "github.com/anthropics/claude-cli-internal",
      "github.com:anthropics/anthropic",
      "github.com/anthropics/anthropic",
      "github.com:anthropics/apps",
      "github.com/anthropics/apps",
      "github.com:anthropics/casino",
      "github.com/anthropics/casino",
      "github.com:anthropics/dbt",
      "github.com/anthropics/dbt",
      "github.com:anthropics/dotfiles",
      "github.com/anthropics/dotfiles",
      "github.com:anthropics/terraform-config",
      "github.com/anthropics/terraform-config",
      "github.com:anthropics/hex-export",
      "github.com/anthropics/hex-export",
      "github.com:anthropics/feedback-v2",
      "github.com/anthropics/feedback-v2",
      "github.com:anthropics/labs",
      "github.com/anthropics/labs",
      "github.com:anthropics/argo-rollouts",
      "github.com/anthropics/argo-rollouts",
      "github.com:anthropics/starling-configs",
      "github.com/anthropics/starling-configs",
      "github.com:anthropics/ts-tools",
      "github.com/anthropics/ts-tools",
      "github.com:anthropics/ts-capsules",
      "github.com/anthropics/ts-capsules",
      "github.com:anthropics/feldspar-testing",
      "github.com/anthropics/feldspar-testing",
      "github.com:anthropics/trellis",
      "github.com/anthropics/trellis",
      "github.com:anthropics/claude-for-hiring",
      "github.com/anthropics/claude-for-hiring",
      "github.com:anthropics/forge-web",
      "github.com/anthropics/forge-web",
      "github.com:anthropics/infra-manifests",
      "github.com/anthropics/infra-manifests",
      "github.com:anthropics/mycro_manifests",
      "github.com/anthropics/mycro_manifests",
      "github.com:anthropics/mycro_configs",
      "github.com/anthropics/mycro_configs",
      "github.com:anthropics/mobile-apps",
      "github.com/anthropics/mobile-apps"
    ];
    repoClassCache = null;
    isInternalModelRepo = sequential(async () => {
      if (repoClassCache !== null) {
        return repoClassCache === "internal";
      }
      const cwd = getAttributionRepoRoot();
      const remoteUrl = await getRemoteUrlForDir(cwd);
      if (!remoteUrl) {
        repoClassCache = "none";
        return false;
      }
      const isInternal = INTERNAL_MODEL_REPOS.some((repo) => remoteUrl.includes(repo));
      repoClassCache = isInternal ? "internal" : "external";
      return isInternal;
    });
  }
});

export {
  getAttributionRepoRoot,
  getRepoClassCached,
  isInternalModelRepoCached,
  isInternalModelRepo,
  sanitizeSurfaceKey,
  sanitizeModelName,
  getClientSurface,
  buildSurfaceKey,
  computeContentHash,
  normalizeFilePath,
  expandFilePath,
  createEmptyAttributionState,
  getFileMtime,
  trackFileModification,
  trackFileCreation,
  trackFileDeletion,
  trackBulkFileChanges,
  calculateCommitAttribution,
  getGitDiffSize,
  isFileDeleted,
  getStagedFiles,
  isGitTransientState,
  stateToSnapshotMessage,
  restoreAttributionStateFromSnapshots,
  attributionRestoreStateFromLog,
  incrementPromptCount,
  init_commitAttribution
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL2dlbmVyYXRlZEZpbGVzLnRzIiwgIi4uLy4uL3NyYy91dGlscy9jb21taXRBdHRyaWJ1dGlvbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgYmFzZW5hbWUsIGV4dG5hbWUsIHBvc2l4LCBzZXAgfSBmcm9tICdwYXRoJ1xuXG4vKipcbiAqIEZpbGUgcGF0dGVybnMgdGhhdCBzaG91bGQgYmUgZXhjbHVkZWQgZnJvbSBhdHRyaWJ1dGlvbi5cbiAqIEJhc2VkIG9uIEdpdEh1YiBMaW5ndWlzdCB2ZW5kb3JlZCBwYXR0ZXJucyBhbmQgY29tbW9uIGdlbmVyYXRlZCBmaWxlIHBhdHRlcm5zLlxuICovXG5cbi8vIEV4YWN0IGZpbGUgbmFtZSBtYXRjaGVzIChjYXNlLWluc2Vuc2l0aXZlKVxuY29uc3QgRVhDTFVERURfRklMRU5BTUVTID0gbmV3IFNldChbXG4gICdwYWNrYWdlLWxvY2suanNvbicsXG4gICd5YXJuLmxvY2snLFxuICAncG5wbS1sb2NrLnlhbWwnLFxuICAnYnVuLmxvY2tiJyxcbiAgJ2J1bi5sb2NrJyxcbiAgJ2NvbXBvc2VyLmxvY2snLFxuICAnZ2VtZmlsZS5sb2NrJyxcbiAgJ2NhcmdvLmxvY2snLFxuICAncG9ldHJ5LmxvY2snLFxuICAncGlwZmlsZS5sb2NrJyxcbiAgJ3Nocmlua3dyYXAuanNvbicsXG4gICducG0tc2hyaW5rd3JhcC5qc29uJyxcbl0pXG5cbi8vIEZpbGUgZXh0ZW5zaW9uIHBhdHRlcm5zIChjYXNlLWluc2Vuc2l0aXZlKVxuY29uc3QgRVhDTFVERURfRVhURU5TSU9OUyA9IG5ldyBTZXQoW1xuICAnLmxvY2snLFxuICAnLm1pbi5qcycsXG4gICcubWluLmNzcycsXG4gICcubWluLmh0bWwnLFxuICAnLmJ1bmRsZS5qcycsXG4gICcuYnVuZGxlLmNzcycsXG4gICcuZ2VuZXJhdGVkLnRzJyxcbiAgJy5nZW5lcmF0ZWQuanMnLFxuICAnLmQudHMnLCAvLyBUeXBlU2NyaXB0IGRlY2xhcmF0aW9uIGZpbGVzXG5dKVxuXG4vLyBEaXJlY3RvcnkgcGF0dGVybnMgdGhhdCBpbmRpY2F0ZSBnZW5lcmF0ZWQvdmVuZG9yZWQgY29udGVudFxuY29uc3QgRVhDTFVERURfRElSRUNUT1JJRVMgPSBbXG4gICcvZGlzdC8nLFxuICAnL2J1aWxkLycsXG4gICcvb3V0LycsXG4gICcvb3V0cHV0LycsXG4gICcvbm9kZV9tb2R1bGVzLycsXG4gICcvdmVuZG9yLycsXG4gICcvdmVuZG9yZWQvJyxcbiAgJy90aGlyZF9wYXJ0eS8nLFxuICAnL3RoaXJkLXBhcnR5LycsXG4gICcvZXh0ZXJuYWwvJyxcbiAgJy8ubmV4dC8nLFxuICAnLy5udXh0LycsXG4gICcvLnN2ZWx0ZS1raXQvJyxcbiAgJy9jb3ZlcmFnZS8nLFxuICAnL19fcHljYWNoZV9fLycsXG4gICcvLnRveC8nLFxuICAnL3ZlbnYvJyxcbiAgJy8udmVudi8nLFxuICAnL3RhcmdldC9yZWxlYXNlLycsXG4gICcvdGFyZ2V0L2RlYnVnLycsXG5dXG5cbi8vIEZpbGVuYW1lIHBhdHRlcm5zIHVzaW5nIHJlZ2V4IGZvciBtb3JlIGNvbXBsZXggbWF0Y2hpbmdcbmNvbnN0IEVYQ0xVREVEX0ZJTEVOQU1FX1BBVFRFUk5TID0gW1xuICAvXi4qXFwubWluXFwuW2Etel0rJC9pLCAvLyAqLm1pbi4qXG4gIC9eLiotbWluXFwuW2Etel0rJC9pLCAvLyAqLW1pbi4qXG4gIC9eLipcXC5idW5kbGVcXC5bYS16XSskL2ksIC8vICouYnVuZGxlLipcbiAgL14uKlxcLmdlbmVyYXRlZFxcLlthLXpdKyQvaSwgLy8gKi5nZW5lcmF0ZWQuKlxuICAvXi4qXFwuZ2VuXFwuW2Etel0rJC9pLCAvLyAqLmdlbi4qXG4gIC9eLipcXC5hdXRvXFwuW2Etel0rJC9pLCAvLyAqLmF1dG8uKlxuICAvXi4qX2dlbmVyYXRlZFxcLlthLXpdKyQvaSwgLy8gKl9nZW5lcmF0ZWQuKlxuICAvXi4qX2dlblxcLlthLXpdKyQvaSwgLy8gKl9nZW4uKlxuICAvXi4qXFwucGJcXC4oZ298anN8dHN8cHl8cmIpJC9pLCAvLyBQcm90b2NvbCBidWZmZXIgZ2VuZXJhdGVkIGZpbGVzXG4gIC9eLipfcGIyP1xcLnB5JC9pLCAvLyBQeXRob24gcHJvdG9idWYgZmlsZXNcbiAgL14uKlxcLnBiXFwuaCQvaSwgLy8gQysrIHByb3RvYnVmIGhlYWRlcnNcbiAgL14uKlxcLmdycGNcXC5bYS16XSskL2ksIC8vIGdSUEMgZ2VuZXJhdGVkIGZpbGVzXG4gIC9eLipcXC5zd2FnZ2VyXFwuW2Etel0rJC9pLCAvLyBTd2FnZ2VyIGdlbmVyYXRlZCBmaWxlc1xuICAvXi4qXFwub3BlbmFwaVxcLlthLXpdKyQvaSwgLy8gT3BlbkFQSSBnZW5lcmF0ZWQgZmlsZXNcbl1cblxuLyoqXG4gKiBDaGVjayBpZiBhIGZpbGUgc2hvdWxkIGJlIGV4Y2x1ZGVkIGZyb20gYXR0cmlidXRpb24gYmFzZWQgb24gTGluZ3Vpc3Qtc3R5bGUgcnVsZXMuXG4gKlxuICogQHBhcmFtIGZpbGVQYXRoIC0gUmVsYXRpdmUgZmlsZSBwYXRoIGZyb20gcmVwb3NpdG9yeSByb290XG4gKiBAcmV0dXJucyB0cnVlIGlmIHRoZSBmaWxlIHNob3VsZCBiZSBleGNsdWRlZCBmcm9tIGF0dHJpYnV0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0dlbmVyYXRlZEZpbGUoZmlsZVBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBOb3JtYWxpemUgcGF0aCBzZXBhcmF0b3JzIGZvciBjb25zaXN0ZW50IHBhdHRlcm4gbWF0Y2hpbmcgKHBhdHRlcm5zIHVzZSBwb3NpeC1zdHlsZSAvKVxuICBjb25zdCBub3JtYWxpemVkUGF0aCA9XG4gICAgcG9zaXguc2VwICsgZmlsZVBhdGguc3BsaXQoc2VwKS5qb2luKHBvc2l4LnNlcCkucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgY29uc3QgZmlsZU5hbWUgPSBiYXNlbmFtZShmaWxlUGF0aCkudG9Mb3dlckNhc2UoKVxuICBjb25zdCBleHQgPSBleHRuYW1lKGZpbGVQYXRoKS50b0xvd2VyQ2FzZSgpXG5cbiAgLy8gQ2hlY2sgZXhhY3QgZmlsZW5hbWUgbWF0Y2hlc1xuICBpZiAoRVhDTFVERURfRklMRU5BTUVTLmhhcyhmaWxlTmFtZSkpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgLy8gQ2hlY2sgZXh0ZW5zaW9uIG1hdGNoZXNcbiAgaWYgKEVYQ0xVREVEX0VYVEVOU0lPTlMuaGFzKGV4dCkpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgLy8gQ2hlY2sgZm9yIGNvbXBvdW5kIGV4dGVuc2lvbnMgbGlrZSAubWluLmpzXG4gIGNvbnN0IHBhcnRzID0gZmlsZU5hbWUuc3BsaXQoJy4nKVxuICBpZiAocGFydHMubGVuZ3RoID4gMikge1xuICAgIGNvbnN0IGNvbXBvdW5kRXh0ID0gJy4nICsgcGFydHMuc2xpY2UoLTIpLmpvaW4oJy4nKVxuICAgIGlmIChFWENMVURFRF9FWFRFTlNJT05TLmhhcyhjb21wb3VuZEV4dCkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG5cbiAgLy8gQ2hlY2sgZGlyZWN0b3J5IHBhdHRlcm5zXG4gIGZvciAoY29uc3QgZGlyIG9mIEVYQ0xVREVEX0RJUkVDVE9SSUVTKSB7XG4gICAgaWYgKG5vcm1hbGl6ZWRQYXRoLmluY2x1ZGVzKGRpcikpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG5cbiAgLy8gQ2hlY2sgZmlsZW5hbWUgcGF0dGVybnNcbiAgZm9yIChjb25zdCBwYXR0ZXJuIG9mIEVYQ0xVREVEX0ZJTEVOQU1FX1BBVFRFUk5TKSB7XG4gICAgaWYgKHBhdHRlcm4udGVzdChmaWxlTmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qKlxuICogRmlsdGVyIGEgbGlzdCBvZiBmaWxlcyB0byBleGNsdWRlIGdlbmVyYXRlZCBmaWxlcy5cbiAqXG4gKiBAcGFyYW0gZmlsZXMgLSBBcnJheSBvZiBmaWxlIHBhdGhzXG4gKiBAcmV0dXJucyBBcnJheSBvZiBmaWxlcyB0aGF0IGFyZSBub3QgZ2VuZXJhdGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJHZW5lcmF0ZWRGaWxlcyhmaWxlczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gIHJldHVybiBmaWxlcy5maWx0ZXIoZmlsZSA9PiAhaXNHZW5lcmF0ZWRGaWxlKGZpbGUpKVxufVxuIiwgImltcG9ydCB7IGNyZWF0ZUhhc2gsIHJhbmRvbVVVSUQsIHR5cGUgVVVJRCB9IGZyb20gJ2NyeXB0bydcbmltcG9ydCB7IHN0YXQgfSBmcm9tICdmcy9wcm9taXNlcydcbmltcG9ydCB7IGlzQWJzb2x1dGUsIGpvaW4sIHJlbGF0aXZlLCBzZXAgfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgZ2V0T3JpZ2luYWxDd2QsIGdldFNlc3Npb25JZCB9IGZyb20gJy4uL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB0eXBlIHtcbiAgQXR0cmlidXRpb25TbmFwc2hvdE1lc3NhZ2UsXG4gIEZpbGVBdHRyaWJ1dGlvblN0YXRlLFxufSBmcm9tICcuLi90eXBlcy9sb2dzLmpzJ1xuaW1wb3J0IHsgZ2V0Q3dkIH0gZnJvbSAnLi9jd2QuanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuL2RlYnVnLmpzJ1xuaW1wb3J0IHsgZXhlY0ZpbGVOb1Rocm93V2l0aEN3ZCB9IGZyb20gJy4vZXhlY0ZpbGVOb1Rocm93LmpzJ1xuaW1wb3J0IHsgZ2V0RnNJbXBsZW1lbnRhdGlvbiB9IGZyb20gJy4vZnNPcGVyYXRpb25zLmpzJ1xuaW1wb3J0IHsgaXNHZW5lcmF0ZWRGaWxlIH0gZnJvbSAnLi9nZW5lcmF0ZWRGaWxlcy5qcydcbmltcG9ydCB7IGdldFJlbW90ZVVybEZvckRpciwgcmVzb2x2ZUdpdERpciB9IGZyb20gJy4vZ2l0L2dpdEZpbGVzeXN0ZW0uanMnXG5pbXBvcnQgeyBmaW5kR2l0Um9vdCwgZ2l0RXhlIH0gZnJvbSAnLi9naXQuanMnXG5pbXBvcnQgeyBsb2dFcnJvciB9IGZyb20gJy4vbG9nLmpzJ1xuaW1wb3J0IHsgZ2V0Q2Fub25pY2FsTmFtZSwgdHlwZSBNb2RlbE5hbWUgfSBmcm9tICcuL21vZGVsL21vZGVsLmpzJ1xuaW1wb3J0IHsgc2VxdWVudGlhbCB9IGZyb20gJy4vc2VxdWVudGlhbC5qcydcblxuLyoqXG4gKiBMaXN0IG9mIHJlcG9zIHdoZXJlIGludGVybmFsIG1vZGVsIG5hbWVzIGFyZSBhbGxvd2VkIGluIHRyYWlsZXJzLlxuICogSW5jbHVkZXMgYm90aCBTU0ggYW5kIEhUVFBTIFVSTCBmb3JtYXRzLlxuICpcbiAqIE5PVEU6IFRoaXMgaXMgaW50ZW50aW9uYWxseSBhIHJlcG8gYWxsb3dsaXN0LCBub3QgYW4gb3JnLXdpZGUgY2hlY2suXG4gKiBUaGUgYW50aHJvcGljcyBhbmQgYW50aHJvcGljLWV4cGVyaW1lbnRhbCBvcmdzIGNvbnRhaW4gUFVCTElDIHJlcG9zXG4gKiAoZS5nLiBhbnRocm9waWNzL2NsYXVkZS1jb2RlLCBhbnRocm9waWMtZXhwZXJpbWVudGFsL3NhbmRib3gtcnVudGltZSkuXG4gKiBVbmRlcmNvdmVyIG1vZGUgbXVzdCBzdGF5IE9OIGluIHRob3NlIHRvIHByZXZlbnQgY29kZW5hbWUgbGVha3MuXG4gKiBPbmx5IGFkZCByZXBvcyBoZXJlIHRoYXQgYXJlIGNvbmZpcm1lZCBQUklWQVRFLlxuICovXG5jb25zdCBJTlRFUk5BTF9NT0RFTF9SRVBPUyA9IFtcbiAgJ2dpdGh1Yi5jb206YW50aHJvcGljcy9jbGF1ZGUtY2xpLWludGVybmFsJyxcbiAgJ2dpdGh1Yi5jb20vYW50aHJvcGljcy9jbGF1ZGUtY2xpLWludGVybmFsJyxcbiAgJ2dpdGh1Yi5jb206YW50aHJvcGljcy9hbnRocm9waWMnLFxuICAnZ2l0aHViLmNvbS9hbnRocm9waWNzL2FudGhyb3BpYycsXG4gICdnaXRodWIuY29tOmFudGhyb3BpY3MvYXBwcycsXG4gICdnaXRodWIuY29tL2FudGhyb3BpY3MvYXBwcycsXG4gICdnaXRodWIuY29tOmFudGhyb3BpY3MvY2FzaW5vJyxcbiAgJ2dpdGh1Yi5jb20vYW50aHJvcGljcy9jYXNpbm8nLFxuICAnZ2l0aHViLmNvbTphbnRocm9waWNzL2RidCcsXG4gICdnaXRodWIuY29tL2FudGhyb3BpY3MvZGJ0JyxcbiAgJ2dpdGh1Yi5jb206YW50aHJvcGljcy9kb3RmaWxlcycsXG4gICdnaXRodWIuY29tL2FudGhyb3BpY3MvZG90ZmlsZXMnLFxuICAnZ2l0aHViLmNvbTphbnRocm9waWNzL3RlcnJhZm9ybS1jb25maWcnLFxuICAnZ2l0aHViLmNvbS9hbnRocm9waWNzL3RlcnJhZm9ybS1jb25maWcnLFxuICAnZ2l0aHViLmNvbTphbnRocm9waWNzL2hleC1leHBvcnQnLFxuICAnZ2l0aHViLmNvbS9hbnRocm9waWNzL2hleC1leHBvcnQnLFxuICAnZ2l0aHViLmNvbTphbnRocm9waWNzL2ZlZWRiYWNrLXYyJyxcbiAgJ2dpdGh1Yi5jb20vYW50aHJvcGljcy9mZWVkYmFjay12MicsXG4gICdnaXRodWIuY29tOmFudGhyb3BpY3MvbGFicycsXG4gICdnaXRodWIuY29tL2FudGhyb3BpY3MvbGFicycsXG4gICdnaXRodWIuY29tOmFudGhyb3BpY3MvYXJnby1yb2xsb3V0cycsXG4gICdnaXRodWIuY29tL2FudGhyb3BpY3MvYXJnby1yb2xsb3V0cycsXG4gICdnaXRodWIuY29tOmFudGhyb3BpY3Mvc3RhcmxpbmctY29uZmlncycsXG4gICdnaXRodWIuY29tL2FudGhyb3BpY3Mvc3RhcmxpbmctY29uZmlncycsXG4gICdnaXRodWIuY29tOmFudGhyb3BpY3MvdHMtdG9vbHMnLFxuICAnZ2l0aHViLmNvbS9hbnRocm9waWNzL3RzLXRvb2xzJyxcbiAgJ2dpdGh1Yi5jb206YW50aHJvcGljcy90cy1jYXBzdWxlcycsXG4gICdnaXRodWIuY29tL2FudGhyb3BpY3MvdHMtY2Fwc3VsZXMnLFxuICAnZ2l0aHViLmNvbTphbnRocm9waWNzL2ZlbGRzcGFyLXRlc3RpbmcnLFxuICAnZ2l0aHViLmNvbS9hbnRocm9waWNzL2ZlbGRzcGFyLXRlc3RpbmcnLFxuICAnZ2l0aHViLmNvbTphbnRocm9waWNzL3RyZWxsaXMnLFxuICAnZ2l0aHViLmNvbS9hbnRocm9waWNzL3RyZWxsaXMnLFxuICAnZ2l0aHViLmNvbTphbnRocm9waWNzL2NsYXVkZS1mb3ItaGlyaW5nJyxcbiAgJ2dpdGh1Yi5jb20vYW50aHJvcGljcy9jbGF1ZGUtZm9yLWhpcmluZycsXG4gICdnaXRodWIuY29tOmFudGhyb3BpY3MvZm9yZ2Utd2ViJyxcbiAgJ2dpdGh1Yi5jb20vYW50aHJvcGljcy9mb3JnZS13ZWInLFxuICAnZ2l0aHViLmNvbTphbnRocm9waWNzL2luZnJhLW1hbmlmZXN0cycsXG4gICdnaXRodWIuY29tL2FudGhyb3BpY3MvaW5mcmEtbWFuaWZlc3RzJyxcbiAgJ2dpdGh1Yi5jb206YW50aHJvcGljcy9teWNyb19tYW5pZmVzdHMnLFxuICAnZ2l0aHViLmNvbS9hbnRocm9waWNzL215Y3JvX21hbmlmZXN0cycsXG4gICdnaXRodWIuY29tOmFudGhyb3BpY3MvbXljcm9fY29uZmlncycsXG4gICdnaXRodWIuY29tL2FudGhyb3BpY3MvbXljcm9fY29uZmlncycsXG4gICdnaXRodWIuY29tOmFudGhyb3BpY3MvbW9iaWxlLWFwcHMnLFxuICAnZ2l0aHViLmNvbS9hbnRocm9waWNzL21vYmlsZS1hcHBzJyxcbl1cblxuLyoqXG4gKiBHZXQgdGhlIHJlcG8gcm9vdCBmb3IgYXR0cmlidXRpb24gb3BlcmF0aW9ucy5cbiAqIFVzZXMgZ2V0Q3dkKCkgd2hpY2ggcmVzcGVjdHMgYWdlbnQgd29ya3RyZWUgb3ZlcnJpZGVzIChBc3luY0xvY2FsU3RvcmFnZSksXG4gKiB0aGVuIHJlc29sdmVzIHRvIGdpdCByb290IHRvIGhhbmRsZSBgY2Qgc3ViZGlyYCBjYXNlLlxuICogRmFsbHMgYmFjayB0byBnZXRPcmlnaW5hbEN3ZCgpIGlmIGdpdCByb290IGNhbid0IGJlIGRldGVybWluZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyaWJ1dGlvblJlcG9Sb290KCk6IHN0cmluZyB7XG4gIGNvbnN0IGN3ZCA9IGdldEN3ZCgpXG4gIHJldHVybiBmaW5kR2l0Um9vdChjd2QpID8/IGdldE9yaWdpbmFsQ3dkKClcbn1cblxuLy8gQ2FjaGUgZm9yIHJlcG8gY2xhc3NpZmljYXRpb24gcmVzdWx0LiBQcmltZWQgb25jZSBwZXIgcHJvY2Vzcy5cbi8vICdpbnRlcm5hbCcgPSByZW1vdGUgbWF0Y2hlcyBJTlRFUk5BTF9NT0RFTF9SRVBPUyBhbGxvd2xpc3Rcbi8vICdleHRlcm5hbCcgPSBoYXMgYSByZW1vdGUsIG5vdCBvbiBhbGxvd2xpc3QgKHB1YmxpYy9vcGVuLXNvdXJjZSByZXBvKVxuLy8gJ25vbmUnICAgICA9IG5vIHJlbW90ZSBVUkwgKG5vdCBhIGdpdCByZXBvLCBvciBubyByZW1vdGUgY29uZmlndXJlZClcbmxldCByZXBvQ2xhc3NDYWNoZTogJ2ludGVybmFsJyB8ICdleHRlcm5hbCcgfCAnbm9uZScgfCBudWxsID0gbnVsbFxuXG4vKipcbiAqIFN5bmNocm9ub3VzbHkgcmV0dXJuIHRoZSBjYWNoZWQgcmVwbyBjbGFzc2lmaWNhdGlvbi5cbiAqIFJldHVybnMgbnVsbCBpZiB0aGUgYXN5bmMgY2hlY2sgaGFzbid0IHJ1biB5ZXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXBvQ2xhc3NDYWNoZWQoKTogJ2ludGVybmFsJyB8ICdleHRlcm5hbCcgfCAnbm9uZScgfCBudWxsIHtcbiAgcmV0dXJuIHJlcG9DbGFzc0NhY2hlXG59XG5cbi8qKlxuICogU3luY2hyb25vdXNseSByZXR1cm4gdGhlIGNhY2hlZCByZXN1bHQgb2YgaXNJbnRlcm5hbE1vZGVsUmVwbygpLlxuICogUmV0dXJucyBmYWxzZSBpZiB0aGUgY2hlY2sgaGFzbid0IHJ1biB5ZXQgKHNhZmUgZGVmYXVsdDogZG9uJ3QgbGVhaykuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0ludGVybmFsTW9kZWxSZXBvQ2FjaGVkKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gcmVwb0NsYXNzQ2FjaGUgPT09ICdpbnRlcm5hbCdcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgY3VycmVudCByZXBvIGlzIGluIHRoZSBhbGxvd2xpc3QgZm9yIGludGVybmFsIG1vZGVsIG5hbWVzLlxuICogTWVtb2l6ZWQgLSBvbmx5IGNoZWNrcyBvbmNlIHBlciBwcm9jZXNzLlxuICovXG5leHBvcnQgY29uc3QgaXNJbnRlcm5hbE1vZGVsUmVwbyA9IHNlcXVlbnRpYWwoYXN5bmMgKCk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICBpZiAocmVwb0NsYXNzQ2FjaGUgIT09IG51bGwpIHtcbiAgICByZXR1cm4gcmVwb0NsYXNzQ2FjaGUgPT09ICdpbnRlcm5hbCdcbiAgfVxuXG4gIGNvbnN0IGN3ZCA9IGdldEF0dHJpYnV0aW9uUmVwb1Jvb3QoKVxuICBjb25zdCByZW1vdGVVcmwgPSBhd2FpdCBnZXRSZW1vdGVVcmxGb3JEaXIoY3dkKVxuXG4gIGlmICghcmVtb3RlVXJsKSB7XG4gICAgcmVwb0NsYXNzQ2FjaGUgPSAnbm9uZSdcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBjb25zdCBpc0ludGVybmFsID0gSU5URVJOQUxfTU9ERUxfUkVQT1Muc29tZShyZXBvID0+IHJlbW90ZVVybC5pbmNsdWRlcyhyZXBvKSlcbiAgcmVwb0NsYXNzQ2FjaGUgPSBpc0ludGVybmFsID8gJ2ludGVybmFsJyA6ICdleHRlcm5hbCdcbiAgcmV0dXJuIGlzSW50ZXJuYWxcbn0pXG5cbi8qKlxuICogU2FuaXRpemUgYSBzdXJmYWNlIGtleSB0byB1c2UgcHVibGljIG1vZGVsIG5hbWVzLlxuICogQ29udmVydHMgaW50ZXJuYWwgbW9kZWwgdmFyaWFudHMgdG8gdGhlaXIgcHVibGljIGVxdWl2YWxlbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVTdXJmYWNlS2V5KHN1cmZhY2VLZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIFNwbGl0IHN1cmZhY2Uga2V5IGludG8gc3VyZmFjZSBhbmQgbW9kZWwgcGFydHMgKGUuZy4sIFwiY2xpL29wdXMtNC01LWZhc3RcIiAtPiBbXCJjbGlcIiwgXCJvcHVzLTQtNS1mYXN0XCJdKVxuICBjb25zdCBzbGFzaEluZGV4ID0gc3VyZmFjZUtleS5sYXN0SW5kZXhPZignLycpXG4gIGlmIChzbGFzaEluZGV4ID09PSAtMSkge1xuICAgIHJldHVybiBzdXJmYWNlS2V5XG4gIH1cblxuICBjb25zdCBzdXJmYWNlID0gc3VyZmFjZUtleS5zbGljZSgwLCBzbGFzaEluZGV4KVxuICBjb25zdCBtb2RlbCA9IHN1cmZhY2VLZXkuc2xpY2Uoc2xhc2hJbmRleCArIDEpXG4gIGNvbnN0IHNhbml0aXplZE1vZGVsID0gc2FuaXRpemVNb2RlbE5hbWUobW9kZWwpXG5cbiAgcmV0dXJuIGAke3N1cmZhY2V9LyR7c2FuaXRpemVkTW9kZWx9YFxufVxuXG4vLyBAW01PREVMIExBVU5DSF06IEFkZCBhIG1hcHBpbmcgZm9yIHRoZSBuZXcgbW9kZWwgSUQgc28gZ2l0IGNvbW1pdCB0cmFpbGVycyBzaG93IHRoZSBwdWJsaWMgbmFtZS5cbi8qKlxuICogU2FuaXRpemUgYSBtb2RlbCBuYW1lIHRvIGl0cyBwdWJsaWMgZXF1aXZhbGVudC5cbiAqIE1hcHMgaW50ZXJuYWwgdmFyaWFudHMgdG8gdGhlaXIgcHVibGljIG5hbWVzIGJhc2VkIG9uIG1vZGVsIGZhbWlseS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplTW9kZWxOYW1lKHNob3J0TmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gTWFwIGludGVybmFsIHZhcmlhbnRzIHRvIHB1YmxpYyBlcXVpdmFsZW50cyBiYXNlZCBvbiBtb2RlbCBmYW1pbHlcbiAgaWYgKHNob3J0TmFtZS5pbmNsdWRlcygnb3B1cy00LTYnKSkgcmV0dXJuICdjbGF1ZGUtb3B1cy00LTYnXG4gIGlmIChzaG9ydE5hbWUuaW5jbHVkZXMoJ29wdXMtNC01JykpIHJldHVybiAnY2xhdWRlLW9wdXMtNC01J1xuICBpZiAoc2hvcnROYW1lLmluY2x1ZGVzKCdvcHVzLTQtMScpKSByZXR1cm4gJ2NsYXVkZS1vcHVzLTQtMSdcbiAgaWYgKHNob3J0TmFtZS5pbmNsdWRlcygnb3B1cy00JykpIHJldHVybiAnY2xhdWRlLW9wdXMtNCdcbiAgaWYgKHNob3J0TmFtZS5pbmNsdWRlcygnc29ubmV0LTQtNicpKSByZXR1cm4gJ2NsYXVkZS1zb25uZXQtNC02J1xuICBpZiAoc2hvcnROYW1lLmluY2x1ZGVzKCdzb25uZXQtNC01JykpIHJldHVybiAnY2xhdWRlLXNvbm5ldC00LTUnXG4gIGlmIChzaG9ydE5hbWUuaW5jbHVkZXMoJ3Nvbm5ldC00JykpIHJldHVybiAnY2xhdWRlLXNvbm5ldC00J1xuICBpZiAoc2hvcnROYW1lLmluY2x1ZGVzKCdzb25uZXQtMy03JykpIHJldHVybiAnY2xhdWRlLXNvbm5ldC0zLTcnXG4gIGlmIChzaG9ydE5hbWUuaW5jbHVkZXMoJ2hhaWt1LTQtNScpKSByZXR1cm4gJ2NsYXVkZS1oYWlrdS00LTUnXG4gIGlmIChzaG9ydE5hbWUuaW5jbHVkZXMoJ2hhaWt1LTMtNScpKSByZXR1cm4gJ2NsYXVkZS1oYWlrdS0zLTUnXG4gIC8vIFVua25vd24gbW9kZWxzIGdldCBhIGdlbmVyaWMgbmFtZVxuICByZXR1cm4gJ2NsYXVkZSdcbn1cblxuLyoqXG4gKiBBdHRyaWJ1dGlvbiBzdGF0ZSBmb3IgdHJhY2tpbmcgQ2xhdWRlJ3MgY29udHJpYnV0aW9ucyB0byBmaWxlcy5cbiAqL1xuZXhwb3J0IHR5cGUgQXR0cmlidXRpb25TdGF0ZSA9IHtcbiAgLy8gRmlsZSBzdGF0ZXMga2V5ZWQgYnkgcmVsYXRpdmUgcGF0aCAoZnJvbSBjd2QpXG4gIGZpbGVTdGF0ZXM6IE1hcDxzdHJpbmcsIEZpbGVBdHRyaWJ1dGlvblN0YXRlPlxuICAvLyBTZXNzaW9uIGJhc2VsaW5lIHN0YXRlcyBmb3IgbmV0IGNoYW5nZSBjYWxjdWxhdGlvblxuICBzZXNzaW9uQmFzZWxpbmVzOiBNYXA8c3RyaW5nLCB7IGNvbnRlbnRIYXNoOiBzdHJpbmc7IG10aW1lOiBudW1iZXIgfT5cbiAgLy8gU3VyZmFjZSBmcm9tIHdoaWNoIGVkaXRzIHdlcmUgbWFkZVxuICBzdXJmYWNlOiBzdHJpbmdcbiAgLy8gSEVBRCBTSEEgYXQgc2Vzc2lvbiBzdGFydCAoZm9yIGRldGVjdGluZyBleHRlcm5hbCBjb21taXRzKVxuICBzdGFydGluZ0hlYWRTaGE6IHN0cmluZyB8IG51bGxcbiAgLy8gVG90YWwgcHJvbXB0cyBpbiBzZXNzaW9uIChmb3Igc3RlZXIgY291bnQgY2FsY3VsYXRpb24pXG4gIHByb21wdENvdW50OiBudW1iZXJcbiAgLy8gUHJvbXB0cyBhdCBsYXN0IGNvbW1pdCAodG8gY2FsY3VsYXRlIHN0ZWVycyBmb3IgY3VycmVudCBjb21taXQpXG4gIHByb21wdENvdW50QXRMYXN0Q29tbWl0OiBudW1iZXJcbiAgLy8gUGVybWlzc2lvbiBwcm9tcHQgdHJhY2tpbmdcbiAgcGVybWlzc2lvblByb21wdENvdW50OiBudW1iZXJcbiAgcGVybWlzc2lvblByb21wdENvdW50QXRMYXN0Q29tbWl0OiBudW1iZXJcbiAgLy8gRVNDIHByZXNzIHRyYWNraW5nICh1c2VyIGNhbmNlbGxlZCBwZXJtaXNzaW9uIHByb21wdClcbiAgZXNjYXBlQ291bnQ6IG51bWJlclxuICBlc2NhcGVDb3VudEF0TGFzdENvbW1pdDogbnVtYmVyXG59XG5cbi8qKlxuICogU3VtbWFyeSBvZiBDbGF1ZGUncyBjb250cmlidXRpb24gZm9yIGEgY29tbWl0LlxuICovXG5leHBvcnQgdHlwZSBBdHRyaWJ1dGlvblN1bW1hcnkgPSB7XG4gIGNsYXVkZVBlcmNlbnQ6IG51bWJlclxuICBjbGF1ZGVDaGFyczogbnVtYmVyXG4gIGh1bWFuQ2hhcnM6IG51bWJlclxuICBzdXJmYWNlczogc3RyaW5nW11cbn1cblxuLyoqXG4gKiBQZXItZmlsZSBhdHRyaWJ1dGlvbiBkZXRhaWxzIGZvciBnaXQgbm90ZXMuXG4gKi9cbmV4cG9ydCB0eXBlIEZpbGVBdHRyaWJ1dGlvbiA9IHtcbiAgY2xhdWRlQ2hhcnM6IG51bWJlclxuICBodW1hbkNoYXJzOiBudW1iZXJcbiAgcGVyY2VudDogbnVtYmVyXG4gIHN1cmZhY2U6IHN0cmluZ1xufVxuXG4vKipcbiAqIEZ1bGwgYXR0cmlidXRpb24gZGF0YSBmb3IgZ2l0IG5vdGVzIEpTT04uXG4gKi9cbmV4cG9ydCB0eXBlIEF0dHJpYnV0aW9uRGF0YSA9IHtcbiAgdmVyc2lvbjogMVxuICBzdW1tYXJ5OiBBdHRyaWJ1dGlvblN1bW1hcnlcbiAgZmlsZXM6IFJlY29yZDxzdHJpbmcsIEZpbGVBdHRyaWJ1dGlvbj5cbiAgc3VyZmFjZUJyZWFrZG93bjogUmVjb3JkPHN0cmluZywgeyBjbGF1ZGVDaGFyczogbnVtYmVyOyBwZXJjZW50OiBudW1iZXIgfT5cbiAgZXhjbHVkZWRHZW5lcmF0ZWQ6IHN0cmluZ1tdXG4gIHNlc3Npb25zOiBzdHJpbmdbXVxufVxuXG4vKipcbiAqIEdldCB0aGUgY3VycmVudCBjbGllbnQgc3VyZmFjZSBmcm9tIGVudmlyb25tZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50U3VyZmFjZSgpOiBzdHJpbmcge1xuICByZXR1cm4gcHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfRU5UUllQT0lOVCA/PyAnY2xpJ1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgc3VyZmFjZSBrZXkgdGhhdCBpbmNsdWRlcyB0aGUgbW9kZWwgbmFtZS5cbiAqIEZvcm1hdDogXCJzdXJmYWNlL21vZGVsXCIgKGUuZy4sIFwiY2xpL2NsYXVkZS1zb25uZXRcIilcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkU3VyZmFjZUtleShzdXJmYWNlOiBzdHJpbmcsIG1vZGVsOiBNb2RlbE5hbWUpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7c3VyZmFjZX0vJHtnZXRDYW5vbmljYWxOYW1lKG1vZGVsKX1gXG59XG5cbi8qKlxuICogQ29tcHV0ZSBTSEEtMjU2IGhhc2ggb2YgY29udGVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVDb250ZW50SGFzaChjb250ZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gY3JlYXRlSGFzaCgnc2hhMjU2JykudXBkYXRlKGNvbnRlbnQpLmRpZ2VzdCgnaGV4Jylcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgZmlsZSBwYXRoIHRvIHJlbGF0aXZlIHBhdGggZnJvbSBjd2QgZm9yIGNvbnNpc3RlbnQgdHJhY2tpbmcuXG4gKiBSZXNvbHZlcyBzeW1saW5rcyB0byBoYW5kbGUgL3RtcCB2cyAvcHJpdmF0ZS90bXAgb24gbWFjT1MuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVGaWxlUGF0aChmaWxlUGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgZnMgPSBnZXRGc0ltcGxlbWVudGF0aW9uKClcbiAgY29uc3QgY3dkID0gZ2V0QXR0cmlidXRpb25SZXBvUm9vdCgpXG5cbiAgaWYgKCFpc0Fic29sdXRlKGZpbGVQYXRoKSkge1xuICAgIHJldHVybiBmaWxlUGF0aFxuICB9XG5cbiAgLy8gUmVzb2x2ZSBzeW1saW5rcyBpbiBib3RoIHBhdGhzIGZvciBjb25zaXN0ZW50IGNvbXBhcmlzb25cbiAgLy8gKGUuZy4sIC90bXAgLT4gL3ByaXZhdGUvdG1wIG9uIG1hY09TKVxuICBsZXQgcmVzb2x2ZWRQYXRoID0gZmlsZVBhdGhcbiAgbGV0IHJlc29sdmVkQ3dkID0gY3dkXG5cbiAgdHJ5IHtcbiAgICByZXNvbHZlZFBhdGggPSBmcy5yZWFscGF0aFN5bmMoZmlsZVBhdGgpXG4gIH0gY2F0Y2gge1xuICAgIC8vIEZpbGUgbWF5IG5vdCBleGlzdCB5ZXQsIHVzZSBvcmlnaW5hbCBwYXRoXG4gIH1cblxuICB0cnkge1xuICAgIHJlc29sdmVkQ3dkID0gZnMucmVhbHBhdGhTeW5jKGN3ZClcbiAgfSBjYXRjaCB7XG4gICAgLy8gS2VlcCBvcmlnaW5hbCBjd2RcbiAgfVxuXG4gIGlmIChcbiAgICByZXNvbHZlZFBhdGguc3RhcnRzV2l0aChyZXNvbHZlZEN3ZCArIHNlcCkgfHxcbiAgICByZXNvbHZlZFBhdGggPT09IHJlc29sdmVkQ3dkXG4gICkge1xuICAgIC8vIE5vcm1hbGl6ZSB0byBmb3J3YXJkIHNsYXNoZXMgc28ga2V5cyBtYXRjaCBnaXQgZGlmZiBvdXRwdXQgb24gV2luZG93c1xuICAgIHJldHVybiByZWxhdGl2ZShyZXNvbHZlZEN3ZCwgcmVzb2x2ZWRQYXRoKS5yZXBsYWNlQWxsKHNlcCwgJy8nKVxuICB9XG5cbiAgLy8gRmFsbGJhY2s6IHRyeSBvcmlnaW5hbCBjb21wYXJpc29uXG4gIGlmIChmaWxlUGF0aC5zdGFydHNXaXRoKGN3ZCArIHNlcCkgfHwgZmlsZVBhdGggPT09IGN3ZCkge1xuICAgIHJldHVybiByZWxhdGl2ZShjd2QsIGZpbGVQYXRoKS5yZXBsYWNlQWxsKHNlcCwgJy8nKVxuICB9XG5cbiAgcmV0dXJuIGZpbGVQYXRoXG59XG5cbi8qKlxuICogRXhwYW5kIGEgcmVsYXRpdmUgcGF0aCB0byBhYnNvbHV0ZSBwYXRoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhwYW5kRmlsZVBhdGgoZmlsZVBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChpc0Fic29sdXRlKGZpbGVQYXRoKSkge1xuICAgIHJldHVybiBmaWxlUGF0aFxuICB9XG4gIHJldHVybiBqb2luKGdldEF0dHJpYnV0aW9uUmVwb1Jvb3QoKSwgZmlsZVBhdGgpXG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGVtcHR5IGF0dHJpYnV0aW9uIHN0YXRlIGZvciBhIG5ldyBzZXNzaW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRW1wdHlBdHRyaWJ1dGlvblN0YXRlKCk6IEF0dHJpYnV0aW9uU3RhdGUge1xuICByZXR1cm4ge1xuICAgIGZpbGVTdGF0ZXM6IG5ldyBNYXAoKSxcbiAgICBzZXNzaW9uQmFzZWxpbmVzOiBuZXcgTWFwKCksXG4gICAgc3VyZmFjZTogZ2V0Q2xpZW50U3VyZmFjZSgpLFxuICAgIHN0YXJ0aW5nSGVhZFNoYTogbnVsbCxcbiAgICBwcm9tcHRDb3VudDogMCxcbiAgICBwcm9tcHRDb3VudEF0TGFzdENvbW1pdDogMCxcbiAgICBwZXJtaXNzaW9uUHJvbXB0Q291bnQ6IDAsXG4gICAgcGVybWlzc2lvblByb21wdENvdW50QXRMYXN0Q29tbWl0OiAwLFxuICAgIGVzY2FwZUNvdW50OiAwLFxuICAgIGVzY2FwZUNvdW50QXRMYXN0Q29tbWl0OiAwLFxuICB9XG59XG5cbi8qKlxuICogQ29tcHV0ZSB0aGUgY2hhcmFjdGVyIGNvbnRyaWJ1dGlvbiBmb3IgYSBmaWxlIG1vZGlmaWNhdGlvbi5cbiAqIFJldHVybnMgdGhlIEZpbGVBdHRyaWJ1dGlvblN0YXRlIHRvIHN0b3JlLCBvciBudWxsIGlmIHRyYWNraW5nIGZhaWxlZC5cbiAqL1xuZnVuY3Rpb24gY29tcHV0ZUZpbGVNb2RpZmljYXRpb25TdGF0ZShcbiAgZXhpc3RpbmdGaWxlU3RhdGVzOiBNYXA8c3RyaW5nLCBGaWxlQXR0cmlidXRpb25TdGF0ZT4sXG4gIGZpbGVQYXRoOiBzdHJpbmcsXG4gIG9sZENvbnRlbnQ6IHN0cmluZyxcbiAgbmV3Q29udGVudDogc3RyaW5nLFxuICBtdGltZTogbnVtYmVyLFxuKTogRmlsZUF0dHJpYnV0aW9uU3RhdGUgfCBudWxsIHtcbiAgY29uc3Qgbm9ybWFsaXplZFBhdGggPSBub3JtYWxpemVGaWxlUGF0aChmaWxlUGF0aClcblxuICB0cnkge1xuICAgIC8vIENhbGN1bGF0ZSBDbGF1ZGUncyBjaGFyYWN0ZXIgY29udHJpYnV0aW9uXG4gICAgbGV0IGNsYXVkZUNvbnRyaWJ1dGlvbjogbnVtYmVyXG5cbiAgICBpZiAob2xkQ29udGVudCA9PT0gJycgfHwgbmV3Q29udGVudCA9PT0gJycpIHtcbiAgICAgIC8vIE5ldyBmaWxlIG9yIGZ1bGwgZGVsZXRpb24gLSBjb250cmlidXRpb24gaXMgdGhlIGNvbnRlbnQgbGVuZ3RoXG4gICAgICBjbGF1ZGVDb250cmlidXRpb24gPVxuICAgICAgICBvbGRDb250ZW50ID09PSAnJyA/IG5ld0NvbnRlbnQubGVuZ3RoIDogb2xkQ29udGVudC5sZW5ndGhcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRmluZCBhY3R1YWwgY2hhbmdlZCByZWdpb24gdmlhIGNvbW1vbiBwcmVmaXgvc3VmZml4IG1hdGNoaW5nLlxuICAgICAgLy8gVGhpcyBjb3JyZWN0bHkgaGFuZGxlcyBzYW1lLWxlbmd0aCByZXBsYWNlbWVudHMgKGUuZy4sIFwiRXNjXCIgXHUyMTkyIFwiZXNjXCIpXG4gICAgICAvLyB3aGVyZSBNYXRoLmFicyhuZXdMZW4gLSBvbGRMZW4pIHdvdWxkIGJlIDAuXG4gICAgICBjb25zdCBtaW5MZW4gPSBNYXRoLm1pbihvbGRDb250ZW50Lmxlbmd0aCwgbmV3Q29udGVudC5sZW5ndGgpXG4gICAgICBsZXQgcHJlZml4RW5kID0gMFxuICAgICAgd2hpbGUgKFxuICAgICAgICBwcmVmaXhFbmQgPCBtaW5MZW4gJiZcbiAgICAgICAgb2xkQ29udGVudFtwcmVmaXhFbmRdID09PSBuZXdDb250ZW50W3ByZWZpeEVuZF1cbiAgICAgICkge1xuICAgICAgICBwcmVmaXhFbmQrK1xuICAgICAgfVxuICAgICAgbGV0IHN1ZmZpeExlbiA9IDBcbiAgICAgIHdoaWxlIChcbiAgICAgICAgc3VmZml4TGVuIDwgbWluTGVuIC0gcHJlZml4RW5kICYmXG4gICAgICAgIG9sZENvbnRlbnRbb2xkQ29udGVudC5sZW5ndGggLSAxIC0gc3VmZml4TGVuXSA9PT1cbiAgICAgICAgICBuZXdDb250ZW50W25ld0NvbnRlbnQubGVuZ3RoIC0gMSAtIHN1ZmZpeExlbl1cbiAgICAgICkge1xuICAgICAgICBzdWZmaXhMZW4rK1xuICAgICAgfVxuICAgICAgY29uc3Qgb2xkQ2hhbmdlZExlbiA9IG9sZENvbnRlbnQubGVuZ3RoIC0gcHJlZml4RW5kIC0gc3VmZml4TGVuXG4gICAgICBjb25zdCBuZXdDaGFuZ2VkTGVuID0gbmV3Q29udGVudC5sZW5ndGggLSBwcmVmaXhFbmQgLSBzdWZmaXhMZW5cbiAgICAgIGNsYXVkZUNvbnRyaWJ1dGlvbiA9IE1hdGgubWF4KG9sZENoYW5nZWRMZW4sIG5ld0NoYW5nZWRMZW4pXG4gICAgfVxuXG4gICAgLy8gR2V0IGN1cnJlbnQgZmlsZSBzdGF0ZSBpZiBpdCBleGlzdHNcbiAgICBjb25zdCBleGlzdGluZ1N0YXRlID0gZXhpc3RpbmdGaWxlU3RhdGVzLmdldChub3JtYWxpemVkUGF0aClcbiAgICBjb25zdCBleGlzdGluZ0NvbnRyaWJ1dGlvbiA9IGV4aXN0aW5nU3RhdGU/LmNsYXVkZUNvbnRyaWJ1dGlvbiA/PyAwXG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGVudEhhc2g6IGNvbXB1dGVDb250ZW50SGFzaChuZXdDb250ZW50KSxcbiAgICAgIGNsYXVkZUNvbnRyaWJ1dGlvbjogZXhpc3RpbmdDb250cmlidXRpb24gKyBjbGF1ZGVDb250cmlidXRpb24sXG4gICAgICBtdGltZSxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nRXJyb3IoZXJyb3IgYXMgRXJyb3IpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG4vKipcbiAqIEdldCBhIGZpbGUncyBtb2RpZmljYXRpb24gdGltZSAobXRpbWVNcyksIGZhbGxpbmcgYmFjayB0byBEYXRlLm5vdygpIGlmXG4gKiB0aGUgZmlsZSBkb2Vzbid0IGV4aXN0LiBUaGlzIGlzIGFzeW5jIHNvIGl0IGNhbiBiZSBwcmVjb21wdXRlZCBiZWZvcmVcbiAqIGVudGVyaW5nIGEgc3luYyBzZXRBcHBTdGF0ZSBjYWxsYmFjay5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZpbGVNdGltZShmaWxlUGF0aDogc3RyaW5nKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgY29uc3Qgbm9ybWFsaXplZFBhdGggPSBub3JtYWxpemVGaWxlUGF0aChmaWxlUGF0aClcbiAgY29uc3QgYWJzUGF0aCA9IGV4cGFuZEZpbGVQYXRoKG5vcm1hbGl6ZWRQYXRoKVxuICB0cnkge1xuICAgIGNvbnN0IHN0YXRzID0gYXdhaXQgc3RhdChhYnNQYXRoKVxuICAgIHJldHVybiBzdGF0cy5tdGltZU1zXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBEYXRlLm5vdygpXG4gIH1cbn1cblxuLyoqXG4gKiBUcmFjayBhIGZpbGUgbW9kaWZpY2F0aW9uIGJ5IENsYXVkZS5cbiAqIENhbGxlZCBhZnRlciBFZGl0L1dyaXRlIHRvb2wgY29tcGxldGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhY2tGaWxlTW9kaWZpY2F0aW9uKFxuICBzdGF0ZTogQXR0cmlidXRpb25TdGF0ZSxcbiAgZmlsZVBhdGg6IHN0cmluZyxcbiAgb2xkQ29udGVudDogc3RyaW5nLFxuICBuZXdDb250ZW50OiBzdHJpbmcsXG4gIF91c2VyTW9kaWZpZWQ6IGJvb2xlYW4sXG4gIG10aW1lOiBudW1iZXIgPSBEYXRlLm5vdygpLFxuKTogQXR0cmlidXRpb25TdGF0ZSB7XG4gIGNvbnN0IG5vcm1hbGl6ZWRQYXRoID0gbm9ybWFsaXplRmlsZVBhdGgoZmlsZVBhdGgpXG4gIGNvbnN0IG5ld0ZpbGVTdGF0ZSA9IGNvbXB1dGVGaWxlTW9kaWZpY2F0aW9uU3RhdGUoXG4gICAgc3RhdGUuZmlsZVN0YXRlcyxcbiAgICBmaWxlUGF0aCxcbiAgICBvbGRDb250ZW50LFxuICAgIG5ld0NvbnRlbnQsXG4gICAgbXRpbWUsXG4gIClcbiAgaWYgKCFuZXdGaWxlU3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGVcbiAgfVxuXG4gIGNvbnN0IG5ld0ZpbGVTdGF0ZXMgPSBuZXcgTWFwKHN0YXRlLmZpbGVTdGF0ZXMpXG4gIG5ld0ZpbGVTdGF0ZXMuc2V0KG5vcm1hbGl6ZWRQYXRoLCBuZXdGaWxlU3RhdGUpXG5cbiAgbG9nRm9yRGVidWdnaW5nKFxuICAgIGBBdHRyaWJ1dGlvbjogVHJhY2tlZCAke25ld0ZpbGVTdGF0ZS5jbGF1ZGVDb250cmlidXRpb259IGNoYXJzIGZvciAke25vcm1hbGl6ZWRQYXRofWAsXG4gIClcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGZpbGVTdGF0ZXM6IG5ld0ZpbGVTdGF0ZXMsXG4gIH1cbn1cblxuLyoqXG4gKiBUcmFjayBhIGZpbGUgY3JlYXRpb24gYnkgQ2xhdWRlIChlLmcuLCB2aWEgYmFzaCBjb21tYW5kKS5cbiAqIFVzZWQgd2hlbiBDbGF1ZGUgY3JlYXRlcyBhIG5ldyBmaWxlIHRocm91Z2ggYSBub24tdHJhY2tlZCBtZWNoYW5pc20uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFja0ZpbGVDcmVhdGlvbihcbiAgc3RhdGU6IEF0dHJpYnV0aW9uU3RhdGUsXG4gIGZpbGVQYXRoOiBzdHJpbmcsXG4gIGNvbnRlbnQ6IHN0cmluZyxcbiAgbXRpbWU6IG51bWJlciA9IERhdGUubm93KCksXG4pOiBBdHRyaWJ1dGlvblN0YXRlIHtcbiAgLy8gQSBjcmVhdGlvbiBpcyBzaW1wbHkgYSBtb2RpZmljYXRpb24gZnJvbSBlbXB0eSB0byB0aGUgbmV3IGNvbnRlbnRcbiAgcmV0dXJuIHRyYWNrRmlsZU1vZGlmaWNhdGlvbihzdGF0ZSwgZmlsZVBhdGgsICcnLCBjb250ZW50LCBmYWxzZSwgbXRpbWUpXG59XG5cbi8qKlxuICogVHJhY2sgYSBmaWxlIGRlbGV0aW9uIGJ5IENsYXVkZSAoZS5nLiwgdmlhIGJhc2ggcm0gY29tbWFuZCkuXG4gKiBVc2VkIHdoZW4gQ2xhdWRlIGRlbGV0ZXMgYSBmaWxlIHRocm91Z2ggYSBub24tdHJhY2tlZCBtZWNoYW5pc20uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFja0ZpbGVEZWxldGlvbihcbiAgc3RhdGU6IEF0dHJpYnV0aW9uU3RhdGUsXG4gIGZpbGVQYXRoOiBzdHJpbmcsXG4gIG9sZENvbnRlbnQ6IHN0cmluZyxcbik6IEF0dHJpYnV0aW9uU3RhdGUge1xuICBjb25zdCBub3JtYWxpemVkUGF0aCA9IG5vcm1hbGl6ZUZpbGVQYXRoKGZpbGVQYXRoKVxuICBjb25zdCBleGlzdGluZ1N0YXRlID0gc3RhdGUuZmlsZVN0YXRlcy5nZXQobm9ybWFsaXplZFBhdGgpXG4gIGNvbnN0IGV4aXN0aW5nQ29udHJpYnV0aW9uID0gZXhpc3RpbmdTdGF0ZT8uY2xhdWRlQ29udHJpYnV0aW9uID8/IDBcbiAgY29uc3QgZGVsZXRlZENoYXJzID0gb2xkQ29udGVudC5sZW5ndGhcblxuICBjb25zdCBuZXdGaWxlU3RhdGU6IEZpbGVBdHRyaWJ1dGlvblN0YXRlID0ge1xuICAgIGNvbnRlbnRIYXNoOiAnJywgLy8gRW1wdHkgaGFzaCBmb3IgZGVsZXRlZCBmaWxlc1xuICAgIGNsYXVkZUNvbnRyaWJ1dGlvbjogZXhpc3RpbmdDb250cmlidXRpb24gKyBkZWxldGVkQ2hhcnMsXG4gICAgbXRpbWU6IERhdGUubm93KCksXG4gIH1cblxuICBjb25zdCBuZXdGaWxlU3RhdGVzID0gbmV3IE1hcChzdGF0ZS5maWxlU3RhdGVzKVxuICBuZXdGaWxlU3RhdGVzLnNldChub3JtYWxpemVkUGF0aCwgbmV3RmlsZVN0YXRlKVxuXG4gIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICBgQXR0cmlidXRpb246IFRyYWNrZWQgZGVsZXRpb24gb2YgJHtub3JtYWxpemVkUGF0aH0gKCR7ZGVsZXRlZENoYXJzfSBjaGFycyByZW1vdmVkLCB0b3RhbCBjb250cmlidXRpb246ICR7bmV3RmlsZVN0YXRlLmNsYXVkZUNvbnRyaWJ1dGlvbn0pYCxcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgZmlsZVN0YXRlczogbmV3RmlsZVN0YXRlcyxcbiAgfVxufVxuXG4vLyAtLVxuXG4vKipcbiAqIFRyYWNrIG11bHRpcGxlIGZpbGUgY2hhbmdlcyBpbiBidWxrLCBtdXRhdGluZyBhIHNpbmdsZSBNYXAgY29weS5cbiAqIFRoaXMgYXZvaWRzIHRoZSBPKG5cdTAwQjIpIGNvc3Qgb2YgY29weWluZyB0aGUgTWFwIHBlciBmaWxlIHdoZW4gcHJvY2Vzc2luZ1xuICogbGFyZ2UgZ2l0IGRpZmZzIChlLmcuLCBqaiBvcGVyYXRpb25zIHRoYXQgdG91Y2ggaHVuZHJlZHMgb2YgdGhvdXNhbmRzIG9mIGZpbGVzKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYWNrQnVsa0ZpbGVDaGFuZ2VzKFxuICBzdGF0ZTogQXR0cmlidXRpb25TdGF0ZSxcbiAgY2hhbmdlczogUmVhZG9ubHlBcnJheTx7XG4gICAgcGF0aDogc3RyaW5nXG4gICAgdHlwZTogJ21vZGlmaWVkJyB8ICdjcmVhdGVkJyB8ICdkZWxldGVkJ1xuICAgIG9sZENvbnRlbnQ6IHN0cmluZ1xuICAgIG5ld0NvbnRlbnQ6IHN0cmluZ1xuICAgIG10aW1lPzogbnVtYmVyXG4gIH0+LFxuKTogQXR0cmlidXRpb25TdGF0ZSB7XG4gIC8vIENyZWF0ZSBPTkUgY29weSBvZiB0aGUgTWFwLCB0aGVuIG11dGF0ZSBpdCBmb3IgZWFjaCBmaWxlXG4gIGNvbnN0IG5ld0ZpbGVTdGF0ZXMgPSBuZXcgTWFwKHN0YXRlLmZpbGVTdGF0ZXMpXG5cbiAgZm9yIChjb25zdCBjaGFuZ2Ugb2YgY2hhbmdlcykge1xuICAgIGNvbnN0IG10aW1lID0gY2hhbmdlLm10aW1lID8/IERhdGUubm93KClcbiAgICBpZiAoY2hhbmdlLnR5cGUgPT09ICdkZWxldGVkJykge1xuICAgICAgY29uc3Qgbm9ybWFsaXplZFBhdGggPSBub3JtYWxpemVGaWxlUGF0aChjaGFuZ2UucGF0aClcbiAgICAgIGNvbnN0IGV4aXN0aW5nU3RhdGUgPSBuZXdGaWxlU3RhdGVzLmdldChub3JtYWxpemVkUGF0aClcbiAgICAgIGNvbnN0IGV4aXN0aW5nQ29udHJpYnV0aW9uID0gZXhpc3RpbmdTdGF0ZT8uY2xhdWRlQ29udHJpYnV0aW9uID8/IDBcbiAgICAgIGNvbnN0IGRlbGV0ZWRDaGFycyA9IGNoYW5nZS5vbGRDb250ZW50Lmxlbmd0aFxuXG4gICAgICBuZXdGaWxlU3RhdGVzLnNldChub3JtYWxpemVkUGF0aCwge1xuICAgICAgICBjb250ZW50SGFzaDogJycsXG4gICAgICAgIGNsYXVkZUNvbnRyaWJ1dGlvbjogZXhpc3RpbmdDb250cmlidXRpb24gKyBkZWxldGVkQ2hhcnMsXG4gICAgICAgIG10aW1lLFxuICAgICAgfSlcblxuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgQXR0cmlidXRpb246IFRyYWNrZWQgZGVsZXRpb24gb2YgJHtub3JtYWxpemVkUGF0aH0gKCR7ZGVsZXRlZENoYXJzfSBjaGFycyByZW1vdmVkLCB0b3RhbCBjb250cmlidXRpb246ICR7ZXhpc3RpbmdDb250cmlidXRpb24gKyBkZWxldGVkQ2hhcnN9KWAsXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5ld0ZpbGVTdGF0ZSA9IGNvbXB1dGVGaWxlTW9kaWZpY2F0aW9uU3RhdGUoXG4gICAgICAgIG5ld0ZpbGVTdGF0ZXMsXG4gICAgICAgIGNoYW5nZS5wYXRoLFxuICAgICAgICBjaGFuZ2Uub2xkQ29udGVudCxcbiAgICAgICAgY2hhbmdlLm5ld0NvbnRlbnQsXG4gICAgICAgIG10aW1lLFxuICAgICAgKVxuICAgICAgaWYgKG5ld0ZpbGVTdGF0ZSkge1xuICAgICAgICBjb25zdCBub3JtYWxpemVkUGF0aCA9IG5vcm1hbGl6ZUZpbGVQYXRoKGNoYW5nZS5wYXRoKVxuICAgICAgICBuZXdGaWxlU3RhdGVzLnNldChub3JtYWxpemVkUGF0aCwgbmV3RmlsZVN0YXRlKVxuXG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICBgQXR0cmlidXRpb246IFRyYWNrZWQgJHtuZXdGaWxlU3RhdGUuY2xhdWRlQ29udHJpYnV0aW9ufSBjaGFycyBmb3IgJHtub3JtYWxpemVkUGF0aH1gLFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBmaWxlU3RhdGVzOiBuZXdGaWxlU3RhdGVzLFxuICB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlIGZpbmFsIGF0dHJpYnV0aW9uIGZvciBzdGFnZWQgZmlsZXMuXG4gKiBDb21wYXJlcyBzZXNzaW9uIGJhc2VsaW5lIHRvIGNvbW1pdHRlZCBzdGF0ZS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGN1bGF0ZUNvbW1pdEF0dHJpYnV0aW9uKFxuICBzdGF0ZXM6IEF0dHJpYnV0aW9uU3RhdGVbXSxcbiAgc3RhZ2VkRmlsZXM6IHN0cmluZ1tdLFxuKTogUHJvbWlzZTxBdHRyaWJ1dGlvbkRhdGE+IHtcbiAgY29uc3QgY3dkID0gZ2V0QXR0cmlidXRpb25SZXBvUm9vdCgpXG4gIGNvbnN0IHNlc3Npb25JZCA9IGdldFNlc3Npb25JZCgpXG5cbiAgY29uc3QgZmlsZXM6IFJlY29yZDxzdHJpbmcsIEZpbGVBdHRyaWJ1dGlvbj4gPSB7fVxuICBjb25zdCBleGNsdWRlZEdlbmVyYXRlZDogc3RyaW5nW10gPSBbXVxuICBjb25zdCBzdXJmYWNlcyA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIGNvbnN0IHN1cmZhY2VDb3VudHM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fVxuXG4gIGxldCB0b3RhbENsYXVkZUNoYXJzID0gMFxuICBsZXQgdG90YWxIdW1hbkNoYXJzID0gMFxuXG4gIC8vIE1lcmdlIGZpbGUgc3RhdGVzIGZyb20gYWxsIHNlc3Npb25zXG4gIGNvbnN0IG1lcmdlZEZpbGVTdGF0ZXMgPSBuZXcgTWFwPHN0cmluZywgRmlsZUF0dHJpYnV0aW9uU3RhdGU+KClcbiAgY29uc3QgbWVyZ2VkQmFzZWxpbmVzID0gbmV3IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgeyBjb250ZW50SGFzaDogc3RyaW5nOyBtdGltZTogbnVtYmVyIH1cbiAgPigpXG5cbiAgZm9yIChjb25zdCBzdGF0ZSBvZiBzdGF0ZXMpIHtcbiAgICBzdXJmYWNlcy5hZGQoc3RhdGUuc3VyZmFjZSlcblxuICAgIC8vIE1lcmdlIGJhc2VsaW5lcyAoZWFybGllc3QgYmFzZWxpbmUgd2lucylcbiAgICAvLyBIYW5kbGUgYm90aCBNYXAgYW5kIHBsYWluIG9iamVjdCAoaW4gY2FzZSBvZiBzZXJpYWxpemF0aW9uKVxuICAgIGNvbnN0IGJhc2VsaW5lcyA9XG4gICAgICBzdGF0ZS5zZXNzaW9uQmFzZWxpbmVzIGluc3RhbmNlb2YgTWFwXG4gICAgICAgID8gc3RhdGUuc2Vzc2lvbkJhc2VsaW5lc1xuICAgICAgICA6IG5ldyBNYXAoXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhcbiAgICAgICAgICAgICAgKHN0YXRlLnNlc3Npb25CYXNlbGluZXMgPz8ge30pIGFzIFJlY29yZDxcbiAgICAgICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICAgICAgeyBjb250ZW50SGFzaDogc3RyaW5nOyBtdGltZTogbnVtYmVyIH1cbiAgICAgICAgICAgICAgPixcbiAgICAgICAgICAgICksXG4gICAgICAgICAgKVxuICAgIGZvciAoY29uc3QgW3BhdGgsIGJhc2VsaW5lXSBvZiBiYXNlbGluZXMpIHtcbiAgICAgIGlmICghbWVyZ2VkQmFzZWxpbmVzLmhhcyhwYXRoKSkge1xuICAgICAgICBtZXJnZWRCYXNlbGluZXMuc2V0KHBhdGgsIGJhc2VsaW5lKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1lcmdlIGZpbGUgc3RhdGVzIChhY2N1bXVsYXRlIGNvbnRyaWJ1dGlvbnMpXG4gICAgLy8gSGFuZGxlIGJvdGggTWFwIGFuZCBwbGFpbiBvYmplY3QgKGluIGNhc2Ugb2Ygc2VyaWFsaXphdGlvbilcbiAgICBjb25zdCBmaWxlU3RhdGVzID1cbiAgICAgIHN0YXRlLmZpbGVTdGF0ZXMgaW5zdGFuY2VvZiBNYXBcbiAgICAgICAgPyBzdGF0ZS5maWxlU3RhdGVzXG4gICAgICAgIDogbmV3IE1hcChcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKFxuICAgICAgICAgICAgICAoc3RhdGUuZmlsZVN0YXRlcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgRmlsZUF0dHJpYnV0aW9uU3RhdGU+LFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICApXG4gICAgZm9yIChjb25zdCBbcGF0aCwgZmlsZVN0YXRlXSBvZiBmaWxlU3RhdGVzKSB7XG4gICAgICBjb25zdCBleGlzdGluZyA9IG1lcmdlZEZpbGVTdGF0ZXMuZ2V0KHBhdGgpXG4gICAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgICAgbWVyZ2VkRmlsZVN0YXRlcy5zZXQocGF0aCwge1xuICAgICAgICAgIC4uLmZpbGVTdGF0ZSxcbiAgICAgICAgICBjbGF1ZGVDb250cmlidXRpb246XG4gICAgICAgICAgICBleGlzdGluZy5jbGF1ZGVDb250cmlidXRpb24gKyBmaWxlU3RhdGUuY2xhdWRlQ29udHJpYnV0aW9uLFxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVyZ2VkRmlsZVN0YXRlcy5zZXQocGF0aCwgZmlsZVN0YXRlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFByb2Nlc3MgZmlsZXMgaW4gcGFyYWxsZWxcbiAgY29uc3QgZmlsZVJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBzdGFnZWRGaWxlcy5tYXAoYXN5bmMgZmlsZSA9PiB7XG4gICAgICAvLyBTa2lwIGdlbmVyYXRlZCBmaWxlc1xuICAgICAgaWYgKGlzR2VuZXJhdGVkRmlsZShmaWxlKSkge1xuICAgICAgICByZXR1cm4geyB0eXBlOiAnZ2VuZXJhdGVkJyBhcyBjb25zdCwgZmlsZSB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFic1BhdGggPSBqb2luKGN3ZCwgZmlsZSlcbiAgICAgIGNvbnN0IGZpbGVTdGF0ZSA9IG1lcmdlZEZpbGVTdGF0ZXMuZ2V0KGZpbGUpXG4gICAgICBjb25zdCBiYXNlbGluZSA9IG1lcmdlZEJhc2VsaW5lcy5nZXQoZmlsZSlcblxuICAgICAgLy8gR2V0IHRoZSBzdXJmYWNlIGZvciB0aGlzIGZpbGVcbiAgICAgIGNvbnN0IGZpbGVTdXJmYWNlID0gc3RhdGVzWzBdIS5zdXJmYWNlXG5cbiAgICAgIGxldCBjbGF1ZGVDaGFycyA9IDBcbiAgICAgIGxldCBodW1hbkNoYXJzID0gMFxuXG4gICAgICAvLyBDaGVjayBpZiBmaWxlIHdhcyBkZWxldGVkXG4gICAgICBjb25zdCBkZWxldGVkID0gYXdhaXQgaXNGaWxlRGVsZXRlZChmaWxlKVxuXG4gICAgICBpZiAoZGVsZXRlZCkge1xuICAgICAgICAvLyBGaWxlIHdhcyBkZWxldGVkXG4gICAgICAgIGlmIChmaWxlU3RhdGUpIHtcbiAgICAgICAgICAvLyBDbGF1ZGUgZGVsZXRlZCB0aGlzIGZpbGUgKHRyYWNrZWQgZGVsZXRpb24pXG4gICAgICAgICAgY2xhdWRlQ2hhcnMgPSBmaWxlU3RhdGUuY2xhdWRlQ29udHJpYnV0aW9uXG4gICAgICAgICAgaHVtYW5DaGFycyA9IDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBIdW1hbiBkZWxldGVkIHRoaXMgZmlsZSAodW50cmFja2VkIGRlbGV0aW9uKVxuICAgICAgICAgIC8vIFVzZSBkaWZmIHNpemUgdG8gZ2V0IHRoZSBhY3R1YWwgY2hhbmdlIHNpemVcbiAgICAgICAgICBjb25zdCBkaWZmU2l6ZSA9IGF3YWl0IGdldEdpdERpZmZTaXplKGZpbGUpXG4gICAgICAgICAgaHVtYW5DaGFycyA9IGRpZmZTaXplID4gMCA/IGRpZmZTaXplIDogMTAwIC8vIE1pbmltdW0gYXR0cmlidXRpb24gZm9yIGEgZGVsZXRpb25cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBPbmx5IG5lZWQgZmlsZSBzaXplLCBub3QgY29udGVudCAtIHN0YXQoKSBhdm9pZHMgbG9hZGluZyBHQi1zY2FsZVxuICAgICAgICAgIC8vIGJ1aWxkIGFydGlmYWN0cyBpbnRvIG1lbW9yeSB3aGVuIHRoZXkgYXBwZWFyIGluIHRoZSB3b3JraW5nIHRyZWUuXG4gICAgICAgICAgLy8gc3RhdHMuc2l6ZSAoYnl0ZXMpIGlzIGFuIGFkZXF1YXRlIHByb3h5IGZvciBjaGFyIGNvdW50IGhlcmUuXG4gICAgICAgICAgY29uc3Qgc3RhdHMgPSBhd2FpdCBzdGF0KGFic1BhdGgpXG5cbiAgICAgICAgICBpZiAoZmlsZVN0YXRlKSB7XG4gICAgICAgICAgICAvLyBXZSBoYXZlIHRyYWNrZWQgbW9kaWZpY2F0aW9ucyBmb3IgdGhpcyBmaWxlXG4gICAgICAgICAgICBjbGF1ZGVDaGFycyA9IGZpbGVTdGF0ZS5jbGF1ZGVDb250cmlidXRpb25cbiAgICAgICAgICAgIGh1bWFuQ2hhcnMgPSAwXG4gICAgICAgICAgfSBlbHNlIGlmIChiYXNlbGluZSkge1xuICAgICAgICAgICAgLy8gRmlsZSB3YXMgbW9kaWZpZWQgYnV0IG5vdCB0cmFja2VkIC0gaHVtYW4gbW9kaWZpY2F0aW9uXG4gICAgICAgICAgICBjb25zdCBkaWZmU2l6ZSA9IGF3YWl0IGdldEdpdERpZmZTaXplKGZpbGUpXG4gICAgICAgICAgICBodW1hbkNoYXJzID0gZGlmZlNpemUgPiAwID8gZGlmZlNpemUgOiBzdGF0cy5zaXplXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE5ldyBmaWxlIG5vdCBjcmVhdGVkIGJ5IENsYXVkZVxuICAgICAgICAgICAgaHVtYW5DaGFycyA9IHN0YXRzLnNpemVcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIC8vIEZpbGUgZG9lc24ndCBleGlzdCBvciBzdGF0IGZhaWxlZCAtIHNraXAgaXRcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEVuc3VyZSBub24tbmVnYXRpdmUgdmFsdWVzXG4gICAgICBjbGF1ZGVDaGFycyA9IE1hdGgubWF4KDAsIGNsYXVkZUNoYXJzKVxuICAgICAgaHVtYW5DaGFycyA9IE1hdGgubWF4KDAsIGh1bWFuQ2hhcnMpXG5cbiAgICAgIGNvbnN0IHRvdGFsID0gY2xhdWRlQ2hhcnMgKyBodW1hbkNoYXJzXG4gICAgICBjb25zdCBwZXJjZW50ID0gdG90YWwgPiAwID8gTWF0aC5yb3VuZCgoY2xhdWRlQ2hhcnMgLyB0b3RhbCkgKiAxMDApIDogMFxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnZmlsZScgYXMgY29uc3QsXG4gICAgICAgIGZpbGUsXG4gICAgICAgIGNsYXVkZUNoYXJzLFxuICAgICAgICBodW1hbkNoYXJzLFxuICAgICAgICBwZXJjZW50LFxuICAgICAgICBzdXJmYWNlOiBmaWxlU3VyZmFjZSxcbiAgICAgIH1cbiAgICB9KSxcbiAgKVxuXG4gIC8vIEFnZ3JlZ2F0ZSByZXN1bHRzXG4gIGZvciAoY29uc3QgcmVzdWx0IG9mIGZpbGVSZXN1bHRzKSB7XG4gICAgaWYgKCFyZXN1bHQpIGNvbnRpbnVlXG5cbiAgICBpZiAocmVzdWx0LnR5cGUgPT09ICdnZW5lcmF0ZWQnKSB7XG4gICAgICBleGNsdWRlZEdlbmVyYXRlZC5wdXNoKHJlc3VsdC5maWxlKVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBmaWxlc1tyZXN1bHQuZmlsZV0gPSB7XG4gICAgICBjbGF1ZGVDaGFyczogcmVzdWx0LmNsYXVkZUNoYXJzLFxuICAgICAgaHVtYW5DaGFyczogcmVzdWx0Lmh1bWFuQ2hhcnMsXG4gICAgICBwZXJjZW50OiByZXN1bHQucGVyY2VudCxcbiAgICAgIHN1cmZhY2U6IHJlc3VsdC5zdXJmYWNlLFxuICAgIH1cblxuICAgIHRvdGFsQ2xhdWRlQ2hhcnMgKz0gcmVzdWx0LmNsYXVkZUNoYXJzXG4gICAgdG90YWxIdW1hbkNoYXJzICs9IHJlc3VsdC5odW1hbkNoYXJzXG5cbiAgICBzdXJmYWNlQ291bnRzW3Jlc3VsdC5zdXJmYWNlXSA9XG4gICAgICAoc3VyZmFjZUNvdW50c1tyZXN1bHQuc3VyZmFjZV0gPz8gMCkgKyByZXN1bHQuY2xhdWRlQ2hhcnNcbiAgfVxuXG4gIGNvbnN0IHRvdGFsQ2hhcnMgPSB0b3RhbENsYXVkZUNoYXJzICsgdG90YWxIdW1hbkNoYXJzXG4gIGNvbnN0IGNsYXVkZVBlcmNlbnQgPVxuICAgIHRvdGFsQ2hhcnMgPiAwID8gTWF0aC5yb3VuZCgodG90YWxDbGF1ZGVDaGFycyAvIHRvdGFsQ2hhcnMpICogMTAwKSA6IDBcblxuICAvLyBDYWxjdWxhdGUgc3VyZmFjZSBicmVha2Rvd24gKHBlcmNlbnRhZ2Ugb2YgdG90YWwgY29udGVudCBwZXIgc3VyZmFjZSlcbiAgY29uc3Qgc3VyZmFjZUJyZWFrZG93bjogUmVjb3JkPFxuICAgIHN0cmluZyxcbiAgICB7IGNsYXVkZUNoYXJzOiBudW1iZXI7IHBlcmNlbnQ6IG51bWJlciB9XG4gID4gPSB7fVxuICBmb3IgKGNvbnN0IFtzdXJmYWNlLCBjaGFyc10gb2YgT2JqZWN0LmVudHJpZXMoc3VyZmFjZUNvdW50cykpIHtcbiAgICAvLyBDYWxjdWxhdGUgd2hhdCBwZXJjZW50YWdlIG9mIFRPVEFMIGNvbnRlbnQgdGhpcyBzdXJmYWNlIGNvbnRyaWJ1dGVkXG4gICAgY29uc3QgcGVyY2VudCA9IHRvdGFsQ2hhcnMgPiAwID8gTWF0aC5yb3VuZCgoY2hhcnMgLyB0b3RhbENoYXJzKSAqIDEwMCkgOiAwXG4gICAgc3VyZmFjZUJyZWFrZG93bltzdXJmYWNlXSA9IHsgY2xhdWRlQ2hhcnM6IGNoYXJzLCBwZXJjZW50IH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdmVyc2lvbjogMSxcbiAgICBzdW1tYXJ5OiB7XG4gICAgICBjbGF1ZGVQZXJjZW50LFxuICAgICAgY2xhdWRlQ2hhcnM6IHRvdGFsQ2xhdWRlQ2hhcnMsXG4gICAgICBodW1hbkNoYXJzOiB0b3RhbEh1bWFuQ2hhcnMsXG4gICAgICBzdXJmYWNlczogQXJyYXkuZnJvbShzdXJmYWNlcyksXG4gICAgfSxcbiAgICBmaWxlcyxcbiAgICBzdXJmYWNlQnJlYWtkb3duLFxuICAgIGV4Y2x1ZGVkR2VuZXJhdGVkLFxuICAgIHNlc3Npb25zOiBbc2Vzc2lvbklkXSxcbiAgfVxufVxuXG4vKipcbiAqIEdldCB0aGUgc2l6ZSBvZiBjaGFuZ2VzIGZvciBhIGZpbGUgZnJvbSBnaXQgZGlmZi5cbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIGFkZGVkL3JlbW92ZWQgKGFic29sdXRlIGRpZmZlcmVuY2UpLlxuICogRm9yIG5ldyBmaWxlcywgcmV0dXJucyB0aGUgdG90YWwgZmlsZSBzaXplLlxuICogRm9yIGRlbGV0ZWQgZmlsZXMsIHJldHVybnMgdGhlIHNpemUgb2YgdGhlIGRlbGV0ZWQgY29udGVudC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdpdERpZmZTaXplKGZpbGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG51bWJlcj4ge1xuICBjb25zdCBjd2QgPSBnZXRBdHRyaWJ1dGlvblJlcG9Sb290KClcblxuICB0cnkge1xuICAgIC8vIFVzZSBnaXQgZGlmZiAtLXN0YXQgdG8gZ2V0IGEgc3VtbWFyeSBvZiBjaGFuZ2VzXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZXhlY0ZpbGVOb1Rocm93V2l0aEN3ZChcbiAgICAgIGdpdEV4ZSgpLFxuICAgICAgWydkaWZmJywgJy0tY2FjaGVkJywgJy0tc3RhdCcsICctLScsIGZpbGVQYXRoXSxcbiAgICAgIHsgY3dkLCB0aW1lb3V0OiA1MDAwIH0sXG4gICAgKVxuXG4gICAgaWYgKHJlc3VsdC5jb2RlICE9PSAwIHx8ICFyZXN1bHQuc3Rkb3V0KSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cblxuICAgIC8vIFBhcnNlIHRoZSBzdGF0IG91dHB1dCB0byBleHRyYWN0IGFkZGl0aW9ucyBhbmQgZGVsZXRpb25zXG4gICAgLy8gRm9ybWF0OiBcIiBmaWxlIHwgNSArKy0tLVwiIG9yIFwiIGZpbGUgfCAxMCArXCJcbiAgICBjb25zdCBsaW5lcyA9IHJlc3VsdC5zdGRvdXQuc3BsaXQoJ1xcbicpLmZpbHRlcihCb29sZWFuKVxuICAgIGxldCB0b3RhbENoYW5nZXMgPSAwXG5cbiAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgIC8vIFNraXAgdGhlIHN1bW1hcnkgbGluZSAoZS5nLiwgXCIxIGZpbGUgY2hhbmdlZCwgMyBpbnNlcnRpb25zKCspLCAyIGRlbGV0aW9ucygtKVwiKVxuICAgICAgaWYgKGxpbmUuaW5jbHVkZXMoJ2ZpbGUgY2hhbmdlZCcpIHx8IGxpbmUuaW5jbHVkZXMoJ2ZpbGVzIGNoYW5nZWQnKSkge1xuICAgICAgICBjb25zdCBpbnNlcnRNYXRjaCA9IGxpbmUubWF0Y2goLyhcXGQrKSBpbnNlcnRpb25zPy8pXG4gICAgICAgIGNvbnN0IGRlbGV0ZU1hdGNoID0gbGluZS5tYXRjaCgvKFxcZCspIGRlbGV0aW9ucz8vKVxuXG4gICAgICAgIC8vIFVzZSBsaW5lLWJhc2VkIGNoYW5nZXMgYW5kIGFwcHJveGltYXRlIGNoYXJzIHBlciBsaW5lICh+NDAgY2hhcnMgYXZlcmFnZSlcbiAgICAgICAgY29uc3QgaW5zZXJ0aW9ucyA9IGluc2VydE1hdGNoID8gcGFyc2VJbnQoaW5zZXJ0TWF0Y2hbMV0hLCAxMCkgOiAwXG4gICAgICAgIGNvbnN0IGRlbGV0aW9ucyA9IGRlbGV0ZU1hdGNoID8gcGFyc2VJbnQoZGVsZXRlTWF0Y2hbMV0hLCAxMCkgOiAwXG4gICAgICAgIHRvdGFsQ2hhbmdlcyArPSAoaW5zZXJ0aW9ucyArIGRlbGV0aW9ucykgKiA0MFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b3RhbENoYW5nZXNcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIDBcbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgZmlsZSB3YXMgZGVsZXRlZCBpbiB0aGUgc3RhZ2VkIGNoYW5nZXMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc0ZpbGVEZWxldGVkKGZpbGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgY29uc3QgY3dkID0gZ2V0QXR0cmlidXRpb25SZXBvUm9vdCgpXG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBleGVjRmlsZU5vVGhyb3dXaXRoQ3dkKFxuICAgICAgZ2l0RXhlKCksXG4gICAgICBbJ2RpZmYnLCAnLS1jYWNoZWQnLCAnLS1uYW1lLXN0YXR1cycsICctLScsIGZpbGVQYXRoXSxcbiAgICAgIHsgY3dkLCB0aW1lb3V0OiA1MDAwIH0sXG4gICAgKVxuXG4gICAgaWYgKHJlc3VsdC5jb2RlID09PSAwICYmIHJlc3VsdC5zdGRvdXQpIHtcbiAgICAgIC8vIEZvcm1hdDogXCJEXFx0ZmlsZW5hbWVcIiBmb3IgZGVsZXRlZCBmaWxlc1xuICAgICAgcmV0dXJuIHJlc3VsdC5zdGRvdXQudHJpbSgpLnN0YXJ0c1dpdGgoJ0RcXHQnKVxuICAgIH1cbiAgfSBjYXRjaCB7XG4gICAgLy8gSWdub3JlIGVycm9yc1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qKlxuICogR2V0IHN0YWdlZCBmaWxlcyBmcm9tIGdpdC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YWdlZEZpbGVzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgY29uc3QgY3dkID0gZ2V0QXR0cmlidXRpb25SZXBvUm9vdCgpXG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBleGVjRmlsZU5vVGhyb3dXaXRoQ3dkKFxuICAgICAgZ2l0RXhlKCksXG4gICAgICBbJ2RpZmYnLCAnLS1jYWNoZWQnLCAnLS1uYW1lLW9ubHknXSxcbiAgICAgIHsgY3dkLCB0aW1lb3V0OiA1MDAwIH0sXG4gICAgKVxuXG4gICAgaWYgKHJlc3VsdC5jb2RlID09PSAwICYmIHJlc3VsdC5zdGRvdXQpIHtcbiAgICAgIHJldHVybiByZXN1bHQuc3Rkb3V0LnNwbGl0KCdcXG4nKS5maWx0ZXIoQm9vbGVhbilcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nRXJyb3IoZXJyb3IgYXMgRXJyb3IpXG4gIH1cblxuICByZXR1cm4gW11cbn1cblxuLy8gZm9ybWF0QXR0cmlidXRpb25UcmFpbGVyIG1vdmVkIHRvIGF0dHJpYnV0aW9uVHJhaWxlci50cyBmb3IgdHJlZS1zaGFraW5nXG4vLyAoY29udGFpbnMgZXhjbHVkZWQgc3RyaW5ncyB0aGF0IHNob3VsZCBub3QgYmUgaW4gZXh0ZXJuYWwgYnVpbGRzKVxuXG4vKipcbiAqIENoZWNrIGlmIHdlJ3JlIGluIGEgdHJhbnNpZW50IGdpdCBzdGF0ZSAocmViYXNlLCBtZXJnZSwgY2hlcnJ5LXBpY2spLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNHaXRUcmFuc2llbnRTdGF0ZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgY29uc3QgZ2l0RGlyID0gYXdhaXQgcmVzb2x2ZUdpdERpcihnZXRBdHRyaWJ1dGlvblJlcG9Sb290KCkpXG4gIGlmICghZ2l0RGlyKSByZXR1cm4gZmFsc2VcblxuICBjb25zdCBpbmRpY2F0b3JzID0gW1xuICAgICdyZWJhc2UtbWVyZ2UnLFxuICAgICdyZWJhc2UtYXBwbHknLFxuICAgICdNRVJHRV9IRUFEJyxcbiAgICAnQ0hFUlJZX1BJQ0tfSEVBRCcsXG4gICAgJ0JJU0VDVF9MT0cnLFxuICBdXG5cbiAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgIGluZGljYXRvcnMubWFwKGFzeW5jIGluZGljYXRvciA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBzdGF0KGpvaW4oZ2l0RGlyLCBpbmRpY2F0b3IpKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0pLFxuICApXG5cbiAgcmV0dXJuIHJlc3VsdHMuc29tZShleGlzdHMgPT4gZXhpc3RzKVxufVxuXG4vKipcbiAqIENvbnZlcnQgYXR0cmlidXRpb24gc3RhdGUgdG8gc25hcHNob3QgbWVzc2FnZSBmb3IgcGVyc2lzdGVuY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZVRvU25hcHNob3RNZXNzYWdlKFxuICBzdGF0ZTogQXR0cmlidXRpb25TdGF0ZSxcbiAgbWVzc2FnZUlkOiBVVUlELFxuKTogQXR0cmlidXRpb25TbmFwc2hvdE1lc3NhZ2Uge1xuICBjb25zdCBmaWxlU3RhdGVzOiBSZWNvcmQ8c3RyaW5nLCBGaWxlQXR0cmlidXRpb25TdGF0ZT4gPSB7fVxuXG4gIGZvciAoY29uc3QgW3BhdGgsIGZpbGVTdGF0ZV0gb2Ygc3RhdGUuZmlsZVN0YXRlcykge1xuICAgIGZpbGVTdGF0ZXNbcGF0aF0gPSBmaWxlU3RhdGVcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdHlwZTogJ2F0dHJpYnV0aW9uLXNuYXBzaG90JyxcbiAgICBtZXNzYWdlSWQsXG4gICAgc3VyZmFjZTogc3RhdGUuc3VyZmFjZSxcbiAgICBmaWxlU3RhdGVzLFxuICAgIHByb21wdENvdW50OiBzdGF0ZS5wcm9tcHRDb3VudCxcbiAgICBwcm9tcHRDb3VudEF0TGFzdENvbW1pdDogc3RhdGUucHJvbXB0Q291bnRBdExhc3RDb21taXQsXG4gICAgcGVybWlzc2lvblByb21wdENvdW50OiBzdGF0ZS5wZXJtaXNzaW9uUHJvbXB0Q291bnQsXG4gICAgcGVybWlzc2lvblByb21wdENvdW50QXRMYXN0Q29tbWl0OiBzdGF0ZS5wZXJtaXNzaW9uUHJvbXB0Q291bnRBdExhc3RDb21taXQsXG4gICAgZXNjYXBlQ291bnQ6IHN0YXRlLmVzY2FwZUNvdW50LFxuICAgIGVzY2FwZUNvdW50QXRMYXN0Q29tbWl0OiBzdGF0ZS5lc2NhcGVDb3VudEF0TGFzdENvbW1pdCxcbiAgfVxufVxuXG4vKipcbiAqIFJlc3RvcmUgYXR0cmlidXRpb24gc3RhdGUgZnJvbSBzbmFwc2hvdCBtZXNzYWdlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc3RvcmVBdHRyaWJ1dGlvblN0YXRlRnJvbVNuYXBzaG90cyhcbiAgc25hcHNob3RzOiBBdHRyaWJ1dGlvblNuYXBzaG90TWVzc2FnZVtdLFxuKTogQXR0cmlidXRpb25TdGF0ZSB7XG4gIGNvbnN0IHN0YXRlID0gY3JlYXRlRW1wdHlBdHRyaWJ1dGlvblN0YXRlKClcblxuICAvLyBTbmFwc2hvdHMgYXJlIGZ1bGwtc3RhdGUgZHVtcHMgKHNlZSBzdGF0ZVRvU25hcHNob3RNZXNzYWdlKSwgbm90IGRlbHRhcy5cbiAgLy8gVGhlIGxhc3Qgc25hcHNob3QgaGFzIHRoZSBtb3N0IHJlY2VudCBjb3VudCBmb3IgZXZlcnkgcGF0aCBcdTIwMTQgZmlsZVN0YXRlc1xuICAvLyBuZXZlciBzaHJpbmtzLiBJdGVyYXRpbmcgYW5kIFNVTU1JTkcgY291bnRzIGFjcm9zcyBzbmFwc2hvdHMgY2F1c2VzXG4gIC8vIHF1YWRyYXRpYyBncm93dGggb24gcmVzdG9yZSAoODM3IHNuYXBzaG90cyBcdTAwRDcgMjgwIGZpbGVzIFx1MjE5MiAxLjE1IHF1YWRyaWxsaW9uXG4gIC8vIFwiY2hhcnNcIiB0cmFja2VkIGZvciBhIDVLQiBmaWxlIG92ZXIgYSA1LWRheSBzZXNzaW9uKS5cbiAgY29uc3QgbGFzdFNuYXBzaG90ID0gc25hcHNob3RzW3NuYXBzaG90cy5sZW5ndGggLSAxXVxuICBpZiAoIWxhc3RTbmFwc2hvdCkge1xuICAgIHJldHVybiBzdGF0ZVxuICB9XG5cbiAgc3RhdGUuc3VyZmFjZSA9IGxhc3RTbmFwc2hvdC5zdXJmYWNlXG4gIGZvciAoY29uc3QgW3BhdGgsIGZpbGVTdGF0ZV0gb2YgT2JqZWN0LmVudHJpZXMobGFzdFNuYXBzaG90LmZpbGVTdGF0ZXMpKSB7XG4gICAgc3RhdGUuZmlsZVN0YXRlcy5zZXQocGF0aCwgZmlsZVN0YXRlKVxuICB9XG5cbiAgLy8gUmVzdG9yZSBwcm9tcHQgY291bnRzIGZyb20gdGhlIGxhc3Qgc25hcHNob3QgKG1vc3QgcmVjZW50IHN0YXRlKVxuICBzdGF0ZS5wcm9tcHRDb3VudCA9IGxhc3RTbmFwc2hvdC5wcm9tcHRDb3VudCA/PyAwXG4gIHN0YXRlLnByb21wdENvdW50QXRMYXN0Q29tbWl0ID0gbGFzdFNuYXBzaG90LnByb21wdENvdW50QXRMYXN0Q29tbWl0ID8/IDBcbiAgc3RhdGUucGVybWlzc2lvblByb21wdENvdW50ID0gbGFzdFNuYXBzaG90LnBlcm1pc3Npb25Qcm9tcHRDb3VudCA/PyAwXG4gIHN0YXRlLnBlcm1pc3Npb25Qcm9tcHRDb3VudEF0TGFzdENvbW1pdCA9XG4gICAgbGFzdFNuYXBzaG90LnBlcm1pc3Npb25Qcm9tcHRDb3VudEF0TGFzdENvbW1pdCA/PyAwXG4gIHN0YXRlLmVzY2FwZUNvdW50ID0gbGFzdFNuYXBzaG90LmVzY2FwZUNvdW50ID8/IDBcbiAgc3RhdGUuZXNjYXBlQ291bnRBdExhc3RDb21taXQgPSBsYXN0U25hcHNob3QuZXNjYXBlQ291bnRBdExhc3RDb21taXQgPz8gMFxuXG4gIHJldHVybiBzdGF0ZVxufVxuXG4vKipcbiAqIFJlc3RvcmUgYXR0cmlidXRpb24gc3RhdGUgZnJvbSBsb2cgc25hcHNob3RzIG9uIHNlc3Npb24gcmVzdW1lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXR0cmlidXRpb25SZXN0b3JlU3RhdGVGcm9tTG9nKFxuICBhdHRyaWJ1dGlvblNuYXBzaG90czogQXR0cmlidXRpb25TbmFwc2hvdE1lc3NhZ2VbXSxcbiAgb25VcGRhdGVTdGF0ZTogKG5ld1N0YXRlOiBBdHRyaWJ1dGlvblN0YXRlKSA9PiB2b2lkLFxuKTogdm9pZCB7XG4gIGNvbnN0IHN0YXRlID0gcmVzdG9yZUF0dHJpYnV0aW9uU3RhdGVGcm9tU25hcHNob3RzKGF0dHJpYnV0aW9uU25hcHNob3RzKVxuICBvblVwZGF0ZVN0YXRlKHN0YXRlKVxufVxuXG4vKipcbiAqIEluY3JlbWVudCBwcm9tcHRDb3VudCBhbmQgc2F2ZSBhbiBhdHRyaWJ1dGlvbiBzbmFwc2hvdC5cbiAqIFVzZWQgdG8gcGVyc2lzdCB0aGUgcHJvbXB0IGNvdW50IGFjcm9zcyBjb21wYWN0aW9uLlxuICpcbiAqIEBwYXJhbSBhdHRyaWJ1dGlvbiAtIEN1cnJlbnQgYXR0cmlidXRpb24gc3RhdGVcbiAqIEBwYXJhbSBzYXZlU25hcHNob3QgLSBGdW5jdGlvbiB0byBzYXZlIHRoZSBzbmFwc2hvdCAoYWxsb3dzIGFzeW5jIGhhbmRsaW5nIGJ5IGNhbGxlcilcbiAqIEByZXR1cm5zIE5ldyBhdHRyaWJ1dGlvbiBzdGF0ZSB3aXRoIGluY3JlbWVudGVkIHByb21wdENvdW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbmNyZW1lbnRQcm9tcHRDb3VudChcbiAgYXR0cmlidXRpb246IEF0dHJpYnV0aW9uU3RhdGUsXG4gIHNhdmVTbmFwc2hvdDogKHNuYXBzaG90OiBBdHRyaWJ1dGlvblNuYXBzaG90TWVzc2FnZSkgPT4gdm9pZCxcbik6IEF0dHJpYnV0aW9uU3RhdGUge1xuICBjb25zdCBuZXdBdHRyaWJ1dGlvbiA9IHtcbiAgICAuLi5hdHRyaWJ1dGlvbixcbiAgICBwcm9tcHRDb3VudDogYXR0cmlidXRpb24ucHJvbXB0Q291bnQgKyAxLFxuICB9XG4gIGNvbnN0IHNuYXBzaG90ID0gc3RhdGVUb1NuYXBzaG90TWVzc2FnZShuZXdBdHRyaWJ1dGlvbiwgcmFuZG9tVVVJRCgpKVxuICBzYXZlU25hcHNob3Qoc25hcHNob3QpXG4gIHJldHVybiBuZXdBdHRyaWJ1dGlvblxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyxVQUFVLFNBQVMsT0FBTyxXQUFXO0FBb0Z2QyxTQUFTLGdCQUFnQixVQUEyQjtBQUV6RCxRQUFNLGlCQUNKLE1BQU0sTUFBTSxTQUFTLE1BQU0sR0FBRyxFQUFFLEtBQUssTUFBTSxHQUFHLEVBQUUsUUFBUSxRQUFRLEVBQUU7QUFDcEUsUUFBTSxXQUFXLFNBQVMsUUFBUSxFQUFFLFlBQVk7QUFDaEQsUUFBTSxNQUFNLFFBQVEsUUFBUSxFQUFFLFlBQVk7QUFHMUMsTUFBSSxtQkFBbUIsSUFBSSxRQUFRLEdBQUc7QUFDcEMsV0FBTztBQUFBLEVBQ1Q7QUFHQSxNQUFJLG9CQUFvQixJQUFJLEdBQUcsR0FBRztBQUNoQyxXQUFPO0FBQUEsRUFDVDtBQUdBLFFBQU0sUUFBUSxTQUFTLE1BQU0sR0FBRztBQUNoQyxNQUFJLE1BQU0sU0FBUyxHQUFHO0FBQ3BCLFVBQU0sY0FBYyxNQUFNLE1BQU0sTUFBTSxFQUFFLEVBQUUsS0FBSyxHQUFHO0FBQ2xELFFBQUksb0JBQW9CLElBQUksV0FBVyxHQUFHO0FBQ3hDLGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUdBLGFBQVcsT0FBTyxzQkFBc0I7QUFDdEMsUUFBSSxlQUFlLFNBQVMsR0FBRyxHQUFHO0FBQ2hDLGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUdBLGFBQVcsV0FBVyw0QkFBNEI7QUFDaEQsUUFBSSxRQUFRLEtBQUssUUFBUSxHQUFHO0FBQzFCLGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtB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
