import { useAuthStore } from '@/features/auth/stores/authStore';
import { Role } from '@/types';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMessage } from '@/hooks/useMessage';
import { useMessageStore } from '@/stores/messageStore';

interface RoleGuardProps {
  allowedRoles: Role[];
  children: React.ReactNode;
}

const RoleGuard = ({ allowedRoles, children }: RoleGuardProps) => {
  const location = useLocation();
  const { isAuthenticated, hasRole, isAuthInitialized, getRole } = useAuthStore();
  const { navigateToLogin, navigateByRole } = useAppNavigation();
  const { showError } = useMessage();
  const { clearMessage } = useMessageStore();
  const [isLoading, setIsLoading] = useState(!isAuthInitialized);

  // Check authorization status
  const hasAllowedRole = allowedRoles.some(role => hasRole(role));
  const isAuthorized = isAuthenticated && hasAllowedRole;

  // Handle initialization and unauthorized access
  useEffect(() => {
    if (!isAuthInitialized) {
      return;
    }

    setIsLoading(false);

    // Handle different unauthorized scenarios
    if (!isAuthenticated) {
      // Not logged in -> show login message and redirect to login
      showError('auth.pleaseLogin');
      navigateToLogin({ returnUrl: location.pathname });
    } else if (!hasAllowedRole) {
      // Logged in but wrong role -> redirect to their dashboard
      const currentRole = getRole();
      if (currentRole) {
        navigateByRole(currentRole);
      }
    }

    // Cleanup function to clear messages when component unmounts or auth state changes
    return () => {
      clearMessage();
    };
  }, [isAuthInitialized, isAuthenticated]); // Add isAuthenticated to dependencies

  if (isLoading) {
    return null;
  }

  return isAuthorized ? <>{children}</> : null;
};

export default RoleGuard; 