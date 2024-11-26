import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/home';
import Novel from '../pages/novel/novel';
import Art from '../pages/art/art';
import Layout from '../widgets/layout/layout';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '', element: <Home /> }, // 기본 라우트
        { path: 'novel', element: <Novel /> }, // /about 라우트
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
