import colors from '@assets/scss/variables/_color.variables.module.scss'
import { BadgePreviewEffects, BadgeTextContrast } from '@components/atoms/BadgePreview/BadgePreviewProps'
import { LogoTheBadgeWithText } from '@components/logos/LogoTheBadgeWithText/LogoTheBadgeWithText'
import { Box, Divider, styled } from '@mui/material'
import React from 'react'
import QRCode from 'react-qr-code'
import './diplomaPreview.scss'
import whiteBackground from '@assets/svgs/whiteBackground.svg'
import blueBackground from '@assets/svgs/blueBackground.svg'
import { CertificateWaterMark } from '@components/icons/CertificateWaterMark/CertificateWaterMark'
import { LogoTheBadge } from '@components/logos/LogoTheBadge/LogoTheBadge'

const BadgePreviewBox = styled(Box, { shouldForwardProp: (propName) => propName !== 'size' })<{
  size: { width: number; height: number }
}>(({ size }) => ({
  display: 'flex',
  flexDirection: 'row',
  width: size.width,
  height: size.height,
}))

export interface DiplomaPreviewProps {
  badgeUrl?: string
  textContrast?: 'light' | 'dark'

  // background configs
  backgroundUrl?: string
  decorationBackgroundUrl?: string

  // issuer Config
  issuedByLabel: string
  issuedByAvatarUrl?: string

  // certificate info
  date: string
  studentName: string
  completionLabel: string
  courseName: string
  description?: string | React.ReactNode

  // certificate sign
  signatureImageUrl?: string
  signerTitle?: string
  signerSubline?: string

  // identity confirmation
  identityValidator?: string
  identityValidationLabel?: string
  identityValidated?: string

  onClick?: () => void // will be shared among the button and the badge

  animationOnHover?: boolean
  animationEffects: BadgePreviewEffects[]
}

export const DiplomaPreview = (props: DiplomaPreviewProps) => {
  const badgeLogoSize = () => {
    return 150
  }

  const getLogoFillColor = () => {
    const { textContrast } = props
    switch (textContrast) {
      case 'light':
        return colors.black
      case 'dark':
        return colors.white
      default:
        return colors.black
    }
  }

  const badgeQRSize = (): number => {
    return 48
  }

  const animationEffectClasses = () => {
    return props.animationEffects && props.animationEffects.map((effect) => `diploma-preview--${effect}`).join(' ')
  }

  const hasGlare = props.animationEffects.includes('glare')

  return (
    <BadgePreviewBox
      size={{ width: 655, height: 400 }}
      className={'diploma-preview ' + (props.animationOnHover ? animationEffectClasses() : '')}
      onClick={props.onClick}
    >
      <div
        className={[`diploma-preview__content`, `diploma-preview__content--${props.textContrast ?? 'light'}`].join(' ')}
      >
        {props.backgroundUrl ? (
          <img
            className={`diploma-preview__content--backgroundImage`}
            src={`${props.backgroundUrl}`}
            alt="Badge Background"
          />
        ) : (
          <img
            className={`diploma-preview__content--backgroundImage`}
            src={`${whiteBackground}`}
            alt="Badge Background"
            style={{ maxWidth: 'none', width: 'auto' }}
          />
        )}

        <div className={[].join(' ')} />
        <div className={'diploma-preview__header'}>
          <div className={'diploma-preview__header--logo-qr-container'}>
            <span className={[`diploma-preview__header--tb-logo`].join(' ')}>
              <LogoTheBadgeWithText fill={getLogoFillColor()} size={badgeLogoSize()} />
            </span>
            {props.badgeUrl ? (
              <div className={`diploma-preview__header--qr-code`}>
                <QRCode size={badgeQRSize()} value={props.badgeUrl} viewBox={`0 0 ${badgeQRSize()} ${badgeQRSize()}`} />
              </div>
            ) : (
              <div id="qr-placeholder" style={{ height: `${badgeQRSize()}px`, width: `${badgeQRSize()}px` }} />
            )}
          </div>
        </div>

        {/* Badge Content - Tittle - Category - Description */}
        <div className={`diploma-preview__body`}>
          <Box className={[`diploma-preview__body--date`, `text-max-lines--${1}`].join(' ')} color={getLogoFillColor()}>
            {props.date}
          </Box>

          <Box className={[`diploma-preview__body--student-name`].join(' ')} color={getLogoFillColor()}>
            {props.studentName}
          </Box>
          <Divider sx={{ borderColor: getLogoFillColor() }} />
          <Box sx={{ fontSize: '12px', marginTop: '8px' }}>{props.completionLabel}</Box>
          <Box className={[`diploma-preview__body--course-name`].join(' ')} color={getLogoFillColor()}>
            {props.courseName}
          </Box>

          {props.description && (
            <div className={[`diploma-preview__body--description`].join(' ')}>{props.description}</div>
          )}

          <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
            {props.signatureImageUrl ? (
              <img
                className={`diploma-preview__body--signature-image`}
                src={`${props.signatureImageUrl}`}
                alt="Badge Background"
              />
            ) : null}

            <Box className={`diploma-preview__body--signer-title`} color={getLogoFillColor()}>
              {props.signerTitle}
            </Box>
            <Box className={`diploma-preview__body--signer-subline`} color={getLogoFillColor()}>
              {props.signerSubline}
            </Box>
          </Box>
        </div>
        {hasGlare && <div className="glare" />}
      </div>
      <div className={[`diploma-preview__decoration`].join(' ')}>
        {props.decorationBackgroundUrl ? (
          <img
            className={`diploma-preview__content--backgroundImage`}
            src={`${props.decorationBackgroundUrl}`}
            alt="Badge Background"
          />
        ) : (
          <img
            className={`diploma-preview__content--backgroundImage`}
            src={`${blueBackground}`}
            alt="Badge Background"
            style={{ maxWidth: 'none', width: 'auto' }}
          />
        )}

        <div className={[`diploma-preview__decoration--issuedBy`].join(' ')}>
          <span className={`diploma-preview__decoration--issuedByLabel`}>{props.issuedByLabel}</span>
          {props.issuedByAvatarUrl ? (
            <img
              className={`diploma-preview__decoration--issuedByImage`}
              src={props.issuedByAvatarUrl}
              alt="Badge Background"
            />
          ) : (
            <span
              className={`diploma-preview__decoration--issuedByImage`}
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <LogoTheBadge size={64} />
            </span>
          )}
        </div>
      </div>
      <div className={`diploma-preview__footer`}>
        {props.identityValidator && props.identityValidated ? (
          <Box className={`diploma-preview__footer--helperText`} color={getLogoFillColor()}>
            {props.identityValidator} {props.identityValidationLabel} {props.identityValidated}
          </Box>
        ) : null}
        <CertificateWaterMark color={getLogoFillColor()} />
      </div>
    </BadgePreviewBox>
  )
}
