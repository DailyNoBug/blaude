#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  execFileNoThrow,
  init_execFileNoThrow
} from "./chunk-IVTTVOOG.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/browser.ts
function validateUrl(url) {
  let parsedUrl;
  try {
    parsedUrl = new URL(url);
  } catch (_error) {
    throw new Error(`Invalid URL format: ${url}`);
  }
  if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
    throw new Error(
      `Invalid URL protocol: must use http:// or https://, got ${parsedUrl.protocol}`
    );
  }
}
async function openPath(path) {
  try {
    const platform = process.platform;
    if (platform === "win32") {
      const { code: code2 } = await execFileNoThrow("explorer", [path]);
      return code2 === 0;
    }
    const command = platform === "darwin" ? "open" : "xdg-open";
    const { code } = await execFileNoThrow(command, [path]);
    return code === 0;
  } catch (_) {
    return false;
  }
}
async function openBrowser(url) {
  try {
    validateUrl(url);
    const browserEnv = process.env.BROWSER;
    const platform = process.platform;
    if (platform === "win32") {
      if (browserEnv) {
        const { code: code2 } = await execFileNoThrow(browserEnv, [`"${url}"`]);
        return code2 === 0;
      }
      const { code } = await execFileNoThrow(
        "rundll32",
        ["url,OpenURL", url],
        {}
      );
      return code === 0;
    } else {
      const command = browserEnv || (platform === "darwin" ? "open" : "xdg-open");
      const { code } = await execFileNoThrow(command, [url]);
      return code === 0;
    }
  } catch (_) {
    return false;
  }
}
var init_browser = __esm({
  "src/utils/browser.ts"() {
    init_execFileNoThrow();
  }
});

