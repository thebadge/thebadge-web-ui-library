import { ThemeOptions } from '@mui/material'
import breakpoints from '@assets/scss/variables/_breakpoint.variables.module.scss'
import colors from '@assets/scss/variables/_color.variables.module.scss'
import { gradients } from '../index'
import { genericColors, typography } from '@assets/defaultTheme'

export const darkTheme: ThemeOptions = {
  typography,
  breakpoints: {
    values: {
      xs: 0,
      sm: Number(breakpoints.s),
      md: Number(breakpoints.m),
      lg: Number(breakpoints.l),
      xl: Number(breakpoints.xl),
    },
  },
  palette: {
    mode: 'dark',
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
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255,255,255,0.6)',
      disabled: 'rgba(255,255,255,0.38)',
    },
    background: {
      default: '#000000',
    },
    ...genericColors,
    backgroundGradient: {
      main: gradients.gradientBackgroundDark,
      light: gradients.gradientBackgroundLight,
      dark: gradients.gradientBackgroundDark,
    },
  },
}
