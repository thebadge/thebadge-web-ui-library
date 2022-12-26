import React, { useState } from 'react'
import './navIcon.scss'

export const NavIcon = ({ onClick }: { onClick: () => void }) => {
  const [open, setOpen] = useState(false)
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
