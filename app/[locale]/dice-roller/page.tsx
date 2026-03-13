import type { Metadata } from 'next'
import { DiceRollerTool } from '@/components/tools/DiceRollerTool'
import { ToolPageShell } from '@/components/layout/ToolPageShell'
import { toolContent } from '@/lib/content/tools'
import { buildMeta, faqSchema, softwareSchema } from '@/lib/seo'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return buildMeta({
    title: 'Dice Roller | Free D4-D20 Dice Tool',
    description: 'Roll D4 to D20 dice online with multi-roll support and history.',
    path: `/${params.locale}/dice-roller`,
    locale: params.locale
  })
}

export default function DiceRollerPage({ params }: { params: { locale: string } }) {
  const content = toolContent['dice-roller']
  const path = `/${params.locale}/dice-roller`

  return (
    <ToolPageShell
      locale={params.locale}
      content={content}
      tool={<DiceRollerTool />}
      faqJsonLd={faqSchema(content.faqs)}
      softwareJsonLd={softwareSchema('Dice Roller Tool', path)}
    />
  )
}