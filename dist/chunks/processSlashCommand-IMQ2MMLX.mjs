#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_slashCommandParsing,
  parseSlashCommand
} from "./chunk-KVW7KIZE.mjs";
import {
  NO_CONTENT_MESSAGE,
  addSessionHook,
  buildPluginCommandTelemetryFields,
  buildPostCompactMessages,
  builtInCommandNames,
  createAbortController,
  createAgentId,
  createAttachmentMessage,
  createCommandInputMessage,
  createSyntheticUserCaveatMessage,
  createSystemMessage,
  createUserInterruptionMessage,
  createUserMessage,
  enqueuePendingNotification,
  extractResultText,
  findCommand,
  formatCommandInputTags,
  getAssistantMessageContentLength,
  getAttachmentMessages,
  getCommand,
  getCommandName,
  hasCommand,
  hasPermissionsToUseTool,
  init_UI,
  init_abortController,
  init_attachments,
  init_commands2 as init_commands,
  init_compact,
  init_dumpPrompts,
  init_forkedAgent,
  init_generators,
  init_messageQueueManager,
  init_messages,
  init_messages2,
  init_microCompact,
  init_permissionSetup,
  init_permissions,
  init_pluginOnlyPolicy,
  init_pluginTelemetry,
  init_runAgent,
  init_sessionHooks,
  init_skillUsageTracking,
  init_tokens,
  init_uuid,
  isCompactBoundaryMessage,
  isRestrictedToPluginOnly,
  isSourceAdminTrusted,
  isSystemLocalCommandMessage,
  normalizeMessages,
  parseToolListFromCLI,
  prepareForkedCommandContext,
  prepareUserContent,
  recordSkillUsage,
  removeSessionHook,
  renderToolUseProgressMessage,
  resetMicrocompactState,
  runAgent,
  toArray
} from "./chunk-FMU4URRE.mjs";
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
import {
  init_pluginIdentifier,
  isOfficialMarketplaceName,
  parsePluginIdentifier
} from "./chunk-4WEGPCYF.mjs";
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
import "./chunk-IIPAGI5R.mjs";
import "./chunk-27EOXKZU.mjs";
import {
  init_events,
  logOTelEvent,
  redactIfDisabled
} from "./chunk-HUEORIXP.mjs";
import "./chunk-H6COQF52.mjs";
import "./chunk-IQJUSPBJ.mjs";
import "./chunk-R326WRGL.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import {
  init_fullscreen,
  isFullscreenEnvEnabled
} from "./chunk-HWTXKBLR.mjs";
import "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  HOOK_EVENTS,
  getAgentContext,
  getWorkload,
  init_agentContext,
  init_agentSdkTypes,
  init_file,
  init_workloadContext
} from "./chunk-NKGQGSP5.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-UIIDPH35.mjs";
import "./chunk-DNXEQXI7.mjs";
import "./chunk-ZPEBVZEB.mjs";
import {
  init_sleep,
  sleep
} from "./chunk-DQ5JTCOA.mjs";
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
  COMMAND_MESSAGE_TAG,
  COMMAND_NAME_TAG,
  init_log,
  init_xml,
  logError
} from "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-IPMELYAB.mjs";
import "./chunk-F5ODCUJD.mjs";
import "./chunk-ZAYB3WZV.mjs";
import {
  AbortError,
  MalformedCommandError,
  getFsImplementation,
  init_debug,
  init_errors,
  init_fsOperations,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import {
  feature,
  init_bun_bundle
} from "./chunk-OU3SZVVB.mjs";
import {
  addInvokedSkill,
  getSessionId,
  init_state,
  setPromptId
} from "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import {
  init_envUtils,
  isEnvTruthy
} from "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/hooks/registerSkillHooks.ts
function registerSkillHooks(setAppState, sessionId, hooks, skillName, skillRoot) {
  let registeredCount = 0;
  for (const eventName of HOOK_EVENTS) {
    const matchers = hooks[eventName];
    if (!matchers) continue;
    for (const matcher of matchers) {
      for (const hook of matcher.hooks) {
        const onHookSuccess = hook.once ? () => {
          logForDebugging(
            `Removing one-shot hook for event ${eventName} in skill '${skillName}'`
          );
          removeSessionHook(setAppState, sessionId, eventName, hook);
        } : void 0;
        addSessionHook(
          setAppState,
          sessionId,
          eventName,
          matcher.matcher || "",
          hook,
          onHookSuccess,
          skillRoot
        );
        registeredCount++;
      }
    }
  }
  if (registeredCount > 0) {
    logForDebugging(
      `Registered ${registeredCount} hooks from skill '${skillName}'`
    );
  }
}
var init_registerSkillHooks = __esm({
  "src/utils/hooks/registerSkillHooks.ts"() {
    init_agentSdkTypes();
    init_debug();
    init_sessionHooks();
  }
});

