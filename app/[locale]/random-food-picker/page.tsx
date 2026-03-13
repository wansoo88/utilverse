import type { Metadata } from 'next'
import { RandomFoodPickerTool } from '@/components/tools/RandomFoodPickerTool'
import { ToolPageShell } from '@/components/layout/ToolPageShell'
import { toolContent } from '@/lib/content/tools'
import { getToolI18n } from '@/lib/content/tools-i18n'
import { buildMeta, faqSchema, softwareSchema } from '@/lib/seo'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const i18n = getToolI18n('random-food-picker', params.locale)
  return buildMeta({
    title: i18n?.metaTitle ?? 'Random Food Picker | What Should I Eat?',
    description: i18n?.metaDescription ?? 'Pick a meal randomly from your custom food list in one click.',
    path: `/${params.locale}/random-food-picker`,
    locale: params.locale
  })
}

export default function RandomFoodPickerPage({ params }: { params: { locale: string } }) {
  const base = toolContent['random-food-picker']
  const i18n = getToolI18n('random-food-picker', params.locale)
  const content = i18n ? { ...base, title: i18n.title, subtitle: i18n.subtitle } : base
  const path = `/${params.locale}/random-food-picker`

  return (
    <ToolPageShell
      locale={params.locale}
      content={content}
      tool={<RandomFoodPickerTool />}
      faqJsonLd={faqSchema(content.faqs)}
      softwareJsonLd={softwareSchema('Random Food Picker', path)}
    />
  )
}