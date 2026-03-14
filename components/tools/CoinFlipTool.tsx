'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocalHistory } from '@/lib/useLocalHistory'
import { randomBool } from '@/lib/random'
import { burstConfetti } from '@/lib/confetti'
import { CopyButton } from '@/components/common/CopyButton'
import { StatsPanel } from '@/components/common/StatsPanel'
import { playSound } from '@/lib/audio'
import { unlockAchievement, trackToolUsed } from '@/lib/useAchievements'

export function CoinFlipTool() {
  const [headsLabel, setHeadsLabel] = useState('Heads')
  const [tailsLabel, setTailsLabel] = useState('Tails')
  const [showCustomize, setShowCustomize] = useState(false)
  const [result, setResult] = useState<'heads' | 'tails' | ''>('')
  const [error, setError] = useState<string>('')
  const [phase, setPhase] = useState<'input' | 'running' | 'result'>('input')
  const { items, push, clear } = useLocalHistory('history-coin-flip')

  const displayResult = result === 'heads' ? headsLabel : result === 'tails' ? tailsLabel : ''

  const flip = useCallback(() => {
    setPhase('running')
    setResult('')
    playSound('coin')
    try {
      window.setTimeout(() => {
        const next = randomBool() ? 'heads' : 'tails'
        setResult(next)
        setError('')
        setPhase('result')
        const label = next === 'heads' ? headsLabel : tailsLabel
        push(`${new Date().toLocaleTimeString()}: ${label}`)
        unlockAchievement('first-flip')
        trackToolUsed('coin-flip')
        const flipTotal = items.length + 1
        if (flipTotal >= 10) unlockAchievement('flip-10')
        if (next === 'heads') {
          burstConfetti()
        }
      }, 900)
    } catch {
      setPhase('result')
      setError('Failed to generate random value. Please try again.')
    }
  }, [headsLabel, tailsLabel, push])

  // Space to flip
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !(e.target instanceof HTMLInputElement)) {
        e.preventDefault()
        if (phase !== 'running') flip()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [flip, phase])

  const isHeads = result === 'heads'
  const isTails = result === 'tails'

  // Session stats
  const headsCount = items.filter((i) => i.includes(`: ${headsLabel}`)).length
  const tailsCount = items.filter((i) => i.includes(`: ${tailsLabel}`)).length
  const total = headsCount + tailsCount

  return (
    <div className="card tool-surface" style={{ padding: '1rem' }}>
      <p className="section-copy">Flip a coin. Tap or press Space.</p>

      {/* Customize labels */}
      <div style={{ marginBottom: '0.5rem' }}>
        <button
          type="button"
          className="btn"
          onClick={() => setShowCustomize((v) => !v)}
          style={{ minWidth: 'unset', padding: '0.3rem 0.7rem', fontSize: '0.8rem', minHeight: '32px' }}
        >
          {showCustomize ? '▲ Hide' : '⚙ Customize labels'}
        </button>
      </div>
      {showCustomize && (
        <div className="flex flex-wrap gap-3" style={{ marginBottom: '0.75rem' }}>
          <label style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Side A (Heads)</span>
            <input
              className="input"
              value={headsLabel}
              maxLength={16}
              onChange={(e) => setHeadsLabel(e.target.value || 'Heads')}
              style={{ padding: '0.3rem 0.6rem', fontSize: '0.85rem' }}
            />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Side B (Tails)</span>
            <input
              className="input"
              value={tailsLabel}
              maxLength={16}
              onChange={(e) => setTailsLabel(e.target.value || 'Tails')}
              style={{ padding: '0.3rem 0.6rem', fontSize: '0.85rem' }}
            />
          </label>
        </div>
      )}

      {/* 3D Coin */}
      <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '0.75rem 0' }}>
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
            transformStyle: 'preserve-3d',
            fontSize: displayResult.length > 6 ? '0.7rem' : undefined
          }}
          aria-live="polite"
          aria-label={displayResult ? `Result: ${displayResult}` : 'Coin'}
        >
          {phase === 'running' ? '…' : displayResult || '🪙'}
        </motion.div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button className="btn btn-primary" onClick={flip} type="button" disabled={phase === 'running'}>
          {phase === 'running' ? 'Flipping…' : 'Flip Coin'}
        </button>
        {result && (
          <button className="btn" onClick={flip} type="button" disabled={phase === 'running'}>
            Rerun
          </button>
        )}
        {displayResult && <CopyButton text={displayResult} />}
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
              Result: {displayResult}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <p className="section-copy" style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
        Space to flip
      </p>

      {error ? <p style={{ color: '#ff6b6b', marginTop: '0.5rem' }}>{error}</p> : null}

      {total > 0 && (
        <StatsPanel stats={[
          { label: headsLabel, value: headsCount },
          { label: tailsLabel, value: tailsCount },
          { label: 'Total', value: total }
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
