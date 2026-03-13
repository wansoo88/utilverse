import type { Metadata } from 'next'
import { IcebreakerQuestionTool } from '@/components/tools/IcebreakerQuestionTool'
import { ToolPageShell } from '@/components/layout/ToolPageShell'
import { toolContent } from '@/lib/content/tools'
import { getToolI18n } from '@/lib/content/tools-i18n'
import { buildMeta, faqSchema, softwareSchema } from '@/lib/seo'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const i18n = getToolI18n('icebreaker-question-generator', params.locale)
  return buildMeta({
    title: i18n?.metaTitle ?? 'Icebreaker Question Generator | Free Prompt Tool',
    description: i18n?.metaDescription ?? 'Generate random icebreaker questions for teams, classes, and parties.',
    path: `/${params.locale}/icebreaker-question-generator`,
    locale: params.locale
  })
}

export default function IcebreakerQuestionGeneratorPage({ params }: { params: { locale: string } }) {
  const base = toolContent['icebreaker-question-generator']
  const i18n = getToolI18n('icebreaker-question-generator', params.locale)
  const content = i18n ? { ...base, title: i18n.title, subtitle: i18n.subtitle } : base
  const path = `/${params.locale}/icebreaker-question-generator`

  return (
    <ToolPageShell
      locale={params.locale}
      content={content}
      tool={<IcebreakerQuestionTool />}
      faqJsonLd={faqSchema(content.faqs)}
      softwareJsonLd={softwareSchema('Icebreaker Question Generator', path)}
    />
  )
}