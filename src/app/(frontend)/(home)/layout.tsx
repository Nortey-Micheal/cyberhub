export default function HomeLayout(
    { 
        children,
        initialBlogs,
        topStories,
        latestStories,
        upcomingStreaming
     }: { children: React.ReactNode,
        initialBlogs: React.ReactNode,
        topStories: React.ReactNode,
        latestStories: React.ReactNode,
        upcomingStreaming: React.ReactNode
      }
) {
    return (
        <div className="w-fu">
          {children}
          {initialBlogs}
          {topStories}
          <div className="flex gap-8 flex-col md:flex-row md:flex">
            {latestStories}
            {upcomingStreaming}
          </div>
        </div>
    );
}