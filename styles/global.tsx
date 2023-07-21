import { createGlobalStyle } from 'styled-components'

import {
  DoodleBackgroud,
  DoodleContainer,
  SearchButton,
  SearchInputContainer,
  SearchInputWrapper,
  SettingsContainer,
} from 'components/Header/_styled'

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

    --blue-1: #1a0dab;
    --blue-2: #1a73e8;
    --gray-1: #dadce0;
    --gray-2: #70757a;
    --gray-3: #4d5156;
    --bg-primary: #fff;
    --bg-secondary: #f2f2f2;
    --text-heading: #202124;

    --font-heading: Google Sans, arial, sans-serif;
    --lh-norm: 1.58;
  }

  html,
  body {
    background-color: var(--bg-primary);
    font-family: arial, Helvetica, sans-serif;
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

export default GlobalStyle
