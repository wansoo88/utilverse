export type BlogCategory = 'guides' | 'tools' | 'games' | 'fun'

export const blogCategories: Record<BlogCategory, { label: string; description: string; icon: string }> = {
  guides: {
    label: 'Decision Guides',
    description: 'The psychology, science, and strategy behind making better choices.',
    icon: '🧠'
  },
  tools: {
    label: 'Tool Tutorials',
    description: 'Step-by-step guides for every random decision tool on this site.',
    icon: '🛠️'
  },
  games: {
    label: 'Games & Fun',
    description: 'Party games, classroom activities, and fun ways to use random tools.',
    icon: '🎉'
  },
  fun: {
    label: 'Trivia & Lists',
    description: 'Surprising facts, famous moments, and interesting lists about randomness.',
    icon: '✨'
  }
}

export type BlogPost = {
  slug: string
  category: BlogCategory
  title: string
  description: string
  publishedDate: string   // 'YYYY-MM-DD'
  updatedDate?: string
  author: string          // 'kimcomplete'
  readingTime: number     // minutes
  intro: string
  sections: Array<{
    heading: string
    body: string[]
    svgIllustration?: string  // inline SVG string
  }>
  faqs: Array<{ question: string; answer: string }>
  relatedSlugs: string[]
  relatedToolHrefs: string[]
  tags: string[]
}
