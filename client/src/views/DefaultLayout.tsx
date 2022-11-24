import React, { Suspense, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import CenteredSpinner from '../components/CenteredSpinner';
import AdbIcon from '@mui/icons-material/Adb';
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
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  InputBase,
  styled,
  alpha,
  Link,
} from '@mui/material';

const pages = ['Iniciar Sesión', 'Registrate', 'Becas', 'Planes', 'Ayuda'];

export default function Layout(props: any) {
  const navigate = useNavigate();
  // pages
  const pages = ['BECAS', 'PLANES', 'AYUDA'];
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
  const handleCloseSignup = (route: string) => {
    setSignupEl(null);
    route === 'university' ? navigate('/sign-up/university') : navigate('/sign-up/athlete');
  };

  // Login button

  return (
    <Box>
      <CssBaseline />
      <AppBar
        position="static"
        sx={{ color: 'text.primary', backgroundColor: 'primary', px: 10, py: 1 }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo Becco */}
            <RocketLaunchIcon
              sx={{
                display: { xs: 'none', md: 'flex', color: '#6543FF' },
                mr: 1,
                fontSize: 30,
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
                color: '#FFFFFF',
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
                color: '#6543FF',
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
                color: '#ffffff',
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
                color="secondary"
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
                {pages.map((page) => (
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
                  gap: 3,
                }}
              >
                {pages.map((page) => {
                  return (
                    <Link color="secondary" sx={linkStyle}>
                      {page}
                    </Link>
                  );
                })}
              </Box>

              <Button sx={{ letterSpacing: '0.46px', fontSize: 13 }} color="secondary" size="small">
                INICIAR SESIÓN
              </Button>
              <Button
                color="secondary"
                sx={{
                  letterSpacing: '0.46px',
                  fontSize: 13,
                  border: '1px solid #fff',
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
                <MenuItem onClick={() => handleCloseSignup('athlete')}>Deportista</MenuItem>
                <MenuItem onClick={() => handleCloseSignup('uni')}>Universidad</MenuItem>
              </Menu>
            </Box>
            {/* Close right side */}
          </Toolbar>
        </Container>
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

// Styles:
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.6),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.8),
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
  color: '#000000',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));

const linkStyle = { fontSize: 13, letterSpacing: '0.46px' };
