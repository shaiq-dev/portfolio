import { createGlobalStyle } from 'styled-components'

import { LinkedAssets } from 'constants/index'
import {
  DoodleBackgroud,
  DoodleContainer,
  SearchButton,
  SearchInputContainer,
  SearchInputWrapper,
  SettingsContainer,
} from 'components/SiteHeader/_styled'

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  :root {
    --center-abs-margin: 180px;
    --center-width: 652px;
    --r-margin: 60px;
    --r-width: 369px;
    --section-gap: 44px;

    --blue-1: #1a0dab;
    --blue-2: #1a73e8;
    --blue-3: #417dff;
    --blue-4: #638ed4;
    --gray-1: #dadce0;
    --gray-2: #70757a;
    --gray-3: #4d5156;
    --green-1: #34a853;
    --red-1: rgb(217, 48, 37);
    --bg-primary: #fff;
    --bg-secondary: #f2f2f2;
    --text-heading: #202124;

    --font: arial, Helvetica, sans-serif;
    --font-heading: Google Sans, arial, sans-serif;
    --lh-norm: 1.58;
  }

  html,
  body {
    background-color: var(--bg-primary);
    font-family: var(--font);
    font-size: 14px;
  }

  a {
    color: inherit;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0,0,0,.1);

    &.link {
      color: var(--blue-1);

      &:hover {
        text-decoration: underline;
      }
    }
  }

  h2 {
    font-size: 30px;
    font-family: var(--font-heading);
    font-weight: 400;
    line-height: 1.2;
    color: var(--text-heading);
  }

  hr {
    border: 0;
    border-bottom: 1px solid var(--gray-1);
    margin: 0;
  }

  img {
    height: auto;
    max-width: 100%;
  }

  /* Utility classes */

  .d-flex {
    display: flex;
  }

  &.flex-column {
    flex-direction: column;
  }
  
  &.justify-center {
    justify-content: center;
  }

  &.justify-between {
    justify-content: space-between;
  }

  &.items-center {
    align-items: center;
  }

  &.flex-1 {
    flex: 1;
  }

  &.flex-grow-1 {
    flex-grow: 1;
  }

  &.flex-wrap {
    flex-wrap: wrap;
  }


  .d-in-block {
    display: inline-block;
  }

  .overflow-hidden {
    overflow: hidden;
  }

  .h {
    &-full {
      height: 100%;
    }
  }

  .with-section-gap {
    margin-bottom: var(--section-gap);
  }

  .with-border-bottom {
    border-bottom: 1px solid var(--gray-1);
  }

  .highlight > b {
    background-color: rgba(80, 151, 255, 0.18);
    color: #040c28;
    font-weight: 500;
  }


  /* Header Sticky Styles */

  .header-sticky {
    margin-top: 0;

    .logo {
      margin-top: 8px;
      padding-left: 26px;
    }

    ${DoodleContainer} {
      height: 72px;
      overflow: hidden;
      background: #fff;
      box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);
    }

    ${DoodleBackgroud} {
      opacity: 0;
    }

    ${SearchInputContainer} {
      height: 34px;
      border-radius: 16px;
      background: #fff;
      margin: 10px 0 0 14px;
      box-shadow: none;
      border: 1px solid #dfe1e5;
      /* margin-left: 14px; */

      &:hover {
        border-color: rgba(223,225,229,0);
        box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
      }
    }

    ${SearchInputWrapper} {
      padding-top: 0;

      input {
        padding: 0;
        margin-top: 0;
        line-height: 32px;
        font-size: 14px;
        height: 32px !important;
      }
    }

    ${SearchButton} {
      height: 32px;
      line-height: 32px;

      .icon, svg {
        height: 20px;
        width: 20px;
      }
    }


    ${SettingsContainer} {
      margin-top: 6px;
    }
  }

  /* CSS variable reset based on size */
  
  @media (min-width:1459px) and (max-width:1659px) {
    :root {
      --center-abs-margin: calc(25vw + -184.75px)
    }
  }

  @media (min-width:1659px) {
    :root {
      --center-abs-margin: 230px
    }
  }

  @media (min-width:1459px) and (max-width:1539px) {
    :root {
      --r-margin: calc(50vw + -669px)
    }
  }

  @media (min-width:1539px) {
    :root {
      --r-margin: 100px
    }
  }

  @media (min-width:1121px) and (max-width:1300px) {
    :root {
      --center-abs-margin: calc((100vw - 1065px)/2)
    }
  }

  @media (max-width:1121px) {
    :root {
      --center-abs-margin: 28px
    }
  }

  @media (max-width:1300px) {
    :root {
      --r-margin: 44px
    }
  }

`

// Global Style For Errors Page
export const GlobalErrorStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0; 
  }

  html {
    padding: 15px;
    background: #fff;
  }

  body {
    margin: 7% auto 0;
    max-width: 390px;
    min-height: 180px;
    padding: 30px 0 15px;
    color: #222;
    font: 15px/22px arial, sans-serif;
    background: url(${LinkedAssets.GOOGLE_ROBOT}) 100% 5px no-repeat;
    padding-right: 205px;
  }

  p {
    margin: 11px 0 22px;
    overflow: hidden;
  }

  ins {
    color: #777;
    text-decoration: none;
  }

  @media screen and (max-width: 772px) {
    body {
      background: none;
      margin-top: 0;
      max-width: none;
      padding-right: 0;
    }
  }
`

export default GlobalStyle
