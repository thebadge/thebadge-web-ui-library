import { Checkbox, CircularProgress, CircularProgressProps, LinearProgress, LinearProgressProps } from '@mui/material'
import { Story } from '@storybook/react'
import { Meta } from '@storybook/react/types-6-0'
import React from 'react'
import { MUISize, MUIColors } from './types'

export default {
  title: 'Components/Theming/MUICheckbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          'A catalog with MUI Progress bar examples. You can see more on: https://mui.com/material-ui/react-progress',
      },
    },
  },
  argTypes: {
    color: {
      options: MUIColors,
      control: {
        type: 'select',
      },
    },
  },
} as Meta

// Create a master template for mapping args to render the Button component
const CircularTemplate: Story<CircularProgressProps> = (args) => <CircularProgress {...args} />
const LinearTemplate: Story<LinearProgressProps> = (args) => <LinearProgress {...args} />

// Reuse that template for creating different stories
export const CircularProgressMUI = CircularTemplate.bind({})
CircularProgressMUI.args = { color: 'blue' }

export const LinearProgressMUI = LinearTemplate.bind({})
LinearProgressMUI.args = { color: 'blue' }
