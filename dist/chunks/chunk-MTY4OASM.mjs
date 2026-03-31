#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  __esm,
  __export
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@aws-sdk+core@3.973.26/node_modules/@aws-sdk/core/dist-es/submodules/client/emitWarningIfUnsupportedVersion.js
var state, emitWarningIfUnsupportedVersion;
var init_emitWarningIfUnsupportedVersion = __esm({
  "node_modules/.pnpm/@aws-sdk+core@3.973.26/node_modules/@aws-sdk/core/dist-es/submodules/client/emitWarningIfUnsupportedVersion.js"() {
    state = {
      warningEmitted: false
    };
    emitWarningIfUnsupportedVersion = (version) => {
      if (version && !state.warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 20) {
        state.warningEmitted = true;
        process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js ${version} in January 2026.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to a supported Node.js LTS version.

More information can be found at: https://a.co/c895JFp`);
      }
    };
  }
});

// node_modules/.pnpm/@aws-sdk+core@3.973.26/node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js
function setCredentialFeature(credentials, feature, value) {
  if (!credentials.$source) {
    credentials.$source = {};
  }
  credentials.$source[feature] = value;
  return credentials;
}
var init_setCredentialFeature = __esm({
  "node_modules/.pnpm/@aws-sdk+core@3.973.26/node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js"() {
  }
});

// node_modules/.pnpm/@aws-sdk+core@3.973.26/node_modules/@aws-sdk/core/dist-es/submodules/client/setFeature.js
function setFeature(context, feature, value) {
  if (!context.__aws_sdk_context) {
    context.__aws_sdk_context = {
      features: {}
    };
  } else if (!context.__aws_sdk_context.features) {
    context.__aws_sdk_context.features = {};
  }
  context.__aws_sdk_context.features[feature] = value;
}
var init_setFeature = __esm({
  "node_modules/.pnpm/@aws-sdk+core@3.973.26/node_modules/@aws-sdk/core/dist-es/submodules/client/setFeature.js"() {
  }
});

// node_modules/.pnpm/@aws-sdk+core@3.973.26/node_modules/@aws-sdk/core/dist-es/submodules/client/setTokenFeature.js
function setTokenFeature(token, feature, value) {
  if (!token.$source) {
    token.$source = {};
  }
  token.$source[feature] = value;
  return token;
}
var init_setTokenFeature = __esm({
  "node_modules/.pnpm/@aws-sdk+core@3.973.26/node_modules/@aws-sdk/core/dist-es/submodules/client/setTokenFeature.js"() {
  }
});

// node_modules/.pnpm/@aws-sdk+core@3.973.26/node_modules/@aws-sdk/core/dist-es/submodules/client/index.js
var client_exports = {};
__export(client_exports, {
  emitWarningIfUnsupportedVersion: () => emitWarningIfUnsupportedVersion,
  setCredentialFeature: () => setCredentialFeature,
  setFeature: () => setFeature,
  setTokenFeature: () => setTokenFeature,
  state: () => state
});
var init_client = __esm({
  "node_modules/.pnpm/@aws-sdk+core@3.973.26/node_modules/@aws-sdk/core/dist-es/submodules/client/index.js"() {
    init_emitWarningIfUnsupportedVersion();
    init_setCredentialFeature();
    init_setFeature();
    init_setTokenFeature();
  }
});

