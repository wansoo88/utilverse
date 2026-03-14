'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { randomBool } from '@/lib/random'
import { burstConfetti } from '@/lib/confetti'

export function HeroLiveTool({ locale }: { locale: string }) {
  const [result, setResult] = useState<'Heads' | 'Tails' | ''>('')
  const [phase, setPhase] = useState<'idle' | 'flipping'>('idle')

  const flip = () => {
    if (phase === 'flipping') return
    setPhase('flipping')
    setResult('')
    setTimeout(() => {
      const next = randomBool() ? 'Heads' : 'Tails'
      setResult(next)
      setPhase('idle')
      if (next === 'Heads') burstConfetti()
    }, 900)
  }

  const isHeads = result === 'Heads'
  const isTails = result === 'Tails'

  return (
    <div
      className="hero-media"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.85rem',
        padding: '1.6rem 1.2rem',
        minHeight: '240px',
      }}
    >
      {/* Label */}
      <p
        style={{
          margin: 0,
          fontSize: '0.72rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          fontWeight: 600,
        }}
      >
        ✦ Try it live
      </p>

      {/* 3D Coin */}
      <motion.div
        className="coin-face"
        animate={
          phase === 'flipping'
            ? {
                rotateY: [0, 180, 540, 900, 1080],
                scale: [1, 0.85, 1.05, 0.9, 1],
              }
            : {}
        }
        transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        style={{
          background: isTails
            ? 'linear-gradient(145deg, #d0d0d0, #a8a8a8)'
            : 'linear-gradient(145deg, #ffe082, #ffbf3f)',
          border: isTails ? '3px solid #b8b8b8' : '3px solid #f7d16c',
          color: isTails ? '#333' : '#2c2300',
          perspective: 800,
          transformStyle: 'preserve-3d',
          fontSize: '1.4rem',
          fontWeight: 800,
          boxShadow: isTails
            ? 'inset 0 2px 10px rgba(255,255,255,0.3), 0 10px 24px rgba(0,0,0,0.3)'
            : 'inset 0 2px 10px rgba(255,255,255,0.45), 0 10px 24px rgba(0,0,0,0.25), 0 0 20px rgba(255,196,0,0.2)',
        }}
        aria-live="polite"
        aria-label={result ? `Result: ${result}` : 'Coin — press Flip to start'}
      >
        {phase === 'flipping' ? '…' : result || '🪙'}
      </motion.div>

      {/* Result chip */}
      <AnimatePresence>
        {result && (
          <motion.p
            key={result}
            initial={{ opacity: 0, scale: 0.7, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 420, damping: 18 }}
            className={`result-chip ${isHeads ? 'result-good' : 'result-warn'}`}
            style={{ margin: 0, fontSize: '0.95rem' }}
          >
            {result}!
          </motion.p>
        )}
      </AnimatePresence>

      {/* Flip button */}
      <button
        className="btn btn-primary"
        onClick={flip}
        disabled={phase === 'flipping'}
        type="button"
        style={{ fontSize: '0.88rem', minWidth: '110px' }}
      >
        {phase === 'flipping' ? 'Flipping…' : 'Flip Coin'}
      </button>

      {/* Full tool link */}
      <Link
        href={`/${locale}/coin-flip`}
        style={{
          fontSize: '0.75rem',
          color: 'var(--brand)',
          opacity: 0.75,
          transition: 'opacity 0.15s ease',
        }}
        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '0.75')}
      >
        Full tool + history →
      </Link>
    </div>
  )
}
