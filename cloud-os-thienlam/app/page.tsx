"use client"

import { useState } from "react"
import { CategoryFilter } from "@/components/launchpad/category-filter"
import { LaunchpadGrid } from "@/components/launchpad/launchpad-grid"
import { useWebsiteData, useCategoryWebsites } from "@/hooks/use-website-data"

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const { allWebsites, loading: allLoading } = useWebsiteData()
  const { websites: filteredWebsites, loading: categoryLoading } = useCategoryWebsites(activeCategory)

  const loading = activeCategory === 'all' ? allLoading : categoryLoading

  const displayWebsites = activeCategory === 'all' ? allWebsites : filteredWebsites

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
            Website Launcher
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Your personal collection of essential websites. Click any tile to launch instantly.
          </p>
        </div>

        <CategoryFilter
          activeCategory={activeCategory as 'all' | 'social' | 'development' | 'productivity' | 'entertainment'}
          onChange={setActiveCategory}
        />

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zinc-900 dark:border-zinc-100"></div>
          </div>
        ) : (
          <LaunchpadGrid websites={displayWebsites} />
        )}
      </div>

      <footer className="mt-20 py-8 text-center text-sm text-zinc-500 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4">
          <p>Inspired by macOS Launchpad • Built with Next.js & shadcn/ui</p>
        </div>
      </footer>
    </div>
  )
}