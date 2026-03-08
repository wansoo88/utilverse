'use client'

// Dynamic import to avoid SSR issues
export async function burstConfetti() {
  const confetti = (await import('canvas-confetti')).default
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.6 },
    colors: ['#2f8dff', '#00a9b8', '#A855F7', '#FFD700', '#10B981']
  })
}

export async function sideCannonConfetti() {
  const confetti = (await import('canvas-confetti')).default

  // Left cannon
  confetti({
    particleCount: 60,
    angle: 60,
    spread: 55,
    origin: { x: 0, y: 0.6 },
    colors: ['#2f8dff', '#00a9b8', '#A855F7', '#FFD700']
  })

  // Right cannon
  confetti({
    particleCount: 60,
    angle: 120,
    spread: 55,
    origin: { x: 1, y: 0.6 },
    colors: ['#10B981', '#F43F5E', '#0EA5E9', '#F59E0B']
  })
}
