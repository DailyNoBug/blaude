#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  Login,
  init_login
} from "./chunk-X3D2TW57.mjs";
import {
  init_browser,
  openBrowser
} from "./chunk-IAEMXMG4.mjs";
import {
  createElement,
  init_react
} from "./chunk-TEJH3H3H.mjs";
import {
  getClaudeAIOAuthTokens,
  getOauthProfileFromOauthToken,
  init_auth,
  init_getOauthProfile,
  isClaudeAISubscriber
} from "./chunk-NKGQGSP5.mjs";
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/commands/upgrade/upgrade.tsx
async function call(onDone, context) {
  try {
    if (isClaudeAISubscriber()) {
      const tokens = getClaudeAIOAuthTokens();
      let isMax20x = false;
      if (tokens?.subscriptionType && tokens?.rateLimitTier) {
        isMax20x = tokens.subscriptionType === "max" && tokens.rateLimitTier === "default_claude_max_20x";
      } else if (tokens?.accessToken) {
        const profile = await getOauthProfileFromOauthToken(tokens.accessToken);
        isMax20x = profile?.organization?.organization_type === "claude_max" && profile?.organization?.rate_limit_tier === "default_claude_max_20x";
      }
      if (isMax20x) {
        setTimeout(onDone, 0, "You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account.");
        return null;
      }
    }
    const url = "https://claude.ai/upgrade/max";
    await openBrowser(url);
    return /* @__PURE__ */ createElement(Login, { startingMessage: "Starting new login following /upgrade. Exit with Ctrl-C to use existing account.", onDone: (success) => {
      context.onChangeAPIKey();
      onDone(success ? "Login successful" : "Login interrupted");
    } });
  } catch (error) {
    logError(error);
    setTimeout(onDone, 0, "Failed to open browser. Please visit https://claude.ai/upgrade/max to upgrade.");
  }
  return null;
}
var init_upgrade = __esm({
  "src/commands/upgrade/upgrade.tsx"() {
    init_react();
    init_getOauthProfile();
    init_auth();
    init_browser();
    init_log();
    init_login();
  }
});

