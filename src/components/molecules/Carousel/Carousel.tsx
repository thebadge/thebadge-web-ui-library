import { Box } from '@mui/material'
import React, { createRef, RefObject, useEffect, useState } from 'react'
import './carousel.scss'

export type CarouselProps = {
  elementWidth: number
  elementHeight: number
  selfRotate: boolean
  elements: React.ReactNode[]
}

const defaultCarouselProps = {
  elementWidth: 210,
  elementHeight: 140,
  selfRotate: true,
  elements: [],
}

export const Carousel = (props: CarouselProps = defaultCarouselProps) => {
  const [selectedCell, setSelectedCell] = useState(0)
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null)

  const carouselRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()
  // Refs to move the elemenets
  const elementRefs: RefObject<HTMLDivElement>[] = props.elements.map(() => createRef<HTMLDivElement>())

  function getHelperData() {
    const cellCount = props.elements.length
    const theta = 360 / cellCount
    const cellSize = props.elementWidth + 16

    const radius = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount))

    return { cellCount, theta, radius, cellSize }
  }

  function rotateCarousel() {
    const { theta, radius } = getHelperData()
    const angle = theta * selectedCell * -1
    const carousel = carouselRef.current
    if (!carousel) return
    carousel.style.transform = `translateZ(${-radius}px) rotateY(${angle}deg)`
  }

  function changeCarousel() {
    const { cellCount, theta, radius } = getHelperData()
    for (let i = 0; i < elementRefs.length; i++) {
      let cell = elementRefs[i].current
      if (!cell) return
      if (i < cellCount) {
        // visible cell
        cell.style.opacity = '1'
        let cellAngle = theta * i
        cell.style.transform = `rotateY(${cellAngle}deg) translateZ(${radius}px)`
      } else {
        // hidden cell
        cell.style.opacity = '0'
        cell.style.transform = 'none'
      }
    }
  }

  function onHoverHandler() {
    if (intervalId) {
      clearInterval(intervalId)
      setIntervalId(null)
    }
  }

  function onHoverEndHandler() {
    if (props.selfRotate && !intervalId) {
      let intervalId: NodeJS.Timer
      intervalId = setInterval(() => {
        setSelectedCell((prev) => prev + 1)
      }, 3000)
      setIntervalId(intervalId)
    }
  }

  useEffect(() => {
    // When the array of elements change, we re generate the transform
    changeCarousel()
  }, [carouselRef, props.elements])

  useEffect(() => {
    rotateCarousel()
  }, [selectedCell])

  useEffect(() => {
    if (props.selfRotate) {
      let intervalId: NodeJS.Timer
      intervalId = setInterval(() => {
        setSelectedCell((prev) => prev + 1)
      }, 3000)
      setIntervalId(intervalId)
    }

    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [])

  return (
    <Box className="scene" width={props.elementWidth} height={props.elementHeight}>
      <Box className="carousel" ref={carouselRef}>
        {props.elements.map((element, i) => {
          return (
            <Box
              className="carousel__element"
              onMouseEnter={onHoverHandler}
              onMouseLeave={onHoverEndHandler}
              ref={elementRefs[i]}
              width={props.elementWidth}
              height={props.elementHeight}
            >
              {element}
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
