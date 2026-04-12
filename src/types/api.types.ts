export type Role            = 'STUDENT' | 'ADMIN';
export type ListingStatus   = 'AVAILABLE' | 'RENTED' | 'INACTIVE';
export type ListingCategory = 'TEXTBOOKS' | 'ELECTRONICS' | 'FURNITURE' | 'CLOTHING' | 'OTHER';
export type ItemCondition   = 'NEW' | 'LIKE_NEW' | 'GOOD' | 'FAIR';
export type BookingStatus   = 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED';
export type PaymentStatus   = 'PENDING' | 'PAID' | 'REFUNDED';

export interface UserDto {
  id:              number;
  fullName:        string;
  universityEmail: string;
  role:            Role;
  profilePicture?: string;
  phone?:          string;
}

export interface JwtResponse {
  token: string;
  user:  UserDto;
}

export interface ErrorResponse {
  timestamp:    string;
  status:       number;
  error:        string;
  message:      string;
  path:         string;
  fieldErrors?: Record<string, string>;
}

export interface LoginRequest {
  universityEmail: string;
  password:        string;
}

export interface RegisterRequest {
  fullName:        string;
  email:           string;
  universityEmail: string;
  universityId:    string;
  password:        string;
}