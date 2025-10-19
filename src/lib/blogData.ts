export type BlogType = {
    title: string;
    slug: string;
    content: string;
    author: string //Types.ObjectId; // Reference to User
    tags?: string[];
    image?: string;
    published?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    readingTime?: string | "10";
}

export const latestStories: BlogType[] = [
  {
    title: "Cognitutor Reaches 10,000 Active Learners",
    slug: "cognitutor-10000-learners",
    content: "Our learner base keeps growing thanks to your support...",
    author: "Admin",
    tags: ["milestone", "growth"],
    image: "/images/latest1.jpg",
    published: true
  },
  {
    title: "Introducing the New Parent Dashboard",
    slug: "new-parent-dashboard",
    content: "Parents can now track learner progress in real time...",
    author: "Michael Nortey",
    tags: ["update", "feature", "parents"],
    image: "/images/latest2.jpg",
    published: true
  },
  {
    title: "Study Analytics: Smarter Insights for Tutors",
    slug: "study-analytics-for-tutors",
    content: "A new analytics feature helps tutors personalize lessons...",
    author: "Grace Amponsah",
    tags: ["analytics", "tutors"],
    image: "/images/latest3.jpg",
    published: true
  },
  {
    title: "Cognitutor App Beta Now Live!",
    slug: "cognitutor-app-beta",
    content: "Our app beta is now open for testing on Android and web...",
    author: "Admin",
    tags: ["app", "beta", "announcement"],
    image: "/images/latest4.jpg",
    published: true
  },
  {
    title: "Learning Tips for SHS Students in 2025",
    slug: "shs-student-tips-2025",
    content: "These study strategies will help SHS students excel this term...",
    author: "Michael Nortey",
    tags: ["students", "SHS", "learning"],
    image: "/images/latest5.jpg",
    published: true
  },
  {
    title: "Top 5 Subjects Students Struggle With",
    slug: "top-5-subjects-struggle",
    content: "Math, Science, and English top the list — here’s how to master them...",
    author: "Grace Amponsah",
    tags: ["subjects", "tips"],
    image: "/images/latest6.jpg",
    published: true
  },
  {
    title: "Why Peer Learning Works Wonders",
    slug: "why-peer-learning-works",
    content: "Peer learning fosters collaboration and confidence...",
    author: "Kwame Ofori",
    tags: ["peer", "learning"],
    image: "/images/latest7.jpg",
    published: true
  },
  {
    title: "Upcoming Tutor Training Workshop",
    slug: "tutor-training-workshop",
    content: "Our next training session will focus on adaptive learning tools...",
    author: "Admin",
    tags: ["training", "tutors"],
    image: "/images/latest8.jpg",
    published: true
  },
  {
    title: "Cognitutor Joins the EdTech Alliance",
    slug: "cognitutor-edtech-alliance",
    content: "We’re proud to partner with global EdTech leaders...",
    author: "Michael Nortey",
    tags: ["partnership", "edtech"],
    image: "/images/latest9.jpg",
    published: true
  },
  {
    title: "Student Success Stories from Accra",
    slug: "student-success-accra",
    content: "Students across Accra are excelling with Cognitutor sessions...",
    author: "Grace Amponsah",
    tags: ["success", "students", "Accra"],
    image: "/images/latest10.jpg",
    published: true
  }
]
export const topStories: BlogType[] = [
  {
    title: "AI Tutors Are Transforming Ghana’s Classrooms",
    slug: "ai-tutors-transforming-ghana",
    content: "AI integration in classrooms is reshaping student experiences...",
    author: "Kwame Ofori",
    tags: ["AI", "education", "innovation"],
    image: "/images/top1.jpg",
    published: true
  },
  {
    title: "How EdTech Is Closing the Rural Learning Gap",
    slug: "edtech-closing-rural-gap",
    content: "Rural schools are now benefiting from online platforms...",
    author: "Grace Amponsah",
    tags: ["rural", "edtech", "access"],
    image: "/images/top2.jpg",
    published: true
  },
  {
    title: "Cognitutor Wins Youth Innovation Award",
    slug: "cognitutor-wins-innovation-award",
    content: "Our team has been recognized for advancing digital learning...",
    author: "Admin",
    tags: ["award", "innovation", "team"],
    image: "/images/top3.jpg",
    published: true
  },
  {
    title: "The Future of Education in Africa",
    slug: "future-of-education-africa",
    content: "With increasing internet access, Africa’s education system is evolving...",
    author: "Michael Nortey",
    tags: ["future", "africa", "education"],
    image: "/images/top4.jpg",
    published: true
  },
  {
    title: "Tech Skills Every Student Needs in 2025",
    slug: "tech-skills-2025",
    content: "Digital literacy is no longer optional — it’s essential...",
    author: "Grace Amponsah",
    tags: ["skills", "technology", "students"],
    image: "/images/top5.jpg",
    published: true
  },
  {
    title: "5 Habits of Self-Motivated Learners",
    slug: "self-motivated-learners-habits",
    content: "Success in learning often comes from strong self-discipline...",
    author: "Kwame Ofori",
    tags: ["habits", "motivation", "learning"],
    image: "/images/top6.jpg",
    published: true
  },
  {
    title: "How Online Tutoring Boosts Exam Confidence",
    slug: "online-tutoring-boosts-confidence",
    content: "Students using Cognitutor report better focus and grades...",
    author: "Admin",
    tags: ["confidence", "tutoring"],
    image: "/images/top7.jpg",
    published: true
  },
  {
    title: "Women in Tech: Changing the Learning Landscape",
    slug: "women-in-tech-learning",
    content: "Female developers are leading change in EdTech innovation...",
    author: "Grace Amponsah",
    tags: ["women", "tech", "education"],
    image: "/images/top8.jpg",
    published: true
  },
  {
    title: "The Rise of Remote Tutoring in Ghana",
    slug: "remote-tutoring-ghana",
    content: "After COVID-19, remote tutoring became the norm...",
    author: "Michael Nortey",
    tags: ["remote", "learning"],
    image: "/images/top9.jpg",
    published: true
  },
  {
    title: "New Partnership to Expand Access to Learners",
    slug: "new-partnership-expands-access",
    content: "Cognitutor partners with NGOs to reach underserved schools...",
    author: "Admin",
    tags: ["partnership", "access"],
    image: "/images/top10.jpg",
    published: true
  }
]

