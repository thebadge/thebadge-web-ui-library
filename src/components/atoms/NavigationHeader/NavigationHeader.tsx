'use client'

import colors from '@assets/scss/variables/_color.variables.module.scss'
import gradients from '@assets/scss/variables/_gradient.variables.module.scss'
import {
  AppBar,
  Box,
  Breakpoint,
  Drawer,
  styled,
  Tab,
  Tabs,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ButtonV2 } from '../Button/v2/Button'
import { NavIcon } from './NavIcon'
import { SxProps } from '@mui/system'
import { Theme } from '@mui/material/styles'

interface NavigationHeaderItem {
  label: string
  icon?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  tooltip?: string
  sx?: SxProps<Theme>
}

export interface NavigationHeaderProps {
  items: Array<NavigationHeaderItem>
  callToActionItem?: NavigationHeaderItem
  anchorPosition: 'right' | 'left'
  mobileViewMaxWidth?: number
}

const ToolbarDesktopContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}))

const StyledToolbar = styled(Toolbar, { shouldForwardProp: (propName) => propName !== 'mobileViewMaxWidth' })<{
  mobileViewMaxWidth: Breakpoint | number
}>(({ theme, mobileViewMaxWidth }) => ({
  '& .MuiTabs-scroller': {
    height: 'fit-content',
  },
  [theme.breakpoints.down(mobileViewMaxWidth)]: {
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

const CallToActionContainer = styled(Box, { shouldForwardProp: (propName) => propName !== 'mobileViewBreakpoint' })<{
  mobileViewBreakpoint: string
}>(({ theme, mobileViewBreakpoint }) => ({
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
  const mobileViewBreakpoint = theme.breakpoints.down(mobileViewMaxWidth ? mobileViewMaxWidth : 'md')
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
    <StyledToolbar mobileViewMaxWidth={mobileViewMaxWidth || 'md'}>
      <Header value={selectedElement} orientation={isMobileView ? 'vertical' : 'horizontal'}>
        {items.map((item, index) => (
          <Tooltip key={item.label} title={item.tooltip}>
            <HeaderItem
              onClick={() => onItemClick(item, index)}
              disabled={item.disabled}
              selected={selectedElement === index}
              label={item.label}
              icon={item.icon ? <HeaderItemImage>{item.icon}</HeaderItemImage> : undefined}
              iconPosition="end"
              disableRipple={true}
            />
          </Tooltip>
        ))}
        {callToActionItem && (
          <Tooltip title={callToActionItem.tooltip}>
            <CallToActionContainer mobileViewBreakpoint={mobileViewBreakpoint}>
              <ButtonV2
                fontColor={colors.white}
                backgroundColor={colors.blue}
                sx={{ textTransform: 'none', ...(callToActionItem.sx ? callToActionItem.sx : {}) }}
                variant="contained"
                size="small"
                onClick={callToActionItem.onClick}
                disabled={callToActionItem.disabled}
                endIcon={callToActionItem.icon}
              >
                <Typography>{callToActionItem.label}</Typography>
              </ButtonV2>
            </CallToActionContainer>
          </Tooltip>
        )}
      </Header>
    </StyledToolbar>
  )

  return (
    <AppBar component="nav" sx={{ background: 'transparent', boxShadow: 'none', position: 'inherit', width: 'auto' }}>
      {isMobileView && <NavIcon onClick={onNavIconClick} isOpen={showToolBar} />}
      {!isMobileView && <ToolbarDesktopContainer>{toolBarElement}</ToolbarDesktopContainer>}
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
