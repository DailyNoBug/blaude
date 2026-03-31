export async function sendToUdsSocket(
  _socketPath: string,
  _message: string,
): Promise<void> {}

export async function listAllLiveSessions(): Promise<never[]> {
  return []
}
