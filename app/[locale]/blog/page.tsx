import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogPostsByCategory, blogCategories } from '@/lib/content/blog'
import { buildMeta, itemListSchema } from '@/lib/seo'
import { isLocale } from '@/lib/i18n'
import type { BlogCategory } from '@/lib/content/blog'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return buildMeta({
    title: 'Decision-Making Blog | Random Decision',
    description: 'Practical guides on decision making, random tools, party games, and productivity — written by kimcomplete.',
    path: `/${params.locale}/blog`
  })
}

const categoryOrder: BlogCategory[] = ['guides', 'tools', 'games', 'fun']

export default function BlogIndexPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound()

  const allPosts = categoryOrder.flatMap((cat) => getBlogPostsByCategory(cat))

  const listSchema = itemListSchema(
    allPosts.map((post) => ({ name: post.title, path: `/${params.locale}/blog/${post.slug}` })),
    'Random Decision Blog Posts'
  )

  return (
    <div className="container-page">
      <section className="card" style={{ padding: '1.2rem', marginBottom: '1.5rem' }}>
        <h1 className="section-title">Decision-Making Blog</h1>
        <p className="section-copy">
          Practical guides on making better decisions, using random tools, and having more fun — by kimcomplete.
        </p>
      </section>

      {categoryOrder.map((cat) => {
        const meta = blogCategories[cat]
        const posts = getBlogPostsByCategory(cat)
        if (!posts.length) return null
        return (
          <section key={cat} style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '1.4rem' }}>{meta.icon}</span>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800 }}>{meta.label}</h2>
              <span className="section-copy" style={{ fontSize: '0.85rem' }}>({posts.length} articles)</span>
            </div>
            <p className="section-copy" style={{ marginBottom: '0.75rem', fontSize: '0.9rem' }}>{meta.description}</p>
            <div className="grid-cards">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/${params.locale}/blog/${post.slug}`}
                  className="card"
                  style={{ padding: '1rem' }}
                >
                  <h3 style={{ fontSize: '0.98rem', fontWeight: 800, marginBottom: '0.3rem' }}>{post.title}</h3>
                  <p className="section-copy" style={{ fontSize: '0.85rem', marginBottom: '0.4rem' }}>{post.description}</p>
                  <span style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>
                    {post.readingTime} min read · {post.publishedDate}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )
      })}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
    </div>
  )
}
