'use client'

import { useState } from 'react'

type FaqItem = {
  question: string
  answer: string
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {items.map((faq, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={faq.question}
            style={{
              border: '1px solid var(--border, rgba(255,255,255,0.1))',
              borderRadius: '10px',
              overflow: 'hidden',
              background: isOpen ? 'rgba(255,255,255,0.04)' : 'transparent',
              transition: 'background 0.2s'
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.85rem 1rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                fontWeight: 700,
                fontSize: '0.95rem',
                color: 'inherit',
                gap: '0.75rem'
              }}
            >
              <span>{faq.question}</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                style={{
                  flexShrink: 0,
                  transition: 'transform 0.25s ease',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  opacity: 0.7
                }}
                aria-hidden="true"
              >
                <path d="M4 6.5l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {isOpen && (
              <div
                style={{
                  padding: '0 1rem 0.9rem 1rem',
                  fontSize: '0.9rem',
                  lineHeight: '1.65',
                  opacity: 0.85
                }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
