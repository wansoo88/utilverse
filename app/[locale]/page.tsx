import Link from 'next/link'
import { notFound } from 'next/navigation'
import { AdSlot } from '@/components/common/AdSlot'
import { blogPosts } from '@/lib/content/blog'
import { toolCatalog } from '@/lib/content/catalog'
import { getDictionary, isLocale } from '@/lib/i18n'
import { BentoCard } from '@/components/home/BentoCard'
import { FadeIn } from '@/components/motion/FadeIn'
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren'
import { ScaleIn } from '@/components/motion/ScaleIn'

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) {
    notFound()
  }

  const dict = getDictionary(params.locale)
  const locale = params.locale

  return (
    <div className="container-page">
      {/* Hero Section */}
      <section className="hero-panel card" style={{ marginBottom: '1.5rem' }}>
        <div className="hero-copy">
          <FadeIn direction="up" delay={0}>
            <p className="hero-kicker">For students, creators, and friend groups</p>
          </FadeIn>
          <FadeIn direction="up" delay={0.08}>
            <h1 className="hero-title">{dict.home.title}</h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.14}>
            <p className="section-copy">{dict.home.subtitle}</p>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <div className="hero-cta-row">
              <Link className="btn btn-primary" href={`/${locale}/coin-flip`}>
                {dict.home.ctaPrimary}
              </Link>
              <Link className="btn" href={`/${locale}/spin-the-wheel`}>
                Launch Wheel
              </Link>
              <a className="btn" href="https://mylifehack-daily.blogspot.com/" target="_blank" rel="noopener noreferrer">
                {dict.home.ctaSecondary}
              </a>
            </div>
          </FadeIn>
          <div className="hero-stat-grid" style={{ marginTop: '1rem' }}>
            {[
              { value: '15+', label: 'Decision tools' },
              { value: '6', label: 'Languages' },
              { value: '100%', label: 'Client-side random' }
            ].map((stat, i) => (
              <ScaleIn key={stat.label} delay={0.28 + i * 0.06}>
                <div className="mini-stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
        <div className="hero-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/random-decision/media/hero-decision.svg"
            alt="Decision tools visual"
            width={640}
            height={360}
            className="hero-float"
            loading="eager"
          />
        </div>
      </section>

      {/* Bento Grid */}
      <section className="home-section">
        <FadeIn direction="up">
          <div className="section-head">
            <h2 className="section-title">All Decision Tools</h2>
            <Link href={`/${locale}/tools`} className="btn">
              Browse All
            </Link>
          </div>
        </FadeIn>

        <div className="bento-grid">
          {toolCatalog.map((tool, i) => (
            <ScaleIn key={tool.href} delay={i * 0.04}>
              <BentoCard tool={tool} locale={locale} />
            </ScaleIn>
          ))}
        </div>
      </section>

      <AdSlot slot="0000000011" label="Homepage spotlight slot" />

      {/* Blog guides */}
      <section className="home-section">
        <FadeIn direction="up">
          <h2 className="section-title">{dict.home.featuredPosts}</h2>
        </FadeIn>
        <StaggerChildren className="grid-cards" staggerDelay={0.06}>
          {blogPosts.slice(0, 6).map((post) => (
            <StaggerItem key={post.slug}>
              <a href="https://mylifehack-daily.blogspot.com/" target="_blank" rel="noopener noreferrer" className="card post-card">
                <h3>{post.title}</h3>
                <p className="section-copy">{post.description}</p>
              </a>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      <AdSlot slot="0000000003" label="Homepage middle slot" />
    </div>
  )
}
