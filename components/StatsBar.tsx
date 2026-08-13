import { StatsResponse } from '@/lib/types';

interface StatsBarProps {
  stats: StatsResponse;
}

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <div className="bg-white border-b border-gray-100 px-4 py-3">
      <div className="flex justify-center gap-8 max-w-lg mx-auto">
        <div className="text-center">
          <p className="text-xl font-bold text-teal-600">{stats.totalListings}</p>
          <p className="text-[11px] text-brand-muted">Active PGs</p>
        </div>
        <div className="w-px bg-gray-200"></div>
        <div className="text-center">
          <p className="text-xl font-bold text-teal-600">{stats.totalVacantBeds}</p>
          <p className="text-[11px] text-brand-muted">Beds Available</p>
        </div>
        <div className="w-px bg-gray-200"></div>
        <div className="text-center">
          <p className="text-xl font-bold text-teal-600">3</p>
          <p className="text-[11px] text-brand-muted">Areas</p>
        </div>
      </div>
    </div>
  );
}
