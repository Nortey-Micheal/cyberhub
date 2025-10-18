import { Card } from "@/components/ui/card"

interface BlogCardProps {
  image: string
  imageAlt: string
  title: string
  date: string
  readingTime: string
}

export function BlogCard({ image, imageAlt, title, date, readingTime }: BlogCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="flex gap-4 p-4">
        {/* Image */}
        <div className="flex-shrink-0">
          <img src={image || "/placeholder.svg"} alt={imageAlt} className="h-32 w-40 object-cover rounded-md" />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center gap-2 flex-1">
          <h3 className="font-semibold text-foreground line-clamp-2">{title}</h3>
          <div className="text-sm text-muted-foreground">{date}</div>
          <div className="text-sm font-medium text-muted-foreground">{readingTime} min read</div>
        </div>
      </div>
    </Card>
  )
}
