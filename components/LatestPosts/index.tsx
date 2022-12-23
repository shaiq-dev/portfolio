import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi2'

import { LatestPostsContainer, LatestPostsItem } from './latestPosts.styled'
import { useIsomorphicLayoutEffect } from 'hooks/useIsomorphicEffect'
import { MediumShortPost } from '../../types'

gsap.registerPlugin(ScrollToPlugin)

type PostItemProps = MediumShortPost

const PostItem = ({
  title,
  link,
  thumbnail,
  pubDate,
  categories,
}: PostItemProps) => {
  return (
    <LatestPostsItem className="item">
      <div className="item__container">
        <div className="d-flex flex-column f-grow-1">
          <div className="item__wrapper">
            <a href={link} className="d-flex flex-column f-grow-1">
              <div className="item__image">
                <img src={thumbnail} alt="Post Image" />
              </div>
              <div className="item__content">
                <div className="item__content--tags">
                  {categories.map((tag, index) => (
                    <span key={index}>#{tag} </span>
                  ))}
                </div>
                <div className="item__content--title">{title}</div>
                <div className="item__content--time">{pubDate}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </LatestPostsItem>
  )
}

const LatestPosts = ({ posts }: { posts: MediumShortPost[] }) => {
  const data = [
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      tags: ['tag1', 'tag2', 'tag3'],
      url: 'https://google.com',
      image: 'https://picsum.photos/200/300',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      tags: ['tag1', 'tag2', 'tag3'],
      url: 'https://google.com',
      image: 'https://picsum.photos/200/300',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      tags: ['tag1', 'tag2', 'tag3'],
      url: 'https://google.com',
      image: 'https://picsum.photos/200/300',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      tags: ['tag1', 'tag2', 'tag3'],
      url: 'https://google.com',
      image: 'https://picsum.photos/200/300',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      tags: ['tag1', 'tag2', 'tag3'],
      url: 'https://google.com',
      image: 'https://picsum.photos/200/300',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      tags: ['tag1', 'tag2', 'tag3'],
      url: 'https://google.com',
      image: 'https://picsum.photos/200/300',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      tags: ['tag1', 'tag2', 'tag3'],
      url: 'https://google.com',
      image: 'https://picsum.photos/200/300',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      tags: ['tag1', 'tag2', 'tag3'],
      url: 'https://google.com',
      image: 'https://picsum.photos/200/300',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      tags: ['tag1', 'tag2', 'tag3'],
      url: 'https://google.com',
      image: 'https://picsum.photos/200/300',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      tags: ['tag1', 'tag2', 'tag3'],
      url: 'https://google.com',
      image: 'https://picsum.photos/200/300',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      tags: ['tag1', 'tag2', 'tag3'],
      url: 'https://google.com',
      image: 'https://picsum.photos/200/300',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      tags: ['tag1', 'tag2', 'tag3'],
      url: 'https://google.com',
      image: 'https://picsum.photos/200/300',
    },
  ]

  const maxScroll = useRef(0)
  const carousel = useRef<HTMLDivElement>(null)
  const [frame, setFrame] = useState(0)
  const [showControls, setShowControls] = useState({
    prev: false,
    next: true,
  })

  const nextFrame = () => {
    if (!carousel.current) {
      return
    }

    if (carousel.current.scrollLeft < maxScroll.current) {
      setFrame(frame + 1)
    }

    setShowControls({
      prev: true,
      next: carousel.current.scrollLeft < maxScroll.current,
    })
  }

  const prevFrame = () => {
    if (!carousel.current) {
      return
    }

    if (carousel.current.scrollLeft > 0) {
      setFrame(frame - 1)
    }

    setShowControls({
      prev: carousel.current.scrollLeft > 0,
      next: true,
    })
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
    gsap.to(carousel.current, {
      duration: 0.5,
      scrollTo: {
        x: carousel.current.offsetWidth * frame,
        autoKill: false,
      },
    })
  }, [frame])

  return (
    <LatestPostsContainer className="latest-posts">
      <div className="latest-posts__heading d-flex flex-column">
        <h2>Latest Posts</h2>
        <div>I write on Medium</div>
      </div>
      <div>
        <div className="latest-posts__carousel">
          <div className="latest-posts__carousel--rig" ref={carousel}>
            <div className="d-in-block overflow-hidden">
              <div className="d-flex latest-posts__carousel--scroller">
                {posts.map((item, index) => (
                  <PostItem key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
          <div>
            {showControls.next && (
              <div className="latest-posts__carousel--control">
                <button className="d-flex ac jc" onClick={nextFrame}>
                  <HiChevronRight size={16} strokeWidth={1.8} />
                </button>
              </div>
            )}
          </div>
          <div>
            {showControls.prev && (
              <div className="latest-posts__carousel--control left">
                <button className="d-flex ac jc" onClick={prevFrame}>
                  <HiChevronLeft size={16} strokeWidth={1.8} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr style={{ paddingTop: 16 }} role="presentation" />
    </LatestPostsContainer>
  )
}

export default LatestPosts
