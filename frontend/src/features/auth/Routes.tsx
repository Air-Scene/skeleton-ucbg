import { lazy } from 'react';
import AuthLayout from './layouts/AuthLayout';
import AuthGuard from '@/guards/AuthGuard';

const LoginPage = lazy(() => import('./pages/login'));
const RegisterPage = lazy(() => import('./pages/registration'));
const ForgotPasswordPage = lazy(() => import('./pages/passwordForgot'));
const ResetPasswordPage = lazy(() => import('./pages/passwordReset'));
const VerificationPage = lazy(() => import('./pages/verification'));

export const authRoutes = {
  path: '/',
  element: (
    <AuthGuard>
      <AuthLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: 'login',
      element: <LoginPage />
    },
    {
      path: 'register',
      element: <RegisterPage />
    },
    {
      path: 'forgot-password',
      element: <ForgotPasswordPage />
    },
    {
      path: 'reset-password',
      element: <ResetPasswordPage />
    },
    {
      path: 'verify/success',
      element: <VerificationPage isSuccess={true} />
    },
    {
      path: 'verify/error',
      element: <VerificationPage isSuccess={false} />
    }
  ]
}; 