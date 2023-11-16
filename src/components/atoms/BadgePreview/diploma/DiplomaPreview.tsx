import colors from '@assets/scss/variables/_color.variables.module.scss'
import { BadgePreviewEffects, BadgeTextContrast } from '@components/atoms/BadgePreview/BadgePreviewProps'
import { LogoTheBadgeWithText } from '@components/logos/LogoTheBadgeWithText/LogoTheBadgeWithText'
import { Box, styled } from '@mui/material'
import React from 'react'
import QRCode from 'react-qr-code'
import './diplomaPreview.scss'
import defaultBackground from '@assets/svgs/badgeBackground.svg'

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
  textContrast?: BadgeTextContrast

  // Background configs
  backgroundUrl?: string
  decorationBackgroundUrl?: string

  // Issuer Config
  issuedByLabel: string
  issuedByAvatarUrl?: string

  // Certificate info
  date: string
  studentName: string
  courseName: string
  description: string | React.ReactNode

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
        className={[
          `diploma-preview__content`,
          `diploma-preview__content--${props.size}`,
          `diploma-preview__content--${props.textContrast ?? 'light'}`,
        ].join(' ')}
      >
        {props.backgroundUrl ? (
          <img
            className={`diploma-preview__content--backgroundImage`}
            src={`${props.backgroundUrl ? props.backgroundUrl : defaultBackground}`}
            alt="Badge Background"
          />
        ) : (
          <div className={`diploma-preview__content--backgroundImage`} style={{ border: '1px solid #7e7e7e' }} />
        )}
        <div
          className={[
            `diploma-preview__contai__content`,
            `diploma-preview__contai__content--${props.textContrast ?? 'light'}`,
          ].join(' ')}
        />
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
          <div className={[`diploma-preview__body--date`, `text-max-lines--${1}`].join(' ')}>{props.date}</div>
          <div className={[`diploma-preview__body--courseName`].join(' ')}>{props.courseName}</div>
          <div className={[`diploma-preview__body--studentName`].join(' ')}>{props.studentName}</div>
          <div className={[`diploma-preview__body--description`].join(' ')}>{props.description}</div>
        </div>
        {hasGlare && <div className="glare" />}
      </div>
      <div className={[`diploma-preview__decoration`].join(' ')}>
        {props.decorationBackgroundUrl ? (
          <img
            className={`diploma-preview__content--backgroundImage`}
            src={`${props.decorationBackgroundUrl ? props.decorationBackgroundUrl : defaultBackground}`}
            alt="Badge Background"
          />
        ) : (
          <div className={`diploma-preview__content--backgroundImage`} style={{ backgroundColor: '#f5f5f545' }} />
        )}
        <div className={[`diploma-preview__decoration--issuedBy`].join(' ')}>
          <span className={`diploma-preview__decoration--issuedByLabel`}>{props.issuedByLabel}</span>
          <img
            className={`diploma-preview__decoration--issuedByImage`}
            src={`${props.issuedByAvatarUrl ? props.issuedByAvatarUrl : defaultBackground}`}
            alt="Badge Background"
          />
        </div>
      </div>
      <div className={`diploma-preview__footer`}>
        <span className={`diploma-preview__footer--helperText`}>
          theaccountantquits.eth has confirmed the identity xxx
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="650" height="65" viewBox="0 0 650 65" fill="none">
          <mask
            id="path-1-outside-1_7949_11921"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="650"
            height="65"
            fill="black"
          >
            <rect fill="white" width="650" height="65" />
            <path d="M34.9942 64C28.0662 64 22.0482 62.7037 16.9403 60.1111C11.8911 57.4609 7.95736 53.7737 5.13919 49.0494C2.37973 44.3251 1 38.7942 1 32.4568C1 26.1193 2.37973 20.6173 5.13919 15.9506C7.95736 11.2263 11.8911 7.5679 16.9403 4.97531C22.0482 2.3251 28.0662 1 34.9942 1C39.2214 1 43.0964 1.54732 46.6191 2.64197C50.2005 3.67901 53.1655 5.17695 55.514 7.1358L49.9657 21.7407C47.3237 20.0123 44.9458 18.8313 42.8322 18.1975C40.7186 17.5062 38.3407 17.1605 35.6987 17.1605C30.943 17.1605 27.2736 18.4856 24.6902 21.1358C22.1656 23.7284 20.9033 27.5021 20.9033 32.4568C20.9033 37.4691 22.1656 41.3004 24.6902 43.9506C27.2736 46.5432 30.943 47.8395 35.6987 47.8395C38.3407 47.8395 40.7186 47.5226 42.8322 46.8889C44.9458 46.1975 47.3237 44.9877 49.9657 43.2593L55.514 57.8642C53.1655 59.823 50.2005 61.3498 46.6191 62.4444C43.0964 63.4815 39.2214 64 34.9942 64ZM70.7118 62.963L70.7118 2.03703L116.771 2.03703V16.2099L88.8538 16.2099V24.9383L114.658 24.9383V39.1111L88.8538 39.1111L88.8538 48.7901L116.771 48.7901V62.963L70.7118 62.963ZM132.218 62.963V2.03703L162.778 2.03703C170.117 2.03703 175.782 3.76543 179.775 7.22222C183.767 10.679 185.763 15.4609 185.763 21.5679C185.763 25.6008 184.853 29.0864 183.033 32.0247C181.272 34.9053 178.659 37.1523 175.195 38.7654C171.731 40.321 167.533 41.0988 162.602 41.0988L163.218 38.5926H168.414C170.997 38.5926 173.317 39.3416 175.371 40.8395C177.426 42.2798 179.129 44.1811 180.479 46.5432L190.079 62.963H169.207L158.551 43.7778C158.081 42.9136 157.318 42.3086 156.261 41.963C155.204 41.5597 154.118 41.358 153.002 41.358H151.241V62.963H132.218ZM151.241 28.3086H159.343C162.044 28.3086 164.099 27.8189 165.508 26.8395C166.917 25.8025 167.621 24.2469 167.621 22.1728C167.621 20.1564 166.917 18.6584 165.508 17.679C164.099 16.6996 162.044 16.2099 159.343 16.2099H151.241V28.3086ZM215.724 62.963V17.0741L197.758 17.0741V2.03703L252.712 2.03703V17.0741H234.746V62.963H215.724ZM266.842 62.963V2.03703L285.864 2.03703V62.963H266.842ZM304.009 62.963V2.03703L349.1 2.03703V16.2099L323.032 16.2099V25.716L346.986 25.716V39.8889L323.032 39.8889V62.963H304.009ZM363.881 62.963V2.03703L382.904 2.03703V62.963L363.881 62.963ZM433.546 64C426.618 64 420.6 62.7037 415.492 60.1111C410.442 57.4609 406.509 53.7737 403.691 49.0494C400.931 44.3251 399.551 38.7942 399.551 32.4568C399.551 26.1193 400.931 20.6173 403.691 15.9506C406.509 11.2263 410.442 7.5679 415.492 4.97531C420.6 2.3251 426.618 1 433.546 1C437.773 1 441.648 1.54732 445.171 2.64197C448.752 3.67901 451.717 5.17695 454.065 7.1358L448.517 21.7407C445.875 20.0123 443.497 18.8313 441.384 18.1975C439.27 17.5062 436.892 17.1605 434.25 17.1605C429.494 17.1605 425.825 18.4856 423.242 21.1358C420.717 23.7284 419.455 27.5021 419.455 32.4568C419.455 37.4691 420.717 41.3004 423.242 43.9506C425.825 46.5432 429.494 47.8395 434.25 47.8395C436.892 47.8395 439.27 47.5226 441.384 46.8889C443.497 46.1975 445.875 44.9877 448.517 43.2593L454.065 57.8642C451.717 59.823 448.752 61.3498 445.171 62.4444C441.648 63.4815 437.773 64 433.546 64ZM460.301 62.963L489.804 2.03703L505.216 2.03703L534.894 62.963H515.872L508.474 46.4568L515.608 51.642L479.588 51.642L486.633 46.4568L479.236 62.963L460.301 62.963ZM497.466 21.0494L488.395 42.3951L485.753 37.5556L509.443 37.5556L507.065 42.3951L497.906 21.0494H497.466ZM551.823 62.963V17.0741L533.857 17.0741V2.03703L588.811 2.03703V17.0741L570.845 17.0741V62.963L551.823 62.963ZM602.941 62.963V2.03703L649 2.03703V16.2099L621.083 16.2099V24.9383L646.886 24.9383V39.1111L621.083 39.1111V48.7901L649 48.7901V62.963L602.941 62.963Z" />
          </mask>
          <path
            d="M34.9942 64C28.0662 64 22.0482 62.7037 16.9403 60.1111C11.8911 57.4609 7.95736 53.7737 5.13919 49.0494C2.37973 44.3251 1 38.7942 1 32.4568C1 26.1193 2.37973 20.6173 5.13919 15.9506C7.95736 11.2263 11.8911 7.5679 16.9403 4.97531C22.0482 2.3251 28.0662 1 34.9942 1C39.2214 1 43.0964 1.54732 46.6191 2.64197C50.2005 3.67901 53.1655 5.17695 55.514 7.1358L49.9657 21.7407C47.3237 20.0123 44.9458 18.8313 42.8322 18.1975C40.7186 17.5062 38.3407 17.1605 35.6987 17.1605C30.943 17.1605 27.2736 18.4856 24.6902 21.1358C22.1656 23.7284 20.9033 27.5021 20.9033 32.4568C20.9033 37.4691 22.1656 41.3004 24.6902 43.9506C27.2736 46.5432 30.943 47.8395 35.6987 47.8395C38.3407 47.8395 40.7186 47.5226 42.8322 46.8889C44.9458 46.1975 47.3237 44.9877 49.9657 43.2593L55.514 57.8642C53.1655 59.823 50.2005 61.3498 46.6191 62.4444C43.0964 63.4815 39.2214 64 34.9942 64ZM70.7118 62.963L70.7118 2.03703L116.771 2.03703V16.2099L88.8538 16.2099V24.9383L114.658 24.9383V39.1111L88.8538 39.1111L88.8538 48.7901L116.771 48.7901V62.963L70.7118 62.963ZM132.218 62.963V2.03703L162.778 2.03703C170.117 2.03703 175.782 3.76543 179.775 7.22222C183.767 10.679 185.763 15.4609 185.763 21.5679C185.763 25.6008 184.853 29.0864 183.033 32.0247C181.272 34.9053 178.659 37.1523 175.195 38.7654C171.731 40.321 167.533 41.0988 162.602 41.0988L163.218 38.5926H168.414C170.997 38.5926 173.317 39.3416 175.371 40.8395C177.426 42.2798 179.129 44.1811 180.479 46.5432L190.079 62.963H169.207L158.551 43.7778C158.081 42.9136 157.318 42.3086 156.261 41.963C155.204 41.5597 154.118 41.358 153.002 41.358H151.241V62.963H132.218ZM151.241 28.3086H159.343C162.044 28.3086 164.099 27.8189 165.508 26.8395C166.917 25.8025 167.621 24.2469 167.621 22.1728C167.621 20.1564 166.917 18.6584 165.508 17.679C164.099 16.6996 162.044 16.2099 159.343 16.2099H151.241V28.3086ZM215.724 62.963V17.0741L197.758 17.0741V2.03703L252.712 2.03703V17.0741H234.746V62.963H215.724ZM266.842 62.963V2.03703L285.864 2.03703V62.963H266.842ZM304.009 62.963V2.03703L349.1 2.03703V16.2099L323.032 16.2099V25.716L346.986 25.716V39.8889L323.032 39.8889V62.963H304.009ZM363.881 62.963V2.03703L382.904 2.03703V62.963L363.881 62.963ZM433.546 64C426.618 64 420.6 62.7037 415.492 60.1111C410.442 57.4609 406.509 53.7737 403.691 49.0494C400.931 44.3251 399.551 38.7942 399.551 32.4568C399.551 26.1193 400.931 20.6173 403.691 15.9506C406.509 11.2263 410.442 7.5679 415.492 4.97531C420.6 2.3251 426.618 1 433.546 1C437.773 1 441.648 1.54732 445.171 2.64197C448.752 3.67901 451.717 5.17695 454.065 7.1358L448.517 21.7407C445.875 20.0123 443.497 18.8313 441.384 18.1975C439.27 17.5062 436.892 17.1605 434.25 17.1605C429.494 17.1605 425.825 18.4856 423.242 21.1358C420.717 23.7284 419.455 27.5021 419.455 32.4568C419.455 37.4691 420.717 41.3004 423.242 43.9506C425.825 46.5432 429.494 47.8395 434.25 47.8395C436.892 47.8395 439.27 47.5226 441.384 46.8889C443.497 46.1975 445.875 44.9877 448.517 43.2593L454.065 57.8642C451.717 59.823 448.752 61.3498 445.171 62.4444C441.648 63.4815 437.773 64 433.546 64ZM460.301 62.963L489.804 2.03703L505.216 2.03703L534.894 62.963H515.872L508.474 46.4568L515.608 51.642L479.588 51.642L486.633 46.4568L479.236 62.963L460.301 62.963ZM497.466 21.0494L488.395 42.3951L485.753 37.5556L509.443 37.5556L507.065 42.3951L497.906 21.0494H497.466ZM551.823 62.963V17.0741L533.857 17.0741V2.03703L588.811 2.03703V17.0741L570.845 17.0741V62.963L551.823 62.963ZM602.941 62.963V2.03703L649 2.03703V16.2099L621.083 16.2099V24.9383L646.886 24.9383V39.1111L621.083 39.1111V48.7901L649 48.7901V62.963L602.941 62.963Z"
            stroke="black"
            strokeOpacity="0.1"
            strokeWidth="2"
            mask="url(#path-1-outside-1_7949_11921)"
          />
        </svg>
      </div>
    </BadgePreviewBox>
  )
}
