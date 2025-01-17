import { publicRoutes } from '@/features/public/Routes';
import { authRoutes } from '@/features/auth/Routes';
import { adminRoutes } from '@/features/admin/Routes';
import { customerRoutes } from '@/features/customer/Routes';
import { userRoutes } from '@/features/user/Routes';
import ErrorBoundary from '@/components/boundaries/ErrorBoundary';
import { ProgressBar } from '@/components/atomic';
import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';

const AppRoutes = () => {
  return (
    <Suspense fallback={<ProgressBar mode="determinate" style={{ height: '6px' }}></ProgressBar>}>
      <ErrorBoundary>
        <Routes>
          {/* Public routes first - accessible to everyone */}
          <Route
            path={publicRoutes.path}
            element={publicRoutes.element}
          >
            {publicRoutes.children.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>

          {/* Auth routes - for unauthenticated users */}
          <Route
            path={authRoutes.path}
            element={authRoutes.element}
          >
            {authRoutes.children.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>

          {/* Protected routes - each with its own RoleGuard */}
          <Route
            path={adminRoutes.path}
            element={adminRoutes.element}
          >
            {adminRoutes.children.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>

          <Route
            path={customerRoutes.path}
            element={customerRoutes.element}
          >
            {customerRoutes.children.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>

          <Route 
            path={userRoutes.path}
            element={userRoutes.element}
          >
            {userRoutes.children.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>
        </Routes>
      </ErrorBoundary>
    </Suspense>
  );
};

export default AppRoutes; 