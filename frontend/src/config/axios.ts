import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { useAuthStore } from '@/features/auth/stores/authStore';

// Types
interface ExtendedAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

// Constants
const getApiUrl = () => {
  const envUrl = import.meta.env.VITE_BACKEND_URL;
  
  // If we have an environment variable, use it
  if (envUrl) {
    // Remove trailing slash if present
    const baseUrl = envUrl.endsWith('/') ? envUrl.slice(0, -1) : envUrl;
    return `${baseUrl}/api`;
  }

  // Development fallback
  if (import.meta.env.DEV) {
    console.warn('No VITE_BACKEND_URL found, falling back to localhost:8080');
    return 'http://localhost:8080/api';
  }

  // Production fallback (this should never happen if deployed correctly)
  console.error('No VITE_BACKEND_URL found in production environment!');
  return '/api';
};

const API_CONFIG = {
  baseURL: getApiUrl(),
  timeout: import.meta.env.PROD ? 10000 : 30000, // Shorter timeout in production
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
} as const;

const AUTH_ENDPOINTS = {
  LOGIN: '/auth/login',
  REFRESH: '/auth/refresh',
  LOGOUT: '/auth/logout',
} as const;

// Create axios instance
export const axiosInstance: AxiosInstance = axios.create({
  ...API_CONFIG,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = useAuthStore.getState().accessToken;
    
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as ExtendedAxiosRequestConfig;
    
    // Handle token refresh
    if (shouldAttemptTokenRefresh(error, originalRequest)) {
      return handleTokenRefresh(originalRequest);
    }
    
    return Promise.reject(error);
  }
);

function shouldAttemptTokenRefresh(error: AxiosError, request?: ExtendedAxiosRequestConfig): boolean {
  if (!request || request._retry) return false;
  if (isAuthEndpoint(request.url)) return false;
  return error.response?.status === 401 || false;
}

function isAuthEndpoint(url?: string): boolean {
  if (!url) return false;
  return url.includes(AUTH_ENDPOINTS.LOGIN) || 
         url.includes(AUTH_ENDPOINTS.REFRESH);
}

async function handleTokenRefresh(originalRequest: ExtendedAxiosRequestConfig) {
  try {
    originalRequest._retry = true;
    
    const newAccessToken = await useAuthStore.getState().refreshAccessToken();
    
    if (originalRequest.headers) {
      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
    }

    return axiosInstance(originalRequest);
    
  } catch (error) {
    window.location.href = '/login';
    return Promise.reject(error);
  }
}

export default axiosInstance; 