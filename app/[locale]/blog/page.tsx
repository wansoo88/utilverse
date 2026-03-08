import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/lib/content/blog'
import { buildMeta, itemListSchema } from '@/lib/seo'
import { isLocale } from '@/lib/i18n'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return buildMeta({
    title: 'Decision Guides Blog | Decision Toolkit',
    description: 'Practical decision-making guides and random-tool strategy articles.',
    path: `/${params.locale}/blog`
  })
}

export default function BlogIndexPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) {
    notFound()
  }

  const listSchema = itemListSchema(
    blogPosts.map((post) => ({ name: post.title, path: `/${params.locale}/blog/${post.slug}` })),
    'Decision Toolkit Blog Posts'
  )

  return (
    <div className="container-page">
      <section className="card" style={{ padding: '1.2rem' }}>
        <h1 className="section-title">Decision-Making Blog</h1>
        <p className="section-copy" style={{ marginBottom: '1rem' }}>
          Long-form guides designed to support SEO depth and practical user value.
        </p>
        <div className="grid-cards">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/${params.locale}/blog/${post.slug}`} className="card" style={{ padding: '1rem' }}>
              <h2 style={{ fontSize: '1.02rem', fontWeight: 800, marginBottom: '0.35rem' }}>{post.title}</h2>
              <p className="section-copy">{post.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
    </div>
  )
}