import { CategoryType, WEBSITE_CATEGORIES } from "@/constants/categories"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CategoryFilterProps {
  activeCategory: CategoryType | 'all'
  onChange: (category: CategoryType | 'all') => void
}

export function CategoryFilter({ activeCategory, onChange }: CategoryFilterProps) {
  const categories = [
    { key: 'all' as const, label: 'All', icon: '🌟' },
    { key: WEBSITE_CATEGORIES.SOCIAL, label: 'Social', icon: '👥' },
    { key: WEBSITE_CATEGORIES.DEVELOPMENT, label: 'Development', icon: '💻' },
    { key: WEBSITE_CATEGORIES.PRODUCTIVITY, label: 'Productivity', icon: '⚡' },
    { key: WEBSITE_CATEGORIES.ENTERTAINMENT, label: 'Entertainment', icon: '🎯' },
  ]

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {categories.map((category) => (
        <Button
          key={category.key}
          variant={activeCategory === category.key ? "default" : "outline"}
          onClick={() => onChange(category.key)}
          className={cn(
            "h-11 px-5 rounded-full transition-all duration-200",
            activeCategory === category.key
              ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-lg"
              : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
          )}
        >
          <span className="mr-2 text-lg">{category.icon}</span>
          {category.label}
        </Button>
      ))}
    </div>
  )
}