import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/route.tsx';
import './index.css';
import { Loading } from './widgets/loading/loading.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <div style={{ position: 'relative' }}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
      <Loading />
    </QueryClientProvider>
  </div>
);
