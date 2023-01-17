import { TBColor } from '@assets/defaultTheme'
import colors from '@assets/scss/variables/_color.variables.module.scss'
import { SpinningArrow } from '@components/atoms/SpinningArrow/SpinningArrow'
import colorStringIsTBColor from '@helpers/IsTBColor'
import { Box } from '@mui/material'
import React, { createRef, RefObject, useMemo, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import './stepper.scss'

export type StepperProps = {
  title: React.ReactNode
  children: React.ReactNode[]
  minHeight: number
  color?: TBColor
  backgroundColor?: TBColor
  glowTitle?: boolean
  border?: boolean
}

export const Stepper = ({
  children,
  title,
  minHeight,
  color = 'black',
  backgroundColor,
  glowTitle,
  border,
}: StepperProps) => {
  const [selectedElement, setSelectedElement] = useState(0)

  if (!children || !(children.length > 0)) {
    return <></>
  }

  // Refs to move the elements
  const elementRefs: RefObject<HTMLDivElement>[] = useMemo(
    () => children.map(() => createRef<HTMLDivElement>()),
    [children]
  )

  function onArrowForwardClickHandler() {
    setSelectedElement((prev) => {
      if (prev === children.length - 1) return prev
      else return prev + 1
    })
  }

  function onArrowBackClickHandler() {
    setSelectedElement((prev) => {
      if (prev === 0) return prev
      else return prev - 1
    })
  }

  function onDotClickHandler(index: number) {
    return () => {
      setSelectedElement(index)
    }
  }

  function onEnteringSwitchTransition() {
    if (elementRefs[selectedElement]?.current)
      setSelectedElementHeight(elementRefs[selectedElement]?.current?.clientHeight || 'auto')
  }

  const arrowColor = colorStringIsTBColor(color) ? colors[color] : color

  return (
    <Box
      className={[
        `stepper`,
        `background-color--${backgroundColor ?? 'white'}`,
        border ? `stepper--withBorder border-color--${color}` : '',
      ].join(' ')}
      minHeight={minHeight}
    >
      <Box>
        <StepperTitle color={color} glow={glowTitle}>
          {title}
        </StepperTitle>
      </Box>
      <Box className="stepper__content">
        <>
          <SpinningArrow
            direction="left"
            animated={false}
            disabled={selectedElement === 0}
            color={arrowColor}
            className={[`stepper__arrow`, selectedElement === 0 ? 'stepper__arrow--disable' : ''].join(' ')}
            onClick={onArrowBackClickHandler}
          />
          <Box className="stepper__step">
            <SwitchTransition>
              <CSSTransition
                key={selectedElement}
                timeout={500}
                classNames={`stepper__step-fade`}
                onEntering={onEnteringSwitchTransition}
              >
                <Box ref={elementRefs[selectedElement]}>{children[selectedElement]}</Box>
              </CSSTransition>
            </SwitchTransition>
          </Box>
          <SpinningArrow
            direction="right"
            animated={false}
            color={arrowColor}
            disabled={selectedElement === children.length - 1}
            className={[
              `stepper__arrow`,
              selectedElement === children.length - 1 ? 'stepper__arrow--disable' : '',
            ].join(' ')}
            onClick={onArrowForwardClickHandler}
          />
        </>
      </Box>
      <Box className="stepper__dot__container">
        {children.map((_, i) => {
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
  color?: TBColor
  glow?: boolean
}

const StepperTitle = ({ children, color, glow }: React.PropsWithChildren<StepperTitleProps>) => {
  function getElement(children: React.ReactNode | string) {
    if (typeof children === 'string') {
      const [firstWord, ...rest] = children.split(' ')
      return (
        <>
          <span>{firstWord}</span> {rest.join(' ')}
        </>
      )
    }
    return children
  }

  return (
    <div className={[`stepper__title`, `color--${color ?? ''}`, glow ? 'stepper__title--glow' : ''].join(' ')}>
      {getElement(children)}
    </div>
  )
}
