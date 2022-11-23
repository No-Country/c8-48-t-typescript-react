import './index.css';

import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
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

const container: any = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

// render(<App />, document.getElementById('root'));
