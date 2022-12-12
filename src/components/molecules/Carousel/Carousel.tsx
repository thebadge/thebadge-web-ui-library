import { useWindowFocus } from '@hooks'
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
  const windowsFocused = useWindowFocus()

  const carouselRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()
  // Refs to move the elemenets
  const elementRefs: RefObject<HTMLDivElement>[] = props.elements.map(() => createRef<HTMLDivElement>())

  function getHelperData() {
    const cellCount = props.elements.length
    // We need to think the carousel as a big circle, each cell is a partition on that cirle,
    // so the theta is the angle size or each partition.
    const theta = 360 / cellCount
    const cellSize = props.elementWidth + 16

    // This is the radios of the circle, we use the tangen equatio to do so
    const radius = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount))

    return { cellCount, theta, radius, cellSize }
  }

  function rotateCarousel() {
    const { theta, radius } = getHelperData()
    // We need to know the angle of the new selected cell, so we need to multiply the Theta by the
    // index of the selected cell, bc of that we have a minus one
    const angle = theta * selectedCell * -1
    const carousel = carouselRef.current
    if (!carousel) return
    // Think it as circle thats rotate on the center a real carousel.
    // We apply a translate on Z and Y, to "rotate" the circle and put the cell on the front.
    // Rotate Y - Rotates an element around the horizontal Y axis
    // Translaze Z - Positions it along the Z axis, which runs front to back in 3D space.
    carousel.style.transform = `translateZ(${-radius}px) rotateY(${angle}deg)`
  }

  function changeCarousel() {
    const { cellCount, theta, radius } = getHelperData()
    // We need to go on each element and put it over the circumference of our virtual circle
    // To do that, we need to rotate each element to the corresponding angle.
    for (let i = 0; i < elementRefs.length; i++) {
      const cell = elementRefs[i].current
      if (!cell) return
      if (i < cellCount) {
        // visible cell
        cell.style.opacity = '1'
        const cellAngle = theta * i
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
      const intervalId: NodeJS.Timer = setInterval(() => {
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
    // If self-rotate is deactivated, and it is rotating, stop it.
    if (!props.selfRotate && intervalId) clearInterval(intervalId)
  }, [props.selfRotate])

  useEffect(() => {
    if (!windowsFocused) {
      // If self-rotate is active, and window loss the focus, we stop it.
      if (intervalId) clearInterval(intervalId)
    } else {
      if (props.selfRotate) {
        // If self-rotate is active, and window get the focus back to the window, we start it.
        const intervalId: NodeJS.Timer = setInterval(() => {
          setSelectedCell((prev) => prev + 1)
        }, 3000)
        setIntervalId(intervalId)
      }
    }
  }, [windowsFocused])

  useEffect(() => {
    if (props.selfRotate) {
      const intervalId: NodeJS.Timer = setInterval(() => {
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
        {props.elements.map((element, index) => {
          return (
            <Box
              key={'carousel__element--' + index}
              className="carousel__element"
              onMouseEnter={onHoverHandler}
              onMouseLeave={onHoverEndHandler}
              ref={elementRefs[index]}
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
