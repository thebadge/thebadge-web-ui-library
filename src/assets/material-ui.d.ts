// We need to import all the types that we want to do Module Augmentation
// https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
import '@mui/material/styles/createPalette'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Palette, PaletteOptions, TypeText } from '@mui/material'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ChatBubbleType } from '@mui/material/styles/createPalette'

declare module '@mui/material/styles/createPalette' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Palette {}

  // allow configuration using `createTheme`
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface PaletteOptions {}
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title1: true
    title2: true
    title3: true
    title4: true
    title5: true
    body3: true
    body4: true
  }
}

declare module '@mui/material/styles/createTypography' {
  // allow configuration using `createTheme`
  export interface TypographyOptions {
    title1: TypographyStyleOptions
    title2: TypographyStyleOptions
    title3: TypographyStyleOptions
    title4: TypographyStyleOptions
    title5: TypographyStyleOptions
    body3: TypographyStyleOptions
    body4: TypographyStyleOptions
  }
}

declare module '@mui/material/styles' {
  // Allow to use it in useMediaQuery
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface BreakpointOverrides {
    //  mobile: true
    //  tablet: true
    //  laptop: true
    //  desktop: true
  }
}
