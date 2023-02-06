import { Box, styled } from '@mui/material'
import React from 'react'
import './multiBadgePreview.scss'

export interface MultiBadgePreviewProps {
  badges: React.ReactNode[]
  onGroupClick?: () => void
  sizeScale?: number
  animated?: boolean
}

const defaultValuesForMultiBadgePreviewProps = {
  badges: [],
  sizeScale: 1,
}

const MultiBadgePreviewBox = styled(Box)<{ scale?: number }>(({ theme, scale }) => ({
  padding: theme.spacing(2),
  scale: `${scale || 1}`,
  '& :focus': {
    outline: 'none !important',
    boxShadow: 'none',
  },
}))

export const MultiBadgePreview = (props: MultiBadgePreviewProps = defaultValuesForMultiBadgePreviewProps) => {
  return (
    <MultiBadgePreviewBox className={'multiBadgePreview'} scale={props.sizeScale} onClick={props.onGroupClick}>
      {/* show only the first 3 elements */}
      {props.badges.slice(0, 3).map((badge, index) => {
        return (
          <Box
            key={'multiBadgePreview__badge--' + index}
            className={'multiBadgePreview__badge ' + (props.animated ? 'multiBadgePreview__badge--animated' : '')}
          >
            {badge}
          </Box>
        )
      })}
    </MultiBadgePreviewBox>
  )
}
