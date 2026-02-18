'use client';

import { useState } from 'react';

/**
 * Counter Component - Example of Client Component
 * Demonstrates: useState, event handlers, interactivity
 */
export default function Counter({ initialCount = 0 }: { initialCount?: number }) {
  const [count, setCount] = useState(initialCount);

  return (
    <div className="glass-card p-6 max-w-md mx-auto">
      <h3 className="text-xl font-bold text-white mb-4 text-center">
        Counter Example (Client Component)
      </h3>
      <div className="text-6xl font-bold text-blue-400 text-center mb-6">
        {count}
      </div>
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => setCount(count - 1)}
          className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-colors"
        >
          - Decrement
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-colors"
        >
          + Increment
        </button>
      </div>
      <button
        onClick={() => setCount(initialCount)}
        className="mt-4 w-full px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-lg transition-colors"
      >
        Reset
      </button>
    </div>
  );
}
