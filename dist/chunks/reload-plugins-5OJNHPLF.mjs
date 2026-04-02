#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_refresh,
  refreshActivePlugins
} from "./chunk-INDBF34W.mjs";
import {
  init_settingsSync,
  redownloadUserSettings
} from "./chunk-LB46M2ZI.mjs";
import {
  init_changeDetector,
  settingsChangeDetector
} from "./chunk-5INIV6TQ.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-UPQJMBLU.mjs";
import "./chunk-JWBPLKI2.mjs";
import "./chunk-B5LIYBEU.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-IVRFWWJD.mjs";
import "./chunk-WFZ47W7F.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-36ZVP56J.mjs";
import "./chunk-WKBYDC63.mjs";
import "./chunk-JPGTA2FH.mjs";
import "./chunk-2G5PON4H.mjs";
import "./chunk-SRAO5KUL.mjs";
import "./chunk-75K7OLET.mjs";
import "./chunk-ABRSTIS2.mjs";
import "./chunk-L22EUB4Z.mjs";
import "./chunk-NE3WJ556.mjs";
import "./chunk-3W743YKD.mjs";
import "./chunk-I4JSDM2A.mjs";
import "./chunk-ORS2TTME.mjs";
import "./chunk-H5UJY55C.mjs";
import "./chunk-R2NMUWG6.mjs";
import "./chunk-J7TDGLE4.mjs";
import "./chunk-X6KULBXG.mjs";
import "./chunk-7RY6L7JT.mjs";
import "./chunk-EL6ZMCGB.mjs";
import "./chunk-ALBMKMIQ.mjs";
import "./chunk-XTFZIHQR.mjs";
import "./chunk-A6JDOKBH.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-3IFS4CK6.mjs";
import "./chunk-2UP4OFWW.mjs";
import "./chunk-XXNQOOJ5.mjs";
import "./chunk-TQHEE24N.mjs";
import "./chunk-GRYB5GTK.mjs";
import "./chunk-V35HZRR2.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import "./chunk-ZFJCSCYD.mjs";
import "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-H3V45RZC.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  init_stringUtils,
  plural
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
import "./chunk-M5NTYAY2.mjs";
import "./chunk-SETG7O3F.mjs";
import "./chunk-J6MJ6UVK.mjs";
import "./chunk-PKIVPZJM.mjs";
import "./chunk-JXCG2JDO.mjs";
import "./chunk-FBLMX54P.mjs";
import "./chunk-FOFMX5GB.mjs";
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
import {
  feature,
  init_bun_bundle
} from "./chunk-OU3SZVVB.mjs";
import {
  getIsRemoteMode,
  init_state
} from "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import {
  init_envUtils,
  isEnvTruthy
} from "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/commands/reload-plugins/reload-plugins.ts
function n(count, noun) {
  return `${count} ${plural(count, noun)}`;
}
var call;
var init_reload_plugins = __esm({
  "src/commands/reload-plugins/reload-plugins.ts"() {
    init_bun_bundle();
    init_state();
    init_settingsSync();
    init_envUtils();
    init_refresh();
    init_changeDetector();
    init_stringUtils();
    call = async (_args, context) => {
      if (feature("DOWNLOAD_USER_SETTINGS") && (isEnvTruthy(process.env.CLAUDE_CODE_REMOTE) || getIsRemoteMode())) {
        const applied = await redownloadUserSettings();
        if (applied) {
          settingsChangeDetector.notifyChange("userSettings");
        }
      }
      const r = await refreshActivePlugins(context.setAppState);
      const parts = [
        n(r.enabled_count, "plugin"),
        n(r.command_count, "skill"),
        n(r.agent_count, "agent"),
        n(r.hook_count, "hook"),
        // "plugin MCP/LSP" disambiguates from user-config/built-in servers,
        // which /reload-plugins doesn't touch. Commands/hooks are plugin-only;
        // agent_count is total agents (incl. built-ins). (gh-31321)
        n(r.mcp_count, "plugin MCP server"),
        n(r.lsp_count, "plugin LSP server")
      ];
      let msg = `Reloaded: ${parts.join(" \xB7 ")}`;
      if (r.error_count > 0) {
        msg += `
${n(r.error_count, "error")} during load. Run /doctor for details.`;
      }
      return { type: "text", value: msg };
    };
  }
});
init_reload_plugins();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL3JlbG9hZC1wbHVnaW5zL3JlbG9hZC1wbHVnaW5zLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBmZWF0dXJlIH0gZnJvbSAnYnVuOmJ1bmRsZSdcbmltcG9ydCB7IGdldElzUmVtb3RlTW9kZSB9IGZyb20gJy4uLy4uL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB7IHJlZG93bmxvYWRVc2VyU2V0dGluZ3MgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zZXR0aW5nc1N5bmMvaW5kZXguanMnXG5pbXBvcnQgdHlwZSB7IExvY2FsQ29tbWFuZENhbGwgfSBmcm9tICcuLi8uLi90eXBlcy9jb21tYW5kLmpzJ1xuaW1wb3J0IHsgaXNFbnZUcnV0aHkgfSBmcm9tICcuLi8uLi91dGlscy9lbnZVdGlscy5qcydcbmltcG9ydCB7IHJlZnJlc2hBY3RpdmVQbHVnaW5zIH0gZnJvbSAnLi4vLi4vdXRpbHMvcGx1Z2lucy9yZWZyZXNoLmpzJ1xuaW1wb3J0IHsgc2V0dGluZ3NDaGFuZ2VEZXRlY3RvciB9IGZyb20gJy4uLy4uL3V0aWxzL3NldHRpbmdzL2NoYW5nZURldGVjdG9yLmpzJ1xuaW1wb3J0IHsgcGx1cmFsIH0gZnJvbSAnLi4vLi4vdXRpbHMvc3RyaW5nVXRpbHMuanMnXG5cbmV4cG9ydCBjb25zdCBjYWxsOiBMb2NhbENvbW1hbmRDYWxsID0gYXN5bmMgKF9hcmdzLCBjb250ZXh0KSA9PiB7XG4gIC8vIENDUjogcmUtcHVsbCB1c2VyIHNldHRpbmdzIGJlZm9yZSB0aGUgY2FjaGUgc3dlZXAgc28gZW5hYmxlZFBsdWdpbnMgL1xuICAvLyBleHRyYUtub3duTWFya2V0cGxhY2VzIHB1c2hlZCBmcm9tIHRoZSB1c2VyJ3MgbG9jYWwgQ0xJIChzZXR0aW5nc1N5bmMpXG4gIC8vIHRha2UgZWZmZWN0LiBOb24tQ0NSIGhlYWRsZXNzIChlLmcuIHZzY29kZSBTREsgc3VicHJvY2Vzcykgc2hhcmVzIGRpc2tcbiAgLy8gd2l0aCB3aG9ldmVyIHdyaXRlcyBzZXR0aW5ncyBcdTIwMTQgdGhlIGZpbGUgd2F0Y2hlciBkZWxpdmVycyBjaGFuZ2VzLCBub1xuICAvLyByZS1wdWxsIG5lZWRlZCB0aGVyZS5cbiAgLy9cbiAgLy8gTWFuYWdlZCBzZXR0aW5ncyBpbnRlbnRpb25hbGx5IE5PVCByZS1mZXRjaGVkOiBpdCBhbHJlYWR5IHBvbGxzIGhvdXJseVxuICAvLyAoUE9MTElOR19JTlRFUlZBTF9NUyksIGFuZCBwb2xpY3kgZW5mb3JjZW1lbnQgaXMgZXZlbnR1YWxseS1jb25zaXN0ZW50XG4gIC8vIGJ5IGRlc2lnbiAoc3RhbGUtY2FjaGUgZmFsbGJhY2sgb24gZmV0Y2ggZmFpbHVyZSkuIEludGVyYWN0aXZlXG4gIC8vIC9yZWxvYWQtcGx1Z2lucyBoYXMgbmV2ZXIgcmUtZmV0Y2hlZCBpdCBlaXRoZXIuXG4gIC8vXG4gIC8vIE5vIHJldHJpZXM6IHVzZXItaW5pdGlhdGVkIGNvbW1hbmQsIG9uZSBhdHRlbXB0ICsgZmFpbC1vcGVuLiBUaGUgdXNlclxuICAvLyBjYW4gcmUtcnVuIC9yZWxvYWQtcGx1Z2lucyB0byByZXRyeS4gU3RhcnR1cCBwYXRoIGtlZXBzIGl0cyByZXRyaWVzLlxuICBpZiAoXG4gICAgZmVhdHVyZSgnRE9XTkxPQURfVVNFUl9TRVRUSU5HUycpICYmXG4gICAgKGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX1JFTU9URSkgfHwgZ2V0SXNSZW1vdGVNb2RlKCkpXG4gICkge1xuICAgIGNvbnN0IGFwcGxpZWQgPSBhd2FpdCByZWRvd25sb2FkVXNlclNldHRpbmdzKClcbiAgICAvLyBhcHBseVJlbW90ZUVudHJpZXNUb0xvY2FsIHVzZXMgbWFya0ludGVybmFsV3JpdGUgdG8gc3VwcHJlc3MgdGhlXG4gICAgLy8gZmlsZSB3YXRjaGVyIChjb3JyZWN0IGZvciBzdGFydHVwLCBub3RoaW5nIGxpc3RlbmluZyB5ZXQpOyBmaXJlXG4gICAgLy8gbm90aWZ5Q2hhbmdlIGhlcmUgc28gbWlkLXNlc3Npb24gYXBwbHlTZXR0aW5nc0NoYW5nZSBydW5zLlxuICAgIGlmIChhcHBsaWVkKSB7XG4gICAgICBzZXR0aW5nc0NoYW5nZURldGVjdG9yLm5vdGlmeUNoYW5nZSgndXNlclNldHRpbmdzJylcbiAgICB9XG4gIH1cblxuICBjb25zdCByID0gYXdhaXQgcmVmcmVzaEFjdGl2ZVBsdWdpbnMoY29udGV4dC5zZXRBcHBTdGF0ZSlcblxuICBjb25zdCBwYXJ0cyA9IFtcbiAgICBuKHIuZW5hYmxlZF9jb3VudCwgJ3BsdWdpbicpLFxuICAgIG4oci5jb21tYW5kX2NvdW50LCAnc2tpbGwnKSxcbiAgICBuKHIuYWdlbnRfY291bnQsICdhZ2VudCcpLFxuICAgIG4oci5ob29rX2NvdW50LCAnaG9vaycpLFxuICAgIC8vIFwicGx1Z2luIE1DUC9MU1BcIiBkaXNhbWJpZ3VhdGVzIGZyb20gdXNlci1jb25maWcvYnVpbHQtaW4gc2VydmVycyxcbiAgICAvLyB3aGljaCAvcmVsb2FkLXBsdWdpbnMgZG9lc24ndCB0b3VjaC4gQ29tbWFuZHMvaG9va3MgYXJlIHBsdWdpbi1vbmx5O1xuICAgIC8vIGFnZW50X2NvdW50IGlzIHRvdGFsIGFnZW50cyAoaW5jbC4gYnVpbHQtaW5zKS4gKGdoLTMxMzIxKVxuICAgIG4oci5tY3BfY291bnQsICdwbHVnaW4gTUNQIHNlcnZlcicpLFxuICAgIG4oci5sc3BfY291bnQsICdwbHVnaW4gTFNQIHNlcnZlcicpLFxuICBdXG4gIGxldCBtc2cgPSBgUmVsb2FkZWQ6ICR7cGFydHMuam9pbignIFx1MDBCNyAnKX1gXG5cbiAgaWYgKHIuZXJyb3JfY291bnQgPiAwKSB7XG4gICAgbXNnICs9IGBcXG4ke24oci5lcnJvcl9jb3VudCwgJ2Vycm9yJyl9IGR1cmluZyBsb2FkLiBSdW4gL2RvY3RvciBmb3IgZGV0YWlscy5gXG4gIH1cblxuICByZXR1cm4geyB0eXBlOiAndGV4dCcsIHZhbHVlOiBtc2cgfVxufVxuXG5mdW5jdGlvbiBuKGNvdW50OiBudW1iZXIsIG5vdW46IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtjb3VudH0gJHtwbHVyYWwoY291bnQsIG5vdW4pfWBcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsU0FBUyxFQUFFLE9BQWUsTUFBc0I7QUFDOUMsU0FBTyxHQUFHLEtBQUssSUFBSSxPQUFPLE9BQU8sSUFBSSxDQUFDO0FBQ3hDO0FBNURBLElBU2E7QUFUYjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNLE9BQXlCLE9BQU8sT0FBTyxZQUFZO0FBYzlELFVBQ0UsUUFBUSx3QkFBd0IsTUFDL0IsWUFBWSxRQUFRLElBQUksa0JBQWtCLEtBQUssZ0JBQWdCLElBQ2hFO0FBQ0EsY0FBTSxVQUFVLE1BQU0sdUJBQXVCO0FBSTdDLFlBQUksU0FBUztBQUNYLGlDQUF1QixhQUFhLGNBQWM7QUFBQSxRQUNwRDtBQUFBLE1BQ0Y7QUFFQSxZQUFNLElBQUksTUFBTSxxQkFBcUIsUUFBUSxXQUFXO0FBRXhELFlBQU0sUUFBUTtBQUFBLFFBQ1osRUFBRSxFQUFFLGVBQWUsUUFBUTtBQUFBLFFBQzNCLEVBQUUsRUFBRSxlQUFlLE9BQU87QUFBQSxRQUMxQixFQUFFLEVBQUUsYUFBYSxPQUFPO0FBQUEsUUFDeEIsRUFBRSxFQUFFLFlBQVksTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSXRCLEVBQUUsRUFBRSxXQUFXLG1CQUFtQjtBQUFBLFFBQ2xDLEVBQUUsRUFBRSxXQUFXLG1CQUFtQjtBQUFBLE1BQ3BDO0FBQ0EsVUFBSSxNQUFNLGFBQWEsTUFBTSxLQUFLLFFBQUssQ0FBQztBQUV4QyxVQUFJLEVBQUUsY0FBYyxHQUFHO0FBQ3JCLGVBQU87QUFBQSxFQUFLLEVBQUUsRUFBRSxhQUFhLE9BQU8sQ0FBQztBQUFBLE1BQ3ZDO0FBRUEsYUFBTyxFQUFFLE1BQU0sUUFBUSxPQUFPLElBQUk7QUFBQSxJQUNwQztBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
