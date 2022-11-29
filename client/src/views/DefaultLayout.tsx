import React, { Suspense, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import CenteredSpinner from '../components/CenteredSpinner';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SearchIcon from '@mui/icons-material/Search';
import {
  Container,
  CssBaseline,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Menu,
  Button,
  MenuItem,
  InputBase,
  styled,
  alpha,
  Link,
} from '@mui/material';
import { useTheme } from '@mui/material';

export default function Layout(props: any) {
  const theme = useTheme();
  const navigate = useNavigate();
  // pages
  const pages = ['BECAS', 'PLANES', 'AYUDA'];
  const menuResponsivePages = ['Iniciar Sesión', 'Registrarse', 'Becas', 'Planes', 'Ayuda'];
  // Responsive Menu
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Sign-up button
  const [signupEl, setSignupEl] = useState<null | HTMLElement>(null);
  const openSignup = Boolean(signupEl);
  const handleClickSignup = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSignupEl(event.currentTarget);
  };
  const handleCloseSignup = () => {
    setSignupEl(null);
  };
  const handleNavigateSignUp = (route: string) => {
    route === 'university' ? navigate('sign-up/university') : navigate('sign-up/athlete');
  };
  // Login button
  const [loginEl, setLoginEl] = useState<null | HTMLElement>(null);
  const openLogin = Boolean(loginEl);
  const handleClickLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    setLoginEl(event.currentTarget);
  };
  const handleCloseLogin = () => {
    setLoginEl(null);
  };
  const handleNavigateLogin = (route: string) => {
    route === 'university' ? navigate('login/university') : navigate('login/athlete');
  };

  return (
    <Box>
      <CssBaseline />
      <AppBar
        position="static"
        sx={{
          color: 'primary.main',
          backgroundColor: 'primary.contrastText',
          px: { lg: 10, md: 1, sm: 8, xs: 4 },
          py: 1,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo Becco */}
            <RocketLaunchIcon
              sx={{
                display: { xs: 'none', md: 'flex' },
                mr: 1,
                fontSize: 30,
                color: theme.palette.primary.main,
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'primary.main',
                textDecoration: 'none',
                fontSize: 25,
              }}
            >
              Becco
            </Typography>
            {/* Close logo Becco */}

            {/* mobile screen*/}
            <RocketLaunchIcon
              sx={{
                display: { xs: 'flex', md: 'none' },
                mr: 1,
                color: 'primary.main',
              }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'primary.main',
                textDecoration: 'none',
              }}
            >
              Becco
            </Typography>
            {/* Menu */}
            <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="primary"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {menuResponsivePages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* close mobile screen */}

            {/* search bar */}
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Buscar…" inputProps={{ 'aria-label': 'search' }} />
              </Search>
            </Box>
            {/* close search bar */}

            {/* Right side */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                gap: 2,
                justifyContent: 'end',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: { lg: 3, md: 1 },
                }}
              >
                {pages.map((page) => {
                  return (
                    <Link color="primary" sx={linkStyle}>
                      {page}
                    </Link>
                  );
                })}
              </Box>
              {/* Login */}
              <Button
                sx={{ letterSpacing: '0.46px', fontSize: { lg: 13, md: 12 } }}
                color="primary"
                size="small"
                onClick={handleClickLogin}
              >
                INICIAR SESIÓN
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={loginEl}
                open={openLogin}
                onClose={handleCloseLogin}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem color="primary.main" onClick={() => handleNavigateLogin('athlete')}>
                  Deportista
                </MenuItem>
                <MenuItem onClick={() => handleNavigateLogin('university')}>Universidad</MenuItem>
              </Menu>
              {/* Register */}
              <Button
                color="primary"
                sx={{
                  letterSpacing: '0.46px',
                  fontSize: { lg: 13, md: 12 },
                  border: `1px solid ${theme.palette.primary.main}`,
                }}
                onClick={handleClickSignup}
                size="small"
              >
                REGISTRATE
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={signupEl}
                open={openSignup}
                onClose={handleCloseSignup}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={() => handleNavigateSignUp('athlete')}>Deportista</MenuItem>
                <MenuItem onClick={() => handleNavigateSignUp('university')}>Universidad</MenuItem>
              </Menu>
            </Box>
            {/* Close right side */}
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        sx={{
          height: 'calc(100vh - 64px)',
          overflow: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
        }}
      >
        <Suspense fallback={<CenteredSpinner />}>
          <Outlet />
          {props.children}
        </Suspense>
      </Box>
    </Box>
  );
}

// Styles:
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.primary.main,
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30ch',
    },
    [theme.breakpoints.up('lg')]: {
      width: '40ch',
    },
  },
}));

const linkStyle = { fontSize: { lg: 13, md: 12 }, letterSpacing: '0.46px' };
