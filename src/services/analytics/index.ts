/**
 * Analytics service - DISABLED
 *
 * Telemetry has been removed from Blaude. All functions are no-ops.
 */

/**
 * Marker type for verifying analytics metadata doesn't contain sensitive data
 *
 * This type forces explicit verification that string values being logged
 * don't contain code snippets, file paths, or other sensitive information.
 *
 * Usage: `myString as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS`
 */
export type AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS = never

/**
 * Marker type for values routed to PII-tagged proto columns via `_PROTO_*`
 * payload keys. The destination BQ column has privileged access controls,
 * so unredacted values are acceptable — unlike general-access backends.
 *
 * Usage: `rawName as AnalyticsMetadata_I_VERIFIED_THIS_IS_PII_TAGGED`
 */
export type AnalyticsMetadata_I_VERIFIED_THIS_IS_PII_TAGGED = never

/**
 * Strip `_PROTO_*` keys from a payload destined for general-access storage.
 * No-op since telemetry is disabled.
 */
export function stripProtoFields<V>(
  metadata: Record<string, V>,
): Record<string, V> {
  return metadata
}

// Internal type for logEvent metadata
type LogEventMetadata = { [key: string]: boolean | number | undefined }

/**
 * Sink interface for the analytics backend
 */
export type AnalyticsSink = {
  logEvent: (eventName: string, metadata: LogEventMetadata) => void
  logEventAsync: (
    eventName: string,
    metadata: LogEventMetadata,
  ) => Promise<void>
}

/**
 * Attach the analytics sink - no-op (telemetry disabled)
 */
export function attachAnalyticsSink(_newSink: AnalyticsSink): void {
  // Telemetry disabled - no-op
}

/**
 * Log an event to analytics backends - no-op (telemetry disabled)
 */
export function logEvent(
  _eventName: string,
  _metadata: LogEventMetadata,
): void {
  // Telemetry disabled - no-op
}

/**
 * Log an event to analytics backends (async) - no-op (telemetry disabled)
 */
export async function logEventAsync(
  _eventName: string,
  _metadata: LogEventMetadata,
): Promise<void> {
  // Telemetry disabled - no-op
}

/**
 * Reset analytics state for testing purposes only - no-op (telemetry disabled)
 * @internal
 */
export function _resetForTesting(): void {
  // Telemetry disabled - no-op
}
