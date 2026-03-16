import type { Metadata } from 'next'
import { YesNoTool } from '@/components/tools/YesNoTool'
import { ToolPageShell } from '@/components/layout/ToolPageShell'
import { toolContent } from '@/lib/content/tools'
import { getToolI18n } from '@/lib/content/tools-i18n'
import { buildMeta, faqSchema, softwareSchema } from '@/lib/seo'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const i18n = getToolI18n('yes-or-no', params.locale)
  return buildMeta({
    title: i18n?.metaTitle ?? 'Yes or No Generator — Instant Free Answer',
    description: i18n?.metaDescription ?? "Get a random yes or no answer instantly. Ask any question and let fate decide. Dramatic reveal animation. Free, no signup. Great for quick decisions.",
    path: `/${params.locale}/yes-or-no`,
    locale: params.locale
  })
}

export default function YesOrNoPage({ params }: { params: { locale: string } }) {
  const base = toolContent['yes-or-no']
  const i18n = getToolI18n('yes-or-no', params.locale)
  const content = i18n ? { ...base, title: i18n.title, subtitle: i18n.subtitle } : base
  const path = `/${params.locale}/yes-or-no`

  return (
    <ToolPageShell
      locale={params.locale}
      content={content}
      tool={<YesNoTool />}
      faqJsonLd={faqSchema(content.faqs)}
      softwareJsonLd={softwareSchema('Yes or No Tool', path)}
    />
  )
}