import os from 'os'
import path from 'path'

let currentSocketPath: string | null = null
let onEnqueue: (() => void) | null = null

export function getDefaultUdsSocketPath(): string {
  return path.join(os.tmpdir(), `blaude-${process.pid}.sock`)
}

export async function startUdsMessaging(
  socketPath: string,
  _options?: { isExplicit?: boolean },
): Promise<void> {
  currentSocketPath = socketPath
}

export function getUdsMessagingSocketPath(): string | null {
  return currentSocketPath
}

export function setOnEnqueue(callback: (() => void) | null): void {
  onEnqueue = callback
}

export function notifyEnqueue(): void {
  onEnqueue?.()
}
