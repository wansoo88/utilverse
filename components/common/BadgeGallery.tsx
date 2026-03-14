'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAchievements } from '@/lib/useAchievements'

export function BadgeGallery() {
  const { allAchievements } = useAchievements()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const unlockedCount = allAchievements.filter((a) => a.unlockedAt).length

  return (
    <section className="card" style={{ padding: '1rem', marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
        <h2 className="section-title" style={{ margin: 0 }}>Achievements</h2>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          {unlockedCount} / {allAchievements.length}
        </span>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
        {allAchievements.map((badge, i) => (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.04, type: 'spring', stiffness: 300, damping: 22 }}
            title={badge.description}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.25rem',
              width: '72px',
              opacity: badge.unlockedAt ? 1 : 0.3,
              filter: badge.unlockedAt ? 'none' : 'grayscale(1)',
              cursor: 'default',
              transition: 'opacity 0.3s, filter 0.3s'
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: badge.unlockedAt
                  ? 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.2))'
                  : 'var(--card)',
                border: `2px solid ${badge.unlockedAt ? 'rgba(99,102,241,0.5)' : 'var(--line)'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                boxShadow: badge.unlockedAt ? '0 0 12px rgba(99,102,241,0.3)' : 'none'
              }}
            >
              {badge.icon}
            </div>
            <span style={{ fontSize: '0.65rem', textAlign: 'center', color: 'var(--text-muted)', lineHeight: 1.2 }}>
              {badge.title}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
