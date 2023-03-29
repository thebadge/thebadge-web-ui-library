import * as React from 'react'
import { IconProps } from '../IconProps'

export const IconBadge = (props: IconProps) => (
  <a className={'icon ' + (!props.link ? 'icon--disabled' : '')} href={props.link} target={'_blank'} rel="noreferrer">
    <svg width="68" height="78" viewBox="0 0 68 78" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M55.4369 55.1561C56.8082 57.1498 58.0998 59.0358 59.3962 60.9171C60.4211 62.4147 61.4647 63.8982 62.4802 65.4005C63.4162 66.8044 62.9482 67.9136 61.3009 68.2693C59.2558 68.7139 57.2013 69.1257 55.1608 69.5937C54.8218 69.6848 54.5244 69.8897 54.3184 70.174C53.0549 72.046 51.8287 73.9601 50.5979 75.8648C49.6338 77.3483 48.389 77.3858 47.3781 75.9303C44.9258 72.3923 42.5391 68.8074 40.0072 65.3209C39.1467 64.2439 38.1475 63.2856 37.0355 62.4708C36.1463 61.7595 35.4537 61.8812 34.6113 62.6814C33.8718 63.3834 33.2073 64.1603 32.4772 64.8763C31.9063 65.4332 31.2558 65.8123 30.3666 65.3443L26.0423 71.6622C25.0455 73.1083 24.0534 74.5591 23.0565 76.0005C22.1206 77.3202 20.8476 77.3296 19.9771 76.0005C18.7136 74.0864 17.4921 72.1442 16.2098 70.2442C15.9702 69.9165 15.6246 69.6817 15.2317 69.5796C13.1632 69.1116 11.0806 68.6858 9.0074 68.2412C7.60342 67.9417 7.08863 66.7389 7.88422 65.5549C9.58771 63.0184 11.3286 60.5053 13.0883 57.9313C12.0634 57.4633 12.0306 56.5273 12.0587 55.6147C12.0868 54.7022 12.1757 53.8551 12.171 52.9799C12.171 51.7351 11.8247 51.2905 10.6173 51.0144C9.68131 50.8038 8.71724 50.7055 7.7719 50.5464C6.01693 50.2235 5.58169 49.4794 6.16669 47.7759C6.4428 46.9756 6.7938 46.1987 7.06523 45.3938C7.53322 43.9898 7.28987 43.3721 5.98885 42.6935C5.1605 42.2676 4.29004 41.9166 3.47105 41.4673C2.06707 40.7045 1.92667 40.0072 2.84862 38.7389C3.43361 37.9433 4.11688 37.2133 4.69251 36.399C5.43662 35.3694 5.40854 34.747 4.56147 33.8203C3.89224 33.0903 3.12941 32.4491 2.44146 31.7331C1.30892 30.5537 1.3838 29.7769 2.73162 28.8268C3.54125 28.2559 4.41171 27.7739 5.21198 27.1889C6.19009 26.4728 6.33984 25.8551 5.82973 24.76C5.39918 23.824 4.85163 22.9676 4.45383 22.0363C3.92032 20.7961 4.26196 20.0286 5.5349 19.5793C6.51768 19.233 7.55194 19.0177 8.54409 18.6995C9.83107 18.283 10.2101 17.6699 10.0229 16.3268C9.88723 15.3908 9.66727 14.4548 9.55495 13.4767C9.36307 11.9464 9.86851 11.3848 11.4269 11.3894C12.274 11.3894 13.1257 11.483 13.9728 11.5158C15.6482 11.5766 16.1583 11.1508 16.4157 9.50812C16.5748 8.50193 16.6638 7.47703 16.8837 6.49425C17.1552 5.3851 17.7589 5.04815 18.854 5.3617C19.7899 5.63314 20.7259 6.04029 21.6619 6.36321C23.2671 6.92012 23.8147 6.70952 24.6056 5.19323C25.0361 4.36488 25.3778 3.48973 25.8411 2.68011C26.5524 1.44929 27.2451 1.30889 28.4057 2.15128C29.206 2.73159 29.9313 3.41954 30.7457 3.99985C31.8782 4.82819 32.5147 4.77671 33.5162 3.80329C34.2041 3.13406 34.8265 2.39931 35.5285 1.73008C36.647 0.677099 37.4286 0.756658 38.3365 2.01088C38.9308 2.83922 39.4316 3.73309 40.0306 4.55208C40.7747 5.56294 41.3972 5.7127 42.5297 5.16983C43.4657 4.72991 44.3174 4.17768 45.2394 3.76585C46.5825 3.1481 47.3173 3.45697 47.8087 4.84691C48.1175 5.72674 48.3047 6.644 48.5715 7.53787C49.0395 9.02609 49.5075 9.37708 51.0472 9.2086C51.9176 9.115 52.7787 8.91377 53.6445 8.77337C55.348 8.49257 56.036 9.08693 55.9845 10.8232C55.9611 11.7826 55.8535 12.7466 55.8581 13.706C55.8581 14.8666 56.1951 15.2831 57.3464 15.5171C58.3713 15.7231 59.4242 15.8073 60.4491 15.9851C61.9467 16.2612 62.3539 16.9492 61.8812 18.414C61.6004 19.3032 61.2073 20.1549 60.9078 21.0395C60.4398 22.4434 60.6597 22.991 61.9467 23.6789C62.7938 24.1469 63.697 24.4839 64.5347 24.9519C65.9059 25.7241 66.0557 26.4354 65.1244 27.6896C64.5207 28.5086 63.828 29.2621 63.2524 30.0904C62.5738 31.0264 62.6066 31.6582 63.3975 32.5287C64.0808 33.2821 64.8764 33.9326 65.569 34.6768C66.6781 35.8608 66.6126 36.5487 65.3069 37.5315C64.53 38.0978 63.683 38.5658 62.9014 39.1274C61.7782 39.9464 61.6144 40.5828 62.2182 41.823C62.6487 42.7122 63.2056 43.5452 63.6221 44.4484C64.2258 45.8009 63.9029 46.5123 62.4989 46.9943C61.6191 47.2985 60.7019 47.4904 59.808 47.7665C58.287 48.2345 57.936 48.8382 58.1607 50.42C58.2917 51.2858 58.521 52.1422 58.6287 53.0127C58.7971 54.6226 58.3198 55.128 56.7005 55.1468C56.2934 55.1608 55.9517 55.1561 55.4369 55.1561ZM12.7654 54.3465C12.7654 55.0251 12.7654 55.7037 12.7654 56.3823C12.7473 56.5042 12.7605 56.6287 12.8035 56.7441C12.8465 56.8596 12.9181 56.9623 13.0115 57.0427C13.105 57.123 13.2172 57.1784 13.3379 57.2037C13.4585 57.229 13.5835 57.2233 13.7014 57.1872C14.6795 57.0515 15.6529 56.883 16.631 56.7192C18.5685 56.401 19.5092 56.9626 20.0895 58.8299C20.3515 59.6676 20.5294 60.5287 20.7961 61.3617C21.1658 62.5223 21.5262 62.6814 22.6026 62.1666C23.2671 61.8531 23.8942 61.4646 24.5401 61.1137C26.6367 59.9764 27.6475 60.2245 28.9579 62.1994C29.3978 62.8593 29.7863 63.5519 30.2496 64.1977C30.8439 65.0354 31.2183 65.0869 31.9671 64.4036C32.5708 63.8514 33.1043 63.2196 33.6753 62.6299C35.2477 60.9967 36.296 60.9311 38.0885 62.3445C38.7343 62.8546 39.3427 63.4115 40.0025 63.8888C40.8028 64.4692 41.1257 64.3943 41.6031 63.5191C42.0804 62.644 42.4548 61.7314 42.9135 60.8563C43.7137 59.3306 44.6357 58.9562 46.283 59.4991C47.1675 59.7892 48.0193 60.1777 48.9038 60.4725C50.0036 60.8375 50.3592 60.6316 50.5651 59.5131C50.7149 58.7082 50.7945 57.8892 50.9115 57.0749C51.2297 54.9596 52.1984 54.1921 54.3372 54.3371C55.2123 54.3933 56.0921 54.426 56.9673 54.4541C57.6365 54.4541 57.9969 54.1499 57.9033 53.462C57.7722 52.526 57.6178 51.6181 57.4353 50.7008C57.0749 48.6276 57.6459 47.6776 59.6489 47.0786C60.3789 46.8586 61.1277 46.6948 61.8578 46.4702C63.2618 46.0396 63.4349 45.6512 62.7517 44.3268C62.4147 43.6716 62.0169 43.0491 61.6753 42.3986C60.7393 40.6015 60.9827 39.5626 62.6534 38.4207C63.4209 37.8919 64.2352 37.4239 64.9933 36.8716C65.7515 36.3194 65.7749 35.9357 65.1384 35.2758C64.502 34.6159 63.6877 33.9186 63.0091 33.1979C61.7829 31.9016 61.7174 30.9469 62.7657 29.4961C63.332 28.7192 63.9872 28.0125 64.5581 27.2404C65.1946 26.3792 65.1384 26.1031 64.1978 25.5837C63.3554 25.1157 62.4615 24.7553 61.6098 24.306C60.0139 23.4637 59.6536 22.6072 60.2058 20.8944C60.51 19.9584 60.9265 19.0458 61.226 18.0864C61.5255 17.127 61.3102 16.8369 60.3602 16.6544C59.5787 16.5046 58.7924 16.4157 58.0203 16.3268C55.7599 16.0694 55.0766 15.2972 55.1421 13.004C55.1655 12.185 55.2825 11.3614 55.2685 10.5424C55.2685 9.47068 54.9502 9.23668 53.8972 9.3958C52.9613 9.5362 52.0253 9.76552 51.0472 9.86379C49.236 10.0557 48.4451 9.5128 47.9023 7.76251C47.6261 6.87332 47.4343 5.95138 47.1441 5.06687C46.8025 4.05601 46.4468 3.91093 45.4874 4.36488C44.7199 4.72056 43.9945 5.16983 43.2411 5.55826C41.3691 6.54105 40.3489 6.29301 39.1368 4.524C38.622 3.77521 38.1727 2.98898 37.6345 2.25891C37.0963 1.52885 36.7828 1.47737 36.1182 2.09044C35.3507 2.80179 34.6628 3.59737 33.9046 4.32276C32.7019 5.47402 31.794 5.5489 30.4227 4.58484C29.5663 3.98113 28.7894 3.27446 27.9424 2.65203C27.217 2.11852 26.8847 2.18404 26.4448 2.95622C26.0049 3.72841 25.6445 4.58016 25.2374 5.38978C24.264 7.32727 23.3654 7.69231 21.3203 6.95756C20.4966 6.65804 19.6917 6.31173 18.854 6.04965C18.0163 5.78758 17.6559 5.92798 17.45 6.8546C17.2441 7.78123 17.1926 8.64701 17.0616 9.54088C16.7761 11.6328 15.9571 12.3067 13.8745 12.185C13.1679 12.1476 12.4705 12.0727 11.7545 12.0587C10.2148 12.0212 10.0276 12.2365 10.2569 13.7903C10.3599 14.4595 10.519 15.124 10.6173 15.7933C10.9589 18.0911 10.388 18.9428 8.13693 19.5372C7.47707 19.7104 6.81251 19.8554 6.16669 20.0567C4.76271 20.4919 4.60827 20.9037 5.26814 22.2328C5.50682 22.7008 5.78293 23.1688 6.04501 23.6368C7.27583 25.8738 7.00439 26.9128 4.82823 28.2746C4.2058 28.6677 3.56465 29.0374 2.97966 29.4774C2.18875 30.0623 2.15131 30.4133 2.82054 31.1341C3.48977 31.8548 4.17304 32.4257 4.82823 33.0903C6.15732 34.4194 6.2322 35.4817 5.09966 36.984C4.55679 37.7094 3.93904 38.3879 3.39149 39.0993C2.73162 39.9744 2.79714 40.288 3.76588 40.8121C4.73463 41.3363 5.66593 41.6966 6.57384 42.2161C7.94974 43.0117 8.23989 43.8307 7.78126 45.3563C7.61746 45.8992 7.38815 46.4187 7.20095 46.9522C7.01375 47.4857 6.8172 48.0145 6.66276 48.5574C6.60448 48.6762 6.576 48.8073 6.57979 48.9395C6.58357 49.0717 6.61951 49.201 6.68449 49.3162C6.74946 49.4314 6.84153 49.5291 6.95271 49.6007C7.0639 49.6724 7.19087 49.7158 7.32263 49.7274C7.93102 49.8584 8.54409 49.9661 9.16184 50.0456C12.4705 50.4809 12.9713 51.0705 12.7654 54.3465ZM40.8777 65.2928C43.1849 68.639 45.5857 72.1396 48.0099 75.6308C48.6511 76.5668 49.3624 76.5106 49.9942 75.5372C51.2718 73.5669 52.5307 71.578 53.8411 69.6311C54.0979 69.2881 54.4646 69.0437 54.88 68.9385C56.9766 68.4705 59.092 68.0446 61.1886 67.586C62.3118 67.3426 62.5645 66.753 61.9327 65.831C59.5646 62.3741 57.1857 58.9235 54.7958 55.479C54.6648 55.2871 54.4308 55.0532 54.2295 55.0438C52.8255 54.9502 51.9925 55.2169 51.7398 56.5835C51.5479 57.6131 51.4403 58.6567 51.239 59.6816C50.9349 61.2213 50.2516 61.6097 48.74 61.123C47.8835 60.8422 47.0505 60.4725 46.1941 60.187C44.7386 59.719 44.1583 59.9437 43.4563 61.3242C43.0585 62.1058 42.7497 62.9388 42.291 63.6642C41.866 64.2454 41.3932 64.7902 40.8777 65.2928ZM17.1505 57.337C16.3408 57.4774 15.2504 57.6505 14.1694 57.8705C13.9617 57.9493 13.7868 58.0961 13.6733 58.287C11.9355 60.8017 10.2055 63.3226 8.48325 65.8497C7.90294 66.7015 8.17437 67.352 9.20396 67.5766C11.3286 68.0446 13.4674 68.4518 15.5921 68.9432C16.0047 69.0515 16.3679 69.2975 16.6216 69.6405C17.9695 71.6341 19.2564 73.6699 20.5809 75.6776C21.1237 76.4919 21.8538 76.4966 22.4107 75.6776C24.8131 72.2113 27.2014 68.7357 29.5757 65.2507C29.6377 65.1411 29.6737 65.0187 29.681 64.8929C29.6883 64.7672 29.6667 64.6414 29.6178 64.5253C29.1498 63.7438 28.6818 62.9763 28.1577 62.2368C27.2685 60.9779 26.6507 60.8329 25.2795 61.5114C24.5214 61.8952 23.8006 62.3492 23.0378 62.7235C21.4279 63.5051 20.6511 63.1681 20.1082 61.4459C19.8133 60.5099 19.6074 59.5318 19.2798 58.6005C18.9288 57.6037 18.4655 57.3276 17.1505 57.3416V57.337Z"
        fill={`${props.color}`}
        stroke={`${props.color}`}
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M34.2238 52.3808C30.4972 52.3771 26.8554 51.2687 23.7586 49.1956C20.6619 47.1225 18.2492 44.1779 16.8257 40.7339C15.4022 37.2899 15.0316 33.5012 15.7609 29.8466C16.4902 26.1921 18.2866 22.8358 20.923 20.202C23.5594 17.5682 26.9175 15.7751 30.5727 15.0495C34.228 14.3238 38.0164 14.6981 41.4589 16.1251C44.9015 17.5521 47.8438 19.9676 49.9138 23.0664C51.9838 26.1652 53.0886 29.8082 53.0886 33.5348C53.0905 36.0118 52.6036 38.4648 51.656 40.7534C50.7084 43.0419 49.3186 45.1211 47.5662 46.8717C45.8139 48.6223 43.7333 50.0101 41.4438 50.9554C39.1543 51.9008 36.7008 52.3851 34.2238 52.3808ZM34.1724 51.7958C36.5764 51.8107 38.9596 51.3492 41.1844 50.438C43.4092 49.5269 45.4314 48.1841 47.1345 46.4871C48.8375 44.7902 50.1875 42.7728 51.1067 40.5513C52.0258 38.3298 52.4958 35.9483 52.4896 33.5441C52.4896 23.5665 44.3699 15.3299 34.4812 15.2924C24.3211 15.2597 16.1219 23.3138 15.9721 33.2446C15.8177 43.2503 23.9561 51.8146 34.1724 51.7958Z"
        fill={`${props.color}`}
        stroke={`${props.color}`}
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </svg>
  </a>
)
