import Link from 'next/link'
import { notFound } from 'next/navigation'
import { AdSlot } from '@/components/common/AdSlot'
import { blogPosts } from '@/lib/content/blog'
import { getDictionary, isLocale } from '@/lib/i18n'

const tools = [
  { href: '/coin-flip', name: 'Coin Flip', desc: 'Fast binary decision with history.' },
  { href: '/dice-roller', name: 'Dice Roller', desc: 'D4 to D20 with multi-roll totals.' },
  { href: '/spin-the-wheel', name: 'Spin the Wheel', desc: 'Custom entries and random winner.' },
  { href: '/yes-or-no', name: 'Yes or No', desc: 'Quick yes/no generator for daily choices.' },
  { href: '/random-number-generator', name: 'Random Number Generator', desc: 'Range-based integer picks with unique mode.' },
  { href: '/random-name-picker', name: 'Random Name Picker', desc: 'Fair random name selection for classes and events.' },
  { href: '/team-generator', name: 'Team Generator', desc: 'Split names into random teams quickly.' },
  { href: '/random-letter', name: 'Random Letter', desc: 'A-Z random letter prompts.' },
  { href: '/random-color', name: 'Random Color', desc: 'HEX and RGB color picker with preview.' },
  { href: '/countdown-timer-random', name: 'Random Countdown Timer', desc: 'Unpredictable timer rounds for games.' }
]

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) {
    notFound()
  }

  const dict = getDictionary(params.locale)

  return (
    <div className="container-page">
      <section className="card" style={{ padding: '1.2rem', marginBottom: '1rem' }}>
        <h1 className="section-title">{dict.home.title}</h1>
        <p className="section-copy" style={{ marginBottom: '1rem' }}>
          {dict.home.subtitle}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link className="btn btn-primary" href={`/${params.locale}/coin-flip`}>
            {dict.home.ctaPrimary}
          </Link>
          <Link className="btn" href={`/${params.locale}/blog`}>
            {dict.home.ctaSecondary}
          </Link>
        </div>
      </section>

      <section className="card" style={{ padding: '1.2rem', marginBottom: '1rem' }}>
        <h2 className="section-title">{dict.home.featuredTools}</h2>
        <div className="grid-cards">
          {tools.map((tool) => (
            <Link key={tool.href} href={`/${params.locale}${tool.href}`} className="card" style={{ padding: '1rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '0.35rem' }}>{tool.name}</h3>
              <p className="section-copy">{tool.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <AdSlot slot="0000000003" label="Homepage middle slot" />

      <section className="card" style={{ padding: '1.2rem', marginTop: '1rem' }}>
        <h2 className="section-title">{dict.home.featuredPosts}</h2>
        <div className="grid-cards">
          {blogPosts.slice(0, 6).map((post) => (
            <Link key={post.slug} href={`/${params.locale}/blog/${post.slug}`} className="card" style={{ padding: '1rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '0.35rem' }}>{post.title}</h3>
              <p className="section-copy">{post.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}