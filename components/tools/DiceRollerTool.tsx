'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocalHistory } from '@/lib/useLocalHistory'
import { randomInt } from '@/lib/random'
import { sideCannonConfetti } from '@/lib/confetti'

const diceTypes = [4, 6, 8, 10, 12, 20]

const DICE_FACES: Record<number, string> = {
  1: '⚀', 2: '⚁', 3: '⚂', 4: '⚃', 5: '⚄', 6: '⚅'
}

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
      // Big confetti when all dice are max
      if (values.every((v) => v === sides)) {
        sideCannonConfetti()
      }
    }, 650)
  }

  const sum = result.reduce((a, b) => a + b, 0)

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
            {phase === 'running' ? 'Rolling...' : 'Roll Dice'}
          </button>
        </div>
      </div>

      {/* Dice display */}
      <AnimatePresence mode="wait">
        {result.length > 0 && phase !== 'running' && (
          <motion.div
            key={result.join('-')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.75rem' }}
          >
            {result.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18, delay: i * 0.06 }}
                style={{
                  width: '52px',
                  height: '52px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #A855F7, #7C3AED)',
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: sides === 6 ? '1.6rem' : '1.1rem',
                  boxShadow: '0 4px 12px rgba(168, 85, 247, 0.4)'
                }}
              >
                {sides === 6 && val <= 6 ? DICE_FACES[val] : val}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-wrap items-center gap-3" style={{ marginTop: '0.75rem' }}>
        <AnimatePresence mode="wait">
          {result.length > 0 && (
            <motion.p
              key={sum}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="result-chip result-good"
            >
              Total: {sum}
            </motion.p>
          )}
        </AnimatePresence>
        {result.length > 0 && (
          <button className="btn" type="button" onClick={roll} disabled={phase === 'running'}>
            Rerun
          </button>
        )}
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
