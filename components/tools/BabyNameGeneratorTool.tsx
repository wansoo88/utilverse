'use client'

import { useMemo, useState } from 'react'
import { pickRandom } from '@/lib/random'
import { useLocalHistory } from '@/lib/useLocalHistory'

const names = {
  neutral: ['Avery', 'Riley', 'Skyler', 'Rowan', 'Parker', 'Morgan', 'Quinn', 'Elliot'],
  girl: ['Emma', 'Olivia', 'Mia', 'Sophia', 'Luna', 'Isla', 'Amelia', 'Aria'],
  boy: ['Noah', 'Liam', 'Ethan', 'Lucas', 'Mason', 'Leo', 'Aiden', 'Elijah']
}

export function BabyNameGeneratorTool() {
  const [type, setType] = useState<'neutral' | 'girl' | 'boy'>('neutral')
  const [result, setResult] = useState('')
  const { items, push, clear } = useLocalHistory('history-baby-name')

  const pool = useMemo(() => names[type], [type])

  const generate = () => {
    const next = pickRandom(pool)
    setResult(next)
    push(`${new Date().toLocaleTimeString()}: ${next} (${type})`)
  }

  return (
    <div className="card" style={{ padding: '1rem' }}>
      <label>
        <span style={{ fontWeight: 600 }}>Name type</span>
        <select className="select" value={type} onChange={(e) => setType(e.target.value as 'neutral' | 'girl' | 'boy')}>
          <option value="neutral">Neutral</option>
          <option value="girl">Girl</option>
          <option value="boy">Boy</option>
        </select>
      </label>
      <div className="flex flex-wrap items-center gap-3" style={{ marginTop: '0.75rem' }}>
        <button className="btn btn-primary" type="button" onClick={generate}>Generate Baby Name</button>
        <p style={{ fontWeight: 700 }}>Result: {result || '-'}</p>
      </div>
      <div style={{ marginTop: '0.9rem' }}>
        <p style={{ fontWeight: 700 }}>History</p>
        <ul className="section-copy" style={{ paddingLeft: '1rem' }}>{items.slice(0, 10).map((item) => <li key={item}>{item}</li>)}</ul>
        <button className="btn" type="button" onClick={clear}>Clear history</button>
      </div>
    </div>
  )
}