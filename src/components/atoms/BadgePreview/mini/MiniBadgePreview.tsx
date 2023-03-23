import { BadgePreviewEffects, BadgePreviewProps, BadgeSize } from '@components/atoms/BadgePreview/BadgePreviewProps'
import { LogoTheBadgeWithText } from '@components/logos/LogoTheBadgeWithText/LogoTheBadgeWithText'
import { Box, styled, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import colors from '@assets/scss/variables/_color.variables.module.scss'
import './miniBadgePreview.scss'

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

const MiniBadgePreviewBox = styled(Box)<{ highlightColor?: string }>(({highlightColor}) => ({
  width: 180,
  height: 250,
  border: `2px solid ${highlightColor||colors.white}`,
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 12px',
}))

export const MiniBadgePreview = (props: BadgePreviewProps = defaultValuesForBadgePreviewProps) => {
  useEffect(() => {
    // As the background is made with .scss, we add the variable to be able
    // to use the given url on it
    document.documentElement.style.setProperty(
      '--badgeBackgroundUrl',
      `url(${props.badgeBackgroundUrl ? props.badgeBackgroundUrl : defaultBackgroundUrl})`
    )
  }, [props.badgeBackgroundUrl])

  const animationEffectClasses = () => {
    return props.animationEffects && props.animationEffects.map((effect) => `mini-badge-preview--${effect}`).join(' ')
  }

  return (
    <MiniBadgePreviewBox
      highlightColor={props.highlightColor}
      className={'mini-badge-preview ' + (props.animationOnHover ? animationEffectClasses() : '')}
      onClick={props.onClick}
    >
      <div
        className={[
          `mini-badge-preview__container`,
          `mini-badge-preview__container--${props.size}`,
          `mini-badge-preview__container--${props.textContrast ?? 'light'}`,
        ].join(' ')}
      >
        <div className={'mini-badge-preview__header'}>
          <div
            className={`mini-badge-preview__header--image-container mini-badge-preview__header--image-container--${props.size}`}
          >
            <div className={'mini-badge-preview__header--background-image'} aria-label="Badge image background">
              <span className={'mini-badge-preview__header--image'}>
                {props.imageUrl ? (
                  <img src={props.imageUrl} alt="Badge image" />
                ) : (
                  <LogoTheBadgeWithText size={60} />
                )}
              </span>
            </div>
          </div>
        </div>
        <Typography component={'div'} className={`mini-badge-preview__content mini-badge-preview__content--${props.size}`}>
          <div
            className={[
              `mini-badge-preview__content--title`,
              `text-max-lines--1`,
              `mini-badge-preview__content--${props.textContrast ?? 'light'}`
            ].join(' ')}
          >
            {props.title}
          </div>
          <div
            className={[
              `mini-badge-preview__content--category`,
              `text-max-lines--1`,
              `mini-badge-preview__content--${props.textContrast ?? 'light'}`
            ].join(' ')}
          >
            {props.category}
          </div>
        </Typography>
      </div>
      <div
        className={[
          `mini-badge-preview__content--description`,
          `text-max-lines--4`,
          `mini-badge-preview__content--${props.textContrastOutside ?? 'light'}`
        ].join(' ')}
      >
        {props.description}
      </div>
      <div className="glare" />
    </MiniBadgePreviewBox>
  )
}
