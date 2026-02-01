import { WebsiteCard } from "./website-card"
import { Website } from "@/types/website"
import { Pagination } from "@/components/ui/pagination"

interface LaunchpadGridProps {
  websites: Website[]
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function LaunchpadGrid({ websites, currentPage, totalPages, onPageChange }: LaunchpadGridProps) {
  if (websites.length === 0) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          No websites found in this category
        </p>
      </div>
    )
  }

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 auto-rows-fr">
        {websites.map((website) => (
          <WebsiteCard key={website.id} website={website} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </div>
  )
}