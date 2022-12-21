import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { IconDecentralized } from './IconDecentralized'
import { IconProps } from '../IconProps'
import colors from '@assets/scss/variables/_color.variables.module.scss'

export default {
  title: 'Components/Icons/IconDescentralized',
  component: IconDecentralized,
} as Meta

const Template: Story<IconProps> = (args) => <IconDecentralized {...args} />

export const IconDecentralizedBlackWithoutLink = Template.bind({})
IconDecentralizedBlackWithoutLink.args = { color: colors.black }

export const IconDecentralizedRed = Template.bind({})
IconDecentralizedRed.args = { link: 'https://demolink.com', color: '#ce0505' } // use custom color

export const IconDecentralizedBlue = Template.bind({})
IconDecentralizedBlue.args = { link: 'https://demolink.com', color: colors.blue } // import color

export const IconDecentralizedGreen = Template.bind({})
IconDecentralizedGreen.args = { link: 'https://demolink.com', color: 'green' } // use color from colors-list
