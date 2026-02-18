'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, PlayCircle, Code, List, FileText } from 'lucide-react';
import type { Course, Chapter } from '@/lib/types';
import QuizComponent from './QuizComponent';

interface CourseViewerProps {
  courseId: string;
  courses: Course[];
}

export default function CourseViewer({ courseId, courses }: CourseViewerProps) {
  const [selectedChapter, setSelectedChapter] = useState(0);
  const [completedChapters, setCompletedChapters] = useState<number[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);

  const courseInfo = courses.find(c => c.id === courseId) || null;

  if (!courseInfo || !courseId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <h1 className="text-3xl font-bold text-white mb-4">Course Not Found</h1>
          <p className="text-gray-400">Course ID: {courseId}</p>
          <p className="text-gray-400 mt-2">Available: {courses.length} courses</p>
        </div>
      </div>
    );
  }

  const currentChapter = courseInfo.chapters[selectedChapter];
  const progress = courseInfo.chapters.length > 0 ? ((selectedChapter + 1) / courseInfo.chapters.length) * 100 : 0;

  const handleChapterComplete = () => {
    if (!completedChapters.includes(selectedChapter)) {
      setCompletedChapters([...completedChapters, selectedChapter]);
    }
  };

  if (!currentChapter) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🚧</div>
          <h1 className="text-3xl font-bold text-white mb-4">Content Coming Soon</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 overflow-x-hidden">
      {/* Header with Progress */}
      <section className="py-6 sm:py-8 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="glass-card p-4 sm:p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3 sm:gap-4 w-full">
                <div className="text-4xl sm:text-5xl md:text-6xl flex-shrink-0">{courseInfo.icon}</div>
                <div className="min-w-0 flex-1">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2 break-words">{courseInfo.title}</h1>
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 break-words">{courseInfo.description}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">
                <span>Course Progress</span>
                <span className="font-bold text-blue-400">{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 sm:h-4 overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.5 }} className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-full" />
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span className="truncate">{completedChapters.length} of {courseInfo.chapters.length} chapters completed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-4 sm:py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            {/* Sidebar - Chapter List */}
            <aside className="lg:w-1/4 order-2 lg:order-1">
              <div className="glass-card p-4 sm:p-6 sticky top-20 max-h-[50vh] lg:max-h-[calc(100vh-8rem)] overflow-y-auto">
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Course Content
                </h2>
                <div className="space-y-2">
                  {courseInfo.chapters.map((chapter: Chapter, index: number) => (
                    <motion.button
                      key={chapter.id}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full text-left p-3 sm:p-4 rounded-xl transition-all ${
                        selectedChapter === index
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                          : 'bg-white/5 text-gray-300 hover:bg-white/10'
                      }`}
                      onClick={() => setSelectedChapter(index)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                          <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 ${
                            selectedChapter === index ? 'bg-white/20' : 'bg-white/10'
                          }`}>
                            {index + 1}
                          </div>
                          <span className="text-xs sm:text-sm font-medium line-clamp-1 truncate">{chapter.title}</span>
                        </div>
                        {completedChapters.includes(index) && (
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="lg:w-3/4 order-1 lg:order-2">
              <motion.div
                key={selectedChapter}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-4 sm:p-6 md:p-8"
              >
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-center gap-2 text-blue-400 text-xs sm:text-sm mb-2 sm:mb-3">
                    <PlayCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>Chapter {selectedChapter + 1} of {courseInfo.chapters.length}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 break-words">{currentChapter.title}</h2>
                </div>

                {/* Introduction */}
                {currentChapter.introduction && (
                  <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-400 mb-2 sm:mb-3 flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Introduction
                    </h3>
                    <p className="text-sm sm:text-base text-gray-200 leading-relaxed">{currentChapter.introduction}</p>
                  </div>
                )}

                {/* Topics */}
                {currentChapter.topics && currentChapter.topics.length > 0 && (
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                      <List className="h-5 w-5" />
                      Topics Covered
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {currentChapter.topics.map((topic: string, index: number) => (
                        <li key={index} className="flex items-center gap-2 text-sm sm:text-base text-gray-300">
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                          <span className="break-words">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Lesson Content */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">Lesson Content</h3>
                  <div className="prose prose-invert max-w-none">
                    <div
                      className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed space-y-3 sm:space-y-4 overflow-x-auto"
                      dangerouslySetInnerHTML={{
                        __html: currentChapter.content
                          .replace(/^# (.*$)/gim, '<h1 class="text-xl sm:text-2xl font-bold text-blue-400 mt-6 mb-4">$1</h1>')
                          .replace(/^## (.*$)/gim, '<h2 class="text-lg sm:text-xl font-bold text-cyan-400 mt-5 mb-3">$1</h2>')
                          .replace(/^### (.*$)/gim, '<h3 class="text-base sm:text-lg font-bold text-white mt-4 mb-2">$1</h3>')
                          .replace(/\*\*(.*)\*\*/gim, '<strong class="text-white">$1</strong>')
                          .replace(/```[\s\S]*?```/gim, '<pre class="bg-gray-900 rounded-lg p-4 my-4 overflow-x-auto border border-white/10">$&</pre>')
                          .replace(/\n/gim, '<br />')
                      }}
                    />
                  </div>
                </div>

                {/* Code Examples */}
                {currentChapter.codeExamples && currentChapter.codeExamples.length > 0 && (
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                      <Code className="h-6 w-6" />
                      Code Examples
                    </h3>
                    <div className="space-y-4 sm:space-y-6">
                      {currentChapter.codeExamples.map((example: any, index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gray-900 rounded-xl overflow-hidden border border-white/10"
                        >
                          <div className="bg-gray-800 px-3 sm:px-4 py-2 sm:py-3 border-b border-white/10">
                            <h4 className="text-sm sm:text-base md:text-lg font-bold text-white break-words">{example.title}</h4>
                          </div>
                          <pre className="p-3 sm:p-4 overflow-x-auto">
                            <code className="text-green-400 text-xs sm:text-sm whitespace-pre font-mono">{example.code}</code>
                          </pre>
                          <div className="bg-blue-900/30 px-3 sm:px-4 py-2 sm:py-3 border-t border-white/10">
                            <p className="text-gray-300 text-xs sm:text-sm">
                              <strong className="text-blue-400">Explanation:</strong> {example.explanation}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Summary */}
                {currentChapter.summary && (
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-green-400 mb-2 sm:mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Chapter Summary
                    </h3>
                    <p className="text-sm sm:text-base text-gray-200 leading-relaxed">{currentChapter.summary}</p>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex justify-between pt-4 sm:pt-6 border-t border-white/10 mb-6 sm:mb-8 gap-2">
                  <button
                    onClick={() => selectedChapter > 0 && setSelectedChapter(selectedChapter - 1)}
                    disabled={selectedChapter === 0}
                    className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-xl font-bold text-xs sm:text-sm md:text-base transition-all flex items-center gap-1 sm:gap-2 flex-1 justify-center ${
                      selectedChapter > 0
                        ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:shadow-lg'
                        : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() => {
                      if (selectedChapter < courseInfo.chapters.length - 1) setSelectedChapter(selectedChapter + 1);
                    }}
                    disabled={selectedChapter === courseInfo.chapters.length - 1}
                    className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-xl font-bold text-xs sm:text-sm md:text-base transition-all flex items-center gap-1 sm:gap-2 flex-1 justify-center ${
                      selectedChapter < courseInfo.chapters.length - 1
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg'
                        : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Next →
                  </button>
                </div>

                {/* Quiz */}
                <div className="border-t border-white/10 pt-6 sm:pt-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-3xl">📝</span>
                    Chapter Quiz
                  </h2>
                  {!showQuiz ? (
                    <div className="glass-card p-4 sm:p-6 md:p-8 text-center">
                      <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-3 sm:mb-4">Test your knowledge after completing this chapter!</p>
                      <button
                        onClick={() => setShowQuiz(true)}
                        className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-sm sm:text-base md:text-lg rounded-xl hover:shadow-lg hover:scale-105 transition-all"
                      >
                        Start Quiz →
                      </button>
                    </div>
                  ) : (
                    <QuizComponent
                      courseId={courseId}
                      chapterId={currentChapter.id}
                      userId="current-user"
                      onComplete={() => {
                        if (!completedChapters.includes(selectedChapter)) {
                          setCompletedChapters([...completedChapters, selectedChapter]);
                        }
                      }}
                    />
                  )}
                </div>
              </motion.div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
