import React from 'react'

export type BadgePreviewEffects = 'wobble' | 'grow' | 'glare'
export type BadgeSize = 'small' | 'medium' | 'large'
export type BadgeTextContrast = 'light' | 'dark' | 'light-withTextBackground' | 'dark-withTextBackground'
export interface BadgePreviewProps {
  size: BadgeSize
  badgeUrl?: string
  badgeBackgroundUrl?: string
  badgeNetworkUrl?: string // Used on models to show what's the native networks of it
  textContrast?: BadgeTextContrast
  title: string
  category: string
  description: string | React.ReactNode
  iconUrl?: string
  imageUrl?: string
  onClick?: () => void // will be shared among the button and the badge
  animationOnHover?: boolean
  animationEffects: BadgePreviewEffects[]
  highlightColor?: string // for now only used on mini badge preview
  textContrastOutside?: BadgeTextContrast // for now only used on mini badge preview
  buttonTitle?: string // Text that will be used on the button
  miniIcon?: React.ReactNode // Icon above the title
  selected?: boolean // Marks the badge as selected
  miniLogoTitle?: string
  miniLogoSubTitle?: string
  miniLogoUrl?: string
}
export type MiniBadgePreviewProps = Omit<BadgePreviewProps, 'size' | 'badgeUrl' | 'iconUrl'>
