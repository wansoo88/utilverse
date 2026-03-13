import type { Metadata } from 'next'
import { RandomDateGeneratorTool } from '@/components/tools/RandomDateGeneratorTool'
import { ToolPageShell } from '@/components/layout/ToolPageShell'
import { toolContent } from '@/lib/content/tools'
import { getToolI18n } from '@/lib/content/tools-i18n'
import { buildMeta, faqSchema, softwareSchema } from '@/lib/seo'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const i18n = getToolI18n('random-date-generator', params.locale)
  return buildMeta({
    title: i18n?.metaTitle ?? 'Random Date Generator | Free Date Picker',
    description: i18n?.metaDescription ?? 'Generate random dates inside a custom date range instantly.',
    path: `/${params.locale}/random-date-generator`,
    locale: params.locale
  })
}

export default function RandomDateGeneratorPage({ params }: { params: { locale: string } }) {
  const base = toolContent['random-date-generator']
  const i18n = getToolI18n('random-date-generator', params.locale)
  const content = i18n ? { ...base, title: i18n.title, subtitle: i18n.subtitle } : base
  const path = `/${params.locale}/random-date-generator`

  return (
    <ToolPageShell
      locale={params.locale}
      content={content}
      tool={<RandomDateGeneratorTool />}
      faqJsonLd={faqSchema(content.faqs)}
      softwareJsonLd={softwareSchema('Random Date Generator', path)}
    />
  )
}