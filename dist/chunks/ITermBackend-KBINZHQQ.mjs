#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_registry,
  registerITermBackend
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
  IT2_COMMAND,
  init_detection,
  isInITerm2,
  isIt2CliAvailable
} from "./chunk-HUHT3U2I.mjs";
import "./chunk-X7OJ6FBK.mjs";
import "./chunk-4GJVIJWN.mjs";
import "./chunk-27EOXKZU.mjs";
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
import "./chunk-DQ5JTCOA.mjs";
import "./chunk-HGPSKCV5.mjs";
import "./chunk-GC6TKYZ3.mjs";
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
import "./chunk-KCFW5MKY.mjs";
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

// src/utils/swarm/backends/ITermBackend.ts
function acquirePaneCreationLock() {
  let release;
  const newLock = new Promise((resolve) => {
    release = resolve;
  });
  const previousLock = paneCreationLock;
  paneCreationLock = newLock;
  return previousLock.then(() => release);
}
function runIt2(args) {
  return execFileNoThrow(IT2_COMMAND, args);
}
function parseSplitOutput(output) {
  const match = output.match(/Created new pane:\s*(.+)/);
  if (match && match[1]) {
    return match[1].trim();
  }
  return "";
}
function getLeaderSessionId() {
  const itermSessionId = process.env.ITERM_SESSION_ID;
  if (!itermSessionId) {
    return null;
  }
  const colonIndex = itermSessionId.indexOf(":");
  if (colonIndex === -1) {
    return null;
  }
  return itermSessionId.slice(colonIndex + 1);
}
var teammateSessionIds, firstPaneUsed, paneCreationLock, ITermBackend;
var init_ITermBackend = __esm({
  "src/utils/swarm/backends/ITermBackend.ts"() {
    init_debug();
    init_execFileNoThrow();
    init_detection();
    init_registry();
    teammateSessionIds = [];
    firstPaneUsed = false;
    paneCreationLock = Promise.resolve();
    ITermBackend = class {
      type = "iterm2";
      displayName = "iTerm2";
      supportsHideShow = false;
      /**
       * Checks if iTerm2 backend is available (in iTerm2 with it2 CLI installed).
       */
      async isAvailable() {
        const inITerm2 = isInITerm2();
        logForDebugging(`[ITermBackend] isAvailable check: inITerm2=${inITerm2}`);
        if (!inITerm2) {
          logForDebugging("[ITermBackend] isAvailable: false (not in iTerm2)");
          return false;
        }
        const it2Available = await isIt2CliAvailable();
        logForDebugging(
          `[ITermBackend] isAvailable: ${it2Available} (it2 CLI ${it2Available ? "found" : "not found"})`
        );
        return it2Available;
      }
      /**
       * Checks if we're currently running inside iTerm2.
       */
      async isRunningInside() {
        const result = isInITerm2();
        logForDebugging(`[ITermBackend] isRunningInside: ${result}`);
        return result;
      }
      /**
       * Creates a new teammate pane in the swarm view.
       * Uses a lock to prevent race conditions when multiple teammates are spawned in parallel.
       */
      async createTeammatePaneInSwarmView(name, color) {
        logForDebugging(
          `[ITermBackend] createTeammatePaneInSwarmView called for ${name} with color ${color}`
        );
        const releaseLock = await acquirePaneCreationLock();
        try {
          while (true) {
            const isFirstTeammate = !firstPaneUsed;
            logForDebugging(
              `[ITermBackend] Creating pane: isFirstTeammate=${isFirstTeammate}, existingPanes=${teammateSessionIds.length}`
            );
            let splitArgs;
            let targetedTeammateId;
            if (isFirstTeammate) {
              const leaderSessionId = getLeaderSessionId();
              if (leaderSessionId) {
                splitArgs = ["session", "split", "-v", "-s", leaderSessionId];
                logForDebugging(
                  `[ITermBackend] First split from leader session: ${leaderSessionId}`
                );
              } else {
                splitArgs = ["session", "split", "-v"];
                logForDebugging(
                  "[ITermBackend] First split from active session (no leader ID)"
                );
              }
            } else {
              targetedTeammateId = teammateSessionIds[teammateSessionIds.length - 1];
              if (targetedTeammateId) {
                splitArgs = ["session", "split", "-s", targetedTeammateId];
                logForDebugging(
                  `[ITermBackend] Subsequent split from teammate session: ${targetedTeammateId}`
                );
              } else {
                splitArgs = ["session", "split"];
                logForDebugging(
                  "[ITermBackend] Subsequent split from active session (no teammate ID)"
                );
              }
            }
            const splitResult = await runIt2(splitArgs);
            if (splitResult.code !== 0) {
              if (targetedTeammateId) {
                const listResult = await runIt2(["session", "list"]);
                if (listResult.code === 0 && !listResult.stdout.includes(targetedTeammateId)) {
                  logForDebugging(
                    `[ITermBackend] Split failed targeting dead session ${targetedTeammateId}, pruning and retrying: ${splitResult.stderr}`
                  );
                  const idx = teammateSessionIds.indexOf(targetedTeammateId);
                  if (idx !== -1) {
                    teammateSessionIds.splice(idx, 1);
                  }
                  if (teammateSessionIds.length === 0) {
                    firstPaneUsed = false;
                  }
                  continue;
                }
              }
              throw new Error(
                `Failed to create iTerm2 split pane: ${splitResult.stderr}`
              );
            }
            if (isFirstTeammate) {
              firstPaneUsed = true;
            }
            const paneId = parseSplitOutput(splitResult.stdout);
            if (!paneId) {
              throw new Error(
                `Failed to parse session ID from split output: ${splitResult.stdout}`
              );
            }
            logForDebugging(
              `[ITermBackend] Created teammate pane for ${name}: ${paneId}`
            );
            teammateSessionIds.push(paneId);
            return { paneId, isFirstTeammate };
          }
        } finally {
          releaseLock();
        }
      }
      /**
       * Sends a command to a specific pane.
       */
      async sendCommandToPane(paneId, command, _useExternalSession) {
        const args = paneId ? ["session", "run", "-s", paneId, command] : ["session", "run", command];
        const result = await runIt2(args);
        if (result.code !== 0) {
          throw new Error(
            `Failed to send command to iTerm2 pane ${paneId}: ${result.stderr}`
          );
        }
      }
      /**
       * No-op for iTerm2 - tab colors would require escape sequences but we skip
       * them for performance (each it2 call is slow).
       */
      async setPaneBorderColor(_paneId, _color, _useExternalSession) {
      }
      /**
       * No-op for iTerm2 - titles would require escape sequences but we skip
       * them for performance (each it2 call is slow).
       */
      async setPaneTitle(_paneId, _name, _color, _useExternalSession) {
      }
      /**
       * No-op for iTerm2 - pane titles are shown in tabs automatically.
       */
      async enablePaneBorderStatus(_windowTarget, _useExternalSession) {
      }
      /**
       * No-op for iTerm2 - pane balancing is handled automatically.
       */
      async rebalancePanes(_windowTarget, _hasLeader) {
        logForDebugging(
          "[ITermBackend] Pane rebalancing not implemented for iTerm2"
        );
      }
      /**
       * Kills/closes a specific pane using the it2 CLI.
       * Also removes the pane from tracked session IDs so subsequent spawns
       * don't try to split from a dead session.
       */
      async killPane(paneId, _useExternalSession) {
        const result = await runIt2(["session", "close", "-f", "-s", paneId]);
        const idx = teammateSessionIds.indexOf(paneId);
        if (idx !== -1) {
          teammateSessionIds.splice(idx, 1);
        }
        if (teammateSessionIds.length === 0) {
          firstPaneUsed = false;
        }
        return result.code === 0;
      }
      /**
       * Stub for hiding a pane - not supported in iTerm2 backend.
       * iTerm2 doesn't have a direct equivalent to tmux's break-pane.
       */
      async hidePane(_paneId, _useExternalSession) {
        logForDebugging("[ITermBackend] hidePane not supported in iTerm2");
        return false;
      }
      /**
       * Stub for showing a hidden pane - not supported in iTerm2 backend.
       * iTerm2 doesn't have a direct equivalent to tmux's join-pane.
       */
      async showPane(_paneId, _targetWindowOrPane, _useExternalSession) {
        logForDebugging("[ITermBackend] showPane not supported in iTerm2");
        return false;
      }
    };
    registerITermBackend(ITermBackend);
  }
});
init_ITermBackend();
export {
  ITermBackend
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL3N3YXJtL2JhY2tlbmRzL0lUZXJtQmFja2VuZC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHR5cGUgeyBBZ2VudENvbG9yTmFtZSB9IGZyb20gJy4uLy4uLy4uL3Rvb2xzL0FnZW50VG9vbC9hZ2VudENvbG9yTWFuYWdlci5qcydcbmltcG9ydCB7IGxvZ0ZvckRlYnVnZ2luZyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2RlYnVnLmpzJ1xuaW1wb3J0IHsgZXhlY0ZpbGVOb1Rocm93IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXhlY0ZpbGVOb1Rocm93LmpzJ1xuaW1wb3J0IHsgSVQyX0NPTU1BTkQsIGlzSW5JVGVybTIsIGlzSXQyQ2xpQXZhaWxhYmxlIH0gZnJvbSAnLi9kZXRlY3Rpb24uanMnXG5pbXBvcnQgeyByZWdpc3RlcklUZXJtQmFja2VuZCB9IGZyb20gJy4vcmVnaXN0cnkuanMnXG5pbXBvcnQgdHlwZSB7IENyZWF0ZVBhbmVSZXN1bHQsIFBhbmVCYWNrZW5kLCBQYW5lSWQgfSBmcm9tICcuL3R5cGVzLmpzJ1xuXG4vLyBUcmFjayBzZXNzaW9uIElEcyBmb3IgdGVhbW1hdGVzXG5jb25zdCB0ZWFtbWF0ZVNlc3Npb25JZHM6IHN0cmluZ1tdID0gW11cblxuLy8gVHJhY2sgd2hldGhlciB0aGUgZmlyc3QgcGFuZSBoYXMgYmVlbiB1c2VkXG5sZXQgZmlyc3RQYW5lVXNlZCA9IGZhbHNlXG5cbi8vIExvY2sgbWVjaGFuaXNtIHRvIHByZXZlbnQgcmFjZSBjb25kaXRpb25zIHdoZW4gc3Bhd25pbmcgdGVhbW1hdGVzIGluIHBhcmFsbGVsXG5sZXQgcGFuZUNyZWF0aW9uTG9jazogUHJvbWlzZTx2b2lkPiA9IFByb21pc2UucmVzb2x2ZSgpXG5cbi8qKlxuICogQWNxdWlyZXMgYSBsb2NrIGZvciBwYW5lIGNyZWF0aW9uLCBlbnN1cmluZyBzZXF1ZW50aWFsIGV4ZWN1dGlvbi5cbiAqIFJldHVybnMgYSByZWxlYXNlIGZ1bmN0aW9uIHRoYXQgbXVzdCBiZSBjYWxsZWQgd2hlbiBkb25lLlxuICovXG5mdW5jdGlvbiBhY3F1aXJlUGFuZUNyZWF0aW9uTG9jaygpOiBQcm9taXNlPCgpID0+IHZvaWQ+IHtcbiAgbGV0IHJlbGVhc2U6ICgpID0+IHZvaWRcbiAgY29uc3QgbmV3TG9jayA9IG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4ge1xuICAgIHJlbGVhc2UgPSByZXNvbHZlXG4gIH0pXG5cbiAgY29uc3QgcHJldmlvdXNMb2NrID0gcGFuZUNyZWF0aW9uTG9ja1xuICBwYW5lQ3JlYXRpb25Mb2NrID0gbmV3TG9ja1xuXG4gIHJldHVybiBwcmV2aW91c0xvY2sudGhlbigoKSA9PiByZWxlYXNlISlcbn1cblxuLyoqXG4gKiBSdW5zIGFuIGl0MiBDTEkgY29tbWFuZCBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxuICovXG5mdW5jdGlvbiBydW5JdDIoXG4gIGFyZ3M6IHN0cmluZ1tdLFxuKTogUHJvbWlzZTx7IHN0ZG91dDogc3RyaW5nOyBzdGRlcnI6IHN0cmluZzsgY29kZTogbnVtYmVyIH0+IHtcbiAgcmV0dXJuIGV4ZWNGaWxlTm9UaHJvdyhJVDJfQ09NTUFORCwgYXJncylcbn1cblxuLyoqXG4gKiBQYXJzZXMgdGhlIHNlc3Npb24gSUQgZnJvbSBgaXQyIHNlc3Npb24gc3BsaXRgIG91dHB1dC5cbiAqIEZvcm1hdDogXCJDcmVhdGVkIG5ldyBwYW5lOiA8c2Vzc2lvbi1pZD5cIlxuICpcbiAqIE5PVEU6IFRoaXMgVVVJRCBpcyBvbmx5IHZhbGlkIHdoZW4gc3BsaXR0aW5nIGZyb20gYSBzcGVjaWZpYyBzZXNzaW9uXG4gKiB1c2luZyB0aGUgLXMgZmxhZy4gV2hlbiBzcGxpdHRpbmcgZnJvbSB0aGUgXCJhY3RpdmVcIiBzZXNzaW9uLCB0aGUgVVVJRFxuICogbWF5IG5vdCBiZSBhY2Nlc3NpYmxlIGlmIHRoZSBzcGxpdCBoYXBwZW5lZCBpbiBhIGRpZmZlcmVudCB3aW5kb3cuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlU3BsaXRPdXRwdXQob3V0cHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBtYXRjaCA9IG91dHB1dC5tYXRjaCgvQ3JlYXRlZCBuZXcgcGFuZTpcXHMqKC4rKS8pXG4gIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgIHJldHVybiBtYXRjaFsxXS50cmltKClcbiAgfVxuICByZXR1cm4gJydcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBsZWFkZXIncyBzZXNzaW9uIElEIGZyb20gSVRFUk1fU0VTU0lPTl9JRCBlbnYgdmFyLlxuICogRm9ybWF0OiBcIndYdFlwWjpVVUlEXCIgLSB3ZSBleHRyYWN0IHRoZSBVVUlEIHBhcnQgYWZ0ZXIgdGhlIGNvbG9uLlxuICogUmV0dXJucyBudWxsIGlmIG5vdCBpbiBpVGVybTIgb3IgZW52IHZhciBub3Qgc2V0LlxuICovXG5mdW5jdGlvbiBnZXRMZWFkZXJTZXNzaW9uSWQoKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IGl0ZXJtU2Vzc2lvbklkID0gcHJvY2Vzcy5lbnYuSVRFUk1fU0VTU0lPTl9JRFxuICBpZiAoIWl0ZXJtU2Vzc2lvbklkKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBjb25zdCBjb2xvbkluZGV4ID0gaXRlcm1TZXNzaW9uSWQuaW5kZXhPZignOicpXG4gIGlmIChjb2xvbkluZGV4ID09PSAtMSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgcmV0dXJuIGl0ZXJtU2Vzc2lvbklkLnNsaWNlKGNvbG9uSW5kZXggKyAxKVxufVxuXG4vKipcbiAqIElUZXJtQmFja2VuZCBpbXBsZW1lbnRzIHBhbmUgbWFuYWdlbWVudCB1c2luZyBpVGVybTIncyBuYXRpdmUgc3BsaXQgcGFuZXNcbiAqIHZpYSB0aGUgaXQyIENMSSB0b29sLlxuICovXG5leHBvcnQgY2xhc3MgSVRlcm1CYWNrZW5kIGltcGxlbWVudHMgUGFuZUJhY2tlbmQge1xuICByZWFkb25seSB0eXBlID0gJ2l0ZXJtMicgYXMgY29uc3RcbiAgcmVhZG9ubHkgZGlzcGxheU5hbWUgPSAnaVRlcm0yJ1xuICByZWFkb25seSBzdXBwb3J0c0hpZGVTaG93ID0gZmFsc2VcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGlUZXJtMiBiYWNrZW5kIGlzIGF2YWlsYWJsZSAoaW4gaVRlcm0yIHdpdGggaXQyIENMSSBpbnN0YWxsZWQpLlxuICAgKi9cbiAgYXN5bmMgaXNBdmFpbGFibGUoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgaW5JVGVybTIgPSBpc0luSVRlcm0yKClcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoYFtJVGVybUJhY2tlbmRdIGlzQXZhaWxhYmxlIGNoZWNrOiBpbklUZXJtMj0ke2luSVRlcm0yfWApXG4gICAgaWYgKCFpbklUZXJtMikge1xuICAgICAgbG9nRm9yRGVidWdnaW5nKCdbSVRlcm1CYWNrZW5kXSBpc0F2YWlsYWJsZTogZmFsc2UgKG5vdCBpbiBpVGVybTIpJylcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBjb25zdCBpdDJBdmFpbGFibGUgPSBhd2FpdCBpc0l0MkNsaUF2YWlsYWJsZSgpXG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgYFtJVGVybUJhY2tlbmRdIGlzQXZhaWxhYmxlOiAke2l0MkF2YWlsYWJsZX0gKGl0MiBDTEkgJHtpdDJBdmFpbGFibGUgPyAnZm91bmQnIDogJ25vdCBmb3VuZCd9KWAsXG4gICAgKVxuICAgIHJldHVybiBpdDJBdmFpbGFibGVcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgaW5zaWRlIGlUZXJtMi5cbiAgICovXG4gIGFzeW5jIGlzUnVubmluZ0luc2lkZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCByZXN1bHQgPSBpc0luSVRlcm0yKClcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoYFtJVGVybUJhY2tlbmRdIGlzUnVubmluZ0luc2lkZTogJHtyZXN1bHR9YClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyB0ZWFtbWF0ZSBwYW5lIGluIHRoZSBzd2FybSB2aWV3LlxuICAgKiBVc2VzIGEgbG9jayB0byBwcmV2ZW50IHJhY2UgY29uZGl0aW9ucyB3aGVuIG11bHRpcGxlIHRlYW1tYXRlcyBhcmUgc3Bhd25lZCBpbiBwYXJhbGxlbC5cbiAgICovXG4gIGFzeW5jIGNyZWF0ZVRlYW1tYXRlUGFuZUluU3dhcm1WaWV3KFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBjb2xvcjogQWdlbnRDb2xvck5hbWUsXG4gICk6IFByb21pc2U8Q3JlYXRlUGFuZVJlc3VsdD4ge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgIGBbSVRlcm1CYWNrZW5kXSBjcmVhdGVUZWFtbWF0ZVBhbmVJblN3YXJtVmlldyBjYWxsZWQgZm9yICR7bmFtZX0gd2l0aCBjb2xvciAke2NvbG9yfWAsXG4gICAgKVxuICAgIGNvbnN0IHJlbGVhc2VMb2NrID0gYXdhaXQgYWNxdWlyZVBhbmVDcmVhdGlvbkxvY2soKVxuXG4gICAgdHJ5IHtcbiAgICAgIC8vIExheW91dDogTGVhZGVyIG9uIGxlZnQsIHRlYW1tYXRlcyBzdGFja2VkIHZlcnRpY2FsbHkgb24gdGhlIHJpZ2h0XG4gICAgICAvLyAtIEZpcnN0IHRlYW1tYXRlOiB2ZXJ0aWNhbCBzcGxpdCAoLXYpIGZyb20gbGVhZGVyJ3Mgc2Vzc2lvblxuICAgICAgLy8gLSBTdWJzZXF1ZW50IHRlYW1tYXRlczogaG9yaXpvbnRhbCBzcGxpdCBmcm9tIGxhc3QgdGVhbW1hdGUncyBzZXNzaW9uXG4gICAgICAvL1xuICAgICAgLy8gV2UgZXhwbGljaXRseSB0YXJnZXQgdGhlIHNlc3Npb24gdG8gc3BsaXQgZnJvbSB1c2luZyAtcyBmbGFnIHRvIGVuc3VyZVxuICAgICAgLy8gY29ycmVjdCBsYXlvdXQgZXZlbiBpZiB1c2VyIGNsaWNrcyBvbiBkaWZmZXJlbnQgcGFuZXMuXG4gICAgICAvL1xuICAgICAgLy8gQXQtZmF1bHQgcmVjb3Zlcnk6IElmIGEgdGFyZ2V0ZWQgdGVhbW1hdGUgc2Vzc2lvbiBpcyBkZWFkICh1c2VyIGNsb3NlZFxuICAgICAgLy8gdGhlIHBhbmUgdmlhIENtZCtXIC8gWCwgb3IgcHJvY2VzcyBjcmFzaGVkKSwgcHJ1bmUgaXQgYW5kIHJldHJ5IHdpdGhcbiAgICAgIC8vIHRoZSBuZXh0LXRvLWxhc3QuIENoZWFwZXIgdGhhbiBhIHByb2FjdGl2ZSAnaXQyIHNlc3Npb24gbGlzdCcgb24gZXZlcnkgc3Bhd24uXG4gICAgICAvLyBCb3VuZGVkIGF0IE8oTisxKSBpdGVyYXRpb25zOiBlYWNoIGNvbnRpbnVlIHNocmlua3MgdGVhbW1hdGVTZXNzaW9uSWRzIGJ5IDE7XG4gICAgICAvLyB3aGVuIGVtcHR5IFx1MjE5MiBmaXJzdFBhbmVVc2VkIHJlc2V0cyBcdTIxOTIgbmV4dCBpdGVyYXRpb24gaGFzIG5vIHRhcmdldCBcdTIxOTIgdGhyb3dzLlxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnN0YW50LWNvbmRpdGlvblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgY29uc3QgaXNGaXJzdFRlYW1tYXRlID0gIWZpcnN0UGFuZVVzZWRcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgIGBbSVRlcm1CYWNrZW5kXSBDcmVhdGluZyBwYW5lOiBpc0ZpcnN0VGVhbW1hdGU9JHtpc0ZpcnN0VGVhbW1hdGV9LCBleGlzdGluZ1BhbmVzPSR7dGVhbW1hdGVTZXNzaW9uSWRzLmxlbmd0aH1gLFxuICAgICAgICApXG5cbiAgICAgICAgbGV0IHNwbGl0QXJnczogc3RyaW5nW11cbiAgICAgICAgbGV0IHRhcmdldGVkVGVhbW1hdGVJZDogc3RyaW5nIHwgdW5kZWZpbmVkXG4gICAgICAgIGlmIChpc0ZpcnN0VGVhbW1hdGUpIHtcbiAgICAgICAgICAvLyBTcGxpdCBmcm9tIGxlYWRlcidzIHNlc3Npb24gKGV4dHJhY3RlZCBmcm9tIElURVJNX1NFU1NJT05fSUQgZW52IHZhcilcbiAgICAgICAgICBjb25zdCBsZWFkZXJTZXNzaW9uSWQgPSBnZXRMZWFkZXJTZXNzaW9uSWQoKVxuICAgICAgICAgIGlmIChsZWFkZXJTZXNzaW9uSWQpIHtcbiAgICAgICAgICAgIHNwbGl0QXJncyA9IFsnc2Vzc2lvbicsICdzcGxpdCcsICctdicsICctcycsIGxlYWRlclNlc3Npb25JZF1cbiAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgYFtJVGVybUJhY2tlbmRdIEZpcnN0IHNwbGl0IGZyb20gbGVhZGVyIHNlc3Npb246ICR7bGVhZGVyU2Vzc2lvbklkfWAsXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZhbGxiYWNrIHRvIGFjdGl2ZSBzZXNzaW9uIGlmIHdlIGNhbid0IGdldCBsZWFkZXIncyBJRFxuICAgICAgICAgICAgc3BsaXRBcmdzID0gWydzZXNzaW9uJywgJ3NwbGl0JywgJy12J11cbiAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgJ1tJVGVybUJhY2tlbmRdIEZpcnN0IHNwbGl0IGZyb20gYWN0aXZlIHNlc3Npb24gKG5vIGxlYWRlciBJRCknLFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBTcGxpdCBmcm9tIHRoZSBsYXN0IHRlYW1tYXRlJ3Mgc2Vzc2lvbiB0byBzdGFjayB2ZXJ0aWNhbGx5XG4gICAgICAgICAgdGFyZ2V0ZWRUZWFtbWF0ZUlkID0gdGVhbW1hdGVTZXNzaW9uSWRzW3RlYW1tYXRlU2Vzc2lvbklkcy5sZW5ndGggLSAxXVxuICAgICAgICAgIGlmICh0YXJnZXRlZFRlYW1tYXRlSWQpIHtcbiAgICAgICAgICAgIHNwbGl0QXJncyA9IFsnc2Vzc2lvbicsICdzcGxpdCcsICctcycsIHRhcmdldGVkVGVhbW1hdGVJZF1cbiAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgYFtJVGVybUJhY2tlbmRdIFN1YnNlcXVlbnQgc3BsaXQgZnJvbSB0ZWFtbWF0ZSBzZXNzaW9uOiAke3RhcmdldGVkVGVhbW1hdGVJZH1gLFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBGYWxsYmFjayB0byBhY3RpdmUgc2Vzc2lvblxuICAgICAgICAgICAgc3BsaXRBcmdzID0gWydzZXNzaW9uJywgJ3NwbGl0J11cbiAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgJ1tJVGVybUJhY2tlbmRdIFN1YnNlcXVlbnQgc3BsaXQgZnJvbSBhY3RpdmUgc2Vzc2lvbiAobm8gdGVhbW1hdGUgSUQpJyxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzcGxpdFJlc3VsdCA9IGF3YWl0IHJ1bkl0MihzcGxpdEFyZ3MpXG5cbiAgICAgICAgaWYgKHNwbGl0UmVzdWx0LmNvZGUgIT09IDApIHtcbiAgICAgICAgICAvLyBJZiB3ZSB0YXJnZXRlZCBhIHRlYW1tYXRlIHNlc3Npb24sIGNvbmZpcm0gaXQncyBhY3R1YWxseSBkZWFkIGJlZm9yZVxuICAgICAgICAgIC8vIHBydW5pbmcgXHUyMDE0ICdzZXNzaW9uIGxpc3QnIGRpc3Rpbmd1aXNoZXMgZGVhZC10YXJnZXQgZnJvbSBzeXN0ZW1pY1xuICAgICAgICAgIC8vIGZhaWx1cmUgKFB5dGhvbiBBUEkgb2ZmLCBpdDIgcmVtb3ZlZCwgdHJhbnNpZW50IHNvY2tldCBlcnJvcikuXG4gICAgICAgICAgLy8gUHJ1bmluZyBvbiBzeXN0ZW1pYyBmYWlsdXJlIHdvdWxkIGRyYWluIGFsbCBsaXZlIElEcyBcdTIxOTIgc3RhdGUgY29ycnVwdGVkLlxuICAgICAgICAgIGlmICh0YXJnZXRlZFRlYW1tYXRlSWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RSZXN1bHQgPSBhd2FpdCBydW5JdDIoWydzZXNzaW9uJywgJ2xpc3QnXSlcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgbGlzdFJlc3VsdC5jb2RlID09PSAwICYmXG4gICAgICAgICAgICAgICFsaXN0UmVzdWx0LnN0ZG91dC5pbmNsdWRlcyh0YXJnZXRlZFRlYW1tYXRlSWQpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgLy8gQ29uZmlybWVkIGRlYWQgXHUyMDE0IHBydW5lIGFuZCByZXRyeSB3aXRoIG5leHQtdG8tbGFzdCAob3IgbGVhZGVyKS5cbiAgICAgICAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgICAgICAgIGBbSVRlcm1CYWNrZW5kXSBTcGxpdCBmYWlsZWQgdGFyZ2V0aW5nIGRlYWQgc2Vzc2lvbiAke3RhcmdldGVkVGVhbW1hdGVJZH0sIHBydW5pbmcgYW5kIHJldHJ5aW5nOiAke3NwbGl0UmVzdWx0LnN0ZGVycn1gLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNvbnN0IGlkeCA9IHRlYW1tYXRlU2Vzc2lvbklkcy5pbmRleE9mKHRhcmdldGVkVGVhbW1hdGVJZClcbiAgICAgICAgICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0ZWFtbWF0ZVNlc3Npb25JZHMuc3BsaWNlKGlkeCwgMSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAodGVhbW1hdGVTZXNzaW9uSWRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGZpcnN0UGFuZVVzZWQgPSBmYWxzZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUYXJnZXQgaXMgYWxpdmUgb3Igd2UgY2FuJ3QgdGVsbCBcdTIwMTQgZG9uJ3QgY29ycnVwdCBzdGF0ZSwgc3VyZmFjZSB0aGUgZXJyb3IuXG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBGYWlsZWQgdG8gY3JlYXRlIGlUZXJtMiBzcGxpdCBwYW5lOiAke3NwbGl0UmVzdWx0LnN0ZGVycn1gLFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0ZpcnN0VGVhbW1hdGUpIHtcbiAgICAgICAgICBmaXJzdFBhbmVVc2VkID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGFyc2UgdGhlIHNlc3Npb24gSUQgZnJvbSBzcGxpdCBvdXRwdXRcbiAgICAgICAgLy8gVGhpcyB3b3JrcyBiZWNhdXNlIHdlJ3JlIHNwbGl0dGluZyBmcm9tIGEgc3BlY2lmaWMgc2Vzc2lvbiAoLXMgZmxhZyksXG4gICAgICAgIC8vIHNvIHRoZSBuZXcgcGFuZSBpcyBpbiB0aGUgc2FtZSB3aW5kb3cgYW5kIHRoZSBVVUlEIGlzIHZhbGlkLlxuICAgICAgICBjb25zdCBwYW5lSWQgPSBwYXJzZVNwbGl0T3V0cHV0KHNwbGl0UmVzdWx0LnN0ZG91dClcblxuICAgICAgICBpZiAoIXBhbmVJZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc2Vzc2lvbiBJRCBmcm9tIHNwbGl0IG91dHB1dDogJHtzcGxpdFJlc3VsdC5zdGRvdXR9YCxcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgIGBbSVRlcm1CYWNrZW5kXSBDcmVhdGVkIHRlYW1tYXRlIHBhbmUgZm9yICR7bmFtZX06ICR7cGFuZUlkfWAsXG4gICAgICAgIClcblxuICAgICAgICB0ZWFtbWF0ZVNlc3Npb25JZHMucHVzaChwYW5lSWQpXG5cbiAgICAgICAgLy8gU2V0IHBhbmUgY29sb3IgYW5kIHRpdGxlXG4gICAgICAgIC8vIFNraXAgY29sb3IgYW5kIHRpdGxlIGZvciBub3cgLSBlYWNoIGl0MiBjYWxsIGlzIHNsb3cgKFB5dGhvbiBwcm9jZXNzICsgQVBJKVxuICAgICAgICAvLyBUaGUgcGFuZSBpcyBmdW5jdGlvbmFsIHdpdGhvdXQgdGhlc2UgY29zbWV0aWMgZmVhdHVyZXNcbiAgICAgICAgLy8gVE9ETzogQ29uc2lkZXIgYmF0Y2hpbmcgdGhlc2Ugb3IgbWFraW5nIHRoZW0gYXN5bmMvZmlyZS1hbmQtZm9yZ2V0XG5cbiAgICAgICAgcmV0dXJuIHsgcGFuZUlkLCBpc0ZpcnN0VGVhbW1hdGUgfVxuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICByZWxlYXNlTG9jaygpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgY29tbWFuZCB0byBhIHNwZWNpZmljIHBhbmUuXG4gICAqL1xuICBhc3luYyBzZW5kQ29tbWFuZFRvUGFuZShcbiAgICBwYW5lSWQ6IFBhbmVJZCxcbiAgICBjb21tYW5kOiBzdHJpbmcsXG4gICAgX3VzZUV4dGVybmFsU2Vzc2lvbj86IGJvb2xlYW4sXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIFVzZSBpdDIgc2Vzc2lvbiBydW4gdG8gZXhlY3V0ZSBjb21tYW5kIChhZGRzIG5ld2xpbmUgYXV0b21hdGljYWxseSlcbiAgICAvLyBBbHdheXMgdXNlIC1zIGZsYWcgdG8gdGFyZ2V0IHNwZWNpZmljIHNlc3Npb24gLSB0aGlzIGVuc3VyZXMgdGhlIGNvbW1hbmRcbiAgICAvLyBnb2VzIHRvIHRoZSByaWdodCBwYW5lIGV2ZW4gaWYgdXNlciBzd2l0Y2hlcyB3aW5kb3dzXG4gICAgY29uc3QgYXJncyA9IHBhbmVJZFxuICAgICAgPyBbJ3Nlc3Npb24nLCAncnVuJywgJy1zJywgcGFuZUlkLCBjb21tYW5kXVxuICAgICAgOiBbJ3Nlc3Npb24nLCAncnVuJywgY29tbWFuZF1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJ1bkl0MihhcmdzKVxuXG4gICAgaWYgKHJlc3VsdC5jb2RlICE9PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgdG8gc2VuZCBjb21tYW5kIHRvIGlUZXJtMiBwYW5lICR7cGFuZUlkfTogJHtyZXN1bHQuc3RkZXJyfWAsXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE5vLW9wIGZvciBpVGVybTIgLSB0YWIgY29sb3JzIHdvdWxkIHJlcXVpcmUgZXNjYXBlIHNlcXVlbmNlcyBidXQgd2Ugc2tpcFxuICAgKiB0aGVtIGZvciBwZXJmb3JtYW5jZSAoZWFjaCBpdDIgY2FsbCBpcyBzbG93KS5cbiAgICovXG4gIGFzeW5jIHNldFBhbmVCb3JkZXJDb2xvcihcbiAgICBfcGFuZUlkOiBQYW5lSWQsXG4gICAgX2NvbG9yOiBBZ2VudENvbG9yTmFtZSxcbiAgICBfdXNlRXh0ZXJuYWxTZXNzaW9uPzogYm9vbGVhbixcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gU2tpcCBmb3IgcGVyZm9ybWFuY2UgLSBlYWNoIGl0MiBjYWxsIHNwYXducyBhIFB5dGhvbiBwcm9jZXNzXG4gIH1cblxuICAvKipcbiAgICogTm8tb3AgZm9yIGlUZXJtMiAtIHRpdGxlcyB3b3VsZCByZXF1aXJlIGVzY2FwZSBzZXF1ZW5jZXMgYnV0IHdlIHNraXBcbiAgICogdGhlbSBmb3IgcGVyZm9ybWFuY2UgKGVhY2ggaXQyIGNhbGwgaXMgc2xvdykuXG4gICAqL1xuICBhc3luYyBzZXRQYW5lVGl0bGUoXG4gICAgX3BhbmVJZDogUGFuZUlkLFxuICAgIF9uYW1lOiBzdHJpbmcsXG4gICAgX2NvbG9yOiBBZ2VudENvbG9yTmFtZSxcbiAgICBfdXNlRXh0ZXJuYWxTZXNzaW9uPzogYm9vbGVhbixcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gU2tpcCBmb3IgcGVyZm9ybWFuY2UgLSBlYWNoIGl0MiBjYWxsIHNwYXducyBhIFB5dGhvbiBwcm9jZXNzXG4gIH1cblxuICAvKipcbiAgICogTm8tb3AgZm9yIGlUZXJtMiAtIHBhbmUgdGl0bGVzIGFyZSBzaG93biBpbiB0YWJzIGF1dG9tYXRpY2FsbHkuXG4gICAqL1xuICBhc3luYyBlbmFibGVQYW5lQm9yZGVyU3RhdHVzKFxuICAgIF93aW5kb3dUYXJnZXQ/OiBzdHJpbmcsXG4gICAgX3VzZUV4dGVybmFsU2Vzc2lvbj86IGJvb2xlYW4sXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIGlUZXJtMiBkb2Vzbid0IGhhdmUgdGhlIGNvbmNlcHQgb2YgcGFuZSBib3JkZXIgc3RhdHVzIGxpa2UgdG11eFxuICAgIC8vIFRpdGxlcyBhcmUgc2hvd24gaW4gdGFicyBhdXRvbWF0aWNhbGx5XG4gIH1cblxuICAvKipcbiAgICogTm8tb3AgZm9yIGlUZXJtMiAtIHBhbmUgYmFsYW5jaW5nIGlzIGhhbmRsZWQgYXV0b21hdGljYWxseS5cbiAgICovXG4gIGFzeW5jIHJlYmFsYW5jZVBhbmVzKFxuICAgIF93aW5kb3dUYXJnZXQ6IHN0cmluZyxcbiAgICBfaGFzTGVhZGVyOiBib29sZWFuLFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBpVGVybTIgaGFuZGxlcyBwYW5lIGJhbGFuY2luZyBhdXRvbWF0aWNhbGx5XG4gICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgJ1tJVGVybUJhY2tlbmRdIFBhbmUgcmViYWxhbmNpbmcgbm90IGltcGxlbWVudGVkIGZvciBpVGVybTInLFxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBLaWxscy9jbG9zZXMgYSBzcGVjaWZpYyBwYW5lIHVzaW5nIHRoZSBpdDIgQ0xJLlxuICAgKiBBbHNvIHJlbW92ZXMgdGhlIHBhbmUgZnJvbSB0cmFja2VkIHNlc3Npb24gSURzIHNvIHN1YnNlcXVlbnQgc3Bhd25zXG4gICAqIGRvbid0IHRyeSB0byBzcGxpdCBmcm9tIGEgZGVhZCBzZXNzaW9uLlxuICAgKi9cbiAgYXN5bmMga2lsbFBhbmUoXG4gICAgcGFuZUlkOiBQYW5lSWQsXG4gICAgX3VzZUV4dGVybmFsU2Vzc2lvbj86IGJvb2xlYW4sXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIC8vIC1mIChmb3JjZSkgaXMgcmVxdWlyZWQ6IHdpdGhvdXQgaXQsIGlUZXJtMiByZXNwZWN0cyB0aGUgXCJDb25maXJtIGJlZm9yZVxuICAgIC8vIGNsb3NpbmdcIiBwcmVmZXJlbmNlIGFuZCBlaXRoZXIgc2hvd3MgYSBkaWFsb2cgb3IgcmVmdXNlcyB3aGVuIHRoZSBzZXNzaW9uXG4gICAgLy8gc3RpbGwgaGFzIGEgcnVubmluZyBwcm9jZXNzICh0aGUgc2hlbGwgYWx3YXlzIGlzKS4gdG11eCBraWxsLXBhbmUgaGFzIG5vXG4gICAgLy8gc3VjaCBwcm9tcHQsIHdoaWNoIGlzIHdoeSB0aGlzIHdhcyBvbmx5IGJyb2tlbiBmb3IgaVRlcm0yLlxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJ1bkl0MihbJ3Nlc3Npb24nLCAnY2xvc2UnLCAnLWYnLCAnLXMnLCBwYW5lSWRdKVxuICAgIC8vIENsZWFuIHVwIG1vZHVsZSBzdGF0ZSByZWdhcmRsZXNzIG9mIGNsb3NlIHJlc3VsdCBcdTIwMTQgZXZlbiBpZiB0aGUgcGFuZSBpc1xuICAgIC8vIGFscmVhZHkgZ29uZSAoZS5nLiwgdXNlciBjbG9zZWQgaXQgbWFudWFsbHkpLCByZW1vdmluZyB0aGUgc3RhbGUgSUQgaXMgY29ycmVjdC5cbiAgICBjb25zdCBpZHggPSB0ZWFtbWF0ZVNlc3Npb25JZHMuaW5kZXhPZihwYW5lSWQpXG4gICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgIHRlYW1tYXRlU2Vzc2lvbklkcy5zcGxpY2UoaWR4LCAxKVxuICAgIH1cbiAgICBpZiAodGVhbW1hdGVTZXNzaW9uSWRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZmlyc3RQYW5lVXNlZCA9IGZhbHNlXG4gICAgfVxuICAgIHJldHVybiByZXN1bHQuY29kZSA9PT0gMFxuICB9XG5cbiAgLyoqXG4gICAqIFN0dWIgZm9yIGhpZGluZyBhIHBhbmUgLSBub3Qgc3VwcG9ydGVkIGluIGlUZXJtMiBiYWNrZW5kLlxuICAgKiBpVGVybTIgZG9lc24ndCBoYXZlIGEgZGlyZWN0IGVxdWl2YWxlbnQgdG8gdG11eCdzIGJyZWFrLXBhbmUuXG4gICAqL1xuICBhc3luYyBoaWRlUGFuZShcbiAgICBfcGFuZUlkOiBQYW5lSWQsXG4gICAgX3VzZUV4dGVybmFsU2Vzc2lvbj86IGJvb2xlYW4sXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGxvZ0ZvckRlYnVnZ2luZygnW0lUZXJtQmFja2VuZF0gaGlkZVBhbmUgbm90IHN1cHBvcnRlZCBpbiBpVGVybTInKVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIFN0dWIgZm9yIHNob3dpbmcgYSBoaWRkZW4gcGFuZSAtIG5vdCBzdXBwb3J0ZWQgaW4gaVRlcm0yIGJhY2tlbmQuXG4gICAqIGlUZXJtMiBkb2Vzbid0IGhhdmUgYSBkaXJlY3QgZXF1aXZhbGVudCB0byB0bXV4J3Mgam9pbi1wYW5lLlxuICAgKi9cbiAgYXN5bmMgc2hvd1BhbmUoXG4gICAgX3BhbmVJZDogUGFuZUlkLFxuICAgIF90YXJnZXRXaW5kb3dPclBhbmU6IHN0cmluZyxcbiAgICBfdXNlRXh0ZXJuYWxTZXNzaW9uPzogYm9vbGVhbixcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgbG9nRm9yRGVidWdnaW5nKCdbSVRlcm1CYWNrZW5kXSBzaG93UGFuZSBub3Qgc3VwcG9ydGVkIGluIGlUZXJtMicpXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuLy8gUmVnaXN0ZXIgdGhlIGJhY2tlbmQgd2l0aCB0aGUgcmVnaXN0cnkgd2hlbiB0aGlzIG1vZHVsZSBpcyBpbXBvcnRlZC5cbi8vIFRoaXMgc2lkZSBlZmZlY3QgaXMgaW50ZW50aW9uYWwgLSB0aGUgcmVnaXN0cnkgbmVlZHMgYmFja2VuZHMgdG8gc2VsZi1yZWdpc3RlciB0byBhdm9pZCBjaXJjdWxhciBkZXBlbmRlbmNpZXMuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3VzdG9tLXJ1bGVzL25vLXRvcC1sZXZlbC1zaWRlLWVmZmVjdHNcbnJlZ2lzdGVySVRlcm1CYWNrZW5kKElUZXJtQmFja2VuZClcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QSxNQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLQSxNQUFNLGtCQUNKLFFBQ0EsU0FDQSxxQkFDZTtBQUlmLGNBQU0sT0FBTyxTQUNULENBQUMsV0FBVyxPQUFPLE1BQU0sUUFBUSxPQUFPLElBQ3hDLENBQUMsV0FBVyxPQUFPLE9BQU87QUFFOUIsY0FBTSxTQUFTLE1BQU0sT0FBTyxJQUFJO0FBRWhDLFlBQUksT0FBTyxTQUFTLEdBQUc7QUFDckIsZ0JBQU0sSUFBSTtBQUFBLFlBQ1IseUNBQXlDLE1BQU0sS0FBSyxPQUFPLE1BQU07QUFBQSxVQUNuRTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1BLE1BQU0sbUJBQ0osU0FDQSxRQUNBLHFCQUNlO0FBQUEsTUFFakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTUEsTUFBTSxhQUNKLFNBQ0EsT0FDQSxRQUNBLHFCQUNlO0FBQUEsTUFFakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtBLE1BQU0sdUJBQ0osZUFDQSxxQkFDZTtBQUFBLE1BR2pCO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLQSxNQUFNLGVBQ0osZUFDQSxZQUNlO0FBRWY7QUFBQSxVQUNFO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPQSxNQUFNLFNBQ0osUUFDQSxxQkFDa0I7QUFLbEIsY0FBTSxTQUFTLE1BQU0sT0FBTyxDQUFDLFdBQVcsU0FBUyxNQUFNLE1BQU0sTUFBTSxDQUFDO0FBR3BFLGNBQU0sTUFBTSxtQkFBbUIsUUFBUSxNQUFNO0FBQzdDLFlBQUksUUFBUSxJQUFJO0FBQ2QsNkJBQW1CLE9BQU8sS0FBSyxDQUFDO0FBQUEsUUFDbEM7QUFDQSxZQUFJLG1CQUFtQixXQUFXLEdBQUc7QUFDbkMsMEJBQWdCO0FBQUEsUUFDbEI7QUFDQSxlQUFPLE9BQU8sU0FBUztBQUFBLE1BQ3pCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1BLE1BQU0sU0FDSixTQUNBLHFCQUNrQjtBQUNsQix3QkFBZ0IsaURBQWlEO0FBQ2pFLGVBQU87QUFBQSxNQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1BLE1BQU0sU0FDSixTQUNBLHFCQUNBLHFCQUNrQjtBQUNsQix3QkFBZ0IsaURBQWlEO0FBQ2pFLGVBQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUtBLHlCQUFxQixZQUFZO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
