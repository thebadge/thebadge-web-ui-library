import { TypographyOptions } from '@mui/material/styles/createTypography'
import { Palette, ThemeOptions } from '@mui/material'
import breakpoints from '@assets/scss/variables/_breakpoint.variables.module.scss'
import fonts from '@assets/scss/variables/_fonts.variables.module.scss'
import colors from '@assets/scss/variables/_color.variables.module.scss'

const typography: TypographyOptions | ((palette: Palette) => TypographyOptions) = {
  fontFamily: fonts.fontTheBadgeWeb,
  h1: {
    fontSize: fonts.fontSizeH1,
    fontStyle: 'normal',
    fontWeight: fonts.fontWeightNormal,
    lineHeight: `${fonts.lineHeightH1}`,
    letterSpacing: '-1.5px',
  },
  h2: {
    fontSize: fonts.fontSizeH2,
    fontStyle: 'normal',
    fontWeight: fonts.fontWeightNormal,
    lineHeight: `${fonts.lineHeightH2}`,
  },
  h3: {
    fontSize: fonts.fontSizeH3,
    fontWeight: fonts.fontWeightLarge,
    lineHeight: `${fonts.lineHeightH3}`,
    letterSpacing: '0.15px',
  },
  h4: {
    fontSize: fonts.fontSizeH4,
    fontWeight: fonts.fontWeightLarge,
    lineHeight: `${fonts.lineHeightH4}`,
  },
  h5: {
    fontSize: fonts.fontSizeH5,
    lineHeight: `${fonts.lineHeightH5}`,
  },
  h6: {
    fontSize: fonts.fontSizeH6,
    fontWeight: fonts.fontWeightNormal,
    lineHeight: `${fonts.lineHeightH6}`,
  },
  subtitle1: {
    fontSize: fonts.fontSizeSubtitle1,
    fontStyle: 'normal',
    fontWeight: fonts.fontWeightNormal,
    lineHeight: `${fonts.lineHeightSubtitle1}`,
  },
  subtitle2: {
    fontSize: fonts.fontSizeSubtitle2,
    fontWeight: fonts.fontWeightLarge,
    lineHeight: `${fonts.lineHeightSubtitle2}`,
  },
  body1: {
    fontSize: fonts.fontSizeBody1,
    lineHeight: `${fonts.lineHeightBody1}`,
  },
  body2: {
    fontSize: fonts.fontSizeBody2,
    lineHeight: `${fonts.lineHeightBody2}`,
  },
  button: {
    fontSize: fonts.fontSizeButton,
    fontWeight: fonts.fontWeightLarge,
    lineHeight: `${fonts.lineHeightButton}`,
    letterSpacing: '0.01em',
  },
  caption: {
    fontSize: fonts.fontSizeCaption,
    lineHeight: `${fonts.lineHeightCaption}`,
  },
  overline: {
    fontSize: fonts.fontSizeOverline,
    lineHeight: `${fonts.lineHeightOverline}`,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  },
}

export const defaultTheme: ThemeOptions = {
  typography,
  breakpoints: {
    values: {
      xs: 0,
      sm: breakpoints.s,
      md: breakpoints.m,
      lg: breakpoints.l,
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
