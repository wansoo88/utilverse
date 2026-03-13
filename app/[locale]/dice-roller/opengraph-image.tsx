export { ogSize as size, ogContentType as contentType } from '@/lib/og'
import { makeOgImage } from '@/lib/og'

export default function OgImage() {
  return makeOgImage({
    title: 'Dice Roller',
    subtitle: 'Roll D4 to D20 dice online — multi-roll with history',
    icon: '🎲',
    accent: '#8B5CF6',
    bg: '#0d0a1a',
  })
}
