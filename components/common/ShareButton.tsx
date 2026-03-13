'use client'

import { useState } from 'react'

export function ShareButton({ title, text, url }: { title?: string; text?: string; url?: string }) {
  const [state, setState] = useState<'idle' | 'copied'>('idle')

  const handleShare = async () => {
    const shareUrl = url ?? window.location.href
    const shareTitle = title ?? document.title

    if (navigator.share) {
      try {
        await navigator.share({ title: shareTitle, text, url: shareUrl })
      } catch {
        // user cancelled — no action needed
      }
      return
    }

    // Fallback: copy URL to clipboard
    try {
      await navigator.clipboard.writeText(shareUrl)
    } catch {
      const el = document.createElement('textarea')
      el.value = shareUrl
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
    setState('copied')
    setTimeout(() => setState('idle'), 2000)
  }

  return (
    <button
      className="btn"
      type="button"
      onClick={handleShare}
      aria-label="Share this tool"
      style={{ fontSize: '0.82rem' }}
    >
      {state === 'copied' ? '✓ Link copied' : '↗ Share'}
    </button>
  )
}
