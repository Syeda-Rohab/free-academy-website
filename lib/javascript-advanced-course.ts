// Simplified JavaScript Advanced Course
import { Chapter } from './types';

export const javascriptAdvancedCourse: Chapter[] = [
  {
    id: 'js-adv-ch1-closures',
    title: 'Chapter 1: Closures',
    introduction: 'Master JavaScript closures.',
    topics: ['Lexical Scope', 'Closures', 'IIFE'],
    content: '# Closures\n\nFunction + lexical environment.\nInner functions access outer variables.',
    codeExamples: [
      {
        title: 'Closure Example',
        code: 'function outer() {\n  const name = "Alice";\n  function inner() {\n    console.log(name);\n  }\n  return inner;\n}\nconst closure = outer();\nclosure();',
        explanation: 'Closure remembers outer scope.'
      }
    ],
    quiz: {
      id: 'js-adv-ch1-quiz',
      questions: [
        { id: 'q1', question: 'Closure is?', options: ['Function + scope', 'Only function', 'Only scope', 'Object'], correctAnswer: 0 },
        { id: 'q2', question: 'Lexical scope?', options: ['Inner accesses outer', 'Outer accesses inner', 'No access', 'Global only'], correctAnswer: 0 },
        { id: 'q3', question: 'IIFE stands for?', options: ['Immediately Invoked Function Expression', 'Internal Function', 'Inline Function', 'Instant Function'], correctAnswer: 0 },
        { id: 'q4', question: 'let is?', options: ['Block scoped', 'Function scoped', 'Global', 'Class scoped'], correctAnswer: 0 },
        { id: 'q5', question: 'var is?', options: ['Function scoped', 'Block scoped', 'Global', 'Class scoped'], correctAnswer: 0 }
      ]
    },
    summary: 'Closures: function + lexical environment. Lexical scope. IIFE for private scope.'
  },
  {
    id: 'js-adv-ch2-async',
    title: 'Chapter 2: Async Advanced',
    introduction: 'Advanced async patterns.',
    topics: ['Event Loop', 'Promises', 'async/await'],
    content: '# Async Advanced\n\nEvent loop manages async.\nPromises for future values.\nasync/await syntax.',
    codeExamples: [
      {
        title: 'Promise Chain',
        code: 'fetch("/api/data")\n  .then(res => res.json())\n  .then(data => console.log(data))\n  .catch(err => console.error(err));',
        explanation: 'Promise chain with then and catch.'
      }
    ],
    quiz: {
      id: 'js-adv-ch2-quiz',
      questions: [
        { id: 'q1', question: 'Event loop manages?', options: ['Async operations', 'Sync operations', 'Variables', 'Functions'], correctAnswer: 0 },
        { id: 'q2', question: 'Microtasks include?', options: ['Promises', 'setTimeout', 'setInterval', 'Events'], correctAnswer: 0 },
        { id: 'q3', question: 'Promise.all waits for?', options: ['All promises', 'First promise', 'Last promise', 'No promises'], correctAnswer: 0 },
        { id: 'q4', question: 'async function returns?', options: ['Promise', 'Value', 'Object', 'Array'], correctAnswer: 0 },
        { id: 'q5', question: 'await waits for?', options: ['Promise', 'Function', 'Object', 'Array'], correctAnswer: 0 }
      ]
    },
    summary: 'Event loop manages async. Promises for future values. async/await cleaner syntax.'
  }
];
