#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  disableAllPlugins,
  disablePlugin,
  enablePlugin,
  installPlugin,
  uninstallPlugin,
  updatePluginCli
} from "./chunk-2HPH2YCE.mjs";
import {
  cliError,
  cliOk
} from "./chunk-IYQS7MD5.mjs";
import {
  getInstallCounts,
  init_installCounts,
  init_parseMarketplaceInput,
  init_validatePlugin,
  parseMarketplaceInput,
  validateManifest,
  validatePluginContents
} from "./chunk-JRM7EIE2.mjs";
import {
  VALID_INSTALLABLE_SCOPES,
  VALID_UPDATE_SCOPES
} from "./chunk-KHM4QVLJ.mjs";
import "./chunk-QUU2KZ75.mjs";
import {
  addMarketplaceSource,
  clearAllCaches,
  createPluginId,
  getPluginErrorMessage,
  init_cacheUtils,
  init_installedPluginsManager,
  init_marketplaceHelpers,
  init_marketplaceManager,
  init_mcpPluginIntegration,
  init_plugin,
  init_pluginLoader,
  isPluginInstalled,
  loadAllPlugins,
  loadInstalledPluginsV2,
  loadKnownMarketplacesConfig,
  loadMarketplacesWithGracefulDegradation,
  loadPluginMcpServers,
  refreshAllMarketplaces,
  refreshMarketplace,
  removeMarketplaceSource,
  saveMarketplaceToSettings
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
import {
  init_pluginIdentifier,
  parsePluginIdentifier,
  scopeToSettingSource
} from "./chunk-4WEGPCYF.mjs";
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
import "./chunk-KMJXN3MK.mjs";
import "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
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
import "./chunk-OGGCTXYU.mjs";
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
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-IPMELYAB.mjs";
import "./chunk-F5ODCUJD.mjs";
import {
  figures_default,
  init_figures
} from "./chunk-ZAYB3WZV.mjs";
import {
  errorMessage,
  init_errors,
  init_slowOperations,
  jsonStringify
} from "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import "./chunk-OU3SZVVB.mjs";
import {
  init_state,
  setUseCoworkPlugins
} from "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import "./chunk-O5PZ3G6I.mjs";

// src/cli/handlers/plugins.ts
init_figures();
init_state();
init_analytics();
import { basename, dirname } from "path";
init_plugin();
init_errors();
init_log();
init_cacheUtils();
init_installCounts();
init_installedPluginsManager();
init_marketplaceHelpers();
init_marketplaceManager();
init_mcpPluginIntegration();
init_parseMarketplaceInput();
init_pluginIdentifier();
init_pluginLoader();
init_validatePlugin();
init_slowOperations();
init_stringUtils();
function handleMarketplaceError(error, action) {
  logError(error);
  cliError(`${figures_default.cross} Failed to ${action}: ${errorMessage(error)}`);
}
function printValidationResult(result) {
  if (result.errors.length > 0) {
    console.log(
      `${figures_default.cross} Found ${result.errors.length} ${plural(result.errors.length, "error")}:
`
    );
    result.errors.forEach((error) => {
      console.log(`  ${figures_default.pointer} ${error.path}: ${error.message}`);
    });
    console.log("");
  }
  if (result.warnings.length > 0) {
    console.log(
      `${figures_default.warning} Found ${result.warnings.length} ${plural(result.warnings.length, "warning")}:
`
    );
    result.warnings.forEach((warning) => {
      console.log(`  ${figures_default.pointer} ${warning.path}: ${warning.message}`);
    });
    console.log("");
  }
}
async function pluginValidateHandler(manifestPath, options) {
  if (options.cowork) setUseCoworkPlugins(true);
  try {
    const result = await validateManifest(manifestPath);
    console.log(`Validating ${result.fileType} manifest: ${result.filePath}
`);
    printValidationResult(result);
    let contentResults = [];
    if (result.fileType === "plugin") {
      const manifestDir = dirname(result.filePath);
      if (basename(manifestDir) === ".claude-plugin") {
        contentResults = await validatePluginContents(dirname(manifestDir));
        for (const r of contentResults) {
          console.log(`Validating ${r.fileType}: ${r.filePath}
`);
          printValidationResult(r);
        }
      }
    }
    const allSuccess = result.success && contentResults.every((r) => r.success);
    const hasWarnings = result.warnings.length > 0 || contentResults.some((r) => r.warnings.length > 0);
    if (allSuccess) {
      cliOk(
        hasWarnings ? `${figures_default.tick} Validation passed with warnings` : `${figures_default.tick} Validation passed`
      );
    } else {
      console.log(`${figures_default.cross} Validation failed`);
      process.exit(1);
    }
  } catch (error) {
    logError(error);
    console.error(
      `${figures_default.cross} Unexpected error during validation: ${errorMessage(error)}`
    );
    process.exit(2);
  }
}
async function pluginListHandler(options) {
  if (options.cowork) setUseCoworkPlugins(true);
  logEvent("tengu_plugin_list_command", {});
  const installedData = loadInstalledPluginsV2();
  const { getPluginEditableScopes } = await import("./pluginStartupCheck-VF4RMKH7.mjs");
  const enabledPlugins = getPluginEditableScopes();
  const pluginIds = Object.keys(installedData.plugins);
  const {
    enabled: loadedEnabled,
    disabled: loadedDisabled,
    errors: loadErrors
  } = await loadAllPlugins();
  const allLoadedPlugins = [...loadedEnabled, ...loadedDisabled];
  const inlinePlugins = allLoadedPlugins.filter(
    (p) => p.source.endsWith("@inline")
  );
  const inlineLoadErrors = loadErrors.filter(
    (e) => e.source.endsWith("@inline") || e.source.startsWith("inline[")
  );
  if (options.json) {
    const loadedPluginMap = new Map(allLoadedPlugins.map((p) => [p.source, p]));
    const plugins = [];
    for (const pluginId of pluginIds.sort()) {
      const installations = installedData.plugins[pluginId];
      if (!installations || installations.length === 0) continue;
      const pluginName = parsePluginIdentifier(pluginId).name;
      const pluginErrors = loadErrors.filter(
        (e) => e.source === pluginId || "plugin" in e && e.plugin === pluginName
      ).map(getPluginErrorMessage);
      for (const installation of installations) {
        const loadedPlugin = loadedPluginMap.get(pluginId);
        let mcpServers;
        if (loadedPlugin) {
          const servers = loadedPlugin.mcpServers || await loadPluginMcpServers(loadedPlugin);
          if (servers && Object.keys(servers).length > 0) {
            mcpServers = servers;
          }
        }
        plugins.push({
          id: pluginId,
          version: installation.version || "unknown",
          scope: installation.scope,
          enabled: enabledPlugins.has(pluginId),
          installPath: installation.installPath,
          installedAt: installation.installedAt,
          lastUpdated: installation.lastUpdated,
          projectPath: installation.projectPath,
          mcpServers,
          errors: pluginErrors.length > 0 ? pluginErrors : void 0
        });
      }
    }
    for (const p of inlinePlugins) {
      const servers = p.mcpServers || await loadPluginMcpServers(p);
      const pErrors = inlineLoadErrors.filter(
        (e) => e.source === p.source || "plugin" in e && e.plugin === p.name
      ).map(getPluginErrorMessage);
      plugins.push({
        id: p.source,
        version: p.manifest.version ?? "unknown",
        scope: "session",
        enabled: p.enabled !== false,
        installPath: p.path,
        mcpServers: servers && Object.keys(servers).length > 0 ? servers : void 0,
        errors: pErrors.length > 0 ? pErrors : void 0
      });
    }
    for (const e of inlineLoadErrors.filter(
      (e2) => e2.source.startsWith("inline[")
    )) {
      plugins.push({
        id: e.source,
        version: "unknown",
        scope: "session",
        enabled: false,
        installPath: "path" in e ? e.path : "",
        errors: [getPluginErrorMessage(e)]
      });
    }
    if (options.available) {
      const available = [];
      try {
        const [config, installCounts] = await Promise.all([
          loadKnownMarketplacesConfig(),
          getInstallCounts()
        ]);
        const { marketplaces } = await loadMarketplacesWithGracefulDegradation(config);
        for (const {
          name: marketplaceName,
          data: marketplace
        } of marketplaces) {
          if (marketplace) {
            for (const entry of marketplace.plugins) {
              const pluginId = createPluginId(entry.name, marketplaceName);
              if (!isPluginInstalled(pluginId)) {
                available.push({
                  pluginId,
                  name: entry.name,
                  description: entry.description,
                  marketplaceName,
                  version: entry.version,
                  source: entry.source,
                  installCount: installCounts?.get(pluginId)
                });
              }
            }
          }
        }
      } catch {
      }
      cliOk(jsonStringify({ installed: plugins, available }, null, 2));
    } else {
      cliOk(jsonStringify(plugins, null, 2));
    }
  }
  if (pluginIds.length === 0 && inlinePlugins.length === 0) {
    if (inlineLoadErrors.length === 0) {
      cliOk(
        "No plugins installed. Use `blaude plugin install` to install a plugin."
      );
    }
  }
  if (pluginIds.length > 0) {
    console.log("Installed plugins:\n");
  }
  for (const pluginId of pluginIds.sort()) {
    const installations = installedData.plugins[pluginId];
    if (!installations || installations.length === 0) continue;
    const pluginName = parsePluginIdentifier(pluginId).name;
    const pluginErrors = loadErrors.filter(
      (e) => e.source === pluginId || "plugin" in e && e.plugin === pluginName
    );
    for (const installation of installations) {
      const isEnabled = enabledPlugins.has(pluginId);
      const status = pluginErrors.length > 0 ? `${figures_default.cross} failed to load` : isEnabled ? `${figures_default.tick} enabled` : `${figures_default.cross} disabled`;
      const version = installation.version || "unknown";
      const scope = installation.scope;
      console.log(`  ${figures_default.pointer} ${pluginId}`);
      console.log(`    Version: ${version}`);
      console.log(`    Scope: ${scope}`);
      console.log(`    Status: ${status}`);
      for (const error of pluginErrors) {
        console.log(`    Error: ${getPluginErrorMessage(error)}`);
      }
      console.log("");
    }
  }
  if (inlinePlugins.length > 0 || inlineLoadErrors.length > 0) {
    console.log("Session-only plugins (--plugin-dir):\n");
    for (const p of inlinePlugins) {
      const pErrors = inlineLoadErrors.filter(
        (e) => e.source === p.source || "plugin" in e && e.plugin === p.name
      );
      const status = pErrors.length > 0 ? `${figures_default.cross} loaded with errors` : `${figures_default.tick} loaded`;
      console.log(`  ${figures_default.pointer} ${p.source}`);
      console.log(`    Version: ${p.manifest.version ?? "unknown"}`);
      console.log(`    Path: ${p.path}`);
      console.log(`    Status: ${status}`);
      for (const e of pErrors) {
        console.log(`    Error: ${getPluginErrorMessage(e)}`);
      }
      console.log("");
    }
    for (const e of inlineLoadErrors.filter(
      (e2) => e2.source.startsWith("inline[")
    )) {
      console.log(
        `  ${figures_default.pointer} ${e.source}: ${figures_default.cross} ${getPluginErrorMessage(e)}
`
      );
    }
  }
  cliOk();
}
async function marketplaceAddHandler(source, options) {
  if (options.cowork) setUseCoworkPlugins(true);
  try {
    const parsed = await parseMarketplaceInput(source);
    if (!parsed) {
      cliError(
        `${figures_default.cross} Invalid marketplace source format. Try: owner/repo, https://..., or ./path`
      );
    }
    if ("error" in parsed) {
      cliError(`${figures_default.cross} ${parsed.error}`);
    }
    const scope = options.scope ?? "user";
    if (scope !== "user" && scope !== "project" && scope !== "local") {
      cliError(
        `${figures_default.cross} Invalid scope '${scope}'. Use: user, project, or local`
      );
    }
    const settingSource = scopeToSettingSource(scope);
    let marketplaceSource = parsed;
    if (options.sparse && options.sparse.length > 0) {
      if (marketplaceSource.source === "github" || marketplaceSource.source === "git") {
        marketplaceSource = {
          ...marketplaceSource,
          sparsePaths: options.sparse
        };
      } else {
        cliError(
          `${figures_default.cross} --sparse is only supported for github and git marketplace sources (got: ${marketplaceSource.source})`
        );
      }
    }
    console.log("Adding marketplace...");
    const { name, alreadyMaterialized, resolvedSource } = await addMarketplaceSource(marketplaceSource, (message) => {
      console.log(message);
    });
    saveMarketplaceToSettings(name, { source: resolvedSource }, settingSource);
    clearAllCaches();
    let sourceType = marketplaceSource.source;
    if (marketplaceSource.source === "github") {
      sourceType = marketplaceSource.repo;
    }
    logEvent("tengu_marketplace_added", {
      source_type: sourceType
    });
    cliOk(
      alreadyMaterialized ? `${figures_default.tick} Marketplace '${name}' already on disk \u2014 declared in ${scope} settings` : `${figures_default.tick} Successfully added marketplace: ${name} (declared in ${scope} settings)`
    );
  } catch (error) {
    handleMarketplaceError(error, "add marketplace");
  }
}
async function marketplaceListHandler(options) {
  if (options.cowork) setUseCoworkPlugins(true);
  try {
    const config = await loadKnownMarketplacesConfig();
    const names = Object.keys(config);
    if (options.json) {
      const marketplaces = names.sort().map((name) => {
        const marketplace = config[name];
        const source = marketplace?.source;
        return {
          name,
          source: source?.source,
          ...source?.source === "github" && { repo: source.repo },
          ...source?.source === "git" && { url: source.url },
          ...source?.source === "url" && { url: source.url },
          ...source?.source === "directory" && { path: source.path },
          ...source?.source === "file" && { path: source.path },
          installLocation: marketplace?.installLocation
        };
      });
      cliOk(jsonStringify(marketplaces, null, 2));
    }
    if (names.length === 0) {
      cliOk("No marketplaces configured");
    }
    console.log("Configured marketplaces:\n");
    names.forEach((name) => {
      const marketplace = config[name];
      console.log(`  ${figures_default.pointer} ${name}`);
      if (marketplace?.source) {
        const src = marketplace.source;
        if (src.source === "github") {
          console.log(`    Source: GitHub (${src.repo})`);
        } else if (src.source === "git") {
          console.log(`    Source: Git (${src.url})`);
        } else if (src.source === "url") {
          console.log(`    Source: URL (${src.url})`);
        } else if (src.source === "directory") {
          console.log(`    Source: Directory (${src.path})`);
        } else if (src.source === "file") {
          console.log(`    Source: File (${src.path})`);
        }
      }
      console.log("");
    });
    cliOk();
  } catch (error) {
    handleMarketplaceError(error, "list marketplaces");
  }
}
async function marketplaceRemoveHandler(name, options) {
  if (options.cowork) setUseCoworkPlugins(true);
  try {
    await removeMarketplaceSource(name);
    clearAllCaches();
    logEvent("tengu_marketplace_removed", {
      marketplace_name: name
    });
    cliOk(`${figures_default.tick} Successfully removed marketplace: ${name}`);
  } catch (error) {
    handleMarketplaceError(error, "remove marketplace");
  }
}
async function marketplaceUpdateHandler(name, options) {
  if (options.cowork) setUseCoworkPlugins(true);
  try {
    if (name) {
      console.log(`Updating marketplace: ${name}...`);
      await refreshMarketplace(name, (message) => {
        console.log(message);
      });
      clearAllCaches();
      logEvent("tengu_marketplace_updated", {
        marketplace_name: name
      });
      cliOk(`${figures_default.tick} Successfully updated marketplace: ${name}`);
    } else {
      const config = await loadKnownMarketplacesConfig();
      const marketplaceNames = Object.keys(config);
      if (marketplaceNames.length === 0) {
        cliOk("No marketplaces configured");
      }
      console.log(`Updating ${marketplaceNames.length} marketplace(s)...`);
      await refreshAllMarketplaces();
      clearAllCaches();
      logEvent("tengu_marketplace_updated_all", {
        count: marketplaceNames.length
      });
      cliOk(
        `${figures_default.tick} Successfully updated ${marketplaceNames.length} marketplace(s)`
      );
    }
  } catch (error) {
    handleMarketplaceError(error, "update marketplace(s)");
  }
}
async function pluginInstallHandler(plugin, options) {
  if (options.cowork) setUseCoworkPlugins(true);
  const scope = options.scope || "user";
  if (options.cowork && scope !== "user") {
    cliError("--cowork can only be used with user scope");
  }
  if (!VALID_INSTALLABLE_SCOPES.includes(
    scope
  )) {
    cliError(
      `Invalid scope: ${scope}. Must be one of: ${VALID_INSTALLABLE_SCOPES.join(", ")}.`
    );
  }
  const { name, marketplace } = parsePluginIdentifier(plugin);
  logEvent("tengu_plugin_install_command", {
    _PROTO_plugin_name: name,
    ...marketplace && {
      _PROTO_marketplace_name: marketplace
    },
    scope
  });
  await installPlugin(plugin, scope);
}
async function pluginUninstallHandler(plugin, options) {
  if (options.cowork) setUseCoworkPlugins(true);
  const scope = options.scope || "user";
  if (options.cowork && scope !== "user") {
    cliError("--cowork can only be used with user scope");
  }
  if (!VALID_INSTALLABLE_SCOPES.includes(
    scope
  )) {
    cliError(
      `Invalid scope: ${scope}. Must be one of: ${VALID_INSTALLABLE_SCOPES.join(", ")}.`
    );
  }
  const { name, marketplace } = parsePluginIdentifier(plugin);
  logEvent("tengu_plugin_uninstall_command", {
    _PROTO_plugin_name: name,
    ...marketplace && {
      _PROTO_marketplace_name: marketplace
    },
    scope
  });
  await uninstallPlugin(
    plugin,
    scope,
    options.keepData
  );
}
async function pluginEnableHandler(plugin, options) {
  if (options.cowork) setUseCoworkPlugins(true);
  let scope;
  if (options.scope) {
    if (!VALID_INSTALLABLE_SCOPES.includes(
      options.scope
    )) {
      cliError(
        `Invalid scope "${options.scope}". Valid scopes: ${VALID_INSTALLABLE_SCOPES.join(", ")}`
      );
    }
    scope = options.scope;
  }
  if (options.cowork && scope !== void 0 && scope !== "user") {
    cliError("--cowork can only be used with user scope");
  }
  if (options.cowork && scope === void 0) {
    scope = "user";
  }
  const { name, marketplace } = parsePluginIdentifier(plugin);
  logEvent("tengu_plugin_enable_command", {
    _PROTO_plugin_name: name,
    ...marketplace && {
      _PROTO_marketplace_name: marketplace
    },
    scope: scope ?? "auto"
  });
  await enablePlugin(plugin, scope);
}
async function pluginDisableHandler(plugin, options) {
  if (options.all && plugin) {
    cliError("Cannot use --all with a specific plugin");
  }
  if (!options.all && !plugin) {
    cliError("Please specify a plugin name or use --all to disable all plugins");
  }
  if (options.cowork) setUseCoworkPlugins(true);
  if (options.all) {
    if (options.scope) {
      cliError("Cannot use --scope with --all");
    }
    logEvent("tengu_plugin_disable_command", {});
    await disableAllPlugins();
    return;
  }
  let scope;
  if (options.scope) {
    if (!VALID_INSTALLABLE_SCOPES.includes(
      options.scope
    )) {
      cliError(
        `Invalid scope "${options.scope}". Valid scopes: ${VALID_INSTALLABLE_SCOPES.join(", ")}`
      );
    }
    scope = options.scope;
  }
  if (options.cowork && scope !== void 0 && scope !== "user") {
    cliError("--cowork can only be used with user scope");
  }
  if (options.cowork && scope === void 0) {
    scope = "user";
  }
  const { name, marketplace } = parsePluginIdentifier(plugin);
  logEvent("tengu_plugin_disable_command", {
    _PROTO_plugin_name: name,
    ...marketplace && {
      _PROTO_marketplace_name: marketplace
    },
    scope: scope ?? "auto"
  });
  await disablePlugin(plugin, scope);
}
async function pluginUpdateHandler(plugin, options) {
  if (options.cowork) setUseCoworkPlugins(true);
  const { name, marketplace } = parsePluginIdentifier(plugin);
  logEvent("tengu_plugin_update_command", {
    _PROTO_plugin_name: name,
    ...marketplace && {
      _PROTO_marketplace_name: marketplace
    }
  });
  let scope = "user";
  if (options.scope) {
    if (!VALID_UPDATE_SCOPES.includes(
      options.scope
    )) {
      cliError(
        `Invalid scope "${options.scope}". Valid scopes: ${VALID_UPDATE_SCOPES.join(", ")}`
      );
    }
    scope = options.scope;
  }
  if (options.cowork && scope !== "user") {
    cliError("--cowork can only be used with user scope");
  }
  await updatePluginCli(plugin, scope);
}
export {
  VALID_INSTALLABLE_SCOPES,
  VALID_UPDATE_SCOPES,
  handleMarketplaceError,
  marketplaceAddHandler,
  marketplaceListHandler,
  marketplaceRemoveHandler,
  marketplaceUpdateHandler,
  pluginDisableHandler,
  pluginEnableHandler,
  pluginInstallHandler,
  pluginListHandler,
  pluginUninstallHandler,
  pluginUpdateHandler,
  pluginValidateHandler
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NsaS9oYW5kbGVycy9wbHVnaW5zLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIFBsdWdpbiBhbmQgbWFya2V0cGxhY2Ugc3ViY29tbWFuZCBoYW5kbGVycyBcdTIwMTQgZXh0cmFjdGVkIGZyb20gbWFpbi50c3ggZm9yIGxhenkgbG9hZGluZy5cbiAqIFRoZXNlIGFyZSBkeW5hbWljYWxseSBpbXBvcnRlZCBvbmx5IHdoZW4gYGNsYXVkZSBwbHVnaW4gKmAgb3IgYGNsYXVkZSBwbHVnaW4gbWFya2V0cGxhY2UgKmAgcnVucy5cbiAqL1xuLyogZXNsaW50LWRpc2FibGUgY3VzdG9tLXJ1bGVzL25vLXByb2Nlc3MtZXhpdCAtLSBDTEkgc3ViY29tbWFuZCBoYW5kbGVycyBpbnRlbnRpb25hbGx5IGV4aXQgKi9cbmltcG9ydCBmaWd1cmVzIGZyb20gJ2ZpZ3VyZXMnXG5pbXBvcnQgeyBiYXNlbmFtZSwgZGlybmFtZSB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBzZXRVc2VDb3dvcmtQbHVnaW5zIH0gZnJvbSAnLi4vLi4vYm9vdHN0cmFwL3N0YXRlLmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICB0eXBlIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19QSUlfVEFHR0VELFxuICBsb2dFdmVudCxcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHtcbiAgZGlzYWJsZUFsbFBsdWdpbnMsXG4gIGRpc2FibGVQbHVnaW4sXG4gIGVuYWJsZVBsdWdpbixcbiAgaW5zdGFsbFBsdWdpbixcbiAgdW5pbnN0YWxsUGx1Z2luLFxuICB1cGRhdGVQbHVnaW5DbGksXG4gIFZBTElEX0lOU1RBTExBQkxFX1NDT1BFUyxcbiAgVkFMSURfVVBEQVRFX1NDT1BFUyxcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvcGx1Z2lucy9wbHVnaW5DbGlDb21tYW5kcy5qcydcbmltcG9ydCB7IGdldFBsdWdpbkVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uL3R5cGVzL3BsdWdpbi5qcydcbmltcG9ydCB7IGVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Vycm9ycy5qcydcbmltcG9ydCB7IGxvZ0Vycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nLmpzJ1xuaW1wb3J0IHsgY2xlYXJBbGxDYWNoZXMgfSBmcm9tICcuLi8uLi91dGlscy9wbHVnaW5zL2NhY2hlVXRpbHMuanMnXG5pbXBvcnQgeyBnZXRJbnN0YWxsQ291bnRzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcGx1Z2lucy9pbnN0YWxsQ291bnRzLmpzJ1xuaW1wb3J0IHtcbiAgaXNQbHVnaW5JbnN0YWxsZWQsXG4gIGxvYWRJbnN0YWxsZWRQbHVnaW5zVjIsXG59IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvaW5zdGFsbGVkUGx1Z2luc01hbmFnZXIuanMnXG5pbXBvcnQge1xuICBjcmVhdGVQbHVnaW5JZCxcbiAgbG9hZE1hcmtldHBsYWNlc1dpdGhHcmFjZWZ1bERlZ3JhZGF0aW9uLFxufSBmcm9tICcuLi8uLi91dGlscy9wbHVnaW5zL21hcmtldHBsYWNlSGVscGVycy5qcydcbmltcG9ydCB7XG4gIGFkZE1hcmtldHBsYWNlU291cmNlLFxuICBsb2FkS25vd25NYXJrZXRwbGFjZXNDb25maWcsXG4gIHJlZnJlc2hBbGxNYXJrZXRwbGFjZXMsXG4gIHJlZnJlc2hNYXJrZXRwbGFjZSxcbiAgcmVtb3ZlTWFya2V0cGxhY2VTb3VyY2UsXG4gIHNhdmVNYXJrZXRwbGFjZVRvU2V0dGluZ3MsXG59IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvbWFya2V0cGxhY2VNYW5hZ2VyLmpzJ1xuaW1wb3J0IHsgbG9hZFBsdWdpbk1jcFNlcnZlcnMgfSBmcm9tICcuLi8uLi91dGlscy9wbHVnaW5zL21jcFBsdWdpbkludGVncmF0aW9uLmpzJ1xuaW1wb3J0IHsgcGFyc2VNYXJrZXRwbGFjZUlucHV0IH0gZnJvbSAnLi4vLi4vdXRpbHMvcGx1Z2lucy9wYXJzZU1hcmtldHBsYWNlSW5wdXQuanMnXG5pbXBvcnQge1xuICBwYXJzZVBsdWdpbklkZW50aWZpZXIsXG4gIHNjb3BlVG9TZXR0aW5nU291cmNlLFxufSBmcm9tICcuLi8uLi91dGlscy9wbHVnaW5zL3BsdWdpbklkZW50aWZpZXIuanMnXG5pbXBvcnQgeyBsb2FkQWxsUGx1Z2lucyB9IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvcGx1Z2luTG9hZGVyLmpzJ1xuaW1wb3J0IHR5cGUgeyBQbHVnaW5Tb3VyY2UgfSBmcm9tICcuLi8uLi91dGlscy9wbHVnaW5zL3NjaGVtYXMuanMnXG5pbXBvcnQge1xuICB0eXBlIFZhbGlkYXRpb25SZXN1bHQsXG4gIHZhbGlkYXRlTWFuaWZlc3QsXG4gIHZhbGlkYXRlUGx1Z2luQ29udGVudHMsXG59IGZyb20gJy4uLy4uL3V0aWxzL3BsdWdpbnMvdmFsaWRhdGVQbHVnaW4uanMnXG5pbXBvcnQgeyBqc29uU3RyaW5naWZ5IH0gZnJvbSAnLi4vLi4vdXRpbHMvc2xvd09wZXJhdGlvbnMuanMnXG5pbXBvcnQgeyBwbHVyYWwgfSBmcm9tICcuLi8uLi91dGlscy9zdHJpbmdVdGlscy5qcydcbmltcG9ydCB7IGNsaUVycm9yLCBjbGlPayB9IGZyb20gJy4uL2V4aXQuanMnXG5cbi8vIFJlLWV4cG9ydCBmb3IgbWFpbi50c3ggdG8gcmVmZXJlbmNlIGluIG9wdGlvbiBkZWZpbml0aW9uc1xuZXhwb3J0IHsgVkFMSURfSU5TVEFMTEFCTEVfU0NPUEVTLCBWQUxJRF9VUERBVEVfU0NPUEVTIH1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gaGFuZGxlIG1hcmtldHBsYWNlIGNvbW1hbmQgZXJyb3JzIGNvbnNpc3RlbnRseS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU1hcmtldHBsYWNlRXJyb3IoZXJyb3I6IHVua25vd24sIGFjdGlvbjogc3RyaW5nKTogbmV2ZXIge1xuICBsb2dFcnJvcihlcnJvcilcbiAgY2xpRXJyb3IoYCR7ZmlndXJlcy5jcm9zc30gRmFpbGVkIHRvICR7YWN0aW9ufTogJHtlcnJvck1lc3NhZ2UoZXJyb3IpfWApXG59XG5cbmZ1bmN0aW9uIHByaW50VmFsaWRhdGlvblJlc3VsdChyZXN1bHQ6IFZhbGlkYXRpb25SZXN1bHQpOiB2b2lkIHtcbiAgaWYgKHJlc3VsdC5lcnJvcnMubGVuZ3RoID4gMCkge1xuICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGAke2ZpZ3VyZXMuY3Jvc3N9IEZvdW5kICR7cmVzdWx0LmVycm9ycy5sZW5ndGh9ICR7cGx1cmFsKHJlc3VsdC5lcnJvcnMubGVuZ3RoLCAnZXJyb3InKX06XFxuYCxcbiAgICApXG4gICAgcmVzdWx0LmVycm9ycy5mb3JFYWNoKGVycm9yID0+IHtcbiAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICAgIGNvbnNvbGUubG9nKGAgICR7ZmlndXJlcy5wb2ludGVyfSAke2Vycm9yLnBhdGh9OiAke2Vycm9yLm1lc3NhZ2V9YClcbiAgICB9KVxuICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICBjb25zb2xlLmxvZygnJylcbiAgfVxuICBpZiAocmVzdWx0Lndhcm5pbmdzLmxlbmd0aCA+IDApIHtcbiAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTo6IGludGVudGlvbmFsIGNvbnNvbGUgb3V0cHV0XG4gICAgY29uc29sZS5sb2coXG4gICAgICBgJHtmaWd1cmVzLndhcm5pbmd9IEZvdW5kICR7cmVzdWx0Lndhcm5pbmdzLmxlbmd0aH0gJHtwbHVyYWwocmVzdWx0Lndhcm5pbmdzLmxlbmd0aCwgJ3dhcm5pbmcnKX06XFxuYCxcbiAgICApXG4gICAgcmVzdWx0Lndhcm5pbmdzLmZvckVhY2god2FybmluZyA9PiB7XG4gICAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTo6IGludGVudGlvbmFsIGNvbnNvbGUgb3V0cHV0XG4gICAgICBjb25zb2xlLmxvZyhgICAke2ZpZ3VyZXMucG9pbnRlcn0gJHt3YXJuaW5nLnBhdGh9OiAke3dhcm5pbmcubWVzc2FnZX1gKVxuICAgIH0pXG4gICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgIGNvbnNvbGUubG9nKCcnKVxuICB9XG59XG5cbi8vIHBsdWdpbiB2YWxpZGF0ZVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBsdWdpblZhbGlkYXRlSGFuZGxlcihcbiAgbWFuaWZlc3RQYXRoOiBzdHJpbmcsXG4gIG9wdGlvbnM6IHsgY293b3JrPzogYm9vbGVhbiB9LFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmIChvcHRpb25zLmNvd29yaykgc2V0VXNlQ293b3JrUGx1Z2lucyh0cnVlKVxuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHZhbGlkYXRlTWFuaWZlc3QobWFuaWZlc3RQYXRoKVxuXG4gICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgIGNvbnNvbGUubG9nKGBWYWxpZGF0aW5nICR7cmVzdWx0LmZpbGVUeXBlfSBtYW5pZmVzdDogJHtyZXN1bHQuZmlsZVBhdGh9XFxuYClcbiAgICBwcmludFZhbGlkYXRpb25SZXN1bHQocmVzdWx0KVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHBsdWdpbiBtYW5pZmVzdCBsb2NhdGVkIGluc2lkZSBhIC5jbGF1ZGUtcGx1Z2luIGRpcmVjdG9yeSxcbiAgICAvLyBhbHNvIHZhbGlkYXRlIHRoZSBwbHVnaW4ncyBjb250ZW50IGZpbGVzIChza2lsbHMsIGFnZW50cywgY29tbWFuZHMsXG4gICAgLy8gaG9va3MpLiBXb3JrcyB3aGV0aGVyIHRoZSB1c2VyIHBhc3NlZCBhIGRpcmVjdG9yeSBvciB0aGUgcGx1Z2luLmpzb25cbiAgICAvLyBwYXRoIGRpcmVjdGx5LlxuICAgIGxldCBjb250ZW50UmVzdWx0czogVmFsaWRhdGlvblJlc3VsdFtdID0gW11cbiAgICBpZiAocmVzdWx0LmZpbGVUeXBlID09PSAncGx1Z2luJykge1xuICAgICAgY29uc3QgbWFuaWZlc3REaXIgPSBkaXJuYW1lKHJlc3VsdC5maWxlUGF0aClcbiAgICAgIGlmIChiYXNlbmFtZShtYW5pZmVzdERpcikgPT09ICcuY2xhdWRlLXBsdWdpbicpIHtcbiAgICAgICAgY29udGVudFJlc3VsdHMgPSBhd2FpdCB2YWxpZGF0ZVBsdWdpbkNvbnRlbnRzKGRpcm5hbWUobWFuaWZlc3REaXIpKVxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgY29udGVudFJlc3VsdHMpIHtcbiAgICAgICAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTo6IGludGVudGlvbmFsIGNvbnNvbGUgb3V0cHV0XG4gICAgICAgICAgY29uc29sZS5sb2coYFZhbGlkYXRpbmcgJHtyLmZpbGVUeXBlfTogJHtyLmZpbGVQYXRofVxcbmApXG4gICAgICAgICAgcHJpbnRWYWxpZGF0aW9uUmVzdWx0KHIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhbGxTdWNjZXNzID0gcmVzdWx0LnN1Y2Nlc3MgJiYgY29udGVudFJlc3VsdHMuZXZlcnkociA9PiByLnN1Y2Nlc3MpXG4gICAgY29uc3QgaGFzV2FybmluZ3MgPVxuICAgICAgcmVzdWx0Lndhcm5pbmdzLmxlbmd0aCA+IDAgfHxcbiAgICAgIGNvbnRlbnRSZXN1bHRzLnNvbWUociA9PiByLndhcm5pbmdzLmxlbmd0aCA+IDApXG5cbiAgICBpZiAoYWxsU3VjY2Vzcykge1xuICAgICAgY2xpT2soXG4gICAgICAgIGhhc1dhcm5pbmdzXG4gICAgICAgICAgPyBgJHtmaWd1cmVzLnRpY2t9IFZhbGlkYXRpb24gcGFzc2VkIHdpdGggd2FybmluZ3NgXG4gICAgICAgICAgOiBgJHtmaWd1cmVzLnRpY2t9IFZhbGlkYXRpb24gcGFzc2VkYCxcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgICAgY29uc29sZS5sb2coYCR7ZmlndXJlcy5jcm9zc30gVmFsaWRhdGlvbiBmYWlsZWRgKVxuICAgICAgcHJvY2Vzcy5leGl0KDEpXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZ0Vycm9yKGVycm9yKVxuICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYCR7ZmlndXJlcy5jcm9zc30gVW5leHBlY3RlZCBlcnJvciBkdXJpbmcgdmFsaWRhdGlvbjogJHtlcnJvck1lc3NhZ2UoZXJyb3IpfWAsXG4gICAgKVxuICAgIHByb2Nlc3MuZXhpdCgyKVxuICB9XG59XG5cbi8vIHBsdWdpbiBsaXN0IChsaW5lcyA1MjE3XHUyMDEzNTQxNilcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwbHVnaW5MaXN0SGFuZGxlcihvcHRpb25zOiB7XG4gIGpzb24/OiBib29sZWFuXG4gIGF2YWlsYWJsZT86IGJvb2xlYW5cbiAgY293b3JrPzogYm9vbGVhblxufSk6IFByb21pc2U8dm9pZD4ge1xuICBpZiAob3B0aW9ucy5jb3dvcmspIHNldFVzZUNvd29ya1BsdWdpbnModHJ1ZSlcbiAgbG9nRXZlbnQoJ3Rlbmd1X3BsdWdpbl9saXN0X2NvbW1hbmQnLCB7fSlcblxuICBjb25zdCBpbnN0YWxsZWREYXRhID0gbG9hZEluc3RhbGxlZFBsdWdpbnNWMigpXG4gIGNvbnN0IHsgZ2V0UGx1Z2luRWRpdGFibGVTY29wZXMgfSA9IGF3YWl0IGltcG9ydChcbiAgICAnLi4vLi4vdXRpbHMvcGx1Z2lucy9wbHVnaW5TdGFydHVwQ2hlY2suanMnXG4gIClcbiAgY29uc3QgZW5hYmxlZFBsdWdpbnMgPSBnZXRQbHVnaW5FZGl0YWJsZVNjb3BlcygpXG5cbiAgY29uc3QgcGx1Z2luSWRzID0gT2JqZWN0LmtleXMoaW5zdGFsbGVkRGF0YS5wbHVnaW5zKVxuXG4gIC8vIExvYWQgYWxsIHBsdWdpbnMgb25jZS4gVGhlIEpTT04gYW5kIGh1bWFuIHBhdGhzIGJvdGggbmVlZDpcbiAgLy8gIC0gbG9hZEVycm9ycyAodG8gc2hvdyBsb2FkIGZhaWx1cmVzIHBlciBwbHVnaW4pXG4gIC8vICAtIGlubGluZSBwbHVnaW5zIChzZXNzaW9uLW9ubHkgdmlhIC0tcGx1Z2luLWRpciwgc291cmNlPSduYW1lQGlubGluZScpXG4gIC8vICAgIHdoaWNoIGFyZSBOT1QgaW4gaW5zdGFsbGVkRGF0YS5wbHVnaW5zIChWMiBib29ra2VlcGluZykgXHUyMDE0IHRoZXkgbXVzdFxuICAvLyAgICBiZSBzdXJmYWNlZCBzZXBhcmF0ZWx5IG9yIGBwbHVnaW4gbGlzdGAgc2lsZW50bHkgaWdub3JlcyAtLXBsdWdpbi1kaXIuXG4gIGNvbnN0IHtcbiAgICBlbmFibGVkOiBsb2FkZWRFbmFibGVkLFxuICAgIGRpc2FibGVkOiBsb2FkZWREaXNhYmxlZCxcbiAgICBlcnJvcnM6IGxvYWRFcnJvcnMsXG4gIH0gPSBhd2FpdCBsb2FkQWxsUGx1Z2lucygpXG4gIGNvbnN0IGFsbExvYWRlZFBsdWdpbnMgPSBbLi4ubG9hZGVkRW5hYmxlZCwgLi4ubG9hZGVkRGlzYWJsZWRdXG4gIGNvbnN0IGlubGluZVBsdWdpbnMgPSBhbGxMb2FkZWRQbHVnaW5zLmZpbHRlcihwID0+XG4gICAgcC5zb3VyY2UuZW5kc1dpdGgoJ0BpbmxpbmUnKSxcbiAgKVxuICAvLyBQYXRoLWxldmVsIGlubGluZSBmYWlsdXJlcyAoZGlyIGRvZXNuJ3QgZXhpc3QsIHBhcnNlIGVycm9yIGJlZm9yZVxuICAvLyBtYW5pZmVzdCBpcyByZWFkKSB1c2Ugc291cmNlPSdpbmxpbmVbTl0nLiBQbHVnaW4tbGV2ZWwgZXJyb3JzIGFmdGVyXG4gIC8vIG1hbmlmZXN0IHJlYWQgdXNlIHNvdXJjZT0nbmFtZUBpbmxpbmUnLiBDb2xsZWN0IGJvdGggZm9yIHRoZSBzZXNzaW9uXG4gIC8vIHNlY3Rpb24gXHUyMDE0IHRoZXNlIGFyZSBvdGhlcndpc2UgaW52aXNpYmxlIHNpbmNlIHRoZXkgaGF2ZSBubyBwbHVnaW5JZC5cbiAgY29uc3QgaW5saW5lTG9hZEVycm9ycyA9IGxvYWRFcnJvcnMuZmlsdGVyKFxuICAgIGUgPT4gZS5zb3VyY2UuZW5kc1dpdGgoJ0BpbmxpbmUnKSB8fCBlLnNvdXJjZS5zdGFydHNXaXRoKCdpbmxpbmVbJyksXG4gIClcblxuICBpZiAob3B0aW9ucy5qc29uKSB7XG4gICAgLy8gQ3JlYXRlIGEgbWFwIG9mIHBsdWdpbiBzb3VyY2UgdG8gbG9hZGVkIHBsdWdpbiBmb3IgcXVpY2sgbG9va3VwXG4gICAgY29uc3QgbG9hZGVkUGx1Z2luTWFwID0gbmV3IE1hcChhbGxMb2FkZWRQbHVnaW5zLm1hcChwID0+IFtwLnNvdXJjZSwgcF0pKVxuXG4gICAgY29uc3QgcGx1Z2luczogQXJyYXk8e1xuICAgICAgaWQ6IHN0cmluZ1xuICAgICAgdmVyc2lvbjogc3RyaW5nXG4gICAgICBzY29wZTogc3RyaW5nXG4gICAgICBlbmFibGVkOiBib29sZWFuXG4gICAgICBpbnN0YWxsUGF0aDogc3RyaW5nXG4gICAgICBpbnN0YWxsZWRBdD86IHN0cmluZ1xuICAgICAgbGFzdFVwZGF0ZWQ/OiBzdHJpbmdcbiAgICAgIHByb2plY3RQYXRoPzogc3RyaW5nXG4gICAgICBtY3BTZXJ2ZXJzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICAgIGVycm9ycz86IHN0cmluZ1tdXG4gICAgfT4gPSBbXVxuXG4gICAgZm9yIChjb25zdCBwbHVnaW5JZCBvZiBwbHVnaW5JZHMuc29ydCgpKSB7XG4gICAgICBjb25zdCBpbnN0YWxsYXRpb25zID0gaW5zdGFsbGVkRGF0YS5wbHVnaW5zW3BsdWdpbklkXVxuICAgICAgaWYgKCFpbnN0YWxsYXRpb25zIHx8IGluc3RhbGxhdGlvbnMubGVuZ3RoID09PSAwKSBjb250aW51ZVxuXG4gICAgICAvLyBGaW5kIGxvYWRpbmcgZXJyb3JzIGZvciB0aGlzIHBsdWdpblxuICAgICAgY29uc3QgcGx1Z2luTmFtZSA9IHBhcnNlUGx1Z2luSWRlbnRpZmllcihwbHVnaW5JZCkubmFtZVxuICAgICAgY29uc3QgcGx1Z2luRXJyb3JzID0gbG9hZEVycm9yc1xuICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgIGUgPT5cbiAgICAgICAgICAgIGUuc291cmNlID09PSBwbHVnaW5JZCB8fCAoJ3BsdWdpbicgaW4gZSAmJiBlLnBsdWdpbiA9PT0gcGx1Z2luTmFtZSksXG4gICAgICAgIClcbiAgICAgICAgLm1hcChnZXRQbHVnaW5FcnJvck1lc3NhZ2UpXG5cbiAgICAgIGZvciAoY29uc3QgaW5zdGFsbGF0aW9uIG9mIGluc3RhbGxhdGlvbnMpIHtcbiAgICAgICAgLy8gVHJ5IHRvIGZpbmQgdGhlIGxvYWRlZCBwbHVnaW4gdG8gZ2V0IE1DUCBzZXJ2ZXJzXG4gICAgICAgIGNvbnN0IGxvYWRlZFBsdWdpbiA9IGxvYWRlZFBsdWdpbk1hcC5nZXQocGx1Z2luSWQpXG4gICAgICAgIGxldCBtY3BTZXJ2ZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IHVuZGVmaW5lZFxuXG4gICAgICAgIGlmIChsb2FkZWRQbHVnaW4pIHtcbiAgICAgICAgICAvLyBMb2FkIE1DUCBzZXJ2ZXJzIGlmIG5vdCBhbHJlYWR5IGNhY2hlZFxuICAgICAgICAgIGNvbnN0IHNlcnZlcnMgPVxuICAgICAgICAgICAgbG9hZGVkUGx1Z2luLm1jcFNlcnZlcnMgfHxcbiAgICAgICAgICAgIChhd2FpdCBsb2FkUGx1Z2luTWNwU2VydmVycyhsb2FkZWRQbHVnaW4pKVxuICAgICAgICAgIGlmIChzZXJ2ZXJzICYmIE9iamVjdC5rZXlzKHNlcnZlcnMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG1jcFNlcnZlcnMgPSBzZXJ2ZXJzXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcGx1Z2lucy5wdXNoKHtcbiAgICAgICAgICBpZDogcGx1Z2luSWQsXG4gICAgICAgICAgdmVyc2lvbjogaW5zdGFsbGF0aW9uLnZlcnNpb24gfHwgJ3Vua25vd24nLFxuICAgICAgICAgIHNjb3BlOiBpbnN0YWxsYXRpb24uc2NvcGUsXG4gICAgICAgICAgZW5hYmxlZDogZW5hYmxlZFBsdWdpbnMuaGFzKHBsdWdpbklkKSxcbiAgICAgICAgICBpbnN0YWxsUGF0aDogaW5zdGFsbGF0aW9uLmluc3RhbGxQYXRoLFxuICAgICAgICAgIGluc3RhbGxlZEF0OiBpbnN0YWxsYXRpb24uaW5zdGFsbGVkQXQsXG4gICAgICAgICAgbGFzdFVwZGF0ZWQ6IGluc3RhbGxhdGlvbi5sYXN0VXBkYXRlZCxcbiAgICAgICAgICBwcm9qZWN0UGF0aDogaW5zdGFsbGF0aW9uLnByb2plY3RQYXRoLFxuICAgICAgICAgIG1jcFNlcnZlcnMsXG4gICAgICAgICAgZXJyb3JzOiBwbHVnaW5FcnJvcnMubGVuZ3RoID4gMCA/IHBsdWdpbkVycm9ycyA6IHVuZGVmaW5lZCxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTZXNzaW9uLW9ubHkgcGx1Z2luczogc2NvcGU9J3Nlc3Npb24nLCBubyBpbnN0YWxsIG1ldGFkYXRhLlxuICAgIC8vIEZpbHRlciBmcm9tIGlubGluZUxvYWRFcnJvcnMgKG5vdCBsb2FkRXJyb3JzKSBzbyBhbiBpbnN0YWxsZWQgcGx1Z2luXG4gICAgLy8gd2l0aCB0aGUgc2FtZSBtYW5pZmVzdCBuYW1lIGRvZXNuJ3QgY3Jvc3MtY29udGFtaW5hdGUgdmlhIGUucGx1Z2luLlxuICAgIC8vIFRoZSBlLnBsdWdpbiBmYWxsYmFjayBjYXRjaGVzIHRoZSBkaXJOYW1lXHUyMjYwbWFuaWZlc3ROYW1lIGNhc2U6XG4gICAgLy8gY3JlYXRlUGx1Z2luRnJvbVBhdGggdGFncyBlcnJvcnMgd2l0aCBgJHtkaXJOYW1lfUBpbmxpbmVgIGJ1dFxuICAgIC8vIHBsdWdpbi5zb3VyY2UgaXMgcmVhc3NpZ25lZCB0byBgJHttYW5pZmVzdC5uYW1lfUBpbmxpbmVgIGFmdGVyd2FyZFxuICAgIC8vIChwbHVnaW5Mb2FkZXIudHMgbG9hZElubGluZVBsdWdpbnMpLCBzbyBlLnNvdXJjZSAhPT0gcC5zb3VyY2Ugd2hlblxuICAgIC8vIGEgZGV2IGNoZWNrb3V0IGRpciBsaWtlIH4vY29kZS9teS1mb3JrLyBoYXMgbWFuaWZlc3QgbmFtZSAnY29vbC1wbHVnaW4nLlxuICAgIGZvciAoY29uc3QgcCBvZiBpbmxpbmVQbHVnaW5zKSB7XG4gICAgICBjb25zdCBzZXJ2ZXJzID0gcC5tY3BTZXJ2ZXJzIHx8IChhd2FpdCBsb2FkUGx1Z2luTWNwU2VydmVycyhwKSlcbiAgICAgIGNvbnN0IHBFcnJvcnMgPSBpbmxpbmVMb2FkRXJyb3JzXG4gICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgZSA9PiBlLnNvdXJjZSA9PT0gcC5zb3VyY2UgfHwgKCdwbHVnaW4nIGluIGUgJiYgZS5wbHVnaW4gPT09IHAubmFtZSksXG4gICAgICAgIClcbiAgICAgICAgLm1hcChnZXRQbHVnaW5FcnJvck1lc3NhZ2UpXG4gICAgICBwbHVnaW5zLnB1c2goe1xuICAgICAgICBpZDogcC5zb3VyY2UsXG4gICAgICAgIHZlcnNpb246IHAubWFuaWZlc3QudmVyc2lvbiA/PyAndW5rbm93bicsXG4gICAgICAgIHNjb3BlOiAnc2Vzc2lvbicsXG4gICAgICAgIGVuYWJsZWQ6IHAuZW5hYmxlZCAhPT0gZmFsc2UsXG4gICAgICAgIGluc3RhbGxQYXRoOiBwLnBhdGgsXG4gICAgICAgIG1jcFNlcnZlcnM6XG4gICAgICAgICAgc2VydmVycyAmJiBPYmplY3Qua2V5cyhzZXJ2ZXJzKS5sZW5ndGggPiAwID8gc2VydmVycyA6IHVuZGVmaW5lZCxcbiAgICAgICAgZXJyb3JzOiBwRXJyb3JzLmxlbmd0aCA+IDAgPyBwRXJyb3JzIDogdW5kZWZpbmVkLFxuICAgICAgfSlcbiAgICB9XG4gICAgLy8gUGF0aC1sZXZlbCBpbmxpbmUgZmFpbHVyZXMgKC0tcGx1Z2luLWRpciAvbm9uZXhpc3RlbnQpOiBubyBMb2FkZWRQbHVnaW5cbiAgICAvLyBleGlzdHMgc28gdGhlIGxvb3AgYWJvdmUgY2FuJ3Qgc3VyZmFjZSB0aGVtLiBNaXJyb3IgdGhlIGh1bWFuLXBhdGhcbiAgICAvLyBoYW5kbGluZyBzbyBKU09OIGNvbnN1bWVycyBzZWUgdGhlIGZhaWx1cmUgaW5zdGVhZCBvZiBzaWxlbnQgb21pc3Npb24uXG4gICAgZm9yIChjb25zdCBlIG9mIGlubGluZUxvYWRFcnJvcnMuZmlsdGVyKGUgPT5cbiAgICAgIGUuc291cmNlLnN0YXJ0c1dpdGgoJ2lubGluZVsnKSxcbiAgICApKSB7XG4gICAgICBwbHVnaW5zLnB1c2goe1xuICAgICAgICBpZDogZS5zb3VyY2UsXG4gICAgICAgIHZlcnNpb246ICd1bmtub3duJyxcbiAgICAgICAgc2NvcGU6ICdzZXNzaW9uJyxcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgIGluc3RhbGxQYXRoOiAncGF0aCcgaW4gZSA/IGUucGF0aCA6ICcnLFxuICAgICAgICBlcnJvcnM6IFtnZXRQbHVnaW5FcnJvck1lc3NhZ2UoZSldLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBJZiAtLWF2YWlsYWJsZSBpcyBzZXQsIGFsc28gbG9hZCBhdmFpbGFibGUgcGx1Z2lucyBmcm9tIG1hcmtldHBsYWNlc1xuICAgIGlmIChvcHRpb25zLmF2YWlsYWJsZSkge1xuICAgICAgY29uc3QgYXZhaWxhYmxlOiBBcnJheTx7XG4gICAgICAgIHBsdWdpbklkOiBzdHJpbmdcbiAgICAgICAgbmFtZTogc3RyaW5nXG4gICAgICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nXG4gICAgICAgIG1hcmtldHBsYWNlTmFtZTogc3RyaW5nXG4gICAgICAgIHZlcnNpb24/OiBzdHJpbmdcbiAgICAgICAgc291cmNlOiBQbHVnaW5Tb3VyY2VcbiAgICAgICAgaW5zdGFsbENvdW50PzogbnVtYmVyXG4gICAgICB9PiA9IFtdXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IFtjb25maWcsIGluc3RhbGxDb3VudHNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIGxvYWRLbm93bk1hcmtldHBsYWNlc0NvbmZpZygpLFxuICAgICAgICAgIGdldEluc3RhbGxDb3VudHMoKSxcbiAgICAgICAgXSlcbiAgICAgICAgY29uc3QgeyBtYXJrZXRwbGFjZXMgfSA9XG4gICAgICAgICAgYXdhaXQgbG9hZE1hcmtldHBsYWNlc1dpdGhHcmFjZWZ1bERlZ3JhZGF0aW9uKGNvbmZpZylcblxuICAgICAgICBmb3IgKGNvbnN0IHtcbiAgICAgICAgICBuYW1lOiBtYXJrZXRwbGFjZU5hbWUsXG4gICAgICAgICAgZGF0YTogbWFya2V0cGxhY2UsXG4gICAgICAgIH0gb2YgbWFya2V0cGxhY2VzKSB7XG4gICAgICAgICAgaWYgKG1hcmtldHBsYWNlKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIG1hcmtldHBsYWNlLnBsdWdpbnMpIHtcbiAgICAgICAgICAgICAgY29uc3QgcGx1Z2luSWQgPSBjcmVhdGVQbHVnaW5JZChlbnRyeS5uYW1lLCBtYXJrZXRwbGFjZU5hbWUpXG4gICAgICAgICAgICAgIC8vIE9ubHkgaW5jbHVkZSBwbHVnaW5zIHRoYXQgYXJlIG5vdCBhbHJlYWR5IGluc3RhbGxlZFxuICAgICAgICAgICAgICBpZiAoIWlzUGx1Z2luSW5zdGFsbGVkKHBsdWdpbklkKSkge1xuICAgICAgICAgICAgICAgIGF2YWlsYWJsZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHBsdWdpbklkLFxuICAgICAgICAgICAgICAgICAgbmFtZTogZW50cnkubmFtZSxcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBlbnRyeS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgIG1hcmtldHBsYWNlTmFtZSxcbiAgICAgICAgICAgICAgICAgIHZlcnNpb246IGVudHJ5LnZlcnNpb24sXG4gICAgICAgICAgICAgICAgICBzb3VyY2U6IGVudHJ5LnNvdXJjZSxcbiAgICAgICAgICAgICAgICAgIGluc3RhbGxDb3VudDogaW5zdGFsbENvdW50cz8uZ2V0KHBsdWdpbklkKSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gU2lsZW50bHkgaWdub3JlIG1hcmtldHBsYWNlIGxvYWRpbmcgZXJyb3JzXG4gICAgICB9XG5cbiAgICAgIGNsaU9rKGpzb25TdHJpbmdpZnkoeyBpbnN0YWxsZWQ6IHBsdWdpbnMsIGF2YWlsYWJsZSB9LCBudWxsLCAyKSlcbiAgICB9IGVsc2Uge1xuICAgICAgY2xpT2soanNvblN0cmluZ2lmeShwbHVnaW5zLCBudWxsLCAyKSlcbiAgICB9XG4gIH1cblxuICBpZiAocGx1Z2luSWRzLmxlbmd0aCA9PT0gMCAmJiBpbmxpbmVQbHVnaW5zLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIGlubGluZUxvYWRFcnJvcnMgY2FuIGV4aXN0IHdpdGggemVybyBpbmxpbmUgcGx1Z2lucyAoZS5nLiAtLXBsdWdpbi1kaXJcbiAgICAvLyBwb2ludHMgYXQgYSBub25leGlzdGVudCBwYXRoKS4gRG9uJ3QgZWFybHktZXhpdCBvdmVyIHRoZW0gXHUyMDE0IGZhbGxcbiAgICAvLyB0aHJvdWdoIHRvIHRoZSBzZXNzaW9uIHNlY3Rpb24gc28gdGhlIGZhaWx1cmUgaXMgdmlzaWJsZS5cbiAgICBpZiAoaW5saW5lTG9hZEVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNsaU9rKFxuICAgICAgICAnTm8gcGx1Z2lucyBpbnN0YWxsZWQuIFVzZSBgYmxhdWRlIHBsdWdpbiBpbnN0YWxsYCB0byBpbnN0YWxsIGEgcGx1Z2luLicsXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgaWYgKHBsdWdpbklkcy5sZW5ndGggPiAwKSB7XG4gICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgIGNvbnNvbGUubG9nKCdJbnN0YWxsZWQgcGx1Z2luczpcXG4nKVxuICB9XG5cbiAgZm9yIChjb25zdCBwbHVnaW5JZCBvZiBwbHVnaW5JZHMuc29ydCgpKSB7XG4gICAgY29uc3QgaW5zdGFsbGF0aW9ucyA9IGluc3RhbGxlZERhdGEucGx1Z2luc1twbHVnaW5JZF1cbiAgICBpZiAoIWluc3RhbGxhdGlvbnMgfHwgaW5zdGFsbGF0aW9ucy5sZW5ndGggPT09IDApIGNvbnRpbnVlXG5cbiAgICAvLyBGaW5kIGxvYWRpbmcgZXJyb3JzIGZvciB0aGlzIHBsdWdpblxuICAgIGNvbnN0IHBsdWdpbk5hbWUgPSBwYXJzZVBsdWdpbklkZW50aWZpZXIocGx1Z2luSWQpLm5hbWVcbiAgICBjb25zdCBwbHVnaW5FcnJvcnMgPSBsb2FkRXJyb3JzLmZpbHRlcihcbiAgICAgIGUgPT4gZS5zb3VyY2UgPT09IHBsdWdpbklkIHx8ICgncGx1Z2luJyBpbiBlICYmIGUucGx1Z2luID09PSBwbHVnaW5OYW1lKSxcbiAgICApXG5cbiAgICBmb3IgKGNvbnN0IGluc3RhbGxhdGlvbiBvZiBpbnN0YWxsYXRpb25zKSB7XG4gICAgICBjb25zdCBpc0VuYWJsZWQgPSBlbmFibGVkUGx1Z2lucy5oYXMocGx1Z2luSWQpXG4gICAgICBjb25zdCBzdGF0dXMgPVxuICAgICAgICBwbHVnaW5FcnJvcnMubGVuZ3RoID4gMFxuICAgICAgICAgID8gYCR7ZmlndXJlcy5jcm9zc30gZmFpbGVkIHRvIGxvYWRgXG4gICAgICAgICAgOiBpc0VuYWJsZWRcbiAgICAgICAgICAgID8gYCR7ZmlndXJlcy50aWNrfSBlbmFibGVkYFxuICAgICAgICAgICAgOiBgJHtmaWd1cmVzLmNyb3NzfSBkaXNhYmxlZGBcbiAgICAgIGNvbnN0IHZlcnNpb24gPSBpbnN0YWxsYXRpb24udmVyc2lvbiB8fCAndW5rbm93bidcbiAgICAgIGNvbnN0IHNjb3BlID0gaW5zdGFsbGF0aW9uLnNjb3BlXG5cbiAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICAgIGNvbnNvbGUubG9nKGAgICR7ZmlndXJlcy5wb2ludGVyfSAke3BsdWdpbklkfWApXG4gICAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTo6IGludGVudGlvbmFsIGNvbnNvbGUgb3V0cHV0XG4gICAgICBjb25zb2xlLmxvZyhgICAgIFZlcnNpb246ICR7dmVyc2lvbn1gKVxuICAgICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgICAgY29uc29sZS5sb2coYCAgICBTY29wZTogJHtzY29wZX1gKVxuICAgICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgICAgY29uc29sZS5sb2coYCAgICBTdGF0dXM6ICR7c3RhdHVzfWApXG4gICAgICBmb3IgKGNvbnN0IGVycm9yIG9mIHBsdWdpbkVycm9ycykge1xuICAgICAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTo6IGludGVudGlvbmFsIGNvbnNvbGUgb3V0cHV0XG4gICAgICAgIGNvbnNvbGUubG9nKGAgICAgRXJyb3I6ICR7Z2V0UGx1Z2luRXJyb3JNZXNzYWdlKGVycm9yKX1gKVxuICAgICAgfVxuICAgICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgICAgY29uc29sZS5sb2coJycpXG4gICAgfVxuICB9XG5cbiAgaWYgKGlubGluZVBsdWdpbnMubGVuZ3RoID4gMCB8fCBpbmxpbmVMb2FkRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTo6IGludGVudGlvbmFsIGNvbnNvbGUgb3V0cHV0XG4gICAgY29uc29sZS5sb2coJ1Nlc3Npb24tb25seSBwbHVnaW5zICgtLXBsdWdpbi1kaXIpOlxcbicpXG4gICAgZm9yIChjb25zdCBwIG9mIGlubGluZVBsdWdpbnMpIHtcbiAgICAgIC8vIFNhbWUgZGlyTmFtZVx1MjI2MG1hbmlmZXN0TmFtZSBmYWxsYmFjayBhcyB0aGUgSlNPTiBwYXRoIGFib3ZlIFx1MjAxNCBlcnJvclxuICAgICAgLy8gc291cmNlcyB1c2UgdGhlIGRpciBiYXNlbmFtZSBidXQgcC5zb3VyY2UgdXNlcyB0aGUgbWFuaWZlc3QgbmFtZS5cbiAgICAgIGNvbnN0IHBFcnJvcnMgPSBpbmxpbmVMb2FkRXJyb3JzLmZpbHRlcihcbiAgICAgICAgZSA9PiBlLnNvdXJjZSA9PT0gcC5zb3VyY2UgfHwgKCdwbHVnaW4nIGluIGUgJiYgZS5wbHVnaW4gPT09IHAubmFtZSksXG4gICAgICApXG4gICAgICBjb25zdCBzdGF0dXMgPVxuICAgICAgICBwRXJyb3JzLmxlbmd0aCA+IDBcbiAgICAgICAgICA/IGAke2ZpZ3VyZXMuY3Jvc3N9IGxvYWRlZCB3aXRoIGVycm9yc2BcbiAgICAgICAgICA6IGAke2ZpZ3VyZXMudGlja30gbG9hZGVkYFxuICAgICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgICAgY29uc29sZS5sb2coYCAgJHtmaWd1cmVzLnBvaW50ZXJ9ICR7cC5zb3VyY2V9YClcbiAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICAgIGNvbnNvbGUubG9nKGAgICAgVmVyc2lvbjogJHtwLm1hbmlmZXN0LnZlcnNpb24gPz8gJ3Vua25vd24nfWApXG4gICAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTo6IGludGVudGlvbmFsIGNvbnNvbGUgb3V0cHV0XG4gICAgICBjb25zb2xlLmxvZyhgICAgIFBhdGg6ICR7cC5wYXRofWApXG4gICAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTo6IGludGVudGlvbmFsIGNvbnNvbGUgb3V0cHV0XG4gICAgICBjb25zb2xlLmxvZyhgICAgIFN0YXR1czogJHtzdGF0dXN9YClcbiAgICAgIGZvciAoY29uc3QgZSBvZiBwRXJyb3JzKSB7XG4gICAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICAgICAgY29uc29sZS5sb2coYCAgICBFcnJvcjogJHtnZXRQbHVnaW5FcnJvck1lc3NhZ2UoZSl9YClcbiAgICAgIH1cbiAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICAgIGNvbnNvbGUubG9nKCcnKVxuICAgIH1cbiAgICAvLyBQYXRoLWxldmVsIGZhaWx1cmVzOiBubyBMb2FkZWRQbHVnaW4gb2JqZWN0IGV4aXN0cy4gU2hvdyB0aGVtIHNvXG4gICAgLy8gYC0tcGx1Z2luLWRpciAvdHlwb2AgZG9lc24ndCBqdXN0IHNpbGVudGx5IHByb2R1Y2Ugbm90aGluZy5cbiAgICBmb3IgKGNvbnN0IGUgb2YgaW5saW5lTG9hZEVycm9ycy5maWx0ZXIoZSA9PlxuICAgICAgZS5zb3VyY2Uuc3RhcnRzV2l0aCgnaW5saW5lWycpLFxuICAgICkpIHtcbiAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgICAke2ZpZ3VyZXMucG9pbnRlcn0gJHtlLnNvdXJjZX06ICR7ZmlndXJlcy5jcm9zc30gJHtnZXRQbHVnaW5FcnJvck1lc3NhZ2UoZSl9XFxuYCxcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBjbGlPaygpXG59XG5cbi8vIG1hcmtldHBsYWNlIGFkZCAobGluZXMgNTQzM1x1MjAxMzU0ODcpXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya2V0cGxhY2VBZGRIYW5kbGVyKFxuICBzb3VyY2U6IHN0cmluZyxcbiAgb3B0aW9uczogeyBjb3dvcms/OiBib29sZWFuOyBzcGFyc2U/OiBzdHJpbmdbXTsgc2NvcGU/OiBzdHJpbmcgfSxcbik6IFByb21pc2U8dm9pZD4ge1xuICBpZiAob3B0aW9ucy5jb3dvcmspIHNldFVzZUNvd29ya1BsdWdpbnModHJ1ZSlcbiAgdHJ5IHtcbiAgICBjb25zdCBwYXJzZWQgPSBhd2FpdCBwYXJzZU1hcmtldHBsYWNlSW5wdXQoc291cmNlKVxuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIGNsaUVycm9yKFxuICAgICAgICBgJHtmaWd1cmVzLmNyb3NzfSBJbnZhbGlkIG1hcmtldHBsYWNlIHNvdXJjZSBmb3JtYXQuIFRyeTogb3duZXIvcmVwbywgaHR0cHM6Ly8uLi4sIG9yIC4vcGF0aGAsXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKCdlcnJvcicgaW4gcGFyc2VkKSB7XG4gICAgICBjbGlFcnJvcihgJHtmaWd1cmVzLmNyb3NzfSAke3BhcnNlZC5lcnJvcn1gKVxuICAgIH1cblxuICAgIC8vIFZhbGlkYXRlIHNjb3BlXG4gICAgY29uc3Qgc2NvcGUgPSBvcHRpb25zLnNjb3BlID8/ICd1c2VyJ1xuICAgIGlmIChzY29wZSAhPT0gJ3VzZXInICYmIHNjb3BlICE9PSAncHJvamVjdCcgJiYgc2NvcGUgIT09ICdsb2NhbCcpIHtcbiAgICAgIGNsaUVycm9yKFxuICAgICAgICBgJHtmaWd1cmVzLmNyb3NzfSBJbnZhbGlkIHNjb3BlICcke3Njb3BlfScuIFVzZTogdXNlciwgcHJvamVjdCwgb3IgbG9jYWxgLFxuICAgICAgKVxuICAgIH1cbiAgICBjb25zdCBzZXR0aW5nU291cmNlID0gc2NvcGVUb1NldHRpbmdTb3VyY2Uoc2NvcGUpXG5cbiAgICBsZXQgbWFya2V0cGxhY2VTb3VyY2UgPSBwYXJzZWRcblxuICAgIGlmIChvcHRpb25zLnNwYXJzZSAmJiBvcHRpb25zLnNwYXJzZS5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoXG4gICAgICAgIG1hcmtldHBsYWNlU291cmNlLnNvdXJjZSA9PT0gJ2dpdGh1YicgfHxcbiAgICAgICAgbWFya2V0cGxhY2VTb3VyY2Uuc291cmNlID09PSAnZ2l0J1xuICAgICAgKSB7XG4gICAgICAgIG1hcmtldHBsYWNlU291cmNlID0ge1xuICAgICAgICAgIC4uLm1hcmtldHBsYWNlU291cmNlLFxuICAgICAgICAgIHNwYXJzZVBhdGhzOiBvcHRpb25zLnNwYXJzZSxcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xpRXJyb3IoXG4gICAgICAgICAgYCR7ZmlndXJlcy5jcm9zc30gLS1zcGFyc2UgaXMgb25seSBzdXBwb3J0ZWQgZm9yIGdpdGh1YiBhbmQgZ2l0IG1hcmtldHBsYWNlIHNvdXJjZXMgKGdvdDogJHttYXJrZXRwbGFjZVNvdXJjZS5zb3VyY2V9KWAsXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTo6IGludGVudGlvbmFsIGNvbnNvbGUgb3V0cHV0XG4gICAgY29uc29sZS5sb2coJ0FkZGluZyBtYXJrZXRwbGFjZS4uLicpXG5cbiAgICBjb25zdCB7IG5hbWUsIGFscmVhZHlNYXRlcmlhbGl6ZWQsIHJlc29sdmVkU291cmNlIH0gPVxuICAgICAgYXdhaXQgYWRkTWFya2V0cGxhY2VTb3VyY2UobWFya2V0cGxhY2VTb3VyY2UsIG1lc3NhZ2UgPT4ge1xuICAgICAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTo6IGludGVudGlvbmFsIGNvbnNvbGUgb3V0cHV0XG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpXG4gICAgICB9KVxuXG4gICAgLy8gV3JpdGUgaW50ZW50IHRvIHNldHRpbmdzIGF0IHRoZSByZXF1ZXN0ZWQgc2NvcGVcbiAgICBzYXZlTWFya2V0cGxhY2VUb1NldHRpbmdzKG5hbWUsIHsgc291cmNlOiByZXNvbHZlZFNvdXJjZSB9LCBzZXR0aW5nU291cmNlKVxuXG4gICAgY2xlYXJBbGxDYWNoZXMoKVxuXG4gICAgbGV0IHNvdXJjZVR5cGUgPSBtYXJrZXRwbGFjZVNvdXJjZS5zb3VyY2VcbiAgICBpZiAobWFya2V0cGxhY2VTb3VyY2Uuc291cmNlID09PSAnZ2l0aHViJykge1xuICAgICAgc291cmNlVHlwZSA9XG4gICAgICAgIG1hcmtldHBsYWNlU291cmNlLnJlcG8gYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIU1xuICAgIH1cbiAgICBsb2dFdmVudCgndGVuZ3VfbWFya2V0cGxhY2VfYWRkZWQnLCB7XG4gICAgICBzb3VyY2VfdHlwZTpcbiAgICAgICAgc291cmNlVHlwZSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgIH0pXG5cbiAgICBjbGlPayhcbiAgICAgIGFscmVhZHlNYXRlcmlhbGl6ZWRcbiAgICAgICAgPyBgJHtmaWd1cmVzLnRpY2t9IE1hcmtldHBsYWNlICcke25hbWV9JyBhbHJlYWR5IG9uIGRpc2sgXHUyMDE0IGRlY2xhcmVkIGluICR7c2NvcGV9IHNldHRpbmdzYFxuICAgICAgICA6IGAke2ZpZ3VyZXMudGlja30gU3VjY2Vzc2Z1bGx5IGFkZGVkIG1hcmtldHBsYWNlOiAke25hbWV9IChkZWNsYXJlZCBpbiAke3Njb3BlfSBzZXR0aW5ncylgLFxuICAgIClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBoYW5kbGVNYXJrZXRwbGFjZUVycm9yKGVycm9yLCAnYWRkIG1hcmtldHBsYWNlJylcbiAgfVxufVxuXG4vLyBtYXJrZXRwbGFjZSBsaXN0IChsaW5lcyA1NDk3XHUyMDEzNTU2NSlcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYXJrZXRwbGFjZUxpc3RIYW5kbGVyKG9wdGlvbnM6IHtcbiAganNvbj86IGJvb2xlYW5cbiAgY293b3JrPzogYm9vbGVhblxufSk6IFByb21pc2U8dm9pZD4ge1xuICBpZiAob3B0aW9ucy5jb3dvcmspIHNldFVzZUNvd29ya1BsdWdpbnModHJ1ZSlcbiAgdHJ5IHtcbiAgICBjb25zdCBjb25maWcgPSBhd2FpdCBsb2FkS25vd25NYXJrZXRwbGFjZXNDb25maWcoKVxuICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY29uZmlnKVxuXG4gICAgaWYgKG9wdGlvbnMuanNvbikge1xuICAgICAgY29uc3QgbWFya2V0cGxhY2VzID0gbmFtZXMuc29ydCgpLm1hcChuYW1lID0+IHtcbiAgICAgICAgY29uc3QgbWFya2V0cGxhY2UgPSBjb25maWdbbmFtZV1cbiAgICAgICAgY29uc3Qgc291cmNlID0gbWFya2V0cGxhY2U/LnNvdXJjZVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgc291cmNlOiBzb3VyY2U/LnNvdXJjZSxcbiAgICAgICAgICAuLi4oc291cmNlPy5zb3VyY2UgPT09ICdnaXRodWInICYmIHsgcmVwbzogc291cmNlLnJlcG8gfSksXG4gICAgICAgICAgLi4uKHNvdXJjZT8uc291cmNlID09PSAnZ2l0JyAmJiB7IHVybDogc291cmNlLnVybCB9KSxcbiAgICAgICAgICAuLi4oc291cmNlPy5zb3VyY2UgPT09ICd1cmwnICYmIHsgdXJsOiBzb3VyY2UudXJsIH0pLFxuICAgICAgICAgIC4uLihzb3VyY2U/LnNvdXJjZSA9PT0gJ2RpcmVjdG9yeScgJiYgeyBwYXRoOiBzb3VyY2UucGF0aCB9KSxcbiAgICAgICAgICAuLi4oc291cmNlPy5zb3VyY2UgPT09ICdmaWxlJyAmJiB7IHBhdGg6IHNvdXJjZS5wYXRoIH0pLFxuICAgICAgICAgIGluc3RhbGxMb2NhdGlvbjogbWFya2V0cGxhY2U/Lmluc3RhbGxMb2NhdGlvbixcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGNsaU9rKGpzb25TdHJpbmdpZnkobWFya2V0cGxhY2VzLCBudWxsLCAyKSlcbiAgICB9XG5cbiAgICBpZiAobmFtZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjbGlPaygnTm8gbWFya2V0cGxhY2VzIGNvbmZpZ3VyZWQnKVxuICAgIH1cblxuICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICBjb25zb2xlLmxvZygnQ29uZmlndXJlZCBtYXJrZXRwbGFjZXM6XFxuJylcbiAgICBuYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgY29uc3QgbWFya2V0cGxhY2UgPSBjb25maWdbbmFtZV1cbiAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICAgIGNvbnNvbGUubG9nKGAgICR7ZmlndXJlcy5wb2ludGVyfSAke25hbWV9YClcblxuICAgICAgaWYgKG1hcmtldHBsYWNlPy5zb3VyY2UpIHtcbiAgICAgICAgY29uc3Qgc3JjID0gbWFya2V0cGxhY2Uuc291cmNlXG4gICAgICAgIGlmIChzcmMuc291cmNlID09PSAnZ2l0aHViJykge1xuICAgICAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICAgICAgICBjb25zb2xlLmxvZyhgICAgIFNvdXJjZTogR2l0SHViICgke3NyYy5yZXBvfSlgKVxuICAgICAgICB9IGVsc2UgaWYgKHNyYy5zb3VyY2UgPT09ICdnaXQnKSB7XG4gICAgICAgICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgICAgICAgIGNvbnNvbGUubG9nKGAgICAgU291cmNlOiBHaXQgKCR7c3JjLnVybH0pYClcbiAgICAgICAgfSBlbHNlIGlmIChzcmMuc291cmNlID09PSAndXJsJykge1xuICAgICAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICAgICAgICBjb25zb2xlLmxvZyhgICAgIFNvdXJjZTogVVJMICgke3NyYy51cmx9KWApXG4gICAgICAgIH0gZWxzZSBpZiAoc3JjLnNvdXJjZSA9PT0gJ2RpcmVjdG9yeScpIHtcbiAgICAgICAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTo6IGludGVudGlvbmFsIGNvbnNvbGUgb3V0cHV0XG4gICAgICAgICAgY29uc29sZS5sb2coYCAgICBTb3VyY2U6IERpcmVjdG9yeSAoJHtzcmMucGF0aH0pYClcbiAgICAgICAgfSBlbHNlIGlmIChzcmMuc291cmNlID09PSAnZmlsZScpIHtcbiAgICAgICAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTo6IGludGVudGlvbmFsIGNvbnNvbGUgb3V0cHV0XG4gICAgICAgICAgY29uc29sZS5sb2coYCAgICBTb3VyY2U6IEZpbGUgKCR7c3JjLnBhdGh9KWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICAgIGNvbnNvbGUubG9nKCcnKVxuICAgIH0pXG5cbiAgICBjbGlPaygpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaGFuZGxlTWFya2V0cGxhY2VFcnJvcihlcnJvciwgJ2xpc3QgbWFya2V0cGxhY2VzJylcbiAgfVxufVxuXG4vLyBtYXJrZXRwbGFjZSByZW1vdmUgKGxpbmVzIDU1NzZcdTIwMTM1NTk4KVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1hcmtldHBsYWNlUmVtb3ZlSGFuZGxlcihcbiAgbmFtZTogc3RyaW5nLFxuICBvcHRpb25zOiB7IGNvd29yaz86IGJvb2xlYW4gfSxcbik6IFByb21pc2U8dm9pZD4ge1xuICBpZiAob3B0aW9ucy5jb3dvcmspIHNldFVzZUNvd29ya1BsdWdpbnModHJ1ZSlcbiAgdHJ5IHtcbiAgICBhd2FpdCByZW1vdmVNYXJrZXRwbGFjZVNvdXJjZShuYW1lKVxuICAgIGNsZWFyQWxsQ2FjaGVzKClcblxuICAgIGxvZ0V2ZW50KCd0ZW5ndV9tYXJrZXRwbGFjZV9yZW1vdmVkJywge1xuICAgICAgbWFya2V0cGxhY2VfbmFtZTpcbiAgICAgICAgbmFtZSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgIH0pXG5cbiAgICBjbGlPayhgJHtmaWd1cmVzLnRpY2t9IFN1Y2Nlc3NmdWxseSByZW1vdmVkIG1hcmtldHBsYWNlOiAke25hbWV9YClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBoYW5kbGVNYXJrZXRwbGFjZUVycm9yKGVycm9yLCAncmVtb3ZlIG1hcmtldHBsYWNlJylcbiAgfVxufVxuXG4vLyBtYXJrZXRwbGFjZSB1cGRhdGUgKGxpbmVzIDU2MDlcdTIwMTM1NjcyKVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1hcmtldHBsYWNlVXBkYXRlSGFuZGxlcihcbiAgbmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBvcHRpb25zOiB7IGNvd29yaz86IGJvb2xlYW4gfSxcbik6IFByb21pc2U8dm9pZD4ge1xuICBpZiAob3B0aW9ucy5jb3dvcmspIHNldFVzZUNvd29ya1BsdWdpbnModHJ1ZSlcbiAgdHJ5IHtcbiAgICBpZiAobmFtZSkge1xuICAgICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0NvbnNvbGU6OiBpbnRlbnRpb25hbCBjb25zb2xlIG91dHB1dFxuICAgICAgY29uc29sZS5sb2coYFVwZGF0aW5nIG1hcmtldHBsYWNlOiAke25hbWV9Li4uYClcblxuICAgICAgYXdhaXQgcmVmcmVzaE1hcmtldHBsYWNlKG5hbWUsIG1lc3NhZ2UgPT4ge1xuICAgICAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vQ29uc29sZTo6IGludGVudGlvbmFsIGNvbnNvbGUgb3V0cHV0XG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpXG4gICAgICB9KVxuXG4gICAgICBjbGVhckFsbENhY2hlcygpXG5cbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9tYXJrZXRwbGFjZV91cGRhdGVkJywge1xuICAgICAgICBtYXJrZXRwbGFjZV9uYW1lOlxuICAgICAgICAgIG5hbWUgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgIH0pXG5cbiAgICAgIGNsaU9rKGAke2ZpZ3VyZXMudGlja30gU3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgbWFya2V0cGxhY2U6ICR7bmFtZX1gKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb25maWcgPSBhd2FpdCBsb2FkS25vd25NYXJrZXRwbGFjZXNDb25maWcoKVxuICAgICAgY29uc3QgbWFya2V0cGxhY2VOYW1lcyA9IE9iamVjdC5rZXlzKGNvbmZpZylcblxuICAgICAgaWYgKG1hcmtldHBsYWNlTmFtZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNsaU9rKCdObyBtYXJrZXRwbGFjZXMgY29uZmlndXJlZCcpXG4gICAgICB9XG5cbiAgICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9Db25zb2xlOjogaW50ZW50aW9uYWwgY29uc29sZSBvdXRwdXRcbiAgICAgIGNvbnNvbGUubG9nKGBVcGRhdGluZyAke21hcmtldHBsYWNlTmFtZXMubGVuZ3RofSBtYXJrZXRwbGFjZShzKS4uLmApXG5cbiAgICAgIGF3YWl0IHJlZnJlc2hBbGxNYXJrZXRwbGFjZXMoKVxuICAgICAgY2xlYXJBbGxDYWNoZXMoKVxuXG4gICAgICBsb2dFdmVudCgndGVuZ3VfbWFya2V0cGxhY2VfdXBkYXRlZF9hbGwnLCB7XG4gICAgICAgIGNvdW50OlxuICAgICAgICAgIG1hcmtldHBsYWNlTmFtZXMubGVuZ3RoIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICB9KVxuXG4gICAgICBjbGlPayhcbiAgICAgICAgYCR7ZmlndXJlcy50aWNrfSBTdWNjZXNzZnVsbHkgdXBkYXRlZCAke21hcmtldHBsYWNlTmFtZXMubGVuZ3RofSBtYXJrZXRwbGFjZShzKWAsXG4gICAgICApXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGhhbmRsZU1hcmtldHBsYWNlRXJyb3IoZXJyb3IsICd1cGRhdGUgbWFya2V0cGxhY2UocyknKVxuICB9XG59XG5cbi8vIHBsdWdpbiBpbnN0YWxsIChsaW5lcyA1NjkwXHUyMDEzNTcyMSlcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwbHVnaW5JbnN0YWxsSGFuZGxlcihcbiAgcGx1Z2luOiBzdHJpbmcsXG4gIG9wdGlvbnM6IHsgc2NvcGU/OiBzdHJpbmc7IGNvd29yaz86IGJvb2xlYW4gfSxcbik6IFByb21pc2U8dm9pZD4ge1xuICBpZiAob3B0aW9ucy5jb3dvcmspIHNldFVzZUNvd29ya1BsdWdpbnModHJ1ZSlcbiAgY29uc3Qgc2NvcGUgPSBvcHRpb25zLnNjb3BlIHx8ICd1c2VyJ1xuICBpZiAob3B0aW9ucy5jb3dvcmsgJiYgc2NvcGUgIT09ICd1c2VyJykge1xuICAgIGNsaUVycm9yKCctLWNvd29yayBjYW4gb25seSBiZSB1c2VkIHdpdGggdXNlciBzY29wZScpXG4gIH1cbiAgaWYgKFxuICAgICFWQUxJRF9JTlNUQUxMQUJMRV9TQ09QRVMuaW5jbHVkZXMoXG4gICAgICBzY29wZSBhcyAodHlwZW9mIFZBTElEX0lOU1RBTExBQkxFX1NDT1BFUylbbnVtYmVyXSxcbiAgICApXG4gICkge1xuICAgIGNsaUVycm9yKFxuICAgICAgYEludmFsaWQgc2NvcGU6ICR7c2NvcGV9LiBNdXN0IGJlIG9uZSBvZjogJHtWQUxJRF9JTlNUQUxMQUJMRV9TQ09QRVMuam9pbignLCAnKX0uYCxcbiAgICApXG4gIH1cbiAgLy8gX1BST1RPXyogcm91dGVzIHRvIFBJSS10YWdnZWQgcGx1Z2luX25hbWUvbWFya2V0cGxhY2VfbmFtZSBCUSBjb2x1bW5zLlxuICAvLyBVbnJlZGFjdGVkIHBsdWdpbiBhcmcgd2FzIHByZXZpb3VzbHkgbG9nZ2VkIHRvIGdlbmVyYWwtYWNjZXNzXG4gIC8vIGFkZGl0aW9uYWxfbWV0YWRhdGEgZm9yIGFsbCB1c2VycyBcdTIwMTQgZHJvcHBlZCBpbiBmYXZvciBvZiB0aGUgcHJpdmlsZWdlZFxuICAvLyBjb2x1bW4gcm91dGUuIG1hcmtldHBsYWNlIG1heSBiZSB1bmRlZmluZWQgKGZpcmVzIGJlZm9yZSByZXNvbHV0aW9uKS5cbiAgY29uc3QgeyBuYW1lLCBtYXJrZXRwbGFjZSB9ID0gcGFyc2VQbHVnaW5JZGVudGlmaWVyKHBsdWdpbilcbiAgbG9nRXZlbnQoJ3Rlbmd1X3BsdWdpbl9pbnN0YWxsX2NvbW1hbmQnLCB7XG4gICAgX1BST1RPX3BsdWdpbl9uYW1lOiBuYW1lIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19QSUlfVEFHR0VELFxuICAgIC4uLihtYXJrZXRwbGFjZSAmJiB7XG4gICAgICBfUFJPVE9fbWFya2V0cGxhY2VfbmFtZTpcbiAgICAgICAgbWFya2V0cGxhY2UgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX1BJSV9UQUdHRUQsXG4gICAgfSksXG4gICAgc2NvcGU6IHNjb3BlIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gIH0pXG5cbiAgYXdhaXQgaW5zdGFsbFBsdWdpbihwbHVnaW4sIHNjb3BlIGFzICd1c2VyJyB8ICdwcm9qZWN0JyB8ICdsb2NhbCcpXG59XG5cbi8vIHBsdWdpbiB1bmluc3RhbGwgKGxpbmVzIDU3MzhcdTIwMTM1NzY5KVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBsdWdpblVuaW5zdGFsbEhhbmRsZXIoXG4gIHBsdWdpbjogc3RyaW5nLFxuICBvcHRpb25zOiB7IHNjb3BlPzogc3RyaW5nOyBjb3dvcms/OiBib29sZWFuOyBrZWVwRGF0YT86IGJvb2xlYW4gfSxcbik6IFByb21pc2U8dm9pZD4ge1xuICBpZiAob3B0aW9ucy5jb3dvcmspIHNldFVzZUNvd29ya1BsdWdpbnModHJ1ZSlcbiAgY29uc3Qgc2NvcGUgPSBvcHRpb25zLnNjb3BlIHx8ICd1c2VyJ1xuICBpZiAob3B0aW9ucy5jb3dvcmsgJiYgc2NvcGUgIT09ICd1c2VyJykge1xuICAgIGNsaUVycm9yKCctLWNvd29yayBjYW4gb25seSBiZSB1c2VkIHdpdGggdXNlciBzY29wZScpXG4gIH1cbiAgaWYgKFxuICAgICFWQUxJRF9JTlNUQUxMQUJMRV9TQ09QRVMuaW5jbHVkZXMoXG4gICAgICBzY29wZSBhcyAodHlwZW9mIFZBTElEX0lOU1RBTExBQkxFX1NDT1BFUylbbnVtYmVyXSxcbiAgICApXG4gICkge1xuICAgIGNsaUVycm9yKFxuICAgICAgYEludmFsaWQgc2NvcGU6ICR7c2NvcGV9LiBNdXN0IGJlIG9uZSBvZjogJHtWQUxJRF9JTlNUQUxMQUJMRV9TQ09QRVMuam9pbignLCAnKX0uYCxcbiAgICApXG4gIH1cbiAgY29uc3QgeyBuYW1lLCBtYXJrZXRwbGFjZSB9ID0gcGFyc2VQbHVnaW5JZGVudGlmaWVyKHBsdWdpbilcbiAgbG9nRXZlbnQoJ3Rlbmd1X3BsdWdpbl91bmluc3RhbGxfY29tbWFuZCcsIHtcbiAgICBfUFJPVE9fcGx1Z2luX25hbWU6IG5hbWUgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX1BJSV9UQUdHRUQsXG4gICAgLi4uKG1hcmtldHBsYWNlICYmIHtcbiAgICAgIF9QUk9UT19tYXJrZXRwbGFjZV9uYW1lOlxuICAgICAgICBtYXJrZXRwbGFjZSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfUElJX1RBR0dFRCxcbiAgICB9KSxcbiAgICBzY29wZTogc2NvcGUgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgfSlcblxuICBhd2FpdCB1bmluc3RhbGxQbHVnaW4oXG4gICAgcGx1Z2luLFxuICAgIHNjb3BlIGFzICd1c2VyJyB8ICdwcm9qZWN0JyB8ICdsb2NhbCcsXG4gICAgb3B0aW9ucy5rZWVwRGF0YSxcbiAgKVxufVxuXG4vLyBwbHVnaW4gZW5hYmxlIChsaW5lcyA1NzgzXHUyMDEzNTgxOClcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwbHVnaW5FbmFibGVIYW5kbGVyKFxuICBwbHVnaW46IHN0cmluZyxcbiAgb3B0aW9uczogeyBzY29wZT86IHN0cmluZzsgY293b3JrPzogYm9vbGVhbiB9LFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmIChvcHRpb25zLmNvd29yaykgc2V0VXNlQ293b3JrUGx1Z2lucyh0cnVlKVxuICBsZXQgc2NvcGU6ICh0eXBlb2YgVkFMSURfSU5TVEFMTEFCTEVfU0NPUEVTKVtudW1iZXJdIHwgdW5kZWZpbmVkXG4gIGlmIChvcHRpb25zLnNjb3BlKSB7XG4gICAgaWYgKFxuICAgICAgIVZBTElEX0lOU1RBTExBQkxFX1NDT1BFUy5pbmNsdWRlcyhcbiAgICAgICAgb3B0aW9ucy5zY29wZSBhcyAodHlwZW9mIFZBTElEX0lOU1RBTExBQkxFX1NDT1BFUylbbnVtYmVyXSxcbiAgICAgIClcbiAgICApIHtcbiAgICAgIGNsaUVycm9yKFxuICAgICAgICBgSW52YWxpZCBzY29wZSBcIiR7b3B0aW9ucy5zY29wZX1cIi4gVmFsaWQgc2NvcGVzOiAke1ZBTElEX0lOU1RBTExBQkxFX1NDT1BFUy5qb2luKCcsICcpfWAsXG4gICAgICApXG4gICAgfVxuICAgIHNjb3BlID0gb3B0aW9ucy5zY29wZSBhcyAodHlwZW9mIFZBTElEX0lOU1RBTExBQkxFX1NDT1BFUylbbnVtYmVyXVxuICB9XG4gIGlmIChvcHRpb25zLmNvd29yayAmJiBzY29wZSAhPT0gdW5kZWZpbmVkICYmIHNjb3BlICE9PSAndXNlcicpIHtcbiAgICBjbGlFcnJvcignLS1jb3dvcmsgY2FuIG9ubHkgYmUgdXNlZCB3aXRoIHVzZXIgc2NvcGUnKVxuICB9XG5cbiAgLy8gLS1jb3dvcmsgYWx3YXlzIG9wZXJhdGVzIGF0IHVzZXIgc2NvcGVcbiAgaWYgKG9wdGlvbnMuY293b3JrICYmIHNjb3BlID09PSB1bmRlZmluZWQpIHtcbiAgICBzY29wZSA9ICd1c2VyJ1xuICB9XG5cbiAgY29uc3QgeyBuYW1lLCBtYXJrZXRwbGFjZSB9ID0gcGFyc2VQbHVnaW5JZGVudGlmaWVyKHBsdWdpbilcbiAgbG9nRXZlbnQoJ3Rlbmd1X3BsdWdpbl9lbmFibGVfY29tbWFuZCcsIHtcbiAgICBfUFJPVE9fcGx1Z2luX25hbWU6IG5hbWUgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX1BJSV9UQUdHRUQsXG4gICAgLi4uKG1hcmtldHBsYWNlICYmIHtcbiAgICAgIF9QUk9UT19tYXJrZXRwbGFjZV9uYW1lOlxuICAgICAgICBtYXJrZXRwbGFjZSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfUElJX1RBR0dFRCxcbiAgICB9KSxcbiAgICBzY29wZTogKHNjb3BlID8/XG4gICAgICAnYXV0bycpIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gIH0pXG5cbiAgYXdhaXQgZW5hYmxlUGx1Z2luKHBsdWdpbiwgc2NvcGUpXG59XG5cbi8vIHBsdWdpbiBkaXNhYmxlIChsaW5lcyA1ODMzXHUyMDEzNTkwMilcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwbHVnaW5EaXNhYmxlSGFuZGxlcihcbiAgcGx1Z2luOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIG9wdGlvbnM6IHsgc2NvcGU/OiBzdHJpbmc7IGNvd29yaz86IGJvb2xlYW47IGFsbD86IGJvb2xlYW4gfSxcbik6IFByb21pc2U8dm9pZD4ge1xuICBpZiAob3B0aW9ucy5hbGwgJiYgcGx1Z2luKSB7XG4gICAgY2xpRXJyb3IoJ0Nhbm5vdCB1c2UgLS1hbGwgd2l0aCBhIHNwZWNpZmljIHBsdWdpbicpXG4gIH1cblxuICBpZiAoIW9wdGlvbnMuYWxsICYmICFwbHVnaW4pIHtcbiAgICBjbGlFcnJvcignUGxlYXNlIHNwZWNpZnkgYSBwbHVnaW4gbmFtZSBvciB1c2UgLS1hbGwgdG8gZGlzYWJsZSBhbGwgcGx1Z2lucycpXG4gIH1cblxuICBpZiAob3B0aW9ucy5jb3dvcmspIHNldFVzZUNvd29ya1BsdWdpbnModHJ1ZSlcblxuICBpZiAob3B0aW9ucy5hbGwpIHtcbiAgICBpZiAob3B0aW9ucy5zY29wZSkge1xuICAgICAgY2xpRXJyb3IoJ0Nhbm5vdCB1c2UgLS1zY29wZSB3aXRoIC0tYWxsJylcbiAgICB9XG5cbiAgICAvLyBObyBfUFJPVE9fcGx1Z2luX25hbWUgaGVyZSBcdTIwMTQgLS1hbGwgZGlzYWJsZXMgYWxsIHBsdWdpbnMuXG4gICAgLy8gRGlzdGluZ3Vpc2hhYmxlIGZyb20gdGhlIHNwZWNpZmljLXBsdWdpbiBicmFuY2ggYnkgcGx1Z2luX25hbWUgSVMgTlVMTC5cbiAgICBsb2dFdmVudCgndGVuZ3VfcGx1Z2luX2Rpc2FibGVfY29tbWFuZCcsIHt9KVxuXG4gICAgYXdhaXQgZGlzYWJsZUFsbFBsdWdpbnMoKVxuICAgIHJldHVyblxuICB9XG5cbiAgbGV0IHNjb3BlOiAodHlwZW9mIFZBTElEX0lOU1RBTExBQkxFX1NDT1BFUylbbnVtYmVyXSB8IHVuZGVmaW5lZFxuICBpZiAob3B0aW9ucy5zY29wZSkge1xuICAgIGlmIChcbiAgICAgICFWQUxJRF9JTlNUQUxMQUJMRV9TQ09QRVMuaW5jbHVkZXMoXG4gICAgICAgIG9wdGlvbnMuc2NvcGUgYXMgKHR5cGVvZiBWQUxJRF9JTlNUQUxMQUJMRV9TQ09QRVMpW251bWJlcl0sXG4gICAgICApXG4gICAgKSB7XG4gICAgICBjbGlFcnJvcihcbiAgICAgICAgYEludmFsaWQgc2NvcGUgXCIke29wdGlvbnMuc2NvcGV9XCIuIFZhbGlkIHNjb3BlczogJHtWQUxJRF9JTlNUQUxMQUJMRV9TQ09QRVMuam9pbignLCAnKX1gLFxuICAgICAgKVxuICAgIH1cbiAgICBzY29wZSA9IG9wdGlvbnMuc2NvcGUgYXMgKHR5cGVvZiBWQUxJRF9JTlNUQUxMQUJMRV9TQ09QRVMpW251bWJlcl1cbiAgfVxuICBpZiAob3B0aW9ucy5jb3dvcmsgJiYgc2NvcGUgIT09IHVuZGVmaW5lZCAmJiBzY29wZSAhPT0gJ3VzZXInKSB7XG4gICAgY2xpRXJyb3IoJy0tY293b3JrIGNhbiBvbmx5IGJlIHVzZWQgd2l0aCB1c2VyIHNjb3BlJylcbiAgfVxuXG4gIC8vIC0tY293b3JrIGFsd2F5cyBvcGVyYXRlcyBhdCB1c2VyIHNjb3BlXG4gIGlmIChvcHRpb25zLmNvd29yayAmJiBzY29wZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc2NvcGUgPSAndXNlcidcbiAgfVxuXG4gIGNvbnN0IHsgbmFtZSwgbWFya2V0cGxhY2UgfSA9IHBhcnNlUGx1Z2luSWRlbnRpZmllcihwbHVnaW4hKVxuICBsb2dFdmVudCgndGVuZ3VfcGx1Z2luX2Rpc2FibGVfY29tbWFuZCcsIHtcbiAgICBfUFJPVE9fcGx1Z2luX25hbWU6IG5hbWUgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX1BJSV9UQUdHRUQsXG4gICAgLi4uKG1hcmtldHBsYWNlICYmIHtcbiAgICAgIF9QUk9UT19tYXJrZXRwbGFjZV9uYW1lOlxuICAgICAgICBtYXJrZXRwbGFjZSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfUElJX1RBR0dFRCxcbiAgICB9KSxcbiAgICBzY29wZTogKHNjb3BlID8/XG4gICAgICAnYXV0bycpIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gIH0pXG5cbiAgYXdhaXQgZGlzYWJsZVBsdWdpbihwbHVnaW4hLCBzY29wZSlcbn1cblxuLy8gcGx1Z2luIHVwZGF0ZSAobGluZXMgNTkxOFx1MjAxMzU5NDgpXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGx1Z2luVXBkYXRlSGFuZGxlcihcbiAgcGx1Z2luOiBzdHJpbmcsXG4gIG9wdGlvbnM6IHsgc2NvcGU/OiBzdHJpbmc7IGNvd29yaz86IGJvb2xlYW4gfSxcbik6IFByb21pc2U8dm9pZD4ge1xuICBpZiAob3B0aW9ucy5jb3dvcmspIHNldFVzZUNvd29ya1BsdWdpbnModHJ1ZSlcbiAgY29uc3QgeyBuYW1lLCBtYXJrZXRwbGFjZSB9ID0gcGFyc2VQbHVnaW5JZGVudGlmaWVyKHBsdWdpbilcbiAgbG9nRXZlbnQoJ3Rlbmd1X3BsdWdpbl91cGRhdGVfY29tbWFuZCcsIHtcbiAgICBfUFJPVE9fcGx1Z2luX25hbWU6IG5hbWUgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX1BJSV9UQUdHRUQsXG4gICAgLi4uKG1hcmtldHBsYWNlICYmIHtcbiAgICAgIF9QUk9UT19tYXJrZXRwbGFjZV9uYW1lOlxuICAgICAgICBtYXJrZXRwbGFjZSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfUElJX1RBR0dFRCxcbiAgICB9KSxcbiAgfSlcblxuICBsZXQgc2NvcGU6ICh0eXBlb2YgVkFMSURfVVBEQVRFX1NDT1BFUylbbnVtYmVyXSA9ICd1c2VyJ1xuICBpZiAob3B0aW9ucy5zY29wZSkge1xuICAgIGlmIChcbiAgICAgICFWQUxJRF9VUERBVEVfU0NPUEVTLmluY2x1ZGVzKFxuICAgICAgICBvcHRpb25zLnNjb3BlIGFzICh0eXBlb2YgVkFMSURfVVBEQVRFX1NDT1BFUylbbnVtYmVyXSxcbiAgICAgIClcbiAgICApIHtcbiAgICAgIGNsaUVycm9yKFxuICAgICAgICBgSW52YWxpZCBzY29wZSBcIiR7b3B0aW9ucy5zY29wZX1cIi4gVmFsaWQgc2NvcGVzOiAke1ZBTElEX1VQREFURV9TQ09QRVMuam9pbignLCAnKX1gLFxuICAgICAgKVxuICAgIH1cbiAgICBzY29wZSA9IG9wdGlvbnMuc2NvcGUgYXMgKHR5cGVvZiBWQUxJRF9VUERBVEVfU0NPUEVTKVtudW1iZXJdXG4gIH1cbiAgaWYgKG9wdGlvbnMuY293b3JrICYmIHNjb3BlICE9PSAndXNlcicpIHtcbiAgICBjbGlFcnJvcignLS1jb3dvcmsgY2FuIG9ubHkgYmUgdXNlZCB3aXRoIHVzZXIgc2NvcGUnKVxuICB9XG5cbiAgYXdhaXQgdXBkYXRlUGx1Z2luQ2xpKHBsdWdpbiwgc2NvcGUpXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUVBO0FBQ0E7QUFGQSxTQUFTLFVBQVUsZUFBZTtBQWlCbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQVFBO0FBQ0E7QUFDQTtBQUlB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
