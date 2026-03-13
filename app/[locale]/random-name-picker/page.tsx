import type { Metadata } from 'next'
import { RandomNamePickerTool } from '@/components/tools/RandomNamePickerTool'
import { ToolPageShell } from '@/components/layout/ToolPageShell'
import { toolContent } from '@/lib/content/tools'
import { getToolI18n } from '@/lib/content/tools-i18n'
import { buildMeta, faqSchema, softwareSchema } from '@/lib/seo'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const i18n = getToolI18n('random-name-picker', params.locale)
  return buildMeta({
    title: i18n?.metaTitle ?? 'Random Name Picker | Free Online Tool',
    description: i18n?.metaDescription ?? 'Pick random names instantly for classrooms, raffles, and group activities.',
    path: `/${params.locale}/random-name-picker`,
    locale: params.locale
  })
}

export default function RandomNamePickerPage({ params }: { params: { locale: string } }) {
  const base = toolContent['random-name-picker']
  const i18n = getToolI18n('random-name-picker', params.locale)
  const content = i18n ? { ...base, title: i18n.title, subtitle: i18n.subtitle } : base
  const path = `/${params.locale}/random-name-picker`

  return (
    <ToolPageShell
      locale={params.locale}
      content={content}
      tool={<RandomNamePickerTool />}
      faqJsonLd={faqSchema(content.faqs)}
      softwareJsonLd={softwareSchema('Random Name Picker', path)}
    />
  )
}