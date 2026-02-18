'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CourseViewer from '@/components/CourseViewer';
import type { Course } from '@/lib/types';

async function loadCourses() {
  const { courses } = await import('@/lib/courses');
  return courses;
}

export default function PythonCoursePage() {
  const searchParams = useSearchParams();
  const startLearning = searchParams.get('start') === 'true';
  
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCourses()
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load courses:', err);
        setLoading(false);
      });
  }, []);

  // Show course viewer if ?start=true
  if (startLearning && !loading) {
    return <CourseViewer courseId="python" courses={courses} />;
  }

  // Show landing page otherwise
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900">
      {/* Header Section */}
      <section className="py-16 md:py-24">
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
              className="text-7xl mb-6"
            >
              🐍
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              PYTHON <span className="gradient-text">COURSE</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Complete Python training from beginner to advanced - Master one of the most popular programming languages!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Course Card - Single Box like OpenAI */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="glass-card p-8 rounded-2xl h-full flex flex-col card-hover">
                <div className="h-32 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br from-green-400 to-teal-600 shadow-lg">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                    className="text-7xl"
                  >
                    📖
                  </motion.span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">PYTHON COURSE</h3>
                <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
                  Complete Python training from basic to advanced. Master variables, functions, OOP, file handling, decorators, async/await, and build real-world projects.
                </p>
                <div className="flex items-center gap-2 text-gray-400 mb-6">
                  <span className="text-sm">📖</span>
                  <span className="text-sm">Basic to Advanced</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-sm">25 Chapters Total</span>
                </div>
                <Link
                  href="/courses/python?start=true"
                  className="w-full py-4 px-6 bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105"
                >
                  <span>START LEARNING</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-blue-900/20 border-y border-white/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What You'll <span className="gradient-text">Learn</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Complete Python curriculum from basic to advanced
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 md:col-span-2"
            >
              <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
                <span className="text-3xl">🐍</span>
                Python Course Content
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {[
                  'Variables and data types',
                  'Conditionals (if/elif/else)',
                  'Loops (for, while)',
                  'Functions (args, kwargs, lambda)',
                  'Lists and list comprehension',
                  'Dictionaries and sets',
                  'String manipulation',
                  'File handling',
                  'Exception handling',
                  'Classes and OOP',
                  'Inheritance',
                  'Modules and packages',
                  'Decorators and generators',
                  'Context managers',
                  'Data classes and type hints',
                  'Multithreading and async/await',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span className="text-green-400">✓</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                className="text-center p-6 glass-card rounded-2xl"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-black text-white mb-4">
              🎯 100% FREE FOREVER
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              No hidden fees, no subscriptions, no credit card required
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/courses/python?start=true"
                className="btn-primary text-lg"
              >
                Start Python Course
              </Link>
              <Link
                href="/courses"
                className="btn-secondary text-lg"
              >
                ← Back to All Courses
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
