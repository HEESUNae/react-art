import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/route.tsx';

createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
    <App />
  </>
);