export const upcomingStreams: BlogType[] = [
  {
    title: "Live Coding: Building a Next.js Weather App",
    slug: "live-nextjs-weather-app",
    content: "Join our live coding session on Next.js fundamentals...",
    author: "Michael Nortey",
    tags: ["nextjs", "livestream", "coding"],
    image: "/images/stream1.jpg",
    published: true
  },
  {
    title: "Study Hacks: Memory Techniques That Work",
    slug: "study-hacks-memory",
    content: "We’ll explore practical memory techniques for faster recall...",
    author: "Grace Amponsah",
    tags: ["study", "memory", "stream"],
    image: "/images/stream2.jpg",
    published: true
  },
  {
    title: "Intro to MongoDB for Beginners",
    slug: "intro-to-mongodb-stream",
    content: "Learn how to structure and query data in MongoDB...",
    author: "Kwame Ofori",
    tags: ["mongodb", "backend", "livestream"],
    image: "/images/stream3.jpg",
    published: true
  },
  {
    title: "Panel Talk: The Future of EdTech",
    slug: "future-of-edtech-panel",
    content: "Industry experts discuss the next wave of educational innovation...",
    author: "Admin",
    tags: ["edtech", "panel", "future"],
    image: "/images/stream4.jpg",
    published: true
  },
  {
    title: "React Hooks in 2025: What’s New",
    slug: "react-hooks-2025",
    content: "A live walkthrough of upcoming React features...",
    author: "Michael Nortey",
    tags: ["react", "frontend", "hooks"],
    image: "/images/stream5.jpg",
    published: true
  },
  {
    title: "Parent Tips: Supporting At-Home Learning",
    slug: "parent-tips-home-learning",
    content: "Join our live Q&A session for parents and educators...",
    author: "Grace Amponsah",
    tags: ["parents", "support", "education"],
    image: "/images/stream6.jpg",
    published: true
  },
  {
    title: "Tutors Roundtable: Teaching in a Digital Age",
    slug: "tutors-roundtable-digital-age",
    content: "Experienced tutors share online teaching insights...",
    author: "Kwame Ofori",
    tags: ["tutoring", "online", "discussion"],
    image: "/images/stream7.jpg",
    published: true
  },
  {
    title: "Live Demo: Setting Up Your Cognitutor Profile",
    slug: "setup-cognitutor-profile",
    content: "We’ll walk through creating an effective tutor profile...",
    author: "Admin",
    tags: ["tutorial", "onboarding"],
    image: "/images/stream8.jpg",
    published: true
  },
  {
    title: "Study Session: Math for SHS Students",
    slug: "study-session-math-shs",
    content: "Live problem-solving with top tutors in Mathematics...",
    author: "Michael Nortey",
    tags: ["math", "students", "live"],
    image: "/images/stream9.jpg",
    published: true
  },
  {
    title: "Open Q&A with Cognitutor Founders",
    slug: "open-qa-cognitutor",
    content: "Ask your questions directly to the Cognitutor team...",
    author: "Admin",
    tags: ["qa", "team", "community"],
    image: "/images/stream10.jpg",
    published: true
  }
]

