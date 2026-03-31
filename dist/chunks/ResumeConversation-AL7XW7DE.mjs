#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  REPL
} from "./chunk-XZXJLF2F.mjs";
import "./chunk-H3KINC3H.mjs";
import "./chunk-STOWK3FY.mjs";
import "./chunk-DLH5UBJQ.mjs";
import {
  computeStandaloneAgentContext,
  init_persist,
  persist_exports,
  restoreAgentFromSession,
  restoreWorktreeForResume
} from "./chunk-OXTLHPGX.mjs";
import "./chunk-MKI4OCY2.mjs";
import "./chunk-S5JWFBIC.mjs";
import "./chunk-DO3KZGYG.mjs";
import {
  renameRecordingForSession
} from "./chunk-5FYLY554.mjs";
import "./chunk-WEV6ICCO.mjs";
import "./chunk-P7A6JCZG.mjs";
import "./chunk-QLZJRPHV.mjs";
import "./chunk-3FP55SDW.mjs";
import "./chunk-WBJL7DYB.mjs";
import "./chunk-ZVABTAMJ.mjs";
import "./chunk-IW3X2UT7.mjs";
import "./chunk-DGDAESE2.mjs";
import "./chunk-UAZ66SCL.mjs";
import "./chunk-IDNBMXUW.mjs";
import "./chunk-ZB6SBCPJ.mjs";
import "./chunk-4KSQJZNR.mjs";
import "./chunk-QB2B5QCZ.mjs";
import "./chunk-CU5ENGAS.mjs";
import "./chunk-TNHLYHX2.mjs";
import "./chunk-XQK7G5E5.mjs";
import "./chunk-BP5NCXKU.mjs";
import "./chunk-YGTPFJTV.mjs";
import "./chunk-5W6WSU52.mjs";
import "./chunk-7KN36EV3.mjs";
import "./chunk-SFSDX5Y2.mjs";
import "./chunk-EGH5V7EZ.mjs";
import {
  LogSelector,
  agenticSessionSearch,
  checkCrossProjectResume,
  init_LogSelector,
  init_agenticSessionSearch,
  init_crossProjectResume
} from "./chunk-BVQSBOU2.mjs";
import "./chunk-75VIDW6A.mjs";
import "./chunk-NPUBMBHV.mjs";
import "./chunk-LLTILAJT.mjs";
import "./chunk-LH26KBLL.mjs";
import "./chunk-JTIRMQSJ.mjs";
import "./chunk-7CSLXPO7.mjs";
import "./chunk-2DL5BBUL.mjs";
import "./chunk-OUVCJTEA.mjs";
import "./chunk-L22OG2YZ.mjs";
import "./chunk-LLT4FSGE.mjs";
import "./chunk-SST3HAV6.mjs";
import "./chunk-FXF65XLP.mjs";
import "./chunk-RPMW5T2K.mjs";
import "./chunk-34GAKEEH.mjs";
import "./chunk-BMCL7FSA.mjs";
import "./chunk-DXZDWR2F.mjs";
import "./chunk-USNGG22O.mjs";
import "./chunk-FGZ3AWYG.mjs";
import "./chunk-OXDIAV6O.mjs";
import "./chunk-YO4OQA5U.mjs";
import "./chunk-EUDJO4ZU.mjs";
import "./chunk-OWNRRKKQ.mjs";
import "./chunk-WHNOPF4I.mjs";
import "./chunk-OQIR33V5.mjs";
import "./chunk-PIO73LAU.mjs";
import "./chunk-JZCONYSV.mjs";
import "./chunk-UTZRNNOS.mjs";
import "./chunk-TBY7LCMH.mjs";
import "./chunk-WMRDFSIZ.mjs";
import "./chunk-7DA2PBIX.mjs";
import "./chunk-TVLKHTRM.mjs";
import "./chunk-Y6HBFSUU.mjs";
import "./chunk-WHU75TCM.mjs";
import "./chunk-RW57Z4WT.mjs";
import "./chunk-HY6456QR.mjs";
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
} from "./chunk-OPLSBIOC.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-SR5JKAMQ.mjs";
import "./chunk-RUHH7ZNU.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-P2O4HXJJ.mjs";
import "./chunk-ADZQUMT7.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-M22WMPMZ.mjs";
import "./chunk-66JTK2MJ.mjs";
import {
  init_useKeybinding,
  init_useTerminalSize,
  useKeybinding,
  useTerminalSize
} from "./chunk-2LTMY2QU.mjs";
import "./chunk-WJKMR27I.mjs";
import "./chunk-EATKTAOV.mjs";
import "./chunk-AB7U5P7O.mjs";
import "./chunk-SEJU7JU7.mjs";
import "./chunk-ABRSTIS2.mjs";
import "./chunk-L22EUB4Z.mjs";
import "./chunk-NE3WJ556.mjs";
import "./chunk-4BEDQUYS.mjs";
import "./chunk-I4JSDM2A.mjs";
import "./chunk-GQIWFVMV.mjs";
import "./chunk-R2NMUWG6.mjs";
import "./chunk-XTFZIHQR.mjs";
import "./chunk-X6KULBXG.mjs";
import "./chunk-ORS2TTME.mjs";
import "./chunk-IAEMXMG4.mjs";
import "./chunk-WZXBZQWR.mjs";
import "./chunk-J7TDGLE4.mjs";
import "./chunk-HUHT3U2I.mjs";
import "./chunk-MPXK3SNP.mjs";
import "./chunk-C5B5VR2F.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-L4LQXE4X.mjs";
import "./chunk-H6COQF52.mjs";
import "./chunk-5DUAEYU5.mjs";
import "./chunk-4HSGHMYS.mjs";
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
} from "./chunk-IVRGECFY.mjs";
import {
  init_react,
  react_default
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import "./chunk-Z6CSO4BY.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-Q64VCQQA.mjs";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3NjcmVlbnMvUmVzdW1lQ29udmVyc2F0aW9uLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZmVhdHVyZSB9IGZyb20gJ2J1bjpidW5kbGUnXG5pbXBvcnQgeyBkaXJuYW1lIH0gZnJvbSAncGF0aCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRlcm1pbmFsU2l6ZSB9IGZyb20gJ3NyYy9ob29rcy91c2VUZXJtaW5hbFNpemUuanMnXG5pbXBvcnQgeyBnZXRPcmlnaW5hbEN3ZCwgc3dpdGNoU2Vzc2lvbiB9IGZyb20gJy4uL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB0eXBlIHsgQ29tbWFuZCB9IGZyb20gJy4uL2NvbW1hbmRzLmpzJ1xuaW1wb3J0IHsgTG9nU2VsZWN0b3IgfSBmcm9tICcuLi9jb21wb25lbnRzL0xvZ1NlbGVjdG9yLmpzJ1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvU3Bpbm5lci5qcydcbmltcG9ydCB7IHJlc3RvcmVDb3N0U3RhdGVGb3JTZXNzaW9uIH0gZnJvbSAnLi4vY29zdC10cmFja2VyLmpzJ1xuaW1wb3J0IHsgc2V0Q2xpcGJvYXJkIH0gZnJvbSAnLi4vaW5rL3Rlcm1pby9vc2MuanMnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi9pbmsuanMnXG5pbXBvcnQgeyB1c2VLZXliaW5kaW5nIH0gZnJvbSAnLi4va2V5YmluZGluZ3MvdXNlS2V5YmluZGluZy5qcydcbmltcG9ydCB7XG4gIHR5cGUgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgbG9nRXZlbnQsXG59IGZyb20gJy4uL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB0eXBlIHtcbiAgTUNQU2VydmVyQ29ubmVjdGlvbixcbiAgU2NvcGVkTWNwU2VydmVyQ29uZmlnLFxufSBmcm9tICcuLi9zZXJ2aWNlcy9tY3AvdHlwZXMuanMnXG5pbXBvcnQgeyB1c2VBcHBTdGF0ZSwgdXNlU2V0QXBwU3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9BcHBTdGF0ZS5qcydcbmltcG9ydCB0eXBlIHsgVG9vbCB9IGZyb20gJy4uL1Rvb2wuanMnXG5pbXBvcnQgdHlwZSB7IEFnZW50Q29sb3JOYW1lIH0gZnJvbSAnLi4vdG9vbHMvQWdlbnRUb29sL2FnZW50Q29sb3JNYW5hZ2VyLmpzJ1xuaW1wb3J0IHR5cGUgeyBBZ2VudERlZmluaXRpb24gfSBmcm9tICcuLi90b29scy9BZ2VudFRvb2wvbG9hZEFnZW50c0Rpci5qcydcbmltcG9ydCB7IGFzU2Vzc2lvbklkIH0gZnJvbSAnLi4vdHlwZXMvaWRzLmpzJ1xuaW1wb3J0IHR5cGUgeyBMb2dPcHRpb24gfSBmcm9tICcuLi90eXBlcy9sb2dzLmpzJ1xuaW1wb3J0IHR5cGUgeyBNZXNzYWdlIH0gZnJvbSAnLi4vdHlwZXMvbWVzc2FnZS5qcydcbmltcG9ydCB7IGFnZW50aWNTZXNzaW9uU2VhcmNoIH0gZnJvbSAnLi4vdXRpbHMvYWdlbnRpY1Nlc3Npb25TZWFyY2guanMnXG5pbXBvcnQgeyByZW5hbWVSZWNvcmRpbmdGb3JTZXNzaW9uIH0gZnJvbSAnLi4vdXRpbHMvYXNjaWljYXN0LmpzJ1xuaW1wb3J0IHsgdXBkYXRlU2Vzc2lvbk5hbWUgfSBmcm9tICcuLi91dGlscy9jb25jdXJyZW50U2Vzc2lvbnMuanMnXG5pbXBvcnQgeyBsb2FkQ29udmVyc2F0aW9uRm9yUmVzdW1lIH0gZnJvbSAnLi4vdXRpbHMvY29udmVyc2F0aW9uUmVjb3ZlcnkuanMnXG5pbXBvcnQgeyBjaGVja0Nyb3NzUHJvamVjdFJlc3VtZSB9IGZyb20gJy4uL3V0aWxzL2Nyb3NzUHJvamVjdFJlc3VtZS5qcydcbmltcG9ydCB0eXBlIHsgRmlsZUhpc3RvcnlTbmFwc2hvdCB9IGZyb20gJy4uL3V0aWxzL2ZpbGVIaXN0b3J5LmpzJ1xuaW1wb3J0IHsgbG9nRXJyb3IgfSBmcm9tICcuLi91dGlscy9sb2cuanMnXG5pbXBvcnQgeyBjcmVhdGVTeXN0ZW1NZXNzYWdlIH0gZnJvbSAnLi4vdXRpbHMvbWVzc2FnZXMuanMnXG5pbXBvcnQge1xuICBjb21wdXRlU3RhbmRhbG9uZUFnZW50Q29udGV4dCxcbiAgcmVzdG9yZUFnZW50RnJvbVNlc3Npb24sXG4gIHJlc3RvcmVXb3JrdHJlZUZvclJlc3VtZSxcbn0gZnJvbSAnLi4vdXRpbHMvc2Vzc2lvblJlc3RvcmUuanMnXG5pbXBvcnQge1xuICBhZG9wdFJlc3VtZWRTZXNzaW9uRmlsZSxcbiAgZW5yaWNoTG9ncyxcbiAgaXNDdXN0b21UaXRsZUVuYWJsZWQsXG4gIGxvYWRBbGxQcm9qZWN0c01lc3NhZ2VMb2dzUHJvZ3Jlc3NpdmUsXG4gIGxvYWRTYW1lUmVwb01lc3NhZ2VMb2dzUHJvZ3Jlc3NpdmUsXG4gIHJlY29yZENvbnRlbnRSZXBsYWNlbWVudCxcbiAgcmVzZXRTZXNzaW9uRmlsZVBvaW50ZXIsXG4gIHJlc3RvcmVTZXNzaW9uTWV0YWRhdGEsXG4gIHR5cGUgU2Vzc2lvbkxvZ1Jlc3VsdCxcbn0gZnJvbSAnLi4vdXRpbHMvc2Vzc2lvblN0b3JhZ2UuanMnXG5pbXBvcnQgdHlwZSB7IFRoaW5raW5nQ29uZmlnIH0gZnJvbSAnLi4vdXRpbHMvdGhpbmtpbmcuanMnXG5pbXBvcnQgdHlwZSB7IENvbnRlbnRSZXBsYWNlbWVudFJlY29yZCB9IGZyb20gJy4uL3V0aWxzL3Rvb2xSZXN1bHRTdG9yYWdlLmpzJ1xuaW1wb3J0IHsgUkVQTCB9IGZyb20gJy4vUkVQTC5qcydcblxuZnVuY3Rpb24gcGFyc2VQcklkZW50aWZpZXIodmFsdWU6IHN0cmluZyk6IG51bWJlciB8IG51bGwge1xuICBjb25zdCBkaXJlY3ROdW1iZXIgPSBwYXJzZUludCh2YWx1ZSwgMTApXG4gIGlmICghaXNOYU4oZGlyZWN0TnVtYmVyKSAmJiBkaXJlY3ROdW1iZXIgPiAwKSB7XG4gICAgcmV0dXJuIGRpcmVjdE51bWJlclxuICB9XG4gIGNvbnN0IHVybE1hdGNoID0gdmFsdWUubWF0Y2goL2dpdGh1YlxcLmNvbVxcL1teL10rXFwvW14vXStcXC9wdWxsXFwvKFxcZCspLylcbiAgaWYgKHVybE1hdGNoPy5bMV0pIHtcbiAgICByZXR1cm4gcGFyc2VJbnQodXJsTWF0Y2hbMV0sIDEwKVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNvbW1hbmRzOiBDb21tYW5kW11cbiAgd29ya3RyZWVQYXRoczogc3RyaW5nW11cbiAgaW5pdGlhbFRvb2xzOiBUb29sW11cbiAgbWNwQ2xpZW50cz86IE1DUFNlcnZlckNvbm5lY3Rpb25bXVxuICBkeW5hbWljTWNwQ29uZmlnPzogUmVjb3JkPHN0cmluZywgU2NvcGVkTWNwU2VydmVyQ29uZmlnPlxuICBkZWJ1ZzogYm9vbGVhblxuICBtYWluVGhyZWFkQWdlbnREZWZpbml0aW9uPzogQWdlbnREZWZpbml0aW9uXG4gIGF1dG9Db25uZWN0SWRlRmxhZz86IGJvb2xlYW5cbiAgc3RyaWN0TWNwQ29uZmlnPzogYm9vbGVhblxuICBzeXN0ZW1Qcm9tcHQ/OiBzdHJpbmdcbiAgYXBwZW5kU3lzdGVtUHJvbXB0Pzogc3RyaW5nXG4gIGluaXRpYWxTZWFyY2hRdWVyeT86IHN0cmluZ1xuICBkaXNhYmxlU2xhc2hDb21tYW5kcz86IGJvb2xlYW5cbiAgZm9ya1Nlc3Npb24/OiBib29sZWFuXG4gIHRhc2tMaXN0SWQ/OiBzdHJpbmdcbiAgZmlsdGVyQnlQcj86IGJvb2xlYW4gfCBudW1iZXIgfCBzdHJpbmdcbiAgdGhpbmtpbmdDb25maWc6IFRoaW5raW5nQ29uZmlnXG4gIG9uVHVybkNvbXBsZXRlPzogKG1lc3NhZ2VzOiBNZXNzYWdlW10pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSZXN1bWVDb252ZXJzYXRpb24oe1xuICBjb21tYW5kcyxcbiAgd29ya3RyZWVQYXRocyxcbiAgaW5pdGlhbFRvb2xzLFxuICBtY3BDbGllbnRzLFxuICBkeW5hbWljTWNwQ29uZmlnLFxuICBkZWJ1ZyxcbiAgbWFpblRocmVhZEFnZW50RGVmaW5pdGlvbixcbiAgYXV0b0Nvbm5lY3RJZGVGbGFnLFxuICBzdHJpY3RNY3BDb25maWcgPSBmYWxzZSxcbiAgc3lzdGVtUHJvbXB0LFxuICBhcHBlbmRTeXN0ZW1Qcm9tcHQsXG4gIGluaXRpYWxTZWFyY2hRdWVyeSxcbiAgZGlzYWJsZVNsYXNoQ29tbWFuZHMgPSBmYWxzZSxcbiAgZm9ya1Nlc3Npb24sXG4gIHRhc2tMaXN0SWQsXG4gIGZpbHRlckJ5UHIsXG4gIHRoaW5raW5nQ29uZmlnLFxuICBvblR1cm5Db21wbGV0ZSxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgeyByb3dzIH0gPSB1c2VUZXJtaW5hbFNpemUoKVxuICBjb25zdCBhZ2VudERlZmluaXRpb25zID0gdXNlQXBwU3RhdGUocyA9PiBzLmFnZW50RGVmaW5pdGlvbnMpXG4gIGNvbnN0IHNldEFwcFN0YXRlID0gdXNlU2V0QXBwU3RhdGUoKVxuICBjb25zdCBbbG9ncywgc2V0TG9nc10gPSBSZWFjdC51c2VTdGF0ZTxMb2dPcHRpb25bXT4oW10pXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtyZXN1bWluZywgc2V0UmVzdW1pbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzaG93QWxsUHJvamVjdHMsIHNldFNob3dBbGxQcm9qZWN0c10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3Jlc3VtZURhdGEsIHNldFJlc3VtZURhdGFdID0gUmVhY3QudXNlU3RhdGU8e1xuICAgIG1lc3NhZ2VzOiBNZXNzYWdlW11cbiAgICBmaWxlSGlzdG9yeVNuYXBzaG90cz86IEZpbGVIaXN0b3J5U25hcHNob3RbXVxuICAgIGNvbnRlbnRSZXBsYWNlbWVudHM/OiBDb250ZW50UmVwbGFjZW1lbnRSZWNvcmRbXVxuICAgIGFnZW50TmFtZT86IHN0cmluZ1xuICAgIGFnZW50Q29sb3I/OiBBZ2VudENvbG9yTmFtZVxuICAgIG1haW5UaHJlYWRBZ2VudERlZmluaXRpb24/OiBBZ2VudERlZmluaXRpb25cbiAgfSB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtjcm9zc1Byb2plY3RDb21tYW5kLCBzZXRDcm9zc1Byb2plY3RDb21tYW5kXSA9IFJlYWN0LnVzZVN0YXRlPFxuICAgIHN0cmluZyB8IG51bGxcbiAgPihudWxsKVxuICBjb25zdCBzZXNzaW9uTG9nUmVzdWx0UmVmID0gUmVhY3QudXNlUmVmPFNlc3Npb25Mb2dSZXN1bHQgfCBudWxsPihudWxsKVxuICAvLyBNaXJyb3Igb2YgbG9ncy5sZW5ndGggc28gbG9hZE1vcmVMb2dzIGNhbiBjb21wdXRlIHZhbHVlIGluZGljZXMgb3V0c2lkZVxuICAvLyB0aGUgc2V0TG9ncyB1cGRhdGVyIChrZWVwaW5nIGl0IHB1cmUgcGVyIFJlYWN0J3MgY29udHJhY3QpLlxuICBjb25zdCBsb2dDb3VudFJlZiA9IFJlYWN0LnVzZVJlZigwKVxuXG4gIGNvbnN0IGZpbHRlcmVkTG9ncyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGxldCByZXN1bHQgPSBsb2dzLmZpbHRlcihsID0+ICFsLmlzU2lkZWNoYWluKVxuICAgIGlmIChmaWx0ZXJCeVByICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChmaWx0ZXJCeVByID09PSB0cnVlKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIobCA9PiBsLnByTnVtYmVyICE9PSB1bmRlZmluZWQpXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaWx0ZXJCeVByID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKGwgPT4gbC5wck51bWJlciA9PT0gZmlsdGVyQnlQcilcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpbHRlckJ5UHIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnN0IHByTnVtYmVyID0gcGFyc2VQcklkZW50aWZpZXIoZmlsdGVyQnlQcilcbiAgICAgICAgaWYgKHByTnVtYmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihsID0+IGwucHJOdW1iZXIgPT09IHByTnVtYmVyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSwgW2xvZ3MsIGZpbHRlckJ5UHJdKVxuICBjb25zdCBpc1Jlc3VtZVdpdGhSZW5hbWVFbmFibGVkID0gaXNDdXN0b21UaXRsZUVuYWJsZWQoKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9hZFNhbWVSZXBvTWVzc2FnZUxvZ3NQcm9ncmVzc2l2ZSh3b3JrdHJlZVBhdGhzKVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgc2Vzc2lvbkxvZ1Jlc3VsdFJlZi5jdXJyZW50ID0gcmVzdWx0XG4gICAgICAgIGxvZ0NvdW50UmVmLmN1cnJlbnQgPSByZXN1bHQubG9ncy5sZW5ndGhcbiAgICAgICAgc2V0TG9ncyhyZXN1bHQubG9ncylcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBsb2dFcnJvcihlcnJvcilcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgIH0pXG4gIH0sIFt3b3JrdHJlZVBhdGhzXSlcblxuICBjb25zdCBsb2FkTW9yZUxvZ3MgPSBSZWFjdC51c2VDYWxsYmFjaygoY291bnQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHJlZiA9IHNlc3Npb25Mb2dSZXN1bHRSZWYuY3VycmVudFxuICAgIGlmICghcmVmIHx8IHJlZi5uZXh0SW5kZXggPj0gcmVmLmFsbFN0YXRMb2dzLmxlbmd0aCkgcmV0dXJuXG5cbiAgICB2b2lkIGVucmljaExvZ3MocmVmLmFsbFN0YXRMb2dzLCByZWYubmV4dEluZGV4LCBjb3VudCkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgcmVmLm5leHRJbmRleCA9IHJlc3VsdC5uZXh0SW5kZXhcbiAgICAgIGlmIChyZXN1bHQubG9ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIGVucmljaExvZ3MgcmV0dXJucyBmcmVzaCB1bnNoYXJlZCBvYmplY3RzIOKAlCBzYWZlIHRvIG11dGF0ZSBpbiBwbGFjZS5cbiAgICAgICAgLy8gT2Zmc2V0IGNvbWVzIGZyb20gbG9nQ291bnRSZWYgc28gdGhlIHNldExvZ3MgdXBkYXRlciBzdGF5cyBwdXJlLlxuICAgICAgICBjb25zdCBvZmZzZXQgPSBsb2dDb3VudFJlZi5jdXJyZW50XG4gICAgICAgIHJlc3VsdC5sb2dzLmZvckVhY2goKGxvZywgaSkgPT4ge1xuICAgICAgICAgIGxvZy52YWx1ZSA9IG9mZnNldCArIGlcbiAgICAgICAgfSlcbiAgICAgICAgc2V0TG9ncyhwcmV2ID0+IHByZXYuY29uY2F0KHJlc3VsdC5sb2dzKSlcbiAgICAgICAgbG9nQ291bnRSZWYuY3VycmVudCArPSByZXN1bHQubG9ncy5sZW5ndGhcbiAgICAgIH0gZWxzZSBpZiAocmVmLm5leHRJbmRleCA8IHJlZi5hbGxTdGF0TG9ncy5sZW5ndGgpIHtcbiAgICAgICAgbG9hZE1vcmVMb2dzKGNvdW50KVxuICAgICAgfVxuICAgIH0pXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGxvYWRMb2dzID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGFsbFByb2plY3RzOiBib29sZWFuKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICBjb25zdCBwcm9taXNlID0gYWxsUHJvamVjdHNcbiAgICAgICAgPyBsb2FkQWxsUHJvamVjdHNNZXNzYWdlTG9nc1Byb2dyZXNzaXZlKClcbiAgICAgICAgOiBsb2FkU2FtZVJlcG9NZXNzYWdlTG9nc1Byb2dyZXNzaXZlKHdvcmt0cmVlUGF0aHMpXG4gICAgICBwcm9taXNlXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgc2Vzc2lvbkxvZ1Jlc3VsdFJlZi5jdXJyZW50ID0gcmVzdWx0XG4gICAgICAgICAgbG9nQ291bnRSZWYuY3VycmVudCA9IHJlc3VsdC5sb2dzLmxlbmd0aFxuICAgICAgICAgIHNldExvZ3MocmVzdWx0LmxvZ3MpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgbG9nRXJyb3IoZXJyb3IpXG4gICAgICAgIH0pXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgW3dvcmt0cmVlUGF0aHNdLFxuICApXG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlQWxsUHJvamVjdHMgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSAhc2hvd0FsbFByb2plY3RzXG4gICAgc2V0U2hvd0FsbFByb2plY3RzKG5ld1ZhbHVlKVxuICAgIGxvYWRMb2dzKG5ld1ZhbHVlKVxuICB9LCBbc2hvd0FsbFByb2plY3RzLCBsb2FkTG9nc10pXG5cbiAgZnVuY3Rpb24gb25DYW5jZWwoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGN1c3RvbS1ydWxlcy9uby1wcm9jZXNzLWV4aXRcbiAgICBwcm9jZXNzLmV4aXQoMSlcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uU2VsZWN0KGxvZzogTG9nT3B0aW9uKSB7XG4gICAgc2V0UmVzdW1pbmcodHJ1ZSlcbiAgICBjb25zdCByZXN1bWVTdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpXG5cbiAgICBjb25zdCBjcm9zc1Byb2plY3RDaGVjayA9IGNoZWNrQ3Jvc3NQcm9qZWN0UmVzdW1lKFxuICAgICAgbG9nLFxuICAgICAgc2hvd0FsbFByb2plY3RzLFxuICAgICAgd29ya3RyZWVQYXRocyxcbiAgICApXG4gICAgaWYgKGNyb3NzUHJvamVjdENoZWNrLmlzQ3Jvc3NQcm9qZWN0KSB7XG4gICAgICBpZiAoIWNyb3NzUHJvamVjdENoZWNrLmlzU2FtZVJlcG9Xb3JrdHJlZSkge1xuICAgICAgICBjb25zdCByYXcgPSBhd2FpdCBzZXRDbGlwYm9hcmQoY3Jvc3NQcm9qZWN0Q2hlY2suY29tbWFuZClcbiAgICAgICAgaWYgKHJhdykgcHJvY2Vzcy5zdGRvdXQud3JpdGUocmF3KVxuICAgICAgICBzZXRDcm9zc1Byb2plY3RDb21tYW5kKGNyb3NzUHJvamVjdENoZWNrLmNvbW1hbmQpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBsb2FkQ29udmVyc2F0aW9uRm9yUmVzdW1lKGxvZywgdW5kZWZpbmVkKVxuICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjb252ZXJzYXRpb24nKVxuICAgICAgfVxuXG4gICAgICBpZiAoZmVhdHVyZSgnQ09PUkRJTkFUT1JfTU9ERScpKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHMgKi9cbiAgICAgICAgY29uc3QgY29vcmRpbmF0b3JNb2R1bGUgPVxuICAgICAgICAgIHJlcXVpcmUoJy4uL2Nvb3JkaW5hdG9yL2Nvb3JkaW5hdG9yTW9kZS5qcycpIGFzIHR5cGVvZiBpbXBvcnQoJy4uL2Nvb3JkaW5hdG9yL2Nvb3JkaW5hdG9yTW9kZS5qcycpXG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyAqL1xuICAgICAgICBjb25zdCB3YXJuaW5nID0gY29vcmRpbmF0b3JNb2R1bGUubWF0Y2hTZXNzaW9uTW9kZShyZXN1bHQubW9kZSlcbiAgICAgICAgaWYgKHdhcm5pbmcpIHtcbiAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG4gICAgICAgICAgY29uc3QgeyBnZXRBZ2VudERlZmluaXRpb25zV2l0aE92ZXJyaWRlcywgZ2V0QWN0aXZlQWdlbnRzRnJvbUxpc3QgfSA9XG4gICAgICAgICAgICByZXF1aXJlKCcuLi90b29scy9BZ2VudFRvb2wvbG9hZEFnZW50c0Rpci5qcycpIGFzIHR5cGVvZiBpbXBvcnQoJy4uL3Rvb2xzL0FnZW50VG9vbC9sb2FkQWdlbnRzRGlyLmpzJylcbiAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHMgKi9cbiAgICAgICAgICBnZXRBZ2VudERlZmluaXRpb25zV2l0aE92ZXJyaWRlcy5jYWNoZS5jbGVhcj8uKClcbiAgICAgICAgICBjb25zdCBmcmVzaEFnZW50RGVmcyA9IGF3YWl0IGdldEFnZW50RGVmaW5pdGlvbnNXaXRoT3ZlcnJpZGVzKFxuICAgICAgICAgICAgZ2V0T3JpZ2luYWxDd2QoKSxcbiAgICAgICAgICApXG4gICAgICAgICAgc2V0QXBwU3RhdGUocHJldiA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIGFnZW50RGVmaW5pdGlvbnM6IHtcbiAgICAgICAgICAgICAgLi4uZnJlc2hBZ2VudERlZnMsXG4gICAgICAgICAgICAgIGFsbEFnZW50czogZnJlc2hBZ2VudERlZnMuYWxsQWdlbnRzLFxuICAgICAgICAgICAgICBhY3RpdmVBZ2VudHM6IGdldEFjdGl2ZUFnZW50c0Zyb21MaXN0KGZyZXNoQWdlbnREZWZzLmFsbEFnZW50cyksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pKVxuICAgICAgICAgIHJlc3VsdC5tZXNzYWdlcy5wdXNoKGNyZWF0ZVN5c3RlbU1lc3NhZ2Uod2FybmluZywgJ3dhcm5pbmcnKSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocmVzdWx0LnNlc3Npb25JZCAmJiAhZm9ya1Nlc3Npb24pIHtcbiAgICAgICAgc3dpdGNoU2Vzc2lvbihcbiAgICAgICAgICBhc1Nlc3Npb25JZChyZXN1bHQuc2Vzc2lvbklkKSxcbiAgICAgICAgICBsb2cuZnVsbFBhdGggPyBkaXJuYW1lKGxvZy5mdWxsUGF0aCkgOiBudWxsLFxuICAgICAgICApXG4gICAgICAgIGF3YWl0IHJlbmFtZVJlY29yZGluZ0ZvclNlc3Npb24oKVxuICAgICAgICBhd2FpdCByZXNldFNlc3Npb25GaWxlUG9pbnRlcigpXG4gICAgICAgIHJlc3RvcmVDb3N0U3RhdGVGb3JTZXNzaW9uKHJlc3VsdC5zZXNzaW9uSWQpXG4gICAgICB9IGVsc2UgaWYgKGZvcmtTZXNzaW9uICYmIHJlc3VsdC5jb250ZW50UmVwbGFjZW1lbnRzPy5sZW5ndGgpIHtcbiAgICAgICAgYXdhaXQgcmVjb3JkQ29udGVudFJlcGxhY2VtZW50KHJlc3VsdC5jb250ZW50UmVwbGFjZW1lbnRzKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IGFnZW50RGVmaW5pdGlvbjogcmVzb2x2ZWRBZ2VudERlZiB9ID0gcmVzdG9yZUFnZW50RnJvbVNlc3Npb24oXG4gICAgICAgIHJlc3VsdC5hZ2VudFNldHRpbmcsXG4gICAgICAgIG1haW5UaHJlYWRBZ2VudERlZmluaXRpb24sXG4gICAgICAgIGFnZW50RGVmaW5pdGlvbnMsXG4gICAgICApXG4gICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+ICh7IC4uLnByZXYsIGFnZW50OiByZXNvbHZlZEFnZW50RGVmPy5hZ2VudFR5cGUgfSkpXG5cbiAgICAgIGlmIChmZWF0dXJlKCdDT09SRElOQVRPUl9NT0RFJykpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyAqL1xuICAgICAgICBjb25zdCB7IHNhdmVNb2RlIH0gPSByZXF1aXJlKCcuLi91dGlscy9zZXNzaW9uU3RvcmFnZS5qcycpXG4gICAgICAgIGNvbnN0IHsgaXNDb29yZGluYXRvck1vZGUgfSA9XG4gICAgICAgICAgcmVxdWlyZSgnLi4vY29vcmRpbmF0b3IvY29vcmRpbmF0b3JNb2RlLmpzJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vY29vcmRpbmF0b3IvY29vcmRpbmF0b3JNb2RlLmpzJylcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG4gICAgICAgIHNhdmVNb2RlKGlzQ29vcmRpbmF0b3JNb2RlKCkgPyAnY29vcmRpbmF0b3InIDogJ25vcm1hbCcpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN0YW5kYWxvbmVBZ2VudENvbnRleHQgPSBjb21wdXRlU3RhbmRhbG9uZUFnZW50Q29udGV4dChcbiAgICAgICAgcmVzdWx0LmFnZW50TmFtZSxcbiAgICAgICAgcmVzdWx0LmFnZW50Q29sb3IsXG4gICAgICApXG4gICAgICBpZiAoc3RhbmRhbG9uZUFnZW50Q29udGV4dCkge1xuICAgICAgICBzZXRBcHBTdGF0ZShwcmV2ID0+ICh7IC4uLnByZXYsIHN0YW5kYWxvbmVBZ2VudENvbnRleHQgfSkpXG4gICAgICB9XG4gICAgICB2b2lkIHVwZGF0ZVNlc3Npb25OYW1lKHJlc3VsdC5hZ2VudE5hbWUpXG5cbiAgICAgIHJlc3RvcmVTZXNzaW9uTWV0YWRhdGEoXG4gICAgICAgIGZvcmtTZXNzaW9uID8geyAuLi5yZXN1bHQsIHdvcmt0cmVlU2Vzc2lvbjogdW5kZWZpbmVkIH0gOiByZXN1bHQsXG4gICAgICApXG5cbiAgICAgIGlmICghZm9ya1Nlc3Npb24pIHtcbiAgICAgICAgcmVzdG9yZVdvcmt0cmVlRm9yUmVzdW1lKHJlc3VsdC53b3JrdHJlZVNlc3Npb24pXG4gICAgICAgIGlmIChyZXN1bHQuc2Vzc2lvbklkKSB7XG4gICAgICAgICAgYWRvcHRSZXN1bWVkU2Vzc2lvbkZpbGUoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmZWF0dXJlKCdDT05URVhUX0NPTExBUFNFJykpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyAqL1xuICAgICAgICA7KFxuICAgICAgICAgIHJlcXVpcmUoJy4uL3NlcnZpY2VzL2NvbnRleHRDb2xsYXBzZS9wZXJzaXN0LmpzJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vc2VydmljZXMvY29udGV4dENvbGxhcHNlL3BlcnNpc3QuanMnKVxuICAgICAgICApLnJlc3RvcmVGcm9tRW50cmllcyhcbiAgICAgICAgICByZXN1bHQuY29udGV4dENvbGxhcHNlQ29tbWl0cyA/PyBbXSxcbiAgICAgICAgICByZXN1bHQuY29udGV4dENvbGxhcHNlU25hcHNob3QsXG4gICAgICAgIClcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG4gICAgICB9XG5cbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9zZXNzaW9uX3Jlc3VtZWQnLCB7XG4gICAgICAgIGVudHJ5cG9pbnQ6XG4gICAgICAgICAgJ3BpY2tlcicgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgcmVzdW1lX2R1cmF0aW9uX21zOiBNYXRoLnJvdW5kKHBlcmZvcm1hbmNlLm5vdygpIC0gcmVzdW1lU3RhcnQpLFxuICAgICAgfSlcblxuICAgICAgc2V0TG9ncyhbXSlcbiAgICAgIHNldFJlc3VtZURhdGEoe1xuICAgICAgICBtZXNzYWdlczogcmVzdWx0Lm1lc3NhZ2VzLFxuICAgICAgICBmaWxlSGlzdG9yeVNuYXBzaG90czogcmVzdWx0LmZpbGVIaXN0b3J5U25hcHNob3RzLFxuICAgICAgICBjb250ZW50UmVwbGFjZW1lbnRzOiByZXN1bHQuY29udGVudFJlcGxhY2VtZW50cyxcbiAgICAgICAgYWdlbnROYW1lOiByZXN1bHQuYWdlbnROYW1lLFxuICAgICAgICBhZ2VudENvbG9yOiAocmVzdWx0LmFnZW50Q29sb3IgPT09ICdkZWZhdWx0J1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiByZXN1bHQuYWdlbnRDb2xvcikgYXMgQWdlbnRDb2xvck5hbWUgfCB1bmRlZmluZWQsXG4gICAgICAgIG1haW5UaHJlYWRBZ2VudERlZmluaXRpb246IHJlc29sdmVkQWdlbnREZWYsXG4gICAgICB9KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9zZXNzaW9uX3Jlc3VtZWQnLCB7XG4gICAgICAgIGVudHJ5cG9pbnQ6XG4gICAgICAgICAgJ3BpY2tlcicgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICB9KVxuICAgICAgbG9nRXJyb3IoZSBhcyBFcnJvcilcbiAgICAgIHRocm93IGVcbiAgICB9XG4gIH1cblxuICBpZiAoY3Jvc3NQcm9qZWN0Q29tbWFuZCkge1xuICAgIHJldHVybiA8Q3Jvc3NQcm9qZWN0TWVzc2FnZSBjb21tYW5kPXtjcm9zc1Byb2plY3RDb21tYW5kfSAvPlxuICB9XG5cbiAgaWYgKHJlc3VtZURhdGEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJFUExcbiAgICAgICAgZGVidWc9e2RlYnVnfVxuICAgICAgICBjb21tYW5kcz17Y29tbWFuZHN9XG4gICAgICAgIGluaXRpYWxUb29scz17aW5pdGlhbFRvb2xzfVxuICAgICAgICBpbml0aWFsTWVzc2FnZXM9e3Jlc3VtZURhdGEubWVzc2FnZXN9XG4gICAgICAgIGluaXRpYWxGaWxlSGlzdG9yeVNuYXBzaG90cz17cmVzdW1lRGF0YS5maWxlSGlzdG9yeVNuYXBzaG90c31cbiAgICAgICAgaW5pdGlhbENvbnRlbnRSZXBsYWNlbWVudHM9e3Jlc3VtZURhdGEuY29udGVudFJlcGxhY2VtZW50c31cbiAgICAgICAgaW5pdGlhbEFnZW50TmFtZT17cmVzdW1lRGF0YS5hZ2VudE5hbWV9XG4gICAgICAgIGluaXRpYWxBZ2VudENvbG9yPXtyZXN1bWVEYXRhLmFnZW50Q29sb3J9XG4gICAgICAgIG1jcENsaWVudHM9e21jcENsaWVudHN9XG4gICAgICAgIGR5bmFtaWNNY3BDb25maWc9e2R5bmFtaWNNY3BDb25maWd9XG4gICAgICAgIHN0cmljdE1jcENvbmZpZz17c3RyaWN0TWNwQ29uZmlnfVxuICAgICAgICBzeXN0ZW1Qcm9tcHQ9e3N5c3RlbVByb21wdH1cbiAgICAgICAgYXBwZW5kU3lzdGVtUHJvbXB0PXthcHBlbmRTeXN0ZW1Qcm9tcHR9XG4gICAgICAgIG1haW5UaHJlYWRBZ2VudERlZmluaXRpb249e3Jlc3VtZURhdGEubWFpblRocmVhZEFnZW50RGVmaW5pdGlvbn1cbiAgICAgICAgYXV0b0Nvbm5lY3RJZGVGbGFnPXthdXRvQ29ubmVjdElkZUZsYWd9XG4gICAgICAgIGRpc2FibGVTbGFzaENvbW1hbmRzPXtkaXNhYmxlU2xhc2hDb21tYW5kc31cbiAgICAgICAgdGFza0xpc3RJZD17dGFza0xpc3RJZH1cbiAgICAgICAgdGhpbmtpbmdDb25maWc9e3RoaW5raW5nQ29uZmlnfVxuICAgICAgICBvblR1cm5Db21wbGV0ZT17b25UdXJuQ29tcGxldGV9XG4gICAgICAvPlxuICAgIClcbiAgfVxuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3g+XG4gICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgIDxUZXh0PiBMb2FkaW5nIGNvbnZlcnNhdGlvbnPigKY8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICBpZiAocmVzdW1pbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveD5cbiAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgPFRleHQ+IFJlc3VtaW5nIGNvbnZlcnNhdGlvbuKApjwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxuXG4gIGlmIChmaWx0ZXJlZExvZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIDxOb0NvbnZlcnNhdGlvbnNNZXNzYWdlIC8+XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMb2dTZWxlY3RvclxuICAgICAgbG9ncz17ZmlsdGVyZWRMb2dzfVxuICAgICAgbWF4SGVpZ2h0PXtyb3dzfVxuICAgICAgb25DYW5jZWw9e29uQ2FuY2VsfVxuICAgICAgb25TZWxlY3Q9e29uU2VsZWN0fVxuICAgICAgb25Mb2dzQ2hhbmdlZD17XG4gICAgICAgIGlzUmVzdW1lV2l0aFJlbmFtZUVuYWJsZWQgPyAoKSA9PiBsb2FkTG9ncyhzaG93QWxsUHJvamVjdHMpIDogdW5kZWZpbmVkXG4gICAgICB9XG4gICAgICBvbkxvYWRNb3JlPXtsb2FkTW9yZUxvZ3N9XG4gICAgICBpbml0aWFsU2VhcmNoUXVlcnk9e2luaXRpYWxTZWFyY2hRdWVyeX1cbiAgICAgIHNob3dBbGxQcm9qZWN0cz17c2hvd0FsbFByb2plY3RzfVxuICAgICAgb25Ub2dnbGVBbGxQcm9qZWN0cz17aGFuZGxlVG9nZ2xlQWxsUHJvamVjdHN9XG4gICAgICBvbkFnZW50aWNTZWFyY2g9e2FnZW50aWNTZXNzaW9uU2VhcmNofVxuICAgIC8+XG4gIClcbn1cblxuZnVuY3Rpb24gTm9Db252ZXJzYXRpb25zTWVzc2FnZSgpOiBSZWFjdC5SZWFjdE5vZGUge1xuICB1c2VLZXliaW5kaW5nKFxuICAgICdhcHA6aW50ZXJydXB0JyxcbiAgICAoKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3VzdG9tLXJ1bGVzL25vLXByb2Nlc3MtZXhpdFxuICAgICAgcHJvY2Vzcy5leGl0KDEpXG4gICAgfSxcbiAgICB7IGNvbnRleHQ6ICdHbG9iYWwnIH0sXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgPFRleHQ+Tm8gY29udmVyc2F0aW9ucyBmb3VuZCB0byByZXN1bWUuPC9UZXh0PlxuICAgICAgPFRleHQgZGltQ29sb3I+UHJlc3MgQ3RybCtDIHRvIGV4aXQgYW5kIHN0YXJ0IGEgbmV3IGNvbnZlcnNhdGlvbi48L1RleHQ+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZnVuY3Rpb24gQ3Jvc3NQcm9qZWN0TWVzc2FnZSh7XG4gIGNvbW1hbmQsXG59OiB7XG4gIGNvbW1hbmQ6IHN0cmluZ1xufSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGN1c3RvbS1ydWxlcy9uby1wcm9jZXNzLWV4aXRcbiAgICAgIHByb2Nlc3MuZXhpdCgwKVxuICAgIH0sIDEwMClcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXsxfT5cbiAgICAgIDxUZXh0PlRoaXMgY29udmVyc2F0aW9uIGlzIGZyb20gYSBkaWZmZXJlbnQgZGlyZWN0b3J5LjwvVGV4dD5cbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICA8VGV4dD5UbyByZXN1bWUsIHJ1bjo8L1RleHQ+XG4gICAgICAgIDxUZXh0PiB7Y29tbWFuZH08L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICAgIDxUZXh0IGRpbUNvbG9yPihDb21tYW5kIGNvcGllZCB0byBjbGlwYm9hcmQpPC9UZXh0PlxuICAgIDwvQm94PlxuICApXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUEsTUFBQWU7QUFBQSxNQUFBZixFQUFBLENBQUEsTUFBQWEsSUFBQTtBQU5yREUsU0FBQSw0Q0FBQyxxQkFBa0IsZUFBQSxVQUFjLEtBQUEsS0FDL0JKLElBQ0FFLElBSUFDLEVBQ0Y7QUFBTWQsTUFBQSxDQUFBLElBQUFhO0FBQUFiLE1BQUEsQ0FBQSxJQUFBZTtFQUFBLE9BQUE7QUFBQUEsU0FBQWYsRUFBQSxDQUFBO0VBQUE7QUFBQSxTQVBOZTtBQU9NO0FBckJWLFNBQUFMLFNBQUE7QUFNSSxRQUFBTSxVQUFnQkMsV0FBV0MsUUFHeEIsR0FBRztBQUFDLFNBQ0EsTUFBTUMsYUFBYUgsT0FBTztBQUFDO0FBVnRDLFNBQUFFLFNBQUE7QUFRTTVGLFVBQU9DLEtBQU0sQ0FBQztBQUFDOyIsCiAgIm5hbWVzIjogWyJkaXJuYW1lIiwgInBhcnNlUHJJZGVudGlmaWVyIiwgInZhbHVlIiwgImRpcmVjdE51bWJlciIsICJwYXJzZUludCIsICJpc05hTiIsICJ1cmxNYXRjaCIsICJtYXRjaCIsICJSZXN1bWVDb252ZXJzYXRpb24iLCAiY29tbWFuZHMiLCAid29ya3RyZWVQYXRocyIsICJpbml0aWFsVG9vbHMiLCAibWNwQ2xpZW50cyIsICJkeW5hbWljTWNwQ29uZmlnIiwgImRlYnVnIiwgIm1haW5UaHJlYWRBZ2VudERlZmluaXRpb24iLCAiYXV0b0Nvbm5lY3RJZGVGbGFnIiwgInN0cmljdE1jcENvbmZpZyIsICJzeXN0ZW1Qcm9tcHQiLCAiYXBwZW5kU3lzdGVtUHJvbXB0IiwgImluaXRpYWxTZWFyY2hRdWVyeSIsICJkaXNhYmxlU2xhc2hDb21tYW5kcyIsICJmb3JrU2Vzc2lvbiIsICJ0YXNrTGlzdElkIiwgImZpbHRlckJ5UHIiLCAidGhpbmtpbmdDb25maWciLCAib25UdXJuQ29tcGxldGUiLCAicm93cyIsICJ1c2VUZXJtaW5hbFNpemUiLCAiYWdlbnREZWZpbml0aW9ucyIsICJ1c2VBcHBTdGF0ZSIsICJzIiwgInNldEFwcFN0YXRlIiwgInVzZVNldEFwcFN0YXRlIiwgImxvZ3MiLCAic2V0TG9ncyIsICJSZWFjdCIsICJ1c2VTdGF0ZSIsICJsb2FkaW5nIiwgInNldExvYWRpbmciLCAicmVzdW1pbmciLCAic2V0UmVzdW1pbmciLCAic2hvd0FsbFByb2plY3RzIiwgInNldFNob3dBbGxQcm9qZWN0cyIsICJyZXN1bWVEYXRhIiwgInNldFJlc3VtZURhdGEiLCAiY3Jvc3NQcm9qZWN0Q29tbWFuZCIsICJzZXRDcm9zc1Byb2plY3RDb21tYW5kIiwgInNlc3Npb25Mb2dSZXN1bHRSZWYiLCAidXNlUmVmIiwgImxvZ0NvdW50UmVmIiwgImZpbHRlcmVkTG9ncyIsICJ1c2VNZW1vIiwgInJlc3VsdCIsICJmaWx0ZXIiLCAibCIsICJpc1NpZGVjaGFpbiIsICJ1bmRlZmluZWQiLCAicHJOdW1iZXIiLCAiaXNSZXN1bWVXaXRoUmVuYW1lRW5hYmxlZCIsICJpc0N1c3RvbVRpdGxlRW5hYmxlZCIsICJ1c2VFZmZlY3QiLCAibG9hZFNhbWVSZXBvTWVzc2FnZUxvZ3NQcm9ncmVzc2l2ZSIsICJ0aGVuIiwgImN1cnJlbnQiLCAibGVuZ3RoIiwgImNhdGNoIiwgImVycm9yIiwgImxvZ0Vycm9yIiwgImxvYWRNb3JlTG9ncyIsICJ1c2VDYWxsYmFjayIsICJjb3VudCIsICJyZWYiLCAibmV4dEluZGV4IiwgImFsbFN0YXRMb2dzIiwgImVucmljaExvZ3MiLCAib2Zmc2V0IiwgImZvckVhY2giLCAibG9nIiwgImkiLCAicHJldiIsICJjb25jYXQiLCAibG9hZExvZ3MiLCAiYWxsUHJvamVjdHMiLCAicHJvbWlzZSIsICJsb2FkQWxsUHJvamVjdHNNZXNzYWdlTG9nc1Byb2dyZXNzaXZlIiwgImZpbmFsbHkiLCAiaGFuZGxlVG9nZ2xlQWxsUHJvamVjdHMiLCAibmV3VmFsdWUiLCAib25DYW5jZWwiLCAicHJvY2VzcyIsICJleGl0IiwgIm9uU2VsZWN0IiwgInJlc3VtZVN0YXJ0IiwgInBlcmZvcm1hbmNlIiwgIm5vdyIsICJjcm9zc1Byb2plY3RDaGVjayIsICJjaGVja0Nyb3NzUHJvamVjdFJlc3VtZSIsICJpc0Nyb3NzUHJvamVjdCIsICJpc1NhbWVSZXBvV29ya3RyZWUiLCAicmF3IiwgInNldENsaXBib2FyZCIsICJjb21tYW5kIiwgInN0ZG91dCIsICJ3cml0ZSIsICJsb2FkQ29udmVyc2F0aW9uRm9yUmVzdW1lIiwgIkVycm9yIiwgImZlYXR1cmUiLCAiY29vcmRpbmF0b3JNb2R1bGUiLCAicmVxdWlyZSIsICJ3YXJuaW5nIiwgIm1hdGNoU2Vzc2lvbk1vZGUiLCAibW9kZSIsICJnZXRBZ2VudERlZmluaXRpb25zV2l0aE92ZXJyaWRlcyIsICJnZXRBY3RpdmVBZ2VudHNGcm9tTGlzdCIsICJjYWNoZSIsICJjbGVhciIsICJmcmVzaEFnZW50RGVmcyIsICJnZXRPcmlnaW5hbEN3ZCIsICJhbGxBZ2VudHMiLCAiYWN0aXZlQWdlbnRzIiwgIm1lc3NhZ2VzIiwgInB1c2giLCAiY3JlYXRlU3lzdGVtTWVzc2FnZSIsICJzZXNzaW9uSWQiLCAic3dpdGNoU2Vzc2lvbiIsICJhc1Nlc3Npb25JZCIsICJmdWxsUGF0aCIsICJkaXJuYW1lIiwgInJlbmFtZVJlY29yZGluZ0ZvclNlc3Npb24iLCAicmVzZXRTZXNzaW9uRmlsZVBvaW50ZXIiLCAicmVzdG9yZUNvc3RTdGF0ZUZvclNlc3Npb24iLCAiY29udGVudFJlcGxhY2VtZW50cyIsICJyZWNvcmRDb250ZW50UmVwbGFjZW1lbnQiLCAiYWdlbnREZWZpbml0aW9uIiwgInJlc29sdmVkQWdlbnREZWYiLCAicmVzdG9yZUFnZW50RnJvbVNlc3Npb24iLCAiYWdlbnRTZXR0aW5nIiwgImFnZW50IiwgImFnZW50VHlwZSIsICJzYXZlTW9kZSIsICJpc0Nvb3JkaW5hdG9yTW9kZSIsICJzdGFuZGFsb25lQWdlbnRDb250ZXh0IiwgImNvbXB1dGVTdGFuZGFsb25lQWdlbnRDb250ZXh0IiwgImFnZW50TmFtZSIsICJhZ2VudENvbG9yIiwgInVwZGF0ZVNlc3Npb25OYW1lIiwgInJlc3RvcmVTZXNzaW9uTWV0YWRhdGEiLCAid29ya3RyZWVTZXNzaW9uIiwgInJlc3RvcmVXb3JrdHJlZUZvclJlc3VtZSIsICJhZG9wdFJlc3VtZWRTZXNzaW9uRmlsZSIsICJyZXN0b3JlRnJvbUVudHJpZXMiLCAiY29udGV4dENvbGxhcHNlQ29tbWl0cyIsICJjb250ZXh0Q29sbGFwc2VTbmFwc2hvdCIsICJsb2dFdmVudCIsICJlbnRyeXBvaW50IiwgInN1Y2Nlc3MiLCAicmVzdW1lX2R1cmF0aW9uX21zIiwgIk1hdGgiLCAicm91bmQiLCAiZmlsZUhpc3RvcnlTbmFwc2hvdHMiLCAiZSIsICJhZ2VudGljU2Vzc2lvblNlYXJjaCIsICJOb0NvbnZlcnNhdGlvbnNNZXNzYWdlIiwgIiQiLCAiX2MiLCAidDAiLCAiU3ltYm9sIiwgImZvciIsICJjb250ZXh0IiwgInVzZUtleWJpbmRpbmciLCAiX3RlbXAiLCAidDEiLCAiQ3Jvc3NQcm9qZWN0TWVzc2FnZSIsICJfdGVtcDMiLCAidDIiLCAidDMiLCAidDQiLCAidDUiLCAidDYiLCAidGltZW91dCIsICJzZXRUaW1lb3V0IiwgIl90ZW1wMiIsICJjbGVhclRpbWVvdXQiXQp9Cg==
