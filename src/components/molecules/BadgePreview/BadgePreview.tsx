import React from 'react'
import './badgePreview.scss'
import badgeBackground from '@assets/svgs/badgeBackground.svg'
import { LogoTheBadge } from '@components/logos/LogoTheBadge/LogoTheBadge'
import { LogoTheBadgeWithText } from '@components/logos/LogoTheBadgeWithText/LogoTheBadgeWithText'
import QRCode from 'react-qr-code'
import { Box, styled } from '@mui/material'
import { BadgeType } from '@businessLogic/badgeType'

export interface BadgePreviewProps {
  size: number
  type: BadgeType
  badgeUrl: string
  title: string
  subline: string
  description: string
  iconUrl?: string
  imageUrl?: string
  onClick?: () => void
}

const defaultValuesForBadgePreviewProps = {
  size: 320,
  type: BadgeType.OFFCHAIN,
  badgeUrl: 'https://www.thebadge.xyz/',
  title: '',
  subline: '',
  description: '',
}

const BadgePreviewBox = styled(Box)<{ size: number }>(({ theme, size = 320 }) => ({
  width: size,
  height: size * 1.6,
  margin: theme.spacing(2),
}))

export const BadgePreview = (badgePreviewProps: BadgePreviewProps = defaultValuesForBadgePreviewProps) => {
  const badgeSize = () => {
    const badgePreviewPropsSize = badgePreviewProps.size
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

  return (
    <BadgePreviewBox size={badgeSize()} className={'badge'} onClick={badgePreviewProps.onClick}>
      <div className={'badge__container'}>
        <div className={'badge__header'}>
          <img className={'badge__header--background-image'} src={badgeBackground} alt="badge background" />
          <span className={'badge__header--tb-logo'}>
            <LogoTheBadge size={50} />
          </span>
          <div className={'badge__header--qr-code'}>
            <QRCode
              size={256}
              style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
              value={badgePreviewProps.badgeUrl}
              viewBox={`0 0 256 256`}
            />
          </div>
          <span className={'badge__header--image'}>
            {badgePreviewProps.imageUrl ? (
              <img src={badgePreviewProps.imageUrl} alt="Badge image" />
            ) : (
              <LogoTheBadgeWithText size={badgeImageSize()} />
            )}
          </span>
        </div>
        <div className={'badge__content'}>
          <div className={'badge__content--subline'}>{badgePreviewProps.subline}</div>
          <div className={'badge__content--title'}>{badgePreviewProps.title}</div>
          <div className={'badge__content--description'}>{badgePreviewProps.description}</div>
        </div>
      </div>
    </BadgePreviewBox>
  )
}
