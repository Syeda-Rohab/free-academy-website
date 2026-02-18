'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const ProgressPageClient = dynamic(
  () => import('./ProgressPageClient'),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    ),
  }
);

export default function ProgressPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    }>
      <ProgressPageClient />
    </Suspense>
  );
}
