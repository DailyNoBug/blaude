#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  API_RESIZE_PARAMS,
  init_ant_computer_use_mcp,
  targetImageSize
} from "./chunk-ABRSTIS2.mjs";
import {
  drainRunLoop,
  init_drainRunLoop,
  init_escHotkey,
  init_swiftLoader,
  notifyExpectedEscape,
  requireComputerUseSwift
} from "./chunk-NE3WJ556.mjs";
import {
  CLI_CU_CAPABILITIES,
  CLI_HOST_BUNDLE_ID,
  getTerminalBundleId,
  init_common
} from "./chunk-H3V45RZC.mjs";
import {
  init_sleep,
  sleep
} from "./chunk-DQ5JTCOA.mjs";
import {
  execFileNoThrow,
  init_execFileNoThrow
} from "./chunk-IVTTVOOG.mjs";
import {
  errorMessage,
  init_debug,
  init_errors,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import {
  __esm,
  __export,
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// scripts/shims/ant-computer-use-input.mjs
var ant_computer_use_input_exports = {};
__export(ant_computer_use_input_exports, {
  click: () => click,
  key: () => key,
  keys: () => keys,
  moveMouse: () => moveMouse
});
function click() {
  throw new Error("computer use input is unavailable in this runtime");
}
function key() {
  throw new Error("computer use input is unavailable in this runtime");
}
function keys() {
  throw new Error("computer use input is unavailable in this runtime");
}
function moveMouse() {
  throw new Error("computer use input is unavailable in this runtime");
}
var init_ant_computer_use_input = __esm({
  "scripts/shims/ant-computer-use-input.mjs"() {
  }
});

// src/utils/computerUse/inputLoader.ts
function requireComputerUseInput() {
  if (cached) return cached;
  const input = (init_ant_computer_use_input(), __toCommonJS(ant_computer_use_input_exports));
  if (!input.isSupported) {
    throw new Error("@ant/computer-use-input is not supported on this platform");
  }
  return cached = input;
}
var cached;
var init_inputLoader = __esm({
  "src/utils/computerUse/inputLoader.ts"() {
  }
});

// src/utils/computerUse/executor.ts
function computeTargetDims(logicalW, logicalH, scaleFactor) {
  const physW = Math.round(logicalW * scaleFactor);
  const physH = Math.round(logicalH * scaleFactor);
  return targetImageSize(physW, physH, API_RESIZE_PARAMS);
}
async function readClipboardViaPbpaste() {
  const { stdout, code } = await execFileNoThrow("pbpaste", [], {
    useCwd: false
  });
  if (code !== 0) {
    throw new Error(`pbpaste exited with code ${code}`);
  }
  return stdout;
}
async function writeClipboardViaPbcopy(text) {
  const { code } = await execFileNoThrow("pbcopy", [], {
    input: text,
    useCwd: false
  });
  if (code !== 0) {
    throw new Error(`pbcopy exited with code ${code}`);
  }
}
function isBareEscape(parts) {
  if (parts.length !== 1) return false;
  const lower = parts[0].toLowerCase();
  return lower === "escape" || lower === "esc";
}
async function moveAndSettle(input, x, y) {
  await input.moveMouse(x, y, false);
  await sleep(MOVE_SETTLE_MS);
}
async function releasePressed(input, pressed) {
  let k;
  while ((k = pressed.pop()) !== void 0) {
    try {
      await input.key(k, "release");
    } catch {
    }
  }
}
async function withModifiers(input, mods, fn) {
  const pressed = [];
  try {
    for (const m of mods) {
      await input.key(m, "press");
      pressed.push(m);
    }
    return await fn();
  } finally {
    await releasePressed(input, pressed);
  }
}
async function typeViaClipboard(input, text) {
  let saved;
  try {
    saved = await readClipboardViaPbpaste();
  } catch {
    logForDebugging(
      "[computer-use] pbpaste before paste failed; proceeding without restore"
    );
  }
  try {
    await writeClipboardViaPbcopy(text);
    if (await readClipboardViaPbpaste() !== text) {
      throw new Error("Clipboard write did not round-trip.");
    }
    await input.keys(["command", "v"]);
    await sleep(100);
  } finally {
    if (typeof saved === "string") {
      try {
        await writeClipboardViaPbcopy(saved);
      } catch {
        logForDebugging("[computer-use] clipboard restore after paste failed");
      }
    }
  }
}
async function animatedMove(input, targetX, targetY, mouseAnimationEnabled) {
  if (!mouseAnimationEnabled) {
    await moveAndSettle(input, targetX, targetY);
    return;
  }
  const start = await input.mouseLocation();
  const deltaX = targetX - start.x;
  const deltaY = targetY - start.y;
  const distance = Math.hypot(deltaX, deltaY);
  if (distance < 1) return;
  const durationSec = Math.min(distance / 2e3, 0.5);
  if (durationSec < 0.03) {
    await moveAndSettle(input, targetX, targetY);
    return;
  }
  const frameRate = 60;
  const frameIntervalMs = 1e3 / frameRate;
  const totalFrames = Math.floor(durationSec * frameRate);
  for (let frame = 1; frame <= totalFrames; frame++) {
    const t = frame / totalFrames;
    const eased = 1 - Math.pow(1 - t, 3);
    await input.moveMouse(
      Math.round(start.x + deltaX * eased),
      Math.round(start.y + deltaY * eased),
      false
    );
    if (frame < totalFrames) {
      await sleep(frameIntervalMs);
    }
  }
  await sleep(MOVE_SETTLE_MS);
}
function createCliExecutor(opts) {
  if (process.platform !== "darwin") {
    throw new Error(
      `createCliExecutor called on ${process.platform}. Computer control is macOS-only.`
    );
  }
  const cu = requireComputerUseSwift();
  const { getMouseAnimationEnabled, getHideBeforeActionEnabled } = opts;
  const terminalBundleId = getTerminalBundleId();
  const surrogateHost = terminalBundleId ?? CLI_HOST_BUNDLE_ID;
  const withoutTerminal = (allowed) => terminalBundleId === null ? [...allowed] : allowed.filter((id) => id !== terminalBundleId);
  logForDebugging(
    terminalBundleId ? `[computer-use] terminal ${terminalBundleId} \u2192 surrogate host (hide-exempt, activate-skip, screenshot-excluded)` : "[computer-use] terminal not detected; falling back to sentinel host"
  );
  return {
    capabilities: {
      ...CLI_CU_CAPABILITIES,
      hostBundleId: CLI_HOST_BUNDLE_ID
    },
    // ── Pre-action sequence (hide + defocus) ────────────────────────────
    async prepareForAction(allowlistBundleIds, displayId) {
      if (!getHideBeforeActionEnabled()) {
        return [];
      }
      return drainRunLoop(async () => {
        try {
          const result = await cu.apps.prepareDisplay(
            allowlistBundleIds,
            surrogateHost,
            displayId
          );
          if (result.activated) {
            logForDebugging(
              `[computer-use] prepareForAction: activated ${result.activated}`
            );
          }
          return result.hidden;
        } catch (err) {
          logForDebugging(
            `[computer-use] prepareForAction failed; continuing to action: ${errorMessage(err)}`,
            { level: "warn" }
          );
          return [];
        }
      });
    },
    async previewHideSet(allowlistBundleIds, displayId) {
      return cu.apps.previewHideSet(
        [...allowlistBundleIds, surrogateHost],
        displayId
      );
    },
    // ── Display ──────────────────────────────────────────────────────────
    async getDisplaySize(displayId) {
      return cu.display.getSize(displayId);
    },
    async listDisplays() {
      return cu.display.listAll();
    },
    async findWindowDisplays(bundleIds) {
      return cu.apps.findWindowDisplays(bundleIds);
    },
    async resolvePrepareCapture(opts2) {
      const d = cu.display.getSize(opts2.preferredDisplayId);
      const [targetW, targetH] = computeTargetDims(
        d.width,
        d.height,
        d.scaleFactor
      );
      return drainRunLoop(
        () => cu.resolvePrepareCapture(
          withoutTerminal(opts2.allowedBundleIds),
          surrogateHost,
          SCREENSHOT_JPEG_QUALITY,
          targetW,
          targetH,
          opts2.preferredDisplayId,
          opts2.autoResolve,
          opts2.doHide
        )
      );
    },
    /**
     * Pre-size to `targetImageSize` output so the API transcoder's early-return
     * fires — no server-side resize, `scaleCoord` stays coherent. See
     * packages/desktop/computer-use-mcp/COORDINATES.md.
     */
    async screenshot(opts2) {
      const d = cu.display.getSize(opts2.displayId);
      const [targetW, targetH] = computeTargetDims(
        d.width,
        d.height,
        d.scaleFactor
      );
      return drainRunLoop(
        () => cu.screenshot.captureExcluding(
          withoutTerminal(opts2.allowedBundleIds),
          SCREENSHOT_JPEG_QUALITY,
          targetW,
          targetH,
          opts2.displayId
        )
      );
    },
    async zoom(regionLogical, allowedBundleIds, displayId) {
      const d = cu.display.getSize(displayId);
      const [outW, outH] = computeTargetDims(
        regionLogical.w,
        regionLogical.h,
        d.scaleFactor
      );
      return drainRunLoop(
        () => cu.screenshot.captureRegion(
          withoutTerminal(allowedBundleIds),
          regionLogical.x,
          regionLogical.y,
          regionLogical.w,
          regionLogical.h,
          outW,
          outH,
          SCREENSHOT_JPEG_QUALITY,
          displayId
        )
      );
    },
    // ── Keyboard ─────────────────────────────────────────────────────────
    /**
     * xdotool-style sequence e.g. "ctrl+shift+a" → split on '+' and pass to
     * keys(). keys() dispatches to DispatchQueue.main — drainRunLoop pumps
     * CFRunLoop so it resolves. Rust's error-path cleanup (enigo_wrap.rs)
     * releases modifiers on each invocation, so a mid-loop throw leaves
     * nothing stuck. 8ms between iterations — 125Hz USB polling cadence.
     */
    async key(keySequence, repeat) {
      const input = requireComputerUseInput();
      const parts = keySequence.split("+").filter((p) => p.length > 0);
      const isEsc = isBareEscape(parts);
      const n = repeat ?? 1;
      await drainRunLoop(async () => {
        for (let i = 0; i < n; i++) {
          if (i > 0) {
            await sleep(8);
          }
          if (isEsc) {
            notifyExpectedEscape();
          }
          await input.keys(parts);
        }
      });
    },
    async holdKey(keyNames, durationMs) {
      const input = requireComputerUseInput();
      const pressed = [];
      let orphaned = false;
      try {
        await drainRunLoop(async () => {
          for (const k of keyNames) {
            if (orphaned) return;
            if (isBareEscape([k])) {
              notifyExpectedEscape();
            }
            await input.key(k, "press");
            pressed.push(k);
          }
        });
        await sleep(durationMs);
      } finally {
        orphaned = true;
        await drainRunLoop(() => releasePressed(input, pressed));
      }
    },
    async type(text, opts2) {
      const input = requireComputerUseInput();
      if (opts2.viaClipboard) {
        await drainRunLoop(() => typeViaClipboard(input, text));
        return;
      }
      await input.typeText(text);
    },
    readClipboard: readClipboardViaPbpaste,
    writeClipboard: writeClipboardViaPbcopy,
    // ── Mouse ────────────────────────────────────────────────────────────
    async moveMouse(x, y) {
      await moveAndSettle(requireComputerUseInput(), x, y);
    },
    /**
     * Move, then click. Modifiers are press/release bracketed via withModifiers
     * — same pattern as Cowork. AppKit computes NSEvent.clickCount from timing
     * + position proximity, so double/triple click work without setting the
     * CGEvent clickState field. key() inside withModifiers needs the pump;
     * the modifier-less path doesn't.
     */
    async click(x, y, button, count, modifiers) {
      const input = requireComputerUseInput();
      await moveAndSettle(input, x, y);
      if (modifiers && modifiers.length > 0) {
        await drainRunLoop(
          () => withModifiers(
            input,
            modifiers,
            () => input.mouseButton(button, "click", count)
          )
        );
      } else {
        await input.mouseButton(button, "click", count);
      }
    },
    async mouseDown() {
      await requireComputerUseInput().mouseButton("left", "press");
    },
    async mouseUp() {
      await requireComputerUseInput().mouseButton("left", "release");
    },
    async getCursorPosition() {
      return requireComputerUseInput().mouseLocation();
    },
    /**
     * `from === undefined` → drag from current cursor (training's
     * left_click_drag with start_coordinate omitted). Inner `finally`: the
     * button is ALWAYS released even if the move throws — otherwise the
     * user's left button is stuck-pressed until they physically click.
     * 50ms sleep after press: enigo's move_mouse reads NSEvent.pressedMouseButtons
     * to decide .leftMouseDragged vs .mouseMoved; the synthetic leftMouseDown
     * needs a HID-tap round-trip to show up there.
     */
    async drag(from, to) {
      const input = requireComputerUseInput();
      if (from !== void 0) {
        await moveAndSettle(input, from.x, from.y);
      }
      await input.mouseButton("left", "press");
      await sleep(MOVE_SETTLE_MS);
      try {
        await animatedMove(input, to.x, to.y, getMouseAnimationEnabled());
      } finally {
        await input.mouseButton("left", "release");
      }
    },
    /**
     * Move first, then scroll each axis. Vertical-first — it's the common
     * axis; a horizontal failure shouldn't lose the vertical.
     */
    async scroll(x, y, dx, dy) {
      const input = requireComputerUseInput();
      await moveAndSettle(input, x, y);
      if (dy !== 0) {
        await input.mouseScroll(dy, "vertical");
      }
      if (dx !== 0) {
        await input.mouseScroll(dx, "horizontal");
      }
    },
    // ── App management ───────────────────────────────────────────────────
    async getFrontmostApp() {
      const info = requireComputerUseInput().getFrontmostAppInfo();
      if (!info || !info.bundleId) return null;
      return { bundleId: info.bundleId, displayName: info.appName };
    },
    async appUnderPoint(x, y) {
      return cu.apps.appUnderPoint(x, y);
    },
    async listInstalledApps() {
      return drainRunLoop(() => cu.apps.listInstalled());
    },
    async getAppIcon(path) {
      return cu.apps.iconDataUrl(path) ?? void 0;
    },
    async listRunningApps() {
      return cu.apps.listRunning();
    },
    async openApp(bundleId) {
      await cu.apps.open(bundleId);
    }
  };
}
async function unhideComputerUseApps(bundleIds) {
  if (bundleIds.length === 0) return;
  const cu = requireComputerUseSwift();
  await cu.apps.unhide([...bundleIds]);
}
var SCREENSHOT_JPEG_QUALITY, MOVE_SETTLE_MS;
var init_executor = __esm({
  "src/utils/computerUse/executor.ts"() {
    init_ant_computer_use_mcp();
    init_debug();
    init_errors();
    init_execFileNoThrow();
    init_sleep();
    init_common();
    init_drainRunLoop();
    init_escHotkey();
    init_inputLoader();
    init_swiftLoader();
    SCREENSHOT_JPEG_QUALITY = 0.75;
    MOVE_SETTLE_MS = 50;
  }
});

export {
  createCliExecutor,
  unhideComputerUseApps,
  init_executor
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc2NyaXB0cy9zaGltcy9hbnQtY29tcHV0ZXItdXNlLWlucHV0Lm1qcyIsICIuLi8uLi9zcmMvdXRpbHMvY29tcHV0ZXJVc2UvaW5wdXRMb2FkZXIudHMiLCAiLi4vLi4vc3JjL3V0aWxzL2NvbXB1dGVyVXNlL2V4ZWN1dG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgZnVuY3Rpb24gY2xpY2soKSB7XG4gIHRocm93IG5ldyBFcnJvcihcImNvbXB1dGVyIHVzZSBpbnB1dCBpcyB1bmF2YWlsYWJsZSBpbiB0aGlzIHJ1bnRpbWVcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBrZXkoKSB7XG4gIHRocm93IG5ldyBFcnJvcihcImNvbXB1dGVyIHVzZSBpbnB1dCBpcyB1bmF2YWlsYWJsZSBpbiB0aGlzIHJ1bnRpbWVcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBrZXlzKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJjb21wdXRlciB1c2UgaW5wdXQgaXMgdW5hdmFpbGFibGUgaW4gdGhpcyBydW50aW1lXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW92ZU1vdXNlKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJjb21wdXRlciB1c2UgaW5wdXQgaXMgdW5hdmFpbGFibGUgaW4gdGhpcyBydW50aW1lXCIpO1xufVxuIiwgImltcG9ydCB0eXBlIHtcbiAgQ29tcHV0ZXJVc2VJbnB1dCxcbiAgQ29tcHV0ZXJVc2VJbnB1dEFQSSxcbn0gZnJvbSAnQGFudC9jb21wdXRlci11c2UtaW5wdXQnXG5cbmxldCBjYWNoZWQ6IENvbXB1dGVyVXNlSW5wdXRBUEkgfCB1bmRlZmluZWRcblxuLyoqXG4gKiBQYWNrYWdlJ3MganMvaW5kZXguanMgcmVhZHMgQ09NUFVURVJfVVNFX0lOUFVUX05PREVfUEFUSCAoYmFrZWQgYnlcbiAqIGJ1aWxkLXdpdGgtcGx1Z2lucy50cyBvbiBkYXJ3aW4gdGFyZ2V0cywgdW5zZXQgb3RoZXJ3aXNlIFx1MjAxNCBmYWxscyB0aHJvdWdoIHRvXG4gKiB0aGUgbm9kZV9tb2R1bGVzIHByZWJ1aWxkcy8gcGF0aCkuXG4gKlxuICogVGhlIHBhY2thZ2UgZXhwb3J0cyBhIGRpc2NyaW1pbmF0ZWQgdW5pb24gb24gYGlzU3VwcG9ydGVkYCBcdTIwMTQgbmFycm93ZWQgaGVyZVxuICogb25jZSBzbyBjYWxsZXJzIGdldCB0aGUgYmFyZSBgQ29tcHV0ZXJVc2VJbnB1dEFQSWAgd2l0aG91dCByZS1jaGVja2luZy5cbiAqXG4gKiBrZXkoKS9rZXlzKCkgZGlzcGF0Y2ggZW5pZ28gd29yayBvbnRvIERpc3BhdGNoUXVldWUubWFpbiB2aWFcbiAqIGRpc3BhdGNoMjo6cnVuX29uX21haW4sIHRoZW4gYmxvY2sgYSB0b2tpbyB3b3JrZXIgb24gYSBjaGFubmVsLiBVbmRlclxuICogRWxlY3Ryb24gKENGUnVuTG9vcCBkcmFpbnMgdGhlIG1haW4gcXVldWUpIHRoaXMgd29ya3M7IHVuZGVyIGxpYnV2XG4gKiAoTm9kZS9idW4pIHRoZSBtYWluIHF1ZXVlIG5ldmVyIGRyYWlucyBhbmQgdGhlIHByb21pc2UgaGFuZ3MuIFRoZSBleGVjdXRvclxuICogY2FsbHMgdGhlc2UgaW5zaWRlIGRyYWluUnVuTG9vcCgpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVxdWlyZUNvbXB1dGVyVXNlSW5wdXQoKTogQ29tcHV0ZXJVc2VJbnB1dEFQSSB7XG4gIGlmIChjYWNoZWQpIHJldHVybiBjYWNoZWRcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHNcbiAgY29uc3QgaW5wdXQgPSByZXF1aXJlKCdAYW50L2NvbXB1dGVyLXVzZS1pbnB1dCcpIGFzIENvbXB1dGVyVXNlSW5wdXRcbiAgaWYgKCFpbnB1dC5pc1N1cHBvcnRlZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQGFudC9jb21wdXRlci11c2UtaW5wdXQgaXMgbm90IHN1cHBvcnRlZCBvbiB0aGlzIHBsYXRmb3JtJylcbiAgfVxuICByZXR1cm4gKGNhY2hlZCA9IGlucHV0KVxufVxuIiwgIi8qKlxuICogQ0xJIGBDb21wdXRlckV4ZWN1dG9yYCBpbXBsZW1lbnRhdGlvbi4gV3JhcHMgdHdvIG5hdGl2ZSBtb2R1bGVzOlxuICogICAtIGBAYW50L2NvbXB1dGVyLXVzZS1pbnB1dGAgKFJ1c3QvZW5pZ28pIFx1MjAxNCBtb3VzZSwga2V5Ym9hcmQsIGZyb250bW9zdCBhcHBcbiAqICAgLSBgQGFudC9jb21wdXRlci11c2Utc3dpZnRgIFx1MjAxNCBTQ0NvbnRlbnRGaWx0ZXIgc2NyZWVuc2hvdHMsIE5TV29ya3NwYWNlIGFwcHMsIFRDQ1xuICpcbiAqIENvbnRyYWN0OiBgcGFja2FnZXMvZGVza3RvcC9jb21wdXRlci11c2UtbWNwL3NyYy9leGVjdXRvci50c2AgaW4gdGhlIGFwcHNcbiAqIHJlcG8uIFRoZSByZWZlcmVuY2UgaW1wbCBpcyBDb3dvcmsncyBgYXBwcy9kZXNrdG9wL3NyYy9tYWluL25lc3Qtb25seS9cbiAqIGNvbXB1dGVyLXVzZS9leGVjdXRvci50c2AgXHUyMDE0IHNlZSBub3RhYmxlIGRldmlhdGlvbnMgdW5kZXIgXCJDTEkgZGVsdGFzXCIgYmVsb3cuXG4gKlxuICogXHUyNTAwXHUyNTAwIENMSSBkZWx0YXMgZnJvbSBDb3dvcmsgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG4gKlxuICogTm8gYHdpdGhDbGlja1Rocm91Z2hgLiBDb3dvcmsgd3JhcHMgZXZlcnkgbW91c2Ugb3AgaW5cbiAqICAgYEJyb3dzZXJXaW5kb3cuc2V0SWdub3JlTW91c2VFdmVudHModHJ1ZSlgIHNvIGNsaWNrcyBmYWxsIHRocm91Z2ggdGhlXG4gKiAgIG92ZXJsYXkuIFdlJ3JlIGEgdGVybWluYWwgXHUyMDE0IG5vIHdpbmRvdyBcdTIwMTQgc28gdGhlIGNsaWNrLXRocm91Z2ggYnJhY2tldCBpc1xuICogICBhIG5vLW9wLiBUaGUgc2VudGluZWwgYENMSV9IT1NUX0JVTkRMRV9JRGAgbmV2ZXIgbWF0Y2hlcyBmcm9udG1vc3QuXG4gKlxuICogVGVybWluYWwgYXMgc3Vycm9nYXRlIGhvc3QuIGBnZXRUZXJtaW5hbEJ1bmRsZUlkKClgIGRldGVjdHMgdGhlIGVtdWxhdG9yXG4gKiAgIHdlJ3JlIHJ1bm5pbmcgaW5zaWRlLiBJdCdzIHBhc3NlZCBhcyBgaG9zdEJ1bmRsZUlkYCB0byBgcHJlcGFyZURpc3BsYXlgL1xuICogICBgcmVzb2x2ZVByZXBhcmVDYXB0dXJlYCBzbyB0aGUgU3dpZnQgc2lkZSBleGVtcHRzIGl0IGZyb20gaGlkZSBBTkQgc2tpcHNcbiAqICAgaXQgaW4gdGhlIGFjdGl2YXRlIHotb3JkZXIgd2FsayAoc28gdGhlIHRlcm1pbmFsIGJlaW5nIGZyb250bW9zdCBkb2Vzbid0XG4gKiAgIGVhdCBjbGlja3MgbWVhbnQgZm9yIHRoZSB0YXJnZXQgYXBwKS4gQWxzbyBzdHJpcHBlZCBmcm9tIGBhbGxvd2VkQnVuZGxlSWRzYFxuICogICB2aWEgYHdpdGhvdXRUZXJtaW5hbCgpYCBzbyBzY3JlZW5zaG90cyBkb24ndCBjYXB0dXJlIGl0IChTd2lmdCAwLjIuMSdzXG4gKiAgIGNhcHR1cmVFeGNsdWRpbmcgdGFrZXMgYW4gYWxsb3ctbGlzdCBkZXNwaXRlIHRoZSBuYW1lIFx1MjAxNCBhcHBzIzMwMzU1KS5cbiAqICAgYGNhcGFiaWxpdGllcy5ob3N0QnVuZGxlSWRgIHN0YXlzIGFzIHRoZSBzZW50aW5lbCBcdTIwMTQgdGhlIHBhY2thZ2Unc1xuICogICBmcm9udG1vc3QgZ2F0ZSB1c2VzIHRoYXQsIGFuZCB0aGUgdGVybWluYWwgYmVpbmcgZnJvbnRtb3N0IGlzIGZpbmUuXG4gKlxuICogQ2xpcGJvYXJkIHZpYSBgcGJjb3B5YC9gcGJwYXN0ZWAuIE5vIEVsZWN0cm9uIGBjbGlwYm9hcmRgIG1vZHVsZS5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7XG4gIENvbXB1dGVyRXhlY3V0b3IsXG4gIERpc3BsYXlHZW9tZXRyeSxcbiAgRnJvbnRtb3N0QXBwLFxuICBJbnN0YWxsZWRBcHAsXG4gIFJlc29sdmVQcmVwYXJlQ2FwdHVyZVJlc3VsdCxcbiAgUnVubmluZ0FwcCxcbiAgU2NyZWVuc2hvdFJlc3VsdCxcbn0gZnJvbSAnQGFudC9jb21wdXRlci11c2UtbWNwJ1xuXG5pbXBvcnQgeyBBUElfUkVTSVpFX1BBUkFNUywgdGFyZ2V0SW1hZ2VTaXplIH0gZnJvbSAnQGFudC9jb21wdXRlci11c2UtbWNwJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi4vZGVidWcuanMnXG5pbXBvcnQgeyBlcnJvck1lc3NhZ2UgfSBmcm9tICcuLi9lcnJvcnMuanMnXG5pbXBvcnQgeyBleGVjRmlsZU5vVGhyb3cgfSBmcm9tICcuLi9leGVjRmlsZU5vVGhyb3cuanMnXG5pbXBvcnQgeyBzbGVlcCB9IGZyb20gJy4uL3NsZWVwLmpzJ1xuaW1wb3J0IHtcbiAgQ0xJX0NVX0NBUEFCSUxJVElFUyxcbiAgQ0xJX0hPU1RfQlVORExFX0lELFxuICBnZXRUZXJtaW5hbEJ1bmRsZUlkLFxufSBmcm9tICcuL2NvbW1vbi5qcydcbmltcG9ydCB7IGRyYWluUnVuTG9vcCB9IGZyb20gJy4vZHJhaW5SdW5Mb29wLmpzJ1xuaW1wb3J0IHsgbm90aWZ5RXhwZWN0ZWRFc2NhcGUgfSBmcm9tICcuL2VzY0hvdGtleS5qcydcbmltcG9ydCB7IHJlcXVpcmVDb21wdXRlclVzZUlucHV0IH0gZnJvbSAnLi9pbnB1dExvYWRlci5qcydcbmltcG9ydCB7IHJlcXVpcmVDb21wdXRlclVzZVN3aWZ0IH0gZnJvbSAnLi9zd2lmdExvYWRlci5qcydcblxuLy8gXHUyNTAwXHUyNTAwIEhlbHBlcnMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cbmNvbnN0IFNDUkVFTlNIT1RfSlBFR19RVUFMSVRZID0gMC43NVxuXG4vKiogTG9naWNhbCBcdTIxOTIgcGh5c2ljYWwgXHUyMTkyIEFQSSB0YXJnZXQgZGltcy4gU2VlIGB0YXJnZXRJbWFnZVNpemVgICsgQ09PUkRJTkFURVMubWQuICovXG5mdW5jdGlvbiBjb21wdXRlVGFyZ2V0RGltcyhcbiAgbG9naWNhbFc6IG51bWJlcixcbiAgbG9naWNhbEg6IG51bWJlcixcbiAgc2NhbGVGYWN0b3I6IG51bWJlcixcbik6IFtudW1iZXIsIG51bWJlcl0ge1xuICBjb25zdCBwaHlzVyA9IE1hdGgucm91bmQobG9naWNhbFcgKiBzY2FsZUZhY3RvcilcbiAgY29uc3QgcGh5c0ggPSBNYXRoLnJvdW5kKGxvZ2ljYWxIICogc2NhbGVGYWN0b3IpXG4gIHJldHVybiB0YXJnZXRJbWFnZVNpemUocGh5c1csIHBoeXNILCBBUElfUkVTSVpFX1BBUkFNUylcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVhZENsaXBib2FyZFZpYVBicGFzdGUoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3QgeyBzdGRvdXQsIGNvZGUgfSA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdygncGJwYXN0ZScsIFtdLCB7XG4gICAgdXNlQ3dkOiBmYWxzZSxcbiAgfSlcbiAgaWYgKGNvZGUgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHBicGFzdGUgZXhpdGVkIHdpdGggY29kZSAke2NvZGV9YClcbiAgfVxuICByZXR1cm4gc3Rkb3V0XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHdyaXRlQ2xpcGJvYXJkVmlhUGJjb3B5KHRleHQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCB7IGNvZGUgfSA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdygncGJjb3B5JywgW10sIHtcbiAgICBpbnB1dDogdGV4dCxcbiAgICB1c2VDd2Q6IGZhbHNlLFxuICB9KVxuICBpZiAoY29kZSAhPT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgcGJjb3B5IGV4aXRlZCB3aXRoIGNvZGUgJHtjb2RlfWApXG4gIH1cbn1cblxudHlwZSBJbnB1dCA9IFJldHVyblR5cGU8dHlwZW9mIHJlcXVpcmVDb21wdXRlclVzZUlucHV0PlxuXG4vKipcbiAqIFNpbmdsZS1lbGVtZW50IGtleSBzZXF1ZW5jZSBtYXRjaGluZyBcImVzY2FwZVwiIG9yIFwiZXNjXCIgKGNhc2UtaW5zZW5zaXRpdmUpLlxuICogVXNlZCB0byBob2xlLXB1bmNoIHRoZSBDR0V2ZW50VGFwIGFib3J0IGZvciBtb2RlbC1zeW50aGVzaXplZCBFc2NhcGUgXHUyMDE0IGVuaWdvXG4gKiBhY2NlcHRzIGJvdGggc3BlbGxpbmdzLCBzbyB0aGUgdGFwIG11c3QgdG9vLlxuICovXG5mdW5jdGlvbiBpc0JhcmVFc2NhcGUocGFydHM6IHJlYWRvbmx5IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gIGlmIChwYXJ0cy5sZW5ndGggIT09IDEpIHJldHVybiBmYWxzZVxuICBjb25zdCBsb3dlciA9IHBhcnRzWzBdIS50b0xvd2VyQ2FzZSgpXG4gIHJldHVybiBsb3dlciA9PT0gJ2VzY2FwZScgfHwgbG93ZXIgPT09ICdlc2MnXG59XG5cbi8qKlxuICogSW5zdGFudCBtb3ZlLCB0aGVuIDUwbXMgXHUyMDE0IGFuIGlucHV0XHUyMTkySElEXHUyMTkyQXBwS2l0XHUyMTkyTlNFdmVudCByb3VuZC10cmlwIGJlZm9yZSB0aGVcbiAqIGNhbGxlciByZWFkcyBgTlNFdmVudC5tb3VzZUxvY2F0aW9uYCBvciBkaXNwYXRjaGVzIGEgY2xpY2suIFVzZWQgZm9yIGNsaWNrLFxuICogc2Nyb2xsLCBhbmQgZHJhZy1mcm9tOyBgYW5pbWF0ZWRNb3ZlYCBpcyByZXNlcnZlZCBmb3IgZHJhZy10byBvbmx5LiBUaGVcbiAqIGludGVybWVkaWF0ZSBhbmltYXRpb24gZnJhbWVzIHdlcmUgdHJpZ2dlcmluZyBob3ZlciBzdGF0ZXMgYW5kLCBvbiB0aGVcbiAqIGRlY29tcG9zZWQgbW91c2VEb3duL21vdmVNb3VzZSBwYXRoLCBlbWl0dGluZyBzdHJheSBgLmxlZnRNb3VzZURyYWdnZWRgXG4gKiBldmVudHMgKHRvb2xDYWxscy50cyBoYW5kbGVTY3JvbGwncyBtb3VzZV9mdWxsIHdvcmthcm91bmQpLlxuICovXG5jb25zdCBNT1ZFX1NFVFRMRV9NUyA9IDUwXG5cbmFzeW5jIGZ1bmN0aW9uIG1vdmVBbmRTZXR0bGUoXG4gIGlucHV0OiBJbnB1dCxcbiAgeDogbnVtYmVyLFxuICB5OiBudW1iZXIsXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgYXdhaXQgaW5wdXQubW92ZU1vdXNlKHgsIHksIGZhbHNlKVxuICBhd2FpdCBzbGVlcChNT1ZFX1NFVFRMRV9NUylcbn1cblxuLyoqXG4gKiBSZWxlYXNlIGBwcmVzc2VkYCBpbiByZXZlcnNlIChsYXN0IHByZXNzZWQgPSBmaXJzdCByZWxlYXNlZCkuIEVycm9ycyBhcmVcbiAqIHN3YWxsb3dlZCBzbyBhIHJlbGVhc2UgZmFpbHVyZSBuZXZlciBtYXNrcyB0aGUgcmVhbCBlcnJvci5cbiAqXG4gKiBEcmFpbnMgdmlhIHBvcCgpIHJhdGhlciB0aGFuIHNuYXBzaG90dGluZyBsZW5ndGg6IGlmIGEgZHJhaW5SdW5Mb29wLVxuICogb3JwaGFuZWQgcHJlc3MgbGFtYmRhIHJlc29sdmVzIGFuIGluLWZsaWdodCBpbnB1dC5rZXkoKSBBRlRFUiBmaW5hbGx5XG4gKiBjYWxscyB1cywgdGhhdCBsYXRlIHB1c2ggaXMgc3RpbGwgcmVsZWFzZWQgb24gdGhlIG5leHQgaXRlcmF0aW9uLiBUaGVcbiAqIG9ycGhhbmVkIGZsYWcgc3RvcHMgdGhlIGxhbWJkYSBhdCBpdHMgTkVYVCBjaGVjaywgbm90IHRoZSBjdXJyZW50IGF3YWl0LlxuICovXG5hc3luYyBmdW5jdGlvbiByZWxlYXNlUHJlc3NlZChpbnB1dDogSW5wdXQsIHByZXNzZWQ6IHN0cmluZ1tdKTogUHJvbWlzZTx2b2lkPiB7XG4gIGxldCBrOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgd2hpbGUgKChrID0gcHJlc3NlZC5wb3AoKSkgIT09IHVuZGVmaW5lZCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBpbnB1dC5rZXkoaywgJ3JlbGVhc2UnKVxuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gU3dhbGxvdyBcdTIwMTQgYmVzdC1lZmZvcnQgcmVsZWFzZS5cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBCcmFja2V0IGBmbigpYCB3aXRoIG1vZGlmaWVyIHByZXNzL3JlbGVhc2UuIGBwcmVzc2VkYCB0cmFja3Mgd2hpY2ggcHJlc3Nlc1xuICogYWN0dWFsbHkgbGFuZGVkLCBzbyBhIG1pZC1wcmVzcyB0aHJvdyBvbmx5IHJlbGVhc2VzIHdoYXQgd2FzIHByZXNzZWQgXHUyMDE0IG5vXG4gKiBzdHVjayBtb2RpZmllcnMuIFRoZSBmaW5hbGx5IGNvdmVycyBib3RoIHByZXNzLXBoYXNlIGFuZCBmbigpIHRocm93cy5cbiAqXG4gKiBDYWxsZXIgbXVzdCBhbHJlYWR5IGJlIGluc2lkZSBkcmFpblJ1bkxvb3AoKSBcdTIwMTQga2V5KCkgZGlzcGF0Y2hlcyB0byB0aGVcbiAqIG1haW4gcXVldWUgYW5kIG5lZWRzIHRoZSBwdW1wIHRvIHJlc29sdmUuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHdpdGhNb2RpZmllcnM8VD4oXG4gIGlucHV0OiBJbnB1dCxcbiAgbW9kczogc3RyaW5nW10sXG4gIGZuOiAoKSA9PiBQcm9taXNlPFQ+LFxuKTogUHJvbWlzZTxUPiB7XG4gIGNvbnN0IHByZXNzZWQ6IHN0cmluZ1tdID0gW11cbiAgdHJ5IHtcbiAgICBmb3IgKGNvbnN0IG0gb2YgbW9kcykge1xuICAgICAgYXdhaXQgaW5wdXQua2V5KG0sICdwcmVzcycpXG4gICAgICBwcmVzc2VkLnB1c2gobSlcbiAgICB9XG4gICAgcmV0dXJuIGF3YWl0IGZuKClcbiAgfSBmaW5hbGx5IHtcbiAgICBhd2FpdCByZWxlYXNlUHJlc3NlZChpbnB1dCwgcHJlc3NlZClcbiAgfVxufVxuXG4vKipcbiAqIFBvcnQgb2YgQ293b3JrJ3MgYHR5cGVWaWFDbGlwYm9hcmRgLiBTZXF1ZW5jZTpcbiAqICAgMS4gU2F2ZSB0aGUgdXNlcidzIGNsaXBib2FyZC5cbiAqICAgMi4gV3JpdGUgb3VyIHRleHQuXG4gKiAgIDMuIFJFQUQtQkFDSyBWRVJJRlkgXHUyMDE0IGNsaXBib2FyZCB3cml0ZXMgY2FuIHNpbGVudGx5IGZhaWwuIElmIHRoZVxuICogICAgICByZWFkLWJhY2sgZG9lc24ndCBtYXRjaCwgbmV2ZXIgcHJlc3MgQ21kK1YgKHdvdWxkIHBhc3RlIGp1bmspLlxuICogICA0LiBDbWQrViB2aWEga2V5cygpLlxuICogICA1LiBTbGVlcCAxMDBtcyBcdTIwMTQgYmF0dGxlLXRlc3RlZCB0aHJlc2hvbGQgZm9yIHRoZSBwYXN0ZS1lZmZlY3QgdnNcbiAqICAgICAgY2xpcGJvYXJkLXJlc3RvcmUgcmFjZS4gUmVzdG9yaW5nIHRvbyBzb29uIG1lYW5zIHRoZSB0YXJnZXQgYXBwXG4gKiAgICAgIHBhc3RlcyB0aGUgUkVTVE9SRUQgY29udGVudC5cbiAqICAgNi4gUmVzdG9yZSBcdTIwMTQgaW4gYSBgZmluYWxseWAsIHNvIGEgdGhyb3cgYmV0d2VlbiAyLTUgbmV2ZXIgbGVhdmVzIHRoZVxuICogICAgICB1c2VyJ3MgY2xpcGJvYXJkIGNsb2JiZXJlZC4gUmVzdG9yZSBmYWlsdXJlcyBhcmUgc3dhbGxvd2VkLlxuICovXG5hc3luYyBmdW5jdGlvbiB0eXBlVmlhQ2xpcGJvYXJkKGlucHV0OiBJbnB1dCwgdGV4dDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIGxldCBzYXZlZDogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIHRyeSB7XG4gICAgc2F2ZWQgPSBhd2FpdCByZWFkQ2xpcGJvYXJkVmlhUGJwYXN0ZSgpXG4gIH0gY2F0Y2gge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICdbY29tcHV0ZXItdXNlXSBwYnBhc3RlIGJlZm9yZSBwYXN0ZSBmYWlsZWQ7IHByb2NlZWRpbmcgd2l0aG91dCByZXN0b3JlJyxcbiAgICApXG4gIH1cblxuICB0cnkge1xuICAgIGF3YWl0IHdyaXRlQ2xpcGJvYXJkVmlhUGJjb3B5KHRleHQpXG4gICAgaWYgKChhd2FpdCByZWFkQ2xpcGJvYXJkVmlhUGJwYXN0ZSgpKSAhPT0gdGV4dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDbGlwYm9hcmQgd3JpdGUgZGlkIG5vdCByb3VuZC10cmlwLicpXG4gICAgfVxuICAgIGF3YWl0IGlucHV0LmtleXMoWydjb21tYW5kJywgJ3YnXSlcbiAgICBhd2FpdCBzbGVlcCgxMDApXG4gIH0gZmluYWxseSB7XG4gICAgaWYgKHR5cGVvZiBzYXZlZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHdyaXRlQ2xpcGJvYXJkVmlhUGJjb3B5KHNhdmVkKVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIGxvZ0ZvckRlYnVnZ2luZygnW2NvbXB1dGVyLXVzZV0gY2xpcGJvYXJkIHJlc3RvcmUgYWZ0ZXIgcGFzdGUgZmFpbGVkJylcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBQb3J0IG9mIENvd29yaydzIGBhbmltYXRlTW91c2VNb3ZlbWVudGAgKyBgYW5pbWF0ZWRNb3ZlYC4gRWFzZS1vdXQtY3ViaWMgYXRcbiAqIDYwZnBzOyBkaXN0YW5jZS1wcm9wb3J0aW9uYWwgZHVyYXRpb24gYXQgMjAwMCBweC9zZWMsIGNhcHBlZCBhdCAwLjVzLiBXaGVuXG4gKiB0aGUgc3ViLWdhdGUgaXMgb2ZmIChvciBkaXN0YW5jZSA8IH4yIGZyYW1lcyksIGZhbGxzIHRocm91Z2ggdG9cbiAqIGBtb3ZlQW5kU2V0dGxlYC4gQ2FsbGVkIG9ubHkgZnJvbSBgZHJhZ2AgZm9yIHRoZSBwcmVzc1x1MjE5MnRvIG1vdGlvbiBcdTIwMTQgdGFyZ2V0XG4gKiBhcHBzIG1heSB3YXRjaCBmb3IgYC5sZWZ0TW91c2VEcmFnZ2VkYCBzcGVjaWZpY2FsbHkgKG5vdCBqdXN0IFwiYnV0dG9uIGRvd24gK1xuICogcG9zaXRpb24gY2hhbmdlZFwiKSBhbmQgdGhlIHNsb3cgbW90aW9uIGdpdmVzIHRoZW0gdGltZSB0byBwcm9jZXNzXG4gKiBpbnRlcm1lZGlhdGUgcG9zaXRpb25zIChzY3JvbGxiYXJzLCB3aW5kb3cgcmVzaXplcykuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFuaW1hdGVkTW92ZShcbiAgaW5wdXQ6IElucHV0LFxuICB0YXJnZXRYOiBudW1iZXIsXG4gIHRhcmdldFk6IG51bWJlcixcbiAgbW91c2VBbmltYXRpb25FbmFibGVkOiBib29sZWFuLFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmICghbW91c2VBbmltYXRpb25FbmFibGVkKSB7XG4gICAgYXdhaXQgbW92ZUFuZFNldHRsZShpbnB1dCwgdGFyZ2V0WCwgdGFyZ2V0WSlcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBzdGFydCA9IGF3YWl0IGlucHV0Lm1vdXNlTG9jYXRpb24oKVxuICBjb25zdCBkZWx0YVggPSB0YXJnZXRYIC0gc3RhcnQueFxuICBjb25zdCBkZWx0YVkgPSB0YXJnZXRZIC0gc3RhcnQueVxuICBjb25zdCBkaXN0YW5jZSA9IE1hdGguaHlwb3QoZGVsdGFYLCBkZWx0YVkpXG4gIGlmIChkaXN0YW5jZSA8IDEpIHJldHVyblxuICBjb25zdCBkdXJhdGlvblNlYyA9IE1hdGgubWluKGRpc3RhbmNlIC8gMjAwMCwgMC41KVxuICBpZiAoZHVyYXRpb25TZWMgPCAwLjAzKSB7XG4gICAgYXdhaXQgbW92ZUFuZFNldHRsZShpbnB1dCwgdGFyZ2V0WCwgdGFyZ2V0WSlcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBmcmFtZVJhdGUgPSA2MFxuICBjb25zdCBmcmFtZUludGVydmFsTXMgPSAxMDAwIC8gZnJhbWVSYXRlXG4gIGNvbnN0IHRvdGFsRnJhbWVzID0gTWF0aC5mbG9vcihkdXJhdGlvblNlYyAqIGZyYW1lUmF0ZSlcbiAgZm9yIChsZXQgZnJhbWUgPSAxOyBmcmFtZSA8PSB0b3RhbEZyYW1lczsgZnJhbWUrKykge1xuICAgIGNvbnN0IHQgPSBmcmFtZSAvIHRvdGFsRnJhbWVzXG4gICAgY29uc3QgZWFzZWQgPSAxIC0gTWF0aC5wb3coMSAtIHQsIDMpXG4gICAgYXdhaXQgaW5wdXQubW92ZU1vdXNlKFxuICAgICAgTWF0aC5yb3VuZChzdGFydC54ICsgZGVsdGFYICogZWFzZWQpLFxuICAgICAgTWF0aC5yb3VuZChzdGFydC55ICsgZGVsdGFZICogZWFzZWQpLFxuICAgICAgZmFsc2UsXG4gICAgKVxuICAgIGlmIChmcmFtZSA8IHRvdGFsRnJhbWVzKSB7XG4gICAgICBhd2FpdCBzbGVlcChmcmFtZUludGVydmFsTXMpXG4gICAgfVxuICB9XG4gIC8vIExhc3QgZnJhbWUgaGFzIG5vIHRyYWlsaW5nIHNsZWVwIFx1MjAxNCBzYW1lIEhJRCByb3VuZC10cmlwIGJlZm9yZSB0aGVcbiAgLy8gY2FsbGVyJ3MgbW91c2VCdXR0b24gcmVhZHMgTlNFdmVudC5tb3VzZUxvY2F0aW9uLlxuICBhd2FpdCBzbGVlcChNT1ZFX1NFVFRMRV9NUylcbn1cblxuLy8gXHUyNTAwXHUyNTAwIEZhY3RvcnkgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDbGlFeGVjdXRvcihvcHRzOiB7XG4gIGdldE1vdXNlQW5pbWF0aW9uRW5hYmxlZDogKCkgPT4gYm9vbGVhblxuICBnZXRIaWRlQmVmb3JlQWN0aW9uRW5hYmxlZDogKCkgPT4gYm9vbGVhblxufSk6IENvbXB1dGVyRXhlY3V0b3Ige1xuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ2RhcndpbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgY3JlYXRlQ2xpRXhlY3V0b3IgY2FsbGVkIG9uICR7cHJvY2Vzcy5wbGF0Zm9ybX0uIENvbXB1dGVyIGNvbnRyb2wgaXMgbWFjT1Mtb25seS5gLFxuICAgIClcbiAgfVxuXG4gIC8vIFN3aWZ0IGxvYWRlZCBvbmNlIGF0IGZhY3RvcnkgdGltZSBcdTIwMTQgZXZlcnkgZXhlY3V0b3IgbWV0aG9kIG5lZWRzIGl0LlxuICAvLyBJbnB1dCBsb2FkZWQgbGF6aWx5IHZpYSByZXF1aXJlQ29tcHV0ZXJVc2VJbnB1dCgpIG9uIGZpcnN0IG1vdXNlL2tleWJvYXJkXG4gIC8vIGNhbGwgXHUyMDE0IGl0IGNhY2hlcyBpbnRlcm5hbGx5LCBzbyBzY3JlZW5zaG90LW9ubHkgZmxvd3MgbmV2ZXIgcHVsbCB0aGVcbiAgLy8gZW5pZ28gLm5vZGUuXG4gIGNvbnN0IGN1ID0gcmVxdWlyZUNvbXB1dGVyVXNlU3dpZnQoKVxuXG4gIGNvbnN0IHsgZ2V0TW91c2VBbmltYXRpb25FbmFibGVkLCBnZXRIaWRlQmVmb3JlQWN0aW9uRW5hYmxlZCB9ID0gb3B0c1xuICBjb25zdCB0ZXJtaW5hbEJ1bmRsZUlkID0gZ2V0VGVybWluYWxCdW5kbGVJZCgpXG4gIGNvbnN0IHN1cnJvZ2F0ZUhvc3QgPSB0ZXJtaW5hbEJ1bmRsZUlkID8/IENMSV9IT1NUX0JVTkRMRV9JRFxuICAvLyBTd2lmdCAwLjIuMSdzIGNhcHR1cmVFeGNsdWRpbmcvY2FwdHVyZVJlZ2lvbiB0YWtlIGFuIEFMTE9XIGxpc3QgZGVzcGl0ZSB0aGVcbiAgLy8gbmFtZSAoYXBwcyMzMDM1NSBcdTIwMTQgY29tcGxlbWVudCBjb21wdXRlZCBTd2lmdC1zaWRlIGFnYWluc3QgcnVubmluZyBhcHBzKS5cbiAgLy8gVGhlIHRlcm1pbmFsIGlzbid0IGluIHRoZSB1c2VyJ3MgZ3JhbnRzIHNvIGl0J3MgbmF0dXJhbGx5IGV4Y2x1ZGVkLCBidXQgaWZcbiAgLy8gdGhlIHBhY2thZ2UgZXZlciBwYXNzZXMgaXQgdGhyb3VnaCB3ZSBzdHJpcCBpdCBoZXJlIHNvIHRoZSB0ZXJtaW5hbCBuZXZlclxuICAvLyBwaG90b2JvbWJzIGEgc2NyZWVuc2hvdC5cbiAgY29uc3Qgd2l0aG91dFRlcm1pbmFsID0gKGFsbG93ZWQ6IHJlYWRvbmx5IHN0cmluZ1tdKTogc3RyaW5nW10gPT5cbiAgICB0ZXJtaW5hbEJ1bmRsZUlkID09PSBudWxsXG4gICAgICA/IFsuLi5hbGxvd2VkXVxuICAgICAgOiBhbGxvd2VkLmZpbHRlcihpZCA9PiBpZCAhPT0gdGVybWluYWxCdW5kbGVJZClcblxuICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgdGVybWluYWxCdW5kbGVJZFxuICAgICAgPyBgW2NvbXB1dGVyLXVzZV0gdGVybWluYWwgJHt0ZXJtaW5hbEJ1bmRsZUlkfSBcdTIxOTIgc3Vycm9nYXRlIGhvc3QgKGhpZGUtZXhlbXB0LCBhY3RpdmF0ZS1za2lwLCBzY3JlZW5zaG90LWV4Y2x1ZGVkKWBcbiAgICAgIDogJ1tjb21wdXRlci11c2VdIHRlcm1pbmFsIG5vdCBkZXRlY3RlZDsgZmFsbGluZyBiYWNrIHRvIHNlbnRpbmVsIGhvc3QnLFxuICApXG5cbiAgcmV0dXJuIHtcbiAgICBjYXBhYmlsaXRpZXM6IHtcbiAgICAgIC4uLkNMSV9DVV9DQVBBQklMSVRJRVMsXG4gICAgICBob3N0QnVuZGxlSWQ6IENMSV9IT1NUX0JVTkRMRV9JRCxcbiAgICB9LFxuXG4gICAgLy8gXHUyNTAwXHUyNTAwIFByZS1hY3Rpb24gc2VxdWVuY2UgKGhpZGUgKyBkZWZvY3VzKSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuICAgIGFzeW5jIHByZXBhcmVGb3JBY3Rpb24oXG4gICAgICBhbGxvd2xpc3RCdW5kbGVJZHM6IHN0cmluZ1tdLFxuICAgICAgZGlzcGxheUlkPzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICAgIGlmICghZ2V0SGlkZUJlZm9yZUFjdGlvbkVuYWJsZWQoKSkge1xuICAgICAgICByZXR1cm4gW11cbiAgICAgIH1cbiAgICAgIC8vIHByZXBhcmVEaXNwbGF5IGlzbid0IEBNYWluQWN0b3IgKHBsYWluIFRhc2t7fSksIGJ1dCBpdHMgLmhpZGUoKSBjYWxsc1xuICAgICAgLy8gdHJpZ2dlciB3aW5kb3ctbWFuYWdlciBldmVudHMgdGhhdCBxdWV1ZSBvbiBDRlJ1bkxvb3AuIFdpdGhvdXQgdGhlXG4gICAgICAvLyBwdW1wLCB0aG9zZSBwaWxlIHVwIGR1cmluZyBTd2lmdCdzIH4xcyBvZiB1c2xlZXBzIGFuZCBmbHVzaCBhbGwgYXRcbiAgICAgIC8vIG9uY2Ugd2hlbiB0aGUgbmV4dCBwdW1wZWQgY2FsbCBydW5zIFx1MjAxNCB2aXNpYmxlIHdpbmRvdyBmbGFzaGluZy5cbiAgICAgIC8vIEVsZWN0cm9uIGRyYWlucyBDRlJ1bkxvb3AgY29udGludW91c2x5IHNvIENvd29yayBkb2Vzbid0IHNlZSB0aGlzLlxuICAgICAgLy8gV29yc3QtY2FzZSAxMDBtcyArIDVcdTAwRDcyMDBtcyBzYWZldHktbmV0IFx1MjI0OCAxLjFzLCB3ZWxsIHVuZGVyIHRoZSAzMHNcbiAgICAgIC8vIGRyYWluUnVuTG9vcCBjZWlsaW5nLlxuICAgICAgLy9cbiAgICAgIC8vIFwiQ29udGludWUgd2l0aCBhY3Rpb24gZXhlY3V0aW9uIGV2ZW4gaWYgc3dpdGNoaW5nIGZhaWxzXCIgXHUyMDE0IHRoZVxuICAgICAgLy8gZnJvbnRtb3N0IGdhdGUgaW4gdG9vbENhbGxzLnRzIGNhdGNoZXMgYW55IGFjdHVhbCB1bnNhZmUgc3RhdGUuXG4gICAgICByZXR1cm4gZHJhaW5SdW5Mb29wKGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjdS5hcHBzLnByZXBhcmVEaXNwbGF5KFxuICAgICAgICAgICAgYWxsb3dsaXN0QnVuZGxlSWRzLFxuICAgICAgICAgICAgc3Vycm9nYXRlSG9zdCxcbiAgICAgICAgICAgIGRpc3BsYXlJZCxcbiAgICAgICAgICApXG4gICAgICAgICAgaWYgKHJlc3VsdC5hY3RpdmF0ZWQpIHtcbiAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgYFtjb21wdXRlci11c2VdIHByZXBhcmVGb3JBY3Rpb246IGFjdGl2YXRlZCAke3Jlc3VsdC5hY3RpdmF0ZWR9YCxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5oaWRkZW5cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgYFtjb21wdXRlci11c2VdIHByZXBhcmVGb3JBY3Rpb24gZmFpbGVkOyBjb250aW51aW5nIHRvIGFjdGlvbjogJHtlcnJvck1lc3NhZ2UoZXJyKX1gLFxuICAgICAgICAgICAgeyBsZXZlbDogJ3dhcm4nIH0sXG4gICAgICAgICAgKVxuICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBhc3luYyBwcmV2aWV3SGlkZVNldChcbiAgICAgIGFsbG93bGlzdEJ1bmRsZUlkczogc3RyaW5nW10sXG4gICAgICBkaXNwbGF5SWQ/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxBcnJheTx7IGJ1bmRsZUlkOiBzdHJpbmc7IGRpc3BsYXlOYW1lOiBzdHJpbmcgfT4+IHtcbiAgICAgIHJldHVybiBjdS5hcHBzLnByZXZpZXdIaWRlU2V0KFxuICAgICAgICBbLi4uYWxsb3dsaXN0QnVuZGxlSWRzLCBzdXJyb2dhdGVIb3N0XSxcbiAgICAgICAgZGlzcGxheUlkLFxuICAgICAgKVxuICAgIH0sXG5cbiAgICAvLyBcdTI1MDBcdTI1MDAgRGlzcGxheSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuICAgIGFzeW5jIGdldERpc3BsYXlTaXplKGRpc3BsYXlJZD86IG51bWJlcik6IFByb21pc2U8RGlzcGxheUdlb21ldHJ5PiB7XG4gICAgICByZXR1cm4gY3UuZGlzcGxheS5nZXRTaXplKGRpc3BsYXlJZClcbiAgICB9LFxuXG4gICAgYXN5bmMgbGlzdERpc3BsYXlzKCk6IFByb21pc2U8RGlzcGxheUdlb21ldHJ5W10+IHtcbiAgICAgIHJldHVybiBjdS5kaXNwbGF5Lmxpc3RBbGwoKVxuICAgIH0sXG5cbiAgICBhc3luYyBmaW5kV2luZG93RGlzcGxheXMoXG4gICAgICBidW5kbGVJZHM6IHN0cmluZ1tdLFxuICAgICk6IFByb21pc2U8QXJyYXk8eyBidW5kbGVJZDogc3RyaW5nOyBkaXNwbGF5SWRzOiBudW1iZXJbXSB9Pj4ge1xuICAgICAgcmV0dXJuIGN1LmFwcHMuZmluZFdpbmRvd0Rpc3BsYXlzKGJ1bmRsZUlkcylcbiAgICB9LFxuXG4gICAgYXN5bmMgcmVzb2x2ZVByZXBhcmVDYXB0dXJlKG9wdHM6IHtcbiAgICAgIGFsbG93ZWRCdW5kbGVJZHM6IHN0cmluZ1tdXG4gICAgICBwcmVmZXJyZWREaXNwbGF5SWQ/OiBudW1iZXJcbiAgICAgIGF1dG9SZXNvbHZlOiBib29sZWFuXG4gICAgICBkb0hpZGU/OiBib29sZWFuXG4gICAgfSk6IFByb21pc2U8UmVzb2x2ZVByZXBhcmVDYXB0dXJlUmVzdWx0PiB7XG4gICAgICBjb25zdCBkID0gY3UuZGlzcGxheS5nZXRTaXplKG9wdHMucHJlZmVycmVkRGlzcGxheUlkKVxuICAgICAgY29uc3QgW3RhcmdldFcsIHRhcmdldEhdID0gY29tcHV0ZVRhcmdldERpbXMoXG4gICAgICAgIGQud2lkdGgsXG4gICAgICAgIGQuaGVpZ2h0LFxuICAgICAgICBkLnNjYWxlRmFjdG9yLFxuICAgICAgKVxuICAgICAgcmV0dXJuIGRyYWluUnVuTG9vcCgoKSA9PlxuICAgICAgICBjdS5yZXNvbHZlUHJlcGFyZUNhcHR1cmUoXG4gICAgICAgICAgd2l0aG91dFRlcm1pbmFsKG9wdHMuYWxsb3dlZEJ1bmRsZUlkcyksXG4gICAgICAgICAgc3Vycm9nYXRlSG9zdCxcbiAgICAgICAgICBTQ1JFRU5TSE9UX0pQRUdfUVVBTElUWSxcbiAgICAgICAgICB0YXJnZXRXLFxuICAgICAgICAgIHRhcmdldEgsXG4gICAgICAgICAgb3B0cy5wcmVmZXJyZWREaXNwbGF5SWQsXG4gICAgICAgICAgb3B0cy5hdXRvUmVzb2x2ZSxcbiAgICAgICAgICBvcHRzLmRvSGlkZSxcbiAgICAgICAgKSxcbiAgICAgIClcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUHJlLXNpemUgdG8gYHRhcmdldEltYWdlU2l6ZWAgb3V0cHV0IHNvIHRoZSBBUEkgdHJhbnNjb2RlcidzIGVhcmx5LXJldHVyblxuICAgICAqIGZpcmVzIFx1MjAxNCBubyBzZXJ2ZXItc2lkZSByZXNpemUsIGBzY2FsZUNvb3JkYCBzdGF5cyBjb2hlcmVudC4gU2VlXG4gICAgICogcGFja2FnZXMvZGVza3RvcC9jb21wdXRlci11c2UtbWNwL0NPT1JESU5BVEVTLm1kLlxuICAgICAqL1xuICAgIGFzeW5jIHNjcmVlbnNob3Qob3B0czoge1xuICAgICAgYWxsb3dlZEJ1bmRsZUlkczogc3RyaW5nW11cbiAgICAgIGRpc3BsYXlJZD86IG51bWJlclxuICAgIH0pOiBQcm9taXNlPFNjcmVlbnNob3RSZXN1bHQ+IHtcbiAgICAgIGNvbnN0IGQgPSBjdS5kaXNwbGF5LmdldFNpemUob3B0cy5kaXNwbGF5SWQpXG4gICAgICBjb25zdCBbdGFyZ2V0VywgdGFyZ2V0SF0gPSBjb21wdXRlVGFyZ2V0RGltcyhcbiAgICAgICAgZC53aWR0aCxcbiAgICAgICAgZC5oZWlnaHQsXG4gICAgICAgIGQuc2NhbGVGYWN0b3IsXG4gICAgICApXG4gICAgICByZXR1cm4gZHJhaW5SdW5Mb29wKCgpID0+XG4gICAgICAgIGN1LnNjcmVlbnNob3QuY2FwdHVyZUV4Y2x1ZGluZyhcbiAgICAgICAgICB3aXRob3V0VGVybWluYWwob3B0cy5hbGxvd2VkQnVuZGxlSWRzKSxcbiAgICAgICAgICBTQ1JFRU5TSE9UX0pQRUdfUVVBTElUWSxcbiAgICAgICAgICB0YXJnZXRXLFxuICAgICAgICAgIHRhcmdldEgsXG4gICAgICAgICAgb3B0cy5kaXNwbGF5SWQsXG4gICAgICAgICksXG4gICAgICApXG4gICAgfSxcblxuICAgIGFzeW5jIHpvb20oXG4gICAgICByZWdpb25Mb2dpY2FsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB3OiBudW1iZXI7IGg6IG51bWJlciB9LFxuICAgICAgYWxsb3dlZEJ1bmRsZUlkczogc3RyaW5nW10sXG4gICAgICBkaXNwbGF5SWQ/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTx7IGJhc2U2NDogc3RyaW5nOyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9PiB7XG4gICAgICBjb25zdCBkID0gY3UuZGlzcGxheS5nZXRTaXplKGRpc3BsYXlJZClcbiAgICAgIGNvbnN0IFtvdXRXLCBvdXRIXSA9IGNvbXB1dGVUYXJnZXREaW1zKFxuICAgICAgICByZWdpb25Mb2dpY2FsLncsXG4gICAgICAgIHJlZ2lvbkxvZ2ljYWwuaCxcbiAgICAgICAgZC5zY2FsZUZhY3RvcixcbiAgICAgIClcbiAgICAgIHJldHVybiBkcmFpblJ1bkxvb3AoKCkgPT5cbiAgICAgICAgY3Uuc2NyZWVuc2hvdC5jYXB0dXJlUmVnaW9uKFxuICAgICAgICAgIHdpdGhvdXRUZXJtaW5hbChhbGxvd2VkQnVuZGxlSWRzKSxcbiAgICAgICAgICByZWdpb25Mb2dpY2FsLngsXG4gICAgICAgICAgcmVnaW9uTG9naWNhbC55LFxuICAgICAgICAgIHJlZ2lvbkxvZ2ljYWwudyxcbiAgICAgICAgICByZWdpb25Mb2dpY2FsLmgsXG4gICAgICAgICAgb3V0VyxcbiAgICAgICAgICBvdXRILFxuICAgICAgICAgIFNDUkVFTlNIT1RfSlBFR19RVUFMSVRZLFxuICAgICAgICAgIGRpc3BsYXlJZCxcbiAgICAgICAgKSxcbiAgICAgIClcbiAgICB9LFxuXG4gICAgLy8gXHUyNTAwXHUyNTAwIEtleWJvYXJkIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG4gICAgLyoqXG4gICAgICogeGRvdG9vbC1zdHlsZSBzZXF1ZW5jZSBlLmcuIFwiY3RybCtzaGlmdCthXCIgXHUyMTkyIHNwbGl0IG9uICcrJyBhbmQgcGFzcyB0b1xuICAgICAqIGtleXMoKS4ga2V5cygpIGRpc3BhdGNoZXMgdG8gRGlzcGF0Y2hRdWV1ZS5tYWluIFx1MjAxNCBkcmFpblJ1bkxvb3AgcHVtcHNcbiAgICAgKiBDRlJ1bkxvb3Agc28gaXQgcmVzb2x2ZXMuIFJ1c3QncyBlcnJvci1wYXRoIGNsZWFudXAgKGVuaWdvX3dyYXAucnMpXG4gICAgICogcmVsZWFzZXMgbW9kaWZpZXJzIG9uIGVhY2ggaW52b2NhdGlvbiwgc28gYSBtaWQtbG9vcCB0aHJvdyBsZWF2ZXNcbiAgICAgKiBub3RoaW5nIHN0dWNrLiA4bXMgYmV0d2VlbiBpdGVyYXRpb25zIFx1MjAxNCAxMjVIeiBVU0IgcG9sbGluZyBjYWRlbmNlLlxuICAgICAqL1xuICAgIGFzeW5jIGtleShrZXlTZXF1ZW5jZTogc3RyaW5nLCByZXBlYXQ/OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIGNvbnN0IGlucHV0ID0gcmVxdWlyZUNvbXB1dGVyVXNlSW5wdXQoKVxuICAgICAgY29uc3QgcGFydHMgPSBrZXlTZXF1ZW5jZS5zcGxpdCgnKycpLmZpbHRlcihwID0+IHAubGVuZ3RoID4gMClcbiAgICAgIC8vIEJhcmUtb25seTogdGhlIENHRXZlbnRUYXAgY2hlY2tzIGV2ZW50LmZsYWdzLmlzRW1wdHkgc28gY3RybCtlc2NhcGVcbiAgICAgIC8vIGV0Yy4gcGFzcyB0aHJvdWdoIHdpdGhvdXQgYWJvcnRpbmcuXG4gICAgICBjb25zdCBpc0VzYyA9IGlzQmFyZUVzY2FwZShwYXJ0cylcbiAgICAgIGNvbnN0IG4gPSByZXBlYXQgPz8gMVxuICAgICAgYXdhaXQgZHJhaW5SdW5Mb29wKGFzeW5jICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgIGF3YWl0IHNsZWVwKDgpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpc0VzYykge1xuICAgICAgICAgICAgbm90aWZ5RXhwZWN0ZWRFc2NhcGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBhd2FpdCBpbnB1dC5rZXlzKHBhcnRzKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBhc3luYyBob2xkS2V5KGtleU5hbWVzOiBzdHJpbmdbXSwgZHVyYXRpb25NczogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICBjb25zdCBpbnB1dCA9IHJlcXVpcmVDb21wdXRlclVzZUlucHV0KClcbiAgICAgIC8vIFByZXNzL3JlbGVhc2UgZWFjaCB3cmFwcGVkIGluIGRyYWluUnVuTG9vcDsgdGhlIHNsZWVwIHNpdHMgb3V0c2lkZSBzb1xuICAgICAgLy8gZHVyYXRpb25NcyBpc24ndCBib3VuZGVkIGJ5IGRyYWluUnVuTG9vcCdzIDMwcyB0aW1lb3V0LiBgcHJlc3NlZGBcbiAgICAgIC8vIHRyYWNrcyB3aGljaCBwcmVzc2VzIGxhbmRlZCBzbyBhIG1pZC1wcmVzcyB0aHJvdyBzdGlsbCByZWxlYXNlc1xuICAgICAgLy8gZXZlcnl0aGluZyB0aGF0IHdhcyBhY3R1YWxseSBwcmVzc2VkLlxuICAgICAgLy9cbiAgICAgIC8vIGBvcnBoYW5lZGAgZ3VhcmRzIGFnYWluc3QgYSB0aW1lb3V0LW9ycGhhbiByYWNlOiBpZiB0aGUgcHJlc3MtcGhhc2VcbiAgICAgIC8vIGRyYWluUnVuTG9vcCB0aW1lcyBvdXQgd2hpbGUgdGhlIGVzYy1ob3RrZXkgcHVtcC1yZXRhaW4ga2VlcHMgdGhlXG4gICAgICAvLyBwdW1wIHJ1bm5pbmcsIHRoZSBvcnBoYW5lZCBsYW1iZGEgd291bGQgY29udGludWUgcHVzaGluZyB0byBgcHJlc3NlZGBcbiAgICAgIC8vIGFmdGVyIGZpbmFsbHkncyByZWxlYXNlUHJlc3NlZCBzbmFwc2hvdHRlZCB0aGUgbGVuZ3RoIFx1MjAxNCBsZWF2aW5nIGtleXNcbiAgICAgIC8vIHN0dWNrLiBUaGUgZmxhZyBzdG9wcyB0aGUgbGFtYmRhIGF0IHRoZSBuZXh0IGl0ZXJhdGlvbi5cbiAgICAgIGNvbnN0IHByZXNzZWQ6IHN0cmluZ1tdID0gW11cbiAgICAgIGxldCBvcnBoYW5lZCA9IGZhbHNlXG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBkcmFpblJ1bkxvb3AoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGZvciAoY29uc3QgayBvZiBrZXlOYW1lcykge1xuICAgICAgICAgICAgaWYgKG9ycGhhbmVkKSByZXR1cm5cbiAgICAgICAgICAgIC8vIEJhcmUgRXNjYXBlOiBub3RpZnkgdGhlIENHRXZlbnRUYXAgc28gaXQgZG9lc24ndCBmaXJlIHRoZVxuICAgICAgICAgICAgLy8gYWJvcnQgY2FsbGJhY2sgZm9yIGEgbW9kZWwtc3ludGhlc2l6ZWQgcHJlc3MuIFNhbWUgYXMga2V5KCkuXG4gICAgICAgICAgICBpZiAoaXNCYXJlRXNjYXBlKFtrXSkpIHtcbiAgICAgICAgICAgICAgbm90aWZ5RXhwZWN0ZWRFc2NhcGUoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXdhaXQgaW5wdXQua2V5KGssICdwcmVzcycpXG4gICAgICAgICAgICBwcmVzc2VkLnB1c2goaylcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGF3YWl0IHNsZWVwKGR1cmF0aW9uTXMpXG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBvcnBoYW5lZCA9IHRydWVcbiAgICAgICAgYXdhaXQgZHJhaW5SdW5Mb29wKCgpID0+IHJlbGVhc2VQcmVzc2VkKGlucHV0LCBwcmVzc2VkKSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYXN5bmMgdHlwZSh0ZXh0OiBzdHJpbmcsIG9wdHM6IHsgdmlhQ2xpcGJvYXJkOiBib29sZWFuIH0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIGNvbnN0IGlucHV0ID0gcmVxdWlyZUNvbXB1dGVyVXNlSW5wdXQoKVxuICAgICAgaWYgKG9wdHMudmlhQ2xpcGJvYXJkKSB7XG4gICAgICAgIC8vIGtleXMoWydjb21tYW5kJywndiddKSBpbnNpZGUgbmVlZHMgdGhlIHB1bXAuXG4gICAgICAgIGF3YWl0IGRyYWluUnVuTG9vcCgoKSA9PiB0eXBlVmlhQ2xpcGJvYXJkKGlucHV0LCB0ZXh0KSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICAvLyBgdG9vbENhbGxzLnRzYCBoYW5kbGVzIHRoZSBncmFwaGVtZSBsb29wICsgOG1zIHNsZWVwcyBhbmQgY2FsbHMgdGhpc1xuICAgICAgLy8gb25jZSBwZXIgZ3JhcGhlbWUuIHR5cGVUZXh0IGRvZXNuJ3QgZGlzcGF0Y2ggdG8gdGhlIG1haW4gcXVldWUuXG4gICAgICBhd2FpdCBpbnB1dC50eXBlVGV4dCh0ZXh0KVxuICAgIH0sXG5cbiAgICByZWFkQ2xpcGJvYXJkOiByZWFkQ2xpcGJvYXJkVmlhUGJwYXN0ZSxcblxuICAgIHdyaXRlQ2xpcGJvYXJkOiB3cml0ZUNsaXBib2FyZFZpYVBiY29weSxcblxuICAgIC8vIFx1MjUwMFx1MjUwMCBNb3VzZSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuICAgIGFzeW5jIG1vdmVNb3VzZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgYXdhaXQgbW92ZUFuZFNldHRsZShyZXF1aXJlQ29tcHV0ZXJVc2VJbnB1dCgpLCB4LCB5KVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNb3ZlLCB0aGVuIGNsaWNrLiBNb2RpZmllcnMgYXJlIHByZXNzL3JlbGVhc2UgYnJhY2tldGVkIHZpYSB3aXRoTW9kaWZpZXJzXG4gICAgICogXHUyMDE0IHNhbWUgcGF0dGVybiBhcyBDb3dvcmsuIEFwcEtpdCBjb21wdXRlcyBOU0V2ZW50LmNsaWNrQ291bnQgZnJvbSB0aW1pbmdcbiAgICAgKiArIHBvc2l0aW9uIHByb3hpbWl0eSwgc28gZG91YmxlL3RyaXBsZSBjbGljayB3b3JrIHdpdGhvdXQgc2V0dGluZyB0aGVcbiAgICAgKiBDR0V2ZW50IGNsaWNrU3RhdGUgZmllbGQuIGtleSgpIGluc2lkZSB3aXRoTW9kaWZpZXJzIG5lZWRzIHRoZSBwdW1wO1xuICAgICAqIHRoZSBtb2RpZmllci1sZXNzIHBhdGggZG9lc24ndC5cbiAgICAgKi9cbiAgICBhc3luYyBjbGljayhcbiAgICAgIHg6IG51bWJlcixcbiAgICAgIHk6IG51bWJlcixcbiAgICAgIGJ1dHRvbjogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdtaWRkbGUnLFxuICAgICAgY291bnQ6IDEgfCAyIHwgMyxcbiAgICAgIG1vZGlmaWVycz86IHN0cmluZ1tdLFxuICAgICk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgY29uc3QgaW5wdXQgPSByZXF1aXJlQ29tcHV0ZXJVc2VJbnB1dCgpXG4gICAgICBhd2FpdCBtb3ZlQW5kU2V0dGxlKGlucHV0LCB4LCB5KVxuICAgICAgaWYgKG1vZGlmaWVycyAmJiBtb2RpZmllcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCBkcmFpblJ1bkxvb3AoKCkgPT5cbiAgICAgICAgICB3aXRoTW9kaWZpZXJzKGlucHV0LCBtb2RpZmllcnMsICgpID0+XG4gICAgICAgICAgICBpbnB1dC5tb3VzZUJ1dHRvbihidXR0b24sICdjbGljaycsIGNvdW50KSxcbiAgICAgICAgICApLFxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCBpbnB1dC5tb3VzZUJ1dHRvbihidXR0b24sICdjbGljaycsIGNvdW50KVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhc3luYyBtb3VzZURvd24oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICBhd2FpdCByZXF1aXJlQ29tcHV0ZXJVc2VJbnB1dCgpLm1vdXNlQnV0dG9uKCdsZWZ0JywgJ3ByZXNzJylcbiAgICB9LFxuXG4gICAgYXN5bmMgbW91c2VVcCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIGF3YWl0IHJlcXVpcmVDb21wdXRlclVzZUlucHV0KCkubW91c2VCdXR0b24oJ2xlZnQnLCAncmVsZWFzZScpXG4gICAgfSxcblxuICAgIGFzeW5jIGdldEN1cnNvclBvc2l0aW9uKCk6IFByb21pc2U8eyB4OiBudW1iZXI7IHk6IG51bWJlciB9PiB7XG4gICAgICByZXR1cm4gcmVxdWlyZUNvbXB1dGVyVXNlSW5wdXQoKS5tb3VzZUxvY2F0aW9uKClcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogYGZyb20gPT09IHVuZGVmaW5lZGAgXHUyMTkyIGRyYWcgZnJvbSBjdXJyZW50IGN1cnNvciAodHJhaW5pbmcnc1xuICAgICAqIGxlZnRfY2xpY2tfZHJhZyB3aXRoIHN0YXJ0X2Nvb3JkaW5hdGUgb21pdHRlZCkuIElubmVyIGBmaW5hbGx5YDogdGhlXG4gICAgICogYnV0dG9uIGlzIEFMV0FZUyByZWxlYXNlZCBldmVuIGlmIHRoZSBtb3ZlIHRocm93cyBcdTIwMTQgb3RoZXJ3aXNlIHRoZVxuICAgICAqIHVzZXIncyBsZWZ0IGJ1dHRvbiBpcyBzdHVjay1wcmVzc2VkIHVudGlsIHRoZXkgcGh5c2ljYWxseSBjbGljay5cbiAgICAgKiA1MG1zIHNsZWVwIGFmdGVyIHByZXNzOiBlbmlnbydzIG1vdmVfbW91c2UgcmVhZHMgTlNFdmVudC5wcmVzc2VkTW91c2VCdXR0b25zXG4gICAgICogdG8gZGVjaWRlIC5sZWZ0TW91c2VEcmFnZ2VkIHZzIC5tb3VzZU1vdmVkOyB0aGUgc3ludGhldGljIGxlZnRNb3VzZURvd25cbiAgICAgKiBuZWVkcyBhIEhJRC10YXAgcm91bmQtdHJpcCB0byBzaG93IHVwIHRoZXJlLlxuICAgICAqL1xuICAgIGFzeW5jIGRyYWcoXG4gICAgICBmcm9tOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWQsXG4gICAgICB0bzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LFxuICAgICk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgY29uc3QgaW5wdXQgPSByZXF1aXJlQ29tcHV0ZXJVc2VJbnB1dCgpXG4gICAgICBpZiAoZnJvbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGF3YWl0IG1vdmVBbmRTZXR0bGUoaW5wdXQsIGZyb20ueCwgZnJvbS55KVxuICAgICAgfVxuICAgICAgYXdhaXQgaW5wdXQubW91c2VCdXR0b24oJ2xlZnQnLCAncHJlc3MnKVxuICAgICAgYXdhaXQgc2xlZXAoTU9WRV9TRVRUTEVfTVMpXG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBhbmltYXRlZE1vdmUoaW5wdXQsIHRvLngsIHRvLnksIGdldE1vdXNlQW5pbWF0aW9uRW5hYmxlZCgpKVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgYXdhaXQgaW5wdXQubW91c2VCdXR0b24oJ2xlZnQnLCAncmVsZWFzZScpXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1vdmUgZmlyc3QsIHRoZW4gc2Nyb2xsIGVhY2ggYXhpcy4gVmVydGljYWwtZmlyc3QgXHUyMDE0IGl0J3MgdGhlIGNvbW1vblxuICAgICAqIGF4aXM7IGEgaG9yaXpvbnRhbCBmYWlsdXJlIHNob3VsZG4ndCBsb3NlIHRoZSB2ZXJ0aWNhbC5cbiAgICAgKi9cbiAgICBhc3luYyBzY3JvbGwoeDogbnVtYmVyLCB5OiBudW1iZXIsIGR4OiBudW1iZXIsIGR5OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIGNvbnN0IGlucHV0ID0gcmVxdWlyZUNvbXB1dGVyVXNlSW5wdXQoKVxuICAgICAgYXdhaXQgbW92ZUFuZFNldHRsZShpbnB1dCwgeCwgeSlcbiAgICAgIGlmIChkeSAhPT0gMCkge1xuICAgICAgICBhd2FpdCBpbnB1dC5tb3VzZVNjcm9sbChkeSwgJ3ZlcnRpY2FsJylcbiAgICAgIH1cbiAgICAgIGlmIChkeCAhPT0gMCkge1xuICAgICAgICBhd2FpdCBpbnB1dC5tb3VzZVNjcm9sbChkeCwgJ2hvcml6b250YWwnKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBcdTI1MDBcdTI1MDAgQXBwIG1hbmFnZW1lbnQgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cbiAgICBhc3luYyBnZXRGcm9udG1vc3RBcHAoKTogUHJvbWlzZTxGcm9udG1vc3RBcHAgfCBudWxsPiB7XG4gICAgICBjb25zdCBpbmZvID0gcmVxdWlyZUNvbXB1dGVyVXNlSW5wdXQoKS5nZXRGcm9udG1vc3RBcHBJbmZvKClcbiAgICAgIGlmICghaW5mbyB8fCAhaW5mby5idW5kbGVJZCkgcmV0dXJuIG51bGxcbiAgICAgIHJldHVybiB7IGJ1bmRsZUlkOiBpbmZvLmJ1bmRsZUlkLCBkaXNwbGF5TmFtZTogaW5mby5hcHBOYW1lIH1cbiAgICB9LFxuXG4gICAgYXN5bmMgYXBwVW5kZXJQb2ludChcbiAgICAgIHg6IG51bWJlcixcbiAgICAgIHk6IG51bWJlcixcbiAgICApOiBQcm9taXNlPHsgYnVuZGxlSWQ6IHN0cmluZzsgZGlzcGxheU5hbWU6IHN0cmluZyB9IHwgbnVsbD4ge1xuICAgICAgcmV0dXJuIGN1LmFwcHMuYXBwVW5kZXJQb2ludCh4LCB5KVxuICAgIH0sXG5cbiAgICBhc3luYyBsaXN0SW5zdGFsbGVkQXBwcygpOiBQcm9taXNlPEluc3RhbGxlZEFwcFtdPiB7XG4gICAgICAvLyBgQ29tcHV0ZXJVc2VJbnN0YWxsZWRBcHBgIGlzIGB7YnVuZGxlSWQsIGRpc3BsYXlOYW1lLCBwYXRofWAuXG4gICAgICAvLyBgSW5zdGFsbGVkQXBwYCBhZGRzIG9wdGlvbmFsIGBpY29uRGF0YVVybGAgXHUyMDE0IGxlZnQgdW5wb3B1bGF0ZWQ7XG4gICAgICAvLyB0aGUgYXBwcm92YWwgZGlhbG9nIGZldGNoZXMgbGF6aWx5IHZpYSBnZXRBcHBJY29uKCkgYmVsb3cuXG4gICAgICByZXR1cm4gZHJhaW5SdW5Mb29wKCgpID0+IGN1LmFwcHMubGlzdEluc3RhbGxlZCgpKVxuICAgIH0sXG5cbiAgICBhc3luYyBnZXRBcHBJY29uKHBhdGg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7XG4gICAgICByZXR1cm4gY3UuYXBwcy5pY29uRGF0YVVybChwYXRoKSA/PyB1bmRlZmluZWRcbiAgICB9LFxuXG4gICAgYXN5bmMgbGlzdFJ1bm5pbmdBcHBzKCk6IFByb21pc2U8UnVubmluZ0FwcFtdPiB7XG4gICAgICByZXR1cm4gY3UuYXBwcy5saXN0UnVubmluZygpXG4gICAgfSxcblxuICAgIGFzeW5jIG9wZW5BcHAoYnVuZGxlSWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgYXdhaXQgY3UuYXBwcy5vcGVuKGJ1bmRsZUlkKVxuICAgIH0sXG4gIH1cbn1cblxuLyoqXG4gKiBNb2R1bGUtbGV2ZWwgZXhwb3J0IChub3Qgb24gdGhlIGV4ZWN1dG9yIG9iamVjdCkgXHUyMDE0IGNhbGxlZCBhdCB0dXJuLWVuZCBmcm9tXG4gKiBgc3RvcEhvb2tzLnRzYCAvIGBxdWVyeS50c2AsIG91dHNpZGUgdGhlIGV4ZWN1dG9yIGxpZmVjeWNsZS4gRmlyZS1hbmQtZm9yZ2V0XG4gKiBhdCB0aGUgY2FsbCBzaXRlOyB0aGUgY2FsbGVyIGAuY2F0Y2goKWBlcy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVuaGlkZUNvbXB1dGVyVXNlQXBwcyhcbiAgYnVuZGxlSWRzOiByZWFkb25seSBzdHJpbmdbXSxcbik6IFByb21pc2U8dm9pZD4ge1xuICBpZiAoYnVuZGxlSWRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG4gIGNvbnN0IGN1ID0gcmVxdWlyZUNvbXB1dGVyVXNlU3dpZnQoKVxuICBhd2FpdCBjdS5hcHBzLnVuaGlkZShbLi4uYnVuZGxlSWRzXSlcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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
