import * as React from 'react'
import TwitterMUIIcon from '@mui/icons-material/Twitter'
import { IconProps } from '../IconProps'

export const IconTwitter = (props: IconProps) => (
  <a
    className={`icon svg-fill--${props.color}` + (!props.link ? 'icon--disabled' : '')}
    href={props.link}
    target={'_blank'}
    rel="noreferrer"
  >
    <TwitterMUIIcon
      sx={{
        width: 28,
        height: 28,
        fill: props.color,
      }}
    />
  </a>
)
