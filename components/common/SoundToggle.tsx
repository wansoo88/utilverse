'use client'

import { useState, useEffect } from 'react'
import { isSoundEnabled, setSoundEnabled } from '@/lib/audio'

export function SoundToggle() {
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    setEnabled(isSoundEnabled())
  }, [])

  const toggle = () => {
    const next = !enabled
    setEnabled(next)
    setSoundEnabled(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={enabled ? 'Mute sounds' : 'Unmute sounds'}
      title={enabled ? 'Mute sounds' : 'Unmute sounds'}
      style={{
        background: 'none',
        border: '1px solid var(--line)',
        borderRadius: '8px',
        cursor: 'pointer',
        padding: '0.4rem 0.5rem',
        fontSize: '1rem',
        lineHeight: 1,
        color: 'var(--text)',
        opacity: enabled ? 1 : 0.5,
        transition: 'opacity 0.2s'
      }}
    >
      {enabled ? '🔊' : '🔇'}
    </button>
  )
}