// src/utils/processUserInput/processSlashCommand.tsx
import { randomUUID } from "crypto";
async function executeForkedSlashCommand(command, args, context, precedingInputBlocks, setToolJSX, canUseTool) {
  const agentId = createAgentId();
  const pluginMarketplace = command.pluginInfo ? parsePluginIdentifier(command.pluginInfo.repository).marketplace : void 0;
  logEvent("tengu_slash_command_forked", {
    command_name: command.name,
    invocation_trigger: "user-slash",
    ...command.pluginInfo && {
      _PROTO_plugin_name: command.pluginInfo.pluginManifest.name,
      ...pluginMarketplace && {
        _PROTO_marketplace_name: pluginMarketplace
      },
      ...buildPluginCommandTelemetryFields(command.pluginInfo)
    }
  });
  const {
    skillContent,
    modifiedGetAppState,
    baseAgent,
    promptMessages
  } = await prepareForkedCommandContext(command, args, context);
  const agentDefinition = command.effort !== void 0 ? {
    ...baseAgent,
    effort: command.effort
  } : baseAgent;
  logForDebugging(`Executing forked slash command /${command.name} with agent ${agentDefinition.agentType}`);
  if (feature("KAIROS") && (await context.getAppState()).kairosEnabled) {
    const bgAbortController = createAbortController();
    const commandName = getCommandName(command);
    const spawnTimeWorkload = getWorkload();
    const enqueueResult = (value) => enqueuePendingNotification({
      value,
      mode: "prompt",
      priority: "later",
      isMeta: true,
      skipSlashCommands: true,
      workload: spawnTimeWorkload
    });
    void (async () => {
      const deadline = Date.now() + MCP_SETTLE_TIMEOUT_MS;
      while (Date.now() < deadline) {
        const s = context.getAppState();
        if (!s.mcp.clients.some((c) => c.type === "pending")) break;
        await sleep(MCP_SETTLE_POLL_MS);
      }
      const freshTools = context.options.refreshTools?.() ?? context.options.tools;
      const agentMessages2 = [];
      for await (const message of runAgent({
        agentDefinition,
        promptMessages,
        toolUseContext: {
          ...context,
          getAppState: modifiedGetAppState,
          abortController: bgAbortController
        },
        canUseTool,
        isAsync: true,
        querySource: "agent:custom",
        model: command.model,
        availableTools: freshTools,
        override: {
          agentId
        }
      })) {
        agentMessages2.push(message);
      }
      const resultText2 = extractResultText(agentMessages2, "Command completed");
      logForDebugging(`Background forked command /${commandName} completed (agent ${agentId})`);
      enqueueResult(`<scheduled-task-result command="/${commandName}">
${resultText2}
</scheduled-task-result>`);
    })().catch((err) => {
      logError(err);
      enqueueResult(`<scheduled-task-result command="/${commandName}" status="failed">
${err instanceof Error ? err.message : String(err)}
</scheduled-task-result>`);
    });
    return {
      messages: [],
      shouldQuery: false,
      command
    };
  }
  const agentMessages = [];
  const progressMessages = [];
  const parentToolUseID = `forked-command-${command.name}`;
  let toolUseCounter = 0;
  const createProgressMessage = (message) => {
    toolUseCounter++;
    return {
      type: "progress",
      data: {
        message,
        type: "agent_progress",
        prompt: skillContent,
        agentId
      },
      parentToolUseID,
      toolUseID: `${parentToolUseID}-${toolUseCounter}`,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      uuid: randomUUID()
    };
  };
  const updateProgress = () => {
    setToolJSX({
      jsx: renderToolUseProgressMessage(progressMessages, {
        tools: context.options.tools,
        verbose: false
      }),
      shouldHidePromptInput: false,
      shouldContinueAnimation: true,
      showSpinner: true
    });
  };
  updateProgress();
  try {
    for await (const message of runAgent({
      agentDefinition,
      promptMessages,
      toolUseContext: {
        ...context,
        getAppState: modifiedGetAppState
      },
      canUseTool,
      isAsync: false,
      querySource: "agent:custom",
      model: command.model,
      availableTools: context.options.tools
    })) {
      agentMessages.push(message);
      const normalizedNew = normalizeMessages([message]);
      if (message.type === "assistant") {
        const contentLength = getAssistantMessageContentLength(message);
        if (contentLength > 0) {
          context.setResponseLength((len) => len + contentLength);
        }
        const normalizedMsg = normalizedNew[0];
        if (normalizedMsg && normalizedMsg.type === "assistant") {
          progressMessages.push(createProgressMessage(message));
          updateProgress();
        }
      }
      if (message.type === "user") {
        const normalizedMsg = normalizedNew[0];
        if (normalizedMsg && normalizedMsg.type === "user") {
          progressMessages.push(createProgressMessage(normalizedMsg));
          updateProgress();
        }
      }
    }
  } finally {
    setToolJSX(null);
  }
  let resultText = extractResultText(agentMessages, "Command completed");
  logForDebugging(`Forked slash command /${command.name} completed with agent ${agentId}`);
  if (false) {
    resultText = `[ANT-ONLY] API calls: ${getDisplayPath(getDumpPromptsPath(agentId))}
${resultText}`;
  }
  const messages = [createUserMessage({
    content: prepareUserContent({
      inputString: `/${getCommandName(command)} ${args}`.trim(),
      precedingInputBlocks
    })
  }), createUserMessage({
    content: `<local-command-stdout>
${resultText}
</local-command-stdout>`
  })];
  return {
    messages,
    shouldQuery: false,
    command,
    resultText
  };
}
function looksLikeCommand(commandName) {
  return !/[^a-zA-Z0-9:\-_]/.test(commandName);
}
async function processSlashCommand(inputString, precedingInputBlocks, imageContentBlocks, attachmentMessages, context, setToolJSX, uuid, isAlreadyProcessing, canUseTool) {
  const parsed = parseSlashCommand(inputString);
  if (!parsed) {
    logEvent("tengu_input_slash_missing", {});
    const errorMessage = "Commands are in the form `/command [args]`";
    return {
      messages: [createSyntheticUserCaveatMessage(), ...attachmentMessages, createUserMessage({
        content: prepareUserContent({
          inputString: errorMessage,
          precedingInputBlocks
        })
      })],
      shouldQuery: false,
      resultText: errorMessage
    };
  }
  const {
    commandName,
    args: parsedArgs,
    isMcp
  } = parsed;
  const sanitizedCommandName = isMcp ? "mcp" : !builtInCommandNames().has(commandName) ? "custom" : commandName;
  if (!hasCommand(commandName, context.options.commands)) {
    let isFilePath = false;
    try {
      await getFsImplementation().stat(`/${commandName}`);
      isFilePath = true;
    } catch {
    }
    if (looksLikeCommand(commandName) && !isFilePath) {
      logEvent("tengu_input_slash_invalid", {
        input: commandName
      });
      const unknownMessage = `Unknown skill: ${commandName}`;
      return {
        messages: [
          createSyntheticUserCaveatMessage(),
          ...attachmentMessages,
          createUserMessage({
            content: prepareUserContent({
              inputString: unknownMessage,
              precedingInputBlocks
            })
          }),
          // gh-32591: preserve args so the user can copy/resubmit without
          // retyping. System warning is UI-only (filtered before API).
          ...parsedArgs ? [createSystemMessage(`Args from unknown skill: ${parsedArgs}`, "warning")] : []
        ],
        shouldQuery: false,
        resultText: unknownMessage
      };
    }
    const promptId = randomUUID();
    setPromptId(promptId);
    logEvent("tengu_input_prompt", {});
    void logOTelEvent("user_prompt", {
      prompt_length: String(inputString.length),
      prompt: redactIfDisabled(inputString),
      "prompt.id": promptId
    });
    return {
      messages: [createUserMessage({
        content: prepareUserContent({
          inputString,
          precedingInputBlocks
        }),
        uuid
      }), ...attachmentMessages],
      shouldQuery: true
    };
  }
  const {
    messages: newMessages,
    shouldQuery: messageShouldQuery,
    allowedTools,
    model,
    effort,
    command: returnedCommand,
    resultText,
    nextInput,
    submitNextInput
  } = await getMessagesForSlashCommand(commandName, parsedArgs, setToolJSX, context, precedingInputBlocks, imageContentBlocks, isAlreadyProcessing, canUseTool, uuid);
  if (newMessages.length === 0) {
    const eventData2 = {
      input: sanitizedCommandName
    };
    if (returnedCommand.type === "prompt" && returnedCommand.pluginInfo) {
      const {
        pluginManifest,
        repository
      } = returnedCommand.pluginInfo;
      const {
        marketplace
      } = parsePluginIdentifier(repository);
      const isOfficial = isOfficialMarketplaceName(marketplace);
      eventData2._PROTO_plugin_name = pluginManifest.name;
      if (marketplace) {
        eventData2._PROTO_marketplace_name = marketplace;
      }
      eventData2.plugin_repository = isOfficial ? repository : "third-party";
      eventData2.plugin_name = isOfficial ? pluginManifest.name : "third-party";
      if (isOfficial && pluginManifest.version) {
        eventData2.plugin_version = pluginManifest.version;
      }
      Object.assign(eventData2, buildPluginCommandTelemetryFields(returnedCommand.pluginInfo));
    }
    logEvent("tengu_input_command", {
      ...eventData2,
      invocation_trigger: "user-slash",
      ...false
    });
    return {
      messages: [],
      shouldQuery: false,
      model,
      nextInput,
      submitNextInput
    };
  }
  if (newMessages.length === 2 && newMessages[1].type === "user" && typeof newMessages[1].message.content === "string" && newMessages[1].message.content.startsWith("Unknown command:")) {
    const looksLikeFilePath = inputString.startsWith("/var") || inputString.startsWith("/tmp") || inputString.startsWith("/private");
    if (!looksLikeFilePath) {
      logEvent("tengu_input_slash_invalid", {
        input: commandName
      });
    }
    return {
      messages: [createSyntheticUserCaveatMessage(), ...newMessages],
      shouldQuery: messageShouldQuery,
      allowedTools,
      model
    };
  }
  const eventData = {
    input: sanitizedCommandName
  };
  if (returnedCommand.type === "prompt" && returnedCommand.pluginInfo) {
    const {
      pluginManifest,
      repository
    } = returnedCommand.pluginInfo;
    const {
      marketplace
    } = parsePluginIdentifier(repository);
    const isOfficial = isOfficialMarketplaceName(marketplace);
    eventData._PROTO_plugin_name = pluginManifest.name;
    if (marketplace) {
      eventData._PROTO_marketplace_name = marketplace;
    }
    eventData.plugin_repository = isOfficial ? repository : "third-party";
    eventData.plugin_name = isOfficial ? pluginManifest.name : "third-party";
    if (isOfficial && pluginManifest.version) {
      eventData.plugin_version = pluginManifest.version;
    }
    Object.assign(eventData, buildPluginCommandTelemetryFields(returnedCommand.pluginInfo));
  }
  logEvent("tengu_input_command", {
    ...eventData,
    invocation_trigger: "user-slash",
    ...false
  });
  const isCompactResult = newMessages.length > 0 && newMessages[0] && isCompactBoundaryMessage(newMessages[0]);
  return {
    messages: messageShouldQuery || newMessages.every(isSystemLocalCommandMessage) || isCompactResult ? newMessages : [createSyntheticUserCaveatMessage(), ...newMessages],
    shouldQuery: messageShouldQuery,
    allowedTools,
    model,
    effort,
    resultText,
    nextInput,
    submitNextInput
  };
}
async function getMessagesForSlashCommand(commandName, args, setToolJSX, context, precedingInputBlocks, imageContentBlocks, _isAlreadyProcessing, canUseTool, uuid) {
  const command = getCommand(commandName, context.options.commands);
  if (command.type === "prompt" && command.userInvocable !== false) {
    recordSkillUsage(commandName);
  }
  if (command.userInvocable === false) {
    return {
      messages: [createUserMessage({
        content: prepareUserContent({
          inputString: `/${commandName}`,
          precedingInputBlocks
        })
      }), createUserMessage({
        content: `This skill can only be invoked by Claude, not directly by users. Ask Claude to use the "${commandName}" skill for you.`
      })],
      shouldQuery: false,
      command
    };
  }
  try {
    switch (command.type) {
      case "local-jsx": {
        return new Promise((resolve) => {
          let doneWasCalled = false;
          const onDone = (result, options) => {
            doneWasCalled = true;
            if (options?.display === "skip") {
              void resolve({
                messages: [],
                shouldQuery: false,
                command,
                nextInput: options?.nextInput,
                submitNextInput: options?.submitNextInput
              });
              return;
            }
            const metaMessages = (options?.metaMessages ?? []).map((content) => createUserMessage({
              content,
              isMeta: true
            }));
            const skipTranscript = isFullscreenEnvEnabled() && typeof result === "string" && result.endsWith(" dismissed");
            void resolve({
              messages: options?.display === "system" ? skipTranscript ? metaMessages : [createCommandInputMessage(formatCommandInput(command, args)), createCommandInputMessage(`<local-command-stdout>${result}</local-command-stdout>`), ...metaMessages] : [createUserMessage({
                content: prepareUserContent({
                  inputString: formatCommandInput(command, args),
                  precedingInputBlocks
                })
              }), result ? createUserMessage({
                content: `<local-command-stdout>${result}</local-command-stdout>`
              }) : createUserMessage({
                content: `<local-command-stdout>${NO_CONTENT_MESSAGE}</local-command-stdout>`
              }), ...metaMessages],
              shouldQuery: options?.shouldQuery ?? false,
              command,
              nextInput: options?.nextInput,
              submitNextInput: options?.submitNextInput
            });
          };
          void command.load().then((mod) => mod.call(onDone, {
            ...context,
            canUseTool
          }, args)).then((jsx) => {
            if (jsx == null) return;
            if (context.options.isNonInteractiveSession) {
              void resolve({
                messages: [],
                shouldQuery: false,
                command
              });
              return;
            }
            if (doneWasCalled) return;
            setToolJSX({
              jsx,
              shouldHidePromptInput: true,
              showSpinner: false,
              isLocalJSXCommand: true,
              isImmediate: command.immediate === true
            });
          }).catch((e) => {
            logError(e);
            if (doneWasCalled) return;
            doneWasCalled = true;
            setToolJSX({
              jsx: null,
              shouldHidePromptInput: false,
              clearLocalJSX: true
            });
            void resolve({
              messages: [],
              shouldQuery: false,
              command
            });
          });
        });
      }
      case "local": {
        const displayArgs = command.isSensitive && args.trim() ? "***" : args;
        const userMessage = createUserMessage({
          content: prepareUserContent({
            inputString: formatCommandInput(command, displayArgs),
            precedingInputBlocks
          })
        });
        try {
          const syntheticCaveatMessage = createSyntheticUserCaveatMessage();
          const mod = await command.load();
          const result = await mod.call(args, context);
          if (result.type === "skip") {
            return {
              messages: [],
              shouldQuery: false,
              command
            };
          }
          if (result.type === "compact") {
            const slashCommandMessages = [syntheticCaveatMessage, userMessage, ...result.displayText ? [createUserMessage({
              content: `<local-command-stdout>${result.displayText}</local-command-stdout>`,
              // --resume looks at latest timestamp message to determine which message to resume from
              // This is a perf optimization to avoid having to recaculcate the leaf node every time
              // Since we're creating a bunch of synthetic messages for compact, it's important to set
              // the timestamp of the last message to be slightly after the current time
              // This is mostly important for sdk / -p mode
              timestamp: new Date(Date.now() + 100).toISOString()
            })] : []];
            const compactionResultWithSlashMessages = {
              ...result.compactionResult,
              messagesToKeep: [...result.compactionResult.messagesToKeep ?? [], ...slashCommandMessages]
            };
            resetMicrocompactState();
            return {
              messages: buildPostCompactMessages(compactionResultWithSlashMessages),
              shouldQuery: false,
              command
            };
          }
          return {
            messages: [userMessage, createCommandInputMessage(`<local-command-stdout>${result.value}</local-command-stdout>`)],
            shouldQuery: false,
            command,
            resultText: result.value
          };
        } catch (e) {
          logError(e);
          return {
            messages: [userMessage, createCommandInputMessage(`<local-command-stderr>${String(e)}</local-command-stderr>`)],
            shouldQuery: false,
            command
          };
        }
      }
      case "prompt": {
        try {
          if (command.context === "fork") {
            return await executeForkedSlashCommand(command, args, context, precedingInputBlocks, setToolJSX, canUseTool ?? hasPermissionsToUseTool);
          }
          return await getMessagesForPromptSlashCommand(command, args, context, precedingInputBlocks, imageContentBlocks, uuid);
        } catch (e) {
          if (e instanceof AbortError) {
            return {
              messages: [createUserMessage({
                content: prepareUserContent({
                  inputString: formatCommandInput(command, args),
                  precedingInputBlocks
                })
              }), createUserInterruptionMessage({
                toolUse: false
              })],
              shouldQuery: false,
              command
            };
          }
          return {
            messages: [createUserMessage({
              content: prepareUserContent({
                inputString: formatCommandInput(command, args),
                precedingInputBlocks
              })
            }), createUserMessage({
              content: `<local-command-stderr>${String(e)}</local-command-stderr>`
            })],
            shouldQuery: false,
            command
          };
        }
      }
    }
  } catch (e) {
    if (e instanceof MalformedCommandError) {
      return {
        messages: [createUserMessage({
          content: prepareUserContent({
            inputString: e.message,
            precedingInputBlocks
          })
        })],
        shouldQuery: false,
        command
      };
    }
    throw e;
  }
}
function formatCommandInput(command, args) {
  return formatCommandInputTags(getCommandName(command), args);
}
function formatSkillLoadingMetadata(skillName, _progressMessage = "loading") {
  return [`<${COMMAND_MESSAGE_TAG}>${skillName}</${COMMAND_MESSAGE_TAG}>`, `<${COMMAND_NAME_TAG}>${skillName}</${COMMAND_NAME_TAG}>`, `<skill-format>true</skill-format>`].join("\n");
}
function formatSlashCommandLoadingMetadata(commandName, args) {
  return [`<${COMMAND_MESSAGE_TAG}>${commandName}</${COMMAND_MESSAGE_TAG}>`, `<${COMMAND_NAME_TAG}>/${commandName}</${COMMAND_NAME_TAG}>`, args ? `<command-args>${args}</command-args>` : null].filter(Boolean).join("\n");
}
function formatCommandLoadingMetadata(command, args) {
  if (command.userInvocable !== false) {
    return formatSlashCommandLoadingMetadata(command.name, args);
  }
  if (command.loadedFrom === "skills" || command.loadedFrom === "plugin" || command.loadedFrom === "mcp") {
    return formatSkillLoadingMetadata(command.name, command.progressMessage);
  }
  return formatSlashCommandLoadingMetadata(command.name, args);
}
async function processPromptSlashCommand(commandName, args, commands, context, imageContentBlocks = []) {
  const command = findCommand(commandName, commands);
  if (!command) {
    throw new MalformedCommandError(`Unknown command: ${commandName}`);
  }
  if (command.type !== "prompt") {
    throw new Error(`Unexpected ${command.type} command. Expected 'prompt' command. Use /${commandName} directly in the main conversation.`);
  }
  return getMessagesForPromptSlashCommand(command, args, context, [], imageContentBlocks);
}
async function getMessagesForPromptSlashCommand(command, args, context, precedingInputBlocks = [], imageContentBlocks = [], uuid) {
  if (feature("COORDINATOR_MODE") && isEnvTruthy(process.env.CLAUDE_CODE_COORDINATOR_MODE) && !context.agentId) {
    const metadata2 = formatCommandLoadingMetadata(command, args);
    const parts = [`Skill "/${command.name}" is available for workers.`];
    if (command.description) {
      parts.push(`Description: ${command.description}`);
    }
    if (command.whenToUse) {
      parts.push(`When to use: ${command.whenToUse}`);
    }
    const skillAllowedTools = command.allowedTools ?? [];
    if (skillAllowedTools.length > 0) {
      parts.push(`This skill grants workers additional tool permissions: ${skillAllowedTools.join(", ")}`);
    }
    parts.push(`
Instruct a worker to use this skill by including "Use the /${command.name} skill" in your Agent prompt. The worker has access to the Skill tool and will receive the skill's content and permissions when it invokes it.`);
    const summaryContent = [{
      type: "text",
      text: parts.join("\n")
    }];
    return {
      messages: [createUserMessage({
        content: metadata2,
        uuid
      }), createUserMessage({
        content: summaryContent,
        isMeta: true
      })],
      shouldQuery: true,
      model: command.model,
      effort: command.effort,
      command
    };
  }
  const result = await command.getPromptForCommand(args, context);
  const hooksAllowedForThisSkill = !isRestrictedToPluginOnly("hooks") || isSourceAdminTrusted(command.source);
  if (command.hooks && hooksAllowedForThisSkill) {
    const sessionId = getSessionId();
    registerSkillHooks(context.setAppState, sessionId, command.hooks, command.name, command.type === "prompt" ? command.skillRoot : void 0);
  }
  const skillPath = command.source ? `${command.source}:${command.name}` : command.name;
  const skillContent = result.filter((b) => b.type === "text").map((b) => b.text).join("\n\n");
  addInvokedSkill(command.name, skillPath, skillContent, getAgentContext()?.agentId ?? null);
  const metadata = formatCommandLoadingMetadata(command, args);
  const additionalAllowedTools = parseToolListFromCLI(command.allowedTools ?? []);
  const mainMessageContent = imageContentBlocks.length > 0 || precedingInputBlocks.length > 0 ? [...imageContentBlocks, ...precedingInputBlocks, ...result] : result;
  const attachmentMessages = await toArray(getAttachmentMessages(
    result.filter((block) => block.type === "text").map((block) => block.text).join(" "),
    context,
    null,
    [],
    // queuedCommands - handled by query.ts for mid-turn attachments
    context.messages,
    "repl_main_thread",
    {
      skipSkillDiscovery: true
    }
  ));
  const messages = [createUserMessage({
    content: metadata,
    uuid
  }), createUserMessage({
    content: mainMessageContent,
    isMeta: true
  }), ...attachmentMessages, createAttachmentMessage({
    type: "command_permissions",
    allowedTools: additionalAllowedTools,
    model: command.model
  })];
  return {
    messages,
    shouldQuery: true,
    allowedTools: additionalAllowedTools,
    model: command.model,
    effort: command.effort,
    command
  };
}
var MCP_SETTLE_POLL_MS, MCP_SETTLE_TIMEOUT_MS;
var init_processSlashCommand = __esm({
  "src/utils/processUserInput/processSlashCommand.tsx"() {
    init_bun_bundle();
    init_state();
    init_commands();
    init_messages();
    init_state();
    init_xml();
    init_analytics();
    init_dumpPrompts();
    init_compact();
    init_microCompact();
    init_runAgent();
    init_UI();
    init_abortController();
    init_agentContext();
    init_attachments();
    init_debug();
    init_envUtils();
    init_errors();
    init_file();
    init_forkedAgent();
    init_fsOperations();
    init_fullscreen();
    init_generators();
    init_registerSkillHooks();
    init_log();
    init_messageQueueManager();
    init_messages2();
    init_permissionSetup();
    init_permissions();
    init_pluginIdentifier();
    init_pluginOnlyPolicy();
    init_slashCommandParsing();
    init_sleep();
    init_skillUsageTracking();
    init_events();
    init_pluginTelemetry();
    init_tokens();
    init_uuid();
    init_workloadContext();
    MCP_SETTLE_POLL_MS = 200;
    MCP_SETTLE_TIMEOUT_MS = 1e4;
  }
});
init_processSlashCommand();
export {
  formatSkillLoadingMetadata,
  looksLikeCommand,
  processPromptSlashCommand,
  processSlashCommand
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL2hvb2tzL3JlZ2lzdGVyU2tpbGxIb29rcy50cyIsICIuLi8uLi9zcmMvdXRpbHMvcHJvY2Vzc1VzZXJJbnB1dC9wcm9jZXNzU2xhc2hDb21tYW5kLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgSE9PS19FVkVOVFMgfSBmcm9tICdzcmMvZW50cnlwb2ludHMvYWdlbnRTZGtUeXBlcy5qcydcbmltcG9ydCB0eXBlIHsgQXBwU3RhdGUgfSBmcm9tICdzcmMvc3RhdGUvQXBwU3RhdGUuanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuLi9kZWJ1Zy5qcydcbmltcG9ydCB0eXBlIHsgSG9va3NTZXR0aW5ncyB9IGZyb20gJy4uL3NldHRpbmdzL3R5cGVzLmpzJ1xuaW1wb3J0IHsgYWRkU2Vzc2lvbkhvb2ssIHJlbW92ZVNlc3Npb25Ib29rIH0gZnJvbSAnLi9zZXNzaW9uSG9va3MuanMnXG5cbi8qKlxuICogUmVnaXN0ZXJzIGhvb2tzIGZyb20gYSBza2lsbCdzIGZyb250bWF0dGVyIGFzIHNlc3Npb24gaG9va3MuXG4gKlxuICogSG9va3MgYXJlIHJlZ2lzdGVyZWQgYXMgc2Vzc2lvbi1zY29wZWQgaG9va3MgdGhhdCBwZXJzaXN0IGZvciB0aGUgZHVyYXRpb25cbiAqIG9mIHRoZSBzZXNzaW9uLiBJZiBhIGhvb2sgaGFzIGBvbmNlOiB0cnVlYCwgaXQgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IHJlbW92ZWRcbiAqIGFmdGVyIGl0cyBmaXJzdCBzdWNjZXNzZnVsIGV4ZWN1dGlvbi5cbiAqXG4gKiBAcGFyYW0gc2V0QXBwU3RhdGUgLSBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIGFwcCBzdGF0ZVxuICogQHBhcmFtIHNlc3Npb25JZCAtIFRoZSBjdXJyZW50IHNlc3Npb24gSURcbiAqIEBwYXJhbSBob29rcyAtIFRoZSBob29rcyBzZXR0aW5ncyBmcm9tIHRoZSBza2lsbCdzIGZyb250bWF0dGVyXG4gKiBAcGFyYW0gc2tpbGxOYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHNraWxsIChmb3IgbG9nZ2luZylcbiAqIEBwYXJhbSBza2lsbFJvb3QgLSBUaGUgYmFzZSBkaXJlY3Rvcnkgb2YgdGhlIHNraWxsIChmb3IgQ0xBVURFX1BMVUdJTl9ST09UIGVudiB2YXIpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclNraWxsSG9va3MoXG4gIHNldEFwcFN0YXRlOiAodXBkYXRlcjogKHByZXY6IEFwcFN0YXRlKSA9PiBBcHBTdGF0ZSkgPT4gdm9pZCxcbiAgc2Vzc2lvbklkOiBzdHJpbmcsXG4gIGhvb2tzOiBIb29rc1NldHRpbmdzLFxuICBza2lsbE5hbWU6IHN0cmluZyxcbiAgc2tpbGxSb290Pzogc3RyaW5nLFxuKTogdm9pZCB7XG4gIGxldCByZWdpc3RlcmVkQ291bnQgPSAwXG5cbiAgZm9yIChjb25zdCBldmVudE5hbWUgb2YgSE9PS19FVkVOVFMpIHtcbiAgICBjb25zdCBtYXRjaGVycyA9IGhvb2tzW2V2ZW50TmFtZV1cbiAgICBpZiAoIW1hdGNoZXJzKSBjb250aW51ZVxuXG4gICAgZm9yIChjb25zdCBtYXRjaGVyIG9mIG1hdGNoZXJzKSB7XG4gICAgICBmb3IgKGNvbnN0IGhvb2sgb2YgbWF0Y2hlci5ob29rcykge1xuICAgICAgICAvLyBGb3Igb25jZTogdHJ1ZSBob29rcywgdXNlIG9uSG9va1N1Y2Nlc3MgY2FsbGJhY2sgdG8gcmVtb3ZlIGFmdGVyIGV4ZWN1dGlvblxuICAgICAgICBjb25zdCBvbkhvb2tTdWNjZXNzID0gaG9vay5vbmNlXG4gICAgICAgICAgPyAoKSA9PiB7XG4gICAgICAgICAgICAgIGxvZ0ZvckRlYnVnZ2luZyhcbiAgICAgICAgICAgICAgICBgUmVtb3Zpbmcgb25lLXNob3QgaG9vayBmb3IgZXZlbnQgJHtldmVudE5hbWV9IGluIHNraWxsICcke3NraWxsTmFtZX0nYCxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZW1vdmVTZXNzaW9uSG9vayhzZXRBcHBTdGF0ZSwgc2Vzc2lvbklkLCBldmVudE5hbWUsIGhvb2spXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiB1bmRlZmluZWRcblxuICAgICAgICBhZGRTZXNzaW9uSG9vayhcbiAgICAgICAgICBzZXRBcHBTdGF0ZSxcbiAgICAgICAgICBzZXNzaW9uSWQsXG4gICAgICAgICAgZXZlbnROYW1lLFxuICAgICAgICAgIG1hdGNoZXIubWF0Y2hlciB8fCAnJyxcbiAgICAgICAgICBob29rLFxuICAgICAgICAgIG9uSG9va1N1Y2Nlc3MsXG4gICAgICAgICAgc2tpbGxSb290LFxuICAgICAgICApXG4gICAgICAgIHJlZ2lzdGVyZWRDb3VudCsrXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHJlZ2lzdGVyZWRDb3VudCA+IDApIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICBgUmVnaXN0ZXJlZCAke3JlZ2lzdGVyZWRDb3VudH0gaG9va3MgZnJvbSBza2lsbCAnJHtza2lsbE5hbWV9J2AsXG4gICAgKVxuICB9XG59XG4iLCAiaW1wb3J0IHsgZmVhdHVyZSB9IGZyb20gJ2J1bjpidW5kbGUnXG5pbXBvcnQgdHlwZSB7XG4gIENvbnRlbnRCbG9ja1BhcmFtLFxuICBUZXh0QmxvY2tQYXJhbSxcbn0gZnJvbSAnQGFudGhyb3BpYy1haS9zZGsvcmVzb3VyY2VzJ1xuaW1wb3J0IHsgcmFuZG9tVVVJRCB9IGZyb20gJ2NyeXB0bydcbmltcG9ydCB7IHNldFByb21wdElkIH0gZnJvbSAnc3JjL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB7XG4gIGJ1aWx0SW5Db21tYW5kTmFtZXMsXG4gIHR5cGUgQ29tbWFuZCxcbiAgdHlwZSBDb21tYW5kQmFzZSxcbiAgZmluZENvbW1hbmQsXG4gIGdldENvbW1hbmQsXG4gIGdldENvbW1hbmROYW1lLFxuICBoYXNDb21tYW5kLFxuICB0eXBlIFByb21wdENvbW1hbmQsXG59IGZyb20gJ3NyYy9jb21tYW5kcy5qcydcbmltcG9ydCB7IE5PX0NPTlRFTlRfTUVTU0FHRSB9IGZyb20gJ3NyYy9jb25zdGFudHMvbWVzc2FnZXMuanMnXG5pbXBvcnQgdHlwZSB7IFNldFRvb2xKU1hGbiwgVG9vbFVzZUNvbnRleHQgfSBmcm9tICdzcmMvVG9vbC5qcydcbmltcG9ydCB0eXBlIHtcbiAgQXNzaXN0YW50TWVzc2FnZSxcbiAgQXR0YWNobWVudE1lc3NhZ2UsXG4gIE1lc3NhZ2UsXG4gIE5vcm1hbGl6ZWRVc2VyTWVzc2FnZSxcbiAgUHJvZ3Jlc3NNZXNzYWdlLFxuICBVc2VyTWVzc2FnZSxcbn0gZnJvbSAnc3JjL3R5cGVzL21lc3NhZ2UuanMnXG5pbXBvcnQgeyBhZGRJbnZva2VkU2tpbGwsIGdldFNlc3Npb25JZCB9IGZyb20gJy4uLy4uL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB7IENPTU1BTkRfTUVTU0FHRV9UQUcsIENPTU1BTkRfTkFNRV9UQUcgfSBmcm9tICcuLi8uLi9jb25zdGFudHMveG1sLmpzJ1xuaW1wb3J0IHR5cGUgeyBDYW5Vc2VUb29sRm4gfSBmcm9tICcuLi8uLi9ob29rcy91c2VDYW5Vc2VUb29sLmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICB0eXBlIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19QSUlfVEFHR0VELFxuICBsb2dFdmVudCxcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHsgZ2V0RHVtcFByb21wdHNQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpL2R1bXBQcm9tcHRzLmpzJ1xuaW1wb3J0IHsgYnVpbGRQb3N0Q29tcGFjdE1lc3NhZ2VzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29tcGFjdC9jb21wYWN0LmpzJ1xuaW1wb3J0IHsgcmVzZXRNaWNyb2NvbXBhY3RTdGF0ZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbXBhY3QvbWljcm9Db21wYWN0LmpzJ1xuaW1wb3J0IHR5cGUgeyBQcm9ncmVzcyBhcyBBZ2VudFByb2dyZXNzIH0gZnJvbSAnLi4vLi4vdG9vbHMvQWdlbnRUb29sL0FnZW50VG9vbC5qcydcbmltcG9ydCB7IHJ1bkFnZW50IH0gZnJvbSAnLi4vLi4vdG9vbHMvQWdlbnRUb29sL3J1bkFnZW50LmpzJ1xuaW1wb3J0IHsgcmVuZGVyVG9vbFVzZVByb2dyZXNzTWVzc2FnZSB9IGZyb20gJy4uLy4uL3Rvb2xzL0FnZW50VG9vbC9VSS5qcydcbmltcG9ydCB0eXBlIHsgQ29tbWFuZFJlc3VsdERpc3BsYXkgfSBmcm9tICcuLi8uLi90eXBlcy9jb21tYW5kLmpzJ1xuaW1wb3J0IHsgY3JlYXRlQWJvcnRDb250cm9sbGVyIH0gZnJvbSAnLi4vYWJvcnRDb250cm9sbGVyLmpzJ1xuaW1wb3J0IHsgZ2V0QWdlbnRDb250ZXh0IH0gZnJvbSAnLi4vYWdlbnRDb250ZXh0LmpzJ1xuaW1wb3J0IHtcbiAgY3JlYXRlQXR0YWNobWVudE1lc3NhZ2UsXG4gIGdldEF0dGFjaG1lbnRNZXNzYWdlcyxcbn0gZnJvbSAnLi4vYXR0YWNobWVudHMuanMnXG5pbXBvcnQgeyBsb2dGb3JEZWJ1Z2dpbmcgfSBmcm9tICcuLi9kZWJ1Zy5qcydcbmltcG9ydCB7IGlzRW52VHJ1dGh5IH0gZnJvbSAnLi4vZW52VXRpbHMuanMnXG5pbXBvcnQgeyBBYm9ydEVycm9yLCBNYWxmb3JtZWRDb21tYW5kRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMuanMnXG5pbXBvcnQgeyBnZXREaXNwbGF5UGF0aCB9IGZyb20gJy4uL2ZpbGUuanMnXG5pbXBvcnQge1xuICBleHRyYWN0UmVzdWx0VGV4dCxcbiAgcHJlcGFyZUZvcmtlZENvbW1hbmRDb250ZXh0LFxufSBmcm9tICcuLi9mb3JrZWRBZ2VudC5qcydcbmltcG9ydCB7IGdldEZzSW1wbGVtZW50YXRpb24gfSBmcm9tICcuLi9mc09wZXJhdGlvbnMuanMnXG5pbXBvcnQgeyBpc0Z1bGxzY3JlZW5FbnZFbmFibGVkIH0gZnJvbSAnLi4vZnVsbHNjcmVlbi5qcydcbmltcG9ydCB7IHRvQXJyYXkgfSBmcm9tICcuLi9nZW5lcmF0b3JzLmpzJ1xuaW1wb3J0IHsgcmVnaXN0ZXJTa2lsbEhvb2tzIH0gZnJvbSAnLi4vaG9va3MvcmVnaXN0ZXJTa2lsbEhvb2tzLmpzJ1xuaW1wb3J0IHsgbG9nRXJyb3IgfSBmcm9tICcuLi9sb2cuanMnXG5pbXBvcnQgeyBlbnF1ZXVlUGVuZGluZ05vdGlmaWNhdGlvbiB9IGZyb20gJy4uL21lc3NhZ2VRdWV1ZU1hbmFnZXIuanMnXG5pbXBvcnQge1xuICBjcmVhdGVDb21tYW5kSW5wdXRNZXNzYWdlLFxuICBjcmVhdGVTeW50aGV0aWNVc2VyQ2F2ZWF0TWVzc2FnZSxcbiAgY3JlYXRlU3lzdGVtTWVzc2FnZSxcbiAgY3JlYXRlVXNlckludGVycnVwdGlvbk1lc3NhZ2UsXG4gIGNyZWF0ZVVzZXJNZXNzYWdlLFxuICBmb3JtYXRDb21tYW5kSW5wdXRUYWdzLFxuICBpc0NvbXBhY3RCb3VuZGFyeU1lc3NhZ2UsXG4gIGlzU3lzdGVtTG9jYWxDb21tYW5kTWVzc2FnZSxcbiAgbm9ybWFsaXplTWVzc2FnZXMsXG4gIHByZXBhcmVVc2VyQ29udGVudCxcbn0gZnJvbSAnLi4vbWVzc2FnZXMuanMnXG5pbXBvcnQgdHlwZSB7IE1vZGVsQWxpYXMgfSBmcm9tICcuLi9tb2RlbC9hbGlhc2VzLmpzJ1xuaW1wb3J0IHsgcGFyc2VUb29sTGlzdEZyb21DTEkgfSBmcm9tICcuLi9wZXJtaXNzaW9ucy9wZXJtaXNzaW9uU2V0dXAuanMnXG5pbXBvcnQgeyBoYXNQZXJtaXNzaW9uc1RvVXNlVG9vbCB9IGZyb20gJy4uL3Blcm1pc3Npb25zL3Blcm1pc3Npb25zLmpzJ1xuaW1wb3J0IHtcbiAgaXNPZmZpY2lhbE1hcmtldHBsYWNlTmFtZSxcbiAgcGFyc2VQbHVnaW5JZGVudGlmaWVyLFxufSBmcm9tICcuLi9wbHVnaW5zL3BsdWdpbklkZW50aWZpZXIuanMnXG5pbXBvcnQge1xuICBpc1Jlc3RyaWN0ZWRUb1BsdWdpbk9ubHksXG4gIGlzU291cmNlQWRtaW5UcnVzdGVkLFxufSBmcm9tICcuLi9zZXR0aW5ncy9wbHVnaW5Pbmx5UG9saWN5LmpzJ1xuaW1wb3J0IHsgcGFyc2VTbGFzaENvbW1hbmQgfSBmcm9tICcuLi9zbGFzaENvbW1hbmRQYXJzaW5nLmpzJ1xuaW1wb3J0IHsgc2xlZXAgfSBmcm9tICcuLi9zbGVlcC5qcydcbmltcG9ydCB7IHJlY29yZFNraWxsVXNhZ2UgfSBmcm9tICcuLi9zdWdnZXN0aW9ucy9za2lsbFVzYWdlVHJhY2tpbmcuanMnXG5pbXBvcnQgeyBsb2dPVGVsRXZlbnQsIHJlZGFjdElmRGlzYWJsZWQgfSBmcm9tICcuLi90ZWxlbWV0cnkvZXZlbnRzLmpzJ1xuaW1wb3J0IHsgYnVpbGRQbHVnaW5Db21tYW5kVGVsZW1ldHJ5RmllbGRzIH0gZnJvbSAnLi4vdGVsZW1ldHJ5L3BsdWdpblRlbGVtZXRyeS5qcydcbmltcG9ydCB7IGdldEFzc2lzdGFudE1lc3NhZ2VDb250ZW50TGVuZ3RoIH0gZnJvbSAnLi4vdG9rZW5zLmpzJ1xuaW1wb3J0IHsgY3JlYXRlQWdlbnRJZCB9IGZyb20gJy4uL3V1aWQuanMnXG5pbXBvcnQgeyBnZXRXb3JrbG9hZCB9IGZyb20gJy4uL3dvcmtsb2FkQ29udGV4dC5qcydcbmltcG9ydCB0eXBlIHtcbiAgUHJvY2Vzc1VzZXJJbnB1dEJhc2VSZXN1bHQsXG4gIFByb2Nlc3NVc2VySW5wdXRDb250ZXh0LFxufSBmcm9tICcuL3Byb2Nlc3NVc2VySW5wdXQuanMnXG5cbnR5cGUgU2xhc2hDb21tYW5kUmVzdWx0ID0gUHJvY2Vzc1VzZXJJbnB1dEJhc2VSZXN1bHQgJiB7XG4gIGNvbW1hbmQ6IENvbW1hbmRcbn1cblxuLy8gUG9sbCBpbnRlcnZhbCBhbmQgZGVhZGxpbmUgZm9yIE1DUCBzZXR0bGUgYmVmb3JlIGxhdW5jaGluZyBhIGJhY2tncm91bmRcbi8vIGZvcmtlZCBzdWJhZ2VudC4gTUNQIHNlcnZlcnMgdHlwaWNhbGx5IGNvbm5lY3Qgd2l0aGluIDEtM3Mgb2Ygc3RhcnR1cDtcbi8vIDEwcyBoZWFkcm9vbSBjb3ZlcnMgc2xvdyBTU0UgaGFuZHNoYWtlcy5cbmNvbnN0IE1DUF9TRVRUTEVfUE9MTF9NUyA9IDIwMFxuY29uc3QgTUNQX1NFVFRMRV9USU1FT1VUX01TID0gMTBfMDAwXG5cbi8qKlxuICogRXhlY3V0ZXMgYSBzbGFzaCBjb21tYW5kIHdpdGggY29udGV4dDogZm9yayBpbiBhIHN1Yi1hZ2VudC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZUZvcmtlZFNsYXNoQ29tbWFuZChcbiAgY29tbWFuZDogQ29tbWFuZEJhc2UgJiBQcm9tcHRDb21tYW5kLFxuICBhcmdzOiBzdHJpbmcsXG4gIGNvbnRleHQ6IFByb2Nlc3NVc2VySW5wdXRDb250ZXh0LFxuICBwcmVjZWRpbmdJbnB1dEJsb2NrczogQ29udGVudEJsb2NrUGFyYW1bXSxcbiAgc2V0VG9vbEpTWDogU2V0VG9vbEpTWEZuLFxuICBjYW5Vc2VUb29sOiBDYW5Vc2VUb29sRm4sXG4pOiBQcm9taXNlPFNsYXNoQ29tbWFuZFJlc3VsdD4ge1xuICBjb25zdCBhZ2VudElkID0gY3JlYXRlQWdlbnRJZCgpXG5cbiAgY29uc3QgcGx1Z2luTWFya2V0cGxhY2UgPSBjb21tYW5kLnBsdWdpbkluZm9cbiAgICA/IHBhcnNlUGx1Z2luSWRlbnRpZmllcihjb21tYW5kLnBsdWdpbkluZm8ucmVwb3NpdG9yeSkubWFya2V0cGxhY2VcbiAgICA6IHVuZGVmaW5lZFxuICBsb2dFdmVudCgndGVuZ3Vfc2xhc2hfY29tbWFuZF9mb3JrZWQnLCB7XG4gICAgY29tbWFuZF9uYW1lOlxuICAgICAgY29tbWFuZC5uYW1lIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgaW52b2NhdGlvbl90cmlnZ2VyOlxuICAgICAgJ3VzZXItc2xhc2gnIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgLi4uKGNvbW1hbmQucGx1Z2luSW5mbyAmJiB7XG4gICAgICBfUFJPVE9fcGx1Z2luX25hbWU6IGNvbW1hbmQucGx1Z2luSW5mby5wbHVnaW5NYW5pZmVzdFxuICAgICAgICAubmFtZSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfUElJX1RBR0dFRCxcbiAgICAgIC4uLihwbHVnaW5NYXJrZXRwbGFjZSAmJiB7XG4gICAgICAgIF9QUk9UT19tYXJrZXRwbGFjZV9uYW1lOlxuICAgICAgICAgIHBsdWdpbk1hcmtldHBsYWNlIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19QSUlfVEFHR0VELFxuICAgICAgfSksXG4gICAgICAuLi5idWlsZFBsdWdpbkNvbW1hbmRUZWxlbWV0cnlGaWVsZHMoY29tbWFuZC5wbHVnaW5JbmZvKSxcbiAgICB9KSxcbiAgfSlcblxuICBjb25zdCB7IHNraWxsQ29udGVudCwgbW9kaWZpZWRHZXRBcHBTdGF0ZSwgYmFzZUFnZW50LCBwcm9tcHRNZXNzYWdlcyB9ID1cbiAgICBhd2FpdCBwcmVwYXJlRm9ya2VkQ29tbWFuZENvbnRleHQoY29tbWFuZCwgYXJncywgY29udGV4dClcblxuICAvLyBNZXJnZSBza2lsbCdzIGVmZm9ydCBpbnRvIHRoZSBhZ2VudCBkZWZpbml0aW9uIHNvIHJ1bkFnZW50IGFwcGxpZXMgaXRcbiAgY29uc3QgYWdlbnREZWZpbml0aW9uID1cbiAgICBjb21tYW5kLmVmZm9ydCAhPT0gdW5kZWZpbmVkXG4gICAgICA/IHsgLi4uYmFzZUFnZW50LCBlZmZvcnQ6IGNvbW1hbmQuZWZmb3J0IH1cbiAgICAgIDogYmFzZUFnZW50XG5cbiAgbG9nRm9yRGVidWdnaW5nKFxuICAgIGBFeGVjdXRpbmcgZm9ya2VkIHNsYXNoIGNvbW1hbmQgLyR7Y29tbWFuZC5uYW1lfSB3aXRoIGFnZW50ICR7YWdlbnREZWZpbml0aW9uLmFnZW50VHlwZX1gLFxuICApXG5cbiAgLy8gQXNzaXN0YW50IG1vZGU6IGZpcmUtYW5kLWZvcmdldC4gTGF1bmNoIHN1YmFnZW50IGluIGJhY2tncm91bmQsIHJldHVyblxuICAvLyBpbW1lZGlhdGVseSwgcmUtZW5xdWV1ZSB0aGUgcmVzdWx0IGFzIGFuIGlzTWV0YSBwcm9tcHQgd2hlbiBkb25lLlxuICAvLyBXaXRob3V0IHRoaXMsIE4gc2NoZWR1bGVkIHRhc2tzIG9uIHN0YXJ0dXAgPSBOIHNlcmlhbCAoc3ViYWdlbnQgKyBtYWluXG4gIC8vIGFnZW50IHR1cm4pIGN5Y2xlcyBibG9ja2luZyB1c2VyIGlucHV0LiBXaXRoIHRoaXMsIE4gc3ViYWdlbnRzIHJ1biBpblxuICAvLyBwYXJhbGxlbCBhbmQgcmVzdWx0cyB0cmlja2xlIGludG8gdGhlIHF1ZXVlIGFzIHRoZXkgZmluaXNoLlxuICAvL1xuICAvLyBHYXRlZCBvbiBrYWlyb3NFbmFibGVkIChub3QgQ0xBVURFX0NPREVfQlJJRUYpIGJlY2F1c2UgdGhlIGNsb3NlZCBsb29wXG4gIC8vIGRlcGVuZHMgb24gYXNzaXN0YW50LW1vZGUgaW52YXJpYW50czogc2NoZWR1bGVkX3Rhc2tzLmpzb24gZXhpc3RzLFxuICAvLyB0aGUgbWFpbiBhZ2VudCBrbm93cyB0byBwaXBlIHJlc3VsdHMgdGhyb3VnaCBTZW5kVXNlck1lc3NhZ2UsIGFuZFxuICAvLyBpc01ldGEgcHJvbXB0cyBhcmUgaGlkZGVuLiBPdXRzaWRlIGFzc2lzdGFudCBtb2RlLCBjb250ZXh0OmZvcmsgY29tbWFuZHNcbiAgLy8gYXJlIHVzZXItaW52b2tlZCBza2lsbHMgKC9jb21taXQgZXRjLikgdGhhdCBzaG91bGQgcnVuIHN5bmNocm9ub3VzbHlcbiAgLy8gd2l0aCB0aGUgcHJvZ3Jlc3MgVUkuXG4gIGlmIChmZWF0dXJlKCdLQUlST1MnKSAmJiAoYXdhaXQgY29udGV4dC5nZXRBcHBTdGF0ZSgpKS5rYWlyb3NFbmFibGVkKSB7XG4gICAgLy8gU3RhbmRhbG9uZSBhYm9ydENvbnRyb2xsZXIg4oCUIGJhY2tncm91bmQgc3ViYWdlbnRzIHN1cnZpdmUgbWFpbi10aHJlYWRcbiAgICAvLyBFU0MgKHNhbWUgcG9saWN5IGFzIEFnZW50VG9vbCdzIGFzeW5jIHBhdGgpLiBUaGV5J3JlIGNyb24tZHJpdmVuOyBpZlxuICAgIC8vIGtpbGxlZCBtaWQtcnVuIHRoZXkganVzdCByZS1maXJlIG9uIHRoZSBuZXh0IHNjaGVkdWxlLlxuICAgIGNvbnN0IGJnQWJvcnRDb250cm9sbGVyID0gY3JlYXRlQWJvcnRDb250cm9sbGVyKClcbiAgICBjb25zdCBjb21tYW5kTmFtZSA9IGdldENvbW1hbmROYW1lKGNvbW1hbmQpXG5cbiAgICAvLyBXb3JrbG9hZDogaGFuZGxlUHJvbXB0U3VibWl0IHdyYXBzIHRoZSBlbnRpcmUgdHVybiBpbiBydW5XaXRoV29ya2xvYWRcbiAgICAvLyAoQXN5bmNMb2NhbFN0b3JhZ2UpLiBBTFMgY29udGV4dCBpcyBjYXB0dXJlZCB3aGVuIHRoaXMgYHZvaWRgIGZpcmVzXG4gICAgLy8gYW5kIHN1cnZpdmVzIGV2ZXJ5IGF3YWl0IGluc2lkZSDigJQgaXNvbGF0ZWQgZnJvbSB0aGUgcGFyZW50J3NcbiAgICAvLyBjb250aW51YXRpb24uIFRoZSBkZXRhY2hlZCBjbG9zdXJlJ3MgcnVuQWdlbnQgY2FsbHMgc2VlIHRoZSBjcm9uIHRhZ1xuICAgIC8vIGF1dG9tYXRpY2FsbHkuIFdlIHN0aWxsIGNhcHR1cmUgdGhlIHZhbHVlIGhlcmUgT05MWSBmb3IgdGhlXG4gICAgLy8gcmUtZW5xdWV1ZWQgcmVzdWx0IHByb21wdCBiZWxvdzogdGhhdCBzZWNvbmQgdHVybiBydW5zIGluIGEgZnJlc2hcbiAgICAvLyBoYW5kbGVQcm9tcHRTdWJtaXQg4oaSIGZyZXNoIHJ1bldpdGhXb3JrbG9hZCBib3VuZGFyeSAod2hpY2ggYWx3YXlzXG4gICAgLy8gZXN0YWJsaXNoZXMgYSBuZXcgY29udGV4dCwgZXZlbiBmb3IgYHVuZGVmaW5lZGApIOKGkiBzbyBpdCBuZWVkcyBpdHNcbiAgICAvLyBvd24gUXVldWVkQ29tbWFuZC53b3JrbG9hZCB0YWcgdG8gcHJlc2VydmUgYXR0cmlidXRpb24uXG4gICAgY29uc3Qgc3Bhd25UaW1lV29ya2xvYWQgPSBnZXRXb3JrbG9hZCgpXG5cbiAgICAvLyBSZS1lbnRlciB0aGUgcXVldWUgYXMgYSBoaWRkZW4gcHJvbXB0LiBpc01ldGE6IGhpZGVzIGZyb20gcXVldWVcbiAgICAvLyBwcmV2aWV3ICsgcGxhY2Vob2xkZXIgKyB0cmFuc2NyaXB0LiBza2lwU2xhc2hDb21tYW5kczogcHJldmVudHNcbiAgICAvLyByZS1wYXJzaW5nIGlmIHRoZSByZXN1bHQgdGV4dCBoYXBwZW5zIHRvIHN0YXJ0IHdpdGggJy8nLiBXaGVuXG4gICAgLy8gZHJhaW5lZCwgdGhpcyB0cmlnZ2VycyBhIG1haW4tYWdlbnQgdHVybiB0aGF0IHNlZXMgdGhlIHJlc3VsdCBhbmRcbiAgICAvLyBkZWNpZGVzIHdoZXRoZXIgdG8gU2VuZFVzZXJNZXNzYWdlLiBQcm9wYWdhdGUgd29ya2xvYWQgc28gdGhhdFxuICAgIC8vIHNlY29uZCB0dXJuIGlzIGFsc28gdGFnZ2VkLlxuICAgIGNvbnN0IGVucXVldWVSZXN1bHQgPSAodmFsdWU6IHN0cmluZyk6IHZvaWQgPT5cbiAgICAgIGVucXVldWVQZW5kaW5nTm90aWZpY2F0aW9uKHtcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIG1vZGU6ICdwcm9tcHQnLFxuICAgICAgICBwcmlvcml0eTogJ2xhdGVyJyxcbiAgICAgICAgaXNNZXRhOiB0cnVlLFxuICAgICAgICBza2lwU2xhc2hDb21tYW5kczogdHJ1ZSxcbiAgICAgICAgd29ya2xvYWQ6IHNwYXduVGltZVdvcmtsb2FkLFxuICAgICAgfSlcblxuICAgIHZvaWQgKGFzeW5jICgpID0+IHtcbiAgICAgIC8vIFdhaXQgZm9yIE1DUCBzZXJ2ZXJzIHRvIHNldHRsZS4gU2NoZWR1bGVkIHRhc2tzIGZpcmUgYXQgc3RhcnR1cCBhbmRcbiAgICAgIC8vIGFsbCBOIGRyYWluIHdpdGhpbiB+MW1zIChzaW5jZSB3ZSByZXR1cm4gaW1tZWRpYXRlbHkpLCBjYXB0dXJpbmdcbiAgICAgIC8vIGNvbnRleHQub3B0aW9ucy50b29scyBiZWZvcmUgTUNQIGNvbm5lY3RzLiBUaGUgc3luYyBwYXRoXG4gICAgICAvLyBhY2NpZGVudGFsbHkgYXZvaWRlZCB0aGlzIOKAlCB0YXNrcyBzZXJpYWxpemVkLCBzbyB0YXNrIE4ncyBkcmFpblxuICAgICAgLy8gaGFwcGVuZWQgYWZ0ZXIgdGFzayBOLTEncyAzMHMgcnVuLCBieSB3aGljaCB0aW1lIE1DUCB3YXMgdXAuXG4gICAgICAvLyBQb2xsIHVudGlsIG5vICdwZW5kaW5nJyBjbGllbnRzIHJlbWFpbiwgdGhlbiByZWZyZXNoLlxuICAgICAgY29uc3QgZGVhZGxpbmUgPSBEYXRlLm5vdygpICsgTUNQX1NFVFRMRV9USU1FT1VUX01TXG4gICAgICB3aGlsZSAoRGF0ZS5ub3coKSA8IGRlYWRsaW5lKSB7XG4gICAgICAgIGNvbnN0IHMgPSBjb250ZXh0LmdldEFwcFN0YXRlKClcbiAgICAgICAgaWYgKCFzLm1jcC5jbGllbnRzLnNvbWUoYyA9PiBjLnR5cGUgPT09ICdwZW5kaW5nJykpIGJyZWFrXG4gICAgICAgIGF3YWl0IHNsZWVwKE1DUF9TRVRUTEVfUE9MTF9NUylcbiAgICAgIH1cbiAgICAgIGNvbnN0IGZyZXNoVG9vbHMgPVxuICAgICAgICBjb250ZXh0Lm9wdGlvbnMucmVmcmVzaFRvb2xzPy4oKSA/PyBjb250ZXh0Lm9wdGlvbnMudG9vbHNcblxuICAgICAgY29uc3QgYWdlbnRNZXNzYWdlczogTWVzc2FnZVtdID0gW11cbiAgICAgIGZvciBhd2FpdCAoY29uc3QgbWVzc2FnZSBvZiBydW5BZ2VudCh7XG4gICAgICAgIGFnZW50RGVmaW5pdGlvbixcbiAgICAgICAgcHJvbXB0TWVzc2FnZXMsXG4gICAgICAgIHRvb2xVc2VDb250ZXh0OiB7XG4gICAgICAgICAgLi4uY29udGV4dCxcbiAgICAgICAgICBnZXRBcHBTdGF0ZTogbW9kaWZpZWRHZXRBcHBTdGF0ZSxcbiAgICAgICAgICBhYm9ydENvbnRyb2xsZXI6IGJnQWJvcnRDb250cm9sbGVyLFxuICAgICAgICB9LFxuICAgICAgICBjYW5Vc2VUb29sLFxuICAgICAgICBpc0FzeW5jOiB0cnVlLFxuICAgICAgICBxdWVyeVNvdXJjZTogJ2FnZW50OmN1c3RvbScsXG4gICAgICAgIG1vZGVsOiBjb21tYW5kLm1vZGVsIGFzIE1vZGVsQWxpYXMgfCB1bmRlZmluZWQsXG4gICAgICAgIGF2YWlsYWJsZVRvb2xzOiBmcmVzaFRvb2xzLFxuICAgICAgICBvdmVycmlkZTogeyBhZ2VudElkIH0sXG4gICAgICB9KSkge1xuICAgICAgICBhZ2VudE1lc3NhZ2VzLnB1c2gobWVzc2FnZSlcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3VsdFRleHQgPSBleHRyYWN0UmVzdWx0VGV4dChhZ2VudE1lc3NhZ2VzLCAnQ29tbWFuZCBjb21wbGV0ZWQnKVxuICAgICAgbG9nRm9yRGVidWdnaW5nKFxuICAgICAgICBgQmFja2dyb3VuZCBmb3JrZWQgY29tbWFuZCAvJHtjb21tYW5kTmFtZX0gY29tcGxldGVkIChhZ2VudCAke2FnZW50SWR9KWAsXG4gICAgICApXG4gICAgICBlbnF1ZXVlUmVzdWx0KFxuICAgICAgICBgPHNjaGVkdWxlZC10YXNrLXJlc3VsdCBjb21tYW5kPVwiLyR7Y29tbWFuZE5hbWV9XCI+XFxuJHtyZXN1bHRUZXh0fVxcbjwvc2NoZWR1bGVkLXRhc2stcmVzdWx0PmAsXG4gICAgICApXG4gICAgfSkoKS5jYXRjaChlcnIgPT4ge1xuICAgICAgbG9nRXJyb3IoZXJyKVxuICAgICAgZW5xdWV1ZVJlc3VsdChcbiAgICAgICAgYDxzY2hlZHVsZWQtdGFzay1yZXN1bHQgY29tbWFuZD1cIi8ke2NvbW1hbmROYW1lfVwiIHN0YXR1cz1cImZhaWxlZFwiPlxcbiR7ZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFN0cmluZyhlcnIpfVxcbjwvc2NoZWR1bGVkLXRhc2stcmVzdWx0PmAsXG4gICAgICApXG4gICAgfSlcblxuICAgIC8vIE5vdGhpbmcgdG8gcmVuZGVyLCBub3RoaW5nIHRvIHF1ZXJ5IOKAlCB0aGUgYmFja2dyb3VuZCBydW5uZXIgcmUtZW50ZXJzXG4gICAgLy8gdGhlIHF1ZXVlIG9uIGl0cyBvd24gc2NoZWR1bGUuXG4gICAgcmV0dXJuIHsgbWVzc2FnZXM6IFtdLCBzaG91bGRRdWVyeTogZmFsc2UsIGNvbW1hbmQgfVxuICB9XG5cbiAgLy8gQ29sbGVjdCBtZXNzYWdlcyBmcm9tIHRoZSBmb3JrZWQgYWdlbnRcbiAgY29uc3QgYWdlbnRNZXNzYWdlczogTWVzc2FnZVtdID0gW11cblxuICAvLyBCdWlsZCBwcm9ncmVzcyBtZXNzYWdlcyBmb3IgdGhlIGFnZW50IHByb2dyZXNzIFVJXG4gIGNvbnN0IHByb2dyZXNzTWVzc2FnZXM6IFByb2dyZXNzTWVzc2FnZTxBZ2VudFByb2dyZXNzPltdID0gW11cbiAgY29uc3QgcGFyZW50VG9vbFVzZUlEID0gYGZvcmtlZC1jb21tYW5kLSR7Y29tbWFuZC5uYW1lfWBcbiAgbGV0IHRvb2xVc2VDb3VudGVyID0gMFxuXG4gIC8vIEhlbHBlciB0byBjcmVhdGUgYSBwcm9ncmVzcyBtZXNzYWdlIGZyb20gYW4gYWdlbnQgbWVzc2FnZVxuICBjb25zdCBjcmVhdGVQcm9ncmVzc01lc3NhZ2UgPSAoXG4gICAgbWVzc2FnZTogQXNzaXN0YW50TWVzc2FnZSB8IE5vcm1hbGl6ZWRVc2VyTWVzc2FnZSxcbiAgKTogUHJvZ3Jlc3NNZXNzYWdlPEFnZW50UHJvZ3Jlc3M+ID0+IHtcbiAgICB0b29sVXNlQ291bnRlcisrXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdwcm9ncmVzcycsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIHR5cGU6ICdhZ2VudF9wcm9ncmVzcycsXG4gICAgICAgIHByb21wdDogc2tpbGxDb250ZW50LFxuICAgICAgICBhZ2VudElkLFxuICAgICAgfSxcbiAgICAgIHBhcmVudFRvb2xVc2VJRCxcbiAgICAgIHRvb2xVc2VJRDogYCR7cGFyZW50VG9vbFVzZUlEfS0ke3Rvb2xVc2VDb3VudGVyfWAsXG4gICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIHV1aWQ6IHJhbmRvbVVVSUQoKSxcbiAgICB9XG4gIH1cblxuICAvLyBIZWxwZXIgdG8gdXBkYXRlIHByb2dyZXNzIGRpc3BsYXkgdXNpbmcgYWdlbnQgcHJvZ3Jlc3MgVUlcbiAgY29uc3QgdXBkYXRlUHJvZ3Jlc3MgPSAoKTogdm9pZCA9PiB7XG4gICAgc2V0VG9vbEpTWCh7XG4gICAgICBqc3g6IHJlbmRlclRvb2xVc2VQcm9ncmVzc01lc3NhZ2UocHJvZ3Jlc3NNZXNzYWdlcywge1xuICAgICAgICB0b29sczogY29udGV4dC5vcHRpb25zLnRvb2xzLFxuICAgICAgICB2ZXJib3NlOiBmYWxzZSxcbiAgICAgIH0pLFxuICAgICAgc2hvdWxkSGlkZVByb21wdElucHV0OiBmYWxzZSxcbiAgICAgIHNob3VsZENvbnRpbnVlQW5pbWF0aW9uOiB0cnVlLFxuICAgICAgc2hvd1NwaW5uZXI6IHRydWUsXG4gICAgfSlcbiAgfVxuXG4gIC8vIFNob3cgaW5pdGlhbCBcIkluaXRpYWxpemluZ+KAplwiIHN0YXRlXG4gIHVwZGF0ZVByb2dyZXNzKClcblxuICAvLyBSdW4gdGhlIHN1Yi1hZ2VudFxuICB0cnkge1xuICAgIGZvciBhd2FpdCAoY29uc3QgbWVzc2FnZSBvZiBydW5BZ2VudCh7XG4gICAgICBhZ2VudERlZmluaXRpb24sXG4gICAgICBwcm9tcHRNZXNzYWdlcyxcbiAgICAgIHRvb2xVc2VDb250ZXh0OiB7XG4gICAgICAgIC4uLmNvbnRleHQsXG4gICAgICAgIGdldEFwcFN0YXRlOiBtb2RpZmllZEdldEFwcFN0YXRlLFxuICAgICAgfSxcbiAgICAgIGNhblVzZVRvb2wsXG4gICAgICBpc0FzeW5jOiBmYWxzZSxcbiAgICAgIHF1ZXJ5U291cmNlOiAnYWdlbnQ6Y3VzdG9tJyxcbiAgICAgIG1vZGVsOiBjb21tYW5kLm1vZGVsIGFzIE1vZGVsQWxpYXMgfCB1bmRlZmluZWQsXG4gICAgICBhdmFpbGFibGVUb29sczogY29udGV4dC5vcHRpb25zLnRvb2xzLFxuICAgIH0pKSB7XG4gICAgICBhZ2VudE1lc3NhZ2VzLnB1c2gobWVzc2FnZSlcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWROZXcgPSBub3JtYWxpemVNZXNzYWdlcyhbbWVzc2FnZV0pXG5cbiAgICAgIC8vIEFkZCBwcm9ncmVzcyBtZXNzYWdlIGZvciBhc3Npc3RhbnQgbWVzc2FnZXMgKHdoaWNoIGNvbnRhaW4gdG9vbCB1c2VzKVxuICAgICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2Fzc2lzdGFudCcpIHtcbiAgICAgICAgLy8gSW5jcmVtZW50IHRva2VuIGNvdW50IGluIHNwaW5uZXIgZm9yIGFzc2lzdGFudCBtZXNzYWdlc1xuICAgICAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gZ2V0QXNzaXN0YW50TWVzc2FnZUNvbnRlbnRMZW5ndGgobWVzc2FnZSlcbiAgICAgICAgaWYgKGNvbnRlbnRMZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29udGV4dC5zZXRSZXNwb25zZUxlbmd0aChsZW4gPT4gbGVuICsgY29udGVudExlbmd0aClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRNc2cgPSBub3JtYWxpemVkTmV3WzBdXG4gICAgICAgIGlmIChub3JtYWxpemVkTXNnICYmIG5vcm1hbGl6ZWRNc2cudHlwZSA9PT0gJ2Fzc2lzdGFudCcpIHtcbiAgICAgICAgICBwcm9ncmVzc01lc3NhZ2VzLnB1c2goY3JlYXRlUHJvZ3Jlc3NNZXNzYWdlKG1lc3NhZ2UpKVxuICAgICAgICAgIHVwZGF0ZVByb2dyZXNzKClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBBZGQgcHJvZ3Jlc3MgbWVzc2FnZSBmb3IgdXNlciBtZXNzYWdlcyAod2hpY2ggY29udGFpbiB0b29sIHJlc3VsdHMpXG4gICAgICBpZiAobWVzc2FnZS50eXBlID09PSAndXNlcicpIHtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZE1zZyA9IG5vcm1hbGl6ZWROZXdbMF1cbiAgICAgICAgaWYgKG5vcm1hbGl6ZWRNc2cgJiYgbm9ybWFsaXplZE1zZy50eXBlID09PSAndXNlcicpIHtcbiAgICAgICAgICBwcm9ncmVzc01lc3NhZ2VzLnB1c2goY3JlYXRlUHJvZ3Jlc3NNZXNzYWdlKG5vcm1hbGl6ZWRNc2cpKVxuICAgICAgICAgIHVwZGF0ZVByb2dyZXNzKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICAvLyBDbGVhciB0aGUgcHJvZ3Jlc3MgZGlzcGxheVxuICAgIHNldFRvb2xKU1gobnVsbClcbiAgfVxuXG4gIGxldCByZXN1bHRUZXh0ID0gZXh0cmFjdFJlc3VsdFRleHQoYWdlbnRNZXNzYWdlcywgJ0NvbW1hbmQgY29tcGxldGVkJylcblxuICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgYEZvcmtlZCBzbGFzaCBjb21tYW5kIC8ke2NvbW1hbmQubmFtZX0gY29tcGxldGVkIHdpdGggYWdlbnQgJHthZ2VudElkfWAsXG4gIClcblxuICAvLyBQcmVwZW5kIGRlYnVnIGxvZyBmb3IgYW50IHVzZXJzIHNvIGl0IGFwcGVhcnMgaW5zaWRlIHRoZSBjb21tYW5kIG91dHB1dFxuICBpZiAoXCJleHRlcm5hbFwiID09PSAnYW50Jykge1xuICAgIHJlc3VsdFRleHQgPSBgW0FOVC1PTkxZXSBBUEkgY2FsbHM6ICR7Z2V0RGlzcGxheVBhdGgoZ2V0RHVtcFByb21wdHNQYXRoKGFnZW50SWQpKX1cXG4ke3Jlc3VsdFRleHR9YFxuICB9XG5cbiAgLy8gUmV0dXJuIHRoZSByZXN1bHQgYXMgYSB1c2VyIG1lc3NhZ2UgKHNpbXVsYXRlcyB0aGUgYWdlbnQncyBvdXRwdXQpXG4gIGNvbnN0IG1lc3NhZ2VzOiBVc2VyTWVzc2FnZVtdID0gW1xuICAgIGNyZWF0ZVVzZXJNZXNzYWdlKHtcbiAgICAgIGNvbnRlbnQ6IHByZXBhcmVVc2VyQ29udGVudCh7XG4gICAgICAgIGlucHV0U3RyaW5nOiBgLyR7Z2V0Q29tbWFuZE5hbWUoY29tbWFuZCl9ICR7YXJnc31gLnRyaW0oKSxcbiAgICAgICAgcHJlY2VkaW5nSW5wdXRCbG9ja3MsXG4gICAgICB9KSxcbiAgICB9KSxcbiAgICBjcmVhdGVVc2VyTWVzc2FnZSh7XG4gICAgICBjb250ZW50OiBgPGxvY2FsLWNvbW1hbmQtc3Rkb3V0PlxcbiR7cmVzdWx0VGV4dH1cXG48L2xvY2FsLWNvbW1hbmQtc3Rkb3V0PmAsXG4gICAgfSksXG4gIF1cblxuICByZXR1cm4ge1xuICAgIG1lc3NhZ2VzLFxuICAgIHNob3VsZFF1ZXJ5OiBmYWxzZSxcbiAgICBjb21tYW5kLFxuICAgIHJlc3VsdFRleHQsXG4gIH1cbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGEgc3RyaW5nIGxvb2tzIGxpa2UgYSB2YWxpZCBjb21tYW5kIG5hbWUuXG4gKiBWYWxpZCBjb21tYW5kIG5hbWVzIG9ubHkgY29udGFpbiBsZXR0ZXJzLCBudW1iZXJzLCBjb2xvbnMsIGh5cGhlbnMsIGFuZCB1bmRlcnNjb3Jlcy5cbiAqXG4gKiBAcGFyYW0gY29tbWFuZE5hbWUgLSBUaGUgcG90ZW50aWFsIGNvbW1hbmQgbmFtZSB0byBjaGVja1xuICogQHJldHVybnMgdHJ1ZSBpZiBpdCBsb29rcyBsaWtlIGEgY29tbWFuZCBuYW1lLCBmYWxzZSBpZiBpdCBjb250YWlucyBub24tY29tbWFuZCBjaGFyYWN0ZXJzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb29rc0xpa2VDb21tYW5kKGNvbW1hbmROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gQ29tbWFuZCBuYW1lcyBzaG91bGQgb25seSBjb250YWluIFthLXpBLVowLTk6Xy1dXG4gIC8vIElmIGl0IGNvbnRhaW5zIG90aGVyIGNoYXJhY3RlcnMsIGl0J3MgcHJvYmFibHkgYSBmaWxlIHBhdGggb3Igb3RoZXIgaW5wdXRcbiAgcmV0dXJuICEvW15hLXpBLVowLTk6XFwtX10vLnRlc3QoY29tbWFuZE5hbWUpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcm9jZXNzU2xhc2hDb21tYW5kKFxuICBpbnB1dFN0cmluZzogc3RyaW5nLFxuICBwcmVjZWRpbmdJbnB1dEJsb2NrczogQ29udGVudEJsb2NrUGFyYW1bXSxcbiAgaW1hZ2VDb250ZW50QmxvY2tzOiBDb250ZW50QmxvY2tQYXJhbVtdLFxuICBhdHRhY2htZW50TWVzc2FnZXM6IEF0dGFjaG1lbnRNZXNzYWdlW10sXG4gIGNvbnRleHQ6IFByb2Nlc3NVc2VySW5wdXRDb250ZXh0LFxuICBzZXRUb29sSlNYOiBTZXRUb29sSlNYRm4sXG4gIHV1aWQ/OiBzdHJpbmcsXG4gIGlzQWxyZWFkeVByb2Nlc3Npbmc/OiBib29sZWFuLFxuICBjYW5Vc2VUb29sPzogQ2FuVXNlVG9vbEZuLFxuKTogUHJvbWlzZTxQcm9jZXNzVXNlcklucHV0QmFzZVJlc3VsdD4ge1xuICBjb25zdCBwYXJzZWQgPSBwYXJzZVNsYXNoQ29tbWFuZChpbnB1dFN0cmluZylcbiAgaWYgKCFwYXJzZWQpIHtcbiAgICBsb2dFdmVudCgndGVuZ3VfaW5wdXRfc2xhc2hfbWlzc2luZycsIHt9KVxuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9ICdDb21tYW5kcyBhcmUgaW4gdGhlIGZvcm0gYC9jb21tYW5kIFthcmdzXWAnXG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgIGNyZWF0ZVN5bnRoZXRpY1VzZXJDYXZlYXRNZXNzYWdlKCksXG4gICAgICAgIC4uLmF0dGFjaG1lbnRNZXNzYWdlcyxcbiAgICAgICAgY3JlYXRlVXNlck1lc3NhZ2Uoe1xuICAgICAgICAgIGNvbnRlbnQ6IHByZXBhcmVVc2VyQ29udGVudCh7XG4gICAgICAgICAgICBpbnB1dFN0cmluZzogZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgcHJlY2VkaW5nSW5wdXRCbG9ja3MsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIHNob3VsZFF1ZXJ5OiBmYWxzZSxcbiAgICAgIHJlc3VsdFRleHQ6IGVycm9yTWVzc2FnZSxcbiAgICB9XG4gIH1cblxuICBjb25zdCB7IGNvbW1hbmROYW1lLCBhcmdzOiBwYXJzZWRBcmdzLCBpc01jcCB9ID0gcGFyc2VkXG5cbiAgY29uc3Qgc2FuaXRpemVkQ29tbWFuZE5hbWUgPSBpc01jcFxuICAgID8gJ21jcCdcbiAgICA6ICFidWlsdEluQ29tbWFuZE5hbWVzKCkuaGFzKGNvbW1hbmROYW1lKVxuICAgICAgPyAnY3VzdG9tJ1xuICAgICAgOiBjb21tYW5kTmFtZVxuXG4gIC8vIENoZWNrIGlmIGl0J3MgYSByZWFsIGNvbW1hbmQgYmVmb3JlIHByb2Nlc3NpbmdcbiAgaWYgKCFoYXNDb21tYW5kKGNvbW1hbmROYW1lLCBjb250ZXh0Lm9wdGlvbnMuY29tbWFuZHMpKSB7XG4gICAgLy8gQ2hlY2sgaWYgdGhpcyBsb29rcyBsaWtlIGEgY29tbWFuZCBuYW1lIHZzIGEgZmlsZSBwYXRoIG9yIG90aGVyIGlucHV0XG4gICAgLy8gQWxzbyBjaGVjayBpZiBpdCdzIGFuIGFjdHVhbCBmaWxlIHBhdGggdGhhdCBleGlzdHNcbiAgICBsZXQgaXNGaWxlUGF0aCA9IGZhbHNlXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGdldEZzSW1wbGVtZW50YXRpb24oKS5zdGF0KGAvJHtjb21tYW5kTmFtZX1gKVxuICAgICAgaXNGaWxlUGF0aCA9IHRydWVcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIE5vdCBhIGZpbGUgcGF0aCDigJQgdHJlYXQgYXMgY29tbWFuZCBuYW1lXG4gICAgfVxuICAgIGlmIChsb29rc0xpa2VDb21tYW5kKGNvbW1hbmROYW1lKSAmJiAhaXNGaWxlUGF0aCkge1xuICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2lucHV0X3NsYXNoX2ludmFsaWQnLCB7XG4gICAgICAgIGlucHV0OlxuICAgICAgICAgIGNvbW1hbmROYW1lIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICB9KVxuXG4gICAgICBjb25zdCB1bmtub3duTWVzc2FnZSA9IGBVbmtub3duIHNraWxsOiAke2NvbW1hbmROYW1lfWBcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY3JlYXRlU3ludGhldGljVXNlckNhdmVhdE1lc3NhZ2UoKSxcbiAgICAgICAgICAuLi5hdHRhY2htZW50TWVzc2FnZXMsXG4gICAgICAgICAgY3JlYXRlVXNlck1lc3NhZ2Uoe1xuICAgICAgICAgICAgY29udGVudDogcHJlcGFyZVVzZXJDb250ZW50KHtcbiAgICAgICAgICAgICAgaW5wdXRTdHJpbmc6IHVua25vd25NZXNzYWdlLFxuICAgICAgICAgICAgICBwcmVjZWRpbmdJbnB1dEJsb2NrcyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8vIGdoLTMyNTkxOiBwcmVzZXJ2ZSBhcmdzIHNvIHRoZSB1c2VyIGNhbiBjb3B5L3Jlc3VibWl0IHdpdGhvdXRcbiAgICAgICAgICAvLyByZXR5cGluZy4gU3lzdGVtIHdhcm5pbmcgaXMgVUktb25seSAoZmlsdGVyZWQgYmVmb3JlIEFQSSkuXG4gICAgICAgICAgLi4uKHBhcnNlZEFyZ3NcbiAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgIGNyZWF0ZVN5c3RlbU1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgICBgQXJncyBmcm9tIHVua25vd24gc2tpbGw6ICR7cGFyc2VkQXJnc31gLFxuICAgICAgICAgICAgICAgICAgJ3dhcm5pbmcnLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIDogW10pLFxuICAgICAgICBdLFxuICAgICAgICBzaG91bGRRdWVyeTogZmFsc2UsXG4gICAgICAgIHJlc3VsdFRleHQ6IHVua25vd25NZXNzYWdlLFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHByb21wdElkID0gcmFuZG9tVVVJRCgpXG4gICAgc2V0UHJvbXB0SWQocHJvbXB0SWQpXG4gICAgbG9nRXZlbnQoJ3Rlbmd1X2lucHV0X3Byb21wdCcsIHt9KVxuICAgIC8vIExvZyB1c2VyIHByb21wdCBldmVudCBmb3IgT1RMUFxuICAgIHZvaWQgbG9nT1RlbEV2ZW50KCd1c2VyX3Byb21wdCcsIHtcbiAgICAgIHByb21wdF9sZW5ndGg6IFN0cmluZyhpbnB1dFN0cmluZy5sZW5ndGgpLFxuICAgICAgcHJvbXB0OiByZWRhY3RJZkRpc2FibGVkKGlucHV0U3RyaW5nKSxcbiAgICAgICdwcm9tcHQuaWQnOiBwcm9tcHRJZCxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlczogW1xuICAgICAgICBjcmVhdGVVc2VyTWVzc2FnZSh7XG4gICAgICAgICAgY29udGVudDogcHJlcGFyZVVzZXJDb250ZW50KHsgaW5wdXRTdHJpbmcsIHByZWNlZGluZ0lucHV0QmxvY2tzIH0pLFxuICAgICAgICAgIHV1aWQ6IHV1aWQsXG4gICAgICAgIH0pLFxuICAgICAgICAuLi5hdHRhY2htZW50TWVzc2FnZXMsXG4gICAgICBdLFxuICAgICAgc2hvdWxkUXVlcnk6IHRydWUsXG4gICAgfVxuICB9XG5cbiAgLy8gVHJhY2sgc2xhc2ggY29tbWFuZCB1c2FnZSBmb3IgZmVhdHVyZSBkaXNjb3ZlcnlcblxuICBjb25zdCB7XG4gICAgbWVzc2FnZXM6IG5ld01lc3NhZ2VzLFxuICAgIHNob3VsZFF1ZXJ5OiBtZXNzYWdlU2hvdWxkUXVlcnksXG4gICAgYWxsb3dlZFRvb2xzLFxuICAgIG1vZGVsLFxuICAgIGVmZm9ydCxcbiAgICBjb21tYW5kOiByZXR1cm5lZENvbW1hbmQsXG4gICAgcmVzdWx0VGV4dCxcbiAgICBuZXh0SW5wdXQsXG4gICAgc3VibWl0TmV4dElucHV0LFxuICB9ID0gYXdhaXQgZ2V0TWVzc2FnZXNGb3JTbGFzaENvbW1hbmQoXG4gICAgY29tbWFuZE5hbWUsXG4gICAgcGFyc2VkQXJncyxcbiAgICBzZXRUb29sSlNYLFxuICAgIGNvbnRleHQsXG4gICAgcHJlY2VkaW5nSW5wdXRCbG9ja3MsXG4gICAgaW1hZ2VDb250ZW50QmxvY2tzLFxuICAgIGlzQWxyZWFkeVByb2Nlc3NpbmcsXG4gICAgY2FuVXNlVG9vbCxcbiAgICB1dWlkLFxuICApXG5cbiAgLy8gTG9jYWwgc2xhc2ggY29tbWFuZHMgdGhhdCBza2lwIG1lc3NhZ2VzXG4gIGlmIChuZXdNZXNzYWdlcy5sZW5ndGggPT09IDApIHtcbiAgICBjb25zdCBldmVudERhdGE6IFJlY29yZDxzdHJpbmcsIGJvb2xlYW4gfCBudW1iZXIgfCB1bmRlZmluZWQ+ID0ge1xuICAgICAgaW5wdXQ6XG4gICAgICAgIHNhbml0aXplZENvbW1hbmROYW1lIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgfVxuXG4gICAgLy8gQWRkIHBsdWdpbiBtZXRhZGF0YSBpZiB0aGlzIGlzIGEgcGx1Z2luIGNvbW1hbmRcbiAgICBpZiAocmV0dXJuZWRDb21tYW5kLnR5cGUgPT09ICdwcm9tcHQnICYmIHJldHVybmVkQ29tbWFuZC5wbHVnaW5JbmZvKSB7XG4gICAgICBjb25zdCB7IHBsdWdpbk1hbmlmZXN0LCByZXBvc2l0b3J5IH0gPSByZXR1cm5lZENvbW1hbmQucGx1Z2luSW5mb1xuICAgICAgY29uc3QgeyBtYXJrZXRwbGFjZSB9ID0gcGFyc2VQbHVnaW5JZGVudGlmaWVyKHJlcG9zaXRvcnkpXG4gICAgICBjb25zdCBpc09mZmljaWFsID0gaXNPZmZpY2lhbE1hcmtldHBsYWNlTmFtZShtYXJrZXRwbGFjZSlcbiAgICAgIC8vIF9QUk9UT18qIHJvdXRlcyB0byBQSUktdGFnZ2VkIHBsdWdpbl9uYW1lL21hcmtldHBsYWNlX25hbWUgQlEgY29sdW1uc1xuICAgICAgLy8gKHVucmVkYWN0ZWQsIGFsbCB1c2Vycyk7IHBsdWdpbl9uYW1lL3BsdWdpbl9yZXBvc2l0b3J5IHN0YXkgaW5cbiAgICAgIC8vIGFkZGl0aW9uYWxfbWV0YWRhdGEgYXMgcmVkYWN0ZWQgdmFyaWFudHMgZm9yIGdlbmVyYWwtYWNjZXNzIGRhc2hib2FyZHMuXG4gICAgICBldmVudERhdGEuX1BST1RPX3BsdWdpbl9uYW1lID1cbiAgICAgICAgcGx1Z2luTWFuaWZlc3QubmFtZSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfUElJX1RBR0dFRFxuICAgICAgaWYgKG1hcmtldHBsYWNlKSB7XG4gICAgICAgIGV2ZW50RGF0YS5fUFJPVE9fbWFya2V0cGxhY2VfbmFtZSA9XG4gICAgICAgICAgbWFya2V0cGxhY2UgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX1BJSV9UQUdHRURcbiAgICAgIH1cbiAgICAgIGV2ZW50RGF0YS5wbHVnaW5fcmVwb3NpdG9yeSA9IChcbiAgICAgICAgaXNPZmZpY2lhbCA/IHJlcG9zaXRvcnkgOiAndGhpcmQtcGFydHknXG4gICAgICApIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFNcbiAgICAgIGV2ZW50RGF0YS5wbHVnaW5fbmFtZSA9IChcbiAgICAgICAgaXNPZmZpY2lhbCA/IHBsdWdpbk1hbmlmZXN0Lm5hbWUgOiAndGhpcmQtcGFydHknXG4gICAgICApIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFNcbiAgICAgIGlmIChpc09mZmljaWFsICYmIHBsdWdpbk1hbmlmZXN0LnZlcnNpb24pIHtcbiAgICAgICAgZXZlbnREYXRhLnBsdWdpbl92ZXJzaW9uID1cbiAgICAgICAgICBwbHVnaW5NYW5pZmVzdC52ZXJzaW9uIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFNcbiAgICAgIH1cbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIGV2ZW50RGF0YSxcbiAgICAgICAgYnVpbGRQbHVnaW5Db21tYW5kVGVsZW1ldHJ5RmllbGRzKHJldHVybmVkQ29tbWFuZC5wbHVnaW5JbmZvKSxcbiAgICAgIClcbiAgICB9XG5cbiAgICBsb2dFdmVudCgndGVuZ3VfaW5wdXRfY29tbWFuZCcsIHtcbiAgICAgIC4uLmV2ZW50RGF0YSxcbiAgICAgIGludm9jYXRpb25fdHJpZ2dlcjpcbiAgICAgICAgJ3VzZXItc2xhc2gnIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAuLi4oXCJleHRlcm5hbFwiID09PSAnYW50JyAmJiB7XG4gICAgICAgIHNraWxsX25hbWU6XG4gICAgICAgICAgY29tbWFuZE5hbWUgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgLi4uKHJldHVybmVkQ29tbWFuZC50eXBlID09PSAncHJvbXB0JyAmJiB7XG4gICAgICAgICAgc2tpbGxfc291cmNlOlxuICAgICAgICAgICAgcmV0dXJuZWRDb21tYW5kLnNvdXJjZSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgICB9KSxcbiAgICAgICAgLi4uKHJldHVybmVkQ29tbWFuZC5sb2FkZWRGcm9tICYmIHtcbiAgICAgICAgICBza2lsbF9sb2FkZWRfZnJvbTpcbiAgICAgICAgICAgIHJldHVybmVkQ29tbWFuZC5sb2FkZWRGcm9tIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgIH0pLFxuICAgICAgICAuLi4ocmV0dXJuZWRDb21tYW5kLmtpbmQgJiYge1xuICAgICAgICAgIHNraWxsX2tpbmQ6XG4gICAgICAgICAgICByZXR1cm5lZENvbW1hbmQua2luZCBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgICB9KSxcbiAgICAgIH0pLFxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICAgIHNob3VsZFF1ZXJ5OiBmYWxzZSxcblxuICAgICAgbW9kZWwsXG4gICAgICBuZXh0SW5wdXQsXG4gICAgICBzdWJtaXROZXh0SW5wdXQsXG4gICAgfVxuICB9XG5cbiAgLy8gRm9yIGludmFsaWQgY29tbWFuZHMsIHByZXNlcnZlIGJvdGggdGhlIHVzZXIgbWVzc2FnZSBhbmQgZXJyb3JcbiAgaWYgKFxuICAgIG5ld01lc3NhZ2VzLmxlbmd0aCA9PT0gMiAmJlxuICAgIG5ld01lc3NhZ2VzWzFdIS50eXBlID09PSAndXNlcicgJiZcbiAgICB0eXBlb2YgbmV3TWVzc2FnZXNbMV0hLm1lc3NhZ2UuY29udGVudCA9PT0gJ3N0cmluZycgJiZcbiAgICBuZXdNZXNzYWdlc1sxXSEubWVzc2FnZS5jb250ZW50LnN0YXJ0c1dpdGgoJ1Vua25vd24gY29tbWFuZDonKVxuICApIHtcbiAgICAvLyBEb24ndCBsb2cgYXMgaW52YWxpZCBpZiBpdCBsb29rcyBsaWtlIGEgY29tbW9uIGZpbGUgcGF0aFxuICAgIGNvbnN0IGxvb2tzTGlrZUZpbGVQYXRoID1cbiAgICAgIGlucHV0U3RyaW5nLnN0YXJ0c1dpdGgoJy92YXInKSB8fFxuICAgICAgaW5wdXRTdHJpbmcuc3RhcnRzV2l0aCgnL3RtcCcpIHx8XG4gICAgICBpbnB1dFN0cmluZy5zdGFydHNXaXRoKCcvcHJpdmF0ZScpXG5cbiAgICBpZiAoIWxvb2tzTGlrZUZpbGVQYXRoKSB7XG4gICAgICBsb2dFdmVudCgndGVuZ3VfaW5wdXRfc2xhc2hfaW52YWxpZCcsIHtcbiAgICAgICAgaW5wdXQ6XG4gICAgICAgICAgY29tbWFuZE5hbWUgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2VzOiBbY3JlYXRlU3ludGhldGljVXNlckNhdmVhdE1lc3NhZ2UoKSwgLi4ubmV3TWVzc2FnZXNdLFxuICAgICAgc2hvdWxkUXVlcnk6IG1lc3NhZ2VTaG91bGRRdWVyeSxcbiAgICAgIGFsbG93ZWRUb29scyxcblxuICAgICAgbW9kZWwsXG4gICAgfVxuICB9XG5cbiAgLy8gQSB2YWxpZCBjb21tYW5kXG4gIGNvbnN0IGV2ZW50RGF0YTogUmVjb3JkPHN0cmluZywgYm9vbGVhbiB8IG51bWJlciB8IHVuZGVmaW5lZD4gPSB7XG4gICAgaW5wdXQ6XG4gICAgICBzYW5pdGl6ZWRDb21tYW5kTmFtZSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICB9XG5cbiAgLy8gQWRkIHBsdWdpbiBtZXRhZGF0YSBpZiB0aGlzIGlzIGEgcGx1Z2luIGNvbW1hbmRcbiAgaWYgKHJldHVybmVkQ29tbWFuZC50eXBlID09PSAncHJvbXB0JyAmJiByZXR1cm5lZENvbW1hbmQucGx1Z2luSW5mbykge1xuICAgIGNvbnN0IHsgcGx1Z2luTWFuaWZlc3QsIHJlcG9zaXRvcnkgfSA9IHJldHVybmVkQ29tbWFuZC5wbHVnaW5JbmZvXG4gICAgY29uc3QgeyBtYXJrZXRwbGFjZSB9ID0gcGFyc2VQbHVnaW5JZGVudGlmaWVyKHJlcG9zaXRvcnkpXG4gICAgY29uc3QgaXNPZmZpY2lhbCA9IGlzT2ZmaWNpYWxNYXJrZXRwbGFjZU5hbWUobWFya2V0cGxhY2UpXG4gICAgZXZlbnREYXRhLl9QUk9UT19wbHVnaW5fbmFtZSA9XG4gICAgICBwbHVnaW5NYW5pZmVzdC5uYW1lIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19QSUlfVEFHR0VEXG4gICAgaWYgKG1hcmtldHBsYWNlKSB7XG4gICAgICBldmVudERhdGEuX1BST1RPX21hcmtldHBsYWNlX25hbWUgPVxuICAgICAgICBtYXJrZXRwbGFjZSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfUElJX1RBR0dFRFxuICAgIH1cbiAgICBldmVudERhdGEucGx1Z2luX3JlcG9zaXRvcnkgPSAoXG4gICAgICBpc09mZmljaWFsID8gcmVwb3NpdG9yeSA6ICd0aGlyZC1wYXJ0eSdcbiAgICApIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFNcbiAgICBldmVudERhdGEucGx1Z2luX25hbWUgPSAoXG4gICAgICBpc09mZmljaWFsID8gcGx1Z2luTWFuaWZlc3QubmFtZSA6ICd0aGlyZC1wYXJ0eSdcbiAgICApIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFNcbiAgICBpZiAoaXNPZmZpY2lhbCAmJiBwbHVnaW5NYW5pZmVzdC52ZXJzaW9uKSB7XG4gICAgICBldmVudERhdGEucGx1Z2luX3ZlcnNpb24gPVxuICAgICAgICBwbHVnaW5NYW5pZmVzdC52ZXJzaW9uIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFNcbiAgICB9XG4gICAgT2JqZWN0LmFzc2lnbihcbiAgICAgIGV2ZW50RGF0YSxcbiAgICAgIGJ1aWxkUGx1Z2luQ29tbWFuZFRlbGVtZXRyeUZpZWxkcyhyZXR1cm5lZENvbW1hbmQucGx1Z2luSW5mbyksXG4gICAgKVxuICB9XG5cbiAgbG9nRXZlbnQoJ3Rlbmd1X2lucHV0X2NvbW1hbmQnLCB7XG4gICAgLi4uZXZlbnREYXRhLFxuICAgIGludm9jYXRpb25fdHJpZ2dlcjpcbiAgICAgICd1c2VyLXNsYXNoJyBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgIC4uLihcImV4dGVybmFsXCIgPT09ICdhbnQnICYmIHtcbiAgICAgIHNraWxsX25hbWU6XG4gICAgICAgIGNvbW1hbmROYW1lIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAuLi4ocmV0dXJuZWRDb21tYW5kLnR5cGUgPT09ICdwcm9tcHQnICYmIHtcbiAgICAgICAgc2tpbGxfc291cmNlOlxuICAgICAgICAgIHJldHVybmVkQ29tbWFuZC5zb3VyY2UgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgIH0pLFxuICAgICAgLi4uKHJldHVybmVkQ29tbWFuZC5sb2FkZWRGcm9tICYmIHtcbiAgICAgICAgc2tpbGxfbG9hZGVkX2Zyb206XG4gICAgICAgICAgcmV0dXJuZWRDb21tYW5kLmxvYWRlZEZyb20gYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgIH0pLFxuICAgICAgLi4uKHJldHVybmVkQ29tbWFuZC5raW5kICYmIHtcbiAgICAgICAgc2tpbGxfa2luZDpcbiAgICAgICAgICByZXR1cm5lZENvbW1hbmQua2luZCBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgfSksXG4gICAgfSksXG4gIH0pXG5cbiAgLy8gQ2hlY2sgaWYgdGhpcyBpcyBhIGNvbXBhY3QgcmVzdWx0IHdoaWNoIGhhbmRsZSB0aGVpciBvd24gc3ludGhldGljIGNhdmVhdCBtZXNzYWdlIG9yZGVyaW5nXG4gIGNvbnN0IGlzQ29tcGFjdFJlc3VsdCA9XG4gICAgbmV3TWVzc2FnZXMubGVuZ3RoID4gMCAmJlxuICAgIG5ld01lc3NhZ2VzWzBdICYmXG4gICAgaXNDb21wYWN0Qm91bmRhcnlNZXNzYWdlKG5ld01lc3NhZ2VzWzBdKVxuXG4gIHJldHVybiB7XG4gICAgbWVzc2FnZXM6XG4gICAgICBtZXNzYWdlU2hvdWxkUXVlcnkgfHxcbiAgICAgIG5ld01lc3NhZ2VzLmV2ZXJ5KGlzU3lzdGVtTG9jYWxDb21tYW5kTWVzc2FnZSkgfHxcbiAgICAgIGlzQ29tcGFjdFJlc3VsdFxuICAgICAgICA/IG5ld01lc3NhZ2VzXG4gICAgICAgIDogW2NyZWF0ZVN5bnRoZXRpY1VzZXJDYXZlYXRNZXNzYWdlKCksIC4uLm5ld01lc3NhZ2VzXSxcbiAgICBzaG91bGRRdWVyeTogbWVzc2FnZVNob3VsZFF1ZXJ5LFxuICAgIGFsbG93ZWRUb29scyxcbiAgICBtb2RlbCxcbiAgICBlZmZvcnQsXG4gICAgcmVzdWx0VGV4dCxcbiAgICBuZXh0SW5wdXQsXG4gICAgc3VibWl0TmV4dElucHV0LFxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldE1lc3NhZ2VzRm9yU2xhc2hDb21tYW5kKFxuICBjb21tYW5kTmFtZTogc3RyaW5nLFxuICBhcmdzOiBzdHJpbmcsXG4gIHNldFRvb2xKU1g6IFNldFRvb2xKU1hGbixcbiAgY29udGV4dDogUHJvY2Vzc1VzZXJJbnB1dENvbnRleHQsXG4gIHByZWNlZGluZ0lucHV0QmxvY2tzOiBDb250ZW50QmxvY2tQYXJhbVtdLFxuICBpbWFnZUNvbnRlbnRCbG9ja3M6IENvbnRlbnRCbG9ja1BhcmFtW10sXG4gIF9pc0FscmVhZHlQcm9jZXNzaW5nPzogYm9vbGVhbixcbiAgY2FuVXNlVG9vbD86IENhblVzZVRvb2xGbixcbiAgdXVpZD86IHN0cmluZyxcbik6IFByb21pc2U8U2xhc2hDb21tYW5kUmVzdWx0PiB7XG4gIGNvbnN0IGNvbW1hbmQgPSBnZXRDb21tYW5kKGNvbW1hbmROYW1lLCBjb250ZXh0Lm9wdGlvbnMuY29tbWFuZHMpXG5cbiAgLy8gVHJhY2sgc2tpbGwgdXNhZ2UgZm9yIHJhbmtpbmcgKG9ubHkgZm9yIHByb21wdCBjb21tYW5kcyB0aGF0IGFyZSB1c2VyLWludm9jYWJsZSlcbiAgaWYgKGNvbW1hbmQudHlwZSA9PT0gJ3Byb21wdCcgJiYgY29tbWFuZC51c2VySW52b2NhYmxlICE9PSBmYWxzZSkge1xuICAgIHJlY29yZFNraWxsVXNhZ2UoY29tbWFuZE5hbWUpXG4gIH1cblxuICAvLyBDaGVjayBpZiB0aGUgY29tbWFuZCBpcyB1c2VyLWludm9jYWJsZVxuICAvLyBTa2lsbHMgd2l0aCB1c2VySW52b2NhYmxlID09PSBmYWxzZSBjYW4gb25seSBiZSBpbnZva2VkIGJ5IHRoZSBtb2RlbCB2aWEgU2tpbGxUb29sXG4gIGlmIChjb21tYW5kLnVzZXJJbnZvY2FibGUgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgIGNyZWF0ZVVzZXJNZXNzYWdlKHtcbiAgICAgICAgICBjb250ZW50OiBwcmVwYXJlVXNlckNvbnRlbnQoe1xuICAgICAgICAgICAgaW5wdXRTdHJpbmc6IGAvJHtjb21tYW5kTmFtZX1gLFxuICAgICAgICAgICAgcHJlY2VkaW5nSW5wdXRCbG9ja3MsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgICBjcmVhdGVVc2VyTWVzc2FnZSh7XG4gICAgICAgICAgY29udGVudDogYFRoaXMgc2tpbGwgY2FuIG9ubHkgYmUgaW52b2tlZCBieSBDbGF1ZGUsIG5vdCBkaXJlY3RseSBieSB1c2Vycy4gQXNrIENsYXVkZSB0byB1c2UgdGhlIFwiJHtjb21tYW5kTmFtZX1cIiBza2lsbCBmb3IgeW91LmAsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIHNob3VsZFF1ZXJ5OiBmYWxzZSxcbiAgICAgIGNvbW1hbmQsXG4gICAgfVxuICB9XG5cbiAgdHJ5IHtcbiAgICBzd2l0Y2ggKGNvbW1hbmQudHlwZSkge1xuICAgICAgY2FzZSAnbG9jYWwtanN4Jzoge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8U2xhc2hDb21tYW5kUmVzdWx0PihyZXNvbHZlID0+IHtcbiAgICAgICAgICBsZXQgZG9uZVdhc0NhbGxlZCA9IGZhbHNlXG4gICAgICAgICAgY29uc3Qgb25Eb25lID0gKFxuICAgICAgICAgICAgcmVzdWx0Pzogc3RyaW5nLFxuICAgICAgICAgICAgb3B0aW9ucz86IHtcbiAgICAgICAgICAgICAgZGlzcGxheT86IENvbW1hbmRSZXN1bHREaXNwbGF5XG4gICAgICAgICAgICAgIHNob3VsZFF1ZXJ5PzogYm9vbGVhblxuICAgICAgICAgICAgICBtZXRhTWVzc2FnZXM/OiBzdHJpbmdbXVxuICAgICAgICAgICAgICBuZXh0SW5wdXQ/OiBzdHJpbmdcbiAgICAgICAgICAgICAgc3VibWl0TmV4dElucHV0PzogYm9vbGVhblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICApID0+IHtcbiAgICAgICAgICAgIGRvbmVXYXNDYWxsZWQgPSB0cnVlXG4gICAgICAgICAgICAvLyBJZiBkaXNwbGF5IGlzICdza2lwJywgZG9uJ3QgYWRkIGFueSBtZXNzYWdlcyB0byB0aGUgY29udmVyc2F0aW9uXG4gICAgICAgICAgICBpZiAob3B0aW9ucz8uZGlzcGxheSA9PT0gJ3NraXAnKSB7XG4gICAgICAgICAgICAgIHZvaWQgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgICAgICAgICAgIHNob3VsZFF1ZXJ5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb21tYW5kLFxuICAgICAgICAgICAgICAgIG5leHRJbnB1dDogb3B0aW9ucz8ubmV4dElucHV0LFxuICAgICAgICAgICAgICAgIHN1Ym1pdE5leHRJbnB1dDogb3B0aW9ucz8uc3VibWl0TmV4dElucHV0LFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTWV0YSBtZXNzYWdlcyBhcmUgbW9kZWwtdmlzaWJsZSBidXQgaGlkZGVuIGZyb20gdGhlIHVzZXJcbiAgICAgICAgICAgIGNvbnN0IG1ldGFNZXNzYWdlcyA9IChvcHRpb25zPy5tZXRhTWVzc2FnZXMgPz8gW10pLm1hcChcbiAgICAgICAgICAgICAgKGNvbnRlbnQ6IHN0cmluZykgPT4gY3JlYXRlVXNlck1lc3NhZ2UoeyBjb250ZW50LCBpc01ldGE6IHRydWUgfSksXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIC8vIEluIGZ1bGxzY3JlZW4gdGhlIGNvbW1hbmQganVzdCBzaG93ZWQgYXMgYSBjZW50ZXJlZCBtb2RhbFxuICAgICAgICAgICAgLy8gcGFuZSDigJQgdGhlIHRyYW5zaWVudCBub3RpZmljYXRpb24gaXMgZW5vdWdoIGZlZWRiYWNrLiBUaGVcbiAgICAgICAgICAgIC8vIFwi4p2vIC9jb25maWdcIiArIFwi4o6/IGRpc21pc3NlZFwiIHRyYW5zY3JpcHQgZW50cmllcyBhcmVcbiAgICAgICAgICAgIC8vIHR5cGU6c3lzdGVtIHN1YnR5cGU6bG9jYWxfY29tbWFuZCAodXNlci12aXNpYmxlIGJ1dCBOT1Qgc2VudFxuICAgICAgICAgICAgLy8gdG8gdGhlIG1vZGVsKSwgc28gc2tpcHBpbmcgdGhlbSBkb2Vzbid0IGFmZmVjdCBtb2RlbCBjb250ZXh0LlxuICAgICAgICAgICAgLy8gT3V0c2lkZSBmdWxsc2NyZWVuIGtlZXAgdGhlbSBzbyBzY3JvbGxiYWNrIHNob3dzIHdoYXQgcmFuLlxuICAgICAgICAgICAgLy8gT25seSBza2lwIFwiPE5hbWU+IGRpc21pc3NlZFwiIG1vZGFsLWNsb3NlIG5vdGlmaWNhdGlvbnMg4oCUXG4gICAgICAgICAgICAvLyBjb21tYW5kcyB0aGF0IGVhcmx5LWV4aXQgYmVmb3JlIHNob3dpbmcgYSBtb2RhbCAoL3VsdHJhcGxhblxuICAgICAgICAgICAgLy8gdXNhZ2UsIC9yZW5hbWUsIC9wcm9hY3RpdmUpIHVzZSBkaXNwbGF5OnN5c3RlbSBmb3IgYWN0dWFsXG4gICAgICAgICAgICAvLyBvdXRwdXQgdGhhdCBtdXN0IHJlYWNoIHRoZSB0cmFuc2NyaXB0LlxuICAgICAgICAgICAgY29uc3Qgc2tpcFRyYW5zY3JpcHQgPVxuICAgICAgICAgICAgICBpc0Z1bGxzY3JlZW5FbnZFbmFibGVkKCkgJiZcbiAgICAgICAgICAgICAgdHlwZW9mIHJlc3VsdCA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgICAgICAgcmVzdWx0LmVuZHNXaXRoKCcgZGlzbWlzc2VkJylcblxuICAgICAgICAgICAgdm9pZCByZXNvbHZlKHtcbiAgICAgICAgICAgICAgbWVzc2FnZXM6XG4gICAgICAgICAgICAgICAgb3B0aW9ucz8uZGlzcGxheSA9PT0gJ3N5c3RlbSdcbiAgICAgICAgICAgICAgICAgID8gc2tpcFRyYW5zY3JpcHRcbiAgICAgICAgICAgICAgICAgICAgPyBtZXRhTWVzc2FnZXNcbiAgICAgICAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVDb21tYW5kSW5wdXRNZXNzYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXRDb21tYW5kSW5wdXQoY29tbWFuZCwgYXJncyksXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlQ29tbWFuZElucHV0TWVzc2FnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYDxsb2NhbC1jb21tYW5kLXN0ZG91dD4ke3Jlc3VsdH08L2xvY2FsLWNvbW1hbmQtc3Rkb3V0PmAsXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4ubWV0YU1lc3NhZ2VzLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVVzZXJNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHByZXBhcmVVc2VyQ29udGVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0U3RyaW5nOiBmb3JtYXRDb21tYW5kSW5wdXQoY29tbWFuZCwgYXJncyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByZWNlZGluZ0lucHV0QmxvY2tzLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgcmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IGNyZWF0ZVVzZXJNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBgPGxvY2FsLWNvbW1hbmQtc3Rkb3V0PiR7cmVzdWx0fTwvbG9jYWwtY29tbWFuZC1zdGRvdXQ+YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogY3JlYXRlVXNlck1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGA8bG9jYWwtY29tbWFuZC1zdGRvdXQ+JHtOT19DT05URU5UX01FU1NBR0V9PC9sb2NhbC1jb21tYW5kLXN0ZG91dD5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAuLi5tZXRhTWVzc2FnZXMsXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHNob3VsZFF1ZXJ5OiBvcHRpb25zPy5zaG91bGRRdWVyeSA/PyBmYWxzZSxcbiAgICAgICAgICAgICAgY29tbWFuZCxcbiAgICAgICAgICAgICAgbmV4dElucHV0OiBvcHRpb25zPy5uZXh0SW5wdXQsXG4gICAgICAgICAgICAgIHN1Ym1pdE5leHRJbnB1dDogb3B0aW9ucz8uc3VibWl0TmV4dElucHV0LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2b2lkIGNvbW1hbmRcbiAgICAgICAgICAgIC5sb2FkKClcbiAgICAgICAgICAgIC50aGVuKG1vZCA9PiBtb2QuY2FsbChvbkRvbmUsIHsgLi4uY29udGV4dCwgY2FuVXNlVG9vbCB9LCBhcmdzKSlcbiAgICAgICAgICAgIC50aGVuKGpzeCA9PiB7XG4gICAgICAgICAgICAgIGlmIChqc3ggPT0gbnVsbCkgcmV0dXJuXG4gICAgICAgICAgICAgIGlmIChjb250ZXh0Lm9wdGlvbnMuaXNOb25JbnRlcmFjdGl2ZVNlc3Npb24pIHtcbiAgICAgICAgICAgICAgICB2b2lkIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgc2hvdWxkUXVlcnk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgY29tbWFuZCxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIEd1YXJkOiBpZiBvbkRvbmUgZmlyZWQgZHVyaW5nIG1vZC5jYWxsKCkgKGVhcmx5LWV4aXQgcGF0aFxuICAgICAgICAgICAgICAvLyB0aGF0IGNhbGxzIG9uRG9uZSB0aGVuIHJldHVybnMgSlNYKSwgc2tpcCBzZXRUb29sSlNYLiBUaGlzXG4gICAgICAgICAgICAgIC8vIGNoYWluIGlzIGZpcmUtYW5kLWZvcmdldCDigJQgdGhlIG91dGVyIFByb21pc2UgcmVzb2x2ZXMgd2hlblxuICAgICAgICAgICAgICAvLyBvbkRvbmUgaXMgY2FsbGVkLCBzbyBleGVjdXRlVXNlcklucHV0IG1heSBoYXZlIGFscmVhZHkgcnVuXG4gICAgICAgICAgICAgIC8vIGl0cyBzZXRUb29sSlNYKHtjbGVhckxvY2FsSlNYOiB0cnVlfSkgYmVmb3JlIHdlIGdldCBoZXJlLlxuICAgICAgICAgICAgICAvLyBTZXR0aW5nIGlzTG9jYWxKU1hDb21tYW5kIGFmdGVyIGNsZWFyIGxlYXZlcyBpdCBzdHVjayB0cnVlLFxuICAgICAgICAgICAgICAvLyBibG9ja2luZyB1c2VRdWV1ZVByb2Nlc3NvciBhbmQgVGV4dElucHV0IGZvY3VzLlxuICAgICAgICAgICAgICBpZiAoZG9uZVdhc0NhbGxlZCkgcmV0dXJuXG4gICAgICAgICAgICAgIHNldFRvb2xKU1goe1xuICAgICAgICAgICAgICAgIGpzeCxcbiAgICAgICAgICAgICAgICBzaG91bGRIaWRlUHJvbXB0SW5wdXQ6IHRydWUsXG4gICAgICAgICAgICAgICAgc2hvd1NwaW5uZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGlzTG9jYWxKU1hDb21tYW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlzSW1tZWRpYXRlOiBjb21tYW5kLmltbWVkaWF0ZSA9PT0gdHJ1ZSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICAgIC8vIElmIGxvYWQoKS9jYWxsKCkgdGhyb3dzIGFuZCBvbkRvbmUgbmV2ZXIgZmlyZWQsIHRoZSBvdXRlclxuICAgICAgICAgICAgICAvLyBQcm9taXNlIGhhbmdzIGZvcmV2ZXIsIGxlYXZpbmcgcXVlcnlHdWFyZCBzdHVjayBpblxuICAgICAgICAgICAgICAvLyAnZGlzcGF0Y2hpbmcnIGFuZCBkZWFkbG9ja2luZyB0aGUgcXVldWUgcHJvY2Vzc29yLlxuICAgICAgICAgICAgICBsb2dFcnJvcihlKVxuICAgICAgICAgICAgICBpZiAoZG9uZVdhc0NhbGxlZCkgcmV0dXJuXG4gICAgICAgICAgICAgIGRvbmVXYXNDYWxsZWQgPSB0cnVlXG4gICAgICAgICAgICAgIHNldFRvb2xKU1goe1xuICAgICAgICAgICAgICAgIGpzeDogbnVsbCxcbiAgICAgICAgICAgICAgICBzaG91bGRIaWRlUHJvbXB0SW5wdXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNsZWFyTG9jYWxKU1g6IHRydWUsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIHZvaWQgcmVzb2x2ZSh7IG1lc3NhZ2VzOiBbXSwgc2hvdWxkUXVlcnk6IGZhbHNlLCBjb21tYW5kIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgY2FzZSAnbG9jYWwnOiB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlBcmdzID0gY29tbWFuZC5pc1NlbnNpdGl2ZSAmJiBhcmdzLnRyaW0oKSA/ICcqKionIDogYXJnc1xuICAgICAgICBjb25zdCB1c2VyTWVzc2FnZSA9IGNyZWF0ZVVzZXJNZXNzYWdlKHtcbiAgICAgICAgICBjb250ZW50OiBwcmVwYXJlVXNlckNvbnRlbnQoe1xuICAgICAgICAgICAgaW5wdXRTdHJpbmc6IGZvcm1hdENvbW1hbmRJbnB1dChjb21tYW5kLCBkaXNwbGF5QXJncyksXG4gICAgICAgICAgICBwcmVjZWRpbmdJbnB1dEJsb2NrcyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSlcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHN5bnRoZXRpY0NhdmVhdE1lc3NhZ2UgPSBjcmVhdGVTeW50aGV0aWNVc2VyQ2F2ZWF0TWVzc2FnZSgpXG4gICAgICAgICAgY29uc3QgbW9kID0gYXdhaXQgY29tbWFuZC5sb2FkKClcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtb2QuY2FsbChhcmdzLCBjb250ZXh0KVxuXG4gICAgICAgICAgaWYgKHJlc3VsdC50eXBlID09PSAnc2tpcCcpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICAgICAgICAgICAgc2hvdWxkUXVlcnk6IGZhbHNlLFxuICAgICAgICAgICAgICBjb21tYW5kLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFVzZSBkaXNjcmltaW5hdGVkIHVuaW9uIHRvIGhhbmRsZSBkaWZmZXJlbnQgcmVzdWx0IHR5cGVzXG4gICAgICAgICAgaWYgKHJlc3VsdC50eXBlID09PSAnY29tcGFjdCcpIHtcbiAgICAgICAgICAgIC8vIEFwcGVuZCBzbGFzaCBjb21tYW5kIG1lc3NhZ2VzIHRvIG1lc3NhZ2VzVG9LZWVwIHNvIHRoYXRcbiAgICAgICAgICAgIC8vIGF0dGFjaG1lbnRzIGFuZCBob29rUmVzdWx0cyBjb21lIGFmdGVyIHVzZXIgbWVzc2FnZXNcbiAgICAgICAgICAgIGNvbnN0IHNsYXNoQ29tbWFuZE1lc3NhZ2VzID0gW1xuICAgICAgICAgICAgICBzeW50aGV0aWNDYXZlYXRNZXNzYWdlLFxuICAgICAgICAgICAgICB1c2VyTWVzc2FnZSxcbiAgICAgICAgICAgICAgLi4uKHJlc3VsdC5kaXNwbGF5VGV4dFxuICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVVc2VyTWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudDogYDxsb2NhbC1jb21tYW5kLXN0ZG91dD4ke3Jlc3VsdC5kaXNwbGF5VGV4dH08L2xvY2FsLWNvbW1hbmQtc3Rkb3V0PmAsXG4gICAgICAgICAgICAgICAgICAgICAgLy8gLS1yZXN1bWUgbG9va3MgYXQgbGF0ZXN0IHRpbWVzdGFtcCBtZXNzYWdlIHRvIGRldGVybWluZSB3aGljaCBtZXNzYWdlIHRvIHJlc3VtZSBmcm9tXG4gICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIHBlcmYgb3B0aW1pemF0aW9uIHRvIGF2b2lkIGhhdmluZyB0byByZWNhY3VsY2F0ZSB0aGUgbGVhZiBub2RlIGV2ZXJ5IHRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSB3ZSdyZSBjcmVhdGluZyBhIGJ1bmNoIG9mIHN5bnRoZXRpYyBtZXNzYWdlcyBmb3IgY29tcGFjdCwgaXQncyBpbXBvcnRhbnQgdG8gc2V0XG4gICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHRpbWVzdGFtcCBvZiB0aGUgbGFzdCBtZXNzYWdlIHRvIGJlIHNsaWdodGx5IGFmdGVyIHRoZSBjdXJyZW50IHRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIG1vc3RseSBpbXBvcnRhbnQgZm9yIHNkayAvIC1wIG1vZGVcbiAgICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKERhdGUubm93KCkgKyAxMDApLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIDogW10pLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgY29uc3QgY29tcGFjdGlvblJlc3VsdFdpdGhTbGFzaE1lc3NhZ2VzID0ge1xuICAgICAgICAgICAgICAuLi5yZXN1bHQuY29tcGFjdGlvblJlc3VsdCxcbiAgICAgICAgICAgICAgbWVzc2FnZXNUb0tlZXA6IFtcbiAgICAgICAgICAgICAgICAuLi4ocmVzdWx0LmNvbXBhY3Rpb25SZXN1bHQubWVzc2FnZXNUb0tlZXAgPz8gW10pLFxuICAgICAgICAgICAgICAgIC4uLnNsYXNoQ29tbWFuZE1lc3NhZ2VzLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVzZXQgbWljcm9jb21wYWN0IHN0YXRlIHNpbmNlIGZ1bGwgY29tcGFjdCByZXBsYWNlcyBhbGxcbiAgICAgICAgICAgIC8vIG1lc3NhZ2VzIOKAlCBvbGQgdG9vbCBJRHMgYXJlIG5vIGxvbmdlciByZWxldmFudC4gQnVkZ2V0IHN0YXRlXG4gICAgICAgICAgICAvLyAob24gdG9vbFVzZUNvbnRleHQpIG5lZWRzIG5vIHJlc2V0OiBzdGFsZSBlbnRyaWVzIGFyZSBpbmVydFxuICAgICAgICAgICAgLy8gKFVVSURzIG5ldmVyIHJlcGVhdCwgc28gdGhleSdyZSBuZXZlciBsb29rZWQgdXApLlxuICAgICAgICAgICAgcmVzZXRNaWNyb2NvbXBhY3RTdGF0ZSgpXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBtZXNzYWdlczogYnVpbGRQb3N0Q29tcGFjdE1lc3NhZ2VzKFxuICAgICAgICAgICAgICAgIGNvbXBhY3Rpb25SZXN1bHRXaXRoU2xhc2hNZXNzYWdlcyxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgc2hvdWxkUXVlcnk6IGZhbHNlLFxuICAgICAgICAgICAgICBjb21tYW5kLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFRleHQgcmVzdWx0IOKAlCB1c2Ugc3lzdGVtIG1lc3NhZ2Ugc28gaXQgZG9lc24ndCByZW5kZXIgYXMgYSB1c2VyIGJ1YmJsZVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgICB1c2VyTWVzc2FnZSxcbiAgICAgICAgICAgICAgY3JlYXRlQ29tbWFuZElucHV0TWVzc2FnZShcbiAgICAgICAgICAgICAgICBgPGxvY2FsLWNvbW1hbmQtc3Rkb3V0PiR7cmVzdWx0LnZhbHVlfTwvbG9jYWwtY29tbWFuZC1zdGRvdXQ+YCxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzaG91bGRRdWVyeTogZmFsc2UsXG4gICAgICAgICAgICBjb21tYW5kLFxuICAgICAgICAgICAgcmVzdWx0VGV4dDogcmVzdWx0LnZhbHVlLFxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGxvZ0Vycm9yKGUpXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICAgIHVzZXJNZXNzYWdlLFxuICAgICAgICAgICAgICBjcmVhdGVDb21tYW5kSW5wdXRNZXNzYWdlKFxuICAgICAgICAgICAgICAgIGA8bG9jYWwtY29tbWFuZC1zdGRlcnI+JHtTdHJpbmcoZSl9PC9sb2NhbC1jb21tYW5kLXN0ZGVycj5gLFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHNob3VsZFF1ZXJ5OiBmYWxzZSxcbiAgICAgICAgICAgIGNvbW1hbmQsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYXNlICdwcm9tcHQnOiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgY29tbWFuZCBzaG91bGQgcnVuIGFzIGZvcmtlZCBzdWItYWdlbnRcbiAgICAgICAgICBpZiAoY29tbWFuZC5jb250ZXh0ID09PSAnZm9yaycpIHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBleGVjdXRlRm9ya2VkU2xhc2hDb21tYW5kKFxuICAgICAgICAgICAgICBjb21tYW5kLFxuICAgICAgICAgICAgICBhcmdzLFxuICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgICBwcmVjZWRpbmdJbnB1dEJsb2NrcyxcbiAgICAgICAgICAgICAgc2V0VG9vbEpTWCxcbiAgICAgICAgICAgICAgY2FuVXNlVG9vbCA/PyBoYXNQZXJtaXNzaW9uc1RvVXNlVG9vbCxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gYXdhaXQgZ2V0TWVzc2FnZXNGb3JQcm9tcHRTbGFzaENvbW1hbmQoXG4gICAgICAgICAgICBjb21tYW5kLFxuICAgICAgICAgICAgYXJncyxcbiAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICBwcmVjZWRpbmdJbnB1dEJsb2NrcyxcbiAgICAgICAgICAgIGltYWdlQ29udGVudEJsb2NrcyxcbiAgICAgICAgICAgIHV1aWQsXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gSGFuZGxlIGFib3J0IGVycm9ycyBzcGVjaWFsbHkgdG8gc2hvdyBwcm9wZXIgXCJJbnRlcnJ1cHRlZFwiIG1lc3NhZ2VcbiAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEFib3J0RXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICAgICAgY3JlYXRlVXNlck1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgY29udGVudDogcHJlcGFyZVVzZXJDb250ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRTdHJpbmc6IGZvcm1hdENvbW1hbmRJbnB1dChjb21tYW5kLCBhcmdzKSxcbiAgICAgICAgICAgICAgICAgICAgcHJlY2VkaW5nSW5wdXRCbG9ja3MsXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjcmVhdGVVc2VySW50ZXJydXB0aW9uTWVzc2FnZSh7IHRvb2xVc2U6IGZhbHNlIH0pLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzaG91bGRRdWVyeTogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbW1hbmQsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgICBjcmVhdGVVc2VyTWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgY29udGVudDogcHJlcGFyZVVzZXJDb250ZW50KHtcbiAgICAgICAgICAgICAgICAgIGlucHV0U3RyaW5nOiBmb3JtYXRDb21tYW5kSW5wdXQoY29tbWFuZCwgYXJncyksXG4gICAgICAgICAgICAgICAgICBwcmVjZWRpbmdJbnB1dEJsb2NrcyxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIGNyZWF0ZVVzZXJNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBgPGxvY2FsLWNvbW1hbmQtc3RkZXJyPiR7U3RyaW5nKGUpfTwvbG9jYWwtY29tbWFuZC1zdGRlcnI+YCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc2hvdWxkUXVlcnk6IGZhbHNlLFxuICAgICAgICAgICAgY29tbWFuZCxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoZSBpbnN0YW5jZW9mIE1hbGZvcm1lZENvbW1hbmRFcnJvcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjcmVhdGVVc2VyTWVzc2FnZSh7XG4gICAgICAgICAgICBjb250ZW50OiBwcmVwYXJlVXNlckNvbnRlbnQoe1xuICAgICAgICAgICAgICBpbnB1dFN0cmluZzogZS5tZXNzYWdlLFxuICAgICAgICAgICAgICBwcmVjZWRpbmdJbnB1dEJsb2NrcyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgICBzaG91bGRRdWVyeTogZmFsc2UsXG4gICAgICAgIGNvbW1hbmQsXG4gICAgICB9XG4gICAgfVxuICAgIHRocm93IGVcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRDb21tYW5kSW5wdXQoY29tbWFuZDogQ29tbWFuZEJhc2UsIGFyZ3M6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBmb3JtYXRDb21tYW5kSW5wdXRUYWdzKGdldENvbW1hbmROYW1lKGNvbW1hbmQpLCBhcmdzKVxufVxuXG4vKipcbiAqIEZvcm1hdHMgdGhlIG1ldGFkYXRhIGZvciBhIHNraWxsIGxvYWRpbmcgbWVzc2FnZS5cbiAqIFVzZWQgYnkgdGhlIFNraWxsIHRvb2wgYW5kIGZvciBzdWJhZ2VudCBza2lsbCBwcmVsb2FkaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0U2tpbGxMb2FkaW5nTWV0YWRhdGEoXG4gIHNraWxsTmFtZTogc3RyaW5nLFxuICBfcHJvZ3Jlc3NNZXNzYWdlOiBzdHJpbmcgPSAnbG9hZGluZycsXG4pOiBzdHJpbmcge1xuICAvLyBVc2Ugc2tpbGwgbmFtZSBvbmx5IC0gVXNlckNvbW1hbmRNZXNzYWdlIHJlbmRlcnMgYXMgXCJTa2lsbChuYW1lKVwiXG4gIHJldHVybiBbXG4gICAgYDwke0NPTU1BTkRfTUVTU0FHRV9UQUd9PiR7c2tpbGxOYW1lfTwvJHtDT01NQU5EX01FU1NBR0VfVEFHfT5gLFxuICAgIGA8JHtDT01NQU5EX05BTUVfVEFHfT4ke3NraWxsTmFtZX08LyR7Q09NTUFORF9OQU1FX1RBR30+YCxcbiAgICBgPHNraWxsLWZvcm1hdD50cnVlPC9za2lsbC1mb3JtYXQ+YCxcbiAgXS5qb2luKCdcXG4nKVxufVxuXG4vKipcbiAqIEZvcm1hdHMgdGhlIG1ldGFkYXRhIGZvciBhIHNsYXNoIGNvbW1hbmQgbG9hZGluZyBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBmb3JtYXRTbGFzaENvbW1hbmRMb2FkaW5nTWV0YWRhdGEoXG4gIGNvbW1hbmROYW1lOiBzdHJpbmcsXG4gIGFyZ3M/OiBzdHJpbmcsXG4pOiBzdHJpbmcge1xuICByZXR1cm4gW1xuICAgIGA8JHtDT01NQU5EX01FU1NBR0VfVEFHfT4ke2NvbW1hbmROYW1lfTwvJHtDT01NQU5EX01FU1NBR0VfVEFHfT5gLFxuICAgIGA8JHtDT01NQU5EX05BTUVfVEFHfT4vJHtjb21tYW5kTmFtZX08LyR7Q09NTUFORF9OQU1FX1RBR30+YCxcbiAgICBhcmdzID8gYDxjb21tYW5kLWFyZ3M+JHthcmdzfTwvY29tbWFuZC1hcmdzPmAgOiBudWxsLFxuICBdXG4gICAgLmZpbHRlcihCb29sZWFuKVxuICAgIC5qb2luKCdcXG4nKVxufVxuXG4vKipcbiAqIEZvcm1hdHMgdGhlIGxvYWRpbmcgbWV0YWRhdGEgZm9yIGEgY29tbWFuZCAoc2tpbGwgb3Igc2xhc2ggY29tbWFuZCkuXG4gKiBVc2VyLWludm9jYWJsZSBza2lsbHMgdXNlIHNsYXNoIGNvbW1hbmQgZm9ybWF0ICgvbmFtZSksIHdoaWxlIG1vZGVsLW9ubHlcbiAqIHNraWxscyB1c2UgdGhlIHNraWxsIGZvcm1hdCAoXCJUaGUgWCBza2lsbCBpcyBydW5uaW5nXCIpLlxuICovXG5mdW5jdGlvbiBmb3JtYXRDb21tYW5kTG9hZGluZ01ldGFkYXRhKFxuICBjb21tYW5kOiBDb21tYW5kQmFzZSAmIFByb21wdENvbW1hbmQsXG4gIGFyZ3M/OiBzdHJpbmcsXG4pOiBzdHJpbmcge1xuICAvLyBVc2UgY29tbWFuZC5uYW1lICh0aGUgcXVhbGlmaWVkIG5hbWUgaW5jbHVkaW5nIHBsdWdpbiBwcmVmaXgsIGUuZy5cbiAgLy8gXCJwcm9kdWN0LW1hbmFnZW1lbnQ6ZmVhdHVyZS1zcGVjXCIpIGluc3RlYWQgb2YgdXNlckZhY2luZ05hbWUoKSB3aGljaCBtYXlcbiAgLy8gc3RyaXAgdGhlIHBsdWdpbiBwcmVmaXggdmlhIGRpc3BsYXlOYW1lIGZhbGxiYWNrLlxuICAvLyBVc2VyLWludm9jYWJsZSBza2lsbHMgc2hvdWxkIHNob3cgYXMgL2NvbW1hbmQtbmFtZSBsaWtlIHJlZ3VsYXIgc2xhc2ggY29tbWFuZHNcbiAgaWYgKGNvbW1hbmQudXNlckludm9jYWJsZSAhPT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZm9ybWF0U2xhc2hDb21tYW5kTG9hZGluZ01ldGFkYXRhKGNvbW1hbmQubmFtZSwgYXJncylcbiAgfVxuICAvLyBNb2RlbC1vbmx5IHNraWxscyAodXNlckludm9jYWJsZTogZmFsc2UpIHNob3cgYXMgXCJUaGUgWCBza2lsbCBpcyBydW5uaW5nXCJcbiAgaWYgKFxuICAgIGNvbW1hbmQubG9hZGVkRnJvbSA9PT0gJ3NraWxscycgfHxcbiAgICBjb21tYW5kLmxvYWRlZEZyb20gPT09ICdwbHVnaW4nIHx8XG4gICAgY29tbWFuZC5sb2FkZWRGcm9tID09PSAnbWNwJ1xuICApIHtcbiAgICByZXR1cm4gZm9ybWF0U2tpbGxMb2FkaW5nTWV0YWRhdGEoY29tbWFuZC5uYW1lLCBjb21tYW5kLnByb2dyZXNzTWVzc2FnZSlcbiAgfVxuICByZXR1cm4gZm9ybWF0U2xhc2hDb21tYW5kTG9hZGluZ01ldGFkYXRhKGNvbW1hbmQubmFtZSwgYXJncylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NQcm9tcHRTbGFzaENvbW1hbmQoXG4gIGNvbW1hbmROYW1lOiBzdHJpbmcsXG4gIGFyZ3M6IHN0cmluZyxcbiAgY29tbWFuZHM6IENvbW1hbmRbXSxcbiAgY29udGV4dDogVG9vbFVzZUNvbnRleHQsXG4gIGltYWdlQ29udGVudEJsb2NrczogQ29udGVudEJsb2NrUGFyYW1bXSA9IFtdLFxuKTogUHJvbWlzZTxTbGFzaENvbW1hbmRSZXN1bHQ+IHtcbiAgY29uc3QgY29tbWFuZCA9IGZpbmRDb21tYW5kKGNvbW1hbmROYW1lLCBjb21tYW5kcylcbiAgaWYgKCFjb21tYW5kKSB7XG4gICAgdGhyb3cgbmV3IE1hbGZvcm1lZENvbW1hbmRFcnJvcihgVW5rbm93biBjb21tYW5kOiAke2NvbW1hbmROYW1lfWApXG4gIH1cbiAgaWYgKGNvbW1hbmQudHlwZSAhPT0gJ3Byb21wdCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgVW5leHBlY3RlZCAke2NvbW1hbmQudHlwZX0gY29tbWFuZC4gRXhwZWN0ZWQgJ3Byb21wdCcgY29tbWFuZC4gVXNlIC8ke2NvbW1hbmROYW1lfSBkaXJlY3RseSBpbiB0aGUgbWFpbiBjb252ZXJzYXRpb24uYCxcbiAgICApXG4gIH1cbiAgcmV0dXJuIGdldE1lc3NhZ2VzRm9yUHJvbXB0U2xhc2hDb21tYW5kKFxuICAgIGNvbW1hbmQsXG4gICAgYXJncyxcbiAgICBjb250ZXh0LFxuICAgIFtdLFxuICAgIGltYWdlQ29udGVudEJsb2NrcyxcbiAgKVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRNZXNzYWdlc0ZvclByb21wdFNsYXNoQ29tbWFuZChcbiAgY29tbWFuZDogQ29tbWFuZEJhc2UgJiBQcm9tcHRDb21tYW5kLFxuICBhcmdzOiBzdHJpbmcsXG4gIGNvbnRleHQ6IFRvb2xVc2VDb250ZXh0LFxuICBwcmVjZWRpbmdJbnB1dEJsb2NrczogQ29udGVudEJsb2NrUGFyYW1bXSA9IFtdLFxuICBpbWFnZUNvbnRlbnRCbG9ja3M6IENvbnRlbnRCbG9ja1BhcmFtW10gPSBbXSxcbiAgdXVpZD86IHN0cmluZyxcbik6IFByb21pc2U8U2xhc2hDb21tYW5kUmVzdWx0PiB7XG4gIC8vIEluIGNvb3JkaW5hdG9yIG1vZGUgKG1haW4gdGhyZWFkIG9ubHkpLCBza2lwIGxvYWRpbmcgdGhlIGZ1bGwgc2tpbGwgY29udGVudFxuICAvLyBhbmQgcGVybWlzc2lvbnMuIFRoZSBjb29yZGluYXRvciBvbmx5IGhhcyBBZ2VudCArIFRhc2tTdG9wIHRvb2xzLCBzbyB0aGVcbiAgLy8gc2tpbGwgY29udGVudCBhbmQgYWxsb3dlZFRvb2xzIGFyZSB1c2VsZXNzLiBJbnN0ZWFkLCBzZW5kIGEgYnJpZWYgc3VtbWFyeVxuICAvLyB0ZWxsaW5nIHRoZSBjb29yZGluYXRvciBob3cgdG8gZGVsZWdhdGUgdGhpcyBza2lsbCB0byBhIHdvcmtlci5cbiAgLy9cbiAgLy8gV29ya2VycyBydW4gaW4tcHJvY2VzcyBhbmQgaW5oZXJpdCBDTEFVREVfQ09ERV9DT09SRElOQVRPUl9NT0RFIGZyb20gdGhlXG4gIC8vIHBhcmVudCBlbnYsIHNvIHdlIGFsc28gY2hlY2sgIWNvbnRleHQuYWdlbnRJZDogYWdlbnRJZCBpcyBvbmx5IHNldCBmb3JcbiAgLy8gc3ViYWdlbnRzLCBsZXR0aW5nIHdvcmtlcnMgZmFsbCB0aHJvdWdoIHRvIGdldFByb21wdEZvckNvbW1hbmQgYW5kIHJlY2VpdmVcbiAgLy8gdGhlIHJlYWwgc2tpbGwgY29udGVudCB3aGVuIHRoZXkgaW52b2tlIHRoZSBTa2lsbCB0b29sLlxuICBpZiAoXG4gICAgZmVhdHVyZSgnQ09PUkRJTkFUT1JfTU9ERScpICYmXG4gICAgaXNFbnZUcnV0aHkocHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfQ09PUkRJTkFUT1JfTU9ERSkgJiZcbiAgICAhY29udGV4dC5hZ2VudElkXG4gICkge1xuICAgIGNvbnN0IG1ldGFkYXRhID0gZm9ybWF0Q29tbWFuZExvYWRpbmdNZXRhZGF0YShjb21tYW5kLCBhcmdzKVxuICAgIGNvbnN0IHBhcnRzOiBzdHJpbmdbXSA9IFtcbiAgICAgIGBTa2lsbCBcIi8ke2NvbW1hbmQubmFtZX1cIiBpcyBhdmFpbGFibGUgZm9yIHdvcmtlcnMuYCxcbiAgICBdXG4gICAgaWYgKGNvbW1hbmQuZGVzY3JpcHRpb24pIHtcbiAgICAgIHBhcnRzLnB1c2goYERlc2NyaXB0aW9uOiAke2NvbW1hbmQuZGVzY3JpcHRpb259YClcbiAgICB9XG4gICAgaWYgKGNvbW1hbmQud2hlblRvVXNlKSB7XG4gICAgICBwYXJ0cy5wdXNoKGBXaGVuIHRvIHVzZTogJHtjb21tYW5kLndoZW5Ub1VzZX1gKVxuICAgIH1cbiAgICBjb25zdCBza2lsbEFsbG93ZWRUb29scyA9IGNvbW1hbmQuYWxsb3dlZFRvb2xzID8/IFtdXG4gICAgaWYgKHNraWxsQWxsb3dlZFRvb2xzLmxlbmd0aCA+IDApIHtcbiAgICAgIHBhcnRzLnB1c2goXG4gICAgICAgIGBUaGlzIHNraWxsIGdyYW50cyB3b3JrZXJzIGFkZGl0aW9uYWwgdG9vbCBwZXJtaXNzaW9uczogJHtza2lsbEFsbG93ZWRUb29scy5qb2luKCcsICcpfWAsXG4gICAgICApXG4gICAgfVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBgXFxuSW5zdHJ1Y3QgYSB3b3JrZXIgdG8gdXNlIHRoaXMgc2tpbGwgYnkgaW5jbHVkaW5nIFwiVXNlIHRoZSAvJHtjb21tYW5kLm5hbWV9IHNraWxsXCIgaW4geW91ciBBZ2VudCBwcm9tcHQuIFRoZSB3b3JrZXIgaGFzIGFjY2VzcyB0byB0aGUgU2tpbGwgdG9vbCBhbmQgd2lsbCByZWNlaXZlIHRoZSBza2lsbCdzIGNvbnRlbnQgYW5kIHBlcm1pc3Npb25zIHdoZW4gaXQgaW52b2tlcyBpdC5gLFxuICAgIClcbiAgICBjb25zdCBzdW1tYXJ5Q29udGVudDogQ29udGVudEJsb2NrUGFyYW1bXSA9IFtcbiAgICAgIHsgdHlwZTogJ3RleHQnLCB0ZXh0OiBwYXJ0cy5qb2luKCdcXG4nKSB9LFxuICAgIF1cbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgY3JlYXRlVXNlck1lc3NhZ2UoeyBjb250ZW50OiBtZXRhZGF0YSwgdXVpZCB9KSxcbiAgICAgICAgY3JlYXRlVXNlck1lc3NhZ2UoeyBjb250ZW50OiBzdW1tYXJ5Q29udGVudCwgaXNNZXRhOiB0cnVlIH0pLFxuICAgICAgXSxcbiAgICAgIHNob3VsZFF1ZXJ5OiB0cnVlLFxuICAgICAgbW9kZWw6IGNvbW1hbmQubW9kZWwsXG4gICAgICBlZmZvcnQ6IGNvbW1hbmQuZWZmb3J0LFxuICAgICAgY29tbWFuZCxcbiAgICB9XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb21tYW5kLmdldFByb21wdEZvckNvbW1hbmQoYXJncywgY29udGV4dClcblxuICAvLyBSZWdpc3RlciBza2lsbCBob29rcyBpZiBkZWZpbmVkLiBVbmRlciBbXCJob29rc1wiXS1vbmx5IChza2lsbHMgbm90IGxvY2tlZCksXG4gIC8vIHVzZXIgc2tpbGxzIHN0aWxsIGxvYWQgYW5kIHJlYWNoIHRoaXMgcG9pbnQg4oCUIGJsb2NrIGhvb2sgUkVHSVNUUkFUSU9OIGhlcmVcbiAgLy8gd2hlcmUgc291cmNlIGlzIGtub3duLiBNaXJyb3JzIHRoZSBhZ2VudCBmcm9udG1hdHRlciBnYXRlIGluIHJ1bkFnZW50LnRzLlxuICBjb25zdCBob29rc0FsbG93ZWRGb3JUaGlzU2tpbGwgPVxuICAgICFpc1Jlc3RyaWN0ZWRUb1BsdWdpbk9ubHkoJ2hvb2tzJykgfHwgaXNTb3VyY2VBZG1pblRydXN0ZWQoY29tbWFuZC5zb3VyY2UpXG4gIGlmIChjb21tYW5kLmhvb2tzICYmIGhvb2tzQWxsb3dlZEZvclRoaXNTa2lsbCkge1xuICAgIGNvbnN0IHNlc3Npb25JZCA9IGdldFNlc3Npb25JZCgpXG4gICAgcmVnaXN0ZXJTa2lsbEhvb2tzKFxuICAgICAgY29udGV4dC5zZXRBcHBTdGF0ZSxcbiAgICAgIHNlc3Npb25JZCxcbiAgICAgIGNvbW1hbmQuaG9va3MsXG4gICAgICBjb21tYW5kLm5hbWUsXG4gICAgICBjb21tYW5kLnR5cGUgPT09ICdwcm9tcHQnID8gY29tbWFuZC5za2lsbFJvb3QgOiB1bmRlZmluZWQsXG4gICAgKVxuICB9XG5cbiAgLy8gUmVjb3JkIHNraWxsIGludm9jYXRpb24gZm9yIGNvbXBhY3Rpb24gcHJlc2VydmF0aW9uLCBzY29wZWQgYnkgYWdlbnQgY29udGV4dC5cbiAgLy8gU2tpbGxzIGFyZSB0YWdnZWQgd2l0aCB0aGVpciBhZ2VudElkIHNvIG9ubHkgc2tpbGxzIGJlbG9uZ2luZyB0byB0aGUgY3VycmVudFxuICAvLyBhZ2VudCBhcmUgcmVzdG9yZWQgZHVyaW5nIGNvbXBhY3Rpb24gKHByZXZlbnRpbmcgY3Jvc3MtYWdlbnQgbGVha3MpLlxuICBjb25zdCBza2lsbFBhdGggPSBjb21tYW5kLnNvdXJjZVxuICAgID8gYCR7Y29tbWFuZC5zb3VyY2V9OiR7Y29tbWFuZC5uYW1lfWBcbiAgICA6IGNvbW1hbmQubmFtZVxuICBjb25zdCBza2lsbENvbnRlbnQgPSByZXN1bHRcbiAgICAuZmlsdGVyKChiKTogYiBpcyBUZXh0QmxvY2tQYXJhbSA9PiBiLnR5cGUgPT09ICd0ZXh0JylcbiAgICAubWFwKGIgPT4gYi50ZXh0KVxuICAgIC5qb2luKCdcXG5cXG4nKVxuICBhZGRJbnZva2VkU2tpbGwoXG4gICAgY29tbWFuZC5uYW1lLFxuICAgIHNraWxsUGF0aCxcbiAgICBza2lsbENvbnRlbnQsXG4gICAgZ2V0QWdlbnRDb250ZXh0KCk/LmFnZW50SWQgPz8gbnVsbCxcbiAgKVxuXG4gIGNvbnN0IG1ldGFkYXRhID0gZm9ybWF0Q29tbWFuZExvYWRpbmdNZXRhZGF0YShjb21tYW5kLCBhcmdzKVxuXG4gIGNvbnN0IGFkZGl0aW9uYWxBbGxvd2VkVG9vbHMgPSBwYXJzZVRvb2xMaXN0RnJvbUNMSShcbiAgICBjb21tYW5kLmFsbG93ZWRUb29scyA/PyBbXSxcbiAgKVxuXG4gIC8vIENyZWF0ZSBjb250ZW50IGZvciB0aGUgbWFpbiBtZXNzYWdlLCBpbmNsdWRpbmcgYW55IHBhc3RlZCBpbWFnZXNcbiAgY29uc3QgbWFpbk1lc3NhZ2VDb250ZW50OiBDb250ZW50QmxvY2tQYXJhbVtdID1cbiAgICBpbWFnZUNvbnRlbnRCbG9ja3MubGVuZ3RoID4gMCB8fCBwcmVjZWRpbmdJbnB1dEJsb2Nrcy5sZW5ndGggPiAwXG4gICAgICA/IFsuLi5pbWFnZUNvbnRlbnRCbG9ja3MsIC4uLnByZWNlZGluZ0lucHV0QmxvY2tzLCAuLi5yZXN1bHRdXG4gICAgICA6IHJlc3VsdFxuXG4gIC8vIEV4dHJhY3QgYXR0YWNobWVudHMgZnJvbSBjb21tYW5kIGFyZ3VtZW50cyAoQC1tZW50aW9ucywgTUNQIHJlc291cmNlcyxcbiAgLy8gYWdlbnQgbWVudGlvbnMgaW4gU0tJTEwubWQpLiBza2lwU2tpbGxEaXNjb3ZlcnkgcHJldmVudHMgdGhlIFNLSUxMLm1kXG4gIC8vIGNvbnRlbnQgaXRzZWxmIGZyb20gdHJpZ2dlcmluZyBkaXNjb3Zlcnkg4oCUIGl0J3MgbWV0YS1jb250ZW50LCBub3QgdXNlclxuICAvLyBpbnRlbnQsIGFuZCBhIGxhcmdlIFNLSUxMLm1kIChlLmcuIDExMEtCKSB3b3VsZCBmaXJlIGNodW5rZWQgQUtJIHF1ZXJpZXNcbiAgLy8gYWRkaW5nIHNlY29uZHMgb2YgbGF0ZW5jeSB0byBldmVyeSBza2lsbCBpbnZvY2F0aW9uLlxuICBjb25zdCBhdHRhY2htZW50TWVzc2FnZXMgPSBhd2FpdCB0b0FycmF5KFxuICAgIGdldEF0dGFjaG1lbnRNZXNzYWdlcyhcbiAgICAgIHJlc3VsdFxuICAgICAgICAuZmlsdGVyKChibG9jayk6IGJsb2NrIGlzIFRleHRCbG9ja1BhcmFtID0+IGJsb2NrLnR5cGUgPT09ICd0ZXh0JylcbiAgICAgICAgLm1hcChibG9jayA9PiBibG9jay50ZXh0KVxuICAgICAgICAuam9pbignICcpLFxuICAgICAgY29udGV4dCxcbiAgICAgIG51bGwsXG4gICAgICBbXSwgLy8gcXVldWVkQ29tbWFuZHMgLSBoYW5kbGVkIGJ5IHF1ZXJ5LnRzIGZvciBtaWQtdHVybiBhdHRhY2htZW50c1xuICAgICAgY29udGV4dC5tZXNzYWdlcyxcbiAgICAgICdyZXBsX21haW5fdGhyZWFkJyxcbiAgICAgIHsgc2tpcFNraWxsRGlzY292ZXJ5OiB0cnVlIH0sXG4gICAgKSxcbiAgKVxuXG4gIGNvbnN0IG1lc3NhZ2VzID0gW1xuICAgIGNyZWF0ZVVzZXJNZXNzYWdlKHtcbiAgICAgIGNvbnRlbnQ6IG1ldGFkYXRhLFxuICAgICAgdXVpZCxcbiAgICB9KSxcbiAgICBjcmVhdGVVc2VyTWVzc2FnZSh7XG4gICAgICBjb250ZW50OiBtYWluTWVzc2FnZUNvbnRlbnQsXG4gICAgICBpc01ldGE6IHRydWUsXG4gICAgfSksXG4gICAgLi4uYXR0YWNobWVudE1lc3NhZ2VzLFxuICAgIGNyZWF0ZUF0dGFjaG1lbnRNZXNzYWdlKHtcbiAgICAgIHR5cGU6ICdjb21tYW5kX3Blcm1pc3Npb25zJyxcbiAgICAgIGFsbG93ZWRUb29sczogYWRkaXRpb25hbEFsbG93ZWRUb29scyxcbiAgICAgIG1vZGVsOiBjb21tYW5kLm1vZGVsLFxuICAgIH0pLFxuICBdXG5cbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlcyxcbiAgICBzaG91bGRRdWVyeTogdHJ1ZSxcbiAgICBhbGxvd2VkVG9vbHM6IGFkZGl0aW9uYWxBbGxvd2VkVG9vbHMsXG4gICAgbW9kZWw6IGNvbW1hbmQubW9kZWwsXG4gICAgZWZmb3J0OiBjb21tYW5kLmVmZm9ydCxcbiAgICBjb21tYW5kLFxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJPLFNBQVMsbUJBQ2QsYUFDQSxXQUNBLE9BQ0EsV0FDQSxXQUNNO0FBQ04sTUFBSSxrQkFBa0I7QUFFdEIsYUFBVyxhQUFhLGFBQWE7QUFDbkMsVUFBTSxXQUFXLE1BQU0sU0FBUztBQUNoQyxRQUFJLENBQUMsU0FBVTtBQUVmLGVBQVcsV0FBVyxVQUFVO0FBQzlCLGlCQUFXLFFBQVEsUUFBUSxPQUFPO0FBRWhDLGNBQU0sZ0JBQWdCLEtBQUssT0FDdkIsTUFBTTtBQUNKO0FBQUEsWUFDRSxvQ0FBb0MsU0FBUyxjQUFjLFNBQVM7QUFBQSxVQUN0RTtBQUNBLDRC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QTtBQWFBLElBQU16TSxxQkFBcUI7QUFDM0IsSUFBTVIsd0JBQXdCOzs7IiwKICAibmFtZXMiOiBbInJhbmRvbVVVSUQiLCAiZXhlY3V0ZUZvcmtlZFNsYXNoQ29tbWFuZCIsICJjb21tYW5kIiwgImFyZ3MiLCAiY29udGV4dCIsICJwcmVjZWRpbmdJbnB1dEJsb2NrcyIsICJzZXRUb29sSlNYIiwgImNhblVzZVRvb2wiLCAiYWdlbnRJZCIsICJjcmVhdGVBZ2VudElkIiwgInBsdWdpbk1hcmtldHBsYWNlIiwgInBsdWdpbkluZm8iLCAicGFyc2VQbHVnaW5JZGVudGlmaWVyIiwgInJlcG9zaXRvcnkiLCAibWFya2V0cGxhY2UiLCAidW5kZWZpbmVkIiwgImxvZ0V2ZW50IiwgImNvbW1hbmRfbmFtZSIsICJuYW1lIiwgImludm9jYXRpb25fdHJpZ2dlciIsICJfUFJPVE9fcGx1Z2luX25hbWUiLCAicGx1Z2luTWFuaWZlc3QiLCAiX1BST1RPX21hcmtldHBsYWNlX25hbWUiLCAiYnVpbGRQbHVnaW5Db21tYW5kVGVsZW1ldHJ5RmllbGRzIiwgInNraWxsQ29udGVudCIsICJtb2RpZmllZEdldEFwcFN0YXRlIiwgImJhc2VBZ2VudCIsICJwcm9tcHRNZXNzYWdlcyIsICJwcmVwYXJlRm9ya2VkQ29tbWFuZENvbnRleHQiLCAiYWdlbnREZWZpbml0aW9uIiwgImVmZm9ydCIsICJsb2dGb3JEZWJ1Z2dpbmciLCAiYWdlbnRUeXBlIiwgImZlYXR1cmUiLCAiZ2V0QXBwU3RhdGUiLCAia2Fpcm9zRW5hYmxlZCIsICJiZ0Fib3J0Q29udHJvbGxlciIsICJjcmVhdGVBYm9ydENvbnRyb2xsZXIiLCAiY29tbWFuZE5hbWUiLCAiZ2V0Q29tbWFuZE5hbWUiLCAic3Bhd25UaW1lV29ya2xvYWQiLCAiZ2V0V29ya2xvYWQiLCAiZW5xdWV1ZVJlc3VsdCIsICJ2YWx1ZSIsICJlbnF1ZXVlUGVuZGluZ05vdGlmaWNhdGlvbiIsICJtb2RlIiwgInByaW9yaXR5IiwgImlzTWV0YSIsICJza2lwU2xhc2hDb21tYW5kcyIsICJ3b3JrbG9hZCIsICJkZWFkbGluZSIsICJEYXRlIiwgIm5vdyIsICJNQ1BfU0VUVExFX1RJTUVPVVRfTVMiLCAicyIsICJtY3AiLCAiY2xpZW50cyIsICJzb21lIiwgImMiLCAidHlwZSIsICJzbGVlcCIsICJNQ1BfU0VUVExFX1BPTExfTVMiLCAiZnJlc2hUb29scyIsICJvcHRpb25zIiwgInJlZnJlc2hUb29scyIsICJ0b29scyIsICJhZ2VudE1lc3NhZ2VzIiwgIm1lc3NhZ2UiLCAicnVuQWdlbnQiLCAidG9vbFVzZUNvbnRleHQiLCAiYWJvcnRDb250cm9sbGVyIiwgImlzQXN5bmMiLCAicXVlcnlTb3VyY2UiLCAibW9kZWwiLCAiYXZhaWxhYmxlVG9vbHMiLCAib3ZlcnJpZGUiLCAicHVzaCIsICJyZXN1bHRUZXh0IiwgImV4dHJhY3RSZXN1bHRUZXh0IiwgImNhdGNoIiwgImVyciIsICJsb2dFcnJvciIsICJFcnJvciIsICJTdHJpbmciLCAibWVzc2FnZXMiLCAic2hvdWxkUXVlcnkiLCAicHJvZ3Jlc3NNZXNzYWdlcyIsICJwYXJlbnRUb29sVXNlSUQiLCAidG9vbFVzZUNvdW50ZXIiLCAiY3JlYXRlUHJvZ3Jlc3NNZXNzYWdlIiwgImRhdGEiLCAicHJvbXB0IiwgInRvb2xVc2VJRCIsICJ0aW1lc3RhbXAiLCAidG9JU09TdHJpbmciLCAidXVpZCIsICJ1cGRhdGVQcm9ncmVzcyIsICJqc3giLCAicmVuZGVyVG9vbFVzZVByb2dyZXNzTWVzc2FnZSIsICJ2ZXJib3NlIiwgInNob3VsZEhpZGVQcm9tcHRJbnB1dCIsICJzaG91bGRDb250aW51ZUFuaW1hdGlvbiIsICJzaG93U3Bpbm5lciIsICJub3JtYWxpemVkTmV3IiwgIm5vcm1hbGl6ZU1lc3NhZ2VzIiwgImNvbnRlbnRMZW5ndGgiLCAiZ2V0QXNzaXN0YW50TWVzc2FnZUNvbnRlbnRMZW5ndGgiLCAic2V0UmVzcG9uc2VMZW5ndGgiLCAibGVuIiwgIm5vcm1hbGl6ZWRNc2ciLCAiZ2V0RGlzcGxheVBhdGgiLCAiZ2V0RHVtcFByb21wdHNQYXRoIiwgImNyZWF0ZVVzZXJNZXNzYWdlIiwgImNvbnRlbnQiLCAicHJlcGFyZVVzZXJDb250ZW50IiwgImlucHV0U3RyaW5nIiwgInRyaW0iLCAibG9va3NMaWtlQ29tbWFuZCIsICJ0ZXN0IiwgInByb2Nlc3NTbGFzaENvbW1hbmQiLCAiaW1hZ2VDb250ZW50QmxvY2tzIiwgImF0dGFjaG1lbnRNZXNzYWdlcyIsICJpc0FscmVhZHlQcm9jZXNzaW5nIiwgInBhcnNlZCIsICJwYXJzZVNsYXNoQ29tbWFuZCIsICJlcnJvck1lc3NhZ2UiLCAiY3JlYXRlU3ludGhldGljVXNlckNhdmVhdE1lc3NhZ2UiLCAicGFyc2VkQXJncyIsICJpc01jcCIsICJzYW5pdGl6ZWRDb21tYW5kTmFtZSIsICJidWlsdEluQ29tbWFuZE5hbWVzIiwgImhhcyIsICJoYXNDb21tYW5kIiwgImNvbW1hbmRzIiwgImlzRmlsZVBhdGgiLCAiZ2V0RnNJbXBsZW1lbnRhdGlvbiIsICJzdGF0IiwgImlucHV0IiwgInVua25vd25NZXNzYWdlIiwgImNyZWF0ZVN5c3RlbU1lc3NhZ2UiLCAicHJvbXB0SWQiLCAic2V0UHJvbXB0SWQiLCAibG9nT1RlbEV2ZW50IiwgInByb21wdF9sZW5ndGgiLCAibGVuZ3RoIiwgInJlZGFjdElmRGlzYWJsZWQiLCAibmV3TWVzc2FnZXMiLCAibWVzc2FnZVNob3VsZFF1ZXJ5IiwgImFsbG93ZWRUb29scyIsICJyZXR1cm5lZENvbW1hbmQiLCAibmV4dElucHV0IiwgInN1Ym1pdE5leHRJbnB1dCIsICJnZXRNZXNzYWdlc0ZvclNsYXNoQ29tbWFuZCIsICJldmVudERhdGEiLCAiaXNPZmZpY2lhbCIsICJpc09mZmljaWFsTWFya2V0cGxhY2VOYW1lIiwgInBsdWdpbl9yZXBvc2l0b3J5IiwgInBsdWdpbl9uYW1lIiwgInZlcnNpb24iLCAicGx1Z2luX3ZlcnNpb24iLCAiT2JqZWN0IiwgImFzc2lnbiIsICJzdGFydHNXaXRoIiwgImxvb2tzTGlrZUZpbGVQYXRoIiwgImlzQ29tcGFjdFJlc3VsdCIsICJpc0NvbXBhY3RCb3VuZGFyeU1lc3NhZ2UiLCAiZXZlcnkiLCAiaXNTeXN0ZW1Mb2NhbENvbW1hbmRNZXNzYWdlIiwgIl9pc0FscmVhZHlQcm9jZXNzaW5nIiwgImdldENvbW1hbmQiLCAidXNlckludm9jYWJsZSIsICJyZWNvcmRTa2lsbFVzYWdlIiwgIlByb21pc2UiLCAicmVzb2x2ZSIsICJkb25lV2FzQ2FsbGVkIiwgIm9uRG9uZSIsICJyZXN1bHQiLCAiZGlzcGxheSIsICJtZXRhTWVzc2FnZXMiLCAibWFwIiwgInNraXBUcmFuc2NyaXB0IiwgImlzRnVsbHNjcmVlbkVudkVuYWJsZWQiLCAiZW5kc1dpdGgiLCAiY3JlYXRlQ29tbWFuZElucHV0TWVzc2FnZSIsICJmb3JtYXRDb21tYW5kSW5wdXQiLCAiTk9fQ09OVEVOVF9NRVNTQUdFIiwgImxvYWQiLCAidGhlbiIsICJtb2QiLCAiY2FsbCIsICJpc05vbkludGVyYWN0aXZlU2Vzc2lvbiIsICJpc0xvY2FsSlNYQ29tbWFuZCIsICJpc0ltbWVkaWF0ZSIsICJpbW1lZGlhdGUiLCAiZSIsICJjbGVhckxvY2FsSlNYIiwgImRpc3BsYXlBcmdzIiwgImlzU2Vuc2l0aXZlIiwgInVzZXJNZXNzYWdlIiwgInN5bnRoZXRpY0NhdmVhdE1lc3NhZ2UiLCAic2xhc2hDb21tYW5kTWVzc2FnZXMiLCAiZGlzcGxheVRleHQiLCAiY29tcGFjdGlvblJlc3VsdFdpdGhTbGFzaE1lc3NhZ2VzIiwgImNvbXBhY3Rpb25SZXN1bHQiLCAibWVzc2FnZXNUb0tlZXAiLCAicmVzZXRNaWNyb2NvbXBhY3RTdGF0ZSIsICJidWlsZFBvc3RDb21wYWN0TWVzc2FnZXMiLCAiaGFzUGVybWlzc2lvbnNUb1VzZVRvb2wiLCAiZ2V0TWVzc2FnZXNGb3JQcm9tcHRTbGFzaENvbW1hbmQiLCAiQWJvcnRFcnJvciIsICJjcmVhdGVVc2VySW50ZXJydXB0aW9uTWVzc2FnZSIsICJ0b29sVXNlIiwgIk1hbGZvcm1lZENvbW1hbmRFcnJvciIsICJmb3JtYXRDb21tYW5kSW5wdXRUYWdzIiwgImZvcm1hdFNraWxsTG9hZGluZ01ldGFkYXRhIiwgInNraWxsTmFtZSIsICJfcHJvZ3Jlc3NNZXNzYWdlIiwgIkNPTU1BTkRfTUVTU0FHRV9UQUciLCAiQ09NTUFORF9OQU1FX1RBRyIsICJqb2luIiwgImZvcm1hdFNsYXNoQ29tbWFuZExvYWRpbmdNZXRhZGF0YSIsICJmaWx0ZXIiLCAiQm9vbGVhbiIsICJmb3JtYXRDb21tYW5kTG9hZGluZ01ldGFkYXRhIiwgImxvYWRlZEZyb20iLCAicHJvZ3Jlc3NNZXNzYWdlIiwgInByb2Nlc3NQcm9tcHRTbGFzaENvbW1hbmQiLCAiZmluZENvbW1hbmQiLCAiaXNFbnZUcnV0aHkiLCAicHJvY2VzcyIsICJlbnYiLCAiQ0xBVURFX0NPREVfQ09PUkRJTkFUT1JfTU9ERSIsICJtZXRhZGF0YSIsICJwYXJ0cyIsICJkZXNjcmlwdGlvbiIsICJ3aGVuVG9Vc2UiLCAic2tpbGxBbGxvd2VkVG9vbHMiLCAic3VtbWFyeUNvbnRlbnQiLCAidGV4dCIsICJnZXRQcm9tcHRGb3JDb21tYW5kIiwgImhvb2tzQWxsb3dlZEZvclRoaXNTa2lsbCIsICJpc1Jlc3RyaWN0ZWRUb1BsdWdpbk9ubHkiLCAiaXNTb3VyY2VBZG1pblRydXN0ZWQiLCAic291cmNlIiwgImhvb2tzIiwgInNlc3Npb25JZCIsICJnZXRTZXNzaW9uSWQiLCAicmVnaXN0ZXJTa2lsbEhvb2tzIiwgInNldEFwcFN0YXRlIiwgInNraWxsUm9vdCIsICJza2lsbFBhdGgiLCAiYiIsICJhZGRJbnZva2VkU2tpbGwiLCAiZ2V0QWdlbnRDb250ZXh0IiwgImFkZGl0aW9uYWxBbGxvd2VkVG9vbHMiLCAicGFyc2VUb29sTGlzdEZyb21DTEkiLCAibWFpbk1lc3NhZ2VDb250ZW50IiwgInRvQXJyYXkiLCAiZ2V0QXR0YWNobWVudE1lc3NhZ2VzIiwgImJsb2NrIiwgInNraXBTa2lsbERpc2NvdmVyeSIsICJjcmVhdGVBdHRhY2htZW50TWVzc2FnZSIsICJpbml0X21lc3NhZ2VzIl0KfQo=
