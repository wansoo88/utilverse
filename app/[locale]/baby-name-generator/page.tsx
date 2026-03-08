import type { Metadata } from 'next'
import { BabyNameGeneratorTool } from '@/components/tools/BabyNameGeneratorTool'
import { ToolPageShell } from '@/components/layout/ToolPageShell'
import { toolContent } from '@/lib/content/tools'
import { buildMeta, faqSchema, softwareSchema } from '@/lib/seo'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return buildMeta({
    title: 'Baby Name Generator | Free Name Ideas Tool',
    description: 'Generate random baby name ideas by category in one click.',
    path: `/${params.locale}/baby-name-generator`
  })
}

export default function BabyNameGeneratorPage({ params }: { params: { locale: string } }) {
  const content = toolContent['baby-name-generator']
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