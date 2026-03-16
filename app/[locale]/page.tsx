import Link from 'next/link'
import { notFound } from 'next/navigation'
import { AdSlot } from '@/components/common/AdSlot'
import { blogPosts } from '@/lib/content/blog'
import { toolCatalog } from '@/lib/content/catalog'
import { getDictionary, isLocale } from '@/lib/i18n'
import { BentoCard } from '@/components/home/BentoCard'
import { HeroLiveTool } from '@/components/home/HeroLiveTool'
import { FadeIn } from '@/components/motion/FadeIn'
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren'
import { ScaleIn } from '@/components/motion/ScaleIn'
import { withBasePath } from '@/lib/site'
import { buildMeta, faqSchema, webAppSchema } from '@/lib/seo'
import { LiveCounter } from '@/components/home/LiveCounter'
import { BadgeGallery } from '@/components/common/BadgeGallery'
import { TodayChallenge } from '@/components/home/TodayChallenge'

const homeMeta: Record<string, { title: string; description: string }> = {
  en: {
    title: 'Random Decision Maker — 15 Free Tools | Utilverse',
    description: "Can't decide? Get an instant random pick with 15 free tools — coin flip, dice, wheel, yes/no, name picker & more. No signup. Works on any device.",
  },
  es: {
    title: 'Decisión Aleatoria — 15 Herramientas Gratis | Utilverse',
    description: '¿No puedes decidir? Elige al instante con 15 herramientas gratis: cara o cruz, dados, ruleta, sí/no, sorteo de nombres y más. Sin registro, en cualquier dispositivo.',
  },
  pt: {
    title: 'Decisão Aleatória — 15 Ferramentas Grátis | Utilverse',
    description: 'Não consegue decidir? Escolha na hora com 15 ferramentas grátis: cara ou coroa, dados, roleta, sim/não, sorteio de nomes e mais. Sem cadastro.',
  },
  ar: {
    title: 'أداة القرار العشوائي — 15 أداة مجانية | Utilverse',
    description: 'لا تستطيع الاختيار؟ احصل على قرار فوري مع 15 أداة مجانية: قلب عملة، نرد، عجلة، نعم/لا والمزيد. بدون تسجيل، يعمل على أي جهاز.',
  },
  hi: {
    title: 'रैंडम डिसीजन मेकर — 15 मुफ्त टूल्स | Utilverse',
    description: 'फैसला नहीं कर पा रहे? 15 मुफ्त टूल्स से तुरंत चुनें — कॉइन फ्लिप, डाइस, व्हील, हाँ/ना और अधिक। बिना रजिस्ट्रेशन, किसी भी डिवाइस पर।',
  },
  tr: {
    title: 'Rastgele Karar Verici — 15 Ücretsiz Araç | Utilverse',
    description: 'Karar veremiyor musunuz? 15 ücretsiz araçla anında seçim yapın: yazı tura, zar, çark, evet/hayır ve daha fazlası. Kayıt yok, her cihazda çalışır.',
  },
}

export function generateMetadata({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : 'en'
  const meta = homeMeta[locale] ?? homeMeta.en
  return buildMeta({
    title: meta.title,
    description: meta.description,
    path: `/${locale}`,
    locale,
  })
}

const homeWebAppSchema = webAppSchema(
  'Random Decision Maker',
  '/en',
  'Free online random decision tools: coin flip, dice roller, wheel spinner, yes/no generator, random name picker, and 10 more. No signup needed.'
)

const homeFaqSchema = faqSchema([
  {
    question: 'How does the random decision maker work?',
    answer: 'Enter your options, click the button, and the tool randomly selects one for you using a crypto-safe randomization algorithm for fair results every time.'
  },
  {
    question: 'Are all the decision tools completely free?',
    answer: 'Yes — all 15 tools are completely free with no signup, no account, and no hidden fees. Use them as many times as you want.'
  },
  {
    question: 'Can I use these tools for group decisions?',
    answer: 'Absolutely. Tools like Spin the Wheel, Random Name Picker, and Team Generator are built specifically for group decisions — just enter everyone\'s options and let the tool decide fairly.'
  },
  {
    question: 'Is the randomness truly fair?',
    answer: 'Yes. All tools use crypto.getRandomValues() — the same cryptographic randomness used in security applications — rather than Math.random(), which can be biased.'
  },
  {
    question: 'Do these tools work on mobile?',
    answer: 'Yes, all tools are fully responsive and work on any device — phone, tablet, or desktop — with no download or app installation required.'
  }
])

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) {
    notFound()
  }

  const dict = getDictionary(params.locale)
  const locale = params.locale

  return (
    <div className="container-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeWebAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }} />
      {/* Today's Challenge Banner */}
      <TodayChallenge locale={locale} />

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
          <FadeIn direction="up" delay={0.16}>
            <LiveCounter />
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <div className="hero-cta-row">
              <Link className="btn btn-primary" href={`/${locale}/coin-flip`}>
                {dict.home.ctaPrimary}
              </Link>
              <Link className="btn" href={`/${locale}/spin-the-wheel`}>
                Launch Wheel
              </Link>
              <Link className="btn" href={`/${locale}/blog`}>
                {dict.home.ctaSecondary}
              </Link>
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
        <HeroLiveTool locale={locale} />
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
              <Link href={`/${locale}/blog/${post.slug}`} className="card post-card">
                <h3>{post.title}</h3>
                <p className="section-copy">{post.description}</p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      <AdSlot slot="0000000003" label="Homepage middle slot" />

      {/* Achievement Gallery */}
      <BadgeGallery />
    </div>
  )
}
