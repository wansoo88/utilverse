export { ogSize as size, ogContentType as contentType } from '@/lib/og'
import { makeOgImage } from '@/lib/og'

export default function OgImage() {
  return makeOgImage({
    title: 'Random Decision Tools',
    subtitle: 'Coin flip, dice roller, wheel spinner & more — all free',
    icon: '🎲',
    accent: '#6366F1',
    bg: '#0f0f1a',
  })
}
