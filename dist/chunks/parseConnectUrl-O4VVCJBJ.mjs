#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import "./chunk-O5PZ3G6I.mjs";

// src/server/parseConnectUrl.ts
function parseConnectUrl(url) {
  try {
    const parsed = new URL(url.replace(/^cc\+unix:\/\//, "http://"));
    return {
      serverUrl: `${parsed.protocol}//${parsed.host}`,
      authToken: parsed.searchParams.get("authToken") ?? parsed.searchParams.get("token") ?? ""
    };
  } catch {
    return {
      serverUrl: url,
      authToken: ""
    };
  }
}
export {
  parseConnectUrl
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3NlcnZlci9wYXJzZUNvbm5lY3RVcmwudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvbm5lY3RVcmwodXJsOiBzdHJpbmcpOiB7XG4gIHNlcnZlclVybDogc3RyaW5nXG4gIGF1dGhUb2tlbjogc3RyaW5nXG59IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwYXJzZWQgPSBuZXcgVVJMKHVybC5yZXBsYWNlKC9eY2NcXCt1bml4OlxcL1xcLy8sICdodHRwOi8vJykpXG4gICAgcmV0dXJuIHtcbiAgICAgIHNlcnZlclVybDogYCR7cGFyc2VkLnByb3RvY29sfS8vJHtwYXJzZWQuaG9zdH1gLFxuICAgICAgYXV0aFRva2VuOlxuICAgICAgICBwYXJzZWQuc2VhcmNoUGFyYW1zLmdldCgnYXV0aFRva2VuJykgPz9cbiAgICAgICAgcGFyc2VkLnNlYXJjaFBhcmFtcy5nZXQoJ3Rva2VuJykgPz9cbiAgICAgICAgJycsXG4gICAgfVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VydmVyVXJsOiB1cmwsXG4gICAgICBhdXRoVG9rZW46ICcnLFxuICAgIH1cbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7O0FBQU8sU0FBUyxnQkFBZ0IsS0FHOUI7QUFDQSxNQUFJO0FBQ0YsVUFBTSxTQUFTLElBQUksSUFBSSxJQUFJLFFBQVEsa0JBQWtCLFNBQVMsQ0FBQztBQUMvRCxXQUFPO0FBQUEsTUFDTCxXQUFXLEdBQUcsT0FBTyxRQUFRLEtBQUssT0FBTyxJQUFJO0FBQUEsTUFDN0MsV0FDRSxPQUFPLGFBQWEsSUFBSSxXQUFXLEtBQ25DLE9BQU8sYUFBYSxJQUFJLE9BQU8sS0FDL0I7QUFBQSxJQUNKO0FBQUEsRUFDRixRQUFRO0FBQ04sV0FBTztBQUFBLE1BQ0wsV0FBVztBQUFBLE1BQ1gsV0FBVztBQUFBLElBQ2I7QUFBQSxFQUNGO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
