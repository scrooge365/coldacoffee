const fontFamily = '"Calibri", "Arial", sans-serif';
const htmlFontSize = 10;
const fontSize = 10;
const fontWeightLight = 300;
const fontWeightRegular = 400;
const fontWeightMedium = 600;
const fontWeightBold = 700;

function spacing(a, b, c, d) {
  if (b !== undefined && c !== undefined && d !== undefined) return `${a * 8}px ${b * 8}px ${c * 8}px ${d * 8}px`;
  if (b !== undefined) return `${a * 8}px ${b * 8}px`;
  return `${a * 8}px`;
}

const theme = {
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      lg: '1280px',
      md: '960px',
      sm: '600px',
      xl: '1920px',
      xs: '0px',
    },
  },
  palette: {
    background: '#FFFFFF !important',
    common: {
      black: '#000',
      white: '#fff',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    error: {
      dark: '#d32f2f',
      light: '#e57373',
      main: '#f44336',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
    header: {
      background: 'rgba(255,255,255,.9)',
      textHeadline: 'rgba(255,255,255,1)',
      textPrimary: 'rgba(255,255,255,0.8)',
      navigation: 'rgba(53,26,17, .9)',
    },
    primary: {
      dark: '#a94e02',
      main: '#DB6503',
    },
    secondary: {
      dark: '#1b0d09',
      main: '#351A11',
    },
    success: {
      dark: '#388e3c',
      light: '#81c784',
      main: '#4caf50',
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
      secondary: 'rgba(0,0,0,0.54)',
    },
    warning: {
      dark: '#f57c00',
      light: '#ffb74d',
      main: '#ff9800',
    },
  },
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
    '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
  ],
  spacing,
  typography: {
    caption: {
      fontSize: 14,
      color: 'rgba(0,0,0,.54)',
    },
    body1: {
      '@media(min-width: 600px)': { fontSize: 18, lineHeight: '24px' },
      // '@media(min-width: 960px)': { fontSize: 18, lineHeight: '45px' },
      color: 'rgba(0,0,0,.87)',
      fontSize: 16,
      letterSpacing: 0.3,
      lineHeight: '18px',
    },
    body2: {
      color: 'rgba(0,0,0,.54)',
      fontSize: '14px',
      letterSpacing: 0.6,
      lineHeight: '14px',
      textAlign: 'justify',
    },
    fontFamily,
    fontSize,
    fontWeightBold,
    fontWeightLight,
    fontWeightMedium,
    fontWeightRegular,
    h1: {
      '@media(min-width: 600px)': { fontSize: 28, lineHeight: '40px' },
      '@media(min-width: 960px)': { fontSize: 32, lineHeight: '45px' },
      fontSize: 18,
      letterSpacing: '.3px',
      lineHeight: '24px',
      textAlign: 'center',
    },
    h2: {
      '@media(min-width: 600px)': { fontSize: 22, lineHeight: '26px' },
      '@media(min-width: 960px)': { fontSize: 26, lineHeight: '30px' },
      fontSize: 18,
      letterSpacing: '.3px',
      lineHeight: '24px',
      textAlign: 'center',
      textTransform: 'uppercase',
    },
    h3: {
      fontSize: 18,
      color: 'rgba(0,0,0,.87)',
      letterSpacing: '.3',
      lineHeight: '22px',
    },
    htmlFontSize,
  },
};

export default theme;
