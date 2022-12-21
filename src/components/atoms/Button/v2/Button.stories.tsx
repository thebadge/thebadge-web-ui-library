import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { ButtonV2, ButtonProps } from './Button'
import badgeBackground from '@assets/svgs/badgeBackground.svg'
import colors from '@assets/scss/variables/_color.variables.module.scss'

export default {
  title: 'Components/Atoms/Button/v2',
  component: ButtonV2,
} as Meta

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <ButtonV2 {...args} />

// Reuse that template for creating different stories
export const SampleActiveButtonFitContent = Template.bind({})
SampleActiveButtonFitContent.args = { label: 'Text for button', icon: badgeBackground }

export const SampleButtonPink = Template.bind({})
SampleButtonPink.args = { label: 'Sample text', backgroundColor: colors.pink }

export const SampleButtonGreen = Template.bind({})
SampleButtonGreen.args = { label: 'Sample text', backgroundColor: colors.green }

export const SampleButtonGrayWithRedText = Template.bind({})
SampleButtonGrayWithRedText.args = {
  label: 'Sample text',
  backgroundColor: colors.greyBackground,
  fontColor: colors.redError,
}

export const SampleActiveButtonSetWidth = Template.bind({})
SampleActiveButtonSetWidth.args = { label: 'Sample text', width: '400px' }

export const SampleButtonDisabled = Template.bind({})
SampleButtonDisabled.args = { label: 'Sample text', disabled: true }
