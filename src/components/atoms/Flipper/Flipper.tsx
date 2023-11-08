'use client'

import React from 'react'
import { Box, Stack, styled, SxProps, Theme } from '@mui/material'

const FlipperContainer = styled(Stack)(() => ({
  alignItems: 'center',
  justifyContent: 'center',
  perspective: '1000px',
  position: 'relative',
  width: '200px',
  height: '320px',
  '&:hover': {
    '& .back': {
      transform: 'rotateY(0deg)',
    },
    '& .front': {
      transform: 'rotateY(180deg)',
    },
  },
}))

const FrontContainer = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  zIndex: 2,
  left: 0,
  transition: 'ease-in-out 600ms',
  transformStyle: 'preserve-3d',
  transform: 'rotateY(0deg)',
  backfaceVisibility: 'hidden',
}))

const BackContainer = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  transition: 'ease-in-out 600ms',
  transformStyle: 'preserve-3d',
  backfaceVisibility: 'hidden',
  transform: 'rotateY(-180deg)',
}))

export const Flipper = ({
  dimensions,
  front,
  back,
  sx,
}: {
  dimensions: { width: number; height: number }
  front: React.ReactNode
  back: React.ReactNode
  sx?: SxProps<Theme>
}) => {
  return (
    <FlipperContainer sx={{ ...dimensions, ...sx }}>
      <FrontContainer className="front">{front}</FrontContainer>
      <BackContainer className="back">{back}</BackContainer>
    </FlipperContainer>
  )
}
