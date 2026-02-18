import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - Free CodeAcademy',
  description: 'Latest articles and tutorials about programming',
};

// Sample blog posts data
const blogPosts = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js 15',
    excerpt: 'Learn how to build modern web applications with Next.js 15 and the App Router.',
    date: '2026-02-15',
    category: 'Next.js',
    readTime: '10 min read',
  },
  {
    slug: 'react-server-components',
    title: 'Understanding React Server Components',
    excerpt: 'Deep dive into Server Components and when to use them in your applications.',
    date: '2026-02-10',
    category: 'React',
    readTime: '8 min read',
  },
  {
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices for 2026',
    excerpt: 'Master TypeScript with these essential tips and patterns for clean code.',
    date: '2026-02-05',
    category: 'TypeScript',
    readTime: '12 min read',
  },
  {
    slug: 'tailwind-css-tips',
    title: 'Tailwind CSS Tips and Tricks',
    excerpt: 'Speed up your workflow with these powerful Tailwind CSS techniques.',
    date: '2026-02-01',
    category: 'CSS',
    readTime: '6 min read',
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Our Blog</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest trends, tutorials, and best practices in web development.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="glass-card overflow-hidden card-hover"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-400 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3 hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className="text-blue-400 font-medium group-hover:underline">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 glass-card p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Get the latest articles and resources delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="btn-primary font-bold whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
