#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_sts,
  sts_exports
} from "./chunk-72IAV36L.mjs";
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

// node_modules/.pnpm/@aws-sdk+credential-provider-web-identity@3.972.28/node_modules/@aws-sdk/credential-provider-web-identity/dist-cjs/fromWebToken.js
var require_fromWebToken = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-provider-web-identity@3.972.28/node_modules/@aws-sdk/credential-provider-web-identity/dist-cjs/fromWebToken.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromWebToken = void 0;
    var fromWebToken = (init) => async (awsIdentityProperties) => {
      init.logger?.debug("@aws-sdk/credential-provider-web-identity - fromWebToken");
      const { roleArn, roleSessionName, webIdentityToken, providerId, policyArns, policy, durationSeconds } = init;
      let { roleAssumerWithWebIdentity } = init;
      if (!roleAssumerWithWebIdentity) {
        const { getDefaultRoleAssumerWithWebIdentity } = await Promise.resolve().then(() => __importStar((init_sts(), __toCommonJS(sts_exports))));
        roleAssumerWithWebIdentity = getDefaultRoleAssumerWithWebIdentity({
          ...init.clientConfig,
          credentialProviderLogger: init.logger,
          parentClientConfig: {
            ...awsIdentityProperties?.callerClientConfig,
            ...init.parentClientConfig
          }
        }, init.clientPlugins);
      }
      return roleAssumerWithWebIdentity({
        RoleArn: roleArn,
        RoleSessionName: roleSessionName ?? `aws-sdk-js-session-${Date.now()}`,
        WebIdentityToken: webIdentityToken,
        ProviderId: providerId,
        PolicyArns: policyArns,
        Policy: policy,
        DurationSeconds: durationSeconds
      });
    };
    exports.fromWebToken = fromWebToken;
  }
});

// node_modules/.pnpm/@aws-sdk+credential-provider-web-identity@3.972.28/node_modules/@aws-sdk/credential-provider-web-identity/dist-cjs/fromTokenFile.js
var require_fromTokenFile = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-provider-web-identity@3.972.28/node_modules/@aws-sdk/credential-provider-web-identity/dist-cjs/fromTokenFile.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromTokenFile = void 0;
    var client_1 = (init_client(), __toCommonJS(client_exports));
    var property_provider_1 = require_dist_cjs();
    var shared_ini_file_loader_1 = require_dist_cjs2();
    var node_fs_1 = __require("node:fs");
    var fromWebToken_1 = require_fromWebToken();
    var ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE";
    var ENV_ROLE_ARN = "AWS_ROLE_ARN";
    var ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME";
    var fromTokenFile = (init = {}) => async (awsIdentityProperties) => {
      init.logger?.debug("@aws-sdk/credential-provider-web-identity - fromTokenFile");
      const webIdentityTokenFile = init?.webIdentityTokenFile ?? process.env[ENV_TOKEN_FILE];
      const roleArn = init?.roleArn ?? process.env[ENV_ROLE_ARN];
      const roleSessionName = init?.roleSessionName ?? process.env[ENV_ROLE_SESSION_NAME];
      if (!webIdentityTokenFile || !roleArn) {
        throw new property_provider_1.CredentialsProviderError("Web identity configuration not specified", {
          logger: init.logger
        });
      }
      const credentials = await (0, fromWebToken_1.fromWebToken)({
        ...init,
        webIdentityToken: shared_ini_file_loader_1.externalDataInterceptor?.getTokenRecord?.()[webIdentityTokenFile] ?? (0, node_fs_1.readFileSync)(webIdentityTokenFile, { encoding: "ascii" }),
        roleArn,
        roleSessionName
      })(awsIdentityProperties);
      if (webIdentityTokenFile === process.env[ENV_TOKEN_FILE]) {
        (0, client_1.setCredentialFeature)(credentials, "CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN", "h");
      }
      return credentials;
    };
    exports.fromTokenFile = fromTokenFile;
  }
});

// node_modules/.pnpm/@aws-sdk+credential-provider-web-identity@3.972.28/node_modules/@aws-sdk/credential-provider-web-identity/dist-cjs/index.js
var require_dist_cjs3 = __commonJS({
  "node_modules/.pnpm/@aws-sdk+credential-provider-web-identity@3.972.28/node_modules/@aws-sdk/credential-provider-web-identity/dist-cjs/index.js"(exports) {
    var fromTokenFile = require_fromTokenFile();
    var fromWebToken = require_fromWebToken();
    Object.prototype.hasOwnProperty.call(fromTokenFile, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
      enumerable: true,
      value: fromTokenFile["__proto__"]
    });
    Object.keys(fromTokenFile).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = fromTokenFile[k];
    });
    Object.prototype.hasOwnProperty.call(fromWebToken, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
      enumerable: true,
      value: fromWebToken["__proto__"]
    });
    Object.keys(fromWebToken).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = fromWebToken[k];
    });
  }
});

