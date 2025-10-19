import Image from "next/image";

export default function InitialBlogsMainCard() {
  return (
    <article className="lg:w-3/5 overflow-hidden rounded-lg border border-border bg-card shadow-lg h-fit">
      {/* Featured Story Badge */}
      <div className="relative w-full lg:h-3/4">
        <div className="absolute top-3 left-3 z-10 flex items-center gap-2 bg-yellow-400 px-3 py-1 rounded-sm">
          <span className="text-xs font-bold text-red-600">Featured Story</span>
        </div>

        {/* News Image */}
        <Image
          src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
          alt="Putin and protesters with signs during State of the Union comments"
          className="w-full h-full object-cover max-h-[400px] lg:max-h-[800px] "
          width={800} height={600}
        />
        <div className="p-4 absolute bottom-0 bg-gradient-to-t from-slate-900 to-transparent w-full">
        {/* Headline */}
          <h2 className="text-lg font-bold  leading-tight mb-3 text-white">
            Putin is 'not going to engage' with Biden's State of the Union comments, expert says
          </h2>

          {/* Metadata */}
          <div className="text-xs text-muted-foreground space-y-1">
            <p>Oct 18, 2025 | CNN</p>
            <p className="text-xs">Russia's Vladimir Putin is unlikely to respond to President Joe Biden's...</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      
    </article>
  )
}
