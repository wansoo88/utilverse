import type { Metadata } from 'next'
import { SpinWheelTool } from '@/components/tools/SpinWheelTool'
import { ToolPageShell } from '@/components/layout/ToolPageShell'
import { toolContent } from '@/lib/content/tools'
import { buildMeta, faqSchema, softwareSchema } from '@/lib/seo'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return buildMeta({
    title: 'Spin the Wheel | Free Random Picker',
    description: 'Create a custom random wheel and spin to pick a winner in seconds.',
    path: `/${params.locale}/spin-the-wheel`
  })
}

export default function SpinTheWheelPage({ params }: { params: { locale: string } }) {
  const content = toolContent['spin-the-wheel']
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