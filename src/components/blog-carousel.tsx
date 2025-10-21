"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { TopBlogCard } from "./top-blogs"
import { BlogType } from "@/lib/type"

interface BlogCarouselProps {
  posts: BlogType[]
}

export function BlogCarousel({ posts }: BlogCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, posts.length - itemsPerView)

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={carouselRef}>
        <div
          className="flex gap-3 transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {posts.map((story) => (
            <div key={story._id || story.title+story.author+story.content} className="flex-shrink-0" style={{ width: `${100 / itemsPerView}%` }}>
                <TopBlogCard key={story.title+story.author+story.content} image={story.image!} title={story.title} author={story.author!} views={story.views!} createdAt={story.createdAt!} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className="absolute left-10 md:left-5 top-1/2 -translate-y-1/2 -translate-x-16 rounded-full bg-slate-600 p-2 text-card-foreground shadow-md transition-all hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={handleNext}
        disabled={currentIndex === maxIndex}
        className="absolute right-10 md:right-5 top-1/2 -translate-y-1/2 translate-x-16 rounded-full bg-slate-600 p-2 text-card-foreground shadow-md transition-all hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${index === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
