import type { Metadata } from 'next'
import { YesNoTool } from '@/components/tools/YesNoTool'
import { ToolPageShell } from '@/components/layout/ToolPageShell'
import { toolContent } from '@/lib/content/tools'
import { buildMeta, faqSchema, softwareSchema } from '@/lib/seo'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return buildMeta({
    title: 'Yes or No Generator | Free Decision Tool',
    description: 'Generate random yes/no answers for quick decisions and games.',
    path: `/${params.locale}/yes-or-no`
  })
}

export default function YesOrNoPage({ params }: { params: { locale: string } }) {
  const content = toolContent['yes-or-no']
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