import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the client component with no SSR
const SyncStatusClient = dynamic(() => import('./SyncStatusClient'), {
  ssr: false,
  loading: () => (
    <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
      Loading...
    </div>
  ),
});

const SyncStatus: React.FC = () => {
  return <SyncStatusClient />;
};

export default SyncStatus;