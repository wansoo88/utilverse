import Link from 'next/link'
import type { ReactNode } from 'react'
import { AdSlot } from '@/components/common/AdSlot'
import type { ToolContent } from '@/lib/content/tools'

export function ToolPageShell({
  locale,
  content,
  tool,
  faqJsonLd,
  softwareJsonLd
}: {
  locale: string
  content: ToolContent
  tool: ReactNode
  faqJsonLd: object
  softwareJsonLd: object
}) {
  return (
    <div className="container-page">
      <section className="card" style={{ padding: '1.2rem', marginBottom: '1rem' }}>
        <h1 className="section-title">{content.title}</h1>
        <p className="section-copy" style={{ marginBottom: '1rem' }}>
          {content.subtitle}
        </p>
        {tool}
      </section>

      <AdSlot slot="0000000001" label="Tool Hero Bottom (728x90)" format="horizontal" />

      <section className="card" style={{ marginTop: '1rem', padding: '1.2rem' }}>
        <h2 className="section-title">How to Use</h2>
        {content.howToUse.map((item) => (
          <p key={item} className="section-copy" style={{ marginBottom: '0.7rem' }}>
            {item}
          </p>
        ))}
      </section>

      <section className="card" style={{ marginTop: '1rem', padding: '1.2rem' }}>
        <h2 className="section-title">Features</h2>
        <ul className="section-copy" style={{ paddingLeft: '1rem' }}>
          {content.features.map((item) => (
            <li key={item} style={{ marginBottom: '0.45rem' }}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <AdSlot slot="0000000002" label="In-content Ad (between sections)" />

      <section className="card" style={{ marginTop: '1rem', padding: '1.2rem' }}>
        <h2 className="section-title">Use Cases</h2>
        <ul className="section-copy" style={{ paddingLeft: '1rem' }}>
          {content.useCases.map((item) => (
            <li key={item} style={{ marginBottom: '0.45rem' }}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="card" style={{ marginTop: '1rem', padding: '1.2rem' }}>
        <h2 className="section-title">Tips & Strategy</h2>
        <ul className="section-copy" style={{ paddingLeft: '1rem' }}>
          {content.tips.map((item) => (
            <li key={item} style={{ marginBottom: '0.45rem' }}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="card" style={{ marginTop: '1rem', padding: '1.2rem' }}>
        <h2 className="section-title">FAQ</h2>
        {content.faqs.map((faq) => (
          <details key={faq.question} style={{ marginBottom: '0.6rem' }}>
            <summary style={{ fontWeight: 700 }}>{faq.question}</summary>
            <p className="section-copy" style={{ marginTop: '0.4rem' }}>
              {faq.answer}
            </p>
          </details>
        ))}
      </section>

      <section className="card" style={{ marginTop: '1rem', padding: '1.2rem' }}>
        <h2 className="section-title">Related Tools</h2>
        <div className="flex flex-wrap gap-3">
          {content.related.map((item) => (
            <Link key={item.href} className="btn" href={`/${locale}${item.href}`}>
              {item.label}
            </Link>
          ))}
          <Link className="btn" href={`/${locale}/blog`}>
            Read decision guides
          </Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </div>
  )
}