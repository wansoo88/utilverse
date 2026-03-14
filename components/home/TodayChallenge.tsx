'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { getTodayChallenge } from '@/lib/content/challenges'

export function TodayChallenge({ locale }: { locale: string }) {
  const challenge = getTodayChallenge()

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.6rem',
        padding: '0.65rem 1rem',
        borderRadius: '14px',
        background: 'linear-gradient(135deg, rgba(47,141,255,0.1), rgba(0,169,184,0.08))',
        border: '1px solid rgba(47,141,255,0.25)',
        marginBottom: '1rem',
        fontSize: '0.85rem'
      }}
    >
      <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{challenge.emoji}</span>
      <span style={{ fontWeight: 700, color: 'var(--brand)', flexShrink: 0, whiteSpace: 'nowrap' }}>
        Today&apos;s Challenge:
      </span>
      <span style={{ color: 'var(--text)', flex: 1, minWidth: '180px' }}>
        {challenge.text}
      </span>
      <Link
        href={`/${locale}/${challenge.tool}`}
        className="btn btn-primary"
        style={{ minWidth: 'unset', padding: '0.35rem 0.8rem', fontSize: '0.8rem', minHeight: '34px', flexShrink: 0 }}
      >
        Try it →
      </Link>
    </motion.div>
  )
}
