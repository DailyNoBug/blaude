#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  c,
  init_react_compiler_runtime
} from "./chunk-ZFJCSCYD.mjs";
import {
  createContext,
  init_react,
  react_default,
  useContext
} from "./chunk-TEJH3H3H.mjs";

// src/context/fpsMetrics.tsx
init_react_compiler_runtime();
init_react();
var FpsMetricsContext = createContext(void 0);
function FpsMetricsProvider(t0) {
  const $ = c(3);
  const {
    getFpsMetrics,
    children
  } = t0;
  let t1;
  if ($[0] !== children || $[1] !== getFpsMetrics) {
    t1 = /* @__PURE__ */ react_default.createElement(FpsMetricsContext.Provider, { value: getFpsMetrics }, children);
    $[0] = children;
    $[1] = getFpsMetrics;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  return t1;
}
function useFpsMetrics() {
  return useContext(FpsMetricsContext);
}

export {
  FpsMetricsProvider,
  useFpsMetrics
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbnRleHQvZnBzTWV0cmljcy50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IEZwc01ldHJpY3MgfSBmcm9tICcuLi91dGlscy9mcHNUcmFja2VyLmpzJ1xuXG50eXBlIEZwc01ldHJpY3NHZXR0ZXIgPSAoKSA9PiBGcHNNZXRyaWNzIHwgdW5kZWZpbmVkXG5cbmNvbnN0IEZwc01ldHJpY3NDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxGcHNNZXRyaWNzR2V0dGVyIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGdldEZwc01ldHJpY3M6IEZwc01ldHJpY3NHZXR0ZXJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gRnBzTWV0cmljc1Byb3ZpZGVyKHtcbiAgZ2V0RnBzTWV0cmljcyxcbiAgY2hpbGRyZW4sXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIHJldHVybiAoXG4gICAgPEZwc01ldHJpY3NDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtnZXRGcHNNZXRyaWNzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0Zwc01ldHJpY3NDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VGcHNNZXRyaWNzKCk6IEZwc01ldHJpY3NHZXR0ZXIgfCB1bmRlZmluZWQge1xuICByZXR1cm4gdXNlQ29udGV4dChGcHNNZXRyaWNzQ29udGV4dClcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUtBLElBQU1BLG9CQUFvQkMsY0FBNENDLE1BQVM7QUFPeEUsU0FBQUMsbUJBQUFDLElBQUE7QUFBQSxRQUFBQyxJQUFBQyxFQUFBLENBQUE7QUFBNEIsUUFBQTtJQUFBQztJQUFBQztFQUFBLElBQUFKO0FBRzNCLE1BQUFLO0FBQUEsTUFBQUosRUFBQSxDQUFBLE1BQUFHLFlBQUFILEVBQUEsQ0FBQSxNQUFBRSxlQUFBO0FBRUpFLFNBQUEsNENBQUEsa0JBQUEsVUFBQSxFQUFtQ0YsT0FBQUEsaUJBQ2hDQyxRQUNIO0FBQTZCSCxNQUFBLENBQUEsSUFBQUc7QUFBQUgsTUFBQSxDQUFBLElBQUFFO0FBQUFGLE1BQUEsQ0FBQSxJQUFBSTtFQUFBLE9BQUE7QUFBQUEsU0FBQUosRUFBQSxDQUFBO0VBQUE7QUFBQSxTQUY3Qkk7QUFFNkI7QUFJMUIsU0FBQUMsZ0JBQUE7QUFBQSxTQUNFQyxXQUFXWCxpQkFBaUI7QUFBQzsiLAogICJuYW1lcyI6IFsiRnBzTWV0cmljc0NvbnRleHQiLCAiY3JlYXRlQ29udGV4dCIsICJ1bmRlZmluZWQiLCAiRnBzTWV0cmljc1Byb3ZpZGVyIiwgInQwIiwgIiQiLCAiX2MiLCAiZ2V0RnBzTWV0cmljcyIsICJjaGlsZHJlbiIsICJ0MSIsICJ1c2VGcHNNZXRyaWNzIiwgInVzZUNvbnRleHQiXQp9Cg==
