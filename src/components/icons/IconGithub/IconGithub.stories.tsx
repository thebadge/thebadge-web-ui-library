import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { IconGithub } from './IconGithub'
import { IconProps } from '../IconProps'

export default {
  title: 'Components/Icons/IconGithub',
  component: IconGithub,
} as Meta

// Create a master template for mapping args to render the Button component
const Template: Story<IconProps> = (args) => <IconGithub {...args} />

// Reuse that template for creating different stories
export const IconGithub1 = Template.bind({})
IconGithub1.args = { link: 'https://demolink.com'}
