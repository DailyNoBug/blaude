#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_browser,
  openBrowser
} from "./chunk-EL6ZMCGB.mjs";
import {
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

// src/commands/install-slack-app/install-slack-app.ts
async function call() {
  logEvent("tengu_install_slack_app_clicked", {});
  saveGlobalConfig((current) => ({
    ...current,
    slackAppInstallCount: (current.slackAppInstallCount ?? 0) + 1
  }));
  const success = await openBrowser(SLACK_APP_URL);
  if (success) {
    return {
      type: "text",
      value: "Opening Slack app installation page in browser\u2026"
    };
  } else {
    return {
      type: "text",
      value: `Couldn't open browser. Visit: ${SLACK_APP_URL}`
    };
  }
}
var SLACK_APP_URL;
var init_install_slack_app = __esm({
  "src/commands/install-slack-app/install-slack-app.ts"() {
    init_analytics();
    init_browser();
    init_config();
    SLACK_APP_URL = "https://slack.com/marketplace/A08SF47R6P4-claude";
  }
});
init_install_slack_app();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL2luc3RhbGwtc2xhY2stYXBwL2luc3RhbGwtc2xhY2stYXBwLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgdHlwZSB7IExvY2FsQ29tbWFuZFJlc3VsdCB9IGZyb20gJy4uLy4uL2NvbW1hbmRzLmpzJ1xuaW1wb3J0IHsgbG9nRXZlbnQgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbmFseXRpY3MvaW5kZXguanMnXG5pbXBvcnQgeyBvcGVuQnJvd3NlciB9IGZyb20gJy4uLy4uL3V0aWxzL2Jyb3dzZXIuanMnXG5pbXBvcnQgeyBzYXZlR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uZmlnLmpzJ1xuXG5jb25zdCBTTEFDS19BUFBfVVJMID0gJ2h0dHBzOi8vc2xhY2suY29tL21hcmtldHBsYWNlL0EwOFNGNDdSNlA0LWNsYXVkZSdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGwoKTogUHJvbWlzZTxMb2NhbENvbW1hbmRSZXN1bHQ+IHtcbiAgbG9nRXZlbnQoJ3Rlbmd1X2luc3RhbGxfc2xhY2tfYXBwX2NsaWNrZWQnLCB7fSlcblxuICAvLyBUcmFjayB0aGF0IHVzZXIgaGFzIGNsaWNrZWQgdG8gaW5zdGFsbFxuICBzYXZlR2xvYmFsQ29uZmlnKGN1cnJlbnQgPT4gKHtcbiAgICAuLi5jdXJyZW50LFxuICAgIHNsYWNrQXBwSW5zdGFsbENvdW50OiAoY3VycmVudC5zbGFja0FwcEluc3RhbGxDb3VudCA/PyAwKSArIDEsXG4gIH0pKVxuXG4gIGNvbnN0IHN1Y2Nlc3MgPSBhd2FpdCBvcGVuQnJvd3NlcihTTEFDS19BUFBfVVJMKVxuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHZhbHVlOiAnT3BlbmluZyBTbGFjayBhcHAgaW5zdGFsbGF0aW9uIHBhZ2UgaW4gYnJvd3Nlclx1MjAyNicsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB2YWx1ZTogYENvdWxkbid0IG9wZW4gYnJvd3Nlci4gVmlzaXQ6ICR7U0xBQ0tfQVBQX1VSTH1gLFxuICAgIH1cbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9BLGVBQXNCLE9BQW9DO0FBQ3hELFdBQVMsbUNBQW1DLENBQUMsQ0FBQztBQUc5QyxtQkFBaUIsY0FBWTtBQUFBLElBQzNCLEdBQUc7QUFBQSxJQUNILHVCQUF1QixRQUFRLHdCQUF3QixLQUFLO0FBQUEsRUFDOUQsRUFBRTtBQUVGLFFBQU0sVUFBVSxNQUFNLFlBQVksYUFBYTtBQUUvQyxNQUFJLFNBQVM7QUFDWCxXQUFPO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0YsT0FBTztBQUNMLFdBQU87QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE9BQU8saUNBQWlDLGFBQWE7QUFBQSxJQUN2RDtBQUFBLEVBQ0Y7QUFDRjtBQTdCQSxJQUtNO0FBTE47QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU0sZ0JBQWdCO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
