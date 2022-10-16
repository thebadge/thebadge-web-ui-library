import { TypographyOptions } from '@mui/material/styles/createTypography'
import { Palette, ThemeOptions } from '@mui/material'
import breakpoints from '@assets/scss/variables/_breakpoint.variables.module.scss'
import fonts from '@assets/scss/variables/_fonts.variables.module.scss'
import colors from '@assets/scss/variables/_color.variables.module.scss'

const typography: TypographyOptions | ((palette: Palette) => TypographyOptions) = {
  fontFamily: fonts.fontTheBadgeWeb,
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
      sm: breakpoints.sm,
      md: breakpoints.md,
      lg: breakpoints.lg,
      xl: breakpoints.xl,
    },
  },
  palette: {
    primary: {
      main: colors.primary,
      light: colors.primaryLight,
      dark: colors.primaryDark,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.secondary,
      light: colors.secondaryLight,
      dark: colors.secondaryDark,
      contrastText: colors.white,
    },
    error: {
      main: colors.redError,
      contrastText: colors.white,
    },
    warning: {
      main: colors.orangeWarning,
      contrastText: colors.white,
    },
    info: {
      main: colors.blueInfo,
      contrastText: colors.white,
    },
    success: {
      main: colors.greenSuccess,
      contrastText: colors.white,
    },
  },
}
