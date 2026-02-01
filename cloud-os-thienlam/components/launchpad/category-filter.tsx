import { CategoryType, WEBSITE_CATEGORIES } from "@/constants/categories"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CategoryFilterProps {
  activeCategory: CategoryType
  onChange: (category: CategoryType) => void
}

export function CategoryFilter({ activeCategory, onChange }: CategoryFilterProps) {
  const categories = [
    { key: WEBSITE_CATEGORIES.SOCIAL, label: 'Social', icon: '👥' },
    { key: WEBSITE_CATEGORIES.DEVELOPMENT, label: 'Development', icon: '💻' },
    { key: WEBSITE_CATEGORIES.PRODUCTIVITY, label: 'Productivity', icon: '⚡' },
    { key: WEBSITE_CATEGORIES.ENTERTAINMENT, label: 'Entertainment', icon: '🎯' },
  ]

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {categories.map((category) => (
        <button
          key={category.key}
          onClick={() => onChange(category.key)}
          className={cn(
            "h-11 px-5 rounded-full transition-all duration-300 backdrop-blur-xl border",
            activeCategory === category.key
              ? "bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500 text-white shadow-xl hover:shadow-2xl scale-105 border-white/20"
              : "bg-white/60 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:bg-white/80 dark:hover:bg-zinc-900/80 shadow-lg hover:shadow-xl hover:scale-105 border-white/30 dark:border-zinc-700/50"
          )}
        >
          <span className="mr-2 text-lg">{category.icon}</span>
          {category.label}
        </button>
      ))}
    </div>
  )
}