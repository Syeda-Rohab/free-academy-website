'use client';

import { useState, useEffect, Suspense } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import QuizComponent from '@/components/QuizComponent';
import { BookOpen, CheckCircle, PlayCircle, Code, List, FileText } from 'lucide-react';
import type { Course, Chapter } from '@/lib/types';

// Lazy load courses data
async function loadCourses() {
  const { courses } = await import('@/lib/courses');
  return courses;
}

function CourseContent({ courseId, courses }: { courseId: string; courses: Course[] }) {
  const [selectedChapter, setSelectedChapter] = useState(0);
  const [completedChapters, setCompletedChapters] = useState<number[]>([]);
  
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

  // Rest of the component JSX...
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900">
      <section className="py-8 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="glass-card p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="text-6xl">{courseInfo.icon}</div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{courseInfo.title}</h1>
                  <p className="text-gray-300 text-lg">{courseInfo.description}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-gray-400 mb-3">
                <span>Course Progress</span>
                <span className="font-bold text-blue-400">{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.5 }} className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-full" />
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>{completedChapters.length} of {courseInfo.chapters.length} chapters completed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            <aside className="lg:w-1/4">
              <div className="glass-card p-6 sticky top-24">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><BookOpen className="h-6 w-6" />Course Content</h2>
                <div className="space-y-2">
                  {courseInfo.chapters.map((chapter: Chapter, index: number) => (
                    <motion.button key={chapter.id} whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }} className={`w-full text-left p-4 rounded-xl transition-all ${selectedChapter === index ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`} onClick={() => setSelectedChapter(index)}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${selectedChapter === index ? 'bg-white/20' : 'bg-white/10'}`}>{index + 1}</div>
                          <span className="text-sm font-medium line-clamp-1">{chapter.title}</span>
                        </div>
                        {completedChapters.includes(index) && <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </aside>
            <main className="lg:w-3/4">
              <motion.div key={selectedChapter} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} className="glass-card p-8">
                <div className="mb-8">
                  <div className="flex items-center gap-2 text-blue-400 text-sm mb-3"><PlayCircle className="h-5 w-5" /><span>Chapter {selectedChapter + 1} of {courseInfo.chapters.length}</span></div>
                  <h2 className="text-3xl font-bold text-white mb-4">{currentChapter.title}</h2>
                </div>
                {currentChapter.introduction && (<div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-6 mb-8"><h3 className="text-xl font-bold text-blue-400 mb-3 flex items-center gap-2"><FileText className="h-6 w-6" />Introduction</h3><p className="text-gray-200 leading-relaxed">{currentChapter.introduction}</p></div>)}
                {currentChapter.topics && currentChapter.topics.length > 0 && (<div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8"><h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><List className="h-6 w-6" />Topics Covered</h3><ul className="grid grid-cols-1 md:grid-cols-2 gap-3">{currentChapter.topics.map((topic: string, index: number) => (<li key={index} className="flex items-center gap-2 text-gray-300"><CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />{topic}</li>))}</ul></div>)}
                <div className="mb-8"><h3 className="text-2xl font-bold text-white mb-4">Lesson Content</h3><div className="prose prose-invert max-w-none"><div className="text-gray-200 text-lg leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: currentChapter.content.replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold text-blue-400 mt-6 mb-4">$1</h1>').replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold text-cyan-400 mt-5 mb-3">$1</h2>').replace(/^### (.*$)/gim, '<h3 class="text-lg font-bold text-white mt-4 mb-2">$1</h3>').replace(/\*\*(.*)\*\*/gim, '<strong class="text-white">$1</strong>').replace(/```[\s\S]*?```/gim, '<pre class="bg-gray-900 rounded-lg p-4 my-4 overflow-x-auto border border-white/10">$&</pre>').replace(/\n/gim, '<br />') }} /></div></div>
                {currentChapter.codeExamples && currentChapter.codeExamples.length > 0 && (<div className="mb-8"><h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><Code className="h-7 w-7" />Code Examples</h3><div className="space-y-6">{currentChapter.codeExamples.map((example: any, index: number) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-gray-900 rounded-xl overflow-hidden border border-white/10"><div className="bg-gray-800 px-4 py-3 border-b border-white/10"><h4 className="text-lg font-bold text-white">{example.title}</h4></div><pre className="p-4 overflow-x-auto"><code className="text-green-400 text-sm whitespace-pre font-mono">{example.code}</code></pre><div className="bg-blue-900/30 px-4 py-3 border-t border-white/10"><p className="text-gray-300 text-sm"><strong className="text-blue-400">Explanation:</strong> {example.explanation}</p></div></motion.div>))}</div></div>)}
                {currentChapter.summary && (<div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-6 mb-8"><h3 className="text-xl font-bold text-green-400 mb-3 flex items-center gap-2"><CheckCircle className="h-6 w-6" />Chapter Summary</h3><p className="text-gray-200 leading-relaxed">{currentChapter.summary}</p></div>)}
                <div className="flex justify-between pt-6 border-t border-white/10 mb-8"><button onClick={() => selectedChapter > 0 && setSelectedChapter(selectedChapter - 1)} disabled={selectedChapter === 0} className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${selectedChapter > 0 ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:shadow-lg' : 'bg-gray-800 text-gray-500 cursor-not-allowed'}`}>← Previous</button><button onClick={() => { if (selectedChapter < courseInfo.chapters.length - 1) setSelectedChapter(selectedChapter + 1); }} disabled={selectedChapter === courseInfo.chapters.length - 1} className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${selectedChapter < courseInfo.chapters.length - 1 ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg' : 'bg-gray-800 text-gray-500 cursor-not-allowed'}`}>Next →</button></div>
                <div className="border-t border-white/10 pt-8"><h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3"><span className="text-3xl">📝</span>Chapter Quiz</h2><QuizComponent courseId={courseInfo.id} chapterId={currentChapter.id} userId="user1" quizQuestions={currentChapter.quiz.questions} onComplete={handleChapterComplete} /></div>
              </motion.div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function CoursePage() {
  const pathname = usePathname();
  const courseId = pathname?.split('/').filter(Boolean).pop() || '';
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadCourses()
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load courses:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-3xl font-bold text-white mb-4">Loading Course...</h1>
          <p className="text-gray-400">Please wait while we load the course content.</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <h1 className="text-3xl font-bold text-white mb-4">Error Loading Courses</h1>
          <p className="text-gray-400">{error}</p>
        </div>
      </div>
    );
  }

  return <CourseContent courseId={courseId} courses={courses} />;
}