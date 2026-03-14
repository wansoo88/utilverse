import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { CookieBanner } from '@/components/common/CookieBanner'
import { CursorAura } from '@/components/common/CursorAura'
import { isLocale, locales, type Locale } from '@/lib/i18n'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function LocaleLayout({
  children,
  params
}: {
  children: ReactNode
  params: { locale: string }
}) {
  if (!isLocale(params.locale)) {
    notFound()
  }

  const locale = params.locale as Locale
  const rtl = locale === 'ar'

  return (
    <div lang={locale} dir={rtl ? 'rtl' : 'ltr'}>
      {/* html 요소의 lang/dir 속성을 로케일에 맞게 즉시 업데이트 */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang='${locale}';document.documentElement.dir='${rtl ? 'rtl' : 'ltr'}'`
        }}
      />
      <main className="container-page" style={{ paddingBottom: 0 }}>
        <Header locale={locale} />
      </main>
      {children}
      <main className="container-page" style={{ paddingTop: 0 }}>
        <Footer locale={locale} />
      </main>
      <CookieBanner locale={locale} />
      <CursorAura />
    </div>
  )
}