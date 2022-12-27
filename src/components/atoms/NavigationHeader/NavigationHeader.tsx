import colors from '@assets/scss/variables/_color.variables.module.scss'
import gradients from '@assets/scss/variables/_gradient.variables.module.scss'
import { AppBar, Box, Drawer, styled, Tab, Tabs, Toolbar, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ButtonV2 } from '../Button/v2/Button'
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
  mobileViewMaxWidth?: number
}

const StyledToolbar = styled(Toolbar)<{ mobileViewBreakpoint: string }>(({ theme, mobileViewBreakpoint }) => ({
  '& .MuiTabs-scroller': {
    height: 'fit-content',
  },
  [mobileViewBreakpoint]: {
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

const CallToActionContainer = styled(Box)<{ mobileViewBreakpoint: string }>(({ theme, mobileViewBreakpoint }) => ({
  margin: 'auto',
  marginLeft: theme.spacing(1),
  [mobileViewBreakpoint]: {
    margin: theme.spacing(1, 0, 0, 0),
  },
}))

export const NavigationHeader = ({
  items = [],
  callToActionItem,
  anchorPosition = 'right',
  mobileViewMaxWidth,
}: NavigationHeaderProps) => {
  const theme = useTheme()
  const mobileViewBreakpoint = mobileViewMaxWidth
    ? `@media (max-width: ${mobileViewMaxWidth}px)`
    : theme.breakpoints.down('md')
  const isMobileView = useMediaQuery(mobileViewBreakpoint)
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
    <StyledToolbar mobileViewBreakpoint={mobileViewBreakpoint}>
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
          <CallToActionContainer mobileViewBreakpoint={mobileViewBreakpoint}>
            <ButtonV2
              fontColor={colors.white}
              backgroundColor={colors.blue}
              sx={{ textTransform: 'none' }}
              variant="contained"
              size="small"
              onClick={callToActionItem.onClick}
              disabled={callToActionItem.disabled}
            >
              {callToActionItem.label}
            </ButtonV2>
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
