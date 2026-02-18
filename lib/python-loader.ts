// Python Course Loader - Loads Python chapters dynamically
import { pythonBasicChapters } from './python-course';
import { pythonAdvancedChapters } from './python-advanced-course';
import { pythonAdvancedChapters2 } from './python-advanced-course-2';

export const pythonChapters = [
  ...pythonBasicChapters,
  ...pythonAdvancedChapters,
  ...pythonAdvancedChapters2,
];
