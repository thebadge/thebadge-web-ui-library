import React from 'react'
import { Box, styled } from '@mui/material'
import './multiBadgePreview.scss'

export interface MultiBadgePreviewProps {
  badges: React.ReactNode[],
  onGroupClick?: () => void,
}

const defaultValuesForMultiBadgePreviewProps = {
  badges: [],
}

const MultiBadgePreviewBox = styled(Box)(({theme}) => ({
  padding: theme.spacing(2)
}))

export const MultiBadgePreview = (props: MultiBadgePreviewProps = defaultValuesForMultiBadgePreviewProps) => {
  return (
    <MultiBadgePreviewBox className={'multiBadgePreview'} onClick={props.onGroupClick}>
      {props.badges.map((badge, index) => {
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