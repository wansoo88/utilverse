import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { AdSlot } from '@/components/common/AdSlot'
import { blogPosts } from '@/lib/content/blog'
import { toolCatalog } from '@/lib/content/catalog'
import { getDictionary, isLocale } from '@/lib/i18n'

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) {
    notFound()
  }

  const dict = getDictionary(params.locale)
  const spotlight = toolCatalog.slice(0, 3)
  const featured = toolCatalog.slice(3)

  return (
    <div className="container-page">
      <section className="hero-panel card">
        <div className="hero-copy">
          <p className="hero-kicker">For students, creators, and friend groups</p>
          <h1 className="hero-title">{dict.home.title}</h1>
          <p className="section-copy">{dict.home.subtitle}</p>
          <div className="hero-cta-row">
            <Link className="btn btn-primary" href={`/${params.locale}/coin-flip`}>
              {dict.home.ctaPrimary}
            </Link>
            <Link className="btn" href={`/${params.locale}/spin-the-wheel`}>
              Launch Wheel
            </Link>
            <Link className="btn" href={`/${params.locale}/blog`}>
              {dict.home.ctaSecondary}
            </Link>
          </div>
          <div className="hero-stat-grid">
            <div className="mini-stat">
              <strong>15+</strong>
              <span>Decision tools</span>
            </div>
            <div className="mini-stat">
              <strong>6</strong>
              <span>Languages</span>
            </div>
            <div className="mini-stat">
              <strong>100%</strong>
              <span>Client-side random</span>
            </div>
          </div>
        </div>
        <div className="hero-media">
          <Image src="/media/hero-decision.svg" alt="Decision tools visual" width={640} height={360} priority className="hero-float" />
        </div>
      </section>

      <section className="home-section">
        <div className="section-head">
          <h2 className="section-title">Top 3 Picks</h2>
          <Link href={`/${params.locale}/coin-flip`} className="btn">
            Start Fast
          </Link>
        </div>
        <div className="tool-gallery tool-gallery-spotlight">
          {spotlight.map((tool) => (
            <Link key={tool.href} href={`/${params.locale}${tool.href}`} className="tool-card card">
              <div className="tool-thumb-wrap">
                <Image src={tool.image} alt={`${tool.name} preview`} width={320} height={180} className="tool-thumb" />
                <span className="tool-badge">{tool.badge}</span>
              </div>
              <div className="tool-body">
                <h3>{tool.name}</h3>
                <p className="section-copy">{tool.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <AdSlot slot="0000000011" label="Homepage spotlight slot" />

      <section className="home-section">
        <div className="section-head">
          <h2 className="section-title">{dict.home.featuredTools}</h2>
          <Link href={`/${params.locale}/random-name-picker`} className="btn">
            Explore More
          </Link>
        </div>
        <div className="tool-gallery">
          {featured.map((tool) => (
            <Link key={tool.href} href={`/${params.locale}${tool.href}`} className="tool-card card">
              <div className="tool-thumb-wrap">
                <Image src={tool.image} alt={`${tool.name} preview`} width={320} height={180} className="tool-thumb" />
                <span className="tool-badge">{tool.badge}</span>
              </div>
              <div className="tool-body">
                <h3>{tool.name}</h3>
                <p className="section-copy">{tool.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <AdSlot slot="0000000003" label="Homepage middle slot" />

      <section className="home-section">
        <h2 className="section-title">{dict.home.featuredPosts}</h2>
        <div className="grid-cards">
          {blogPosts.slice(0, 6).map((post) => (
            <Link key={post.slug} href={`/${params.locale}/blog/${post.slug}`} className="card post-card">
              <h3>{post.title}</h3>
              <p className="section-copy">{post.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
