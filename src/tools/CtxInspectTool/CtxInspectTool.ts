import { z } from 'zod/v4'
import { buildTool, type ToolDef } from '../../Tool.js'
import { getStats, isContextCollapseEnabled } from '../../services/contextCollapse/index.js'
import { lazySchema } from '../../utils/lazySchema.js'
import { findLastCompactBoundaryIndex, getMessagesAfterCompactBoundary } from '../../utils/messages.js'
import { tokenCountWithEstimation } from '../../utils/tokens.js'

const CTX_INSPECT_TOOL_NAME = 'CtxInspect'

const inputSchema = lazySchema(() => z.strictObject({}))
type InputSchema = ReturnType<typeof inputSchema>

const outputSchema = lazySchema(() =>
  z.object({
    totalMessages: z.number(),
    activeMessages: z.number(),
    estimatedTokens: z.number(),
    sinceLastCompactMessages: z.number(),
    lastCompactBoundaryIndex: z.number(),
    collapseStats: z.object({
      collapsedSpans: z.number(),
      stagedSpans: z.number(),
      collapsedMessages: z.number(),
    }),
  }),
)
type OutputSchema = ReturnType<typeof outputSchema>

type Output = z.infer<OutputSchema>

export const CtxInspectTool = buildTool({
  name: CTX_INSPECT_TOOL_NAME,
  isEnabled() {
    return isContextCollapseEnabled()
  },
  isReadOnly() {
    return true
  },
  isConcurrencySafe() {
    return true
  },
  async description() {
    return 'Inspect the current conversation context window and collapse state.'
  },
  async prompt() {
    return 'Use this tool when you need a quick snapshot of message volume, estimated tokens, and context-collapse activity.'
  },
  get inputSchema(): InputSchema {
    return inputSchema()
  },
  get outputSchema(): OutputSchema {
    return outputSchema()
  },
  async call(_input, toolUseContext) {
    const totalMessages = toolUseContext.messages.length
    const activeMessages = getMessagesAfterCompactBoundary(
      toolUseContext.messages,
    ).length
    const estimatedTokens = tokenCountWithEstimation(toolUseContext.messages)
    const collapseStats = getStats()
    return {
      data: {
        totalMessages,
        activeMessages,
        estimatedTokens,
        sinceLastCompactMessages: activeMessages,
        lastCompactBoundaryIndex: findLastCompactBoundaryIndex(
          toolUseContext.messages,
        ),
        collapseStats: {
          collapsedSpans: collapseStats.collapsedSpans,
          stagedSpans: collapseStats.stagedSpans,
          collapsedMessages: collapseStats.collapsedMessages,
        },
      },
    }
  },
  mapToolResultToToolResultBlockParam(output, toolUseID) {
    const content = [
      `total_messages: ${output.totalMessages}`,
      `active_messages: ${output.activeMessages}`,
      `estimated_tokens: ${output.estimatedTokens}`,
      `since_last_compact_messages: ${output.sinceLastCompactMessages}`,
      `last_compact_boundary_index: ${output.lastCompactBoundaryIndex}`,
      `collapse_stats: collapsed_spans=${output.collapseStats.collapsedSpans}, staged_spans=${output.collapseStats.stagedSpans}, collapsed_messages=${output.collapseStats.collapsedMessages}`,
    ].join('\n')
    return {
      tool_use_id: toolUseID,
      type: 'tool_result',
      content,
    }
  },
} satisfies ToolDef<InputSchema, Output>)
