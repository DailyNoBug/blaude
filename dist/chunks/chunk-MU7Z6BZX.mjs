#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  ThemedBox_default,
  ThemedText,
  init_ink
} from "./chunk-KMJXN3MK.mjs";
import {
  init_react,
  react_default
} from "./chunk-TEJH3H3H.mjs";

// src/components/LogoV2/WelcomeV2.tsx
init_react();
init_ink();
var WELCOME_V2_WIDTH = 58;
var WELCOME_MESSAGE = "Welcome to Blaude";
var GUIDE_DOG_ART = [
  [{ text: "                  /v---------------v\\", color: "clawd_body" }],
  [{ text: "                 V    o       o    V", color: "clawd_body" }],
  [{ text: "                  \\      ^      /", color: "clawd_body" }],
  [
    { text: "                   |    ", color: "clawd_body" },
    { text: "[ ]", color: "permission" },
    { text: "    |", color: "clawd_body" }
  ],
  [{ text: "                  /|___________|\\", color: "clawd_body" }],
  [{ text: "                 /_/           \\_\\", color: "clawd_body" }]
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
  return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { width: WELCOME_V2_WIDTH, flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, null, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "claude" }, WELCOME_MESSAGE, " "), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "v", MACRO.VERSION, " ")), /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2026".repeat(WELCOME_V2_WIDTH)), /* @__PURE__ */ react_default.createElement(ThemedText, null, " "), GUIDE_DOG_ART.map(renderArtLine), /* @__PURE__ */ react_default.createElement(ThemedText, null, " "));
}

