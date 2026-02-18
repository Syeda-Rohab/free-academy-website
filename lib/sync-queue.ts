import { PendingOp } from '../types/offline';
import { 
  getPendingOperations, 
  removePendingOperation, 
  savePendingOperation 
} from './local-db';

const MAX_BATCH_SIZE = 10;
const MAX_RETRY_ATTEMPTS = 5;

/**
 * Add an operation to the sync queue
 */
export const addToSyncQueue = async (operation: Omit<PendingOp, 'retries' | 'lastAttempt'>): Promise<void> => {
  const op: PendingOp = {
    ...operation,
    retries: 0,
    lastAttempt: Date.now()
  };
  
  await savePendingOperation(op);
};

/**
 * Get pending operations from the queue
 */
export const getPendingOperationsFromQueue = async (): Promise<{key: string, operation: PendingOp}[]> => {
  return await getPendingOperations();
};

/**
 * Remove an operation from the queue after successful sync
 */
export const removeFromSyncQueue = async (key: string): Promise<void> => {
  await removePendingOperation(key);
};

/**
 * Calculate delay for exponential backoff
 */
export const calculateDelay = (retries: number): number => {
  return Math.min(1000 * Math.pow(2, retries), 30000); // 1s→2s→4s→8s→30s max
};

/**
 * Process the sync queue when online
 */
export const processSyncQueue = async (): Promise<void> => {
  // Get all pending operations
  const pendingOps = await getPendingOperationsFromQueue();
  
  if (pendingOps.length === 0) {
    return; // Nothing to sync
  }

  // Process operations in batches
  for (let i = 0; i < pendingOps.length; i += MAX_BATCH_SIZE) {
    const batch = pendingOps.slice(i, i + MAX_BATCH_SIZE);
    
    // Attempt to sync each operation in the batch
    for (const { key, operation } of batch) {
      try {
        // Try to sync the operation with the server
        const success = await syncOperationWithServer(operation);
        
        if (success) {
          // Remove from queue if successful
          await removeFromSyncQueue(key);
        } else {
          // Update retry count if failed
          await updateRetryCount(key, operation);
        }
      } catch (error) {
        // Update retry count if there was an error
        await updateRetryCount(key, operation);
      }
    }
  }
};

/**
 * Sync a single operation with the server
 * This is a placeholder - implement with actual API call
 */
const syncOperationWithServer = async (operation: PendingOp): Promise<boolean> => {
  try {
    // Determine the API endpoint based on operation type
    let url = '';
    let method = '';
    let body: any = null;

    switch (operation.type) {
      case 'CREATE':
        url = '/api/progress';
        method = 'POST';
        body = operation.payload;
        break;
      case 'UPDATE':
        url = `/api/progress/${operation.id}`;
        method = 'PUT';
        body = operation.payload;
        break;
      case 'DELETE':
        url = `/api/progress/${operation.id}`;
        method = 'DELETE';
        break;
      default:
        console.error(`Unknown operation type: ${operation.type}`);
        return false;
    }

    // Make the API call
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAuthToken()}` // Placeholder for auth token
      },
      body: body ? JSON.stringify(body) : undefined
    });

    // Return true if the request was successful
    return response.ok;
  } catch (error) {
    console.error('Error syncing operation with server:', error);
    return false;
  }
};

/**
 * Update retry count for an operation
 */
const updateRetryCount = async (key: string, operation: PendingOp): Promise<void> => {
  // If max retries reached, remove the operation
  if (operation.retries >= MAX_RETRY_ATTEMPTS) {
    await removeFromSyncQueue(key);
    return;
  }

  // Otherwise, increment retry count and update last attempt time
  const updatedOp: PendingOp = {
    ...operation,
    retries: operation.retries + 1,
    lastAttempt: Date.now()
  };

  // Remove the old operation
  await removeFromSyncQueue(key);
  
  // Add the updated operation back to the queue
  await savePendingOperation(updatedOp);
};

/**
 * Check if we should attempt to sync an operation based on retry count and backoff
 */
export const shouldAttemptSync = (operation: PendingOp): boolean => {
  const delay = calculateDelay(operation.retries);
  const timeSinceLastAttempt = Date.now() - operation.lastAttempt;
  
  return timeSinceLastAttempt >= delay;
};

/**
 * Get the count of pending operations
 */
export const getPendingOperationsCount = async (): Promise<number> => {
  const pendingOps = await getPendingOperationsFromQueue();
  return pendingOps.length;
};

/**
 * Placeholder function to get auth token
 * This should be replaced with actual token retrieval logic
 */
const getAuthToken = (): string => {
  // In a real implementation, this would retrieve the JWT token
  // from wherever it's stored (localStorage, cookies, etc.)
  return typeof window !== 'undefined' ? localStorage.getItem('authToken') || '' : '';
};