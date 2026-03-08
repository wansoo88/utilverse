import type { Metadata } from 'next'
import { IcebreakerQuestionTool } from '@/components/tools/IcebreakerQuestionTool'
import { ToolPageShell } from '@/components/layout/ToolPageShell'
import { toolContent } from '@/lib/content/tools'
import { buildMeta, faqSchema, softwareSchema } from '@/lib/seo'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return buildMeta({
    title: 'Icebreaker Question Generator | Free Prompt Tool',
    description: 'Generate random icebreaker questions for teams, classes, and parties.',
    path: `/${params.locale}/icebreaker-question-generator`
  })
}

export default function IcebreakerQuestionGeneratorPage({ params }: { params: { locale: string } }) {
  const content = toolContent['icebreaker-question-generator']
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