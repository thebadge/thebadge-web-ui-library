import { TBColor } from '@assets/defaultTheme'
import { Box } from '@mui/material'
import React from 'react'
import './sectionLayout.scss'
import { SxProps } from '@mui/system'
import { Theme } from '@mui/material/styles'

export type SectionLayoutComponent = {
  component: React.ReactNode,
  options?: SectionLayoutComponentsOptions
}

export type SectionLayoutComponentsOptions = {
  type?: 'top' | 'middle' | 'bottom'
  withPadding?: boolean
  fitContent?: boolean
  sx?: SxProps<Theme>
}

export type SectionLayoutProps = {
  components: SectionLayoutComponent[],
  borderColor?: string
  backgroundColor?: string
}

export const SectionLayout = ({
  borderColor,
  backgroundColor,
  components
}: SectionLayoutProps) => {
  return (
    <Box
      className="section-layout"
      sx={{
        borderColor: borderColor||'green',
        backgroundColor: backgroundColor || 'black',
      }}
    >
      {
        components.map(({component, options}, index) => {
          return (
            (
              <Box
                key={'section-layout__component-' + index}
                className={'section-layout__component '
                  + (options?.type ? `section-layout__component-${options?.type}` : '')
                  + (options?.withPadding ? 'section-layout__component--with-padding' : '')
                  + (options?.fitContent ? 'section-layout__component--fit-content' : '')
                }
                sx={{
                  ...options?.sx,
                }}
              >{component}</Box>
            )
          )
          }
        )
      }
    </Box>
  )
}
