'use client'

import { useMemo, useState } from 'react'
import { useLocalHistory } from '@/lib/useLocalHistory'

export function SpinWheelTool() {
  const [rawOptions, setRawOptions] = useState('Pizza\nSushi\nBurger\nSalad')
  const [result, setResult] = useState('')
  const { items, push, clear } = useLocalHistory('history-wheel')

  const options = useMemo(
    () =>
      rawOptions
        .split('\n')
        .map((item) => item.trim())
        .filter(Boolean),
    [rawOptions]
  )

  const spin = () => {
    if (!options.length) return
    const pick = options[Math.floor(Math.random() * options.length)]
    setResult(pick)
    push(`${new Date().toLocaleTimeString()}: ${pick}`)
  }

  return (
    <div className="card" style={{ padding: '1rem' }}>
      <label>
        <span style={{ fontWeight: 600 }}>Wheel options (one per line)</span>
        <textarea
          className="textarea"
          rows={6}
          value={rawOptions}
          onChange={(e) => setRawOptions(e.target.value)}
        />
      </label>

      <div className="flex flex-wrap items-center gap-3" style={{ marginTop: '0.75rem' }}>
        <button className="btn btn-primary" onClick={spin} type="button">
          Spin
        </button>
        <p style={{ fontWeight: 700 }}>Winner: {result || '-'}</p>
      </div>

      <p className="section-copy" style={{ marginTop: '0.7rem' }}>
        Current entries: {options.length}
      </p>

      <div style={{ marginTop: '0.9rem' }}>
        <p style={{ fontWeight: 700 }}>History</p>
        <ul className="section-copy" style={{ paddingLeft: '1rem' }}>
          {items.slice(0, 10).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <button className="btn" type="button" onClick={clear}>
          Clear history
        </button>
      </div>
    </div>
  )
}
