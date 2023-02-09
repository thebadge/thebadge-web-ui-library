import { BadgeCategories, BadgeTypes } from '@businessLogic/badge'
import { BadgePreviewEffects, BadgeSize, BadgeTextContrast } from '@components/atoms/BadgePreview/BadgePreviewProps'
import { BadgePreview } from '@components/atoms/BadgePreview/v1/BadgePreview'
import {
  ResizedBadgePreviewsList,
  ResizedBadgePreviewsListProps,
} from '@components/molecules/ResizedBadgePreviewsList/ResizedBadgePreviewsList'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import { BadgePreviewV2 } from '@components/atoms/BadgePreview/v2/BadgePreview'

export default {
  title: 'Components/Molecules/ResizedBadgePreviewsList',
  component: ResizedBadgePreviewsList,
} as Meta

const Template: Story<ResizedBadgePreviewsListProps> = (args) => {
  return (
    <div style={{ paddingTop: '1rem' }}>
      <ResizedBadgePreviewsList {...args} />
    </div>
  )
}
const defaultBadgePreviewExampleProps = {
  size: 'small' as BadgeSize,
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
  textContrast: 'dark-withTextBackground' as BadgeTextContrast,
}

export const ResizedBadgePreviewsListTemplate = Template.bind({})
ResizedBadgePreviewsListTemplate.args = {
  badges: [
    <BadgePreview key={0} {...defaultBadgePreviewExampleProps} />,
    <BadgePreview key={1} {...defaultBadgePreviewExampleProps} />,
    <BadgePreview key={2} {...defaultBadgePreviewExampleProps} />,
    <BadgePreview key={3} {...defaultBadgePreviewExampleProps} />,
    <BadgePreview key={4} {...defaultBadgePreviewExampleProps} />,
  ],
}

export const ResizedBadgePreviewsWithV2ListTemplate = Template.bind({})
ResizedBadgePreviewsWithV2ListTemplate.args = {
  badges: [
    <BadgePreviewV2 key={0} {...defaultBadgePreviewExampleProps} />,
    <BadgePreviewV2 key={1} {...defaultBadgePreviewExampleProps} />,
    <BadgePreviewV2 key={2} {...defaultBadgePreviewExampleProps} />,
    <BadgePreviewV2 key={3} {...defaultBadgePreviewExampleProps} />,
    <BadgePreviewV2 key={4} {...defaultBadgePreviewExampleProps} />,
  ],
}
