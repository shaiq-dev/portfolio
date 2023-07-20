import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import classnames from 'classnames'

import { useIsomorphicLayoutEffect } from 'hooks/useIsomorphicEffect'
import { DoodleBackgroud, DoodleContainer, HeaderContainer } from './_styled'
import Search from './Search'
import Settings from './Settings'

gsap.registerPlugin(ScrollTrigger)

const Header = () => {
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
      // eslint-disable-next-line @typescript-eslint/no-empty-function
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

  const attachedClasses = classnames({
    'header-sticky': sticky,
  })

  return (
    <HeaderContainer ref={ref} className={attachedClasses}>
      <DoodleContainer>
        <DoodleBackgroud>
          <img src="/img/bg.png" alt="Google" width="100%" height={138} />
        </DoodleBackgroud>
      </DoodleContainer>
      <div className="d-flex justify-between">
        <Search />
        <Settings />
      </div>
    </HeaderContainer>
  )
}

export default Header
