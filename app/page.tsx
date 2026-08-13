'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { Listing, ApiResponse, StatsResponse } from '@/lib/types';
import ListingCard from '@/components/ListingCard';
import SearchBar from '@/components/SearchBar';
import FilterChips from '@/components/FilterChips';
import StatsBar from '@/components/StatsBar';

export default function Home() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [stats, setStats] = useState<StatsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const fetchListings = async (filter?: string) => {
    setLoading(true);
    try {
      const params = filter ? `?${filter}` : '';
      const res = await api<ApiResponse<Listing[]>>(`/api/listings${params}`);
      setListings(res.data);
    } catch (err) {
      console.error('Failed to fetch listings:', err);
    }
    setLoading(false);
  };

  const fetchStats = async () => {
    try {
      const res = await api<ApiResponse<StatsResponse>>('/api/listings/stats');
      setStats(res.data);
    } catch (err) {
      console.error('Failed to fetch stats:', err);
    }
  };

  useEffect(() => {
    fetchListings();
    fetchStats();
  }, []);

  const handleFilter = (filter: string | null) => {
    setActiveFilter(filter);
    fetchListings(filter || undefined);
  };

  return (
    <main className="min-h-screen bg-brand-bg">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white px-6 pt-12 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-48 h-48 rounded-full bg-white/20 blur-3xl"></div>
          <div className="absolute bottom-5 left-5 w-32 h-32 rounded-full bg-white/10 blur-2xl"></div>
        </div>

        <div className="relative max-w-lg mx-auto">
          <h1 className="text-3xl font-black tracking-tight">
            Zu<span className="text-teal-200">no</span>
          </h1>
          <p className="mt-2 text-teal-100 text-sm">
            Find PGs with real prices & live availability
          </p>

          <SearchBar />
        </div>
      </section>

      {/* Stats Bar */}
      {stats && <StatsBar stats={stats} />}

      {/* Filter Chips */}
      <FilterChips activeFilter={activeFilter} onFilter={handleFilter} />

      {/* Listings */}
      <section className="px-4 pb-24 max-w-lg mx-auto">
        <h2 className="text-lg font-bold text-brand-text mb-4">
          {activeFilter ? 'Filtered Results' : 'Latest PGs'}
        </h2>

        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-card p-4 shadow-card animate-pulse">
                <div className="h-36 bg-gray-100 rounded-lg mb-3"></div>
                <div className="h-4 bg-gray-100 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-100 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : listings.length === 0 ? (
          <div className="text-center py-12 text-brand-muted">
            <p className="text-4xl mb-3">🏠</p>
            <p className="font-medium">No PGs found</p>
            <p className="text-sm mt-1">Try different filters</p>
          </div>
        ) : (
          <div className="space-y-4">
            {listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        )}
      </section>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-nav px-6 py-3">
        <div className="flex justify-around max-w-lg mx-auto">
          <button className="flex flex-col items-center text-teal-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>
            <span className="text-[10px] mt-1 font-medium">Home</span>
          </button>
          <button className="flex flex-col items-center text-brand-muted">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <span className="text-[10px] mt-1">Search</span>
          </button>
          <button className="flex flex-col items-center text-brand-muted">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
            <span className="text-[10px] mt-1">Saved</span>
          </button>
          <button className="flex flex-col items-center text-brand-muted">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
            <span className="text-[10px] mt-1">Profile</span>
          </button>
        </div>
      </nav>
    </main>
  );
}
