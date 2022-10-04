import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { IconMedium } from './IconMedium'
import { IconProps } from '../IconProps'
import colors from '@assets/scss/variables/_color.variables.module.scss'

export default {
  title: 'Components/Icons/IconMedium',
  component: IconMedium,
} as Meta

const Template: Story<IconProps> = (args) => <IconMedium {...args} />

// Reuse that template for creating different stories
export const IconMedium1 = Template.bind({})
IconMedium1.args = { link: 'https://demolink.com', color: 'primaryPink' } // use color from colors-list

export const IconMedium2 = Template.bind({})
IconMedium2.args = { link: 'https://demolink.com', color: '#59BCF7' } // use custom color

export const IconMedium3 = Template.bind({})
IconMedium3.args = { link: 'https://demolink.com', color: colors.secondaryBlue } // use color from colors-list
