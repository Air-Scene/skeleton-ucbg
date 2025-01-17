import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';

const HomePage = lazy(() => import('./pages/home'));
const PricingPage = lazy(() => import('./pages/pricing'));
const NotFound = lazy(() => import('@/components/common/NotFound'));
const Showcase = lazy(() => import('./pages/Showcase'));

export const publicRoutes = {
  path: '/',
  element: <PublicLayout />,
  children: [
    {
      path: '',
      element: <HomePage />
    },
    {
      path: 'pricing',
      element: <PricingPage />
    },
    {
      path: 'showcase',
      element: <Showcase />
    },
    {
      path: '404',
      element: <NotFound />
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />
    }
  ]
}; 