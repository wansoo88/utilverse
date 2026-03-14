'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocalHistory } from '@/lib/useLocalHistory'
import { pickRandom } from '@/lib/random'
import { playSound } from '@/lib/audio'

export function RandomFoodPickerTool() {
  const [raw, setRaw] = useState('Pizza\nSushi\nTacos\nPasta\nSalad')
  const [result, setResult] = useState('')
  const { items, push, clear } = useLocalHistory('history-food-picker')

  const options = useMemo(() => raw.split('\n').map((v) => v.trim()).filter(Boolean), [raw])

  const pick = () => {
    if (!options.length) return
    const next = pickRandom(options)
    setResult(next)
    push(`${new Date().toLocaleTimeString()}: ${next}`)
    playSound('pop')
  }

  return (
    <div className="card" style={{ padding: '1rem' }}>
      <label>
        <span style={{ fontWeight: 600 }}>Food options (one per line)</span>
        <textarea className="textarea" rows={6} value={raw} onChange={(e) => setRaw(e.target.value)} />
      </label>
      <div className="flex flex-wrap items-center gap-3" style={{ marginTop: '0.75rem' }}>
        <button className="btn btn-primary" type="button" onClick={pick}>Pick Food</button>
        <AnimatePresence mode="wait">
          {result && (
            <motion.p
              key={result}
              initial={{ opacity: 0, scale: 0.7, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              style={{ fontWeight: 700, fontSize: '1.1rem', color: '#F97316' }}
            >
              🍽️ {result}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <div style={{ marginTop: '0.9rem' }}>
        <p style={{ fontWeight: 700 }}>History</p>
        <ul className="section-copy" style={{ paddingLeft: '1rem' }}>{items.slice(0, 10).map((item) => <li key={item}>{item}</li>)}</ul>
        <button className="btn" type="button" onClick={clear}>Clear history</button>
      </div>
    </div>
  )
}