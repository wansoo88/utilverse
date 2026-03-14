'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocalHistory } from '@/lib/useLocalHistory'
import { randomInt } from '@/lib/random'
import { burstConfetti } from '@/lib/confetti'
import { WheelEditor } from './WheelEditor'
import { WheelPresets } from './WheelPresets'
import type { WheelOption } from '@/lib/wheelStorage'
import { PRESETS, loadCustomOptions, saveCustomOptions } from '@/lib/wheelStorage'
import { playSound } from '@/lib/audio'
import { unlockAchievement, trackToolUsed } from '@/lib/useAchievements'

export function SpinWheelTool() {
  const [activePreset, setActivePreset] = useState<string>('random')
  const [options, setOptions] = useState<WheelOption[]>(PRESETS.random)
  const [showEditor, setShowEditor] = useState(false)
  const [result, setResult] = useState('')
  const [resultColor, setResultColor] = useState('')
  const [phase, setPhase] = useState<'input' | 'running' | 'result'>('input')
  const [rotation, setRotation] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const { items, push, clear } = useLocalHistory('history-wheel')
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const totalRotRef = useRef(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Load saved custom options on mount
  useEffect(() => {
    const saved = loadCustomOptions()
    if (saved) {
      setActivePreset('custom')
      setOptions(saved)
    }
  }, [])

  const handlePresetSelect = (preset: string, presetOptions: WheelOption[]) => {
    setActivePreset(preset)
    if (preset !== 'custom') {
      setOptions(presetOptions)
      setShowEditor(false)
    } else {
      const saved = loadCustomOptions()
      setOptions(saved ?? PRESETS.random)
      setShowEditor(true)
    }
    setResult('')
    setResultColor('')
    setPhase('input')
  }

  const handleOptionsChange = (next: WheelOption[]) => {
    setOptions(next)
    setActivePreset('custom')
    saveCustomOptions(next)
    setResult('')
    setResultColor('')
    setPhase('input')
    unlockAchievement('wheel-custom')
  }

  // Draw wheel on canvas
  const drawWheel = useCallback(() => {
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

    options.forEach((opt, i) => {
      const start = arc * i
      const end = arc * (i + 1)

      ctx.beginPath()
      ctx.moveTo(cx, cy)
      ctx.arc(cx, cy, r, start, end)
      ctx.closePath()
      ctx.fillStyle = opt.color
      ctx.fill()
      ctx.strokeStyle = 'rgba(255,255,255,0.2)'
      ctx.lineWidth = 1.5
      ctx.stroke()

      const fontSize = Math.min(16, Math.max(10, 80 / options.length))
      ctx.save()
      ctx.translate(cx, cy)
      ctx.rotate(start + arc / 2)
      ctx.textAlign = 'right'
      ctx.fillStyle = '#fff'
      ctx.font = `bold ${fontSize}px system-ui, sans-serif`
      ctx.shadowColor = 'rgba(0,0,0,0.5)'
      ctx.shadowBlur = 4
      const display = opt.label.length > 12 ? opt.label.slice(0, 12) + '…' : opt.label
      ctx.fillText(display, r - 8, fontSize / 3)
      ctx.restore()
    })

    // Center circle
    ctx.beginPath()
    ctx.arc(cx, cy, 16, 0, Math.PI * 2)
    ctx.fillStyle = '#1a2a3e'
    ctx.fill()
    ctx.strokeStyle = 'rgba(255,255,255,0.3)'
    ctx.lineWidth = 2
    ctx.stroke()
  }, [options])

  useEffect(() => {
    drawWheel()
  }, [drawWheel, rotation])

  // Fullscreen
  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await containerRef.current?.requestFullscreen?.()
    } else {
      await document.exitFullscreen?.()
    }
  }

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', handler)
    return () => document.removeEventListener('fullscreenchange', handler)
  }, [])

  const spin = useCallback(() => {
    if (!options.length || phase === 'running') return
    setPhase('running')
    setResult('')
    setResultColor('')
    playSound('wheel-tick')
    const extraSpins = randomInt(4, 8)
    const extraDeg = randomInt(0, 359)
    const delta = extraSpins * 360 + extraDeg
    totalRotRef.current += delta
    const newTotal = totalRotRef.current
    setRotation(newTotal)

    window.setTimeout(() => {
      const arc = 360 / options.length
      const angleAtPointer = ((270 - newTotal) % 360 + 360) % 360
      const idx = Math.floor(angleAtPointer / arc) % options.length
      const pick = options[idx]

      setResult(pick.label)
      setResultColor(pick.color)
      setPhase('result')
      push(`${new Date().toLocaleTimeString()}: ${pick.label}`)
      playSound('wheel-done')
      unlockAchievement('first-spin')
      trackToolUsed('spin-the-wheel')
      if (items.length + 1 >= 5) unlockAchievement('spin-5')
      burstConfetti()
    }, 2600)
  }, [options, phase, push])

  // Keyboard shortcut: Space to spin
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !(e.target instanceof HTMLInputElement) && !(e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault()
        spin()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [spin])

  const canvasSize = isFullscreen ? 340 : 220

  return (
    <div
      className="card"
      style={{
        padding: '1rem',
        ...(isFullscreen
          ? { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: 'var(--bg)' }
          : {})
      }}
      ref={containerRef}
    >
      <p className="section-copy">Pick a preset or build your own wheel, then spin to decide.</p>

      {/* Preset tabs */}
      <div style={{ marginTop: '0.75rem' }}>
        <WheelPresets activePreset={activePreset} onSelect={handlePresetSelect} />
      </div>

      {/* Custom editor toggle */}
      {activePreset === 'custom' && (
        <div style={{ marginBottom: '0.5rem' }}>
          <button
            type="button"
            className="btn"
            onClick={() => setShowEditor((v) => !v)}
            style={{ minWidth: 'unset', padding: '0.3rem 0.7rem', fontSize: '0.82rem', minHeight: '34px' }}
          >
            {showEditor ? '▲ Hide Editor' : '▼ Edit Options'}
          </button>
        </div>
      )}

      {showEditor && activePreset === 'custom' && (
        <WheelEditor options={options} onChange={handleOptionsChange} />
      )}

      {/* Canvas Wheel */}
      <div style={{ position: 'relative', width: `${canvasSize}px`, margin: '0.75rem 0' }}>
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
            borderTop: '22px solid var(--brand)',
            zIndex: 10,
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))'
          }}
        />
        <motion.canvas
          ref={canvasRef}
          width={canvasSize}
          height={canvasSize}
          style={{ borderRadius: '50%', display: 'block', boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }}
          animate={{ rotate: rotation }}
          transition={{ duration: 2.5, ease: [0.17, 0.67, 0.32, 0.99] }}
        />

        {/* Result glow overlay */}
        {phase === 'result' && resultColor && (
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              boxShadow: `0 0 0 3px ${resultColor}, 0 0 30px ${resultColor}60`,
              pointerEvents: 'none'
            }}
          />
        )}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          className="btn btn-primary"
          onClick={spin}
          type="button"
          disabled={phase === 'running' || options.length < 2}
        >
          {phase === 'running' ? 'Spinning…' : 'Spin'}
        </button>
        {result && (
          <button className="btn" onClick={spin} type="button" disabled={phase === 'running'}>
            Rerun
          </button>
        )}
        <button
          type="button"
          className="btn"
          onClick={toggleFullscreen}
          aria-label={isFullscreen ? 'Exit fullscreen' : 'Fullscreen mode'}
          style={{ minWidth: 'unset', padding: '0.5rem 0.75rem', fontSize: '0.82rem' }}
        >
          {isFullscreen ? '⊠ Exit' : '⛶ Fullscreen'}
        </button>
        <AnimatePresence mode="wait">
          {result && phase === 'result' && (
            <motion.p
              key={result}
              initial={{ opacity: 0, scale: 0.7, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              className="result-chip result-good"
              style={resultColor ? { borderColor: resultColor, boxShadow: `0 0 14px ${resultColor}50` } : undefined}
              aria-live="polite"
            >
              🎯 {result}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <p className="section-copy" style={{ marginTop: '0.6rem', fontSize: '0.82rem' }}>
        {options.length} options · Space to spin
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
