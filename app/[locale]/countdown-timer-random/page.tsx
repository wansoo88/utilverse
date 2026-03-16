import type { Metadata } from 'next'
import { CountdownTimerRandomTool } from '@/components/tools/CountdownTimerRandomTool'
import { ToolPageShell } from '@/components/layout/ToolPageShell'
import { toolContent } from '@/lib/content/tools'
import { getToolI18n } from '@/lib/content/tools-i18n'
import { buildMeta, faqSchema, softwareSchema } from '@/lib/seo'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const i18n = getToolI18n('countdown-timer-random', params.locale)
  return buildMeta({
    title: i18n?.metaTitle ?? 'Random Countdown Timer — Free Surprise Timer',
    description: i18n?.metaDescription ?? "Set a countdown timer with a random duration — perfect for games, classrooms & focus sprints. Free, no signup. Surprise yourself!",
    path: `/${params.locale}/countdown-timer-random`,
    locale: params.locale
  })
}

export default function CountdownTimerRandomPage({ params }: { params: { locale: string } }) {
  const base = toolContent['countdown-timer-random']
  const i18n = getToolI18n('countdown-timer-random', params.locale)
  const content = i18n ? { ...base, title: i18n.title, subtitle: i18n.subtitle } : base
  const path = `/${params.locale}/countdown-timer-random`

  return (
    <ToolPageShell
      locale={params.locale}
      content={content}
      tool={<CountdownTimerRandomTool />}
      faqJsonLd={faqSchema(content.faqs)}
      softwareJsonLd={softwareSchema('Countdown Timer Random Tool', path)}
    />
  )
}