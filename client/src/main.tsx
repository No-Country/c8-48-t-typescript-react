import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";
import { Suspense, StrictMode, lazy, useEffect } from "react";

import { theme as darkTheme } from "./constants/mui/dark-theme";
import { theme as defaultTheme } from "./constants/mui/default-theme";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CenteredSpinner from "./components/CenteredSpinner";
import DefaultLayout from "./views/DefaultLayout";

const Router = lazy(() => import("./Router"));

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

render(<App />, document.getElementById("root"));
