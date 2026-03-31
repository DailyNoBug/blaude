type RemoteSkillMeta = {
  slug: string
  url: string
}

export function stripCanonicalPrefix(name: string): string {
  return name.replace(/^\$+/, '')
}

export function getDiscoveredRemoteSkill(
  _slug: string,
): RemoteSkillMeta | null {
  return null
}
