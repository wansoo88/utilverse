import type { Metadata } from 'next'
import { RandomDateGeneratorTool } from '@/components/tools/RandomDateGeneratorTool'
import { ToolPageShell } from '@/components/layout/ToolPageShell'
import { toolContent } from '@/lib/content/tools'
import { buildMeta, faqSchema, softwareSchema } from '@/lib/seo'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return buildMeta({
    title: 'Random Date Generator | Free Date Picker',
    description: 'Generate random dates inside a custom date range instantly.',
    path: `/${params.locale}/random-date-generator`,
    locale: params.locale
  })
}

export default function RandomDateGeneratorPage({ params }: { params: { locale: string } }) {
  const content = toolContent['random-date-generator']
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