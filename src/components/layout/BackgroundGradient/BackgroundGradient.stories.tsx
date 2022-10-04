import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { BackgroundGradient, BackgroundGradientProps } from './BackgroundGradient'
import gradients from '@assets/scss/variables/_gradient.variables.module.scss'

export default {
  title: 'Components/Layout/BackgroundGradient',
  component: BackgroundGradient,
} as Meta

const Template: Story<BackgroundGradientProps> = (args) => <BackgroundGradient {...args} />

// Reuse that template for creating different stories
export const BackgroundGradient0 = Template.bind({})
BackgroundGradient0.args = { gradient: gradients.gradient0 }

export const BackgroundGradient1 = Template.bind({})
BackgroundGradient1.args = { gradient: gradients.gradient1 }

export const BackgroundGradient2 = Template.bind({})
BackgroundGradient2.args = { gradient: gradients.gradient2 }

export const BackgroundGradient3 = Template.bind({})
BackgroundGradient3.args = { gradient: gradients.gradient3 }

export const BackgroundGradient4 = Template.bind({})
BackgroundGradient4.args = { gradient: gradients.gradient4 }
