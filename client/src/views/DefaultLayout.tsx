import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import CenteredSpinner from '../components/CenteredSpinner';
import {
  Container,
  CssBaseline,
  Box,
  AppBar,
  Toolbar,
  Typography,
} from '@mui/material';

export default function Layout(props: any) {
  return (
    <Box>
      <CssBaseline />
      <AppBar
        position="static"
        sx={{ color: 'text.primary', backgroundColor: 'background.paper' }}
      >
        <Toolbar>
          {/* <img src={AppLogo} alt="logo-text" width={150} /> */}
        </Toolbar>
      </AppBar>
      <Container
        maxWidth={false}
        sx={{
          height: 'calc(100vh - 64px)',
          overflow: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Suspense fallback={<CenteredSpinner />}>
          <Outlet />
          {props.children}
        </Suspense>
      </Container>
    </Box>
  );
}
