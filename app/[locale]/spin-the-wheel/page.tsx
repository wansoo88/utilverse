import type { Metadata } from 'next'
import { SpinWheelTool } from '@/components/tools/SpinWheelTool'
import { ToolPageShell } from '@/components/layout/ToolPageShell'
import { toolContent } from '@/lib/content/tools'
import { getToolI18n } from '@/lib/content/tools-i18n'
import { buildMeta, faqSchema, softwareSchema } from '@/lib/seo'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const i18n = getToolI18n('spin-the-wheel', params.locale)
  return buildMeta({
    title: i18n?.metaTitle ?? 'Spin the Wheel — Free Custom Random Picker',
    description: i18n?.metaDescription ?? "Add your options and spin to pick a random winner instantly. Custom wheel, saves entries, confetti on win. Free, no signup. Perfect for groups & raffles.",
    path: `/${params.locale}/spin-the-wheel`,
    locale: params.locale
  })
}

export default function SpinTheWheelPage({ params }: { params: { locale: string } }) {
  const base = toolContent['spin-the-wheel']
  const i18n = getToolI18n('spin-the-wheel', params.locale)
  const content = i18n ? { ...base, title: i18n.title, subtitle: i18n.subtitle } : base
  const path = `/${params.locale}/spin-the-wheel`

  return (
    <ToolPageShell
      locale={params.locale}
      content={content}
      tool={<SpinWheelTool />}
      faqJsonLd={faqSchema(content.faqs)}
      softwareJsonLd={softwareSchema('Spin the Wheel Tool', path)}
    />
  )
}