import colors from '@assets/scss/variables/_color.variables.module.scss'
import fonts from '@assets/scss/variables/_fonts.variables.module.scss'
import { createTheme, Palette, ThemeOptions, Typography } from '@mui/material'
import { TypographyOptions } from '@mui/material/styles/createTypography'

export const typography: TypographyOptions | ((palette: Palette) => TypographyOptions) = {
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
    fontSize: `${fonts.fontSizeBody3}`,
    fontStyle: 'normal',
    fontWeight: fonts.fontWeightExtraLarge,
    lineHeight: `${fonts.lineHeightBody3}`,
  },
  body4: {
    fontSize: `${fonts.fontSizeBody4}`,
    fontStyle: 'normal',
    fontWeight: fonts.fontWeightNormal,
    lineHeight: `${fonts.lineHeightBody4}`,
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
  /** ------------ DApp Font Types ------------ **/
  dAppHeadline1: {
    fontSize: `${fonts.fontSizeDAppHeadline1}`,
    lineHeight: `${fonts.lineHeightDAppHeadline1}`,
    fontWeight: fonts.fontWeightExtraBold,
  },
  dAppHeadline2: {
    fontSize: `${fonts.fontSizeDAppHeadline2}`,
    lineHeight: `${fonts.lineHeightDAppHeadline2}`,
    fontWeight: fonts.fontWeightBold,
  },
  dAppTitle1: {
    fontSize: `${fonts.fontSizeDAppTitle1}`,
    lineHeight: `${fonts.lineHeightDAppTitle1}`,
    fontWeight: fonts.fontWeightBlack,
  },
  dAppTitle2: {
    fontSize: `${fonts.fontSizeDAppTitle2}`,
    lineHeight: `${fonts.lineHeightDAppTitle2}`,
    fontWeight: fonts.fontWeightLarge,
  },
  dAppTitle3: {
    fontSize: `${fonts.fontSizeDAppTitle3}`,
    lineHeight: `${fonts.lineHeightDAppTitle3}`,
    fontWeight: fonts.fontWeightBold,
  },
  dAppTitle4: {
    fontSize: `${fonts.fontSizeDAppTitle4}`,
    lineHeight: `${fonts.lineHeightDAppTitle4}`,
    fontWeight: fonts.fontWeightNormal,
  },
  dAppTitle5: {
    fontSize: `${fonts.fontSizeDAppTitle5}`,
    lineHeight: `${fonts.lineHeightDAppTitle5}`,
    fontWeight: fonts.fontWeightBlack,
  },
  dAppBody1: {
    fontSize: `${fonts.fontSizeDAppBody1}`,
    lineHeight: `${fonts.lineHeightDAppBody1}`,
    fontWeight: fonts.fontWeightLarge,
  },
  dAppBody3: {
    fontSize: `${fonts.fontSizeDAppBody3}`,
    lineHeight: `${fonts.lineHeightDAppBody3}`,
    fontWeight: fonts.fontWeightExtraLarge,
  },
  dAppBody4: {
    fontSize: `${fonts.fontSizeDAppBody4}`,
    lineHeight: `${fonts.lineHeightDAppBody4}`,
    fontWeight: fonts.fontWeightBold,
  },
  dAppNumber: {
    fontSize: `${fonts.fontSizeDAppNumber}`,
    lineHeight: `${fonts.lineHeightDAppNumber}`,
    fontWeight: fonts.fontWeightBlack,
  },
  dAppDaysHours: {
    fontSize: `${fonts.fontSizeDAppDayshours}`,
    lineHeight: `${fonts.lineHeightDAppDayshours}`,
    fontWeight: fonts.fontWeightBlack,
  },
  dAppButton: {
    fontSize: `${fonts.fontSizeDAppButton}`,
    lineHeight: `${fonts.lineHeightDAppButton}`,
    fontWeight: fonts.fontWeightBold,
  },
}

// Workaourd to have augmentColor fn
const { palette } = createTheme()
const { augmentColor } = palette

export const genericColors = {
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
  greenLogo: augmentColor({
    color: {
      main: colors.greenLogo,
      contrastText: colors.blackText,
    },
  }),
}

export type TBColor = keyof typeof colors

export function getTypographyVariants(theme: ThemeOptions) {
  // Take all the variants, to ensure MUI made all of them responsive, including our custom ones
  return Object.keys(theme.typography as TypographyOptions).filter(
    (keyName) => keyName !== 'fontFamily'
  ) as (keyof typeof Typography)[]
}

export function overrideFontFamily(theme: ThemeOptions, fontFamily: string): TypographyOptions {
  const overrideTypography: TypographyOptions = { ...theme.typography } as TypographyOptions
  const variants = getTypographyVariants(theme)
  variants.forEach((variantKey) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    overrideTypography[variantKey].fontFamily = fontFamily
  })

  return overrideTypography
}
