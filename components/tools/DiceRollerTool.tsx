'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocalHistory } from '@/lib/useLocalHistory'
import { randomInt } from '@/lib/random'
import { sideCannonConfetti } from '@/lib/confetti'
import { playSound } from '@/lib/audio'
import { StatsPanel } from '@/components/common/StatsPanel'
import { unlockAchievement, trackToolUsed } from '@/lib/useAchievements'

const diceTypes = [4, 6, 8, 10, 12, 20]

// SVG dot positions for D6
const DOT_POSITIONS: Record<number, [number, number][]> = {
  1: [[50, 50]],
  2: [[25, 25], [75, 75]],
  3: [[25, 25], [50, 50], [75, 75]],
  4: [[25, 25], [75, 25], [25, 75], [75, 75]],
  5: [[25, 25], [75, 25], [50, 50], [25, 75], [75, 75]],
  6: [[25, 25], [75, 25], [25, 50], [75, 50], [25, 75], [75, 75]]
}

function DiceFaceSVG({ value }: { value: number }) {
  const dots = DOT_POSITIONS[value] ?? []
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" aria-label={`Die showing ${value}`}>
      {dots.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={8} fill="white" />
      ))}
    </svg>
  )
}

export function DiceRollerTool() {
  const [sides, setSides] = useState(6)
  const [count, setCount] = useState(2)
  const [result, setResult] = useState<number[]>([])
  const [phase, setPhase] = useState<'input' | 'running' | 'result'>('input')
  const { items, push, clear } = useLocalHistory('history-dice')

  const roll = useCallback(() => {
    if (phase === 'running') return
    setPhase('running')
    playSound('dice')
    window.setTimeout(() => {
      const values = Array.from({ length: count }, () => randomInt(1, sides))
      setResult(values)
      setPhase('result')
      const sum = values.reduce((acc, cur) => acc + cur, 0)
      push(`${new Date().toLocaleTimeString()}: [${values.join(', ')}] total=${sum}`)
      unlockAchievement('first-roll')
      trackToolUsed('dice-roller')
      if (items.length + 1 >= 10) unlockAchievement('roll-10')
      if (values.every((v) => v === sides)) {
        sideCannonConfetti()
      }
    }, 650)
  }, [phase, count, sides, push])

  // Space to roll
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !(e.target instanceof HTMLInputElement) && !(e.target instanceof HTMLSelectElement)) {
        e.preventDefault()
        roll()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [roll])

  const sum = result.reduce((a, b) => a + b, 0)
  const maxPossible = sides * count

  // Session stats
  const rollCount = items.length
  const allMaxRolls = items.filter((i) => i.includes(`total=${maxPossible}`)).length

  return (
    <div className="card" style={{ padding: '1rem' }}>
      <p className="section-copy">Choose die type and count, then roll. Space to reroll.</p>
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
            {phase === 'running' ? 'Rolling…' : 'Roll Dice'}
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
                  fontSize: '1.1rem',
                  boxShadow: '0 4px 12px rgba(168, 85, 247, 0.4)',
                  padding: sides === 6 ? '6px' : undefined
                }}
              >
                {sides === 6 && val >= 1 && val <= 6
                  ? <DiceFaceSVG value={val} />
                  : val}
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
              Total: {sum} / {maxPossible}
            </motion.p>
          )}
        </AnimatePresence>
        {result.length > 0 && (
          <button className="btn" type="button" onClick={roll} disabled={phase === 'running'}>
            Rerun
          </button>
        )}
      </div>

      {rollCount > 0 && (
        <StatsPanel stats={[
          { label: 'Rolls', value: rollCount },
          { label: 'Max rolls', value: allMaxRolls }
        ]} />
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
