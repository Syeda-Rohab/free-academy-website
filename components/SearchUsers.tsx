'use client';

import { useState, useEffect } from 'react';

/**
 * Search Component - Example of Client Component with API call
 * Demonstrates: useEffect, useState, data fetching on client
 */
export default function SearchUsers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      if (!searchTerm) {
        setUsers([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/users?q=${searchTerm}`);
        const data = await response.json();
        setUsers(data.data || []);
      } catch (err) {
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchUsers, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  return (
    <div className="glass-card p-6 max-w-2xl mx-auto">
      <h3 className="text-xl font-bold text-white mb-4">
        Search Users (Client Component with API)
      </h3>
      
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search users..."
        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
      />

      {loading && (
        <div className="text-center text-gray-400">Searching...</div>
      )}

      {error && (
        <div className="text-red-400 text-center">{error}</div>
      )}

      {!loading && !error && users.length > 0 && (
        <div className="space-y-2">
          {users.map((user) => (
            <div
              key={user.id}
              className="p-4 bg-slate-800/50 rounded-lg flex items-center justify-between"
            >
              <div>
                <div className="text-white font-medium">{user.name}</div>
                <div className="text-gray-400 text-sm">{user.email}</div>
              </div>
              <span className="text-blue-400 text-sm">ID: {user.id}</span>
            </div>
          ))}
        </div>
      )}

      {!loading && !error && searchTerm && users.length === 0 && (
        <div className="text-center text-gray-400">No users found</div>
      )}
    </div>
  );
}
