"use client"

import { useState } from "react"
import { CategoryFilter } from "@/components/launchpad/category-filter"
import { LaunchpadGrid } from "@/components/launchpad/launchpad-grid"
import { useCategoryWebsites } from "@/hooks/use-website-data"
import { WEBSITE_CATEGORIES } from "@/constants/categories"

const ITEMS_PER_PAGE = 12

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<typeof WEBSITE_CATEGORIES[keyof typeof WEBSITE_CATEGORIES]>(WEBSITE_CATEGORIES.SOCIAL)
  const [currentPage, setCurrentPage] = useState(1)
  const { websites: allWebsites, loading } = useCategoryWebsites(activeCategory)

  const totalPages = Math.ceil(allWebsites.length / ITEMS_PER_PAGE)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const displayWebsites = allWebsites.slice(startIndex, endIndex)

  const handleCategoryChange = (category: typeof WEBSITE_CATEGORIES[keyof typeof WEBSITE_CATEGORIES]) => {
    setActiveCategory(category)
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 transition-colors duration-500 overflow-hidden">
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl dark:mix-blend-screen animate-pulse" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl dark:mix-blend-screen animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl dark:mix-blend-screen animate-pulse delay-500" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent dark:from-black/30" />

      <div className="container mx-auto px-4 py-12 max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent drop-shadow-sm">
            LaunchHub
          </h1>
          <p className="text-lg text-zinc-700/80 dark:text-zinc-300/80 max-w-2xl mx-auto backdrop-blur-sm">
            Your personal collection of essential websites. Click any tile to launch instantly.
          </p>
        </div>

        <CategoryFilter
          activeCategory={activeCategory}
          onChange={handleCategoryChange}
        />

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zinc-900 dark:border-zinc-100"></div>
          </div>
        ) : (
          <LaunchpadGrid
            websites={displayWebsites}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>

      <footer className="mt-20 py-8 text-center text-sm text-zinc-500 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4">
          <p>Inspired by macOS Launchpad</p>
        </div>
      </footer>
    </div>
  )
}