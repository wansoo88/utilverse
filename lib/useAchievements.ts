'use client'

import { useCallback, useEffect, useState } from 'react'

export interface Achievement {
  id: string
  icon: string
  title: string
  description: string
  unlockedAt?: number
}

export const ACHIEVEMENTS: Omit<Achievement, 'unlockedAt'>[] = [
  { id: 'first-flip', icon: '🪙', title: 'First Flip', description: 'Flip your first coin' },
  { id: 'first-roll', icon: '🎲', title: 'Lucky Roll', description: 'Roll your first dice' },
  { id: 'first-spin', icon: '🎡', title: 'Spin Doctor', description: 'Spin the wheel for the first time' },
  { id: 'first-yes', icon: '✅', title: 'Yes Person', description: 'Get your first Yes' },
  { id: 'first-no', icon: '❌', title: 'Naysayer', description: 'Get your first No' },
  { id: 'flip-10', icon: '🏅', title: 'Double Digit', description: 'Flip a coin 10 times' },
  { id: 'roll-10', icon: '🎯', title: 'Dice Addict', description: 'Roll dice 10 times' },
  { id: 'spin-5', icon: '⭐', title: 'Spin Champion', description: 'Spin the wheel 5 times' },
  { id: 'wheel-custom', icon: '🎨', title: 'Wheel Architect', description: 'Create a custom wheel' },
  { id: 'all-tools', icon: '🔱', title: 'Tool Master', description: 'Use 5 different tools' }
]

const STORAGE_KEY = 'utilverse-achievements'
const TOOLS_KEY = 'utilverse-tools-used'
const EVENT_NAME = 'utilverse:achievement'

export function loadUnlocked(): Record<string, number> {
  if (typeof window === 'undefined') return {}
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}')
  } catch {
    return {}
  }
}

function saveUnlocked(data: Record<string, number>) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    // ignore
  }
}

/**
 * Standalone unlock — can be called from any component.
 * Dispatches a CustomEvent that AchievementToastProvider listens to.
 */
export function unlockAchievement(id: string) {
  if (typeof window === 'undefined') return
  const data = loadUnlocked()
  if (data[id]) return
  const next = { ...data, [id]: Date.now() }
  saveUnlocked(next)
  const def = ACHIEVEMENTS.find((a) => a.id === id)
  if (def) {
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: { ...def, unlockedAt: next[id] } }))
  }
}

export function trackToolUsed(toolId: string) {
  if (typeof window === 'undefined') return
  try {
    const used: string[] = JSON.parse(localStorage.getItem(TOOLS_KEY) ?? '[]')
    if (!used.includes(toolId)) {
      const next = [...used, toolId]
      localStorage.setItem(TOOLS_KEY, JSON.stringify(next))
      if (next.length >= 5) unlockAchievement('all-tools')
    }
  } catch {
    // ignore
  }
}

/** Hook used by BadgeGallery to show all achievements */
export function useAchievements() {
  const [unlocked, setUnlocked] = useState<Record<string, number>>({})

  useEffect(() => {
    setUnlocked(loadUnlocked())
    const handler = () => setUnlocked(loadUnlocked())
    window.addEventListener(EVENT_NAME, handler)
    return () => window.removeEventListener(EVENT_NAME, handler)
  }, [])

  const allAchievements: Achievement[] = ACHIEVEMENTS.map((a) => ({
    ...a,
    unlockedAt: unlocked[a.id]
  }))

  return { allAchievements }
}
