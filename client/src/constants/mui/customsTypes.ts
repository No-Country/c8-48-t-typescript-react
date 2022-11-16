import { SimplePaletteColorOptions } from '@mui/material';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    neutral: SimplePaletteColorOptions;
    accent: {
      selected: string;
    };
    table: {
      header: string;
      rowEven: string;
      rowOdd: string;
    };
    success2: {
      main: string;
      contrastText: string;
      switchBg: string;
    };
    error2: {
      main: string;
      contrastText: string;
    };
    spectral10: string[];
    ms10: string[];
    campaignStatus: {
      bg: {
        [key: string]: string;
      };
      text: {
        [key: string]: string;
      };
    };
  }
  interface PaletteOptions {
    neutral: SimplePaletteColorOptions;
    accent: {
      selected: string;
    };
    success2: {
      main: string;
      contrastText: string;
      switchBg: string;
    };
    error2: {
      main: string;
      contrastText: string;
    };
  }
  interface PaletteColor {
    tooltip?: string;
    tagBg?: string;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariantsOptions {
    fetchError?: React.CSSProperties;
    appLayoutTitle?: React.CSSProperties;
    appLayoutSubtitle?: React.CSSProperties;
    tagMultioption?: React.CSSProperties;
    lightsTextTable?: React.CSSProperties;
    namesTextTable?: React.CSSProperties;
    statusTextTable?: React.CSSProperties;
    progressTextTable?: React.CSSProperties;
    columnTitleTable?: React.CSSProperties;
    actionsTable?: React.CSSProperties;
    noResultsIcon?: React.CSSProperties;
    noResultsMessage?: React.CSSProperties;
    noResultsDescription?: React.CSSProperties;
    filterHeader?: React.CSSProperties;
    body3?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    fetchError: true;
    appLayoutTitle: true;
    appLayoutSubtitle: true;
    tagMultioption: true;
    lightsTextTable: true;
    namesTextTable: true;
    statusTextTable: true;
    progressTextTable: true;
    columnTitleTable: true;
    actionsTable: true;
    noResultsIcon: true;
    noResultsMessage: true;
    noResultsDescription: true;
    filterHeader: true;
    body3: true;
  }
}
