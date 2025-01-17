import { Account, Role, AccountStatus } from '@/types';
import { AuthResponse } from '../types';
import { axiosInstance } from '@/config/axios';
import i18n from '@/config/i18n';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AuthState {
  account: Account | null;
  authority: Role;
  accessToken: string | null;
  isAuthenticated: boolean;
  isAuthInitialized: boolean;

  setAuth: (response: AuthResponse) => void;
  setAccessToken: (token: string) => void;
  clearAuth: () => void;   
  hasRole: (role: Role) => boolean;    
  getRole: () => Role;
  getFullName: () => string;                  
  getAccountStatus: () => AccountStatus | null;
  refreshAccessToken: () => Promise<string>;
  tryRestoreAuthentication: () => Promise<void>;
  getAccount: () => Account | null;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      account: null,
      authority: 'ROLE_USER',
      accessToken: null,
      isAuthenticated: false,
      isAuthInitialized: false,

      setAuth: (response) => {
        if (!response.accessToken || !response.account) {
          return;
        }
        set({
          account: response.account,
          authority: response.authority,
          accessToken: response.accessToken,
          isAuthenticated: true,
          isAuthInitialized: true,
        });
        i18n.changeLanguage(response.account.language.toLowerCase());
      },

      setAccessToken: (token: string) => {
        set({ accessToken: token });
      },

      clearAuth: () =>
        set({
          account: null,
          authority: 'ROLE_USER',
          accessToken: null,
          isAuthenticated: false,
          isAuthInitialized: true,
        }),

      hasRole: (role: Role) => {
        const account = get().account;
        if (!account) return false;
        return account.role === role;
      },

      getRole: () => {
        const account = get().account;
        if (!account) {
          return 'ROLE_USER';
        }
        return account.role;
      },

      getFullName: () => {
        const account = get().account;
        if (!account) return '';
        return `${account.firstName} ${account.lastName}`.trim();
      },

      getAccountStatus: () => {
        return get().account?.status ?? null;
      },

      refreshAccessToken: async () => {
        try {
          const response = await axiosInstance.post<AuthResponse>('/auth/refresh');
          const authResponse = response.data;
          
          set({
            account: authResponse.account,
            authority: authResponse.authority,
            accessToken: authResponse.accessToken,
            isAuthenticated: true,
            isAuthInitialized: true,
          });
          
          return authResponse.accessToken;
        } catch (error) {
          set({
            account: null,
            authority: 'ROLE_USER',
            accessToken: null,
            isAuthenticated: false,
            isAuthInitialized: true,
          });
          throw error;
        }
      },

      tryRestoreAuthentication: async () => {
        const state = get();
        if (!state.isAuthInitialized || (!state.isAuthenticated && !state.accessToken)) {
          try {
            await state.refreshAccessToken();
          } catch (error) {
            // If refresh fails, ensure we're marked as initialized
            set({ isAuthInitialized: true });
          }
        }
      },

      getAccount: () => {
        return get().account;
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        account: state.account,
        authority: state.authority,
        accessToken: state.accessToken,
        isAuthenticated: state.isAuthenticated,
        isAuthInitialized: state.isAuthInitialized,
      }),
    }
  )
);