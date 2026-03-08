'use client'

import { useState } from 'react'
import { useLocalHistory } from '@/lib/useLocalHistory'
import { randomInt } from '@/lib/random'

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export function RandomLetterTool() {
  const [count, setCount] = useState(1)
  const [lowercase, setLowercase] = useState(false)
  const [result, setResult] = useState<string[]>([])
  const { items, push, clear } = useLocalHistory('history-random-letter')

  const generate = () => {
    const next = Array.from({ length: Math.max(1, count) }, () => {
      const letter = LETTERS[randomInt(0, LETTERS.length - 1)]
      return lowercase ? letter.toLowerCase() : letter
    })
    setResult(next)
    push(`${new Date().toLocaleTimeString()}: ${next.join(', ')}`)
  }

  return (
    <div className="card" style={{ padding: '1rem' }}>
      <div className="grid md:grid-cols-3 gap-3">
        <label>
          <span style={{ fontWeight: 600 }}>Count</span>
          <input className="input" type="number" min={1} max={50} value={count} onChange={(e) => setCount(Number(e.target.value))} />
        </label>
        <label className="flex items-end gap-2">
          <input type="checkbox" checked={lowercase} onChange={(e) => setLowercase(e.target.checked)} />
          Lowercase output
        </label>
        <div className="flex items-end">
          <button className="btn btn-primary w-full" type="button" onClick={generate}>Generate Letters</button>
        </div>
      </div>
      <p style={{ marginTop: '0.8rem', fontWeight: 700 }}>Result: {result.length ? result.join(', ') : '-'}</p>
      <div style={{ marginTop: '0.9rem' }}>
        <p style={{ fontWeight: 700 }}>History</p>
        <ul className="section-copy" style={{ paddingLeft: '1rem' }}>
          {items.slice(0, 10).map((item) => <li key={item}>{item}</li>)}
        </ul>
        <button className="btn" type="button" onClick={clear}>Clear history</button>
      </div>
    </div>
  )
}