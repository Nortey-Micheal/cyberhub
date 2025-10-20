import { LatestBlogCard } from "@/components/latest-blogs";
import { latestStories } from "@/lib/blogData";

export default function LatestStoriesPage() {
  return (
    <div className="w- mb-10">
      <h1 className="text-3xl font-bold mb-4">Latest Stories</h1>
      <div className="flex flex-col gap-4">
        {
          latestStories.map((story,index) => (
            index < 4 && (
              <LatestBlogCard key={index+story.title} author={story.author!} title={story.title} content={story.content!} createdAt={story.createdAt!} readingTime={story.readingTime!} image={story.image!} />
            )
          ))
        }
      </div>
    </div>
  );
}