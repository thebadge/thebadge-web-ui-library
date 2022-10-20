import React from 'react'
import { Box, styled, Typography } from '@mui/material'
import colors from '@assets/scss/variables/_color.variables.module.scss'

const ButtonBox = styled(Box)<{ width?: string; disabled?: boolean }>(({ theme, width, disabled }) => ({
  width: width ? `${width}` : 'fit-content',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderColor: `${colors.greenBorder}`,
  color: `${colors.greenBorder}`,
  textTransform: 'none',
  fontSize: '40px',
  border: `1px solid ${colors.greenBorder}`,
  borderRadius: '8px',
  padding: theme.spacing(2),
  columnGap: theme.spacing(2),
  '&:hover': {
    backgroundColor: `${colors.greenHover}`,
  },
  cursor: disabled ? 'non-allowed' : 'pointer',
  ...(disabled ? { opacity: '0.7' } : {}),
  [theme.breakpoints.down('md')]: {
    columnGap: theme.spacing(1),
    padding: theme.spacing(1),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
  },
}))

const ButtonLabel = styled(Typography)(({ theme }) => ({
  whiteSpace: 'pre-line',
  fontWeight: '800',
  fontSize: '18px',
  lineHeight: '17px',
  [theme.breakpoints.down('md')]: {
    fontWeight: '700',
    fontSize: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
    margin: 0,
  },
}))

const ButtonImageBox = styled(Box)(({ theme }) => ({
  width: 50,
  height: 50,
  [theme.breakpoints.down('md')]: {
    width: 35,
    height: 35,
  },
  [theme.breakpoints.down('sm')]: {
    width: 25,
    height: 25,
  },
}))

export interface ButtonProps {
  width?: string
  label: string
  icon?: string
  onClick?: () => void
  disabled?: boolean
}

const defaultValuesForButtonProps = {
  label: '',
}

export const Button = (props: ButtonProps = defaultValuesForButtonProps) => {
  return (
    <ButtonBox width={props.width} onClick={props.onClick} disabled={props.disabled}>
      {props.icon ? (
        <ButtonImageBox>
          <img src={props.icon} alt={'Button Icon'} className={'width-pc-100 height-pc-100'} />
        </ButtonImageBox>
      ) : null}
      <ButtonLabel>{props.label}</ButtonLabel>
    </ButtonBox>
  )
}
