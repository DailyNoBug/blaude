#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  REPL
} from "./chunk-TZ544QDN.mjs";
import "./chunk-KVDMSSQW.mjs";
import "./chunk-IMN2ZHYN.mjs";
import "./chunk-TY5RD4UL.mjs";
import "./chunk-SZLBWTOP.mjs";
import "./chunk-UR6AFXRW.mjs";
import {
  computeStandaloneAgentContext,
  init_persist,
  persist_exports,
  restoreAgentFromSession,
  restoreWorktreeForResume
} from "./chunk-ZAAAQ6SV.mjs";
import "./chunk-DGT6WFGO.mjs";
import "./chunk-UY4WJ7EZ.mjs";
import "./chunk-MM6QPGTN.mjs";
import {
  renameRecordingForSession
} from "./chunk-PIEUNPJU.mjs";
import "./chunk-FW3IIWEN.mjs";
import "./chunk-QSS53KEZ.mjs";
import "./chunk-QLZJRPHV.mjs";
import "./chunk-56GML2C2.mjs";
import "./chunk-WBJL7DYB.mjs";
import "./chunk-T77C4E6Y.mjs";
import "./chunk-IW3X2UT7.mjs";
import "./chunk-U5MKOF44.mjs";
import "./chunk-LKRN4KMJ.mjs";
import "./chunk-P6I76ATS.mjs";
import "./chunk-IZ5MWO6Q.mjs";
import "./chunk-MC6LDXJU.mjs";
import "./chunk-NGCA2Z33.mjs";
import "./chunk-GVUB7ZFS.mjs";
import "./chunk-7KN36EV3.mjs";
import "./chunk-ZTJN7N62.mjs";
import "./chunk-EBNFWMTK.mjs";
import "./chunk-ZAHVZX2O.mjs";
import "./chunk-4I4NFEXK.mjs";
import "./chunk-FBWGG2RV.mjs";
import "./chunk-TUS5EHIO.mjs";
import {
  LogSelector,
  agenticSessionSearch,
  checkCrossProjectResume,
  init_LogSelector,
  init_agenticSessionSearch,
  init_crossProjectResume
} from "./chunk-RV6ZQYZR.mjs";
import "./chunk-IT4CEBZ3.mjs";
import "./chunk-TEWZAOEX.mjs";
import "./chunk-3CKXPEPP.mjs";
import "./chunk-SST3HAV6.mjs";
import "./chunk-63EENAGG.mjs";
import "./chunk-G7GD7K34.mjs";
import "./chunk-USK6WK3P.mjs";
import "./chunk-QEBNTS4F.mjs";
import "./chunk-Z4SJV6S3.mjs";
import "./chunk-C5PXL5QF.mjs";
import "./chunk-5VAWKU3E.mjs";
import "./chunk-PTYHZPYV.mjs";
import "./chunk-WAF5SCY7.mjs";
import "./chunk-VOGWME6Z.mjs";
import "./chunk-UV2PUQ6S.mjs";
import "./chunk-5NO66FTZ.mjs";
import "./chunk-4WD5JQZV.mjs";
import "./chunk-7LBVPYAH.mjs";
import "./chunk-2Z7MV3UG.mjs";
import "./chunk-5KJYW63I.mjs";
import "./chunk-6DOUMYB2.mjs";
import "./chunk-EOFNYHIQ.mjs";
import "./chunk-O4YARGMF.mjs";
import "./chunk-CMU6H2E2.mjs";
import "./chunk-GZC3JP6N.mjs";
import "./chunk-U2LTAULA.mjs";
import "./chunk-4I3PGYQC.mjs";
import "./chunk-UC65H2JW.mjs";
import "./chunk-ZYXMYZJN.mjs";
import "./chunk-7DA2PBIX.mjs";
import "./chunk-EA54UMLK.mjs";
import "./chunk-Y6HBFSUU.mjs";
import "./chunk-YGX5L7FA.mjs";
import "./chunk-Q23UA7RY.mjs";
import "./chunk-NSUS22JB.mjs";
import "./chunk-KVW7KIZE.mjs";
import {
  Spinner,
  adoptResumedSessionFile,
  asSessionId,
  coordinatorMode_exports,
  createSystemMessage,
  enrichLogs,
  init_AppState,
  init_Spinner,
  init_concurrentSessions,
  init_conversationRecovery,
  init_coordinatorMode,
  init_cost_tracker,
  init_ids,
  init_loadAgentsDir,
  init_messages2 as init_messages,
  init_sessionStorage,
  isCustomTitleEnabled,
  loadAgentsDir_exports,
  loadAllProjectsMessageLogsProgressive,
  loadConversationForResume,
  loadSameRepoMessageLogsProgressive,
  recordContentReplacement,
  resetSessionFilePointer,
  restoreCostStateForSession,
  restoreSessionMetadata,
  sessionStorage_exports,
  updateSessionName,
  useAppState,
  useSetAppState
} from "./chunk-OTDPNGFK.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-PEMK4FQH.mjs";
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
import "./chunk-L57KLZUF.mjs";
import "./chunk-J7TDGLE4.mjs";
import "./chunk-HUHT3U2I.mjs";
import "./chunk-X7OJ6FBK.mjs";
import "./chunk-4GJVIJWN.mjs";
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
  init_osc,
  init_react_compiler_runtime,
  setClipboard
} from "./chunk-HWTXKBLR.mjs";
import {
  init_react,
  react_default
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
import "./chunk-OGGCTXYU.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-MDXHK5AD.mjs";
import "./chunk-SETG7O3F.mjs";
import "./chunk-J6MJ6UVK.mjs";
import "./chunk-PKIVPZJM.mjs";
import "./chunk-JXCG2JDO.mjs";
import "./chunk-N62V5C2K.mjs";
import "./chunk-7SC6PTLR.mjs";
import "./chunk-NT7W7YWD.mjs";
import "./chunk-4S33EKPF.mjs";
import "./chunk-VNIROYYL.mjs";
import "./chunk-TZFTPSMG.mjs";
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-IPMELYAB.mjs";
import "./chunk-F5ODCUJD.mjs";
import "./chunk-ZAYB3WZV.mjs";
import "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import {
  feature,
  init_bun_bundle
} from "./chunk-OU3SZVVB.mjs";
import {
  getOriginalCwd,
  init_state,
  switchSession
} from "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// src/screens/ResumeConversation.tsx
init_react_compiler_runtime();
init_bun_bundle();
init_react();
init_useTerminalSize();
init_state();
init_LogSelector();
init_Spinner();
init_cost_tracker();
init_osc();
init_ink();
init_useKeybinding();
init_analytics();
init_AppState();
init_ids();
init_agenticSessionSearch();
import { dirname } from "path";
init_concurrentSessions();
init_conversationRecovery();
init_crossProjectResume();
init_log();
init_messages();
init_sessionStorage();
function parsePrIdentifier(value) {
  const directNumber = parseInt(value, 10);
  if (!isNaN(directNumber) && directNumber > 0) {
    return directNumber;
  }
  const urlMatch = value.match(/github\.com\/[^/]+\/[^/]+\/pull\/(\d+)/);
  if (urlMatch?.[1]) {
    return parseInt(urlMatch[1], 10);
  }
  return null;
}
function ResumeConversation({
  commands,
  worktreePaths,
  initialTools,
  mcpClients,
  dynamicMcpConfig,
  debug,
  mainThreadAgentDefinition,
  autoConnectIdeFlag,
  strictMcpConfig = false,
  systemPrompt,
  appendSystemPrompt,
  initialSearchQuery,
  disableSlashCommands = false,
  forkSession,
  taskListId,
  filterByPr,
  thinkingConfig,
  onTurnComplete
}) {
  const {
    rows
  } = useTerminalSize();
  const agentDefinitions = useAppState((s) => s.agentDefinitions);
  const setAppState = useSetAppState();
  const [logs, setLogs] = react_default.useState([]);
  const [loading, setLoading] = react_default.useState(true);
  const [resuming, setResuming] = react_default.useState(false);
  const [showAllProjects, setShowAllProjects] = react_default.useState(false);
  const [resumeData, setResumeData] = react_default.useState(null);
  const [crossProjectCommand, setCrossProjectCommand] = react_default.useState(null);
  const sessionLogResultRef = react_default.useRef(null);
  const logCountRef = react_default.useRef(0);
  const filteredLogs = react_default.useMemo(() => {
    let result = logs.filter((l) => !l.isSidechain);
    if (filterByPr !== void 0) {
      if (filterByPr === true) {
        result = result.filter((l_0) => l_0.prNumber !== void 0);
      } else if (typeof filterByPr === "number") {
        result = result.filter((l_1) => l_1.prNumber === filterByPr);
      } else if (typeof filterByPr === "string") {
        const prNumber = parsePrIdentifier(filterByPr);
        if (prNumber !== null) {
          result = result.filter((l_2) => l_2.prNumber === prNumber);
        }
      }
    }
    return result;
  }, [logs, filterByPr]);
  const isResumeWithRenameEnabled = isCustomTitleEnabled();
  react_default.useEffect(() => {
    loadSameRepoMessageLogsProgressive(worktreePaths).then((result_0) => {
      sessionLogResultRef.current = result_0;
      logCountRef.current = result_0.logs.length;
      setLogs(result_0.logs);
      setLoading(false);
    }).catch((error) => {
      logError(error);
      setLoading(false);
    });
  }, [worktreePaths]);
  const loadMoreLogs = react_default.useCallback((count) => {
    const ref = sessionLogResultRef.current;
    if (!ref || ref.nextIndex >= ref.allStatLogs.length) return;
    void enrichLogs(ref.allStatLogs, ref.nextIndex, count).then((result_1) => {
      ref.nextIndex = result_1.nextIndex;
      if (result_1.logs.length > 0) {
        const offset = logCountRef.current;
        result_1.logs.forEach((log, i) => {
          log.value = offset + i;
        });
        setLogs((prev) => prev.concat(result_1.logs));
        logCountRef.current += result_1.logs.length;
      } else if (ref.nextIndex < ref.allStatLogs.length) {
        loadMoreLogs(count);
      }
    });
  }, []);
  const loadLogs = react_default.useCallback((allProjects) => {
    setLoading(true);
    const promise = allProjects ? loadAllProjectsMessageLogsProgressive() : loadSameRepoMessageLogsProgressive(worktreePaths);
    promise.then((result_2) => {
      sessionLogResultRef.current = result_2;
      logCountRef.current = result_2.logs.length;
      setLogs(result_2.logs);
    }).catch((error_0) => {
      logError(error_0);
    }).finally(() => {
      setLoading(false);
    });
  }, [worktreePaths]);
  const handleToggleAllProjects = react_default.useCallback(() => {
    const newValue = !showAllProjects;
    setShowAllProjects(newValue);
    loadLogs(newValue);
  }, [showAllProjects, loadLogs]);
  function onCancel() {
    process.exit(1);
  }
  async function onSelect(log_0) {
    setResuming(true);
    const resumeStart = performance.now();
    const crossProjectCheck = checkCrossProjectResume(log_0, showAllProjects, worktreePaths);
    if (crossProjectCheck.isCrossProject) {
      if (!crossProjectCheck.isSameRepoWorktree) {
        const raw = await setClipboard(crossProjectCheck.command);
        if (raw) process.stdout.write(raw);
        setCrossProjectCommand(crossProjectCheck.command);
        return;
      }
    }
    try {
      const result_3 = await loadConversationForResume(log_0, void 0);
      if (!result_3) {
        throw new Error("Failed to load conversation");
      }
      if (feature("COORDINATOR_MODE")) {
        const coordinatorModule = (init_coordinatorMode(), __toCommonJS(coordinatorMode_exports));
        const warning = coordinatorModule.matchSessionMode(result_3.mode);
        if (warning) {
          const {
            getAgentDefinitionsWithOverrides,
            getActiveAgentsFromList
          } = (init_loadAgentsDir(), __toCommonJS(loadAgentsDir_exports));
          getAgentDefinitionsWithOverrides.cache.clear?.();
          const freshAgentDefs = await getAgentDefinitionsWithOverrides(getOriginalCwd());
          setAppState((prev_0) => ({
            ...prev_0,
            agentDefinitions: {
              ...freshAgentDefs,
              allAgents: freshAgentDefs.allAgents,
              activeAgents: getActiveAgentsFromList(freshAgentDefs.allAgents)
            }
          }));
          result_3.messages.push(createSystemMessage(warning, "warning"));
        }
      }
      if (result_3.sessionId && !forkSession) {
        switchSession(asSessionId(result_3.sessionId), log_0.fullPath ? dirname(log_0.fullPath) : null);
        await renameRecordingForSession();
        await resetSessionFilePointer();
        restoreCostStateForSession(result_3.sessionId);
      } else if (forkSession && result_3.contentReplacements?.length) {
        await recordContentReplacement(result_3.contentReplacements);
      }
      const {
        agentDefinition: resolvedAgentDef
      } = restoreAgentFromSession(result_3.agentSetting, mainThreadAgentDefinition, agentDefinitions);
      setAppState((prev_1) => ({
        ...prev_1,
        agent: resolvedAgentDef?.agentType
      }));
      if (feature("COORDINATOR_MODE")) {
        const {
          saveMode
        } = (init_sessionStorage(), __toCommonJS(sessionStorage_exports));
        const {
          isCoordinatorMode
        } = (init_coordinatorMode(), __toCommonJS(coordinatorMode_exports));
        saveMode(isCoordinatorMode() ? "coordinator" : "normal");
      }
      const standaloneAgentContext = computeStandaloneAgentContext(result_3.agentName, result_3.agentColor);
      if (standaloneAgentContext) {
        setAppState((prev_2) => ({
          ...prev_2,
          standaloneAgentContext
        }));
      }
      void updateSessionName(result_3.agentName);
      restoreSessionMetadata(forkSession ? {
        ...result_3,
        worktreeSession: void 0
      } : result_3);
      if (!forkSession) {
        restoreWorktreeForResume(result_3.worktreeSession);
        if (result_3.sessionId) {
          adoptResumedSessionFile();
        }
      }
      if (feature("CONTEXT_COLLAPSE")) {
        ;
        (init_persist(), __toCommonJS(persist_exports)).restoreFromEntries(result_3.contextCollapseCommits ?? [], result_3.contextCollapseSnapshot);
      }
      logEvent("tengu_session_resumed", {
        entrypoint: "picker",
        success: true,
        resume_duration_ms: Math.round(performance.now() - resumeStart)
      });
      setLogs([]);
      setResumeData({
        messages: result_3.messages,
        fileHistorySnapshots: result_3.fileHistorySnapshots,
        contentReplacements: result_3.contentReplacements,
        agentName: result_3.agentName,
        agentColor: result_3.agentColor === "default" ? void 0 : result_3.agentColor,
        mainThreadAgentDefinition: resolvedAgentDef
      });
    } catch (e) {
      logEvent("tengu_session_resumed", {
        entrypoint: "picker",
        success: false
      });
      logError(e);
      throw e;
    }
  }
  if (crossProjectCommand) {
    return /* @__PURE__ */ react_default.createElement(CrossProjectMessage, { command: crossProjectCommand });
  }
  if (resumeData) {
    return /* @__PURE__ */ react_default.createElement(REPL, { debug, commands, initialTools, initialMessages: resumeData.messages, initialFileHistorySnapshots: resumeData.fileHistorySnapshots, initialContentReplacements: resumeData.contentReplacements, initialAgentName: resumeData.agentName, initialAgentColor: resumeData.agentColor, mcpClients, dynamicMcpConfig, strictMcpConfig, systemPrompt, appendSystemPrompt, mainThreadAgentDefinition: resumeData.mainThreadAgentDefinition, autoConnectIdeFlag, disableSlashCommands, taskListId, thinkingConfig, onTurnComplete });
  }
  if (loading) {
    return /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(Spinner, null), /* @__PURE__ */ react_default.createElement(ThemedText, null, " Loading conversations\u2026"));
  }
  if (resuming) {
    return /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(Spinner, null), /* @__PURE__ */ react_default.createElement(ThemedText, null, " Resuming conversation\u2026"));
  }
  if (filteredLogs.length === 0) {
    return /* @__PURE__ */ react_default.createElement(NoConversationsMessage, null);
  }
  return /* @__PURE__ */ react_default.createElement(LogSelector, { logs: filteredLogs, maxHeight: rows, onCancel, onSelect, onLogsChanged: isResumeWithRenameEnabled ? () => loadLogs(showAllProjects) : void 0, onLoadMore: loadMoreLogs, initialSearchQuery, showAllProjects, onToggleAllProjects: handleToggleAllProjects, onAgenticSearch: agenticSessionSearch });
}
function NoConversationsMessage() {
  const $ = c(2);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = {
      context: "Global"
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  useKeybinding("app:interrupt", _temp, t0);
  let t1;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(ThemedText, null, "No conversations found to resume."), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Press Ctrl+C to exit and start a new conversation."));
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  return t1;
}
function _temp() {
  process.exit(1);
}
function CrossProjectMessage(t0) {
  const $ = c(8);
  const {
    command
  } = t0;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = [];
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  react_default.useEffect(_temp3, t1);
  let t2;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "This conversation is from a different directory.");
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  let t3;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "To resume, run:");
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  let t4;
  if ($[3] !== command) {
    t4 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, t3, /* @__PURE__ */ react_default.createElement(ThemedText, null, " ", command));
    $[3] = command;
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "(Command copied to clipboard)");
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  let t6;
  if ($[6] !== t4) {
    t6 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, t2, t4, t5);
    $[6] = t4;
    $[7] = t6;
  } else {
    t6 = $[7];
  }
  return t6;
}
function _temp3() {
  const timeout = setTimeout(_temp2, 100);
  return () => clearTimeout(timeout);
}
function _temp2() {
  process.exit(0);
}
export {
  ResumeConversation
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3NjcmVlbnMvUmVzdW1lQ29udmVyc2F0aW9uLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZmVhdHVyZSB9IGZyb20gJ2J1bjpidW5kbGUnXG5pbXBvcnQgeyBkaXJuYW1lIH0gZnJvbSAncGF0aCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRlcm1pbmFsU2l6ZSB9IGZyb20gJ3NyYy9ob29rcy91c2VUZXJtaW5hbFNpemUuanMnXG5pbXBvcnQgeyBnZXRPcmlnaW5hbEN3ZCwgc3dpdGNoU2Vzc2lvbiB9IGZyb20gJy4uL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB0eXBlIHsgQ29tbWFuZCB9IGZyb20gJy4uL2NvbW1hbmRzLmpzJ1xuaW1wb3J0IHsgTG9nU2VsZWN0b3IgfSBmcm9tICcuLi9jb21wb25lbnRzL0xvZ1NlbGVjdG9yLmpzJ1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvU3Bpbm5lci5qcydcbmltcG9ydCB7IHJlc3RvcmVDb3N0U3RhdGVGb3JTZXNzaW9uIH0gZnJvbSAnLi4vY29zdC10cmFja2VyLmpzJ1xuaW1wb3J0IHsgc2V0Q2xpcGJvYXJkIH0gZnJvbSAnLi4vaW5rL3Rlcm1pby9vc2MuanMnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi9pbmsuanMnXG5pbXBvcnQgeyB1c2VLZXliaW5kaW5nIH0gZnJvbSAnLi4va2V5YmluZGluZ3MvdXNlS2V5YmluZGluZy5qcydcbmltcG9ydCB7XG4gIHR5cGUgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgbG9nRXZlbnQsXG59IGZyb20gJy4uL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB0eXBlIHtcbiAgTUNQU2VydmVyQ29ubmVjdGlvbixcbiAgU2NvcGVkTWNwU2VydmVyQ29uZmlnLFxufSBmcm9tICcuLi9zZXJ2aWNlcy9tY3AvdHlwZXMuanMnXG5pbXBvcnQgeyB1c2VBcHBTdGF0ZSwgdXNlU2V0QXBwU3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9BcHBTdGF0ZS5qcydcbmltcG9ydCB0eXBlIHsgVG9vbCB9IGZyb20gJy4uL1Rvb2wuanMnXG5pbXBvcnQgdHlwZSB7IEFnZW50Q29sb3JOYW1lIH0gZnJvbSAnLi4vdG9vbHMvQWdlbnRUb29sL2FnZW50Q29sb3JNYW5hZ2VyLmpzJ1xuaW1wb3J0IHR5cGUgeyBBZ2VudERlZmluaXRpb24gfSBmcm9tICcuLi90b29scy9BZ2VudFRvb2wvbG9hZEFnZW50c0Rpci5qcydcbmltcG9ydCB7IGFzU2Vzc2lvbklkIH0gZnJvbSAnLi4vdHlwZXMvaWRzLmpzJ1xuaW1wb3J0IHR5cGUgeyBMb2dPcHRpb24gfSBmcm9tICcuLi90eXBlcy9sb2dzLmpzJ1xuaW1wb3J0IHR5cGUgeyBNZXNzYWdlIH0gZnJvbSAnLi4vdHlwZXMvbWVzc2FnZS5qcydcbmltcG9ydCB7IGFnZW50aWNTZXNzaW9uU2VhcmNoIH0gZnJvbSAnLi4vdXRpbHMvYWdlbnRpY1Nlc3Npb25TZWFyY2guanMnXG5pbXBvcnQgeyByZW5hbWVSZWNvcmRpbmdGb3JTZXNzaW9uIH0gZnJvbSAnLi4vdXRpbHMvYXNjaWljYXN0LmpzJ1xuaW1wb3J0IHsgdXBkYXRlU2Vzc2lvbk5hbWUgfSBmcm9tICcuLi91dGlscy9jb25jdXJyZW50U2Vzc2lvbnMuanMnXG5pbXBvcnQgeyBsb2FkQ29udmVyc2F0aW9uRm9yUmVzdW1lIH0gZnJvbSAnLi4vdXRpbHMvY29udmVyc2F0aW9uUmVjb3ZlcnkuanMnXG5pbXBvcnQgeyBjaGVja0Nyb3NzUHJvamVjdFJlc3VtZSB9IGZyb20gJy4uL3V0aWxzL2Nyb3NzUHJvamVjdFJlc3VtZS5qcydcbmltcG9ydCB0eXBlIHsgRmlsZUhpc3RvcnlTbmFwc2hvdCB9IGZyb20gJy4uL3V0aWxzL2ZpbGVIaXN0b3J5LmpzJ1xuaW1wb3J0IHsgbG9nRXJyb3IgfSBmcm9tICcuLi91dGlscy9sb2cuanMnXG5pbXBvcnQgeyBjcmVhdGVTeXN0ZW1NZXNzYWdlIH0gZnJvbSAnLi4vdXRpbHMvbWVzc2FnZXMuanMnXG5pbXBvcnQge1xuICBjb21wdXRlU3RhbmRhbG9uZUFnZW50Q29udGV4dCxcbiAgcmVzdG9yZUFnZW50RnJvbVNlc3Npb24sXG4gIHJlc3RvcmVXb3JrdHJlZUZvclJlc3VtZSxcbn0gZnJvbSAnLi4vdXRpbHMvc2Vzc2lvblJlc3RvcmUuanMnXG5pbXBvcnQge1xuICBhZG9wdFJlc3VtZWRTZXNzaW9uRmlsZSxcbiAgZW5yaWNoTG9ncyxcbiAgaXNDdXN0b21UaXRsZUVuYWJsZWQsXG4gIGxvYWRBbGxQcm9qZWN0c01lc3NhZ2VMb2dzUHJvZ3Jlc3NpdmUsXG4gIGxvYWRTYW1lUmVwb01lc3NhZ2VMb2dzUHJvZ3Jlc3NpdmUsXG4gIHJlY29yZENvbnRlbnRSZXBsYWNlbWVudCxcbiAgcmVzZXRTZXNzaW9uRmlsZVBvaW50ZXIsXG4gIHJlc3RvcmVTZXNzaW9uTWV0YWRhdGEsXG4gIHR5cGUgU2Vzc2lvbkxvZ1Jlc3VsdCxcbn0gZnJvbSAnLi4vdXRpbHMvc2Vzc2lvblN0b3JhZ2UuanMnXG5pbXBvcnQgdHlwZSB7IFRoaW5raW5nQ29uZmlnIH0gZnJvbSAnLi4vdXRpbHMvdGhpbmtpbmcuanMnXG5pbXBvcnQgdHlwZSB7IENvbnRlbnRSZXBsYWNlbWVudFJlY29yZCB9IGZyb20gJy4uL3V0aWxzL3Rvb2xSZXN1bHRTdG9yYWdlLmpzJ1xuaW1wb3J0IHsgUkVQTCB9IGZyb20gJy4vUkVQTC5qcydcblxuZnVuY3Rpb24gcGFyc2VQcklkZW50aWZpZXIodmFsdWU6IHN0cmluZyk6IG51bWJlciB8IG51bGwge1xuICBjb25zdCBkaXJlY3ROdW1iZXIgPSBwYXJzZUludCh2YWx1ZSwgMTApXG4gIGlmICghaXNOYU4oZGlyZWN0TnVtYmVyKSAmJiBkaXJlY3ROdW1iZXIgPiAwKSB7XG4gICAgcmV0dXJuIGRpcmVjdE51bWJlclxuICB9XG4gIGNvbnN0IHVybE1hdGNoID0gdmFsdWUubWF0Y2goL2dpdGh1YlxcLmNvbVxcL1teL10rXFwvW14vXStcXC9wdWxsXFwvKFxcZCspLylcbiAgaWYgKHVybE1hdGNoPy5bMV0pIHtcbiAgICByZXR1cm4gcGFyc2VJbnQodXJsTWF0Y2hbMV0sIDEwKVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNvbW1hbmRzOiBDb21tYW5kW11cbiAgd29ya3RyZWVQYXRoczogc3RyaW5nW11cbiAgaW5pdGlhbFRvb2xzOiBUb29sW11cbiAgbWNwQ2xpZW50cz86IE1DUFNlcnZlckNvbm5lY3Rpb25bXVxuICBkeW5hbWljTWNwQ29uZmlnPzogUmVjb3JkPHN0cmluZywgU2NvcGVkTWNwU2VydmVyQ29uZmlnPlxuICBkZWJ1ZzogYm9vbGVhblxuICBtYWluVGhyZWFkQWdlbnREZWZpbml0aW9uPzogQWdlbnREZWZpbml0aW9uXG4gIGF1dG9Db25uZWN0SWRlRmxhZz86IGJvb2xlYW5cbiAgc3RyaWN0TWNwQ29uZmlnPzogYm9vbGVhblxuICBzeXN0ZW1Qcm9tcHQ/OiBzdHJpbmdcbiAgYXBwZW5kU3lzdGVtUHJvbXB0Pzogc3RyaW5nXG4gIGluaXRpYWxTZWFyY2hRdWVyeT86IHN0cmluZ1xuICBkaXNhYmxlU2xhc2hDb21tYW5kcz86IGJvb2xlYW5cbiAgZm9ya1Nlc3Npb24/OiBib29sZWFuXG4gIHRhc2tMaXN0SWQ/OiBzdHJpbmdcbiAgZmlsdGVyQnlQcj86IGJvb2xlYW4gfCBudW1iZXIgfCBzdHJpbmdcbiAgdGhpbmtpbmdDb25maWc6IFRoaW5raW5nQ29uZmlnXG4gIG9uVHVybkNvbXBsZXRlPzogKG1lc3NhZ2VzOiBNZXNzYWdlW10pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSZXN1bWVDb252ZXJzYXRpb24oe1xuICBjb21tYW5kcyxcbiAgd29ya3RyZWVQYXRocyxcbiAgaW5pdGlhbFRvb2xzLFxuICBtY3BDbGllbnRzLFxuICBkeW5hbWljTWNwQ29uZmlnLFxuICBkZWJ1ZyxcbiAgbWFpblRocmVhZEFnZW50RGVmaW5pdGlvbixcbiAgYXV0b0Nvbm5lY3RJZGVGbGFnLFxuICBzdHJpY3RNY3BDb25maWcgPSBmYWxzZSxcbiAgc3lzdGVtUHJvbXB0LFxuICBhcHBlbmRTeXN0ZW1Qcm9tcHQsXG4gIGluaXRpYWxTZWFyY2hRdWVyeSxcbiAgZGlzYWJsZVNsYXNoQ29tbWFuZHMgPSBmYWxzZSxcbiAgZm9ya1Nlc3Npb24sXG4gIHRhc2tMaXN0SWQsXG4gIGZpbHRlckJ5UHIsXG4gIHRoaW5raW5nQ29uZmlnLFxuICBvblR1cm5Db21wbGV0ZSxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgeyByb3dzIH0gPSB1c2VUZXJtaW5hbFNpemUoKVxuICBjb25zdCBhZ2VudERlZmluaXRpb25zID0gdXNlQXBwU3RhdGUocyA9PiBzLmFnZW50RGVmaW5pdGlvbnMpXG4gIGNvbnN0IHNldEFwcFN0YXRlID0gdXNlU2V0QXBwU3RhdGUoKVxuICBjb25zdCBbbG9ncywgc2V0TG9nc10gPSBSZWFjdC51c2VTdGF0ZTxMb2dPcHRpb25bXT4oW10pXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtyZXN1bWluZywgc2V0UmVzdW1pbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzaG93QWxsUHJvamVjdHMsIHNldFNob3dBbGxQcm9qZWN0c10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3Jlc3VtZURhdGEsIHNldFJlc3VtZURhdGFdID0gUmVhY3QudXNlU3RhdGU8e1xuICAgIG1lc3NhZ2VzOiBNZXNzYWdlW11cbiAgICBmaWxlSGlzdG9yeVNuYXBzaG90cz86IEZpbGVIaXN0b3J5U25hcHNob3RbXVxuICAgIGNvbnRlbnRSZXBsYWNlbWVudHM/OiBDb250ZW50UmVwbGFjZW1lbnRSZWNvcmRbXVxuICAgIGFnZW50TmFtZT86IHN0cmluZ1xuICAgIGFnZW50Q29sb3I/OiBBZ2VudENvbG9yTmFtZVxuICAgIG1haW5UaHJlYWRBZ2VudERlZmluaXRpb24/OiBBZ2VudERlZmluaXRpb25cbiAgfSB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtjcm9zc1Byb2plY3RDb21tYW5kLCBzZXRDcm9zc1Byb2plY3RDb21tYW5kXSA9IFJlYWN0LnVzZVN0YXRlPFxuICAgIHN0cmluZyB8IG51bGxcbiAgPihudWxsKVxuICBjb25zdCBzZXNzaW9uTG9nUmVzdWx0UmVmID0gUmVhY3QudXNlUmVmPFNlc3Npb25Mb2dSZXN1bHQgfCBudWxsPihudWxsKVxuICAvLyBNaXJyb3Igb2YgbG9ncy5sZW5ndGggc28gbG9hZE1vcmVMb2dzIGNhbiBjb21wdXRlIHZhbHVlIGluZGljZXMgb3V0c2lkZVxuICAvLyB0aGUgc2V0TG9ncyB1cGRhdGVyIChrZWVwaW5nIGl0IHB1cmUgcGVyIFJlYWN0J3MgY29udHJhY3QpLlxuICBjb25zdCBsb2dDb3VudFJlZiA9IFJlYWN0LnVzZVJlZigwKVxuXG4gIGNvbnN0IGZpbHRlcmVkTG9ncyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGxldCByZXN1bHQgPSBsb2dzLmZpbHRlcihsID0+ICFsLmlzU2lkZWNoYWluKVxuICAgIGlmIChmaWx0ZXJCeVByICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChmaWx0ZXJCeVByID09PSB0cnVlKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIobCA9PiBsLnByTnVtYmVyICE9PSB1bmRlZmluZWQpXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaWx0ZXJCeVByID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKGwgPT4gbC5wck51bWJlciA9PT0gZmlsdGVyQnlQcilcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpbHRlckJ5UHIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnN0IHByTnVtYmVyID0gcGFyc2VQcklkZW50aWZpZXIoZmlsdGVyQnlQcilcbiAgICAgICAgaWYgKHByTnVtYmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihsID0+IGwucHJOdW1iZXIgPT09IHByTnVtYmVyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSwgW2xvZ3MsIGZpbHRlckJ5UHJdKVxuICBjb25zdCBpc1Jlc3VtZVdpdGhSZW5hbWVFbmFibGVkID0gaXNDdXN0b21UaXRsZUVuYWJsZWQoKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9hZFNhbWVSZXBvTWVzc2FnZUxvZ3NQcm9ncmVzc2l2ZSh3b3JrdHJlZVBhdGhzKVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgc2Vzc2lvbkxvZ1Jlc3VsdFJlZi5jdXJyZW50ID0gcmVzdWx0XG4gICAgICAgIGxvZ0NvdW50UmVmLmN1cnJlbnQgPSByZXN1bHQubG9ncy5sZW5ndGhcbiAgICAgICAgc2V0TG9ncyhyZXN1bHQubG9ncylcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBsb2dFcnJvcihlcnJvcilcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgIH0pXG4gIH0sIFt3b3JrdHJlZVBhdGhzXSlcblxuICBjb25zdCBsb2FkTW9yZUxvZ3MgPSBSZWFjdC51c2VDYWxsYmFjaygoY291bnQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHJlZiA9IHNlc3Npb25Mb2dSZXN1bHRSZWYuY3VycmVudFxuICAgIGlmICghcmVmIHx8IHJlZi5uZXh0SW5kZXggPj0gcmVmLmFsbFN0YXRMb2dzLmxlbmd0aCkgcmV0dXJuXG5cbiAgICB2b2lkIGVucmljaExvZ3MocmVmLmFsbFN0YXRMb2dzLCByZWYubmV4dEluZGV4LCBjb3VudCkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgcmVmLm5leHRJbmRleCA9IHJlc3VsdC5uZXh0SW5kZXhcbiAgICAgIGlmIChyZXN1bHQubG9ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIGVucmljaExvZ3MgcmV0dXJucyBmcmVzaCB1bnNoYXJlZCBvYmplY3RzIOKAlCBzYWZlIHRvIG11dGF0ZSBpbiBwbGFjZS5cbiAgICAgICAgLy8gT2Zmc2V0IGNvbWVzIGZyb20gbG9nQ291bnRSZWYgc28gdGhlIHNldExvZ3MgdXBkYXRlciBzdGF5cyBwdXJlLlxuICAgICAgICBjb25zdCBvZmZzZXQgPSBsb2dDb3VudFJlZi5jdXJyZW50XG4gICAgICAgIHJlc3VsdC5sb2dzLmZvckVhY2goKGxvZywgaSkgPT4ge1xuICAgICAgICAgIGxvZy52YWx1ZSA9IG9mZnNldCArIGlcbiAgICAgICAgfSlcbiAgICAgICAgc2V0TG9ncyhwcmV2ID0+IHByZXYuY29uY2F0KHJlc3VsdC5sb2dzKSlcbiAgICAgICAgbG9nQ291bnRSZWYuY3VycmVudCArPSByZXN1bHQubG9ncy5sZW5ndGhcbiAgICAgIH0gZWxzZSBpZiAocmVmLm5leHRJbmRleCA8IHJlZi5hbGxTdGF0TG9ncy5sZW5ndGgpIHtcbiAgICAgICAgbG9hZE1vcmVMb2dzKGNvdW50KVxuICAgICAgfVxuICAgIH0pXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGxvYWRMb2dzID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGFsbFByb2plY3RzOiBib29sZWFuKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICBjb25zdCBwcm9taXNlID0gYWxsUHJvamVjdHNcbiAgICAgICAgPyBsb2FkQWxsUHJvamVjdHNNZXNzYWdlTG9nc1Byb2dyZXNzaXZlKClcbiAgICAgICAgOiBsb2FkU2FtZVJlcG9NZXNzYWdlTG9nc1Byb2dyZXNzaXZlKHdvcmt0cmVlUGF0aHMpXG4gICAgICBwcm9taXNlXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgc2Vzc2lvbkxvZ1Jlc3VsdFJlZi5jdXJyZW50ID0gcmVzdWx0XG4gICAgICAgICAgbG9nQ291bnRSZWYuY3VycmVudCA9IHJlc3VsdC5sb2dzLmxlbmd0aFxuICAgICAgICAgIHNldExvZ3MocmVzdWx0LmxvZ3MpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgbG9nRXJyb3IoZXJyb3IpXG4gICAgICAgIH0pXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgW3dvcmt0cmVlUGF0aHNdLFxuICApXG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlQWxsUHJvamVjdHMgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSAhc2hvd0FsbFByb2plY3RzXG4gICAgc2V0U2hvd0FsbFByb2plY3RzKG5ld1ZhbHVlKVxuICAgIGxvYWRMb2dzKG5ld1ZhbHVlKVxuICB9LCBbc2hvd0FsbFByb2plY3RzLCBsb2FkTG9nc10pXG5cbiAgZnVuY3Rpb24gb25DYW5jZWwoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGN1c3RvbS1ydWxlcy9uby1wcm9jZXNzLWV4aXRcbiAgICBwcm9jZXNzLmV4aXQoMSlcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uU2VsZWN0KGxvZzogTG9nT3B0aW9uKSB7XG4gICAgc2V0UmVzdW1pbmcodHJ1ZSlcbiAgICBjb25zdCByZXN1bWVTdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpXG5cbiAgICBjb25zdCBjcm9zc1Byb2plY3RDaGVjayA9IGNoZWNrQ3Jvc3NQcm9qZWN0UmVzdW1lKFxuICAgICAgbG9nLFxuICAgICAgc2hvd0FsbFByb2plY3RzLFxuICAgICAgd29ya3RyZWVQYXRocyxcbiAgICApXG4gICAgaWYgKGNyb3NzUHJvamVjdENoZWNrLmlzQ3Jvc3NQcm9qZWN0KSB7XG4gICAgICBpZiAoIWNyb3NzUHJvamVjdENoZWNrLmlzU2FtZVJlcG9Xb3JrdHJlZSkge1xuICAgICAgICBjb25zdCByYXcgPSBhd2FpdCBzZXRDbGlwYm9hcmQoY3Jvc3NQcm9qZWN0Q2hlY2suY29tbWFuZClcbiAgICAgICAgaWYgKHJhdykgcHJvY2Vzcy5zdGRvdXQud3JpdGUocmF3KVxuICAgICAgICBzZXRDcm9zc1Byb2plY3RDb21tYW5kKGNyb3NzUHJvamVjdENoZWNrLmNvbW1hbmQpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBsb2FkQ29udmVyc2F0aW9uRm9yUmVzdW1lKGxvZywgdW5kZWZpbmVkKVxuICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjb252ZXJzYXRpb24nKVxuICAgICAgfVxuXG4gICAgICBpZiAoZmVhdHVyZSgnQ09PUkRJTkFUT1JfTU9ERScpKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHMgKi9cbiAgICAgICAgY29uc3QgY29vcmRpbmF0b3JNb2R1bGUgPVxuICAgICAgICAgIHJlcXVpcmUoJy4uL2Nvb3JkaW5hdG9yL2Nvb3JkaW5hdG9yTW9kZS5qcycpIGFzIHR5cGVvZiBpbXBvcnQoJy4uL2Nvb3JkaW5hdG9yL2Nvb3JkaW5hdG9yTW9kZS5qcycpXG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyAqL1xuICAgICAgICBjb25zdCB3YXJuaW5nID0gY29vcmRpbmF0b3JNb2R1bGUubWF0Y2hTZXNzaW9uTW9kZShyZXN1bHQubW9kZSlcbiAgICAgICAgaWYgKHdhcm5pbmcpIHtcbiAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG4gICAgICAgICAgY29uc3QgeyBnZXRBZ2VudERlZmluaXRpb25zV2l0aE92ZXJyaWRlcywgZ2V0QWN0aXZlQWdlbnRzRnJvbUxpc3QgfSA9XG4gICAgICAgICAgICByZXF1aXJlKCcuLi90b29scy9BZ2VudFRvb2wvbG9hZEFnZW50c0Rpci5qcycpIGFzIHR5cGVvZiBpbXBvcnQoJy4uL3Rvb2xzL0FnZW50VG9vbC9sb2FkQWdlbnRzRGlyLmpzJylcbiAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHMgKi9cbiAgICAgICAgICBnZXRBZ2VudERlZmluaXRpb25zV2l0aE92ZXJyaWRlcy5jYWNoZS5jbGVhcj8uKClcbiAgICAgICAgICBjb25zdCBmcmVzaEFnZW50RGVmcyA9IGF3YWl0IGdldEFnZW50RGVmaW5pdGlvbnNXaXRoT3ZlcnJpZGVzKFxuICAgICAgICAgICAgZ2V0T3JpZ2luYWxDd2QoKSxcbiAgICAgICAgICApXG4gICAgICAgICAgc2V0QXBwU3RhdGUocHJldiA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIGFnZW50RGVmaW5pdGlvbnM6IHtcbiAgICAgICAgICAgICAgLi4uZnJlc2hBZ2VudERlZnMsXG4gICAgICAgICAgICAgIGFsbEFnZW50czogZnJlc2hBZ2VudERlZnMuYWxsQWdlbnRzLFxuICAgICAgICAgICAgICBhY3RpdmVBZ2VudHM6IGdldEFjdGl2ZUFnZW50c0Zyb21MaXN0KGZyZXNoQWdlbnREZWZzLmFsbEFnZW50cyksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pKVxuICAgICAgICAgIHJlc3VsdC5tZXNzYWdlcy5wdXNoKGNyZWF0ZVN5c3RlbU1lc3NhZ2Uod2FybmluZywgJ3dhcm5pbmcnKSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocmVzdWx0LnNlc3Npb25JZCAmJiAhZm9ya1Nlc3Npb24pIHtcbiAgICAgICAgc3dpdGNoU2Vzc2lvbihcbiAgICAgICAgICBhc1Nlc3Npb25JZChyZXN1bHQuc2Vzc2lvbklkKSxcbiAgICAgICAgICBsb2cuZnVsbFBhdGggPyBkaXJuYW1lKGxvZy5mdWxsUGF0aCkgOiBudWxsLFxuICAgICAgICApXG4gICAgICAgIGF3YWl0IHJlbmFtZVJlY29yZGluZ0ZvclNlc3Npb24oKVxuICAgICAgICBhd2FpdCByZXNldFNlc3Npb25GaWxlUG9pbnRlcigpXG4gICAgICAgIHJlc3RvcmVDb3N0U3RhdGVGb3JTZXNzaW9uKHJlc3VsdC5zZXNzaW9uSWQpXG4gICAgICB9IGVsc2UgaWYgKGZvcmtTZXNzaW9uICYmIHJlc3VsdC5jb250ZW50UmVwbGFjZW1lbnRzPy5sZW5ndGgpIHtcbiAgICAgICAgYXdhaXQgcmVjb3JkQ29udGVudFJlcGxhY2VtZW50KHJlc3VsdC5jb250ZW50UmVwbGFjZW1lbnRzKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IGFnZW50RGVmaW5pdGlvbjogcmVzb2x2ZWRBZ2VudERlZiB9ID0gcmVzdG9yZUFnZW50RnJvbVNlc3Npb24oXG4gICAgICAgIHJlc3VsdC5hZ2VudFNldHRpbmcsXG4gICAgICAgIG1haW5UaHJlYWRBZ2VudERlZmluaXRpb24sXG4gICAgICAgIGFnZW50RGVmaW5pdGlvbnMsXG4gICAgICApXG4gICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+ICh7IC4uLnByZXYsIGFnZW50OiByZXNvbHZlZEFnZW50RGVmPy5hZ2VudFR5cGUgfSkpXG5cbiAgICAgIGlmIChmZWF0dXJlKCdDT09SRElOQVRPUl9NT0RFJykpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyAqL1xuICAgICAgICBjb25zdCB7IHNhdmVNb2RlIH0gPSByZXF1aXJlKCcuLi91dGlscy9zZXNzaW9uU3RvcmFnZS5qcycpXG4gICAgICAgIGNvbnN0IHsgaXNDb29yZGluYXRvck1vZGUgfSA9XG4gICAgICAgICAgcmVxdWlyZSgnLi4vY29vcmRpbmF0b3IvY29vcmRpbmF0b3JNb2RlLmpzJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vY29vcmRpbmF0b3IvY29vcmRpbmF0b3JNb2RlLmpzJylcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG4gICAgICAgIHNhdmVNb2RlKGlzQ29vcmRpbmF0b3JNb2RlKCkgPyAnY29vcmRpbmF0b3InIDogJ25vcm1hbCcpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN0YW5kYWxvbmVBZ2VudENvbnRleHQgPSBjb21wdXRlU3RhbmRhbG9uZUFnZW50Q29udGV4dChcbiAgICAgICAgcmVzdWx0LmFnZW50TmFtZSxcbiAgICAgICAgcmVzdWx0LmFnZW50Q29sb3IsXG4gICAgICApXG4gICAgICBpZiAoc3RhbmRhbG9uZUFnZW50Q29udGV4dCkge1xuICAgICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+ICh7IC4uLnByZXYsIHN0YW5kYWxvbmVBZ2VudENvbnRleHQgfSkpXG4gICAgICB9XG4gICAgICB2b2lkIHVwZGF0ZVNlc3Npb25OYW1lKHJlc3VsdC5hZ2VudE5hbWUpXG5cbiAgICAgIHJlc3RvcmVTZXNzaW9uTWV0YWRhdGEoXG4gICAgICAgIGZvcmtTZXNzaW9uID8geyAuLi5yZXN1bHQsIHdvcmt0cmVlU2Vzc2lvbjogdW5kZWZpbmVkIH0gOiByZXN1bHQsXG4gICAgICApXG5cbiAgICAgIGlmICghZm9ya1Nlc3Npb24pIHtcbiAgICAgICAgcmVzdG9yZVdvcmt0cmVlRm9yUmVzdW1lKHJlc3VsdC53b3JrdHJlZVNlc3Npb24pXG4gICAgICAgIGlmIChyZXN1bHQuc2Vzc2lvbklkKSB7XG4gICAgICAgICAgYWRvcHRSZXN1bWVkU2Vzc2lvbkZpbGUoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmZWF0dXJlKCdDT05URVhUX0NPTExBUFNFJykpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyAqL1xuICAgICAgICA7KFxuICAgICAgICAgIHJlcXVpcmUoJy4uL3NlcnZpY2VzL2NvbnRleHRDb2xsYXBzZS9wZXJzaXN0LmpzJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vc2VydmljZXMvY29udGV4dENvbGxhcHNlL3BlcnNpc3QuanMnKVxuICAgICAgICApLnJlc3RvcmVGcm9tRW50cmllcyhcbiAgICAgICAgICByZXN1bHQuY29udGV4dENvbGxhcHNlQ29tbWl0cyA/PyBbXSxcbiAgICAgICAgICByZXN1bHQuY29udGV4dENvbGxhcHNlU25hcHNob3QsXG4gICAgICAgIClcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG4gICAgICB9XG5cbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9zZXNzaW9uX3Jlc3VtZWQnLCB7XG4gICAgICAgIGVudHJ5cG9pbnQ6XG4gICAgICAgICAgJ3BpY2tlcicgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgcmVzdW1lX2R1cmF0aW9uX21zOiBNYXRoLnJvdW5kKHBlcmZvcm1hbmNlLm5vdygpIC0gcmVzdW1lU3RhcnQpLFxuICAgICAgfSlcblxuICAgICAgc2V0TG9ncyhbXSlcbiAgICAgIHNldFJlc3VtZURhdGEoe1xuICAgICAgICBtZXNzYWdlczogcmVzdWx0Lm1lc3NhZ2VzLFxuICAgICAgICBmaWxlSGlzdG9yeVNuYXBzaG90czogcmVzdWx0LmZpbGVIaXN0b3J5U25hcHNob3RzLFxuICAgICAgICBjb250ZW50UmVwbGFjZW1lbnRzOiByZXN1bHQuY29udGVudFJlcGxhY2VtZW50cyxcbiAgICAgICAgYWdlbnROYW1lOiByZXN1bHQuYWdlbnROYW1lLFxuICAgICAgICBhZ2VudENvbG9yOiAocmVzdWx0LmFnZW50Q29sb3IgPT09ICdkZWZhdWx0J1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiByZXN1bHQuYWdlbnRDb2xvcikgYXMgQWdlbnRDb2xvck5hbWUgfCB1bmRlZmluZWQsXG4gICAgICAgIG1haW5UaHJlYWRBZ2VudERlZmluaXRpb246IHJlc29sdmVkQWdlbnREZWYsXG4gICAgICB9KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9zZXNzaW9uX3Jlc3VtZWQnLCB7XG4gICAgICAgIGVudHJ5cG9pbnQ6XG4gICAgICAgICAgJ3BpY2tlcicgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICB9KVxuICAgICAgbG9nRXJyb3IoZSBhcyBFcnJvcilcbiAgICAgIHRocm93IGVcbiAgICB9XG4gIH1cblxuICBpZiAoY3Jvc3NQcm9qZWN0Q29tbWFuZCkge1xuICAgIHJldHVybiA8Q3Jvc3NQcm9qZWN0TWVzc2FnZSBjb21tYW5kPXtjcm9zc1Byb2plY3RDb21tYW5kfSAvPlxuICB9XG5cbiAgaWYgKHJlc3VtZURhdGEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJFUExcbiAgICAgICAgZGVidWc9e2RlYnVnfVxuICAgICAgICBjb21tYW5kcz17Y29tbWFuZHN9XG4gICAgICAgIGluaXRpYWxUb29scz17aW5pdGlhbFRvb2xzfVxuICAgICAgICBpbml0aWFsTWVzc2FnZXM9e3Jlc3VtZURhdGEubWVzc2FnZXN9XG4gICAgICAgIGluaXRpYWxGaWxlSGlzdG9yeVNuYXBzaG90cz17cmVzdW1lRGF0YS5maWxlSGlzdG9yeVNuYXBzaG90c31cbiAgICAgICAgaW5pdGlhbENvbnRlbnRSZXBsYWNlbWVudHM9e3Jlc3VtZURhdGEuY29udGVudFJlcGxhY2VtZW50c31cbiAgICAgICAgaW5pdGlhbEFnZW50TmFtZT17cmVzdW1lRGF0YS5hZ2VudE5hbWV9XG4gICAgICAgIGluaXRpYWxBZ2VudENvbG9yPXtyZXN1bWVEYXRhLmFnZW50Q29sb3J9XG4gICAgICAgIG1jcENsaWVudHM9e21jcENsaWVudHN9XG4gICAgICAgIGR5bmFtaWNNY3BDb25maWc9e2R5bmFtaWNNY3BDb25maWd9XG4gICAgICAgIHN0cmljdE1jcENvbmZpZz17c3RyaWN0TWNwQ29uZmlnfVxuICAgICAgICBzeXN0ZW1Qcm9tcHQ9e3N5c3RlbVByb21wdH1cbiAgICAgICAgYXBwZW5kU3lzdGVtUHJvbXB0PXthcHBlbmRTeXN0ZW1Qcm9tcHR9XG4gICAgICAgIG1haW5UaHJlYWRBZ2VudERlZmluaXRpb249e3Jlc3VtZURhdGEubWFpblRocmVhZEFnZW50RGVmaW5pdGlvbn1cbiAgICAgICAgYXV0b0Nvbm5lY3RJZGVGbGFnPXthdXRvQ29ubmVjdElkZUZsYWd9XG4gICAgICAgIGRpc2FibGVTbGFzaENvbW1hbmRzPXtkaXNhYmxlU2xhc2hDb21tYW5kc31cbiAgICAgICAgdGFza0xpc3RJZD17dGFza0xpc3RJZH1cbiAgICAgICAgdGhpbmtpbmdDb25maWc9e3RoaW5raW5nQ29uZmlnfVxuICAgICAgICBvblR1cm5Db21wbGV0ZT17b25UdXJuQ29tcGxldGV9XG4gICAgICAvPlxuICAgIClcbiAgfVxuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3g+XG4gICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgIDxUZXh0PiBMb2FkaW5nIGNvbnZlcnNhdGlvbnPigKY8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICBpZiAocmVzdW1pbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveD5cbiAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgPFRleHQ+IFJlc3VtaW5nIGNvbnZlcnNhdGlvbuKApjwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxuXG4gIGlmIChmaWx0ZXJlZExvZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIDxOb0NvbnZlcnNhdGlvbnNNZXNzYWdlIC8+XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMb2dTZWxlY3RvclxuICAgICAgbG9ncz17ZmlsdGVyZWRMb2dzfVxuICAgICAgbWF4SGVpZ2h0PXtyb3dzfVxuICAgICAgb25DYW5jZWw9e29uQ2FuY2VsfVxuICAgICAgb25TZWxlY3Q9e29uU2VsZWN0fVxuICAgICAgb25Mb2dzQ2hhbmdlZD17XG4gICAgICAgIGlzUmVzdW1lV2l0aFJlbmFtZUVuYWJsZWQgPyAoKSA9PiBsb2FkTG9ncyhzaG93QWxsUHJvamVjdHMpIDogdW5kZWZpbmVkXG4gICAgICB9XG4gICAgICBvbkxvYWRNb3JlPXtsb2FkTW9yZUxvZ3N9XG4gICAgICBpbml0aWFsU2VhcmNoUXVlcnk9e2luaXRpYWxTZWFyY2hRdWVyeX1cbiAgICAgIHNob3dBbGxQcm9qZWN0cz17c2hvd0FsbFByb2plY3RzfVxuICAgICAgb25Ub2dnbGVBbGxQcm9qZWN0cz17aGFuZGxlVG9nZ2xlQWxsUHJvamVjdHN9XG4gICAgICBvbkFnZW50aWNTZWFyY2g9e2FnZW50aWNTZXNzaW9uU2VhcmNofVxuICAgIC8+XG4gIClcbn1cblxuZnVuY3Rpb24gTm9Db252ZXJzYXRpb25zTWVzc2FnZSgpOiBSZWFjdC5SZWFjdE5vZGUge1xuICB1c2VLZXliaW5kaW5nKFxuICAgICdhcHA6aW50ZXJydXB0JyxcbiAgICAoKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3VzdG9tLXJ1bGVzL25vLXByb2Nlc3MtZXhpdFxuICAgICAgcHJvY2Vzcy5leGl0KDEpXG4gICAgfSxcbiAgICB7IGNvbnRleHQ6ICdHbG9iYWwnIH0sXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgPFRleHQ+Tm8gY29udmVyc2F0aW9ucyBmb3VuZCB0byByZXN1bWUuPC9UZXh0PlxuICAgICAgPFRleHQgZGltQ29sb3I+UHJlc3MgQ3RybCtDIHRvIGV4aXQgYW5kIHN0YXJ0IGEgbmV3IGNvbnZlcnNhdGlvbi48L1RleHQ+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZnVuY3Rpb24gQ3Jvc3NQcm9qZWN0TWVzc2FnZSh7XG4gIGNvbW1hbmQsXG59OiB7XG4gIGNvbW1hbmQ6IHN0cmluZ1xufSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGN1c3RvbS1ydWxlcy9uby1wcm9jZXNzLWV4aXRcbiAgICAgIHByb2Nlc3MuZXhpdCgwKVxuICAgIH0sIDEwMClcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXsxfT5cbiAgICAgIDxUZXh0PlRoaXMgY29udmVyc2F0aW9uIGlzIGZyb20gYSBkaWZmZXJlbnQgZGlyZWN0b3J5LjwvVGV4dD5cbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICA8VGV4dD5UbyByZXN1bWUsIHJ1bjo8L1RleHQ+XG4gICAgICAgIDxUZXh0PiB7Y29tbWFuZH08L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICAgIDxUZXh0IGRpbUNvbG9yPihDb21tYW5kIGNvcGllZCB0byBjbGlwYm9hcmQpPC9UZXh0PlxuICAgIDwvQm94PlxuICApXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFBLE1BQUFlO0FBQUEsTUFBQWYsRUFBQSxDQUFBLE1BQUFhLElBQUE7QUFOckRFLFNBQUEsNENBQUMscUJBQWtCLGVBQUEsVUFBYyxLQUFBLEtBQy9CSixJQUNBRSxJQUlBQyxFQUNGO0FBQU1kLE1BQUEsQ0FBQSxJQUFBYTtBQUFBYixNQUFBLENBQUEsSUFBQWU7RUFBQSxPQUFBO0FBQUFBLFNBQUFmLEVBQUEsQ0FBQTtFQUFBO0FBQUEsU0FQTmU7QUFPTTtBQXJCVixTQUFBTCxTQUFBO0FBTUksUUFBQU0sVUFBZ0JDLFdBQVdDLFFBR3hCLEdBQUc7QUFBQyxTQUNBLE1BQU1DLGFBQWFILE9BQU87QUFBQztBQVZ0QyxTQUFBRSxTQUFBO0FBUU01RixVQUFPQyxLQUFNLENBQUM7QUFBQzsiLAogICJuYW1lcyI6IFsiZGlybmFtZSIsICJwYXJzZVBySWRlbnRpZmllciIsICJ2YWx1ZSIsICJkaXJlY3ROdW1iZXIiLCAicGFyc2VJbnQiLCAiaXNOYU4iLCAidXJsTWF0Y2giLCAibWF0Y2giLCAiUmVzdW1lQ29udmVyc2F0aW9uIiwgImNvbW1hbmRzIiwgIndvcmt0cmVlUGF0aHMiLCAiaW5pdGlhbFRvb2xzIiwgIm1jcENsaWVudHMiLCAiZHluYW1pY01jcENvbmZpZyIsICJkZWJ1ZyIsICJtYWluVGhyZWFkQWdlbnREZWZpbml0aW9uIiwgImF1dG9Db25uZWN0SWRlRmxhZyIsICJzdHJpY3RNY3BDb25maWciLCAic3lzdGVtUHJvbXB0IiwgImFwcGVuZFN5c3RlbVByb21wdCIsICJpbml0aWFsU2VhcmNoUXVlcnkiLCAiZGlzYWJsZVNsYXNoQ29tbWFuZHMiLCAiZm9ya1Nlc3Npb24iLCAidGFza0xpc3RJZCIsICJmaWx0ZXJCeVByIiwgInRoaW5raW5nQ29uZmlnIiwgIm9uVHVybkNvbXBsZXRlIiwgInJvd3MiLCAidXNlVGVybWluYWxTaXplIiwgImFnZW50RGVmaW5pdGlvbnMiLCAidXNlQXBwU3RhdGUiLCAicyIsICJzZXRBcHBTdGF0ZSIsICJ1c2VTZXRBcHBTdGF0ZSIsICJsb2dzIiwgInNldExvZ3MiLCAiUmVhY3QiLCAidXNlU3RhdGUiLCAibG9hZGluZyIsICJzZXRMb2FkaW5nIiwgInJlc3VtaW5nIiwgInNldFJlc3VtaW5nIiwgInNob3dBbGxQcm9qZWN0cyIsICJzZXRTaG93QWxsUHJvamVjdHMiLCAicmVzdW1lRGF0YSIsICJzZXRSZXN1bWVEYXRhIiwgImNyb3NzUHJvamVjdENvbW1hbmQiLCAic2V0Q3Jvc3NQcm9qZWN0Q29tbWFuZCIsICJzZXNzaW9uTG9nUmVzdWx0UmVmIiwgInVzZVJlZiIsICJsb2dDb3VudFJlZiIsICJmaWx0ZXJlZExvZ3MiLCAidXNlTWVtbyIsICJyZXN1bHQiLCAiZmlsdGVyIiwgImwiLCAiaXNTaWRlY2hhaW4iLCAidW5kZWZpbmVkIiwgInByTnVtYmVyIiwgImlzUmVzdW1lV2l0aFJlbmFtZUVuYWJsZWQiLCAiaXNDdXN0b21UaXRsZUVuYWJsZWQiLCAidXNlRWZmZWN0IiwgImxvYWRTYW1lUmVwb01lc3NhZ2VMb2dzUHJvZ3Jlc3NpdmUiLCAidGhlbiIsICJjdXJyZW50IiwgImxlbmd0aCIsICJjYXRjaCIsICJlcnJvciIsICJsb2dFcnJvciIsICJsb2FkTW9yZUxvZ3MiLCAidXNlQ2FsbGJhY2siLCAiY291bnQiLCAicmVmIiwgIm5leHRJbmRleCIsICJhbGxTdGF0TG9ncyIsICJlbnJpY2hMb2dzIiwgIm9mZnNldCIsICJmb3JFYWNoIiwgImxvZyIsICJpIiwgInByZXYiLCAiY29uY2F0IiwgImxvYWRMb2dzIiwgImFsbFByb2plY3RzIiwgInByb21pc2UiLCAibG9hZEFsbFByb2plY3RzTWVzc2FnZUxvZ3NQcm9ncmVzc2l2ZSIsICJmaW5hbGx5IiwgImhhbmRsZVRvZ2dsZUFsbFByb2plY3RzIiwgIm5ld1ZhbHVlIiwgIm9uQ2FuY2VsIiwgInByb2Nlc3MiLCAiZXhpdCIsICJvblNlbGVjdCIsICJyZXN1bWVTdGFydCIsICJwZXJmb3JtYW5jZSIsICJub3ciLCAiY3Jvc3NQcm9qZWN0Q2hlY2siLCAiY2hlY2tDcm9zc1Byb2plY3RSZXN1bWUiLCAiaXNDcm9zc1Byb2plY3QiLCAiaXNTYW1lUmVwb1dvcmt0cmVlIiwgInJhdyIsICJzZXRDbGlwYm9hcmQiLCAiY29tbWFuZCIsICJzdGRvdXQiLCAid3JpdGUiLCAibG9hZENvbnZlcnNhdGlvbkZvclJlc3VtZSIsICJFcnJvciIsICJmZWF0dXJlIiwgImNvb3JkaW5hdG9yTW9kdWxlIiwgInJlcXVpcmUiLCAid2FybmluZyIsICJtYXRjaFNlc3Npb25Nb2RlIiwgIm1vZGUiLCAiZ2V0QWdlbnREZWZpbml0aW9uc1dpdGhPdmVycmlkZXMiLCAiZ2V0QWN0aXZlQWdlbnRzRnJvbUxpc3QiLCAiY2FjaGUiLCAiY2xlYXIiLCAiZnJlc2hBZ2VudERlZnMiLCAiZ2V0T3JpZ2luYWxDd2QiLCAiYWxsQWdlbnRzIiwgImFjdGl2ZUFnZW50cyIsICJtZXNzYWdlcyIsICJwdXNoIiwgImNyZWF0ZVN5c3RlbU1lc3NhZ2UiLCAic2Vzc2lvbklkIiwgInN3aXRjaFNlc3Npb24iLCAiYXNTZXNzaW9uSWQiLCAiZnVsbFBhdGgiLCAiZGlybmFtZSIsICJyZW5hbWVSZWNvcmRpbmdGb3JTZXNzaW9uIiwgInJlc2V0U2Vzc2lvbkZpbGVQb2ludGVyIiwgInJlc3RvcmVDb3N0U3RhdGVGb3JTZXNzaW9uIiwgImNvbnRlbnRSZXBsYWNlbWVudHMiLCAicmVjb3JkQ29udGVudFJlcGxhY2VtZW50IiwgImFnZW50RGVmaW5pdGlvbiIsICJyZXNvbHZlZEFnZW50RGVmIiwgInJlc3RvcmVBZ2VudEZyb21TZXNzaW9uIiwgImFnZW50U2V0dGluZyIsICJhZ2VudCIsICJhZ2VudFR5cGUiLCAic2F2ZU1vZGUiLCAiaXNDb29yZGluYXRvck1vZGUiLCAic3RhbmRhbG9uZUFnZW50Q29udGV4dCIsICJjb21wdXRlU3RhbmRhbG9uZUFnZW50Q29udGV4dCIsICJhZ2VudE5hbWUiLCAiYWdlbnRDb2xvciIsICJ1cGRhdGVTZXNzaW9uTmFtZSIsICJyZXN0b3JlU2Vzc2lvbk1ldGFkYXRhIiwgIndvcmt0cmVlU2Vzc2lvbiIsICJyZXN0b3JlV29ya3RyZWVGb3JSZXN1bWUiLCAiYWRvcHRSZXN1bWVkU2Vzc2lvbkZpbGUiLCAicmVzdG9yZUZyb21FbnRyaWVzIiwgImNvbnRleHRDb2xsYXBzZUNvbW1pdHMiLCAiY29udGV4dENvbGxhcHNlU25hcHNob3QiLCAibG9nRXZlbnQiLCAiZW50cnlwb2ludCIsICJzdWNjZXNzIiwgInJlc3VtZV9kdXJhdGlvbl9tcyIsICJNYXRoIiwgInJvdW5kIiwgImZpbGVIaXN0b3J5U25hcHNob3RzIiwgImUiLCAiYWdlbnRpY1Nlc3Npb25TZWFyY2giLCAiTm9Db252ZXJzYXRpb25zTWVzc2FnZSIsICIkIiwgIl9jIiwgInQwIiwgIlN5bWJvbCIsICJmb3IiLCAiY29udGV4dCIsICJ1c2VLZXliaW5kaW5nIiwgIl90ZW1wIiwgInQxIiwgIkNyb3NzUHJvamVjdE1lc3NhZ2UiLCAiX3RlbXAzIiwgInQyIiwgInQzIiwgInQ0IiwgInQ1IiwgInQ2IiwgInRpbWVvdXQiLCAic2V0VGltZW91dCIsICJfdGVtcDIiLCAiY2xlYXJUaW1lb3V0Il0KfQo=
