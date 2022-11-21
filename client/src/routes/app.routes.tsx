import { Route } from 'react-router-dom';
import { lazy } from 'react';

const DefaultLayout = lazy(() => import('../views/DefaultLayout'));
const SignUpAthletes = lazy(() => import('../views/SignUpAthlete'));
const SignUpUniversity = lazy(() => import('../views/SignUpUniversity'));
const Error404 = lazy(() => import('../views/error/Error404'));
const Error50X = lazy(() => import('../views/error/Error50X'));

export const routesApp: JSX.Element = (
  <Route path="/" element={<DefaultLayout />}>
    <Route path="sign-up/athletes" element={<SignUpAthletes />} />
    <Route path="sign-up/universities" element={<SignUpUniversity />} />
    <Route path="error-404" element={<Error404 />} />
    <Route path="error-50x" element={<Error50X />} />
  </Route>
);

export default routesApp;
