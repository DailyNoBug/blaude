#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  StatsProvider
} from "./chunk-PXBSMYU6.mjs";
import {
  onChangeAppState
} from "./chunk-LEJ7U2XV.mjs";
import {
  FpsMetricsProvider
} from "./chunk-FW3IIWEN.mjs";
import "./chunk-QSS53KEZ.mjs";
import {
  AppStateProvider,
  init_AppState
} from "./chunk-OTDPNGFK.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-PEMK4FQH.mjs";
import "./chunk-SQ6KOOZS.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-Y2PD6CVC.mjs";
import "./chunk-S5Z6SZDA.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-HO5F7BV3.mjs";
import "./chunk-M22WMPMZ.mjs";
import "./chunk-4WEGPCYF.mjs";
import "./chunk-Z4JLAMMU.mjs";
import "./chunk-FUHJGEFK.mjs";
import "./chunk-H474P6P2.mjs";
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
import "./chunk-4GJVIJWN.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-HUEORIXP.mjs";
import "./chunk-H6COQF52.mjs";
import "./chunk-IQJUSPBJ.mjs";
import "./chunk-R326WRGL.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import {
  c,
  init_react_compiler_runtime
} from "./chunk-HWTXKBLR.mjs";
import {
  init_react,
  react_default
} from "./chunk-TEJH3H3H.mjs";
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
import "./chunk-O5PZ3G6I.mjs";

