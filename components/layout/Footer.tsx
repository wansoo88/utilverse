import Link from 'next/link'
import { getDictionary, localePath, type Locale } from '@/lib/i18n'

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale)

  return (
    <footer className="card" style={{ marginTop: '2rem', padding: '1rem' }}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p style={{ color: 'var(--text-muted)' }}>© {new Date().getFullYear()} Decision Toolkit</p>
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
