'use client'

import { useEffect } from 'react'

export function CursorAura() {
  useEffect(() => {
    const el = document.createElement('div')
    el.id = 'cursor-aura'
    document.body.appendChild(el)

    const onMove = (e: MouseEvent) => {
      el.style.setProperty('--x', e.clientX + 'px')
      el.style.setProperty('--y', e.clientY + 'px')
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      el.remove()
    }
  }, [])

  return null
}
