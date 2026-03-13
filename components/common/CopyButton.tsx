'use client'

import { useState } from 'react'

export function CopyButton({ text, label = 'Copy' }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // fallback for older browsers
      const el = document.createElement('textarea')
      el.value = text
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    }
  }

  return (
    <button
      className="btn"
      type="button"
      onClick={handleCopy}
      aria-label={copied ? 'Copied!' : `Copy ${label}`}
      style={{ fontSize: '0.82rem', padding: '0.3rem 0.7rem' }}
    >
      {copied ? '✓ Copied' : '⎘ Copy'}
    </button>
  )
}
