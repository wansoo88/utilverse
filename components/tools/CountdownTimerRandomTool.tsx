'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

      <div style={{ marginTop: '0.8rem', minHeight: '3.5rem', display: 'flex', alignItems: 'center' }}>
        <AnimatePresence mode="wait">
          {running ? (
            <motion.div
              key={remaining}
              initial={{ opacity: 0, scale: 1.3 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ fontWeight: 900, fontSize: '2.5rem', color: remaining <= 5 ? '#F43F5E' : '#06B6D4', fontFamily: 'var(--font-display), sans-serif' }}
            >
              {remaining}s
            </motion.div>
          ) : picked === null ? (
            <p style={{ fontWeight: 700, color: 'var(--text-muted)' }}>Timer not started</p>
          ) : (
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{ fontWeight: 700, color: '#10B981', fontSize: '1.1rem' }}
            >
              ✓ Finished ({picked}s)
            </motion.p>
          )}
        </AnimatePresence>
      </div>

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