import React, { useState } from 'react'
import { AppBar, Box, Button, styled, Toolbar } from '@mui/material'
import gradients from '@assets/scss/variables/_gradient.variables.module.scss'
import colors from '@assets/scss/variables/_color.variables.module.scss'

interface NavigationHeaderItem {
  label: string
  icon?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

export interface NavigationHeaderProps {
  items: Array<NavigationHeaderItem>
}

const defaultValuesForNavigationHeaderProps = {
  items: [],
}

const HeaderItemImage = styled(Box)(({ theme }) => ({
  width: 35,
  height: 35,
  [theme.breakpoints.down('sm')]: {
    width: 25,
    height: 25,
  },
  padding: theme.spacing(0, 0.5),
  display: 'flex',
  alignItems: 'center',
}))

const HeaderItem = styled(Button)<{ selected: boolean }>(({ theme, selected }) => ({
  color: colors.white,
  padding: theme.spacing(1.5, 0),
  margin: theme.spacing(0.5, 2),
  '&:disabled': {
    color: colors.white,
    opacity: 0.5,
  },
  ...(selected
    ? {
        background: `${gradients.gradientHeader}`,
        backgroundSize: '100% 3px',
        backgroundPosition: 'bottom 0 left 0,bottom 6px left 0',
        backgroundRepeat: 'no-repeat',
      }
    : {
        background: 'transparent',
      }),
}))

export const NavigationHeader = (props: NavigationHeaderProps = defaultValuesForNavigationHeaderProps) => {
  const [selectedElement, setSelectedElement] = useState(0)

  const onItemClick = (item: NavigationHeaderItem, index: number) => {
    setSelectedElement(index)
    if (item.onClick) {
      item.onClick()
    }
  }

  return (
    <AppBar component="nav" sx={{ background: 'transparent', boxShadow: 'none', position: 'inherit' }}>
      <Toolbar>
        <Box sx={{ display: { xs: 'block' } }}>
          {props.items.map((item, index) => (
            <HeaderItem
              key={item.label}
              onClick={() => onItemClick(item, index)}
              disabled={item.disabled}
              selected={selectedElement === index}
            >
              {item.icon ? <HeaderItemImage>{item.icon}</HeaderItemImage> : null}
              {item.label}
            </HeaderItem>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
