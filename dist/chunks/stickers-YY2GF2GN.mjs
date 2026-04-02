#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_browser,
  openBrowser
} from "./chunk-EL6ZMCGB.mjs";
import "./chunk-IVTTVOOG.mjs";
import "./chunk-ZAYB3WZV.mjs";
import "./chunk-TZFTPSMG.mjs";
import "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
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

// src/commands/stickers/stickers.ts
async function call() {
  const url = "https://www.stickermule.com/claudecode";
  const success = await openBrowser(url);
  if (success) {
    return { type: "text", value: "Opening sticker page in browser\u2026" };
  } else {
    return {
      type: "text",
      value: `Failed to open browser. Visit: ${url}`
    };
  }
}
var init_stickers = __esm({
  "src/commands/stickers/stickers.ts"() {
    init_browser();
  }
});
init_stickers();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL3N0aWNrZXJzL3N0aWNrZXJzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgdHlwZSB7IExvY2FsQ29tbWFuZFJlc3VsdCB9IGZyb20gJy4uLy4uL3R5cGVzL2NvbW1hbmQuanMnXG5pbXBvcnQgeyBvcGVuQnJvd3NlciB9IGZyb20gJy4uLy4uL3V0aWxzL2Jyb3dzZXIuanMnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYWxsKCk6IFByb21pc2U8TG9jYWxDb21tYW5kUmVzdWx0PiB7XG4gIGNvbnN0IHVybCA9ICdodHRwczovL3d3dy5zdGlja2VybXVsZS5jb20vY2xhdWRlY29kZSdcbiAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IG9wZW5Ccm93c2VyKHVybClcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIHJldHVybiB7IHR5cGU6ICd0ZXh0JywgdmFsdWU6ICdPcGVuaW5nIHN0aWNrZXIgcGFnZSBpbiBicm93c2VyXHUyMDI2JyB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHZhbHVlOiBgRmFpbGVkIHRvIG9wZW4gYnJvd3Nlci4gVmlzaXQ6ICR7dXJsfWAsXG4gICAgfVxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsZUFBc0IsT0FBb0M7QUFDeEQsUUFBTSxNQUFNO0FBQ1osUUFBTSxVQUFVLE1BQU0sWUFBWSxHQUFHO0FBRXJDLE1BQUksU0FBUztBQUNYLFdBQU8sRUFBRSxNQUFNLFFBQVEsT0FBTyx3Q0FBbUM7QUFBQSxFQUNuRSxPQUFPO0FBQ0wsV0FBTztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sT0FBTyxrQ0FBa0MsR0FBRztBQUFBLElBQzlDO0FBQUEsRUFDRjtBQUNGO0FBZkE7QUFBQTtBQUNBO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
