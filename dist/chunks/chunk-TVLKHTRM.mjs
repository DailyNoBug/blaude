#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_wrapper,
  wrapper_default
} from "./chunk-Y6HBFSUU.mjs";
import {
  checkAndRefreshOAuthTokenIfNeeded,
  getClaudeAIOAuthTokens,
  getFeatureValue_CACHED_MAY_BE_STALE,
  getUserAgent,
  init_auth,
  init_growthbook,
  init_http,
  isAnthropicAuthEnabled
} from "./chunk-Z6CSO4BY.mjs";
import {
  getWebSocketProxyAgent,
  getWebSocketProxyUrl,
  getWebSocketTLSOptions,
  init_mtls,
  init_proxy
} from "./chunk-DNXEQXI7.mjs";
import {
  getOauthConfig,
  init_oauth
} from "./chunk-JXCG2JDO.mjs";
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import {
  init_debug,
  init_slowOperations,
  jsonParse,
  jsonStringify,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/services/voiceStreamSTT.ts
function isVoiceStreamAvailable() {
  if (!isAnthropicAuthEnabled()) {
    return false;
  }
  const tokens = getClaudeAIOAuthTokens();
  return tokens !== null && tokens.accessToken !== null;
}
async function connectVoiceStream(callbacks, options) {
  await checkAndRefreshOAuthTokenIfNeeded();
  const tokens = getClaudeAIOAuthTokens();
  if (!tokens?.accessToken) {
    logForDebugging("[voice_stream] No OAuth token available");
    return null;
  }
  const wsBaseUrl = process.env.VOICE_STREAM_BASE_URL || getOauthConfig().BASE_API_URL.replace("https://", "wss://").replace("http://", "ws://");
  if (process.env.VOICE_STREAM_BASE_URL) {
    logForDebugging(
      `[voice_stream] Using VOICE_STREAM_BASE_URL override: ${process.env.VOICE_STREAM_BASE_URL}`
    );
  }
  const params = new URLSearchParams({
    encoding: "linear16",
    sample_rate: "16000",
    channels: "1",
    endpointing_ms: "300",
    utterance_end_ms: "1000",
    language: options?.language ?? "en"
  });
  const isNova3 = getFeatureValue_CACHED_MAY_BE_STALE(
    "tengu_cobalt_frost",
    false
  );
  if (isNova3) {
    params.set("use_conversation_engine", "true");
    params.set("stt_provider", "deepgram-nova3");
    logForDebugging("[voice_stream] Nova 3 gate enabled (tengu_cobalt_frost)");
  }
  if (options?.keyterms?.length) {
    for (const term of options.keyterms) {
      params.append("keyterms", term);
    }
  }
  const url = `${wsBaseUrl}${VOICE_STREAM_PATH}?${params.toString()}`;
  logForDebugging(`[voice_stream] Connecting to ${url}`);
  const headers = {
    Authorization: `Bearer ${tokens.accessToken}`,
    "User-Agent": getUserAgent(),
    "x-app": "cli"
  };
  const tlsOptions = getWebSocketTLSOptions();
  const wsOptions = typeof Bun !== "undefined" ? {
    headers,
    proxy: getWebSocketProxyUrl(url),
    tls: tlsOptions || void 0
  } : { headers, agent: getWebSocketProxyAgent(url), ...tlsOptions };
  const ws = new wrapper_default(url, wsOptions);
  let keepaliveTimer = null;
  let connected = false;
  let finalized = false;
  let finalizing = false;
  let upgradeRejected = false;
  let resolveFinalize = null;
  let cancelNoDataTimer = null;
  const connection = {
    send(audioChunk) {
      if (ws.readyState !== wrapper_default.OPEN) {
        return;
      }
      if (finalized) {
        logForDebugging(
          `[voice_stream] Dropping audio chunk after CloseStream: ${String(audioChunk.length)} bytes`
        );
        return;
      }
      logForDebugging(
        `[voice_stream] Sending audio chunk: ${String(audioChunk.length)} bytes`
      );
      ws.send(Buffer.from(audioChunk));
    },
    finalize() {
      if (finalizing || finalized) {
        return Promise.resolve("ws_already_closed");
      }
      finalizing = true;
      return new Promise((resolve) => {
        const safetyTimer = setTimeout(
          () => resolveFinalize?.("safety_timeout"),
          FINALIZE_TIMEOUTS_MS.safety
        );
        const noDataTimer = setTimeout(
          () => resolveFinalize?.("no_data_timeout"),
          FINALIZE_TIMEOUTS_MS.noData
        );
        cancelNoDataTimer = () => {
          clearTimeout(noDataTimer);
          cancelNoDataTimer = null;
        };
        resolveFinalize = (source) => {
          clearTimeout(safetyTimer);
          clearTimeout(noDataTimer);
          resolveFinalize = null;
          cancelNoDataTimer = null;
          if (lastTranscriptText) {
            logForDebugging(
              `[voice_stream] Promoting unreported interim before ${source} resolve`
            );
            const t = lastTranscriptText;
            lastTranscriptText = "";
            callbacks.onTranscript(t, true);
          }
          logForDebugging(`[voice_stream] Finalize resolved via ${source}`);
          resolve(source);
        };
        if (ws.readyState === wrapper_default.CLOSED || ws.readyState === wrapper_default.CLOSING) {
          resolveFinalize("ws_already_closed");
          return;
        }
        setTimeout(() => {
          finalized = true;
          if (ws.readyState === wrapper_default.OPEN) {
            logForDebugging("[voice_stream] Sending CloseStream (finalize)");
            ws.send(CLOSE_STREAM_MSG);
          }
        }, 0);
      });
    },
    close() {
      finalized = true;
      if (keepaliveTimer) {
        clearInterval(keepaliveTimer);
        keepaliveTimer = null;
      }
      connected = false;
      if (ws.readyState === wrapper_default.OPEN) {
        ws.close();
      }
    },
    isConnected() {
      return connected && ws.readyState === wrapper_default.OPEN;
    }
  };
  ws.on("open", () => {
    logForDebugging("[voice_stream] WebSocket connected");
    connected = true;
    logForDebugging("[voice_stream] Sending initial KeepAlive");
    ws.send(KEEPALIVE_MSG);
    keepaliveTimer = setInterval(
      (ws2) => {
        if (ws2.readyState === wrapper_default.OPEN) {
          logForDebugging("[voice_stream] Sending periodic KeepAlive");
          ws2.send(KEEPALIVE_MSG);
        }
      },
      KEEPALIVE_INTERVAL_MS,
      ws
    );
    callbacks.onReady(connection);
  });
  let lastTranscriptText = "";
  ws.on("message", (raw) => {
    const text = raw.toString();
    logForDebugging(
      `[voice_stream] Message received (${String(text.length)} chars): ${text.slice(0, 200)}`
    );
    let msg;
    try {
      msg = jsonParse(text);
    } catch {
      return;
    }
    switch (msg.type) {
      case "TranscriptText": {
        const transcript = msg.data;
        logForDebugging(`[voice_stream] TranscriptText: "${transcript ?? ""}"`);
        if (finalized) {
          cancelNoDataTimer?.();
        }
        if (transcript) {
          if (!isNova3 && lastTranscriptText) {
            const prev = lastTranscriptText.trimStart();
            const next = transcript.trimStart();
            if (prev && next && !next.startsWith(prev) && !prev.startsWith(next)) {
              logForDebugging(
                `[voice_stream] Auto-finalizing previous segment (new segment detected): "${lastTranscriptText}"`
              );
              callbacks.onTranscript(lastTranscriptText, true);
            }
          }
          lastTranscriptText = transcript;
          callbacks.onTranscript(transcript, false);
        }
        break;
      }
      case "TranscriptEndpoint": {
        logForDebugging(
          `[voice_stream] TranscriptEndpoint received, lastTranscriptText="${lastTranscriptText}"`
        );
        const finalText = lastTranscriptText;
        lastTranscriptText = "";
        if (finalText) {
          callbacks.onTranscript(finalText, true);
        }
        if (finalized) {
          resolveFinalize?.("post_closestream_endpoint");
        }
        break;
      }
      case "TranscriptError": {
        const desc = msg.description ?? msg.error_code ?? "unknown transcription error";
        logForDebugging(`[voice_stream] TranscriptError: ${desc}`);
        if (!finalizing) {
          callbacks.onError(desc);
        }
        break;
      }
      case "error": {
        const errorDetail = msg.message ?? jsonStringify(msg);
        logForDebugging(`[voice_stream] Server error: ${errorDetail}`);
        if (!finalizing) {
          callbacks.onError(errorDetail);
        }
        break;
      }
      default:
        break;
    }
  });
  ws.on("close", (code, reason) => {
    const reasonStr = reason?.toString() ?? "";
    logForDebugging(
      `[voice_stream] WebSocket closed: code=${String(code)} reason="${reasonStr}"`
    );
    connected = false;
    if (keepaliveTimer) {
      clearInterval(keepaliveTimer);
      keepaliveTimer = null;
    }
    if (lastTranscriptText) {
      logForDebugging(
        "[voice_stream] Promoting unreported interim transcript to final on close"
      );
      const finalText = lastTranscriptText;
      lastTranscriptText = "";
      callbacks.onTranscript(finalText, true);
    }
    resolveFinalize?.("ws_close");
    if (!finalizing && !upgradeRejected && code !== 1e3 && code !== 1005) {
      callbacks.onError(
        `Connection closed: code ${String(code)}${reasonStr ? ` \u2014 ${reasonStr}` : ""}`
      );
    }
    callbacks.onClose();
  });
  ws.on("unexpected-response", (req, res) => {
    const status = res.statusCode ?? 0;
    if (status === 101) {
      logForDebugging(
        "[voice_stream] unexpected-response fired with 101; ignoring"
      );
      return;
    }
    logForDebugging(
      `[voice_stream] Upgrade rejected: status=${String(status)} cf-mitigated=${String(res.headers["cf-mitigated"])} cf-ray=${String(res.headers["cf-ray"])}`
    );
    upgradeRejected = true;
    res.resume();
    req.destroy();
    if (finalizing) return;
    callbacks.onError(
      `WebSocket upgrade rejected with HTTP ${String(status)}`,
      { fatal: status >= 400 && status < 500 }
    );
  });
  ws.on("error", (err) => {
    logError(err);
    logForDebugging(`[voice_stream] WebSocket error: ${err.message}`);
    if (!finalizing) {
      callbacks.onError(`Voice stream connection error: ${err.message}`);
    }
  });
  return connection;
}
var KEEPALIVE_MSG, CLOSE_STREAM_MSG, VOICE_STREAM_PATH, KEEPALIVE_INTERVAL_MS, FINALIZE_TIMEOUTS_MS;
var init_voiceStreamSTT = __esm({
  "src/services/voiceStreamSTT.ts"() {
    init_wrapper();
    init_oauth();
    init_auth();
    init_debug();
    init_http();
    init_log();
    init_mtls();
    init_proxy();
    init_slowOperations();
    init_growthbook();
    KEEPALIVE_MSG = '{"type":"KeepAlive"}';
    CLOSE_STREAM_MSG = '{"type":"CloseStream"}';
    VOICE_STREAM_PATH = "/api/ws/speech_to_text/voice_stream";
    KEEPALIVE_INTERVAL_MS = 8e3;
    FINALIZE_TIMEOUTS_MS = {
      safety: 5e3,
      noData: 1500
    };
  }
});

export {
  FINALIZE_TIMEOUTS_MS,
  isVoiceStreamAvailable,
  connectVoiceStream,
  init_voiceStreamSTT
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3NlcnZpY2VzL3ZvaWNlU3RyZWFtU1RULnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBBbnRocm9waWMgdm9pY2Vfc3RyZWFtIHNwZWVjaC10by10ZXh0IGNsaWVudCBmb3IgcHVzaC10by10YWxrLlxuLy9cbi8vIE9ubHkgcmVhY2hhYmxlIGluIGFudCBidWlsZHMgKGdhdGVkIGJ5IGZlYXR1cmUoJ1ZPSUNFX01PREUnKSBpbiB1c2VWb2ljZS50cyBpbXBvcnQpLlxuLy9cbi8vIENvbm5lY3RzIHRvIEFudGhyb3BpYydzIHZvaWNlX3N0cmVhbSBXZWJTb2NrZXQgZW5kcG9pbnQgdXNpbmcgdGhlIHNhbWVcbi8vIE9BdXRoIGNyZWRlbnRpYWxzIGFzIENsYXVkZSBDb2RlLiAgVGhlIGVuZHBvaW50IHVzZXMgY29udmVyc2F0aW9uX2VuZ2luZVxuLy8gYmFja2VkIG1vZGVscyBmb3Igc3BlZWNoLXRvLXRleHQuICBEZXNpZ25lZCBmb3IgaG9sZC10by10YWxrOiBob2xkIHRoZVxuLy8ga2V5YmluZGluZyB0byByZWNvcmQsIHJlbGVhc2UgdG8gc3RvcCBhbmQgc3VibWl0LlxuLy9cbi8vIFRoZSB3aXJlIHByb3RvY29sIHVzZXMgSlNPTiBjb250cm9sIG1lc3NhZ2VzIChLZWVwQWxpdmUsIENsb3NlU3RyZWFtKSBhbmRcbi8vIGJpbmFyeSBhdWRpbyBmcmFtZXMuICBUaGUgc2VydmVyIHJlc3BvbmRzIHdpdGggVHJhbnNjcmlwdFRleHQgYW5kXG4vLyBUcmFuc2NyaXB0RW5kcG9pbnQgSlNPTiBtZXNzYWdlcy5cblxuaW1wb3J0IHR5cGUgeyBDbGllbnRSZXF1ZXN0LCBJbmNvbWluZ01lc3NhZ2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IFdlYlNvY2tldCBmcm9tICd3cydcbmltcG9ydCB7IGdldE9hdXRoQ29uZmlnIH0gZnJvbSAnLi4vY29uc3RhbnRzL29hdXRoLmpzJ1xuaW1wb3J0IHtcbiAgY2hlY2tBbmRSZWZyZXNoT0F1dGhUb2tlbklmTmVlZGVkLFxuICBnZXRDbGF1ZGVBSU9BdXRoVG9rZW5zLFxuICBpc0FudGhyb3BpY0F1dGhFbmFibGVkLFxufSBmcm9tICcuLi91dGlscy9hdXRoLmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi4vdXRpbHMvZGVidWcuanMnXG5pbXBvcnQgeyBnZXRVc2VyQWdlbnQgfSBmcm9tICcuLi91dGlscy9odHRwLmpzJ1xuaW1wb3J0IHsgbG9nRXJyb3IgfSBmcm9tICcuLi91dGlscy9sb2cuanMnXG5pbXBvcnQgeyBnZXRXZWJTb2NrZXRUTFNPcHRpb25zIH0gZnJvbSAnLi4vdXRpbHMvbXRscy5qcydcbmltcG9ydCB7IGdldFdlYlNvY2tldFByb3h5QWdlbnQsIGdldFdlYlNvY2tldFByb3h5VXJsIH0gZnJvbSAnLi4vdXRpbHMvcHJveHkuanMnXG5pbXBvcnQgeyBqc29uUGFyc2UsIGpzb25TdHJpbmdpZnkgfSBmcm9tICcuLi91dGlscy9zbG93T3BlcmF0aW9ucy5qcydcblxuY29uc3QgS0VFUEFMSVZFX01TRyA9ICd7XCJ0eXBlXCI6XCJLZWVwQWxpdmVcIn0nXG5jb25zdCBDTE9TRV9TVFJFQU1fTVNHID0gJ3tcInR5cGVcIjpcIkNsb3NlU3RyZWFtXCJ9J1xuXG5pbXBvcnQgeyBnZXRGZWF0dXJlVmFsdWVfQ0FDSEVEX01BWV9CRV9TVEFMRSB9IGZyb20gJy4vYW5hbHl0aWNzL2dyb3d0aGJvb2suanMnXG5cbi8vIFx1MjUwMFx1MjUwMFx1MjUwMCBDb25zdGFudHMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cbmNvbnN0IFZPSUNFX1NUUkVBTV9QQVRIID0gJy9hcGkvd3Mvc3BlZWNoX3RvX3RleHQvdm9pY2Vfc3RyZWFtJ1xuXG5jb25zdCBLRUVQQUxJVkVfSU5URVJWQUxfTVMgPSA4XzAwMFxuXG4vLyBmaW5hbGl6ZSgpIHJlc29sdXRpb24gdGltZXJzLiBgbm9EYXRhYCBmaXJlcyB3aGVuIG5vIFRyYW5zY3JpcHRUZXh0XG4vLyBhcnJpdmVzIHBvc3QtQ2xvc2VTdHJlYW0gXHUyMDE0IHRoZSBzZXJ2ZXIgaGFzIG5vdGhpbmc7IGRvbid0IHdhaXQgb3V0IHRoZVxuLy8gZnVsbCB+My01cyBXUyB0ZWFyZG93biB0byBjb25maXJtIGVtcHRpbmVzcy4gYHNhZmV0eWAgaXMgdGhlIGxhc3QtXG4vLyByZXNvcnQgY2FwIGlmIHRoZSBXUyBoYW5ncy4gRXhwb3J0ZWQgc28gdGVzdHMgY2FuIHNob3J0ZW4gdGhlbS5cbmV4cG9ydCBjb25zdCBGSU5BTElaRV9USU1FT1VUU19NUyA9IHtcbiAgc2FmZXR5OiA1XzAwMCxcbiAgbm9EYXRhOiAxXzUwMCxcbn1cblxuLy8gXHUyNTAwXHUyNTAwXHUyNTAwIFR5cGVzIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG5leHBvcnQgdHlwZSBWb2ljZVN0cmVhbUNhbGxiYWNrcyA9IHtcbiAgb25UcmFuc2NyaXB0OiAodGV4dDogc3RyaW5nLCBpc0ZpbmFsOiBib29sZWFuKSA9PiB2b2lkXG4gIG9uRXJyb3I6IChlcnJvcjogc3RyaW5nLCBvcHRzPzogeyBmYXRhbD86IGJvb2xlYW4gfSkgPT4gdm9pZFxuICBvbkNsb3NlOiAoKSA9PiB2b2lkXG4gIG9uUmVhZHk6IChjb25uZWN0aW9uOiBWb2ljZVN0cmVhbUNvbm5lY3Rpb24pID0+IHZvaWRcbn1cblxuLy8gSG93IGZpbmFsaXplKCkgcmVzb2x2ZWQuIGBub19kYXRhX3RpbWVvdXRgIG1lYW5zIHplcm8gc2VydmVyIG1lc3NhZ2VzXG4vLyBhZnRlciBDbG9zZVN0cmVhbSBcdTIwMTQgdGhlIHNpbGVudC1kcm9wIHNpZ25hdHVyZSAoYW50aHJvcGljcy9hbnRocm9waWMjMjg3MDA4KS5cbmV4cG9ydCB0eXBlIEZpbmFsaXplU291cmNlID1cbiAgfCAncG9zdF9jbG9zZXN0cmVhbV9lbmRwb2ludCdcbiAgfCAnbm9fZGF0YV90aW1lb3V0J1xuICB8ICdzYWZldHlfdGltZW91dCdcbiAgfCAnd3NfY2xvc2UnXG4gIHwgJ3dzX2FscmVhZHlfY2xvc2VkJ1xuXG5leHBvcnQgdHlwZSBWb2ljZVN0cmVhbUNvbm5lY3Rpb24gPSB7XG4gIHNlbmQ6IChhdWRpb0NodW5rOiBCdWZmZXIpID0+IHZvaWRcbiAgZmluYWxpemU6ICgpID0+IFByb21pc2U8RmluYWxpemVTb3VyY2U+XG4gIGNsb3NlOiAoKSA9PiB2b2lkXG4gIGlzQ29ubmVjdGVkOiAoKSA9PiBib29sZWFuXG59XG5cbi8vIFRoZSB2b2ljZV9zdHJlYW0gZW5kcG9pbnQgcmV0dXJucyB0cmFuc2NyaXB0IGNodW5rcyBhbmQgZW5kcG9pbnQgbWFya2Vycy5cbnR5cGUgVm9pY2VTdHJlYW1UcmFuc2NyaXB0VGV4dCA9IHtcbiAgdHlwZTogJ1RyYW5zY3JpcHRUZXh0J1xuICBkYXRhOiBzdHJpbmdcbn1cblxudHlwZSBWb2ljZVN0cmVhbVRyYW5zY3JpcHRFbmRwb2ludCA9IHtcbiAgdHlwZTogJ1RyYW5zY3JpcHRFbmRwb2ludCdcbn1cblxudHlwZSBWb2ljZVN0cmVhbVRyYW5zY3JpcHRFcnJvciA9IHtcbiAgdHlwZTogJ1RyYW5zY3JpcHRFcnJvcidcbiAgZXJyb3JfY29kZT86IHN0cmluZ1xuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xufVxuXG50eXBlIFZvaWNlU3RyZWFtTWVzc2FnZSA9XG4gIHwgVm9pY2VTdHJlYW1UcmFuc2NyaXB0VGV4dFxuICB8IFZvaWNlU3RyZWFtVHJhbnNjcmlwdEVuZHBvaW50XG4gIHwgVm9pY2VTdHJlYW1UcmFuc2NyaXB0RXJyb3JcbiAgfCB7IHR5cGU6ICdlcnJvcic7IG1lc3NhZ2U/OiBzdHJpbmcgfVxuXG4vLyBcdTI1MDBcdTI1MDBcdTI1MDAgQXZhaWxhYmlsaXR5IFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG5leHBvcnQgZnVuY3Rpb24gaXNWb2ljZVN0cmVhbUF2YWlsYWJsZSgpOiBib29sZWFuIHtcbiAgLy8gdm9pY2Vfc3RyZWFtIHVzZXMgdGhlIHNhbWUgT0F1dGggYXMgQ2xhdWRlIENvZGUgXHUyMDE0IGF2YWlsYWJsZSB3aGVuIHRoZVxuICAvLyB1c2VyIGlzIGF1dGhlbnRpY2F0ZWQgd2l0aCBBbnRocm9waWMgKENsYXVkZS5haSBzdWJzY3JpYmVyIG9yIGhhc1xuICAvLyB2YWxpZCBPQXV0aCB0b2tlbnMpLlxuICBpZiAoIWlzQW50aHJvcGljQXV0aEVuYWJsZWQoKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGNvbnN0IHRva2VucyA9IGdldENsYXVkZUFJT0F1dGhUb2tlbnMoKVxuICByZXR1cm4gdG9rZW5zICE9PSBudWxsICYmIHRva2Vucy5hY2Nlc3NUb2tlbiAhPT0gbnVsbFxufVxuXG4vLyBcdTI1MDBcdTI1MDBcdTI1MDAgQ29ubmVjdGlvbiBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RWb2ljZVN0cmVhbShcbiAgY2FsbGJhY2tzOiBWb2ljZVN0cmVhbUNhbGxiYWNrcyxcbiAgb3B0aW9ucz86IHsgbGFuZ3VhZ2U/OiBzdHJpbmc7IGtleXRlcm1zPzogc3RyaW5nW10gfSxcbik6IFByb21pc2U8Vm9pY2VTdHJlYW1Db25uZWN0aW9uIHwgbnVsbD4ge1xuICAvLyBFbnN1cmUgT0F1dGggdG9rZW4gaXMgZnJlc2ggYmVmb3JlIGNvbm5lY3RpbmdcbiAgYXdhaXQgY2hlY2tBbmRSZWZyZXNoT0F1dGhUb2tlbklmTmVlZGVkKClcblxuICBjb25zdCB0b2tlbnMgPSBnZXRDbGF1ZGVBSU9BdXRoVG9rZW5zKClcbiAgaWYgKCF0b2tlbnM/LmFjY2Vzc1Rva2VuKSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKCdbdm9pY2Vfc3RyZWFtXSBObyBPQXV0aCB0b2tlbiBhdmFpbGFibGUnKVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyB2b2ljZV9zdHJlYW0gaXMgYSBwcml2YXRlX2FwaSByb3V0ZSwgYnV0IC9hcGkvd3MvIGlzIGFsc28gZXhwb3NlZCBvblxuICAvLyB0aGUgYXBpLmFudGhyb3BpYy5jb20gbGlzdGVuZXIgKHNlcnZpY2VfZGVmaW5pdGlvbnMueWFtbCBwcml2YXRlLWFwaTpcbiAgLy8gdmlzaWJpbGl0eS5leHRlcm5hbDogdHJ1ZSkuIFdlIHRhcmdldCB0aGF0IGhvc3QgaW5zdGVhZCBvZiBjbGF1ZGUuYWlcbiAgLy8gYmVjYXVzZSB0aGUgY2xhdWRlLmFpIENGIHpvbmUgdXNlcyBUTFMgZmluZ2VycHJpbnRpbmcgYW5kIGNoYWxsZW5nZXNcbiAgLy8gbm9uLWJyb3dzZXIgY2xpZW50cyAoYW50aHJvcGljcy9jbGF1ZGUtY29kZSMzNDA5NCkuIFNhbWUgcHJpdmF0ZS1hcGlcbiAgLy8gcG9kLCBzYW1lIE9BdXRoIEJlYXJlciBhdXRoIFx1MjAxNCBqdXN0IGEgQ0Ygem9uZSB0aGF0IGRvZXNuJ3QgYmxvY2sgdXMuXG4gIC8vIERlc2t0b3AgZGljdGF0aW9uIHN0aWxsIHVzZXMgY2xhdWRlLmFpIChTd2lmdCBVUkxTZXNzaW9uIGhhcyBhXG4gIC8vIGJyb3dzZXItY2xhc3MgSkEzIGZpbmdlcnByaW50LCBzbyBDRiBsZXRzIGl0IHRocm91Z2gpLlxuICBjb25zdCB3c0Jhc2VVcmwgPVxuICAgIHByb2Nlc3MuZW52LlZPSUNFX1NUUkVBTV9CQVNFX1VSTCB8fFxuICAgIGdldE9hdXRoQ29uZmlnKClcbiAgICAgIC5CQVNFX0FQSV9VUkwucmVwbGFjZSgnaHR0cHM6Ly8nLCAnd3NzOi8vJylcbiAgICAgIC5yZXBsYWNlKCdodHRwOi8vJywgJ3dzOi8vJylcblxuICBpZiAocHJvY2Vzcy5lbnYuVk9JQ0VfU1RSRUFNX0JBU0VfVVJMKSB7XG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFt2b2ljZV9zdHJlYW1dIFVzaW5nIFZPSUNFX1NUUkVBTV9CQVNFX1VSTCBvdmVycmlkZTogJHtwcm9jZXNzLmVudi5WT0lDRV9TVFJFQU1fQkFTRV9VUkx9YCxcbiAgICApXG4gIH1cblxuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICBlbmNvZGluZzogJ2xpbmVhcjE2JyxcbiAgICBzYW1wbGVfcmF0ZTogJzE2MDAwJyxcbiAgICBjaGFubmVsczogJzEnLFxuICAgIGVuZHBvaW50aW5nX21zOiAnMzAwJyxcbiAgICB1dHRlcmFuY2VfZW5kX21zOiAnMTAwMCcsXG4gICAgbGFuZ3VhZ2U6IG9wdGlvbnM/Lmxhbmd1YWdlID8/ICdlbicsXG4gIH0pXG5cbiAgLy8gUm91dGUgdGhyb3VnaCBjb252ZXJzYXRpb24tZW5naW5lIHdpdGggRGVlcGdyYW0gTm92YSAzIChieXBhc3NpbmdcbiAgLy8gdGhlIHNlcnZlcidzIHByb2plY3RfYmVsbF92Ml9jb25maWcgR3Jvd3RoQm9vayBnYXRlKS4gVGhlIHNlcnZlclxuICAvLyBzaWRlIGlzIGFudGhyb3BpY3MvYW50aHJvcGljIzI3ODMyNyArICMyODEzNzI7IHRoaXMgbGV0cyB1cyByYW1wXG4gIC8vIGNsaWVudHMgaW5kZXBlbmRlbnRseS5cbiAgY29uc3QgaXNOb3ZhMyA9IGdldEZlYXR1cmVWYWx1ZV9DQUNIRURfTUFZX0JFX1NUQUxFKFxuICAgICd0ZW5ndV9jb2JhbHRfZnJvc3QnLFxuICAgIGZhbHNlLFxuICApXG4gIGlmIChpc05vdmEzKSB7XG4gICAgcGFyYW1zLnNldCgndXNlX2NvbnZlcnNhdGlvbl9lbmdpbmUnLCAndHJ1ZScpXG4gICAgcGFyYW1zLnNldCgnc3R0X3Byb3ZpZGVyJywgJ2RlZXBncmFtLW5vdmEzJylcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoJ1t2b2ljZV9zdHJlYW1dIE5vdmEgMyBnYXRlIGVuYWJsZWQgKHRlbmd1X2NvYmFsdF9mcm9zdCknKVxuICB9XG5cbiAgLy8gQXBwZW5kIGtleXRlcm1zIGFzIHF1ZXJ5IHBhcmFtcyBcdTIwMTQgdGhlIHZvaWNlX3N0cmVhbSBwcm94eSBmb3J3YXJkc1xuICAvLyB0aGVzZSB0byB0aGUgU1RUIHNlcnZpY2Ugd2hpY2ggYXBwbGllcyBhcHByb3ByaWF0ZSBib29zdGluZy5cbiAgaWYgKG9wdGlvbnM/LmtleXRlcm1zPy5sZW5ndGgpIHtcbiAgICBmb3IgKGNvbnN0IHRlcm0gb2Ygb3B0aW9ucy5rZXl0ZXJtcykge1xuICAgICAgcGFyYW1zLmFwcGVuZCgna2V5dGVybXMnLCB0ZXJtKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHVybCA9IGAke3dzQmFzZVVybH0ke1ZPSUNFX1NUUkVBTV9QQVRIfT8ke3BhcmFtcy50b1N0cmluZygpfWBcblxuICBsb2dGb3JEZWJ1Z2dpbmcoYFt2b2ljZV9zdHJlYW1dIENvbm5lY3RpbmcgdG8gJHt1cmx9YClcblxuICBjb25zdCBoZWFkZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbnMuYWNjZXNzVG9rZW59YCxcbiAgICAnVXNlci1BZ2VudCc6IGdldFVzZXJBZ2VudCgpLFxuICAgICd4LWFwcCc6ICdjbGknLFxuICB9XG5cbiAgY29uc3QgdGxzT3B0aW9ucyA9IGdldFdlYlNvY2tldFRMU09wdGlvbnMoKVxuICBjb25zdCB3c09wdGlvbnMgPVxuICAgIHR5cGVvZiBCdW4gIT09ICd1bmRlZmluZWQnXG4gICAgICA/IHtcbiAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICAgIHByb3h5OiBnZXRXZWJTb2NrZXRQcm94eVVybCh1cmwpLFxuICAgICAgICAgIHRsczogdGxzT3B0aW9ucyB8fCB1bmRlZmluZWQsXG4gICAgICAgIH1cbiAgICAgIDogeyBoZWFkZXJzLCBhZ2VudDogZ2V0V2ViU29ja2V0UHJveHlBZ2VudCh1cmwpLCAuLi50bHNPcHRpb25zIH1cblxuICBjb25zdCB3cyA9IG5ldyBXZWJTb2NrZXQodXJsLCB3c09wdGlvbnMpXG5cbiAgbGV0IGtlZXBhbGl2ZVRpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRJbnRlcnZhbD4gfCBudWxsID0gbnVsbFxuICBsZXQgY29ubmVjdGVkID0gZmFsc2VcbiAgLy8gU2V0IHRvIHRydWUgb25jZSBDbG9zZVN0cmVhbSBoYXMgYmVlbiBzZW50IChvciB0aGUgd3MgaXMgY2xvc2VkKS5cbiAgLy8gQWZ0ZXIgdGhpcywgZnVydGhlciBhdWRpbyBzZW5kcyBhcmUgZHJvcHBlZC5cbiAgbGV0IGZpbmFsaXplZCA9IGZhbHNlXG4gIC8vIFNldCB0byB0cnVlIHdoZW4gZmluYWxpemUoKSBpcyBmaXJzdCBjYWxsZWQsIHRvIHByZXZlbnQgZG91YmxlLWZpcmUuXG4gIGxldCBmaW5hbGl6aW5nID0gZmFsc2VcbiAgLy8gU2V0IHdoZW4gdGhlIEhUVFAgdXBncmFkZSB3YXMgcmVqZWN0ZWQgKHVuZXhwZWN0ZWQtcmVzcG9uc2UpLiBUaGVcbiAgLy8gY2xvc2UgZXZlbnQgdGhhdCBmb2xsb3dzICgxMDA2IGZyb20gb3VyIHJlcS5kZXN0cm95KCkpIGlzIGp1c3RcbiAgLy8gbWVjaGFuaWNhbCB0ZWFyZG93bjsgdGhlIHVwZ3JhZGUgaGFuZGxlciBhbHJlYWR5IHJlcG9ydGVkIHRoZSBlcnJvci5cbiAgbGV0IHVwZ3JhZGVSZWplY3RlZCA9IGZhbHNlXG4gIC8vIFJlc29sdmVzIGZpbmFsaXplKCkuIEZvdXIgdHJpZ2dlcnM6IFRyYW5zY3JpcHRFbmRwb2ludCBwb3N0LUNsb3NlU3RyZWFtXG4gIC8vICh+MzAwbXMpOyBuby1kYXRhIHRpbWVyICgxLjVzKTsgV1MgY2xvc2UgKH4zLTVzKTsgc2FmZXR5IHRpbWVyICg1cykuXG4gIGxldCByZXNvbHZlRmluYWxpemU6ICgoc291cmNlOiBGaW5hbGl6ZVNvdXJjZSkgPT4gdm9pZCkgfCBudWxsID0gbnVsbFxuICBsZXQgY2FuY2VsTm9EYXRhVGltZXI6ICgoKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsXG5cbiAgLy8gRGVmaW5lIHRoZSBjb25uZWN0aW9uIG9iamVjdCBiZWZvcmUgZXZlbnQgaGFuZGxlcnMgc28gaXQgY2FuIGJlIHBhc3NlZFxuICAvLyB0byBvblJlYWR5IHdoZW4gdGhlIFdlYlNvY2tldCBvcGVucy5cbiAgY29uc3QgY29ubmVjdGlvbjogVm9pY2VTdHJlYW1Db25uZWN0aW9uID0ge1xuICAgIHNlbmQoYXVkaW9DaHVuazogQnVmZmVyKTogdm9pZCB7XG4gICAgICBpZiAod3MucmVhZHlTdGF0ZSAhPT0gV2ViU29ja2V0Lk9QRU4pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoZmluYWxpemVkKSB7XG4gICAgICAgIC8vIEFmdGVyIENsb3NlU3RyZWFtIGhhcyBiZWVuIHNlbnQsIHRoZSBzZXJ2ZXIgcmVqZWN0cyBmdXJ0aGVyIGF1ZGlvLlxuICAgICAgICAvLyBEcm9wIHRoZSBjaHVuayB0byBhdm9pZCBhIHByb3RvY29sIGVycm9yLlxuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgYFt2b2ljZV9zdHJlYW1dIERyb3BwaW5nIGF1ZGlvIGNodW5rIGFmdGVyIENsb3NlU3RyZWFtOiAke1N0cmluZyhhdWRpb0NodW5rLmxlbmd0aCl9IGJ5dGVzYCxcbiAgICAgICAgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFt2b2ljZV9zdHJlYW1dIFNlbmRpbmcgYXVkaW8gY2h1bms6ICR7U3RyaW5nKGF1ZGlvQ2h1bmsubGVuZ3RoKX0gYnl0ZXNgLFxuICAgICAgKVxuICAgICAgLy8gQ29weSB0aGUgYnVmZmVyIGJlZm9yZSBzZW5kaW5nOiBOQVBJIEJ1ZmZlciBvYmplY3RzIGZyb20gbmF0aXZlXG4gICAgICAvLyBtb2R1bGVzIG1heSBzaGFyZSBhIHBvb2xlZCBBcnJheUJ1ZmZlci4gIENyZWF0aW5nIGEgdmlldyB3aXRoXG4gICAgICAvLyBgbmV3IFVpbnQ4QXJyYXkoYnVmLmJ1ZmZlciwgb2Zmc2V0LCBsZW4pYCBjYW4gcmVmZXJlbmNlIHN0YWxlIG9yXG4gICAgICAvLyBvdmVybGFwcGluZyBtZW1vcnkgYnkgdGhlIHRpbWUgdGhlIHdzIGxpYnJhcnkgcmVhZHMgaXQuXG4gICAgICAvLyBgQnVmZmVyLmZyb20oKWAgbWFrZXMgYW4gb3duZWQgY29weSB0aGF0IHRoZSB3cyBsaWJyYXJ5IGNhbiBzYWZlbHlcbiAgICAgIC8vIGNvbnN1bWUgYXMgYSBiaW5hcnkgV2ViU29ja2V0IGZyYW1lLlxuICAgICAgd3Muc2VuZChCdWZmZXIuZnJvbShhdWRpb0NodW5rKSlcbiAgICB9LFxuICAgIGZpbmFsaXplKCk6IFByb21pc2U8RmluYWxpemVTb3VyY2U+IHtcbiAgICAgIGlmIChmaW5hbGl6aW5nIHx8IGZpbmFsaXplZCkge1xuICAgICAgICAvLyBBbHJlYWR5IGZpbmFsaXplZCBvciBXZWJTb2NrZXQgYWxyZWFkeSBjbG9zZWQgXHUyMDE0IHJlc29sdmUgaW1tZWRpYXRlbHkuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoJ3dzX2FscmVhZHlfY2xvc2VkJylcbiAgICAgIH1cbiAgICAgIGZpbmFsaXppbmcgPSB0cnVlXG5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxGaW5hbGl6ZVNvdXJjZT4ocmVzb2x2ZSA9PiB7XG4gICAgICAgIGNvbnN0IHNhZmV0eVRpbWVyID0gc2V0VGltZW91dChcbiAgICAgICAgICAoKSA9PiByZXNvbHZlRmluYWxpemU/Lignc2FmZXR5X3RpbWVvdXQnKSxcbiAgICAgICAgICBGSU5BTElaRV9USU1FT1VUU19NUy5zYWZldHksXG4gICAgICAgIClcbiAgICAgICAgY29uc3Qgbm9EYXRhVGltZXIgPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICgpID0+IHJlc29sdmVGaW5hbGl6ZT8uKCdub19kYXRhX3RpbWVvdXQnKSxcbiAgICAgICAgICBGSU5BTElaRV9USU1FT1VUU19NUy5ub0RhdGEsXG4gICAgICAgIClcbiAgICAgICAgY2FuY2VsTm9EYXRhVGltZXIgPSAoKSA9PiB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KG5vRGF0YVRpbWVyKVxuICAgICAgICAgIGNhbmNlbE5vRGF0YVRpbWVyID0gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZUZpbmFsaXplID0gKHNvdXJjZTogRmluYWxpemVTb3VyY2UpID0+IHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoc2FmZXR5VGltZXIpXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KG5vRGF0YVRpbWVyKVxuICAgICAgICAgIHJlc29sdmVGaW5hbGl6ZSA9IG51bGxcbiAgICAgICAgICBjYW5jZWxOb0RhdGFUaW1lciA9IG51bGxcbiAgICAgICAgICAvLyBMZWdhY3kgRGVlcGdyYW0gY2FuIGxlYXZlIGFuIGludGVyaW0gaW4gbGFzdFRyYW5zY3JpcHRUZXh0XG4gICAgICAgICAgLy8gd2l0aCBubyBUcmFuc2NyaXB0RW5kcG9pbnQgKHdlYnNvY2tldF9tYW5hZ2VyLnB5IHNlbmRzXG4gICAgICAgICAgLy8gVHJhbnNjcmlwdENodW5rIGFuZCBUcmFuc2NyaXB0RW5kcG9pbnQgYXMgaW5kZXBlbmRlbnRcbiAgICAgICAgICAvLyBjaGFubmVsIGl0ZW1zKS4gQWxsIHJlc29sdmUgdHJpZ2dlcnMgbXVzdCBwcm9tb3RlIGl0O1xuICAgICAgICAgIC8vIGNlbnRyYWxpemUgaGVyZS4gTm8tb3Agd2hlbiB0aGUgY2xvc2UgaGFuZGxlciBhbHJlYWR5IGRpZC5cbiAgICAgICAgICBpZiAobGFzdFRyYW5zY3JpcHRUZXh0KSB7XG4gICAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICAgIGBbdm9pY2Vfc3RyZWFtXSBQcm9tb3RpbmcgdW5yZXBvcnRlZCBpbnRlcmltIGJlZm9yZSAke3NvdXJjZX0gcmVzb2x2ZWAsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjb25zdCB0ID0gbGFzdFRyYW5zY3JpcHRUZXh0XG4gICAgICAgICAgICBsYXN0VHJhbnNjcmlwdFRleHQgPSAnJ1xuICAgICAgICAgICAgY2FsbGJhY2tzLm9uVHJhbnNjcmlwdCh0LCB0cnVlKVxuICAgICAgICAgIH1cbiAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoYFt2b2ljZV9zdHJlYW1dIEZpbmFsaXplIHJlc29sdmVkIHZpYSAke3NvdXJjZX1gKVxuICAgICAgICAgIHJlc29sdmUoc291cmNlKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIFdlYlNvY2tldCBpcyBhbHJlYWR5IGNsb3NlZCwgcmVzb2x2ZSBpbW1lZGlhdGVseS5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHdzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DTE9TRUQgfHxcbiAgICAgICAgICB3cy5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuQ0xPU0lOR1xuICAgICAgICApIHtcbiAgICAgICAgICByZXNvbHZlRmluYWxpemUoJ3dzX2FscmVhZHlfY2xvc2VkJylcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlZmVyIENsb3NlU3RyZWFtIHRvIHRoZSBuZXh0IGV2ZW50LWxvb3AgaXRlcmF0aW9uIHNvIGFueSBhdWRpb1xuICAgICAgICAvLyBjYWxsYmFja3MgYWxyZWFkeSBxdWV1ZWQgYnkgdGhlIG5hdGl2ZSByZWNvcmRpbmcgbW9kdWxlIGFyZSBmbHVzaGVkXG4gICAgICAgIC8vIHRvIHRoZSBXZWJTb2NrZXQgYmVmb3JlIHRoZSBzZXJ2ZXIgaXMgdG9sZCB0byBzdG9wIGFjY2VwdGluZyBhdWRpby5cbiAgICAgICAgLy8gV2l0aG91dCB0aGlzLCBzdG9wUmVjb3JkaW5nKCkgY2FuIHJldHVybiBzeW5jaHJvbm91c2x5IHdoaWxlIHRoZVxuICAgICAgICAvLyBuYXRpdmUgbW9kdWxlIHN0aWxsIGhhcyBhIHBlbmRpbmcgb25EYXRhIGNhbGxiYWNrIGluIHRoZSBldmVudCBxdWV1ZSxcbiAgICAgICAgLy8gY2F1c2luZyBhdWRpbyB0byBhcnJpdmUgYWZ0ZXIgQ2xvc2VTdHJlYW0uXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGZpbmFsaXplZCA9IHRydWVcbiAgICAgICAgICBpZiAod3MucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHtcbiAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZygnW3ZvaWNlX3N0cmVhbV0gU2VuZGluZyBDbG9zZVN0cmVhbSAoZmluYWxpemUpJylcbiAgICAgICAgICAgIHdzLnNlbmQoQ0xPU0VfU1RSRUFNX01TRylcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDApXG4gICAgICB9KVxuICAgIH0sXG4gICAgY2xvc2UoKTogdm9pZCB7XG4gICAgICBmaW5hbGl6ZWQgPSB0cnVlXG4gICAgICBpZiAoa2VlcGFsaXZlVGltZXIpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChrZWVwYWxpdmVUaW1lcilcbiAgICAgICAga2VlcGFsaXZlVGltZXIgPSBudWxsXG4gICAgICB9XG4gICAgICBjb25uZWN0ZWQgPSBmYWxzZVxuICAgICAgaWYgKHdzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOKSB7XG4gICAgICAgIHdzLmNsb3NlKClcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzQ29ubmVjdGVkKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIGNvbm5lY3RlZCAmJiB3cy5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuT1BFTlxuICAgIH0sXG4gIH1cblxuICB3cy5vbignb3BlbicsICgpID0+IHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoJ1t2b2ljZV9zdHJlYW1dIFdlYlNvY2tldCBjb25uZWN0ZWQnKVxuICAgIGNvbm5lY3RlZCA9IHRydWVcblxuICAgIC8vIFNlbmQgYW4gaW1tZWRpYXRlIEtlZXBBbGl2ZSBzbyB0aGUgc2VydmVyIGtub3dzIHRoZSBjbGllbnQgaXMgYWN0aXZlLlxuICAgIC8vIEF1ZGlvIGhhcmR3YXJlIGluaXRpYWxpc2F0aW9uIGNhbiB0YWtlID4xcywgc28gdGhpcyBwcmV2ZW50cyB0aGVcbiAgICAvLyBzZXJ2ZXIgZnJvbSBjbG9zaW5nIHRoZSBjb25uZWN0aW9uIGJlZm9yZSBhdWRpbyBjYXB0dXJlIHN0YXJ0cy5cbiAgICBsb2dGb3JEZWJ1Z2dpbmcoJ1t2b2ljZV9zdHJlYW1dIFNlbmRpbmcgaW5pdGlhbCBLZWVwQWxpdmUnKVxuICAgIHdzLnNlbmQoS0VFUEFMSVZFX01TRylcblxuICAgIC8vIFNlbmQgcGVyaW9kaWMga2VlcGFsaXZlIHRvIHByZXZlbnQgaWRsZSB0aW1lb3V0XG4gICAga2VlcGFsaXZlVGltZXIgPSBzZXRJbnRlcnZhbChcbiAgICAgIHdzID0+IHtcbiAgICAgICAgaWYgKHdzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOKSB7XG4gICAgICAgICAgbG9nRm9yRGVidWdnaW5nKCdbdm9pY2Vfc3RyZWFtXSBTZW5kaW5nIHBlcmlvZGljIEtlZXBBbGl2ZScpXG4gICAgICAgICAgd3Muc2VuZChLRUVQQUxJVkVfTVNHKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgS0VFUEFMSVZFX0lOVEVSVkFMX01TLFxuICAgICAgd3MsXG4gICAgKVxuXG4gICAgLy8gUGFzcyB0aGUgY29ubmVjdGlvbiB0byB0aGUgY2FsbGVyIHNvIGl0IGNhbiBzdGFydCBzZW5kaW5nIGF1ZGlvLlxuICAgIC8vIFRoaXMgZmlyZXMgb25seSBhZnRlciB0aGUgV2ViU29ja2V0IGlzIHRydWx5IG9wZW4sIGd1YXJhbnRlZWluZ1xuICAgIC8vIHRoYXQgc2VuZCgpIGNhbGxzIHdpbGwgbm90IGJlIHNpbGVudGx5IGRyb3BwZWQuXG4gICAgY2FsbGJhY2tzLm9uUmVhZHkoY29ubmVjdGlvbilcbiAgfSlcblxuICAvLyBUcmFjayB0aGUgbGFzdCBUcmFuc2NyaXB0VGV4dCBzbyB0aGF0IHdoZW4gVHJhbnNjcmlwdEVuZHBvaW50IGFycml2ZXNcbiAgLy8gd2UgY2FuIGVtaXQgaXQgYXMgdGhlIGZpbmFsIHRyYW5zY3JpcHQuICBUaGUgc2VydmVyIHNvbWV0aW1lcyBzZW5kc1xuICAvLyBtdWx0aXBsZSBub24tY3VtdWxhdGl2ZSBUcmFuc2NyaXB0VGV4dCBtZXNzYWdlcyB3aXRob3V0IGVuZHBvaW50c1xuICAvLyBiZXR3ZWVuIHRoZW07IHRoZSBUcmFuc2NyaXB0VGV4dCBoYW5kbGVyIGF1dG8tZmluYWxpemVzIHByZXZpb3VzXG4gIC8vIHNlZ21lbnRzIHdoZW4gaXQgZGV0ZWN0cyB0aGUgdGV4dCBoYXMgY2hhbmdlZCBub24tY3VtdWxhdGl2ZWx5LlxuICBsZXQgbGFzdFRyYW5zY3JpcHRUZXh0ID0gJydcblxuICB3cy5vbignbWVzc2FnZScsIChyYXc6IEJ1ZmZlciB8IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHRleHQgPSByYXcudG9TdHJpbmcoKVxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbdm9pY2Vfc3RyZWFtXSBNZXNzYWdlIHJlY2VpdmVkICgke1N0cmluZyh0ZXh0Lmxlbmd0aCl9IGNoYXJzKTogJHt0ZXh0LnNsaWNlKDAsIDIwMCl9YCxcbiAgICApXG4gICAgbGV0IG1zZzogVm9pY2VTdHJlYW1NZXNzYWdlXG4gICAgdHJ5IHtcbiAgICAgIG1zZyA9IGpzb25QYXJzZSh0ZXh0KSBhcyBWb2ljZVN0cmVhbU1lc3NhZ2VcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHN3aXRjaCAobXNnLnR5cGUpIHtcbiAgICAgIGNhc2UgJ1RyYW5zY3JpcHRUZXh0Jzoge1xuICAgICAgICBjb25zdCB0cmFuc2NyaXB0ID0gbXNnLmRhdGFcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKGBbdm9pY2Vfc3RyZWFtXSBUcmFuc2NyaXB0VGV4dDogXCIke3RyYW5zY3JpcHQgPz8gJyd9XCJgKVxuICAgICAgICAvLyBEYXRhIGFycml2ZWQgYWZ0ZXIgQ2xvc2VTdHJlYW0gXHUyMDE0IGRpc2FybSB0aGUgbm8tZGF0YSB0aW1lciBzb1xuICAgICAgICAvLyBhIHNsb3ctYnV0LXJlYWwgZmx1c2ggaXNuJ3QgY3V0IG9mZi4gT25seSBkaXNhcm0gb25jZSBmaW5hbGl6ZWRcbiAgICAgICAgLy8gKENsb3NlU3RyZWFtIHNlbnQpOyBwcmUtQ2xvc2VTdHJlYW0gZGF0YSByYWNpbmcgdGhlIGRlZmVycmVkXG4gICAgICAgIC8vIHNlbmQgd291bGQgY2FuY2VsIHRoZSB0aW1lciBwcmVtYXR1cmVseSwgZmFsbGluZyBiYWNrIHRvIHRoZVxuICAgICAgICAvLyBzbG93ZXIgNXMgc2FmZXR5IHRpbWVvdXQgaW5zdGVhZCBvZiB0aGUgMS41cyBuby1kYXRhIHRpbWVyLlxuICAgICAgICBpZiAoZmluYWxpemVkKSB7XG4gICAgICAgICAgY2FuY2VsTm9EYXRhVGltZXI/LigpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRyYW5zY3JpcHQpIHtcbiAgICAgICAgICAvLyBEZXRlY3Qgd2hlbiB0aGUgc2VydmVyIGhhcyBtb3ZlZCB0byBhIG5ldyBzcGVlY2ggc2VnbWVudC5cbiAgICAgICAgICAvLyBQcm9ncmVzc2l2ZSByZWZpbmVtZW50cyBleHRlbmQgb3Igc2hvcnRlbiB0aGUgcHJldmlvdXMgdGV4dFxuICAgICAgICAgIC8vIChlLmcuLCBcImhlbGxvXCIgXHUyMTkyIFwiaGVsbG8gd29ybGRcIiwgb3IgXCJoZWxsbyB3b3JcIiBcdTIxOTIgXCJoZWxsbyB3b1wiKS5cbiAgICAgICAgICAvLyBBIG5ldyBzZWdtZW50IHN0YXJ0cyB3aXRoIGNvbXBsZXRlbHkgZGlmZmVyZW50IHRleHQgKG5laXRoZXJcbiAgICAgICAgICAvLyBpcyBhIHByZWZpeCBvZiB0aGUgb3RoZXIpLiBXaGVuIGRldGVjdGVkLCBlbWl0IHRoZSBwcmV2aW91c1xuICAgICAgICAgIC8vIHRleHQgYXMgZmluYWwgc28gdGhlIGNhbGxlciBjYW4gYWNjdW11bGF0ZSBpdCwgcHJldmVudGluZ1xuICAgICAgICAgIC8vIHRoZSBuZXcgc2VnbWVudCBmcm9tIG92ZXJ3cml0aW5nIGFuZCBsb3NpbmcgdGhlIG9sZCBvbmUuXG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyBOb3ZhIDMncyBpbnRlcmltcyBhcmUgY3VtdWxhdGl2ZSBhY3Jvc3Mgc2VnbWVudHMgQU5EIGNhblxuICAgICAgICAgIC8vIHJldmlzZSBlYXJsaWVyIHRleHQgKFwiSGVsbG8/XCIgXHUyMTkyIFwiSGVsbG8uXCIpLiBSZXZpc2lvbiBicmVha3NcbiAgICAgICAgICAvLyB0aGUgcHJlZml4IGNoZWNrLCBjYXVzaW5nIGZhbHNlIGF1dG8tZmluYWxpemUgXHUyMTkyIHRoZSBzYW1lXG4gICAgICAgICAgLy8gdGV4dCBjb21taXR0ZWQgb25jZSBBTkQgcmUtYXBwZWFyaW5nIGluIHRoZSBjdW11bGF0aXZlXG4gICAgICAgICAgLy8gaW50ZXJpbSA9IGR1cGxpY2F0aW9uLiBOb3ZhIDMgb25seSBlbmRwb2ludHMgb24gdGhlIGZpbmFsXG4gICAgICAgICAgLy8gZmx1c2gsIHNvIGF1dG8tZmluYWxpemUgaXMgbmV2ZXIgY29ycmVjdCBmb3IgaXQuXG4gICAgICAgICAgaWYgKCFpc05vdmEzICYmIGxhc3RUcmFuc2NyaXB0VGV4dCkge1xuICAgICAgICAgICAgY29uc3QgcHJldiA9IGxhc3RUcmFuc2NyaXB0VGV4dC50cmltU3RhcnQoKVxuICAgICAgICAgICAgY29uc3QgbmV4dCA9IHRyYW5zY3JpcHQudHJpbVN0YXJ0KClcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgcHJldiAmJlxuICAgICAgICAgICAgICBuZXh0ICYmXG4gICAgICAgICAgICAgICFuZXh0LnN0YXJ0c1dpdGgocHJldikgJiZcbiAgICAgICAgICAgICAgIXByZXYuc3RhcnRzV2l0aChuZXh0KVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgICBgW3ZvaWNlX3N0cmVhbV0gQXV0by1maW5hbGl6aW5nIHByZXZpb3VzIHNlZ21lbnQgKG5ldyBzZWdtZW50IGRldGVjdGVkKTogXCIke2xhc3RUcmFuc2NyaXB0VGV4dH1cImAsXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgY2FsbGJhY2tzLm9uVHJhbnNjcmlwdChsYXN0VHJhbnNjcmlwdFRleHQsIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGxhc3RUcmFuc2NyaXB0VGV4dCA9IHRyYW5zY3JpcHRcbiAgICAgICAgICAvLyBFbWl0IGFzIGludGVyaW0gc28gdGhlIGNhbGxlciBjYW4gc2hvdyBhIGxpdmUgcHJldmlldy5cbiAgICAgICAgICBjYWxsYmFja3Mub25UcmFuc2NyaXB0KHRyYW5zY3JpcHQsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlICdUcmFuc2NyaXB0RW5kcG9pbnQnOiB7XG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICBgW3ZvaWNlX3N0cmVhbV0gVHJhbnNjcmlwdEVuZHBvaW50IHJlY2VpdmVkLCBsYXN0VHJhbnNjcmlwdFRleHQ9XCIke2xhc3RUcmFuc2NyaXB0VGV4dH1cImAsXG4gICAgICAgIClcbiAgICAgICAgLy8gVGhlIHNlcnZlciBzaWduYWxzIHRoZSBlbmQgb2YgYW4gdXR0ZXJhbmNlLiAgRW1pdCB0aGUgbGFzdFxuICAgICAgICAvLyBUcmFuc2NyaXB0VGV4dCBhcyBhIGZpbmFsIHRyYW5zY3JpcHQgc28gdGhlIGNhbGxlciBjYW4gY29tbWl0IGl0LlxuICAgICAgICBjb25zdCBmaW5hbFRleHQgPSBsYXN0VHJhbnNjcmlwdFRleHRcbiAgICAgICAgbGFzdFRyYW5zY3JpcHRUZXh0ID0gJydcbiAgICAgICAgaWYgKGZpbmFsVGV4dCkge1xuICAgICAgICAgIGNhbGxiYWNrcy5vblRyYW5zY3JpcHQoZmluYWxUZXh0LCB0cnVlKVxuICAgICAgICB9XG4gICAgICAgIC8vIFdoZW4gVHJhbnNjcmlwdEVuZHBvaW50IGFycml2ZXMgYWZ0ZXIgQ2xvc2VTdHJlYW0gd2FzIHNlbnQsXG4gICAgICAgIC8vIHRoZSBzZXJ2ZXIgaGFzIGZsdXNoZWQgaXRzIGZpbmFsIHRyYW5zY3JpcHQgXHUyMDE0IG5vdGhpbmcgbW9yZSBpc1xuICAgICAgICAvLyBjb21pbmcuICBSZXNvbHZlIGZpbmFsaXplIG5vdyBzbyB0aGUgY2FsbGVyIHJlYWRzIHRoZVxuICAgICAgICAvLyBhY2N1bXVsYXRlZCBidWZmZXIgaW1tZWRpYXRlbHkgKH4zMDBtcykgaW5zdGVhZCBvZiB3YWl0aW5nXG4gICAgICAgIC8vIGZvciB0aGUgV2ViU29ja2V0IGNsb3NlIGV2ZW50ICh+My01cyBvZiBzZXJ2ZXIgdGVhcmRvd24pLlxuICAgICAgICAvLyBgZmluYWxpemVkYCAobm90IGBmaW5hbGl6aW5nYCkgaXMgdGhlIHJpZ2h0IGdhdGU6IGl0IGZsaXBzXG4gICAgICAgIC8vIGluc2lkZSB0aGUgc2V0VGltZW91dCgwKSB0aGF0IGFjdHVhbGx5IHNlbmRzIENsb3NlU3RyZWFtLCBzb1xuICAgICAgICAvLyBhIFRyYW5zY3JpcHRFbmRwb2ludCB0aGF0IHJhY2VzIHRoZSBkZWZlcnJlZCBzZW5kIHN0aWxsIHdhaXRzLlxuICAgICAgICBpZiAoZmluYWxpemVkKSB7XG4gICAgICAgICAgcmVzb2x2ZUZpbmFsaXplPy4oJ3Bvc3RfY2xvc2VzdHJlYW1fZW5kcG9pbnQnKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlICdUcmFuc2NyaXB0RXJyb3InOiB7XG4gICAgICAgIGNvbnN0IGRlc2MgPVxuICAgICAgICAgIG1zZy5kZXNjcmlwdGlvbiA/PyBtc2cuZXJyb3JfY29kZSA/PyAndW5rbm93biB0cmFuc2NyaXB0aW9uIGVycm9yJ1xuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoYFt2b2ljZV9zdHJlYW1dIFRyYW5zY3JpcHRFcnJvcjogJHtkZXNjfWApXG4gICAgICAgIGlmICghZmluYWxpemluZykge1xuICAgICAgICAgIGNhbGxiYWNrcy5vbkVycm9yKGRlc2MpXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2Vycm9yJzoge1xuICAgICAgICBjb25zdCBlcnJvckRldGFpbCA9IG1zZy5tZXNzYWdlID8/IGpzb25TdHJpbmdpZnkobXNnKVxuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoYFt2b2ljZV9zdHJlYW1dIFNlcnZlciBlcnJvcjogJHtlcnJvckRldGFpbH1gKVxuICAgICAgICBpZiAoIWZpbmFsaXppbmcpIHtcbiAgICAgICAgICBjYWxsYmFja3Mub25FcnJvcihlcnJvckRldGFpbClcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH0pXG5cbiAgd3Mub24oJ2Nsb3NlJywgKGNvZGUsIHJlYXNvbikgPT4ge1xuICAgIGNvbnN0IHJlYXNvblN0ciA9IHJlYXNvbj8udG9TdHJpbmcoKSA/PyAnJ1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbdm9pY2Vfc3RyZWFtXSBXZWJTb2NrZXQgY2xvc2VkOiBjb2RlPSR7U3RyaW5nKGNvZGUpfSByZWFzb249XCIke3JlYXNvblN0cn1cImAsXG4gICAgKVxuICAgIGNvbm5lY3RlZCA9IGZhbHNlXG4gICAgaWYgKGtlZXBhbGl2ZVRpbWVyKSB7XG4gICAgICBjbGVhckludGVydmFsKGtlZXBhbGl2ZVRpbWVyKVxuICAgICAga2VlcGFsaXZlVGltZXIgPSBudWxsXG4gICAgfVxuICAgIC8vIElmIHRoZSBzZXJ2ZXIgY2xvc2VkIHRoZSBjb25uZWN0aW9uIGJlZm9yZSBzZW5kaW5nIFRyYW5zY3JpcHRFbmRwb2ludCxcbiAgICAvLyBwcm9tb3RlIHRoZSBsYXN0IGludGVyaW0gdHJhbnNjcmlwdCB0byBmaW5hbCBzbyBubyB0ZXh0IGlzIGxvc3QuXG4gICAgaWYgKGxhc3RUcmFuc2NyaXB0VGV4dCkge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAnW3ZvaWNlX3N0cmVhbV0gUHJvbW90aW5nIHVucmVwb3J0ZWQgaW50ZXJpbSB0cmFuc2NyaXB0IHRvIGZpbmFsIG9uIGNsb3NlJyxcbiAgICAgIClcbiAgICAgIGNvbnN0IGZpbmFsVGV4dCA9IGxhc3RUcmFuc2NyaXB0VGV4dFxuICAgICAgbGFzdFRyYW5zY3JpcHRUZXh0ID0gJydcbiAgICAgIGNhbGxiYWNrcy5vblRyYW5zY3JpcHQoZmluYWxUZXh0LCB0cnVlKVxuICAgIH1cbiAgICAvLyBEdXJpbmcgZmluYWxpemUsIHN1cHByZXNzIG9uRXJyb3IgXHUyMDE0IHRoZSBzZXNzaW9uIGFscmVhZHkgZGVsaXZlcmVkXG4gICAgLy8gd2hhdGV2ZXIgaXQgaGFkLiB1c2VWb2ljZSdzIG9uRXJyb3IgcGF0aCB3aXBlcyBhY2N1bXVsYXRlZFJlZixcbiAgICAvLyB3aGljaCB3b3VsZCBkZXN0cm95IHRoZSB0cmFuc2NyaXB0IGJlZm9yZSB0aGUgZmluYWxpemUgLnRoZW4oKVxuICAgIC8vIHJlYWRzIGl0LiBgZmluYWxpemluZ2AgKG5vdCByZXNvbHZlRmluYWxpemUpIGlzIHRoZSBnYXRlOiBzZXQgb25jZVxuICAgIC8vIGF0IGZpbmFsaXplKCkgZW50cnksIG5ldmVyIGNsZWFyZWQsIHNvIGl0IHN0YXlzIGFjY3VyYXRlIGFmdGVyIHRoZVxuICAgIC8vIGZhc3QgcGF0aCBvciBhIHRpbWVyIGFscmVhZHkgcmVzb2x2ZWQuXG4gICAgcmVzb2x2ZUZpbmFsaXplPy4oJ3dzX2Nsb3NlJylcbiAgICBpZiAoIWZpbmFsaXppbmcgJiYgIXVwZ3JhZGVSZWplY3RlZCAmJiBjb2RlICE9PSAxMDAwICYmIGNvZGUgIT09IDEwMDUpIHtcbiAgICAgIGNhbGxiYWNrcy5vbkVycm9yKFxuICAgICAgICBgQ29ubmVjdGlvbiBjbG9zZWQ6IGNvZGUgJHtTdHJpbmcoY29kZSl9JHtyZWFzb25TdHIgPyBgIFx1MjAxNCAke3JlYXNvblN0cn1gIDogJyd9YCxcbiAgICAgIClcbiAgICB9XG4gICAgY2FsbGJhY2tzLm9uQ2xvc2UoKVxuICB9KVxuXG4gIC8vIFRoZSB3cyBsaWJyYXJ5IGZpcmVzICd1bmV4cGVjdGVkLXJlc3BvbnNlJyB3aGVuIHRoZSBIVFRQIHVwZ3JhZGVcbiAgLy8gcmV0dXJucyBhIG5vbi0xMDEgc3RhdHVzLiBMaXN0ZW5pbmcgbGV0cyB1cyBzdXJmYWNlIHRoZSBhY3R1YWwgc3RhdHVzXG4gIC8vIGFuZCBmbGFnIDR4eCBhcyBmYXRhbCAoc2FtZSB0b2tlbi9UTFMgZmluZ2VycHJpbnQgd29uJ3QgY2hhbmdlIG9uXG4gIC8vIHJldHJ5KS4gV2l0aCBhIGxpc3RlbmVyIHJlZ2lzdGVyZWQsIHdzIGRvZXMgTk9UIGFib3J0IG9uIG91ciBiZWhhbGYgXHUyMDE0XG4gIC8vIHdlIGRlc3Ryb3kgdGhlIHJlcXVlc3Q7ICdlcnJvcicgZG9lcyBub3QgZmlyZSwgJ2Nsb3NlJyBkb2VzIChzdXBwcmVzc2VkXG4gIC8vIHZpYSB1cGdyYWRlUmVqZWN0ZWQgYWJvdmUpLlxuICAvL1xuICAvLyBCdW4ncyB3cyBzaGltIGhpc3RvcmljYWxseSBkaWRuJ3QgaW1wbGVtZW50IHRoaXMgZXZlbnQgKGEgd2FybmluZ1xuICAvLyBpcyBsb2dnZWQgb25jZSBhdCByZWdpc3RyYXRpb24pLiBVbmRlciBCdW4gYSBub24tMTAxIHVwZ3JhZGUgZmFsbHNcbiAgLy8gdGhyb3VnaCB0byB0aGUgZ2VuZXJpYyAnZXJyb3InICsgJ2Nsb3NlJyAxMDAyIHBhdGggd2l0aCBubyByZWNvdmVyYWJsZVxuICAvLyBzdGF0dXM7IHRoZSBhdHRlbXB0R2VuUmVmIGd1YXJkIGluIHVzZVZvaWNlLnRzIHN0aWxsIHN1cmZhY2VzIHRoZVxuICAvLyByZXRyeS1hdHRlbXB0IGZhaWx1cmUsIHRoZSB1c2VyIGp1c3Qgc2VlcyBcIkV4cGVjdGVkIDEwMSBzdGF0dXMgY29kZVwiXG4gIC8vIGluc3RlYWQgb2YgXCJIVFRQIDUwM1wiLiBObyBoYXJtIFx1MjAxNCB0aGUgZ2VuIGZpeCBpcyB0aGUgbG9hZC1iZWFyaW5nIHBhcnQuXG4gIHdzLm9uKCd1bmV4cGVjdGVkLXJlc3BvbnNlJywgKHJlcTogQ2xpZW50UmVxdWVzdCwgcmVzOiBJbmNvbWluZ01lc3NhZ2UpID0+IHtcbiAgICBjb25zdCBzdGF0dXMgPSByZXMuc3RhdHVzQ29kZSA/PyAwXG4gICAgLy8gQnVuJ3Mgd3MgaW1wbGVtZW50YXRpb24gb24gV2luZG93cyBjYW4gZmlyZSB0aGlzIGV2ZW50IGZvciBhXG4gICAgLy8gc3VjY2Vzc2Z1bCAxMDEgU3dpdGNoaW5nIFByb3RvY29scyByZXNwb25zZSAoYW50aHJvcGljcy9jbGF1ZGUtY29kZSM0MDUxMCkuXG4gICAgLy8gMTAxIGlzIG5ldmVyIGEgcmVqZWN0aW9uIFx1MjAxNCBiYWlsIGJlZm9yZSB3ZSBkZXN0cm95IGEgd29ya2luZyB1cGdyYWRlLlxuICAgIGlmIChzdGF0dXMgPT09IDEwMSkge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAnW3ZvaWNlX3N0cmVhbV0gdW5leHBlY3RlZC1yZXNwb25zZSBmaXJlZCB3aXRoIDEwMTsgaWdub3JpbmcnLFxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbdm9pY2Vfc3RyZWFtXSBVcGdyYWRlIHJlamVjdGVkOiBzdGF0dXM9JHtTdHJpbmcoc3RhdHVzKX0gY2YtbWl0aWdhdGVkPSR7U3RyaW5nKHJlcy5oZWFkZXJzWydjZi1taXRpZ2F0ZWQnXSl9IGNmLXJheT0ke1N0cmluZyhyZXMuaGVhZGVyc1snY2YtcmF5J10pfWAsXG4gICAgKVxuICAgIHVwZ3JhZGVSZWplY3RlZCA9IHRydWVcbiAgICByZXMucmVzdW1lKClcbiAgICByZXEuZGVzdHJveSgpXG4gICAgaWYgKGZpbmFsaXppbmcpIHJldHVyblxuICAgIGNhbGxiYWNrcy5vbkVycm9yKFxuICAgICAgYFdlYlNvY2tldCB1cGdyYWRlIHJlamVjdGVkIHdpdGggSFRUUCAke1N0cmluZyhzdGF0dXMpfWAsXG4gICAgICB7IGZhdGFsOiBzdGF0dXMgPj0gNDAwICYmIHN0YXR1cyA8IDUwMCB9LFxuICAgIClcbiAgfSlcblxuICB3cy5vbignZXJyb3InLCAoZXJyOiBFcnJvcikgPT4ge1xuICAgIGxvZ0Vycm9yKGVycilcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoYFt2b2ljZV9zdHJlYW1dIFdlYlNvY2tldCBlcnJvcjogJHtlcnIubWVzc2FnZX1gKVxuICAgIGlmICghZmluYWxpemluZykge1xuICAgICAgY2FsbGJhY2tzLm9uRXJyb3IoYFZvaWNlIHN0cmVhbSBjb25uZWN0aW9uIGVycm9yOiAke2Vyci5tZXNzYWdlfWApXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBjb25uZWN0aW9uXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlHTyxTQUFTLHlCQUFrQztBQUloRCxNQUFJLENBQUMsdUJBQXVCLEdBQUc7QUFDN0IsV0FBTztBQUFBLEVBQ1Q7QUFDQSxRQUFNLFNBQVMsdUJBQXVCO0FBQ3RDLFNBQU8sV0FBVyxRQUFRLE9BQU8sZ0JBQWdCO0FBQ25EO0FBSUEsZUFBc0IsbUJBQ3BCLFdBQ0EsU0FDdUM7QUFFdkMsUUFBTSxrQ0FBa0M7QUFFeEMsUUFBTSxTQUFTLHVCQUF1QjtBQUN0QyxNQUFJLENBQUMsUUFBUSxhQUFhO0FBQ3hCLG9CQUFnQix5Q0FBeUM7QUFDekQsV0FBTztBQUFBLEVBQ1Q7QUFVQSxRQUFNLFlBQ0osUUFBUSxJQUFJLHlCQUNaLGVBQWUsRUFDWixhQUFhLFFBQVEsWUFBWSxRQUFRLEVBQ3pDLFFBQVEsV0FBVyxPQUFPO0FBRS9CLE1BQUksUUFBUSxJQUFJLHVCQUF1QjtBQUNyQztBQUFBLE1BQ0Usd0RBQXdELFFBQVEsSUFBSSxxQkFBcUI7QUFBQSxJQUMzRjtBQUFBLEVBQ0Y7QUFFQSxRQUFNLFNBQVMsSUFBSSxnQkFBZ0I7QUFBQSxJQUNqQyxVQUFVO0FBQUEsSUFDVixhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsSUFDVixnQkFBZ0I7QUFBQSxJQUNo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
