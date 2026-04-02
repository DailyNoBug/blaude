#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  ExitFlow,
  init_ExitFlow
} from "./chunk-B7DM3FLU.mjs";
import {
  getCurrentWorktreeSession,
  gracefulShutdown,
  init_concurrentSessions,
  init_gracefulShutdown,
  init_worktree,
  isBgSession
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
import {
  createElement,
  init_react
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-H3V45RZC.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  init_sample,
  sample_default
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
import "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/commands/exit/exit.tsx
import { spawnSync } from "child_process";
function getRandomGoodbyeMessage() {
  return sample_default(GOODBYE_MESSAGES) ?? "Goodbye!";
}
async function call(onDone) {
  if (feature("BG_SESSIONS") && isBgSession()) {
    onDone();
    spawnSync("tmux", ["detach-client"], {
      stdio: "ignore"
    });
    return null;
  }
  const showWorktree = getCurrentWorktreeSession() !== null;
  if (showWorktree) {
    return /* @__PURE__ */ createElement(ExitFlow, { showWorktree, onDone, onCancel: () => onDone() });
  }
  onDone(getRandomGoodbyeMessage());
  await gracefulShutdown(0, "prompt_input_exit");
  return null;
}
var GOODBYE_MESSAGES;
var init_exit = __esm({
  "src/commands/exit/exit.tsx"() {
    init_bun_bundle();
    init_sample();
    init_react();
    init_ExitFlow();
    init_concurrentSessions();
    init_gracefulShutdown();
    init_worktree();
    GOODBYE_MESSAGES = ["Goodbye!", "See ya!", "Bye!", "Catch you later!"];
  }
});
init_exit();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL2V4aXQvZXhpdC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGZlYXR1cmUgfSBmcm9tICdidW46YnVuZGxlJ1xuaW1wb3J0IHsgc3Bhd25TeW5jIH0gZnJvbSAnY2hpbGRfcHJvY2VzcydcbmltcG9ydCBzYW1wbGUgZnJvbSAnbG9kYXNoLWVzL3NhbXBsZS5qcydcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRXhpdEZsb3cgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0V4aXRGbG93LmpzJ1xuaW1wb3J0IHR5cGUgeyBMb2NhbEpTWENvbW1hbmRPbkRvbmUgfSBmcm9tICcuLi8uLi90eXBlcy9jb21tYW5kLmpzJ1xuaW1wb3J0IHsgaXNCZ1Nlc3Npb24gfSBmcm9tICcuLi8uLi91dGlscy9jb25jdXJyZW50U2Vzc2lvbnMuanMnXG5pbXBvcnQgeyBncmFjZWZ1bFNodXRkb3duIH0gZnJvbSAnLi4vLi4vdXRpbHMvZ3JhY2VmdWxTaHV0ZG93bi5qcydcbmltcG9ydCB7IGdldEN1cnJlbnRXb3JrdHJlZVNlc3Npb24gfSBmcm9tICcuLi8uLi91dGlscy93b3JrdHJlZS5qcydcblxuY29uc3QgR09PREJZRV9NRVNTQUdFUyA9IFsnR29vZGJ5ZSEnLCAnU2VlIHlhIScsICdCeWUhJywgJ0NhdGNoIHlvdSBsYXRlciEnXVxuXG5mdW5jdGlvbiBnZXRSYW5kb21Hb29kYnllTWVzc2FnZSgpOiBzdHJpbmcge1xuICByZXR1cm4gc2FtcGxlKEdPT0RCWUVfTUVTU0FHRVMpID8/ICdHb29kYnllISdcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGwoXG4gIG9uRG9uZTogTG9jYWxKU1hDb21tYW5kT25Eb25lLFxuKTogUHJvbWlzZTxSZWFjdC5SZWFjdE5vZGU+IHtcbiAgLy8gSW5zaWRlIGEgYGNsYXVkZSAtLWJnYCB0bXV4IHNlc3Npb246IGRldGFjaCBpbnN0ZWFkIG9mIGtpbGwuIFRoZSBSRVBMXG4gIC8vIGtlZXBzIHJ1bm5pbmc7IGBjbGF1ZGUgYXR0YWNoYCBjYW4gcmVjb25uZWN0LiBDb3ZlcnMgL2V4aXQsIC9xdWl0LFxuICAvLyBjdHJsK2MsIGN0cmwrZCDigJQgYWxsIGZ1bm5lbCB0aHJvdWdoIGhlcmUgdmlhIFJFUEwncyBoYW5kbGVFeGl0LlxuICBpZiAoZmVhdHVyZSgnQkdfU0VTU0lPTlMnKSAmJiBpc0JnU2Vzc2lvbigpKSB7XG4gICAgb25Eb25lKClcbiAgICBzcGF3blN5bmMoJ3RtdXgnLCBbJ2RldGFjaC1jbGllbnQnXSwgeyBzdGRpbzogJ2lnbm9yZScgfSlcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3Qgc2hvd1dvcmt0cmVlID0gZ2V0Q3VycmVudFdvcmt0cmVlU2Vzc2lvbigpICE9PSBudWxsXG5cbiAgaWYgKHNob3dXb3JrdHJlZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8RXhpdEZsb3dcbiAgICAgICAgc2hvd1dvcmt0cmVlPXtzaG93V29ya3RyZWV9XG4gICAgICAgIG9uRG9uZT17b25Eb25lfVxuICAgICAgICBvbkNhbmNlbD17KCkgPT4gb25Eb25lKCl9XG4gICAgICAvPlxuICAgIClcbiAgfVxuXG4gIG9uRG9uZShnZXRSYW5kb21Hb29kYnllTWVzc2FnZSgpKVxuICBhd2FpdCBncmFjZWZ1bFNodXRkb3duKDAsICdwcm9tcHRfaW5wdXRfZXhpdCcpXG4gIHJldHVybiBudWxsXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsU0FBU0EsaUJBQWlCO0FBVzFCLFNBQVNDLDBCQUFrQztBQUN6QyxTQUFPQyxlQUFPQyxnQkFBZ0IsS0FBSztBQUNyQztBQUVBLGVBQXNCQyxLQUNwQkMsUUFDMEI7QUFJMUIsTUFBSUMsUUFBUSxhQUFhLEtBQUtDLFlBQVksR0FBRztBQUMzQ0YsV0FBTztBQUNQTCxjQUFVLFFBQVEsQ0FBQyxlQUFlLEdBQUc7TUFBRVEsT0FBTztJQUFTLENBQUM7QUFDeEQsV0FBTztFQUNUO0FBRUEsUUFBTUMsZUFBZUMsMEJBQTBCLE1BQU07QUFFckQsTUFBSUQsY0FBYztBQUNoQixXQUNFLDhCQUFDLFlBQ0MsY0FDQSxRQUNBLFVBQVUsTUFBTUosT0FBTyxHQUFFO0VBRy9CO0FBRUFBLFNBQU9KLHdCQUF3QixDQUFDO0FBQ2hDLFFBQU1VLGlCQUFpQixHQUFHLG1CQUFtQjtBQUM3QyxTQUFPO0FBQ1Q7QUEzQ0EsSUFVTVI7QUFWTjs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsbUJBQW1CLENBQUMsWUFBWSxXQUFXLFFBQVEsa0JBQWtCOzs7IiwKICAibmFtZXMiOiBbInNwYXduU3luYyIsICJnZXRSYW5kb21Hb29kYnllTWVzc2FnZSIsICJzYW1wbGUiLCAiR09PREJZRV9NRVNTQUdFUyIsICJjYWxsIiwgIm9uRG9uZSIsICJmZWF0dXJlIiwgImlzQmdTZXNzaW9uIiwgInN0ZGlvIiwgInNob3dXb3JrdHJlZSIsICJnZXRDdXJyZW50V29ya3RyZWVTZXNzaW9uIiwgImdyYWNlZnVsU2h1dGRvd24iXQp9Cg==
