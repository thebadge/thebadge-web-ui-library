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
            <>
              <div className={`badge-previewV2__image-blur`}>
                <img src={props.imageUrl} alt="Badge image blur" className={`badge-previewV2__image-bg`} />
              </div>
              <img
                src={props.imageUrl}
                alt="Badge image"
                className={[`badge-previewV2__image`, `badge-previewV2__image--${props.size}`].join(' ')}
              />
            </>
          ) : (
            <div className={[`badge-previewV2__image-placeholder`, `badge-previewV2__image--${props.size}`].join(' ')}>
              <LogoTheBadgeWithText size={badgeImageSize().width} style={{ margin: 'auto' }} />
            </div>
          )}
          {getMiniLogoSVG(
            <div
              className={`badge-previewV2__miniLogo-titleContainer badge-previewV2__miniLogo-titleContainer--${props.size}`}
            >
              <p className={`badge-previewV2__miniLogo-title  badge-previewV2__miniLogo-title--${props.size}`}>#1</p>
              <span className={`badge-previewV2__miniLogo-subTitle  badge-previewV2__miniLogo-subTitle--${props.size}`}>
                user
              </span>
            </div>,
            { size: props.size }
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

function getMiniLogoSVG(element: React.ReactNode, props: { size: string }) {
  return (
    <div className={`badge-previewV2__miniLogo-container  badge-previewV2__miniLogo-container--${props.size}`}>
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M48.655 66.002c-.952-.166-2.636-.456-4.292-.787-.842-.166-1.574-.028-2.223.538-.993.856-1.96 1.726-2.981 2.554-1.408 1.132-2.968 1.823-4.845 1.616-1.325-.152-2.443-.773-3.45-1.574-.801-.635-1.602-1.298-2.32-2.03-1.076-1.09-2.277-1.339-3.768-.994a23.655 23.655 0 0 1-4.417.635c-2.305.125-3.989-1.021-5.038-3.023-.552-1.063-1.035-2.209-1.311-3.383-.456-1.974-1.56-3.12-3.534-3.561-1.007-.221-2.001-.635-2.94-1.077-3.23-1.533-3.81-3.921-3.423-6.779.166-1.242.428-2.471.69-3.7.193-.897 0-1.656-.607-2.333-.828-.953-1.684-1.877-2.47-2.871-2.265-2.858-2.265-5.523 0-8.408.634-.801 1.297-1.602 2.028-2.32 1.035-1.035 1.256-2.18.925-3.59-.318-1.38-.566-2.788-.676-4.196-.18-2.527 1.007-4.363 3.243-5.48.856-.429 1.767-.719 2.664-1.064.456-.18.925-.331 1.394-.456 1.243-.33 2.002-1.09 2.36-2.333a31.085 31.085 0 0 1 1.146-3.3c1.34-3.257 3.741-4.569 7.206-3.975 1.214.207 2.429.428 3.644.69.883.193 1.6-.041 2.263-.621.925-.815 1.836-1.657 2.816-2.43 2.94-2.333 5.576-2.333 8.516 0 .953.745 1.85 1.574 2.761 2.388.677.594 1.408.829 2.319.65 1.532-.305 3.064-.608 4.624-.774 2.678-.276 4.762.897 5.894 3.341.58 1.27 1.035 2.595 1.45 3.935.386 1.256 1.117 2.03 2.387 2.402a31.9 31.9 0 0 1 3.175 1.09c3.368 1.367 4.68 3.77 4.044 7.359-.22 1.243-.47 2.471-.704 3.714-.138.69 0 1.297.456 1.836.883 1.035 1.794 2.03 2.622 3.092 2.292 2.913 2.292 5.55-.014 8.463-.731.94-1.546 1.823-2.332 2.706-.649.732-.911 1.519-.718 2.513.304 1.477.607 2.982.745 4.487.249 2.858-.883 4.804-3.506 6.005-1.31.594-2.691 1.036-4.072 1.491-1.02.332-1.642.953-1.987 1.974-.497 1.478-.98 2.983-1.643 4.377-1.076 2.181-2.898 3.286-6.1 3.203Zm-13.65-9.209C47.04 56.78 56.757 47.02 56.73 34.967c-.027-11.998-9.772-21.717-21.78-21.717-12.036.014-21.754 9.774-21.74 21.8.014 12.052 9.745 21.757 21.795 21.743Z"
          fill="url(#a)"
        />
        <path
          d="M35.004 56.793c-12.036.014-21.781-9.691-21.795-21.744-.014-12.024 9.704-21.785 21.74-21.799 11.995-.014 21.753 9.72 21.78 21.717.029 12.052-9.703 21.813-21.725 21.826Zm-.014-38.587"
          fill="#fff"
        />
        <defs>
          <linearGradient id="a" x1=".027" y1="34.979" x2="69.973" y2="34.979" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EA15FF" />
            <stop offset=".132" stopColor="#CD36F8" />
            <stop offset=".691" stopColor="#54BDDD" />
            <stop offset=".936" stopColor="#24F3D2" />
          </linearGradient>
        </defs>
      </svg>
      {element}
    </div>
  )
}
