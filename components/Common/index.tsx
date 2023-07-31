import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

/**
 * Conditionally render a component using portals
 */
export const Portal = ({
  children,
  container = document.getElementById('__next') as HTMLDivElement,
}: React.PropsWithChildren<{ container?: Element | DocumentFragment }>) => {
  const [domReady, setDomReady] = useState(false)

  useEffect(() => {
    setDomReady(true)
  })

  return domReady ? createPortal(children, container) : null
}

/**
 * Condittionally render a component
 */
export const RenderIf = ({
  children,
  isTrue,
}: React.PropsWithChildren<{ isTrue: boolean }>) => {
  return isTrue ? <>{children}</> : <></>
}

// Other exports
export * from './Loader'
