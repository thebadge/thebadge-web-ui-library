import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { IconDiscord } from './IconDiscord'
import { IconProps } from '../IconProps'
import '../../../assets/scss/global.scss'

export default {
  title: 'Components/Icons/IconDiscord',
  component: IconDiscord,
} as Meta

// Create a master template for mapping args to render the Button component
const Template: Story<IconProps> = (args) => <IconDiscord {...args} />

export const IconDiscordRed = Template.bind({})
IconDiscordRed.args = { link: 'https://demolink.com', color: '#ce0505'}

export const IconDiscordBlue = Template.bind({})
IconDiscordBlue.args = { link: 'https://demolink.com', color: '#0563ce'}

export const IconDiscordGreen = Template.bind({})
IconDiscordGreen.args = { link: 'https://demolink.com', color: '#55ce05'}
