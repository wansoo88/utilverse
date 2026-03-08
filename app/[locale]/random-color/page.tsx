import type { Metadata } from 'next'
import { RandomColorTool } from '@/components/tools/RandomColorTool'
import { ToolPageShell } from '@/components/layout/ToolPageShell'
import { toolContent } from '@/lib/content/tools'
import { buildMeta, faqSchema, softwareSchema } from '@/lib/seo'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return buildMeta({
    title: 'Random Color Generator | Free HEX and RGB Tool',
    description: 'Generate random colors with HEX and RGB values plus instant preview.',
    path: `/${params.locale}/random-color`
  })
}

export default function RandomColorPage({ params }: { params: { locale: string } }) {
  const content = toolContent['random-color']
  const path = `/${params.locale}/random-color`

  return (
    <ToolPageShell
      locale={params.locale}
      content={content}
      tool={<RandomColorTool />}
      faqJsonLd={faqSchema(content.faqs)}
      softwareJsonLd={softwareSchema('Random Color Generator', path)}
    />
  )
}