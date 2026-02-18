// Course Type Definitions

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  chapters: Chapter[];
}

export interface Chapter {
  id: string;
  title: string;
  introduction: string;
  topics: string[];
  content: string;
  codeExamples: CodeExample[];
  quiz: Quiz;
  summary: string;
}

export interface CodeExample {
  title: string;
  code: string;
  explanation: string;
}

export interface Quiz {
  id: string;
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}
