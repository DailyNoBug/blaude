import { getSystemThemeName, type SystemTheme } from './systemTheme.js'

export function watchSystemTheme(
  _internalQuerier: unknown,
  onChange: (theme: SystemTheme) => void,
): () => void {
  onChange(getSystemThemeName())
  return () => {}
}
