import type { MetadataRoute } from 'next'
import { locales } from '@/lib/i18n'
import { blogPosts } from '@/lib/content/blog'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://utilverse.info/randomdecision'

const toolPaths = [
  '',
  '/coin-flip',
  '/dice-roller',
  '/spin-the-wheel',
  '/yes-or-no',
  '/random-number-generator',
  '/random-name-picker',
  '/team-generator',
  '/random-letter',
  '/random-color',
  '/countdown-timer-random',
  '/blog',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms-of-service'
]

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = locales.flatMap((locale) =>
    toolPaths.map((path) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: path === '' ? 'weekly' : 'monthly',
      priority: path === '' ? 1 : 0.7
    }))
  )

  const posts = locales.flatMap((locale) =>
    blogPosts.map((post) => ({
      url: `${baseUrl}/${locale}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.65
    }))
  )

  return [...pages, ...posts]
}