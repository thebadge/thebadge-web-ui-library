import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { ThemeProvider as SBThemeProvider } from '@storybook/theming'
import React from 'react'
import { defaultTheme } from '../src/assets/defaultTheme'

export const withThemeProvider = (Story, context) => {
  const theme = createTheme(defaultTheme)
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
