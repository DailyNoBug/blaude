#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  getPlatform,
  init_platform
} from "./chunk-HGPSKCV5.mjs";
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import {
  init_debug,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import "./chunk-OU3SZVVB.mjs";
import "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import {
  init_envUtils,
  isEnvTruthy,
  isRunningOnHomespace
} from "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/services/voice.ts
import { spawn, spawnSync } from "child_process";
import { readFile } from "fs/promises";
function loadAudioNapi() {
  audioNapiPromise ??= (async () => {
    const t0 = Date.now();
    const mod = await import("./audio-capture-napi-ANERWS36.mjs");
    mod.isNativeAudioAvailable();
    audioNapi = mod;
    logForDebugging(`[voice] audio-capture-napi loaded in ${Date.now() - t0}ms`);
    return mod;
  })();
  return audioNapiPromise;
}
function hasCommand(cmd) {
  const result = spawnSync(cmd, ["--version"], {
    stdio: "ignore",
    timeout: 3e3
  });
  return result.error === void 0;
}
function probeArecord() {
  arecordProbe ??= new Promise((resolve) => {
    const child = spawn(
      "arecord",
      [
        "-f",
        "S16_LE",
        "-r",
        String(RECORDING_SAMPLE_RATE),
        "-c",
        String(RECORDING_CHANNELS),
        "-t",
        "raw",
        "/dev/null"
      ],
      { stdio: ["ignore", "ignore", "pipe"] }
    );
    let stderr = "";
    child.stderr?.on("data", (chunk) => {
      stderr += chunk.toString();
    });
    const timer = setTimeout(
      (c, r) => {
        c.kill("SIGTERM");
        r({ ok: true, stderr: "" });
      },
      150,
      child,
      resolve
    );
    child.once("close", (code) => {
      clearTimeout(timer);
      void resolve({ ok: code === 0, stderr: stderr.trim() });
    });
    child.once("error", () => {
      clearTimeout(timer);
      void resolve({ ok: false, stderr: "arecord: command not found" });
    });
  });
  return arecordProbe;
}
function _resetArecordProbeForTesting() {
  arecordProbe = null;
}
function linuxHasAlsaCards() {
  linuxAlsaCardsMemo ??= readFile("/proc/asound/cards", "utf8").then(
    (cards) => {
      const c = cards.trim();
      return c !== "" && !c.includes("no soundcards");
    },
    () => false
  );
  return linuxAlsaCardsMemo;
}
function _resetAlsaCardsForTesting() {
  linuxAlsaCardsMemo = null;
}
function detectPackageManager() {
  if (process.platform === "darwin") {
    if (hasCommand("brew")) {
      return {
        cmd: "brew",
        args: ["install", "sox"],
        displayCommand: "brew install sox"
      };
    }
    return null;
  }
  if (process.platform === "linux") {
    if (hasCommand("apt-get")) {
      return {
        cmd: "sudo",
        args: ["apt-get", "install", "-y", "sox"],
        displayCommand: "sudo apt-get install sox"
      };
    }
    if (hasCommand("dnf")) {
      return {
        cmd: "sudo",
        args: ["dnf", "install", "-y", "sox"],
        displayCommand: "sudo dnf install sox"
      };
    }
    if (hasCommand("pacman")) {
      return {
        cmd: "sudo",
        args: ["pacman", "-S", "--noconfirm", "sox"],
        displayCommand: "sudo pacman -S sox"
      };
    }
  }
  return null;
}
async function checkVoiceDependencies() {
  const napi = await loadAudioNapi();
  if (napi.isNativeAudioAvailable()) {
    return { available: true, missing: [], installCommand: null };
  }
  if (process.platform === "win32") {
    return {
      available: false,
      missing: ["Voice mode requires the native audio module (not loaded)"],
      installCommand: null
    };
  }
  if (process.platform === "linux" && hasCommand("arecord")) {
    return { available: true, missing: [], installCommand: null };
  }
  const missing = [];
  if (!hasCommand("rec")) {
    missing.push("sox (rec command)");
  }
  const pm = missing.length > 0 ? detectPackageManager() : null;
  return {
    available: missing.length === 0,
    missing,
    installCommand: pm?.displayCommand ?? null
  };
}
async function requestMicrophonePermission() {
  const napi = await loadAudioNapi();
  if (!napi.isNativeAudioAvailable()) {
    return true;
  }
  const started = await startRecording(
    (_chunk) => {
    },
    // discard audio data — this is a permission probe only
    () => {
    },
    // ignore silence-detection end signal
    { silenceDetection: false }
  );
  if (started) {
    stopRecording();
    return true;
  }
  return false;
}
async function checkRecordingAvailability() {
  if (isRunningOnHomespace() || isEnvTruthy(process.env.CLAUDE_CODE_REMOTE)) {
    return {
      available: false,
      reason: "Voice mode requires microphone access, but no audio device is available in this environment.\n\nTo use voice mode, run Claude Code locally instead."
    };
  }
  const napi = await loadAudioNapi();
  if (napi.isNativeAudioAvailable()) {
    return { available: true, reason: null };
  }
  if (process.platform === "win32") {
    return {
      available: false,
      reason: "Voice recording requires the native audio module, which could not be loaded."
    };
  }
  const wslNoAudioReason = "Voice mode could not access an audio device in WSL.\n\nWSL2 with WSLg (Windows 11) provides audio via PulseAudio \u2014 if you are on Windows 10 or WSL1, run Claude Code in native Windows instead.";
  if (process.platform === "linux" && hasCommand("arecord")) {
    const probe = await probeArecord();
    if (probe.ok) {
      return { available: true, reason: null };
    }
    if (getPlatform() === "wsl") {
      return { available: false, reason: wslNoAudioReason };
    }
    logForDebugging(`[voice] arecord probe failed: ${probe.stderr}`);
  }
  if (!hasCommand("rec")) {
    if (getPlatform() === "wsl") {
      return { available: false, reason: wslNoAudioReason };
    }
    const pm = detectPackageManager();
    return {
      available: false,
      reason: pm ? `Voice mode requires SoX for audio recording. Install it with: ${pm.displayCommand}` : "Voice mode requires SoX for audio recording. Install SoX manually:\n  macOS: brew install sox\n  Ubuntu/Debian: sudo apt-get install sox\n  Fedora: sudo dnf install sox"
    };
  }
  return { available: true, reason: null };
}
async function startRecording(onData, onEnd, options) {
  logForDebugging(`[voice] startRecording called, platform=${process.platform}`);
  const napi = await loadAudioNapi();
  const nativeAvailable = napi.isNativeAudioAvailable() && (process.platform !== "linux" || await linuxHasAlsaCards());
  const useSilenceDetection = options?.silenceDetection !== false;
  if (nativeAvailable) {
    if (nativeRecordingActive || napi.isNativeRecordingActive()) {
      napi.stopNativeRecording();
      nativeRecordingActive = false;
    }
    const started = napi.startNativeRecording(
      (data) => {
        onData(data);
      },
      () => {
        if (useSilenceDetection) {
          nativeRecordingActive = false;
          onEnd();
        }
      }
    );
    if (started) {
      nativeRecordingActive = true;
      return true;
    }
  }
  if (process.platform === "win32") {
    logForDebugging("[voice] Windows native recording unavailable, no fallback");
    return false;
  }
  if (process.platform === "linux" && hasCommand("arecord") && (await probeArecord()).ok) {
    return startArecordRecording(onData, onEnd);
  }
  return startSoxRecording(onData, onEnd, options);
}
function startSoxRecording(onData, onEnd, options) {
  const useSilenceDetection = options?.silenceDetection !== false;
  const args = [
    "-q",
    // quiet
    "--buffer",
    "1024",
    "-t",
    "raw",
    "-r",
    String(RECORDING_SAMPLE_RATE),
    "-e",
    "signed",
    "-b",
    "16",
    "-c",
    String(RECORDING_CHANNELS),
    "-"
    // stdout
  ];
  if (useSilenceDetection) {
    args.push(
      "silence",
      // start/stop on silence
      "1",
      "0.1",
      SILENCE_THRESHOLD,
      "1",
      SILENCE_DURATION_SECS,
      SILENCE_THRESHOLD
    );
  }
  const child = spawn("rec", args, {
    stdio: ["pipe", "pipe", "pipe"]
  });
  activeRecorder = child;
  child.stdout?.on("data", (chunk) => {
    onData(chunk);
  });
  child.stderr?.on("data", () => {
  });
  child.on("close", () => {
    activeRecorder = null;
    onEnd();
  });
  child.on("error", (err) => {
    logError(err);
    activeRecorder = null;
    onEnd();
  });
  return true;
}
function startArecordRecording(onData, onEnd) {
  const args = [
    "-f",
    "S16_LE",
    // signed 16-bit little-endian
    "-r",
    String(RECORDING_SAMPLE_RATE),
    "-c",
    String(RECORDING_CHANNELS),
    "-t",
    "raw",
    // raw PCM, no WAV header
    "-q",
    // quiet — no progress output
    "-"
    // write to stdout
  ];
  const child = spawn("arecord", args, {
    stdio: ["pipe", "pipe", "pipe"]
  });
  activeRecorder = child;
  child.stdout?.on("data", (chunk) => {
    onData(chunk);
  });
  child.stderr?.on("data", () => {
  });
  child.on("close", () => {
    activeRecorder = null;
    onEnd();
  });
  child.on("error", (err) => {
    logError(err);
    activeRecorder = null;
    onEnd();
  });
  return true;
}
function stopRecording() {
  if (nativeRecordingActive && audioNapi) {
    audioNapi.stopNativeRecording();
    nativeRecordingActive = false;
    return;
  }
  if (activeRecorder) {
    activeRecorder.kill("SIGTERM");
    activeRecorder = null;
  }
}
var audioNapi, audioNapiPromise, RECORDING_SAMPLE_RATE, RECORDING_CHANNELS, SILENCE_DURATION_SECS, SILENCE_THRESHOLD, arecordProbe, linuxAlsaCardsMemo, activeRecorder, nativeRecordingActive;
var init_voice = __esm({
  "src/services/voice.ts"() {
    init_debug();
    init_envUtils();
    init_log();
    init_platform();
    audioNapi = null;
    audioNapiPromise = null;
    RECORDING_SAMPLE_RATE = 16e3;
    RECORDING_CHANNELS = 1;
    SILENCE_DURATION_SECS = "2.0";
    SILENCE_THRESHOLD = "3%";
    arecordProbe = null;
    linuxAlsaCardsMemo = null;
    activeRecorder = null;
    nativeRecordingActive = false;
  }
});
init_voice();
export {
  _resetAlsaCardsForTesting,
  _resetArecordProbeForTesting,
  checkRecordingAvailability,
  checkVoiceDependencies,
  requestMicrophonePermission,
  startRecording,
  stopRecording
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3NlcnZpY2VzL3ZvaWNlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBWb2ljZSBzZXJ2aWNlOiBhdWRpbyByZWNvcmRpbmcgZm9yIHB1c2gtdG8tdGFsayB2b2ljZSBpbnB1dC5cbi8vXG4vLyBSZWNvcmRpbmcgdXNlcyBuYXRpdmUgYXVkaW8gY2FwdHVyZSAoY3BhbCkgb24gbWFjT1MsIExpbnV4LCBhbmQgV2luZG93c1xuLy8gZm9yIGluLXByb2Nlc3MgbWljIGFjY2Vzcy4gRmFsbHMgYmFjayB0byBTb1ggYHJlY2Agb3IgYXJlY29yZCAoQUxTQSlcbi8vIG9uIExpbnV4IGlmIHRoZSBuYXRpdmUgbW9kdWxlIGlzIHVuYXZhaWxhYmxlLlxuXG5pbXBvcnQgeyB0eXBlIENoaWxkUHJvY2Vzcywgc3Bhd24sIHNwYXduU3luYyB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnXG5pbXBvcnQgeyByZWFkRmlsZSB9IGZyb20gJ2ZzL3Byb21pc2VzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi4vdXRpbHMvZGVidWcuanMnXG5pbXBvcnQgeyBpc0VudlRydXRoeSwgaXNSdW5uaW5nT25Ib21lc3BhY2UgfSBmcm9tICcuLi91dGlscy9lbnZVdGlscy5qcydcbmltcG9ydCB7IGxvZ0Vycm9yIH0gZnJvbSAnLi4vdXRpbHMvbG9nLmpzJ1xuaW1wb3J0IHsgZ2V0UGxhdGZvcm0gfSBmcm9tICcuLi91dGlscy9wbGF0Zm9ybS5qcydcblxuLy8gTGF6eS1sb2FkZWQgbmF0aXZlIGF1ZGlvIG1vZHVsZS4gYXVkaW8tY2FwdHVyZS5ub2RlIGxpbmtzIGFnYWluc3Rcbi8vIENvcmVBdWRpby5mcmFtZXdvcmsgKyBBdWRpb1VuaXQuZnJhbWV3b3JrOyBkbG9wZW4gaXMgc3luY2hyb25vdXMgYW5kXG4vLyBibG9ja3MgdGhlIGV2ZW50IGxvb3AgZm9yIH4xcyB3YXJtLCB1cCB0byB+OHMgb24gY29sZCBjb3JlYXVkaW9kXG4vLyAocG9zdC13YWtlLCBwb3N0LWJvb3QpLiBMb2FkIGhhcHBlbnMgb24gZmlyc3Qgdm9pY2Uga2V5cHJlc3MgXHUyMDE0IG5vXG4vLyBwcmVsb2FkLCBiZWNhdXNlIHRoZXJlJ3Mgbm8gd2F5IHRvIG1ha2UgZGxvcGVuIG5vbi1ibG9ja2luZyBhbmQgYVxuLy8gc3RhcnR1cCBmcmVlemUgaXMgd29yc2UgdGhhbiBhIGZpcnN0LXByZXNzIGRlbGF5LlxudHlwZSBBdWRpb05hcGkgPSB0eXBlb2YgaW1wb3J0KCdhdWRpby1jYXB0dXJlLW5hcGknKVxubGV0IGF1ZGlvTmFwaTogQXVkaW9OYXBpIHwgbnVsbCA9IG51bGxcbmxldCBhdWRpb05hcGlQcm9taXNlOiBQcm9taXNlPEF1ZGlvTmFwaT4gfCBudWxsID0gbnVsbFxuXG5mdW5jdGlvbiBsb2FkQXVkaW9OYXBpKCk6IFByb21pc2U8QXVkaW9OYXBpPiB7XG4gIGF1ZGlvTmFwaVByb21pc2UgPz89IChhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdDAgPSBEYXRlLm5vdygpXG4gICAgY29uc3QgbW9kID0gYXdhaXQgaW1wb3J0KCdhdWRpby1jYXB0dXJlLW5hcGknKVxuICAgIC8vIHZlbmRvci9hdWRpby1jYXB0dXJlLXNyYy9pbmRleC50cyBkZWZlcnMgcmVxdWlyZSguLi5ub2RlKSB1bnRpbCB0aGVcbiAgICAvLyBmaXJzdCBmdW5jdGlvbiBjYWxsIFx1MjAxNCB0cmlnZ2VyIGl0IGhlcmUgc28gdGltaW5nIHJlZmxlY3RzIHJlYWwgY29zdC5cbiAgICBtb2QuaXNOYXRpdmVBdWRpb0F2YWlsYWJsZSgpXG4gICAgYXVkaW9OYXBpID0gbW9kXG4gICAgbG9nRm9yRGVidWdnaW5nKGBbdm9pY2VdIGF1ZGlvLWNhcHR1cmUtbmFwaSBsb2FkZWQgaW4gJHtEYXRlLm5vdygpIC0gdDB9bXNgKVxuICAgIHJldHVybiBtb2RcbiAgfSkoKVxuICByZXR1cm4gYXVkaW9OYXBpUHJvbWlzZVxufVxuXG4vLyBcdTI1MDBcdTI1MDBcdTI1MDAgQ29uc3RhbnRzIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG5jb25zdCBSRUNPUkRJTkdfU0FNUExFX1JBVEUgPSAxNjAwMFxuY29uc3QgUkVDT1JESU5HX0NIQU5ORUxTID0gMVxuXG4vLyBTb1ggc2lsZW5jZSBkZXRlY3Rpb246IHN0b3AgYWZ0ZXIgdGhpcyBkdXJhdGlvbiBvZiBzaWxlbmNlXG5jb25zdCBTSUxFTkNFX0RVUkFUSU9OX1NFQ1MgPSAnMi4wJ1xuY29uc3QgU0lMRU5DRV9USFJFU0hPTEQgPSAnMyUnXG5cbi8vIFx1MjUwMFx1MjUwMFx1MjUwMCBEZXBlbmRlbmN5IGNoZWNrIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG5mdW5jdGlvbiBoYXNDb21tYW5kKGNtZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIFNwYXduIHRoZSB0YXJnZXQgZGlyZWN0bHkgaW5zdGVhZCBvZiBgd2hpY2ggY21kYC4gT24gVGVybXV4L0FuZHJvaWRcbiAgLy8gYHdoaWNoYCBpcyBhIHNoZWxsIGJ1aWx0aW4gXHUyMDE0IHRoZSBleHRlcm5hbCBiaW5hcnkgaXMgYWJzZW50IG9yXG4gIC8vIGtlcm5lbC1ibG9ja2VkIChFUEVSTSkgd2hlbiBzcGF3bmVkIGZyb20gTm9kZS4gT25seSByZWFjaGVkIG9uXG4gIC8vIG5vbi1XaW5kb3dzICh3aW4zMiByZXR1cm5zIGVhcmx5IGZyb20gYWxsIGNhbGxlcnMpLCBubyBQQVRIRVhUIGlzc3VlLlxuICAvLyByZXN1bHQuZXJyb3IgaXMgc2V0IGlmZiB0aGUgc3Bhd24gaXRzZWxmIGZhaWxzIChFTk9FTlQvRUFDQ0VTKTsgZXhpdFxuICAvLyBjb2RlIGlzIGlycmVsZXZhbnQgXHUyMDE0IGFuIHVucmVjb2duaXplZCAtLXZlcnNpb24gc3RpbGwgbWVhbnMgY21kIGV4aXN0cy5cbiAgY29uc3QgcmVzdWx0ID0gc3Bhd25TeW5jKGNtZCwgWyctLXZlcnNpb24nXSwge1xuICAgIHN0ZGlvOiAnaWdub3JlJyxcbiAgICB0aW1lb3V0OiAzMDAwLFxuICB9KVxuICByZXR1cm4gcmVzdWx0LmVycm9yID09PSB1bmRlZmluZWRcbn1cblxuLy8gUHJvYmUgd2hldGhlciBhcmVjb3JkIGNhbiBhY3R1YWxseSBvcGVuIGEgY2FwdHVyZSBkZXZpY2UuIGhhc0NvbW1hbmQoKVxuLy8gb25seSBjaGVja3MgUEFUSDsgb24gV1NMMS9XaW4xMC1XU0wyL2hlYWRsZXNzIExpbnV4IHRoZSBiaW5hcnkgZXhpc3RzXG4vLyBidXQgZmFpbHMgYXQgb3BlbigpIGJlY2F1c2UgdGhlcmUgaXMgbm8gQUxTQSBjYXJkIGFuZCBubyBQdWxzZUF1ZGlvXG4vLyBzZXJ2ZXIuIE9uIFdTTDIrV1NMZyAoV2luMTEpLCBQdWxzZUF1ZGlvIHdvcmtzIHZpYSBSRFAgcGlwZXMgYW5kIGFyZWNvcmRcbi8vIHN1Y2NlZWRzLiBXZSBzcGF3biB3aXRoIHRoZSBzYW1lIGFyZ3MgYXMgc3RhcnRBcmVjb3JkUmVjb3JkaW5nKCkgYW5kIHJhY2Vcbi8vIGEgc2hvcnQgdGltZXI6IGlmIHRoZSBwcm9jZXNzIGlzIHN0aWxsIGFsaXZlIGFmdGVyIDE1MG1zIGl0IG9wZW5lZCB0aGVcbi8vIGRldmljZTsgaWYgaXQgZXhpdHMgZWFybHkgdGhlIHN0ZGVyciB0ZWxscyB1cyB3aHkuIE1lbW9pemVkIFx1MjAxNCBhdWRpb1xuLy8gZGV2aWNlIGF2YWlsYWJpbGl0eSBkb2VzIG5vdCBjaGFuZ2UgbWlkLXNlc3Npb24sIGFuZCB0aGlzIGlzIGNhbGxlZCBvblxuLy8gZXZlcnkgdm9pY2Uga2V5cHJlc3MgdmlhIGNoZWNrUmVjb3JkaW5nQXZhaWxhYmlsaXR5KCkuXG50eXBlIEFyZWNvcmRQcm9iZVJlc3VsdCA9IHsgb2s6IGJvb2xlYW47IHN0ZGVycjogc3RyaW5nIH1cbmxldCBhcmVjb3JkUHJvYmU6IFByb21pc2U8QXJlY29yZFByb2JlUmVzdWx0PiB8IG51bGwgPSBudWxsXG5cbmZ1bmN0aW9uIHByb2JlQXJlY29yZCgpOiBQcm9taXNlPEFyZWNvcmRQcm9iZVJlc3VsdD4ge1xuICBhcmVjb3JkUHJvYmUgPz89IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIGNvbnN0IGNoaWxkID0gc3Bhd24oXG4gICAgICAnYXJlY29yZCcsXG4gICAgICBbXG4gICAgICAgICctZicsXG4gICAgICAgICdTMTZfTEUnLFxuICAgICAgICAnLXInLFxuICAgICAgICBTdHJpbmcoUkVDT1JESU5HX1NBTVBMRV9SQVRFKSxcbiAgICAgICAgJy1jJyxcbiAgICAgICAgU3RyaW5nKFJFQ09SRElOR19DSEFOTkVMUyksXG4gICAgICAgICctdCcsXG4gICAgICAgICdyYXcnLFxuICAgICAgICAnL2Rldi9udWxsJyxcbiAgICAgIF0sXG4gICAgICB7IHN0ZGlvOiBbJ2lnbm9yZScsICdpZ25vcmUnLCAncGlwZSddIH0sXG4gICAgKVxuICAgIGxldCBzdGRlcnIgPSAnJ1xuICAgIGNoaWxkLnN0ZGVycj8ub24oJ2RhdGEnLCAoY2h1bms6IEJ1ZmZlcikgPT4ge1xuICAgICAgc3RkZXJyICs9IGNodW5rLnRvU3RyaW5nKClcbiAgICB9KVxuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dChcbiAgICAgIChjOiBDaGlsZFByb2Nlc3MsIHI6ICh2OiBBcmVjb3JkUHJvYmVSZXN1bHQpID0+IHZvaWQpID0+IHtcbiAgICAgICAgYy5raWxsKCdTSUdURVJNJylcbiAgICAgICAgcih7IG9rOiB0cnVlLCBzdGRlcnI6ICcnIH0pXG4gICAgICB9LFxuICAgICAgMTUwLFxuICAgICAgY2hpbGQsXG4gICAgICByZXNvbHZlLFxuICAgIClcbiAgICBjaGlsZC5vbmNlKCdjbG9zZScsIGNvZGUgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgLy8gU0lHVEVSTSBjbG9zZSAoY29kZT1udWxsKSBhZnRlciB0aW1lciBmaXJlZCBpcyBhbHJlYWR5IHJlc29sdmVkLlxuICAgICAgLy8gRWFybHkgY2xvc2Ugd2l0aCBjb2RlPTAgaXMgdW51c3VhbCAoYXJlY29yZCBzaG91bGRuJ3QgZXhpdCBvbiBpdHNcbiAgICAgIC8vIG93bikgYnV0IHRyZWF0IGFzIG9rLlxuICAgICAgdm9pZCByZXNvbHZlKHsgb2s6IGNvZGUgPT09IDAsIHN0ZGVycjogc3RkZXJyLnRyaW0oKSB9KVxuICAgIH0pXG4gICAgY2hpbGQub25jZSgnZXJyb3InLCAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICB2b2lkIHJlc29sdmUoeyBvazogZmFsc2UsIHN0ZGVycjogJ2FyZWNvcmQ6IGNvbW1hbmQgbm90IGZvdW5kJyB9KVxuICAgIH0pXG4gIH0pXG4gIHJldHVybiBhcmVjb3JkUHJvYmVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9yZXNldEFyZWNvcmRQcm9iZUZvclRlc3RpbmcoKTogdm9pZCB7XG4gIGFyZWNvcmRQcm9iZSA9IG51bGxcbn1cblxuLy8gY3BhbCdzIEFMU0EgYmFja2VuZCB3cml0ZXMgdG8gb3VyIHByb2Nlc3Mgc3RkZXJyIHdoZW4gaXQgY2FuJ3QgZmluZCBhbnlcbi8vIHNvdW5kIGNhcmRzIChpdCBydW5zIGluLXByb2Nlc3MgXHUyMDE0IG5vIHN1YnByb2Nlc3MgcGlwZSB0byBjYXB0dXJlIGl0KS4gVGhlXG4vLyBzcGF3biBmYWxsYmFja3MgYmVsb3cgcGlwZSBzdGRlcnIgY29ycmVjdGx5LCBzbyBza2lwIG5hdGl2ZSB3aGVuIEFMU0EgaGFzXG4vLyBub3RoaW5nIHRvIG9wZW4uIE1lbW9pemVkOiBjYXJkIHByZXNlbmNlIGRvZXNuJ3QgY2hhbmdlIG1pZC1zZXNzaW9uLlxubGV0IGxpbnV4QWxzYUNhcmRzTWVtbzogUHJvbWlzZTxib29sZWFuPiB8IG51bGwgPSBudWxsXG5cbmZ1bmN0aW9uIGxpbnV4SGFzQWxzYUNhcmRzKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICBsaW51eEFsc2FDYXJkc01lbW8gPz89IHJlYWRGaWxlKCcvcHJvYy9hc291bmQvY2FyZHMnLCAndXRmOCcpLnRoZW4oXG4gICAgY2FyZHMgPT4ge1xuICAgICAgY29uc3QgYyA9IGNhcmRzLnRyaW0oKVxuICAgICAgcmV0dXJuIGMgIT09ICcnICYmICFjLmluY2x1ZGVzKCdubyBzb3VuZGNhcmRzJylcbiAgICB9LFxuICAgICgpID0+IGZhbHNlLFxuICApXG4gIHJldHVybiBsaW51eEFsc2FDYXJkc01lbW9cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9yZXNldEFsc2FDYXJkc0ZvclRlc3RpbmcoKTogdm9pZCB7XG4gIGxpbnV4QWxzYUNhcmRzTWVtbyA9IG51bGxcbn1cblxudHlwZSBQYWNrYWdlTWFuYWdlckluZm8gPSB7XG4gIGNtZDogc3RyaW5nXG4gIGFyZ3M6IHN0cmluZ1tdXG4gIGRpc3BsYXlDb21tYW5kOiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gZGV0ZWN0UGFja2FnZU1hbmFnZXIoKTogUGFja2FnZU1hbmFnZXJJbmZvIHwgbnVsbCB7XG4gIGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnZGFyd2luJykge1xuICAgIGlmIChoYXNDb21tYW5kKCdicmV3JykpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNtZDogJ2JyZXcnLFxuICAgICAgICBhcmdzOiBbJ2luc3RhbGwnLCAnc294J10sXG4gICAgICAgIGRpc3BsYXlDb21tYW5kOiAnYnJldyBpbnN0YWxsIHNveCcsXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ2xpbnV4Jykge1xuICAgIGlmIChoYXNDb21tYW5kKCdhcHQtZ2V0JykpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNtZDogJ3N1ZG8nLFxuICAgICAgICBhcmdzOiBbJ2FwdC1nZXQnLCAnaW5zdGFsbCcsICcteScsICdzb3gnXSxcbiAgICAgICAgZGlzcGxheUNvbW1hbmQ6ICdzdWRvIGFwdC1nZXQgaW5zdGFsbCBzb3gnLFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGFzQ29tbWFuZCgnZG5mJykpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNtZDogJ3N1ZG8nLFxuICAgICAgICBhcmdzOiBbJ2RuZicsICdpbnN0YWxsJywgJy15JywgJ3NveCddLFxuICAgICAgICBkaXNwbGF5Q29tbWFuZDogJ3N1ZG8gZG5mIGluc3RhbGwgc294JyxcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhhc0NvbW1hbmQoJ3BhY21hbicpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjbWQ6ICdzdWRvJyxcbiAgICAgICAgYXJnczogWydwYWNtYW4nLCAnLVMnLCAnLS1ub2NvbmZpcm0nLCAnc294J10sXG4gICAgICAgIGRpc3BsYXlDb21tYW5kOiAnc3VkbyBwYWNtYW4gLVMgc294JyxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tWb2ljZURlcGVuZGVuY2llcygpOiBQcm9taXNlPHtcbiAgYXZhaWxhYmxlOiBib29sZWFuXG4gIG1pc3Npbmc6IHN0cmluZ1tdXG4gIGluc3RhbGxDb21tYW5kOiBzdHJpbmcgfCBudWxsXG59PiB7XG4gIC8vIE5hdGl2ZSBhdWRpbyBtb2R1bGUgKGNwYWwpIGhhbmRsZXMgZXZlcnl0aGluZyBvbiBtYWNPUywgTGludXgsIGFuZCBXaW5kb3dzXG4gIGNvbnN0IG5hcGkgPSBhd2FpdCBsb2FkQXVkaW9OYXBpKClcbiAgaWYgKG5hcGkuaXNOYXRpdmVBdWRpb0F2YWlsYWJsZSgpKSB7XG4gICAgcmV0dXJuIHsgYXZhaWxhYmxlOiB0cnVlLCBtaXNzaW5nOiBbXSwgaW5zdGFsbENvbW1hbmQ6IG51bGwgfVxuICB9XG5cbiAgLy8gV2luZG93cyBoYXMgbm8gc3VwcG9ydGVkIGZhbGxiYWNrIFx1MjAxNCBuYXRpdmUgbW9kdWxlIGlzIHJlcXVpcmVkXG4gIGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF2YWlsYWJsZTogZmFsc2UsXG4gICAgICBtaXNzaW5nOiBbJ1ZvaWNlIG1vZGUgcmVxdWlyZXMgdGhlIG5hdGl2ZSBhdWRpbyBtb2R1bGUgKG5vdCBsb2FkZWQpJ10sXG4gICAgICBpbnN0YWxsQ29tbWFuZDogbnVsbCxcbiAgICB9XG4gIH1cblxuICAvLyBPbiBMaW51eCwgYXJlY29yZCAoQUxTQSB1dGlscykgaXMgYSB2YWxpZCBmYWxsYmFjayByZWNvcmRpbmcgYmFja2VuZFxuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ2xpbnV4JyAmJiBoYXNDb21tYW5kKCdhcmVjb3JkJykpIHtcbiAgICByZXR1cm4geyBhdmFpbGFibGU6IHRydWUsIG1pc3Npbmc6IFtdLCBpbnN0YWxsQ29tbWFuZDogbnVsbCB9XG4gIH1cblxuICBjb25zdCBtaXNzaW5nOiBzdHJpbmdbXSA9IFtdXG5cbiAgaWYgKCFoYXNDb21tYW5kKCdyZWMnKSkge1xuICAgIG1pc3NpbmcucHVzaCgnc294IChyZWMgY29tbWFuZCknKVxuICB9XG5cbiAgY29uc3QgcG0gPSBtaXNzaW5nLmxlbmd0aCA+IDAgPyBkZXRlY3RQYWNrYWdlTWFuYWdlcigpIDogbnVsbFxuICByZXR1cm4ge1xuICAgIGF2YWlsYWJsZTogbWlzc2luZy5sZW5ndGggPT09IDAsXG4gICAgbWlzc2luZyxcbiAgICBpbnN0YWxsQ29tbWFuZDogcG0/LmRpc3BsYXlDb21tYW5kID8/IG51bGwsXG4gIH1cbn1cblxuLy8gXHUyNTAwXHUyNTAwXHUyNTAwIFJlY29yZGluZyBhdmFpbGFiaWxpdHkgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cbmV4cG9ydCB0eXBlIFJlY29yZGluZ0F2YWlsYWJpbGl0eSA9IHtcbiAgYXZhaWxhYmxlOiBib29sZWFuXG4gIHJlYXNvbjogc3RyaW5nIHwgbnVsbFxufVxuXG4vLyBQcm9iZS1yZWNvcmQgdGhyb3VnaCB0aGUgZnVsbCBmYWxsYmFjayBjaGFpbiAobmF0aXZlIFx1MjE5MiBhcmVjb3JkIFx1MjE5MiBTb1gpXG4vLyB0byB2ZXJpZnkgdGhhdCBhdCBsZWFzdCBvbmUgYmFja2VuZCBjYW4gcmVjb3JkLiBPbiBtYWNPUyB0aGlzIGFsc29cbi8vIHRyaWdnZXJzIHRoZSBUQ0MgcGVybWlzc2lvbiBkaWFsb2cgb24gZmlyc3QgdXNlLiBXZSB0cnVzdCB0aGUgcHJvYmVcbi8vIHJlc3VsdCBvdmVyIHRoZSBUQ0Mgc3RhdHVzIEFQSSwgd2hpY2ggY2FuIGJlIHVucmVsaWFibGUgZm9yIGFkLWhvY1xuLy8gc2lnbmVkIG9yIGNyb3NzLWFyY2hpdGVjdHVyZSBiaW5hcmllcyAoZS5nLiwgeDY0LW9uLWFybTY0KS5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1ZXN0TWljcm9waG9uZVBlcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIGNvbnN0IG5hcGkgPSBhd2FpdCBsb2FkQXVkaW9OYXBpKClcbiAgaWYgKCFuYXBpLmlzTmF0aXZlQXVkaW9BdmFpbGFibGUoKSkge1xuICAgIHJldHVybiB0cnVlIC8vIG5vbi1uYXRpdmUgcGxhdGZvcm1zIHNraXAgdGhpcyBjaGVja1xuICB9XG5cbiAgY29uc3Qgc3RhcnRlZCA9IGF3YWl0IHN0YXJ0UmVjb3JkaW5nKFxuICAgIF9jaHVuayA9PiB7fSwgLy8gZGlzY2FyZCBhdWRpbyBkYXRhIFx1MjAxNCB0aGlzIGlzIGEgcGVybWlzc2lvbiBwcm9iZSBvbmx5XG4gICAgKCkgPT4ge30sIC8vIGlnbm9yZSBzaWxlbmNlLWRldGVjdGlvbiBlbmQgc2lnbmFsXG4gICAgeyBzaWxlbmNlRGV0ZWN0aW9uOiBmYWxzZSB9LFxuICApXG4gIGlmIChzdGFydGVkKSB7XG4gICAgc3RvcFJlY29yZGluZygpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrUmVjb3JkaW5nQXZhaWxhYmlsaXR5KCk6IFByb21pc2U8UmVjb3JkaW5nQXZhaWxhYmlsaXR5PiB7XG4gIC8vIFJlbW90ZSBlbnZpcm9ubWVudHMgaGF2ZSBubyBsb2NhbCBtaWNyb3Bob25lXG4gIGlmIChpc1J1bm5pbmdPbkhvbWVzcGFjZSgpIHx8IGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX1JFTU9URSkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXZhaWxhYmxlOiBmYWxzZSxcbiAgICAgIHJlYXNvbjpcbiAgICAgICAgJ1ZvaWNlIG1vZGUgcmVxdWlyZXMgbWljcm9waG9uZSBhY2Nlc3MsIGJ1dCBubyBhdWRpbyBkZXZpY2UgaXMgYXZhaWxhYmxlIGluIHRoaXMgZW52aXJvbm1lbnQuXFxuXFxuVG8gdXNlIHZvaWNlIG1vZGUsIHJ1biBDbGF1ZGUgQ29kZSBsb2NhbGx5IGluc3RlYWQuJyxcbiAgICB9XG4gIH1cblxuICAvLyBOYXRpdmUgYXVkaW8gbW9kdWxlIChjcGFsKSBoYW5kbGVzIGV2ZXJ5dGhpbmcgb24gbWFjT1MsIExpbnV4LCBhbmQgV2luZG93c1xuICBjb25zdCBuYXBpID0gYXdhaXQgbG9hZEF1ZGlvTmFwaSgpXG4gIGlmIChuYXBpLmlzTmF0aXZlQXVkaW9BdmFpbGFibGUoKSkge1xuICAgIHJldHVybiB7IGF2YWlsYWJsZTogdHJ1ZSwgcmVhc29uOiBudWxsIH1cbiAgfVxuXG4gIC8vIFdpbmRvd3MgaGFzIG5vIHN1cHBvcnRlZCBmYWxsYmFja1xuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJykge1xuICAgIHJldHVybiB7XG4gICAgICBhdmFpbGFibGU6IGZhbHNlLFxuICAgICAgcmVhc29uOlxuICAgICAgICAnVm9pY2UgcmVjb3JkaW5nIHJlcXVpcmVzIHRoZSBuYXRpdmUgYXVkaW8gbW9kdWxlLCB3aGljaCBjb3VsZCBub3QgYmUgbG9hZGVkLicsXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgd3NsTm9BdWRpb1JlYXNvbiA9XG4gICAgJ1ZvaWNlIG1vZGUgY291bGQgbm90IGFjY2VzcyBhbiBhdWRpbyBkZXZpY2UgaW4gV1NMLlxcblxcbldTTDIgd2l0aCBXU0xnIChXaW5kb3dzIDExKSBwcm92aWRlcyBhdWRpbyB2aWEgUHVsc2VBdWRpbyBcdTIwMTQgaWYgeW91IGFyZSBvbiBXaW5kb3dzIDEwIG9yIFdTTDEsIHJ1biBDbGF1ZGUgQ29kZSBpbiBuYXRpdmUgV2luZG93cyBpbnN0ZWFkLidcblxuICAvLyBPbiBMaW51eCAoaW5jbHVkaW5nIFdTTCksIHByb2JlIGFyZWNvcmQuIGhhc0NvbW1hbmQoKSBpcyBpbnN1ZmZpY2llbnQ6XG4gIC8vIHRoZSBiaW5hcnkgY2FuIGV4aXN0IHdoaWxlIHRoZSBkZXZpY2Ugb3BlbigpIGZhaWxzIChXU0wxLCBXaW4xMC1XU0wyLFxuICAvLyBoZWFkbGVzcyBMaW51eCkuIFdTTDIrV1NMZyAoV2luMTEgZGVmYXVsdCkgd29ya3MgdmlhIFB1bHNlQXVkaW8gUkRQXG4gIC8vIHBpcGVzIFx1MjAxNCBjcGFsIGZhaWxzIChubyAvcHJvYy9hc291bmQvY2FyZHMpIGJ1dCBhcmVjb3JkIHN1Y2NlZWRzLlxuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ2xpbnV4JyAmJiBoYXNDb21tYW5kKCdhcmVjb3JkJykpIHtcbiAgICBjb25zdCBwcm9iZSA9IGF3YWl0IHByb2JlQXJlY29yZCgpXG4gICAgaWYgKHByb2JlLm9rKSB7XG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IHRydWUsIHJlYXNvbjogbnVsbCB9XG4gICAgfVxuICAgIGlmIChnZXRQbGF0Zm9ybSgpID09PSAnd3NsJykge1xuICAgICAgcmV0dXJuIHsgYXZhaWxhYmxlOiBmYWxzZSwgcmVhc29uOiB3c2xOb0F1ZGlvUmVhc29uIH1cbiAgICB9XG4gICAgbG9nRm9yRGVidWdnaW5nKGBbdm9pY2VdIGFyZWNvcmQgcHJvYmUgZmFpbGVkOiAke3Byb2JlLnN0ZGVycn1gKVxuICAgIC8vIGZhbGwgdGhyb3VnaCB0byBTb1hcbiAgfVxuXG4gIC8vIEZhbGxiYWNrOiBjaGVjayBmb3IgU29YXG4gIGlmICghaGFzQ29tbWFuZCgncmVjJykpIHtcbiAgICAvLyBXU0wgd2l0aG91dCBhcmVjb3JkIEFORCB3aXRob3V0IFNvWDogdGhlIGdlbmVyaWMgXCJpbnN0YWxsIFNvWFwiXG4gICAgLy8gaGludCBiZWxvdyBpcyBtaXNsZWFkaW5nIG9uIFdTTDEvV2luMTAgKG5vIGF1ZGlvIGRldmljZXMgYXQgYWxsKSxcbiAgICAvLyBidXQgY29ycmVjdCBvbiBXU0wyK1dTTGcgKFNvWCB3b3JrcyB2aWEgUHVsc2VBdWRpbykuIFNpbmNlIHdlIGNhbid0XG4gICAgLy8gZGlzdGluZ3Vpc2ggV1NMZy12cy1ub3Qgd2l0aG91dCBhIGJhY2tlbmQgdG8gcHJvYmUsIHNob3cgdGhlIFdTTGdcbiAgICAvLyBndWlkYW5jZSBcdTIwMTQgaXQgcG9pbnRzIFdTTDEgdXNlcnMgYXQgbmF0aXZlIFdpbmRvd3MgQU5EIHRlbGxzIFdTTGdcbiAgICAvLyB1c2VycyB0aGVpciBzZXR1cCBzaG91bGQgd29yayAodGhleSBjYW4gaW5zdGFsbCBzb3ggb3IgYWxzYS11dGlscykuXG4gICAgLy8gS25vd24gZ2FwOiBXU0wgd2l0aCBTb1ggYnV0IE5PIGFyZWNvcmQgc2tpcHMgYm90aCB0aGlzIGJyYW5jaCBhbmRcbiAgICAvLyB0aGUgcHJvYmUgYWJvdmUgXHUyMDE0IGhhc0NvbW1hbmQoJ3JlYycpIGxpZXMgdGhlIHNhbWUgd2F5LiBXZSBvcHRpbWlzdGljYWxseVxuICAgIC8vIHRydXN0IGl0IChXU0xnK1NvWCB3b3VsZCB3b3JrKSByYXRoZXIgdGhhbiBwcm9iZVNveCgpIGZvciBhIG5lYXItemVyb1xuICAgIC8vIHBvcHVsYXRpb24gKFdTTDEgXHUwMEQ3IG1pbmltYWwgZGlzdHJvIFx1MDBENyBTb1gtYnV0LW5vdC1hbHNhLXV0aWxzKS5cbiAgICBpZiAoZ2V0UGxhdGZvcm0oKSA9PT0gJ3dzbCcpIHtcbiAgICAgIHJldHVybiB7IGF2YWlsYWJsZTogZmFsc2UsIHJlYXNvbjogd3NsTm9BdWRpb1JlYXNvbiB9XG4gICAgfVxuICAgIGNvbnN0IHBtID0gZGV0ZWN0UGFja2FnZU1hbmFnZXIoKVxuICAgIHJldHVybiB7XG4gICAgICBhdmFpbGFibGU6IGZhbHNlLFxuICAgICAgcmVhc29uOiBwbVxuICAgICAgICA/IGBWb2ljZSBtb2RlIHJlcXVpcmVzIFNvWCBmb3IgYXVkaW8gcmVjb3JkaW5nLiBJbnN0YWxsIGl0IHdpdGg6ICR7cG0uZGlzcGxheUNvbW1hbmR9YFxuICAgICAgICA6ICdWb2ljZSBtb2RlIHJlcXVpcmVzIFNvWCBmb3IgYXVkaW8gcmVjb3JkaW5nLiBJbnN0YWxsIFNvWCBtYW51YWxseTpcXG4gIG1hY09TOiBicmV3IGluc3RhbGwgc294XFxuICBVYnVudHUvRGViaWFuOiBzdWRvIGFwdC1nZXQgaW5zdGFsbCBzb3hcXG4gIEZlZG9yYTogc3VkbyBkbmYgaW5zdGFsbCBzb3gnLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGF2YWlsYWJsZTogdHJ1ZSwgcmVhc29uOiBudWxsIH1cbn1cblxuLy8gXHUyNTAwXHUyNTAwXHUyNTAwIFJlY29yZGluZyAobmF0aXZlIGF1ZGlvIG9uIG1hY09TL0xpbnV4L1dpbmRvd3MsIFNvWC9hcmVjb3JkIGZhbGxiYWNrIG9uIExpbnV4KSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxubGV0IGFjdGl2ZVJlY29yZGVyOiBDaGlsZFByb2Nlc3MgfCBudWxsID0gbnVsbFxubGV0IG5hdGl2ZVJlY29yZGluZ0FjdGl2ZSA9IGZhbHNlXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdGFydFJlY29yZGluZyhcbiAgb25EYXRhOiAoY2h1bms6IEJ1ZmZlcikgPT4gdm9pZCxcbiAgb25FbmQ6ICgpID0+IHZvaWQsXG4gIG9wdGlvbnM/OiB7IHNpbGVuY2VEZXRlY3Rpb24/OiBib29sZWFuIH0sXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgbG9nRm9yRGVidWdnaW5nKGBbdm9pY2VdIHN0YXJ0UmVjb3JkaW5nIGNhbGxlZCwgcGxhdGZvcm09JHtwcm9jZXNzLnBsYXRmb3JtfWApXG5cbiAgLy8gVHJ5IG5hdGl2ZSBhdWRpbyBtb2R1bGUgZmlyc3QgKG1hY09TLCBMaW51eCwgV2luZG93cyB2aWEgY3BhbClcbiAgY29uc3QgbmFwaSA9IGF3YWl0IGxvYWRBdWRpb05hcGkoKVxuICBjb25zdCBuYXRpdmVBdmFpbGFibGUgPVxuICAgIG5hcGkuaXNOYXRpdmVBdWRpb0F2YWlsYWJsZSgpICYmXG4gICAgKHByb2Nlc3MucGxhdGZvcm0gIT09ICdsaW51eCcgfHwgKGF3YWl0IGxpbnV4SGFzQWxzYUNhcmRzKCkpKVxuICBjb25zdCB1c2VTaWxlbmNlRGV0ZWN0aW9uID0gb3B0aW9ucz8uc2lsZW5jZURldGVjdGlvbiAhPT0gZmFsc2VcbiAgaWYgKG5hdGl2ZUF2YWlsYWJsZSkge1xuICAgIC8vIEVuc3VyZSBhbnkgcHJldmlvdXMgcmVjb3JkaW5nIGlzIGZ1bGx5IHN0b3BwZWRcbiAgICBpZiAobmF0aXZlUmVjb3JkaW5nQWN0aXZlIHx8IG5hcGkuaXNOYXRpdmVSZWNvcmRpbmdBY3RpdmUoKSkge1xuICAgICAgbmFwaS5zdG9wTmF0aXZlUmVjb3JkaW5nKClcbiAgICAgIG5hdGl2ZVJlY29yZGluZ0FjdGl2ZSA9IGZhbHNlXG4gICAgfVxuICAgIGNvbnN0IHN0YXJ0ZWQgPSBuYXBpLnN0YXJ0TmF0aXZlUmVjb3JkaW5nKFxuICAgICAgKGRhdGE6IEJ1ZmZlcikgPT4ge1xuICAgICAgICBvbkRhdGEoZGF0YSlcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGlmICh1c2VTaWxlbmNlRGV0ZWN0aW9uKSB7XG4gICAgICAgICAgbmF0aXZlUmVjb3JkaW5nQWN0aXZlID0gZmFsc2VcbiAgICAgICAgICBvbkVuZCgpXG4gICAgICAgIH1cbiAgICAgICAgLy8gSW4gcHVzaC10by10YWxrIG1vZGUsIGlnbm9yZSB0aGUgbmF0aXZlIG1vZHVsZSdzIHNpbGVuY2UtdHJpZ2dlcmVkXG4gICAgICAgIC8vIG9uRW5kLiAgUmVjb3JkaW5nIGNvbnRpbnVlcyB1bnRpbCB0aGUgY2FsbGVyIGV4cGxpY2l0bHkgY2FsbHNcbiAgICAgICAgLy8gc3RvcFJlY29yZGluZygpIChlLmcuIHdoZW4gdGhlIHVzZXIgcHJlc3NlcyBDdHJsK1gpLlxuICAgICAgfSxcbiAgICApXG4gICAgaWYgKHN0YXJ0ZWQpIHtcbiAgICAgIG5hdGl2ZVJlY29yZGluZ0FjdGl2ZSA9IHRydWVcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIC8vIE5hdGl2ZSByZWNvcmRpbmcgZmFpbGVkIFx1MjAxNCBmYWxsIHRocm91Z2ggdG8gcGxhdGZvcm0gZmFsbGJhY2tzXG4gIH1cblxuICAvLyBXaW5kb3dzIGhhcyBubyBzdXBwb3J0ZWQgZmFsbGJhY2tcbiAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoJ1t2b2ljZV0gV2luZG93cyBuYXRpdmUgcmVjb3JkaW5nIHVuYXZhaWxhYmxlLCBubyBmYWxsYmFjaycpXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBPbiBMaW51eCwgdHJ5IGFyZWNvcmQgKEFMU0EgdXRpbHMpIGJlZm9yZSBTb1guIENvbnN1bHQgdGhlIHByb2JlIHNvXG4gIC8vIGJhY2tlbmQgc2VsZWN0aW9uIG1hdGNoZXMgY2hlY2tSZWNvcmRpbmdBdmFpbGFiaWxpdHkoKSBcdTIwMTQgb3RoZXJ3aXNlXG4gIC8vIG9uIGhlYWRsZXNzIExpbnV4IHdpdGggYm90aCBhbHNhLXV0aWxzIGFuZCBTb1gsIHRoZSBhdmFpbGFiaWxpdHlcbiAgLy8gY2hlY2sgZmFsbHMgdGhyb3VnaCB0byBTb1ggKHByb2JlLm9rPWZhbHNlLCBub3QgV1NMKSBidXQgdGhpcyBwYXRoXG4gIC8vIHdvdWxkIHN0aWxsIHBpY2sgYnJva2VuIGFyZWNvcmQuIFByb2JlIGlzIG1lbW9pemVkOyB6ZXJvIGxhdGVuY3kuXG4gIGlmIChcbiAgICBwcm9jZXNzLnBsYXRmb3JtID09PSAnbGludXgnICYmXG4gICAgaGFzQ29tbWFuZCgnYXJlY29yZCcpICYmXG4gICAgKGF3YWl0IHByb2JlQXJlY29yZCgpKS5va1xuICApIHtcbiAgICByZXR1cm4gc3RhcnRBcmVjb3JkUmVjb3JkaW5nKG9uRGF0YSwgb25FbmQpXG4gIH1cblxuICAvLyBGYWxsYmFjazogU29YIHJlYyAoTGludXgsIG9yIG1hY09TIGlmIG5hdGl2ZSBtb2R1bGUgdW5hdmFpbGFibGUpXG4gIHJldHVybiBzdGFydFNveFJlY29yZGluZyhvbkRhdGEsIG9uRW5kLCBvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBzdGFydFNveFJlY29yZGluZyhcbiAgb25EYXRhOiAoY2h1bms6IEJ1ZmZlcikgPT4gdm9pZCxcbiAgb25FbmQ6ICgpID0+IHZvaWQsXG4gIG9wdGlvbnM/OiB7IHNpbGVuY2VEZXRlY3Rpb24/OiBib29sZWFuIH0sXG4pOiBib29sZWFuIHtcbiAgY29uc3QgdXNlU2lsZW5jZURldGVjdGlvbiA9IG9wdGlvbnM/LnNpbGVuY2VEZXRlY3Rpb24gIT09IGZhbHNlXG5cbiAgLy8gUmVjb3JkIHJhdyBQQ006IDE2IGtIeiwgMTYtYml0IHNpZ25lZCwgbW9ubywgdG8gc3Rkb3V0LlxuICAvLyAtLWJ1ZmZlciAxMDI0IGZvcmNlcyBTb1ggdG8gZmx1c2ggYXVkaW8gaW4gc21hbGwgY2h1bmtzIGluc3RlYWQgb2ZcbiAgLy8gYWNjdW11bGF0aW5nIGRhdGEgaW4gaXRzIGludGVybmFsIGJ1ZmZlci4gV2l0aG91dCB0aGlzLCBTb1ggbWF5IGJ1ZmZlclxuICAvLyBzZXZlcmFsIHNlY29uZHMgb2YgYXVkaW8gYmVmb3JlIHdyaXRpbmcgYW55dGhpbmcgdG8gc3Rkb3V0IHdoZW4gcGlwZWQsXG4gIC8vIGNhdXNpbmcgemVybyBkYXRhIGZsb3cgdW50aWwgdGhlIHByb2Nlc3MgZXhpdHMuXG4gIGNvbnN0IGFyZ3MgPSBbXG4gICAgJy1xJywgLy8gcXVpZXRcbiAgICAnLS1idWZmZXInLFxuICAgICcxMDI0JyxcbiAgICAnLXQnLFxuICAgICdyYXcnLFxuICAgICctcicsXG4gICAgU3RyaW5nKFJFQ09SRElOR19TQU1QTEVfUkFURSksXG4gICAgJy1lJyxcbiAgICAnc2lnbmVkJyxcbiAgICAnLWInLFxuICAgICcxNicsXG4gICAgJy1jJyxcbiAgICBTdHJpbmcoUkVDT1JESU5HX0NIQU5ORUxTKSxcbiAgICAnLScsIC8vIHN0ZG91dFxuICBdXG5cbiAgLy8gQWRkIHNpbGVuY2UgZGV0ZWN0aW9uIGZpbHRlciAoYXV0by1zdG9wIG9uIHNpbGVuY2UpLlxuICAvLyBPbWl0IGZvciBwdXNoLXRvLXRhbGsgd2hlcmUgdGhlIHVzZXIgbWFudWFsbHkgY29udHJvbHMgc3RhcnQvc3RvcC5cbiAgaWYgKHVzZVNpbGVuY2VEZXRlY3Rpb24pIHtcbiAgICBhcmdzLnB1c2goXG4gICAgICAnc2lsZW5jZScsIC8vIHN0YXJ0L3N0b3Agb24gc2lsZW5jZVxuICAgICAgJzEnLFxuICAgICAgJzAuMScsXG4gICAgICBTSUxFTkNFX1RIUkVTSE9MRCxcbiAgICAgICcxJyxcbiAgICAgIFNJTEVOQ0VfRFVSQVRJT05fU0VDUyxcbiAgICAgIFNJTEVOQ0VfVEhSRVNIT0xELFxuICAgIClcbiAgfVxuXG4gIGNvbnN0IGNoaWxkID0gc3Bhd24oJ3JlYycsIGFyZ3MsIHtcbiAgICBzdGRpbzogWydwaXBlJywgJ3BpcGUnLCAncGlwZSddLFxuICB9KVxuXG4gIGFjdGl2ZVJlY29yZGVyID0gY2hpbGRcblxuICBjaGlsZC5zdGRvdXQ/Lm9uKCdkYXRhJywgKGNodW5rOiBCdWZmZXIpID0+IHtcbiAgICBvbkRhdGEoY2h1bmspXG4gIH0pXG5cbiAgLy8gQ29uc3VtZSBzdGRlcnIgdG8gcHJldmVudCBiYWNrcHJlc3N1cmVcbiAgY2hpbGQuc3RkZXJyPy5vbignZGF0YScsICgpID0+IHt9KVxuXG4gIGNoaWxkLm9uKCdjbG9zZScsICgpID0+IHtcbiAgICBhY3RpdmVSZWNvcmRlciA9IG51bGxcbiAgICBvbkVuZCgpXG4gIH0pXG5cbiAgY2hpbGQub24oJ2Vycm9yJywgZXJyID0+IHtcbiAgICBsb2dFcnJvcihlcnIpXG4gICAgYWN0aXZlUmVjb3JkZXIgPSBudWxsXG4gICAgb25FbmQoKVxuICB9KVxuXG4gIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIHN0YXJ0QXJlY29yZFJlY29yZGluZyhcbiAgb25EYXRhOiAoY2h1bms6IEJ1ZmZlcikgPT4gdm9pZCxcbiAgb25FbmQ6ICgpID0+IHZvaWQsXG4pOiBib29sZWFuIHtcbiAgLy8gUmVjb3JkIHJhdyBQQ006IDE2IGtIeiwgMTYtYml0IHNpZ25lZCBsaXR0bGUtZW5kaWFuLCBtb25vLCB0byBzdGRvdXQuXG4gIC8vIGFyZWNvcmQgZG9lcyBub3Qgc3VwcG9ydCBidWlsdC1pbiBzaWxlbmNlIGRldGVjdGlvbiwgc28gdGhpcyBiYWNrZW5kXG4gIC8vIGlzIGJlc3Qgc3VpdGVkIGZvciBwdXNoLXRvLXRhbGsgKHNpbGVuY2VEZXRlY3Rpb246IGZhbHNlKS5cbiAgY29uc3QgYXJncyA9IFtcbiAgICAnLWYnLFxuICAgICdTMTZfTEUnLCAvLyBzaWduZWQgMTYtYml0IGxpdHRsZS1lbmRpYW5cbiAgICAnLXInLFxuICAgIFN0cmluZyhSRUNPUkRJTkdfU0FNUExFX1JBVEUpLFxuICAgICctYycsXG4gICAgU3RyaW5nKFJFQ09SRElOR19DSEFOTkVMUyksXG4gICAgJy10JyxcbiAgICAncmF3JywgLy8gcmF3IFBDTSwgbm8gV0FWIGhlYWRlclxuICAgICctcScsIC8vIHF1aWV0IFx1MjAxNCBubyBwcm9ncmVzcyBvdXRwdXRcbiAgICAnLScsIC8vIHdyaXRlIHRvIHN0ZG91dFxuICBdXG5cbiAgY29uc3QgY2hpbGQgPSBzcGF3bignYXJlY29yZCcsIGFyZ3MsIHtcbiAgICBzdGRpbzogWydwaXBlJywgJ3BpcGUnLCAncGlwZSddLFxuICB9KVxuXG4gIGFjdGl2ZVJlY29yZGVyID0gY2hpbGRcblxuICBjaGlsZC5zdGRvdXQ/Lm9uKCdkYXRhJywgKGNodW5rOiBCdWZmZXIpID0+IHtcbiAgICBvbkRhdGEoY2h1bmspXG4gIH0pXG5cbiAgLy8gQ29uc3VtZSBzdGRlcnIgdG8gcHJldmVudCBiYWNrcHJlc3N1cmVcbiAgY2hpbGQuc3RkZXJyPy5vbignZGF0YScsICgpID0+IHt9KVxuXG4gIGNoaWxkLm9uKCdjbG9zZScsICgpID0+IHtcbiAgICBhY3RpdmVSZWNvcmRlciA9IG51bGxcbiAgICBvbkVuZCgpXG4gIH0pXG5cbiAgY2hpbGQub24oJ2Vycm9yJywgZXJyID0+IHtcbiAgICBsb2dFcnJvcihlcnIpXG4gICAgYWN0aXZlUmVjb3JkZXIgPSBudWxsXG4gICAgb25FbmQoKVxuICB9KVxuXG4gIHJldHVybiB0cnVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9wUmVjb3JkaW5nKCk6IHZvaWQge1xuICBpZiAobmF0aXZlUmVjb3JkaW5nQWN0aXZlICYmIGF1ZGlvTmFwaSkge1xuICAgIGF1ZGlvTmFwaS5zdG9wTmF0aXZlUmVjb3JkaW5nKClcbiAgICBuYXRpdmVSZWNvcmRpbmdBY3RpdmUgPSBmYWxzZVxuICAgIHJldHVyblxuICB9XG4gIGlmIChhY3RpdmVSZWNvcmRlcikge1xuICAgIGFjdGl2ZVJlY29yZGVyLmtpbGwoJ1NJR1RFUk0nKVxuICAgIGFjdGl2ZVJlY29yZGVyID0gbnVsbFxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLFNBQTRCLE9BQU8saUJBQWlCO0FBQ3BELFNBQVMsZ0JBQWdCO0FBZ0J6QixTQUFTLGdCQUFvQztBQUMzQyx3QkFBc0IsWUFBWTtBQUNoQyxVQUFNLEtBQUssS0FBSyxJQUFJO0FBQ3BCLFVBQU0sTUFBTSxNQUFNLE9BQU8sbUNBQW9CO0FBRzdDLFFBQUksdUJBQXVCO0FBQzNCLGdCQUFZO0FBQ1osb0JBQWdCLHdDQUF3QyxLQUFLLElBQUksSUFBSSxFQUFFLElBQUk7QUFDM0UsV0FBTztBQUFBLEVBQ1QsR0FBRztBQUNILFNBQU87QUFDVDtBQWFBLFNBQVMsV0FBVyxLQUFzQjtBQU94QyxRQUFNLFNBQVMsVUFBVSxLQUFLLENBQUMsV0FBVyxHQUFHO0FBQUEsSUFDM0MsT0FBTztBQUFBLElBQ1AsU0FBUztBQUFBLEVBQ1gsQ0FBQztBQUNELFNBQU8sT0FBTyxVQUFVO0FBQzFCO0FBY0EsU0FBUyxlQUE0QztBQUNuRCxtQkFBaUIsSUFBSSxRQUFRLGFBQVc7QUFDdEMsVUFBTSxRQUFRO0FBQUEsTUFDWjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBLE9BQU8scUJBQXFCO0FBQUEsUUFDNUI7QUFBQSxRQUNBLE9BQU8sa0JBQWtCO0FBQUEsUUFDekI7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEVBQUUsT0FBTyxDQUFDLFVBQVUsVUFBVSxNQUFNLEVBQUU7QUFBQSxJQUN4QztBQUNBLFFBQUksU0FBUztBQUNiLFVBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxVQUFrQjtBQUMxQyxnQkFBVSxNQUFNLFNBQVM7QUFBQSxJQUMzQixDQUFDO0FBQ0QsVUFBTSxRQUFRO0FBQUEsTUFDWixDQUFDLEdBQWlCLE1BQXVDO0FBQ3ZELFVBQUUsS0FBSyxTQUFTO0FBQ2hCLFVBQUUsRUFBRSxJQUFJLE1BQU0sUUFBUSxHQUFHLENBQUM7QUFBQSxNQUM1QjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFDQSxVQUFNLEtBQUssU0FBUyxVQUFRO0FBQzFCLG1CQUFhLEtBQUs7QUFJbEIsV0FBSyxRQUFRLEVBQUUsSUFBSSxTQUFTLEdBQUcsUUFBUSxPQUFPLEtBQUssRUFBRSxDQUFDO0FBQUEsSUFDeEQsQ0FBQztBQUNELFVBQU0sS0FBSyxTQUFTLE1BQU07QUFDeEIsbUJBQWEsS0FBSztBQUNsQixXQUFLLFFBQVEsRUFBRSxJQUFJLE9BQU8sUUFBUSw2QkFBNkIsQ0FBQztBQUFBLElBQ2xFLENBQUM7QUFBQSxFQUNILENBQUM7QUFDRCxTQUFPO0FBQ1Q7QUFFTyxTQUFTLCtCQUFxQztBQUNuRCxpQkFBZTtBQUNqQjtBQVFBLFNBQVMsb0JBQXNDO0FBQzdDLHlCQUF1QixTQUFTLHNCQUFzQixNQUFNLEVBQUU7QUFBQSxJQUM1RCxXQUFTO0FBQ1AsWUFBTSxJQUFJLE1BQU0sS0FBSztBQUNyQixhQUFPLE1BQU0sTUFBTSxDQUFDLEVBQUUsU0FBUyxlQUFlO0FBQUEsSUFDaEQ7QUFBQSxJQUNBLE1BQU07QUFBQSxFQUNSO0FBQ0EsU0FBTztBQUNUO0FBRU8sU0FBUyw0QkFBa0M7QUFDaEQsdUJBQXFCO0FBQ3ZCO0FBUUEsU0FBUyx1QkFBa0Q7QUFDekQsTUFBSSxRQUFRLGFBQWEsVUFBVTtBQUNqQyxRQUFJLFdBQVcsTUFBTSxHQUFHO0FBQ3RCLGFBQU87QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLE1BQU0sQ0FBQyxXQUFXLEtBQUs7QUFBQSxRQUN2QixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQUVBLE1BQUksUUFBUSxhQUFhLFNBQVM7QUFDaEMsUUFBSSxXQUFXLFNBQVMsR0FBRztBQUN6QixhQUFPO0FBQUEsUUFDTCxLQUFLO0FBQUEsUUFDTCxNQUFNLENBQUMsV0FBVyxXQUFXLE1BQU0sS0FBSztBQUFBLFFBQ3hDLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUNBLFFBQUksV0FBVyxLQUFLLEdBQUc7QUFDckIsYUFBTztBQUFBLFFBQ0wsS0FBSztBQUFBLFFBQ0wsTUFBTSxDQUFDLE9BQU8sV0FBVyxNQUFNLEtBQUs7QUFBQSxRQUNwQyxnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFDQSxRQUFJLFdBQVcsUUFBUSxHQUFHO0FBQ3hCLGFBQU87QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLE1BQU0sQ0FBQyxVQUFVLE1BQU0sZUFBZSxLQUFLO0FBQUEsUUFDM0MsZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUVBLFNBQU87QUFDVDtBQUVBLGVBQXNCLHlCQUluQjtBQUVELFFBQU0sT0FBTyxNQUFNLGNBQWM7QUFDakMsTUFBSSxLQUFLLHVCQUF1QixHQUFHO0FBQ2pDLFdBQU8sRUFBRSxXQUFXLE1BQU0sU0FBUyxDQUFDLEdBQUcsZ0JBQWdCLEtBQUs7QUFBQSxFQUM5RDtBQUdBLE1BQUksUUFBUSxhQUFhLFNBQVM7QUFDaEMsV0FBTztBQUFBLE1BQ0wsV0FBVztBQUFBLE1BQ1gsU0FBUyxDQUFDLDBEQUEwRDtBQUFBLE1BQ3BFLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsRUFDRjtBQUdBLE1BQUksUUFBUSxhQUFhLFdBQVcsV0FBVyxTQUFTLEdBQUc7QUFDekQsV0FBTyxFQUFFLFdBQVcsTUFBTSxTQUFTLENBQUMsR0FBRyxnQkFBZ0IsS0FBSztBQUFBLEVBQzlEO0FBRUEsUUFBTSxVQUFvQixDQUFDO0FBRTNCLE1BQUksQ0FBQyxXQUFXLEtBQUssR0FBRztBQUN0QixZQUFRLEtBQUssbUJBQW1CO0FBQUEsRUFDbEM7QUFFQSxRQUFNLEtBQUssUUFBUSxTQUFTLElBQUkscUJBQXFCLElBQUk7QUFDekQsU0FBTztBQUFBLElBQ0wsV0FBVyxRQUFRLFdBQVc7QUFBQSxJQUM5QjtBQUFBLElBQ0EsZ0JBQWdCLElBQUksa0JBQWtCO0FBQUEsRUFDeEM7QUFDRjtBQWNBLGVBQXNCLDhCQUFnRDtBQUNwRSxRQUFNLE9BQU8sTUFBTSxjQUFjO0FBQ2pDLE1BQUksQ0FBQyxLQUFLLHVCQUF1QixHQUFHO0FBQ2xDLFdBQU87QUFBQSxFQUNUO0FBRUEsUUFBTSxVQUFVLE1BQU07QUFBQSxJQUNwQixZQUFVO0FBQUEsSUFBQztBQUFBO0FBQUEsSUFDWCxNQUFNO0FBQUEsSUFBQztBQUFBO0FBQUEsSUFDUCxFQUFFLGtCQUFrQixNQUFNO0FBQUEsRUFDNUI7QUFDQSxNQUFJLFNBQVM7QUFDWCxrQkFBYztBQUNkLFdBQU87QUFBQSxFQUNUO0FBQ0EsU0FBTztBQUNUO0FBRUEsZUFBc0IsNkJBQTZEO0FBRWpGLE1BQUkscUJBQXFCLEtBQUssWUFBWSxRQUFRLElBQUksa0JBQWtCLEdBQUc7QUFDekUsV0FBTztBQUFBLE1BQ0wsV0FBVztBQUFBLE1BQ1gsUUFDRTtBQUFBLElBQ0o7QUFBQSxFQUNGO0FBR0EsUUFBTSxPQUFPLE1BQU0sY0FBYztBQUNqQyxNQUFJLEtBQUssdUJBQXVCLEdBQUc7QUFDakMsV0FBTyxFQUFFLFdBQVcsTUFBTSxRQUFRLEtBQUs7QUFBQSxFQUN6QztBQUdBLE1BQUksUUFBUSxhQUFhLFNBQVM7QUFDaEMsV0FBTztBQUFBLE1BQ0wsV0FBVztBQUFBLE1BQ1gsUUFDRTtBQUFBLElBQ0o7QUFBQSxFQUNGO0FBRUEsUUFBTSxtQkFDSjtBQU1GLE1BQUksUUFBUSxhQUFhLFdBQVcsV0FBVyxTQUFTLEdBQUc7QUFDekQsVUFBTSxRQUFRLE1BQU0sYUFBYTtBQUNqQyxRQUFJLE1BQU0sSUFBSTtBQUNaLGFBQU8sRUFBRSxXQUFXLE1BQU0sUUFBUSxLQUFLO0FBQUEsSUFDekM7QUFDQSxRQUFJLFlBQVksTUFBTSxPQUFPO0FBQzNCLGFBQU8sRUFBRSxXQUFXLE9BQU8sUUFBUSxpQkFBaUI7QUFBQSxJQUN0RDtBQUNBLG9CQUFnQixpQ0FBaUMsTUFBTSxNQUFNLEVBQUU7QUFBQSxFQUVqRTtBQUdBLE1BQUksQ0FBQyxXQUFXLEtBQUssR0FBRztBQVd0QixRQUFJLFlBQVksTUFBTSxPQUFPO0FBQzNCLGFBQU8sRUFBRSxXQUFXLE9BQU8sUUFBUSxpQkFBaUI7QUFBQSxJQUN0RDtBQUNBLFVBQU0sS0FBSyxxQkFBcUI7QUFDaEMsV0FBTztBQUFBLE1BQ0wsV0FBVztBQUFBLE1BQ1gsUUFBUSxLQUNKLGlFQUFpRSxHQUFHLGNBQWMsS0FDbEY7QUFBQSxJQUNOO0FBQUEsRUFDRjtBQUVBLFNBQU8sRUFBRSxXQUFXLE1BQU0sUUFBUSxLQUFLO0FBQ3pDO0FBT0EsZUFBc0IsZUFDcEIsUUFDQSxPQUNBLFNBQ2tCO0FBQ2xCLGtCQUFnQiwyQ0FBMkMsUUFBUSxRQUFRLEVBQUU7QUFHN0UsUUFBTSxPQUFPLE1BQU0sY0FBYztBQUNqQyxRQUFNLGtCQUNKLEtBQUssdUJBQXVCLE1BQzNCLFFBQVEsYUFBYSxXQUFZLE1BQU0sa0JBQWtCO0FBQzVELFFBQU0sc0JBQXNCLFNBQVMscUJBQXFCO0FBQzFELE1BQUksaUJBQWlCO0FBRW5CLFFBQUkseUJBQXlCLEtBQUssd0JBQXdCLEdBQUc7QUFDM0QsV0FBSyxvQkFBb0I7QUFDekIsOEJBQXdCO0FBQUEsSUFDMUI7QUFDQSxVQUFNLFVBQVUsS0FBSztBQUFBLE1BQ25CLENBQUMsU0FBaUI7QUFDaEIsZUFBTyxJQUFJO0FBQUEsTUFDYjtBQUFBLE1BQ0EsTUFBTTtBQUNKLFlBQUkscUJBQXFCO0FBQ3ZCLGtDQUF3QjtBQUN4QixnQkFBTTtBQUFBLFFBQ1I7QUFBQSxNQUlGO0FBQUEsSUFDRjtBQUNBLFFBQUksU0FBUztBQUNYLDhCQUF3QjtBQUN4QixhQUFPO0FBQUEsSUFDVDtBQUFBLEVBRUY7QUFHQSxNQUFJLFFBQVEsYUFBYSxTQUFTO0FBQ2hDLG9CQUFnQiwyREFBMkQ7QUFDM0UsV0FBTztBQUFBLEVBQ1Q7QUFPQSxNQUNFLFFBQVEsYUFBYSxXQUNyQixXQUFXLFNBQVMsTUFDbkIsTUFBTSxhQUFhLEdBQUcsSUFDdkI7QUFDQSxXQUFPLHNCQUFzQixRQUFRLEtBQUs7QUFBQSxFQUM1QztBQUdBLFNBQU8sa0JBQWtCLFFBQVEsT0FBTyxPQUFPO0FBQ2pEO0FBRUEsU0FBUyxrQkFDUCxRQUNBLE9BQ0EsU0FDUztBQUNULFFBQU0sc0JBQXNCLFNBQVMscUJBQXFCO0FBTzFELFFBQU0sT0FBTztBQUFBLElBQ1g7QUFBQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQSxPQUFPLHFCQUFxQjtBQUFBLElBQzVCO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0EsT0FBTyxrQkFBa0I7QUFBQSxJQUN6QjtBQUFBO0FBQUEsRUFDRjtBQUlBLE1BQUkscUJBQXFCO0FBQ3ZCLFNBQUs7QUFBQSxNQUNIO0FBQUE7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUVBLFFBQU0sUUFBUSxNQUFNLE9BQU8sTUFBTTtBQUFBLElBQy9CLE9BQU8sQ0FBQyxRQUFRLFFBQVEsTUFBTTtBQUFBLEVBQ2hDLENBQUM7QUFFRCxtQkFBaUI7QUFFakIsUUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLFVBQWtCO0FBQzFDLFdBQU8sS0FBSztBQUFBLEVBQ2QsQ0FBQztBQUdELFFBQU0sUUFBUSxHQUFHLFFBQVEsTUFBTTtBQUFBLEVBQUMsQ0FBQztBQUVqQyxRQUFNLEdBQUcsU0FBUyxNQUFNO0FBQ3RCLHFCQUFpQjtBQUNqQixVQUFNO0FBQUEsRUFDUixDQUFDO0FBRUQsUUFBTSxHQUFHLFNBQVMsU0FBTztBQUN2QixhQUFTLEdBQUc7QUFDWixxQkFBaUI7QUFDakIsVUFBTTtBQUFBLEVBQ1IsQ0FBQztBQUVELFNBQU87QUFDVDtBQUVBLFNBQVMsc0JBQ1AsUUFDQSxPQUNTO0FBSVQsUUFBTSxPQUFPO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQTtBQUFBLElBQ0E7QUFBQSxJQUNBLE9BQU8scUJBQXFCO0FBQUEsSUFDNUI7QUFBQSxJQUNBLE9BQU8sa0JBQWtCO0FBQUEsSUFDekI7QUFBQSxJQUNBO0FBQUE7QUFBQSxJQUNBO0FBQUE7QUFBQSxJQUNBO0FBQUE7QUFBQSxFQUNGO0FBRUEsUUFBTSxRQUFRLE1BQU0sV0FBVyxNQUFNO0FBQUEsSUFDbkMsT0FBTyxDQUFDLFFBQVEsUUFBUSxNQUFNO0FBQUEsRUFDaEMsQ0FBQztBQUVELG1CQUFpQjtBQUVqQixRQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsVUFBa0I7QUFDMUMsV0FBTyxLQUFLO0FBQUEsRUFDZCxDQUFDO0FBR0QsUUFBTSxRQUFRLEdBQUcsUUFBUSxNQUFNO0FBQUEsRUFBQyxDQUFDO0FBRWpDLFFBQU0sR0FBRyxTQUFTLE1BQU07QUFDdEIscUJBQWlCO0FBQ2pCLFVBQU07QUFBQSxFQUNSLENBQUM7QUFFRCxRQUFNLEdBQUcsU0FBUyxTQUFPO0FBQ3ZCLGFBQVMsR0FBRztBQUNaLHFCQUFpQjtBQUNqQixVQUFNO0FBQUEsRUFDUixDQUFDO0FBRUQsU0FBTztBQUNUO0FBRU8sU0FBUyxnQkFBc0I7QUFDcEMsTUFBSSx5QkFBeUIsV0FBVztBQUN0QyxjQUFVLG9CQUFvQjtBQUM5Qiw0QkFBd0I7QUFDeEI7QUFBQSxFQUNGO0FBQ0EsTUFBSSxnQkFBZ0I7QUFDbEIsbUJBQWUsS0FBSyxTQUFTO0FBQzdCLHFCQUFpQjtBQUFBLEVBQ25CO0FBQ0Y7QUE1Z0JBLElBb0JJLFdBQ0Esa0JBa0JFLHVCQUNBLG9CQUdBLHVCQUNBLG1CQTRCRixjQXVEQSxvQkE0TUEsZ0JBQ0E7QUE1VUo7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBU0EsSUFBSSxZQUE4QjtBQUNsQyxJQUFJLG1CQUE4QztBQWtCbEQsSUFBTSx3QkFBd0I7QUFDOUIsSUFBTSxxQkFBcUI7QUFHM0IsSUFBTSx3QkFBd0I7QUFDOUIsSUFBTSxvQkFBb0I7QUE0QjFCLElBQUksZUFBbUQ7QUF1RHZELElBQUkscUJBQThDO0FBNE1sRCxJQUFJLGlCQUFzQztBQUMxQyxJQUFJLHdCQUF3QjtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
