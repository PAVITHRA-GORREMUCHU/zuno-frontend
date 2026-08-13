'use client';

interface FilterChipsProps {
  activeFilter: string | null;
  onFilter: (filter: string | null) => void;
}

const filters = [
  { label: 'All', value: null },
  { label: 'TNGOS Colony', value: 'area=TNGOS' },
  { label: 'Gachibowli', value: 'area=Gachibowli' },
  { label: 'Kondapur', value: 'area=Kondapur' },
  { label: 'Under \u20b98K', value: 'budget_max=8000' },
  { label: 'For Women', value: 'gender=FEMALE' },
  { label: 'For Men', value: 'gender=MALE' },
  { label: 'Food Included', value: 'food=true' },
];

export default function FilterChips({ activeFilter, onFilter }: FilterChipsProps) {
  return (
    <div className="px-4 py-4 overflow-x-auto">
      <div className="flex gap-2 max-w-lg mx-auto">
        {filters.map((f) => (
          <button
            key={f.label}
            onClick={() => onFilter(f.value)}
            className={`whitespace-nowrap px-4 py-2 rounded-chip text-xs font-medium transition-all ${
              activeFilter === f.value
                ? 'bg-teal-600 text-white shadow-sm'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-teal-300 hover:text-teal-700'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
    </div>
  );
}
