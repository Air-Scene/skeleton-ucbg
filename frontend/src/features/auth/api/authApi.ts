import { api } from '@/lib/api';
import type { 
  LoginRequest, 
  RegistrationRequest, 
  PasswordResetRequest,
  PasswordForgotRequest,
  AuthResponse
} from '../types';

export const authApi = {
  login: async (loginData: LoginRequest): Promise<AuthResponse> => {
    console.log('API URL:', import.meta.env.VITE_API_URL);
    console.log('Login endpoint:', '/auth/login');
    return api.post<AuthResponse>('/auth/login', loginData);
  },

  register: async (registerData: RegistrationRequest): Promise<AuthResponse> => {
    return api.post<AuthResponse>('/auth/register', registerData);
  },

  logout: async (): Promise<void> => {
    return api.post('/auth/logout');
  },

  forgotPassword: async (forgotPasswordData: PasswordForgotRequest): Promise<void> => {
    return api.post('/auth/forgot-password', forgotPasswordData);
  },

  resetPassword: async (resetData: PasswordResetRequest): Promise<void> => {
    return api.post('/auth/reset-password', resetData);
  },

  refreshToken: async (): Promise<AuthResponse> => {
    return api.post<AuthResponse>('/auth/refresh');
  }
}; 