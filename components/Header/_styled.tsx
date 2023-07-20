import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: var(--bg-primary);
  position: absolute;
  top: 20px;
  width: 100%;
  height: 46px;
  margin-top: 6px;
  z-index: 128;
`

export const DoodleContainer = styled.div`
  background: var(--bg-primary);
  position: absolute;
  left: 0;
  width: 100%;
  height: 69px;
  margin-top: -20px;
`

export const DoodleBackgroud = styled.div`
  position: absolute;
  left: -15px;
  top: -15px;
  height: 127px;
  width: 100%;
  pointer-events: none;
  opacity: 1;

  img {
    max-width: 1315px;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  z-index: 3;
`

export const SearchLogo = styled.div`
  padding: 4px 28px 0 24px;
  margin-top: 4px;
`

export const SearchInputContainer = styled.div`
  display: flex;
  height: 46px;
  background: var(--bg-primary);
  border: 1px solid transparent;
  box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
  border-radius: 24px;
  margin: 0 auto;
  /* width: 540px; */
  width: 692px;
  margin-left: 16px;

  &:hover {
    box-shadow: 0 2px 8px 1px rgb(64 60 67 / 24%);
    border-color: rgba(223, 225, 229, 0);
  }

  .search {
    /* &__input--container {
      padding: 5px 4px 0 20px;

      input {
        font: 16px arial, sans-serif;
        font-size: 16px;
        flex: 100%;
        line-height: 39px;
        height: 39px !important;
        background-color: transparent;
        border: none;
        margin: 0;
        padding: 0 0 3px;
        color: rgba(0, 0, 0, 0.87);
        word-wrap: break-word;
        outline: 0;
        display: flex;
        -webkit-tap-highlight-color: transparent;
        box-sizing: content-box;
        margin-top: -3px;
      }
    } */

    /* &__btn {
      flex: 0 0 auto;
      padding-right: 13px;
      outline: 0;
      height: 44px;
      width: 44px;
      background: transparent;
      border: none;
      cursor: pointer;

      .icon {
        background: none;
        color: #4285f4;
        height: 24px;
        width: 24px;
        margin: auto;

        svg {
          fill: currentColor;
        }
      }
    } */
  }
`

export const SearchInputWrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 5px 4px 0 20px;

  input {
    font: 16px arial, sans-serif;
    font-size: 16px;
    flex: 100%;
    line-height: 39px;
    height: 39px !important;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0 0 3px;
    color: rgba(0, 0, 0, 0.87);
    word-wrap: break-word;
    outline: 0;
    display: flex;
    -webkit-tap-highlight-color: transparent;
    box-sizing: content-box;
    margin-top: -3px;
  }
`

export const SearchButton = styled.button`
  flex: 0 0 auto;
  padding-right: 13px;
  outline: 0;
  height: 44px;
  width: 44px;
  background: transparent;
  border: none;
  cursor: pointer;

  .icon {
    background: none;
    color: #4285f4;
    height: 24px;
    width: 24px;
    margin: auto;

    svg {
      fill: currentColor;
    }
  }
`

export const SettingsContainer = styled.div`
  z-index: 3;
  padding-right: 24px;
`
export const SettingsProfileContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  padding: 4px;
  border-radius: 50%;
  height: 40px;

  &:hover {
    background-color: rgba(60, 64, 67, 0.08);
    cursor: pointer;
  }

  img {
    background-size: 32px 32px;
    border: 0;
    border-radius: 50%;
    display: block;
    margin: 0px;
    position: relative;
    height: 32px;
    width: 32px;
    z-index: 0;
  }
`
