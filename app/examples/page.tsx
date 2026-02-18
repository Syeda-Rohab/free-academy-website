import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Examples Index - Next.js Course Examples',
  description: 'Browse all Next.js course examples',
};

export default function ExamplesIndexPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Next.js Course Examples
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hands-on examples covering all Next.js concepts from basics to advanced
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Basic Examples */}
          <Link href="/examples/client-components" className="glass-card p-6 card-hover block">
            <h3 className="text-xl font-bold text-blue-400 mb-3">
              ⚡ Client vs Server Components
            </h3>
            <p className="text-gray-400 mb-4">
              Learn when to use Client Components with &apos;use client&apos; directive
            </p>
            <span className="text-sm text-blue-400">View Example →</span>
          </Link>

          <Link href="/dashboard" className="glass-card p-6 card-hover block">
            <h3 className="text-xl font-bold text-green-400 mb-3">
              📊 Dashboard Layout
            </h3>
            <p className="text-gray-400 mb-4">
              Nested layouts with sidebar navigation
            </p>
            <span className="text-sm text-green-400">View Example →</span>
          </Link>

          <Link href="/blog" className="glass-card p-6 card-hover block">
            <h3 className="text-xl font-bold text-purple-400 mb-3">
              📝 Dynamic Routes
            </h3>
            <p className="text-gray-400 mb-4">
              Blog with [slug] dynamic routing and generateStaticParams
            </p>
            <span className="text-sm text-purple-400">View Example →</span>
          </Link>

          {/* API Examples */}
          <a href="/api/users" target="_blank" className="glass-card p-6 card-hover block">
            <h3 className="text-xl font-bold text-yellow-400 mb-3">
              🌐 API Routes (REST)
            </h3>
            <p className="text-gray-400 mb-4">
              Full CRUD API with GET, POST, PUT, DELETE handlers
            </p>
            <span className="text-sm text-yellow-400">View API →</span>
          </a>

          <Link href="/contact" className="glass-card p-6 card-hover block">
            <h3 className="text-xl font-bold text-red-400 mb-3">
              📧 Contact Form
            </h3>
            <p className="text-gray-400 mb-4">
              Form handling and validation example
            </p>
            <span className="text-sm text-red-400">View Example →</span>
          </Link>

          <Link href="/courses" className="glass-card p-6 card-hover block">
            <h3 className="text-xl font-bold text-cyan-400 mb-3">
              📚 Courses Platform
            </h3>
            <p className="text-gray-400 mb-4">
              Full course listing with filtering and search
            </p>
            <span className="text-sm text-cyan-400">View Example →</span>
          </Link>
        </div>

        {/* Features List */}
        <div className="mt-16 glass-card p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            📋 Concepts Covered
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              <span className="text-gray-300">File-based Routing</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              <span className="text-gray-300">Dynamic Routes [slug]</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              <span className="text-gray-300">Layouts (Root & Nested)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              <span className="text-gray-300">Server Components</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              <span className="text-gray-300">Client Components (&apos;use client&apos;)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              <span className="text-gray-300">API Routes (Route Handlers)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              <span className="text-gray-300">Loading UI (loading.tsx)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              <span className="text-gray-300">Error Handling (error.tsx)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              <span className="text-gray-300">404 Page (not-found.tsx)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              <span className="text-gray-300">generateStaticParams</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              <span className="text-gray-300">Metadata API</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              <span className="text-gray-300">Link Component & Navigation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
