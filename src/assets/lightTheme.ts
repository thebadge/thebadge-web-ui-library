import { ThemeOptions } from '@mui/material'
import breakpoints from '@assets/scss/variables/_breakpoint.variables.module.scss'
import colors from '@assets/scss/variables/_color.variables.module.scss'
import { gradients } from '../index'
import { genericColors, typography } from '@assets/defaultTheme'

export const lightTheme: ThemeOptions = {
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
    mode: 'light',
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
      primary: '#000000',
      secondary: 'rgba(0,0,0,0.6)',
      disabled: 'rgba(0,0,0,0.38)',
    },
    background: {
      default: '#F4F4F4',
    },
    ...genericColors,
    backgroundGradient: {
      main: gradients.gradientBackgroundLight,
      light: gradients.gradientBackgroundLight,
      dark: gradients.gradientBackgroundDark,
    },
  },
}
