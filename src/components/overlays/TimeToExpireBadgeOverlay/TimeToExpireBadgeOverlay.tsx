import React, { useEffect, useRef, useState } from 'react'
import { Box, styled, Typography } from '@mui/material'
import { colors } from '../../../index'

const OverlayContainer = styled(Box)<{ width: number; height: number }>(({ width, height }) => ({
  width: width,
  height: height,
  position: 'absolute',
  top: 0,
  left: 0,
  background: 'transparent',
}))

const TimeLeftContainer = styled(Box)<{ width: string; background: string }>(({ width, background }) => ({
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
}))

export interface TimeToExpireBadgeOverlayProps {
  badge: React.ReactNode
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

  useEffect(() => {
    const { clientWidth, clientHeight } = badgeRef?.current || { clientWidth: 0, clientHeight: 0 }
    setBadgeWidth(clientWidth)
    setBadgeHeight(clientHeight)
    setTimeToExpireWidth(clientWidth >= 200 ? '65%' : '85%')
  })

  return (
    <Box>
      <Box ref={badgeRef} sx={{ width: 'fit-content', height: 'fit-content' }}>
        {props.badge}
      </Box>
      <OverlayContainer width={badgeWidth} height={badgeHeight}>
        {/* time left rectangle */}
        <Box>
          <TimeLeftContainer width={timeToExpireWidth} background={props.overlayBackgroundColor || colors.white}>
            <Typography
              variant={'h2'}
              component={'h2'}
              fontSize={'64px !important'}
              lineHeight={'100%'}
              sx={{ textAlign: 'center' }}
              color={props.overlayTextColor || colors.black}
              marginBottom={0.5}
            >
              {props.timeLeft?.quantity}
            </Typography>
            <Typography
              textTransform={'uppercase'}
              variant="dAppTitle3"
              fontSize={'20px !important'}
              component={'span'}
              sx={{ textAlign: 'center' }}
              lineHeight={'125%'}
              color={props.overlayTextColor || colors.greyBackground}
            >
              {props.timeLeft?.unitText}
            </Typography>
          </TimeLeftContainer>
        </Box>
      </OverlayContainer>
    </Box>
  )
}
