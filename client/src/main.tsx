import './index.css';

import * as ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { Suspense, StrictMode, lazy } from 'react';

import { theme as defaultTheme } from './constants/mui/default-theme';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CenteredSpinner from './components/CenteredSpinner';
import DefaultLayout from './views/DefaultLayout';

const Router = lazy(() => import('./Router'));

function App() {
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Suspense
          fallback={
            <DefaultLayout>
              <CenteredSpinner />
            </DefaultLayout>
          }
        >
          <StrictMode>
            <Router />
          </StrictMode>
        </Suspense>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

let container: any = null;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
document.addEventListener('DOMContentLoaded', function (_) {
  if (!container) {
    container = document.getElementById('root') as HTMLElement;
    const root = ReactDOM.createRoot(container);
    root.render(<App />);
  }
});
