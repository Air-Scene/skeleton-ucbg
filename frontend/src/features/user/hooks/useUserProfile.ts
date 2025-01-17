import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { userApi, type ChangePasswordRequest } from '../api/userApi';
import type { UserProfile, UserAccount, UserUpdateFormData } from '../types';
import type { AxiosError } from 'axios';
import type { ErrorResponse } from '@/types';

const PROFILE_QUERY_KEY = 'userProfile';
const ACCOUNT_QUERY_KEY = 'userAccount';

export const useUserProfile = () => {
    const queryClient = useQueryClient();

    const { data: profile, isLoading: isProfileLoading, error: profileError } = useQuery<
        UserProfile,
        AxiosError<ErrorResponse>
    >({
        queryKey: [PROFILE_QUERY_KEY],
        queryFn: () => userApi.getProfile()
    });

    const { data: account, isLoading: isAccountLoading, error: accountError } = useQuery<
        UserAccount,
        AxiosError<ErrorResponse>
    >({
        queryKey: [ACCOUNT_QUERY_KEY],
        queryFn: () => userApi.getAccount()
    });

    const { mutate: updateUser, isPending: isUpdating } = useMutation<
        { profile: UserProfile; account: UserAccount },
        AxiosError<ErrorResponse>,
        Partial<UserUpdateFormData>
    >({
        mutationFn: (data) => userApi.updateProfile(data),
        onSuccess: (data) => {
            queryClient.setQueryData([PROFILE_QUERY_KEY], data.profile);
            queryClient.setQueryData([ACCOUNT_QUERY_KEY], data.account);
        }
    });

    const { mutate: changePassword, isPending: isChangingPassword } = useMutation<
        void,
        AxiosError<ErrorResponse>,
        ChangePasswordRequest
    >({
        mutationFn: (data) => userApi.changePassword(data)
    });

    return {
        profile,
        account,
        isLoading: isProfileLoading || isAccountLoading,
        profileError,
        accountError,
        updateUser,
        isUpdating,
        changePassword,
        isChangingPassword
    };
}; 