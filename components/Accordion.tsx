import { useRef, useState } from 'react'
import styled from 'styled-components'
import { HiChevronDown } from 'react-icons/hi2'

const Accordion = ({
  label,
  children,
}: React.PropsWithChildren<{ label: string }>) => {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement | null>(null)

  const handleClick = () => {
    if (contentRef.current) {
      if (!isOpen) {
        contentRef.current.style.gridTemplateRows = '1fr'
        contentRef.current.style.paddingBottom = '12px'
      } else {
        contentRef.current.style.gridTemplateRows = '0fr'
        contentRef.current.style.paddingBottom = '0px'
      }
    }

    setIsOpen((prev) => !prev)
  }

  return (
    <div>
      <AccordionLabelWrapper onClick={handleClick}>
        <Label>
          <h2>{label}</h2>
        </Label>
        <Icon style={{ transform: `rotate(${isOpen ? 180 : 0}deg)` }}>
          <HiChevronDown strokeWidth="1.5" size={16} color="var(--gray-2)" />
        </Icon>
      </AccordionLabelWrapper>
      <AccordionContent ref={contentRef}>
        <div style={{ overflow: 'hidden' }}>{children}</div>
      </AccordionContent>
      <div className="with-border-bottom" />
    </div>
  )
}

export default Accordion

const AccordionLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  max-height: none;
  position: relative;
  width: 100%;
  height: 48px;
  cursor: pointer;
`

const Label = styled.div`
  flex: 1;
  margin: 12px 0;

  h2 {
    font-size: 16px;
  }
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  transition: transform 320ms ease;
`

const AccordionContent = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: 0fr;
  transition: grid-template-rows 320ms ease-in-out;
`
