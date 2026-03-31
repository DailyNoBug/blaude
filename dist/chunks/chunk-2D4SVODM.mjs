#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  FRONTMATTER_REGEX,
  classifyFetchError,
  getPluginsDirectory,
  init_fetchTelemetry,
  init_frontmatterParser,
  init_pluginDirectories,
  init_yaml,
  logPluginFetch,
  parseYaml
} from "./chunk-OPLSBIOC.mjs";
import {
  PluginHooksSchema,
  PluginManifestSchema,
  PluginMarketplaceEntrySchema,
  PluginMarketplaceSchema,
  init_schemas
} from "./chunk-Z6CSO4BY.mjs";
import {
  init_v4
} from "./chunk-PPND3F3V.mjs";
import {
  external_exports
} from "./chunk-BKRSSLV2.mjs";
import {
  axios_default,
  init_axios
} from "./chunk-J6MJ6UVK.mjs";
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import {
  errorMessage,
  getErrnoCode,
  getFsImplementation,
  init_debug,
  init_errors,
  init_fsOperations,
  init_slowOperations,
  isENOENT,
  jsonParse,
  jsonStringify,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/plugins/parseMarketplaceInput.ts
import { homedir } from "os";
import { resolve } from "path";
async function parseMarketplaceInput(input) {
  const trimmed = input.trim();
  const fs = getFsImplementation();
  const sshMatch = trimmed.match(
    /^([a-zA-Z0-9._-]+@[^:]+:.+?(?:\.git)?)(#(.+))?$/
  );
  if (sshMatch?.[1]) {
    const url = sshMatch[1];
    const ref = sshMatch[3];
    return ref ? { source: "git", url, ref } : { source: "git", url };
  }
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    const fragmentMatch = trimmed.match(/^([^#]+)(#(.+))?$/);
    const urlWithoutFragment = fragmentMatch?.[1] || trimmed;
    const ref = fragmentMatch?.[3];
    if (urlWithoutFragment.endsWith(".git") || urlWithoutFragment.includes("/_git/")) {
      return ref ? { source: "git", url: urlWithoutFragment, ref } : { source: "git", url: urlWithoutFragment };
    }
    let url;
    try {
      url = new URL(urlWithoutFragment);
    } catch (_err) {
      return { source: "url", url: urlWithoutFragment };
    }
    if (url.hostname === "github.com" || url.hostname === "www.github.com") {
      const match = url.pathname.match(/^\/([^/]+\/[^/]+?)(\/|\.git|$)/);
      if (match?.[1]) {
        const gitUrl = urlWithoutFragment.endsWith(".git") ? urlWithoutFragment : `${urlWithoutFragment}.git`;
        return ref ? { source: "git", url: gitUrl, ref } : { source: "git", url: gitUrl };
      }
    }
    return { source: "url", url: urlWithoutFragment };
  }
  const isWindows = process.platform === "win32";
  const isWindowsPath = isWindows && (trimmed.startsWith(".\\") || trimmed.startsWith("..\\") || /^[a-zA-Z]:[/\\]/.test(trimmed));
  if (trimmed.startsWith("./") || trimmed.startsWith("../") || trimmed.startsWith("/") || trimmed.startsWith("~") || isWindowsPath) {
    const resolvedPath = resolve(
      trimmed.startsWith("~") ? trimmed.replace(/^~/, homedir()) : trimmed
    );
    let stats;
    try {
      stats = await fs.stat(resolvedPath);
    } catch (e) {
      const code = getErrnoCode(e);
      return {
        error: code === "ENOENT" ? `Path does not exist: ${resolvedPath}` : `Cannot access path: ${resolvedPath} (${code ?? e})`
      };
    }
    if (stats.isFile()) {
      if (resolvedPath.endsWith(".json")) {
        return { source: "file", path: resolvedPath };
      } else {
        return {
          error: `File path must point to a .json file (marketplace.json), but got: ${resolvedPath}`
        };
      }
    } else if (stats.isDirectory()) {
      return { source: "directory", path: resolvedPath };
    } else {
      return {
        error: `Path is neither a file nor a directory: ${resolvedPath}`
      };
    }
  }
  if (trimmed.includes("/") && !trimmed.startsWith("@")) {
    if (trimmed.includes(":")) {
      return null;
    }
    const fragmentMatch = trimmed.match(/^([^#@]+)(?:[#@](.+))?$/);
    const repo = fragmentMatch?.[1] || trimmed;
    const ref = fragmentMatch?.[2];
    return ref ? { source: "github", repo, ref } : { source: "github", repo };
  }
  return null;
}
var init_parseMarketplaceInput = __esm({
  "src/utils/plugins/parseMarketplaceInput.ts"() {
    init_errors();
    init_fsOperations();
  }
});

// src/utils/plugins/installCounts.ts
import { randomBytes } from "crypto";
import { readFile, rename, unlink, writeFile } from "fs/promises";
import { join } from "path";
function getInstallCountsCachePath() {
  return join(getPluginsDirectory(), INSTALL_COUNTS_CACHE_FILENAME);
}
async function loadInstallCountsCache() {
  const cachePath = getInstallCountsCachePath();
  try {
    const content = await readFile(cachePath, { encoding: "utf-8" });
    const parsed = jsonParse(content);
    if (typeof parsed !== "object" || parsed === null || !("version" in parsed) || !("fetchedAt" in parsed) || !("counts" in parsed)) {
      logForDebugging("Install counts cache has invalid structure");
      return null;
    }
    const cache = parsed;
    if (cache.version !== INSTALL_COUNTS_CACHE_VERSION) {
      logForDebugging(
        `Install counts cache version mismatch (got ${cache.version}, expected ${INSTALL_COUNTS_CACHE_VERSION})`
      );
      return null;
    }
    if (typeof cache.fetchedAt !== "string" || !Array.isArray(cache.counts)) {
      logForDebugging("Install counts cache has invalid structure");
      return null;
    }
    const fetchedAt = new Date(cache.fetchedAt).getTime();
    if (Number.isNaN(fetchedAt)) {
      logForDebugging("Install counts cache has invalid fetchedAt timestamp");
      return null;
    }
    const validCounts = cache.counts.every(
      (entry) => typeof entry === "object" && entry !== null && typeof entry.plugin === "string" && typeof entry.unique_installs === "number"
    );
    if (!validCounts) {
      logForDebugging("Install counts cache has malformed entries");
      return null;
    }
    const now = Date.now();
    if (now - fetchedAt > CACHE_TTL_MS) {
      logForDebugging("Install counts cache is stale (>24h old)");
      return null;
    }
    return {
      version: cache.version,
      fetchedAt: cache.fetchedAt,
      counts: cache.counts
    };
  } catch (error) {
    const code = getErrnoCode(error);
    if (code !== "ENOENT") {
      logForDebugging(
        `Failed to load install counts cache: ${errorMessage(error)}`
      );
    }
    return null;
  }
}
async function saveInstallCountsCache(cache) {
  const cachePath = getInstallCountsCachePath();
  const tempPath = `${cachePath}.${randomBytes(8).toString("hex")}.tmp`;
  try {
    const pluginsDir = getPluginsDirectory();
    await getFsImplementation().mkdir(pluginsDir);
    const content = jsonStringify(cache, null, 2);
    await writeFile(tempPath, content, {
      encoding: "utf-8",
      mode: 384
    });
    await rename(tempPath, cachePath);
    logForDebugging("Install counts cache saved successfully");
  } catch (error) {
    logError(error);
    try {
      await unlink(tempPath);
    } catch {
    }
  }
}
async function fetchInstallCountsFromGitHub() {
  logForDebugging(`Fetching install counts from ${INSTALL_COUNTS_URL}`);
  const started = performance.now();
  try {
    const response = await axios_default.get(INSTALL_COUNTS_URL, {
      timeout: 1e4
    });
    if (!response.data?.plugins || !Array.isArray(response.data.plugins)) {
      throw new Error("Invalid response format from install counts API");
    }
    logPluginFetch(
      "install_counts",
      INSTALL_COUNTS_URL,
      "success",
      performance.now() - started
    );
    return response.data.plugins;
  } catch (error) {
    logPluginFetch(
      "install_counts",
      INSTALL_COUNTS_URL,
      "failure",
      performance.now() - started,
      classifyFetchError(error)
    );
    throw error;
  }
}
async function getInstallCounts() {
  const cache = await loadInstallCountsCache();
  if (cache) {
    logForDebugging("Using cached install counts");
    logPluginFetch("install_counts", INSTALL_COUNTS_URL, "cache_hit", 0);
    const map = /* @__PURE__ */ new Map();
    for (const entry of cache.counts) {
      map.set(entry.plugin, entry.unique_installs);
    }
    return map;
  }
  try {
    const counts = await fetchInstallCountsFromGitHub();
    const newCache = {
      version: INSTALL_COUNTS_CACHE_VERSION,
      fetchedAt: (/* @__PURE__ */ new Date()).toISOString(),
      counts
    };
    await saveInstallCountsCache(newCache);
    const map = /* @__PURE__ */ new Map();
    for (const entry of counts) {
      map.set(entry.plugin, entry.unique_installs);
    }
    return map;
  } catch (error) {
    logError(error);
    logForDebugging(`Failed to fetch install counts: ${errorMessage(error)}`);
    return null;
  }
}
function formatInstallCount(count) {
  if (count < 1e3) {
    return String(count);
  }
  if (count < 1e6) {
    const k = count / 1e3;
    const formatted2 = k.toFixed(1);
    return formatted2.endsWith(".0") ? `${formatted2.slice(0, -2)}K` : `${formatted2}K`;
  }
  const m = count / 1e6;
  const formatted = m.toFixed(1);
  return formatted.endsWith(".0") ? `${formatted.slice(0, -2)}M` : `${formatted}M`;
}
var INSTALL_COUNTS_CACHE_VERSION, INSTALL_COUNTS_CACHE_FILENAME, INSTALL_COUNTS_URL, CACHE_TTL_MS;
var init_installCounts = __esm({
  "src/utils/plugins/installCounts.ts"() {
    init_axios();
    init_debug();
    init_errors();
    init_fsOperations();
    init_log();
    init_slowOperations();
    init_fetchTelemetry();
    init_pluginDirectories();
    INSTALL_COUNTS_CACHE_VERSION = 1;
    INSTALL_COUNTS_CACHE_FILENAME = "install-counts-cache.json";
    INSTALL_COUNTS_URL = "https://raw.githubusercontent.com/anthropics/claude-plugins-official/refs/heads/stats/stats/plugin-installs.json";
    CACHE_TTL_MS = 24 * 60 * 60 * 1e3;
  }
});

// src/utils/plugins/validatePlugin.ts
import { readdir, readFile as readFile2, stat } from "fs/promises";
import * as path from "path";
function detectManifestType(filePath) {
  const fileName = path.basename(filePath);
  const dirName = path.basename(path.dirname(filePath));
  if (fileName === "plugin.json") return "plugin";
  if (fileName === "marketplace.json") return "marketplace";
  if (dirName === ".claude-plugin") {
    return "plugin";
  }
  return "unknown";
}
function formatZodErrors(zodError) {
  return zodError.issues.map((error) => ({
    path: error.path.join(".") || "root",
    message: error.message,
    code: error.code
  }));
}
function checkPathTraversal(p, field, errors, hint) {
  if (p.includes("..")) {
    errors.push({
      path: field,
      message: hint ? `Path contains "..": ${p}. ${hint}` : `Path contains ".." which could be a path traversal attempt: ${p}`
    });
  }
}
function marketplaceSourceHint(p) {
  const stripped = p.replace(/^(\.\.\/)+/, "");
  const corrected = stripped !== p ? `./${stripped}` : "./plugins/my-plugin";
  return `Plugin source paths are resolved relative to the marketplace root (the directory containing .claude-plugin/), not relative to marketplace.json. Use "${corrected}" instead of "${p}".`;
}
async function validatePluginManifest(filePath) {
  const errors = [];
  const warnings = [];
  const absolutePath = path.resolve(filePath);
  let content;
  try {
    content = await readFile2(absolutePath, { encoding: "utf-8" });
  } catch (error) {
    const code = getErrnoCode(error);
    let message;
    if (code === "ENOENT") {
      message = `File not found: ${absolutePath}`;
    } else if (code === "EISDIR") {
      message = `Path is not a file: ${absolutePath}`;
    } else {
      message = `Failed to read file: ${errorMessage(error)}`;
    }
    return {
      success: false,
      errors: [{ path: "file", message, code }],
      warnings: [],
      filePath: absolutePath,
      fileType: "plugin"
    };
  }
  let parsed;
  try {
    parsed = jsonParse(content);
  } catch (error) {
    return {
      success: false,
      errors: [
        {
          path: "json",
          message: `Invalid JSON syntax: ${errorMessage(error)}`
        }
      ],
      warnings: [],
      filePath: absolutePath,
      fileType: "plugin"
    };
  }
  if (parsed && typeof parsed === "object") {
    const obj = parsed;
    if (obj.commands) {
      const commands = Array.isArray(obj.commands) ? obj.commands : [obj.commands];
      commands.forEach((cmd, i) => {
        if (typeof cmd === "string") {
          checkPathTraversal(cmd, `commands[${i}]`, errors);
        }
      });
    }
    if (obj.agents) {
      const agents = Array.isArray(obj.agents) ? obj.agents : [obj.agents];
      agents.forEach((agent, i) => {
        if (typeof agent === "string") {
          checkPathTraversal(agent, `agents[${i}]`, errors);
        }
      });
    }
    if (obj.skills) {
      const skills = Array.isArray(obj.skills) ? obj.skills : [obj.skills];
      skills.forEach((skill, i) => {
        if (typeof skill === "string") {
          checkPathTraversal(skill, `skills[${i}]`, errors);
        }
      });
    }
  }
  let toValidate = parsed;
  if (typeof parsed === "object" && parsed !== null) {
    const obj = parsed;
    const strayKeys = Object.keys(obj).filter(
      (k) => MARKETPLACE_ONLY_MANIFEST_FIELDS.has(k)
    );
    if (strayKeys.length > 0) {
      const stripped = { ...obj };
      for (const key of strayKeys) {
        delete stripped[key];
        warnings.push({
          path: key,
          message: `Field '${key}' belongs in the marketplace entry (marketplace.json), not plugin.json. It's harmless here but unused \u2014 Claude Code ignores it at load time.`
        });
      }
      toValidate = stripped;
    }
  }
  const result = PluginManifestSchema().strict().safeParse(toValidate);
  if (!result.success) {
    errors.push(...formatZodErrors(result.error));
  }
  if (result.success) {
    const manifest = result.data;
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(manifest.name)) {
      warnings.push({
        path: "name",
        message: `Plugin name "${manifest.name}" is not kebab-case. Claude Code accepts it, but the Claude.ai marketplace sync requires kebab-case (lowercase letters, digits, and hyphens only, e.g., "my-plugin").`
      });
    }
    if (!manifest.version) {
      warnings.push({
        path: "version",
        message: 'No version specified. Consider adding a version following semver (e.g., "1.0.0")'
      });
    }
    if (!manifest.description) {
      warnings.push({
        path: "description",
        message: "No description provided. Adding a description helps users understand what your plugin does"
      });
    }
    if (!manifest.author) {
      warnings.push({
        path: "author",
        message: "No author information provided. Consider adding author details for plugin attribution"
      });
    }
  }
  return {
    success: errors.length === 0,
    errors,
    warnings,
    filePath: absolutePath,
    fileType: "plugin"
  };
}
async function validateMarketplaceManifest(filePath) {
  const errors = [];
  const warnings = [];
  const absolutePath = path.resolve(filePath);
  let content;
  try {
    content = await readFile2(absolutePath, { encoding: "utf-8" });
  } catch (error) {
    const code = getErrnoCode(error);
    let message;
    if (code === "ENOENT") {
      message = `File not found: ${absolutePath}`;
    } else if (code === "EISDIR") {
      message = `Path is not a file: ${absolutePath}`;
    } else {
      message = `Failed to read file: ${errorMessage(error)}`;
    }
    return {
      success: false,
      errors: [{ path: "file", message, code }],
      warnings: [],
      filePath: absolutePath,
      fileType: "marketplace"
    };
  }
  let parsed;
  try {
    parsed = jsonParse(content);
  } catch (error) {
    return {
      success: false,
      errors: [
        {
          path: "json",
          message: `Invalid JSON syntax: ${errorMessage(error)}`
        }
      ],
      warnings: [],
      filePath: absolutePath,
      fileType: "marketplace"
    };
  }
  if (parsed && typeof parsed === "object") {
    const obj = parsed;
    if (Array.isArray(obj.plugins)) {
      obj.plugins.forEach((plugin, i) => {
        if (plugin && typeof plugin === "object" && "source" in plugin) {
          const source = plugin.source;
          if (typeof source === "string") {
            checkPathTraversal(
              source,
              `plugins[${i}].source`,
              errors,
              marketplaceSourceHint(source)
            );
          }
          if (source && typeof source === "object" && "path" in source && typeof source.path === "string") {
            checkPathTraversal(
              source.path,
              `plugins[${i}].source.path`,
              errors
            );
          }
        }
      });
    }
  }
  const strictMarketplaceSchema = PluginMarketplaceSchema().extend({
    plugins: external_exports.array(PluginMarketplaceEntrySchema().strict())
  }).strict();
  const result = strictMarketplaceSchema.safeParse(parsed);
  if (!result.success) {
    errors.push(...formatZodErrors(result.error));
  }
  if (result.success) {
    const marketplace = result.data;
    if (!marketplace.plugins || marketplace.plugins.length === 0) {
      warnings.push({
        path: "plugins",
        message: "Marketplace has no plugins defined"
      });
    }
    if (marketplace.plugins) {
      marketplace.plugins.forEach((plugin, i) => {
        const duplicates = marketplace.plugins.filter(
          (p) => p.name === plugin.name
        );
        if (duplicates.length > 1) {
          errors.push({
            path: `plugins[${i}].name`,
            message: `Duplicate plugin name "${plugin.name}" found in marketplace`
          });
        }
      });
      const manifestDir = path.dirname(absolutePath);
      const marketplaceRoot = path.basename(manifestDir) === ".claude-plugin" ? path.dirname(manifestDir) : manifestDir;
      for (const [i, entry] of marketplace.plugins.entries()) {
        if (!entry.version || typeof entry.source !== "string" || !entry.source.startsWith("./")) {
          continue;
        }
        const pluginJsonPath = path.join(
          marketplaceRoot,
          entry.source,
          ".claude-plugin",
          "plugin.json"
        );
        let manifestVersion;
        try {
          const raw = await readFile2(pluginJsonPath, { encoding: "utf-8" });
          const parsed2 = jsonParse(raw);
          if (typeof parsed2.version === "string") {
            manifestVersion = parsed2.version;
          }
        } catch {
          continue;
        }
        if (manifestVersion && manifestVersion !== entry.version) {
          warnings.push({
            path: `plugins[${i}].version`,
            message: `Entry declares version "${entry.version}" but ${entry.source}/.claude-plugin/plugin.json says "${manifestVersion}". At install time, plugin.json wins (calculatePluginVersion precedence) \u2014 the entry version is silently ignored. Update this entry to "${manifestVersion}" to match.`
          });
        }
      }
    }
    if (!marketplace.metadata?.description) {
      warnings.push({
        path: "metadata.description",
        message: "No marketplace description provided. Adding a description helps users understand what this marketplace offers"
      });
    }
  }
  return {
    success: errors.length === 0,
    errors,
    warnings,
    filePath: absolutePath,
    fileType: "marketplace"
  };
}
function validateComponentFile(filePath, content, fileType) {
  const errors = [];
  const warnings = [];
  const match = content.match(FRONTMATTER_REGEX);
  if (!match) {
    warnings.push({
      path: "frontmatter",
      message: "No frontmatter block found. Add YAML frontmatter between --- delimiters at the top of the file to set description and other metadata."
    });
    return { success: true, errors, warnings, filePath, fileType };
  }
  const frontmatterText = match[1] || "";
  let parsed;
  try {
    parsed = parseYaml(frontmatterText);
  } catch (e) {
    errors.push({
      path: "frontmatter",
      message: `YAML frontmatter failed to parse: ${errorMessage(e)}. At runtime this ${fileType} loads with empty metadata (all frontmatter fields silently dropped).`
    });
    return { success: false, errors, warnings, filePath, fileType };
  }
  if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) {
    errors.push({
      path: "frontmatter",
      message: `Frontmatter must be a YAML mapping (key: value pairs), got ${Array.isArray(parsed) ? "an array" : parsed === null ? "null" : typeof parsed}.`
    });
    return { success: false, errors, warnings, filePath, fileType };
  }
  const fm = parsed;
  if (fm.description !== void 0) {
    const d = fm.description;
    if (typeof d !== "string" && typeof d !== "number" && typeof d !== "boolean" && d !== null) {
      errors.push({
        path: "description",
        message: `description must be a string, got ${Array.isArray(d) ? "array" : typeof d}. At runtime this value is dropped.`
      });
    }
  } else {
    warnings.push({
      path: "description",
      message: `No description in frontmatter. A description helps users and Claude understand when to use this ${fileType}.`
    });
  }
  if (fm.name !== void 0 && fm.name !== null && typeof fm.name !== "string") {
    errors.push({
      path: "name",
      message: `name must be a string, got ${typeof fm.name}.`
    });
  }
  const at = fm["allowed-tools"];
  if (at !== void 0 && at !== null) {
    if (typeof at !== "string" && !Array.isArray(at)) {
      errors.push({
        path: "allowed-tools",
        message: `allowed-tools must be a string or array of strings, got ${typeof at}.`
      });
    } else if (Array.isArray(at) && at.some((t) => typeof t !== "string")) {
      errors.push({
        path: "allowed-tools",
        message: "allowed-tools array must contain only strings."
      });
    }
  }
  const sh = fm.shell;
  if (sh !== void 0 && sh !== null) {
    if (typeof sh !== "string") {
      errors.push({
        path: "shell",
        message: `shell must be a string, got ${typeof sh}.`
      });
    } else {
      const normalized = sh.trim().toLowerCase();
      if (normalized !== "bash" && normalized !== "powershell") {
        errors.push({
          path: "shell",
          message: `shell must be 'bash' or 'powershell', got '${sh}'.`
        });
      }
    }
  }
  return { success: errors.length === 0, errors, warnings, filePath, fileType };
}
async function validateHooksJson(filePath) {
  let content;
  try {
    content = await readFile2(filePath, { encoding: "utf-8" });
  } catch (e) {
    const code = getErrnoCode(e);
    if (code === "ENOENT") {
      return {
        success: true,
        errors: [],
        warnings: [],
        filePath,
        fileType: "hooks"
      };
    }
    return {
      success: false,
      errors: [
        { path: "file", message: `Failed to read file: ${errorMessage(e)}` }
      ],
      warnings: [],
      filePath,
      fileType: "hooks"
    };
  }
  let parsed;
  try {
    parsed = jsonParse(content);
  } catch (e) {
    return {
      success: false,
      errors: [
        {
          path: "json",
          message: `Invalid JSON syntax: ${errorMessage(e)}. At runtime this breaks the entire plugin load.`
        }
      ],
      warnings: [],
      filePath,
      fileType: "hooks"
    };
  }
  const result = PluginHooksSchema().safeParse(parsed);
  if (!result.success) {
    return {
      success: false,
      errors: formatZodErrors(result.error),
      warnings: [],
      filePath,
      fileType: "hooks"
    };
  }
  return {
    success: true,
    errors: [],
    warnings: [],
    filePath,
    fileType: "hooks"
  };
}
async function collectMarkdown(dir, isSkillsDir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch (e) {
    const code = getErrnoCode(e);
    if (code === "ENOENT" || code === "ENOTDIR") return [];
    throw e;
  }
  if (isSkillsDir) {
    return entries.filter((e) => e.isDirectory()).map((e) => path.join(dir, e.name, "SKILL.md"));
  }
  const out = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...await collectMarkdown(full, false));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
      out.push(full);
    }
  }
  return out;
}
async function validatePluginContents(pluginDir) {
  const results = [];
  const dirs = [
    ["skill", path.join(pluginDir, "skills")],
    ["agent", path.join(pluginDir, "agents")],
    ["command", path.join(pluginDir, "commands")]
  ];
  for (const [fileType, dir] of dirs) {
    const files = await collectMarkdown(dir, fileType === "skill");
    for (const filePath of files) {
      let content;
      try {
        content = await readFile2(filePath, { encoding: "utf-8" });
      } catch (e) {
        if (isENOENT(e)) continue;
        results.push({
          success: false,
          errors: [
            { path: "file", message: `Failed to read: ${errorMessage(e)}` }
          ],
          warnings: [],
          filePath,
          fileType
        });
        continue;
      }
      const r = validateComponentFile(filePath, content, fileType);
      if (r.errors.length > 0 || r.warnings.length > 0) {
        results.push(r);
      }
    }
  }
  const hooksResult = await validateHooksJson(
    path.join(pluginDir, "hooks", "hooks.json")
  );
  if (hooksResult.errors.length > 0 || hooksResult.warnings.length > 0) {
    results.push(hooksResult);
  }
  return results;
}
async function validateManifest(filePath) {
  const absolutePath = path.resolve(filePath);
  let stats = null;
  try {
    stats = await stat(absolutePath);
  } catch (e) {
    if (!isENOENT(e)) {
      throw e;
    }
  }
  if (stats?.isDirectory()) {
    const marketplacePath = path.join(
      absolutePath,
      ".claude-plugin",
      "marketplace.json"
    );
    const marketplaceResult = await validateMarketplaceManifest(marketplacePath);
    if (marketplaceResult.errors[0]?.code !== "ENOENT") {
      return marketplaceResult;
    }
    const pluginPath = path.join(absolutePath, ".claude-plugin", "plugin.json");
    const pluginResult = await validatePluginManifest(pluginPath);
    if (pluginResult.errors[0]?.code !== "ENOENT") {
      return pluginResult;
    }
    return {
      success: false,
      errors: [
        {
          path: "directory",
          message: `No manifest found in directory. Expected .claude-plugin/marketplace.json or .claude-plugin/plugin.json`
        }
      ],
      warnings: [],
      filePath: absolutePath,
      fileType: "plugin"
    };
  }
  const manifestType = detectManifestType(filePath);
  switch (manifestType) {
    case "plugin":
      return validatePluginManifest(filePath);
    case "marketplace":
      return validateMarketplaceManifest(filePath);
    case "unknown": {
      try {
        const content = await readFile2(absolutePath, { encoding: "utf-8" });
        const parsed = jsonParse(content);
        if (Array.isArray(parsed.plugins)) {
          return validateMarketplaceManifest(filePath);
        }
      } catch (e) {
        const code = getErrnoCode(e);
        if (code === "ENOENT") {
          return {
            success: false,
            errors: [
              {
                path: "file",
                message: `File not found: ${absolutePath}`
              }
            ],
            warnings: [],
            filePath: absolutePath,
            fileType: "plugin"
            // Default to plugin for error reporting
          };
        }
      }
      return validatePluginManifest(filePath);
    }
  }
}
var MARKETPLACE_ONLY_MANIFEST_FIELDS;
var init_validatePlugin = __esm({
  "src/utils/plugins/validatePlugin.ts"() {
    init_v4();
    init_errors();
    init_frontmatterParser();
    init_slowOperations();
    init_yaml();
    init_schemas();
    MARKETPLACE_ONLY_MANIFEST_FIELDS = /* @__PURE__ */ new Set([
      "category",
      "source",
      "tags",
      "strict",
      "id"
    ]);
  }
});

export {
  parseMarketplaceInput,
  init_parseMarketplaceInput,
  getInstallCounts,
  formatInstallCount,
  init_installCounts,
  validatePluginContents,
  validateManifest,
  init_validatePlugin
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL3BsdWdpbnMvcGFyc2VNYXJrZXRwbGFjZUlucHV0LnRzIiwgIi4uLy4uL3NyYy91dGlscy9wbHVnaW5zL2luc3RhbGxDb3VudHMudHMiLCAiLi4vLi4vc3JjL3V0aWxzL3BsdWdpbnMvdmFsaWRhdGVQbHVnaW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGhvbWVkaXIgfSBmcm9tICdvcydcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgZ2V0RXJybm9Db2RlIH0gZnJvbSAnLi4vZXJyb3JzLmpzJ1xuaW1wb3J0IHsgZ2V0RnNJbXBsZW1lbnRhdGlvbiB9IGZyb20gJy4uL2ZzT3BlcmF0aW9ucy5qcydcbmltcG9ydCB0eXBlIHsgTWFya2V0cGxhY2VTb3VyY2UgfSBmcm9tICcuL3NjaGVtYXMuanMnXG5cbi8qKlxuICogUGFyc2VzIGEgbWFya2V0cGxhY2UgaW5wdXQgc3RyaW5nIGFuZCByZXR1cm5zIHRoZSBhcHByb3ByaWF0ZSBtYXJrZXRwbGFjZSBzb3VyY2UgdHlwZS5cbiAqIEhhbmRsZXMgdmFyaW91cyBpbnB1dCBmb3JtYXRzOlxuICogLSBHaXQgU1NIIFVSTHMgKHVzZXJAaG9zdDpwYXRoIG9yIHVzZXJAaG9zdDpwYXRoLmdpdClcbiAqICAgLSBTdGFuZGFyZDogZ2l0QGdpdGh1Yi5jb206b3duZXIvcmVwby5naXRcbiAqICAgLSBHaXRIdWIgRW50ZXJwcmlzZSBTU0ggY2VydGlmaWNhdGVzOiBvcmctMTIzNDU2QGdpdGh1Yi5jb206b3duZXIvcmVwby5naXRcbiAqICAgLSBDdXN0b20gdXNlcm5hbWVzOiBkZXBsb3lAZ2l0bGFiLmNvbTpncm91cC9wcm9qZWN0LmdpdFxuICogICAtIFNlbGYtaG9zdGVkOiB1c2VyQDE5Mi4xNjguMTAuMTIzOnBhdGgvdG8vcmVwb1xuICogLSBIVFRQL0hUVFBTIFVSTHNcbiAqIC0gR2l0SHViIHNob3J0aGFuZCAob3duZXIvcmVwbylcbiAqIC0gTG9jYWwgZmlsZSBwYXRocyAoLmpzb24gZmlsZXMpXG4gKiAtIExvY2FsIGRpcmVjdG9yeSBwYXRoc1xuICpcbiAqIEBwYXJhbSBpbnB1dCBUaGUgbWFya2V0cGxhY2Ugc291cmNlIGlucHV0IHN0cmluZ1xuICogQHJldHVybnMgTWFya2V0cGxhY2VTb3VyY2Ugb2JqZWN0LCBlcnJvciBvYmplY3QsIG9yIG51bGwgaWYgZm9ybWF0IGlzIHVucmVjb2duaXplZFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGFyc2VNYXJrZXRwbGFjZUlucHV0KFxuICBpbnB1dDogc3RyaW5nLFxuKTogUHJvbWlzZTxNYXJrZXRwbGFjZVNvdXJjZSB8IHsgZXJyb3I6IHN0cmluZyB9IHwgbnVsbD4ge1xuICBjb25zdCB0cmltbWVkID0gaW5wdXQudHJpbSgpXG4gIGNvbnN0IGZzID0gZ2V0RnNJbXBsZW1lbnRhdGlvbigpXG5cbiAgLy8gSGFuZGxlIGdpdCBTU0ggVVJMcyB3aXRoIGFueSB2YWxpZCB1c2VybmFtZSAobm90IGp1c3QgJ2dpdCcpXG4gIC8vIFN1cHBvcnRzOiB1c2VyQGhvc3Q6cGF0aCwgdXNlckBob3N0OnBhdGguZ2l0LCBhbmQgd2l0aCAjcmVmIHN1ZmZpeFxuICAvLyBVc2VybmFtZSBjYW4gY29udGFpbjogYWxwaGFudW1lcmljLCBkb3RzLCB1bmRlcnNjb3JlcywgaHlwaGVuc1xuICBjb25zdCBzc2hNYXRjaCA9IHRyaW1tZWQubWF0Y2goXG4gICAgL14oW2EtekEtWjAtOS5fLV0rQFteOl0rOi4rPyg/OlxcLmdpdCk/KSgjKC4rKSk/JC8sXG4gIClcbiAgaWYgKHNzaE1hdGNoPy5bMV0pIHtcbiAgICBjb25zdCB1cmwgPSBzc2hNYXRjaFsxXVxuICAgIGNvbnN0IHJlZiA9IHNzaE1hdGNoWzNdXG4gICAgcmV0dXJuIHJlZiA/IHsgc291cmNlOiAnZ2l0JywgdXJsLCByZWYgfSA6IHsgc291cmNlOiAnZ2l0JywgdXJsIH1cbiAgfVxuXG4gIC8vIEhhbmRsZSBVUkxzXG4gIGlmICh0cmltbWVkLnN0YXJ0c1dpdGgoJ2h0dHA6Ly8nKSB8fCB0cmltbWVkLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vJykpIHtcbiAgICAvLyBFeHRyYWN0IGZyYWdtZW50IChyZWYpIGZyb20gVVJMIGlmIHByZXNlbnRcbiAgICBjb25zdCBmcmFnbWVudE1hdGNoID0gdHJpbW1lZC5tYXRjaCgvXihbXiNdKykoIyguKykpPyQvKVxuICAgIGNvbnN0IHVybFdpdGhvdXRGcmFnbWVudCA9IGZyYWdtZW50TWF0Y2g/LlsxXSB8fCB0cmltbWVkXG4gICAgY29uc3QgcmVmID0gZnJhZ21lbnRNYXRjaD8uWzNdXG5cbiAgICAvLyBXaGVuIHVzZXIgZXhwbGljaXRseSBwcm92aWRlcyBhbiBIVFRQUy9IVFRQIFVSTCB0aGF0IGxvb2tzIGxpa2UgYSBnaXRcbiAgICAvLyByZXBvLCB1c2UgdGhlIGdpdCBzb3VyY2UgdHlwZSBzbyB3ZSBjbG9uZSByYXRoZXIgdGhhbiBmZXRjaC1hcy1KU09OLlxuICAgIC8vIFRoZSAuZ2l0IHN1ZmZpeCBpcyBhIEdpdEh1Yi9HaXRMYWIvQml0YnVja2V0IGNvbnZlbnRpb24uIEF6dXJlIERldk9wc1xuICAgIC8vIHVzZXMgL19naXQvIGluIHRoZSBwYXRoIHdpdGggTk8gc3VmZml4IChhcHBlbmRpbmcgLmdpdCBicmVha3MgQURPOlxuICAgIC8vIFRGNDAxMDE5IFwicmVwbyBkb2VzIG5vdCBleGlzdFwiKS4gV2l0aG91dCB0aGlzIGNoZWNrLCBhbiBBRE8gVVJMIGZhbGxzXG4gICAgLy8gdGhyb3VnaCB0byBzb3VyY2U6J3VybCcgYmVsb3csIHdoaWNoIHRyaWVzIHRvIGZldGNoIGl0IGFzIGEgcmF3XG4gICAgLy8gbWFya2V0cGxhY2UuanNvbiBcdTIwMTQgdGhlIEhUTUwgcmVzcG9uc2UgcGFyc2VzIGFzIFwiZXhwZWN0ZWQgb2JqZWN0LFxuICAgIC8vIHJlY2VpdmVkIHN0cmluZ1wiLiAoZ2gtMzEyNTYgLyBDQy0yOTkpXG4gICAgaWYgKFxuICAgICAgdXJsV2l0aG91dEZyYWdtZW50LmVuZHNXaXRoKCcuZ2l0JykgfHxcbiAgICAgIHVybFdpdGhvdXRGcmFnbWVudC5pbmNsdWRlcygnL19naXQvJylcbiAgICApIHtcbiAgICAgIHJldHVybiByZWZcbiAgICAgICAgPyB7IHNvdXJjZTogJ2dpdCcsIHVybDogdXJsV2l0aG91dEZyYWdtZW50LCByZWYgfVxuICAgICAgICA6IHsgc291cmNlOiAnZ2l0JywgdXJsOiB1cmxXaXRob3V0RnJhZ21lbnQgfVxuICAgIH1cbiAgICAvLyBQYXJzZSBVUkwgdG8gY2hlY2sgaG9zdG5hbWVcbiAgICBsZXQgdXJsOiBVUkxcbiAgICB0cnkge1xuICAgICAgdXJsID0gbmV3IFVSTCh1cmxXaXRob3V0RnJhZ21lbnQpXG4gICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgLy8gTm90IGEgdmFsaWQgVVJMIGZvciBwYXJzaW5nLCB0cmVhdCBhcyBnZW5lcmljIFVSTFxuICAgICAgLy8gbmV3IFVSTCgpIHRocm93cyBUeXBlRXJyb3IgZm9yIGludmFsaWQgVVJMc1xuICAgICAgcmV0dXJuIHsgc291cmNlOiAndXJsJywgdXJsOiB1cmxXaXRob3V0RnJhZ21lbnQgfVxuICAgIH1cblxuICAgIGlmICh1cmwuaG9zdG5hbWUgPT09ICdnaXRodWIuY29tJyB8fCB1cmwuaG9zdG5hbWUgPT09ICd3d3cuZ2l0aHViLmNvbScpIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gdXJsLnBhdGhuYW1lLm1hdGNoKC9eXFwvKFteL10rXFwvW14vXSs/KShcXC98XFwuZ2l0fCQpLylcbiAgICAgIGlmIChtYXRjaD8uWzFdKSB7XG4gICAgICAgIC8vIFVzZXIgZXhwbGljaXRseSBwcm92aWRlZCBIVFRQUyBVUkwgLSBrZWVwIGl0IGFzIEhUVFBTIHZpYSAnZ2l0JyB0eXBlXG4gICAgICAgIC8vIEFkZCAuZ2l0IHN1ZmZpeCBpZiBub3QgcHJlc2VudCBmb3IgcHJvcGVyIGdpdCBjbG9uZVxuICAgICAgICBjb25zdCBnaXRVcmwgPSB1cmxXaXRob3V0RnJhZ21lbnQuZW5kc1dpdGgoJy5naXQnKVxuICAgICAgICAgID8gdXJsV2l0aG91dEZyYWdtZW50XG4gICAgICAgICAgOiBgJHt1cmxXaXRob3V0RnJhZ21lbnR9LmdpdGBcbiAgICAgICAgcmV0dXJuIHJlZlxuICAgICAgICAgID8geyBzb3VyY2U6ICdnaXQnLCB1cmw6IGdpdFVybCwgcmVmIH1cbiAgICAgICAgICA6IHsgc291cmNlOiAnZ2l0JywgdXJsOiBnaXRVcmwgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBzb3VyY2U6ICd1cmwnLCB1cmw6IHVybFdpdGhvdXRGcmFnbWVudCB9XG4gIH1cblxuICAvLyBIYW5kbGUgbG9jYWwgcGF0aHNcbiAgLy8gT24gV2luZG93cywgYWxzbyByZWNvZ25pemUgYmFja3NsYXNoLXJlbGF0aXZlICguXFwsIC4uXFwpIGFuZCBkcml2ZSBsZXR0ZXIgcGF0aHMgKEM6XFwpXG4gIC8vIFRoZXNlIGFyZSBXaW5kb3dzLW9ubHkgYmVjYXVzZSBiYWNrc2xhc2hlcyBhcmUgdmFsaWQgZmlsZW5hbWUgY2hhcnMgb24gVW5peFxuICBjb25zdCBpc1dpbmRvd3MgPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInXG4gIGNvbnN0IGlzV2luZG93c1BhdGggPVxuICAgIGlzV2luZG93cyAmJlxuICAgICh0cmltbWVkLnN0YXJ0c1dpdGgoJy5cXFxcJykgfHxcbiAgICAgIHRyaW1tZWQuc3RhcnRzV2l0aCgnLi5cXFxcJykgfHxcbiAgICAgIC9eW2EtekEtWl06Wy9cXFxcXS8udGVzdCh0cmltbWVkKSlcbiAgaWYgKFxuICAgIHRyaW1tZWQuc3RhcnRzV2l0aCgnLi8nKSB8fFxuICAgIHRyaW1tZWQuc3RhcnRzV2l0aCgnLi4vJykgfHxcbiAgICB0cmltbWVkLnN0YXJ0c1dpdGgoJy8nKSB8fFxuICAgIHRyaW1tZWQuc3RhcnRzV2l0aCgnficpIHx8XG4gICAgaXNXaW5kb3dzUGF0aFxuICApIHtcbiAgICBjb25zdCByZXNvbHZlZFBhdGggPSByZXNvbHZlKFxuICAgICAgdHJpbW1lZC5zdGFydHNXaXRoKCd+JykgPyB0cmltbWVkLnJlcGxhY2UoL15+LywgaG9tZWRpcigpKSA6IHRyaW1tZWQsXG4gICAgKVxuXG4gICAgLy8gU3RhdCB0aGUgcGF0aCB0byBkZXRlcm1pbmUgaWYgaXQncyBhIGZpbGUgb3IgZGlyZWN0b3J5LiBTd2FsbG93IGFsbCBzdGF0XG4gICAgLy8gZXJyb3JzIChFTk9FTlQsIEVBQ0NFUywgRVBFUk0sIGV0Yy4pIGFuZCByZXR1cm4gYW4gZXJyb3IgcmVzdWx0IGluc3RlYWRcbiAgICAvLyBvZiB0aHJvd2luZyBcdTIwMTQgbWF0Y2hlcyB0aGUgb2xkIGV4aXN0c1N5bmMgYmVoYXZpb3Igd2hpY2ggbmV2ZXIgdGhyZXcuXG4gICAgbGV0IHN0YXRzXG4gICAgdHJ5IHtcbiAgICAgIHN0YXRzID0gYXdhaXQgZnMuc3RhdChyZXNvbHZlZFBhdGgpXG4gICAgfSBjYXRjaCAoZTogdW5rbm93bikge1xuICAgICAgY29uc3QgY29kZSA9IGdldEVycm5vQ29kZShlKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZXJyb3I6XG4gICAgICAgICAgY29kZSA9PT0gJ0VOT0VOVCdcbiAgICAgICAgICAgID8gYFBhdGggZG9lcyBub3QgZXhpc3Q6ICR7cmVzb2x2ZWRQYXRofWBcbiAgICAgICAgICAgIDogYENhbm5vdCBhY2Nlc3MgcGF0aDogJHtyZXNvbHZlZFBhdGh9ICgke2NvZGUgPz8gZX0pYCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdHMuaXNGaWxlKCkpIHtcbiAgICAgIGlmIChyZXNvbHZlZFBhdGguZW5kc1dpdGgoJy5qc29uJykpIHtcbiAgICAgICAgcmV0dXJuIHsgc291cmNlOiAnZmlsZScsIHBhdGg6IHJlc29sdmVkUGF0aCB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVycm9yOiBgRmlsZSBwYXRoIG11c3QgcG9pbnQgdG8gYSAuanNvbiBmaWxlIChtYXJrZXRwbGFjZS5qc29uKSwgYnV0IGdvdDogJHtyZXNvbHZlZFBhdGh9YCxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc3RhdHMuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgcmV0dXJuIHsgc291cmNlOiAnZGlyZWN0b3J5JywgcGF0aDogcmVzb2x2ZWRQYXRoIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZXJyb3I6IGBQYXRoIGlzIG5laXRoZXIgYSBmaWxlIG5vciBhIGRpcmVjdG9yeTogJHtyZXNvbHZlZFBhdGh9YCxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBIYW5kbGUgR2l0SHViIHNob3J0aGFuZCAob3duZXIvcmVwbywgb3duZXIvcmVwbyNyZWYsIG9yIG93bmVyL3JlcG9AcmVmKVxuICAvLyBBY2NlcHQgYm90aCAjIGFuZCBAIGFzIHJlZiBzZXBhcmF0b3JzIFx1MjAxNCB0aGUgZGlzcGxheSBmb3JtYXR0ZXIgdXNlcyBALCBzbyB1c2Vyc1xuICAvLyBuYXR1cmFsbHkgdHlwZSBAIHdoZW4gY29weWluZyBmcm9tIGVycm9yIG1lc3NhZ2VzIG9yIG1hbmFnZWQgc2V0dGluZ3MuXG4gIGlmICh0cmltbWVkLmluY2x1ZGVzKCcvJykgJiYgIXRyaW1tZWQuc3RhcnRzV2l0aCgnQCcpKSB7XG4gICAgaWYgKHRyaW1tZWQuaW5jbHVkZXMoJzonKSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgLy8gRXh0cmFjdCByZWYgaWYgcHJlc2VudCAoZWl0aGVyICNyZWYgb3IgQHJlZilcbiAgICBjb25zdCBmcmFnbWVudE1hdGNoID0gdHJpbW1lZC5tYXRjaCgvXihbXiNAXSspKD86WyNAXSguKykpPyQvKVxuICAgIGNvbnN0IHJlcG8gPSBmcmFnbWVudE1hdGNoPy5bMV0gfHwgdHJpbW1lZFxuICAgIGNvbnN0IHJlZiA9IGZyYWdtZW50TWF0Y2g/LlsyXVxuICAgIC8vIEFzc3VtZSBpdCdzIGEgR2l0SHViIHJlcG9cbiAgICByZXR1cm4gcmVmID8geyBzb3VyY2U6ICdnaXRodWInLCByZXBvLCByZWYgfSA6IHsgc291cmNlOiAnZ2l0aHViJywgcmVwbyB9XG4gIH1cblxuICAvLyBOUE0gcGFja2FnZXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAvLyBSZXR1cm5pbmcgbnVsbCBmb3IgdW5yZWNvZ25pemVkIGlucHV0XG5cbiAgcmV0dXJuIG51bGxcbn1cbiIsICIvKipcbiAqIFBsdWdpbiBpbnN0YWxsIGNvdW50cyBkYXRhIGxheWVyXG4gKlxuICogVGhpcyBtb2R1bGUgZmV0Y2hlcyBhbmQgY2FjaGVzIHBsdWdpbiBpbnN0YWxsIGNvdW50cyBmcm9tIHRoZSBvZmZpY2lhbFxuICogQ2xhdWRlIHBsdWdpbnMgc3RhdGlzdGljcyByZXBvc2l0b3J5LiBUaGUgY2FjaGUgaXMgcmVmcmVzaGVkIGlmIG9sZGVyXG4gKiB0aGFuIDI0IGhvdXJzLlxuICpcbiAqIENhY2hlIGxvY2F0aW9uOiB+Ly5jbGF1ZGUvcGx1Z2lucy9pbnN0YWxsLWNvdW50cy1jYWNoZS5qc29uXG4gKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgcmFuZG9tQnl0ZXMgfSBmcm9tICdjcnlwdG8nXG5pbXBvcnQgeyByZWFkRmlsZSwgcmVuYW1lLCB1bmxpbmssIHdyaXRlRmlsZSB9IGZyb20gJ2ZzL3Byb21pc2VzJ1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuLi9kZWJ1Zy5qcydcbmltcG9ydCB7IGVycm9yTWVzc2FnZSwgZ2V0RXJybm9Db2RlIH0gZnJvbSAnLi4vZXJyb3JzLmpzJ1xuaW1wb3J0IHsgZ2V0RnNJbXBsZW1lbnRhdGlvbiB9IGZyb20gJy4uL2ZzT3BlcmF0aW9ucy5qcydcbmltcG9ydCB7IGxvZ0Vycm9yIH0gZnJvbSAnLi4vbG9nLmpzJ1xuaW1wb3J0IHsganNvblBhcnNlLCBqc29uU3RyaW5naWZ5IH0gZnJvbSAnLi4vc2xvd09wZXJhdGlvbnMuanMnXG5pbXBvcnQgeyBjbGFzc2lmeUZldGNoRXJyb3IsIGxvZ1BsdWdpbkZldGNoIH0gZnJvbSAnLi9mZXRjaFRlbGVtZXRyeS5qcydcbmltcG9ydCB7IGdldFBsdWdpbnNEaXJlY3RvcnkgfSBmcm9tICcuL3BsdWdpbkRpcmVjdG9yaWVzLmpzJ1xuXG5jb25zdCBJTlNUQUxMX0NPVU5UU19DQUNIRV9WRVJTSU9OID0gMVxuY29uc3QgSU5TVEFMTF9DT1VOVFNfQ0FDSEVfRklMRU5BTUUgPSAnaW5zdGFsbC1jb3VudHMtY2FjaGUuanNvbidcbmNvbnN0IElOU1RBTExfQ09VTlRTX1VSTCA9XG4gICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYW50aHJvcGljcy9jbGF1ZGUtcGx1Z2lucy1vZmZpY2lhbC9yZWZzL2hlYWRzL3N0YXRzL3N0YXRzL3BsdWdpbi1pbnN0YWxscy5qc29uJ1xuY29uc3QgQ0FDSEVfVFRMX01TID0gMjQgKiA2MCAqIDYwICogMTAwMCAvLyAyNCBob3VycyBpbiBtaWxsaXNlY29uZHNcblxuLyoqXG4gKiBTdHJ1Y3R1cmUgb2YgdGhlIGluc3RhbGwgY291bnRzIGNhY2hlIGZpbGVcbiAqL1xudHlwZSBJbnN0YWxsQ291bnRzQ2FjaGUgPSB7XG4gIHZlcnNpb246IG51bWJlclxuICBmZXRjaGVkQXQ6IHN0cmluZyAvLyBJU08gdGltZXN0YW1wXG4gIGNvdW50czogQXJyYXk8e1xuICAgIHBsdWdpbjogc3RyaW5nIC8vIFwicGx1Z2luTmFtZUBtYXJrZXRwbGFjZVwiXG4gICAgdW5pcXVlX2luc3RhbGxzOiBudW1iZXJcbiAgfT5cbn1cblxuLyoqXG4gKiBFeHBlY3RlZCBzdHJ1Y3R1cmUgb2YgdGhlIEdpdEh1YiBzdGF0cyByZXNwb25zZVxuICovXG50eXBlIEdpdEh1YlN0YXRzUmVzcG9uc2UgPSB7XG4gIHBsdWdpbnM6IEFycmF5PHtcbiAgICBwbHVnaW46IHN0cmluZ1xuICAgIHVuaXF1ZV9pbnN0YWxsczogbnVtYmVyXG4gIH0+XG59XG5cbi8qKlxuICogR2V0IHRoZSBwYXRoIHRvIHRoZSBpbnN0YWxsIGNvdW50cyBjYWNoZSBmaWxlXG4gKi9cbmZ1bmN0aW9uIGdldEluc3RhbGxDb3VudHNDYWNoZVBhdGgoKTogc3RyaW5nIHtcbiAgcmV0dXJuIGpvaW4oZ2V0UGx1Z2luc0RpcmVjdG9yeSgpLCBJTlNUQUxMX0NPVU5UU19DQUNIRV9GSUxFTkFNRSlcbn1cblxuLyoqXG4gKiBMb2FkIHRoZSBpbnN0YWxsIGNvdW50cyBjYWNoZSBmcm9tIGRpc2suXG4gKiBSZXR1cm5zIG51bGwgaWYgdGhlIGZpbGUgZG9lc24ndCBleGlzdCwgaXMgaW52YWxpZCwgb3IgaXMgc3RhbGUgKD4yNGggb2xkKS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gbG9hZEluc3RhbGxDb3VudHNDYWNoZSgpOiBQcm9taXNlPEluc3RhbGxDb3VudHNDYWNoZSB8IG51bGw+IHtcbiAgY29uc3QgY2FjaGVQYXRoID0gZ2V0SW5zdGFsbENvdW50c0NhY2hlUGF0aCgpXG5cbiAgdHJ5IHtcbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGUoY2FjaGVQYXRoLCB7IGVuY29kaW5nOiAndXRmLTgnIH0pXG4gICAgY29uc3QgcGFyc2VkID0ganNvblBhcnNlKGNvbnRlbnQpIGFzIHVua25vd25cblxuICAgIC8vIFZhbGlkYXRlIGJhc2ljIHN0cnVjdHVyZVxuICAgIGlmIChcbiAgICAgIHR5cGVvZiBwYXJzZWQgIT09ICdvYmplY3QnIHx8XG4gICAgICBwYXJzZWQgPT09IG51bGwgfHxcbiAgICAgICEoJ3ZlcnNpb24nIGluIHBhcnNlZCkgfHxcbiAgICAgICEoJ2ZldGNoZWRBdCcgaW4gcGFyc2VkKSB8fFxuICAgICAgISgnY291bnRzJyBpbiBwYXJzZWQpXG4gICAgKSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoJ0luc3RhbGwgY291bnRzIGNhY2hlIGhhcyBpbnZhbGlkIHN0cnVjdHVyZScpXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0IGNhY2hlID0gcGFyc2VkIGFzIHtcbiAgICAgIHZlcnNpb246IHVua25vd25cbiAgICAgIGZldGNoZWRBdDogdW5rbm93blxuICAgICAgY291bnRzOiB1bmtub3duXG4gICAgfVxuXG4gICAgLy8gVmFsaWRhdGUgdmVyc2lvblxuICAgIGlmIChjYWNoZS52ZXJzaW9uICE9PSBJTlNUQUxMX0NPVU5UU19DQUNIRV9WRVJTSU9OKSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBJbnN0YWxsIGNvdW50cyBjYWNoZSB2ZXJzaW9uIG1pc21hdGNoIChnb3QgJHtjYWNoZS52ZXJzaW9ufSwgZXhwZWN0ZWQgJHtJTlNUQUxMX0NPVU5UU19DQUNIRV9WRVJTSU9OfSlgLFxuICAgICAgKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyBWYWxpZGF0ZSBmZXRjaGVkQXQgYW5kIGNvdW50c1xuICAgIGlmICh0eXBlb2YgY2FjaGUuZmV0Y2hlZEF0ICE9PSAnc3RyaW5nJyB8fCAhQXJyYXkuaXNBcnJheShjYWNoZS5jb3VudHMpKSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoJ0luc3RhbGwgY291bnRzIGNhY2hlIGhhcyBpbnZhbGlkIHN0cnVjdHVyZScpXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8vIFZhbGlkYXRlIGZldGNoZWRBdCBpcyBhIHZhbGlkIGRhdGVcbiAgICBjb25zdCBmZXRjaGVkQXQgPSBuZXcgRGF0ZShjYWNoZS5mZXRjaGVkQXQpLmdldFRpbWUoKVxuICAgIGlmIChOdW1iZXIuaXNOYU4oZmV0Y2hlZEF0KSkge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKCdJbnN0YWxsIGNvdW50cyBjYWNoZSBoYXMgaW52YWxpZCBmZXRjaGVkQXQgdGltZXN0YW1wJylcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgLy8gVmFsaWRhdGUgY291bnQgZW50cmllcyBoYXZlIHJlcXVpcmVkIGZpZWxkc1xuICAgIGNvbnN0IHZhbGlkQ291bnRzID0gY2FjaGUuY291bnRzLmV2ZXJ5KFxuICAgICAgKGVudHJ5KTogZW50cnkgaXMgeyBwbHVnaW46IHN0cmluZzsgdW5pcXVlX2luc3RhbGxzOiBudW1iZXIgfSA9PlxuICAgICAgICB0eXBlb2YgZW50cnkgPT09ICdvYmplY3QnICYmXG4gICAgICAgIGVudHJ5ICE9PSBudWxsICYmXG4gICAgICAgIHR5cGVvZiBlbnRyeS5wbHVnaW4gPT09ICdzdHJpbmcnICYmXG4gICAgICAgIHR5cGVvZiBlbnRyeS51bmlxdWVfaW5zdGFsbHMgPT09ICdudW1iZXInLFxuICAgIClcbiAgICBpZiAoIXZhbGlkQ291bnRzKSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoJ0luc3RhbGwgY291bnRzIGNhY2hlIGhhcyBtYWxmb3JtZWQgZW50cmllcycpXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIGNhY2hlIGlzIHN0YWxlICg+MjQgaG91cnMgb2xkKVxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICBpZiAobm93IC0gZmV0Y2hlZEF0ID4gQ0FDSEVfVFRMX01TKSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoJ0luc3RhbGwgY291bnRzIGNhY2hlIGlzIHN0YWxlICg+MjRoIG9sZCknKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdmFsaWRhdGVkIGNhY2hlXG4gICAgcmV0dXJuIHtcbiAgICAgIHZlcnNpb246IGNhY2hlLnZlcnNpb24gYXMgbnVtYmVyLFxuICAgICAgZmV0Y2hlZEF0OiBjYWNoZS5mZXRjaGVkQXQsXG4gICAgICBjb3VudHM6IGNhY2hlLmNvdW50cyxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc3QgY29kZSA9IGdldEVycm5vQ29kZShlcnJvcilcbiAgICBpZiAoY29kZSAhPT0gJ0VOT0VOVCcpIHtcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYEZhaWxlZCB0byBsb2FkIGluc3RhbGwgY291bnRzIGNhY2hlOiAke2Vycm9yTWVzc2FnZShlcnJvcil9YCxcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG4vKipcbiAqIFNhdmUgdGhlIGluc3RhbGwgY291bnRzIGNhY2hlIHRvIGRpc2sgYXRvbWljYWxseS5cbiAqIFVzZXMgYSB0ZW1wIGZpbGUgKyByZW5hbWUgcGF0dGVybiB0byBwcmV2ZW50IGNvcnJ1cHRpb24uXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNhdmVJbnN0YWxsQ291bnRzQ2FjaGUoXG4gIGNhY2hlOiBJbnN0YWxsQ291bnRzQ2FjaGUsXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgY2FjaGVQYXRoID0gZ2V0SW5zdGFsbENvdW50c0NhY2hlUGF0aCgpXG4gIGNvbnN0IHRlbXBQYXRoID0gYCR7Y2FjaGVQYXRofS4ke3JhbmRvbUJ5dGVzKDgpLnRvU3RyaW5nKCdoZXgnKX0udG1wYFxuXG4gIHRyeSB7XG4gICAgLy8gRW5zdXJlIHRoZSBwbHVnaW5zIGRpcmVjdG9yeSBleGlzdHNcbiAgICBjb25zdCBwbHVnaW5zRGlyID0gZ2V0UGx1Z2luc0RpcmVjdG9yeSgpXG4gICAgYXdhaXQgZ2V0RnNJbXBsZW1lbnRhdGlvbigpLm1rZGlyKHBsdWdpbnNEaXIpXG5cbiAgICAvLyBXcml0ZSB0byB0ZW1wIGZpbGVcbiAgICBjb25zdCBjb250ZW50ID0ganNvblN0cmluZ2lmeShjYWNoZSwgbnVsbCwgMilcbiAgICBhd2FpdCB3cml0ZUZpbGUodGVtcFBhdGgsIGNvbnRlbnQsIHtcbiAgICAgIGVuY29kaW5nOiAndXRmLTgnLFxuICAgICAgbW9kZTogMG82MDAsXG4gICAgfSlcblxuICAgIC8vIEF0b21pYyByZW5hbWVcbiAgICBhd2FpdCByZW5hbWUodGVtcFBhdGgsIGNhY2hlUGF0aClcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoJ0luc3RhbGwgY291bnRzIGNhY2hlIHNhdmVkIHN1Y2Nlc3NmdWxseScpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nRXJyb3IoZXJyb3IpXG4gICAgLy8gQ2xlYW4gdXAgdGVtcCBmaWxlIGlmIGl0IGV4aXN0c1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB1bmxpbmsodGVtcFBhdGgpXG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBJZ25vcmUgY2xlYW51cCBlcnJvcnNcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBGZXRjaCBpbnN0YWxsIGNvdW50cyBmcm9tIEdpdEh1YiBzdGF0cyByZXBvc2l0b3J5XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGZldGNoSW5zdGFsbENvdW50c0Zyb21HaXRIdWIoKTogUHJvbWlzZTxcbiAgQXJyYXk8eyBwbHVnaW46IHN0cmluZzsgdW5pcXVlX2luc3RhbGxzOiBudW1iZXIgfT5cbj4ge1xuICBsb2dGb3JEZWJ1Z2dpbmcoYEZldGNoaW5nIGluc3RhbGwgY291bnRzIGZyb20gJHtJTlNUQUxMX0NPVU5UU19VUkx9YClcblxuICBjb25zdCBzdGFydGVkID0gcGVyZm9ybWFuY2Uubm93KClcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldDxHaXRIdWJTdGF0c1Jlc3BvbnNlPihJTlNUQUxMX0NPVU5UU19VUkwsIHtcbiAgICAgIHRpbWVvdXQ6IDEwMDAwLFxuICAgIH0pXG5cbiAgICBpZiAoIXJlc3BvbnNlLmRhdGE/LnBsdWdpbnMgfHwgIUFycmF5LmlzQXJyYXkocmVzcG9uc2UuZGF0YS5wbHVnaW5zKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJlc3BvbnNlIGZvcm1hdCBmcm9tIGluc3RhbGwgY291bnRzIEFQSScpXG4gICAgfVxuXG4gICAgbG9nUGx1Z2luRmV0Y2goXG4gICAgICAnaW5zdGFsbF9jb3VudHMnLFxuICAgICAgSU5TVEFMTF9DT1VOVFNfVVJMLFxuICAgICAgJ3N1Y2Nlc3MnLFxuICAgICAgcGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydGVkLFxuICAgIClcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5wbHVnaW5zXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nUGx1Z2luRmV0Y2goXG4gICAgICAnaW5zdGFsbF9jb3VudHMnLFxuICAgICAgSU5TVEFMTF9DT1VOVFNfVVJMLFxuICAgICAgJ2ZhaWx1cmUnLFxuICAgICAgcGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydGVkLFxuICAgICAgY2xhc3NpZnlGZXRjaEVycm9yKGVycm9yKSxcbiAgICApXG4gICAgdGhyb3cgZXJyb3JcbiAgfVxufVxuXG4vKipcbiAqIEdldCBwbHVnaW4gaW5zdGFsbCBjb3VudHMgYXMgYSBNYXAuXG4gKiBVc2VzIGNhY2hlZCBkYXRhIGlmIGF2YWlsYWJsZSBhbmQgbGVzcyB0aGFuIDI0IGhvdXJzIG9sZC5cbiAqIFJldHVybnMgbnVsbCBvbiBlcnJvcnMgc28gVUkgY2FuIGhpZGUgY291bnRzIHJhdGhlciB0aGFuIHNob3cgbWlzbGVhZGluZyB6ZXJvcy5cbiAqXG4gKiBAcmV0dXJucyBNYXAgb2YgcGx1Z2luIElEIChuYW1lQG1hcmtldHBsYWNlKSB0byBpbnN0YWxsIGNvdW50LCBvciBudWxsIGlmIHVuYXZhaWxhYmxlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbnN0YWxsQ291bnRzKCk6IFByb21pc2U8TWFwPHN0cmluZywgbnVtYmVyPiB8IG51bGw+IHtcbiAgLy8gVHJ5IHRvIGxvYWQgZnJvbSBjYWNoZSBmaXJzdFxuICBjb25zdCBjYWNoZSA9IGF3YWl0IGxvYWRJbnN0YWxsQ291bnRzQ2FjaGUoKVxuICBpZiAoY2FjaGUpIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoJ1VzaW5nIGNhY2hlZCBpbnN0YWxsIGNvdW50cycpXG4gICAgbG9nUGx1Z2luRmV0Y2goJ2luc3RhbGxfY291bnRzJywgSU5TVEFMTF9DT1VOVFNfVVJMLCAnY2FjaGVfaGl0JywgMClcbiAgICBjb25zdCBtYXAgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBjYWNoZS5jb3VudHMpIHtcbiAgICAgIG1hcC5zZXQoZW50cnkucGx1Z2luLCBlbnRyeS51bmlxdWVfaW5zdGFsbHMpXG4gICAgfVxuICAgIHJldHVybiBtYXBcbiAgfVxuXG4gIC8vIENhY2hlIG1pc3Mgb3Igc3RhbGUgLSBmZXRjaCBmcm9tIEdpdEh1YlxuICB0cnkge1xuICAgIGNvbnN0IGNvdW50cyA9IGF3YWl0IGZldGNoSW5zdGFsbENvdW50c0Zyb21HaXRIdWIoKVxuXG4gICAgLy8gU2F2ZSB0byBjYWNoZVxuICAgIGNvbnN0IG5ld0NhY2hlOiBJbnN0YWxsQ291bnRzQ2FjaGUgPSB7XG4gICAgICB2ZXJzaW9uOiBJTlNUQUxMX0NPVU5UU19DQUNIRV9WRVJTSU9OLFxuICAgICAgZmV0Y2hlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICBjb3VudHMsXG4gICAgfVxuICAgIGF3YWl0IHNhdmVJbnN0YWxsQ291bnRzQ2FjaGUobmV3Q2FjaGUpXG5cbiAgICAvLyBDb252ZXJ0IHRvIE1hcFxuICAgIGNvbnN0IG1hcCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KClcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGNvdW50cykge1xuICAgICAgbWFwLnNldChlbnRyeS5wbHVnaW4sIGVudHJ5LnVuaXF1ZV9pbnN0YWxscylcbiAgICB9XG4gICAgcmV0dXJuIG1hcFxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIExvZyBlcnJvciBhbmQgcmV0dXJuIG51bGwgc28gVUkgY2FuIGhpZGUgY291bnRzXG4gICAgbG9nRXJyb3IoZXJyb3IpXG4gICAgbG9nRm9yRGVidWdnaW5nKGBGYWlsZWQgdG8gZmV0Y2ggaW5zdGFsbCBjb3VudHM6ICR7ZXJyb3JNZXNzYWdlKGVycm9yKX1gKVxuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuLyoqXG4gKiBGb3JtYXQgYW4gaW5zdGFsbCBjb3VudCBmb3IgZGlzcGxheS5cbiAqXG4gKiBAcGFyYW0gY291bnQgLSBUaGUgcmF3IGluc3RhbGwgY291bnRcbiAqIEByZXR1cm5zIEZvcm1hdHRlZCBzdHJpbmc6XG4gKiAgIC0gPDEwMDA6IHJhdyBudW1iZXIgKGUuZy4sIFwiNDJcIilcbiAqICAgLSA+PTEwMDA6IEsgc3VmZml4IHdpdGggMSBkZWNpbWFsIChlLmcuLCBcIjEuMktcIiwgXCIzNi4yS1wiKVxuICogICAtID49MTAwMDAwMDogTSBzdWZmaXggd2l0aCAxIGRlY2ltYWwgKGUuZy4sIFwiMS4yTVwiKVxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0SW5zdGFsbENvdW50KGNvdW50OiBudW1iZXIpOiBzdHJpbmcge1xuICBpZiAoY291bnQgPCAxMDAwKSB7XG4gICAgcmV0dXJuIFN0cmluZyhjb3VudClcbiAgfVxuXG4gIGlmIChjb3VudCA8IDEwMDAwMDApIHtcbiAgICBjb25zdCBrID0gY291bnQgLyAxMDAwXG4gICAgLy8gVXNlIHRvRml4ZWQoMSkgYnV0IHJlbW92ZSB0cmFpbGluZyAuMFxuICAgIGNvbnN0IGZvcm1hdHRlZCA9IGsudG9GaXhlZCgxKVxuICAgIHJldHVybiBmb3JtYXR0ZWQuZW5kc1dpdGgoJy4wJylcbiAgICAgID8gYCR7Zm9ybWF0dGVkLnNsaWNlKDAsIC0yKX1LYFxuICAgICAgOiBgJHtmb3JtYXR0ZWR9S2BcbiAgfVxuXG4gIGNvbnN0IG0gPSBjb3VudCAvIDEwMDAwMDBcbiAgY29uc3QgZm9ybWF0dGVkID0gbS50b0ZpeGVkKDEpXG4gIHJldHVybiBmb3JtYXR0ZWQuZW5kc1dpdGgoJy4wJylcbiAgICA/IGAke2Zvcm1hdHRlZC5zbGljZSgwLCAtMil9TWBcbiAgICA6IGAke2Zvcm1hdHRlZH1NYFxufVxuIiwgImltcG9ydCB0eXBlIHsgRGlyZW50LCBTdGF0cyB9IGZyb20gJ2ZzJ1xuaW1wb3J0IHsgcmVhZGRpciwgcmVhZEZpbGUsIHN0YXQgfSBmcm9tICdmcy9wcm9taXNlcydcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB7IHogfSBmcm9tICd6b2QvdjQnXG5pbXBvcnQgeyBlcnJvck1lc3NhZ2UsIGdldEVycm5vQ29kZSwgaXNFTk9FTlQgfSBmcm9tICcuLi9lcnJvcnMuanMnXG5pbXBvcnQgeyBGUk9OVE1BVFRFUl9SRUdFWCB9IGZyb20gJy4uL2Zyb250bWF0dGVyUGFyc2VyLmpzJ1xuaW1wb3J0IHsganNvblBhcnNlIH0gZnJvbSAnLi4vc2xvd09wZXJhdGlvbnMuanMnXG5pbXBvcnQgeyBwYXJzZVlhbWwgfSBmcm9tICcuLi95YW1sLmpzJ1xuaW1wb3J0IHtcbiAgUGx1Z2luSG9va3NTY2hlbWEsXG4gIFBsdWdpbk1hbmlmZXN0U2NoZW1hLFxuICBQbHVnaW5NYXJrZXRwbGFjZUVudHJ5U2NoZW1hLFxuICBQbHVnaW5NYXJrZXRwbGFjZVNjaGVtYSxcbn0gZnJvbSAnLi9zY2hlbWFzLmpzJ1xuXG4vKipcbiAqIEZpZWxkcyB0aGF0IGJlbG9uZyBpbiBtYXJrZXRwbGFjZS5qc29uIGVudHJpZXMgKFBsdWdpbk1hcmtldHBsYWNlRW50cnlTY2hlbWEpXG4gKiBidXQgbm90IHBsdWdpbi5qc29uIChQbHVnaW5NYW5pZmVzdFNjaGVtYSkuIFBsdWdpbiBhdXRob3JzIHJlYXNvbmFibHkgY29weVxuICogb25lIGludG8gdGhlIG90aGVyLiBTdXJmYWNlZCBhcyB3YXJuaW5ncyBieSBgY2xhdWRlIHBsdWdpbiB2YWxpZGF0ZWAgc2luY2VcbiAqIHRoZXkncmUgYSBrbm93biBjb25mdXNpb24gcG9pbnQgXHUyMDE0IHRoZSBsb2FkIHBhdGggc2lsZW50bHkgc3RyaXBzIGFsbCB1bmtub3duXG4gKiBrZXlzIHZpYSB6b2QncyBkZWZhdWx0IGJlaGF2aW9yLCBzbyB0aGV5J3JlIGhhcm1sZXNzIGF0IHJ1bnRpbWUgYnV0IHdvcnRoXG4gKiBmbGFnZ2luZyB0byBhdXRob3JzLlxuICovXG5jb25zdCBNQVJLRVRQTEFDRV9PTkxZX01BTklGRVNUX0ZJRUxEUyA9IG5ldyBTZXQoW1xuICAnY2F0ZWdvcnknLFxuICAnc291cmNlJyxcbiAgJ3RhZ3MnLFxuICAnc3RyaWN0JyxcbiAgJ2lkJyxcbl0pXG5cbmV4cG9ydCB0eXBlIFZhbGlkYXRpb25SZXN1bHQgPSB7XG4gIHN1Y2Nlc3M6IGJvb2xlYW5cbiAgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JbXVxuICB3YXJuaW5nczogVmFsaWRhdGlvbldhcm5pbmdbXVxuICBmaWxlUGF0aDogc3RyaW5nXG4gIGZpbGVUeXBlOiAncGx1Z2luJyB8ICdtYXJrZXRwbGFjZScgfCAnc2tpbGwnIHwgJ2FnZW50JyB8ICdjb21tYW5kJyB8ICdob29rcydcbn1cblxuZXhwb3J0IHR5cGUgVmFsaWRhdGlvbkVycm9yID0ge1xuICBwYXRoOiBzdHJpbmdcbiAgbWVzc2FnZTogc3RyaW5nXG4gIGNvZGU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgVmFsaWRhdGlvbldhcm5pbmcgPSB7XG4gIHBhdGg6IHN0cmluZ1xuICBtZXNzYWdlOiBzdHJpbmdcbn1cblxuLyoqXG4gKiBEZXRlY3Qgd2hldGhlciBhIGZpbGUgaXMgYSBwbHVnaW4gbWFuaWZlc3Qgb3IgbWFya2V0cGxhY2UgbWFuaWZlc3RcbiAqL1xuZnVuY3Rpb24gZGV0ZWN0TWFuaWZlc3RUeXBlKFxuICBmaWxlUGF0aDogc3RyaW5nLFxuKTogJ3BsdWdpbicgfCAnbWFya2V0cGxhY2UnIHwgJ3Vua25vd24nIHtcbiAgY29uc3QgZmlsZU5hbWUgPSBwYXRoLmJhc2VuYW1lKGZpbGVQYXRoKVxuICBjb25zdCBkaXJOYW1lID0gcGF0aC5iYXNlbmFtZShwYXRoLmRpcm5hbWUoZmlsZVBhdGgpKVxuXG4gIC8vIENoZWNrIGZpbGVuYW1lIHBhdHRlcm5zXG4gIGlmIChmaWxlTmFtZSA9PT0gJ3BsdWdpbi5qc29uJykgcmV0dXJuICdwbHVnaW4nXG4gIGlmIChmaWxlTmFtZSA9PT0gJ21hcmtldHBsYWNlLmpzb24nKSByZXR1cm4gJ21hcmtldHBsYWNlJ1xuXG4gIC8vIENoZWNrIGlmIGl0J3MgaW4gLmNsYXVkZS1wbHVnaW4gZGlyZWN0b3J5XG4gIGlmIChkaXJOYW1lID09PSAnLmNsYXVkZS1wbHVnaW4nKSB7XG4gICAgcmV0dXJuICdwbHVnaW4nIC8vIE1vc3QgbGlrZWx5IHBsdWdpbi5qc29uXG4gIH1cblxuICByZXR1cm4gJ3Vua25vd24nXG59XG5cbi8qKlxuICogRm9ybWF0IFpvZCB2YWxpZGF0aW9uIGVycm9ycyBpbnRvIGEgcmVhZGFibGUgZm9ybWF0XG4gKi9cbmZ1bmN0aW9uIGZvcm1hdFpvZEVycm9ycyh6b2RFcnJvcjogei5ab2RFcnJvcik6IFZhbGlkYXRpb25FcnJvcltdIHtcbiAgcmV0dXJuIHpvZEVycm9yLmlzc3Vlcy5tYXAoZXJyb3IgPT4gKHtcbiAgICBwYXRoOiBlcnJvci5wYXRoLmpvaW4oJy4nKSB8fCAncm9vdCcsXG4gICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICBjb2RlOiBlcnJvci5jb2RlLFxuICB9KSlcbn1cblxuLyoqXG4gKiBDaGVjayBmb3IgcGFyZW50LWRpcmVjdG9yeSBzZWdtZW50cyAoJy4uJykgaW4gYSBwYXRoIHN0cmluZy5cbiAqXG4gKiBGb3IgcGx1Z2luLmpzb24gY29tcG9uZW50IHBhdGhzIHRoaXMgaXMgYSBzZWN1cml0eSBjb25jZXJuIChlc2NhcGluZyB0aGUgcGx1Z2luIGRpcikuXG4gKiBGb3IgbWFya2V0cGxhY2UuanNvbiBzb3VyY2UgcGF0aHMgaXQncyBhbG1vc3QgYWx3YXlzIGEgcmVzb2x1dGlvbi1iYXNlIG1pc3VuZGVyc3RhbmRpbmc6XG4gKiBwYXRocyByZXNvbHZlIGZyb20gdGhlIG1hcmtldHBsYWNlIHJlcG8gcm9vdCwgbm90IGZyb20gbWFya2V0cGxhY2UuanNvbiBpdHNlbGYsIHNvIHRoZVxuICogJy4uJyBhIHVzZXIgYWRkZWQgdG8gXCJjbGltYiBvdXQgb2YgLmNsYXVkZS1wbHVnaW4vXCIgaXMgdW5uZWNlc3NhcnkuIENhbGxlcnMgcGFzcyBgaGludGBcbiAqIHRvIGF0dGFjaCB0aGUgcmlnaHQgZXhwbGFuYXRpb24uXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUGF0aFRyYXZlcnNhbChcbiAgcDogc3RyaW5nLFxuICBmaWVsZDogc3RyaW5nLFxuICBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcltdLFxuICBoaW50Pzogc3RyaW5nLFxuKTogdm9pZCB7XG4gIGlmIChwLmluY2x1ZGVzKCcuLicpKSB7XG4gICAgZXJyb3JzLnB1c2goe1xuICAgICAgcGF0aDogZmllbGQsXG4gICAgICBtZXNzYWdlOiBoaW50XG4gICAgICAgID8gYFBhdGggY29udGFpbnMgXCIuLlwiOiAke3B9LiAke2hpbnR9YFxuICAgICAgICA6IGBQYXRoIGNvbnRhaW5zIFwiLi5cIiB3aGljaCBjb3VsZCBiZSBhIHBhdGggdHJhdmVyc2FsIGF0dGVtcHQ6ICR7cH1gLFxuICAgIH0pXG4gIH1cbn1cblxuLy8gU2hvd24gd2hlbiBhIG1hcmtldHBsYWNlIHBsdWdpbiBzb3VyY2UgY29udGFpbnMgJy4uJy4gTW9zdCB1c2VycyBoaXQgdGhpcyBiZWNhdXNlXG4vLyB0aGV5IGV4cGVjdCBwYXRocyB0byByZXNvbHZlIHJlbGF0aXZlIHRvIG1hcmtldHBsYWNlLmpzb24gKGluc2lkZSAuY2xhdWRlLXBsdWdpbi8pLFxuLy8gYnV0IHJlc29sdXRpb24gYWN0dWFsbHkgc3RhcnRzIGF0IHRoZSBtYXJrZXRwbGFjZSByZXBvIHJvb3QgXHUyMDE0IHNlZSBnaC0yOTQ4NS5cbi8vIENvbXB1dGVzIGEgdGFpbG9yZWQgXCJ1c2UgWCBpbnN0ZWFkIG9mIFlcIiBzdWdnZXN0aW9uIGZyb20gdGhlIHVzZXIncyBhY3R1YWwgcGF0aFxuLy8gcmF0aGVyIHRoYW4gYSBoYXJkY29kZWQgZXhhbXBsZSAocmV2aWV3IGZlZWRiYWNrIG9uICMyMDg5NSkuXG5mdW5jdGlvbiBtYXJrZXRwbGFjZVNvdXJjZUhpbnQocDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gU3RyaXAgbGVhZGluZyAuLi8gc2VnbWVudHM6IHRoZSAnLi4nIGEgdXNlciBhZGRlZCB0byBcImNsaW1iIG91dCBvZlxuICAvLyAuY2xhdWRlLXBsdWdpbi9cIiBpcyB1bm5lY2Vzc2FyeSBzaW5jZSBwYXRocyBhbHJlYWR5IHN0YXJ0IGF0IHRoZSByZXBvIHJvb3QuXG4gIC8vIElmICcuLicgYXBwZWFycyBtaWQtcGF0aCAocmFyZSksIGZhbGwgYmFjayB0byBhIGdlbmVyaWMgZXhhbXBsZS5cbiAgY29uc3Qgc3RyaXBwZWQgPSBwLnJlcGxhY2UoL14oXFwuXFwuXFwvKSsvLCAnJylcbiAgY29uc3QgY29ycmVjdGVkID0gc3RyaXBwZWQgIT09IHAgPyBgLi8ke3N0cmlwcGVkfWAgOiAnLi9wbHVnaW5zL215LXBsdWdpbidcbiAgcmV0dXJuIChcbiAgICAnUGx1Z2luIHNvdXJjZSBwYXRocyBhcmUgcmVzb2x2ZWQgcmVsYXRpdmUgdG8gdGhlIG1hcmtldHBsYWNlIHJvb3QgKHRoZSBkaXJlY3RvcnkgJyArXG4gICAgJ2NvbnRhaW5pbmcgLmNsYXVkZS1wbHVnaW4vKSwgbm90IHJlbGF0aXZlIHRvIG1hcmtldHBsYWNlLmpzb24uICcgK1xuICAgIGBVc2UgXCIke2NvcnJlY3RlZH1cIiBpbnN0ZWFkIG9mIFwiJHtwfVwiLmBcbiAgKVxufVxuXG4vKipcbiAqIFZhbGlkYXRlIGEgcGx1Z2luIG1hbmlmZXN0IGZpbGUgKHBsdWdpbi5qc29uKVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmFsaWRhdGVQbHVnaW5NYW5pZmVzdChcbiAgZmlsZVBhdGg6IHN0cmluZyxcbik6IFByb21pc2U8VmFsaWRhdGlvblJlc3VsdD4ge1xuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcltdID0gW11cbiAgY29uc3Qgd2FybmluZ3M6IFZhbGlkYXRpb25XYXJuaW5nW10gPSBbXVxuICBjb25zdCBhYnNvbHV0ZVBhdGggPSBwYXRoLnJlc29sdmUoZmlsZVBhdGgpXG5cbiAgLy8gUmVhZCBmaWxlIGNvbnRlbnQgXHUyMDE0IGhhbmRsZSBFTk9FTlQgLyBFSVNESVIgLyBwZXJtaXNzaW9uIGVycm9ycyBkaXJlY3RseVxuICBsZXQgY29udGVudDogc3RyaW5nXG4gIHRyeSB7XG4gICAgY29udGVudCA9IGF3YWl0IHJlYWRGaWxlKGFic29sdXRlUGF0aCwgeyBlbmNvZGluZzogJ3V0Zi04JyB9KVxuICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgIGNvbnN0IGNvZGUgPSBnZXRFcnJub0NvZGUoZXJyb3IpXG4gICAgbGV0IG1lc3NhZ2U6IHN0cmluZ1xuICAgIGlmIChjb2RlID09PSAnRU5PRU5UJykge1xuICAgICAgbWVzc2FnZSA9IGBGaWxlIG5vdCBmb3VuZDogJHthYnNvbHV0ZVBhdGh9YFxuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gJ0VJU0RJUicpIHtcbiAgICAgIG1lc3NhZ2UgPSBgUGF0aCBpcyBub3QgYSBmaWxlOiAke2Fic29sdXRlUGF0aH1gXG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UgPSBgRmFpbGVkIHRvIHJlYWQgZmlsZTogJHtlcnJvck1lc3NhZ2UoZXJyb3IpfWBcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3JzOiBbeyBwYXRoOiAnZmlsZScsIG1lc3NhZ2UsIGNvZGUgfV0sXG4gICAgICB3YXJuaW5nczogW10sXG4gICAgICBmaWxlUGF0aDogYWJzb2x1dGVQYXRoLFxuICAgICAgZmlsZVR5cGU6ICdwbHVnaW4nLFxuICAgIH1cbiAgfVxuXG4gIGxldCBwYXJzZWQ6IHVua25vd25cbiAgdHJ5IHtcbiAgICBwYXJzZWQgPSBqc29uUGFyc2UoY29udGVudClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6ICdqc29uJyxcbiAgICAgICAgICBtZXNzYWdlOiBgSW52YWxpZCBKU09OIHN5bnRheDogJHtlcnJvck1lc3NhZ2UoZXJyb3IpfWAsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgd2FybmluZ3M6IFtdLFxuICAgICAgZmlsZVBhdGg6IGFic29sdXRlUGF0aCxcbiAgICAgIGZpbGVUeXBlOiAncGx1Z2luJyxcbiAgICB9XG4gIH1cblxuICAvLyBDaGVjayBmb3IgcGF0aCB0cmF2ZXJzYWwgaW4gdGhlIHBhcnNlZCBKU09OIGJlZm9yZSBzY2hlbWEgdmFsaWRhdGlvblxuICAvLyBUaGlzIGVuc3VyZXMgd2UgY2F0Y2ggc2VjdXJpdHkgaXNzdWVzIGV2ZW4gaWYgc2NoZW1hIHZhbGlkYXRpb24gZmFpbHNcbiAgaWYgKHBhcnNlZCAmJiB0eXBlb2YgcGFyc2VkID09PSAnb2JqZWN0Jykge1xuICAgIGNvbnN0IG9iaiA9IHBhcnNlZCBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuXG4gICAgLy8gQ2hlY2sgY29tbWFuZHNcbiAgICBpZiAob2JqLmNvbW1hbmRzKSB7XG4gICAgICBjb25zdCBjb21tYW5kcyA9IEFycmF5LmlzQXJyYXkob2JqLmNvbW1hbmRzKVxuICAgICAgICA/IG9iai5jb21tYW5kc1xuICAgICAgICA6IFtvYmouY29tbWFuZHNdXG4gICAgICBjb21tYW5kcy5mb3JFYWNoKChjbWQsIGkpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY2hlY2tQYXRoVHJhdmVyc2FsKGNtZCwgYGNvbW1hbmRzWyR7aX1dYCwgZXJyb3JzKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIENoZWNrIGFnZW50c1xuICAgIGlmIChvYmouYWdlbnRzKSB7XG4gICAgICBjb25zdCBhZ2VudHMgPSBBcnJheS5pc0FycmF5KG9iai5hZ2VudHMpID8gb2JqLmFnZW50cyA6IFtvYmouYWdlbnRzXVxuICAgICAgYWdlbnRzLmZvckVhY2goKGFnZW50LCBpKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgYWdlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY2hlY2tQYXRoVHJhdmVyc2FsKGFnZW50LCBgYWdlbnRzWyR7aX1dYCwgZXJyb3JzKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIENoZWNrIHNraWxsc1xuICAgIGlmIChvYmouc2tpbGxzKSB7XG4gICAgICBjb25zdCBza2lsbHMgPSBBcnJheS5pc0FycmF5KG9iai5za2lsbHMpID8gb2JqLnNraWxscyA6IFtvYmouc2tpbGxzXVxuICAgICAgc2tpbGxzLmZvckVhY2goKHNraWxsLCBpKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2tpbGwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY2hlY2tQYXRoVHJhdmVyc2FsKHNraWxsLCBgc2tpbGxzWyR7aX1dYCwgZXJyb3JzKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIFN1cmZhY2UgbWFya2V0cGxhY2Utb25seSBmaWVsZHMgYXMgYSB3YXJuaW5nIEJFRk9SRSB2YWxpZGF0aW9uIGZsYWdzXG4gIC8vIHRoZW0uIGBjbGF1ZGUgcGx1Z2luIHZhbGlkYXRlYCBpcyBhIGRldmVsb3BlciB0b29sIFx1MjAxNCBhdXRob3JzIHJ1bm5pbmcgaXRcbiAgLy8gd2FudCB0byBrbm93IHRoZXNlIGZpZWxkcyBkb24ndCBiZWxvbmcgaGVyZS4gQnV0IGl0J3MgYSB3YXJuaW5nLCBub3QgYW5cbiAgLy8gZXJyb3I6IHRoZSBwbHVnaW4gbG9hZHMgZmluZSBhdCBydW50aW1lICh0aGUgYmFzZSBzY2hlbWEgc3RyaXBzIHVua25vd25cbiAgLy8ga2V5cykuIFdlIHN0cmlwIHRoZW0gaGVyZSBzbyB0aGUgLnN0cmljdCgpIGNhbGwgYmVsb3cgZG9lc24ndCBkb3VibGUtXG4gIC8vIHJlcG9ydCB0aGVtIGFzIHVucmVjb2duaXplZC1rZXkgZXJyb3JzIG9uIHRvcCBvZiB0aGUgdGFyZ2V0ZWQgd2FybmluZ3MuXG4gIGxldCB0b1ZhbGlkYXRlID0gcGFyc2VkXG4gIGlmICh0eXBlb2YgcGFyc2VkID09PSAnb2JqZWN0JyAmJiBwYXJzZWQgIT09IG51bGwpIHtcbiAgICBjb25zdCBvYmogPSBwYXJzZWQgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICBjb25zdCBzdHJheUtleXMgPSBPYmplY3Qua2V5cyhvYmopLmZpbHRlcihrID0+XG4gICAgICBNQVJLRVRQTEFDRV9PTkxZX01BTklGRVNUX0ZJRUxEUy5oYXMoayksXG4gICAgKVxuICAgIGlmIChzdHJheUtleXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc3RyaXBwZWQgPSB7IC4uLm9iaiB9XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBzdHJheUtleXMpIHtcbiAgICAgICAgZGVsZXRlIHN0cmlwcGVkW2tleV1cbiAgICAgICAgd2FybmluZ3MucHVzaCh7XG4gICAgICAgICAgcGF0aDoga2V5LFxuICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICBgRmllbGQgJyR7a2V5fScgYmVsb25ncyBpbiB0aGUgbWFya2V0cGxhY2UgZW50cnkgKG1hcmtldHBsYWNlLmpzb24pLCBgICtcbiAgICAgICAgICAgIGBub3QgcGx1Z2luLmpzb24uIEl0J3MgaGFybWxlc3MgaGVyZSBidXQgdW51c2VkIFx1MjAxNCBDbGF1ZGUgQ29kZSBgICtcbiAgICAgICAgICAgIGBpZ25vcmVzIGl0IGF0IGxvYWQgdGltZS5gLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdG9WYWxpZGF0ZSA9IHN0cmlwcGVkXG4gICAgfVxuICB9XG5cbiAgLy8gVmFsaWRhdGUgYWdhaW5zdCBzY2hlbWEgKHBvc3Qtc3RyaXAsIHNvIG1hcmtldHBsYWNlIGZpZWxkcyBkb24ndCBmYWlsIGl0KS5cbiAgLy8gV2UgY2FsbCAuc3RyaWN0KCkgbG9jYWxseSBoZXJlIGV2ZW4gdGhvdWdoIHRoZSBiYXNlIHNjaGVtYSBpcyBsZW5pZW50IFx1MjAxNFxuICAvLyB0aGUgcnVudGltZSBsb2FkIHBhdGggc2lsZW50bHkgc3RyaXBzIHVua25vd24ga2V5cyBmb3IgcmVzaWxpZW5jZSwgYnV0XG4gIC8vIHRoaXMgaXMgYSBkZXZlbG9wZXIgdG9vbCBhbmQgYXV0aG9ycyBydW5uaW5nIGl0IHdhbnQgdHlwbyBmZWVkYmFjay5cbiAgY29uc3QgcmVzdWx0ID0gUGx1Z2luTWFuaWZlc3RTY2hlbWEoKS5zdHJpY3QoKS5zYWZlUGFyc2UodG9WYWxpZGF0ZSlcblxuICBpZiAoIXJlc3VsdC5zdWNjZXNzKSB7XG4gICAgZXJyb3JzLnB1c2goLi4uZm9ybWF0Wm9kRXJyb3JzKHJlc3VsdC5lcnJvcikpXG4gIH1cblxuICAvLyBDaGVjayBmb3IgY29tbW9uIGlzc3VlcyBhbmQgYWRkIHdhcm5pbmdzXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIGNvbnN0IG1hbmlmZXN0ID0gcmVzdWx0LmRhdGFcblxuICAgIC8vIFdhcm4gaWYgbmFtZSBpc24ndCBzdHJpY3Qga2ViYWItY2FzZS4gQ0MncyBzY2hlbWEgb25seSByZWplY3RzIHNwYWNlcyxcbiAgICAvLyBidXQgdGhlIENsYXVkZS5haSBtYXJrZXRwbGFjZSBzeW5jIHJlamVjdHMgbm9uLWtlYmFiIG5hbWVzLiBTdXJmYWNpbmdcbiAgICAvLyB0aGlzIGhlcmUgbGV0cyBhdXRob3JzIGNhdGNoIGl0IGluIENJIGJlZm9yZSB0aGUgc3luYyBmYWlscyBvbiB0aGVtLlxuICAgIGlmICghL15bYS16MC05XSsoLVthLXowLTldKykqJC8udGVzdChtYW5pZmVzdC5uYW1lKSkge1xuICAgICAgd2FybmluZ3MucHVzaCh7XG4gICAgICAgIHBhdGg6ICduYW1lJyxcbiAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICBgUGx1Z2luIG5hbWUgXCIke21hbmlmZXN0Lm5hbWV9XCIgaXMgbm90IGtlYmFiLWNhc2UuIENsYXVkZSBDb2RlIGFjY2VwdHMgYCArXG4gICAgICAgICAgYGl0LCBidXQgdGhlIENsYXVkZS5haSBtYXJrZXRwbGFjZSBzeW5jIHJlcXVpcmVzIGtlYmFiLWNhc2UgYCArXG4gICAgICAgICAgYChsb3dlcmNhc2UgbGV0dGVycywgZGlnaXRzLCBhbmQgaHlwaGVucyBvbmx5LCBlLmcuLCBcIm15LXBsdWdpblwiKS5gLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBXYXJuIGlmIG5vIHZlcnNpb24gc3BlY2lmaWVkXG4gICAgaWYgKCFtYW5pZmVzdC52ZXJzaW9uKSB7XG4gICAgICB3YXJuaW5ncy5wdXNoKHtcbiAgICAgICAgcGF0aDogJ3ZlcnNpb24nLFxuICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICdObyB2ZXJzaW9uIHNwZWNpZmllZC4gQ29uc2lkZXIgYWRkaW5nIGEgdmVyc2lvbiBmb2xsb3dpbmcgc2VtdmVyIChlLmcuLCBcIjEuMC4wXCIpJyxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gV2FybiBpZiBubyBkZXNjcmlwdGlvblxuICAgIGlmICghbWFuaWZlc3QuZGVzY3JpcHRpb24pIHtcbiAgICAgIHdhcm5pbmdzLnB1c2goe1xuICAgICAgICBwYXRoOiAnZGVzY3JpcHRpb24nLFxuICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICdObyBkZXNjcmlwdGlvbiBwcm92aWRlZC4gQWRkaW5nIGEgZGVzY3JpcHRpb24gaGVscHMgdXNlcnMgdW5kZXJzdGFuZCB3aGF0IHlvdXIgcGx1Z2luIGRvZXMnLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBXYXJuIGlmIG5vIGF1dGhvclxuICAgIGlmICghbWFuaWZlc3QuYXV0aG9yKSB7XG4gICAgICB3YXJuaW5ncy5wdXNoKHtcbiAgICAgICAgcGF0aDogJ2F1dGhvcicsXG4gICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgJ05vIGF1dGhvciBpbmZvcm1hdGlvbiBwcm92aWRlZC4gQ29uc2lkZXIgYWRkaW5nIGF1dGhvciBkZXRhaWxzIGZvciBwbHVnaW4gYXR0cmlidXRpb24nLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN1Y2Nlc3M6IGVycm9ycy5sZW5ndGggPT09IDAsXG4gICAgZXJyb3JzLFxuICAgIHdhcm5pbmdzLFxuICAgIGZpbGVQYXRoOiBhYnNvbHV0ZVBhdGgsXG4gICAgZmlsZVR5cGU6ICdwbHVnaW4nLFxuICB9XG59XG5cbi8qKlxuICogVmFsaWRhdGUgYSBtYXJrZXRwbGFjZSBtYW5pZmVzdCBmaWxlIChtYXJrZXRwbGFjZS5qc29uKVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmFsaWRhdGVNYXJrZXRwbGFjZU1hbmlmZXN0KFxuICBmaWxlUGF0aDogc3RyaW5nLFxuKTogUHJvbWlzZTxWYWxpZGF0aW9uUmVzdWx0PiB7XG4gIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9yW10gPSBbXVxuICBjb25zdCB3YXJuaW5nczogVmFsaWRhdGlvbldhcm5pbmdbXSA9IFtdXG4gIGNvbnN0IGFic29sdXRlUGF0aCA9IHBhdGgucmVzb2x2ZShmaWxlUGF0aClcblxuICAvLyBSZWFkIGZpbGUgY29udGVudCBcdTIwMTQgaGFuZGxlIEVOT0VOVCAvIEVJU0RJUiAvIHBlcm1pc3Npb24gZXJyb3JzIGRpcmVjdGx5XG4gIGxldCBjb250ZW50OiBzdHJpbmdcbiAgdHJ5IHtcbiAgICBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGUoYWJzb2x1dGVQYXRoLCB7IGVuY29kaW5nOiAndXRmLTgnIH0pXG4gIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG4gICAgY29uc3QgY29kZSA9IGdldEVycm5vQ29kZShlcnJvcilcbiAgICBsZXQgbWVzc2FnZTogc3RyaW5nXG4gICAgaWYgKGNvZGUgPT09ICdFTk9FTlQnKSB7XG4gICAgICBtZXNzYWdlID0gYEZpbGUgbm90IGZvdW5kOiAke2Fic29sdXRlUGF0aH1gXG4gICAgfSBlbHNlIGlmIChjb2RlID09PSAnRUlTRElSJykge1xuICAgICAgbWVzc2FnZSA9IGBQYXRoIGlzIG5vdCBhIGZpbGU6ICR7YWJzb2x1dGVQYXRofWBcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZSA9IGBGYWlsZWQgdG8gcmVhZCBmaWxlOiAke2Vycm9yTWVzc2FnZShlcnJvcil9YFxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcnM6IFt7IHBhdGg6ICdmaWxlJywgbWVzc2FnZSwgY29kZSB9XSxcbiAgICAgIHdhcm5pbmdzOiBbXSxcbiAgICAgIGZpbGVQYXRoOiBhYnNvbHV0ZVBhdGgsXG4gICAgICBmaWxlVHlwZTogJ21hcmtldHBsYWNlJyxcbiAgICB9XG4gIH1cblxuICBsZXQgcGFyc2VkOiB1bmtub3duXG4gIHRyeSB7XG4gICAgcGFyc2VkID0ganNvblBhcnNlKGNvbnRlbnQpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3JzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiAnanNvbicsXG4gICAgICAgICAgbWVzc2FnZTogYEludmFsaWQgSlNPTiBzeW50YXg6ICR7ZXJyb3JNZXNzYWdlKGVycm9yKX1gLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHdhcm5pbmdzOiBbXSxcbiAgICAgIGZpbGVQYXRoOiBhYnNvbHV0ZVBhdGgsXG4gICAgICBmaWxlVHlwZTogJ21hcmtldHBsYWNlJyxcbiAgICB9XG4gIH1cblxuICAvLyBDaGVjayBmb3IgcGF0aCB0cmF2ZXJzYWwgaW4gcGx1Z2luIHNvdXJjZXMgYmVmb3JlIHNjaGVtYSB2YWxpZGF0aW9uXG4gIC8vIFRoaXMgZW5zdXJlcyB3ZSBjYXRjaCBzZWN1cml0eSBpc3N1ZXMgZXZlbiBpZiBzY2hlbWEgdmFsaWRhdGlvbiBmYWlsc1xuICBpZiAocGFyc2VkICYmIHR5cGVvZiBwYXJzZWQgPT09ICdvYmplY3QnKSB7XG4gICAgY29uc3Qgb2JqID0gcGFyc2VkIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmoucGx1Z2lucykpIHtcbiAgICAgIG9iai5wbHVnaW5zLmZvckVhY2goKHBsdWdpbjogdW5rbm93biwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChwbHVnaW4gJiYgdHlwZW9mIHBsdWdpbiA9PT0gJ29iamVjdCcgJiYgJ3NvdXJjZScgaW4gcGx1Z2luKSB7XG4gICAgICAgICAgY29uc3Qgc291cmNlID0gKHBsdWdpbiBhcyB7IHNvdXJjZTogdW5rbm93biB9KS5zb3VyY2VcbiAgICAgICAgICAvLyBDaGVjayBzdHJpbmcgc291cmNlcyAocmVsYXRpdmUgcGF0aHMpXG4gICAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjaGVja1BhdGhUcmF2ZXJzYWwoXG4gICAgICAgICAgICAgIHNvdXJjZSxcbiAgICAgICAgICAgICAgYHBsdWdpbnNbJHtpfV0uc291cmNlYCxcbiAgICAgICAgICAgICAgZXJyb3JzLFxuICAgICAgICAgICAgICBtYXJrZXRwbGFjZVNvdXJjZUhpbnQoc291cmNlKSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gQ2hlY2sgb2JqZWN0LXNvdXJjZSAucGF0aCAoZ2l0LXN1YmRpcjogc3ViZGlyZWN0b3J5IHdpdGhpbiB0aGVcbiAgICAgICAgICAvLyByZW1vdGUgcmVwbywgc3BhcnNlLWNsb25lZCkuICcuLicgaGVyZSBpcyBhIGdlbnVpbmUgdHJhdmVyc2FsIGF0dGVtcHRcbiAgICAgICAgICAvLyB3aXRoaW4gdGhlIHJlbW90ZSByZXBvIHRyZWUsIG5vdCBhIG1hcmtldHBsYWNlLXJvb3QgbWlzdW5kZXJzdGFuZGluZyBcdTIwMTRcbiAgICAgICAgICAvLyBrZWVwIHRoZSBzZWN1cml0eSBmcmFtaW5nIChubyBtYXJrZXRwbGFjZVNvdXJjZUhpbnQpLiBTZWUgIzIwODk1IHJldmlldy5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBzb3VyY2UgJiZcbiAgICAgICAgICAgIHR5cGVvZiBzb3VyY2UgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICAncGF0aCcgaW4gc291cmNlICYmXG4gICAgICAgICAgICB0eXBlb2YgKHNvdXJjZSBhcyB7IHBhdGg6IHVua25vd24gfSkucGF0aCA9PT0gJ3N0cmluZydcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNoZWNrUGF0aFRyYXZlcnNhbChcbiAgICAgICAgICAgICAgKHNvdXJjZSBhcyB7IHBhdGg6IHN0cmluZyB9KS5wYXRoLFxuICAgICAgICAgICAgICBgcGx1Z2luc1ske2l9XS5zb3VyY2UucGF0aGAsXG4gICAgICAgICAgICAgIGVycm9ycyxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gVmFsaWRhdGUgYWdhaW5zdCBzY2hlbWEuXG4gIC8vIFRoZSBiYXNlIHNjaGVtYXMgYXJlIGxlbmllbnQgKHN0cmlwIHVua25vd24ga2V5cykgZm9yIHJ1bnRpbWUgcmVzaWxpZW5jZSxcbiAgLy8gYnV0IHRoaXMgaXMgYSBkZXZlbG9wZXIgdG9vbCBcdTIwMTQgYXV0aG9ycyB3YW50IHR5cG8gZmVlZGJhY2suIFdlIHJlYnVpbGQgdGhlXG4gIC8vIHNjaGVtYSB3aXRoIC5zdHJpY3QoKSBoZXJlLiBOb3RlIC5zdHJpY3QoKSBvbiB0aGUgb3V0ZXIgb2JqZWN0IGRvZXMgTk9UXG4gIC8vIHByb3BhZ2F0ZSBpbnRvIHouYXJyYXkoKSBlbGVtZW50cywgc28gd2UgYWxzbyBvdmVycmlkZSB0aGUgcGx1Z2lucyBhcnJheVxuICAvLyB3aXRoIHN0cmljdCBlbnRyaWVzIHRvIGNhdGNoIHR5cG9zIGluc2lkZSBpbmRpdmlkdWFsIHBsdWdpbiBlbnRyaWVzIHRvby5cbiAgY29uc3Qgc3RyaWN0TWFya2V0cGxhY2VTY2hlbWEgPSBQbHVnaW5NYXJrZXRwbGFjZVNjaGVtYSgpXG4gICAgLmV4dGVuZCh7XG4gICAgICBwbHVnaW5zOiB6LmFycmF5KFBsdWdpbk1hcmtldHBsYWNlRW50cnlTY2hlbWEoKS5zdHJpY3QoKSksXG4gICAgfSlcbiAgICAuc3RyaWN0KClcbiAgY29uc3QgcmVzdWx0ID0gc3RyaWN0TWFya2V0cGxhY2VTY2hlbWEuc2FmZVBhcnNlKHBhcnNlZClcblxuICBpZiAoIXJlc3VsdC5zdWNjZXNzKSB7XG4gICAgZXJyb3JzLnB1c2goLi4uZm9ybWF0Wm9kRXJyb3JzKHJlc3VsdC5lcnJvcikpXG4gIH1cblxuICAvLyBDaGVjayBmb3IgY29tbW9uIGlzc3VlcyBhbmQgYWRkIHdhcm5pbmdzXG4gIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgIGNvbnN0IG1hcmtldHBsYWNlID0gcmVzdWx0LmRhdGFcblxuICAgIC8vIFdhcm4gaWYgbm8gcGx1Z2luc1xuICAgIGlmICghbWFya2V0cGxhY2UucGx1Z2lucyB8fCBtYXJrZXRwbGFjZS5wbHVnaW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgd2FybmluZ3MucHVzaCh7XG4gICAgICAgIHBhdGg6ICdwbHVnaW5zJyxcbiAgICAgICAgbWVzc2FnZTogJ01hcmtldHBsYWNlIGhhcyBubyBwbHVnaW5zIGRlZmluZWQnLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBDaGVjayBlYWNoIHBsdWdpbiBlbnRyeVxuICAgIGlmIChtYXJrZXRwbGFjZS5wbHVnaW5zKSB7XG4gICAgICBtYXJrZXRwbGFjZS5wbHVnaW5zLmZvckVhY2goKHBsdWdpbiwgaSkgPT4ge1xuICAgICAgICAvLyBDaGVjayBmb3IgZHVwbGljYXRlIHBsdWdpbiBuYW1lc1xuICAgICAgICBjb25zdCBkdXBsaWNhdGVzID0gbWFya2V0cGxhY2UucGx1Z2lucy5maWx0ZXIoXG4gICAgICAgICAgcCA9PiBwLm5hbWUgPT09IHBsdWdpbi5uYW1lLFxuICAgICAgICApXG4gICAgICAgIGlmIChkdXBsaWNhdGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgICBwYXRoOiBgcGx1Z2luc1ske2l9XS5uYW1lYCxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBEdXBsaWNhdGUgcGx1Z2luIG5hbWUgXCIke3BsdWdpbi5uYW1lfVwiIGZvdW5kIGluIG1hcmtldHBsYWNlYCxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICAvLyBWZXJzaW9uLW1pc21hdGNoIGNoZWNrOiBmb3IgbG9jYWwtc291cmNlIGVudHJpZXMgdGhhdCBkZWNsYXJlIGFcbiAgICAgIC8vIHZlcnNpb24sIGNvbXBhcmUgYWdhaW5zdCB0aGUgcGx1Z2luJ3Mgb3duIHBsdWdpbi5qc29uLiBBdCBpbnN0YWxsXG4gICAgICAvLyB0aW1lLCBjYWxjdWxhdGVQbHVnaW5WZXJzaW9uIChwbHVnaW5WZXJzaW9uaW5nLnRzKSBwcmVmZXJzIHRoZVxuICAgICAgLy8gbWFuaWZlc3QgdmVyc2lvbiBhbmQgc2lsZW50bHkgaWdub3JlcyB0aGUgZW50cnkgdmVyc2lvbiBcdTIwMTQgc28gYVxuICAgICAgLy8gc3RhbGUgZW50cnkudmVyc2lvbiBpcyBpbnZpc2libGUgdXNlciBjb25mdXNpb24gKG1hcmtldHBsYWNlIFVJXG4gICAgICAvLyBzaG93cyBvbmUgdmVyc2lvbiwgL3N0YXR1cyBzaG93cyBhbm90aGVyIGFmdGVyIGluc3RhbGwpLlxuICAgICAgLy8gT25seSBsb2NhbCBzb3VyY2VzOiByZW1vdGUgc291cmNlcyB3b3VsZCBuZWVkIGNsb25pbmcgdG8gY2hlY2suXG4gICAgICBjb25zdCBtYW5pZmVzdERpciA9IHBhdGguZGlybmFtZShhYnNvbHV0ZVBhdGgpXG4gICAgICBjb25zdCBtYXJrZXRwbGFjZVJvb3QgPVxuICAgICAgICBwYXRoLmJhc2VuYW1lKG1hbmlmZXN0RGlyKSA9PT0gJy5jbGF1ZGUtcGx1Z2luJ1xuICAgICAgICAgID8gcGF0aC5kaXJuYW1lKG1hbmlmZXN0RGlyKVxuICAgICAgICAgIDogbWFuaWZlc3REaXJcbiAgICAgIGZvciAoY29uc3QgW2ksIGVudHJ5XSBvZiBtYXJrZXRwbGFjZS5wbHVnaW5zLmVudHJpZXMoKSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIWVudHJ5LnZlcnNpb24gfHxcbiAgICAgICAgICB0eXBlb2YgZW50cnkuc291cmNlICE9PSAnc3RyaW5nJyB8fFxuICAgICAgICAgICFlbnRyeS5zb3VyY2Uuc3RhcnRzV2l0aCgnLi8nKVxuICAgICAgICApIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBsdWdpbkpzb25QYXRoID0gcGF0aC5qb2luKFxuICAgICAgICAgIG1hcmtldHBsYWNlUm9vdCxcbiAgICAgICAgICBlbnRyeS5zb3VyY2UsXG4gICAgICAgICAgJy5jbGF1ZGUtcGx1Z2luJyxcbiAgICAgICAgICAncGx1Z2luLmpzb24nLFxuICAgICAgICApXG4gICAgICAgIGxldCBtYW5pZmVzdFZlcnNpb246IHN0cmluZyB8IHVuZGVmaW5lZFxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJhdyA9IGF3YWl0IHJlYWRGaWxlKHBsdWdpbkpzb25QYXRoLCB7IGVuY29kaW5nOiAndXRmLTgnIH0pXG4gICAgICAgICAgY29uc3QgcGFyc2VkID0ganNvblBhcnNlKHJhdykgYXMgeyB2ZXJzaW9uPzogdW5rbm93biB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBwYXJzZWQudmVyc2lvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIG1hbmlmZXN0VmVyc2lvbiA9IHBhcnNlZC52ZXJzaW9uXG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAvLyBNaXNzaW5nL3VucmVhZGFibGUgcGx1Z2luLmpzb24gaXMgc29tZW9uZSBlbHNlJ3MgZXJyb3IgdG8gcmVwb3J0XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgICBpZiAobWFuaWZlc3RWZXJzaW9uICYmIG1hbmlmZXN0VmVyc2lvbiAhPT0gZW50cnkudmVyc2lvbikge1xuICAgICAgICAgIHdhcm5pbmdzLnB1c2goe1xuICAgICAgICAgICAgcGF0aDogYHBsdWdpbnNbJHtpfV0udmVyc2lvbmAsXG4gICAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgICBgRW50cnkgZGVjbGFyZXMgdmVyc2lvbiBcIiR7ZW50cnkudmVyc2lvbn1cIiBidXQgJHtlbnRyeS5zb3VyY2V9Ly5jbGF1ZGUtcGx1Z2luL3BsdWdpbi5qc29uIHNheXMgXCIke21hbmlmZXN0VmVyc2lvbn1cIi4gYCArXG4gICAgICAgICAgICAgIGBBdCBpbnN0YWxsIHRpbWUsIHBsdWdpbi5qc29uIHdpbnMgKGNhbGN1bGF0ZVBsdWdpblZlcnNpb24gcHJlY2VkZW5jZSkgXHUyMDE0IHRoZSBlbnRyeSB2ZXJzaW9uIGlzIHNpbGVudGx5IGlnbm9yZWQuIGAgK1xuICAgICAgICAgICAgICBgVXBkYXRlIHRoaXMgZW50cnkgdG8gXCIke21hbmlmZXN0VmVyc2lvbn1cIiB0byBtYXRjaC5gLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBXYXJuIGlmIG5vIGRlc2NyaXB0aW9uIGluIG1ldGFkYXRhXG4gICAgaWYgKCFtYXJrZXRwbGFjZS5tZXRhZGF0YT8uZGVzY3JpcHRpb24pIHtcbiAgICAgIHdhcm5pbmdzLnB1c2goe1xuICAgICAgICBwYXRoOiAnbWV0YWRhdGEuZGVzY3JpcHRpb24nLFxuICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICdObyBtYXJrZXRwbGFjZSBkZXNjcmlwdGlvbiBwcm92aWRlZC4gQWRkaW5nIGEgZGVzY3JpcHRpb24gaGVscHMgdXNlcnMgdW5kZXJzdGFuZCB3aGF0IHRoaXMgbWFya2V0cGxhY2Ugb2ZmZXJzJyxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzdWNjZXNzOiBlcnJvcnMubGVuZ3RoID09PSAwLFxuICAgIGVycm9ycyxcbiAgICB3YXJuaW5ncyxcbiAgICBmaWxlUGF0aDogYWJzb2x1dGVQYXRoLFxuICAgIGZpbGVUeXBlOiAnbWFya2V0cGxhY2UnLFxuICB9XG59XG4vKipcbiAqIFZhbGlkYXRlIHRoZSBZQU1MIGZyb250bWF0dGVyIGluIGEgcGx1Z2luIGNvbXBvbmVudCBtYXJrZG93biBmaWxlLlxuICpcbiAqIFRoZSBydW50aW1lIGxvYWRlciAocGFyc2VGcm9udG1hdHRlcikgc2lsZW50bHkgZHJvcHMgdW5wYXJzZWFibGUgWUFNTCB0byBhXG4gKiBkZWJ1ZyBsb2cgYW5kIHJldHVybnMgYW4gZW1wdHkgb2JqZWN0LiBUaGF0J3MgdGhlIHJpZ2h0IHJlc2lsaWVuY2UgY2hvaWNlXG4gKiBmb3IgdGhlIGxvYWQgcGF0aCwgYnV0IGF1dGhvcnMgcnVubmluZyBgY2xhdWRlIHBsdWdpbiB2YWxpZGF0ZWAgd2FudCBhIGhhcmRcbiAqIHNpZ25hbC4gVGhpcyByZS1wYXJzZXMgdGhlIGZyb250bWF0dGVyIGJsb2NrIGFuZCBzdXJmYWNlcyB3aGF0IHRoZSBsb2FkZXJcbiAqIHdvdWxkIHNpbGVudGx5IHN3YWxsb3cuXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlQ29tcG9uZW50RmlsZShcbiAgZmlsZVBhdGg6IHN0cmluZyxcbiAgY29udGVudDogc3RyaW5nLFxuICBmaWxlVHlwZTogJ3NraWxsJyB8ICdhZ2VudCcgfCAnY29tbWFuZCcsXG4pOiBWYWxpZGF0aW9uUmVzdWx0IHtcbiAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JbXSA9IFtdXG4gIGNvbnN0IHdhcm5pbmdzOiBWYWxpZGF0aW9uV2FybmluZ1tdID0gW11cblxuICBjb25zdCBtYXRjaCA9IGNvbnRlbnQubWF0Y2goRlJPTlRNQVRURVJfUkVHRVgpXG4gIGlmICghbWF0Y2gpIHtcbiAgICB3YXJuaW5ncy5wdXNoKHtcbiAgICAgIHBhdGg6ICdmcm9udG1hdHRlcicsXG4gICAgICBtZXNzYWdlOlxuICAgICAgICAnTm8gZnJvbnRtYXR0ZXIgYmxvY2sgZm91bmQuIEFkZCBZQU1MIGZyb250bWF0dGVyIGJldHdlZW4gLS0tIGRlbGltaXRlcnMgJyArXG4gICAgICAgICdhdCB0aGUgdG9wIG9mIHRoZSBmaWxlIHRvIHNldCBkZXNjcmlwdGlvbiBhbmQgb3RoZXIgbWV0YWRhdGEuJyxcbiAgICB9KVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGVycm9ycywgd2FybmluZ3MsIGZpbGVQYXRoLCBmaWxlVHlwZSB9XG4gIH1cblxuICBjb25zdCBmcm9udG1hdHRlclRleHQgPSBtYXRjaFsxXSB8fCAnJ1xuICBsZXQgcGFyc2VkOiB1bmtub3duXG4gIHRyeSB7XG4gICAgcGFyc2VkID0gcGFyc2VZYW1sKGZyb250bWF0dGVyVGV4dClcbiAgfSBjYXRjaCAoZSkge1xuICAgIGVycm9ycy5wdXNoKHtcbiAgICAgIHBhdGg6ICdmcm9udG1hdHRlcicsXG4gICAgICBtZXNzYWdlOlxuICAgICAgICBgWUFNTCBmcm9udG1hdHRlciBmYWlsZWQgdG8gcGFyc2U6ICR7ZXJyb3JNZXNzYWdlKGUpfS4gYCArXG4gICAgICAgIGBBdCBydW50aW1lIHRoaXMgJHtmaWxlVHlwZX0gbG9hZHMgd2l0aCBlbXB0eSBtZXRhZGF0YSAoYWxsIGZyb250bWF0dGVyIGAgK1xuICAgICAgICBgZmllbGRzIHNpbGVudGx5IGRyb3BwZWQpLmAsXG4gICAgfSlcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3JzLCB3YXJuaW5ncywgZmlsZVBhdGgsIGZpbGVUeXBlIH1cbiAgfVxuXG4gIGlmIChwYXJzZWQgPT09IG51bGwgfHwgdHlwZW9mIHBhcnNlZCAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShwYXJzZWQpKSB7XG4gICAgZXJyb3JzLnB1c2goe1xuICAgICAgcGF0aDogJ2Zyb250bWF0dGVyJyxcbiAgICAgIG1lc3NhZ2U6XG4gICAgICAgICdGcm9udG1hdHRlciBtdXN0IGJlIGEgWUFNTCBtYXBwaW5nIChrZXk6IHZhbHVlIHBhaXJzKSwgZ290ICcgK1xuICAgICAgICBgJHtBcnJheS5pc0FycmF5KHBhcnNlZCkgPyAnYW4gYXJyYXknIDogcGFyc2VkID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHBhcnNlZH0uYCxcbiAgICB9KVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnMsIHdhcm5pbmdzLCBmaWxlUGF0aCwgZmlsZVR5cGUgfVxuICB9XG5cbiAgY29uc3QgZm0gPSBwYXJzZWQgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cblxuICAvLyBkZXNjcmlwdGlvbjogbXVzdCBiZSBzY2FsYXIuIGNvZXJjZURlc2NyaXB0aW9uVG9TdHJpbmcgbG9ncytkcm9wcyBhcnJheXMvb2JqZWN0cyBhdCBydW50aW1lLlxuICBpZiAoZm0uZGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGQgPSBmbS5kZXNjcmlwdGlvblxuICAgIGlmIChcbiAgICAgIHR5cGVvZiBkICE9PSAnc3RyaW5nJyAmJlxuICAgICAgdHlwZW9mIGQgIT09ICdudW1iZXInICYmXG4gICAgICB0eXBlb2YgZCAhPT0gJ2Jvb2xlYW4nICYmXG4gICAgICBkICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIHBhdGg6ICdkZXNjcmlwdGlvbicsXG4gICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgYGRlc2NyaXB0aW9uIG11c3QgYmUgYSBzdHJpbmcsIGdvdCAke0FycmF5LmlzQXJyYXkoZCkgPyAnYXJyYXknIDogdHlwZW9mIGR9LiBgICtcbiAgICAgICAgICBgQXQgcnVudGltZSB0aGlzIHZhbHVlIGlzIGRyb3BwZWQuYCxcbiAgICAgIH0pXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHdhcm5pbmdzLnB1c2goe1xuICAgICAgcGF0aDogJ2Rlc2NyaXB0aW9uJyxcbiAgICAgIG1lc3NhZ2U6XG4gICAgICAgIGBObyBkZXNjcmlwdGlvbiBpbiBmcm9udG1hdHRlci4gQSBkZXNjcmlwdGlvbiBoZWxwcyB1c2VycyBhbmQgQ2xhdWRlIGAgK1xuICAgICAgICBgdW5kZXJzdGFuZCB3aGVuIHRvIHVzZSB0aGlzICR7ZmlsZVR5cGV9LmAsXG4gICAgfSlcbiAgfVxuXG4gIC8vIG5hbWU6IGlmIHByZXNlbnQsIG11c3QgYmUgYSBzdHJpbmcgKHNraWxscy9jb21tYW5kcyB1c2UgaXQgYXMgZGlzcGxheU5hbWU7XG4gIC8vIHBsdWdpbiBhZ2VudHMgdXNlIGl0IGFzIHRoZSBhZ2VudFR5cGUgc3RlbSBcdTIwMTQgbm9uLXN0cmluZ3Mgd291bGQgc3RyaW5naWZ5IHRvIGdhcmJhZ2UpXG4gIGlmIChcbiAgICBmbS5uYW1lICE9PSB1bmRlZmluZWQgJiZcbiAgICBmbS5uYW1lICE9PSBudWxsICYmXG4gICAgdHlwZW9mIGZtLm5hbWUgIT09ICdzdHJpbmcnXG4gICkge1xuICAgIGVycm9ycy5wdXNoKHtcbiAgICAgIHBhdGg6ICduYW1lJyxcbiAgICAgIG1lc3NhZ2U6IGBuYW1lIG11c3QgYmUgYSBzdHJpbmcsIGdvdCAke3R5cGVvZiBmbS5uYW1lfS5gLFxuICAgIH0pXG4gIH1cblxuICAvLyBhbGxvd2VkLXRvb2xzOiBzdHJpbmcgb3IgYXJyYXkgb2Ygc3RyaW5nc1xuICBjb25zdCBhdCA9IGZtWydhbGxvd2VkLXRvb2xzJ11cbiAgaWYgKGF0ICE9PSB1bmRlZmluZWQgJiYgYXQgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZW9mIGF0ICE9PSAnc3RyaW5nJyAmJiAhQXJyYXkuaXNBcnJheShhdCkpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgcGF0aDogJ2FsbG93ZWQtdG9vbHMnLFxuICAgICAgICBtZXNzYWdlOiBgYWxsb3dlZC10b29scyBtdXN0IGJlIGEgc3RyaW5nIG9yIGFycmF5IG9mIHN0cmluZ3MsIGdvdCAke3R5cGVvZiBhdH0uYCxcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGF0KSAmJiBhdC5zb21lKHQgPT4gdHlwZW9mIHQgIT09ICdzdHJpbmcnKSkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBwYXRoOiAnYWxsb3dlZC10b29scycsXG4gICAgICAgIG1lc3NhZ2U6ICdhbGxvd2VkLXRvb2xzIGFycmF5IG11c3QgY29udGFpbiBvbmx5IHN0cmluZ3MuJyxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gc2hlbGw6ICdiYXNoJyB8ICdwb3dlcnNoZWxsJyAoY29udHJvbHMgIWBjbWRgIGJsb2NrIHJvdXRpbmcpXG4gIGNvbnN0IHNoID0gZm0uc2hlbGxcbiAgaWYgKHNoICE9PSB1bmRlZmluZWQgJiYgc2ggIT09IG51bGwpIHtcbiAgICBpZiAodHlwZW9mIHNoICE9PSAnc3RyaW5nJykge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBwYXRoOiAnc2hlbGwnLFxuICAgICAgICBtZXNzYWdlOiBgc2hlbGwgbXVzdCBiZSBhIHN0cmluZywgZ290ICR7dHlwZW9mIHNofS5gLFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm9ybWFsaXplIHRvIG1hdGNoIHBhcnNlU2hlbGxGcm9udG1hdHRlcigpIHJ1bnRpbWUgYmVoYXZpb3IgXHUyMDE0XG4gICAgICAvLyBgc2hlbGw6IFBvd2VyU2hlbGxgIHNob3VsZCBub3QgZmFpbCB2YWxpZGF0aW9uIGJ1dCB3b3JrIGF0IHJ1bnRpbWUuXG4gICAgICBjb25zdCBub3JtYWxpemVkID0gc2gudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgICAgIGlmIChub3JtYWxpemVkICE9PSAnYmFzaCcgJiYgbm9ybWFsaXplZCAhPT0gJ3Bvd2Vyc2hlbGwnKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBwYXRoOiAnc2hlbGwnLFxuICAgICAgICAgIG1lc3NhZ2U6IGBzaGVsbCBtdXN0IGJlICdiYXNoJyBvciAncG93ZXJzaGVsbCcsIGdvdCAnJHtzaH0nLmAsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogZXJyb3JzLmxlbmd0aCA9PT0gMCwgZXJyb3JzLCB3YXJuaW5ncywgZmlsZVBhdGgsIGZpbGVUeXBlIH1cbn1cblxuLyoqXG4gKiBWYWxpZGF0ZSBhIHBsdWdpbidzIGhvb2tzLmpzb24gZmlsZS4gVW5saWtlIGZyb250bWF0dGVyLCB0aGlzIG9uZSBIQVJELUVSUk9SU1xuICogYXQgcnVudGltZSAocGx1Z2luTG9hZGVyIHVzZXMgLnBhcnNlKCkgbm90IC5zYWZlUGFyc2UoKSkgXHUyMDE0IGEgYmFkIGhvb2tzLmpzb25cbiAqIGJyZWFrcyB0aGUgd2hvbGUgcGx1Z2luLiBTdXJmYWNpbmcgaXQgaGVyZSBpcyBlc3NlbnRpYWwuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHZhbGlkYXRlSG9va3NKc29uKGZpbGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPFZhbGlkYXRpb25SZXN1bHQ+IHtcbiAgbGV0IGNvbnRlbnQ6IHN0cmluZ1xuICB0cnkge1xuICAgIGNvbnRlbnQgPSBhd2FpdCByZWFkRmlsZShmaWxlUGF0aCwgeyBlbmNvZGluZzogJ3V0Zi04JyB9KVxuICB9IGNhdGNoIChlOiB1bmtub3duKSB7XG4gICAgY29uc3QgY29kZSA9IGdldEVycm5vQ29kZShlKVxuICAgIC8vIEVOT0VOVCBpcyBmaW5lIFx1MjAxNCBob29rcyBhcmUgb3B0aW9uYWxcbiAgICBpZiAoY29kZSA9PT0gJ0VOT0VOVCcpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIGVycm9yczogW10sXG4gICAgICAgIHdhcm5pbmdzOiBbXSxcbiAgICAgICAgZmlsZVBhdGgsXG4gICAgICAgIGZpbGVUeXBlOiAnaG9va3MnLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcnM6IFtcbiAgICAgICAgeyBwYXRoOiAnZmlsZScsIG1lc3NhZ2U6IGBGYWlsZWQgdG8gcmVhZCBmaWxlOiAke2Vycm9yTWVzc2FnZShlKX1gIH0sXG4gICAgICBdLFxuICAgICAgd2FybmluZ3M6IFtdLFxuICAgICAgZmlsZVBhdGgsXG4gICAgICBmaWxlVHlwZTogJ2hvb2tzJyxcbiAgICB9XG4gIH1cblxuICBsZXQgcGFyc2VkOiB1bmtub3duXG4gIHRyeSB7XG4gICAgcGFyc2VkID0ganNvblBhcnNlKGNvbnRlbnQpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6ICdqc29uJyxcbiAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgYEludmFsaWQgSlNPTiBzeW50YXg6ICR7ZXJyb3JNZXNzYWdlKGUpfS4gYCArXG4gICAgICAgICAgICBgQXQgcnVudGltZSB0aGlzIGJyZWFrcyB0aGUgZW50aXJlIHBsdWdpbiBsb2FkLmAsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgd2FybmluZ3M6IFtdLFxuICAgICAgZmlsZVBhdGgsXG4gICAgICBmaWxlVHlwZTogJ2hvb2tzJyxcbiAgICB9XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBQbHVnaW5Ib29rc1NjaGVtYSgpLnNhZmVQYXJzZShwYXJzZWQpXG4gIGlmICghcmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcnM6IGZvcm1hdFpvZEVycm9ycyhyZXN1bHQuZXJyb3IpLFxuICAgICAgd2FybmluZ3M6IFtdLFxuICAgICAgZmlsZVBhdGgsXG4gICAgICBmaWxlVHlwZTogJ2hvb2tzJyxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgZXJyb3JzOiBbXSxcbiAgICB3YXJuaW5nczogW10sXG4gICAgZmlsZVBhdGgsXG4gICAgZmlsZVR5cGU6ICdob29rcycsXG4gIH1cbn1cblxuLyoqXG4gKiBSZWN1cnNpdmVseSBjb2xsZWN0IC5tZCBmaWxlcyB1bmRlciBhIGRpcmVjdG9yeS4gVXNlcyB3aXRoRmlsZVR5cGVzIHRvXG4gKiBhdm9pZCBhIHN0YXQgcGVyIGVudHJ5LiBSZXR1cm5zIGFic29sdXRlIHBhdGhzIHNvIGVycm9yIG1lc3NhZ2VzIHN0YXlcbiAqIHJlYWRhYmxlLlxuICovXG5hc3luYyBmdW5jdGlvbiBjb2xsZWN0TWFya2Rvd24oXG4gIGRpcjogc3RyaW5nLFxuICBpc1NraWxsc0RpcjogYm9vbGVhbixcbik6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgbGV0IGVudHJpZXM6IERpcmVudFtdXG4gIHRyeSB7XG4gICAgZW50cmllcyA9IGF3YWl0IHJlYWRkaXIoZGlyLCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSlcbiAgfSBjYXRjaCAoZTogdW5rbm93bikge1xuICAgIGNvbnN0IGNvZGUgPSBnZXRFcnJub0NvZGUoZSlcbiAgICBpZiAoY29kZSA9PT0gJ0VOT0VOVCcgfHwgY29kZSA9PT0gJ0VOT1RESVInKSByZXR1cm4gW11cbiAgICB0aHJvdyBlXG4gIH1cblxuICAvLyBTa2lsbHMgdXNlIDxuYW1lPi9TS0lMTC5tZCBcdTIwMTQgb25seSBkZXNjZW5kIG9uZSBsZXZlbCwgb25seSBjb2xsZWN0IFNLSUxMLm1kLlxuICAvLyBNYXRjaGVzIHRoZSBydW50aW1lIGxvYWRlcjogc2luZ2xlIC5tZCBmaWxlcyBpbiBza2lsbHMvIGFyZSBOT1QgbG9hZGVkLFxuICAvLyBhbmQgc3ViZGlyZWN0b3JpZXMgb2YgYSBza2lsbCBkaXIgYXJlbid0IHNjYW5uZWQuIFBhdGhzIGFyZSBzcGVjdWxhdGl2ZVxuICAvLyAodGhlIHN1YmRpciBtYXkgbGFjayBTS0lMTC5tZCk7IHRoZSBjYWxsZXIgaGFuZGxlcyBFTk9FTlQuXG4gIGlmIChpc1NraWxsc0Rpcikge1xuICAgIHJldHVybiBlbnRyaWVzXG4gICAgICAuZmlsdGVyKGUgPT4gZS5pc0RpcmVjdG9yeSgpKVxuICAgICAgLm1hcChlID0+IHBhdGguam9pbihkaXIsIGUubmFtZSwgJ1NLSUxMLm1kJykpXG4gIH1cblxuICAvLyBDb21tYW5kcy9hZ2VudHM6IHJlY3Vyc2UgYW5kIGNvbGxlY3QgYWxsIC5tZCBmaWxlcy5cbiAgY29uc3Qgb3V0OiBzdHJpbmdbXSA9IFtdXG4gIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgIGNvbnN0IGZ1bGwgPSBwYXRoLmpvaW4oZGlyLCBlbnRyeS5uYW1lKVxuICAgIGlmIChlbnRyeS5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICBvdXQucHVzaCguLi4oYXdhaXQgY29sbGVjdE1hcmtkb3duKGZ1bGwsIGZhbHNlKSkpXG4gICAgfSBlbHNlIGlmIChlbnRyeS5pc0ZpbGUoKSAmJiBlbnRyeS5uYW1lLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoJy5tZCcpKSB7XG4gICAgICBvdXQucHVzaChmdWxsKVxuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbi8qKlxuICogVmFsaWRhdGUgdGhlIGNvbnRlbnQgZmlsZXMgaW5zaWRlIGEgcGx1Z2luIGRpcmVjdG9yeSBcdTIwMTQgc2tpbGxzLCBhZ2VudHMsXG4gKiBjb21tYW5kcywgYW5kIGhvb2tzLmpzb24uIFNjYW5zIHRoZSBkZWZhdWx0IGNvbXBvbmVudCBkaXJlY3RvcmllcyAodGhlXG4gKiBtYW5pZmVzdCBjYW4gZGVjbGFyZSBjdXN0b20gcGF0aHMgYnV0IHRoZSBkZWZhdWx0IGxheW91dCBjb3ZlcnMgdGhlIHZhc3RcbiAqIG1ham9yaXR5IG9mIHBsdWdpbnM7IHRoaXMgaXMgYSBsaW50ZXIsIG5vdCBhIGxvYWRlcikuXG4gKlxuICogUmV0dXJucyBvbmUgVmFsaWRhdGlvblJlc3VsdCBwZXIgZmlsZSB0aGF0IGhhcyBlcnJvcnMgb3Igd2FybmluZ3MuIEEgY2xlYW5cbiAqIHBsdWdpbiByZXR1cm5zIGFuIGVtcHR5IGFycmF5LlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmFsaWRhdGVQbHVnaW5Db250ZW50cyhcbiAgcGx1Z2luRGlyOiBzdHJpbmcsXG4pOiBQcm9taXNlPFZhbGlkYXRpb25SZXN1bHRbXT4ge1xuICBjb25zdCByZXN1bHRzOiBWYWxpZGF0aW9uUmVzdWx0W10gPSBbXVxuXG4gIGNvbnN0IGRpcnM6IEFycmF5PFsnc2tpbGwnIHwgJ2FnZW50JyB8ICdjb21tYW5kJywgc3RyaW5nXT4gPSBbXG4gICAgWydza2lsbCcsIHBhdGguam9pbihwbHVnaW5EaXIsICdza2lsbHMnKV0sXG4gICAgWydhZ2VudCcsIHBhdGguam9pbihwbHVnaW5EaXIsICdhZ2VudHMnKV0sXG4gICAgWydjb21tYW5kJywgcGF0aC5qb2luKHBsdWdpbkRpciwgJ2NvbW1hbmRzJyldLFxuICBdXG5cbiAgZm9yIChjb25zdCBbZmlsZVR5cGUsIGRpcl0gb2YgZGlycykge1xuICAgIGNvbnN0IGZpbGVzID0gYXdhaXQgY29sbGVjdE1hcmtkb3duKGRpciwgZmlsZVR5cGUgPT09ICdza2lsbCcpXG4gICAgZm9yIChjb25zdCBmaWxlUGF0aCBvZiBmaWxlcykge1xuICAgICAgbGV0IGNvbnRlbnQ6IHN0cmluZ1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29udGVudCA9IGF3YWl0IHJlYWRGaWxlKGZpbGVQYXRoLCB7IGVuY29kaW5nOiAndXRmLTgnIH0pXG4gICAgICB9IGNhdGNoIChlOiB1bmtub3duKSB7XG4gICAgICAgIC8vIEVOT0VOVCBpcyBleHBlY3RlZCBmb3Igc3BlY3VsYXRpdmUgc2tpbGwgcGF0aHMgKHN1YmRpcnMgd2l0aG91dCBTS0lMTC5tZClcbiAgICAgICAgaWYgKGlzRU5PRU5UKGUpKSBjb250aW51ZVxuICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgIGVycm9yczogW1xuICAgICAgICAgICAgeyBwYXRoOiAnZmlsZScsIG1lc3NhZ2U6IGBGYWlsZWQgdG8gcmVhZDogJHtlcnJvck1lc3NhZ2UoZSl9YCB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgd2FybmluZ3M6IFtdLFxuICAgICAgICAgIGZpbGVQYXRoLFxuICAgICAgICAgIGZpbGVUeXBlLFxuICAgICAgICB9KVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgY29uc3QgciA9IHZhbGlkYXRlQ29tcG9uZW50RmlsZShmaWxlUGF0aCwgY29udGVudCwgZmlsZVR5cGUpXG4gICAgICBpZiAoci5lcnJvcnMubGVuZ3RoID4gMCB8fCByLndhcm5pbmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHIpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaG9va3NSZXN1bHQgPSBhd2FpdCB2YWxpZGF0ZUhvb2tzSnNvbihcbiAgICBwYXRoLmpvaW4ocGx1Z2luRGlyLCAnaG9va3MnLCAnaG9va3MuanNvbicpLFxuICApXG4gIGlmIChob29rc1Jlc3VsdC5lcnJvcnMubGVuZ3RoID4gMCB8fCBob29rc1Jlc3VsdC53YXJuaW5ncy5sZW5ndGggPiAwKSB7XG4gICAgcmVzdWx0cy5wdXNoKGhvb2tzUmVzdWx0KVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHNcbn1cblxuLyoqXG4gKiBWYWxpZGF0ZSBhIG1hbmlmZXN0IGZpbGUgb3IgZGlyZWN0b3J5IChhdXRvLWRldGVjdHMgdHlwZSlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZhbGlkYXRlTWFuaWZlc3QoXG4gIGZpbGVQYXRoOiBzdHJpbmcsXG4pOiBQcm9taXNlPFZhbGlkYXRpb25SZXN1bHQ+IHtcbiAgY29uc3QgYWJzb2x1dGVQYXRoID0gcGF0aC5yZXNvbHZlKGZpbGVQYXRoKVxuXG4gIC8vIFN0YXQgcGF0aCB0byBjaGVjayBpZiBpdCdzIGEgZGlyZWN0b3J5IFx1MjAxNCBoYW5kbGUgRU5PRU5UIGlubGluZVxuICBsZXQgc3RhdHM6IFN0YXRzIHwgbnVsbCA9IG51bGxcbiAgdHJ5IHtcbiAgICBzdGF0cyA9IGF3YWl0IHN0YXQoYWJzb2x1dGVQYXRoKVxuICB9IGNhdGNoIChlOiB1bmtub3duKSB7XG4gICAgaWYgKCFpc0VOT0VOVChlKSkge1xuICAgICAgdGhyb3cgZVxuICAgIH1cbiAgfVxuXG4gIGlmIChzdGF0cz8uaXNEaXJlY3RvcnkoKSkge1xuICAgIC8vIExvb2sgZm9yIG1hbmlmZXN0IGZpbGVzIGluIC5jbGF1ZGUtcGx1Z2luIGRpcmVjdG9yeVxuICAgIC8vIFByZWZlciBtYXJrZXRwbGFjZS5qc29uIG92ZXIgcGx1Z2luLmpzb25cbiAgICBjb25zdCBtYXJrZXRwbGFjZVBhdGggPSBwYXRoLmpvaW4oXG4gICAgICBhYnNvbHV0ZVBhdGgsXG4gICAgICAnLmNsYXVkZS1wbHVnaW4nLFxuICAgICAgJ21hcmtldHBsYWNlLmpzb24nLFxuICAgIClcbiAgICBjb25zdCBtYXJrZXRwbGFjZVJlc3VsdCA9IGF3YWl0IHZhbGlkYXRlTWFya2V0cGxhY2VNYW5pZmVzdChtYXJrZXRwbGFjZVBhdGgpXG4gICAgLy8gT25seSBmYWxsIHRocm91Z2ggaWYgdGhlIG1hcmtldHBsYWNlIGZpbGUgd2FzIG5vdCBmb3VuZCAoRU5PRU5UKVxuICAgIGlmIChtYXJrZXRwbGFjZVJlc3VsdC5lcnJvcnNbMF0/LmNvZGUgIT09ICdFTk9FTlQnKSB7XG4gICAgICByZXR1cm4gbWFya2V0cGxhY2VSZXN1bHRcbiAgICB9XG5cbiAgICBjb25zdCBwbHVnaW5QYXRoID0gcGF0aC5qb2luKGFic29sdXRlUGF0aCwgJy5jbGF1ZGUtcGx1Z2luJywgJ3BsdWdpbi5qc29uJylcbiAgICBjb25zdCBwbHVnaW5SZXN1bHQgPSBhd2FpdCB2YWxpZGF0ZVBsdWdpbk1hbmlmZXN0KHBsdWdpblBhdGgpXG4gICAgaWYgKHBsdWdpblJlc3VsdC5lcnJvcnNbMF0/LmNvZGUgIT09ICdFTk9FTlQnKSB7XG4gICAgICByZXR1cm4gcGx1Z2luUmVzdWx0XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3JzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiAnZGlyZWN0b3J5JyxcbiAgICAgICAgICBtZXNzYWdlOiBgTm8gbWFuaWZlc3QgZm91bmQgaW4gZGlyZWN0b3J5LiBFeHBlY3RlZCAuY2xhdWRlLXBsdWdpbi9tYXJrZXRwbGFjZS5qc29uIG9yIC5jbGF1ZGUtcGx1Z2luL3BsdWdpbi5qc29uYCxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICB3YXJuaW5nczogW10sXG4gICAgICBmaWxlUGF0aDogYWJzb2x1dGVQYXRoLFxuICAgICAgZmlsZVR5cGU6ICdwbHVnaW4nLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1hbmlmZXN0VHlwZSA9IGRldGVjdE1hbmlmZXN0VHlwZShmaWxlUGF0aClcblxuICBzd2l0Y2ggKG1hbmlmZXN0VHlwZSkge1xuICAgIGNhc2UgJ3BsdWdpbic6XG4gICAgICByZXR1cm4gdmFsaWRhdGVQbHVnaW5NYW5pZmVzdChmaWxlUGF0aClcbiAgICBjYXNlICdtYXJrZXRwbGFjZSc6XG4gICAgICByZXR1cm4gdmFsaWRhdGVNYXJrZXRwbGFjZU1hbmlmZXN0KGZpbGVQYXRoKVxuICAgIGNhc2UgJ3Vua25vd24nOiB7XG4gICAgICAvLyBUcnkgdG8gcGFyc2UgYW5kIGd1ZXNzIGJhc2VkIG9uIGNvbnRlbnRcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByZWFkRmlsZShhYnNvbHV0ZVBhdGgsIHsgZW5jb2Rpbmc6ICd1dGYtOCcgfSlcbiAgICAgICAgY29uc3QgcGFyc2VkID0ganNvblBhcnNlKGNvbnRlbnQpIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+XG5cbiAgICAgICAgLy8gSGV1cmlzdGljOiBpZiBpdCBoYXMgYSBcInBsdWdpbnNcIiBhcnJheSwgaXQncyBwcm9iYWJseSBhIG1hcmtldHBsYWNlXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBhcnNlZC5wbHVnaW5zKSkge1xuICAgICAgICAgIHJldHVybiB2YWxpZGF0ZU1hcmtldHBsYWNlTWFuaWZlc3QoZmlsZVBhdGgpXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGU6IHVua25vd24pIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGdldEVycm5vQ29kZShlKVxuICAgICAgICBpZiAoY29kZSA9PT0gJ0VOT0VOVCcpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICBlcnJvcnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGg6ICdmaWxlJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgRmlsZSBub3QgZm91bmQ6ICR7YWJzb2x1dGVQYXRofWAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgd2FybmluZ3M6IFtdLFxuICAgICAgICAgICAgZmlsZVBhdGg6IGFic29sdXRlUGF0aCxcbiAgICAgICAgICAgIGZpbGVUeXBlOiAncGx1Z2luJywgLy8gRGVmYXVsdCB0byBwbHVnaW4gZm9yIGVycm9yIHJlcG9ydGluZ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBGYWxsIHRocm91Z2ggdG8gZGVmYXVsdCB2YWxpZGF0aW9uIGZvciBvdGhlciBlcnJvcnMgKGUuZy4sIEpTT04gcGFyc2UpXG4gICAgICB9XG5cbiAgICAgIC8vIERlZmF1bHQ6IHZhbGlkYXRlIGFzIHBsdWdpbiBtYW5pZmVzdFxuICAgICAgcmV0dXJuIHZhbGlkYXRlUGx1Z2luTWFuaWZlc3QoZmlsZVBhdGgpXG4gICAgfVxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVMsZUFBZTtBQUN4QixTQUFTLGVBQWU7QUFxQnhCLGVBQXNCLHNCQUNwQixPQUN1RDtBQUN2RCxRQUFNLFVBQVUsTUFBTSxLQUFLO0FBQzNCLFFBQU0sS0FBSyxvQkFBb0I7QUFLL0IsUUFBTSxXQUFXLFFBQVE7QUFBQSxJQUN2QjtBQUFBLEVBQ0Y7QUFDQSxNQUFJLFdBQVcsQ0FBQyxHQUFHO0FBQ2pCLFVBQU0sTUFBTSxTQUFTLENBQUM7QUFDdEIsVUFBTSxNQUFNLFNBQVMsQ0FBQztBQUN0QixXQUFPLE1BQU0sRUFBRSxRQUFRLE9BQU8sS0FBSyxJQUFJLElBQUksRUFBRSxRQUFRLE9BQU8sSUFBSTtBQUFBLEVBQ2xFO0FBR0EsTUFBSSxRQUFRLFdBQVcsU0FBUyxLQUFLLFFBQVEsV0FBVyxVQUFVLEdBQUc7QUFFbkUsVUFBTSxnQkFBZ0IsUUFBUSxNQUFNLG1CQUFtQjtBQUN2RCxVQUFNLHFCQUFxQixnQkFBZ0IsQ0FBQyxLQUFLO0FBQ2pELFVBQU0sTUFBTSxnQkFBZ0IsQ0FBQztBQVU3QixRQUNFLG1CQUFtQixTQUFTLE1BQU0sS0FDbEMsbUJBQW1CLFNBQVMsUUFBUSxHQUNwQztBQUNBLGFBQU8sTUFDSCxFQUFFLFFBQVEsT0FBTyxLQUFLLG9CQUFvQixJQUFJLElBQzlDLEVBQUUsUUFBUSxPQUFPLEtBQUssbUJBQW1CO0FBQUEsSUFDL0M7QUFFQSxRQUFJO0FBQ0osUUFBSTtBQUNGLFlBQU0sSUFBSSxJQUFJLGtCQUFrQjtBQUFBLElBQ2xDLFNBQVMsTUFBTTtBQUdiLGFBQU8sRUFBRSxRQUFRLE9BQU8sS0FBSyxtQkFBbUI7QUFBQSxJQUNsRDtBQUVBLFFBQUksSUFBSSxhQUFhLGdCQUFnQixJQUFJLGFBQWEsa0JBQWtCO0FBQ3RFLFlBQU0sUUFBUSxJQUFJLFNBQVMsTUFBTSxnQ0FBZ0M7QUFDakUsVUFBSSxRQUFRLENBQUMsR0FBRztBQUdkLGNBQU0sU0FBUyxtQkFBbUIsU0FBUyxNQUFNLElBQzdDLHFCQUNBLEdBQUcsa0JBQWtCO0FBQ3pCLGVBQU8sTUFDSCxFQUFFLFFBQVEsT0FBTyxLQUFLLFFBQVEsSUFBSSxJQUNsQyxFQUFFLFFBQVEsT0FBTyxLQUFLLE9BQU87QUFBQSxNQUNuQztBQUFBLElBQ0Y7QUFDQSxXQUFPLEVBQUUsUUFBUSxPQUFPLEtBQUssbUJBQW1CO0FBQUEsRUFDbEQ7QUFLQSxRQUFNLFlBQVksUUFBUSxhQUFhO0FBQ3ZDLFFBQU0sZ0JBQ0osY0FDQyxRQUFRLFdBQVcsS0FBSyxLQUN2QixRQUFRLFdBQVcsTUFBTSxLQUN6QixrQkFBa0IsS0FBSyxPQUFPO0FBQ2xDLE1BQ0UsUUFBUSxXQUFXLElBQUksS0FDdkIsUUFBUSxXQUFXLEtBQUssS0FDeEIsUUFBUSxXQUFXLEdBQUcsS0FDdEIsUUFBUSxXQUFXLEdBQUcsS0FDdEIsZUFDQTtBQUNBLFVBQU0sZUFBZTtBQUFBLE1BQ25CLFFBQVEsV0FBVyxHQUFHLElBQUksUUFBUSxRQUFRLE1BQU0sUUFBUSxDQUFDLElBQUk7QUFBQSxJQUMvRDtBQUtBLFFBQUk7QUFDSixRQUFJO0FBQ0YsY0FBUSxNQUFNLEdBQUcsS0FBSyxZQUFZO0FBQUEsSUFDcEMsU0FBUyxHQUFZO0FBQ25CLFlBQU0sT0FBTyxhQUFhLENBQUM7QUFDM0IsYUFBTztBQUFBLFFBQ0wsT0FDRSxTQUFTLFdBQ0wsd0JBQXdCLFlBQVksS0FDcEMsdUJBQXVCLFlBQVksS0FBSyxRQUFRLENBQUM7QUFBQSxNQUN6RDtBQUFBLElBQ0Y7QUFFQSxRQUFJLE1BQU0sT0FBTyxHQUFHO0FBQ2xCLFVBQUksYUFBYSxTQUFTLE9BQU8sR0FBRztBQUNsQyxlQUFPLEVBQUUsUUFBUSxRQUFRLE1BQU0sYUFBYTtBQUFBLE1BQzlDLE9BQU87QUFDTCxlQUFPO0FBQUEsVUFDTCxPQUFPLHFFQUFxRSxZQUFZO0FBQUEsUUFDMUY7QUFBQSxNQUNGO0FBQUEsSUFDRixXQUFXLE1BQU0sWUFBWSxHQUFHO0FBQzlCLGFBQU8sRUFBRSxRQUFRLGFBQWEsTUFBTSxhQUFhO0FBQUEsSUFDbkQsT0FBTztBQUNMLGFBQU87QUFBQSxRQUNMLE9BQU8sMkNBQTJDLFlBQVk7QUFBQSxNQUNoRTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBS0EsTUFBSSxRQUFRLFNBQVMsR0FBRyxLQUFLLENBQUMsUUFBUSxXQUFXLEdBQUcsR0FBRztBQUNyRCxRQUFJLFFBQVEsU0FBUyxHQUFHLEdBQUc7QUFDekIsYUFBTztBQUFBLElBQ1Q7QUFFQSxVQUFNLGdCQUFnQixRQUFRLE1BQU0seUJBQXlCO0FBQzdELFVBQU0sT0FBTyxnQkFBZ0IsQ0FBQyxLQUFLO0FBQ25DLFVBQU0sTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QixXQUFPLE1BQU0sRUFBRSxRQUFRLFVBQVUsTUFBTSxJQUFJLElBQUksRUFBRSxRQUFRLFVBQVUsS0FBSztBQUFBLEVBQzFFO0FBS0EsU0FBTztBQUNUO0FBaktBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTs7O0FDUUEsU0FBUyxtQkFBbUI7QUFDNUIsU0FBUyxVQUFVLFFBQVEsUUFBUSxpQkFBaUI7QUFDcEQsU0FBUyxZQUFZO0FBd0NyQixTQUFTLDRCQUFvQztBQUMzQyxTQUFPLEtBQUssb0JBQW9CLEdBQUcsNkJBQTZCO0FBQ2xFO0FBTUEsZUFBZSx5QkFBNkQ7QUFDMUUsUUFBTSxZQUFZLDBCQUEwQjtBQUU1QyxNQUFJO0FBQ0YsVUFBTSxVQUFVLE1BQU0sU0FBUyxXQUFXLEVBQUUsVUFBVSxRQUFRLENBQUM7QUFDL0QsVUFBTSxTQUFTLFVBQVUsT0FBTztBQUdoQyxRQUNFLE9BQU8sV0FBVyxZQUNsQixXQUFXLFFBQ1gsRUFBRSxhQUFhLFdBQ2YsRUFBRSxlQUFlLFdBQ2pCLEVBQUUsWUFBWSxTQUNkO0FBQ0Esc0JBQWdCLDRDQUE0QztBQUM1RCxhQUFPO0FBQUEsSUFDVDtBQUVBLFVBQU0sUUFBUTtBQU9kLFFBQUksTUFBTSxZQUFZLDhCQUE4QjtBQUNsRDtBQUFBLFFBQ0UsOENBQThDLE1BQU0sT0FBTyxjQUFjLDRCQUE0QjtBQUFBLE1BQ3ZHO0FBQ0EsYUFBTztBQUFBLElBQ1Q7QUFHQSxRQUFJLE9BQU8sTUFBTSxjQUFjLFlBQVksQ0FBQyxNQUFNLFFBQVEsTUFBTSxNQUFNLEdBQUc7QUFDdkUsc0JBQWdCLDRDQUE0QztBQUM1RCxhQUFPO0FBQUEsSUFDVDtBQUdBLFVBQU0sWUFBWSxJQUFJLEtBQUssTUFBTSxTQUFTLEVBQUUsUUFBUTtBQUNwRCxRQUFJLE9BQU8sTUFBTSxTQUFTLEdBQUc7QUFDM0Isc0JBQWdCLHNEQUFzRDtBQUN0RSxhQUFPO0FBQUEsSUFDVDtBQUdBLFVBQU0sY0FBYyxNQUFNLE9BQU87QUFBQSxNQUMvQixDQUFDLFVBQ0MsT0FBTyxVQUFVLFlBQ2pCLFVBQVUsUUFDVixPQUFPLE1BQU0sV0FBVyxZQUN4QixPQUFPLE1BQU0sb0JBQW9CO0FBQUEsSUFDckM7QUFDQSxRQUFJLENBQUMsYUFBYTtBQUNoQixzQkFBZ0IsNENBQTRDO0FBQzVELGFBQU87QUFBQSxJQUNUO0FBR0EsVUFBTSxNQUFNLEtBQUssSUFBSTtBQUNyQixRQUFJLE1BQU0sWUFBWSxjQUFjO0FBQ2xDLHNCQUFnQiwwQ0FBMEM7QUFDMUQsYUFBTztBQUFBLElBQ1Q7QUFHQSxXQUFPO0FBQUEsTUFDTCxTQUFTLE1BQU07QUFBQSxNQUNmLFdBQVcsTUFBTTtBQUFBLE1BQ2pCLFFBQVEsTUFBTTtBQUFBLElBQ2hCO0FBQUEsRUFDRixTQUFTLE9BQU87QUFDZCxVQUFNLE9BQU8sYUFBYSxLQUFLO0FBQy9CLFFBQUksU0FBUyxVQUFVO0FBQ3JCO0FBQUEsUUFDRSx3Q0FBd0MsYUFBYSxLQUFLLENBQUM7QUFBQSxNQUM3RDtBQUFBLElBQ0Y7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQUNGO0FBTUEsZUFBZSx1QkFDYixPQUNlO0FBQ2YsUUFBTSxZQUFZLDBCQUEwQjtBQUM1QyxRQUFNLFdBQVcsR0FBRyxTQUFTLElBQUksWUFBWSxDQUFDLEVBQUUsU0FBUyxLQUFLLENBQUM7QUFFL0QsTUFBSTtBQUVGLFVBQU0sYUFBYSxvQkFBb0I7QUFDdkMsVUFBTSxvQkFBb0IsRUFBRSxNQUFNLFVBQVU7QUFHNUMsVUFBTSxVQUFVLGNBQWMsT0FBTyxNQUFNLENBQUM7QUFDNUMsVUFBTSxVQUFVLFVBQVUsU0FBUztBQUFBLE1BQ2pDLFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxJQUNSLENBQUM7QUFHRCxVQUFNLE9BQU8sVUFBVSxTQUFTO0FBQ2hDLG9CQUFnQix5Q0FBeUM7QUFBQSxFQUMzRCxTQUFTLE9BQU87QUFDZCxhQUFTLEtBQUs7QUFFZCxRQUFJO0FBQ0YsWUFBTSxPQUFPLFFBQVE7QUFBQSxJQUN2QixRQUFRO0FBQUEsSUFFUjtBQUFBLEVBQ0Y7QUFDRjtBQUtBLGVBQWUsK0JBRWI7QUFDQSxrQkFBZ0IsZ0NBQWdDLGtCQUFrQixFQUFFO0FBRXBFLFFBQU0sVUFBVSxZQUFZLElBQUk7QUFDaEMsTUFBSTtBQUNGLFVBQU0sV0FBVyxNQUFNLGNBQU0sSUFBeUIsb0JBQW9CO0FBQUEsTUFDeEUsU0FBUztBQUFBLElBQ1gsQ0FBQztBQUVELFFBQUksQ0FBQyxTQUFTLE1BQU0sV0FBVyxDQUFDLE1BQU0sUUFBUSxTQUFTLEtBQUssT0FBTyxHQUFHO0FBQ3BFLFlBQU0sSUFBSSxNQUFNLGlEQUFpRDtBQUFBLElBQ25FO0FBRUE7QUFBQSxNQUNFO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBLFlBQVksSUFBSSxJQUFJO0FBQUEsSUFDdEI7QUFDQSxXQUFPLFNBQVMsS0FBSztBQUFBLEVBQ3ZCLFNBQVMsT0FBTztBQUNkO0FBQUEsTUFDRTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQSxZQUFZLElBQUksSUFBSTtBQUFBLE1BQ3BCLG1CQUFtQixLQUFLO0FBQUEsSUFDMUI7QUFDQSxVQUFNO0FBQUEsRUFDUjtBQUNGO0FBU0EsZUFBc0IsbUJBQXdEO0FBRTVFLFFBQU0sUUFBUSxNQUFNLHVCQUF1QjtBQUMzQyxNQUFJLE9BQU87QUFDVCxvQkFBZ0IsNkJBQTZCO0FBQzdDLG1CQUFlLGtCQUFrQixvQkFBb0IsYUFBYSxDQUFDO0FBQ25FLFVBQU0sTUFBTSxvQkFBSSxJQUFvQjtBQUNwQyxlQUFXLFNBQVMsTUFBTSxRQUFRO0FBQ2hDLFVBQUksSUFBSSxNQUFNLFFBQVEsTUFBTSxlQUFlO0FBQUEsSUFDN0M7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQUdBLE1BQUk7QUFDRixVQUFNLFNBQVMsTUFBTSw2QkFBNkI7QUFHbEQsVUFBTSxXQUErQjtBQUFBLE1BQ25DLFNBQVM7QUFBQSxNQUNULFlBQVcsb0JBQUksS0FBSyxHQUFFLFlBQVk7QUFBQSxNQUNsQztBQUFBLElBQ0Y7QUFDQSxVQUFNLHVCQUF1QixRQUFRO0FBR3JDLFVBQU0sTUFBTSxvQkFBSSxJQUFvQjtBQUNwQyxlQUFXLFNBQVMsUUFBUTtBQUMxQixVQUFJLElBQUksTUFBTSxRQUFRLE1BQU0sZUFBZTtBQUFBLElBQzdDO0FBQ0EsV0FBTztBQUFBLEVBQ1QsU0FBUyxPQUFPO0FBRWQsYUFBUyxLQUFLO0FBQ2Qsb0JBQWdCLG1DQUFtQyxhQUFhLEtBQUssQ0FBQyxFQUFFO0FBQ3hFLFdBQU87QUFBQSxFQUNUO0FBQ0Y7QUFXTyxTQUFTLG1CQUFtQixPQUF1QjtBQUN4RCxNQUFJLFFBQVEsS0FBTTtBQUNoQixXQUFPLE9BQU8sS0FBSztBQUFBLEVBQ3JCO0FBRUEsTUFBSSxRQUFRLEtBQVM7QUFDbkIsVUFBTSxJQUFJLFFBQVE7QUFFbEIsVUFBTUEsYUFBWSxFQUFFLFFBQVEsQ0FBQztBQUM3QixXQUFPQSxXQUFVLFNBQVMsSUFBSSxJQUMxQixHQUFHQSxXQUFVLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFDekIsR0FBR0EsVUFBUztBQUFBLEVBQ2xCO0FBRUEsUUFBTSxJQUFJLFFBQVE7QUFDbEIsUUFBTSxZQUFZLEVBQUUsUUFBUSxDQUFDO0FBQzdCLFNBQU8sVUFBVSxTQUFTLElBQUksSUFDMUIsR0FBRyxVQUFVLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFDekIsR0FBRyxTQUFTO0FBQ2xCO0FBblNBLElBc0JNLDhCQUNBLCtCQUNBLG9CQUVBO0FBMUJOO0FBQUE7QUFVQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTSwrQkFBK0I7QUFDckMsSUFBTSxnQ0FBZ0M7QUFDdEMsSUFBTSxxQkFDSjtBQUNGLElBQU0sZUFBZSxLQUFLLEtBQUssS0FBSztBQUFBO0FBQUE7OztBQ3pCcEMsU0FBUyxTQUFTLFlBQUFDLFdBQVUsWUFBWTtBQUN4QyxZQUFZLFVBQVU7QUFtRHRCLFNBQVMsbUJBQ1AsVUFDc0M7QUFDdEMsUUFBTSxXQUFnQixjQUFTLFFBQVE7QUFDdkMsUUFBTSxVQUFlLGNBQWMsYUFBUSxRQUFRLENBQUM7QUFHcEQsTUFBSSxhQUFhLGNBQWUsUUFBTztBQUN2QyxNQUFJLGFBQWEsbUJBQW9CLFFBQU87QUFHNUMsTUFBSSxZQUFZLGtCQUFrQjtBQUNoQyxXQUFPO0FBQUEsRUFDVDtBQUVBLFNBQU87QUFDVDtBQUtBLFNBQVMsZ0JBQWdCLFVBQXlDO0FBQ2hFLFNBQU8sU0FBUyxPQUFPLElBQUksWUFBVTtBQUFBLElBQ25DLE1BQU0sTUFBTSxLQUFLLEtBQUssR0FBRyxLQUFLO0FBQUEsSUFDOUIsU0FBUyxNQUFNO0FBQUEsSUFDZixNQUFNLE1BQU07QUFBQSxFQUNkLEVBQUU7QUFDSjtBQVdBLFNBQVMsbUJBQ1AsR0FDQSxPQUNBLFFBQ0EsTUFDTTtBQUNOLE1BQUksRUFBRSxTQUFTLElBQUksR0FBRztBQUNwQixXQUFPLEtBQUs7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLFNBQVMsT0FDTCx1QkFBdUIsQ0FBQyxLQUFLLElBQUksS0FDakMsK0RBQStELENBQUM7QUFBQSxJQUN0RSxDQUFDO0FBQUEsRUFDSDtBQUNGO0FBT0EsU0FBUyxzQkFBc0IsR0FBbUI7QUFJaEQsUUFBTSxXQUFXLEVBQUUsUUFBUSxjQUFjLEVBQUU7QUFDM0MsUUFBTSxZQUFZLGFBQWEsSUFBSSxLQUFLLFFBQVEsS0FBSztBQUNyRCxTQUNFLHdKQUVRLFNBQVMsaUJBQWlCLENBQUM7QUFFdkM7QUFLQSxlQUFzQix1QkFDcEIsVUFDMkI7QUFDM0IsUUFBTSxTQUE0QixDQUFDO0FBQ25DLFFBQU0sV0FBZ0MsQ0FBQztBQUN2QyxRQUFNLGVBQW9CLGFBQVEsUUFBUTtBQUcxQyxNQUFJO0FBQ0osTUFBSTtBQUNGLGNBQVUsTUFBTUEsVUFBUyxjQUFjLEVBQUUsVUFBVSxRQUFRLENBQUM7QUFBQSxFQUM5RCxTQUFTLE9BQWdCO0FBQ3ZCLFVBQU0sT0FBTyxhQUFhLEtBQUs7QUFDL0IsUUFBSTtBQUNKLFFBQUksU0FBUyxVQUFVO0FBQ3JCLGdCQUFVLG1CQUFtQixZQUFZO0FBQUEsSUFDM0MsV0FBVyxTQUFTLFVBQVU7QUFDNUIsZ0JBQVUsdUJBQXVCLFlBQVk7QUFBQSxJQUMvQyxPQUFPO0FBQ0wsZ0JBQVUsd0JBQXdCLGFBQWEsS0FBSyxDQUFDO0FBQUEsSUFDdkQ7QUFDQSxXQUFPO0FBQUEsTUFDTCxTQUFTO0FBQUEsTUFDVCxRQUFRLENBQUMsRUFBRSxNQUFNLFFBQVEsU0FBUyxLQUFLLENBQUM7QUFBQSxNQUN4QyxVQUFVLENBQUM7QUFBQSxNQUNYLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUVBLE1BQUk7QUFDSixNQUFJO0FBQ0YsYUFBUyxVQUFVLE9BQU87QUFBQSxFQUM1QixTQUFTLE9BQU87QUFDZCxXQUFPO0FBQUEsTUFDTCxTQUFTO0FBQUEsTUFDVCxRQUFRO0FBQUEsUUFDTjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sU0FBUyx3QkFBd0IsYUFBYSxLQUFLLENBQUM7QUFBQSxRQUN0RDtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFVBQVUsQ0FBQztBQUFBLE1BQ1gsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBSUEsTUFBSSxVQUFVLE9BQU8sV0FBVyxVQUFVO0FBQ3hDLFVBQU0sTUFBTTtBQUdaLFFBQUksSUFBSSxVQUFVO0FBQ2hCLFlBQU0sV0FBVyxNQUFNLFFBQVEsSUFBSSxRQUFRLElBQ3ZDLElBQUksV0FDSixDQUFDLElBQUksUUFBUTtBQUNqQixlQUFTLFFBQVEsQ0FBQyxLQUFLLE1BQU07QUFDM0IsWUFBSSxPQUFPLFFBQVEsVUFBVTtBQUMzQiw2QkFBbUIsS0FBSyxZQUFZLENBQUMsS0FBSyxNQUFNO0FBQUEsUUFDbEQ7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBR0EsUUFBSSxJQUFJLFFBQVE7QUFDZCxZQUFNLFNBQVMsTUFBTSxRQUFRLElBQUksTUFBTSxJQUFJLElBQUksU0FBUyxDQUFDLElBQUksTUFBTTtBQUNuRSxhQUFPLFFBQVEsQ0FBQyxPQUFPLE1BQU07QUFDM0IsWUFBSSxPQUFPLFVBQVUsVUFBVTtBQUM3Qiw2QkFBbUIsT0FBTyxVQUFVLENBQUMsS0FBSyxNQUFNO0FBQUEsUUFDbEQ7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBR0EsUUFBSSxJQUFJLFFBQVE7QUFDZCxZQUFNLFNBQVMsTUFBTSxRQUFRLElBQUksTUFBTSxJQUFJLElBQUksU0FBUyxDQUFDLElBQUksTUFBTTtBQUNuRSxhQUFPLFFBQVEsQ0FBQyxPQUFPLE1BQU07QUFDM0IsWUFBSSxPQUFPLFVBQVUsVUFBVTtBQUM3Qiw2QkFBbUIsT0FBTyxVQUFVLENBQUMsS0FBSyxNQUFNO0FBQUEsUUFDbEQ7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQVFBLE1BQUksYUFBYTtBQUNqQixNQUFJLE9BQU8sV0FBVyxZQUFZLFdBQVcsTUFBTTtBQUNqRCxVQUFNLE1BQU07QUFDWixVQUFNLFlBQVksT0FBTyxLQUFLLEdBQUcsRUFBRTtBQUFBLE1BQU8sT0FDeEMsaUNBQWlDLElBQUksQ0FBQztBQUFBLElBQ3hDO0FBQ0EsUUFBSSxVQUFVLFNBQVMsR0FBRztBQUN4QixZQUFNLFdBQVcsRUFBRSxHQUFHLElBQUk7QUFDMUIsaUJBQVcsT0FBTyxXQUFXO0FBQzNCLGVBQU8sU0FBUyxHQUFHO0FBQ25CLGlCQUFTLEtBQUs7QUFBQSxVQUNaLE1BQU07QUFBQSxVQUNOLFNBQ0UsVUFBVSxHQUFHO0FBQUEsUUFHakIsQ0FBQztBQUFBLE1BQ0g7QUFDQSxtQkFBYTtBQUFBLElBQ2Y7QUFBQSxFQUNGO0FBTUEsUUFBTSxTQUFTLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxVQUFVLFVBQVU7QUFFbkUsTUFBSSxDQUFDLE9BQU8sU0FBUztBQUNuQixXQUFPLEtBQUssR0FBRyxnQkFBZ0IsT0FBTyxLQUFLLENBQUM7QUFBQSxFQUM5QztBQUdBLE1BQUksT0FBTyxTQUFTO0FBQ2xCLFVBQU0sV0FBVyxPQUFPO0FBS3hCLFFBQUksQ0FBQywyQkFBMkIsS0FBSyxTQUFTLElBQUksR0FBRztBQUNuRCxlQUFTLEtBQUs7QUFBQSxRQUNaLE1BQU07QUFBQSxRQUNOLFNBQ0UsZ0JBQWdCLFNBQVMsSUFBSTtBQUFBLE1BR2pDLENBQUM7QUFBQSxJQUNIO0FBR0EsUUFBSSxDQUFDLFNBQVMsU0FBUztBQUNyQixlQUFTLEtBQUs7QUFBQSxRQUNaLE1BQU07QUFBQSxRQUNOLFNBQ0U7QUFBQSxNQUNKLENBQUM7QUFBQSxJQUNIO0FBR0EsUUFBSSxDQUFDLFNBQVMsYUFBYTtBQUN6QixlQUFTLEtBQUs7QUFBQSxRQUNaLE1BQU07QUFBQSxRQUNOLFNBQ0U7QUFBQSxNQUNKLENBQUM7QUFBQSxJQUNIO0FBR0EsUUFBSSxDQUFDLFNBQVMsUUFBUTtBQUNwQixlQUFTLEtBQUs7QUFBQSxRQUNaLE1BQU07QUFBQSxRQUNOLFNBQ0U7QUFBQSxNQUNKLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUVBLFNBQU87QUFBQSxJQUNMLFNBQVMsT0FBTyxXQUFXO0FBQUEsSUFDM0I7QUFBQSxJQUNBO0FBQUEsSUFDQSxVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsRUFDWjtBQUNGO0FBS0EsZUFBc0IsNEJBQ3BCLFVBQzJCO0FBQzNCLFFBQU0sU0FBNEIsQ0FBQztBQUNuQyxRQUFNLFdBQWdDLENBQUM7QUFDdkMsUUFBTSxlQUFvQixhQUFRLFFBQVE7QUFHMUMsTUFBSTtBQUNKLE1BQUk7QUFDRixjQUFVLE1BQU1BLFVBQVMsY0FBYyxFQUFFLFVBQVUsUUFBUSxDQUFDO0FBQUEsRUFDOUQsU0FBUyxPQUFnQjtBQUN2QixVQUFNLE9BQU8sYUFBYSxLQUFLO0FBQy9CLFFBQUk7QUFDSixRQUFJLFNBQVMsVUFBVTtBQUNyQixnQkFBVSxtQkFBbUIsWUFBWTtBQUFBLElBQzNDLFdBQVcsU0FBUyxVQUFVO0FBQzVCLGdCQUFVLHVCQUF1QixZQUFZO0FBQUEsSUFDL0MsT0FBTztBQUNMLGdCQUFVLHdCQUF3QixhQUFhLEtBQUssQ0FBQztBQUFBLElBQ3ZEO0FBQ0EsV0FBTztBQUFBLE1BQ0wsU0FBUztBQUFBLE1BQ1QsUUFBUSxDQUFDLEVBQUUsTUFBTSxRQUFRLFNBQVMsS0FBSyxDQUFDO0FBQUEsTUFDeEMsVUFBVSxDQUFDO0FBQUEsTUFDWCxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFFQSxNQUFJO0FBQ0osTUFBSTtBQUNGLGFBQVMsVUFBVSxPQUFPO0FBQUEsRUFDNUIsU0FBUyxPQUFPO0FBQ2QsV0FBTztBQUFBLE1BQ0wsU0FBUztBQUFBLE1BQ1QsUUFBUTtBQUFBLFFBQ047QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFNBQVMsd0JBQXdCLGFBQWEsS0FBSyxDQUFDO0FBQUEsUUFDdEQ7QUFBQSxNQUNGO0FBQUEsTUFDQSxVQUFVLENBQUM7QUFBQSxNQUNYLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUlBLE1BQUksVUFBVSxPQUFPLFdBQVcsVUFBVTtBQUN4QyxVQUFNLE1BQU07QUFFWixRQUFJLE1BQU0sUUFBUSxJQUFJLE9BQU8sR0FBRztBQUM5QixVQUFJLFFBQVEsUUFBUSxDQUFDLFFBQWlCLE1BQWM7QUFDbEQsWUFBSSxVQUFVLE9BQU8sV0FBVyxZQUFZLFlBQVksUUFBUTtBQUM5RCxnQkFBTSxTQUFVLE9BQStCO0FBRS9DLGNBQUksT0FBTyxXQUFXLFVBQVU7QUFDOUI7QUFBQSxjQUNFO0FBQUEsY0FDQSxXQUFXLENBQUM7QUFBQSxjQUNaO0FBQUEsY0FDQSxzQkFBc0IsTUFBTTtBQUFBLFlBQzlCO0FBQUEsVUFDRjtBQUtBLGNBQ0UsVUFDQSxPQUFPLFdBQVcsWUFDbEIsVUFBVSxVQUNWLE9BQVEsT0FBNkIsU0FBUyxVQUM5QztBQUNBO0FBQUEsY0FDRyxPQUE0QjtBQUFBLGNBQzdCLFdBQVcsQ0FBQztBQUFBLGNBQ1o7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQVFBLFFBQU0sMEJBQTBCLHdCQUF3QixFQUNyRCxPQUFPO0FBQUEsSUFDTixTQUFTLGlCQUFFLE1BQU0sNkJBQTZCLEVBQUUsT0FBTyxDQUFDO0FBQUEsRUFDMUQsQ0FBQyxFQUNBLE9BQU87QUFDVixRQUFNLFNBQVMsd0JBQXdCLFVBQVUsTUFBTTtBQUV2RCxNQUFJLENBQUMsT0FBTyxTQUFTO0FBQ25CLFdBQU8sS0FBSyxHQUFHLGdCQUFnQixPQUFPLEtBQUssQ0FBQztBQUFBLEVBQzlDO0FBR0EsTUFBSSxPQUFPLFNBQVM7QUFDbEIsVUFBTSxjQUFjLE9BQU87QUFHM0IsUUFBSSxDQUFDLFlBQVksV0FBVyxZQUFZLFFBQVEsV0FBVyxHQUFHO0FBQzVELGVBQVMsS0FBSztBQUFBLFFBQ1osTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBLE1BQ1gsQ0FBQztBQUFBLElBQ0g7QUFHQSxRQUFJLFlBQVksU0FBUztBQUN2QixrQkFBWSxRQUFRLFFBQVEsQ0FBQyxRQUFRLE1BQU07QUFFekMsY0FBTSxhQUFhLFlBQVksUUFBUTtBQUFBLFVBQ3JDLE9BQUssRUFBRSxTQUFTLE9BQU87QUFBQSxRQUN6QjtBQUNBLFlBQUksV0FBVyxTQUFTLEdBQUc7QUFDekIsaUJBQU8sS0FBSztBQUFBLFlBQ1YsTUFBTSxXQUFXLENBQUM7QUFBQSxZQUNsQixTQUFTLDBCQUEwQixPQUFPLElBQUk7QUFBQSxVQUNoRCxDQUFDO0FBQUEsUUFDSDtBQUFBLE1BQ0YsQ0FBQztBQVNELFlBQU0sY0FBbUIsYUFBUSxZQUFZO0FBQzdDLFlBQU0sa0JBQ0MsY0FBUyxXQUFXLE1BQU0sbUJBQ3RCLGFBQVEsV0FBVyxJQUN4QjtBQUNOLGlCQUFXLENBQUMsR0FBRyxLQUFLLEtBQUssWUFBWSxRQUFRLFFBQVEsR0FBRztBQUN0RCxZQUNFLENBQUMsTUFBTSxXQUNQLE9BQU8sTUFBTSxXQUFXLFlBQ3hCLENBQUMsTUFBTSxPQUFPLFdBQVcsSUFBSSxHQUM3QjtBQUNBO0FBQUEsUUFDRjtBQUNBLGNBQU0saUJBQXNCO0FBQUEsVUFDMUI7QUFBQSxVQUNBLE1BQU07QUFBQSxVQUNOO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFDQSxZQUFJO0FBQ0osWUFBSTtBQUNGLGdCQUFNLE1BQU0sTUFBTUEsVUFBUyxnQkFBZ0IsRUFBRSxVQUFVLFFBQVEsQ0FBQztBQUNoRSxnQkFBTUMsVUFBUyxVQUFVLEdBQUc7QUFDNUIsY0FBSSxPQUFPQSxRQUFPLFlBQVksVUFBVTtBQUN0Qyw4QkFBa0JBLFFBQU87QUFBQSxVQUMzQjtBQUFBLFFBQ0YsUUFBUTtBQUVOO0FBQUEsUUFDRjtBQUNBLFlBQUksbUJBQW1CLG9CQUFvQixNQUFNLFNBQVM7QUFDeEQsbUJBQVMsS0FBSztBQUFBLFlBQ1osTUFBTSxXQUFXLENBQUM7QUFBQSxZQUNsQixTQUNFLDJCQUEyQixNQUFNLE9BQU8sU0FBUyxNQUFNLE1BQU0scUNBQXFDLGVBQWUsZ0pBRXhGLGVBQWU7QUFBQSxVQUM1QyxDQUFDO0FBQUEsUUFDSDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBR0EsUUFBSSxDQUFDLFlBQVksVUFBVSxhQUFhO0FBQ3RDLGVBQVMsS0FBSztBQUFBLFFBQ1osTUFBTTtBQUFBLFFBQ04sU0FDRTtBQUFBLE1BQ0osQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBRUEsU0FBTztBQUFBLElBQ0wsU0FBUyxPQUFPLFdBQVc7QUFBQSxJQUMzQjtBQUFBLElBQ0E7QUFBQSxJQUNBLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxFQUNaO0FBQ0Y7QUFVQSxTQUFTLHNCQUNQLFVBQ0EsU0FDQSxVQUNrQjtBQUNsQixRQUFNLFNBQTRCLENBQUM7QUFDbkMsUUFBTSxXQUFnQyxDQUFDO0FBRXZDLFFBQU0sUUFBUSxRQUFRLE1BQU0saUJBQWlCO0FBQzdDLE1BQUksQ0FBQyxPQUFPO0FBQ1YsYUFBUyxLQUFLO0FBQUEsTUFDWixNQUFNO0FBQUEsTUFDTixTQUNFO0FBQUEsSUFFSixDQUFDO0FBQ0QsV0FBTyxFQUFFLFNBQVMsTUFBTSxRQUFRLFVBQVUsVUFBVSxTQUFTO0FBQUEsRUFDL0Q7QUFFQSxRQUFNLGtCQUFrQixNQUFNLENBQUMsS0FBSztBQUNwQyxNQUFJO0FBQ0osTUFBSTtBQUNGLGFBQVMsVUFBVSxlQUFlO0FBQUEsRUFDcEMsU0FBUyxHQUFHO0FBQ1YsV0FBTyxLQUFLO0FBQUEsTUFDVixNQUFNO0FBQUEsTUFDTixTQUNFLHFDQUFxQyxhQUFhLENBQUMsQ0FBQyxxQkFDakMsUUFBUTtBQUFBLElBRS9CLENBQUM7QUFDRCxXQUFPLEVBQUUsU0FBUyxPQUFPLFFBQVEsVUFBVSxVQUFVLFNBQVM7QUFBQSxFQUNoRTtBQUVBLE1BQUksV0FBVyxRQUFRLE9BQU8sV0FBVyxZQUFZLE1BQU0sUUFBUSxNQUFNLEdBQUc7QUFDMUUsV0FBTyxLQUFLO0FBQUEsTUFDVixNQUFNO0FBQUEsTUFDTixTQUNFLDhEQUNHLE1BQU0sUUFBUSxNQUFNLElBQUksYUFBYSxXQUFXLE9BQU8sU0FBUyxPQUFPLE1BQU07QUFBQSxJQUNwRixDQUFDO0FBQ0QsV0FBTyxFQUFFLFNBQVMsT0FBTyxRQUFRLFVBQVUsVUFBVSxTQUFTO0FBQUEsRUFDaEU7QUFFQSxRQUFNLEtBQUs7QUFHWCxNQUFJLEdBQUcsZ0JBQWdCLFFBQVc7QUFDaEMsVUFBTSxJQUFJLEdBQUc7QUFDYixRQUNFLE9BQU8sTUFBTSxZQUNiLE9BQU8sTUFBTSxZQUNiLE9BQU8sTUFBTSxhQUNiLE1BQU0sTUFDTjtBQUNBLGFBQU8sS0FBSztBQUFBLFFBQ1YsTUFBTTtBQUFBLFFBQ04sU0FDRSxxQ0FBcUMsTUFBTSxRQUFRLENBQUMsSUFBSSxVQUFVLE9BQU8sQ0FBQztBQUFBLE1BRTlFLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRixPQUFPO0FBQ0wsYUFBUyxLQUFLO0FBQUEsTUFDWixNQUFNO0FBQUEsTUFDTixTQUNFLG1HQUMrQixRQUFRO0FBQUEsSUFDM0MsQ0FBQztBQUFBLEVBQ0g7QUFJQSxNQUNFLEdBQUcsU0FBUyxVQUNaLEdBQUcsU0FBUyxRQUNaLE9BQU8sR0FBRyxTQUFTLFVBQ25CO0FBQ0EsV0FBTyxLQUFLO0FBQUEsTUFDVixNQUFNO0FBQUEsTUFDTixTQUFTLDhCQUE4QixPQUFPLEdBQUcsSUFBSTtBQUFBLElBQ3ZELENBQUM7QUFBQSxFQUNIO0FBR0EsUUFBTSxLQUFLLEdBQUcsZUFBZTtBQUM3QixNQUFJLE9BQU8sVUFBYSxPQUFPLE1BQU07QUFDbkMsUUFBSSxPQUFPLE9BQU8sWUFBWSxDQUFDLE1BQU0sUUFBUSxFQUFFLEdBQUc7QUFDaEQsYUFBTyxLQUFLO0FBQUEsUUFDVixNQUFNO0FBQUEsUUFDTixTQUFTLDJEQUEyRCxPQUFPLEVBQUU7QUFBQSxNQUMvRSxDQUFDO0FBQUEsSUFDSCxXQUFXLE1BQU0sUUFBUSxFQUFFLEtBQUssR0FBRyxLQUFLLE9BQUssT0FBTyxNQUFNLFFBQVEsR0FBRztBQUNuRSxhQUFPLEtBQUs7QUFBQSxRQUNWLE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxNQUNYLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUdBLFFBQU0sS0FBSyxHQUFHO0FBQ2QsTUFBSSxPQUFPLFVBQWEsT0FBTyxNQUFNO0FBQ25DLFFBQUksT0FBTyxPQUFPLFVBQVU7QUFDMUIsYUFBTyxLQUFLO0FBQUEsUUFDVixNQUFNO0FBQUEsUUFDTixTQUFTLCtCQUErQixPQUFPLEVBQUU7QUFBQSxNQUNuRCxDQUFDO0FBQUEsSUFDSCxPQUFPO0FBR0wsWUFBTSxhQUFhLEdBQUcsS0FBSyxFQUFFLFlBQVk7QUFDekMsVUFBSSxlQUFlLFVBQVUsZUFBZSxjQUFjO0FBQ3hELGVBQU8sS0FBSztBQUFBLFVBQ1YsTUFBTTtBQUFBLFVBQ04sU0FBUyw4Q0FBOEMsRUFBRTtBQUFBLFFBQzNELENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFQSxTQUFPLEVBQUUsU0FBUyxPQUFPLFdBQVcsR0FBRyxRQUFRLFVBQVUsVUFBVSxTQUFTO0FBQzlFO0FBT0EsZUFBZSxrQkFBa0IsVUFBNkM7QUFDNUUsTUFBSTtBQUNKLE1BQUk7QUFDRixjQUFVLE1BQU1ELFVBQVMsVUFBVSxFQUFFLFVBQVUsUUFBUSxDQUFDO0FBQUEsRUFDMUQsU0FBUyxHQUFZO0FBQ25CLFVBQU0sT0FBTyxhQUFhLENBQUM7QUFFM0IsUUFBSSxTQUFTLFVBQVU7QUFDckIsYUFBTztBQUFBLFFBQ0wsU0FBUztBQUFBLFFBQ1QsUUFBUSxDQUFDO0FBQUEsUUFDVCxVQUFVLENBQUM7QUFBQSxRQUNYO0FBQUEsUUFDQSxVQUFVO0FBQUEsTUFDWjtBQUFBLElBQ0Y7QUFDQSxXQUFPO0FBQUEsTUFDTCxTQUFTO0FBQUEsTUFDVCxRQUFRO0FBQUEsUUFDTixFQUFFLE1BQU0sUUFBUSxTQUFTLHdCQUF3QixhQUFhLENBQUMsQ0FBQyxHQUFHO0FBQUEsTUFDckU7QUFBQSxNQUNBLFVBQVUsQ0FBQztBQUFBLE1BQ1g7QUFBQSxNQUNBLFVBQVU7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUVBLE1BQUk7QUFDSixNQUFJO0FBQ0YsYUFBUyxVQUFVLE9BQU87QUFBQSxFQUM1QixTQUFTLEdBQUc7QUFDVixXQUFPO0FBQUEsTUFDTCxTQUFTO0FBQUEsTUFDVCxRQUFRO0FBQUEsUUFDTjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sU0FDRSx3QkFBd0IsYUFBYSxDQUFDLENBQUM7QUFBQSxRQUUzQztBQUFBLE1BQ0Y7QUFBQSxNQUNBLFVBQVUsQ0FBQztBQUFBLE1BQ1g7QUFBQSxNQUNBLFVBQVU7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUVBLFFBQU0sU0FBUyxrQkFBa0IsRUFBRSxVQUFVLE1BQU07QUFDbkQsTUFBSSxDQUFDLE9BQU8sU0FBUztBQUNuQixXQUFPO0FBQUEsTUFDTCxTQUFTO0FBQUEsTUFDVCxRQUFRLGdCQUFnQixPQUFPLEtBQUs7QUFBQSxNQUNwQyxVQUFVLENBQUM7QUFBQSxNQUNYO0FBQUEsTUFDQSxVQUFVO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFFQSxTQUFPO0FBQUEsSUFDTCxTQUFTO0FBQUEsSUFDVCxRQUFRLENBQUM7QUFBQSxJQUNULFVBQVUsQ0FBQztBQUFBLElBQ1g7QUFBQSxJQUNBLFVBQVU7QUFBQSxFQUNaO0FBQ0Y7QUFPQSxlQUFlLGdCQUNiLEtBQ0EsYUFDbUI7QUFDbkIsTUFBSTtBQUNKLE1BQUk7QUFDRixjQUFVLE1BQU0sUUFBUSxLQUFLLEVBQUUsZUFBZSxLQUFLLENBQUM7QUFBQSxFQUN0RCxTQUFTLEdBQVk7QUFDbkIsVUFBTSxPQUFPLGFBQWEsQ0FBQztBQUMzQixRQUFJLFNBQVMsWUFBWSxTQUFTLFVBQVcsUUFBTyxDQUFDO0FBQ3JELFVBQU07QUFBQSxFQUNSO0FBTUEsTUFBSSxhQUFhO0FBQ2YsV0FBTyxRQUNKLE9BQU8sT0FBSyxFQUFFLFlBQVksQ0FBQyxFQUMzQixJQUFJLE9BQVUsVUFBSyxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFBQSxFQUNoRDtBQUdBLFFBQU0sTUFBZ0IsQ0FBQztBQUN2QixhQUFXLFNBQVMsU0FBUztBQUMzQixVQUFNLE9BQVksVUFBSyxLQUFLLE1BQU0sSUFBSTtBQUN0QyxRQUFJLE1BQU0sWUFBWSxHQUFHO0FBQ3ZCLFVBQUksS0FBSyxHQUFJLE1BQU0sZ0JBQWdCLE1BQU0sS0FBSyxDQUFFO0FBQUEsSUFDbEQsV0FBVyxNQUFNLE9BQU8sS0FBSyxNQUFNLEtBQUssWUFBWSxFQUFFLFNBQVMsS0FBSyxHQUFHO0FBQ3JFLFVBQUksS0FBSyxJQUFJO0FBQUEsSUFDZjtBQUFBLEVBQ0Y7QUFDQSxTQUFPO0FBQ1Q7QUFXQSxlQUFzQix1QkFDcEIsV0FDNkI7QUFDN0IsUUFBTSxVQUE4QixDQUFDO0FBRXJDLFFBQU0sT0FBdUQ7QUFBQSxJQUMzRCxDQUFDLFNBQWMsVUFBSyxXQUFXLFFBQVEsQ0FBQztBQUFBLElBQ3hDLENBQUMsU0FBYyxVQUFLLFdBQVcsUUFBUSxDQUFDO0FBQUEsSUFDeEMsQ0FBQyxXQUFnQixVQUFLLFdBQVcsVUFBVSxDQUFDO0FBQUEsRUFDOUM7QUFFQSxhQUFXLENBQUMsVUFBVSxHQUFHLEtBQUssTUFBTTtBQUNsQyxVQUFNLFFBQVEsTUFBTSxnQkFBZ0IsS0FBSyxhQUFhLE9BQU87QUFDN0QsZUFBVyxZQUFZLE9BQU87QUFDNUIsVUFBSTtBQUNKLFVBQUk7QUFDRixrQkFBVSxNQUFNQSxVQUFTLFVBQVUsRUFBRSxVQUFVLFFBQVEsQ0FBQztBQUFBLE1BQzFELFNBQVMsR0FBWTtBQUVuQixZQUFJLFNBQVMsQ0FBQyxFQUFHO0FBQ2pCLGdCQUFRLEtBQUs7QUFBQSxVQUNYLFNBQVM7QUFBQSxVQUNULFFBQVE7QUFBQSxZQUNOLEVBQUUsTUFBTSxRQUFRLFNBQVMsbUJBQW1CLGFBQWEsQ0FBQyxDQUFDLEdBQUc7QUFBQSxVQUNoRTtBQUFBLFVBQ0EsVUFBVSxDQUFDO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxRQUNGLENBQUM7QUFDRDtBQUFBLE1BQ0Y7QUFDQSxZQUFNLElBQUksc0JBQXNCLFVBQVUsU0FBUyxRQUFRO0FBQzNELFVBQUksRUFBRSxPQUFPLFNBQVMsS0FBSyxFQUFFLFNBQVMsU0FBUyxHQUFHO0FBQ2hELGdCQUFRLEtBQUssQ0FBQztBQUFBLE1BQ2hCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFQSxRQUFNLGNBQWMsTUFBTTtBQUFBLElBQ25CLFVBQUssV0FBVyxTQUFTLFlBQVk7QUFBQSxFQUM1QztBQUNBLE1BQUksWUFBWSxPQUFPLFNBQVMsS0FBSyxZQUFZLFNBQVMsU0FBUyxHQUFHO0FBQ3BFLFlBQVEsS0FBSyxXQUFXO0FBQUEsRUFDMUI7QUFFQSxTQUFPO0FBQ1Q7QUFLQSxlQUFzQixpQkFDcEIsVUFDMkI7QUFDM0IsUUFBTSxlQUFvQixhQUFRLFFBQVE7QUFHMUMsTUFBSSxRQUFzQjtBQUMxQixNQUFJO0FBQ0YsWUFBUSxNQUFNLEtBQUssWUFBWTtBQUFBLEVBQ2pDLFNBQVMsR0FBWTtBQUNuQixRQUFJLENBQUMsU0FBUyxDQUFDLEdBQUc7QUFDaEIsWUFBTTtBQUFBLElBQ1I7QUFBQSxFQUNGO0FBRUEsTUFBSSxPQUFPLFlBQVksR0FBRztBQUd4QixVQUFNLGtCQUF1QjtBQUFBLE1BQzNCO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQ0EsVUFBTSxvQkFBb0IsTUFBTSw0QkFBNEIsZUFBZTtBQUUzRSxRQUFJLGtCQUFrQixPQUFPLENBQUMsR0FBRyxTQUFTLFVBQVU7QUFDbEQsYUFBTztBQUFBLElBQ1Q7QUFFQSxVQUFNLGFBQWtCLFVBQUssY0FBYyxrQkFBa0IsYUFBYTtBQUMxRSxVQUFNLGVBQWUsTUFBTSx1QkFBdUIsVUFBVTtBQUM1RCxRQUFJLGFBQWEsT0FBTyxDQUFDLEdBQUcsU0FBUyxVQUFVO0FBQzdDLGFBQU87QUFBQSxJQUNUO0FBRUEsV0FBTztBQUFBLE1BQ0wsU0FBUztBQUFBLE1BQ1QsUUFBUTtBQUFBLFFBQ047QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFNBQVM7QUFBQSxRQUNYO0FBQUEsTUFDRjtBQUFBLE1BQ0EsVUFBVSxDQUFDO0FBQUEsTUFDWCxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFFQSxRQUFNLGVBQWUsbUJBQW1CLFFBQVE7QUFFaEQsVUFBUSxjQUFjO0FBQUEsSUFDcEIsS0FBSztBQUNILGFBQU8sdUJBQXVCLFFBQVE7QUFBQSxJQUN4QyxLQUFLO0FBQ0gsYUFBTyw0QkFBNEIsUUFBUTtBQUFBLElBQzdDLEtBQUssV0FBVztBQUVkLFVBQUk7QUFDRixjQUFNLFVBQVUsTUFBTUEsVUFBUyxjQUFjLEVBQUUsVUFBVSxRQUFRLENBQUM7QUFDbEUsY0FBTSxTQUFTLFVBQVUsT0FBTztBQUdoQyxZQUFJLE1BQU0sUUFBUSxPQUFPLE9BQU8sR0FBRztBQUNqQyxpQkFBTyw0QkFBNEIsUUFBUTtBQUFBLFFBQzdDO0FBQUEsTUFDRixTQUFTLEdBQVk7QUFDbkIsY0FBTSxPQUFPLGFBQWEsQ0FBQztBQUMzQixZQUFJLFNBQVMsVUFBVTtBQUNyQixpQkFBTztBQUFBLFlBQ0wsU0FBUztBQUFBLFlBQ1QsUUFBUTtBQUFBLGNBQ047QUFBQSxnQkFDRSxNQUFNO0FBQUEsZ0JBQ04sU0FBUyxtQkFBbUIsWUFBWTtBQUFBLGNBQzFDO0FBQUEsWUFDRjtBQUFBLFlBQ0EsVUFBVSxDQUFDO0FBQUEsWUFDWCxVQUFVO0FBQUEsWUFDVixVQUFVO0FBQUE7QUFBQSxVQUNaO0FBQUEsUUFDRjtBQUFBLE1BRUY7QUFHQSxhQUFPLHVCQUF1QixRQUFRO0FBQUEsSUFDeEM7QUFBQSxFQUNGO0FBQ0Y7QUF0NEJBLElBdUJNO0FBdkJOO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFlQSxJQUFNLG1DQUFtQyxvQkFBSSxJQUFJO0FBQUEsTUFDL0M7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRixDQUFDO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFsiZm9ybWF0dGVkIiwgInJlYWRGaWxlIiwgInBhcnNlZCJdCn0K
