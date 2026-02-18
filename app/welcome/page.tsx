'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function WelcomePage() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    
    // Check if welcome has already been shown
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    if (hasSeenWelcome) {
      router.push('/');
      return;
    }

    // Animation sequence
    const step1Timer = setTimeout(() => setCurrentStep(1), 100);
    const step2Timer = setTimeout(() => setCurrentStep(2), 800);
    const step3Timer = setTimeout(() => setCurrentStep(3), 1600);
    const step4Timer = setTimeout(() => setCurrentStep(4), 2400);
    
    // Redirect after animation
    const redirectTimer = setTimeout(() => {
      localStorage.setItem('hasSeenWelcome', 'true');
      router.push('/');
    }, 5000);

    return () => {
      clearTimeout(step1Timer);
      clearTimeout(step2Timer);
      clearTimeout(step3Timer);
      clearTimeout(step4Timer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/30 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="text-center relative z-10 px-4 max-w-5xl mx-auto">
        {/* Logo/Icon */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={currentStep >= 0 ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-8xl md:text-9xl mb-8"
        >
          💻
        </motion.div>

        {/* WELCOME Text */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={currentStep >= 1 ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            WELCOME
          </span>
        </motion.h1>

        {/* TO Text */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={currentStep >= 2 ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8"
        >
          TO
        </motion.h2>

        {/* FREE CODEACADEMY Text */}
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={currentStep >= 3 ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black mb-12"
        >
          <span className="bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
            FREE CODEACADEMY
          </span>
        </motion.h1>

        {/* Loading Indicator */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={currentStep >= 3 ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, type: 'spring' }}
          className="mb-8"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white font-medium">Loading your learning journey...</span>
          </div>
        </motion.div>

        {/* Technology Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={currentStep >= 4 ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {['Python', 'JavaScript', 'TypeScript', 'Next.js', 'OpenAI'].map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ y: 20, opacity: 0 }}
              animate={currentStep >= 4 ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              className="px-5 py-2 bg-white/10 backdrop-blur-lg rounded-full text-white text-sm font-medium border border-white/20"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={currentStep >= 1 ? { width: '100%', opacity: 1 } : {}}
          transition={{ duration: 4.5, delay: 0.5 }}
          className="max-w-md mx-auto h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full"
        />

        {/* Redirect Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={currentStep >= 4 ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-gray-400 text-sm mt-6"
        >
          Redirecting to home page...
        </motion.p>
      </div>
    </div>
  );
}
