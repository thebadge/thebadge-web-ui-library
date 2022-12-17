import React, { useEffect, useState } from 'react'
import { AppBar, Box, Button, Toolbar } from '@mui/material'
import gradients from '@assets/scss/variables/_gradient.variables.module.scss'

interface NavigationHeaderItem {
  label: string
  icon?: string
  onClick: () => void
  disabled?: boolean
}

export interface NavigationHeaderProps {
  items: Array<NavigationHeaderItem>
}

const defaultValuesForNavigationHeaderProps = {
  items: [],
}

export const NavigationHeader = (props: NavigationHeaderProps = defaultValuesForNavigationHeaderProps) => {
  const [selectedElement, setSelectedElement] = useState(0)

  const onItemClick = (item: NavigationHeaderItem, index: number) => {
    setSelectedElement(index)
    item.onClick()
  }

  return (
    <AppBar component="nav" sx={{ background: 'transparent', boxShadow: 'none', position: 'inherit' }}>
      <Toolbar>
        <Box sx={{ display: { xs: 'block' } }}>
          {props.items.map((item, index) => (
            <Button
              key={item.label}
              onClick={() => onItemClick(item, index)}
              sx={{
                color: 'white',
                padding: '6px 0',
                margin: '2px 8px',
                ...(selectedElement === index
                  ? {
                      background: `${gradients.gradientHeader}`,
                      backgroundSize: '100% 3px',
                      backgroundPosition: 'bottom 0 left 0,bottom 6px left 0',
                      backgroundRepeat: 'no-repeat',
                    }
                  : {
                      background: 'transparent',
                    }),
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
