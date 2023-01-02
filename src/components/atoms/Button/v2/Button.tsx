import colors from '@assets/scss/variables/_color.variables.module.scss'
import { Button, ButtonProps as MUIButtonProps, styled } from '@mui/material'
import React from 'react'

export type ButtonProps = MUIButtonProps & {
  width?: string
  fontColor?: string
  backgroundColor?: string
}

const StyledButton = styled(Button, {
  shouldForwardProp: (propName) =>
    propName !== 'fontColor' && propName !== 'backgroundColor' && propName !== 'textColor',
})<ButtonProps>(({ theme, width, fontColor, backgroundColor }) => ({
  width: width ? `${width}` : 'fit-content',
  color: fontColor || colors.white,
  backgroundColor: backgroundColor || colors.blue,
  whiteSpace: 'pre-line',
  fontWeight: '500',
  fontSize: '2ßpx',
  lineHeight: '28px',
  borderRadius: '8px',
  padding: theme.spacing(0.5, 2.6),
  gap: theme.spacing(0.5),
  textTransform: 'none',

  '&:hover': {
    color: (fontColor || colors.white) + 'CC',
    backgroundColor: (backgroundColor || colors.blue) + 'CC',
  },

  '&:disabled': {
    color: (fontColor || colors.white) + 'A6',
    backgroundColor: (backgroundColor || colors.blue) + 'A6',
  },
}))

export const ButtonV2 = (props: ButtonProps) => {
  return <StyledButton {...props} />
}
