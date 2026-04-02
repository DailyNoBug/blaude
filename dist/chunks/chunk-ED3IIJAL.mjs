#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  require_dist_cjs as require_dist_cjs2
} from "./chunk-XKXNRC7R.mjs";
import {
  require_dist_cjs as require_dist_cjs3
} from "./chunk-5PQQKMHH.mjs";
import {
  require_dist_cjs
} from "./chunk-NE3ECB5D.mjs";
import {
  __commonJS
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@aws-sdk+credential-provider-node@3.972.29/node_modules/@aws-sdk/credential-provider-node/dist-cjs/index.js
var require_dist_cjs4 = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-provider-node@3.972.29/node_modules/@aws-sdk/credential-provider-node/dist-cjs/index.js"(exports) {
    var credentialProviderEnv = require_dist_cjs2();
    var propertyProvider = require_dist_cjs();
    var sharedIniFileLoader = require_dist_cjs3();
    var ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
    var remoteProvider = async (init) => {
      const { ENV_CMDS_FULL_URI, ENV_CMDS_RELATIVE_URI, fromContainerMetadata, fromInstanceMetadata } = await import("./dist-cjs-2MH43ELM.mjs");
      if (process.env[ENV_CMDS_RELATIVE_URI] || process.env[ENV_CMDS_FULL_URI]) {
        init.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromHttp/fromContainerMetadata");
        const { fromHttp } = await import("./dist-cjs-J54LKDWO.mjs");
        return propertyProvider.chain(fromHttp(init), fromContainerMetadata(init));
      }
      if (process.env[ENV_IMDS_DISABLED] && process.env[ENV_IMDS_DISABLED] !== "false") {
        return async () => {
          throw new propertyProvider.CredentialsProviderError("EC2 Instance Metadata Service access disabled", { logger: init.logger });
        };
      }
      init.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromInstanceMetadata");
      return fromInstanceMetadata(init);
    };
    function memoizeChain(providers, treatAsExpired) {
      const chain = internalCreateChain(providers);
      let activeLock;
      let passiveLock;
      let credentials;
      const provider = async (options) => {
        if (options?.forceRefresh) {
          return await chain(options);
        }
        if (credentials?.expiration) {
          if (credentials?.expiration?.getTime() < Date.now()) {
            credentials = void 0;
          }
        }
        if (activeLock) {
          await activeLock;
        } else if (!credentials || treatAsExpired?.(credentials)) {
          if (credentials) {
            if (!passiveLock) {
              passiveLock = chain(options).then((c) => {
                credentials = c;
              }).finally(() => {
                passiveLock = void 0;
              });
            }
          } else {
            activeLock = chain(options).then((c) => {
              credentials = c;
            }).finally(() => {
              activeLock = void 0;
            });
            return provider(options);
          }
        }
        return credentials;
      };
      return provider;
    }
    var internalCreateChain = (providers) => async (awsIdentityProperties) => {
      let lastProviderError;
      for (const provider of providers) {
        try {
          return await provider(awsIdentityProperties);
        } catch (err) {
          lastProviderError = err;
          if (err?.tryNextLink) {
            continue;
          }
          throw err;
        }
      }
      throw lastProviderError;
    };
    var multipleCredentialSourceWarningEmitted = false;
    var defaultProvider = (init = {}) => memoizeChain([
      async () => {
        const profile = init.profile ?? process.env[sharedIniFileLoader.ENV_PROFILE];
        if (profile) {
          const envStaticCredentialsAreSet = process.env[credentialProviderEnv.ENV_KEY] && process.env[credentialProviderEnv.ENV_SECRET];
          if (envStaticCredentialsAreSet) {
            if (!multipleCredentialSourceWarningEmitted) {
              const warnFn = init.logger?.warn && init.logger?.constructor?.name !== "NoOpLogger" ? init.logger.warn.bind(init.logger) : console.warn;
              warnFn(`@aws-sdk/credential-provider-node - defaultProvider::fromEnv WARNING:
    Multiple credential sources detected: 
    Both AWS_PROFILE and the pair AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY static credentials are set.
    This SDK will proceed with the AWS_PROFILE value.
    
    However, a future version may change this behavior to prefer the ENV static credentials.
    Please ensure that your environment only sets either the AWS_PROFILE or the
    AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY pair.
`);
              multipleCredentialSourceWarningEmitted = true;
            }
          }
          throw new propertyProvider.CredentialsProviderError("AWS_PROFILE is set, skipping fromEnv provider.", {
            logger: init.logger,
            tryNextLink: true
          });
        }
        init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromEnv");
        return credentialProviderEnv.fromEnv(init)();
      },
      async (awsIdentityProperties) => {
        init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromSSO");
        const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoSession } = init;
        if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
          throw new propertyProvider.CredentialsProviderError("Skipping SSO provider in default chain (inputs do not include SSO fields).", { logger: init.logger });
        }
        const { fromSSO } = await import("./dist-cjs-TCU4ITV3.mjs");
        return fromSSO(init)(awsIdentityProperties);
      },
      async (awsIdentityProperties) => {
        init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromIni");
        const { fromIni } = await import("./dist-cjs-5LNVLVJS.mjs");
        return fromIni(init)(awsIdentityProperties);
      },
      async (awsIdentityProperties) => {
        init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromProcess");
        const { fromProcess } = await import("./dist-cjs-ISCLZMPL.mjs");
        return fromProcess(init)(awsIdentityProperties);
      },
      async (awsIdentityProperties) => {
        init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromTokenFile");
        const { fromTokenFile } = await import("./dist-cjs-UYOSIOWW.mjs");
        return fromTokenFile(init)(awsIdentityProperties);
      },
      async () => {
        init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::remoteProvider");
        return (await remoteProvider(init))();
      },
      async () => {
        throw new propertyProvider.CredentialsProviderError("Could not load credentials from any providers", {
          tryNextLink: false,
          logger: init.logger
        });
      }
    ], credentialsTreatedAsExpired);
    var credentialsWillNeedRefresh = (credentials) => credentials?.expiration !== void 0;
    var credentialsTreatedAsExpired = (credentials) => credentials?.expiration !== void 0 && credentials.expiration.getTime() - Date.now() < 3e5;
    exports.credentialsTreatedAsExpired = credentialsTreatedAsExpired;
    exports.credentialsWillNeedRefresh = credentialsWillNeedRefresh;
    exports.defaultProvider = defaultProvider;
  }
});

