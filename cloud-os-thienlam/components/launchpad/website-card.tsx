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
      className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
    >
      <div className="flex flex-col items-center p-5 rounded-3xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl shadow-xl hover:shadow-2xl border border-white/20 dark:border-zinc-700/50 hover:border-white/30 dark:hover:border-zinc-600/50 transition-all duration-300 group-hover:bg-white/80 dark:group-hover:bg-zinc-900/80">
        <div
          className={`w-18 h-18 rounded-2xl ${website.color} flex items-center justify-center text-3xl mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 backdrop-blur-sm border border-white/20`}
        >
          <span className="text-4xl filter drop-shadow-lg">{website.icon}</span>
        </div>
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm mb-1 text-center drop-shadow-sm">
          {website.name}
        </h3>
        <p className="text-xs text-zinc-600/80 dark:text-zinc-400/80 text-center line-clamp-2 backdrop-blur-sm">
          {website.description}
        </p>
      </div>
    </div>
  )
}