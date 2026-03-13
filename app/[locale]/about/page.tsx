import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getLegalBundle } from '@/lib/content/legal'
import { buildMeta } from '@/lib/seo'
import { isLocale, localePath } from '@/lib/i18n'
import { toolCatalog } from '@/lib/content/catalog'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return buildMeta({
    title: 'About | Random Decision',
    description: 'About Random Decision — free browser-based random decision tools for students, teachers, streamers, and friend groups.',
    path: `/${params.locale}/about`,
    locale: params.locale
  })
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound()
  const legal = getLegalBundle(params.locale)
  const locale = params.locale

  return (
    <div className="container-page">
      <section className="card" style={{ padding: '1.2rem', marginBottom: '1rem' }}>
        <h1 className="section-title">{legal.aboutTitle}</h1>
        {legal.aboutParagraphs.map((paragraph) => (
          <p key={paragraph} className="section-copy" style={{ marginBottom: '0.7rem' }}>
            {paragraph}
          </p>
        ))}
      </section>

      {/* Trust stats */}
      <section className="card" style={{ padding: '1.2rem', marginBottom: '1rem' }}>
        <h2 className="section-title" style={{ fontSize: '1.15rem' }}>By the Numbers</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', marginTop: '0.75rem' }}>
          {[
            { value: '15', label: 'Free Tools' },
            { value: '6', label: 'Languages' },
            { value: '100%', label: 'Browser-local RNG' },
            { value: '0', label: 'Sign-ups Required' }
          ].map((stat) => (
            <div key={stat.label} className="mini-stat" style={{ textAlign: 'center' }}>
              <strong style={{ fontSize: '1.5rem' }}>{stat.value}</strong>
              <span style={{ display: 'block', marginTop: '0.2rem' }}>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tool list */}
      <section className="card" style={{ padding: '1.2rem', marginBottom: '1rem' }}>
        <h2 className="section-title" style={{ fontSize: '1.15rem' }}>Our Tools</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.75rem' }}>
          {toolCatalog.map((tool) => (
            <Link
              key={tool.href}
              href={localePath(locale, tool.href)}
              className="btn"
              style={{ minWidth: 'unset', minHeight: 'unset', padding: '0.35rem 0.75rem', fontSize: '0.85rem' }}
            >
              {tool.icon} {tool.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Tech transparency */}
      <section className="card" style={{ padding: '1.2rem' }}>
        <h2 className="section-title" style={{ fontSize: '1.15rem' }}>Privacy & Randomness</h2>
        <p className="section-copy" style={{ marginBottom: '0.6rem' }}>
          All random values are generated using the <strong>Web Crypto API</strong> (<code>crypto.getRandomValues()</code>) directly in your browser. No data is stored on our servers. Tool history is kept only in your browser&apos;s localStorage and can be cleared at any time with the "Clear history" button inside each tool.
        </p>
        <p className="section-copy">
          We display ads via Google AdSense to keep the service free. See our{' '}
          <Link href={localePath(locale, '/privacy-policy')} style={{ color: 'var(--brand)' }}>
            Privacy Policy
          </Link>{' '}
          for full details on cookies and advertising.
        </p>
      </section>
    </div>
  )
}
