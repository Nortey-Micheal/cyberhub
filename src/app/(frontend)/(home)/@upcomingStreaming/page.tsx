import { BlogCard } from "@/components/blog-card";
import { upcomingStreams } from "@/lib/blogData";

export default function UpcomingStreamingPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Upcoming Streaming Events</h1>
      <div className="flex flex-col gap-4">
        {
          upcomingStreams.map((blog,index) => (
            index < 4 && (
              <BlogCard key={blog._id || blog.title+index+blog.author} image={blog.image!} imageAlt={blog.title} title={blog.title} date={blog.createdAt!} readingTime={blog.readingTime!}/>
            )
          ))
        }
      </div>
    </div>
  );
}