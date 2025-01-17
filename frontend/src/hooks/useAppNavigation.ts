import { useNavigate } from 'react-router-dom';
import { Role } from '@/types';

export const useAppNavigation = () => {
  const navigate = useNavigate();

  const navigateByRole = (role: Role) => {
    switch (role) {
      case 'ROLE_ADMIN':
        navigate('/admin', { replace: true });
        break;
      case 'ROLE_CUSTOMER':
        navigate('/customer', { replace: true });
        break;
      case 'ROLE_USER':
        navigate('/user', { replace: true });
        break;
      default:
        navigateToDefault();
    }
  };

  const navigateToDefault = () => {
    navigate('/', { replace: true });
  };

  const navigateToLogin = (state?: any) => {
    navigate('/login', { 
      replace: true,
      state
    });
  };

  const navigateToRegister = (state?: any) => {
    navigate('/register', { 
      replace: true,
      state
    });
  };

  return { 
    navigateByRole,
    navigateToDefault,
    navigateToLogin,
    navigateToRegister
  };
}; 