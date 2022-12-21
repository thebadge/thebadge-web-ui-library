import { Box, Button, ButtonProps } from '@mui/material'
import { Story } from '@storybook/react'
import { Meta } from '@storybook/react/types-6-0'
import React from 'react'
import { MUISize, MUIButtonVariants, MUIColors } from './types'

export default {
  title: 'Components/Theming/MUIButton',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'A catalog with MUIButton examples. You can see more on: https://mui.com/material-ui/react-button/',
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
    variant: {
      options: MUIButtonVariants,
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

type ButtonPropsWithLabel = ButtonProps & { label: string }
// Create a master template for mapping args to render the Button component
const Template: Story<ButtonPropsWithLabel> = ({ label, ...args }) => <Button {...args}> {label} </Button>

const ThreeVariantsTemplate: Story<ButtonProps> = (args) => (
  <div
    style={{
      background: '#00000033',
      padding: '32px',
      display: 'flex',
      justifyContent: 'center',
      height: '80vh',
    }}
  >
    <Box display="flex" justifyContent="space-evenly" height="fit-content" width="80%">
      <Button variant="text" {...args}>
        Text
      </Button>
      <Button variant="contained" {...args}>
        Contained
      </Button>
      <Button variant="outlined" {...args}>
        Outlined
      </Button>
    </Box>
  </div>
)

// Reuse that template for creating different stories
export const SampleMUIButton = Template.bind({})
SampleMUIButton.args = { label: 'Text for button', color: 'blue', variant: 'text' }

export const SampleMUIButtonDisabled = Template.bind({})
SampleMUIButtonDisabled.args = { label: 'Sample text', disabled: true, color: 'blue', variant: 'text' }

export const SampleThreeVariantsMUIButton = ThreeVariantsTemplate.bind({})
SampleThreeVariantsMUIButton.args = { color: 'darkGreen' }