export {
  require_dist_cjs3 as require_dist_cjs
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK2NyZWRlbnRpYWwtcHJvdmlkZXItd2ViLWlkZW50aXR5QDMuOTcyLjI4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLXdlYi1pZGVudGl0eS9kaXN0LWNqcy9mcm9tV2ViVG9rZW4uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK2NyZWRlbnRpYWwtcHJvdmlkZXItd2ViLWlkZW50aXR5QDMuOTcyLjI4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLXdlYi1pZGVudGl0eS9kaXN0LWNqcy9mcm9tVG9rZW5GaWxlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytjcmVkZW50aWFsLXByb3ZpZGVyLXdlYi1pZGVudGl0eUAzLjk3Mi4yOC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci13ZWItaWRlbnRpdHkvZGlzdC1janMvaW5kZXguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBvd25LZXlzID0gZnVuY3Rpb24obykge1xuICAgICAgICBvd25LZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHZhciBhciA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBvKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIGspKSBhclthci5sZW5ndGhdID0gaztcbiAgICAgICAgICAgIHJldHVybiBhcjtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG93bktleXMobyk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1vZCkge1xuICAgICAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayA9IG93bktleXMobW9kKSwgaSA9IDA7IGkgPCBrLmxlbmd0aDsgaSsrKSBpZiAoa1tpXSAhPT0gXCJkZWZhdWx0XCIpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwga1tpXSk7XG4gICAgICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmZyb21XZWJUb2tlbiA9IHZvaWQgMDtcbmNvbnN0IGZyb21XZWJUb2tlbiA9IChpbml0KSA9PiBhc3luYyAoYXdzSWRlbnRpdHlQcm9wZXJ0aWVzKSA9PiB7XG4gICAgaW5pdC5sb2dnZXI/LmRlYnVnKFwiQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci13ZWItaWRlbnRpdHkgLSBmcm9tV2ViVG9rZW5cIik7XG4gICAgY29uc3QgeyByb2xlQXJuLCByb2xlU2Vzc2lvbk5hbWUsIHdlYklkZW50aXR5VG9rZW4sIHByb3ZpZGVySWQsIHBvbGljeUFybnMsIHBvbGljeSwgZHVyYXRpb25TZWNvbmRzIH0gPSBpbml0O1xuICAgIGxldCB7IHJvbGVBc3N1bWVyV2l0aFdlYklkZW50aXR5IH0gPSBpbml0O1xuICAgIGlmICghcm9sZUFzc3VtZXJXaXRoV2ViSWRlbnRpdHkpIHtcbiAgICAgICAgY29uc3QgeyBnZXREZWZhdWx0Um9sZUFzc3VtZXJXaXRoV2ViSWRlbnRpdHkgfSA9IGF3YWl0IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJAYXdzLXNkay9uZXN0ZWQtY2xpZW50cy9zdHNcIikpKTtcbiAgICAgICAgcm9sZUFzc3VtZXJXaXRoV2ViSWRlbnRpdHkgPSBnZXREZWZhdWx0Um9sZUFzc3VtZXJXaXRoV2ViSWRlbnRpdHkoe1xuICAgICAgICAgICAgLi4uaW5pdC5jbGllbnRDb25maWcsXG4gICAgICAgICAgICBjcmVkZW50aWFsUHJvdmlkZXJMb2dnZXI6IGluaXQubG9nZ2VyLFxuICAgICAgICAgICAgcGFyZW50Q2xpZW50Q29uZmlnOiB7XG4gICAgICAgICAgICAgICAgLi4uYXdzSWRlbnRpdHlQcm9wZXJ0aWVzPy5jYWxsZXJDbGllbnRDb25maWcsXG4gICAgICAgICAgICAgICAgLi4uaW5pdC5wYXJlbnRDbGllbnRDb25maWcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LCBpbml0LmNsaWVudFBsdWdpbnMpO1xuICAgIH1cbiAgICByZXR1cm4gcm9sZUFzc3VtZXJXaXRoV2ViSWRlbnRpdHkoe1xuICAgICAgICBSb2xlQXJuOiByb2xlQXJuLFxuICAgICAgICBSb2xlU2Vzc2lvbk5hbWU6IHJvbGVTZXNzaW9uTmFtZSA/PyBgYXdzLXNkay1qcy1zZXNzaW9uLSR7RGF0ZS5ub3coKX1gLFxuICAgICAgICBXZWJJZGVudGl0eVRva2VuOiB3ZWJJZGVudGl0eVRva2VuLFxuICAgICAgICBQcm92aWRlcklkOiBwcm92aWRlcklkLFxuICAgICAgICBQb2xpY3lBcm5zOiBwb2xpY3lBcm5zLFxuICAgICAgICBQb2xpY3k6IHBvbGljeSxcbiAgICAgICAgRHVyYXRpb25TZWNvbmRzOiBkdXJhdGlvblNlY29uZHMsXG4gICAgfSk7XG59O1xuZXhwb3J0cy5mcm9tV2ViVG9rZW4gPSBmcm9tV2ViVG9rZW47XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmZyb21Ub2tlbkZpbGUgPSB2b2lkIDA7XG5jb25zdCBjbGllbnRfMSA9IHJlcXVpcmUoXCJAYXdzLXNkay9jb3JlL2NsaWVudFwiKTtcbmNvbnN0IHByb3BlcnR5X3Byb3ZpZGVyXzEgPSByZXF1aXJlKFwiQHNtaXRoeS9wcm9wZXJ0eS1wcm92aWRlclwiKTtcbmNvbnN0IHNoYXJlZF9pbmlfZmlsZV9sb2FkZXJfMSA9IHJlcXVpcmUoXCJAc21pdGh5L3NoYXJlZC1pbmktZmlsZS1sb2FkZXJcIik7XG5jb25zdCBub2RlX2ZzXzEgPSByZXF1aXJlKFwibm9kZTpmc1wiKTtcbmNvbnN0IGZyb21XZWJUb2tlbl8xID0gcmVxdWlyZShcIi4vZnJvbVdlYlRva2VuXCIpO1xuY29uc3QgRU5WX1RPS0VOX0ZJTEUgPSBcIkFXU19XRUJfSURFTlRJVFlfVE9LRU5fRklMRVwiO1xuY29uc3QgRU5WX1JPTEVfQVJOID0gXCJBV1NfUk9MRV9BUk5cIjtcbmNvbnN0IEVOVl9ST0xFX1NFU1NJT05fTkFNRSA9IFwiQVdTX1JPTEVfU0VTU0lPTl9OQU1FXCI7XG5jb25zdCBmcm9tVG9rZW5GaWxlID0gKGluaXQgPSB7fSkgPT4gYXN5bmMgKGF3c0lkZW50aXR5UHJvcGVydGllcykgPT4ge1xuICAgIGluaXQubG9nZ2VyPy5kZWJ1ZyhcIkBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItd2ViLWlkZW50aXR5IC0gZnJvbVRva2VuRmlsZVwiKTtcbiAgICBjb25zdCB3ZWJJZGVudGl0eVRva2VuRmlsZSA9IGluaXQ/LndlYklkZW50aXR5VG9rZW5GaWxlID8/IHByb2Nlc3MuZW52W0VOVl9UT0tFTl9GSUxFXTtcbiAgICBjb25zdCByb2xlQXJuID0gaW5pdD8ucm9sZUFybiA/PyBwcm9jZXNzLmVudltFTlZfUk9MRV9BUk5dO1xuICAgIGNvbnN0IHJvbGVTZXNzaW9uTmFtZSA9IGluaXQ/LnJvbGVTZXNzaW9uTmFtZSA/PyBwcm9jZXNzLmVudltFTlZfUk9MRV9TRVNTSU9OX05BTUVdO1xuICAgIGlmICghd2ViSWRlbnRpdHlUb2tlbkZpbGUgfHwgIXJvbGVBcm4pIHtcbiAgICAgICAgdGhyb3cgbmV3IHByb3BlcnR5X3Byb3ZpZGVyXzEuQ3JlZGVudGlhbHNQcm92aWRlckVycm9yKFwiV2ViIGlkZW50aXR5IGNvbmZpZ3VyYXRpb24gbm90IHNwZWNpZmllZFwiLCB7XG4gICAgICAgICAgICBsb2dnZXI6IGluaXQubG9nZ2VyLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgY3JlZGVudGlhbHMgPSBhd2FpdCAoMCwgZnJvbVdlYlRva2VuXzEuZnJvbVdlYlRva2VuKSh7XG4gICAgICAgIC4uLmluaXQsXG4gICAgICAgIHdlYklkZW50aXR5VG9rZW46IHNoYXJlZF9pbmlfZmlsZV9sb2FkZXJfMS5leHRlcm5hbERhdGFJbnRlcmNlcHRvcj8uZ2V0VG9rZW5SZWNvcmQ/LigpW3dlYklkZW50aXR5VG9rZW5GaWxlXSA/P1xuICAgICAgICAgICAgKDAsIG5vZGVfZnNfMS5yZWFkRmlsZVN5bmMpKHdlYklkZW50aXR5VG9rZW5GaWxlLCB7IGVuY29kaW5nOiBcImFzY2lpXCIgfSksXG4gICAgICAgIHJvbGVBcm4sXG4gICAgICAgIHJvbGVTZXNzaW9uTmFtZSxcbiAgICB9KShhd3NJZGVudGl0eVByb3BlcnRpZXMpO1xuICAgIGlmICh3ZWJJZGVudGl0eVRva2VuRmlsZSA9PT0gcHJvY2Vzcy5lbnZbRU5WX1RPS0VOX0ZJTEVdKSB7XG4gICAgICAgICgwLCBjbGllbnRfMS5zZXRDcmVkZW50aWFsRmVhdHVyZSkoY3JlZGVudGlhbHMsIFwiQ1JFREVOVElBTFNfRU5WX1ZBUlNfU1RTX1dFQl9JRF9UT0tFTlwiLCBcImhcIik7XG4gICAgfVxuICAgIHJldHVybiBjcmVkZW50aWFscztcbn07XG5leHBvcnRzLmZyb21Ub2tlbkZpbGUgPSBmcm9tVG9rZW5GaWxlO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIGZyb21Ub2tlbkZpbGUgPSByZXF1aXJlKCcuL2Zyb21Ub2tlbkZpbGUnKTtcbnZhciBmcm9tV2ViVG9rZW4gPSByZXF1aXJlKCcuL2Zyb21XZWJUb2tlbicpO1xuXG5cblxuT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb21Ub2tlbkZpbGUsICdfX3Byb3RvX18nKSAmJlxuXHQhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsICdfX3Byb3RvX18nKSAmJlxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fcHJvdG9fXycsIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdHZhbHVlOiBmcm9tVG9rZW5GaWxlWydfX3Byb3RvX18nXVxuXHR9KTtcblxuT2JqZWN0LmtleXMoZnJvbVRva2VuRmlsZSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgaykpIGV4cG9ydHNba10gPSBmcm9tVG9rZW5GaWxlW2tdO1xufSk7XG5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZnJvbVdlYlRva2VuLCAnX19wcm90b19fJykgJiZcblx0IU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCAnX19wcm90b19fJykgJiZcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX3Byb3RvX18nLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHR2YWx1ZTogZnJvbVdlYlRva2VuWydfX3Byb3RvX18nXVxuXHR9KTtcblxuT2JqZWN0LmtleXMoZnJvbVdlYlRva2VuKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBrKSkgZXhwb3J0c1trXSA9IGZyb21XZWJUb2tlbltrXTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0EsUUFBSSxrQkFBbUIsV0FBUSxRQUFLLG9CQUFxQixPQUFPLFVBQVUsU0FBUyxHQUFHLEdBQUcsR0FBRyxJQUFJO0FBQzVGLFVBQUksT0FBTyxPQUFXLE1BQUs7QUFDM0IsVUFBSSxPQUFPLE9BQU8seUJBQXlCLEdBQUcsQ0FBQztBQUMvQyxVQUFJLENBQUMsU0FBUyxTQUFTLE9BQU8sQ0FBQyxFQUFFLGFBQWEsS0FBSyxZQUFZLEtBQUssZUFBZTtBQUNqRixlQUFPLEVBQUUsWUFBWSxNQUFNLEtBQUssV0FBVztBQUFFLGlCQUFPLEVBQUUsQ0FBQztBQUFBLFFBQUcsRUFBRTtBQUFBLE1BQzlEO0FBQ0EsYUFBTyxlQUFlLEdBQUcsSUFBSSxJQUFJO0FBQUEsSUFDckMsTUFBTSxTQUFTLEdBQUcsR0FBRyxHQUFHLElBQUk7QUFDeEIsVUFBSSxPQUFPLE9BQVcsTUFBSztBQUMzQixRQUFFLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFBQSxJQUNmO0FBQ0EsUUFBSSxxQkFBc0IsV0FBUSxRQUFLLHVCQUF3QixPQUFPLFVBQVUsU0FBUyxHQUFHLEdBQUc7QUFDM0YsYUFBTyxlQUFlLEdBQUcsV0FBVyxFQUFFLFlBQVksTUFBTSxPQUFPLEVBQUUsQ0FBQztBQUFBLElBQ3RFLEtBQUssU0FBUyxHQUFHLEdBQUc7QUFDaEIsUUFBRSxTQUFTLElBQUk7QUFBQSxJQUNuQjtBQUNBLFFBQUksZUFBZ0IsV0FBUSxRQUFLLGdCQUFrQiw0QkFBWTtBQUMzRCxVQUFJLFVBQVUsU0FBUyxHQUFHO0FBQ3RCLGtCQUFVLE9BQU8sdUJBQXVCLFNBQVVBLElBQUc7QUFDakQsY0FBSSxLQUFLLENBQUM7QUFDVixtQkFBUyxLQUFLQSxHQUFHLEtBQUksT0FBTyxVQUFVLGVBQWUsS0FBS0EsSUFBRyxDQUFDLEVBQUcsSUFBRyxHQUFHLE1BQU0sSUFBSTtBQUNqRixpQkFBTztBQUFBLFFBQ1g7QUFDQSxlQUFPLFFBQVEsQ0FBQztBQUFBLE1BQ3BCO0FBQ0EsYUFBTyxTQUFVLEtBQUs7QUFDbEIsWUFBSSxPQUFPLElBQUksV0FBWSxRQUFPO0FBQ2xDLFlBQUksU0FBUyxDQUFDO0FBQ2QsWUFBSSxPQUFPO0FBQU0sbUJBQVMsSUFBSSxRQUFRLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsSUFBSyxLQUFJLEVBQUUsQ0FBQyxNQUFNLFVBQVcsaUJBQWdCLFFBQVEsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUFBO0FBQy9ILDJCQUFtQixRQUFRLEdBQUc7QUFDOUIsZUFBTztBQUFBLE1BQ1g7QUFBQSxJQUNKLEdBQUc7QUFDSCxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDNUQsWUFBUSxlQUFlO0FBQ3ZCLFFBQU0sZUFBZSxDQUFDLFNBQVMsT0FBTywwQkFBMEI7QUFDNUQsV0FBSyxRQUFRLE1BQU0sMERBQTBEO0FBQzdFLFlBQU0sRUFBRSxTQUFTLGlCQUFpQixrQkFBa0IsWUFBWSxZQUFZLFFBQVEsZ0JBQWdCLElBQUk7QUFDeEcsVUFBSSxFQUFFLDJCQUEyQixJQUFJO0FBQ3JDLFVBQUksQ0FBQyw0QkFBNEI7QUFDN0IsY0FBTSxFQUFFLHFDQUFxQyxJQUFJLE1BQU0sUUFBUSxRQUFRLEVBQUUsS0FBSyxNQUFNLGFBQWEsdUNBQXNDLENBQUM7QUFDeEkscUNBQTZCLHFDQUFxQztBQUFBLFVBQzlELEdBQUcsS0FBSztBQUFBLFVBQ1IsMEJBQTBCLEtBQUs7QUFBQSxVQUMvQixvQkFBb0I7QUFBQSxZQUNoQixHQUFHLHVCQUF1QjtBQUFBLFlBQzFCLEdBQUcsS0FBSztBQUFBLFVBQ1o7QUFBQSxRQUNKLEdBQUcsS0FBSyxhQUFhO0FBQUEsTUFDekI7QUFDQSxhQUFPLDJCQUEyQjtBQUFBLFFBQzlCLFNBQVM7QUFBQSxRQUNULGlCQUFpQixtQkFBbUIsc0JBQXNCLEtBQUssSUFBSSxDQUFDO0FBQUEsUUFDcEUsa0JBQWtCO0FBQUEsUUFDbEIsWUFBWTtBQUFBLFFBQ1osWUFBWTtBQUFBLFFBQ1osUUFBUTtBQUFBLFFBQ1IsaUJBQWlCO0FBQUEsTUFDckIsQ0FBQztBQUFBLElBQ0w7QUFDQSxZQUFRLGVBQWU7QUFBQTtBQUFBOzs7QUM3RHZCO0FBQUE7QUFBQTtBQUNBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUM1RCxZQUFRLGdCQUFnQjtBQUN4QixRQUFNLFdBQVc7QUFDakIsUUFBTSxzQkFBc0I7QUFDNUIsUUFBTSwyQkFBMkI7QUFDakMsUUFBTSxZQUFZLFVBQVEsU0FBUztBQUNuQyxRQUFNLGlCQUFpQjtBQUN2QixRQUFNLGlCQUFpQjtBQUN2QixRQUFNLGVBQWU7QUFDckIsUUFBTSx3QkFBd0I7QUFDOUIsUUFBTSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxPQUFPLDBCQUEwQjtBQUNsRSxXQUFLLFFBQVEsTUFBTSwyREFBMkQ7QUFDOUUsWUFBTSx1QkFBdUIsTUFBTSx3QkFBd0IsUUFBUSxJQUFJLGNBQWM7QUFDckYsWUFBTSxVQUFVLE1BQU0sV0FBVyxRQUFRLElBQUksWUFBWTtBQUN6RCxZQUFNLGtCQUFrQixNQUFNLG1CQUFtQixRQUFRLElBQUkscUJBQXFCO0FBQ2xGLFVBQUksQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTO0FBQ25DLGNBQU0sSUFBSSxvQkFBb0IseUJBQXlCLDRDQUE0QztBQUFBLFVBQy9GLFFBQVEsS0FBSztBQUFBLFFBQ2pCLENBQUM7QUFBQSxNQUNMO0FBQ0EsWUFBTSxjQUFjLE9BQU8sR0FBRyxlQUFlLGNBQWM7QUFBQSxRQUN2RCxHQUFHO0FBQUEsUUFDSCxrQkFBa0IseUJBQXlCLHlCQUF5QixpQkFBaUIsRUFBRSxvQkFBb0IsTUFDdEcsR0FBRyxVQUFVLGNBQWMsc0JBQXNCLEVBQUUsVUFBVSxRQUFRLENBQUM7QUFBQSxRQUMzRTtBQUFBLFFBQ0E7QUFBQSxNQUNKLENBQUMsRUFBRSxxQkFBcUI7QUFDeEIsVUFBSSx5QkFBeUIsUUFBUSxJQUFJLGNBQWMsR0FBRztBQUN0RCxTQUFDLEdBQUcsU0FBUyxzQkFBc0IsYUFBYSx5Q0FBeUMsR0FBRztBQUFBLE1BQ2hHO0FBQ0EsYUFBTztBQUFBLElBQ1g7QUFDQSxZQUFRLGdCQUFnQjtBQUFBO0FBQUE7OztBQ2pDeEIsSUFBQUMsb0JBQUE7QUFBQTtBQUVBLFFBQUksZ0JBQWdCO0FBQ3BCLFFBQUksZUFBZTtBQUluQixXQUFPLFVBQVUsZUFBZSxLQUFLLGVBQWUsV0FBVyxLQUM5RCxDQUFDLE9BQU8sVUFBVSxlQUFlLEtBQUssU0FBUyxXQUFXLEtBQzFELE9BQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixPQUFPLGNBQWMsV0FBVztBQUFBLElBQ2pDLENBQUM7QUFFRixXQUFPLEtBQUssYUFBYSxFQUFFLFFBQVEsU0FBVSxHQUFHO0FBQy9DLFVBQUksTUFBTSxhQUFhLENBQUMsT0FBTyxVQUFVLGVBQWUsS0FBSyxTQUFTLENBQUMsRUFBRyxTQUFRLENBQUMsSUFBSSxjQUFjLENBQUM7QUFBQSxJQUN2RyxDQUFDO0FBQ0QsV0FBTyxVQUFVLGVBQWUsS0FBSyxjQUFjLFdBQVcsS0FDN0QsQ0FBQyxPQUFPLFVBQVUsZUFBZSxLQUFLLFNBQVMsV0FBVyxLQUMxRCxPQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osT0FBTyxhQUFhLFdBQVc7QUFBQSxJQUNoQyxDQUFDO0FBRUYsV0FBTyxLQUFLLFlBQVksRUFBRSxRQUFRLFNBQVUsR0FBRztBQUM5QyxVQUFJLE1BQU0sYUFBYSxDQUFDLE9BQU8sVUFBVSxlQUFlLEtBQUssU0FBUyxDQUFDLEVBQUcsU0FBUSxDQUFDLElBQUksYUFBYSxDQUFDO0FBQUEsSUFDdEcsQ0FBQztBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbIm8iLCAicmVxdWlyZV9kaXN0X2NqcyJdCn0K
