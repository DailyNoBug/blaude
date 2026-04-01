import { randomUUID } from 'crypto'
import type { Message } from '../../types/message.js'
import { trimMessagesToTargetTokens } from '../../compat/messageWindowing.js'

export const SNIP_NUDGE_TEXT =
  'Context is getting long. Use the Snip tool if you want to trim older details.'

const DEFAULT_SNIP_THRESHOLD_TOKENS = 120_000
const DEFAULT_SNIP_TARGET_TOKENS = 80_000
const DEFAULT_MIN_KEEP_MESSAGES = 16
const SNIP_BOUNDARY_SUBTYPE = 'snip_boundary'

function parsePositiveInt(value: string | undefined, fallback: number): number {
  const parsed = Number.parseInt(value ?? '', 10)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback
}

function getSnipThresholdTokens(): number {
  return parsePositiveInt(
    process.env.BLAUDE_SNIP_THRESHOLD_TOKENS,
    DEFAULT_SNIP_THRESHOLD_TOKENS,
  )
}

function getSnipTargetTokens(): number {
  const target = parsePositiveInt(
    process.env.BLAUDE_SNIP_TARGET_TOKENS,
    DEFAULT_SNIP_TARGET_TOKENS,
  )
  return Math.min(target, getSnipThresholdTokens())
}

function getMinKeepMessages(): number {
  return parsePositiveInt(
    process.env.BLAUDE_SNIP_MIN_KEEP_MESSAGES,
    DEFAULT_MIN_KEEP_MESSAGES,
  )
}

function createSnipBoundaryMessage(tokensFreed: number): Message {
  return {
    type: 'system',
    subtype: SNIP_BOUNDARY_SUBTYPE,
    content: `Conversation snipped (${tokensFreed} tokens freed)`,
    isMeta: false,
    level: 'info',
    timestamp: new Date().toISOString(),
    uuid: randomUUID(),
  } as Message
}

export function isSnipRuntimeEnabled(): boolean {
  return process.env.BLAUDE_ENABLE_HISTORY_SNIP !== '0'
}

export function isSnipMarkerMessage(message: Message): boolean {
  return isSnipBoundaryMessage(message)
}

export function shouldNudgeForSnips(messages: Message[]): boolean {
  const threshold = getSnipThresholdTokens()
  const { beforeTokens } = trimMessagesToTargetTokens(messages, threshold, {
    minKeepMessages: getMinKeepMessages(),
  })
  return beforeTokens >= Math.floor(threshold * 0.85)
}

export function snipCompactIfNeeded(
  messages: Message[],
  options?: { force?: boolean },
): {
  messages: Message[]
  tokensFreed: number
  boundaryMessage?: Message
  executed: boolean
} {
  if (!isSnipRuntimeEnabled()) {
    return {
      messages,
      tokensFreed: 0,
      executed: false,
    }
  }

  const threshold = getSnipThresholdTokens()
  const target = getSnipTargetTokens()
  const minKeepMessages = getMinKeepMessages()
  const trimResult = trimMessagesToTargetTokens(messages, target, {
    minKeepMessages,
  })

  const shouldRun =
    options?.force === true
      ? trimResult.removed > 0
      : trimResult.beforeTokens >= threshold && trimResult.removed > 0

  if (!shouldRun) {
    return {
      messages,
      tokensFreed: 0,
      executed: false,
    }
  }

  const tokensFreed = Math.max(
    0,
    trimResult.beforeTokens - trimResult.afterTokens,
  )

  return {
    messages: trimResult.messages,
    tokensFreed,
    boundaryMessage:
      options?.force === true ? undefined : createSnipBoundaryMessage(tokensFreed),
    executed: true,
  }
}

export function isSnipBoundaryMessage(message: Message): boolean {
  return (
    message?.type === 'system' &&
    (message as { subtype?: string }).subtype === SNIP_BOUNDARY_SUBTYPE
  )
}