export const initialBlogs:BlogType[] = [
  {
    title: "Welcome to Cognitutor Blog",
    slug: "welcome-to-cognitutor-blog",
    content: "Our mission is to make learning smarter and more personal...",
    author: "Admin",
    tags: ["intro", "education", "platform"],
    image: "/images/initial1.jpg",
    published: true
  },
  {
    title: "How to Get the Best Out of Online Tutoring",
    slug: "get-best-online-tutoring",
    content: "Online tutoring can be just as effective as in-person learning...",
    author: "Michael Nortey",
    tags: ["learning", "online", "tips"],
    image: "/images/initial2.jpg",
    published: true
  },
  {
    title: "Setting Up Your Learning Goals for Success",
    slug: "setting-up-learning-goals",
    content: "A well-defined learning goal can double your focus...",
    author: "Grace Amponsah",
    tags: ["study", "motivation", "goals"],
    image: "/images/initial3.jpg",
    published: true
  },
  {
    title: "Meet Our Tutors: The Minds Behind Cognitutor",
    slug: "meet-our-tutors",
    content: "Our tutors are more than educators — they’re mentors...",
    author: "Admin",
    tags: ["team", "education"],
    image: "/images/initial4.jpg",
    published: true
  },
  {
    title: "Balancing School and Life",
    slug: "balancing-school-and-life",
    content: "Learn how to manage your time and mental health while studying...",
    author: "Michael Nortey",
    tags: ["wellbeing", "students", "balance"],
    image: "/images/initial5.jpg",
    published: true
  },
  {
    title: "5 Learning Myths You Should Stop Believing",
    slug: "learning-myths-to-stop-believing",
    content: "Some learning myths hold students back. Let’s debunk them...",
    author: "Kwame Ofori",
    tags: ["myths", "education"],
    image: "/images/initial6.jpg",
    published: true
  },
  {
    title: "Study Smarter, Not Harder",
    slug: "study-smarter-not-harder",
    content: "Use scientifically proven methods to retain more knowledge...",
    author: "Grace Amponsah",
    tags: ["study", "tips", "science"],
    image: "/images/initial7.jpg",
    published: true
  },
  {
    title: "Effective Note-Taking for Fast Learners",
    slug: "effective-note-taking",
    content: "Master the Cornell and outline method to study efficiently...",
    author: "Admin",
    tags: ["notes", "productivity"],
    image: "/images/initial8.jpg",
    published: true
  },
  {
    title: "How Cognitutor Supports Adult Learners",
    slug: "supporting-adult-learners",
    content: "We believe learning never stops, no matter your age...",
    author: "Michael Nortey",
    tags: ["adult", "learning"],
    image: "/images/initial9.jpg",
    published: true
  },
  {
    title: "The Power of Personalized Learning",
    slug: "personalized-learning-benefits",
    content: "Personalized learning tailors content to your pace...",
    author: "Grace Amponsah",
    tags: ["personalization", "edtech"],
    image: "/images/initial10.jpg",
    published: true
  }
]
