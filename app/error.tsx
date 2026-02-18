'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center max-w-md">
        <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-white mb-4">Oops! Something went wrong</h2>
        <p className="text-gray-400 mb-8">{error.message || 'An unexpected error occurred'}</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="btn-primary font-bold"
          >
            Try Again
          </button>
          <Link href="/" className="btn-secondary font-bold">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
