import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { DM_Sans, Space_Grotesk } from 'next/font/google'
import { siteConfig, organizationSchema } from '@/lib/seo'

const bodyFont = DM_Sans({ subsets: ['latin'], variable: '--font-body' })
const displayFont = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' })

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.baseUrl)
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT

  return (
    <html lang="en" data-theme="dark" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <head>
        {/* AdSense 스크립트 — head에 전역 1회만 로드 */}
        {adsenseClient && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body>
        {/* 테마 깜빡임 방지 — 인라인 스크립트로 즉시 적용 */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{const t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='light'?'light':'dark'}catch(e){document.documentElement.dataset.theme='dark'}"
          }}
        />
        {/* Organization JSON-LD — 사이트 전체 브랜드 신호 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        {children}
      </body>
    </html>
  )
}
