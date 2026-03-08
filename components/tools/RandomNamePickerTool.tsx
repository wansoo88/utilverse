'use client'

import { useMemo, useState } from 'react'
import { useLocalHistory } from '@/lib/useLocalHistory'
import { pickRandom } from '@/lib/random'

export function RandomNamePickerTool() {
  const [raw, setRaw] = useState('Alex\nSam\nJordan\nTaylor')
  const [result, setResult] = useState('')
  const { items, push, clear } = useLocalHistory('history-name-picker')

  const names = useMemo(
    () => raw.split('\n').map((v) => v.trim()).filter(Boolean),
    [raw]
  )

  const pick = () => {
    if (!names.length) return
    const next = pickRandom(names)
    setResult(next)
    push(`${new Date().toLocaleTimeString()}: ${next}`)
  }

  return (
    <div className="card" style={{ padding: '1rem' }}>
      <label>
        <span style={{ fontWeight: 600 }}>Names (one per line)</span>
        <textarea className="textarea" rows={6} value={raw} onChange={(e) => setRaw(e.target.value)} />
      </label>
      <div className="flex flex-wrap items-center gap-3" style={{ marginTop: '0.75rem' }}>
        <button className="btn btn-primary" type="button" onClick={pick}>Pick a Name</button>
        <p style={{ fontWeight: 700 }}>Selected: {result || '-'}</p>
      </div>
      <p className="section-copy" style={{ marginTop: '0.6rem' }}>Total names: {names.length}</p>
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