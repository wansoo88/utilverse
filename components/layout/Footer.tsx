import Link from 'next/link'
import { getDictionary, localePath, type Locale } from '@/lib/i18n'

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale)

  return (
    <footer className="card site-footer">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p style={{ color: 'var(--text-muted)', margin: 0 }}>© {new Date().getFullYear()} Decision Toolkit by Utilverse</p>
        <div className="flex flex-wrap gap-3" style={{ color: 'var(--text-muted)' }}>
          <Link href={localePath(locale, '/about')}>{dict.nav.about}</Link>
          <Link href={localePath(locale, '/contact')}>{dict.nav.contact}</Link>
          <Link href={localePath(locale, '/privacy-policy')}>{dict.nav.privacy}</Link>
          <Link href={localePath(locale, '/terms-of-service')}>{dict.nav.terms}</Link>
        </div>
      </div>
    </footer>
  )
}
