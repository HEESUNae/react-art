import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/home';
import Event from '../pages/event/event';
import Art from '../pages/art/art';
import Layout from '../widgets/layout';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '', element: <Home /> }, // 기본 라우트
        { path: 'event', element: <Event /> }, // /about 라우트
        { path: 'art', element: <Art /> }, // /about 라우트
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);
