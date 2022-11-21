import { Route } from 'react-router-dom';
import { lazy } from 'react';

const DefaultLayout = lazy(() => import('../views/DefaultLayout'));
const SignUpAthlete = lazy(() => import('../views/SignUpAthlete'));
const SignUpUniversity = lazy(() => import('../views/SignUpUniversity'));
const Error404 = lazy(() => import('../views/error/Error404'));
const Error50X = lazy(() => import('../views/error/Error50X'));
const Login = lazy(() => import('../views/sign-in'));

export const routesApp: JSX.Element = (
  <Route path="/" element={<DefaultLayout />}>
    <Route path="login/athletes" element={<Login variation="athlete" />} />
    <Route path="login/universities" element={<Login variation="universities" />} />
    <Route path="sign-up/athlete" element={<SignUpAthlete />} />
    <Route path="sign-up/university" element={<SignUpUniversity />} />
    <Route path="error-404" element={<Error404 />} />
    <Route path="error-50x" element={<Error50X />} />
  </Route>
);

export default routesApp;
