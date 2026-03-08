import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
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

  return (
    <div className="container-page">
      <section className="card" style={{ padding: '1.2rem' }}>
        <h1 className="section-title">Contact</h1>
        <p className="section-copy">For support requests, bug reports, content corrections, accessibility feedback, or partnership inquiries, contact us at <strong>hello@decisiontoolkit.example</strong>.</p>
        <p className="section-copy">Please include the page URL, browser type, device model, and a short reproduction step list for technical issues. This helps us resolve tool problems quickly and reduces back-and-forth communication.</p>
        <p className="section-copy">Typical response time is within 2-3 business days. For legal and policy requests, include "Legal" in the subject line. For ad-quality issues, include "Ad Feedback" and the affected page URL.</p>
        <p className="section-copy">We review all submissions, but cannot guarantee individual responses for unsolicited content proposals. If you are requesting takedown or rights-related action, provide clear ownership evidence and exact references.</p>
      </section>
    </div>
  )
}