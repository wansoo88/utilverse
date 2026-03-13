import type { Metadata } from 'next'
import { CountdownTimerRandomTool } from '@/components/tools/CountdownTimerRandomTool'
import { ToolPageShell } from '@/components/layout/ToolPageShell'
import { toolContent } from '@/lib/content/tools'
import { buildMeta, faqSchema, softwareSchema } from '@/lib/seo'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return buildMeta({
    title: 'Countdown Timer Random | Free Unpredictable Timer Tool',
    description: 'Run random-duration countdown rounds for games, classes, and activities.',
    path: `/${params.locale}/countdown-timer-random`,
    locale: params.locale
  })
}

export default function CountdownTimerRandomPage({ params }: { params: { locale: string } }) {
  const content = toolContent['countdown-timer-random']
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