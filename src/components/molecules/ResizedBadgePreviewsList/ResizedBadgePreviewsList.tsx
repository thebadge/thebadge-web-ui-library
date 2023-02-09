import { Box, styled } from '@mui/material'
import React from 'react'
import './resizedBadgePreviewsList.scss'

export interface ResizedBadgePreviewsListProps {
  badges: React.ReactNode[]
}

const defaultValuesForResizedBadgePreviewsListProps = {
  badges: [],
}

const ResizedBadgePreviewsListBox = styled(Box)<{ scale?: number }>(({ theme, scale }) => ({
  padding: theme.spacing(2),
  scale: `${scale || 1}`,
  '& :focus': {
    outline: 'none !important',
    boxShadow: 'none',
  },
}))

export const ResizedBadgePreviewsList = (
  props: ResizedBadgePreviewsListProps = defaultValuesForResizedBadgePreviewsListProps
) => {
  return (
    <ResizedBadgePreviewsListBox className={'resizedBadgePreviewsList'}>
      {/* show only the first 5 elements */}
      {props.badges.slice(0, 5).map((badge, index) => {
        return (
          <Box key={'resizedBadgePreviewsList__badge--' + index} className={'resizedBadgePreviewsList__badge '}>
            {badge}
          </Box>
        )
      })}
    </ResizedBadgePreviewsListBox>
  )
}
