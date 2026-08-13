import { api } from '@/lib/api';
import { Listing, ApiResponse } from '@/lib/types';
import { notFound } from 'next/navigation';
import ListingDetail from '@/components/ListingDetail';

interface PageProps {
  params: { id: string };
}

// Server-side fetch for SEO
async function getListing(id: string): Promise<Listing | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'}/api/listings/${id}`,
      { cache: 'no-store' }
    );
    if (!res.ok) return null;
    const data: ApiResponse<Listing> = await res.json();
    return data.data;
  } catch {
    return null;
  }
}

export default async function ListingPage({ params }: PageProps) {
  const listing = await getListing(params.id);

  if (!listing) {
    notFound();
  }

  return <ListingDetail listing={listing} />;
}
