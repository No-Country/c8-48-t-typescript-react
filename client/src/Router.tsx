import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import routesApp from './routes/app.routes';
import routesAuth from './routes/auth.routes';

const Landing = lazy(() => import('./views/error/Error404'));
const DefaultLayout = lazy(() => import('./views/DefaultLayout'));

export default function Router() {
  return (
    <Routes>
      {routesAuth}
      <Route
        path="/"
        element={
          <DefaultLayout>
            <Landing />
          </DefaultLayout>
        }
      />
      {routesApp}
      <Route path="*" element={<Navigate to="/auth/error/404" replace />} />
    </Routes>
  );
}