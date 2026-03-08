'use client'

import { useState } from 'react'
import { useLocalHistory } from '@/lib/useLocalHistory'
import { randomInt } from '@/lib/random'

function formatDate(value: Date) {
  return value.toISOString().split('T')[0]
}

export function RandomDateGeneratorTool() {
  const [start, setStart] = useState('2026-01-01')
  const [end, setEnd] = useState('2026-12-31')
  const [result, setResult] = useState('')
  const { items, push, clear } = useLocalHistory('history-random-date')

  const generate = () => {
    const s = new Date(start)
    const e = new Date(end)
    if (Number.isNaN(s.getTime()) || Number.isNaN(e.getTime()) || e < s) return
    const min = Math.floor(s.getTime() / 86400000)
    const max = Math.floor(e.getTime() / 86400000)
    const day = randomInt(min, max)
    const next = formatDate(new Date(day * 86400000))
    setResult(next)
    push(`${new Date().toLocaleTimeString()}: ${next}`)
  }

  return (
    <div className="card" style={{ padding: '1rem' }}>
      <div className="grid md:grid-cols-3 gap-3">
        <label><span style={{ fontWeight: 600 }}>Start date</span><input className="input" type="date" value={start} onChange={(e) => setStart(e.target.value)} /></label>
        <label><span style={{ fontWeight: 600 }}>End date</span><input className="input" type="date" value={end} onChange={(e) => setEnd(e.target.value)} /></label>
        <div className="flex items-end"><button className="btn btn-primary w-full" type="button" onClick={generate}>Generate Date</button></div>
      </div>
      <p style={{ marginTop: '0.75rem', fontWeight: 700 }}>Result: {result || '-'}</p>
      <div style={{ marginTop: '0.9rem' }}>
        <p style={{ fontWeight: 700 }}>History</p>
        <ul className="section-copy" style={{ paddingLeft: '1rem' }}>{items.slice(0, 10).map((item) => <li key={item}>{item}</li>)}</ul>
        <button className="btn" type="button" onClick={clear}>Clear history</button>
      </div>
    </div>
  )
}