import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { IconEmail } from './IconEmail'
import { IconProps } from '../IconProps'

export default {
  title: 'Components/Icons/IconEmail',
  component: IconEmail,
} as Meta

const Template: Story<IconProps> = (args) => <IconEmail {...args} />

// Reuse that template for creating different stories
export const IconEmail1 = Template.bind({})
IconEmail1.args = { link: 'https://demolink.com', color: 'primaryPink' } // use color from colors-list

export const IconEmail2 = Template.bind({})
IconEmail2.args = { link: 'https://demolink.com', color: '#100090' } // use custom color
