#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  currentLimits,
  formatTotalCost,
  init_claudeAiLimits,
  init_cost_tracker
} from "./chunk-BQ2W5UUK.mjs";
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
import "./chunk-XTFZIHQR.mjs";
import "./chunk-X6KULBXG.mjs";
import "./chunk-AKNFPKUI.mjs";
import "./chunk-EL6ZMCGB.mjs";
import "./chunk-ALBMKMIQ.mjs";
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
  init_auth,
  isClaudeAISubscriber
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
