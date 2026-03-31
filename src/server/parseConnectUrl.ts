export function parseConnectUrl(url: string): {
  serverUrl: string
  authToken: string
} {
  try {
    const parsed = new URL(url.replace(/^cc\+unix:\/\//, 'http://'))
    return {
      serverUrl: `${parsed.protocol}//${parsed.host}`,
      authToken:
        parsed.searchParams.get('authToken') ??
        parsed.searchParams.get('token') ??
        '',
    }
  } catch {
    return {
      serverUrl: url,
      authToken: '',
    }
  }
}
