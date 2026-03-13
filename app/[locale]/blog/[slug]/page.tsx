import Link from 'next/link'
import { notFound } from 'next/navigation'
import { AdSlot } from '@/components/common/AdSlot'
import {
  blogFaq,
  allBlogPosts,
  getBlogPost,
  getRelatedPosts,
  getRelatedToolsBySlug,
} from '@/lib/content/blog'
import { FaqAccordion } from '@/components/common/FaqAccordion'
import { blogPostingSchema, breadcrumbSchema, buildMeta, faqSchema } from '@/lib/seo'
import { isLocale, locales } from '@/lib/i18n'

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    allBlogPosts.map((post) => ({ locale, slug: post.slug }))
  )
}

export function generateMetadata({ params }: { params: { locale: string; slug: string } }) {
  const post = getBlogPost(params.slug, params.locale)
  if (!post) return {}
  return buildMeta({
    title: `${post.title} | Random Decision`,
    description: post.description,
    path: `/${params.locale}/blog/${params.slug}`,
    locale: params.locale
  })
}

export default function BlogDetailPage({ params }: { params: { locale: string; slug: string } }) {
  if (!isLocale(params.locale)) notFound()

  const post = getBlogPost(params.slug, params.locale)
  if (!post) notFound()

  // TypeScript narrowing after notFound()
  const p = post!

  const relatedTools = getRelatedToolsBySlug(p.slug)
  const relatedPosts = getRelatedPosts(p.slug, params.locale, 3)
  const faqs = blogFaq(p)

  const postingSchema = blogPostingSchema({
    title: p.title,
    description: p.description,
    locale: params.locale,
    slug: params.slug,
    publishedDate: p.publishedDate,
    updatedDate: p.updatedDate,
    author: p.author
  })

  const crumbs = breadcrumbSchema([
    { name: 'Home', path: `/${params.locale}` },
    { name: 'Blog', path: `/${params.locale}/blog` },
    { name: p.title, path: `/${params.locale}/blog/${p.slug}` }
  ])

  const faqLd = faqSchema(faqs)

  return (
    <article className="container-page">
      <div className="card" style={{ padding: '1.2rem' }}>
        {/* Header */}
        <h1 className="section-title">{p.title}</h1>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
          <span className="section-copy" style={{ fontSize: '0.82rem' }}>
            By <strong>{p.author}</strong>
          </span>
          <span className="section-copy" style={{ fontSize: '0.82rem' }}>
            {p.publishedDate}
          </span>
          <span className="section-copy" style={{ fontSize: '0.82rem' }}>
            {p.readingTime} min read
          </span>
          <span
            style={{
              fontSize: '0.75rem',
              padding: '0.15rem 0.5rem',
              borderRadius: '999px',
              background: 'var(--brand)',
              color: '#fff',
              fontWeight: 700,
              textTransform: 'capitalize'
            }}
          >
            {p.category}
          </span>
        </div>

        <p className="section-copy" style={{ marginBottom: '1rem' }}>{p.intro}</p>

        {/* Try a Tool CTA */}
        <section className="card" style={{ padding: '1rem', marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.5rem' }}>Try a Tool Now</h2>
          <div className="flex flex-wrap gap-3">
            {relatedTools.slice(0, 2).map((tool) => (
              <Link key={`top-${tool.href}`} className="btn btn-primary" href={`/${params.locale}${tool.href}`}>
                Try {tool.label}
              </Link>
            ))}
          </div>
        </section>

        <AdSlot slot="0000000004" label="Blog top in-article" />

        {/* Sections */}
        {p.sections.map((section, index) => (
          <section key={section.heading} style={{ marginBottom: '1.25rem', marginTop: '1rem' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.45rem' }}>{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="section-copy" style={{ marginBottom: '0.6rem' }}>
                {paragraph}
              </p>
            ))}
            {section.svgIllustration && (
              <div
                style={{ margin: '0.75rem 0', borderRadius: '10px', overflow: 'hidden' }}
                dangerouslySetInnerHTML={{ __html: section.svgIllustration }}
              />
            )}
            {index === 1 && (
              <div className="flex flex-wrap gap-3" style={{ marginTop: '0.75rem' }}>
                {relatedTools.slice(0, 2).map((tool) => (
                  <Link key={`mid-${tool.href}`} className="btn" href={`/${params.locale}${tool.href}`}>
                    Use {tool.label}
                  </Link>
                ))}
              </div>
            )}
          </section>
        ))}

        {/* Related Tools */}
        <section className="card" style={{ padding: '1rem', marginTop: '1rem' }}>
          <h2 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.5rem' }}>Related Tools</h2>
          <div className="flex flex-wrap gap-3">
            {relatedTools.map((tool) => (
              <Link key={tool.href} className="btn" href={`/${params.locale}${tool.href}`}>
                {tool.label}
              </Link>
            ))}
          </div>
        </section>

        {/* Related Posts */}
        <section className="card" style={{ padding: '1rem', marginTop: '1rem' }}>
          <h2 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.5rem' }}>Related Posts</h2>
          <ul className="section-copy" style={{ paddingLeft: '1rem' }}>
            {relatedPosts.map((related) => (
              <li key={related.slug} style={{ marginBottom: '0.35rem' }}>
                <Link href={`/${params.locale}/blog/${related.slug}`} style={{ color: 'var(--brand)' }}>
                  {related.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section className="card" style={{ padding: '1rem', marginTop: '1rem' }}>
          <h2 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.75rem' }}>Frequently Asked Questions</h2>
          <FaqAccordion items={faqs} />
        </section>

        <AdSlot slot="0000000005" label="Blog bottom in-article" />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(postingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </article>
  )
}
