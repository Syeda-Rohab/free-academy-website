import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dashboard - Free CodeAcademy',
  description: 'Your learning dashboard',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Dashboard Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 hidden lg:block">
        <div className="p-6">
          <h2 className="text-xl font-bold text-white mb-6">Dashboard</h2>
          <nav className="space-y-2">
            <Link
              href="/dashboard"
              className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-800 hover:text-white transition-colors"
            >
              📊 Overview
            </Link>
            <Link
              href="/dashboard/courses"
              className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-800 hover:text-white transition-colors"
            >
              📚 My Courses
            </Link>
            <Link
              href="/dashboard/progress"
              className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-800 hover:text-white transition-colors"
            >
              📈 Progress
            </Link>
          </nav>
        </div>
      </aside>

      {/* Dashboard Content */}
      <main className="flex-1 bg-slate-950">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
