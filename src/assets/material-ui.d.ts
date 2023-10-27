// We need to import all the types that we want to do Module Augmentation
// https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
import '@mui/material/styles/createPalette'

export interface TheBadgeColors {
  blue: true
  purple: true
  green: true
  pink: true
  white: true
  deepPurple: true
  darkGreen: true
  darkBlue: true
}

declare module '@mui/material' {
  export interface ButtonPropsColorOverrides extends TheBadgeColors {}
  export interface AlertPropsColorOverrides extends TheBadgeColors {}
  export interface AppBarPropsColorOverrides extends TheBadgeColors {}
  export interface PaginationItemPropsColorOverrides extends TheBadgeColors {}
  export interface BadgePropsColorOverrides extends TheBadgeColors {}
  export interface ButtonGroupPropsColorOverrides extends TheBadgeColors {}
  export interface CardPropsColorOverrides extends TheBadgeColors {}
  export interface CheckboxPropsColorOverrides extends TheBadgeColors {}
  export interface ChipPropsColorOverrides extends TheBadgeColors {}
  export interface CircularProgressPropsColorOverrides extends TheBadgeColors {}
  export interface FabPropsColorOverrides extends TheBadgeColors {}
  export interface FormLabelPropsColorOverrides extends TheBadgeColors {}
  export interface IconPropsColorOverrides extends TheBadgeColors {}
  export interface IconButtonPropsColorOverrides extends TheBadgeColors {}
  export interface InputBasePropsColorOverrides extends TheBadgeColors {}
  export interface LinearProgressPropsColorOverrides extends TheBadgeColors {}
  export interface PaginationPropsColorOverrides extends TheBadgeColors {}
  export interface RadioPropsColorOverrides extends TheBadgeColors {}
  export interface SliderPropsColorOverrides extends TheBadgeColors {}
  export interface SvgIconPropsColorOverrides extends TheBadgeColors {}
  export interface SwitchPropsColorOverrides extends TheBadgeColors {}
  export interface TextFieldPropsColorOverrides extends TheBadgeColors {}
  export interface ToggleButtonPropsColorOverrides extends TheBadgeColors {}
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
    dAppHeadline1: true
    dAppHeadline2: true
    dAppTitle1: true
    dAppTitle2: true
    dAppTitle3: true
    dAppTitle4: true
    dAppTitle5: true
    dAppBody1: true
    dAppBody3: true
    dAppBody4: true
    dAppNumber: true
    dAppDaysHours: true
    dAppButton: true

    /** New fonts types **/
    displayLarge: true
    displayMedium: true
    displaySmall: true
    headlineLarge: true
    headlineMedium: true
    headlineSmall: true
    titleLarge: true
    titleMedium: true
    titleSmall: true
    labelLarge: true
    labelMedium: true
    labelSmall: true
    bodyLarge: true
    bodyMedium: true
    bodySmall: true
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
    dAppHeadline1: TypographyStyleOptions
    dAppHeadline2: TypographyStyleOptions
    dAppTitle1: TypographyStyleOptions
    dAppTitle2: TypographyStyleOptions
    dAppTitle3: TypographyStyleOptions
    dAppTitle4: TypographyStyleOptions
    dAppTitle5: TypographyStyleOptions
    dAppBody1: TypographyStyleOptions
    dAppBody3: TypographyStyleOptions
    dAppBody4: TypographyStyleOptions
    dAppNumber: TypographyStyleOptions
    dAppDaysHours: TypographyStyleOptions
    dAppButton: TypographyStyleOptions

    /** New fonts types **/
    displayLarge: TypographyStyleOptions
    displayMedium: TypographyStyleOptions
    displaySmall: TypographyStyleOptions
    headlineLarge: TypographyStyleOptions
    headlineMedium: TypographyStyleOptions
    headlineSmall: TypographyStyleOptions
    titleLarge: TypographyStyleOptions
    titleMedium: TypographyStyleOptions
    titleSmall: TypographyStyleOptions
    labelLarge: TypographyStyleOptions
    labelMedium: TypographyStyleOptions
    labelSmall: TypographyStyleOptions
    bodyLarge: TypographyStyleOptions
    bodyMedium: TypographyStyleOptions
    bodySmall: TypographyStyleOptions
  }
}

declare module '@mui/material/styles' {
  export interface Palette {
    blue: Palette
    purple: Palette
    green: Palette
    darkGreen: Palette
    pink: Palette
    white: Palette
    deepPurple: Palette
    darkBlue: Palette
    backgroundGradient: Palette
  }

  // allow configuration using `createTheme`
  export interface PaletteOptions {
    blue: PaletteColorOptions
    purple: PaletteColorOptions
    green: PaletteColorOptions
    darkGreen: PaletteColorOptions
    pink: PaletteColorOptions
    white: PaletteColorOptions
    deepPurple: PaletteColorOptions
    darkBlue: PaletteColorOptions
    backgroundGradient: PaletteColorOptions
  }

  // Allow to use it in useMediaQuery
  export interface BreakpointOverrides {
    //  mobile: true
    //  tablet: true
    //  laptop: true
    //  desktop: true
  }
}
