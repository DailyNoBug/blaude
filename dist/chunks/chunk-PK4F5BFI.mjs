#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  getPluginEditableScopes,
  init_pluginStartupCheck
} from "./chunk-KWOKVHDS.mjs";
import {
  cachePlugin,
  calculatePluginVersion,
  clearAllCaches,
  copyPluginToVersionedCache,
  deletePluginDataDir,
  deletePluginOptions,
  findReverseDependents,
  formatResolutionError,
  formatReverseDependentsSuffix,
  getMarketplace,
  getPluginById,
  getVersionedCachePath,
  getVersionedZipCachePath,
  init_builtinPlugins,
  init_cacheUtils,
  init_dependencyResolver,
  init_installedPluginsManager,
  init_marketplaceManager,
  init_pluginDirectories,
  init_pluginInstallationHelpers,
  init_pluginLoader,
  init_pluginOptionsStorage,
  init_pluginPolicy,
  init_pluginVersioning,
  installResolvedPlugin,
  isBuiltinPluginId,
  isPluginBlockedByPolicy,
  loadAllPlugins,
  loadInstalledPluginsFromDisk,
  loadInstalledPluginsV2,
  loadKnownMarketplacesConfig,
  loadPluginManifest,
  markPluginVersionOrphaned,
  removePluginInstallation,
  updateInstallationPathOnDisk
} from "./chunk-BQ2W5UUK.mjs";
import {
  init_pluginIdentifier,
  parsePluginIdentifier,
  scopeToSettingSource
} from "./chunk-JPGTA2FH.mjs";
import {
  getSettingsForSource,
  init_settings2 as init_settings,
  init_stringUtils,
  plural,
  updateSettingsForSource
} from "./chunk-JQ55XPLZ.mjs";
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import {
  getFsImplementation,
  init_errors,
  init_fsOperations,
  isENOENT,
  toError
} from "./chunk-L2VTD674.mjs";
import {
  getOriginalCwd,
  init_state
} from "./chunk-NGSB34MB.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/services/plugins/pluginOperations.ts
import { dirname, join } from "path";
function assertInstallableScope(scope) {
  if (!VALID_INSTALLABLE_SCOPES.includes(scope)) {
    throw new Error(
      `Invalid scope "${scope}". Must be one of: ${VALID_INSTALLABLE_SCOPES.join(", ")}`
    );
  }
}
function isInstallableScope(scope) {
  return VALID_INSTALLABLE_SCOPES.includes(scope);
}
function getProjectPathForScope(scope) {
  return scope === "project" || scope === "local" ? getOriginalCwd() : void 0;
}
function isPluginEnabledAtProjectScope(pluginId) {
  return getSettingsForSource("projectSettings")?.enabledPlugins?.[pluginId] === true;
}
function findPluginInSettings(plugin) {
  const hasMarketplace = plugin.includes("@");
  const searchOrder = ["local", "project", "user"];
  for (const scope of searchOrder) {
    const enabledPlugins = getSettingsForSource(
      scopeToSettingSource(scope)
    )?.enabledPlugins;
    if (!enabledPlugins) continue;
    for (const key of Object.keys(enabledPlugins)) {
      if (hasMarketplace ? key === plugin : key.startsWith(`${plugin}@`)) {
        return { pluginId: key, scope };
      }
    }
  }
  return null;
}
function findPluginByIdentifier(plugin, plugins) {
  const { name, marketplace } = parsePluginIdentifier(plugin);
  return plugins.find((p) => {
    if (p.name === plugin || p.name === name) return true;
    if (marketplace && p.source) {
      return p.name === name && p.source.includes(`@${marketplace}`);
    }
    return false;
  });
}
function resolveDelistedPluginId(plugin) {
  const { name } = parsePluginIdentifier(plugin);
  const installedData = loadInstalledPluginsV2();
  if (installedData.plugins[plugin]?.length) {
    return { pluginId: plugin, pluginName: name };
  }
  const matchingKey = Object.keys(installedData.plugins).find((key) => {
    const { name: keyName } = parsePluginIdentifier(key);
    return keyName === name && (installedData.plugins[key]?.length ?? 0) > 0;
  });
  if (matchingKey) {
    return { pluginId: matchingKey, pluginName: name };
  }
  return null;
}
function getPluginInstallationFromV2(pluginId) {
  const installedData = loadInstalledPluginsV2();
  const installations = installedData.plugins[pluginId];
  if (!installations || installations.length === 0) {
    return { scope: "user" };
  }
  const currentProjectPath = getOriginalCwd();
  const localInstall = installations.find(
    (inst) => inst.scope === "local" && inst.projectPath === currentProjectPath
  );
  if (localInstall) {
    return { scope: localInstall.scope, projectPath: localInstall.projectPath };
  }
  const projectInstall = installations.find(
    (inst) => inst.scope === "project" && inst.projectPath === currentProjectPath
  );
  if (projectInstall) {
    return {
      scope: projectInstall.scope,
      projectPath: projectInstall.projectPath
    };
  }
  const userInstall = installations.find((inst) => inst.scope === "user");
  if (userInstall) {
    return { scope: userInstall.scope };
  }
  return {
    scope: installations[0].scope,
    projectPath: installations[0].projectPath
  };
}
async function installPluginOp(plugin, scope = "user") {
  assertInstallableScope(scope);
  const { name: pluginName, marketplace: marketplaceName } = parsePluginIdentifier(plugin);
  let foundPlugin;
  let foundMarketplace;
  let marketplaceInstallLocation;
  if (marketplaceName) {
    const pluginInfo = await getPluginById(plugin);
    if (pluginInfo) {
      foundPlugin = pluginInfo.entry;
      foundMarketplace = marketplaceName;
      marketplaceInstallLocation = pluginInfo.marketplaceInstallLocation;
    }
  } else {
    const marketplaces = await loadKnownMarketplacesConfig();
    for (const [mktName, mktConfig] of Object.entries(marketplaces)) {
      try {
        const marketplace = await getMarketplace(mktName);
        const pluginEntry = marketplace.plugins.find((p) => p.name === pluginName);
        if (pluginEntry) {
          foundPlugin = pluginEntry;
          foundMarketplace = mktName;
          marketplaceInstallLocation = mktConfig.installLocation;
          break;
        }
      } catch (error) {
        logError(toError(error));
        continue;
      }
    }
  }
  if (!foundPlugin || !foundMarketplace) {
    const location = marketplaceName ? `marketplace "${marketplaceName}"` : "any configured marketplace";
    return {
      success: false,
      message: `Plugin "${pluginName}" not found in ${location}`
    };
  }
  const entry = foundPlugin;
  const pluginId = `${entry.name}@${foundMarketplace}`;
  const result = await installResolvedPlugin({
    pluginId,
    entry,
    scope,
    marketplaceInstallLocation
  });
  if (!result.ok) {
    switch (result.reason) {
      case "local-source-no-location":
        return {
          success: false,
          message: `Cannot install local plugin "${result.pluginName}" without marketplace install location`
        };
      case "settings-write-failed":
        return {
          success: false,
          message: `Failed to update settings: ${result.message}`
        };
      case "resolution-failed":
        return {
          success: false,
          message: formatResolutionError(result.resolution)
        };
      case "blocked-by-policy":
        return {
          success: false,
          message: `Plugin "${result.pluginName}" is blocked by your organization's policy and cannot be installed`
        };
      case "dependency-blocked-by-policy":
        return {
          success: false,
          message: `Plugin "${result.pluginName}" depends on "${result.blockedDependency}", which is blocked by your organization's policy`
        };
    }
  }
  return {
    success: true,
    message: `Successfully installed plugin: ${pluginId} (scope: ${scope})${result.depNote}`,
    pluginId,
    pluginName: entry.name,
    scope
  };
}
async function uninstallPluginOp(plugin, scope = "user", deleteDataDir = true) {
  assertInstallableScope(scope);
  const { enabled, disabled } = await loadAllPlugins();
  const allPlugins = [...enabled, ...disabled];
  const foundPlugin = findPluginByIdentifier(plugin, allPlugins);
  const settingSource = scopeToSettingSource(scope);
  const settings = getSettingsForSource(settingSource);
  let pluginId;
  let pluginName;
  if (foundPlugin) {
    pluginId = Object.keys(settings?.enabledPlugins ?? {}).find(
      (k) => k === plugin || k === foundPlugin.name || k.startsWith(`${foundPlugin.name}@`)
    ) ?? (plugin.includes("@") ? plugin : foundPlugin.name);
    pluginName = foundPlugin.name;
  } else {
    const resolved = resolveDelistedPluginId(plugin);
    if (!resolved) {
      return {
        success: false,
        message: `Plugin "${plugin}" not found in installed plugins`
      };
    }
    pluginId = resolved.pluginId;
    pluginName = resolved.pluginName;
  }
  const projectPath = getProjectPathForScope(scope);
  const installedData = loadInstalledPluginsV2();
  const installations = installedData.plugins[pluginId];
  const scopeInstallation = installations?.find(
    (i) => i.scope === scope && i.projectPath === projectPath
  );
  if (!scopeInstallation) {
    const { scope: actualScope } = getPluginInstallationFromV2(pluginId);
    if (actualScope !== scope && installations && installations.length > 0) {
      if (actualScope === "project") {
        return {
          success: false,
          message: `Plugin "${plugin}" is enabled at project scope (.claude/settings.json, shared with your team). To disable just for you: blaude plugin disable ${plugin} --scope local`
        };
      }
      return {
        success: false,
        message: `Plugin "${plugin}" is installed in ${actualScope} scope, not ${scope}. Use --scope ${actualScope} to uninstall.`
      };
    }
    return {
      success: false,
      message: `Plugin "${plugin}" is not installed in ${scope} scope. Use --scope to specify the correct scope.`
    };
  }
  const installPath = scopeInstallation.installPath;
  const newEnabledPlugins = {
    ...settings?.enabledPlugins
  };
  newEnabledPlugins[pluginId] = void 0;
  updateSettingsForSource(settingSource, {
    enabledPlugins: newEnabledPlugins
  });
  clearAllCaches();
  removePluginInstallation(pluginId, scope, projectPath);
  const updatedData = loadInstalledPluginsV2();
  const remainingInstallations = updatedData.plugins[pluginId];
  const isLastScope = !remainingInstallations || remainingInstallations.length === 0;
  if (isLastScope && installPath) {
    await markPluginVersionOrphaned(installPath);
  }
  if (isLastScope) {
    deletePluginOptions(pluginId);
    if (deleteDataDir) {
      await deletePluginDataDir(pluginId);
    }
  }
  const reverseDependents = findReverseDependents(pluginId, allPlugins);
  const depWarn = formatReverseDependentsSuffix(reverseDependents);
  return {
    success: true,
    message: `Successfully uninstalled plugin: ${pluginName} (scope: ${scope})${depWarn}`,
    pluginId,
    pluginName,
    scope,
    reverseDependents: reverseDependents.length > 0 ? reverseDependents : void 0
  };
}
async function setPluginEnabledOp(plugin, enabled, scope) {
  const operation = enabled ? "enable" : "disable";
  if (isBuiltinPluginId(plugin)) {
    const { error: error2 } = updateSettingsForSource("userSettings", {
      enabledPlugins: {
        ...getSettingsForSource("userSettings")?.enabledPlugins,
        [plugin]: enabled
      }
    });
    if (error2) {
      return {
        success: false,
        message: `Failed to ${operation} built-in plugin: ${error2.message}`
      };
    }
    clearAllCaches();
    const { name: pluginName2 } = parsePluginIdentifier(plugin);
    return {
      success: true,
      message: `Successfully ${operation}d built-in plugin: ${pluginName2}`,
      pluginId: plugin,
      pluginName: pluginName2,
      scope: "user"
    };
  }
  if (scope) {
    assertInstallableScope(scope);
  }
  let pluginId;
  let resolvedScope;
  const found = findPluginInSettings(plugin);
  if (scope) {
    resolvedScope = scope;
    if (found) {
      pluginId = found.pluginId;
    } else if (plugin.includes("@")) {
      pluginId = plugin;
    } else {
      return {
        success: false,
        message: `Plugin "${plugin}" not found in settings. Use plugin@marketplace format.`
      };
    }
  } else if (found) {
    pluginId = found.pluginId;
    resolvedScope = found.scope;
  } else if (plugin.includes("@")) {
    pluginId = plugin;
    resolvedScope = "user";
  } else {
    return {
      success: false,
      message: `Plugin "${plugin}" not found in any editable settings scope. Use plugin@marketplace format.`
    };
  }
  if (enabled && isPluginBlockedByPolicy(pluginId)) {
    return {
      success: false,
      message: `Plugin "${pluginId}" is blocked by your organization's policy and cannot be enabled`
    };
  }
  const settingSource = scopeToSettingSource(resolvedScope);
  const scopeSettingsValue = getSettingsForSource(settingSource)?.enabledPlugins?.[pluginId];
  const SCOPE_PRECEDENCE = {
    user: 0,
    project: 1,
    local: 2
  };
  const isOverride = scope && found && SCOPE_PRECEDENCE[scope] > SCOPE_PRECEDENCE[found.scope];
  if (scope && scopeSettingsValue === void 0 && found && found.scope !== scope && !isOverride) {
    return {
      success: false,
      message: `Plugin "${plugin}" is installed at ${found.scope} scope, not ${scope}. Use --scope ${found.scope} or omit --scope to auto-detect.`
    };
  }
  const isCurrentlyEnabled = scope && !isOverride ? scopeSettingsValue === true : getPluginEditableScopes().has(pluginId);
  if (enabled === isCurrentlyEnabled) {
    return {
      success: false,
      message: `Plugin "${plugin}" is already ${enabled ? "enabled" : "disabled"}${scope ? ` at ${scope} scope` : ""}`
    };
  }
  let reverseDependents;
  if (!enabled) {
    const { enabled: loadedEnabled, disabled } = await loadAllPlugins();
    const rdeps = findReverseDependents(pluginId, [
      ...loadedEnabled,
      ...disabled
    ]);
    if (rdeps.length > 0) reverseDependents = rdeps;
  }
  const { error } = updateSettingsForSource(settingSource, {
    enabledPlugins: {
      ...getSettingsForSource(settingSource)?.enabledPlugins,
      [pluginId]: enabled
    }
  });
  if (error) {
    return {
      success: false,
      message: `Failed to ${operation} plugin: ${error.message}`
    };
  }
  clearAllCaches();
  const { name: pluginName } = parsePluginIdentifier(pluginId);
  const depWarn = formatReverseDependentsSuffix(reverseDependents);
  return {
    success: true,
    message: `Successfully ${operation}d plugin: ${pluginName} (scope: ${resolvedScope})${depWarn}`,
    pluginId,
    pluginName,
    scope: resolvedScope,
    reverseDependents
  };
}
async function enablePluginOp(plugin, scope) {
  return setPluginEnabledOp(plugin, true, scope);
}
async function disablePluginOp(plugin, scope) {
  return setPluginEnabledOp(plugin, false, scope);
}
async function disableAllPluginsOp() {
  const enabledPlugins = getPluginEditableScopes();
  if (enabledPlugins.size === 0) {
    return { success: true, message: "No enabled plugins to disable" };
  }
  const disabled = [];
  const errors = [];
  for (const [pluginId] of enabledPlugins) {
    const result = await setPluginEnabledOp(pluginId, false);
    if (result.success) {
      disabled.push(pluginId);
    } else {
      errors.push(`${pluginId}: ${result.message}`);
    }
  }
  if (errors.length > 0) {
    return {
      success: false,
      message: `Disabled ${disabled.length} ${plural(disabled.length, "plugin")}, ${errors.length} failed:
${errors.join("\n")}`
    };
  }
  return {
    success: true,
    message: `Disabled ${disabled.length} ${plural(disabled.length, "plugin")}`
  };
}
async function updatePluginOp(plugin, scope) {
  const { name: pluginName, marketplace: marketplaceName } = parsePluginIdentifier(plugin);
  const pluginId = marketplaceName ? `${pluginName}@${marketplaceName}` : plugin;
  const pluginInfo = await getPluginById(plugin);
  if (!pluginInfo) {
    return {
      success: false,
      message: `Plugin "${pluginName}" not found`,
      pluginId,
      scope
    };
  }
  const { entry, marketplaceInstallLocation } = pluginInfo;
  const diskData = loadInstalledPluginsFromDisk();
  const installations = diskData.plugins[pluginId];
  if (!installations || installations.length === 0) {
    return {
      success: false,
      message: `Plugin "${pluginName}" is not installed`,
      pluginId,
      scope
    };
  }
  const projectPath = getProjectPathForScope(scope);
  const installation = installations.find(
    (inst) => inst.scope === scope && inst.projectPath === projectPath
  );
  if (!installation) {
    const scopeDesc = projectPath ? `${scope} (${projectPath})` : scope;
    return {
      success: false,
      message: `Plugin "${pluginName}" is not installed at scope ${scopeDesc}`,
      pluginId,
      scope
    };
  }
  return performPluginUpdate({
    pluginId,
    pluginName,
    entry,
    marketplaceInstallLocation,
    installation,
    scope,
    projectPath
  });
}
async function performPluginUpdate({
  pluginId,
  pluginName,
  entry,
  marketplaceInstallLocation,
  installation,
  scope,
  projectPath
}) {
  const fs = getFsImplementation();
  const oldVersion = installation.version;
  let sourcePath;
  let newVersion;
  let shouldCleanupSource = false;
  let gitCommitSha;
  if (typeof entry.source !== "string") {
    const cacheResult = await cachePlugin(entry.source, {
      manifest: { name: entry.name }
    });
    sourcePath = cacheResult.path;
    shouldCleanupSource = true;
    gitCommitSha = cacheResult.gitCommitSha;
    newVersion = await calculatePluginVersion(
      pluginId,
      entry.source,
      cacheResult.manifest,
      cacheResult.path,
      entry.version,
      cacheResult.gitCommitSha
    );
  } else {
    let marketplaceStats;
    try {
      marketplaceStats = await fs.stat(marketplaceInstallLocation);
    } catch (e) {
      if (isENOENT(e)) {
        return {
          success: false,
          message: `Marketplace directory not found at ${marketplaceInstallLocation}`,
          pluginId,
          scope
        };
      }
      throw e;
    }
    const marketplaceDir = marketplaceStats.isDirectory() ? marketplaceInstallLocation : dirname(marketplaceInstallLocation);
    sourcePath = join(marketplaceDir, entry.source);
    try {
      await fs.stat(sourcePath);
    } catch (e) {
      if (isENOENT(e)) {
        return {
          success: false,
          message: `Plugin source not found at ${sourcePath}`,
          pluginId,
          scope
        };
      }
      throw e;
    }
    let pluginManifest;
    const manifestPath = join(sourcePath, ".claude-plugin", "plugin.json");
    try {
      pluginManifest = await loadPluginManifest(
        manifestPath,
        entry.name,
        entry.source
      );
    } catch {
    }
    newVersion = await calculatePluginVersion(
      pluginId,
      entry.source,
      pluginManifest,
      sourcePath,
      entry.version
    );
  }
  try {
    let versionedPath = getVersionedCachePath(pluginId, newVersion);
    const zipPath = getVersionedZipCachePath(pluginId, newVersion);
    const isUpToDate = installation.version === newVersion || installation.installPath === versionedPath || installation.installPath === zipPath;
    if (isUpToDate) {
      return {
        success: true,
        message: `${pluginName} is already at the latest version (${newVersion}).`,
        pluginId,
        newVersion,
        oldVersion,
        alreadyUpToDate: true,
        scope
      };
    }
    versionedPath = await copyPluginToVersionedCache(
      sourcePath,
      pluginId,
      newVersion,
      entry
    );
    const oldVersionPath = installation.installPath;
    updateInstallationPathOnDisk(
      pluginId,
      scope,
      projectPath,
      versionedPath,
      newVersion,
      gitCommitSha
    );
    if (oldVersionPath && oldVersionPath !== versionedPath) {
      const updatedDiskData = loadInstalledPluginsFromDisk();
      const isOldVersionStillReferenced = Object.values(
        updatedDiskData.plugins
      ).some(
        (pluginInstallations) => pluginInstallations.some((inst) => inst.installPath === oldVersionPath)
      );
      if (!isOldVersionStillReferenced) {
        await markPluginVersionOrphaned(oldVersionPath);
      }
    }
    const scopeDesc = projectPath ? `${scope} (${projectPath})` : scope;
    const message = `Plugin "${pluginName}" updated from ${oldVersion || "unknown"} to ${newVersion} for scope ${scopeDesc}. Restart to apply changes.`;
    return {
      success: true,
      message,
      pluginId,
      newVersion,
      oldVersion,
      scope
    };
  } finally {
    if (shouldCleanupSource && sourcePath !== getVersionedCachePath(pluginId, newVersion)) {
      await fs.rm(sourcePath, { recursive: true, force: true });
    }
  }
}
var VALID_INSTALLABLE_SCOPES, VALID_UPDATE_SCOPES;
var init_pluginOperations = __esm({
  "src/services/plugins/pluginOperations.ts"() {
    init_state();
    init_builtinPlugins();
    init_errors();
    init_fsOperations();
    init_log();
    init_cacheUtils();
    init_dependencyResolver();
    init_installedPluginsManager();
    init_marketplaceManager();
    init_pluginDirectories();
    init_pluginIdentifier();
    init_pluginInstallationHelpers();
    init_pluginLoader();
    init_pluginOptionsStorage();
    init_pluginPolicy();
    init_pluginStartupCheck();
    init_pluginVersioning();
    init_settings();
    init_stringUtils();
    VALID_INSTALLABLE_SCOPES = ["user", "project", "local"];
    VALID_UPDATE_SCOPES = [
      "user",
      "project",
      "local",
      "managed"
    ];
  }
});

