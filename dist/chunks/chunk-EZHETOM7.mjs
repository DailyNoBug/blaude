#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  require_dist_cjs as require_dist_cjs2
} from "./chunk-5PQQKMHH.mjs";
import {
  require_dist_cjs
} from "./chunk-NE3ECB5D.mjs";
import {
  __commonJS
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@smithy+node-config-provider@4.3.12/node_modules/@smithy/node-config-provider/dist-cjs/index.js
var require_dist_cjs3 = __commonJS({
  "node_modules/.pnpm/@smithy+node-config-provider@4.3.12/node_modules/@smithy/node-config-provider/dist-cjs/index.js"(exports) {
    "use strict";
    var propertyProvider = require_dist_cjs();
    var sharedIniFileLoader = require_dist_cjs2();
    function getSelectorName(functionString) {
      try {
        const constants = new Set(Array.from(functionString.match(/([A-Z_]){3,}/g) ?? []));
        constants.delete("CONFIG");
        constants.delete("CONFIG_PREFIX_SEPARATOR");
        constants.delete("ENV");
        return [...constants].join(", ");
      } catch (e) {
        return functionString;
      }
    }
    var fromEnv = (envVarSelector, options) => async () => {
      try {
        const config = envVarSelector(process.env, options);
        if (config === void 0) {
          throw new Error();
        }
        return config;
      } catch (e) {
        throw new propertyProvider.CredentialsProviderError(e.message || `Not found in ENV: ${getSelectorName(envVarSelector.toString())}`, { logger: options?.logger });
      }
    };
    var fromSharedConfigFiles = (configSelector, { preferredFile = "config", ...init } = {}) => async () => {
      const profile = sharedIniFileLoader.getProfileName(init);
      const { configFile, credentialsFile } = await sharedIniFileLoader.loadSharedConfigFiles(init);
      const profileFromCredentials = credentialsFile[profile] || {};
      const profileFromConfig = configFile[profile] || {};
      const mergedProfile = preferredFile === "config" ? { ...profileFromCredentials, ...profileFromConfig } : { ...profileFromConfig, ...profileFromCredentials };
      try {
        const cfgFile = preferredFile === "config" ? configFile : credentialsFile;
        const configValue = configSelector(mergedProfile, cfgFile);
        if (configValue === void 0) {
          throw new Error();
        }
        return configValue;
      } catch (e) {
        throw new propertyProvider.CredentialsProviderError(e.message || `Not found in config files w/ profile [${profile}]: ${getSelectorName(configSelector.toString())}`, { logger: init.logger });
      }
    };
    var isFunction = (func) => typeof func === "function";
    var fromStatic = (defaultValue) => isFunction(defaultValue) ? async () => await defaultValue() : propertyProvider.fromStatic(defaultValue);
    var loadConfig = ({ environmentVariableSelector, configFileSelector, default: defaultValue }, configuration = {}) => {
      const { signingName, logger } = configuration;
      const envOptions = { signingName, logger };
      return propertyProvider.memoize(propertyProvider.chain(fromEnv(environmentVariableSelector, envOptions), fromSharedConfigFiles(configFileSelector, configuration), fromStatic(defaultValue)));
    };
    exports.loadConfig = loadConfig;
  }
});

export {
  require_dist_cjs3 as require_dist_cjs
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrbm9kZS1jb25maWctcHJvdmlkZXJANC4zLjEyL25vZGVfbW9kdWxlcy9Ac21pdGh5L25vZGUtY29uZmlnLXByb3ZpZGVyL2Rpc3QtY2pzL2luZGV4LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG5cbnZhciBwcm9wZXJ0eVByb3ZpZGVyID0gcmVxdWlyZSgnQHNtaXRoeS9wcm9wZXJ0eS1wcm92aWRlcicpO1xudmFyIHNoYXJlZEluaUZpbGVMb2FkZXIgPSByZXF1aXJlKCdAc21pdGh5L3NoYXJlZC1pbmktZmlsZS1sb2FkZXInKTtcblxuZnVuY3Rpb24gZ2V0U2VsZWN0b3JOYW1lKGZ1bmN0aW9uU3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29uc3RhbnRzID0gbmV3IFNldChBcnJheS5mcm9tKGZ1bmN0aW9uU3RyaW5nLm1hdGNoKC8oW0EtWl9dKXszLH0vZykgPz8gW10pKTtcbiAgICAgICAgY29uc3RhbnRzLmRlbGV0ZShcIkNPTkZJR1wiKTtcbiAgICAgICAgY29uc3RhbnRzLmRlbGV0ZShcIkNPTkZJR19QUkVGSVhfU0VQQVJBVE9SXCIpO1xuICAgICAgICBjb25zdGFudHMuZGVsZXRlKFwiRU5WXCIpO1xuICAgICAgICByZXR1cm4gWy4uLmNvbnN0YW50c10uam9pbihcIiwgXCIpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb25TdHJpbmc7XG4gICAgfVxufVxuXG5jb25zdCBmcm9tRW52ID0gKGVudlZhclNlbGVjdG9yLCBvcHRpb25zKSA9PiBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gZW52VmFyU2VsZWN0b3IocHJvY2Vzcy5lbnYsIG9wdGlvbnMpO1xuICAgICAgICBpZiAoY29uZmlnID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IG5ldyBwcm9wZXJ0eVByb3ZpZGVyLkNyZWRlbnRpYWxzUHJvdmlkZXJFcnJvcihlLm1lc3NhZ2UgfHwgYE5vdCBmb3VuZCBpbiBFTlY6ICR7Z2V0U2VsZWN0b3JOYW1lKGVudlZhclNlbGVjdG9yLnRvU3RyaW5nKCkpfWAsIHsgbG9nZ2VyOiBvcHRpb25zPy5sb2dnZXIgfSk7XG4gICAgfVxufTtcblxuY29uc3QgZnJvbVNoYXJlZENvbmZpZ0ZpbGVzID0gKGNvbmZpZ1NlbGVjdG9yLCB7IHByZWZlcnJlZEZpbGUgPSBcImNvbmZpZ1wiLCAuLi5pbml0IH0gPSB7fSkgPT4gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByb2ZpbGUgPSBzaGFyZWRJbmlGaWxlTG9hZGVyLmdldFByb2ZpbGVOYW1lKGluaXQpO1xuICAgIGNvbnN0IHsgY29uZmlnRmlsZSwgY3JlZGVudGlhbHNGaWxlIH0gPSBhd2FpdCBzaGFyZWRJbmlGaWxlTG9hZGVyLmxvYWRTaGFyZWRDb25maWdGaWxlcyhpbml0KTtcbiAgICBjb25zdCBwcm9maWxlRnJvbUNyZWRlbnRpYWxzID0gY3JlZGVudGlhbHNGaWxlW3Byb2ZpbGVdIHx8IHt9O1xuICAgIGNvbnN0IHByb2ZpbGVGcm9tQ29uZmlnID0gY29uZmlnRmlsZVtwcm9maWxlXSB8fCB7fTtcbiAgICBjb25zdCBtZXJnZWRQcm9maWxlID0gcHJlZmVycmVkRmlsZSA9PT0gXCJjb25maWdcIlxuICAgICAgICA/IHsgLi4ucHJvZmlsZUZyb21DcmVkZW50aWFscywgLi4ucHJvZmlsZUZyb21Db25maWcgfVxuICAgICAgICA6IHsgLi4ucHJvZmlsZUZyb21Db25maWcsIC4uLnByb2ZpbGVGcm9tQ3JlZGVudGlhbHMgfTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBjZmdGaWxlID0gcHJlZmVycmVkRmlsZSA9PT0gXCJjb25maWdcIiA/IGNvbmZpZ0ZpbGUgOiBjcmVkZW50aWFsc0ZpbGU7XG4gICAgICAgIGNvbnN0IGNvbmZpZ1ZhbHVlID0gY29uZmlnU2VsZWN0b3IobWVyZ2VkUHJvZmlsZSwgY2ZnRmlsZSk7XG4gICAgICAgIGlmIChjb25maWdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29uZmlnVmFsdWU7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IG5ldyBwcm9wZXJ0eVByb3ZpZGVyLkNyZWRlbnRpYWxzUHJvdmlkZXJFcnJvcihlLm1lc3NhZ2UgfHwgYE5vdCBmb3VuZCBpbiBjb25maWcgZmlsZXMgdy8gcHJvZmlsZSBbJHtwcm9maWxlfV06ICR7Z2V0U2VsZWN0b3JOYW1lKGNvbmZpZ1NlbGVjdG9yLnRvU3RyaW5nKCkpfWAsIHsgbG9nZ2VyOiBpbml0LmxvZ2dlciB9KTtcbiAgICB9XG59O1xuXG5jb25zdCBpc0Z1bmN0aW9uID0gKGZ1bmMpID0+IHR5cGVvZiBmdW5jID09PSBcImZ1bmN0aW9uXCI7XG5jb25zdCBmcm9tU3RhdGljID0gKGRlZmF1bHRWYWx1ZSkgPT4gaXNGdW5jdGlvbihkZWZhdWx0VmFsdWUpID8gYXN5bmMgKCkgPT4gYXdhaXQgZGVmYXVsdFZhbHVlKCkgOiBwcm9wZXJ0eVByb3ZpZGVyLmZyb21TdGF0aWMoZGVmYXVsdFZhbHVlKTtcblxuY29uc3QgbG9hZENvbmZpZyA9ICh7IGVudmlyb25tZW50VmFyaWFibGVTZWxlY3RvciwgY29uZmlnRmlsZVNlbGVjdG9yLCBkZWZhdWx0OiBkZWZhdWx0VmFsdWUgfSwgY29uZmlndXJhdGlvbiA9IHt9KSA9PiB7XG4gICAgY29uc3QgeyBzaWduaW5nTmFtZSwgbG9nZ2VyIH0gPSBjb25maWd1cmF0aW9uO1xuICAgIGNvbnN0IGVudk9wdGlvbnMgPSB7IHNpZ25pbmdOYW1lLCBsb2dnZXIgfTtcbiAgICByZXR1cm4gcHJvcGVydHlQcm92aWRlci5tZW1vaXplKHByb3BlcnR5UHJvdmlkZXIuY2hhaW4oZnJvbUVudihlbnZpcm9ubWVudFZhcmlhYmxlU2VsZWN0b3IsIGVudk9wdGlvbnMpLCBmcm9tU2hhcmVkQ29uZmlnRmlsZXMoY29uZmlnRmlsZVNlbGVjdG9yLCBjb25maWd1cmF0aW9uKSwgZnJvbVN0YXRpYyhkZWZhdWx0VmFsdWUpKSk7XG59O1xuXG5leHBvcnRzLmxvYWRDb25maWcgPSBsb2FkQ29uZmlnO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBQTtBQUFBO0FBQUE7QUFFQSxRQUFJLG1CQUFtQjtBQUN2QixRQUFJLHNCQUFzQjtBQUUxQixhQUFTLGdCQUFnQixnQkFBZ0I7QUFDckMsVUFBSTtBQUNBLGNBQU0sWUFBWSxJQUFJLElBQUksTUFBTSxLQUFLLGVBQWUsTUFBTSxlQUFlLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDakYsa0JBQVUsT0FBTyxRQUFRO0FBQ3pCLGtCQUFVLE9BQU8seUJBQXlCO0FBQzFDLGtCQUFVLE9BQU8sS0FBSztBQUN0QixlQUFPLENBQUMsR0FBRyxTQUFTLEVBQUUsS0FBSyxJQUFJO0FBQUEsTUFDbkMsU0FDTyxHQUFHO0FBQ04sZUFBTztBQUFBLE1BQ1g7QUFBQSxJQUNKO0FBRUEsUUFBTSxVQUFVLENBQUMsZ0JBQWdCLFlBQVksWUFBWTtBQUNyRCxVQUFJO0FBQ0EsY0FBTSxTQUFTLGVBQWUsUUFBUSxLQUFLLE9BQU87QUFDbEQsWUFBSSxXQUFXLFFBQVc7QUFDdEIsZ0JBQU0sSUFBSSxNQUFNO0FBQUEsUUFDcEI7QUFDQSxlQUFPO0FBQUEsTUFDWCxTQUNPLEdBQUc7QUFDTixjQUFNLElBQUksaUJBQWlCLHlCQUF5QixFQUFFLFdBQVcscUJBQXFCLGdCQUFnQixlQUFlLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxRQUFRLFNBQVMsT0FBTyxDQUFDO0FBQUEsTUFDbks7QUFBQSxJQUNKO0FBRUEsUUFBTSx3QkFBd0IsQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsVUFBVSxHQUFHLEtBQUssSUFBSSxDQUFDLE1BQU0sWUFBWTtBQUN0RyxZQUFNLFVBQVUsb0JBQW9CLGVBQWUsSUFBSTtBQUN2RCxZQUFNLEVBQUUsWUFBWSxnQkFBZ0IsSUFBSSxNQUFNLG9CQUFvQixzQkFBc0IsSUFBSTtBQUM1RixZQUFNLHlCQUF5QixnQkFBZ0IsT0FBTyxLQUFLLENBQUM7QUFDNUQsWUFBTSxvQkFBb0IsV0FBVyxPQUFPLEtBQUssQ0FBQztBQUNsRCxZQUFNLGdCQUFnQixrQkFBa0IsV0FDbEMsRUFBRSxHQUFHLHdCQUF3QixHQUFHLGtCQUFrQixJQUNsRCxFQUFFLEdBQUcsbUJBQW1CLEdBQUcsdUJBQXVCO0FBQ3hELFVBQUk7QUFDQSxjQUFNLFVBQVUsa0JBQWtCLFdBQVcsYUFBYTtBQUMxRCxjQUFNLGNBQWMsZUFBZSxlQUFlLE9BQU87QUFDekQsWUFBSSxnQkFBZ0IsUUFBVztBQUMzQixnQkFBTSxJQUFJLE1BQU07QUFBQSxRQUNwQjtBQUNBLGVBQU87QUFBQSxNQUNYLFNBQ08sR0FBRztBQUNOLGNBQU0sSUFBSSxpQkFBaUIseUJBQXlCLEVBQUUsV0FBVyx5Q0FBeUMsT0FBTyxNQUFNLGdCQUFnQixlQUFlLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxRQUFRLEtBQUssT0FBTyxDQUFDO0FBQUEsTUFDaE07QUFBQSxJQUNKO0FBRUEsUUFBTSxhQUFhLENBQUMsU0FBUyxPQUFPLFNBQVM7QUFDN0MsUUFBTSxhQUFhLENBQUMsaUJBQWlCLFdBQVcsWUFBWSxJQUFJLFlBQVksTUFBTSxhQUFhLElBQUksaUJBQWlCLFdBQVcsWUFBWTtBQUUzSSxRQUFNLGFBQWEsQ0FBQyxFQUFFLDZCQUE2QixvQkFBb0IsU0FBUyxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsTUFBTTtBQUNuSCxZQUFNLEVBQUUsYUFBYSxPQUFPLElBQUk7QUFDaEMsWUFBTSxhQUFhLEVBQUUsYUFBYSxPQUFPO0FBQ3pDLGFBQU8saUJBQWlCLFFBQVEsaUJBQWlCLE1BQU0sUUFBUSw2QkFBNkIsVUFBVSxHQUFHLHNCQUFzQixvQkFBb0IsYUFBYSxHQUFHLFdBQVcsWUFBWSxDQUFDLENBQUM7QUFBQSxJQUNoTTtBQUVBLFlBQVEsYUFBYTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbInJlcXVpcmVfZGlzdF9janMiXQp9Cg==
