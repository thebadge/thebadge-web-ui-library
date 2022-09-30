import * as React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import { IconProps } from '../IconProps'

export const IconEmail = (props: IconProps) => (
  <a href={props.link}
     target={'_blank'}
     rel='noreferrer'
     className={`svg-fill--${props.color}`}
  >
    <MailOutlineIcon
      sx={{
        width: 28,
        height: 28,
        fill: props.color
      }}
    />
  </a>
)
