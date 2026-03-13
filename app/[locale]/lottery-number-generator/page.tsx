import type { Metadata } from 'next'
import { LotteryNumberGeneratorTool } from '@/components/tools/LotteryNumberGeneratorTool'
import { ToolPageShell } from '@/components/layout/ToolPageShell'
import { toolContent } from '@/lib/content/tools'
import { getToolI18n } from '@/lib/content/tools-i18n'
import { buildMeta, faqSchema, softwareSchema } from '@/lib/seo'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const i18n = getToolI18n('lottery-number-generator', params.locale)
  return buildMeta({
    title: i18n?.metaTitle ?? 'Lottery Number Generator | Free Random Number Set',
    description: i18n?.metaDescription ?? 'Generate unique lottery-style number combinations quickly.',
    path: `/${params.locale}/lottery-number-generator`,
    locale: params.locale
  })
}

export default function LotteryNumberGeneratorPage({ params }: { params: { locale: string } }) {
  const base = toolContent['lottery-number-generator']
  const i18n = getToolI18n('lottery-number-generator', params.locale)
  const content = i18n ? { ...base, title: i18n.title, subtitle: i18n.subtitle } : base
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