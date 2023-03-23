export type BadgePreviewEffects = 'wobble' | 'grow' | 'glare'
export type BadgeSize = 'small' | 'medium' | 'large' | 'x-large'
export type BadgeTextContrast = 'light' | 'dark' | 'light-withTextBackground' | 'dark-withTextBackground'
export interface BadgePreviewProps {
  size: BadgeSize
  badgeUrl: string
  badgeBackgroundUrl?: string
  textContrast?: BadgeTextContrast
  title: string
  category: string
  description: string
  iconUrl?: string
  imageUrl?: string
  onClick?: () => void
  animationOnHover?: boolean
  animationEffects: BadgePreviewEffects[]
  highlightColor?: string // for now only used on mini badge preview
  textContrastOutside?: BadgeTextContrast // for now only used on mini badge preview
}
