import { z } from 'zod/v4'
import { buildTool, type ToolDef } from '../../Tool.js'
import { snipCompactIfNeeded } from '../../services/compact/snipCompact.js'
import { lazySchema } from '../../utils/lazySchema.js'
import { SNIP_TOOL_NAME } from './prompt.js'

const inputSchema = lazySchema(() =>
  z.strictObject({
    force: z
      .boolean()
      .optional()
      .default(true)
      .describe('Force a snip pass even if the runtime would not auto-snip yet.'),
  }),
)
type InputSchema = ReturnType<typeof inputSchema>

const outputSchema = lazySchema(() =>
  z.object({
    executed: z.boolean(),
    tokensFreed: z.number(),
    removedMessages: z.number(),
    remainingMessages: z.number(),
  }),
)
type OutputSchema = ReturnType<typeof outputSchema>

type Output = z.infer<OutputSchema>

export const SnipTool = buildTool({
  name: SNIP_TOOL_NAME,
  isReadOnly() {
    return true
  },
  isConcurrencySafe() {
    return true
  },
  async description() {
    return 'Trim older conversation history while preserving a recent working set.'
  },
  async prompt() {
    return 'Use this tool when context is getting large and you want to aggressively trim older messages before continuing.'
  },
  get inputSchema(): InputSchema {
    return inputSchema()
  },
  get outputSchema(): OutputSchema {
    return outputSchema()
  },
  async call(input, toolUseContext) {
    const before = toolUseContext.messages.length
    const result = snipCompactIfNeeded(toolUseContext.messages, {
      force: input.force,
    })
    if (result.executed) {
      toolUseContext.setAppState(prev => ({
        ...prev,
        messages: result.messages,
      }))
      if (
        result.boundaryMessage &&
        toolUseContext.appendSystemMessage &&
        result.boundaryMessage.type === 'system'
      ) {
        toolUseContext.appendSystemMessage(result.boundaryMessage)
      }
    }
    return {
      data: {
        executed: result.executed,
        tokensFreed: result.tokensFreed,
        removedMessages: before - result.messages.length,
        remainingMessages: result.messages.length,
      },
    }
  },
  mapToolResultToToolResultBlockParam(output, toolUseID) {
    return {
      tool_use_id: toolUseID,
      type: 'tool_result',
      content: [
        `executed: ${output.executed}`,
        `tokens_freed: ${output.tokensFreed}`,
        `removed_messages: ${output.removedMessages}`,
        `remaining_messages: ${output.remainingMessages}`,
      ].join('\n'),
    }
  },
} satisfies ToolDef<InputSchema, Output>)
