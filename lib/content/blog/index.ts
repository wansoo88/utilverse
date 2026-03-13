import type { BlogPost, BlogCategory } from './types'
import { guidePosts as enGuides } from './en/guides'
import { toolPosts as enTools } from './en/tools'
import { gamePosts as enGames } from './en/games'
import { funPosts as enFun } from './en/fun'

import { guidePosts as esGuides } from './es/guides'
import { toolPosts as esTools } from './es/tools'
import { gamePosts as esGames } from './es/games'
import { funPosts as esFun } from './es/fun'

import { guidePosts as ptGuides } from './pt/guides'
import { toolPosts as ptTools } from './pt/tools'
import { gamePosts as ptGames } from './pt/games'
import { funPosts as ptFun } from './pt/fun'

import { guidePosts as hiGuides } from './hi/guides'
import { toolPosts as hiTools } from './hi/tools'
import { gamePosts as hiGames } from './hi/games'
import { funPosts as hiFun } from './hi/fun'

import { guidePosts as arGuides } from './ar/guides'
import { toolPosts as arTools } from './ar/tools'
import { gamePosts as arGames } from './ar/games'
import { funPosts as arFun } from './ar/fun'

import { guidePosts as trGuides } from './tr/guides'
import { toolPosts as trTools } from './tr/tools'
import { gamePosts as trGames } from './tr/games'
import { funPosts as trFun } from './tr/fun'

export const allBlogPosts: BlogPost[] = [
  ...enGuides,
  ...enTools,
  ...enGames,
  ...enFun,
]

const localePostsMap: Record<string, BlogPost[]> = {
  en: [...enGuides, ...enTools, ...enGames, ...enFun],
  es: [...esGuides, ...esTools, ...esGames, ...esFun],
  pt: [...ptGuides, ...ptTools, ...ptGames, ...ptFun],
  hi: [...hiGuides, ...hiTools, ...hiGames, ...hiFun],
  ar: [...arGuides, ...arTools, ...arGames, ...arFun],
  tr: [...trGuides, ...trTools, ...trGames, ...trFun],
}

export function getBlogPostsByLocale(locale: string): BlogPost[] {
  return localePostsMap[locale] ?? localePostsMap['en']
}

export function getBlogPost(slug: string, locale = 'en'): BlogPost | undefined {
  return getBlogPostsByLocale(locale).find((p) => p.slug === slug)
}

export function getBlogPostsByCategory(category: BlogCategory, locale = 'en'): BlogPost[] {
  return getBlogPostsByLocale(locale).filter((p) => p.category === category)
}

export function getRelatedPosts(slug: string, locale = 'en', size = 3): BlogPost[] {
  const post = getBlogPost(slug, locale)
  if (!post) return getBlogPostsByLocale(locale).slice(0, size)
  const bySlug = post.relatedSlugs
    .map((s) => getBlogPost(s, locale))
    .filter(Boolean) as BlogPost[]
  if (bySlug.length >= size) return bySlug.slice(0, size)
  const fallback = getBlogPostsByLocale(locale).filter(
    (p) => p.slug !== slug && !bySlug.find((r) => r.slug === p.slug)
  )
  return [...bySlug, ...fallback].slice(0, size)
}

export type LinkItem = { href: string; label: string }

const toolLinks: LinkItem[] = [
  { href: '/coin-flip', label: 'Coin Flip' },
  { href: '/dice-roller', label: 'Dice Roller' },
  { href: '/spin-the-wheel', label: 'Spin the Wheel' },
  { href: '/yes-or-no', label: 'Yes or No Generator' },
  { href: '/random-number-generator', label: 'Random Number Generator' },
  { href: '/random-name-picker', label: 'Random Name Picker' },
  { href: '/team-generator', label: 'Team Generator' },
  { href: '/random-food-picker', label: 'Random Food Picker' },
  { href: '/lottery-number-generator', label: 'Lottery Number Generator' },
  { href: '/random-date-generator', label: 'Random Date Generator' },
]

export function getRelatedToolsBySlug(slug: string): LinkItem[] {
  const post = getBlogPost(slug)
  if (post?.relatedToolHrefs?.length) {
    return post.relatedToolHrefs
      .map((href) => toolLinks.find((t) => t.href === href))
      .filter(Boolean) as LinkItem[]
  }
  if (slug.includes('coin')) return [toolLinks[0], toolLinks[4], toolLinks[2]]
  if (slug.includes('dice') || slug.includes('dnd')) return [toolLinks[1], toolLinks[0], toolLinks[4]]
  if (slug.includes('team') || slug.includes('teacher') || slug.includes('classroom')) return [toolLinks[5], toolLinks[6], toolLinks[2]]
  if (slug.includes('wheel') || slug.includes('streamer') || slug.includes('party')) return [toolLinks[2], toolLinks[5], toolLinks[4]]
  if (slug.includes('food') || slug.includes('eat')) return [toolLinks[7], toolLinks[2], toolLinks[3]]
  if (slug.includes('lottery')) return [toolLinks[8], toolLinks[4], toolLinks[1]]
  return [toolLinks[0], toolLinks[2], toolLinks[4]]
}

export function getRelatedPostsByToolTitle(title: string, size = 3): BlogPost[] {
  const lower = title.toLowerCase()
  const keywords = ['coin', 'dice', 'wheel', 'name', 'team', 'random', 'yes', 'number', 'food', 'lottery']
  const hit = keywords.find((k) => lower.includes(k))
  if (!hit) return allBlogPosts.slice(0, size)
  const matched = allBlogPosts.filter((p) => p.slug.includes(hit) || p.title.toLowerCase().includes(hit))
  const fallback = allBlogPosts.filter((p) => !matched.includes(p))
  return [...matched, ...fallback].slice(0, size)
}

export function blogFaq(post: BlogPost) {
  if (post.faqs?.length) return post.faqs
  return [
    { question: `Can I use the ideas from "${post.title}" for team decisions?`, answer: 'Yes. The framework scales from personal choices to lightweight team decisions when process rules are agreed first.' },
    { question: 'Do I need advanced statistics to apply this?', answer: 'No. Most methods focus on practical structure, constraints, and transparent tie-breakers.' },
    { question: 'Which tool should I try first?', answer: 'Start with Coin Flip or Random Number Generator for simple tie-break use cases, then expand to wheel and team tools.' },
  ]
}

export const blogPosts = allBlogPosts
export { type BlogPost, type BlogCategory }
export { blogCategories } from './types'

