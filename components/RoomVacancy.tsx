'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { Room, ApiResponse } from '@/lib/types';

interface RoomVacancyProps {
  listingId: string;
}

export default function RoomVacancy({ listingId }: RoomVacancyProps) {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api<ApiResponse<Room[]>>(`/api/listings/${listingId}/rooms`)
      .then((res) => {
        setRooms(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [listingId]);

  if (loading) {
    return (
      <div className="bg-white rounded-card shadow-card p-5 mt-4 animate-pulse">
        <div className="h-4 bg-gray-100 rounded w-1/3 mb-3"></div>
        <div className="h-12 bg-gray-100 rounded"></div>
      </div>
    );
  }

  if (rooms.length === 0) return null;

  return (
    <div className="bg-white rounded-card shadow-card p-5 mt-4">
      <h3 className="text-sm font-bold text-brand-text mb-3">Room Availability</h3>
      <div className="space-y-3">
        {rooms.map((room) => {
          const isAvailable = room.availableBeds > 0;
          return (
            <div
              key={room.id}
              className={`flex items-center justify-between p-3 rounded-lg border ${
                isAvailable ? 'border-green-200 bg-green-50/50' : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div>
                <p className="text-sm font-medium text-brand-text">{room.roomLabel}</p>
                <p className="text-xs text-brand-muted">
                  {room.roomType.charAt(0) + room.roomType.slice(1).toLowerCase()} sharing
                </p>
              </div>
              <div className="text-right">
                {isAvailable ? (
                  <span className="text-xs font-bold text-green-600">
                    {room.availableBeds} of {room.capacity} free
                  </span>
                ) : (
                  <span className="text-xs font-bold text-red-500">Full</span>
                )}
                <div className="flex gap-0.5 mt-1 justify-end">
                  {Array.from({ length: room.capacity }).map((_, i) => (
                    <span
                      key={i}
                      className={`w-2.5 h-2.5 rounded-full ${
                        i < room.occupiedCount ? 'bg-red-400' : 'bg-green-400'
                      }`}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-[10px] text-brand-muted mt-3 text-center">
        \ud83d\udd04 Updated live by owner
      </p>
    </div>
  );
}
