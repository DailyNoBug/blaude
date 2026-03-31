#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  getAuthHeaders,
  getClaudeAIOAuthTokens,
  getClaudeCodeUserAgent,
  hasProfileScope,
  init_auth,
  init_client,
  init_http,
  init_userAgent,
  isClaudeAISubscriber,
  isOAuthTokenExpired
} from "./chunk-Z6CSO4BY.mjs";
import {
  axios_default,
  init_axios
} from "./chunk-J6MJ6UVK.mjs";
import {
  getOauthConfig,
  init_oauth
} from "./chunk-JXCG2JDO.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/services/api/usage.ts
async function fetchUtilization() {
  if (!isClaudeAISubscriber() || !hasProfileScope()) {
    return {};
  }
  const tokens = getClaudeAIOAuthTokens();
  if (tokens && isOAuthTokenExpired(tokens.expiresAt)) {
    return null;
  }
  const authResult = getAuthHeaders();
  if (authResult.error) {
    throw new Error(`Auth error: ${authResult.error}`);
  }
  const headers = {
    "Content-Type": "application/json",
    "User-Agent": getClaudeCodeUserAgent(),
    ...authResult.headers
  };
  const url = `${getOauthConfig().BASE_API_URL}/api/oauth/usage`;
  const response = await axios_default.get(url, {
    headers,
    timeout: 5e3
    // 5 second timeout
  });
  return response.data;
}
var init_usage = __esm({
  "src/services/api/usage.ts"() {
    init_axios();
    init_oauth();
    init_auth();
    init_http();
    init_userAgent();
    init_client();
  }
});

