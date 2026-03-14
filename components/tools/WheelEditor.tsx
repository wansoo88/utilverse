'use client'

import type { WheelOption } from '@/lib/wheelStorage'
import { generateColors } from '@/lib/wheelStorage'

interface Props {
  options: WheelOption[]
  onChange: (options: WheelOption[]) => void
}

export function WheelEditor({ options, onChange }: Props) {
  const addOption = () => {
    if (options.length >= 24) return
    const newOptions = [
      ...options,
      { label: `Option ${options.length + 1}`, color: generateColors(options.length + 1)[options.length] }
    ]
    // Recompute all colors for uniform distribution
    const recolored = newOptions.map((opt, i) => ({
      ...opt,
      color: generateColors(newOptions.length)[i]
    }))
    onChange(recolored)
  }

  const removeOption = (index: number) => {
    if (options.length <= 2) return
    const next = options.filter((_, i) => i !== index)
    const recolored = next.map((opt, i) => ({
      ...opt,
      color: generateColors(next.length)[i]
    }))
    onChange(recolored)
  }

  const updateLabel = (index: number, label: string) => {
    const next = options.map((opt, i) => (i === index ? { ...opt, label } : opt))
    onChange(next)
  }

  return (
    <div style={{ marginBottom: '0.75rem' }}>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
        <button
          type="button"
          className="btn"
          onClick={addOption}
          disabled={options.length >= 24}
          style={{ minWidth: 'unset', padding: '0.35rem 0.7rem', fontSize: '0.82rem', minHeight: '36px' }}
        >
          + Add Option
        </button>
        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', alignSelf: 'center' }}>
          {options.length} / 24
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', maxHeight: '220px', overflowY: 'auto' }}>
        {options.map((opt, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                background: opt.color,
                flexShrink: 0,
                boxShadow: `0 0 6px ${opt.color}60`
              }}
            />
            <input
              type="text"
              value={opt.label}
              maxLength={20}
              onChange={(e) => updateLabel(i, e.target.value)}
              className="input"
              style={{ padding: '0.3rem 0.6rem', fontSize: '0.85rem' }}
            />
            <button
              type="button"
              onClick={() => removeOption(i)}
              disabled={options.length <= 2}
              aria-label={`Remove ${opt.label}`}
              style={{
                background: 'none',
                border: 'none',
                cursor: options.length <= 2 ? 'not-allowed' : 'pointer',
                color: 'var(--text-muted)',
                fontSize: '1rem',
                padding: '0.2rem',
                opacity: options.length <= 2 ? 0.3 : 0.7,
                flexShrink: 0
              }}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
