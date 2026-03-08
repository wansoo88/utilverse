'use client'

import { useState } from 'react'
import { useLocalHistory } from '@/lib/useLocalHistory'
import { randomInt } from '@/lib/random'

export function LotteryNumberGeneratorTool() {
  const [count, setCount] = useState(6)
  const [max, setMax] = useState(45)
  const [result, setResult] = useState<number[]>([])
  const { items, push, clear } = useLocalHistory('history-lottery')

  const generate = () => {
    const pool = Array.from({ length: max }, (_, i) => i + 1)
    const out: number[] = []
    for (let i = 0; i < count && pool.length; i += 1) {
      const idx = randomInt(0, pool.length - 1)
      out.push(pool[idx])
      pool.splice(idx, 1)
    }
    out.sort((a, b) => a - b)
    setResult(out)
    push(`${new Date().toLocaleTimeString()}: ${out.join(', ')}`)
  }

  return (
    <div className="card" style={{ padding: '1rem' }}>
      <div className="grid md:grid-cols-3 gap-3">
        <label><span style={{ fontWeight: 600 }}>Numbers to pick</span><input className="input" type="number" min={1} max={10} value={count} onChange={(e) => setCount(Number(e.target.value))} /></label>
        <label><span style={{ fontWeight: 600 }}>Max number</span><input className="input" type="number" min={10} max={99} value={max} onChange={(e) => setMax(Number(e.target.value))} /></label>
        <div className="flex items-end"><button className="btn btn-primary w-full" type="button" onClick={generate}>Generate Lottery Numbers</button></div>
      </div>
      <p style={{ marginTop: '0.75rem', fontWeight: 700 }}>Result: {result.length ? result.join(', ') : '-'}</p>
      <div style={{ marginTop: '0.9rem' }}>
        <p style={{ fontWeight: 700 }}>History</p>
        <ul className="section-copy" style={{ paddingLeft: '1rem' }}>{items.slice(0, 10).map((item) => <li key={item}>{item}</li>)}</ul>
        <button className="btn" type="button" onClick={clear}>Clear history</button>
      </div>
    </div>
  )
}