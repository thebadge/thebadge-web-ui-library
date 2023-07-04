import React, { useEffect, useRef, useState } from 'react'
import { Box, styled, Typography } from '@mui/material'
import { colors } from '../../../index'
import { BadgeTextContrast } from '@components/atoms/BadgePreview/BadgePreviewProps'

const OverlayContainer = styled(Box)<{ width: number; height: number }>(({ width, height }) => ({
  width: width,
  height: height,
  position: 'absolute',
  top: 0,
  left: 0,
  background: 'transparent',
}))

const TimeLeftContainer = styled(Box)<{ width: string; background: string; shadowColor: string }>(
  ({ width, background, shadowColor }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background,
    bottom: 0,
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0,
    width,
    padding: 8,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    boxShadow: `-5px 0 5px -5px ${shadowColor}, 5px 0 5px -5px ${shadowColor}`,
  })
)

export interface TimeToExpireBadgeOverlayProps {
  badge: React.ReactNode
  badgeTextContrast: BadgeTextContrast
  timeLeft: {
    quantity: number
    unitText: string
  }
  overlayBackgroundColor?: string // default will be colors.white
  overlayQuantityColor?: string // default will be colors.black
  overlayTextColor?: string // default will be colors.greyBackground
}

export const TimeToExpireBadgeOverlay = (props: TimeToExpireBadgeOverlayProps) => {
  const [badgeHeight, setBadgeHeight] = useState(0)
  const [badgeWidth, setBadgeWidth] = useState(0)
  const [timeToExpireWidth, setTimeToExpireWidth] = useState('0')
  const badgeRef = useRef(null)

  const getShadowColor = () => {
    const { badgeTextContrast } = props
    switch (badgeTextContrast) {
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

  useEffect(() => {
    const { clientWidth, clientHeight } = badgeRef?.current || { clientWidth: 0, clientHeight: 0 }
    setBadgeWidth(clientWidth)
    setBadgeHeight(clientHeight)
    setTimeToExpireWidth(clientWidth >= 200 ? '60%' : '75%')
  })

  return (
    <Box>
      <Box ref={badgeRef} sx={{ width: 'fit-content', height: 'fit-content' }}>
        {props.badge}
      </Box>
      <OverlayContainer width={badgeWidth} height={badgeHeight}>
        {/* time left rectangle */}
        <TimeLeftContainer
          width={timeToExpireWidth}
          background={props.overlayBackgroundColor || colors.white}
          shadowColor={getShadowColor()}
        >
          <Typography
            variant={'h2'}
            component={'h2'}
            lineHeight={'100%'}
            sx={{ textAlign: 'center' }}
            color={props.overlayTextColor || colors.black}
            marginBottom={0.5}
          >
            {props.timeLeft?.quantity}
          </Typography>
          <Typography
            textTransform={'uppercase'}
            variant="dAppTitle2"
            fontSize={16}
            component={'span'}
            sx={{ textAlign: 'center' }}
            lineHeight={'125%'}
            color={props.overlayTextColor || colors.greyBackground}
          >
            {props.timeLeft?.unitText}
          </Typography>
        </TimeLeftContainer>
      </OverlayContainer>
    </Box>
  )
}
