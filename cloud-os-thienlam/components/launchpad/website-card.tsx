import { Website } from "@/types/website"

interface WebsiteCardProps {
  website: Website
}

export function WebsiteCard({ website }: WebsiteCardProps) {
  const handleClick = () => {
    window.open(website.url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer transform transition-all duration-200 hover:scale-105 hover:-translate-y-1"
    >
      <div className="flex flex-col items-center p-4 rounded-2xl bg-white dark:bg-zinc-900 shadow-lg hover:shadow-xl border border-zinc-200 dark:border-zinc-800">
        <div
          className={`w-16 h-16 rounded-xl ${website.color} flex items-center justify-center text-3xl mb-3 shadow-inner group-hover:shadow-lg transition-shadow`}
        >
          <span className="text-4xl filter drop-shadow-sm">{website.icon}</span>
        </div>
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm mb-1 text-center">
          {website.name}
        </h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center line-clamp-2">
          {website.description}
        </p>
      </div>
    </div>
  )
}