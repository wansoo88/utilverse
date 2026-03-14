'use client'

import { motion, AnimatePresence } from 'framer-motion'
import type { Achievement } from '@/lib/useAchievements'

interface Props {
  badge: Achievement | null
}

export function AchievementToast({ badge }: Props) {
  return (
    <AnimatePresence>
      {badge && (
        <motion.div
          key={badge.id}
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 60, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 28 }}
          style={{
            position: 'fixed',
            bottom: '5rem',
            right: '1.5rem',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.75rem 1rem',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, rgba(99,102,241,0.95), rgba(168,85,247,0.95))',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 8px 32px rgba(99,102,241,0.4)',
            color: '#fff',
            maxWidth: '280px',
            pointerEvents: 'none'
          }}
          role="alert"
          aria-live="polite"
        >
          <span style={{ fontSize: '2rem', flexShrink: 0 }}>{badge.icon}</span>
          <div>
            <p style={{ fontWeight: 800, fontSize: '0.85rem', margin: 0 }}>🏆 Achievement Unlocked!</p>
            <p style={{ fontWeight: 700, margin: '0.1rem 0 0' }}>{badge.title}</p>
            <p style={{ fontSize: '0.75rem', opacity: 0.85, margin: 0 }}>{badge.description}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
