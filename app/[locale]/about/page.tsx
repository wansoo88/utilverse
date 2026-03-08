import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getLegalBundle } from '@/lib/content/legal'
import { buildMeta } from '@/lib/seo'
import { isLocale } from '@/lib/i18n'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return buildMeta({
    title: 'About | Decision Toolkit',
    description: 'About Decision Toolkit and our mission to provide practical random decision tools.',
    path: `/${params.locale}/about`
  })
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound()
  const legal = getLegalBundle(params.locale)

  return (
    <div className="container-page">
      <section className="card" style={{ padding: '1.2rem' }}>
        <h1 className="section-title">{legal.aboutTitle}</h1>
        {legal.aboutParagraphs.map((paragraph) => (
          <p key={paragraph} className="section-copy" style={{ marginBottom: '0.7rem' }}>{paragraph}</p>
        ))}
      </section>
    </div>
  )
}