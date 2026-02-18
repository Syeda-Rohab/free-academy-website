// Simplified JavaScript Basic Course
import { Chapter } from './types';

export const javascriptBasicCourse: Chapter[] = [
  {
    id: 'js-basic-ch1-setup',
    title: 'Chapter 1: JavaScript Setup',
    introduction: 'Set up JavaScript development.',
    topics: ['Browser Console', 'VS Code', 'Node.js'],
    content: '# JavaScript Setup\n\nBrowser console: F12\nVS Code editor\nNode.js from nodejs.org',
    codeExamples: [
      {
        title: 'First JavaScript',
        code: 'console.log("Hello, JavaScript!");\nalert("Welcome!");',
        explanation: 'console.log for output. alert for popups.'
      }
    ],
    quiz: {
      id: 'js-ch1-quiz',
      questions: [
        { id: 'q1', question: 'Open console?', options: ['F12', 'F5', 'Ctrl+S', 'Alt+Tab'], correctAnswer: 0 },
        { id: 'q2', question: 'Output to console?', options: ['console.log()', 'print()', 'echo()', 'write()'], correctAnswer: 0 },
        { id: 'q3', question: 'Show popup?', options: ['alert()', 'popup()', 'show()', 'display()'], correctAnswer: 0 },
        { id: 'q4', question: 'File extension?', options: ['.js', '.javascript', '.jscript', '.jsx'], correctAnswer: 0 },
        { id: 'q5', question: 'Comment syntax?', options: ['//', '#', '/*', '--'], correctAnswer: 0 }
      ]
    },
    summary: 'JavaScript setup complete. Console with F12. VS Code editor. Node.js installed.'
  },
  {
    id: 'js-basic-ch2-variables',
    title: 'Chapter 2: Variables',
    introduction: 'Learn JavaScript variables.',
    topics: ['let', 'const', 'var', 'Data Types'],
    content: '# Variables\n\nconst: Cannot change\nlet: Can change\nvar: Avoid (old)',
    codeExamples: [
      {
        title: 'Variable Declaration',
        code: 'const name = "Alice";\nlet age = 25;\nage = 26;',
        explanation: 'const for constants. let for variables.'
      }
    ],
    quiz: {
      id: 'js-ch2-quiz',
      questions: [
        { id: 'q1', question: 'Cannot change?', options: ['const', 'let', 'var', 'fixed'], correctAnswer: 0 },
        { id: 'q2', question: 'Can change?', options: ['let', 'const', 'var', 'change'], correctAnswer: 0 },
        { id: 'q3', question: 'Avoid using?', options: ['var', 'let', 'const', 'all'], correctAnswer: 0 },
        { id: 'q4', question: 'String type?', options: ['string', 'String', 'STR', 'text'], correctAnswer: 0 },
        { id: 'q5', question: 'Number type?', options: ['number', 'Number', 'NUM', 'int'], correctAnswer: 0 }
      ]
    },
    summary: 'Variables with const and let. Avoid var. Primitive types: string, number, boolean.'
  }
];
