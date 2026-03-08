import type { Metadata } from 'next'
import { RandomNumberTool } from '@/components/tools/RandomNumberTool'
import { ToolPageShell } from '@/components/layout/ToolPageShell'
import { toolContent } from '@/lib/content/tools'
import { buildMeta, faqSchema, softwareSchema } from '@/lib/seo'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return buildMeta({
    title: 'Random Number Generator | Free Online Tool',
    description: 'Generate random integers with range, count, and unique mode options.',
    path: `/${params.locale}/random-number-generator`
  })
}

export default function RandomNumberPage({ params }: { params: { locale: string } }) {
  const content = toolContent['random-number-generator']
  const path = `/${params.locale}/random-number-generator`

  return (
    <ToolPageShell
      locale={params.locale}
      content={content}
      tool={<RandomNumberTool />}
      faqJsonLd={faqSchema(content.faqs)}
      softwareJsonLd={softwareSchema('Random Number Generator', path)}
    />
  )
}