#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_thinkback,
  playAnimation
} from "./chunk-EF5OYCNT.mjs";
import "./chunk-KHM4QVLJ.mjs";
import "./chunk-QUU2KZ75.mjs";
import {
  OFFICIAL_MARKETPLACE_NAME,
  init_installedPluginsManager,
  init_officialMarketplace,
  loadInstalledPluginsV2
} from "./chunk-PWGYNHQM.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-2ONWBUQT.mjs";
import "./chunk-SQ6KOOZS.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-Y2PD6CVC.mjs";
import "./chunk-TBOD624P.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-SY3WEZL4.mjs";
import "./chunk-M22WMPMZ.mjs";
import "./chunk-4WEGPCYF.mjs";
import "./chunk-Z4JLAMMU.mjs";
import "./chunk-FUHJGEFK.mjs";
import "./chunk-2MSZ62QE.mjs";
import "./chunk-SEJU7JU7.mjs";
import "./chunk-ABRSTIS2.mjs";
import "./chunk-L22EUB4Z.mjs";
import "./chunk-NE3WJ556.mjs";
import "./chunk-U3YG33GN.mjs";
import "./chunk-I4JSDM2A.mjs";
import "./chunk-KNCFJEES.mjs";
import "./chunk-R2NMUWG6.mjs";
import "./chunk-XTFZIHQR.mjs";
import "./chunk-X6KULBXG.mjs";
import "./chunk-ORS2TTME.mjs";
import "./chunk-IAEMXMG4.mjs";
import "./chunk-L57KLZUF.mjs";
import "./chunk-J7TDGLE4.mjs";
import "./chunk-HUHT3U2I.mjs";
import "./chunk-X7OJ6FBK.mjs";
import "./chunk-5MQ7MACZ.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-HUEORIXP.mjs";
import "./chunk-H6COQF52.mjs";
import "./chunk-IQJUSPBJ.mjs";
import "./chunk-R326WRGL.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import "./chunk-KMJXN3MK.mjs";
import "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import "./chunk-NKGQGSP5.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-UIIDPH35.mjs";
import "./chunk-DNXEQXI7.mjs";
import "./chunk-ZPEBVZEB.mjs";
import "./chunk-DQ5JTCOA.mjs";
import "./chunk-HGPSKCV5.mjs";
import "./chunk-GC6TKYZ3.mjs";
import "./chunk-GHLJY6GK.mjs";
import "./chunk-PPND3F3V.mjs";
import "./chunk-BKRSSLV2.mjs";
import "./chunk-AHENZQLB.mjs";
import "./chunk-HQK4A2IB.mjs";
import "./chunk-SVUOOEVR.mjs";
import "./chunk-XFYUWZYI.mjs";
import "./chunk-JOMSGAK7.mjs";
import "./chunk-3PS62SCS.mjs";
import "./chunk-SFCRD75C.mjs";
import "./chunk-QFFW7MQ2.mjs";
import "./chunk-3AEW3KDQ.mjs";
import "./chunk-OGGCTXYU.mjs";
import "./chunk-MDXHK5AD.mjs";
import "./chunk-SETG7O3F.mjs";
import "./chunk-J6MJ6UVK.mjs";
import "./chunk-PKIVPZJM.mjs";
import "./chunk-JXCG2JDO.mjs";
import "./chunk-N62V5C2K.mjs";
import "./chunk-7SC6PTLR.mjs";
import "./chunk-NT7W7YWD.mjs";
import "./chunk-4S33EKPF.mjs";
import "./chunk-VNIROYYL.mjs";
import "./chunk-TZFTPSMG.mjs";
import "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-IPMELYAB.mjs";
import "./chunk-F5ODCUJD.mjs";
import "./chunk-ZAYB3WZV.mjs";
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

