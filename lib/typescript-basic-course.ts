// Simplified TypeScript Basic Course - Working Version
import { Chapter, CodeExample, Quiz } from './types';

export const typescriptBasicCourse: Chapter[] = [
  {
    id: 'ts-basic-ch1-setup',
    title: 'Chapter 1: TypeScript Setup',
    introduction: 'Set up TypeScript development environment.',
    topics: ['Installation', 'tsconfig.json', 'First Program'],
    content: '# TypeScript Setup\n\nInstall TypeScript: npm install -g typescript\n\nCompile: tsc file.ts',
    codeExamples: [
      {
        title: 'First TypeScript',
        code: 'const name: string = "Alice";\nconst age: number = 25;\nconsole.log(name, age);',
        explanation: 'Type annotations with colon syntax.'
      }
    ],
    quiz: {
      id: 'ts-ch1-quiz',
      questions: [
        { id: 'q1', question: 'Install TypeScript?', options: ['npm install -g typescript', 'pip install typescript', 'yarn add typescript', 'npm typescript'], correctAnswer: 0 },
        { id: 'q2', question: 'File extension?', options: ['.ts', '.js', '.tsx', '.typescript'], correctAnswer: 0 },
        { id: 'q3', question: 'Compile command?', options: ['tsc', 'typescript', 'ts-compile', 'build'], correctAnswer: 0 },
        { id: 'q4', question: 'Type annotation syntax?', options: [': type', 'type:', 'is type', 'as type'], correctAnswer: 0 },
        { id: 'q5', question: 'TypeScript compiles to?', options: ['JavaScript', 'Python', 'C++', 'Java'], correctAnswer: 0 }
      ]
    },
    summary: 'TypeScript setup complete. Install with npm. Compile with tsc.'
  },
  {
    id: 'ts-basic-ch2-types',
    title: 'Chapter 2: Basic Types',
    introduction: 'Learn TypeScript primitive types.',
    topics: ['string', 'number', 'boolean', 'null', 'undefined'],
    content: '# Basic Types\n\n- string: Text\n- number: All numbers\n- boolean: true/false',
    codeExamples: [
      {
        title: 'Type Examples',
        code: 'const name: string = "Alice";\nconst age: number = 25;\nconst active: boolean = true;',
        explanation: 'Primitive type annotations.'
      }
    ],
    quiz: {
      id: 'ts-ch2-quiz',
      questions: [
        { id: 'q1', question: 'String type?', options: ['string', 'String', 'STR', 'text'], correctAnswer: 0 },
        { id: 'q2', question: 'Number type includes?', options: ['Integers and floats', 'Integers only', 'Floats only', 'BigInt only'], correctAnswer: 0 },
        { id: 'q3', question: 'Boolean values?', options: ['true/false', 'yes/no', '1/0', 'on/off'], correctAnswer: 0 },
        { id: 'q4', question: 'null is?', options: ['Type', 'Value', 'Error', 'Undefined'], correctAnswer: 0 },
        { id: 'q5', question: 'undefined means?', options: ['Not assigned', 'Intentional empty', 'Error', 'Zero'], correctAnswer: 0 }
      ]
    },
    summary: 'Basic types: string, number, boolean, null, undefined.'
  }
];
