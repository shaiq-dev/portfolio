import dynamic from 'next/dynamic'
import { cloneElement, useRef, useState } from 'react'

import { RenderIf } from 'components/Common'
import { useIsomorphicLayoutEffect } from 'hooks/useIsomorphicEffect'
import { TooltipArrow, TooltipArrowBg, TooltipContainer } from './_styled'

const Portal = dynamic(
  () => import('components/Common').then((m) => m.Portal),
  { ssr: false }
)

export type TooltipAlignment = 'top' | 'right' | 'bottom' | 'left'

export type TooltipProps = {
  children: JSX.Element
  text: string
  align?: TooltipAlignment
  space?: number
}

const TOOLTIP_ARROW_SIZE = 6

const getPosition = (
  target: HTMLElement,
  container: HTMLDivElement,
  align: TooltipAlignment,
  space: number
) => {
  const targetRect = target.getBoundingClientRect()

  const contRect = container.getBoundingClientRect()

  switch (align) {
    case 'left': {
      const x = targetRect.left - (contRect.width + space)
      const y = targetRect.top + (targetRect.height - contRect.height) / 2
      return { x, y, aX: 0, aY: 0 }
    }

    case 'bottom': {
      const x = targetRect.left + (targetRect.width / 2 - contRect.width / 2)
      const y = targetRect.top + targetRect.height + space + 6
      return {
        x,
        y,
        aX: (contRect.width - TOOLTIP_ARROW_SIZE * 2) / 2,
        aY: -TOOLTIP_ARROW_SIZE,
      }
    }
  }

  return { x: -1, y: -1, aX: -1, aY: -1 }
}

const Tooltip = ({
  children,
  text,
  align = 'bottom',
  space = 0,
}: TooltipProps) => {
  const [active, setActive] = useState(false)
  const [pose, setPose] = useState({
    x: -1,
    y: -1,
    aX: -1,
    aY: -1,
  })
  const targetRef = useRef<HTMLElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useIsomorphicLayoutEffect(() => {
    if (active) {
      setPose(
        getPosition(
          targetRef.current as HTMLElement,
          containerRef.current as HTMLDivElement,
          align,
          space
        )
      )
    }
  }, [active])

  const handleOnMouseOver = (e: MouseEvent) => {
    targetRef.current = e.currentTarget as HTMLElement
    setActive(true)
  }

  const handleOnMouseOut = () => {
    setActive(false)
  }

  const containerStyle: React.CSSProperties = {
    top: pose.y,
    left: pose.x,
  }

  const arrowStyle: React.CSSProperties = {
    top: pose.aY,
    left: pose.aX,
  }

  return (
    <>
      {cloneElement(children, {
        onMouseOver: handleOnMouseOver,
        onMouseOut: handleOnMouseOut,
      })}

      <Portal>
        <RenderIf isTrue={active}>
          <TooltipContainer ref={containerRef} style={containerStyle}>
            {text}
            <TooltipArrow style={arrowStyle}>
              <TooltipArrowBg />
            </TooltipArrow>
          </TooltipContainer>
        </RenderIf>
      </Portal>
    </>
  )
}

export default Tooltip
