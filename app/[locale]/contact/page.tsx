import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getLegalBundle } from '@/lib/content/legal'
import { buildMeta } from '@/lib/seo'
import { isLocale } from '@/lib/i18n'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return buildMeta({
    title: 'Contact | Decision Toolkit',
    description: 'Contact Decision Toolkit for feedback, support, and partnership inquiries.',
    path: `/${params.locale}/contact`
  })
}

export default function ContactPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound()
  const legal = getLegalBundle(params.locale)

  return (
    <div className="container-page">
      <section className="card" style={{ padding: '1.2rem' }}>
        <h1 className="section-title">{legal.contactTitle}</h1>
        {legal.contactParagraphs.map((paragraph) => (
          <p key={paragraph} className="section-copy" style={{ marginBottom: '0.7rem' }}>{paragraph}</p>
        ))}
        <p className="section-copy"><strong>Contact email:</strong> to be finalized after deployment.</p>
      </section>
    </div>
  )
}