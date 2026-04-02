/**
 * Analytics sink implementation - disabled in Blaude.
 *
 * Kept as a compatibility shim so existing startup code can continue to call
 * these functions without reintroducing any telemetry side effects.
 */

export function initializeAnalyticsGates(): void {
  // Telemetry disabled - no-op
}

export function initializeAnalyticsSink(): void {
  // Telemetry disabled - no-op
}
