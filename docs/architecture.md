# Architecture (MVP v1)

## Scope
- Framework: Next.js 14 App Router + TypeScript + Tailwind CSS
- Runtime model: Static pages + client-side interaction
- Data layer: No DB in Phase 1
- Persistence: Browser localStorage for tool history
- Auth: Not used in Phase 1
- Theme: Dark by default + light toggle
- Languages: en, es, pt, ar, hi, tr

## Route map
- `/{locale}` home
- `/{locale}/coin-flip`
- `/{locale}/dice-roller`
- `/{locale}/spin-the-wheel`
- `/{locale}/yes-or-no`
- `/{locale}/random-number-generator`
- `/{locale}/blog`
- `/{locale}/blog/{slug}`
- `/{locale}/about`
- `/{locale}/contact`
- `/{locale}/privacy-policy`
- `/{locale}/terms-of-service`
- `/sitemap.xml`, `/robots.txt`

## Main modules
- `lib/i18n.ts`
  - Locale registry and translated UI dictionary
- `lib/content/tools.ts`
  - Tool page content blocks for SEO sections and FAQ
- `lib/content/blog.ts`
  - Blog post source content and lookup helper
- `lib/seo.ts`
  - Metadata helper and JSON-LD schema builders
- `lib/useLocalHistory.ts`
  - Shared localStorage history hook for interactive tools

## UI composition
- `components/layout/Header.tsx` / `Footer.tsx`
- `components/common/ThemeToggle.tsx`
- `components/common/LanguageSwitcher.tsx`
- `components/common/AdPlaceholder.tsx`
- `components/layout/ToolPageShell.tsx`
  - Common structure: Hero, How to Use, Features, Use Cases, Tips, FAQ, Related
  - Inserts SoftwareApplication and FAQPage JSON-LD

## Tool components
- `components/tools/CoinFlipTool.tsx`
- `components/tools/DiceRollerTool.tsx`
- `components/tools/SpinWheelTool.tsx`
- `components/tools/YesNoTool.tsx`
- `components/tools/RandomNumberTool.tsx`

## SEO and AdSense strategy in code
- Unique metadata per route via `buildMeta`
- JSON-LD for tool pages
- Long-form sections and FAQ on each tool page
- Blog collection for content depth
- Legal pages (privacy/terms/about/contact)
- Placeholder ad slots in safe positions

## Future extension points
- Replace ad placeholders with real AdSense blocks post-approval
- Add Phase 2 tools under same shell pattern
- Add CMS or MDX for scalable blog workflows
- Add optional server features for group decision sessions