export {
  VALID_INSTALLABLE_SCOPES,
  VALID_UPDATE_SCOPES,
  isInstallableScope,
  isPluginEnabledAtProjectScope,
  getPluginInstallationFromV2,
  installPluginOp,
  uninstallPluginOp,
  enablePluginOp,
  disablePluginOp,
  disableAllPluginsOp,
  updatePluginOp,
  init_pluginOperations
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3NlcnZpY2VzL3BsdWdpbnMvcGx1Z2luT3BlcmF0aW9ucy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBDb3JlIHBsdWdpbiBvcGVyYXRpb25zIChpbnN0YWxsLCB1bmluc3RhbGwsIGVuYWJsZSwgZGlzYWJsZSwgdXBkYXRlKVxuICpcbiAqIFRoaXMgbW9kdWxlIHByb3ZpZGVzIHB1cmUgbGlicmFyeSBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgdXNlZCBieSBib3RoOlxuICogLSBDTEkgY29tbWFuZHMgKGBjbGF1ZGUgcGx1Z2luIGluc3RhbGwvdW5pbnN0YWxsL2VuYWJsZS9kaXNhYmxlL3VwZGF0ZWApXG4gKiAtIEludGVyYWN0aXZlIFVJIChNYW5hZ2VQbHVnaW5zLnRzeClcbiAqXG4gKiBGdW5jdGlvbnMgaW4gdGhpcyBtb2R1bGU6XG4gKiAtIERvIE5PVCBjYWxsIHByb2Nlc3MuZXhpdCgpXG4gKiAtIERvIE5PVCB3cml0ZSB0byBjb25zb2xlXG4gKiAtIFJldHVybiByZXN1bHQgb2JqZWN0cyBpbmRpY2F0aW5nIHN1Y2Nlc3MvZmFpbHVyZSB3aXRoIG1lc3NhZ2VzXG4gKiAtIENhbiB0aHJvdyBlcnJvcnMgZm9yIHVuZXhwZWN0ZWQgZmFpbHVyZXNcbiAqL1xuaW1wb3J0IHsgZGlybmFtZSwgam9pbiB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBnZXRPcmlnaW5hbEN3ZCB9IGZyb20gJy4uLy4uL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB7IGlzQnVpbHRpblBsdWdpbklkIH0gZnJvbSAnLi4vLi4vcGx1Z2lucy9idWlsdGluUGx1Z2lucy5qcydcbmltcG9ydCB0eXBlIHsgTG9hZGVkUGx1Z2luLCBQbHVnaW5NYW5pZmVzdCB9IGZyb20gJy4uLy4uL3R5cGVzL3BsdWdpbi5qcydcbmltcG9ydCB7IGlzRU5PRU5ULCB0b0Vycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXJyb3JzLmpzJ1xuaW1wb3J0IHsgZ2V0RnNJbXBsZW1lbnRhdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxzL2ZzT3BlcmF0aW9ucy5qcydcbmltcG9ydCB7IGxvZ0Vycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nLmpzJ1xuaW1wb3J0IHtcbiAgY2xlYXJBbGxDYWNoZXMsXG4gIG1hcmtQbHVnaW5WZXJzaW9uT3JwaGFuZWQsXG59IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvY2FjaGVVdGlscy5qcydcbmltcG9ydCB7XG4gIGZpbmRSZXZlcnNlRGVwZW5kZW50cyxcbiAgZm9ybWF0UmV2ZXJzZURlcGVuZGVudHNTdWZmaXgsXG59IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvZGVwZW5kZW5jeVJlc29sdmVyLmpzJ1xuaW1wb3J0IHtcbiAgbG9hZEluc3RhbGxlZFBsdWdpbnNGcm9tRGlzayxcbiAgbG9hZEluc3RhbGxlZFBsdWdpbnNWMixcbiAgcmVtb3ZlUGx1Z2luSW5zdGFsbGF0aW9uLFxuICB1cGRhdGVJbnN0YWxsYXRpb25QYXRoT25EaXNrLFxufSBmcm9tICcuLi8uLi91dGlscy9wbHVnaW5zL2luc3RhbGxlZFBsdWdpbnNNYW5hZ2VyLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0TWFya2V0cGxhY2UsXG4gIGdldFBsdWdpbkJ5SWQsXG4gIGxvYWRLbm93bk1hcmtldHBsYWNlc0NvbmZpZyxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvcGx1Z2lucy9tYXJrZXRwbGFjZU1hbmFnZXIuanMnXG5pbXBvcnQgeyBkZWxldGVQbHVnaW5EYXRhRGlyIH0gZnJvbSAnLi4vLi4vdXRpbHMvcGx1Z2lucy9wbHVnaW5EaXJlY3Rvcmllcy5qcydcbmltcG9ydCB7XG4gIHBhcnNlUGx1Z2luSWRlbnRpZmllcixcbiAgc2NvcGVUb1NldHRpbmdTb3VyY2UsXG59IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvcGx1Z2luSWRlbnRpZmllci5qcydcbmltcG9ydCB7XG4gIGZvcm1hdFJlc29sdXRpb25FcnJvcixcbiAgaW5zdGFsbFJlc29sdmVkUGx1Z2luLFxufSBmcm9tICcuLi8uLi91dGlscy9wbHVnaW5zL3BsdWdpbkluc3RhbGxhdGlvbkhlbHBlcnMuanMnXG5pbXBvcnQge1xuICBjYWNoZVBsdWdpbixcbiAgY29weVBsdWdpblRvVmVyc2lvbmVkQ2FjaGUsXG4gIGdldFZlcnNpb25lZENhY2hlUGF0aCxcbiAgZ2V0VmVyc2lvbmVkWmlwQ2FjaGVQYXRoLFxuICBsb2FkQWxsUGx1Z2lucyxcbiAgbG9hZFBsdWdpbk1hbmlmZXN0LFxufSBmcm9tICcuLi8uLi91dGlscy9wbHVnaW5zL3BsdWdpbkxvYWRlci5qcydcbmltcG9ydCB7IGRlbGV0ZVBsdWdpbk9wdGlvbnMgfSBmcm9tICcuLi8uLi91dGlscy9wbHVnaW5zL3BsdWdpbk9wdGlvbnNTdG9yYWdlLmpzJ1xuaW1wb3J0IHsgaXNQbHVnaW5CbG9ja2VkQnlQb2xpY3kgfSBmcm9tICcuLi8uLi91dGlscy9wbHVnaW5zL3BsdWdpblBvbGljeS5qcydcbmltcG9ydCB7IGdldFBsdWdpbkVkaXRhYmxlU2NvcGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcGx1Z2lucy9wbHVnaW5TdGFydHVwQ2hlY2suanMnXG5pbXBvcnQgeyBjYWxjdWxhdGVQbHVnaW5WZXJzaW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvcGx1Z2lucy9wbHVnaW5WZXJzaW9uaW5nLmpzJ1xuaW1wb3J0IHR5cGUge1xuICBQbHVnaW5NYXJrZXRwbGFjZUVudHJ5LFxuICBQbHVnaW5TY29wZSxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvcGx1Z2lucy9zY2hlbWFzLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0U2V0dGluZ3NGb3JTb3VyY2UsXG4gIHVwZGF0ZVNldHRpbmdzRm9yU291cmNlLFxufSBmcm9tICcuLi8uLi91dGlscy9zZXR0aW5ncy9zZXR0aW5ncy5qcydcbmltcG9ydCB7IHBsdXJhbCB9IGZyb20gJy4uLy4uL3V0aWxzL3N0cmluZ1V0aWxzLmpzJ1xuXG4vKiogVmFsaWQgaW5zdGFsbGFibGUgc2NvcGVzIChleGNsdWRlcyAnbWFuYWdlZCcgd2hpY2ggY2FuIG9ubHkgYmUgaW5zdGFsbGVkIGZyb20gbWFuYWdlZC1zZXR0aW5ncy5qc29uKSAqL1xuZXhwb3J0IGNvbnN0IFZBTElEX0lOU1RBTExBQkxFX1NDT1BFUyA9IFsndXNlcicsICdwcm9qZWN0JywgJ2xvY2FsJ10gYXMgY29uc3RcblxuLyoqIEluc3RhbGxhdGlvbiBzY29wZSB0eXBlIGRlcml2ZWQgZnJvbSBWQUxJRF9JTlNUQUxMQUJMRV9TQ09QRVMgKi9cbmV4cG9ydCB0eXBlIEluc3RhbGxhYmxlU2NvcGUgPSAodHlwZW9mIFZBTElEX0lOU1RBTExBQkxFX1NDT1BFUylbbnVtYmVyXVxuXG4vKiogVmFsaWQgc2NvcGVzIGZvciB1cGRhdGUgb3BlcmF0aW9ucyAoaW5jbHVkZXMgJ21hbmFnZWQnIHNpbmNlIG1hbmFnZWQgcGx1Z2lucyBjYW4gYmUgdXBkYXRlZCkgKi9cbmV4cG9ydCBjb25zdCBWQUxJRF9VUERBVEVfU0NPUEVTOiByZWFkb25seSBQbHVnaW5TY29wZVtdID0gW1xuICAndXNlcicsXG4gICdwcm9qZWN0JyxcbiAgJ2xvY2FsJyxcbiAgJ21hbmFnZWQnLFxuXSBhcyBjb25zdFxuXG4vKipcbiAqIEFzc2VydCB0aGF0IGEgc2NvcGUgaXMgYSB2YWxpZCBpbnN0YWxsYWJsZSBzY29wZSBhdCBydW50aW1lXG4gKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIHRvIHZhbGlkYXRlXG4gKiBAdGhyb3dzIEVycm9yIGlmIHNjb3BlIGlzIG5vdCBhIHZhbGlkIGluc3RhbGxhYmxlIHNjb3BlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRJbnN0YWxsYWJsZVNjb3BlKFxuICBzY29wZTogc3RyaW5nLFxuKTogYXNzZXJ0cyBzY29wZSBpcyBJbnN0YWxsYWJsZVNjb3BlIHtcbiAgaWYgKCFWQUxJRF9JTlNUQUxMQUJMRV9TQ09QRVMuaW5jbHVkZXMoc2NvcGUgYXMgSW5zdGFsbGFibGVTY29wZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgSW52YWxpZCBzY29wZSBcIiR7c2NvcGV9XCIuIE11c3QgYmUgb25lIG9mOiAke1ZBTElEX0lOU1RBTExBQkxFX1NDT1BFUy5qb2luKCcsICcpfWAsXG4gICAgKVxuICB9XG59XG5cbi8qKlxuICogVHlwZSBndWFyZCB0byBjaGVjayBpZiBhIHNjb3BlIGlzIGFuIGluc3RhbGxhYmxlIHNjb3BlIChub3QgJ21hbmFnZWQnKS5cbiAqIFVzZSB0aGlzIGZvciB0eXBlIG5hcnJvd2luZyBpbiBjb25kaXRpb25hbCBibG9ja3MuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0luc3RhbGxhYmxlU2NvcGUoXG4gIHNjb3BlOiBQbHVnaW5TY29wZSxcbik6IHNjb3BlIGlzIEluc3RhbGxhYmxlU2NvcGUge1xuICByZXR1cm4gVkFMSURfSU5TVEFMTEFCTEVfU0NPUEVTLmluY2x1ZGVzKHNjb3BlIGFzIEluc3RhbGxhYmxlU2NvcGUpXG59XG5cbi8qKlxuICogR2V0IHRoZSBwcm9qZWN0IHBhdGggZm9yIHNjb3BlcyB0aGF0IGFyZSBwcm9qZWN0LXNwZWNpZmljLlxuICogUmV0dXJucyB0aGUgb3JpZ2luYWwgY3dkIGZvciAncHJvamVjdCcgYW5kICdsb2NhbCcgc2NvcGVzLCB1bmRlZmluZWQgb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdFBhdGhGb3JTY29wZShzY29wZTogUGx1Z2luU2NvcGUpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICByZXR1cm4gc2NvcGUgPT09ICdwcm9qZWN0JyB8fCBzY29wZSA9PT0gJ2xvY2FsJyA/IGdldE9yaWdpbmFsQ3dkKCkgOiB1bmRlZmluZWRcbn1cblxuLyoqXG4gKiBJcyB0aGlzIHBsdWdpbiBlbmFibGVkICh2YWx1ZSA9PT0gdHJ1ZSkgaW4gLmNsYXVkZS9zZXR0aW5ncy5qc29uP1xuICpcbiAqIERpc3RpbmN0IGZyb20gVjIgaW5zdGFsbGVkX3BsdWdpbnMuanNvbiBzY29wZTogdGhhdCBmaWxlIHRyYWNrcyB3aGVyZSBhXG4gKiBwbHVnaW4gd2FzICppbnN0YWxsZWQgZnJvbSosIGJ1dCB0aGUgc2FtZSBwbHVnaW4gY2FuIGFsc28gYmUgZW5hYmxlZCBhdFxuICogcHJvamVjdCBzY29wZSB2aWEgc2V0dGluZ3MuIFRoZSB1bmluc3RhbGwgVUkgbmVlZHMgdG8gY2hlY2sgVEhJUywgYmVjYXVzZVxuICogYSB1c2VyLXNjb3BlIGluc3RhbGwgd2l0aCBhIHByb2plY3Qtc2NvcGUgZW5hYmxlbWVudCBtZWFucyBcInVuaW5zdGFsbFwiXG4gKiB3b3VsZCBzdWNjZWVkIGF0IHJlbW92aW5nIHRoZSB1c2VyIGluc3RhbGwgd2hpbGUgbGVhdmluZyB0aGUgcHJvamVjdFxuICogZW5hYmxlbWVudCBhY3RpdmUgXHUyMDE0IHRoZSBwbHVnaW4ga2VlcHMgcnVubmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGx1Z2luRW5hYmxlZEF0UHJvamVjdFNjb3BlKHBsdWdpbklkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBnZXRTZXR0aW5nc0ZvclNvdXJjZSgncHJvamVjdFNldHRpbmdzJyk/LmVuYWJsZWRQbHVnaW5zPy5bcGx1Z2luSWRdID09PSB0cnVlXG4gIClcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUmVzdWx0IFR5cGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogUmVzdWx0IG9mIGEgcGx1Z2luIG9wZXJhdGlvblxuICovXG5leHBvcnQgdHlwZSBQbHVnaW5PcGVyYXRpb25SZXN1bHQgPSB7XG4gIHN1Y2Nlc3M6IGJvb2xlYW5cbiAgbWVzc2FnZTogc3RyaW5nXG4gIHBsdWdpbklkPzogc3RyaW5nXG4gIHBsdWdpbk5hbWU/OiBzdHJpbmdcbiAgc2NvcGU/OiBQbHVnaW5TY29wZVxuICAvKiogUGx1Z2lucyB0aGF0IGRlY2xhcmUgdGhpcyBwbHVnaW4gYXMgYSBkZXBlbmRlbmN5ICh3YXJuaW5nIG9uIHVuaW5zdGFsbC9kaXNhYmxlKSAqL1xuICByZXZlcnNlRGVwZW5kZW50cz86IHN0cmluZ1tdXG59XG5cbi8qKlxuICogUmVzdWx0IG9mIGEgcGx1Z2luIHVwZGF0ZSBvcGVyYXRpb25cbiAqL1xuZXhwb3J0IHR5cGUgUGx1Z2luVXBkYXRlUmVzdWx0ID0ge1xuICBzdWNjZXNzOiBib29sZWFuXG4gIG1lc3NhZ2U6IHN0cmluZ1xuICBwbHVnaW5JZD86IHN0cmluZ1xuICBuZXdWZXJzaW9uPzogc3RyaW5nXG4gIG9sZFZlcnNpb24/OiBzdHJpbmdcbiAgYWxyZWFkeVVwVG9EYXRlPzogYm9vbGVhblxuICBzY29wZT86IFBsdWdpblNjb3BlXG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEhlbHBlciBGdW5jdGlvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBTZWFyY2ggYWxsIGVkaXRhYmxlIHNldHRpbmdzIHNjb3BlcyBmb3IgYSBwbHVnaW4gSUQgbWF0Y2hpbmcgdGhlIGdpdmVuIGlucHV0LlxuICpcbiAqIElmIGBwbHVnaW5gIGNvbnRhaW5zIGBAYCwgaXQncyB0cmVhdGVkIGFzIGEgZnVsbCBwbHVnaW5JZCBhbmQgcmV0dXJuZWQgaWZcbiAqIGZvdW5kIGluIGFueSBzY29wZS4gSWYgYHBsdWdpbmAgaXMgYSBiYXJlIG5hbWUsIHNlYXJjaGVzIGZvciBhbnkga2V5XG4gKiBzdGFydGluZyB3aXRoIGB7cGx1Z2lufUBgIGluIGFueSBzY29wZS5cbiAqXG4gKiBSZXR1cm5zIHRoZSBtb3N0IHNwZWNpZmljIHNjb3BlIHdoZXJlIHRoZSBwbHVnaW4gaXMgbWVudGlvbmVkIChyZWdhcmRsZXNzXG4gKiBvZiBlbmFibGVkL2Rpc2FibGVkIHN0YXRlKSBwbHVzIHRoZSByZXNvbHZlZCBmdWxsIHBsdWdpbklkLlxuICpcbiAqIFByZWNlZGVuY2U6IGxvY2FsID4gcHJvamVjdCA+IHVzZXIgKG1vc3Qgc3BlY2lmaWMgd2lucykuXG4gKi9cbmZ1bmN0aW9uIGZpbmRQbHVnaW5JblNldHRpbmdzKHBsdWdpbjogc3RyaW5nKToge1xuICBwbHVnaW5JZDogc3RyaW5nXG4gIHNjb3BlOiBJbnN0YWxsYWJsZVNjb3BlXG59IHwgbnVsbCB7XG4gIGNvbnN0IGhhc01hcmtldHBsYWNlID0gcGx1Z2luLmluY2x1ZGVzKCdAJylcbiAgLy8gTW9zdCBzcGVjaWZpYyBmaXJzdCBcdTIwMTQgZmlyc3QgbWF0Y2ggd2luc1xuICBjb25zdCBzZWFyY2hPcmRlcjogSW5zdGFsbGFibGVTY29wZVtdID0gWydsb2NhbCcsICdwcm9qZWN0JywgJ3VzZXInXVxuXG4gIGZvciAoY29uc3Qgc2NvcGUgb2Ygc2VhcmNoT3JkZXIpIHtcbiAgICBjb25zdCBlbmFibGVkUGx1Z2lucyA9IGdldFNldHRpbmdzRm9yU291cmNlKFxuICAgICAgc2NvcGVUb1NldHRpbmdTb3VyY2Uoc2NvcGUpLFxuICAgICk/LmVuYWJsZWRQbHVnaW5zXG4gICAgaWYgKCFlbmFibGVkUGx1Z2lucykgY29udGludWVcblxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGVuYWJsZWRQbHVnaW5zKSkge1xuICAgICAgaWYgKGhhc01hcmtldHBsYWNlID8ga2V5ID09PSBwbHVnaW4gOiBrZXkuc3RhcnRzV2l0aChgJHtwbHVnaW59QGApKSB7XG4gICAgICAgIHJldHVybiB7IHBsdWdpbklkOiBrZXksIHNjb3BlIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gZmluZCBhIHBsdWdpbiBmcm9tIGxvYWRlZCBwbHVnaW5zXG4gKi9cbmZ1bmN0aW9uIGZpbmRQbHVnaW5CeUlkZW50aWZpZXIoXG4gIHBsdWdpbjogc3RyaW5nLFxuICBwbHVnaW5zOiBMb2FkZWRQbHVnaW5bXSxcbik6IExvYWRlZFBsdWdpbiB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IHsgbmFtZSwgbWFya2V0cGxhY2UgfSA9IHBhcnNlUGx1Z2luSWRlbnRpZmllcihwbHVnaW4pXG5cbiAgcmV0dXJuIHBsdWdpbnMuZmluZChwID0+IHtcbiAgICAvLyBDaGVjayBleGFjdCBuYW1lIG1hdGNoXG4gICAgaWYgKHAubmFtZSA9PT0gcGx1Z2luIHx8IHAubmFtZSA9PT0gbmFtZSkgcmV0dXJuIHRydWVcblxuICAgIC8vIElmIG1hcmtldHBsYWNlIHNwZWNpZmllZCwgY2hlY2sgaWYgaXQgbWF0Y2hlcyB0aGUgc291cmNlXG4gICAgaWYgKG1hcmtldHBsYWNlICYmIHAuc291cmNlKSB7XG4gICAgICByZXR1cm4gcC5uYW1lID09PSBuYW1lICYmIHAuc291cmNlLmluY2x1ZGVzKGBAJHttYXJrZXRwbGFjZX1gKVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9KVxufVxuXG4vKipcbiAqIFJlc29sdmUgYSBwbHVnaW4gSUQgZnJvbSBWMiBpbnN0YWxsZWQgcGx1Z2lucyBkYXRhIGZvciBhIHBsdWdpbiB0aGF0IG1heVxuICogaGF2ZSBiZWVuIGRlbGlzdGVkIGZyb20gaXRzIG1hcmtldHBsYWNlLiBSZXR1cm5zIG51bGwgaWYgdGhlIHBsdWdpbiBpcyBub3RcbiAqIGZvdW5kIGluIFYyIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVEZWxpc3RlZFBsdWdpbklkKFxuICBwbHVnaW46IHN0cmluZyxcbik6IHsgcGx1Z2luSWQ6IHN0cmluZzsgcGx1Z2luTmFtZTogc3RyaW5nIH0gfCBudWxsIHtcbiAgY29uc3QgeyBuYW1lIH0gPSBwYXJzZVBsdWdpbklkZW50aWZpZXIocGx1Z2luKVxuICBjb25zdCBpbnN0YWxsZWREYXRhID0gbG9hZEluc3RhbGxlZFBsdWdpbnNWMigpXG5cbiAgLy8gVHJ5IGV4YWN0IG1hdGNoIGZpcnN0LCB0aGVuIHNlYXJjaCBieSBuYW1lXG4gIGlmIChpbnN0YWxsZWREYXRhLnBsdWdpbnNbcGx1Z2luXT8ubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHsgcGx1Z2luSWQ6IHBsdWdpbiwgcGx1Z2luTmFtZTogbmFtZSB9XG4gIH1cblxuICBjb25zdCBtYXRjaGluZ0tleSA9IE9iamVjdC5rZXlzKGluc3RhbGxlZERhdGEucGx1Z2lucykuZmluZChrZXkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZToga2V5TmFtZSB9ID0gcGFyc2VQbHVnaW5JZGVudGlmaWVyKGtleSlcbiAgICByZXR1cm4ga2V5TmFtZSA9PT0gbmFtZSAmJiAoaW5zdGFsbGVkRGF0YS5wbHVnaW5zW2tleV0/Lmxlbmd0aCA/PyAwKSA+IDBcbiAgfSlcblxuICBpZiAobWF0Y2hpbmdLZXkpIHtcbiAgICByZXR1cm4geyBwbHVnaW5JZDogbWF0Y2hpbmdLZXksIHBsdWdpbk5hbWU6IG5hbWUgfVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuLyoqXG4gKiBHZXQgdGhlIG1vc3QgcmVsZXZhbnQgaW5zdGFsbGF0aW9uIGZvciBhIHBsdWdpbiBmcm9tIFYyIGRhdGEuXG4gKiBGb3IgcHJvamVjdC9sb2NhbCBzY29wZWQgcGx1Z2lucywgcHJpb3JpdGl6ZXMgaW5zdGFsbGF0aW9ucyBtYXRjaGluZyB0aGUgY3VycmVudCBwcm9qZWN0LlxuICogUHJpb3JpdHkgb3JkZXI6IGxvY2FsIChtYXRjaGluZyBwcm9qZWN0KSA+IHByb2plY3QgKG1hdGNoaW5nIHByb2plY3QpID4gdXNlciA+IGZpcnN0IGF2YWlsYWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGx1Z2luSW5zdGFsbGF0aW9uRnJvbVYyKHBsdWdpbklkOiBzdHJpbmcpOiB7XG4gIHNjb3BlOiBQbHVnaW5TY29wZVxuICBwcm9qZWN0UGF0aD86IHN0cmluZ1xufSB7XG4gIGNvbnN0IGluc3RhbGxlZERhdGEgPSBsb2FkSW5zdGFsbGVkUGx1Z2luc1YyKClcbiAgY29uc3QgaW5zdGFsbGF0aW9ucyA9IGluc3RhbGxlZERhdGEucGx1Z2luc1twbHVnaW5JZF1cblxuICBpZiAoIWluc3RhbGxhdGlvbnMgfHwgaW5zdGFsbGF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4geyBzY29wZTogJ3VzZXInIH1cbiAgfVxuXG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0UGF0aCA9IGdldE9yaWdpbmFsQ3dkKClcblxuICAvLyBGaW5kIGluc3RhbGxhdGlvbnMgYnkgcHJpb3JpdHk6IGxvY2FsID4gcHJvamVjdCA+IHVzZXIgPiBtYW5hZ2VkXG4gIGNvbnN0IGxvY2FsSW5zdGFsbCA9IGluc3RhbGxhdGlvbnMuZmluZChcbiAgICBpbnN0ID0+IGluc3Quc2NvcGUgPT09ICdsb2NhbCcgJiYgaW5zdC5wcm9qZWN0UGF0aCA9PT0gY3VycmVudFByb2plY3RQYXRoLFxuICApXG4gIGlmIChsb2NhbEluc3RhbGwpIHtcbiAgICByZXR1cm4geyBzY29wZTogbG9jYWxJbnN0YWxsLnNjb3BlLCBwcm9qZWN0UGF0aDogbG9jYWxJbnN0YWxsLnByb2plY3RQYXRoIH1cbiAgfVxuXG4gIGNvbnN0IHByb2plY3RJbnN0YWxsID0gaW5zdGFsbGF0aW9ucy5maW5kKFxuICAgIGluc3QgPT4gaW5zdC5zY29wZSA9PT0gJ3Byb2plY3QnICYmIGluc3QucHJvamVjdFBhdGggPT09IGN1cnJlbnRQcm9qZWN0UGF0aCxcbiAgKVxuICBpZiAocHJvamVjdEluc3RhbGwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2NvcGU6IHByb2plY3RJbnN0YWxsLnNjb3BlLFxuICAgICAgcHJvamVjdFBhdGg6IHByb2plY3RJbnN0YWxsLnByb2plY3RQYXRoLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHVzZXJJbnN0YWxsID0gaW5zdGFsbGF0aW9ucy5maW5kKGluc3QgPT4gaW5zdC5zY29wZSA9PT0gJ3VzZXInKVxuICBpZiAodXNlckluc3RhbGwpIHtcbiAgICByZXR1cm4geyBzY29wZTogdXNlckluc3RhbGwuc2NvcGUgfVxuICB9XG5cbiAgLy8gRmFsbCBiYWNrIHRvIGZpcnN0IGluc3RhbGxhdGlvbiAoY291bGQgYmUgbWFuYWdlZClcbiAgcmV0dXJuIHtcbiAgICBzY29wZTogaW5zdGFsbGF0aW9uc1swXSEuc2NvcGUsXG4gICAgcHJvamVjdFBhdGg6IGluc3RhbGxhdGlvbnNbMF0hLnByb2plY3RQYXRoLFxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvcmUgT3BlcmF0aW9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIEluc3RhbGwgYSBwbHVnaW4gKHNldHRpbmdzLWZpcnN0KS5cbiAqXG4gKiBPcmRlciBvZiBvcGVyYXRpb25zOlxuICogICAxLiBTZWFyY2ggbWF0ZXJpYWxpemVkIG1hcmtldHBsYWNlcyBmb3IgdGhlIHBsdWdpblxuICogICAyLiBXcml0ZSBzZXR0aW5ncyAoVEhFIEFDVElPTiBcdTIwMTQgZGVjbGFyZXMgaW50ZW50KVxuICogICAzLiBDYWNoZSBwbHVnaW4gKyByZWNvcmQgdmVyc2lvbiBoaW50IChtYXRlcmlhbGl6YXRpb24pXG4gKlxuICogTWFya2V0cGxhY2UgcmVjb25jaWxpYXRpb24gaXMgTk9UIHRoaXMgZnVuY3Rpb24ncyByZXNwb25zaWJpbGl0eSBcdTIwMTQgc3RhcnR1cFxuICogcmVjb25jaWxlIGhhbmRsZXMgZGVjbGFyZWQtYnV0LW5vdC1tYXRlcmlhbGl6ZWQgbWFya2V0cGxhY2VzLiBJZiB0aGVcbiAqIG1hcmtldHBsYWNlIGlzbid0IGZvdW5kLCBcIm5vdCBmb3VuZFwiIGlzIHRoZSBjb3JyZWN0IGVycm9yLlxuICpcbiAqIEBwYXJhbSBwbHVnaW4gUGx1Z2luIGlkZW50aWZpZXIgKG5hbWUgb3IgcGx1Z2luQG1hcmtldHBsYWNlKVxuICogQHBhcmFtIHNjb3BlIEluc3RhbGxhdGlvbiBzY29wZTogdXNlciwgcHJvamVjdCwgb3IgbG9jYWwgKGRlZmF1bHRzIHRvICd1c2VyJylcbiAqIEByZXR1cm5zIFJlc3VsdCBpbmRpY2F0aW5nIHN1Y2Nlc3MvZmFpbHVyZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5zdGFsbFBsdWdpbk9wKFxuICBwbHVnaW46IHN0cmluZyxcbiAgc2NvcGU6IEluc3RhbGxhYmxlU2NvcGUgPSAndXNlcicsXG4pOiBQcm9taXNlPFBsdWdpbk9wZXJhdGlvblJlc3VsdD4ge1xuICBhc3NlcnRJbnN0YWxsYWJsZVNjb3BlKHNjb3BlKVxuXG4gIGNvbnN0IHsgbmFtZTogcGx1Z2luTmFtZSwgbWFya2V0cGxhY2U6IG1hcmtldHBsYWNlTmFtZSB9ID1cbiAgICBwYXJzZVBsdWdpbklkZW50aWZpZXIocGx1Z2luKVxuXG4gIC8vIFx1MjUwMFx1MjUwMCBTZWFyY2ggbWF0ZXJpYWxpemVkIG1hcmtldHBsYWNlcyBmb3IgdGhlIHBsdWdpbiBcdTI1MDBcdTI1MDBcbiAgbGV0IGZvdW5kUGx1Z2luOiBQbHVnaW5NYXJrZXRwbGFjZUVudHJ5IHwgdW5kZWZpbmVkXG4gIGxldCBmb3VuZE1hcmtldHBsYWNlOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgbGV0IG1hcmtldHBsYWNlSW5zdGFsbExvY2F0aW9uOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICBpZiAobWFya2V0cGxhY2VOYW1lKSB7XG4gICAgY29uc3QgcGx1Z2luSW5mbyA9IGF3YWl0IGdldFBsdWdpbkJ5SWQocGx1Z2luKVxuICAgIGlmIChwbHVnaW5JbmZvKSB7XG4gICAgICBmb3VuZFBsdWdpbiA9IHBsdWdpbkluZm8uZW50cnlcbiAgICAgIGZvdW5kTWFya2V0cGxhY2UgPSBtYXJrZXRwbGFjZU5hbWVcbiAgICAgIG1hcmtldHBsYWNlSW5zdGFsbExvY2F0aW9uID0gcGx1Z2luSW5mby5tYXJrZXRwbGFjZUluc3RhbGxMb2NhdGlvblxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtYXJrZXRwbGFjZXMgPSBhd2FpdCBsb2FkS25vd25NYXJrZXRwbGFjZXNDb25maWcoKVxuICAgIGZvciAoY29uc3QgW21rdE5hbWUsIG1rdENvbmZpZ10gb2YgT2JqZWN0LmVudHJpZXMobWFya2V0cGxhY2VzKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbWFya2V0cGxhY2UgPSBhd2FpdCBnZXRNYXJrZXRwbGFjZShta3ROYW1lKVxuICAgICAgICBjb25zdCBwbHVnaW5FbnRyeSA9IG1hcmtldHBsYWNlLnBsdWdpbnMuZmluZChwID0+IHAubmFtZSA9PT0gcGx1Z2luTmFtZSlcbiAgICAgICAgaWYgKHBsdWdpbkVudHJ5KSB7XG4gICAgICAgICAgZm91bmRQbHVnaW4gPSBwbHVnaW5FbnRyeVxuICAgICAgICAgIGZvdW5kTWFya2V0cGxhY2UgPSBta3ROYW1lXG4gICAgICAgICAgbWFya2V0cGxhY2VJbnN0YWxsTG9jYXRpb24gPSBta3RDb25maWcuaW5zdGFsbExvY2F0aW9uXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgbG9nRXJyb3IodG9FcnJvcihlcnJvcikpXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKCFmb3VuZFBsdWdpbiB8fCAhZm91bmRNYXJrZXRwbGFjZSkge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gbWFya2V0cGxhY2VOYW1lXG4gICAgICA/IGBtYXJrZXRwbGFjZSBcIiR7bWFya2V0cGxhY2VOYW1lfVwiYFxuICAgICAgOiAnYW55IGNvbmZpZ3VyZWQgbWFya2V0cGxhY2UnXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogYFBsdWdpbiBcIiR7cGx1Z2luTmFtZX1cIiBub3QgZm91bmQgaW4gJHtsb2NhdGlvbn1gLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGVudHJ5ID0gZm91bmRQbHVnaW5cbiAgY29uc3QgcGx1Z2luSWQgPSBgJHtlbnRyeS5uYW1lfUAke2ZvdW5kTWFya2V0cGxhY2V9YFxuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGluc3RhbGxSZXNvbHZlZFBsdWdpbih7XG4gICAgcGx1Z2luSWQsXG4gICAgZW50cnksXG4gICAgc2NvcGUsXG4gICAgbWFya2V0cGxhY2VJbnN0YWxsTG9jYXRpb24sXG4gIH0pXG5cbiAgaWYgKCFyZXN1bHQub2spIHtcbiAgICBzd2l0Y2ggKHJlc3VsdC5yZWFzb24pIHtcbiAgICAgIGNhc2UgJ2xvY2FsLXNvdXJjZS1uby1sb2NhdGlvbic6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgbWVzc2FnZTogYENhbm5vdCBpbnN0YWxsIGxvY2FsIHBsdWdpbiBcIiR7cmVzdWx0LnBsdWdpbk5hbWV9XCIgd2l0aG91dCBtYXJrZXRwbGFjZSBpbnN0YWxsIGxvY2F0aW9uYCxcbiAgICAgICAgfVxuICAgICAgY2FzZSAnc2V0dGluZ3Mtd3JpdGUtZmFpbGVkJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICBtZXNzYWdlOiBgRmFpbGVkIHRvIHVwZGF0ZSBzZXR0aW5nczogJHtyZXN1bHQubWVzc2FnZX1gLFxuICAgICAgICB9XG4gICAgICBjYXNlICdyZXNvbHV0aW9uLWZhaWxlZCc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgbWVzc2FnZTogZm9ybWF0UmVzb2x1dGlvbkVycm9yKHJlc3VsdC5yZXNvbHV0aW9uKSxcbiAgICAgICAgfVxuICAgICAgY2FzZSAnYmxvY2tlZC1ieS1wb2xpY3knOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgIG1lc3NhZ2U6IGBQbHVnaW4gXCIke3Jlc3VsdC5wbHVnaW5OYW1lfVwiIGlzIGJsb2NrZWQgYnkgeW91ciBvcmdhbml6YXRpb24ncyBwb2xpY3kgYW5kIGNhbm5vdCBiZSBpbnN0YWxsZWRgLFxuICAgICAgICB9XG4gICAgICBjYXNlICdkZXBlbmRlbmN5LWJsb2NrZWQtYnktcG9saWN5JzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICBtZXNzYWdlOiBgUGx1Z2luIFwiJHtyZXN1bHQucGx1Z2luTmFtZX1cIiBkZXBlbmRzIG9uIFwiJHtyZXN1bHQuYmxvY2tlZERlcGVuZGVuY3l9XCIsIHdoaWNoIGlzIGJsb2NrZWQgYnkgeW91ciBvcmdhbml6YXRpb24ncyBwb2xpY3lgLFxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzdWNjZXNzOiB0cnVlLFxuICAgIG1lc3NhZ2U6IGBTdWNjZXNzZnVsbHkgaW5zdGFsbGVkIHBsdWdpbjogJHtwbHVnaW5JZH0gKHNjb3BlOiAke3Njb3BlfSkke3Jlc3VsdC5kZXBOb3RlfWAsXG4gICAgcGx1Z2luSWQsXG4gICAgcGx1Z2luTmFtZTogZW50cnkubmFtZSxcbiAgICBzY29wZSxcbiAgfVxufVxuXG4vKipcbiAqIFVuaW5zdGFsbCBhIHBsdWdpblxuICpcbiAqIEBwYXJhbSBwbHVnaW4gUGx1Z2luIG5hbWUgb3IgcGx1Z2luQG1hcmtldHBsYWNlIGlkZW50aWZpZXJcbiAqIEBwYXJhbSBzY29wZSBVbmluc3RhbGwgZnJvbSBzY29wZTogdXNlciwgcHJvamVjdCwgb3IgbG9jYWwgKGRlZmF1bHRzIHRvICd1c2VyJylcbiAqIEByZXR1cm5zIFJlc3VsdCBpbmRpY2F0aW5nIHN1Y2Nlc3MvZmFpbHVyZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdW5pbnN0YWxsUGx1Z2luT3AoXG4gIHBsdWdpbjogc3RyaW5nLFxuICBzY29wZTogSW5zdGFsbGFibGVTY29wZSA9ICd1c2VyJyxcbiAgZGVsZXRlRGF0YURpciA9IHRydWUsXG4pOiBQcm9taXNlPFBsdWdpbk9wZXJhdGlvblJlc3VsdD4ge1xuICAvLyBWYWxpZGF0ZSBzY29wZSBhdCBydW50aW1lIGZvciBlYXJseSBlcnJvciBkZXRlY3Rpb25cbiAgYXNzZXJ0SW5zdGFsbGFibGVTY29wZShzY29wZSlcblxuICBjb25zdCB7IGVuYWJsZWQsIGRpc2FibGVkIH0gPSBhd2FpdCBsb2FkQWxsUGx1Z2lucygpXG4gIGNvbnN0IGFsbFBsdWdpbnMgPSBbLi4uZW5hYmxlZCwgLi4uZGlzYWJsZWRdXG5cbiAgLy8gRmluZCB0aGUgcGx1Z2luXG4gIGNvbnN0IGZvdW5kUGx1Z2luID0gZmluZFBsdWdpbkJ5SWRlbnRpZmllcihwbHVnaW4sIGFsbFBsdWdpbnMpXG5cbiAgY29uc3Qgc2V0dGluZ1NvdXJjZSA9IHNjb3BlVG9TZXR0aW5nU291cmNlKHNjb3BlKVxuICBjb25zdCBzZXR0aW5ncyA9IGdldFNldHRpbmdzRm9yU291cmNlKHNldHRpbmdTb3VyY2UpXG5cbiAgbGV0IHBsdWdpbklkOiBzdHJpbmdcbiAgbGV0IHBsdWdpbk5hbWU6IHN0cmluZ1xuXG4gIGlmIChmb3VuZFBsdWdpbikge1xuICAgIC8vIEZpbmQgdGhlIG1hdGNoaW5nIHNldHRpbmdzIGtleSBmb3IgdGhpcyBwbHVnaW4gKG1heSBkaWZmZXIgZnJvbSBgcGx1Z2luYFxuICAgIC8vIGlmIHVzZXIgZ2F2ZSBzaG9ydCBuYW1lIGJ1dCBzZXR0aW5ncyBoYXMgcGx1Z2luQG1hcmtldHBsYWNlKVxuICAgIHBsdWdpbklkID1cbiAgICAgIE9iamVjdC5rZXlzKHNldHRpbmdzPy5lbmFibGVkUGx1Z2lucyA/PyB7fSkuZmluZChcbiAgICAgICAgayA9PlxuICAgICAgICAgIGsgPT09IHBsdWdpbiB8fFxuICAgICAgICAgIGsgPT09IGZvdW5kUGx1Z2luLm5hbWUgfHxcbiAgICAgICAgICBrLnN0YXJ0c1dpdGgoYCR7Zm91bmRQbHVnaW4ubmFtZX1AYCksXG4gICAgICApID8/IChwbHVnaW4uaW5jbHVkZXMoJ0AnKSA/IHBsdWdpbiA6IGZvdW5kUGx1Z2luLm5hbWUpXG4gICAgcGx1Z2luTmFtZSA9IGZvdW5kUGx1Z2luLm5hbWVcbiAgfSBlbHNlIHtcbiAgICAvLyBQbHVnaW4gbm90IGZvdW5kIHZpYSBtYXJrZXRwbGFjZSBsb29rdXAgXHUyMDE0IGl0IG1heSBoYXZlIGJlZW4gZGVsaXN0ZWQuXG4gICAgLy8gRmFsbCBiYWNrIHRvIGluc3RhbGxlZF9wbHVnaW5zLmpzb24gKFYyKSB3aGljaCB0cmFja3MgaW5zdGFsbGF0aW9uc1xuICAgIC8vIGluZGVwZW5kZW50bHkgb2YgbWFya2V0cGxhY2Ugc3RhdGUuXG4gICAgY29uc3QgcmVzb2x2ZWQgPSByZXNvbHZlRGVsaXN0ZWRQbHVnaW5JZChwbHVnaW4pXG4gICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IGBQbHVnaW4gXCIke3BsdWdpbn1cIiBub3QgZm91bmQgaW4gaW5zdGFsbGVkIHBsdWdpbnNgLFxuICAgICAgfVxuICAgIH1cbiAgICBwbHVnaW5JZCA9IHJlc29sdmVkLnBsdWdpbklkXG4gICAgcGx1Z2luTmFtZSA9IHJlc29sdmVkLnBsdWdpbk5hbWVcbiAgfVxuXG4gIC8vIENoZWNrIGlmIHRoZSBwbHVnaW4gaXMgaW5zdGFsbGVkIGluIHRoaXMgc2NvcGUgKGluIFYyIGZpbGUpXG4gIGNvbnN0IHByb2plY3RQYXRoID0gZ2V0UHJvamVjdFBhdGhGb3JTY29wZShzY29wZSlcbiAgY29uc3QgaW5zdGFsbGVkRGF0YSA9IGxvYWRJbnN0YWxsZWRQbHVnaW5zVjIoKVxuICBjb25zdCBpbnN0YWxsYXRpb25zID0gaW5zdGFsbGVkRGF0YS5wbHVnaW5zW3BsdWdpbklkXVxuICBjb25zdCBzY29wZUluc3RhbGxhdGlvbiA9IGluc3RhbGxhdGlvbnM/LmZpbmQoXG4gICAgaSA9PiBpLnNjb3BlID09PSBzY29wZSAmJiBpLnByb2plY3RQYXRoID09PSBwcm9qZWN0UGF0aCxcbiAgKVxuXG4gIGlmICghc2NvcGVJbnN0YWxsYXRpb24pIHtcbiAgICAvLyBUcnkgdG8gZmluZCB3aGVyZSB0aGUgcGx1Z2luIGlzIGFjdHVhbGx5IGluc3RhbGxlZCB0byBwcm92aWRlIGEgaGVscGZ1bCBlcnJvclxuICAgIGNvbnN0IHsgc2NvcGU6IGFjdHVhbFNjb3BlIH0gPSBnZXRQbHVnaW5JbnN0YWxsYXRpb25Gcm9tVjIocGx1Z2luSWQpXG4gICAgaWYgKGFjdHVhbFNjb3BlICE9PSBzY29wZSAmJiBpbnN0YWxsYXRpb25zICYmIGluc3RhbGxhdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gUHJvamVjdCBzY29wZSBpcyBzcGVjaWFsOiAuY2xhdWRlL3NldHRpbmdzLmpzb24gaXMgc2hhcmVkIHdpdGggdGhlIHRlYW0uXG4gICAgICAvLyBQb2ludCB1c2VycyBhdCB0aGUgbG9jYWwtb3ZlcnJpZGUgZXNjYXBlIGhhdGNoIGluc3RlYWQgb2YgLS1zY29wZSBwcm9qZWN0LlxuICAgICAgaWYgKGFjdHVhbFNjb3BlID09PSAncHJvamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICBtZXNzYWdlOiBgUGx1Z2luIFwiJHtwbHVnaW59XCIgaXMgZW5hYmxlZCBhdCBwcm9qZWN0IHNjb3BlICguY2xhdWRlL3NldHRpbmdzLmpzb24sIHNoYXJlZCB3aXRoIHlvdXIgdGVhbSkuIFRvIGRpc2FibGUganVzdCBmb3IgeW91OiBibGF1ZGUgcGx1Z2luIGRpc2FibGUgJHtwbHVnaW59IC0tc2NvcGUgbG9jYWxgLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogYFBsdWdpbiBcIiR7cGx1Z2lufVwiIGlzIGluc3RhbGxlZCBpbiAke2FjdHVhbFNjb3BlfSBzY29wZSwgbm90ICR7c2NvcGV9LiBVc2UgLS1zY29wZSAke2FjdHVhbFNjb3BlfSB0byB1bmluc3RhbGwuYCxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogYFBsdWdpbiBcIiR7cGx1Z2lufVwiIGlzIG5vdCBpbnN0YWxsZWQgaW4gJHtzY29wZX0gc2NvcGUuIFVzZSAtLXNjb3BlIHRvIHNwZWNpZnkgdGhlIGNvcnJlY3Qgc2NvcGUuYCxcbiAgICB9XG4gIH1cblxuICBjb25zdCBpbnN0YWxsUGF0aCA9IHNjb3BlSW5zdGFsbGF0aW9uLmluc3RhbGxQYXRoXG5cbiAgLy8gUmVtb3ZlIHRoZSBwbHVnaW4gZnJvbSB0aGUgYXBwcm9wcmlhdGUgc2V0dGluZ3MgZmlsZSAoZGVsZXRlIGtleSBlbnRpcmVseSlcbiAgLy8gVXNlIHVuZGVmaW5lZCB0byBzaWduYWwgZGVsZXRpb24gdmlhIG1lcmdlV2l0aCBpbiB1cGRhdGVTZXR0aW5nc0ZvclNvdXJjZVxuICBjb25zdCBuZXdFbmFibGVkUGx1Z2luczogUmVjb3JkPHN0cmluZywgYm9vbGVhbiB8IHN0cmluZ1tdIHwgdW5kZWZpbmVkPiA9IHtcbiAgICAuLi5zZXR0aW5ncz8uZW5hYmxlZFBsdWdpbnMsXG4gIH1cbiAgbmV3RW5hYmxlZFBsdWdpbnNbcGx1Z2luSWRdID0gdW5kZWZpbmVkXG4gIHVwZGF0ZVNldHRpbmdzRm9yU291cmNlKHNldHRpbmdTb3VyY2UsIHtcbiAgICBlbmFibGVkUGx1Z2luczogbmV3RW5hYmxlZFBsdWdpbnMsXG4gIH0pXG5cbiAgY2xlYXJBbGxDYWNoZXMoKVxuXG4gIC8vIFJlbW92ZSBmcm9tIGluc3RhbGxlZF9wbHVnaW5zX3YyLmpzb24gZm9yIHRoaXMgc2NvcGVcbiAgcmVtb3ZlUGx1Z2luSW5zdGFsbGF0aW9uKHBsdWdpbklkLCBzY29wZSwgcHJvamVjdFBhdGgpXG5cbiAgY29uc3QgdXBkYXRlZERhdGEgPSBsb2FkSW5zdGFsbGVkUGx1Z2luc1YyKClcbiAgY29uc3QgcmVtYWluaW5nSW5zdGFsbGF0aW9ucyA9IHVwZGF0ZWREYXRhLnBsdWdpbnNbcGx1Z2luSWRdXG4gIGNvbnN0IGlzTGFzdFNjb3BlID1cbiAgICAhcmVtYWluaW5nSW5zdGFsbGF0aW9ucyB8fCByZW1haW5pbmdJbnN0YWxsYXRpb25zLmxlbmd0aCA9PT0gMFxuICBpZiAoaXNMYXN0U2NvcGUgJiYgaW5zdGFsbFBhdGgpIHtcbiAgICBhd2FpdCBtYXJrUGx1Z2luVmVyc2lvbk9ycGhhbmVkKGluc3RhbGxQYXRoKVxuICB9XG4gIC8vIFNlcGFyYXRlIGZyb20gdGhlIGAmJiBpbnN0YWxsUGF0aGAgZ3VhcmQgYWJvdmUgXHUyMDE0IGRlbGV0ZVBsdWdpbk9wdGlvbnMgb25seVxuICAvLyBuZWVkcyBwbHVnaW5JZCwgbm90IGluc3RhbGxQYXRoLiBMYXN0IHNjb3BlIHJlbW92ZWQgXHUyMTkyIHdpcGUgc3RvcmVkIG9wdGlvbnNcbiAgLy8gYW5kIHNlY3JldHMuIEJlZm9yZSB0aGlzLCB1bmluc3RhbGxpbmcgbGVmdCBvcnBoYW5lZCBlbnRyaWVzIGluXG4gIC8vIHNldHRpbmdzLnBsdWdpbkNvbmZpZ3MgKGluY2x1ZGluZyB0aGUgbGVnYWN5IHVuZ2F0ZWQgbWNwU2VydmVycyBzdWIta2V5XG4gIC8vIGZyb20gdGhlIE1DUEIgQ29uZmlndXJlIGZsb3cpIGFuZCBrZXljaGFpbiBwbHVnaW5TZWNyZXRzIGZvcmV2ZXIuIE5vXG4gIC8vIGZlYXR1cmUgZ2F0ZTogZGVsZXRlUGx1Z2luT3B0aW9ucyBuby1vcHMgd2hlbiBub3RoaW5nIGlzIHN0b3JlZCwgYW5kXG4gIC8vIHBsdWdpbkNvbmZpZ3MubWNwU2VydmVycyBpcyB3cml0dGVuIHVuZ2F0ZWQgc28gaXRzIGNsZWFudXAgbXVzdCBydW5cbiAgLy8gdW5nYXRlZCB0b28uXG4gIGlmIChpc0xhc3RTY29wZSkge1xuICAgIGRlbGV0ZVBsdWdpbk9wdGlvbnMocGx1Z2luSWQpXG4gICAgaWYgKGRlbGV0ZURhdGFEaXIpIHtcbiAgICAgIGF3YWl0IGRlbGV0ZVBsdWdpbkRhdGFEaXIocGx1Z2luSWQpXG4gICAgfVxuICB9XG5cbiAgLy8gV2FybiAoZG9uJ3QgYmxvY2spIGlmIG90aGVyIGVuYWJsZWQgcGx1Z2lucyBkZXBlbmQgb24gdGhpcyBvbmUuXG4gIC8vIEJsb2NraW5nIGNyZWF0ZXMgdG9tYnN0b25lcyBcdTIwMTQgY2FuJ3QgdGVhciBkb3duIGEgZ3JhcGggd2l0aCBhIGRlbGlzdGVkXG4gIC8vIHBsdWdpbi4gTG9hZC10aW1lIHZlcmlmeUFuZERlbW90ZSBjYXRjaGVzIHRoZSBmYWxsb3V0LlxuICBjb25zdCByZXZlcnNlRGVwZW5kZW50cyA9IGZpbmRSZXZlcnNlRGVwZW5kZW50cyhwbHVnaW5JZCwgYWxsUGx1Z2lucylcbiAgY29uc3QgZGVwV2FybiA9IGZvcm1hdFJldmVyc2VEZXBlbmRlbnRzU3VmZml4KHJldmVyc2VEZXBlbmRlbnRzKVxuXG4gIHJldHVybiB7XG4gICAgc3VjY2VzczogdHJ1ZSxcbiAgICBtZXNzYWdlOiBgU3VjY2Vzc2Z1bGx5IHVuaW5zdGFsbGVkIHBsdWdpbjogJHtwbHVnaW5OYW1lfSAoc2NvcGU6ICR7c2NvcGV9KSR7ZGVwV2Fybn1gLFxuICAgIHBsdWdpbklkLFxuICAgIHBsdWdpbk5hbWUsXG4gICAgc2NvcGUsXG4gICAgcmV2ZXJzZURlcGVuZGVudHM6XG4gICAgICByZXZlcnNlRGVwZW5kZW50cy5sZW5ndGggPiAwID8gcmV2ZXJzZURlcGVuZGVudHMgOiB1bmRlZmluZWQsXG4gIH1cbn1cblxuLyoqXG4gKiBTZXQgcGx1Z2luIGVuYWJsZWQvZGlzYWJsZWQgc3RhdHVzIChzZXR0aW5ncy1maXJzdCkuXG4gKlxuICogUmVzb2x2ZXMgdGhlIHBsdWdpbiBJRCBhbmQgc2NvcGUgZnJvbSBzZXR0aW5ncyBcdTIwMTQgZG9lcyBOT1QgcHJlLWdhdGUgb25cbiAqIGluc3RhbGxlZF9wbHVnaW5zLmpzb24uIFNldHRpbmdzIGRlY2xhcmVzIGludGVudDsgaWYgdGhlIHBsdWdpbiBpc24ndFxuICogY2FjaGVkIHlldCwgdGhlIG5leHQgbG9hZCB3aWxsIGNhY2hlIGl0LlxuICpcbiAqIEBwYXJhbSBwbHVnaW4gUGx1Z2luIG5hbWUgb3IgcGx1Z2luQG1hcmtldHBsYWNlIGlkZW50aWZpZXJcbiAqIEBwYXJhbSBlbmFibGVkIHRydWUgdG8gZW5hYmxlLCBmYWxzZSB0byBkaXNhYmxlXG4gKiBAcGFyYW0gc2NvcGUgT3B0aW9uYWwgc2NvcGUuIElmIG5vdCBwcm92aWRlZCwgYXV0by1kZXRlY3RzIHRoZSBtb3N0IHNwZWNpZmljXG4gKiAgIHNjb3BlIHdoZXJlIHRoZSBwbHVnaW4gaXMgbWVudGlvbmVkIGluIHNldHRpbmdzLlxuICogQHJldHVybnMgUmVzdWx0IGluZGljYXRpbmcgc3VjY2Vzcy9mYWlsdXJlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRQbHVnaW5FbmFibGVkT3AoXG4gIHBsdWdpbjogc3RyaW5nLFxuICBlbmFibGVkOiBib29sZWFuLFxuICBzY29wZT86IEluc3RhbGxhYmxlU2NvcGUsXG4pOiBQcm9taXNlPFBsdWdpbk9wZXJhdGlvblJlc3VsdD4ge1xuICBjb25zdCBvcGVyYXRpb24gPSBlbmFibGVkID8gJ2VuYWJsZScgOiAnZGlzYWJsZSdcblxuICAvLyBCdWlsdC1pbiBwbHVnaW5zOiBhbHdheXMgdXNlIHVzZXItc2NvcGUgc2V0dGluZ3MsIGJ5cGFzcyB0aGUgbm9ybWFsXG4gIC8vIHNjb3BlLXJlc29sdXRpb24gKyBpbnN0YWxsZWRfcGx1Z2lucyBsb29rdXAgKHRoZXkncmUgbm90IGluc3RhbGxlZCkuXG4gIGlmIChpc0J1aWx0aW5QbHVnaW5JZChwbHVnaW4pKSB7XG4gICAgY29uc3QgeyBlcnJvciB9ID0gdXBkYXRlU2V0dGluZ3NGb3JTb3VyY2UoJ3VzZXJTZXR0aW5ncycsIHtcbiAgICAgIGVuYWJsZWRQbHVnaW5zOiB7XG4gICAgICAgIC4uLmdldFNldHRpbmdzRm9yU291cmNlKCd1c2VyU2V0dGluZ3MnKT8uZW5hYmxlZFBsdWdpbnMsXG4gICAgICAgIFtwbHVnaW5dOiBlbmFibGVkLFxuICAgICAgfSxcbiAgICB9KVxuICAgIGlmIChlcnJvcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IGBGYWlsZWQgdG8gJHtvcGVyYXRpb259IGJ1aWx0LWluIHBsdWdpbjogJHtlcnJvci5tZXNzYWdlfWAsXG4gICAgICB9XG4gICAgfVxuICAgIGNsZWFyQWxsQ2FjaGVzKClcbiAgICBjb25zdCB7IG5hbWU6IHBsdWdpbk5hbWUgfSA9IHBhcnNlUGx1Z2luSWRlbnRpZmllcihwbHVnaW4pXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOiBgU3VjY2Vzc2Z1bGx5ICR7b3BlcmF0aW9ufWQgYnVpbHQtaW4gcGx1Z2luOiAke3BsdWdpbk5hbWV9YCxcbiAgICAgIHBsdWdpbklkOiBwbHVnaW4sXG4gICAgICBwbHVnaW5OYW1lLFxuICAgICAgc2NvcGU6ICd1c2VyJyxcbiAgICB9XG4gIH1cblxuICBpZiAoc2NvcGUpIHtcbiAgICBhc3NlcnRJbnN0YWxsYWJsZVNjb3BlKHNjb3BlKVxuICB9XG5cbiAgLy8gXHUyNTAwXHUyNTAwIFJlc29sdmUgcGx1Z2luSWQgYW5kIHNjb3BlIGZyb20gc2V0dGluZ3MgXHUyNTAwXHUyNTAwXG4gIC8vIFNlYXJjaCBhY3Jvc3MgZWRpdGFibGUgc2NvcGVzIGZvciBhbnkgbWVudGlvbiAoZW5hYmxlZCBvciBkaXNhYmxlZCkgb2ZcbiAgLy8gdGhpcyBwbHVnaW4uIERvZXMgTk9UIHByZS1nYXRlIG9uIGluc3RhbGxlZF9wbHVnaW5zLmpzb24uXG4gIGxldCBwbHVnaW5JZDogc3RyaW5nXG4gIGxldCByZXNvbHZlZFNjb3BlOiBJbnN0YWxsYWJsZVNjb3BlXG5cbiAgY29uc3QgZm91bmQgPSBmaW5kUGx1Z2luSW5TZXR0aW5ncyhwbHVnaW4pXG5cbiAgaWYgKHNjb3BlKSB7XG4gICAgLy8gRXhwbGljaXQgc2NvcGU6IHVzZSBpdC4gUmVzb2x2ZSBwbHVnaW5JZCBmcm9tIHNldHRpbmdzIGlmIHBvc3NpYmxlLFxuICAgIC8vIG90aGVyd2lzZSByZXF1aXJlIGEgZnVsbCBwbHVnaW5AbWFya2V0cGxhY2UgaWRlbnRpZmllci5cbiAgICByZXNvbHZlZFNjb3BlID0gc2NvcGVcbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIHBsdWdpbklkID0gZm91bmQucGx1Z2luSWRcbiAgICB9IGVsc2UgaWYgKHBsdWdpbi5pbmNsdWRlcygnQCcpKSB7XG4gICAgICBwbHVnaW5JZCA9IHBsdWdpblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogYFBsdWdpbiBcIiR7cGx1Z2lufVwiIG5vdCBmb3VuZCBpbiBzZXR0aW5ncy4gVXNlIHBsdWdpbkBtYXJrZXRwbGFjZSBmb3JtYXQuYCxcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoZm91bmQpIHtcbiAgICAvLyBBdXRvLWRldGVjdCBzY29wZTogdXNlIHRoZSBtb3N0IHNwZWNpZmljIHNjb3BlIHdoZXJlIHRoZSBwbHVnaW4gaXNcbiAgICAvLyBtZW50aW9uZWQgaW4gc2V0dGluZ3MuXG4gICAgcGx1Z2luSWQgPSBmb3VuZC5wbHVnaW5JZFxuICAgIHJlc29sdmVkU2NvcGUgPSBmb3VuZC5zY29wZVxuICB9IGVsc2UgaWYgKHBsdWdpbi5pbmNsdWRlcygnQCcpKSB7XG4gICAgLy8gTm90IGluIGFueSBzZXR0aW5ncyBzY29wZSwgYnV0IGZ1bGwgcGx1Z2luSWQgZ2l2ZW4gXHUyMDE0IGRlZmF1bHQgdG8gdXNlclxuICAgIC8vIHNjb3BlIChtYXRjaGVzIGluc3RhbGwgZGVmYXVsdCkuIFRoaXMgYWxsb3dzIGVuYWJsaW5nIGEgcGx1Z2luIHRoYXRcbiAgICAvLyB3YXMgY2FjaGVkIGJ1dCBuZXZlciBkZWNsYXJlZC5cbiAgICBwbHVnaW5JZCA9IHBsdWdpblxuICAgIHJlc29sdmVkU2NvcGUgPSAndXNlcidcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBgUGx1Z2luIFwiJHtwbHVnaW59XCIgbm90IGZvdW5kIGluIGFueSBlZGl0YWJsZSBzZXR0aW5ncyBzY29wZS4gVXNlIHBsdWdpbkBtYXJrZXRwbGFjZSBmb3JtYXQuYCxcbiAgICB9XG4gIH1cblxuICAvLyBcdTI1MDBcdTI1MDAgUG9saWN5IGd1YXJkIFx1MjUwMFx1MjUwMFxuICAvLyBPcmctYmxvY2tlZCBwbHVnaW5zIGNhbm5vdCBiZSBlbmFibGVkIGF0IGFueSBzY29wZS4gQ2hlY2sgYWZ0ZXIgcGx1Z2luSWRcbiAgLy8gaXMgcmVzb2x2ZWQgc28gd2UgY2F0Y2ggYm90aCBmdWxsIGlkZW50aWZpZXJzIGFuZCBiYXJlLW5hbWUgbG9va3Vwcy5cbiAgaWYgKGVuYWJsZWQgJiYgaXNQbHVnaW5CbG9ja2VkQnlQb2xpY3kocGx1Z2luSWQpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogYFBsdWdpbiBcIiR7cGx1Z2luSWR9XCIgaXMgYmxvY2tlZCBieSB5b3VyIG9yZ2FuaXphdGlvbidzIHBvbGljeSBhbmQgY2Fubm90IGJlIGVuYWJsZWRgLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNldHRpbmdTb3VyY2UgPSBzY29wZVRvU2V0dGluZ1NvdXJjZShyZXNvbHZlZFNjb3BlKVxuICBjb25zdCBzY29wZVNldHRpbmdzVmFsdWUgPVxuICAgIGdldFNldHRpbmdzRm9yU291cmNlKHNldHRpbmdTb3VyY2UpPy5lbmFibGVkUGx1Z2lucz8uW3BsdWdpbklkXVxuXG4gIC8vIFx1MjUwMFx1MjUwMCBDcm9zcy1zY29wZSBoaW50OiBleHBsaWNpdCBzY29wZSBnaXZlbiBidXQgcGx1Z2luIGlzIGVsc2V3aGVyZSBcdTI1MDBcdTI1MDBcbiAgLy8gSWYgdGhlIHBsdWdpbiBpcyBhYnNlbnQgZnJvbSB0aGUgcmVxdWVzdGVkIHNjb3BlIGJ1dCBwcmVzZW50IGF0IGFcbiAgLy8gZGlmZmVyZW50IHNjb3BlLCBndWlkZSB0aGUgdXNlciB0byB0aGUgcmlnaHQgLS1zY29wZSBcdTIwMTQgVU5MRVNTIHRoZXkncmVcbiAgLy8gd3JpdGluZyB0byBhIGhpZ2hlci1wcmVjZWRlbmNlIHNjb3BlIHRvIG92ZXJyaWRlIGEgbG93ZXIgb25lXG4gIC8vIChlLmcuIGBkaXNhYmxlIC0tc2NvcGUgbG9jYWxgIHRvIG92ZXJyaWRlIGEgcHJvamVjdC1lbmFibGVkIHBsdWdpblxuICAvLyB3aXRob3V0IHRvdWNoaW5nIHRoZSBzaGFyZWQgLmNsYXVkZS9zZXR0aW5ncy5qc29uKS5cbiAgY29uc3QgU0NPUEVfUFJFQ0VERU5DRTogUmVjb3JkPEluc3RhbGxhYmxlU2NvcGUsIG51bWJlcj4gPSB7XG4gICAgdXNlcjogMCxcbiAgICBwcm9qZWN0OiAxLFxuICAgIGxvY2FsOiAyLFxuICB9XG4gIGNvbnN0IGlzT3ZlcnJpZGUgPVxuICAgIHNjb3BlICYmIGZvdW5kICYmIFNDT1BFX1BSRUNFREVOQ0Vbc2NvcGVdID4gU0NPUEVfUFJFQ0VERU5DRVtmb3VuZC5zY29wZV1cbiAgaWYgKFxuICAgIHNjb3BlICYmXG4gICAgc2NvcGVTZXR0aW5nc1ZhbHVlID09PSB1bmRlZmluZWQgJiZcbiAgICBmb3VuZCAmJlxuICAgIGZvdW5kLnNjb3BlICE9PSBzY29wZSAmJlxuICAgICFpc092ZXJyaWRlXG4gICkge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGBQbHVnaW4gXCIke3BsdWdpbn1cIiBpcyBpbnN0YWxsZWQgYXQgJHtmb3VuZC5zY29wZX0gc2NvcGUsIG5vdCAke3Njb3BlfS4gVXNlIC0tc2NvcGUgJHtmb3VuZC5zY29wZX0gb3Igb21pdCAtLXNjb3BlIHRvIGF1dG8tZGV0ZWN0LmAsXG4gICAgfVxuICB9XG5cbiAgLy8gXHUyNTAwXHUyNTAwIENoZWNrIGN1cnJlbnQgc3RhdGUgKGZvciBpZGVtcG90ZW5jeSBtZXNzYWdpbmcpIFx1MjUwMFx1MjUwMFxuICAvLyBXaGVuIGV4cGxpY2l0IHNjb3BlIGdpdmVuOiBjaGVjayB0aGF0IHNjb3BlJ3Mgc2V0dGluZ3MgdmFsdWUgZGlyZWN0bHlcbiAgLy8gKG1lcmdlZCBzdGF0ZSBjYW4gYmUgd3JvbmcgaWYgcGx1Z2luIGlzIGVuYWJsZWQgZWxzZXdoZXJlIGJ1dCBkaXNhYmxlZCBoZXJlKS5cbiAgLy8gV2hlbiBhdXRvLWRldGVjdGVkOiB1c2UgbWVyZ2VkIGVmZmVjdGl2ZSBzdGF0ZS5cbiAgLy8gV2hlbiBvdmVycmlkaW5nIGEgbG93ZXIgc2NvcGU6IGNoZWNrIG1lcmdlZCBzdGF0ZSBcdTIwMTQgc2NvcGVTZXR0aW5nc1ZhbHVlIGlzXG4gIC8vIHVuZGVmaW5lZCAocGx1Z2luIG5vdCBpbiB0aGlzIHNjb3BlIHlldCksIHdoaWNoIHdvdWxkIHJlYWQgYXMgXCJhbHJlYWR5XG4gIC8vIGRpc2FibGVkXCIsIGJ1dCB0aGUgd2hvbGUgcG9pbnQgb2YgdGhlIG92ZXJyaWRlIGlzIHRvIHdyaXRlIGFuIGV4cGxpY2l0XG4gIC8vIGBmYWxzZWAgdGhhdCBtYXNrcyB0aGUgbG93ZXIgc2NvcGUncyBgdHJ1ZWAuXG4gIGNvbnN0IGlzQ3VycmVudGx5RW5hYmxlZCA9XG4gICAgc2NvcGUgJiYgIWlzT3ZlcnJpZGVcbiAgICAgID8gc2NvcGVTZXR0aW5nc1ZhbHVlID09PSB0cnVlXG4gICAgICA6IGdldFBsdWdpbkVkaXRhYmxlU2NvcGVzKCkuaGFzKHBsdWdpbklkKVxuICBpZiAoZW5hYmxlZCA9PT0gaXNDdXJyZW50bHlFbmFibGVkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogYFBsdWdpbiBcIiR7cGx1Z2lufVwiIGlzIGFscmVhZHkgJHtlbmFibGVkID8gJ2VuYWJsZWQnIDogJ2Rpc2FibGVkJ30ke3Njb3BlID8gYCBhdCAke3Njb3BlfSBzY29wZWAgOiAnJ31gLFxuICAgIH1cbiAgfVxuXG4gIC8vIE9uIGRpc2FibGU6IGNhcHR1cmUgcmV2ZXJzZSBkZXBlbmRlbnRzIGZyb20gdGhlIFBSRS1kaXNhYmxlIHNuYXBzaG90LFxuICAvLyBiZWZvcmUgd2Ugd3JpdGUgc2V0dGluZ3MgYW5kIGNsZWFyIHRoZSBtZW1vaXplZCBwbHVnaW4gY2FjaGUuXG4gIGxldCByZXZlcnNlRGVwZW5kZW50czogc3RyaW5nW10gfCB1bmRlZmluZWRcbiAgaWYgKCFlbmFibGVkKSB7XG4gICAgY29uc3QgeyBlbmFibGVkOiBsb2FkZWRFbmFibGVkLCBkaXNhYmxlZCB9ID0gYXdhaXQgbG9hZEFsbFBsdWdpbnMoKVxuICAgIGNvbnN0IHJkZXBzID0gZmluZFJldmVyc2VEZXBlbmRlbnRzKHBsdWdpbklkLCBbXG4gICAgICAuLi5sb2FkZWRFbmFibGVkLFxuICAgICAgLi4uZGlzYWJsZWQsXG4gICAgXSlcbiAgICBpZiAocmRlcHMubGVuZ3RoID4gMCkgcmV2ZXJzZURlcGVuZGVudHMgPSByZGVwc1xuICB9XG5cbiAgLy8gXHUyNTAwXHUyNTAwIEFDVElPTjogd3JpdGUgc2V0dGluZ3MgXHUyNTAwXHUyNTAwXG4gIGNvbnN0IHsgZXJyb3IgfSA9IHVwZGF0ZVNldHRpbmdzRm9yU291cmNlKHNldHRpbmdTb3VyY2UsIHtcbiAgICBlbmFibGVkUGx1Z2luczoge1xuICAgICAgLi4uZ2V0U2V0dGluZ3NGb3JTb3VyY2Uoc2V0dGluZ1NvdXJjZSk/LmVuYWJsZWRQbHVnaW5zLFxuICAgICAgW3BsdWdpbklkXTogZW5hYmxlZCxcbiAgICB9LFxuICB9KVxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBgRmFpbGVkIHRvICR7b3BlcmF0aW9ufSBwbHVnaW46ICR7ZXJyb3IubWVzc2FnZX1gLFxuICAgIH1cbiAgfVxuXG4gIGNsZWFyQWxsQ2FjaGVzKClcblxuICBjb25zdCB7IG5hbWU6IHBsdWdpbk5hbWUgfSA9IHBhcnNlUGx1Z2luSWRlbnRpZmllcihwbHVnaW5JZClcbiAgY29uc3QgZGVwV2FybiA9IGZvcm1hdFJldmVyc2VEZXBlbmRlbnRzU3VmZml4KHJldmVyc2VEZXBlbmRlbnRzKVxuICByZXR1cm4ge1xuICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgbWVzc2FnZTogYFN1Y2Nlc3NmdWxseSAke29wZXJhdGlvbn1kIHBsdWdpbjogJHtwbHVnaW5OYW1lfSAoc2NvcGU6ICR7cmVzb2x2ZWRTY29wZX0pJHtkZXBXYXJufWAsXG4gICAgcGx1Z2luSWQsXG4gICAgcGx1Z2luTmFtZSxcbiAgICBzY29wZTogcmVzb2x2ZWRTY29wZSxcbiAgICByZXZlcnNlRGVwZW5kZW50cyxcbiAgfVxufVxuXG4vKipcbiAqIEVuYWJsZSBhIHBsdWdpblxuICpcbiAqIEBwYXJhbSBwbHVnaW4gUGx1Z2luIG5hbWUgb3IgcGx1Z2luQG1hcmtldHBsYWNlIGlkZW50aWZpZXJcbiAqIEBwYXJhbSBzY29wZSBPcHRpb25hbCBzY29wZS4gSWYgbm90IHByb3ZpZGVkLCBmaW5kcyB0aGUgbW9zdCBzcGVjaWZpYyBzY29wZSBmb3IgdGhlIGN1cnJlbnQgcHJvamVjdC5cbiAqIEByZXR1cm5zIFJlc3VsdCBpbmRpY2F0aW5nIHN1Y2Nlc3MvZmFpbHVyZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZW5hYmxlUGx1Z2luT3AoXG4gIHBsdWdpbjogc3RyaW5nLFxuICBzY29wZT86IEluc3RhbGxhYmxlU2NvcGUsXG4pOiBQcm9taXNlPFBsdWdpbk9wZXJhdGlvblJlc3VsdD4ge1xuICByZXR1cm4gc2V0UGx1Z2luRW5hYmxlZE9wKHBsdWdpbiwgdHJ1ZSwgc2NvcGUpXG59XG5cbi8qKlxuICogRGlzYWJsZSBhIHBsdWdpblxuICpcbiAqIEBwYXJhbSBwbHVnaW4gUGx1Z2luIG5hbWUgb3IgcGx1Z2luQG1hcmtldHBsYWNlIGlkZW50aWZpZXJcbiAqIEBwYXJhbSBzY29wZSBPcHRpb25hbCBzY29wZS4gSWYgbm90IHByb3ZpZGVkLCBmaW5kcyB0aGUgbW9zdCBzcGVjaWZpYyBzY29wZSBmb3IgdGhlIGN1cnJlbnQgcHJvamVjdC5cbiAqIEByZXR1cm5zIFJlc3VsdCBpbmRpY2F0aW5nIHN1Y2Nlc3MvZmFpbHVyZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGlzYWJsZVBsdWdpbk9wKFxuICBwbHVnaW46IHN0cmluZyxcbiAgc2NvcGU/OiBJbnN0YWxsYWJsZVNjb3BlLFxuKTogUHJvbWlzZTxQbHVnaW5PcGVyYXRpb25SZXN1bHQ+IHtcbiAgcmV0dXJuIHNldFBsdWdpbkVuYWJsZWRPcChwbHVnaW4sIGZhbHNlLCBzY29wZSlcbn1cblxuLyoqXG4gKiBEaXNhYmxlIGFsbCBlbmFibGVkIHBsdWdpbnNcbiAqXG4gKiBAcmV0dXJucyBSZXN1bHQgaW5kaWNhdGluZyBzdWNjZXNzL2ZhaWx1cmUgd2l0aCBjb3VudCBvZiBkaXNhYmxlZCBwbHVnaW5zXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkaXNhYmxlQWxsUGx1Z2luc09wKCk6IFByb21pc2U8UGx1Z2luT3BlcmF0aW9uUmVzdWx0PiB7XG4gIGNvbnN0IGVuYWJsZWRQbHVnaW5zID0gZ2V0UGx1Z2luRWRpdGFibGVTY29wZXMoKVxuXG4gIGlmIChlbmFibGVkUGx1Z2lucy5zaXplID09PSAwKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ05vIGVuYWJsZWQgcGx1Z2lucyB0byBkaXNhYmxlJyB9XG4gIH1cblxuICBjb25zdCBkaXNhYmxlZDogc3RyaW5nW10gPSBbXVxuICBjb25zdCBlcnJvcnM6IHN0cmluZ1tdID0gW11cblxuICBmb3IgKGNvbnN0IFtwbHVnaW5JZF0gb2YgZW5hYmxlZFBsdWdpbnMpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZXRQbHVnaW5FbmFibGVkT3AocGx1Z2luSWQsIGZhbHNlKVxuICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgZGlzYWJsZWQucHVzaChwbHVnaW5JZClcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3JzLnB1c2goYCR7cGx1Z2luSWR9OiAke3Jlc3VsdC5tZXNzYWdlfWApXG4gICAgfVxuICB9XG5cbiAgaWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogYERpc2FibGVkICR7ZGlzYWJsZWQubGVuZ3RofSAke3BsdXJhbChkaXNhYmxlZC5sZW5ndGgsICdwbHVnaW4nKX0sICR7ZXJyb3JzLmxlbmd0aH0gZmFpbGVkOlxcbiR7ZXJyb3JzLmpvaW4oJ1xcbicpfWAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzdWNjZXNzOiB0cnVlLFxuICAgIG1lc3NhZ2U6IGBEaXNhYmxlZCAke2Rpc2FibGVkLmxlbmd0aH0gJHtwbHVyYWwoZGlzYWJsZWQubGVuZ3RoLCAncGx1Z2luJyl9YCxcbiAgfVxufVxuXG4vKipcbiAqIFVwZGF0ZSBhIHBsdWdpbiB0byB0aGUgbGF0ZXN0IHZlcnNpb24uXG4gKlxuICogVGhpcyBmdW5jdGlvbiBwZXJmb3JtcyBhIE5PTi1JTlBMQUNFIHVwZGF0ZTpcbiAqIDEuIEdldHMgdGhlIHBsdWdpbiBpbmZvIGZyb20gdGhlIG1hcmtldHBsYWNlXG4gKiAyLiBGb3IgcmVtb3RlIHBsdWdpbnM6IGRvd25sb2FkcyB0byB0ZW1wIGRpciBhbmQgY2FsY3VsYXRlcyB2ZXJzaW9uXG4gKiAzLiBGb3IgbG9jYWwgcGx1Z2luczogY2FsY3VsYXRlcyB2ZXJzaW9uIGZyb20gbWFya2V0cGxhY2Ugc291cmNlXG4gKiA0LiBJZiB2ZXJzaW9uIGRpZmZlcnMgZnJvbSBjdXJyZW50bHkgaW5zdGFsbGVkLCBjb3BpZXMgdG8gbmV3IHZlcnNpb25lZCBjYWNoZSBkaXJlY3RvcnlcbiAqIDUuIFVwZGF0ZXMgaW5zdGFsbGF0aW9uIGluIFYyIGZpbGUgKG1lbW9yeSBzdGF5cyB1bmNoYW5nZWQgdW50aWwgcmVzdGFydClcbiAqIDYuIENsZWFucyB1cCBvbGQgdmVyc2lvbiBpZiBubyBsb25nZXIgcmVmZXJlbmNlZCBieSBhbnkgaW5zdGFsbGF0aW9uXG4gKlxuICogQHBhcmFtIHBsdWdpbiBQbHVnaW4gbmFtZSBvciBwbHVnaW5AbWFya2V0cGxhY2UgaWRlbnRpZmllclxuICogQHBhcmFtIHNjb3BlIFNjb3BlIHRvIHVwZGF0ZS4gVW5saWtlIGluc3RhbGwvdW5pbnN0YWxsL2VuYWJsZS9kaXNhYmxlLCBtYW5hZ2VkIHNjb3BlIElTIGFsbG93ZWQuXG4gKiBAcmV0dXJucyBSZXN1bHQgaW5kaWNhdGluZyBzdWNjZXNzL2ZhaWx1cmUgd2l0aCB2ZXJzaW9uIGluZm9cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVBsdWdpbk9wKFxuICBwbHVnaW46IHN0cmluZyxcbiAgc2NvcGU6IFBsdWdpblNjb3BlLFxuKTogUHJvbWlzZTxQbHVnaW5VcGRhdGVSZXN1bHQ+IHtcbiAgLy8gUGFyc2UgdGhlIHBsdWdpbiBpZGVudGlmaWVyIHRvIGdldCB0aGUgZnVsbCBwbHVnaW4gSURcbiAgY29uc3QgeyBuYW1lOiBwbHVnaW5OYW1lLCBtYXJrZXRwbGFjZTogbWFya2V0cGxhY2VOYW1lIH0gPVxuICAgIHBhcnNlUGx1Z2luSWRlbnRpZmllcihwbHVnaW4pXG4gIGNvbnN0IHBsdWdpbklkID0gbWFya2V0cGxhY2VOYW1lID8gYCR7cGx1Z2luTmFtZX1AJHttYXJrZXRwbGFjZU5hbWV9YCA6IHBsdWdpblxuXG4gIC8vIEdldCBwbHVnaW4gaW5mbyBmcm9tIG1hcmtldHBsYWNlXG4gIGNvbnN0IHBsdWdpbkluZm8gPSBhd2FpdCBnZXRQbHVnaW5CeUlkKHBsdWdpbilcbiAgaWYgKCFwbHVnaW5JbmZvKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogYFBsdWdpbiBcIiR7cGx1Z2luTmFtZX1cIiBub3QgZm91bmRgLFxuICAgICAgcGx1Z2luSWQsXG4gICAgICBzY29wZSxcbiAgICB9XG4gIH1cblxuICBjb25zdCB7IGVudHJ5LCBtYXJrZXRwbGFjZUluc3RhbGxMb2NhdGlvbiB9ID0gcGx1Z2luSW5mb1xuXG4gIC8vIEdldCBpbnN0YWxsYXRpb25zIGZyb20gZGlza1xuICBjb25zdCBkaXNrRGF0YSA9IGxvYWRJbnN0YWxsZWRQbHVnaW5zRnJvbURpc2soKVxuICBjb25zdCBpbnN0YWxsYXRpb25zID0gZGlza0RhdGEucGx1Z2luc1twbHVnaW5JZF1cblxuICBpZiAoIWluc3RhbGxhdGlvbnMgfHwgaW5zdGFsbGF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBgUGx1Z2luIFwiJHtwbHVnaW5OYW1lfVwiIGlzIG5vdCBpbnN0YWxsZWRgLFxuICAgICAgcGx1Z2luSWQsXG4gICAgICBzY29wZSxcbiAgICB9XG4gIH1cblxuICAvLyBEZXRlcm1pbmUgcHJvamVjdFBhdGggYmFzZWQgb24gc2NvcGVcbiAgY29uc3QgcHJvamVjdFBhdGggPSBnZXRQcm9qZWN0UGF0aEZvclNjb3BlKHNjb3BlKVxuXG4gIC8vIEZpbmQgdGhlIGluc3RhbGxhdGlvbiBmb3IgdGhpcyBzY29wZVxuICBjb25zdCBpbnN0YWxsYXRpb24gPSBpbnN0YWxsYXRpb25zLmZpbmQoXG4gICAgaW5zdCA9PiBpbnN0LnNjb3BlID09PSBzY29wZSAmJiBpbnN0LnByb2plY3RQYXRoID09PSBwcm9qZWN0UGF0aCxcbiAgKVxuICBpZiAoIWluc3RhbGxhdGlvbikge1xuICAgIGNvbnN0IHNjb3BlRGVzYyA9IHByb2plY3RQYXRoID8gYCR7c2NvcGV9ICgke3Byb2plY3RQYXRofSlgIDogc2NvcGVcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBgUGx1Z2luIFwiJHtwbHVnaW5OYW1lfVwiIGlzIG5vdCBpbnN0YWxsZWQgYXQgc2NvcGUgJHtzY29wZURlc2N9YCxcbiAgICAgIHBsdWdpbklkLFxuICAgICAgc2NvcGUsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBlcmZvcm1QbHVnaW5VcGRhdGUoe1xuICAgIHBsdWdpbklkLFxuICAgIHBsdWdpbk5hbWUsXG4gICAgZW50cnksXG4gICAgbWFya2V0cGxhY2VJbnN0YWxsTG9jYXRpb24sXG4gICAgaW5zdGFsbGF0aW9uLFxuICAgIHNjb3BlLFxuICAgIHByb2plY3RQYXRoLFxuICB9KVxufVxuXG4vKipcbiAqIFBlcmZvcm0gdGhlIGFjdHVhbCBwbHVnaW4gdXBkYXRlOiBmZXRjaCBzb3VyY2UsIGNhbGN1bGF0ZSB2ZXJzaW9uLCBjb3B5IHRvIGNhY2hlLCB1cGRhdGUgZGlzay5cbiAqIFRoaXMgaXMgdGhlIGNvcmUgdXBkYXRlIGV4ZWN1dGlvbiBleHRyYWN0ZWQgZnJvbSB1cGRhdGVQbHVnaW5PcC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gcGVyZm9ybVBsdWdpblVwZGF0ZSh7XG4gIHBsdWdpbklkLFxuICBwbHVnaW5OYW1lLFxuICBlbnRyeSxcbiAgbWFya2V0cGxhY2VJbnN0YWxsTG9jYXRpb24sXG4gIGluc3RhbGxhdGlvbixcbiAgc2NvcGUsXG4gIHByb2plY3RQYXRoLFxufToge1xuICBwbHVnaW5JZDogc3RyaW5nXG4gIHBsdWdpbk5hbWU6IHN0cmluZ1xuICBlbnRyeTogUGx1Z2luTWFya2V0cGxhY2VFbnRyeVxuICBtYXJrZXRwbGFjZUluc3RhbGxMb2NhdGlvbjogc3RyaW5nXG4gIGluc3RhbGxhdGlvbjogeyB2ZXJzaW9uPzogc3RyaW5nOyBpbnN0YWxsUGF0aDogc3RyaW5nIH1cbiAgc2NvcGU6IFBsdWdpblNjb3BlXG4gIHByb2plY3RQYXRoOiBzdHJpbmcgfCB1bmRlZmluZWRcbn0pOiBQcm9taXNlPFBsdWdpblVwZGF0ZVJlc3VsdD4ge1xuICBjb25zdCBmcyA9IGdldEZzSW1wbGVtZW50YXRpb24oKVxuICBjb25zdCBvbGRWZXJzaW9uID0gaW5zdGFsbGF0aW9uLnZlcnNpb25cblxuICBsZXQgc291cmNlUGF0aDogc3RyaW5nXG4gIGxldCBuZXdWZXJzaW9uOiBzdHJpbmdcbiAgbGV0IHNob3VsZENsZWFudXBTb3VyY2UgPSBmYWxzZVxuICBsZXQgZ2l0Q29tbWl0U2hhOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAvLyBIYW5kbGUgcmVtb3RlIHZzIGxvY2FsIHBsdWdpbnNcbiAgaWYgKHR5cGVvZiBlbnRyeS5zb3VyY2UgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gUmVtb3RlIHBsdWdpbjogZG93bmxvYWQgdG8gdGVtcCBkaXJlY3RvcnkgZmlyc3RcbiAgICBjb25zdCBjYWNoZVJlc3VsdCA9IGF3YWl0IGNhY2hlUGx1Z2luKGVudHJ5LnNvdXJjZSwge1xuICAgICAgbWFuaWZlc3Q6IHsgbmFtZTogZW50cnkubmFtZSB9LFxuICAgIH0pXG4gICAgc291cmNlUGF0aCA9IGNhY2hlUmVzdWx0LnBhdGhcbiAgICBzaG91bGRDbGVhbnVwU291cmNlID0gdHJ1ZVxuICAgIGdpdENvbW1pdFNoYSA9IGNhY2hlUmVzdWx0LmdpdENvbW1pdFNoYVxuXG4gICAgLy8gQ2FsY3VsYXRlIHZlcnNpb24gZnJvbSBkb3dubG9hZGVkIHBsdWdpbi4gRm9yIGdpdC1zdWJkaXIgc291cmNlcyxcbiAgICAvLyBjYWNoZVBsdWdpbiBjYXB0dXJlZCB0aGUgY29tbWl0IFNIQSBiZWZvcmUgZGlzY2FyZGluZyB0aGUgZXBoZW1lcmFsXG4gICAgLy8gY2xvbmUgKHRoZSBleHRyYWN0ZWQgc3ViZGlyIGhhcyBubyAuZ2l0LCBzbyB0aGUgaW5zdGFsbFBhdGgtYmFzZWRcbiAgICAvLyBmYWxsYmFjayBpbiBjYWxjdWxhdGVQbHVnaW5WZXJzaW9uIGNhbid0IHJlY292ZXIgaXQpLlxuICAgIG5ld1ZlcnNpb24gPSBhd2FpdCBjYWxjdWxhdGVQbHVnaW5WZXJzaW9uKFxuICAgICAgcGx1Z2luSWQsXG4gICAgICBlbnRyeS5zb3VyY2UsXG4gICAgICBjYWNoZVJlc3VsdC5tYW5pZmVzdCxcbiAgICAgIGNhY2hlUmVzdWx0LnBhdGgsXG4gICAgICBlbnRyeS52ZXJzaW9uLFxuICAgICAgY2FjaGVSZXN1bHQuZ2l0Q29tbWl0U2hhLFxuICAgIClcbiAgfSBlbHNlIHtcbiAgICAvLyBMb2NhbCBwbHVnaW46IHVzZSBwYXRoIGZyb20gbWFya2V0cGxhY2VcbiAgICAvLyBTdGF0IGRpcmVjdGx5IFx1MjAxNCBoYW5kbGUgRU5PRU5UIGlubGluZSByYXRoZXIgdGhhbiBwcmUtY2hlY2tpbmcgZXhpc3RlbmNlXG4gICAgbGV0IG1hcmtldHBsYWNlU3RhdHNcbiAgICB0cnkge1xuICAgICAgbWFya2V0cGxhY2VTdGF0cyA9IGF3YWl0IGZzLnN0YXQobWFya2V0cGxhY2VJbnN0YWxsTG9jYXRpb24pXG4gICAgfSBjYXRjaCAoZTogdW5rbm93bikge1xuICAgICAgaWYgKGlzRU5PRU5UKGUpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgbWVzc2FnZTogYE1hcmtldHBsYWNlIGRpcmVjdG9yeSBub3QgZm91bmQgYXQgJHttYXJrZXRwbGFjZUluc3RhbGxMb2NhdGlvbn1gLFxuICAgICAgICAgIHBsdWdpbklkLFxuICAgICAgICAgIHNjb3BlLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyBlXG4gICAgfVxuICAgIGNvbnN0IG1hcmtldHBsYWNlRGlyID0gbWFya2V0cGxhY2VTdGF0cy5pc0RpcmVjdG9yeSgpXG4gICAgICA/IG1hcmtldHBsYWNlSW5zdGFsbExvY2F0aW9uXG4gICAgICA6IGRpcm5hbWUobWFya2V0cGxhY2VJbnN0YWxsTG9jYXRpb24pXG4gICAgc291cmNlUGF0aCA9IGpvaW4obWFya2V0cGxhY2VEaXIsIGVudHJ5LnNvdXJjZSlcblxuICAgIC8vIFZlcmlmeSBzb3VyY2VQYXRoIGV4aXN0cy4gVGhpcyBzdGF0IGlzIHJlcXVpcmVkIFx1MjAxNCBuZWl0aGVyIGRvd25zdHJlYW1cbiAgICAvLyBvcCByZWxpYWJseSBzdXJmYWNlcyBFTk9FTlQ6XG4gICAgLy8gICAxLiBjYWxjdWxhdGVQbHVnaW5WZXJzaW9uIFx1MjE5MiBmaW5kR2l0Um9vdCB3YWxrcyBVUCBwYXN0IGEgbWlzc2luZyBkaXJcbiAgICAvLyAgICAgIHRvIHRoZSBtYXJrZXRwbGFjZSAuZ2l0LCByZXR1cm5pbmcgdGhlIHNhbWUgU0hBIGFzIGluc3RhbGwtdGltZSBcdTIxOTJcbiAgICAvLyAgICAgIHNpbGVudCBmYWxzZS1wb3NpdGl2ZSB7c3VjY2VzczogdHJ1ZSwgYWxyZWFkeVVwVG9EYXRlOiB0cnVlfS5cbiAgICAvLyAgIDIuIGNvcHlQbHVnaW5Ub1ZlcnNpb25lZENhY2hlICh3aGVuIHZlcnNpb25zIGRpZmZlcikgdGhyb3dzIGEgcmF3XG4gICAgLy8gICAgICBFTk9FTlQgd2l0aCBubyBmcmllbmRseSBtZXNzYWdlLlxuICAgIC8vIFRPQ1RPVSBpcyBuZWdsaWdpYmxlIGZvciBhIHVzZXItbWFuYWdlZCBsb2NhbCBkaXIuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGZzLnN0YXQoc291cmNlUGF0aClcbiAgICB9IGNhdGNoIChlOiB1bmtub3duKSB7XG4gICAgICBpZiAoaXNFTk9FTlQoZSkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICBtZXNzYWdlOiBgUGx1Z2luIHNvdXJjZSBub3QgZm91bmQgYXQgJHtzb3VyY2VQYXRofWAsXG4gICAgICAgICAgcGx1Z2luSWQsXG4gICAgICAgICAgc2NvcGUsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRocm93IGVcbiAgICB9XG5cbiAgICAvLyBUcnkgdG8gbG9hZCBtYW5pZmVzdCBmcm9tIHBsdWdpbiBkaXJlY3RvcnkgKGZvciB2ZXJzaW9uIGluZm8pXG4gICAgbGV0IHBsdWdpbk1hbmlmZXN0OiBQbHVnaW5NYW5pZmVzdCB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IG1hbmlmZXN0UGF0aCA9IGpvaW4oc291cmNlUGF0aCwgJy5jbGF1ZGUtcGx1Z2luJywgJ3BsdWdpbi5qc29uJylcbiAgICB0cnkge1xuICAgICAgcGx1Z2luTWFuaWZlc3QgPSBhd2FpdCBsb2FkUGx1Z2luTWFuaWZlc3QoXG4gICAgICAgIG1hbmlmZXN0UGF0aCxcbiAgICAgICAgZW50cnkubmFtZSxcbiAgICAgICAgZW50cnkuc291cmNlLFxuICAgICAgKVxuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gRmFpbGVkIHRvIGxvYWQgLSB3aWxsIHVzZSBvdGhlciB2ZXJzaW9uIHNvdXJjZXNcbiAgICB9XG5cbiAgICAvLyBDYWxjdWxhdGUgdmVyc2lvbiBmcm9tIHBsdWdpbiBzb3VyY2UgcGF0aFxuICAgIG5ld1ZlcnNpb24gPSBhd2FpdCBjYWxjdWxhdGVQbHVnaW5WZXJzaW9uKFxuICAgICAgcGx1Z2luSWQsXG4gICAgICBlbnRyeS5zb3VyY2UsXG4gICAgICBwbHVnaW5NYW5pZmVzdCxcbiAgICAgIHNvdXJjZVBhdGgsXG4gICAgICBlbnRyeS52ZXJzaW9uLFxuICAgIClcbiAgfVxuXG4gIC8vIFVzZSB0cnkvZmluYWxseSB0byBlbnN1cmUgdGVtcCBkaXJlY3RvcnkgY2xlYW51cCBvbiBhbnkgZXJyb3JcbiAgdHJ5IHtcbiAgICAvLyBDaGVjayBpZiB0aGlzIHZlcnNpb24gYWxyZWFkeSBleGlzdHMgaW4gY2FjaGVcbiAgICBsZXQgdmVyc2lvbmVkUGF0aCA9IGdldFZlcnNpb25lZENhY2hlUGF0aChwbHVnaW5JZCwgbmV3VmVyc2lvbilcblxuICAgIC8vIENoZWNrIGlmIGluc3RhbGxhdGlvbiBpcyBhbHJlYWR5IGF0IHRoZSBuZXcgdmVyc2lvblxuICAgIGNvbnN0IHppcFBhdGggPSBnZXRWZXJzaW9uZWRaaXBDYWNoZVBhdGgocGx1Z2luSWQsIG5ld1ZlcnNpb24pXG4gICAgY29uc3QgaXNVcFRvRGF0ZSA9XG4gICAgICBpbnN0YWxsYXRpb24udmVyc2lvbiA9PT0gbmV3VmVyc2lvbiB8fFxuICAgICAgaW5zdGFsbGF0aW9uLmluc3RhbGxQYXRoID09PSB2ZXJzaW9uZWRQYXRoIHx8XG4gICAgICBpbnN0YWxsYXRpb24uaW5zdGFsbFBhdGggPT09IHppcFBhdGhcbiAgICBpZiAoaXNVcFRvRGF0ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgbWVzc2FnZTogYCR7cGx1Z2luTmFtZX0gaXMgYWxyZWFkeSBhdCB0aGUgbGF0ZXN0IHZlcnNpb24gKCR7bmV3VmVyc2lvbn0pLmAsXG4gICAgICAgIHBsdWdpbklkLFxuICAgICAgICBuZXdWZXJzaW9uLFxuICAgICAgICBvbGRWZXJzaW9uLFxuICAgICAgICBhbHJlYWR5VXBUb0RhdGU6IHRydWUsXG4gICAgICAgIHNjb3BlLFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENvcHkgdG8gdmVyc2lvbmVkIGNhY2hlIChyZXR1cm5zIGFjdHVhbCBwYXRoLCB3aGljaCBtYXkgYmUgLnppcClcbiAgICB2ZXJzaW9uZWRQYXRoID0gYXdhaXQgY29weVBsdWdpblRvVmVyc2lvbmVkQ2FjaGUoXG4gICAgICBzb3VyY2VQYXRoLFxuICAgICAgcGx1Z2luSWQsXG4gICAgICBuZXdWZXJzaW9uLFxuICAgICAgZW50cnksXG4gICAgKVxuXG4gICAgLy8gU3RvcmUgb2xkIHZlcnNpb24gcGF0aCBmb3IgcG90ZW50aWFsIGNsZWFudXBcbiAgICBjb25zdCBvbGRWZXJzaW9uUGF0aCA9IGluc3RhbGxhdGlvbi5pbnN0YWxsUGF0aFxuXG4gICAgLy8gVXBkYXRlIGRpc2sgSlNPTiBmaWxlIGZvciB0aGlzIGluc3RhbGxhdGlvblxuICAgIC8vIChtZW1vcnkgc3RheXMgdW5jaGFuZ2VkIHVudGlsIHJlc3RhcnQpXG4gICAgdXBkYXRlSW5zdGFsbGF0aW9uUGF0aE9uRGlzayhcbiAgICAgIHBsdWdpbklkLFxuICAgICAgc2NvcGUsXG4gICAgICBwcm9qZWN0UGF0aCxcbiAgICAgIHZlcnNpb25lZFBhdGgsXG4gICAgICBuZXdWZXJzaW9uLFxuICAgICAgZ2l0Q29tbWl0U2hhLFxuICAgIClcblxuICAgIGlmIChvbGRWZXJzaW9uUGF0aCAmJiBvbGRWZXJzaW9uUGF0aCAhPT0gdmVyc2lvbmVkUGF0aCkge1xuICAgICAgY29uc3QgdXBkYXRlZERpc2tEYXRhID0gbG9hZEluc3RhbGxlZFBsdWdpbnNGcm9tRGlzaygpXG4gICAgICBjb25zdCBpc09sZFZlcnNpb25TdGlsbFJlZmVyZW5jZWQgPSBPYmplY3QudmFsdWVzKFxuICAgICAgICB1cGRhdGVkRGlza0RhdGEucGx1Z2lucyxcbiAgICAgICkuc29tZShwbHVnaW5JbnN0YWxsYXRpb25zID0+XG4gICAgICAgIHBsdWdpbkluc3RhbGxhdGlvbnMuc29tZShpbnN0ID0+IGluc3QuaW5zdGFsbFBhdGggPT09IG9sZFZlcnNpb25QYXRoKSxcbiAgICAgIClcblxuICAgICAgaWYgKCFpc09sZFZlcnNpb25TdGlsbFJlZmVyZW5jZWQpIHtcbiAgICAgICAgYXdhaXQgbWFya1BsdWdpblZlcnNpb25PcnBoYW5lZChvbGRWZXJzaW9uUGF0aClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzY29wZURlc2MgPSBwcm9qZWN0UGF0aCA/IGAke3Njb3BlfSAoJHtwcm9qZWN0UGF0aH0pYCA6IHNjb3BlXG4gICAgY29uc3QgbWVzc2FnZSA9IGBQbHVnaW4gXCIke3BsdWdpbk5hbWV9XCIgdXBkYXRlZCBmcm9tICR7b2xkVmVyc2lvbiB8fCAndW5rbm93bid9IHRvICR7bmV3VmVyc2lvbn0gZm9yIHNjb3BlICR7c2NvcGVEZXNjfS4gUmVzdGFydCB0byBhcHBseSBjaGFuZ2VzLmBcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZSxcbiAgICAgIHBsdWdpbklkLFxuICAgICAgbmV3VmVyc2lvbixcbiAgICAgIG9sZFZlcnNpb24sXG4gICAgICBzY29wZSxcbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgLy8gQ2xlYW4gdXAgdGVtcCBzb3VyY2UgaWYgaXQgd2FzIGEgcmVtb3RlIGRvd25sb2FkXG4gICAgaWYgKFxuICAgICAgc2hvdWxkQ2xlYW51cFNvdXJjZSAmJlxuICAgICAgc291cmNlUGF0aCAhPT0gZ2V0VmVyc2lvbmVkQ2FjaGVQYXRoKHBsdWdpbklkLCBuZXdWZXJzaW9uKVxuICAgICkge1xuICAgICAgYXdhaXQgZnMucm0oc291cmNlUGF0aCwgeyByZWN1cnNpdmU6IHRydWUsIGZvcmNlOiB0cnVlIH0pXG4gICAgfVxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUEsU0FBUyxTQUFTLFlBQVk7QUE0RXZCLFNBQVMsdUJBQ2QsT0FDbUM7QUFDbkMsTUFBSSxDQUFDLHlCQUF5QixTQUFTLEtBQXlCLEdBQUc7QUFDakUsVUFBTSxJQUFJO0FBQUEsTUFDUixrQkFBa0IsS0FBSyxzQkFBc0IseUJBQXlCLEtBQUssSUFBSSxDQUFDO0FBQUEsSUFDbEY7QUFBQSxFQUNGO0FBQ0Y7QUFNTyxTQUFTLG1CQUNkLE9BQzJCO0FBQzNCLFNBQU8seUJBQXlCLFNBQVMsS0FBeUI7QUFDcEU7QUFNTyxTQUFTLHVCQUF1QixPQUF3QztBQUM3RSxTQUFPLFVBQVUsYUFBYSxVQUFVLFVBQVUsZUFBZSxJQUFJO0FBQ3ZFO0FBWU8sU0FBUyw4QkFBOEIsVUFBMkI7QUFDdkUsU0FDRSxxQkFBcUIsaUJBQWlCLEdBQUcsaUJBQWlCLFFBQVEsTUFBTTtBQUU1RTtBQWdEQSxTQUFTLHFCQUFxQixRQUdyQjtBQUNQLFFBQU0saUJBQWlCLE9BQU8sU0FBUyxHQUFHO0FBRTFDLFFBQU0sY0FBa0MsQ0FBQyxTQUFTLFdBQVcsTUFBTTtBQUVuRSxhQUFXLFNBQVMsYUFBYTtBQUMvQixVQUFNLGlCQUFpQjtBQUFBLE1BQ3JCLHFCQUFxQixLQUFLO0FBQUEsSUFDNUIsR0FBRztBQUNILFFBQUksQ0FBQyxlQUFnQjtBQUVyQixlQUFXLE9BQU8sT0FBTyxLQUFLLGNBQWMsR0FBRztBQUM3QyxVQUFJLGlCQUFpQixRQUFRLFNBQVMsSUFBSSxXQUFXLEdBQUcsTUFBTSxHQUFHLEdBQUc7QUFDbEUsZUFBTyxFQUFFLFVBQVUsS0FBSyxNQUFNO0FBQUEsTUFDaEM7QUFBQSxJQUNGO0FBQUEsRUFD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
