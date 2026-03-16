import type { Metadata } from 'next'
import { BabyNameGeneratorTool } from '@/components/tools/BabyNameGeneratorTool'
import { ToolPageShell } from '@/components/layout/ToolPageShell'
import { toolContent } from '@/lib/content/tools'
import { getToolI18n } from '@/lib/content/tools-i18n'
import { buildMeta, faqSchema, softwareSchema } from '@/lib/seo'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const i18n = getToolI18n('baby-name-generator', params.locale)
  return buildMeta({
    title: i18n?.metaTitle ?? 'Baby Name Generator — Free Random Name Ideas',
    description: i18n?.metaDescription ?? "Discover random baby name ideas by style: classic, modern & nature. Free, no signup. Find the perfect name for your little one.",
    path: `/${params.locale}/baby-name-generator`,
    locale: params.locale
  })
}

export default function BabyNameGeneratorPage({ params }: { params: { locale: string } }) {
  const base = toolContent['baby-name-generator']
  const i18n = getToolI18n('baby-name-generator', params.locale)
  const content = i18n ? { ...base, title: i18n.title, subtitle: i18n.subtitle } : base
  const path = `/${params.locale}/baby-name-generator`

  return (
    <ToolPageShell
      locale={params.locale}
      content={content}
      tool={<BabyNameGeneratorTool />}
      faqJsonLd={faqSchema(content.faqs)}
      softwareJsonLd={softwareSchema('Baby Name Generator', path)}
    />
  )
}