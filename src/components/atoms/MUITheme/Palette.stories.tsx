import { Box, Grid, Typography, useTheme } from '@mui/material'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import { MUIColors } from './types'

export default {
  title: 'Components/Theming/Palette',
  component: Box,
  parameters: {
    docs: {
      description: {
        component: 'A catalog with the theme palette colors',
      },
    },
  },
} as Meta

const Template: Story = () => {
  const theme = useTheme()
  // Its needs to be any to be able to acces the values with the [key] notation.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const palette = theme.palette as any
  console.log(palette)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} p={2}>
        {MUIColors.map((colorKey) => {
          if (!palette[colorKey]) return null
          return (
            <Grid item key={colorKey} flexDirection="row" display="grid" rowGap={2} sm={3}>
              <Typography variant="title1" component="h3">
                {colorKey}
              </Typography>
              <Box flexDirection={'row'}>
                <Box
                  sx={{
                    borderRadius: 1,
                    height: 32,
                    width: 32,
                    backgroundColor: palette[colorKey].main,
                  }}
                />
                <Typography variant="subtitle2" component="h5">
                  {`palette.${colorKey}.main`}
                </Typography>
                <Typography variant="caption" component="h5">
                  {palette[colorKey].main}
                </Typography>
              </Box>
              <Box>
                <Box
                  sx={{
                    borderRadius: 1,
                    height: 32,
                    width: 32,
                    backgroundColor: palette[colorKey].light,
                  }}
                />
                <Typography variant="subtitle2" component="h5">
                  {`palette.${colorKey}.light`}
                </Typography>
                <Typography variant="caption" component="h5">
                  {palette[colorKey].light}
                </Typography>
              </Box>
              <Box>
                <Box
                  sx={{
                    borderRadius: 1,
                    height: 32,
                    width: 32,
                    backgroundColor: palette[colorKey].dark,
                  }}
                />
                <Typography variant="subtitle2" component="h5">
                  {`palette.${colorKey}.dark`}
                </Typography>
                <Typography variant="caption" component="h5">
                  {palette[colorKey].dark}
                </Typography>
              </Box>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export const Default = Template