export {
  emitWarningIfUnsupportedVersion,
  setCredentialFeature,
  client_exports,
  init_client
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK2NvcmVAMy45NzMuMjYvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2NvcmUvZGlzdC1lcy9zdWJtb2R1bGVzL2NsaWVudC9lbWl0V2FybmluZ0lmVW5zdXBwb3J0ZWRWZXJzaW9uLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytjb3JlQDMuOTczLjI2L25vZGVfbW9kdWxlcy9AYXdzLXNkay9jb3JlL2Rpc3QtZXMvc3VibW9kdWxlcy9jbGllbnQvc2V0Q3JlZGVudGlhbEZlYXR1cmUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK2NvcmVAMy45NzMuMjYvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2NvcmUvZGlzdC1lcy9zdWJtb2R1bGVzL2NsaWVudC9zZXRGZWF0dXJlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytjb3JlQDMuOTczLjI2L25vZGVfbW9kdWxlcy9AYXdzLXNkay9jb3JlL2Rpc3QtZXMvc3VibW9kdWxlcy9jbGllbnQvc2V0VG9rZW5GZWF0dXJlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytjb3JlQDMuOTczLjI2L25vZGVfbW9kdWxlcy9AYXdzLXNkay9jb3JlL2Rpc3QtZXMvc3VibW9kdWxlcy9jbGllbnQvaW5kZXguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBjb25zdCBzdGF0ZSA9IHtcbiAgICB3YXJuaW5nRW1pdHRlZDogZmFsc2UsXG59O1xuZXhwb3J0IGNvbnN0IGVtaXRXYXJuaW5nSWZVbnN1cHBvcnRlZFZlcnNpb24gPSAodmVyc2lvbikgPT4ge1xuICAgIGlmICh2ZXJzaW9uICYmICFzdGF0ZS53YXJuaW5nRW1pdHRlZCAmJiBwYXJzZUludCh2ZXJzaW9uLnN1YnN0cmluZygxLCB2ZXJzaW9uLmluZGV4T2YoXCIuXCIpKSkgPCAyMCkge1xuICAgICAgICBzdGF0ZS53YXJuaW5nRW1pdHRlZCA9IHRydWU7XG4gICAgICAgIHByb2Nlc3MuZW1pdFdhcm5pbmcoYE5vZGVEZXByZWNhdGlvbldhcm5pbmc6IFRoZSBBV1MgU0RLIGZvciBKYXZhU2NyaXB0ICh2Mykgd2lsbFxubm8gbG9uZ2VyIHN1cHBvcnQgTm9kZS5qcyAke3ZlcnNpb259IGluIEphbnVhcnkgMjAyNi5cblxuVG8gY29udGludWUgcmVjZWl2aW5nIHVwZGF0ZXMgdG8gQVdTIHNlcnZpY2VzLCBidWcgZml4ZXMsIGFuZCBzZWN1cml0eVxudXBkYXRlcyBwbGVhc2UgdXBncmFkZSB0byBhIHN1cHBvcnRlZCBOb2RlLmpzIExUUyB2ZXJzaW9uLlxuXG5Nb3JlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBhdDogaHR0cHM6Ly9hLmNvL2M4OTVKRnBgKTtcbiAgICB9XG59O1xuIiwgImV4cG9ydCBmdW5jdGlvbiBzZXRDcmVkZW50aWFsRmVhdHVyZShjcmVkZW50aWFscywgZmVhdHVyZSwgdmFsdWUpIHtcbiAgICBpZiAoIWNyZWRlbnRpYWxzLiRzb3VyY2UpIHtcbiAgICAgICAgY3JlZGVudGlhbHMuJHNvdXJjZSA9IHt9O1xuICAgIH1cbiAgICBjcmVkZW50aWFscy4kc291cmNlW2ZlYXR1cmVdID0gdmFsdWU7XG4gICAgcmV0dXJuIGNyZWRlbnRpYWxzO1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBzZXRGZWF0dXJlKGNvbnRleHQsIGZlYXR1cmUsIHZhbHVlKSB7XG4gICAgaWYgKCFjb250ZXh0Ll9fYXdzX3Nka19jb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQuX19hd3Nfc2RrX2NvbnRleHQgPSB7XG4gICAgICAgICAgICBmZWF0dXJlczoge30sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKCFjb250ZXh0Ll9fYXdzX3Nka19jb250ZXh0LmZlYXR1cmVzKSB7XG4gICAgICAgIGNvbnRleHQuX19hd3Nfc2RrX2NvbnRleHQuZmVhdHVyZXMgPSB7fTtcbiAgICB9XG4gICAgY29udGV4dC5fX2F3c19zZGtfY29udGV4dC5mZWF0dXJlc1tmZWF0dXJlXSA9IHZhbHVlO1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBzZXRUb2tlbkZlYXR1cmUodG9rZW4sIGZlYXR1cmUsIHZhbHVlKSB7XG4gICAgaWYgKCF0b2tlbi4kc291cmNlKSB7XG4gICAgICAgIHRva2VuLiRzb3VyY2UgPSB7fTtcbiAgICB9XG4gICAgdG9rZW4uJHNvdXJjZVtmZWF0dXJlXSA9IHZhbHVlO1xuICAgIHJldHVybiB0b2tlbjtcbn1cbiIsICJleHBvcnQgKiBmcm9tIFwiLi9lbWl0V2FybmluZ0lmVW5zdXBwb3J0ZWRWZXJzaW9uXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zZXRDcmVkZW50aWFsRmVhdHVyZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc2V0RmVhdHVyZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc2V0VG9rZW5GZWF0dXJlXCI7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7QUFBQSxJQUFhLE9BR0E7QUFIYjtBQUFBO0FBQU8sSUFBTSxRQUFRO0FBQUEsTUFDakIsZ0JBQWdCO0FBQUEsSUFDcEI7QUFDTyxJQUFNLGtDQUFrQyxDQUFDLFlBQVk7QUFDeEQsVUFBSSxXQUFXLENBQUMsTUFBTSxrQkFBa0IsU0FBUyxRQUFRLFVBQVUsR0FBRyxRQUFRLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJO0FBQy9GLGNBQU0saUJBQWlCO0FBQ3ZCLGdCQUFRLFlBQVk7QUFBQSw0QkFDQSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1REFLb0I7QUFBQSxNQUNuRDtBQUFBLElBQ0o7QUFBQTtBQUFBOzs7QUNkTyxTQUFTLHFCQUFxQixhQUFhLFNBQVMsT0FBTztBQUM5RCxNQUFJLENBQUMsWUFBWSxTQUFTO0FBQ3RCLGdCQUFZLFVBQVUsQ0FBQztBQUFBLEVBQzNCO0FBQ0EsY0FBWSxRQUFRLE9BQU8sSUFBSTtBQUMvQixTQUFPO0FBQ1g7QUFOQTtBQUFBO0FBQUE7QUFBQTs7O0FDQU8sU0FBUyxXQUFXLFNBQVMsU0FBUyxPQUFPO0FBQ2hELE1BQUksQ0FBQyxRQUFRLG1CQUFtQjtBQUM1QixZQUFRLG9CQUFvQjtBQUFBLE1BQ3hCLFVBQVUsQ0FBQztBQUFBLElBQ2Y7QUFBQSxFQUNKLFdBQ1MsQ0FBQyxRQUFRLGtCQUFrQixVQUFVO0FBQzFDLFlBQVEsa0JBQWtCLFdBQVcsQ0FBQztBQUFBLEVBQzFDO0FBQ0EsVUFBUSxrQkFBa0IsU0FBUyxPQUFPLElBQUk7QUFDbEQ7QUFWQTtBQUFBO0FBQUE7QUFBQTs7O0FDQU8sU0FBUyxnQkFBZ0IsT0FBTyxTQUFTLE9BQU87QUFDbkQsTUFBSSxDQUFDLE1BQU0sU0FBUztBQUNoQixVQUFNLFVBQVUsQ0FBQztBQUFBLEVBQ3JCO0FBQ0EsUUFBTSxRQUFRLE9BQU8sSUFBSTtBQUN6QixTQUFPO0FBQ1g7QUFOQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
