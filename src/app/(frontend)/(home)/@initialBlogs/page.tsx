import { BlogCard } from "@/components/blog-card";
import InitialBlogsMainCard from "@/components/initial-blogs-main-card";
import { initialBlogs } from "@/lib/blogData";

export default function InitialBlogsPage() {
  return (
    <div className="flex gap-4 w-full lg:flex-row flex-col">
      <InitialBlogsMainCard />
      <div className="lg:w-2/3 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
        {
          initialBlogs.map((blog,index) => (
            index < 4 && (
              <BlogCard key={blog.title} image={blog.image!} imageAlt={blog.title} title={blog.title} date={blog.createdAt!} readingTime={blog.readingTime!} />
            )
          ))
        }
      </div>
    </div>
  );
}