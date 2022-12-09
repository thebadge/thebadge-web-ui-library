import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import { defaultTheme } from '../src/assets/defaultTheme'

export const withThemeProvider = (story, context) => {
  return (
    <ThemeProvider theme={createTheme(defaultTheme)}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900&display=swap"
      />
      <CssBaseline />
      {story()}
    </ThemeProvider>
  )
}
