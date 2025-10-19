import { Bookmark, MoreVertical } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { BlogType } from "@/lib/blogData"

export function LatestBlogCard({ author, title, content, createdAt, readingTime, image }: BlogType) {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-6 p-0 bg-card border border-border rounded-lg hover:shadow-md transition-shadow">
      {/* Left Content */}
      <div className="flex-1 flex flex-col p-5">
        {/* Author Section */}
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={"/placeholder.svg"} alt={author} />
            <AvatarFallback>{author.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-foreground">{author}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug">{title}</h3>

        {/* content */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{content}</p>

        {/* Footer with createdAt, Read Time, and Actions */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>{createdAt?.toDateString() || new Date().toDateString()}</span>
            <span>{readingTime || "15 mins"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
              <Bookmark className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-shrink-0">
        <img src={image || "/placeholder.svg"} alt={title} className="h-40 lg:h-32 w-full lg:w-40 object-cover rounded-md" />
      </div>
    </div>
  )
}
