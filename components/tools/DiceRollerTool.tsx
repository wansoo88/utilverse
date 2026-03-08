'use client'

import { useState } from 'react'
import { useLocalHistory } from '@/lib/useLocalHistory'
import { randomInt } from '@/lib/random'

const diceTypes = [4, 6, 8, 10, 12, 20]

export function DiceRollerTool() {
  const [sides, setSides] = useState(6)
  const [count, setCount] = useState(2)
  const [result, setResult] = useState<number[]>([])
  const { items, push, clear } = useLocalHistory('history-dice')

  const roll = () => {
    const values = Array.from({ length: count }, () => randomInt(1, sides))
    setResult(values)
    const sum = values.reduce((acc, cur) => acc + cur, 0)
    push(`${new Date().toLocaleTimeString()}: [${values.join(', ')}] total=${sum}`)
  }

  return (
    <div className="card" style={{ padding: '1rem' }}>
      <div className="grid md:grid-cols-3 gap-3">
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
          <button className="btn btn-primary w-full" type="button" onClick={roll}>
            Roll Dice
          </button>
        </div>
      </div>

      <p style={{ marginTop: '0.75rem', fontWeight: 700 }}>
        Result: {result.length ? `${result.join(', ')} (total ${result.reduce((a, b) => a + b, 0)})` : '-'}
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
