import { initializeErrorLogSink } from './errorLogSink.js'

/**
 * Attach error log sink.
 * Analytics has been removed from Blaude.
 *
 * Leaf module — kept out of setup.ts to avoid the setup → commands → bridge
 * → setup import cycle.
 */
export function initSinks(): void {
  initializeErrorLogSink()
}