export {
  call,
  init_upgrade
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL3VwZ3JhZGUvdXBncmFkZS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBMb2NhbEpTWENvbW1hbmRDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29tbWFuZHMuanMnXG5pbXBvcnQgeyBnZXRPYXV0aFByb2ZpbGVGcm9tT2F1dGhUb2tlbiB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29hdXRoL2dldE9hdXRoUHJvZmlsZS5qcydcbmltcG9ydCB0eXBlIHsgTG9jYWxKU1hDb21tYW5kT25Eb25lIH0gZnJvbSAnLi4vLi4vdHlwZXMvY29tbWFuZC5qcydcbmltcG9ydCB7XG4gIGdldENsYXVkZUFJT0F1dGhUb2tlbnMsXG4gIGlzQ2xhdWRlQUlTdWJzY3JpYmVyLFxufSBmcm9tICcuLi8uLi91dGlscy9hdXRoLmpzJ1xuaW1wb3J0IHsgb3BlbkJyb3dzZXIgfSBmcm9tICcuLi8uLi91dGlscy9icm93c2VyLmpzJ1xuaW1wb3J0IHsgbG9nRXJyb3IgfSBmcm9tICcuLi8uLi91dGlscy9sb2cuanMnXG5pbXBvcnQgeyBMb2dpbiB9IGZyb20gJy4uL2xvZ2luL2xvZ2luLmpzJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsbChcbiAgb25Eb25lOiBMb2NhbEpTWENvbW1hbmRPbkRvbmUsXG4gIGNvbnRleHQ6IExvY2FsSlNYQ29tbWFuZENvbnRleHQsXG4pOiBQcm9taXNlPFJlYWN0LlJlYWN0Tm9kZSB8IG51bGw+IHtcbiAgdHJ5IHtcbiAgICAvLyBDaGVjayBpZiB1c2VyIGlzIGFscmVhZHkgb24gdGhlIGhpZ2hlc3QgTWF4IHBsYW4gKDIweClcbiAgICBpZiAoaXNDbGF1ZGVBSVN1YnNjcmliZXIoKSkge1xuICAgICAgY29uc3QgdG9rZW5zID0gZ2V0Q2xhdWRlQUlPQXV0aFRva2VucygpXG4gICAgICBsZXQgaXNNYXgyMHggPSBmYWxzZVxuXG4gICAgICBpZiAodG9rZW5zPy5zdWJzY3JpcHRpb25UeXBlICYmIHRva2Vucz8ucmF0ZUxpbWl0VGllcikge1xuICAgICAgICBpc01heDIweCA9XG4gICAgICAgICAgdG9rZW5zLnN1YnNjcmlwdGlvblR5cGUgPT09ICdtYXgnICYmXG4gICAgICAgICAgdG9rZW5zLnJhdGVMaW1pdFRpZXIgPT09ICdkZWZhdWx0X2NsYXVkZV9tYXhfMjB4J1xuICAgICAgfSBlbHNlIGlmICh0b2tlbnM/LmFjY2Vzc1Rva2VuKSB7XG4gICAgICAgIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCBnZXRPYXV0aFByb2ZpbGVGcm9tT2F1dGhUb2tlbih0b2tlbnMuYWNjZXNzVG9rZW4pXG4gICAgICAgIGlzTWF4MjB4ID1cbiAgICAgICAgICBwcm9maWxlPy5vcmdhbml6YXRpb24/Lm9yZ2FuaXphdGlvbl90eXBlID09PSAnY2xhdWRlX21heCcgJiZcbiAgICAgICAgICBwcm9maWxlPy5vcmdhbml6YXRpb24/LnJhdGVfbGltaXRfdGllciA9PT0gJ2RlZmF1bHRfY2xhdWRlX21heF8yMHgnXG4gICAgICB9XG5cbiAgICAgIGlmIChpc01heDIweCkge1xuICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgIG9uRG9uZSxcbiAgICAgICAgICAwLFxuICAgICAgICAgICdZb3UgYXJlIGFscmVhZHkgb24gdGhlIGhpZ2hlc3QgTWF4IHN1YnNjcmlwdGlvbiBwbGFuLiBGb3IgYWRkaXRpb25hbCB1c2FnZSwgcnVuIC9sb2dpbiB0byBzd2l0Y2ggdG8gYW4gQVBJIHVzYWdlLWJpbGxlZCBhY2NvdW50LicsXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9jbGF1ZGUuYWkvdXBncmFkZS9tYXgnXG4gICAgYXdhaXQgb3BlbkJyb3dzZXIodXJsKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMb2dpblxuICAgICAgICBzdGFydGluZ01lc3NhZ2U9e1xuICAgICAgICAgICdTdGFydGluZyBuZXcgbG9naW4gZm9sbG93aW5nIC91cGdyYWRlLiBFeGl0IHdpdGggQ3RybC1DIHRvIHVzZSBleGlzdGluZyBhY2NvdW50LidcbiAgICAgICAgfVxuICAgICAgICBvbkRvbmU9e3N1Y2Nlc3MgPT4ge1xuICAgICAgICAgIGNvbnRleHQub25DaGFuZ2VBUElLZXkoKVxuICAgICAgICAgIG9uRG9uZShzdWNjZXNzID8gJ0xvZ2luIHN1Y2Nlc3NmdWwnIDogJ0xvZ2luIGludGVycnVwdGVkJylcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZ0Vycm9yKGVycm9yIGFzIEVycm9yKVxuICAgIHNldFRpbWVvdXQoXG4gICAgICBvbkRvbmUsXG4gICAgICAwLFxuICAgICAgJ0ZhaWxlZCB0byBvcGVuIGJyb3dzZXIuIFBsZWFzZSB2aXNpdCBodHRwczovL2NsYXVkZS5haS91cGdyYWRlL21heCB0byB1cGdyYWRlLicsXG4gICAgKVxuICB9XG4gIHJldHVybiBudWxsXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWUEsZUFBc0JBLEtBQ3BCQyxRQUNBQyxTQUNpQztBQUNqQyxNQUFJO0FBRUYsUUFBSUMscUJBQXFCLEdBQUc7QUFDMUIsWUFBTUMsU0FBU0MsdUJBQXVCO0FBQ3RDLFVBQUlDLFdBQVc7QUFFZixVQUFJRixRQUFRRyxvQkFBb0JILFFBQVFJLGVBQWU7QUFDckRGLG1CQUNFRixPQUFPRyxxQkFBcUIsU0FDNUJILE9BQU9JLGtCQUFrQjtNQUM3QixXQUFXSixRQUFRSyxhQUFhO0FBQzlCLGNBQU1DLFVBQVUsTUFBTUMsOEJBQThCUCxPQUFPSyxXQUFXO0FBQ3RFSCxtQkFDRUksU0FBU0UsY0FBY0Msc0JBQXNCLGdCQUM3Q0gsU0FBU0UsY0FBY0Usb0JBQW9CO01BQy9DO0FBRUEsVUFBSVIsVUFBVTtBQUNaUyxtQkFDRWQsUUFDQSxHQUNBLGtJQUNGO0FBQ0EsZUFBTztNQUNUO0lBQ0Y7QUFFQSxVQUFNZSxNQUFNO0FBQ1osVUFBTUMsWUFBWUQsR0FBRztBQUVyQixXQUNFLDhCQUFDLFNBQ0MsaUJBQ0Usb0ZBRUYsUUFBUUUsYUFBVztBQUNqQmhCLGNBQVFpQixlQUFlO0FBQ3ZCbEIsYUFBT2lCLFVBQVUscUJBQXFCLG1CQUFtQjtJQUMzRCxHQUFFO0VBR1IsU0FBU0UsT0FBTztBQUNkQyxhQUFTRCxLQUFjO0FBQ3ZCTCxlQUNFZCxRQUNBLEdBQ0EsZ0ZBQ0Y7RUFDRjtBQUNBLFNBQU87QUFDVDtBQWxFQTs7O0FBRUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTs7OyIsCiAgIm5hbWVzIjogWyJjYWxsIiwgIm9uRG9uZSIsICJjb250ZXh0IiwgImlzQ2xhdWRlQUlTdWJzY3JpYmVyIiwgInRva2VucyIsICJnZXRDbGF1ZGVBSU9BdXRoVG9rZW5zIiwgImlzTWF4MjB4IiwgInN1YnNjcmlwdGlvblR5cGUiLCAicmF0ZUxpbWl0VGllciIsICJhY2Nlc3NUb2tlbiIsICJwcm9maWxlIiwgImdldE9hdXRoUHJvZmlsZUZyb21PYXV0aFRva2VuIiwgIm9yZ2FuaXphdGlvbiIsICJvcmdhbml6YXRpb25fdHlwZSIsICJyYXRlX2xpbWl0X3RpZXIiLCAic2V0VGltZW91dCIsICJ1cmwiLCAib3BlbkJyb3dzZXIiLCAic3VjY2VzcyIsICJvbkNoYW5nZUFQSUtleSIsICJlcnJvciIsICJsb2dFcnJvciJdCn0K
