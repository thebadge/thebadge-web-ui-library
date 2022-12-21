import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { IconDiscord } from './IconDiscord'
import { IconProps } from '../IconProps'
import colors from '@assets/scss/variables/_color.variables.module.scss'

export default {
  title: 'Components/Icons/IconDiscord',
  component: IconDiscord,
} as Meta

const Template: Story<IconProps> = (args) => <IconDiscord {...args} />

export const IconDiscordBlackWithoutLink = Template.bind({})
IconDiscordBlackWithoutLink.args = { color: colors.black }

export const IconDiscordRed = Template.bind({})
IconDiscordRed.args = { link: 'https://demolink.com', color: '#ce0505' } // use custom color

export const IconDiscordBlue = Template.bind({})
IconDiscordBlue.args = { link: 'https://demolink.com', color: '#0563ce' } // use custom color

export const IconDiscordGreen = Template.bind({})
IconDiscordGreen.args = { link: 'https://demolink.com', color: 'green' } // use color from colors-list
