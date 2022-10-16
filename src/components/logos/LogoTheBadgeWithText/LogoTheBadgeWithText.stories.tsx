import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { LogoTheBadgeWithText } from './LogoTheBadgeWithText'
import colors from '@assets/scss/variables/_color.variables.module.scss'

export default {
  title: 'Components/Logos/LogoTheBadgeWithText',
  component: LogoTheBadgeWithText,
} as Meta

const Template: Story<{ color: string }> = (args) => {
  return (
    <div style={{ background: args.color }}>
      <LogoTheBadgeWithText />
    </div>
  )
}

export const WithBlackBackground = Template.bind({})
WithBlackBackground.args = { color: 'black' }

export const WithBlueBackground = Template.bind({})
WithBlueBackground.args = { color: colors.blue }

export const WithBlueLightBackground = Template.bind({})
WithBlueLightBackground.args = { color: colors.blueLight }

export const WithPinkBackground = Template.bind({})
WithPinkBackground.args = { color: colors.pink }
