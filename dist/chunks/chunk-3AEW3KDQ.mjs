#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  __esm,
  __export
} from "./chunk-O5PZ3G6I.mjs";

// scripts/shims/https-proxy-agent.mjs
var https_proxy_agent_exports = {};
__export(https_proxy_agent_exports, {
  HttpsProxyAgent: () => HttpsProxyAgent,
  default: () => https_proxy_agent_default
});
import https from "https";
var HttpsProxyAgent, https_proxy_agent_default;
var init_https_proxy_agent = __esm({
  "scripts/shims/https-proxy-agent.mjs"() {
    HttpsProxyAgent = class extends https.Agent {
      constructor(proxy, options = {}) {
        super(options);
        this.proxy = proxy;
      }
    };
    https_proxy_agent_default = HttpsProxyAgent;
  }
});

export {
  HttpsProxyAgent,
  https_proxy_agent_default,
  https_proxy_agent_exports,
  init_https_proxy_agent
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc2NyaXB0cy9zaGltcy9odHRwcy1wcm94eS1hZ2VudC5tanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBodHRwcyBmcm9tIFwiaHR0cHNcIjtcblxuZXhwb3J0IGNsYXNzIEh0dHBzUHJveHlBZ2VudCBleHRlbmRzIGh0dHBzLkFnZW50IHtcbiAgY29uc3RydWN0b3IocHJveHksIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIHRoaXMucHJveHkgPSBwcm94eTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIdHRwc1Byb3h5QWdlbnQ7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBTyxXQUFXO0FBQWxCLElBRWEsaUJBT047QUFUUDtBQUFBO0FBRU8sSUFBTSxrQkFBTixjQUE4QixNQUFNLE1BQU07QUFBQSxNQUMvQyxZQUFZLE9BQU8sVUFBVSxDQUFDLEdBQUc7QUFDL0IsY0FBTSxPQUFPO0FBQ2IsYUFBSyxRQUFRO0FBQUEsTUFDZjtBQUFBLElBQ0Y7QUFFQSxJQUFPLDRCQUFRO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
