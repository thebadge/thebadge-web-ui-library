import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { IconBadge } from './IconBadge'
import { IconProps } from '../IconProps'
import colors from '@assets/scss/variables/_color.variables.module.scss'

export default {
  title: 'Components/Icons/IconBadge',
  component: IconBadge,
} as Meta

const Template: Story<IconProps> = (args) => <IconBadge {...args} />

export const IconBadgeBlackWithoutLink = Template.bind({})
IconBadgeBlackWithoutLink.args = { color: colors.black }

export const IconBadgeRed = Template.bind({})
IconBadgeRed.args = { link: 'https://demolink.com', color: '#ce0505' } // use custom color

export const IconBadgeBlue = Template.bind({})
IconBadgeBlue.args = { link: 'https://demolink.com', color: colors.blue } // import color

export const IconBadgeGreen = Template.bind({})
IconBadgeGreen.args = { link: 'https://demolink.com', color: 'green' } // use color from colors-list
