import Link from 'next/link'
import { notFound } from 'next/navigation'
import { AdSlot } from '@/components/common/AdSlot'
import {
  blogFaq,
  blogPosts,
  buildExpandedSections,
  getBlogPost,
  getRelatedPosts,
  getRelatedToolsBySlug
} from '@/lib/content/blog'
import { blogPostingSchema, breadcrumbSchema, buildMeta, faqSchema } from '@/lib/seo'
import { isLocale, locales } from '@/lib/i18n'

export function generateStaticParams() {
  return locales.flatMap((locale) => blogPosts.map((post) => ({ locale, slug: post.slug })))
}

export function generateMetadata({ params }: { params: { locale: string; slug: string } }) {
  const post = getBlogPost(params.slug)
  if (!post) {
    return {}
  }

  return buildMeta({
    title: `${post.title} | Random Decision`,
    description: post.description,
    path: `/${params.locale}/blog/${params.slug}`
  })
}

export default function BlogDetailPage({ params }: { params: { locale: string; slug: string } }) {
  if (!isLocale(params.locale)) {
    notFound()
  }

  const post = getBlogPost(params.slug)
  if (!post) {
    notFound()
  }

  const sections = buildExpandedSections(post)
  const relatedTools = getRelatedToolsBySlug(post.slug)
  const relatedPosts = getRelatedPosts(post.slug, 3)
  const faqs = blogFaq(post)

  const postingSchema = blogPostingSchema({
    title: post.title,
    description: post.description,
    locale: params.locale,
    slug: params.slug
  })

  const crumbs = breadcrumbSchema([
    { name: 'Home', path: `/${params.locale}` },
    { name: 'Blog', path: `/${params.locale}/blog` },
    { name: post.title, path: `/${params.locale}/blog/${post.slug}` }
  ])

  const faqLd = faqSchema(faqs)

  return (
    <article className="container-page">
      <div className="card" style={{ padding: '1.2rem' }}>
        <h1 className="section-title">{post.title}</h1>
        <p className="section-copy" style={{ marginBottom: '1rem' }}>
          {post.intro}
        </p>

        <section className="card" style={{ padding: '1rem', marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem' }}>Try a Tool Now</h2>
          <div className="flex flex-wrap gap-3">
            {relatedTools.slice(0, 2).map((tool) => (
              <Link key={`top-${tool.href}`} className="btn btn-primary" href={`/${params.locale}${tool.href}`}>
                Try {tool.label}
              </Link>
            ))}
          </div>
        </section>

        <AdSlot slot="0000000004" label="Blog top in-article" />

        {sections.map((section, index) => (
          <section key={section.heading} style={{ marginBottom: '1rem', marginTop: '1rem' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.45rem' }}>{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className="section-copy" style={{ marginBottom: '0.6rem' }}>
                {paragraph}
              </p>
            ))}
            {index === 1 ? (
              <div className="flex flex-wrap gap-3" style={{ marginTop: '0.75rem' }}>
                {relatedTools.slice(0, 2).map((tool) => (
                  <Link key={`mid-${tool.href}`} className="btn" href={`/${params.locale}${tool.href}`}>
                    Use {tool.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </section>
        ))}

        <section className="card" style={{ padding: '1rem', marginTop: '1rem' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem' }}>Related Tools</h2>
          <div className="flex flex-wrap gap-3">
            {relatedTools.map((tool) => (
              <Link key={tool.href} className="btn" href={`/${params.locale}${tool.href}`}>
                {tool.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="card" style={{ padding: '1rem', marginTop: '1rem' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem' }}>Related Posts</h2>
          <ul className="section-copy" style={{ paddingLeft: '1rem' }}>
            {relatedPosts.map((related) => (
              <li key={related.slug}>
                <Link href={`/${params.locale}/blog/${related.slug}`} style={{ color: 'var(--brand)' }}>
                  {related.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="card" style={{ padding: '1rem', marginTop: '1rem' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem' }}>FAQ</h2>
          {faqs.map((faq) => (
            <details key={faq.question} style={{ marginBottom: '0.6rem' }}>
              <summary style={{ fontWeight: 700 }}>{faq.question}</summary>
              <p className="section-copy" style={{ marginTop: '0.4rem' }}>{faq.answer}</p>
            </details>
          ))}
        </section>

        <AdSlot slot="0000000005" label="Blog bottom in-article" />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(postingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </article>
  )
}
