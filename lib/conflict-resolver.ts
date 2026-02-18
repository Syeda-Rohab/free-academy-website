import { ProgressData } from '../types/offline';

/**
 * Resolve conflicts between local and server data
 * According to requirements, local changes should win
 */
export const resolveConflict = (
  localData: Partial<ProgressData>, 
  serverData: Partial<ProgressData>
): ProgressData => {
  // Start with server data as the base
  const resolvedData = { ...serverData } as ProgressData;

  // Apply local changes (local wins)
  if (localData.score !== undefined) {
    resolvedData.score = localData.score;
  }
  if (localData.completed !== undefined) {
    resolvedData.completed = localData.completed;
  }
  if (localData.timestamp !== undefined) {
    resolvedData.timestamp = Math.max(localData.timestamp, serverData.timestamp || 0);
  }
  if (localData.pendingSync !== undefined) {
    resolvedData.pendingSync = localData.pendingSync;
  }
  if (localData.syncAttempts !== undefined) {
    resolvedData.syncAttempts = localData.syncAttempts;
  }

  return resolvedData;
};

/**
 * Detect if there's a conflict between local and server data
 * A conflict exists if both have been modified since the last sync
 */
export const hasConflict = (
  localData: Partial<ProgressData>,
  serverData: Partial<ProgressData>,
  lastSyncTimestamp: number
): boolean => {
  // Check if both local and server data were modified after last sync
  const localModifiedAfterSync = localData.timestamp && localData.timestamp > lastSyncTimestamp;
  const serverModifiedAfterSync = serverData.timestamp && serverData.timestamp > lastSyncTimestamp;

  return !!(localModifiedAfterSync && serverModifiedAfterSync);
};

/**
 * Merge local and server data
 * This is a more complex merge that considers multiple fields
 */
export const mergeProgressData = (
  localData: Partial<ProgressData>,
  serverData: Partial<ProgressData>
): ProgressData => {
  // Use the resolveConflict function as the base implementation
  return resolveConflict(localData, serverData);
};