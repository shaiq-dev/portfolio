import NavLink from 'next/link'
import { useRouter } from 'next/router'
import { IconType } from 'react-icons'

import Constants from 'constants/index'
import {
  TopNavContainer,
  TopNavWrapper,
  TopNavLinks,
  TopNavItemContainer,
  TopNavItemActive,
} from './_styled'

type NavItemProps = {
  lablel: string
  isActive: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any | IconType
}

const TopNavItem = ({ lablel, isActive, icon: Icon }: NavItemProps) => {
  return (
    <TopNavItemContainer>
      <span>
        <Icon />
      </span>
      {lablel}
      {isActive && <TopNavItemActive />}
    </TopNavItemContainer>
  )
}

const TopNav = () => {
  const router = useRouter()

  return (
    <TopNavContainer>
      <TopNavWrapper>
        <nav>
          <div>
            <TopNavLinks>
              {Constants.Nav.map(({ name, path, icon }, index) => (
                <NavLink href={path} key={index}>
                  <TopNavItem
                    lablel={name}
                    isActive={router.pathname === path}
                    icon={icon}
                  />
                </NavLink>
              ))}
            </TopNavLinks>
          </div>
        </nav>
      </TopNavWrapper>
    </TopNavContainer>
  )
}

export default TopNav
