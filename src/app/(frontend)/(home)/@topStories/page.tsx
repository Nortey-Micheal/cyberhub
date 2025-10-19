import { BlogCarousel } from "@/components/blog-carousel";
import { TopBlogCard } from "@/components/top-blogs";
import { topStories } from "@/lib/blogData";

export default function TopStoriesPage() {
  return (
    <div className="w-full my-10">
      <h1 className="text-3xl font-bold mb-4">Top Stories</h1>
      <div className="w-[90%] mx-auto ">
        <BlogCarousel posts={topStories} />
      </div>
    </div>
  );
}