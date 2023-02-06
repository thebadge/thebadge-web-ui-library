import colors from '@assets/scss/variables/_color.variables.module.scss'
import { styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './spinningArrow.scss'

export type SpinningArrowProps = {
  direction: 'left' | 'right'
  className?: string
  animated?: boolean
  disabled?: boolean
  color?: string
  spinningTime?: number
  spin?: boolean
  onClick?: () => void
}

const StyledSpan = styled('span', {
  shouldForwardProp: (propName) => propName !== 'direction' && propName !== 'color',
})<Pick<SpinningArrowProps, 'direction' | 'color'>>(({ direction, color }) => ({
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
export const SpinningArrow = ({
  direction,
  className,
  color,
  onClick,
  animated,
  disabled,
  spinningTime = 500,
  //Spin is a flag used to determine when you want to start the animation and ends it
  spin = false,
}: SpinningArrowProps) => {
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
      }, spinningTime)
    }
  }
  return (
    <StyledSpan
      className={
        `spinning-arrow ${active && 'spinning-arrow--active'} ${disabled && 'spinning-arrow--disabled'}` + className
      }
      direction={direction}
      color={color}
      onClick={handlerOnClick}
    />
  )
}
