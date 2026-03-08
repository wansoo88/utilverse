'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocalHistory } from '@/lib/useLocalHistory'
import { randomInt } from '@/lib/random'

function randomColor() {
  const r = randomInt(0, 255)
  const g = randomInt(0, 255)
  const b = randomInt(0, 255)
  const hex = `#${[r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('')}`
  return { r, g, b, hex }
}

export function RandomColorTool() {
  const [color, setColor] = useState(randomColor())
  const { items, push, clear } = useLocalHistory('history-random-color')

  const generate = () => {
    const next = randomColor()
    setColor(next)
    push(`${new Date().toLocaleTimeString()}: ${next.hex} / rgb(${next.r}, ${next.g}, ${next.b})`)
  }

  return (
    <div className="card" style={{ padding: '1rem' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={color.hex}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          style={{
            height: '140px',
            background: color.hex,
            borderRadius: '14px',
            border: '1px solid var(--line)',
            boxShadow: `0 8px 24px ${color.hex}55`
          }}
        />
      </AnimatePresence>
      <div className="flex flex-wrap items-center gap-3" style={{ marginTop: '0.8rem' }}>
        <button className="btn btn-primary" type="button" onClick={generate}>Generate Color</button>
        <p style={{ fontWeight: 700 }}>HEX: {color.hex}</p>
        <p style={{ fontWeight: 700 }}>{`RGB: (${color.r}, ${color.g}, ${color.b})`}</p>
      </div>
      <div style={{ marginTop: '0.9rem' }}>
        <p style={{ fontWeight: 700 }}>History</p>
        <ul className="section-copy" style={{ paddingLeft: '1rem' }}>
          {items.slice(0, 10).map((item) => <li key={item}>{item}</li>)}
        </ul>
        <button className="btn" type="button" onClick={clear}>Clear history</button>
      </div>
    </div>
  )
}
