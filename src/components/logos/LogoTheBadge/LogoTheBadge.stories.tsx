import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { LogoTheBadge } from './LogoTheBadge'

export default {
  title: 'Components/Logos/LogoTheBadge',
  component: LogoTheBadge,
} as Meta

const Template: Story = (args) => <LogoTheBadge {...args} />

// Reuse that template for creating different stories
export const LogoTheBadge1 = Template.bind({})
