import { Route } from 'react-router-dom';
import { lazy } from 'react';

const DefaultLayout = lazy(() => import('../views/DefaultLayout'));
const SearchView = lazy(() => import('../views/search'));
const Error404 = lazy(() => import('../views/error/Error404'));
const Error50X = lazy(() => import('../views/error/Error50X'));
const AthleteProfile = lazy(() => import('../views/AthleteProfile'));
const UniversityProfile = lazy(() => import('../views/UniversityProfile/UniversityProfile'));

const routesApp: JSX.Element = (
  <Route path="/" element={<DefaultLayout />}>
    <Route path="search/:search" element={<SearchView />} />
    <Route path="error-404" element={<Error404 />} />
    <Route path="error-50x" element={<Error50X />} />
    <Route path="university-profile" element={<UniversityProfile />} />
    <Route path="athlete-profile" element={<AthleteProfile />} />
    <Route path="athlete-profile/:athleteId" element={<AthleteProfile />} />
  </Route>
);

export default routesApp;
