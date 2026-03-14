'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocalHistory } from '@/lib/useLocalHistory'
import { randomInt } from '@/lib/random'
import { playSound } from '@/lib/audio'

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
    playSound('success')
  }

  return (
    <div className="card" style={{ padding: '1rem' }}>
      <div className="grid md:grid-cols-3 gap-3">
        <label><span style={{ fontWeight: 600 }}>Numbers to pick</span><input className="input" type="number" min={1} max={10} value={count} onChange={(e) => setCount(Number(e.target.value))} /></label>
        <label><span style={{ fontWeight: 600 }}>Max number</span><input className="input" type="number" min={10} max={99} value={max} onChange={(e) => setMax(Number(e.target.value))} /></label>
        <div className="flex items-end"><button className="btn btn-primary w-full" type="button" onClick={generate}>Generate Lottery Numbers</button></div>
      </div>
      <AnimatePresence mode="wait">
        {result.length > 0 && (
          <motion.div
            key={result.join(',')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.75rem' }}
          >
            {result.map((num, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: i * 0.08, type: 'spring', stiffness: 400, damping: 18 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '2.8rem',
                  height: '2.8rem',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #EAB308, #CA8A04)',
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 12px rgba(234, 179, 8, 0.4)'
                }}
              >
                {num}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <div style={{ marginTop: '0.9rem' }}>
        <p style={{ fontWeight: 700 }}>History</p>
        <ul className="section-copy" style={{ paddingLeft: '1rem' }}>{items.slice(0, 10).map((item) => <li key={item}>{item}</li>)}</ul>
        <button className="btn" type="button" onClick={clear}>Clear history</button>
      </div>
    </div>
  )
}