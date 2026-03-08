'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const CONSENT_KEY = 'cookie_consent'

export function CookieBanner({ locale }: { locale: string }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY)
      if (!stored) setVisible(true)
    } catch {
      // localStorage unavailable
    }
  }, [])

  const accept = () => {
    try { localStorage.setItem(CONSENT_KEY, 'accepted') } catch { /* noop */ }
    setVisible(false)
  }

  const decline = () => {
    try { localStorage.setItem(CONSENT_KEY, 'declined') } catch { /* noop */ }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-modal="false"
      style={{
        position: 'fixed',
        bottom: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        width: 'min(600px, calc(100vw - 2rem))',
        background: 'var(--glass-bg)',
        border: '1px solid var(--glass-border)',
        borderRadius: '16px',
        backdropFilter: 'saturate(180%) blur(16px)',
        padding: '1rem 1.2rem',
        boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '0.75rem'
      }}
    >
      <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)', flex: '1 1 200px', lineHeight: 1.5 }}>
        We use cookies to serve ads and improve your experience.{' '}
        <Link
          href={`/${locale}/privacy-policy`}
          style={{ color: 'var(--brand)', textDecoration: 'underline' }}
        >
          Privacy Policy
        </Link>
      </p>
      <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
        <button
          onClick={decline}
          type="button"
          className="btn"
          style={{ minWidth: 'unset', minHeight: 'unset', padding: '0.4rem 0.9rem', fontSize: '0.82rem' }}
        >
          Decline
        </button>
        <button
          onClick={accept}
          type="button"
          className="btn btn-primary"
          style={{ minWidth: 'unset', minHeight: 'unset', padding: '0.4rem 0.9rem', fontSize: '0.82rem' }}
        >
          Accept
        </button>
      </div>
    </div>
  )
}
