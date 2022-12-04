import { useRef, useState } from 'react'
import { useIsomorphicLayoutEffect } from './useIsomorphicEffect'

export type ScrollDirection = 'up' | 'down' | undefined

export const useWindowScrolling = (): [
  direction: ScrollDirection,
  scrollTop: number
] => {
  const [direction, setDirection] = useState<ScrollDirection>(undefined)
  const [scrollTop, setScrollTop] = useState(0)

  const lastScrollY = useRef(0)

  useIsomorphicLayoutEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset
      const direction = scrollY > lastScrollY.current ? 'down' : 'up'
      lastScrollY.current = scrollY > 0 ? scrollY : 0
      setDirection(direction)
      setScrollTop(scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  })

  return [direction, scrollTop]
}
