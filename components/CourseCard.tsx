'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CourseCardProps {
  course: {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
  };
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileHover={{ y: -10, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="glass-card p-6 card-hover h-full flex flex-col"
    >
      {/* Icon Section */}
      <div className={`h-40 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${course.color} shadow-lg`}>
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="text-6xl"
        >
          {course.icon}
        </motion.span>
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-white mb-3">{course.title}</h3>
      <p className="text-gray-300 mb-6 flex-grow leading-relaxed">{course.description}</p>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
      >
        <span>Start Learning</span>
        <ArrowRight className="h-5 w-5" />
      </motion.button>
    </motion.div>
  );
};

export default CourseCard;
