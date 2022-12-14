import React, { Suspense, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import CenteredSpinner from '../components/CenteredSpinner';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
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
import { useFormik } from 'formik';
import { errorLogin } from '../services/alerts';

const Layout = (props: any) => {
  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: async (values: any) => {
      if (values.search.length > 0) {
        if (!localStorage.getItem('token')) {
          navigate('/');
          errorLogin();
        } else {
          navigate(`/search/` + values.search);
        }
      } else {
        if (!localStorage.getItem('token')) {
          navigate('/');
          errorLogin();
        } else {
          navigate(`/search`);
        }
      }
    },
  });
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
    route === 'university' ? navigate('auth/sign-up/university') : navigate('auth/sign-up/athlete');
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

  const userLogged = () =>
    JSON.parse(
      localStorage.getItem('user')?.length ? (localStorage.getItem('user') as string) : '{}',
    );

  return (
    <Box height="100%" width="100vw">
      <CssBaseline />
      <AppBar
        position="static"
        sx={{
          color: 'primary.main',
          backgroundColor: 'primary.contrastText',
          px: { lg: 10, md: 1, sm: 8, xs: 4 },
          py: 0.5,
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
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  formik.handleSubmit();
                }}
              >
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    value={formik.values['search']}
                    onChange={formik.handleChange}
                    name={'search'}
                    id={'search'}
                    placeholder="Buscar…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
              </form>
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
                {pages.map((page, id) => {
                  return (
                    <Link
                      color="primary"
                      href={page.toLocaleLowerCase()}
                      sx={linkStyle}
                      key={`pages-link-${id}-${Math.random()}`}
                    >
                      {page}
                    </Link>
                  );
                })}
              </Box>
              {userLogged()?.fullName ? (
                <>
                  <IconButton aria-label="notifications">
                    <MarkunreadOutlinedIcon />
                  </IconButton>
                  <IconButton aria-label="profile">
                    <PersonOutlineOutlinedIcon />
                    <Link
                      color="primary"
                      href={
                        userLogged().rol === 'athlete' ? '/athlete-profile' : 'university-profile'
                      }
                      sx={linkStyle}
                    >
                      {userLogged().fullName}
                    </Link>
                  </IconButton>
                  <Button
                    sx={{
                      letterSpacing: '0.46px',
                      fontSize: { lg: 13, md: 12 },
                    }}
                    color="primary"
                    size="small"
                    onClick={() => {
                      localStorage.clear();
                      navigate('/');
                    }}
                  >
                    Cerrar Sesión
                  </Button>
                </>
              ) : (
                <>
                  {/* Login */}
                  <Button
                    sx={{
                      letterSpacing: '0.46px',
                      fontSize: { lg: 13, md: 12 },
                    }}
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
                    <MenuItem>
                      <Link color="primary" href="/auth/login/athlete" sx={linkStyle}>
                        Deportista
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link color="primary" href="/auth/login/university" sx={linkStyle}>
                        Universidad
                      </Link>
                    </MenuItem>
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
                    REGÍSTRATE
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
                    <MenuItem>
                      <Link color="primary" href="/auth/sign-up/athlete" sx={linkStyle}>
                        Deportista
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={() => handleNavigateSignUp('university')}>
                      <Link color="primary" href="/auth/sign-up/university" sx={linkStyle}>
                        Universidad
                      </Link>
                    </MenuItem>
                  </Menu>
                  {/* Close right side */}
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        sx={{
          bgcolor: 'primary.main',
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
};

export default Layout;

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
