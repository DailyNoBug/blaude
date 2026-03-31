import { buildSystemPrompt } from "./prompt.mjs";
import { resolveAgent } from "./agents.mjs";
import { autoCompactMessages } from "./context.mjs";
import { createMcpManager } from "./mcp.mjs";
import {
  createAssistantMessage,
  createToolResultMessage,
  createUserMessage,
  normalizeMessages,
} from "./messages.mjs";
import { getProjectStatePaths } from "./storage.mjs";
import { toolToAPISchema } from "./schema.mjs";
import { getAllToolDefinitions, resolveToolSelection } from "./tools.mjs";

function collectText(content = []) {
  return content
    .filter((block) => block?.type === "text" && typeof block.text === "string")
    .map((block) => block.text)
    .join("\n")
    .trim();
}

function collectToolUses(content = []) {
  return content.filter((block) => block?.type === "tool_use");
}

function extractUsage(response) {
  if (!response?.usage || typeof response.usage !== "object") {
    return {
      inputTokens: 0,
      outputTokens: 0,
    };
  }
  return {
    inputTokens: Number(response.usage.input_tokens ?? 0),
    outputTokens: Number(response.usage.output_tokens ?? 0),
  };
}

function detectAnalysisIntent(text = "") {
  const normalized = String(text).toLowerCase();
  const analysisPattern =
    /analy[sz]e|architecture|overview|explain this repo|inspect this repo|repo structure|codebase|仓库|代码实现|架构|目录结构|分析这个仓库|了解它提供了什么功能/;
  const editPattern =
    /fix|implement(?!ation)|edit|modify|change|write code|patch|refactor|重构|修复|修改这个|修改代码|实现这个|实现一种|实现功能|编写/;
  return analysisPattern.test(normalized) && !editPattern.test(normalized);
}

export class BlackEngine {
  constructor(config, providerContext, runtimeHooks = {}, depth = 0) {
    this.config = config;
    this.providerContext = providerContext;
    this.depth = depth;
    this.messages = [];
    this.transcript = [];
    this.compactionNotes = Array.isArray(config.compactionNotes) ? [...config.compactionNotes] : [];
    this.usage = {
      inputTokens: 0,
      outputTokens: 0,
      requests: 0,
    };
    this.runtimeHooks = runtimeHooks;
    this.statePaths = getProjectStatePaths(config.cwd);
    this.canUseTool =
      typeof config.canUseTool === "function"
        ? config.canUseTool
        : async () => ({
            allowed: true,
          });
    this.mcpManager = createMcpManager({
      servers: config.mcpServers,
      cwd: config.cwd,
      env: config.env,
    });

    this.toolDefinitions = getAllToolDefinitions({
      cwd: config.cwd,
      env: config.env,
      shell: config.shell,
      statePaths: this.statePaths,
      skillPaths: config.skillPaths,
      mcpManager: this.mcpManager,
      compactConversation: () => this.compactConversation(),
      runSubAgent: async (input) => this.runSubAgent(input),
    });
  }

  emit(event) {
    if (typeof this.runtimeHooks.onEvent === "function") {
      this.runtimeHooks.onEvent(event);
    }
  }

  getConversationSize() {
    return this.messages.length;
  }

  getUsageSummary() {
    return { ...this.usage };
  }

  getTranscript() {
    return [...this.transcript];
  }

  getCompactionNotes() {
    return [...this.compactionNotes];
  }

  setCompactionNotes(notes = []) {
    this.compactionNotes = Array.isArray(notes) ? [...notes] : [];
  }

  resetConversation({ clearCompaction = true } = {}) {
    this.messages = [];
    this.transcript = [];
    if (clearCompaction) {
      this.compactionNotes = [];
    }
  }

  setModel(model) {
    this.providerContext.model = model;
  }

  setAgent(agent) {
    this.config.defaultAgent = agent;
  }

  buildSystem(agentDefinition) {
    const compactedSummary = this.compactionNotes.length
      ? `Compacted session summary:\n${this.compactionNotes.join("\n\n")}`
      : "";
    return buildSystemPrompt({
      cwd: this.config.cwd,
      shell: this.config.shell,
      workspaceInstructions: this.config.workspaceInstructions,
      settingsInstructions: this.config.settingsInstructions,
      agentDefinition,
      extraInstructions: [this.config.extraSystem, compactedSummary].filter(Boolean).join("\n\n"),
    });
  }

