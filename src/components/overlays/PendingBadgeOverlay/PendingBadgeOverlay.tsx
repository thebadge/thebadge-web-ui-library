import React, { useEffect, useRef, useState } from 'react'
import { Box, CircularProgress, styled, Tooltip, Typography } from '@mui/material'
import { colors } from '../../../index'

const OverlayContainer = styled(Box)<{ width: number; height: number; background: string }>(
  ({ width, height, background }) => ({
    width: width,
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
    background: background,
  })
)

const ProgressContainer = styled(Box)<{ fillBackground?: boolean }>(({ fillBackground }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '87.5%',
  width: '100%',
  '& .MuiCircularProgress-circleDeterminate': {
    fill: fillBackground ? colors.blackBackground : 'none',
  },
}))

const TimeLeftContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '87.5%',
  width: '100%',
}))

const renderCircularProgressBar = (size: number, color: string, value: number) => {
  return <CircularProgress size={size} variant="determinate" value={value} thickness={4} sx={{ color }} />
}

export interface PendingBadgeOverlayProps {
  badge: React.ReactNode
  percentage: number // from 0 to 100
  timeLeft?: {
    quantity: number
    unitText: string
  }
  backgroundShadowColor?: string // default will be pink light
  progressDoneStrokeColor?: string // default will be colors.greyStroke
  progressRemainingStrokeColor?: string // default will be colors.greenLogo
}

export const PendingBadgeOverlay = (props: PendingBadgeOverlayProps) => {
  const [badgeHeight, setBadgeHeight] = useState(0)
  const [badgeWidth, setBadgeWidth] = useState(0)
  const [circularProgressSize, setCircularProgressSize] = useState(0)
  const badgeRef = useRef(null)

  useEffect(() => {
    const { clientWidth, clientHeight } = badgeRef?.current || { clientWidth: 0, clientHeight: 0 }
    setBadgeWidth(clientWidth)
    setBadgeHeight(clientHeight)
    setCircularProgressSize(clientWidth >= 200 ? clientWidth / 1.5 : clientWidth / 1.2)
  })

  return (
    <Box>
      <Box ref={badgeRef} sx={{ width: 'fit-content', height: 'fit-content' }}>
        {props.badge}
      </Box>
      <OverlayContainer
        width={badgeWidth}
        height={badgeHeight}
        background={props.backgroundShadowColor || colors.pinkLight}
      >
        <ProgressContainer fillBackground={!!props.timeLeft}>
          {/* progress still remaining (grey) */}
          {renderCircularProgressBar(
            circularProgressSize,
            props.progressRemainingStrokeColor || colors.greyStroke,
            100 + props.percentage
          )}

          <Box sx={{ position: 'absolute' }}>
            <Tooltip title={props.percentage + '%'} arrow>
              <ProgressContainer>
                {/* progress done until now (green) */}
                {renderCircularProgressBar(
                  circularProgressSize,
                  props.progressDoneStrokeColor || colors.greenLogo,
                  props.percentage
                )}

                {/* inner circle with time left */}
                {props.timeLeft ? (
                  <Box sx={{ position: 'absolute' }}>
                    <TimeLeftContainer sx={{ maxWidth: circularProgressSize / 1.5 }}>
                      <Typography variant={'h2'} component={'h2'} sx={{ textAlign: 'center' }}>
                        {props.timeLeft?.quantity}
                      </Typography>
                      <Typography
                        textTransform={'uppercase'}
                        variant="dAppTitle2"
                        fontSize={16}
                        component={'span'}
                        sx={{ textAlign: 'center' }}
                      >
                        {props.timeLeft?.unitText}
                      </Typography>
                    </TimeLeftContainer>
                  </Box>
                ) : null}
              </ProgressContainer>
            </Tooltip>
          </Box>
        </ProgressContainer>
      </OverlayContainer>
    </Box>
  )
}
