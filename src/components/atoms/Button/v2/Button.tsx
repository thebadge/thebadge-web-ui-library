import React from 'react'
import { Box, styled, Typography } from '@mui/material'
import colors from '@assets/scss/variables/_color.variables.module.scss'

type ButtonBoxParameters = {
  width?: string
  disabled?: boolean
  fontColor?: string
  backgroundColor?: string
}

const ButtonBox = styled(Box)<ButtonBoxParameters>(({ theme, width, disabled, fontColor, backgroundColor }) => ({
  width: width ? `${width}` : 'fit-content',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: fontColor || colors.white,
  backgroundColor: backgroundColor || colors.blue,
  textTransform: 'none',
  fontSize: '22px',
  borderRadius: '8px',
  padding: theme.spacing(1, 4),
  gap: theme.spacing(1),
  cursor: disabled ? 'non-allowed' : 'pointer',
  ...(disabled ? { opacity: '0.7' } : {}),
}))

const ButtonLabel = styled(Typography)(() => ({
  whiteSpace: 'pre-line',
  fontWeight: '500',
  fontSize: '2ßpx',
  lineHeight: '28px',
}))

const ButtonImageBox = styled(Box)(() => ({
  width: 25,
  height: 25,
  display: 'flex',
  alignItems: 'center',
}))

export interface ButtonProps {
  width?: string
  label: string
  icon?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  fontColor?: string
  backgroundColor?: string
}

const defaultValuesForButtonProps = {
  label: '',
}

export const ButtonV2 = (props: ButtonProps = defaultValuesForButtonProps) => {
  return (
    <ButtonBox
      width={props.width}
      onClick={props.onClick}
      disabled={props.disabled}
      fontColor={props.fontColor}
      backgroundColor={props.backgroundColor}
    >
      <ButtonLabel>{props.label}</ButtonLabel>
      {props.icon ? (
        <ButtonImageBox>
          {props.icon}
        </ButtonImageBox>
      ) : null}
    </ButtonBox>
  )
}
