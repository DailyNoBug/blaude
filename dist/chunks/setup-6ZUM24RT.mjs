#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  buildComputerUseTools,
  init_ant_computer_use_mcp
} from "./chunk-ABRSTIS2.mjs";
import {
  getChicagoCoordinateMode,
  init_gates
} from "./chunk-3W743YKD.mjs";
import "./chunk-I4JSDM2A.mjs";
import {
  CLI_CU_CAPABILITIES,
  COMPUTER_USE_MCP_SERVER_NAME,
  init_common
} from "./chunk-H3V45RZC.mjs";
import {
  buildMcpToolName,
  init_mcpStringUtils
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
import {
  init_bundledMode,
  isInBundledMode
} from "./chunk-TR6BOGPZ.mjs";
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
import "./chunk-O5PZ3G6I.mjs";

// src/utils/computerUse/setup.ts
init_ant_computer_use_mcp();
init_mcpStringUtils();
init_bundledMode();
init_common();
init_gates();
import { join } from "path";
import { fileURLToPath } from "url";
function setupComputerUseMCP() {
  const allowedTools = buildComputerUseTools(
    CLI_CU_CAPABILITIES,
    getChicagoCoordinateMode()
  ).map((t) => buildMcpToolName(COMPUTER_USE_MCP_SERVER_NAME, t.name));
  const args = isInBundledMode() ? ["--computer-use-mcp"] : [
    join(fileURLToPath(import.meta.url), "..", "cli.js"),
    "--computer-use-mcp"
  ];
  return {
    mcpConfig: {
      [COMPUTER_USE_MCP_SERVER_NAME]: {
        type: "stdio",
        command: process.execPath,
        args,
        scope: "dynamic"
      }
    },
    allowedTools
  };
}
export {
  setupComputerUseMCP
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL2NvbXB1dGVyVXNlL3NldHVwLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBidWlsZENvbXB1dGVyVXNlVG9vbHMgfSBmcm9tICdAYW50L2NvbXB1dGVyLXVzZS1tY3AnXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBidWlsZE1jcFRvb2xOYW1lIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWNwL21jcFN0cmluZ1V0aWxzLmpzJ1xuaW1wb3J0IHR5cGUgeyBTY29wZWRNY3BTZXJ2ZXJDb25maWcgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tY3AvdHlwZXMuanMnXG5cbmltcG9ydCB7IGlzSW5CdW5kbGVkTW9kZSB9IGZyb20gJy4uL2J1bmRsZWRNb2RlLmpzJ1xuaW1wb3J0IHsgQ0xJX0NVX0NBUEFCSUxJVElFUywgQ09NUFVURVJfVVNFX01DUF9TRVJWRVJfTkFNRSB9IGZyb20gJy4vY29tbW9uLmpzJ1xuaW1wb3J0IHsgZ2V0Q2hpY2Fnb0Nvb3JkaW5hdGVNb2RlIH0gZnJvbSAnLi9nYXRlcy5qcydcblxuLyoqXG4gKiBCdWlsZCB0aGUgZHluYW1pYyBNQ1AgY29uZmlnICsgYWxsb3dlZCB0b29sIG5hbWVzLiBNaXJyb3Igb2ZcbiAqIGBzZXR1cENsYXVkZUluQ2hyb21lYC4gVGhlIGBtY3BfX2NvbXB1dGVyLXVzZV9fKmAgdG9vbHMgYXJlIGFkZGVkIHRvXG4gKiBgYWxsb3dlZFRvb2xzYCBzbyB0aGV5IGJ5cGFzcyB0aGUgbm9ybWFsIHBlcm1pc3Npb24gcHJvbXB0IFx1MjAxNCB0aGUgcGFja2FnZSdzXG4gKiBgcmVxdWVzdF9hY2Nlc3NgIGhhbmRsZXMgYXBwcm92YWwgZm9yIHRoZSB3aG9sZSBzZXNzaW9uLlxuICpcbiAqIFRoZSBNQ1AgbGF5ZXIgaXNuJ3QgY2VyZW1vbnk6IHRoZSBBUEkgYmFja2VuZCBkZXRlY3RzIGBtY3BfX2NvbXB1dGVyLXVzZV9fKmBcbiAqIHRvb2wgbmFtZXMgYW5kIGVtaXRzIGEgQ1UgYXZhaWxhYmlsaXR5IGhpbnQgaW50byB0aGUgc3lzdGVtIHByb21wdFxuICogKENPTVBVVEVSX1VTRV9NQ1BfQVZBSUxBQklMSVRZX0hJTlQgaW4gdGhlIGFudGhyb3BpYyByZXBvKS4gQnVpbHQtaW4gdG9vbHNcbiAqIHdpdGggZGlmZmVyZW50IG5hbWVzIHdvdWxkbid0IHRyaWdnZXIgaXQuIENvd29yayB1c2VzIHRoZSBzYW1lIG5hbWVzIGZvciB0aGVcbiAqIHNhbWUgcmVhc29uIChhcHBzL2Rlc2t0b3Avc3JjL21haW4vbG9jYWwtYWdlbnQtbW9kZS9zeXN0ZW1Qcm9tcHQudHM6MzE0KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldHVwQ29tcHV0ZXJVc2VNQ1AoKToge1xuICBtY3BDb25maWc6IFJlY29yZDxzdHJpbmcsIFNjb3BlZE1jcFNlcnZlckNvbmZpZz5cbiAgYWxsb3dlZFRvb2xzOiBzdHJpbmdbXVxufSB7XG4gIGNvbnN0IGFsbG93ZWRUb29scyA9IGJ1aWxkQ29tcHV0ZXJVc2VUb29scyhcbiAgICBDTElfQ1VfQ0FQQUJJTElUSUVTLFxuICAgIGdldENoaWNhZ29Db29yZGluYXRlTW9kZSgpLFxuICApLm1hcCh0ID0+IGJ1aWxkTWNwVG9vbE5hbWUoQ09NUFVURVJfVVNFX01DUF9TRVJWRVJfTkFNRSwgdC5uYW1lKSlcblxuICAvLyBjb21tYW5kL2FyZ3MgYXJlIG5ldmVyIHNwYXduZWQgXHUyMDE0IGNsaWVudC50cyBpbnRlcmNlcHRzIGJ5IG5hbWUgYW5kXG4gIC8vIHVzZXMgdGhlIGluLXByb2Nlc3Mgc2VydmVyLiBUaGUgY29uZmlnIGp1c3QgbmVlZHMgdG8gZXhpc3Qgd2l0aFxuICAvLyB0eXBlICdzdGRpbycgdG8gaGl0IHRoZSByaWdodCBicmFuY2guIE1pcnJvcnMgQ2hyb21lJ3Mgc2V0dXAuXG4gIGNvbnN0IGFyZ3MgPSBpc0luQnVuZGxlZE1vZGUoKVxuICAgID8gWyctLWNvbXB1dGVyLXVzZS1tY3AnXVxuICAgIDogW1xuICAgICAgICBqb2luKGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSwgJy4uJywgJ2NsaS5qcycpLFxuICAgICAgICAnLS1jb21wdXRlci11c2UtbWNwJyxcbiAgICAgIF1cblxuICByZXR1cm4ge1xuICAgIG1jcENvbmZpZzoge1xuICAgICAgW0NPTVBVVEVSX1VTRV9NQ1BfU0VSVkVSX05BTUVdOiB7XG4gICAgICAgIHR5cGU6ICdzdGRpbycsXG4gICAgICAgIGNvbW1hbmQ6IHByb2Nlc3MuZXhlY1BhdGgsXG4gICAgICAgIGFyZ3MsXG4gICAgICAgIHNjb3BlOiAnZHluYW1pYycsXG4gICAgICB9IGFzIGNvbnN0LFxuICAgIH0sXG4gICAgYWxsb3dlZFRvb2xzLFxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBUEEsU0FBUyxZQUFZO0FBQ3JCLFNBQVMscUJBQXFCO0FBb0J2QixTQUFTLHNCQUdkO0FBQ0EsUUFBTSxlQUFlO0FBQUEsSUFDbkI7QUFBQSxJQUNBLHlCQUF5QjtBQUFBLEVBQzNCLEVBQUUsSUFBSSxPQUFLLGlCQUFpQiw4QkFBOEIsRUFBRSxJQUFJLENBQUM7QUFLakUsUUFBTSxPQUFPLGdCQUFnQixJQUN6QixDQUFDLG9CQUFvQixJQUNyQjtBQUFBLElBQ0UsS0FBSyxjQUFjLFlBQVksR0FBRyxHQUFHLE1BQU0sUUFBUTtBQUFBLElBQ25EO0FBQUEsRUFDRjtBQUVKLFNBQU87QUFBQSxJQUNMLFdBQVc7QUFBQSxNQUNULENBQUMsNEJBQTRCLEdBQUc7QUFBQSxRQUM5QixNQUFNO0FBQUEsUUFDTixTQUFTLFFBQVE7QUFBQSxRQUNqQjtBQUFBLFFBQ0EsT0FBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFDRjsiLAogICJuYW1lcyI6IFtdCn0K
