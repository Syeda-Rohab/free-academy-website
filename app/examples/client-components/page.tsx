import type { Metadata } from 'next';
import Counter from '@/components/Counter';
import SearchUsers from '@/components/SearchUsers';

export const metadata: Metadata = {
  title: 'Client Components Examples - Free CodeAcademy',
  description: 'Examples of Client Components in Next.js',
};

/**
 * This page demonstrates Server Component (default)
 * It can import and render Client Components
 */
export default function ClientExamplesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Client vs Server Components
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Understanding when to use Client Components (with &apos;use client&apos;) 
            versus Server Components (default in Next.js)
          </p>
        </div>

        {/* Server Component Section */}
        <div className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            🖥️ Server Component (This Page)
          </h2>
          <div className="text-gray-300 space-y-4">
            <p>
              This page itself is a <strong className="text-blue-400">Server Component</strong>. 
              It renders on the server and sends HTML to the client.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>✅ Zero bundle size</li>
              <li>✅ Direct database/API access</li>
              <li>✅ SEO friendly</li>
              <li>✅ Fast initial page load</li>
            </ul>
          </div>
        </div>

        {/* Client Component Examples */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 text-center">
              ⚡ Interactive Counter
            </h2>
            <Counter initialCount={10} />
            <div className="mt-4 text-gray-400 text-sm text-center">
              Uses useState - Must be Client Component
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4 text-center">
              🔍 Search Users
            </h2>
            <SearchUsers />
            <div className="mt-4 text-gray-400 text-sm text-center">
              Uses useEffect & fetch - Must be Client Component
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="glass-card p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            📊 When to Use Each
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="pb-4 text-blue-400 font-bold">Server Components</th>
                  <th className="pb-4 text-green-400 font-bold">Client Components</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-slate-800">
                  <td className="py-4">Data fetching (API calls)</td>
                  <td className="py-4">Interactivity (onClick, onChange)</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-4">Database access</td>
                  <td className="py-4">State management (useState, useReducer)</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-4">Keep sensitive logic on server</td>
                  <td className="py-4">Browser APIs (localStorage, window)</td>
                </tr>
                <tr>
                  <td className="py-4">Reduce JavaScript bundle</td>
                  <td className="py-4">Event listeners</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
