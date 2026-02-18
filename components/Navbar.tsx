'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import SyncStatus from './SyncStatus';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About', path: '/about' },
    { name: 'Progress', path: '/progress' },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/10 shadow-2xl backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LEFT SIDE - Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 rounded-lg bg-white/10 hover:bg-blue-500/20 transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>

          {/* CENTER - Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  pathname === item.path
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-blue-500/20'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* RIGHT SIDE - Logo & Sync Status */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <SyncStatus />
            </div>
            
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="text-3xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                CODEACADEMY
              </div>
              <div className="text-3xl group-hover:rotate-12 transition-transform duration-300">
                💻
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-2 pt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`px-4 py-3 rounded-lg font-medium ${
                      pathname === item.path
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-blue-500/20'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-2">
                  <SyncStatus />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