export {
  openPath,
  openBrowser,
  init_browser
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL2Jyb3dzZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGV4ZWNGaWxlTm9UaHJvdyB9IGZyb20gJy4vZXhlY0ZpbGVOb1Rocm93LmpzJ1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVVybCh1cmw6IHN0cmluZyk6IHZvaWQge1xuICBsZXQgcGFyc2VkVXJsOiBVUkxcblxuICB0cnkge1xuICAgIHBhcnNlZFVybCA9IG5ldyBVUkwodXJsKVxuICB9IGNhdGNoIChfZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgVVJMIGZvcm1hdDogJHt1cmx9YClcbiAgfVxuXG4gIC8vIFZhbGlkYXRlIFVSTCBwcm90b2NvbCBmb3Igc2VjdXJpdHlcbiAgaWYgKHBhcnNlZFVybC5wcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwYXJzZWRVcmwucHJvdG9jb2wgIT09ICdodHRwczonKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYEludmFsaWQgVVJMIHByb3RvY29sOiBtdXN0IHVzZSBodHRwOi8vIG9yIGh0dHBzOi8vLCBnb3QgJHtwYXJzZWRVcmwucHJvdG9jb2x9YCxcbiAgICApXG4gIH1cbn1cblxuLyoqXG4gKiBPcGVuIGEgZmlsZSBvciBmb2xkZXIgcGF0aCB1c2luZyB0aGUgc3lzdGVtJ3MgZGVmYXVsdCBoYW5kbGVyLlxuICogVXNlcyBgb3BlbmAgb24gbWFjT1MsIGBleHBsb3JlcmAgb24gV2luZG93cywgYHhkZy1vcGVuYCBvbiBMaW51eC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG9wZW5QYXRoKHBhdGg6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICB0cnkge1xuICAgIGNvbnN0IHBsYXRmb3JtID0gcHJvY2Vzcy5wbGF0Zm9ybVxuICAgIGlmIChwbGF0Zm9ybSA9PT0gJ3dpbjMyJykge1xuICAgICAgY29uc3QgeyBjb2RlIH0gPSBhd2FpdCBleGVjRmlsZU5vVGhyb3coJ2V4cGxvcmVyJywgW3BhdGhdKVxuICAgICAgcmV0dXJuIGNvZGUgPT09IDBcbiAgICB9XG4gICAgY29uc3QgY29tbWFuZCA9IHBsYXRmb3JtID09PSAnZGFyd2luJyA/ICdvcGVuJyA6ICd4ZGctb3BlbidcbiAgICBjb25zdCB7IGNvZGUgfSA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdyhjb21tYW5kLCBbcGF0aF0pXG4gICAgcmV0dXJuIGNvZGUgPT09IDBcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBvcGVuQnJvd3Nlcih1cmw6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICB0cnkge1xuICAgIC8vIFBhcnNlIGFuZCB2YWxpZGF0ZSB0aGUgVVJMXG4gICAgdmFsaWRhdGVVcmwodXJsKVxuXG4gICAgY29uc3QgYnJvd3NlckVudiA9IHByb2Nlc3MuZW52LkJST1dTRVJcbiAgICBjb25zdCBwbGF0Zm9ybSA9IHByb2Nlc3MucGxhdGZvcm1cblxuICAgIGlmIChwbGF0Zm9ybSA9PT0gJ3dpbjMyJykge1xuICAgICAgaWYgKGJyb3dzZXJFbnYpIHtcbiAgICAgICAgLy8gYnJvd3NlcnMgcmVxdWlyZSBzaGVsbCwgZWxzZSB0aGV5IHdpbGwgdHJlYXQgdGhpcyBhcyBhIGZpbGU6Ly8vIGhhbmRsZVxuICAgICAgICBjb25zdCB7IGNvZGUgfSA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdyhicm93c2VyRW52LCBbYFwiJHt1cmx9XCJgXSlcbiAgICAgICAgcmV0dXJuIGNvZGUgPT09IDBcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgY29kZSB9ID0gYXdhaXQgZXhlY0ZpbGVOb1Rocm93KFxuICAgICAgICAncnVuZGxsMzInLFxuICAgICAgICBbJ3VybCxPcGVuVVJMJywgdXJsXSxcbiAgICAgICAge30sXG4gICAgICApXG4gICAgICByZXR1cm4gY29kZSA9PT0gMFxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb21tYW5kID1cbiAgICAgICAgYnJvd3NlckVudiB8fCAocGxhdGZvcm0gPT09ICdkYXJ3aW4nID8gJ29wZW4nIDogJ3hkZy1vcGVuJylcbiAgICAgIGNvbnN0IHsgY29kZSB9ID0gYXdhaXQgZXhlY0ZpbGVOb1Rocm93KGNvbW1hbmQsIFt1cmxdKVxuICAgICAgcmV0dXJuIGNvZGUgPT09IDBcbiAgICB9XG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7O0FBRUEsU0FBUyxZQUFZLEtBQW1CO0FBQ3RDLE1BQUk7QUFFSixNQUFJO0FBQ0YsZ0JBQVksSUFBSSxJQUFJLEdBQUc7QUFBQSxFQUN6QixTQUFTLFFBQVE7QUFDZixVQUFNLElBQUksTUFBTSx1QkFBdUIsR0FBRyxFQUFFO0FBQUEsRUFDOUM7QUFHQSxNQUFJLFVBQVUsYUFBYSxXQUFXLFVBQVUsYUFBYSxVQUFVO0FBQ3JFLFVBQU0sSUFBSTtBQUFBLE1BQ1IsMkRBQTJELFVBQVUsUUFBUTtBQUFBLElBQy9FO0FBQUEsRUFDRjtBQUNGO0FBTUEsZUFBc0IsU0FBUyxNQUFnQztBQUM3RCxNQUFJO0FBQ0YsVUFBTSxXQUFXLFFBQVE7QUFDekIsUUFBSSxhQUFhLFNBQVM7QUFDeEIsWUFBTSxFQUFFLE1BQUFBLE1BQUssSUFBSSxNQUFNLGdCQUFnQixZQUFZLENBQUMsSUFBSSxDQUFDO0FBQ3pELGFBQU9BLFVBQVM7QUFBQSxJQUNsQjtBQUNBLFVBQU0sVUFBVSxhQUFhLFdBQVcsU0FBUztBQUNqRCxVQUFNLEVBQUUsS0FBSyxJQUFJLE1BQU0sZ0JBQWdCLFNBQVMsQ0FBQyxJQUFJLENBQUM7QUFDdEQsV0FBTyxTQUFTO0FBQUEsRUFDbEIsU0FBUyxHQUFHO0FBQ1YsV0FBTztBQUFBLEVBQ1Q7QUFDRjtBQUVBLGVBQXNCLFlBQVksS0FBK0I7QUFDL0QsTUFBSTtBQUVGLGdCQUFZLEdBQUc7QUFFZixVQUFNLGFBQWEsUUFBUSxJQUFJO0FBQy9CLFVBQU0sV0FBVyxRQUFRO0FBRXpCLFFBQUksYUFBYSxTQUFTO0FBQ3hCLFVBQUksWUFBWTtBQUVkLGNBQU0sRUFBRSxNQUFBQSxNQUFLLElBQUksTUFBTSxnQkFBZ0IsWUFBWSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7QUFDL0QsZUFBT0EsVUFBUztBQUFBLE1BQ2xCO0FBQ0EsWUFBTSxFQUFFLEtBQUssSUFBSSxNQUFNO0FBQUEsUUFDckI7QUFBQSxRQUNBLENBQUMsZUFBZSxHQUFHO0FBQUEsUUFDbkIsQ0FBQztBQUFBLE1BQ0g7QUFDQSxhQUFPLFNBQVM7QUFBQSxJQUNsQixPQUFPO0FBQ0wsWUFBTSxVQUNKLGVBQWUsYUFBYSxXQUFXLFNBQVM7QUFDbEQsWUFBTSxFQUFFLEtBQUssSUFBSSxNQUFNLGdCQUFnQixTQUFTLENBQUMsR0FBRyxDQUFDO0FBQ3JELGFBQU8sU0FBUztBQUFBLElBQ2xCO0FBQUEsRUFDRixTQUFTLEdBQUc7QUFDVixXQUFPO0FBQUEsRUFDVDtBQUNGO0FBbkVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbImNvZGUiXQp9Cg==
