import type { Metadata } from 'next'
import { RandomNumberTool } from '@/components/tools/RandomNumberTool'
import { ToolPageShell } from '@/components/layout/ToolPageShell'
import { toolContent } from '@/lib/content/tools'
import { getToolI18n } from '@/lib/content/tools-i18n'
import { buildMeta, faqSchema, softwareSchema } from '@/lib/seo'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const i18n = getToolI18n('random-number-generator', params.locale)
  return buildMeta({
    title: i18n?.metaTitle ?? 'Random Number Generator — Free, Any Range',
    description: i18n?.metaDescription ?? "Generate a random number in any range instantly. Set min, max, count & unique mode. Free, no signup. Great for games, raffles & stats.",
    path: `/${params.locale}/random-number-generator`,
    locale: params.locale
  })
}

export default function RandomNumberPage({ params }: { params: { locale: string } }) {
  const base = toolContent['random-number-generator']
  const i18n = getToolI18n('random-number-generator', params.locale)
  const content = i18n ? { ...base, title: i18n.title, subtitle: i18n.subtitle } : base
  const path = `/${params.locale}/random-number-generator`

  return (
    <ToolPageShell
      locale={params.locale}
      content={content}
      tool={<RandomNumberTool />}
      faqJsonLd={faqSchema(content.faqs)}
      softwareJsonLd={softwareSchema('Random Number Generator', path)}
    />
  )
}