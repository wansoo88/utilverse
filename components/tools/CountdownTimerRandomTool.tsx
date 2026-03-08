'use client'

import { useEffect, useState } from 'react'
import { useLocalHistory } from '@/lib/useLocalHistory'
import { randomInt } from '@/lib/random'

export function CountdownTimerRandomTool() {
  const [min, setMin] = useState(5)
  const [max, setMax] = useState(20)
  const [remaining, setRemaining] = useState(0)
  const [running, setRunning] = useState(false)
  const [picked, setPicked] = useState<number | null>(null)
  const { items, push, clear } = useLocalHistory('history-countdown-random')

  useEffect(() => {
    if (!running || remaining <= 0) return
    const id = setTimeout(() => setRemaining((v) => v - 1), 1000)
    return () => clearTimeout(id)
  }, [running, remaining])

  useEffect(() => {
    if (running && remaining === 0 && picked !== null) {
      setRunning(false)
      push(`${new Date().toLocaleTimeString()}: timer finished at ${picked}s`)
    }
  }, [running, remaining, picked, push])

  const start = () => {
    if (max < min) return
    const next = randomInt(min, max)
    setPicked(next)
    setRemaining(next)
    setRunning(true)
  }

  const reset = () => {
    setRunning(false)
    setRemaining(0)
    setPicked(null)
  }

  return (
    <div className="card" style={{ padding: '1rem' }}>
      <div className="grid md:grid-cols-4 gap-3">
        <label>
          <span style={{ fontWeight: 600 }}>Min seconds</span>
          <input className="input" type="number" min={1} value={min} onChange={(e) => setMin(Number(e.target.value))} />
        </label>
        <label>
          <span style={{ fontWeight: 600 }}>Max seconds</span>
          <input className="input" type="number" min={1} value={max} onChange={(e) => setMax(Number(e.target.value))} />
        </label>
        <div className="flex items-end">
          <button className="btn btn-primary w-full" type="button" onClick={start}>Start Random Timer</button>
        </div>
        <div className="flex items-end">
          <button className="btn w-full" type="button" onClick={reset}>Reset</button>
        </div>
      </div>

      <p style={{ marginTop: '0.8rem', fontWeight: 700, fontSize: '1.1rem' }}>
        {running ? `Remaining: ${remaining}s` : picked === null ? 'Timer not started' : `Finished (${picked}s)`}
      </p>

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