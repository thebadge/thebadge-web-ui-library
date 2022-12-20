import { BadgeCategories, BadgeTypesSupported } from '@businessLogic/badge'
import { Alert } from '@mui/material'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import { BadgePreview, BadgePreviewEffects, BadgeSize } from '../BadgePreview/BadgePreview'
import { BadgePreviewV2, BadgeTextContrast } from '../BadgePreviewV2/BadgePreview'
import { Carousel, CarouselProps } from './Carousel'

export default {
  title: 'Components/Molecules/Carousel',
  component: Carousel,
} as Meta

const Template: Story<CarouselProps> = (args) => {
  return (
    <div
      style={{
        background: 'gray',
        padding: '16px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '70vh',
      }}
    >
      <Alert severity="warning">
        Self rotates stops each time you hover one element on the carousel so that you can read it correctly and at your
        time.
      </Alert>
      <Carousel {...args} />
    </div>
  )
}
const defaultBadgeCarouselExampleProps = {
  size: 'medium' as BadgeSize,
  badgeCategory: BadgeCategories.OFFCHAIN,
  badgeType: BadgeTypesSupported.CUSTOM,
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

export const CarouselPreview = Template.bind({})
CarouselPreview.args = {
  elementWidth: 400,
  elementHeight: 400 * 1.6,
  selfRotate: true,
  elements: [
    <BadgePreview key={0} {...defaultBadgeCarouselExampleProps} />,
    <BadgePreview key={1} {...defaultBadgeCarouselExampleProps} />,
    <BadgePreview key={2} {...defaultBadgeCarouselExampleProps} />,
    <BadgePreview key={3} {...defaultBadgeCarouselExampleProps} />,
    <BadgePreview key={4} {...defaultBadgeCarouselExampleProps} />,
    <BadgePreview key={5} {...defaultBadgeCarouselExampleProps} />,
    <BadgePreview key={6} {...defaultBadgeCarouselExampleProps} />,
    <BadgePreview key={7} {...defaultBadgeCarouselExampleProps} />,
    <BadgePreview key={8} {...defaultBadgeCarouselExampleProps} />,
    <BadgePreview key={9} {...defaultBadgeCarouselExampleProps} />,
    <BadgePreview key={10} {...defaultBadgeCarouselExampleProps} />,
  ],
}

export const CarouselPreviewWithV2Badges = Template.bind({})
CarouselPreviewWithV2Badges.args = {
  elementWidth: 400,
  elementHeight: 400 * 1.6,
  selfRotate: true,
  elements: [
    <BadgePreviewV2 key={0} {...defaultBadgeCarouselExampleProps} />,
    <BadgePreviewV2 key={1} {...defaultBadgeCarouselExampleProps} />,
    <BadgePreviewV2 key={2} {...defaultBadgeCarouselExampleProps} />,
    <BadgePreviewV2 key={3} {...defaultBadgeCarouselExampleProps} />,
    <BadgePreviewV2 key={4} {...defaultBadgeCarouselExampleProps} />,
    <BadgePreviewV2 key={5} {...defaultBadgeCarouselExampleProps} />,
    <BadgePreviewV2 key={6} {...defaultBadgeCarouselExampleProps} />,
    <BadgePreviewV2 key={7} {...defaultBadgeCarouselExampleProps} />,
    <BadgePreviewV2 key={8} {...defaultBadgeCarouselExampleProps} />,
    <BadgePreviewV2 key={9} {...defaultBadgeCarouselExampleProps} />,
    <BadgePreviewV2 key={10} {...defaultBadgeCarouselExampleProps} />,
  ],
}
