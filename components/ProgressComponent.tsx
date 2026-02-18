import React, { useState, useEffect } from 'react';
import { useProgressStore } from '../stores/progress';
import { useOfflineSync } from '../hooks/useOfflineSync';
import SyncStatus from './SyncStatus';
import { ProgressData } from '../types/offline';

interface ProgressProps {
  userId: string;
  courseId: string;
  chapterId: string;
}

const ProgressComponent: React.FC<ProgressProps> = ({ userId, courseId, chapterId }) => {
  const { progress, updateProgress, getProgress } = useProgressStore();
  const { syncIfOnline } = useOfflineSync();
  const [localProgress, setLocalProgress] = useState<ProgressData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load progress from store
    const progressData = getProgress(userId, courseId, chapterId);
    if (progressData) {
      setLocalProgress(progressData);
    }
    setIsLoading(false);
  }, [userId, courseId, chapterId, progress]);

  const handleMarkComplete = async () => {
    if (!localProgress) return;

    const updatedProgress: ProgressData = {
      ...localProgress,
      completed: true,
      timestamp: Date.now(),
      pendingSync: true
    };

    try {
      // Update progress in the store (saves locally and queues for sync)
      await updateProgress(updatedProgress);
      
      // Trigger sync if online
      syncIfOnline();
      
      setLocalProgress(updatedProgress);
    } catch (error) {
      console.error('Error updating progress:', error);
      // Still update local state since it's saved locally anyway
      setLocalProgress(updatedProgress);
    }
  };

  const handleScoreChange = async (newScore: number) => {
    if (!localProgress) return;

    const updatedProgress: ProgressData = {
      ...localProgress,
      score: newScore,
      timestamp: Date.now(),
      pendingSync: true
    };

    try {
      // Update progress in the store (saves locally and queues for sync)
      await updateProgress(updatedProgress);
      
      // Trigger sync if online
      syncIfOnline();
      
      setLocalProgress(updatedProgress);
    } catch (error) {
      console.error('Error updating progress score:', error);
      // Still update local state since it's saved locally anyway
      setLocalProgress(updatedProgress);
    }
  };

  if (isLoading) {
    return <div>Loading progress...</div>;
  }

  return (
    <div className="progress-component">
      <div className="header">
        <h2>Progress: {courseId} - Chapter {chapterId}</h2>
        <div className="sync-status">
          <SyncStatus />
        </div>
      </div>

      {localProgress ? (
        <div className="progress-details">
          <div className="progress-item">
            <label>Score:</label>
            <input
              type="number"
              min="0"
              max="100"
              value={localProgress.score}
              onChange={(e) => handleScoreChange(Number(e.target.value))}
              disabled={!localProgress.completed} // Only allow score changes if not completed
            />
            <span>%</span>
          </div>

          <div className="progress-item">
            <label>Completed:</label>
            <input
              type="checkbox"
              checked={localProgress.completed}
              onChange={(e) => {
                if (e.target.checked) {
                  handleMarkComplete();
                }
              }}
            />
          </div>

          <div className="progress-item">
            <label>Last Updated:</label>
            <span>{new Date(localProgress.timestamp).toLocaleString()}</span>
          </div>

          <div className="progress-item">
            <label>Status:</label>
            <span>{localProgress.pendingSync ? 'Pending Sync' : 'Synced'}</span>
          </div>
        </div>
      ) : (
        <div className="no-progress">
          <p>No progress recorded yet for this chapter.</p>
          <button onClick={handleMarkComplete}>Mark as Complete</button>
        </div>
      )}

      <div className="actions">
        <button onClick={handleMarkComplete} disabled={localProgress?.completed}>
          {localProgress?.completed ? 'Already Completed' : 'Mark Chapter Complete'}
        </button>
        <button onClick={() => syncIfOnline()}>Sync Now</button>
      </div>
    </div>
  );
};

export default ProgressComponent;