#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime
} from "./chunk-IVRGECFY.mjs";
import {
  init_react,
  react_default
} from "./chunk-TEJH3H3H.mjs";
import {
  figures_default,
  init_figures
} from "./chunk-ZAYB3WZV.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/components/design-system/StatusIcon.tsx
function StatusIcon(t0) {
  const $ = c(5);
  const {
    status,
    withSpace: t1
  } = t0;
  const withSpace = t1 === void 0 ? false : t1;
  const config = STATUS_CONFIG[status];
  const t2 = !config.color;
  const t3 = withSpace && " ";
  let t4;
  if ($[0] !== config.color || $[1] !== config.icon || $[2] !== t2 || $[3] !== t3) {
    t4 = /* @__PURE__ */ react_default.createElement(ThemedText, { color: config.color, dimColor: t2 }, config.icon, t3);
    $[0] = config.color;
    $[1] = config.icon;
    $[2] = t2;
    $[3] = t3;
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  return t4;
}
var STATUS_CONFIG;
var init_StatusIcon = __esm({
  "src/components/design-system/StatusIcon.tsx"() {
    init_react_compiler_runtime();
    init_figures();
    init_react();
    init_ink();
    STATUS_CONFIG = {
      success: {
        icon: figures_default.tick,
        color: "success"
      },
      error: {
        icon: figures_default.cross,
        color: "error"
      },
      warning: {
        icon: figures_default.warning,
        color: "warning"
      },
      info: {
        icon: figures_default.info,
        color: "suggestion"
      },
      pending: {
        icon: figures_default.circle,
        color: void 0
      },
      loading: {
        icon: "\u2026",
        color: void 0
      }
    };
  }
});

export {
  StatusIcon,
  init_StatusIcon
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvZGVzaWduLXN5c3RlbS9TdGF0dXNJY29uLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IGZpZ3VyZXMgZnJvbSAnZmlndXJlcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi9pbmsuanMnXG5cbnR5cGUgU3RhdHVzID0gJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyB8ICd3YXJuaW5nJyB8ICdpbmZvJyB8ICdwZW5kaW5nJyB8ICdsb2FkaW5nJ1xuXG50eXBlIFByb3BzID0ge1xuICAvKipcbiAgICogVGhlIHN0YXR1cyB0byBkaXNwbGF5LiBEZXRlcm1pbmVzIGJvdGggdGhlIGljb24gYW5kIGNvbG9yLlxuICAgKlxuICAgKiAtIGBzdWNjZXNzYDogR3JlZW4gY2hlY2ttYXJrICjinJMpXG4gICAqIC0gYGVycm9yYDogUmVkIGNyb3NzICjinJcpXG4gICAqIC0gYHdhcm5pbmdgOiBZZWxsb3cgd2FybmluZyBzeW1ib2wgKOKaoClcbiAgICogLSBgaW5mb2A6IEJsdWUgaW5mbyBzeW1ib2wgKOKEuSlcbiAgICogLSBgcGVuZGluZ2A6IERpbW1lZCBjaXJjbGUgKOKXiylcbiAgICogLSBgbG9hZGluZ2A6IERpbW1lZCBlbGxpcHNpcyAo4oCmKVxuICAgKi9cbiAgc3RhdHVzOiBTdGF0dXNcbiAgLyoqXG4gICAqIEluY2x1ZGUgYSB0cmFpbGluZyBzcGFjZSBhZnRlciB0aGUgaWNvbi4gVXNlZnVsIHdoZW4gZm9sbG93ZWQgYnkgdGV4dC5cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIHdpdGhTcGFjZT86IGJvb2xlYW5cbn1cblxuY29uc3QgU1RBVFVTX0NPTkZJRzogUmVjb3JkPFxuICBTdGF0dXMsXG4gIHtcbiAgICBpY29uOiBzdHJpbmdcbiAgICBjb2xvcjogJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyB8ICd3YXJuaW5nJyB8ICdzdWdnZXN0aW9uJyB8IHVuZGVmaW5lZFxuICB9XG4+ID0ge1xuICBzdWNjZXNzOiB7IGljb246IGZpZ3VyZXMudGljaywgY29sb3I6ICdzdWNjZXNzJyB9LFxuICBlcnJvcjogeyBpY29uOiBmaWd1cmVzLmNyb3NzLCBjb2xvcjogJ2Vycm9yJyB9LFxuICB3YXJuaW5nOiB7IGljb246IGZpZ3VyZXMud2FybmluZywgY29sb3I6ICd3YXJuaW5nJyB9LFxuICBpbmZvOiB7IGljb246IGZpZ3VyZXMuaW5mbywgY29sb3I6ICdzdWdnZXN0aW9uJyB9LFxuICBwZW5kaW5nOiB7IGljb246IGZpZ3VyZXMuY2lyY2xlLCBjb2xvcjogdW5kZWZpbmVkIH0sXG4gIGxvYWRpbmc6IHsgaWNvbjogJ+KApicsIGNvbG9yOiB1bmRlZmluZWQgfSxcbn1cblxuLyoqXG4gKiBSZW5kZXJzIGEgc3RhdHVzIGluZGljYXRvciBpY29uIHdpdGggYXBwcm9wcmlhdGUgY29sb3IuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1Y2Nlc3MgaW5kaWNhdG9yXG4gKiA8U3RhdHVzSWNvbiBzdGF0dXM9XCJzdWNjZXNzXCIgLz5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXJyb3Igd2l0aCB0cmFpbGluZyBzcGFjZSBmb3IgdGV4dFxuICogPFRleHQ+PFN0YXR1c0ljb24gc3RhdHVzPVwiZXJyb3JcIiB3aXRoU3BhY2UgLz5GYWlsZWQgdG8gY29ubmVjdDwvVGV4dD5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3RhdHVzIGxpbmUgcGF0dGVyblxuICogPFRleHQ+XG4gKiAgIDxTdGF0dXNJY29uIHN0YXR1cz1cInBlbmRpbmdcIiB3aXRoU3BhY2UgLz5cbiAqICAgV2FpdGluZyBmb3IgcmVzcG9uc2VcbiAqIDwvVGV4dD5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFN0YXR1c0ljb24oe1xuICBzdGF0dXMsXG4gIHdpdGhTcGFjZSA9IGZhbHNlLFxufTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBjb25maWcgPSBTVEFUVVNfQ09ORklHW3N0YXR1c11cblxuICByZXR1cm4gKFxuICAgIDxUZXh0IGNvbG9yPXtjb25maWcuY29sb3J9IGRpbUNvbG9yPXshY29uZmlnLmNvbG9yfT5cbiAgICAgIHtjb25maWcuaWNvbn1cbiAgICAgIHt3aXRoU3BhY2UgJiYgJyAnfVxuICAgIDwvVGV4dD5cbiAgKVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBETyxTQUFBQSxXQUFBQyxJQUFBO0FBQUEsUUFBQUMsSUFBQUMsRUFBQSxDQUFBO0FBQW9CLFFBQUE7SUFBQUM7SUFBQUMsV0FBQUM7RUFBQSxJQUFBTDtBQUV6QixRQUFBSSxZQUFBQyxPQUFBQyxTQUFBLFFBQUFEO0FBRUEsUUFBQUUsU0FBZUMsY0FBY0wsTUFBTTtBQUdJLFFBQUFNLEtBQUEsQ0FBQ0YsT0FBTUc7QUFFekMsUUFBQUMsS0FBQVAsYUFBQTtBQUFnQixNQUFBUTtBQUFBLE1BQUFYLEVBQUEsQ0FBQSxNQUFBTSxPQUFBRyxTQUFBVCxFQUFBLENBQUEsTUFBQU0sT0FBQU0sUUFBQVosRUFBQSxDQUFBLE1BQUFRLE1BQUFSLEVBQUEsQ0FBQSxNQUFBVSxJQUFBO0FBRm5CQyxTQUFBLDRDQUFDLGNBQVksT0FBQUwsT0FBTUcsT0FBa0IsVUFBQUQsTUFDbENGLE9BQU1NLE1BQ05GLEVBQ0g7QUFBT1YsTUFBQSxDQUFBLElBQUFNLE9BQUFHO0FBQUFULE1BQUEsQ0FBQSxJQUFBTSxPQUFBTTtBQUFBWixNQUFBLENBQUEsSUFBQVE7QUFBQVIsTUFBQSxDQUFBLElBQUFVO0FBQUFWLE1BQUEsQ0FBQSxJQUFBVztFQUFBLE9BQUE7QUFBQUEsU0FBQVgsRUFBQSxDQUFBO0VBQUE7QUFBQSxTQUhQVztBQUdPO0lBM0NMSjs7OztBQXpCTjtBQUNBO0FBQ0E7QUF1QkEsSUFBTUEsZ0JBTUY7TUFDRk0sU0FBUztRQUFFRCxNQUFNRSxnQkFBUUM7UUFBTU4sT0FBTztNQUFVO01BQ2hETyxPQUFPO1FBQUVKLE1BQU1FLGdCQUFRRztRQUFPUixPQUFPO01BQVE7TUFDN0NTLFNBQVM7UUFBRU4sTUFBTUUsZ0JBQVFJO1FBQVNULE9BQU87TUFBVTtNQUNuRFUsTUFBTTtRQUFFUCxNQUFNRSxnQkFBUUs7UUFBTVYsT0FBTztNQUFhO01BQ2hEVyxTQUFTO1FBQUVSLE1BQU1FLGdCQUFRTztRQUFRWixPQUFPSjtNQUFVO01BQ2xEaUIsU0FBUztRQUFFVixNQUFNO1FBQUtILE9BQU9KO01BQVU7SUFDekM7OzsiLAogICJuYW1lcyI6IFsiU3RhdHVzSWNvbiIsICJ0MCIsICIkIiwgIl9jIiwgInN0YXR1cyIsICJ3aXRoU3BhY2UiLCAidDEiLCAidW5kZWZpbmVkIiwgImNvbmZpZyIsICJTVEFUVVNfQ09ORklHIiwgInQyIiwgImNvbG9yIiwgInQzIiwgInQ0IiwgImljb24iLCAic3VjY2VzcyIsICJmaWd1cmVzIiwgInRpY2siLCAiZXJyb3IiLCAiY3Jvc3MiLCAid2FybmluZyIsICJpbmZvIiwgInBlbmRpbmciLCAiY2lyY2xlIiwgImxvYWRpbmciXQp9Cg==
