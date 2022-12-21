import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { IconEmail } from './IconEmail'
import { IconProps } from '../IconProps'
import colors from '@assets/scss/variables/_color.variables.module.scss'

export default {
  title: 'Components/Icons/IconEmail',
  component: IconEmail,
} as Meta

const Template: Story<IconProps> = (args) => <IconEmail {...args} />

// Reuse that template for creating different stories

export const IconEmailBlackWithoutLink = Template.bind({})
IconEmailBlackWithoutLink.args = { color: colors.black }

export const IconEmailPink = Template.bind({})
IconEmailPink.args = { link: 'https://demolink.com', color: 'pink' } // use color from colors-list

export const IconEmailCustom = Template.bind({})
IconEmailCustom.args = { link: 'https://demolink.com', color: '#100090' } // use custom color
