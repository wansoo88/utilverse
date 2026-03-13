export { ogSize as size, ogContentType as contentType } from '@/lib/og'
import { makeOgImage } from '@/lib/og'

export default function OgImage() {
  return makeOgImage({
    title: 'Spin the Wheel',
    subtitle: 'Random wheel spinner — add your options and spin',
    icon: '🎡',
    accent: '#10B981',
    bg: '#001a0f',
  })
}
