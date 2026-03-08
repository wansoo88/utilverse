'use client'

import { useMemo, useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocalHistory } from '@/lib/useLocalHistory'
import { pickRandom, randomInt } from '@/lib/random'
import { burstConfetti } from '@/lib/confetti'

const SEGMENT_COLORS = [
  '#10B981', '#A855F7', '#0EA5E9', '#F59E0B', '#F43F5E',
  '#6366F1', '#EC4899', '#14B8A6', '#EAB308', '#F97316'
]

export function SpinWheelTool() {
  const [rawOptions, setRawOptions] = useState('Pizza\nSushi\nBurger\nSalad')
  const [result, setResult] = useState('')
  const [phase, setPhase] = useState<'input' | 'running' | 'result'>('input')
  const [rotation, setRotation] = useState(0)
  const { items, push, clear } = useLocalHistory('history-wheel')
  const canvasRef = useRef<HTMLCanvasElement>(null)
  // Track accumulated rotation to avoid stale closure in setTimeout
  const totalRotRef = useRef(0)

  const options = useMemo(
    () => rawOptions.split('\n').map((item) => item.trim()).filter(Boolean),
    [rawOptions]
  )

  // Draw wheel
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !options.length) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const size = canvas.width
    const cx = size / 2
    const cy = size / 2
    const r = size / 2 - 4
    const arc = (Math.PI * 2) / options.length

    ctx.clearRect(0, 0, size, size)

    options.forEach((label, i) => {
      const start = arc * i
      const end = arc * (i + 1)

      ctx.beginPath()
      ctx.moveTo(cx, cy)
      ctx.arc(cx, cy, r, start, end)
      ctx.closePath()
      ctx.fillStyle = SEGMENT_COLORS[i % SEGMENT_COLORS.length]
      ctx.fill()
      ctx.strokeStyle = 'rgba(255,255,255,0.15)'
      ctx.lineWidth = 1.5
      ctx.stroke()

      ctx.save()
      ctx.translate(cx, cy)
      ctx.rotate(start + arc / 2)
      ctx.textAlign = 'right'
      ctx.fillStyle = '#fff'
      ctx.font = `bold ${Math.min(14, 90 / options.length)}px sans-serif`
      ctx.shadowColor = 'rgba(0,0,0,0.4)'
      ctx.shadowBlur = 4
      ctx.fillText(label.length > 10 ? label.slice(0, 10) + '…' : label, r - 10, 5)
      ctx.restore()
    })

    // Center circle
    ctx.beginPath()
    ctx.arc(cx, cy, 14, 0, Math.PI * 2)
    ctx.fillStyle = 'var(--card)'
    ctx.fill()
    ctx.strokeStyle = 'var(--line)'
    ctx.lineWidth = 2
    ctx.stroke()
  }, [options, rotation])

  const spin = () => {
    if (!options.length) return
    setPhase('running')
    const extraSpins = randomInt(4, 8)
    const extraDeg = randomInt(0, 359)
    const delta = extraSpins * 360 + extraDeg
    totalRotRef.current += delta
    const newTotal = totalRotRef.current
    setRotation(newTotal)

    window.setTimeout(() => {
      // Use newTotal (captured in this closure) — not stale state
      const arc = 360 / options.length
      // Canvas draws segments starting at 0° = right (3 o'clock), clockwise.
      // Pointer is at TOP = canvas 270°.
      // After CSS rotate(newTotal), canvas angle at pointer = (270 - newTotal) mod 360
      const angleAtPointer = ((270 - newTotal) % 360 + 360) % 360
      const idx = Math.floor(angleAtPointer / arc) % options.length
      const pick = options[idx] ?? pickRandom(options)

      setResult(pick)
      setPhase('result')
      push(`${new Date().toLocaleTimeString()}: ${pick}`)
      burstConfetti()
    }, 2600)
  }

  return (
    <div className="card" style={{ padding: '1rem' }}>
      <p className="section-copy">Step 1. Enter options. Step 2. Spin. Step 3. Confirm winner and rerun.</p>
      <label>
        <span style={{ fontWeight: 600 }}>Wheel options (one per line)</span>
        <textarea
          className="textarea"
          rows={5}
          value={rawOptions}
          onChange={(e) => setRawOptions(e.target.value)}
        />
      </label>

      {/* Canvas Wheel */}
      <div style={{ position: 'relative', width: '200px', margin: '1rem 0' }}>
        {/* Pointer */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-8px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderTop: '20px solid var(--brand)',
            zIndex: 10,
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
          }}
        />
        <motion.canvas
          ref={canvasRef}
          width={200}
          height={200}
          style={{ borderRadius: '50%', display: 'block' }}
          animate={{ rotate: rotation }}
          transition={{ duration: 2.5, ease: [0.17, 0.67, 0.32, 0.99] }}
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button className="btn btn-primary" onClick={spin} type="button" disabled={phase === 'running'}>
          {phase === 'running' ? 'Spinning...' : 'Spin'}
        </button>
        {result && (
          <button className="btn" onClick={spin} type="button" disabled={phase === 'running'}>
            Rerun
          </button>
        )}
        <AnimatePresence mode="wait">
          {result && phase === 'result' && (
            <motion.p
              key={result}
              initial={{ opacity: 0, scale: 0.7, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              className="result-chip result-good"
            >
              Winner: {result}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <p className="section-copy" style={{ marginTop: '0.7rem' }}>
        Current entries: {options.length}
      </p>

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
