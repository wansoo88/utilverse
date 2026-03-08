'use client'

import { useState } from 'react'
import { useLocalHistory } from '@/lib/useLocalHistory'
import { randomInt } from '@/lib/random'

export function RandomNumberTool() {
  const [min, setMin] = useState(1)
  const [max, setMax] = useState(100)
  const [count, setCount] = useState(1)
  const [unique, setUnique] = useState(false)
  const [result, setResult] = useState<number[]>([])
  const { items, push, clear } = useLocalHistory('history-rng')

  const generate = () => {
    if (max < min) return
    const pool = Array.from({ length: max - min + 1 }, (_, i) => i + min)
    const next: number[] = []

    for (let i = 0; i < count; i += 1) {
      if (unique) {
        if (!pool.length) break
        const idx = randomInt(0, pool.length - 1)
        next.push(pool[idx])
        pool.splice(idx, 1)
      } else {
        next.push(randomInt(min, max))
      }
    }

    setResult(next)
    push(`${new Date().toLocaleTimeString()}: ${next.join(', ')}`)
  }

  return (
    <div className="card" style={{ padding: '1rem' }}>
      <div className="grid md:grid-cols-4 gap-3">
        <label>
          <span style={{ fontWeight: 600 }}>Min</span>
          <input className="input" type="number" value={min} onChange={(e) => setMin(Number(e.target.value))} />
        </label>
        <label>
          <span style={{ fontWeight: 600 }}>Max</span>
          <input className="input" type="number" value={max} onChange={(e) => setMax(Number(e.target.value))} />
        </label>
        <label>
          <span style={{ fontWeight: 600 }}>Count</span>
          <input className="input" type="number" min={1} max={100} value={count} onChange={(e) => setCount(Number(e.target.value))} />
        </label>
        <div className="flex items-end">
          <button className="btn btn-primary w-full" type="button" onClick={generate}>
            Generate
          </button>
        </div>
      </div>

      <label className="flex items-center gap-2" style={{ marginTop: '0.8rem' }}>
        <input type="checkbox" checked={unique} onChange={(e) => setUnique(e.target.checked)} />
        Unique values only
      </label>

      <p style={{ marginTop: '0.75rem', fontWeight: 700 }}>Result: {result.length ? result.join(', ') : '-'}</p>

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
