'use client'

import { useEffect, useState } from 'react'

export function useLocalHistory(key: string) {
  const [items, setItems] = useState<string[]>([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(key)
      if (raw) {
        setItems(JSON.parse(raw))
      }
    } catch {
      setItems([])
    }
  }, [key])

  const push = (value: string) => {
    const next = [value, ...items].slice(0, 30)
    setItems(next)
    try {
      localStorage.setItem(key, JSON.stringify(next))
    } catch {
      // Ignore storage failures (private mode, blocked storage, quota issues).
    }
  }

  const clear = () => {
    setItems([])
    try {
      localStorage.removeItem(key)
    } catch {
      // Ignore storage failures.
    }
  }

  return { items, push, clear }
}
