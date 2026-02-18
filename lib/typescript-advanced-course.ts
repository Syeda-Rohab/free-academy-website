// Simplified TypeScript Advanced Course
import { Chapter } from './types';

export const typescriptAdvancedCourse: Chapter[] = [
  {
    id: 'ts-adv-ch1-generics',
    title: 'Chapter 1: Advanced Generics',
    introduction: 'Master TypeScript generics.',
    topics: ['Generic Constraints', 'Conditional Types', 'Infer'],
    content: '# Generics\n\nGeneric constraints with extends.\nConditional types with ternary.',
    codeExamples: [
      {
        title: 'Generic Constraint',
        code: 'function logLength<T extends { length: number }>(arg: T) {\n  console.log(arg.length);\n}',
        explanation: 'Constraints with extends.'
      }
    ],
    quiz: {
      id: 'ts-adv-ch1-quiz',
      questions: [
        { id: 'q1', question: 'Generic constraint uses?', options: ['extends', 'implements', 'constraint', 'requires'], correctAnswer: 0 },
        { id: 'q2', question: 'Conditional type syntax?', options: ['T extends U ? X : Y', 'T ? X : Y', 'if T then X', 'T : X | Y'], correctAnswer: 0 },
        { id: 'q3', question: 'infer keyword?', options: ['Extracts types', 'Creates types', 'Deletes types', 'Imports types'], correctAnswer: 0 },
        { id: 'q4', question: 'Mapped types iterate?', options: ['keyof', 'in', 'of', 'for'], correctAnswer: 0 },
        { id: 'q5', question: 'Partial<T> makes?', options: ['All optional', 'All required', 'All readonly', 'All private'], correctAnswer: 0 }
      ]
    },
    summary: 'Generics with constraints. Conditional types. Infer keyword.'
  },
  {
    id: 'ts-adv-ch2-decorators',
    title: 'Chapter 2: Decorators',
    introduction: 'Learn TypeScript decorators.',
    topics: ['Class Decorators', 'Method Decorators', 'Metadata'],
    content: '# Decorators\n\n@Decorator syntax.\nClass, method, property decorators.',
    codeExamples: [
      {
        title: 'Class Decorator',
        code: 'function Logger(constructor: Function) {\n  console.log("Creating:", constructor.name);\n}\n\n@Logger\nclass Person {}',
        explanation: 'Class decorators receive constructor.'
      }
    ],
    quiz: {
      id: 'ts-adv-ch2-quiz',
      questions: [
        { id: 'q1', question: 'Decorator syntax?', options: ['@name', '#name', '$name', '&name'], correctAnswer: 0 },
        { id: 'q2', question: 'Class decorator receives?', options: ['Constructor', 'Instance', 'Prototype', 'Name'], correctAnswer: 0 },
        { id: 'q3', question: 'Method decorator receives?', options: ['target, name, descriptor', 'constructor', 'instance', 'name only'], correctAnswer: 0 },
        { id: 'q4', question: 'Decorator factory returns?', options: ['Decorator', 'Class', 'Method', 'Property'], correctAnswer: 0 },
        { id: 'q5', question: 'Metadata reflection for?', options: ['Runtime type info', 'Compile types', 'Build optimization', 'Code generation'], correctAnswer: 0 }
      ]
    },
    summary: 'Decorators with @ syntax. Class, method, property. Metadata reflection.'
  }
];
