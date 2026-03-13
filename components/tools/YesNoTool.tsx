'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocalHistory } from '@/lib/useLocalHistory'
import { randomBool } from '@/lib/random'
import { burstConfetti } from '@/lib/confetti'
import { CopyButton } from '@/components/common/CopyButton'

export function YesNoTool() {
  const [result, setResult] = useState<'Yes' | 'No' | ''>('')
  const [phase, setPhase] = useState<'idle' | 'running' | 'result'>('idle')
  const { items, push, clear } = useLocalHistory('history-yesno')

  const generate = () => {
    setPhase('running')
    setResult('')

    // Slot-machine flicker effect
    window.setTimeout(() => {
      const next = randomBool() ? 'Yes' : 'No'
      setResult(next)
      setPhase('result')
      push(`${new Date().toLocaleTimeString()}: ${next}`)
      if (next === 'Yes') burstConfetti()
    }, 700)
  }

  const isYes = result === 'Yes'
  const isNo = result === 'No'

  return (
    <div className="card" style={{ padding: '1rem' }}>
      {/* Big result display */}
      <div style={{ minHeight: '100px', display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <AnimatePresence mode="wait">
          {phase === 'running' && (
            <motion.div
              key="running"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 1, 0.3, 1, 0.5, 1], scale: [0.9, 1.05, 0.95, 1.02, 1] }}
              transition={{ duration: 0.7 }}
              style={{
                fontSize: '3.5rem',
                fontWeight: 900,
                fontFamily: 'var(--font-display), sans-serif',
                color: 'var(--text-muted)'
              }}
            >
              ?
            </motion.div>
          )}

          {phase === 'result' && result && (
            <motion.div
              key={result}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 500, damping: 22 }}
              style={{
                fontSize: '3.5rem',
                fontWeight: 900,
                fontFamily: 'var(--font-display), sans-serif',
                color: isYes ? '#10B981' : '#F43F5E',
                textShadow: isYes
                  ? '0 0 30px rgba(16, 185, 129, 0.5)'
                  : '0 0 30px rgba(244, 63, 94, 0.5)',
                lineHeight: 1
              }}
              aria-live="polite"
            >
              {result}
            </motion.div>
          )}

          {phase === 'idle' && (
            <motion.div
              key="idle"
              style={{ fontSize: '3.5rem', color: 'var(--line)', lineHeight: 1 }}
            >
              ?
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button className="btn btn-primary" onClick={generate} type="button" disabled={phase === 'running'}>
          {phase === 'running' ? 'Deciding...' : 'Generate Yes / No'}
        </button>
        {result && (
          <button className="btn" onClick={generate} type="button" disabled={phase === 'running'}>
            Try Again
          </button>
        )}
        {result && (
          <span
            className={`result-chip ${isYes ? 'result-good' : 'result-warn'}`}
          >
            {isYes ? '✓ Yes!' : '✗ No!'}
          </span>
        )}
        {result && <CopyButton text={result} />}
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
