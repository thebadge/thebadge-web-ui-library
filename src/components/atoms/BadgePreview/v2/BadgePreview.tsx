import colors from '@assets/scss/variables/_color.variables.module.scss'
import { BadgePreviewEffects, BadgePreviewProps, BadgeSize } from '@components/atoms/BadgePreview/BadgePreviewProps'
import { LogoTheBadgeWithText } from '@components/logos/LogoTheBadgeWithText/LogoTheBadgeWithText'
import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import QRCode from 'react-qr-code'
import './badgePreview.scss'
import defaultBackground from '@assets/svgs/badgeBackground.svg'
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

const BadgePreviewBox = styled(Box, { shouldForwardProp: (propName) => propName !== 'size' })<{
  size: { width: number; height: number }
}>(({ size }) => ({
  width: size.width,
  height: size.height,
}))

export const BadgePreview = (props: BadgePreviewProps = defaultValuesForBadgePreviewProps) => {
  const badgeSize = () => {
    const badgePreviewPropsSize = props.size
    switch (badgePreviewPropsSize) {
      case 'small':
        return { width: 200, height: 328 }
      case 'medium':
        return { width: 300, height: 504 }
      case 'large':
        return { width: 400, height: 655 }
      case 'x-large':
        return { width: 400, height: 655 }
      default:
        return { width: 200, height: 328 }
    }
  }

  const badgeImageSize = () => {
    const badgePreviewPropsSize = props.size
    switch (badgePreviewPropsSize) {
      case 'small':
        return { width: 160, height: 160 }
      case 'medium':
        return { width: 236, height: 236 }
      case 'large':
        return { width: 320, height: 320 }
      case 'x-large':
        return { width: 320, height: 320 }
      default:
        return { width: 160, height: 160 }
    }
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
        return colors.black
      case 'dark':
      case 'dark-withTextBackground':
        return colors.white
      default:
        return colors.black
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
        return 3
      case 'medium':
        return 4
      case 'large':
        return 5
      case 'x-large':
        return 7
    }
  }

  const badgeTitleMaxLines = () => {
    const size = badgeSize()
    return size.width > 500 ? 2 : 1
  }

  const animationEffectClasses = () => {
    return props.animationEffects && props.animationEffects.map((effect) => `badge-previewV2--${effect}`).join(' ')
  }

  const hasGlare = props.animationEffects.includes('glare')

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
        {props.badgeBackgroundUrl ? (
          <img
            className={`badge-previewV2__container--backgroundImage`}
            src={`${props.badgeBackgroundUrl ? props.badgeBackgroundUrl : defaultBackground}`}
            alt="Badge Background"
          />
        ) : (
          <div className={`badge-previewV2__container--backgroundImage`} style={{ border: '1px solid #7e7e7e' }} />
        )}
        <div
          className={[
            `badge-previewV2__container__shadow`,
            `badge-previewV2__container__shadow--${props.size}`,
            `badge-previewV2__container__shadow--${props.textContrast ?? 'light'}`,
          ].join(' ')}
        />
        <div className={'badge-previewV2__header'}>
          <div className={'badge-previewV2__header--logo-qr-container'}>
            <span
              className={[`badge-previewV2__header--tb-logo`, `badge-previewV2__header--tb-logo--${props.size}`].join(
                ' '
              )}
            >
              <LogoTheBadgeWithText fill={getLogoFillColor()} size={badgeLogoSize()} />
            </span>
            {props.badgeUrl ? (
              <div className={`badge-previewV2__header--qr-code badge-previewV2__header--qr-code--${props.size}`}>
                <QRCode size={badgeQRSize()} value={props.badgeUrl} viewBox={`0 0 ${badgeQRSize()} ${badgeQRSize()}`} />
              </div>
            ) : (
              <div id="qr-placeholder" style={{ height: `${badgeQRSize()}px`, width: `${badgeQRSize()}px` }} />
            )}
          </div>
        </div>
        <div className={`badge-previewV2__image-container badge-previewV2__image-container--${props.size}`}>
          {props.imageUrl ? (
            <img
              src={props.imageUrl}
              alt="Badge image"
              className={[`badge-previewV2__image`, `badge-previewV2__image--${props.size}`].join(' ')}
            />
          ) : (
            <LogoTheBadgeWithText size={badgeImageSize().width} />
          )}
        </div>
        {/* Badge Content - Tittle - Category - Description */}
        <Typography component={'div'} className={`badge-previewV2__content badge-previewV2__content--${props.size}`}>
          <div
            className={[
              `badge-previewV2__content--title`,
              `text-max-lines--${badgeTitleMaxLines()}`,
              `badge-previewV2__content--title--${props.size}`,
            ].join(' ')}
          >
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
        </Typography>
        {hasGlare && <div className="glare" />}
      </div>
    </BadgePreviewBox>
  )
}
