import { api } from '@/lib/api';
import type { UserProfile, UserAccount, UserUpdateFormData } from '../types';

export interface ChangePasswordRequest {
    currentPassword: string;
    newPassword: string;
}

export const userApi = {
    getProfile: () => {
        return api.get<UserProfile>('/v1/users/profile');
    },

    getAccount: () => {
        return api.get<UserAccount>('/v1/accounts/me');
    },

    updateProfile: async (data: Partial<UserUpdateFormData>): Promise<{ profile: UserProfile; account: UserAccount }> => {
        // Split data into account and profile updates
        const accountData = {
            firstName: data.firstName,
            lastName: data.lastName,
            language: data.language
        };

        const profileData = {
            bio: data.bio,
            phoneNumber: data.phoneNumber,
            address: data.address,
            city: data.city,
            country: data.country,
            postalCode: data.postalCode
        };

        // Make both API calls in parallel
        const [account, profile] = await Promise.all([
            api.put<UserAccount>('/v1/accounts/me', accountData),
            api.put<UserProfile>('/v1/users/profile', profileData)
        ]);

        return { account, profile };
    },

    changePassword: (data: ChangePasswordRequest) => {
        return api.put<void>('/v1/accounts/me/password', data);
    }
}; 