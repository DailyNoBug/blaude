#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  Select,
  Spinner,
  cleanupWorktree,
  getCurrentWorktreeSession,
  getPlansDirectory,
  gracefulShutdown,
  init_Shell,
  init_Spinner,
  init_gracefulShutdown,
  init_plans,
  init_select,
  init_sessionStorage,
  init_worktree,
  keepWorktree,
  killTmuxSession,
  sessionStorage_exports,
  setCwd
} from "./chunk-PWGYNHQM.mjs";
import {
  Dialog,
  init_Dialog
} from "./chunk-2ONWBUQT.mjs";
import {
  ThemedBox_default,
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime
} from "./chunk-KMJXN3MK.mjs";
import {
  init_react,
  react_default,
  useEffect,
  useState
} from "./chunk-TEJH3H3H.mjs";
import {
  init_sample,
  sample_default
} from "./chunk-NKGQGSP5.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-MDXHK5AD.mjs";
import {
  execFileNoThrow,
  init_execFileNoThrow
} from "./chunk-VNIROYYL.mjs";
import {
  init_debug,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import {
  __esm,
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// src/components/WorktreeExitDialog.tsx
function recordWorktreeExit() {
  ;
  (init_sessionStorage(), __toCommonJS(sessionStorage_exports)).saveWorktreeState(null);
}
function WorktreeExitDialog({
  onDone,
  onCancel
}) {
  const [status, setStatus] = useState("loading");
  const [changes, setChanges] = useState([]);
  const [commitCount, setCommitCount] = useState(0);
  const [resultMessage, setResultMessage] = useState();
  const worktreeSession = getCurrentWorktreeSession();
  useEffect(() => {
    async function loadChanges() {
      let changeLines = [];
      const gitStatus = await execFileNoThrow("git", ["status", "--porcelain"]);
      if (gitStatus.stdout) {
        changeLines = gitStatus.stdout.split("\n").filter((_) => _.trim() !== "");
        setChanges(changeLines);
      }
      if (worktreeSession) {
        const {
          stdout: commitsStr
        } = await execFileNoThrow("git", ["rev-list", "--count", `${worktreeSession.originalHeadCommit}..HEAD`]);
        const count = parseInt(commitsStr.trim()) || 0;
        setCommitCount(count);
        if (changeLines.length === 0 && count === 0) {
          setStatus("removing");
          void cleanupWorktree().then(() => {
            process.chdir(worktreeSession.originalCwd);
            setCwd(worktreeSession.originalCwd);
            recordWorktreeExit();
            getPlansDirectory.cache.clear?.();
            setResultMessage("Worktree removed (no changes)");
          }).catch((error) => {
            logForDebugging(`Failed to clean up worktree: ${error}`, {
              level: "error"
            });
            setResultMessage("Worktree cleanup failed, exiting anyway");
          }).then(() => {
            setStatus("done");
          });
          return;
        } else {
          setStatus("asking");
        }
      }
    }
    void loadChanges();
  }, [worktreeSession]);
  useEffect(() => {
    if (status === "done") {
      onDone(resultMessage);
    }
  }, [status, onDone, resultMessage]);
  if (!worktreeSession) {
    onDone("No active worktree session found", {
      display: "system"
    });
    return null;
  }
  if (status === "loading" || status === "done") {
    return null;
  }
  async function handleSelect(value) {
    if (!worktreeSession) return;
    const hasTmux = Boolean(worktreeSession.tmuxSessionName);
    if (value === "keep" || value === "keep-with-tmux") {
      setStatus("keeping");
      logEvent("tengu_worktree_kept", {
        commits: commitCount,
        changed_files: changes.length
      });
      await keepWorktree();
      process.chdir(worktreeSession.originalCwd);
      setCwd(worktreeSession.originalCwd);
      recordWorktreeExit();
      getPlansDirectory.cache.clear?.();
      if (hasTmux) {
        setResultMessage(`Worktree kept. Your work is saved at ${worktreeSession.worktreePath} on branch ${worktreeSession.worktreeBranch}. Reattach to tmux session with: tmux attach -t ${worktreeSession.tmuxSessionName}`);
      } else {
        setResultMessage(`Worktree kept. Your work is saved at ${worktreeSession.worktreePath} on branch ${worktreeSession.worktreeBranch}`);
      }
      setStatus("done");
    } else if (value === "keep-kill-tmux") {
      setStatus("keeping");
      logEvent("tengu_worktree_kept", {
        commits: commitCount,
        changed_files: changes.length
      });
      if (worktreeSession.tmuxSessionName) {
        await killTmuxSession(worktreeSession.tmuxSessionName);
      }
      await keepWorktree();
      process.chdir(worktreeSession.originalCwd);
      setCwd(worktreeSession.originalCwd);
      recordWorktreeExit();
      getPlansDirectory.cache.clear?.();
      setResultMessage(`Worktree kept at ${worktreeSession.worktreePath} on branch ${worktreeSession.worktreeBranch}. Tmux session terminated.`);
      setStatus("done");
    } else if (value === "remove" || value === "remove-with-tmux") {
      setStatus("removing");
      logEvent("tengu_worktree_removed", {
        commits: commitCount,
        changed_files: changes.length
      });
      if (worktreeSession.tmuxSessionName) {
        await killTmuxSession(worktreeSession.tmuxSessionName);
      }
      try {
        await cleanupWorktree();
        process.chdir(worktreeSession.originalCwd);
        setCwd(worktreeSession.originalCwd);
        recordWorktreeExit();
        getPlansDirectory.cache.clear?.();
      } catch (error) {
        logForDebugging(`Failed to clean up worktree: ${error}`, {
          level: "error"
        });
        setResultMessage("Worktree cleanup failed, exiting anyway");
        setStatus("done");
        return;
      }
      const tmuxNote = hasTmux ? " Tmux session terminated." : "";
      if (commitCount > 0 && changes.length > 0) {
        setResultMessage(`Worktree removed. ${commitCount} ${commitCount === 1 ? "commit" : "commits"} and uncommitted changes were discarded.${tmuxNote}`);
      } else if (commitCount > 0) {
        setResultMessage(`Worktree removed. ${commitCount} ${commitCount === 1 ? "commit" : "commits"} on ${worktreeSession.worktreeBranch} ${commitCount === 1 ? "was" : "were"} discarded.${tmuxNote}`);
      } else if (changes.length > 0) {
        setResultMessage(`Worktree removed. Uncommitted changes were discarded.${tmuxNote}`);
      } else {
        setResultMessage(`Worktree removed.${tmuxNote}`);
      }
      setStatus("done");
    }
  }
  if (status === "keeping") {
    return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "row", marginY: 1 }, /* @__PURE__ */ react_default.createElement(Spinner, null), /* @__PURE__ */ react_default.createElement(ThemedText, null, "Keeping worktree\u2026"));
  }
  if (status === "removing") {
    return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "row", marginY: 1 }, /* @__PURE__ */ react_default.createElement(Spinner, null), /* @__PURE__ */ react_default.createElement(ThemedText, null, "Removing worktree\u2026"));
  }
  const branchName = worktreeSession.worktreeBranch;
  const hasUncommitted = changes.length > 0;
  const hasCommits = commitCount > 0;
  let subtitle = "";
  if (hasUncommitted && hasCommits) {
    subtitle = `You have ${changes.length} uncommitted ${changes.length === 1 ? "file" : "files"} and ${commitCount} ${commitCount === 1 ? "commit" : "commits"} on ${branchName}. All will be lost if you remove.`;
  } else if (hasUncommitted) {
    subtitle = `You have ${changes.length} uncommitted ${changes.length === 1 ? "file" : "files"}. These will be lost if you remove the worktree.`;
  } else if (hasCommits) {
    subtitle = `You have ${commitCount} ${commitCount === 1 ? "commit" : "commits"} on ${branchName}. The branch will be deleted if you remove the worktree.`;
  } else {
    subtitle = "You are working in a worktree. Keep it to continue working there, or remove it to clean up.";
  }
  function handleCancel() {
    if (onCancel) {
      onCancel();
      return;
    }
    void handleSelect("keep");
  }
  const removeDescription = hasUncommitted || hasCommits ? "All changes and commits will be lost." : "Clean up the worktree directory.";
  const hasTmuxSession = Boolean(worktreeSession.tmuxSessionName);
  const options = hasTmuxSession ? [{
    label: "Keep worktree and tmux session",
    value: "keep-with-tmux",
    description: `Stays at ${worktreeSession.worktreePath}. Reattach with: tmux attach -t ${worktreeSession.tmuxSessionName}`
  }, {
    label: "Keep worktree, kill tmux session",
    value: "keep-kill-tmux",
    description: `Keeps worktree at ${worktreeSession.worktreePath}, terminates tmux session.`
  }, {
    label: "Remove worktree and tmux session",
    value: "remove-with-tmux",
    description: removeDescription
  }] : [{
    label: "Keep worktree",
    value: "keep",
    description: `Stays at ${worktreeSession.worktreePath}`
  }, {
    label: "Remove worktree",
    value: "remove",
    description: removeDescription
  }];
  const defaultValue = hasTmuxSession ? "keep-with-tmux" : "keep";
  return /* @__PURE__ */ react_default.createElement(Dialog, { title: "Exiting worktree session", subtitle, onCancel: handleCancel }, /* @__PURE__ */ react_default.createElement(Select, { defaultFocusValue: defaultValue, options, onChange: handleSelect }));
}
var init_WorktreeExitDialog = __esm({
  "src/components/WorktreeExitDialog.tsx"() {
    init_react();
    init_analytics();
    init_debug();
    init_ink();
    init_execFileNoThrow();
    init_plans();
    init_Shell();
    init_worktree();
    init_select();
    init_Dialog();
    init_Spinner();
  }
});

