import React from 'react'
import './badge.scss'
import badgeBackground from '@assets/svgs/badgeBackground.svg'
import badgeQR from '@assets/svgs/badgeQR.svg'
import { LogoTheBadge } from '../../logos/LogoTheBadge/LogoTheBadge'
import { LogoTheBadgeWithText } from '../../logos/LogoTheBadgeWithText/LogoTheBadgeWithText'

enum BadgeType {
  ONCHAIN,
  OFFCHAIN,
  THIRDPARTY,
}

export interface BadgeProps {
  type: BadgeType
  title: string
  subline: string
  description: string
  iconUrl?: string
  imageUrl?: string
  onClick?: () => void
}

export const Badge = (badgeProps: BadgeProps) => {
  return (
    <div className={'badge'} onClick={badgeProps.onClick}>
      <div className={'badge__container'}>
        <div className={'badge__header'}>
          <img className={'badge__header--background-image'} src={badgeBackground} alt="badge background" />
          <span className={'badge__header--tb-logo'}>
            <LogoTheBadge size={50} />
          </span>
          <img className={'badge__header--qr-code'} src={badgeQR} alt="badge QR code" />
          <span className={'badge__header--image'}>
            {badgeProps.imageUrl ? (
              <img src={badgeProps.imageUrl} alt="badge image" />
            ) : (
              <LogoTheBadgeWithText width={182} height={62} />
            )}
          </span>
        </div>
        <div className={'badge__content'}>
          <div className={'badge__content--subline'}>{badgeProps.subline}</div>
          <div className={'badge__content--title'}>{badgeProps.title}</div>
          <div className={'badge__content--description'}>{badgeProps.description}</div>
        </div>
      </div>
    </div>
  )
}
