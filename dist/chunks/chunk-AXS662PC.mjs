#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  connectVoiceStream,
  init_voiceStreamSTT,
  isVoiceStreamAvailable
} from "./chunk-EA54UMLK.mjs";
import {
  init_voice,
  useSetVoiceState
} from "./chunk-PWGYNHQM.mjs";
import {
  init_use_terminal_focus,
  useTerminalFocus
} from "./chunk-KMJXN3MK.mjs";
import {
  init_react,
  useCallback,
  useEffect,
  useRef,
  useState
} from "./chunk-TEJH3H3H.mjs";
import {
  getInitialSettings,
  init_settings2 as init_settings
} from "./chunk-NKGQGSP5.mjs";
import {
  init_sleep,
  sleep
} from "./chunk-DQ5JTCOA.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-MDXHK5AD.mjs";
import {
  getSystemLocaleLanguage,
  init_intl
} from "./chunk-SETG7O3F.mjs";
import {
  getBranch,
  init_git
} from "./chunk-7SC6PTLR.mjs";
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import {
  init_debug,
  init_errors,
  logForDebugging,
  toError
} from "./chunk-L2VTD674.mjs";
import {
  getProjectRoot,
  init_state
} from "./chunk-NGSB34MB.mjs";
import {
  __esm,
  __export
} from "./chunk-O5PZ3G6I.mjs";

// src/services/voiceKeyterms.ts
import { basename } from "path";
function splitIdentifier(name) {
  return name.replace(/([a-z])([A-Z])/g, "$1 $2").split(/[-_./\s]+/).map((w) => w.trim()).filter((w) => w.length > 2 && w.length <= 20);
}
function fileNameWords(filePath) {
  const stem = basename(filePath).replace(/\.[^.]+$/, "");
  return splitIdentifier(stem);
}
async function getVoiceKeyterms(recentFiles) {
  const terms = new Set(GLOBAL_KEYTERMS);
  try {
    const projectRoot = getProjectRoot();
    if (projectRoot) {
      const name = basename(projectRoot);
      if (name.length > 2 && name.length <= 50) {
        terms.add(name);
      }
    }
  } catch {
  }
  try {
    const branch = await getBranch();
    if (branch) {
      for (const word of splitIdentifier(branch)) {
        terms.add(word);
      }
    }
  } catch {
  }
  if (recentFiles) {
    for (const filePath of recentFiles) {
      if (terms.size >= MAX_KEYTERMS) break;
      for (const word of fileNameWords(filePath)) {
        terms.add(word);
      }
    }
  }
  return [...terms].slice(0, MAX_KEYTERMS);
}
var GLOBAL_KEYTERMS, MAX_KEYTERMS;
var init_voiceKeyterms = __esm({
  "src/services/voiceKeyterms.ts"() {
    init_state();
    init_git();
    GLOBAL_KEYTERMS = [
      // Terms Deepgram consistently mangles without keyword hints.
      // Note: "Claude" and "Anthropic" are already server-side base keyterms.
      // Avoid terms nobody speaks aloud as-spelled (stdout → "standard out").
      "MCP",
      "symlink",
      "grep",
      "regex",
      "localhost",
      "codebase",
      "TypeScript",
      "JSON",
      "OAuth",
      "webhook",
      "gRPC",
      "dotfiles",
      "subagent",
      "worktree"
    ];
    MAX_KEYTERMS = 50;
  }
});

// src/hooks/useVoice.ts
var useVoice_exports = {};
__export(useVoice_exports, {
  FIRST_PRESS_FALLBACK_MS: () => FIRST_PRESS_FALLBACK_MS,
  computeLevel: () => computeLevel,
  normalizeLanguageForSTT: () => normalizeLanguageForSTT,
  useVoice: () => useVoice
});
function normalizeLanguageForSTT(language) {
  if (!language) return { code: DEFAULT_STT_LANGUAGE };
  const lower = language.toLowerCase().trim();
  if (!lower) return { code: DEFAULT_STT_LANGUAGE };
  if (SUPPORTED_LANGUAGE_CODES.has(lower)) return { code: lower };
  const fromName = LANGUAGE_NAME_TO_CODE[lower];
  if (fromName) return { code: fromName };
  const base = lower.split("-")[0];
  if (base && SUPPORTED_LANGUAGE_CODES.has(base)) return { code: base };
  return { code: DEFAULT_STT_LANGUAGE, fellBackFrom: language };
}
function computeLevel(chunk) {
  const samples = chunk.length >> 1;
  if (samples === 0) return 0;
  let sumSq = 0;
  for (let i = 0; i < chunk.length - 1; i += 2) {
    const sample = (chunk[i] | chunk[i + 1] << 8) << 16 >> 16;
    sumSq += sample * sample;
  }
  const rms = Math.sqrt(sumSq / samples);
  const normalized = Math.min(rms / 2e3, 1);
  return Math.sqrt(normalized);
}
function useVoice({
  onTranscript,
  onError,
  enabled,
  focusMode
}) {
  const [state, setState] = useState("idle");
  const stateRef = useRef("idle");
  const connectionRef = useRef(null);
  const accumulatedRef = useRef("");
  const onTranscriptRef = useRef(onTranscript);
  const onErrorRef = useRef(onError);
  const cleanupTimerRef = useRef(null);
  const releaseTimerRef = useRef(null);
  const seenRepeatRef = useRef(false);
  const repeatFallbackTimerRef = useRef(
    null
  );
  const focusTriggeredRef = useRef(false);
  const focusSilenceTimerRef = useRef(
    null
  );
  const silenceTimedOutRef = useRef(false);
  const recordingStartRef = useRef(0);
  const sessionGenRef = useRef(0);
  const retryUsedRef = useRef(false);
  const fullAudioRef = useRef([]);
  const silentDropRetriedRef = useRef(false);
  const attemptGenRef = useRef(0);
  const focusFlushedCharsRef = useRef(0);
  const hasAudioSignalRef = useRef(false);
  const everConnectedRef = useRef(false);
  const audioLevelsRef = useRef([]);
  const isFocused = useTerminalFocus();
  const setVoiceState = useSetVoiceState();
  onTranscriptRef.current = onTranscript;
  onErrorRef.current = onError;
  function updateState(newState) {
    stateRef.current = newState;
    setState(newState);
    setVoiceState((prev) => {
      if (prev.voiceState === newState) return prev;
      return { ...prev, voiceState: newState };
    });
  }
  const cleanup = useCallback(() => {
    sessionGenRef.current++;
    if (cleanupTimerRef.current) {
      clearTimeout(cleanupTimerRef.current);
      cleanupTimerRef.current = null;
    }
    if (releaseTimerRef.current) {
      clearTimeout(releaseTimerRef.current);
      releaseTimerRef.current = null;
    }
    if (repeatFallbackTimerRef.current) {
      clearTimeout(repeatFallbackTimerRef.current);
      repeatFallbackTimerRef.current = null;
    }
    if (focusSilenceTimerRef.current) {
      clearTimeout(focusSilenceTimerRef.current);
      focusSilenceTimerRef.current = null;
    }
    silenceTimedOutRef.current = false;
    voiceModule?.stopRecording();
    if (connectionRef.current) {
      connectionRef.current.close();
      connectionRef.current = null;
    }
    accumulatedRef.current = "";
    audioLevelsRef.current = [];
    fullAudioRef.current = [];
    setVoiceState((prev) => {
      if (prev.voiceInterimTranscript === "" && !prev.voiceAudioLevels.length)
        return prev;
      return { ...prev, voiceInterimTranscript: "", voiceAudioLevels: [] };
    });
  }, [setVoiceState]);
  function finishRecording() {
    logForDebugging(
      "[voice] finishRecording: stopping recording, transitioning to processing"
    );
    attemptGenRef.current++;
    const focusTriggered = focusTriggeredRef.current;
    focusTriggeredRef.current = false;
    updateState("processing");
    voiceModule?.stopRecording();
    const recordingDurationMs = Date.now() - recordingStartRef.current;
    const hadAudioSignal = hasAudioSignalRef.current;
    const retried = retryUsedRef.current;
    const focusFlushedChars = focusFlushedCharsRef.current;
    const wsConnected = everConnectedRef.current;
    const myGen = sessionGenRef.current;
    const isStale = () => sessionGenRef.current !== myGen;
    logForDebugging("[voice] Recording stopped");
    const finalizePromise = connectionRef.current ? connectionRef.current.finalize() : Promise.resolve(void 0);
    void finalizePromise.then(async (finalizeSource) => {
      if (isStale()) return;
      if (finalizeSource === "no_data_timeout" && hadAudioSignal && wsConnected && !focusTriggered && focusFlushedChars === 0 && accumulatedRef.current.trim() === "" && !silentDropRetriedRef.current && fullAudioRef.current.length > 0) {
        silentDropRetriedRef.current = true;
        logForDebugging(
          `[voice] Silent-drop detected (no_data_timeout, ${String(fullAudioRef.current.length)} chunks); replaying on fresh connection`
        );
        logEvent("tengu_voice_silent_drop_replay", {
          recordingDurationMs,
          chunkCount: fullAudioRef.current.length
        });
        if (connectionRef.current) {
          connectionRef.current.close();
          connectionRef.current = null;
        }
        const replayBuffer = fullAudioRef.current;
        await sleep(250);
        if (isStale()) return;
        const stt = normalizeLanguageForSTT(getInitialSettings().language);
        const keyterms = await getVoiceKeyterms();
        if (isStale()) return;
        await new Promise((resolve) => {
          void connectVoiceStream(
            {
              onTranscript: (t, isFinal) => {
                if (isStale()) return;
                if (isFinal && t.trim()) {
                  if (accumulatedRef.current) accumulatedRef.current += " ";
                  accumulatedRef.current += t.trim();
                }
              },
              onError: () => resolve(),
              onClose: () => {
              },
              onReady: (conn) => {
                if (isStale()) {
                  conn.close();
                  resolve();
                  return;
                }
                connectionRef.current = conn;
                const SLICE = 32e3;
                let slice = [];
                let bytes = 0;
                for (const c of replayBuffer) {
                  if (bytes > 0 && bytes + c.length > SLICE) {
                    conn.send(Buffer.concat(slice));
                    slice = [];
                    bytes = 0;
                  }
                  slice.push(c);
                  bytes += c.length;
                }
                if (slice.length) conn.send(Buffer.concat(slice));
                void conn.finalize().then(() => {
                  conn.close();
                  resolve();
                });
              }
            },
            { language: stt.code, keyterms }
          ).then(
            (c) => {
              if (!c) resolve();
            },
            () => resolve()
          );
        });
        if (isStale()) return;
      }
      fullAudioRef.current = [];
      const text = accumulatedRef.current.trim();
      logForDebugging(
        `[voice] Final transcript assembled (${String(text.length)} chars): "${text.slice(0, 200)}"`
      );
      logEvent("tengu_voice_recording_completed", {
        transcriptChars: text.length + focusFlushedChars,
        recordingDurationMs,
        hadAudioSignal,
        retried,
        silentDropRetried: silentDropRetriedRef.current,
        wsConnected,
        focusTriggered
      });
      if (connectionRef.current) {
        connectionRef.current.close();
        connectionRef.current = null;
      }
      if (text) {
        logForDebugging(
          `[voice] Injecting transcript (${String(text.length)} chars)`
        );
        onTranscriptRef.current(text);
      } else if (focusFlushedChars === 0 && recordingDurationMs > 2e3) {
        if (!wsConnected) {
          onErrorRef.current?.(
            "Voice connection failed. Check your network and try again."
          );
        } else if (!hadAudioSignal) {
          onErrorRef.current?.(
            "No audio detected from microphone. Check that the correct input device is selected and that Claude Code has microphone access."
          );
        } else {
          onErrorRef.current?.("No speech detected.");
        }
      }
      accumulatedRef.current = "";
      setVoiceState((prev) => {
        if (prev.voiceInterimTranscript === "") return prev;
        return { ...prev, voiceInterimTranscript: "" };
      });
      updateState("idle");
    }).catch((err) => {
      logError(toError(err));
      if (!isStale()) updateState("idle");
    });
  }
  useEffect(() => {
    if (enabled && !voiceModule) {
      void import("./voice-MFPHSHOB.mjs").then((mod) => {
        voiceModule = mod;
      });
    }
  }, [enabled]);
  function armFocusSilenceTimer() {
    if (focusSilenceTimerRef.current) {
      clearTimeout(focusSilenceTimerRef.current);
    }
    focusSilenceTimerRef.current = setTimeout(
      (focusSilenceTimerRef2, stateRef2, focusTriggeredRef2, silenceTimedOutRef2, finishRecording2) => {
        focusSilenceTimerRef2.current = null;
        if (stateRef2.current === "recording" && focusTriggeredRef2.current) {
          logForDebugging(
            "[voice] Focus silence timeout \u2014 tearing down session"
          );
          silenceTimedOutRef2.current = true;
          finishRecording2();
        }
      },
      FOCUS_SILENCE_TIMEOUT_MS,
      focusSilenceTimerRef,
      stateRef,
      focusTriggeredRef,
      silenceTimedOutRef,
      finishRecording
    );
  }
  useEffect(() => {
    if (!enabled || !focusMode) {
      if (focusTriggeredRef.current && stateRef.current === "recording") {
        logForDebugging(
          "[voice] Focus mode disabled during recording, finishing"
        );
        finishRecording();
      }
      return;
    }
    let cancelled = false;
    if (isFocused && stateRef.current === "idle" && !silenceTimedOutRef.current) {
      const beginFocusRecording = () => {
        if (cancelled || stateRef.current !== "idle" || silenceTimedOutRef.current)
          return;
        logForDebugging("[voice] Focus gained, starting recording session");
        focusTriggeredRef.current = true;
        void startRecordingSession();
        armFocusSilenceTimer();
      };
      if (voiceModule) {
        beginFocusRecording();
      } else {
        void import("./voice-MFPHSHOB.mjs").then((mod) => {
          voiceModule = mod;
          beginFocusRecording();
        });
      }
    } else if (!isFocused) {
      silenceTimedOutRef.current = false;
      if (stateRef.current === "recording") {
        logForDebugging("[voice] Focus lost, finishing recording");
        finishRecording();
      }
    }
    return () => {
      cancelled = true;
    };
  }, [enabled, focusMode, isFocused]);
  async function startRecordingSession() {
    if (!voiceModule) {
      onErrorRef.current?.(
        "Voice module not loaded yet. Try again in a moment."
      );
      return;
    }
    updateState("recording");
    recordingStartRef.current = Date.now();
    accumulatedRef.current = "";
    seenRepeatRef.current = false;
    hasAudioSignalRef.current = false;
    retryUsedRef.current = false;
    silentDropRetriedRef.current = false;
    fullAudioRef.current = [];
    focusFlushedCharsRef.current = 0;
    everConnectedRef.current = false;
    const myGen = ++sessionGenRef.current;
    const availability = await voiceModule.checkRecordingAvailability();
    if (!availability.available) {
      logForDebugging(
        `[voice] Recording not available: ${availability.reason ?? "unknown"}`
      );
      onErrorRef.current?.(
        availability.reason ?? "Audio recording is not available."
      );
      cleanup();
      updateState("idle");
      return;
    }
    logForDebugging(
      "[voice] Starting recording session, connecting voice stream"
    );
    setVoiceState((prev) => {
      if (!prev.voiceError) return prev;
      return { ...prev, voiceError: null };
    });
    const audioBuffer = [];
    logForDebugging(
      "[voice] startRecording: buffering audio while WebSocket connects"
    );
    audioLevelsRef.current = [];
    const started = await voiceModule.startRecording(
      (chunk) => {
        const owned = Buffer.from(chunk);
        if (!focusTriggeredRef.current) {
          fullAudioRef.current.push(owned);
        }
        if (connectionRef.current) {
          connectionRef.current.send(owned);
        } else {
          audioBuffer.push(owned);
        }
        const level = computeLevel(chunk);
        if (!hasAudioSignalRef.current && level > 0.01) {
          hasAudioSignalRef.current = true;
        }
        const levels = audioLevelsRef.current;
        if (levels.length >= AUDIO_LEVEL_BARS) {
          levels.shift();
        }
        levels.push(level);
        const snapshot = [...levels];
        audioLevelsRef.current = snapshot;
        setVoiceState((prev) => ({ ...prev, voiceAudioLevels: snapshot }));
      },
      () => {
        if (stateRef.current === "recording") {
          finishRecording();
        }
      },
      { silenceDetection: false }
    );
    if (!started) {
      logError(new Error("[voice] Recording failed \u2014 no audio tool found"));
      onErrorRef.current?.(
        "Failed to start audio capture. Check that your microphone is accessible."
      );
      cleanup();
      updateState("idle");
      setVoiceState((prev) => ({
        ...prev,
        voiceError: "Recording failed \u2014 no audio tool found"
      }));
      return;
    }
    const rawLanguage = getInitialSettings().language;
    const stt = normalizeLanguageForSTT(rawLanguage);
    logEvent("tengu_voice_recording_started", {
      focusTriggered: focusTriggeredRef.current,
      sttLanguage: stt.code,
      sttLanguageIsDefault: !rawLanguage?.trim(),
      sttLanguageFellBack: stt.fellBackFrom !== void 0,
      // ISO 639 subtag from Intl (bounded set, never user text). undefined if
      // Intl failed — omitted from the payload, no retry cost (cached).
      systemLocaleLanguage: getSystemLocaleLanguage()
    });
    let sawTranscript = false;
    const isStale = () => sessionGenRef.current !== myGen;
    const attemptConnect = (keyterms) => {
      const myAttemptGen = attemptGenRef.current;
      void connectVoiceStream(
        {
          onTranscript: (text, isFinal) => {
            if (isStale()) return;
            sawTranscript = true;
            logForDebugging(
              `[voice] onTranscript: isFinal=${String(isFinal)} text="${text}"`
            );
            if (isFinal && text.trim()) {
              if (focusTriggeredRef.current) {
                logForDebugging(
                  `[voice] Focus mode: flushing final transcript immediately: "${text.trim()}"`
                );
                onTranscriptRef.current(text.trim());
                focusFlushedCharsRef.current += text.trim().length;
                setVoiceState((prev) => {
                  if (prev.voiceInterimTranscript === "") return prev;
                  return { ...prev, voiceInterimTranscript: "" };
                });
                accumulatedRef.current = "";
                armFocusSilenceTimer();
              } else {
                if (accumulatedRef.current) {
                  accumulatedRef.current += " ";
                }
                accumulatedRef.current += text.trim();
                logForDebugging(
                  `[voice] Accumulated final transcript: "${accumulatedRef.current}"`
                );
                setVoiceState((prev) => {
                  const preview = accumulatedRef.current;
                  if (prev.voiceInterimTranscript === preview) return prev;
                  return { ...prev, voiceInterimTranscript: preview };
                });
              }
            } else if (!isFinal) {
              if (focusTriggeredRef.current) {
                armFocusSilenceTimer();
              }
              const interim = text.trim();
              const preview = accumulatedRef.current ? accumulatedRef.current + (interim ? " " + interim : "") : interim;
              setVoiceState((prev) => {
                if (prev.voiceInterimTranscript === preview) return prev;
                return { ...prev, voiceInterimTranscript: preview };
              });
            }
          },
          onError: (error, opts) => {
            if (isStale()) {
              logForDebugging(
                `[voice] ignoring onError from stale session: ${error}`
              );
              return;
            }
            if (attemptGenRef.current !== myAttemptGen) {
              logForDebugging(
                `[voice] ignoring stale onError from superseded attempt: ${error}`
              );
              return;
            }
            if (!opts?.fatal && !sawTranscript && stateRef.current === "recording") {
              if (!retryUsedRef.current) {
                retryUsedRef.current = true;
                logForDebugging(
                  `[voice] early voice_stream error (pre-transcript), retrying once: ${error}`
                );
                logEvent("tengu_voice_stream_early_retry", {});
                connectionRef.current = null;
                attemptGenRef.current++;
                setTimeout(
                  (stateRef2, attemptConnect2, keyterms2) => {
                    if (stateRef2.current === "recording") {
                      attemptConnect2(keyterms2);
                    }
                  },
                  250,
                  stateRef,
                  attemptConnect,
                  keyterms
                );
                return;
              }
            }
            attemptGenRef.current++;
            logError(new Error(`[voice] voice_stream error: ${error}`));
            onErrorRef.current?.(`Voice stream error: ${error}`);
            audioBuffer.length = 0;
            focusTriggeredRef.current = false;
            cleanup();
            updateState("idle");
          },
          onClose: () => {
          },
          onReady: (conn) => {
            if (isStale() || stateRef.current !== "recording") {
              conn.close();
              return;
            }
            connectionRef.current = conn;
            everConnectedRef.current = true;
            const SLICE_TARGET_BYTES = 32e3;
            if (audioBuffer.length > 0) {
              let totalBytes = 0;
              for (const c of audioBuffer) totalBytes += c.length;
              const slices = [[]];
              let sliceBytes = 0;
              for (const chunk of audioBuffer) {
                if (sliceBytes > 0 && sliceBytes + chunk.length > SLICE_TARGET_BYTES) {
                  slices.push([]);
                  sliceBytes = 0;
                }
                slices[slices.length - 1].push(chunk);
                sliceBytes += chunk.length;
              }
              logForDebugging(
                `[voice] onReady: flushing ${String(audioBuffer.length)} buffered chunks (${String(totalBytes)} bytes) as ${String(slices.length)} coalesced frame(s)`
              );
              for (const slice of slices) {
                conn.send(Buffer.concat(slice));
              }
            }
            audioBuffer.length = 0;
            if (releaseTimerRef.current) {
              clearTimeout(releaseTimerRef.current);
            }
            if (seenRepeatRef.current) {
              releaseTimerRef.current = setTimeout(
                (releaseTimerRef2, stateRef2, finishRecording2) => {
                  releaseTimerRef2.current = null;
                  if (stateRef2.current === "recording") {
                    finishRecording2();
                  }
                },
                RELEASE_TIMEOUT_MS,
                releaseTimerRef,
                stateRef,
                finishRecording
              );
            }
          }
        },
        {
          language: stt.code,
          keyterms
        }
      ).then((conn) => {
        if (isStale()) {
          conn?.close();
          return;
        }
        if (!conn) {
          logForDebugging(
            "[voice] Failed to connect to voice_stream (no OAuth token?)"
          );
          onErrorRef.current?.(
            "Voice mode requires a Claude.ai account. Please run /login to sign in."
          );
          audioBuffer.length = 0;
          cleanup();
          updateState("idle");
          return;
        }
        if (stateRef.current !== "recording") {
          audioBuffer.length = 0;
          conn.close();
          return;
        }
      });
    };
    void getVoiceKeyterms().then(attemptConnect);
  }
  const handleKeyEvent = useCallback(
    (fallbackMs = REPEAT_FALLBACK_MS) => {
      if (!enabled || !isVoiceStreamAvailable()) {
        return;
      }
      if (focusTriggeredRef.current) {
        return;
      }
      if (focusMode && silenceTimedOutRef.current) {
        logForDebugging(
          "[voice] Re-arming focus recording after silence timeout"
        );
        silenceTimedOutRef.current = false;
        focusTriggeredRef.current = true;
        void startRecordingSession();
        armFocusSilenceTimer();
        return;
      }
      const currentState = stateRef.current;
      if (currentState === "processing") {
        return;
      }
      if (currentState === "idle") {
        logForDebugging(
          "[voice] handleKeyEvent: idle, starting recording session immediately"
        );
        void startRecordingSession();
        repeatFallbackTimerRef.current = setTimeout(
          (repeatFallbackTimerRef2, stateRef2, seenRepeatRef2, releaseTimerRef2, finishRecording2) => {
            repeatFallbackTimerRef2.current = null;
            if (stateRef2.current === "recording" && !seenRepeatRef2.current) {
              logForDebugging(
                "[voice] No auto-repeat seen, arming release timer via fallback"
              );
              seenRepeatRef2.current = true;
              releaseTimerRef2.current = setTimeout(
                (releaseTimerRef3, stateRef3, finishRecording3) => {
                  releaseTimerRef3.current = null;
                  if (stateRef3.current === "recording") {
                    finishRecording3();
                  }
                },
                RELEASE_TIMEOUT_MS,
                releaseTimerRef2,
                stateRef2,
                finishRecording2
              );
            }
          },
          fallbackMs,
          repeatFallbackTimerRef,
          stateRef,
          seenRepeatRef,
          releaseTimerRef,
          finishRecording
        );
      } else if (currentState === "recording") {
        seenRepeatRef.current = true;
        if (repeatFallbackTimerRef.current) {
          clearTimeout(repeatFallbackTimerRef.current);
          repeatFallbackTimerRef.current = null;
        }
      }
      if (releaseTimerRef.current) {
        clearTimeout(releaseTimerRef.current);
      }
      if (stateRef.current === "recording" && seenRepeatRef.current) {
        releaseTimerRef.current = setTimeout(
          (releaseTimerRef2, stateRef2, finishRecording2) => {
            releaseTimerRef2.current = null;
            if (stateRef2.current === "recording") {
              finishRecording2();
            }
          },
          RELEASE_TIMEOUT_MS,
          releaseTimerRef,
          stateRef,
          finishRecording
        );
      }
    },
    [enabled, focusMode, cleanup]
  );
  useEffect(() => {
    if (!enabled && stateRef.current !== "idle") {
      cleanup();
      updateState("idle");
    }
    return () => {
      cleanup();
    };
  }, [enabled, cleanup]);
  return {
    state,
    handleKeyEvent
  };
}
var DEFAULT_STT_LANGUAGE, LANGUAGE_NAME_TO_CODE, SUPPORTED_LANGUAGE_CODES, voiceModule, RELEASE_TIMEOUT_MS, REPEAT_FALLBACK_MS, FIRST_PRESS_FALLBACK_MS, FOCUS_SILENCE_TIMEOUT_MS, AUDIO_LEVEL_BARS;
var init_useVoice = __esm({
  "src/hooks/useVoice.ts"() {
    init_react();
    init_voice();
    init_use_terminal_focus();
    init_analytics();
    init_voiceKeyterms();
    init_voiceStreamSTT();
    init_debug();
    init_errors();
    init_intl();
    init_log();
    init_settings();
    init_sleep();
    DEFAULT_STT_LANGUAGE = "en";
    LANGUAGE_NAME_TO_CODE = {
      english: "en",
      spanish: "es",
      espa\u00F1ol: "es",
      espanol: "es",
      french: "fr",
      fran\u00E7ais: "fr",
      francais: "fr",
      japanese: "ja",
      \u65E5\u672C\u8A9E: "ja",
      german: "de",
      deutsch: "de",
      portuguese: "pt",
      portugu\u00EAs: "pt",
      portugues: "pt",
      italian: "it",
      italiano: "it",
      korean: "ko",
      \uD55C\uAD6D\uC5B4: "ko",
      hindi: "hi",
      \u0939\u093F\u0928\u094D\u0926\u0940: "hi",
      \u0939\u093F\u0902\u0926\u0940: "hi",
      indonesian: "id",
      "bahasa indonesia": "id",
      bahasa: "id",
      russian: "ru",
      \u0440\u0443\u0441\u0441\u043A\u0438\u0439: "ru",
      polish: "pl",
      polski: "pl",
      turkish: "tr",
      t\u00FCrk\u00E7e: "tr",
      turkce: "tr",
      dutch: "nl",
      nederlands: "nl",
      ukrainian: "uk",
      \u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430: "uk",
      greek: "el",
      \u03B5\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC: "el",
      czech: "cs",
      \u010De\u0161tina: "cs",
      cestina: "cs",
      danish: "da",
      dansk: "da",
      swedish: "sv",
      svenska: "sv",
      norwegian: "no",
      norsk: "no"
    };
    SUPPORTED_LANGUAGE_CODES = /* @__PURE__ */ new Set([
      "en",
      "es",
      "fr",
      "ja",
      "de",
      "pt",
      "it",
      "ko",
      "hi",
      "id",
      "ru",
      "pl",
      "tr",
      "nl",
      "uk",
      "el",
      "cs",
      "da",
      "sv",
      "no"
    ]);
    voiceModule = null;
    RELEASE_TIMEOUT_MS = 200;
    REPEAT_FALLBACK_MS = 600;
    FIRST_PRESS_FALLBACK_MS = 2e3;
    FOCUS_SILENCE_TIMEOUT_MS = 5e3;
    AUDIO_LEVEL_BARS = 16;
  }
});

