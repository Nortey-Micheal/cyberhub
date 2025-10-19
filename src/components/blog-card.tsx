import { Card } from "@/components/ui/card"

interface BlogCardProps {
  image: string
  imageAlt: string
  title: string
  date: Date
  readingTime: string
}

export function BlogCard({ image, imageAlt, title, date, readingTime = "10" }: BlogCardProps) {
  return (
    <Card className="overflow-hidden py-0 h-40">
        <div className="flex gap-4">
            {/* Image */}
            <div className="flex-shrink-0 h-full">
                <img src={image || "/placeholder.svg"} alt={imageAlt} className="h-40 w-40 lg:w-75 object-cover rounded-md" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center gap-2 flex-1">
                <div className="flex items-center gap-4 text-sm">
                    <p className="text-sm text-muted-foreground">{date?date.toDateString() : new Date().toDateString()}</p>
                    <p className="text-sm font-medium text-muted-foreground">{readingTime} min read</p>
                </div>
                <h3 className="font-semibold text-foreground line-clamp-2">{title}</h3>
            </div>
        </div>
    </Card>
  )
}
