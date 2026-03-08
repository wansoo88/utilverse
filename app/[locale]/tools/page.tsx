import Link from 'next/link'
import { notFound } from 'next/navigation'
import { toolCatalog } from '@/lib/content/catalog'
import { AdSlot } from '@/components/common/AdSlot'
import { buildMeta, breadcrumbSchema, collectionPageSchema, itemListSchema } from '@/lib/seo'
import { isLocale } from '@/lib/i18n'
import { BentoCard } from '@/components/home/BentoCard'
import { FadeIn } from '@/components/motion/FadeIn'
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren'

const categories = ['random', 'picker', 'games', 'utility'] as const

const categoryLabel: Record<(typeof categories)[number], string> = {
  random: 'Random Generators',
  picker: 'Picker Tools',
  games: 'Game Decision Tools',
  utility: 'Utility Tools'
}

export function generateMetadata({ params }: { params: { locale: string } }) {
  return buildMeta({
    title: 'All Decision Tools | Random, Picker, Games, Utility',
    description: 'Browse all random decision tools by category: random generators, pickers, games, and utility tools.',
    path: `/${params.locale}/tools`
  })
}

export default function ToolsPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) {
    notFound()
  }

  const locale = params.locale

  const listItems = toolCatalog.map((tool) => ({
    name: tool.name,
    path: `/${locale}${tool.href}`
  }))

  const collectionLd = collectionPageSchema({
    name: 'Random Decision - All Tools',
    description: 'Category index page for all random decision tools.',
    path: `/${locale}/tools`
  })

  const itemListLd = itemListSchema(listItems, 'All Decision Tools')
  const breadcrumbLd = breadcrumbSchema([
    { name: 'Home', path: `/${locale}` },
    { name: 'Tools', path: `/${locale}/tools` }
  ])

  return (
    <div className="container-page">
      <FadeIn direction="up">
        <section className="card" style={{ padding: '1rem', marginBottom: '1.5rem' }}>
          <h1 className="section-title">All Tools</h1>
          <p className="section-copy">Choose a category and jump into a tool in one click.</p>
        </section>
      </FadeIn>

      {categories.map((category, index) => {
        const items = toolCatalog.filter((item) => item.category === category)
        return (
          <section key={category} className="home-section">
            <FadeIn direction="up">
              <h2 className="section-title">{categoryLabel[category]}</h2>
            </FadeIn>
            <StaggerChildren className="bento-grid" staggerDelay={0.06}>
              {items.map((item) => (
                <StaggerItem key={item.href}>
                  <BentoCard tool={item} locale={locale} />
                </StaggerItem>
              ))}
            </StaggerChildren>
            {(index + 1) % 2 === 0 ? (
              <AdSlot slot={`000000002${index}`} label={`Tools category ${category} slot`} />
            ) : null}
          </section>
        )
      })}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    </div>
  )
}
