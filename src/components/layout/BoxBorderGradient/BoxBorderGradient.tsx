'use client'

import React from 'react'
import { Box, styled, SxProps, Theme } from '@mui/material'

import './boxBorderGradient.scss'

export type BoxBorderGradientProps = {
  gradient: string
  shadowColor?: string
  borderWidth?: string
  borderRadius?: string
  animated?: boolean
  sx?: SxProps<Theme>
}

const BoxWithGradientBorder = styled(Box, {
  shouldForwardProp: (propName) =>
    propName !== 'gradient' &&
    propName !== 'shadowColor' &&
    propName !== 'borderRadius' &&
    propName !== 'borderWidth' &&
    propName !== 'animated',
})<BoxBorderGradientProps>(({ gradient, shadowColor, borderRadius, borderWidth, animated }) => ({
  display: 'flex',
  flex: 1,
  borderRadius: borderRadius ? borderRadius : '16px',
  '&::before': {
    background: `${replaceAngleByVar(gradient)} border-box`,
    borderRadius: borderRadius ? borderRadius : '16px',
    border: `${borderWidth ? borderWidth : '3px'} solid transparent`,
    animation: animated ? `10s rotate linear infinite` : 'none',
  },
  ...(shadowColor ? { boxShadow: `0px 0px 25px ${shadowColor}` } : {}),
}))

export const BoxBorderGradient = (props: BoxBorderGradientProps) => {
  return (
    <BoxWithGradientBorder
      {...props}
      className="box-with-animated-border"
      gradient={props.gradient}
      shadowColor={props.shadowColor}
    />
  )
}

function replaceAngleByVar(gradient: string) {
  if (gradient.includes('var(--angle)')) return gradient
  const firstElementIndex = gradient.indexOf('(') + 1
  const lastElementIndex = gradient.indexOf(',')
  return gradient.substring(0, firstElementIndex) + 'var(--angle)' + gradient.substring(lastElementIndex)
}
