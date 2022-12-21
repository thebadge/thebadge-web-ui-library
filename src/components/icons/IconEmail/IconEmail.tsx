import * as React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import { IconProps } from '../IconProps'

export const IconEmail = (props: IconProps) => (
  <a className={`icon svg-fill--${props.color}` + (!props.link ? 'icon--disabled' : '')} href={props.link} target={'_blank'} rel="noreferrer">
    <MailOutlineIcon
      sx={{
        width: 28,
        height: 28,
        fill: props.color,
      }}
    />
  </a>
)