export {
  fetchUtilization,
  init_usage
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3NlcnZpY2VzL2FwaS91c2FnZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgZ2V0T2F1dGhDb25maWcgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvb2F1dGguanMnXG5pbXBvcnQge1xuICBnZXRDbGF1ZGVBSU9BdXRoVG9rZW5zLFxuICBoYXNQcm9maWxlU2NvcGUsXG4gIGlzQ2xhdWRlQUlTdWJzY3JpYmVyLFxufSBmcm9tICcuLi8uLi91dGlscy9hdXRoLmpzJ1xuaW1wb3J0IHsgZ2V0QXV0aEhlYWRlcnMgfSBmcm9tICcuLi8uLi91dGlscy9odHRwLmpzJ1xuaW1wb3J0IHsgZ2V0Q2xhdWRlQ29kZVVzZXJBZ2VudCB9IGZyb20gJy4uLy4uL3V0aWxzL3VzZXJBZ2VudC5qcydcbmltcG9ydCB7IGlzT0F1dGhUb2tlbkV4cGlyZWQgfSBmcm9tICcuLi9vYXV0aC9jbGllbnQuanMnXG5cbmV4cG9ydCB0eXBlIFJhdGVMaW1pdCA9IHtcbiAgdXRpbGl6YXRpb246IG51bWJlciB8IG51bGwgLy8gYSBwZXJjZW50YWdlIGZyb20gMCB0byAxMDBcbiAgcmVzZXRzX2F0OiBzdHJpbmcgfCBudWxsIC8vIElTTyA4NjAxIHRpbWVzdGFtcFxufVxuXG5leHBvcnQgdHlwZSBFeHRyYVVzYWdlID0ge1xuICBpc19lbmFibGVkOiBib29sZWFuXG4gIG1vbnRobHlfbGltaXQ6IG51bWJlciB8IG51bGxcbiAgdXNlZF9jcmVkaXRzOiBudW1iZXIgfCBudWxsXG4gIHV0aWxpemF0aW9uOiBudW1iZXIgfCBudWxsXG59XG5cbmV4cG9ydCB0eXBlIFV0aWxpemF0aW9uID0ge1xuICBmaXZlX2hvdXI/OiBSYXRlTGltaXQgfCBudWxsXG4gIHNldmVuX2RheT86IFJhdGVMaW1pdCB8IG51bGxcbiAgc2V2ZW5fZGF5X29hdXRoX2FwcHM/OiBSYXRlTGltaXQgfCBudWxsXG4gIHNldmVuX2RheV9vcHVzPzogUmF0ZUxpbWl0IHwgbnVsbFxuICBzZXZlbl9kYXlfc29ubmV0PzogUmF0ZUxpbWl0IHwgbnVsbFxuICBleHRyYV91c2FnZT86IEV4dHJhVXNhZ2UgfCBudWxsXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFV0aWxpemF0aW9uKCk6IFByb21pc2U8VXRpbGl6YXRpb24gfCBudWxsPiB7XG4gIGlmICghaXNDbGF1ZGVBSVN1YnNjcmliZXIoKSB8fCAhaGFzUHJvZmlsZVNjb3BlKCkpIHtcbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIC8vIFNraXAgQVBJIGNhbGwgaWYgT0F1dGggdG9rZW4gaXMgZXhwaXJlZCB0byBhdm9pZCA0MDEgZXJyb3JzXG4gIGNvbnN0IHRva2VucyA9IGdldENsYXVkZUFJT0F1dGhUb2tlbnMoKVxuICBpZiAodG9rZW5zICYmIGlzT0F1dGhUb2tlbkV4cGlyZWQodG9rZW5zLmV4cGlyZXNBdCkpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgYXV0aFJlc3VsdCA9IGdldEF1dGhIZWFkZXJzKClcbiAgaWYgKGF1dGhSZXN1bHQuZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEF1dGggZXJyb3I6ICR7YXV0aFJlc3VsdC5lcnJvcn1gKVxuICB9XG5cbiAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICdVc2VyLUFnZW50JzogZ2V0Q2xhdWRlQ29kZVVzZXJBZ2VudCgpLFxuICAgIC4uLmF1dGhSZXN1bHQuaGVhZGVycyxcbiAgfVxuXG4gIGNvbnN0IHVybCA9IGAke2dldE9hdXRoQ29uZmlnKCkuQkFTRV9BUElfVVJMfS9hcGkvb2F1dGgvdXNhZ2VgXG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQ8VXRpbGl6YXRpb24+KHVybCwge1xuICAgIGhlYWRlcnMsXG4gICAgdGltZW91dDogNTAwMCwgLy8gNSBzZWNvbmQgdGltZW91dFxuICB9KVxuXG4gIHJldHVybiByZXNwb25zZS5kYXRhXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBLGVBQXNCLG1CQUFnRDtBQUNwRSxNQUFJLENBQUMscUJBQXFCLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRztBQUNqRCxXQUFPLENBQUM7QUFBQSxFQUNWO0FBR0EsUUFBTSxTQUFTLHVCQUF1QjtBQUN0QyxNQUFJLFVBQVUsb0JBQW9CLE9BQU8sU0FBUyxHQUFHO0FBQ25ELFdBQU87QUFBQSxFQUNUO0FBRUEsUUFBTSxhQUFhLGVBQWU7QUFDbEMsTUFBSSxXQUFXLE9BQU87QUFDcEIsVUFBTSxJQUFJLE1BQU0sZUFBZSxXQUFXLEtBQUssRUFBRTtBQUFBLEVBQ25EO0FBRUEsUUFBTSxVQUFVO0FBQUEsSUFDZCxnQkFBZ0I7QUFBQSxJQUNoQixjQUFjLHVCQUF1QjtBQUFBLElBQ3JDLEdBQUcsV0FBVztBQUFBLEVBQ2hCO0FBRUEsUUFBTSxNQUFNLEdBQUcsZUFBZSxFQUFFLFlBQVk7QUFFNUMsUUFBTSxXQUFXLE1BQU0sY0FBTSxJQUFpQixLQUFLO0FBQUEsSUFDakQ7QUFBQSxJQUNBLFNBQVM7QUFBQTtBQUFBLEVBQ1gsQ0FBQztBQUVELFNBQU8sU0FBUztBQUNsQjtBQTlEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
