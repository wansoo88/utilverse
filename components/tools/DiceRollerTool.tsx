'use client'

import { useState } from 'react'
import { useLocalHistory } from '@/lib/useLocalHistory'
import { randomInt } from '@/lib/random'

const diceTypes = [4, 6, 8, 10, 12, 20]

export function DiceRollerTool() {
  const [sides, setSides] = useState(6)
  const [count, setCount] = useState(2)
  const [result, setResult] = useState<number[]>([])
  const [phase, setPhase] = useState<'input' | 'running' | 'result'>('input')
  const { items, push, clear } = useLocalHistory('history-dice')

  const roll = () => {
    setPhase('running')
    window.setTimeout(() => {
      const values = Array.from({ length: count }, () => randomInt(1, sides))
      setResult(values)
      setPhase('result')
      const sum = values.reduce((acc, cur) => acc + cur, 0)
      push(`${new Date().toLocaleTimeString()}: [${values.join(', ')}] total=${sum}`)
    }, 550)
  }

  return (
    <div className="card" style={{ padding: '1rem' }}>
      <p className="section-copy">Step 1. Choose die and count. Step 2. Roll. Step 3. Check total and rerun.</p>
      <div className="grid md:grid-cols-3 gap-3" style={{ marginTop: '0.7rem' }}>
        <label>
          <span style={{ fontWeight: 600 }}>Die type</span>
          <select className="select" value={sides} onChange={(e) => setSides(Number(e.target.value))}>
            {diceTypes.map((type) => (
              <option key={type} value={type}>{`D${type}`}</option>
            ))}
          </select>
        </label>
        <label>
          <span style={{ fontWeight: 600 }}>Count</span>
          <input className="input" type="number" min={1} max={10} value={count} onChange={(e) => setCount(Number(e.target.value))} />
        </label>
        <div className="flex items-end">
          <button className="btn btn-primary w-full" type="button" onClick={roll} disabled={phase === 'running'}>
            Roll Dice
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3" style={{ marginTop: '0.75rem' }}>
        <p className="result-chip result-good">
          Result: {result.length ? `${result.join(', ')} (total ${result.reduce((a, b) => a + b, 0)})` : '-'}
        </p>
        <button className="btn" type="button" onClick={roll} disabled={phase === 'running'}>
          Rerun
        </button>
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
