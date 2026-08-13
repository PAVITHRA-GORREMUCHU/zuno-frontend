import Link from 'next/link';
import { Listing } from '@/lib/types';

interface ListingCardProps {
  listing: Listing;
}

export default function ListingCard({ listing }: ListingCardProps) {
  const genderBadge = {
    MALE: { label: 'Men', color: 'bg-blue-50 text-blue-700' },
    FEMALE: { label: 'Women', color: 'bg-pink-50 text-pink-700' },
    ANY: { label: 'Any Gender', color: 'bg-purple-50 text-purple-700' },
  }[listing.genderPreference] || { label: listing.genderPreference, color: 'bg-gray-50 text-gray-700' };

  return (
    <Link href={`/listing/${listing.id}`}>
      <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition-shadow p-4 cursor-pointer">
        {/* Image Placeholder */}
        <div className="h-36 rounded-lg bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center mb-3 relative overflow-hidden">
          <span className="text-4xl">🏠</span>
          {/* Vacancy Badge */}
          {listing.vacantBeds > 0 && (
            <span className="absolute top-2 right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              {listing.vacantBeds} beds free
            </span>
          )}
        </div>

        {/* Content */}
        <div className="space-y-2">
          {/* Name & Price */}
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-brand-text text-sm leading-tight pr-2">
              {listing.pgName}
            </h3>
            <span className="text-teal-600 font-bold text-sm whitespace-nowrap">
              \u20b9{listing.monthlyRent.toLocaleString('en-IN')}
              <span className="text-[10px] text-brand-muted font-normal">/mo</span>
            </span>
          </div>

          {/* Location */}
          <p className="text-xs text-brand-muted flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {listing.area}, {listing.city}
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${genderBadge.color}`}>
              {genderBadge.label}
            </span>
            {listing.foodIncluded && (
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-orange-50 text-orange-700">
                🍜 Food
              </span>
            )}
            {listing.amenities.slice(0, 2).map((amenity) => (
              <span key={amenity} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-50 text-gray-600">
                {amenity}
              </span>
            ))}
            {listing.amenities.length > 2 && (
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-50 text-gray-600">
                +{listing.amenities.length - 2} more
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
