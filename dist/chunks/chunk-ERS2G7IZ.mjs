#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_operations,
  operations_exports
} from "./chunk-P42WH56V.mjs";
import {
  analyzeContextUsage,
  contextCollapse_exports,
  getMessagesAfterCompactBoundary,
  init_analyzeContext,
  init_contextCollapse,
  init_messages2 as init_messages,
  init_microCompact,
  microcompactMessages
} from "./chunk-FMU4URRE.mjs";
import {
  getSourceDisplayName,
  init_constants,
  init_stringUtils,
  plural
} from "./chunk-NKGQGSP5.mjs";
import {
  formatTokens,
  init_format
} from "./chunk-OGGCTXYU.mjs";
import {
  feature,
  init_bun_bundle
} from "./chunk-OU3SZVVB.mjs";
import {
  __esm,
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// src/commands/context/context-noninteractive.ts
async function collectContextData(context) {
  const {
    messages,
    getAppState,
    options: {
      mainLoopModel,
      tools,
      agentDefinitions,
      customSystemPrompt,
      appendSystemPrompt
    }
  } = context;
  let apiView = getMessagesAfterCompactBoundary(messages);
  if (feature("CONTEXT_COLLAPSE")) {
    const { projectView } = (init_operations(), __toCommonJS(operations_exports));
    apiView = projectView(apiView);
  }
  const { messages: compactedMessages } = await microcompactMessages(apiView);
  const appState = getAppState();
  return analyzeContextUsage(
    compactedMessages,
    mainLoopModel,
    async () => appState.toolPermissionContext,
    tools,
    agentDefinitions,
    void 0,
    // terminalWidth
    // analyzeContextUsage only reads options.{customSystemPrompt,appendSystemPrompt}
    // but its signature declares the full Pick<ToolUseContext, 'options'>.
    { options: { customSystemPrompt, appendSystemPrompt } },
    void 0,
    // mainThreadAgentDefinition
    apiView
    // original messages for API usage extraction
  );
}
async function call(_args, context) {
  const data = await collectContextData(context);
  return {
    type: "text",
    value: formatContextAsMarkdownTable(data)
  };
}
function formatContextAsMarkdownTable(data) {
  const {
    categories,
    totalTokens,
    rawMaxTokens,
    percentage,
    model,
    memoryFiles,
    mcpTools,
    agents,
    skills,
    messageBreakdown,
    systemTools,
    systemPromptSections
  } = data;
  let output = `## Context Usage

`;
  output += `**Model:** ${model}  
`;
  output += `**Tokens:** ${formatTokens(totalTokens)} / ${formatTokens(rawMaxTokens)} (${percentage}%)
`;
  if (feature("CONTEXT_COLLAPSE")) {
    const { getStats, isContextCollapseEnabled } = (init_contextCollapse(), __toCommonJS(contextCollapse_exports));
    if (isContextCollapseEnabled()) {
      const s = getStats();
      const { health: h } = s;
      const parts = [];
      if (s.collapsedSpans > 0) {
        parts.push(
          `${s.collapsedSpans} ${plural(s.collapsedSpans, "span")} summarized (${s.collapsedMessages} messages)`
        );
      }
      if (s.stagedSpans > 0) parts.push(`${s.stagedSpans} staged`);
      const summary = parts.length > 0 ? parts.join(", ") : h.totalSpawns > 0 ? `${h.totalSpawns} ${plural(h.totalSpawns, "spawn")}, nothing staged yet` : "waiting for first trigger";
      output += `**Context strategy:** collapse (${summary})
`;
      if (h.totalErrors > 0) {
        output += `**Collapse errors:** ${h.totalErrors}/${h.totalSpawns} spawns failed`;
        if (h.lastError) {
          output += ` (last: ${h.lastError.slice(0, 80)})`;
        }
        output += "\n";
      } else if (h.emptySpawnWarningEmitted) {
        output += `**Collapse idle:** ${h.totalEmptySpawns} consecutive empty runs
`;
      }
    }
  }
  output += "\n";
  const visibleCategories = categories.filter(
    (cat) => cat.tokens > 0 && cat.name !== "Free space" && cat.name !== "Autocompact buffer"
  );
  if (visibleCategories.length > 0) {
    output += `### Estimated usage by category

`;
    output += `| Category | Tokens | Percentage |
`;
    output += `|----------|--------|------------|
`;
    for (const cat of visibleCategories) {
      const percentDisplay = (cat.tokens / rawMaxTokens * 100).toFixed(1);
      output += `| ${cat.name} | ${formatTokens(cat.tokens)} | ${percentDisplay}% |
`;
    }
    const freeSpaceCategory = categories.find((c) => c.name === "Free space");
    if (freeSpaceCategory && freeSpaceCategory.tokens > 0) {
      const percentDisplay = (freeSpaceCategory.tokens / rawMaxTokens * 100).toFixed(1);
      output += `| Free space | ${formatTokens(freeSpaceCategory.tokens)} | ${percentDisplay}% |
`;
    }
    const autocompactCategory = categories.find(
      (c) => c.name === "Autocompact buffer"
    );
    if (autocompactCategory && autocompactCategory.tokens > 0) {
      const percentDisplay = (autocompactCategory.tokens / rawMaxTokens * 100).toFixed(1);
      output += `| Autocompact buffer | ${formatTokens(autocompactCategory.tokens)} | ${percentDisplay}% |
`;
    }
    output += `
`;
  }
  if (mcpTools.length > 0) {
    output += `### MCP Tools

`;
    output += `| Tool | Server | Tokens |
`;
    output += `|------|--------|--------|
`;
    for (const tool of mcpTools) {
      output += `| ${tool.name} | ${tool.serverName} | ${formatTokens(tool.tokens)} |
`;
    }
    output += `
`;
  }
  if (systemTools && systemTools.length > 0 && process.env.USER_TYPE === "ant") {
    output += `### [ANT-ONLY] System Tools

`;
    output += `| Tool | Tokens |
`;
    output += `|------|--------|
`;
    for (const tool of systemTools) {
      output += `| ${tool.name} | ${formatTokens(tool.tokens)} |
`;
    }
    output += `
`;
  }
  if (systemPromptSections && systemPromptSections.length > 0 && process.env.USER_TYPE === "ant") {
    output += `### [ANT-ONLY] System Prompt Sections

`;
    output += `| Section | Tokens |
`;
    output += `|---------|--------|
`;
    for (const section of systemPromptSections) {
      output += `| ${section.name} | ${formatTokens(section.tokens)} |
`;
    }
    output += `
`;
  }
  if (agents.length > 0) {
    output += `### Custom Agents

`;
    output += `| Agent Type | Source | Tokens |
`;
    output += `|------------|--------|--------|
`;
    for (const agent of agents) {
      let sourceDisplay;
      switch (agent.source) {
        case "projectSettings":
          sourceDisplay = "Project";
          break;
        case "userSettings":
          sourceDisplay = "User";
          break;
        case "localSettings":
          sourceDisplay = "Local";
          break;
        case "flagSettings":
          sourceDisplay = "Flag";
          break;
        case "policySettings":
          sourceDisplay = "Policy";
          break;
        case "plugin":
          sourceDisplay = "Plugin";
          break;
        case "built-in":
          sourceDisplay = "Built-in";
          break;
        default:
          sourceDisplay = String(agent.source);
      }
      output += `| ${agent.agentType} | ${sourceDisplay} | ${formatTokens(agent.tokens)} |
`;
    }
    output += `
`;
  }
  if (memoryFiles.length > 0) {
    output += `### Memory Files

`;
    output += `| Type | Path | Tokens |
`;
    output += `|------|------|--------|
`;
    for (const file of memoryFiles) {
      output += `| ${file.type} | ${file.path} | ${formatTokens(file.tokens)} |
`;
    }
    output += `
`;
  }
  if (skills && skills.tokens > 0 && skills.skillFrontmatter.length > 0) {
    output += `### Skills

`;
    output += `| Skill | Source | Tokens |
`;
    output += `|-------|--------|--------|
`;
    for (const skill of skills.skillFrontmatter) {
      output += `| ${skill.name} | ${getSourceDisplayName(skill.source)} | ${formatTokens(skill.tokens)} |
`;
    }
    output += `
`;
  }
  if (messageBreakdown && process.env.USER_TYPE === "ant") {
    output += `### [ANT-ONLY] Message Breakdown

`;
    output += `| Category | Tokens |
`;
    output += `|----------|--------|
`;
    output += `| Tool calls | ${formatTokens(messageBreakdown.toolCallTokens)} |
`;
    output += `| Tool results | ${formatTokens(messageBreakdown.toolResultTokens)} |
`;
    output += `| Attachments | ${formatTokens(messageBreakdown.attachmentTokens)} |
`;
    output += `| Assistant messages (non-tool) | ${formatTokens(messageBreakdown.assistantMessageTokens)} |
`;
    output += `| User messages (non-tool-result) | ${formatTokens(messageBreakdown.userMessageTokens)} |
`;
    output += `
`;
    if (messageBreakdown.toolCallsByType.length > 0) {
      output += `#### Top Tools

`;
      output += `| Tool | Call Tokens | Result Tokens |
`;
      output += `|------|-------------|---------------|
`;
      for (const tool of messageBreakdown.toolCallsByType) {
        output += `| ${tool.name} | ${formatTokens(tool.callTokens)} | ${formatTokens(tool.resultTokens)} |
`;
      }
      output += `
`;
    }
    if (messageBreakdown.attachmentsByType.length > 0) {
      output += `#### Top Attachments

`;
      output += `| Attachment | Tokens |
`;
      output += `|------------|--------|
`;
      for (const attachment of messageBreakdown.attachmentsByType) {
        output += `| ${attachment.name} | ${formatTokens(attachment.tokens)} |
`;
      }
      output += `
`;
    }
  }
  return output;
}
var init_context_noninteractive = __esm({
  "src/commands/context/context-noninteractive.ts"() {
    init_bun_bundle();
    init_microCompact();
    init_analyzeContext();
    init_format();
    init_messages();
    init_constants();
    init_stringUtils();
  }
});

export {
  collectContextData,
  call,
  init_context_noninteractive
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL2NvbnRleHQvY29udGV4dC1ub25pbnRlcmFjdGl2ZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZmVhdHVyZSB9IGZyb20gJ2J1bjpidW5kbGUnXG5pbXBvcnQgeyBtaWNyb2NvbXBhY3RNZXNzYWdlcyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbXBhY3QvbWljcm9Db21wYWN0LmpzJ1xuaW1wb3J0IHR5cGUgeyBBcHBTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlL0FwcFN0YXRlU3RvcmUuanMnXG5pbXBvcnQgdHlwZSB7IFRvb2xzLCBUb29sVXNlQ29udGV4dCB9IGZyb20gJy4uLy4uL1Rvb2wuanMnXG5pbXBvcnQgdHlwZSB7IEFnZW50RGVmaW5pdGlvbnNSZXN1bHQgfSBmcm9tICcuLi8uLi90b29scy9BZ2VudFRvb2wvbG9hZEFnZW50c0Rpci5qcydcbmltcG9ydCB0eXBlIHsgTWVzc2FnZSB9IGZyb20gJy4uLy4uL3R5cGVzL21lc3NhZ2UuanMnXG5pbXBvcnQge1xuICBhbmFseXplQ29udGV4dFVzYWdlLFxuICB0eXBlIENvbnRleHREYXRhLFxufSBmcm9tICcuLi8uLi91dGlscy9hbmFseXplQ29udGV4dC5qcydcbmltcG9ydCB7IGZvcm1hdFRva2VucyB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC5qcydcbmltcG9ydCB7IGdldE1lc3NhZ2VzQWZ0ZXJDb21wYWN0Qm91bmRhcnkgfSBmcm9tICcuLi8uLi91dGlscy9tZXNzYWdlcy5qcydcbmltcG9ydCB7IGdldFNvdXJjZURpc3BsYXlOYW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2V0dGluZ3MvY29uc3RhbnRzLmpzJ1xuaW1wb3J0IHsgcGx1cmFsIH0gZnJvbSAnLi4vLi4vdXRpbHMvc3RyaW5nVXRpbHMuanMnXG5cbi8qKlxuICogU2hhcmVkIGRhdGEtY29sbGVjdGlvbiBwYXRoIGZvciBgL2NvbnRleHRgIChzbGFzaCBjb21tYW5kKSBhbmQgdGhlIFNES1xuICogYGdldF9jb250ZXh0X3VzYWdlYCBjb250cm9sIHJlcXVlc3QuIE1pcnJvcnMgcXVlcnkudHMncyBwcmUtQVBJIHRyYW5zZm9ybXNcbiAqIChjb21wYWN0IGJvdW5kYXJ5LCBwcm9qZWN0VmlldywgbWljcm9jb21wYWN0KSBzbyB0aGUgdG9rZW4gY291bnQgcmVmbGVjdHNcbiAqIHdoYXQgdGhlIG1vZGVsIGFjdHVhbGx5IHNlZXMuXG4gKi9cbnR5cGUgQ29sbGVjdENvbnRleHREYXRhSW5wdXQgPSB7XG4gIG1lc3NhZ2VzOiBNZXNzYWdlW11cbiAgZ2V0QXBwU3RhdGU6ICgpID0+IEFwcFN0YXRlXG4gIG9wdGlvbnM6IHtcbiAgICBtYWluTG9vcE1vZGVsOiBzdHJpbmdcbiAgICB0b29sczogVG9vbHNcbiAgICBhZ2VudERlZmluaXRpb25zOiBBZ2VudERlZmluaXRpb25zUmVzdWx0XG4gICAgY3VzdG9tU3lzdGVtUHJvbXB0Pzogc3RyaW5nXG4gICAgYXBwZW5kU3lzdGVtUHJvbXB0Pzogc3RyaW5nXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbGxlY3RDb250ZXh0RGF0YShcbiAgY29udGV4dDogQ29sbGVjdENvbnRleHREYXRhSW5wdXQsXG4pOiBQcm9taXNlPENvbnRleHREYXRhPiB7XG4gIGNvbnN0IHtcbiAgICBtZXNzYWdlcyxcbiAgICBnZXRBcHBTdGF0ZSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBtYWluTG9vcE1vZGVsLFxuICAgICAgdG9vbHMsXG4gICAgICBhZ2VudERlZmluaXRpb25zLFxuICAgICAgY3VzdG9tU3lzdGVtUHJvbXB0LFxuICAgICAgYXBwZW5kU3lzdGVtUHJvbXB0LFxuICAgIH0sXG4gIH0gPSBjb250ZXh0XG5cbiAgbGV0IGFwaVZpZXcgPSBnZXRNZXNzYWdlc0FmdGVyQ29tcGFjdEJvdW5kYXJ5KG1lc3NhZ2VzKVxuICBpZiAoZmVhdHVyZSgnQ09OVEVYVF9DT0xMQVBTRScpKSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyAqL1xuICAgIGNvbnN0IHsgcHJvamVjdFZpZXcgfSA9XG4gICAgICByZXF1aXJlKCcuLi8uLi9zZXJ2aWNlcy9jb250ZXh0Q29sbGFwc2Uvb3BlcmF0aW9ucy5qcycpIGFzIHR5cGVvZiBpbXBvcnQoJy4uLy4uL3NlcnZpY2VzL2NvbnRleHRDb2xsYXBzZS9vcGVyYXRpb25zLmpzJylcbiAgICAvKiBlc2xpbnQtZW5hYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHMgKi9cbiAgICBhcGlWaWV3ID0gcHJvamVjdFZpZXcoYXBpVmlldylcbiAgfVxuXG4gIGNvbnN0IHsgbWVzc2FnZXM6IGNvbXBhY3RlZE1lc3NhZ2VzIH0gPSBhd2FpdCBtaWNyb2NvbXBhY3RNZXNzYWdlcyhhcGlWaWV3KVxuICBjb25zdCBhcHBTdGF0ZSA9IGdldEFwcFN0YXRlKClcblxuICByZXR1cm4gYW5hbHl6ZUNvbnRleHRVc2FnZShcbiAgICBjb21wYWN0ZWRNZXNzYWdlcyxcbiAgICBtYWluTG9vcE1vZGVsLFxuICAgIGFzeW5jICgpID0+IGFwcFN0YXRlLnRvb2xQZXJtaXNzaW9uQ29udGV4dCxcbiAgICB0b29scyxcbiAgICBhZ2VudERlZmluaXRpb25zLFxuICAgIHVuZGVmaW5lZCwgLy8gdGVybWluYWxXaWR0aFxuICAgIC8vIGFuYWx5emVDb250ZXh0VXNhZ2Ugb25seSByZWFkcyBvcHRpb25zLntjdXN0b21TeXN0ZW1Qcm9tcHQsYXBwZW5kU3lzdGVtUHJvbXB0fVxuICAgIC8vIGJ1dCBpdHMgc2lnbmF0dXJlIGRlY2xhcmVzIHRoZSBmdWxsIFBpY2s8VG9vbFVzZUNvbnRleHQsICdvcHRpb25zJz4uXG4gICAgeyBvcHRpb25zOiB7IGN1c3RvbVN5c3RlbVByb21wdCwgYXBwZW5kU3lzdGVtUHJvbXB0IH0gfSBhcyBQaWNrPFxuICAgICAgVG9vbFVzZUNvbnRleHQsXG4gICAgICAnb3B0aW9ucydcbiAgICA+LFxuICAgIHVuZGVmaW5lZCwgLy8gbWFpblRocmVhZEFnZW50RGVmaW5pdGlvblxuICAgIGFwaVZpZXcsIC8vIG9yaWdpbmFsIG1lc3NhZ2VzIGZvciBBUEkgdXNhZ2UgZXh0cmFjdGlvblxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYWxsKFxuICBfYXJnczogc3RyaW5nLFxuICBjb250ZXh0OiBUb29sVXNlQ29udGV4dCxcbik6IFByb21pc2U8eyB0eXBlOiAndGV4dCc7IHZhbHVlOiBzdHJpbmcgfT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgY29sbGVjdENvbnRleHREYXRhKGNvbnRleHQpXG4gIHJldHVybiB7XG4gICAgdHlwZTogJ3RleHQnIGFzIGNvbnN0LFxuICAgIHZhbHVlOiBmb3JtYXRDb250ZXh0QXNNYXJrZG93blRhYmxlKGRhdGEpLFxuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdENvbnRleHRBc01hcmtkb3duVGFibGUoZGF0YTogQ29udGV4dERhdGEpOiBzdHJpbmcge1xuICBjb25zdCB7XG4gICAgY2F0ZWdvcmllcyxcbiAgICB0b3RhbFRva2VucyxcbiAgICByYXdNYXhUb2tlbnMsXG4gICAgcGVyY2VudGFnZSxcbiAgICBtb2RlbCxcbiAgICBtZW1vcnlGaWxlcyxcbiAgICBtY3BUb29scyxcbiAgICBhZ2VudHMsXG4gICAgc2tpbGxzLFxuICAgIG1lc3NhZ2VCcmVha2Rvd24sXG4gICAgc3lzdGVtVG9vbHMsXG4gICAgc3lzdGVtUHJvbXB0U2VjdGlvbnMsXG4gIH0gPSBkYXRhXG5cbiAgbGV0IG91dHB1dCA9IGAjIyBDb250ZXh0IFVzYWdlXFxuXFxuYFxuICBvdXRwdXQgKz0gYCoqTW9kZWw6KiogJHttb2RlbH0gIFxcbmBcbiAgb3V0cHV0ICs9IGAqKlRva2VuczoqKiAke2Zvcm1hdFRva2Vucyh0b3RhbFRva2Vucyl9IC8gJHtmb3JtYXRUb2tlbnMocmF3TWF4VG9rZW5zKX0gKCR7cGVyY2VudGFnZX0lKVxcbmBcblxuICAvLyBDb250ZXh0LWNvbGxhcHNlIHN0YXR1cy4gQWx3YXlzIHNob3cgd2hlbiB0aGUgcnVudGltZSBnYXRlIGlzIG9uIFx1MjAxNFxuICAvLyB0aGUgdXNlciBuZWVkcyB0byBrbm93IHdoaWNoIHN0cmF0ZWd5IGlzIG1hbmFnaW5nIHRoZWlyIGNvbnRleHRcbiAgLy8gZXZlbiBiZWZvcmUgYW55dGhpbmcgaGFzIGZpcmVkLlxuICBpZiAoZmVhdHVyZSgnQ09OVEVYVF9DT0xMQVBTRScpKSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyAqL1xuICAgIGNvbnN0IHsgZ2V0U3RhdHMsIGlzQ29udGV4dENvbGxhcHNlRW5hYmxlZCB9ID1cbiAgICAgIHJlcXVpcmUoJy4uLy4uL3NlcnZpY2VzL2NvbnRleHRDb2xsYXBzZS9pbmRleC5qcycpIGFzIHR5cGVvZiBpbXBvcnQoJy4uLy4uL3NlcnZpY2VzL2NvbnRleHRDb2xsYXBzZS9pbmRleC5qcycpXG4gICAgLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG4gICAgaWYgKGlzQ29udGV4dENvbGxhcHNlRW5hYmxlZCgpKSB7XG4gICAgICBjb25zdCBzID0gZ2V0U3RhdHMoKVxuICAgICAgY29uc3QgeyBoZWFsdGg6IGggfSA9IHNcblxuICAgICAgY29uc3QgcGFydHMgPSBbXVxuICAgICAgaWYgKHMuY29sbGFwc2VkU3BhbnMgPiAwKSB7XG4gICAgICAgIHBhcnRzLnB1c2goXG4gICAgICAgICAgYCR7cy5jb2xsYXBzZWRTcGFuc30gJHtwbHVyYWwocy5jb2xsYXBzZWRTcGFucywgJ3NwYW4nKX0gc3VtbWFyaXplZCAoJHtzLmNvbGxhcHNlZE1lc3NhZ2VzfSBtZXNzYWdlcylgLFxuICAgICAgICApXG4gICAgICB9XG4gICAgICBpZiAocy5zdGFnZWRTcGFucyA+IDApIHBhcnRzLnB1c2goYCR7cy5zdGFnZWRTcGFuc30gc3RhZ2VkYClcbiAgICAgIGNvbnN0IHN1bW1hcnkgPVxuICAgICAgICBwYXJ0cy5sZW5ndGggPiAwXG4gICAgICAgICAgPyBwYXJ0cy5qb2luKCcsICcpXG4gICAgICAgICAgOiBoLnRvdGFsU3Bhd25zID4gMFxuICAgICAgICAgICAgPyBgJHtoLnRvdGFsU3Bhd25zfSAke3BsdXJhbChoLnRvdGFsU3Bhd25zLCAnc3Bhd24nKX0sIG5vdGhpbmcgc3RhZ2VkIHlldGBcbiAgICAgICAgICAgIDogJ3dhaXRpbmcgZm9yIGZpcnN0IHRyaWdnZXInXG4gICAgICBvdXRwdXQgKz0gYCoqQ29udGV4dCBzdHJhdGVneToqKiBjb2xsYXBzZSAoJHtzdW1tYXJ5fSlcXG5gXG5cbiAgICAgIGlmIChoLnRvdGFsRXJyb3JzID4gMCkge1xuICAgICAgICBvdXRwdXQgKz0gYCoqQ29sbGFwc2UgZXJyb3JzOioqICR7aC50b3RhbEVycm9yc30vJHtoLnRvdGFsU3Bhd25zfSBzcGF3bnMgZmFpbGVkYFxuICAgICAgICBpZiAoaC5sYXN0RXJyb3IpIHtcbiAgICAgICAgICBvdXRwdXQgKz0gYCAobGFzdDogJHtoLmxhc3RFcnJvci5zbGljZSgwLCA4MCl9KWBcbiAgICAgICAgfVxuICAgICAgICBvdXRwdXQgKz0gJ1xcbidcbiAgICAgIH0gZWxzZSBpZiAoaC5lbXB0eVNwYXduV2FybmluZ0VtaXR0ZWQpIHtcbiAgICAgICAgb3V0cHV0ICs9IGAqKkNvbGxhcHNlIGlkbGU6KiogJHtoLnRvdGFsRW1wdHlTcGF3bnN9IGNvbnNlY3V0aXZlIGVtcHR5IHJ1bnNcXG5gXG4gICAgICB9XG4gICAgfVxuICB9XG4gIG91dHB1dCArPSAnXFxuJ1xuXG4gIC8vIE1haW4gY2F0ZWdvcmllcyB0YWJsZVxuICBjb25zdCB2aXNpYmxlQ2F0ZWdvcmllcyA9IGNhdGVnb3JpZXMuZmlsdGVyKFxuICAgIGNhdCA9PlxuICAgICAgY2F0LnRva2VucyA+IDAgJiZcbiAgICAgIGNhdC5uYW1lICE9PSAnRnJlZSBzcGFjZScgJiZcbiAgICAgIGNhdC5uYW1lICE9PSAnQXV0b2NvbXBhY3QgYnVmZmVyJyxcbiAgKVxuXG4gIGlmICh2aXNpYmxlQ2F0ZWdvcmllcy5sZW5ndGggPiAwKSB7XG4gICAgb3V0cHV0ICs9IGAjIyMgRXN0aW1hdGVkIHVzYWdlIGJ5IGNhdGVnb3J5XFxuXFxuYFxuICAgIG91dHB1dCArPSBgfCBDYXRlZ29yeSB8IFRva2VucyB8IFBlcmNlbnRhZ2UgfFxcbmBcbiAgICBvdXRwdXQgKz0gYHwtLS0tLS0tLS0tfC0tLS0tLS0tfC0tLS0tLS0tLS0tLXxcXG5gXG5cbiAgICBmb3IgKGNvbnN0IGNhdCBvZiB2aXNpYmxlQ2F0ZWdvcmllcykge1xuICAgICAgY29uc3QgcGVyY2VudERpc3BsYXkgPSAoKGNhdC50b2tlbnMgLyByYXdNYXhUb2tlbnMpICogMTAwKS50b0ZpeGVkKDEpXG4gICAgICBvdXRwdXQgKz0gYHwgJHtjYXQubmFtZX0gfCAke2Zvcm1hdFRva2VucyhjYXQudG9rZW5zKX0gfCAke3BlcmNlbnREaXNwbGF5fSUgfFxcbmBcbiAgICB9XG5cbiAgICBjb25zdCBmcmVlU3BhY2VDYXRlZ29yeSA9IGNhdGVnb3JpZXMuZmluZChjID0+IGMubmFtZSA9PT0gJ0ZyZWUgc3BhY2UnKVxuICAgIGlmIChmcmVlU3BhY2VDYXRlZ29yeSAmJiBmcmVlU3BhY2VDYXRlZ29yeS50b2tlbnMgPiAwKSB7XG4gICAgICBjb25zdCBwZXJjZW50RGlzcGxheSA9IChcbiAgICAgICAgKGZyZWVTcGFjZUNhdGVnb3J5LnRva2VucyAvIHJhd01heFRva2VucykgKlxuICAgICAgICAxMDBcbiAgICAgICkudG9GaXhlZCgxKVxuICAgICAgb3V0cHV0ICs9IGB8IEZyZWUgc3BhY2UgfCAke2Zvcm1hdFRva2VucyhmcmVlU3BhY2VDYXRlZ29yeS50b2tlbnMpfSB8ICR7cGVyY2VudERpc3BsYXl9JSB8XFxuYFxuICAgIH1cblxuICAgIGNvbnN0IGF1dG9jb21wYWN0Q2F0ZWdvcnkgPSBjYXRlZ29yaWVzLmZpbmQoXG4gICAgICBjID0+IGMubmFtZSA9PT0gJ0F1dG9jb21wYWN0IGJ1ZmZlcicsXG4gICAgKVxuICAgIGlmIChhdXRvY29tcGFjdENhdGVnb3J5ICYmIGF1dG9jb21wYWN0Q2F0ZWdvcnkudG9rZW5zID4gMCkge1xuICAgICAgY29uc3QgcGVyY2VudERpc3BsYXkgPSAoXG4gICAgICAgIChhdXRvY29tcGFjdENhdGVnb3J5LnRva2VucyAvIHJhd01heFRva2VucykgKlxuICAgICAgICAxMDBcbiAgICAgICkudG9GaXhlZCgxKVxuICAgICAgb3V0cHV0ICs9IGB8IEF1dG9jb21wYWN0IGJ1ZmZlciB8ICR7Zm9ybWF0VG9rZW5zKGF1dG9jb21wYWN0Q2F0ZWdvcnkudG9rZW5zKX0gfCAke3BlcmNlbnREaXNwbGF5fSUgfFxcbmBcbiAgICB9XG5cbiAgICBvdXRwdXQgKz0gYFxcbmBcbiAgfVxuXG4gIC8vIE1DUCB0b29sc1xuICBpZiAobWNwVG9vbHMubGVuZ3RoID4gMCkge1xuICAgIG91dHB1dCArPSBgIyMjIE1DUCBUb29sc1xcblxcbmBcbiAgICBvdXRwdXQgKz0gYHwgVG9vbCB8IFNlcnZlciB8IFRva2VucyB8XFxuYFxuICAgIG91dHB1dCArPSBgfC0tLS0tLXwtLS0tLS0tLXwtLS0tLS0tLXxcXG5gXG4gICAgZm9yIChjb25zdCB0b29sIG9mIG1jcFRvb2xzKSB7XG4gICAgICBvdXRwdXQgKz0gYHwgJHt0b29sLm5hbWV9IHwgJHt0b29sLnNlcnZlck5hbWV9IHwgJHtmb3JtYXRUb2tlbnModG9vbC50b2tlbnMpfSB8XFxuYFxuICAgIH1cbiAgICBvdXRwdXQgKz0gYFxcbmBcbiAgfVxuXG4gIC8vIFN5c3RlbSB0b29scyAoYW50LW9ubHkpXG4gIGlmIChcbiAgICBzeXN0ZW1Ub29scyAmJlxuICAgIHN5c3RlbVRvb2xzLmxlbmd0aCA+IDAgJiZcbiAgICBwcm9jZXNzLmVudi5VU0VSX1RZUEUgPT09ICdhbnQnXG4gICkge1xuICAgIG91dHB1dCArPSBgIyMjIFtBTlQtT05MWV0gU3lzdGVtIFRvb2xzXFxuXFxuYFxuICAgIG91dHB1dCArPSBgfCBUb29sIHwgVG9rZW5zIHxcXG5gXG4gICAgb3V0cHV0ICs9IGB8LS0tLS0tfC0tLS0tLS0tfFxcbmBcbiAgICBmb3IgKGNvbnN0IHRvb2wgb2Ygc3lzdGVtVG9vbHMpIHtcbiAgICAgIG91dHB1dCArPSBgfCAke3Rvb2wubmFtZX0gfCAke2Zvcm1hdFRva2Vucyh0b29sLnRva2Vucyl9IHxcXG5gXG4gICAgfVxuICAgIG91dHB1dCArPSBgXFxuYFxuICB9XG5cbiAgLy8gU3lzdGVtIHByb21wdCBzZWN0aW9ucyAoYW50LW9ubHkpXG4gIGlmIChcbiAgICBzeXN0ZW1Qcm9tcHRTZWN0aW9ucyAmJlxuICAgIHN5c3RlbVByb21wdFNlY3Rpb25zLmxlbmd0aCA+IDAgJiZcbiAgICBwcm9jZXNzLmVudi5VU0VSX1RZUEUgPT09ICdhbnQnXG4gICkge1xuICAgIG91dHB1dCArPSBgIyMjIFtBTlQtT05MWV0gU3lzdGVtIFByb21wdCBTZWN0aW9uc1xcblxcbmBcbiAgICBvdXRwdXQgKz0gYHwgU2VjdGlvbiB8IFRva2VucyB8XFxuYFxuICAgIG91dHB1dCArPSBgfC0tLS0tLS0tLXwtLS0tLS0tLXxcXG5gXG4gICAgZm9yIChjb25zdCBzZWN0aW9uIG9mIHN5c3RlbVByb21wdFNlY3Rpb25zKSB7XG4gICAgICBvdXRwdXQgKz0gYHwgJHtzZWN0aW9uLm5hbWV9IHwgJHtmb3JtYXRUb2tlbnMoc2VjdGlvbi50b2tlbnMpfSB8XFxuYFxuICAgIH1cbiAgICBvdXRwdXQgKz0gYFxcbmBcbiAgfVxuXG4gIC8vIEN1c3RvbSBhZ2VudHNcbiAgaWYgKGFnZW50cy5sZW5ndGggPiAwKSB7XG4gICAgb3V0cHV0ICs9IGAjIyMgQ3VzdG9tIEFnZW50c1xcblxcbmBcbiAgICBvdXRwdXQgKz0gYHwgQWdlbnQgVHlwZSB8IFNvdXJjZSB8IFRva2VucyB8XFxuYFxuICAgIG91dHB1dCArPSBgfC0tLS0tLS0tLS0tLXwtLS0tLS0tLXwtLS0tLS0tLXxcXG5gXG4gICAgZm9yIChjb25zdCBhZ2VudCBvZiBhZ2VudHMpIHtcbiAgICAgIGxldCBzb3VyY2VEaXNwbGF5OiBzdHJpbmdcbiAgICAgIHN3aXRjaCAoYWdlbnQuc291cmNlKSB7XG4gICAgICAgIGNhc2UgJ3Byb2plY3RTZXR0aW5ncyc6XG4gICAgICAgICAgc291cmNlRGlzcGxheSA9ICdQcm9qZWN0J1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ3VzZXJTZXR0aW5ncyc6XG4gICAgICAgICAgc291cmNlRGlzcGxheSA9ICdVc2VyJ1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2xvY2FsU2V0dGluZ3MnOlxuICAgICAgICAgIHNvdXJjZURpc3BsYXkgPSAnTG9jYWwnXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnZmxhZ1NldHRpbmdzJzpcbiAgICAgICAgICBzb3VyY2VEaXNwbGF5ID0gJ0ZsYWcnXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAncG9saWN5U2V0dGluZ3MnOlxuICAgICAgICAgIHNvdXJjZURpc3BsYXkgPSAnUG9saWN5J1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ3BsdWdpbic6XG4gICAgICAgICAgc291cmNlRGlzcGxheSA9ICdQbHVnaW4nXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnYnVpbHQtaW4nOlxuICAgICAgICAgIHNvdXJjZURpc3BsYXkgPSAnQnVpbHQtaW4nXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBzb3VyY2VEaXNwbGF5ID0gU3RyaW5nKGFnZW50LnNvdXJjZSlcbiAgICAgIH1cbiAgICAgIG91dHB1dCArPSBgfCAke2FnZW50LmFnZW50VHlwZX0gfCAke3NvdXJjZURpc3BsYXl9IHwgJHtmb3JtYXRUb2tlbnMoYWdlbnQudG9rZW5zKX0gfFxcbmBcbiAgICB9XG4gICAgb3V0cHV0ICs9IGBcXG5gXG4gIH1cblxuICAvLyBNZW1vcnkgZmlsZXNcbiAgaWYgKG1lbW9yeUZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICBvdXRwdXQgKz0gYCMjIyBNZW1vcnkgRmlsZXNcXG5cXG5gXG4gICAgb3V0cHV0ICs9IGB8IFR5cGUgfCBQYXRoIHwgVG9rZW5zIHxcXG5gXG4gICAgb3V0cHV0ICs9IGB8LS0tLS0tfC0tLS0tLXwtLS0tLS0tLXxcXG5gXG4gICAgZm9yIChjb25zdCBmaWxlIG9mIG1lbW9yeUZpbGVzKSB7XG4gICAgICBvdXRwdXQgKz0gYHwgJHtmaWxlLnR5cGV9IHwgJHtmaWxlLnBhdGh9IHwgJHtmb3JtYXRUb2tlbnMoZmlsZS50b2tlbnMpfSB8XFxuYFxuICAgIH1cbiAgICBvdXRwdXQgKz0gYFxcbmBcbiAgfVxuXG4gIC8vIFNraWxsc1xuICBpZiAoc2tpbGxzICYmIHNraWxscy50b2tlbnMgPiAwICYmIHNraWxscy5za2lsbEZyb250bWF0dGVyLmxlbmd0aCA+IDApIHtcbiAgICBvdXRwdXQgKz0gYCMjIyBTa2lsbHNcXG5cXG5gXG4gICAgb3V0cHV0ICs9IGB8IFNraWxsIHwgU291cmNlIHwgVG9rZW5zIHxcXG5gXG4gICAgb3V0cHV0ICs9IGB8LS0tLS0tLXwtLS0tLS0tLXwtLS0tLS0tLXxcXG5gXG4gICAgZm9yIChjb25zdCBza2lsbCBvZiBza2lsbHMuc2tpbGxGcm9udG1hdHRlcikge1xuICAgICAgb3V0cHV0ICs9IGB8ICR7c2tpbGwubmFtZX0gfCAke2dldFNvdXJjZURpc3BsYXlOYW1lKHNraWxsLnNvdXJjZSl9IHwgJHtmb3JtYXRUb2tlbnMoc2tpbGwudG9rZW5zKX0gfFxcbmBcbiAgICB9XG4gICAgb3V0cHV0ICs9IGBcXG5gXG4gIH1cblxuICAvLyBNZXNzYWdlIGJyZWFrZG93biAoYW50LW9ubHkpXG4gIGlmIChtZXNzYWdlQnJlYWtkb3duICYmIHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCcpIHtcbiAgICBvdXRwdXQgKz0gYCMjIyBbQU5ULU9OTFldIE1lc3NhZ2UgQnJlYWtkb3duXFxuXFxuYFxuICAgIG91dHB1dCArPSBgfCBDYXRlZ29yeSB8IFRva2VucyB8XFxuYFxuICAgIG91dHB1dCArPSBgfC0tLS0tLS0tLS18LS0tLS0tLS18XFxuYFxuICAgIG91dHB1dCArPSBgfCBUb29sIGNhbGxzIHwgJHtmb3JtYXRUb2tlbnMobWVzc2FnZUJyZWFrZG93bi50b29sQ2FsbFRva2Vucyl9IHxcXG5gXG4gICAgb3V0cHV0ICs9IGB8IFRvb2wgcmVzdWx0cyB8ICR7Zm9ybWF0VG9rZW5zKG1lc3NhZ2VCcmVha2Rvd24udG9vbFJlc3VsdFRva2Vucyl9IHxcXG5gXG4gICAgb3V0cHV0ICs9IGB8IEF0dGFjaG1lbnRzIHwgJHtmb3JtYXRUb2tlbnMobWVzc2FnZUJyZWFrZG93bi5hdHRhY2htZW50VG9rZW5zKX0gfFxcbmBcbiAgICBvdXRwdXQgKz0gYHwgQXNzaXN0YW50IG1lc3NhZ2VzIChub24tdG9vbCkgfCAke2Zvcm1hdFRva2VucyhtZXNzYWdlQnJlYWtkb3duLmFzc2lzdGFudE1lc3NhZ2VUb2tlbnMpfSB8XFxuYFxuICAgIG91dHB1dCArPSBgfCBVc2VyIG1lc3NhZ2VzIChub24tdG9vbC1yZXN1bHQpIHwgJHtmb3JtYXRUb2tlbnMobWVzc2FnZUJyZWFrZG93bi51c2VyTWVzc2FnZVRva2Vucyl9IHxcXG5gXG4gICAgb3V0cHV0ICs9IGBcXG5gXG5cbiAgICBpZiAobWVzc2FnZUJyZWFrZG93bi50b29sQ2FsbHNCeVR5cGUubGVuZ3RoID4gMCkge1xuICAgICAgb3V0cHV0ICs9IGAjIyMjIFRvcCBUb29sc1xcblxcbmBcbiAgICAgIG91dHB1dCArPSBgfCBUb29sIHwgQ2FsbCBUb2tlbnMgfCBSZXN1bHQgVG9rZW5zIHxcXG5gXG4gICAgICBvdXRwdXQgKz0gYHwtLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18XFxuYFxuICAgICAgZm9yIChjb25zdCB0b29sIG9mIG1lc3NhZ2VCcmVha2Rvd24udG9vbENhbGxzQnlUeXBlKSB7XG4gICAgICAgIG91dHB1dCArPSBgfCAke3Rvb2wubmFtZX0gfCAke2Zvcm1hdFRva2Vucyh0b29sLmNhbGxUb2tlbnMpfSB8ICR7Zm9ybWF0VG9rZW5zKHRvb2wucmVzdWx0VG9rZW5zKX0gfFxcbmBcbiAgICAgIH1cbiAgICAgIG91dHB1dCArPSBgXFxuYFxuICAgIH1cblxuICAgIGlmIChtZXNzYWdlQnJlYWtkb3duLmF0dGFjaG1lbnRzQnlUeXBlLmxlbmd0aCA+IDApIHtcbiAgICAgIG91dHB1dCArPSBgIyMjIyBUb3AgQXR0YWNobWVudHNcXG5cXG5gXG4gICAgICBvdXRwdXQgKz0gYHwgQXR0YWNobWVudCB8IFRva2VucyB8XFxuYFxuICAgICAgb3V0cHV0ICs9IGB8LS0tLS0tLS0tLS0tfC0tLS0tLS0tfFxcbmBcbiAgICAgIGZvciAoY29uc3QgYXR0YWNobWVudCBvZiBtZXNzYWdlQnJlYWtkb3duLmF0dGFjaG1lbnRzQnlUeXBlKSB7XG4gICAgICAgIG91dHB1dCArPSBgfCAke2F0dGFjaG1lbnQubmFtZX0gfCAke2Zvcm1hdFRva2VucyhhdHRhY2htZW50LnRva2Vucyl9IHxcXG5gXG4gICAgICB9XG4gICAgICBvdXRwdXQgKz0gYFxcbmBcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3V0cHV0XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBLGVBQXNCLG1CQUNwQixTQUNzQjtBQUN0QixRQUFNO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGLElBQUk7QUFFSixNQUFJLFVBQVUsZ0NBQWdDLFFBQVE7QUFDdEQsTUFBSSxRQUFRLGtCQUFrQixHQUFHO0FBRS9CLFVBQU0sRUFBRSxZQUFZLElBQ2xCO0FBRUYsY0FBVSxZQUFZLE9BQU87QUFBQSxFQUMvQjtBQUVBLFFBQU0sRUFBRSxVQUFVLGtCQUFrQixJQUFJLE1BQU0scUJBQXFCLE9BQU87QUFDMUUsUUFBTSxXQUFXLFlBQVk7QUFFN0IsU0FBTztBQUFBLElBQ0w7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
