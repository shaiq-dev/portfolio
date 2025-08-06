'use client'

/**
 * The implementation of this Accordion is inspired from this video ( @see https://www.youtube.com/watch?v=B_n4YONte5A )
 * by Kevin Powell.
 */
import { useState, useRef, Children, isValidElement } from 'react'
import { HiChevronDown } from 'react-icons/hi2'

export interface AccordionItemProps {
  value: string
  children: React.ReactNode
}

export const AccordionItem = ({ value, children }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const content = useRef<HTMLDivElement | null>(null)

  const handleClick = () => {
    if (content.current) {
      if (!isOpen) {
        content.current.style.gridTemplateRows = '1fr'
        content.current.style.paddingBottom = '12px'
      } else {
        content.current.style.gridTemplateRows = '0fr'
        content.current.style.paddingBottom = '0px'
      }
    }

    setIsOpen(prev => !prev)
  }

  return (
    <div>
      <div
        className="relative flex h-12 max-h-none w-full cursor-pointer items-center"
        onClick={handleClick}
      >
        <div className="m-[12px_0px] flex-[1]">
          <h2 className="text-base">{value}</h2>
        </div>
        <div
          className="flex size-6 items-center justify-center"
          style={{
            transition: 'transform 320ms ease',
            transform: `rotate(${isOpen ? 180 : 0}deg)`,
          }}
        >
          <HiChevronDown strokeWidth="1.5" size={16} className="text-ash-200" />
        </div>
      </div>
      <div
        ref={content}
        className="grid w-full grid-rows-[0fr]"
        style={{
          transition: 'grid-template-rows 320ms ease-in-out',
        }}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
      <div className="border-b border-solid border-ash-100" />
    </div>
  )
}

export interface AccordionProps {
  children: React.ReactElement<AccordionItemProps>[] | React.ReactElement<AccordionItemProps>
}

export const Accordion = ({ children }: AccordionProps) => {
  return (
    <div>
      {Children.map(children, child => {
        if (isValidElement(child)) {
          return child
        }
        return null
      })}
    </div>
  )
}
