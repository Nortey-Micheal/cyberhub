import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default async function BlogPost({ params }: { params: Promise<{ blogId: string }> }) {
  const { blogId } = await params;

  console.log({blogId})

  const res = await fetch(`http://localhost:3000/api/blogs/getBlogById?blogId=${blogId}`);
  if (!res.ok) {
    console.error("Failed to fetch:", res);
    return null; // or a fallback component
}

console.log({res})

  const post = await res.json();

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
          <Link href="/blog">
            <Button variant="ghost" className="mb-4 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Blog Post */}
        <article className="mb-16">
          {/* Featured Image */}
          <div className="mb-8 overflow-hidden rounded-lg">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="h-96 w-full object-cover" />
          </div>

          {/* Post Header */}
          <div className="mb-8">
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-block rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                {post.category}
              </span>
            </div>

            <h1 className="mb-4 text-4xl font-bold text-foreground">{post.title}</h1>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>

          {/* Post Content */}
          <div className="prose prose-sm max-w-none text-foreground dark:prose-invert">
            {post.content.split("\n\n").map((paragraph:string, index:number) => {
              if (paragraph.startsWith("##")) {
                return (
                  <h2 key={index} className="mb-4 mt-8 text-2xl font-bold text-foreground">
                    {paragraph.replace("## ", "")}
                  </h2>
                )
              }
              if (paragraph.startsWith("```")) {
                return (
                  <pre key={index} className="mb-4 overflow-x-auto rounded-lg bg-muted p-4 text-sm">
                    <code>{paragraph.replace(/```/g, "")}</code>
                  </pre>
                )
              }
              if (paragraph.startsWith("-")) {
                return (
                  <ul key={index} className="mb-4 list-inside list-disc space-y-2">
                    {paragraph.split("\n").map((item, i) => (
                      <li key={i} className="text-foreground">
                        {item.replace("- ", "")}
                      </li>
                    ))}
                  </ul>
                )
              }
              return (
                <p key={index} className="mb-4 leading-relaxed text-foreground">
                  {paragraph}
                </p>
              )
            })}
          </div>

          {/* Tags */}
          <div className="mt-8 border-t border-border pt-8">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag:string) => (
                <Link key={tag} href={`/blog?tag=${tag}`}>
                  <Button variant="outline" size="sm">
                    #{tag}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </article>

        {/* Related Blogs Section */}
        {/* {relatedPosts.length > 0 && (
          <section className="border-t border-border pt-12">
            <h2 className="mb-8 text-3xl font-bold text-foreground">Related Articles</h2>
            <RelatedBlogs posts={relatedPosts} />
          </section>
        )} */}
      </div>
    </main>
  )
}
