#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_registry,
  registerTmuxBackend
} from "./chunk-OTDPNGFK.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-PEMK4FQH.mjs";
import "./chunk-SQ6KOOZS.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-Y2PD6CVC.mjs";
import "./chunk-S5Z6SZDA.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-HO5F7BV3.mjs";
import "./chunk-M22WMPMZ.mjs";
import "./chunk-4WEGPCYF.mjs";
import "./chunk-Z4JLAMMU.mjs";
import "./chunk-FUHJGEFK.mjs";
import "./chunk-H474P6P2.mjs";
import "./chunk-SEJU7JU7.mjs";
import "./chunk-ABRSTIS2.mjs";
import "./chunk-L22EUB4Z.mjs";
import "./chunk-NE3WJ556.mjs";
import "./chunk-U3YG33GN.mjs";
import "./chunk-I4JSDM2A.mjs";
import "./chunk-KNCFJEES.mjs";
import "./chunk-R2NMUWG6.mjs";
import "./chunk-XTFZIHQR.mjs";
import "./chunk-X6KULBXG.mjs";
import "./chunk-ORS2TTME.mjs";
import "./chunk-IAEMXMG4.mjs";
import "./chunk-L57KLZUF.mjs";
import "./chunk-J7TDGLE4.mjs";
import {
  getLeaderPaneId,
  init_detection,
  isInsideTmux,
  isTmuxAvailable
} from "./chunk-HUHT3U2I.mjs";
import "./chunk-X7OJ6FBK.mjs";
import "./chunk-4GJVIJWN.mjs";
import {
  HIDDEN_SESSION_NAME,
  SWARM_SESSION_NAME,
  SWARM_VIEW_WINDOW_NAME,
  TMUX_COMMAND,
  getSwarmSocketName,
  init_constants
} from "./chunk-27EOXKZU.mjs";
import "./chunk-HUEORIXP.mjs";
import "./chunk-H6COQF52.mjs";
import "./chunk-IQJUSPBJ.mjs";
import "./chunk-R326WRGL.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import "./chunk-HWTXKBLR.mjs";
import "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import "./chunk-NKGQGSP5.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-UIIDPH35.mjs";
import "./chunk-DNXEQXI7.mjs";
import "./chunk-ZPEBVZEB.mjs";
import {
  init_sleep,
  sleep
} from "./chunk-DQ5JTCOA.mjs";
import "./chunk-HGPSKCV5.mjs";
import {
  count,
  init_array
} from "./chunk-GC6TKYZ3.mjs";
import "./chunk-GHLJY6GK.mjs";
import "./chunk-PPND3F3V.mjs";
import "./chunk-BKRSSLV2.mjs";
import "./chunk-AHENZQLB.mjs";
import "./chunk-HQK4A2IB.mjs";
import "./chunk-SVUOOEVR.mjs";
import "./chunk-XFYUWZYI.mjs";
import "./chunk-JOMSGAK7.mjs";
import "./chunk-3PS62SCS.mjs";
import "./chunk-SFCRD75C.mjs";
import "./chunk-QFFW7MQ2.mjs";
import "./chunk-3AEW3KDQ.mjs";
import "./chunk-OGGCTXYU.mjs";
import "./chunk-MDXHK5AD.mjs";
import "./chunk-SETG7O3F.mjs";
import "./chunk-J6MJ6UVK.mjs";
import "./chunk-PKIVPZJM.mjs";
import "./chunk-JXCG2JDO.mjs";
import "./chunk-N62V5C2K.mjs";
import "./chunk-7SC6PTLR.mjs";
import "./chunk-NT7W7YWD.mjs";
import "./chunk-4S33EKPF.mjs";
import {
  execFileNoThrow,
  init_execFileNoThrow
} from "./chunk-VNIROYYL.mjs";
import "./chunk-TZFTPSMG.mjs";
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-IPMELYAB.mjs";
import "./chunk-F5ODCUJD.mjs";
import "./chunk-ZAYB3WZV.mjs";
import {
  init_debug,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
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

// src/utils/swarm/backends/TmuxBackend.ts
function waitForPaneShellReady() {
  return sleep(PANE_SHELL_INIT_DELAY_MS);
}
function acquirePaneCreationLock() {
  let release;
  const newLock = new Promise((resolve) => {
    release = resolve;
  });
  const previousLock = paneCreationLock;
  paneCreationLock = newLock;
  return previousLock.then(() => release);
}
function getTmuxColorName(color) {
  const tmuxColors = {
    red: "red",
    blue: "blue",
    green: "green",
    yellow: "yellow",
    purple: "magenta",
    orange: "colour208",
    pink: "colour205",
    cyan: "cyan"
  };
  return tmuxColors[color];
}
function runTmuxInUserSession(args) {
  return execFileNoThrow(TMUX_COMMAND, args);
}
function runTmuxInSwarm(args) {
  return execFileNoThrow(TMUX_COMMAND, ["-L", getSwarmSocketName(), ...args]);
}
var firstPaneUsedForExternal, cachedLeaderWindowTarget, paneCreationLock, PANE_SHELL_INIT_DELAY_MS, TmuxBackend;
var init_TmuxBackend = __esm({
  "src/utils/swarm/backends/TmuxBackend.ts"() {
    init_debug();
    init_execFileNoThrow();
    init_log();
    init_array();
    init_sleep();
    init_constants();
    init_detection();
    init_registry();
    firstPaneUsedForExternal = false;
    cachedLeaderWindowTarget = null;
    paneCreationLock = Promise.resolve();
    PANE_SHELL_INIT_DELAY_MS = 200;
    TmuxBackend = class {
      type = "tmux";
      displayName = "tmux";
      supportsHideShow = true;
      /**
       * Checks if tmux is installed and available.
       * Delegates to detection.ts for consistent detection logic.
       */
      async isAvailable() {
        return isTmuxAvailable();
      }
      /**
       * Checks if we're currently running inside a tmux session.
       * Delegates to detection.ts for consistent detection logic.
       */
      async isRunningInside() {
        return isInsideTmux();
      }
      /**
       * Creates a new teammate pane in the swarm view.
       * Uses a lock to prevent race conditions when multiple teammates are spawned in parallel.
       */
      async createTeammatePaneInSwarmView(name, color) {
        const releaseLock = await acquirePaneCreationLock();
        try {
          const insideTmux = await this.isRunningInside();
          if (insideTmux) {
            return await this.createTeammatePaneWithLeader(name, color);
          }
          return await this.createTeammatePaneExternal(name, color);
        } finally {
          releaseLock();
        }
      }
      /**
       * Sends a command to a specific pane.
       */
      async sendCommandToPane(paneId, command, useExternalSession = false) {
        const runTmux = useExternalSession ? runTmuxInSwarm : runTmuxInUserSession;
        const result = await runTmux(["send-keys", "-t", paneId, command, "Enter"]);
        if (result.code !== 0) {
          throw new Error(
            `Failed to send command to pane ${paneId}: ${result.stderr}`
          );
        }
      }
      /**
       * Sets the border color for a specific pane.
       */
      async setPaneBorderColor(paneId, color, useExternalSession = false) {
        const tmuxColor = getTmuxColorName(color);
        const runTmux = useExternalSession ? runTmuxInSwarm : runTmuxInUserSession;
        await runTmux([
          "select-pane",
          "-t",
          paneId,
          "-P",
          `bg=default,fg=${tmuxColor}`
        ]);
        await runTmux([
          "set-option",
          "-p",
          "-t",
          paneId,
          "pane-border-style",
          `fg=${tmuxColor}`
        ]);
        await runTmux([
          "set-option",
          "-p",
          "-t",
          paneId,
          "pane-active-border-style",
          `fg=${tmuxColor}`
        ]);
      }
      /**
       * Sets the title for a pane (shown in pane border if pane-border-status is set).
       */
      async setPaneTitle(paneId, name, color, useExternalSession = false) {
        const tmuxColor = getTmuxColorName(color);
        const runTmux = useExternalSession ? runTmuxInSwarm : runTmuxInUserSession;
        await runTmux(["select-pane", "-t", paneId, "-T", name]);
        await runTmux([
          "set-option",
          "-p",
          "-t",
          paneId,
          "pane-border-format",
          `#[fg=${tmuxColor},bold] #{pane_title} #[default]`
        ]);
      }
      /**
       * Enables pane border status for a window (shows pane titles).
       */
      async enablePaneBorderStatus(windowTarget, useExternalSession = false) {
        const target = windowTarget || await this.getCurrentWindowTarget();
        if (!target) {
          return;
        }
        const runTmux = useExternalSession ? runTmuxInSwarm : runTmuxInUserSession;
        await runTmux([
          "set-option",
          "-w",
          "-t",
          target,
          "pane-border-status",
          "top"
        ]);
      }
      /**
       * Rebalances panes to achieve the desired layout.
       */
      async rebalancePanes(windowTarget, hasLeader) {
        if (hasLeader) {
          await this.rebalancePanesWithLeader(windowTarget);
        } else {
          await this.rebalancePanesTiled(windowTarget);
        }
      }
      /**
       * Kills/closes a specific pane.
       */
      async killPane(paneId, useExternalSession = false) {
        const runTmux = useExternalSession ? runTmuxInSwarm : runTmuxInUserSession;
        const result = await runTmux(["kill-pane", "-t", paneId]);
        return result.code === 0;
      }
      /**
       * Hides a pane by moving it to a detached hidden session.
       * Creates the hidden session if it doesn't exist, then uses break-pane to move the pane there.
       */
      async hidePane(paneId, useExternalSession = false) {
        const runTmux = useExternalSession ? runTmuxInSwarm : runTmuxInUserSession;
        await runTmux(["new-session", "-d", "-s", HIDDEN_SESSION_NAME]);
        const result = await runTmux([
          "break-pane",
          "-d",
          "-s",
          paneId,
          "-t",
          `${HIDDEN_SESSION_NAME}:`
        ]);
        if (result.code === 0) {
          logForDebugging(`[TmuxBackend] Hidden pane ${paneId}`);
        } else {
          logForDebugging(
            `[TmuxBackend] Failed to hide pane ${paneId}: ${result.stderr}`
          );
        }
        return result.code === 0;
      }
      /**
       * Shows a previously hidden pane by joining it back into the target window.
       * Uses `tmux join-pane` to move the pane back, then reapplies main-vertical layout
       * with leader at 30%.
       */
      async showPane(paneId, targetWindowOrPane, useExternalSession = false) {
        const runTmux = useExternalSession ? runTmuxInSwarm : runTmuxInUserSession;
        const result = await runTmux([
          "join-pane",
          "-h",
          "-s",
          paneId,
          "-t",
          targetWindowOrPane
        ]);
        if (result.code !== 0) {
          logForDebugging(
            `[TmuxBackend] Failed to show pane ${paneId}: ${result.stderr}`
          );
          return false;
        }
        logForDebugging(
          `[TmuxBackend] Showed pane ${paneId} in ${targetWindowOrPane}`
        );
        await runTmux(["select-layout", "-t", targetWindowOrPane, "main-vertical"]);
        const panesResult = await runTmux([
          "list-panes",
          "-t",
          targetWindowOrPane,
          "-F",
          "#{pane_id}"
        ]);
        const panes = panesResult.stdout.trim().split("\n").filter(Boolean);
        if (panes[0]) {
          await runTmux(["resize-pane", "-t", panes[0], "-x", "30%"]);
        }
        return true;
      }
      // Private helper methods
      /**
       * Gets the leader's pane ID.
       * Uses the TMUX_PANE env var captured at module load to ensure we always
       * get the leader's original pane, even if the user has switched panes.
       */
      async getCurrentPaneId() {
        const leaderPane = getLeaderPaneId();
        if (leaderPane) {
          return leaderPane;
        }
        const result = await execFileNoThrow(TMUX_COMMAND, [
          "display-message",
          "-p",
          "#{pane_id}"
        ]);
        if (result.code !== 0) {
          logForDebugging(
            `[TmuxBackend] Failed to get current pane ID (exit ${result.code}): ${result.stderr}`
          );
          return null;
        }
        return result.stdout.trim();
      }
      /**
       * Gets the leader's window target (session:window format).
       * Uses the leader's pane ID to query for its window, ensuring we get the
       * correct window even if the user has switched to a different window.
       * Caches the result since the leader's window won't change.
       */
      async getCurrentWindowTarget() {
        if (cachedLeaderWindowTarget) {
          return cachedLeaderWindowTarget;
        }
        const leaderPane = getLeaderPaneId();
        const args = ["display-message"];
        if (leaderPane) {
          args.push("-t", leaderPane);
        }
        args.push("-p", "#{session_name}:#{window_index}");
        const result = await execFileNoThrow(TMUX_COMMAND, args);
        if (result.code !== 0) {
          logForDebugging(
            `[TmuxBackend] Failed to get current window target (exit ${result.code}): ${result.stderr}`
          );
          return null;
        }
        cachedLeaderWindowTarget = result.stdout.trim();
        return cachedLeaderWindowTarget;
      }
      /**
       * Gets the number of panes in a window.
       */
      async getCurrentWindowPaneCount(windowTarget, useSwarmSocket = false) {
        const target = windowTarget || await this.getCurrentWindowTarget();
        if (!target) {
          return null;
        }
        const args = ["list-panes", "-t", target, "-F", "#{pane_id}"];
        const result = useSwarmSocket ? await runTmuxInSwarm(args) : await runTmuxInUserSession(args);
        if (result.code !== 0) {
          logError(
            new Error(
              `[TmuxBackend] Failed to get pane count for ${target} (exit ${result.code}): ${result.stderr}`
            )
          );
          return null;
        }
        return count(result.stdout.trim().split("\n"), Boolean);
      }
      /**
       * Checks if a tmux session exists in the swarm socket.
       */
      async hasSessionInSwarm(sessionName) {
        const result = await runTmuxInSwarm(["has-session", "-t", sessionName]);
        return result.code === 0;
      }
      /**
       * Creates the swarm session with a single window for teammates when running outside tmux.
       */
      async createExternalSwarmSession() {
        const sessionExists = await this.hasSessionInSwarm(SWARM_SESSION_NAME);
        if (!sessionExists) {
          const result = await runTmuxInSwarm([
            "new-session",
            "-d",
            "-s",
            SWARM_SESSION_NAME,
            "-n",
            SWARM_VIEW_WINDOW_NAME,
            "-P",
            "-F",
            "#{pane_id}"
          ]);
          if (result.code !== 0) {
            throw new Error(
              `Failed to create swarm session: ${result.stderr || "Unknown error"}`
            );
          }
          const paneId = result.stdout.trim();
          const windowTarget2 = `${SWARM_SESSION_NAME}:${SWARM_VIEW_WINDOW_NAME}`;
          logForDebugging(
            `[TmuxBackend] Created external swarm session with window ${windowTarget2}, pane ${paneId}`
          );
          return { windowTarget: windowTarget2, paneId };
        }
        const listResult = await runTmuxInSwarm([
          "list-windows",
          "-t",
          SWARM_SESSION_NAME,
          "-F",
          "#{window_name}"
        ]);
        const windows = listResult.stdout.trim().split("\n").filter(Boolean);
        const windowTarget = `${SWARM_SESSION_NAME}:${SWARM_VIEW_WINDOW_NAME}`;
        if (windows.includes(SWARM_VIEW_WINDOW_NAME)) {
          const paneResult = await runTmuxInSwarm([
            "list-panes",
            "-t",
            windowTarget,
            "-F",
            "#{pane_id}"
          ]);
          const panes = paneResult.stdout.trim().split("\n").filter(Boolean);
          return { windowTarget, paneId: panes[0] || "" };
        }
        const createResult = await runTmuxInSwarm([
          "new-window",
          "-t",
          SWARM_SESSION_NAME,
          "-n",
          SWARM_VIEW_WINDOW_NAME,
          "-P",
          "-F",
          "#{pane_id}"
        ]);
        if (createResult.code !== 0) {
          throw new Error(
            `Failed to create swarm-view window: ${createResult.stderr || "Unknown error"}`
          );
        }
        return { windowTarget, paneId: createResult.stdout.trim() };
      }
      /**
       * Creates a teammate pane when running inside tmux (with leader).
       */
      async createTeammatePaneWithLeader(teammateName, teammateColor) {
        const currentPaneId = await this.getCurrentPaneId();
        const windowTarget = await this.getCurrentWindowTarget();
        if (!currentPaneId || !windowTarget) {
          throw new Error("Could not determine current tmux pane/window");
        }
        const paneCount = await this.getCurrentWindowPaneCount(windowTarget);
        if (paneCount === null) {
          throw new Error("Could not determine pane count for current window");
        }
        const isFirstTeammate = paneCount === 1;
        let splitResult;
        if (isFirstTeammate) {
          splitResult = await execFileNoThrow(TMUX_COMMAND, [
            "split-window",
            "-t",
            currentPaneId,
            "-h",
            "-l",
            "70%",
            "-P",
            "-F",
            "#{pane_id}"
          ]);
        } else {
          const listResult = await execFileNoThrow(TMUX_COMMAND, [
            "list-panes",
            "-t",
            windowTarget,
            "-F",
            "#{pane_id}"
          ]);
          const panes = listResult.stdout.trim().split("\n").filter(Boolean);
          const teammatePanes = panes.slice(1);
          const teammateCount = teammatePanes.length;
          const splitVertically = teammateCount % 2 === 1;
          const targetPaneIndex = Math.floor((teammateCount - 1) / 2);
          const targetPane = teammatePanes[targetPaneIndex] || teammatePanes[teammatePanes.length - 1];
          splitResult = await execFileNoThrow(TMUX_COMMAND, [
            "split-window",
            "-t",
            targetPane,
            splitVertically ? "-v" : "-h",
            "-P",
            "-F",
            "#{pane_id}"
          ]);
        }
        if (splitResult.code !== 0) {
          throw new Error(`Failed to create teammate pane: ${splitResult.stderr}`);
        }
        const paneId = splitResult.stdout.trim();
        logForDebugging(
          `[TmuxBackend] Created teammate pane for ${teammateName}: ${paneId}`
        );
        await this.setPaneBorderColor(paneId, teammateColor);
        await this.setPaneTitle(paneId, teammateName, teammateColor);
        await this.rebalancePanesWithLeader(windowTarget);
        await waitForPaneShellReady();
        return { paneId, isFirstTeammate };
      }
      /**
       * Creates a teammate pane when running outside tmux (no leader in tmux).
       */
      async createTeammatePaneExternal(teammateName, teammateColor) {
        const { windowTarget, paneId: firstPaneId } = await this.createExternalSwarmSession();
        const paneCount = await this.getCurrentWindowPaneCount(windowTarget, true);
        if (paneCount === null) {
          throw new Error("Could not determine pane count for swarm window");
        }
        const isFirstTeammate = !firstPaneUsedForExternal && paneCount === 1;
        let paneId;
        if (isFirstTeammate) {
          paneId = firstPaneId;
          firstPaneUsedForExternal = true;
          logForDebugging(
            `[TmuxBackend] Using initial pane for first teammate ${teammateName}: ${paneId}`
          );
          await this.enablePaneBorderStatus(windowTarget, true);
        } else {
          const listResult = await runTmuxInSwarm([
            "list-panes",
            "-t",
            windowTarget,
            "-F",
            "#{pane_id}"
          ]);
          const panes = listResult.stdout.trim().split("\n").filter(Boolean);
          const teammateCount = panes.length;
          const splitVertically = teammateCount % 2 === 1;
          const targetPaneIndex = Math.floor((teammateCount - 1) / 2);
          const targetPane = panes[targetPaneIndex] || panes[panes.length - 1];
          const splitResult = await runTmuxInSwarm([
            "split-window",
            "-t",
            targetPane,
            splitVertically ? "-v" : "-h",
            "-P",
            "-F",
            "#{pane_id}"
          ]);
          if (splitResult.code !== 0) {
            throw new Error(`Failed to create teammate pane: ${splitResult.stderr}`);
          }
          paneId = splitResult.stdout.trim();
          logForDebugging(
            `[TmuxBackend] Created teammate pane for ${teammateName}: ${paneId}`
          );
        }
        await this.setPaneBorderColor(paneId, teammateColor, true);
        await this.setPaneTitle(paneId, teammateName, teammateColor, true);
        await this.rebalancePanesTiled(windowTarget);
        await waitForPaneShellReady();
        return { paneId, isFirstTeammate };
      }
      /**
       * Rebalances panes in a window with a leader.
       */
      async rebalancePanesWithLeader(windowTarget) {
        const listResult = await runTmuxInUserSession([
          "list-panes",
          "-t",
          windowTarget,
          "-F",
          "#{pane_id}"
        ]);
        const panes = listResult.stdout.trim().split("\n").filter(Boolean);
        if (panes.length <= 2) {
          return;
        }
        await runTmuxInUserSession([
          "select-layout",
          "-t",
          windowTarget,
          "main-vertical"
        ]);
        const leaderPane = panes[0];
        await runTmuxInUserSession(["resize-pane", "-t", leaderPane, "-x", "30%"]);
        logForDebugging(
          `[TmuxBackend] Rebalanced ${panes.length - 1} teammate panes with leader`
        );
      }
      /**
       * Rebalances panes in a window without a leader (tiled layout).
       */
      async rebalancePanesTiled(windowTarget) {
        const listResult = await runTmuxInSwarm([
          "list-panes",
          "-t",
          windowTarget,
          "-F",
          "#{pane_id}"
        ]);
        const panes = listResult.stdout.trim().split("\n").filter(Boolean);
        if (panes.length <= 1) {
          return;
        }
        await runTmuxInSwarm(["select-layout", "-t", windowTarget, "tiled"]);
        logForDebugging(
          `[TmuxBackend] Rebalanced ${panes.length} teammate panes with tiled layout`
        );
      }
    };
    registerTmuxBackend(TmuxBackend);
  }
});
init_TmuxBackend();
export {
  TmuxBackend
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL3N3YXJtL2JhY2tlbmRzL1RtdXhCYWNrZW5kLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgdHlwZSB7IEFnZW50Q29sb3JOYW1lIH0gZnJvbSAnLi4vLi4vLi4vdG9vbHMvQWdlbnRUb29sL2FnZW50Q29sb3JNYW5hZ2VyLmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGVidWcuanMnXG5pbXBvcnQgeyBleGVjRmlsZU5vVGhyb3cgfSBmcm9tICcuLi8uLi8uLi91dGlscy9leGVjRmlsZU5vVGhyb3cuanMnXG5pbXBvcnQgeyBsb2dFcnJvciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2xvZy5qcydcbmltcG9ydCB7IGNvdW50IH0gZnJvbSAnLi4vLi4vYXJyYXkuanMnXG5pbXBvcnQgeyBzbGVlcCB9IGZyb20gJy4uLy4uL3NsZWVwLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0U3dhcm1Tb2NrZXROYW1lLFxuICBISURERU5fU0VTU0lPTl9OQU1FLFxuICBTV0FSTV9TRVNTSU9OX05BTUUsXG4gIFNXQVJNX1ZJRVdfV0lORE9XX05BTUUsXG4gIFRNVVhfQ09NTUFORCxcbn0gZnJvbSAnLi4vY29uc3RhbnRzLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0TGVhZGVyUGFuZUlkLFxuICBpc0luc2lkZVRtdXggYXMgaXNJbnNpZGVUbXV4RnJvbURldGVjdGlvbixcbiAgaXNUbXV4QXZhaWxhYmxlLFxufSBmcm9tICcuL2RldGVjdGlvbi5qcydcbmltcG9ydCB7IHJlZ2lzdGVyVG11eEJhY2tlbmQgfSBmcm9tICcuL3JlZ2lzdHJ5LmpzJ1xuaW1wb3J0IHR5cGUgeyBDcmVhdGVQYW5lUmVzdWx0LCBQYW5lQmFja2VuZCwgUGFuZUlkIH0gZnJvbSAnLi90eXBlcy5qcydcblxuLy8gVHJhY2sgd2hldGhlciB0aGUgZmlyc3QgcGFuZSBoYXMgYmVlbiB1c2VkIGZvciBleHRlcm5hbCBzd2FybSBzZXNzaW9uXG5sZXQgZmlyc3RQYW5lVXNlZEZvckV4dGVybmFsID0gZmFsc2VcblxuLy8gQ2FjaGVkIGxlYWRlciB3aW5kb3cgdGFyZ2V0IChzZXNzaW9uOndpbmRvdyBmb3JtYXQpIHRvIGF2b2lkIHJlcGVhdGVkIHF1ZXJpZXNcbmxldCBjYWNoZWRMZWFkZXJXaW5kb3dUYXJnZXQ6IHN0cmluZyB8IG51bGwgPSBudWxsXG5cbi8vIExvY2sgbWVjaGFuaXNtIHRvIHByZXZlbnQgcmFjZSBjb25kaXRpb25zIHdoZW4gc3Bhd25pbmcgdGVhbW1hdGVzIGluIHBhcmFsbGVsXG5sZXQgcGFuZUNyZWF0aW9uTG9jazogUHJvbWlzZTx2b2lkPiA9IFByb21pc2UucmVzb2x2ZSgpXG5cbi8vIERlbGF5IGFmdGVyIHBhbmUgY3JlYXRpb24gdG8gYWxsb3cgc2hlbGwgaW5pdGlhbGl6YXRpb24gKGxvYWRpbmcgcmMgZmlsZXMsIHByb21wdHMsIGV0Yy4pXG4vLyAyMDBtcyBpcyBlbm91Z2ggZm9yIG1vc3Qgc2hlbGwgY29uZmlndXJhdGlvbnMgaW5jbHVkaW5nIHNsb3cgb25lcyBsaWtlIHN0YXJzaGlwL29oLW15LXpzaFxuY29uc3QgUEFORV9TSEVMTF9JTklUX0RFTEFZX01TID0gMjAwXG5cbmZ1bmN0aW9uIHdhaXRGb3JQYW5lU2hlbGxSZWFkeSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIHNsZWVwKFBBTkVfU0hFTExfSU5JVF9ERUxBWV9NUylcbn1cblxuLyoqXG4gKiBBY3F1aXJlcyBhIGxvY2sgZm9yIHBhbmUgY3JlYXRpb24sIGVuc3VyaW5nIHNlcXVlbnRpYWwgZXhlY3V0aW9uLlxuICogUmV0dXJucyBhIHJlbGVhc2UgZnVuY3Rpb24gdGhhdCBtdXN0IGJlIGNhbGxlZCB3aGVuIGRvbmUuXG4gKi9cbmZ1bmN0aW9uIGFjcXVpcmVQYW5lQ3JlYXRpb25Mb2NrKCk6IFByb21pc2U8KCkgPT4gdm9pZD4ge1xuICBsZXQgcmVsZWFzZTogKCkgPT4gdm9pZFxuICBjb25zdCBuZXdMb2NrID0gbmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XG4gICAgcmVsZWFzZSA9IHJlc29sdmVcbiAgfSlcblxuICBjb25zdCBwcmV2aW91c0xvY2sgPSBwYW5lQ3JlYXRpb25Mb2NrXG4gIHBhbmVDcmVhdGlvbkxvY2sgPSBuZXdMb2NrXG5cbiAgcmV0dXJuIHByZXZpb3VzTG9jay50aGVuKCgpID0+IHJlbGVhc2UhKVxufVxuXG4vKipcbiAqIEdldHMgdGhlIHRtdXggY29sb3IgbmFtZSBmb3IgYSBnaXZlbiBhZ2VudCBjb2xvci5cbiAqIFRoZXNlIGFyZSB0bXV4J3MgYnVpbHQtaW4gY29sb3IgbmFtZXMgdGhhdCB3b3JrIHdpdGggcGFuZS1ib3JkZXItc3R5bGUuXG4gKi9cbmZ1bmN0aW9uIGdldFRtdXhDb2xvck5hbWUoY29sb3I6IEFnZW50Q29sb3JOYW1lKTogc3RyaW5nIHtcbiAgY29uc3QgdG11eENvbG9yczogUmVjb3JkPEFnZW50Q29sb3JOYW1lLCBzdHJpbmc+ID0ge1xuICAgIHJlZDogJ3JlZCcsXG4gICAgYmx1ZTogJ2JsdWUnLFxuICAgIGdyZWVuOiAnZ3JlZW4nLFxuICAgIHllbGxvdzogJ3llbGxvdycsXG4gICAgcHVycGxlOiAnbWFnZW50YScsXG4gICAgb3JhbmdlOiAnY29sb3VyMjA4JyxcbiAgICBwaW5rOiAnY29sb3VyMjA1JyxcbiAgICBjeWFuOiAnY3lhbicsXG4gIH1cbiAgcmV0dXJuIHRtdXhDb2xvcnNbY29sb3JdXG59XG5cbi8qKlxuICogUnVucyBhIHRtdXggY29tbWFuZCBpbiB0aGUgdXNlcidzIG9yaWdpbmFsIHRtdXggc2Vzc2lvbiAobm8gc29ja2V0IG92ZXJyaWRlKS5cbiAqIFVzZSB0aGlzIGZvciBvcGVyYXRpb25zIHRoYXQgaW50ZXJhY3Qgd2l0aCB0aGUgdXNlcidzIHRtdXggcGFuZXMgKHNwbGl0LXBhbmUgd2l0aCBsZWFkZXIpLlxuICovXG5mdW5jdGlvbiBydW5UbXV4SW5Vc2VyU2Vzc2lvbihcbiAgYXJnczogc3RyaW5nW10sXG4pOiBQcm9taXNlPHsgc3Rkb3V0OiBzdHJpbmc7IHN0ZGVycjogc3RyaW5nOyBjb2RlOiBudW1iZXIgfT4ge1xuICByZXR1cm4gZXhlY0ZpbGVOb1Rocm93KFRNVVhfQ09NTUFORCwgYXJncylcbn1cblxuLyoqXG4gKiBSdW5zIGEgdG11eCBjb21tYW5kIGluIHRoZSBleHRlcm5hbCBzd2FybSBzb2NrZXQuXG4gKiBVc2UgdGhpcyBmb3Igb3BlcmF0aW9ucyBpbiB0aGUgc3RhbmRhbG9uZSBzd2FybSBzZXNzaW9uICh3aGVuIHVzZXIgaXMgbm90IGluIHRtdXgpLlxuICovXG5mdW5jdGlvbiBydW5UbXV4SW5Td2FybShcbiAgYXJnczogc3RyaW5nW10sXG4pOiBQcm9taXNlPHsgc3Rkb3V0OiBzdHJpbmc7IHN0ZGVycjogc3RyaW5nOyBjb2RlOiBudW1iZXIgfT4ge1xuICByZXR1cm4gZXhlY0ZpbGVOb1Rocm93KFRNVVhfQ09NTUFORCwgWyctTCcsIGdldFN3YXJtU29ja2V0TmFtZSgpLCAuLi5hcmdzXSlcbn1cblxuLyoqXG4gKiBUbXV4QmFja2VuZCBpbXBsZW1lbnRzIFBhbmVCYWNrZW5kIHVzaW5nIHRtdXggZm9yIHBhbmUgbWFuYWdlbWVudC5cbiAqXG4gKiBXaGVuIHJ1bm5pbmcgSU5TSURFIHRtdXggKGxlYWRlciBpcyBpbiB0bXV4KTpcbiAqIC0gU3BsaXRzIHRoZSBjdXJyZW50IHdpbmRvdyB0byBhZGQgdGVhbW1hdGVzIGFsb25nc2lkZSB0aGUgbGVhZGVyXG4gKiAtIExlYWRlciBzdGF5cyBvbiBsZWZ0ICgzMCUpLCB0ZWFtbWF0ZXMgb24gcmlnaHQgKDcwJSlcbiAqXG4gKiBXaGVuIHJ1bm5pbmcgT1VUU0lERSB0bXV4IChsZWFkZXIgaXMgaW4gcmVndWxhciB0ZXJtaW5hbCk6XG4gKiAtIENyZWF0ZXMgYSBjbGF1ZGUtc3dhcm0gc2Vzc2lvbiB3aXRoIGEgc3dhcm0tdmlldyB3aW5kb3dcbiAqIC0gQWxsIHRlYW1tYXRlcyBhcmUgZXF1YWxseSBkaXN0cmlidXRlZCAobm8gbGVhZGVyIHBhbmUpXG4gKi9cbmV4cG9ydCBjbGFzcyBUbXV4QmFja2VuZCBpbXBsZW1lbnRzIFBhbmVCYWNrZW5kIHtcbiAgcmVhZG9ubHkgdHlwZSA9ICd0bXV4JyBhcyBjb25zdFxuICByZWFkb25seSBkaXNwbGF5TmFtZSA9ICd0bXV4J1xuICByZWFkb25seSBzdXBwb3J0c0hpZGVTaG93ID0gdHJ1ZVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdG11eCBpcyBpbnN0YWxsZWQgYW5kIGF2YWlsYWJsZS5cbiAgICogRGVsZWdhdGVzIHRvIGRldGVjdGlvbi50cyBmb3IgY29uc2lzdGVudCBkZXRlY3Rpb24gbG9naWMuXG4gICAqL1xuICBhc3luYyBpc0F2YWlsYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gaXNUbXV4QXZhaWxhYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgaW5zaWRlIGEgdG11eCBzZXNzaW9uLlxuICAgKiBEZWxlZ2F0ZXMgdG8gZGV0ZWN0aW9uLnRzIGZvciBjb25zaXN0ZW50IGRldGVjdGlvbiBsb2dpYy5cbiAgICovXG4gIGFzeW5jIGlzUnVubmluZ0luc2lkZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gaXNJbnNpZGVUbXV4RnJvbURldGVjdGlvbigpXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyB0ZWFtbWF0ZSBwYW5lIGluIHRoZSBzd2FybSB2aWV3LlxuICAgKiBVc2VzIGEgbG9jayB0byBwcmV2ZW50IHJhY2UgY29uZGl0aW9ucyB3aGVuIG11bHRpcGxlIHRlYW1tYXRlcyBhcmUgc3Bhd25lZCBpbiBwYXJhbGxlbC5cbiAgICovXG4gIGFzeW5jIGNyZWF0ZVRlYW1tYXRlUGFuZUluU3dhcm1WaWV3KFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBjb2xvcjogQWdlbnRDb2xvck5hbWUsXG4gICk6IFByb21pc2U8Q3JlYXRlUGFuZVJlc3VsdD4ge1xuICAgIGNvbnN0IHJlbGVhc2VMb2NrID0gYXdhaXQgYWNxdWlyZVBhbmVDcmVhdGlvbkxvY2soKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGluc2lkZVRtdXggPSBhd2FpdCB0aGlzLmlzUnVubmluZ0luc2lkZSgpXG5cbiAgICAgIGlmIChpbnNpZGVUbXV4KSB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmNyZWF0ZVRlYW1tYXRlUGFuZVdpdGhMZWFkZXIobmFtZSwgY29sb3IpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLmNyZWF0ZVRlYW1tYXRlUGFuZUV4dGVybmFsKG5hbWUsIGNvbG9yKVxuICAgIH0gZmluYWxseSB7XG4gICAgICByZWxlYXNlTG9jaygpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgY29tbWFuZCB0byBhIHNwZWNpZmljIHBhbmUuXG4gICAqL1xuICBhc3luYyBzZW5kQ29tbWFuZFRvUGFuZShcbiAgICBwYW5lSWQ6IFBhbmVJZCxcbiAgICBjb21tYW5kOiBzdHJpbmcsXG4gICAgdXNlRXh0ZXJuYWxTZXNzaW9uID0gZmFsc2UsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHJ1blRtdXggPSB1c2VFeHRlcm5hbFNlc3Npb24gPyBydW5UbXV4SW5Td2FybSA6IHJ1blRtdXhJblVzZXJTZXNzaW9uXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcnVuVG11eChbJ3NlbmQta2V5cycsICctdCcsIHBhbmVJZCwgY29tbWFuZCwgJ0VudGVyJ10pXG5cbiAgICBpZiAocmVzdWx0LmNvZGUgIT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBzZW5kIGNvbW1hbmQgdG8gcGFuZSAke3BhbmVJZH06ICR7cmVzdWx0LnN0ZGVycn1gLFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBib3JkZXIgY29sb3IgZm9yIGEgc3BlY2lmaWMgcGFuZS5cbiAgICovXG4gIGFzeW5jIHNldFBhbmVCb3JkZXJDb2xvcihcbiAgICBwYW5lSWQ6IFBhbmVJZCxcbiAgICBjb2xvcjogQWdlbnRDb2xvck5hbWUsXG4gICAgdXNlRXh0ZXJuYWxTZXNzaW9uID0gZmFsc2UsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHRtdXhDb2xvciA9IGdldFRtdXhDb2xvck5hbWUoY29sb3IpXG4gICAgY29uc3QgcnVuVG11eCA9IHVzZUV4dGVybmFsU2Vzc2lvbiA/IHJ1blRtdXhJblN3YXJtIDogcnVuVG11eEluVXNlclNlc3Npb25cblxuICAgIC8vIFNldCBwYW5lLXNwZWNpZmljIGJvcmRlciBzdHlsZSB1c2luZyBwYW5lIG9wdGlvbnMgKHJlcXVpcmVzIHRtdXggMy4yKylcbiAgICBhd2FpdCBydW5UbXV4KFtcbiAgICAgICdzZWxlY3QtcGFuZScsXG4gICAgICAnLXQnLFxuICAgICAgcGFuZUlkLFxuICAgICAgJy1QJyxcbiAgICAgIGBiZz1kZWZhdWx0LGZnPSR7dG11eENvbG9yfWAsXG4gICAgXSlcblxuICAgIGF3YWl0IHJ1blRtdXgoW1xuICAgICAgJ3NldC1vcHRpb24nLFxuICAgICAgJy1wJyxcbiAgICAgICctdCcsXG4gICAgICBwYW5lSWQsXG4gICAgICAncGFuZS1ib3JkZXItc3R5bGUnLFxuICAgICAgYGZnPSR7dG11eENvbG9yfWAsXG4gICAgXSlcblxuICAgIGF3YWl0IHJ1blRtdXgoW1xuICAgICAgJ3NldC1vcHRpb24nLFxuICAgICAgJy1wJyxcbiAgICAgICctdCcsXG4gICAgICBwYW5lSWQsXG4gICAgICAncGFuZS1hY3RpdmUtYm9yZGVyLXN0eWxlJyxcbiAgICAgIGBmZz0ke3RtdXhDb2xvcn1gLFxuICAgIF0pXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdGl0bGUgZm9yIGEgcGFuZSAoc2hvd24gaW4gcGFuZSBib3JkZXIgaWYgcGFuZS1ib3JkZXItc3RhdHVzIGlzIHNldCkuXG4gICAqL1xuICBhc3luYyBzZXRQYW5lVGl0bGUoXG4gICAgcGFuZUlkOiBQYW5lSWQsXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGNvbG9yOiBBZ2VudENvbG9yTmFtZSxcbiAgICB1c2VFeHRlcm5hbFNlc3Npb24gPSBmYWxzZSxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgdG11eENvbG9yID0gZ2V0VG11eENvbG9yTmFtZShjb2xvcilcbiAgICBjb25zdCBydW5UbXV4ID0gdXNlRXh0ZXJuYWxTZXNzaW9uID8gcnVuVG11eEluU3dhcm0gOiBydW5UbXV4SW5Vc2VyU2Vzc2lvblxuXG4gICAgLy8gU2V0IHRoZSBwYW5lIHRpdGxlXG4gICAgYXdhaXQgcnVuVG11eChbJ3NlbGVjdC1wYW5lJywgJy10JywgcGFuZUlkLCAnLVQnLCBuYW1lXSlcblxuICAgIC8vIEVuYWJsZSBwYW5lIGJvcmRlciBzdGF0dXMgd2l0aCBjb2xvcmVkIGZvcm1hdFxuICAgIGF3YWl0IHJ1blRtdXgoW1xuICAgICAgJ3NldC1vcHRpb24nLFxuICAgICAgJy1wJyxcbiAgICAgICctdCcsXG4gICAgICBwYW5lSWQsXG4gICAgICAncGFuZS1ib3JkZXItZm9ybWF0JyxcbiAgICAgIGAjW2ZnPSR7dG11eENvbG9yfSxib2xkXSAje3BhbmVfdGl0bGV9ICNbZGVmYXVsdF1gLFxuICAgIF0pXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyBwYW5lIGJvcmRlciBzdGF0dXMgZm9yIGEgd2luZG93IChzaG93cyBwYW5lIHRpdGxlcykuXG4gICAqL1xuICBhc3luYyBlbmFibGVQYW5lQm9yZGVyU3RhdHVzKFxuICAgIHdpbmRvd1RhcmdldD86IHN0cmluZyxcbiAgICB1c2VFeHRlcm5hbFNlc3Npb24gPSBmYWxzZSxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gd2luZG93VGFyZ2V0IHx8IChhd2FpdCB0aGlzLmdldEN1cnJlbnRXaW5kb3dUYXJnZXQoKSlcbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcnVuVG11eCA9IHVzZUV4dGVybmFsU2Vzc2lvbiA/IHJ1blRtdXhJblN3YXJtIDogcnVuVG11eEluVXNlclNlc3Npb25cbiAgICBhd2FpdCBydW5UbXV4KFtcbiAgICAgICdzZXQtb3B0aW9uJyxcbiAgICAgICctdycsXG4gICAgICAnLXQnLFxuICAgICAgdGFyZ2V0LFxuICAgICAgJ3BhbmUtYm9yZGVyLXN0YXR1cycsXG4gICAgICAndG9wJyxcbiAgICBdKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlYmFsYW5jZXMgcGFuZXMgdG8gYWNoaWV2ZSB0aGUgZGVzaXJlZCBsYXlvdXQuXG4gICAqL1xuICBhc3luYyByZWJhbGFuY2VQYW5lcyhcbiAgICB3aW5kb3dUYXJnZXQ6IHN0cmluZyxcbiAgICBoYXNMZWFkZXI6IGJvb2xlYW4sXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmIChoYXNMZWFkZXIpIHtcbiAgICAgIGF3YWl0IHRoaXMucmViYWxhbmNlUGFuZXNXaXRoTGVhZGVyKHdpbmRvd1RhcmdldClcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgdGhpcy5yZWJhbGFuY2VQYW5lc1RpbGVkKHdpbmRvd1RhcmdldClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogS2lsbHMvY2xvc2VzIGEgc3BlY2lmaWMgcGFuZS5cbiAgICovXG4gIGFzeW5jIGtpbGxQYW5lKHBhbmVJZDogUGFuZUlkLCB1c2VFeHRlcm5hbFNlc3Npb24gPSBmYWxzZSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHJ1blRtdXggPSB1c2VFeHRlcm5hbFNlc3Npb24gPyBydW5UbXV4SW5Td2FybSA6IHJ1blRtdXhJblVzZXJTZXNzaW9uXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcnVuVG11eChbJ2tpbGwtcGFuZScsICctdCcsIHBhbmVJZF0pXG4gICAgcmV0dXJuIHJlc3VsdC5jb2RlID09PSAwXG4gIH1cblxuICAvKipcbiAgICogSGlkZXMgYSBwYW5lIGJ5IG1vdmluZyBpdCB0byBhIGRldGFjaGVkIGhpZGRlbiBzZXNzaW9uLlxuICAgKiBDcmVhdGVzIHRoZSBoaWRkZW4gc2Vzc2lvbiBpZiBpdCBkb2Vzbid0IGV4aXN0LCB0aGVuIHVzZXMgYnJlYWstcGFuZSB0byBtb3ZlIHRoZSBwYW5lIHRoZXJlLlxuICAgKi9cbiAgYXN5bmMgaGlkZVBhbmUocGFuZUlkOiBQYW5lSWQsIHVzZUV4dGVybmFsU2Vzc2lvbiA9IGZhbHNlKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgcnVuVG11eCA9IHVzZUV4dGVybmFsU2Vzc2lvbiA/IHJ1blRtdXhJblN3YXJtIDogcnVuVG11eEluVXNlclNlc3Npb25cblxuICAgIC8vIENyZWF0ZSBoaWRkZW4gc2Vzc2lvbiBpZiBpdCBkb2Vzbid0IGV4aXN0IChkZXRhY2hlZCwgbm90IHZpc2libGUpXG4gICAgYXdhaXQgcnVuVG11eChbJ25ldy1zZXNzaW9uJywgJy1kJywgJy1zJywgSElEREVOX1NFU1NJT05fTkFNRV0pXG5cbiAgICAvLyBNb3ZlIHRoZSBwYW5lIHRvIHRoZSBoaWRkZW4gc2Vzc2lvblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJ1blRtdXgoW1xuICAgICAgJ2JyZWFrLXBhbmUnLFxuICAgICAgJy1kJyxcbiAgICAgICctcycsXG4gICAgICBwYW5lSWQsXG4gICAgICAnLXQnLFxuICAgICAgYCR7SElEREVOX1NFU1NJT05fTkFNRX06YCxcbiAgICBdKVxuXG4gICAgaWYgKHJlc3VsdC5jb2RlID09PSAwKSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoYFtUbXV4QmFja2VuZF0gSGlkZGVuIHBhbmUgJHtwYW5lSWR9YClcbiAgICB9IGVsc2Uge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgW1RtdXhCYWNrZW5kXSBGYWlsZWQgdG8gaGlkZSBwYW5lICR7cGFuZUlkfTogJHtyZXN1bHQuc3RkZXJyfWAsXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdC5jb2RlID09PSAwXG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgYSBwcmV2aW91c2x5IGhpZGRlbiBwYW5lIGJ5IGpvaW5pbmcgaXQgYmFjayBpbnRvIHRoZSB0YXJnZXQgd2luZG93LlxuICAgKiBVc2VzIGB0bXV4IGpvaW4tcGFuZWAgdG8gbW92ZSB0aGUgcGFuZSBiYWNrLCB0aGVuIHJlYXBwbGllcyBtYWluLXZlcnRpY2FsIGxheW91dFxuICAgKiB3aXRoIGxlYWRlciBhdCAzMCUuXG4gICAqL1xuICBhc3luYyBzaG93UGFuZShcbiAgICBwYW5lSWQ6IFBhbmVJZCxcbiAgICB0YXJnZXRXaW5kb3dPclBhbmU6IHN0cmluZyxcbiAgICB1c2VFeHRlcm5hbFNlc3Npb24gPSBmYWxzZSxcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgcnVuVG11eCA9IHVzZUV4dGVybmFsU2Vzc2lvbiA/IHJ1blRtdXhJblN3YXJtIDogcnVuVG11eEluVXNlclNlc3Npb25cblxuICAgIC8vIGpvaW4tcGFuZSAtczogc291cmNlIHBhbmUgdG8gbW92ZVxuICAgIC8vIC10OiB0YXJnZXQgd2luZG93L3BhbmUgdG8gam9pbiBpbnRvXG4gICAgLy8gLWg6IGpvaW4gaG9yaXpvbnRhbGx5IChzaWRlIGJ5IHNpZGUpXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcnVuVG11eChbXG4gICAgICAnam9pbi1wYW5lJyxcbiAgICAgICctaCcsXG4gICAgICAnLXMnLFxuICAgICAgcGFuZUlkLFxuICAgICAgJy10JyxcbiAgICAgIHRhcmdldFdpbmRvd09yUGFuZSxcbiAgICBdKVxuXG4gICAgaWYgKHJlc3VsdC5jb2RlICE9PSAwKSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBbVG11eEJhY2tlbmRdIEZhaWxlZCB0byBzaG93IHBhbmUgJHtwYW5lSWR9OiAke3Jlc3VsdC5zdGRlcnJ9YCxcbiAgICAgIClcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbVG11eEJhY2tlbmRdIFNob3dlZCBwYW5lICR7cGFuZUlkfSBpbiAke3RhcmdldFdpbmRvd09yUGFuZX1gLFxuICAgIClcblxuICAgIC8vIFJlYXBwbHkgbWFpbi12ZXJ0aWNhbCBsYXlvdXQgd2l0aCBsZWFkZXIgYXQgMzAlXG4gICAgYXdhaXQgcnVuVG11eChbJ3NlbGVjdC1sYXlvdXQnLCAnLXQnLCB0YXJnZXRXaW5kb3dPclBhbmUsICdtYWluLXZlcnRpY2FsJ10pXG5cbiAgICAvLyBHZXQgdGhlIGZpcnN0IHBhbmUgKGxlYWRlcikgYW5kIHJlc2l6ZSB0byAzMCVcbiAgICBjb25zdCBwYW5lc1Jlc3VsdCA9IGF3YWl0IHJ1blRtdXgoW1xuICAgICAgJ2xpc3QtcGFuZXMnLFxuICAgICAgJy10JyxcbiAgICAgIHRhcmdldFdpbmRvd09yUGFuZSxcbiAgICAgICctRicsXG4gICAgICAnI3twYW5lX2lkfScsXG4gICAgXSlcblxuICAgIGNvbnN0IHBhbmVzID0gcGFuZXNSZXN1bHQuc3Rkb3V0LnRyaW0oKS5zcGxpdCgnXFxuJykuZmlsdGVyKEJvb2xlYW4pXG4gICAgaWYgKHBhbmVzWzBdKSB7XG4gICAgICBhd2FpdCBydW5UbXV4KFsncmVzaXplLXBhbmUnLCAnLXQnLCBwYW5lc1swXSwgJy14JywgJzMwJSddKVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvLyBQcml2YXRlIGhlbHBlciBtZXRob2RzXG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGxlYWRlcidzIHBhbmUgSUQuXG4gICAqIFVzZXMgdGhlIFRNVVhfUEFORSBlbnYgdmFyIGNhcHR1cmVkIGF0IG1vZHVsZSBsb2FkIHRvIGVuc3VyZSB3ZSBhbHdheXNcbiAgICogZ2V0IHRoZSBsZWFkZXIncyBvcmlnaW5hbCBwYW5lLCBldmVuIGlmIHRoZSB1c2VyIGhhcyBzd2l0Y2hlZCBwYW5lcy5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgZ2V0Q3VycmVudFBhbmVJZCgpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgICAvLyBVc2UgdGhlIHBhbmUgSUQgY2FwdHVyZWQgYXQgc3RhcnR1cCAoZnJvbSBUTVVYX1BBTkUgZW52IHZhcilcbiAgICBjb25zdCBsZWFkZXJQYW5lID0gZ2V0TGVhZGVyUGFuZUlkKClcbiAgICBpZiAobGVhZGVyUGFuZSkge1xuICAgICAgcmV0dXJuIGxlYWRlclBhbmVcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayB0byBkeW5hbWljIHF1ZXJ5IChzaG91bGRuJ3QgaGFwcGVuIGlmIHdlJ3JlIGluc2lkZSB0bXV4KVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdyhUTVVYX0NPTU1BTkQsIFtcbiAgICAgICdkaXNwbGF5LW1lc3NhZ2UnLFxuICAgICAgJy1wJyxcbiAgICAgICcje3BhbmVfaWR9JyxcbiAgICBdKVxuXG4gICAgaWYgKHJlc3VsdC5jb2RlICE9PSAwKSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBbVG11eEJhY2tlbmRdIEZhaWxlZCB0byBnZXQgY3VycmVudCBwYW5lIElEIChleGl0ICR7cmVzdWx0LmNvZGV9KTogJHtyZXN1bHQuc3RkZXJyfWAsXG4gICAgICApXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQuc3Rkb3V0LnRyaW0oKVxuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGxlYWRlcidzIHdpbmRvdyB0YXJnZXQgKHNlc3Npb246d2luZG93IGZvcm1hdCkuXG4gICAqIFVzZXMgdGhlIGxlYWRlcidzIHBhbmUgSUQgdG8gcXVlcnkgZm9yIGl0cyB3aW5kb3csIGVuc3VyaW5nIHdlIGdldCB0aGVcbiAgICogY29ycmVjdCB3aW5kb3cgZXZlbiBpZiB0aGUgdXNlciBoYXMgc3dpdGNoZWQgdG8gYSBkaWZmZXJlbnQgd2luZG93LlxuICAgKiBDYWNoZXMgdGhlIHJlc3VsdCBzaW5jZSB0aGUgbGVhZGVyJ3Mgd2luZG93IHdvbid0IGNoYW5nZS5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgZ2V0Q3VycmVudFdpbmRvd1RhcmdldCgpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgICAvLyBSZXR1cm4gY2FjaGVkIHZhbHVlIGlmIGF2YWlsYWJsZVxuICAgIGlmIChjYWNoZWRMZWFkZXJXaW5kb3dUYXJnZXQpIHtcbiAgICAgIHJldHVybiBjYWNoZWRMZWFkZXJXaW5kb3dUYXJnZXRcbiAgICB9XG5cbiAgICAvLyBCdWlsZCB0aGUgY29tbWFuZCAtIHVzZSAtdCB0byB0YXJnZXQgdGhlIGxlYWRlcidzIHBhbmUgc3BlY2lmaWNhbGx5XG4gICAgY29uc3QgbGVhZGVyUGFuZSA9IGdldExlYWRlclBhbmVJZCgpXG4gICAgY29uc3QgYXJncyA9IFsnZGlzcGxheS1tZXNzYWdlJ11cbiAgICBpZiAobGVhZGVyUGFuZSkge1xuICAgICAgYXJncy5wdXNoKCctdCcsIGxlYWRlclBhbmUpXG4gICAgfVxuICAgIGFyZ3MucHVzaCgnLXAnLCAnI3tzZXNzaW9uX25hbWV9OiN7d2luZG93X2luZGV4fScpXG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBleGVjRmlsZU5vVGhyb3coVE1VWF9DT01NQU5ELCBhcmdzKVxuXG4gICAgaWYgKHJlc3VsdC5jb2RlICE9PSAwKSB7XG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBbVG11eEJhY2tlbmRdIEZhaWxlZCB0byBnZXQgY3VycmVudCB3aW5kb3cgdGFyZ2V0IChleGl0ICR7cmVzdWx0LmNvZGV9KTogJHtyZXN1bHQuc3RkZXJyfWAsXG4gICAgICApXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNhY2hlZExlYWRlcldpbmRvd1RhcmdldCA9IHJlc3VsdC5zdGRvdXQudHJpbSgpXG4gICAgcmV0dXJuIGNhY2hlZExlYWRlcldpbmRvd1RhcmdldFxuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIG51bWJlciBvZiBwYW5lcyBpbiBhIHdpbmRvdy5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgZ2V0Q3VycmVudFdpbmRvd1BhbmVDb3VudChcbiAgICB3aW5kb3dUYXJnZXQ/OiBzdHJpbmcsXG4gICAgdXNlU3dhcm1Tb2NrZXQgPSBmYWxzZSxcbiAgKTogUHJvbWlzZTxudW1iZXIgfCBudWxsPiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gd2luZG93VGFyZ2V0IHx8IChhd2FpdCB0aGlzLmdldEN1cnJlbnRXaW5kb3dUYXJnZXQoKSlcbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCBhcmdzID0gWydsaXN0LXBhbmVzJywgJy10JywgdGFyZ2V0LCAnLUYnLCAnI3twYW5lX2lkfSddXG4gICAgY29uc3QgcmVzdWx0ID0gdXNlU3dhcm1Tb2NrZXRcbiAgICAgID8gYXdhaXQgcnVuVG11eEluU3dhcm0oYXJncylcbiAgICAgIDogYXdhaXQgcnVuVG11eEluVXNlclNlc3Npb24oYXJncylcblxuICAgIGlmIChyZXN1bHQuY29kZSAhPT0gMCkge1xuICAgICAgbG9nRXJyb3IoXG4gICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICBgW1RtdXhCYWNrZW5kXSBGYWlsZWQgdG8gZ2V0IHBhbmUgY291bnQgZm9yICR7dGFyZ2V0fSAoZXhpdCAke3Jlc3VsdC5jb2RlfSk6ICR7cmVzdWx0LnN0ZGVycn1gLFxuICAgICAgICApLFxuICAgICAgKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY291bnQocmVzdWx0LnN0ZG91dC50cmltKCkuc3BsaXQoJ1xcbicpLCBCb29sZWFuKVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhIHRtdXggc2Vzc2lvbiBleGlzdHMgaW4gdGhlIHN3YXJtIHNvY2tldC5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgaGFzU2Vzc2lvbkluU3dhcm0oc2Vzc2lvbk5hbWU6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJ1blRtdXhJblN3YXJtKFsnaGFzLXNlc3Npb24nLCAnLXQnLCBzZXNzaW9uTmFtZV0pXG4gICAgcmV0dXJuIHJlc3VsdC5jb2RlID09PSAwXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgc3dhcm0gc2Vzc2lvbiB3aXRoIGEgc2luZ2xlIHdpbmRvdyBmb3IgdGVhbW1hdGVzIHdoZW4gcnVubmluZyBvdXRzaWRlIHRtdXguXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGNyZWF0ZUV4dGVybmFsU3dhcm1TZXNzaW9uKCk6IFByb21pc2U8e1xuICAgIHdpbmRvd1RhcmdldDogc3RyaW5nXG4gICAgcGFuZUlkOiBzdHJpbmdcbiAgfT4ge1xuICAgIGNvbnN0IHNlc3Npb25FeGlzdHMgPSBhd2FpdCB0aGlzLmhhc1Nlc3Npb25JblN3YXJtKFNXQVJNX1NFU1NJT05fTkFNRSlcblxuICAgIGlmICghc2Vzc2lvbkV4aXN0cykge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcnVuVG11eEluU3dhcm0oW1xuICAgICAgICAnbmV3LXNlc3Npb24nLFxuICAgICAgICAnLWQnLFxuICAgICAgICAnLXMnLFxuICAgICAgICBTV0FSTV9TRVNTSU9OX05BTUUsXG4gICAgICAgICctbicsXG4gICAgICAgIFNXQVJNX1ZJRVdfV0lORE9XX05BTUUsXG4gICAgICAgICctUCcsXG4gICAgICAgICctRicsXG4gICAgICAgICcje3BhbmVfaWR9JyxcbiAgICAgIF0pXG5cbiAgICAgIGlmIChyZXN1bHQuY29kZSAhPT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEZhaWxlZCB0byBjcmVhdGUgc3dhcm0gc2Vzc2lvbjogJHtyZXN1bHQuc3RkZXJyIHx8ICdVbmtub3duIGVycm9yJ31gLFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhbmVJZCA9IHJlc3VsdC5zdGRvdXQudHJpbSgpXG4gICAgICBjb25zdCB3aW5kb3dUYXJnZXQgPSBgJHtTV0FSTV9TRVNTSU9OX05BTUV9OiR7U1dBUk1fVklFV19XSU5ET1dfTkFNRX1gXG5cbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgYFtUbXV4QmFja2VuZF0gQ3JlYXRlZCBleHRlcm5hbCBzd2FybSBzZXNzaW9uIHdpdGggd2luZG93ICR7d2luZG93VGFyZ2V0fSwgcGFuZSAke3BhbmVJZH1gLFxuICAgICAgKVxuXG4gICAgICByZXR1cm4geyB3aW5kb3dUYXJnZXQsIHBhbmVJZCB9XG4gICAgfVxuXG4gICAgLy8gU2Vzc2lvbiBleGlzdHMsIGNoZWNrIGlmIHN3YXJtLXZpZXcgd2luZG93IGV4aXN0c1xuICAgIGNvbnN0IGxpc3RSZXN1bHQgPSBhd2FpdCBydW5UbXV4SW5Td2FybShbXG4gICAgICAnbGlzdC13aW5kb3dzJyxcbiAgICAgICctdCcsXG4gICAgICBTV0FSTV9TRVNTSU9OX05BTUUsXG4gICAgICAnLUYnLFxuICAgICAgJyN7d2luZG93X25hbWV9JyxcbiAgICBdKVxuXG4gICAgY29uc3Qgd2luZG93cyA9IGxpc3RSZXN1bHQuc3Rkb3V0LnRyaW0oKS5zcGxpdCgnXFxuJykuZmlsdGVyKEJvb2xlYW4pXG4gICAgY29uc3Qgd2luZG93VGFyZ2V0ID0gYCR7U1dBUk1fU0VTU0lPTl9OQU1FfToke1NXQVJNX1ZJRVdfV0lORE9XX05BTUV9YFxuXG4gICAgaWYgKHdpbmRvd3MuaW5jbHVkZXMoU1dBUk1fVklFV19XSU5ET1dfTkFNRSkpIHtcbiAgICAgIGNvbnN0IHBhbmVSZXN1bHQgPSBhd2FpdCBydW5UbXV4SW5Td2FybShbXG4gICAgICAgICdsaXN0LXBhbmVzJyxcbiAgICAgICAgJy10JyxcbiAgICAgICAgd2luZG93VGFyZ2V0LFxuICAgICAgICAnLUYnLFxuICAgICAgICAnI3twYW5lX2lkfScsXG4gICAgICBdKVxuXG4gICAgICBjb25zdCBwYW5lcyA9IHBhbmVSZXN1bHQuc3Rkb3V0LnRyaW0oKS5zcGxpdCgnXFxuJykuZmlsdGVyKEJvb2xlYW4pXG4gICAgICByZXR1cm4geyB3aW5kb3dUYXJnZXQsIHBhbmVJZDogcGFuZXNbMF0gfHwgJycgfVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSB0aGUgc3dhcm0tdmlldyB3aW5kb3dcbiAgICBjb25zdCBjcmVhdGVSZXN1bHQgPSBhd2FpdCBydW5UbXV4SW5Td2FybShbXG4gICAgICAnbmV3LXdpbmRvdycsXG4gICAgICAnLXQnLFxuICAgICAgU1dBUk1fU0VTU0lPTl9OQU1FLFxuICAgICAgJy1uJyxcbiAgICAgIFNXQVJNX1ZJRVdfV0lORE9XX05BTUUsXG4gICAgICAnLVAnLFxuICAgICAgJy1GJyxcbiAgICAgICcje3BhbmVfaWR9JyxcbiAgICBdKVxuXG4gICAgaWYgKGNyZWF0ZVJlc3VsdC5jb2RlICE9PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgdG8gY3JlYXRlIHN3YXJtLXZpZXcgd2luZG93OiAke2NyZWF0ZVJlc3VsdC5zdGRlcnIgfHwgJ1Vua25vd24gZXJyb3InfWAsXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgd2luZG93VGFyZ2V0LCBwYW5lSWQ6IGNyZWF0ZVJlc3VsdC5zdGRvdXQudHJpbSgpIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgdGVhbW1hdGUgcGFuZSB3aGVuIHJ1bm5pbmcgaW5zaWRlIHRtdXggKHdpdGggbGVhZGVyKS5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgY3JlYXRlVGVhbW1hdGVQYW5lV2l0aExlYWRlcihcbiAgICB0ZWFtbWF0ZU5hbWU6IHN0cmluZyxcbiAgICB0ZWFtbWF0ZUNvbG9yOiBBZ2VudENvbG9yTmFtZSxcbiAgKTogUHJvbWlzZTxDcmVhdGVQYW5lUmVzdWx0PiB7XG4gICAgY29uc3QgY3VycmVudFBhbmVJZCA9IGF3YWl0IHRoaXMuZ2V0Q3VycmVudFBhbmVJZCgpXG4gICAgY29uc3Qgd2luZG93VGFyZ2V0ID0gYXdhaXQgdGhpcy5nZXRDdXJyZW50V2luZG93VGFyZ2V0KClcblxuICAgIGlmICghY3VycmVudFBhbmVJZCB8fCAhd2luZG93VGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBkZXRlcm1pbmUgY3VycmVudCB0bXV4IHBhbmUvd2luZG93JylcbiAgICB9XG5cbiAgICBjb25zdCBwYW5lQ291bnQgPSBhd2FpdCB0aGlzLmdldEN1cnJlbnRXaW5kb3dQYW5lQ291bnQod2luZG93VGFyZ2V0KVxuICAgIGlmIChwYW5lQ291bnQgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGRldGVybWluZSBwYW5lIGNvdW50IGZvciBjdXJyZW50IHdpbmRvdycpXG4gICAgfVxuICAgIGNvbnN0IGlzRmlyc3RUZWFtbWF0ZSA9IHBhbmVDb3VudCA9PT0gMVxuXG4gICAgbGV0IHNwbGl0UmVzdWx0XG4gICAgaWYgKGlzRmlyc3RUZWFtbWF0ZSkge1xuICAgICAgLy8gRmlyc3QgdGVhbW1hdGU6IHNwbGl0IGhvcml6b250YWxseSBmcm9tIHRoZSBsZWFkZXIgcGFuZVxuICAgICAgc3BsaXRSZXN1bHQgPSBhd2FpdCBleGVjRmlsZU5vVGhyb3coVE1VWF9DT01NQU5ELCBbXG4gICAgICAgICdzcGxpdC13aW5kb3cnLFxuICAgICAgICAnLXQnLFxuICAgICAgICBjdXJyZW50UGFuZUlkLFxuICAgICAgICAnLWgnLFxuICAgICAgICAnLWwnLFxuICAgICAgICAnNzAlJyxcbiAgICAgICAgJy1QJyxcbiAgICAgICAgJy1GJyxcbiAgICAgICAgJyN7cGFuZV9pZH0nLFxuICAgICAgXSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQWRkaXRpb25hbCB0ZWFtbWF0ZXM6IHNwbGl0IGZyb20gYW4gZXhpc3RpbmcgdGVhbW1hdGUgcGFuZVxuICAgICAgY29uc3QgbGlzdFJlc3VsdCA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdyhUTVVYX0NPTU1BTkQsIFtcbiAgICAgICAgJ2xpc3QtcGFuZXMnLFxuICAgICAgICAnLXQnLFxuICAgICAgICB3aW5kb3dUYXJnZXQsXG4gICAgICAgICctRicsXG4gICAgICAgICcje3BhbmVfaWR9JyxcbiAgICAgIF0pXG5cbiAgICAgIGNvbnN0IHBhbmVzID0gbGlzdFJlc3VsdC5zdGRvdXQudHJpbSgpLnNwbGl0KCdcXG4nKS5maWx0ZXIoQm9vbGVhbilcbiAgICAgIGNvbnN0IHRlYW1tYXRlUGFuZXMgPSBwYW5lcy5zbGljZSgxKVxuICAgICAgY29uc3QgdGVhbW1hdGVDb3VudCA9IHRlYW1tYXRlUGFuZXMubGVuZ3RoXG5cbiAgICAgIGNvbnN0IHNwbGl0VmVydGljYWxseSA9IHRlYW1tYXRlQ291bnQgJSAyID09PSAxXG4gICAgICBjb25zdCB0YXJnZXRQYW5lSW5kZXggPSBNYXRoLmZsb29yKCh0ZWFtbWF0ZUNvdW50IC0gMSkgLyAyKVxuICAgICAgY29uc3QgdGFyZ2V0UGFuZSA9XG4gICAgICAgIHRlYW1tYXRlUGFuZXNbdGFyZ2V0UGFuZUluZGV4XSB8fFxuICAgICAgICB0ZWFtbWF0ZVBhbmVzW3RlYW1tYXRlUGFuZXMubGVuZ3RoIC0gMV1cblxuICAgICAgc3BsaXRSZXN1bHQgPSBhd2FpdCBleGVjRmlsZU5vVGhyb3coVE1VWF9DT01NQU5ELCBbXG4gICAgICAgICdzcGxpdC13aW5kb3cnLFxuICAgICAgICAnLXQnLFxuICAgICAgICB0YXJnZXRQYW5lISxcbiAgICAgICAgc3BsaXRWZXJ0aWNhbGx5ID8gJy12JyA6ICctaCcsXG4gICAgICAgICctUCcsXG4gICAgICAgICctRicsXG4gICAgICAgICcje3BhbmVfaWR9JyxcbiAgICAgIF0pXG4gICAgfVxuXG4gICAgaWYgKHNwbGl0UmVzdWx0LmNvZGUgIT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGNyZWF0ZSB0ZWFtbWF0ZSBwYW5lOiAke3NwbGl0UmVzdWx0LnN0ZGVycn1gKVxuICAgIH1cblxuICAgIGNvbnN0IHBhbmVJZCA9IHNwbGl0UmVzdWx0LnN0ZG91dC50cmltKClcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgW1RtdXhCYWNrZW5kXSBDcmVhdGVkIHRlYW1tYXRlIHBhbmUgZm9yICR7dGVhbW1hdGVOYW1lfTogJHtwYW5lSWR9YCxcbiAgICApXG5cbiAgICBhd2FpdCB0aGlzLnNldFBhbmVCb3JkZXJDb2xvcihwYW5lSWQsIHRlYW1tYXRlQ29sb3IpXG4gICAgYXdhaXQgdGhpcy5zZXRQYW5lVGl0bGUocGFuZUlkLCB0ZWFtbWF0ZU5hbWUsIHRlYW1tYXRlQ29sb3IpXG4gICAgYXdhaXQgdGhpcy5yZWJhbGFuY2VQYW5lc1dpdGhMZWFkZXIod2luZG93VGFyZ2V0KVxuXG4gICAgLy8gV2FpdCBmb3Igc2hlbGwgdG8gaW5pdGlhbGl6ZSBiZWZvcmUgcmV0dXJuaW5nLCBzbyBjb21tYW5kcyBjYW4gYmUgc2VudCBpbW1lZGlhdGVseVxuICAgIGF3YWl0IHdhaXRGb3JQYW5lU2hlbGxSZWFkeSgpXG5cbiAgICByZXR1cm4geyBwYW5lSWQsIGlzRmlyc3RUZWFtbWF0ZSB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHRlYW1tYXRlIHBhbmUgd2hlbiBydW5uaW5nIG91dHNpZGUgdG11eCAobm8gbGVhZGVyIGluIHRtdXgpLlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBjcmVhdGVUZWFtbWF0ZVBhbmVFeHRlcm5hbChcbiAgICB0ZWFtbWF0ZU5hbWU6IHN0cmluZyxcbiAgICB0ZWFtbWF0ZUNvbG9yOiBBZ2VudENvbG9yTmFtZSxcbiAgKTogUHJvbWlzZTxDcmVhdGVQYW5lUmVzdWx0PiB7XG4gICAgY29uc3QgeyB3aW5kb3dUYXJnZXQsIHBhbmVJZDogZmlyc3RQYW5lSWQgfSA9XG4gICAgICBhd2FpdCB0aGlzLmNyZWF0ZUV4dGVybmFsU3dhcm1TZXNzaW9uKClcblxuICAgIGNvbnN0IHBhbmVDb3VudCA9IGF3YWl0IHRoaXMuZ2V0Q3VycmVudFdpbmRvd1BhbmVDb3VudCh3aW5kb3dUYXJnZXQsIHRydWUpXG4gICAgaWYgKHBhbmVDb3VudCA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZGV0ZXJtaW5lIHBhbmUgY291bnQgZm9yIHN3YXJtIHdpbmRvdycpXG4gICAgfVxuICAgIGNvbnN0IGlzRmlyc3RUZWFtbWF0ZSA9ICFmaXJzdFBhbmVVc2VkRm9yRXh0ZXJuYWwgJiYgcGFuZUNvdW50ID09PSAxXG5cbiAgICBsZXQgcGFuZUlkOiBzdHJpbmdcblxuICAgIGlmIChpc0ZpcnN0VGVhbW1hdGUpIHtcbiAgICAgIHBhbmVJZCA9IGZpcnN0UGFuZUlkXG4gICAgICBmaXJzdFBhbmVVc2VkRm9yRXh0ZXJuYWwgPSB0cnVlXG4gICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgIGBbVG11eEJhY2tlbmRdIFVzaW5nIGluaXRpYWwgcGFuZSBmb3IgZmlyc3QgdGVhbW1hdGUgJHt0ZWFtbWF0ZU5hbWV9OiAke3BhbmVJZH1gLFxuICAgICAgKVxuXG4gICAgICBhd2FpdCB0aGlzLmVuYWJsZVBhbmVCb3JkZXJTdGF0dXMod2luZG93VGFyZ2V0LCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsaXN0UmVzdWx0ID0gYXdhaXQgcnVuVG11eEluU3dhcm0oW1xuICAgICAgICAnbGlzdC1wYW5lcycsXG4gICAgICAgICctdCcsXG4gICAgICAgIHdpbmRvd1RhcmdldCxcbiAgICAgICAgJy1GJyxcbiAgICAgICAgJyN7cGFuZV9pZH0nLFxuICAgICAgXSlcblxuICAgICAgY29uc3QgcGFuZXMgPSBsaXN0UmVzdWx0LnN0ZG91dC50cmltKCkuc3BsaXQoJ1xcbicpLmZpbHRlcihCb29sZWFuKVxuICAgICAgY29uc3QgdGVhbW1hdGVDb3VudCA9IHBhbmVzLmxlbmd0aFxuXG4gICAgICBjb25zdCBzcGxpdFZlcnRpY2FsbHkgPSB0ZWFtbWF0ZUNvdW50ICUgMiA9PT0gMVxuICAgICAgY29uc3QgdGFyZ2V0UGFuZUluZGV4ID0gTWF0aC5mbG9vcigodGVhbW1hdGVDb3VudCAtIDEpIC8gMilcbiAgICAgIGNvbnN0IHRhcmdldFBhbmUgPSBwYW5lc1t0YXJnZXRQYW5lSW5kZXhdIHx8IHBhbmVzW3BhbmVzLmxlbmd0aCAtIDFdXG5cbiAgICAgIGNvbnN0IHNwbGl0UmVzdWx0ID0gYXdhaXQgcnVuVG11eEluU3dhcm0oW1xuICAgICAgICAnc3BsaXQtd2luZG93JyxcbiAgICAgICAgJy10JyxcbiAgICAgICAgdGFyZ2V0UGFuZSEsXG4gICAgICAgIHNwbGl0VmVydGljYWxseSA/ICctdicgOiAnLWgnLFxuICAgICAgICAnLVAnLFxuICAgICAgICAnLUYnLFxuICAgICAgICAnI3twYW5lX2lkfScsXG4gICAgICBdKVxuXG4gICAgICBpZiAoc3BsaXRSZXN1bHQuY29kZSAhPT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBjcmVhdGUgdGVhbW1hdGUgcGFuZTogJHtzcGxpdFJlc3VsdC5zdGRlcnJ9YClcbiAgICAgIH1cblxuICAgICAgcGFuZUlkID0gc3BsaXRSZXN1bHQuc3Rkb3V0LnRyaW0oKVxuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgW1RtdXhCYWNrZW5kXSBDcmVhdGVkIHRlYW1tYXRlIHBhbmUgZm9yICR7dGVhbW1hdGVOYW1lfTogJHtwYW5lSWR9YCxcbiAgICAgIClcbiAgICB9XG5cbiAgICBhd2FpdCB0aGlzLnNldFBhbmVCb3JkZXJDb2xvcihwYW5lSWQsIHRlYW1tYXRlQ29sb3IsIHRydWUpXG4gICAgYXdhaXQgdGhpcy5zZXRQYW5lVGl0bGUocGFuZUlkLCB0ZWFtbWF0ZU5hbWUsIHRlYW1tYXRlQ29sb3IsIHRydWUpXG4gICAgYXdhaXQgdGhpcy5yZWJhbGFuY2VQYW5lc1RpbGVkKHdpbmRvd1RhcmdldClcblxuICAgIC8vIFdhaXQgZm9yIHNoZWxsIHRvIGluaXRpYWxpemUgYmVmb3JlIHJldHVybmluZywgc28gY29tbWFuZHMgY2FuIGJlIHNlbnQgaW1tZWRpYXRlbHlcbiAgICBhd2FpdCB3YWl0Rm9yUGFuZVNoZWxsUmVhZHkoKVxuXG4gICAgcmV0dXJuIHsgcGFuZUlkLCBpc0ZpcnN0VGVhbW1hdGUgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlYmFsYW5jZXMgcGFuZXMgaW4gYSB3aW5kb3cgd2l0aCBhIGxlYWRlci5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgcmViYWxhbmNlUGFuZXNXaXRoTGVhZGVyKHdpbmRvd1RhcmdldDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgbGlzdFJlc3VsdCA9IGF3YWl0IHJ1blRtdXhJblVzZXJTZXNzaW9uKFtcbiAgICAgICdsaXN0LXBhbmVzJyxcbiAgICAgICctdCcsXG4gICAgICB3aW5kb3dUYXJnZXQsXG4gICAgICAnLUYnLFxuICAgICAgJyN7cGFuZV9pZH0nLFxuICAgIF0pXG5cbiAgICBjb25zdCBwYW5lcyA9IGxpc3RSZXN1bHQuc3Rkb3V0LnRyaW0oKS5zcGxpdCgnXFxuJykuZmlsdGVyKEJvb2xlYW4pXG4gICAgaWYgKHBhbmVzLmxlbmd0aCA8PSAyKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCBydW5UbXV4SW5Vc2VyU2Vzc2lvbihbXG4gICAgICAnc2VsZWN0LWxheW91dCcsXG4gICAgICAnLXQnLFxuICAgICAgd2luZG93VGFyZ2V0LFxuICAgICAgJ21haW4tdmVydGljYWwnLFxuICAgIF0pXG5cbiAgICBjb25zdCBsZWFkZXJQYW5lID0gcGFuZXNbMF1cbiAgICBhd2FpdCBydW5UbXV4SW5Vc2VyU2Vzc2lvbihbJ3Jlc2l6ZS1wYW5lJywgJy10JywgbGVhZGVyUGFuZSEsICcteCcsICczMCUnXSlcblxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbVG11eEJhY2tlbmRdIFJlYmFsYW5jZWQgJHtwYW5lcy5sZW5ndGggLSAxfSB0ZWFtbWF0ZSBwYW5lcyB3aXRoIGxlYWRlcmAsXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlYmFsYW5jZXMgcGFuZXMgaW4gYSB3aW5kb3cgd2l0aG91dCBhIGxlYWRlciAodGlsZWQgbGF5b3V0KS5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgcmViYWxhbmNlUGFuZXNUaWxlZCh3aW5kb3dUYXJnZXQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGxpc3RSZXN1bHQgPSBhd2FpdCBydW5UbXV4SW5Td2FybShbXG4gICAgICAnbGlzdC1wYW5lcycsXG4gICAgICAnLXQnLFxuICAgICAgd2luZG93VGFyZ2V0LFxuICAgICAgJy1GJyxcbiAgICAgICcje3BhbmVfaWR9JyxcbiAgICBdKVxuXG4gICAgY29uc3QgcGFuZXMgPSBsaXN0UmVzdWx0LnN0ZG91dC50cmltKCkuc3BsaXQoJ1xcbicpLmZpbHRlcihCb29sZWFuKVxuICAgIGlmIChwYW5lcy5sZW5ndGggPD0gMSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYXdhaXQgcnVuVG11eEluU3dhcm0oWydzZWxlY3QtbGF5b3V0JywgJy10Jywgd2luZG93VGFyZ2V0LCAndGlsZWQnXSlcblxuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbVG11eEJhY2tlbmRdIFJlYmFsYW5jZWQgJHtwYW5lcy5sZW5ndGh9IHRlYW1tYXRlIHBhbmVzIHdpdGggdGlsZWQgbGF5b3V0YCxcbiAgICApXG4gIH1cbn1cblxuLy8gUmVnaXN0ZXIgdGhlIGJhY2tlbmQgd2l0aCB0aGUgcmVnaXN0cnkgd2hlbiB0aGlzIG1vZHVsZSBpcyBpbXBvcnRlZC5cbi8vIFRoaXMgc2lkZSBlZmZlY3QgaXMgaW50ZW50aW9uYWwgLSB0aGUgcmVnaXN0cnkgbmVlZHMgYmFja2VuZHMgdG8gc2VsZi1yZWdpc3RlciB0byBhdm9pZCBjaXJjdWxhciBkZXBlbmRlbmNpZXMuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3VzdG9tLXJ1bGVzL25vLXRvcC1sZXZlbC1zaWRlLWVmZmVjdHNcbnJlZ2lzdGVyVG11eEJhY2tlbmQoVG11eEJhY2tlbmQpXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtDQSxTQUFTLHdCQUF1QztBQUM5QyxTQUFPLE1BQU0sd0JBQXdCO0FBQ3ZDO0FBTUEsU0FBUywwQkFBK0M7QUFDdEQsTUFBSTtBQUNKLFFBQU0sVUFBVSxJQUFJLFFBQWMsYUFBVztBQUMzQyxjQUFVO0FBQUEsRUFDWixDQUFDO0FBRUQsUUFBTSxlQUFlO0FBQ3JCLHFCQUFtQjtBQUVuQixTQUFPLGFBQWEsS0FBSyxNQUFNLE9BQVE7QUFDekM7QUFNQSxTQUFTLGlCQUFpQixPQUErQjtBQUN2RCxRQUFNLGFBQTZDO0FBQUEsSUFDakQsS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDQSxTQUFPLFdBQVcsS0FBSztBQUN6QjtBQU1BLFNBQVMscUJBQ1AsTUFDMkQ7QUFDM0QsU0FBTyxnQkFBZ0IsY0FBYyxJQUFJO0FBQzNDO0FBTUEsU0FBUyxlQUNQLE1BQzJEO0FBQzNELFNBQU8sZ0JBQWdCLGNBQWMsQ0FBQyxNQUFNLG1CQUFtQixHQUFHLEdBQUcsSUFBSSxDQUFDO0FBQzVFO0FBMUZBLElBc0JJLDBCQUdBLDBCQUdBLGtCQUlFLDBCQXVFTztBQXZHYjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFLQTtBQUlBLElBQUksMkJBQTJCO0FBRy9CLElBQUksMkJBQTBDO0FBRzlDLElBQUksbUJBQWtDLFFBQVEsUUFBUTtBQUl0RCxJQUFNLDJCQUEyQjtBQXVFMUIsSUFBTSxjQUFOLE1BQXlDO0FBQUEsTUFDckMsT0FBTztBQUFBLE1BQ1AsY0FBYztBQUFBLE1BQ2QsbUJBQW1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU01QixNQUFNLGNBQWdDO0FBQ3BDLGVBQU8sZ0JBQWdCO0FBQUEsTUFDekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTUEsTUFBTSxrQkFBb0M7QUFDeEMsZUFBTyxhQUEwQjtBQUFBLE1BQ25DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1BLE1BQU0sOEJBQ0osTUFDQSxPQUMyQjtBQUMzQixjQUFNLGNBQWMsTUFBTSx3QkFBd0I7QUFFbEQsWUFBSTtBQUNGLGdCQUFNLGFBQWEsTUFBTSxLQUFLLGdCQUFnQjtBQUU5QyxjQUFJLFlBQVk7QUFDZCxtQkFBTyxNQUFNLEtBQUssNkJBQTZCLE1BQU0sS0FBSztBQUFBLFVBQzVEO0FBRUEsaUJBQU8sTUFBTSxLQUFLLDJCQUEyQixNQUFNLEtBQUs7QUFBQSxRQUMxRCxVQUFFO0FBQ0Esc0JBQVk7QUFBQSxRQUNkO0FBQUEsTUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0EsTUFBTSxrQkFDSixRQUNBLFNBQ0EscUJBQXFCLE9BQ047QUFDZixjQUFNLFVBQVUscUJBQXFCLGlCQUFpQjtBQUN0RCxjQUFNLFNBQVMsTUFBTSxRQUFRLENBQUMsYUFBYSxNQUFNLFFBQVEsU0FBUyxPQUFPLENBQUM7QUFFMUUsWUFBSSxPQUFPLFNBQVMsR0FBRztBQUNyQixnQkFBTSxJQUFJO0FBQUEsWUFDUixrQ0FBa0MsTUFBTSxLQUFLLE9BQU8sTUFBTTtBQUFBLFVBQzVEO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtBLE1BQU0sbUJBQ0osUUFDQSxPQUNBLHFCQUFxQixPQUNOO0FBQ2YsY0FBTSxZQUFZLGlCQUFpQixLQUFLO0FBQ3hDLGNBQU0sVUFBVSxxQkFBcUIsaUJBQWlCO0FBR3RELGNBQU0sUUFBUTtBQUFBLFVBQ1o7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBLGlCQUFpQixTQUFTO0FBQUEsUUFDNUIsQ0FBQztBQUVELGNBQU0sUUFBUTtBQUFBLFVBQ1o7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQSxNQUFNLFNBQVM7QUFBQSxRQUNqQixDQUFDO0FBRUQsY0FBTSxRQUFRO0FBQUEsVUFDWjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBLE1BQU0sU0FBUztBQUFBLFFBQ2pCLENBQUM7QUFBQSxNQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLQSxNQUFNLGFBQ0osUUFDQSxNQUNBLE9BQ0EscUJBQXFCLE9BQ047QUFDZixjQUFNLFlBQVksaUJBQWlCLEtBQUs7QUFDeEMsY0FBTSxVQUFVLHFCQUFxQixpQkFBaUI7QUFHdEQsY0FBTSxRQUFRLENBQUMsZUFBZSxNQUFNLFFBQVEsTUFBTSxJQUFJLENBQUM7QUFHdkQsY0FBTSxRQUFRO0FBQUEsVUFDWjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBLFFBQVEsU0FBUztBQUFBLFFBQ25CLENBQUM7QUFBQSxNQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLQSxNQUFNLHVCQUNKLGNBQ0EscUJBQXFCLE9BQ047QUFDZixjQUFNLFNBQVMsZ0JBQWlCLE1BQU0sS0FBSyx1QkFBdUI7QUFDbEUsWUFBSSxDQUFDLFFBQVE7QUFDWDtBQUFBLFFBQ0Y7QUFFQSxjQUFNLFVBQVUscUJBQXFCLGlCQUFpQjtBQUN0RCxjQUFNLFFBQVE7QUFBQSxVQUNaO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLQSxNQUFNLGVBQ0osY0FDQSxXQUNlO0FBQ2YsWUFBSSxXQUFXO0FBQ2IsZ0JBQU0sS0FBSyx5QkFBeUIsWUFBWTtBQUFBLFFBQ2xELE9BQU87QUFDTCxnQkFBTSxLQUFLLG9CQUFvQixZQUFZO0FBQUEsUUFDN0M7QUFBQSxNQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLQSxNQUFNLFNBQVMsUUFBZ0IscUJBQXFCLE9BQXlCO0FBQzNFLGNBQU0sVUFBVSxxQkFBcUIsaUJBQWlCO0FBQ3RELGNBQU0sU0FBUyxNQUFNLFFBQVEsQ0FBQyxhQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ3hELGVBQU8sT0FBTyxTQUFTO0FBQUEsTUFDekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTUEsTUFBTSxTQUFTLFFBQWdCLHFCQUFxQixPQUF5QjtBQUMzRSxjQUFNLFVBQVUscUJBQXFCLGlCQUFpQjtBQUd0RCxjQUFNLFFBQVEsQ0FBQyxlQUFlLE1BQU0sTUFBTSxtQkFBbUIsQ0FBQztBQUc5RCxjQUFNLFNBQVMsTUFBTSxRQUFRO0FBQUEsVUFDM0I7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQSxHQUFHLG1CQUFtQjtBQUFBLFFBQ3hCLENBQUM7QUFFRCxZQUFJLE9BQU8sU0FBUyxHQUFHO0FBQ3JCLDBCQUFnQiw2QkFBNkIsTUFBTSxFQUFFO0FBQUEsUUFDdkQsT0FBTztBQUNMO0FBQUEsWUFDRSxxQ0FBcUMsTUFBTSxLQUFLLE9BQU8sTUFBTTtBQUFBLFVBQy9EO0FBQUEsUUFDRjtBQUVBLGVBQU8sT0FBTyxTQUFTO0FBQUEsTUFDekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPQSxNQUFNLFNBQ0osUUFDQSxvQkFDQSxxQkFBcUIsT0FDSDtBQUNsQixjQUFNLFVBQVUscUJBQXFCLGlCQUFpQjtBQUt0RCxjQUFNLFNBQVMsTUFBTSxRQUFRO0FBQUEsVUFDM0I7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0YsQ0FBQztBQUVELFlBQUksT0FBTyxTQUFTLEdBQUc7QUFDckI7QUFBQSxZQUNFLHFDQUFxQyxNQUFNLEtBQUssT0FBTyxNQUFNO0FBQUEsVUFDL0Q7QUFDQSxpQkFBTztBQUFBLFFBQ1Q7QUFFQTtBQUFBLFVBQ0UsNkJBQTZCLE1BQU0sT0FBTyxrQkFBa0I7QUFBQSxRQUM5RDtBQUdBLGNBQU0sUUFBUSxDQUFDLGlCQUFpQixNQUFNLG9CQUFvQixlQUFlLENBQUM7QUFHMUUsY0FBTSxjQUFjLE1BQU0sUUFBUTtBQUFBLFVBQ2hDO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0YsQ0FBQztBQUVELGNBQU0sUUFBUSxZQUFZLE9BQU8sS0FBSyxFQUFFLE1BQU0sSUFBSSxFQUFFLE9BQU8sT0FBTztBQUNsRSxZQUFJLE1BQU0sQ0FBQyxHQUFHO0FBQ1osZ0JBQU0sUUFBUSxDQUFDLGVBQWUsTUFBTSxNQUFNLENBQUMsR0FBRyxNQUFNLEtBQUssQ0FBQztBQUFBLFFBQzVEO0FBRUEsZUFBTztBQUFBLE1BQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVNBLE1BQWMsbUJBQTJDO0FBRXZELGNBQU0sYUFBYSxnQkFBZ0I7QUFDbkMsWUFBSSxZQUFZO0FBQ2QsaUJBQU87QUFBQSxRQUNUO0FBR0EsY0FBTSxTQUFTLE1BQU0sZ0JBQWdCLGNBQWM7QUFBQSxVQUNqRDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRixDQUFDO0FBRUQsWUFBSSxPQUFPLFNBQVMsR0FBRztBQUNyQjtBQUFBLFlBQ0UscURBQXFELE9BQU8sSUFBSSxNQUFNLE9BQU8sTUFBTTtBQUFBLFVBQ3JGO0FBQ0EsaUJBQU87QUFBQSxRQUNUO0FBRUEsZUFBTyxPQUFPLE9BQU8sS0FBSztBQUFBLE1BQzVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFRQSxNQUFjLHlCQUFpRDtBQUU3RCxZQUFJLDBCQUEwQjtBQUM1QixpQkFBTztBQUFBLFFBQ1Q7QUFHQSxjQUFNLGFBQWEsZ0JBQWdCO0FBQ25DLGNBQU0sT0FBTyxDQUFDLGlCQUFpQjtBQUMvQixZQUFJLFlBQVk7QUFDZCxlQUFLLEtBQUssTUFBTSxVQUFVO0FBQUEsUUFDNUI7QUFDQSxhQUFLLEtBQUssTUFBTSxpQ0FBaUM7QUFFakQsY0FBTSxTQUFTLE1BQU0sZ0JBQWdCLGNBQWMsSUFBSTtBQUV2RCxZQUFJLE9BQU8sU0FBUyxHQUFHO0FBQ3JCO0FBQUEsWUFDRSwyREFBMkQsT0FBTyxJQUFJLE1BQU0sT0FBTyxNQUFNO0FBQUEsVUFDM0Y7QUFDQSxpQkFBTztBQUFBLFFBQ1Q7QUFFQSxtQ0FBMkIsT0FBTyxPQUFPLEtBQUs7QUFDOUMsZUFBTztBQUFBLE1BQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtBLE1BQWMsMEJBQ1osY0FDQSxpQkFBaUIsT0FDTztBQUN4QixjQUFNLFNBQVMsZ0JBQWlCLE1BQU0sS0FBSyx1QkFBdUI7QUFDbEUsWUFBSSxDQUFDLFFBQVE7QUFDWCxpQkFBTztBQUFBLFFBQ1Q7QUFFQSxjQUFNLE9BQU8sQ0FBQyxjQUFjLE1BQU0sUUFBUSxNQUFNLFlBQVk7QUFDNUQsY0FBTSxTQUFTLGlCQUNYLE1BQU0sZUFBZSxJQUFJLElBQ3pCLE1BQU0scUJBQXFCLElBQUk7QUFFbkMsWUFBSSxPQUFPLFNBQVMsR0FBRztBQUNyQjtBQUFBLFlBQ0UsSUFBSTtBQUFBLGNBQ0YsOENBQThDLE1BQU0sVUFBVSxPQUFPLElBQUksTUFBTSxPQUFPLE1BQU07QUFBQSxZQUM5RjtBQUFBLFVBQ0Y7QUFDQSxpQkFBTztBQUFBLFFBQ1Q7QUFFQSxlQUFPLE1BQU0sT0FBTyxPQUFPLEtBQUssRUFBRSxNQUFNLElBQUksR0FBRyxPQUFPO0FBQUEsTUFDeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtBLE1BQWMsa0JBQWtCLGFBQXVDO0FBQ3JFLGNBQU0sU0FBUyxNQUFNLGVBQWUsQ0FBQyxlQUFlLE1BQU0sV0FBVyxDQUFDO0FBQ3RFLGVBQU8sT0FBTyxTQUFTO0FBQUEsTUFDekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtBLE1BQWMsNkJBR1g7QUFDRCxjQUFNLGdCQUFnQixNQUFNLEtBQUssa0JBQWtCLGtCQUFrQjtBQUVyRSxZQUFJLENBQUMsZUFBZTtBQUNsQixnQkFBTSxTQUFTLE1BQU0sZUFBZTtBQUFBLFlBQ2xDO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGLENBQUM7QUFFRCxjQUFJLE9BQU8sU0FBUyxHQUFHO0FBQ3JCLGtCQUFNLElBQUk7QUFBQSxjQUNSLG1DQUFtQyxPQUFPLFVBQVUsZUFBZTtBQUFBLFlBQ3JFO0FBQUEsVUFDRjtBQUVBLGdCQUFNLFNBQVMsT0FBTyxPQUFPLEtBQUs7QUFDbEMsZ0JBQU1BLGdCQUFlLEdBQUcsa0JBQWtCLElBQUksc0JBQXNCO0FBRXBFO0FBQUEsWUFDRSw0REFBNERBLGFBQVksVUFBVSxNQUFNO0FBQUEsVUFDMUY7QUFFQSxpQkFBTyxFQUFFLGNBQUFBLGVBQWMsT0FBTztBQUFBLFFBQ2hDO0FBR0EsY0FBTSxhQUFhLE1BQU0sZUFBZTtBQUFBLFVBQ3RDO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0YsQ0FBQztBQUVELGNBQU0sVUFBVSxXQUFXLE9BQU8sS0FBSyxFQUFFLE1BQU0sSUFBSSxFQUFFLE9BQU8sT0FBTztBQUNuRSxjQUFNLGVBQWUsR0FBRyxrQkFBa0IsSUFBSSxzQkFBc0I7QUFFcEUsWUFBSSxRQUFRLFNBQVMsc0JBQXNCLEdBQUc7QUFDNUMsZ0JBQU0sYUFBYSxNQUFNLGVBQWU7QUFBQSxZQUN0QztBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGLENBQUM7QUFFRCxnQkFBTSxRQUFRLFdBQVcsT0FBTyxLQUFLLEVBQUUsTUFBTSxJQUFJLEVBQUUsT0FBTyxPQUFPO0FBQ2pFLGlCQUFPLEVBQUUsY0FBYyxRQUFRLE1BQU0sQ0FBQyxLQUFLLEdBQUc7QUFBQSxRQUNoRDtBQUdBLGNBQU0sZUFBZSxNQUFNLGVBQWU7QUFBQSxVQUN4QztBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGLENBQUM7QUFFRCxZQUFJLGFBQWEsU0FBUyxHQUFHO0FBQzNCLGdCQUFNLElBQUk7QUFBQSxZQUNSLHVDQUF1QyxhQUFhLFVBQVUsZUFBZTtBQUFBLFVBQy9FO0FBQUEsUUFDRjtBQUVBLGVBQU8sRUFBRSxjQUFjLFFBQVEsYUFBYSxPQUFPLEtBQUssRUFBRTtBQUFBLE1BQzVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLQSxNQUFjLDZCQUNaLGNBQ0EsZUFDMkI7QUFDM0IsY0FBTSxnQkFBZ0IsTUFBTSxLQUFLLGlCQUFpQjtBQUNsRCxjQUFNLGVBQWUsTUFBTSxLQUFLLHVCQUF1QjtBQUV2RCxZQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYztBQUNuQyxnQkFBTSxJQUFJLE1BQU0sOENBQThDO0FBQUEsUUFDaEU7QUFFQSxjQUFNLFlBQVksTUFBTSxLQUFLLDBCQUEwQixZQUFZO0FBQ25FLFlBQUksY0FBYyxNQUFNO0FBQ3RCLGdCQUFNLElBQUksTUFBTSxtREFBbUQ7QUFBQSxRQUNyRTtBQUNBLGNBQU0sa0JBQWtCLGNBQWM7QUFFdEMsWUFBSTtBQUNKLFlBQUksaUJBQWlCO0FBRW5CLHdCQUFjLE1BQU0sZ0JBQWdCLGNBQWM7QUFBQSxZQUNoRDtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRixDQUFDO0FBQUEsUUFDSCxPQUFPO0FBRUwsZ0JBQU0sYUFBYSxNQUFNLGdCQUFnQixjQUFjO0FBQUEsWUFDckQ7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRixDQUFDO0FBRUQsZ0JBQU0sUUFBUSxXQUFXLE9BQU8sS0FBSyxFQUFFLE1BQU0sSUFBSSxFQUFFLE9BQU8sT0FBTztBQUNqRSxnQkFBTSxnQkFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDbkMsZ0JBQU0sZ0JBQWdCLGNBQWM7QUFFcEMsZ0JBQU0sa0JBQWtCLGdCQUFnQixNQUFNO0FBQzlDLGdCQUFNLGtCQUFrQixLQUFLLE9BQU8sZ0JBQWdCLEtBQUssQ0FBQztBQUMxRCxnQkFBTSxhQUNKLGNBQWMsZUFBZSxLQUM3QixjQUFjLGNBQWMsU0FBUyxDQUFDO0FBRXhDLHdCQUFjLE1BQU0sZ0JBQWdCLGNBQWM7QUFBQSxZQUNoRDtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQSxrQkFBa0IsT0FBTztBQUFBLFlBQ3pCO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGLENBQUM7QUFBQSxRQUNIO0FBRUEsWUFBSSxZQUFZLFNBQVMsR0FBRztBQUMxQixnQkFBTSxJQUFJLE1BQU0sbUNBQW1DLFlBQVksTUFBTSxFQUFFO0FBQUEsUUFDekU7QUFFQSxjQUFNLFNBQVMsWUFBWSxPQUFPLEtBQUs7QUFDdkM7QUFBQSxVQUNFLDJDQUEyQyxZQUFZLEtBQUssTUFBTTtBQUFBLFFBQ3BFO0FBRUEsY0FBTSxLQUFLLG1CQUFtQixRQUFRLGFBQWE7QUFDbkQsY0FBTSxLQUFLLGFBQWEsUUFBUSxjQUFjLGFBQWE7QUFDM0QsY0FBTSxLQUFLLHlCQUF5QixZQUFZO0FBR2hELGNBQU0sc0JBQXNCO0FBRTVCLGVBQU8sRUFBRSxRQUFRLGdCQUFnQjtBQUFBLE1BQ25DO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLQSxNQUFjLDJCQUNaLGNBQ0EsZUFDMkI7QUFDM0IsY0FBTSxFQUFFLGNBQWMsUUFBUSxZQUFZLElBQ3hDLE1BQU0sS0FBSywyQkFBMkI7QUFFeEMsY0FBTSxZQUFZLE1BQU0sS0FBSywwQkFBMEIsY0FBYyxJQUFJO0FBQ3pFLFlBQUksY0FBYyxNQUFNO0FBQ3RCLGdCQUFNLElBQUksTUFBTSxpREFBaUQ7QUFBQSxRQUNuRTtBQUNBLGNBQU0sa0JBQWtCLENBQUMsNEJBQTRCLGNBQWM7QUFFbkUsWUFBSTtBQUVKLFlBQUksaUJBQWlCO0FBQ25CLG1CQUFTO0FBQ1QscUNBQTJCO0FBQzNCO0FBQUEsWUFDRSx1REFBdUQsWUFBWSxLQUFLLE1BQU07QUFBQSxVQUNoRjtBQUVBLGdCQUFNLEtBQUssdUJBQXVCLGNBQWMsSUFBSTtBQUFBLFFBQ3RELE9BQU87QUFDTCxnQkFBTSxhQUFhLE1BQU0sZUFBZTtBQUFBLFlBQ3RDO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0YsQ0FBQztBQUVELGdCQUFNLFFBQVEsV0FBVyxPQUFPLEtBQUssRUFBRSxNQUFNLElBQUksRUFBRSxPQUFPLE9BQU87QUFDakUsZ0JBQU0sZ0JBQWdCLE1BQU07QUFFNUIsZ0JBQU0sa0JBQWtCLGdCQUFnQixNQUFNO0FBQzlDLGdCQUFNLGtCQUFrQixLQUFLLE9BQU8sZ0JBQWdCLEtBQUssQ0FBQztBQUMxRCxnQkFBTSxhQUFhLE1BQU0sZUFBZSxLQUFLLE1BQU0sTUFBTSxTQUFTLENBQUM7QUFFbkUsZ0JBQU0sY0FBYyxNQUFNLGVBQWU7QUFBQSxZQUN2QztBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQSxrQkFBa0IsT0FBTztBQUFBLFlBQ3pCO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGLENBQUM7QUFFRCxjQUFJLFlBQVksU0FBUyxHQUFHO0FBQzFCLGtCQUFNLElBQUksTUFBTSxtQ0FBbUMsWUFBWSxNQUFNLEVBQUU7QUFBQSxVQUN6RTtBQUVBLG1CQUFTLFlBQVksT0FBTyxLQUFLO0FBQ2pDO0FBQUEsWUFDRSwyQ0FBMkMsWUFBWSxLQUFLLE1BQU07QUFBQSxVQUNwRTtBQUFBLFFBQ0Y7QUFFQSxjQUFNLEtBQUssbUJBQW1CLFFBQVEsZUFBZSxJQUFJO0FBQ3pELGNBQU0sS0FBSyxhQUFhLFFBQVEsY0FBYyxlQUFlLElBQUk7QUFDakUsY0FBTSxLQUFLLG9CQUFvQixZQUFZO0FBRzNDLGNBQU0sc0JBQXNCO0FBRTVCLGVBQU8sRUFBRSxRQUFRLGdCQUFnQjtBQUFBLE1BQ25DO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLQSxNQUFjLHlCQUF5QixjQUFxQztBQUMxRSxjQUFNLGFBQWEsTUFBTSxxQkFBcUI7QUFBQSxVQUM1QztBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGLENBQUM7QUFFRCxjQUFNLFFBQVEsV0FBVyxPQUFPLEtBQUssRUFBRSxNQUFNLElBQUksRUFBRSxPQUFPLE9BQU87QUFDakUsWUFBSSxNQUFNLFVBQVUsR0FBRztBQUNyQjtBQUFBLFFBQ0Y7QUFFQSxjQUFNLHFCQUFxQjtBQUFBLFVBQ3pCO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRixDQUFDO0FBRUQsY0FBTSxhQUFhLE1BQU0sQ0FBQztBQUMxQixjQUFNLHFCQUFxQixDQUFDLGVBQWUsTUFBTSxZQUFhLE1BQU0sS0FBSyxDQUFDO0FBRTFFO0FBQUEsVUFDRSw0QkFBNEIsTUFBTSxTQUFTLENBQUM7QUFBQSxRQUM5QztBQUFBLE1BQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtBLE1BQWMsb0JBQW9CLGNBQXFDO0FBQ3JFLGNBQU0sYUFBYSxNQUFNLGVBQWU7QUFBQSxVQUN0QztBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGLENBQUM7QUFFRCxjQUFNLFFBQVEsV0FBVyxPQUFPLEtBQUssRUFBRSxNQUFNLElBQUksRUFBRSxPQUFPLE9BQU87QUFDakUsWUFBSSxNQUFNLFVBQVUsR0FBRztBQUNyQjtBQUFBLFFBQ0Y7QUFFQSxjQUFNLGVBQWUsQ0FBQyxpQkFBaUIsTUFBTSxjQUFjLE9BQU8sQ0FBQztBQUVuRTtBQUFBLFVBQ0UsNEJBQTRCLE1BQU0sTUFBTTtBQUFBLFFBQzFDO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFLQSx3QkFBb0IsV0FBVztBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbIndpbmRvd1RhcmdldCJdCn0K
