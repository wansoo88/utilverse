import type { MetadataRoute } from 'next'
import { baseUrl } from '@/lib/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/'
      },
      // AdSense 수익 최적화 — 광고 봇 명시적 허용
      {
        userAgent: 'Mediapartners-Google',
        allow: '/'
      },
      {
        userAgent: 'AdsBot-Google',
        allow: '/'
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`
  }
}
