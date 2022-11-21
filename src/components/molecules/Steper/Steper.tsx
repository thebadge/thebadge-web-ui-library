import { Colors } from '@assets/defaultTheme'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Box } from '@mui/material'
import React, { useState } from 'react'

import './steper.scss'

export type SteperProps = {
  title: React.ReactNode
  elements: React.ReactNode[]
  minHeight: number
  color?: Colors
}

const defaultSteperProps = {
  title: null,
  elements: [],
  minHeight: 0,
}

export const Steper = ({ elements, title, minHeight, color }: SteperProps = defaultSteperProps) => {
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
    <Box className="steper" minHeight={minHeight}>
      <Box>
        <SteperTitle color={color}>{title}</SteperTitle>
      </Box>
      <Box className="steper__content">
        <Box className="steper__step">{elements[selectedElement]}</Box>
        <ArrowForwardIosIcon className={`steper__arrow color--${color ?? ''}`} onClick={onArrowClickHandler} />
      </Box>
      <Box className="steper__dot__container">
        {elements.map((_, i) => {
          return (
            <Box
              key={`dot-${i}`}
              className={`steper__dot ${
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

type SteperTitleProps = {
  color?: Colors
}

const SteperTitle = ({ children, color }: React.PropsWithChildren<SteperTitleProps>) => {
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

  return <p className={`steper__title color--${color ?? ''}`}>{getElement(children)}</p>
}
