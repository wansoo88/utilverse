export { ogSize as size, ogContentType as contentType } from '@/lib/og'
import { makeOgImage } from '@/lib/og'

export default function OgImage() {
  return makeOgImage({
    title: 'Yes or No Generator',
    subtitle: 'Get a random yes or no answer — let fate decide',
    icon: '✅',
    accent: '#22C55E',
    bg: '#001a08',
  })
}
