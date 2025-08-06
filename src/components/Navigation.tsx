'use client'

import React, { cloneElement, isValidElement } from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import {
  HiOutlineNewspaper,
  HiOutlineHashtag,
  HiOutlineChatBubbleBottomCenterText,
} from 'react-icons/hi2'

import SearchIcon from '@/assets/icons/search-mini.svg'
import type { IconType } from '@/types'

export const ROUTES = [
  {
    name: 'All',
    path: '/',
    icon: <SearchIcon />,
  },
  {
    name: 'Blog',
    path: '/blog',
    icon: <HiOutlineNewspaper />,
  },
  {
    name: 'Open Source',
    path: '/open-source',
    icon: <HiOutlineHashtag />,
  },
  {
    name: 'Connect',
    path: '/connect',
    icon: <HiOutlineChatBubbleBottomCenterText />,
  },
]

interface RouteProps {
  path: string
  name: string
  active: boolean
  icon: IconType
}

const Route = (props: RouteProps) => {
  const { path, name, active, icon } = props

  return (
    <Link
      href={path}
      className="m-[11px_1px_0] box-content inline-block h-4 p-[17px_12px_11px_10px] text-sm leading-4 no-underline"
    >
      <span className="mr-[5px] inline-block size-4 align-text-bottom">
        {isValidElement(icon) && cloneElement(icon, { className: 'size-4' })}
      </span>
      {name}
      {active && <div className="mt-[11px] h-[3px] bg-ocean-200" />}
    </Link>
  )
}

export const Navigation = () => {
  const segment = useSelectedLayoutSegment()

  const isRouteActive = (path: string) => {
    return (path === '/' && segment === null) || path.startsWith(`/${segment}`)
  }

  return (
    <div className="relative z-40 -mt-[21px] border-b border-solid border-[#ebebeb] font-heading font-normal text-ash-200">
      <div className="relative z-[51] h-[58px]  whitespace-nowrap bg-white">
        <nav className="relative box-content flex items-baseline whitespace-nowrap">
          <div>
            <div className="ml-[169px] box-content inline">
              {ROUTES.map((route, idx) => (
                <Route key={idx} {...route} active={isRouteActive(route.path)} />
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
