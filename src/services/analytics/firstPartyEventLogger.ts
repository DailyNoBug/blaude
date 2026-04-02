/**
 * First-party event logger shim - disabled in Blaude.
 */

export type EventSamplingConfig = {
  [eventName: string]: {
    sample_rate: number
  }
}

export function getEventSamplingConfig(): EventSamplingConfig {
  return {}
}

export function shouldSampleEvent(_eventName: string): number | null {
  return null
}

export async function shutdown1PEventLogging(): Promise<void> {
  // Telemetry disabled - no-op
}

export function is1PEventLoggingEnabled(): boolean {
  return false
}

export function logEventTo1P(
  _eventName: string,
  _metadata: Record<string, number | boolean | undefined> = {},
): void {
  // Telemetry disabled - no-op
}

export type GrowthBookExperimentData = {
  experimentId: string
  variationId: number
  userAttributes?: unknown
  experimentMetadata?: Record<string, unknown>
}

export function logGrowthBookExperimentTo1P(
  _data: GrowthBookExperimentData,
): void {
  // Telemetry disabled - no-op
}

export function initialize1PEventLogging(): void {
  // Telemetry disabled - no-op
}

export async function reinitialize1PEventLoggingIfConfigChanged(): Promise<void> {
  // Telemetry disabled - no-op
}
