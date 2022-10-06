import { TypographyOptions } from '@mui/material/styles/createTypography'
import { Palette, ThemeOptions } from '@mui/material'
import variables from './scss/variables/_breakpoint.variables.module.scss'

const typography: TypographyOptions | ((palette: Palette) => TypographyOptions) = {
  fontFamily: 'Mulish',
  h1: {
    fontSize: 96,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '106px',
    letterSpacing: '-1.5px',
  },
  h2: {
    fontSize: 60,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '78px',
  },
  h3: {
    fontWeight: 500,
    fontSize: 34,
    lineHeight: '120%',
    letterSpacing: '0.15px',
  },
  h4: {
    fontSize: 21,
    fontWeight: 500,
    lineHeight: '120%',
  },
  h5: {
    fontSize: 20,
    lineHeight: '120%',
  },
  h6: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: '21.6px',
  },
  subtitle1: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '24px',
  },
  subtitle2: {
    fontWeight: 500,
    lineHeight: '16px',
    fontSize: 14,
  },
  body1: {
    fontSize: 16,
    lineHeight: '140%',
  },
  body2: {
    fontSize: 14,
    lineHeight: '140%',
  },
  button: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '16px',
    letterSpacing: '0.01em',
  },
  caption: {
    fontSize: 12,
    lineHeight: '14px',
  },
  overline: {
    fontSize: 10,
    lineHeight: '12px',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  },
}

export const defaultTheme: ThemeOptions = {
  typography,
  breakpoints: {
    values: {
      xs: 0,
      sm: variables.sm,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#2D64F1',
      light: '#7491FF',
      dark: '#003BBD',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#252C3C',
      light: '#4e5566',
      dark: '#000016',
      contrastText: '#ffffff',
    },
    error: {
      main: '#ED5956',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ED9829',
      contrastText: '#ffffff',
    },
    info: {
      main: '#0094FF',
    },
    success: {
      main: '#00C083',
      contrastText: '#ffffff',
    },
  },
}
