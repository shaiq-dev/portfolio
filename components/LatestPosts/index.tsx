import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi2'

import { useIsomorphicLayoutEffect } from 'hooks/useIsomorphicEffect'
import { MediumShortPost } from 'types/index'
import {
  Carousel,
  CarouselButton,
  CarouselControl,
  CarouselRig,
  LatestPostsTitle,
} from './_styled'
import PostItem from './PostItem'

gsap.registerPlugin(ScrollToPlugin)

const LatestPosts = ({ posts }: { posts: MediumShortPost[] }) => {
  const maxScroll = useRef(0)
  const carousel = useRef<HTMLDivElement>(null)
  const [frame, setFrame] = useState(0)
  const [maxFrames, setMaxFrames] = useState(-1)

  const nextFrame = () => {
    if (!carousel.current) {
      return
    }

    if (carousel.current.scrollLeft < maxScroll.current) {
      setFrame(frame + 1)
    }

    const x = carousel.current.offsetWidth * frame
  }

  const prevFrame = () => {
    if (!carousel.current) {
      return
    }

    if (carousel.current.scrollLeft > 0) {
      setFrame(frame - 1)
    }
  }

  const isControlHidden = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      return frame <= 0
    }

    if (direction === 'next' && carousel.current !== null) {
      return carousel.current.offsetWidth * frame >= maxScroll.current
    }

    return false
  }

  useIsomorphicLayoutEffect(() => {
    if (!carousel.current) {
      return
    }
    maxScroll.current =
      carousel.current.scrollWidth - carousel.current.offsetWidth

    setMaxFrames(
      Math.floor(carousel.current.scrollWidth / carousel.current.offsetWidth) -
        1
    )
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (!carousel.current) {
      return
    }

    const xPose = carousel.current.offsetWidth * frame

    console.log({ frame, maxFrames })

    gsap.to(carousel.current, {
      duration: 0.5,
      scrollTo: {
        x: xPose + (frame === maxFrames ? 16 : 0),
        autoKill: false,
      },
    })
  }, [frame])

  return (
    <div>
      <LatestPostsTitle>
        <h2>Latest Posts</h2>
        <div>I write on Medium</div>
      </LatestPostsTitle>
      <div>
        <Carousel>
          <CarouselRig ref={carousel}>
            <div className="d-in-block overflow-hidden">
              <div className="d-flex">
                {posts.map((item, index) => (
                  <PostItem key={index} {...item} />
                ))}
              </div>
            </div>
          </CarouselRig>
          <div>
            {!isControlHidden('next') && (
              <CarouselControl>
                <CarouselButton onClick={nextFrame}>
                  <HiChevronRight size={16} strokeWidth={1.8} />
                </CarouselButton>
              </CarouselControl>
            )}
          </div>
          <div>
            {!isControlHidden('prev') && (
              <CarouselControl $left>
                <CarouselButton onClick={prevFrame}>
                  <HiChevronLeft size={16} strokeWidth={1.8} />
                </CarouselButton>
              </CarouselControl>
            )}
          </div>
        </Carousel>
      </div>
      <hr style={{ paddingTop: 16 }} role="presentation" />
    </div>
  )
}

export default LatestPosts
