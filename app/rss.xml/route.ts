import { NextResponse } from 'next/server'
import { allBlogPosts } from '@/lib/content/blog'
import { baseUrl, siteUrl } from '@/lib/site'

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const posts = allBlogPosts
    .slice()
    .sort((a, b) => (a.publishedDate > b.publishedDate ? -1 : 1))

  const items = posts
    .map((post) => {
      const url = `${baseUrl}/en/blog/${post.slug}`
      const pubDate = new Date(post.publishedDate).toUTCString()
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${pubDate}</pubDate>
      <author>hello@utilverse.info (${escapeXml(post.author)})</author>
      <category>${escapeXml(post.category)}</category>
    </item>`
    })
    .join('')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Random Decision Blog</title>
    <link>${baseUrl}/en/blog</link>
    <description>Decision guides, tool tutorials, games and trivia about randomness and decision-making.</description>
    <language>en</language>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <managingEditor>hello@utilverse.info</managingEditor>
    <webMaster>hello@utilverse.info</webMaster>
    <generator>Random Decision (utilverse.info)</generator>
    <image>
      <url>${siteUrl}/og-default.png</url>
      <title>Random Decision Blog</title>
      <link>${baseUrl}/en/blog</link>
    </image>${items}
  </channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400'
    }
  })
}
