'use client'

import { useRef, useState, useCallback } from 'react'
import { Post } from './Post'
import Section from '@/components/Section'
import { useIsomorphicLayoutEffect } from '@/hooks/use-isomorphic-effect'
import type { ShortPost, VoidCallback } from '@/types'
import cn from 'classnames'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

gsap.registerPlugin(ScrollToPlugin)

type Direction = 'prev' | 'next'

export interface Props {
  posts: ShortPost[]
}

export const LatestPosts = ({ posts }: Props) => {
  const maxScroll = useRef(0)
  const carousel = useRef<HTMLDivElement>(null)
  const [frame, setFrame] = useState(0)

  const updateFrameFromScroll = useCallback(() => {
    if (!carousel.current) return

    const scrollLeft = carousel.current.scrollLeft
    const itemWidth = carousel.current.offsetWidth + 12
    const newFrame = Math.round(scrollLeft / itemWidth)

    if (newFrame !== frame) {
      setFrame(newFrame)
    }
  }, [frame])

  const nextFrame = () => {
    if (!carousel.current) {
      return
    }

    if (carousel.current.scrollLeft < maxScroll.current) {
      setFrame(frame + 1)
    }
  }

  const prevFrame = () => {
    if (!carousel.current) {
      return
    }

    if (carousel.current.scrollLeft > 0) {
      setFrame(frame - 1)
    }
  }

  const isControlHidden = (direction: Direction) => {
    if (direction === 'prev') {
      return frame <= 0
    }

    if (direction === 'next' && carousel.current !== null) {
      return (carousel.current.offsetWidth + 12) * frame >= maxScroll.current
    }

    return false
  }

  useIsomorphicLayoutEffect(() => {
    if (!carousel.current) {
      return
    }
    maxScroll.current = carousel.current.scrollWidth - carousel.current.offsetWidth
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (!carousel.current) {
      return
    }

    const xPose = (carousel.current.offsetWidth + 12) * frame
    gsap.to(carousel.current, {
      duration: 0.5,
      scrollTo: {
        x: xPose,
        autoKill: false,
      },
    })
  }, [frame])

  // Add scroll event listener to update frame state
  useIsomorphicLayoutEffect(() => {
    const carouselElement = carousel.current
    if (!carouselElement) return

    const handleScroll = () => {
      updateFrameFromScroll()
    }

    carouselElement.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      carouselElement.removeEventListener('scroll', handleScroll)
    }
  }, [updateFrameFromScroll])

  const controls: [Direction, VoidCallback][] = [
    ['next', nextFrame],
    ['prev', prevFrame],
  ]

  return (
    <Section heading="Latest Posts" subHeading="I write on Medium">
      <div>
        <div className="relative -mx-1 my-0 w-auto">
          <div
            ref={carousel}
            className="_translate-3d hide-scrollbar relative overflow-x-auto overflow-y-hidden whitespace-nowrap"
          >
            <div className="inline-block overflow-hidden">
              <div className="flex">
                {posts.map((post, idx) => (
                  <Post key={idx} {...post} />
                ))}
              </div>
            </div>
          </div>
          <div>
            {controls.map(
              ([dir, cb], idx) =>
                !isControlHidden(dir) && (
                  <div
                    key={idx}
                    className={cn(
                      'group absolute -right-3.5 -top-12 bottom-0 z-20 m-[auto_0px] block h-9 w-9 cursor-pointer',
                      {
                        '-left-3.5 right-[initial]': dir === 'prev',
                      }
                    )}
                  >
                    <button
                      onClick={cb}
                      className="relative z-0 flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-full border border-solid border-ash-100 bg-white text-ash-200 outline-0 group-hover:text-heading group-hover:shadow-carousel-control"
                    >
                      {dir === 'prev' ? (
                        <HiChevronLeft size={16} strokeWidth={1.8} />
                      ) : (
                        <HiChevronRight size={16} strokeWidth={1.8} />
                      )}
                    </button>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
      <hr className="pt-4" role="presentation" />
    </Section>
  )
}
