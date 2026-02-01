export const WEBSITE_CATEGORIES = {
  SOCIAL: 'social',
  DEVELOPMENT: 'development',
  PRODUCTIVITY: 'productivity',
  ENTERTAINMENT: 'entertainment',
} as const

export const CATEGORY_INFO = {
  [WEBSITE_CATEGORIES.SOCIAL]: {
    label: 'Social',
    icon: '👥',
    description: 'Social media platforms',
    file: '/data/websites/social.json',
  },
  [WEBSITE_CATEGORIES.DEVELOPMENT]: {
    label: 'Development',
    icon: '💻',
    description: 'Tools for developers',
    file: '/data/websites/development.json',
  },
  [WEBSITE_CATEGORIES.PRODUCTIVITY]: {
    label: 'Productivity',
    icon: '⚡',
    description: 'Productivity tools',
    file: '/data/websites/productivity.json',
  },
  [WEBSITE_CATEGORIES.ENTERTAINMENT]: {
    label: 'Entertainment',
    icon: '🎯',
    description: 'Entertainment & media',
    file: '/data/websites/entertainment.json',
  },
} as const

export type CategoryType = typeof WEBSITE_CATEGORIES[keyof typeof WEBSITE_CATEGORIES]