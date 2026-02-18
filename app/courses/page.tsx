'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CoursesPage() {
  const courses = [
    {
      id: 'python',
      title: 'Python Programming',
      description: 'Master Python from basics to advanced. Learn variables, functions, OOP, and more.',
      icon: '🐍',
      color: 'from-green-400 to-emerald-600',
      chapters: 7,
    },
    {
      id: 'javascript',
      title: 'JavaScript Programming',
      description: 'Complete JavaScript course with 21 chapters: Setup, Variables, Functions, Arrays, Objects, DOM, Events, Async, ES6+, and 2 projects.',
      icon: '☕',
      color: 'from-yellow-400 to-orange-600',
      chapters: 21,
    },
    {
      id: 'typescript',
      title: 'TypeScript Programming',
      description: 'Complete TypeScript course covering types, interfaces, generics, decorators, async/await, and advanced type system features.',
      icon: '📝',
      color: 'from-blue-400 to-indigo-600',
      chapters: 13,
    },
    {
      id: 'nextjs',
      title: 'Next.js Framework',
      description: 'Build modern web apps with Next.js 15, App Router, Server Components, and deployment.',
      icon: '⚛️',
      color: 'from-violet-400 to-purple-600',
      chapters: 3,
    },
    {
      id: 'openai',
      title: 'OpenAI Agent SDK',
      description: 'Create AI agents with OpenAI SDK. Learn setup, tools, functions, and deployment.',
      icon: '🤖',
      color: 'from-cyan-400 to-blue-600',
      chapters: 3,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 overflow-x-hidden">
      {/* Header Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.5, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6"
            >
              📚
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 sm:mb-6 px-4">
              OUR <span className="gradient-text">FREE COURSES</span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto px-4">
              Choose your learning path and start coding today
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="pb-16 sm:pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl h-full flex flex-col card-hover">
                  {/* Icon */}
                  <div className={`h-24 sm:h-28 md:h-32 rounded-2xl mb-4 sm:mb-6 flex items-center justify-center bg-gradient-to-br ${course.color} shadow-lg`}>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, type: 'spring' }}
                      className="text-5xl sm:text-6xl md:text-7xl"
                    >
                      {course.icon}
                    </motion.span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 break-words">{course.title.toUpperCase()}</h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 flex-grow leading-relaxed">{course.description}</p>

                  {/* Chapters Info */}
                  <div className="flex items-center gap-2 text-gray-400 mb-4 sm:mb-6 flex-wrap">
                    <span className="text-sm">📖</span>
                    <span className="text-sm">{course.chapters} Chapters</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-sm">Basic + Advanced</span>
                  </div>

                  {/* Start Button */}
                  <Link
                    href={`/courses/${course.id}`}
                    className="w-full py-3 sm:py-4 px-4 sm:px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105"
                  >
                    <span>START LEARNING</span>
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-slate-900 to-blue-900/20 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: '🎯',
                title: 'Structured Learning',
                description: 'Step-by-step chapters from basic to advanced',
              },
              {
                icon: '💻',
                title: 'Hands-on Coding',
                description: 'Practical examples and exercises',
              },
              {
                icon: '📝',
                title: 'Quizzes',
                description: 'Test your knowledge after each chapter',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 sm:p-6"
              >
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 sm:p-8 md:p-12 max-w-3xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4 px-4">
              🎯 100% FREE FOREVER
            </h2>
            <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
              No hidden fees, no subscriptions, no credit card required
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                href="/courses/python"
                className="btn-primary text-base sm:text-lg py-2 sm:py-3 px-6 sm:px-8"
              >
                Start with Python
              </Link>
              <Link
                href="/progress"
                className="btn-secondary text-base sm:text-lg py-2 sm:py-3 px-6 sm:px-8"
              >
                Track Your Progress →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
