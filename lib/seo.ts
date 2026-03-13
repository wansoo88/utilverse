import type { Metadata } from 'next'
import { baseUrl } from '@/lib/site'
import { locales } from '@/lib/i18n'

export const siteConfig = {
  name: 'Random Decision',
  description:
    'Free online random decision tools: coin flip, dice roller, wheel spinner, yes or no, and random number generator.',
  baseUrl
}

export function buildMeta({
  title,
  description,
  path,
  locale,
  image
}: {
  title: string
  description: string
  path: string
  locale?: string
  image?: string
}): Metadata {
  const url = `${siteConfig.baseUrl}${path}`
  const ogImage = image ?? `${siteConfig.baseUrl}/og-default.png`

  // hreflang alternates: locale가 있으면 모든 언어 버전 생성
  let alternates: Metadata['alternates'] = { canonical: url }
  if (locale) {
    // path에서 로케일 prefix를 제거해서 공통 suffix 추출
    // path 형식: /{locale}/... → /{otherLocale}/...
    const suffix = path.replace(new RegExp(`^/${locale}`), '')
    const languages: Record<string, string> = {}
    for (const loc of locales) {
      languages[loc] = `${siteConfig.baseUrl}/${loc}${suffix}`
    }
    languages['x-default'] = `${siteConfig.baseUrl}/en${suffix}`
    alternates = { canonical: url, languages }
  }

  return {
    title,
    description,
    alternates,
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage]
    }
  }
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.baseUrl,
    logo: `${siteConfig.baseUrl}/og-default.png`,
    sameAs: []
  }
}

export function softwareSchema(name: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0' },
    url: `${siteConfig.baseUrl}${path}`
  }
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  }
}

export function blogPostingSchema(params: {
  title: string
  description: string
  locale: string
  slug: string
  publishedDate?: string
  updatedDate?: string
  author?: string
  image?: string
}) {
  const url = `${siteConfig.baseUrl}/${params.locale}/blog/${params.slug}`
  const image = params.image ?? `${siteConfig.baseUrl}/og-default.png`
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: params.title,
    description: params.description,
    image,
    inLanguage: params.locale,
    ...(params.publishedDate && { datePublished: params.publishedDate }),
    ...(params.updatedDate && { dateModified: params.updatedDate }),
    author: {
      '@type': 'Person',
      name: params.author ?? siteConfig.name
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: { '@type': 'ImageObject', url: `${siteConfig.baseUrl}/og-default.png` }
    },
    mainEntityOfPage: url,
    url
  }
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.baseUrl}${item.path}`
    }))
  }
}

export function itemListSchema(items: Array<{ name: string; path: string }>, name: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${siteConfig.baseUrl}${item.path}`,
      name: item.name
    }))
  }
}

export function collectionPageSchema(params: { name: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: params.name,
    description: params.description,
    url: `${siteConfig.baseUrl}${params.path}`
  }
}
