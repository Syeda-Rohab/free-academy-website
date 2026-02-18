import { Suspense } from 'react';
import AboutPageContent from '@/components/AboutPageContent';

export default function AboutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-center">Loading...</div>}>
      <AboutPageContent />
    </Suspense>
  );
}