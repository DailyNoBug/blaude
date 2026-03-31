#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  __commonJS
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@smithy+types@4.13.1/node_modules/@smithy/types/dist-cjs/index.js
var require_dist_cjs = __commonJS({
  "node_modules/.pnpm/@smithy+types@4.13.1/node_modules/@smithy/types/dist-cjs/index.js"(exports) {
    "use strict";
    exports.HttpAuthLocation = void 0;
    (function(HttpAuthLocation) {
      HttpAuthLocation["HEADER"] = "header";
      HttpAuthLocation["QUERY"] = "query";
    })(exports.HttpAuthLocation || (exports.HttpAuthLocation = {}));
    exports.HttpApiKeyAuthLocation = void 0;
    (function(HttpApiKeyAuthLocation) {
      HttpApiKeyAuthLocation["HEADER"] = "header";
      HttpApiKeyAuthLocation["QUERY"] = "query";
    })(exports.HttpApiKeyAuthLocation || (exports.HttpApiKeyAuthLocation = {}));
    exports.EndpointURLScheme = void 0;
    (function(EndpointURLScheme) {
      EndpointURLScheme["HTTP"] = "http";
      EndpointURLScheme["HTTPS"] = "https";
    })(exports.EndpointURLScheme || (exports.EndpointURLScheme = {}));
    exports.AlgorithmId = void 0;
    (function(AlgorithmId) {
      AlgorithmId["MD5"] = "md5";
      AlgorithmId["CRC32"] = "crc32";
      AlgorithmId["CRC32C"] = "crc32c";
      AlgorithmId["SHA1"] = "sha1";
      AlgorithmId["SHA256"] = "sha256";
    })(exports.AlgorithmId || (exports.AlgorithmId = {}));
    var getChecksumConfiguration = (runtimeConfig) => {
      const checksumAlgorithms = [];
      if (runtimeConfig.sha256 !== void 0) {
        checksumAlgorithms.push({
          algorithmId: () => exports.AlgorithmId.SHA256,
          checksumConstructor: () => runtimeConfig.sha256
        });
      }
      if (runtimeConfig.md5 != void 0) {
        checksumAlgorithms.push({
          algorithmId: () => exports.AlgorithmId.MD5,
          checksumConstructor: () => runtimeConfig.md5
        });
      }
      return {
        addChecksumAlgorithm(algo) {
          checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
          return checksumAlgorithms;
        }
      };
    };
    var resolveChecksumRuntimeConfig = (clientConfig) => {
      const runtimeConfig = {};
      clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
      });
      return runtimeConfig;
    };
    var getDefaultClientConfiguration = (runtimeConfig) => {
      return getChecksumConfiguration(runtimeConfig);
    };
    var resolveDefaultRuntimeConfig = (config) => {
      return resolveChecksumRuntimeConfig(config);
    };
    exports.FieldPosition = void 0;
    (function(FieldPosition) {
      FieldPosition[FieldPosition["HEADER"] = 0] = "HEADER";
      FieldPosition[FieldPosition["TRAILER"] = 1] = "TRAILER";
    })(exports.FieldPosition || (exports.FieldPosition = {}));
    var SMITHY_CONTEXT_KEY = "__smithy_context";
    exports.IniSectionType = void 0;
    (function(IniSectionType) {
      IniSectionType["PROFILE"] = "profile";
      IniSectionType["SSO_SESSION"] = "sso-session";
      IniSectionType["SERVICES"] = "services";
    })(exports.IniSectionType || (exports.IniSectionType = {}));
    exports.RequestHandlerProtocol = void 0;
    (function(RequestHandlerProtocol) {
      RequestHandlerProtocol["HTTP_0_9"] = "http/0.9";
      RequestHandlerProtocol["HTTP_1_0"] = "http/1.0";
      RequestHandlerProtocol["TDS_8_0"] = "tds/8.0";
    })(exports.RequestHandlerProtocol || (exports.RequestHandlerProtocol = {}));
    exports.SMITHY_CONTEXT_KEY = SMITHY_CONTEXT_KEY;
    exports.getDefaultClientConfiguration = getDefaultClientConfiguration;
    exports.resolveDefaultRuntimeConfig = resolveDefaultRuntimeConfig;
  }
});

