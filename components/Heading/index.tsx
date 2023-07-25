import { css } from 'styled-components'

import { InterpolatedCss } from 'types/index'
import { HeadingContainer } from './_styled'

export type HeadingProps = React.PropsWithChildren<{
  gradient?: { from: string; to: string }
  size?: 'xl' | 'lg' | 'md' | 'sm'
  extraCss?: InterpolatedCss
}>

const Heading = ({
  children,
  gradient,
  size = 'xl',
  extraCss = css``,
}: HeadingProps) => {
  console.log({ css })

  return (
    <HeadingContainer $size={size} $gradient={gradient} $css={extraCss}>
      {children}
    </HeadingContainer>
  )
}

export default Heading
