import { BadgeCategories } from '@businessLogic/badge'
import { Story } from '@storybook/react'
import { Meta } from '@storybook/react/types-6-0'
import React from 'react'
import { BadgePreview, BadgePreviewProps } from './BadgePreview'

export default {
  title: 'Components/Molecules/BadgePreview',
  component: BadgePreview,
} as Meta

const Template: Story<BadgePreviewProps> = (args) => {
  return (
    <div style={{ background: 'gray', padding: '16px' }}>
      <BadgePreview {...args} />
    </div>
  )
}

// Reuse that template for creating different stories
export const BadgePreviewLongTexts = Template.bind({})
BadgePreviewLongTexts.args = {
  size: 450,
  badgeCategory: BadgeCategories.OFFCHAIN,
  title:
    'TITLE xxx Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  subline:
    'Subline Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  description:
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  badgeUrl: 'https://www.thebadge.xyz',
}

export const BadgePreviewWithAnimationOnHover = Template.bind({})
BadgePreviewWithAnimationOnHover.args = {
  size: 400,
  badgeCategory: BadgeCategories.OFFCHAIN,
  title: 'TITLE xxx',
  subline: 'Subline #category',
  description:
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  badgeUrl: 'https://www.thebadge.xyz',
  animationOnHover: true,
  animationEffects: ['wobble', 'grow'],
}
