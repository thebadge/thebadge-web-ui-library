import { BadgeCategories, BadgeTypes } from '@businessLogic/badge'
import { BadgePreviewEffects, BadgeSize, BadgeTextContrast } from '@components/atoms/BadgePreview/BadgePreviewProps'
import { BadgePreview as BadgePreviewV2 } from '@components/atoms/BadgePreview/v2/BadgePreview'
import { MultiBadgePreview, MultiBadgePreviewProps } from '@components/molecules/MultiBadgePreview/MultiBadgePreview'
import { Meta, Story } from '@storybook/react'
import React from 'react'

export default {
  title: 'Components/Molecules/MultiBadgePreview',
  component: MultiBadgePreview,
} as Meta

const Template: Story<MultiBadgePreviewProps> = (args) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '10%' }}>
      <MultiBadgePreview {...args} />
    </div>
  )
}
const defaultBadgePreviewExampleProps = {
  size: 'small' as BadgeSize,
  badgeCategory: BadgeCategories.OFFCHAIN,
  badgeType: BadgeTypes.CUSTOM,
  title: 'TITLE xxx',
  category: 'Subline #category',
  description:
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  badgeUrl: 'https://www.thebadge.xyz',
  animationOnHover: true,
  animationEffects: ['wobble', 'grow'] as BadgePreviewEffects[],
  badgeBackgroundUrl:
    'https://images.unsplash.com/photo-1620421680010-0766ff230392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80',
  textContrast: 'dark-withTextBackground' as BadgeTextContrast,
}

export const MultiBadgePreviewWithV2Badges = Template.bind({})
MultiBadgePreviewWithV2Badges.args = {
  badges: [
    <BadgePreviewV2 key={0} {...defaultBadgePreviewExampleProps} />,
    <BadgePreviewV2 key={1} {...defaultBadgePreviewExampleProps} />,
    <BadgePreviewV2 key={2} {...defaultBadgePreviewExampleProps} />,
  ],
}

export const MultiBadgePreviewWithV2BadgesScaledToHalf = Template.bind({})
MultiBadgePreviewWithV2BadgesScaledToHalf.args = {
  badges: [
    <BadgePreviewV2 key={0} {...defaultBadgePreviewExampleProps} />,
    <BadgePreviewV2 key={1} {...defaultBadgePreviewExampleProps} />,
    <BadgePreviewV2 key={2} {...defaultBadgePreviewExampleProps} />,
  ],
  sizeScale: 0.5,
}

export const MultiBadgePreviewWithV2BadgesAnimatedWithLink = Template.bind({})
MultiBadgePreviewWithV2BadgesAnimatedWithLink.args = {
  badges: [
    <BadgePreviewV2 key={0} {...defaultBadgePreviewExampleProps} />,
    <BadgePreviewV2 key={1} {...defaultBadgePreviewExampleProps} />,
    <BadgePreviewV2 key={2} {...defaultBadgePreviewExampleProps} />,
  ],
  animated: true,
  onGroupClick: () => {
    window.open('https://www.thebadge.xyz/')
  },
}
