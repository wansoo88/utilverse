'use client'

import { useFavorites } from '@/lib/useFavorites'

export function FavoriteButton({ href, name }: { href: string; name: string }) {
  const { toggle, isFavorite } = useFavorites()
  const active = isFavorite(href)

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        toggle(href)
      }}
      aria-label={active ? `Remove ${name} from favorites` : `Add ${name} to favorites`}
      style={{
        position: 'absolute',
        top: '0.6rem',
        right: '0.6rem',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1.1rem',
        lineHeight: 1,
        padding: '0.25rem',
        color: active ? '#FFD700' : 'var(--text-muted)',
        transition: 'color 0.15s, transform 0.15s',
        zIndex: 2
      }}
    >
      {active ? '★' : '☆'}
    </button>
  )
}
