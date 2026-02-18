import { create } from 'zustand';
import { saveProgressToLocal, getProgressFromLocal } from '../lib/local-db';
import { addToSyncQueue } from '../lib/sync-queue';
import { ProgressData } from '../types/offline';

type SyncStatus = 'Online' | 'Offline' | 'Syncing' | 'Conflict';

interface ProgressState {
  progress: Record<string, ProgressData>; // Key: `${userId}-${courseId}-${chapterId}`
  isOnline: boolean;
  syncStatus: SyncStatus;
  lastSyncTime: number | null;
  pendingOperations: number;
  updateProgress: (progressData: ProgressData) => Promise<void>;
  getProgress: (userId: string, courseId: string, chapterId: string) => ProgressData | undefined;
  setIsOnline: (isOnline: boolean) => void;
  setSyncStatus: (status: SyncStatus) => void;
  setPendingOperations: (count: number) => void;
}

export const useProgressStore = create<ProgressState>((set, get) => ({
  progress: {},
  isOnline: navigator.onLine ?? true,
  syncStatus: 'Online',
  lastSyncTime: null,
  pendingOperations: 0,

  updateProgress: async (progressData: ProgressData) => {
    // Update local state
    const key = `${progressData.userId}-${progressData.courseId}-${progressData.chapterId}`;
    set((state) => ({
      progress: {
        ...state.progress,
        [key]: {
          ...progressData,
          pendingSync: true // Mark as needing sync
        }
      }
    }));

    // Save to local IndexedDB immediately
    await saveProgressToLocal({
      ...progressData,
      pendingSync: true
    });

    // Add to sync queue for later synchronization
    await addToSyncQueue({
      id: progressData.id,
      type: 'UPDATE', // Assuming update for existing progress
      payload: progressData,
      timestamp: Date.now()
    });
  },

  getProgress: (userId: string, courseId: string, chapterId: string) => {
    const key = `${userId}-${courseId}-${chapterId}`;
    return get().progress[key];
  },

  setIsOnline: (isOnline: boolean) => {
    set({ isOnline });
    if (isOnline) {
      set({ syncStatus: 'Syncing' });
      // In a real implementation, this would trigger sync
      // processSyncQueue().then(() => set({ syncStatus: 'Online' }));
    }
  },

  setSyncStatus: (status: SyncStatus) => {
    set({ syncStatus: status });
    if (status === 'Online') {
      set({ lastSyncTime: Date.now() });
    }
  },

  setPendingOperations: (count: number) => {
    set({ pendingOperations: count });
  }
}));

// Initialize the store with online status detection
if (typeof window !== 'undefined') {
  window.addEventListener('online', () => {
    useProgressStore.getState().setIsOnline(true);
  });

  window.addEventListener('offline', () => {
    useProgressStore.getState().setIsOnline(false);
  });
}