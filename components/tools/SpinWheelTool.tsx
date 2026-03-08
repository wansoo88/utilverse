'use client'

import { useMemo, useState } from 'react'
import { useLocalHistory } from '@/lib/useLocalHistory'
import { pickRandom } from '@/lib/random'

export function SpinWheelTool() {
  const [rawOptions, setRawOptions] = useState('Pizza\nSushi\nBurger\nSalad')
  const [result, setResult] = useState('')
  const [phase, setPhase] = useState<'input' | 'running' | 'result'>('input')
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
    setPhase('running')
    window.setTimeout(() => {
      const pick = pickRandom(options)
      setResult(pick)
      setPhase('result')
      push(`${new Date().toLocaleTimeString()}: ${pick}`)
    }, 700)
  }

  return (
    <div className="card" style={{ padding: '1rem' }}>
      <p className="section-copy">Step 1. Enter options. Step 2. Spin. Step 3. Confirm winner and rerun.</p>
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
        <button className="btn btn-primary" onClick={spin} type="button" disabled={phase === 'running'}>
          Spin
        </button>
        <button className="btn" onClick={spin} type="button" disabled={phase === 'running'}>
          Rerun
        </button>
        <p className={`result-chip ${result ? 'result-good' : 'result-muted'}`}>Winner: {result || '-'}</p>
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
