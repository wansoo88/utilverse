import type { Metadata } from 'next'
import { RandomNamePickerTool } from '@/components/tools/RandomNamePickerTool'
import { ToolPageShell } from '@/components/layout/ToolPageShell'
import { toolContent } from '@/lib/content/tools'
import { buildMeta, faqSchema, softwareSchema } from '@/lib/seo'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return buildMeta({
    title: 'Random Name Picker | Free Online Tool',
    description: 'Pick random names instantly for classrooms, raffles, and group activities.',
    path: `/${params.locale}/random-name-picker`
  })
}

export default function RandomNamePickerPage({ params }: { params: { locale: string } }) {
  const content = toolContent['random-name-picker']
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