import { Button, styled } from '@mui/material'
import colors from '@assets/scss/variables/_color.variables.module.scss'

export interface ButtonProps {
  width?: string
  fontColor?: string
  backgroundColor?: string
}

export const ButtonV2 = styled(Button)<ButtonProps>(({ theme, width, fontColor, backgroundColor }) => ({
  width: width ? `${width}` : 'fit-content',
  color: fontColor || colors.white,
  backgroundColor: backgroundColor || colors.blue,
  whiteSpace: 'pre-line',
  fontWeight: '500',
  fontSize: '2ßpx',
  lineHeight: '28px',
  borderRadius: '8px',
  padding: theme.spacing(1, 4),
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
