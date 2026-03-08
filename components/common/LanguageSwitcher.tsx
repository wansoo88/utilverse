'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { localeLabels, locales, type Locale } from '@/lib/i18n'

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname()

  return (
    <div className="flex flex-wrap gap-2">
      {locales.map((item) => {
        const nextPath = pathname ? pathname.replace(/^\/[^/]+/, `/${item}`) : `/${item}`
        const active = item === locale
        return (
          <Link
            key={item}
            href={nextPath}
            className="btn"
            style={{
              borderColor: active ? 'var(--brand)' : undefined,
              color: active ? 'var(--brand)' : undefined
            }}
          >
            {localeLabels[item]}
          </Link>
        )
      })}
    </div>
  )
}
