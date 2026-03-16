import type { Metadata } from 'next'
import { TeamGeneratorTool } from '@/components/tools/TeamGeneratorTool'
import { ToolPageShell } from '@/components/layout/ToolPageShell'
import { toolContent } from '@/lib/content/tools'
import { getToolI18n } from '@/lib/content/tools-i18n'
import { buildMeta, faqSchema, softwareSchema } from '@/lib/seo'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const i18n = getToolI18n('team-generator', params.locale)
  return buildMeta({
    title: i18n?.metaTitle ?? 'Team Generator — Free Random Group Splitter',
    description: i18n?.metaDescription ?? "Split any name list into random, balanced teams in seconds. Set team size or count. Free, no signup. Perfect for sports, classrooms & game nights.",
    path: `/${params.locale}/team-generator`,
    locale: params.locale
  })
}

export default function TeamGeneratorPage({ params }: { params: { locale: string } }) {
  const base = toolContent['team-generator']
  const i18n = getToolI18n('team-generator', params.locale)
  const content = i18n ? { ...base, title: i18n.title, subtitle: i18n.subtitle } : base
  const path = `/${params.locale}/team-generator`

  return (
    <ToolPageShell
      locale={params.locale}
      content={content}
      tool={<TeamGeneratorTool />}
      faqJsonLd={faqSchema(content.faqs)}
      softwareJsonLd={softwareSchema('Team Generator Tool', path)}
    />
  )
}