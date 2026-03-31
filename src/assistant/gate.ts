export async function isKairosEnabled(): Promise<boolean> {
  return process.env.CLAUDE_CODE_ENABLE_KAIROS === '1'
}
