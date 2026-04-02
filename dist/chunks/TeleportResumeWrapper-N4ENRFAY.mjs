#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  Select,
  Spinner,
  TeleportError,
  init_CustomSelect,
  init_Spinner,
  init_TeleportError,
  init_teleport,
  teleportResumeCodeSession
} from "./chunk-FMU4URRE.mjs";
import "./chunk-PJK4KGGT.mjs";
import {
  Byline,
  ConfigurableShortcutHint,
  KeyboardShortcutHint,
  init_Byline,
  init_ConfigurableShortcutHint,
  init_KeyboardShortcutHint,
  init_useShortcutDisplay,
  useShortcutDisplay
} from "./chunk-PEMK4FQH.mjs";
import "./chunk-SQ6KOOZS.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-Y2PD6CVC.mjs";
import "./chunk-S5Z6SZDA.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import {
  init_useKeybinding,
  init_useTerminalSize,
  useKeybinding,
  useTerminalSize
} from "./chunk-HO5F7BV3.mjs";
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
import {
  fetchCodeSessionsFromSessionsAPI,
  init_api
} from "./chunk-L57KLZUF.mjs";
import "./chunk-J7TDGLE4.mjs";
import "./chunk-HUHT3U2I.mjs";
import "./chunk-X7OJ6FBK.mjs";
import "./chunk-IIPAGI5R.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-HUEORIXP.mjs";
import "./chunk-H6COQF52.mjs";
import "./chunk-IQJUSPBJ.mjs";
import "./chunk-R326WRGL.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import {
  ThemedBox_default,
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime,
  use_input_default
} from "./chunk-HWTXKBLR.mjs";
import {
  init_react,
  react_default,
  useCallback,
  useEffect,
  useState
} from "./chunk-TEJH3H3H.mjs";
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
import {
  formatRelativeTime,
  init_format
} from "./chunk-OGGCTXYU.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-MDXHK5AD.mjs";
import "./chunk-SETG7O3F.mjs";
import "./chunk-J6MJ6UVK.mjs";
import "./chunk-PKIVPZJM.mjs";
import "./chunk-JXCG2JDO.mjs";
import {
  detectCurrentRepository,
  init_detectRepository
} from "./chunk-N62V5C2K.mjs";
import "./chunk-7SC6PTLR.mjs";
import "./chunk-NT7W7YWD.mjs";
import "./chunk-4S33EKPF.mjs";
import "./chunk-VNIROYYL.mjs";
import "./chunk-TZFTPSMG.mjs";
import "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-IPMELYAB.mjs";
import "./chunk-F5ODCUJD.mjs";
import "./chunk-ZAYB3WZV.mjs";
import {
  TeleportOperationError,
  errorMessage,
  init_debug,
  init_errors,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import "./chunk-OU3SZVVB.mjs";
import {
  init_state,
  setTeleportedSessionInfo
} from "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import "./chunk-O5PZ3G6I.mjs";

// src/components/TeleportResumeWrapper.tsx
init_react_compiler_runtime();
init_react();
init_analytics();

// src/hooks/useTeleportResume.tsx
init_react_compiler_runtime();
init_react();
init_state();
init_analytics();
init_errors();
init_teleport();
function useTeleportResume(source) {
  const $ = c(8);
  const [isResuming, setIsResuming] = useState(false);
  const [error, setError] = useState(null);
  const [selectedSession, setSelectedSession] = useState(null);
  let t0;
  if ($[0] !== source) {
    t0 = async (session) => {
      setIsResuming(true);
      setError(null);
      setSelectedSession(session);
      logEvent("tengu_teleport_resume_session", {
        source,
        session_id: session.id
      });
      ;
      try {
        const result = await teleportResumeCodeSession(session.id);
        setTeleportedSessionInfo({
          sessionId: session.id
        });
        setIsResuming(false);
        return result;
      } catch (t12) {
        const err = t12;
        const teleportError = {
          message: err instanceof TeleportOperationError ? err.message : errorMessage(err),
          formattedMessage: err instanceof TeleportOperationError ? err.formattedMessage : void 0,
          isOperationError: err instanceof TeleportOperationError
        };
        setError(teleportError);
        setIsResuming(false);
        return null;
      }
    };
    $[0] = source;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  const resumeSession = t0;
  let t1;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = () => {
      setError(null);
    };
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const clearError = t1;
  let t2;
  if ($[3] !== error || $[4] !== isResuming || $[5] !== resumeSession || $[6] !== selectedSession) {
    t2 = {
      resumeSession,
      isResuming,
      error,
      selectedSession,
      clearError
    };
    $[3] = error;
    $[4] = isResuming;
    $[5] = resumeSession;
    $[6] = selectedSession;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}

// src/components/TeleportResumeWrapper.tsx
init_ink();
init_useKeybinding();

// src/components/ResumeTask.tsx
init_react();
init_useTerminalSize();
init_api();
init_ink();
init_useKeybinding();
init_useShortcutDisplay();
init_debug();
init_detectRepository();
init_format();
init_ConfigurableShortcutHint();
init_CustomSelect();
init_Byline();
init_KeyboardShortcutHint();
init_Spinner();
init_TeleportError();
var UPDATED_STRING = "Updated";
var SPACE_BETWEEN_TABLE_COLUMNS = "  ";
function ResumeTask({
  onSelect,
  onCancel,
  isEmbedded = false
}) {
  const {
    rows
  } = useTerminalSize();
  const [sessions, setSessions] = useState([]);
  const [currentRepo, setCurrentRepo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadErrorType, setLoadErrorType] = useState(null);
  const [retrying, setRetrying] = useState(false);
  const [hasCompletedTeleportErrorFlow, setHasCompletedTeleportErrorFlow] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(1);
  const escKey = useShortcutDisplay("confirm:no", "Confirmation", "Esc");
  const loadSessions = useCallback(async () => {
    try {
      setLoading(true);
      setLoadErrorType(null);
      const detectedRepo = await detectCurrentRepository();
      setCurrentRepo(detectedRepo);
      logForDebugging(`Current repository: ${detectedRepo || "not detected"}`);
      const codeSessions = await fetchCodeSessionsFromSessionsAPI();
      let filteredSessions = codeSessions;
      if (detectedRepo) {
        filteredSessions = codeSessions.filter((session) => {
          if (!session.repo) return false;
          const sessionRepo = `${session.repo.owner.login}/${session.repo.name}`;
          return sessionRepo === detectedRepo;
        });
        logForDebugging(`Filtered ${filteredSessions.length} sessions for repo ${detectedRepo} from ${codeSessions.length} total`);
      }
      const sortedSessions = [...filteredSessions].sort((a, b) => {
        const dateA = new Date(a.updated_at);
        const dateB = new Date(b.updated_at);
        return dateB.getTime() - dateA.getTime();
      });
      setSessions(sortedSessions);
    } catch (err) {
      const errorMessage2 = err instanceof Error ? err.message : String(err);
      logForDebugging(`Error loading code sessions: ${errorMessage2}`);
      setLoadErrorType(determineErrorType(errorMessage2));
    } finally {
      setLoading(false);
      setRetrying(false);
    }
  }, []);
  const handleRetry = () => {
    setRetrying(true);
    void loadSessions();
  };
  useKeybinding("confirm:no", onCancel, {
    context: "Confirmation"
  });
  use_input_default((input, key) => {
    if (key.ctrl && input === "c") {
      onCancel();
      return;
    }
    if (key.ctrl && input === "r" && loadErrorType) {
      handleRetry();
      return;
    }
    if (loadErrorType !== null && key.return) {
      onCancel();
      return;
    }
  });
  const handleErrorComplete = useCallback(() => {
    setHasCompletedTeleportErrorFlow(true);
    void loadSessions();
  }, [setHasCompletedTeleportErrorFlow, loadSessions]);
  if (!hasCompletedTeleportErrorFlow) {
    return /* @__PURE__ */ react_default.createElement(TeleportError, { onComplete: handleErrorComplete });
  }
  if (loading) {
    return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", padding: 1 }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "row" }, /* @__PURE__ */ react_default.createElement(Spinner, null), /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Loading Blaude sessions\u2026")), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, retrying ? "Retrying\u2026" : "Fetching your Blaude sessions\u2026"));
  }
  if (loadErrorType) {
    return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", padding: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true, color: "error" }, "Error loading Blaude sessions"), renderErrorSpecificGuidance(loadErrorType), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Press ", /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Ctrl+R"), " to retry \xB7 Press", " ", /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, escKey), " to cancel"));
  }
  if (sessions.length === 0) {
    return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", padding: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "No Blaude sessions found", currentRepo && /* @__PURE__ */ react_default.createElement(ThemedText, null, " for ", currentRepo)), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Press ", /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, escKey), " to cancel")));
  }
  const sessionMetadata = sessions.map((session_0) => ({
    ...session_0,
    timeString: formatRelativeTime(new Date(session_0.updated_at))
  }));
  const maxTimeStringLength = Math.max(UPDATED_STRING.length, ...sessionMetadata.map((meta) => meta.timeString.length));
  const options = sessionMetadata.map(({
    timeString,
    title,
    id
  }) => {
    const paddedTime = timeString.padEnd(maxTimeStringLength, " ");
    return {
      label: `${paddedTime}  ${title}`,
      value: id
    };
  });
  const layoutOverhead = 7;
  const maxVisibleOptions = Math.max(1, isEmbedded ? Math.min(sessions.length, 5, rows - 6 - layoutOverhead) : Math.min(sessions.length, rows - 1 - layoutOverhead));
  const maxHeight = maxVisibleOptions + layoutOverhead;
  const showScrollPosition = sessions.length > maxVisibleOptions;
  return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", padding: 1, height: maxHeight }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Select a session to resume", showScrollPosition && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, " ", "(", focusedIndex, " of ", sessions.length, ")"), currentRepo && /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, " (", currentRepo, ")"), ":"), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginTop: 1, flexGrow: 1 }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginLeft: 2 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, UPDATED_STRING.padEnd(maxTimeStringLength, " "), SPACE_BETWEEN_TABLE_COLUMNS, "Session Title")), /* @__PURE__ */ react_default.createElement(Select, { visibleOptionCount: maxVisibleOptions, options, onChange: (value) => {
    const session_1 = sessions.find((s) => s.id === value);
    if (session_1) {
      onSelect(session_1);
    }
  }, onFocus: (value_0) => {
    const index = options.findIndex((o) => o.value === value_0);
    if (index >= 0) {
      setFocusedIndex(index + 1);
    }
  } })), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "row" }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "\u2191/\u2193", action: "select" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "confirm" }), /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "cancel" })))));
}
function determineErrorType(errorMessage2) {
  const message = errorMessage2.toLowerCase();
  if (message.includes("fetch") || message.includes("network") || message.includes("timeout")) {
    return "network";
  }
  if (message.includes("auth") || message.includes("token") || message.includes("permission") || message.includes("oauth") || message.includes("not authenticated") || message.includes("/login") || message.includes("console account") || message.includes("403")) {
    return "auth";
  }
  if (message.includes("api") || message.includes("rate limit") || message.includes("500") || message.includes("529")) {
    return "api";
  }
  return "other";
}
function renderErrorSpecificGuidance(errorType) {
  switch (errorType) {
    case "network":
      return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginY: 1, flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Check your internet connection"));
    case "auth":
      return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginY: 1, flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Teleport requires a Claude account"), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Run ", /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "/login"), ' and select "Claude account with subscription"'));
    case "api":
      return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginY: 1, flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Sorry, Claude encountered an error"));
    case "other":
      return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginY: 1, flexDirection: "row" }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Sorry, Blaude encountered an error"));
  }
}

