import { BadgePreviewEffects, MiniBadgePreviewProps } from '@components/atoms/BadgePreview/BadgePreviewProps'
import { LogoTheBadgeWithText } from '@components/logos/LogoTheBadgeWithText/LogoTheBadgeWithText'
import { alpha, Box, Stack, styled, Typography, useTheme } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
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

const MiniBadgePreviewBox = styled(Box, {
  shouldForwardProp: (propName) => propName !== 'hasActionButton' && propName !== 'hasIcon',
})<{ hasActionButton: boolean; hasIcon: boolean }>(({ hasActionButton, hasIcon }) => ({
  width: 180,
  height: 250 + (hasIcon ? 25 : 0) + (hasActionButton ? 25 : 0),
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '2px',
}))

export const MiniBadgePreview = (props: MiniBadgePreviewProps = defaultValuesForMiniBadgePreviewProps) => {
  const theme = useTheme()
  const palette = theme.palette
  const descriptionRef = useRef<HTMLHeadingElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [descriptionMaxLines, setDescriptionMaxLines] = useState(3)

  useEffect(() => {
    // As the background is made with .scss, we add the variable to be able
    // to use the given url on it
    document.documentElement.style.setProperty(
      '--badgeBackgroundUrl',
      `url(${props.badgeBackgroundUrl ? props.badgeBackgroundUrl : defaultBackgroundUrl})`
    )
  }, [props.badgeBackgroundUrl])

  useEffect(() => {
    if (!titleRef.current) return
    // This useEffect determines how many lines should be displayed for the description based on the height of the title element.
    const lineHeight = parseFloat(getComputedStyle(titleRef.current).lineHeight)
    const textHeight = titleRef.current.offsetHeight
    const numberOfLines = Math.round(textHeight / lineHeight)
    // The title element is hardcoded to be NOT more than 2 lines
    if (numberOfLines === 2) setDescriptionMaxLines(2)
    else setDescriptionMaxLines(3)
  }, [titleRef.current, props.title])

  const animationEffectClasses = () => {
    return props.animationEffects && props.animationEffects.map((effect) => `mini-badge-preview--${effect}`).join(' ')
  }

  return (
    <MiniBadgePreviewBox
      sx={{
        border: `2px solid ${props.highlightColor || colors.white}`,
        background: props.selected && props.highlightColor ? `${alpha(props.highlightColor, 0.15)}` : null,
      }}
      hasActionButton={!!props.buttonTitle}
      hasIcon={!!props.miniIcon}
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
          <Box
            sx={{ my: 0.5 }}
            className={[
              `mini-badge-preview__content--category`,
              `text-max-lines--1`,
              `mini-badge-preview__content--${props.textContrast ?? 'light'}`,
            ].join(' ')}
          >
            {props.category}
          </Box>
        </Typography>
      </div>
      <Stack sx={{ mt: 1, mr: 'auto', gap: 0.5 }} flex={1} maxWidth={'100%'}>
        {props?.miniIcon}
        <Stack sx={{ ml: '2px', gap: 0.5 }}>
          <h1
            ref={titleRef}
            className={[
              `mini-badge-preview__content--title`,
              `text-max-lines--2`,
              `mini-badge-preview__content--${props.textContrastOutside ?? 'light'}`,
            ].join(' ')}
          >
            {props.title}
          </h1>
          <h3
            ref={descriptionRef}
            className={[
              `mini-badge-preview__content--description`,
              `text-max-lines--${descriptionMaxLines}`,
              `mini-badge-preview__content--${props.textContrastOutside ?? 'light'}`,
            ].join(' ')}
          >
            {props.description}
          </h3>
        </Stack>
      </Stack>
      {props.buttonTitle ? (
        <Box className="mini-badge-preview__content--button-container">
          <ButtonV2
            backgroundColor={props.highlightColor}
            fontColor={props.highlightColor ? palette.getContrastText(props.highlightColor) : undefined}
            width={'100%'}
            sx={{ fontSize: '12px !important' }}
            height={'20px'}
          >
            {props.buttonTitle}
          </ButtonV2>
        </Box>
      ) : null}
      {/*<div className="glare" />*/}
    </MiniBadgePreviewBox>
  )
}
