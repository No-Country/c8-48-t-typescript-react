import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#deddde',
      light: 'hsla(0,0%,100%,.7)',
    },
    secondary: {
      main: '#858685',
    },
    text: {
      primary: '#deddde',
      secondary: '#7575b4',
    },
    background: {
      default: '#080806',
      paper: '#0d0d64',
    },
    divider: '#252521',
    accent: {
      selected: 'hsla(0,0%,100%,.13)', // blue selected
    },
  },
  typography: {
    fontFamily: ['Mulish', 'sans-serif'].join(','),
    fontSize: 15,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '6px',
          fontSize: 15,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: 16,
        },
      },
    },
  },
});
