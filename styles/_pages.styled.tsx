import styled from 'styled-components'

import { GoogleLogos } from 'constants/index'

// Home Page
export const HomeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-width: calc(
    var(--center-abs-margin) + var(--center-width) + var(--r-margin) +
      var(--r-width)
  );
`

export const HomeCenterColumn = styled.div`
  width: var(--center-width);
  position: relative;
  margin-left: var(--center-abs-margin);
  flex: 0 auto;
`

export const HomeRightColumn = styled.div`
  margin-left: var(--r-margin);
  flex: 0 auto;
  width: 369px;
  position: relative;
  padding-bottom: 15px;
  transition: opacity 0.3s;
`

// Blog Page

// Open-Source Page

// Connect Page
export const ConnectContainer = styled(HomeContainer)``

export const ConnectCenterColumn = styled(HomeCenterColumn)``

export const ConnectSubHeading = styled.p`
  font-size: 18px;
  font-family: var(--font-heading);
  font-weight: 300;
  color: var(--gray-2);
  margin: 24px 0px 36px;
`

// Error Page
export const ErrorPageLogo = styled.span`
  background: url(${GoogleLogos.x1}) no-repeat;
  display: inline-block;
  height: 54px;
  width: 150px;
  margin-left: -5px;

  @media only screen and (min-resolution: 192dpi) {
    background: url(${GoogleLogos.x2}) no-repeat 0% 0%/100% 100%;
    -moz-border-image: url(${GoogleLogos.x2}) 0;
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 2) {
    background: url(${GoogleLogos.x2}) no-repeat;
    -webkit-background-size: 100% 100%;
  }
`
