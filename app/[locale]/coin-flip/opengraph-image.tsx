export { ogSize as size, ogContentType as contentType } from '@/lib/og'
import { makeOgImage } from '@/lib/og'

export default function OgImage() {
  return makeOgImage({
    title: 'Coin Flip',
    subtitle: 'Flip a coin online — heads or tails, instant result',
    icon: '🪙',
    accent: '#F59E0B',
    bg: '#1a1200',
  })
}
