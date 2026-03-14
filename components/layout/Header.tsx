import Link from 'next/link'
import { getDictionary, localePath, type Locale } from '@/lib/i18n'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { SoundToggle } from '@/components/common/SoundToggle'
import { LanguageSwitcher } from '@/components/common/LanguageSwitcher'
import { MobileNav } from './MobileNav'

export function Header({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale)

  const navLinks = [
    { href: localePath(locale, '/tools'), label: dict.nav.tools },
    { href: localePath(locale, '/coin-flip'), label: 'Coin Flip' },
    { href: localePath(locale, '/dice-roller'), label: 'Dice Roller' },
    { href: localePath(locale, '/spin-the-wheel'), label: 'Wheel' },
    { href: localePath(locale, '/random-name-picker'), label: 'Name Picker' },
    { href: localePath(locale, '/random-food-picker'), label: 'Food Picker' },
    { href: localePath(locale, '/blog'), label: dict.nav.blog },
    { href: localePath(locale, '/about'), label: dict.nav.about }
  ]

  return (
    <header className="card site-header glass-strong">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link href={localePath(locale)} className="site-brand">
          {dict.siteName}
        </Link>

        {/* Desktop nav */}
        <nav className="site-nav hidden md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <SoundToggle />
          <ThemeToggle />
          {/* Mobile nav */}
          <MobileNav links={navLinks} />
        </div>
      </div>
      <div style={{ marginTop: '0.75rem' }}>
        <LanguageSwitcher locale={locale} />
      </div>
    </header>
  )
}
