'use client'
import * as React from 'react'
import { MailOutline as MailOutlineIcon } from '@mui/icons-material'
import { IconProps } from '../IconProps'

export const IconEmail = (props: IconProps) => (
  <a
    className={`icon svg-fill--${props.color}` + (!props.link ? 'icon--disabled' : '')}
    href={props.link}
    target={'_blank'}
    rel="noreferrer"
  >
    <MailOutlineIcon
      sx={{
        width: 28,
        height: 28,
        fill: props.color,
      }}
    />
  </a>
)
