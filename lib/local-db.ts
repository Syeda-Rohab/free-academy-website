import { get, set, del, clear, keys, createStore } from 'idb-keyval';

// Create a dedicated store for progress data
const progressStore = createStore('progress-db', 'progress-store');

/**
 * Save progress data to IndexedDB
 */
export const saveProgressToLocal = async (progress: any): Promise<void> => {
  try {
    await set(`progress-${progress.userId}-${progress.courseId}-${progress.chapterId}`, progress, progressStore);
  } catch (error) {
    console.error('Error saving progress to IndexedDB:', error);
    throw error;
  }
};

/**
 * Retrieve progress data from IndexedDB
 */
export const getProgressFromLocal = async (userId: string, courseId: string, chapterId: string): Promise<any | undefined> => {
  try {
    return await get(`progress-${userId}-${courseId}-${chapterId}`, progressStore);
  } catch (error) {
    console.error('Error getting progress from IndexedDB:', error);
    return undefined;
  }
};

/**
 * Remove progress data from IndexedDB
 */
export const removeProgressFromLocal = async (userId: string, courseId: string, chapterId: string): Promise<void> => {
  try {
    await del(`progress-${userId}-${courseId}-${chapterId}`, progressStore);
  } catch (error) {
    console.error('Error removing progress from IndexedDB:', error);
    throw error;
  }
};

/**
 * Get all progress records from IndexedDB
 */
export const getAllProgressFromLocal = async (): Promise<any[]> => {
  try {
    const allKeys = await keys(progressStore);
    const progresses = [];
    
    for (const key of allKeys) {
      if (typeof key === 'string' && key.startsWith('progress-')) {
        const progress = await get(key, progressStore);
        if (progress) {
          progresses.push(progress);
        }
      }
    }
    
    return progresses;
  } catch (error) {
    console.error('Error getting all progress from IndexedDB:', error);
    return [];
  }
};

/**
 * Clear all progress data from IndexedDB
 */
export const clearAllProgress = async (): Promise<void> => {
  try {
    await clear(progressStore);
  } catch (error) {
    console.error('Error clearing progress from IndexedDB:', error);
    throw error;
  }
};

/**
 * Save pending operation to IndexedDB
 */
export const savePendingOperation = async (operation: any): Promise<void> => {
  try {
    await set(`op-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, operation, progressStore);
  } catch (error) {
    console.error('Error saving operation to IndexedDB:', error);
    throw error;
  }
};

/**
 * Get all pending operations from IndexedDB
 */
export const getPendingOperations = async (): Promise<{key: string, operation: any}[]> => {
  try {
    const allKeys = await keys(progressStore);
    const operations: {key: string, operation: any}[] = [];
    
    for (const key of allKeys) {
      if (typeof key === 'string' && key.startsWith('op-')) {
        const operation = await get(key, progressStore);
        if (operation) {
          operations.push({ key, operation });
        }
      }
    }
    
    return operations;
  } catch (error) {
    console.error('Error getting operations from IndexedDB:', error);
    return [];
  }
};

/**
 * Remove a pending operation from IndexedDB
 */
export const removePendingOperation = async (key: string): Promise<void> => {
  try {
    await del(key, progressStore);
  } catch (error) {
    console.error('Error removing operation from IndexedDB:', error);
    throw error;
  }
};