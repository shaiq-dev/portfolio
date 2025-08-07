'use client'

import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { cn } from '@/util'
import { useIsomorphicLayoutEffect } from '@/hooks'
import SearchBar from './SearchBar'

gsap.registerPlugin(ScrollTrigger)

export const SiteHeader = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [sticky, setSticky] = useState(false)

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) {
      return
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'none', position: 'absolute', top: 20 },
        scrollTrigger: {
          trigger: 'body',
          start: '+=66',
          end: '164px top',
          scrub: true,
        },
      })

      tl.to(ref.current, {
        top: -52,
        position: 'absolute',
        onComplete: () => setSticky(true),
      })

      tl.add(() => {}, '+=0.5')
      tl.to(ref.current, {
        top: 0,
        position: 'fixed',
        duration: 0.5,
        onReverseComplete: () => setSticky(false),
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div
      className={cn('h-site-header-height absolute top-5 z-50 mt-1.5 w-full bg-white', {
        '!mt-0': sticky,
      })}
      ref={ref}
      data-sticky={sticky}
    >
      <div
        className={cn('h-doodle-container-height absolute left-0 -mt-5 w-full bg-white', {
          'shadow-site-header-doodle !h-[72px] overflow-hidden': sticky,
        })}
      >
        <div
          className={cn(
            'pointer-events-none absolute -mt-[15px] -ml-[15px] h-[127px] w-full opacity-100',
            {
              'opacity-0': sticky,
            }
          )}
        >
          <img
            src={'https://media.graphassets.com/5xazBFnJSKq2zHb4riuZ'}
            width="100%"
            height="138px"
            className="max-w-[1315px]"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <SearchBar sticky={sticky} />
      </div>
    </div>
  )
}
