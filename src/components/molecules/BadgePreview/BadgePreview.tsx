import badgeBackground from '@assets/svgs/badgeBackground.svg'
import { BadgeCategories, BadgeTypesSupported } from '@businessLogic/badge'
import { LogoTheBadge } from '@components/logos/LogoTheBadge/LogoTheBadge'
import { LogoTheBadgeWithText } from '@components/logos/LogoTheBadgeWithText/LogoTheBadgeWithText'
import { Box, styled } from '@mui/material'
import React from 'react'
import QRCode from 'react-qr-code'
import './badgePreview.scss'

type Effects = 'wobble' | 'grow'
export interface BadgePreviewProps {
  size: number
  badgeCategory: BadgeCategories
  badgeType: BadgeTypesSupported
  badgeUrl: string
  title: string
  subline: string
  description: string
  iconUrl?: string
  imageUrl?: string
  onClick?: () => void
  animationOnHover?: boolean
  animationEffects: Effects[]
}

const defaultValuesForBadgePreviewProps = {
  size: 320,
  badgeCategory: BadgeCategories.OFFCHAIN,
  badgeType: BadgeTypesSupported.CUSTOM,
  badgeUrl: 'https://www.thebadge.xyz/',
  title: '',
  subline: '',
  description: '',
  animationOnHover: false,
  animationEffects: ['wobble', 'grow'] as Effects[],
}

const BadgePreviewBox = styled(Box)<{ size: number }>(({ theme, size = 320 }) => ({
  width: size,
  height: size * 1.6,
  margin: theme.spacing(2),
}))

export const BadgePreview = (props: BadgePreviewProps = defaultValuesForBadgePreviewProps) => {
  const badgeSize = () => {
    const badgePreviewPropsSize = props.size
    if (!badgePreviewPropsSize || badgePreviewPropsSize < 200) {
      return 200 // min value
    }
    if (badgePreviewPropsSize > 900) {
      return 900 // max value
    }
    return badgePreviewPropsSize
  }

  const badgeImageSize = () => {
    return badgeSize() / 2
  }

  const badgeDescriptionMaxLines = () => {
    const size = badgeSize()
    const badgeHeight = size * 1.6
    const badgeTextContentHeight = badgeHeight / 2
    const badgeTextContentSections = 3
    const badgeDescriptionLineHeight = 20
    return Math.floor(badgeTextContentHeight / badgeTextContentSections / badgeDescriptionLineHeight)
  }

  const badgeTitleMaxLines = () => {
    const size = badgeSize()
    return size > 500 ? 2 : 1
  }

  const animationEffectClasses = () => {
    return props.animationEffects && props.animationEffects.map((effect) => `badge-preview--${effect}`).join(' ')
  }

  return (
    <BadgePreviewBox
      size={badgeSize()}
      className={'badge-preview ' + (props.animationOnHover ? animationEffectClasses() : '')}
      onClick={props.onClick}
    >
      <div className={'badge-preview__container'}>
        <div className={'badge-preview__header'}>
          <img className={'badge-preview__header--background-image'} src={badgeBackground} alt="badge background" />
          <span className={'badge-preview__header--tb-logo'}>
            <LogoTheBadge size={50} />
          </span>
          <div className={'badge-preview__header--qr-code'}>
            <QRCode
              size={256}
              style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
              value={props.badgeUrl}
              viewBox={`0 0 256 256`}
            />
          </div>
          <span className={'badge-preview__header--image'}>
            {props.imageUrl ? (
              <img src={props.imageUrl} alt="Badge image" />
            ) : (
              <LogoTheBadgeWithText size={badgeImageSize()} />
            )}
          </span>
        </div>
        <div className={'badge-preview__content--subline'}>{props.subline}</div>
        <div
          className={
            `badge-preview__content--title text-max-lines--${badgeTitleMaxLines()} ` +
            (badgeSize() > 500 ? 'width-pc--55' : '')
          }
        >
          {props.title}
        </div>
        <div className={`badge-preview__content--description text-max-lines--${badgeDescriptionMaxLines()}`}>
          {props.description}
        </div>
      </div>
    </BadgePreviewBox>
  )
}
