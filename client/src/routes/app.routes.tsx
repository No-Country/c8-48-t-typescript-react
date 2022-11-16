import { Route } from 'react-router-dom';
import { lazy } from 'react';

const Error404 = lazy(() => import('../views/error/Error404'));
const Error50X = lazy(() => import('../views/error/Error50X'));
const Landing = lazy(() => import('../views/error/Error404'));
const DefaultLayout = lazy(() => import('../views/DefaultLayout'));

export const routesApp: JSX.Element = (
  <Route path="/" element={<DefaultLayout />}>
    <Route path="summary" element={<Landing />} />
  </Route>
);

export default routesApp;
