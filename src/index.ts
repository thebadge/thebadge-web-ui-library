// assets
import { defaultTheme, TBColor } from '@assets/defaultTheme'

// scss
import '@assets/scss/global.scss'
import breakpoints from '@assets/scss/variables/_breakpoint.variables.module.scss'
import colors from '@assets/scss/variables/_color.variables.module.scss'
import fonts from '@assets/scss/variables/_fonts.variables.module.scss'
import gradients from '@assets/scss/variables/_gradient.variables.module.scss'
import { BadgePreviewProps } from '@components/atoms/BadgePreview/BadgePreviewProps'

// components
import { BadgePreview } from '@components/atoms/BadgePreview/v1/BadgePreview'
import { BadgePreviewV2 } from '@components/atoms/BadgePreview/v2/BadgePreview'
import { Button } from '@components/atoms/Button/v1/Button'
import { ButtonV2 } from '@components/atoms/Button/v2/Button'
import { NavigationHeader, NavigationHeaderProps } from '@components/atoms/NavigationHeader/NavigationHeader'
import { SpinningArrow, SpinningArrowProps } from '@components/atoms/SpinningArrow/SpinningArrow'
import { IconBadge } from '@components/icons/IconBadge/IconBadge'
import { IconCurator } from '@components/icons/IconCurator/IconCurator'
import { IconDecentralized } from '@components/icons/IconDecentralized/IconDecentralized'
import { IconDiscord } from '@components/icons/IconDiscord/IconDiscord'
import { IconEmail } from '@components/icons/IconEmail/IconEmail'
import { IconEvidence } from '@components/icons/IconEvidence/IconEvidence'
import { IconGithub } from '@components/icons/IconGithub/IconGithub'
import { IconMedium } from '@components/icons/IconMedium/IconMedium'
import { IconTwitter } from '@components/icons/IconTwitter/IconTwitter'
import { BackgroundGradient } from '@components/layout/BackgroundGradient/BackgroundGradient'
import { BoxGradient, BoxGradientProps } from '@components/layout/BoxGradient/BoxGradient'
import { SectionLayout, SectionLayoutProps } from '@components/layout/SectionLayout/SectionLayout'
import { LogoProps } from '@components/logos/LogoProps'
import { LogoTheBadge } from '@components/logos/LogoTheBadge/LogoTheBadge'
import { LogoTheBadgeWithText } from '@components/logos/LogoTheBadgeWithText/LogoTheBadgeWithText'
import { Carousel } from '@components/molecules/Carousel/Carousel'
import { MultiBadgePreview, MultiBadgePreviewProps } from '@components/molecules/MultiBadgePreview/MultiBadgePreview'
import {
  ResizedBadgePreviewsList,
  ResizedBadgePreviewsListProps,
} from '@components/molecules/ResizedBadgePreviewsList/ResizedBadgePreviewsList'
import { Stepper, StepperProps } from '@components/molecules/Stepper/Stepper'

export {
  defaultTheme,
  colors,
  gradients,
  breakpoints,
  fonts,
  Button,
  ButtonV2,
  BadgePreview,
  BadgePreviewV2,
  NavigationHeader,
  SpinningArrow,
  IconBadge,
  IconCurator,
  IconDecentralized,
  IconDiscord,
  IconEmail,
  IconEvidence,
  IconGithub,
  IconMedium,
  IconTwitter,
  BackgroundGradient,
  BoxGradient,
  SectionLayout,
  LogoTheBadge,
  LogoTheBadgeWithText,
  Carousel,
  MultiBadgePreview,
  ResizedBadgePreviewsList,
  Stepper,
}
export type {
  TBColor,
  StepperProps,
  MultiBadgePreviewProps,
  LogoProps,
  SectionLayoutProps,
  BoxGradientProps,
  SpinningArrowProps,
  NavigationHeaderProps,
  BadgePreviewProps,
  ResizedBadgePreviewsListProps,
}
