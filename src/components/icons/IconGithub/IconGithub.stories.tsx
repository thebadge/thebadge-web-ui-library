import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { IconGithub } from './IconGithub'
import { IconProps } from '../IconProps'
import colors from '@assets/scss/variables/_color.variables.module.scss'

export default {
  title: 'Components/Icons/IconGithub',
  component: IconGithub,
} as Meta

const Template: Story<IconProps> = (args) => <IconGithub {...args} />

// Reuse that template for creating different stories
export const IconGithubBlackWithoutLink = Template.bind({})
IconGithubBlackWithoutLink.args = { color: colors.black }

export const IconGithub1 = Template.bind({})
IconGithub1.args = { link: 'https://demolink.com' }

export const IconGithub2 = Template.bind({})
IconGithub2.args = { link: 'https://demolink.com', color: '#59BCF7' } // use custom color

export const IconGithub3 = Template.bind({})
IconGithub3.args = { link: 'https://demolink.com', color: colors.blue } // use color from colors-list