'use client'

import { useState } from 'react'

const CONTACT_EMAIL = 'hello@utilverse.info'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setSubmitted(true)
  }

  const fieldStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.65rem 0.85rem',
    borderRadius: '8px',
    border: '1px solid var(--border, rgba(255,255,255,0.15))',
    background: 'rgba(255,255,255,0.05)',
    color: 'inherit',
    fontSize: '0.95rem',
    outline: 'none',
    boxSizing: 'border-box'
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '0.35rem',
    fontWeight: 600,
    fontSize: '0.88rem',
    opacity: 0.8
  }

  if (submitted) {
    return (
      <div
        style={{
          padding: '1.2rem',
          borderRadius: '10px',
          background: 'rgba(99,102,241,0.12)',
          border: '1px solid rgba(99,102,241,0.3)',
          textAlign: 'center',
          marginTop: '1rem'
        }}
      >
        <p style={{ fontWeight: 700, marginBottom: '0.4rem' }}>Your email client should have opened.</p>
        <p style={{ opacity: 0.75, fontSize: '0.9rem' }}>
          If not, email us directly at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--brand)', textDecoration: 'underline' }}>
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '1.2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <label htmlFor="contact-name" style={labelStyle}>Name</label>
        <input
          id="contact-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          style={fieldStyle}
        />
      </div>

      <div>
        <label htmlFor="contact-email" style={labelStyle}>Email</label>
        <input
          id="contact-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          style={fieldStyle}
        />
      </div>

      <div>
        <label htmlFor="contact-subject" style={labelStyle}>Subject</label>
        <input
          id="contact-subject"
          type="text"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="How can we help?"
          style={fieldStyle}
        />
      </div>

      <div>
        <label htmlFor="contact-message" style={labelStyle}>Message</label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us more..."
          style={{ ...fieldStyle, resize: 'vertical' }}
        />
      </div>

      <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', padding: '0.7rem 1.6rem' }}>
        Send Message
      </button>
    </form>
  )
}
