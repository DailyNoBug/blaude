/**
 * Datadog analytics shim - disabled in Blaude.
 */

export async function initializeDatadog(): Promise<boolean> {
  return false
}

export async function shutdownDatadog(): Promise<void> {
  // Telemetry disabled - no-op
}

export async function trackDatadogEvent(
  _eventName: string,
  _properties: { [key: string]: boolean | number | undefined },
): Promise<void> {
  // Telemetry disabled - no-op
}
