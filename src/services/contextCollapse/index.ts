import type { QuerySource } from '../../constants/querySource.js'
import type { ToolUseContext } from '../../Tool.js'
import type { AssistantMessage, Message } from '../../types/message.js'
import { trimMessagesToTargetTokens } from '../../compat/messageWindowing.js'
import { getContextWindowForModel } from '../../utils/context.js'
import { extractTextContent } from '../../utils/messages.js'
import { tokenCountWithEstimation } from '../../utils/tokens.js'

type Listener = () => void

type CollapseStats = {
  collapsedSpans: number
  stagedSpans: number
  collapsedMessages: number
  health: {
    totalErrors: number
    totalEmptySpawns: number
    emptySpawnWarningEmitted: boolean
    totalSpawns: number
    lastError?: string
  }
}

const listeners = new Set<Listener>()

const EMPTY_STATS: CollapseStats = {
  collapsedSpans: 0,
  stagedSpans: 0,
  collapsedMessages: 0,
  health: {
    totalErrors: 0,
    totalEmptySpawns: 0,
    emptySpawnWarningEmitted: false,
    totalSpawns: 0,
  },
}

let stats: CollapseStats = structuredClone(EMPTY_STATS)

function notify(): void {
  for (const listener of listeners) {
    listener()
  }
}

export function subscribe(listener: Listener): () => void {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

export function initContextCollapse(): void {
  stats = structuredClone(EMPTY_STATS)
  notify()
}

export function resetContextCollapse(): void {
  stats = structuredClone(EMPTY_STATS)
  notify()
}

export function isContextCollapseEnabled(): boolean {
  return process.env.BLAUDE_ENABLE_CONTEXT_COLLAPSE === '1'
}

export function getStats(): CollapseStats {
  return stats
}

export async function applyCollapsesIfNeeded(
  messages: Message[],
  _toolUseContext: ToolUseContext,
  _querySource: QuerySource,
): Promise<{ messages: Message[] }> {
  if (!isContextCollapseEnabled()) {
    return { messages }
  }

  const model = _toolUseContext.options.mainLoopModel
  const contextWindow = getContextWindowForModel(model)
  const triggerTokens = Math.floor(contextWindow * 0.9)
  const targetTokens = Math.floor(contextWindow * 0.72)
  const result = trimMessagesToTargetTokens(messages, targetTokens, {
    minKeepMessages: 20,
  })

  if (result.beforeTokens < triggerTokens || result.removed === 0) {
    return { messages }
  }

  stats = {
    ...stats,
    collapsedSpans: stats.collapsedSpans + 1,
    collapsedMessages: stats.collapsedMessages + result.removed,
  }
  notify()
  return { messages: result.messages }
}

export function recoverFromOverflow(
  messages: Message[],
  _querySource: QuerySource,
): { messages: Message[]; committed: number } {
  if (!isContextCollapseEnabled()) {
    return { messages, committed: 0 }
  }

  const result = trimMessagesToTargetTokens(messages, 64_000, {
    minKeepMessages: 12,
  })
  if (result.removed === 0) {
    return { messages, committed: 0 }
  }

  stats = {
    ...stats,
    collapsedSpans: stats.collapsedSpans + 1,
    stagedSpans: stats.stagedSpans + 1,
    collapsedMessages: stats.collapsedMessages + result.removed,
  }
  notify()

  return { messages: result.messages, committed: result.removed }
}

export function isWithheldPromptTooLong(
  message: Message,
  isPromptTooLongMessage: (message: AssistantMessage) => boolean,
  _querySource: QuerySource,
): boolean {
  if (!isContextCollapseEnabled()) {
    return false
  }
  if (message.type !== 'assistant') {
    return false
  }
  if (isPromptTooLongMessage(message)) {
    return true
  }
  const text = extractTextContent(message.message.content, '\n').trim()
  return text.toLowerCase().includes('prompt is too long')
}
