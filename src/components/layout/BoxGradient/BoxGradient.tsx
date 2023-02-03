import { Box, styled, SxProps, Theme } from '@mui/material'
import React from 'react'

export type BoxGradientProps = React.PropsWithChildren<{
  gradient: string
  className: string
  shadowColor?: string
  sx?: SxProps<Theme>
}>

export const Background = styled(Box)<BoxGradientProps>(({ gradient, shadowColor }) => ({
  display: 'flex',
  flex: 1,
  background: `${gradient}`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  ...(shadowColor ? { boxShadow: `0px 0px 25px ${shadowColor}` } : {}),
}))

export const BoxGradient = (props: BoxGradientProps) => {
  return <Background {...props} gradient={props.gradient} shadowColor={props.shadowColor} />
}
