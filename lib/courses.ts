// Complete Course Data - Simplified
import { Course } from './types';
import { pythonBasicChapters } from './python-course';
import { pythonAdvancedChapters } from './python-advanced-course';
import { pythonAdvancedChapters2 } from './python-advanced-course-2';
import { typescriptChapters } from './typescript-course';
import { javascriptBasicChapters, javascriptAdvancedChapters } from './javascript-course';
import { nextjsBasicCourse } from './nextjs-basic-course';
import { nextjsAdvancedCourse } from './nextjs-advanced-course';
import { openaiAgentsBasicCourse } from './openai-agents-basic-course';
import { openaiAgentsAdvancedCourse } from './openai-agents-advanced-course';

export const courses: Course[] = [
  {
    id: 'python',
    title: 'Python Programming',
    description: 'Master Python from basics to advanced.',
    icon: '🐍',
    color: 'from-green-400 to-emerald-600',
    chapters: [...pythonBasicChapters, ...pythonAdvancedChapters, ...pythonAdvancedChapters2],
  },
  {
    id: 'javascript',
    title: 'JavaScript Programming',
    description: 'Complete JavaScript course with 21 chapters: Setup, Variables, Functions, Arrays, Objects, DOM, Events, Async, ES6+, and 2 projects.',
    icon: '☕',
    color: 'from-yellow-400 to-orange-600',
    chapters: [...javascriptBasicChapters, ...javascriptAdvancedChapters],
  },
  {
    id: 'typescript',
    title: 'TypeScript Programming',
    description: 'Complete TypeScript course from basics to advanced with 10 comprehensive chapters.',
    icon: '📝',
    color: 'from-blue-400 to-indigo-600',
    chapters: typescriptChapters,
  },
  {
    id: 'nextjs',
    title: 'Next.js Framework',
    description: 'Build modern web apps with Next.js 15, App Router, Server Components, and deployment.',
    icon: '⚛️',
    color: 'from-violet-400 to-purple-600',
    chapters: [...nextjsBasicCourse, ...nextjsAdvancedCourse],
  },
  {
    id: 'openai',
    title: 'OpenAI Agent SDK',
    description: 'Create AI agents with OpenAI SDK. Learn setup, tools, functions, multi-agent systems, safety, tracing, and deployment.',
    icon: '🤖',
    color: 'from-cyan-400 to-blue-600',
    chapters: [...openaiAgentsBasicCourse, ...openaiAgentsAdvancedCourse],
  }
];
