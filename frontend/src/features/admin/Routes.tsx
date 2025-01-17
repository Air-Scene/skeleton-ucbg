import { lazy } from 'react';
import AdminLayout from './layouts/AdminLayout';
import RoleGuard from '@/guards/RoleGuard';

const DashboardPage = lazy(() => import('./pages/dashboard'));
const SettingsPage = lazy(() => import('./pages/settings'));

export const adminRoutes = {
  path: '/admin',
  element: (
    <RoleGuard allowedRoles={['ROLE_ADMIN']}>
      <AdminLayout />
    </RoleGuard>
  ),
  children: [
    {
      path: '',
      element: <DashboardPage />
    },
    {
      path: 'settings',
      element: <SettingsPage />
    }
  ]
}; 