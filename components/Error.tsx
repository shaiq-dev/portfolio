import NextLink from 'next/link'
import styled from 'styled-components'

import { LinkedAssets } from 'constants/index'

export type ErrorProps = {
  code: number
  title: string
  description: string
  kind: string
}

const Error = ({ code, title, description, kind }: ErrorProps) => {
  return (
    <>
      <NextLink href="/">
        <ErrorLogo />
      </NextLink>
      <p>
        <b>{code}.</b> <ins>{title}</ins>
      </p>
      <p>
        {description} <ins>{kind}</ins>
      </p>
    </>
  )
}

export default Error

const ErrorLogo = styled.span`
  background: url(${LinkedAssets.GOOGLE_LOGO_X1}) no-repeat;
  display: inline-block;
  height: 54px;
  width: 150px;
  margin-left: -5px;

  @media only screen and (min-resolution: 192dpi) {
    background: url(${LinkedAssets.GOOGLE_LOGO_X2}) no-repeat 0% 0%/100% 100%;
    -moz-border-image: url(${LinkedAssets.GOOGLE_LOGO_X2}) 0;
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 2) {
    background: url(${LinkedAssets.GOOGLE_LOGO_X2}) no-repeat;
    -webkit-background-size: 100% 100%;
  }
`
