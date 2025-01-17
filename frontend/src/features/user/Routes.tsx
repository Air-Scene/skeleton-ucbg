import { lazy } from 'react';
import UserLayout from './layouts/UserLayout';
import RoleGuard from '@/guards/RoleGuard';

const DashboardPage = lazy(() => import('./pages/dashboard'));
const ProfilePage = lazy(() => import('./pages/profile'));

export const userRoutes = {
  path: '/user',
  element: (
    <RoleGuard allowedRoles={['ROLE_USER']}>
      <UserLayout />
    </RoleGuard>
  ),
  children: [
    {
      path: '',
      element: <DashboardPage />
    },
    {
      path: 'profile',
      element: <ProfilePage />
    }
  ]
}; 