import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';

export const useDashboardStats = () => {
  const { data: userCount, isLoading: isUserCountLoading } = useQuery({
    queryKey: ['userCount'],
    queryFn: async () => {
      return api.get<number>('/v1/users/count');
    },
  });

  const { data: customerCount, isLoading: isCustomerCountLoading } = useQuery({
    queryKey: ['customerCount'],
    queryFn: async () => {
      return api.get<number>('/v1/customers/count');
    },
  });

  const isLoading = isUserCountLoading || isCustomerCountLoading;

  return {
    userCount: userCount || 0,
    customerCount: customerCount || 0,
    isLoading,
  };
}; 