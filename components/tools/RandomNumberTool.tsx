'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocalHistory } from '@/lib/useLocalHistory'
import { randomInt } from '@/lib/random'
import { CopyButton } from '@/components/common/CopyButton'
import { playSound } from '@/lib/audio'

export function RandomNumberTool({
  initialMin = 1,
  initialMax = 100
}: {
  initialMin?: number
  initialMax?: number
} = {}) {
  const [min, setMin] = useState(initialMin)
  const [max, setMax] = useState(initialMax)
  const [count, setCount] = useState(1)
  const [unique, setUnique] = useState(false)
  const [result, setResult] = useState<number[]>([])
  const { items, push, clear } = useLocalHistory('history-rng')

  const generate = () => {
    if (max < min) return
    playSound('slot')
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

      {/* Slot-machine style result */}
      <AnimatePresence mode="wait">
        {result.length > 0 && (
          <motion.div
            key={result.join(',')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.9rem' }}
          >
            {result.map((num, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 20,
                  delay: i * 0.07
                }}
                style={{
                  minWidth: '56px',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #0EA5E9, #0284C7)',
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  textAlign: 'center',
                  boxShadow: '0 4px 12px rgba(14, 165, 233, 0.4)'
                }}
              >
                {num}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {result.length > 0 && (
        <div className="flex flex-wrap items-center gap-3" style={{ marginTop: '0.75rem' }}>
          <button className="btn" type="button" onClick={generate}>Rerun</button>
          <CopyButton text={result.join(', ')} />
        </div>
      )}

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
