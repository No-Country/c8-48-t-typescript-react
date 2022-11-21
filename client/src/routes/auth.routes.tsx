import { Route } from 'react-router-dom';
import { lazy } from 'react';

const Landing = lazy(() => import('../views/error/Error404'));
const DefaultLayout = lazy(() => import('../views/DefaultLayout'));

export const routesAuth: JSX.Element = (
  <Route path="auth" element={<Landing />}>
    <Route path="login" element={<DefaultLayout />} />
    <Route path="signup" element={<DefaultLayout />} />
    <Route path="error" element={<DefaultLayout />} />
  </Route>
);

export default routesAuth;
