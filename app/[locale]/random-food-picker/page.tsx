import type { Metadata } from 'next'
import { RandomFoodPickerTool } from '@/components/tools/RandomFoodPickerTool'
import { ToolPageShell } from '@/components/layout/ToolPageShell'
import { toolContent } from '@/lib/content/tools'
import { buildMeta, faqSchema, softwareSchema } from '@/lib/seo'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return buildMeta({
    title: 'Random Food Picker | What Should I Eat?',
    description: 'Pick a meal randomly from your custom food list in one click.',
    path: `/${params.locale}/random-food-picker`
  })
}

export default function RandomFoodPickerPage({ params }: { params: { locale: string } }) {
  const content = toolContent['random-food-picker']
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