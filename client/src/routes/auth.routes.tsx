import { Route } from 'react-router-dom';
import { lazy } from 'react';

const DefaultLayout = lazy(() => import('../views/DefaultLayout'));
const SignUpAthlete = lazy(() => import('../views/register/SignUpAthlete'));
const SignUpUniversity = lazy(() => import('../views/register/SignUpUniversity'));
const Login = lazy(() => import('../views/login'));
const UniversityProfile = lazy(() => import('../views/UniversityProfile/UniversityProfile'));

const routesAuth: JSX.Element = (
  <Route path="auth" element={<DefaultLayout />}>
    <Route path="login/athlete" element={<Login variation="athlete" />} />
    <Route path="login/university" element={<Login variation="university" />} />
    <Route path="sign-up/athlete" element={<SignUpAthlete />} />
    <Route path="sign-up/university" element={<SignUpUniversity />} />
    <Route path="error" element={<DefaultLayout />} />
    <Route path="university-profile" element={<UniversityProfile />} />
  </Route>
);

export default routesAuth;
