import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { IconEmail } from './IconEmail'
import { IconProps } from '../IconProps'

export default {
  title: 'Components/Icons/IconEmail',
  component: IconEmail,
} as Meta

// Create a master template for mapping args to render the Button component
const Template: Story<IconProps> = (args) => <IconEmail {...args} />

// Reuse that template for creating different stories
export const IconEmail1 = Template.bind({})
IconEmail1.args = { link: 'https://demolink.com', color: 'primary-pink' }
