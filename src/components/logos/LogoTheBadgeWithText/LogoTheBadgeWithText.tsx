import React from 'react'
import { LogoProps } from '../LogoProps'

export const LogoTheBadgeWithText = (props: LogoProps) => {
  return (
    <svg
      width={props.size || 666}
      height={props.size ? props.size / 3 : 222}
      viewBox="0 0 746 244"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="244" height="244" rx="40" fill="#24F3D2" />
      <path
        d="M193.344 188.354C195.053 190.78 193.646 194.217 190.833 194.723L173.45 198.362H173.35L162.799 214.639C161.192 217.065 157.675 217.166 155.967 214.74L128.235 174.504L165.713 148.219L193.344 188.354Z"
        fill="#AF20AF"
      />
      <path
        d="M57.0302 188.354C55.3195 190.78 56.7283 194.217 59.546 194.723L76.955 198.362H77.0557L87.6219 214.639C89.232 217.065 92.754 217.166 94.4647 214.74L122.138 174.504L84.603 148.219L57.0302 188.354Z"
        fill="#AF20AF"
      />
      <path
        d="M50.5006 108.624C50.5006 112.724 41.8695 117.471 42.5169 121.355C43.1642 125.239 52.8741 126.965 54.1688 130.634C55.4635 134.518 48.7744 141.638 50.5006 145.091C52.4426 148.543 62.1525 147.249 64.5261 150.269C66.8996 153.506 62.7998 162.353 65.6049 165.158C68.41 168.179 77.2568 163.863 80.7093 166.237C83.9459 168.61 82.6512 178.32 86.3194 180.047C89.7719 181.773 96.8925 174.868 100.776 176.163C104.445 177.242 106.387 186.952 110.486 187.599C114.586 188.246 119.117 179.399 123.001 179.399C127.101 179.399 131.848 188.03 135.732 187.383C139.616 186.736 141.342 177.026 145.011 175.731C148.894 174.436 156.015 181.126 159.467 179.399C162.92 177.457 161.625 167.747 164.646 165.374C167.883 163 176.73 167.1 179.535 164.295C182.34 161.274 178.024 152.427 180.398 149.191C182.771 145.954 192.481 147.249 194.207 143.58C195.934 140.128 189.029 133.007 190.323 129.123C191.402 125.455 201.112 123.513 201.76 119.413C202.407 115.313 193.56 110.782 193.56 106.898C193.56 102.798 202.191 98.0513 201.544 94.1673C200.896 90.2834 191.187 88.5571 189.892 84.8889C188.597 81.0049 195.286 73.8843 193.56 70.4319C191.618 66.9794 181.908 68.2741 179.535 65.2532C177.161 62.0166 181.261 53.1697 178.456 50.3646C175.651 47.5595 166.804 51.875 163.567 49.7173C160.331 47.3437 161.625 37.6337 157.957 35.9075C154.505 34.1813 147.384 41.0862 143.5 39.7915C139.832 38.7127 137.89 29.0026 133.79 28.3553C129.69 27.708 125.159 36.5549 121.275 36.5549C117.175 36.5549 112.428 27.9238 108.544 28.5711C104.66 29.2185 102.934 38.9284 99.266 40.2231C95.382 41.5177 88.2614 34.8287 84.809 36.5549C81.3566 38.4969 82.6512 48.2068 79.6304 50.5804C76.3937 52.9539 67.5469 48.8542 64.7418 51.6593C61.9367 54.4644 66.2523 63.3112 64.0945 66.5479C61.721 69.7846 52.0111 68.4899 50.2848 72.1581C48.5586 75.6105 55.4634 82.7312 54.1688 86.6152C53.0899 90.2834 43.38 92.2254 42.7327 96.3251C41.6538 100.209 50.2848 104.74 50.5006 108.624Z"
        fill="#284EE8"
      />
      <g opacity="0.7">
        <circle cx="122.748" cy="108.587" r="46.9497" fill="url(#paint0_linear_1248_6418)" />
        <circle cx="122.748" cy="108.587" r="46.9497" fill="black" fill-opacity="0.2" />
      </g>
      <path d="M296.934 83.7575V20.1042H277V5H333.03V20.1042H313.096V83.7575H296.934Z" fill={props.fill ?? 'white'} />
      <path
        d="M344.41 83.7575V5H360.572V35.2083H378.674V5H394.837V83.7575H378.674V50.3125H360.572V83.7575H344.41Z"
        fill={props.fill ?? 'white'}
      />
      <path
        d="M410.526 83.7575V5H459.014V18.8095H426.365V36.503H455.243V50.3125H426.365V69.9479H459.014V83.7575H410.526Z"
        fill={props.fill ?? 'white'}
      />
      <path
        d="M283.357 237.882V119.745H321.339C333.3 119.745 342.835 122.497 349.947 127.999C357.058 133.393 360.614 140.729 360.614 150.008C360.614 155.186 359.375 159.718 356.897 163.602C354.526 167.485 351.294 170.506 347.199 172.664C343.213 174.822 338.849 175.901 334.108 175.901V176.386C339.387 176.278 344.182 177.249 348.492 179.299C352.91 181.349 356.466 184.424 359.16 188.523C361.853 192.623 363.2 197.694 363.2 203.735C363.2 210.64 361.53 216.682 358.19 221.86C354.957 226.931 350.324 230.869 344.29 233.674C338.256 236.479 331.091 237.882 322.794 237.882H283.357ZM306.793 218.3H321.824C327.104 218.3 331.252 216.898 334.269 214.093C337.286 211.288 338.795 207.404 338.795 202.441C338.795 197.478 337.286 193.594 334.269 190.789C331.252 187.876 327.104 186.42 321.824 186.42H306.793V218.3ZM306.793 167.324H321.016C325.757 167.324 329.474 166.083 332.168 163.602C334.862 161.012 336.209 157.56 336.209 153.244C336.209 148.821 334.862 145.423 332.168 143.049C329.474 140.568 325.757 139.327 321.016 139.327H306.793V167.324Z"
        fill={props.fill ?? 'white'}
      />
      <path
        d="M373.643 237.882L402.574 119.745H433.283L462.537 237.882H437.808L432.151 211.18H404.028L398.371 237.882H373.643ZM408.069 191.76H427.949L422.292 163.278C421.538 159.178 420.73 155.132 419.868 151.141C419.113 147.041 418.521 143.858 418.09 141.593C417.659 143.858 417.066 146.987 416.312 150.979C415.665 154.971 414.911 159.016 414.049 163.116L408.069 191.76Z"
        fill={props.fill ?? 'white'}
      />
      <path
        d="M476.697 237.882V119.745H515.002C523.191 119.745 530.302 121.31 536.336 124.439C542.478 127.567 547.219 131.991 550.559 137.709C554.008 143.319 555.732 149.954 555.732 157.614V199.852C555.732 207.404 554.008 214.039 550.559 219.757C547.219 225.475 542.478 229.952 536.336 233.189C530.302 236.317 523.191 237.882 515.002 237.882H476.697ZM500.94 215.225H515.002C519.958 215.225 523.945 213.823 526.962 211.018C529.979 208.213 531.488 204.491 531.488 199.852V157.614C531.488 153.083 529.979 149.414 526.962 146.609C523.945 143.804 519.958 142.402 515.002 142.402H500.94V215.225Z"
        fill={props.fill ?? 'white'}
      />
      <path
        d="M612.561 239.5C604.695 239.5 597.799 238.044 591.872 235.131C585.946 232.11 581.313 227.956 577.973 222.67C574.74 217.275 573.124 211.018 573.124 203.897V153.73C573.124 146.501 574.74 140.244 577.973 134.958C581.313 129.671 585.946 125.571 591.872 122.658C597.799 119.638 604.695 118.127 612.561 118.127C620.534 118.127 627.43 119.638 633.249 122.658C639.175 125.571 643.754 129.671 646.987 134.958C650.327 140.244 651.997 146.501 651.997 153.73H627.753C627.753 148.983 626.406 145.369 623.713 142.887C621.127 140.406 617.409 139.165 612.561 139.165C607.712 139.165 603.94 140.406 601.247 142.887C598.661 145.369 597.368 148.983 597.368 153.73V203.897C597.368 208.536 598.661 212.151 601.247 214.74C603.94 217.221 607.712 218.462 612.561 218.462C617.409 218.462 621.127 217.221 623.713 214.74C626.406 212.151 627.753 208.536 627.753 203.897V193.702H610.298V173.15H651.997V203.897C651.997 211.018 650.327 217.275 646.987 222.67C643.754 227.956 639.175 232.11 633.249 235.131C627.43 238.044 620.534 239.5 612.561 239.5Z"
        fill={props.fill ?? 'white'}
      />
      <path
        d="M673.269 237.882V119.745H746V140.46H697.027V167H740.343V187.714H697.027V217.167H746V237.882H673.269Z"
        fill={props.fill ?? 'white'}
      />
      <defs>
        <linearGradient
          id="paint0_linear_1248_6418"
          x1="122.748"
          y1="61.6368"
          x2="122.748"
          y2="155.536"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#284EE8" />
          <stop offset="0.813663" stop-color="#62CBA5" />
        </linearGradient>
      </defs>
    </svg>
  )
}
