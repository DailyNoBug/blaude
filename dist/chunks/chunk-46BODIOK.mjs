#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  ThemedBox_default,
  ThemedText,
  init_ink
} from "./chunk-ZFJCSCYD.mjs";
import {
  init_react,
  react_default
} from "./chunk-TEJH3H3H.mjs";

// src/components/LogoV2/WelcomeV2.tsx
init_react();
init_ink();
var WELCOME_V2_WIDTH = 58;
var WELCOME_MESSAGE = "Welcome to Blaude";
var HAJIMI_ART = [
  [{ text: "                  .-^^^^^^^^-._", color: "claude" }],
  [{ text: '               .-"   .----.    "-.', color: "claude" }],
  [{ text: "             .'    .'      `.      `.", color: "claude" }],
  [{ text: "            /    .'  .--.    `.      \\\\", color: "claude" }],
  [
    { text: "           /    /   / ", color: "claude" },
    { text: "OO", color: "permission" },
    { text: " \\     \\      \\\\", color: "claude" }
  ],
  [{ text: "          ;    ;    \\____/      ;     ;", color: "claude" }],
  [{ text: "          |    |       /\\       |     |", color: "claude" }],
  [{ text: "          |    |     .'  `.     |     |", color: "clawd_body" }],
  [{ text: "          ;    ;   .' ____ `.   ;     ;", color: "clawd_body" }],
  [{ text: "           \\    \\ /  / __ \\  \\ /     /", color: "clawd_body" }],
  [{ text: "            `.   |  | /  \\ |  |   .'", color: "clawd_body" }],
  [{ text: "              `-.\\  \\____/  /.-' ", color: "clawd_body" }],
  [{ text: "                  `-..__..-'", color: "claude" }],
  [{ text: "                hajimi stare mode", color: "permission" }]
];
function renderArtLine(line, lineIndex) {
  return /* @__PURE__ */ react_default.createElement(ThemedText, { key: lineIndex }, line.map((segment, segmentIndex) => /* @__PURE__ */ react_default.createElement(
    ThemedText,
    {
      key: `${lineIndex}-${segmentIndex}`,
      color: segment.color,
      dimColor: segment.dimColor
    },
    segment.text
  )));
}
function WelcomeV2() {
  return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { width: WELCOME_V2_WIDTH, flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, null, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "claude" }, WELCOME_MESSAGE, " "), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "v", MACRO.VERSION, " ")), /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2026".repeat(WELCOME_V2_WIDTH)), /* @__PURE__ */ react_default.createElement(ThemedText, null, " "), HAJIMI_ART.map(renderArtLine), /* @__PURE__ */ react_default.createElement(ThemedText, null, " "));
}

