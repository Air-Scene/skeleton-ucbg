import { authApi } from '../api/authApi';
import { useAuthStore } from '../stores/authStore';
import { AuthResponse, PasswordForgotRequest, LoginRequest, RegistrationRequest, PasswordResetRequest } from '../types';  
import { ErrorResponse } from '@/types/responses/ErrorResponse';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { useMessage } from '@/hooks/useMessage';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useAuth = () => {
  const { setAuth, clearAuth } = useAuthStore();
  const { navigateToLogin } = useAppNavigation();
  const { showError, showSuccess } = useMessage();

  const login = useMutation<AuthResponse, AxiosError<ErrorResponse>, LoginRequest>({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      setAuth(data);
      console.log(data);
    },
    onError: (error) => {
      showError(error);
      clearAuth();
    },
  });

  const register = useMutation<AuthResponse, AxiosError<ErrorResponse>, RegistrationRequest>({
    mutationFn: authApi.register,
    onSuccess: () => {
      showSuccess('auth.registration.success');
      navigateToLogin();
    },
    onError: showError,
  });

  const forgotPassword = useMutation<void, AxiosError<ErrorResponse>, PasswordForgotRequest>({
    mutationFn: (data) => authApi.forgotPassword(data),
    onSuccess: () => {
      showSuccess('auth.passwordForgot.success');
      navigateToLogin();
    },
    onError: showError,
  });

  const resetPassword = useMutation<void, AxiosError<ErrorResponse>, PasswordResetRequest>({
    mutationFn: authApi.resetPassword,
    onSuccess: () => {
      showSuccess('auth.resetPassword.success');
      navigateToLogin();
    },
    onError: showError,
  });

  const logout = useMutation<void, AxiosError<ErrorResponse>>({
    mutationFn: authApi.logout,
    onSuccess: () => {
      clearAuth();
      navigateToLogin();
    },
    onError: () => {
      clearAuth();
      navigateToLogin();
    },
  });

  return {
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
    isLoggingIn: login.isPending,
    isRegistering: register.isPending,
    isLoggingOut: logout.isPending,
    isForgotPasswordPending: forgotPassword.isPending,
    isResettingPassword: resetPassword.isPending,
  };
}; 