// src/components/TeleportResumeWrapper.tsx
init_Spinner();
function TeleportResumeWrapper(t0) {
  const $ = c(25);
  const {
    onComplete,
    onCancel,
    onError,
    isEmbedded: t1,
    source
  } = t0;
  const isEmbedded = t1 === void 0 ? false : t1;
  const {
    resumeSession,
    isResuming,
    error,
    selectedSession
  } = useTeleportResume(source);
  let t2;
  let t3;
  if ($[0] !== source) {
    t2 = () => {
      logEvent("tengu_teleport_started", {
        source
      });
    };
    t3 = [source];
    $[0] = source;
    $[1] = t2;
    $[2] = t3;
  } else {
    t2 = $[1];
    t3 = $[2];
  }
  useEffect(t2, t3);
  let t4;
  if ($[3] !== error || $[4] !== onComplete || $[5] !== onError || $[6] !== resumeSession) {
    t4 = async (session) => {
      const result = await resumeSession(session);
      if (result) {
        onComplete(result);
      } else {
        if (error) {
          if (onError) {
            onError(error.message, error.formattedMessage);
          }
        }
      }
    };
    $[3] = error;
    $[4] = onComplete;
    $[5] = onError;
    $[6] = resumeSession;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  const handleSelect = t4;
  let t5;
  if ($[8] !== onCancel) {
    t5 = () => {
      logEvent("tengu_teleport_cancelled", {});
      onCancel();
    };
    $[8] = onCancel;
    $[9] = t5;
  } else {
    t5 = $[9];
  }
  const handleCancel = t5;
  const t6 = !!error && !onError;
  let t7;
  if ($[10] !== t6) {
    t7 = {
      context: "Global",
      isActive: t6
    };
    $[10] = t6;
    $[11] = t7;
  } else {
    t7 = $[11];
  }
  useKeybinding("app:interrupt", handleCancel, t7);
  if (isResuming && selectedSession) {
    let t82;
    if ($[12] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t82 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "row" }, /* @__PURE__ */ react_default.createElement(Spinner, null), /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Resuming session\u2026"));
      $[12] = t82;
    } else {
      t82 = $[12];
    }
    let t9;
    if ($[13] !== selectedSession.title) {
      t9 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", padding: 1 }, t82, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, 'Loading "', selectedSession.title, '"\u2026'));
      $[13] = selectedSession.title;
      $[14] = t9;
    } else {
      t9 = $[14];
    }
    return t9;
  }
  if (error && !onError) {
    let t82;
    if ($[15] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t82 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true, color: "error" }, "Failed to resume session");
      $[15] = t82;
    } else {
      t82 = $[15];
    }
    let t9;
    if ($[16] !== error.message) {
      t9 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, error.message);
      $[16] = error.message;
      $[17] = t9;
    } else {
      t9 = $[17];
    }
    let t10;
    if ($[18] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t10 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Press ", /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Esc"), " to cancel"));
      $[18] = t10;
    } else {
      t10 = $[18];
    }
    let t11;
    if ($[19] !== t9) {
      t11 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", padding: 1 }, t82, t9, t10);
      $[19] = t9;
      $[20] = t11;
    } else {
      t11 = $[20];
    }
    return t11;
  }
  let t8;
  if ($[21] !== handleCancel || $[22] !== handleSelect || $[23] !== isEmbedded) {
    t8 = /* @__PURE__ */ react_default.createElement(ResumeTask, { onSelect: handleSelect, onCancel: handleCancel, isEmbedded });
    $[21] = handleCancel;
    $[22] = handleSelect;
    $[23] = isEmbedded;
    $[24] = t8;
  } else {
    t8 = $[24];
  }
  return t8;
}
export {
  TeleportResumeWrapper
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvVGVsZXBvcnRSZXN1bWVXcmFwcGVyLnRzeCIsICIuLi8uLi9zcmMvaG9va3MvdXNlVGVsZXBvcnRSZXN1bWUudHN4IiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL1Jlc3VtZVRhc2sudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICB0eXBlIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gIGxvZ0V2ZW50LFxufSBmcm9tICdzcmMvc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHR5cGUgeyBUZWxlcG9ydFJlbW90ZVJlc3BvbnNlIH0gZnJvbSAnc3JjL3V0aWxzL2NvbnZlcnNhdGlvblJlY292ZXJ5LmpzJ1xuaW1wb3J0IHR5cGUgeyBDb2RlU2Vzc2lvbiB9IGZyb20gJ3NyYy91dGlscy90ZWxlcG9ydC9hcGkuanMnXG5pbXBvcnQge1xuICB0eXBlIFRlbGVwb3J0U291cmNlLFxuICB1c2VUZWxlcG9ydFJlc3VtZSxcbn0gZnJvbSAnLi4vaG9va3MvdXNlVGVsZXBvcnRSZXN1bWUuanMnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi9pbmsuanMnXG5pbXBvcnQgeyB1c2VLZXliaW5kaW5nIH0gZnJvbSAnLi4va2V5YmluZGluZ3MvdXNlS2V5YmluZGluZy5qcydcbmltcG9ydCB7IFJlc3VtZVRhc2sgfSBmcm9tICcuL1Jlc3VtZVRhc2suanMnXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnLi9TcGlubmVyLmpzJ1xuXG5pbnRlcmZhY2UgVGVsZXBvcnRSZXN1bWVXcmFwcGVyUHJvcHMge1xuICBvbkNvbXBsZXRlOiAocmVzdWx0OiBUZWxlcG9ydFJlbW90ZVJlc3BvbnNlKSA9PiB2b2lkXG4gIG9uQ2FuY2VsOiAoKSA9PiB2b2lkXG4gIG9uRXJyb3I/OiAoZXJyb3I6IHN0cmluZywgZm9ybWF0dGVkTWVzc2FnZT86IHN0cmluZykgPT4gdm9pZFxuICBpc0VtYmVkZGVkPzogYm9vbGVhblxuICBzb3VyY2U6IFRlbGVwb3J0U291cmNlXG59XG5cbi8qKlxuICogV3JhcHBlciBjb21wb25lbnQgdGhhdCBtYW5hZ2VzIHRoZSBmdWxsIHRlbGVwb3J0IHJlc3VtZSBmbG93LFxuICogaW5jbHVkaW5nIHNlc3Npb24gc2VsZWN0aW9uLCBsb2FkaW5nIHN0YXRlLCBhbmQgZXJyb3IgaGFuZGxpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFRlbGVwb3J0UmVzdW1lV3JhcHBlcih7XG4gIG9uQ29tcGxldGUsXG4gIG9uQ2FuY2VsLFxuICBvbkVycm9yLFxuICBpc0VtYmVkZGVkID0gZmFsc2UsXG4gIHNvdXJjZSxcbn06IFRlbGVwb3J0UmVzdW1lV3JhcHBlclByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgeyByZXN1bWVTZXNzaW9uLCBpc1Jlc3VtaW5nLCBlcnJvciwgc2VsZWN0ZWRTZXNzaW9uIH0gPVxuICAgIHVzZVRlbGVwb3J0UmVzdW1lKHNvdXJjZSlcblxuICAvLyBMb2cgd2hlbiB0ZWxlcG9ydCBmbG93IHN0YXJ0cyAoZm9yIGZ1bm5lbCB0cmFja2luZylcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2dFdmVudCgndGVuZ3VfdGVsZXBvcnRfc3RhcnRlZCcsIHtcbiAgICAgIHNvdXJjZTpcbiAgICAgICAgc291cmNlIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgfSlcbiAgfSwgW3NvdXJjZV0pXG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gYXN5bmMgKHNlc3Npb246IENvZGVTZXNzaW9uKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzdW1lU2Vzc2lvbihzZXNzaW9uKVxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIG9uQ29tcGxldGUocmVzdWx0KVxuICAgIH0gZWxzZSBpZiAoZXJyb3IpIHtcbiAgICAgIC8vIElmIHRoZXJlJ3MgYW4gZXJyb3IgaGFuZGxlciBwcm92aWRlZCwgdXNlIGl0XG4gICAgICBpZiAob25FcnJvcikge1xuICAgICAgICBvbkVycm9yKGVycm9yLm1lc3NhZ2UsIGVycm9yLmZvcm1hdHRlZE1lc3NhZ2UpXG4gICAgICB9XG4gICAgICAvLyBPdGhlcndpc2UgdGhlIGVycm9yIHdpbGwgYmUgZGlzcGxheWVkIGluIHRoZSBVSVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcbiAgICBsb2dFdmVudCgndGVuZ3VfdGVsZXBvcnRfY2FuY2VsbGVkJywge30pXG4gICAgb25DYW5jZWwoKVxuICB9XG5cbiAgLy8gQWxsb3cgRXNjIHRvIGRpc21pc3MgdGhlIGVycm9yIHN0YXRlXG4gIHVzZUtleWJpbmRpbmcoJ2FwcDppbnRlcnJ1cHQnLCBoYW5kbGVDYW5jZWwsIHtcbiAgICBjb250ZXh0OiAnR2xvYmFsJyxcbiAgICBpc0FjdGl2ZTogISFlcnJvciAmJiAhb25FcnJvcixcbiAgfSlcblxuICAvLyBTaG93IGxvYWRpbmcgc3Bpbm5lciB3aGVuIHJlc3VtaW5nXG4gIGlmIChpc1Jlc3VtaW5nICYmIHNlbGVjdGVkU2Vzc2lvbikge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBwYWRkaW5nPXsxfT5cbiAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwicm93XCI+XG4gICAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgICA8VGV4dCBib2xkPlJlc3VtaW5nIHNlc3Npb27igKY8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5Mb2FkaW5nICZxdW90O3tzZWxlY3RlZFNlc3Npb24udGl0bGV9JnF1b3Q74oCmPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgLy8gU2hvdyBlcnJvciBpZiB0aGVyZSB3YXMgYSBwcm9ibGVtIHJlc3VtaW5nXG4gIGlmIChlcnJvciAmJiAhb25FcnJvcikge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBwYWRkaW5nPXsxfT5cbiAgICAgICAgPFRleHQgYm9sZCBjb2xvcj1cImVycm9yXCI+XG4gICAgICAgICAgRmFpbGVkIHRvIHJlc3VtZSBzZXNzaW9uXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQgZGltQ29sb3I+e2Vycm9yLm1lc3NhZ2V9PC9UZXh0PlxuICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICBQcmVzcyA8VGV4dCBib2xkPkVzYzwvVGV4dD4gdG8gY2FuY2VsXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFJlc3VtZVRhc2tcbiAgICAgIG9uU2VsZWN0PXtoYW5kbGVTZWxlY3R9XG4gICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfVxuICAgICAgaXNFbWJlZGRlZD17aXNFbWJlZGRlZH1cbiAgICAvPlxuICApXG59XG4iLCAiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBzZXRUZWxlcG9ydGVkU2Vzc2lvbkluZm8gfSBmcm9tICdzcmMvYm9vdHN0cmFwL3N0YXRlLmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICBsb2dFdmVudCxcbn0gZnJvbSAnc3JjL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB0eXBlIHsgVGVsZXBvcnRSZW1vdGVSZXNwb25zZSB9IGZyb20gJ3NyYy91dGlscy9jb252ZXJzYXRpb25SZWNvdmVyeS5qcydcbmltcG9ydCB0eXBlIHsgQ29kZVNlc3Npb24gfSBmcm9tICdzcmMvdXRpbHMvdGVsZXBvcnQvYXBpLmpzJ1xuaW1wb3J0IHsgZXJyb3JNZXNzYWdlLCBUZWxlcG9ydE9wZXJhdGlvbkVycm9yIH0gZnJvbSAnLi4vdXRpbHMvZXJyb3JzLmpzJ1xuaW1wb3J0IHsgdGVsZXBvcnRSZXN1bWVDb2RlU2Vzc2lvbiB9IGZyb20gJy4uL3V0aWxzL3RlbGVwb3J0LmpzJ1xuXG5leHBvcnQgdHlwZSBUZWxlcG9ydFJlc3VtZUVycm9yID0ge1xuICBtZXNzYWdlOiBzdHJpbmdcbiAgZm9ybWF0dGVkTWVzc2FnZT86IHN0cmluZ1xuICBpc09wZXJhdGlvbkVycm9yOiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFRlbGVwb3J0U291cmNlID0gJ2NsaUFyZycgfCAnbG9jYWxDb21tYW5kJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGVsZXBvcnRSZXN1bWUoc291cmNlOiBUZWxlcG9ydFNvdXJjZSkge1xuICBjb25zdCBbaXNSZXN1bWluZywgc2V0SXNSZXN1bWluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxUZWxlcG9ydFJlc3VtZUVycm9yIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW3NlbGVjdGVkU2Vzc2lvbiwgc2V0U2VsZWN0ZWRTZXNzaW9uXSA9IHVzZVN0YXRlPENvZGVTZXNzaW9uIHwgbnVsbD4oXG4gICAgbnVsbCxcbiAgKVxuXG4gIGNvbnN0IHJlc3VtZVNlc3Npb24gPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyAoc2Vzc2lvbjogQ29kZVNlc3Npb24pOiBQcm9taXNlPFRlbGVwb3J0UmVtb3RlUmVzcG9uc2UgfCBudWxsPiA9PiB7XG4gICAgICBzZXRJc1Jlc3VtaW5nKHRydWUpXG4gICAgICBzZXRFcnJvcihudWxsKVxuICAgICAgc2V0U2VsZWN0ZWRTZXNzaW9uKHNlc3Npb24pXG5cbiAgICAgIC8vIExvZyB0ZWxlcG9ydCBzZXNzaW9uIHNlbGVjdGlvblxuICAgICAgbG9nRXZlbnQoJ3Rlbmd1X3RlbGVwb3J0X3Jlc3VtZV9zZXNzaW9uJywge1xuICAgICAgICBzb3VyY2U6XG4gICAgICAgICAgc291cmNlIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgIHNlc3Npb25faWQ6XG4gICAgICAgICAgc2Vzc2lvbi5pZCBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgfSlcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGVsZXBvcnRSZXN1bWVDb2RlU2Vzc2lvbihzZXNzaW9uLmlkKVxuICAgICAgICAvLyBUcmFjayB0ZWxlcG9ydGVkIHNlc3Npb24gZm9yIHJlbGlhYmlsaXR5IGxvZ2dpbmdcbiAgICAgICAgc2V0VGVsZXBvcnRlZFNlc3Npb25JbmZvKHsgc2Vzc2lvbklkOiBzZXNzaW9uLmlkIH0pXG4gICAgICAgIHNldElzUmVzdW1pbmcoZmFsc2UpXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zdCB0ZWxlcG9ydEVycm9yOiBUZWxlcG9ydFJlc3VtZUVycm9yID0ge1xuICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICBlcnIgaW5zdGFuY2VvZiBUZWxlcG9ydE9wZXJhdGlvbkVycm9yXG4gICAgICAgICAgICAgID8gZXJyLm1lc3NhZ2VcbiAgICAgICAgICAgICAgOiBlcnJvck1lc3NhZ2UoZXJyKSxcbiAgICAgICAgICBmb3JtYXR0ZWRNZXNzYWdlOlxuICAgICAgICAgICAgZXJyIGluc3RhbmNlb2YgVGVsZXBvcnRPcGVyYXRpb25FcnJvclxuICAgICAgICAgICAgICA/IGVyci5mb3JtYXR0ZWRNZXNzYWdlXG4gICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgIGlzT3BlcmF0aW9uRXJyb3I6IGVyciBpbnN0YW5jZW9mIFRlbGVwb3J0T3BlcmF0aW9uRXJyb3IsXG4gICAgICAgIH1cbiAgICAgICAgc2V0RXJyb3IodGVsZXBvcnRFcnJvcilcbiAgICAgICAgc2V0SXNSZXN1bWluZyhmYWxzZSlcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICB9LFxuICAgIFtzb3VyY2VdLFxuICApXG5cbiAgY29uc3QgY2xlYXJFcnJvciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRFcnJvcihudWxsKVxuICB9LCBbXSlcblxuICByZXR1cm4ge1xuICAgIHJlc3VtZVNlc3Npb24sXG4gICAgaXNSZXN1bWluZyxcbiAgICBlcnJvcixcbiAgICBzZWxlY3RlZFNlc3Npb24sXG4gICAgY2xlYXJFcnJvcixcbiAgfVxufVxuIiwgImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRlcm1pbmFsU2l6ZSB9IGZyb20gJ3NyYy9ob29rcy91c2VUZXJtaW5hbFNpemUuanMnXG5pbXBvcnQge1xuICB0eXBlIENvZGVTZXNzaW9uLFxuICBmZXRjaENvZGVTZXNzaW9uc0Zyb21TZXNzaW9uc0FQSSxcbn0gZnJvbSAnc3JjL3V0aWxzL3RlbGVwb3J0L2FwaS5qcydcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjdXN0b20tcnVsZXMvcHJlZmVyLXVzZS1rZXliaW5kaW5ncyAtLSByYXcgai9rL2Fycm93IGxpc3QgbmF2aWdhdGlvblxuaW1wb3J0IHsgQm94LCBUZXh0LCB1c2VJbnB1dCB9IGZyb20gJy4uL2luay5qcydcbmltcG9ydCB7IHVzZUtleWJpbmRpbmcgfSBmcm9tICcuLi9rZXliaW5kaW5ncy91c2VLZXliaW5kaW5nLmpzJ1xuaW1wb3J0IHsgdXNlU2hvcnRjdXREaXNwbGF5IH0gZnJvbSAnLi4va2V5YmluZGluZ3MvdXNlU2hvcnRjdXREaXNwbGF5LmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi4vdXRpbHMvZGVidWcuanMnXG5pbXBvcnQgeyBkZXRlY3RDdXJyZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uL3V0aWxzL2RldGVjdFJlcG9zaXRvcnkuanMnXG5pbXBvcnQgeyBmb3JtYXRSZWxhdGl2ZVRpbWUgfSBmcm9tICcuLi91dGlscy9mb3JtYXQuanMnXG5pbXBvcnQgeyBDb25maWd1cmFibGVTaG9ydGN1dEhpbnQgfSBmcm9tICcuL0NvbmZpZ3VyYWJsZVNob3J0Y3V0SGludC5qcydcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJy4vQ3VzdG9tU2VsZWN0L2luZGV4LmpzJ1xuaW1wb3J0IHsgQnlsaW5lIH0gZnJvbSAnLi9kZXNpZ24tc3lzdGVtL0J5bGluZS5qcydcbmltcG9ydCB7IEtleWJvYXJkU2hvcnRjdXRIaW50IH0gZnJvbSAnLi9kZXNpZ24tc3lzdGVtL0tleWJvYXJkU2hvcnRjdXRIaW50LmpzJ1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJy4vU3Bpbm5lci5qcydcbmltcG9ydCB7IFRlbGVwb3J0RXJyb3IgfSBmcm9tICcuL1RlbGVwb3J0RXJyb3IuanMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9uU2VsZWN0OiAoc2Vzc2lvbjogQ29kZVNlc3Npb24pID0+IHZvaWRcbiAgb25DYW5jZWw6ICgpID0+IHZvaWRcbiAgaXNFbWJlZGRlZD86IGJvb2xlYW5cbn1cblxudHlwZSBMb2FkRXJyb3JUeXBlID0gJ25ldHdvcmsnIHwgJ2F1dGgnIHwgJ2FwaScgfCAnb3RoZXInXG5cbmNvbnN0IFVQREFURURfU1RSSU5HID0gJ1VwZGF0ZWQnXG5jb25zdCBTUEFDRV9CRVRXRUVOX1RBQkxFX0NPTFVNTlMgPSAnICAnXG5cbmV4cG9ydCBmdW5jdGlvbiBSZXN1bWVUYXNrKHtcbiAgb25TZWxlY3QsXG4gIG9uQ2FuY2VsLFxuICBpc0VtYmVkZGVkID0gZmFsc2UsXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IHsgcm93cyB9ID0gdXNlVGVybWluYWxTaXplKClcbiAgY29uc3QgW3Nlc3Npb25zLCBzZXRTZXNzaW9uc10gPSB1c2VTdGF0ZTxDb2RlU2Vzc2lvbltdPihbXSlcbiAgY29uc3QgW2N1cnJlbnRSZXBvLCBzZXRDdXJyZW50UmVwb10gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtsb2FkRXJyb3JUeXBlLCBzZXRMb2FkRXJyb3JUeXBlXSA9IHVzZVN0YXRlPExvYWRFcnJvclR5cGUgfCBudWxsPihudWxsKVxuICBjb25zdCBbcmV0cnlpbmcsIHNldFJldHJ5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IFtoYXNDb21wbGV0ZWRUZWxlcG9ydEVycm9yRmxvdywgc2V0SGFzQ29tcGxldGVkVGVsZXBvcnRFcnJvckZsb3ddID1cbiAgICB1c2VTdGF0ZShmYWxzZSlcblxuICAvLyBUcmFjayBmb2N1c2VkIGluZGV4IGZvciBzY3JvbGwgcG9zaXRpb24gZGlzcGxheSBpbiB0aXRsZVxuICBjb25zdCBbZm9jdXNlZEluZGV4LCBzZXRGb2N1c2VkSW5kZXhdID0gdXNlU3RhdGUoMSlcblxuICBjb25zdCBlc2NLZXkgPSB1c2VTaG9ydGN1dERpc3BsYXkoJ2NvbmZpcm06bm8nLCAnQ29uZmlybWF0aW9uJywgJ0VzYycpXG5cbiAgY29uc3QgbG9hZFNlc3Npb25zID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICBzZXRMb2FkRXJyb3JUeXBlKG51bGwpXG5cbiAgICAgIC8vIERldGVjdCBjdXJyZW50IHJlcG9zaXRvcnlcbiAgICAgIGNvbnN0IGRldGVjdGVkUmVwbyA9IGF3YWl0IGRldGVjdEN1cnJlbnRSZXBvc2l0b3J5KClcbiAgICAgIHNldEN1cnJlbnRSZXBvKGRldGVjdGVkUmVwbylcbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhgQ3VycmVudCByZXBvc2l0b3J5OiAke2RldGVjdGVkUmVwbyB8fCAnbm90IGRldGVjdGVkJ31gKVxuXG4gICAgICBjb25zdCBjb2RlU2Vzc2lvbnMgPSBhd2FpdCBmZXRjaENvZGVTZXNzaW9uc0Zyb21TZXNzaW9uc0FQSSgpXG5cbiAgICAgIC8vIEZpbHRlciBzZXNzaW9ucyBieSBjdXJyZW50IHJlcG9zaXRvcnkgaWYgZGV0ZWN0ZWRcbiAgICAgIGxldCBmaWx0ZXJlZFNlc3Npb25zID0gY29kZVNlc3Npb25zXG4gICAgICBpZiAoZGV0ZWN0ZWRSZXBvKSB7XG4gICAgICAgIGZpbHRlcmVkU2Vzc2lvbnMgPSBjb2RlU2Vzc2lvbnMuZmlsdGVyKHNlc3Npb24gPT4ge1xuICAgICAgICAgIGlmICghc2Vzc2lvbi5yZXBvKSByZXR1cm4gZmFsc2VcbiAgICAgICAgICBjb25zdCBzZXNzaW9uUmVwbyA9IGAke3Nlc3Npb24ucmVwby5vd25lci5sb2dpbn0vJHtzZXNzaW9uLnJlcG8ubmFtZX1gXG4gICAgICAgICAgcmV0dXJuIHNlc3Npb25SZXBvID09PSBkZXRlY3RlZFJlcG9cbiAgICAgICAgfSlcbiAgICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICAgIGBGaWx0ZXJlZCAke2ZpbHRlcmVkU2Vzc2lvbnMubGVuZ3RofSBzZXNzaW9ucyBmb3IgcmVwbyAke2RldGVjdGVkUmVwb30gZnJvbSAke2NvZGVTZXNzaW9ucy5sZW5ndGh9IHRvdGFsYCxcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICAvLyBTb3J0IGJ5IHVwZGF0ZWRfYXQgKG5ld2VzdCBmaXJzdClcbiAgICAgIGNvbnN0IHNvcnRlZFNlc3Npb25zID0gWy4uLmZpbHRlcmVkU2Vzc2lvbnNdLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgZGF0ZUEgPSBuZXcgRGF0ZShhLnVwZGF0ZWRfYXQpXG4gICAgICAgIGNvbnN0IGRhdGVCID0gbmV3IERhdGUoYi51cGRhdGVkX2F0KVxuICAgICAgICByZXR1cm4gZGF0ZUIuZ2V0VGltZSgpIC0gZGF0ZUEuZ2V0VGltZSgpXG4gICAgICB9KVxuXG4gICAgICBzZXRTZXNzaW9ucyhzb3J0ZWRTZXNzaW9ucylcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBTdHJpbmcoZXJyKVxuICAgICAgbG9nRm9yRGVidWdnaW5nKGBFcnJvciBsb2FkaW5nIGNvZGUgc2Vzc2lvbnM6ICR7ZXJyb3JNZXNzYWdlfWApXG4gICAgICBzZXRMb2FkRXJyb3JUeXBlKGRldGVybWluZUVycm9yVHlwZShlcnJvck1lc3NhZ2UpKVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgc2V0UmV0cnlpbmcoZmFsc2UpXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVSZXRyeSA9ICgpID0+IHtcbiAgICBzZXRSZXRyeWluZyh0cnVlKVxuICAgIHZvaWQgbG9hZFNlc3Npb25zKClcbiAgfVxuXG4gIC8vIEhhbmRsZSBlc2NhcGUgdmlhIGtleWJpbmRpbmdcbiAgdXNlS2V5YmluZGluZygnY29uZmlybTpubycsIG9uQ2FuY2VsLCB7IGNvbnRleHQ6ICdDb25maXJtYXRpb24nIH0pXG5cbiAgdXNlSW5wdXQoKGlucHV0LCBrZXkpID0+IHtcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBjdHJsK2MgaW4gY2FzZSB3ZSBkb24ndCByZW5kZXIgYSA8U2VsZWN0PlxuICAgIGlmIChrZXkuY3RybCAmJiBpbnB1dCA9PT0gJ2MnKSB7XG4gICAgICBvbkNhbmNlbCgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcmV0cnkgaW4gZXJyb3Igc3RhdGUgd2l0aCAnY3RybCtyJ1xuICAgIGlmIChrZXkuY3RybCAmJiBpbnB1dCA9PT0gJ3InICYmIGxvYWRFcnJvclR5cGUpIHtcbiAgICAgIGhhbmRsZVJldHJ5KClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBlbnRlciBrZXkgZm9yIGVycm9yIHN0YXRlcyB0byBhbGxvdyBjb250aW51YXRpb24gd2l0aCByZWd1bGFyIHRlbGVwb3J0XG4gICAgaWYgKGxvYWRFcnJvclR5cGUgIT09IG51bGwgJiYga2V5LnJldHVybikge1xuICAgICAgb25DYW5jZWwoKSAvLyBUaGlzIHdpbGwgY29udGludWUgd2l0aCByZWd1bGFyIHRlbGVwb3J0IGZsb3dcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfSlcblxuICBjb25zdCBoYW5kbGVFcnJvckNvbXBsZXRlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldEhhc0NvbXBsZXRlZFRlbGVwb3J0RXJyb3JGbG93KHRydWUpXG4gICAgdm9pZCBsb2FkU2Vzc2lvbnMoKVxuICB9LCBbc2V0SGFzQ29tcGxldGVkVGVsZXBvcnRFcnJvckZsb3csIGxvYWRTZXNzaW9uc10pXG5cbiAgLy8gU2hvdyBlcnJvciBkaWFsb2cgaWYgbmVlZGVkXG4gIGlmICghaGFzQ29tcGxldGVkVGVsZXBvcnRFcnJvckZsb3cpIHtcbiAgICByZXR1cm4gPFRlbGVwb3J0RXJyb3Igb25Db21wbGV0ZT17aGFuZGxlRXJyb3JDb21wbGV0ZX0gLz5cbiAgfVxuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIHBhZGRpbmc9ezF9PlxuICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJyb3dcIj5cbiAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICAgIDxUZXh0IGJvbGQ+TG9hZGluZyBDbGF1ZGUgQ29kZSBzZXNzaW9uc+KApjwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgIHtyZXRyeWluZyA/ICdSZXRyeWluZ+KApicgOiAnRmV0Y2hpbmcgeW91ciBDbGF1ZGUgQ29kZSBzZXNzaW9uc+KApid9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxuXG4gIGlmIChsb2FkRXJyb3JUeXBlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIHBhZGRpbmc9ezF9PlxuICAgICAgICA8VGV4dCBib2xkIGNvbG9yPVwiZXJyb3JcIj5cbiAgICAgICAgICBFcnJvciBsb2FkaW5nIENsYXVkZSBDb2RlIHNlc3Npb25zXG4gICAgICAgIDwvVGV4dD5cblxuICAgICAgICB7cmVuZGVyRXJyb3JTcGVjaWZpY0d1aWRhbmNlKGxvYWRFcnJvclR5cGUpfVxuXG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgIFByZXNzIDxUZXh0IGJvbGQ+Q3RybCtSPC9UZXh0PiB0byByZXRyeSDCtyBQcmVzc3snICd9XG4gICAgICAgICAgPFRleHQgYm9sZD57ZXNjS2V5fTwvVGV4dD4gdG8gY2FuY2VsXG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxuXG4gIGlmIChzZXNzaW9ucy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgcGFkZGluZz17MX0+XG4gICAgICAgIDxUZXh0IGJvbGQ+XG4gICAgICAgICAgTm8gQ2xhdWRlIENvZGUgc2Vzc2lvbnMgZm91bmRcbiAgICAgICAgICB7Y3VycmVudFJlcG8gJiYgPFRleHQ+IGZvciB7Y3VycmVudFJlcG99PC9UZXh0Pn1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICBQcmVzcyA8VGV4dCBib2xkPntlc2NLZXl9PC9UZXh0PiB0byBjYW5jZWxcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgY29uc3Qgc2Vzc2lvbk1ldGFkYXRhID0gc2Vzc2lvbnMubWFwKHNlc3Npb24gPT4gKHtcbiAgICAuLi5zZXNzaW9uLFxuICAgIHRpbWVTdHJpbmc6IGZvcm1hdFJlbGF0aXZlVGltZShuZXcgRGF0ZShzZXNzaW9uLnVwZGF0ZWRfYXQpKSxcbiAgfSkpXG4gIGNvbnN0IG1heFRpbWVTdHJpbmdMZW5ndGggPSBNYXRoLm1heChcbiAgICBVUERBVEVEX1NUUklORy5sZW5ndGgsXG4gICAgLi4uc2Vzc2lvbk1ldGFkYXRhLm1hcChtZXRhID0+IG1ldGEudGltZVN0cmluZy5sZW5ndGgpLFxuICApXG5cbiAgY29uc3Qgb3B0aW9ucyA9IHNlc3Npb25NZXRhZGF0YS5tYXAoKHsgdGltZVN0cmluZywgdGl0bGUsIGlkIH0pID0+IHtcbiAgICBjb25zdCBwYWRkZWRUaW1lID0gdGltZVN0cmluZy5wYWRFbmQobWF4VGltZVN0cmluZ0xlbmd0aCwgJyAnKVxuXG4gICAgLy8gVE9ETzogaW5jbHVkZSBicmFuY2ggbmFtZSB3aGVuIEFQSSByZXR1cm5zIGl0XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhYmVsOiBgJHtwYWRkZWRUaW1lfSAgJHt0aXRsZX1gLFxuICAgICAgdmFsdWU6IGlkLFxuICAgIH1cbiAgfSlcblxuICAvLyBBZGp1c3QgbGF5b3V0IGZvciBlbWJlZGRlZCB2cyBmdWxsLXNjcmVlbiByZW5kZXJpbmdcbiAgLy8gT3ZlcmhlYWQ6IHBhZGRpbmcgKDIpICsgdGl0bGUgKDEpICsgbWFyZ2luWSAoMikgKyBoZWFkZXIgKDEpICsgZm9vdGVyICgxKSA9IDdcbiAgY29uc3QgbGF5b3V0T3ZlcmhlYWQgPSA3XG4gIGNvbnN0IG1heFZpc2libGVPcHRpb25zID0gTWF0aC5tYXgoXG4gICAgMSxcbiAgICBpc0VtYmVkZGVkXG4gICAgICA/IE1hdGgubWluKHNlc3Npb25zLmxlbmd0aCwgNSwgcm93cyAtIDYgLSBsYXlvdXRPdmVyaGVhZClcbiAgICAgIDogTWF0aC5taW4oc2Vzc2lvbnMubGVuZ3RoLCByb3dzIC0gMSAtIGxheW91dE92ZXJoZWFkKSxcbiAgKVxuICBjb25zdCBtYXhIZWlnaHQgPSBtYXhWaXNpYmxlT3B0aW9ucyArIGxheW91dE92ZXJoZWFkXG5cbiAgLy8gU2hvdyBzY3JvbGwgcG9zaXRpb24gaW4gdGl0bGUgd2hlbiBsaXN0IG5lZWRzIHNjcm9sbGluZ1xuICBjb25zdCBzaG93U2Nyb2xsUG9zaXRpb24gPSBzZXNzaW9ucy5sZW5ndGggPiBtYXhWaXNpYmxlT3B0aW9uc1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgcGFkZGluZz17MX0gaGVpZ2h0PXttYXhIZWlnaHR9PlxuICAgICAgPFRleHQgYm9sZD5cbiAgICAgICAgU2VsZWN0IGEgc2Vzc2lvbiB0byByZXN1bWVcbiAgICAgICAge3Nob3dTY3JvbGxQb3NpdGlvbiAmJiAoXG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgKHtmb2N1c2VkSW5kZXh9IG9mIHtzZXNzaW9ucy5sZW5ndGh9KVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgKX1cbiAgICAgICAge2N1cnJlbnRSZXBvICYmIDxUZXh0IGRpbUNvbG9yPiAoe2N1cnJlbnRSZXBvfSk8L1RleHQ+fTpcbiAgICAgIDwvVGV4dD5cbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpblRvcD17MX0gZmxleEdyb3c9ezF9PlxuICAgICAgICA8Qm94IG1hcmdpbkxlZnQ9ezJ9PlxuICAgICAgICAgIDxUZXh0IGJvbGQ+XG4gICAgICAgICAgICB7VVBEQVRFRF9TVFJJTkcucGFkRW5kKG1heFRpbWVTdHJpbmdMZW5ndGgsICcgJyl9XG4gICAgICAgICAgICB7U1BBQ0VfQkVUV0VFTl9UQUJMRV9DT0xVTU5TfVxuICAgICAgICAgICAgeydTZXNzaW9uIFRpdGxlJ31cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgdmlzaWJsZU9wdGlvbkNvdW50PXttYXhWaXNpYmxlT3B0aW9uc31cbiAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZXNzaW9uID0gc2Vzc2lvbnMuZmluZChzID0+IHMuaWQgPT09IHZhbHVlKVxuICAgICAgICAgICAgaWYgKHNlc3Npb24pIHtcbiAgICAgICAgICAgICAgb25TZWxlY3Qoc2Vzc2lvbilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uRm9jdXM9e3ZhbHVlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gb3B0aW9ucy5maW5kSW5kZXgobyA9PiBvLnZhbHVlID09PSB2YWx1ZSlcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgIHNldEZvY3VzZWRJbmRleChpbmRleCArIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwicm93XCI+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgIDxCeWxpbmU+XG4gICAgICAgICAgICA8S2V5Ym9hcmRTaG9ydGN1dEhpbnQgc2hvcnRjdXQ9XCLihpEv4oaTXCIgYWN0aW9uPVwic2VsZWN0XCIgLz5cbiAgICAgICAgICAgIDxLZXlib2FyZFNob3J0Y3V0SGludCBzaG9ydGN1dD1cIkVudGVyXCIgYWN0aW9uPVwiY29uZmlybVwiIC8+XG4gICAgICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgICAgIGFjdGlvbj1cImNvbmZpcm06bm9cIlxuICAgICAgICAgICAgICBjb250ZXh0PVwiQ29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgZmFsbGJhY2s9XCJFc2NcIlxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cImNhbmNlbFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQnlsaW5lPlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKVxufVxuXG4vKipcbiAqIERldGVybWluZXMgdGhlIHR5cGUgb2YgZXJyb3IgYmFzZWQgb24gdGhlIGVycm9yIG1lc3NhZ2VcbiAqL1xuZnVuY3Rpb24gZGV0ZXJtaW5lRXJyb3JUeXBlKGVycm9yTWVzc2FnZTogc3RyaW5nKTogTG9hZEVycm9yVHlwZSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBlcnJvck1lc3NhZ2UudG9Mb3dlckNhc2UoKVxuXG4gIGlmIChcbiAgICBtZXNzYWdlLmluY2x1ZGVzKCdmZXRjaCcpIHx8XG4gICAgbWVzc2FnZS5pbmNsdWRlcygnbmV0d29yaycpIHx8XG4gICAgbWVzc2FnZS5pbmNsdWRlcygndGltZW91dCcpXG4gICkge1xuICAgIHJldHVybiAnbmV0d29yaydcbiAgfVxuXG4gIGlmIChcbiAgICBtZXNzYWdlLmluY2x1ZGVzKCdhdXRoJykgfHxcbiAgICBtZXNzYWdlLmluY2x1ZGVzKCd0b2tlbicpIHx8XG4gICAgbWVzc2FnZS5pbmNsdWRlcygncGVybWlzc2lvbicpIHx8XG4gICAgbWVzc2FnZS5pbmNsdWRlcygnb2F1dGgnKSB8fFxuICAgIG1lc3NhZ2UuaW5jbHVkZXMoJ25vdCBhdXRoZW50aWNhdGVkJykgfHxcbiAgICBtZXNzYWdlLmluY2x1ZGVzKCcvbG9naW4nKSB8fFxuICAgIG1lc3NhZ2UuaW5jbHVkZXMoJ2NvbnNvbGUgYWNjb3VudCcpIHx8XG4gICAgbWVzc2FnZS5pbmNsdWRlcygnNDAzJylcbiAgKSB7XG4gICAgcmV0dXJuICdhdXRoJ1xuICB9XG5cbiAgaWYgKFxuICAgIG1lc3NhZ2UuaW5jbHVkZXMoJ2FwaScpIHx8XG4gICAgbWVzc2FnZS5pbmNsdWRlcygncmF0ZSBsaW1pdCcpIHx8XG4gICAgbWVzc2FnZS5pbmNsdWRlcygnNTAwJykgfHxcbiAgICBtZXNzYWdlLmluY2x1ZGVzKCc1MjknKVxuICApIHtcbiAgICByZXR1cm4gJ2FwaSdcbiAgfVxuXG4gIHJldHVybiAnb3RoZXInXG59XG5cbi8qKlxuICogUmVuZGVycyBlcnJvci1zcGVjaWZpYyB0cm91Ymxlc2hvb3RpbmcgZ3VpZGFuY2VcbiAqL1xuZnVuY3Rpb24gcmVuZGVyRXJyb3JTcGVjaWZpY0d1aWRhbmNlKFxuICBlcnJvclR5cGU6IExvYWRFcnJvclR5cGUsXG4pOiBSZWFjdC5SZWFjdE5vZGUge1xuICBzd2l0Y2ggKGVycm9yVHlwZSkge1xuICAgIGNhc2UgJ25ldHdvcmsnOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEJveCBtYXJnaW5ZPXsxfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+Q2hlY2sgeW91ciBpbnRlcm5ldCBjb25uZWN0aW9uPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgIClcblxuICAgIGNhc2UgJ2F1dGgnOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEJveCBtYXJnaW5ZPXsxfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+VGVsZXBvcnQgcmVxdWlyZXMgYSBDbGF1ZGUgYWNjb3VudDwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgIFJ1biA8VGV4dCBib2xkPi9sb2dpbjwvVGV4dD4gYW5kIHNlbGVjdCAmcXVvdDtDbGF1ZGUgYWNjb3VudCB3aXRoXG4gICAgICAgICAgICBzdWJzY3JpcHRpb24mcXVvdDtcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgKVxuXG4gICAgY2FzZSAnYXBpJzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggbWFyZ2luWT17MX0gZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlNvcnJ5LCBDbGF1ZGUgZW5jb3VudGVyZWQgYW4gZXJyb3I8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgKVxuXG4gICAgY2FzZSAnb3RoZXInOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEJveCBtYXJnaW5ZPXsxfSBmbGV4RGlyZWN0aW9uPVwicm93XCI+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+U29ycnksIENsYXVkZSBDb2RlIGVuY291bnRlcmVkIGFuIGVycm9yPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgIClcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBVU8sU0FBQUEsa0JBQUFDLFFBQUE7QUFBQSxRQUFBQyxJQUFBQyxFQUFBLENBQUE7QUFDTCxRQUFBLENBQUFDLFlBQUFDLGFBQUEsSUFBb0NDLFNBQVMsS0FBSztBQUNsRCxRQUFBLENBQUFDLE9BQUFDLFFBQUEsSUFBMEJGLFNBQXFDLElBQUk7QUFDbkUsUUFBQSxDQUFBRyxpQkFBQUMsa0JBQUEsSUFBOENKLFNBQzVDLElBQ0Y7QUFBQyxNQUFBSztBQUFBLE1BQUFULEVBQUEsQ0FBQSxNQUFBRCxRQUFBO0FBR0NVLFNBQUEsT0FBQUMsWUFBQTtBQUNFUCxvQkFBYyxJQUFJO0FBQ2xCRyxlQUFTLElBQUk7QUFDYkUseUJBQW1CRSxPQUFPO0FBRzFCQyxlQUFTLGlDQUFpQztRQUFBWjtRQUU4QmEsWUFFcEVGLFFBQU9HO01BQ1gsQ0FBQztBQUFDO0FBRUYsVUFBQTtBQUNFLGNBQUFDLFNBQWUsTUFBTUMsMEJBQTBCTCxRQUFPRyxFQUFHO0FBRXpERyxpQ0FBeUI7VUFBQUMsV0FBYVAsUUFBT0c7UUFBSSxD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QUwsTUFBQSxFQUFBLElBQUErQjtFQUFBLE9BQUE7QUFBQUEsU0FBQS9CLEVBQUEsRUFBQTtFQUFBO0FBQUEsU0FKRitCO0FBSUU7IiwKICAibmFtZXMiOiBbInVzZVRlbGVwb3J0UmVzdW1lIiwgInNvdXJjZSIsICIkIiwgIl9jIiwgImlzUmVzdW1pbmciLCAic2V0SXNSZXN1bWluZyIsICJ1c2VTdGF0ZSIsICJlcnJvciIsICJzZXRFcnJvciIsICJzZWxlY3RlZFNlc3Npb24iLCAic2V0U2VsZWN0ZWRTZXNzaW9uIiwgInQwIiwgInNlc3Npb24iLCAibG9nRXZlbnQiLCAic2Vzc2lvbl9pZCIsICJpZCIsICJyZXN1bHQiLCAidGVsZXBvcnRSZXN1bWVDb2RlU2Vzc2lvbiIsICJzZXRUZWxlcG9ydGVkU2Vzc2lvbkluZm8iLCAic2Vzc2lvbklkIiwgInQxIiwgImVyciIsICJ0ZWxlcG9ydEVycm9yIiwgIm1lc3NhZ2UiLCAiVGVsZXBvcnRPcGVyYXRpb25FcnJvciIsICJlcnJvck1lc3NhZ2UiLCAiZm9ybWF0dGVkTWVzc2FnZSIsICJ1bmRlZmluZWQiLCAiaXNPcGVyYXRpb25FcnJvciIsICJyZXN1bWVTZXNzaW9uIiwgIlN5bWJvbCIsICJmb3IiLCAiY2xlYXJFcnJvciIsICJ0MiIsICJVUERBVEVEX1NUUklORyIsICJTUEFDRV9CRVRXRUVOX1RBQkxFX0NPTFVNTlMiLCAiUmVzdW1lVGFzayIsICJvblNlbGVjdCIsICJvbkNhbmNlbCIsICJpc0VtYmVkZGVkIiwgInJvd3MiLCAidXNlVGVybWluYWxTaXplIiwgInNlc3Npb25zIiwgInNldFNlc3Npb25zIiwgInVzZVN0YXRlIiwgImN1cnJlbnRSZXBvIiwgInNldEN1cnJlbnRSZXBvIiwgImxvYWRpbmciLCAic2V0TG9hZGluZyIsICJsb2FkRXJyb3JUeXBlIiwgInNldExvYWRFcnJvclR5cGUiLCAicmV0cnlpbmciLCAic2V0UmV0cnlpbmciLCAiaGFzQ29tcGxldGVkVGVsZXBvcnRFcnJvckZsb3ciLCAic2V0SGFzQ29tcGxldGVkVGVsZXBvcnRFcnJvckZsb3ciLCAiZm9jdXNlZEluZGV4IiwgInNldEZvY3VzZWRJbmRleCIsICJlc2NLZXkiLCAidXNlU2hvcnRjdXREaXNwbGF5IiwgImxvYWRTZXNzaW9ucyIsICJ1c2VDYWxsYmFjayIsICJkZXRlY3RlZFJlcG8iLCAiZGV0ZWN0Q3VycmVudFJlcG9zaXRvcnkiLCAibG9nRm9yRGVidWdnaW5nIiwgImNvZGVTZXNzaW9ucyIsICJmZXRjaENvZGVTZXNzaW9uc0Zyb21TZXNzaW9uc0FQSSIsICJmaWx0ZXJlZFNlc3Npb25zIiwgImZpbHRlciIsICJzZXNzaW9uIiwgInJlcG8iLCAic2Vzc2lvblJlcG8iLCAib3duZXIiLCAibG9naW4iLCAibmFtZSIsICJsZW5ndGgiLCAic29ydGVkU2Vzc2lvbnMiLCAic29ydCIsICJhIiwgImIiLCAiZGF0ZUEiLCAiRGF0ZSIsICJ1cGRhdGVkX2F0IiwgImRhdGVCIiwgImdldFRpbWUiLCAiZXJyIiwgImVycm9yTWVzc2FnZSIsICJFcnJvciIsICJtZXNzYWdlIiwgIlN0cmluZyIsICJkZXRlcm1pbmVFcnJvclR5cGUiLCAiaGFuZGxlUmV0cnkiLCAidXNlS2V5YmluZGluZyIsICJjb250ZXh0IiwgInVzZUlucHV0IiwgImlucHV0IiwgImtleSIsICJjdHJsIiwgInJldHVybiIsICJoYW5kbGVFcnJvckNvbXBsZXRlIiwgInJlbmRlckVycm9yU3BlY2lmaWNHdWlkYW5jZSIsICJzZXNzaW9uTWV0YWRhdGEiLCAibWFwIiwgInRpbWVTdHJpbmciLCAiZm9ybWF0UmVsYXRpdmVUaW1lIiwgIm1heFRpbWVTdHJpbmdMZW5ndGgiLCAiTWF0aCIsICJtYXgiLCAibWV0YSIsICJvcHRpb25zIiwgInRpdGxlIiwgImlkIiwgInBhZGRlZFRpbWUiLCAicGFkRW5kIiwgImxhYmVsIiwgInZhbHVlIiwgImxheW91dE92ZXJoZWFkIiwgIm1heFZpc2libGVPcHRpb25zIiwgIm1pbiIsICJtYXhIZWlnaHQiLCAic2hvd1Njcm9sbFBvc2l0aW9uIiwgImZpbmQiLCAicyIsICJpbmRleCIsICJmaW5kSW5kZXgiLCAibyIsICJ0b0xvd2VyQ2FzZSIsICJpbmNsdWRlcyIsICJlcnJvclR5cGUiLCAiVGVsZXBvcnRSZXN1bWVXcmFwcGVyIiwgInQwIiwgIiQiLCAiX2MiLCAib25Db21wbGV0ZSIsICJvbkNhbmNlbCIsICJvbkVycm9yIiwgImlzRW1iZWRkZWQiLCAidDEiLCAic291cmNlIiwgInVuZGVmaW5lZCIsICJyZXN1bWVTZXNzaW9uIiwgImlzUmVzdW1pbmciLCAiZXJyb3IiLCAic2VsZWN0ZWRTZXNzaW9uIiwgInVzZVRlbGVwb3J0UmVzdW1lIiwgInQyIiwgInQzIiwgImxvZ0V2ZW50IiwgInVzZUVmZmVjdCIsICJ0NCIsICJzZXNzaW9uIiwgInJlc3VsdCIsICJtZXNzYWdlIiwgImZvcm1hdHRlZE1lc3NhZ2UiLCAiaGFuZGxlU2VsZWN0IiwgInQ1IiwgImhhbmRsZUNhbmNlbCIsICJ0NiIsICJ0NyIsICJjb250ZXh0IiwgImlzQWN0aXZlIiwgInVzZUtleWJpbmRpbmciLCAidDgiLCAiU3ltYm9sIiwgImZvciIsICJ0OSIsICJ0aXRsZSIsICJ0MTAiLCAidDExIl0KfQo=
