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

  .doodle {
    &__bg {
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
    }
  }
`

export const SearchContainer = styled.div`
  display: flex;
  z-index: 3;

  .search {
    &__logo {
      padding: 4px 28px 0 24px;
      margin-top: 4px;
    }
  }
`

export const SearchInput = styled.div`
  display: flex;
  height: 46px;
  background: var(--bg-primary);
  border: 1px solid transparent;
  box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
  border-radius: 24px;
  margin: 0 auto;
  width: 540px;
  margin-left: 16px;

  .search {
    &__input--container {
      flex: 1;
      padding: 5px 4px 0 14px;
    }

    &__btn {
      flex: 0 0 auto;
      padding-right: 13px;
      outline: 0;
      height: 44px;
      width: 44px;
      background: transparent;
      border: none;
      cursor: pointer;
    }
  }
`
