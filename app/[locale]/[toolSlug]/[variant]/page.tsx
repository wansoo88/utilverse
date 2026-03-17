import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'
import { locales } from '@/lib/i18n'
import { toolVariants, getVariant, getToolVariants } from '@/lib/content/variants'
import { toolContent } from '@/lib/content/tools'
import { buildMeta, faqSchema, softwareSchema } from '@/lib/seo'
import { ToolPageShell } from '@/components/layout/ToolPageShell'
import { DiceRollerTool } from '@/components/tools/DiceRollerTool'
import { RandomNumberTool } from '@/components/tools/RandomNumberTool'
import { CoinFlipTool } from '@/components/tools/CoinFlipTool'
import { RandomNamePickerTool } from '@/components/tools/RandomNamePickerTool'
import { baseUrl } from '@/lib/site'

type Props = { params: { locale: string; toolSlug: string; variant: string } }

function getToolComponent(
  toolSlug: string,
  config: Record<string, unknown>
): ReactNode {
  switch (toolSlug) {
    case 'dice-roller':
      return (
        <DiceRollerTool
          initialSides={config.sides as number}
          initialCount={config.count as number}
        />
      )
    case 'random-number-generator':
      return (
        <RandomNumberTool
          initialMin={config.min as number}
          initialMax={config.max as number}
        />
      )
    case 'coin-flip':
      return (
        <CoinFlipTool
          initialHeadsLabel={config.headsLabel as string | undefined}
          initialTailsLabel={config.tailsLabel as string | undefined}
        />
      )
    case 'random-name-picker':
      return (
        <RandomNamePickerTool
          initialRaw={config.initialRaw as string | undefined}
        />
      )
    default:
      return null
  }
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    Object.keys(toolVariants).flatMap((toolSlug) =>
      (toolVariants[toolSlug] ?? []).map((v) => ({
        locale,
        toolSlug,
        variant: v.slug
      }))
    )
  )
}

export function generateMetadata({ params }: Props): Metadata {
  const variant = getVariant(params.toolSlug, params.variant)
  if (!variant) return {}

  const path = `/${params.locale}/${params.toolSlug}/${params.variant}`
  return buildMeta({
    title: variant.metaTitle,
    description: variant.metaDescription,
    path,
    locale: params.locale
  })
}

export default function VariantPage({ params }: Props) {
  const { locale, toolSlug, variant: variantSlug } = params
  const variant = getVariant(toolSlug, variantSlug)

  if (!variant) notFound()

  const base = toolContent[toolSlug as keyof typeof toolContent]
  if (!base) notFound()

  const toolNode = getToolComponent(toolSlug, variant.initialConfig)
  if (!toolNode) notFound()

  const content = {
    ...base,
    title: variant.label,
    subtitle: variant.metaDescription
  }

  const path = `/${locale}/${toolSlug}/${variantSlug}`

  // sibling variants for "Try These Variations" section
  const siblings = getToolVariants(toolSlug)
    .filter((v) => v.slug !== variantSlug)
    .map((v) => ({
      label: v.label,
      href: `/${locale}/${toolSlug}/${v.slug}`
    }))

  // add link back to the main tool page
  const variantLinks = [
    { label: `${base.title} (main)`, href: `/${locale}/${toolSlug}` },
    ...siblings
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: `${baseUrl}/${locale}`
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: base.title,
                item: `${baseUrl}/${locale}/${toolSlug}`
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: variant.label,
                item: `${baseUrl}${path}`
              }
            ]
          })
        }}
      />
      <ToolPageShell
        locale={locale}
        content={content}
        tool={toolNode}
        faqJsonLd={faqSchema(content.faqs)}
        softwareJsonLd={softwareSchema(variant.label, path)}
        variantLinks={variantLinks}
      />
    </>
  )
}
