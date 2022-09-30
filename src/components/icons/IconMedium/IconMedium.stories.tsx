import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { IconMedium } from './IconMedium'
import { IconProps } from '../IconProps'

export default {
  title: 'Components/Icons/IconMedium',
  component: IconMedium,
} as Meta

// Create a master template for mapping args to render the Button component
const Template: Story<IconProps> = (args) => <IconMedium {...args} />

// Reuse that template for creating different stories
export const IconMedium1 = Template.bind({})
IconMedium1.args = { link: 'https://demolink.com', color: 'primary-pink' } // use color from colors-list

export const IconMedium2 = Template.bind({})
IconMedium2.args = { link: 'https://demolink.com', color: '#59BCF7' } // use custom color