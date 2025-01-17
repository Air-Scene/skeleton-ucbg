import { lazy } from 'react';
import CustomerLayout from './layouts/CustomerLayout';
import RoleGuard from '@/guards/RoleGuard';

const DashboardPage = lazy(() => import('./pages/dashboard'));
const SettingsPage = lazy(() => import('./pages/settings'));

export const customerRoutes = {
  path: '/customer',
  element: (
    <RoleGuard allowedRoles={['ROLE_CUSTOMER']}>
      <CustomerLayout />
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