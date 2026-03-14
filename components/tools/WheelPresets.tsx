'use client'

import type { WheelOption } from '@/lib/wheelStorage'
import { PRESETS } from '@/lib/wheelStorage'

const PRESET_LABELS: Record<string, string> = {
  random: '🎲 Random',
  lunch: '🍕 Lunch',
  vote: '👥 Team Vote',
  game: '🎮 Game'
}

interface Props {
  activePreset: string
  onSelect: (preset: string, options: WheelOption[]) => void
}

export function WheelPresets({ activePreset, onSelect }: Props) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.75rem' }}>
      {Object.keys(PRESETS).map((key) => (
        <button
          key={key}
          type="button"
          onClick={() => onSelect(key, PRESETS[key])}
          className="btn"
          style={{
            minWidth: 'unset',
            padding: '0.35rem 0.7rem',
            fontSize: '0.82rem',
            minHeight: '36px',
            background:
              activePreset === key
                ? 'linear-gradient(135deg, var(--brand), var(--brand-2))'
                : undefined,
            color: activePreset === key ? '#fff' : undefined,
            borderColor: activePreset === key ? 'transparent' : undefined
          }}
        >
          {PRESET_LABELS[key]}
        </button>
      ))}
      <button
        type="button"
        onClick={() => onSelect('custom', [])}
        className="btn"
        style={{
          minWidth: 'unset',
          padding: '0.35rem 0.7rem',
          fontSize: '0.82rem',
          minHeight: '36px',
          background:
            activePreset === 'custom'
              ? 'linear-gradient(135deg, var(--brand), var(--brand-2))'
              : undefined,
          color: activePreset === 'custom' ? '#fff' : undefined,
          borderColor: activePreset === 'custom' ? 'transparent' : undefined
        }}
      >
        ✏️ Custom
      </button>
    </div>
  )
}
