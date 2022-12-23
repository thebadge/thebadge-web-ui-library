import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { IconTwitter } from './IconTwitter'
import { IconProps } from '../IconProps'
import colors from '@assets/scss/variables/_color.variables.module.scss'

export default {
  title: 'Components/Icons/IconTwitter',
  component: IconTwitter,
} as Meta

const Template: Story<IconProps> = (args) => <IconTwitter {...args} />

// Reuse that template for creating different stories

export const IconTwitterBlackWithoutLink = Template.bind({})
IconTwitterBlackWithoutLink.args = { color: colors.black }

export const IconTwitter1 = Template.bind({})
IconTwitter1.args = { link: 'https://demolink.com', color: colors.blueLight } // use color from colors-list

export const IconTwitter2 = Template.bind({})
IconTwitter2.args = { link: 'https://demolink.com', color: 'blue' } // use color from colors-list

export const IconTwitter3 = Template.bind({})
IconTwitter3.args = { link: 'https://demolink.com', color: '#100090' } // use custom color
