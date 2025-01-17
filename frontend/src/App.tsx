import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AppRoutes from './routes';
import { PrimeReactProvider } from 'primereact/api';
import { Suspense } from 'react';
import { MessageProvider } from './components/providers/MessageProvider';
import ErrorBoundary from '@/components/boundaries/ErrorBoundary';
import { ProgressBar } from '@/components/atomic';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

function App() {
  return (
    <ErrorBoundary>
      <PrimeReactProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <MessageProvider />
            <Suspense fallback={<ProgressBar mode="determinate" style={{ height: '6px' }}></ProgressBar>}>
              <AppRoutes />
            </Suspense>
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </PrimeReactProvider>
    </ErrorBoundary>
  );
}

export default App;
