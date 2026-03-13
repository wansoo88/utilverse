import type { Metadata } from 'next'
import { CoinFlipTool } from '@/components/tools/CoinFlipTool'
import { ToolPageShell } from '@/components/layout/ToolPageShell'
import { toolContent } from '@/lib/content/tools'
import { getToolI18n } from '@/lib/content/tools-i18n'
import { buildMeta, faqSchema, softwareSchema } from '@/lib/seo'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const i18n = getToolI18n('coin-flip', params.locale)
  return buildMeta({
    title: i18n?.metaTitle ?? 'Coin Flip | Free Online Coin Toss Tool',
    description: i18n?.metaDescription ?? 'Flip a virtual coin instantly with history and mobile-friendly controls.',
    path: `/${params.locale}/coin-flip`,
    locale: params.locale
  })
}

export default function CoinFlipPage({ params }: { params: { locale: string } }) {
  const base = toolContent['coin-flip']
  const i18n = getToolI18n('coin-flip', params.locale)
  const content = i18n ? { ...base, title: i18n.title, subtitle: i18n.subtitle } : base
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