  compactConversation() {
    const entries = this.transcript.slice(-24);
    if (entries.length === 0) {
      return "Conversation is already empty.";
    }

    const summary = entries
      .map((entry) => {
        const role = entry.role === "assistant" ? "assistant" : entry.role === "user" ? "user" : entry.role;
        return `${role}: ${String(entry.text ?? "").replace(/\s+/g, " ").trim()}`;
      })
      .filter(Boolean)
      .join("\n")
      .slice(0, 8_000);

    this.compactionNotes = [...this.compactionNotes, `autocompact:\n${summary}`].slice(-6);
    this.messages = [];
    this.transcript = [
      {
        role: "system",
        text: `Conversation compacted at ${new Date().toISOString()}`,
      },
    ];
    return summary;
  }

  async *query(userText, { agentName, model, displayText } = {}) {
    const inferredAnalysisMode = !agentName && detectAnalysisIntent(userText);
    const requestedAgent = agentName || (inferredAnalysisMode ? "explorer" : this.config.defaultAgent);
    const agentDefinition = resolveAgent(this.config.agentCatalog, requestedAgent);
    const previousModel = this.providerContext.model;
    const visibleUserText = typeof displayText === "string" && displayText.trim() ? displayText : userText;

    if (model) {
      this.providerContext.model = model;
    } else if (agentDefinition?.model) {
      this.providerContext.model = agentDefinition.model;
    }

    this.messages.push(createUserMessage(userText));
    this.transcript.push({ role: "user", text: visibleUserText, agent: agentDefinition.name });
    yield { type: "user", text: visibleUserText, agent: agentDefinition.name, depth: this.depth };

    let finalText = "";
    const maxTurns = Math.max(
      1,
      inferredAnalysisMode
        ? Math.min(agentDefinition.maxTurns || this.config.maxTurns || 24, 12)
        : agentDefinition.maxTurns || this.config.maxTurns || 24,
    );

    try {
      for (let iteration = 0; iteration < maxTurns; iteration += 1) {
        if (inferredAnalysisMode && iteration === 6) {
          this.messages.push(
            createUserMessage(
              "You have enough repository context for a high-level answer. Unless a critical gap remains, stop exploring and provide the synthesis now.",
            ),
          );
        }
        const selectedTools = resolveToolSelection(agentDefinition, this.toolDefinitions, this.depth);
        const compacted = autoCompactMessages({
          messages: normalizeMessages(this.messages),
          compactionNotes: this.compactionNotes,
        });
        this.messages = compacted.messages;
        this.compactionNotes = compacted.compactionNotes;
        if (compacted.strategy) {
          yield {
            type: "compact",
            strategy: compacted.strategy,
            depth: this.depth,
          };
        }

        const apiMessages = normalizeMessages(this.messages);
        const startedAt = Date.now();
        yield {
          type: "model_request",
          model: this.providerContext.model,
          agent: agentDefinition.name,
          messages: apiMessages.length,
          depth: this.depth,
        };

        const requestBody = {
          model: this.providerContext.model,
          max_tokens: this.config.maxTokens,
          messages: apiMessages,
          system: this.buildSystem(agentDefinition),
          tools: selectedTools.map((tool) => toolToAPISchema(tool)),
          ...(this.config.temperature !== undefined ? { temperature: this.config.temperature } : {}),
          ...(this.config.thinking ? { thinking: this.config.thinking } : {}),
        };

        let response = null;
        const shouldStream = this.config.streamResponses !== false && this.providerContext.canStream;
        if (shouldStream) {
          try {
            const stream = await this.providerContext.createStream(requestBody);
            if (stream) {
              let snapshot = "";
              for await (const event of stream) {
                if (event?.type === "content_block_delta" && event.delta?.type === "text_delta") {
                  snapshot += event.delta.text;
                  yield {
                    type: "assistant_delta",
                    text: event.delta.text,
                    snapshot,
                    agent: agentDefinition.name,
                    depth: this.depth,
                  };
                }
              }
              response = await stream.finalMessage();
            }
          } catch (error) {
            yield {
              type: "stream_error",
              error: error instanceof Error ? error.message : String(error),
              agent: agentDefinition.name,
              depth: this.depth,
            };
          }
        }
        if (!response) {
          response = await this.providerContext.createMessage(requestBody);
        }

        this.usage.requests += 1;
        const { inputTokens, outputTokens } = extractUsage(response);
        this.usage.inputTokens += inputTokens;
        this.usage.outputTokens += outputTokens;
        yield {
          type: "model_response",
          model: this.providerContext.model,
          agent: agentDefinition.name,
          inputTokens,
          outputTokens,
          stopReason: response.stop_reason ?? null,
          durationMs: Date.now() - startedAt,
          depth: this.depth,
        };

        this.messages.push(createAssistantMessage(response.content));
        const assistantText = collectText(response.content);
        if (assistantText) {
          finalText = assistantText;
          this.transcript.push({
            role: "assistant",
            text: assistantText,
            agent: agentDefinition.name,
          });
          yield {
            type: "assistant",
            text: assistantText,
            agent: agentDefinition.name,
            depth: this.depth,
          };
        }

        const toolUses = collectToolUses(response.content);
        if (toolUses.length === 0) {
          return finalText || "(No text returned)";
        }

        const toolResults = [];
        for (const toolUse of toolUses) {
          const toolDefinition = selectedTools.find((tool) => tool.name === toolUse.name);
          if (!toolDefinition) {
            toolResults.push({
              type: "tool_result",
              tool_use_id: toolUse.id,
              content: `Tool ${toolUse.name} is not available in the active agent profile.`,
              is_error: true,
            });
            continue;
          }

          const permission = await this.canUseTool({
            toolName: toolUse.name,
            input: toolUse.input ?? {},
            agent: agentDefinition.name,
            depth: this.depth,
          });
          if (!permission?.allowed) {
            yield {
              type: "permission_denied",
              name: toolUse.name,
              reason: permission?.reason || "Tool blocked by permission policy.",
              depth: this.depth,
            };
            toolResults.push({
              type: "tool_result",
              tool_use_id: toolUse.id,
              content: permission?.reason || `Tool ${toolUse.name} was blocked.`,
              is_error: true,
            });
            continue;
          }

          yield {
            type: "tool_start",
            name: toolUse.name,
            input: toolUse.input,
            depth: this.depth,
          };

          const toolStartedAt = Date.now();
          try {
            const content = await toolDefinition.run(toolUse.input ?? {});
            toolResults.push({
              type: "tool_result",
              tool_use_id: toolUse.id,
              content,
            });
            yield {
              type: "tool_end",
              name: toolUse.name,
              durationMs: Date.now() - toolStartedAt,
              output: content,
              depth: this.depth,
            };
          } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            toolResults.push({
              type: "tool_result",
              tool_use_id: toolUse.id,
              content: `Tool ${toolUse.name} failed: ${message}`,
              is_error: true,
            });
            yield {
              type: "tool_error",
              name: toolUse.name,
              durationMs: Date.now() - toolStartedAt,
              error: message,
              depth: this.depth,
            };
          }
        }

        this.messages.push(createToolResultMessage(toolResults));
      }

      return finalText || `Stopped after ${maxTurns} model turns.`;
    } finally {
      this.providerContext.model = previousModel;
    }
  }

  async ask(userText, options = {}) {
    let finalText = "";
    for await (const event of this.query(userText, options)) {
      this.emit(event);
      if (event.type === "assistant") {
        finalText = event.text;
      }
    }
    return finalText || "(No text returned)";
  }

  async close() {
    await this.mcpManager.close?.();
  }

  async runSubAgent({ task, agent, model, maxTurns }) {
    if (this.depth >= 2) {
      return "Sub-agent depth limit reached.";
    }

    const requestedAgent = agent || "general-purpose";
    this.emit({
      type: "agent_start",
      agent: requestedAgent,
      task,
      depth: this.depth + 1,
    });

    const childConfig = {
      ...this.config,
      defaultAgent: requestedAgent,
      maxTurns: maxTurns || this.config.maxTurns,
    };
    const childProvider = {
      ...this.providerContext,
      model: model || this.providerContext.model,
    };
    const childEngine = new BlackEngine(
      childConfig,
      childProvider,
      {
        onEvent: (event) => this.emit(event),
      },
      this.depth + 1,
    );

    const result = await childEngine.ask(task, {
      agentName: requestedAgent,
      model: model || childProvider.model,
    });
    await childEngine.close();

    this.emit({
      type: "agent_end",
      agent: requestedAgent,
      result,
      depth: this.depth + 1,
    });

    return result;
  }
}