// src/components/ExitFlow.tsx
function getRandomGoodbyeMessage() {
  return sample_default(GOODBYE_MESSAGES) ?? "Goodbye!";
}
function ExitFlow(t0) {
  const $ = c(5);
  const {
    showWorktree,
    onDone,
    onCancel
  } = t0;
  let t1;
  if ($[0] !== onDone) {
    t1 = async function onExit2(resultMessage) {
      onDone(resultMessage ?? getRandomGoodbyeMessage());
      await gracefulShutdown(0, "prompt_input_exit");
    };
    $[0] = onDone;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const onExit = t1;
  if (showWorktree) {
    let t2;
    if ($[2] !== onCancel || $[3] !== onExit) {
      t2 = /* @__PURE__ */ react_default.createElement(WorktreeExitDialog, { onDone: onExit, onCancel });
      $[2] = onCancel;
      $[3] = onExit;
      $[4] = t2;
    } else {
      t2 = $[4];
    }
    return t2;
  }
  return null;
}
var GOODBYE_MESSAGES;
var init_ExitFlow = __esm({
  "src/components/ExitFlow.tsx"() {
    init_react_compiler_runtime();
    init_sample();
    init_react();
    init_gracefulShutdown();
    init_WorktreeExitDialog();
    GOODBYE_MESSAGES = ["Goodbye!", "See ya!", "Bye!", "Catch you later!"];
  }
});

export {
  ExitFlow,
  init_ExitFlow
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvV29ya3RyZWVFeGl0RGlhbG9nLnRzeCIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9FeGl0Rmxvdy50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IENvbW1hbmRSZXN1bHREaXNwbGF5IH0gZnJvbSAnc3JjL2NvbW1hbmRzLmpzJ1xuaW1wb3J0IHsgbG9nRXZlbnQgfSBmcm9tICdzcmMvc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnc3JjL3V0aWxzL2RlYnVnLmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vaW5rLmpzJ1xuaW1wb3J0IHsgZXhlY0ZpbGVOb1Rocm93IH0gZnJvbSAnLi4vdXRpbHMvZXhlY0ZpbGVOb1Rocm93LmpzJ1xuaW1wb3J0IHsgZ2V0UGxhbnNEaXJlY3RvcnkgfSBmcm9tICcuLi91dGlscy9wbGFucy5qcydcbmltcG9ydCB7IHNldEN3ZCB9IGZyb20gJy4uL3V0aWxzL1NoZWxsLmpzJ1xuaW1wb3J0IHtcbiAgY2xlYW51cFdvcmt0cmVlLFxuICBnZXRDdXJyZW50V29ya3RyZWVTZXNzaW9uLFxuICBrZWVwV29ya3RyZWUsXG4gIGtpbGxUbXV4U2Vzc2lvbixcbn0gZnJvbSAnLi4vdXRpbHMvd29ya3RyZWUuanMnXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICcuL0N1c3RvbVNlbGVjdC9zZWxlY3QuanMnXG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICcuL2Rlc2lnbi1zeXN0ZW0vRGlhbG9nLmpzJ1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJy4vU3Bpbm5lci5qcydcblxuLy8gSW5saW5lIHJlcXVpcmUgYnJlYWtzIHRoZSBjeWNsZSB0aGlzIGZpbGUgd291bGQgb3RoZXJ3aXNlIGNsb3NlOlxuLy8gc2Vzc2lvblN0b3JhZ2Ug4oaSIGNvbW1hbmRzIOKGkiBleGl0IOKGkiBFeGl0RmxvdyDihpIgaGVyZS4gQWxsIGNhbGwgc2l0ZXNcbi8vIGFyZSBpbnNpZGUgY2FsbGJhY2tzLCBzbyB0aGUgbGF6eSByZXF1aXJlIG5ldmVyIHNlZXMgYW4gdW5kZWZpbmVkIGltcG9ydC5cbmZ1bmN0aW9uIHJlY29yZFdvcmt0cmVlRXhpdCgpOiB2b2lkIHtcbiAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyAqL1xuICA7KFxuICAgIHJlcXVpcmUoJy4uL3V0aWxzL3Nlc3Npb25TdG9yYWdlLmpzJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vdXRpbHMvc2Vzc2lvblN0b3JhZ2UuanMnKVxuICApLnNhdmVXb3JrdHJlZVN0YXRlKG51bGwpXG4gIC8qIGVzbGludC1lbmFibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyAqL1xufVxuXG50eXBlIFByb3BzID0ge1xuICBvbkRvbmU6IChcbiAgICByZXN1bHQ/OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHsgZGlzcGxheT86IENvbW1hbmRSZXN1bHREaXNwbGF5IH0sXG4gICkgPT4gdm9pZFxuICBvbkNhbmNlbD86ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFdvcmt0cmVlRXhpdERpYWxvZyh7XG4gIG9uRG9uZSxcbiAgb25DYW5jZWwsXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZTxcbiAgICAnbG9hZGluZycgfCAnYXNraW5nJyB8ICdrZWVwaW5nJyB8ICdyZW1vdmluZycgfCAnZG9uZSdcbiAgPignbG9hZGluZycpXG4gIGNvbnN0IFtjaGFuZ2VzLCBzZXRDaGFuZ2VzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSlcbiAgY29uc3QgW2NvbW1pdENvdW50LCBzZXRDb21taXRDb3VudF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXG4gIGNvbnN0IFtyZXN1bHRNZXNzYWdlLCBzZXRSZXN1bHRNZXNzYWdlXSA9IHVzZVN0YXRlPHN0cmluZyB8IHVuZGVmaW5lZD4oKVxuICBjb25zdCB3b3JrdHJlZVNlc3Npb24gPSBnZXRDdXJyZW50V29ya3RyZWVTZXNzaW9uKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRDaGFuZ2VzKCkge1xuICAgICAgbGV0IGNoYW5nZUxpbmVzOiBzdHJpbmdbXSA9IFtdXG4gICAgICBjb25zdCBnaXRTdGF0dXMgPSBhd2FpdCBleGVjRmlsZU5vVGhyb3coJ2dpdCcsIFsnc3RhdHVzJywgJy0tcG9yY2VsYWluJ10pXG4gICAgICBpZiAoZ2l0U3RhdHVzLnN0ZG91dCkge1xuICAgICAgICBjaGFuZ2VMaW5lcyA9IGdpdFN0YXR1cy5zdGRvdXQuc3BsaXQoJ1xcbicpLmZpbHRlcihfID0+IF8udHJpbSgpICE9PSAnJylcbiAgICAgICAgc2V0Q2hhbmdlcyhjaGFuZ2VMaW5lcylcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgZm9yIGNvbW1pdHMgdG8gZWplY3RcbiAgICAgIGlmICh3b3JrdHJlZVNlc3Npb24pIHtcbiAgICAgICAgLy8gR2V0IGNvbW1pdHMgaW4gd29ya3RyZWUgdGhhdCBhcmUgbm90IGluIG9yaWdpbmFsIGJyYW5jaFxuICAgICAgICBjb25zdCB7IHN0ZG91dDogY29tbWl0c1N0ciB9ID0gYXdhaXQgZXhlY0ZpbGVOb1Rocm93KCdnaXQnLCBbXG4gICAgICAgICAgJ3Jldi1saXN0JyxcbiAgICAgICAgICAnLS1jb3VudCcsXG4gICAgICAgICAgYCR7d29ya3RyZWVTZXNzaW9uLm9yaWdpbmFsSGVhZENvbW1pdH0uLkhFQURgLFxuICAgICAgICBdKVxuICAgICAgICBjb25zdCBjb3VudCA9IHBhcnNlSW50KGNvbW1pdHNTdHIudHJpbSgpKSB8fCAwXG4gICAgICAgIHNldENvbW1pdENvdW50KGNvdW50KVxuXG4gICAgICAgIC8vIElmIG5vIGNoYW5nZXMgYW5kIG5vIGNvbW1pdHMsIGNsZWFuIHVwIHNpbGVudGx5XG4gICAgICAgIGlmIChjaGFuZ2VMaW5lcy5sZW5ndGggPT09IDAgJiYgY291bnQgPT09IDApIHtcbiAgICAgICAgICBzZXRTdGF0dXMoJ3JlbW92aW5nJylcbiAgICAgICAgICB2b2lkIGNsZWFudXBXb3JrdHJlZSgpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIHByb2Nlc3MuY2hkaXIod29ya3RyZWVTZXNzaW9uLm9yaWdpbmFsQ3dkKVxuICAgICAgICAgICAgICBzZXRDd2Qod29ya3RyZWVTZXNzaW9uLm9yaWdpbmFsQ3dkKVxuICAgICAgICAgICAgICByZWNvcmRXb3JrdHJlZUV4aXQoKVxuICAgICAgICAgICAgICBnZXRQbGFuc0RpcmVjdG9yeS5jYWNoZS5jbGVhcj8uKClcbiAgICAgICAgICAgICAgc2V0UmVzdWx0TWVzc2FnZSgnV29ya3RyZWUgcmVtb3ZlZCAobm8gY2hhbmdlcyknKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhgRmFpbGVkIHRvIGNsZWFuIHVwIHdvcmt0cmVlOiAke2Vycm9yfWAsIHtcbiAgICAgICAgICAgICAgICBsZXZlbDogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgc2V0UmVzdWx0TWVzc2FnZSgnV29ya3RyZWUgY2xlYW51cCBmYWlsZWQsIGV4aXRpbmcgYW55d2F5JylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFN0YXR1cygnZG9uZScpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFN0YXR1cygnYXNraW5nJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB2b2lkIGxvYWRDaGFuZ2VzKClcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvY29ycmVjdG5lc3MvdXNlRXhoYXVzdGl2ZURlcGVuZGVuY2llczogaW50ZW50aW9uYWxcbiAgfSwgW3dvcmt0cmVlU2Vzc2lvbl0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3RhdHVzID09PSAnZG9uZScpIHtcbiAgICAgIG9uRG9uZShyZXN1bHRNZXNzYWdlKVxuICAgIH1cbiAgfSwgW3N0YXR1cywgb25Eb25lLCByZXN1bHRNZXNzYWdlXSlcblxuICBpZiAoIXdvcmt0cmVlU2Vzc2lvbikge1xuICAgIG9uRG9uZSgnTm8gYWN0aXZlIHdvcmt0cmVlIHNlc3Npb24gZm91bmQnLCB7IGRpc3BsYXk6ICdzeXN0ZW0nIH0pXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGlmIChzdGF0dXMgPT09ICdsb2FkaW5nJyB8fCBzdGF0dXMgPT09ICdkb25lJykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTZWxlY3QodmFsdWU6IHN0cmluZykge1xuICAgIGlmICghd29ya3RyZWVTZXNzaW9uKSByZXR1cm5cblxuICAgIGNvbnN0IGhhc1RtdXggPSBCb29sZWFuKHdvcmt0cmVlU2Vzc2lvbi50bXV4U2Vzc2lvbk5hbWUpXG5cbiAgICBpZiAodmFsdWUgPT09ICdrZWVwJyB8fCB2YWx1ZSA9PT0gJ2tlZXAtd2l0aC10bXV4Jykge1xuICAgICAgc2V0U3RhdHVzKCdrZWVwaW5nJylcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV93b3JrdHJlZV9rZXB0Jywge1xuICAgICAgICBjb21taXRzOiBjb21taXRDb3VudCxcbiAgICAgICAgY2hhbmdlZF9maWxlczogY2hhbmdlcy5sZW5ndGgsXG4gICAgICB9KVxuICAgICAgYXdhaXQga2VlcFdvcmt0cmVlKClcbiAgICAgIHByb2Nlc3MuY2hkaXIod29ya3RyZWVTZXNzaW9uLm9yaWdpbmFsQ3dkKVxuICAgICAgc2V0Q3dkKHdvcmt0cmVlU2Vzc2lvbi5vcmlnaW5hbEN3ZClcbiAgICAgIHJlY29yZFdvcmt0cmVlRXhpdCgpXG4gICAgICBnZXRQbGFuc0RpcmVjdG9yeS5jYWNoZS5jbGVhcj8uKClcbiAgICAgIGlmIChoYXNUbXV4KSB7XG4gICAgICAgIHNldFJlc3VsdE1lc3NhZ2UoXG4gICAgICAgICAgYFdvcmt0cmVlIGtlcHQuIFlvdXIgd29yayBpcyBzYXZlZCBhdCAke3dvcmt0cmVlU2Vzc2lvbi53b3JrdHJlZVBhdGh9IG9uIGJyYW5jaCAke3dvcmt0cmVlU2Vzc2lvbi53b3JrdHJlZUJyYW5jaH0uIFJlYXR0YWNoIHRvIHRtdXggc2Vzc2lvbiB3aXRoOiB0bXV4IGF0dGFjaCAtdCAke3dvcmt0cmVlU2Vzc2lvbi50bXV4U2Vzc2lvbk5hbWV9YCxcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0UmVzdWx0TWVzc2FnZShcbiAgICAgICAgICBgV29ya3RyZWUga2VwdC4gWW91ciB3b3JrIGlzIHNhdmVkIGF0ICR7d29ya3RyZWVTZXNzaW9uLndvcmt0cmVlUGF0aH0gb24gYnJhbmNoICR7d29ya3RyZWVTZXNzaW9uLndvcmt0cmVlQnJhbmNofWAsXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHNldFN0YXR1cygnZG9uZScpXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ2tlZXAta2lsbC10bXV4Jykge1xuICAgICAgc2V0U3RhdHVzKCdrZWVwaW5nJylcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV93b3JrdHJlZV9rZXB0Jywge1xuICAgICAgICBjb21taXRzOiBjb21taXRDb3VudCxcbiAgICAgICAgY2hhbmdlZF9maWxlczogY2hhbmdlcy5sZW5ndGgsXG4gICAgICB9KVxuICAgICAgaWYgKHdvcmt0cmVlU2Vzc2lvbi50bXV4U2Vzc2lvbk5hbWUpIHtcbiAgICAgICAgYXdhaXQga2lsbFRtdXhTZXNzaW9uKHdvcmt0cmVlU2Vzc2lvbi50bXV4U2Vzc2lvbk5hbWUpXG4gICAgICB9XG4gICAgICBhd2FpdCBrZWVwV29ya3RyZWUoKVxuICAgICAgcHJvY2Vzcy5jaGRpcih3b3JrdHJlZVNlc3Npb24ub3JpZ2luYWxDd2QpXG4gICAgICBzZXRDd2Qod29ya3RyZWVTZXNzaW9uLm9yaWdpbmFsQ3dkKVxuICAgICAgcmVjb3JkV29ya3RyZWVFeGl0KClcbiAgICAgIGdldFBsYW5zRGlyZWN0b3J5LmNhY2hlLmNsZWFyPy4oKVxuICAgICAgc2V0UmVzdWx0TWVzc2FnZShcbiAgICAgICAgYFdvcmt0cmVlIGtlcHQgYXQgJHt3b3JrdHJlZVNlc3Npb24ud29ya3RyZWVQYXRofSBvbiBicmFuY2ggJHt3b3JrdHJlZVNlc3Npb24ud29ya3RyZWVCcmFuY2h9LiBUbXV4IHNlc3Npb24gdGVybWluYXRlZC5gLFxuICAgICAgKVxuICAgICAgc2V0U3RhdHVzKCdkb25lJylcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAncmVtb3ZlJyB8fCB2YWx1ZSA9PT0gJ3JlbW92ZS13aXRoLXRtdXgnKSB7XG4gICAgICBzZXRTdGF0dXMoJ3JlbW92aW5nJylcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV93b3JrdHJlZV9yZW1vdmVkJywge1xuICAgICAgICBjb21taXRzOiBjb21taXRDb3VudCxcbiAgICAgICAgY2hhbmdlZF9maWxlczogY2hhbmdlcy5sZW5ndGgsXG4gICAgICB9KVxuICAgICAgaWYgKHdvcmt0cmVlU2Vzc2lvbi50bXV4U2Vzc2lvbk5hbWUpIHtcbiAgICAgICAgYXdhaXQga2lsbFRtdXhTZXNzaW9uKHdvcmt0cmVlU2Vzc2lvbi50bXV4U2Vzc2lvbk5hbWUpXG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBjbGVhbnVwV29ya3RyZWUoKVxuICAgICAgICBwcm9jZXNzLmNoZGlyKHdvcmt0cmVlU2Vzc2lvbi5vcmlnaW5hbEN3ZClcbiAgICAgICAgc2V0Q3dkKHdvcmt0cmVlU2Vzc2lvbi5vcmlnaW5hbEN3ZClcbiAgICAgICAgcmVjb3JkV29ya3RyZWVFeGl0KClcbiAgICAgICAgZ2V0UGxhbnNEaXJlY3RvcnkuY2FjaGUuY2xlYXI/LigpXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoYEZhaWxlZCB0byBjbGVhbiB1cCB3b3JrdHJlZTogJHtlcnJvcn1gLCB7XG4gICAgICAgICAgbGV2ZWw6ICdlcnJvcicsXG4gICAgICAgIH0pXG4gICAgICAgIHNldFJlc3VsdE1lc3NhZ2UoJ1dvcmt0cmVlIGNsZWFudXAgZmFpbGVkLCBleGl0aW5nIGFueXdheScpXG4gICAgICAgIHNldFN0YXR1cygnZG9uZScpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3QgdG11eE5vdGUgPSBoYXNUbXV4ID8gJyBUbXV4IHNlc3Npb24gdGVybWluYXRlZC4nIDogJydcbiAgICAgIGlmIChjb21taXRDb3VudCA+IDAgJiYgY2hhbmdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHNldFJlc3VsdE1lc3NhZ2UoXG4gICAgICAgICAgYFdvcmt0cmVlIHJlbW92ZWQuICR7Y29tbWl0Q291bnR9ICR7Y29tbWl0Q291bnQgPT09IDEgPyAnY29tbWl0JyA6ICdjb21taXRzJ30gYW5kIHVuY29tbWl0dGVkIGNoYW5nZXMgd2VyZSBkaXNjYXJkZWQuJHt0bXV4Tm90ZX1gLFxuICAgICAgICApXG4gICAgICB9IGVsc2UgaWYgKGNvbW1pdENvdW50ID4gMCkge1xuICAgICAgICBzZXRSZXN1bHRNZXNzYWdlKFxuICAgICAgICAgIGBXb3JrdHJlZSByZW1vdmVkLiAke2NvbW1pdENvdW50fSAke2NvbW1pdENvdW50ID09PSAxID8gJ2NvbW1pdCcgOiAnY29tbWl0cyd9IG9uICR7d29ya3RyZWVTZXNzaW9uLndvcmt0cmVlQnJhbmNofSAke2NvbW1pdENvdW50ID09PSAxID8gJ3dhcycgOiAnd2VyZSd9IGRpc2NhcmRlZC4ke3RtdXhOb3RlfWAsXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSBpZiAoY2hhbmdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHNldFJlc3VsdE1lc3NhZ2UoXG4gICAgICAgICAgYFdvcmt0cmVlIHJlbW92ZWQuIFVuY29tbWl0dGVkIGNoYW5nZXMgd2VyZSBkaXNjYXJkZWQuJHt0bXV4Tm90ZX1gLFxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRSZXN1bHRNZXNzYWdlKGBXb3JrdHJlZSByZW1vdmVkLiR7dG11eE5vdGV9YClcbiAgICAgIH1cbiAgICAgIHNldFN0YXR1cygnZG9uZScpXG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXR1cyA9PT0gJ2tlZXBpbmcnKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cInJvd1wiIG1hcmdpblk9ezF9PlxuICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICA8VGV4dD5LZWVwaW5nIHdvcmt0cmVl4oCmPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgaWYgKHN0YXR1cyA9PT0gJ3JlbW92aW5nJykge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJyb3dcIiBtYXJnaW5ZPXsxfT5cbiAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgPFRleHQ+UmVtb3Zpbmcgd29ya3RyZWXigKY8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICBjb25zdCBicmFuY2hOYW1lID0gd29ya3RyZWVTZXNzaW9uLndvcmt0cmVlQnJhbmNoXG4gIGNvbnN0IGhhc1VuY29tbWl0dGVkID0gY2hhbmdlcy5sZW5ndGggPiAwXG4gIGNvbnN0IGhhc0NvbW1pdHMgPSBjb21taXRDb3VudCA+IDBcblxuICBsZXQgc3VidGl0bGUgPSAnJ1xuICBpZiAoaGFzVW5jb21taXR0ZWQgJiYgaGFzQ29tbWl0cykge1xuICAgIHN1YnRpdGxlID0gYFlvdSBoYXZlICR7Y2hhbmdlcy5sZW5ndGh9IHVuY29tbWl0dGVkICR7Y2hhbmdlcy5sZW5ndGggPT09IDEgPyAnZmlsZScgOiAnZmlsZXMnfSBhbmQgJHtjb21taXRDb3VudH0gJHtjb21taXRDb3VudCA9PT0gMSA/ICdjb21taXQnIDogJ2NvbW1pdHMnfSBvbiAke2JyYW5jaE5hbWV9LiBBbGwgd2lsbCBiZSBsb3N0IGlmIHlvdSByZW1vdmUuYFxuICB9IGVsc2UgaWYgKGhhc1VuY29tbWl0dGVkKSB7XG4gICAgc3VidGl0bGUgPSBgWW91IGhhdmUgJHtjaGFuZ2VzLmxlbmd0aH0gdW5jb21taXR0ZWQgJHtjaGFuZ2VzLmxlbmd0aCA9PT0gMSA/ICdmaWxlJyA6ICdmaWxlcyd9LiBUaGVzZSB3aWxsIGJlIGxvc3QgaWYgeW91IHJlbW92ZSB0aGUgd29ya3RyZWUuYFxuICB9IGVsc2UgaWYgKGhhc0NvbW1pdHMpIHtcbiAgICBzdWJ0aXRsZSA9IGBZb3UgaGF2ZSAke2NvbW1pdENvdW50fSAke2NvbW1pdENvdW50ID09PSAxID8gJ2NvbW1pdCcgOiAnY29tbWl0cyd9IG9uICR7YnJhbmNoTmFtZX0uIFRoZSBicmFuY2ggd2lsbCBiZSBkZWxldGVkIGlmIHlvdSByZW1vdmUgdGhlIHdvcmt0cmVlLmBcbiAgfSBlbHNlIHtcbiAgICBzdWJ0aXRsZSA9XG4gICAgICAnWW91IGFyZSB3b3JraW5nIGluIGEgd29ya3RyZWUuIEtlZXAgaXQgdG8gY29udGludWUgd29ya2luZyB0aGVyZSwgb3IgcmVtb3ZlIGl0IHRvIGNsZWFuIHVwLidcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNhbmNlbCgpIHtcbiAgICBpZiAob25DYW5jZWwpIHtcbiAgICAgIC8vIEFib3J0IGV4aXQgYW5kIHJldHVybiB0byB0aGUgc2Vzc2lvblxuICAgICAgb25DYW5jZWwoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIEZhbGxiYWNrOiB0cmVhdCBFc2NhcGUgYXMgXCJrZWVwXCIgaWYgbm8gb25DYW5jZWwgcHJvdmlkZWRcbiAgICB2b2lkIGhhbmRsZVNlbGVjdCgna2VlcCcpXG4gIH1cblxuICBjb25zdCByZW1vdmVEZXNjcmlwdGlvbiA9XG4gICAgaGFzVW5jb21taXR0ZWQgfHwgaGFzQ29tbWl0c1xuICAgICAgPyAnQWxsIGNoYW5nZXMgYW5kIGNvbW1pdHMgd2lsbCBiZSBsb3N0LidcbiAgICAgIDogJ0NsZWFuIHVwIHRoZSB3b3JrdHJlZSBkaXJlY3RvcnkuJ1xuXG4gIGNvbnN0IGhhc1RtdXhTZXNzaW9uID0gQm9vbGVhbih3b3JrdHJlZVNlc3Npb24udG11eFNlc3Npb25OYW1lKVxuXG4gIGNvbnN0IG9wdGlvbnMgPSBoYXNUbXV4U2Vzc2lvblxuICAgID8gW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdLZWVwIHdvcmt0cmVlIGFuZCB0bXV4IHNlc3Npb24nLFxuICAgICAgICAgIHZhbHVlOiAna2VlcC13aXRoLXRtdXgnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBgU3RheXMgYXQgJHt3b3JrdHJlZVNlc3Npb24ud29ya3RyZWVQYXRofS4gUmVhdHRhY2ggd2l0aDogdG11eCBhdHRhY2ggLXQgJHt3b3JrdHJlZVNlc3Npb24udG11eFNlc3Npb25OYW1lfWAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0tlZXAgd29ya3RyZWUsIGtpbGwgdG11eCBzZXNzaW9uJyxcbiAgICAgICAgICB2YWx1ZTogJ2tlZXAta2lsbC10bXV4JyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogYEtlZXBzIHdvcmt0cmVlIGF0ICR7d29ya3RyZWVTZXNzaW9uLndvcmt0cmVlUGF0aH0sIHRlcm1pbmF0ZXMgdG11eCBzZXNzaW9uLmAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ1JlbW92ZSB3b3JrdHJlZSBhbmQgdG11eCBzZXNzaW9uJyxcbiAgICAgICAgICB2YWx1ZTogJ3JlbW92ZS13aXRoLXRtdXgnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiByZW1vdmVEZXNjcmlwdGlvbixcbiAgICAgICAgfSxcbiAgICAgIF1cbiAgICA6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnS2VlcCB3b3JrdHJlZScsXG4gICAgICAgICAgdmFsdWU6ICdrZWVwJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogYFN0YXlzIGF0ICR7d29ya3RyZWVTZXNzaW9uLndvcmt0cmVlUGF0aH1gLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdSZW1vdmUgd29ya3RyZWUnLFxuICAgICAgICAgIHZhbHVlOiAncmVtb3ZlJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogcmVtb3ZlRGVzY3JpcHRpb24sXG4gICAgICAgIH0sXG4gICAgICBdXG5cbiAgY29uc3QgZGVmYXVsdFZhbHVlID0gaGFzVG11eFNlc3Npb24gPyAna2VlcC13aXRoLXRtdXgnIDogJ2tlZXAnXG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nXG4gICAgICB0aXRsZT1cIkV4aXRpbmcgd29ya3RyZWUgc2Vzc2lvblwiXG4gICAgICBzdWJ0aXRsZT17c3VidGl0bGV9XG4gICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfVxuICAgID5cbiAgICAgIDxTZWxlY3RcbiAgICAgICAgZGVmYXVsdEZvY3VzVmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdH1cbiAgICAgIC8+XG4gICAgPC9EaWFsb2c+XG4gIClcbn1cbiIsICJpbXBvcnQgc2FtcGxlIGZyb20gJ2xvZGFzaC1lcy9zYW1wbGUuanMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBncmFjZWZ1bFNodXRkb3duIH0gZnJvbSAnLi4vdXRpbHMvZ3JhY2VmdWxTaHV0ZG93bi5qcydcbmltcG9ydCB7IFdvcmt0cmVlRXhpdERpYWxvZyB9IGZyb20gJy4vV29ya3RyZWVFeGl0RGlhbG9nLmpzJ1xuXG5jb25zdCBHT09EQllFX01FU1NBR0VTID0gWydHb29kYnllIScsICdTZWUgeWEhJywgJ0J5ZSEnLCAnQ2F0Y2ggeW91IGxhdGVyISddXG5cbmZ1bmN0aW9uIGdldFJhbmRvbUdvb2RieWVNZXNzYWdlKCk6IHN0cmluZyB7XG4gIHJldHVybiBzYW1wbGUoR09PREJZRV9NRVNTQUdFUykgPz8gJ0dvb2RieWUhJ1xufVxuXG50eXBlIFByb3BzID0ge1xuICBvbkRvbmU6IChtZXNzYWdlPzogc3RyaW5nKSA9PiB2b2lkXG4gIG9uQ2FuY2VsPzogKCkgPT4gdm9pZFxuICBzaG93V29ya3RyZWU6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEV4aXRGbG93KHtcbiAgc2hvd1dvcmt0cmVlLFxuICBvbkRvbmUsXG4gIG9uQ2FuY2VsLFxufTogUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBhc3luYyBmdW5jdGlvbiBvbkV4aXQocmVzdWx0TWVzc2FnZT86IHN0cmluZykge1xuICAgIG9uRG9uZShyZXN1bHRNZXNzYWdlID8/IGdldFJhbmRvbUdvb2RieWVNZXNzYWdlKCkpXG4gICAgYXdhaXQgZ3JhY2VmdWxTaHV0ZG93bigwLCAncHJvbXB0X2lucHV0X2V4aXQnKVxuICB9XG5cbiAgaWYgKHNob3dXb3JrdHJlZSkge1xuICAgIHJldHVybiA8V29ya3RyZWVFeGl0RGlhbG9nIG9uRG9uZT17b25FeGl0fSBvbkNhbmNlbD17b25DYW5jZWx9IC8+XG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQSxTQUFTQSxxQkFBMkI7QUFFbEM7QUFBQyxFQUNDQyw4REFDQUMsa0JBQWtCLElBQUk7QUFFMUI7QUFVTyxTQUFTQyxtQkFBbUI7RUFDakNDO0VBQ0FDO0FBQ0ssR0FBb0I7QUFDekIsUUFBTSxDQUFDQyxRQUFRQyxTQUFTLElBQUlDLFNBRTFCLFNBQVM7QUFDWCxRQUFNLENBQUNDLFNBQVND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QUFBO0FBQUEsUUFBQUMsSUFBQUMsRUFBQSxDQUFBO0FBQWtCLFFBQUE7SUFBQUM7SUFBQUM7SUFBQUM7RUFBQSxJQUFBTDtBQUlqQixNQUFBTTtBQUFBLE1BQUFMLEVBQUEsQ0FBQSxNQUFBRyxRQUFBO0FBQ05FLFNBQUEsZUFBQUMsUUFBQUMsZUFBQTtBQUNFSixhQUFPSSxpQkFBaUJaLHdCQUF3QixDQUFDO0FBQ2pELFlBQU1hLGlCQUFpQixHQUFHLG1CQUFtQjtJQUFDO0FBQy9DUixNQUFBLENBQUEsSUFBQUc7QUFBQUgsTUFBQSxDQUFBLElBQUFLO0VBQUEsT0FBQTtBQUFBQSxTQUFBTCxFQUFBLENBQUE7RUFBQTtBQUhELFFBQUFNLFNBQUFEO0FBS0EsTUFBSUgsY0FBWTtBQUFBLFFBQUFPO0FBQUEsUUFBQVQsRUFBQSxDQUFBLE1BQUFJLFlBQUFKLEVBQUEsQ0FBQSxNQUFBTSxRQUFBO0FBQ1BHLFdBQUEsNENBQUMsc0JBQTJCSCxRQUFBQSxRQUFrQkYsVUFBUTtBQUFJSixRQUFBLENBQUEsSUFBQUk7QUFBQUosUUFBQSxDQUFBLElBQUFNO0FBQUFOLFFBQUEsQ0FBQSxJQUFBUztJQUFBLE9BQUE7QUFBQUEsV0FBQVQsRUFBQSxDQUFBO0lBQUE7QUFBQSxXQUExRFM7RUFBMEQ7QUFDbEUsU0FFTTtBQUFJO0lBMUJQWjs7OztBQUxOO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsbUJBQW1CLENBQUMsWUFBWSxXQUFXLFFBQVEsa0JBQWtCOzs7IiwKICAibmFtZXMiOiBbInJlY29yZFdvcmt0cmVlRXhpdCIsICJyZXF1aXJlIiwgInNhdmVXb3JrdHJlZVN0YXRlIiwgIldvcmt0cmVlRXhpdERpYWxvZyIsICJvbkRvbmUiLCAib25DYW5jZWwiLCAic3RhdHVzIiwgInNldFN0YXR1cyIsICJ1c2VTdGF0ZSIsICJjaGFuZ2VzIiwgInNldENoYW5nZXMiLCAiY29tbWl0Q291bnQiLCAic2V0Q29tbWl0Q291bnQiLCAicmVzdWx0TWVzc2FnZSIsICJzZXRSZXN1bHRNZXNzYWdlIiwgIndvcmt0cmVlU2Vzc2lvbiIsICJnZXRDdXJyZW50V29ya3RyZWVTZXNzaW9uIiwgInVzZUVmZmVjdCIsICJsb2FkQ2hhbmdlcyIsICJjaGFuZ2VMaW5lcyIsICJnaXRTdGF0dXMiLCAiZXhlY0ZpbGVOb1Rocm93IiwgInN0ZG91dCIsICJzcGxpdCIsICJmaWx0ZXIiLCAiXyIsICJ0cmltIiwgImNvbW1pdHNTdHIiLCAib3JpZ2luYWxIZWFkQ29tbWl0IiwgImNvdW50IiwgInBhcnNlSW50IiwgImxlbmd0aCIsICJjbGVhbnVwV29ya3RyZWUiLCAidGhlbiIsICJwcm9jZXNzIiwgImNoZGlyIiwgIm9yaWdpbmFsQ3dkIiwgInNldEN3ZCIsICJnZXRQbGFuc0RpcmVjdG9yeSIsICJjYWNoZSIsICJjbGVhciIsICJjYXRjaCIsICJlcnJvciIsICJsb2dGb3JEZWJ1Z2dpbmciLCAibGV2ZWwiLCAiZGlzcGxheSIsICJoYW5kbGVTZWxlY3QiLCAidmFsdWUiLCAiaGFzVG11eCIsICJCb29sZWFuIiwgInRtdXhTZXNzaW9uTmFtZSIsICJsb2dFdmVudCIsICJjb21taXRzIiwgImNoYW5nZWRfZmlsZXMiLCAia2VlcFdvcmt0cmVlIiwgIndvcmt0cmVlUGF0aCIsICJ3b3JrdHJlZUJyYW5jaCIsICJraWxsVG11eFNlc3Npb24iLCAidG11eE5vdGUiLCAiYnJhbmNoTmFtZSIsICJoYXNVbmNvbW1pdHRlZCIsICJoYXNDb21taXRzIiwgInN1YnRpdGxlIiwgImhhbmRsZUNhbmNlbCIsICJyZW1vdmVEZXNjcmlwdGlvbiIsICJoYXNUbXV4U2Vzc2lvbiIsICJvcHRpb25zIiwgImxhYmVsIiwgImRlc2NyaXB0aW9uIiwgImRlZmF1bHRWYWx1ZSIsICJnZXRSYW5kb21Hb29kYnllTWVzc2FnZSIsICJzYW1wbGUiLCAiR09PREJZRV9NRVNTQUdFUyIsICJFeGl0RmxvdyIsICJ0MCIsICIkIiwgIl9jIiwgInNob3dXb3JrdHJlZSIsICJvbkRvbmUiLCAib25DYW5jZWwiLCAidDEiLCAib25FeGl0IiwgInJlc3VsdE1lc3NhZ2UiLCAiZ3JhY2VmdWxTaHV0ZG93biIsICJ0MiJdCn0K
