#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  currentLimits,
  formatTotalCost,
  init_claudeAiLimits,
  init_cost_tracker
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
import {
  init_auth,
  isClaudeAISubscriber
} from "./chunk-NKGQGSP5.mjs";
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

// src/commands/cost/cost.ts
var call;
var init_cost = __esm({
  "src/commands/cost/cost.ts"() {
    init_cost_tracker();
    init_claudeAiLimits();
    init_auth();
    call = async () => {
      if (isClaudeAISubscriber()) {
        let value;
        if (currentLimits.isUsingOverage) {
          value = "You are currently using your overages to power your Blaude usage. We will automatically switch you back to your subscription rate limits when they reset";
        } else {
          value = "You are currently using your subscription to power your Blaude usage";
        }
        if (process.env.USER_TYPE === "ant") {
          value += `

[ANT-ONLY] Showing cost anyway:
 ${formatTotalCost()}`;
        }
        return { type: "text", value };
      }
      return { type: "text", value: formatTotalCost() };
    };
  }
});
init_cost();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL2Nvc3QvY29zdC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZm9ybWF0VG90YWxDb3N0IH0gZnJvbSAnLi4vLi4vY29zdC10cmFja2VyLmpzJ1xuaW1wb3J0IHsgY3VycmVudExpbWl0cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NsYXVkZUFpTGltaXRzLmpzJ1xuaW1wb3J0IHR5cGUgeyBMb2NhbENvbW1hbmRDYWxsIH0gZnJvbSAnLi4vLi4vdHlwZXMvY29tbWFuZC5qcydcbmltcG9ydCB7IGlzQ2xhdWRlQUlTdWJzY3JpYmVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXV0aC5qcydcblxuZXhwb3J0IGNvbnN0IGNhbGw6IExvY2FsQ29tbWFuZENhbGwgPSBhc3luYyAoKSA9PiB7XG4gIGlmIChpc0NsYXVkZUFJU3Vic2NyaWJlcigpKSB7XG4gICAgbGV0IHZhbHVlOiBzdHJpbmdcblxuICAgIGlmIChjdXJyZW50TGltaXRzLmlzVXNpbmdPdmVyYWdlKSB7XG4gICAgICB2YWx1ZSA9XG4gICAgICAgICdZb3UgYXJlIGN1cnJlbnRseSB1c2luZyB5b3VyIG92ZXJhZ2VzIHRvIHBvd2VyIHlvdXIgQmxhdWRlIHVzYWdlLiBXZSB3aWxsIGF1dG9tYXRpY2FsbHkgc3dpdGNoIHlvdSBiYWNrIHRvIHlvdXIgc3Vic2NyaXB0aW9uIHJhdGUgbGltaXRzIHdoZW4gdGhleSByZXNldCdcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPVxuICAgICAgICAnWW91IGFyZSBjdXJyZW50bHkgdXNpbmcgeW91ciBzdWJzY3JpcHRpb24gdG8gcG93ZXIgeW91ciBCbGF1ZGUgdXNhZ2UnXG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCcpIHtcbiAgICAgIHZhbHVlICs9IGBcXG5cXG5bQU5ULU9OTFldIFNob3dpbmcgY29zdCBhbnl3YXk6XFxuICR7Zm9ybWF0VG90YWxDb3N0KCl9YFxuICAgIH1cbiAgICByZXR1cm4geyB0eXBlOiAndGV4dCcsIHZhbHVlIH1cbiAgfVxuICByZXR1cm4geyB0eXBlOiAndGV4dCcsIHZhbHVlOiBmb3JtYXRUb3RhbENvc3QoKSB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFLYTtBQUxiO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFTyxJQUFNLE9BQXlCLFlBQVk7QUFDaEQsVUFBSSxxQkFBcUIsR0FBRztBQUMxQixZQUFJO0FBRUosWUFBSSxjQUFjLGdCQUFnQjtBQUNoQyxrQkFDRTtBQUFBLFFBQ0osT0FBTztBQUNMLGtCQUNFO0FBQUEsUUFDSjtBQUVBLFlBQUksUUFBUSxJQUFJLGNBQWMsT0FBTztBQUNuQyxtQkFBUztBQUFBO0FBQUE7QUFBQSxHQUF5QyxnQkFBZ0IsQ0FBQztBQUFBLFFBQ3JFO0FBQ0EsZUFBTyxFQUFFLE1BQU0sUUFBUSxNQUFNO0FBQUEsTUFDL0I7QUFDQSxhQUFPLEVBQUUsTUFBTSxRQUFRLE9BQU8sZ0JBQWdCLEVBQUU7QUFBQSxJQUNsRDtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
