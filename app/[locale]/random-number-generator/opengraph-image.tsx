export { ogSize as size, ogContentType as contentType } from '@/lib/og'
import { makeOgImage } from '@/lib/og'

export default function OgImage() {
  return makeOgImage({
    title: 'Random Number Generator',
    subtitle: 'Generate random numbers in any range — free & instant',
    icon: '🔢',
    accent: '#38BDF8',
    bg: '#001524',
  })
}
