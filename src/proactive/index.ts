type Listener = () => void

const listeners = new Set<Listener>()

let proactiveActive = false
let proactivePaused = false
let contextBlocked = false
let nextTickAt: number | null = null

function notify(): void {
  for (const listener of listeners) {
    listener()
  }
}

function recomputeNextTickAt(): void {
  nextTickAt =
    proactiveActive && !proactivePaused && !contextBlocked
      ? Date.now() + 1000
      : null
}

export function subscribeToProactiveChanges(listener: Listener): () => void {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

export const subscribe = subscribeToProactiveChanges

export function isProactiveActive(): boolean {
  return proactiveActive
}

export function activateProactive(_source: string = 'command'): void {
  proactiveActive = true
  proactivePaused = false
  recomputeNextTickAt()
  notify()
}

export function deactivateProactive(): void {
  proactiveActive = false
  proactivePaused = false
  contextBlocked = false
  recomputeNextTickAt()
  notify()
}

export function pauseProactive(): void {
  proactivePaused = true
  recomputeNextTickAt()
  notify()
}

export function resumeProactive(): void {
  proactivePaused = false
  recomputeNextTickAt()
  notify()
}

export function isProactivePaused(): boolean {
  return proactivePaused
}

export function setContextBlocked(blocked: boolean): void {
  contextBlocked = blocked
  recomputeNextTickAt()
  notify()
}

export function isContextBlocked(): boolean {
  return contextBlocked
}

export function getNextTickAt(): number | null {
  return nextTickAt
}
