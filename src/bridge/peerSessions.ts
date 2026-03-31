export async function postInterClaudeMessage(
  _target: string,
  _message: string,
): Promise<{ ok: false; error: string }> {
  return {
    ok: false,
    error: 'Bridge peer messaging is unavailable in this leaked-src compatibility build.',
  }
}
