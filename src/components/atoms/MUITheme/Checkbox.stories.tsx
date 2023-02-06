import { Checkbox, CheckboxProps } from '@mui/material'
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
          'A catalog with MUICheckbox examples. You can see more on: https://mui.com/material-ui/react-checkbox/',
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
    size: {
      options: MUISize,
      control: {
        type: 'select',
      },
    },
  },
} as Meta

// Create a master template for mapping args to render the Button component
const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />

// Reuse that template for creating different stories
export const SampleMUIButton = Template.bind({})
SampleMUIButton.args = { color: 'blue' }

export const SampleMUIButtonDisabled = Template.bind({})
SampleMUIButtonDisabled.args = { disabled: true, color: 'blue' }
