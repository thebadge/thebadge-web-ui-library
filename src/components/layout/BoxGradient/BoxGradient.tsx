import { Box, styled, SxProps, Theme } from '@mui/material'
import React from 'react'

export type BoxGradientProps = {
  gradient: string
  shadowColor?: string
  className?: string
  children?: React.ReactNode
  sx?: SxProps<Theme>
}

const BackgroundBox = styled(Box, {
  shouldForwardProp: (propName) => propName !== 'gradient' && propName !== 'shadowColor',
})<BoxGradientProps>(({ gradient, shadowColor }) => ({
  display: 'flex',
  flex: 1,
  background: `${gradient}`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  ...(shadowColor ? { boxShadow: `0px 0px 25px ${shadowColor}` } : {}),
}))

export const BoxGradient = (props: BoxGradientProps) => {
  return <BackgroundBox {...props} gradient={props.gradient} shadowColor={props.shadowColor} />
}
