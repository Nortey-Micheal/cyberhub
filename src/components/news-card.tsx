export default function NewsCard() {
  return (
    <article className="w-full max-w-md overflow-hidden rounded-lg border border-border bg-card shadow-lg">
      {/* Featured Story Badge */}
      <div className="relative">
        <div className="absolute top-3 left-3 z-10 flex items-center gap-2 bg-yellow-400 px-3 py-1 rounded-sm">
          <span className="text-xs font-bold text-red-600">Featured Story</span>
        </div>

        {/* News Image */}
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_2025-10-18_213908664-6GXhZkQmfnavmZthGs5ALE8zfiM7Al.png"
          alt="Putin and protesters with signs during State of the Union comments"
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Headline */}
        <h2 className="text-lg font-bold text-card-foreground leading-tight mb-3">
          Putin is 'not going to engage' with Biden's State of the Union comments, expert says
        </h2>

        {/* Metadata */}
        <div className="text-xs text-muted-foreground space-y-1">
          <p>Oct 18, 2025 | CNN</p>
          <p className="text-xs">Russia's Vladimir Putin is unlikely to respond to President Joe Biden's...</p>
        </div>
      </div>
    </article>
  )
}
