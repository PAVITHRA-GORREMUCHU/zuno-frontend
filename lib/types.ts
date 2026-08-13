// Types for API responses

export interface Listing {
  id: string;
  pgName: string;
  address: string;
  area: string;
  city: string;
  latitude: number | null;
  longitude: number | null;
  genderPreference: string;
  monthlyRent: number;
  securityDeposit: number | null;
  foodIncluded: boolean;
  amenities: string[];
  houseRules: string[];
  photos: string[];
  isActive: boolean;
  totalBeds: number;
  vacantBeds: number;
  createdAt: string;
  updatedAt: string;
  ownerName: string | null;
  ownerPhone: string | null;
}

export interface PaginationInfo {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  pagination?: PaginationInfo;
}

export interface StatsResponse {
  totalListings: number;
  totalVacantBeds: number;
}