// src/commands/thinkback-play/thinkback-play.ts
import { join } from "path";
function getPluginId() {
  const marketplaceName = process.env.USER_TYPE === "ant" ? INTERNAL_MARKETPLACE_NAME : OFFICIAL_MARKETPLACE_NAME;
  return `thinkback@${marketplaceName}`;
}
async function call() {
  const v2Data = loadInstalledPluginsV2();
  const pluginId = getPluginId();
  const installations = v2Data.plugins[pluginId];
  if (!installations || installations.length === 0) {
    return {
      type: "text",
      value: "Thinkback plugin not installed. Run /think-back first to install it."
    };
  }
  const firstInstall = installations[0];
  if (!firstInstall?.installPath) {
    return {
      type: "text",
      value: "Thinkback plugin installation path not found."
    };
  }
  const skillDir = join(firstInstall.installPath, "skills", SKILL_NAME);
  const result = await playAnimation(skillDir);
  return { type: "text", value: result.message };
}
var INTERNAL_MARKETPLACE_NAME, SKILL_NAME;
var init_thinkback_play = __esm({
  "src/commands/thinkback-play/thinkback-play.ts"() {
    init_installedPluginsManager();
    init_officialMarketplace();
    init_thinkback();
    INTERNAL_MARKETPLACE_NAME = "claude-code-marketplace";
    SKILL_NAME = "thinkback";
  }
});
init_thinkback_play();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL3RoaW5rYmFjay1wbGF5L3RoaW5rYmFjay1wbGF5LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCdcbmltcG9ydCB0eXBlIHsgTG9jYWxDb21tYW5kUmVzdWx0IH0gZnJvbSAnLi4vLi4vY29tbWFuZHMuanMnXG5pbXBvcnQgeyBsb2FkSW5zdGFsbGVkUGx1Z2luc1YyIH0gZnJvbSAnLi4vLi4vdXRpbHMvcGx1Z2lucy9pbnN0YWxsZWRQbHVnaW5zTWFuYWdlci5qcydcbmltcG9ydCB7IE9GRklDSUFMX01BUktFVFBMQUNFX05BTUUgfSBmcm9tICcuLi8uLi91dGlscy9wbHVnaW5zL29mZmljaWFsTWFya2V0cGxhY2UuanMnXG5pbXBvcnQgeyBwbGF5QW5pbWF0aW9uIH0gZnJvbSAnLi4vdGhpbmtiYWNrL3RoaW5rYmFjay5qcydcblxuY29uc3QgSU5URVJOQUxfTUFSS0VUUExBQ0VfTkFNRSA9ICdjbGF1ZGUtY29kZS1tYXJrZXRwbGFjZSdcbmNvbnN0IFNLSUxMX05BTUUgPSAndGhpbmtiYWNrJ1xuXG5mdW5jdGlvbiBnZXRQbHVnaW5JZCgpOiBzdHJpbmcge1xuICBjb25zdCBtYXJrZXRwbGFjZU5hbWUgPVxuICAgIHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCdcbiAgICAgID8gSU5URVJOQUxfTUFSS0VUUExBQ0VfTkFNRVxuICAgICAgOiBPRkZJQ0lBTF9NQVJLRVRQTEFDRV9OQU1FXG4gIHJldHVybiBgdGhpbmtiYWNrQCR7bWFya2V0cGxhY2VOYW1lfWBcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGwoKTogUHJvbWlzZTxMb2NhbENvbW1hbmRSZXN1bHQ+IHtcbiAgLy8gR2V0IHNraWxsIGRpcmVjdG9yeSBmcm9tIGluc3RhbGxlZCBwbHVnaW5zIGNvbmZpZ1xuICBjb25zdCB2MkRhdGEgPSBsb2FkSW5zdGFsbGVkUGx1Z2luc1YyKClcbiAgY29uc3QgcGx1Z2luSWQgPSBnZXRQbHVnaW5JZCgpXG4gIGNvbnN0IGluc3RhbGxhdGlvbnMgPSB2MkRhdGEucGx1Z2luc1twbHVnaW5JZF1cblxuICBpZiAoIWluc3RhbGxhdGlvbnMgfHwgaW5zdGFsbGF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ3RleHQnIGFzIGNvbnN0LFxuICAgICAgdmFsdWU6XG4gICAgICAgICdUaGlua2JhY2sgcGx1Z2luIG5vdCBpbnN0YWxsZWQuIFJ1biAvdGhpbmstYmFjayBmaXJzdCB0byBpbnN0YWxsIGl0LicsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZmlyc3RJbnN0YWxsID0gaW5zdGFsbGF0aW9uc1swXVxuICBpZiAoIWZpcnN0SW5zdGFsbD8uaW5zdGFsbFBhdGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ3RleHQnIGFzIGNvbnN0LFxuICAgICAgdmFsdWU6ICdUaGlua2JhY2sgcGx1Z2luIGluc3RhbGxhdGlvbiBwYXRoIG5vdCBmb3VuZC4nLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNraWxsRGlyID0gam9pbihmaXJzdEluc3RhbGwuaW5zdGFsbFBhdGgsICdza2lsbHMnLCBTS0lMTF9OQU1FKVxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBwbGF5QW5pbWF0aW9uKHNraWxsRGlyKVxuICByZXR1cm4geyB0eXBlOiAndGV4dCcgYXMgY29uc3QsIHZhbHVlOiByZXN1bHQubWVzc2FnZSB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyxZQUFZO0FBU3JCLFNBQVMsY0FBc0I7QUFDN0IsUUFBTSxrQkFDSixRQUFRLElBQUksY0FBYyxRQUN0Qiw0QkFDQTtBQUNOLFNBQU8sYUFBYSxlQUFlO0FBQ3JDO0FBRUEsZUFBc0IsT0FBb0M7QUFFeEQsUUFBTSxTQUFTLHVCQUF1QjtBQUN0QyxRQUFNLFdBQVcsWUFBWTtBQUM3QixRQUFNLGdCQUFnQixPQUFPLFFBQVEsUUFBUTtBQUU3QyxNQUFJLENBQUMsaUJBQWlCLGNBQWMsV0FBVyxHQUFHO0FBQ2hELFdBQU87QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE9BQ0U7QUFBQSxJQUNKO0FBQUEsRUFDRjtBQUVBLFFBQU0sZUFBZSxjQUFjLENBQUM7QUFDcEMsTUFBSSxDQUFDLGNBQWMsYUFBYTtBQUM5QixXQUFPO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFFQSxRQUFNLFdBQVcsS0FBSyxhQUFhLGFBQWEsVUFBVSxVQUFVO0FBQ3BFLFFBQU0sU0FBUyxNQUFNLGNBQWMsUUFBUTtBQUMzQyxTQUFPLEVBQUUsTUFBTSxRQUFpQixPQUFPLE9BQU8sUUFBUTtBQUN4RDtBQTFDQSxJQU1NLDJCQUNBO0FBUE47QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU0sNEJBQTRCO0FBQ2xDLElBQU0sYUFBYTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
