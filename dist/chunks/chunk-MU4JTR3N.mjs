#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  require_dist_cjs as require_dist_cjs2
} from "./chunk-5PQQKMHH.mjs";
import {
  client_exports,
  init_client
} from "./chunk-MTY4OASM.mjs";
import {
  require_dist_cjs
} from "./chunk-NE3ECB5D.mjs";
import {
  __commonJS,
  __require,
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@aws-sdk+credential-provider-process@3.972.24/node_modules/@aws-sdk/credential-provider-process/dist-cjs/index.js
var require_dist_cjs3 = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-provider-process@3.972.24/node_modules/@aws-sdk/credential-provider-process/dist-cjs/index.js"(exports) {
    var sharedIniFileLoader = require_dist_cjs2();
    var propertyProvider = require_dist_cjs();
    var node_child_process = __require("node:child_process");
    var node_util = __require("node:util");
    var client = (init_client(), __toCommonJS(client_exports));
    var getValidatedProcessCredentials = (profileName, data, profiles) => {
      if (data.Version !== 1) {
        throw Error(`Profile ${profileName} credential_process did not return Version 1.`);
      }
      if (data.AccessKeyId === void 0 || data.SecretAccessKey === void 0) {
        throw Error(`Profile ${profileName} credential_process returned invalid credentials.`);
      }
      if (data.Expiration) {
        const currentTime = /* @__PURE__ */ new Date();
        const expireTime = new Date(data.Expiration);
        if (expireTime < currentTime) {
          throw Error(`Profile ${profileName} credential_process returned expired credentials.`);
        }
      }
      let accountId = data.AccountId;
      if (!accountId && profiles?.[profileName]?.aws_account_id) {
        accountId = profiles[profileName].aws_account_id;
      }
      const credentials = {
        accessKeyId: data.AccessKeyId,
        secretAccessKey: data.SecretAccessKey,
        ...data.SessionToken && { sessionToken: data.SessionToken },
        ...data.Expiration && { expiration: new Date(data.Expiration) },
        ...data.CredentialScope && { credentialScope: data.CredentialScope },
        ...accountId && { accountId }
      };
      client.setCredentialFeature(credentials, "CREDENTIALS_PROCESS", "w");
      return credentials;
    };
    var resolveProcessCredentials = async (profileName, profiles, logger) => {
      const profile = profiles[profileName];
      if (profiles[profileName]) {
        const credentialProcess = profile["credential_process"];
        if (credentialProcess !== void 0) {
          const execPromise = node_util.promisify(sharedIniFileLoader.externalDataInterceptor?.getTokenRecord?.().exec ?? node_child_process.exec);
          try {
            const { stdout } = await execPromise(credentialProcess);
            let data;
            try {
              data = JSON.parse(stdout.trim());
            } catch {
              throw Error(`Profile ${profileName} credential_process returned invalid JSON.`);
            }
            return getValidatedProcessCredentials(profileName, data, profiles);
          } catch (error) {
            throw new propertyProvider.CredentialsProviderError(error.message, { logger });
          }
        } else {
          throw new propertyProvider.CredentialsProviderError(`Profile ${profileName} did not contain credential_process.`, { logger });
        }
      } else {
        throw new propertyProvider.CredentialsProviderError(`Profile ${profileName} could not be found in shared credentials file.`, {
          logger
        });
      }
    };
    var fromProcess = (init = {}) => async ({ callerClientConfig } = {}) => {
      init.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");
      const profiles = await sharedIniFileLoader.parseKnownFiles(init);
      return resolveProcessCredentials(sharedIniFileLoader.getProfileName({
        profile: init.profile ?? callerClientConfig?.profile
      }), profiles, init.logger);
    };
    exports.fromProcess = fromProcess;
  }
});

