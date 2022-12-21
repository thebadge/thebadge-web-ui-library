import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { Button, ButtonProps } from './Button'
import badgeBackground from '@assets/svgs/badgeBackground.svg'

export default {
  title: 'Components/Atoms/Button/v1',
  component: Button,
} as Meta

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args} />

// Reuse that template for creating different stories
export const SampleActiveButtonFitContent = Template.bind({})
SampleActiveButtonFitContent.args = { label: 'Text for button', icon: badgeBackground }

export const SampleActiveButtonSetWidth = Template.bind({})
SampleActiveButtonSetWidth.args = { label: 'Sample text', width: '400px' }

export const SampleButtonDisabled = Template.bind({})
SampleButtonDisabled.args = { label: 'Sample text', disabled: true }
