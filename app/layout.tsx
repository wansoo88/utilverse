import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { DM_Sans, Space_Grotesk } from 'next/font/google'
import { siteConfig } from '@/lib/seo'

const bodyFont = DM_Sans({ subsets: ['latin'], variable: '--font-body' })
const displayFont = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' })

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.baseUrl)
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{const t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='light'?'light':'dark'}catch(e){document.documentElement.dataset.theme='dark'}"
          }}
        />
        {children}
      </body>
    </html>
  )
}
