import type { Metadata } from 'next'
import { DiceRollerTool } from '@/components/tools/DiceRollerTool'
import { ToolPageShell } from '@/components/layout/ToolPageShell'
import { toolContent } from '@/lib/content/tools'
import { getToolI18n } from '@/lib/content/tools-i18n'
import { buildMeta, faqSchema, softwareSchema } from '@/lib/seo'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const i18n = getToolI18n('dice-roller', params.locale)
  return buildMeta({
    title: i18n?.metaTitle ?? 'Dice Roller | Free D4-D20 Dice Tool',
    description: i18n?.metaDescription ?? 'Roll D4 to D20 dice online with multi-roll support and history.',
    path: `/${params.locale}/dice-roller`,
    locale: params.locale
  })
}

export default function DiceRollerPage({ params }: { params: { locale: string } }) {
  const base = toolContent['dice-roller']
  const i18n = getToolI18n('dice-roller', params.locale)
  const content = i18n ? { ...base, title: i18n.title, subtitle: i18n.subtitle } : base
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