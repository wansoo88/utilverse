import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.baseUrl)
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
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