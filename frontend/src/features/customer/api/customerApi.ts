import { api } from '@/lib/api';
import { CustomerProfile } from '../types';


export const customerApi = {
  getProfile: () => {
    return api.get<CustomerProfile>('/v1/customer/profile');
},

  updateProfile: async (profile: Partial<CustomerProfile>): Promise<CustomerProfile> => {
    return api.put<CustomerProfile>('/v1/customer/profile', profile);
  },

  getById: async (id: string): Promise<CustomerProfile> => {
    return api.get<CustomerProfile>(`/v1/customer/${id}`);
  }
}; 