export async function loadRemoteSkill(_slug: string, _url: string): Promise<{
  cacheHit: false
  latencyMs: number
  skillPath: string
  content: string
  fileCount: number
  totalBytes: number
  fetchMethod: 'disabled'
}> {
  return {
    cacheHit: false,
    latencyMs: 0,
    skillPath: '',
    content: '',
    fileCount: 0,
    totalBytes: 0,
    fetchMethod: 'disabled',
  }
}
