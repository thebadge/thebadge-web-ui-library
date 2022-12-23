import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { IconEvidence } from './IconEvidence'
import { IconProps } from '../IconProps'
import colors from '@assets/scss/variables/_color.variables.module.scss'

export default {
  title: 'Components/Icons/IconEvidence',
  component: IconEvidence,
} as Meta

const Template: Story<IconProps> = (args) => <IconEvidence {...args} />

export const IconEvidenceBlackWithoutLink = Template.bind({})
IconEvidenceBlackWithoutLink.args = { color: colors.black }

export const IconEvidenceRed = Template.bind({})
IconEvidenceRed.args = { link: 'https://demolink.com', color: '#ce0505' } // use custom color

export const IconEvidenceBlue = Template.bind({})
IconEvidenceBlue.args = { link: 'https://demolink.com', color: colors.blue } // import color

export const IconEvidenceGreen = Template.bind({})
IconEvidenceGreen.args = { link: 'https://demolink.com', color: 'green' } // use color from colors-list
