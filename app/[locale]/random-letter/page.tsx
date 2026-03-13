import type { Metadata } from 'next'
import { RandomLetterTool } from '@/components/tools/RandomLetterTool'
import { ToolPageShell } from '@/components/layout/ToolPageShell'
import { toolContent } from '@/lib/content/tools'
import { getToolI18n } from '@/lib/content/tools-i18n'
import { buildMeta, faqSchema, softwareSchema } from '@/lib/seo'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const i18n = getToolI18n('random-letter', params.locale)
  return buildMeta({
    title: i18n?.metaTitle ?? 'Random Letter Generator | Free A-Z Picker',
    description: i18n?.metaDescription ?? 'Generate random letters for games, writing prompts, and classroom exercises.',
    path: `/${params.locale}/random-letter`,
    locale: params.locale
  })
}

export default function RandomLetterPage({ params }: { params: { locale: string } }) {
  const base = toolContent['random-letter']
  const i18n = getToolI18n('random-letter', params.locale)
  const content = i18n ? { ...base, title: i18n.title, subtitle: i18n.subtitle } : base
  const path = `/${params.locale}/random-letter`

  return (
    <ToolPageShell
      locale={params.locale}
      content={content}
      tool={<RandomLetterTool />}
      faqJsonLd={faqSchema(content.faqs)}
      softwareJsonLd={softwareSchema('Random Letter Generator', path)}
    />
  )
}