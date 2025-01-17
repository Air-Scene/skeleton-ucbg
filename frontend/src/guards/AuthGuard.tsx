import { useAuthStore } from '@/features/auth/stores/authStore';
import { useEffect, useState } from 'react';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { ProgressBar } from '@/components/atomic';
interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const { isAuthenticated, isAuthInitialized, tryRestoreAuthentication, getRole } = useAuthStore();
  const { navigateByRole } = useAppNavigation();
  
  // Loading state
  const [isLoading, setIsLoading] = useState(!isAuthInitialized);

  // Handle initialization
  useEffect(() => {
    const initializeAuth = async () => {
      // Wait for auth initialization
      if (!isAuthInitialized) {
        try {
          await tryRestoreAuthentication();
        } finally {
          setIsLoading(false);
        }
      }
    };

    initializeAuth();
  }, [isAuthInitialized, tryRestoreAuthentication]);

  // Handle authenticated users
  useEffect(() => {
    if (isLoading) return;

    // Redirect authenticated users to their dashboard
    if (isAuthenticated) {
      navigateByRole(getRole());
    }
  }, [isLoading, isAuthenticated]);

  // Show loading state
  if (isLoading) {
    return <ProgressBar mode="determinate" style={{ height: '6px' }}></ProgressBar>;
  }

  // Only render children if not authenticated
  return !isAuthenticated ? <>{children}</> : null;
};

export default AuthGuard; 