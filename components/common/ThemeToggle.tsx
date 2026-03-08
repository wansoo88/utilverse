'use client'

import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const next = saved === 'light' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.dataset.theme = next
  }, [])

  const onToggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.dataset.theme = next
  }

  return (
    <button className="btn" onClick={onToggle} type="button" aria-label="Toggle color mode">
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}
