#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  getGlobalConfig,
  init_config,
  saveGlobalConfig
} from "./chunk-JQ55XPLZ.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-5EA44JDA.mjs";
import "./chunk-O2ZQRVJU.mjs";
import "./chunk-ZPEBVZEB.mjs";
import "./chunk-DQ5JTCOA.mjs";
import "./chunk-HGPSKCV5.mjs";
import "./chunk-B7JYVDBT.mjs";
import "./chunk-GHLJY6GK.mjs";
import "./chunk-PPND3F3V.mjs";
import "./chunk-BKRSSLV2.mjs";
import "./chunk-XFYUWZYI.mjs";
import "./chunk-TR6BOGPZ.mjs";
import "./chunk-KTLUBGNP.mjs";
import "./chunk-3PS62SCS.mjs";
import "./chunk-SFCRD75C.mjs";
import "./chunk-QFFW7MQ2.mjs";
import "./chunk-3AEW3KDQ.mjs";
import "./chunk-NLMC5AZV.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-M5NTYAY2.mjs";
import "./chunk-SETG7O3F.mjs";
import "./chunk-J6MJ6UVK.mjs";
import "./chunk-PKIVPZJM.mjs";
import "./chunk-JXCG2JDO.mjs";
import "./chunk-FBLMX54P.mjs";
import "./chunk-SF3TOBTZ.mjs";
import "./chunk-IVTTVOOG.mjs";
import "./chunk-LNQOFDTT.mjs";
import "./chunk-ZAYB3WZV.mjs";
import "./chunk-NT7W7YWD.mjs";
import "./chunk-4S33EKPF.mjs";
import "./chunk-TZFTPSMG.mjs";
import "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-F5ODCUJD.mjs";
import "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import "./chunk-OU3SZVVB.mjs";
import "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/commands/vim/vim.ts
var call;
var init_vim = __esm({
  "src/commands/vim/vim.ts"() {
    init_analytics();
    init_config();
    call = async () => {
      const config = getGlobalConfig();
      let currentMode = config.editorMode || "normal";
      if (currentMode === "emacs") {
        currentMode = "normal";
      }
      const newMode = currentMode === "normal" ? "vim" : "normal";
      saveGlobalConfig((current) => ({
        ...current,
        editorMode: newMode
      }));
      logEvent("tengu_editor_mode_changed", {
        mode: newMode,
        source: "command"
      });
      return {
        type: "text",
        value: `Editor mode set to ${newMode}. ${newMode === "vim" ? "Use Escape key to toggle between INSERT and NORMAL modes." : "Using standard (readline) keyboard bindings."}`
      };
    };
  }
});
init_vim();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL3ZpbS92aW0udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7XG4gIHR5cGUgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgbG9nRXZlbnQsXG59IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB0eXBlIHsgTG9jYWxDb21tYW5kQ2FsbCB9IGZyb20gJy4uLy4uL3R5cGVzL2NvbW1hbmQuanMnXG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcsIHNhdmVHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi91dGlscy9jb25maWcuanMnXG5cbmV4cG9ydCBjb25zdCBjYWxsOiBMb2NhbENvbW1hbmRDYWxsID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKVxuICBsZXQgY3VycmVudE1vZGUgPSBjb25maWcuZWRpdG9yTW9kZSB8fCAnbm9ybWFsJ1xuXG4gIC8vIEhhbmRsZSBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IC0gdHJlYXQgJ2VtYWNzJyBhcyAnbm9ybWFsJ1xuICBpZiAoY3VycmVudE1vZGUgPT09ICdlbWFjcycpIHtcbiAgICBjdXJyZW50TW9kZSA9ICdub3JtYWwnXG4gIH1cblxuICBjb25zdCBuZXdNb2RlID0gY3VycmVudE1vZGUgPT09ICdub3JtYWwnID8gJ3ZpbScgOiAnbm9ybWFsJ1xuXG4gIHNhdmVHbG9iYWxDb25maWcoY3VycmVudCA9PiAoe1xuICAgIC4uLmN1cnJlbnQsXG4gICAgZWRpdG9yTW9kZTogbmV3TW9kZSxcbiAgfSkpXG5cbiAgbG9nRXZlbnQoJ3Rlbmd1X2VkaXRvcl9tb2RlX2NoYW5nZWQnLCB7XG4gICAgbW9kZTogbmV3TW9kZSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgIHNvdXJjZTpcbiAgICAgICdjb21tYW5kJyBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgdHlwZTogJ3RleHQnLFxuICAgIHZhbHVlOiBgRWRpdG9yIG1vZGUgc2V0IHRvICR7bmV3TW9kZX0uICR7XG4gICAgICBuZXdNb2RlID09PSAndmltJ1xuICAgICAgICA/ICdVc2UgRXNjYXBlIGtleSB0byB0b2dnbGUgYmV0d2VlbiBJTlNFUlQgYW5kIE5PUk1BTCBtb2Rlcy4nXG4gICAgICAgIDogJ1VzaW5nIHN0YW5kYXJkIChyZWFkbGluZSkga2V5Ym9hcmQgYmluZGluZ3MuJ1xuICAgIH1gLFxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFPYTtBQVBiO0FBQUE7QUFBQTtBQUtBO0FBRU8sSUFBTSxPQUF5QixZQUFZO0FBQ2hELFlBQU0sU0FBUyxnQkFBZ0I7QUFDL0IsVUFBSSxjQUFjLE9BQU8sY0FBYztBQUd2QyxVQUFJLGdCQUFnQixTQUFTO0FBQzNCLHNCQUFjO0FBQUEsTUFDaEI7QUFFQSxZQUFNLFVBQVUsZ0JBQWdCLFdBQVcsUUFBUTtBQUVuRCx1QkFBaUIsY0FBWTtBQUFBLFFBQzNCLEdBQUc7QUFBQSxRQUNILFlBQVk7QUFBQSxNQUNkLEVBQUU7QUFFRixlQUFTLDZCQUE2QjtBQUFBLFFBQ3BDLE1BQU07QUFBQSxRQUNOLFFBQ0U7QUFBQSxNQUNKLENBQUM7QUFFRCxhQUFPO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixPQUFPLHNCQUFzQixPQUFPLEtBQ2xDLFlBQVksUUFDUiw4REFDQSw4Q0FDTjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
