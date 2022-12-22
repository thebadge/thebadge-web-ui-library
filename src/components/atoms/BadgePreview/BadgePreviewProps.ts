export type BadgePreviewEffects = 'wobble' | 'grow' | 'glare'
export type BadgeSize = 'small' | 'medium' | 'large' | 'x-large'
export type BadgeTextContrast = 'light' | 'dark' | 'light-withTextBackground' | 'dark-withTextBackground'
export interface BadgePreviewProps {
  size: BadgeSize
  badgeUrl: string
  badgeBackgroundUrl?: string
  textContrast?: BadgeTextContrast
  title: string
  subline: string
  description: string
  iconUrl?: string
  imageUrl?: string
  onClick?: () => void
  animationOnHover?: boolean
  animationEffects: BadgePreviewEffects[]
}
