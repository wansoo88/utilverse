'use client'

import { useState } from 'react'
import { useLocalHistory } from '@/lib/useLocalHistory'

export function CoinFlipTool() {
  const [result, setResult] = useState<string>('')
  const { items, push, clear } = useLocalHistory('history-coin-flip')

  const flip = () => {
    const next = Math.random() < 0.5 ? 'Heads' : 'Tails'
    setResult(next)
    push(`${new Date().toLocaleTimeString()}: ${next}`)
  }

  return (
    <div className="card" style={{ padding: '1rem' }}>
      <div className="flex flex-wrap items-center gap-3">
        <button className="btn btn-primary" onClick={flip} type="button">
          Flip Coin
        </button>
        <p style={{ fontWeight: 700 }}>Result: {result || '-'}</p>
      </div>
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
