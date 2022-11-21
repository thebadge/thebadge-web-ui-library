import colors from '@assets/scss/variables/_color.variables.module.scss'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Box } from '@mui/material'
import React, { useState } from 'react'

import './steper.scss'

export type SteperProps = {
  title: React.ReactNode
  elements: React.ReactNode[]
  minHeight: number
}

const defaultSteperProps = {
  title: null,
  elements: [],
  minHeight: 0,
}

export const Steper = (props: SteperProps = defaultSteperProps) => {
  const [selectedElement, setSelectedElement] = useState(0)

  if (!props.elements || !(props.elements.length > 0)) {
    return null
  }

  function onArrowClickHandler() {
    setSelectedElement((prev) => {
      if (prev === props.elements.length - 1) return prev
      else return prev + 1
    })
  }

  function onDotClickHandler(index: number) {
    return () => {
      setSelectedElement(index)
    }
  }

  return (
    <Box className="steper" minHeight={props.minHeight}>
      <Box className="steper__title">{props.title}</Box>
      <Box className="steper__content">
        <Box className="steper__step">{props.elements[selectedElement]}</Box>
        <ArrowForwardIosIcon className="steper__arrow" onClick={onArrowClickHandler} />
      </Box>
      <Box className="steper__dot__container">
        {props.elements.map((_, i) => {
          return (
            <Box
              key={`dot-${i}`}
              className={`steper__dot ${i === selectedElement ? 'steper__dot--selected' : ''}`}
              onClick={onDotClickHandler(i)}
            />
          )
        })}
      </Box>
    </Box>
  )
}

// TODO Find a way to create a type literal with all the posible colors
type Colors = keyof typeof colors

type SteperTitleProps = {
  color?: string
}

export const SteperTitle = ({ children, color }: React.PropsWithChildren<SteperTitleProps>) => {
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