export {
  require_dist_cjs
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdHlwZXNANC4xMy4xL25vZGVfbW9kdWxlcy9Ac21pdGh5L3R5cGVzL2Rpc3QtY2pzL2luZGV4LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuSHR0cEF1dGhMb2NhdGlvbiA9IHZvaWQgMDtcbihmdW5jdGlvbiAoSHR0cEF1dGhMb2NhdGlvbikge1xuICAgIEh0dHBBdXRoTG9jYXRpb25bXCJIRUFERVJcIl0gPSBcImhlYWRlclwiO1xuICAgIEh0dHBBdXRoTG9jYXRpb25bXCJRVUVSWVwiXSA9IFwicXVlcnlcIjtcbn0pKGV4cG9ydHMuSHR0cEF1dGhMb2NhdGlvbiB8fCAoZXhwb3J0cy5IdHRwQXV0aExvY2F0aW9uID0ge30pKTtcblxuZXhwb3J0cy5IdHRwQXBpS2V5QXV0aExvY2F0aW9uID0gdm9pZCAwO1xuKGZ1bmN0aW9uIChIdHRwQXBpS2V5QXV0aExvY2F0aW9uKSB7XG4gICAgSHR0cEFwaUtleUF1dGhMb2NhdGlvbltcIkhFQURFUlwiXSA9IFwiaGVhZGVyXCI7XG4gICAgSHR0cEFwaUtleUF1dGhMb2NhdGlvbltcIlFVRVJZXCJdID0gXCJxdWVyeVwiO1xufSkoZXhwb3J0cy5IdHRwQXBpS2V5QXV0aExvY2F0aW9uIHx8IChleHBvcnRzLkh0dHBBcGlLZXlBdXRoTG9jYXRpb24gPSB7fSkpO1xuXG5leHBvcnRzLkVuZHBvaW50VVJMU2NoZW1lID0gdm9pZCAwO1xuKGZ1bmN0aW9uIChFbmRwb2ludFVSTFNjaGVtZSkge1xuICAgIEVuZHBvaW50VVJMU2NoZW1lW1wiSFRUUFwiXSA9IFwiaHR0cFwiO1xuICAgIEVuZHBvaW50VVJMU2NoZW1lW1wiSFRUUFNcIl0gPSBcImh0dHBzXCI7XG59KShleHBvcnRzLkVuZHBvaW50VVJMU2NoZW1lIHx8IChleHBvcnRzLkVuZHBvaW50VVJMU2NoZW1lID0ge30pKTtcblxuZXhwb3J0cy5BbGdvcml0aG1JZCA9IHZvaWQgMDtcbihmdW5jdGlvbiAoQWxnb3JpdGhtSWQpIHtcbiAgICBBbGdvcml0aG1JZFtcIk1ENVwiXSA9IFwibWQ1XCI7XG4gICAgQWxnb3JpdGhtSWRbXCJDUkMzMlwiXSA9IFwiY3JjMzJcIjtcbiAgICBBbGdvcml0aG1JZFtcIkNSQzMyQ1wiXSA9IFwiY3JjMzJjXCI7XG4gICAgQWxnb3JpdGhtSWRbXCJTSEExXCJdID0gXCJzaGExXCI7XG4gICAgQWxnb3JpdGhtSWRbXCJTSEEyNTZcIl0gPSBcInNoYTI1NlwiO1xufSkoZXhwb3J0cy5BbGdvcml0aG1JZCB8fCAoZXhwb3J0cy5BbGdvcml0aG1JZCA9IHt9KSk7XG5jb25zdCBnZXRDaGVja3N1bUNvbmZpZ3VyYXRpb24gPSAocnVudGltZUNvbmZpZykgPT4ge1xuICAgIGNvbnN0IGNoZWNrc3VtQWxnb3JpdGhtcyA9IFtdO1xuICAgIGlmIChydW50aW1lQ29uZmlnLnNoYTI1NiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNoZWNrc3VtQWxnb3JpdGhtcy5wdXNoKHtcbiAgICAgICAgICAgIGFsZ29yaXRobUlkOiAoKSA9PiBleHBvcnRzLkFsZ29yaXRobUlkLlNIQTI1NixcbiAgICAgICAgICAgIGNoZWNrc3VtQ29uc3RydWN0b3I6ICgpID0+IHJ1bnRpbWVDb25maWcuc2hhMjU2LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHJ1bnRpbWVDb25maWcubWQ1ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBjaGVja3N1bUFsZ29yaXRobXMucHVzaCh7XG4gICAgICAgICAgICBhbGdvcml0aG1JZDogKCkgPT4gZXhwb3J0cy5BbGdvcml0aG1JZC5NRDUsXG4gICAgICAgICAgICBjaGVja3N1bUNvbnN0cnVjdG9yOiAoKSA9PiBydW50aW1lQ29uZmlnLm1kNSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZENoZWNrc3VtQWxnb3JpdGhtKGFsZ28pIHtcbiAgICAgICAgICAgIGNoZWNrc3VtQWxnb3JpdGhtcy5wdXNoKGFsZ28pO1xuICAgICAgICB9LFxuICAgICAgICBjaGVja3N1bUFsZ29yaXRobXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tzdW1BbGdvcml0aG1zO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuY29uc3QgcmVzb2x2ZUNoZWNrc3VtUnVudGltZUNvbmZpZyA9IChjbGllbnRDb25maWcpID0+IHtcbiAgICBjb25zdCBydW50aW1lQ29uZmlnID0ge307XG4gICAgY2xpZW50Q29uZmlnLmNoZWNrc3VtQWxnb3JpdGhtcygpLmZvckVhY2goKGNoZWNrc3VtQWxnb3JpdGhtKSA9PiB7XG4gICAgICAgIHJ1bnRpbWVDb25maWdbY2hlY2tzdW1BbGdvcml0aG0uYWxnb3JpdGhtSWQoKV0gPSBjaGVja3N1bUFsZ29yaXRobS5jaGVja3N1bUNvbnN0cnVjdG9yKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJ1bnRpbWVDb25maWc7XG59O1xuXG5jb25zdCBnZXREZWZhdWx0Q2xpZW50Q29uZmlndXJhdGlvbiA9IChydW50aW1lQ29uZmlnKSA9PiB7XG4gICAgcmV0dXJuIGdldENoZWNrc3VtQ29uZmlndXJhdGlvbihydW50aW1lQ29uZmlnKTtcbn07XG5jb25zdCByZXNvbHZlRGVmYXVsdFJ1bnRpbWVDb25maWcgPSAoY29uZmlnKSA9PiB7XG4gICAgcmV0dXJuIHJlc29sdmVDaGVja3N1bVJ1bnRpbWVDb25maWcoY29uZmlnKTtcbn07XG5cbmV4cG9ydHMuRmllbGRQb3NpdGlvbiA9IHZvaWQgMDtcbihmdW5jdGlvbiAoRmllbGRQb3NpdGlvbikge1xuICAgIEZpZWxkUG9zaXRpb25bRmllbGRQb3NpdGlvbltcIkhFQURFUlwiXSA9IDBdID0gXCJIRUFERVJcIjtcbiAgICBGaWVsZFBvc2l0aW9uW0ZpZWxkUG9zaXRpb25bXCJUUkFJTEVSXCJdID0gMV0gPSBcIlRSQUlMRVJcIjtcbn0pKGV4cG9ydHMuRmllbGRQb3NpdGlvbiB8fCAoZXhwb3J0cy5GaWVsZFBvc2l0aW9uID0ge30pKTtcblxuY29uc3QgU01JVEhZX0NPTlRFWFRfS0VZID0gXCJfX3NtaXRoeV9jb250ZXh0XCI7XG5cbmV4cG9ydHMuSW5pU2VjdGlvblR5cGUgPSB2b2lkIDA7XG4oZnVuY3Rpb24gKEluaVNlY3Rpb25UeXBlKSB7XG4gICAgSW5pU2VjdGlvblR5cGVbXCJQUk9GSUxFXCJdID0gXCJwcm9maWxlXCI7XG4gICAgSW5pU2VjdGlvblR5cGVbXCJTU09fU0VTU0lPTlwiXSA9IFwic3NvLXNlc3Npb25cIjtcbiAgICBJbmlTZWN0aW9uVHlwZVtcIlNFUlZJQ0VTXCJdID0gXCJzZXJ2aWNlc1wiO1xufSkoZXhwb3J0cy5JbmlTZWN0aW9uVHlwZSB8fCAoZXhwb3J0cy5JbmlTZWN0aW9uVHlwZSA9IHt9KSk7XG5cbmV4cG9ydHMuUmVxdWVzdEhhbmRsZXJQcm90b2NvbCA9IHZvaWQgMDtcbihmdW5jdGlvbiAoUmVxdWVzdEhhbmRsZXJQcm90b2NvbCkge1xuICAgIFJlcXVlc3RIYW5kbGVyUHJvdG9jb2xbXCJIVFRQXzBfOVwiXSA9IFwiaHR0cC8wLjlcIjtcbiAgICBSZXF1ZXN0SGFuZGxlclByb3RvY29sW1wiSFRUUF8xXzBcIl0gPSBcImh0dHAvMS4wXCI7XG4gICAgUmVxdWVzdEhhbmRsZXJQcm90b2NvbFtcIlREU184XzBcIl0gPSBcInRkcy84LjBcIjtcbn0pKGV4cG9ydHMuUmVxdWVzdEhhbmRsZXJQcm90b2NvbCB8fCAoZXhwb3J0cy5SZXF1ZXN0SGFuZGxlclByb3RvY29sID0ge30pKTtcblxuZXhwb3J0cy5TTUlUSFlfQ09OVEVYVF9LRVkgPSBTTUlUSFlfQ09OVEVYVF9LRVk7XG5leHBvcnRzLmdldERlZmF1bHRDbGllbnRDb25maWd1cmF0aW9uID0gZ2V0RGVmYXVsdENsaWVudENvbmZpZ3VyYXRpb247XG5leHBvcnRzLnJlc29sdmVEZWZhdWx0UnVudGltZUNvbmZpZyA9IHJlc29sdmVEZWZhdWx0UnVudGltZUNvbmZpZztcbiJdLAogICJtYXBwaW5ncyI6ICI7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
