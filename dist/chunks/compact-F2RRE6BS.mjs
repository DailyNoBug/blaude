#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  ERROR_MESSAGE_INCOMPLETE_RESPONSE,
  ERROR_MESSAGE_NOT_ENOUGH_MESSAGES,
  ERROR_MESSAGE_USER_ABORT,
  buildEffectiveSystemPrompt,
  compactConversation,
  executePreCompactHooks,
  getMessagesAfterCompactBoundary,
  getShortcutDisplay,
  getSystemContext,
  getSystemPrompt,
  getUpgradeMessage,
  getUserContext,
  init_compact,
  init_compactWarningState,
  init_context,
  init_contextWindowUpgradeCheck,
  init_hooks2 as init_hooks,
  init_messages2 as init_messages,
  init_microCompact,
  init_postCompactCleanup,
  init_promptCacheBreakDetection,
  init_prompts2 as init_prompts,
  init_reactiveCompact,
  init_sessionMemoryCompact,
  init_sessionMemoryUtils,
  init_shortcutFormat,
  init_systemPrompt,
  mergeHookInstructions,
  microcompactMessages,
  notifyCompaction,
  reactiveCompact_exports,
  runPostCompactCleanup,
  setLastSummarizedMessageId,
  suppressCompactWarning,
  trySessionMemoryCompaction
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
import "./chunk-HWTXKBLR.mjs";
import "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  init_source,
  source_default
} from "./chunk-NKGQGSP5.mjs";
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
import {
  hasExactErrorMessage,
  init_errors
} from "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import {
  feature,
  init_bun_bundle
} from "./chunk-OU3SZVVB.mjs";
import {
  init_state,
  markPostCompaction
} from "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __esm,
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// src/commands/compact/compact.ts
async function compactViaReactive(messages, context, customInstructions, reactive) {
  context.onCompactProgress?.({
    type: "hooks_start",
    hookType: "pre_compact"
  });
  context.setSDKStatus?.("compacting");
  try {
    const [hookResult, cacheSafeParams] = await Promise.all([
      executePreCompactHooks(
        { trigger: "manual", customInstructions: customInstructions || null },
        context.abortController.signal
      ),
      getCacheSharingParams(context, messages)
    ]);
    const mergedInstructions = mergeHookInstructions(
      customInstructions,
      hookResult.newCustomInstructions
    );
    context.setStreamMode?.("requesting");
    context.setResponseLength?.(() => 0);
    context.onCompactProgress?.({ type: "compact_start" });
    const outcome = await reactive.reactiveCompactOnPromptTooLong(
      messages,
      cacheSafeParams,
      { customInstructions: mergedInstructions, trigger: "manual" }
    );
    if (!outcome.ok) {
      switch (outcome.reason) {
        case "too_few_groups":
          throw new Error(ERROR_MESSAGE_NOT_ENOUGH_MESSAGES);
        case "aborted":
          throw new Error(ERROR_MESSAGE_USER_ABORT);
        case "exhausted":
        case "error":
        case "media_unstrippable":
          throw new Error(ERROR_MESSAGE_INCOMPLETE_RESPONSE);
      }
    }
    setLastSummarizedMessageId(void 0);
    runPostCompactCleanup();
    suppressCompactWarning();
    getUserContext.cache.clear?.();
    const combinedMessage = [hookResult.userDisplayMessage, outcome.result.userDisplayMessage].filter(Boolean).join("\n") || void 0;
    return {
      type: "compact",
      compactionResult: {
        ...outcome.result,
        userDisplayMessage: combinedMessage
      },
      displayText: buildDisplayText(context, combinedMessage)
    };
  } finally {
    context.setStreamMode?.("requesting");
    context.setResponseLength?.(() => 0);
    context.onCompactProgress?.({ type: "compact_end" });
    context.setSDKStatus?.(null);
  }
}
function buildDisplayText(context, userDisplayMessage) {
  const upgradeMessage = getUpgradeMessage("tip");
  const expandShortcut = getShortcutDisplay(
    "app:toggleTranscript",
    "Global",
    "ctrl+o"
  );
  const dimmed = [
    ...context.options.verbose ? [] : [`(${expandShortcut} to see full summary)`],
    ...userDisplayMessage ? [userDisplayMessage] : [],
    ...upgradeMessage ? [upgradeMessage] : []
  ];
  return source_default.dim("Compacted " + dimmed.join("\n"));
}
async function getCacheSharingParams(context, forkContextMessages) {
  const appState = context.getAppState();
  const defaultSysPrompt = await getSystemPrompt(
    context.options.tools,
    context.options.mainLoopModel,
    Array.from(
      appState.toolPermissionContext.additionalWorkingDirectories.keys()
    ),
    context.options.mcpClients
  );
  const systemPrompt = buildEffectiveSystemPrompt({
    mainThreadAgentDefinition: void 0,
    toolUseContext: context,
    customSystemPrompt: context.options.customSystemPrompt,
    defaultSystemPrompt: defaultSysPrompt,
    appendSystemPrompt: context.options.appendSystemPrompt
  });
  const [userContext, systemContext] = await Promise.all([
    getUserContext(),
    getSystemContext()
  ]);
  return {
    systemPrompt,
    userContext,
    systemContext,
    toolUseContext: context,
    forkContextMessages
  };
}
var reactiveCompact, call;
var init_compact2 = __esm({
  "src/commands/compact/compact.ts"() {
    init_bun_bundle();
    init_source();
    init_state();
    init_prompts();
    init_context();
    init_shortcutFormat();
    init_promptCacheBreakDetection();
    init_compact();
    init_compactWarningState();
    init_microCompact();
    init_postCompactCleanup();
    init_sessionMemoryCompact();
    init_sessionMemoryUtils();
    init_errors();
    init_hooks();
    init_log();
    init_messages();
    init_contextWindowUpgradeCheck();
    init_systemPrompt();
    reactiveCompact = feature("REACTIVE_COMPACT") ? (init_reactiveCompact(), __toCommonJS(reactiveCompact_exports)) : null;
    call = async (args, context) => {
      const { abortController } = context;
      let { messages } = context;
      messages = getMessagesAfterCompactBoundary(messages);
      if (messages.length === 0) {
        throw new Error("No messages to compact");
      }
      const customInstructions = args.trim();
      try {
        if (!customInstructions) {
          const sessionMemoryResult = await trySessionMemoryCompaction(
            messages,
            context.agentId
          );
          if (sessionMemoryResult) {
            getUserContext.cache.clear?.();
            runPostCompactCleanup();
            if (feature("PROMPT_CACHE_BREAK_DETECTION")) {
              notifyCompaction(
                context.options.querySource ?? "compact",
                context.agentId
              );
            }
            markPostCompaction();
            suppressCompactWarning();
            return {
              type: "compact",
              compactionResult: sessionMemoryResult,
              displayText: buildDisplayText(context)
            };
          }
        }
        if (reactiveCompact?.isReactiveOnlyMode()) {
          return await compactViaReactive(
            messages,
            context,
            customInstructions,
            reactiveCompact
          );
        }
        const microcompactResult = await microcompactMessages(messages, context);
        const messagesForCompact = microcompactResult.messages;
        const result = await compactConversation(
          messagesForCompact,
          context,
          await getCacheSharingParams(context, messagesForCompact),
          false,
          customInstructions,
          false
        );
        setLastSummarizedMessageId(void 0);
        suppressCompactWarning();
        getUserContext.cache.clear?.();
        runPostCompactCleanup();
        return {
          type: "compact",
          compactionResult: result,
          displayText: buildDisplayText(context, result.userDisplayMessage)
        };
      } catch (error) {
        if (abortController.signal.aborted) {
          throw new Error("Compaction canceled.");
        } else if (hasExactErrorMessage(error, ERROR_MESSAGE_NOT_ENOUGH_MESSAGES)) {
          throw new Error(ERROR_MESSAGE_NOT_ENOUGH_MESSAGES);
        } else if (hasExactErrorMessage(error, ERROR_MESSAGE_INCOMPLETE_RESPONSE)) {
          throw new Error(ERROR_MESSAGE_INCOMPLETE_RESPONSE);
        } else {
          logError(error);
          throw new Error(`Error during compaction: ${error}`);
        }
      }
    };
  }
});
init_compact2();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL2NvbXBhY3QvY29tcGFjdC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZmVhdHVyZSB9IGZyb20gJ2J1bjpidW5kbGUnXG5pbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnXG5pbXBvcnQgeyBtYXJrUG9zdENvbXBhY3Rpb24gfSBmcm9tICdzcmMvYm9vdHN0cmFwL3N0YXRlLmpzJ1xuaW1wb3J0IHsgZ2V0U3lzdGVtUHJvbXB0IH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb21wdHMuanMnXG5pbXBvcnQgeyBnZXRTeXN0ZW1Db250ZXh0LCBnZXRVc2VyQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQuanMnXG5pbXBvcnQgeyBnZXRTaG9ydGN1dERpc3BsYXkgfSBmcm9tICcuLi8uLi9rZXliaW5kaW5ncy9zaG9ydGN1dEZvcm1hdC5qcydcbmltcG9ydCB7IG5vdGlmeUNvbXBhY3Rpb24gfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkvcHJvbXB0Q2FjaGVCcmVha0RldGVjdGlvbi5qcydcbmltcG9ydCB7XG4gIHR5cGUgQ29tcGFjdGlvblJlc3VsdCxcbiAgY29tcGFjdENvbnZlcnNhdGlvbixcbiAgRVJST1JfTUVTU0FHRV9JTkNPTVBMRVRFX1JFU1BPTlNFLFxuICBFUlJPUl9NRVNTQUdFX05PVF9FTk9VR0hfTUVTU0FHRVMsXG4gIEVSUk9SX01FU1NBR0VfVVNFUl9BQk9SVCxcbiAgbWVyZ2VIb29rSW5zdHJ1Y3Rpb25zLFxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb21wYWN0L2NvbXBhY3QuanMnXG5pbXBvcnQgeyBzdXBwcmVzc0NvbXBhY3RXYXJuaW5nIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29tcGFjdC9jb21wYWN0V2FybmluZ1N0YXRlLmpzJ1xuaW1wb3J0IHsgbWljcm9jb21wYWN0TWVzc2FnZXMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb21wYWN0L21pY3JvQ29tcGFjdC5qcydcbmltcG9ydCB7IHJ1blBvc3RDb21wYWN0Q2xlYW51cCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbXBhY3QvcG9zdENvbXBhY3RDbGVhbnVwLmpzJ1xuaW1wb3J0IHsgdHJ5U2Vzc2lvbk1lbW9yeUNvbXBhY3Rpb24gfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb21wYWN0L3Nlc3Npb25NZW1vcnlDb21wYWN0LmpzJ1xuaW1wb3J0IHsgc2V0TGFzdFN1bW1hcml6ZWRNZXNzYWdlSWQgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9TZXNzaW9uTWVtb3J5L3Nlc3Npb25NZW1vcnlVdGlscy5qcydcbmltcG9ydCB0eXBlIHsgVG9vbFVzZUNvbnRleHQgfSBmcm9tICcuLi8uLi9Ub29sLmpzJ1xuaW1wb3J0IHR5cGUgeyBMb2NhbENvbW1hbmRDYWxsIH0gZnJvbSAnLi4vLi4vdHlwZXMvY29tbWFuZC5qcydcbmltcG9ydCB0eXBlIHsgTWVzc2FnZSB9IGZyb20gJy4uLy4uL3R5cGVzL21lc3NhZ2UuanMnXG5pbXBvcnQgeyBoYXNFeGFjdEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Vycm9ycy5qcydcbmltcG9ydCB7IGV4ZWN1dGVQcmVDb21wYWN0SG9va3MgfSBmcm9tICcuLi8uLi91dGlscy9ob29rcy5qcydcbmltcG9ydCB7IGxvZ0Vycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nLmpzJ1xuaW1wb3J0IHsgZ2V0TWVzc2FnZXNBZnRlckNvbXBhY3RCb3VuZGFyeSB9IGZyb20gJy4uLy4uL3V0aWxzL21lc3NhZ2VzLmpzJ1xuaW1wb3J0IHsgZ2V0VXBncmFkZU1lc3NhZ2UgfSBmcm9tICcuLi8uLi91dGlscy9tb2RlbC9jb250ZXh0V2luZG93VXBncmFkZUNoZWNrLmpzJ1xuaW1wb3J0IHtcbiAgYnVpbGRFZmZlY3RpdmVTeXN0ZW1Qcm9tcHQsXG4gIHR5cGUgU3lzdGVtUHJvbXB0LFxufSBmcm9tICcuLi8uLi91dGlscy9zeXN0ZW1Qcm9tcHQuanMnXG5cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHMgKi9cbmNvbnN0IHJlYWN0aXZlQ29tcGFjdCA9IGZlYXR1cmUoJ1JFQUNUSVZFX0NPTVBBQ1QnKVxuICA/IChyZXF1aXJlKCcuLi8uLi9zZXJ2aWNlcy9jb21wYWN0L3JlYWN0aXZlQ29tcGFjdC5qcycpIGFzIHR5cGVvZiBpbXBvcnQoJy4uLy4uL3NlcnZpY2VzL2NvbXBhY3QvcmVhY3RpdmVDb21wYWN0LmpzJykpXG4gIDogbnVsbFxuLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG5cbmV4cG9ydCBjb25zdCBjYWxsOiBMb2NhbENvbW1hbmRDYWxsID0gYXN5bmMgKGFyZ3MsIGNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBhYm9ydENvbnRyb2xsZXIgfSA9IGNvbnRleHRcbiAgbGV0IHsgbWVzc2FnZXMgfSA9IGNvbnRleHRcblxuICAvLyBSRVBMIGtlZXBzIHNuaXBwZWQgbWVzc2FnZXMgZm9yIFVJIHNjcm9sbGJhY2sgXHUyMDE0IHByb2plY3Qgc28gdGhlIGNvbXBhY3RcbiAgLy8gbW9kZWwgZG9lc24ndCBzdW1tYXJpemUgY29udGVudCB0aGF0IHdhcyBpbnRlbnRpb25hbGx5IHJlbW92ZWQuXG4gIG1lc3NhZ2VzID0gZ2V0TWVzc2FnZXNBZnRlckNvbXBhY3RCb3VuZGFyeShtZXNzYWdlcylcblxuICBpZiAobWVzc2FnZXMubGVuZ3RoID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBtZXNzYWdlcyB0byBjb21wYWN0JylcbiAgfVxuXG4gIGNvbnN0IGN1c3RvbUluc3RydWN0aW9ucyA9IGFyZ3MudHJpbSgpXG5cbiAgdHJ5IHtcbiAgICAvLyBUcnkgc2Vzc2lvbiBtZW1vcnkgY29tcGFjdGlvbiBmaXJzdCBpZiBubyBjdXN0b20gaW5zdHJ1Y3Rpb25zXG4gICAgLy8gKHNlc3Npb24gbWVtb3J5IGNvbXBhY3Rpb24gZG9lc24ndCBzdXBwb3J0IGN1c3RvbSBpbnN0cnVjdGlvbnMpXG4gICAgaWYgKCFjdXN0b21JbnN0cnVjdGlvbnMpIHtcbiAgICAgIGNvbnN0IHNlc3Npb25NZW1vcnlSZXN1bHQgPSBhd2FpdCB0cnlTZXNzaW9uTWVtb3J5Q29tcGFjdGlvbihcbiAgICAgICAgbWVzc2FnZXMsXG4gICAgICAgIGNvbnRleHQuYWdlbnRJZCxcbiAgICAgIClcbiAgICAgIGlmIChzZXNzaW9uTWVtb3J5UmVzdWx0KSB7XG4gICAgICAgIGdldFVzZXJDb250ZXh0LmNhY2hlLmNsZWFyPy4oKVxuICAgICAgICBydW5Qb3N0Q29tcGFjdENsZWFudXAoKVxuICAgICAgICAvLyBSZXNldCBjYWNoZSByZWFkIGJhc2VsaW5lIHNvIHRoZSBwb3N0LWNvbXBhY3QgZHJvcCBpc24ndCBmbGFnZ2VkXG4gICAgICAgIC8vIGFzIGEgYnJlYWsuIGNvbXBhY3RDb252ZXJzYXRpb24gZG9lcyB0aGlzIGludGVybmFsbHk7IFNNLWNvbXBhY3QgZG9lc24ndC5cbiAgICAgICAgaWYgKGZlYXR1cmUoJ1BST01QVF9DQUNIRV9CUkVBS19ERVRFQ1RJT04nKSkge1xuICAgICAgICAgIG5vdGlmeUNvbXBhY3Rpb24oXG4gICAgICAgICAgICBjb250ZXh0Lm9wdGlvbnMucXVlcnlTb3VyY2UgPz8gJ2NvbXBhY3QnLFxuICAgICAgICAgICAgY29udGV4dC5hZ2VudElkLFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBtYXJrUG9zdENvbXBhY3Rpb24oKVxuICAgICAgICAvLyBTdXBwcmVzcyB3YXJuaW5nIGltbWVkaWF0ZWx5IGFmdGVyIHN1Y2Nlc3NmdWwgY29tcGFjdGlvblxuICAgICAgICBzdXBwcmVzc0NvbXBhY3RXYXJuaW5nKClcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR5cGU6ICdjb21wYWN0JyxcbiAgICAgICAgICBjb21wYWN0aW9uUmVzdWx0OiBzZXNzaW9uTWVtb3J5UmVzdWx0LFxuICAgICAgICAgIGRpc3BsYXlUZXh0OiBidWlsZERpc3BsYXlUZXh0KGNvbnRleHQpLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVhY3RpdmUtb25seSBtb2RlOiByb3V0ZSAvY29tcGFjdCB0aHJvdWdoIHRoZSByZWFjdGl2ZSBwYXRoLlxuICAgIC8vIENoZWNrZWQgYWZ0ZXIgc2Vzc2lvbi1tZW1vcnkgKHRoYXQgcGF0aCBpcyBjaGVhcCBhbmQgb3J0aG9nb25hbCkuXG4gICAgaWYgKHJlYWN0aXZlQ29tcGFjdD8uaXNSZWFjdGl2ZU9ubHlNb2RlKCkpIHtcbiAgICAgIHJldHVybiBhd2FpdCBjb21wYWN0VmlhUmVhY3RpdmUoXG4gICAgICAgIG1lc3NhZ2VzLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICBjdXN0b21JbnN0cnVjdGlvbnMsXG4gICAgICAgIHJlYWN0aXZlQ29tcGFjdCxcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBGYWxsIGJhY2sgdG8gdHJhZGl0aW9uYWwgY29tcGFjdGlvblxuICAgIC8vIFJ1biBtaWNyb2NvbXBhY3QgZmlyc3QgdG8gcmVkdWNlIHRva2VucyBiZWZvcmUgc3VtbWFyaXphdGlvblxuICAgIGNvbnN0IG1pY3JvY29tcGFjdFJlc3VsdCA9IGF3YWl0IG1pY3JvY29tcGFjdE1lc3NhZ2VzKG1lc3NhZ2VzLCBjb250ZXh0KVxuICAgIGNvbnN0IG1lc3NhZ2VzRm9yQ29tcGFjdCA9IG1pY3JvY29tcGFjdFJlc3VsdC5tZXNzYWdlc1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29tcGFjdENvbnZlcnNhdGlvbihcbiAgICAgIG1lc3NhZ2VzRm9yQ29tcGFjdCxcbiAgICAgIGNvbnRleHQsXG4gICAgICBhd2FpdCBnZXRDYWNoZVNoYXJpbmdQYXJhbXMoY29udGV4dCwgbWVzc2FnZXNGb3JDb21wYWN0KSxcbiAgICAgIGZhbHNlLFxuICAgICAgY3VzdG9tSW5zdHJ1Y3Rpb25zLFxuICAgICAgZmFsc2UsXG4gICAgKVxuXG4gICAgLy8gUmVzZXQgbGFzdFN1bW1hcml6ZWRNZXNzYWdlSWQgc2luY2UgbGVnYWN5IGNvbXBhY3Rpb24gcmVwbGFjZXMgYWxsIG1lc3NhZ2VzXG4gICAgLy8gYW5kIHRoZSBvbGQgbWVzc2FnZSBVVUlEIHdpbGwgbm8gbG9uZ2VyIGV4aXN0IGluIHRoZSBuZXcgbWVzc2FnZXMgYXJyYXlcbiAgICBzZXRMYXN0U3VtbWFyaXplZE1lc3NhZ2VJZCh1bmRlZmluZWQpXG5cbiAgICAvLyBTdXBwcmVzcyB0aGUgXCJDb250ZXh0IGxlZnQgdW50aWwgYXV0by1jb21wYWN0XCIgd2FybmluZyBhZnRlciBzdWNjZXNzZnVsIGNvbXBhY3Rpb25cbiAgICBzdXBwcmVzc0NvbXBhY3RXYXJuaW5nKClcblxuICAgIGdldFVzZXJDb250ZXh0LmNhY2hlLmNsZWFyPy4oKVxuICAgIHJ1blBvc3RDb21wYWN0Q2xlYW51cCgpXG5cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ2NvbXBhY3QnLFxuICAgICAgY29tcGFjdGlvblJlc3VsdDogcmVzdWx0LFxuICAgICAgZGlzcGxheVRleHQ6IGJ1aWxkRGlzcGxheVRleHQoY29udGV4dCwgcmVzdWx0LnVzZXJEaXNwbGF5TWVzc2FnZSksXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChhYm9ydENvbnRyb2xsZXIuc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcGFjdGlvbiBjYW5jZWxlZC4nKVxuICAgIH0gZWxzZSBpZiAoaGFzRXhhY3RFcnJvck1lc3NhZ2UoZXJyb3IsIEVSUk9SX01FU1NBR0VfTk9UX0VOT1VHSF9NRVNTQUdFUykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9NRVNTQUdFX05PVF9FTk9VR0hfTUVTU0FHRVMpXG4gICAgfSBlbHNlIGlmIChoYXNFeGFjdEVycm9yTWVzc2FnZShlcnJvciwgRVJST1JfTUVTU0FHRV9JTkNPTVBMRVRFX1JFU1BPTlNFKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUk9SX01FU1NBR0VfSU5DT01QTEVURV9SRVNQT05TRSlcbiAgICB9IGVsc2Uge1xuICAgICAgbG9nRXJyb3IoZXJyb3IpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIGR1cmluZyBjb21wYWN0aW9uOiAke2Vycm9yfWApXG4gICAgfVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbXBhY3RWaWFSZWFjdGl2ZShcbiAgbWVzc2FnZXM6IE1lc3NhZ2VbXSxcbiAgY29udGV4dDogVG9vbFVzZUNvbnRleHQsXG4gIGN1c3RvbUluc3RydWN0aW9uczogc3RyaW5nLFxuICByZWFjdGl2ZTogTm9uTnVsbGFibGU8dHlwZW9mIHJlYWN0aXZlQ29tcGFjdD4sXG4pOiBQcm9taXNlPHtcbiAgdHlwZTogJ2NvbXBhY3QnXG4gIGNvbXBhY3Rpb25SZXN1bHQ6IENvbXBhY3Rpb25SZXN1bHRcbiAgZGlzcGxheVRleHQ6IHN0cmluZ1xufT4ge1xuICBjb250ZXh0Lm9uQ29tcGFjdFByb2dyZXNzPy4oe1xuICAgIHR5cGU6ICdob29rc19zdGFydCcsXG4gICAgaG9va1R5cGU6ICdwcmVfY29tcGFjdCcsXG4gIH0pXG4gIGNvbnRleHQuc2V0U0RLU3RhdHVzPy4oJ2NvbXBhY3RpbmcnKVxuXG4gIHRyeSB7XG4gICAgLy8gSG9va3MgYW5kIGNhY2hlLXBhcmFtIGJ1aWxkIGFyZSBpbmRlcGVuZGVudCBcdTIwMTQgcnVuIGNvbmN1cnJlbnRseS5cbiAgICAvLyBnZXRDYWNoZVNoYXJpbmdQYXJhbXMgd2Fsa3MgYWxsIHRvb2xzIHRvIGJ1aWxkIHRoZSBzeXN0ZW0gcHJvbXB0O1xuICAgIC8vIHByZS1jb21wYWN0IGhvb2tzIHNwYXduIHN1YnByb2Nlc3Nlcy4gTmVpdGhlciBkZXBlbmRzIG9uIHRoZSBvdGhlci5cbiAgICBjb25zdCBbaG9va1Jlc3VsdCwgY2FjaGVTYWZlUGFyYW1zXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIGV4ZWN1dGVQcmVDb21wYWN0SG9va3MoXG4gICAgICAgIHsgdHJpZ2dlcjogJ21hbnVhbCcsIGN1c3RvbUluc3RydWN0aW9uczogY3VzdG9tSW5zdHJ1Y3Rpb25zIHx8IG51bGwgfSxcbiAgICAgICAgY29udGV4dC5hYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxuICAgICAgKSxcbiAgICAgIGdldENhY2hlU2hhcmluZ1BhcmFtcyhjb250ZXh0LCBtZXNzYWdlcyksXG4gICAgXSlcbiAgICBjb25zdCBtZXJnZWRJbnN0cnVjdGlvbnMgPSBtZXJnZUhvb2tJbnN0cnVjdGlvbnMoXG4gICAgICBjdXN0b21JbnN0cnVjdGlvbnMsXG4gICAgICBob29rUmVzdWx0Lm5ld0N1c3RvbUluc3RydWN0aW9ucyxcbiAgICApXG5cbiAgICBjb250ZXh0LnNldFN0cmVhbU1vZGU/LigncmVxdWVzdGluZycpXG4gICAgY29udGV4dC5zZXRSZXNwb25zZUxlbmd0aD8uKCgpID0+IDApXG4gICAgY29udGV4dC5vbkNvbXBhY3RQcm9ncmVzcz8uKHsgdHlwZTogJ2NvbXBhY3Rfc3RhcnQnIH0pXG5cbiAgICBjb25zdCBvdXRjb21lID0gYXdhaXQgcmVhY3RpdmUucmVhY3RpdmVDb21wYWN0T25Qcm9tcHRUb29Mb25nKFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBjYWNoZVNhZmVQYXJhbXMsXG4gICAgICB7IGN1c3RvbUluc3RydWN0aW9uczogbWVyZ2VkSW5zdHJ1Y3Rpb25zLCB0cmlnZ2VyOiAnbWFudWFsJyB9LFxuICAgIClcblxuICAgIGlmICghb3V0Y29tZS5vaykge1xuICAgICAgLy8gVGhlIG91dGVyIGNhdGNoIGluIGBjYWxsYCB0cmFuc2xhdGVzIHRoZXNlOiBhYm9ydGVkIFx1MjE5MiBcIkNvbXBhY3Rpb25cbiAgICAgIC8vIGNhbmNlbGVkLlwiICh2aWEgYWJvcnRDb250cm9sbGVyLnNpZ25hbC5hYm9ydGVkIGNoZWNrKSwgTk9UX0VOT1VHSCBcdTIxOTJcbiAgICAgIC8vIHJlLXRocm93biBhcy1pcywgZXZlcnl0aGluZyBlbHNlIFx1MjE5MiBcIkVycm9yIGR1cmluZyBjb21wYWN0aW9uOiBcdTIwMjZcIi5cbiAgICAgIHN3aXRjaCAob3V0Y29tZS5yZWFzb24pIHtcbiAgICAgICAgY2FzZSAndG9vX2Zld19ncm91cHMnOlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9NRVNTQUdFX05PVF9FTk9VR0hfTUVTU0FHRVMpXG4gICAgICAgIGNhc2UgJ2Fib3J0ZWQnOlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9NRVNTQUdFX1VTRVJfQUJPUlQpXG4gICAgICAgIGNhc2UgJ2V4aGF1c3RlZCc6XG4gICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgY2FzZSAnbWVkaWFfdW5zdHJpcHBhYmxlJzpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1JfTUVTU0FHRV9JTkNPTVBMRVRFX1JFU1BPTlNFKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1pcnJvcnMgdGhlIHBvc3Qtc3VjY2VzcyBjbGVhbnVwIGluIHRyeVJlYWN0aXZlQ29tcGFjdCwgbWludXNcbiAgICAvLyByZXNldE1pY3JvY29tcGFjdFN0YXRlIFx1MjAxNCBwcm9jZXNzU2xhc2hDb21tYW5kIGNhbGxzIHRoYXQgZm9yIGFsbFxuICAgIC8vIHR5cGU6J2NvbXBhY3QnIHJlc3VsdHMuXG4gICAgc2V0TGFzdFN1bW1hcml6ZWRNZXNzYWdlSWQodW5kZWZpbmVkKVxuICAgIHJ1blBvc3RDb21wYWN0Q2xlYW51cCgpXG4gICAgc3VwcHJlc3NDb21wYWN0V2FybmluZygpXG4gICAgZ2V0VXNlckNvbnRleHQuY2FjaGUuY2xlYXI/LigpXG5cbiAgICAvLyByZWFjdGl2ZUNvbXBhY3RPblByb21wdFRvb0xvbmcgcnVucyBQb3N0Q29tcGFjdCBob29rcyBidXQgbm90IFByZUNvbXBhY3RcbiAgICAvLyBcdTIwMTQgYm90aCBjYWxsZXJzIChoZXJlIGFuZCB0cnlSZWFjdGl2ZUNvbXBhY3QpIHJ1biBQcmVDb21wYWN0IG91dHNpZGUgc29cbiAgICAvLyB0aGV5IGNhbiBtZXJnZSBpdHMgdXNlckRpc3BsYXlNZXNzYWdlIHdpdGggUG9zdENvbXBhY3QncyBoZXJlLiBUaGlzXG4gICAgLy8gY2FsbGVyIGFkZGl0aW9uYWxseSBydW5zIGl0IGNvbmN1cnJlbnRseSB3aXRoIGdldENhY2hlU2hhcmluZ1BhcmFtcy5cbiAgICBjb25zdCBjb21iaW5lZE1lc3NhZ2UgPVxuICAgICAgW2hvb2tSZXN1bHQudXNlckRpc3BsYXlNZXNzYWdlLCBvdXRjb21lLnJlc3VsdC51c2VyRGlzcGxheU1lc3NhZ2VdXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgLmpvaW4oJ1xcbicpIHx8IHVuZGVmaW5lZFxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdjb21wYWN0JyxcbiAgICAgIGNvbXBhY3Rpb25SZXN1bHQ6IHtcbiAgICAgICAgLi4ub3V0Y29tZS5yZXN1bHQsXG4gICAgICAgIHVzZXJEaXNwbGF5TWVzc2FnZTogY29tYmluZWRNZXNzYWdlLFxuICAgICAgfSxcbiAgICAgIGRpc3BsYXlUZXh0OiBidWlsZERpc3BsYXlUZXh0KGNvbnRleHQsIGNvbWJpbmVkTWVzc2FnZSksXG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIGNvbnRleHQuc2V0U3RyZWFtTW9kZT8uKCdyZXF1ZXN0aW5nJylcbiAgICBjb250ZXh0LnNldFJlc3BvbnNlTGVuZ3RoPy4oKCkgPT4gMClcbiAgICBjb250ZXh0Lm9uQ29tcGFjdFByb2dyZXNzPy4oeyB0eXBlOiAnY29tcGFjdF9lbmQnIH0pXG4gICAgY29udGV4dC5zZXRTREtTdGF0dXM/LihudWxsKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJ1aWxkRGlzcGxheVRleHQoXG4gIGNvbnRleHQ6IFRvb2xVc2VDb250ZXh0LFxuICB1c2VyRGlzcGxheU1lc3NhZ2U/OiBzdHJpbmcsXG4pOiBzdHJpbmcge1xuICBjb25zdCB1cGdyYWRlTWVzc2FnZSA9IGdldFVwZ3JhZGVNZXNzYWdlKCd0aXAnKVxuICBjb25zdCBleHBhbmRTaG9ydGN1dCA9IGdldFNob3J0Y3V0RGlzcGxheShcbiAgICAnYXBwOnRvZ2dsZVRyYW5zY3JpcHQnLFxuICAgICdHbG9iYWwnLFxuICAgICdjdHJsK28nLFxuICApXG4gIGNvbnN0IGRpbW1lZCA9IFtcbiAgICAuLi4oY29udGV4dC5vcHRpb25zLnZlcmJvc2VcbiAgICAgID8gW11cbiAgICAgIDogW2AoJHtleHBhbmRTaG9ydGN1dH0gdG8gc2VlIGZ1bGwgc3VtbWFyeSlgXSksXG4gICAgLi4uKHVzZXJEaXNwbGF5TWVzc2FnZSA/IFt1c2VyRGlzcGxheU1lc3NhZ2VdIDogW10pLFxuICAgIC4uLih1cGdyYWRlTWVzc2FnZSA/IFt1cGdyYWRlTWVzc2FnZV0gOiBbXSksXG4gIF1cbiAgcmV0dXJuIGNoYWxrLmRpbSgnQ29tcGFjdGVkICcgKyBkaW1tZWQuam9pbignXFxuJykpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENhY2hlU2hhcmluZ1BhcmFtcyhcbiAgY29udGV4dDogVG9vbFVzZUNvbnRleHQsXG4gIGZvcmtDb250ZXh0TWVzc2FnZXM6IE1lc3NhZ2VbXSxcbik6IFByb21pc2U8e1xuICBzeXN0ZW1Qcm9tcHQ6IFN5c3RlbVByb21wdFxuICB1c2VyQ29udGV4dDogeyBbazogc3RyaW5nXTogc3RyaW5nIH1cbiAgc3lzdGVtQ29udGV4dDogeyBbazogc3RyaW5nXTogc3RyaW5nIH1cbiAgdG9vbFVzZUNvbnRleHQ6IFRvb2xVc2VDb250ZXh0XG4gIGZvcmtDb250ZXh0TWVzc2FnZXM6IE1lc3NhZ2VbXVxufT4ge1xuICBjb25zdCBhcHBTdGF0ZSA9IGNvbnRleHQuZ2V0QXBwU3RhdGUoKVxuICBjb25zdCBkZWZhdWx0U3lzUHJvbXB0ID0gYXdhaXQgZ2V0U3lzdGVtUHJvbXB0KFxuICAgIGNvbnRleHQub3B0aW9ucy50b29scyxcbiAgICBjb250ZXh0Lm9wdGlvbnMubWFpbkxvb3BNb2RlbCxcbiAgICBBcnJheS5mcm9tKFxuICAgICAgYXBwU3RhdGUudG9vbFBlcm1pc3Npb25Db250ZXh0LmFkZGl0aW9uYWxXb3JraW5nRGlyZWN0b3JpZXMua2V5cygpLFxuICAgICksXG4gICAgY29udGV4dC5vcHRpb25zLm1jcENsaWVudHMsXG4gIClcbiAgY29uc3Qgc3lzdGVtUHJvbXB0ID0gYnVpbGRFZmZlY3RpdmVTeXN0ZW1Qcm9tcHQoe1xuICAgIG1haW5UaHJlYWRBZ2VudERlZmluaXRpb246IHVuZGVmaW5lZCxcbiAgICB0b29sVXNlQ29udGV4dDogY29udGV4dCxcbiAgICBjdXN0b21TeXN0ZW1Qcm9tcHQ6IGNvbnRleHQub3B0aW9ucy5jdXN0b21TeXN0ZW1Qcm9tcHQsXG4gICAgZGVmYXVsdFN5c3RlbVByb21wdDogZGVmYXVsdFN5c1Byb21wdCxcbiAgICBhcHBlbmRTeXN0ZW1Qcm9tcHQ6IGNvbnRleHQub3B0aW9ucy5hcHBlbmRTeXN0ZW1Qcm9tcHQsXG4gIH0pXG4gIGNvbnN0IFt1c2VyQ29udGV4dCwgc3lzdGVtQ29udGV4dF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZ2V0VXNlckNvbnRleHQoKSxcbiAgICBnZXRTeXN0ZW1Db250ZXh0KCksXG4gIF0pXG4gIHJldHVybiB7XG4gICAgc3lzdGVtUHJvbXB0LFxuICAgIHVzZXJDb250ZXh0LFxuICAgIHN5c3RlbUNvbnRleHQsXG4gICAgdG9vbFVzZUNvbnRleHQ6IGNvbnRleHQsXG4gICAgZm9ya0NvbnRleHRNZXNzYWdlcyxcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMElBLGVBQWUsbUJBQ2IsVUFDQSxTQUNBLG9CQUNBLFVBS0M7QUFDRCxVQUFRLG9CQUFvQjtBQUFBLElBQzFCLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxFQUNaLENBQUM7QUFDRCxVQUFRLGVBQWUsWUFBWTtBQUVuQyxNQUFJO0FBSUYsVUFBTSxDQUFDLFlBQVksZUFBZSxJQUFJLE1BQU0sUUFBUSxJQUFJO0FBQUEsTUFDdEQ7QUFBQSxRQUNFLEVBQUUsU0FBUyxVQUFVLG9CQUFvQixzQkFBc0IsS0FBSztBQUFBLFFBQ3BFLFFBQVEsZ0JBQWdCO0FBQUEsTUFDMUI7QUFBQSxNQUNBLHNCQUFzQixTQUFTLFFBQVE7QUFBQSxJQUN6QyxDQUFDO0FBQ0QsVUFBTSxxQkFBcUI7QUFBQSxNQUN6QjtBQUFBLE1BQ0EsV0FBVztBQUFBLElBQ2I7QUFFQSxZQUFRLGdCQUFnQixZQUFZO0FBQ3BDLFlBQVEsb0JBQW9CLE1BQU0sQ0FBQztBQUNuQyxZQUFRLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsVUFBTSxVQUFVLE1BQU0sU0FBUztBQUFBLE1BQzdCO0FBQUEsTUFDQTtBQUFBLE1BQ0EsRUFBRSxvQkFBb0Isb0JBQW9CLFNBQVMsU0FBUztBQUFBLElBQzlEO0FBRUEsUUFBSSxDQUFDLFFBQVEsSUFBSTtBQUlmLGNBQVEsUUFBUSxRQUFRO0FBQUEsUUFDdEIsS0FBSztBQUNILGdCQUFNLElBQUksTUFBTSxpQ0FBaUM7QUFBQSxRQUNuRCxLQUFLO0FBQ0gsZ0JBQU0sSUFBSSxNQUFNLHdCQUF3QjtBQUFBLFFBQzFDLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFDSCxnQkFBTSxJQUFJLE1BQU0saUNBQWlDO0FBQUEsTUFDckQ7QUFBQSxJQUNGO0FBS0EsK0JBQTJCLE1BQVM7QUFDcEMsMEJBQXNCO0FBQ3RCLDJCQUF1QjtBQUN2QixtQkFBZSxNQUFNLFFBQVE7QUFNN0IsVUFBTSxrQkFDSixDQUFDLFdBQVcsb0JBQW9CLFFBQVEsT0FBTyxrQkFBa0IsRUFDOUQsT0FBTyxPQUFPLEVBQ2QsS0FBSyxJQUFJLEtBQUs7QUFFbkIsV0FBTztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sa0JBQWtCO0FBQUEsUUFDaEIsR0FBRyxRQUFRO0FBQUEsUUFDWCxvQkFBb0I7QUFBQSxNQUN0QjtBQUFBLE1BQ0EsYUFBYSxpQkFBaUIsU0FBUyxlQUFlO0FBQUEsSUFDeEQ7QUFBQSxFQUNGLFVBQUU7QUFDQSxZQUFRLGdCQUFnQixZQUFZO0FBQ3BDLFlBQVEsb0JBQW9CLE1BQU0sQ0FBQztBQUNuQyxZQUFRLG9CQUFvQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ25ELFlBQVEsZUFBZSxJQUFJO0FBQUEsRUFDN0I7QUFDRjtBQUVBLFNBQVMsaUJBQ1AsU0FDQSxvQkFDUTtBQUNSLFFBQU0saUJBQWlCLGtCQUFrQixLQUFLO0FBQzlDLFFBQU0saUJBQWlCO0FBQUEsSUFDckI7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFDQSxRQUFNLFNBQVM7QUFBQSxJQUNiLEdBQUksUUFBUSxRQUFRLFVBQ2hCLENBQUMsSUFDRCxDQUFDLElBQUksY0FBYyx1QkFBdUI7QUFBQSxJQUM5QyxHQUFJLHFCQUFxQixDQUFDLGtCQUFrQixJQUFJLENBQUM7QUFBQSxJQUNqRCxHQUFJLGlCQUFpQixDQUFDLGNBQWMsSUFBSSxDQUFDO0FBQUEsRUFDM0M7QUFDQSxTQUFPLGVBQU0sSUFBSSxlQUFlLE9BQU8sS0FBSyxJQUFJLENBQUM7QUFDbkQ7QUFFQSxlQUFlLHNCQUNiLFNBQ0EscUJBT0M7QUFDRCxRQUFNLFdBQVcsUUFBUSxZQUFZO0FBQ3JDLFFBQU0sbUJBQW1CLE1BQU07QUFBQSxJQUM3QixRQUFRLFFBQVE7QUFBQSxJQUNoQixRQUFRLFFBQVE7QUFBQSxJQUNoQixNQUFNO0FBQUEsTUFDSixTQUFTLHNCQUFzQiw2QkFBNkIsS0FBSztBQUFBLElBQ25FO0FBQUEsSUFDQSxRQUFRLFFBQVE7QUFBQSxFQUNsQjtBQUNBLFFBQU0sZUFBZSwyQkFBMkI7QUFBQSxJQUM5QywyQkFBMkI7QUFBQSxJQUMzQixnQkFBZ0I7QUFBQSxJQUNoQixvQkFBb0IsUUFBUSxRQUFRO0FBQUEsSUFDcEMscUJBQXFCO0FBQUEsSUFDckIsb0JBQW9CLFFBQVEsUUFBUTtBQUFBLEVBQ3RDLENBQUM7QUFDRCxRQUFNLENBQUMsYUFBYSxhQUFhLElBQUksTUFBTSxRQUFRLElBQUk7QUFBQSxJQUNyRCxlQUFlO0FBQUEsSUFDZixpQkFBaUI7QUFBQSxFQUNuQixDQUFDO0FBQ0QsU0FBTztBQUFBLElBQ0w7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0EsZ0JBQWdCO0FBQUEsSUFDaEI7QUFBQSxFQUNGO0FBQ0Y7QUE5UkEsSUFrQ00saUJBS087QUF2Q2IsSUFBQUEsZ0JBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUEsSUFBTSxrQkFBa0IsUUFBUSxrQkFBa0IsSUFDN0Msa0VBQ0Q7QUFHRyxJQUFNLE9BQXlCLE9BQU8sTUFBTSxZQUFZO0FBQzdELFlBQU0sRUFBRSxnQkFBZ0IsSUFBSTtBQUM1QixVQUFJLEVBQUUsU0FBUyxJQUFJO0FBSW5CLGlCQUFXLGdDQUFnQyxRQUFRO0FBRW5ELFVBQUksU0FBUyxXQUFXLEdBQUc7QUFDekIsY0FBTSxJQUFJLE1BQU0sd0JBQXdCO0FBQUEsTUFDMUM7QUFFQSxZQUFNLHFCQUFxQixLQUFLLEtBQUs7QUFFckMsVUFBSTtBQUdGLFlBQUksQ0FBQyxvQkFBb0I7QUFDdkIsZ0JBQU0sc0JBQXNCLE1BQU07QUFBQSxZQUNoQztBQUFBLFlBQ0EsUUFBUTtBQUFBLFVBQ1Y7QUFDQSxjQUFJLHFCQUFxQjtBQUN2QiwyQkFBZSxNQUFNLFFBQVE7QUFDN0Isa0NBQXNCO0FBR3RCLGdCQUFJLFFBQVEsOEJBQThCLEdBQUc7QUFDM0M7QUFBQSxnQkFDRSxRQUFRLFFBQVEsZUFBZTtBQUFBLGdCQUMvQixRQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFDQSwrQkFBbUI7QUFFbkIsbUNBQXVCO0FBRXZCLG1CQUFPO0FBQUEsY0FDTCxNQUFNO0FBQUEsY0FDTixrQkFBa0I7QUFBQSxjQUNsQixhQUFhLGlCQUFpQixPQUFPO0FBQUEsWUFDdkM7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUlBLFlBQUksaUJBQWlCLG1CQUFtQixHQUFHO0FBQ3pDLGlCQUFPLE1BQU07QUFBQSxZQUNYO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFJQSxjQUFNLHFCQUFxQixNQUFNLHFCQUFxQixVQUFVLE9BQU87QUFDdkUsY0FBTSxxQkFBcUIsbUJBQW1CO0FBRTlDLGNBQU0sU0FBUyxNQUFNO0FBQUEsVUFDbkI7QUFBQSxVQUNBO0FBQUEsVUFDQSxNQUFNLHNCQUFzQixTQUFTLGtCQUFrQjtBQUFBLFVBQ3ZEO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBSUEsbUNBQTJCLE1BQVM7QUFHcEMsK0JBQXVCO0FBRXZCLHVCQUFlLE1BQU0sUUFBUTtBQUM3Qiw4QkFBc0I7QUFFdEIsZUFBTztBQUFBLFVBQ0wsTUFBTTtBQUFBLFVBQ04sa0JBQWtCO0FBQUEsVUFDbEIsYUFBYSxpQkFBaUIsU0FBUyxPQUFPLGtCQUFrQjtBQUFBLFFBQ2xFO0FBQUEsTUFDRixTQUFTLE9BQU87QUFDZCxZQUFJLGdCQUFnQixPQUFPLFNBQVM7QUFDbEMsZ0JBQU0sSUFBSSxNQUFNLHNCQUFzQjtBQUFBLFFBQ3hDLFdBQVcscUJBQXFCLE9BQU8saUNBQWlDLEdBQUc7QUFDekUsZ0JBQU0sSUFBSSxNQUFNLGlDQUFpQztBQUFBLFFBQ25ELFdBQVcscUJBQXFCLE9BQU8saUNBQWlDLEdBQUc7QUFDekUsZ0JBQU0sSUFBSSxNQUFNLGlDQUFpQztBQUFBLFFBQ25ELE9BQU87QUFDTCxtQkFBUyxLQUFLO0FBQ2QsZ0JBQU0sSUFBSSxNQUFNLDRCQUE0QixLQUFLLEVBQUU7QUFBQSxRQUNyRDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFsiaW5pdF9jb21wYWN0Il0KfQo=
