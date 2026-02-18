'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useProgressStore } from '@/stores/progress';
import { Trophy, BookOpen, Percent, TrendingUp, Target } from 'lucide-react';

export default function ProgressPageClient() {
  const { progress } = useProgressStore();
  const [activeTab, setActiveTab] = useState('overview');

  const courses = [
    { id: 'python', name: 'Python Programming', icon: '🐍', color: 'from-green-400 to-emerald-500' },
    { id: 'javascript', name: 'JavaScript Programming', icon: '☕', color: 'from-yellow-400 to-orange-500' },
    { id: 'typescript', name: 'TypeScript Programming', icon: '📝', color: 'from-blue-400 to-indigo-500' },
    { id: 'nextjs', name: 'Next.js Framework', icon: '⚛️', color: 'from-violet-400 to-purple-500' },
    { id: 'openai', name: 'OpenAI Agent SDK', icon: '🤖', color: 'from-cyan-400 to-blue-500' }
  ];

  const totalChapters = courses.length * 10;
  const completedChapters = Object.keys(progress).filter(key => progress[key]?.completed).length;
  const overallProgress = totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0;

  const quizScores = Object.keys(progress).map(key => progress[key]?.score).filter(score => score > 0);
  const averageScore = quizScores.length > 0
    ? Math.round(quizScores.reduce((a, b) => a + b, 0) / quizScores.length)
    : 0;

  const StatCard = ({ icon, value, label, color }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-4 sm:p-6 rounded-2xl text-center card-hover"
    >
      <div className={`inline-flex p-3 sm:p-4 rounded-full bg-gradient-to-br ${color} mb-3 sm:mb-4`}>
        {icon}
      </div>
      <div className="text-2xl sm:text-3xl font-black text-white mb-1 sm:mb-2">{value}</div>
      <div className="text-gray-400 font-medium text-xs sm:text-sm">{label}</div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 overflow-x-hidden">
      {/* 1. Header Section */}
      <section className="py-10 sm:py-12 md:py-16 border-b border-white/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.5, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl mb-3 sm:mb-4"
            >
              📊
            </motion.div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 px-4">
              Progress <span className="gradient-text">Dashboard</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 px-4">Track your learning journey and achievements</p>
          </motion.div>
        </div>
      </section>

      {/* 2. Stats Cards */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            <StatCard
              icon={<TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-white" />}
              value={`${overallProgress}%`}
              label="Overall Progress"
              color="from-blue-500/20 to-cyan-500/20"
            />
            <StatCard
              icon={<Percent className="h-6 w-6 sm:h-8 sm:w-8 text-white" />}
              value={`${averageScore > 0 ? averageScore : '--'}%`}
              label="Average Quiz Score"
              color="from-purple-500/20 to-pink-500/20"
            />
            <StatCard
              icon={<BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-white" />}
              value={completedChapters}
              label="Chapters Completed"
              color="from-green-500/20 to-emerald-500/20"
            />
          </div>
        </div>
      </section>

      {/* 3. Tabs Section */}
      <section className="pb-6 sm:pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {[
              { id: 'overview', label: 'Overview', icon: '📈' },
              { id: 'courses', label: 'My Courses', icon: '📚' },
              { id: 'quizzes', label: 'Quiz Scores', icon: '📝' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-xl font-bold text-xs sm:text-sm md:text-base transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg scale-105'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <span className="mr-1 sm:mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Tab Content */}
      <section className="pb-12 sm:pb-16 md:pb-20">
        <div className="container mx-auto px-4">
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto"
            >
              {/* Progress Circle */}
              <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                  <Target className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-blue-400" />
                  Overall Progress
                </h3>
                <div className="flex items-center justify-center">
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#374151" strokeWidth="8" />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 45}`}
                        strokeDashoffset={`${2 * Math.PI * 45 * (1 - overallProgress / 100)}`}
                        transform="rotate(-90 50 50)"
                        initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                        animate={{ strokeDashoffset: 2 * Math.PI * 45 * (1 - overallProgress / 100) }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#60a5fa" />
                          <stop offset="50%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white">{overallProgress}%</span>
                      <span className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">Complete</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                  <Trophy className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-yellow-400" />
                  Recent Activity
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {Object.keys(progress).length > 0 ? (
                    Object.entries(progress).slice(-5).reverse().map(([key, data]: any, index) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center p-3 sm:p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-all"
                      >
                        <div className="mr-2 sm:mr-4 text-2xl sm:text-3xl">
                          {data.score >= 80 ? '🏆' : data.score >= 60 ? '⭐' : '📚'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-white text-sm sm:text-base truncate">{data.course}</div>
                          <div className="text-xs sm:text-sm text-gray-400">
                            Chapter {data.chapter} • Score: {data.score}%
                          </div>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="text-center py-8 sm:py-12 px-4">
                      <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">📚</div>
                      <p className="text-gray-400 text-sm sm:text-base">No activity yet. Start learning!</p>
                      <a href="/courses" className="btn-primary inline-block mt-3 sm:mt-4 text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6">
                        Browse Courses
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'courses' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto"
            >
              {courses.map((course, index) => {
                const courseProgress = Object.values(progress).filter(
                  (p: any) => p?.courseId === course.id && p?.completed
                ).length;
                const coursePercentage = courseProgress > 0 ? Math.round((courseProgress / 10) * 100) : 0;

                return (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card p-4 sm:p-6 rounded-2xl card-hover"
                  >
                    <div className={`h-16 sm:h-20 rounded-xl mb-3 sm:mb-4 flex items-center justify-center bg-gradient-to-r ${course.color}`}>
                      <span className="text-3xl sm:text-4xl">{course.icon}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 break-words">{course.name}</h3>
                    <div className="mb-2">
                      <div className="flex justify-between text-xs sm:text-sm text-gray-300 mb-1 sm:mb-2">
                        <span>Progress</span>
                        <span className="font-bold">{coursePercentage}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${coursePercentage}%` }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className={`h-full bg-gradient-to-r ${course.color} rounded-full`}
                        />
                      </div>
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm mt-2 sm:mt-3">
                      {courseProgress}/10 chapters completed
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {activeTab === 'quizzes' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl max-w-6xl mx-auto"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Percent className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-blue-400" />
                Quiz Scores
              </h3>
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="w-full min-w-[600px] sm:min-w-0">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm font-bold text-gray-300 uppercase whitespace-nowrap">Course</th>
                      <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm font-bold text-gray-300 uppercase whitespace-nowrap">Chapter</th>
                      <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm font-bold text-gray-300 uppercase whitespace-nowrap">Score</th>
                      <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm font-bold text-gray-300 uppercase whitespace-nowrap">Status</th>
                      <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm font-bold text-gray-300 uppercase whitespace-nowrap">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(progress)
                      .filter(([_, data]: any) => (data as any)?.score > 0)
                      .map(([key, data]: any, index) => (
                        <motion.tr
                          key={key}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="border-b border-white/5 hover:bg-white/5 transition-colors"
                        >
                          <td className="py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base text-white font-medium whitespace-nowrap">{(data as any).course}</td>
                          <td className="py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm text-gray-300 whitespace-nowrap">Chapter {(data as any).chapter}</td>
                          <td className="py-3 sm:py-4 px-3 sm:px-4">
                            <span className={`font-bold text-sm sm:text-base md:text-lg ${
                              (data as any).score >= 80 ? 'text-green-400' :
                              (data as any).score >= 60 ? 'text-yellow-400' : 'text-red-400'
                            }`}>
                              {(data as any).score}%
                            </span>
                          </td>
                          <td className="py-3 sm:py-4 px-3 sm:px-4">
                            <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold ${
                              (data as any).score >= 80 ? 'bg-green-500/20 text-green-400' :
                              (data as any).score >= 60 ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-red-500/20 text-red-400'
                            }`}>
                              {(data as any).score >= 80 ? 'Excellent' : (data as any).score >= 60 ? 'Good' : 'Needs Practice'}
                            </span>
                          </td>
                          <td className="py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm text-gray-400 whitespace-nowrap">
                            {(data as any).timestamp ? new Date((data as any).timestamp).toLocaleDateString() : 'N/A'}
                          </td>
                        </motion.tr>
                      ))}
                    {Object.keys(progress).filter(k => (progress as any)[k]?.score > 0).length === 0 && (
                      <tr>
                        <td colSpan={5} className="py-8 sm:py-12 text-center text-gray-400 px-4">
                          <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">📝</div>
                          <p className="text-sm sm:text-base">No quiz attempts yet. Complete a quiz to see your scores!</p>
                          <a href="/courses" className="btn-primary inline-block mt-3 sm:mt-4 text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6">
                            Start Learning
                          </a>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
