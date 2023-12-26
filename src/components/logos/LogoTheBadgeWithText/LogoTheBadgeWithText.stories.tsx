import colors from '@assets/scss/variables/_color.variables.module.scss'
import { Story } from '@storybook/react'
import { Meta } from '@storybook/react/types-6-0'
import React from 'react'
import { LogoTheBadgeWithText } from './LogoTheBadgeWithText'

export default {
  title: 'Components/Logos/LogoTheBadgeWithText',
  component: LogoTheBadgeWithText,
  argTypes: {
    fill: {
      control: {
        type: 'color',
      },
    },
  },
} as Meta

const Template: Story<{ color: string; fill: string }> = (args) => {
  return (
    <div style={{ background: args.color }}>
      <LogoTheBadgeWithText {...args} />
    </div>
  )
}

export const WithBlackBackground = Template.bind({})
WithBlackBackground.args = { color: 'black', fill: colors.white }

export const WithBlueBackground = Template.bind({})
WithBlueBackground.args = { color: colors.blue, fill: colors.white }

export const WithBlueLightBackground = Template.bind({})
WithBlueLightBackground.args = { color: colors.blueLight, fill: colors.white }

export const WithPinkBackground = Template.bind({})
WithPinkBackground.args = { color: colors.pink, fill: colors.blackText }
