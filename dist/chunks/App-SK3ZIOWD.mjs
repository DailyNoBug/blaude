#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  StatsProvider
} from "./chunk-KZQPD2PD.mjs";
import {
  onChangeAppState
} from "./chunk-NTM4GZMK.mjs";
import {
  FpsMetricsProvider
} from "./chunk-DZ63Z5NC.mjs";
import "./chunk-XTD6J22W.mjs";
import {
  AppStateProvider,
  init_AppState
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
import {
  c,
  init_react_compiler_runtime
} from "./chunk-ZFJCSCYD.mjs";
import {
  init_react,
  react_default
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-H3V45RZC.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import "./chunk-JQ55XPLZ.mjs";
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
