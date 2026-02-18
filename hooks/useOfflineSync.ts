import { useState, useEffect } from 'react';
import { processSyncQueue, addToSyncQueue, getPendingOperationsCount } from '../lib/sync-queue';
import { PendingOp } from '../types/offline';

type SyncStatus = 'Online' | 'Offline' | 'Syncing' | 'Conflict';

export const useOfflineSync = () => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine ?? true);
  const [syncStatus, setSyncStatus] = useState<SyncStatus>('Online');
  const [pendingOperations, setPendingOperations] = useState<number>(0);

  // Check for network status changes
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setSyncStatus('Syncing');
    };

    const handleOffline = () => {
      setIsOnline(false);
      setSyncStatus('Offline');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Initial check
    setIsOnline(navigator.onLine ?? true);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Monitor pending operations
  useEffect(() => {
    const checkPendingOps = async () => {
      const count = await getPendingOperationsCount();
      setPendingOperations(count);
    };

    checkPendingOps();
    
    // Poll for changes every 5 seconds
    const interval = setInterval(checkPendingOps, 5000);
    return () => clearInterval(interval);
  }, []);

  // Process sync queue when coming back online
  useEffect(() => {
    if (isOnline && syncStatus === 'Syncing') {
      const syncOperations = async () => {
        try {
          await processSyncQueue();
          setSyncStatus('Online');
        } catch (error) {
          console.error('Error processing sync queue:', error);
          setSyncStatus('Conflict'); // Or some other error state
        }
      };

      syncOperations();
    }
  }, [isOnline, syncStatus]);

  /**
   * Queue an operation for sync when online
   */
  const queueOperation = async (operation: Omit<PendingOp, 'retries' | 'lastAttempt'>) => {
    try {
      await addToSyncQueue(operation);
      setPendingOperations(prev => prev + 1);
    } catch (error) {
      console.error('Error adding operation to queue:', error);
      setSyncStatus('Conflict');
    }
  };

  /**
   * Sync immediately if online
   */
  const syncIfOnline = async () => {
    if (isOnline) {
      setSyncStatus('Syncing');
      try {
        await processSyncQueue();
        setSyncStatus('Online');
      } catch (error) {
        console.error('Error during sync:', error);
        setSyncStatus('Conflict');
      }
    }
  };

  return {
    isOnline,
    syncStatus,
    pendingOperations,
    queueOperation,
    syncIfOnline
  };
};