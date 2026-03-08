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
    localStorage.setItem(key, JSON.stringify(next))
  }

  const clear = () => {
    setItems([])
    localStorage.removeItem(key)
  }

  return { items, push, clear }
}
