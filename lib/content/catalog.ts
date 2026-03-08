export type BentoSize = 'lg' | 'md' | 'sm'

export type ToolCatalogItem = {
  href: string
  name: string
  desc: string
  image: string
  badge: string
  category: 'random' | 'picker' | 'games' | 'utility'
  accentColor: string
  bentoSize: BentoSize
  icon: string
}

export const toolCatalog: ToolCatalogItem[] = [
  {
    href: '/coin-flip',
    name: 'Coin Flip',
    desc: 'Fast binary decision with history.',
    image: '/media/coin-motion.svg',
    badge: 'Most Used',
    category: 'games',
    accentColor: '#FFD700',
    bentoSize: 'lg',
    icon: '🪙'
  },
  {
    href: '/dice-roller',
    name: 'Dice Roller',
    desc: 'D4 to D20 with multi-roll totals.',
    image: '/media/dice-motion.svg',
    badge: 'Game Night',
    category: 'games',
    accentColor: '#A855F7',
    bentoSize: 'sm',
    icon: '🎲'
  },
  {
    href: '/spin-the-wheel',
    name: 'Spin the Wheel',
    desc: 'Custom entries and random winner.',
    image: '/media/wheel-motion.svg',
    badge: 'Creator Pick',
    category: 'picker',
    accentColor: '#10B981',
    bentoSize: 'sm',
    icon: '🎡'
  },
  {
    href: '/yes-or-no',
    name: 'Yes or No',
    desc: 'Quick yes/no generator for daily choices.',
    image: '/media/tool-generic.svg',
    badge: 'Fast Choice',
    category: 'random',
    accentColor: '#F43F5E',
    bentoSize: 'md',
    icon: '🎯'
  },
  {
    href: '/random-number-generator',
    name: 'Random Number Generator',
    desc: 'Range-based integer picks with unique mode.',
    image: '/media/tool-generic.svg',
    badge: 'Utility',
    category: 'random',
    accentColor: '#0EA5E9',
    bentoSize: 'sm',
    icon: '🔢'
  },
  {
    href: '/random-name-picker',
    name: 'Random Name Picker',
    desc: 'Fair random name selection for classes and events.',
    image: '/media/team-pick.svg',
    badge: 'Classroom',
    category: 'picker',
    accentColor: '#F59E0B',
    bentoSize: 'sm',
    icon: '📋'
  },
  {
    href: '/team-generator',
    name: 'Team Generator',
    desc: 'Split names into random teams quickly.',
    image: '/media/team-pick.svg',
    badge: 'Group Tool',
    category: 'picker',
    accentColor: '#6366F1',
    bentoSize: 'md',
    icon: '👥'
  },
  {
    href: '/random-letter',
    name: 'Random Letter',
    desc: 'A-Z random letter prompts.',
    image: '/media/tool-generic.svg',
    badge: 'Prompt',
    category: 'random',
    accentColor: '#84CC16',
    bentoSize: 'sm',
    icon: '🔤'
  },
  {
    href: '/random-color',
    name: 'Random Color',
    desc: 'HEX and RGB color picker with preview.',
    image: '/media/tool-generic.svg',
    badge: 'Design',
    category: 'utility',
    accentColor: '#EC4899',
    bentoSize: 'sm',
    icon: '🎨'
  },
  {
    href: '/countdown-timer-random',
    name: 'Random Countdown Timer',
    desc: 'Unpredictable timer rounds for games.',
    image: '/media/tool-generic.svg',
    badge: 'Timer',
    category: 'utility',
    accentColor: '#06B6D4',
    bentoSize: 'md',
    icon: '⏱️'
  },
  {
    href: '/random-food-picker',
    name: 'Random Food Picker',
    desc: 'Decide what to eat from custom options.',
    image: '/media/food-pick.svg',
    badge: 'Lifestyle',
    category: 'picker',
    accentColor: '#F97316',
    bentoSize: 'sm',
    icon: '🍕'
  },
  {
    href: '/random-date-generator',
    name: 'Random Date Generator',
    desc: 'Generate random dates inside any range.',
    image: '/media/tool-generic.svg',
    badge: 'Planner',
    category: 'utility',
    accentColor: '#8B5CF6',
    bentoSize: 'sm',
    icon: '📅'
  },
  {
    href: '/lottery-number-generator',
    name: 'Lottery Number Generator',
    desc: 'Create unique lottery-style number sets.',
    image: '/media/tool-generic.svg',
    badge: 'Numbers',
    category: 'random',
    accentColor: '#EAB308',
    bentoSize: 'sm',
    icon: '🎰'
  },
  {
    href: '/baby-name-generator',
    name: 'Baby Name Generator',
    desc: 'Generate baby name ideas by category.',
    image: '/media/team-pick.svg',
    badge: 'Names',
    category: 'picker',
    accentColor: '#14B8A6',
    bentoSize: 'sm',
    icon: '👶'
  },
  {
    href: '/icebreaker-question-generator',
    name: 'Icebreaker Questions',
    desc: 'Get random conversation starters quickly.',
    image: '/media/tool-generic.svg',
    badge: 'Conversation',
    category: 'games',
    accentColor: '#D946EF',
    bentoSize: 'sm',
    icon: '💬'
  }
]

export function getCatalogItemByTitle(title: string): ToolCatalogItem | undefined {
  const lower = title.toLowerCase()
  const titleWords = new Set(lower.split(/\s+/).filter((w) => w.length > 2))

  let bestMatch: ToolCatalogItem | undefined
  let bestScore = 0

  for (const item of toolCatalog) {
    const itemWords = item.name.toLowerCase().split(/\s+/).filter((w) => w.length > 2)
    const matched = itemWords.filter((w) => titleWords.has(w)).length
    // Score = fraction of catalog item's words that appear in the page title
    const score = matched / itemWords.length
    if (score > bestScore) {
      bestScore = score
      bestMatch = item
    }
  }

  // Require at least half the words to match to avoid false positives
  return bestScore >= 0.5 ? bestMatch : undefined
}

export function getRelatedToolsByTitle(title: string, size = 6): ToolCatalogItem[] {
  const lowerTitle = title.toLowerCase()
  const primary =
    toolCatalog.find((item) => lowerTitle.includes(item.name.toLowerCase().replace(/\s+/g, ' ').split(' ')[0])) ??
    toolCatalog.find((item) => lowerTitle.includes(item.href.replaceAll('-', ' ').replace('/', '').split(' ')[0]))

  if (!primary) {
    return toolCatalog.slice(0, size)
  }

  const sameCategory = toolCatalog.filter((item) => item.category === primary.category && item.href !== primary.href)
  const fallback = toolCatalog.filter((item) => item.href !== primary.href && item.category !== primary.category)
  return [...sameCategory, ...fallback].slice(0, size)
}
