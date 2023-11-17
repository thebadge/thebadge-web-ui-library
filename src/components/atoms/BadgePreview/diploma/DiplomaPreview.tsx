import colors from '@assets/scss/variables/_color.variables.module.scss'
import { BadgePreviewEffects } from '@components/atoms/BadgePreview/BadgePreviewProps'
import { LogoTheBadgeWithText } from '@components/logos/LogoTheBadgeWithText/LogoTheBadgeWithText'
import { Box, Divider, styled, Tooltip } from '@mui/material'
import React from 'react'
import QRCode from 'react-qr-code'
import './diplomaPreview.scss'
import whiteBackground from '@assets/svgs/whiteBackground.svg'
import blueBackground from '@assets/svgs/blueBackground.svg'
import { CertificateWaterMark } from '@components/icons/CertificateWaterMark/CertificateWaterMark'
import { LogoTheBadge } from '@components/logos/LogoTheBadge/LogoTheBadge'
import { IconVerified } from '@components/icons/IconVerified/IconVerified'

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

  // issuer
  issuedByLabel: string
  issuerName?: string
  issuerAvatarUrl?: string
  issuerProfileUrl?: string
  issuerIsVerified?: boolean

  // certificate info
  date: string
  studentName: string
  courseName: string
  description: string | React.ReactNode

  // certificate sign
  signatureImageUrl?: string
  signerTitle?: string
  signerSubline?: string

  // footer
  footerText?: string

  onClick?: () => void // will be shared among the button and the diploma

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
            alt="Diploma Background"
          />
        ) : (
          <img
            className={`diploma-preview__content--backgroundImage`}
            src={`${whiteBackground}`}
            alt="Diploma Background"
            style={{ maxWidth: 'none', width: 'auto' }}
          />
        )}

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

        {/* Diploma Content - Title - Description - Signature */}
        <div className={`diploma-preview__body`}>
          <Box className={[`diploma-preview__body--date`, `text-max-lines--${1}`].join(' ')} color={getLogoFillColor()}>
            {props.date}
          </Box>

          <Box className={[`diploma-preview__body--student-name`].join(' ')} color={getLogoFillColor()}>
            {props.studentName}
          </Box>
          <Divider sx={{ borderColor: getLogoFillColor() }} />
          <Box className={[`diploma-preview__body--description`].join(' ')} color={getLogoFillColor()}>
            {props.description}
          </Box>
          <Box className={[`diploma-preview__body--course-name`].join(' ')} color={getLogoFillColor()}>
            {props.courseName}
          </Box>

          <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
            {props.signatureImageUrl && (
              <img
                className={`diploma-preview__body--signature-image`}
                src={`${props.signatureImageUrl}`}
                alt="Diploma signature"
              />
            )}

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
            alt="Diploma Background"
          />
        ) : (
          <img
            className={`diploma-preview__content--backgroundImage`}
            src={`${blueBackground}`}
            alt="Diploma Background"
            style={{ maxWidth: 'none', width: 'auto' }}
          />
        )}

        <div className={[`diploma-preview__decoration--issuedBy`].join(' ')}>
          <span className={`diploma-preview__decoration--issuedByLabel`}>{props.issuedByLabel}</span>
          <a href={props.issuerProfileUrl} target={'_blank'} rel="noreferrer">
            <Tooltip title={props.issuerName} arrow>
              {props.issuerAvatarUrl ? (
                <span className={`diploma-preview__decoration--issuedByContainer`}>
                  <img
                    className={`diploma-preview__decoration--issuerImage`}
                    src={props.issuerAvatarUrl}
                    alt="Diploma issuer"
                  />
                  {props.issuerIsVerified && (
                    <span className={`diploma-preview__decoration--iconVerified`}>
                      <IconVerified color={getLogoFillColor()} />
                    </span>
                  )}
                </span>
              ) : (
                <span className={`diploma-preview__decoration--issuedByContainer`}>
                  <LogoTheBadge className={`diploma-preview__decoration--issuerImage`} size={64} />
                  {props.issuerIsVerified && (
                    <span className={`diploma-preview__decoration--iconVerified`}>
                      <IconVerified color={getLogoFillColor()} />
                    </span>
                  )}
                </span>
              )}
            </Tooltip>
          </a>
        </div>
      </div>
      <div className={`diploma-preview__footer`}>
        {props.footerText && (
          <Box className={`diploma-preview__footer--helperText`} color={getLogoFillColor()}>
            {props.footerText}
          </Box>
        )}
        <CertificateWaterMark color={getLogoFillColor()} />
      </div>
    </BadgePreviewBox>
  )
}
