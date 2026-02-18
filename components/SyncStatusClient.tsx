'use client';

import { useProgressStore } from '@/stores/progress';
import { useState, useEffect } from 'react';

const SyncStatusClient: React.FC = () => {
  const { syncStatus, isOnline, pendingOperations } = useProgressStore();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark as client-side rendered to avoid SSR issues
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Render a simple fallback during SSR
    return (
      <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
        Loading...
      </div>
    );
  }

  // Determine the display text and styling based on sync status
  let displayText = '';
  let bgColor = '';
  let textColor = '';
  let icon = '';

  switch (syncStatus) {
    case 'Online':
      if (isOnline) {
        displayText = 'All synced';
        bgColor = 'bg-green-100';
        textColor = 'text-green-800';
        icon = '🟢';
      } else {
        displayText = 'Offline';
        bgColor = 'bg-red-100';
        textColor = 'text-red-800';
        icon = '🔴';
      }
      break;
    case 'Offline':
      displayText = 'Offline';
      bgColor = 'bg-red-100 animate-pulse';
      textColor = 'text-red-800';
      icon = '🔴';
      break;
    case 'Syncing':
      displayText = `Syncing ${pendingOperations}`;
      bgColor = 'bg-yellow-100';
      textColor = 'text-yellow-800';
      icon = '🟡';
      break;
    case 'Conflict':
      displayText = 'Merge complete';
      bgColor = 'bg-amber-100';
      textColor = 'text-amber-800';
      icon = '⚠️';
      break;
    default:
      displayText = 'Unknown';
      bgColor = 'bg-gray-100';
      textColor = 'text-gray-800';
      icon = '❓';
  }

  return (
    <div className={`${bgColor} ${textColor} px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1`}>
      <span>{icon}</span>
      <span>{displayText}</span>
      {syncStatus === 'Syncing' && pendingOperations > 0 && (
        <div className="w-12 bg-gray-200 rounded-full h-1.5 ml-2">
          <div
            className="bg-yellow-600 h-1.5 rounded-full"
            style={{ width: `${Math.min(100, (1 - pendingOperations / 10) * 100)}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default SyncStatusClient;