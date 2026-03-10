const normalize = (value: string) => value.replace(/\/+$/, '')

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH
  ? normalize(process.env.NEXT_PUBLIC_BASE_PATH)
  : ''

export const siteUrl = normalize(process.env.NEXT_PUBLIC_SITE_URL || 'https://utilverse.info')

export const baseUrl = `${siteUrl}${basePath}`

export function withBasePath(path: string) {
  if (!path.startsWith('/')) {
    return `${basePath}/${path}`
  }
  return `${basePath}${path}`
}
