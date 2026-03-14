'use client'

import { useState, useEffect } from 'react'

const BASE_COUNT = 1_240_000
const STORAGE_KEY = 'utilverse-local-count'

function getLocalCount(): number {
  if (typeof window === 'undefined') return 0
  try {
    return parseInt(localStorage.getItem(STORAGE_KEY) ?? '0', 10) || 0
  } catch {
    return 0
  }
}

export function incrementLocalCount() {
  if (typeof window === 'undefined') return
  try {
    const prev = getLocalCount()
    localStorage.setItem(STORAGE_KEY, String(prev + 1))
  } catch {
    // ignore
  }
}

export function LiveCounter() {
  const [count, setCount] = useState(BASE_COUNT)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const local = getLocalCount()
    setCount(BASE_COUNT + local)

    // Slowly increment for social proof feel
    const id = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 3))
    }, 8000)
    return () => clearInterval(id)
  }, [])

  if (!mounted) return null

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.4rem 0.9rem',
        borderRadius: '999px',
        background: 'linear-gradient(135deg, rgba(16,185,129,0.12), rgba(6,182,212,0.12))',
        border: '1px solid rgba(16,185,129,0.3)',
        fontSize: '0.85rem',
        fontWeight: 700,
        color: '#10B981'
      }}
    >
      <span
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: '#10B981',
          display: 'inline-block',
          animation: 'pulse 2s infinite'
        }}
      />
      {count.toLocaleString()} decisions made
    </div>
  )
}
