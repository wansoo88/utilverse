'use client'

import { useState } from 'react'
import { useLocalHistory } from '@/lib/useLocalHistory'
import { randomBool } from '@/lib/random'

export function CoinFlipTool() {
  const [result, setResult] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [phase, setPhase] = useState<'input' | 'running' | 'result'>('input')
  const { items, push, clear } = useLocalHistory('history-coin-flip')

  const flip = () => {
    setPhase('running')
    try {
      window.setTimeout(() => {
        const next = randomBool() ? 'Heads' : 'Tails'
        setResult(next)
        setError('')
        setPhase('result')
        push(`${new Date().toLocaleTimeString()}: ${next}`)
      }, 600)
    } catch {
      setPhase('result')
      setError('Failed to generate random value. Please try again.')
    }
  }

  return (
    <div className="card tool-surface" style={{ padding: '1rem' }}>
      <p className="section-copy">Step 1. Tap flip. Step 2. Watch the motion. Step 3. Read result and rerun.</p>
      <div className={`coin-face ${phase === 'running' ? 'coin-face-spin' : ''}`} aria-live="polite">
        {result || 'Flip'}
      </div>

      <div className="flex flex-wrap items-center gap-3" style={{ marginTop: '0.8rem' }}>
        <button className="btn btn-primary" onClick={flip} type="button" disabled={phase === 'running'}>
          Flip Coin
        </button>
        <button className="btn" onClick={flip} type="button" disabled={phase === 'running'}>
          Rerun
        </button>
        <p className={`result-chip ${result === 'Heads' ? 'result-good' : 'result-warn'}`}>
          Result: {result || '-'}
        </p>
      </div>

      {error ? <p style={{ color: '#ff6b6b', marginTop: '0.5rem' }}>{error}</p> : null}

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
