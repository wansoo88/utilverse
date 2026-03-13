import Link from 'next/link'
import type { ReactNode } from 'react'
import { AdSlot } from '@/components/common/AdSlot'
import { getRelatedPostsByToolTitle } from '@/lib/content/blog'
import { FaqAccordion } from '@/components/common/FaqAccordion'
import { getRelatedToolsByTitle, getCatalogItemByTitle } from '@/lib/content/catalog'
import type { ToolContent } from '@/lib/content/tools'
import { breadcrumbSchema, itemListSchema } from '@/lib/seo'

function ToolHeroVisual({ icon, accentColor, title }: { icon: string; accentColor: string; title: string }) {
  const r = parseInt(accentColor.slice(1, 3), 16)
  const g = parseInt(accentColor.slice(3, 5), 16)
  const b = parseInt(accentColor.slice(5, 7), 16)
  const rgba = (a: number) => `rgba(${r},${g},${b},${a})`
  // Unique gradient id per accent to avoid SVG id collisions
  const gradId = `tg-${r}-${g}-${b}`
  const glowId = `tglow-${r}-${g}-${b}`
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 320 220"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${title} visual`}
      style={{ display: 'block', borderRadius: '20px', maxWidth: '320px', margin: '0 auto' }}
    >
      <defs>
        <radialGradient id={gradId} cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor={rgba(0.35)} />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
        <filter id={glowId} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="320" height="220" fill="var(--card, #1a1a2e)" rx="20" />
      <rect width="320" height="220" fill={`url(#${gradId})`} rx="20" />

      {/* Decorative circles */}
      <circle cx="280" cy="40" r="70" fill={rgba(0.07)} />
      <circle cx="40"  cy="180" r="50" fill={rgba(0.05)} />
      <circle cx="160" cy="110" r="90" fill={rgba(0.06)} />

      {/* Accent ring behind icon */}
      <circle cx="160" cy="100" r="62" fill={rgba(0.12)} stroke={rgba(0.3)} strokeWidth="1.5" filter={`url(#${glowId})`} />

      {/* Emoji icon — centered */}
      <text
        x="160"
        y="100"
        textAnchor="middle"
        fontSize="80"
        dominantBaseline="middle"
        style={{ userSelect: 'none' }}
      >
        {icon}
      </text>

      {/* Bottom label bar */}
      <rect x="0" y="186" width="320" height="34" fill={rgba(0.18)} rx="0" />
      <rect x="0" y="186" width="320" height="34" fill="rgba(0,0,0,0.25)" rx="0" />
      <rect x="0" y="204" width="320" height="16" fill="rgba(0,0,0,0)" rx="0" />
      <text
        x="160"
        y="207"
        textAnchor="middle"
        fontSize="12"
        fontWeight="600"
        fill={accentColor}
        fontFamily="system-ui, sans-serif"
        dominantBaseline="middle"
        letterSpacing="0.5"
      >
        {title}
      </text>
    </svg>
  )
}

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
  const catalogItem = getCatalogItemByTitle(content.title)
  const toolIcon = catalogItem?.icon ?? '🎲'
  const toolAccent = catalogItem?.accentColor ?? '#6366F1'

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
            <ToolHeroVisual icon={toolIcon} accentColor={toolAccent} title={content.title} />
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
        <FaqAccordion items={content.faqs} />
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
