import { BadgeCategories, BadgeTypesSupported } from '@businessLogic/badge'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import { BadgePreview, BadgePreviewEffects } from '../BadgePreview/BadgePreview'
import { Carousel, CarouselProps } from './Carousel'

export default {
  title: 'Components/Molecules/Carousel',
  component: Carousel,
} as Meta

const Template: Story<CarouselProps> = (args) => {
  return (
    <div style={{ background: 'gray', padding: '16px', display: 'flex', justifyContent: 'center', height: '100vh' }}>
      <Carousel {...args} />
    </div>
  )
}
const defaultBadgeCarouselExampleProps = {
  size: 400,
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
}

export const CarouselPreview = Template.bind({})
CarouselPreview.args = {
  elementWidth: 400,
  elementHeight: 400 * 1.6,
  selfRotate: true,
  elements: [
    <BadgePreview {...defaultBadgeCarouselExampleProps} />,
    <BadgePreview {...defaultBadgeCarouselExampleProps} />,
    <BadgePreview {...defaultBadgeCarouselExampleProps} />,
    <BadgePreview {...defaultBadgeCarouselExampleProps} />,
    <BadgePreview {...defaultBadgeCarouselExampleProps} />,
    <BadgePreview {...defaultBadgeCarouselExampleProps} />,
    <BadgePreview {...defaultBadgeCarouselExampleProps} />,
    <BadgePreview {...defaultBadgeCarouselExampleProps} />,
    <BadgePreview {...defaultBadgeCarouselExampleProps} />,
    <BadgePreview {...defaultBadgeCarouselExampleProps} />,
    <BadgePreview {...defaultBadgeCarouselExampleProps} />,
  ],
}
