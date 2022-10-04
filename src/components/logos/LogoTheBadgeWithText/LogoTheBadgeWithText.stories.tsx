import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { LogoTheBadgeWithText } from './LogoTheBadgeWithText'
import colors from '@assets/scss/variables/_color.variables.module.scss'
import gradients from '*.scss'
import { BackgroundGradient0 } from '../../layout/BackgroundGradient/BackgroundGradient.stories'

export default {
  title: 'Components/Logos/LogoTheBadgeWithText',
  component: LogoTheBadgeWithText,
} as Meta

const Template: Story<{color: string}> = (args) => {
  return (
    <div style={{background: args.color }}>
      <LogoTheBadgeWithText />
    </div>
  )
}

export const WithBlackBackground = Template.bind({})
WithBlackBackground.args = {color: 'black'}

export const WithSecondaryBlueBackground = Template.bind({})
WithSecondaryBlueBackground.args = {color: colors.secondaryBlue}

export const WithLightBlueBackground = Template.bind({})
WithLightBlueBackground.args = {color: colors.lightBlue}

export const WithPrimaryPinkBackground = Template.bind({})
WithPrimaryPinkBackground.args = {color: colors.primaryPink}
