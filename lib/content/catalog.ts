export type ToolCatalogItem = {
  href: string
  name: string
  desc: string
  image: string
  badge: string
  category: 'random' | 'picker' | 'games' | 'utility'
}

export const toolCatalog: ToolCatalogItem[] = [
  { href: '/coin-flip', name: 'Coin Flip', desc: 'Fast binary decision with history.', image: '/media/coin-motion.svg', badge: 'Most Used', category: 'games' },
  { href: '/dice-roller', name: 'Dice Roller', desc: 'D4 to D20 with multi-roll totals.', image: '/media/dice-motion.svg', badge: 'Game Night', category: 'games' },
  { href: '/spin-the-wheel', name: 'Spin the Wheel', desc: 'Custom entries and random winner.', image: '/media/wheel-motion.svg', badge: 'Creator Pick', category: 'picker' },
  { href: '/yes-or-no', name: 'Yes or No', desc: 'Quick yes/no generator for daily choices.', image: '/media/tool-generic.svg', badge: 'Fast Choice', category: 'random' },
  { href: '/random-number-generator', name: 'Random Number Generator', desc: 'Range-based integer picks with unique mode.', image: '/media/tool-generic.svg', badge: 'Utility', category: 'random' },
  { href: '/random-name-picker', name: 'Random Name Picker', desc: 'Fair random name selection for classes and events.', image: '/media/team-pick.svg', badge: 'Classroom', category: 'picker' },
  { href: '/team-generator', name: 'Team Generator', desc: 'Split names into random teams quickly.', image: '/media/team-pick.svg', badge: 'Group Tool', category: 'picker' },
  { href: '/random-letter', name: 'Random Letter', desc: 'A-Z random letter prompts.', image: '/media/tool-generic.svg', badge: 'Prompt', category: 'random' },
  { href: '/random-color', name: 'Random Color', desc: 'HEX and RGB color picker with preview.', image: '/media/tool-generic.svg', badge: 'Design', category: 'utility' },
  { href: '/countdown-timer-random', name: 'Random Countdown Timer', desc: 'Unpredictable timer rounds for games.', image: '/media/tool-generic.svg', badge: 'Timer', category: 'utility' },
  { href: '/random-food-picker', name: 'Random Food Picker', desc: 'Decide what to eat from custom options.', image: '/media/food-pick.svg', badge: 'Lifestyle', category: 'picker' },
  { href: '/random-date-generator', name: 'Random Date Generator', desc: 'Generate random dates inside any range.', image: '/media/tool-generic.svg', badge: 'Planner', category: 'utility' },
  { href: '/lottery-number-generator', name: 'Lottery Number Generator', desc: 'Create unique lottery-style number sets.', image: '/media/tool-generic.svg', badge: 'Numbers', category: 'random' },
  { href: '/baby-name-generator', name: 'Baby Name Generator', desc: 'Generate baby name ideas by category.', image: '/media/team-pick.svg', badge: 'Names', category: 'picker' },
  { href: '/icebreaker-question-generator', name: 'Icebreaker Questions', desc: 'Get random conversation starters quickly.', image: '/media/tool-generic.svg', badge: 'Conversation', category: 'games' }
]

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
