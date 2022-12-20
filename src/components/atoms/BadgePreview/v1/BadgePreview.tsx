import badgeBackground from '@assets/svgs/badgeBackground.svg'
import { BadgeCategories, BadgeTypes } from '@businessLogic/badge'
import { LogoTheBadge } from '@components/logos/LogoTheBadge/LogoTheBadge'
import { LogoTheBadgeWithText } from '@components/logos/LogoTheBadgeWithText/LogoTheBadgeWithText'
import { Box, styled } from '@mui/material'
import React from 'react'
import QRCode from 'react-qr-code'
import './badgePreview.scss'
import { BadgePreviewEffects, BadgePreviewProps, BadgeSize } from '@components/atoms/BadgePreview/BadgePreviewProps'

const defaultValuesForBadgePreviewProps = {
  size: 'medium' as BadgeSize,
  badgeCategory: BadgeCategories.OFFCHAIN,
  badgeType: BadgeTypes.CUSTOM,
  badgeUrl: 'https://www.thebadge.xyz/',
  title: '',
  subline: '',
  description: '',
  animationOnHover: false,
  animationEffects: ['wobble', 'grow'] as BadgePreviewEffects[],
}

const BadgePreviewBox = styled(Box)<{ size: number }>(({ size = 320 }) => ({
  width: size,
  height: size * 1.6,
}))

export const BadgePreview = (props: BadgePreviewProps = defaultValuesForBadgePreviewProps) => {
  const badgeSize = () => {
    const badgePreviewPropsSize = props.size
    switch (badgePreviewPropsSize) {
      case 'small':
        return 200
      case 'medium':
        return 300
      case 'large':
        return 400
      case 'x-large':
        return 500
      default:
        return 300
    }
  }

  const badgeImageSize = () => {
    return badgeSize() / 2
  }

  const badgeLogoSize = () => {
    const badgePreviewPropsSize = props.size
    switch (badgePreviewPropsSize) {
      case 'small':
        return 30
      case 'medium':
        return 40
      case 'large':
        return 50
      case 'x-large':
        return 60
    }
  }

  const badgeDescriptionMaxLines = () => {
    const badgePreviewPropsSize = props.size
    switch (badgePreviewPropsSize) {
      case 'small':
        return 5
      case 'medium':
        return 5
      case 'large':
        return 5
      case 'x-large':
        return 7
    }
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
      <div className={['badge-preview__container', `badge-preview__container--${props.size}`].join(' ')}>
        <div className={'badge-preview__header'}>
          <img className={'badge-preview__header--background-image'} src={badgeBackground} alt="badge background" />
          <span className={'badge-preview__header--tb-logo'}>
            <LogoTheBadge size={badgeLogoSize()} />
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
        <div
          className={[`badge-preview__content--subline`, `badge-preview__content--subline--${props.size}`].join(' ')}
        >
          {props.subline}
        </div>
        <div
          className={[
            `badge-preview__content--title`,
            `text-max-lines--${badgeTitleMaxLines()}`,
            `badge-preview__content--title--${props.size}`,
          ].join(' ')}
        >
          {props.title}
        </div>
        <div
          className={[
            `badge-preview__content--description`,
            `text-max-lines--${badgeDescriptionMaxLines()}`,
            `badge-preview__content--description--${props.size}`,
          ].join(' ')}
        >
          {props.description}
        </div>
        <div className="glare" />
      </div>
    </BadgePreviewBox>
  )
}