export {
  require_dist_cjs3 as require_dist_cjs
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK2NyZWRlbnRpYWwtcHJvdmlkZXItcHJvY2Vzc0AzLjk3Mi4yNC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci1wcm9jZXNzL2Rpc3QtY2pzL2luZGV4LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG5cbnZhciBzaGFyZWRJbmlGaWxlTG9hZGVyID0gcmVxdWlyZSgnQHNtaXRoeS9zaGFyZWQtaW5pLWZpbGUtbG9hZGVyJyk7XG52YXIgcHJvcGVydHlQcm92aWRlciA9IHJlcXVpcmUoJ0BzbWl0aHkvcHJvcGVydHktcHJvdmlkZXInKTtcbnZhciBub2RlX2NoaWxkX3Byb2Nlc3MgPSByZXF1aXJlKCdub2RlOmNoaWxkX3Byb2Nlc3MnKTtcbnZhciBub2RlX3V0aWwgPSByZXF1aXJlKCdub2RlOnV0aWwnKTtcbnZhciBjbGllbnQgPSByZXF1aXJlKCdAYXdzLXNkay9jb3JlL2NsaWVudCcpO1xuXG5jb25zdCBnZXRWYWxpZGF0ZWRQcm9jZXNzQ3JlZGVudGlhbHMgPSAocHJvZmlsZU5hbWUsIGRhdGEsIHByb2ZpbGVzKSA9PiB7XG4gICAgaWYgKGRhdGEuVmVyc2lvbiAhPT0gMSkge1xuICAgICAgICB0aHJvdyBFcnJvcihgUHJvZmlsZSAke3Byb2ZpbGVOYW1lfSBjcmVkZW50aWFsX3Byb2Nlc3MgZGlkIG5vdCByZXR1cm4gVmVyc2lvbiAxLmApO1xuICAgIH1cbiAgICBpZiAoZGF0YS5BY2Nlc3NLZXlJZCA9PT0gdW5kZWZpbmVkIHx8IGRhdGEuU2VjcmV0QWNjZXNzS2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoYFByb2ZpbGUgJHtwcm9maWxlTmFtZX0gY3JlZGVudGlhbF9wcm9jZXNzIHJldHVybmVkIGludmFsaWQgY3JlZGVudGlhbHMuYCk7XG4gICAgfVxuICAgIGlmIChkYXRhLkV4cGlyYXRpb24pIHtcbiAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCBleHBpcmVUaW1lID0gbmV3IERhdGUoZGF0YS5FeHBpcmF0aW9uKTtcbiAgICAgICAgaWYgKGV4cGlyZVRpbWUgPCBjdXJyZW50VGltZSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYFByb2ZpbGUgJHtwcm9maWxlTmFtZX0gY3JlZGVudGlhbF9wcm9jZXNzIHJldHVybmVkIGV4cGlyZWQgY3JlZGVudGlhbHMuYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGFjY291bnRJZCA9IGRhdGEuQWNjb3VudElkO1xuICAgIGlmICghYWNjb3VudElkICYmIHByb2ZpbGVzPy5bcHJvZmlsZU5hbWVdPy5hd3NfYWNjb3VudF9pZCkge1xuICAgICAgICBhY2NvdW50SWQgPSBwcm9maWxlc1twcm9maWxlTmFtZV0uYXdzX2FjY291bnRfaWQ7XG4gICAgfVxuICAgIGNvbnN0IGNyZWRlbnRpYWxzID0ge1xuICAgICAgICBhY2Nlc3NLZXlJZDogZGF0YS5BY2Nlc3NLZXlJZCxcbiAgICAgICAgc2VjcmV0QWNjZXNzS2V5OiBkYXRhLlNlY3JldEFjY2Vzc0tleSxcbiAgICAgICAgLi4uKGRhdGEuU2Vzc2lvblRva2VuICYmIHsgc2Vzc2lvblRva2VuOiBkYXRhLlNlc3Npb25Ub2tlbiB9KSxcbiAgICAgICAgLi4uKGRhdGEuRXhwaXJhdGlvbiAmJiB7IGV4cGlyYXRpb246IG5ldyBEYXRlKGRhdGEuRXhwaXJhdGlvbikgfSksXG4gICAgICAgIC4uLihkYXRhLkNyZWRlbnRpYWxTY29wZSAmJiB7IGNyZWRlbnRpYWxTY29wZTogZGF0YS5DcmVkZW50aWFsU2NvcGUgfSksXG4gICAgICAgIC4uLihhY2NvdW50SWQgJiYgeyBhY2NvdW50SWQgfSksXG4gICAgfTtcbiAgICBjbGllbnQuc2V0Q3JlZGVudGlhbEZlYXR1cmUoY3JlZGVudGlhbHMsIFwiQ1JFREVOVElBTFNfUFJPQ0VTU1wiLCBcIndcIik7XG4gICAgcmV0dXJuIGNyZWRlbnRpYWxzO1xufTtcblxuY29uc3QgcmVzb2x2ZVByb2Nlc3NDcmVkZW50aWFscyA9IGFzeW5jIChwcm9maWxlTmFtZSwgcHJvZmlsZXMsIGxvZ2dlcikgPT4ge1xuICAgIGNvbnN0IHByb2ZpbGUgPSBwcm9maWxlc1twcm9maWxlTmFtZV07XG4gICAgaWYgKHByb2ZpbGVzW3Byb2ZpbGVOYW1lXSkge1xuICAgICAgICBjb25zdCBjcmVkZW50aWFsUHJvY2VzcyA9IHByb2ZpbGVbXCJjcmVkZW50aWFsX3Byb2Nlc3NcIl07XG4gICAgICAgIGlmIChjcmVkZW50aWFsUHJvY2VzcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBleGVjUHJvbWlzZSA9IG5vZGVfdXRpbC5wcm9taXNpZnkoc2hhcmVkSW5pRmlsZUxvYWRlci5leHRlcm5hbERhdGFJbnRlcmNlcHRvcj8uZ2V0VG9rZW5SZWNvcmQ/LigpLmV4ZWMgPz8gbm9kZV9jaGlsZF9wcm9jZXNzLmV4ZWMpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHN0ZG91dCB9ID0gYXdhaXQgZXhlY1Byb21pc2UoY3JlZGVudGlhbFByb2Nlc3MpO1xuICAgICAgICAgICAgICAgIGxldCBkYXRhO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKHN0ZG91dC50cmltKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKGBQcm9maWxlICR7cHJvZmlsZU5hbWV9IGNyZWRlbnRpYWxfcHJvY2VzcyByZXR1cm5lZCBpbnZhbGlkIEpTT04uYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRWYWxpZGF0ZWRQcm9jZXNzQ3JlZGVudGlhbHMocHJvZmlsZU5hbWUsIGRhdGEsIHByb2ZpbGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBwcm9wZXJ0eVByb3ZpZGVyLkNyZWRlbnRpYWxzUHJvdmlkZXJFcnJvcihlcnJvci5tZXNzYWdlLCB7IGxvZ2dlciB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBwcm9wZXJ0eVByb3ZpZGVyLkNyZWRlbnRpYWxzUHJvdmlkZXJFcnJvcihgUHJvZmlsZSAke3Byb2ZpbGVOYW1lfSBkaWQgbm90IGNvbnRhaW4gY3JlZGVudGlhbF9wcm9jZXNzLmAsIHsgbG9nZ2VyIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgcHJvcGVydHlQcm92aWRlci5DcmVkZW50aWFsc1Byb3ZpZGVyRXJyb3IoYFByb2ZpbGUgJHtwcm9maWxlTmFtZX0gY291bGQgbm90IGJlIGZvdW5kIGluIHNoYXJlZCBjcmVkZW50aWFscyBmaWxlLmAsIHtcbiAgICAgICAgICAgIGxvZ2dlcixcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuY29uc3QgZnJvbVByb2Nlc3MgPSAoaW5pdCA9IHt9KSA9PiBhc3luYyAoeyBjYWxsZXJDbGllbnRDb25maWcgfSA9IHt9KSA9PiB7XG4gICAgaW5pdC5sb2dnZXI/LmRlYnVnKFwiQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci1wcm9jZXNzIC0gZnJvbVByb2Nlc3NcIik7XG4gICAgY29uc3QgcHJvZmlsZXMgPSBhd2FpdCBzaGFyZWRJbmlGaWxlTG9hZGVyLnBhcnNlS25vd25GaWxlcyhpbml0KTtcbiAgICByZXR1cm4gcmVzb2x2ZVByb2Nlc3NDcmVkZW50aWFscyhzaGFyZWRJbmlGaWxlTG9hZGVyLmdldFByb2ZpbGVOYW1lKHtcbiAgICAgICAgcHJvZmlsZTogaW5pdC5wcm9maWxlID8/IGNhbGxlckNsaWVudENvbmZpZz8ucHJvZmlsZSxcbiAgICB9KSwgcHJvZmlsZXMsIGluaXQubG9nZ2VyKTtcbn07XG5cbmV4cG9ydHMuZnJvbVByb2Nlc3MgPSBmcm9tUHJvY2VzcztcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQUE7QUFBQTtBQUVBLFFBQUksc0JBQXNCO0FBQzFCLFFBQUksbUJBQW1CO0FBQ3ZCLFFBQUkscUJBQXFCLFVBQVEsb0JBQW9CO0FBQ3JELFFBQUksWUFBWSxVQUFRLFdBQVc7QUFDbkMsUUFBSSxTQUFTO0FBRWIsUUFBTSxpQ0FBaUMsQ0FBQyxhQUFhLE1BQU0sYUFBYTtBQUNwRSxVQUFJLEtBQUssWUFBWSxHQUFHO0FBQ3BCLGNBQU0sTUFBTSxXQUFXLFdBQVcsK0NBQStDO0FBQUEsTUFDckY7QUFDQSxVQUFJLEtBQUssZ0JBQWdCLFVBQWEsS0FBSyxvQkFBb0IsUUFBVztBQUN0RSxjQUFNLE1BQU0sV0FBVyxXQUFXLG1EQUFtRDtBQUFBLE1BQ3pGO0FBQ0EsVUFBSSxLQUFLLFlBQVk7QUFDakIsY0FBTSxjQUFjLG9CQUFJLEtBQUs7QUFDN0IsY0FBTSxhQUFhLElBQUksS0FBSyxLQUFLLFVBQVU7QUFDM0MsWUFBSSxhQUFhLGFBQWE7QUFDMUIsZ0JBQU0sTUFBTSxXQUFXLFdBQVcsbURBQW1EO0FBQUEsUUFDekY7QUFBQSxNQUNKO0FBQ0EsVUFBSSxZQUFZLEtBQUs7QUFDckIsVUFBSSxDQUFDLGFBQWEsV0FBVyxXQUFXLEdBQUcsZ0JBQWdCO0FBQ3ZELG9CQUFZLFNBQVMsV0FBVyxFQUFFO0FBQUEsTUFDdEM7QUFDQSxZQUFNLGNBQWM7QUFBQSxRQUNoQixhQUFhLEtBQUs7QUFBQSxRQUNsQixpQkFBaUIsS0FBSztBQUFBLFFBQ3RCLEdBQUksS0FBSyxnQkFBZ0IsRUFBRSxjQUFjLEtBQUssYUFBYTtBQUFBLFFBQzNELEdBQUksS0FBSyxjQUFjLEVBQUUsWUFBWSxJQUFJLEtBQUssS0FBSyxVQUFVLEVBQUU7QUFBQSxRQUMvRCxHQUFJLEtBQUssbUJBQW1CLEVBQUUsaUJBQWlCLEtBQUssZ0JBQWdCO0FBQUEsUUFDcEUsR0FBSSxhQUFhLEVBQUUsVUFBVTtBQUFBLE1BQ2pDO0FBQ0EsYUFBTyxxQkFBcUIsYUFBYSx1QkFBdUIsR0FBRztBQUNuRSxhQUFPO0FBQUEsSUFDWDtBQUVBLFFBQU0sNEJBQTRCLE9BQU8sYUFBYSxVQUFVLFdBQVc7QUFDdkUsWUFBTSxVQUFVLFNBQVMsV0FBVztBQUNwQyxVQUFJLFNBQVMsV0FBVyxHQUFHO0FBQ3ZCLGNBQU0sb0JBQW9CLFFBQVEsb0JBQW9CO0FBQ3RELFlBQUksc0JBQXNCLFFBQVc7QUFDakMsZ0JBQU0sY0FBYyxVQUFVLFVBQVUsb0JBQW9CLHlCQUF5QixpQkFBaUIsRUFBRSxRQUFRLG1CQUFtQixJQUFJO0FBQ3ZJLGNBQUk7QUFDQSxrQkFBTSxFQUFFLE9BQU8sSUFBSSxNQUFNLFlBQVksaUJBQWlCO0FBQ3RELGdCQUFJO0FBQ0osZ0JBQUk7QUFDQSxxQkFBTyxLQUFLLE1BQU0sT0FBTyxLQUFLLENBQUM7QUFBQSxZQUNuQyxRQUNNO0FBQ0Ysb0JBQU0sTUFBTSxXQUFXLFdBQVcsNENBQTRDO0FBQUEsWUFDbEY7QUFDQSxtQkFBTywrQkFBK0IsYUFBYSxNQUFNLFFBQVE7QUFBQSxVQUNyRSxTQUNPLE9BQU87QUFDVixrQkFBTSxJQUFJLGlCQUFpQix5QkFBeUIsTUFBTSxTQUFTLEVBQUUsT0FBTyxDQUFDO0FBQUEsVUFDakY7QUFBQSxRQUNKLE9BQ0s7QUFDRCxnQkFBTSxJQUFJLGlCQUFpQix5QkFBeUIsV0FBVyxXQUFXLHdDQUF3QyxFQUFFLE9BQU8sQ0FBQztBQUFBLFFBQ2hJO0FBQUEsTUFDSixPQUNLO0FBQ0QsY0FBTSxJQUFJLGlCQUFpQix5QkFBeUIsV0FBVyxXQUFXLG1EQUFtRDtBQUFBLFVBQ3pIO0FBQUEsUUFDSixDQUFDO0FBQUEsTUFDTDtBQUFBLElBQ0o7QUFFQSxRQUFNLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxPQUFPLEVBQUUsbUJBQW1CLElBQUksQ0FBQyxNQUFNO0FBQ3RFLFdBQUssUUFBUSxNQUFNLG9EQUFvRDtBQUN2RSxZQUFNLFdBQVcsTUFBTSxvQkFBb0IsZ0JBQWdCLElBQUk7QUFDL0QsYUFBTywwQkFBMEIsb0JBQW9CLGVBQWU7QUFBQSxRQUNoRSxTQUFTLEtBQUssV0FBVyxvQkFBb0I7QUFBQSxNQUNqRCxDQUFDLEdBQUcsVUFBVSxLQUFLLE1BQU07QUFBQSxJQUM3QjtBQUVBLFlBQVEsY0FBYztBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbInJlcXVpcmVfZGlzdF9janMiXQp9Cg==
