'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Tilt3D } from '@/components/motion/Tilt3D'
import type { ToolCatalogItem } from '@/lib/content/catalog'
import { FavoriteButton } from '@/components/common/FavoriteButton'

function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export function BentoCard({ tool, locale }: { tool: ToolCatalogItem; locale: string }) {
  const sizeClass =
    tool.bentoSize === 'lg' ? 'bento-lg' : tool.bentoSize === 'md' ? 'bento-md' : 'bento-sm'

  const accent = tool.accentColor
  const gradientBg = `radial-gradient(ellipse at 30% 30%, ${hexToRgba(accent, 0.18)}, transparent 65%), linear-gradient(135deg, var(--card), var(--card-raised))`

  return (
    <Tilt3D className={`bento-card ${sizeClass}`} intensity={tool.bentoSize === 'lg' ? 6 : 10}>
      <div style={{ position: 'relative' }}>
      <FavoriteButton href={`/${locale}${tool.href}`} name={tool.name} />
      <Link
        href={`/${locale}${tool.href}`}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement
          el.style.boxShadow = `0 0 0 1px ${hexToRgba(accent, 0.5)}, 0 8px 32px ${hexToRgba(accent, 0.28)}, 0 24px 48px ${hexToRgba(accent, 0.1)}`
          el.style.borderColor = hexToRgba(accent, 0.6)
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement
          el.style.boxShadow = ''
          el.style.borderColor = ''
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          padding: tool.bentoSize === 'lg' ? '1.5rem' : '1.1rem',
          background: gradientBg,
          border: `1px solid ${hexToRgba(accent, 0.25)}`,
          borderRadius: '24px',
          textDecoration: 'none',
          color: 'var(--text)',
          position: 'relative',
          overflow: 'hidden',
          transition: 'border-color 0.25s ease, box-shadow 0.25s ease'
        }}
      >
        {/* Top accent line */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: `linear-gradient(90deg, transparent, ${hexToRgba(accent, 0.7)}, transparent)`,
            borderRadius: '24px 24px 0 0',
          }}
        />
        {/* Glow top-right */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-30%',
            right: '-20%',
            width: '60%',
            height: '60%',
            background: hexToRgba(accent, 0.12),
            borderRadius: '50%',
            filter: 'blur(40px)',
            pointerEvents: 'none'
          }}
        />

        {/* Badge */}
        <span
          style={{
            alignSelf: 'flex-start',
            padding: '0.2rem 0.5rem',
            borderRadius: '999px',
            fontSize: '0.7rem',
            fontWeight: 600,
            background: hexToRgba(accent, 0.18),
            border: `1px solid ${hexToRgba(accent, 0.4)}`,
            color: accent,
            marginBottom: '0.5rem'
          }}
        >
          {tool.badge}
        </span>

        {/* Icon */}
        <div
          style={{
            fontSize: tool.bentoSize === 'lg' ? '3rem' : tool.bentoSize === 'md' ? '2.2rem' : '1.8rem',
            marginBottom: '0.5rem',
            lineHeight: 1
          }}
          aria-hidden="true"
        >
          {tool.icon}
        </div>

        {/* Content */}
        <div style={{ marginTop: 'auto' }}>
          <h3
            style={{
              margin: '0 0 0.3rem',
              fontSize: tool.bentoSize === 'lg' ? '1.35rem' : '1rem',
              fontWeight: 700,
              fontFamily: 'var(--font-display), sans-serif'
            }}
          >
            {tool.name}
          </h3>
          <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5 }}>
            {tool.desc}
          </p>
        </div>

        {/* Arrow */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            color: accent,
            opacity: 0,
            fontSize: '1.2rem'
          }}
          whileHover={{ opacity: 1, x: 4 }}
          aria-hidden="true"
        >
          →
        </motion.div>
      </Link>
      </div>
    </Tilt3D>
  )
}
