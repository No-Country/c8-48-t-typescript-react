import { Route } from 'react-router-dom';
import { lazy } from 'react';

const Landing = lazy(() => import('../views/error/Error404'));
const DefaultLayout = lazy(() => import('../views/DefaultLayout'));

export const routesApp: JSX.Element = (
  <Route path="/" element={<DefaultLayout />}>
    <Route path="summary" element={<Landing />} />
  </Route>
);

export default routesApp;
