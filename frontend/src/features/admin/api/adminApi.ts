import { api } from '@/lib/api';
import type { AdminProfile } from '../types';



export const adminApi = {
  getCurrentProfile: async (): Promise<AdminProfile> => {
    return api.get<AdminProfile>('/v1/admin/profile');
  },

  updateCurrentProfile: async (profile: AdminProfile): Promise<AdminProfile> => {
    return api.put<AdminProfile>('/v1/admin/profile', profile);
  },

  // Admin operations
  getProfileById: async (id: string): Promise<AdminProfile> => {
    return api.get<AdminProfile>(`/v1/admin/${id}`);
  },

  getProfileByAccountId: async (accountId: string): Promise<AdminProfile> => {
    return api.get<AdminProfile>(`/v1/admin-profiles/account/${accountId}`);
  },

  createProfile: async (accountId: string, profile: AdminProfile): Promise<AdminProfile> => {
    return api.post<AdminProfile>(`/v1/admin-profiles/account/${accountId}`, profile);
  },

  updateProfile: async (id: string, profile: AdminProfile): Promise<AdminProfile> => {
    return api.put<AdminProfile>(`/v1/admin-profiles/${id}`, profile);
  },

  deleteProfile: async (id: string): Promise<void> => {
    return api.delete<void>(`/v1/admin/${id}`);
  }
}; 