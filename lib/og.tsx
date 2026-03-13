import { ImageResponse } from 'next/og'

export const ogSize = { width: 1200, height: 630 }
export const ogContentType = 'image/png'

type OgConfig = {
  title: string
  subtitle: string
  icon: string
  accent: string   // hex e.g. '#F59E0B'
  bg: string       // hex e.g. '#1a1a2e'
}

export function makeOgImage(config: OgConfig) {
  const { title, subtitle, icon, accent, bg } = config
  const r = parseInt(accent.slice(1, 3), 16)
  const g = parseInt(accent.slice(3, 5), 16)
  const b = parseInt(accent.slice(5, 7), 16)

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: bg,
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            top: '-150px',
            left: '-150px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: `rgba(${r},${g},${b},0.15)`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: `rgba(${r},${g},${b},0.10)`,
          }}
        />

        {/* Icon circle */}
        <div
          style={{
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            background: `rgba(${r},${g},${b},0.18)`,
            border: `3px solid rgba(${r},${g},${b},0.5)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '72px',
            marginBottom: '32px',
          }}
        >
          {icon}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 800,
            color: '#ffffff',
            textAlign: 'center',
            lineHeight: 1.1,
            marginBottom: '16px',
            maxWidth: '900px',
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '32px',
            color: 'rgba(255,255,255,0.65)',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.4,
          }}
        >
          {subtitle}
        </div>

        {/* Brand tag */}
        <div
          style={{
            position: 'absolute',
            bottom: '36px',
            right: '48px',
            fontSize: '24px',
            fontWeight: 700,
            color: accent,
            opacity: 0.9,
          }}
        >
          utilverse.info
        </div>
      </div>
    ),
    { ...ogSize }
  )
}
