import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { ButtonV2, ButtonV2Props } from './Button'
import badgeBackground from '@assets/svgs/badgeBackground.svg'
import colors from '@assets/scss/variables/_color.variables.module.scss'
import { ButtonProps as MUIButtonProps } from '@mui/material/Button/Button'
import { IconDiscord } from '@components/icons/IconDiscord/IconDiscord'

export default {
  title: 'Components/Atoms/Button/v2',
  component: ButtonV2,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/OreesPbFuBZAyneAgQ61XV/The-Badge?node-id=3474-4425&t=FyGUSZ6GHV9ueLg7-4',
    },
  },
} as Meta

// Create a master template for mapping args to render the Button component
type ButtonPropsWithLabel = MUIButtonProps & ButtonV2Props & { label?: string }
// eslint-disable-next-line react/prop-types
const Template: Story<ButtonPropsWithLabel> = ({ label, ...args }) => <ButtonV2 {...args}>{label}</ButtonV2>

// Reuse that template for creating different stories
export const SampleActiveButtonWithImage = Template.bind({})
SampleActiveButtonWithImage.args = {
  label: 'Sample text',
  endIcon: (
    <img width={25} height={25} src={badgeBackground} alt={'Button Icon'} className={'width-pc-100 height-pc-100'} />
  ),
}

export const JoinOurCommunity = Template.bind({})
JoinOurCommunity.args = {
  label: 'Join our community',
  backgroundColor: colors.green,
  endIcon: <IconDiscord color={colors.white} />,
}

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
