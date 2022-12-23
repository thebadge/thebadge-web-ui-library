import breakpoints from '@assets/scss/variables/_breakpoint.variables.module.scss'
import colors from '@assets/scss/variables/_color.variables.module.scss'
import fonts from '@assets/scss/variables/_fonts.variables.module.scss'
import { createTheme, Palette, ThemeOptions } from '@mui/material'
import { TypographyOptions } from '@mui/material/styles/createTypography'

const typography: TypographyOptions | ((palette: Palette) => TypographyOptions) = {
  fontFamily: fonts.fontTheBadgeWeb,
  h1: {
    fontSize: `${fonts.fontSizeH1}`,
    fontStyle: 'normal',
    fontWeight: fonts.fontWeightBold,
    lineHeight: `${fonts.lineHeightH1}`,
    letterSpacing: '-1.5px',
  },
  h2: {
    fontSize: `${fonts.fontSizeH2}`,
    fontStyle: 'normal',
    fontWeight: fonts.fontWeightExtraBold,
    lineHeight: `${fonts.lineHeightH2}`,
  },
  h3: {
    fontSize: `${fonts.fontSizeH3}`,
    fontWeight: fonts.fontWeightLarge,
    lineHeight: `${fonts.lineHeightH3}`,
    letterSpacing: '0.15px',
  },
  h4: {
    fontSize: `${fonts.fontSizeH4}`,
    fontWeight: fonts.fontWeightLarge,
    lineHeight: `${fonts.lineHeightH4}`,
  },
  h5: {
    fontSize: `${fonts.fontSizeH5}`,
    lineHeight: `${fonts.lineHeightH5}`,
  },
  h6: {
    fontSize: `${fonts.fontSizeH6}`,
    fontWeight: fonts.fontWeightNormal,
    lineHeight: `${fonts.lineHeightH6}`,
  },
  title1: {
    fontSize: `${fonts.fontSizeTitle1}`,
    fontStyle: 'normal',
    fontWeight: fonts.fontWeightExtraBold,
    lineHeight: `${fonts.lineHeightTitle1}`,
  },
  title2: {
    fontSize: `${fonts.fontSizeTitle2}`,
    fontStyle: 'normal',
    fontWeight: fonts.fontWeightExtraBold,
    lineHeight: `${fonts.lineHeightTitle2}`,
  },
  title3: {
    fontSize: `${fonts.fontSizeTitle3}`,
    fontStyle: 'normal',
    fontWeight: fonts.fontWeightBold,
    lineHeight: `${fonts.lineHeightTitle3}`,
  },
  title4: {
    fontSize: `${fonts.fontSizeTitle4}`,
    fontStyle: 'normal',
    fontWeight: fonts.fontWeightExtraBold,
    lineHeight: `${fonts.lineHeightTitle4}`,
  },
  title5: {
    fontSize: `${fonts.fontSizeTitle5}`,
    fontStyle: 'normal',
    fontWeight: fonts.fontWeightExtraBold,
    lineHeight: `${fonts.lineHeightTitle5}`,
  },
  subtitle1: {
    fontSize: `${fonts.fontSizeSubtitle1}`,
    fontStyle: 'normal',
    fontWeight: fonts.fontWeightNormal,
    lineHeight: `${fonts.lineHeightSubtitle1}`,
  },
  subtitle2: {
    fontSize: `${fonts.fontSizeSubtitle2}`,
    fontWeight: fonts.fontWeightLarge,
    lineHeight: `${fonts.lineHeightSubtitle2}`,
  },
  body1: {
    fontSize: `${fonts.fontSizeBody1}`,
    fontStyle: 'normal',
    fontWeight: fonts.fontWeightLarge,
    lineHeight: `${fonts.lineHeightBody1}`,
  },
  body2: {
    fontSize: `${fonts.fontSizeBody2}`,
    fontStyle: 'normal',
    fontWeight: fonts.fontWeightNormal,
    lineHeight: `${fonts.lineHeightBody2}`,
  },
  body3: {
    fontSize: `${fonts.fontSizeBody2}`,
    fontStyle: 'normal',
    fontWeight: fonts.fontWeightExtraLarge,
    lineHeight: `${fonts.lineHeightBody2}`,
  },
  body4: {
    fontSize: `${fonts.fontSizeBody2}`,
    fontStyle: 'normal',
    fontWeight: fonts.fontWeightNormal,
    lineHeight: `${fonts.lineHeightBody2}`,
  },
  button: {
    fontSize: `${fonts.fontSizeButton}`,
    fontWeight: fonts.fontWeightLarge,
    lineHeight: `${fonts.lineHeightButton}`,
    letterSpacing: '0.01em',
  },
  caption: {
    fontSize: `${fonts.fontSizeCaption}`,
    lineHeight: `${fonts.lineHeightCaption}`,
  },
  overline: {
    fontSize: `${fonts.fontSizeOverline}`,
    lineHeight: `${fonts.lineHeightOverline}`,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  },
}

// Workaourd to have augmentColor fn
const { palette } = createTheme()
const { augmentColor } = palette

export const defaultTheme: ThemeOptions = {
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
    blue: augmentColor({
      color: {
        main: colors.blue,
        dark: colors.blueDark,
        light: colors.blueLight,
        contrastText: colors.white,
      },
    }),
    darkBlue: augmentColor({
      color: {
        main: colors.darkBlue,
        contrastText: colors.white,
      },
    }),
    // this will tell MUI to calculate the main, dark, light and contrastText variants based on the given main
    purple: augmentColor({
      color: {
        main: colors.purple,
        contrastText: colors.white,
      },
    }),
    green: augmentColor({
      color: {
        main: colors.green,
        light: colors.greenLight,
        dark: colors.greenDark,
        contrastText: colors.white,
      },
    }),
    darkGreen: augmentColor({
      color: {
        main: colors.darkGreen,
        contrastText: colors.white,
      },
    }),
    pink: augmentColor({
      color: {
        main: colors.pink,
        light: colors.pinkLight,
        dark: colors.pinkDark,
        contrastText: colors.white,
      },
    }),
    white: augmentColor({
      color: {
        main: colors.white,
      },
    }),
    deepPurple: augmentColor({
      color: {
        main: colors.deepPurple,
        contrastText: colors.white,
      },
    }),
  },
}

export type TBColor = keyof typeof colors
