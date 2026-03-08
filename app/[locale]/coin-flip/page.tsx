import type { Metadata } from 'next'
import { CoinFlipTool } from '@/components/tools/CoinFlipTool'
import { ToolPageShell } from '@/components/layout/ToolPageShell'
import { toolContent } from '@/lib/content/tools'
import { buildMeta, faqSchema, softwareSchema } from '@/lib/seo'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return buildMeta({
    title: 'Coin Flip | Free Online Coin Toss Tool',
    description: 'Flip a virtual coin instantly with history and mobile-friendly controls.',
    path: `/${params.locale}/coin-flip`
  })
}

export default function CoinFlipPage({ params }: { params: { locale: string } }) {
  const content = toolContent['coin-flip']
  const path = `/${params.locale}/coin-flip`

  return (
    <ToolPageShell
      locale={params.locale}
      content={content}
      tool={<CoinFlipTool />}
      faqJsonLd={faqSchema(content.faqs)}
      softwareJsonLd={softwareSchema('Coin Flip Tool', path)}
    />
  )
}