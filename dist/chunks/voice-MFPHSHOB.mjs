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
      reason: "Voice mode requires microphone access, but no audio device is available in this environment.\n\nTo use voice mode, run Blaude locally instead."
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
  const wslNoAudioReason = "Voice mode could not access an audio device in WSL.\n\nWSL2 with WSLg (Windows 11) provides audio via PulseAudio \u2014 if you are on Windows 10 or WSL1, run Blaude in native Windows instead.";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3NlcnZpY2VzL3ZvaWNlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBWb2ljZSBzZXJ2aWNlOiBhdWRpbyByZWNvcmRpbmcgZm9yIHB1c2gtdG8tdGFsayB2b2ljZSBpbnB1dC5cbi8vXG4vLyBSZWNvcmRpbmcgdXNlcyBuYXRpdmUgYXVkaW8gY2FwdHVyZSAoY3BhbCkgb24gbWFjT1MsIExpbnV4LCBhbmQgV2luZG93c1xuLy8gZm9yIGluLXByb2Nlc3MgbWljIGFjY2Vzcy4gRmFsbHMgYmFjayB0byBTb1ggYHJlY2Agb3IgYXJlY29yZCAoQUxTQSlcbi8vIG9uIExpbnV4IGlmIHRoZSBuYXRpdmUgbW9kdWxlIGlzIHVuYXZhaWxhYmxlLlxuXG5pbXBvcnQgeyB0eXBlIENoaWxkUHJvY2Vzcywgc3Bhd24sIHNwYXduU3luYyB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnXG5pbXBvcnQgeyByZWFkRmlsZSB9IGZyb20gJ2ZzL3Byb21pc2VzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi4vdXRpbHMvZGVidWcuanMnXG5pbXBvcnQgeyBpc0VudlRydXRoeSwgaXNSdW5uaW5nT25Ib21lc3BhY2UgfSBmcm9tICcuLi91dGlscy9lbnZVdGlscy5qcydcbmltcG9ydCB7IGxvZ0Vycm9yIH0gZnJvbSAnLi4vdXRpbHMvbG9nLmpzJ1xuaW1wb3J0IHsgZ2V0UGxhdGZvcm0gfSBmcm9tICcuLi91dGlscy9wbGF0Zm9ybS5qcydcblxuLy8gTGF6eS1sb2FkZWQgbmF0aXZlIGF1ZGlvIG1vZHVsZS4gYXVkaW8tY2FwdHVyZS5ub2RlIGxpbmtzIGFnYWluc3Rcbi8vIENvcmVBdWRpby5mcmFtZXdvcmsgKyBBdWRpb1VuaXQuZnJhbWV3b3JrOyBkbG9wZW4gaXMgc3luY2hyb25vdXMgYW5kXG4vLyBibG9ja3MgdGhlIGV2ZW50IGxvb3AgZm9yIH4xcyB3YXJtLCB1cCB0byB+OHMgb24gY29sZCBjb3JlYXVkaW9kXG4vLyAocG9zdC13YWtlLCBwb3N0LWJvb3QpLiBMb2FkIGhhcHBlbnMgb24gZmlyc3Qgdm9pY2Uga2V5cHJlc3MgXHUyMDE0IG5vXG4vLyBwcmVsb2FkLCBiZWNhdXNlIHRoZXJlJ3Mgbm8gd2F5IHRvIG1ha2UgZGxvcGVuIG5vbi1ibG9ja2luZyBhbmQgYVxuLy8gc3RhcnR1cCBmcmVlemUgaXMgd29yc2UgdGhhbiBhIGZpcnN0LXByZXNzIGRlbGF5LlxudHlwZSBBdWRpb05hcGkgPSB0eXBlb2YgaW1wb3J0KCdhdWRpby1jYXB0dXJlLW5hcGknKVxubGV0IGF1ZGlvTmFwaTogQXVkaW9OYXBpIHwgbnVsbCA9IG51bGxcbmxldCBhdWRpb05hcGlQcm9taXNlOiBQcm9taXNlPEF1ZGlvTmFwaT4gfCBudWxsID0gbnVsbFxuXG5mdW5jdGlvbiBsb2FkQXVkaW9OYXBpKCk6IFByb21pc2U8QXVkaW9OYXBpPiB7XG4gIGF1ZGlvTmFwaVByb21pc2UgPz89IChhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdDAgPSBEYXRlLm5vdygpXG4gICAgY29uc3QgbW9kID0gYXdhaXQgaW1wb3J0KCdhdWRpby1jYXB0dXJlLW5hcGknKVxuICAgIC8vIHZlbmRvci9hdWRpby1jYXB0dXJlLXNyYy9pbmRleC50cyBkZWZlcnMgcmVxdWlyZSguLi5ub2RlKSB1bnRpbCB0aGVcbiAgICAvLyBmaXJzdCBmdW5jdGlvbiBjYWxsIFx1MjAxNCB0cmlnZ2VyIGl0IGhlcmUgc28gdGltaW5nIHJlZmxlY3RzIHJlYWwgY29zdC5cbiAgICBtb2QuaXNOYXRpdmVBdWRpb0F2YWlsYWJsZSgpXG4gICAgYXVkaW9OYXBpID0gbW9kXG4gICAgbG9nRm9yRGVidWdnaW5nKGBbdm9pY2VdIGF1ZGlvLWNhcHR1cmUtbmFwaSBsb2FkZWQgaW4gJHtEYXRlLm5vdygpIC0gdDB9bXNgKVxuICAgIHJldHVybiBtb2RcbiAgfSkoKVxuICByZXR1cm4gYXVkaW9OYXBpUHJvbWlzZVxufVxuXG4vLyBcdTI1MDBcdTI1MDBcdTI1MDAgQ29uc3RhbnRzIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG5jb25zdCBSRUNPUkRJTkdfU0FNUExFX1JBVEUgPSAxNjAwMFxuY29uc3QgUkVDT1JESU5HX0NIQU5ORUxTID0gMVxuXG4vLyBTb1ggc2lsZW5jZSBkZXRlY3Rpb246IHN0b3AgYWZ0ZXIgdGhpcyBkdXJhdGlvbiBvZiBzaWxlbmNlXG5jb25zdCBTSUxFTkNFX0RVUkFUSU9OX1NFQ1MgPSAnMi4wJ1xuY29uc3QgU0lMRU5DRV9USFJFU0hPTEQgPSAnMyUnXG5cbi8vIFx1MjUwMFx1MjUwMFx1MjUwMCBEZXBlbmRlbmN5IGNoZWNrIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG5mdW5jdGlvbiBoYXNDb21tYW5kKGNtZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIFNwYXduIHRoZSB0YXJnZXQgZGlyZWN0bHkgaW5zdGVhZCBvZiBgd2hpY2ggY21kYC4gT24gVGVybXV4L0FuZHJvaWRcbiAgLy8gYHdoaWNoYCBpcyBhIHNoZWxsIGJ1aWx0aW4gXHUyMDE0IHRoZSBleHRlcm5hbCBiaW5hcnkgaXMgYWJzZW50IG9yXG4gIC8vIGtlcm5lbC1ibG9ja2VkIChFUEVSTSkgd2hlbiBzcGF3bmVkIGZyb20gTm9kZS4gT25seSByZWFjaGVkIG9uXG4gIC8vIG5vbi1XaW5kb3dzICh3aW4zMiByZXR1cm5zIGVhcmx5IGZyb20gYWxsIGNhbGxlcnMpLCBubyBQQVRIRVhUIGlzc3VlLlxuICAvLyByZXN1bHQuZXJyb3IgaXMgc2V0IGlmZiB0aGUgc3Bhd24gaXRzZWxmIGZhaWxzIChFTk9FTlQvRUFDQ0VTKTsgZXhpdFxuICAvLyBjb2RlIGlzIGlycmVsZXZhbnQgXHUyMDE0IGFuIHVucmVjb2duaXplZCAtLXZlcnNpb24gc3RpbGwgbWVhbnMgY21kIGV4aXN0cy5cbiAgY29uc3QgcmVzdWx0ID0gc3Bhd25TeW5jKGNtZCwgWyctLXZlcnNpb24nXSwge1xuICAgIHN0ZGlvOiAnaWdub3JlJyxcbiAgICB0aW1lb3V0OiAzMDAwLFxuICB9KVxuICByZXR1cm4gcmVzdWx0LmVycm9yID09PSB1bmRlZmluZWRcbn1cblxuLy8gUHJvYmUgd2hldGhlciBhcmVjb3JkIGNhbiBhY3R1YWxseSBvcGVuIGEgY2FwdHVyZSBkZXZpY2UuIGhhc0NvbW1hbmQoKVxuLy8gb25seSBjaGVja3MgUEFUSDsgb24gV1NMMS9XaW4xMC1XU0wyL2hlYWRsZXNzIExpbnV4IHRoZSBiaW5hcnkgZXhpc3RzXG4vLyBidXQgZmFpbHMgYXQgb3BlbigpIGJlY2F1c2UgdGhlcmUgaXMgbm8gQUxTQSBjYXJkIGFuZCBubyBQdWxzZUF1ZGlvXG4vLyBzZXJ2ZXIuIE9uIFdTTDIrV1NMZyAoV2luMTEpLCBQdWxzZUF1ZGlvIHdvcmtzIHZpYSBSRFAgcGlwZXMgYW5kIGFyZWNvcmRcbi8vIHN1Y2NlZWRzLiBXZSBzcGF3biB3aXRoIHRoZSBzYW1lIGFyZ3MgYXMgc3RhcnRBcmVjb3JkUmVjb3JkaW5nKCkgYW5kIHJhY2Vcbi8vIGEgc2hvcnQgdGltZXI6IGlmIHRoZSBwcm9jZXNzIGlzIHN0aWxsIGFsaXZlIGFmdGVyIDE1MG1zIGl0IG9wZW5lZCB0aGVcbi8vIGRldmljZTsgaWYgaXQgZXhpdHMgZWFybHkgdGhlIHN0ZGVyciB0ZWxscyB1cyB3aHkuIE1lbW9pemVkIFx1MjAxNCBhdWRpb1xuLy8gZGV2aWNlIGF2YWlsYWJpbGl0eSBkb2VzIG5vdCBjaGFuZ2UgbWlkLXNlc3Npb24sIGFuZCB0aGlzIGlzIGNhbGxlZCBvblxuLy8gZXZlcnkgdm9pY2Uga2V5cHJlc3MgdmlhIGNoZWNrUmVjb3JkaW5nQXZhaWxhYmlsaXR5KCkuXG50eXBlIEFyZWNvcmRQcm9iZVJlc3VsdCA9IHsgb2s6IGJvb2xlYW47IHN0ZGVycjogc3RyaW5nIH1cbmxldCBhcmVjb3JkUHJvYmU6IFByb21pc2U8QXJlY29yZFByb2JlUmVzdWx0PiB8IG51bGwgPSBudWxsXG5cbmZ1bmN0aW9uIHByb2JlQXJlY29yZCgpOiBQcm9taXNlPEFyZWNvcmRQcm9iZVJlc3VsdD4ge1xuICBhcmVjb3JkUHJvYmUgPz89IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIGNvbnN0IGNoaWxkID0gc3Bhd24oXG4gICAgICAnYXJlY29yZCcsXG4gICAgICBbXG4gICAgICAgICctZicsXG4gICAgICAgICdTMTZfTEUnLFxuICAgICAgICAnLXInLFxuICAgICAgICBTdHJpbmcoUkVDT1JESU5HX1NBTVBMRV9SQVRFKSxcbiAgICAgICAgJy1jJyxcbiAgICAgICAgU3RyaW5nKFJFQ09SRElOR19DSEFOTkVMUyksXG4gICAgICAgICctdCcsXG4gICAgICAgICdyYXcnLFxuICAgICAgICAnL2Rldi9udWxsJyxcbiAgICAgIF0sXG4gICAgICB7IHN0ZGlvOiBbJ2lnbm9yZScsICdpZ25vcmUnLCAncGlwZSddIH0sXG4gICAgKVxuICAgIGxldCBzdGRlcnIgPSAnJ1xuICAgIGNoaWxkLnN0ZGVycj8ub24oJ2RhdGEnLCAoY2h1bms6IEJ1ZmZlcikgPT4ge1xuICAgICAgc3RkZXJyICs9IGNodW5rLnRvU3RyaW5nKClcbiAgICB9KVxuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dChcbiAgICAgIChjOiBDaGlsZFByb2Nlc3MsIHI6ICh2OiBBcmVjb3JkUHJvYmVSZXN1bHQpID0+IHZvaWQpID0+IHtcbiAgICAgICAgYy5raWxsKCdTSUdURVJNJylcbiAgICAgICAgcih7IG9rOiB0cnVlLCBzdGRlcnI6ICcnIH0pXG4gICAgICB9LFxuICAgICAgMTUwLFxuICAgICAgY2hpbGQsXG4gICAgICByZXNvbHZlLFxuICAgIClcbiAgICBjaGlsZC5vbmNlKCdjbG9zZScsIGNvZGUgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgLy8gU0lHVEVSTSBjbG9zZSAoY29kZT1udWxsKSBhZnRlciB0aW1lciBmaXJlZCBpcyBhbHJlYWR5IHJlc29sdmVkLlxuICAgICAgLy8gRWFybHkgY2xvc2Ugd2l0aCBjb2RlPTAgaXMgdW51c3VhbCAoYXJlY29yZCBzaG91bGRuJ3QgZXhpdCBvbiBpdHNcbiAgICAgIC8vIG93bikgYnV0IHRyZWF0IGFzIG9rLlxuICAgICAgdm9pZCByZXNvbHZlKHsgb2s6IGNvZGUgPT09IDAsIHN0ZGVycjogc3RkZXJyLnRyaW0oKSB9KVxuICAgIH0pXG4gICAgY2hpbGQub25jZSgnZXJyb3InLCAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICB2b2lkIHJlc29sdmUoeyBvazogZmFsc2UsIHN0ZGVycjogJ2FyZWNvcmQ6IGNvbW1hbmQgbm90IGZvdW5kJyB9KVxuICAgIH0pXG4gIH0pXG4gIHJldHVybiBhcmVjb3JkUHJvYmVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9yZXNldEFyZWNvcmRQcm9iZUZvclRlc3RpbmcoKTogdm9pZCB7XG4gIGFyZWNvcmRQcm9iZSA9IG51bGxcbn1cblxuLy8gY3BhbCdzIEFMU0EgYmFja2VuZCB3cml0ZXMgdG8gb3VyIHByb2Nlc3Mgc3RkZXJyIHdoZW4gaXQgY2FuJ3QgZmluZCBhbnlcbi8vIHNvdW5kIGNhcmRzIChpdCBydW5zIGluLXByb2Nlc3MgXHUyMDE0IG5vIHN1YnByb2Nlc3MgcGlwZSB0byBjYXB0dXJlIGl0KS4gVGhlXG4vLyBzcGF3biBmYWxsYmFja3MgYmVsb3cgcGlwZSBzdGRlcnIgY29ycmVjdGx5LCBzbyBza2lwIG5hdGl2ZSB3aGVuIEFMU0EgaGFzXG4vLyBub3RoaW5nIHRvIG9wZW4uIE1lbW9pemVkOiBjYXJkIHByZXNlbmNlIGRvZXNuJ3QgY2hhbmdlIG1pZC1zZXNzaW9uLlxubGV0IGxpbnV4QWxzYUNhcmRzTWVtbzogUHJvbWlzZTxib29sZWFuPiB8IG51bGwgPSBudWxsXG5cbmZ1bmN0aW9uIGxpbnV4SGFzQWxzYUNhcmRzKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICBsaW51eEFsc2FDYXJkc01lbW8gPz89IHJlYWRGaWxlKCcvcHJvYy9hc291bmQvY2FyZHMnLCAndXRmOCcpLnRoZW4oXG4gICAgY2FyZHMgPT4ge1xuICAgICAgY29uc3QgYyA9IGNhcmRzLnRyaW0oKVxuICAgICAgcmV0dXJuIGMgIT09ICcnICYmICFjLmluY2x1ZGVzKCdubyBzb3VuZGNhcmRzJylcbiAgICB9LFxuICAgICgpID0+IGZhbHNlLFxuICApXG4gIHJldHVybiBsaW51eEFsc2FDYXJkc01lbW9cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9yZXNldEFsc2FDYXJkc0ZvclRlc3RpbmcoKTogdm9pZCB7XG4gIGxpbnV4QWxzYUNhcmRzTWVtbyA9IG51bGxcbn1cblxudHlwZSBQYWNrYWdlTWFuYWdlckluZm8gPSB7XG4gIGNtZDogc3RyaW5nXG4gIGFyZ3M6IHN0cmluZ1tdXG4gIGRpc3BsYXlDb21tYW5kOiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gZGV0ZWN0UGFja2FnZU1hbmFnZXIoKTogUGFja2FnZU1hbmFnZXJJbmZvIHwgbnVsbCB7XG4gIGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnZGFyd2luJykge1xuICAgIGlmIChoYXNDb21tYW5kKCdicmV3JykpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNtZDogJ2JyZXcnLFxuICAgICAgICBhcmdzOiBbJ2luc3RhbGwnLCAnc294J10sXG4gICAgICAgIGRpc3BsYXlDb21tYW5kOiAnYnJldyBpbnN0YWxsIHNveCcsXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ2xpbnV4Jykge1xuICAgIGlmIChoYXNDb21tYW5kKCdhcHQtZ2V0JykpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNtZDogJ3N1ZG8nLFxuICAgICAgICBhcmdzOiBbJ2FwdC1nZXQnLCAnaW5zdGFsbCcsICcteScsICdzb3gnXSxcbiAgICAgICAgZGlzcGxheUNvbW1hbmQ6ICdzdWRvIGFwdC1nZXQgaW5zdGFsbCBzb3gnLFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGFzQ29tbWFuZCgnZG5mJykpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNtZDogJ3N1ZG8nLFxuICAgICAgICBhcmdzOiBbJ2RuZicsICdpbnN0YWxsJywgJy15JywgJ3NveCddLFxuICAgICAgICBkaXNwbGF5Q29tbWFuZDogJ3N1ZG8gZG5mIGluc3RhbGwgc294JyxcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhhc0NvbW1hbmQoJ3BhY21hbicpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjbWQ6ICdzdWRvJyxcbiAgICAgICAgYXJnczogWydwYWNtYW4nLCAnLVMnLCAnLS1ub2NvbmZpcm0nLCAnc294J10sXG4gICAgICAgIGRpc3BsYXlDb21tYW5kOiAnc3VkbyBwYWNtYW4gLVMgc294JyxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tWb2ljZURlcGVuZGVuY2llcygpOiBQcm9taXNlPHtcbiAgYXZhaWxhYmxlOiBib29sZWFuXG4gIG1pc3Npbmc6IHN0cmluZ1tdXG4gIGluc3RhbGxDb21tYW5kOiBzdHJpbmcgfCBudWxsXG59PiB7XG4gIC8vIE5hdGl2ZSBhdWRpbyBtb2R1bGUgKGNwYWwpIGhhbmRsZXMgZXZlcnl0aGluZyBvbiBtYWNPUywgTGludXgsIGFuZCBXaW5kb3dzXG4gIGNvbnN0IG5hcGkgPSBhd2FpdCBsb2FkQXVkaW9OYXBpKClcbiAgaWYgKG5hcGkuaXNOYXRpdmVBdWRpb0F2YWlsYWJsZSgpKSB7XG4gICAgcmV0dXJuIHsgYXZhaWxhYmxlOiB0cnVlLCBtaXNzaW5nOiBbXSwgaW5zdGFsbENvbW1hbmQ6IG51bGwgfVxuICB9XG5cbiAgLy8gV2luZG93cyBoYXMgbm8gc3VwcG9ydGVkIGZhbGxiYWNrIFx1MjAxNCBuYXRpdmUgbW9kdWxlIGlzIHJlcXVpcmVkXG4gIGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF2YWlsYWJsZTogZmFsc2UsXG4gICAgICBtaXNzaW5nOiBbJ1ZvaWNlIG1vZGUgcmVxdWlyZXMgdGhlIG5hdGl2ZSBhdWRpbyBtb2R1bGUgKG5vdCBsb2FkZWQpJ10sXG4gICAgICBpbnN0YWxsQ29tbWFuZDogbnVsbCxcbiAgICB9XG4gIH1cblxuICAvLyBPbiBMaW51eCwgYXJlY29yZCAoQUxTQSB1dGlscykgaXMgYSB2YWxpZCBmYWxsYmFjayByZWNvcmRpbmcgYmFja2VuZFxuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ2xpbnV4JyAmJiBoYXNDb21tYW5kKCdhcmVjb3JkJykpIHtcbiAgICByZXR1cm4geyBhdmFpbGFibGU6IHRydWUsIG1pc3Npbmc6IFtdLCBpbnN0YWxsQ29tbWFuZDogbnVsbCB9XG4gIH1cblxuICBjb25zdCBtaXNzaW5nOiBzdHJpbmdbXSA9IFtdXG5cbiAgaWYgKCFoYXNDb21tYW5kKCdyZWMnKSkge1xuICAgIG1pc3NpbmcucHVzaCgnc294IChyZWMgY29tbWFuZCknKVxuICB9XG5cbiAgY29uc3QgcG0gPSBtaXNzaW5nLmxlbmd0aCA+IDAgPyBkZXRlY3RQYWNrYWdlTWFuYWdlcigpIDogbnVsbFxuICByZXR1cm4ge1xuICAgIGF2YWlsYWJsZTogbWlzc2luZy5sZW5ndGggPT09IDAsXG4gICAgbWlzc2luZyxcbiAgICBpbnN0YWxsQ29tbWFuZDogcG0/LmRpc3BsYXlDb21tYW5kID8/IG51bGwsXG4gIH1cbn1cblxuLy8gXHUyNTAwXHUyNTAwXHUyNTAwIFJlY29yZGluZyBhdmFpbGFiaWxpdHkgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cbmV4cG9ydCB0eXBlIFJlY29yZGluZ0F2YWlsYWJpbGl0eSA9IHtcbiAgYXZhaWxhYmxlOiBib29sZWFuXG4gIHJlYXNvbjogc3RyaW5nIHwgbnVsbFxufVxuXG4vLyBQcm9iZS1yZWNvcmQgdGhyb3VnaCB0aGUgZnVsbCBmYWxsYmFjayBjaGFpbiAobmF0aXZlIFx1MjE5MiBhcmVjb3JkIFx1MjE5MiBTb1gpXG4vLyB0byB2ZXJpZnkgdGhhdCBhdCBsZWFzdCBvbmUgYmFja2VuZCBjYW4gcmVjb3JkLiBPbiBtYWNPUyB0aGlzIGFsc29cbi8vIHRyaWdnZXJzIHRoZSBUQ0MgcGVybWlzc2lvbiBkaWFsb2cgb24gZmlyc3QgdXNlLiBXZSB0cnVzdCB0aGUgcHJvYmVcbi8vIHJlc3VsdCBvdmVyIHRoZSBUQ0Mgc3RhdHVzIEFQSSwgd2hpY2ggY2FuIGJlIHVucmVsaWFibGUgZm9yIGFkLWhvY1xuLy8gc2lnbmVkIG9yIGNyb3NzLWFyY2hpdGVjdHVyZSBiaW5hcmllcyAoZS5nLiwgeDY0LW9uLWFybTY0KS5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1ZXN0TWljcm9waG9uZVBlcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIGNvbnN0IG5hcGkgPSBhd2FpdCBsb2FkQXVkaW9OYXBpKClcbiAgaWYgKCFuYXBpLmlzTmF0aXZlQXVkaW9BdmFpbGFibGUoKSkge1xuICAgIHJldHVybiB0cnVlIC8vIG5vbi1uYXRpdmUgcGxhdGZvcm1zIHNraXAgdGhpcyBjaGVja1xuICB9XG5cbiAgY29uc3Qgc3RhcnRlZCA9IGF3YWl0IHN0YXJ0UmVjb3JkaW5nKFxuICAgIF9jaHVuayA9PiB7fSwgLy8gZGlzY2FyZCBhdWRpbyBkYXRhIFx1MjAxNCB0aGlzIGlzIGEgcGVybWlzc2lvbiBwcm9iZSBvbmx5XG4gICAgKCkgPT4ge30sIC8vIGlnbm9yZSBzaWxlbmNlLWRldGVjdGlvbiBlbmQgc2lnbmFsXG4gICAgeyBzaWxlbmNlRGV0ZWN0aW9uOiBmYWxzZSB9LFxuICApXG4gIGlmIChzdGFydGVkKSB7XG4gICAgc3RvcFJlY29yZGluZygpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrUmVjb3JkaW5nQXZhaWxhYmlsaXR5KCk6IFByb21pc2U8UmVjb3JkaW5nQXZhaWxhYmlsaXR5PiB7XG4gIC8vIFJlbW90ZSBlbnZpcm9ubWVudHMgaGF2ZSBubyBsb2NhbCBtaWNyb3Bob25lXG4gIGlmIChpc1J1bm5pbmdPbkhvbWVzcGFjZSgpIHx8IGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX1JFTU9URSkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXZhaWxhYmxlOiBmYWxzZSxcbiAgICAgIHJlYXNvbjpcbiAgICAgICAgJ1ZvaWNlIG1vZGUgcmVxdWlyZXMgbWljcm9waG9uZSBhY2Nlc3MsIGJ1dCBubyBhdWRpbyBkZXZpY2UgaXMgYXZhaWxhYmxlIGluIHRoaXMgZW52aXJvbm1lbnQuXFxuXFxuVG8gdXNlIHZvaWNlIG1vZGUsIHJ1biBCbGF1ZGUgbG9jYWxseSBpbnN0ZWFkLicsXG4gICAgfVxuICB9XG5cbiAgLy8gTmF0aXZlIGF1ZGlvIG1vZHVsZSAoY3BhbCkgaGFuZGxlcyBldmVyeXRoaW5nIG9uIG1hY09TLCBMaW51eCwgYW5kIFdpbmRvd3NcbiAgY29uc3QgbmFwaSA9IGF3YWl0IGxvYWRBdWRpb05hcGkoKVxuICBpZiAobmFwaS5pc05hdGl2ZUF1ZGlvQXZhaWxhYmxlKCkpIHtcbiAgICByZXR1cm4geyBhdmFpbGFibGU6IHRydWUsIHJlYXNvbjogbnVsbCB9XG4gIH1cblxuICAvLyBXaW5kb3dzIGhhcyBubyBzdXBwb3J0ZWQgZmFsbGJhY2tcbiAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXZhaWxhYmxlOiBmYWxzZSxcbiAgICAgIHJlYXNvbjpcbiAgICAgICAgJ1ZvaWNlIHJlY29yZGluZyByZXF1aXJlcyB0aGUgbmF0aXZlIGF1ZGlvIG1vZHVsZSwgd2hpY2ggY291bGQgbm90IGJlIGxvYWRlZC4nLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHdzbE5vQXVkaW9SZWFzb24gPVxuICAgICdWb2ljZSBtb2RlIGNvdWxkIG5vdCBhY2Nlc3MgYW4gYXVkaW8gZGV2aWNlIGluIFdTTC5cXG5cXG5XU0wyIHdpdGggV1NMZyAoV2luZG93cyAxMSkgcHJvdmlkZXMgYXVkaW8gdmlhIFB1bHNlQXVkaW8gXHUyMDE0IGlmIHlvdSBhcmUgb24gV2luZG93cyAxMCBvciBXU0wxLCBydW4gQmxhdWRlIGluIG5hdGl2ZSBXaW5kb3dzIGluc3RlYWQuJ1xuXG4gIC8vIE9uIExpbnV4IChpbmNsdWRpbmcgV1NMKSwgcHJvYmUgYXJlY29yZC4gaGFzQ29tbWFuZCgpIGlzIGluc3VmZmljaWVudDpcbiAgLy8gdGhlIGJpbmFyeSBjYW4gZXhpc3Qgd2hpbGUgdGhlIGRldmljZSBvcGVuKCkgZmFpbHMgKFdTTDEsIFdpbjEwLVdTTDIsXG4gIC8vIGhlYWRsZXNzIExpbnV4KS4gV1NMMitXU0xnIChXaW4xMSBkZWZhdWx0KSB3b3JrcyB2aWEgUHVsc2VBdWRpbyBSRFBcbiAgLy8gcGlwZXMgXHUyMDE0IGNwYWwgZmFpbHMgKG5vIC9wcm9jL2Fzb3VuZC9jYXJkcykgYnV0IGFyZWNvcmQgc3VjY2VlZHMuXG4gIGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnbGludXgnICYmIGhhc0NvbW1hbmQoJ2FyZWNvcmQnKSkge1xuICAgIGNvbnN0IHByb2JlID0gYXdhaXQgcHJvYmVBcmVjb3JkKClcbiAgICBpZiAocHJvYmUub2spIHtcbiAgICAgIHJldHVybiB7IGF2YWlsYWJsZTogdHJ1ZSwgcmVhc29uOiBudWxsIH1cbiAgICB9XG4gICAgaWYgKGdldFBsYXRmb3JtKCkgPT09ICd3c2wnKSB7XG4gICAgICByZXR1cm4geyBhdmFpbGFibGU6IGZhbHNlLCByZWFzb246IHdzbE5vQXVkaW9SZWFzb24gfVxuICAgIH1cbiAgICBsb2dGb3JEZWJ1Z2dpbmcoYFt2b2ljZV0gYXJlY29yZCBwcm9iZSBmYWlsZWQ6ICR7cHJvYmUuc3RkZXJyfWApXG4gICAgLy8gZmFsbCB0aHJvdWdoIHRvIFNvWFxuICB9XG5cbiAgLy8gRmFsbGJhY2s6IGNoZWNrIGZvciBTb1hcbiAgaWYgKCFoYXNDb21tYW5kKCdyZWMnKSkge1xuICAgIC8vIFdTTCB3aXRob3V0IGFyZWNvcmQgQU5EIHdpdGhvdXQgU29YOiB0aGUgZ2VuZXJpYyBcImluc3RhbGwgU29YXCJcbiAgICAvLyBoaW50IGJlbG93IGlzIG1pc2xlYWRpbmcgb24gV1NMMS9XaW4xMCAobm8gYXVkaW8gZGV2aWNlcyBhdCBhbGwpLFxuICAgIC8vIGJ1dCBjb3JyZWN0IG9uIFdTTDIrV1NMZyAoU29YIHdvcmtzIHZpYSBQdWxzZUF1ZGlvKS4gU2luY2Ugd2UgY2FuJ3RcbiAgICAvLyBkaXN0aW5ndWlzaCBXU0xnLXZzLW5vdCB3aXRob3V0IGEgYmFja2VuZCB0byBwcm9iZSwgc2hvdyB0aGUgV1NMZ1xuICAgIC8vIGd1aWRhbmNlIFx1MjAxNCBpdCBwb2ludHMgV1NMMSB1c2VycyBhdCBuYXRpdmUgV2luZG93cyBBTkQgdGVsbHMgV1NMZ1xuICAgIC8vIHVzZXJzIHRoZWlyIHNldHVwIHNob3VsZCB3b3JrICh0aGV5IGNhbiBpbnN0YWxsIHNveCBvciBhbHNhLXV0aWxzKS5cbiAgICAvLyBLbm93biBnYXA6IFdTTCB3aXRoIFNvWCBidXQgTk8gYXJlY29yZCBza2lwcyBib3RoIHRoaXMgYnJhbmNoIGFuZFxuICAgIC8vIHRoZSBwcm9iZSBhYm92ZSBcdTIwMTQgaGFzQ29tbWFuZCgncmVjJykgbGllcyB0aGUgc2FtZSB3YXkuIFdlIG9wdGltaXN0aWNhbGx5XG4gICAgLy8gdHJ1c3QgaXQgKFdTTGcrU29YIHdvdWxkIHdvcmspIHJhdGhlciB0aGFuIHByb2JlU294KCkgZm9yIGEgbmVhci16ZXJvXG4gICAgLy8gcG9wdWxhdGlvbiAoV1NMMSBcdTAwRDcgbWluaW1hbCBkaXN0cm8gXHUwMEQ3IFNvWC1idXQtbm90LWFsc2EtdXRpbHMpLlxuICAgIGlmIChnZXRQbGF0Zm9ybSgpID09PSAnd3NsJykge1xuICAgICAgcmV0dXJuIHsgYXZhaWxhYmxlOiBmYWxzZSwgcmVhc29uOiB3c2xOb0F1ZGlvUmVhc29uIH1cbiAgICB9XG4gICAgY29uc3QgcG0gPSBkZXRlY3RQYWNrYWdlTWFuYWdlcigpXG4gICAgcmV0dXJuIHtcbiAgICAgIGF2YWlsYWJsZTogZmFsc2UsXG4gICAgICByZWFzb246IHBtXG4gICAgICAgID8gYFZvaWNlIG1vZGUgcmVxdWlyZXMgU29YIGZvciBhdWRpbyByZWNvcmRpbmcuIEluc3RhbGwgaXQgd2l0aDogJHtwbS5kaXNwbGF5Q29tbWFuZH1gXG4gICAgICAgIDogJ1ZvaWNlIG1vZGUgcmVxdWlyZXMgU29YIGZvciBhdWRpbyByZWNvcmRpbmcuIEluc3RhbGwgU29YIG1hbnVhbGx5OlxcbiAgbWFjT1M6IGJyZXcgaW5zdGFsbCBzb3hcXG4gIFVidW50dS9EZWJpYW46IHN1ZG8gYXB0LWdldCBpbnN0YWxsIHNveFxcbiAgRmVkb3JhOiBzdWRvIGRuZiBpbnN0YWxsIHNveCcsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgYXZhaWxhYmxlOiB0cnVlLCByZWFzb246IG51bGwgfVxufVxuXG4vLyBcdTI1MDBcdTI1MDBcdTI1MDAgUmVjb3JkaW5nIChuYXRpdmUgYXVkaW8gb24gbWFjT1MvTGludXgvV2luZG93cywgU29YL2FyZWNvcmQgZmFsbGJhY2sgb24gTGludXgpIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG5sZXQgYWN0aXZlUmVjb3JkZXI6IENoaWxkUHJvY2VzcyB8IG51bGwgPSBudWxsXG5sZXQgbmF0aXZlUmVjb3JkaW5nQWN0aXZlID0gZmFsc2VcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0UmVjb3JkaW5nKFxuICBvbkRhdGE6IChjaHVuazogQnVmZmVyKSA9PiB2b2lkLFxuICBvbkVuZDogKCkgPT4gdm9pZCxcbiAgb3B0aW9ucz86IHsgc2lsZW5jZURldGVjdGlvbj86IGJvb2xlYW4gfSxcbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICBsb2dGb3JEZWJ1Z2dpbmcoYFt2b2ljZV0gc3RhcnRSZWNvcmRpbmcgY2FsbGVkLCBwbGF0Zm9ybT0ke3Byb2Nlc3MucGxhdGZvcm19YClcblxuICAvLyBUcnkgbmF0aXZlIGF1ZGlvIG1vZHVsZSBmaXJzdCAobWFjT1MsIExpbnV4LCBXaW5kb3dzIHZpYSBjcGFsKVxuICBjb25zdCBuYXBpID0gYXdhaXQgbG9hZEF1ZGlvTmFwaSgpXG4gIGNvbnN0IG5hdGl2ZUF2YWlsYWJsZSA9XG4gICAgbmFwaS5pc05hdGl2ZUF1ZGlvQXZhaWxhYmxlKCkgJiZcbiAgICAocHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ2xpbnV4JyB8fCAoYXdhaXQgbGludXhIYXNBbHNhQ2FyZHMoKSkpXG4gIGNvbnN0IHVzZVNpbGVuY2VEZXRlY3Rpb24gPSBvcHRpb25zPy5zaWxlbmNlRGV0ZWN0aW9uICE9PSBmYWxzZVxuICBpZiAobmF0aXZlQXZhaWxhYmxlKSB7XG4gICAgLy8gRW5zdXJlIGFueSBwcmV2aW91cyByZWNvcmRpbmcgaXMgZnVsbHkgc3RvcHBlZFxuICAgIGlmIChuYXRpdmVSZWNvcmRpbmdBY3RpdmUgfHwgbmFwaS5pc05hdGl2ZVJlY29yZGluZ0FjdGl2ZSgpKSB7XG4gICAgICBuYXBpLnN0b3BOYXRpdmVSZWNvcmRpbmcoKVxuICAgICAgbmF0aXZlUmVjb3JkaW5nQWN0aXZlID0gZmFsc2VcbiAgICB9XG4gICAgY29uc3Qgc3RhcnRlZCA9IG5hcGkuc3RhcnROYXRpdmVSZWNvcmRpbmcoXG4gICAgICAoZGF0YTogQnVmZmVyKSA9PiB7XG4gICAgICAgIG9uRGF0YShkYXRhKVxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgaWYgKHVzZVNpbGVuY2VEZXRlY3Rpb24pIHtcbiAgICAgICAgICBuYXRpdmVSZWNvcmRpbmdBY3RpdmUgPSBmYWxzZVxuICAgICAgICAgIG9uRW5kKClcbiAgICAgICAgfVxuICAgICAgICAvLyBJbiBwdXNoLXRvLXRhbGsgbW9kZSwgaWdub3JlIHRoZSBuYXRpdmUgbW9kdWxlJ3Mgc2lsZW5jZS10cmlnZ2VyZWRcbiAgICAgICAgLy8gb25FbmQuICBSZWNvcmRpbmcgY29udGludWVzIHVudGlsIHRoZSBjYWxsZXIgZXhwbGljaXRseSBjYWxsc1xuICAgICAgICAvLyBzdG9wUmVjb3JkaW5nKCkgKGUuZy4gd2hlbiB0aGUgdXNlciBwcmVzc2VzIEN0cmwrWCkuXG4gICAgICB9LFxuICAgIClcbiAgICBpZiAoc3RhcnRlZCkge1xuICAgICAgbmF0aXZlUmVjb3JkaW5nQWN0aXZlID0gdHJ1ZVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgLy8gTmF0aXZlIHJlY29yZGluZyBmYWlsZWQgXHUyMDE0IGZhbGwgdGhyb3VnaCB0byBwbGF0Zm9ybSBmYWxsYmFja3NcbiAgfVxuXG4gIC8vIFdpbmRvd3MgaGFzIG5vIHN1cHBvcnRlZCBmYWxsYmFja1xuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJykge1xuICAgIGxvZ0ZvckRlYnVnZ2luZygnW3ZvaWNlXSBXaW5kb3dzIG5hdGl2ZSByZWNvcmRpbmcgdW5hdmFpbGFibGUsIG5vIGZhbGxiYWNrJylcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIE9uIExpbnV4LCB0cnkgYXJlY29yZCAoQUxTQSB1dGlscykgYmVmb3JlIFNvWC4gQ29uc3VsdCB0aGUgcHJvYmUgc29cbiAgLy8gYmFja2VuZCBzZWxlY3Rpb24gbWF0Y2hlcyBjaGVja1JlY29yZGluZ0F2YWlsYWJpbGl0eSgpIFx1MjAxNCBvdGhlcndpc2VcbiAgLy8gb24gaGVhZGxlc3MgTGludXggd2l0aCBib3RoIGFsc2EtdXRpbHMgYW5kIFNvWCwgdGhlIGF2YWlsYWJpbGl0eVxuICAvLyBjaGVjayBmYWxscyB0aHJvdWdoIHRvIFNvWCAocHJvYmUub2s9ZmFsc2UsIG5vdCBXU0wpIGJ1dCB0aGlzIHBhdGhcbiAgLy8gd291bGQgc3RpbGwgcGljayBicm9rZW4gYXJlY29yZC4gUHJvYmUgaXMgbWVtb2l6ZWQ7IHplcm8gbGF0ZW5jeS5cbiAgaWYgKFxuICAgIHByb2Nlc3MucGxhdGZvcm0gPT09ICdsaW51eCcgJiZcbiAgICBoYXNDb21tYW5kKCdhcmVjb3JkJykgJiZcbiAgICAoYXdhaXQgcHJvYmVBcmVjb3JkKCkpLm9rXG4gICkge1xuICAgIHJldHVybiBzdGFydEFyZWNvcmRSZWNvcmRpbmcob25EYXRhLCBvbkVuZClcbiAgfVxuXG4gIC8vIEZhbGxiYWNrOiBTb1ggcmVjIChMaW51eCwgb3IgbWFjT1MgaWYgbmF0aXZlIG1vZHVsZSB1bmF2YWlsYWJsZSlcbiAgcmV0dXJuIHN0YXJ0U294UmVjb3JkaW5nKG9uRGF0YSwgb25FbmQsIG9wdGlvbnMpXG59XG5cbmZ1bmN0aW9uIHN0YXJ0U294UmVjb3JkaW5nKFxuICBvbkRhdGE6IChjaHVuazogQnVmZmVyKSA9PiB2b2lkLFxuICBvbkVuZDogKCkgPT4gdm9pZCxcbiAgb3B0aW9ucz86IHsgc2lsZW5jZURldGVjdGlvbj86IGJvb2xlYW4gfSxcbik6IGJvb2xlYW4ge1xuICBjb25zdCB1c2VTaWxlbmNlRGV0ZWN0aW9uID0gb3B0aW9ucz8uc2lsZW5jZURldGVjdGlvbiAhPT0gZmFsc2VcblxuICAvLyBSZWNvcmQgcmF3IFBDTTogMTYga0h6LCAxNi1iaXQgc2lnbmVkLCBtb25vLCB0byBzdGRvdXQuXG4gIC8vIC0tYnVmZmVyIDEwMjQgZm9yY2VzIFNvWCB0byBmbHVzaCBhdWRpbyBpbiBzbWFsbCBjaHVua3MgaW5zdGVhZCBvZlxuICAvLyBhY2N1bXVsYXRpbmcgZGF0YSBpbiBpdHMgaW50ZXJuYWwgYnVmZmVyLiBXaXRob3V0IHRoaXMsIFNvWCBtYXkgYnVmZmVyXG4gIC8vIHNldmVyYWwgc2Vjb25kcyBvZiBhdWRpbyBiZWZvcmUgd3JpdGluZyBhbnl0aGluZyB0byBzdGRvdXQgd2hlbiBwaXBlZCxcbiAgLy8gY2F1c2luZyB6ZXJvIGRhdGEgZmxvdyB1bnRpbCB0aGUgcHJvY2VzcyBleGl0cy5cbiAgY29uc3QgYXJncyA9IFtcbiAgICAnLXEnLCAvLyBxdWlldFxuICAgICctLWJ1ZmZlcicsXG4gICAgJzEwMjQnLFxuICAgICctdCcsXG4gICAgJ3JhdycsXG4gICAgJy1yJyxcbiAgICBTdHJpbmcoUkVDT1JESU5HX1NBTVBMRV9SQVRFKSxcbiAgICAnLWUnLFxuICAgICdzaWduZWQnLFxuICAgICctYicsXG4gICAgJzE2JyxcbiAgICAnLWMnLFxuICAgIFN0cmluZyhSRUNPUkRJTkdfQ0hBTk5FTFMpLFxuICAgICctJywgLy8gc3Rkb3V0XG4gIF1cblxuICAvLyBBZGQgc2lsZW5jZSBkZXRlY3Rpb24gZmlsdGVyIChhdXRvLXN0b3Agb24gc2lsZW5jZSkuXG4gIC8vIE9taXQgZm9yIHB1c2gtdG8tdGFsayB3aGVyZSB0aGUgdXNlciBtYW51YWxseSBjb250cm9scyBzdGFydC9zdG9wLlxuICBpZiAodXNlU2lsZW5jZURldGVjdGlvbikge1xuICAgIGFyZ3MucHVzaChcbiAgICAgICdzaWxlbmNlJywgLy8gc3RhcnQvc3RvcCBvbiBzaWxlbmNlXG4gICAgICAnMScsXG4gICAgICAnMC4xJyxcbiAgICAgIFNJTEVOQ0VfVEhSRVNIT0xELFxuICAgICAgJzEnLFxuICAgICAgU0lMRU5DRV9EVVJBVElPTl9TRUNTLFxuICAgICAgU0lMRU5DRV9USFJFU0hPTEQsXG4gICAgKVxuICB9XG5cbiAgY29uc3QgY2hpbGQgPSBzcGF3bigncmVjJywgYXJncywge1xuICAgIHN0ZGlvOiBbJ3BpcGUnLCAncGlwZScsICdwaXBlJ10sXG4gIH0pXG5cbiAgYWN0aXZlUmVjb3JkZXIgPSBjaGlsZFxuXG4gIGNoaWxkLnN0ZG91dD8ub24oJ2RhdGEnLCAoY2h1bms6IEJ1ZmZlcikgPT4ge1xuICAgIG9uRGF0YShjaHVuaylcbiAgfSlcblxuICAvLyBDb25zdW1lIHN0ZGVyciB0byBwcmV2ZW50IGJhY2twcmVzc3VyZVxuICBjaGlsZC5zdGRlcnI/Lm9uKCdkYXRhJywgKCkgPT4ge30pXG5cbiAgY2hpbGQub24oJ2Nsb3NlJywgKCkgPT4ge1xuICAgIGFjdGl2ZVJlY29yZGVyID0gbnVsbFxuICAgIG9uRW5kKClcbiAgfSlcblxuICBjaGlsZC5vbignZXJyb3InLCBlcnIgPT4ge1xuICAgIGxvZ0Vycm9yKGVycilcbiAgICBhY3RpdmVSZWNvcmRlciA9IG51bGxcbiAgICBvbkVuZCgpXG4gIH0pXG5cbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gc3RhcnRBcmVjb3JkUmVjb3JkaW5nKFxuICBvbkRhdGE6IChjaHVuazogQnVmZmVyKSA9PiB2b2lkLFxuICBvbkVuZDogKCkgPT4gdm9pZCxcbik6IGJvb2xlYW4ge1xuICAvLyBSZWNvcmQgcmF3IFBDTTogMTYga0h6LCAxNi1iaXQgc2lnbmVkIGxpdHRsZS1lbmRpYW4sIG1vbm8sIHRvIHN0ZG91dC5cbiAgLy8gYXJlY29yZCBkb2VzIG5vdCBzdXBwb3J0IGJ1aWx0LWluIHNpbGVuY2UgZGV0ZWN0aW9uLCBzbyB0aGlzIGJhY2tlbmRcbiAgLy8gaXMgYmVzdCBzdWl0ZWQgZm9yIHB1c2gtdG8tdGFsayAoc2lsZW5jZURldGVjdGlvbjogZmFsc2UpLlxuICBjb25zdCBhcmdzID0gW1xuICAgICctZicsXG4gICAgJ1MxNl9MRScsIC8vIHNpZ25lZCAxNi1iaXQgbGl0dGxlLWVuZGlhblxuICAgICctcicsXG4gICAgU3RyaW5nKFJFQ09SRElOR19TQU1QTEVfUkFURSksXG4gICAgJy1jJyxcbiAgICBTdHJpbmcoUkVDT1JESU5HX0NIQU5ORUxTKSxcbiAgICAnLXQnLFxuICAgICdyYXcnLCAvLyByYXcgUENNLCBubyBXQVYgaGVhZGVyXG4gICAgJy1xJywgLy8gcXVpZXQgXHUyMDE0IG5vIHByb2dyZXNzIG91dHB1dFxuICAgICctJywgLy8gd3JpdGUgdG8gc3Rkb3V0XG4gIF1cblxuICBjb25zdCBjaGlsZCA9IHNwYXduKCdhcmVjb3JkJywgYXJncywge1xuICAgIHN0ZGlvOiBbJ3BpcGUnLCAncGlwZScsICdwaXBlJ10sXG4gIH0pXG5cbiAgYWN0aXZlUmVjb3JkZXIgPSBjaGlsZFxuXG4gIGNoaWxkLnN0ZG91dD8ub24oJ2RhdGEnLCAoY2h1bms6IEJ1ZmZlcikgPT4ge1xuICAgIG9uRGF0YShjaHVuaylcbiAgfSlcblxuICAvLyBDb25zdW1lIHN0ZGVyciB0byBwcmV2ZW50IGJhY2twcmVzc3VyZVxuICBjaGlsZC5zdGRlcnI/Lm9uKCdkYXRhJywgKCkgPT4ge30pXG5cbiAgY2hpbGQub24oJ2Nsb3NlJywgKCkgPT4ge1xuICAgIGFjdGl2ZVJlY29yZGVyID0gbnVsbFxuICAgIG9uRW5kKClcbiAgfSlcblxuICBjaGlsZC5vbignZXJyb3InLCBlcnIgPT4ge1xuICAgIGxvZ0Vycm9yKGVycilcbiAgICBhY3RpdmVSZWNvcmRlciA9IG51bGxcbiAgICBvbkVuZCgpXG4gIH0pXG5cbiAgcmV0dXJuIHRydWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3BSZWNvcmRpbmcoKTogdm9pZCB7XG4gIGlmIChuYXRpdmVSZWNvcmRpbmdBY3RpdmUgJiYgYXVkaW9OYXBpKSB7XG4gICAgYXVkaW9OYXBpLnN0b3BOYXRpdmVSZWNvcmRpbmcoKVxuICAgIG5hdGl2ZVJlY29yZGluZ0FjdGl2ZSA9IGZhbHNlXG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKGFjdGl2ZVJlY29yZGVyKSB7XG4gICAgYWN0aXZlUmVjb3JkZXIua2lsbCgnU0lHVEVSTScpXG4gICAgYWN0aXZlUmVjb3JkZXIgPSBudWxsXG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsU0FBNEIsT0FBTyxpQkFBaUI7QUFDcEQsU0FBUyxnQkFBZ0I7QUFnQnpCLFNBQVMsZ0JBQW9DO0FBQzNDLHdCQUFzQixZQUFZO0FBQ2hDLFVBQU0sS0FBSyxLQUFLLElBQUk7QUFDcEIsVUFBTSxNQUFNLE1BQU0sT0FBTyxtQ0FBb0I7QUFHN0MsUUFBSSx1QkFBdUI7QUFDM0IsZ0JBQVk7QUFDWixvQkFBZ0Isd0NBQXdDLEtBQUssSUFBSSxJQUFJLEVBQUUsSUFBSTtBQUMzRSxXQUFPO0FBQUEsRUFDVCxHQUFHO0FBQ0gsU0FBTztBQUNUO0FBYUEsU0FBUyxXQUFXLEtBQXNCO0FBT3hDLFFBQU0sU0FBUyxVQUFVLEtBQUssQ0FBQyxXQUFXLEdBQUc7QUFBQSxJQUMzQyxPQUFPO0FBQUEsSUFDUCxTQUFTO0FBQUEsRUFDWCxDQUFDO0FBQ0QsU0FBTyxPQUFPLFVBQVU7QUFDMUI7QUFjQSxTQUFTLGVBQTRDO0FBQ25ELG1CQUFpQixJQUFJLFFBQVEsYUFBVztBQUN0QyxVQUFNLFFBQVE7QUFBQSxNQUNaO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0EsT0FBTyxxQkFBcUI7QUFBQSxRQUM1QjtBQUFBLFFBQ0EsT0FBTyxrQkFBa0I7QUFB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
