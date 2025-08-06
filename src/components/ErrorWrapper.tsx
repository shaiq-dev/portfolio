import Link from 'next/link'

import { GOOGLE_ASSETS } from '@/constants'

export interface Props {
  code: number
  title: string
  description: string
  kind: string
}

export const ErrorWrapper = ({ code, title, description, kind }: Props) => {
  return (
    <div className="p-[15px]">
      <div
        style={{
          background: `url(${GOOGLE_ASSETS.Images.Robot}) 100% 5px no-repeat`,
        }}
        className="font-arial mx-auto mt-[7%] box-content min-h-[180px] max-w-[390px] pb-[15px] pr-[205px] pt-[30px] text-[15px] leading-[22px] text-[#222] max-[772px]:mt-0 max-[772px]:max-w-none max-[772px]:bg-none max-[772px]:pr-0"
      >
        <Link href="/">
          <style>
            {`
              @media only screen and (min-resolution: 192dpi) {
                #google-error-logo {
                  background: url(${GOOGLE_ASSETS.Images.Logo2X}) no-repeat 0% 0%/100% 100%;
                  -moz-border-image: url(${GOOGLE_ASSETS.Images.Logo2X}) 0;
                }
              }

              @media only screen and (-webkit-min-device-pixel-ratio: 2) {
                #google-error-logo {
                  background: url(${GOOGLE_ASSETS.Images.Logo2X}) no-repeat;
                  -webkit-background-size: 100% 100%;
                }
              }
            `}
          </style>
          <span
            id="google-error-logo"
            style={{
              background: `url(${GOOGLE_ASSETS.Images.Logo1X}) no-repeat`,
            }}
            className="-ml-[5px] inline-block h-[54px] w-[150px]"
          ></span>
        </Link>
        <p className="m-[11px_0_22px] overflow-hidden">
          <b>{code}.</b> <ins className="text-[#777] no-underline">{title}</ins>
        </p>
        <p className="m-[11px_0_22px] overflow-hidden">
          {description} <ins className="text-[#777] no-underline">{kind}</ins>
        </p>
      </div>
    </div>
  )
}
