'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const WelcomeAnimation = () => {
  const router = useRouter();
  const [showWelcome, setShowWelcome] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state on client side
  useEffect(() => {
    setIsMounted(true);
    // Check if welcome animation has already been shown
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    if (!hasSeenWelcome) {
      setShowWelcome(true);
      // Automatically redirect after 5 seconds
      const timer = setTimeout(() => {
        setShowWelcome(false);
        localStorage.setItem('hasSeenWelcome', 'true');
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      router.push('/');
    }
  }, [router]);

  // Handle redirect after animation
  useEffect(() => {
    if (!showWelcome && isMounted) {
      router.push('/');
    }
  }, [showWelcome, isMounted, router]);

  if (!isMounted) {
    return null; // Don't render anything on the server
  }

  return (
    <AnimatePresence>
      {showWelcome && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600"
        >
          <div className="text-center">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-7xl font-bold text-white mb-4"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-400">
                WELCOME
              </span>
            </motion.h1>
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-8xl md:text-9xl font-extrabold text-white"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
                TO
              </span>
            </motion.h2>
            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-8 text-6xl md:text-8xl font-bold text-white"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-pink-400">
                FREE CODEACADEMY
              </span>
            </motion.h1>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2, type: 'spring', stiffness: 100 }}
              className="mt-12"
            >
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeAnimation;