import React, { useEffect, useState } from 'react'
import './navIcon.scss'

export const NavIcon = ({ onClick, isOpen }: { onClick: () => void; isOpen: boolean }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  function onClickHandler() {
    setOpen((prev) => !prev)
    if (onClick) {
      onClick()
    }
  }

  return (
    <div id="nav-burger-icon" onClick={onClickHandler} className={open ? 'open' : ''}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
