import NavLink from 'next/link'
import { useRouter } from 'next/router'
import { IconType } from 'react-icons'

import Constants from 'constants/index'
import { TopNavContainer, NavLinks, NavItemContainer } from './topNav.styled'

type NavItemProps = {
  lablel: string
  isActive: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any | IconType
}

const NavItem = ({ lablel, isActive, icon: Icon }: NavItemProps) => {
  return (
    <NavItemContainer>
      <span>
        <Icon />
      </span>
      {lablel}
      {isActive && <div className="active-tab" />}
    </NavItemContainer>
  )
}

const TopNav = () => {
  const router = useRouter()

  return (
    <TopNavContainer className="navbar">
      <div className="navbar__wrapper">
        <nav>
          <div>
            <NavLinks>
              {Constants.Nav.map(({ name, path, icon }, index) => (
                <NavLink href={path} key={index}>
                  <NavItem
                    lablel={name}
                    isActive={router.pathname === path}
                    icon={icon}
                  />
                </NavLink>
              ))}
            </NavLinks>
          </div>
        </nav>
      </div>
    </TopNavContainer>
  )
}

export default TopNav
