export function startServer(
  config: { port?: number },
  _sessionManager: unknown,
  _logger: unknown,
): {
  port: number | undefined
  stop(_force?: boolean): void
} {
  return {
    port: config.port,
    stop() {},
  }
}
