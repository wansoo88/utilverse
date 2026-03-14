const KEY = 'wheel-options-custom'

export interface WheelOption {
  label: string
  color: string
}

function hslColor(index: number, total: number): string {
  const hue = Math.round((index / total) * 360)
  return `hsl(${hue}, 70%, 55%)`
}

export function generateColors(count: number): string[] {
  return Array.from({ length: count }, (_, i) => hslColor(i, count))
}

export function loadCustomOptions(): WheelOption[] | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed) && parsed.length >= 2) return parsed
    return null
  } catch {
    return null
  }
}

export function saveCustomOptions(options: WheelOption[]): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(KEY, JSON.stringify(options))
  } catch {
    // ignore
  }
}

export const PRESETS: Record<string, WheelOption[]> = {
  random: [
    { label: 'Yes', color: '#10B981' },
    { label: 'No', color: '#F43F5E' },
    { label: 'Maybe', color: '#F59E0B' },
    { label: 'Ask Again', color: '#A855F7' }
  ],
  lunch: [
    { label: 'Pizza', color: '#F97316' },
    { label: 'Sushi', color: '#0EA5E9' },
    { label: 'Burger', color: '#EAB308' },
    { label: 'Salad', color: '#10B981' },
    { label: 'Ramen', color: '#EC4899' },
    { label: 'Tacos', color: '#F43F5E' }
  ],
  vote: [
    { label: 'Option A', color: '#6366F1' },
    { label: 'Option B', color: '#0EA5E9' },
    { label: 'Option C', color: '#10B981' },
    { label: 'Abstain', color: '#6B7280' }
  ],
  game: [
    { label: 'Player 1', color: '#F43F5E' },
    { label: 'Player 2', color: '#0EA5E9' },
    { label: 'Player 3', color: '#10B981' },
    { label: 'Player 4', color: '#F59E0B' }
  ]
}
