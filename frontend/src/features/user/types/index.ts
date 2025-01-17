import { Language } from '@/types';

export interface UserAccount {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    language: Language;
    role: string;
    status: string;
    createdAt: string;
    updatedAt: string;
}

export interface UserProfile {
    id: string;
    bio: string | null;
    phoneNumber: string | null;
    address: string | null;
    city: string | null;
    country: string | null;
    postalCode: string | null;
    lastLoginDate: string | null;
    createdAt: string;
    updatedAt: string;
}

export interface CombinedUserData {
    account: UserAccount;
    profile: UserProfile;
}

// Type for the update form that combines both account and profile fields
export interface UserUpdateFormData {
    // Account fields
    firstName: string;
    lastName: string;
    language: Language;
    // Profile fields
    bio?: string;
    phoneNumber?: string;
    address?: string;
    city?: string;
    country?: string;
    postalCode?: string;
} 