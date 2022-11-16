import { createTheme } from '@mui/material/styles';
import palette from '@src/constants/mui/default-palette';

// TODO: figure out defaults for: font family, font size
// TODO: extract out common items with dark theme

export const theme = createTheme({
  palette: palette,
  typography: {
    fontFamily: ['Mulish', 'sans-serif'].join(','),
    fontSize: 15,
    appLayoutTitle: {
      fontSize: '28px',
      fontWeight: 'bold',
      display: 'block',
    },
    appLayoutSubtitle: {
      fontSize: '16px',
      fontWeight: 'normal',
      display: 'block',
    },
    fetchError: {
      fontSize: '1.15rem',
      textAlign: 'center',
      padding: 4,
    },
    tagMultioption: {
      fontSize: '14px',
      fontWeight: 'bold',
    },
    namesTextTable: {
      fontSize: '15px',
      fontWeight: 'bold',
    },
    lightsTextTable: {
      fontSize: '15px',
      fontWeight: 'regular',
    },
    statusTextTable: {
      fontSize: '15px',
      fontWeight: 'bold',
    },
    progressTextTable: {
      fontSize: '15px',
      fontWeight: 'bold',
    },
    columnTitleTable: {
      fontSize: '14px',
      fontWeight: 'SemiBold',
    },
    actionsTable: {
      fontSize: '14px',
      fontWeight: '700',
    },
    // TODO: Set default font sizes for typography variants
    // h1: {
    //   fontSize: 40,
    //   fontWeight: 'bold',
    // },
    // h2: {
    //   fontSize: 28,
    //   fontWeight: 'bold',
    // },
    // h3: {
    //   fontSize: 18,
    //   fontWeight: 'bold',
    // },
    // h4: {
    //   fontSize: 16,
    //   fontWeight: 'bold',
    // },
    // h6: {
    //   fontSize: 14,
    //   fontWeight: 'bold',
    // },
    body1: {
      fontSize: 16,
      color: palette.text.primary,
    },
    body2: {
      fontSize: 15,
      color: palette.text.primary,
    },
    body3: {
      // Custom variant
      fontSize: 15,
      color: palette.text.secondary,
    },
    button: {
      fontSize: 15,
    },
    noResultsIcon: {
      fontSize: '64px',
      display: 'flex',
    },
    noResultsMessage: {
      fontSize: '22px',
      fontWeight: 'Bold',
      display: 'block',
    },
    noResultsDescription: {
      fontSize: '14px',
      fontWeight: 'regular',
      display: 'block',
    },
    filterHeader: {
      fontSize: 14,
      fontWeight: 600,
    },
  },
  spacing: 8, // spacing of the theme 8px
  shape: {
    borderRadius: 6,
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        thumb: {
          color: '#fff',
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          top: '6px',
          right: '6px',
          height: '24px',
          minWidth: '24px',
          borderRadius: '20px',
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          '&.Mui-expanded': {
            minHeight: '48px',
          },
        },
        content: {
          '&.Mui-expanded': {
            margin: 0,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: {
          gap: '4px',
          padding: '4px',
        },
        input: {
          height: 32,
          padding: '0 0 0 4px !important',
        },
        listbox: {
          padding: 0,
        },
        option: {
          fontSize: 14,
          fontWeight: 700,
          whiteSpace: 'nowrap',
        },
        paper: {
          marginTop: 6,
          marginBottom: 6,
        },
        tag: {
          margin: 0,
          backgroundColor: palette.accent.selected,
          '&:hover': {
            backgroundColor: palette.accent.selected,
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          textTransform: 'none',
          padding: '12px',
        },
        sizeSmall: {
          fontSize: '14px',
          height: '40px',
        },
        sizeMedium: {
          fontSize: '15px',
          height: '48px',
        },
        startIcon: {
          '&>svg': {
            fontSize: '20px',
          },
        },
      },
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            border: 'solid 1px',
            borderColor: palette.divider,
            backgroundColor: palette.background.paper,
            '&:hover': {
              backgroundColor: palette.background.paper,
            },
            '&:disabled': {
              borderColor: palette.secondary.main,
              color: palette.divider,
            },
            '&.active': {
              backgroundColor: palette.accent.selected,
              borderColor: palette.primary.main,
            },
          },
        },
      ],
    },
    MuiButtonGroup: {
      styleOverrides: {
        grouped: {
          ':not(:last-of-type)': {
            borderRight: 'solid 1px',
            borderColor: palette.secondary.main,
            padding: '0 24px',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          padding: 6,
          height: 32,
          fontWeight: 700,
        },
        icon: {
          color: 'inherit',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: '18px',
        },
        paperFullScreen: {
          maxHeight: '100vh',
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          cursor: 'pointer',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: palette.background.paper,
          borderColor: palette.divider,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRadius: 0,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: 12,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        arrow: {
          color: palette.primary.main,
        },
        tooltip: {
          backgroundColor: palette.primary.main,
          maxWidth: 'none',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          margin: '4px 12px 0',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: palette.background.paper,
          boxShadow: `
            0px 4px 8px rgba(0, 0, 0, 0.04),
            0px 0px 2px rgba(0, 0, 0, 0.06),
            0px 0px 1px rgba(0, 0, 0, 0.04)`,
          minHeight: '40px',
          padding: '8px 12px',
        },
        multiline: {
          height: 'auto',
        },
        input: {
          fontSize: '14px',
          padding: 0,
          '::placeholder': {
            color: palette.text.secondary,
            opacity: 1,
          },
        },
      },
    },
    MuiSkeleton: {
      defaultProps: {
        animation: 'wave',
      },
    },
  },
});
