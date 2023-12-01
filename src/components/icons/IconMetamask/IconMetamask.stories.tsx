import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { IconProps } from '../IconProps'
import colors from '@assets/scss/variables/_color.variables.module.scss'
import { IconMetamask } from './IconMetamask'

export default {
  title: 'Components/Icons/IconMetamask',
  component: IconMetamask,
} as Meta

const Template: Story<IconProps> = (args) => <IconMetamask size={64} {...args} />

// Reuse that template for creating different stories

export const IconMetamaskBlackWithoutLink = Template.bind({})
IconMetamaskBlackWithoutLink.args = { color: colors.black }

export const IconMetamask1 = Template.bind({})
IconMetamask1.args = { link: 'https://demolink.com', color: colors.blueLight } // use color from colors-list

export const IconMetamask2 = Template.bind({})
IconMetamask2.args = { link: 'https://demolink.com', color: 'blue' } // use color from colors-list

export const IconMetamask3 = Template.bind({})
IconMetamask3.args = { link: 'https://demolink.com', color: '#100090' } // use custom color
