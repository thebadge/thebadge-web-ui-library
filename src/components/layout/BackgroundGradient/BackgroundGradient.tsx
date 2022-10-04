import { Box, styled } from '@mui/material'
import React from 'react'

export interface BackgroundGradientProps {
  gradient: string
}

export const Background = styled(Box)<{background: string}>(
  ({ background }) => ({
    background: `${background}`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%',
    position: 'fixed',
    zIndex: -1 // this is optional
  })
)
export const BackgroundGradient = (props: BackgroundGradientProps) => {
  return <Background background={props.gradient} />
}
