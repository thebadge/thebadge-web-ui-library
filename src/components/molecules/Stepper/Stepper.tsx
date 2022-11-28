import { Colors } from '@assets/defaultTheme'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Box } from '@mui/material'
import React, { useState } from 'react'

import './stepper.scss'

export type StepperProps = {
  title: React.ReactNode
  elements: React.ReactNode[]
  minHeight: number
  color?: Colors
}

const defaultStepperProps = {
  title: null,
  elements: [],
  minHeight: 0,
}

export const Stepper = ({ elements, title, minHeight, color }: StepperProps = defaultStepperProps) => {
  const [selectedElement, setSelectedElement] = useState(0)

  if (!elements || !(elements.length > 0)) {
    return null
  }

  function onArrowClickHandler() {
    setSelectedElement((prev) => {
      if (prev === elements.length - 1) return prev
      else return prev + 1
    })
  }

  function onDotClickHandler(index: number) {
    return () => {
      setSelectedElement(index)
    }
  }

  return (
    <Box className="stepper" minHeight={minHeight}>
      <Box>
        <StepperTitle color={color}>{title}</StepperTitle>
      </Box>
      <Box className="stepper__content">
        <Box className="stepper__step">{elements[selectedElement]}</Box>
        <ArrowForwardIosIcon className={`stepper__arrow color--${color ?? ''}`} onClick={onArrowClickHandler} />
      </Box>
      <Box className="stepper__dot__container">
        {elements.map((_, i) => {
          return (
            <Box
              key={`dot-${i}`}
              className={`stepper__dot ${
                i === selectedElement ? `background-color--${color ?? ''}` : 'background-color--blackBackground'
              }`}
              onClick={onDotClickHandler(i)}
            />
          )
        })}
      </Box>
    </Box>
  )
}

type StepperTitleProps = {
  color?: Colors
}

const StepperTitle = ({ children, color }: React.PropsWithChildren<StepperTitleProps>) => {
  function getElement(children: React.ReactNode) {
    if (typeof children === 'string') {
      const [firstWord, ...rest] = children.split(' ')
      return (
        <>
          <span>{firstWord}</span> {rest.join(' ')}
        </>
      )
    } else return children
  }

  return <p className={`stepper__title color--${color ?? ''}`}>{getElement(children)}</p>
}
