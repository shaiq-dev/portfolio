import styled, { css } from 'styled-components'
import { InterpolatedCss } from 'types/index'

export const HeadingContainer = styled.h3<{
  $size: 'xl' | 'lg' | 'md' | 'sm'
  $gradient?: { from: string; to: string }
  $css?: InterpolatedCss
}>`
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  color: var(--text-heading);
  font-family: var(--font-heading);
  margin: 0;
  overflow-wrap: normal;
  word-wrap: normal;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -0.25px;
  line-height: 44px;

  ${(props) => {
    switch (props.$size) {
      case 'xl':
      default:
        return css`
          font-size: 60px;
          font-weight: 700;
          letter-spacing: -0.5px;
          line-height: 72px;
        `
    }
  }}

  ${(props) =>
    props.$gradient &&
    css`
      // colors
      background-color: ${props.$gradient.from};
      background-image: linear-gradient(
        180deg,
        ${props.$gradient.from} 20%,
        ${props.$gradient.to} 80%
      );
      background-size: 100%;
      background-repeat: repeat;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
    `}

    /* Extra CSS passed in props */
    ${(props) => props.$css}
`
