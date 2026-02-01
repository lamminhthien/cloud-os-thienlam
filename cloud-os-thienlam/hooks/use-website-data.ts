import { useState, useEffect } from "react"
import { Website } from "@/types/website"
import { WEBSITE_CATEGORIES, CATEGORY_INFO } from "@/constants/categories"

export function useWebsiteData() {
  const [allWebsites, setAllWebsites] = useState<Website[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchWebsites = async () => {
      try {
        setLoading(true)
        const categories = Object.values(WEBSITE_CATEGORIES)
        const allWebsites: Website[] = []

        for (const category of categories) {
          try {
            const categoryInfo = CATEGORY_INFO[category as keyof typeof CATEGORY_INFO]
            const response = await fetch(categoryInfo.file)
            if (!response.ok) throw new Error(`Failed to fetch ${category}`)
            const categoryWebsites = await response.json()
            allWebsites.push(...categoryWebsites)
          } catch (err) {
            console.error(`Error fetching ${category}:`, err)
          }
        }

        setAllWebsites(allWebsites)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'))
        console.error('Error fetching websites:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchWebsites()
  }, [])

  return { allWebsites, loading, error }
}

export function useCategoryWebsites(category: string) {
  const [websites, setWebsites] = useState<Website[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchCategoryWebsites = async () => {
      try {
        setLoading(true)
        const categoryInfo = CATEGORY_INFO[category as keyof typeof CATEGORY_INFO]
        const response = await fetch(categoryInfo.file)
        if (!response.ok) throw new Error(`Failed to fetch ${category}`)
        const data = await response.json()
        setWebsites(data)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'))
        console.error(`Error fetching ${category}:`, err)
      } finally {
        setLoading(false)
      }
    }

    fetchCategoryWebsites()
  }, [category])

  return { websites, loading, error }
}

export function useFilteredWebsites(
  allWebsites: Website[],
  websites: Website[],
  category: string
): Website[] {
  return websites
}

export function usePaginatedWebsites(websites: Website[], currentPage: number, itemsPerPage: number = 12) {
  const paginatedWebsites = websites.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const totalPages = Math.ceil(websites.length / itemsPerPage)

  return {
    websites: paginatedWebsites,
    totalPages
  }
}