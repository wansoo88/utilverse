import type { Metadata } from 'next'
import { baseUrl } from '@/lib/site'

export const siteConfig = {
  name: 'Random Decision',
  description:
    'Free online random decision tools: coin flip, dice roller, wheel spinner, yes or no, and random number generator.',
  baseUrl
}

export function buildMeta({
  title,
  description,
  path
}: {
  title: string
  description: string
  path: string
}): Metadata {
  const url = `${siteConfig.baseUrl}${path}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
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
}) {
  const url = `${siteConfig.baseUrl}/${params.locale}/blog/${params.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: params.title,
    description: params.description,
    inLanguage: params.locale,
    author: {
      '@type': 'Organization',
      name: siteConfig.name
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name
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
