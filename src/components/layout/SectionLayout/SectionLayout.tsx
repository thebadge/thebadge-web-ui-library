import { Colors } from '@assets/defaultTheme'
import { Box } from '@mui/material'
import React from 'react'
import './sectionLayout.scss'

export type SectionLayoutProps = {
  topComponent: React.ReactNode
  middleComponent: React.ReactNode
  bottomComponent: React.ReactNode
  borderColor?: Colors
  backgroundColor?: Colors
}

export const SectionLayout = ({
  borderColor,
  backgroundColor,
  topComponent,
  middleComponent,
  bottomComponent,
}: SectionLayoutProps) => {
  return (
    <Box
      className={`section-layout border-color--${borderColor ?? 'green'} background-color--${
        backgroundColor ?? 'black'
      }`}
    >
      <div className="section-layout__top">{topComponent}</div>
      <div className="section-layout__middle">{middleComponent}</div>
      <div className="section-layout__bottom">{bottomComponent}</div>
    </Box>
  )
}
