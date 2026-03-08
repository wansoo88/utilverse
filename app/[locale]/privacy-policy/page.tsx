import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getLegalBundle } from '@/lib/content/legal'
import { buildMeta } from '@/lib/seo'
import { isLocale } from '@/lib/i18n'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return buildMeta({
    title: 'Privacy Policy | Random Decision',
    description: 'Privacy policy for Random Decision, including cookies, analytics, and ad policy details.',
    path: `/${params.locale}/privacy-policy`
  })
}

export default function PrivacyPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound()
  const legal = getLegalBundle(params.locale)

  return (
    <div className="container-page">
      <article className="card" style={{ padding: '1.2rem' }}>
        <h1 className="section-title">{legal.privacyTitle}</h1>
        {legal.privacySections.map((section) => (
          <section key={section.heading} style={{ marginTop: '1rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem' }}>{section.heading}</h2>
            <p className="section-copy">{section.body}</p>
          </section>
        ))}
      </article>
    </div>
  )
}