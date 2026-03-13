'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocalHistory } from '@/lib/useLocalHistory'
import { randomBool } from '@/lib/random'
import { burstConfetti } from '@/lib/confetti'
import { CopyButton } from '@/components/common/CopyButton'

export function CoinFlipTool() {
  const [result, setResult] = useState<'Heads' | 'Tails' | ''>('')
  const [error, setError] = useState<string>('')
  const [phase, setPhase] = useState<'input' | 'running' | 'result'>('input')
  const { items, push, clear } = useLocalHistory('history-coin-flip')

  const flip = () => {
    setPhase('running')
    setResult('')
    try {
      window.setTimeout(() => {
        const next = randomBool() ? 'Heads' : 'Tails'
        setResult(next)
        setError('')
        setPhase('result')
        push(`${new Date().toLocaleTimeString()}: ${next}`)
        if (next === 'Heads') {
          burstConfetti()
        }
      }, 900)
    } catch {
      setPhase('result')
      setError('Failed to generate random value. Please try again.')
    }
  }

  const isHeads = result === 'Heads'
  const isTails = result === 'Tails'

  return (
    <div className="card tool-surface" style={{ padding: '1rem' }}>
      <p className="section-copy">Step 1. Tap flip. Step 2. Watch the motion. Step 3. Read result and rerun.</p>

      {/* 3D Coin */}
      <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '1rem 0' }}>
        <motion.div
          className="coin-face"
          animate={
            phase === 'running'
              ? {
                  rotateY: [0, 180, 540, 900, 1080],
                  scale: [1, 0.85, 1.05, 0.9, 1]
                }
              : {}
          }
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          style={{
            background: isTails
              ? 'linear-gradient(145deg, #c0c0c0, #a8a8a8)'
              : 'linear-gradient(145deg, #ffe082, #ffbf3f)',
            border: isTails ? '3px solid #b8b8b8' : '3px solid #f7d16c',
            color: isTails ? '#333' : '#2c2300',
            perspective: 800,
            transformStyle: 'preserve-3d'
          }}
          aria-live="polite"
          aria-label={result ? `Result: ${result}` : 'Coin'}
        >
          {phase === 'running' ? '...' : result || '🪙'}
        </motion.div>
      </div>

      <div className="flex flex-wrap items-center gap-3" style={{ marginTop: '0.8rem' }}>
        <button className="btn btn-primary" onClick={flip} type="button" disabled={phase === 'running'}>
          {phase === 'running' ? 'Flipping...' : 'Flip Coin'}
        </button>
        {result && (
          <button className="btn" onClick={flip} type="button" disabled={phase === 'running'}>
            Rerun
          </button>
        )}
        {result && <CopyButton text={result} />}
        <AnimatePresence mode="wait">
          {result && (
            <motion.p
              key={result}
              initial={{ opacity: 0, scale: 0.7, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              className={`result-chip ${isHeads ? 'result-good' : 'result-warn'}`}
            >
              Result: {result}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {error ? <p style={{ color: '#ff6b6b', marginTop: '0.5rem' }}>{error}</p> : null}

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
