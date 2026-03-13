import type { Metadata } from 'next'
import { RandomLetterTool } from '@/components/tools/RandomLetterTool'
import { ToolPageShell } from '@/components/layout/ToolPageShell'
import { toolContent } from '@/lib/content/tools'
import { buildMeta, faqSchema, softwareSchema } from '@/lib/seo'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return buildMeta({
    title: 'Random Letter Generator | Free A-Z Picker',
    description: 'Generate random letters for games, writing prompts, and classroom exercises.',
    path: `/${params.locale}/random-letter`,
    locale: params.locale
  })
}

export default function RandomLetterPage({ params }: { params: { locale: string } }) {
  const content = toolContent['random-letter']
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