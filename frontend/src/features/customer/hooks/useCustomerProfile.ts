import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { customerApi } from '../api/customerApi';
import type { CustomerProfile } from '../types';

const PROFILE_QUERY_KEY = 'customerProfile';

export const useCustomerProfile = () => {
  const queryClient = useQueryClient();

  const { data: profile, isLoading, error } = useQuery<CustomerProfile>({
    queryKey: [PROFILE_QUERY_KEY],
    queryFn: () => customerApi.getProfile()
  });

  const { mutate: updateProfile, isPending } = useMutation({
    mutationFn: (data: Partial<CustomerProfile>) => customerApi.updateProfile(data),
    onSuccess: (updatedProfile) => {
      queryClient.setQueryData([PROFILE_QUERY_KEY], updatedProfile);
    }
  });

  return {
    profile,
    isLoading,
    error,
    updateProfile,
    isUpdating: isPending
  };
}; 