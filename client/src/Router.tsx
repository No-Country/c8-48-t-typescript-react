import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import routesApp from './routes/app.routes';
import routesAuth from './routes/auth.routes';
import FAQ from './views/FAQ';
import ScholarshipPackages from './views/ScholarshipPackages';
import Scholarships from './views/Scholarships';

const Landing = lazy(() => import('./views/Home'));
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
      <Route
        path="/becas"
        element={
          <DefaultLayout>
            <Scholarships />
          </DefaultLayout>
        }
      />
      <Route
        path="/planes"
        element={
          <DefaultLayout>
            <ScholarshipPackages />
          </DefaultLayout>
        }
      />
      <Route
        path="/ayuda"
        element={
          <DefaultLayout>
            <FAQ />
          </DefaultLayout>
        }
      />
      {routesApp}
      <Route path="*" element={<Navigate to="/error-404" replace />} />
    </Routes>
  );
}
