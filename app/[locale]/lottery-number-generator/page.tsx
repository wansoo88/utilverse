import type { Metadata } from 'next'
import { LotteryNumberGeneratorTool } from '@/components/tools/LotteryNumberGeneratorTool'
import { ToolPageShell } from '@/components/layout/ToolPageShell'
import { toolContent } from '@/lib/content/tools'
import { buildMeta, faqSchema, softwareSchema } from '@/lib/seo'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return buildMeta({
    title: 'Lottery Number Generator | Free Random Number Set',
    description: 'Generate unique lottery-style number combinations quickly.',
    path: `/${params.locale}/lottery-number-generator`
  })
}

export default function LotteryNumberGeneratorPage({ params }: { params: { locale: string } }) {
  const content = toolContent['lottery-number-generator']
  const path = `/${params.locale}/lottery-number-generator`

  return (
    <ToolPageShell
      locale={params.locale}
      content={content}
      tool={<LotteryNumberGeneratorTool />}
      faqJsonLd={faqSchema(content.faqs)}
      softwareJsonLd={softwareSchema('Lottery Number Generator', path)}
    />
  )
}