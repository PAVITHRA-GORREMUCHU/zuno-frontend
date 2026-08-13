'use client';

import Link from 'next/link';
import { Listing } from '@/lib/types';

interface ListingDetailProps {
  listing: Listing;
}

export default function ListingDetail({ listing }: ListingDetailProps) {
  const genderLabel = {
    MALE: 'Men Only',
    FEMALE: 'Women Only',
    ANY: 'Co-ed (Any Gender)',
  }[listing.genderPreference] || listing.genderPreference;

  return (
    <main className="min-h-screen bg-brand-bg pb-24">
      {/* Header with back button */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-gray-100 px-4 py-3 flex items-center gap-3">
        <Link href="/" className="text-gray-600 hover:text-gray-900">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="text-sm font-semibold text-brand-text truncate">{listing.pgName}</h1>
      </div>

      {/* Photo Section (placeholder) */}
      <div className="h-56 bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
        <div className="text-center">
          <span className="text-5xl">🏠</span>
          <p className="text-teal-700 text-xs mt-2">Photos coming soon</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 max-w-lg mx-auto">
        {/* Title & Price Card */}
        <div className="bg-white rounded-card shadow-card p-5 -mt-6 relative z-5">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-bold text-brand-text">{listing.pgName}</h2>
              <p className="text-sm text-brand-muted mt-1 flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {listing.address}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-teal-600">\u20b9{listing.monthlyRent.toLocaleString('en-IN')}</p>
              <p className="text-[10px] text-brand-muted">per month</p>
            </div>
          </div>

          {/* Quick Info Pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-xs px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 font-medium">
              {listing.area}
            </span>
            <span className="text-xs px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 font-medium">
              {genderLabel}
            </span>
            {listing.foodIncluded && (
              <span className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-700 font-medium">
                🍜 Food Included
              </span>
            )}
            {listing.vacantBeds > 0 ? (
              <span className="text-xs px-3 py-1.5 rounded-full bg-green-50 text-green-700 font-medium">
                ✅ {listing.vacantBeds} beds available
              </span>
            ) : (
              <span className="text-xs px-3 py-1.5 rounded-full bg-red-50 text-red-700 font-medium">
                ❌ Fully occupied
              </span>
            )}
          </div>

          {listing.securityDeposit && (
            <p className="text-xs text-brand-muted mt-3">
              Security Deposit: \u20b9{listing.securityDeposit.toLocaleString('en-IN')}
            </p>
          )}
        </div>

        {/* Amenities */}
        {listing.amenities.length > 0 && (
          <div className="bg-white rounded-card shadow-card p-5 mt-4">
            <h3 className="text-sm font-bold text-brand-text mb-3">Amenities</h3>
            <div className="grid grid-cols-2 gap-2">
              {listing.amenities.map((amenity) => (
                <div key={amenity} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                  {amenity}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* House Rules */}
        {listing.houseRules.length > 0 && (
          <div className="bg-white rounded-card shadow-card p-5 mt-4">
            <h3 className="text-sm font-bold text-brand-text mb-3">House Rules</h3>
            <div className="space-y-2">
              {listing.houseRules.map((rule) => (
                <div key={rule} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-orange-500 mt-0.5">⚠\ufe0f</span>
                  {rule}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Owner Card */}
        {listing.ownerPhone && (
          <div className="bg-white rounded-card shadow-card p-5 mt-4">
            <h3 className="text-sm font-bold text-brand-text mb-3">Contact Owner</h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-brand-text">{listing.ownerName || 'PG Owner'}</p>
                <p className="text-xs text-brand-muted">Usually responds within 1 hour</p>
              </div>
              <div className="flex gap-2">
                <a
                  href={`tel:${listing.ownerPhone}`}
                  className="flex items-center gap-1 px-4 py-2 rounded-button bg-teal-600 text-white text-xs font-medium hover:bg-teal-700 transition"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  Call
                </a>
                <a
                  href={`https://wa.me/91${listing.ownerPhone}?text=Hi, I saw your PG "${listing.pgName}" on Zuno. Is there availability?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-4 py-2 rounded-button bg-green-500 text-white text-xs font-medium hover:bg-green-600 transition"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
