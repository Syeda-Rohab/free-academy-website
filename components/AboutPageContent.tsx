'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Globe, Users, Award, BookOpen, Zap, Mail } from 'lucide-react';
import Link from 'next/link';

export default function AboutPageContent() {
  const [activeTab, setActiveTab] = useState('founder');

  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Free Education',
      description: 'All courses are completely free, forever. No hidden fees or subscriptions.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Offline Access',
      description: 'Learn anywhere, even without internet. Progress syncs when online.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community',
      description: 'Join thousands of learners worldwide in our supportive community.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Quality Content',
      description: 'Expert-designed curriculum with hands-on projects and quizzes.',
      color: 'from-green-500 to-emerald-500',
    },
  ];

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
              🎓
            </motion.div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 px-4">
              About <span className="gradient-text">CodeAcademy</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 px-4">
              Empowering learners worldwide with free, accessible programming education
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Tabs Section */}
      <section className="py-6 sm:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {[
              { id: 'founder', label: 'Founder', icon: '👩‍💻' },
              { id: 'mission', label: 'Mission', icon: '🎯' },
              { id: 'features', label: 'Features', icon: '✨' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
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

      {/* 3. Tab Content */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          {activeTab === 'founder' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-5xl mx-auto"
            >
              <div className="glass-card p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl sm:rounded-3xl">
                <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0"
                  >
                    <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-blue-400 via-cyan-500 to-blue-600 flex items-center justify-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl shadow-2xl border-4 border-white/20">
                      👩‍💻
                    </div>
                  </motion.div>
                  <div className="text-center md:text-left flex-1">
                    <motion.h2
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 break-words"
                    >
                      SYEDA ROHAB ALI
                    </motion.h2>
                    <motion.p
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-base sm:text-lg md:text-xl text-blue-400 font-bold mb-4 sm:mb-6"
                    >
                      Creator & Founder
                    </motion.p>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4"
                    >
                      Syeda Rohab Ali is a passionate educator and software engineer who believes that
                      quality education should be accessible to everyone, regardless of their economic
                      background. With years of experience in web development and teaching, she founded
                      Free CodeAcademy to democratize programming education.
                    </motion.p>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed"
                    >
                      Her vision is to create a world where anyone can learn to code and build amazing
                      things, regardless of their location or financial situation. Through this platform,
                      she aims to remove barriers and make learning programming free and accessible for all.
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'mission' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-5xl mx-auto space-y-4 sm:space-y-6"
            >
              {[
                {
                  icon: <Globe className="h-6 w-6 sm:h-8 sm:w-8" />,
                  title: 'Democratizing Education',
                  description: 'We believe that quality programming education should be accessible to everyone. Our mission is to eliminate financial barriers that prevent people from learning to code. No matter where you are in the world, you deserve the opportunity to learn and grow.',
                  color: 'from-blue-500 to-cyan-500',
                },
                {
                  icon: <Heart className="h-6 w-6 sm:h-8 sm:w-8" />,
                  title: 'Empowering Learners',
                  description: 'We provide comprehensive, up-to-date courses that equip learners with practical skills needed in today\'s technology landscape. Our curriculum is designed by industry experts and continuously updated to reflect current best practices and modern frameworks.',
                  color: 'from-purple-500 to-pink-500',
                },
                {
                  icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
                  title: 'Building Communities',
                  description: 'Learning to code can be challenging, but it doesn\'t have to be lonely. We foster supportive communities where learners can connect, collaborate, share knowledge, and grow together. Together, we build a stronger, more inclusive tech industry.',
                  color: 'from-green-500 to-emerald-500',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4 md:space-x-6">
                    <div className={`inline-flex p-3 sm:p-4 rounded-2xl bg-gradient-to-r ${item.color} flex-shrink-0`}>
                      <div className="text-white">{item.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">{item.title}</h3>
                      <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'features' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl card-hover"
                  >
                    <div className={`inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${feature.color} mb-4 sm:mb-6`}>
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-blue-600/20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-6 px-4">
              Ready to Start Learning?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
              Join thousands of students who have started their programming journey with Free CodeAcademy
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                href="/courses"
                className="btn-primary text-base sm:text-lg py-2 sm:py-3 px-6 sm:px-8"
              >
                🚀 Explore Courses Now
              </Link>
              <a
                href="mailto:contact@codeacademy.com"
                className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-bold text-sm sm:text-base md:text-lg rounded-full hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
