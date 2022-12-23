import { createGlobalStyle } from 'styled-components'

import { DoodleContainer, SearchInput } from 'components/Header/header.styled'

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    --center-abs-margin: 180px;
    --center-width: 652px;
    --r-margin: 60px;
    --r-width: 369px;

    --blue: #1a0dab;
    --blue-2: #1a73e8;
    --gray-1: #dadce0;
    --gray-2: #70757a;
    --gray-3: #4d5156;
    --bg-primary: #fff;
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
      color: var(--blue);

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

  /* Utility classes */

  .d-flex {
    display: flex;

    &.flex-column {
      flex-direction: column;
    }
    
    &.jc {
      justify-content: center;
    }

    &.jsb {
      justify-content: space-between;
    }

    &.ac {
      align-items: center;
    }

    &.f-1 {
      flex: 1;
    }

    &.f-grow-1 {
      flex-grow: 1;
    }

  }

  .d-in-block {
    display: inline-block;
  }

  .overflow-hidden {
    overflow: hidden;
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

      .bg {
        opacity: 0;
      }
    }

    ${SearchInput} {
      height: 34px;
      border-radius: 16px;
      background: #fff;
      margin: 10px 0 0;
      box-shadow: none;
      border: 1px solid #dfe1e5;
      margin-left: 14px;
    }
  }

`

export default GlobalStyle
