import type { Metadata } from 'next'
import { TeamGeneratorTool } from '@/components/tools/TeamGeneratorTool'
import { ToolPageShell } from '@/components/layout/ToolPageShell'
import { toolContent } from '@/lib/content/tools'
import { buildMeta, faqSchema, softwareSchema } from '@/lib/seo'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return buildMeta({
    title: 'Team Generator | Free Random Group Splitter',
    description: 'Generate random teams from a name list for classes, workshops, and games.',
    path: `/${params.locale}/team-generator`,
    locale: params.locale
  })
}

export default function TeamGeneratorPage({ params }: { params: { locale: string } }) {
  const content = toolContent['team-generator']
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