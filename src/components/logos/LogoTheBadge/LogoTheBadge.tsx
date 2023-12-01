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
        d="M22.2885 42.1338C33.0299 42.1338 41.7376 33.3434 41.7376 22.5C41.7376 11.6566 33.0299 2.86624 22.2885 2.86624C11.547 2.86624 2.83929 11.6566 2.83929 22.5C2.83929 33.3434 11.547 42.1338 22.2885 42.1338ZM22.2885 45C34.598 45 44.5769 34.9264 44.5769 22.5C44.5769 10.0736 34.598 0 22.2885 0C9.97889 0 0 10.0736 0 22.5C0 34.9264 9.97889 45 22.2885 45Z"
        fill="url(#paint0_linear_7860_11989)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3564 16.7593C11.3564 17.8627 12.251 18.7573 13.3545 18.7573L22.3387 18.7573C19.1641 18.7636 16.5925 21.3635 16.5925 24.5697C16.5925 27.7799 19.1703 30.3822 22.3503 30.3822C25.5302 30.3822 28.1081 27.7799 28.1081 24.5697C28.1081 21.3635 25.5365 18.7636 22.3618 18.7573L31.3101 18.7573C32.4135 18.7573 33.3081 17.8627 33.3081 16.7593C33.3081 15.6558 32.4135 14.7612 31.3101 14.7612L13.3545 14.7612C12.251 14.7612 11.3564 15.6558 11.3564 16.7593Z"
        fill="url(#paint1_linear_7860_11989)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_7860_11989"
          x1="22.2885"
          y1="0"
          x2="22.2885"
          y2="45"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#24F3D2" />
          <stop offset="1" stopColor="#D611F3" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_7860_11989"
          x1="22.2877"
          y1="31.7436"
          x2="22.2877"
          y2="13.0415"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#24F3D2" />
          <stop offset="1" stopColor="#D611F3" />
        </linearGradient>
      </defs>
    </svg>
  )
}
