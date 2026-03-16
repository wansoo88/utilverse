import type { Metadata } from 'next'
import { RandomColorTool } from '@/components/tools/RandomColorTool'
import { ToolPageShell } from '@/components/layout/ToolPageShell'
import { toolContent } from '@/lib/content/tools'
import { getToolI18n } from '@/lib/content/tools-i18n'
import { buildMeta, faqSchema, softwareSchema } from '@/lib/seo'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const i18n = getToolI18n('random-color', params.locale)
  return buildMeta({
    title: i18n?.metaTitle ?? 'Random Color Generator — Free HEX and RGB',
    description: i18n?.metaDescription ?? "Generate a random color with instant HEX, RGB & preview. Copy with one click. Free, no signup. Great for design, art & web projects.",
    path: `/${params.locale}/random-color`,
    locale: params.locale
  })
}

export default function RandomColorPage({ params }: { params: { locale: string } }) {
  const base = toolContent['random-color']
  const i18n = getToolI18n('random-color', params.locale)
  const content = i18n ? { ...base, title: i18n.title, subtitle: i18n.subtitle } : base
  const path = `/${params.locale}/random-color`

  return (
    <ToolPageShell
      locale={params.locale}
      content={content}
      tool={<RandomColorTool />}
      faqJsonLd={faqSchema(content.faqs)}
      softwareJsonLd={softwareSchema('Random Color Generator', path)}
    />
  )
}