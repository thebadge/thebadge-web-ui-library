import colors from '@assets/scss/variables/_color.variables.module.scss'
import gradients from '@assets/scss/variables/_gradient.variables.module.scss'
import { AppBar, Box, Button, Drawer, styled, Tab, Tabs, Toolbar, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { NavIcon } from './NavIcon'
interface NavigationHeaderItem {
  label: string
  icon?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

export interface NavigationHeaderProps {
  items: Array<NavigationHeaderItem>
  callToActionItem?: NavigationHeaderItem
  anchorPosition: 'right' | 'left'
}

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  '& .MuiTabs-scroller': {
    height: 'fit-content',
  },
  [theme.breakpoints.down('md')]: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '& 	.MuiTabs-indicator': {
      backgroundColor: `transparent`,
      background: 'none !important',
    },
    '& .MuiTabs-flexContainerVertical': {
      alignItems: 'flex-start',
      rowGap: theme.spacing(1),
      paddingTop: theme.spacing(4),
    },
    '& .MuiTab-root': {
      justifyContent: 'flex-start',
    },
  },
}))

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

const Header = styled(Tabs)(() => ({
  display: 'flex',
  position: 'relative',
  '& 	.MuiTabs-indicator': {
    background: `${gradients.gradientHeader}`,
  },
}))

const HeaderItem = styled(Tab)<{ selected: boolean }>(({ theme }) => ({
  color: colors.white,
  minHeight: 0,
  minWidth: 0,
  padding: theme.spacing(0.5, 0),
  margin: theme.spacing(0, 1),
  borderRadius: theme.spacing(0.5),
  '&:disabled': {
    color: colors.white,
    opacity: 0.5,
  },
  '&.Mui-selected': {
    color: colors.white,
  },
  '&:hover': {
    color: colors.primary,
  },
}))

const CallToActionContainer = styled(Box)(({ theme }) => ({
  margin: 'auto',
  marginLeft: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    margin: theme.spacing(1, 0, 0, 0),
  },
}))

export const NavigationHeader = ({ items = [], callToActionItem, anchorPosition = 'right' }: NavigationHeaderProps) => {
  const theme = useTheme()
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'))
  const [selectedElement, setSelectedElement] = useState(0)
  const [showToolBar, setShowToolBar] = useState(true)

  useEffect(() => {
    setShowToolBar(!isMobileView)
  }, [isMobileView])

  const onNavIconClick = () => {
    setShowToolBar((prev) => !prev)
  }

  const onItemClick = (item: NavigationHeaderItem, index: number) => {
    setSelectedElement(index)
    if (item.onClick) {
      item.onClick()
    }
  }

  const toolBarElement = (
    <StyledToolbar>
      <Header value={selectedElement} orientation={isMobileView ? 'vertical' : 'horizontal'}>
        {items.map((item, index) => (
          <HeaderItem
            key={item.label}
            onClick={() => onItemClick(item, index)}
            disabled={item.disabled}
            selected={selectedElement === index}
            label={item.label}
            icon={item.icon ? <HeaderItemImage>{item.icon}</HeaderItemImage> : undefined}
            iconPosition="end"
            disableRipple={true}
          />
        ))}
        {callToActionItem && (
          <CallToActionContainer>
            <Button
              color="blue"
              variant="contained"
              size="small"
              sx={{ textTransform: 'none' }}
              onClick={callToActionItem.onClick}
            >
              {callToActionItem.label}
            </Button>
          </CallToActionContainer>
        )}
      </Header>
    </StyledToolbar>
  )
  return (
    <AppBar component="nav" sx={{ background: 'transparent', boxShadow: 'none', position: 'inherit', width: 'auto' }}>
      {isMobileView && <NavIcon onClick={onNavIconClick} isOpen={showToolBar} />}
      {!isMobileView && toolBarElement}
      <Drawer
        anchor={anchorPosition}
        open={isMobileView && showToolBar}
        onClose={onNavIconClick}
        PaperProps={{
          sx: { backgroundColor: colors.black },
        }}
      >
        {toolBarElement}
      </Drawer>
    </AppBar>
  )
}
