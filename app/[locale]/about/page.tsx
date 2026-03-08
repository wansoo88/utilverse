import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
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

  return (
    <div className="container-page">
      <section className="card" style={{ padding: '1.2rem' }}>
        <h1 className="section-title">About Decision Toolkit</h1>
        <p className="section-copy">Decision Toolkit is a practical web utility focused on one mission: helping people make small and medium decisions faster, with less stress and less debate. We combine random decision tools with educational content so users can both execute a decision and improve their process over time.</p>
        <p className="section-copy">Our product approach is intentionally simple. We avoid heavy onboarding, account walls, and unnecessary setup. Users should be able to open a tool, run it immediately, and get a clear outcome that is easy to trust on desktop and mobile. To support repeat usage, we keep lightweight local history in the browser and prioritize interaction speed.</p>
        <p className="section-copy">The content side of the platform is equally important. We publish guides that explain how to apply random methods responsibly, where they add value, and where they should not be used. For example, random tools can be useful for tie-breaking and low-stakes coordination, but they are not substitutes for professional legal, medical, or financial judgment.</p>
        <p className="section-copy">Decision Toolkit is designed for a global audience. Our locale routing supports multiple major language markets while keeping a single consistent product surface. This helps users navigate quickly even when translated strings are minimal and still expanding.</p>
        <p className="section-copy">We continue to improve tool quality, content depth, and accessibility with each release. Feedback from educators, team facilitators, gamers, and everyday users directly shapes the roadmap.</p>
      </section>
    </div>
  )
}