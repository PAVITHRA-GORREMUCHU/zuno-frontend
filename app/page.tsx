'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';

interface HealthResponse {
  status: string;
  service: string;
  version: string;
  timestamp: string;
}

export default function Home() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api<HealthResponse>('/api/health')
      .then((data) => {
        setHealth(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-5xl font-black tracking-tight text-gray-900">
          Zu<span className="text-teal-600">no</span>
        </h1>
        <p className="mt-3 text-gray-500 text-sm">
          Real prices. Live availability.
        </p>

        {/* Connection Status */}
        <div className="mt-8 p-4 rounded-lg border max-w-sm mx-auto">
          {loading && (
            <div className="flex items-center gap-2 justify-center text-gray-400">
              <span className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></span>
              <span className="text-xs">Connecting to Zuno API...</span>
            </div>
          )}

          {health && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 justify-center text-teal-700">
                <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                <span className="text-sm font-medium">Connected to Zuno API ✓</span>
              </div>
              <div className="text-xs text-gray-400 space-y-1">
                <p>Service: {health.service}</p>
                <p>Version: {health.version}</p>
                <p>Status: {health.status}</p>
              </div>
            </div>
          )}

          {error && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 justify-center text-red-600">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                <span className="text-sm font-medium">Connection Failed ✗</span>
              </div>
              <p className="text-xs text-red-400">{error}</p>
            </div>
          )}
        </div>

        <div className="mt-6 inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2">
          <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse"></span>
          <span className="text-teal-700 text-xs font-medium">Coming soon to Hyderabad</span>
        </div>
      </div>
    </main>
  );
}
