import type { QuerySource } from '../../constants/querySource.js'
import type { ToolUseContext } from '../../Tool.js'
import type { AssistantMessage, Message } from '../../types/message.js'

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
  return { messages }
}

export function recoverFromOverflow(
  messages: Message[],
  _querySource: QuerySource,
): { messages: Message[]; committed: number } {
  return { messages, committed: 0 }
}

export function isWithheldPromptTooLong(
  _message: AssistantMessage,
  _isPromptTooLongMessage: (message: string) => boolean,
  _querySource: QuerySource,
): boolean {
  return false
}