export {
  WelcomeV2
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvTG9nb1YyL1dlbGNvbWVWMi50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcblxuY29uc3QgV0VMQ09NRV9WMl9XSURUSCA9IDU4XG5jb25zdCBXRUxDT01FX01FU1NBR0UgPSAnV2VsY29tZSB0byBCbGF1ZGUnXG5cbnR5cGUgQXJ0U2VnbWVudCA9IHtcbiAgdGV4dDogc3RyaW5nXG4gIGNvbG9yPzogc3RyaW5nXG4gIGRpbUNvbG9yPzogYm9vbGVhblxufVxuXG50eXBlIEFydExpbmUgPSByZWFkb25seSBBcnRTZWdtZW50W11cblxuY29uc3QgR1VJREVfRE9HX0FSVDogcmVhZG9ubHkgQXJ0TGluZVtdID0gW1xuICBbeyB0ZXh0OiAnICAgICAgICAgICAgICAgICAgL3YtLS0tLS0tLS0tLS0tLS12XFxcXCcsIGNvbG9yOiAnY2xhd2RfYm9keScgfV0sXG4gIFt7IHRleHQ6ICcgICAgICAgICAgICAgICAgIFYgICAgbyAgICAgICBvICAgIFYnLCBjb2xvcjogJ2NsYXdkX2JvZHknIH1dLFxuICBbeyB0ZXh0OiAnICAgICAgICAgICAgICAgICAgXFxcXCAgICAgIF4gICAgICAvJywgY29sb3I6ICdjbGF3ZF9ib2R5JyB9XSxcbiAgW1xuICAgIHsgdGV4dDogJyAgICAgICAgICAgICAgICAgICB8ICAgICcsIGNvbG9yOiAnY2xhd2RfYm9keScgfSxcbiAgICB7IHRleHQ6ICdbIF0nLCBjb2xvcjogJ3Blcm1pc3Npb24nIH0sXG4gICAgeyB0ZXh0OiAnICAgIHwnLCBjb2xvcjogJ2NsYXdkX2JvZHknIH0sXG4gIF0sXG4gIFt7IHRleHQ6ICcgICAgICAgICAgICAgICAgICAvfF9fX19fX19fX19ffFxcXFwnLCBjb2xvcjogJ2NsYXdkX2JvZHknIH1dLFxuICBbeyB0ZXh0OiAnICAgICAgICAgICAgICAgICAvXy8gICAgICAgICAgIFxcXFxfXFxcXCcsIGNvbG9yOiAnY2xhd2RfYm9keScgfV0sXG5dXG5cbmZ1bmN0aW9uIHJlbmRlckFydExpbmUobGluZTogQXJ0TGluZSwgbGluZUluZGV4OiBudW1iZXIpOiBSZWFjdC5SZWFjdE5vZGUge1xuICByZXR1cm4gKFxuICAgIDxUZXh0IGtleT17bGluZUluZGV4fT5cbiAgICAgIHtsaW5lLm1hcCgoc2VnbWVudCwgc2VnbWVudEluZGV4KSA9PiAoXG4gICAgICAgIDxUZXh0XG4gICAgICAgICAga2V5PXtgJHtsaW5lSW5kZXh9LSR7c2VnbWVudEluZGV4fWB9XG4gICAgICAgICAgY29sb3I9e3NlZ21lbnQuY29sb3J9XG4gICAgICAgICAgZGltQ29sb3I9e3NlZ21lbnQuZGltQ29sb3J9XG4gICAgICAgID5cbiAgICAgICAgICB7c2VnbWVudC50ZXh0fVxuICAgICAgICA8L1RleHQ+XG4gICAgICApKX1cbiAgICA8L1RleHQ+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFdlbGNvbWVWMigpOiBSZWFjdC5SZWFjdE5vZGUge1xuICByZXR1cm4gKFxuICAgIDxCb3ggd2lkdGg9e1dFTENPTUVfVjJfV0lEVEh9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgIDxUZXh0PlxuICAgICAgICA8VGV4dCBjb2xvcj1cImNsYXVkZVwiPntXRUxDT01FX01FU1NBR0V9IDwvVGV4dD5cbiAgICAgICAgPFRleHQgZGltQ29sb3I9e3RydWV9PnZ7TUFDUk8uVkVSU0lPTn0gPC9UZXh0PlxuICAgICAgPC9UZXh0PlxuICAgICAgPFRleHQ+eydcdTIwMjYnLnJlcGVhdChXRUxDT01FX1YyX1dJRFRIKX08L1RleHQ+XG4gICAgICA8VGV4dD57JyAnfTwvVGV4dD5cbiAgICAgIHtHVUlERV9ET0dfQVJULm1hcChyZW5kZXJBcnRMaW5lKX1cbiAgICAgIDxUZXh0PnsnICd9PC9UZXh0PlxuICAgIDwvQm94PlxuICApXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNLG1CQUFtQjtBQUN6QixJQUFNLGtCQUFrQjtBQVV4QixJQUFNLGdCQUFvQztBQUFBLEVBQ3hDLENBQUMsRUFBRSxNQUFNLDBDQUEwQyxPQUFPLGFBQWEsQ0FBQztBQUFBLEVBQ3hFLENBQUMsRUFBRSxNQUFNLHdDQUF3QyxPQUFPLGFBQWEsQ0FBQztBQUFBLEVBQ3RFLENBQUMsRUFBRSxNQUFNLHNDQUFzQyxPQUFPLGFBQWEsQ0FBQztBQUFBLEVBQ3BFO0FBQUEsSUFDRSxFQUFFLE1BQU0sNEJBQTRCLE9BQU8sYUFBYTtBQUFBLElBQ3hELEVBQUUsTUFBTSxPQUFPLE9BQU8sYUFBYTtBQUFBLElBQ25DLEVBQUUsTUFBTSxTQUFTLE9BQU8sYUFBYTtBQUFBLEVBQ3ZDO0FBQUEsRUFDQSxDQUFDLEVBQUUsTUFBTSxzQ0FBc0MsT0FBTyxhQUFhLENBQUM7QUFBQSxFQUNwRSxDQUFDLEVBQUUsTUFBTSx3Q0FBd0MsT0FBTyxhQUFhLENBQUM7QUFDeEU7QUFFQSxTQUFTLGNBQWMsTUFBZSxXQUFvQztBQUN4RSxTQUNFLDRDQUFDLGNBQUssS0FBSyxhQUNSLEtBQUssSUFBSSxDQUFDLFNBQVMsaUJBQ2xCO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQyxLQUFLLEdBQUcsU0FBUyxJQUFJLFlBQVk7QUFBQSxNQUNqQyxPQUFPLFFBQVE7QUFBQSxNQUNmLFVBQVUsUUFBUTtBQUFBO0FBQUEsSUFFakIsUUFBUTtBQUFBLEVBQ1gsQ0FDRCxDQUNIO0FBRUo7QUFFTyxTQUFTLFlBQTZCO0FBQzNDLFNBQ0UsNENBQUMscUJBQUksT0FBTyxrQkFBa0IsZUFBYyxZQUMxQyw0Q0FBQyxrQkFDQyw0Q0FBQyxjQUFLLE9BQU0sWUFBVSxpQkFBZ0IsR0FBQyxHQUN2Qyw0Q0FBQyxjQUFLLFVBQVUsUUFBTSxLQUFFLE1BQU0sU0FBUSxHQUFDLENBQ3pDLEdBQ0EsNENBQUMsa0JBQU0sU0FBSSxPQUFPLGdCQUFnQixDQUFFLEdBQ3BDLDRDQUFDLGtCQUFNLEdBQUksR0FDVixjQUFjLElBQUksYUFBYSxHQUNoQyw0Q0FBQyxrQkFBTSxHQUFJLENBQ2I7QUFFSjsiLAogICJuYW1lcyI6IFtdCn0K
