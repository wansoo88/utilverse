import Link from 'next/link'
import Image from 'next/image'
import type { ReactNode } from 'react'
import { AdSlot } from '@/components/common/AdSlot'
import { getRelatedPostsByToolTitle } from '@/lib/content/blog'
import { getRelatedToolsByTitle } from '@/lib/content/catalog'
import type { ToolContent } from '@/lib/content/tools'
import { breadcrumbSchema, itemListSchema } from '@/lib/seo'

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
  const title = content.title.toLowerCase()
  const heroImage = title.includes('coin')
    ? '/media/coin-motion.svg'
    : title.includes('wheel')
      ? '/media/wheel-motion.svg'
      : title.includes('dice')
        ? '/media/dice-motion.svg'
        : title.includes('food')
          ? '/media/food-pick.svg'
          : title.includes('name') || title.includes('team')
            ? '/media/team-pick.svg'
            : '/media/tool-generic.svg'

  const relatedTools = getRelatedToolsByTitle(content.title, 6)
  const relatedPosts = getRelatedPostsByToolTitle(content.title, 3)
  const breadcrumbLd = breadcrumbSchema([
    { name: 'Home', path: `/${locale}` },
    { name: 'Tools', path: `/${locale}/tools` }
  ])
  const relatedItemListLd = itemListSchema(
    relatedTools.map((item) => ({ name: item.name, path: `/${locale}${item.href}` })),
    `${content.title} Related Tools`
  )

  return (
    <div className="container-page">
      <section className="card tool-shell">
        <div className="tool-shell-hero">
          <div>
            <h1 className="section-title">{content.title}</h1>
            <p className="section-copy" style={{ marginBottom: '0.95rem' }}>
              {content.subtitle}
            </p>
            {tool}
          </div>
          <div className="tool-shell-media">
            <Image src={heroImage} alt={`${content.title} visual`} width={320} height={180} />
          </div>
        </div>
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
          {relatedTools.map((item) => (
            <Link key={item.href} className="btn" href={`/${locale}${item.href}`}>
              {item.name}
            </Link>
          ))}
          <Link className="btn" href={`/${locale}/blog`}>
            Read decision guides
          </Link>
        </div>
      </section>

      <section className="card" style={{ marginTop: '1rem', padding: '1.2rem' }}>
        <h2 className="section-title">Related Posts</h2>
        <ul className="section-copy" style={{ paddingLeft: '1rem' }}>
          {relatedPosts.map((post) => (
            <li key={post.slug} style={{ marginBottom: '0.45rem' }}>
              <Link href={`/${locale}/blog/${post.slug}`} style={{ color: 'var(--brand)' }}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <AdSlot slot="0000000012" label="Tool FAQ bottom slot" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(relatedItemListLd) }} />
    </div>
  )
}
