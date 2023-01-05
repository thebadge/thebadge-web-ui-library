import colors from '@assets/scss/variables/_color.variables.module.scss'
import { styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './spinninArrow.scss'

export type SpinninArrowProps = {
  direction: 'left' | 'right'
  className?: string
  animated?: boolean
  disabled?: boolean
  color?: string
  spinninTime?: number
  spin?: boolean
  onClick?: () => void
}

const StyledSpan = styled('span', {
  shouldForwardProp: (propName) => propName !== 'direction' && propName !== 'color',
})<Pick<SpinninArrowProps, 'direction' | 'color'>>(({ direction, color }) => ({
  '&:before': {
    borderBottomColor: direction === 'left' ? color || colors.white : colors.transparent,
    borderLeftColor: direction === 'left' ? color || colors.white : colors.transparent,
    borderTopColor: direction === 'right' ? color || colors.white : colors.transparent,
    borderRightColor: direction === 'right' ? color || colors.white : colors.transparent,
  },
  '&:after': {
    borderBottomColor: direction === 'left' ? color || colors.white : colors.transparent,
    borderLeftColor: direction === 'left' ? color || colors.white : colors.transparent,
    borderTopColor: direction === 'right' ? color || colors.white : colors.transparent,
    borderRightColor: direction === 'right' ? color || colors.white : colors.transparent,
  },
}))
export const SpinninArrow = ({
  direction,
  className,
  color,
  onClick,
  animated,
  disabled,
  spinninTime = 500,
  //Spin is a flag used to determine when you want to start the animation and ends it
  spin = false,
}: SpinninArrowProps) => {
  const [active, setActive] = useState(spin)

  useEffect(() => {
    setActive(spin)
  }, [spin])

  function handlerOnClick() {
    if (onClick) {
      onClick()
    }
    if (!spin && animated && !disabled) {
      setActive(true)
      setTimeout(() => {
        setActive(false)
      }, spinninTime)
    }
  }
  return (
    <StyledSpan
      className={
        `spinnin-arrow ${active && 'spinnin-arrow--active'} ${disabled && 'spinnin-arrow--disabled'}` + className
      }
      direction={direction}
      color={color}
      onClick={handlerOnClick}
    />
  )
}
