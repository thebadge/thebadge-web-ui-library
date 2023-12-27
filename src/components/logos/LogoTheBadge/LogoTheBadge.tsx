import React from 'react'
import { LogoProps } from '../LogoProps'

export const LogoTheBadge = (props: LogoProps) => {
  return (
    <svg
      width={props.size || 244}
      height={props.size || 244}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.288 42.134c10.742 0 19.45-8.79 19.45-19.634 0-10.843-8.708-19.634-19.45-19.634-10.741 0-19.449 8.79-19.449 19.634 0 10.843 8.708 19.634 19.45 19.634Zm0 2.866c12.31 0 22.289-10.074 22.289-22.5S34.598 0 22.289 0C9.978 0 0 10.074 0 22.5S9.979 45 22.288 45Z"
        fill="url(#a)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.356 16.76c0 1.103.895 1.997 1.998 1.997h8.985c-3.175.007-5.746 2.606-5.746 5.813 0 3.21 2.577 5.812 5.757 5.812 3.18 0 5.758-2.602 5.758-5.812 0-3.207-2.572-5.806-5.746-5.813h8.948a1.998 1.998 0 0 0 0-3.996H13.355a1.998 1.998 0 0 0-1.999 1.998Z"
        fill="url(#b)"
      />
      <defs>
        <linearGradient id="a" x1="22.288" y1="0" x2="22.288" y2="45" gradientUnits="userSpaceOnUse">
          <stop stopColor="#24F3D2" />
          <stop offset="1" stopColor="#D611F3" />
        </linearGradient>
        <linearGradient id="b" x1="22.288" y1="31.744" x2="22.288" y2="13.041" gradientUnits="userSpaceOnUse">
          <stop stopColor="#24F3D2" />
          <stop offset="1" stopColor="#D611F3" />
        </linearGradient>
      </defs>
    </svg>
  )
}
