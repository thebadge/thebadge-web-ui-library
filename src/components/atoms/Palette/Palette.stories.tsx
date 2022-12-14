import { Box } from '@mui/material'
import { Meta, Story } from '@storybook/react'
import React from 'react'

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

const Template: Story = () => <Box />

export const Default = Template
