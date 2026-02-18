/**
 * Operation types for offline sync
 */

export interface PendingOp {
  id: string;
  type: 'CREATE' | 'UPDATE' | 'DELETE';
  payload: any;
  timestamp: number;
  retries: number;
  lastAttempt: number;
}

export interface ProgressData {
  id: string;
  userId: string;
  courseId: string;
  chapterId: string;
  course: string;
  chapter: number;
  score: number;
  completed: boolean;
  timestamp: number;
  pendingSync: boolean;
  syncAttempts: number;
}