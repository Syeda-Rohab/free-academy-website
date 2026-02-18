'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, Code, Trophy, Users, Zap, Globe } from 'lucide-react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    if (!hasSeenWelcome) {
      router.push('/welcome');
      return;
    }
  }, [router]);

  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Free Courses',
      description: 'High-quality programming courses completely free',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Hands-on Coding',
      description: 'Practice with interactive coding exercises',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: 'Track Progress',
      description: 'Monitor your learning journey with detailed stats',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community',
      description: 'Join thousands of learners worldwide',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Offline Access',
      description: 'Learn anywhere, even without internet',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Always Available',
      description: 'Learn at your own pace, anytime',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 py-16 sm:py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-80 sm:h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 md:mb-6 leading-tight px-2">
              Learn to Code
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                For Free
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-10 px-4">
              Master programming with our free, interactive courses. From Python to Next.js, start your coding journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link href="/courses" className="btn-primary text-base sm:text-lg py-2 sm:py-3 px-6 sm:px-8">
                🚀 Start Learning Now
              </Link>
              <Link href="/about" className="btn-secondary text-base sm:text-lg py-2 sm:py-3 px-6 sm:px-8">
                ℹ️ Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-slate-900 to-blue-900/20 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { number: '5+', label: 'Free Courses' },
              { number: '50+', label: 'Chapters' },
              { number: '200+', label: 'Quiz Questions' },
              { number: '100%', label: 'Free Forever' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center px-2"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium text-xs sm:text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-slate-900 to-blue-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
              Why Choose <span className="gradient-text">CodeAcademy?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              We make learning programming accessible, engaging, and effective
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-4 sm:p-6 md:p-8 card-hover"
              >
                <div className={`inline-flex p-3 sm:p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-4 sm:mb-6`}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 px-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Join thousands of students learning to code. No credit card required, completely free forever.
            </p>
            <Link
              href="/courses"
              className="inline-block bg-white text-blue-600 font-bold text-base sm:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 mx-4"
            >
              Explore All Courses →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