export {
  require_dist_cjs4 as require_dist_cjs
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK2NyZWRlbnRpYWwtcHJvdmlkZXItbm9kZUAzLjk3Mi4yOS9ub2RlX21vZHVsZXMvQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci1ub2RlL2Rpc3QtY2pzL2luZGV4LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVkZW50aWFsUHJvdmlkZXJFbnYgPSByZXF1aXJlKCdAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLWVudicpO1xudmFyIHByb3BlcnR5UHJvdmlkZXIgPSByZXF1aXJlKCdAc21pdGh5L3Byb3BlcnR5LXByb3ZpZGVyJyk7XG52YXIgc2hhcmVkSW5pRmlsZUxvYWRlciA9IHJlcXVpcmUoJ0BzbWl0aHkvc2hhcmVkLWluaS1maWxlLWxvYWRlcicpO1xuXG5jb25zdCBFTlZfSU1EU19ESVNBQkxFRCA9IFwiQVdTX0VDMl9NRVRBREFUQV9ESVNBQkxFRFwiO1xuY29uc3QgcmVtb3RlUHJvdmlkZXIgPSBhc3luYyAoaW5pdCkgPT4ge1xuICAgIGNvbnN0IHsgRU5WX0NNRFNfRlVMTF9VUkksIEVOVl9DTURTX1JFTEFUSVZFX1VSSSwgZnJvbUNvbnRhaW5lck1ldGFkYXRhLCBmcm9tSW5zdGFuY2VNZXRhZGF0YSB9ID0gYXdhaXQgaW1wb3J0KCdAc21pdGh5L2NyZWRlbnRpYWwtcHJvdmlkZXItaW1kcycpO1xuICAgIGlmIChwcm9jZXNzLmVudltFTlZfQ01EU19SRUxBVElWRV9VUkldIHx8IHByb2Nlc3MuZW52W0VOVl9DTURTX0ZVTExfVVJJXSkge1xuICAgICAgICBpbml0LmxvZ2dlcj8uZGVidWcoXCJAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLW5vZGUgLSByZW1vdGVQcm92aWRlcjo6ZnJvbUh0dHAvZnJvbUNvbnRhaW5lck1ldGFkYXRhXCIpO1xuICAgICAgICBjb25zdCB7IGZyb21IdHRwIH0gPSBhd2FpdCBpbXBvcnQoJ0Bhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItaHR0cCcpO1xuICAgICAgICByZXR1cm4gcHJvcGVydHlQcm92aWRlci5jaGFpbihmcm9tSHR0cChpbml0KSwgZnJvbUNvbnRhaW5lck1ldGFkYXRhKGluaXQpKTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52W0VOVl9JTURTX0RJU0FCTEVEXSAmJiBwcm9jZXNzLmVudltFTlZfSU1EU19ESVNBQkxFRF0gIT09IFwiZmFsc2VcIikge1xuICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdGhyb3cgbmV3IHByb3BlcnR5UHJvdmlkZXIuQ3JlZGVudGlhbHNQcm92aWRlckVycm9yKFwiRUMyIEluc3RhbmNlIE1ldGFkYXRhIFNlcnZpY2UgYWNjZXNzIGRpc2FibGVkXCIsIHsgbG9nZ2VyOiBpbml0LmxvZ2dlciB9KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaW5pdC5sb2dnZXI/LmRlYnVnKFwiQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci1ub2RlIC0gcmVtb3RlUHJvdmlkZXI6OmZyb21JbnN0YW5jZU1ldGFkYXRhXCIpO1xuICAgIHJldHVybiBmcm9tSW5zdGFuY2VNZXRhZGF0YShpbml0KTtcbn07XG5cbmZ1bmN0aW9uIG1lbW9pemVDaGFpbihwcm92aWRlcnMsIHRyZWF0QXNFeHBpcmVkKSB7XG4gICAgY29uc3QgY2hhaW4gPSBpbnRlcm5hbENyZWF0ZUNoYWluKHByb3ZpZGVycyk7XG4gICAgbGV0IGFjdGl2ZUxvY2s7XG4gICAgbGV0IHBhc3NpdmVMb2NrO1xuICAgIGxldCBjcmVkZW50aWFscztcbiAgICBjb25zdCBwcm92aWRlciA9IGFzeW5jIChvcHRpb25zKSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zPy5mb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBjaGFpbihvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3JlZGVudGlhbHM/LmV4cGlyYXRpb24pIHtcbiAgICAgICAgICAgIGlmIChjcmVkZW50aWFscz8uZXhwaXJhdGlvbj8uZ2V0VGltZSgpIDwgRGF0ZS5ub3coKSkge1xuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhY3RpdmVMb2NrKSB7XG4gICAgICAgICAgICBhd2FpdCBhY3RpdmVMb2NrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFjcmVkZW50aWFscyB8fCB0cmVhdEFzRXhwaXJlZD8uKGNyZWRlbnRpYWxzKSkge1xuICAgICAgICAgICAgaWYgKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXNzaXZlTG9jaykge1xuICAgICAgICAgICAgICAgICAgICBwYXNzaXZlTG9jayA9IGNoYWluKG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoYykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHMgPSBjO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc2l2ZUxvY2sgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUxvY2sgPSBjaGFpbihvcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoYykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFscyA9IGM7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVMb2NrID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm92aWRlcihvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3JlZGVudGlhbHM7XG4gICAgfTtcbiAgICByZXR1cm4gcHJvdmlkZXI7XG59XG5jb25zdCBpbnRlcm5hbENyZWF0ZUNoYWluID0gKHByb3ZpZGVycykgPT4gYXN5bmMgKGF3c0lkZW50aXR5UHJvcGVydGllcykgPT4ge1xuICAgIGxldCBsYXN0UHJvdmlkZXJFcnJvcjtcbiAgICBmb3IgKGNvbnN0IHByb3ZpZGVyIG9mIHByb3ZpZGVycykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHByb3ZpZGVyKGF3c0lkZW50aXR5UHJvcGVydGllcyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgbGFzdFByb3ZpZGVyRXJyb3IgPSBlcnI7XG4gICAgICAgICAgICBpZiAoZXJyPy50cnlOZXh0TGluaykge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRocm93IGxhc3RQcm92aWRlckVycm9yO1xufTtcblxubGV0IG11bHRpcGxlQ3JlZGVudGlhbFNvdXJjZVdhcm5pbmdFbWl0dGVkID0gZmFsc2U7XG5jb25zdCBkZWZhdWx0UHJvdmlkZXIgPSAoaW5pdCA9IHt9KSA9PiBtZW1vaXplQ2hhaW4oW1xuICAgIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvZmlsZSA9IGluaXQucHJvZmlsZSA/PyBwcm9jZXNzLmVudltzaGFyZWRJbmlGaWxlTG9hZGVyLkVOVl9QUk9GSUxFXTtcbiAgICAgICAgaWYgKHByb2ZpbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGVudlN0YXRpY0NyZWRlbnRpYWxzQXJlU2V0ID0gcHJvY2Vzcy5lbnZbY3JlZGVudGlhbFByb3ZpZGVyRW52LkVOVl9LRVldICYmIHByb2Nlc3MuZW52W2NyZWRlbnRpYWxQcm92aWRlckVudi5FTlZfU0VDUkVUXTtcbiAgICAgICAgICAgIGlmIChlbnZTdGF0aWNDcmVkZW50aWFsc0FyZVNldCkge1xuICAgICAgICAgICAgICAgIGlmICghbXVsdGlwbGVDcmVkZW50aWFsU291cmNlV2FybmluZ0VtaXR0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2FybkZuID0gaW5pdC5sb2dnZXI/Lndhcm4gJiYgaW5pdC5sb2dnZXI/LmNvbnN0cnVjdG9yPy5uYW1lICE9PSBcIk5vT3BMb2dnZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBpbml0LmxvZ2dlci53YXJuLmJpbmQoaW5pdC5sb2dnZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGNvbnNvbGUud2FybjtcbiAgICAgICAgICAgICAgICAgICAgd2FybkZuKGBAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLW5vZGUgLSBkZWZhdWx0UHJvdmlkZXI6OmZyb21FbnYgV0FSTklORzpcbiAgICBNdWx0aXBsZSBjcmVkZW50aWFsIHNvdXJjZXMgZGV0ZWN0ZWQ6IFxuICAgIEJvdGggQVdTX1BST0ZJTEUgYW5kIHRoZSBwYWlyIEFXU19BQ0NFU1NfS0VZX0lEL0FXU19TRUNSRVRfQUNDRVNTX0tFWSBzdGF0aWMgY3JlZGVudGlhbHMgYXJlIHNldC5cbiAgICBUaGlzIFNESyB3aWxsIHByb2NlZWQgd2l0aCB0aGUgQVdTX1BST0ZJTEUgdmFsdWUuXG4gICAgXG4gICAgSG93ZXZlciwgYSBmdXR1cmUgdmVyc2lvbiBtYXkgY2hhbmdlIHRoaXMgYmVoYXZpb3IgdG8gcHJlZmVyIHRoZSBFTlYgc3RhdGljIGNyZWRlbnRpYWxzLlxuICAgIFBsZWFzZSBlbnN1cmUgdGhhdCB5b3VyIGVudmlyb25tZW50IG9ubHkgc2V0cyBlaXRoZXIgdGhlIEFXU19QUk9GSUxFIG9yIHRoZVxuICAgIEFXU19BQ0NFU1NfS0VZX0lEL0FXU19TRUNSRVRfQUNDRVNTX0tFWSBwYWlyLlxuYCk7XG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxlQ3JlZGVudGlhbFNvdXJjZVdhcm5pbmdFbWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgcHJvcGVydHlQcm92aWRlci5DcmVkZW50aWFsc1Byb3ZpZGVyRXJyb3IoXCJBV1NfUFJPRklMRSBpcyBzZXQsIHNraXBwaW5nIGZyb21FbnYgcHJvdmlkZXIuXCIsIHtcbiAgICAgICAgICAgICAgICBsb2dnZXI6IGluaXQubG9nZ2VyLFxuICAgICAgICAgICAgICAgIHRyeU5leHRMaW5rOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaW5pdC5sb2dnZXI/LmRlYnVnKFwiQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci1ub2RlIC0gZGVmYXVsdFByb3ZpZGVyOjpmcm9tRW52XCIpO1xuICAgICAgICByZXR1cm4gY3JlZGVudGlhbFByb3ZpZGVyRW52LmZyb21FbnYoaW5pdCkoKTtcbiAgICB9LFxuICAgIGFzeW5jIChhd3NJZGVudGl0eVByb3BlcnRpZXMpID0+IHtcbiAgICAgICAgaW5pdC5sb2dnZXI/LmRlYnVnKFwiQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci1ub2RlIC0gZGVmYXVsdFByb3ZpZGVyOjpmcm9tU1NPXCIpO1xuICAgICAgICBjb25zdCB7IHNzb1N0YXJ0VXJsLCBzc29BY2NvdW50SWQsIHNzb1JlZ2lvbiwgc3NvUm9sZU5hbWUsIHNzb1Nlc3Npb24gfSA9IGluaXQ7XG4gICAgICAgIGlmICghc3NvU3RhcnRVcmwgJiYgIXNzb0FjY291bnRJZCAmJiAhc3NvUmVnaW9uICYmICFzc29Sb2xlTmFtZSAmJiAhc3NvU2Vzc2lvbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IHByb3BlcnR5UHJvdmlkZXIuQ3JlZGVudGlhbHNQcm92aWRlckVycm9yKFwiU2tpcHBpbmcgU1NPIHByb3ZpZGVyIGluIGRlZmF1bHQgY2hhaW4gKGlucHV0cyBkbyBub3QgaW5jbHVkZSBTU08gZmllbGRzKS5cIiwgeyBsb2dnZXI6IGluaXQubG9nZ2VyIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgZnJvbVNTTyB9ID0gYXdhaXQgaW1wb3J0KCdAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLXNzbycpO1xuICAgICAgICByZXR1cm4gZnJvbVNTTyhpbml0KShhd3NJZGVudGl0eVByb3BlcnRpZXMpO1xuICAgIH0sXG4gICAgYXN5bmMgKGF3c0lkZW50aXR5UHJvcGVydGllcykgPT4ge1xuICAgICAgICBpbml0LmxvZ2dlcj8uZGVidWcoXCJAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLW5vZGUgLSBkZWZhdWx0UHJvdmlkZXI6OmZyb21JbmlcIik7XG4gICAgICAgIGNvbnN0IHsgZnJvbUluaSB9ID0gYXdhaXQgaW1wb3J0KCdAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLWluaScpO1xuICAgICAgICByZXR1cm4gZnJvbUluaShpbml0KShhd3NJZGVudGl0eVByb3BlcnRpZXMpO1xuICAgIH0sXG4gICAgYXN5bmMgKGF3c0lkZW50aXR5UHJvcGVydGllcykgPT4ge1xuICAgICAgICBpbml0LmxvZ2dlcj8uZGVidWcoXCJAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLW5vZGUgLSBkZWZhdWx0UHJvdmlkZXI6OmZyb21Qcm9jZXNzXCIpO1xuICAgICAgICBjb25zdCB7IGZyb21Qcm9jZXNzIH0gPSBhd2FpdCBpbXBvcnQoJ0Bhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItcHJvY2VzcycpO1xuICAgICAgICByZXR1cm4gZnJvbVByb2Nlc3MoaW5pdCkoYXdzSWRlbnRpdHlQcm9wZXJ0aWVzKTtcbiAgICB9LFxuICAgIGFzeW5jIChhd3NJZGVudGl0eVByb3BlcnRpZXMpID0+IHtcbiAgICAgICAgaW5pdC5sb2dnZXI/LmRlYnVnKFwiQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci1ub2RlIC0gZGVmYXVsdFByb3ZpZGVyOjpmcm9tVG9rZW5GaWxlXCIpO1xuICAgICAgICBjb25zdCB7IGZyb21Ub2tlbkZpbGUgfSA9IGF3YWl0IGltcG9ydCgnQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci13ZWItaWRlbnRpdHknKTtcbiAgICAgICAgcmV0dXJuIGZyb21Ub2tlbkZpbGUoaW5pdCkoYXdzSWRlbnRpdHlQcm9wZXJ0aWVzKTtcbiAgICB9LFxuICAgIGFzeW5jICgpID0+IHtcbiAgICAgICAgaW5pdC5sb2dnZXI/LmRlYnVnKFwiQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci1ub2RlIC0gZGVmYXVsdFByb3ZpZGVyOjpyZW1vdGVQcm92aWRlclwiKTtcbiAgICAgICAgcmV0dXJuIChhd2FpdCByZW1vdGVQcm92aWRlcihpbml0KSkoKTtcbiAgICB9LFxuICAgIGFzeW5jICgpID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IHByb3BlcnR5UHJvdmlkZXIuQ3JlZGVudGlhbHNQcm92aWRlckVycm9yKFwiQ291bGQgbm90IGxvYWQgY3JlZGVudGlhbHMgZnJvbSBhbnkgcHJvdmlkZXJzXCIsIHtcbiAgICAgICAgICAgIHRyeU5leHRMaW5rOiBmYWxzZSxcbiAgICAgICAgICAgIGxvZ2dlcjogaW5pdC5sb2dnZXIsXG4gICAgICAgIH0pO1xuICAgIH0sXG5dLCBjcmVkZW50aWFsc1RyZWF0ZWRBc0V4cGlyZWQpO1xuY29uc3QgY3JlZGVudGlhbHNXaWxsTmVlZFJlZnJlc2ggPSAoY3JlZGVudGlhbHMpID0+IGNyZWRlbnRpYWxzPy5leHBpcmF0aW9uICE9PSB1bmRlZmluZWQ7XG5jb25zdCBjcmVkZW50aWFsc1RyZWF0ZWRBc0V4cGlyZWQgPSAoY3JlZGVudGlhbHMpID0+IGNyZWRlbnRpYWxzPy5leHBpcmF0aW9uICE9PSB1bmRlZmluZWQgJiYgY3JlZGVudGlhbHMuZXhwaXJhdGlvbi5nZXRUaW1lKCkgLSBEYXRlLm5vdygpIDwgMzAwMDAwO1xuXG5leHBvcnRzLmNyZWRlbnRpYWxzVHJlYXRlZEFzRXhwaXJlZCA9IGNyZWRlbnRpYWxzVHJlYXRlZEFzRXhwaXJlZDtcbmV4cG9ydHMuY3JlZGVudGlhbHNXaWxsTmVlZFJlZnJlc2ggPSBjcmVkZW50aWFsc1dpbGxOZWVkUmVmcmVzaDtcbmV4cG9ydHMuZGVmYXVsdFByb3ZpZGVyID0gZGVmYXVsdFByb3ZpZGVyO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBQTtBQUFBO0FBRUEsUUFBSSx3QkFBd0I7QUFDNUIsUUFBSSxtQkFBbUI7QUFDdkIsUUFBSSxzQkFBc0I7QUFFMUIsUUFBTSxvQkFBb0I7QUFDMUIsUUFBTSxpQkFBaUIsT0FBTyxTQUFTO0FBQ25DLFlBQU0sRUFBRSxtQkFBbUIsdUJBQXVCLHVCQUF1QixxQkFBcUIsSUFBSSxNQUFNLE9BQU8seUJBQWtDO0FBQ2pKLFVBQUksUUFBUSxJQUFJLHFCQUFxQixLQUFLLFFBQVEsSUFBSSxpQkFBaUIsR0FBRztBQUN0RSxhQUFLLFFBQVEsTUFBTSxvRkFBb0Y7QUFDdkcsY0FBTSxFQUFFLFNBQVMsSUFBSSxNQUFNLE9BQU8seUJBQW1DO0FBQ3JFLGVBQU8saUJBQWlCLE1BQU0sU0FBUyxJQUFJLEdBQUcsc0JBQXNCLElBQUksQ0FBQztBQUFBLE1BQzdFO0FBQ0EsVUFBSSxRQUFRLElBQUksaUJBQWlCLEtBQUssUUFBUSxJQUFJLGlCQUFpQixNQUFNLFNBQVM7QUFDOUUsZUFBTyxZQUFZO0FBQ2YsZ0JBQU0sSUFBSSxpQkFBaUIseUJBQXlCLGlEQUFpRCxFQUFFLFFBQVEsS0FBSyxPQUFPLENBQUM7QUFBQSxRQUNoSTtBQUFBLE1BQ0o7QUFDQSxXQUFLLFFBQVEsTUFBTSwwRUFBMEU7QUFDN0YsYUFBTyxxQkFBcUIsSUFBSTtBQUFBLElBQ3BDO0FBRUEsYUFBUyxhQUFhLFdBQVcsZ0JBQWdCO0FBQzdDLFlBQU0sUUFBUSxvQkFBb0IsU0FBUztBQUMzQyxVQUFJO0FBQ0osVUFBSTtB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
