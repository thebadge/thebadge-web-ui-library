import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { IconCurator } from './IconCurator'
import { IconProps } from '../IconProps'
import colors from '@assets/scss/variables/_color.variables.module.scss'

export default {
  title: 'Components/Icons/IconCurator',
  component: IconCurator,
} as Meta

const Template: Story<IconProps> = (args) => <IconCurator {...args} />

export const IconCuratorBlackWithoutLink = Template.bind({})
IconCuratorBlackWithoutLink.args = { color: colors.black }

export const IconCuratorRed = Template.bind({})
IconCuratorRed.args = { link: 'https://demolink.com', color: '#ce0505' } // use custom color

export const IconCuratorBlue = Template.bind({})
IconCuratorBlue.args = { link: 'https://demolink.com', color: colors.blue } // import color

export const IconCuratorGreen = Template.bind({})
IconCuratorGreen.args = { link: 'https://demolink.com', color: 'green' } // use color from colors-list
