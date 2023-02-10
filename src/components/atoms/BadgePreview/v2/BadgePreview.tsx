import { BadgePreviewEffects, BadgePreviewProps, BadgeSize } from '@components/atoms/BadgePreview/BadgePreviewProps'
import { LogoTheBadgeWithText } from '@components/logos/LogoTheBadgeWithText/LogoTheBadgeWithText'
import { Box, styled } from '@mui/material'
import React, { useEffect } from 'react'
import QRCode from 'react-qr-code'
import './badgePreview.scss'

const defaultBackgroundUrl =
  'https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=678&q=80'

const defaultValuesForBadgePreviewProps = {
  size: 'medium' as BadgeSize,
  badgeUrl: 'https://www.thebadge.xyz/',
  badgeBackgroundUrl: defaultBackgroundUrl,
  title: '',
  category: '',
  description: '',
  animationOnHover: false,
  animationEffects: ['wobble', 'grow'] as BadgePreviewEffects[],
}

const BadgePreviewBox = styled(Box, { shouldForwardProp: (propName) => propName !== 'size' })<{ size?: number }>(
  ({ size = 320 }) => ({
    width: size,
    height: size * 1.6,
  })
)

export const BadgePreviewV2 = (props: BadgePreviewProps = defaultValuesForBadgePreviewProps) => {
  useEffect(() => {
    // As the background is made with .scss, we add the variable to be able
    // to use the given url on it
    document.documentElement.style.setProperty(
      '--badgeBackgroundUrl',
      `url(${props.badgeBackgroundUrl ? props.badgeBackgroundUrl : defaultBackgroundUrl})`
    )
  }, [props.badgeBackgroundUrl])

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
        return 75
      case 'medium':
        return 110
      case 'large':
        return 150
      case 'x-large':
        return 165
    }
  }

  const getLogoFillColor = () => {
    const { textContrast } = props
    switch (textContrast) {
      case 'light':
      case 'light-withTextBackground':
        return 'black'
      case 'dark':
      case 'dark-withTextBackground':
        return 'white'
      default:
        return 'black'
    }
  }

  const badgeQRSize = (): number => {
    const badgePreviewPropsSize = props.size
    switch (badgePreviewPropsSize) {
      case 'small':
        return 30
      case 'medium':
        return 45
      case 'large':
        return 70
      case 'x-large':
        return 85
      default:
        return 45
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
    return props.animationEffects && props.animationEffects.map((effect) => `badge-previewV2--${effect}`).join(' ')
  }

  return (
    <BadgePreviewBox
      size={badgeSize()}
      className={'badge-previewV2 ' + (props.animationOnHover ? animationEffectClasses() : '')}
      onClick={props.onClick}
    >
      <div
        className={[
          `badge-previewV2__container`,
          `badge-previewV2__container--${props.size}`,
          `badge-previewV2__container--${props.textContrast ?? 'light'}`,
        ].join(' ')}
      >
        <div className={'badge-previewV2__header'}>
          <div className={'badge-previewV2__header--logo-qr-container'}>
            <span className={'badge-previewV2__header--tb-logo'}>
              <LogoTheBadgeWithText fill={getLogoFillColor()} size={badgeLogoSize()} />
            </span>
            <div className={`badge-previewV2__header--qr-code badge-previewV2__header--qr-code--${props.size}`}>
              <QRCode size={badgeQRSize()} value={props.badgeUrl} viewBox={`0 0 ${badgeQRSize()} ${badgeQRSize()}`} />
            </div>
          </div>
          <div
            className={`badge-previewV2__header--image-container badge-previewV2__header--image-container--${props.size}`}
          >
            <div className={'badge-previewV2__header--background-image'} aria-label="Badge image background">
              <span className={'badge-previewV2__header--image'}>
                {props.imageUrl ? (
                  <img src={props.imageUrl} alt="Badge image" />
                ) : (
                  <LogoTheBadgeWithText size={badgeImageSize()} />
                )}
              </span>
            </div>
          </div>
        </div>
        <div className={`badge-previewV2__content badge-previewV2__content--${props.size}`}>
          <div className={`badge-previewV2__content--title badge-previewV2__content--title--${props.size}`}>
            {props.title}
          </div>
          <div
            className={[
              `badge-previewV2__content--category`,
              `text-max-lines--${badgeTitleMaxLines()}`,
              `badge-previewV2__content--category--${props.size}`,
            ].join(' ')}
          >
            {props.category}
          </div>
          <div
            className={[
              `badge-previewV2__content--description`,
              `text-max-lines--${badgeDescriptionMaxLines()}`,
              `badge-previewV2__content--description--${props.size}`,
            ].join(' ')}
          >
            {props.description}
          </div>
        </div>
        <div className="glare" />
      </div>
    </BadgePreviewBox>
  )
}
