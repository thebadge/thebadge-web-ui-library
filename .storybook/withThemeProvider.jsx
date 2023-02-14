import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material'
import { ThemeProvider as SBThemeProvider } from '@storybook/theming'
import React from 'react'
import { defaultTheme, getTypographyVariants } from '../src/assets/defaultTheme'

export const withThemeProvider = (Story, context) => {
  const variants = getTypographyVariants(defaultTheme)
  const theme = responsiveFontSizes(createTheme(defaultTheme), {
    disableAlign: true,
    factor: 1.4,
    variants,
  })
  return (
    <ThemeProvider theme={theme}>
      <SBThemeProvider theme={theme}>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900&display=swap"
        />
        <CssBaseline />
        <Story {...context} />
      </SBThemeProvider>
    </ThemeProvider>
  )
}