export {
  normalizeLanguageForSTT,
  useVoice_exports,
  init_useVoice
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3NlcnZpY2VzL3ZvaWNlS2V5dGVybXMudHMiLCAiLi4vLi4vc3JjL2hvb2tzL3VzZVZvaWNlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBWb2ljZSBrZXl0ZXJtcyBmb3IgaW1wcm92aW5nIFNUVCBhY2N1cmFjeSBpbiB0aGUgdm9pY2Vfc3RyZWFtIGVuZHBvaW50LlxuLy9cbi8vIFByb3ZpZGVzIGRvbWFpbi1zcGVjaWZpYyB2b2NhYnVsYXJ5IGhpbnRzIChEZWVwZ3JhbSBcImtleXdvcmRzXCIpIHNvIHRoZSBTVFRcbi8vIGVuZ2luZSBjb3JyZWN0bHkgcmVjb2duaXNlcyBjb2RpbmcgdGVybWlub2xvZ3ksIHByb2plY3QgbmFtZXMsIGFuZCBicmFuY2hcbi8vIG5hbWVzIHRoYXQgd291bGQgb3RoZXJ3aXNlIGJlIG1pc2hlYXJkLlxuXG5pbXBvcnQgeyBiYXNlbmFtZSB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBnZXRQcm9qZWN0Um9vdCB9IGZyb20gJy4uL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB7IGdldEJyYW5jaCB9IGZyb20gJy4uL3V0aWxzL2dpdC5qcydcblxuLy8gXHUyNTAwXHUyNTAwXHUyNTAwIEdsb2JhbCBrZXl0ZXJtcyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuY29uc3QgR0xPQkFMX0tFWVRFUk1TOiByZWFkb25seSBzdHJpbmdbXSA9IFtcbiAgLy8gVGVybXMgRGVlcGdyYW0gY29uc2lzdGVudGx5IG1hbmdsZXMgd2l0aG91dCBrZXl3b3JkIGhpbnRzLlxuICAvLyBOb3RlOiBcIkNsYXVkZVwiIGFuZCBcIkFudGhyb3BpY1wiIGFyZSBhbHJlYWR5IHNlcnZlci1zaWRlIGJhc2Uga2V5dGVybXMuXG4gIC8vIEF2b2lkIHRlcm1zIG5vYm9keSBzcGVha3MgYWxvdWQgYXMtc3BlbGxlZCAoc3Rkb3V0IFx1MjE5MiBcInN0YW5kYXJkIG91dFwiKS5cbiAgJ01DUCcsXG4gICdzeW1saW5rJyxcbiAgJ2dyZXAnLFxuICAncmVnZXgnLFxuICAnbG9jYWxob3N0JyxcbiAgJ2NvZGViYXNlJyxcbiAgJ1R5cGVTY3JpcHQnLFxuICAnSlNPTicsXG4gICdPQXV0aCcsXG4gICd3ZWJob29rJyxcbiAgJ2dSUEMnLFxuICAnZG90ZmlsZXMnLFxuICAnc3ViYWdlbnQnLFxuICAnd29ya3RyZWUnLFxuXVxuXG4vLyBcdTI1MDBcdTI1MDBcdTI1MDAgSGVscGVycyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuLyoqXG4gKiBTcGxpdCBhbiBpZGVudGlmaWVyIChjYW1lbENhc2UsIFBhc2NhbENhc2UsIGtlYmFiLWNhc2UsIHNuYWtlX2Nhc2UsIG9yXG4gKiBwYXRoIHNlZ21lbnRzKSBpbnRvIGluZGl2aWR1YWwgd29yZHMuICBGcmFnbWVudHMgb2YgMiBjaGFycyBvciBmZXdlciBhcmVcbiAqIGRpc2NhcmRlZCB0byBhdm9pZCBub2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0SWRlbnRpZmllcihuYW1lOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIHJldHVybiBuYW1lXG4gICAgLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMSAkMicpXG4gICAgLnNwbGl0KC9bLV8uL1xcc10rLylcbiAgICAubWFwKHcgPT4gdy50cmltKCkpXG4gICAgLmZpbHRlcih3ID0+IHcubGVuZ3RoID4gMiAmJiB3Lmxlbmd0aCA8PSAyMClcbn1cblxuZnVuY3Rpb24gZmlsZU5hbWVXb3JkcyhmaWxlUGF0aDogc3RyaW5nKTogc3RyaW5nW10ge1xuICBjb25zdCBzdGVtID0gYmFzZW5hbWUoZmlsZVBhdGgpLnJlcGxhY2UoL1xcLlteLl0rJC8sICcnKVxuICByZXR1cm4gc3BsaXRJZGVudGlmaWVyKHN0ZW0pXG59XG5cbi8vIFx1MjUwMFx1MjUwMFx1MjUwMCBQdWJsaWMgQVBJIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG5jb25zdCBNQVhfS0VZVEVSTVMgPSA1MFxuXG4vKipcbiAqIEJ1aWxkIGEgbGlzdCBvZiBrZXl0ZXJtcyBmb3IgdGhlIHZvaWNlX3N0cmVhbSBTVFQgZW5kcG9pbnQuXG4gKlxuICogQ29tYmluZXMgaGFyZGNvZGVkIGdsb2JhbCBjb2RpbmcgdGVybXMgd2l0aCBzZXNzaW9uIGNvbnRleHQgKHByb2plY3QgbmFtZSxcbiAqIGdpdCBicmFuY2gsIHJlY2VudCBmaWxlcykgd2l0aG91dCBhbnkgbW9kZWwgY2FsbHMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRWb2ljZUtleXRlcm1zKFxuICByZWNlbnRGaWxlcz86IFJlYWRvbmx5U2V0PHN0cmluZz4sXG4pOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gIGNvbnN0IHRlcm1zID0gbmV3IFNldDxzdHJpbmc+KEdMT0JBTF9LRVlURVJNUylcblxuICAvLyBQcm9qZWN0IHJvb3QgYmFzZW5hbWUgYXMgYSBzaW5nbGUgdGVybSBcdTIwMTQgdXNlcnMgc2F5IFwiY2xhdWRlIENMSSBpbnRlcm5hbFwiXG4gIC8vIGFzIGEgcGhyYXNlLCBub3QgaXNvbGF0ZWQgd29yZHMuIEtlZXBpbmcgdGhlIHdob2xlIGJhc2VuYW1lIGxldHMgdGhlXG4gIC8vIFNUVCdzIGtleXRlcm0gYm9vc3RpbmcgbWF0Y2ggdGhlIHBocmFzZSByZWdhcmRsZXNzIG9mIHNlcGFyYXRvci5cbiAgdHJ5IHtcbiAgICBjb25zdCBwcm9qZWN0Um9vdCA9IGdldFByb2plY3RSb290KClcbiAgICBpZiAocHJvamVjdFJvb3QpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBiYXNlbmFtZShwcm9qZWN0Um9vdClcbiAgICAgIGlmIChuYW1lLmxlbmd0aCA+IDIgJiYgbmFtZS5sZW5ndGggPD0gNTApIHtcbiAgICAgICAgdGVybXMuYWRkKG5hbWUpXG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIHtcbiAgICAvLyBnZXRQcm9qZWN0Um9vdCgpIG1heSB0aHJvdyBpZiBub3QgaW5pdGlhbGlzZWQgeWV0IFx1MjAxNCBpZ25vcmVcbiAgfVxuXG4gIC8vIEdpdCBicmFuY2ggd29yZHMgKGUuZy4gXCJmZWF0L3ZvaWNlLWtleXRlcm1zXCIgXHUyMTkyIFwiZmVhdFwiLCBcInZvaWNlXCIsIFwia2V5dGVybXNcIilcbiAgdHJ5IHtcbiAgICBjb25zdCBicmFuY2ggPSBhd2FpdCBnZXRCcmFuY2goKVxuICAgIGlmIChicmFuY2gpIHtcbiAgICAgIGZvciAoY29uc3Qgd29yZCBvZiBzcGxpdElkZW50aWZpZXIoYnJhbmNoKSkge1xuICAgICAgICB0ZXJtcy5hZGQod29yZClcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2gge1xuICAgIC8vIGdldEJyYW5jaCgpIG1heSBmYWlsIGlmIG5vdCBpbiBhIGdpdCByZXBvIFx1MjAxNCBpZ25vcmVcbiAgfVxuXG4gIC8vIFJlY2VudCBmaWxlIG5hbWVzIFx1MjAxNCBvbmx5IHNjYW4gZW5vdWdoIHRvIGZpbGwgcmVtYWluaW5nIHNsb3RzXG4gIGlmIChyZWNlbnRGaWxlcykge1xuICAgIGZvciAoY29uc3QgZmlsZVBhdGggb2YgcmVjZW50RmlsZXMpIHtcbiAgICAgIGlmICh0ZXJtcy5zaXplID49IE1BWF9LRVlURVJNUykgYnJlYWtcbiAgICAgIGZvciAoY29uc3Qgd29yZCBvZiBmaWxlTmFtZVdvcmRzKGZpbGVQYXRoKSkge1xuICAgICAgICB0ZXJtcy5hZGQod29yZClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gWy4uLnRlcm1zXS5zbGljZSgwLCBNQVhfS0VZVEVSTVMpXG59XG4iLCAiLy8gUmVhY3QgaG9vayBmb3IgaG9sZC10by10YWxrIHZvaWNlIGlucHV0IHVzaW5nIEFudGhyb3BpYyB2b2ljZV9zdHJlYW0gU1RULlxuLy9cbi8vIEhvbGQgdGhlIGtleWJpbmRpbmcgdG8gcmVjb3JkOyByZWxlYXNlIHRvIHN0b3AgYW5kIHN1Ym1pdC4gIEF1dG8tcmVwZWF0XG4vLyBrZXkgZXZlbnRzIHJlc2V0IGFuIGludGVybmFsIHRpbWVyIFx1MjAxNCB3aGVuIG5vIGtleXByZXNzIGFycml2ZXMgd2l0aGluXG4vLyBSRUxFQVNFX1RJTUVPVVRfTVMgdGhlIHJlY29yZGluZyBzdG9wcyBhdXRvbWF0aWNhbGx5LiAgVXNlcyB0aGUgbmF0aXZlXG4vLyBhdWRpbyBtb2R1bGUgKG1hY09TKSBvciBTb1ggZm9yIHJlY29yZGluZywgYW5kIEFudGhyb3BpYydzIHZvaWNlX3N0cmVhbVxuLy8gZW5kcG9pbnQgKGNvbnZlcnNhdGlvbl9lbmdpbmUpIGZvciBTVFQuXG5cbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNldFZvaWNlU3RhdGUgfSBmcm9tICcuLi9jb250ZXh0L3ZvaWNlLmpzJ1xuaW1wb3J0IHsgdXNlVGVybWluYWxGb2N1cyB9IGZyb20gJy4uL2luay9ob29rcy91c2UtdGVybWluYWwtZm9jdXMuanMnXG5pbXBvcnQge1xuICB0eXBlIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gIGxvZ0V2ZW50LFxufSBmcm9tICcuLi9zZXJ2aWNlcy9hbmFseXRpY3MvaW5kZXguanMnXG5pbXBvcnQgeyBnZXRWb2ljZUtleXRlcm1zIH0gZnJvbSAnLi4vc2VydmljZXMvdm9pY2VLZXl0ZXJtcy5qcydcbmltcG9ydCB7XG4gIGNvbm5lY3RWb2ljZVN0cmVhbSxcbiAgdHlwZSBGaW5hbGl6ZVNvdXJjZSxcbiAgaXNWb2ljZVN0cmVhbUF2YWlsYWJsZSxcbiAgdHlwZSBWb2ljZVN0cmVhbUNvbm5lY3Rpb24sXG59IGZyb20gJy4uL3NlcnZpY2VzL3ZvaWNlU3RyZWFtU1RULmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi4vdXRpbHMvZGVidWcuanMnXG5pbXBvcnQgeyB0b0Vycm9yIH0gZnJvbSAnLi4vdXRpbHMvZXJyb3JzLmpzJ1xuaW1wb3J0IHsgZ2V0U3lzdGVtTG9jYWxlTGFuZ3VhZ2UgfSBmcm9tICcuLi91dGlscy9pbnRsLmpzJ1xuaW1wb3J0IHsgbG9nRXJyb3IgfSBmcm9tICcuLi91dGlscy9sb2cuanMnXG5pbXBvcnQgeyBnZXRJbml0aWFsU2V0dGluZ3MgfSBmcm9tICcuLi91dGlscy9zZXR0aW5ncy9zZXR0aW5ncy5qcydcbmltcG9ydCB7IHNsZWVwIH0gZnJvbSAnLi4vdXRpbHMvc2xlZXAuanMnXG5cbi8vIFx1MjUwMFx1MjUwMFx1MjUwMCBMYW5ndWFnZSBub3JtYWxpemF0aW9uIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG5jb25zdCBERUZBVUxUX1NUVF9MQU5HVUFHRSA9ICdlbidcblxuLy8gTWFwcyBsYW5ndWFnZSBuYW1lcyAoRW5nbGlzaCBhbmQgbmF0aXZlKSB0byBCQ1AtNDcgY29kZXMgc3VwcG9ydGVkIGJ5XG4vLyB0aGUgdm9pY2Vfc3RyZWFtIERlZXBncmFtIGJhY2tlbmQuICBLZXlzIG11c3QgYmUgbG93ZXJjYXNlLlxuLy9cbi8vIFRoaXMgbGlzdCBtdXN0IGJlIGEgU1VCU0VUIG9mIHRoZSBzZXJ2ZXItc2lkZSBzdXBwb3J0ZWRfbGFuZ3VhZ2VfY29kZXNcbi8vIGFsbG93bGlzdCAoR3Jvd3RoQm9vazogc3BlZWNoX3RvX3RleHRfdm9pY2Vfc3RyZWFtX2NvbmZpZykuXG4vLyBJZiB0aGUgQ0xJIHNlbmRzIGEgY29kZSB0aGUgc2VydmVyIHJlamVjdHMsIHRoZSBXZWJTb2NrZXQgY2xvc2VzIHdpdGhcbi8vIDEwMDggXCJVbnN1cHBvcnRlZCBsYW5ndWFnZVwiIGFuZCB2b2ljZSBicmVha3MuICBVbnN1cHBvcnRlZCBsYW5ndWFnZXNcbi8vIGZhbGwgYmFjayB0byBERUZBVUxUX1NUVF9MQU5HVUFHRSBzbyByZWNvcmRpbmcgc3RpbGwgd29ya3MuXG5jb25zdCBMQU5HVUFHRV9OQU1FX1RPX0NPREU6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIGVuZ2xpc2g6ICdlbicsXG4gIHNwYW5pc2g6ICdlcycsXG4gIGVzcGFcdTAwRjFvbDogJ2VzJyxcbiAgZXNwYW5vbDogJ2VzJyxcbiAgZnJlbmNoOiAnZnInLFxuICBmcmFuXHUwMEU3YWlzOiAnZnInLFxuICBmcmFuY2FpczogJ2ZyJyxcbiAgamFwYW5lc2U6ICdqYScsXG4gIFx1NjVFNVx1NjcyQ1x1OEE5RTogJ2phJyxcbiAgZ2VybWFuOiAnZGUnLFxuICBkZXV0c2NoOiAnZGUnLFxuICBwb3J0dWd1ZXNlOiAncHQnLFxuICBwb3J0dWd1XHUwMEVBczogJ3B0JyxcbiAgcG9ydHVndWVzOiAncHQnLFxuICBpdGFsaWFuOiAnaXQnLFxuICBpdGFsaWFubzogJ2l0JyxcbiAga29yZWFuOiAna28nLFxuICBcdUQ1NUNcdUFENkRcdUM1QjQ6ICdrbycsXG4gIGhpbmRpOiAnaGknLFxuICBcdTA5MzlcdTA5M0ZcdTA5MjhcdTA5NERcdTA5MjZcdTA5NDA6ICdoaScsXG4gIFx1MDkzOVx1MDkzRlx1MDkwMlx1MDkyNlx1MDk0MDogJ2hpJyxcbiAgaW5kb25lc2lhbjogJ2lkJyxcbiAgJ2JhaGFzYSBpbmRvbmVzaWEnOiAnaWQnLFxuICBiYWhhc2E6ICdpZCcsXG4gIHJ1c3NpYW46ICdydScsXG4gIFx1MDQ0MFx1MDQ0M1x1MDQ0MVx1MDQ0MVx1MDQzQVx1MDQzOFx1MDQzOTogJ3J1JyxcbiAgcG9saXNoOiAncGwnLFxuICBwb2xza2k6ICdwbCcsXG4gIHR1cmtpc2g6ICd0cicsXG4gIHRcdTAwRkNya1x1MDBFN2U6ICd0cicsXG4gIHR1cmtjZTogJ3RyJyxcbiAgZHV0Y2g6ICdubCcsXG4gIG5lZGVybGFuZHM6ICdubCcsXG4gIHVrcmFpbmlhbjogJ3VrJyxcbiAgXHUwNDQzXHUwNDNBXHUwNDQwXHUwNDMwXHUwNDU3XHUwNDNEXHUwNDQxXHUwNDRDXHUwNDNBXHUwNDMwOiAndWsnLFxuICBncmVlazogJ2VsJyxcbiAgXHUwM0I1XHUwM0JCXHUwM0JCXHUwM0I3XHUwM0JEXHUwM0I5XHUwM0JBXHUwM0FDOiAnZWwnLFxuICBjemVjaDogJ2NzJyxcbiAgXHUwMTBEZVx1MDE2MXRpbmE6ICdjcycsXG4gIGNlc3RpbmE6ICdjcycsXG4gIGRhbmlzaDogJ2RhJyxcbiAgZGFuc2s6ICdkYScsXG4gIHN3ZWRpc2g6ICdzdicsXG4gIHN2ZW5za2E6ICdzdicsXG4gIG5vcndlZ2lhbjogJ25vJyxcbiAgbm9yc2s6ICdubycsXG59XG5cbi8vIFN1YnNldCBvZiB0aGUgR3Jvd3RoQm9vayBzcGVlY2hfdG9fdGV4dF92b2ljZV9zdHJlYW1fY29uZmlnIGFsbG93bGlzdC5cbi8vIFNlbmRpbmcgYSBjb2RlIG5vdCBpbiB0aGUgc2VydmVyIGFsbG93bGlzdCBjbG9zZXMgdGhlIGNvbm5lY3Rpb24uXG5jb25zdCBTVVBQT1JURURfTEFOR1VBR0VfQ09ERVMgPSBuZXcgU2V0KFtcbiAgJ2VuJyxcbiAgJ2VzJyxcbiAgJ2ZyJyxcbiAgJ2phJyxcbiAgJ2RlJyxcbiAgJ3B0JyxcbiAgJ2l0JyxcbiAgJ2tvJyxcbiAgJ2hpJyxcbiAgJ2lkJyxcbiAgJ3J1JyxcbiAgJ3BsJyxcbiAgJ3RyJyxcbiAgJ25sJyxcbiAgJ3VrJyxcbiAgJ2VsJyxcbiAgJ2NzJyxcbiAgJ2RhJyxcbiAgJ3N2JyxcbiAgJ25vJyxcbl0pXG5cbi8vIE5vcm1hbGl6ZSBhIGxhbmd1YWdlIHByZWZlcmVuY2Ugc3RyaW5nIChmcm9tIHNldHRpbmdzLmxhbmd1YWdlKSB0byBhXG4vLyBCQ1AtNDcgY29kZSBzdXBwb3J0ZWQgYnkgdGhlIHZvaWNlX3N0cmVhbSBlbmRwb2ludC4gIFJldHVybnMgdGhlXG4vLyBkZWZhdWx0IGxhbmd1YWdlIGlmIHRoZSBpbnB1dCBjYW5ub3QgYmUgcmVzb2x2ZWQuICBXaGVuIHRoZSBpbnB1dCBpc1xuLy8gbm9uLWVtcHR5IGJ1dCB1bnN1cHBvcnRlZCwgZmVsbEJhY2tGcm9tIGlzIHNldCB0byB0aGUgb3JpZ2luYWwgaW5wdXQgc29cbi8vIGNhbGxlcnMgY2FuIHN1cmZhY2UgYSB3YXJuaW5nLlxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUxhbmd1YWdlRm9yU1RUKGxhbmd1YWdlOiBzdHJpbmcgfCB1bmRlZmluZWQpOiB7XG4gIGNvZGU6IHN0cmluZ1xuICBmZWxsQmFja0Zyb20/OiBzdHJpbmdcbn0ge1xuICBpZiAoIWxhbmd1YWdlKSByZXR1cm4geyBjb2RlOiBERUZBVUxUX1NUVF9MQU5HVUFHRSB9XG4gIGNvbnN0IGxvd2VyID0gbGFuZ3VhZ2UudG9Mb3dlckNhc2UoKS50cmltKClcbiAgaWYgKCFsb3dlcikgcmV0dXJuIHsgY29kZTogREVGQVVMVF9TVFRfTEFOR1VBR0UgfVxuICBpZiAoU1VQUE9SVEVEX0xBTkdVQUdFX0NPREVTLmhhcyhsb3dlcikpIHJldHVybiB7IGNvZGU6IGxvd2VyIH1cbiAgY29uc3QgZnJvbU5hbWUgPSBMQU5HVUFHRV9OQU1FX1RPX0NPREVbbG93ZXJdXG4gIGlmIChmcm9tTmFtZSkgcmV0dXJuIHsgY29kZTogZnJvbU5hbWUgfVxuICBjb25zdCBiYXNlID0gbG93ZXIuc3BsaXQoJy0nKVswXVxuICBpZiAoYmFzZSAmJiBTVVBQT1JURURfTEFOR1VBR0VfQ09ERVMuaGFzKGJhc2UpKSByZXR1cm4geyBjb2RlOiBiYXNlIH1cbiAgcmV0dXJuIHsgY29kZTogREVGQVVMVF9TVFRfTEFOR1VBR0UsIGZlbGxCYWNrRnJvbTogbGFuZ3VhZ2UgfVxufVxuXG4vLyBMYXp5LWxvYWRlZCB2b2ljZSBtb2R1bGUuIFdlIGRlZmVyIGltcG9ydGluZyB2b2ljZS50cyAoYW5kIGl0cyBuYXRpdmVcbi8vIGF1ZGlvLWNhcHR1cmUtbmFwaSBkZXBlbmRlbmN5KSB1bnRpbCB2b2ljZSBpbnB1dCBpcyBhY3R1YWxseSBhY3RpdmF0ZWQuXG4vLyBPbiBtYWNPUywgbG9hZGluZyB0aGUgbmF0aXZlIGF1ZGlvIG1vZHVsZSBjYW4gdHJpZ2dlciBhIFRDQyBtaWNyb3Bob25lXG4vLyBwZXJtaXNzaW9uIHByb21wdCBcdTIwMTQgd2UgbXVzdCBhdm9pZCB0aGF0IHVudGlsIHZvaWNlIGlucHV0IGlzIGFjdHVhbGx5IGVuYWJsZWQuXG50eXBlIFZvaWNlTW9kdWxlID0gdHlwZW9mIGltcG9ydCgnLi4vc2VydmljZXMvdm9pY2UuanMnKVxubGV0IHZvaWNlTW9kdWxlOiBWb2ljZU1vZHVsZSB8IG51bGwgPSBudWxsXG5cbnR5cGUgVm9pY2VTdGF0ZSA9ICdpZGxlJyB8ICdyZWNvcmRpbmcnIHwgJ3Byb2Nlc3NpbmcnXG5cbnR5cGUgVXNlVm9pY2VPcHRpb25zID0ge1xuICBvblRyYW5zY3JpcHQ6ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWRcbiAgb25FcnJvcj86IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWRcbiAgZW5hYmxlZDogYm9vbGVhblxuICBmb2N1c01vZGU6IGJvb2xlYW5cbn1cblxudHlwZSBVc2VWb2ljZVJldHVybiA9IHtcbiAgc3RhdGU6IFZvaWNlU3RhdGVcbiAgaGFuZGxlS2V5RXZlbnQ6IChmYWxsYmFja01zPzogbnVtYmVyKSA9PiB2b2lkXG59XG5cbi8vIEdhcCAobXMpIGJldHdlZW4gYXV0by1yZXBlYXQga2V5IGV2ZW50cyB0aGF0IHNpZ25hbHMga2V5IHJlbGVhc2UuXG4vLyBUZXJtaW5hbCBhdXRvLXJlcGVhdCB0eXBpY2FsbHkgZmlyZXMgZXZlcnkgMzAtODBtczsgMjAwbXMgY29tZm9ydGFibHlcbi8vIGNvdmVycyBqaXR0ZXIgd2hpbGUgc3RpbGwgZmVlbGluZyByZXNwb25zaXZlLlxuY29uc3QgUkVMRUFTRV9USU1FT1VUX01TID0gMjAwXG5cbi8vIEZhbGxiYWNrIChtcykgdG8gYXJtIHRoZSByZWxlYXNlIHRpbWVyIGlmIG5vIGF1dG8tcmVwZWF0IGlzIHNlZW4uXG4vLyBtYWNPUyBkZWZhdWx0IGtleSByZXBlYXQgZGVsYXkgaXMgfjUwMG1zOyA2MDBtcyBnaXZlcyBoZWFkcm9vbS5cbi8vIElmIHRoZSB1c2VyIHRhcHBlZCBhbmQgcmVsZWFzZWQgYmVmb3JlIGF1dG8tcmVwZWF0IHN0YXJ0ZWQsIHRoaXNcbi8vIGVuc3VyZXMgdGhlIHJlbGVhc2UgdGltZXIgZ2V0cyBhcm1lZCBhbmQgcmVjb3JkaW5nIHN0b3BzLlxuLy9cbi8vIEZvciBtb2RpZmllci1jb21ibyBmaXJzdC1wcmVzcyBhY3RpdmF0aW9uIChoYW5kbGVLZXlFdmVudCBjYWxsZWQgYXRcbi8vIHQ9MCwgYmVmb3JlIGFueSBhdXRvLXJlcGVhdCksIGNhbGxlcnMgc2hvdWxkIHBhc3MgRklSU1RfUFJFU1NfRkFMTEJBQ0tfTVNcbi8vIGluc3RlYWQgXHUyMDE0IHRoZSBnYXAgdG8gdGhlIG5leHQga2V5cHJlc3MgaXMgdGhlIE9TIGluaXRpYWwgcmVwZWF0ICpkZWxheSpcbi8vICh1cCB0byB+MnMgb24gbWFjT1Mgd2l0aCBzbGlkZXIgYXQgXCJMb25nXCIpLCBub3QgdGhlIHJlcGVhdCAqcmF0ZSouXG5jb25zdCBSRVBFQVRfRkFMTEJBQ0tfTVMgPSA2MDBcbmV4cG9ydCBjb25zdCBGSVJTVF9QUkVTU19GQUxMQkFDS19NUyA9IDIwMDBcblxuLy8gSG93IGxvbmcgKG1zKSB0byBrZWVwIGEgZm9jdXMtbW9kZSBzZXNzaW9uIGFsaXZlIHdpdGhvdXQgYW55IHNwZWVjaFxuLy8gYmVmb3JlIHRlYXJpbmcgaXQgZG93biB0byBmcmVlIHRoZSBXZWJTb2NrZXQgY29ubmVjdGlvbi4gUmUtYXJtcyBvblxuLy8gdGhlIG5leHQgZm9jdXMgY3ljbGUgKGJsdXIgXHUyMTkyIHJlZm9jdXMpLlxuY29uc3QgRk9DVVNfU0lMRU5DRV9USU1FT1VUX01TID0gNV8wMDBcblxuLy8gTnVtYmVyIG9mIGJhcnMgc2hvd24gaW4gdGhlIHJlY29yZGluZyB3YXZlZm9ybSB2aXN1YWxpemVyLlxuY29uc3QgQVVESU9fTEVWRUxfQkFSUyA9IDE2XG5cbi8vIENvbXB1dGUgUk1TIGFtcGxpdHVkZSBmcm9tIGEgMTYtYml0IHNpZ25lZCBQQ00gYnVmZmVyIGFuZCByZXR1cm4gYVxuLy8gbm9ybWFsaXplZCAwLTEgdmFsdWUuIEEgc3FydCBjdXJ2ZSBzcHJlYWRzIHF1aWV0ZXIgbGV2ZWxzIGFjcm9zcyBtb3JlXG4vLyBvZiB0aGUgdmlzdWFsIHJhbmdlIHNvIHRoZSB3YXZlZm9ybSB1c2VzIHRoZSBmdWxsIHNldCBvZiBibG9jayBoZWlnaHRzLlxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVMZXZlbChjaHVuazogQnVmZmVyKTogbnVtYmVyIHtcbiAgY29uc3Qgc2FtcGxlcyA9IGNodW5rLmxlbmd0aCA+PiAxIC8vIDE2LWJpdCA9IDIgYnl0ZXMgcGVyIHNhbXBsZVxuICBpZiAoc2FtcGxlcyA9PT0gMCkgcmV0dXJuIDBcbiAgbGV0IHN1bVNxID0gMFxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNodW5rLmxlbmd0aCAtIDE7IGkgKz0gMikge1xuICAgIC8vIFJlYWQgMTYtYml0IHNpZ25lZCBsaXR0bGUtZW5kaWFuXG4gICAgY29uc3Qgc2FtcGxlID0gKChjaHVua1tpXSEgfCAoY2h1bmtbaSArIDFdISA8PCA4KSkgPDwgMTYpID4+IDE2XG4gICAgc3VtU3EgKz0gc2FtcGxlICogc2FtcGxlXG4gIH1cbiAgY29uc3Qgcm1zID0gTWF0aC5zcXJ0KHN1bVNxIC8gc2FtcGxlcylcbiAgY29uc3Qgbm9ybWFsaXplZCA9IE1hdGgubWluKHJtcyAvIDIwMDAsIDEpXG4gIHJldHVybiBNYXRoLnNxcnQobm9ybWFsaXplZClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVZvaWNlKHtcbiAgb25UcmFuc2NyaXB0LFxuICBvbkVycm9yLFxuICBlbmFibGVkLFxuICBmb2N1c01vZGUsXG59OiBVc2VWb2ljZU9wdGlvbnMpOiBVc2VWb2ljZVJldHVybiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGU8Vm9pY2VTdGF0ZT4oJ2lkbGUnKVxuICBjb25zdCBzdGF0ZVJlZiA9IHVzZVJlZjxWb2ljZVN0YXRlPignaWRsZScpXG4gIGNvbnN0IGNvbm5lY3Rpb25SZWYgPSB1c2VSZWY8Vm9pY2VTdHJlYW1Db25uZWN0aW9uIHwgbnVsbD4obnVsbClcbiAgY29uc3QgYWNjdW11bGF0ZWRSZWYgPSB1c2VSZWYoJycpXG4gIGNvbnN0IG9uVHJhbnNjcmlwdFJlZiA9IHVzZVJlZihvblRyYW5zY3JpcHQpXG4gIGNvbnN0IG9uRXJyb3JSZWYgPSB1c2VSZWYob25FcnJvcilcbiAgY29uc3QgY2xlYW51cFRpbWVyUmVmID0gdXNlUmVmPFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+IHwgbnVsbD4obnVsbClcbiAgY29uc3QgcmVsZWFzZVRpbWVyUmVmID0gdXNlUmVmPFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+IHwgbnVsbD4obnVsbClcbiAgLy8gVHJ1ZSBvbmNlIHdlJ3ZlIHNlZW4gYSBzZWNvbmQga2V5cHJlc3MgKGF1dG8tcmVwZWF0KSB3aGlsZSByZWNvcmRpbmcuXG4gIC8vIFRoZSBPUyBrZXkgcmVwZWF0IGRlbGF5ICh+NTAwbXMgb24gbWFjT1MpIG1lYW5zIHRoZSBmaXJzdCBrZXlwcmVzcyBpc1xuICAvLyBzb2xvIFx1MjAxNCBhcm1pbmcgdGhlIHJlbGVhc2UgdGltZXIgYmVmb3JlIGF1dG8tcmVwZWF0IHN0YXJ0cyB3b3VsZCBjYXVzZVxuICAvLyBhIGZhbHNlIHJlbGVhc2UuXG4gIGNvbnN0IHNlZW5SZXBlYXRSZWYgPSB1c2VSZWYoZmFsc2UpXG4gIGNvbnN0IHJlcGVhdEZhbGxiYWNrVGltZXJSZWYgPSB1c2VSZWY8UmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gfCBudWxsPihcbiAgICBudWxsLFxuICApXG4gIC8vIFRydWUgd2hlbiB0aGUgY3VycmVudCByZWNvcmRpbmcgc2Vzc2lvbiB3YXMgc3RhcnRlZCBieSB0ZXJtaW5hbCBmb2N1c1xuICAvLyAobm90IGJ5IGEga2V5cHJlc3MpLiBGb2N1cy1kcml2ZW4gc2Vzc2lvbnMgZW5kIG9uIGJsdXIsIG5vdCBrZXkgcmVsZWFzZS5cbiAgY29uc3QgZm9jdXNUcmlnZ2VyZWRSZWYgPSB1c2VSZWYoZmFsc2UpXG4gIC8vIFRpbWVyIHRoYXQgdGVhcnMgZG93biB0aGUgc2Vzc2lvbiBhZnRlciBwcm9sb25nZWQgc2lsZW5jZSBpbiBmb2N1cyBtb2RlLlxuICBjb25zdCBmb2N1c1NpbGVuY2VUaW1lclJlZiA9IHVzZVJlZjxSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IG51bGw+KFxuICAgIG51bGwsXG4gIClcbiAgLy8gU2V0IHdoZW4gYSBmb2N1cy1tb2RlIHNlc3Npb24gaXMgdG9ybiBkb3duIGR1ZSB0byBzaWxlbmNlLiBQcmV2ZW50c1xuICAvLyB0aGUgZm9jdXMgZWZmZWN0IGZyb20gaW1tZWRpYXRlbHkgcmVzdGFydGluZy4gQ2xlYXJlZCBvbiBibHVyIHNvIHRoZVxuICAvLyBuZXh0IGZvY3VzIGN5Y2xlIHJlLWFybXMgcmVjb3JkaW5nLlxuICBjb25zdCBzaWxlbmNlVGltZWRPdXRSZWYgPSB1c2VSZWYoZmFsc2UpXG4gIGNvbnN0IHJlY29yZGluZ1N0YXJ0UmVmID0gdXNlUmVmKDApXG4gIC8vIEluY3JlbWVudGVkIG9uIGVhY2ggc3RhcnRSZWNvcmRpbmdTZXNzaW9uKCkuIENhbGxiYWNrcyBjYXB0dXJlIHRoZWlyXG4gIC8vIGdlbmVyYXRpb24gYW5kIGJhaWwgaWYgYSBuZXdlciBzZXNzaW9uIGhhcyBzdGFydGVkIFx1MjAxNCBwcmV2ZW50cyBhIHpvbWJpZVxuICAvLyBzbG93LWNvbm5lY3RpbmcgV1MgZnJvbSBhbiBhYmFuZG9uZWQgc2Vzc2lvbiBmcm9tIG92ZXJ3cml0aW5nXG4gIC8vIGNvbm5lY3Rpb25SZWYgbWlkLXdheSB0aHJvdWdoIHRoZSBuZXh0IHNlc3Npb24uXG4gIGNvbnN0IHNlc3Npb25HZW5SZWYgPSB1c2VSZWYoMClcbiAgLy8gVHJ1ZSBpZiB0aGUgZWFybHktZXJyb3IgcmV0cnkgZmlyZWQgZHVyaW5nIHRoaXMgc2Vzc2lvbi5cbiAgLy8gVHJhY2tlZCBmb3IgdGhlIHRlbmd1X3ZvaWNlX3JlY29yZGluZ19jb21wbGV0ZWQgYW5hbHl0aWNzIGV2ZW50LlxuICBjb25zdCByZXRyeVVzZWRSZWYgPSB1c2VSZWYoZmFsc2UpXG4gIC8vIEZ1bGwgYXVkaW8gY2FwdHVyZWQgdGhpcyBzZXNzaW9uLCBrZXB0IGZvciBzaWxlbnQtZHJvcCByZXBsYXkuIH4xJSBvZlxuICAvLyBzZXNzaW9ucyBnZXQgYSBzdGlja3ktYnJva2VuIENFIHBvZCB0aGF0IGFjY2VwdHMgYXVkaW8gYnV0IHJldHVybnMgemVyb1xuICAvLyB0cmFuc2NyaXB0cyAoYW50aHJvcGljcy9hbnRocm9waWMjMjg3MDA4IHNlc3Npb24tc3RpY2t5IHZhcmlhbnQpOyB3aGVuXG4gIC8vIGZpbmFsaXplKCkgcmVzb2x2ZXMgdmlhIG5vX2RhdGFfdGltZW91dCB3aXRoIGhhZEF1ZGlvU2lnbmFsPXRydWUsIHdlXG4gIC8vIHJlcGxheSB0aGUgYnVmZmVyIG9uIGEgZnJlc2ggV1Mgb25jZS4gQm91bmRlZDogMzJLQi9zIFx1MDBENyB+NjBzIG1heCBcdTIyNDggMk1CLlxuICBjb25zdCBmdWxsQXVkaW9SZWYgPSB1c2VSZWY8QnVmZmVyW10+KFtdKVxuICBjb25zdCBzaWxlbnREcm9wUmV0cmllZFJlZiA9IHVzZVJlZihmYWxzZSlcbiAgLy8gQnVtcGVkIHdoZW4gdGhlIGVhcmx5LWVycm9yIHJldHJ5IGlzIHNjaGVkdWxlZC4gQ2FwdHVyZWQgcGVyXG4gIC8vIGF0dGVtcHRDb25uZWN0IFx1MjAxNCBvbkVycm9yIHN3YWxsb3dzIHN0YWxlLWdlbiBldmVudHMgKGNvbm4gMSdzXG4gIC8vIHRyYWlsaW5nIGNsb3NlLWVycm9yKSBidXQgc3VyZmFjZXMgY3VycmVudC1nZW4gb25lcyAoY29ubiAyJ3NcbiAgLy8gZ2VudWluZSBmYWlsdXJlKS4gU2FtZSBzaGFwZSBhcyBzZXNzaW9uR2VuUmVmLCBvbmUgbGV2ZWwgZG93bi5cbiAgY29uc3QgYXR0ZW1wdEdlblJlZiA9IHVzZVJlZigwKVxuICAvLyBSdW5uaW5nIHRvdGFsIG9mIGNoYXJzIGZsdXNoZWQgaW4gZm9jdXMgbW9kZSAoZWFjaCBmaW5hbCB0cmFuc2NyaXB0IGlzXG4gIC8vIGluamVjdGVkIGltbWVkaWF0ZWx5IGFuZCBhY2N1bXVsYXRlZFJlZiByZXNldCkuIEFkZGVkIHRvIHRyYW5zY3JpcHRDaGFyc1xuICAvLyBpbiB0aGUgY29tcGxldGVkIGV2ZW50IHNvIGZvY3VzLW1vZGUgc2Vzc2lvbnMgZG9uJ3QgZmFsc2UtcG9zaXRpdmUgYXNcbiAgLy8gc2lsZW50LWRyb3BzICh0cmFuc2NyaXB0Q2hhcnM9MCBkZXNwaXRlIHN1Y2Nlc3NmdWwgdHJhbnNjcmlwdGlvbikuXG4gIGNvbnN0IGZvY3VzRmx1c2hlZENoYXJzUmVmID0gdXNlUmVmKDApXG4gIC8vIFRydWUgaWYgYXQgbGVhc3Qgb25lIGF1ZGlvIGNodW5rIHdpdGggbm9uLXRyaXZpYWwgc2lnbmFsIHdhcyByZWNlaXZlZC5cbiAgLy8gVXNlZCB0byBkaXN0aW5ndWlzaCBcIm1pY3JvcGhvbmUgaXMgc2lsZW50L2luYWNjZXNzaWJsZVwiIGZyb20gXCJzcGVlY2ggbm90IGRldGVjdGVkXCIuXG4gIGNvbnN0IGhhc0F1ZGlvU2lnbmFsUmVmID0gdXNlUmVmKGZhbHNlKVxuICAvLyBUcnVlIG9uY2Ugb25SZWFkeSBmaXJlZCBmb3IgdGhlIGN1cnJlbnQgc2Vzc2lvbi4gVW5saWtlIGNvbm5lY3Rpb25SZWZcbiAgLy8gKHdoaWNoIGNsZWFudXAoKSBudWxscyksIHRoaXMgc3Vydml2ZXMgZWZmZWN0LW9yZGVyIHJhY2VzIHdoZXJlIEVmZmVjdCAzXG4gIC8vIGNsZWFudXAgcnVucyBiZWZvcmUgRWZmZWN0IDIncyBmaW5pc2hSZWNvcmRpbmcoKSBcdTIwMTQgZS5nLiAvdm9pY2UgdG9nZ2xlZFxuICAvLyBvZmYgbWlkLXJlY29yZGluZyBpbiBmb2N1cyBtb2RlLiBVc2VkIGZvciB0aGUgd3NDb25uZWN0ZWQgYW5hbHl0aWNzXG4gIC8vIGRpbWVuc2lvbiBhbmQgZXJyb3ItbWVzc2FnZSBicmFuY2hpbmcuIFJlc2V0IGluIHN0YXJ0UmVjb3JkaW5nU2Vzc2lvbi5cbiAgY29uc3QgZXZlckNvbm5lY3RlZFJlZiA9IHVzZVJlZihmYWxzZSlcbiAgY29uc3QgYXVkaW9MZXZlbHNSZWYgPSB1c2VSZWY8bnVtYmVyW10+KFtdKVxuICBjb25zdCBpc0ZvY3VzZWQgPSB1c2VUZXJtaW5hbEZvY3VzKClcbiAgY29uc3Qgc2V0Vm9pY2VTdGF0ZSA9IHVzZVNldFZvaWNlU3RhdGUoKVxuXG4gIC8vIEtlZXAgY2FsbGJhY2sgcmVmcyBjdXJyZW50IHdpdGhvdXQgdHJpZ2dlcmluZyByZS1yZW5kZXJzXG4gIG9uVHJhbnNjcmlwdFJlZi5jdXJyZW50ID0gb25UcmFuc2NyaXB0XG4gIG9uRXJyb3JSZWYuY3VycmVudCA9IG9uRXJyb3JcblxuICBmdW5jdGlvbiB1cGRhdGVTdGF0ZShuZXdTdGF0ZTogVm9pY2VTdGF0ZSk6IHZvaWQge1xuICAgIHN0YXRlUmVmLmN1cnJlbnQgPSBuZXdTdGF0ZVxuICAgIHNldFN0YXRlKG5ld1N0YXRlKVxuICAgIHNldFZvaWNlU3RhdGUocHJldiA9PiB7XG4gICAgICBpZiAocHJldi52b2ljZVN0YXRlID09PSBuZXdTdGF0ZSkgcmV0dXJuIHByZXZcbiAgICAgIHJldHVybiB7IC4uLnByZXYsIHZvaWNlU3RhdGU6IG5ld1N0YXRlIH1cbiAgICB9KVxuICB9XG5cbiAgY29uc3QgY2xlYW51cCA9IHVzZUNhbGxiYWNrKCgpOiB2b2lkID0+IHtcbiAgICAvLyBTdGFsZSBhbnkgaW4tZmxpZ2h0IHNlc3Npb24gKG1haW4gY29ubmVjdGlvbiBpc1N0YWxlKCksIHJlcGxheVxuICAgIC8vIGlzU3RhbGUoKSwgZmluaXNoUmVjb3JkaW5nIGNvbnRpbnVhdGlvbikuIFdpdGhvdXQgdGhpcywgZGlzYWJsaW5nXG4gICAgLy8gdm9pY2UgZHVyaW5nIHRoZSByZXBsYXkgd2luZG93IGxldHMgdGhlIHN0YWxlIHJlcGxheSBvcGVuIGEgV1MsXG4gICAgLy8gYWNjdW11bGF0ZSB0cmFuc2NyaXB0LCBhbmQgaW5qZWN0IGl0IGFmdGVyIHZvaWNlIHdhcyB0b3JuIGRvd24uXG4gICAgc2Vzc2lvbkdlblJlZi5jdXJyZW50KytcbiAgICBpZiAoY2xlYW51cFRpbWVyUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNsZWFyVGltZW91dChjbGVhbnVwVGltZXJSZWYuY3VycmVudClcbiAgICAgIGNsZWFudXBUaW1lclJlZi5jdXJyZW50ID0gbnVsbFxuICAgIH1cbiAgICBpZiAocmVsZWFzZVRpbWVyUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNsZWFyVGltZW91dChyZWxlYXNlVGltZXJSZWYuY3VycmVudClcbiAgICAgIHJlbGVhc2VUaW1lclJlZi5jdXJyZW50ID0gbnVsbFxuICAgIH1cbiAgICBpZiAocmVwZWF0RmFsbGJhY2tUaW1lclJlZi5jdXJyZW50KSB7XG4gICAgICBjbGVhclRpbWVvdXQocmVwZWF0RmFsbGJhY2tUaW1lclJlZi5jdXJyZW50KVxuICAgICAgcmVwZWF0RmFsbGJhY2tUaW1lclJlZi5jdXJyZW50ID0gbnVsbFxuICAgIH1cbiAgICBpZiAoZm9jdXNTaWxlbmNlVGltZXJSZWYuY3VycmVudCkge1xuICAgICAgY2xlYXJUaW1lb3V0KGZvY3VzU2lsZW5jZVRpbWVyUmVmLmN1cnJlbnQpXG4gICAgICBmb2N1c1NpbGVuY2VUaW1lclJlZi5jdXJyZW50ID0gbnVsbFxuICAgIH1cbiAgICBzaWxlbmNlVGltZWRPdXRSZWYuY3VycmVudCA9IGZhbHNlXG4gICAgdm9pY2VNb2R1bGU/LnN0b3BSZWNvcmRpbmcoKVxuICAgIGlmIChjb25uZWN0aW9uUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbm5lY3Rpb25SZWYuY3VycmVudC5jbG9zZSgpXG4gICAgICBjb25uZWN0aW9uUmVmLmN1cnJlbnQgPSBudWxsXG4gICAgfVxuICAgIGFjY3VtdWxhdGVkUmVmLmN1cnJlbnQgPSAnJ1xuICAgIGF1ZGlvTGV2ZWxzUmVmLmN1cnJlbnQgPSBbXVxuICAgIGZ1bGxBdWRpb1JlZi5jdXJyZW50ID0gW11cbiAgICBzZXRWb2ljZVN0YXRlKHByZXYgPT4ge1xuICAgICAgaWYgKHByZXYudm9pY2VJbnRlcmltVHJhbnNjcmlwdCA9PT0gJycgJiYgIXByZXYudm9pY2VBdWRpb0xldmVscy5sZW5ndGgpXG4gICAgICAgIHJldHVybiBwcmV2XG4gICAgICByZXR1cm4geyAuLi5wcmV2LCB2b2ljZUludGVyaW1UcmFuc2NyaXB0OiAnJywgdm9pY2VBdWRpb0xldmVsczogW10gfVxuICAgIH0pXG4gIH0sIFtzZXRWb2ljZVN0YXRlXSlcblxuICBmdW5jdGlvbiBmaW5pc2hSZWNvcmRpbmcoKTogdm9pZCB7XG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgJ1t2b2ljZV0gZmluaXNoUmVjb3JkaW5nOiBzdG9wcGluZyByZWNvcmRpbmcsIHRyYW5zaXRpb25pbmcgdG8gcHJvY2Vzc2luZycsXG4gICAgKVxuICAgIC8vIFNlc3Npb24gZW5kaW5nIFx1MjAxNCBzdGFsZSBhbnkgaW4tZmxpZ2h0IGF0dGVtcHQgc28gaXRzIGxhdGUgb25FcnJvclxuICAgIC8vIChjb25uIDIgcmVzcG9uZGluZyBhZnRlciB1c2VyIHJlbGVhc2VkIGtleSkgZG9lc24ndCBkb3VibGUtZmlyZSBvblxuICAgIC8vIHRvcCBvZiB0aGUgXCJjaGVjayBuZXR3b3JrXCIgbWVzc2FnZSBiZWxvdy5cbiAgICBhdHRlbXB0R2VuUmVmLmN1cnJlbnQrK1xuICAgIC8vIENhcHR1cmUgZm9jdXNUcmlnZ2VyZWQgQkVGT1JFIGNsZWFyaW5nIGl0IFx1MjAxNCBuZWVkZWQgYXMgYW4gZXZlbnQgZGltZW5zaW9uXG4gICAgLy8gc28gQmlnUXVlcnkgY2FuIGZpbHRlciBvdXQgcGFzc2l2ZSBmb2N1cy1tb2RlIGF1dG8tcmVjb3JkaW5ncyAodXNlciBmb2N1c2VkXG4gICAgLy8gdGVybWluYWwgd2l0aG91dCBzcGVha2luZyBcdTIxOTIgYW1iaWVudCBub2lzZSBzZXRzIGhhZEF1ZGlvU2lnbmFsPXRydWUgXHUyMTkyIGZhbHNlXG4gICAgLy8gc2lsZW50LWRyb3Agc2lnbmF0dXJlKS4gZm9jdXNGbHVzaGVkQ2hhcnNSZWYgZml4ZXMgdHJhbnNjcmlwdENoYXJzIGFjY3VyYWN5XG4gICAgLy8gZm9yIHNlc3Npb25zIFdJVEggc3BlZWNoOyBmb2N1c1RyaWdnZXJlZCBlbmFibGVzIGZpbHRlcmluZyBzZXNzaW9ucyBXSVRIT1VULlxuICAgIGNvbnN0IGZvY3VzVHJpZ2dlcmVkID0gZm9jdXNUcmlnZ2VyZWRSZWYuY3VycmVudFxuICAgIGZvY3VzVHJpZ2dlcmVkUmVmLmN1cnJlbnQgPSBmYWxzZVxuICAgIHVwZGF0ZVN0YXRlKCdwcm9jZXNzaW5nJylcbiAgICB2b2ljZU1vZHVsZT8uc3RvcFJlY29yZGluZygpXG4gICAgLy8gQ2FwdHVyZSBkdXJhdGlvbiBCRUZPUkUgdGhlIGZpbmFsaXplIHJvdW5kLXRyaXAgc28gdGhhdCB0aGUgV2ViU29ja2V0XG4gICAgLy8gd2FpdCB0aW1lIGlzIG5vdCBpbmNsdWRlZCAob3RoZXJ3aXNlIGEgcXVpY2sgdGFwIGxvb2tzIGxpa2UgPiAycykuXG4gICAgLy8gQWxsIHJlZi1iYWNrZWQgdmFsdWVzIGFyZSBjYXB0dXJlZCBoZXJlLCBCRUZPUkUgdGhlIGFzeW5jIGJvdW5kYXJ5IFx1MjAxNFxuICAgIC8vIGEga2V5cHJlc3MgZHVyaW5nIHRoZSBmaW5hbGl6ZSB3YWl0IGNhbiBzdGFydCBhIG5ldyBzZXNzaW9uIGFuZCByZXNldFxuICAgIC8vIHRoZXNlIHJlZnMgKGUuZy4gZm9jdXNGbHVzaGVkQ2hhcnNSZWYgPSAwIGluIHN0YXJ0UmVjb3JkaW5nU2Vzc2lvbiksXG4gICAgLy8gcmVwcm9kdWNpbmcgdGhlIHNpbGVudC1kcm9wIGZhbHNlLXBvc2l0aXZlIHRoaXMgcmVmIGV4aXN0cyB0byBwcmV2ZW50LlxuICAgIGNvbnN0IHJlY29yZGluZ0R1cmF0aW9uTXMgPSBEYXRlLm5vdygpIC0gcmVjb3JkaW5nU3RhcnRSZWYuY3VycmVudFxuICAgIGNvbnN0IGhhZEF1ZGlvU2lnbmFsID0gaGFzQXVkaW9TaWduYWxSZWYuY3VycmVudFxuICAgIGNvbnN0IHJldHJpZWQgPSByZXRyeVVzZWRSZWYuY3VycmVudFxuICAgIGNvbnN0IGZvY3VzRmx1c2hlZENoYXJzID0gZm9jdXNGbHVzaGVkQ2hhcnNSZWYuY3VycmVudFxuICAgIC8vIHdzQ29ubmVjdGVkIGRpc3Rpbmd1aXNoZXMgXCJiYWNrZW5kIHJlY2VpdmVkIGF1ZGlvIGJ1dCBkcm9wcGVkIGl0XCIgKHRoZVxuICAgIC8vIGJ1ZyBiYWNrZW5kIFBSICMyODcwMDggZml4ZXMpIGZyb20gXCJXUyBoYW5kc2hha2UgbmV2ZXIgY29tcGxldGVkXCIgXHUyMDE0XG4gICAgLy8gaW4gdGhlIGxhdHRlciBjYXNlIGF1ZGlvIGlzIHN0aWxsIGluIGF1ZGlvQnVmZmVyLCBuZXZlciByZWFjaGVkIHRoZVxuICAgIC8vIHNlcnZlciwgYnV0IGhhc0F1ZGlvU2lnbmFsUmVmIGlzIGFscmVhZHkgdHJ1ZSBmcm9tIGFtYmllbnQgbm9pc2UuXG4gICAgY29uc3Qgd3NDb25uZWN0ZWQgPSBldmVyQ29ubmVjdGVkUmVmLmN1cnJlbnRcbiAgICAvLyBDYXB0dXJlIGdlbmVyYXRpb24gQkVGT1JFIHRoZSAudGhlbigpIFx1MjAxNCBpZiBhIG5ldyBzZXNzaW9uIHN0YXJ0cyBkdXJpbmdcbiAgICAvLyB0aGUgZmluYWxpemUgd2FpdCwgc2Vzc2lvbkdlblJlZiBoYXMgYWxyZWFkeSBhZHZhbmNlZCBieSB0aGUgdGltZSB0aGVcbiAgICAvLyBjb250aW51YXRpb24gcnVucywgc28gY2FwdHVyaW5nIGluc2lkZSB0aGUgLnRoZW4oKSB3b3VsZCB5aWVsZCB0aGUgbmV3XG4gICAgLy8gc2Vzc2lvbidzIGdlbiBhbmQgZXZlcnkgc3RhbGVuZXNzIGNoZWNrIHdvdWxkIGJlIGEgbm8tb3AuXG4gICAgY29uc3QgbXlHZW4gPSBzZXNzaW9uR2VuUmVmLmN1cnJlbnRcbiAgICBjb25zdCBpc1N0YWxlID0gKCkgPT4gc2Vzc2lvbkdlblJlZi5jdXJyZW50ICE9PSBteUdlblxuICAgIGxvZ0ZvckRlYnVnZ2luZygnW3ZvaWNlXSBSZWNvcmRpbmcgc3RvcHBlZCcpXG5cbiAgICAvLyBTZW5kIGZpbmFsaXplIGFuZCB3YWl0IGZvciB0aGUgV2ViU29ja2V0IHRvIGNsb3NlIGJlZm9yZSByZWFkaW5nIHRoZVxuICAgIC8vIGFjY3VtdWxhdGVkIHRyYW5zY3JpcHQuICBUaGUgY2xvc2UgaGFuZGxlciBwcm9tb3RlcyBhbnkgdW5yZXBvcnRlZFxuICAgIC8vIGludGVyaW0gdGV4dCB0byBmaW5hbCwgc28gd2UgbXVzdCB3YWl0IGZvciBpdCB0byBmaXJlLlxuICAgIGNvbnN0IGZpbmFsaXplUHJvbWlzZTogUHJvbWlzZTxGaW5hbGl6ZVNvdXJjZSB8IHVuZGVmaW5lZD4gPVxuICAgICAgY29ubmVjdGlvblJlZi5jdXJyZW50XG4gICAgICAgID8gY29ubmVjdGlvblJlZi5jdXJyZW50LmZpbmFsaXplKClcbiAgICAgICAgOiBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKVxuXG4gICAgdm9pZCBmaW5hbGl6ZVByb21pc2VcbiAgICAgIC50aGVuKGFzeW5jIGZpbmFsaXplU291cmNlID0+IHtcbiAgICAgICAgaWYgKGlzU3RhbGUoKSkgcmV0dXJuXG4gICAgICAgIC8vIFNpbGVudC1kcm9wIHJlcGxheTogd2hlbiB0aGUgc2VydmVyIGFjY2VwdGVkIGF1ZGlvICh3c0Nvbm5lY3RlZCksXG4gICAgICAgIC8vIHRoZSBtaWMgY2FwdHVyZWQgcmVhbCBzaWduYWwgKGhhZEF1ZGlvU2lnbmFsKSwgYnV0IGZpbmFsaXplIHRpbWVkXG4gICAgICAgIC8vIG91dCB3aXRoIHplcm8gdHJhbnNjcmlwdCBcdTIwMTQgdGhlIH4xJSBzZXNzaW9uLXN0aWNreSBDRS1wb2QgYnVnLlxuICAgICAgICAvLyBSZXBsYXkgdGhlIGJ1ZmZlcmVkIGF1ZGlvIG9uIGEgZnJlc2ggY29ubmVjdGlvbiBvbmNlLiBBIDI1MG1zXG4gICAgICAgIC8vIGJhY2tvZmYgY2xlYXJzIHRoZSBzYW1lLXBvZCByYXBpZC1yZWNvbm5lY3QgcmFjZSAoc2FtZSBnYXAgYXMgdGhlXG4gICAgICAgIC8vIGVhcmx5LWVycm9yIHJldHJ5IHBhdGggYmVsb3cpLlxuICAgICAgICBpZiAoXG4gICAgICAgICAgZmluYWxpemVTb3VyY2UgPT09ICdub19kYXRhX3RpbWVvdXQnICYmXG4gICAgICAgICAgaGFkQXVkaW9TaWduYWwgJiZcbiAgICAgICAgICB3c0Nvbm5lY3RlZCAmJlxuICAgICAgICAgICFmb2N1c1RyaWdnZXJlZCAmJlxuICAgICAgICAgIGZvY3VzRmx1c2hlZENoYXJzID09PSAwICYmXG4gICAgICAgICAgYWNjdW11bGF0ZWRSZWYuY3VycmVudC50cmltKCkgPT09ICcnICYmXG4gICAgICAgICAgIXNpbGVudERyb3BSZXRyaWVkUmVmLmN1cnJlbnQgJiZcbiAgICAgICAgICBmdWxsQXVkaW9SZWYuY3VycmVudC5sZW5ndGggPiAwXG4gICAgICAgICkge1xuICAgICAgICAgIHNpbGVudERyb3BSZXRyaWVkUmVmLmN1cnJlbnQgPSB0cnVlXG4gICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgYFt2b2ljZV0gU2lsZW50LWRyb3AgZGV0ZWN0ZWQgKG5vX2RhdGFfdGltZW91dCwgJHtTdHJpbmcoZnVsbEF1ZGlvUmVmLmN1cnJlbnQubGVuZ3RoKX0gY2h1bmtzKTsgcmVwbGF5aW5nIG9uIGZyZXNoIGNvbm5lY3Rpb25gLFxuICAgICAgICAgIClcbiAgICAgICAgICBsb2dFdmVudCgndGVuZ3Vfdm9pY2Vfc2lsZW50X2Ryb3BfcmVwbGF5Jywge1xuICAgICAgICAgICAgcmVjb3JkaW5nRHVyYXRpb25NcyxcbiAgICAgICAgICAgIGNodW5rQ291bnQ6IGZ1bGxBdWRpb1JlZi5jdXJyZW50Lmxlbmd0aCxcbiAgICAgICAgICB9KVxuICAgICAgICAgIGlmIChjb25uZWN0aW9uUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNvbm5lY3Rpb25SZWYuY3VycmVudC5jbG9zZSgpXG4gICAgICAgICAgICBjb25uZWN0aW9uUmVmLmN1cnJlbnQgPSBudWxsXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHJlcGxheUJ1ZmZlciA9IGZ1bGxBdWRpb1JlZi5jdXJyZW50XG4gICAgICAgICAgYXdhaXQgc2xlZXAoMjUwKVxuICAgICAgICAgIGlmIChpc1N0YWxlKCkpIHJldHVyblxuICAgICAgICAgIGNvbnN0IHN0dCA9IG5vcm1hbGl6ZUxhbmd1YWdlRm9yU1RUKGdldEluaXRpYWxTZXR0aW5ncygpLmxhbmd1YWdlKVxuICAgICAgICAgIGNvbnN0IGtleXRlcm1zID0gYXdhaXQgZ2V0Vm9pY2VLZXl0ZXJtcygpXG4gICAgICAgICAgaWYgKGlzU3RhbGUoKSkgcmV0dXJuXG4gICAgICAgICAgYXdhaXQgbmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB2b2lkIGNvbm5lY3RWb2ljZVN0cmVhbShcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9uVHJhbnNjcmlwdDogKHQsIGlzRmluYWwpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChpc1N0YWxlKCkpIHJldHVyblxuICAgICAgICAgICAgICAgICAgaWYgKGlzRmluYWwgJiYgdC50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjY3VtdWxhdGVkUmVmLmN1cnJlbnQpIGFjY3VtdWxhdGVkUmVmLmN1cnJlbnQgKz0gJyAnXG4gICAgICAgICAgICAgICAgICAgIGFjY3VtdWxhdGVkUmVmLmN1cnJlbnQgKz0gdC50cmltKClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uRXJyb3I6ICgpID0+IHJlc29sdmUoKSxcbiAgICAgICAgICAgICAgICBvbkNsb3NlOiAoKSA9PiB7fSxcbiAgICAgICAgICAgICAgICBvblJlYWR5OiBjb25uID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChpc1N0YWxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29ubi5jbG9zZSgpXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25SZWYuY3VycmVudCA9IGNvbm5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IFNMSUNFID0gMzJfMDAwXG4gICAgICAgICAgICAgICAgICBsZXQgc2xpY2U6IEJ1ZmZlcltdID0gW11cbiAgICAgICAgICAgICAgICAgIGxldCBieXRlcyA9IDBcbiAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiByZXBsYXlCdWZmZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ5dGVzID4gMCAmJiBieXRlcyArIGMubGVuZ3RoID4gU0xJQ0UpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25uLnNlbmQoQnVmZmVyLmNvbmNhdChzbGljZSkpXG4gICAgICAgICAgICAgICAgICAgICAgc2xpY2UgPSBbXVxuICAgICAgICAgICAgICAgICAgICAgIGJ5dGVzID0gMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNsaWNlLnB1c2goYylcbiAgICAgICAgICAgICAgICAgICAgYnl0ZXMgKz0gYy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChzbGljZS5sZW5ndGgpIGNvbm4uc2VuZChCdWZmZXIuY29uY2F0KHNsaWNlKSlcbiAgICAgICAgICAgICAgICAgIHZvaWQgY29ubi5maW5hbGl6ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25uLmNsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHsgbGFuZ3VhZ2U6IHN0dC5jb2RlLCBrZXl0ZXJtcyB9LFxuICAgICAgICAgICAgKS50aGVuKFxuICAgICAgICAgICAgICBjID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWMpIHJlc29sdmUoKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAoKSA9PiByZXNvbHZlKCksXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgICBpZiAoaXNTdGFsZSgpKSByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBmdWxsQXVkaW9SZWYuY3VycmVudCA9IFtdXG5cbiAgICAgICAgY29uc3QgdGV4dCA9IGFjY3VtdWxhdGVkUmVmLmN1cnJlbnQudHJpbSgpXG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICBgW3ZvaWNlXSBGaW5hbCB0cmFuc2NyaXB0IGFzc2VtYmxlZCAoJHtTdHJpbmcodGV4dC5sZW5ndGgpfSBjaGFycyk6IFwiJHt0ZXh0LnNsaWNlKDAsIDIwMCl9XCJgLFxuICAgICAgICApXG5cbiAgICAgICAgLy8gVHJhY2tzIHNpbGVudC1kcm9wIHJhdGU6IHRyYW5zY3JpcHRDaGFycz0wICsgaGFkQXVkaW9TaWduYWw9dHJ1ZVxuICAgICAgICAvLyArIHJlY29yZGluZ0R1cmF0aW9uTXM+MjAwMCA9IHRoZSBidWcgYmFja2VuZCBQUiAjMjg3MDA4IGZpeGVzLlxuICAgICAgICAvLyBmb2N1c0ZsdXNoZWRDaGFyc1JlZiBtYWtlcyB0cmFuc2NyaXB0Q2hhcnMgYWNjdXJhdGUgZm9yIGZvY3VzIG1vZGVcbiAgICAgICAgLy8gKHdoZXJlIGVhY2ggZmluYWwgaXMgaW5qZWN0ZWQgaW1tZWRpYXRlbHkgYW5kIGFjY3VtdWxhdGVkUmVmIHJlc2V0KS5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gTk9URTogdGhpcyBmaXJlcyBvbmx5IG9uIHRoZSBmaW5pc2hSZWNvcmRpbmcoKSBwYXRoLiBUaGUgb25FcnJvclxuICAgICAgICAvLyBmYWxsdGhyb3VnaCBhbmQgIWNvbm4gKG5vLU9BdXRoKSBwYXRocyBieXBhc3MgdGhpcyBcdTIxOTIgZG9uJ3QgY29tcHV0ZVxuICAgICAgICAvLyBDT1VOVChjb21wbGV0ZWQpL0NPVU5UKHN0YXJ0ZWQpIGFzIGEgc3VjY2VzcyByYXRlOyB0aGUgc2lsZW50LWRyb3BcbiAgICAgICAgLy8gZGVub21pbmF0b3IgKGNvbXBsZXRlZCBldmVudHMgb25seSkgaXMgaW50ZXJuYWxseSBjb25zaXN0ZW50LlxuICAgICAgICBsb2dFdmVudCgndGVuZ3Vfdm9pY2VfcmVjb3JkaW5nX2NvbXBsZXRlZCcsIHtcbiAgICAgICAgICB0cmFuc2NyaXB0Q2hhcnM6IHRleHQubGVuZ3RoICsgZm9jdXNGbHVzaGVkQ2hhcnMsXG4gICAgICAgICAgcmVjb3JkaW5nRHVyYXRpb25NcyxcbiAgICAgICAgICBoYWRBdWRpb1NpZ25hbCxcbiAgICAgICAgICByZXRyaWVkLFxuICAgICAgICAgIHNpbGVudERyb3BSZXRyaWVkOiBzaWxlbnREcm9wUmV0cmllZFJlZi5jdXJyZW50LFxuICAgICAgICAgIHdzQ29ubmVjdGVkLFxuICAgICAgICAgIGZvY3VzVHJpZ2dlcmVkLFxuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChjb25uZWN0aW9uUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBjb25uZWN0aW9uUmVmLmN1cnJlbnQuY2xvc2UoKVxuICAgICAgICAgIGNvbm5lY3Rpb25SZWYuY3VycmVudCA9IG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgYFt2b2ljZV0gSW5qZWN0aW5nIHRyYW5zY3JpcHQgKCR7U3RyaW5nKHRleHQubGVuZ3RoKX0gY2hhcnMpYCxcbiAgICAgICAgICApXG4gICAgICAgICAgb25UcmFuc2NyaXB0UmVmLmN1cnJlbnQodGV4dClcbiAgICAgICAgfSBlbHNlIGlmIChmb2N1c0ZsdXNoZWRDaGFycyA9PT0gMCAmJiByZWNvcmRpbmdEdXJhdGlvbk1zID4gMjAwMCkge1xuICAgICAgICAgIC8vIE9ubHkgd2FybiBhYm91dCBlbXB0eSB0cmFuc2NyaXB0IGlmIG5vdGhpbmcgd2FzIGZsdXNoZWQgaW4gZm9jdXNcbiAgICAgICAgICAvLyBtb2RlIGVpdGhlciwgYW5kIHJlY29yZGluZyB3YXMgPiAycyAoc2hvcnQgcmVjb3JkaW5ncyA9IGFjY2lkZW50YWxcbiAgICAgICAgICAvLyB0YXBzIFx1MjE5MiBzaWxlbnRseSByZXR1cm4gdG8gaWRsZSkuXG4gICAgICAgICAgaWYgKCF3c0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgLy8gV1MgbmV2ZXIgY29ubmVjdGVkIFx1MjE5MiBhdWRpbyBuZXZlciByZWFjaGVkIGJhY2tlbmQuIE5vdCBhIHNpbGVudFxuICAgICAgICAgICAgLy8gZHJvcDsgYSBjb25uZWN0aW9uIGZhaWx1cmUgKHNsb3cgT0F1dGggcmVmcmVzaCwgbmV0d29yaywgZXRjKS5cbiAgICAgICAgICAgIG9uRXJyb3JSZWYuY3VycmVudD8uKFxuICAgICAgICAgICAgICAnVm9pY2UgY29ubmVjdGlvbiBmYWlsZWQuIENoZWNrIHlvdXIgbmV0d29yayBhbmQgdHJ5IGFnYWluLicsXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBlbHNlIGlmICghaGFkQXVkaW9TaWduYWwpIHtcbiAgICAgICAgICAgIC8vIERpc3Rpbmd1aXNoIHNpbGVudCBtaWMgKGNhcHR1cmUgaXNzdWUpIGZyb20gc3BlZWNoIG5vdCByZWNvZ25pemVkLlxuICAgICAgICAgICAgb25FcnJvclJlZi5jdXJyZW50Py4oXG4gICAgICAgICAgICAgICdObyBhdWRpbyBkZXRlY3RlZCBmcm9tIG1pY3JvcGhvbmUuIENoZWNrIHRoYXQgdGhlIGNvcnJlY3QgaW5wdXQgZGV2aWNlIGlzIHNlbGVjdGVkIGFuZCB0aGF0IENsYXVkZSBDb2RlIGhhcyBtaWNyb3Bob25lIGFjY2Vzcy4nLFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvbkVycm9yUmVmLmN1cnJlbnQ/LignTm8gc3BlZWNoIGRldGVjdGVkLicpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYWNjdW11bGF0ZWRSZWYuY3VycmVudCA9ICcnXG4gICAgICAgIHNldFZvaWNlU3RhdGUocHJldiA9PiB7XG4gICAgICAgICAgaWYgKHByZXYudm9pY2VJbnRlcmltVHJhbnNjcmlwdCA9PT0gJycpIHJldHVybiBwcmV2XG4gICAgICAgICAgcmV0dXJuIHsgLi4ucHJldiwgdm9pY2VJbnRlcmltVHJhbnNjcmlwdDogJycgfVxuICAgICAgICB9KVxuICAgICAgICB1cGRhdGVTdGF0ZSgnaWRsZScpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGxvZ0Vycm9yKHRvRXJyb3IoZXJyKSlcbiAgICAgICAgaWYgKCFpc1N0YWxlKCkpIHVwZGF0ZVN0YXRlKCdpZGxlJylcbiAgICAgIH0pXG4gIH1cblxuICAvLyBXaGVuIHZvaWNlIGlzIGVuYWJsZWQsIGxhenktaW1wb3J0IHZvaWNlLnRzIHNvIGNoZWNrUmVjb3JkaW5nQXZhaWxhYmlsaXR5XG4gIC8vIGV0IGFsLiBhcmUgcmVhZHkgd2hlbiB0aGUgdXNlciBwcmVzc2VzIHRoZSB2b2ljZSBrZXkuIERvIE5PVCBwcmVsb2FkIHRoZVxuICAvLyBuYXRpdmUgbW9kdWxlIFx1MjAxNCByZXF1aXJlKCdhdWRpby1jYXB0dXJlLm5vZGUnKSBpcyBhIHN5bmNocm9ub3VzIGRsb3BlbiBvZlxuICAvLyBDb3JlQXVkaW8vQXVkaW9Vbml0IHRoYXQgYmxvY2tzIHRoZSBldmVudCBsb29wIGZvciB+MXMgKHdhcm0pIHRvIH44c1xuICAvLyAoY29sZCBjb3JlYXVkaW9kKS4gc2V0SW1tZWRpYXRlIGRvZXNuJ3QgaGVscDogaXQgeWllbGRzIG9uZSB0aWNrLCB0aGVuIHRoZVxuICAvLyBkbG9wZW4gc3RpbGwgYmxvY2tzLiBUaGUgZmlyc3Qgdm9pY2Uga2V5cHJlc3MgcGF5cyB0aGUgZGxvcGVuIGNvc3QgaW5zdGVhZC5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZW5hYmxlZCAmJiAhdm9pY2VNb2R1bGUpIHtcbiAgICAgIHZvaWQgaW1wb3J0KCcuLi9zZXJ2aWNlcy92b2ljZS5qcycpLnRoZW4obW9kID0+IHtcbiAgICAgICAgdm9pY2VNb2R1bGUgPSBtb2RcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbZW5hYmxlZF0pXG5cbiAgLy8gXHUyNTAwXHUyNTAwIEZvY3VzIHNpbGVuY2UgdGltZXIgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG4gIC8vIEFybXMgKG9yIHJlc2V0cykgYSB0aW1lciB0aGF0IHRlYXJzIGRvd24gdGhlIGZvY3VzLW1vZGUgc2Vzc2lvblxuICAvLyBhZnRlciBGT0NVU19TSUxFTkNFX1RJTUVPVVRfTVMgb2Ygbm8gc3BlZWNoLiBDYWxsZWQgd2hlbiBhIHNlc3Npb25cbiAgLy8gc3RhcnRzIGFuZCBhZnRlciBlYWNoIGZsdXNoZWQgdHJhbnNjcmlwdC5cbiAgZnVuY3Rpb24gYXJtRm9jdXNTaWxlbmNlVGltZXIoKTogdm9pZCB7XG4gICAgaWYgKGZvY3VzU2lsZW5jZVRpbWVyUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNsZWFyVGltZW91dChmb2N1c1NpbGVuY2VUaW1lclJlZi5jdXJyZW50KVxuICAgIH1cbiAgICBmb2N1c1NpbGVuY2VUaW1lclJlZi5jdXJyZW50ID0gc2V0VGltZW91dChcbiAgICAgIChcbiAgICAgICAgZm9jdXNTaWxlbmNlVGltZXJSZWYsXG4gICAgICAgIHN0YXRlUmVmLFxuICAgICAgICBmb2N1c1RyaWdnZXJlZFJlZixcbiAgICAgICAgc2lsZW5jZVRpbWVkT3V0UmVmLFxuICAgICAgICBmaW5pc2hSZWNvcmRpbmcsXG4gICAgICApID0+IHtcbiAgICAgICAgZm9jdXNTaWxlbmNlVGltZXJSZWYuY3VycmVudCA9IG51bGxcbiAgICAgICAgaWYgKHN0YXRlUmVmLmN1cnJlbnQgPT09ICdyZWNvcmRpbmcnICYmIGZvY3VzVHJpZ2dlcmVkUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICAnW3ZvaWNlXSBGb2N1cyBzaWxlbmNlIHRpbWVvdXQgXHUyMDE0IHRlYXJpbmcgZG93biBzZXNzaW9uJyxcbiAgICAgICAgICApXG4gICAgICAgICAgc2lsZW5jZVRpbWVkT3V0UmVmLmN1cnJlbnQgPSB0cnVlXG4gICAgICAgICAgZmluaXNoUmVjb3JkaW5nKClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIEZPQ1VTX1NJTEVOQ0VfVElNRU9VVF9NUyxcbiAgICAgIGZvY3VzU2lsZW5jZVRpbWVyUmVmLFxuICAgICAgc3RhdGVSZWYsXG4gICAgICBmb2N1c1RyaWdnZXJlZFJlZixcbiAgICAgIHNpbGVuY2VUaW1lZE91dFJlZixcbiAgICAgIGZpbmlzaFJlY29yZGluZyxcbiAgICApXG4gIH1cblxuICAvLyBcdTI1MDBcdTI1MDAgRm9jdXMtZHJpdmVuIHJlY29yZGluZyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcbiAgLy8gSW4gZm9jdXMgbW9kZSwgc3RhcnQgcmVjb3JkaW5nIHdoZW4gdGhlIHRlcm1pbmFsIGdhaW5zIGZvY3VzIGFuZFxuICAvLyBzdG9wIHdoZW4gaXQgbG9zZXMgZm9jdXMuIFRoaXMgZW5hYmxlcyBhIFwibXVsdGktY2xhdWRpbmcgYXJteVwiXG4gIC8vIHdvcmtmbG93IHdoZXJlIHZvaWNlIGlucHV0IGZvbGxvd3Mgd2luZG93IGZvY3VzLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZW5hYmxlZCB8fCAhZm9jdXNNb2RlKSB7XG4gICAgICAvLyBGb2N1cyBtb2RlIHdhcyBkaXNhYmxlZCB3aGlsZSBhIGZvY3VzLWRyaXZlbiByZWNvcmRpbmcgd2FzIGFjdGl2ZSBcdTIwMTRcbiAgICAgIC8vIHN0b3AgdGhlIHJlY29yZGluZyBzbyBpdCBkb2Vzbid0IGxpbmdlciB1bnRpbCB0aGUgc2lsZW5jZSB0aW1lciBmaXJlcy5cbiAgICAgIGlmIChmb2N1c1RyaWdnZXJlZFJlZi5jdXJyZW50ICYmIHN0YXRlUmVmLmN1cnJlbnQgPT09ICdyZWNvcmRpbmcnKSB7XG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAnW3ZvaWNlXSBGb2N1cyBtb2RlIGRpc2FibGVkIGR1cmluZyByZWNvcmRpbmcsIGZpbmlzaGluZycsXG4gICAgICAgIClcbiAgICAgICAgZmluaXNoUmVjb3JkaW5nKClcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBpZiAoXG4gICAgICBpc0ZvY3VzZWQgJiZcbiAgICAgIHN0YXRlUmVmLmN1cnJlbnQgPT09ICdpZGxlJyAmJlxuICAgICAgIXNpbGVuY2VUaW1lZE91dFJlZi5jdXJyZW50XG4gICAgKSB7XG4gICAgICBjb25zdCBiZWdpbkZvY3VzUmVjb3JkaW5nID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICAvLyBSZS1jaGVjayBjb25kaXRpb25zIFx1MjAxNCBzdGF0ZSBvciBlbmFibGVkL2ZvY3VzTW9kZSBtYXkgaGF2ZSBjaGFuZ2VkXG4gICAgICAgIC8vIGR1cmluZyB0aGUgYXdhaXQgKGVmZmVjdCBjbGVhbnVwIHNldHMgY2FuY2VsbGVkKS5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNhbmNlbGxlZCB8fFxuICAgICAgICAgIHN0YXRlUmVmLmN1cnJlbnQgIT09ICdpZGxlJyB8fFxuICAgICAgICAgIHNpbGVuY2VUaW1lZE91dFJlZi5jdXJyZW50XG4gICAgICAgIClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKCdbdm9pY2VdIEZvY3VzIGdhaW5lZCwgc3RhcnRpbmcgcmVjb3JkaW5nIHNlc3Npb24nKVxuICAgICAgICBmb2N1c1RyaWdnZXJlZFJlZi5jdXJyZW50ID0gdHJ1ZVxuICAgICAgICB2b2lkIHN0YXJ0UmVjb3JkaW5nU2Vzc2lvbigpXG4gICAgICAgIGFybUZvY3VzU2lsZW5jZVRpbWVyKClcbiAgICAgIH1cbiAgICAgIGlmICh2b2ljZU1vZHVsZSkge1xuICAgICAgICBiZWdpbkZvY3VzUmVjb3JkaW5nKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFZvaWNlIG1vZHVsZSBpcyBsb2FkaW5nIChhc3luYyBpbXBvcnQgcmVzb2x2ZXMgZnJvbSBjYWNoZSBhcyBhXG4gICAgICAgIC8vIG1pY3JvdGFzaykuIFdhaXQgZm9yIGl0IGJlZm9yZSBzdGFydGluZyB0aGUgcmVjb3JkaW5nIHNlc3Npb24uXG4gICAgICAgIHZvaWQgaW1wb3J0KCcuLi9zZXJ2aWNlcy92b2ljZS5qcycpLnRoZW4obW9kID0+IHtcbiAgICAgICAgICB2b2ljZU1vZHVsZSA9IG1vZFxuICAgICAgICAgIGJlZ2luRm9jdXNSZWNvcmRpbmcoKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWlzRm9jdXNlZCkge1xuICAgICAgLy8gQ2xlYXIgdGhlIHNpbGVuY2UgdGltZW91dCBmbGFnIG9uIGJsdXIgc28gdGhlIG5leHQgZm9jdXNcbiAgICAgIC8vIGN5Y2xlIHJlLWFybXMgcmVjb3JkaW5nLlxuICAgICAgc2lsZW5jZVRpbWVkT3V0UmVmLmN1cnJlbnQgPSBmYWxzZVxuICAgICAgaWYgKHN0YXRlUmVmLmN1cnJlbnQgPT09ICdyZWNvcmRpbmcnKSB7XG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZygnW3ZvaWNlXSBGb2N1cyBsb3N0LCBmaW5pc2hpbmcgcmVjb3JkaW5nJylcbiAgICAgICAgZmluaXNoUmVjb3JkaW5nKClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gIH0sIFtlbmFibGVkLCBmb2N1c01vZGUsIGlzRm9jdXNlZF0pXG5cbiAgLy8gXHUyNTAwXHUyNTAwIFN0YXJ0IGEgbmV3IHJlY29yZGluZyBzZXNzaW9uICh2b2ljZV9zdHJlYW0gY29ubmVjdCArIGF1ZGlvKSBcdTI1MDBcdTI1MDBcbiAgYXN5bmMgZnVuY3Rpb24gc3RhcnRSZWNvcmRpbmdTZXNzaW9uKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghdm9pY2VNb2R1bGUpIHtcbiAgICAgIG9uRXJyb3JSZWYuY3VycmVudD8uKFxuICAgICAgICAnVm9pY2UgbW9kdWxlIG5vdCBsb2FkZWQgeWV0LiBUcnkgYWdhaW4gaW4gYSBtb21lbnQuJyxcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIFRyYW5zaXRpb24gdG8gJ3JlY29yZGluZycgc3luY2hyb25vdXNseSwgQkVGT1JFIGFueSBhd2FpdC4gQ2FsbGVyc1xuICAgIC8vIHJlYWQgc3RhdGUgc3luY2hyb25vdXNseSByaWdodCBhZnRlciBgdm9pZCBzdGFydFJlY29yZGluZ1Nlc3Npb24oKWA6XG4gICAgLy8gLSB1c2VWb2ljZUludGVncmF0aW9uLnRzeCBzcGFjZS1ob2xkIGd1YXJkIHJlYWRzIHZvaWNlU3RhdGUgZnJvbSB0aGVcbiAgICAvLyAgIHN0b3JlIGltbWVkaWF0ZWx5IFx1MjAxNCBpZiBpdCBzZWVzICdpZGxlJyBpdCBjbGVhcnMgaXNTcGFjZUhvbGRBY3RpdmVSZWZcbiAgICAvLyAgIGFuZCBzcGFjZSBhdXRvLXJlcGVhdCBsZWFrcyBpbnRvIHRoZSB0ZXh0IGlucHV0ICgxMDAlIHJlcHJvKVxuICAgIC8vIC0gaGFuZGxlS2V5RXZlbnQncyBgY3VycmVudFN0YXRlID09PSAnaWRsZSdgIHJlLWVudHJ5IGNoZWNrIGJlbG93XG4gICAgLy8gSWYgYW4gYXdhaXQgcnVucyBmaXJzdCwgYm90aCBzZWUgc3RhbGUgJ2lkbGUnLiBTZWUgUFIgIzIwODczIHJldmlldy5cbiAgICB1cGRhdGVTdGF0ZSgncmVjb3JkaW5nJylcbiAgICByZWNvcmRpbmdTdGFydFJlZi5jdXJyZW50ID0gRGF0ZS5ub3coKVxuICAgIGFjY3VtdWxhdGVkUmVmLmN1cnJlbnQgPSAnJ1xuICAgIHNlZW5SZXBlYXRSZWYuY3VycmVudCA9IGZhbHNlXG4gICAgaGFzQXVkaW9TaWduYWxSZWYuY3VycmVudCA9IGZhbHNlXG4gICAgcmV0cnlVc2VkUmVmLmN1cnJlbnQgPSBmYWxzZVxuICAgIHNpbGVudERyb3BSZXRyaWVkUmVmLmN1cnJlbnQgPSBmYWxzZVxuICAgIGZ1bGxBdWRpb1JlZi5jdXJyZW50ID0gW11cbiAgICBmb2N1c0ZsdXNoZWRDaGFyc1JlZi5jdXJyZW50ID0gMFxuICAgIGV2ZXJDb25uZWN0ZWRSZWYuY3VycmVudCA9IGZhbHNlXG4gICAgY29uc3QgbXlHZW4gPSArK3Nlc3Npb25HZW5SZWYuY3VycmVudFxuXG4gICAgLy8gXHUyNTAwXHUyNTAwIFByZS1jaGVjazogY2FuIHdlIGFjdHVhbGx5IHJlY29yZCBhdWRpbz8gXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG4gICAgY29uc3QgYXZhaWxhYmlsaXR5ID0gYXdhaXQgdm9pY2VNb2R1bGUuY2hlY2tSZWNvcmRpbmdBdmFpbGFiaWxpdHkoKVxuICAgIGlmICghYXZhaWxhYmlsaXR5LmF2YWlsYWJsZSkge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgW3ZvaWNlXSBSZWNvcmRpbmcgbm90IGF2YWlsYWJsZTogJHthdmFpbGFiaWxpdHkucmVhc29uID8/ICd1bmtub3duJ31gLFxuICAgICAgKVxuICAgICAgb25FcnJvclJlZi5jdXJyZW50Py4oXG4gICAgICAgIGF2YWlsYWJpbGl0eS5yZWFzb24gPz8gJ0F1ZGlvIHJlY29yZGluZyBpcyBub3QgYXZhaWxhYmxlLicsXG4gICAgICApXG4gICAgICBjbGVhbnVwKClcbiAgICAgIHVwZGF0ZVN0YXRlKCdpZGxlJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICdbdm9pY2VdIFN0YXJ0aW5nIHJlY29yZGluZyBzZXNzaW9uLCBjb25uZWN0aW5nIHZvaWNlIHN0cmVhbScsXG4gICAgKVxuICAgIC8vIENsZWFyIGFueSBwcmV2aW91cyBlcnJvclxuICAgIHNldFZvaWNlU3RhdGUocHJldiA9PiB7XG4gICAgICBpZiAoIXByZXYudm9pY2VFcnJvcikgcmV0dXJuIHByZXZcbiAgICAgIHJldHVybiB7IC4uLnByZXYsIHZvaWNlRXJyb3I6IG51bGwgfVxuICAgIH0pXG5cbiAgICAvLyBCdWZmZXIgYXVkaW8gY2h1bmtzIHdoaWxlIHRoZSBXZWJTb2NrZXQgY29ubmVjdHMuIE9uY2UgdGhlIGNvbm5lY3Rpb25cbiAgICAvLyBpcyByZWFkeSAob25SZWFkeSBmaXJlcyksIGJ1ZmZlcmVkIGNodW5rcyBhcmUgZmx1c2hlZCBhbmQgc3Vic2VxdWVudFxuICAgIC8vIGNodW5rcyBhcmUgc2VudCBkaXJlY3RseS5cbiAgICBjb25zdCBhdWRpb0J1ZmZlcjogQnVmZmVyW10gPSBbXVxuXG4gICAgLy8gU3RhcnQgcmVjb3JkaW5nIElNTUVESUFURUxZIFx1MjAxNCBhdWRpbyBpcyBidWZmZXJlZCB1bnRpbCB0aGUgV2ViU29ja2V0XG4gICAgLy8gb3BlbnMsIGVsaW1pbmF0aW5nIHRoZSAxLTJzIGxhdGVuY3kgZnJvbSB3YWl0aW5nIGZvciBPQXV0aCArIFdTIGNvbm5lY3QuXG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgJ1t2b2ljZV0gc3RhcnRSZWNvcmRpbmc6IGJ1ZmZlcmluZyBhdWRpbyB3aGlsZSBXZWJTb2NrZXQgY29ubmVjdHMnLFxuICAgIClcbiAgICBhdWRpb0xldmVsc1JlZi5jdXJyZW50ID0gW11cbiAgICBjb25zdCBzdGFydGVkID0gYXdhaXQgdm9pY2VNb2R1bGUuc3RhcnRSZWNvcmRpbmcoXG4gICAgICAoY2h1bms6IEJ1ZmZlcikgPT4ge1xuICAgICAgICAvLyBDb3B5IGZvciBmdWxsQXVkaW9SZWYgcmVwbGF5IGJ1ZmZlci4gc2VuZCgpIGluIHZvaWNlU3RyZWFtU1RUXG4gICAgICAgIC8vIGNvcGllcyBhZ2FpbiBkZWZlbnNpdmVseSBcdTIwMTQgYWNjZXB0YWJsZSBvdmVyaGVhZCBhdCBhdWRpbyByYXRlcy5cbiAgICAgICAgLy8gU2tpcCBidWZmZXJpbmcgaW4gZm9jdXMgbW9kZSBcdTIwMTQgcmVwbGF5IGlzIGdhdGVkIG9uICFmb2N1c1RyaWdnZXJlZFxuICAgICAgICAvLyBzbyB0aGUgYnVmZmVyIGlzIGRlYWQgd2VpZ2h0ICh1cCB0byB+MjBNQiBmb3IgYSAxMG1pbiBzZXNzaW9uKS5cbiAgICAgICAgY29uc3Qgb3duZWQgPSBCdWZmZXIuZnJvbShjaHVuaylcbiAgICAgICAgaWYgKCFmb2N1c1RyaWdnZXJlZFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgZnVsbEF1ZGlvUmVmLmN1cnJlbnQucHVzaChvd25lZClcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29ubmVjdGlvblJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgY29ubmVjdGlvblJlZi5jdXJyZW50LnNlbmQob3duZWQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXVkaW9CdWZmZXIucHVzaChvd25lZClcbiAgICAgICAgfVxuICAgICAgICAvLyBVcGRhdGUgYXVkaW8gbGV2ZWwgaGlzdG9ncmFtIGZvciB0aGUgcmVjb3JkaW5nIHZpc3VhbGl6ZXJcbiAgICAgICAgY29uc3QgbGV2ZWwgPSBjb21wdXRlTGV2ZWwoY2h1bmspXG4gICAgICAgIGlmICghaGFzQXVkaW9TaWduYWxSZWYuY3VycmVudCAmJiBsZXZlbCA+IDAuMDEpIHtcbiAgICAgICAgICBoYXNBdWRpb1NpZ25hbFJlZi5jdXJyZW50ID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxldmVscyA9IGF1ZGlvTGV2ZWxzUmVmLmN1cnJlbnRcbiAgICAgICAgaWYgKGxldmVscy5sZW5ndGggPj0gQVVESU9fTEVWRUxfQkFSUykge1xuICAgICAgICAgIGxldmVscy5zaGlmdCgpXG4gICAgICAgIH1cbiAgICAgICAgbGV2ZWxzLnB1c2gobGV2ZWwpXG4gICAgICAgIC8vIENvcHkgdGhlIGFycmF5IHNvIFJlYWN0IHNlZXMgYSBuZXcgcmVmZXJlbmNlXG4gICAgICAgIGNvbnN0IHNuYXBzaG90ID0gWy4uLmxldmVsc11cbiAgICAgICAgYXVkaW9MZXZlbHNSZWYuY3VycmVudCA9IHNuYXBzaG90XG4gICAgICAgIHNldFZvaWNlU3RhdGUocHJldiA9PiAoeyAuLi5wcmV2LCB2b2ljZUF1ZGlvTGV2ZWxzOiBzbmFwc2hvdCB9KSlcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIC8vIEV4dGVybmFsIGVuZCAoZS5nLiBkZXZpY2UgZXJyb3IpIC0gdHJlYXQgYXMgc3RvcFxuICAgICAgICBpZiAoc3RhdGVSZWYuY3VycmVudCA9PT0gJ3JlY29yZGluZycpIHtcbiAgICAgICAgICBmaW5pc2hSZWNvcmRpbmcoKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeyBzaWxlbmNlRGV0ZWN0aW9uOiBmYWxzZSB9LFxuICAgIClcblxuICAgIGlmICghc3RhcnRlZCkge1xuICAgICAgbG9nRXJyb3IobmV3IEVycm9yKCdbdm9pY2VdIFJlY29yZGluZyBmYWlsZWQgXHUyMDE0IG5vIGF1ZGlvIHRvb2wgZm91bmQnKSlcbiAgICAgIG9uRXJyb3JSZWYuY3VycmVudD8uKFxuICAgICAgICAnRmFpbGVkIHRvIHN0YXJ0IGF1ZGlvIGNhcHR1cmUuIENoZWNrIHRoYXQgeW91ciBtaWNyb3Bob25lIGlzIGFjY2Vzc2libGUuJyxcbiAgICAgIClcbiAgICAgIGNsZWFudXAoKVxuICAgICAgdXBkYXRlU3RhdGUoJ2lkbGUnKVxuICAgICAgc2V0Vm9pY2VTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAgIC4uLnByZXYsXG4gICAgICAgIHZvaWNlRXJyb3I6ICdSZWNvcmRpbmcgZmFpbGVkIFx1MjAxNCBubyBhdWRpbyB0b29sIGZvdW5kJyxcbiAgICAgIH0pKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcmF3TGFuZ3VhZ2UgPSBnZXRJbml0aWFsU2V0dGluZ3MoKS5sYW5ndWFnZVxuICAgIGNvbnN0IHN0dCA9IG5vcm1hbGl6ZUxhbmd1YWdlRm9yU1RUKHJhd0xhbmd1YWdlKVxuICAgIGxvZ0V2ZW50KCd0ZW5ndV92b2ljZV9yZWNvcmRpbmdfc3RhcnRlZCcsIHtcbiAgICAgIGZvY3VzVHJpZ2dlcmVkOiBmb2N1c1RyaWdnZXJlZFJlZi5jdXJyZW50LFxuICAgICAgc3R0TGFuZ3VhZ2U6XG4gICAgICAgIHN0dC5jb2RlIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICBzdHRMYW5ndWFnZUlzRGVmYXVsdDogIXJhd0xhbmd1YWdlPy50cmltKCksXG4gICAgICBzdHRMYW5ndWFnZUZlbGxCYWNrOiBzdHQuZmVsbEJhY2tGcm9tICE9PSB1bmRlZmluZWQsXG4gICAgICAvLyBJU08gNjM5IHN1YnRhZyBmcm9tIEludGwgKGJvdW5kZWQgc2V0LCBuZXZlciB1c2VyIHRleHQpLiB1bmRlZmluZWQgaWZcbiAgICAgIC8vIEludGwgZmFpbGVkIFx1MjAxNCBvbWl0dGVkIGZyb20gdGhlIHBheWxvYWQsIG5vIHJldHJ5IGNvc3QgKGNhY2hlZCkuXG4gICAgICBzeXN0ZW1Mb2NhbGVMYW5ndWFnZTpcbiAgICAgICAgZ2V0U3lzdGVtTG9jYWxlTGFuZ3VhZ2UoKSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgIH0pXG5cbiAgICAvLyBSZXRyeSBvbmNlIGlmIHRoZSBjb25uZWN0aW9uIGVycm9ycyBiZWZvcmUgZGVsaXZlcmluZyBhbnkgdHJhbnNjcmlwdC5cbiAgICAvLyBUaGUgY29udmVyc2F0aW9uLWVuZ2luZSBwcm94eSBjYW4gcmVqZWN0IHJhcGlkIHJlY29ubmVjdHMgKH4xL05fcG9kc1xuICAgIC8vIHNhbWUtcG9kIGNvbGxpc2lvbikgb3IgQ0UncyBEZWVwZ3JhbSB1cHN0cmVhbSBjYW4gZmFpbCBkdXJpbmcgaXRzIG93blxuICAgIC8vIHRlYXJkb3duIHdpbmRvdyAoYW50aHJvcGljcy9hbnRocm9waWMjMjg3MDA4IHN1cmZhY2VzIHRoaXMgYXNcbiAgICAvLyBUcmFuc2NyaXB0RXJyb3IgaW5zdGVhZCBvZiBzaWxlbnQtZHJvcCkuIEEgMjUwbXMgYmFja29mZiBjbGVhcnMgYm90aC5cbiAgICAvLyBBdWRpbyBjYXB0dXJlZCBkdXJpbmcgdGhlIHJldHJ5IHdpbmRvdyByb3V0ZXMgdG8gYXVkaW9CdWZmZXIgKHZpYSB0aGVcbiAgICAvLyBjb25uZWN0aW9uUmVmLmN1cnJlbnQgbnVsbCBjaGVjayBpbiB0aGUgcmVjb3JkaW5nIGNhbGxiYWNrIGFib3ZlKSBhbmRcbiAgICAvLyBpcyBmbHVzaGVkIGJ5IHRoZSBzZWNvbmQgb25SZWFkeS5cbiAgICBsZXQgc2F3VHJhbnNjcmlwdCA9IGZhbHNlXG5cbiAgICAvLyBDb25uZWN0IFdlYlNvY2tldCBpbiBwYXJhbGxlbCB3aXRoIGF1ZGlvIHJlY29yZGluZy5cbiAgICAvLyBHYXRoZXIga2V5dGVybXMgZmlyc3QgKGFzeW5jIGJ1dCBmYXN0IFx1MjAxNCBubyBtb2RlbCBjYWxscyksIHRoZW4gY29ubmVjdC5cbiAgICAvLyBCYWlsIGZyb20gY2FsbGJhY2tzIGlmIGEgbmV3ZXIgc2Vzc2lvbiBoYXMgc3RhcnRlZC4gUHJldmVudHMgYVxuICAgIC8vIHNsb3ctY29ubmVjdGluZyB6b21iaWUgV1MgKGUuZy4gdXNlciByZWxlYXNlZCwgcHJlc3NlZCBhZ2FpbiwgZmlyc3RcbiAgICAvLyBXUyBzdGlsbCBoYW5kc2hha2luZykgZnJvbSBmaXJpbmcgb25SZWFkeS9vbkVycm9yIGludG8gdGhlIG5ld1xuICAgIC8vIHNlc3Npb24gYW5kIGNvcnJ1cHRpbmcgaXRzIGNvbm5lY3Rpb25SZWYgLyB0cmlnZ2VyaW5nIGEgYm9ndXMgcmV0cnkuXG4gICAgY29uc3QgaXNTdGFsZSA9ICgpID0+IHNlc3Npb25HZW5SZWYuY3VycmVudCAhPT0gbXlHZW5cblxuICAgIGNvbnN0IGF0dGVtcHRDb25uZWN0ID0gKGtleXRlcm1zOiBzdHJpbmdbXSk6IHZvaWQgPT4ge1xuICAgICAgY29uc3QgbXlBdHRlbXB0R2VuID0gYXR0ZW1wdEdlblJlZi5jdXJyZW50XG4gICAgICB2b2lkIGNvbm5lY3RWb2ljZVN0cmVhbShcbiAgICAgICAge1xuICAgICAgICAgIG9uVHJhbnNjcmlwdDogKHRleHQ6IHN0cmluZywgaXNGaW5hbDogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgaWYgKGlzU3RhbGUoKSkgcmV0dXJuXG4gICAgICAgICAgICBzYXdUcmFuc2NyaXB0ID0gdHJ1ZVxuICAgICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgICBgW3ZvaWNlXSBvblRyYW5zY3JpcHQ6IGlzRmluYWw9JHtTdHJpbmcoaXNGaW5hbCl9IHRleHQ9XCIke3RleHR9XCJgLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKGlzRmluYWwgJiYgdGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgICAgaWYgKGZvY3VzVHJpZ2dlcmVkUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBGb2N1cyBtb2RlOiBmbHVzaCBlYWNoIGZpbmFsIHRyYW5zY3JpcHQgaW1tZWRpYXRlbHkgYW5kXG4gICAgICAgICAgICAgICAgLy8ga2VlcCByZWNvcmRpbmcuIFRoaXMgZ2l2ZXMgY29udGludW91cyB0cmFuc2NyaXB0aW9uIHdoaWxlXG4gICAgICAgICAgICAgICAgLy8gdGhlIHRlcm1pbmFsIGlzIGZvY3VzZWQuXG4gICAgICAgICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgICAgICAgYFt2b2ljZV0gRm9jdXMgbW9kZTogZmx1c2hpbmcgZmluYWwgdHJhbnNjcmlwdCBpbW1lZGlhdGVseTogXCIke3RleHQudHJpbSgpfVwiYCxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgb25UcmFuc2NyaXB0UmVmLmN1cnJlbnQodGV4dC50cmltKCkpXG4gICAgICAgICAgICAgICAgZm9jdXNGbHVzaGVkQ2hhcnNSZWYuY3VycmVudCArPSB0ZXh0LnRyaW0oKS5sZW5ndGhcbiAgICAgICAgICAgICAgICBzZXRWb2ljZVN0YXRlKHByZXYgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHByZXYudm9pY2VJbnRlcmltVHJhbnNjcmlwdCA9PT0gJycpIHJldHVybiBwcmV2XG4gICAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5wcmV2LCB2b2ljZUludGVyaW1UcmFuc2NyaXB0OiAnJyB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBhY2N1bXVsYXRlZFJlZi5jdXJyZW50ID0gJydcbiAgICAgICAgICAgICAgICAvLyBVc2VyIGlzIGFjdGl2ZWx5IHNwZWFraW5nIFx1MjAxNCByZXNldCB0aGUgc2lsZW5jZSB0aW1lci5cbiAgICAgICAgICAgICAgICBhcm1Gb2N1c1NpbGVuY2VUaW1lcigpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSG9sZC10by10YWxrOiBhY2N1bXVsYXRlIGZpbmFsIHRyYW5zY3JpcHRzIHNlcGFyYXRlZCBieSBzcGFjZXNcbiAgICAgICAgICAgICAgICBpZiAoYWNjdW11bGF0ZWRSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgYWNjdW11bGF0ZWRSZWYuY3VycmVudCArPSAnICdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWNjdW11bGF0ZWRSZWYuY3VycmVudCArPSB0ZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgICAgIGBbdm9pY2VdIEFjY3VtdWxhdGVkIGZpbmFsIHRyYW5zY3JpcHQ6IFwiJHthY2N1bXVsYXRlZFJlZi5jdXJyZW50fVwiYCxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLy8gQ2xlYXIgaW50ZXJpbSBzaW5jZSBmaW5hbCBzdXBlcnNlZGVzIGl0XG4gICAgICAgICAgICAgICAgc2V0Vm9pY2VTdGF0ZShwcmV2ID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpZXcgPSBhY2N1bXVsYXRlZFJlZi5jdXJyZW50XG4gICAgICAgICAgICAgICAgICBpZiAocHJldi52b2ljZUludGVyaW1UcmFuc2NyaXB0ID09PSBwcmV2aWV3KSByZXR1cm4gcHJldlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldiwgdm9pY2VJbnRlcmltVHJhbnNjcmlwdDogcHJldmlldyB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICghaXNGaW5hbCkge1xuICAgICAgICAgICAgICAvLyBBY3RpdmUgaW50ZXJpbSBzcGVlY2ggcmVzZXRzIHRoZSBmb2N1cyBzaWxlbmNlIHRpbWVyLlxuICAgICAgICAgICAgICAvLyBOb3ZhIDMgZGlzYWJsZXMgYXV0by1maW5hbGl6ZSBzbyBpc0ZpbmFsIGlzIG5ldmVyIHRydWVcbiAgICAgICAgICAgICAgLy8gbWlkLXN0cmVhbSBcdTIwMTQgd2l0aG91dCB0aGlzLCB0aGUgNXMgdGltZXIgZmlyZXMgZHVyaW5nXG4gICAgICAgICAgICAgIC8vIGFjdGl2ZSBzcGVlY2ggYW5kIHRlYXJzIGRvd24gdGhlIHNlc3Npb24uXG4gICAgICAgICAgICAgIGlmIChmb2N1c1RyaWdnZXJlZFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgYXJtRm9jdXNTaWxlbmNlVGltZXIoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIFNob3cgYWNjdW11bGF0ZWQgZmluYWxzICsgY3VycmVudCBpbnRlcmltIGFzIGxpdmUgcHJldmlld1xuICAgICAgICAgICAgICBjb25zdCBpbnRlcmltID0gdGV4dC50cmltKClcbiAgICAgICAgICAgICAgY29uc3QgcHJldmlldyA9IGFjY3VtdWxhdGVkUmVmLmN1cnJlbnRcbiAgICAgICAgICAgICAgICA/IGFjY3VtdWxhdGVkUmVmLmN1cnJlbnQgKyAoaW50ZXJpbSA/ICcgJyArIGludGVyaW0gOiAnJylcbiAgICAgICAgICAgICAgICA6IGludGVyaW1cbiAgICAgICAgICAgICAgc2V0Vm9pY2VTdGF0ZShwcmV2ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocHJldi52b2ljZUludGVyaW1UcmFuc2NyaXB0ID09PSBwcmV2aWV3KSByZXR1cm4gcHJldlxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnByZXYsIHZvaWNlSW50ZXJpbVRyYW5zY3JpcHQ6IHByZXZpZXcgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgb25FcnJvcjogKGVycm9yOiBzdHJpbmcsIG9wdHM/OiB7IGZhdGFsPzogYm9vbGVhbiB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNTdGFsZSgpKSB7XG4gICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgICBgW3ZvaWNlXSBpZ25vcmluZyBvbkVycm9yIGZyb20gc3RhbGUgc2Vzc2lvbjogJHtlcnJvcn1gLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3dhbGxvdyBlcnJvcnMgZnJvbSBzdXBlcnNlZGVkIGF0dGVtcHRzLiBDb3ZlcnMgY29ubiAxJ3NcbiAgICAgICAgICAgIC8vIHRyYWlsaW5nIGNsb3NlIGFmdGVyIHJldHJ5IGlzIHNjaGVkdWxlZCwgQU5EIHRoZSBjdXJyZW50XG4gICAgICAgICAgICAvLyBjb25uJ3Mgd3MgY2xvc2UgZXZlbnQgYWZ0ZXIgaXRzIHdzIGVycm9yIGFscmVhZHkgc3VyZmFjZWRcbiAgICAgICAgICAgIC8vIGJlbG93IChnZW4gYnVtcGVkIGF0IHN1cmZhY2UpLlxuICAgICAgICAgICAgaWYgKGF0dGVtcHRHZW5SZWYuY3VycmVudCAhPT0gbXlBdHRlbXB0R2VuKSB7XG4gICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgICBgW3ZvaWNlXSBpZ25vcmluZyBzdGFsZSBvbkVycm9yIGZyb20gc3VwZXJzZWRlZCBhdHRlbXB0OiAke2Vycm9yfWAsXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBFYXJseS1mYWlsdXJlIHJldHJ5OiBzZXJ2ZXIgZXJyb3IgYmVmb3JlIGFueSB0cmFuc2NyaXB0ID1cbiAgICAgICAgICAgIC8vIGxpa2VseSBhIHRyYW5zaWVudCB1cHN0cmVhbSByYWNlIChDRSByZWplY3Rpb24sIERlZXBncmFtXG4gICAgICAgICAgICAvLyBub3QgcmVhZHkpLiBDbGVhciBjb25uZWN0aW9uUmVmIHNvIGF1ZGlvIHJlLWJ1ZmZlcnMsIGJhY2tcbiAgICAgICAgICAgIC8vIG9mZiwgcmVjb25uZWN0LiBTa2lwIGlmIHRoZSB1c2VyIGhhcyBhbHJlYWR5IHJlbGVhc2VkIHRoZVxuICAgICAgICAgICAgLy8ga2V5IChzdGF0ZSBsZWZ0ICdyZWNvcmRpbmcnKSBcdTIwMTQgbm8gcG9pbnQgcmV0cnlpbmcgYSBzZXNzaW9uXG4gICAgICAgICAgICAvLyB0aGV5J3ZlIGVuZGVkLiBGYXRhbCBlcnJvcnMgKENsb3VkZmxhcmUgYm90IGNoYWxsZW5nZSwgYXV0aFxuICAgICAgICAgICAgLy8gcmVqZWN0aW9uKSBhcmUgdGhlIHNhbWUgZmFpbHVyZSBvbiBldmVyeSByZXRyeSBhdHRlbXB0LCBzb1xuICAgICAgICAgICAgLy8gZmFsbCB0aHJvdWdoIHRvIHN1cmZhY2UgdGhlIG1lc3NhZ2UuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICFvcHRzPy5mYXRhbCAmJlxuICAgICAgICAgICAgICAhc2F3VHJhbnNjcmlwdCAmJlxuICAgICAgICAgICAgICBzdGF0ZVJlZi5jdXJyZW50ID09PSAncmVjb3JkaW5nJ1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGlmICghcmV0cnlVc2VkUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICByZXRyeVVzZWRSZWYuY3VycmVudCA9IHRydWVcbiAgICAgICAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICAgICAgICBgW3ZvaWNlXSBlYXJseSB2b2ljZV9zdHJlYW0gZXJyb3IgKHByZS10cmFuc2NyaXB0KSwgcmV0cnlpbmcgb25jZTogJHtlcnJvcn1gLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBsb2dFdmVudCgndGVuZ3Vfdm9pY2Vfc3RyZWFtX2Vhcmx5X3JldHJ5Jywge30pXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvblJlZi5jdXJyZW50ID0gbnVsbFxuICAgICAgICAgICAgICAgIGF0dGVtcHRHZW5SZWYuY3VycmVudCsrXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICAgIChzdGF0ZVJlZiwgYXR0ZW1wdENvbm5lY3QsIGtleXRlcm1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZVJlZi5jdXJyZW50ID09PSAncmVjb3JkaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dGVtcHRDb25uZWN0KGtleXRlcm1zKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgMjUwLFxuICAgICAgICAgICAgICAgICAgc3RhdGVSZWYsXG4gICAgICAgICAgICAgICAgICBhdHRlbXB0Q29ubmVjdCxcbiAgICAgICAgICAgICAgICAgIGtleXRlcm1zLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3VyZmFjaW5nIFx1MjAxNCBidW1wIGdlbiBzbyB0aGlzIGNvbm4ncyB0cmFpbGluZyBjbG9zZS1lcnJvclxuICAgICAgICAgICAgLy8gKHdzIGZpcmVzIGVycm9yIHRoZW4gY2xvc2UgMTAwNikgaXMgc3dhbGxvd2VkIGFib3ZlLlxuICAgICAgICAgICAgYXR0ZW1wdEdlblJlZi5jdXJyZW50KytcbiAgICAgICAgICAgIGxvZ0Vycm9yKG5ldyBFcnJvcihgW3ZvaWNlXSB2b2ljZV9zdHJlYW0gZXJyb3I6ICR7ZXJyb3J9YCkpXG4gICAgICAgICAgICBvbkVycm9yUmVmLmN1cnJlbnQ/LihgVm9pY2Ugc3RyZWFtIGVycm9yOiAke2Vycm9yfWApXG4gICAgICAgICAgICAvLyBDbGVhciB0aGUgYXVkaW8gYnVmZmVyIG9uIGVycm9yIHRvIGF2b2lkIG1lbW9yeSBsZWFrc1xuICAgICAgICAgICAgYXVkaW9CdWZmZXIubGVuZ3RoID0gMFxuICAgICAgICAgICAgZm9jdXNUcmlnZ2VyZWRSZWYuY3VycmVudCA9IGZhbHNlXG4gICAgICAgICAgICBjbGVhbnVwKClcbiAgICAgICAgICAgIHVwZGF0ZVN0YXRlKCdpZGxlJylcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uQ2xvc2U6ICgpID0+IHtcbiAgICAgICAgICAgIC8vIG5vLW9wOyBsaWZlY3ljbGUgaGFuZGxlZCBieSBjbGVhbnVwKClcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uUmVhZHk6IGNvbm4gPT4ge1xuICAgICAgICAgICAgLy8gT25seSBwcm9jZWVkIGlmIHdlJ3JlIHN0aWxsIGluIHJlY29yZGluZyBzdGF0ZSBBTkQgdGhpcyBpc1xuICAgICAgICAgICAgLy8gc3RpbGwgdGhlIGN1cnJlbnQgc2Vzc2lvbi4gQSB6b21iaWUgbGF0ZS1jb25uZWN0aW5nIFdTIGZyb21cbiAgICAgICAgICAgIC8vIGFuIGFiYW5kb25lZCBzZXNzaW9uIGNhbiBwYXNzIHRoZSAncmVjb3JkaW5nJyBjaGVjayBpZiB0aGVcbiAgICAgICAgICAgIC8vIHVzZXIgaGFzIHNpbmNlIHN0YXJ0ZWQgYSBuZXcgc2Vzc2lvbi5cbiAgICAgICAgICAgIGlmIChpc1N0YWxlKCkgfHwgc3RhdGVSZWYuY3VycmVudCAhPT0gJ3JlY29yZGluZycpIHtcbiAgICAgICAgICAgICAgY29ubi5jbG9zZSgpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUaGUgV2ViU29ja2V0IGlzIG5vdyB0cnVseSBvcGVuIFx1MjAxNCBhc3NpZ24gY29ubmVjdGlvblJlZiBzb1xuICAgICAgICAgICAgLy8gc3Vic2VxdWVudCBhdWRpbyBjYWxsYmFja3Mgc2VuZCBkaXJlY3RseSBpbnN0ZWFkIG9mIGJ1ZmZlcmluZy5cbiAgICAgICAgICAgIGNvbm5lY3Rpb25SZWYuY3VycmVudCA9IGNvbm5cbiAgICAgICAgICAgIGV2ZXJDb25uZWN0ZWRSZWYuY3VycmVudCA9IHRydWVcblxuICAgICAgICAgICAgLy8gRmx1c2ggYWxsIGF1ZGlvIGNodW5rcyB0aGF0IHdlcmUgYnVmZmVyZWQgd2hpbGUgdGhlIFdlYlNvY2tldFxuICAgICAgICAgICAgLy8gd2FzIGNvbm5lY3RpbmcuICBUaGlzIGlzIHNhZmUgYmVjYXVzZSBvblJlYWR5IGZpcmVzIGZyb20gdGhlXG4gICAgICAgICAgICAvLyBXZWJTb2NrZXQgJ29wZW4nIGV2ZW50LCBndWFyYW50ZWVpbmcgc2VuZCgpIHdpbGwgbm90IGJlIGRyb3BwZWQuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gQ29hbGVzY2UgaW50byB+MXMgc2xpY2VzIHJhdGhlciB0aGFuIG9uZSB3cy5zZW5kIHBlciBjaHVua1xuICAgICAgICAgICAgLy8gXHUyMDE0IGZld2VyIFdTIGZyYW1lcyBtZWFucyBsZXNzIG92ZXJoZWFkIG9uIGJvdGggZW5kcy5cbiAgICAgICAgICAgIGNvbnN0IFNMSUNFX1RBUkdFVF9CWVRFUyA9IDMyXzAwMCAvLyB+MXMgYXQgMTZrSHovMTYtYml0L21vbm9cbiAgICAgICAgICAgIGlmIChhdWRpb0J1ZmZlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIGxldCB0b3RhbEJ5dGVzID0gMFxuICAgICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2YgYXVkaW9CdWZmZXIpIHRvdGFsQnl0ZXMgKz0gYy5sZW5ndGhcbiAgICAgICAgICAgICAgY29uc3Qgc2xpY2VzOiBCdWZmZXJbXVtdID0gW1tdXVxuICAgICAgICAgICAgICBsZXQgc2xpY2VCeXRlcyA9IDBcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBjaHVuayBvZiBhdWRpb0J1ZmZlcikge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIHNsaWNlQnl0ZXMgPiAwICYmXG4gICAgICAgICAgICAgICAgICBzbGljZUJ5dGVzICsgY2h1bmsubGVuZ3RoID4gU0xJQ0VfVEFSR0VUX0JZVEVTXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICBzbGljZXMucHVzaChbXSlcbiAgICAgICAgICAgICAgICAgIHNsaWNlQnl0ZXMgPSAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNsaWNlc1tzbGljZXMubGVuZ3RoIC0gMV0hLnB1c2goY2h1bmspXG4gICAgICAgICAgICAgICAgc2xpY2VCeXRlcyArPSBjaHVuay5sZW5ndGhcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgICAgICAgYFt2b2ljZV0gb25SZWFkeTogZmx1c2hpbmcgJHtTdHJpbmcoYXVkaW9CdWZmZXIubGVuZ3RoKX0gYnVmZmVyZWQgY2h1bmtzICgke1N0cmluZyh0b3RhbEJ5dGVzKX0gYnl0ZXMpIGFzICR7U3RyaW5nKHNsaWNlcy5sZW5ndGgpfSBjb2FsZXNjZWQgZnJhbWUocylgLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGZvciAoY29uc3Qgc2xpY2Ugb2Ygc2xpY2VzKSB7XG4gICAgICAgICAgICAgICAgY29ubi5zZW5kKEJ1ZmZlci5jb25jYXQoc2xpY2UpKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhdWRpb0J1ZmZlci5sZW5ndGggPSAwXG5cbiAgICAgICAgICAgIC8vIFJlc2V0IHRoZSByZWxlYXNlIHRpbWVyIG5vdyB0aGF0IHRoZSBXZWJTb2NrZXQgaXMgcmVhZHkuXG4gICAgICAgICAgICAvLyBPbmx5IGFybSBpdCBpZiBhdXRvLXJlcGVhdCBoYXMgYmVlbiBzZWVuIFx1MjAxNCBvdGhlcndpc2UgdGhlIE9TXG4gICAgICAgICAgICAvLyBrZXkgcmVwZWF0IGRlbGF5ICh+NTAwbXMpIGhhc24ndCBlbGFwc2VkIHlldCBhbmQgdGhlIHRpbWVyXG4gICAgICAgICAgICAvLyB3b3VsZCBmaXJlIHByZW1hdHVyZWx5LlxuICAgICAgICAgICAgaWYgKHJlbGVhc2VUaW1lclJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIGNsZWFyVGltZW91dChyZWxlYXNlVGltZXJSZWYuY3VycmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWVuUmVwZWF0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgcmVsZWFzZVRpbWVyUmVmLmN1cnJlbnQgPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIChyZWxlYXNlVGltZXJSZWYsIHN0YXRlUmVmLCBmaW5pc2hSZWNvcmRpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJlbGVhc2VUaW1lclJlZi5jdXJyZW50ID0gbnVsbFxuICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlUmVmLmN1cnJlbnQgPT09ICdyZWNvcmRpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmlzaFJlY29yZGluZygpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBSRUxFQVNFX1RJTUVPVVRfTVMsXG4gICAgICAgICAgICAgICAgcmVsZWFzZVRpbWVyUmVmLFxuICAgICAgICAgICAgICAgIHN0YXRlUmVmLFxuICAgICAgICAgICAgICAgIGZpbmlzaFJlY29yZGluZyxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYW5ndWFnZTogc3R0LmNvZGUsXG4gICAgICAgICAga2V5dGVybXMsXG4gICAgICAgIH0sXG4gICAgICApLnRoZW4oY29ubiA9PiB7XG4gICAgICAgIGlmIChpc1N0YWxlKCkpIHtcbiAgICAgICAgICBjb25uPy5jbG9zZSgpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjb25uKSB7XG4gICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgJ1t2b2ljZV0gRmFpbGVkIHRvIGNvbm5lY3QgdG8gdm9pY2Vfc3RyZWFtIChubyBPQXV0aCB0b2tlbj8pJyxcbiAgICAgICAgICApXG4gICAgICAgICAgb25FcnJvclJlZi5jdXJyZW50Py4oXG4gICAgICAgICAgICAnVm9pY2UgbW9kZSByZXF1aXJlcyBhIENsYXVkZS5haSBhY2NvdW50LiBQbGVhc2UgcnVuIC9sb2dpbiB0byBzaWduIGluLicsXG4gICAgICAgICAgKVxuICAgICAgICAgIC8vIENsZWFyIHRoZSBhdWRpbyBidWZmZXIgb24gZmFpbHVyZVxuICAgICAgICAgIGF1ZGlvQnVmZmVyLmxlbmd0aCA9IDBcbiAgICAgICAgICBjbGVhbnVwKClcbiAgICAgICAgICB1cGRhdGVTdGF0ZSgnaWRsZScpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBTYWZldHkgY2hlY2s6IGlmIHRoZSB1c2VyIHJlbGVhc2VkIHRoZSBrZXkgYmVmb3JlIGNvbm5lY3RWb2ljZVN0cmVhbVxuICAgICAgICAvLyByZXNvbHZlZCAoYnV0IGFmdGVyIG9uUmVhZHkgYWxyZWFkeSByYW4pLCBjbG9zZSB0aGUgY29ubmVjdGlvbi5cbiAgICAgICAgaWYgKHN0YXRlUmVmLmN1cnJlbnQgIT09ICdyZWNvcmRpbmcnKSB7XG4gICAgICAgICAgYXVkaW9CdWZmZXIubGVuZ3RoID0gMFxuICAgICAgICAgIGNvbm4uY2xvc2UoKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHZvaWQgZ2V0Vm9pY2VLZXl0ZXJtcygpLnRoZW4oYXR0ZW1wdENvbm5lY3QpXG4gIH1cblxuICAvLyBcdTI1MDBcdTI1MDAgSG9sZC10by10YWxrIGhhbmRsZXIgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG4gIC8vIENhbGxlZCBvbiBldmVyeSBrZXlwcmVzcyAoaW5jbHVkaW5nIHRlcm1pbmFsIGF1dG8tcmVwZWF0cyB3aGlsZVxuICAvLyB0aGUga2V5IGlzIGhlbGQpLiAgQSBnYXAgbG9uZ2VyIHRoYW4gUkVMRUFTRV9USU1FT1VUX01TIGJldHdlZW5cbiAgLy8gZXZlbnRzIGlzIGludGVycHJldGVkIGFzIGtleSByZWxlYXNlLlxuICAvL1xuICAvLyBSZWNvcmRpbmcgc3RhcnRzIGltbWVkaWF0ZWx5IG9uIHRoZSBmaXJzdCBrZXlwcmVzcyB0byBlbGltaW5hdGVcbiAgLy8gc3RhcnR1cCBkZWxheS4gIFRoZSByZWxlYXNlIHRpbWVyIGlzIG9ubHkgYXJtZWQgYWZ0ZXIgYXV0by1yZXBlYXRcbiAgLy8gaXMgZGV0ZWN0ZWQgKHRvIGF2b2lkIGZhbHNlIHJlbGVhc2VzIGR1cmluZyB0aGUgT1Mga2V5IHJlcGVhdFxuICAvLyBkZWxheSBvZiB+NTAwbXMgb24gbWFjT1MpLlxuICBjb25zdCBoYW5kbGVLZXlFdmVudCA9IHVzZUNhbGxiYWNrKFxuICAgIChmYWxsYmFja01zID0gUkVQRUFUX0ZBTExCQUNLX01TKTogdm9pZCA9PiB7XG4gICAgICBpZiAoIWVuYWJsZWQgfHwgIWlzVm9pY2VTdHJlYW1BdmFpbGFibGUoKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gSW4gZm9jdXMgbW9kZSwgcmVjb3JkaW5nIGlzIGRyaXZlbiBieSB0ZXJtaW5hbCBmb2N1cywgbm90IGtleXByZXNzZXMuXG4gICAgICBpZiAoZm9jdXNUcmlnZ2VyZWRSZWYuY3VycmVudCkge1xuICAgICAgICAvLyBBY3RpdmUgZm9jdXMgcmVjb3JkaW5nIFx1MjAxNCBpZ25vcmUga2V5IGV2ZW50cyAoc2Vzc2lvbiBlbmRzIG9uIGJsdXIpLlxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmIChmb2N1c01vZGUgJiYgc2lsZW5jZVRpbWVkT3V0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgLy8gRm9jdXMgc2Vzc2lvbiB0aW1lZCBvdXQgZHVlIHRvIHNpbGVuY2UgXHUyMDE0IGtleXByZXNzIHJlLWFybXMgaXQuXG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAnW3ZvaWNlXSBSZS1hcm1pbmcgZm9jdXMgcmVjb3JkaW5nIGFmdGVyIHNpbGVuY2UgdGltZW91dCcsXG4gICAgICAgIClcbiAgICAgICAgc2lsZW5jZVRpbWVkT3V0UmVmLmN1cnJlbnQgPSBmYWxzZVxuICAgICAgICBmb2N1c1RyaWdnZXJlZFJlZi5jdXJyZW50ID0gdHJ1ZVxuICAgICAgICB2b2lkIHN0YXJ0UmVjb3JkaW5nU2Vzc2lvbigpXG4gICAgICAgIGFybUZvY3VzU2lsZW5jZVRpbWVyKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IHN0YXRlUmVmLmN1cnJlbnRcblxuICAgICAgLy8gSWdub3JlIGtleXByZXNzZXMgd2hpbGUgcHJvY2Vzc2luZ1xuICAgICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gJ3Byb2Nlc3NpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudFN0YXRlID09PSAnaWRsZScpIHtcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICdbdm9pY2VdIGhhbmRsZUtleUV2ZW50OiBpZGxlLCBzdGFydGluZyByZWNvcmRpbmcgc2Vzc2lvbiBpbW1lZGlhdGVseScsXG4gICAgICAgIClcbiAgICAgICAgdm9pZCBzdGFydFJlY29yZGluZ1Nlc3Npb24oKVxuICAgICAgICAvLyBGYWxsYmFjazogaWYgbm8gYXV0by1yZXBlYXQgYXJyaXZlcyB3aXRoaW4gUkVQRUFUX0ZBTExCQUNLX01TLFxuICAgICAgICAvLyBhcm0gdGhlIHJlbGVhc2UgdGltZXIgYW55d2F5ICh0aGUgdXNlciBsaWtlbHkgdGFwcGVkIGFuZCByZWxlYXNlZCkuXG4gICAgICAgIHJlcGVhdEZhbGxiYWNrVGltZXJSZWYuY3VycmVudCA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgKFxuICAgICAgICAgICAgcmVwZWF0RmFsbGJhY2tUaW1lclJlZixcbiAgICAgICAgICAgIHN0YXRlUmVmLFxuICAgICAgICAgICAgc2VlblJlcGVhdFJlZixcbiAgICAgICAgICAgIHJlbGVhc2VUaW1lclJlZixcbiAgICAgICAgICAgIGZpbmlzaFJlY29yZGluZyxcbiAgICAgICAgICApID0+IHtcbiAgICAgICAgICAgIHJlcGVhdEZhbGxiYWNrVGltZXJSZWYuY3VycmVudCA9IG51bGxcbiAgICAgICAgICAgIGlmIChzdGF0ZVJlZi5jdXJyZW50ID09PSAncmVjb3JkaW5nJyAmJiAhc2VlblJlcGVhdFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgICAnW3ZvaWNlXSBObyBhdXRvLXJlcGVhdCBzZWVuLCBhcm1pbmcgcmVsZWFzZSB0aW1lciB2aWEgZmFsbGJhY2snLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHNlZW5SZXBlYXRSZWYuY3VycmVudCA9IHRydWVcbiAgICAgICAgICAgICAgcmVsZWFzZVRpbWVyUmVmLmN1cnJlbnQgPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIChyZWxlYXNlVGltZXJSZWYsIHN0YXRlUmVmLCBmaW5pc2hSZWNvcmRpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJlbGVhc2VUaW1lclJlZi5jdXJyZW50ID0gbnVsbFxuICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlUmVmLmN1cnJlbnQgPT09ICdyZWNvcmRpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmlzaFJlY29yZGluZygpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBSRUxFQVNFX1RJTUVPVVRfTVMsXG4gICAgICAgICAgICAgICAgcmVsZWFzZVRpbWVyUmVmLFxuICAgICAgICAgICAgICAgIHN0YXRlUmVmLFxuICAgICAgICAgICAgICAgIGZpbmlzaFJlY29yZGluZyxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFsbGJhY2tNcyxcbiAgICAgICAgICByZXBlYXRGYWxsYmFja1RpbWVyUmVmLFxuICAgICAgICAgIHN0YXRlUmVmLFxuICAgICAgICAgIHNlZW5SZXBlYXRSZWYsXG4gICAgICAgICAgcmVsZWFzZVRpbWVyUmVmLFxuICAgICAgICAgIGZpbmlzaFJlY29yZGluZyxcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIGlmIChjdXJyZW50U3RhdGUgPT09ICdyZWNvcmRpbmcnKSB7XG4gICAgICAgIC8vIFNlY29uZCsga2V5cHJlc3Mgd2hpbGUgcmVjb3JkaW5nIFx1MjAxNCBhdXRvLXJlcGVhdCBoYXMgc3RhcnRlZC5cbiAgICAgICAgc2VlblJlcGVhdFJlZi5jdXJyZW50ID0gdHJ1ZVxuICAgICAgICBpZiAocmVwZWF0RmFsbGJhY2tUaW1lclJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHJlcGVhdEZhbGxiYWNrVGltZXJSZWYuY3VycmVudClcbiAgICAgICAgICByZXBlYXRGYWxsYmFja1RpbWVyUmVmLmN1cnJlbnQgPSBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUmVzZXQgdGhlIHJlbGVhc2UgdGltZXIgb24gZXZlcnkga2V5cHJlc3MgKGluY2x1ZGluZyBhdXRvLXJlcGVhdHMpXG4gICAgICBpZiAocmVsZWFzZVRpbWVyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHJlbGVhc2VUaW1lclJlZi5jdXJyZW50KVxuICAgICAgfVxuXG4gICAgICAvLyBPbmx5IGFybSB0aGUgcmVsZWFzZSB0aW1lciBvbmNlIGF1dG8tcmVwZWF0IGhhcyBiZWVuIHNlZW4uXG4gICAgICAvLyBUaGUgT1Mga2V5IHJlcGVhdCBkZWxheSBpcyB+NTAwbXMgb24gbWFjT1M7IHdpdGhvdXQgdGhpcyBnYXRlXG4gICAgICAvLyB0aGUgMjAwbXMgdGltZXIgZmlyZXMgYmVmb3JlIHJlcGVhdCBzdGFydHMsIGNhdXNpbmcgYSBmYWxzZSByZWxlYXNlLlxuICAgICAgaWYgKHN0YXRlUmVmLmN1cnJlbnQgPT09ICdyZWNvcmRpbmcnICYmIHNlZW5SZXBlYXRSZWYuY3VycmVudCkge1xuICAgICAgICByZWxlYXNlVGltZXJSZWYuY3VycmVudCA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgKHJlbGVhc2VUaW1lclJlZiwgc3RhdGVSZWYsIGZpbmlzaFJlY29yZGluZykgPT4ge1xuICAgICAgICAgICAgcmVsZWFzZVRpbWVyUmVmLmN1cnJlbnQgPSBudWxsXG4gICAgICAgICAgICBpZiAoc3RhdGVSZWYuY3VycmVudCA9PT0gJ3JlY29yZGluZycpIHtcbiAgICAgICAgICAgICAgZmluaXNoUmVjb3JkaW5nKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFJFTEVBU0VfVElNRU9VVF9NUyxcbiAgICAgICAgICByZWxlYXNlVGltZXJSZWYsXG4gICAgICAgICAgc3RhdGVSZWYsXG4gICAgICAgICAgZmluaXNoUmVjb3JkaW5nLFxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbZW5hYmxlZCwgZm9jdXNNb2RlLCBjbGVhbnVwXSxcbiAgKVxuXG4gIC8vIENsZWFudXAgb25seSB3aGVuIGRpc2FibGVkIG9yIHVubW91bnRlZCAtIE5PVCBvbiBzdGF0ZSBjaGFuZ2VzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFlbmFibGVkICYmIHN0YXRlUmVmLmN1cnJlbnQgIT09ICdpZGxlJykge1xuICAgICAgY2xlYW51cCgpXG4gICAgICB1cGRhdGVTdGF0ZSgnaWRsZScpXG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhbnVwKClcbiAgICB9XG4gIH0sIFtlbmFibGVkLCBjbGVhbnVwXSlcblxuICByZXR1cm4ge1xuICAgIHN0YXRlLFxuICAgIGhhbmRsZUtleUV2ZW50LFxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxTQUFTLGdCQUFnQjtBQWlDbEIsU0FBUyxnQkFBZ0IsTUFBd0I7QUFDdEQsU0FBTyxLQUNKLFFBQVEsbUJBQW1CLE9BQU8sRUFDbEMsTUFBTSxXQUFXLEVBQ2pCLElBQUksT0FBSyxFQUFFLEtBQUssQ0FBQyxFQUNqQixPQUFPLE9BQUssRUFBRSxTQUFTLEtBQUssRUFBRSxVQUFVLEVBQUU7QUFDL0M7QUFFQSxTQUFTLGNBQWMsVUFBNEI7QUFDakQsUUFBTSxPQUFPLFNBQVMsUUFBUSxFQUFFLFFBQVEsWUFBWSxFQUFFO0FBQ3RELFNBQU8sZ0JBQWdCLElBQUk7QUFDN0I7QUFZQSxlQUFzQixpQkFDcEIsYUFDbUI7QUFDbkIsUUFBTSxRQUFRLElBQUksSUFBWSxlQUFlO0FBSzdDLE1BQUk7QUFDRixVQUFNLGNBQWMsZUFBZTtBQUNuQyxRQUFJLGFBQWE7QUFDZixZQUFNLE9BQU8sU0FBUyxXQUFXO0FBQ2pDLFVBQUksS0FBSyxTQUFTLEtBQUssS0FBSyxVQUFVLElBQUk7QUFDeEMsY0FBTSxJQUFJLElBQUk7QUFBQSxNQUNoQjtBQUFBLElBQ0Y7QUFBQSxFQUNGLFFBQVE7QUFBQSxFQUVSO0FBR0EsTUFBSTtBQUNGLFVBQU0sU0FBUyxNQUFNLFVBQVU7QUFDL0IsUUFBSSxRQUFRO0FBQ1YsaUJBQVcsUUFBUSxnQkFBZ0IsTUFBTSxHQUFHO0FBQzFDLGNBQU0sSUFBSSxJQUFJO0FBQUEsTUFDaEI7QUFBQSxJQUNGO0FBQUEsRUFDRixRQUFRO0FBQUEsRUFFUjtBQUdBLE1BQUksYUFBYTtBQUNmLGVBQVcsWUFBWSxhQUFhO0FBQ2xDLFVBQUksTUFBTSxRQUFRLGFBQWM7QUFDaEMsaUJBQVcsUUFBUSxjQUFjLFFBQVEsR0FBRztBQUMxQyxjQUFNLElBQUksSUFBSTtBQUFBLE1BQ2hCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFQSxTQUFPLENBQUMsR0FBRyxLQUFLLEVBQUUsTUFBTSxHQUFHLFlBQVk7QUFDekM7QUF6R0EsSUFZTSxpQkEwQ0E7QUF0RE47QUFBQTtBQU9BO0FBQ0E7QUFJQSxJQUFNLGtCQUFxQztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSXpDO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUF3QkEsSUFBTSxlQUFlO0FBQUE7QUFBQTs7O0FDdERyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXdITyxTQUFTLHdCQUF3QixVQUd0QztBQUNBLE1BQUksQ0FBQyxTQUFVLFFBQU8sRUFBRSxNQUFNLHFCQUFxQjtBQUNuRCxRQUFNLFFBQVEsU0FBUyxZQUFZLEVBQUUsS0FBSztBQUMxQyxNQUFJLENBQUMsTUFBTyxRQUFPLEVBQUUsTUFBTSxxQkFBcUI7QUFDaEQsTUFBSSx5QkFBeUIsSUFBSSxLQUFLLEVBQUcsUUFBTyxFQUFFLE1BQU0sTUFBTTtBQUM5RCxRQUFNLFdBQVcsc0JBQXNCLEtBQUs7QUFDNUMsTUFBSSxTQUFVLFFBQU8sRUFBRSxNQUFNLFNBQVM7QUFDdEMsUUFBTSxPQUFPLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUMvQixNQUFJLFFBQVEseUJBQXlCLElBQUksSUFBSSxFQUFHLFFBQU8sRUFBRSxNQUFNLEtBQUs7QUFDcEUsU0FBTyxFQUFFLE1BQU0sc0JBQXNCLGNBQWMsU0FBUztBQUM5RDtBQW1ETyxTQUFTLGFBQWEsT0FBdUI7QUFDbEQsUUFBTSxVQUFVLE1BQU0sVUFBVTtBQUNoQyxNQUFJLFlBQVksRUFBRyxRQUFPO0FBQzFCLE1BQUksUUFBUTtBQUNaLFdBQVMsSUFBSSxHQUFHLElBQUksTUFBTSxTQUFTLEdBQUcsS0FBSyxHQUFHO0FBRTVDLFVBQU0sVUFBVyxNQUFNLENBQUMsSUFBTSxNQUFNLElBQUksQ0FBQyxLQUFNLE1BQU8sTUFBTztBQUM3RCxhQUFTLFNBQVM7QUFBQSxFQUNwQjtBQUNBLFFBQU0sTUFBTSxLQUFLLEtBQUssUUFBUSxPQUFPO0FBQ3JDLFFBQU0sYUFBYSxLQUFLLElBQUksTUFBTSxLQUFNLENBQUM7QUFDekMsU0FBTyxLQUFLLEtBQUssVUFBVTtBQUM3QjtBQUVPLFNBQVMsU0FBUztBQUFBLEVBQ3ZCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0YsR0FBb0M7QUFDbEMsUUFBTSxDQUFDLE9BQU8sUUFBUSxJQUFJLFNBQXFCLE1BQU07QUFDckQsUUFBTSxXQUFXLE9BQW1CLE1BQU07QUFDMUMsUUFBTSxnQkFBZ0IsT0FBcUMsSUFBSTtBQUMvRCxRQUFNLGlCQUFpQixPQUFPLEVBQUU7QUFDaEMsUUFBTSxrQkFBa0IsT0FBTyxZQUFZO0FBQzNDLFFBQU0sYUFBYSxPQUFPLE9BQU87QUFDakMsUUFBTSxrQkFBa0IsT0FBNkMsSUFBSTtBQUN6RSxRQUFNLGtCQUFrQixPQUE2QyxJQUFJO0FBS3pFLFFBQU0sZ0JBQWdCLE9BQU8sS0FBSztBQUNsQyxRQUFNLHlCQUF5QjtBQUFBLElBQzdCO0FBQUEsRUFDRjtBQUdBLFFBQU0sb0JBQW9CLE9BQU8sS0FBSztBQUV0QyxRQUFNLHVCQUF1QjtBQUFBLElBQzNCO0FBQUEsRUFDRjtBQUlBLFFBQU0scUJBQXFCLE9BQU8sS0FBSztBQUN2QyxRQUFNLG9CQUFvQixPQUFPLENBQUM7QUFLbEMsUUFBTSxnQkFBZ0IsT0FBTyxDQUFDO0FBRzlCLFFBQU0sZUFBZSxPQUFPLEtBQUs7QUFNakMsUUFBTSxlQUFlLE9BQWlCLENBQUMsQ0FBQztBQUN4QyxRQUFNLHVCQUF1QixPQUFPLEtBQUs7QUFLekMsUUFBTSxnQkFBZ0IsT0FBTyxDQUFDO0FBSzlCLFFBQU0sdUJBQXVCLE9BQU8sQ0FBQztBQUdyQyxRQUFNLG9CQUFvQixPQUFPLEtBQUs7QUFNdEMsUUFBTSxtQkFBbUIsT0FBTyxLQUFLO0FBQ3JDLFFBQU0saUJBQWlCLE9BQWlCLENBQUMsQ0FBQztBQUMxQyxRQUFNLFlBQVksaUJBQWlCO0FBQ25DLFFBQU0sZ0JBQWdCLGlCQUFpQjtBQUd2QyxrQkFBZ0IsVUFBVTtBQUMxQixhQUFXLFVBQVU7QUFFckIsV0FBUyxZQUFZLFVBQTRCO0FBQy9DLGFBQVMsVUFBVTtBQUNuQixhQUFTLFFBQVE7QUFDakIsa0JBQWMsVUFBUTtBQUNwQixVQUFJLEtBQUssZUFBZSxTQUFVLFFBQU87QUFDekMsYUFBTyxFQUFFLEdBQUcsTUFBTSxZQUFZLFNBQVM7QUFBQSxJQUN6QyxDQUFDO0FBQUEsRUFDSDtBQUVBLFFBQU0sVUFBVSxZQUFZLE1BQVk7QUFLdEMsa0JBQWM7QUFDZCxRQUFJLGdCQUFnQixTQUFTO0FBQzNCLG1CQUFhLGdCQUFnQixPQUFPO0FBQ3BDLHNCQUFnQixVQUFVO0FBQUEsSUFDNUI7QUFDQSxRQUFJLGdCQUFnQixTQUFTO0FBQzNCLG1CQUFhLGdCQUFnQixPQUFPO0FBQ3BDLHNCQUFnQixVQUFVO0FBQUEsSUFDNUI7QUFDQSxRQUFJLHVCQUF1QixTQUFTO0FBQ2xDLG1CQUFhLHVCQUF1QixPQUFPO0FBQzNDLDZCQUF1QixVQUFVO0FBQUEsSUFDbkM7QUFDQSxRQUFJLHFCQUFxQixTQUFTO0FBQ2hDLG1CQUFhLHFCQUFxQixPQUFPO0FBQ3pDLDJCQUFxQixVQUFVO0FBQUEsSUFDakM7QUFDQSx1QkFBbUIsVUFBVTtBQUM3QixpQkFBYSxjQUFjO0FBQzNCLFFBQUksY0FBYyxTQUFTO0FBQ3pCLG9CQUFjLFFBQVEsTUFBTTtBQUM1QixvQkFBYyxVQUFVO0FBQUEsSUFDMUI7QUFDQSxtQkFBZSxVQUFVO0FBQ3pCLG1CQUFlLFVBQVUsQ0FBQztBQUMxQixpQkFBYSxVQUFVLENBQUM7QUFDeEIsa0JBQWMsVUFBUTtBQUNwQixVQUFJLEtBQUssMkJBQTJCLE1BQU0sQ0FBQyxLQUFLLGlCQUFpQjtBQUMvRCxlQUFPO0FBQ1QsYUFBTyxFQUFFLEdBQUcsTUFBTSx3QkFBd0IsSUFBSSxrQkFBa0IsQ0FBQyxFQUFFO0FBQUEsSUFDckUsQ0FBQztBQUFBLEVBQ0gsR0FBRyxDQUFDLGFBQWEsQ0FBQztBQUVsQixXQUFTLGtCQUF3QjtBQUMvQjtBQUFBLE1BQ0U7QUFBQSxJQUNGO0FBSUEsa0JBQWM7QUFNZCxVQUFNLGlCQUFpQixrQkFBa0I7QUFDekMsc0JBQWtCLFVBQVU7QUFDNUIsZ0JBQVksWUFBWTtBQUN4QixpQkFBYSxjQUFjO0FBTzNCLFVBQU0sc0JBQXNCLEtBQUssSUFBSSxJQUFJLGtCQUFrQjtBQUMzRCxVQUFNLGlCQUFpQixrQkFBa0I7QUFDekMsVUFBTSxVQUFVLGFBQWE7QUFDN0IsVUFBTSxvQkFBb0IscUJBQXFCO0FBSy9DLFVBQU0sY0FBYyxpQkFBaUI7QUFLckMsVUFBTSxRQUFRLGNBQWM7QUFDNUIsVUFBTSxVQUFVLE1BQU0sY0FBYyxZQUFZO0FBQ2hELG9CQUFnQiwyQkFBMkI7QUFLM0MsVUFBTSxrQkFDSixjQUFjLFVBQ1YsY0FBYyxRQUFRLFNBQVMsSUFDL0IsUUFBUSxRQUFRLE1BQVM7QUFFL0IsU0FBSyxnQkFDRixLQUFLLE9BQU0sbUJBQWtCO0FBQzVCLFVBQUksUUFBUSxFQUFHO0FBT2YsVUFDRSxtQkFBbUIscUJBQ25CLGtCQUNBLGVBQ0EsQ0FBQyxrQkFDRCxzQkFBc0IsS0FDdEIsZUFBZSxRQUFRLEtBQUssTUFBTSxNQUNsQyxDQUFDLHFCQUFxQixXQUN0QixhQUFhLFFBQVEsU0FBUyxHQUM5QjtBQUNBLDZCQUFxQixVQUFVO0FBQy9CO0FBQUEsVUFDRSxrREFBa0QsT0FBTyxhQUFhLFFBQVEsTUFBTSxDQUFDO0FBQUEsUUFDdkY7QUFDQSxpQkFBUyxrQ0FBa0M7QUFBQSxVQUN6QztBQUFBLFVBQ0EsWUFBWSxhQUFhLFFBQVE7QUFBQSxRQUNuQyxDQUFDO0FBQ0QsWUFBSSxjQUFjLFNBQVM7QUFDekIsd0JBQWMsUUFBUSxNQUFNO0FBQzVCLHdCQUFjLFVBQVU7QUFBQSxRQUMxQjtBQUNBLGNBQU0sZUFBZSxhQUFhO0FBQ2xDLGNBQU0sTUFBTSxHQUFHO0FBQ2YsWUFBSSxRQUFRLEVBQUc7QUFDZixjQUFNLE1BQU0sd0JBQXdCLG1CQUFtQixFQUFFLFFBQVE7QUFDakUsY0FBTSxXQUFXLE1BQU0saUJBQWlCO0FBQ3hDLFlBQUksUUFBUSxFQUFHO0FBQ2YsY0FBTSxJQUFJLFFBQWMsYUFBVztBQUNqQyxlQUFLO0FBQUEsWUFDSDtBQUFBLGNBQ0UsY0FBYyxDQUFDLEdBQUcsWUFBWTtBQUM1QixvQkFBSSxRQUFRLEVBQUc7QUFDZixvQkFBSSxXQUFXLEVBQUUsS0FBSyxHQUFHO0FBQ3ZCLHNCQUFJLGVBQWUsUUFBUyxnQkFBZSxXQUFXO0FBQ3RELGlDQUFlLFdBQVcsRUFBRSxLQUFLO0FBQUEsZ0JBQ25DO0FBQUEsY0FDRjtBQUFBLGNBQ0EsU0FBUyxNQUFNLFFBQVE7QUFBQSxjQUN2QixTQUFTLE1BQU07QUFBQSxjQUFDO0FBQUEsY0FDaEIsU0FBUyxVQUFRO0FBQ2Ysb0JBQUksUUFBUSxHQUFHO0FBQ2IsdUJBQUssTUFBTTtBQUNYLDBCQUFRO0FBQ1I7QUFBQSxnQkFDRjtBQUNBLDhCQUFjLFVBQVU7QUFDeEIsc0JBQU0sUUFBUTtBQUNkLG9CQUFJLFFBQWtCLENBQUM7QUFDdkIsb0JBQUksUUFBUTtBQUNaLDJCQUFXLEtBQUssY0FBYztBQUM1QixzQkFBSSxRQUFRLEtBQUssUUFBUSxFQUFFLFNBQVMsT0FBTztBQUN6Qyx5QkFBSyxLQUFLLE9BQU8sT0FBTyxLQUFLLENBQUM7QUFDOUIsNEJBQVEsQ0FBQztBQUNULDRCQUFRO0FBQUEsa0JBQ1Y7QUFDQSx3QkFBTSxLQUFLLENBQUM7QUFDWiwyQkFBUyxFQUFFO0FBQUEsZ0JBQ2I7QUFDQSxvQkFBSSxNQUFNLE9BQVEsTUFBSyxLQUFLLE9BQU8sT0FBTyxLQUFLLENBQUM7QUFDaEQscUJBQUssS0FBSyxTQUFTLEVBQUUsS0FBSyxNQUFNO0FBQzlCLHVCQUFLLE1BQU07QUFDWCwwQkFBUTtBQUFBLGdCQUNWLENBQUM7QUFBQSxjQUNIO0FBQUEsWUFDRjtBQUFBLFlBQ0EsRUFBRSxVQUFVLElBQUksTUFBTSxTQUFTO0FBQUEsVUFDakMsRUFBRTtBQUFBLFlBQ0EsT0FBSztBQUNILGtCQUFJLENBQUMsRUFBRyxTQUFRO0FBQUEsWUFDbEI7QUFBQSxZQUNBLE1BQU0sUUFBUTtBQUFBLFVBQ2hCO0FBQUEsUUFDRixDQUFDO0FBQ0QsWUFBSSxRQUFRLEVBQUc7QUFBQSxNQUNqQjtBQUNBLG1CQUFhLFVBQVUsQ0FBQztBQUV4QixZQUFNLE9BQU8sZUFBZSxRQUFRLEtBQUs7QUFDekM7QUFBQSxRQUNFLHVDQUF1QyxPQUFPLEtBQUssTUFBTSxDQUFDLGFBQWEsS0FBSyxNQUFNLEdBQUcsR0FBRyxDQUFDO0FBQUEsTUFDM0Y7QUFXQSxlQUFTLG1DQUFtQztBQUFBLFFBQzFDLGlCQUFpQixLQUFLLFNBQVM7QUFBQSxRQUMvQjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQSxtQkFBbUIscUJBQXFCO0FBQUEsUUFDeEM7QUFBQSxRQUNBO0FBQUEsTUFDRixDQUFDO0FBRUQsVUFBSSxjQUFjLFNBQVM7QUFDekIsc0JBQWMsUUFBUSxNQUFNO0FBQzVCLHNCQUFjLFVBQVU7QUFBQSxNQUMxQjtBQUVBLFVBQUksTUFBTTtBQUNSO0FBQUEsVUFDRSxpQ0FBaUMsT0FBTyxLQUFLLE1BQU0sQ0FBQztBQUFBLFFBQ3REO0FBQ0Esd0JBQWdCLFFBQVEsSUFBSTtBQUFBLE1BQzlCLFdBQVcsc0JBQXNCLEtBQUssc0JBQXNCLEtBQU07QUFJaEUsWUFBSSxDQUFDLGFBQWE7QUFHaEIscUJBQVc7QUFBQSxZQUNUO0FBQUEsVUFDRjtBQUFBLFFBQ0YsV0FBVyxDQUFDLGdCQUFnQjtBQUUxQixxQkFBVztBQUFBLFlBQ1Q7QUFBQSxVQUNGO0FBQUEsUUFDRixPQUFPO0FBQ0wscUJBQVcsVUFBVSxxQkFBcUI7QUFBQSxRQUM1QztBQUFBLE1BQ0Y7QUFFQSxxQkFBZSxVQUFVO0FBQ3pCLG9CQUFjLFVBQVE7QUFDcEIsWUFBSSxLQUFLLDJCQUEyQixHQUFJLFFBQU87QUFDL0MsZUFBTyxFQUFFLEdBQUcsTUFBTSx3QkFBd0IsR0FBRztBQUFBLE1BQy9DLENBQUM7QUFDRCxrQkFBWSxNQUFNO0FBQUEsSUFDcEIsQ0FBQyxFQUNBLE1BQU0sU0FBTztBQUNaLGVBQVMsUUFBUSxHQUFHLENBQUM7QUFDckIsVUFBSSxDQUFDLFFBQVEsRUFBRyxhQUFZLE1BQU07QUFBQSxJQUNwQyxDQUFDO0FBQUEsRUFDTDtBQVFBLFlBQVUsTUFBTTtBQUNkLFFBQUksV0FBVyxDQUFDLGFBQWE7QUFDM0IsV0FBSyxPQUFPLHNCQUFzQixFQUFFLEtBQUssU0FBTztBQUM5QyxzQkFBYztBQUFBLE1BQ2hCLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRixHQUFHLENBQUMsT0FBTyxDQUFDO0FBTVosV0FBUyx1QkFBNkI7QUFDcEMsUUFBSSxxQkFBcUIsU0FBUztBQUNoQyxtQkFBYSxxQkFBcUIsT0FBTztBQUFBLElBQzNDO0FBQ0EseUJBQXFCLFVBQVU7QUFBQSxNQUM3QixDQUNFQSx1QkFDQUMsV0FDQUMsb0JBQ0FDLHFCQUNBQyxxQkFDRztBQUNILFFBQUFKLHNCQUFxQixVQUFVO0FBQy9CLFlBQUlDLFVBQVMsWUFBWSxlQUFlQyxtQkFBa0IsU0FBUztBQUNqRTtBQUFBLFlBQ0U7QUFBQSxVQUNGO0FBQ0EsVUFBQUMsb0JBQW1CLFVBQVU7QUFDN0IsVUFBQUMsaUJBQWdCO0FBQUEsUUFDbEI7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFNQSxZQUFVLE1BQU07QUFDZCxRQUFJLENBQUMsV0FBVyxDQUFDLFdBQVc7QUFHMUIsVUFBSSxrQkFBa0IsV0FBVyxTQUFTLFlBQVksYUFBYTtBQUNqRTtBQUFBLFVBQ0U7QUFBQSxRQUNGO0FBQ0Esd0JBQWdCO0FBQUEsTUFDbEI7QUFDQTtBQUFBLElBQ0Y7QUFDQSxRQUFJLFlBQVk7QUFDaEIsUUFDRSxhQUNBLFNBQVMsWUFBWSxVQUNyQixDQUFDLG1CQUFtQixTQUNwQjtBQUNBLFlBQU0sc0JBQXNCLE1BQVk7QUFHdEMsWUFDRSxhQUNBLFNBQVMsWUFBWSxVQUNyQixtQkFBbUI7QUFFbkI7QUFDRix3QkFBZ0Isa0RBQWtEO0FBQ2xFLDBCQUFrQixVQUFVO0FBQzVCLGFBQUssc0JBQXNCO0FBQzNCLDZCQUFxQjtBQUFBLE1BQ3ZCO0FBQ0EsVUFBSSxhQUFhO0FBQ2YsNEJBQW9CO0FBQUEsTUFDdEIsT0FBTztBQUdMLGFBQUssT0FBTyxzQkFBc0IsRUFBRSxLQUFLLFNBQU87QUFDOUMsd0JBQWM7QUFDZCw4QkFBb0I7QUFBQSxRQUN0QixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0YsV0FBVyxDQUFDLFdBQVc7QUFHckIseUJBQW1CLFVBQVU7QUFDN0IsVUFBSSxTQUFTLFlBQVksYUFBYTtBQUNwQyx3QkFBZ0IseUNBQXlDO0FBQ3pELHdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUNBLFdBQU8sTUFBTTtBQUNYLGtCQUFZO0FBQUEsSUFDZDtBQUFBLEVBQ0YsR0FBRyxDQUFDLFNBQVMsV0FBVyxTQUFTLENBQUM7QUFHbEMsaUJBQWUsd0JBQXVDO0FBQ3BELFFBQUksQ0FBQyxhQUFhO0FBQ2hCLGlCQUFXO0FBQUEsUUFDVDtBQUFBLE1BQ0Y7QUFDQTtBQUFBLElBQ0Y7QUFTQSxnQkFBWSxXQUFXO0FBQ3ZCLHNCQUFrQixVQUFVLEtBQUssSUFBSTtBQUNyQyxtQkFBZSxVQUFVO0FBQ3pCLGtCQUFjLFVBQVU7QUFDeEIsc0JBQWtCLFVBQVU7QUFDNUIsaUJBQWEsVUFBVTtBQUN2Qix5QkFBcUIsVUFBVTtBQUMvQixpQkFBYSxVQUFVLENBQUM7QUFDeEIseUJBQXFCLFVBQVU7QUFDL0IscUJBQWlCLFVBQVU7QUFDM0IsVUFBTSxRQUFRLEVBQUUsY0FBYztBQUc5QixVQUFNLGVBQWUsTUFBTSxZQUFZLDJCQUEyQjtBQUNsRSxRQUFJLENBQUMsYUFBYSxXQUFXO0FBQzNCO0FBQUEsUUFDRSxvQ0FBb0MsYUFBYSxVQUFVLFNBQVM7QUFBQSxNQUN0RTtBQUNBLGlCQUFXO0FBQUEsUUFDVCxhQUFhLFVBQVU7QUFBQSxNQUN6QjtBQUNBLGNBQVE7QUFDUixrQkFBWSxNQUFNO0FBQ2xCO0FBQUEsSUFDRjtBQUVBO0FBQUEsTUFDRTtBQUFBLElBQ0Y7QUFFQSxrQkFBYyxVQUFRO0FBQ3BCLFVBQUksQ0FBQyxLQUFLLFdBQVksUUFBTztBQUM3QixhQUFPLEVBQUUsR0FBRyxNQUFNLFlBQVksS0FBSztBQUFBLElBQ3JDLENBQUM7QUFLRCxVQUFNLGNBQXdCLENBQUM7QUFJL0I7QUFBQSxNQUNFO0FBQUEsSUFDRjtBQUNBLG1CQUFlLFVBQVUsQ0FBQztBQUMxQixVQUFNLFVBQVUsTUFBTSxZQUFZO0FBQUEsTUFDaEMsQ0FBQyxVQUFrQjtBQUtqQixjQUFNLFFBQVEsT0FBTyxLQUFLLEtBQUs7QUFDL0IsWUFBSSxDQUFDLGtCQUFrQixTQUFTO0FBQzlCLHVCQUFhLFFBQVEsS0FBSyxLQUFLO0FBQUEsUUFDakM7QUFDQSxZQUFJLGNBQWMsU0FBUztBQUN6Qix3QkFBYyxRQUFRLEtBQUssS0FBSztBQUFBLFFBQ2xDLE9BQU87QUFDTCxzQkFBWSxLQUFLLEtBQUs7QUFBQSxRQUN4QjtBQUVBLGNBQU0sUUFBUSxhQUFhLEtBQUs7QUFDaEMsWUFBSSxDQUFDLGtCQUFrQixXQUFXLFFBQVEsTUFBTTtBQUM5Qyw0QkFBa0IsVUFBVTtBQUFBLFFBQzlCO0FBQ0EsY0FBTSxTQUFTLGVBQWU7QUFDOUIsWUFBSSxPQUFPLFVBQVUsa0JBQWtCO0FBQ3JDLGlCQUFPLE1BQU07QUFBQSxRQUNmO0FBQ0EsZUFBTyxLQUFLLEtBQUs7QUFFakIsY0FBTSxXQUFXLENBQUMsR0FBRyxNQUFNO0FBQzNCLHVCQUFlLFVBQVU7QUFDekIsc0JBQWMsV0FBUyxFQUFFLEdBQUcsTUFBTSxrQkFBa0IsU0FBUyxFQUFFO0FBQUEsTUFDakU7QUFBQSxNQUNBLE1BQU07QUFFSixZQUFJLFNBQVMsWUFBWSxhQUFhO0FBQ3BDLDBCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsTUFDRjtBQUFBLE1BQ0EsRUFBRSxrQkFBa0IsTUFBTTtBQUFBLElBQzVCO0FBRUEsUUFBSSxDQUFDLFNBQVM7QUFDWixlQUFTLElBQUksTUFBTSxxREFBZ0QsQ0FBQztBQUNwRSxpQkFBVztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQ0EsY0FBUTtBQUNSLGtCQUFZLE1BQU07QUFDbEIsb0JBQWMsV0FBUztBQUFBLFFBQ3JCLEdBQUc7QUFBQSxRQUNILFlBQVk7QUFBQSxNQUNkLEVBQUU7QUFDRjtBQUFBLElBQ0Y7QUFFQSxVQUFNLGNBQWMsbUJBQW1CLEVBQUU7QUFDekMsVUFBTSxNQUFNLHdCQUF3QixXQUFXO0FBQy9DLGFBQVMsaUNBQWlDO0FBQUEsTUFDeEMsZ0JBQWdCLGtCQUFrQjtBQUFBLE1BQ2xDLGFBQ0UsSUFBSTtBQUFBLE1BQ04sc0JBQXNCLENBQUMsYUFBYSxLQUFLO0FBQUEsTUFDekMscUJBQXFCLElBQUksaUJBQWlCO0FBQUE7QUFBQTtBQUFBLE1BRzFDLHNCQUNFLHdCQUF3QjtBQUFBLElBQzVCLENBQUM7QUFVRCxRQUFJLGdCQUFnQjtBQVFwQixVQUFNLFVBQVUsTUFBTSxjQUFjLFlBQVk7QUFFaEQsVUFBTSxpQkFBaUIsQ0FBQyxhQUE2QjtBQUNuRCxZQUFNLGVBQWUsY0FBYztBQUNuQyxXQUFLO0FBQUEsUUFDSDtBQUFBLFVBQ0UsY0FBYyxDQUFDLE1BQWMsWUFBcUI7QUFDaEQsZ0JBQUksUUFBUSxFQUFHO0FBQ2YsNEJBQWdCO0FBQ2hCO0FBQUEsY0FDRSxpQ0FBaUMsT0FBTyxPQUFPLENBQUMsVUFBVSxJQUFJO0FBQUEsWUFDaEU7QUFDQSxnQkFBSSxXQUFXLEtBQUssS0FBSyxHQUFHO0FBQzFCLGtCQUFJLGtCQUFrQixTQUFTO0FBSTdCO0FBQUEsa0JBQ0UsK0RBQStELEtBQUssS0FBSyxDQUFDO0FBQUEsZ0JBQzVFO0FBQ0EsZ0NBQWdCLFFBQVEsS0FBSyxLQUFLLENBQUM7QUFDbkMscUNBQXFCLFdBQVcsS0FBSyxLQUFLLEVBQUU7QUFDNUMsOEJBQWMsVUFBUTtBQUNwQixzQkFBSSxLQUFLLDJCQUEyQixHQUFJLFFBQU87QUFDL0MseUJBQU8sRUFBRSxHQUFHLE1BQU0sd0JBQXdCLEdBQUc7QUFBQSxnQkFDL0MsQ0FBQztBQUNELCtCQUFlLFVBQVU7QUFFekIscUNBQXFCO0FBQUEsY0FDdkIsT0FBTztBQUVMLG9CQUFJLGVBQWUsU0FBUztBQUMxQixpQ0FBZSxXQUFXO0FBQUEsZ0JBQzVCO0FBQ0EsK0JBQWUsV0FBVyxLQUFLLEtBQUs7QUFDcEM7QUFBQSxrQkFDRSwwQ0FBMEMsZUFBZSxPQUFPO0FBQUEsZ0JBQ2xFO0FBRUEsOEJBQWMsVUFBUTtBQUNwQix3QkFBTSxVQUFVLGVBQWU7QUFDL0Isc0JBQUksS0FBSywyQkFBMkIsUUFBUyxRQUFPO0FBQ3BELHlCQUFPLEVBQUUsR0FBRyxNQUFNLHdCQUF3QixRQUFRO0FBQUEsZ0JBQ3BELENBQUM7QUFBQSxjQUNIO0FBQUEsWUFDRixXQUFXLENBQUMsU0FBUztBQUtuQixrQkFBSSxrQkFBa0IsU0FBUztBQUM3QixxQ0FBcUI7QUFBQSxjQUN2QjtBQUVBLG9CQUFNLFVBQVUsS0FBSyxLQUFLO0FBQzFCLG9CQUFNLFVBQVUsZUFBZSxVQUMzQixlQUFlLFdBQVcsVUFBVSxNQUFNLFVBQVUsTUFDcEQ7QUFDSiw0QkFBYyxVQUFRO0FBQ3BCLG9CQUFJLEtBQUssMkJBQTJCLFFBQVMsUUFBTztBQUNwRCx1QkFBTyxFQUFFLEdBQUcsTUFBTSx3QkFBd0IsUUFBUTtBQUFBLGNBQ3BELENBQUM7QUFBQSxZQUNIO0FBQUEsVUFDRjtBQUFBLFVBQ0EsU0FBUyxDQUFDLE9BQWUsU0FBK0I7QUFDdEQsZ0JBQUksUUFBUSxHQUFHO0FBQ2I7QUFBQSxnQkFDRSxnREFBZ0QsS0FBSztBQUFBLGNBQ3ZEO0FBQ0E7QUFBQSxZQUNGO0FBS0EsZ0JBQUksY0FBYyxZQUFZLGNBQWM7QUFDMUM7QUFBQSxnQkFDRSwyREFBMkQsS0FBSztBQUFBLGNBQ2xFO0FBQ0E7QUFBQSxZQUNGO0FBU0EsZ0JBQ0UsQ0FBQyxNQUFNLFNBQ1AsQ0FBQyxpQkFDRCxTQUFTLFlBQVksYUFDckI7QUFDQSxrQkFBSSxDQUFDLGFBQWEsU0FBUztBQUN6Qiw2QkFBYSxVQUFVO0FBQ3ZCO0FBQUEsa0JBQ0UscUVBQXFFLEtBQUs7QUFBQSxnQkFDNUU7QUFDQSx5QkFBUyxrQ0FBa0MsQ0FBQyxDQUFDO0FBQzdDLDhCQUFjLFVBQVU7QUFDeEIsOEJBQWM7QUFDZDtBQUFBLGtCQUNFLENBQUNILFdBQVVJLGlCQUFnQkMsY0FBYTtBQUN0Qyx3QkFBSUwsVUFBUyxZQUFZLGFBQWE7QUFDcEMsc0JBQUFJLGdCQUFlQyxTQUFRO0FBQUEsb0JBQ3pCO0FBQUEsa0JBQ0Y7QUFBQSxrQkFDQTtBQUFBLGtCQUNBO0FBQUEsa0JBQ0E7QUFBQSxrQkFDQTtBQUFBLGdCQUNGO0FBQ0E7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUdBLDBCQUFjO0FBQ2QscUJBQVMsSUFBSSxNQUFNLCtCQUErQixLQUFLLEVBQUUsQ0FBQztBQUMxRCx1QkFBVyxVQUFVLHVCQUF1QixLQUFLLEVBQUU7QUFFbkQsd0JBQVksU0FBUztBQUNyQiw4QkFBa0IsVUFBVTtBQUM1QixvQkFBUTtBQUNSLHdCQUFZLE1BQU07QUFBQSxVQUNwQjtBQUFBLFVBQ0EsU0FBUyxNQUFNO0FBQUEsVUFFZjtBQUFBLFVBQ0EsU0FBUyxVQUFRO0FBS2YsZ0JBQUksUUFBUSxLQUFLLFNBQVMsWUFBWSxhQUFhO0FBQ2pELG1CQUFLLE1BQU07QUFDWDtBQUFBLFlBQ0Y7QUFJQSwwQkFBYyxVQUFVO0FBQ3hCLDZCQUFpQixVQUFVO0FBUTNCLGtCQUFNLHFCQUFxQjtBQUMzQixnQkFBSSxZQUFZLFNBQVMsR0FBRztBQUMxQixrQkFBSSxhQUFhO0FBQ2pCLHlCQUFXLEtBQUssWUFBYSxlQUFjLEVBQUU7QUFDN0Msb0JBQU0sU0FBcUIsQ0FBQyxDQUFDLENBQUM7QUFDOUIsa0JBQUksYUFBYTtBQUNqQix5QkFBVyxTQUFTLGFBQWE7QUFDL0Isb0JBQ0UsYUFBYSxLQUNiLGFBQWEsTUFBTSxTQUFTLG9CQUM1QjtBQUNBLHlCQUFPLEtBQUssQ0FBQyxDQUFDO0FBQ2QsK0JBQWE7QUFBQSxnQkFDZjtBQUNBLHVCQUFPLE9BQU8sU0FBUyxDQUFDLEVBQUcsS0FBSyxLQUFLO0FBQ3JDLDhCQUFjLE1BQU07QUFBQSxjQUN0QjtBQUNBO0FBQUEsZ0JBQ0UsNkJBQTZCLE9BQU8sWUFBWSxNQUFNLENBQUMscUJBQXFCLE9BQU8sVUFBVSxDQUFDLGNBQWMsT0FBTyxPQUFPLE1BQU0sQ0FBQztBQUFBLGNBQ25JO0FBQ0EseUJBQVcsU0FBUyxRQUFRO0FBQzFCLHFCQUFLLEtBQUssT0FBTyxPQUFPLEtBQUssQ0FBQztBQUFBLGNBQ2hDO0FBQUEsWUFDRjtBQUNBLHdCQUFZLFNBQVM7QUFNckIsZ0JBQUksZ0JBQWdCLFNBQVM7QUFDM0IsMkJBQWEsZ0JBQWdCLE9BQU87QUFBQSxZQUN0QztBQUNBLGdCQUFJLGNBQWMsU0FBUztBQUN6Qiw4QkFBZ0IsVUFBVTtBQUFBLGdCQUN4QixDQUFDQyxrQkFBaUJOLFdBQVVHLHFCQUFvQjtBQUM5QyxrQkFBQUcsaUJBQWdCLFVBQVU7QUFDMUIsc0JBQUlOLFVBQVMsWUFBWSxhQUFhO0FBQ3BDLG9CQUFBRyxpQkFBZ0I7QUFBQSxrQkFDbEI7QUFBQSxnQkFDRjtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLFVBQVUsSUFBSTtBQUFBLFVBQ2Q7QUFBQSxRQUNGO0FBQUEsTUFDRixFQUFFLEtBQUssVUFBUTtBQUNiLFlBQUksUUFBUSxHQUFHO0FBQ2IsZ0JBQU0sTUFBTTtBQUNaO0FBQUEsUUFDRjtBQUNBLFlBQUksQ0FBQyxNQUFNO0FBQ1Q7QUFBQSxZQUNFO0FBQUEsVUFDRjtBQUNBLHFCQUFXO0FBQUEsWUFDVDtBQUFBLFVBQ0Y7QUFFQSxzQkFBWSxTQUFTO0FBQ3JCLGtCQUFRO0FBQ1Isc0JBQVksTUFBTTtBQUNsQjtBQUFBLFFBQ0Y7QUFJQSxZQUFJLFNBQVMsWUFBWSxhQUFhO0FBQ3BDLHNCQUFZLFNBQVM7QUFDckIsZUFBSyxNQUFNO0FBQ1g7QUFBQSxRQUNGO0FBQUEsTUFDRixDQUFDO0FBQUEsSUFDSDtBQUVBLFNBQUssaUJBQWlCLEVBQUUsS0FBSyxjQUFjO0FBQUEsRUFDN0M7QUFXQSxRQUFNLGlCQUFpQjtBQUFBLElBQ3JCLENBQUMsYUFBYSx1QkFBNkI7QUFDekMsVUFBSSxDQUFDLFdBQVcsQ0FBQyx1QkFBdUIsR0FBRztBQUN6QztBQUFBLE1BQ0Y7QUFHQSxVQUFJLGtCQUFrQixTQUFTO0FBRTdCO0FBQUEsTUFDRjtBQUNBLFVBQUksYUFBYSxtQkFBbUIsU0FBUztBQUUzQztBQUFBLFVBQ0U7QUFBQSxRQUNGO0FBQ0EsMkJBQW1CLFVBQVU7QUFDN0IsMEJBQWtCLFVBQVU7QUFDNUIsYUFBSyxzQkFBc0I7QUFDM0IsNkJBQXFCO0FBQ3JCO0FBQUEsTUFDRjtBQUVBLFlBQU0sZUFBZSxTQUFTO0FBRzlCLFVBQUksaUJBQWlCLGNBQWM7QUFDakM7QUFBQSxNQUNGO0FBRUEsVUFBSSxpQkFBaUIsUUFBUTtBQUMzQjtBQUFBLFVBQ0U7QUFBQSxRQUNGO0FBQ0EsYUFBSyxzQkFBc0I7QUFHM0IsK0JBQXVCLFVBQVU7QUFBQSxVQUMvQixDQUNFSSx5QkFDQVAsV0FDQVEsZ0JBQ0FGLGtCQUNBSCxxQkFDRztBQUNILFlBQUFJLHdCQUF1QixVQUFVO0FBQ2pDLGdCQUFJUCxVQUFTLFlBQVksZUFBZSxDQUFDUSxlQUFjLFNBQVM7QUFDOUQ7QUFBQSxnQkFDRTtBQUFBLGNBQ0Y7QUFDQSxjQUFBQSxlQUFjLFVBQVU7QUFDeEIsY0FBQUYsaUJBQWdCLFVBQVU7QUFBQSxnQkFDeEIsQ0FBQ0Esa0JBQWlCTixXQUFVRyxxQkFBb0I7QUFDOUMsa0JBQUFHLGlCQUFnQixVQUFVO0FBQzFCLHNCQUFJTixVQUFTLFlBQVksYUFBYTtBQUNwQyxvQkFBQUcsaUJBQWdCO0FBQUEsa0JBQ2xCO0FBQUEsZ0JBQ0Y7QUFBQSxnQkFDQTtBQUFBLGdCQUNBRztBQUFBLGdCQUNBTjtBQUFBLGdCQUNBRztBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGLFdBQVcsaUJBQWlCLGFBQWE7QUFFdkMsc0JBQWMsVUFBVTtBQUN4QixZQUFJLHVCQUF1QixTQUFTO0FBQ2xDLHVCQUFhLHVCQUF1QixPQUFPO0FBQzNDLGlDQUF1QixVQUFVO0FBQUEsUUFDbkM7QUFBQSxNQUNGO0FBR0EsVUFBSSxnQkFBZ0IsU0FBUztBQUMzQixxQkFBYSxnQkFBZ0IsT0FBTztBQUFBLE1BQ3RDO0FBS0EsVUFBSSxTQUFTLFlBQVksZUFBZSxjQUFjLFNBQVM7QUFDN0Qsd0JBQWdCLFVBQVU7QUFBQSxVQUN4QixDQUFDRyxrQkFBaUJOLFdBQVVHLHFCQUFvQjtBQUM5QyxZQUFBRyxpQkFBZ0IsVUFBVTtBQUMxQixnQkFBSU4sVUFBUyxZQUFZLGFBQWE7QUFDcEMsY0FBQUcsaUJBQWdCO0FBQUEsWUFDbEI7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsQ0FBQyxTQUFTLFdBQVcsT0FBTztBQUFBLEVBQzlCO0FBR0EsWUFBVSxNQUFNO0FBQ2QsUUFBSSxDQUFDLFdBQVcsU0FBUyxZQUFZLFFBQVE7QUFDM0MsY0FBUTtBQUNSLGtCQUFZLE1BQU07QUFBQSxJQUNwQjtBQUNBLFdBQU8sTUFBTTtBQUNYLGNBQVE7QUFBQSxJQUNWO0FBQUEsRUFDRixHQUFHLENBQUMsU0FBUyxPQUFPLENBQUM7QUFFckIsU0FBTztBQUFBLElBQ0w7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUNGO0FBdm5DQSxJQStCTSxzQkFVQSx1QkFtREEsMEJBZ0RGLGFBbUJFLG9CQVdBLG9CQUNPLHlCQUtQLDBCQUdBO0FBbkxOO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNLHVCQUF1QjtBQVU3QixJQUFNLHdCQUFnRDtBQUFBLE1BQ3BELFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULGNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxNQUNSLGVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLG9CQUFLO0FBQUEsTUFDTCxRQUFRO0FBQUEsTUFDUixTQUFTO0FBQUEsTUFDVCxZQUFZO0FBQUEsTUFDWixnQkFBVztBQUFBLE1BQ1gsV0FBVztBQUFBLE1BQ1gsU0FBUztBQUFBLE1BQ1QsVUFBVTtBQUFBLE1BQ1YsUUFBUTtBQUFBLE1BQ1Isb0JBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLHNDQUFRO0FBQUEsTUFDUixnQ0FBTztBQUFBLE1BQ1AsWUFBWTtBQUFBLE1BQ1osb0JBQW9CO0FBQUEsTUFDcEIsUUFBUTtBQUFBLE1BQ1IsU0FBUztBQUFBLE1BQ1QsNENBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULGtCQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixPQUFPO0FBQUEsTUFDUCxZQUFZO0FBQUEsTUFDWixXQUFXO0FBQUEsTUFDWCw4REFBWTtBQUFBLE1BQ1osT0FBTztBQUFBLE1BQ1Asa0RBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLG1CQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxRQUFRO0FBQUEsTUFDUixPQUFPO0FBQUEsTUFDUCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxXQUFXO0FBQUEsTUFDWCxPQUFPO0FBQUEsSUFDVDtBQUlBLElBQU0sMkJBQTJCLG9CQUFJLElBQUk7QUFBQSxNQUN2QztBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGLENBQUM7QUEyQkQsSUFBSSxjQUFrQztBQW1CdEMsSUFBTSxxQkFBcUI7QUFXM0IsSUFBTSxxQkFBcUI7QUFDcEIsSUFBTSwwQkFBMEI7QUFLdkMsSUFBTSwyQkFBMkI7QUFHakMsSUFBTSxtQkFBbUI7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogWyJmb2N1c1NpbGVuY2VUaW1lclJlZiIsICJzdGF0ZVJlZiIsICJmb2N1c1RyaWdnZXJlZFJlZiIsICJzaWxlbmNlVGltZWRPdXRSZWYiLCAiZmluaXNoUmVjb3JkaW5nIiwgImF0dGVtcHRDb25uZWN0IiwgImtleXRlcm1zIiwgInJlbGVhc2VUaW1lclJlZiIsICJyZXBlYXRGYWxsYmFja1RpbWVyUmVmIiwgInNlZW5SZXBlYXRSZWYiXQp9Cg==
