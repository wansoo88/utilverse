'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const next = saved === 'light' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.dataset.theme = next
    setMounted(true)
  }, [])

  const onToggle = (e: React.MouseEvent) => {
    const next = theme === 'dark' ? 'light' : 'dark'
    const applyTheme = () => {
      setTheme(next)
      localStorage.setItem('theme', next)
      document.documentElement.dataset.theme = next
    }

    if (typeof document.startViewTransition !== 'function') {
      applyTheme()
      return
    }

    const { clientX: x, clientY: y } = e
    const transition = document.startViewTransition(applyTheme)
    transition.ready.then(() => {
      const radius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      )
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`
          ]
        },
        {
          duration: 380,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)'
        }
      )
    })
  }

  if (!mounted) {
    return <div className="btn" style={{ minWidth: '44px', minHeight: '44px' }} />
  }

  return (
    <button
      className="btn"
      onClick={(e) => onToggle(e)}
      type="button"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{ minWidth: 'unset', padding: '0.5rem 0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <motion.svg
            key="sun"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </motion.svg>
        ) : (
          <motion.svg
            key="moon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            aria-hidden="true"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </motion.svg>
        )}
      </AnimatePresence>
      <span style={{ fontSize: '0.82rem' }}>{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  )
}
