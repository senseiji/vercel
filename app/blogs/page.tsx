import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ML Academy Blog - AI, Machine Learning, and Agentic Design Insights",
  description: "Explore expert insights on artificial intelligence, machine learning, agentic design, and intelligent systems. Stay updated with the latest trends and best practices in AI.",
  keywords: "AI blog, machine learning blog, agentic design, artificial intelligence insights, ML Academy, intelligent systems, autonomous agents",
};

const blogPosts = [
  {
    slug: "getting-started-with-agentic-design",
    title: "Getting Started with Agentic Design",
    excerpt: "Learn the fundamental principles of designing intelligent agentic systems that can operate autonomously, make decisions, and collaborate with other agents to solve complex problems.",
    publishedDate: "August 19, 2025",
    readTime: "8 min read",
    author: "Venkatesh Tadinada",
    category: "Agentic Design",
    tags: ["Agentic AI", "Autonomous Systems", "Multi-Agent Architecture"],
  },
  // Placeholder for future blog posts
  {
    slug: "multi-agent-systems-in-practice",
    title: "Multi-Agent Systems in Practice: Real-World Applications",
    excerpt: "Discover how multi-agent systems are revolutionizing industries from finance to healthcare. Explore practical implementations and architectural patterns for scalable agent coordination.",
    publishedDate: "Coming Soon",
    readTime: "6 min read", 
    author: "Peeya Tadinada",
    category: "Implementation",
    tags: ["Multi-Agent", "Real-World AI", "System Architecture"],
    isComingSoon: true,
  },
  {
    slug: "ethical-considerations-in-ai-agents",
    title: "Ethical Considerations in AI Agent Development", 
    excerpt: "Navigate the complex ethical landscape of autonomous AI systems. Learn best practices for responsible agent design and deployment in sensitive applications.",
    publishedDate: "Coming Soon",
    readTime: "7 min read",
    author: "Venkatesh Tadinada", 
    category: "Ethics & AI",
    tags: ["AI Ethics", "Responsible AI", "Autonomous Systems"],
    isComingSoon: true,
  },
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ML Academy Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore cutting-edge insights on artificial intelligence, machine learning, and agentic design. 
            Stay ahead with expert analysis, practical tutorials, and industry best practices.
          </p>
        </header>

        {/* Featured Post */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-center mb-4">
              <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </span>
              <span className="ml-3 text-blue-100">{blogPosts[0].category}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {blogPosts[0].title}
            </h2>
            <p className="text-blue-100 text-lg mb-6 leading-relaxed">
              {blogPosts[0].excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-blue-100 text-sm">
                <span>{blogPosts[0].author}</span>
                <span className="mx-2">•</span>
                <span>{blogPosts[0].publishedDate}</span>
                <span className="mx-2">•</span>
                <span>{blogPosts[0].readTime}</span>
              </div>
              <Link
                href={`/blogs/${blogPosts[0].slug}`}
                className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Read Article
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Categories */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {["All Posts", "Agentic Design", "Implementation", "Ethics & AI", "Tutorials"].map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All Posts"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.slug}
                className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow ${
                  post.isComingSoon ? "opacity-75" : ""
                }`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    {post.isComingSoon && (
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span>{post.author}</span>
                      <span className="mx-1">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    {post.isComingSoon ? (
                      <span className="text-gray-400 text-sm font-medium">
                        Coming Soon
                      </span>
                    ) : (
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )}
                  </div>
                  
                  <div className="text-xs text-gray-400 mt-2">
                    {post.publishedDate}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16 bg-white rounded-xl p-8 md:p-12 shadow-md">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Stay Updated with ML Academy
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get the latest insights on AI, machine learning, and agentic design delivered directly to your inbox. 
              Join our community of forward-thinking practitioners and researchers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </section>

        {/* Back to Home */}
        <nav className="mt-12 pt-8 border-t border-gray-200 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </nav>
      </div>
    </div>
  );
}