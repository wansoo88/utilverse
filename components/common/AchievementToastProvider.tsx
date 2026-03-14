'use client'

import { useEffect, useState } from 'react'
import { AchievementToast } from './AchievementToast'
import type { Achievement } from '@/lib/useAchievements'

export function AchievementToastProvider() {
  const [badge, setBadge] = useState<Achievement | null>(null)

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<Achievement>).detail
      setBadge(detail)
      setTimeout(() => setBadge(null), 4000)
    }
    window.addEventListener('utilverse:achievement', handler)
    return () => window.removeEventListener('utilverse:achievement', handler)
  }, [])

  return <AchievementToast badge={badge} />
}
