#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  detectAndUninstallDelistedPlugins
} from "./chunk-MKMWAXNL.mjs";
import {
  getFlaggedPlugins,
  init_pluginFlagging
} from "./chunk-BGIVZ46A.mjs";
import {
  getPluginCommands,
  init_AppState,
  init_loadPluginAgents,
  init_loadPluginCommands,
  init_loadPluginHooks,
  init_lspPluginIntegration,
  init_manager,
  init_mcpPluginIntegration,
  init_notifications,
  init_pluginLoader,
  loadAllPlugins,
  loadPluginAgents,
  loadPluginHooks,
  loadPluginLspServers,
  loadPluginMcpServers,
  reinitializeLspServerManager,
  useAppState,
  useNotifications,
  useSetAppState
} from "./chunk-PWGYNHQM.mjs";
import {
  init_react,
  useCallback,
  useEffect
} from "./chunk-TEJH3H3H.mjs";
import {
  count,
  init_array
} from "./chunk-GC6TKYZ3.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-MDXHK5AD.mjs";
import {
  init_diagLogs,
  logForDiagnosticsNoPII
} from "./chunk-7SC6PTLR.mjs";
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import {
  init_debug,
  init_errors,
  logForDebugging,
  toError
} from "./chunk-L2VTD674.mjs";

// src/hooks/useManagePlugins.ts
init_react();
init_notifications();
init_analytics();
init_manager();
init_AppState();
init_array();
init_debug();
init_diagLogs();
init_errors();
init_log();
init_loadPluginAgents();
init_loadPluginCommands();
init_loadPluginHooks();
init_lspPluginIntegration();
init_mcpPluginIntegration();
init_pluginFlagging();
init_pluginLoader();
function useManagePlugins({
  enabled = true
} = {}) {
  const setAppState = useSetAppState();
  const needsRefresh = useAppState((s) => s.plugins.needsRefresh);
  const { addNotification } = useNotifications();
  const initialPluginLoad = useCallback(async () => {
    try {
      const { enabled: enabled2, disabled, errors } = await loadAllPlugins();
      await detectAndUninstallDelistedPlugins();
      const flagged = getFlaggedPlugins();
      if (Object.keys(flagged).length > 0) {
        addNotification({
          key: "plugin-delisted-flagged",
          text: "Plugins flagged. Check /plugins",
          color: "warning",
          priority: "high"
        });
      }
      let commands = [];
      let agents = [];
      try {
        commands = await getPluginCommands();
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        errors.push({
          type: "generic-error",
          source: "plugin-commands",
          error: `Failed to load plugin commands: ${errorMessage}`
        });
      }
      try {
        agents = await loadPluginAgents();
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        errors.push({
          type: "generic-error",
          source: "plugin-agents",
          error: `Failed to load plugin agents: ${errorMessage}`
        });
      }
      try {
        await loadPluginHooks();
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        errors.push({
          type: "generic-error",
          source: "plugin-hooks",
          error: `Failed to load plugin hooks: ${errorMessage}`
        });
      }
      const mcpServerCounts = await Promise.all(
        enabled2.map(async (p) => {
          if (p.mcpServers) return Object.keys(p.mcpServers).length;
          const servers = await loadPluginMcpServers(p, errors);
          if (servers) p.mcpServers = servers;
          return servers ? Object.keys(servers).length : 0;
        })
      );
      const mcp_count = mcpServerCounts.reduce((sum, n) => sum + n, 0);
      const lspServerCounts = await Promise.all(
        enabled2.map(async (p) => {
          if (p.lspServers) return Object.keys(p.lspServers).length;
          const servers = await loadPluginLspServers(p, errors);
          if (servers) p.lspServers = servers;
          return servers ? Object.keys(servers).length : 0;
        })
      );
      const lsp_count = lspServerCounts.reduce((sum, n) => sum + n, 0);
      reinitializeLspServerManager();
      setAppState((prevState) => {
        const existingLspErrors = prevState.plugins.errors.filter(
          (e) => e.source === "lsp-manager" || e.source.startsWith("plugin:")
        );
        const newErrorKeys = new Set(
          errors.map(
            (e) => e.type === "generic-error" ? `generic-error:${e.source}:${e.error}` : `${e.type}:${e.source}`
          )
        );
        const filteredExisting = existingLspErrors.filter((e) => {
          const key = e.type === "generic-error" ? `generic-error:${e.source}:${e.error}` : `${e.type}:${e.source}`;
          return !newErrorKeys.has(key);
        });
        const mergedErrors = [...filteredExisting, ...errors];
        return {
          ...prevState,
          plugins: {
            ...prevState.plugins,
            enabled: enabled2,
            disabled,
            commands,
            errors: mergedErrors
          }
        };
      });
      logForDebugging(
        `Loaded plugins - Enabled: ${enabled2.length}, Disabled: ${disabled.length}, Commands: ${commands.length}, Agents: ${agents.length}, Errors: ${errors.length}`
      );
      const hook_count = enabled2.reduce((sum, p) => {
        if (!p.hooksConfig) return sum;
        return sum + Object.values(p.hooksConfig).reduce(
          (s, matchers) => s + (matchers?.reduce((h, m) => h + m.hooks.length, 0) ?? 0),
          0
        );
      }, 0);
      return {
        enabled_count: enabled2.length,
        disabled_count: disabled.length,
        inline_count: count(enabled2, (p) => p.source.endsWith("@inline")),
        marketplace_count: count(enabled2, (p) => !p.source.endsWith("@inline")),
        error_count: errors.length,
        skill_count: commands.length,
        agent_count: agents.length,
        hook_count,
        mcp_count,
        lsp_count,
        // Ant-only: which plugins are enabled, to correlate with RSS/FPS.
        // Kept separate from base metrics so it doesn't flow into
        // logForDiagnosticsNoPII.
        ant_enabled_names: process.env.USER_TYPE === "ant" && enabled2.length > 0 ? enabled2.map((p) => p.name).sort().join(
          ","
        ) : void 0
      };
    } catch (error) {
      const errorObj = toError(error);
      logError(errorObj);
      logForDebugging(`Error loading plugins: ${error}`);
      setAppState((prevState) => {
        const existingLspErrors = prevState.plugins.errors.filter(
          (e) => e.source === "lsp-manager" || e.source.startsWith("plugin:")
        );
        const newError = {
          type: "generic-error",
          source: "plugin-system",
          error: errorObj.message
        };
        return {
          ...prevState,
          plugins: {
            ...prevState.plugins,
            enabled: [],
            disabled: [],
            commands: [],
            errors: [...existingLspErrors, newError]
          }
        };
      });
      return {
        enabled_count: 0,
        disabled_count: 0,
        inline_count: 0,
        marketplace_count: 0,
        error_count: 1,
        skill_count: 0,
        agent_count: 0,
        hook_count: 0,
        mcp_count: 0,
        lsp_count: 0,
        load_failed: true,
        ant_enabled_names: void 0
      };
    }
  }, [setAppState, addNotification]);
  useEffect(() => {
    if (!enabled) return;
    void initialPluginLoad().then((metrics) => {
      const { ant_enabled_names, ...baseMetrics } = metrics;
      const allMetrics = {
        ...baseMetrics,
        has_custom_plugin_cache_dir: !!process.env.CLAUDE_CODE_PLUGIN_CACHE_DIR
      };
      logEvent("tengu_plugins_loaded", {
        ...allMetrics,
        ...ant_enabled_names !== void 0 && {
          enabled_names: ant_enabled_names
        }
      });
      logForDiagnosticsNoPII("info", "tengu_plugins_loaded", allMetrics);
    });
  }, [initialPluginLoad, enabled]);
  useEffect(() => {
    if (!enabled || !needsRefresh) return;
    addNotification({
      key: "plugin-reload-pending",
      text: "Plugins changed. Run /reload-plugins to activate.",
      color: "suggestion",
      priority: "low"
    });
  }, [enabled, needsRefresh, addNotification]);
}

