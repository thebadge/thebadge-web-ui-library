import { Box, styled } from '@mui/material'
import React from 'react'

export type BackgroundGradientProps = {
  gradient: string
}

const Background = styled(Box, { shouldForwardProp: (propName) => propName !== 'gradient' })<BackgroundGradientProps>(
  ({ gradient }) => ({
    background: `${gradient}`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%',
    position: 'fixed',
    zIndex: -1, // this is optional
  })
)

export const BackgroundGradient = (props: BackgroundGradientProps) => {
  return <Background gradient={props.gradient} />
}
