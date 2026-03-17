import { NextResponse } from 'next/server'
import { toolVariants } from '@/lib/content/variants'
import { locales } from '@/lib/i18n'
import { siteUrl, baseUrl } from '@/lib/site'

// IndexNow spec: https://www.indexnow.org/documentation
// Bing accepts submissions for itself and passes through to other engines.
// Verification: GET https://{host}/{key}.txt must return the key string.

const INDEXNOW_API = 'https://api.indexnow.org/indexnow'

function buildVariantUrls(): string[] {
  return locales.flatMap((locale) =>
    Object.keys(toolVariants).flatMap((toolSlug) =>
      (toolVariants[toolSlug] ?? []).map(
        (v) => `${baseUrl}/${locale}/${toolSlug}/${v.slug}`
      )
    )
  )
}

// POST /api/indexnow
// Body: { urls?: string[] }  — if omitted, submits all variant URLs
// Authorization: Bearer {INDEXNOW_KEY}
export async function POST(request: Request) {
  const key = process.env.INDEXNOW_KEY
  if (!key) {
    return NextResponse.json(
      { error: 'INDEXNOW_KEY environment variable is not set' },
      { status: 503 }
    )
  }

  // Simple auth check — caller must pass the same key as Bearer token
  const authHeader = request.headers.get('authorization') ?? ''
  if (authHeader !== `Bearer ${key}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let urls: string[]
  try {
    const body = await request.json().catch(() => ({}))
    urls = Array.isArray(body?.urls) ? body.urls : buildVariantUrls()
  } catch {
    urls = buildVariantUrls()
  }

  if (urls.length === 0) {
    return NextResponse.json({ error: 'No URLs to submit' }, { status: 400 })
  }

  // IndexNow accepts max 10,000 URLs per request — chunk just in case
  const chunks: string[][] = []
  for (let i = 0; i < urls.length; i += 10000) {
    chunks.push(urls.slice(i, i + 10000))
  }

  const host = new URL(siteUrl).hostname

  const results = await Promise.allSettled(
    chunks.map((chunk) =>
      fetch(INDEXNOW_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
          host,
          key,
          keyLocation: `https://${host}/${key}.txt`,
          urlList: chunk
        })
      })
    )
  )

  const responses = results.map((r, i) => {
    if (r.status === 'fulfilled') {
      return { chunk: i, status: r.value.status, ok: r.value.ok }
    }
    return { chunk: i, status: 0, ok: false, error: String(r.reason) }
  })

  const allOk = responses.every((r) => r.ok)

  return NextResponse.json(
    {
      submitted: urls.length,
      chunks: chunks.length,
      results: responses
    },
    { status: allOk ? 200 : 207 }
  )
}

// GET /api/indexnow — returns the list of URLs that would be submitted
export async function GET() {
  const key = process.env.INDEXNOW_KEY
  const urls = buildVariantUrls()
  return NextResponse.json({
    ready: !!key,
    keyConfigured: !!key,
    urlCount: urls.length,
    urls
  })
}
