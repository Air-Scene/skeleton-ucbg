import { api } from '@/lib/api';
import { Account } from '../types';

export const accountApi = {
  getMe: async (): Promise<Account> => {
    return api.get<Account>('/v1/accounts/me');
  },

  getById: async (id: string): Promise<Account> => {
    return api.get<Account>(`/v1/accounts/${id}`);
  },

  updatePassword: async (currentPassword: string, newPassword: string): Promise<void> => {
    return api.put<void>('/v1/accounts/password', { currentPassword, newPassword });
  }
}; 