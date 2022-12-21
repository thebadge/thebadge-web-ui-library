import React from 'react'
import { Box, styled } from '@mui/material'
import './multiBadgePreview.scss'

export interface MultiBadgePreviewProps {
  badges: React.ReactNode[],
  onGroupClick?: () => void,
  sizeScale?: number
  animated?: boolean
}

const defaultValuesForMultiBadgePreviewProps = {
  badges: [],
  sizeScale: 1,
}

const MultiBadgePreviewBox = styled(Box)<{scale?: number}>(({theme, scale}) => ({
  padding: theme.spacing(2),
  scale: `${scale || 1}`,
}))

export const MultiBadgePreview = (props: MultiBadgePreviewProps = defaultValuesForMultiBadgePreviewProps) => {
  return (
    <MultiBadgePreviewBox
      className={'multiBadgePreview ' + (props.animated ? 'multiBadgePreview--animated' : '')}
      scale={props.sizeScale}
      onClick={props.onGroupClick}
    >
      {/* show only the first 3 elements */}
      {props.badges.slice(0, 3).map((badge, index) => {
        return (
          <Box
            key={'multiBadgePreview__badge--' + index}
            className="multiBadgePreview__badge"
          >
            {badge}
          </Box>
        )
      })}
    </MultiBadgePreviewBox>
  )
}