export {
  WelcomeV2
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvTG9nb1YyL1dlbGNvbWVWMi50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcblxuY29uc3QgV0VMQ09NRV9WMl9XSURUSCA9IDU4XG5jb25zdCBXRUxDT01FX01FU1NBR0UgPSAnV2VsY29tZSB0byBCbGF1ZGUnXG5cbnR5cGUgQXJ0U2VnbWVudCA9IHtcbiAgdGV4dDogc3RyaW5nXG4gIGNvbG9yPzogc3RyaW5nXG4gIGRpbUNvbG9yPzogYm9vbGVhblxufVxuXG50eXBlIEFydExpbmUgPSByZWFkb25seSBBcnRTZWdtZW50W11cblxuY29uc3QgSEFKSU1JX0FSVDogcmVhZG9ubHkgQXJ0TGluZVtdID0gW1xuICBbeyB0ZXh0OiAnICAgICAgICAgICAgICAgICAgLi1eXl5eXl5eXi0uXycsIGNvbG9yOiAnY2xhdWRlJyB9XSxcbiAgW3sgdGV4dDogJyAgICAgICAgICAgICAgIC4tXCIgICAuLS0tLS4gICAgXCItLicsIGNvbG9yOiAnY2xhdWRlJyB9XSxcbiAgW3sgdGV4dDogXCIgICAgICAgICAgICAgLicgICAgLicgICAgICBgLiAgICAgIGAuXCIsIGNvbG9yOiAnY2xhdWRlJyB9XSxcbiAgW3sgdGV4dDogXCIgICAgICAgICAgICAvICAgIC4nICAuLS0uICAgIGAuICAgICAgXFxcXFxcXFxcIiwgY29sb3I6ICdjbGF1ZGUnIH1dLFxuICBbXG4gICAgeyB0ZXh0OiAnICAgICAgICAgICAvICAgIC8gICAvICcsIGNvbG9yOiAnY2xhdWRlJyB9LFxuICAgIHsgdGV4dDogJ09PJywgY29sb3I6ICdwZXJtaXNzaW9uJyB9LFxuICAgIHsgdGV4dDogJyBcXFxcICAgICBcXFxcICAgICAgXFxcXFxcXFwnLCBjb2xvcjogJ2NsYXVkZScgfSxcbiAgXSxcbiAgW3sgdGV4dDogJyAgICAgICAgICA7ICAgIDsgICAgXFxcXF9fX18vICAgICAgOyAgICAgOycsIGNvbG9yOiAnY2xhdWRlJyB9XSxcbiAgW3sgdGV4dDogXCIgICAgICAgICAgfCAgICB8ICAgICAgIC9cXFxcICAgICAgIHwgICAgIHxcIiwgY29sb3I6ICdjbGF1ZGUnIH1dLFxuICBbeyB0ZXh0OiBcIiAgICAgICAgICB8ICAgIHwgICAgIC4nICBgLiAgICAgfCAgICAgfFwiLCBjb2xvcjogJ2NsYXdkX2JvZHknIH1dLFxuICBbeyB0ZXh0OiBcIiAgICAgICAgICA7ICAgIDsgICAuJyBfX19fIGAuICAgOyAgICAgO1wiLCBjb2xvcjogJ2NsYXdkX2JvZHknIH1dLFxuICBbeyB0ZXh0OiBcIiAgICAgICAgICAgXFxcXCAgICBcXFxcIC8gIC8gX18gXFxcXCAgXFxcXCAvICAgICAvXCIsIGNvbG9yOiAnY2xhd2RfYm9keScgfV0sXG4gIFt7IHRleHQ6IFwiICAgICAgICAgICAgYC4gICB8ICB8IC8gIFxcXFwgfCAgfCAgIC4nXCIsIGNvbG9yOiAnY2xhd2RfYm9keScgfV0sXG4gIFt7IHRleHQ6IFwiICAgICAgICAgICAgICBgLS5cXFxcICBcXFxcX19fXy8gIC8uLScgXCIsIGNvbG9yOiAnY2xhd2RfYm9keScgfV0sXG4gIFt7IHRleHQ6IFwiICAgICAgICAgICAgICAgICAgYC0uLl9fLi4tJ1wiLCBjb2xvcjogJ2NsYXVkZScgfV0sXG4gIFt7IHRleHQ6ICcgICAgICAgICAgICAgICAgaGFqaW1pIHN0YXJlIG1vZGUnLCBjb2xvcjogJ3Blcm1pc3Npb24nIH1dLFxuXVxuXG5mdW5jdGlvbiByZW5kZXJBcnRMaW5lKGxpbmU6IEFydExpbmUsIGxpbmVJbmRleDogbnVtYmVyKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgcmV0dXJuIChcbiAgICA8VGV4dCBrZXk9e2xpbmVJbmRleH0+XG4gICAgICB7bGluZS5tYXAoKHNlZ21lbnQsIHNlZ21lbnRJbmRleCkgPT4gKFxuICAgICAgICA8VGV4dFxuICAgICAgICAgIGtleT17YCR7bGluZUluZGV4fS0ke3NlZ21lbnRJbmRleH1gfVxuICAgICAgICAgIGNvbG9yPXtzZWdtZW50LmNvbG9yfVxuICAgICAgICAgIGRpbUNvbG9yPXtzZWdtZW50LmRpbUNvbG9yfVxuICAgICAgICA+XG4gICAgICAgICAge3NlZ21lbnQudGV4dH1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgKSl9XG4gICAgPC9UZXh0PlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBXZWxjb21lVjIoKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IHdpZHRoPXtXRUxDT01FX1YyX1dJRFRIfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICA8VGV4dD5cbiAgICAgICAgPFRleHQgY29sb3I9XCJjbGF1ZGVcIj57V0VMQ09NRV9NRVNTQUdFfSA8L1RleHQ+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPXt0cnVlfT52e01BQ1JPLlZFUlNJT059IDwvVGV4dD5cbiAgICAgIDwvVGV4dD5cbiAgICAgIDxUZXh0PnsnXHUyMDI2Jy5yZXBlYXQoV0VMQ09NRV9WMl9XSURUSCl9PC9UZXh0PlxuICAgICAgPFRleHQ+eycgJ308L1RleHQ+XG4gICAgICB7SEFKSU1JX0FSVC5tYXAocmVuZGVyQXJ0TGluZSl9XG4gICAgICA8VGV4dD57JyAnfTwvVGV4dD5cbiAgICA8L0JveD5cbiAgKVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTSxtQkFBbUI7QUFDekIsSUFBTSxrQkFBa0I7QUFVeEIsSUFBTSxhQUFpQztBQUFBLEVBQ3JDLENBQUMsRUFBRSxNQUFNLG1DQUFtQyxPQUFPLFNBQVMsQ0FBQztBQUFBLEVBQzdELENBQUMsRUFBRSxNQUFNLHNDQUFzQyxPQUFPLFNBQVMsQ0FBQztBQUFBLEVBQ2hFLENBQUMsRUFBRSxNQUFNLHlDQUF5QyxPQUFPLFNBQVMsQ0FBQztBQUFBLEVBQ25FLENBQUMsRUFBRSxNQUFNLDZDQUE2QyxPQUFPLFNBQVMsQ0FBQztBQUFBLEVBQ3ZFO0FBQUEsSUFDRSxFQUFFLE1BQU0sMEJBQTBCLE9BQU8sU0FBUztBQUFBLElBQ2xELEVBQUUsTUFBTSxNQUFNLE9BQU8sYUFBYTtBQUFBLElBQ2xDLEVBQUUsTUFBTSx3QkFBd0IsT0FBTyxTQUFTO0FBQUEsRUFDbEQ7QUFBQSxFQUNBLENBQUMsRUFBRSxNQUFNLDRDQUE0QyxPQUFPLFNBQVMsQ0FBQztBQUFBLEVBQ3RFLENBQUMsRUFBRSxNQUFNLDRDQUE0QyxPQUFPLFNBQVMsQ0FBQztBQUFBLEVBQ3RFLENBQUMsRUFBRSxNQUFNLDJDQUEyQyxPQUFPLGFBQWEsQ0FBQztBQUFBLEVBQ3pFLENBQUMsRUFBRSxNQUFNLDJDQUEyQyxPQUFPLGFBQWEsQ0FBQztBQUFBLEVBQ3pFLENBQUMsRUFBRSxNQUFNLDhDQUE4QyxPQUFPLGFBQWEsQ0FBQztBQUFBLEVBQzVFLENBQUMsRUFBRSxNQUFNLHlDQUF5QyxPQUFPLGFBQWEsQ0FBQztBQUFBLEVBQ3ZFLENBQUMsRUFBRSxNQUFNLHVDQUF1QyxPQUFPLGFBQWEsQ0FBQztBQUFBLEVBQ3JFLENBQUMsRUFBRSxNQUFNLGdDQUFnQyxPQUFPLFNBQVMsQ0FBQztBQUFBLEVBQzFELENBQUMsRUFBRSxNQUFNLHFDQUFxQyxPQUFPLGFBQWEsQ0FBQztBQUNyRTtBQUVBLFNBQVMsY0FBYyxNQUFlLFdBQW9DO0FBQ3hFLFNBQ0UsNENBQUMsY0FBSyxLQUFLLGFBQ1IsS0FBSyxJQUFJLENBQUMsU0FBUyxpQkFDbEI7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDLEtBQUssR0FBRyxTQUFTLElBQUksWUFBWTtBQUFBLE1BQ2pDLE9BQU8sUUFBUTtBQUFBLE1BQ2YsVUFBVSxRQUFRO0FBQUE7QUFBQSxJQUVqQixRQUFRO0FBQUEsRUFDWCxDQUNELENBQ0g7QUFFSjtBQUVPLFNBQVMsWUFBNkI7QUFDM0MsU0FDRSw0Q0FBQyxxQkFBSSxPQUFPLGtCQUFrQixlQUFjLFlBQzFDLDRDQUFDLGtCQUNDLDRDQUFDLGNBQUssT0FBTSxZQUFVLGlCQUFnQixHQUFDLEdBQ3ZDLDRDQUFDLGNBQUssVUFBVSxRQUFNLEtBQUUsTUFBTSxTQUFRLEdBQUMsQ0FDekMsR0FDQSw0Q0FBQyxrQkFBTSxTQUFJLE9BQU8sZ0JBQWdCLENBQUUsR0FDcEMsNENBQUMsa0JBQU0sR0FBSSxHQUNWLFdBQVcsSUFBSSxhQUFhLEdBQzdCLDRDQUFDLGtCQUFNLEdBQUksQ0FDYjtBQUVKOyIsCiAgIm5hbWVzIjogW10KfQo=
