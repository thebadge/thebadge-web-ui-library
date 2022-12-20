import { BadgeCategories, BadgeTypes } from '@businessLogic/badge'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import { BadgePreview } from '@components/atoms/BadgePreview/v1/BadgePreview'
import { BadgePreviewV2 } from '@components/atoms/BadgePreview/v2/BadgePreview'
import { BadgePreviewEffects, BadgeSize, BadgeTextContrast } from '@components/atoms/BadgePreview/BadgePreviewProps'
import { MultiBadgePreview, MultiBadgePreviewProps } from '@components/molecules/MultiBadgePreview/MultiBadgePreview'

export default {
  title: 'Components/Molecules/MultiBadgePreview',
  component: MultiBadgePreview
} as Meta

const Template: Story<MultiBadgePreviewProps> = (args) => {
  return (<MultiBadgePreview {...args} />)
}
const defaultBadgeCarouselExampleProps = {
  size: 'medium' as BadgeSize,
  badgeCategory: BadgeCategories.OFFCHAIN,
  badgeType: BadgeTypes.CUSTOM,
  title: 'TITLE xxx',
  subline: 'Subline #category',
  description:
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  badgeUrl: 'https://www.thebadge.xyz',
  animationOnHover: true,
  animationEffects: ['wobble', 'grow'] as BadgePreviewEffects[],
  badgeBackgroundUrl:
    'https://images.unsplash.com/photo-1620421680010-0766ff230392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80',
  textContrast: 'dark-withTextBackground' as BadgeTextContrast
}

export const MultiBadgePreviewTemplate = Template.bind({})
MultiBadgePreviewTemplate.args = {
  badges: [
    <BadgePreview key={0} {...defaultBadgeCarouselExampleProps} />,
    <BadgePreview key={1} {...defaultBadgeCarouselExampleProps} />,
    <BadgePreview key={2} {...defaultBadgeCarouselExampleProps} />
  ]
}

export const MultiBadgePreviewTemplateWithV2Badges = Template.bind({})
MultiBadgePreviewTemplateWithV2Badges.args = {
  badges: [
    <BadgePreviewV2 {...defaultBadgeCarouselExampleProps} />,
    <BadgePreviewV2 {...defaultBadgeCarouselExampleProps} />,
    <BadgePreviewV2 {...defaultBadgeCarouselExampleProps} />
  ]
}
