import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// Sample data - In real app, fetch from CMS/database
const posts: Record<string, { title: string; content: string; date: string; category: string; readTime: string }> = {
  'getting-started-with-nextjs': {
    title: 'Getting Started with Next.js 15',
    content: `
      <p>Next.js 15 brings exciting new features and improvements to the React framework. In this comprehensive guide, we'll explore everything you need to know to get started.</p>
      
      <h2>What's New in Next.js 15?</h2>
      <p>Next.js 15 introduces several improvements including better App Router stability, enhanced caching mechanisms, and improved developer experience.</p>
      
      <h2>Setting Up Your First Project</h2>
      <p>Getting started is easier than ever with create-next-app. Simply run:</p>
      <pre><code>npx create-next-app@latest my-app
cd my-app
npm run dev</code></pre>
      
      <h2>Understanding the App Router</h2>
      <p>The App Router is now the recommended way to build applications in Next.js. It provides:</p>
      <ul>
        <li>File-based routing with nested layouts</li>
        <li>Server Components by default</li>
        <li>Built-in data fetching</li>
        <li>Automatic code splitting</li>
      </ul>
      
      <h2>Server vs Client Components</h2>
      <p>Understanding when to use Server Components versus Client Components is crucial for optimal performance.</p>
      
      <h2>Conclusion</h2>
      <p>Next.js 15 is a powerful framework that makes building web applications easier and more efficient.</p>
    `,
    date: '2026-02-15',
    category: 'Next.js',
    readTime: '10 min read',
  },
  'react-server-components': {
    title: 'Understanding React Server Components',
    content: `
      <p>React Server Components represent a paradigm shift in how we build React applications. Let's dive deep into understanding them.</p>
      
      <h2>What are Server Components?</h2>
      <p>Server Components are React components that render exclusively on the server. They don't send JavaScript to the client, resulting in smaller bundle sizes.</p>
      
      <h2>Benefits of Server Components</h2>
      <ul>
        <li>Zero bundle size for server-only components</li>
        <li>Direct access to backend resources</li>
        <li>Automatic code splitting</li>
        <li>Improved initial page load</li>
      </ul>
      
      <h2>When to Use Server Components</h2>
      <p>Use Server Components for:</p>
      <ul>
        <li>Data fetching</li>
        <li>Accessing backend resources</li>
        <li>Keeping sensitive logic on the server</li>
        <li>Reducing JavaScript bundle size</li>
      </ul>
      
      <h2>When to Use Client Components</h2>
      <p>Use Client Components when you need:</p>
      <ul>
        <li>Interactivity (onClick, onChange, etc.)</li>
        <li>State management (useState, useReducer)</li>
        <li>Browser APIs (localStorage, window)</li>
        <li>Event listeners</li>
      </ul>
    `,
    date: '2026-02-10',
    category: 'React',
    readTime: '8 min read',
  },
  'typescript-best-practices': {
    title: 'TypeScript Best Practices for 2026',
    content: `
      <p>TypeScript has become essential for modern web development. Here are the best practices to follow in 2026.</p>
      
      <h2>1. Use Strict Mode</h2>
      <p>Always enable strict mode in your tsconfig.json for better type safety.</p>
      
      <h2>2. Avoid 'any' Type</h2>
      <p>Use 'unknown' instead of 'any' when you don't know the type. This maintains type safety.</p>
      
      <h2>3. Use Interface for Objects</h2>
      <p>Prefer interfaces over type aliases for object shapes for better extensibility.</p>
      
      <h2>4. Leverage Utility Types</h2>
      <p>Make use of built-in utility types like Partial, Pick, Omit, and Record.</p>
      
      <h2>5. Generic Types</h2>
      <p>Use generics to create reusable, type-safe components and functions.</p>
    `,
    date: '2026-02-05',
    category: 'TypeScript',
    readTime: '12 min read',
  },
  'tailwind-css-tips': {
    title: 'Tailwind CSS Tips and Tricks',
    content: `
      <p>Tailwind CSS has revolutionized how we style web applications. Here are some tips to boost your productivity.</p>
      
      <h2>1. Use Component Classes</h2>
      <p>Extract repeated patterns using @apply directive or create reusable components.</p>
      
      <h2>2. Leverage Arbitrary Values</h2>
      <p>Use square bracket notation for one-off values: w-[350px]</p>
      
      <h2>3. Dark Mode</h2>
      <p>Implement dark mode easily with the dark: prefix and class strategy.</p>
      
      <h2>4. Responsive Design</h2>
      <p>Use responsive prefixes (sm:, md:, lg:, xl:) for mobile-first design.</p>
      
      <h2>5. Custom Configuration</h2>
      <p>Extend the default theme in tailwind.config.js for your design system.</p>
    `,
    date: '2026-02-01',
    category: 'CSS',
    readTime: '6 min read',
  },
};

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  return {
    title: `${post.title} - Free CodeAcademy`,
    description: post.content.slice(0, 160),
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
        <Link href="/blog" className="text-blue-400 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Blog
      </Link>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-400 rounded-full">
            {post.category}
          </span>
          <span className="text-sm text-gray-500">{post.readTime}</span>
          <span className="text-sm text-gray-500">{post.date}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {post.title}
        </h1>
      </header>

      <div
        className="prose prose-lg prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <hr className="my-12 border-slate-700" />

      <div className="flex justify-between items-center">
        <Link href="/blog" className="text-blue-400 hover:underline font-medium">
          ← View All Posts
        </Link>
        <div className="flex gap-4">
          <span className="text-gray-400">Share:</span>
          <button className="text-gray-400 hover:text-blue-400 transition-colors">
            Twitter
          </button>
          <button className="text-gray-400 hover:text-blue-400 transition-colors">
            LinkedIn
          </button>
        </div>
      </div>
    </article>
  );
}