export {
  useManagePlugins
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2hvb2tzL3VzZU1hbmFnZVBsdWdpbnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgQ29tbWFuZCB9IGZyb20gJy4uL2NvbW1hbmRzLmpzJ1xuaW1wb3J0IHsgdXNlTm90aWZpY2F0aW9ucyB9IGZyb20gJy4uL2NvbnRleHQvbm90aWZpY2F0aW9ucy5qcydcbmltcG9ydCB7XG4gIHR5cGUgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgbG9nRXZlbnQsXG59IGZyb20gJy4uL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB7IHJlaW5pdGlhbGl6ZUxzcFNlcnZlck1hbmFnZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9sc3AvbWFuYWdlci5qcydcbmltcG9ydCB7IHVzZUFwcFN0YXRlLCB1c2VTZXRBcHBTdGF0ZSB9IGZyb20gJy4uL3N0YXRlL0FwcFN0YXRlLmpzJ1xuaW1wb3J0IHR5cGUgeyBBZ2VudERlZmluaXRpb24gfSBmcm9tICcuLi90b29scy9BZ2VudFRvb2wvbG9hZEFnZW50c0Rpci5qcydcbmltcG9ydCB7IGNvdW50IH0gZnJvbSAnLi4vdXRpbHMvYXJyYXkuanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuLi91dGlscy9kZWJ1Zy5qcydcbmltcG9ydCB7IGxvZ0ZvckRpYWdub3N0aWNzTm9QSUkgfSBmcm9tICcuLi91dGlscy9kaWFnTG9ncy5qcydcbmltcG9ydCB7IHRvRXJyb3IgfSBmcm9tICcuLi91dGlscy9lcnJvcnMuanMnXG5pbXBvcnQgeyBsb2dFcnJvciB9IGZyb20gJy4uL3V0aWxzL2xvZy5qcydcbmltcG9ydCB7IGxvYWRQbHVnaW5BZ2VudHMgfSBmcm9tICcuLi91dGlscy9wbHVnaW5zL2xvYWRQbHVnaW5BZ2VudHMuanMnXG5pbXBvcnQgeyBnZXRQbHVnaW5Db21tYW5kcyB9IGZyb20gJy4uL3V0aWxzL3BsdWdpbnMvbG9hZFBsdWdpbkNvbW1hbmRzLmpzJ1xuaW1wb3J0IHsgbG9hZFBsdWdpbkhvb2tzIH0gZnJvbSAnLi4vdXRpbHMvcGx1Z2lucy9sb2FkUGx1Z2luSG9va3MuanMnXG5pbXBvcnQgeyBsb2FkUGx1Z2luTHNwU2VydmVycyB9IGZyb20gJy4uL3V0aWxzL3BsdWdpbnMvbHNwUGx1Z2luSW50ZWdyYXRpb24uanMnXG5pbXBvcnQgeyBsb2FkUGx1Z2luTWNwU2VydmVycyB9IGZyb20gJy4uL3V0aWxzL3BsdWdpbnMvbWNwUGx1Z2luSW50ZWdyYXRpb24uanMnXG5pbXBvcnQgeyBkZXRlY3RBbmRVbmluc3RhbGxEZWxpc3RlZFBsdWdpbnMgfSBmcm9tICcuLi91dGlscy9wbHVnaW5zL3BsdWdpbkJsb2NrbGlzdC5qcydcbmltcG9ydCB7IGdldEZsYWdnZWRQbHVnaW5zIH0gZnJvbSAnLi4vdXRpbHMvcGx1Z2lucy9wbHVnaW5GbGFnZ2luZy5qcydcbmltcG9ydCB7IGxvYWRBbGxQbHVnaW5zIH0gZnJvbSAnLi4vdXRpbHMvcGx1Z2lucy9wbHVnaW5Mb2FkZXIuanMnXG5cbi8qKlxuICogSG9vayB0byBtYW5hZ2UgcGx1Z2luIHN0YXRlIGFuZCBzeW5jaHJvbml6ZSB3aXRoIEFwcFN0YXRlLlxuICpcbiAqIE9uIG1vdW50OiBsb2FkcyBhbGwgcGx1Z2lucywgcnVucyBkZWxpc3RpbmcgZW5mb3JjZW1lbnQsIHN1cmZhY2VzIGZsYWdnZWQtXG4gKiBwbHVnaW4gbm90aWZpY2F0aW9ucywgcG9wdWxhdGVzIEFwcFN0YXRlLnBsdWdpbnMuIFRoaXMgaXMgdGhlIGluaXRpYWxcbiAqIExheWVyLTMgbG9hZCBcdTIwMTQgc3Vic2VxdWVudCByZWZyZXNoIGdvZXMgdGhyb3VnaCAvcmVsb2FkLXBsdWdpbnMuXG4gKlxuICogT24gbmVlZHNSZWZyZXNoOiBzaG93cyBhIG5vdGlmaWNhdGlvbiBkaXJlY3RpbmcgdGhlIHVzZXIgdG8gL3JlbG9hZC1wbHVnaW5zLlxuICogRG9lcyBOT1QgYXV0by1yZWZyZXNoLiBBbGwgTGF5ZXItMyBzd2FwIChjb21tYW5kcywgYWdlbnRzLCBob29rcywgTUNQKVxuICogZ29lcyB0aHJvdWdoIHJlZnJlc2hBY3RpdmVQbHVnaW5zKCkgdmlhIC9yZWxvYWQtcGx1Z2lucyBmb3Igb25lIGNvbnNpc3RlbnRcbiAqIG1lbnRhbCBtb2RlbC4gU2VlIE91dGxpbmU6IGRlY2xhcmF0aXZlLXNldHRpbmdzLWhYSEJNRElmNGIgUFIgNWMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNYW5hZ2VQbHVnaW5zKHtcbiAgZW5hYmxlZCA9IHRydWUsXG59OiB7XG4gIGVuYWJsZWQ/OiBib29sZWFuXG59ID0ge30pIHtcbiAgY29uc3Qgc2V0QXBwU3RhdGUgPSB1c2VTZXRBcHBTdGF0ZSgpXG4gIGNvbnN0IG5lZWRzUmVmcmVzaCA9IHVzZUFwcFN0YXRlKHMgPT4gcy5wbHVnaW5zLm5lZWRzUmVmcmVzaClcbiAgY29uc3QgeyBhZGROb3RpZmljYXRpb24gfSA9IHVzZU5vdGlmaWNhdGlvbnMoKVxuXG4gIC8vIEluaXRpYWwgcGx1Z2luIGxvYWQuIFJ1bnMgb25jZSBvbiBtb3VudC4gTk9UIHVzZWQgZm9yIHJlZnJlc2ggXHUyMDE0IGFsbFxuICAvLyBwb3N0LW1vdW50IHJlZnJlc2ggZ29lcyB0aHJvdWdoIC9yZWxvYWQtcGx1Z2lucyBcdTIxOTIgcmVmcmVzaEFjdGl2ZVBsdWdpbnMoKS5cbiAgLy8gVW5saWtlIHJlZnJlc2hBY3RpdmVQbHVnaW5zLCB0aGlzIGFsc28gcnVucyBkZWxpc3RpbmcgZW5mb3JjZW1lbnQgYW5kXG4gIC8vIGZsYWdnZWQtcGx1Z2luIG5vdGlmaWNhdGlvbnMgKHNlc3Npb24tc3RhcnQgY29uY2VybnMpLCBhbmQgZG9lcyBOT1QgYnVtcFxuICAvLyBtY3AucGx1Z2luUmVjb25uZWN0S2V5IChNQ1AgZWZmZWN0cyBmaXJlIG9uIHRoZWlyIG93biBtb3VudCkuXG4gIGNvbnN0IGluaXRpYWxQbHVnaW5Mb2FkID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBMb2FkIGFsbCBwbHVnaW5zIC0gY2FwdHVyZSBlcnJvcnMgYXJyYXlcbiAgICAgIGNvbnN0IHsgZW5hYmxlZCwgZGlzYWJsZWQsIGVycm9ycyB9ID0gYXdhaXQgbG9hZEFsbFBsdWdpbnMoKVxuXG4gICAgICAvLyBEZXRlY3QgZGVsaXN0ZWQgcGx1Z2lucywgYXV0by11bmluc3RhbGwgdGhlbSwgYW5kIHJlY29yZCBhcyBmbGFnZ2VkLlxuICAgICAgYXdhaXQgZGV0ZWN0QW5kVW5pbnN0YWxsRGVsaXN0ZWRQbHVnaW5zKClcblxuICAgICAgLy8gTm90aWZ5IGlmIHRoZXJlIGFyZSBmbGFnZ2VkIHBsdWdpbnMgcGVuZGluZyBkaXNtaXNzYWxcbiAgICAgIGNvbnN0IGZsYWdnZWQgPSBnZXRGbGFnZ2VkUGx1Z2lucygpXG4gICAgICBpZiAoT2JqZWN0LmtleXMoZmxhZ2dlZCkubGVuZ3RoID4gMCkge1xuICAgICAgICBhZGROb3RpZmljYXRpb24oe1xuICAgICAgICAgIGtleTogJ3BsdWdpbi1kZWxpc3RlZC1mbGFnZ2VkJyxcbiAgICAgICAgICB0ZXh0OiAnUGx1Z2lucyBmbGFnZ2VkLiBDaGVjayAvcGx1Z2lucycsXG4gICAgICAgICAgY29sb3I6ICd3YXJuaW5nJyxcbiAgICAgICAgICBwcmlvcml0eTogJ2hpZ2gnLFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyBMb2FkIGNvbW1hbmRzLCBhZ2VudHMsIGFuZCBob29rcyB3aXRoIGluZGl2aWR1YWwgZXJyb3IgaGFuZGxpbmdcbiAgICAgIC8vIEVycm9ycyBhcmUgYWRkZWQgdG8gdGhlIGVycm9ycyBhcnJheSBmb3IgdXNlciB2aXNpYmlsaXR5IGluIERvY3RvciBVSVxuICAgICAgbGV0IGNvbW1hbmRzOiBDb21tYW5kW10gPSBbXVxuICAgICAgbGV0IGFnZW50czogQWdlbnREZWZpbml0aW9uW10gPSBbXVxuXG4gICAgICB0cnkge1xuICAgICAgICBjb21tYW5kcyA9IGF3YWl0IGdldFBsdWdpbkNvbW1hbmRzKClcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9XG4gICAgICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBTdHJpbmcoZXJyb3IpXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAnZ2VuZXJpYy1lcnJvcicsXG4gICAgICAgICAgc291cmNlOiAncGx1Z2luLWNvbW1hbmRzJyxcbiAgICAgICAgICBlcnJvcjogYEZhaWxlZCB0byBsb2FkIHBsdWdpbiBjb21tYW5kczogJHtlcnJvck1lc3NhZ2V9YCxcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgYWdlbnRzID0gYXdhaXQgbG9hZFBsdWdpbkFnZW50cygpXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPVxuICAgICAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogU3RyaW5nKGVycm9yKVxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ2dlbmVyaWMtZXJyb3InLFxuICAgICAgICAgIHNvdXJjZTogJ3BsdWdpbi1hZ2VudHMnLFxuICAgICAgICAgIGVycm9yOiBgRmFpbGVkIHRvIGxvYWQgcGx1Z2luIGFnZW50czogJHtlcnJvck1lc3NhZ2V9YCxcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgbG9hZFBsdWdpbkhvb2tzKClcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9XG4gICAgICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBTdHJpbmcoZXJyb3IpXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAnZ2VuZXJpYy1lcnJvcicsXG4gICAgICAgICAgc291cmNlOiAncGx1Z2luLWhvb2tzJyxcbiAgICAgICAgICBlcnJvcjogYEZhaWxlZCB0byBsb2FkIHBsdWdpbiBob29rczogJHtlcnJvck1lc3NhZ2V9YCxcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgLy8gTG9hZCBNQ1Agc2VydmVyIGNvbmZpZ3MgcGVyIHBsdWdpbiB0byBnZXQgYW4gYWNjdXJhdGUgY291bnQuXG4gICAgICAvLyBMb2FkZWRQbHVnaW4ubWNwU2VydmVycyBpcyBub3QgcG9wdWxhdGVkIGJ5IGxvYWRBbGxQbHVnaW5zIFx1MjAxNCBpdCdzIGFcbiAgICAgIC8vIGNhY2hlIHNsb3QgdGhhdCBleHRyYWN0TWNwU2VydmVyc0Zyb21QbHVnaW5zIGZpbGxzIGxhdGVyLCB3aGljaCByYWNlc1xuICAgICAgLy8gd2l0aCB0aGlzIG1ldHJpYy4gQ2FsbGluZyBsb2FkUGx1Z2luTWNwU2VydmVycyBkaXJlY3RseSAoYXNcbiAgICAgIC8vIGNsaS9oYW5kbGVycy9wbHVnaW5zLnRzIGRvZXMpIGdpdmVzIHRoZSBjb3JyZWN0IGNvdW50IGFuZCBhbHNvXG4gICAgICAvLyB3YXJtcyB0aGUgY2FjaGUgZm9yIHRoZSBNQ1AgY29ubmVjdGlvbiBtYW5hZ2VyLlxuICAgICAgLy9cbiAgICAgIC8vIFJ1bnMgQkVGT1JFIHNldEFwcFN0YXRlIHNvIGFueSBlcnJvcnMgcHVzaGVkIGJ5IHRoZXNlIGxvYWRlcnMgbWFrZSBpdFxuICAgICAgLy8gaW50byBBcHBTdGF0ZS5wbHVnaW5zLmVycm9ycyAoRG9jdG9yIFVJKSwgbm90IGp1c3QgdGVsZW1ldHJ5LlxuICAgICAgY29uc3QgbWNwU2VydmVyQ291bnRzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgIGVuYWJsZWQubWFwKGFzeW5jIHAgPT4ge1xuICAgICAgICAgIGlmIChwLm1jcFNlcnZlcnMpIHJldHVybiBPYmplY3Qua2V5cyhwLm1jcFNlcnZlcnMpLmxlbmd0aFxuICAgICAgICAgIGNvbnN0IHNlcnZlcnMgPSBhd2FpdCBsb2FkUGx1Z2luTWNwU2VydmVycyhwLCBlcnJvcnMpXG4gICAgICAgICAgaWYgKHNlcnZlcnMpIHAubWNwU2VydmVycyA9IHNlcnZlcnNcbiAgICAgICAgICByZXR1cm4gc2VydmVycyA/IE9iamVjdC5rZXlzKHNlcnZlcnMpLmxlbmd0aCA6IDBcbiAgICAgICAgfSksXG4gICAgICApXG4gICAgICBjb25zdCBtY3BfY291bnQgPSBtY3BTZXJ2ZXJDb3VudHMucmVkdWNlKChzdW0sIG4pID0+IHN1bSArIG4sIDApXG5cbiAgICAgIC8vIExTUDogdGhlIHByaW1hcnkgZml4IGZvciBpc3N1ZSAjMTU1MjEgaXMgaW4gcmVmcmVzaC50cyAodmlhXG4gICAgICAvLyBwZXJmb3JtQmFja2dyb3VuZFBsdWdpbkluc3RhbGxhdGlvbnMgXHUyMTkyIHJlZnJlc2hBY3RpdmVQbHVnaW5zLCB3aGljaFxuICAgICAgLy8gY2xlYXJzIGNhY2hlcyBmaXJzdCkuIFRoaXMgcmVpbml0IGlzIGRlZmVuc2l2ZSBcdTIwMTQgaXQgcmVhZHMgdGhlIHNhbWVcbiAgICAgIC8vIG1lbW9pemVkIGxvYWRBbGxQbHVnaW5zKCkgcmVzdWx0IGFzIHRoZSBvcmlnaW5hbCBpbml0IHVubGVzcyBhIGNhY2hlXG4gICAgICAvLyBpbnZhbGlkYXRpb24gaGFwcGVuZWQgYmV0d2VlbiBtYWluLnRzeDozMjAzIGFuZCBSRVBMIG1vdW50IChlLmcuXG4gICAgICAvLyBzZWVkIG1hcmtldHBsYWNlIHJlZ2lzdHJhdGlvbiBvciBwb2xpY3lTZXR0aW5ncyBob3QtcmVsb2FkKS5cbiAgICAgIGNvbnN0IGxzcFNlcnZlckNvdW50cyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICBlbmFibGVkLm1hcChhc3luYyBwID0+IHtcbiAgICAgICAgICBpZiAocC5sc3BTZXJ2ZXJzKSByZXR1cm4gT2JqZWN0LmtleXMocC5sc3BTZXJ2ZXJzKS5sZW5ndGhcbiAgICAgICAgICBjb25zdCBzZXJ2ZXJzID0gYXdhaXQgbG9hZFBsdWdpbkxzcFNlcnZlcnMocCwgZXJyb3JzKVxuICAgICAgICAgIGlmIChzZXJ2ZXJzKSBwLmxzcFNlcnZlcnMgPSBzZXJ2ZXJzXG4gICAgICAgICAgcmV0dXJuIHNlcnZlcnMgPyBPYmplY3Qua2V5cyhzZXJ2ZXJzKS5sZW5ndGggOiAwXG4gICAgICAgIH0pLFxuICAgICAgKVxuICAgICAgY29uc3QgbHNwX2NvdW50ID0gbHNwU2VydmVyQ291bnRzLnJlZHVjZSgoc3VtLCBuKSA9PiBzdW0gKyBuLCAwKVxuICAgICAgcmVpbml0aWFsaXplTHNwU2VydmVyTWFuYWdlcigpXG5cbiAgICAgIC8vIFVwZGF0ZSBBcHBTdGF0ZSAtIG1lcmdlIGVycm9ycyB0byBwcmVzZXJ2ZSBMU1AgZXJyb3JzXG4gICAgICBzZXRBcHBTdGF0ZShwcmV2U3RhdGUgPT4ge1xuICAgICAgICAvLyBLZWVwIGV4aXN0aW5nIExTUC9ub24tcGx1Z2luLWxvYWRpbmcgZXJyb3JzIChzb3VyY2UgJ2xzcC1tYW5hZ2VyJyBvciAncGx1Z2luOionKVxuICAgICAgICBjb25zdCBleGlzdGluZ0xzcEVycm9ycyA9IHByZXZTdGF0ZS5wbHVnaW5zLmVycm9ycy5maWx0ZXIoXG4gICAgICAgICAgZSA9PiBlLnNvdXJjZSA9PT0gJ2xzcC1tYW5hZ2VyJyB8fCBlLnNvdXJjZS5zdGFydHNXaXRoKCdwbHVnaW46JyksXG4gICAgICAgIClcbiAgICAgICAgLy8gRGVkdXBsaWNhdGU6IHJlbW92ZSBleGlzdGluZyBMU1AgZXJyb3JzIHRoYXQgYXJlIGFsc28gaW4gbmV3IGVycm9yc1xuICAgICAgICBjb25zdCBuZXdFcnJvcktleXMgPSBuZXcgU2V0KFxuICAgICAgICAgIGVycm9ycy5tYXAoZSA9PlxuICAgICAgICAgICAgZS50eXBlID09PSAnZ2VuZXJpYy1lcnJvcidcbiAgICAgICAgICAgICAgPyBgZ2VuZXJpYy1lcnJvcjoke2Uuc291cmNlfToke2UuZXJyb3J9YFxuICAgICAgICAgICAgICA6IGAke2UudHlwZX06JHtlLnNvdXJjZX1gLFxuICAgICAgICAgICksXG4gICAgICAgIClcbiAgICAgICAgY29uc3QgZmlsdGVyZWRFeGlzdGluZyA9IGV4aXN0aW5nTHNwRXJyb3JzLmZpbHRlcihlID0+IHtcbiAgICAgICAgICBjb25zdCBrZXkgPVxuICAgICAgICAgICAgZS50eXBlID09PSAnZ2VuZXJpYy1lcnJvcidcbiAgICAgICAgICAgICAgPyBgZ2VuZXJpYy1lcnJvcjoke2Uuc291cmNlfToke2UuZXJyb3J9YFxuICAgICAgICAgICAgICA6IGAke2UudHlwZX06JHtlLnNvdXJjZX1gXG4gICAgICAgICAgcmV0dXJuICFuZXdFcnJvcktleXMuaGFzKGtleSlcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgbWVyZ2VkRXJyb3JzID0gWy4uLmZpbHRlcmVkRXhpc3RpbmcsIC4uLmVycm9yc11cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgICAuLi5wcmV2U3RhdGUucGx1Z2lucyxcbiAgICAgICAgICAgIGVuYWJsZWQsXG4gICAgICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgICAgIGNvbW1hbmRzLFxuICAgICAgICAgICAgZXJyb3JzOiBtZXJnZWRFcnJvcnMsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgTG9hZGVkIHBsdWdpbnMgLSBFbmFibGVkOiAke2VuYWJsZWQubGVuZ3RofSwgRGlzYWJsZWQ6ICR7ZGlzYWJsZWQubGVuZ3RofSwgQ29tbWFuZHM6ICR7Y29tbWFuZHMubGVuZ3RofSwgQWdlbnRzOiAke2FnZW50cy5sZW5ndGh9LCBFcnJvcnM6ICR7ZXJyb3JzLmxlbmd0aH1gLFxuICAgICAgKVxuXG4gICAgICAvLyBDb3VudCBjb21wb25lbnQgdHlwZXMgYWNyb3NzIGVuYWJsZWQgcGx1Z2luc1xuICAgICAgY29uc3QgaG9va19jb3VudCA9IGVuYWJsZWQucmVkdWNlKChzdW0sIHApID0+IHtcbiAgICAgICAgaWYgKCFwLmhvb2tzQ29uZmlnKSByZXR1cm4gc3VtXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgc3VtICtcbiAgICAgICAgICBPYmplY3QudmFsdWVzKHAuaG9va3NDb25maWcpLnJlZHVjZShcbiAgICAgICAgICAgIChzLCBtYXRjaGVycykgPT5cbiAgICAgICAgICAgICAgcyArIChtYXRjaGVycz8ucmVkdWNlKChoLCBtKSA9PiBoICsgbS5ob29rcy5sZW5ndGgsIDApID8/IDApLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIH0sIDApXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVuYWJsZWRfY291bnQ6IGVuYWJsZWQubGVuZ3RoLFxuICAgICAgICBkaXNhYmxlZF9jb3VudDogZGlzYWJsZWQubGVuZ3RoLFxuICAgICAgICBpbmxpbmVfY291bnQ6IGNvdW50KGVuYWJsZWQsIHAgPT4gcC5zb3VyY2UuZW5kc1dpdGgoJ0BpbmxpbmUnKSksXG4gICAgICAgIG1hcmtldHBsYWNlX2NvdW50OiBjb3VudChlbmFibGVkLCBwID0+ICFwLnNvdXJjZS5lbmRzV2l0aCgnQGlubGluZScpKSxcbiAgICAgICAgZXJyb3JfY291bnQ6IGVycm9ycy5sZW5ndGgsXG4gICAgICAgIHNraWxsX2NvdW50OiBjb21tYW5kcy5sZW5ndGgsXG4gICAgICAgIGFnZW50X2NvdW50OiBhZ2VudHMubGVuZ3RoLFxuICAgICAgICBob29rX2NvdW50LFxuICAgICAgICBtY3BfY291bnQsXG4gICAgICAgIGxzcF9jb3VudCxcbiAgICAgICAgLy8gQW50LW9ubHk6IHdoaWNoIHBsdWdpbnMgYXJlIGVuYWJsZWQsIHRvIGNvcnJlbGF0ZSB3aXRoIFJTUy9GUFMuXG4gICAgICAgIC8vIEtlcHQgc2VwYXJhdGUgZnJvbSBiYXNlIG1ldHJpY3Mgc28gaXQgZG9lc24ndCBmbG93IGludG9cbiAgICAgICAgLy8gbG9nRm9yRGlhZ25vc3RpY3NOb1BJSS5cbiAgICAgICAgYW50X2VuYWJsZWRfbmFtZXM6XG4gICAgICAgICAgcHJvY2Vzcy5lbnYuVVNFUl9UWVBFID09PSAnYW50JyAmJiBlbmFibGVkLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gKGVuYWJsZWRcbiAgICAgICAgICAgICAgICAubWFwKHAgPT4gcC5uYW1lKVxuICAgICAgICAgICAgICAgIC5zb3J0KClcbiAgICAgICAgICAgICAgICAuam9pbihcbiAgICAgICAgICAgICAgICAgICcsJyxcbiAgICAgICAgICAgICAgICApIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMpXG4gICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gT25seSBwbHVnaW4gbG9hZGluZyBlcnJvcnMgc2hvdWxkIHJlYWNoIGhlcmUgLSBsb2cgZm9yIG1vbml0b3JpbmdcbiAgICAgIGNvbnN0IGVycm9yT2JqID0gdG9FcnJvcihlcnJvcilcbiAgICAgIGxvZ0Vycm9yKGVycm9yT2JqKVxuICAgICAgbG9nRm9yRGVidWdnaW5nKGBFcnJvciBsb2FkaW5nIHBsdWdpbnM6ICR7ZXJyb3J9YClcbiAgICAgIC8vIFNldCBlbXB0eSBzdGF0ZSBvbiBlcnJvciwgYnV0IHByZXNlcnZlIExTUCBlcnJvcnMgYW5kIGFkZCB0aGUgbmV3IGVycm9yXG4gICAgICBzZXRBcHBTdGF0ZShwcmV2U3RhdGUgPT4ge1xuICAgICAgICAvLyBLZWVwIGV4aXN0aW5nIExTUC9ub24tcGx1Z2luLWxvYWRpbmcgZXJyb3JzXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nTHNwRXJyb3JzID0gcHJldlN0YXRlLnBsdWdpbnMuZXJyb3JzLmZpbHRlcihcbiAgICAgICAgICBlID0+IGUuc291cmNlID09PSAnbHNwLW1hbmFnZXInIHx8IGUuc291cmNlLnN0YXJ0c1dpdGgoJ3BsdWdpbjonKSxcbiAgICAgICAgKVxuICAgICAgICBjb25zdCBuZXdFcnJvciA9IHtcbiAgICAgICAgICB0eXBlOiAnZ2VuZXJpYy1lcnJvcicgYXMgY29uc3QsXG4gICAgICAgICAgc291cmNlOiAncGx1Z2luLXN5c3RlbScsXG4gICAgICAgICAgZXJyb3I6IGVycm9yT2JqLm1lc3NhZ2UsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgICAgLi4ucHJldlN0YXRlLnBsdWdpbnMsXG4gICAgICAgICAgICBlbmFibGVkOiBbXSxcbiAgICAgICAgICAgIGRpc2FibGVkOiBbXSxcbiAgICAgICAgICAgIGNvbW1hbmRzOiBbXSxcbiAgICAgICAgICAgIGVycm9yczogWy4uLmV4aXN0aW5nTHNwRXJyb3JzLCBuZXdFcnJvcl0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW5hYmxlZF9jb3VudDogMCxcbiAgICAgICAgZGlzYWJsZWRfY291bnQ6IDAsXG4gICAgICAgIGlubGluZV9jb3VudDogMCxcbiAgICAgICAgbWFya2V0cGxhY2VfY291bnQ6IDAsXG4gICAgICAgIGVycm9yX2NvdW50OiAxLFxuICAgICAgICBza2lsbF9jb3VudDogMCxcbiAgICAgICAgYWdlbnRfY291bnQ6IDAsXG4gICAgICAgIGhvb2tfY291bnQ6IDAsXG4gICAgICAgIG1jcF9jb3VudDogMCxcbiAgICAgICAgbHNwX2NvdW50OiAwLFxuICAgICAgICBsb2FkX2ZhaWxlZDogdHJ1ZSxcbiAgICAgICAgYW50X2VuYWJsZWRfbmFtZXM6IHVuZGVmaW5lZCxcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtzZXRBcHBTdGF0ZSwgYWRkTm90aWZpY2F0aW9uXSlcblxuICAvLyBMb2FkIHBsdWdpbnMgb24gbW91bnQgYW5kIGVtaXQgdGVsZW1ldHJ5XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFlbmFibGVkKSByZXR1cm5cbiAgICB2b2lkIGluaXRpYWxQbHVnaW5Mb2FkKCkudGhlbihtZXRyaWNzID0+IHtcbiAgICAgIGNvbnN0IHsgYW50X2VuYWJsZWRfbmFtZXMsIC4uLmJhc2VNZXRyaWNzIH0gPSBtZXRyaWNzXG4gICAgICBjb25zdCBhbGxNZXRyaWNzID0ge1xuICAgICAgICAuLi5iYXNlTWV0cmljcyxcbiAgICAgICAgaGFzX2N1c3RvbV9wbHVnaW5fY2FjaGVfZGlyOiAhIXByb2Nlc3MuZW52LkNMQVVERV9DT0RFX1BMVUdJTl9DQUNIRV9ESVIsXG4gICAgICB9XG4gICAgICBsb2dFdmVudCgndGVuZ3VfcGx1Z2luc19sb2FkZWQnLCB7XG4gICAgICAgIC4uLmFsbE1ldHJpY3MsXG4gICAgICAgIC4uLihhbnRfZW5hYmxlZF9uYW1lcyAhPT0gdW5kZWZpbmVkICYmIHtcbiAgICAgICAgICBlbmFibGVkX25hbWVzOiBhbnRfZW5hYmxlZF9uYW1lcyxcbiAgICAgICAgfSksXG4gICAgICB9KVxuICAgICAgbG9nRm9yRGlhZ25vc3RpY3NOb1BJSSgnaW5mbycsICd0ZW5ndV9wbHVnaW5zX2xvYWRlZCcsIGFsbE1ldHJpY3MpXG4gICAgfSlcbiAgfSwgW2luaXRpYWxQbHVnaW5Mb2FkLCBlbmFibGVkXSlcblxuICAvLyBQbHVnaW4gc3RhdGUgY2hhbmdlZCBvbiBkaXNrIChiYWNrZ3JvdW5kIHJlY29uY2lsZSwgL3BsdWdpbiBtZW51LFxuICAvLyBleHRlcm5hbCBzZXR0aW5ncyBlZGl0KS4gU2hvdyBhIG5vdGlmaWNhdGlvbjsgdXNlciBydW5zIC9yZWxvYWQtcGx1Z2luc1xuICAvLyB0byBhcHBseS4gVGhlIHByZXZpb3VzIGF1dG8tcmVmcmVzaCBoZXJlIGhhZCBhIHN0YWxlLWNhY2hlIGJ1ZyAob25seVxuICAvLyBjbGVhcmVkIGxvYWRBbGxQbHVnaW5zLCBkb3duc3RyZWFtIG1lbW9pemVkIGxvYWRlcnMgcmV0dXJuZWQgb2xkIGRhdGEpXG4gIC8vIGFuZCB3YXMgaW5jb21wbGV0ZSAobm8gTUNQLCBubyBhZ2VudERlZmluaXRpb25zKS4gL3JlbG9hZC1wbHVnaW5zXG4gIC8vIGhhbmRsZXMgYWxsIG9mIHRoYXQgY29ycmVjdGx5IHZpYSByZWZyZXNoQWN0aXZlUGx1Z2lucygpLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZW5hYmxlZCB8fCAhbmVlZHNSZWZyZXNoKSByZXR1cm5cbiAgICBhZGROb3RpZmljYXRpb24oe1xuICAgICAga2V5OiAncGx1Z2luLXJlbG9hZC1wZW5kaW5nJyxcbiAgICAgIHRleHQ6ICdQbHVnaW5zIGNoYW5nZWQuIFJ1biAvcmVsb2FkLXBsdWdpbnMgdG8gYWN0aXZhdGUuJyxcbiAgICAgIGNvbG9yOiAnc3VnZ2VzdGlvbicsXG4gICAgICBwcmlvcml0eTogJ2xvdycsXG4gICAgfSlcbiAgICAvLyBEbyBOT1QgYXV0by1yZWZyZXNoLiBEbyBOT1QgcmVzZXQgbmVlZHNSZWZyZXNoIFx1MjAxNCAvcmVsb2FkLXBsdWdpbnNcbiAgICAvLyBjb25zdW1lcyBpdCB2aWEgcmVmcmVzaEFjdGl2ZVBsdWdpbnMoKS5cbiAgfSwgW2VuYWJsZWQsIG5lZWRzUmVmcmVzaCwgYWRkTm90aWZpY2F0aW9uXSlcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFjTyxTQUFTLGlCQUFpQjtBQUFBLEVBQy9CLFVBQVU7QUFDWixJQUVJLENBQUMsR0FBRztBQUNOLFFBQU0sY0FBYyxlQUFlO0FBQ25DLFFBQU0sZUFBZSxZQUFZLE9BQUssRUFBRSxRQUFRLFlBQVk7QUFDNUQsUUFBTSxFQUFF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
