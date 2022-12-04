import styled from 'styled-components'

export const TopNavContainer = styled.div`
  color: var(--gray-2);
  font-family: var(--font-heading);
  font-weight: 400;
  border-bottom: 1px solid #ebebeb;
  margin-top: -21px;
  position: relative;
  z-index: 126;

  .navbar {
    &__wrapper {
      background: var(--bg-primary);
      height: 58px;
      padding: 0;
      position: relative;
      z-index: 126;
      white-space: nowrap;

      nav {
        position: relative;
        white-space: nowrap;
        align-items: baseline;
        display: flex;
        box-sizing: content-box;
      }
    }
  }
`

export const NavLinks = styled.div`
  display: inline;
  margin-left: 169px;
  box-sizing: content-box;

  // Applies to NavLink from  next/link
  a {
    height: 16px;
    line-height: 16px;
    margin: 11px 1px 0;
    text-decoration: none;
    display: inline-block;
    box-sizing: content-box;
    padding: 17px 12px 11px 10px;
    font-size: 14px;
  }
`

export const NavItemContainer = styled.span`
  span {
    display: inline-block;
    height: 16px;
    width: 16px;
    margin-right: 5px;
    vertical-align: text-bottom;

    svg {
      height: 16px;
      width: 16px;
    }
  }

  .active-tab {
    background: var(--blue-2);
    height: 3px;
    margin-top: 11px;
  }
`
