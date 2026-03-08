'use client'

import { useState } from 'react'
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
      <div className="card" style={{ height: '140px', background: color.hex, border: '1px solid var(--line)' }} />
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