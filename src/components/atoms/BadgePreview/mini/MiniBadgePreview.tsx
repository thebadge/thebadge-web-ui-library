import { BadgePreviewEffects, MiniBadgePreviewProps } from '@components/atoms/BadgePreview/BadgePreviewProps'
import { LogoTheBadgeWithText } from '@components/logos/LogoTheBadgeWithText/LogoTheBadgeWithText'
import { alpha, Box, styled, Typography, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import colors from '@assets/scss/variables/_color.variables.module.scss'
import './miniBadgePreview.scss'
import { ButtonV2 } from '@components/atoms/Button/v2/Button'

const defaultBackgroundUrl =
  'https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=678&q=80'

const defaultValuesForMiniBadgePreviewProps = {
  badgeBackgroundUrl: defaultBackgroundUrl,
  title: '',
  category: '',
  description: '',
  animationOnHover: false,
  animationEffects: ['wobble', 'grow'] as BadgePreviewEffects[],
}

const MiniBadgePreviewBox = styled(Box)<{ highlightColor?: string }>(() => ({
  width: 180,
  height: 300,
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const MiniBadgePreview = (props: MiniBadgePreviewProps = defaultValuesForMiniBadgePreviewProps) => {
  const theme = useTheme()
  const palette = theme.palette
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
      sx={{
        border: `2px solid ${props.highlightColor || colors.white}`,
        background: props.selected && props.highlightColor ? `${alpha(props.highlightColor, 0.15)}` : null,
      }}
      className={'mini-badge-preview ' + (props.animationOnHover ? animationEffectClasses() : '')}
      onClick={props.onClick}
    >
      <div
        className={[
          `mini-badge-preview__container`,
          `mini-badge-preview__container--${props.textContrast ?? 'light'}`,
        ].join(' ')}
      >
        <div className={'mini-badge-preview__header'}>
          <div className={'mini-badge-preview__header--image-container'}>
            <div className={'mini-badge-preview__header--background-image'} aria-label="Badge image background">
              <span className={'mini-badge-preview__header--image'}>
                {props.imageUrl ? <img src={props.imageUrl} alt="Badge image" /> : <LogoTheBadgeWithText size={60} />}
              </span>
            </div>
          </div>
        </div>
        <Typography component={'div'} className={'mini-badge-preview__content'}>
          <div
            className={[
              `mini-badge-preview__content--category`,
              `text-max-lines--1`,
              `mini-badge-preview__content--${props.textContrast ?? 'light'}`,
            ].join(' ')}
          >
            {props.category}
          </div>
        </Typography>
      </div>
      <div className="mini-badge-preview__content--title-container">
        {props?.miniIcon}
        <h1
          className={[
            `mini-badge-preview__content--title`,
            `text-max-lines--1`,
            `mini-badge-preview__content--${props.textContrastOutside ?? 'light'}`,
          ].join(' ')}
        >
          {props.title}
        </h1>
        <h3
          className={[
            `mini-badge-preview__content--description`,
            `text-max-lines--4`,
            `mini-badge-preview__content--${props.textContrastOutside ?? 'light'}`,
          ].join(' ')}
        >
          {props.description}
        </h3>
      </div>
      {props.buttonTitle ? (
        <div className="mini-badge-preview__content--button-container">
          <ButtonV2
            backgroundColor={props.highlightColor}
            fontColor={props.highlightColor ? palette.getContrastText(props.highlightColor) : undefined}
            width={'100%'}
            fontSize={'12px'}
            height={'20px'}
          >
            {props.buttonTitle}
          </ButtonV2>
        </div>
      ) : null}
      <div className="glare" />
    </MiniBadgePreviewBox>
  )
}
