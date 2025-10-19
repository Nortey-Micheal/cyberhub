import Image from "next/image"
import { Eye, Clock } from "lucide-react"
import { BlogType } from "@/lib/blogData"

export function TopBlogCard({ image, title, author, views, createdAt }: BlogType) {
  return (
    <a
      href={image}
      className="group block overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-lg hover:border-primary/50"
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col gap-3 p-4">
        {/* Title */}
        <h3 className="line-clamp-2 text-base font-semibold text-card-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Metadata Footer */}
        <div className="flex items-center justify-between border-t border-border pt-3 text-sm text-muted-foreground">
          <span className="font-medium">{author}</span>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              <span>{views?.toLocaleString() || 2.5}K</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{createdAt?.toDateString() || new Date().toDateString()}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