// src/components/App.tsx
init_react_compiler_runtime();
init_react();
init_AppState();
function App(t0) {
  const $ = c(9);
  const {
    getFpsMetrics,
    stats,
    initialState,
    children
  } = t0;
  let t1;
  if ($[0] !== children || $[1] !== initialState) {
    t1 = /* @__PURE__ */ react_default.createElement(AppStateProvider, { initialState, onChangeAppState }, children);
    $[0] = children;
    $[1] = initialState;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  let t2;
  if ($[3] !== stats || $[4] !== t1) {
    t2 = /* @__PURE__ */ react_default.createElement(StatsProvider, { store: stats }, t1);
    $[3] = stats;
    $[4] = t1;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[6] !== getFpsMetrics || $[7] !== t2) {
    t3 = /* @__PURE__ */ react_default.createElement(FpsMetricsProvider, { getFpsMetrics }, t2);
    $[6] = getFpsMetrics;
    $[7] = t2;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  return t3;
}
export {
  App
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvQXBwLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRnBzTWV0cmljc1Byb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9mcHNNZXRyaWNzLmpzJ1xuaW1wb3J0IHsgU3RhdHNQcm92aWRlciwgdHlwZSBTdGF0c1N0b3JlIH0gZnJvbSAnLi4vY29udGV4dC9zdGF0cy5qcydcbmltcG9ydCB7IHR5cGUgQXBwU3RhdGUsIEFwcFN0YXRlUHJvdmlkZXIgfSBmcm9tICcuLi9zdGF0ZS9BcHBTdGF0ZS5qcydcbmltcG9ydCB7IG9uQ2hhbmdlQXBwU3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9vbkNoYW5nZUFwcFN0YXRlLmpzJ1xuaW1wb3J0IHR5cGUgeyBGcHNNZXRyaWNzIH0gZnJvbSAnLi4vdXRpbHMvZnBzVHJhY2tlci5qcydcblxudHlwZSBQcm9wcyA9IHtcbiAgZ2V0RnBzTWV0cmljczogKCkgPT4gRnBzTWV0cmljcyB8IHVuZGVmaW5lZFxuICBzdGF0cz86IFN0YXRzU3RvcmVcbiAgaW5pdGlhbFN0YXRlOiBBcHBTdGF0ZVxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG59XG5cbi8qKlxuICogVG9wLWxldmVsIHdyYXBwZXIgZm9yIGludGVyYWN0aXZlIHNlc3Npb25zLlxuICogUHJvdmlkZXMgRlBTIG1ldHJpY3MsIHN0YXRzIGNvbnRleHQsIGFuZCBhcHAgc3RhdGUgdG8gdGhlIGNvbXBvbmVudCB0cmVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gQXBwKHtcbiAgZ2V0RnBzTWV0cmljcyxcbiAgc3RhdHMsXG4gIGluaXRpYWxTdGF0ZSxcbiAgY2hpbGRyZW4sXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIHJldHVybiAoXG4gICAgPEZwc01ldHJpY3NQcm92aWRlciBnZXRGcHNNZXRyaWNzPXtnZXRGcHNNZXRyaWNzfT5cbiAgICAgIDxTdGF0c1Byb3ZpZGVyIHN0b3JlPXtzdGF0c30+XG4gICAgICAgIDxBcHBTdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgaW5pdGlhbFN0YXRlPXtpbml0aWFsU3RhdGV9XG4gICAgICAgICAgb25DaGFuZ2VBcHBTdGF0ZT17b25DaGFuZ2VBcHBTdGF0ZX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9BcHBTdGF0ZVByb3ZpZGVyPlxuICAgICAgPC9TdGF0c1Byb3ZpZGVyPlxuICAgIDwvRnBzTWV0cmljc1Byb3ZpZGVyPlxuICApXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFlTyxTQUFBQSxJQUFBQyxJQUFBO0FBQUEsUUFBQUMsSUFBQUMsRUFBQSxDQUFBO0FBQWEsUUFBQTtJQUFBQztJQUFBQztJQUFBQztJQUFBQztFQUFBLElBQUFOO0FBS1osTUFBQU87QUFBQSxNQUFBTixFQUFBLENBQUEsTUFBQUssWUFBQUwsRUFBQSxDQUFBLE1BQUFJLGNBQUE7QUFJQUUsU0FBQSw0Q0FBQyxvQkFDZUYsY0FDSUcsb0JBRWpCRixRQUNIO0FBQW1CTCxNQUFBLENBQUEsSUFBQUs7QUFBQUwsTUFBQSxDQUFBLElBQUFJO0FBQUFKLE1BQUEsQ0FBQSxJQUFBTTtFQUFBLE9BQUE7QUFBQUEsU0FBQU4sRUFBQSxDQUFBO0VBQUE7QUFBQSxNQUFBUTtBQUFBLE1BQUFSLEVBQUEsQ0FBQSxNQUFBRyxTQUFBSCxFQUFBLENBQUEsTUFBQU0sSUFBQTtBQU5yQkUsU0FBQSw0Q0FBQyxpQkFBcUJMLE9BQUFBLFNBQ3BCRyxFQU1GO0FBQWdCTixNQUFBLENBQUEsSUFBQUc7QUFBQUgsTUFBQSxDQUFBLElBQUFNO0FBQUFOLE1BQUEsQ0FBQSxJQUFBUTtFQUFBLE9BQUE7QUFBQUEsU0FBQVIsRUFBQSxDQUFBO0VBQUE7QUFBQSxNQUFBUztBQUFBLE1BQUFULEVBQUEsQ0FBQSxNQUFBRSxpQkFBQUYsRUFBQSxDQUFBLE1BQUFRLElBQUE7QUFSbEJDLFNBQUEsNENBQUMsc0JBQWtDUCxpQkFDakNNLEVBUUY7QUFBcUJSLE1BQUEsQ0FBQSxJQUFBRTtBQUFBRixNQUFBLENBQUEsSUFBQVE7QUFBQVIsTUFBQSxDQUFBLElBQUFTO0VBQUEsT0FBQTtBQUFBQSxTQUFBVCxFQUFBLENBQUE7RUFBQTtBQUFBLFNBVHJCUztBQVNxQjsiLAogICJuYW1lcyI6IFsiQXBwIiwgInQwIiwgIiQiLCAiX2MiLCAiZ2V0RnBzTWV0cmljcyIsICJzdGF0cyIsICJpbml0aWFsU3RhdGUiLCAiY2hpbGRyZW4iLCAidDEiLCAib25DaGFuZ2VBcHBTdGF0ZSIsICJ0MiIsICJ0MyJdCn0K
