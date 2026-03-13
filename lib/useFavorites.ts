'use client'

import { useCallback, useEffect, useState } from 'react'

const KEY = 'rd-favorites'

function readFavorites(): string[] {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '[]')
  } catch {
    return []
  }
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([])

  useEffect(() => {
    setFavorites(readFavorites())
  }, [])

  const toggle = useCallback((href: string) => {
    setFavorites((prev) => {
      const next = prev.includes(href) ? prev.filter((h) => h !== href) : [...prev, href]
      localStorage.setItem(KEY, JSON.stringify(next))
      return next
    })
  }, [])

  const isFavorite = useCallback(
    (href: string) => favorites.includes(href),
    [favorites]
  )

  return { favorites, toggle, isFavorite }
}
