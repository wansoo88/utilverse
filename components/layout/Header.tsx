import Link from 'next/link'
import { getDictionary, localePath, type Locale } from '@/lib/i18n'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { LanguageSwitcher } from '@/components/common/LanguageSwitcher'

export function Header({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale)

  return (
    <header className="card" style={{ marginBottom: '1rem', padding: '1rem' }}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link href={localePath(locale)} style={{ fontWeight: 800, fontSize: '1.05rem' }}>
          {dict.siteName}
        </Link>

        <nav className="flex flex-wrap gap-3" style={{ color: 'var(--text-muted)' }}>
          <Link href={localePath(locale, '/coin-flip')}>Coin Flip</Link>
          <Link href={localePath(locale, '/dice-roller')}>Dice Roller</Link>
          <Link href={localePath(locale, '/spin-the-wheel')}>Wheel</Link>
          <Link href={localePath(locale, '/random-name-picker')}>Name Picker</Link>
          <Link href={localePath(locale, '/random-food-picker')}>Food Picker</Link>
          <Link href={localePath(locale, '/random-food-picker')}>Food Picker</Link>
          <Link href={localePath(locale, '/blog')}>{dict.nav.blog}</Link>
          <Link href={localePath(locale, '/about')}>{dict.nav.about}</Link>
        </nav>

        <ThemeToggle />
      </div>
      <div style={{ marginTop: '0.75rem' }}>
        <LanguageSwitcher locale={locale} />
      </div>
    </header>
  )
}
