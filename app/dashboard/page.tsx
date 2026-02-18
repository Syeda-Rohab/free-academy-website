import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dashboard Overview - Free CodeAcademy',
  description: 'Overview of your learning progress',
};

// Server Component - Data fetching example
async function getUserStats() {
  // Simulating API call
  await new Promise((resolve) => setTimeout(resolve, 100));
  return {
    coursesCompleted: 5,
    hoursLearned: 42,
    currentStreak: 7,
    totalPoints: 1250,
  };
}

export default async function DashboardPage() {
  const stats = await getUserStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 overflow-x-hidden">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 px-4">Welcome Back!</h1>
        <p className="text-sm sm:text-base text-gray-400 px-4">Here&apos;s your learning overview</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="glass-card p-4 sm:p-6">
          <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">📚</div>
          <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stats.coursesCompleted}</div>
          <div className="text-gray-400 text-xs sm:text-sm">Courses Completed</div>
        </div>
        <div className="glass-card p-4 sm:p-6">
          <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">⏱️</div>
          <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stats.hoursLearned}h</div>
          <div className="text-gray-400 text-xs sm:text-sm">Hours Learned</div>
        </div>
        <div className="glass-card p-4 sm:p-6">
          <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">🔥</div>
          <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stats.currentStreak} days</div>
          <div className="text-gray-400 text-xs sm:text-sm">Current Streak</div>
        </div>
        <div className="glass-card p-4 sm:p-6">
          <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">⭐</div>
          <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stats.totalPoints}</div>
          <div className="text-gray-400 text-xs sm:text-sm">Total Points</div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="glass-card p-4 sm:p-6 mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">Recent Activity</h2>
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-800/50 rounded-lg">
            <div className="min-w-0 flex-1">
              <h3 className="text-white font-medium text-sm sm:text-base truncate">Completed Next.js Basics</h3>
              <p className="text-gray-400 text-xs sm:text-sm">2 hours ago</p>
            </div>
            <span className="text-green-400 font-medium text-xs sm:text-sm flex-shrink-0 ml-2">✓ Completed</span>
          </div>
          <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-800/50 rounded-lg">
            <div className="min-w-0 flex-1">
              <h3 className="text-white font-medium text-sm sm:text-base truncate">Started Advanced React</h3>
              <p className="text-gray-400 text-xs sm:text-sm">5 hours ago</p>
            </div>
            <span className="text-blue-400 font-medium text-xs sm:text-sm flex-shrink-0 ml-2">▶ In Progress</span>
          </div>
          <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-800/50 rounded-lg">
            <div className="min-w-0 flex-1">
              <h3 className="text-white font-medium text-sm sm:text-base truncate">Earned TypeScript Badge</h3>
              <p className="text-gray-400 text-xs sm:text-sm">1 day ago</p>
            </div>
            <span className="text-yellow-400 font-medium text-xs sm:text-sm flex-shrink-0 ml-2">🏆 Achievement</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <Link href="/courses" className="glass-card p-4 sm:p-6 card-hover">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2">Continue Learning</h3>
          <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">Pick up where you left off</p>
          <span className="text-blue-400 font-medium text-sm sm:text-base">Browse Courses →</span>
        </Link>
        <Link href="/dashboard/courses" className="glass-card p-4 sm:p-6 card-hover">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2">My Courses</h3>
          <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">View enrolled courses</p>
          <span className="text-blue-400 font-medium text-sm sm:text-base">View All →</span>
        </Link>
      </div>
    </div>
  );
}
