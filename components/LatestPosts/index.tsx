import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi2'

import { useIsomorphicLayoutEffect } from 'hooks/useIsomorphicEffect'
import SectionHeader from 'components/Base/SectionHeader'
import { MediumShortPost } from 'types/index'
import PostItem from './PostItem'
import {
  Carousel,
  CarouselButton,
  CarouselControl,
  CarouselRig,
} from './_styled'

gsap.registerPlugin(ScrollToPlugin)

const LatestPosts = ({ posts }: { posts: MediumShortPost[] }) => {
  const maxScroll = useRef(0)
  const carousel = useRef<HTMLDivElement>(null)
  const [frame, setFrame] = useState(0)

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

  const isControlHidden = (direction: 'prev' | 'next') => {
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
    maxScroll.current =
      carousel.current.scrollWidth - carousel.current.offsetWidth
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (!carousel.current) {
      return
    }

    const xPose = (carousel.current.offsetWidth + 12) * frame
    console.log(xPose)
    gsap.to(carousel.current, {
      duration: 0.5,
      scrollTo: {
        x: xPose,
        autoKill: false,
      },
    })
  }, [frame])

  return (
    <div className="with-section-gap">
      <SectionHeader
        heading="Latest Posts"
        subHeading="I write on Medium"
        withBorder={false}
      />
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
