import React, { useRef } from 'react'
import './badgePreview.scss'
import badgeBackground from '@assets/svgs/badgeBackground.svg'
import { LogoTheBadge } from '../../logos/LogoTheBadge/LogoTheBadge'
import { LogoTheBadgeWithText } from '../../logos/LogoTheBadgeWithText/LogoTheBadgeWithText'
import QRCode from "react-qr-code";
import { Box, styled } from '@mui/material'

enum BadgeType {
  ONCHAIN,
  OFFCHAIN,
  THIRDPARTY,
}

export interface BadgeProps {
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

const BadgePreviewBox = styled(Box)<{ size: number }>(({ theme, size = 320}) => ({
  width: size,
  height: size*1.6,
  margin: theme.spacing(2),
}));

const defaultValuesForBadgeProps = {
  size: 320,
  type: BadgeType.OFFCHAIN,
  badgeUrl: 'https://www.thebadge.xyz/',
  title: '',
  subline: '',
  description: '',
}

export const BadgePreview = (badgeProps: BadgeProps = defaultValuesForBadgeProps) => {

  const badgeSize = () => {
    const badgePropsSize = badgeProps.size
    if(!badgePropsSize || badgePropsSize < 200) {
      return 200 // min value
    }
    if (badgePropsSize > 900) {
      return 900 // max value
    }
    return badgePropsSize
  }

  const badgeImageSize = () => {
    return badgeSize() / 2
  }

  return (
    <BadgePreviewBox size={badgeSize()} className={'badge'} onClick={badgeProps.onClick}>
      <div className={'badge__container'}>
        <div className={'badge__header'}>
          <img className={'badge__header--background-image'} src={badgeBackground} alt="badge background" />
          <span className={'badge__header--tb-logo'}>
            <LogoTheBadge size={50} />
          </span>
          <div className={'badge__header--qr-code'}>
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={badgeProps.badgeUrl}
              viewBox={`0 0 256 256`}
            />
          </div>
          <span className={'badge__header--image'}>
            {badgeProps.imageUrl ? (
              <img src={badgeProps.imageUrl} alt="badge image" />
            ) : (
              <LogoTheBadgeWithText size={badgeImageSize()} />
            )}
          </span>
        </div>
        <div className={'badge__content'}>
          <div className={'badge__content--subline'}>{badgeProps.subline}</div>
          <div className={'badge__content--title'}>{badgeProps.title}</div>
          <div className={'badge__content--description'}>{badgeProps.description}</div>
        </div>
      </div>
    </BadgePreviewBox>
  )
}
