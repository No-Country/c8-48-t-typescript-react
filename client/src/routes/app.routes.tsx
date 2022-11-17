import { Route } from 'react-router-dom';
import { lazy } from 'react';

const DefaultLayout = lazy(() => import('../views/DefaultLayout'));
const Error404 = lazy(() => import('../views/error/Error404'));
const Error50X = lazy(() => import('../views/error/Error50X'));

export const routesApp: JSX.Element = (
  <Route path="/" element={<DefaultLayout />}>
    <Route path="error-404" element={<Error404 />} />
    <Route path="error-50x" element={<Error50X />} />
  </Route>
);

export default routesApp;
