import gradients from '@assets/scss/variables/_gradient.variables.module.scss'
import { Box, Typography } from '@mui/material'
import { Story } from '@storybook/react'
import { Meta } from '@storybook/react/types-6-0'
import React from 'react'
import { BoxBorderGradient, BoxBorderGradientProps } from './BoxBorderGradient'

export default {
  title: 'Components/Layout/BoxBorderGradient',
  component: BoxBorderGradient,
} as Meta

const Template: Story<BoxBorderGradientProps> = (args) => (
  <div
    style={{
      background: 'black',
      padding: '32px 0 32px 0',
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
    }}
  >
    <Box height={'50%'} width={'100%'} display="flex">
      <BoxBorderGradient {...args}>
        {/* Some content */}
        <Box display="flex" flex={1} justifyContent="center" alignItems="center">
          <Typography>Some content for this section</Typography>
        </Box>
      </BoxBorderGradient>
    </Box>
  </div>
)
// Reuse that template for creating different stories
export const BoxGradient0 = Template.bind({})
BoxGradient0.args = { gradient: gradients.gradient0, shadowColor: '' }

export const BoxGradient1 = Template.bind({})
BoxGradient1.args = { gradient: gradients.gradient1, shadowColor: '' }

export const BoxGradient2 = Template.bind({})
BoxGradient2.args = { gradient: gradients.gradient2, shadowColor: '' }

export const BoxGradient3 = Template.bind({})
BoxGradient3.args = { gradient: gradients.gradient3, shadowColor: '' }

export const BoxGradient4 = Template.bind({})
BoxGradient4.args = { gradient: gradients.gradient4, shadowColor: '' }

export const BoxGradient5 = Template.bind({})
BoxGradient5.args = { gradient: gradients.gradient5, shadowColor: 'rgba(51, 255, 204, 0.3)' }
