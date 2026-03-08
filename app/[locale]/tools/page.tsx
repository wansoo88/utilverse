import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { toolCatalog } from '@/lib/content/catalog'
import { AdSlot } from '@/components/common/AdSlot'
import { buildMeta, breadcrumbSchema, collectionPageSchema, itemListSchema } from '@/lib/seo'
import { isLocale } from '@/lib/i18n'

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

  const listItems = toolCatalog.map((tool) => ({
    name: tool.name,
    path: `/${params.locale}${tool.href}`
  }))

  const collectionLd = collectionPageSchema({
    name: 'Decision Toolkit - All Tools',
    description: 'Category index page for all random decision tools.',
    path: `/${params.locale}/tools`
  })

  const itemListLd = itemListSchema(listItems, 'All Decision Tools')
  const breadcrumbLd = breadcrumbSchema([
    { name: 'Home', path: `/${params.locale}` },
    { name: 'Tools', path: `/${params.locale}/tools` }
  ])

  return (
    <div className="container-page">
      <section className="card" style={{ padding: '1rem', marginBottom: '1rem' }}>
        <h1 className="section-title">All Tools</h1>
        <p className="section-copy">Choose a category and jump into a tool in one click.</p>
      </section>

      {categories.map((category, index) => (
        <section key={category} className="home-section">
          <h2 className="section-title">{categoryLabel[category]}</h2>
          <div className="tool-gallery">
            {toolCatalog
              .filter((item) => item.category === category)
              .map((item) => (
                <Link key={item.href} href={`/${params.locale}${item.href}`} className="tool-card card">
                  <div className="tool-thumb-wrap">
                    <Image src={item.image} alt={`${item.name} preview`} width={320} height={180} className="tool-thumb" />
                    <span className="tool-badge">{item.badge}</span>
                  </div>
                  <div className="tool-body">
                    <h3>{item.name}</h3>
                    <p className="section-copy">{item.desc}</p>
                  </div>
                </Link>
              ))}
          </div>
          {(index + 1) % 2 === 0 ? <AdSlot slot={`000000002${index}`} label={`Tools category ${category} slot`} /> : null}
        </section>
      ))}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    </div>
  )
}
